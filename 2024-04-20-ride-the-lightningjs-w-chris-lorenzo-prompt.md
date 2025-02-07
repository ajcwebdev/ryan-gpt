---
showLink: "https://www.youtube.com/watch?v=NDRV14_WDYA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Ride the LightningJS w/ Chris Lorenzo"
description: ""
publishDate: "2024-04-20"
coverImage: "https://i.ytimg.com/vi/NDRV14_WDYA/maxresdefault.jpg"
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

[00:00:00]  All right. Hello, everyone, and welcome to my stream today. I know I was already seeing the late come in here, but, you know, it's all good
[00:00:12] . I am here. I was just doing the last bit of testing with our guests to make sure everything is good. And we kind of got out of hand because the truth
[00:00:23]  of the matter is, we haven't talked. This has been a common theme recently. With solid custom renders where, you know, I put it out there,
[00:00:34]  you know, a couple years ago, and then suddenly people come back with fully fledged working projects. And I'm just like, what? Where did this come from?
[00:00:42]  So I'm actually really excited about having the guest we're going to be having on today to talk about this, because I don't know what this is going to be like
[00:00:48] . Honestly, I had to like do all the research in the last week or so just to kind of like be like, what am I even talking about here? I hadn
[00:00:56] 't heard of it, admittedly. So I imagine a lot of you haven't either. So it's kind of it's going to be interesting. Yeah, it
[00:01:03] 'll come up in this week in JavaScript, definitely. But yeah, let's, let's let me see. Look at my Twitch open here for a second. So I
[00:01:14]  can also tell people that we're live. Today's stream is competing with some other big things going on. I think I didn't realize that Theo was going to do
[00:01:28]  a live stream during React Miami with Prime, which I mean, we should have guessed that he would do that to be fair. So we are competing for space with,
[00:01:39]  with the two arguably biggest streamers in the JavaScript space. So it is what it is. Yeah, lightning JS is what we're going to be covering today. It
[00:01:51]  does look super cool. Yeah, yeah. The 0.3 switch was big. We're still just working through some of the details in the RC. The challenges is not
[00:02:05]  like the server. I'll talk about solid started a bit later. I can't. Yeah, live streams are hard to do. Like they'll, they have really
[00:02:15]  cool moments that you can't reproduce otherwise. But otherwise, you're also just sitting around, maybe trying to yak at people who walk by you. Well, we have a
[00:02:22]  guest who's going to tell us what that is. But yeah, let's, let's see if we can get the Twitch stream actually rolling. Let's get some of
[00:02:31]  you guys in there. I see, I see you guys in YouTube. Let me see what's going on on Twitch. Yeah, so we only got like 10 people
[00:02:37]  on Twitch right now. But, whoa, we, unless I miss this at the end of the last stream, which is quite possible. Greg from Leptos gifted a
[00:02:49]  whole bunch of tier one subs to people. Oh, yeah. Okay, he just did it. So everyone who's here actually has, has the subs. Thank you,
[00:03:02]  Greg. Yeah. I'm here for solid conference. Yeah, we'll get there. I actually, you know what I'm missing right now? I have a cup
[00:03:16]  of ice. Sorry, where is it? Cup of ice. And I have this can of soda and I have not even poured it yet. That's how far behind I
[00:03:23] 'm running right now. So we're going to, we're going to get the drink going here. I know this was more interesting back when this was an after hours
[00:03:31]  show and we were drinking more than just soda or healthy coconut water, but this is where we are at today. Yeah, thanks a lot, Greg. All right.
[00:03:48]  All right. All right. Let me let me do a shout out on Twitter to make sure that people are get them here and then we will get started with our stream today
[00:04:04] . Let's see here to do. Yeah, sorry. I should also sometimes my screen doesn't share properly. Let me share my screen for a second just to make
[00:04:14]  sure that I am in the right place. Yeah, here we go. Let's go. You're live. Let's put Twitch TV up. I like moving.
[00:04:34]  I like encouraging some people to check out the Twitch stream. All right. Although those YouTube likes really helpful. There's like a direct correlation with post watching I find with
[00:04:47]  YouTube likes. So like really, if you're watching YouTube, please hit the thumbs up. It might have moved on you. I don't know if you've noticed they
[00:04:56] 're, they're experimenting with, with new UI on YouTube. Some people have it. My main account doesn't, but they actually like move the comments and the thumbs
[00:05:05]  up and everything to the right hand. So that whole like click below thing is, is over. We're at the end of that age. Some people can click below.
[00:05:13]  Some people can't. Yeah. Yeah. Yeah. Yeah, this is what you have to do to be a real YouTube streamer. All right. By the
[00:05:30]  way, five hours until Bitcoin happening. Yeah. I don't know. Market and stuff right now is, looks like in a place of increased volatility. I, I probably
[00:05:44]  pulled out too soon, but I just made a bunch of money on oil when it shot up. So whatever. Um, let's, let's, let's get to
[00:05:54]  actual stream though. Uh, see, I, I like usually wasting time cause I can get some people come in, but I, I think, I think we have
[00:06:02]  the real diehards today. The people who aren't having FOMO for react Miami. So, um, yeah, let's see here. I think I'm
[00:06:10]  set up. I think I'm good. So give me two seconds here. All right. All right. Here we are. All right. Everybody good. Everybody ready
[00:06:30]  to get started one chat. I want to see your live. There might, there might be few fewer people here today so far, but do come and say in the chat
[00:06:42] . All right. All right. Good. Drink ready. Mike ready. Stuff ready. All right. There you all are. Okay. Awesome. Awesome. Awesome.
[00:06:55]  Then without any further ado, I would like to welcome Chris Lorenzo onto the show today. Hi everyone. Thanks for having me. Hey Chris. How are you doing
[00:07:11]  today? I'm doing well. I, I usually watch on the YouTube, uh, and, and like past recording. I watched a little bit of the whiz one
[00:07:18]  last week. And I just want to say like, this is the highlight of my career being on your stream. Uh, really, really the best Ryan. You are amazing
[00:07:28] . And I'm excited to be here. Uh, that again highlighted last week too. Something like that. Uh, Jadon Jadon's a great guy
[00:07:38] . I've known him for, uh, I guess it's only been a year now, but he's so enthusiastic and passionate about the web like myself. So it just
[00:07:45] , you know, he, he, he, he was in one of those situations where he's been working on arguably some of the coolest stuff, but completely closed source.
[00:07:54]  Uh, no reason to go talk about it in public. Yeah. And now that the angular thing has happened, he's finally been able to like go out and people
[00:08:01]  like, oh yeah, whiz. I know what that whiz thing is, or I've heard of it. What is it? And the more he's kind of
[00:08:06] , you know, he, he, he talked about whiz at the last, uh, GS world conference. And he went there and people were really interested. I think
[00:08:13]  he wasn't expecting that. So this is, this is all, you know, kind of new, but he's been working on the, like this stuff for years now
[00:08:20] . And it's like, it's, it's like people outside of the bubble are finally seeing it. Um, I, I guess it's always kind of like
[00:08:27]  a bit of a tricky balance when you have, you know, working on really cool stuff, but it's kind of like proprietary. Yeah. It takes a choice of
[00:08:35]  the company, whether they want to open source it, um, and whether to let others, you know, take advantage of the work they're doing. And sometimes maybe there
[00:08:45]  isn't a fit, you know, it isn't, it isn't popular or, you know, people haven't really heard much, but, um, on the other
[00:08:51]  hand, like, you never know, like people are always working on really cool stuff. Um, which, as I said, segues right into what you're doing
[00:08:58]  here today. Yeah, yeah. That was a great intro. So Chris, why don't you tell us a little bit about lightning JS. Someone was like earlier, they
[00:09:08] 're like, what's lightning JS in a sentence? Well, I wouldn't mind it in a sentence and I wouldn't mind it in a little bit more than a sentence
[00:09:13] . Yeah. Um, lightning, lightning JS is the name of the project. Uh, if you Google it, you might get the Salesforce, uh, lightning web components
[00:09:20] . It's not that, um, it is the code word for a renderer, like a web GL renderer that's made to run on TV devices. Um,
[00:09:30]  so for anybody who has a TV and watches TV or might be watching this stream on a TV, uh, your TV probably has a web browser in it. And some
[00:09:40]  of the apps on that TV are built, um, with lightning as, as a renderer. And, and the reason for that is because of the performance of the TV
[00:09:48]  devices. So, you know, I've been a web developer for 16 years, well, even probably like 20 years. Um, and you take for granted how fast your
[00:09:59]  laptop PC is and people's phones even today are way faster than a TV device. So I think that's my quick intro. Okay. Okay. Gotcha. Okay.
[00:10:09]  That makes sense. How long has lightning JS been around? Like, is this a new project? Um, so technically we're developing lightning three right now. Okay. It
[00:10:19] 's been around for at least six years that I, I know of probably even a little longer than that. Um, but I've been using it for at least five years
[00:10:28] . So maybe a little bit longer than that. Right. So yeah. Okay. That makes sense. Uh, yeah. Cause I, I have to admit, I
[00:10:39]  haven't heard of it at all until this point. Not that I was building intelligent. Yeah. You wouldn't, you wouldn't unless you had this use case.
[00:10:46]  Right. Uh, and I'll, I'll elaborate more, which is like, um, one of the reasons for its foundation is if you tried to do HTML and CSS
[00:10:55]  on a TV device, uh, and try to get 30 frames per second. Like you, you just wouldn't get it. Uh, and, and this is for
[00:11:01]  older TV devices, right? When it was originally founded. Um, today, if you've got a brand new TV, it might do okay with HTML and CSS. Um
[00:11:10] , but HTML and CSS has a lot of overhead that requires a lot of processing. Um, and when your TV devices, you know, if it's five years old,
[00:11:18]  it might have Chrome 50 on it. Um, and we're at Chrome 120 or something, whatever on our desktops. So you've got a really old version
[00:11:25]  and a really low powered device with maybe a gigabyte of memory. Yeah. Okay. Yeah. Okay. That makes a lot of sense. As I said, I wasn
[00:11:35] 't making it, but how did you end up making TV devices? Like what, like our apps are not devices apps. How did you end up into television apps?
[00:11:47]  Well, I work at Comcast. So, I mean, they're cable TV provider. Uh, and you know, my, my background there is I've been there
[00:11:56]  for 16 plus years. Uh, and we originally built, uh, fan cast was what it was called, which is then Xfinity TV. Um, but that was
[00:12:04]  like the origin of bringing premium content, one line to stream. So I was actually part of the team that brought like HBO and Cinemax and stars, um,
[00:12:16]  online that you'd have to be a paid cable subscriber to actually watch it online. Uh, and then fast forward my career to the last couple of years. Um, we
[00:12:24] 're, we're really at the point of majority of web development happens for TV devices. Uh, and it's a very efficient platform to deploy and maintain, uh,
[00:12:33]  over even native apps sometimes. Okay. Okay. Yeah. Yeah. This, yeah, that's the, the piece that I was kind of missing on the puzzle here.
[00:12:40]  So like you, you've been involved in this kind of TV, like was the web for these applications an obvious choice early on, or I guess they had proprietary their own
[00:12:50]  like special OS's and stuff. Uh, it's still not a obvious choice. It's still not an obvious choice. Um, and a while ago, like before
[00:12:59] , before the web and stuff, there was a system called XRE, which was an internal and proprietary system, um, for developing for setup boxes. And what would
[00:13:10]  happen there was everything was cloud based. So the cloud would generate what should go on the screen and it would basically send down just render this thing. Cause there was no processing
[00:13:20]  power on the boxes. So if you had a box like 10 years old, I mean, it, it couldn't handle processing anything. And we were, we were literally
[00:13:28]  sending down draw calls to the box to actually render thing. Um, fast forward, you know, it's that curve with like processing power in the cloud versus processing power on
[00:13:38]  the device. Um, we've reached a point where there's a lot more processing power on the devices that we want to push some of that down to the device just
[00:13:46]  to reduce costs. Right. Okay. Yeah. I mean, yeah, I think that's a natural evolution of a lot of these things. The question is obviously can the
[00:13:55]  device handle it? I mean, this has been one of the, the, the challenges I, if on the general front end world, we, we went very hard
[00:14:02]  pushing everything onto the device. And now we're kind of like walking backwards a little bit. Cause not all devices are equal. Um, I'm gathering the baseline for television
[00:14:10]  is much, much, much lower as you were saying. So it's like, this seems like a interesting question question. Cause like the processing power versus like the network
[00:14:21]  actually might be much closer of a concern compared to like, you know, in the web space where we can be like, okay. Like they at least got this,
[00:14:29]  you know, level of device probably your. Yeah. So one of, one of my passions is, uh, Addy Osmani and performance optimizations and progressive web apps
[00:14:40] . Uh, so like even before I did TV apps, I wanted to build web apps for mobile devices, uh, which I go out and talk on and, you know
[00:14:49] , like years ago when phones first came out, you would go on a website and it was just terrible. Like you building, building for the web was awful. So
[00:14:56]  everybody really started building native apps just because you had to for performance. And you fast forward to today where your iPhone processor is like as fast as your, your desktop processor.
[00:15:09]  It's like, you can throw a website on there and it will be really performant. Um, and if you compare that to a TV device, so, so yeah
[00:15:16] , your mobile phones are really, really fast, uh, compared to a TV device. And of course there's like the high end spectrum of your latest iPhone 14 or
[00:15:25]  15, whatever version they're at now. And your latest high end Android device versus the $200 budget devices. Um, but even like the $200 budget Android device is
[00:15:35]  way more expensive than your TV device. So if you've got a Roku stick for $30, you have to realize like that chip in there is maybe $30
[00:15:45]  in costs. Cause they got to break even. Um, I have a raspberry PI three in front of me, which is what I test on. Yeah. So a
[00:15:52]  raspberry PI three is, is really like at about what a TV is, or maybe even a little faster than a TV device. Um, I even, I even have some
[00:16:03]  slides on that. Like part of the slide deck of talking about the performance of device. If you want me to pull them up. Uh, yeah. Yeah. Yeah
[00:16:09] . We, we, we, we, we can look at the slides to two secs. I just wanted to, um, someone just had like a really general question
[00:16:15] . And I just, cause it's when people talk about web, not on the very first thing in their head is this. So I'm just gonna throw it out there
[00:16:23] . Are we talking like react native for TV or? Uh, no, no. Um, I we're talking full web browser. JavaScript is happening in there and a
[00:16:34]  web GL renders, which is, which is a canvas tag. So instead of doing HTML and CSS, it's a browser with a canvas tag. Um, but it
[00:16:43]  is not going into some kind of native framework running on the device, which would be like what react native is. Um, and I, I love, can I answer the
[00:16:50]  next one, which is our lightning JS examples currently focused on keyboard. Uh, so Ryan, Ryan had this same thing the other day. I sent him the demo app
[00:16:59]  and he went there and he's like, I can't click on anything. And I'm like, yeah, this is made to run on a TV device where you use
[00:17:05]  remote control. Uh, so everything is keyboard navigation on these sites, um, because a user would use a remote control and they're, they only have like left, right
[00:17:13] , up, down and okay. Um, which also introduces like different problems that we face, uh, of like, there's some TVs that are like the magic remote.
[00:17:21]  The LG has a magic remote, which is a pointer click event. Uh, and then. Other TVs. Other TVs, you only have remote. So the framework is
[00:17:29]  kind of set up to handle focus and moving focus between different elements on the screen as well. Okay. Last thing before I, although this might be in your slides too,
[00:17:40]  um, uh, is, uh, what was I going to say? Ask lightning JS. I said, we haven't heard of it very much. Um, it's
[00:17:50]  use it with a Comcast. Mm-Hmm. Does that mean that it powers a lot of the TV apps that people might be using currently? Yes. Uh,
[00:17:59]  I think that's, I can't really disclose which ones I can tell you. Okay. Uses, um, lightning JS, but there are other parties, uh,
[00:18:08]  and outside of the United States, like if you go into Europe and other countries, um, where there's a lot more like each country is, is basically its own individual
[00:18:18] , independent cable operators. Uh, there's a lot more competition. There's a lot more variety. So you get a lot more of needs for individual apps. Uh
[00:18:27] , so they do a lot more development than like where you're in the United States or North America. You might have three or four different major providers. So you don't
[00:18:35] . It's, it's not as clear how many people are using it, et cetera. Awesome. Okay. Good to know. Yeah. The thing that was coming
[00:18:41]  from the reply from the last one is everyone's like, okay, so it's more like water than it, than react native. Yeah. And it it's not
[00:18:49]  like those either of those. Um, cause really clutter and react native. My understanding is they compile down into like your native iOS, your native Android. And this is not
[00:18:59]  that like when you pull up the demo site and you're running in a web browser, there is a web browser on the device that is doing the exact same thing. Um
[00:19:07] , and it's sending keyboard events. It is, it is literally a web browser on the machine. That is my framework. Yeah. Yeah. Yeah. Um,
[00:19:17]  okay. That, yeah, I think that that helps. Like, then people will be like, Oh, is it like flutter for web? Then people, the people
[00:19:24]  just keep on trying to frame these things. Let's, let's actually just let, uh, understand those better. Yeah. Okay. So here's the deal. Um
[00:19:31] , Chris has got some slides, which he will try and present. Well, we'll probably be pestering him with tons of questions from the chat and myself. Um,
[00:19:39]  feel free to keep on asking the questions. Cause that's the idea here. We're interactive. We're interactive. So we're probably going to break up his nice
[00:19:45]  slides, you know, but, uh, yeah. Yeah. Well, let's just, I'm going to put this on the stage just so that we can actually just
[00:19:52]  get started and you can, you can start get you, you know, taking us through this. Yeah. Thanks Ryan. And just for full like disclosure, I actually go
[00:19:59]  out and do public speaking. So this is like a slide deck that I use. I have a talk solid JS, the universal render. Um, and yeah, I,
[00:20:09]  we won't go deep into all the slides. Cause I have like a whole bunch of fan thing for Ryan and like how I'm a big fan. He's the
[00:20:16]  best and everything. I mean, I am very interested how we ended up with solid JS. Cause I, I, I, okay. I gotta show the people one more
[00:20:23]  thing really quick here. Well, well, I mean over here, I looked up lightning JS, right. And it sounds pretty cool. Obviously television APIs, uh, you
[00:20:32]  know, being used by Comcast, you know, big television companies. This is powering real things. And you know, new version starting slick look website. As
[00:20:42]  you move around, you can see stuff moving in the background. And then I go to the docs and it's blitz solid. Like there's no react, no view
[00:20:51] , no Svelte solid. And then I'm like, okay, well, what's blitz? I never heard of blitz. I never heard of bl
[00:20:56] itz, but if I, if I look at the, where is it? I'm trying to remember where it was looking at here. Choose your flavor. Blitz are
[00:21:03]  in-house built app development framework. So you guys have your own framework. I would expect a company like Comcast or something big to have their own forever. And
[00:21:09]  then they're solid. It's like basically two options today, which blew my mind. Cause where you like, everyone like goes and makes the react version first, or they
[00:21:16]  try and do the thing with react. Um, I'm you might be answering this to the course of your, your talk here, but, um, I'm really
[00:21:26]  curious how solid became the first, like, you know, integration basically here. Um, this is pretty exciting to me. Yeah, and I, I will answer that
[00:21:35]  accessibility question in the, in the chat in the future too, because accessibility is very important. We do have very accessible, um, interfaces, um, but it's much
[00:21:45]  simpler than the web. I'm gonna answer it real quickly. Okay. Everything is just strings that voices out, you know, where the user is. So it's much
[00:21:52]  simpler because you just add a string to the elements and then you say the context of where the user is. So that's, that's the accessibility answer real quick. Um
[00:22:00] , and now I'll go through. Yeah, eventually I'll answer your question too, about the framework. Uh, I think that's an interesting part. Um,
[00:22:07]  man, there's just so many questions now at this point that it's like, I don't know how you deal with this pounding of questions and wanting to answer everyone.
[00:22:16]  It's, it's all good. We, we will let a few of them collect and then find opportune moments. The accessibility one, I wasn't sure if it
[00:22:23] 's good beforehand, but, um, yeah, let's just get rolling. And I think it'll make sense when it makes sense. Yeah. I'll go through this
[00:22:28]  quickly. Like I said, I present this regularly, but it will give you the same content. But it will give you the same context that we kind of already covered
[00:22:33] . This works on TV devices. There is a web browser. There's two web browsers out there. Um, WP, which is like web kit, Safari. Um
[00:22:41] , and then there's the chromium base. So you got Chrome and Safari, even on TV devices. Like you can't, can't get rid of them.
[00:22:50]  And like this WP is made for embedded devices. So it's not like your full desktop version of Safari. It's like a trim down, highly optimized. I think
[00:23:01]  one of the issues that we face is a lot of our devices are 32 bit. So like Safari now is in 64 bit. They have the back port stuff and change
[00:23:08]  it around, which I'm not an expert at how much that affects in the code, but they have to do that. Uh, and just sort of some ideas.
[00:23:17]  Like if you have a Samsung TV, uh, which is ties in, um, this is like, what TV do you have? How old is it? And you'll
[00:23:26]  notice like the, this is the version of Chrome that you have. Oh wow. 47. 47. Yeah. So, and this is, this will be an interesting
[00:23:34]  thing for you. It's like, I've tested solid JS on Chrome 49. It works perfectly. And that's, that's where you kind of introduce proxies
[00:23:43] , right? Yeah. And yeah, you laugh. Cause like we've been with developers for a really long time. It's like, when was fetch introduced? Do you
[00:23:50]  ever know? Like. Yeah. Right. Pop quiz, Ryan. When was fetch introduced into like Chrome? I, I honestly don't remember. I was lit.
[00:24:02]  Yeah. Cause fetch those. I think it was before 49. I think it, I think it was like 42 or something. I don't know. I go to MD
[00:24:10] N and I would have guessed 2015, but it sounds like it's actually later than that. Um, yeah, I think it's later than 2015. Uh, so that
[00:24:18]  this is like the time machines that I'm dealing with on a regular basis. Cause people will have TVs that are five to seven years old at the max. And you
[00:24:28]  want to get as many people to use, um, you know, use, use your software. So you have to write it to be as backwards compatible as possible. Right
[00:24:36] . Yeah. No, this is, this is, this is a funny thing because when I started solid, it was 2016 time period. So I was sitting there and
[00:24:46]  I knew about proxies and I was like, realistically, I think this unlocks a huge amount of power. By the time anyone even thinks of using or playing with
[00:24:54]  this, even myself, like my old company, like proxies are going to be everywhere. Right? Like that, that, that was like the, the, the
[00:25:02]  thinking what's interesting is in solid 1.7 or I think I backtracked and there's actually a bunch of extra code complexity here, but we have this new
[00:25:10]  approach where we don't introduce any proxies unless you introduce a proxy first yourself. Um, which was to hopefully help people a bit because like, if you don't
[00:25:20]  use stores, then the thing thing we use to merge props or to like handle, uh, which is to handle spreads and stuff in the JSX actually detects,
[00:25:31]  um, if the shape could change. So there is a couple of rules there, but generally speaking, we can, we can avoid, um, creating any proxies
[00:25:41]  as long as we can avoid that. Like, as long as you don't try and make dynamically create an object to be spread. Like, as long as the,
[00:25:49]  the chain is like relatively static, which sounds crazy, but like, I actually worked through this whole thing because people were talking about low power devices that didn't have prox
[00:25:58] ies. And I'm like, man, this is like, not in my scope, even back in 2016, when I was first creating the framework. So I'm smiling
[00:26:06]  and laughing, um, because I won't disclose who, but we solid JS actually runs on Chrome 38. There are people out there who have made it work and they
[00:26:18]  have like ESLint rules to avoid merge props. Um, and they, they do like a little tweak to the proxy stuff to get it to work. Um, but
[00:26:27]  as long as you don't use the things that you just outlined, like it works on older, older devices, which is like. I just want you to know people are
[00:26:37]  using this on Chrome 38 and it works. Yeah. That's, that's amazing. Cause okay. Yeah. Like I actually want to look this up now. When
[00:26:46]  was Chrome 38 released? Uh, it's, it's like 2015. It's, it's data. Cause right now we have more frequent releases. So the number goes
[00:26:57]  up quicker, but going from like Chrome 47 to Chrome 38 is like two years. Stable channel October 7th, 2014. Yeah. October 7th. Yeah.
[00:27:08]  Yeah. And then even you also have to understand, like if it was released on 2014, it made its way into TVs by like 2015. Yeah. Uh, so that
[00:27:16] 's the other thing, like 2023 M 94 is the Chrome version. Cause it takes like a year for the manufacturer to like test the browser and make sure it's working
[00:27:24]  and then kind of embed it into the device. And then it's like almost permanent at that point. Well, I guess it is permanent at the point. Cause they don
[00:27:32] 't force upgrades cause it's too expensive to kind of test and, and get these upgrades going in the TVs. So there we go. Apparently we can under certain conditions
[00:27:39] , support browsers that were out. Uh, years before solid was ever released to the public. Like I released in the public in 2018. So like browsers that came up four
[00:27:50]  years earlier. Well, there you go. Yeah. I like this comment. It's like the IE nine nightmare all over again. And I'm, I'm just
[00:27:58]  giggling. Cause like I've been in web development for 20 years. I remember IE six and we, we got the t-shirts when we finally discontinued that
[00:28:05]  IE 666. And that was like, I got t-shirts for the team to like celebrate when management was like, yeah, we no longer have to support
[00:28:13]  IE 6. And that was dropped. Um, yeah, web developers don't know how good they have it today. It's so funny. Cause web as a platform
[00:28:21]  generally like the backwards compatibility is the thing that haunts us more than like a ton of other platforms. But to think that there's other devices that are, yeah, that
[00:28:31]  are, that are, yeah. That are locked in even older. And so they haven't like gotten away from God. Yeah. IE was, was just something
[00:28:39]  else. Yeah. Um, I think I'm allowed to say that on stream. Yeah. Everybody would agree. Who's a web developer. Um, all right. So
[00:28:47]  I'm just going to continue through this. Yeah. Okay. Keep going. So we build web browser. So exactly what you see on the screen, right? Like
[00:28:56]  it's this, but without the Chrome of the window. Uh, you're just seeing this on your TV device. Uh, and then comparing it to TV power performance.
[00:29:05]  We kind of covered this a little bit. This is a raspberry PI four. Like you can get the specs on it. Um, this is like 1.8 giga
[00:29:12] hertz. You get one gig or two gigs. Like your TV device will probably have one or two gigs. Uh, and again, like from a manufacturer perspective, they
[00:29:21]  want the least amount of power that they can offer you because they're selling TVs for a few hundred dollars. Uh, and that cuts into profit margins. Um, and then
[00:29:30]  like these, these are my fun slides comparing a Mac book pro from like 2012 to a raspberry pi four and like even 2012, which is really long time ago, that was
[00:29:42]  way more powerful. Uh, let me know if you want me to pause on anything more, but this is the iPhone 14 versus a raspberry pi four. Uh, and
[00:29:52]  your iPhone 14, your handheld phone is like 800% faster than a pi four. Yeah. That's yeah. I was, yeah, I was looking at that. I
[00:30:02]  was, yeah, it's, it's, it's basically hard to find a device that low. Like, like, what do we, are we looking at like same
[00:30:10]  power level as like, okay, let's see. It was about four. So we're talking like, no, I guess. Like. Yeah. I don't
[00:30:18]  even know. Like first generation Intel core time period. Like, I think it's faster than a Pentium four. Probably. Um, I mean, maybe not. Um
[00:30:27] , sorry, not to geek out. I think the Pentium was like a single for processor and then it went dual core. Right. Yes. That actually might be
[00:30:37]  right. Cause these, a lot of these processors in the TVs are also single core as well. Yeah. So you don't get multiple threads like downloading stuff in parallel
[00:30:46]  or web workers. Like we have web worker support in the browser, but it might still be like a single threaded web worker, which really doesn't do much. Yeah.
[00:30:55]  It might actually hinder performance. Um, so then, then when you compare it to the raspberry PI four, I talked to my boss and he's like, no
[00:31:04] , it's, it's closer to a raspberry PI three. Uh, and that's about 34% slower than the PI four. So you take all those numbers and
[00:31:11]  just like decrease it more and more. And that's, that's really like the level of performance that we're dealing with, with these boxes. Oh, wow. Um
[00:31:20] , yeah. And then going on in the top, like we tried, like we tried doing HTML and CSS on the device and we actually built this screen on the device.
[00:31:29]  And so the fun part of like the conversations is you go back to the UX and it's like, I don't think I can do driving. I don't think
[00:31:35]  I can do drop shadows. Uh, in fact, I don't think I can do anything rounded. I don't think I can do gradients either. So this is
[00:31:42]  like pure, like CSS rent. Like the cost, like there's obviously memory allocation with HTML, but the actual, like just the painting of the CSS is actually problematic here
[00:31:54] . That as well, then. It's kind of all of it. Um, in fact, I like have here. So if you go to like the Chrome website,
[00:32:02]  the developers of Google, like they have all of it. Google, like they have that five page article of how browsers work. Yeah. And, and it's actually
[00:32:10]  really complicated. It happens really fast when you load up a web page and you have like the timeline of downloading scripts and parsing the HTML and then processing the CSS.
[00:32:20]  Um, and then all of that has to come together to create a render tree. Uh, and, and, and to be fair, like browsers today, like Chrome 90
[00:32:29]  plus, and even like Chrome 70 are really fast. Like they've, they've had performance improvements with like downloading asynchronous scripts on separate threads and bringing it all together.
[00:32:41]  Uh, and that's great, but like, I'm not using Chrome 70 and your TV is probably not using it. And it also only has one or two threads versus
[00:32:48]  being able to process all this. Uh, so it really adds up, um, and even where HTML and CSS can be a bottleneck. And also like there's
[00:32:57]  been a lot of advancements in CSS with like layers and, and doing CSS three with rendering on different layers, um, with the GPU. So it has gotten a
[00:33:06]  lot better. Um, but it's still, it's still a struggle. Uh, but I'm hoping at some point, you know, HTML and CSS might be performing
[00:33:17]  enough that you can build an app and it, and it's great, right? But in the meantime, there's lightning JS and web GL render. Very cool. Two
[00:33:26]  seconds. Just get in there. I, I gotta give a shout out to dread pirate Roberts who dropped, uh, another. Handful of gift subs in, um
[00:33:34] , gonna make sure I catch those. Cause I, I, I, I'm looking at the shared chat and it doesn't tell me when people sub on Twitch. So
[00:33:42]  I gotta give them a shout out of thanks to make sure. Um, before I forget. Anyway, surface small interruption. There we go. No problem. Um,
[00:33:51]  this, this goes back to like, what is lightning? Uh, and it's simply the JavaScript framework for building high quality TV apps. Uh, and the reason why it
[00:33:59] 's fast is because it uses web GL. Uh, which is a canvas tag and web GL has been in the browsers for 10 plus years. I think maybe even more
[00:34:08] , uh, used to be like canvas 2d was the original drawing web GL. And then there's web GPU coming out. Uh, and if anybody's like played video
[00:34:16]  games inside their browser, it's, it's kind of amazing. What you can do with web GL. Um, and for people to understand it, like web GL is
[00:34:23]  really just a graphics library. It's, it's for drawing on the screen. And so rather than doing HTML and CSS, where like the browser then takes care of
[00:34:31]  layout and figuring out how big are your divs? You know, where are they out on the screen? Like that's really computational intensive. Um, web GL, we
[00:34:40]  are telling every element on the screen. What is your X, Y position, what's your width and height, and then drawing. Uh, so it really cuts out
[00:34:49]  on that middleman layer. Um, yeah, immediate mode instead of retained mode. Yeah. That is, that is actually true. The Dom is retained. Um,
[00:35:00]  and I guess web GL now is it's your back to like, it's like any kind of writing. I've never used web GL, but I'm gathering it's
[00:35:07]  similar. I've used open GL when I used to make games. I'm gathering generally the same kind of idea where you're just re you're re-rendering every
[00:35:15]  it's, it's. Yeah. PS is a thing. Yeah. Request animation frame and then every frame there's this renderer code that goes through every element
[00:35:25]  on the screen. Checks whether it needs to be updated and then tells it to draw on the screen. So it's basically like a video game, but for making TV
[00:35:32]  apps. Cause it's trying to render as 30 frames per second. Plus, uh, on your TV device. Yeah. Uh, yeah. Is, is the name lightning
[00:35:42] .js reference to flash? I don't really know. I think there's, there's like lightning.js was like the original name of it. And it's
[00:35:48]  just for fast performance. Uh, and then you get all the other code words that come out of it like thunder. Uh, and then like Thor and. You know,
[00:35:56]  you know how like companies just name stuff internally to, to produce things. Right. Right. We heard all about the wizard of Oz last week at Google. So.
[00:36:06]  Yeah. Same kind of deal. Um, so we're going to start transitioning into where does, where does solid JS fit into this? And I actually have that as like
[00:36:13]  a slide. What, what were we talking about solid JS? Um, but so lightning two has been out for years and the team is, so lightning two was the
[00:36:24]  previous version of the framework. It was a monolith. Um, it had no reactivity in it. Uh, so like reactivity, like everyone knows reactivity and
[00:36:32]  web development, but for lightning two framework, what would happen is if you wanted to make a change to the UI, you had to get the element and then you had to
[00:36:40]  call patch on it. And like update it. So if you made a fetch request for data, you get the data back and you're like calling patch or draw these
[00:36:48]  things, et cetera. It's not automatically doing anything. Um, and that also supported Chrome 38. So lightning three is a, it has started like two years ago or
[00:36:59]  so where it was a fresh rewrite of, of lightning two to kind of, kind of bring it up to date. And the key part about it was we separated out
[00:37:08]  the framework from the render. The render is what's does all the heavy lifting of drawing things on the screen. Um, so here's like a demo page in the render
[00:37:18] er code base. Uh, it's like an elevator going up and down. And then this little animation of all these things moving on and, and you know, Hey,
[00:37:25]  I can draw a circle and a square on the, on the screen. And the render takes these create node, um, and you set X, Y positions. How
[00:37:34]  big is it? Is there an image with the source? What color do you want it to be? Uh, that is RGB a value. So for those who don't
[00:37:42]  know, you usually used a hexadecimal with like a hex tag. Uh, if you, if you put the, the last two characters on that's alpha.
[00:37:51]  So that sets your alpha channel for how transparent that color is. Um, it's one of the annoying things cause I really like hex and doing it. And the VS
[00:37:58]  code is made for that. Um, and then you, you set parents and Z index, and it's basically like building a dom tree at that point. Um, and
[00:38:08]  so, so renderer has two primitives, create a node and then create text node. To render hello world or whatever text you want to render on the screen.
[00:38:17]  Right. Um, and, and the render, I'll throw this out there too, cause this is really fun, which we don't have to talk about. But if
[00:38:24]  you want to rendering font is really, really difficult. Uh, this uses sign distance field to render the text, which like gives you better anti aliasing and, and it
[00:38:34] 's less blurry. Uh, and it's kind of what video games use is my understanding. I don't know the full details of it, but it it's,
[00:38:41]  it's like lower memory, much crisper fonts. It looks really good. Um, and then the render also contains like an animate API to move X, Y positions.
[00:38:51]  Uh, making larger scale it like everything that you'd want to do with the CSS animation. I can do calling the render. Right. Just so I understand this blitz
[00:39:01]  thing. then is it similar to an API to what lightning two was using? Like, is this a fairly easy migration from lightning two to three for people who? No
[00:39:11] . Okay. So blitz is a new thing as well. Yes. Okay. Yeah. Um, interesting. Uh, yeah, I, I won't fully introduce bl
[00:39:21] itz. I, I will say that blitz as, as you read on the website is an internal, um, framework for building TV applications. So it's written
[00:39:31]  by the lightning JS team to add reactivity. Uh, and it's, it's based off of Vue JS. Uh, so they, they, they give you
[00:39:39]  the same similar syntax as Vue JS to add reactivity. And their goal is like Chrome support. Yeah. I was gonna say it looks like view two actually though,
[00:39:50]  not even view three. It looks like the options API. Yes. Okay. Yeah. I would love to go deeper in that. Um, and I think even at
[00:39:59]  this point, like I have slides about blitz and like framework, which I'd like to skip through really quickly and just go to, um, bring your own framework.
[00:40:12]  This is, this is where we get, uh, your question. Yeah. Of, you know, and this, this is what I was researching. Uh, and
[00:40:18]  I, I will give more backstory, right? Like we started writing blitz and building your own framework. I mean, Ryan, I could ask you building your own
[00:40:26]  framework. How long does that take? Is it hard, Ryan? Yeah. I mean, it, and I, I can only imagine when you actually have people using it
[00:40:33] . Like I, you know, like that, that's a case I hit now, but like, it's a lot easier to initially build a framework when no one's
[00:40:42]  actually using it as well. And this is, you're kind of in this scenario. I imagine like the, the actual getting started. Isn't that hard. It
[00:40:49] 's like everything that comes afterwards. Like people can write a render library or, you know, get the beginning of a framework going, you know, in a couple, a
[00:40:58]  couple of weeks, but then maybe even a weekend if they're really so ambitious, but then everything that follows once you're committed along that path. Um, is an
[00:41:10]  incredible amount of time over many, that spans many years. Yeah. I actually have, there's like a quote in here, um, where software development, 60% of
[00:41:21]  the cost is maintenance. So the initial development is not the total costs. It's the support setting up community, building a website, the ongoing long-term costs.
[00:41:32]  Uh, cause like, and I, I even joke, um, like it's like having a baby where, you know, it's quick and fun to, to produce
[00:41:41]  the baby. But once you have it, like you are on the hook to support this thing for a really long time. So that is my joke. I have two kids
[00:41:49] . I love them very much, have babies. Um, but that's my sarcasm. Um, uh, so yeah, this, this goes into there, there
[00:41:57]  was the Blitz framework that the team has been building and, you know, it takes a long time to build a framework. And I was like, well, what other
[00:42:04]  alternatives do we have? Uh, cause one of the downsides with it is like, it's a complete rewrite from scratch and it doesn't really use any open source tools
[00:42:14]  to do anything. Uh, so that's why, that's why I asked that question. Because if Blitz wasn't just a straight migration for people for Lightning 2
[00:42:22] , then that in theory suggests that any of these other integrations could be, I mean, obviously they can't be, they won't be as tailored as Blitz's
[00:42:30]  for the specific use case, but the, you know, a little bit of equal opportunity kind of scenario. Um, correct. Yeah. Yeah. Um, yeah,
[00:42:40]  so it's, it's, it's custom tailored. It's interesting. Um, and, and this goes into like, again, bring your own framework and that was
[00:42:49]  the goal of the render. And, and I, I will say like, so there's Blitz and solid are official on the lightning three website as official frameworks.
[00:42:59]  Um, some of the people in the lightning community have already started building a react version of it. And also, um, yeah, a react native, I think somebody's
[00:43:08]  working on too. Hmm. Um, and I, I will emphasize like, I don't have empirical evidence of this or anything, but there is overhead with frameworks.
[00:43:18]  Right. So, and performance is of the utmost importance. Um, so one of the, one of the things that I checked out with solid, of course, first is
[00:43:26]  like solid.js is the fastest front end framework. Bell like 1.08. And I'm like, okay, I got, I got a test for you, Ryan
[00:43:33] . I want to make sure that you you're actually really fast. Right. Right. Um, but we'll, we'll go into that in a little bit.
[00:43:40]  Uh, yeah. So I was just researching. I don't, I don't even remember when I first figured out or found like your, your article of custom render,
[00:43:51]  which I think I have here. Cause I ha I have pictures of all your articles that you've written. I've, I've read most of your, your thing
[00:44:00] , and I will emphasize. Um, I really like you as an engineer. This is our first time really meeting and talking. Um, but they're, they're,
[00:44:08]  there's all different types of engineers out there. And my understanding of you is you're that engineer. Who's very detail oriented. And you, you, you take notes
[00:44:16]  of why did you make decisions and you post them publicly and you have these YouTube channels. And you're, you're constantly sharing and educating. Uh, and, and
[00:44:26]  I, I've read it. I read your articles. They have been very valuable to me. Thank you so much. This is another. Thank you again, Ryan.
[00:44:34]  You're the best. Um, but this, this thing was great. Like when I stumbled on this, I'm like, huh, what does this even mean? Solid
[00:44:41]  universal render. Huh? And, and like you put two and two together of like, maybe we don't have to build our own framework. Maybe we could just use
[00:44:50]  someone else's framework. Yeah. It's, it's an interesting one. I don't know if everyone knows this, but there is a re the reason we have a
[00:45:00]  solid universal renderer. Was that I got kind of pushed into it from, uh, another framework author who I respected a lot. Um, he was just like,
[00:45:10]  he was like the web's done. We need a new standard for the web. And I was like, okay, I don't know if I believe that. It sounds
[00:45:15]  like you're describing water. Right. But I, he was like, you know, he was talking about, you know, one of the, the benefits of,
[00:45:23]  uh, you know, these like VDOM libraries, they have this like, or like, um, react specifically. Like they, they have this like custom renderer
[00:45:30]  thing. And I was like, well, you don't even need a custom renderer in solid. You can literally just not use lowercase, uh, tags and
[00:45:39]  no DOM APIs are used. And then. He was like trying to say like, but picture if you could build. The future of like what the native elements should be.
[00:45:50]  And I was like, okay, fine, Dominic, I'm going to go do it. And by Dominic, I mean, Dominic Ganaway from In
[00:45:55] ferno and, um, Svelte. He's largely responsible for Svelte 5. He came into our discord talking about like this theoretical framework that we could all
[00:46:03]  do. You know, he was even suggesting that I just dropped solid and just like join him on this new framework that was going to like reinvent the HTML element. And
[00:46:12]  I was like, man, I, I, that's seems very ambitious. And I'm pretty happy where solid is right now. But he was like, yeah, but
[00:46:21]  he kept on like, he came back a couple more times. And then he was like, and I was like, and I was like, okay. It sounds like if
[00:46:27]  we added this kind of universal reactivity approach to solid. Like we I'd have you like 90% of the way. Right. And he's like, yeah,
[00:46:35]  do it. Um, so in solid 1.1, I think I, or was it 1.2? Yeah. I added the, this render basically. Cause Domin
[00:46:41] ic decided to drop by our discord. Um, you know, a few times just to kind of talk about the future of the web. Um, so yeah, the
[00:46:55] , we do have. Interestingly enough, uh, Oh, him. Thanks for this because incidentally. One of solid core team members, Nikhil Sarah joined us after
[00:47:08]  he also found solid through its universal render. Cause he wanted to make a three, a more performant three JS port, another web GL library. He wanted to make
[00:47:15]  video games with solid and he, his first week of using solid. He just did it. He just made ported three JS over the universal render and he built it.
[00:47:24]  And, you know, since then he's become core team. He's probably one of the primary, uh, contributors or of solid start and he built Vinci and
[00:47:34]  everything else. But it, for us, the whole thing actually started from this universal renderer. So just a little side tangent. So it's very cool to hear that
[00:47:42]  this thing that I basically whipped up over a weekend because Dom pushed me and I didn't know what to do with this. I had no experience with it. Um, I
[00:47:52]  honestly looked at what react was doing. Then I looked at view and I was like views more similar, but not quite the same. So I kind of copied what view
[00:47:59]  was doing mostly. And then the real test for me was actually, again, as you mentioned, taking notes, I just almost immediately took it on stream. Having never tested
[00:48:08]  it, we built a custom Dom renderer on stream using it and it scored in the JS framework benchmark at the time. I mean, some libraries have moved around, but
[00:48:17]  it was, yeah, it was about 10% slower than solid, like all optimized, but it's scored about the same as Inferno at the time. It
[00:48:24] 's like the fastest virtual Dom library. And I was like, Oh, damn. Like this for something that's just not even like optimized for it. Just the, the
[00:48:33]  core reactive primitive approach, like a, and a universal renderer. And I should probably look up that stream at some point and dump it in the chat. Give me a
[00:48:41]  second. I'll do that in the background, but you know, it was kind of crazy to see that like, yeah, this has potential. And I guess we
[00:48:49] 're still hearing about it now. So this is very cool. Yeah. I'm like, I don't really need solid.js the web. I need this thing
[00:48:57]  that you built. So thank you. And thank you, Dominic for, for encouraging the building of this. It's well appreciated and definitely using it. Um,
[00:49:06]  and even the three JS implementation that you, you referenced, like I was obviously Googling, like who else is using this user or spender? Like, how do I
[00:49:15]  do this? Um, cause that, that becomes like, I'm reading this docs and then you have to figure it out. Right. Um, so, and I
[00:49:22] 'll go into that in a little bit too, but yeah, this was, this was the key thing. I don't, I don't remember the exact date or anything
[00:49:28]  that I was like, you know, you know, how ideas kind of like hit home and then you like, you let them sit for a week and then another week goes
[00:49:36]  by and you're like, I should, I should just do it. I should just try it. Um, I think, I think you even have that in, I
[00:49:42]  have that here. So I just did it just to quote you with why, why did you write solid JS? You're like, you know, it just makes sense
[00:49:50] . You, you've had it percolating in your mind long enough and you're like, I just, I just gotta do it. Then you created a baby,
[00:49:56]  um, which goes into, you know, now you have the solid JS thing that you have to maintain and run with for a long time. Yeah. Uh, yeah.
[00:50:04]  So the universal renderer is awesome. You know, as I explained with lightning JS, um, like we have these primitives, we need a framework on top.
[00:50:14]  And this was just like the perfect fit of like, how does this work? Can I throw the two together? Uh, and just to go back on that question, there
[00:50:20] 's, there's a question about reactivity. Um, reactivity simply like web developers take this for granted. It's, it's not necessarily signals. It's
[00:50:28]  just the idea that you can change a variable and somewhere in the UI automatically updates. Like that was kind of the selling point of react. Uh, a long time ago is
[00:50:36]  like, look at this, the Dom just automatically updates with the change. Uh, and you take it for granted, you web developers, but some people didn't have react
[00:50:44] ivity built in. Um, but yeah, we'll talk about solid JS signals and everything too. Cause I think they're, they're pretty powerful. Um, you
[00:50:54]  know, I, my experience with solid JS is actually from learning the render. I still don't have a, you know, 10 out of 10 grasp on how everything
[00:51:04]  works internally. So it's kind of fun building a framework on top of it with like all these signals and create effect. And I'm like, when do I use create
[00:51:14]  render effect versus create effect versus, you know, why do I need to set the state or the color or all these different terms? So I, I read through your
[00:51:25]  docs like a hundred times as I was building this. Um, but my reasoning, like I read all your articles, why solid? Um, I think the most important was
[00:51:37]  it's the fastest, which goes with it's the smallest. Like those two things are like, I know startup performance is all about those two things. Uh, and then
[00:51:45]  like, I'm really impressed with like, it's fully featured. Um, so my goal wasn't necessarily to do react. Another reason for why I picked solid was
[00:51:55]  like, you already had this universal render API. React doesn't have that. So I would, it should have it. Oh, it might, it might have it then
[00:52:04] . Yeah. That's they, they were the first ones to do it. React native is an example of it. Yeah. React. Yeah. Was, but they actually
[00:52:12]  have something, uh, you can make, I don't know how instructionalized it is, but you can make a custom render that they, that's why they separate react
[00:52:20]  from react DOM. So, but yeah, I, yeah. I was also concerned a little bit more about the performance of react versus solid. So like I've done
[00:52:30]  react before. I think it's great. Uh, it's good for web development. Um, but I, I have known from history, like it's a virtual DOM
[00:52:37] . It does like diffing. I didn't, I didn't know how much I wanted to dive into that. Um, and then, you know, it probably
[00:52:45]  is, it's probably not as fast as solid JS. At least I hope not based on your, your benchmarks and performance things, but yeah. And I, I looked
[00:52:53]  at react native as well. And I think the downside with that was like, I was just turned away when I have to implement like 30 components or how did these all tie
[00:53:01]  together? like the barriers to entry to get started and make it work was a lot higher with those other frameworks. Right? So I picked you also out of desperation.
[00:53:11]  Okay. Not making it sound like that at all. Um, but, but really it was these things, right? You are the fastest you have benchmarks. Um,
[00:53:20]  it's familiar. Like it's basically like react with the JSX syntax. Like people could easily adopt this coming from react or if they're react developers. Uh, and
[00:53:31]  we even had people. It was like, this takes less than a day to learn if you already know react. Cause it's very similar patterns, very similar state, et
[00:53:38]  cetera. Uh, and then the other cool part is like, you're, you're pretty established. Like you may not think so, but you have 30,000
[00:53:46]  likes. And as you were mentioning, blitz is a new framework that is new, right? People have to learn something from scratch. Right. Um, but yeah,
[00:53:56]  it's been fun for me. Like when you adopt a framework and I'm using the solid JS stuff. Like I have all your guides. I have all your tutorials and
[00:54:05]  anybody who comes into building lightning. I'm just like, first learn about solid and all the primitives that you use. Yeah. This, this just goes into like
[00:54:16] , what are signals a little bit of that stuff. We can skip over that. That's interesting. Cause it's like, it's like a different level of scale,
[00:54:23]  right? People come in and they're like, oh, I could use react. If there's a billion tutorials on that solid, there's a lot less, but I
[00:54:31]  mean, solid versus someone's internal tool that they're going to build at company X or company Y. Yeah. That's again on a completely different scale. So yeah
[00:54:41] , that's interesting. Yeah. Yeah. Cause you, you, if you recognize the business use case of this, right. You can't go out and hire on the
[00:54:49]  marketplace. Like I need a lightning developer. Like nobody on the stream has ever heard of it. Right. And, and you're like, what is this? And then
[00:54:56]  you have to come in and then you hire web developers and they have to spend a few weeks learning it, getting up to speed on it. Like that's expensive for
[00:55:03]  a business. So the more that you make a framework equivalent to an open source or Vue JS or solid or react. Like you just get a hundred thousand people have already
[00:55:14]  built something with react. They can just come in and start. Yeah. And I think that's a very powerful selling point. And, and yeah, my understanding on
[00:55:22]  the performance side, this is a good sort of trade-off kind of like thing at react might be more popular, but like, again, I can't really say too
[00:55:31]  much, but you, you, you, you aren't, you guys aren't the only people in the television space who specifically, who've been looking at solid. I
[00:55:40]  had a lot of interest from other people in the television space, other companies. Um, actually I don't even know if I have to say anything. Cause I think
[00:55:49]  they've already said it. No, no. Like I, yeah, I think they've said it themselves publicly, you know? Um, although I, the, the
[00:55:56] , the loud mouth there, I don't, I think left the company last, last week or so, but, um, yeah, you know, so I, I
[00:56:04]  think it makes a lot of sense. I think the low memory profile, the, the performance, and I've, I've talked to people there and they have these
[00:56:10] , in their case, large react code bases. And they're like, they, they asked me how I, we could hack solid so they could keep the react code and
[00:56:17]  make it work like solid. And I'm like, man, I would love to just say yes to you. But the problem is if you run your react code and,
[00:56:25]  and expect like change the solid and have it run like react, it's actually going to be worse than react for you. Probably it might be close, but it will
[00:56:33]  probably be worse. You know, there's a reason why there's a, you know, different model. We, we were not, I couldn't condone them turning
[00:56:41]  off safeguards so that everything would re-render. I'm like, then you might as well continue to use react. Like, but you know, so I,
[00:56:49]  I don't know if that stalled out on that side. I haven't heard from them for a few months. Um, but just there is definite interest in that television
[00:56:57]  space. Um, in some of the largest, most viewed things on your television. So. Yes. Yeah. Because performance is like critical and, and solid JS is
[00:57:08]  very, very, very performance. Um, yeah, it was interesting for me for those TV space. Like there was people who was using solid with lightning too, and they
[00:57:19]  like build it on top. Of it, which was like, wow, this is, you've been using solid for years on top of lightning too weird. Cause now
[00:57:28]  we have this custom renderer. You can, we're, we're kind of doing it. Uh, so yeah, it's very exciting stuff. Um, can continuing
[00:57:36]  on. Like one of the cool things was I saw this demo app, uh, with solid and solid start. Um, yeah, just like I've been using solid
[00:57:45]  for like nine months with my goal was originally universal render, building out this whole thing. I haven't even dived into solid start. Um, I think it's,
[00:57:54]  it's gonna be a powerful paradigm of pre rendering some of the stuff. Like you wouldn't pre render the web GL stuff, but you would pre gather like your APIs and
[00:58:04]  put them in the base HTML page. Interesting. Okay. So for instance, if you were watching Netflix or some provider, um, that row on top is like common
[00:58:13]  across most of your, your people that you have your promotional stuff and it's common fetch requests that you kind of want to embed in the HTML and send down. So some
[00:58:23]  of the patterns that you do to optimize a webpage are very similar in the TV space. Interesting. Okay. Cashing, bundling, like everything is, is, is
[00:58:32]  identical problems or very similar problem space. Yeah. Okay. Um, so I, I really liked this solid start TMDB app because like, this demo is very,
[00:58:43]  very nice. Um, obviously it's a TV app, which you like, but it's also, um, we technically it's experimental and with the latest versions of solid
[00:58:52]  start, we actually realized that we couldn't, it wasn't doing it justice to be in solid start. So we've actually broken out this mechanism into the other libraries and
[00:58:59]  we're slowly bringing it back. So this app is like the pinnacle prototype that we reached at one point, but couldn't release to everyone. And now it
[00:59:07] 's, you can't build that today with solid exactly the way that app is, but we're getting there again in an even better way. So, uh, anyways
[00:59:15] , it's a very cool demo, but you, it attracted you obviously cause it's a TV interface or a mobile, like it's a very, uh, like small
[00:59:24]  device or the, you know, embedded device. Yeah. And I will say I have run this on the raspberry PI three and it starts up at the same speed or
[00:59:34]  if not faster than the, the, the lightning three equivalent. So the HTML CSS renders really darn quickly. Cause this is almost static when you generate it, which is
[00:59:45]  amazing. Um, and then, then the challenge would be if you use HTML and CSS, how do you do keyboard navigation and all that other part? So you still
[00:59:54]  need to add layers on top of this, but it's, it's definitely an interesting thing to explore in the future. Um, because amazingly fast startup time. So
[01:00:05]  kudos, kudos to you and the team who built this. I was, I was amazed cause a lot of times I live my life in like the Chrome dev tools
[01:00:12]  and I'm just like, let me do a performance load on this. Wow. That started. I'm not gonna lie this. I mean, the thing, this is
[01:00:21]  the app that got us the Chrome Aurora research funding. So. I mean, it's brilliant. Like it's, I can't believe how fast it is. Yeah.
[01:00:30]  Um, if people decide note just on a side, just I'm serious about this. If this is an area where people want to continue the research and they're really
[01:00:39] , really into it, they should reach out to me and the team. Um, uh, we, as many people know, Alexis worked on some of this stuff and he
[01:00:47] , he tackled the serialization problem, um, which has moved us forward significantly. All the server function stuff for solid start release. Um, all the, you
[01:00:57]  know, streaming updates, making it all one system, which is very fundamental for us to getting back here the right way. Um, but like people are more interested on
[01:01:05]  like, say the HTML partial sides, the Island side, that kind of research. And, um, you know, the, I don't know what was your time,
[01:01:13]  but we, we do have funds to put aside to continue this research. I kind of, we kind of pause this for a moment, getting solid start 1.0
[01:01:20]  out the door. Um, and obviously Alexis is a Superman working on multiple projects. He's working on a solid and million JS right now. Um, but if,
[01:01:29]  if, if any other are particularly interested in getting, um, back into these HTML partials, getting into, you know, uh, islands router, all this kind of
[01:01:41]  space again, you should reach out. Cause we do have funds available to support, uh, fellowships, um, uh, you know, for considerable effort in this
[01:01:50]  area. Just, just on the side. That was cool. Yeah. I'll, I'll also take a moment to answer the performance wise. Do you have any
[01:01:57]  comparison with like react native and flutter? Um, I think that's, that's a great question. Uh, so internally we've been doing research on flutter and
[01:02:06]  react native and like doing comparison between them. Um, we, we don't have. Like conclusive evidence or anything. Cause we're still exploring flutter. The,
[01:02:16]  the downside with using a native app, right? Like flutter basically runs native code. Um, or, or it actually can run in a browser, but you have
[01:02:27]  to do a lot of, um, like integration with the TV devices. Cause every TV device might have different sound and audio or video decoder. Um, and if you
[01:02:37]  use the built-in browser that like Samsung offers or LG, like they've already taken care of that. And you use the standard Chrome APIs or web APIs, um
[01:02:48] , to like do sound, to do all the different stuff that you do on the web. And you get that for free, all the integration with the hardware. Um,
[01:02:56]  so, so there are some downsides. Uh, the other thing is like we're rendering to the GPU. Basically when you're, when you're using canvas and web
[01:03:06]  GL, you're, you're pretty fast with rendering. Uh, so performance wise getting the frames per second should be near the same. Uh, the, the benefit
[01:03:15]  of a native app though, is you're running native code, which should execute faster than JavaScript. Um, maybe started faster, but JavaScript also compiles pretty fast. So
[01:03:25]  there there's pros and cons. Uh, and I think other cons with like flutter or, or native apps is like deployment process. Uh, with the web,
[01:03:33]  it's well understood. You just deploy it to a web URL and then the browser's pulling stuff from your website versus if you're creating a native app, you have to
[01:03:41]  deploy it to the device. Um, which is not a problem with mobile phones, but you know, if your TV space, you have millions of devices and it's not
[01:03:49]  really set up to do deployments every day or whenever they want updates. Like you could have a six week to six month rollout cycle, which is very hard.
[01:03:58]  Okay. I think I third thoroughly answered that. All right. So yeah. What about where are we going? Right. What's next? Um, yeah. So solid
[01:04:12]  JS, there's a playground. Uh, everyone loves this thing. Um, we had to build our own for blitz, but I spent like a day to adapt
[01:04:20]  like the universal render into the playground. Uh, so now there's an option to get it working. I still have to fix it. So if you go out there and
[01:04:28]  try to fix it, like I had it working in a previous version, but bundling is so hard with like building a web version with JSX tags in it.
[01:04:37]  And then like Vite has dev mode versus prod, but if you try to load that with the import.meta.environment in a browser, it's like,
[01:04:47]  it doesn't understand that. You can't really do a default object construction on it because it's like Vite replaces it to an empty string and it's like, oh
[01:04:57] , so getting it right is really hard. Cause then you also have to do an NPM release every time to actually test it. Uh, but I will work on
[01:05:04]  that eventually. It's on my backlog. I had it working. I have it. I'll show you it working in a second. Um, so I think this now
[01:05:12]  goes into universal render target. I read your PR here, read through the whole thing. Uh, you kind of had the same Eureka of like, well, if
[01:05:20]  we don't use these lowercase things, like we can just do render whatever we want. I'm like, I like that you're summarizing it now too.
[01:05:29]  You can use DOM APIs and then you even had a sample of here it is using WebGL. And I'm like, this is exactly what I'm trying to do.
[01:05:36]  Thanks, Ryan. You got me like all the way there. Um, and I, I think this goes, yeah, this is your summary of we don't have to
[01:05:45]  call DOM APIs. Um, we can, we can just call whatever you want. So this goes back to like, you know, this wasn't your original idea,
[01:05:55]  right? Uh, all these ideas grow out of other ideas. And we, we've kind of talked about like react native and, you know, react can even do this
[01:06:02] . Um, I, I, I find it interesting. Uh, cause it's, it's like a paradigm shift in your mind. Uh, I've written HTML and
[01:06:11]  CSS for a long time. Um, and you know, web developers get stuck in this thing of like, oh yeah, HTML and CSS. I understand that. And
[01:06:19]  then you have to understand like, these are just words that we're putting on a screen, which then some browser is interpreting to draw something else on the screen. So it
[01:06:27] 's all like APIs all the way down. And it's very similar to react native or any other thing, which is. You're, you have differing views,
[01:06:35]  but you're giving it the same view. And then there's some kind of compilation layer, which converts it from Android to iOS. And like here specifically is here's the
[01:06:45]  component that you use. And then some translation layer is happening to say, this is what it's called a native Android. This is what's called an iOS. And the
[01:06:52]  reason why I didn't want to do like react native is like, did I have to reimplement all 30 of these components or so for it to work? Um,
[01:06:59]  it was, it was just a lot of overhead. Um, in, in the lightning three integration, like there's just two components of view and a text, which are
[01:07:10]  just like a node and a text node. So those are the two primitives that you get from the solid integration for things to magically work. Uh, I think, oh
[01:07:19]  yeah, here's the solid JS playground working with, uh, lightning JS. When I did get it working, um, the canvas tag is gone now. I,
[01:07:27]  I originally had that. And then, um, so another, another side side bit, Ryan is, um, the people, another, another selling point for solid is that
[01:07:37]  internally, like we have teams and they build the TV app and they might also build the web site for it as well. So to provide both avenues. Right. Right
[01:07:48] . Right. So my, my goal and selling point in this is like, you can actually use this to render for TV and the same code that you write to render for
[01:07:58]  TV. You can use to render to web. I I'm, I'm, I'm, the more you talk about this, more excited I'm getting here.
[01:08:03]  It sounds like we got some solid JS developers coming over to the Comcast perhaps. I don't know. This sounds, this sounds pretty interesting. Right. Yeah. Yeah
[01:08:11] . So I removed the canvas tag because then if you use your solid router, um, you, you don't, it it's, it's identical between web and
[01:08:22]  TV, but you have all your routes set up. Making all the API calls and you can keep that identical between web and your TV app. You know, assuming you
[01:08:33]  have the same routes, uh, and all the same API data is usually the same. You just draw it differently. So you have pages that handle drawing for TV versus drawing
[01:08:42]  for web. Um, so this is, this is your universal render API, right? And yeah, all I had to do is replace what you have in here with how
[01:08:53]  do I create? Um, nodes in lightning three. Uh, and then I go through this. So like we're basically creating a dom tree, your parents and children
[01:09:04] . Uh, this is it in the playground. So this kind of like really breaks it down. Uh, thank you for whoever wrote the playground. So thank you. So
[01:09:12]  if you take like a basic hollow world, you can see the output of what happens on the right. And I'm like, this is awesome. Uh, so you have
[01:09:20]  that create component call. Um, which then is that tag and goes into calling create element, like almost immediately calling create element of creating a lightning three node. And then
[01:09:31]  your props are just sent right into the render as one for one, whatever you want. And, and so solid JS is really responsible for building that tree. And all
[01:09:40] , all I'm doing is like passing those props directly into the render. So it's a very simple interface between the two, um, which goes through like document create element
[01:09:50] . That's create element. That's create element. Um, I think this, this goes to like, here it is how it works, um, between the render
[01:09:57]  and solid JS. Um, that create element just calls renderer dot create node. Um, and, and there is, there is a layer of abstraction on there where I
[01:10:06] 'm creating like a JAS, a JavaScript object, which stores some of the properties that I need on the front end. And then the render node is like a sub
[01:10:17]  sub property of that. Right. Right. Yeah. Yeah. I, I, I'm, I'm always interested, like, cause like, yeah, there's
[01:10:25]  certain details. Like I, I just trusted views API surface for the most part, but like in my head, I just keep on going into like, like keeping back references
[01:10:34] . And like, is a tree always the, the right way of looking at like a web GL scene? Like I have someone actually asked up here a little bit higher
[01:10:43]  up there. Like if you're going to just go use web GL, did you ever think of using like a game engine web GL thing? Like why something like web based
[01:10:51] , uh, is it just the mentality of the declarative like layouts that fit better or whatever? Like you mentioned already you can build stuff on the web and on TV,
[01:11:00]  but it's like, like, I, I, I, I've always kind of wondered, I know this might be a weird part to interact with this in the middle
[01:11:06] . It's just like how much is a tree, the right representation, um, for these kinds of user interfaces? Yeah. Uh, it, it, it's
[01:11:15]  pretty accurate. It's, it's very accurate. It's, it's a little different in the sense that like the nodes are all kind of drawn on the screen and
[01:11:24]  they don't necessarily have to be in a tree structure. We do handle like Z indexing of moving things up and down. Um, and so like the order that
[01:11:33]  you put them in or you create them kind of sets the default Z index, but then you can move them up and down. Um, the, the reason why you also
[01:11:42]  need siblings and this tree relationship is like, you have hello world, but if you want to put hello variable name world in there, like now they're siblings. Like
[01:11:53]  you need to know what order, so you need to have some understanding of children. Um, right. It just kind of makes sense to maintain that tree relationship. And even
[01:12:02]  with web GL, like you, you keep that parent relationship because you have clipping. So if you have a parent that has 900 width and you want something to be cl
[01:12:10] ipped when you go out of the screen or out of that box that you need to have parent children relationships. Um, so yeah, tree structure is, I would assume
[01:12:21]  the ideal way of going. Um, and then like here's creating text. So one of the fun things, uh, man, we're just going to go into it
[01:12:31] . So I talked about text writing, but we're just going to go all the way through this. Sure. Let's do it. Yeah. So this is like
[01:12:38]  rendering text. Uh, and, and you look at this and you're like, I mean, you've written divs and HTML and H1 and P tags. And
[01:12:46]  it's like, you would just expect the page to just kind of lay out and display like this. Like that's obvious. Right. Uh, and, and here's
[01:12:53]  what that would render to. And that's what you would expect it or want it to render to is like title of the page. There's a paragraph tag. Um
[01:13:00] , the really complicated part is that sub line container and then like these three pieces. And then you have this popcorn image in there between two text lines. And I'll tell
[01:13:11]  you why this is hard. Uh, so fonts fonts. There's a lot of different fonts out there. There's this website fault lore of text rendering really hates you.
[01:13:21]  And as a web developer, I never really understood this. Like, cause we take for granted. Like I put text on the screen. It's magical. Uh,
[01:13:29]  thank you. Whoever developers worked with text, um, rendering text. How hard could it be? As it turns out incredibly hard. That's a quote from this article.
[01:13:38]  Um, we have Frank who's on our team, the lightning team. He's the one who did this like SDF, uh, sign distance field font rendering engine.
[01:13:46]  Uh, and it's spending a lot of time. Uh, he's, he's kind of like you, Ryan. He's one of those meticulous engineers, very
[01:13:53]  thought deep thought. Uh, and you need that, that type of person to solve these problems. Um, but doing, doing the font rendering. The problem is you
[01:14:03]  don't know what the width of the text is. So you're putting on the screen. You can tell it the X, Y coordinate, but you have no idea how
[01:14:10]  wide that is. So you have no idea. Where do I lay out that popcorn image? Um, you have to first render subline text, subline text,
[01:14:20]  figure out what is the width of this, then render the popcorn and then render the next text. So you're kind of like laying it out. Um, cause what
[01:14:27]  happens is like, I call the render. I say, create a text node and it will come back. I created it. I drew it and it was 30 pixels in
[01:14:35]  width. And then from there, the framework has a very simple flex layout that says, I now have all my widths of my texts. I can do a flex
[01:14:45]  layout to render these different pieces together. Just in case you have any questions, applause. Yeah, yeah, yeah. I mean, cause the, the, yeah,
[01:14:58]  this, and this is the other kind of point or thing I was thinking about, cause I guess the renderer hides those details. So solid doesn't need to worry about
[01:15:07]  it. Cause like, we're talking about things happening in particular orders. Right. Whereas we very dumbly just go create the thing, create the thing, update the attribute
[01:15:17] , whatever. But underneath that, I guess a lot of these systems are going to have their own scheduling, like mechanism for the actual rendering itself. Kind of like the
[01:15:25]  Dom does. Um, so I guess it does, it is universal. Like it does just kind of work then. Um, cause like those kinds of details I can't
[01:15:36]  know about, but they always kind of creep into my thoughts. Like, like, you know, I'm, I'm very skeptical of generic solutions. Like, you know
[01:15:44]  what I mean? Like I always expect like there to be some kind of gotcha. Um, so. Yeah. I mean, that's kind of why you build
[01:15:52]  your own framework, right? Cause you're worried there's going to be a gotcha, right? Like eventually this isn't going to work. Um, and that's
[01:15:58]  the fun part is like, I built this thing. Um, so doing the solid JS integration took me three weeks. To get like an understanding of solid, to learn
[01:16:07]  the universal render to get it like working. And then for the last like six months, plus I've been building actual applications with it to be like, where are the got
[01:16:19] chas? And, you know, none of them are in like necessarily the solid land. There was things in the framework, um, which I'll, I'll answer
[01:16:27]  like this flex question as part of it. Like flex doesn't exist in web GL. Um, flex is something that I wrote. I call it flex because like I'm
[01:16:37]  a web developer. Uh, people understand flex. And so the properties that you would put in subline container are like display flex. Uh, justify content flex start.
[01:16:48]  And then I have a very simple like for loop that just goes through the children and says, set the exposition of this first one at zero. It's width is 30
[01:16:58]  pixels. So set the next one at 31 pixels. Uh, and then how, how wide are you get the next one and set the width a little bit further apart.
[01:17:08]  So that's, that's really all that flex does. That's kind of what the browser does is figure out the width of the elements and then do layout. Um
[01:17:15] , so yeah, it's not, it's not, it's not web GL doing it. It's there's, if you actually look at the source code of the
[01:17:21]  project, um, you can actually go here and like, and I apologize. This is my code that I wrote. Uh, you know, you know how engineers are kind
[01:17:34]  of embarrassed by their code all the time. If anybody has a PR to make this flex better or to giggle at it. Um, this, this is how I
[01:17:44]  do flex layout. Like it is, you have justified flex end. It's a simple for loop to go through all the children. Um, which I will blow this.
[01:17:52]  Yeah. Yeah. It's just a simple for loop to go through the children and say, where, where should your exposition be? Um, and I did,
[01:17:59]  can you, can you highlight the next follow-up question? Cause I'm like, this is great. Did you use yoga for layout? Just dropping in the link right
[01:18:11]  now for people who want to go to that place in the code. And yes. Thank you for asking that question. I did research yoga for layout. Um, and
[01:18:21] , and to be fair, I, I tried it. I tried implementing it for awhile. Uh, the yoga, like my short understanding or comprehension or memory of it
[01:18:30]  is like, it was like a hundred kilobytes. Uh, I think some of it was also, um, like, uh, web assembly, like it runs in
[01:18:38]  a web assembly context, which we don't have on TV devices. Uh, except for like the newest TV devices might have it. Uh, so there were some complications
[01:18:46]  with it. The other thing is like the performance of yoga, like yoga is a super high end flex layout, layout engine for like react react native, et cetera. Um
[01:18:58] , and when you go back to TV devices, it's like, do I really have all this time to do the layout using yoga? Uh, and I'm like,
[01:19:07]  no, I really don't. I have a cheap and dirty, uh, flex rendering. Like I'm calling it flex, but it's 137 lines of code
[01:19:16] . And it's simply like four loops going through and setting X, Y positions, like very simple. Um, and even like, I even have examples. It's not
[01:19:28]  a full implementation of flex. Like it's just do flex, start do flex, then do space. It has a little bit of margins in there, et cetera.
[01:19:37]  Um, and everything else. Oh, cool. Do you do overflow ellipsis yet? Yes. The text render actually does that. Um, you can set a contain
[01:19:46]  width on there and it will actually do the dot dot dot. So, um, yeah. Oh, actually you can see it at the end of the paragraph. So the
[01:19:55]  paragraph goes a little bit further, but there's three dots there. Uh, so thank you again, Frank, for your hard work on the render and text layout.
[01:20:04]  Um, he, he, there's also two layout engines. So canvas canvas tag comes with a built in text rendering. Uh, and then there's this sign distance
[01:20:13]  field. Uh, which is like, I don't even, I don't, I don't even want to go into the time to explain it. Cause it's
[01:20:19]  really complicated, but it's like all the lifts and things and you, you, you, you're doing blurs. Um, but yeah, text rendering is really
[01:20:27]  hard. Where were we Ryan? Yeah. I just, I'm just thinking here, cause it's like things we take for granted on the web platform. Cause we don
[01:20:35] 't have to worry about this, you know, with CSS and all the text handling that happens built into the DOM APIs we use. Whereas when you're handling everything yourself,
[01:20:46]  there's, you know, with WebGL or rendering, it's a lot more of these details. But I mean, as you said, you got something working pretty
[01:20:54]  nicely here. So that's pretty sweet. I also checked out Taffy. So I think that's the next tab. Yeah, yeah, exactly. I think the
[01:21:02]  Taffy guy came from the, um, yoga guy and, and rewrote it into rust. So yeah, it was, it's, it's supposedly much
[01:21:09]  faster, but I think it only works in WebAssembly environments. So I was like, I definitely can't use that one. I wanted to, I had it implemented
[01:21:17] . Like I'm cause I started with Chrome, right? On your desktop browser. That's how you do the development. And then eventually you're like, I need
[01:21:25]  to get this on devices. Will this actually work in a device? And like, that will definitely, definitely not work. Oh, okay. I mean, I didn't
[01:21:32]  put this into perspective before because you were using Chrome 38 in a bunch of slides earlier. It's like the cutoff point or switch point, you know, small in
[01:21:39]  Chrome 38, et cetera, which that marker is actually based at, I guess, based on what solid back supports to, um, in the, in that scenario.
[01:21:49]  Um, when we give her the, uh, the, the proxies and I guess maybe some other features, but like, so we're going back to 2015,
[01:22:00]  let's say like how I should have asked this before. Like how far back on devices do you have to support? So it's funny. I got a smart TV
[01:22:07] , not my current one, but the previous one that's actually still working right now, uh, around 2000, I want to say 2012 or 11. It was a
[01:22:17]  long time ago. And I swear those guys stopped updating the television, like two or three years after it came out. So like, basically like, I, I basically like
[01:22:26] , I went from, I forget what it was. I went from like their OS, I went up one major version or something, and then they never updated me again.
[01:22:34]  So like, just on an aside, like when you have to support things with the, with the stuff, like, like, is it, is the target like devices that
[01:22:45]  were produced in the last 10 years? Last 15 years? Like roughly what, what are we talking here generally? Um, it depends. So it depends is the right
[01:22:54]  answer all the time. Um, right. Like internally for the teams that I've talked to, like, this is how the conversation goes. Right. I'm like,
[01:23:02]  yeah, lightning is awesome. You should use solid. Solid is really awesome. And then we get to that awkward phase. You know, it's like dating, like,
[01:23:11]  Hey, so what, what, what browsers do you have to support? And then like long awkward pause. And they're like, Oh yeah. Like Chrome 50 and
[01:23:19]  above. And I'm like, yes. All right. I'm like, I'm like 49 is like, you need to be at least 49 and above. And then
[01:23:24]  I'm like super happy. Right. But yeah, I think most of the teams that I've talked to are like Chrome 50 ish and above like Chrome 49 is
[01:23:37]  like the baseline that I've tested it with. Uh, and, and I have it working. Like I have a screenshot of it somewhere working. Um, but the
[01:23:45] , the TMDB demo app that I have online that should also be working. Uh, right. Yeah. Yeah. And like, I had to use this, uh
[01:23:54] , define config in this, um, legacy plugin for solid, um, or, or vite. Thank you for all the open source people who write these plugins and everything.
[01:24:04]  Like, I can't say thank you enough. Like the web exists because of all the contributions from people. Um, and it is Chrome 38, 38 was like the
[01:24:14]  original, original, um, 49 Chrome 49 is when proxies were introduced. Right. Yeah. Like, do you have proxies or do you not have pro
[01:24:24] xies? Yeah. If, if you missed it earlier, uh, uh, parasocial, uh, essentially. Um, solid as it, that if you
[01:24:34]  follow certain rules, if you don't introduce a proxy, we won't introduce a proxy, even with our spreads and, uh, other stuff. So technically solid will work
[01:24:46]  back to, uh, 38, 38, if you follow ESLint rules, but if you want to use solid, like without worrying and just use it normally it's
[01:24:56]  Chrome 49. And yeah, you have to understand, I can't, when I came out solid back in 2016, I was not worried about people not having prox
[01:25:04] ies, you know, assuming that no one would be really picking it up until a couple of years. But it is cool to know that there are people using it on television
[01:25:13]  devices that were produced as early as, you know, I guess early 2015. Yeah. Yeah. Yeah. So here's, here's like the config to make it
[01:25:24]  work with Chrome 49. Like I'm setting the legacy targets. Um, I tried, I haven't tried further past 49. I could probably get it going further, which
[01:25:35] , which is why you see this additional legacy polyfills. And I'm like polyfilling fetch. And I, I don't think I need to have poly
[01:25:42] fill proxy. Um, but once I was polyfilling fetch, I'm like, what world am I living in that I have to polyfill fetch? And I started
[01:25:51] , I started getting really depressed. I'm like, you know, please don't make me go back to Chrome 38. Uh, that's like going back to I
[01:25:59] E six and IE seven and IE eight and IE nine. I'm like, no, no, please. Um, so yeah, to answer your question,
[01:26:08]  it depends on teams. Uh, a lot of the ones that I've been talking to are like Chrome 49 above. I think one of the other difficulties you have is when
[01:26:17]  you have Chrome 38 and older browsers, like your TVs also probably a lot slower too. So performance is, is definitely going to be worse on those TVs or harder to
[01:26:28]  get to a nice consistency that users want. Um, and then those TVs are probably also about eight, eight years old plus by now. Yeah. So they're, they
[01:26:41] 're older TVs. Huh? Okay. So flex, like there's a slide on flex rendering layout is because of this cool flex. Um, like before enlightening to
[01:26:53]  rendering texts and doing that little popcorn thing was the most painful thing that you can imagine because you would have to have an on load event to get the text. Then you would
[01:27:06]  have to call patch to update it. Cause there was no reactivity. So like doing this is 20, 30 lines of code, maybe, maybe 15. Um,
[01:27:16]  but doing an enlightened too, this was well over a hundred and 150 lines of code to get this to happen. Yeah. That's not somewhere you'd want to be.
[01:27:26]  It's just kind of interesting. Kind of hearing this progression. Cause clearly lightning three renderer is way more advanced and how many custom renderers go through this process where they
[01:27:36]  start, you know, you know, supposed to, I guess for user interfaces in this simpler place. And then end up emulating a lot of the features that you
[01:27:43]  find in the Dom, you know, like to a certain degree. Um, yeah, it's interesting. Yeah. And it's, it's advanced. Like it
[01:27:51]  handles some of the things that you would need for a TV app. Um, and then like, this is another example of padding around just making a box around text, right
[01:28:03] ? Uh, you have this similar problem of you have no idea how wide this text is. We have a general idea of how tall it is. Cause that's usually
[01:28:12]  the font size or the line height. Um, but the width, you don't know until after you get it. So I even used your like decorators, um,
[01:28:20]  that use colon with padding. Uh, and, and essentially that waits for the elements render. It gets the ref to that node and then calculates out some stuff to add
[01:28:30]  in the seven pixels, 15 pixels, uh, of padding around the border box or to make that box. Um, and, and like CSS, you could just do
[01:28:39]  this with one line. You're like, wait, what, why is this a problem? Um, but yeah, this is, this is pretty hard. Uh, and
[01:28:47]  I tried to do as much as I could to mimic CSS and, you know, what web developers would expect. So there's even that style tag, which just takes an
[01:29:02]  object. And those objects are, are essentially just spread onto, um, the lightning render. Like they're one, like I'm just taking it as an object format
[01:29:13] . So you don't have to put it as individual properties on the node. I see. Okay. Yeah. And then similar names to what you would expect with, uh
[01:29:22] , CSS. Yeah. Yeah. Yeah. I, did, did you end up doing custom JSX types as well with this? I like, these are things I
[01:29:31]  haven't actually played with, with the universal render. And I heard that, that they were, they, it can be tricky. I don't know. I,
[01:29:36]  did you, cause I'm just thinking now like the, the type, the typing for, for those styles are obviously going to be different than our styles. Um, yeah
[01:29:45] , I, I will say, um, so another thing I'm not a tech, a TypeScript expert. Um, and in fact, like even doing this was
[01:29:55]  learning TypeScript, uh, while doing it, um, Frank, that text renderer guy, he is the one who contributed all the TypeScript code in here. Thank
[01:30:04]  you again, Frank. You're amazing. Um, and I think there's still a lot of like exploring and understanding we have to do on the TypeScript front to make
[01:30:14]  it better. Um, but it, it works. And somewhere in here, like we define the two primitives. Um, and like I said, my two primitive
[01:30:24]  components are view and text. Right. And the view component is just this, like a node and spread the props. Right. Like it's nothing. Uh, and the
[01:30:35] , the goal, the reason for doing this was just to, um, you know, try to prevent people from just doing whatever divs and HTML in case we wanted to
[01:30:44]  improve the TypeScript. Uh, we kind of needed this control over only use view and text and that way we could do all these helpers, uh, so that
[01:30:53]  when you write code, um, like some of this is one, like the, it, it kind of defines all the props that are on the JSX element. Gotcha
[01:31:02] . You get like a completion with some help. Um, and it kind of cleans it up. Yeah. Okay. So you did it from component types rather than intrinsic element
[01:31:11]  types. Okay. I just, okay. Yeah. And that intrinsic node stuff, like the other challenges, like I'm inheriting from a render, which has a
[01:31:22]  whole bunch of props and names and has TypeScript definitions. So I kind of like reuse them while extending them as well. Um, which is where this intrinsic node style
[01:31:33]  common props comes from. Frank kind of wrote that. He's like one of those really descriptive people with the things. I eventually rename it just down to like node styles
[01:31:42]  and text. Yeah. Yeah. Yeah. Yeah. As a developer, I don't want to have to type all of this. Yeah. Yeah. Like the JS
[01:31:50] X namespace itself has a, a ability to override intrinsic element types and stuff. Um, and the, and the fight you like, there's two ways that go about
[01:32:00]  it. It looks like what you guys are doing is doing it from the component level, but you could also make it so that like lowercase node had those types, but
[01:32:07]  then you'd have to like have your own JSX provider that. Yeah. Yeah. This is what we have. Okay. It needs to be removed. Okay. Yeah
[01:32:17] . That's, that's kind of, okay. Yeah. Yeah. And there's Frank. Um, yeah, I mean, this is, this is, this
[01:32:26]  is the whole party. Yeah. I mean, the, the downside with this though, is like when it renders, everything is just called node. So it becomes harder
[01:32:37]  to debug. Cause everything is going to create element is just node, node, node, node, node. Text, text, node, node. And I was like,
[01:32:43]  Frank, why can't we use div and header and sidebar or whatever lowercase name you want? Yeah. Um, and that was like, that was like some
[01:32:53]  tradeoffs, like discussions that you have with engineers of like, did I make the right decision or not? I don't know. Um, that's for other developers to
[01:33:01]  decide, but you can put an ID tag on it. So. Okay. Interesting. Yeah. Um, I think that's actually another cool part that I could show
[01:33:11]  off real quick. Uh, I, I wonder if I have the inspector turned on. No, I don't, I don't have it turned on here. Um
[01:33:18] , but like when you're developing with this, let's see if I'm in the light project. Uh, so the open source project I recently, or I I
[01:33:32] 've had the team or help, um, to recently change the format of it. So it's a little bit more difficult to understand cause I haven't, I haven't
[01:33:42]  completed the side part of it. Um, I, I will ask like, you know, if anybody wants to go here, go to lightning jazz, go to solid
[01:33:49] , check it out. You're welcome to star it, download it, play with it. I would, I would appreciate that. Um, but yeah, if you go
[01:33:57]  to the project now, we actually set it up as a PMP workspace and you go into the source directory. Uh, actually, no, sorry, this is solid.
[01:34:06]  Let me go back to the solid demo app. Uh, there's now a UI directory and the UI directory contains lightning and web. Uh, so this goes into that
[01:34:17]  concept cause we actually have teams internal that build for the TV app and they also build the web version. So my selling point to them was like, Hey, you know,
[01:34:27]  there you use react for the web. You're using lightning two for TV. What if you could just use solid JS for both? And cause it's less context switching
[01:34:37] . If you're just always using solid, it just becomes a lot easier. Uh, so this project is set up now that like the lightning code isn't here. Eventually
[01:34:44]  I got to build up the web version. Uh, if there's anyone who's available, who wants to build the web version and open PRs. I love PRs
[01:34:52] . Thank you so much. Um, but yeah. Uh, so here's like the, the lightning folder for this and then I'll go back into here. This
[01:35:03]  should be up now. Um, so this is the hosted demo app, which is for TVs. Where did that other URL go? I might have to just reload it.
[01:35:15]  Here it is. Uh, so this is my local host development. And this is the cool part about developing for TV apps, right? Is I don't necessarily have to
[01:35:22]  always be testing it on the device. I develop on my desktop, on my, my browser. And so the web developer experience that users are used to, or developers
[01:35:31]  are used to, like I'm getting the same thing here. Using my MacBook, using my keyboards, going between stuff. Um, and then on top of this, there
[01:35:40] 's an inspector mode, which basically for every canvas tag that gets entered. Uh, like we, we create an HTML element and kind of position it where that piece is
[01:35:51] . Uh, and this really helps for debugging. So I can go into here. I have my element here. Um, where is my console? Uh, I do $
[01:35:59] 0 for that element. And then I can do $0 dot solid represents the element node or my internal universal renderer node. Uh, so this, this gives me
[01:36:11]  all my props that are coming in. Uh, and then the lightning node is just this LNG. So this is like the simple proxy layer between solid to my little layer
[01:36:22]  to the renderer layer. And you, you kind of have direct access to everything. Right. Uh, there are a demo that people watching can just take a look
[01:36:34]  at. Would it be cool if I shared what you shared with me the other day or? Yeah, this is the demo URL. So this is open source. It's
[01:36:41]  on the GitHub. Okay. It's hosted on GitHub. So you are welcome to go to it. Okay. I'm going to just share that same link into the chat
[01:36:50]  here. Yeah. And you know, again, don't be like Ryan. Ryan understand when you go here, you can't click on anything. You're going to
[01:36:59]  try to click on things, but you got to use your keyboard. This is, this is all about keyboard navigation. Uh, I think it's funny. Cause like,
[01:37:06]  you're not the first person. Like a lot of people go here and I'm like, I'm trying to click on the poster. Why isn't it doing anything?
[01:37:13]  And you're like, yeah, this is made for TV where you're using a remote control. So I'm, I'm using my arrow keys on my keyboard,
[01:37:19]  left, right, up, down, hit enter. Oh, I have debuggers. Um, so yeah, I think this is even cool. Like this is my
[01:37:28]  solid universal layer. Uh, and this is the actual bridge that ties solid into, um, solid into the universal renderer. Uh, this is it. Like this
[01:37:42]  is 87 lines of code. Right. That is all it took, uh, to get these to work together. That's, that's awesome. Yeah. Yeah.
[01:37:52]  I mean, it was a similar experience when I found the stream earlier for the DOM APIs and I looked at it, uh, apparently I coded the, the DOM version and
[01:37:59]  then benchmarked it all in like 20 minutes. So, all right. So like, yeah, I, yeah, this, it's crazy that with other systems, the
[01:38:08] , like the, the basics can be put together that quickly. Um, yeah, it's definitely a different world. I just went to the demo again and also, you
[01:38:15]  know, play with it. So I went right click inspect and I get straight to that canvas, um, element. You're like. Yeah. Yeah. So like
[01:38:23]  debugging or like, you know, just the experience with a web GL, you know, and developing for it's probably a little bit different than where we're. It's
[01:38:30]  difficult. Yeah. But inspector helps. You won't have the inspector on the URL that's hosted. Right. Just for performance. People can load this on TV devices.
[01:38:40]  Right. For dev it's, it's, it's critical, but obviously. Yeah, no, that's. Yeah. There's, there's like even a warning
[01:38:46]  in console, like performance will be bad if you're, if you're doing this, which it won't be on here cause I have it turned off. Right.
[01:38:53]  Yeah. Uh, Shogun is missing the O because it's not in the font file. It's an O with a little hyphen over top of it. Right
[01:39:02] . That's, that's, that's why that bug exists. I'm like, oh, you know, of course Shogun has that special character. Uh
[01:39:12] , I don't think problem has anything else. Um, yeah. Yeah. Well, yeah, this doesn't drop a little 60 on my raspberry PI five. This is
[01:39:19]  rapid. Yeah. Well, it's designed to be handled on even like devices that are the power of raspberry PI threes, right? Yes. Yeah. So I
[01:39:29]  actually have a raspberry PI three on my desk in front of me that I can load this up in and, and kind of show it off. Um, and it, it
[01:39:37]  will stay above 30 frames per second without problems. Uh, the other thing is like, it's running at 1080p. Uh, so another trick in the business is
[01:39:46]  like, if you want more performance, you run it at 720p. So lower resolution, uh, it will run faster because there's less pixels to calculate. So it
[01:39:55]  is an impressive feat to get lightning three at 1080p rendering 30 frames per second and above. Um, and again, our goal isn't necessarily 60 frames. Like the human
[01:40:07]  eye really recognizes 30 frames per second. You really just want to be able to go up and down without jank on the screen. Yeah. I've always wondered about
[01:40:14]  that. It's just like the, the subtle perception thing. Cause like, what is it like gamers who want like 120? Yeah. Like, so it's like double
[01:40:22]  the, can you notice the difference? Maybe, but probably not. Your eyes can't really recognize it. Like 120 Hertz. Like probably definitely not. Um, the only
[01:40:34]  time it's really important is like sports and where like the animations and things are moving super really fast on the screen. Like you need that high refresh rate. Yeah.
[01:40:44]  120 frames per second. Why don't you get that? There's also like probably a limitation in Chrome because this is using request animation frames that my monitor is only rendering at
[01:40:55]  60 Hertz. You read V sync or whatever type. Yeah. So what, what's yeah. The question is, does it do adaptive FPS? Like does it,
[01:41:04]  is it like variable? Um, I think the joke with that is like, if the device can't handle the 30 frames per second, it gets less than 30 frames.
[01:41:15]  Okay. So it's, it's adaptive in the sense of how fast does request animation frame happen on the device. Um, yeah, which I, I always love
[01:41:25]  like my performance tools. Um, so whenever I use Chrome and if there's anybody on the Chrome team who's listening, can you please add like 12 X slow down or
[01:41:36]  20 X slow down? I would love to see that a preference to change this. Yeah. I mean, it's interesting. Cause, uh, uh, uh,
[01:41:45]  what, what is it? The JS framework benchmark. I mean, you started getting ridiculous. Like we, we started adding like more like larger slowdowns through the like
[01:41:53]  programmatic APIs for benchmarking. But yeah, sometimes I would love to see slower in the actual, I mean, at that point, maybe you're like, what are
[01:42:00]  you doing there? But I mean, there, there are devices that are that X smaller, especially, you know, if you have to consider like average developer pulling out
[01:42:11]  their Mac book or Mac book pro or whatever. And then like six X isn't even going to get us even remotely down to some of the lower end phones. So yeah
[01:42:24] . You, you need to go really, really slow. And you'll notice here with like the performance timeline, it's like load. And then you see these little bl
[01:42:31] ips and the little blips are the request animation frames happening. And this is doing your draw frames. Oh, that's beautiful. So I mean, you get like
[01:42:40]  16 milliseconds or something a little less than that, maybe 10 milliseconds. So as long as you do it in under whatever the request frame for frames per second is like you
[01:42:50] 're going to get 30 frames per second or 60 frames per second. And really this is like the renderer doing its part of what are you asking me to draw? And
[01:42:58]  then I do all that magic of uploading it to buffers and everything to draw it on the screen. Just to remind again, the link above is the interactive site.
[01:43:08]  You just can't use a mouse or, or why not click into it and then use your keyboard arrows to navigate around because it's designed for a TV device, which is
[01:43:16]  controlled by remote. Yep. Yeah. I'm using left and right arrow keys, enter key. Um, then there's shortcut keys. Like the M key is,
[01:43:24]  goes back to menu. Uh, the L key. And it's a canvas. So it's being rendered with a 3d engine. So you're not going to
[01:43:29]  see HTML elements. You're going to see one HTML element, which is the canvas element. And then it, it renders, uh, using your graphics card, essentially
[01:43:39] . I mean, everything renders your graphics card, but like it renders the scene, um, into that directly. Yep. Yeah. There's basically a div tag
[01:43:49]  and a canvas tag. Um, when the development, like when you use your local and you have, uh, the enable inspector turned on, that's when we create
[01:43:57]  this dom tree to help debugging and develop our experience. Right. Exactly. Yeah. This is for televisions. Um, our guest here, Chris, uh, works at
[01:44:07]  Comcast building apps for televisions and it's showing how we can use solid in conjunction with lightning JS to build apps, um, that would run on the television apps,
[01:44:19]  you know, like you see, you know. Yeah. Yeah. Yeah. Yeah. Things like Peacock, you know, like things, you know, of
[01:44:27]  that nature or, you know, Netflix, even, you know, things of that nature. Yeah. Um, and, and this, this also includes a video player,
[01:44:36]  like the Shaka player. Cause what you get as like a TV developer is how do I build, it's, it's not even necessarily, how do I build the
[01:44:44]  TV app? It's like, I need to do video playback on a TV. Like, and then I'm like, we don't deal with that because video playback
[01:44:52]  is a whole nother can of worms. That is really hard. Um, that you, you look for players and you figure out all that encoding and stuff. And
[01:45:00]  that is not my area of expertise either. So yeah. How does that happen? Does this, is there just an API that generic, like then just hand it off and
[01:45:09]  it's like, okay, play the thing at this resource. And then that'll be changed. Like whatever the device will be like, okay, this is the video stream
[01:45:16]  or that you're going to play. And then it just kind of weighs its hand of it. Is that how that works? Sort of. It's very device specific
[01:45:24]  of how it works. Um, but. Do you guys wrap like a video tag for it? Yeah. There's a video tag in the browser and you know, the
[01:45:34]  video tag should work. Uh, and again, like each device then manufacturer is responsible for filling in. How does the video tag work with the hardware on that TV? Right
[01:45:45] . Okay. So the video tag sits outside of the canvas then? Yes. Yeah. So how does that, you have a canvas tag and you have a video tag
[01:45:54]  and that's like your whole DOM tree. Um, and internally, uh, so the RDK is, is the platform, um, that is kind of like the operating
[01:46:03]  system for TV devices. So RDK is another keyword. Um, and they have, they, they're the ones who do the WP web browser, um, that
[01:46:13]  I introduced earlier and they have a non composite mode is what they call it, which I think they're going to change that name at some point. But the non composite
[01:46:22]  mode is they basically turn off, um, HTML and the whole render tree stuff that HTML and CSS does. So they turn off all those calculations and you get like a
[01:46:32]  30% boost in, in, in performance just because the browser no longer has to figure out paint and calculate and layout and all that stuff. Cause it would still be doing
[01:46:41]  that normally in normal browsers, even though you don't have any HTML. Uh, and so they disable all the tags except for canvas and video tag. Right. Yeah
[01:46:50] . Actually, this is a good point. That's interesting. Cause you, you've used these apps, you know, you, the, like the thumbnail videos and like
[01:46:58] , like, you know, like you, the ones where you like, if you move onto them, they start playing and all that kind of stuff, you know, like
[01:47:04]  in YouTube, you know, the ones where they're like, not in this example here, but you know, you don't talk about like scenarios where like you have all
[01:47:10]  your kind of thumbnails, but then when you move onto one, it starts playing a video. Um, yeah. I'm trying to think actually, have I seen much
[01:47:17]  of that on television devices? Maybe. Yeah. There's like, if you leave it on the thumbnail, it'll start playing automatically, or you can like long press on
[01:47:26]  the remote, which is like, hold down the key for a longer period of time. And then it will start giving you another menu or something. Yeah. Just kind of
[01:47:34]  interesting scenarios where, where like this interactivity between the canvas and the video or multiple video elements must be a little bit fun or tricky. I'm, I'm going
[01:47:46]  to give you a story of how tricky they are. Um, so you have the canvas tag and then you have a video tag, right? Um, but on our devices
[01:47:55] , like there's Z indexing, right? Like on a web browser, you could just say video tag Z index above the canvas tag or Z index below. But on
[01:48:04]  certain devices, the video tag is always on the lowest layer. So it's always on zero. So consider it like you're on Z index zero. You're underneath
[01:48:14]  the canvas tag. So in order to do video, you have to cut a hole in the canvas tag at the position of the video to make the video show through the canvas
[01:48:24]  tag. Um, and then like we had like animations, right? Cause you, you expand the video to go to full screen playback. And what would happen is you
[01:48:34]  have to cut the hole in the tag. And then you have to synchronize it so that you're cutting the canvas tag. Plus enlarging the video at the same rate
[01:48:42]  to make it look smooth and everything. Video playback is really hard. Um, doing it on devices is really hard. And that's like one of the things I go
[01:48:51] , cause it's, it's all API's and teams, right? Like there's a browser team for the device and you go to that team. You're like,
[01:48:58]  can you just make it so that Z index works so that I can just call Z index. And it's like, that might take us six months to do that. And
[01:49:05]  I'm like, man, are you guys serious? Like, but it would save me six months of work to try to make all this stuff happen and future work.
[01:49:14]  Right. But yeah, it's very, very complicated. It's fun. Huh? Yeah, no, that is interesting. I mean, though, we didn't talk
[01:49:21]  about this, but we talked about styling and CSS. One thing we actually didn't talk about is like how you do all these like animations from like an API standpoint.
[01:49:30]  I don't like, like, like the, the way the sidebar slides in is do you guys represent that the same way using something like a CSS transition or is there
[01:49:42]  a specific API for it? Other like, how do you do these animations? Yeah. There I have documentation up on it, but I mimic the office CSS. Okay.
[01:49:53]  Um, so in the code, I actually use like transition as the property name. Um, where let's see if I can pull up that example real quick. Uh
[01:50:02] , so all my styles are in nav drawer styles. Right. There's this transition object that you pass in. Right. Transition is saying like X, whenever you change
[01:50:11]  the X value, um, animate it by doing a duration of 250 millisecond and using easing to ease in and out. Interesting. Okay. Yeah. Cause earlier when
[01:50:23]  you showed the renderer, you said there's like renderer dot create element and then there's a renderer dot animate or something. Yeah. That's API.
[01:50:30]  You're not necessarily hitting directly. You're putting it under a declarative layer by using CSS like stuff. Okay. Yeah. I abstracted that away to create like this
[01:50:39]  prettiness, right? For development. Um, so there's like, this is also prettiness that I added to the, um, framework. So when an element
[01:50:48]  receives focus, which is well understood by web developers, um, set the X, like change the X of the nav bar to this other property. So I have the default
[01:50:58]  X is eight. And then when the nav bar receives focus, move it, set it to this new X value. Uh, thank you reactivity. And then all
[01:51:08]  that's happening under the hood. So you can see X, the X is changing here. There's other things happening. Like there's an alpha happening. Um, which
[01:51:16]  I could probably show real quick too. Uh, there's an alpha. Uh, there's an alpha. So when this receives focus, this is that gradient behind the
[01:51:24]  scenes. Um, that is going from alpha zero to alpha one. So it's like visibility or I think alpha is well understood too from web developers. Um, and what
[01:51:35] 's happening is like when set prop is called. Yeah. New property with the universal render. I'm just checking. Do you have a transition object? Does that transition object
[01:51:46]  have that property that you're trying to change? And if it does, I just call alpha dot animate or the element dot animate with the new value. Right. The
[01:51:58]  property name of the new value. And then the renderer takes care of doing all that magic. Yeah. Yeah. No, I, it's interesting cause you've shown
[01:52:06]  the source code and stuff and it's open source. Uh, where, you know, a lot of the stuff is just you adding this kind of mapping layer, you know
[01:52:13] , in a few lines of code and you're like, might be a little bit simplistic, but it does the trick. It's like, it's actually really cool
[01:52:19]  to see how this builds on. Cause like, I remember my first experience using react native back in the day and they had their like fake flex. And I was like,
[01:52:26]  I'm like, how much work is it to do this? Well, if you are interested, we earlier in the stream, we did show the flex stuff and showing
[01:52:34]  the animation stuff. Basically if the underlying system has some kind of mechanism, the mapping, I guess, is just a matter of, you know, inspecting some properties on
[01:52:43]  certain events and then just mapping them across. And for the most part, that kind of ends up, ends up, you know, working, working through, which is
[01:52:51]  pretty, pretty cool. When I, when I, when I think about it, that like, you can just kind of just put this together. You know, I
[01:52:59] , I mean, this isn't the first time we've seen some of this kind of stuff on stream, but the, I, I, we haven't actually been looking
[01:53:05]  at implementations as much. Cause this is all in JS land, which is cool. Um, previous custom renders that we've had were the WebGL one,
[01:53:12]  which was almost just like a straight handoff to like three JS. And the other couple ones would have been Tori, a native script. So you could build native and
[01:53:24]  desktop apps with solid, but most of the code there was this bridge over, um, uh, what do you call it? Over like rust APIs or like over the
[01:53:34]  native iOS or Android APIs that were available. And you almost, again, were native scripts case, just directly calling calls. And in, uh, um, uh, Tor
[01:53:48] i's case, uh, um, they basically already had, um, their own abstraction, universal abstraction over for the different devices. But here, um, a lot
[01:53:57]  of this work is actually, I mean, it's all happening in JavaScript land level because it's all just running JavaScript. So it's actually a lot more inspectable to
[01:54:06]  see what, what it is versus, you know, some of these things that almost fetch immediately onto the native level. So yeah, this is, this is cool to see
[01:54:14] . Cause it's like, what would it look like to kind of invent your own browser or something like that? That's sort of what comes into my head here,
[01:54:22]  right? Cause if you treat the web GL is kind of like a, a base, like, okay, now I have the ability to draw stuff. This is adding all
[01:54:30]  those other niceties that you need on top to, you know, style animate. Um, and yeah, no, that's, that's very, very cool to kind
[01:54:38]  of see this all together. Yeah. And, and this is like, okay, you're a new college entry or, or high school programmer. It's like build
[01:54:48]  the flex implementation and you, you, I have this open, right? So this is like everyone, hopefully everyone has seen this flex box. Cause I reference this all the
[01:54:57]  time whenever I want to do flex. I'm like, Oh yeah. What was that property flex wrap and all this stuff. And, you know, flex is really
[01:55:04]  complicated the entire thing, but doing just flex start or doing, doing pieces of this is very easy. Um, and, and like, I avoided certain things where it's
[01:55:16]  like, nobody really uses those properties or that's too advanced. Or do you really need flex shrink and flex grow? Like that isn't in there. Um, because
[01:55:24]  I don't really have a need for it. Most of the time, you know, the width of stuff. Um, but yeah, I just went through and I implemented
[01:55:32]  some of these and like stretch. I don't do because I'm like, you probably don't need to stretch the challenge with stretch. And is like, you need to
[01:55:41]  know, um, the total width or, or the width of the container first. And if you don't know that, like you need to know how much you can
[01:55:50]  stretch each element. So it really requires like looping through the items multiple times. Like I don't want to loop through items multiple times. I wanted to know flex start
[01:55:59] . You can loop through one time and get it flex. Then you just start from the other side and go backwards. Like they're loop through one time. So they're
[01:56:06]  very performant. Uh, and that's kind of was my, my goal in implementing. This was like simple API, highly performant. Um, what do you
[01:56:16]  offer to make web developers lives better? Um, and then like the cool part is I built the simple thing. And then you get, you get that third party is like
[01:56:25] , well, you know, you need this flex item. Um, property so that I can remove something from the flex layout. If I don't want it on there,
[01:56:32]  I'm like, oh, you need that. Cool. Like I didn't think about that, but someone's like, and then I'm just like, how can I
[01:56:39]  do that? And I just go in and add one if statement and it's like, cool. Now, now you have flex item equals false. Uh, and eventually
[01:56:46]  someone will come to me and like, Hey, I need to text the line center. Uh, I think the most recent change that I had was like for flex start.
[01:56:54]  I originally had it so that the container would automatically resize based on the children. So it would calculate the width of the children and then increase the parent box to be whatever
[01:57:04]  the width is. And like, you know, sometimes you don't want that. So then I had to add this flex boundary fixed, like fix or contain are the two
[01:57:13]  keywords. Um, do, do you want me to resize your box or do you not want me to resize your box? Um, so, you know, at the end
[01:57:20]  of the day, it seems kind of hacky, but it comes together when you build a framework, right? You need all these pieces, uh, and you just
[01:57:27]  refactor and iterate on it to make it better and better as you, as you learn. I imagine most of these rules are places. You're going to probably, if
[01:57:35] , as you had other integrations, you're going to probably want to share the, this, this part again, I wouldn't be surprised if some point in the future
[01:57:43] , if this declarative JS approach takes for lightning, this flex module would be cross framework. Um, but yeah, it's, it's, it's, it
[01:57:52] 's cool to see this kind of build up from the ground up. Cause it's, it's at the beginning is when you can always see it in its simplest form,
[01:57:59]  you know, um, stuff over time does tend to get refactored and time tends to get much more complicated. Perfect example is going to the signal JS file in solid
[01:58:09]  right now. At one point that was a very simple file. Um, and now it is a little bit trickier. Um, yeah. I, I read source
[01:58:18]  code a lot, so I don't think I fully understand the signals yet and all, but I, I, I dived in and like, I do debuggers
[01:58:27]  and like, what is solid doing this? Where's the creative effect and what's this magic of how signals are passed in? Um, yeah. It's awesome.
[01:58:35]  It's awesome. Yeah. In general, this is like an interesting space because this, this is an example of an exchange. I went in chat and I'm gathering
[01:58:44]  the right answers are put here, but it's a, uh, WGPU didn't exist back then, but would you move to WGPU in some future version
[01:58:52] ? And the response that was given in chat was the TV would have to support WGPU, which would easily be five years away. Like this is a very interesting balancing
[01:59:00]  of always having to support back significantly far back. And, um, but also like this technology is always evolving and always changing. Uh, is this something you think about
[01:59:15]  it? Like, how do you approach this when, you know, looking at something like lightning or like your work in general? It just made me think about that. Yeah
[01:59:23] . And there's some things in the lightning three project that are, are future oriented. Um, so we have this mode called thread X, uh, and thread X is
[01:59:32]  using offline. It is using off screen canvas and a web worker to communicate. So rather than that request animation frame thing happening on the main thread, you could offload
[01:59:43]  that to a web worker. So all your draw calls are happening in a web worker. So your main thread is freed up. Um, the challenge with it is like sending
[01:59:51]  messages back and forth between the main thread and, um, and like the render. So the render would run on this web worker using off screen canvas. Uh, doing
[02:00:02]  all the draw stuff. And I guess it's similar to like the iOS model, which is like, you have the main thread. I forget what the other thread is called
[02:00:10] . You have like a worker thread. Um, but you could, you could do that with, uh, the thread X model. The hard part is it's not supported
[02:00:17]  on any devices yet. Right. Right. Right. Yeah. So yeah, it's, it's, it's, it's interesting. Um, because I guess
[02:00:24]  it's a lot of the same characteristics of the web in general, like the kind of progressive enhancement kind of mentality has to kind of apply in here. It just,
[02:00:32]  it just interesting that in this case, we're talking about actual like hardware drive driven feature kind of cycles. Um, more, more so than like, you know,
[02:00:44]  like, yeah, I guess, I guess, I guess there's, it feels like the browsers, although I guess this is changing now as we're getting more device API
[02:00:56] . APIs into the browser, but for the, like the, the browser APIs are kind of been driven off software, like developer experience things and less on technological advance.
[02:01:05]  I mean, that's, that's not true either. We've gotten better, uh, you know, HTTP protocols. Yeah. I don't know. It just,
[02:01:11]  it just, it just, it just feels a little bit different. It feels like TV technology would be something that would be actually in some ways moving faster, but then in
[02:01:19]  other ways, because of, you can't always be on the latest and it gets stuck and it could be slower. I mean, cars have the same kind of problem
[02:01:26]  as well. Yeah. Yeah. Yeah. I'm, I'm part of the W3C, um, media and entertainment group, like the working group for setting standard
[02:01:33]  stuff. Um, and we have a lot of these conversations and what pushes it forward is like, you have Dolby 3d Atmos, like sound channels, uh,
[02:01:43]  you have 4k, um, television screens. And then you have, I forget what the other name of the technology is. So like render pixels with certain precision or
[02:01:52]  whatever. Um, but then like you want Dolby on the web, right? Your, your browser doesn't support Dolby Atmos. Uh, so you need to
[02:02:01]  create some kind of software stack or, or some API to make that work. Uh, so what pushes it forward is like people want higher resolution on their web browser or
[02:02:13]  more control over video frames. Um, and that's kind of where the MSCE, uh, video decoding comes from is from Netflix and other third parties who want to
[02:02:24]  video playback. Like we need more control over video playback, like we need more control over video playback, build this API into the browser so that we can use it to
[02:02:30]  do new stuff of like doing video playback on the internet. Yeah. Yeah. It's usually like the need, the monetary driver to push things forward and then implementing it.
[02:02:43]  Um, yeah, makes a lot of sense. Just look in here. Um, was there anything else particularly that you wanted to show off before we kind of just go
[02:02:51]  finish up with some more Q and A or, uh. Yeah, I, I think I wanted to go into what you were saying, which is like this code could be
[02:02:56]  reused across different things. Okay. Um, here's my active element. So this is what thing has focus. This is just create a signal, right? Like
[02:03:06] , I'm like, how hard can this be? Just use a signal. Um, but yeah, we touched on it. This is my node, which does the creation
[02:03:14] . Like this thing is the big complicated 600 line class object that translates all those properties to the render. You don't have to look through this. Um, but the cool
[02:03:26]  part going back to like our initial conversation of renders. Um, is like now that I've built the solid JS version, like I was, when I was exploring
[02:03:36]  this, I was like, oh, Vue.js also has this create renderer and it's almost the same API. Yeah. Um, this wasn't an influence
[02:03:46]  for our custom renderer actually. Yeah. Uh, so like I'm, I'm exploring using Vue.js. I got a prototype working in about four hours.
[02:03:56]  Yeah. Just copying over the create node and the flex and everything. It's, it's, it'd be interesting. Vue has the same reactivity or very
[02:04:03]  similar reactivity to us, but I imagine that they, their custom render APIs are a little bit different because they're still using a virtual DOM. So they're like,
[02:04:12]  they're sending through different kind of patch things. So they're still diffing stuff on their side, which is interesting. Yes. Yeah. I'm, I'm
[02:04:21]  very interested in building it up a little bit more and then running the performance analysis. Right. Cause it all comes down to performance as well. Um, but for, for
[02:04:31]  like the Vue.js implementation, I have this solid universal, which ties into the universal API using your creating elements. Yeah. They have almost the same names.
[02:04:40]  There's like a couple differences. Yeah. And, and like insert node, like one of these is reversed in which order they pass it in. Right. So there's
[02:04:49]  like some tidbits like there that just had to be cleaned up. But then after I got that, I did like the celebratory dance of like, yes, it
[02:04:56] 's working. Uh, and now I, now I just have to move it forward a little bit more. But yeah, I'm very excited about, you know, tying
[02:05:03]  it into other renders because. Once you build this node section of how your abstraction is, you can kind of copy that pattern for other things. Um, even the flex
[02:05:13]  copies over, uh, the active element rather than using create signalized, use the Vue.js ref. Yeah. Uh, and things just kind of work.
[02:05:22]  So I'm like, this is great. Um, because really it enables anybody to build whatever framework or use whatever framework they already are using, uh, to build TV apps
[02:05:32] , which I think is, is a powerful way of going. Yeah. It seems like that's the direction lightning is probably going to go in the future. It just like
[02:05:42]  once it's kind of unlocked, it makes a lot of sense. Yeah. Um, I don't have anything else to show. So. Okay. Yeah. I
[02:05:51]  would see if we've been asking Q and a the whole time. the whole time. So we'll see if anyone else has a few more questions, um, before
[02:05:57]  we let you go and we move on to the next thing, which is, uh, yeah, I got a couple of things more today, but, um, yeah,
[02:06:04]  it's definitely real for me. Like, uh, you know, this is your chance guys go in the chat. If you had, you've been asking all along
[02:06:10] , so maybe we've depleted you a bit, but yeah, in general, it's, it's, it's, it's kind of cool to see a complete
[02:06:17] , for me, a different domain and understand like, like similarities in the approach, but like also that certain problems are more prevalent or not. I remember having a,
[02:06:28]  uh, chat with someone at a conference sitting down. Uh, I think it was at react San Francisco. Um, the react-a-thon and they, they were
[02:06:37] , I don't know why they're there. They're just a game developer, but they were focusing on the, their job. They worked on a lot of multiplayer
[02:06:46]  games and their whole thing was about optimizing network communication, uh, in terms of these multiplayer apps. And we had a great chat just talking about the problems in that space.
[02:06:56]  And like me kind of referencing knowledge on the, on the website, you know, also being a server client kind of architecture and understanding that there are similarities, but certain things
[02:07:05]  are in more hyper-focus on these different platforms. And I think it's interesting because just because something isn't hyper-focused in your, particular use case,
[02:07:15]  sometimes when people find a solution to a problem that works, um, in that hyper-focused zone, the learnings from there show that something's possible that wouldn't have
[02:07:29]  probably even been explored otherwise, if it wasn't so important in this other zone. And you could kind of sometimes bring it back with you and then go like, okay,
[02:07:36]  even though we would never really think of doing it this way, if we did, this can fundamentally change the way we look at the problem. And in that case,
[02:07:43]  this kind of unlocks a different thing. Even like, I find there's always two sides. And I know I'm talking very vague of, of, of this kind
[02:07:51]  of problem solving space. You know, uh, it's kind of like the, uh, I have it for you. So it was kind of like the, the,
[02:07:59]  the electric car thing. I wrote an article comparing solid and Tesla a while ago, but it was like sometimes like something like a technology that was built for performance or built
[02:08:13]  for, um, like, uh, like saving energy. Like they're, they're like opposite sides of the same spectrum. If you make something more efficient, it
[02:08:21]  can both be like something cheaper to run so that you like save money, or it can be sometimes dialed up to be something even more performant. Like that kind
[02:08:30]  of dual siding and looking at different zones where things are hyper can sometimes like the, the opposite end of the, that spectrum can then apply to you where it's not
[02:08:39]  as hyper important to you. And it can, it can change things. I know it's super vague. I'm sorry, but maybe you have a more concrete example
[02:08:45] . It was just something that I was kind of thinking in my, in my head when we were talking through a lot of this. Yeah. I, I mean, I
[02:08:52]  have a tangential example, which is like Redux, like a lot of developers come in and like Redux. I'm going to use Redux for this. Um
[02:08:59] , and like, I'm like, no, no. Uh, and it's not because I had anything against Redux. Like Redux is great. React is great
[02:09:08] . All these frameworks are great in the sense they introduce new ideas and concepts. Um, the challenge is like it was made to solve a specific thing. The pattern is
[02:09:17]  really great. Like the flux pattern of moving your state up is great. Um, but when you get into using Redux on a TV device, like my understanding and what
[02:09:26]  I've experienced is like Redux is a general store that you're saying, here's a hundred functions that I want you to call every time state changes. Yeah.
[02:09:37]  Um, and so if you do that on a Raspberry Pi three, it's like, you're going through a hundred functions and every function is like, Hey, do you
[02:09:42]  need me? Nope. Do you need me? Nope. Do you need me? Nope. Do you need me? Nope. And it's like, you've now just
[02:09:48]  spent like six milliseconds going through that to be like, Nope. Oh, this one person needs you. Um, and. Um, so it's, it really sounds
[02:09:56]  like you guys don't want to be using react where you're at. Sorry. React is actually this, the same kind of thing. Yeah. Yeah. And that's
[02:10:04]  my concern too. It's like, you know, the virtual dom, you can test it, but you got to see how performant is it. Um, and
[02:10:11]  this is why I really love the signals is because it's that subscriber model, um, that just happens automatically. And it's, it's like pinpoint accuracy. It
[02:10:22] 's like surgical of you change this. I know everyone that is listening to it and I'm just going to tell them, you know, what updated. And so I immediately
[02:10:31]  go, don't use Redux cause signals kind of do the same thing. You don't need a global state store. You can build a whole bunch of little state with
[02:10:38]  signals. Yeah. Yeah. It's, it's, it's, it's interesting, uh, because on the other side, I mean, cause these are all
[02:10:48]  layers responsible for different things and they have different efficiencies and what they're built for. Obviously, as you mentioned, we went to web GL here because it's more perform
[02:10:58] ant for rendering than using the dom. But what's interesting, like from a, like implementation still matters. Right. Cause like, uh, like on the other hand,
[02:11:07]  cause there's a, we make the world the whole time. The one thing changes, right. Talking about react, but in a sense, web GL also does a little
[02:11:15]  bit of that. So it's, it's doing that on the, but somehow in that case, it is more performant than using the dom because the, of
[02:11:24]  other reasons. So it's like, there's, there's an interesting thing. I, I, someone was telling me, I forget if it was the same conversation.
[02:11:31]  I was talking to, I talked to game programmers from time to time to make sure that I understand, cause they're a hyper-performance, um, area. And
[02:11:40]  I've always had interesting in game development. And the, someone was telling me that some of the work that was being done around Vulcan involved actually introducing semi-retained
[02:11:49]  mode into graphics. So like they weren't throwing away everything. And I was like, Oh, that's really weird or like different. I was not expecting to hear
[02:11:57]  that on the game side because games have been pretty much immediate mode for decades. So it was just kind of interesting to hear, you know, how far are they getting pushed
[02:12:08]  down the performance pipeline thing? Um, you know, because in theory you'd think retain mode had the ability to spike better performance in, you know, many scenarios,
[02:12:17]  but the complexity is hard. So I don't know that there, there is always an actual implementation versus theoretical difference between these different architectures. But yeah, so the,
[02:12:29]  I am interested. It is interesting to me because when I developed solid, I was like looking at the DOM and I was like, Hmm, immediate mode on top of
[02:12:39]  the DOM makes no sense because the DOM's there. So if we, if the DOM's retain mode, we get the best performance by actually being retained mode ourselves. So
[02:12:48]  we, cause we were just accenting what's already there and doing the least possible work on top of it. It's interesting to apply that thinking to a system that's
[02:12:56]  actually immediate mode underneath where that does throw away everything. But I guess it just happens at different layers with different things. It's just one of those kind of funny things
[02:13:07] . You know, I will add on, we have this, um, render to texture, uh, which essentially like every node that you see on the screen is an individual
[02:13:14]  node render to texture will actually group them so that rather than rendering a hundred different items, you can put the pieces that don't re-render every frame and say like contain
[02:13:24]  all 50 of those. And then the only has to do like 50 items and it just draws one for that grouping of stuff. Right. Like a huge performance optimization,
[02:13:36]  uh, of you try to render and touch the least number of things as possible. Right. That makes sense. And what you're describing kind of is like blocked on,
[02:13:46]  um, which is the latest technology. And this is why I like these comparisons, right? Yeah. If you look at blocking like million JS, it's a similar
[02:13:54]  idea of, of using grouping and then reusing nodes by separating the static from the dynamic parts. And then going like, oh, I don't actually have to recreate this
[02:14:01]  node. It's still virtual DOM, but it's, it's grouping virtual DOM nodes and then reusing them. Yes. Yeah, we, we actually have a
[02:14:09]  similar problem or something that we could probably talk about at some point, which is like the show. Um, so I'm using all the JSX syntax, which we didn
[02:14:15] 't even get to the end of the slides, but like that JSX syntax, like everything you have in there just works magically with the light. Right. Lightning thing
[02:14:24] . So all the templating, everything that you do with your syntax just works, uh, which is amazing. Um, and like the, the, the challenge though,
[02:14:33]  is the show is like an if statement of. Right. Have the node. Don't have the node. You want off screen. Yeah. There's, there's like
[02:14:41] , I want to lazy create. So like the show of created at this point, but then after that, once it's created, like there's. Don't, don
[02:14:50] 't get rid of it. Alpha zero it or hide it away or. Yeah. I mean, we can even keep it away off soon. You just, to be
[02:14:55]  fair, you could write your own show component. Like I could pretty easily to do that. If that was the behavior you want. It's hard for me to say that
[02:15:04] 's the generic behavior, but the other problem or challenge is sometimes when stuff's interactive, it can still be live on the other screen. So assault 2.0, one
[02:15:12]  of the parts of the signals design that we're working on will enable something called off screen, which will let you not throw it away. But also keep the graph inert
[02:15:21]  when it's not visible. So changes won't actually be propagated off screen either. So it's like a combination. Cause right now you can do that. What I
[02:15:30] 'm talking about, keep it live, but every live thing will be live. So like, if you do change something, you'll be re-rendering off screen at
[02:15:36]  the same time. I don't know if that's desirable for everyone, but it is doable with your custom show. But we're looking at other solutions to kind of
[02:15:45]  like reduce compute during those kinds of scenarios. Yeah. I mean, the other thing we worry about is memory and, and you have a gig of memory and you might be
[02:15:56]  using a half a gig to render screen with all this images and everything. Which is why you can't do that all the time, right? Because if you kept everything
[02:16:02]  that you ever did it, so it's, it's going to be selected. How many pages can you keep in memory to go back and forth between it's, it
[02:16:08] 's like the memory fills up really quickly on these devices. Um, all right. Yeah. Yeah, this might be good to know to side notes. I'm saying
[02:16:15]  the example app on for playing JS website is not working for me. Um, so this is on the actual. Yeah. The website has a broken link there, which,
[02:16:23]  uh, you know, I, I have an open PR to fix that. I'm hoping that gets merged at some point. Uh, it's part of, part of
[02:16:29]  being a team, right? Yeah. Yeah. We can drop the link again to it if you want. Yeah, exactly. I'll, I'll just drop it again
[02:16:36]  so people can check it out. Uh, I'm like scrolling up chat, but I actually just have a link over here. I don't need to go there.
[02:16:43]  I can just grab it here. Cause I have the site still open on my, in my browser here. Yeah. So again, for people who want to try this and
[02:16:52]  again, reminder, doesn't work with the mouse. You click into it and then use the keyboard and move around. It's built for TV devices, maybe even car systems
[02:17:01] . Although those are touched too, aren't they? It depends. Some of the older ones have like the wheel type, like the, like. Could you also drop the
[02:17:09]  link into the GitHub too? I mean, it's, it's basically GitHub and then lightning JS solid. You could Google search for it. Right, right. Yeah
[02:17:16] . Uh, people want to link to the project or see the project directly. Yeah. Yeah. Let me do that too. Um, sorry. And then we'll answer
[02:17:25]  the question about web workers, which are fun. Yeah. Yeah. Yeah. Cause a lot of people are, a lot of people are really interested in the whole web
[02:17:35]  workers, uh, streaming, uh, or not like the serialization back and forth piece. Cause this happens. I hear about this all the time on the, on the
[02:17:43]  web. People are like, oh, can't you just offload this to work? And most of the time the answer to that is we could, but it's
[02:17:48]  not worth doing. And the serializations, like basically all the problems you hear about, um, you, you know, overhead, you like, and the overhead you hear
[02:17:56]  about wasm, like the type stuff applies with the worker stuff as well. And a lot of every framework that I've seen so far that has gone heavy into workers
[02:18:06]  as a way of trying to get like render performance has fallen short of the non-worker version of it. Yeah. But does this change on low end devices? I don
[02:18:15] 't know. You'd probably know better than me. So, um, there is one case that we use web workers a lot, which is for image loading. Uh,
[02:18:22]  so every image tag actually has a web worker, which is responsible for like fetching it and then doing the image bitmap. And then that is returned to the main
[02:18:31]  thread to drop it into web GPU. Um, it's sometimes faster. I mean, generally it's faster to do that. Um, but that is really the only times
[02:18:40]  that we're using web workers. We have the thread X mode, um, which is kind of experimental. Um, and there's downsides to threads. Like there's
[02:18:49]  a limit that you can only send 250 characters across the web worker. So if you have large descriptions or paragraphs that you want to draw on the screen, like you have
[02:18:58]  chunk it then into smaller, smaller pieces to get it to the web worker. Uh, and, and like you were mentioning, there's overhead of sending messages back and forth
[02:19:08] . Like there's performance metrics that go with that and having to convert things and pass it to a new thread. Um, so there, there, the times that you
[02:19:15]  would want to use it is like with yoga layout or something. And you want to calculate something really complicated, like flex. Expensive. Yeah. But if something's
[02:19:24]  going to take five milliseconds, like it's going to take you longer than that to pass it over to the web worker. Um, then just the calculator on the main thread
[02:19:32] . Do you guys have any, I've decided curiosity, like, cause there are these applications. Do you guys have any generic APIs use for like delegating stuff to web
[02:19:40]  workers? Or is it just like, like specific, like, I'm just kind of curious if like you use wrappers or something. I'm always looking for prim
[02:19:47] itives. So in my head, I'm just thinking like, is there any generic primitive approach to how you looking at web workers? Or is this just kind of like
[02:19:56]  as per need? Yeah, it's, it's, I basically copied the code from the lightning two for the web worker, um, for the image worker. And it
[02:20:05]  was weird how it does. It is like, it doesn't do it as a separate JavaScript file. It's actually a string, um, in the main file that gets
[02:20:14]  converted to a web worker and put into the web worker context to generate it. Um, I know there are like little libraries to do it. to do it and simplify
[02:20:24]  this, uh, which I think there was one, like the promise one that converts the messages to promise based, et cetera. Um, I haven't used them. We
[02:20:32]  don't, we don't have a need yet to do that, but, and my specialty also is not web workers. Uh, I've done service work a little bit
[02:20:41] , but web workers, you know, how many web developers actually needed it or used it. It's, it should be small margins. Okay. Yeah, no, that
[02:20:51] 's good. Um, I think we're good on, uh, questions for today. I think from what I've seen, we've give them ample opportunity and I
[02:21:00]  think we covered a lot. So, um, I'm pretty stoked. I think, I think we're going to call it a day on the, on the lightning
[02:21:09]  JS conversation. Um, I think we're going to call it a day on the lightnings. Um, and I think we're going to call it a day on
[02:21:13]  the lightnings. Um, and I think we're going to call it a day on the lightnings. Um, and I think we're going to call it a day
[02:21:15]  on the lightnings. Um, and I think we're going to call it a day on the lightnings. Um, and I think we're going to call it a
[02:21:17]  day on the lightnings. Um, and I think we're going to call it a day on the lightnings. Um, and I think we're going to call it
[02:21:19]  a day on the lightnings. Um, and I think we're going to call it a day on the lightnings. Um, and I think we're going to call
[02:21:21]  it a day on the lightnings. We're going to call it a day on the lightnings. We're going to call it a day on the lightnings.
[02:21:24]  We're going to call it a day on the lightnings. We're going to call it a day on the lightnings. We're going to call it a day on
[02:21:27]  the lightnings. We're going to call it a day on the lightnings. We're going to call it a day on the lightnings. We're going to call
[02:21:30]  it a day on the lightnings. We're going to call it a day on the lightnings. We're going to call it a day on the lightnings. We
[02:21:33] 're going to call it a day on the lightnings. We're going to call it a day on the lightnings. We're going to call it a day on the
[02:21:35]  lightnings. We're going to call it a day on the lightnings. How easy is it to get started if someone wanted to make their own app? I forgot
[02:21:40]  about that. I looked at the docs briefly here, but I didn't actually. Let me just quickly go here. If I want to make a solid app. Yep,
[02:21:50]  that's it. There's a starter template. And then npm install, npm start, and then I'm just good to go. And that will pop up with
[02:22:00]  a hello world screen. Yeah, that is essentially it. I plan on creating a YouTube video with a quick start guide. of here's how to do a simple counter
[02:22:10]  up and down, which I'll hopefully have out next week. There is a lightning.js YouTube channel that people can check out, which I do have an hour long intro
[02:22:19] , like deep dive into all the things. That was more of just brain dumping all the things for the solid framework. But yeah, this is the quick way of getting started
[02:22:31]  is this template. or check out the solid demo app because that is a much fuller working example of all the pieces. But this is definitely the starter template. And
[02:22:41]  then read through the docs. We have a discord channel too. There's discord, which you can find on the main website. And join that community and feel free to ask
[02:22:50]  me questions. I'm at chief CLL there. Right? Yeah, no, that's, that's awesome. Yeah, I, I'm looking forward to this
[02:23:00] . It's so cool to see lightning.js TV. Yeah, that is the YouTube channel. You'll see me on there somewhere. Hi. Yeah, I mean
[02:23:09] , if you want to share some links, send it to me private chat and we I can send it across both right now. But it's so cool to see solid JS
[02:23:16]  being on televisions, you know, on the different devices. And yeah, I mean, you too can go build a television app here. Yeah. So there's
[02:23:35]  a question here is like blitz. And my understanding blitz is, is about at the same level as solid is like the meta framework on the website is a kind of
[02:23:45]  funny thing where technically you don't need it. Um, but you know that. Yeah. So we, we shared the solid lightning JS thing and then this is the
[02:23:58] , this is your YouTube. Yeah, that's the YouTube link. So there's the GitHub link to the project and then YouTube, which I hopefully add, we'll be
[02:24:07]  adding more videos, but there's a little short video on solid JS universal rendering, which goes into kind of how it works. there is an hour long video that I
[02:24:16]  released a few days ago with the deep dive. And then hopefully next week I will release a, you know, quick start, maybe 10 minute video of building a simple to
[02:24:26]  do app from the starter template. Very cool. Very cool. So I'm looking forward to seeing more of this content. All right. All right. Well, with
[02:24:37]  that, um, we still got this week in JavaScript to do and some other stuff, but we're gonna let Chris go. Thank you so much for joining us. I
[02:24:42] 've learned a lot. I think everyone's learned a lot. Very, very cool. Um, till next time. Uh, catch you later, Chris. Bye. Thank
[02:24:49]  you. Yeah. I don't know. I didn't know what to expect. I told you that before, before I started here. So it's very, very
[02:24:55]  cool to see, you know, the stuff that people put together with the custom renderer without, you know, anyone on our team having much knowledge. Uh, or
[02:25:08]  could it just been me? People could reach out and I, I'm, I'm not as connected as I used to be. Anyway, we, we still got more
[02:25:20]  stream ahead of us. Uh, mostly, um, yeah, there's a couple of topics. Obviously this week in JavaScript, I haven't done for like a month.
[02:25:30]  So we're gonna get that set up. Um, it's 2:30 right now. I don't know. Uh, maybe I should get a kind of a
[02:25:39]  feel for where everyone is in, in chat. Cause it, this hasn't been probably the, our, our viewership's a bit low down this week, probably cause
[02:25:49]  the react Miami stuff. Um, I've been, I, I, thanks shy. I've been, uh, I, I've been working on a few ideas and
[02:26:00]  things, you know, pulling out the old hack MD, you know, uh, on some. Um, on some various topics. Um, so yeah, I don
[02:26:10] 't know. Um, I, I can, I have some thoughts and stuff to share that if, if people are interested to hear about what I've been thinking about or
[02:26:20]  working on, I don't know if your, your mind's already kind of like got too much going on from hearing all about that lightning JS stuff. Um, otherwise
[02:26:28]  we can just go this week in JavaScript either way. Yeah. Yeah. Well, I imagine the react Miami stream is probably going to wind down soon, but, uh,
[02:26:40]  then again, it's after party. Oh, David is speaking live right now on react Miami stream. Um, he's talking about react brain. Um, man,
[02:26:49]  that's funny. Uh, I kind of want to know what he's saying. I wonder if I can get this shared. Give me two seconds. I want to
[02:26:53]  see what is what's going on live from react Miami. Let's, uh, let's see if I can do that. Two seconds. Uh, let's,
[02:26:56]  uh, let's see if I can do that. Two seconds. Uh, let's present top screen present, uh, share screen. Uh, I want to see what
[02:27:02]  is what's going on live from react Miami. Let's, uh, let's see if I can do that. Two seconds. Uh, let's present top screen present
[02:27:10] , uh, share screen. Uh, I want to Chrome tab. Yeah. Let's share this. Okay. Can you, can you guys see that? See if I
[02:27:22]  turn this audio on education. And I'm trying to find a way to like compare that with react. Can you guys hear it? Like react is trying to teach a
[02:27:31]  way of thinking, a way of being a base level of education so that you can be productive right away to a larger system. That's the corporations. And I feel like
[02:27:41]  a lot of the other frameworks are imposing more of like a private Montessori education system where you have to do a lot more work to learn that. Um, but you
[02:27:49] , you're not abiding by a similar kind of system. So, but if someone were to learn solid first, they would have the identical mirrored attacks attempting
[02:28:00]  to use react. Is it really just, I mean, to me, the problem, at least for me was that the API, a component is a capital lettered function
[02:28:07] . It's kind of like our convention, uh, right there along with returning JSX. Like that is the, if you will, the API or the language to
[02:28:14]  describe what I'm doing is identical. And so I can't tell, like, I can't look at it and tell the difference. Like if I'm using a string
[02:28:22]  and C versus JavaScript, there's a big, big difference. Yeah. And so you come in with fundamentally different expectations, but this one's identical with two separate behaviors
[02:28:29] . Yeah. So is it really just like what you learned first is going to be what you bring into it? Past, past experiences dictate how you, how you learn.
[02:28:37]  Yeah. Yeah. If you were first, people would be saying the same thing to react. Why is this rendering a bunch? What is going on here? You're
[02:28:44] , you're. Yeah. But there, there's also like, there's a whole bunch of, like, we can go into this pretty deeply, but like, I
[02:28:49]  feel like with solid, you, it is actually JavaScript. I know that react uses that a lot and it is JavaScript with a lot of rules on top of it. Create
[02:29:00]  effect is not JavaScript. Signals are not part of JavaScript. We, we, we have some, uh, compiler magic. Yes. Um, but I I'd say
[02:29:08]  it's a lot less rule oriented. And what I'm getting at is maybe you're learning more JavaScript actually, when you're using something like solid, as opposed to
[02:29:16]  react where you're using, you're learning more rules. Right? So it's more of a, this is interesting. Um, I, I, I, I see
[02:29:26]  what he's trying to say. I don't know if it's coming across quite well enough. Mostly agree with that. I, I didn't agree with the original framing
[02:29:33]  though. It's like, I actually think that frameworks, especially something like view does a much more, much more, much more of the like teaching everyone to think and
[02:29:41]  work this exact same way versus react, which is like, you need to know and agree on this core set of things. Everything else is up to you. So if we
[02:29:48]  were to do the education comparison, it's like in react, there are these like three core, like courses that you're excited to learn. And then everything else electives
[02:29:54] . Solid's kind of similar to react in the sense. Like view is here are the seven courses that you need to do to do anything with this language. Yeah.
[02:30:02]  Madison's just like, I'm not. What's your favorite thing about solid, Madison? She's probably never used it. I only recently like looked into, I don
[02:30:12] 't know about it. I think both of them are at their limit for stream. I know that neither of them normally do these seven hour things like I do. So
[02:30:27]  this might be a good time to start wrapping up. Yeah. Yeah. Anyways, I do. I do like that idea. But, uh, it's probably going
[02:30:35]  to say the only thing I will say for solid is a little bit different is that for every kind of signal that you create, it's a point of change within your application
[02:30:42] . And that can be passed anywhere, which kind of is very JavaScript kind of feeling. Yeah. Right. Like typically, whenever using react, you have your set and you
[02:30:51]  have your value that you have. You have your set and your gap. And those typically remain within the component. It'd be really strange to pass those around. Right.
[02:30:58]  Naughty, I would say. Naughty. You can put them wherever you want. It encourages that. A solid storage must control the components. They're
[02:31:07]  all talking over each other. You can do it, but you really have to control yourself. Yes. You can put it in the component too, but it can be outside
[02:31:15] . So it would be an apparent component? No, just put it in like the HTML or like the JS without being inside of anything. Oh, okay. So the benefit
[02:31:22]  is just like more flexibility? It's points of change. Yeah. Yeah. And the mental body train approach is like with react, you think in terms of your components
[02:31:30] . So you have like your app component that mounts your top nav and your body component. That mounts all these other things throughout with solid. you have your template that is
[02:31:37]  all of the content that gets rendered, but you also have your state, which is its own separate data thing that you can map to the components by calling instead. So like
[02:31:44]  in React, when you have the count, comma, set, count equals use state zero, count is a variable that you just use in console.log there. With solid
[02:31:53] , since everything can exist externally, it doesn't know that that value is dynamic or not, so instead you have to call it as a function. So you wouldn't just
[02:32:01]  say count, you would do count parentheses to call it, and when you call it, it's now built the relationship between where you called it and the data itself.
[02:32:07]  I will say one thing that's unique about solid is that, or one thing I really like about solid is that React in some sense makes people think about the data they're
[02:32:18]  grabbing as a tree, where solid, you're not necessarily bound by that same thing. You can have different ways in which you approach an application that just makes it simpler.
[02:32:25]  Yeah, but conversely, you actually have to follow the reactivity. Like you have to make sure that you're wiring things very, very specifically, and that is
[02:32:33]  an advantage but also a disadvantage. It adds complexity, but it gives you more power. The component model, like both of these are hierarchies of how your application works.
[02:32:44]  React, the component hierarchy, is the single source of truth for how your entire application functions, and your data graph flows through that. In solid, the data graph is the
[02:32:54]  thing that commands your entire application, and UI gets attached to that. I think the thing here that's important is that UI hierarchies are really easy for us to understand
[02:33:02]  because they work roughly like HTML, and they are very visual because we see them, and we can understand them that way. Whereas even just noticing that there's a data graph
[02:33:10] , much less visualizing it, much less explaining it and mapping and doing all these things, it's more difficult to show that than it is to show component hierarchies.
[02:33:17]  I will say React is fantastic. I have not met somebody deep in the solid ecosystem that's a contributor to solid that isn't relatively into React. We're all into
[02:33:28]  React. And especially Ryan, you know this. He's really, really passionate about React. We're really passionate about the whole ecosystem. The reality is like React serves
[02:33:39]  a very specific purpose. It's meant to be productive in large teams, large-scale environments. It's easy for beginners to pick up and learn these rules. Well,
[02:33:49]  easy. It puts them on ready. Yeah, easy is tricky. Fine-grained reactive frameworks like solid are a bit harder to get into. The learning curve is a
[02:33:57]  lot higher. But I feel like it scales easily. Once you learn it, you can actually build really large applications very similarly with React. I feel like it's easy
[02:34:09]  to pick up and then gets way harder after it. So it's kind of the inverse. It's something when performance comes into consideration. I want to see more big,
[02:34:15]  solid apps because I found there's a lot of parts that come to an application getting big. It's not just like there's a lot of code that we have to deal
[02:34:20]  with. It's also the quality of the average contributor. I should say quality. The knowledge of the average contributor goes down as a project. It's bigger. Skill issue
[02:34:27] . The likelihood that they know the things you're using, much less where they are in the code base, is much lower. So while I have seen a couple pretty big
[02:34:34] , solid code bases, there had been no new contributors to them for like four to five years. Whereas with the average React code base, especially at a big company,
[02:34:41]  a lot of people learned React by contributing to one of those big code bases. And that's a thing I think we haven't seen enough of in solid to know for sure
[02:34:47] . My favorite thing that I rant about all the time is the idea of the average React developer, where the average React dev has probably never initialized a React project. They
[02:34:55]  probably picked up React bases and a code base at their company. It's like the Python argument that I covered on a previous stream. When they use React, it was
[02:35:04]  kind of forced upon them in some way. Whereas with solid, the average solid dev absolutely picks solid. They want to work on solid. If they're using it at their
[02:35:10]  company, either they were the one who brought it to their company or they picked to work at the company so they could use solid. Yeah. No, I think you nailed
[02:35:16]  that part of it. You know, like, it's very interesting to see what's going to happen in the next couple of years. Like, our community is growing
[02:35:25] . There's, you know, so many opportunities to actually learn new things. Like, have you guys ever seen a large solid code base yet? I have. What's
[02:35:33]  the largest you've seen? I got a decent bit of a tour on the Post News site. Okay. Yeah, that's a pretty decent size one. So I
[02:35:41] 've now helped on and or constructed about four reasonably sized packages or apps with maybe about 20, 30 routes or one that had 50. And so... How many contributors on the
[02:35:53]  biggest one? It was about four. Good to know. Reasonably sized. I just, I learned React on a code base that had 800 contributors. You've seen
[02:36:02]  some pretty scale, like, well-scaled code. And you've probably seen some crazy stuff at Netflix as well. Netflix is one of the craziest React code bases in
[02:36:10]  the world. If I worked at Netflix, I would probably hate React. Yeah. The television doesn't have a concept of focus. Yeah. So focus runs through React.
[02:36:22]  You know what's funny? Right now, Ryan's actually doing a stream with the guys from Lightning.js. So it's a framework that uses Solid's universal render
[02:36:29]  to actually create TV applications. It's very hard. If you only have left, right, up, down, and back, which is like... Or enter, which is
[02:36:36]  your only... That's funny. ...5 buttons at one point. He doesn't know that I'm watching right now. How do you think about an application changes? Yeah
[02:36:43] . No. It's a completely different ballgame. It's very interesting. Excited for React Native. It's all this for us. Half a joke. They're
[02:36:52]  doing really good stuff with React Native. But I... Yeah, building TV apps is hard for reasons other than the framework you chose. Yeah. Yeah, we talked about
[02:36:59]  React Native earlier. Thank you for this. We appreciate getting to bring in our favorite framework right before the end of the conference about our other favorite framework. Sorry, a library
[02:37:08] . What a solid way to end, I'd say. Wait, a really good idea. Is Solid a library or a framework? Oh, no. Don't ask me
[02:37:13]  this question. He said React... He said fine-grained React a framework earlier. Framework confirmed. Okay. We'll go with that. Cool. Hopefully we don
[02:37:20] 't annoy Ryan too much. He's... Yeah. He'll be fine. Oh, that's funny. No, he's streaming right now. Ryan is in sh
[02:37:28] ambles right now. No, he's on a six-hour stream. He's not going to see this until later. Perfect. Well, I'm going to see
[02:37:32]  that stream too. Except we're watching. Oh, we want to thank you, Clerk so much. We really appreciate you guys. Oh, my job. Oh, fine
[02:37:38] . Yeah. Thank you so much, David. Now we can do our outro. Of course. What are your offers? Here. You can hold this. All right
[02:37:44] . All right. Cool. Thank you again. So, this was awesome. I'm pumped that we actually got to do this. Sorry. It was a bit chaotic.
[02:37:50]  Sorry about all the audio stuff. Sorry, everybody. All right. All right. Poor David. He did pretty good. I just kid. It is interesting being in
[02:38:01]  that kind of React conference zone, right? We get mentioned a lot in those conference talks recently. This past year, most React conference, Solid comes up at least at some
[02:38:11]  part of the conversation, which is, you know, even, we'll talk about them this week in JavaScript. We're kind of the new benchmark that people compare to when
[02:38:20]  they're like, oh, is React still good enough? Solid's on the other side. So, you know, I think it's interesting to kind of see that
[02:38:29] . I'm glad they gave David a moment to talk about it. It is tricky. There's a lot of ways that Solid and React are very similar from, like,
[02:38:41]  primitive standpoint and this view of, like, we just give you the things up front and then build with them, not like we expect you to follow as much of a prescribed
[02:38:51]  way and we reveal it to you a little in the time to make it easier. That's how I describe Vue, the progressive framework. So, yeah, it
[02:39:00] 's definitely cool to see this, you know, get more solid voices out there, so to speak. Anyway. See, that's the thing. We just need more
[02:39:14]  of these kind of stories and stuff. I was a Brendan who ported three apps that all had, like, 150 to 200 routes each, big development teams and stuff.
[02:39:24]  Like, I would love to, you know, this just happens with time, you know. We're continuing to improve, make things better. So, yeah, it
[02:39:33]  is what it is. It's interesting, Solid's not really competitive with viewers, so what kind of audience is more React and that audience is a much bigger product. Yeah
[02:39:41] . I mean, it's because I respect what React kind of stands for, just not what it does. Does that make any sense? It's like, do as
[02:39:51]  I say, not as I do, right? Yeah, it's interesting. I think it's sometimes tricky. Like, I'm going to put out there, the stream
[02:40:01]  that we were just, that we have today, right? You know, I was trying to ask which apps used Lightning.js, right, for Comcast, and he
[02:40:13]  wasn't able to talk about it. He mentioned Peacock, but, you know, maybe not, you know, some of the other ones. A lot of
[02:40:19]  times when we have larger companies like that using apps, I can hear some stuff, you know, being done, but we can't even really even talk about it necessarily publicly
[02:40:30] . So, there's this weird juxtaposition between open source projects and closed source, sorry, open source projects like Solid.js itself, the library and everything,
[02:40:39]  and closed source usage of it, right? I'm finding out more and more, you know, from time to time that Solid's used in way more places than I knew
[02:40:47]  or expected. But, you know, because it doesn't get out of the company, but then other people can't look at it to vet it, right?
[02:40:54]  I don't know if the large code bases are ever something you find in open source, you know, to a certain degree. Like, essentially, you have to look,
[02:41:06]  find a company that's already decided to go with that and scale it up to that size. And it's like a chicken and egg problem. Like, Theo's like
[02:41:14] , oh, we'll see when we see more large Solid apps. And it's like, but then we're not going to, if that's the deciding factor for people
[02:41:20] , we're not going to see large Solid apps. It's, you know, until someone actually builds large Solid apps, you know? I mean, when, as
[02:41:29]  I said, it's indicative or interesting when, you know, the stuff like post.news, which we obviously need to show off, they're like startups. Start
[02:41:37] ups often are incentivized. There's a few other that we've been talking to, working with that, you know, there's good stories, things, even things like
[02:41:45]  Bubble and, you know, where we can co-write marketing case study stuff because, like, they use Solid and to great effect and it kind of ties into what
[02:41:55]  they're trying to do. But, like, to the scale, you know, the, you know, that I've seen at, like, eBay or, like,
[02:42:01]  you know, you saw Twitch or Google and all this, we're, yeah, it's, if only Solid had a multi-million dollar corp behind it, marketing
[02:42:10]  it at every, every front-end developer. Yeah, I mean, if only. Yeah, Ember's still, still, still there, right? But,
[02:42:29]  and everyone knows LinkedIn. So, yeah, I will pay you to look at ours. I mean, Angular is pretty popular. I mean, even if people say, I
[02:42:44]  haven't actually ever heard that someone say Angular isn't that popular. Angular and Vue might pale compared to React if you look at, like, download metrics, but
[02:42:53]  they're always in this kind of zone of things. Do you know what I mean? Like, like, I think, like, a framework that's as successful as Angular
[02:43:03]  or Vue, you know, being in that, like, zone, I don't think they, that's enough sway that should be able to, you know,
[02:43:11]  if that's your choice, your technology, you should be able to get it in there, right? But if it's, like, Svelte, ourselves, Lit
[02:43:21] , a few other ones, we're way below, like, Angular and Vue and React, like, not even in the same ballpark, you know? Like
[02:43:32] , like, if you show the graph, you know, we're just, like, practically flatline compared to them. Right, so, yeah, it's all
[02:43:43]  good. Yeah, so, I wonder if we'll get more people showing up now that Theo's ended his, ended his stream. Funnily enough, we were
[02:43:53]  watching it at the end when David was talking. So, let me, so, yeah. I get your take on Blazor. You guys are just trying to,
[02:44:02]  this is, this is how you call, you call, you cause drama. I've already said what I thought about Blazor. Yeah, yeah. Yeah, yeah
[02:44:11] . Yeah, Angular isn't really popular in Europe. I was very impressed with the Angular community when I went to NG Poland. Honestly, great community, and it
[02:44:21] 's Google and the GDE program that does so much for that. I, I think it's one of the most amazing things. Again, it helps when you have that
[02:44:27]  big company behind it, but the speakers, the people, they're genuinely, like, their livelihood, the community, everything was kind of sponsored through these programs from Google.
[02:44:36]  It's, it's, it's amazing to feel that out in the open source, right? Cause it's not like they're Google employees. They're just people who
[02:44:43]  owe a lot to Angular and Google in terms of getting to their goals and lifting up their life and everything. So it's like, yeah. Yeah. Of course,
[02:44:55]  marketing is always a thing, but yeah, marketing costs money. Twitter not equals jobs. Yeah. Yeah. The thing is, it's, it's, it's
[02:45:16] , what, what, what do these things all have in common? Like release date. The, the, the, it's a function of the, the rate at which
[02:45:26]  we can grow. And then the growth continues. Like the snowball effect is a function of when the framework was first released. Right. It's, it's, it
[02:45:37] 's directly proportional. It's because frameworks in this space don't get less popular. They just keep on growing and growing. And in fact, they grow faster sometimes if they
[02:45:45]  get to a certain point. There are, you know, yeah. I got a whole stream about, you guys remember I worked at eBay. Um, I literally worked
[02:46:06]  on a framework that created their own DSL and to do incredible things, things that no other framework can do. I mean, literally, arguably the best framework conceptually
[02:46:17]  to ever exist for all of time in JavaScript. But like the amount of work is so extreme that what we were working on is still not been released. I can't say
[02:46:27]  any names because I promised I wouldn't. Yes, you do think of two different ones, but you think about this in every framework. Like there's like, there
[02:46:40] 's like the truth. And then like the lies we tell ourselves, right? Like you, no one uses React without an external state library. In solid, these things are
[02:46:53]  just the same thing. Like they're just like, you don't need a third concept, so to speak. And yeah, our devs are extremely fast to writing
[02:47:10]  quotes in Angular. What can I say more? Exactly. They know Angular. They know what they do and they can do it. The funniest thing is, this is where
[02:47:14]  things get tricky. They will stick with Angular probably, even if Angular completely changes. Picture if Angular literally over time just transforms into solid. Authoring experience, every little piece
[02:47:24]  of it. They would probably just stick with Angular even today. Part of it is because of the legacy of their own code base. But even today, pretending like,
[02:47:34]  and this is not going to be the case. Let's pretend that Angular gets to where solid is five years from now. And there's no other benefit to it. It
[02:47:42]  just becomes exactly what solid is today. And solid isn't even there. Let's say solid's doing even crazier things. Most people will just be like, well,
[02:47:51]  that's fine. I'm already using Angular. We've got this on our company. Everyone knows Angular. And they will just use that. Like the incentive, if something
[02:47:59] , you know, to be, you know, takes years. You know, that's, that's, it's perfectly fine. Especially if you're already invested.
[02:48:06]  And this is why that growth, you know, continues like that. I mean, right now, there's some economic stuff going on. What is the most impressive feature
[02:48:26]  in Marco? Honestly, you should just watch one of those streams. You know, they're not the, the last one I had with, uh, with, um,
[02:48:33]  uh, Michael in the fall was not my most watched stream by far. But if you ever want to see what the web could look like, I sometimes I suggest looking at
[02:48:43]  it. I don't know if anyone talks to Patrick anymore. He left eBay to go work at Amazon. And I know the guys from the team still talk to him
[02:48:53] , but he kind of, I haven't seen him much or even on open source. He used to be very active, like with morph DOM and all this stuff.
[02:49:00]  So I don't know, I don't know what Patrick's up to. Yeah. That syntax, um, podcast is really good. I did a JS party this week
[02:49:20]  that I think is going to be really good for people too. Um, uh, better than my first JS party podcast by far. So yeah, I enjoy podcasts.
[02:49:32]  It's good to just kind of talk through this stuff. And it's, it's always topical. There's always something going on kind of like these streams. Has
[02:49:39]  RC centered to other frameworks? No, not yet. Cause it hasn't even set a trend within react itself. Like they're really pushing through it. I think there's
[02:49:57]  a lot of good potential there. I I'm conflicted about elements of the solution. And we have some funding, as I said, to go look into this.
[02:50:07]  So I'm, I'm interested. We, we built an RC like solution for that movies app. And then like, it wasn't generalized. And we kind of go
[02:50:17]  like re shift stuff a bit, but like, there's just problems. It's not even problems. I just don't know if I like where it takes us completely
[02:50:27] . No, I, I mean, maybe I need to update my stuff. I, I left fully intending to do lots more stuff with marketing. Mostly. If
[02:50:43] , if I wasn't coding day to day, we, I still join them from time to time, especially for the first couple of years that, you know, uh,
[02:50:51]  you know, you know, every week or it used to be every like couple of weeks or like once a month, I'd kind of come in and we'd like do
[02:50:57]  brainstorming sessions, but I, I've drift apart from them a lot. And I was kind of hoping with like a Marco six release that, you know, I
[02:51:04]  get back into writing articles and talking through the stuff and the concepts and stuff, because they're doing really cool stuff. But yeah, I, I do not still work on
[02:51:12]  Marco very much at all. No. Yeah. Yeah. I saw you on with the OS. So we had to listen in and see what was going on. I get
[02:51:20]  what I, what you're trying to say. I think it was, it was, it's kind of like this awkward, it was like the, it was interesting
[02:51:28]  because both prime and the, or putting up the skepticism side of the argument a little bit. And it's like, yeah, I, yeah, no, no,
[02:51:42]  I, I work at Netlify. Um, Netlify hired me to work on frameworks. I've been fortunate enough to be able to work on solid for the
[02:51:49]  last two years, almost full time at Netlify it's, it's possible. But like there's people who say that JavaScript is not a data flow language that
[02:52:08]  might, you know, kind of get in the way of that. I remember when we were first talking about getting signals into the browser, there's two sides of it.
[02:52:13]  Dom's like made two tweets, Dominic Ganaway. And he was like, okay, I'd love to see signals like this. And then he's like
[02:52:20] , I'd like to see like a simple, like non-function accessor. And I remember Brendan Ike replying something along those lines that like, you know,
[02:52:29]  JavaScript is not a data flow language, which, you know, I'm sure there's others that feel that way. I'm not a data flow. No,
[02:52:46]  David, you did good. All right. All right. All right. So yeah, we got some people coming in here. It's too bad you guys missed my guest
[02:52:54]  today. People don't realize this. He was actually, it's funny because at one point in the stream, Theo was all like, you know, and hopefully we
[02:53:03]  can all use React Native. And actually we did a big part why React Native like didn't actually, wasn't suitable for the TV UIs he was working on.
[02:53:11]  But yeah, it's, it's, it's, it's interesting. What we covered earlier with our guest was a, was TV apps basically. And it's
[02:53:26] , it's cool to see someone from Comcast talk about, like, if you look at the Lightning thing, they have an internal framework and they have solid, that's
[02:53:35]  it right now. So like it suggests there's a good possibility of people going to be using or are already using solid inside of Comcast, you know, who do,
[02:53:45]  who own Xfinity, do, you know, NBC, you know, like the big, big company. So maybe we'll see those large code bases before we
[02:53:55]  know it. Anyway. Um, yeah. What do we want to talk about right now? We could do this. We can JavaScript. Now I said, I was going
[02:54:09]  to talk about a couple of the articles I've been working on thoughts on HackMD stuff. Yeah. My understanding is he works on the TV apps and he,
[02:54:24]  he's not the only person working on Lightning. It's more like he's on a product team that builds stuff with Lightning. Um, yeah. And he works at Com
[02:54:36] cast and he decided, and I guess his team decided to build a solid renderer for it. So, yeah, I mean, we're, we're out there
[02:54:47] . If solid is data first, UI is second, react to opposite, and our Cs are here. Did you think about making solid story more about pretending to climb server
[02:55:05]  data flow rather than mirroring remix? I mean, yeah, I mean, that's what we did. The, the feature that the last feature we put in to
[02:55:12]  get to 1.0 was single flight mutations. We can basically do all the stuff in a purely client way. like, like client rendered way that people wanted RRC
[02:55:23] s. We can, we can like send a mutation, fetch the data for the next page, all in the same request while doing client side rendering. So like,
[02:55:33]  in a sense, I don't get me wrong. I think there's interesting implications of HTML partials, but solid starts feature set or data fetching, all the elements
[02:55:42]  of it that I went over previously, um, make it like this complete unified story, whether you're going from client rendered spa to SSR, all with the same data
[02:55:53]  fetching. And with all the ability to remove server client waterfalls, um, especially when solid 2.0 finishes up, which I'll talk about in a minute
[02:56:05] , um, that like, other than the ability for operational partials to reduce JS bundle size, um, would have RCs, like it's basically equivalent, you know
[02:56:18] ? So I, yeah, I, uh, yeah, I, I, I think we're already kind of doing that. All right. What do I want to
[02:56:28]  talk about here? Let me show my screen. I mean, I could make it with, we could make it, uh, sorry, where is it? It just keeps
[02:56:37]  on sliding on me. I can, we can make the 1.0 movies app. It just wouldn't be as cool as the, the prototype one, the prototype one
[02:56:45] . We were doing the show off basically an RC type stuff. You have them some of the movies app. It's a static site. Like it's literally, you
[02:56:51]  could just like use this basically a static site generator type thing. I mean, to be fair, there's dynamic pages, like, but like a heavily cash, like could
[02:56:59]  do it. There's no interactivity other than the search. So like, yeah, I mean, it's basically like, it's basically the perfect demo for something
[02:57:11]  like RSCs or I kind of. Prefer the smoothness of not using islands there, but like we could remake it as an islands project. Definitely like Astro style
[02:57:23] . We still support islands built in with solid start. It's just the router. We pulled the router out of solid start. We need to re-implement the islands
[02:57:31]  router back into our general router package. So everyone can benefit from it. So, I mean, porting it over would be easy, but I also kind of like
[02:57:41] , I think it's a good demo when we need it to be a good demo. I think that what we're more generally going to do is because we pulled that router
[02:57:50]  out, we can release solid 1.0 without worrying about those kinds of details. These are independent details. I know this is kind of crazy for people who are used
[02:57:58]  to like next. Now you need the app directory. But what I'm actually saying is solid start doesn't matter that much. It's just like this kind of like nice
[02:58:08]  development place where you can do employees and do all that stuff. Our power is still in our primitives and in our libraries. Yeah, exactly. Yeah, create resource
[02:58:25]  and the work we're doing to create async is really powerful. I think signals are great for self safely. Do you think solid could work for doing this? I mean
[02:58:37] , signals in a sense are like what a spreadsheet is. Part of me wonders though, is if I would be tempted if I was making specifically a spreadsheet to make something
[02:58:51]  even like specifically for that case, like solid is still a general purpose solution. Signals are very efficient for being general purpose. If you're building a specific thing, you
[02:59:02]  can usually apply constraints that will allow you to get even more performance. That's my guess there. That being said, yeah, obviously signals are better at giant tables than like
[02:59:12]  doing a Vita, like doing any, like don't build this in react. You know what I mean? But yeah, okay. I got to share my screen
[02:59:28]  again, don't I? Entire screen share. No comment. Sorry. I'm, I'm not talking about, I see styling is not choosing styling libraries is
[02:59:52]  like highly religious topic and it's not something that I'm, I just want to get pulled into, which is also why I lack knowledge here, which is why I,
[03:00:01]  we, there's some patterns around CSS around Vinci and solid start because like, I'm simple. Like I really liked what Nikhil's kind of putting forth there
[03:00:09]  with Vinci and I something, there's something similar to remix where you could like load and unload styles, but most frameworks don't do that. There seems to be impact
[03:00:16]  to it. So I feel like a few rough edges that we need to get sorted on the positive there. I don't think it actually changes start itself much. It's
[03:00:25]  just, we have to make those decisions for defaults and Vinci and fall through. Yes. Lightning JS is a WebGL renderer primarily for building television UIs
[03:00:39] , but he's, he's moved on now. Uh, we finished our interview. Now I'm getting into when I talk a bit before we go into this week in
[03:00:46]  JavaScript. Um, I have two things that I've been working on a lot the last little while. Um, one is called the next JS framework benchmark and partially lazy
[03:00:57]  reactivity. And I don't think I covered this one on stream and I don't think I finished writing it to be fair. I started writing this about a month ago
[03:01:05] . Um, because it's funny before benchmark gate last week or whatever, I was already been working. I mean, we started some work actually. Alexis, when he was
[03:01:16]  working on was started his work for solid start with a, with a benchmark. But I, I think we need to go further. Like we need to test certain scenarios
[03:01:27]  and get it really kind of sharpened. And my, the two benchmarks that I've been primarily using to date were the JS framework benchmark and the isomorphic UI benchmark
[03:01:42] . And the thing that these two benchmarks have in common is that they're fairly razor sharp in that it's hard to cheat them and they can show the one thing they
[03:01:53]  do very, very well. Those are qualities I like to have in benchmarks and they're easy to implement. Yeah. Those three qualities are qualities that I like to have in
[03:02:00]  a benchmark. And one tests like client side table rendering, JS framework, and the other one tests basically synchronous SSR rendering. Like it doesn't even measure the full
[03:02:16]  end to end of starting at the framework. It just, it's like how fast is rendered a string. And as everyone knows, solid is kind of the fastest in both
[03:02:28]  of those benchmarks. But there's much as we, you know, iterated over a ton last week, there's, there's much more to rendering on the server
[03:02:39]  than how fast you spit out the HTML. Right. So like, what did, what did I say here? So we know how fast firms render and updated in the client
[03:02:54]  and how fast the server render. Did I ever make this one public? No, I didn't. Probably because it's not done. It's fine. I'll
[03:03:06] , I'll, I'll, I'll share this one for now. Just in case anyone wants to look at this. And this one's rough. We'll go to
[03:03:15]  the next one in a minute. Yeah. To be fair, for async SSR, it looks like SvelteKit is fast and solid. And I've
[03:03:24]  seen that confirmed by the guys from Fastify, I think. That SvelteKit is slightly faster than solid async rendering. But everyone in that benchmark above Svel
[03:03:38] teKit, like out of the frameworks tested in that we're doing the equivalent async stuff. SvelteKit was the fastest. Solid was second. Remix was
[03:03:47]  third. And then, yeah, it was, and then next pages, then Nuxt, but Nuxt wasn't doing the same thing. And then next app directory
[03:03:59] . No, it's yeah, no. Yeah. This is a new one. Sorry. I didn't mean next JS, but I can understand. You see that.
[03:04:08]  I was saying the next JS framework benchmark. Cause for me, this is the benchmark. This is the baseline of like what a good benchmark, you know, characteristic good
[03:04:19]  benchmark should have. Yeah. I don't care about specifically about next JS. Let me get there. The future. And to be fair, I'm still outlining this
[03:04:32] . I just needed to get this, this kind of spec'd out in my head. I've actually had this conversation with Misko Hevery a lot. Right. So
[03:04:45]  here's what we need to know. Because rendering HTML is not, you know, the only thing. This is the problem when you compare it to like rails, like,
[03:04:58]  oh, sweet. Well, you've got the HTML page. Well, guess what? To make an HTML page interactive with JavaScript, you're going to be sending other stuff
[03:05:04] . And there's also the, you know, the cost of hydration, you know, here's the thing. If we're going to talk about SSR and look
[03:05:11]  at server rendering speed all day, then yeah, of course. Yeah. They'll be like, why do you use JavaScript frameworks? You should be using rust or go or
[03:05:20]  whatever. It's like, the problem is, and this got me that controversial thing with like when the prime rated me and I basically was like, you told, said that
[03:05:29]  like, if you weren't using JavaScript on the server, you were doing it wrong. Which obviously had some fun with those guys, but the problem is it's if
[03:05:44] , if, if you're just measuring the HTML output of this stuff, you're like missing the whole story because your app presumably is interactive. There are websites and that's
[03:05:54]  fine. Yeah, that's fine. I don't care about your websites to be fair. Like I don't care if what websites are like 95 or 98% of
[03:06:04]  the web. That's not why I'm here. I'm worried about that 2% or 5% or whatever. So that's all fine. Go use whatever you need
[03:06:13]  for your website. You could use a static HTML file for all I care. It's more about if you have interactivity. You know that there's going to be
[03:06:26]  more stuff involved. And that's what we, you know, need to care about. Right. Because all the, yes, cheaper on your server costs, you're saving
[03:06:44]  money, but all the gains that you make on rendering 10 times faster on the server are gone in an instant. The second you hit the client and you don't do
[03:06:56]  stuff efficiently. It's like, it's like you might as well have not even done it. The, the order of magnitude difference on the impact on the client is just
[03:07:06] , it's not even close. Like it's like, you're like, look at this thing. It's so much slower. It was, it was, could
[03:07:13]  you believe this eight 80 milliseconds slower per request? And then it like, you do something stupid on the client and it's like, yeah, it was three seconds slower.
[03:07:26]  Like it's not even, you know. Right. Yes. My point by talking about rails argument is it makes sense where I'd say, but I want to interact
[03:07:40] ivity is no longer feasible. So people want tools that scale across a wider range of options here. Right. This is why the, the desire of need versus want is important
[03:07:49]  because want captures what you do today and what you may do tomorrow. Need usually. You know, is a bit more short sighted, which is fine, but I think
[03:07:58]  it's important to, you know, sometimes you just need what you need, but sometimes there's other options. Rust API with a Java applet. Yeah. I
[03:08:14]  mean, perfect example. So let's talk about how do we benchmark? How do we capture this whole thing from end to end? The whole, the whole story. Right
[03:08:26] . And I talked to experts in the field about what is actually expensive. I talked with Jadon from Wiz. I've talked to the guys from the Marco team
[03:08:38]  at eBay. You know, I've spent time with performance experts, you know, people on the Chrome team, Addy Asmani, Michael Mockney, you know
[03:08:49] , like we, we, we've discussed, you know, different tricks and different things. And for me, if you're going to get end to end, if
[03:09:06]  you're going to talk, not like, maybe you only care about measuring the part that's on the server, but you still have to generate the stuff that you need to
[03:09:12]  be successful on the client. And we need to know what the best thing we can be doing on the client. I don't think that's known today. So these
[03:09:20]  are the four things that kind of come to mind. Cost of code execution. Most of this is all initial load, but I think this can apply after initial load when you
[03:09:31]  consider page navigation. Like if you're on an islands framework versus client routed, you hit these things again. Right. And if you're an RC, you're
[03:09:40]  kind of like in the middle, you're going to do straddling both lines. Like, like a perfect example. And I don't know the answer to this completely
[03:09:47] . It's like, when does the client JavaScript code load for an RC? Does it, is it, uh, is it like, how does the browser know what JavaScript
[03:09:57]  it needs for the next page in RC? Does it happen at the time of clicking the link or like preloading the link, or does it happen after the response
[03:10:03]  from the server? Right. Because like in a typical website, when you go to the next page, you get the HTML back and then it tells you what JavaScript. So
[03:10:10]  there's two trips, right? We know that the JavaScript for the, for those like client components in RCs, for example, do not come over the wire as part
[03:10:19]  of that payload. So either it's two requests, it's definitely two requests. So either the request is happening and upfront or it's happening after. And if it's
[03:10:29]  happening upfront, then the client needs to know about the route. It needs to know that that route has certain JS that it needs. So like, I'm just kind
[03:10:43]  of framing that while in a lot of ways, this is initial load, the way things are shifting. And when we're talking about more complicated solutions, this could apply to
[03:10:53]  things that go beyond initial load. So cost of code execution, cost of the bundle transfer, right? Cost of data serialization. And then the cost of blocking resources
[03:11:11] , things like CSS, right? See, there's a difference in code execution and bundle transfer. I want to kind of point out, like you can maybe then the
[03:11:22]  code, but not execute it. That can have a different impact. how much code you send, the degree to which that matters probably is dramatically different to the degree of
[03:11:37]  how much code execution matters. And I'm not really going to talk much about or I don't know it enough. We already established. I'm not a CSS expert
[03:11:52] . I saw a comparison. Someone was talking about the difference between inline CSS and loading CSS. And it said that inline CSS. Was generally actually a lot faster,
[03:12:01]  especially on mobile, but not necessarily on desktop. But when I saw the desktop numbers, it still looked like it was a lot. It was still faster. Like they
[03:12:10]  were like, oh, it's, you know, on mobile, you were seeing gaps of like a second. But on desktop, it was like 200 milliseconds. Well,
[03:12:15]  to me, 200 milliseconds is still significant. Yeah. Well, I mean, it's a tricky balance because like how much, if you stop blocking, if you stop like
[03:12:25]  loading CSS, the CSS becomes part of that serialization cost. Like the part, the bandwidth that you're sending over the wire, right? Could four be any as
[03:12:37] ync dependency? I'm, yeah, I'm talking mostly about ones that are actually blocking, but yes, it could be. Except for JavaScript. I'm assuming that JavaScript
[03:12:51]  is in two, but yes, because these things all get in the way. Like if you need CSS to actually show the page properly, then the page won't render.
[03:13:00]  So anyways, talking to experts in the field, we definitely feel that three, the serialization cost is probably the most expensive and the first two vary more, vary more
[03:13:12]  in expense. Bundle transfer may be difficult to test in simple examples because you don't write much code for them, right? Like you, it's all point. It
[03:13:21] 's not about like, you can't test bundle transfer by putting a million components on a page. You need a million different components. Right. Like you, you can
[03:13:31]  always test the cost of code execution by like taking one component and doing it a zillion times. Right. That's not a true test because there's like certain warmup
[03:13:40]  speed, you know, like code that's never been hit before. It becomes a hot path, but like compared to something like bundle transfer where you actually need to produce the
[03:13:48]  size. I think it's like, there's also a difference in bundle transfer. Like what if you just put like a giant string in there? Like, yes,
[03:13:55]  your bundle got bigger, but you're not actually, it's not realistic scaling of like parsing or processing a large JS bundle. Like what I was saying is that
[03:14:09]  execution and serialization are probably the easiest things to measure. We already have a test. The Hacker News comments page is actually pretty good hydration test for execution and serialization
[03:14:24] . There are huge amounts of data, lots of nested components. It's also trivial to implement in vanilla JS. With fixed prefetch data, this could serve as
[03:14:31]  a baseline. However, we need to be a bit more restricted on implementations. Don't cheat. While this might seem discriminatory, my interest is only in client-
[03:14:37] routed solutions. We know that MPAs are fast. You know, Astro or whatever. We know this. This is not interesting. I've shown this
[03:14:46]  on stream a billion times. Whilst vanilla JS show you the most optimal approach, I think frameworks must be able to show persisted state with client-side routing in an example
[03:14:54] . The criteria would involve an interactive counter that when you navigate to the next page, that relies on the count to decide what to show. It should show and hydrate
[03:15:03]  properly. Adding this shared persistent client state should be sufficient, I hope, to prevent manual optimization creeping in. Basically something that would break the view transition API. If we could
[03:15:14]  somehow combine a Hacker News-like demo with something that breaks the view transition API, I think we've hit the baseline criteria for showing. Because really what I'm
[03:15:25]  looking at here is for things that do client-side routing. I want to know whether I want RSCs, whether I want resumability, what the trade-
[03:15:35] offs of those kind of things are, whether just having small bundles and optimal hydration is good. How much does that hydration cost? Okay, we care about interactivity
[03:15:47]  here more than render speed, right? Because it's already been server rendered. However, serialization does impact render speed, so we can't ignore it. LCP,
[03:15:55]  INP seem really important, but we might need to do more manual measurement. LCP could be impacted by streaming more than the difference of data over the wire. M
[03:16:03] ISCO from QUIC had a test where a button is pushed the moment it is visible, and then afterwards, a second time, to show the impact of interacting before and
[03:16:13]  after hydration. I kind of care less about after hydration. The challenge there was, I heard from MISCO, is that the input was lost for a lot of solutions
[03:16:25]  if you tried to click it beforehand. So, like, how do we know when the right point is to click it, essentially? Maybe the best we can do is
[03:16:36]  potentially keep pushing updates until they are reflected on the screen and measure the distance from the first click to the first update. Yeah, anyways, this is just rough brainstorming.
[03:16:48]  I have more work to do here. I just, I think we need, the challenge here is, frameworks are getting better at spoofing interactivity, but if
[03:16:58]  the true meaning of interactivity is kind of what I was getting there, from when you click something, you know, so when it's visible, to when it actually does
[03:17:09]  something that actually gives you an indicator that it's working, is really the best measure for interactivity. But, like, it's, it's, it is a
[03:17:23]  bit tricky because we have lots of mechanisms that allow us to capture events before hydration now, and, like, figuring out how to not have people cheat this is actually probably going
[03:17:40]  to be one of the hardest challenges. Yeah, I mean, that might be interesting. CSS might be one. Like, yeah, but like, what if people,
[03:17:55]  like, have a style applied, and then, like, almost like an inline script that flicker the style? Like, yeah, I don't know. This is
[03:18:03] , this, this is, I have started on this process, and I haven't touched this document in a month. I forgot what it actually said. So that's why
[03:18:09]  I'm kind of reading it over. But I, I think we need a test that doesn't include MPAs, I'm sorry, unless like, you're
[03:18:18]  trying to do something with the view transition, and you actually account for shared persistent state. So there has to be something to make sure that it, but the idea is something
[03:18:26]  that does client rendering, because I, I was about to build it, and then I kind of got sidetracked, because I got, it's funny, I
[03:18:32]  was, you guys remember I made the quick Hacker News demo on stream, but I built it as an MPA, and unsurprisingly, it was very quick to
[03:18:41]  load. In fact, I didn't need to load any JavaScript, and then I used it for a while to show the, the, the, the problem with lazy
[03:18:49]  lowing JS. But to be fair, quick then added that service worker thing that fetches in the background, and we kind of got all in the same place. But
[03:18:58]  the funny thing is, I never made the SPA version of it, the client routed version of it. And my hunch is, when you go to the client version
[03:19:08]  of it, you're going to lose the serialization benefits, because quick uses the same kind of optimization that Marco or Astro does to save serialization. And the
[03:19:15]  second-hand client-side routing, it goes out the window. Server components, in theory, could solve this problem, but we know in React, they definitely don't
[03:19:24] , they send a whole crap load of stuff. So like, we need a scenario that penalizes us along all of those directions to see if there's a way to actually
[03:19:37]  solve this problem. Yeah, see, here's the thing. JS streaming is what, is what quick does essentially, right? Like, it streams JavaScript. But do
[03:19:51] , how does, if, this is why I want to know about the, the cost of code execution, because like, or, and bundle transfer, because like, let
[03:20:01] 's say, let's say I don't stream the JavaScript, and it just comes in at a certain point anyways. Like, who cares if it's not running? But
[03:20:08] , but the, this, the cost of serialization, we know is real. I'm just trying to figure out how much this impacts the load metrics, because if,
[03:20:17]  if, do we need to stream the serialization as well? Do you understand? Like, is there a, are we optimized in such a way that, yeah, I
[03:20:26]  don't know. This is what I want to see. Okay. Let's, this is only a start. Um, but, and I need to fill out the
[03:20:43]  rest of this document, but I just wanted to kind of put it out there. Cause like, I do think that the way we're looking at server rendering benchmarks is
[03:20:56]  just not particularly interesting. Like we've, Marco had the, like the benchmark result last week is basically identical to the, it, it includes the startup time where Marco
[03:21:08] 's didn't, but like, it's, we, we've had a version of this benchmark for like 10 years now. We need to do something a little bit different
[03:21:16] . We need to actually get closer to what we're actually trying to do. And I know that's always a challenge with benchmarks because it adds more degrees of subtl
[03:21:24] ety, but like we're, we're so far from there because the technology has been evolving, you know, from things like streaming and, you know, RCs and
[03:21:35]  stuff like the, the just churning out HTML is just not telling the story. Okay. Okay. Next one. Remember about a month ago, I did signals three
[03:21:53] , or signals 2.0, not signals three, sorry, signals 2.0 stream. After that stream, I got serious and I was like, okay, I,
[03:22:01]  I realized that it took me way too long to go through the topics there. It helped me think. So I appreciate that. But people in the comments are like, Ryan
[03:22:08] , if you prepare a little bit before your stream, then people can actually follow what you're talking about. And I was like, yeah. Yeah, yeah. You
[03:22:15] 're probably right. But sometimes talking out loud helps. Oh, sorry. To answer that previous question related. Do you mean by stream the serialization, something like sending
[03:22:43]  a response object to the client and letting serial stream the body as it comes in? Well, in a sense, that's how solid already works. Solid core, if you
[03:22:49]  know, serial is a dependency. It's because when we do SSR streaming, we actually do use serial to serialize the stuff as it comes in. I don
[03:22:58] 't know how that affects page metrics though. Like, I don't know if the fact that the current page is still running, like, I think we need to really dial
[03:23:06]  down into what, what matters. Like, IMP and interactivity seem to be what matters. You know, and the Chrome team is pushing us that way, you
[03:23:16]  know, in terms of their metrics. But like, yeah, is that is that our goal? Like, we should confirm that. I think it's a good starting
[03:23:25]  point. Signals four. Signals two is already so boring. Signals three, you think. Uh, okay. No, we're still talking about signals two,
[03:23:40]  so to speak, right? If you, if you follow that solid today is like an ownership pattern, which I called kind of 1.5 that you can see a lot
[03:23:47]  more of in other signals implementations over the next year. Um, it's not part of the like official spec, but everyone's got it in their mind. Own
[03:23:55] ership is something that comes up in those signals meetings all the time. Um, so like, I, I, I kind of continued off of where we left off in
[03:24:08]  the, in the last, uh, dream. Um, I think I reiterated over stuff. Um, I think the key takeaway from my signals to stream was that
[03:24:24]  async and being lazy are at odds with each other, I guess, async, lazy and blocking are at odds with each other. You can be lazy and async
[03:24:34] , but not blocking. But if you want to do blocking, then if you're lazy, you're waterfall inducing. Basically like react reacts like server component architecture is
[03:24:50]  like designed to create waterfalls. There are waterfalls on the server again. So it's fine, but it's like, it's basically like, like how to create
[03:24:59]  waterfalls. And I, but I like the blocking this because it removes the coloration from it. You know, you ever heard that term where, you know,
[03:25:11]  of coloration of functions, like they become a different type. Async functions literally have an async thing in front of them. It colors them, so to speak.
[03:25:22]  Async functions, we get async functions, we get async functions all the way up the tree. And the equivalent in something reactivity is if you have to
[03:25:30]  check for is loading or null check everything down the graph. So if you can be blocking as in, you hit something async and you throw along the data graph, then
[03:25:40]  you can remove the coloration, which is really nice from a DX standpoint. Now, I personally think that is a terrible idea from a view UI thing. It's the
[03:25:51]  reason why you probably aren't going to see async components in the client because things happen at different times, you know, interacting with each other. It's kind of too
[03:25:58]  limiting to have just like a single blocking point. It's also why I don't think generator based frameworks have really gotten there, you know, but I do think that
[03:26:14]  the DX gain is just such a game changer monumentally. And if we keep it to the data graph, then the UI can flow freely, so to speak. So
[03:26:35]  this whole idea here of partially lazy reactivity is this concept of like, what if we had async data that did block along the data graph? how would we handle
[03:26:53]  it? And the answer, obviously, is make the async eager again. Right? Because I started realizing that solid being eager, even though it's pushbull, it
[03:27:03] 's eager, has actually saved us a lot of headaches. So one of the other things that I kind of didn't touch on too much, although I guess I touched
[03:27:23]  on is there's this like awkward problem here that lazy showed that everyone's doing lazy right now. It's not just for async, but async emphasizes it because
[03:27:35]  time passes. It's that in the past, pure stuff always ran before all the effectful stuff. But if you start making things lazy, then you might be running computed
[03:27:47]  values or memos or whatever for the first time while your effect is running. So you could be running, you might run effect one, effect two, then run this memo
[03:27:54]  for the first time, and then effect three. I, while it's fine from the sense it should be pure, if you're using a memo to measure something like
[03:28:05]  grab a value from the DOM before rendering, then it's not particularly suitable. Right? And you can go, well, it's supposed to not interact with the outside world
[03:28:15] . Well, I don't know. I don't know about that. I actually really like this idea of pure before effect phase that we haven't solved today that we kind
[03:28:24]  of stole from react. It's part of the reason why we can emulate react stuff to a certain degree, even though we have no virtual DOM. And you want it
[03:28:34]  to, as I said, there's always potential for tearing if you have the split. So I talked about this on stream, but here's the crazy hypothetical idea. And
[03:28:48]  I know everyone would hate this, but what if our favorite hook, reactive primitive, create effect or create render effect, or every variation of it you can imagine actually split
[03:28:59]  between the tracking and non-tracking. And I know people, someone very wisely pointed out last stream when I, when I talked about that, that, oh, it
[03:29:07] 's like the dependency array in react and they would be right. Except it's dynamic. It's a dynamic, it's a, it's a dependency array that can
[03:29:16]  change on every execution. And if you did that, so you had a tracking area that did not write, so you couldn't write to other signals in here, kind of
[03:29:28]  like the same you can't in a computer or memo. And then a pure second of non-tracking. This is a very simple approach to ensuring that people always got
[03:29:37]  consistent state. Because if you couldn't write to state in the front half and you ran all the effects and then you did all the reads and all the reads of state
[03:29:46]  that you read on, like, and what I'm suggesting here is that this return value is what you get here. And because you want the track, you did all the
[03:29:55]  reads here. Essentially, you would never see an inconsistent state. Now, don't get me wrong. I write right here that I think everybody would basically throw their table
[03:30:05]  if someone was like, no, this is, this is what create effect is like from now on. To be fair, I don't think create effect should be used a
[03:30:13]  whole ton anyway. So like, it's kind of one of those things where it's like, yeah. And also there's a little cool secret here is if you return
[03:30:24] , if you got rid of this constriction where it says no writes, if you just looked at the first half here, like if you basically like, you could
[03:30:33]  basically take the current create effect API and lay it on top of here and have everything just run in the first function. I'm not saying this is great, but you,
[03:30:41]  you, you, you follow what I, you, you follow what I'm getting at. You could actually kind of ignore that one made this change, but you make
[03:30:51]  this change for a really good reason. Right. Well, Redux has some good ideas behind it. It's just, it's not granular. React has great ideas behind
[03:31:05]  it. It's just not granular. So what I'm saying is what you need is pure syncs. Cause if you're pure syncs, you could ensure that
[03:31:13]  basically all of the pure side of your effects always ran before anything effect will happen, any rendering happened. I'm saying run all the async calls, all the render effect
[03:31:29]  pure and all the normal effect peers, all before you run any effects, do any rendering. And then go through and run all the render side effects. Like do all the
[03:31:42]  rendering and then do all the end user effects. And in almost immediately, this feels kind of like the pure phase is like when reacts doing its like actual rendering the VD
[03:31:58] OM. The difference here is instead of, um, instead of creating a VDOM, you're just making sure that every memoize value gets read ahead of time
[03:32:14] , essentially. You're making sure that there's like a clear schedule here. And I kind of hinted at it here, pure queue, render queue, post-
[03:32:22] render queue. And if I haven't shared this in the chat, I really should do this. What do I say here? What we need is pure syncs.
[03:32:43]  So there's a big ask. People drop care of React dependency rays when your system is fully lazy pulled. It's the best option you have. A reactive system can be
[03:32:50]  a bit smarter because we have dynamic runtime dependencies, but fundamentally are the same. In a sense, it's getting our eager behavior back, just scoping it to what actually
[03:32:56]  you subscribe to, like what actually changes. We've run the pure tracking part on update before you run effects. And if we detect anything to suggest it shouldn't continue,
[03:33:04]  we don't run the effects. So this is how things like transitions or whatever happens. And the key part about the split too, it means that if something throws here
[03:33:14]  in the graph, the async thing throws here, we know to bail out of doing not just this effect, but all the effects. And we never ran the effect before
[03:33:24]  it. This ensures that the non, um, now don't get me wrong. Normal effects usually always run completely after this, but in some weird way or place where
[03:33:35]  someone makes async data and then reads it for the first time inside an effect, we would have like, it's already too late to suspend or whatever, because, you
[03:33:45]  know, effects run after rendering, but this would be a way to ensure that that async model could always work. Obviously today, like in solid, if you try and
[03:33:58]  create a resource and the first time you're reading an effect and it's the only place you read or whatever, like it doesn't get part of rendering or part of
[03:34:04]  memo or something, you'll find that it doesn't suspend the way you expect it to. And we had some weird transition bugs where people did stuff like that. And I
[03:34:12]  was like, I was like, put in a real app. You'll never actually hit this case probably. But it's important to understand that like if the whole idea with
[03:34:19]  transitions and suspense is that you like run the stuff and then once it settles, then run, you know, the effects, reading it in an effect the first time
[03:34:28]  doesn't work because it's already too late. This would actually make it not too late. Maybe nest the functions inside each other. Yeah. And Milo had had,
[03:34:39]  uh, talked about this, but then you would have to, it is a little bit weird. I mean, part of the cool part here is that the value can
[03:34:51]  be passed through without creating an additional closure, but yeah, Milo had shown an, uh, uh, an API and you could actually hide inside the effect API where you
[03:34:59]  can basically, um, just like have people return functions that do the side effect. This might, that's still kind of reasonable thing. I, I, I'm less
[03:35:11]  about the API here and it's just picture the scenario here, right? This, this lets you read everything pure before you have to worry about side effects, which means
[03:35:22]  that a system that was blocking or through would never impact in a negative way. You could just kind of, it would just work because you could very clearly bail out and not
[03:35:32]  run these in the different scenarios. I actually talk about this handling suspense fallbacks, right? Um, if during a pure effect, we call call effect call, we
[03:35:45]  realize there's a waiting async. We bail out of executing the actual effects. However, we don't want to lose those effects. We need a way of knowing when
[03:35:51]  the pure computations are settled. The simplest mechanism to register them is with a suspense boundary and on any resolution, remove any, um, settle nodes and then check the length
[03:36:01] . If it is empty, consider things settled now and run the effect of the, of the effects, so to speak. Additional changes may end up being cute, que
[03:36:10] uing more things. So we have to like, you know, keep on checking, including the same effects again. It may be cheap enough to just consider keeping on a pending
[03:36:18]  to the list and counting on dirty state to just short circuit execution. Render effects tend to run immediately on initial render, right? Because we don't want to delay them
[03:36:25] . We don't want to like render stuff. We could, if we desired only hold off end user effects on the whole and run any render effects, um, that
[03:36:34]  can be run that aren't directly blocked by a sync. This might lead to extra work being done off screen, but it could also preemptively accomplish more of the rendering
[03:36:42] . However, with concurrent rendering, rendering any effects while unsettled is not an option. So it may be simpler to just keep the behavior consistent. Effects outside of an impacted
[03:36:50]  suspense boundary are not impacted. So this is very much an ownership problem. I don't know if that makes any sense to anyone. So it's a little bit technical
[03:36:57] , but I'm just saying like you for both suspensive and for transitions, you can basically, we have everything we need. When you look at it this way, there
[03:37:11] 's no holes. We can always, as I said, keep end user effects, not like this and just keep them the way they are, but there will be potential
[03:37:18]  holes, so to speak, not common, not the 90% case, but, or maybe even 95% case, but it's like, not like from an academic,
[03:37:28]  like clean standpoint. Um, what do I want to say? I mean, for transitions was to say if during a pure effect call, we realize there's a waiting as
[03:37:41] ync, we bail out of executing the actual effects. However, we don't want to lose those effects. What didn't, I'm sorry. I didn't scroll
[03:37:47]  the way down. Transitions are a bit more complicated. They're almost the opposite terms of scoping. A suspense boundary may allow certain things to opt out of a transition
[03:37:53]  and it takes responsibility, but anything that is not caught ends up getting in this global thing. Yeah. So this is an important thing. I don't know if people will
[03:38:00]  understand this about suspense and transitions, because people kind of view them at the same sort of thing. Transitions are a global thing where, well, suspense is like a localized
[03:38:09]  thing. It's like saying like, if something async happens in here, we're going to show a fallback. That's like kind of like how suspense works
[03:38:15] , but transitions, when you're in a transition is more like anything that isn't part of a new suspense boundary, something that would fall to fall back gets caught by this
[03:38:25]  global thing. And that's what the transition is. The transition actually isn't localized. It's to make sure that when you change something that's even outside of the suspense
[03:38:35] , nothing else reads it until everything async is settled. It's like an async transaction. The reason suspense even has a role at all in transitions is because if
[03:38:49]  you read a resource or async, use, react, whatever under a new suspense boundary, that suspense boundary goes to fall back. And if it goes to fall back,
[03:39:02]  the existing ones don't. Existing ones will stay where they are because they've already shown their content. But if a new suspense boundary is created as part of
[03:39:10]  this path and it goes to fall back, then it's not showing anything inconsistent, which means that any resource read under that fallback suspense does not need to get added to
[03:39:21]  the transition. So if you're in a scenario where you switch to a new tab, this is the one we always use. It's in our demo, you know
[03:39:30] , you switch back between the tabs and the basic case is the suspense boundary is above the switching tabs. So you, you, you click the thing and there's an existing
[03:39:42]  suspense boundary. You just swap its contents. Well, when you have a transition, it won't swap the contents of the next page until it's finished loading the data for
[03:39:50]  the next page. You have like an is loading indicator for the transition, but generally it's not going to swap it until it's settled and it can show you the
[03:39:57]  content. Now, if you put a suspense boundary underneath and you actually switch the content and the suspense boundaries on each page, like, so each page has its own suspense boundary
[03:40:06] . The difference is when it goes to render the first time, even under a transition, it will go, Oh, I'm a new suspense boundary. Oh, I should
[03:40:15]  suspend. And it'll go to fallback. And because it goes to fallback, it's showing the loading placeholder, the whole app doesn't need to wait
[03:40:23]  for it. It's already showing, you know, what it intends to. So in that case, the tab will switch immediately and show you the fallback because basic
[03:40:32]  suspense is a way of opting out of the transition. I don't know if people think about it this way, but that that's basically the relationship between suspense and transitions
[03:40:42] . Transitions are global and you use suspense to opt out of it. Does that make any sense? See, some people are still on the stream, even though I
[03:40:51] 'm going kind of technical. I hope that makes sense to people. I mean, I'm pretty sure I have this demo in the tutorials. I just want to see really
[03:41:11]  quickly. Transitions, right? If you don't use a transition, and you switch, you see the loading, right? If you solve it and add a transition
[03:41:25] , it loads initially, but then when you change it, you see, it'll go gray if it takes long enough, but it waits for the content to be loaded.
[03:41:35]  But if I wanted to add back just for one of these, the loading indicator. Let's say if just for tab three, I wanted to add the loading indicator.
[03:41:55]  I would just put a nested suspense boundary. See, it's under the match. So what should happen now is when I go between one and two, it holds
[03:42:01] . Yeah. Holds. Three. Loading indicator. Holds. Loading indicator. Holds. Holds. See? So these ones, and maybe we should
[03:42:13]  make our delay a little bit longer to emphasize my point. Make it like 820. Okay. Cool. What my point, what I'm getting at is, yeah
[03:42:22] . Two. Yeah. Actually, it's more like I should have made the fixed pound longer. Yeah. There we go. Okay. So these ones wait to transition
[03:42:40] . This one transitions right away and chose the loading spinner. So as you see, by nesting suspense, we actually opted out of the transition. I've already shown this
[03:42:51]  all before, but I have to go learn the transition API. It's something I've never used. However, to be fair, if you use solid router, every single
[03:43:01]  navigation is wrapped in a transition. So there's a good chance you've used this before simply by just clicking a link in your solid app. I get this every time
[03:43:11]  though, because people are like, why when I switch between pages, it does, I don't see my suspense boundary. Suspense is broken. I bet you there
[03:43:20] 's like three open issues on that right now. You know, if I go to the router, people tell me suspense is broken and no, this is intended behavior.
[03:43:30]  And you might be like, well, what? Well, the idea is that you're supposed to use a different loading indicator. And again, this is maybe a little bit
[03:43:35]  too prescriptive for us. We're usually not so prescriptive, but, um, react team did some research. I did some, my own personal research,
[03:43:42]  although I can't say it says big, but the, you know, people behind stuff like the rails model animation did the research. Generally speaking, falling back to skeletons is
[03:43:51] , is considered more jarring than applying gentle loading indicators on the page. So from a UX, the perception of speed is faster. If you don't drop back to
[03:44:03]  a fallback skeleton, um, if possible, obviously, if your requests are all slow, like it's a major change, then yeah, it's better to show the
[03:44:12]  skeleton because, because, you know, people after a while of this, they'll be like, if it's long, they might be like, uh, I'm
[03:44:20]  going to go like way longer than this. But if it's like really long like this, they might be like, has it frozen? For some reason, in those cases
[03:44:29] , this feels better, but unless you know that it's generally gonna be absurd, absurdly long, you're better to delay, not showing an indicator, but delay
[03:44:42] , but not fall back to the skeleton. React to do this with key tab. Yeah. As you can also, as I said, use it, but the react has
[03:44:56]  the same suspense behavior, as far as I know, in terms of like getting out of transition. So just the routers, it's funny, the people who wrote
[03:45:02]  the routers haven't been lockstep with react. They're both kind of like not into concurrent mode, both react router and tan stack. So like a lot of them
[03:45:09]  didn't build transitions in the baseline. So like, it's, it's, it's, it's, it's very interesting, especially in remixed reactive routers
[03:45:16]  case, because reacting was like, kind of like intending this all along. You could tell in that 2018 conference talk, you know, the react Iceland or whatever, they
[03:45:23]  were like trying to show like, this is how to do things. And then, you know, obviously react, it wasn't released in react for like another four years
[03:45:30] . So remix and them had to build their own version of these things. Oh, raid. Okay. Hey, thank you very much. I am just talking about transitions
[03:45:49]  and suspense, which can be a pretty complicated topic in terms of designing future Solid JS. It's crazy. Anyway. Yeah. So summary of what I was just saying
[03:46:13]  is. Suspense is local. It shows loading state localized transitions are global with the ability for suspense to opt out of those transitions. All right. Anyway. Now
[03:46:36]  I'm deep digging super deep in here because I started kind of going into this, this, uh, thinking that I was like, well, if I'm going to split
[03:46:45]  the, the pure side. Oh, it's a question. Is there a way to suspend a sync phone and like it's funny. Someone asked me to do this
[03:47:01]  once. Um, I mean, not easily because how should I put it? When you render something, there's like this expectation that it doesn't tear. Like if you
[03:47:15] , if you show it a two here or like, if you have a count of the number of items and it doesn't match the number of items you show, it
[03:47:25] 's kind of jarring, so to speak. Right. So like you kind of want to render the synchronous stuff all at the same time. That's why transitions and like
[03:47:35]  concurrency work the way it is. They do a bunch of work in the background until they, everything's calculated. And then they apply all the rendering at the same time
[03:47:43] . This is, um, to prevent tearing. Right. But the downside is when it comes to heavy DOM work, then you're not really saving anything because all that
[03:47:53]  work just gets backloaded. Then anyways, this is why, um, when I had aid in from million JS on my stream and he was like million JS versus concurrent
[03:48:01]  rendering, obviously. He came up with this crazy thing with giant amount of DOM work being done. And we just kept on pushing it to kind of make this point because over
[03:48:11] , we got to a point where it was just such a high threshold that, you know, the concurrent rendering was choking, even millions was choking a little bit, but
[03:48:19]  what ended up happening in the end was million felt way faster because million would just brute force it and try and show the thing. And yeah, it was blocking in the red
[03:48:31] , you know, on the dial showed, but the, the react example wouldn't only spike like that and block. You'd have to actually wait for it because it
[03:48:44]  tried to keep on calculating everything ahead of time until it could actually apply the DOM update and then realize the DOM update is really expensive. This is something important for people to realize
[03:48:54]  concurrency doesn't improve DOM performance because you have to apply it all the same time. So if you wanted to suspend a sink component, like a really big part of
[03:49:04]  this subject, it's, you are basically opting into tearing theoretically, which means that you wouldn't find it as a generic part of, you know, any kind of
[03:49:16]  JavaScript framework. I sometimes used to joke with solid because it's fine grained. You could do this really easily. You just put a show component and then you just set
[03:49:24]  a timer, you know, like cue micro task and then set show to true. And because we don't re-render any of the components, we just kind of
[03:49:33]  continue where we left off because it's all fine grained. You could kind of accomplish this approach by just kind of like delaying it out. But you do have to
[03:49:40]  understand that like, if you do break apart the rendering of state like that, you do have the possibility of showing people two different things that conflict with each other at the same
[03:49:52]  time. That's generally as a UI framework, what we try to avoid at all costs. Yeah. I mean, I'm talking some pretty deep theoretical stuff on solid
[03:50:02]  and signals 2.0, but like if people have kind of questions like that, shoot, I'm pretty knowledgeable on all things, JavaScript frameworks, like probably answer any
[03:50:15]  question. That's not syntax based for React Svelte view, basically any of the frameworks. But outside of that, yeah, where was I going? Okay. Pure
[03:50:31]  Q, render Q. Yeah. So I started kind of thinking about with this split, like what it would look like for actually building a render from scratch, like a
[03:50:42]  React render from scratch. One funny thing that I thought about with a split, maybe I'll use the playground as an example. If you had a create effect that had the
[03:50:55] , you know, basically the tracking part separate from the, and I'm going to use set here, create signal. The tracking part separate from the, the effectful
[03:51:13]  part. I mean, I'm not saying this would make a ton of sense to do, but there's a certain mirror here between this, where you could put the access
[03:51:22] or in the front half and the setter in the second half. Now I'm never recommending calling, updating state with a create effect. You shouldn't do that in
[03:51:30]  React, you shouldn't do that in solid ever. It was just an interesting idea. Cause like, I guess what I'm really trying to show is if we had a
[03:51:36]  second signal, we could do, we could do this, right? Essentially have the first signal called the second signal setter. And there's like this certain parallelism there
[03:51:47] . I don't know whether that's important or not. It was just something that occurred to me. And what was interesting is if you scheduled them the way I was
[03:51:56]  talking about a few minutes ago, where you ran all the pure parts before all the effectful parts, you could have as many of these as you wanted. And it would
[03:52:06]  still guarantee that they only ran once and applied all the updates, you know, in a single fashion. Keep in mind, like React, if you went through and had multiple
[03:52:18]  creative effects, you have to do like another pass, right? Once you update the value, you have to render again. In solid's case, it's not a
[03:52:24]  render again. It's trigger the update again. But I just, and obviously we, if we did, we weren't careful here, we could create an infinite loop,
[03:52:30]  but I'm just, it's just, it's kind of one of those interesting properties of looking at things separating pure from effect. Um, but yeah, so I started
[03:52:43]  thinking, okay, if you had to render effects like this, you could obviously take any data and if you want to, you know, write to the DOM, you
[03:52:50]  could do something like this. You can say, whenever count changes, set some attribute, maybe the title of an element would be. So this would be really easy to create
[03:52:57]  with a compiler for any DOM attribute on the JSX. You could just say like compile JSX to whatever the expression is. So like your count signal, and then set
[03:53:06]  the title. Works very similar to what solid works like today. You just pass the value in and then you get it in there. We do something solid where we group
[03:53:15]  together multiple attributes on the same element, um, by passing in the previous value. And again, we just do a simple check here of if the value equals the previous value
[03:53:29]  and then set the attribute if it, if it's changed. And what I realized again, you could put the tracking part here and return it as an object. And
[03:53:38]  then basically that's the pure value. And then we would just remember the, the previous pure value. And if it hasn't ever been set before, it could be an
[03:53:47]  empty object here. Um, that's what I'm suggesting here. Because one thing that we use in the renderer that you might not use often in solid is that our
[03:53:57]  effects pass in the previous value. And we use that to actually do very, very, uh, diffs like very, uh, subtle kind of like this, we
[03:54:06]  get the previous value versus, um, the current value. And then that can tell us what work to do. And the compiler does this. If you've ever, uh
[03:54:14] , if you've ever seen, let me just trash this around, um, something with multiple attributes. Um, let's just do title equals count. And then I
[03:54:27]  don't know, whatever name equals count. I'm just making something up here. What you're going to see here is that we actually group the stuff together and, and
[03:54:37]  then basically do that equality check. And then it's basically like the code I was just showing you here. And then we initialize it as an empty thing. And then
[03:54:46]  we check the values. And then the reason I did this initialization, if it's, it's kind of bulky. And I kind of think we probably could just
[03:54:52]  pass it into the object. I was talking to the guy who created the EV framework, one of those performance guys, and he said, and he's right. If you
[03:54:58]  create an object with a specific shape and then only use that shape afterwards when you, when working with it, um, it keeps it monomorphic and especially at all the
[03:55:08]  call sites, like where it gets passed in. And this has, it, this has a huge, um, benefit to JavaScript runtime so that it, if your shape
[03:55:16]  of your office can change at a call site, it, it, it has to de-opt because it can't like make certain assumptions. So even though this generates a
[03:55:25]  bunch of extra code, in theory, this should improve performance. I've never measured this performance improvement, but it's just, just in case it's kind of thing you
[03:55:33] 've ever wondered about. Um, but generally speaking this map is pretty easy to do, you know, we here, we just, the return value is what we pass
[03:55:48]  in as the previous value. Basically every time we do our check in here, it's basically the same idea. Essentially, we just have to make sure that the value from
[03:55:57]  the first half is the first argument and the, the value, the previous value comes in as the second argument. But I realized there was like, it was a,
[03:56:06]  it was for the third operation. There's only really three things you do when you render. I don't know if people know this, but like when, when I create
[03:56:14]  a render with solid, these are kind of the same things. There's two operations you're basically doing. You're doing set some attribute essentially. And this is like a
[03:56:23]  single attribute. This is like some grouped attribute just for performance or making less effects or you're inserting something. Basically, everything falls into those two patterns. Um, everything
[03:56:35]  else in solid renders like components and that are just function calls essentially. So the only thing actually doing the work are, am I updating an attribute or are, am I
[03:56:44]  inserting something in the DOM, some text or some other elements. And the way we do that in solid today, um, is through something called, uh, the insert
[03:56:56]  function. And I think if I looked in the playground here, you would see insert, yeah, insert element count. And this doesn't really show me very much. Count
[03:57:04] , as I said, is a signal. So it's saying insert the value of count into this element. Pretty, pretty straightforward. Kind of basically what it says,
[03:57:12]  but the insert thing internally handles previous value. Um, but it's instead of being the previous input, like what we're diffing here, we're saying, get me
[03:57:22]  basically this value of the input, compare it. And if it, if it changes set something that's easy to diff insert actually keeps the previous like DOM nodes so that
[03:57:35]  we can diff the, the new DOM with the old DOM. So it's actually like the output. And that's kind of, I'm like started getting to this weird
[03:57:44]  place where I was like, oh no, am I going to need to like add like a third field, like the value in the previous value in, and then the
[03:57:52]  return value of whatever I'm doing in the second function. And it solid also has some really weird stuff that probably makes more sense that people have used it before where we do
[03:58:03]  this reverse unwrapping. That's really quite expensive. Um, it's not expensive, but it, I basically did a bunch of stuff that I was hoping would let
[03:58:11]  people do whatever they want without breaking the framework. So, you know, because people with signals tend to like just throw functions everywhere and just like pray that it works.
[03:58:21]  Um, what I mean by that is cause signals are function calls, right? Like see this count. You could also just like do this and this complains at you with
[03:58:29]  the linter, but what you're going to find here is that it still works because it has to work because we have to be able to handle functions because of dynamic inserts
[03:58:38] . And, you know, at a certain point, people just don't know what they're dealing with and they'll just try and jam everything in. Um, especially
[03:58:47]  when you're doing functions, passing functions of functions in solid though, you see this, this under this linting thing here. And that's because we want you to
[03:58:56]  pass the value conceptually when you author. See, this is returns a number. We don't want functions. So in solid 1.7, we got really strict with
[03:59:04]  TypeScript to prevent that, but our runtime is designed to handle people throwing the craziest crap at it. Even though TypeScript is like, you shouldn't do that.
[03:59:14]  That adds a bunch of complexity that I realized if we accept the solid 1.7 rules, so to speak that, you know, people are smart enough to only like wrap
[03:59:29]  a single level and TypeScript will tell you what's up. Like for you, you just have to think always pass the value for people using like non compiler versions,
[03:59:38]  people using like pure no build JavaScript. They have to pass a function, which they're used to doing. Those people are crazy, but you know, I, I appreciate
[03:59:46]  their hardcoreness. Um, once we can remove that constraint, it actually can simplify. We can actually get rid of Yeah. Yeah. Yeah. There's definitely performance
[03:59:59] . This is, this is, yeah, I, there's definitely performance considerations here. Like in the past with solid, when we did children is a perfect example, like
[04:00:11]  something where we wanted to just like kind of render out under, because solid uses, uh, reactivity, um, for context, like the owner, that's our owner
[04:00:20]  idea. So we store, like whenever we create a provider, we basically make a reactivity node and store the context on it and then can like look at the parent
[04:00:31] . And that means that you have to execute the children inside the parent. Right. Um, and what, what was happening, that means that we need to like, usually
[04:00:45]  if we're like kind of pulling everything through, we wouldn't do that. So we actually have to say at that point, be like, yes, make sure that
[04:00:51]  these children all run at this point, what we used to do, but sorry, I'm getting ahead of myself. The, the problem is that you still want a bunch
[04:01:01]  of independently handled reactivity. You don't want to necessarily just glob it all together. Um, so to speak, because then it loses its granularity. And because at
[04:01:11]  that point you can't insert it, you don't know who its parents are. It hasn't kind of fed back up through the tree. Right. I mean,
[04:01:18]  you can see this in JSX itself, right? Like I've got a button here, but I don't know where it's going to get inserted. And if I
[04:01:24]  make this capital button even more, so there's nothing actually getting inserted here right now, right? Like there's no actual DOM element. Like there might be a DOM element
[04:01:33]  inside button, but the button itself might have, you know, some control flow, some conditional, some reactivity, you could be returning reactivity from a component essentially
[04:01:43] . So even though we have to resolve it now, we can't, we can't completely finish that story because it still needs to be inserted. So I came up with
[04:01:54]  this approach where I basically wrapped everything downwards and then unwrapped it again backwards with the, the render effects inside the insert function. And it works, but it was a
[04:02:06]  ton of overhead and trying to debug. That was a pain over time. I realized that I could not have to wrap everything going down. As long as I just unw
[04:02:16] rapped stuff backwards, coming back out. The problem with that approach was that's why 1.7 came around because people started doing weird stuff. Like they have a component
[04:02:27]  that doesn't expect to function as a child and they just pass a function in it. And it would like break because it would start that backwards process because that component would
[04:02:36]  return a function of a function instead of a function of a value. And it just kind of backwards and it would actually pull it outside of the context. So context component was
[04:02:45]  fine, but some examples where people were basically executing stuff that should have executed inside suspense, outside of suspense. And at that point, that's when I added the 1
[04:02:56] .7 rules because I basically made a pretty nice performance overhead reduction by assuming people didn't do stupid things. I want to double down on making on that assumption because if we
[04:03:09]  take that people aren't going to do those kinds of stupid things and do some stuff I'm talking about, we can completely remove the overhead. We can get rid of the
[04:03:20]  wrapping down like we already did and get rid of the reverse unwrapping onioning. Right. So what I'm getting at here is TypeScript with 1.7
[04:03:33]  already set us up for this. Right. Can we try an expectation a little more and just get rid of this altogether? Right. And I actually mentioned here, we didn
[04:03:42] 't actually have this onioning thing at the beginning. When we originally, when I originally started solid, I actually used pseudo document fragments to handle fragments. See fragments are
[04:03:53]  actually the problem, real, real DOM elements. You can always insert into, right. You can see that like when you have a button, that's where things end.
[04:04:01]  Like if you look at this output, I create a button element. This, this template function just clones, clones a template. So it just creates this button element. Okay
[04:04:11] . And then you do an effect and it writes to that. It basically just sets the attribute on that, or it, it inserts something in that basically wherever you have
[04:04:20]  an element, an actual element, it's the end of the story. If you have a capital button like this, suddenly now you're creating a component with these props,
[04:04:31]  right? So this is a little bit more abstract, but it's, it's, it's okay. You know, this isn't going to do anything, but
[04:04:42]  fragments are where things get hard because now you don't have a single thing. You have parallel things. And if you've ever seen in solid, a fragment, well here
[04:04:54]  in this example, with just button is, it's, it didn't even change the output because there's nothing else in here, but let me add a div. It
[04:05:01] 's an array. A fragment is literally an array. If it's an array of one element, I just get rid of the array. There's no need to have
[04:05:08]  the array, but it's, it's just an array. But when you have these arrays essentially of things that can inject into other arrays of things and they can, you
[04:05:19]  know, have different degrees of reactivity. Like, let's see if I put count directly in here. see, we actually memoize this count wrapper already. Like
[04:05:30]  we already wrap it. Like essentially you get into this zone where like these things can combine and all kind of mix together perhaps. Um, and that was kind of what
[04:05:48]  my concern was, why I, I wanted to do onioning because when we had, sorry, back to my example here, when we didn't use this and actually had
[04:05:57]  like a fake, like use a document fragment, made it more like a, like, like, as I said, if I change this into a div now, you
[04:06:04]  can see this is the end of the story. It just inserts some stuff into the element. When, when we compiled fragments this way, we didn't actually have this unw
[04:06:13] rapping problem because everything was localized. But the problem is, um, this ended up being a lot slower, um, managing that, walking through the DOM, the handles
[04:06:24] , shadow markers for fake fragments, because document fragments suck. I don't know if anyone knows this because mostly should know it. They, they deal with live nodes.
[04:06:32]  And if, as it turns out, if you take a node that's in a document fragment and move it in a location, different location, it gets removed from the document
[04:06:42]  fragment. Basically there's only one copy of the DOM node that contain it. So because it's got live nodes, document fragments lose their references. So you have to kind
[04:06:51]  of keep track of your own references yourself. So it's like, there's a lot of extra complexity in processing. And if I go back in time, when solid
[04:06:58]  first legitimately won the JS framework benchmark, I think it was on my birthday, uh, God, 2019, how I wrote the fastest JS framework. Was that it? Yeah
[04:07:14] . Five years ago. Um, it was, it was, it was actually like, did I talk about this? It was actually just like an accident when I changed
[04:07:32]  the fragment approach that actually ended up getting us there. Um, yeah, I forget if this is the one there, maybe it was a different article. I wrote one where
[04:07:46] , yeah, I think, I think it was this one, but yeah, my, my point is making this change generally made it faster for simple cases, but it
[04:07:55]  added this overhead, um, for more complicated cases. But I realized that if we handled all the normalization, all the reducing their array in the front half in the pure
[04:08:07]  half versus the effect part, then we can process it all at a single time instead of having this disjoint. Well, that's the thing frameworks using lots of fragments
[04:08:28]  thing like, and this is a good point. Like in the case of lightning where they're using our, our, our universal renderer, they're fine, but
[04:08:39]  the earlier guys using kind of custom render type approaches without our custom renderer, when you used only all capital case components and no lowercase, no native elements, the sync
[04:08:49] , they basically were creating these giant fragment component graphs where nothing was fixed and the whole graph is connected. You didn't have that isolation. See, whenever you hit a real
[04:08:57]  dom node or native element in like lightning, you actually get to kind of like reset the granularity. So like, I think lightning's probably fine, but I think
[04:09:11]  like those, I think large component libraries could benefit from this. Cause a lot of them have like components, wrapping components, wrapping components, all the, just to, to
[04:09:23]  make, you know, a button, like, you know what I mean? Like they, they, they have like all these props spreads and like, it's,
[04:09:29]  it's kind of like very much the reactism view of things where they kind of compose all these components together and create these, you know, pure functions that sit on top
[04:09:38]  of each other, but in solid, our functions aren't pure. So generally we're, when we merge stuff, um, there is a little bit of overhead there on
[04:09:47]  the positive. When we update, we don't have to rerun that whole stack again. We only have to just tweak the little thing that changed, but there is a
[04:09:55]  a creation overhead in, in solids, general renderer, we overcame the creation overhead because we're really smart by pulling out static parts, really smart at pulling out
[04:10:05]  real dom nodes. But in these situations where they're just stacking components and fragments and fun stuff, maybe not fragments, just components and components and components from doing all these mer
[04:10:13] ges, they're not benefiting from that. It's kind of like, why I don't like style components, right? Like style components break our template apart instead of
[04:10:23]  being able to optimize, like they make every node independent instead of being able to optimize around static markup, which can be extracted. So yeah. Okay. So where was
[04:10:40]  I? Yeah. So what I say in general, pulling out normalization is that it moves all node creation to the pure part. Okay. Yeah. Here's,
[04:10:51]  here's a, here's a mind scratcher. You wouldn't consider creating dom nodes pure, but if you move all the normalization to the front half, the pure
[04:10:58]  stage would be when all the dom elements are created, right? Cause it's odd creation isn't pure, but it means that we take the perspective that something is only effect
[04:11:06] ful if it writes to, or inserts into something. This allows a lot more flexibility with things like concurrent rendering. It also makes hydration interesting as it separates the definitely sk
[04:11:16] ippable work, the side, the, the, the effects from the matching or reconstructing of state. What I mean by that is whether you're creating the dom elements
[04:11:26]  or finding them already in the dom, the matching part, that is one half of the execution and the part that kind of has to happen regardless, but the part of
[04:11:35]  actually inserting in the dom or updating attributes, that part never needs to happen during hydration. And it's like purely effect and can always be skipped. Yeah. So what I
[04:11:49] 'm saying is all these decisions move to a position where we have a true alternative to the virtual loan. I already say we have an alternative to the virtual loan, but this
[04:11:58]  kind of thinking makes it as pure from an, even an academic standpoint as something react. When I first put this stuff together, I was kind of hacking away. And
[04:12:10]  then because of a few early decisions that I didn't even realize were good decisions, we ended up with something that could do everything that a virtual dom library could do. Having
[04:12:17]  a second crack at this, I realized what the good decisions are and how one would architect in such a way that you could have the same kind of consistency and the same kind
[04:12:27]  of like purism. You know, if you ever talked to like the React core team or like people really into that, they talk about it like it's like this
[04:12:35]  vision of purity that like it's faultless and beautiful by design. And I kind of actually agree with them. This is how, in my mind, you could come up
[04:12:48]  with something equally as beautiful, but granular. Okay. Um, yeah, so I, this is just me giving examples of like how stuff transforms. Yeah. I was
[04:13:04]  taught, I was showing it already in the playground, right? Like if you have this, I was using the children here on purpose. Like if you had two components here
[04:13:13] , right? And component two inserts the children and inserts a signal, it, it basically becomes, you, you end up with an array here of, of the,
[04:13:29]  of the insert and an array here. Calling the function will always result in the same span because it's memoized. See, because one of my concerns here is that if
[04:13:37]  you're nesting this stuff, isn't there a risk that, um, like you could recreate these memos every time, but the way it tends to actually work
[04:13:49]  is you end up creating the stuff at this scope, like here, like these memos, and then sending them back to where they actually get executed. So you don't
[04:13:57]  actually worry about it. I actually, I don't know if there's much detail here, but I basically go through a whole bunch of proofs why I don't think
[04:14:04]  we need onioning anymore. Talking about conditional transforms and all this. I, it's probably too detailed for most people. I'm just going to keep on scrolling.
[04:14:11]  Yeah. Objection is a pure object. It's basically all you can do in a pure functional programming language. Yeah. So I, I, I guess that's fair
[04:14:24] . It's just people don't usually view the DOM as part of that equation. And that's what this does, which is kind of wild. So what I actually
[04:14:33]  did here was I, I went through an experiment where I actually rewrote solid's insert function and pulled all the array normalization out of the, of the insert function
[04:14:51] . you can see called normalize here on the front half, the crate effect, and then call the insert on the other half. Um, and what this did is
[04:15:04]  it means that we only need, because the normalization happens to the front half, we only need the previous value of the front half running, not like right here. We
[04:15:13]  don't need the previous, we don't, this function here doesn't return the old DOM nodes. You don't need that anymore because it comes in the front half
[04:15:20] . Basically what I'm saying is we, I managed to solve the problem that I was having in terms of the API design by just pulling this, the normalization creation to
[04:15:28]  the front half. And then the insert function actually gets, I didn't put the code in here, but it's actually much simpler. It only runs once. And it
[04:15:36] 's like, you know, if, if it's text at the text comment, if it's null or a Boolean value, remove the child. If it's an
[04:15:46]  array called the reconcile function, it's a little, there's, there's optimizations in here. If it's a node, remove the current one, replace with
[04:15:53]  the new node. But essentially all the work happens. I was like, what does a normalized function look like? And I can tweak the normalized function to work on the front
[04:16:00]  half and make sure that it handles the reactive accesses properly. In general, I believe that this new version of what's in DOM expressions could basically remove our inefficiency
[04:16:14] , right? There, there's a second important reason that maybe I haven't gotten into that, why it's important for the previous value to come through the here to be
[04:16:28]  only from the input. It's not just so that you can get the consistent, it's also consistent during concerns. You want the previous value here not to be the
[04:16:40]  previous value from when this ran, like, cause in concurrent rendering, you can run the front half multiple times before the back half runs. You want it to be the previous
[04:16:49]  value from the last time this ran, so you can diff it. So like, if this runs five times, what you want to get is the fifth time here and
[04:16:59]  the, for, and the last time this ran, the input was here so that you can properly diff it. Um, so yeah, anyways, just to slide tangent,
[04:17:10]  I just wanted to mention that. Um, but that whole thing can, applies here as well, you know, inside the insert function. So it's kind of like just
[04:17:20] , you know, whatever ducks all the way down. Um, anyway, that's, that's the gist of it. Anyway, um, sorry, I,
[04:17:35]  this might be interesting. Some people probably not interested in everyone. We probably should move on to this week in JavaScript. I just have a couple other quick thoughts that I
[04:17:43]  thought were interesting. While I dislike is signal. Um, it occurred to me that, and I think it should occur to most people that a computed of a signal is still
[04:17:56]  identical to the signal as long as there's no equality function. And if, as I was showing in the compilation, while I was working on here, there's plenty of
[04:18:04]  times that we'll call like, where is it? Uh, like memo signal like this. And there's no real reason why this should create a new memo and shouldn
[04:18:17] 't just return the signal itself. Small optimization, but you can't do that unless you can recognize what a signal is. I don't think people, because the locality
[04:18:26]  of thinking should ever have like an is signal thing, but I think internally it is valuable to know so that you can basically optimize this case away, right? It can
[04:18:36]  happen right at runtime. Anytime, um, a computed gets an accessor from a preview, from another primitive, it can just say, return that accessor. As long
[04:18:46]  as the, the computed value does not have its own equality check, you can basically just bypass it. It's a ducks or turtles. Yeah. I'm not sure.
[04:18:54]  Secondly, um, a lot of this is just showing, I think that a lot of the assumptions that I made six years ago need to be revisited. I kind
[04:19:05]  of talked about that already. And finally, I had, I had, I had a, I had a kind of fun thought here, but right now, people who use
[04:19:13]  resources quite enjoy having like dot loading or dot current or whatever, even with the throw pattern, we can still, um, perhaps avoid suspense and use loading guards as a
[04:19:26]  way of getting out, like reading dot loading instead of reading the value. Because what you could do is this probably be a helper built into solid is you could try catch the
[04:19:36]  function. And if it throws the node or whatever we can determine is the suspense thing, it can return true, otherwise false. So you could guard something along the lines of
[04:19:46]  like, you could like, this is just function could be memo or expression. You can go is loading users and posts or something like, and pretend that these are both
[04:19:54]  like async resources. And if you think about it, if any of these are not ready, they will throw. And because this catches it instead of the, the whatever
[04:20:04] 's reading it, catching it, it won't register with suspense, but it will still be able to give you this. And you don't have to just, it's
[04:20:11]  not just like peak or whatever that works on one variable, like load on resource. You can actually ask is loading of a, as a, of a whole expression,
[04:20:18]  essentially keep in mind, um, this returns true or false. So all, if this has real work in it, it will duplicate that work, but it is kind of
[04:20:26]  interesting that you could basically ask the question, not on just a single resource, but ask it on like multiple, you can go like, basically are any of these loading?
[04:20:34]  You can just ask it, um, with via helper. Anyway, this is crazy stuff. Framework author is probably going to come back and rewatch this section.
[04:20:49]  Everyone else. I think they already, they might have already left the stream. Okay. Let's get to this week in JavaScript. Let's have some fun. I got
[04:20:57]  about 40 minutes. So that's, that's what we're going to do here. All right. Give me a second while I get set up. How's everyone doing
[04:21:04] ? Oh yeah. By the way, literally. Yeah. That's, that's awesome. Okay. Give me a second while I get set up here. Yeah
[04:21:24] . No, these async primitives and the whole system going together here is like, it's so hard because it's like, I had an idea of what we could
[04:21:34]  accomplish. See, here's the difference. When I first started solid, I knew that there's some stuff we did that was really good. And I was like, more
[04:21:43]  people should do this. And then we just built and rushed ahead on it and tried to get, get, get there. And then over time, even more things I
[04:21:51]  didn't even imagine were possible. We just kept on proliferating, so to speak, just from the good decisions, all feeding into other good decisions to finally getting to
[04:22:02]  a point where like, you know, I'm just honestly in awe of like what, where we've ended up here. But on the other hand now with the view
[04:22:18]  of like what we, where we can go to, it's, it's getting even like harder to kind of contain the excitement because before I didn't know what we could
[04:22:28]  do. Now I know what we can do and we can do things like better. So yeah, this is pretty exciting. Um, not usually cause they're too rough
[04:22:38] . I will write a nice clean article on dev too, when it's something that's more approachable to people. Yeah. I mean, I met with them, the
[04:22:52]  angular guys, like they're on the, they're on the, I think the basis they're working on is really good. And as I said, I met with the
[04:22:58]  angular guys and the whiz guys before the whole thing even came up and we kind of walked through this. So yeah, I mean, it's all, it's
[04:23:06]  all good. Angular is going to do its thing. We're going to just keep on pioneering and blazing forward. Um, so, you know, all good.
[04:23:15]  Okay. So yeah, this is going to be a bit of a mess because I did have a stream last week that I didn't cover everything. Um, but,
[04:23:29]  but yeah, I will, we'll, we'll, we'll just nitpick what we want and for how much we time. And we're not talking about bla
[04:23:37] zer unless something new happened with blazer, but I don't want to talk about blazer otherwise. Cause I don't really care what blazer. Sorry people. Okay
[04:23:45] . So let's talk about this week in JavaScript. Let's get this rolling. Um, as I said, I'm kind of all over the place because combination between
[04:23:56]  not streaming for a while and then doing a stream last week. So we're just going to kind of mix and match here. Um, we talked about benchmarking all last
[04:24:05]  week. Um, I'm going to start just picking up with some solid news because why not? We haven't talked about, um, solid stuff in a while in
[04:24:17]  terms of the ecosystem. Um, so yeah, I, I went back to when I got off the internets and I think it was around here, right? We did
[04:24:29]  the salt start release. Um, so I, so then I guess then the, and that was basically my last stream the day after that before the one I did last
[04:24:41]  week. Um, yeah, I want to give a shout out here to media kit, um, which is basically a more opinionated framework built on top of solid start and
[04:24:52]  it's kind of like our TR it's kind of like this includes PRPC, TRPC adapter, auth JS, make sure to start. Yeah. It's kind of
[04:25:01]  like, uh, if you ever create JD app, um, created by or J dev him and David, um, community manager from solid JS who you saw earlier talking
[04:25:11]  at react Miami, I've been working on this project to kind of be like this higher level, fully featured, you know, batteries included, um, wrapper on solid start
[04:25:21] . And, um, yeah, new version out looks great. Honestly. Yeah. The T three, right. Is that the create T three app? Yeah. I
[04:25:32]  it's, it's, it's, I like that. That's what I, that's what, like, that's the right level. I think I said,
[04:25:41]  I said this before. I think everyone, like, I think general frameworks are hard. I think in a sense, I like everyone to be able to build their own framework
[04:25:49] . You know, sometimes you want to, might want to use someone else's, but like, we should be at a level where like stuff like create T three app
[04:25:55]  is just like the norm. All right. Okay. Now let me see if I can get this banner to go away. Yeah. Perfect. Yeah. I mean, there
[04:26:06] 's some opinionated stuff. Everyone's going to have their different opinions of what they like. I, I haven't used PRPC much. I know it's based more
[04:26:18]  on the solid, uh, the server dollar sign, uh, syntax we had before, but it is very powerful and all kind of goes together. And I'm pretty
[04:26:25]  sure the pieces here are, are opt-inable. So yeah, very, very cool. Um, what else we got solid UI finally got needed overhaul. Now
[04:26:32]  it's better, more in-depth instructions. Uh, now powered by the newest version of solid start. Yeah. Solid UI again, let me take a look at this
[04:26:41] . What is this? Build your component library. So this is the unofficial port of shad CN slash UI to solid. Yeah. It seems everyone likes the shad CN
[04:26:52]  thing. I've never used it, but here you go. Um, I mean, people always talk about our component libraries. It seems like every time I look around,
[04:27:00]  every time, you know, everyone's like, Oh, but you have this cool hot thing in react. And I'm just like, I don't know, probably
[04:27:04]  not, but generally the, I guess I should just say, I don't know. Probably. Yes. Um, that's what it seems like because it seems like whatever
[04:27:12]  the new hot thing is, we seem to have a version in solid. So very cool. Um, if you like shad CN, which apparently is a very cool library.
[04:27:23]  Um, there are ports to solid. Oh yeah. And there's a shit had CN solid as well. So there you go. I think media it's including stuff
[04:27:35]  like images, like image processing. I think there's like, it's, it's supposed to just be like all the utilities around. Yeah. I don't know.
[04:27:48]  That's fair. That's fair. Okay. Let's keep on going. Um, other people, other than me giving conference talks. Yes. And we've seen
[04:27:58]  a lot of this, you know, we just saw David, uh, react my, I mean, maybe not giving a conference talk, but representing a Tila, obviously
[04:28:06]  teaching solid, uh, city GS. We've got some Daniel out in the wild. Um, you know, I I've, I've been, I've been stoked
[04:28:15]  about this Askorama is now powering search and solid JS docs. This was funny because it's awesome, which makes things really nice. But I think Askorama is
[04:28:23]  actually written in react and someone's noticed that the react dev tools showed up on the solid doc site. So a little bit amusing. Um, I could be wrong, but
[04:28:32]  in either case, the docs are much easier to use now. Um, it would be awesome if we had a solid version of Askorama, I suppose, but, uh
[04:28:39] , um, yeah, let's keep on going super base and solid. I didn't realize that Sue based it had, had, you know, official stuff for us
[04:28:52] , you know, um, yes, I'm seeing tutorials. I'm seeing cross posts. I'm pretty, I'm pretty, I'm pretty stoked about that as well
[04:29:00] . I said, we're getting integrated in the places where you would have expected, you know, to find a lot of other frameworks. What else do we got here?
[04:29:08]  Oh yeah. We've been talking about different render targets. How about QT widgets? No browser, no web view, no IPC, no Java, no Swift
[04:29:14]  code, just rock QT, goodness in the way of node GUI. And my guess is this probably is another example of, uh, universal render, right? Custom
[04:29:23]  solid render. Yeah. So yeah, this is, I love this part because, but a lot of people didn't think this was possible, um, without the V Dom
[04:29:33] . And we, we showed it off, right? Cause everyone's felt first added the 3d render. And it was like, almost like a complete custom render that like
[04:29:40]  rich wrote himself. Like they, they, someone had to spend the work on, um, solid is just like pouring into like all of these kind of custom renders
[04:29:48]  at work. It's kind of interesting. The view actually has a very similar custom render API, but it seems like people have been really picking up solid for this stuff.
[04:29:55]  Uh, almost everything that react has custom renders on, we have versions of it. Obviously we have nothing as advanced as like react native, but it seems like we're
[04:30:03]  literally everywhere. This is really cool to keep on seeing these projects. We've talked about lightning JS today, QT, which is, I can't keep up with
[04:30:11]  it, honestly. Right. Um, what do we got here? Check out with Rela, a solid JS powered get browser relative. So this is another product. Yeah
[04:30:30] . It's just, it's awesome to just, this is one place that we've also been very popular people making like, uh, uh, code viewers and like
[04:30:41] , uh, um, like IDs in the browser. So it's been a really good choice. Um, obviously the, the, the code viewers themselves have, you know
[04:30:50] , specific libraries that are very, you know, efficient for their use cases, but the kind of like ability to just kind of pop in pieces and have the granular updates seems
[04:30:59]  to be really nice pairing. I keep on hearing about it over and over again. I'm sure we're going to have more use cases and stories about this stuff in
[04:31:06]  the future. Um, yeah, what's, oh, this one's like a year old. I just saw Tanner retweet this and I was like, okay, you
[04:31:14]  know what? Tanner retweets it. It's worth it. This is just showing that you can use solid query literally like with direct dom, like forget about we have
[04:31:23]  solid JS, no JSX transform and you have 10 stack query and you can literally just write some, you know, here's your framework, just create some dom elements
[04:31:33] , use some effects and render some stuff and all just works, you know, in validation, all the stuff. I don't know. It's about getting close to the
[04:31:42]  metal. I love this example. So it was worth a shot. Shout out again. Yeah, no. Yeah. There's honestly just so much cool stuff in this
[04:31:53]  area and I just didn't expect it. Oh, there you go. Yeah. That's awesome. Yeah. I know you found some nice bugs for me to work through
[04:32:05] , um, this week or next week now, I guess, but yeah, we'll, uh, I I'm, I'm excited to see all these things come
[04:32:12]  together. The tan stack, uh, community has been great. I love how solid it powers all the tan stack query, um, dev tools. So like whether using rack
[04:32:21]  view, Svelte or whatever, you're using solid. Um, so yeah, very, very cool. Uh, yeah. Okay. That's enough solid news.
[04:32:29]  I just wanted to give that a quick go first 10 minutes. Okay. Let's look, let's pick through some other stuff here. Um, yeah, we already
[04:32:37]  did that. I see myself in this camp. Why did I quote this from MNU? I love Nuxt, but I can't get myself to like auto imports
[04:32:43] . Right. Me too. From command click, not working, wondering if the punch come from Nuxt or my code too often, I decided on a compromise. Auto import
[04:32:49]  Nuxt and view stuff and manually import custom code. And I love it. Interesting. Okay. Yeah. It's interesting. I actually dislike auto imports in general, although
[04:33:03]  solids control flows do actually auto import. That was like my, my line. I was like auto import built in control flows in JSX. Cause people are used to
[04:33:13]  templating languages like view or, you know, knockout or Svelte don't have to import, but then typescript complaints. So I kind of, yeah,
[04:33:21]  I'm just kind of done with auto imports, but this is interesting that even on the auto import side, that there's some kind of opinion differences there. Oh yeah
[04:33:31] . This was fun. Is this still going on till the tailwind? I heard they were talking about renaming their stuff to signals from signals to something else. But again
[04:33:40] , this is old news guys. Sorry. It just, it took me a while to get here, but tailwind signals. It's, it's, I saw
[04:33:51]  some of the feedback where people were like, great idea, but is the name signals the best project with me? Not that really doing the concept justice. I see.
[04:34:10]  Yeah. Yeah. I guess the timing for them was really awkward because of the signals proposal. I don't know enough about tailwind, but I'm gathering it's a
[04:34:29]  ability to do some kind of granular style switching. Still interesting to see the branding is strong. Signals are cool. What do we got here? Building on top of flight
[04:34:41]  control. I built a declarative routing system for both Next.js and React router. You'll never use. Okay. So is this like what Tanner does for type safety
[04:34:50] ? What is this? Jack Harrington. Okay. Link blah. What if we could just, oh, okay. But this is just named route. Ember used
[04:35:03]  to do this. You'd, you'd put, I guess making it a component means that the names aren't variable. Like you don't have to worry about it being
[04:35:13]  like, like, um, name equals and then turn a link that. Okay. I'll bite. It's funny trying to get away from like using components for links anyways
[04:35:24] , cause it's awkward, but let's see here. It, obviously this makes the TypeScript way easier. So how is he doing this? That's the part
[04:35:37]  I'm missing. Cause he must be still generating code, right? He has a whole video on it. I mean, I love Jack Harrington's videos, so
[04:35:51]  doesn't say much. He's just showing you how you can use it. Cause just trying to see actually how this works because usually the biggest problem with routing is that
[04:36:20]  you define the routes, but then you import everything from, um, from the, how should I put it from the library. That must be the trick, right? Product
[04:36:34]  details must be getting imported from the route definition rather than from the library. I just don't, there's no imports in these examples. Here's how it works.
[04:36:45]  Thank you, Lynn. All right. Let me pull this across. Right. Okay. So it's like tan stack router. You, you have all these separate make route
[04:37:06]  calls that make the thing. And then you've referenced the thing directly in the back one. And then he puts it data loading in default info. Okay. Gotcha.
[04:37:18]  Yeah. There's a lot of tension between file system routing and these declarative routing pieces. The challenge is getting preload for SSR and stuff actually gets a lot harder
[04:37:28]  when the bundler can't statically analyze the shape to decide these things. So like we're kind of a lot of these things sometimes are at odds with each other
[04:37:36] . Um, I'm hoping that we figure out solutions to this stuff in general. I will always take UX over DX though. So yeah. Right. Right. Where's
[04:37:50]  the lazy loading components? Well, you could write the lazy stuff yourself, right? What about dynamic asset loading? Yeah. Like what about preload tags now that you
[04:37:58] 're lazy loading? Yeah. Yeah. And there's a lot of reasons why you, instead of trying to wire all that up, we, we, we end up with
[04:38:07]  what we have right now. Still definitely cool. Let's keep on going. Yeah. Yeah. You signal a react hook for TC 39 signals. I'm not surprised
[04:38:18] . I mean, we've been able to use signals in react for a while. So they're using the signals spec for it. We talked about benchmarking last time.
[04:38:28]  Ryan Florence still muddling over. I think they're like enjoying dragging their feet at this point. I mean, part of it is, yeah, they want the right solution
[04:38:41] . I want the right solution. I've been struggling with this, but I, I feel like they're just remix is not incentivized right now to go to our
[04:38:50]  RSCs. Like they'll go to RSCs if they have a version that makes sense. That's good enough. And they're definitely looking into it, but
[04:38:56]  otherwise like they got a pretty good system already. Right. So it's kind of like, I mean, yeah, they just kind of get this sit here for a
[04:39:15]  while. We'll, we'll leave it for a bit, but let's keep on watching. I, I, I, I, I, maybe it'd be fun
[04:39:20]  to talk to Ryan Florence or Michael Jackson on stream sometime, or just to get an idea of where, where they are in RSCs. Cause I, I mean,
[04:39:28]  they keep on suggesting they may do it, you know, in a year, you know, but it's been a year of kind of like back and forth. I mean
[04:39:34] , they're, they're into it, but they're also taking their time. Okay. Um, that's when I actually ended up. Okay. What else do
[04:39:44]  we got here before I do my personal page? Last bookmark. Um, Steve, if you're considering building a thin LML wrapper like Devin or an AI pin
[04:39:53] , please don't. If you want to build an API product that doesn't flop, do this instead. Uh, this is seven minutes. I probably should watch this video
[04:40:02]  before I pin it. I'm not ready to talk about this. So that's fine. I guess we won't worry about that. Okay. Let's continue.
[04:40:11]  Okay. So what else happened while I was away? Um, yeah. Signals went to stage one. This is actually pretty exciting. I've talked about this on the
[04:40:26]  Jadon stream. Generally, my, honestly, my biggest fear at this point and not even fear, all the framework authors are really aligned. My biggest challenge is
[04:40:35]  that I think my understanding is that the reception this got, you know, is that people are worried that it's hard to create their own effects. And like, we purposely
[04:40:45]  didn't include the effect API. So we basically built an API, uh, a bunch of things that would only really be helpful to framework authors. And we did it intentionally
[04:40:55]  because making assumptions about any of this stuff would be bad and no framework author is actually interested in building a framework into the browser. Like I think the worst thing for the
[04:41:04]  web are people who think that they can build a framework into the browser. Cause it's such a presumptuous undertaking, which is why we stayed away from DOM APIs.
[04:41:14]  Like it's, it's why I don't want JSX in the browser. Like there there's primitives that are important that can let us do things. And
[04:41:22]  then there's like, actually like being able to just be framework lists. If we ever got to that point where we felt that we had the full DX that we wanted in
[04:41:32]  the browser that like matched what we got in our frameworks, then I either. Yeah. I mean, basically that should only happen when we've fully understood the problem and
[04:41:46]  there's nothing new to learn in this space. I don't believe that's true. So like, I think the biggest pushback we're getting, I'm hoping we
[04:41:57]  just stand firm and we don't cave to this kind of stuff because like, I mean, it's kind of like the web component thing all over again. You know
[04:42:04] , I, it would be the absolute worst thing if we like basically built the framework into the browser and, you know, just to be like, look, you can use
[04:42:12]  this and then you can use it with web components and then you don't need a framework. Well, as good as that sounds, it's also one of the most
[04:42:23]  oppressive things possible. You have to imagine when I started solid, a lot of the work that I did was to create unique stuff, you know, because I was like
[04:42:30] , Hey, this is different. And it was, it's already hard to go up against stuff, popular ideas in the, in the ecosystem. Can you picture trying to
[04:42:38]  go up against like the standard, like it's, it's great and all that we've kind of come around to here now, but like, yeah, I don't
[04:42:46] , I think we should tread very, very carefully. And whenever any kind of proposal sounds like we're building a framework into the browser, we should be very, very
[04:42:56] , very cautious. Yeah. It's funny. I, it's almost like, I don't want the pieces to work together too well, which is odd thing for me
[04:43:11]  to say, but it's like, it becomes incredibly dangerous if certain pieces make assumptions on the other side. It's, it's, it's, it's,
[04:43:22]  it's a way to, to it's, it's fine if individual pieces work together in a way that's coherent, but if, if you create expectations on the other
[04:43:30]  side of the API in things that are completely disconnected, then you are creating a sort of coupling and complexity that over time will grow. Anyway, sorry, just probably doesn
[04:43:44] 't make sense to anyone here, but I, I'm happy things are where they are. And I hope that we can continue to kind of move forward with the signals stuff
[04:43:54] . I just also hope that we've learned from web components, because there is a risk there. What we got here. Yeah. Uh, HTX versus react great
[04:44:06]  breakdown by yeah. Theo made a video about that article. Um, this one, we covered it on stream like two months ago. Honestly, this is one of my favorite
[04:44:18]  Theo videos in a long time. Um, he makes great content in general, but this one was just, it had just the right amount of extra insight on top of
[04:44:27]  the article. Cool. The article is great too, but I think this video is actually a real, um, value add on top of the article. Um, uh,
[04:44:36]  this, yeah, this is one of my favorites. Obviously the things that would be my favorite are probably not the most popular, but a very, very cool video. Um
[04:44:43] , then where are we going? Okay. Uh, how much time do I have 15 minutes? Yeah. Okay. Got two more topics in 15 minutes. Let's
[04:44:54] , let's crack them out. Okay. Question number one, topic number one. It's cool that solid is getting react, uh, get mentioned at react conferences. It
[04:45:12] 's funny. This quote from Adam Rackis reminds me almost exactly of the quote that I, I kind of chewed him out on when he was like saying,
[04:45:19]  Oh, you know, it'd be great if I was using solid for fintech or whatever. And I wrote that really long thing, you know, eight posts where
[04:45:26]  it's just like, that's craziness. But, uh, this one's probably from around that time period and it got used at react Miami. So not, it
[04:45:36] 's not on Adam. It's just, it's just react is still good enough. I love how that's like the headline actually. It's kind of funny, isn
[04:45:43] 't it? Like, like, can you picture that being like your, your advertising line? It's like still good enough. Like rather than say something exciting, it
[04:45:54] 's like, we're still good enough. But what, what the thing here is this is true. Uh, as much as I want to, you know, kind of
[04:46:07]  talk about this is it would be best for everyone. If react came out and just said, we'll make you take you anywhere and ever right up to the top tier
[04:46:15]  0.01% of productivity apps. If you need that shit, go use solid. We're optimized for the other 99.9% of apps. Seems reasonable. React
[04:46:27] , it's fine. Sorry. Um, the funny thing is like, if, if we, if we're talking about what you need to do, I think,
[04:46:41]  I mean, isn't that the argument for like kind of like a triple backend, like rails or HTMX, right? Honestly, you'd probably be best for everyone
[04:46:51]  if rails or HTMX just came out and said, yeah, we'll take you anywhere and ever right up to the top tier top 5% of productivity apps. If
[04:46:56]  you need that shit, use react. We're optimizing for the other 95%. Now, obviously I'm being a little bit suspicious here, but what I'm getting on
[04:47:04] , on pure need, there's always going to be within your, when you're looking at product project, there's always going to be like some ranges to work within.
[04:47:16]  And the, the funny thing here that I thought is this makes it sound like react is what you want to use for 99.9% of everything. But the reality is
[04:47:27]  if you, you just have to go back one more level and see that like maybe react is the 5% or the 2%, like there's something on top of react
[04:47:37]  doing that as well. Right. And you can just, you know, somebody could be like, honestly, probably best if everyone, if, um, the vanilla HTML community
[04:47:49]  just came out and said, yeah, we'll take you anywhere and everywhere, right up to the top, you know, the mid tier top 50% of like,
[04:47:58]  you know what I mean? Like you're, you're, you're just kind of going back a scale because from need, you know, most things can do the job
[04:48:06] . You can always just add a little bit to cover the gaps. Right. You, you can take something simpler and just add a bit more if you need to optimize something
[04:48:18] , right. If something's missing, you can always just add on. It's harder to pull back. Right. So, but on the other hand, sometimes like
[04:48:27]  wherever you're sitting in the band, you kind of ignore what's behind you. Right. I mean, or like, you know what I mean? Like it's,
[04:48:38]  it's, it's, it's, it's very telling. It was just kind of funny. Cause I basically said that need to wander different things. There's a
[04:48:45]  time. It makes sense to settle tons of times. Sometimes maybe you want something else. If you believe more than 5% of web devs want to use react,
[04:48:54]  then you can kind of see the problem with this argument because there's more people who choose to use react than who need to use react way more monumentally. So yeah
[04:49:08] , it's, it's kind of a, it's, it's, it is an interesting scale. I thought this was fun. And I thought the HTMX
[04:49:16]  people out there or even rails people out there would appreciate this sentiment because in a way I'm not telling you to go use HTMX or rails. I'm more saying
[04:49:26]  that like if like, if you pick any one criteria, you're going to like, and, and scope it a certain way, you can make it look good.
[04:49:39]  Right. So like, yeah. Right. Right. That's, that's the whole other side, but it seems like all the, the, the narrative, well,
[04:49:54]  and it's funny how it's flipped right at the beginning, we talked about performance and then we backed off of it. Now, all the time I talked to react
[04:50:00]  developers, I had a podcast recently. Everyone's like, keep on talking about performance. And it's like, what if we told you the performance isn't actually better?
[04:50:09]  Like, or isn't like why it's not better. It isn't why we like ended up here. Like I focused so much on performance because the react community said what
[04:50:23]  the way we did things was slow. They said that KVO had too much memory overhead. It couldn't render fast. I just wanted the DX of knockout.
[04:50:31]  I love knockout. It's so funny. You talk to mob X or knockout developers, you know, who used it back at their prime dates, not like later
[04:50:40]  on, cause they inherited it, but like you use it when those frameworks were like, you know, our libraries were popular. They always have fond memories on it. I
[04:50:48]  bet you, if I asked Adam, I think he used mob X before he would, he would say how much he liked mob X, but like that's actually what
[04:51:02]  we, I was trying to recreate. I needed to prove it was performing enough to get past the narrative that react used to bury it. But now that we're past
[04:51:13]  that and like on the other side of it, if the best thing you can do is say that, oh, we don't need the performance. I hate to tell you
[04:51:22] , there's a whole lot of other stuff there. Anyway. Um, okay. Last topic for today. Um, where am I? No, this one back to
[04:51:37]  my stream. Um, I need to know what's going on with edge. Someone's got to explain this to me. I, I, I, I read some stuff
[04:51:46]  from the Vercel guys. People are trying to explain this to me a bit in the chat, but I, I have to admit I'm a little bit confused
[04:51:55]  because Vercel's like, look, we backed away from, uh, edge rendering. It's slow. It's not what you want to do. But they kept
[04:52:06]  on talking about where your data is located. And then they were like, oh yeah, but we think PPR is good. And I was like, what isn't
[04:52:15]  PPR like, and maybe I don't understand what PPR is. So maybe this is where I should start partial pre-rendering. My understanding of that is at
[04:52:26]  build time, they go run these next pages, or maybe there's like some kind of like incremental static element to this, but like they essentially go and, uh,
[04:52:42]  can you guys hear that buzzing? It sounds like one of my computer fans is just kind of kicked off terribly. It's probably cause it's hot in here. But
[04:52:52]  just give me two seconds. God better. Um, but like, let me see if I got this right in PPR build time, build, they run the page,
[04:53:12]  stop at the suspense boundaries basically. And then like render the static shell and throw it up on the CDN. Then at request time, they, they, you hit
[04:53:27] , because you, you, you serve from a single origin. Like when you initialize the page, you have to go get the page. The very first request you hit
[04:53:37]  an edge location, probably a worker of some sort. It sees it goes, okay. I need to send back the shell, but it's all part of the same
[04:53:50]  request. And then I need to open up a communication channel with. So do another request probably to a serverless function, you know, over closer to the database.
[04:54:05]  And then as that request comes in and it streams out its content as it renders and talks with the database a bunch, it proxies through and basically appends
[04:54:19]  it to the end of the page of that initial response. Now those static pieces obviously can get served right away. But to be able to connect the, how should I
[04:54:34]  put it, the, like on the same HTML coming in, like the static parts and then appending the other stuff, there's some like worker or compute on the edge
[04:54:45]  actually had to boot boot up so that it like some kind of proxy setup because it it's, it's not just doing one thing. It's literally going, get
[04:54:53]  me the, the static content and make a request to this backend and then stream it through. And then we'll stream it all the way through. Right. But what
[04:55:12] , I mean, like just really simply here, we have the client who's over here, we have, let's use this one. We have our edge server, which
[04:55:29]  will make a different color. We have maybe over here, our non edge server or serverless function. And then I'll put our database over here. Okay. Datab
[04:55:45] ase. But we basically have these three servers, right? So client goes, goes, okay, get me some stuff. Let's make this white. And then it
[04:56:02]  goes, okay, send back static HTML, but I'm not done sending stuff. So at the same time, I'm going to request here, which then is going to
[04:56:13]  communicate with our database. And then it's going to do a bunch of back and forth there. And as this completes, I'm going to send this back here and then
[04:56:22]  Jimmy back on the same thing all back to the client. Right. But if, if I took this design and I was just designing PPR here, I was saying
[04:56:35]  that I'm, you're right. I'm missing one other thing. I should add like a, a tan version or something over here. I'll have a CDN
[04:56:43] . So what I did miss in my diagram for the CDN is this did a request to the CDN. So if we follow through, it's like one,
[04:56:57]  at the same time we request this, we connect to here, this comes back, sends this back, this here to communicate here, goes back, goes here and goes out
[04:57:08] . Yay. Right. Now, if I rename these, these locations, see right now, this one's client, right? And then this is, well, this
[04:57:20]  one stays the same. This is edge. This one, CDN. This one is server. Let's just call it server. And this one's database. If
[04:57:39]  I just rename server here to API. like, what's the difference? Like if, if I get some static stuff from a CDN or I render it here in
[04:57:57] , you know, sub 10 millisecond time range, what, what's the difference? I mean, this has to boot something up. Maybe JS is slower the load
[04:58:06]  on the edge load up time. But like, this is not just a CDN response. It has to actually proxy through and process stuff and wire it all together. Right
[04:58:16] ? Like this is why I'm, I'm confused because it's, it's basically the same model as far as I can tell, except this is, sorry, this
[04:58:25]  is server. So I'm saying nothing moves between streaming edge rendering and PPR. Okay. So right. Right. And booting up the JavaScript has to be
[04:58:45]  expensive because like I read it, his, maybe I should pull the tweet up. It just didn't make any, I just read it and I was just like,
[04:58:59]  what? But the client can't connect to the CDN directly and also feed like, do you know what I mean? Like you only get to make one request to start
[04:59:19]  this whole thing off. Okay. So you're saying that the CDN can proxy through to the server and append the HTML at the end in one way. Okay.
[04:59:49]  So that's what this comes down to. It's edge runtime would boot separate VMs for each customer where this streaming mechanism is something that's baked into the CDN
[05:00:04]  layer natively. so it's basically always up. Okay. So the, okay. This is helpful. So what I'm understanding is that the single app has the
[05:00:38]  ability to basically manage this whole proxy partial thing together all on its own. Like, can all CDNs do that? Or is this something that Vercel specifically
[05:00:51]  built into their CDN? Because yeah, I mean, that's, that's basically the gist of where my confusion was on this stuff. I'm going to
[05:01:02]  end this with one more thought from Matt Billman. He was said, the front end community, there's a tendency to seek out absolute rather than balancing edge rendering, for
[05:01:08]  example, is powerful, but not without drawbacks. If you're building a full stack app on top of a database, edge rendering is almost certainly an anti-pad for
[05:01:13]  anything non-trivial. It's not cost efficient to replicate large database. Yeah. I'm not talking about moving databases. However, if you're building a Jam
[05:01:18] stack approach on top of API, it's an API catching edge rendering can be very powerful. If I was hydrogen, works for remix, for example, this edge
[05:01:23]  rendering on top of calls a shelf-wise edge. We already have a good global cache layer, giving good balance, dynamic edge on top of this, pictures when you're
[05:01:31]  running off, the edge is more limited compute environment. That's fine. 50 knows around time, blah, blah, blah. Okay. Yeah. So yeah, because reading
[05:01:38]  what Matt says, generally speaking, is why I was like, still thinking about it this way, because like, it's still all the same pieces. We're just saying
[05:01:49]  that there's a, the difference between these pieces are slightly more optimized in a way that, um, is measurable. I'm surprised by that a little bit, but
[05:02:04]  I can believe it. I could see it in, be in the realm of, you know, it could be up to like, maybe up to 20 milliseconds. I mean
[05:02:11] , that would be significant. Um, definitely if it was like 20 milliseconds difference. So yeah, because the funny thing is without moving anything, this all seemed the same
[05:02:20]  to me. Yeah. Anyway. You can understand my confusion here because it's, it does feel like, like I've never heard of CDNs being able to
[05:02:43]  like do all that amount. I figured it'd be some amount of compute anyways. Um, that's it for me today. Um, I gotta go. Um, thanks
[05:02:52]  for joining me on the stream. Hope. I don't know if I'm doing a stream next week. We'll, we'll see. Um, but, um,
[05:02:57]  until next time, um, you guys all have a good night. I don't think there's gonna do anything on the raid side. Maybe. I don't know.
[05:03:05]  I gotta go actually. So yeah, you guys all have a good one. I'll catch you next week. All right. See ya.