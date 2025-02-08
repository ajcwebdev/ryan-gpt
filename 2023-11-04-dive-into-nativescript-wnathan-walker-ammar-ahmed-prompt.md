---
showLink: "https://www.youtube.com/watch?v=j0s8w34Xh9o"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Dive into NativeScript w/Nathan Walker & Ammar Ahmed"
description: ""
publishDate: "2023-11-04"
coverImage: "https://i.ytimg.com/vi/j0s8w34Xh9o/maxresdefault.jpg"
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

[00:00:00]  all right welcome to my stream today how's everyone doing sorry for the delay just wanted to do a little bit of some video tests and stuff before we actually got started up so
[00:00:16]  how about you all come and say hi in the chat while we're just getting started here today good good good hello all right so I hear some people are excited to talk
[00:00:37]  native script I'm excited to talk native script because other than like the meta framework side of things it's probably the most requested thing for for solid I'll talk maybe a
[00:00:49]  bit about the solid start a bit later as well afterwards but yeah I just keep on hearing it's like what about your native store and most of times people assume when you don
[00:00:59] 't have a virtual DOM you can't work on other platforms and that isn't true in multiple ways obviously there's projects like native script but even just custom renderers something like
[00:01:10]  solid native the way that react native works would work with solids infrastructure you know if if you don't use lowercase tags and solid we don't actually use any DOM APIs
[00:01:22]  in your JSX and with custom renderers we can just change what those lowercase element calls are so yeah lots of options here so I but the thing is even with
[00:01:36]  that it's still a huge amount of work for someone to make something like react native and well beyond the scope like if if making your own felt kit or next JS or remix
[00:01:48]  is a huge amount of work I can't picture what react native is that a lot of people don't know this but a large part of the teams that works on react at
[00:01:57]  meta or Facebook is actually a lot of people don't know this but a large part of the team that works on react at meta or Facebook is actually on the native side
[00:02:04]  like probably I don't want to I don't want to say more but like it they've had a large team working on it basically this whole time since the beginning
[00:02:10]  and there do they have incredible work done inside that's hasn't even exposed the outside so I mean what chance does everyone else have well hopefully the answer is some really good options
[00:02:22]  and that's why I'm excited to have guys from native script here today to talk yeah okay here we go yeah all right hi a few more people have joined on the stream
[00:02:33]  yeah yeah yeah yeah let's go I should uh yeah I I I view it's funny I actually have react native experience um I used it years ago and yeah I I
[00:02:44]  know it's better now but I spend a huge amount of time on performance like getting uh like this was before they had like the native animation transitions or just bringing them in it
[00:02:44]  was around 2016 time but even so like I was building infinite scroll grids and I was like really working on batching and like mechanics if like I don't know if
[00:02:45]  they have the stuff anymore but there used to be like all these like container pieces that you'd have to wrap stuff your data around so that you could use it effectively inside components
[00:02:46]  so that it could get more I know it's better now, but I spent a huge amount of time on performance, like getting, like this was before they had like
[00:02:53]  the native animation transitions or just bringing them in. It was around 2016 time period. But even so, like I was building infinite scroll grids and I was like really working
[00:03:01]  on the batching and like mechanics, if like, I don't know if they have this stuff anymore, but there used to be like all these like container pieces that you
[00:03:08] 'd have to wrap stuff, your data around so that you could use it effectively inside components so that it could get, not unlike solid's memoized for loop type updates
[00:03:17] , because just like blowing it away and re-rendering that's not gonna, you know, suffice here. Yeah, that's, that's what I hear,
[00:03:28]  but I don't know enough of the specifics, but maybe we can understand that better today. I don't know. All right, let's, let me get on here
[00:03:36]  and actually invite people to, to watch the stream. uh, on, tell people we're live. God, why can't I even find anything anymore? Uh,
[00:03:51]  where's my profile? Okay, there we go. I should actually make sure my screen sharing works. I was so worried with my guests that I didn't even bother to
[00:04:00]  check if, if, uh, if it still works. It should still work. But it's, it's, it's, it's funny, sometimes I do
[00:04:07]  like a Mac OS update and then like, bam, it's gone. And then it'll like force me to restart the whole stream. Well, luckily it didn't today
[00:04:13] . Okay. Here we go. Yeah. Okay. Uh, let's retweet this. Okay. No. Quote. Live. Uh, twitch. TV slash
[00:04:24]  Ryan solid. All right. All right. All right. All right. All right. Let's, I probably should have done that sooner. Give the, the people
[00:04:34]  on Twitch, uh, you know, their time to get past the Twitch pre-roll, so to speak. It always takes a few minutes for, for the people
[00:04:48]  from Twitch to kind of come in. Um, how are we doing on Twitch? Give me two seconds. Yeah. There's like five people sitting on Twitch now. Um
[00:04:56] , YouTube's got one. Oh yeah, here we go. Twitch people coming in. Yeah. I mean, you can always skip those pre-rolls by subbing
[00:05:08] , you know, it is an option. I just put that out there, you know. Um, no, the real reason we're late is I had to run
[00:05:18]  and find my orange juice and I couldn't find my orange juice in the fridge, so I was like running back right at 12, trying to find my orange juice. All
[00:05:28]  right. How are we doing everyone? All right. People are starting to come in now. Okay. So, I don't know, just, just out of curiosity,
[00:05:39]  people in the chat, are, are, are many of you familiar with NativeScript? Is this something, something you've used before, tried before? Definitely gotta have
[00:05:59]  the orange juice. All right. All right. Nope. Okay. Still a lot of newcomers. I see. I saw NativeScript for the first time years ago
[00:06:21] . I thought it was really interesting. I was always thinking about like, okay, can I make an integration here? And it looked like I was like doing stuff with
[00:06:30]  like, um, HTML, but with like different tags and stuff. I imagine things have progressed or, or a little bit different than my old memory of it. So
[00:06:39] , I mean, this is what, I actually know very little, so that's why I was, I'm very excited to have my guests on the stream today so that
[00:06:46]  we can, uh, we can actually, uh, you know, get into the details a bit. All right. Although, it looks like one of my guests is
[00:06:56]  here, but I don't know what happened to the other guest. I think I lost one of my guests. Um, I'm gonna, I was figured we could
[00:07:06] , you know, probably get this, this thing, um, started here in a moment. Uh, we'll, we'll, we'll, we'll give them a
[00:07:14]  minute to join back on. I don't know what happened. Uh, one sec. I use native script often. Cool. Right. Capacitor. Yeah.
[00:07:32]  Yeah. Yeah. So, some people have looked at it briefly. Some people have used it a smaller amount and a bunch of people who don't even know what we're
[00:07:42]  talking about today. Right. What are you drinking? It's just, it's just literally orange juice with ice in it. Okay. Hmm. Okay. Um, I
[00:07:53]  think our other guest is back. Um, I, I'm trying to like wrangle these guys in, like I'm talking very loudly. They should be able to
[00:08:02]  hear me and join on there. They're there. They look like they've walked away from the computer. So, um, hopefully we can get this started here.
[00:08:12]  I would, I, you know what, I'm just going to put them on the spot and then when they come in, um, you know, it'll, it
[00:08:17] 'll be all good. Okay. So, how about without any further ado, I introduce my guests today, which are Nathan Walker and Amar Ahmed, who work on
[00:08:29]  native script. All right. how are you doing? How are you doing? Hey, everyone, I'm doing great. All right. Yeah. Nathan's coming back
[00:08:40] . See, I knew if I put him on the screen, he would, he, he would come back. This is, this is all part of my strategy. That
[00:08:45] 's my guy. So I had to grab some, I heard this was a juice friendly show. Yeah. So, um, my juice of choice is grape juice.
[00:08:57]  Nice. Nice. All right. So, um, let, let's get started here. Um, I guess to start off with, just for those who are less familiar
[00:09:09]  with, um, how about you introduce yourselves and, uh, introduce native script? Um, uh, go ahead, Amar. Okay. So, um, I
[00:09:24]  am Amar and I'm, uh, I'm the co-father of, uh, NodeSnook. NodeSnook is a end-to-end
[00:09:32]  encrypted and private node-taking app that, um, I work on and in my free time, I, uh, I spend most of my time, my free time
[00:09:45] , uh, in open source with native script, react, react native, and all these technologies. And, um, recently I have seen mostly spending my time with native script
[00:10:00]  and college. Yeah. Nice. Okay. That's exciting. Um, very cool. Nice to hear that. How about you, Nathan? Nathan Walker. My name
[00:10:09] 's Nathan Walker. Um, I do happen to work a lot around native script. Um, currently serving as the chair of the, the working group or technical steering committee.
[00:10:18]  Um, it's, uh, quite a neglected group, uh, of folks. Um, I've had the pleasure of working with Amar and collaborating with him on
[00:10:25]  several things, and it's been, uh, fascinating, um, to work with him. So I, I feel as lucky as you all to be, uh, in
[00:10:31]  the presence of Amar today. Um, and also I think it's the first time I met you, Ryan. So a huge honor to meet you. Um, I
[00:10:38]  also co-found in studio. So we also do, um, team augmentation and we service support contracts for various, a lot of mobile development, but, um
[00:10:49] , definitely a fair mix of all sorts of web and mobile projects. Very cool. Okay. Yeah. So we got some good representation, both on, uh, native script
[00:11:00]  side and also, um, with the, the integration with native script with solid. Um, uh, so yeah, I, I mean, I want to, I
[00:11:07]  want to learn here a bit more about native script itself. I, I, as I said, it's, I looked at it actually pretty like a little bit more detailed
[00:11:15] , probably in, I want to, I want to say 2018 time period and 19 time period. I haven't looked at it admittedly in the last four years. So
[00:11:24]  I, I'm kind of new to it again. I actually just pulled up the website just now so that I could actually see it again here. but, um,
[00:11:30]  can you give me like a simple summary for what native script is for someone who might not know? Um, I could probably take that one Amar. Um, you know
[00:11:42] , native scripts, open source framework, it, uh, originated in a corporate environment, you know, out of Telerik and, and progress, uh, involved in
[00:11:51]  a lot of, uh, investment in to bring some of the technology forward. Um, it at that time period, 2019, I think it was end of 2019 going
[00:11:59]  into 2020, right before the pandemic, um, it transitioned to community driven. So, um, we helped establish an open governance model around it. Um, the key part
[00:12:09]  about it is that it really tries to unify the JavaScript language itself, um, on the platform. So it's just embedded JavaScript on the platform. It's really probably
[00:12:20]  the simplest way to understand it. Um, it's like, I guess, uh, and this is just as someone who doesn't really know the difference between these things
[00:12:32] . Um, like what's the difference? Like some people mentioned in the chat that they've used things like capacitor before. Some people mentioned they use react native before.
[00:12:42]  Um, is native scripts similar to those different? I know it'll run my JavaScript framework to build a mobile application. Um, but, uh, how is it compared to
[00:12:55]  those other types of solutions? Um, are you want to give that one shot? Yeah. Yeah. So we can say that native script is, uh, if,
[00:13:13]  uh, if we compare native script, uh, flutter and react native. So those are the main three players in this. So first, if we go with react
[00:13:25]  native. So rec native, the most basic difference is that in rec native, there are like a clear separation between the native and the JS side. Okay. So if
[00:13:42]  you, yeah, if you want to create something, if you want to create something in the native, you have to cross a bridge or a boundary and go into the native
[00:13:54]  side and then do all that, all the work there in the native code and then return back. Okay. Okay. Whether it's rendering, whether it's like, if
[00:14:04]  you want to access some native API or anything, you can't do it directly in JavaScript. You have to go to the native side and do it there. Right.
[00:14:15]  Um, Java objective C, Swift or Kotlin, et cetera. Yeah. I've had some experience doing that, but okay. Oh, okay. Now that's rec
[00:14:28]  native. Uh, the second is, uh, native script. And if you look at native script and it, uh, there is no bridge or boundary. Everything is
[00:14:41]  in JavaScript. For example, if you want to access any native API, for example, you can take the example on the website. Okay. So if you want to
[00:14:56]  access the battery level on iOS, we can just access the battery level directly from JavaScript. Similarly, if you want, if you want to access any native API, or if
[00:15:08]  you want to render something, uh, it all happens in JavaScript correctly. Like we can, we don't have to, you can say that we don't have to
[00:15:19]  switch context. Okay. If, um, in, um, in rec, in rec native, you have, you might have to, uh, for just to access the
[00:15:32]  battery level here. The simple example, these are two to three lines for native script. But if you want to do the same in rec native, you might have to
[00:15:43]  create a holes in a native module, which, which is like a whole library to just to get the battery level here. But in case of nature, you can do that
[00:15:53]  correctly. Okay. Okay. The second major difference. Yeah. The second major difference between rec native and native script that I think is, uh, primarily the most important
[00:16:06]  is that in rec native, there are two threat. Okay. One is the, uh, JavaScript threat where all your JavaScript code is running. And the other is the
[00:16:22]  UI threat or the main threat where the platform is drawing your, uh, UI. Okay. But if I compare that to native script and native script, there is a single
[00:16:36]  threat. Everything is running on the UI threat. Okay. Uh, there are benefits and pros and cons to both. Right. Yeah. I'm just, yeah.
[00:16:51]  Just, just following that. Yeah. So it's like, um, native scripts set out to wrap the specific platform APIs of the specific platform. Um, like iOS or
[00:17:02]  Android, like the actual, like the specific, like, as you've mentioned, uh, the battery light thing. Whereas like react native tried to push as much under the
[00:17:12]  native hood, so to speak as possible. So it's like you interact with the react abstraction and then hopefully, um, someone's done the work to like do that
[00:17:24]  native stuff under the hood. If I'm understanding correctly, like, instead of, uh, like, instead of having this, you know, set up where, um,
[00:17:33]  yeah, the, the bridge. So in react native, the idea here is that like all the APIs are just at your fingertips in JavaScript and they would native scripts.
[00:17:42]  So you can just like basically primarily think of it as a JavaScript application that happens that happens to, you know, access those device APIs the same way, you know,
[00:17:52]  the browser has like, you know, device kind of APIs, like, like, uh, you know, open file or whatever. You can, you can almost think of
[00:18:04]  it as merging the languages together. Um, you're bringing objective C APIs in the JavaScript. Um, you're bringing Kotlin and Java APIs into JavaScript and it's
[00:18:15]  almost like a singular unified, um, language. At that point, you're basically coding a full platform application in JavaScript. If you want, I think the key detail that
[00:18:26] , um, is often easily confused is that somehow that's the only way. Um, the way native scripts made is you can use as much objective C Swift and Kot
[00:18:36] lin code as you want. Um, you can do it in JavaScript or you can do it in Kotlin. Um, the choice is sort of yours at any point and
[00:18:45]  you can deviate in between them in different scenarios. Right. I, I just loaded that example from the Apple docs and I'm seeing UI device.batterySt
[00:18:54] ate.unknown. Like, I guess that's like, uh, you know, and like we're, I'm seeing this UI device. Like I I
[00:19:00]  I'm seeing the Apple doc and JavaScript. Yeah, exactly. Yeah. Yeah. That's, that's really, and that's certainly why that example is there. Cause
[00:19:11]  it's probably one of the more easy ones that comprehend fundamentally what's happening. Um, those objects are in the language, uh, when you're running anything against native script
[00:19:23]  and native script is just a framework, um, that's running on the platform. So if you're familiar with iOS development, like an XC framework, you've
[00:19:32]  probably heard of before native script is an XC framework. Um, it's just sitting on the iOS, um, application. And so your bundle is loaded into the
[00:19:41]  engine and executed as if it was running inside a browser, you know, V8 running inside Chrome V8 is running on the device and running inside the native script engine.
[00:19:50]  Right. Yeah. Okay. Yeah. So I, I'm, I'm, I am seeing the differences react native. And the reason I mentioned capacitor earlier is like
[00:20:00] , cause that's the, the, or like Cordova start, like was the other side of things where people would basically take existing websites and then run them in a
[00:20:09] , in a web view. Um, this is different than that. Right. Yeah. Yeah. So in that, it, it gets easily confused out there,
[00:20:16]  right? Right. Because a web view is just one of many views on the platform. So when you talk about doing platform development, web view is like one of a
[00:20:25]  fraction of what you can do on the platform. Right. So native script is really trying to give you the entire platform for your purposes at any time. So you, you
[00:20:37]  can develop web view based applications in native script if you want. Um, but you can go further than that. Um, and so it's really, it's meant
[00:20:48]  to expose the raw platform to you in the language that you prefer. Yeah. Um, yeah. So that, yeah, then this is, yeah, this is quite different
[00:20:58] . Cause it's like, it, I, yeah, I don't want to quite put them on a sliding scale, but like the capacitor is very far or Cordo
[00:21:07] va, like very far on like the browser side of thing. Um, and, um, it sounds like react native is very far in, like trying to do as
[00:21:16]  much stuff in native with them, like this bridge thing. And it sounds like native script is sort of somewhere in the, in the middle where it's like, but it
[00:21:25] 's not, that's not quite the best example. Because as you mentioned, native script does, um, give you this direct access to all the API. So it
[00:21:34] 's, it's, it's not quite fair to put it like in between the two. There was a great video, a stream a couple of years back and I'll
[00:21:41]  have to find it again, but he did such a wonderful representation on a scale of like where they kind of reside. He put native script much closer to the platform level,
[00:21:50]  which is probably more accurate because when you're working with it, you can reference the apple docs. You can have the Kotlin docs up, you can have Java docs
[00:21:59]  and Android docs up. Like you can reference that stuff directly as you're working in JavaScript. And so that's that right there is sort of fundamentally, um, right
[00:22:10] . I think. Yeah. Cause in a sense, react native, isn't using like web view, but it's like, they built their own web view. Like it
[00:22:17]  almost is like a conceptual thing. Like instead of using the prebate web view, they built their own wrapper thing where you live in JavaScript and then try and interact with
[00:22:27]  it. Whereas native scripts, you write like tries to go a level lower where it's like, we're going to expose the APIs. We actually like, we're
[00:22:35]  going to expose a container that is customized for our purposes. And then capacity is like, we're going to just use the web view. So it's like one, two
[00:22:42] , three. Okay. This is probably where Amar, um, I think can speak more on solid and, and some of the things around Dom. This is probably
[00:22:49]  where the conversation gets a bit more interesting because this aspect of the view layer is one of the more fascinating aspects. I think in this topic, like in general, I think
[00:23:00]  all, all languages are, you know, striving for a singular primitive. I mean, the web ultimately is celebrated with its singular primitives. You know, you run
[00:23:09]  anywhere you have these, these singular primitive, uh, things, you know, like the div or an image tag, or, you know, as we were just talking in
[00:23:16]  the solid chat yesterday, this model tag that was just introduced in Safari HTML, which represents a 3d object, um, like on vision pro. Right. Um,
[00:23:25]  that's a singular, like primitive and yeah. Yeah. Yeah. Sorry. Like I know this was just a tangent, but you mentioned, I've been thinking, you
[00:23:34]  know, very much in my mind. Okay. iOS Android, you know, here's my Android phone right here, you know, and you know, these devices. And
[00:23:43] , but I guess I should be thinking wider of it. Again, it's because of mostly I developed an application for people doing photo sharing, like a social media app on
[00:23:51]  react native. So I'm like thinking like in that zone, but when we talk about native here and the targets, um, we're talking about what smartwatches
[00:23:59] , televisions, AR devices, VR, like we're talking, there's a, there's a much wider range than just phones. Right. Yeah. You can run
[00:24:09]  it anywhere. A lot of people do ask, you know, where's the sample repo on Mac. Um, and there's been some in the past. The only
[00:24:18]  reason we probably don't have it out front is cause we want it to be probably in a certain place for someone to kind of pull it down and have the full aspect of
[00:24:25]  core there. And that this is probably relative to the conversation is, is core is a JavaScript library that is in the native script, like universe, if you will.
[00:24:38]  Um, core is the singular primitive layer that provides a singular primitive to something on the platform. Um, you know, and that's akin to div for example, or the
[00:24:50] , or the a tag. Um, and so core is providing that on the layer of, of native script. So you can represent that and work with sort of a
[00:25:00]  singular view markup and have that represent the true nature of the platform. Yeah. Okay. Yeah. Yeah. So this is what I saw. And then they're
[00:25:11]  telling about iOS Android vision pro some other stuff sounds like, Oh, this, this goes a little bit further Android TV. Um, but there's this core. And I
[00:25:18] , in terms of, um, you know, like there's some different philosophies here, right? There's the, there's like the right once run anywhere versus
[00:25:28]  like the, what would the learn once run anywhere? I, I, I forget what, but you know what I mean? Like there's some like the different levels of
[00:25:36]  abstraction where some are trying to like basically, you know, come up with one abstraction that works for everything versus, you know, one mentality or that. And what I
[00:25:46]  saw earlier was clearly an iOS, um, uh, API. Um, how does native script approach this? Is it just like you're building an Android app or building an
[00:25:56]  iOS app? Like, yeah, go actually click on the GitHub link top, right. And this'll rather than just talk about it, we'll just look at it.
[00:26:04]  Um, click on packages here. So this is the core repo. Um, and then go into core right there. Um, there's a breakdown of things that are
[00:26:15]  here. We could look at any one of these, but maybe let's take a look at in the UI layer. I think the UI layer is probably the most interesting.
[00:26:22]  Um, there's a folder called UI. Yeah. And inside here, let's see, what could we look at? Maybe let's look at the date picker.
[00:26:33]  Maybe everyone loves those. Everyone loves the date picker. Um, maybe click on a iOS file. Yeah. Yeah. You can click on either, either or.
[00:26:42]  And so. Yeah. I've seen the extensions. Yeah. Yeah. So that aspect of native script is more meant to allow the bundling to extract and leave you with
[00:26:53]  only platform specific bundled code. And so sort of what inherently is built into, um, the system and everything around in the way that you interact with native script is
[00:27:05]  that you only end up bundling code that's relevant for that platform. And so those extensions are used when it's bundled. It actually would, you know, exclude
[00:27:14]  and completely leave out Android files. You know, you would end up with only iOS files if you're running for iOS. But yeah, UI date picker right there
[00:27:21] . So like that line you just passed, like, this is a great example. This is an ESM class, right? Export class date picker. That is the
[00:27:30]  JavaScript primitive. If we go to the Android file, you'll see that exact same ESM symbol exported. Right. Yeah. And this is, so yeah, we
[00:27:41] , we basically create the class that act as like a wrapper. Cause I was trying, this is what I was trying to figure out where, where this one UI date pick
[00:27:49] er was coming from, um, native view protected UI date picker. Cause this is, this is the instance that's actually getting created. I'm gathering. Um,
[00:27:59]  that's right. That's right. There's, there's a singular API on creating, um, all native classes that was sort of established 2016, maybe. Um
[00:28:09] , in the early years, like 2014, they didn't have like a fully established API around that. And then there was sort of some work done to create sort of just
[00:28:18]  a standard, like three level process, which is create native view. Um, so any ESM class can have a create native view function. That function will always return a
[00:28:27]  native class. Um, there's a knit native view and that can be any initial that's right below there. Um, that basically initializes anything that needs to set
[00:28:38]  up that native view. And then there's, um, dispose native view. And that's for any cleanup when the component is destroyed. Gotcha. Yeah. Pretty, that
[00:28:47]  applies to everything. Okay. Yeah. Yeah. Yeah. I was, I was kind of trying to see where the bridge happens. Like here's the equivalent of what
[00:28:56]  we saw in the other one. You can cut, you can copy those lines 65 Android widget date picker, copy that to a clipboard and paste it in a Google
[00:29:05]  search. And, um, let's take a look at that. Right. Cause you're saying that these, this will give me an Android API. Like this is
[00:29:12]  the direct mirror of the, of the Android date pick. Yeah. So everything in this doc is relevant to you as a native script developer. Okay. Yeah. So
[00:29:23]  you, you can, um, core tries to take probably the most simplistic approach and saying, here's all the base level stuff to deal with these primitives. And
[00:29:32]  then you can either deal with them as is from core or you can grab a loaded event. Yeah. Which will emit once the native view is created and it'll hand you
[00:29:42]  an instance of this. So you can dip into it and go further. You can dip into this API and do more as you wish. That's, that's nice.
[00:29:50]  Yeah. I mean, my experience with react native and like, like I can understand there mentions of some of the trade-offs earlier and you could see a benefit.
[00:29:58]  the more stuff you keep in theory on the native side. Um, hopefully, I mean, again, I don't know if this is true, but hopefully the serialization
[00:30:06]  is minimized. Like you only have to pass so much through and then they can spend its time doing all the work on the native side. So the performance should be good
[00:30:15]  in theory, at least. Um, if with something like the react model, but the problem was like, we were a bunch of JavaScript developers building mobile app that did image
[00:30:23]  processing. And like, there was no escaping writing objective C and, uh, Java, like calling or whatever, like these modules. Um, and like, you know
[00:30:35] , as it turned out, one of our developers, um, one of the more senior guys on our team, this is a startup, small resources. He, you know
[00:30:43] , he spent the time to learn how to do this cause we needed it. Right. He was kind of the R and D guy. Like he made sure like,
[00:30:50]  you know, I, I managed more of the people and he was the guy who made sure like that the technology was there. I made sure that the product got released and
[00:30:57] , um, he did the work and I understood it enough to know what's going on. But then, you know, he left and then for the next like two
[00:31:04]  years, I was like going in and like, okay, how's my objective C today? You know, like, like doing this stuff. It seems amazing that I like
[00:31:14] , I could just go in JavaScript and have these API. It's like, obviously I, I, I, I got familiar enough. I could read the docs obviously
[00:31:22]  of, of the, of the, of these, uh, you know, developer SDKs, but, um, it's a whole other thing when you're like,
[00:31:29]  you know, trying to introspect what's going on or whatnot and, you know, you know, dealing with the bridge. I'm, I'm, I'm just
[00:31:37] , obviously I'm not just to complain about React Native, but it, it, it, this is definitely would be a very different development experience. Yeah, I was
[00:31:45]  going to probably on that point, like development wise, I think the hard thing with developers, developers typically don't have too much of an issue learning languages, but when you
[00:31:58] 're working on a development, that's in one language context, switching between languages is really tough. Um, and I think that's the thing. It's, it's
[00:32:06]  not so much that like there's any problem with doing Swift or Kotlin. Um, but when you are building a solid app, you are building a JavaScript app.
[00:32:15]  And so you'd like to stay in JavaScript the best you can, but yet not be limited to JavaScript. That's, that's sort of what NativeScript is trying to
[00:32:23]  give you. Um, do a solid development and, and have the access to the platform and in as much of a transparent way as you can from the language. So you
[00:32:33] 're not having to semantically shift your mental model. Um, that's, that's fundamentally. Yeah. Right. Yeah. And, and that, that makes a
[00:32:42]  difference. I mean, I'm not. Yeah. I, I, I do know, I guess there's probably less opportunities there. I was trying to make a comparison
[00:32:53]  with this. Like I would say almost a huge amount, like a huge amount of the effort on the website for like the last decade has been fighting performance to keep a
[00:33:03]  single programming model between client and server. Like that's, that's, that's like my summary of the last like 10 years of web development, because like we could,
[00:33:11]  we could do more optimal things if we like did different stuff on the server and the client and the JavaScript, you know, but on like a full stack dev as it
[00:33:22]  is today. It's nice that you can like write your application as like one solid or spelled to react app and have it work on both sides. Like the fact that you
[00:33:32]  want to server render anything doesn't mean you have to go change all your code and like switch and like be like now I'm doing this, you know, again.
[00:33:40]  So yeah, I, I can see a huge amount of value. The difference I guess in the web comparison in my head was that, that we can actually optimize because we
[00:33:51]  run it on the server to actually change what happens in the client. So there's actually huge advantages to, to making it the same code. Um, but, uh
[00:34:01] , maybe not quite the same, like from a, like a technical performance standpoint, but, um, I think the DX win is clear here. Yeah. I don't
[00:34:11]  want to over-speak Amar there too. Amar, I don't know on those points for sort of touching on anything you want to, uh, fill in
[00:34:19]  there. We're talking slow enough, which is good. Afraid we might talk too fast, but this is good. I think, I think native script, uh
[00:34:38] , by, you know, it's not just about switching context. That's one of the main reasons, but you will see that whenever you switch context, context to
[00:34:54]  a different language, you need a whole build system for that specific language and all the tooling, everything. And you need, you need all that set up into the same system
[00:35:03] . For example, if, uh, we talk about, uh, iOS and Android. So if I want to, if I want this, uh, any, uh
[00:35:17] , if I want to create any component, for example, if I want to have a date picker, uh, in native script and, uh, a date picker
[00:35:27]  in, uh, rec native. So in rec native, I have to write Java or Cortland, uh, Swift or objective C and not just that, but I
[00:35:42]  also have to understand how, uh, I'm going to work with the, uh, platform, how I'm going to build, for example, on iOS, I
[00:35:53]  have to learn how the pods work, how Xcode work and how I have to build that, all these things. I have to learn all this stuff just to access battery
[00:36:06]  level, check to how, how much battery. So are you saying that I don't have to dig into info.plist? No. Yeah. Yeah. Yeah
[00:36:15] . Okay. Basically. Yeah. And similarly on Android, it, it's even, it's even more for on Android, you know, there's like lots of other
[00:36:29]  files that you have to know, you have to learn how cradle works and all this. And it's just a lot of engineering to get to the, get to a
[00:36:40]  point where you can say that native script is already there by default. You just open your native script project and start writing JavaScript code. And it just gives you everything you need
[00:36:56]  right there in JavaScript. Yeah. Cause I'm just looking here. It looks like there's like a native script config and then a web pack. So like building this
[00:37:07]  up is a matter of a web pack plugin, basically in a config file. Am I, am I understanding this? Yes. Yes. Yes. Yes. Yes. Okay
[00:37:20] . That's okay. Yeah. I mean, that keeps things straightforward for people already familiar in the JavaScript world of things. Um, it's maybe a good segue to
[00:37:31]  look at actual demo, um, and sort of slowly walk through it. Um, because yeah, I think obviously let's look at some solid code, right? We've
[00:37:42]  been looking at a lot of native script. Let's look at solid code. Um, and let's sort of walk from familiar territory outward. Um, yeah, I
[00:37:50]  like that. And let's go slow. Um, let me see. Oh, um, I was going to mention one thing, you know, we talked about threading
[00:38:02] , you know, I think threading is talked a lot about around JavaScript and, uh, for years, you know, I think there's always been this fear of
[00:38:10] , you know, locking the UI thread, you know, in JavaScript and no way can you jam more things in the UI thread. No way. Um, I think
[00:38:18]  the key detail with platform development is you have to understand that when you're interacting with a platform language like Swift or Kotlin, and you're dealing with the view,
[00:38:27]  all view is rendered on the UI thread. Um, and so platforms often enforce, um, you to create and render things on the UI thread. That's how they're
[00:38:40]  fundamentally designed. Um, and so if you're going to make JavaScript do the same, why would you split the threading model? Um, the platform is fundamentally designed to
[00:38:50]  interact with the view layer on the UI thread. Um, now the other part of that is that in saying that it's often, um, left out that you can
[00:39:01] , because you're given the platform in JavaScript, you can also multi-thread, um, in native script, and you can do that in a broad number of ways
[00:39:08] . You can do that with sort of workers that follows a general web worker model. Um, you can also use the platform API to thread. Um, so, um,
[00:39:16]  native script is certainly multi-threaded. Um, and we wouldn't be able to work with it if it weren't. Okay. Yeah. That's,
[00:39:24]  that's good detail. Yeah. We, they came up very early on when we were talking about the differences, but, uh, the clarification helps because basically, as you
[00:39:30]  said, you, you have access to the native API. So you can always just do threads, I guess that way. And, and then support for workers. Um,
[00:39:40]  interesting. Yeah. Yeah. I, I, I, I'm not sure what kind of use cases, I, I guess the use cases there are similar to the
[00:39:49]  UK use cases you'd have for workers on, um, the web, right? Like if you have these very heavy processing processes, I imagine a lot of those things might
[00:39:59]  already be abstracted off just from the APIs themselves. Like, I don't know, like if you call an image processing API, um, natively, would it
[00:40:09] , it's first, you know, thinking would be to offload that on processing on another thread. I'm not sure. I just, you, you, you
[00:40:19] 're absolutely assuming all that. Correct. Uh, you know, I think workers and multi threading is, is used just as you would use it on the web, you
[00:40:26]  know, anything in a solid app that you feel like you need to put on a worker, you probably want to put it on a worker in native script too. Um,
[00:40:33]  so I, I don't know if you can see the screen. Um, is it, let me, let me share that now. Sorry. I was just laughing cause
[00:40:42]  I saw this line, please don't run V dom on a UI thread. And I was like, I was, I was like, what's going, what's
[00:40:48]  going on here? Um, uh, it was, it was a lot. You know how much the, the virtual dom non virtual dom stuff has been, uh, has
[00:40:58]  been a conversation, at least on the solid side, cause we don't use a virtual dom. Um, I'm, I'm actually kind of interested, um, how
[00:41:04]  that applies to native development. Cause before you guys joined the stream, I kept getting comments and where people were trying to tell me that stuff like this. Um, oh
[00:41:14] , what do you know? It's our same friend. Um, so I, I'm, I'm, I'm interested, uh, a little bit, uh,
[00:41:23]  about, uh, just, uh, I don't know, I don't know if you guys have an opinion or if there's any truth to this, but is there
[00:41:33] , is there advantages to using different models with rendering in native? Um, like basically I was never sure about native because when I designed solve, I designed it for the
[00:41:44]  dom in mind. It's a retained mode API. You're not like 3d engine. Like I'm just re-rendering this like FPS rendering the screen thing.
[00:41:53]  The dom sits there. So to pretend that it doesn't sit there is instantly a de-optimization. Like it's like you're like you're building a
[00:42:02]  layer so that you can pretend like you're throwing away something that doesn't get thrown away. So it like, in a sense, solid is lower level, um, than
[00:42:13]  frameworks like react because the reactivity directly interacts with whatever you, you want, you're doing, like say it's the dom. Um, and it's, and
[00:42:22]  it stays there in a retained mode sense it's doing mutation, which is like considerably faster. Um, in that, but I like, I, I don't know enough
[00:42:33]  about native, uh, like engines in behind the scenes to know if there's an advantage there, if they have the same kind of persistence. Or if we're just
[00:42:39]  adding an X, if like, if you know, the screen gets thrown away all the time, we're just adding an extra layer to pretend like we aren't like the
[00:42:47]  opposite. So, um, yeah, I dunno, eh, this is just a random thought that got me wondering, uh, is there any advantage to using frameworks, um
[00:42:58] , that do, uh, you know, these kinds of fine grained updates compared to other approaches for working, um, on the, with native script. Um,
[00:43:07]  I, I, I didn't, I didn't fully understand your question like, uh, yeah. Um, how do I rephrase this? Um, like the
[00:43:24] , the dom is something that is persistent. Like you, you mutate it. You don't like throw it away and re render. Like if in a 3d
[00:43:34]  game, like, usually you, you have these models, but generally when you go to render things, you kind of like build the scene and render it. And then like
[00:43:44]  every frame you, you basically throw it away and start over again. Whereas the dom is not like that. You, you have something that's sitting there that you just change
[00:43:52]  here, change here, change here. So when I built solid, I optimized for like change here, change here, change here, rather than like something that would be
[00:44:03]  re-rendered all the time. And I'm kind of wondering if native script benefits from that, or is that like, does it matter? Maybe native script
[00:44:11]  interacting at a lower level that it doesn't even really care. Cause like a B dom diffs. So maybe what native script gets in the end is just the small here
[00:44:21] , here, here. Anyways. Um, go ahead, Amar. It does. I think, I think it does benefit from that. It does benefit from fine
[00:44:34]  grained reactivity because if, for example, if, uh, we don't have fine grained reactivity and the whole view or component render, re-renders
[00:44:46] , then the underlying node. So we might also change and the props that, uh, that, uh, that don't need to be, that, that haven't
[00:44:57]  changed or values that haven't changed or effects that don't need to be run. And it's obviously going to make things relatively slower compared to fine grained reactivity
[00:45:08]  where if, uh, single value changes, then it just affects, uh, single, uh, view prop or anything in the native view. Okay. Yeah. So someone
[00:45:23] 's asked, are you asking a solid native script is faster than angular native script view native script? Um, I, I might be indirectly asking that. Um, but
[00:45:31] , uh, we probably would actually have to test it. I, I like, I, I wonder how much the overhead of native script is in the JavaScript layer versus the
[00:45:39]  native layer. But I mean, it would depend on the application. I think. It does. Um, yeah. I mean, ultimately always in the same, um,
[00:45:48]  mentality holds when you're working with JavaScript. I mean, you're always trying to execute as little JavaScript as you can, you know, even on the web. Right.
[00:45:56]  Um, you're always trying to kind of do, uh, a lot with a little. Um, and I, I think that's probably the advantage you have with
[00:46:05]  native script because you don't have to do a lot to get at the APIs. You need to do the job. Um, you know, you're not having to create
[00:46:12]  a lot of ceremony around those. Um, and so you can often write a lot less to do something. Um, I brought up this example of UI collection difficult data
[00:46:21]  source, because it's an example of like something on the platform that does do like a diffing mechanism. You know, and it's, it's, this is really
[00:46:30]  a data source. It's bound to a list. You know, a collection list. You think of virtual lists in the dom, you know, and recyclable rows
[00:46:36] , you know, same concept in iOS. Um, UI collection view difficult data source takes IDs and it'll do a diff on the unique identifiers to those IDs and
[00:46:47]  basically do a diff with the view, you know? You know, and so they're, they're similar mechanisms that play on native platform view layer, you know,
[00:46:55]  as you can. And, um, okay. Yeah. That's interesting. I, I mean, the only thing on a side is people have been asking for a diff
[00:47:01] able, um, like thing on the dom side for ages and we don't actually have it. Um, so it's, it's kind of interesting, but yeah,
[00:47:09]  I mean, that's where the details start mattering. Cause like, um, I, I, I had, uh, Greg, uh, from a framework called
[00:47:18]  Leptos who, who built a very, uh, he built something very similar to solid in rust and web assembly. And for him, um, serialization costs was
[00:47:28]  one of the things that had actually slowed down a lot of the, uh, previous, um, approaches to trying to do web assembly. Once it were more like react
[00:47:39] , um, what they were serial, like they were, they were trying to like what they were serializing and sending across was a lot more, um, just, I
[00:47:48]  guess the way they were implemented. And that was actually like a part of the slowdown. And he'd managed to take the signals and actually make considerable performance improvements to the
[00:47:57]  point that, um, his, his rust, what web assembly framework, um, is now faster than all the popular frameworks except solid. So like, yeah, that
[00:48:08] 's why I was just kind of thinking about these lines. Cause like, there's usually a trade-off between, um, not just the, say the overhead of the
[00:48:16]  JavaScript cost, but also the cost of what needs to get serialized over the wire and where it happens. Um, anyway, no, great, great point. And that
[00:48:25] 's a great, actually last point to conclude on before we look at this solid code, which is it's relevant to threading. Um, you know, I think
[00:48:31]  the serialization and the way that native script work relies on the engine being optimized to the point of which the marshaling is nil. Right. Right. And so
[00:48:42]  what native scripts focus on performance wise is making the marshaling as fast as humanly possible or technically possible. The, the faster that is the more, um, one-
[00:48:53] to-one with native speed you'll get. Um, so yeah, that's an important detail. And there are a lot of details we could dig into on,
[00:49:00]  uh, there's a lot of approaches there. Um, let's look at solid. So this is probably something that's close to your heart, solid start. Um
[00:49:10] , and it's a fantastic, uh, way to get up and going with solid. Um, you know, this component in the center, you know, this quick component
[00:49:19]  wired up the signals. We've got two routes here, moving around. We, we want to take this and venture out beyond, um, the browser with this.
[00:49:29]  And so ultimately, you know, what we're talking about is let's take that same, um, set up and let's run it here. And then let's take
[00:49:40]  the same set up and let's run it, um, here. And then let's take the same set up and run it, um, in a completely foreign and unre
[00:49:51] leased set up and run it here. Um, so the, the thing about this is that. What we want to be able to do. I think ideally, I
[00:50:01]  think fundamentally what developers want to do, you, you, you, you want to work in solid. And so you want to take every aspect of solid that you're working
[00:50:10]  on and not be hindered or somehow obscured in the environment in which you're running it. Um, and so when you run it on iOS, you don't want
[00:50:21]  to be running something inside of iOS. You want to be running one-to-one with iOS, right? Are you developing for iOS or you're developing for something
[00:50:31]  else? Um, and so, uh, over here, if I tap this, we can actually select this and see this is actually a UI button. This is solid,
[00:50:40]  but it's rendered as a UI button. And of course UI button is in the apple docs here. So everything about the way that that button behaves is one-to
[00:50:52] -one with the platform. Right. That's the same on Android. This is an Android widget button that you can look up in Android docs. Um, but we
[00:51:04]  can go down the line and look at what each of these are. This is a UI button label. That's actually an API inside of UI button itself. This is
[00:51:12]  a TNS label, which is actually just an objective C class inside of native script core that, um, bring some functions together to make it simpler to modify stylistic attributes
[00:51:23]  really lightweight. And honestly, I'd argue it doesn't need to be there maybe in the future it'll be removed, but, um, that's a UI label
[00:51:30] . Um, you know, same, same thing. These are all things that are part of UI kit on iOS. Um, and then down here, the image itself is
[00:51:38]  a UI image view, you know, so that's something else we can pull up here. All these things are browsable. This whole API that is in this doc,
[00:51:47]  um, is, is available to you. So you can grab the loaded instance off of this solid primitive, this, this image primitive, and you can grab the reference
[00:51:59]  and tap into anything that's documented here. Yeah, that's, that's pretty cool. We can move this around, um, inside of, uh, this and we
[00:52:10]  can view the hierarchy. What, what, what, what, what? Sorry, is this a visual editor I'm looking at? What, what's, what's going
[00:52:16]  on here? I actually moved the label literally off of the button. Um, so this is a neat iOS tool. Um, you can view the view hierarchy here.
[00:52:26]  Um, so, you know, this is like looking at the DOM element tree in the browser, but we're looking at a solid application rendered through native script. So we
[00:52:36] 're looking at UI views, um, which actually are part of UI kit on, uh, I spelled it wrong. Um, it's part of UI kit as well
[00:52:44] . So UI view, you know, these are all things that are one-to-one with the platform. Yeah. Um, let me get out of this here
[00:52:51] . Um, this is a tool called flex flex is just a, I think it's been around for years and years. Um, I don't even know, uh,
[00:53:06]  how much is maintained. It's just a really nice, like visual introspective tool for iOS. Um, but let's go back to, um, the fur
[00:53:16] thest out from where we started. So we started here in the browser. We're looking at iOS. We're looking at Android. The thing that's unique about these
[00:53:25]  two experiences, actually, let me move that back down because I did want to have it animate. So, um, if we click on this. Yeah, you have a
[00:53:38]  different router. I mean, that was the first thing I was thinking about because you're gonna use a stack based router instead of a, um, what do you call it
[00:53:44] ? The typical nested onion router. Um, I don't know if it has a name. No, that that's something I would love for Amar to speak
[00:53:52]  to a little bit. Uh, I know that's what we'll touch on a little bit here. Um, so what's happening when we route here is that this route
[00:54:00]  is actually tapping into a UI navigation controller, which of course is also in UI kit. Um, if I spell this right. Yeah, there it is. Yeah,
[00:54:13]  there it is. So when we navigate here, we're actually in a UI navigation controller, which is precisely the element the platform intends you to navigate with. Which means
[00:54:22]  you can tap into everything that the platform intends you to use when you navigate, which is transition coordinators. Um, and that's where you get these, um
[00:54:29] , you know, shared transitions. Um, you know, shared transitions. These are fragment transitions in the Android, um, docs, you know, so we get that
[00:54:37]  sort of for free. Um, core provides a high level sort of primitive API to deal with it. But if you peer under the hood, it's using everything that
[00:54:47] 's in here. Okay, nice. Let me, so go. There's been some requests. People are like, what's that vision pro thing that you showed for a
[00:54:58]  moment? Is that still? So let's, let's go back there. Um, so if we look at the furthest out from where we started the browser, right
[00:55:06] ? And this is sort of, this is probably the, I think the biggest fundamental point, which is we don't want to wait to develop our solid app somewhere that
[00:55:20]  we are not in control of. Right. Because ultimately you're the developer, you're on the hook to get the job done. Right. So when you have access to
[00:55:28]  the platform as it is one-to-one and you are not, um, walled off from it, um, you can go there. Um, without waiting
[00:55:37] . And so, you know, vision is not released yet. This is not going to be released until probably January, February next year. But the reason we can interact with
[00:55:46]  this is because native script is the platform API. So we're just interacting with all the APIs that are available there on vision OS. Um, and if I move around here
[00:55:56] , so I'm going to zoom in. Um, we'll take a look at this component, which is a solid counter component. We're going to look at these
[00:56:05]  components in a sec. This is TSX, you know, in a storage, uh, solid setup. We're navigating the same way, um, that we did there
[00:56:12] . But what's neat is you can see, unlike iOS, Android, and unlike what we're looking at on the web, we can progressively enhance features that are only available
[00:56:22]  on that platform. For example, um, if we back out, we can interact with, you know, um, let's see if we get right here now.
[00:56:34]  Oh yeah, made it real big. We can interact with, um, 3d objects here. So 3d solid logo. That is very cool. We can also
[00:56:44] , um, auto spin it. Let's give it a little rotation. Um, this, this, this makes me think this is funny. Cause if you've ever
[00:56:53]  seen create react app and like other solid to kind of clone of our, you know, where they, they, they, it spins, you know, flat on the screen
[00:57:01]  into this is like the next version of it. Now it's spins out of the screen. Yeah. I mean, obviously, you know, this is a new realm
[00:57:08] . Uh, we haven't experienced this. I don't think it's a mass, uh, culture yet. I mean, a lot of people have the 3d goggles
[00:57:14]  over the years, but, um, I don't know how, how proliferated it is and who knows if this division pro brings it more in full, but certainly
[00:57:23]  it's a platform that, um, you can do some neat things with. Um, and yeah, this is not a perfect 3d representation of the solid. So
[00:57:32] , uh, please, uh, please spare us here, but the neat thing is this was actually provided by the namescript community. Uh, honestly, Dylan and Sean,
[00:57:38]  huge thanks to building this. Cause it was really cool. I think they just pull it together in blender and, um, you know, vision pros interacting with, um,
[00:57:47]  3d stuff that's been around for years too. Um, this is giving you a way to where you can develop with, um, you know, APIs that are probably
[00:57:55]  a bit more approachable than they were in the years past. Um, but that's the point of all this is that we want to take the solid app where we
[00:58:02]  started and literally at solid start. And we want to be able to just keep growing with solid into realms that we can't do. Like just typically right away. That's
[00:58:15]  fundamentally it. That is very cool. Honestly. I, I, I've obviously seen, we have, I've seen 3d demos with solid cause we have,
[00:58:23]  uh, what solid three, but, um, it's a whole other thing now to see this with like the vision pro and stuff. This is just, yeah, this
[00:58:31]  is this. I, I haven't seen anything like this yet. That's really cool. The, uh, June solstice and the December solstice.
[00:58:40]  Um, yeah. Anyway. Yeah. What's kind of neat between these two models is they're tied to the same, um, rotation componentry that I have hooked up
[00:58:50]  in here. So they're actually controlling each other. Yeah, no, this is, this is interesting, right? Cause yeah. What we do with hardware and devices
[00:59:01]  and wearables and whatnot, it's just going to continue to, you know? Yeah. It's, it's one of those areas that is continuing to expand. So
[00:59:11]  this is really cool to just like get there in their ground floor, you know? Um, let's go, let's look at the code for this. So the
[00:59:20] , I think where we'll start is maybe the click component because it may illustrate in a mark. I'll let you sort of take this in the, in the Dom discussion
[00:59:28]  direction, because I, I think this is the more interesting debate that has been, I think around native script for a long time. Um, there are a lot of dot
[00:59:39]  processes around it. Um, and it is at times a difficult, um, decision to make on what would, what. What you could do. I mean, the
[00:59:51]  reality is anything is, is possible in this scope. So, um, let's look at the counter component. Um, the app itself is using this solid component. It
[01:00:02] 's a TSX, um, file. If we take a look at it, we can see we are exporting, um, the counter function and something everyone is probably
[01:00:09]  familiar with. Um, just a component that has the signal set up and that's the counter. This is what's being rendered on everything. We just looked at,
[01:00:21]  um, with no further change other than a small touch on the way we interact with the event. Um, because the fundamental difference on the web Dom, and this is where
[01:00:33]  the conversation gets interesting and we may need to pull out a little bit of this. Um, but we, uh, there's a click that's in the Dom naturally
[01:00:41]  right through Dom, uh, setup with mouse events. Well, generally on mobile devices, you deal with taps and right. It's such a simplistic example to talk about
[01:00:53]  because it illustrates the fundamental thing you really want to deal with. And there's a lot of ways to deal with it inside of this setup, the way it is dealt
[01:01:03]  with is that this button is a component itself. And there's two ways to do this option. B would be, we can actually wire up a tap and the click,
[01:01:17]  and we allow it to be naturally the button that's going to be rendered there on the web. The click would register naturally in the Dom, the tap would render naturally
[01:01:27]  on iOS, Android and vision OS. This is pretty simple, but the problem here is that typically TypeScript, you know, when you compile it through TypeScript, you
[01:01:41]  might get complaints that those types aren't, you know, inherently natural to the Dom, you know, on tap is probably not naturally in JSX for that particular element.
[01:01:50]  And so maybe you don't want those warnings, you know, and so another way to do that is you can actually come down here and we can detect whether we're
[01:02:00]  running in native script. And we can show just a button that's tapped when we're in native script and a button that's clicked when we're in the web DOM
[01:02:10] . Okay. So, and the button component that is getting passed is, is that a normal DOM element? It is. Okay. Oh, okay. So you guys
[01:02:20]  are leveraged. Okay. That's not true. Sorry. I noticed the tiniest thing. It's not even that important, but I under, now I see
[01:02:26]  what's going on. I guess it still works. Um, because we, we use class instead of class name, which is, uh, it doesn't actually matter
[01:02:35] . No, that, no, that's a huge detail. Right. And it's one I want Amar to talk about because this more comes down to type augmentation
[01:02:45] , um, than anything. And this is the aspect of it where really there's a huge opportunity for, for communities to be involved in and get into the bonfire
[01:02:54]  on these things, because there is a lot of potential, um, always here. I mean, I would, I'll preface in Amar, let me give this
[01:03:04]  to you because let's talk about the DOM a little bit, talk about the type augmentation, um, talk about the solid what's making solid run in iOS and Android
[01:03:14] . Yeah. Yeah. Cause one of the things that I, I didn't actually, I guess, cause there has to be the DOM. Sorry. I'm just
[01:03:22]  gonna, before you give the real answer, I'm just gonna speculate a thing. One of the things that's interesting about solid, that was different than some of the prede
[01:03:28] cessors of that did these kinds of things. It's like, like we don't use create element calls generally. We use clone nodes. Um, so like it, I
[01:03:37]  was never, this was one of the things that I was like, never sure that like I could do with like native script. When I looked at it was like,
[01:03:45]  can I clone nodes or like, would I have to use the universal renderer and have set up like specific, uh, you know, components that look like native elements or
[01:03:55] , or whatnot. Okay. That's my prefix. You can go and actually tell me the real answer. Well, yeah, Omar, you want to take it from
[01:04:04]  there. Okay. So, so the button we talked about, uh, and native script and in, uh, on web. So on web, a button is a DOM
[01:04:19]  element or an HTML element to be more specific. And in native script, uh, the button is a native element, uh, native, you can say native view basically
[01:04:33] . And yeah, there are some, some small differences. I think the, I think the, uh, uh, uh, the, uh, the, the prop
[01:04:48]  you mentioned class and the difference between class and class name. I think class also works with, uh, using, uh, dominator, but the problem here is mainly
[01:05:00]  that the lib dom, lib dom 30 or tier files, the, the types that are down types that are intrinsically available. And global are based on HTML and it
[01:05:13] , um, they have all the HTML elements by default, like button, uh, video, uh, audio, Dave, et cetera, et cetera. But, and
[01:05:29]  we are kind of integrating into that same system with our native, uh, button, uh, our native element or views. So, yeah. Yeah. I guess the,
[01:05:45]  the, the detail here, you mentioned something, uh, sorry. Was it dominator? Is there a. Dominator. Dominator. Dominator. Yeah. What
[01:05:55]  is dominator? Dominator. Okay. Okay. Yeah. So, yeah. Cause the truth, the, I kept on hearing about this stuff from, from this
[01:06:05]  person here. Um, that's actually what, what tipped me off on this originally. Um, yeah. So. He is, he is the creator of, uh
[01:06:19] , the dominator. Okay. Okay. And the, okay. And this is, yeah, I'm, I'm going to actually throw a link to that in
[01:06:27]  the. We, we have to mention you Kino song is a brilliant, um, you know, software engineer. She, she, um, engineered this and it really
[01:06:37]  is what has enabled solid, um, in native script. There's, there's other uses for it, but that is certainly, um, she is to think, um
[01:06:48] , for that being made possible. The interesting thing about dominative is that you could use it to render any framework in native script. So historically over the years, you
[01:06:58]  could bring in different aspects of what dominative is doing in other flavors. Like, you know, angular view and Svelte, you can bring them in, in
[01:07:08]  a similar way. Dominative almost creates a more, um, general approach. It could be applied to bring in all flavors. And that would actually, uh, remove the
[01:07:18]  need to have any other Dom layer to do, um, any JS framework with. Right. Yeah. I think, I think I got my answer here in terms of
[01:07:29] , uh, using a very simple universal render, probably similar to what I built actually on the stream. One, one of my previous streams, I used our universal render to
[01:07:39]  make a basically pass through to a Dom API. I could, I could see how, if, if you didn't support certain, um, features, you could make
[01:07:50]  a universal render that would, would go to a basically, uh, what, like this kind of Dom API that I'm looking at here. Okay. Cool. Very
[01:08:00] , very cool. Yeah. So this is used by solid. It's, is this used like by Svelte as well? And let's see view. Yeah.
[01:08:09]  I'm actually like scrolling down here. Um, not yet, but there is a lot of talk to do so. Um, yeah, that, that is, I could
[01:08:18]  see it likely to happen maybe in the next year. Um, I think the, and, and Amara, maybe you can speak to that. I think the domin
[01:08:29] ative, there may be a couple other things that needs to be done either typing wise, um, or maybe some adaptations in core. Core has sort of an intrinsic relationship with
[01:08:39]  any Dom layer. Um, the reason, yeah, that's sort of the fundamental thing you can do native script without core. Um, and that's something that really wasn
[01:08:49] 't talked about a lot, um, in the past. Yeah. And I can see actually, sorry, I said Svelte, Svelte would be harder
[01:08:55]  than the others view and solid and react all have universal renderers. So they're set up for this Svelte. You need like a custom compiler, but I think
[01:09:03]  once you did that, then you could probably, and actually with Svelte changing a Svelte five, um, to be more similar to solid. Um,
[01:09:12]  yeah, I, I, I, I don't like just hold up a whole lot. Like I think in a couple of months, the way Svelte works is
[01:09:19]  going to be completely different anyways, but I think it opens up the possibility to make this easier. So, okay. It's just, just, just, sorry.
[01:09:25]  This is just me speaking out loud. I'm, I'm all good. Amar, what is it with Dominative if, if we were to use it for
[01:09:34]  every single flavor right now, what would stop us from using Dominative? I think, I think it's just about making it a switch. I think Dominative is
[01:09:52] , uh, really amazing because it just, uh, provides you everything you would expect from, uh, top. Uh, for example, uh, it, it,
[01:10:12]  in a way it gives you, uh, sort of a browser. You could say where you can, uh, you can run a Svelte app or a solid JS
[01:10:26]  app or a red or a blue or an angular app. And it gives you the best framework you need to run. I hope, I hope you've got my point
[01:10:39] . Yeah. Yeah, no, this seems, this seems like very cool technology. Um, uh, yeah, that's, that's interesting. I, I, I
[01:10:49]  always wonder about like the costs of these kinds of layers, but like, I think, cause this is what you're trying to get out of it. It's,
[01:10:58]  it, it makes sense. Like, uh, for example, like when your server side render stuff, you only render stuff once and never updates. So like a dom representation
[01:11:07]  is overkill. So you don't want to bring JS dom onto your server, but this is the application environment. This is handling the updates. This is providing that
[01:11:17]  interface. Um, I, the fact that you can just like write basically solid code and it just works is, is incredible here. Actually, we actually dominative is,
[01:11:33]  uh, dominative is based on, on dom. You and dom by, by JS Miller. Uh, yeah. And it, the, the, the great thing
[01:11:44]  about dominative here is, or why is it able to do this? Because, uh, in native script history, you see that before dominative, nobody has properly
[01:11:59]  tried to do this, to like write a single dom that just works with every, uh, framework or every JavaScript framework up there. Obviously right out through, uh,
[01:12:12]  angular all have some sorts of, uh, some sort of dom underneath, uh, in native script, which they use to interact and to keep it to really, really simple
[01:12:28]  and small. So, because obviously the more JavaScript to add, the more JavaScript is there, this, uh, there's, this general assumption that if there is more
[01:12:42]  JavaScript, it's going to lead to a slower app. For example, uh, many, many, many people, many people in our community have, uh, uh,
[01:12:56]  assets that they want the dom layer to be. Uh, native in C plus or in some other day. And dominative is great because it is in JavaScript. It
[01:13:09]  is, uh, simple enough, fast enough to actually be a great viable option to be used in production. For example, right now, uh, with solid.js,
[01:13:23]  it works really, really well. And almost as good. And sometimes in some cases, even better than other frameworks that are using a dedicated stripped down dome. Nice.
[01:13:39]  Right. Yeah. Cause like, well, you gotta put it on the comparison of what we're talking about here. Like, I imagine that this is much less overhead than
[01:13:48]  say, firing up the web view and getting it to do, like, do, do that thing. This is, this is still much, uh, like a more
[01:13:56]  direct path to it. And, um, yeah, if it's a minimal dom representation, that's highly performant, then like, um, yeah, I mean
[01:14:07] , you, the, the cost of that layer is not gonna, gonna shift things compared to, to other, other stuff. Especially like, if you think about the
[01:14:16]  fact that like, if they're using like virtual doms and diffing and we're not doing that. So like, this, this, this is almost a pass through
[01:14:23]  at this point, at that point. So, yeah. Yeah. Yeah. Yeah. With, with actually with native script, we know that we are sitting on the
[01:14:33]  fastest JavaScript engine in the world, which is V8. Yeah. And the, one of the, one of the things that make native script, you can say that
[01:14:42] , that is the, uh, main stepping stone to improve performance in native script is, uh, not the code in JavaScript, but the way we access the native API,
[01:14:57]  because that's where most of the time is spent. Uh, because, uh, if you take the example of Android, uh, the V8 engine on Android has
[01:15:09]  JIT enabled, right? Yeah. And every time you have some piece of code that needs to run many, many times and is expensive, uh, JIT is going
[01:15:19]  to kick in and it's going to speed up, speed up everything a lot. But what comes, uh, as a hurdle in this is that, for example,
[01:15:31]  if you want to draw a native view and to create a view or create a DOM node in more simple language, if you want to create a DOM element, uh, a
[01:15:44]  view or a div or anything in native script. If you want to create a native script, then you have to go to the native side. And whenever, if you
[01:15:52]  are accessing the native code, then it means that JIT can't work. Yeah. So that's, that's one of the, one of the things, the DOM
[01:16:04]  layer here or the dominative is really, really lean and simple. It's just, uh, if you look at the dominant of code, it's just a single
[01:16:13]  JavaScript file with like 200 lines of code. That's it. And it's, it tries to minimize and, um, uh, and, you know, you know,
[01:16:26]  has like, um, put in every single optimization that is there that could be possibly done to reduce the overhead. Even though the overhead is really, really minimal. For
[01:16:37]  example, if you just, if, uh, if you remove the native side or facing the native native views and you just, because you can run dominative, uh,
[01:16:50]  or undom outside, uh, the native script without native views. And if you run it, you will notice that it's many, many times faster than maybe some
[01:17:02]  other alternatives like happy dorm or. Yeah. Yes. Tom, which are obviously, which are more, more feature complete and have a proper complete API. But that's not
[01:17:14]  the goal here. We want to be able to have enough, which is fast enough and gets the job done. Yeah. The, the other aspect of this that I
[01:17:26]  think is important in this conversation is that core intrinsically tied to dominative. So dominative is interacting with core involved. And if we look at a dependency of a
[01:17:39]  typical, you know, solid app running when native script involved, you'll see the solid, um, community package. This is actually what wraps up dominative with a
[01:17:50]  solid, um, um, core itself right now, you would typically always want to use it, but this is an optional dependency. Technically speaking, you could actually run without
[01:18:02]  core involved. Core is just the singular primitive, um, that you're probably more likely to want to deal with than, you know, the platform directly. So core
[01:18:13]  is sort of making it a bit cozier for you. It's not that it's technically, um, required, but core itself comes with types on its element tree.
[01:18:26]  And there is a pull request from Jamie Birch, who, um, is another brilliant engineer. He, he also had done this last year. There's been a lot
[01:18:36]  of debates on this. Um, and the biggest part of the debate is performance. Everything that's done around native script or put into it gets a lot of scrutiny in
[01:18:47]  the performance realm. So, you know, any debate that's going to be hot, um, around changes in native script are often going to teeter on the performance scale
[01:18:57] . And so the big debate in, in this dom, um, typings adherence, this is trying to make core more natural with the dom type, um, in
[01:19:08]  event flow. And it early on, it sort of ventured off that territory back in the mid, you know, 2016. I mean, certainly. Yeah. 20
[01:19:18] , it kind of ventured off in naturally. So I don't think there was any, you know, mal intent there, but obviously it sort of ventured out.
[01:19:24]  There's been a lot of efforts to kind of bring all the JavaScript runtime bodies together. You know, winner CG for one is doing a great effort to try to bring
[01:19:33]  those, um, at least baseline specs in line and efforts like that really help. Um, uh, groups like us, because we can take that spec and say, okay
[01:19:41] , now we have a target that we can, at least that, that we know the whole community can agree on. Um, and so that's the target we we
[01:19:48] 're, we're shooting for. We, we want the whole, the winner CG baseline spec to be adhered to one-to-one in core. Um, that
[01:19:56] 's beneficial for a lot of reasons. Anyone who's going to approach, um, you know, and just develop in, in JavaScript land, uh, with native script
[01:20:03]  involved, they can expect those things to be one-to-one to spec. Um, but this is an attempt to modify core, um, to kind of break all
[01:20:13]  those past, um, divergences off and bring that, um, typical event loop that you expect with the Dom, where you can prevent propagation. Um, where
[01:20:24]  you can deal with all the, um, event callbacks in the way that you would in the Dom, um, stop immediate propagation, things like that. The there's
[01:20:35]  performance benchmarks, you know, that we're done here. And so, you know, a lot of the scrutiny is around these, you know, there are people on the
[01:20:42]  working group around native script who are absolutely. They don't want to see a smidgen of performance lost in anything. And I think it's a tough debate because
[01:20:52]  this would bring a lot of ease to native script developers. It's certainly when you're starting, because you generally, when you start developing with it, a lot of what
[01:21:01] 's in this PR you expect to just work. Um, you know, and so, but then there's a lot of people who've worked around native script and they,
[01:21:10]  um, they would rather have the extreme performance side. Yeah. And so it's, it's a, it's a very delicate balance. Um, and so there
[01:21:17] 's even been debates to say, okay, well, can you bring this in if you want it? And maybe the default template sets you up with it, but you can
[01:21:24]  remove it if you don't want it. If you're a, you know, um, yeah. Yeah, this is a tricky one, especially whenever you come to
[01:21:33]  release a project that defines itself on its performance. People will never want a regression there, even though reality is often that there's more edge cases that exist than what you initially
[01:21:43]  built for. Um, yeah, this, this is, this is a, this is a tricky one. The, I mean, generally speaking, everyone wants this.
[01:21:52]  Um, I, for one can speak personally. I would love this. Um, and I think it's a great idea to, to, to bring it, to bring
[01:21:58]  it in. Um, are these numbers final? No. Um, like obviously there's a, there's a lot of optimizations that can be done. As Am
[01:22:06] ar spoke to a lot of the DOM implementation here can actually be moved into a native. A lot of core really originally with native script was done actually in native land. It
[01:22:17]  was actually adapted in JavaScript. Um, sometime 2014, and it made it a bit easier to contribute to, um, because obviously it's easier to contribute to a JavaScript layer
[01:22:28] . But the reality is a lot of what's in this, uh, repo and what's in packages can actually be implemented elsewhere. Right. Yeah. Okay. Yeah
[01:22:38] . Um, but that is the, that is the power of native script because the fact that you can't do these things in JavaScript, you know, like you can like
[01:22:50]  interact with the native layer in JavaScript. It's going back. Right. Cause someone earlier while we were talking was asking still about like, what about keeping up with the
[01:23:02]  different platforms or what about the differences, you know, fragmentation between Android and iOS and all this kind of stuff. And I was thinking for a second and I'm like
[01:23:12] , the thing is if it's in JavaScript, anyone can write the, the, the interface. Like if you want the build once run anywhere kind of thing, you
[01:23:21]  can build a layer on top. It's like when people build component libraries, they're like, like the built-ins already have a certain amount of this. I
[01:23:32]  think if I, if I, if I saw it earlier with the dot iOS and dot Android, but obviously it's more than just like use a different base, you know
[01:23:39] , from a different platform. It's like, there's like things that are just different on the way things work as you kind of progress further away from the most baseline
[01:23:49]  primitives. And if you care to abstract those, I mean, it's, it's just adding another layer somewhere and it's all in JavaScript land. So literally anyone
[01:23:58]  can do that. Yeah. The counter example is, is good to, you know, a good example of that it's, it's at least concrete and small enough
[01:24:06]  to where you could see how that could apply to anything. Um, you know, this could certainly be wrapped up as a solid library. Um, and it could be an
[01:24:14]  adapter you can add into your project and everything would work. You wouldn't have to think about it, right? You're just, you're building yourself up as you always
[01:24:21]  would. And things just work as, as you would expect. Um, you know, so each, each, each flavor, if you will, can bring that along
[01:24:32]  with their community. The community can decide how they want to do that. Um, and the aspect that we're trying to play a role in is just, um, is
[01:24:42]  there a way that we can help provide a baseline? And maybe dominative is that, um, that kind of helps create that, uh, common. So anyone can engage
[01:24:49] , uh, when they're script an easier way. Can I see the project a bit closer? Can we open the like file tree for a second? I just want
[01:24:56]  to, I just want to see what, what we're dealing with here. You mentioned it was like basically a solid start project type thing. We have a components folder.
[01:25:04]  Some like what, what, what does the native script project actually look like here? So this is solid start with the server side piece in it. Um, what we're
[01:25:15]  doing is we have a native script solid app here. Right. And this, what we're seeing here, here in on vision is this right here. Yeah. The
[01:25:27]  counter component itself is what we have written once. Right. And then we have a few buttons that we kind of stuck in, I guess. Yeah. Just what, what
[01:25:37] 's the, what's the project look like? Can I see like what the layer, can we go back to the file tree? I just want to understand what I'm
[01:25:41]  looking at. Yeah. Yeah. This, this is a NX workspace. It's got solid start in it and it's got a native script app. Right.
[01:25:49]  This is what's addressing Android iOS vision OS. And yeah, this is the actual solid start web deployment. Right. So the, the, the, can I look at
[01:25:58]  the native script? Hello world. Um, that one again. Yeah. Okay. So there's, there's that where we get the, the builds. Okay. There
[01:26:06] 's a plat. What's the platforms folder? I'm just curious. Yeah, no, let's, let's dive into this. There's actually, I wanted
[01:26:12]  to dive deep into this, depending on how deep you want to go. Um, so each of these are the, um, natural platform projects. So this is something you
[01:26:22]  can open. Green all. Folder in Android studio. Yep. You can open this. Um, and this is an actual XC workspace. You can open it in
[01:26:30]  Xcode. Um, and let's open it. We'll open it in Xcode. This is a vision OS Xcode project. So you can open that. Um
[01:26:37] , but let's open like the iOS one. Um, let me stop this and we'll do it this way. Um, and I'll open the workspace file.
[01:26:51]  Um, for now, most, not all the time, but, um, most of the time that you're interacting with platform projects by way of native script. You
[01:27:01] 're often have at least an iOS world or Apple world is an XC workspace file. Um, mainly a pods that come in. Uh, I think the only pod that
[01:27:10]  we have in here is flex. Um, that's the actual debugging tool. Um, that's the actual debugging tool. I just had that loaded for demonstration purposes.
[01:27:15]  If that wasn't here, we would have no pods. We'd only have an Xcode project file. Um, for those that are, um, sort of familiar with
[01:27:23]  that process. Um, a couple of things of interest in the way that, um, native script structures, the platform project, you know, this is the, um
[01:27:32] , sort of bare minimum. This is our JavaScript code bundled by web pack. Now this could also be bundled by something else. Maybe it's bundled by
[01:27:40]  Vite. Maybe it's bundled by bun. Um, right. It doesn't really matter how, you know, it's bundled as long as that bundled
[01:27:49]  code represents common, you know, ESM in consumable JavaScript, the engine will understand it. Um, so this is just the way that web pack bundles the code
[01:28:01] , uh, inside. This is LinkedIn to, um, the Xcode project. So this is pretty, um, standard Xcode project stuff. In fact, everything
[01:28:12]  within the realm of platform project setup is very much normal with what you would see with any platform project. Um, we can look at frameworks that attach that there's that X
[01:28:23] C framework that I mentioned. Um, so the XC framework itself is the, um, that's the engine itself. Um, this engine is embeddable outside
[01:28:32]  of this realm. So that XC framework is well. There's some blog posts on this, but you can embed native script into platform projects too. So you don't
[01:28:40]  have to, you don't have to necessarily even start with solid. You could start with a swift project and then you could bring solid into it. And you could have some
[01:28:47]  screens that are solid and some screens that are swift UI. Um, so it can go any number of ways that you want it to, um, NS native sources is
[01:28:58]  interesting because you can include, when I mentioned earlier, you can write as much in JavaScript as you want, or you can, um, go in objective C, you
[01:29:08]  can go into swift UI. So if you have swift UI devs on your team, like they can work with swift UI just the way they normally would. You can open
[01:29:15]  the platform project. Swift UI would be in here and you can interact with it, um, the same way. Right. You know, I can go in this and
[01:29:23]  every aspect of how you would interact with those files is sort of intact. These are all links to the actual source file. So any change that you make inside of these files
[01:29:34]  is actually tied to the project itself. Um, you know, that's, yeah, I guess, I guess my question is like, is it hard to migrate version?
[01:29:42]  I know react native has gone better over the years, but I used to throw away my project and remake it. every time there was an update for ages and ages and
[01:29:50]  ages because they would move something. And then it was like impossible to actually reconcile it. Um, we, we've never had to do that over the years. I will
[01:29:59] , I will speak of the, the exceptionary case in 2020 when, um, when the project became under open governance, we made a very difficult decision to make the jump
[01:30:12]  to ESM, um, from common JS. Um, the, the only reason that we did that primarily was to alleviate, um, a lot of the cross common
[01:30:23]  JS and ESM pain. Um, that, uh, you know, I think a lot of people in JavaScript community still deal with. We really wanted to have one common
[01:30:31]  modern base. Um, so yeah, everything is ESM based, um, that is in core. And, you know, that time period was definitely tough. Um
[01:30:42] , because there were a lot of third party plugins that were still in the common JS model. And, um, we, we took an effort to try to help update those
[01:30:50] . So, but yeah, we're, we are glad we are well beyond that now, but that was a general JavaScript ecosystem challenge. Right. Okay. Yeah.
[01:30:59]  Yeah. Yeah. It was just that, I mean, I know it's gotten better in general and stuff like Expo came out later and all this stuff. It
[01:31:08] 's just my, it was just my experience. So like when I look at this, this is that, that's all I can think about in my head is just like
[01:31:14]  how impossibly difficult that was back in the day. But I mean, what you're pointing out here is that you have access to the native modules, like as they
[01:31:22]  are, and then you interact with them native script stuff doesn't really impact the other stuff. So you can still like interact with the other pieces, like as you'd expect
[01:31:32]  to, without actually having any kind of repercussions. So, um, that keeps it flexible so that you can bring that other stuff in. Yeah. And I should
[01:31:42]  say actually the model, this is often lost, I think, and I forget to mention it myself because I kind of forget about it, but the platform projects are dispens
[01:31:50] able. So one very important mental approach that native script took is that the platform projects are dispensable, meaning that the config that's in place and everything that you set
[01:31:59]  up around the project, you can totally delete the platforms project. In fact, no project out there, there may be a few exceptions for very interesting reasons. They don
[01:32:10] 't commit that to GitHub. Right. And so, yeah, any developer that's like working on, you know, native script bound project, they're going to clone the
[01:32:16]  repo. And when they run it, it's going to auto generate the platform project from them. And it's going to actually resurrect that project in the same form that it
[01:32:23] 's been worked on from the config settings. Yeah. Yeah. Okay. Gotcha. Okay. But back, look, can we go back to the, go back to
[01:32:29]  the, uh, VS code? Okay. So yeah. So I see. So then you got the, the actual platform projects in there specifically. Um, and then the
[01:32:39]  source folder is what I would expect. What, what, what's the, what's the entry point? The index JS? It is. Okay. And this calls
[01:32:47]  the native script community solid JS render function, which is a wrapper over DOM native and then, um, grabs. Oh, that's cool. Like it actually does like document
[01:32:59]  like first element or whatever, like the actual. Yeah. Okay. Yeah. Like it just treats it like the same, the same way. And then from there, um
[01:33:10] , okay. Application run. So there's, there's, there's two things here. There's the render and then there's the application and the create is the
[01:33:18]  document. So native script needs to know about this. It needs to know the root node. That's going to be basically the root window of the app. It passes that
[01:33:31]  along. If we, I'm probably most comfortable in iOS. So I can speak to that probably the most, but like UI application run, when that occurs on iOS,
[01:33:41]  um, it will. It will use what is created here as the root, uh, window, uh, and root view controller. So, um, when application run
[01:33:52]  occurs, you're basically tying the JavaScript engine to when UI application runs and that becomes your window. And that's why you see this here. And that's why you
[01:34:01]  see this here when the app boots in an embedded situation, inverse situation where you're booting, say, Swift UI, and you have, um, native script embedded into
[01:34:08]  that. And you're opening native script scenes. It's sort of inverted. Um, Swift UI takes on the main window, and then you can spawn windows that are native
[01:34:17]  script bound. Um, it's pretty flexible in that regard. Um, it's also kind of overwhelming that regard because you can kind of do some pretty wild stuff there
[01:34:28] . Okay. All right. This is a good boundary of where core line resides along dominative because application run is coming from core. Yeah. Yeah. Right.
[01:34:43]  Yeah. Yeah. So that, and that's where it links together. Yeah. Sorry, Ammar. Basically, basically, you can see that, uh, if
[01:34:52]  you go line by line, uh, document, for example, there is, uh, two things. It represents two things. One, it represents the document, HTML document
[01:35:08]  element. And the second thing it represents is, uh, native script, uh, view. You can say. So it's both things at the same time. Document
[01:35:19]  is basically a, uh, native script frame, uh, view. Yeah. Native script frame view to translate that for others is a UI navigation controller. Yeah. This
[01:35:33]  is, this is, this is, this is the cool thing about, uh, dominative, because it merges the dorm with the native script views, uh, with
[01:35:45]  using mixing. So it basically patches every, uh, native script view class and add the missing dorm methods, like create element and every, uh, and everything else that's
[01:35:59]  needed. Um, okay. Yeah. Uh, what, let's follow down the path a little bit further here. Cause we started on the, it looks like the
[01:36:12] , we started on the solid side from app, right? So if I, if, if, if, if app is, yeah, what do we got here? So
[01:36:20]  we got some specific stuff here, but, uh, okay. Stack router, here we go. And with routes. So there, there is a solid router that someone has
[01:36:27]  put together. Here it looks like worst. Yeah. Yeah. Tell us about the router is I'm not so curious about this. Okay. I, I created it
[01:36:37]  basically with data script. You don't actually need, you don't actually need, uh, uh, proctor or, uh, navigation. It's everything. It's
[01:36:49]  already there in the core and you could just do it bare bone. So that's it. Yeah. I do a lot of rec native and direct. So I was
[01:37:02]  basically inspired by crack navigation and how that works. So I created a sorted navigation library for it. Nice. Yeah. No, that's, that's, that's
[01:37:14] , that's, that's awesome. Um, one of the things that I'm doing right now, I mean, it probably doesn't really apply here, but I let
[01:37:22] 's, can we, can we look at the router for a second? Is that what router TS is? Or is that just like where they're like they're underneath
[01:37:30]  index? Yeah. So the create stack router. Um, can we look at the source for this somewhere? Okay. No, that's fine. So that is the
[01:37:41] , okay. That's fine. It's okay. I, I, I, I, I, I, I, I got what that is. I was just wondering
[01:37:46]  where the routes, the routes are defined as route files. We can go back to app. Sorry. Um, just, I've just, yeah. And then it takes
[01:37:55]  the, okay. So the, the, the whole routers from that library. Um, yeah, no, one of the, one of the things that I've been
[01:38:02]  working on, um, Um, with solid start, not that I, I wonder if it'll apply here is actually pulling the router out of the meta framework. So
[01:38:09]  like the router will be swappable in the future that people can start a solid start temp template and send it to, I guess client side rendering true. Right. Cause
[01:38:21]  there's no like server model here. Right. Like it's, uh, it's, uh, it's, uh, it works the same as kind of like a
[01:38:27]  single page app. It's like client render here. And then it could be possible that. That the file system routing actually could work directly into, into this. Cause
[01:38:40]  I I'm, I'm not seeing it here, but I'm gathering home and settings are just imported at the top of the file somewhere. Um, Right. Like
[01:38:48] , yeah, exactly. So like I'm, I'm picturing, yeah, it'd be interesting to, uh, this is just one of my own personal kind of
[01:38:57]  thoughts here. Cause I, I I'm trying to design solid start to be, uh, fairly agnostic within the solid ecosystem. And this is a prime example
[01:39:07]  of where I might want to use something other than solid stock router. And it'd be really, I've been working on pulling it out of the framework that such a way
[01:39:20]  that people could still leverage the file-based routing system if they wanted to. So like they could, you could base, like solid start would give you the, the
[01:39:28] , the route config more or less. And then you could plug that directly into say stack router. Um, so this, this is just, it's cool to see an
[01:39:39]  example where that would actually be beneficial. Um, because yeah, I, I, I'm, I'm, I'm trying to think right now. And I'm getting
[01:39:40]  ahead of myself a little bit, but of that future where people are building these things. where they're like, they, you know, have a mono repo maybe.
[01:39:48]  And they have like, I mean, I guess one of the challenging parts here is there is a slight difference probably between solid web and solid this. So that like, I
[01:40:05]  don't know if components would translate directly across. Um, I think, I, I, I, I think they can, uh, right now, uh, it
[01:40:16]  might be, there are a few, a few solutions to, uh, having a single component layer that works on web and, uh, on the native side. Speaker
[01:40:32]  1: Yeah. Cause I mean, I guess, I guess everyone hits this, right? Cause like even with, uh, react, uh, native, it's not
[01:40:38]  like you have divs, you have view or whatever. Speaker 1: Yeah. Yeah. So there must, people must be taking approaches like that already. Speaker 1:
[01:40:49]  I think we, we are, we have actually even for the past year, we have actually been working on, uh, native script Mason, with, uh, native
[01:40:59]  script Mason, which basically wrap, uh, Taffy. I don't know if you know about Taffy, but Taffy is a standards compliant, uh
[01:41:06] , flex and grid. Um, you could say a way to draw a layout with flex and grid, uh, natively. Speaker 1: Interesting. Yeah. No,
[01:41:17]  I'm, I wasn't familiar. Speaker 1: Yeah. Yeah. So with, uh, by having that, we could probably, we could, uh, we could
[01:41:25]  have probably, uh, Speaker 1: we could, we could have probably a more standard, you could say a more standard, uh, component in native, which would
[01:41:35]  work much closer to, uh, div on web. Speaker 1: So for example, if you can have, uh, for example, if you, you have in native
[01:41:44]  script, you have block layout. Speaker 1: Flex layout, grid layout. Those are the most common ones that are used. Speaker 1: So if you have those
[01:41:55]  in a component, you could have, uh, a single, uh, view or element similar to react native view, which could work even better. Speaker 1: That's
[01:42:11]  interesting. Yeah. I, I, I'm gathering, this is just an area of consideration exploration. I just, it's where my head goes to when I see this
[01:42:17]  stuff and the work that I've been doing in solid start very specifically. Speaker 1: to pull. I didn't think about it this way originally, although I was
[01:42:25]  talking to guys from Tori last week and they actually pointed this out to me is that by pulling. Speaker 1: Certain aspects of like specific libraries out of the core of
[01:42:36]  the solid start, you know, metaphoric, whatever you want to call it starter. Um, I'm also pulling out things that are say maybe web specific, you know
[01:42:42] , like now it leaves it open for, for these other platforms to be able to expand. Speaker 1: on them in a way that it doesn't feel like it
[01:42:49] 's fighting with it or that like extra stuff getting included that doesn't need to be there. Speaker 1: Definitely. I think that's, yeah, I think that's
[01:43:01]  really, that's really important for integrations like solid native. Speaker 1: Uh, with native script or, or even some other cases, certainly because it basically,
[01:43:20]  uh, it simplified a lot of things. Speaker 1: For example, if I have a core solid router that I can use on, uh, with native script by
[01:43:35]  making some, some bindings, native bindings to it, like providing it, uh, how it's going to navigate the page and everything. Speaker 1: Then
[01:43:44]  it's, it's going to make a lot of things much more simpler than I don't have to write a dedicated level like solid navigation. Speaker 1: Yeah, I
[01:43:54]  mean, yeah. Okay. That's, that's another way to take it. Um, yeah, that's, yeah, that's, it's, it's,
[01:44:01]  it's, it's definitely interesting to see the potential here. Cause, um, this, this is, this is kind of like the thing you hope for back.
[01:44:13]  Like, like I, I, I worked at a startup for almost a decade and at the beginning of the time, we just had an iOS app that we contracted out to
[01:44:21]  someone built and we were mostly JavaScript developers. And then we had a react native app and it was very different than our web app because it used completely different technology because we were
[01:44:30]  not react developers. And then like to get to a point now where you, you, you know, or very close to where you're just like, okay, I'm
[01:44:38]  just going to like boot up this project, set it in the mono repo. And then just like go, okay, here's the website, here's the native app
[01:44:45]  and have everything just kind of like be set up there in front of you. And just kind of like interchangeable seems like amazing. Like I, I, I haven't
[01:44:54]  seen, um, native script in this kind of level of detail yet, but your explanations have definitely got me much more excited about it than I have been. Cause people
[01:45:04]  are always like, you know, the solid have a native solution. And I'm like, uh, yeah, there's people working on some stuff. Um, but you
[01:45:12]  know, we, you know, we, we haven't, you know, taken any kind of official stance. Um, this is, this is very, very compelling
[01:45:22] . I gotta say, um, just, just seeing how easy it is to approach the native APIs. And then just like basically just build out your view, like your
[01:45:33]  view like this and just have it like work, you know, like pretty well. It seems the, the working group sort of unanimous, um, agreeance on
[01:45:44]  this or involvement with open JS foundation is really to make native script a natural extension to the JavaScript language itself. Um, with the standards all intact. So, you know,
[01:45:55]  to the extent the winner CG effort, um, we get it across, uh, the line, which I think that's going to be in 2024, but, um,
[01:46:04]  the intent is definitely to make it a natural and very seamless extension to the language itself. Okay. Yeah, no, that's another, another thing that makes this even
[01:46:16]  more better or amazing is the fact that for example, if someone create solid native, that is not based on native script, just let's imagine it for a moment. So
[01:46:31]  they have to, they need, they need a complete ecosystem. They need, they need lots of things that they have to work on with native script solid. You have
[01:46:44]  all these things already there. Everything, every plugin and every plugin view that works in native script works and solid just automatically. So you don't have to like build everything from
[01:46:57]  scratch. You have lots of things already built, for example, one of the, one of the, one of the most common pain points of react native is list and
[01:47:10]  virtualized list. And it has always been a pain with native script never had that problem. Yeah. Yeah. Yeah. Yeah. Yeah. Are, are like
[01:47:25] , are there. Yeah. I actually have, I actually, yeah. Yeah. I actually have an example. Yeah. Cause I'm just thinking in my head, like
[01:47:34] , what is it different here? Cause you're right. When I was using, um, react native back in the day, I had special components to handle stuff like
[01:47:42]  lists. Right. I didn't just like do a solid, like I didn't just do like a dot map over something. I actually had specialized components. Um,
[01:47:52]  is like, if I wanted to make, you know, a scrolling view or something, um, with native script, what does, what is it's a component I,
[01:48:01]  I import then. It's a list view. So this view is a primitive that comes from native script core and it maps to UI collection or UI table view on iOS.
[01:48:14]  Um, and I was just going to pull it up right here. This one. And core is very easily browsable. It's a, it's a pretty,
[01:48:24]  um, kind of dry, straightforward, you know, implementation. Probably the only thing that's unique for JavaScript developers when they view this stuff is this. This decorator is
[01:48:33]  actually, um, any decorator where you see this is going to be on top of a extended native class. So UI table view cell, as we've been looking
[01:48:42]  at throughout this is just something again from Apple docs. So if you're extending that, you know, with the JavaScript, the SM class, the native class, uh,
[01:48:50]  decorator is going to be seen by web pack. And it's compiled in a format in which the runtime, um, it can read that and deal with that.
[01:48:58]  Um, usually a lot of core is setting up native classes and then it will implement the primitive. So list view here is using those implementations and you can see the UI
[01:49:10]  table view is constructed directly. So when you interact with list view, it's just the table view. So table view is going to act exactly the same as a table
[01:49:19]  view does on the iOS platform, because that is quite literally what it is. Okay. Yeah. So like, I, I'm just, I'm just curious what it
[01:49:29]  looks like. Is there any example of what list view, like how you use it? Cause like, it's a pretty fundamental, like it's all, we have
[01:49:36]  a four component that we do for lists. Yeah. I can, I can share my screen. I have one. I have one. Yeah. I was going to say
[01:49:44]  you could look in the docs or, um, let me, do I have to turn my screen off? No, you don't have to do anything. If he shares
[01:49:51]  it, I can control it. Okay. Go ahead. Amar. Okay. I'm going to share now. Yeah. Okay. Okay. Let me make sure
[01:50:05]  that it's working. Yeah. It's good. Yeah. All right. All right. Okay. Let me make sure that it's working. Yeah. It's good
[01:50:22] . Yeah. All right. All right. Let me just minimize this. If you can, uh, maybe make your ID font like one size bigger. Okay. Give
[01:50:38]  it a good command plus or whatever. Yeah. Thanks. Is it? Yeah. That's fine. Okay. We are just going to start the F and that's on
[01:50:48]  iOS. Okay. All right. Yeah. Okay. I have a solid, uh, native script app. It's, uh, obviously a much more simpler setup than
[01:51:04]  the one Nathan shared. It's, uh, simply just, uh, Android and iOS app native through that. Yeah. And. Okay. Just a moment. Here
[01:51:16] 's our lovely router. Okay. There we go. Okay. I think that. Okay. Okay. I think that. Okay. Okay. So we have three routes
[01:51:26]  here. Okay. One, two, three. Yeah. I'm just going to navigate to screen two. Yeah. Okay. Uh, okay. Okay. Okay.
[01:51:35]  So we have three routes here. Okay. One, two, three. Yeah. I'm just going to navigate to screen two. Yeah. Okay. Uh, okay.
[01:51:46]  I love demos like this cause you're always, every, it starts with like showing a routing thing and then every screen ends up like building a slightly different demo. And I
[01:51:58] 've done this so many times. Okay. Okay. Okay. So there's, there we go. And there's the code. Let me just expand it. Okay
[01:52:06] . So. Action bar, which is the action bar. Yeah. I'd love how it looks like native elements button. And then we have list view. All right.
[01:52:12]  So where is our list view? Which is basically. This reminds me of react native. Is, is it cause the native. APIs actually look a lot like react native
[01:52:18] . No, actually I use, I use react native. So I just, uh, this, this is not the native script, uh, list view. Yeah. Yeah
[01:52:22] . I'd love how it looks like native elements button. And then we have list view. Yeah. Right. So where is our list view? Which is basically. This
[01:52:29]  reminds me of react native. Is, is it cause the native APIs actually look a lot like react native? No. Uh, actually I use, I use react native
[01:52:33] . So I just, uh, this, this, this is not the native script, uh, list view. Okay. Okay. It's, it's, uh,
[01:52:50]  yeah, it's a solid, solid this component that I. Perhaps this is something I've never seen either. Ryan. So quite interesting. Yeah. Yeah. Okay.
[01:53:00]  So, uh, let's go, let's go over the simple stuff. So here we have a list view basically. Yeah. And we have item types from item
[01:53:14]  types. Basically, uh, we define what type of items we have in our list view. So it can recycle them based on the type. So the, the views that
[01:53:26]  look the same way are going to be replaced with new views. That are going to look the same. Yeah. So that way the UI will, will try to minimize
[01:53:36]  the flicker or anything like that. Okay. And here we pass in the items, which are just empty. Yeah. A list of numbers. Sure. Nothing special there
[01:53:47] . Yeah. And here we have our render item function. Which is what remind me of react native. Yeah. Yeah, yeah, exactly. So I just, I
[01:53:58]  just liked the rent writer API. Yeah. Nothing wrong about it. So, and the render item is basically has three. Yeah. Uh, it's kind of the
[01:54:10] , kind of the, kind of the neat thing here that you were even able to do that, you know, create the API service that you wanted to interact with here.
[01:54:19]  Anyway. Okay. And here we have our item component you can see, which actually renders these based on the time. So you can, it's pretty simple.
[01:54:30]  We have a stock of this stack layout that has a label element and it just renders the item index. Yeah. Or it's, it's value based on the
[01:54:42]  type. So we conditionally render these. You could have separate components too for each. Yeah. Yeah. And, uh, now. Yeah. Yeah. And here on
[01:54:55]  item type. Like, and finally this, uh, this, uh, gets involved every time, uh, every time you scroll. Right. So that's the,
[01:55:08]  like the, uh, most basic. Can I see the list view implementation again? That's actually what I'm most interested in the inside of the list view. Okay.
[01:55:17]  It just, it's, it's, it's also just, it's just, uh, a hundred lines of code. Nothing too big. Yeah. Too serious
[01:55:26] . On item loading. Okay. Yeah. So we have, okay. We have a collection view. Is that the native element then collection view? And then there's a
[01:55:37]  solid four component. Yes. Yeah. Okay. Yes. That's the, that's the native element. So is this, is this using UI collection view community, uh
[01:55:46] , plugin, Amar? Yeah. Okay. Just checking. Yeah. So, okay. So basically we, uh, let, let me just show you how it
[01:55:56]  all works. You know, so we installed the, uh, okay. We installed the, uh, library, UI collection view, and then we registered the element, much
[01:56:13]  like you would register an HTML element. Yeah. The custom element. Yeah. Okay. And yeah, we have this, this makes the collection view intrinsically available.
[01:56:26]  Yeah. In JSX automatically. Yeah. Yeah. I have set up some types here, you know, like extending the JSX runtime. Yeah. Yeah. Yeah
[01:56:39] . To just make it available there. Nice. Okay. Okay. Okay. So that makes the collection view available and like this, you can almost use any nature script plugin
[01:56:49]  view. Right. Yeah. With solid. Yeah. I was, I was just trying to get an idea of what was going on here. So like, I was
[01:56:56]  looking for where the for loop came in. Right. Cause like it, I knew it would be more than just the four. So there's a native element. And
[01:57:04]  then we're using solids for to optimally up to the reactive update. So then it'll only create these new items when it needs to. And then the native. Yeah
[01:57:15] , this is, this is interesting. Cause I'm like native templates. What is templates? Okay. Just out of curiosity. What the, the lowercase templates you passed
[01:57:25]  to the for loop. What is that? Okay. Templates is cause it, yeah. Yeah. That's templates. Cause it doesn't look like it's reactive
[01:57:35]  value. Like the for each templates. What is, what is templates? Templates. Okay. Templates. Templates here is basically the types of items. Okay.
[01:57:49]  Yeah. This, this, this never re-renders. Okay. Yeah. Yeah. Exactly. Exactly. Okay. Yeah. Cause like this is where, this
[01:58:04]  is where like my sort of question came in where I was trying to think about it because like solids very particular in that it will only update like particular rows when they get added
[01:58:14] . So you usually you put a reactive value in there, then the list changes. The component does not run again. It literally just goes, oh, there's a new
[01:58:22]  item in this data list. And then it'll go, okay, I'm going to run the function passed into the for loop for that one item. Um, and
[01:58:30]  if there's granular updates beyond that, like let's say use a store and you don't even make a new item, you just literally update a field on that one
[01:58:40]  item. It's not even going to run the component. It's not going to run the for loop. It's going to go down to like the one, you know
[01:58:45] , thing in the item template or whatever, where you use it and just update that one property, um, and, and send that around. So it was kind of
[01:58:54]  interesting, uh, just kind of seeing this because it works like the Dom, like for, for the, this model, the work without re-rendering, we can
[01:59:05]  literally create a list here of like array prop, uh, item templates inside an array prop. And if one value on that item template changes, it will go and tell the
[01:59:18]  native level layer to actually update that one thing without, I presume recreating the whole item template without recreating the, you know, the, the whole JSX and
[01:59:31]  this whole thing. Um, yeah. Yeah. Actually, actually the item template basically for each, uh, collection view here works a bit different than that. Okay.
[01:59:48]  So here in native, in native, the, the main goal is to render as let, if you, if you need better performance, obviously whichever you need, add your
[01:59:59]  ads. You want to avoid creating many views. Okay. So if we take the example of rec native and rec native, the built in, uh, flat list, which
[02:00:14]  is a list component. It basically renders the element as you scroll. So as you scroll down, it's going to create more and more views. Okay.
[02:00:24]  And the problem arises when it, when basically you have a very large list with lots of items. And when you have all these items in the memory, it's not recycling
[02:00:40]  them. Basically. That's the problem. It's virtualized. But as the list grows, it becomes slower and slower and slower. Right. And to solve,
[02:00:49]  and to solve that problem, they have virtualized lists like, um, for example, which is the main, uh, list in rec native nowadays. So in,
[02:01:01]  in native, in native script, we have the platform collection view here. And it, it, it, it, it will basically in recycler list. If you
[02:01:16]  know about recycler list and recycler list, only the views or you can say the items in the viewport are going to render. Gotcha. And everything
[02:01:27] . Yeah. And as soon as you scroll up or down, it's going to reuse the items that go out of the viewport and then render them right where you are
[02:01:38] . I see. Okay. The way that's what this internal logic is doing here, where you're calling render item yourself directly inside the on item loading. Yeah.
[02:01:48]  Yeah. So basically when, basically, for example, when I navigate through the screen, let me just, it's a complex. Right. So following in, it's
[02:02:01]  a, it's the same six items on the screen all the time, which is why the for loop never reruns. It could have been in dot map for all that
[02:02:07]  matters because it will never, like, you just keep on reusing the same six items. Okay. So, uh, as soon as I navigate to this page,
[02:02:19]  remember that the item template here is not the actual item or the element or the native view. Okay. Yeah. It's not the view itself. It's just a
[02:02:31]  template. It's just a way to, uh, it's just a way collection view knows that it needs, uh, it tells, uh, uh, it tells solid
[02:02:46] . Yes. That, Hey, I have scrolled down to this index and I need a view at this point. So render something. Okay. And at that point
[02:02:57] , uh, it will call on item clothing. This event here. Yeah. Okay. And this event basically what it does is that it will create, uh, it will
[02:03:11]  create an element. Basically it will create the element from the render item here, which we passed earlier. Okay. Yeah. Yeah. And it's going to it,
[02:03:25]  and with its native instance, even dot view, which is the native instance. Yeah. Uh, it's going to attach a context to basically, which is the value that
[02:03:37]  holds these three signals. item or index type, I guess, because the problem is that these views, we are not creating new views. We are replacing the data in
[02:03:51]  existing views that we have created. Right. So DOM doesn't work like that. We can't just update the view in place. So we need, we need to
[02:04:02]  somehow know that, uh, this view. So once, once this is, this only, this only gets, gets called first time on first render. Okay. And
[02:04:16]  it creates the view and it puts the, puts it in the list. Now let's say that I scroll. Okay. I just added a couple of items here. Okay
[02:04:26] . As soon as I scroll down, it's going to call on item loading again, and it will just update the, it will get the context from the view and
[02:04:42]  just update the same, uh, item that runs down here. Yeah. And that's how it's going to keep recycling that. Yeah. Now that's interesting. Cause
[02:04:52]  yeah, it's like one built on top of the other. The core loop here actually isn't that important. It's yeah. It's yeah. Yeah. I
[02:04:59] , I, I get like you, this is actually what's doing the thing. Okay. Yeah. I was, I was, I was just curious. I mean,
[02:05:05]  for the most part, people are probably going to consume something that already exists to do this and not be writing this themselves. This is pretty core binding, but it's,
[02:05:14]  it's important to note that let's say solids for component is not sufficient to solve the, like natives thing. You, you want to like, basically like in this
[02:05:24]  case use something like a node recycling. And, uh, as you, you know, was saying item template appears to, to solid as a real element, but it's
[02:05:31]  actually created by, um, dominant native for organizing things easier. Um, for the Dom. So yeah, that's, that's, that's, that's an interesting
[02:05:40]  approach. Um, but I, yeah, ultimately that's why you started on the other side where you're showing me the actual like consumption of it because we can always
[02:05:49]  just wrap this thing in a component and then have it, you know, run. Yeah. Obviously. Yeah. Yeah, indeed. Okay. Yeah. Like, like
[02:06:00] , like, like that, that gives me an idea, um, of what's, of what's going on here, but it is an important thing to note because,
[02:06:08]  um, uh, can, uh, loops or lists are a UI element. That's specifically an actual UI element, not just a map function, so to speak,
[02:06:19]  or, uh, for directive or something. I think this is probably one of the biggest sh like structural shifts. Like when you're building the web, you use like ng
[02:06:29]  for whatever, you know, before solids for loop or whatever map and react. It's not like a component where here it is actually a component. I, I,
[02:06:39]  I like it being a component too, because solid obviously chose to make our for loops components. So it's already has that property. Like if someone wanted the list component to
[02:06:49]  look like our for component from an API service layer, they could probably do something like that. So, um, you know, it just shows off the composition, but,
[02:07:01]  um, it is an important note for people, but I like the mental model from the people on the outside. You know, being like, okay, instead of importing
[02:07:10]  for here, I'm going to import list or something. Right. So, um, okay. That's cool. Um, thanks. Thanks for, uh, explaining this
[02:07:19]  to me. Cause I, it's something I personally had interest in. Yeah. I think the native, native is fundamentally a bit different. I mean, you can
[02:07:30]  obviously render items in a for loop must like much like web, uh, in a strong view, for example, in a script. It's also possible, but it's
[02:07:41]  not, it's not feasible. It's going to be a performance nightmare. You can use it for small lists of data. You don't always need this collection view
[02:07:51]  or some dynamic list like this. But when you are, for example, rendering a long list feed or you have a social network app or anything on list of contacts or something
[02:08:03]  like that, then you need recycling. Yeah. To ensure that the performance stays up to the mark. Right. Right. It's not sufficient. Like, cause what
[02:08:14]  I was going to say is people have virtual list components on the web. Um, but they don't, they don't, they, they don't recycle. Generally what
[02:08:21]  they do is they, I mean, it depends on how you do it, but generally what they do is they have a big, your big list of data, which you
[02:08:28]  will load incrementally as you need it. And then you're, you will create DOM elements. Um, you know, usually like as they appear on the screen and
[02:08:38]  then as they leave, you throw them away and then you could recreate them again. I guess like I played with some, I guess what I'm thinking in my head is
[02:08:46]  like, I'm sure I've seen people make this same component in the web using like, um, you know, almost like, uh, keeping a list of node references
[02:08:58] . Um, and then like overriding them. But I guess, I guess that's the challenge, right? Because it's hard to do this declaratively.
[02:09:07]  You almost do need to get to the native platform. Cause if you're saying like, take this node and now change its data. Um, but don't recreate it.
[02:09:17]  It's actually kind of, um, yeah, it requires a little bit of finagling. I, I, I, yeah, because I, you know what
[02:09:26]  I mean? I was just like thinking in my head, I'm like, could you make this without being aware that it was native? Um, hmm. Yeah.
[02:09:33]  Yeah. Yeah. Like, yeah. Here's an example. Yeah. React window reuses dom nodes as mentioned in chat. Um, yeah, reusing dom nodes
[02:09:47]  as a whole other interesting thing because, yeah, I mean, I don't have to get into that at the moment, but there's, there's some interesting side effects
[02:09:58]  that happen with the dom in general, but yeah, I wouldn't be surprised. Um, yeah, just kind of interesting note when looking at these sort of solutions.
[02:10:08]  I feel like if you have a way to get access to the, the native node and leaving it that layer probably makes more sense from a performance standpoint than trying to like handle
[02:10:22]  it in the like web JavaScript way. I don't know. I'm not sure. Just hypothesizing. All right. That's cool. Is there, is there
[02:10:34]  anything else cool you want to show off in this demo? Um, otherwise I think we probably can get into, uh, questions and I, I've, I, yeah
[02:10:43] , I have a couple. No, that was, that was it. I just wanted to show off the list. Cool. Okay. Yeah, no, definitely the
[02:10:55]  important piece. Um, yeah. So I guess my question, my first question here and chat, start dumping questions in so that we can, we can talk about this.
[02:11:12]  Um, so, you know, while we, we'll have our guests here, but, uh, my, my first question actually is like, we've seen a lot
[02:11:21]  of cool stuff that native script does. The project's been around for, I don't know how long, seven years, eight years. How long? Longer?
[02:11:28]  2024, 2013, maybe. Okay. So we're talking like a decade. It's been around. So like a decade. So even longer. Um, uh, obviously
[02:11:36] , I, I mean, I can already see now how things have progressed. This is, this is definitely taking it to the next level. Um, what's next
[02:11:44] ? Like what, what are you guys excited about? Like what's. I'll, I'll add some and then Amar maybe go, I mean, I think for
[02:11:51]  me, standardization is a big one. I think core being standardized. I think the winter CG effort is definitely something I'm excited about. It's something I've
[02:12:00]  encountered, you know, just developing with it. I think you want, um, you, you want to need a lot of that in place. And I've also
[02:12:07]  worked with like developers coming into projects and training them. And I think too, you kind of see, um, why those, why obviously the standards matter, you know?
[02:12:16]  And I think sometimes in innovative spaces, it can, you can almost feel like you're brushing up against standards bodies, you know, and innovative spaces. But, um,
[02:12:25]  that's one that I think would be really nice to, uh, round out. I think it'll round out a lot of things. Um, beyond that, probably third
[02:12:33]  party integrations around primitive. Like, um, there's a lot of, uh, untapped territory in, in visionOS. And I think it'll be
[02:12:42]  interesting to see how, you know, things people can do there. Um, you can certainly create primitives for various visionOS specific, uh, things. Um, and
[02:12:52]  I think that's an exciting area to explore. Right. Yeah, no, I mean, it seems like that's a whole new, like world of what, what you
[02:13:04]  can do here. Um, changes like the way we actually interact with the devices. I, uh, in terms of standards, I guess, just a quick question,
[02:13:11]  kind of follow up on that. It's like, how, like, how do you, how does it get approached? Cause it's not like you write, you know
[02:13:17] , like on the web, we have like all these standard bodies, like the TC39 and, uh, what wig and all, all these things. Like, um
[02:13:25] , like how, how do you approach it for, for native script? Like who, who's also a part of this? Who has an interest in this? The
[02:13:33] , certainly the working group right now is the primary, um, group spearheading. It's about 15, 16 people right now. Um, you know, I think
[02:13:42]  that core group, we are taking, um, all of the baseline spec, you know, and Google put out baseline as well. I think between that and winter CG
[02:13:50]  is the first time that that became a viable target. I think there's always been, uh, a talk around spec, you know, whether it's from, um,
[02:13:59]  Mozilla and looking at that spec, but like there are a lot of those don't apply directly. And so that's where it was always troubling. Cause it,
[02:14:08]  cause you're trying to kind of make a baseline yourself. And I think that's really what the teams all around native script, um, struggle with the early years is because
[02:14:17]  of course you want to hear the standards, but there wasn't a clear baseline spec. So I think winter CG putting that foot forward is going to help, um, largely
[02:14:26] . And even there's some things in there that aren't directly relatable, but we're going to start with the most fundamentally one-to-one specs that apply and
[02:14:35]  then start to venture into everything else and see where the line is, is it needs to be. Okay. Nice. I think beyond that running native script on different engines,
[02:14:46]  you know, we talked V8. Um, you could run native script on Hermes. Um, you could run it in, in bun probably, um, directly.
[02:14:53]  So, um, yeah, there, there's definitely, um, different engines. You could run the native script approach in. Cool. Cool. Cool. Cool.
[02:15:04]  Cool. How about you, Ammar? What are you excited for, for the future of native script? I'm excited about, uh, follow JS community getting interested into
[02:15:13]  native script. Actually, actually one of the things, one of the, one of the things that I, I think that native native script really needs is that it needs
[02:15:26]  other, other communities like angular react, who, uh, thought it to come forward and, uh, and basically adapt it as a solution to build native apps. Because
[02:15:45] , because there is a lot of potential as you see here and, and we must know that the native script team is quite small. It's not very big, like
[02:15:58]  react native. It's, it's a really small team and they're still able to pull this off, which is, which is probably insane. You know, like
[02:16:07]  do something like this, like building apps for Android, iOS, dealing with the native platform, which probably changes with every single release. And then you have to deal with
[02:16:19]  all the breaking changes and all the plugins and move on. I think one of the core things that, that I'm excited about, excited about with all these, uh,
[02:16:30]  different things with that we are currently working on. And it just like the sort of JS integration dominated by, you know, song classical songs. And, uh, yeah
[02:16:43] , those, yeah, those are the few things that we are working on. Yeah, no, I, I think, I think there's a real opportunity there because react
[02:16:55]  has react native. No one else has anything like in that space, the same degree. I don't think so. Like, I think everybody would be interested in having,
[02:17:07]  you know, native projects. So I, you know, we can, we could all band together in a certain way. Um, to, you know, if there
[02:17:17] 's a, you know, very nice viable, um, option, which this is what this looks like. So, yeah, I, I, I think it is exciting
[02:17:23] . I, I, I haven't, as I said, I get asked about this all the time because of the comparisons to react. Um, uh, you know,
[02:17:30]  I could send people this way and see, see what they have to say about it. Cause I, I feel like, uh, I feel like it, this doesn
[02:17:37] 't happen unless the, like, unless people actually go and build stuff and do stuff with it. Otherwise, you know, it, it, it doesn't get to where
[02:17:48]  it needs to be. And it's kind of funny because I think most of the time, maybe not most of the time, but quite often the time I get that
[02:17:54]  question. Not cause they're going to actually go build a native app. They just need a reason to like, not check it on the list. Um, I,
[02:18:00]  I, I, I want to, I'm, I'm going to encourage them to come in, uh, check out native script and, and see what they can do
[02:18:08]  there. So, um, no, this is exciting. I'm, I'm glad to see that the, uh, community here is already doing so much. This is
[02:18:17]  more than I, I, I could have imagined, you know, the fact that there's like that community plugin, the fact that they're like, people can actually go
[02:18:25]  and just build a solid app using native script today. Is just like, oh yeah, sure. Is just incredible. You can also use, you can also use all
[02:18:34]  native modules with native script. Oh, okay. Right. Oh, that's interesting. Um, so, okay. Yeah. I mean, that that's, that's
[02:18:49]  an effort that Amar, um, that's his, his brilliance on display right there. Um, open native is that effort. Um, open native as an
[02:18:59]  effort to sort of allow, sort of open the door, begin to open the door between cross-platform communities, um, talking to each other. I think, you
[02:19:06]  know, this year, I feel like in Ryan, you're probably somewhat solely responsible in a lot of ways for, um, JavaScript frameworks talking to each other a bit more
[02:19:13] . And I, I think, um, it'd be nice for more cross-platform communities to do the same. Um, yeah. Um, yeah.
[02:19:20]  Cause there, there's a lot of brilliant work in the react native community, um, with modules and I myself have found myself wanting to contribute to something like react native off
[02:19:29]  zero because I can use it in native script through something like open native, something I would never have even considered before. Yeah. Yeah. Yeah. No, this,
[02:19:38]  this, this, this will, this will be good. And I mean, I sometimes think on the website, it helps to have like a common target. Um,
[02:19:46]  we're, you know, uh, but maybe, maybe, maybe we have the same scenario here, at least on native script up from the framework side of people coming in
[02:19:54]  there. Uh, there's a pretty big target on the side of react and maybe react native in the space. So, um, yeah, I, I can definitely
[02:20:02]  see others, you know, joining in. Um, uh, yeah, I, I keep on getting, I, I, I, there's a comment from the crowd
[02:20:12] , a question. I don't know if you guys have any opinions on this. It's about the best way to build unified apps. NX keeps on getting mentioned by
[02:20:21] , well, do you guys have any experience with that? I'm just going to throw that up here. I, I use NX a lot for that purpose.
[02:20:29]  Um, it's not the only way. Um, I, I certainly, uh, bring it up a lot, but there, you know, turbo repo, um,
[02:20:36]  Microsoft rush, um, you know, yarn workspaces alone, um, NPM workspaces. You can set up any of those to do exactly that. Um
[02:20:45] , I probably just personally have more experience in doing it with NX. Um, but you know, all that is going to allow you to start. And that is
[02:20:53]  going to allow you to set up code in a centralized place where you can share it across, um, runtime boundaries. And that's really all you're wanting to do.
[02:20:59]  Nice. Nice. And actually another comment that this is, this is amazing to hear. like we were talking about, uh, um, devices are, so we're
[02:21:08]  talking about like different future devices in terms of like these, uh, you know, like the vision stuff, but even just like, I've already brought solid to embedded devices
[02:21:20]  that have only eight megabytes of RAM. And we can do even smaller RAM devices in the future. Like this, this is just, there's the, the big
[02:21:25]  side and the small side. This is, this is really, um, incredible work. Um, cause it really, it, the web is already such a pervasive
[02:21:34] , you know, technology that's like everywhere, but this is like taking it like beyond even what the web, you know, you know, new places. I think
[02:21:46]  it's really exciting. So what you keynote just mentioned there, I assume you could also use something like tailwind to style on an embedded device. If you were doing some
[02:21:54]  visual, you know, connected to that, but yeah. Yeah. I mean, just to speak to a broad note is, is I've found it really enjoyable using something
[02:22:02]  like tailwind, you know, that, that, that I haven't really enjoyed and it's neat to use that in, in respect of UI kit or Android widgets.
[02:22:09]  Like there's, um, it's fun. It's fun. I mean, I, no other way else to say it. Yeah. Yeah. Yukino actually
[02:22:18] , Yukino, Yukino actually built cheese dog. I don't know if you know about that. And it, it's basically, uh, it's basically how you
[02:22:28]  can build apps in embedded devices with cheese dog. It's pretty amazing too. Yeah. I, I, I, I haven't kept up on this. I just
[02:22:40] , I, I, I could tell from the demos and the stuff that it's really cool. And I keep on like reposting it whenever I see it. Cause
[02:22:46]  I think people should check it out. I, I personally haven't had a chance to, so that's why I was using this opportunity. This is what I do use
[02:22:52]  my streams for. I get a chance to, to like, actually like put some time aside to learn about a topic. And then it's like, if I'm going
[02:22:59]  to do that, I might as well do it with a bunch of other people. Cause I think everyone probably should learn about the topic. And then it's, this
[02:23:03]  it's, it's an effective use of time. So yeah, this, this is very cool. Cheese Dom is not open sourced yet. Okay. A lot of
[02:23:11]  cool stuff going on then. All right. Um, if it looks like we're kind of getting to the end of questions here. Um, is there anything else you guys
[02:23:20]  would like to shout out before I let you go? I'll say, um, it's deep topic what we're talking about here. Um, it can hit you
[02:23:27]  personally, uh, too, because it affects semantics and the way you look at the project and the way you may think about a project. So it's a deep topic
[02:23:34] . Um, if you feel overwhelmed, looking at it, um, it's certainly normal. Um, there are a lot of aspects we didn't cover. Um, you
[02:23:40]  know, digging into typing generation, how even the engine is augmented with the platform types. Um, there's a lot of like deep technical details that, um, we could
[02:23:50]  get into. That we didn't touch on. Um, and that's an aspect I'm sure if you're in exploring mode, you're probably curious to dig into
[02:23:56] . Um, so maybe some other time we can dig into that, but it's a fascinating stuff there. Very cool. Yeah, no, I can tell that already.
[02:24:03]  I, I think curb a couple of places so that we'd stay relatively on time. So I wouldn't keep you all, all, all afternoon. Um, how about
[02:24:11]  you, Amar? Anything you want to shout out? Anything you want to plug? I don't know. Yeah. Yeah, firstly, huge, huge thanks to
[02:24:20] , uh, Hugh for inviting me here. It was my first time on the live stream. So I hope you can pardon me for, yeah, I was, I was
[02:24:31]  a bit nervous in the beginning. You know, I'm sure you would have noticed that. Yeah. Yeah. And a big, a big shout out to,
[02:24:40]  uh, Yukino Song for doing all this huge, huge effort. You know, we, uh, me, Nathan and everyone else in the community have just been pushing and
[02:24:51]  motivating, uh, Yukino to do this. And she's been constantly working on this for, uh, quite some time. So, yeah, this is, this
[02:25:02]  is, this is all her, basically you can say that. Yeah. So I'm just, you can say that I'm just adding sugar to it, you know,
[02:25:12]  and making it just taste better. Yukino would have loved, Yukino would have loved to be here. Um, for sure. She's in China. Yeah. And
[02:25:22]  I think the time, the time zone was tough. It's worth mentioning that, that, uh, Amar is in Pakistan. Oh, okay. And, um
[02:25:27] , uh, Amar, I believe you're, what time is it there? Oh, wow. You want to ask me? 2, 2, 2, 3,
[02:25:34]  3 a.m. 3 a.m. Yeah. Yeah. Yeah. Yeah. Yeah. That's, oh, wow. Yeah. Sorry. Yukino is still
[02:25:44]  active in the chat. So yes. Yeah. Yeah. I, I, if I'd known, I mean, I couldn't do much about this to be fair.
[02:25:49]  I, I, I've had a few guests from like say in India where I moved the, the, the stream earlier an hour or so. I mean, it
[02:25:56] 's, it's not a big consideration, but I really appreciate taking the time to join and talk about this. Um, that's amazing. Uh, it's. Yeah
[02:26:03] . I, I do have a late later stream compared to some, um, because classically I was like the, even though I'm West coast, which puts me on
[02:26:10]  the opposite side of that. I was classically like the, uh, end of Friday afternoon. It was actually Friday evening stream. Uh, the drinks were not,
[02:26:18]  um, non-alcoholic originally. So things have, uh, things have changed a little bit, but yeah, it's, it's, it's, uh
[02:26:27] , it's a, thank you so much for joining us and the great work you've been doing. One thing I just wanted to add in the end that, uh
[02:26:32] , with solid JS and NatureScript, you can actually today. build a production level app for your company or any, and it will work. I think, I think
[02:26:51]  that's one of one thing we haven't shared publicly yet, but we are going to soon share some app that is completely built with NatureScript technologies to prove that it's
[02:27:01]  actually a great viable option to build apps later for violence. Yeah. That's amazing. Yeah. Yeah. I mean, no, I, I mean, I,
[02:27:11]  I didn't talk about this before. We were talking about how we should get everyone banning together, the group together and kind of push it. But, uh, thinking
[02:27:19]  about on the other side of things, I mean, obviously there's React and React Native, but if, if there's communities who are like more hungry because they don't
[02:27:26]  have React Native, um, you know, yeah, we're, we're, we're weak. And if the performance is good, maybe we're a good showcase.
[02:27:33]  So I'm pretty, I'm pretty excited about this, um, to, to see that. So yeah, I'm looking forward to it. I, I will
[02:27:40]  await, uh, the announcement. I follow both of you guys. So I'm, I'm, I'm looking forward to, to seeing when that drops. Ryan,
[02:27:49]  thanks for having us and giving us a good excuse to have some grape juice on a Friday. And, uh, really thanks for, uh, thanks for having us.
[02:27:56]  Awesome. Well, you, you have a good one. Um, I'm going to continue with my stream after this, uh, do this week in JavaScript and whatnot,
[02:28:02]  but thank you so much for joining us. Um, and until we have a reason to meet up again and to do another stream. Um, have a good one.
[02:28:09]  See you guys. Cheers. Thank you. Uh, yeah, no, this, that's, that's everything I was hoping for. I have to admit, um,
[02:28:20]  the fact that there's a community here, the amazing work that we're, we're, we've already seen kind of putting into this. And like, I mean
[02:28:27] , we didn't get to like benchmark it or whatever, but I mean, all everyone, I mean, and I guess that's critical because all I ever hear from people
[02:28:38]  is people complaining about react natives performance. So, you know, I seriously, like on Twitter, everyone keeps talking about like how expensive it is. I don't know enough
[02:28:48]  to know that if, if solid's model would help, you know, especially with something like native script compared to, you know, react native. Like native, but
[02:28:57]  it looks like this is like, this is not capacitor, which I mean, it's good in its own way. Cause you just have your web app. But I mean
[02:29:03] , this is a real native integration that has the potential to, you know, have good performance between what we saw this week with native script and Tori last week. Like
[02:29:14]  we're, we, we're not locked on the web anymore. You know, when someone comes to me now and asked me about solid and native, you know, I
[02:29:22]  can direct them to this stream or maybe even last stream. Cause they're talking about doing some native stuff with Tori as well. Like this is a burgeoning
[02:29:31]  space. And I'm glad that it's not a space that I have to actually do the work myself for. I can just keep on designing primitives, good models for
[02:29:40]  authoring. And it looks like the rest will come in. Thanks to the amazing work to the people like the guests we had on the stream and people like Yukino
[02:29:47] , which is, as I said, the main reason I even knew about the native script stuff in the first place. So very, very cool. What, sorry.
[02:29:55]  What do you got here? Uh, just check and chat here. Um, God, it's doing it again. This is so frustrating. Not talking about performance yet,
[02:30:10]  but we were having, but we're having more options and react native right now. Yeah. Yeah, exactly. Like this is, I I'm talking about performance.
[02:30:17]  Cause obviously that's the thing people, you know, talk about care about. But like the fact that it's, it's even a thing is amazing. Cause like if
[02:30:25] , if it's viable, if, if, if this is something you can use, you can do something now that you couldn't do before. And that's amazing.
[02:30:31]  This always happens when I have guests. Give me two seconds. I'm going to flash the screen. I'll probably lose like 15 viewers, but two seconds. Okay
[02:30:46] . All right. Hopefully I wasn't gone too long. That was just, I, it's been driving me nuts. The stream yard has been getting worse and worse.
[02:31:11]  I don't know what's up with it. So, all right. Yeah. I'm not saying react native. It can't be fast. You know, you
[02:31:26]  have to know where the, where the boundaries are. And I think all these things come with like a certain knowledge of the, of the platform. But yeah, like if
[02:31:33]  it's comparable, that's what I mean, because people are very critical about the performance on mobile. Right. That's why when they say like, put your web app
[02:31:41]  in mobile and doesn't feel the same. Like people are very particular about the, the small pieces, you know, like just the feel. And I think if,
[02:31:49]  if native script lives up to that, then like, yeah, that's all it takes. And I, I'm looking forward to seeing these production examples that are going to
[02:31:57]  be coming benchmarks. Yeah. Yeah. Do I think no, no, I don't think so. It's interesting. JavaScript is so omnipresent that like,
[02:32:16]  if the solutions in JavaScript space get good enough. Um, then like you open up to so many new developers and ability. But the truth of the matter is it's
[02:32:29]  like JavaScript hasn't gotten rid of people making web backends in, in non JavaScript. And, you know, I'm, I'm not going to have a primary gen
[02:32:40]  raid again at this exact moment where it'd be opportunistic. Um, he seems like he's doing pretty well on his stream right now with 2.4,000,
[02:32:49]  um, you know, But I'm going to say that if we can't replace web backends with JavaScript, we're probably not going to replace native. Because I
[02:33:01]  think web backends with JavaScript are way, way more compelling in comparison. Like, the benefits are so large that I can't, you know, I made the comment before
[02:33:14] . I think that, like, it's hard to argue that you shouldn't be using JavaScript in some part of your back end. But I don't know if the
[02:33:24]  argument for native will ever be that strong. So, yeah. All right. Let's kind of, let me get myself set up here for two seconds. Talk about
[02:33:44]  this one in JavaScript, which might not be the biggest. But every time I say that, I'm always wrong. There's a couple topics. But I, yeah,
[02:33:56]  I've been kind of on a journey myself. You shouldn't be using JavaScript in some part of your back end. Yeah. I mean, if someone was to tell
[02:34:21]  me that, I would take it from you, Greg, because you're building something that's actually can be viable on the front end, potentially, using non-Java
[02:34:34] Script. But, like, outside of that, the benefits of having the same thing on both sides are significant. I'm not saying write your, like, back end
[02:34:43]  database, data servers and stuff in JavaScript, whatever, your service layer. I'm saying the thing that is serving the web page or, you know, the actual, like
[02:34:53] , rendering the page in JavaScript has huge benefits for what it offloads on the client side. Wait, don't spotlight me. Okay, fine. I won't
[02:35:13]  do that. Wait, maybe I will. All right. Yeah, it's funny. I didn't actually do much on the Twitter, so to speak, this past
[02:35:31]  week because I've been working, like, as I mentioned, I've been on this journey, this kind of odyssey working on data fetching APIs and routing.
[02:35:42]  And, yeah, I think that, yeah, I'm just looking here. I want to talk a bit about that, probably, because we're getting a lot closer
[02:36:05] . And I want to, I might be suggesting some pretty crazy crap, so you guys will keep me sane, right? All right. Yeah. All right.
[02:36:33]  All right. I think I'm mostly set up for this week in JavaScript. Give me two seconds. I got those three. I got this one. What's going on
[02:36:47]  there? Code sandbox. Got this one. That one. That one? Okay. All right. That's good. Oh, no, the fetch thing. Yeah,
[02:37:03]  I'm going to talk about this. You know, this is, I have to admit, we're at a very low viewership right now compared to the last few at
[02:37:13]  this time. Competing with Prime is always challenging. And even though we don't cover the same stuff, but I just find that when he's streaming at the same time
[02:37:22] , we definitely feel it. Hello, chat. Well, I'm glad you guys are chatting. It's keep, it's good to, you know, stop trying
[02:37:30]  to make fetch happen. Yeah, well. Okay. You're right. I'm missing one other thing. Because this week in JavaScript is actually pretty lightweight, but I
[02:37:44]  want to talk about some more serious, solid issues. Because I just got to address some of the elephants in the room. Right. Because this will all be related and
[02:38:06]  it all makes sense. But I want to, I want to, I want to, I want to, my work is paying you as part of my professional development. There
[02:38:14]  you go. Yeah. This is what we need here. Yeah. Yeah, exactly. We should talk about server, like this will tie into the server actions thing. I
[02:38:23]  don't know what the fuck. See, but that ties into this week in JavaScript. I don't even know how I want to even approach this week in JavaScript.
[02:38:33]  Maybe it's more like I should do this week in JavaScript kind of first and then dig into the solid topic. You know, let's do it that way. So I
[02:38:40] 'm going to like put up the banner and we'll do like, we'll start this week in JavaScript and then end off. Because honestly, for this week in JavaScript
[02:38:48] , I have basically nothing. Yeah. Just blend it all together. Like I did last week. Right. This week in Ryan's head. Yeah, exactly. That's
[02:38:58] , that's what we're doing here. This week. Yeah. Because I keep on seeing everyone's hot take about server actions. And maybe you guys can fill me in
[02:39:09]  on like what the deal is. It's interesting how politics sometimes play into stuff. But anyway, let's go. Yeah. Let's talk about this week in JavaScript
[02:39:18] . I will present my screen again because I lost it because I was obviously had to refresh everything. Entire screen. This one. All right. Let's go. Let
[02:39:29] 's go. Let's go. Let's go. Most of my news this week is actually solid news. Because if you look at this, last week I was like we
[02:39:37] 're live. And then literally we're live. I tweeted two things. This stream and this solid news. So let's go look at solid. Because as I said
[02:39:48] , I've been heads down. We already talked last week about Dax's great recommendation. But yeah, I just love seeing the ecosystem continue to kind of flesh out
[02:40:02]  from here. Tanstack, form, support, solid.js already. LinkedIn, initial docs, nice post. It just, we're more and more, the lists
[02:40:11]  look like this. Svelte's missing from here. But I guess like even with native script is the same thing. Like we're now more and more showing up
[02:40:21]  on these libraries, you know, like as like choice number three or, you know, even two perhaps as a react. Because we're, I guess, similar enough
[02:40:34]  to react that we're a good like second option. Like maybe more approachable for people who built react stuff than who built Svelte. And, you know,
[02:40:42]  the community, you know, behind these things is amazing. Like Tanstack, obviously, big fan of Tanner's work. But it's very cool to kind of see
[02:40:50]  that kind of popping in. Yeah. I saw this one too. Internationalization is a project very much a back of mind when working on routing and working on solid start.
[02:41:03]  So it's cool to see, you know, people actually, you know, writing on the topic, right? These are the kind of like considerations that you require,
[02:41:11]  you know, more. Like the things you might not approach when you first start a project, but like you're going to need eventually for anything that's successful. So
[02:41:27]  I like that these kind of, these kind of considerations are what are coming to people's heads down when they're starting to work on solid, which is great. But yeah
[02:41:36] , I mean, the big news for me this week, the only thing I retweeted or tweeted out this whole week was the amazing work that Sarah and co Shog
[02:41:53] un, Michael, also you can mention here. They've been working on the docs rewrite and everyone's like, oh, when are the docs going to be ready?
[02:42:02]  But like these things take time. They look great. I haven't got had a chance to review everything, but you can already see how this is forming up. This is
[02:42:13]  much nicer than what we're doing before. There's learn, there's references. We are very motivated to help people get into solid. And then he takes us to
[02:42:27]  the existing tutorials. Yeah. I mean, I am so thankful to have people working on, on, on this stuff. Like there's, there's so many things that
[02:42:41]  need to get done around solids. You know, it's an open source project. There's so much work that needs to get done. And so much of it is
[02:42:48]  actually teaching and training. So like this, this makes me incredibly happy. Like on one hand, when we talk about stuff, I, I, I, you know,
[02:43:01]  you can say like people go to the solid repo and they're like, oh yeah. Solid JS, uh, solid, you know, they, they go here and
[02:43:10]  they're like, okay, let's, let's look at, uh, where is it? Um, contributors or something. They, they, they look here and
[02:43:21]  they're like, yeah, there's this one guy, you know, they should give Odonashi a shout out, but there's this one guy. What, what
[02:43:31]  happens to the repo when, and the project, when this guy goes, right? You know, the bus factor, they call it, but so much goes into solid
[02:43:42]  that is non this people supporting the, the playground, the tooling around build tools, the, the, the, uh, docs are huge amount of effort where we, we
[02:43:54] , you know, have lots of contributors, you know, over time doing this stuff. So on one side, we have an incredible arsenal, um, you know,
[02:44:02]  at our disposal because of the kindness and generosity of people out there in the community. Right. Um, yeah, like, oh, here's an example stack. Let's
[02:44:18]  see thing for, um, Milo was actually working on that. I think that we had a prototype of something. It was slightly slower, the load than the current playground
[02:44:27]  for in the docs. So we didn't like jump right into it, but I mean, how else are you going to get full end to end SSR, um
[02:44:33] , um, stuff going? So, yeah, this is something Sylvia has been, uh, before she left to go, um, to party kit was like, definitely
[02:44:43] , uh, like kept on tapping us and be like, how can I help? Can I get this done? It was amazing to have that. Um, so in one
[02:44:50]  side, when you look at it from the, from the kind of wide scope, there's like so much going on that, but then, you know, I admit
[02:44:58]  on some of the more technical sides, um, we're a lot more bottlenecked because we are doing R and D and it's hard to spread the net farther to find
[02:45:07]  enough people who actually have the same kind of time commitment. If, if, if you told me that I had four people to work on solid, I think where we
[02:45:16]  are right now, I would put half those people on docs. that's, that's, that's how important it is to me in terms of the F the effort
[02:45:24] , but like, there's obviously more people than that in the community who are working on stuff, but it is definitely a challenge. Um, to, to like,
[02:45:35]  like this is the funny thing is the base of the solid repo is such a small part of what actually is going on. When you look at the much wider picture of
[02:45:46]  all everything else here, how many repositories are we maintaining as solid these days? I don't even know, um, view all repositories. Does this tell me,
[02:45:54]  they probably don't even keep a list of it. there's more than one page, anyway, yeah, which, which is, which is why, as I said
[02:46:10] , I'm, I'm, I'm incredibly thankful and like blessed that, that we've been able to put this together because the truth of the matter is when you,
[02:46:20]  when we, people always wonder about my enthusiasm, it's like you're, you go out there and what you try to accomplish, like you have to go. And
[02:46:29]  it was like, uh, build it and they will come like Wayne's world too. There's probably like a field of dreams or something reference there, but like, you
[02:46:37]  need to, you need to shoot for more than you can think is possible to, to actually get anything done. You, you have to be ambitious and then, you know
[02:46:50] , things will follow as long as you keep on doing good work. 33. Yeah. Okay. There we go. I'm blind. Thank you. Yeah. Thank
[02:47:02]  you. I'm, I'm sure. And they probably appreciate you saying that as well. So like, what, what, what, what I'm getting at here is
[02:47:10]  that like, it's, it's, it's, it's a very interesting balance to try and figure out how to like maintain these things into open source and, and
[02:47:22] , and, uh, and, you know, have this amazing support of the community. And, but also be trying to be trying to push the boundaries of what's
[02:47:30]  possible. If we didn't do that, you know, we wouldn't be where we were, you know, like when I started with solid with the signals, it was
[02:47:42]  like, we knew a certain amount of things are possible. And we've learned since then that much more is possible. And which is why I actually have to get,
[02:47:52]  uh, you know, a bit into the reality of things when kind of working on this stuff when, you know, uh, you know, we'll get into the reality
[02:48:05]  of things in a minute. I'm going to finish up here on, on this week in JavaScript. because I, I, I got, I want to give
[02:48:12]  a, a big shout out. Um, and in this is kind of back and forth to the, to the remix guys, there's been a, you know, we
[02:48:18]  had a misunderstanding, uh, a year and a half ago or whatever, but, um, and maybe it's the temperature with next in the room, but, um,
[02:48:29]  they've been moving to VEAT. So a lot of the work that we've been doing, and I'd say we, but I mean, Nikhil Sara
[02:48:36] f, um, has been doing, uh, is actually paying back to them. So, you know, we're at one point we were accused of, you know,
[02:48:45]  stealing their stuff or borrowing it at, at, at best, um, basically they've looked now at what solid start does in helping them move on to VEAT.
[02:48:56]  So for example, we solved this very annoying problem of flashdown style content in dev, and to be fair, we got the idea from Svelte kit, like
[02:49:06]  Nikhil looked at Svelte kit, but Svelte again is maybe a less react framework. So it's more obvious when solid does it than say Svelte
[02:49:14] . So, um, but there's definitely been like this kind of change in attitude, um, Ryan Florence, I love server actions. Remix has them, except
[02:49:25]  you have to configure the run in URL yourself. I love the function becomes a URL API when I first saw it, saw it, saw it, saw it in solid start
[02:49:31] . My only issue is these, is these things used to be announced at React comp. Um, so yeah, I, I like, you know, I, and
[02:49:41]  I think this is kind of a sign of things a little bit, cause I think Ryan, all he ever wanted on, from the next side was a little acknowledgement for like
[02:49:51]  basically pioneering the nested routing solutions in React. And, you know, he felt like the next side of things just like, didn't even give him a shout
[02:50:01]  out. He, Ryan Florence is very quick to point out, um, that, uh, you know, the whole server function thing started with solid start, right? Or
[02:50:13]  server actions. So, um, that's, that's pretty, that's pretty cool. Um, I, I, I, I'm, I'm, I'm
[02:50:19]  glad to see this kind of friendship, uh, you know, friendliness coming from the remix side. Uh, so yeah, I, I, yeah, this,
[02:50:30]  this is cool to see. I just wanted to kind of point that out. Just the, the remix guys, um, we're, we're closer than ever with their
[02:50:38]  move to beat. And, um, you know, it's, it's really cool to see, um, kind of some acknowledgement on that side, um, in terms
[02:50:48]  of, in terms of that. Cause yeah, a lot of people have been talking stuff about server actions and I guess I never reacted too much to them because like,
[02:51:00]  we, we've been playing with them for the last couple of years, you know? And to be fair, even in next people have been playing with them for like
[02:51:07]  the last six months, you know, I guess they weren't stable, but like, um, yeah, I don't know. I, I don't have much
[02:51:14]  to say. I think, I think there are trade-offs and you, in terms of API considerations, but I think generally speaking, this is the direction that the trajectory
[02:51:24]  we've been on. And anyone who's been watching the stream for the last year and a half knows that the case, right? Like, um, right from the
[02:51:30]  earliest version of solid start, I was trying to do something more like blitz, I guess, but even though I didn't, hadn't seen blitz yet at the
[02:51:37]  time, but like, I was trying to do these like proxy based things. But the, uh, Nikhil Seraph had the brilliant idea of, of doing,
[02:51:45]  um, compiled server functions. Um, and he last, I guess it was April of 2022, he, he implemented them to solid start. So like, it's cool
[02:51:57]  to see kind of like signals how widely these patterns are getting adopted on one side, you could say, this is just inevitable, right? It's just like the obvious discovery
[02:52:06] . But on the other side, it's good to know that the hard work that a few people are doing here, you know, whether it's docs or on the
[02:52:14]  technology is making an impact back into the community. So with that all, you know, up in there, um, because I'm not going to lie, this has been
[02:52:26]  my week. I want to, I do want to kind of talk about maybe a more serious thing, uh, for a moment here, because, um, this issue was
[02:52:36]  opened at the beginning. At the beginning of the week, um, how long will it take solid start to reach 1.0? We have waited too long for 1
[02:52:44] .0. I should probably up that it's true. And I appreciate, um, Alex taking the time to respond to this. Um, and I think this is probably
[02:52:58]  the best answer. I was starting a response this morning and then I realized that I had the stream in five minutes and I had to go around and get my orange juice
[02:53:06] . Um, but I, I, I'm going to add a few things here because I like solid has the advantage of being a pure open source project with commercial interest.
[02:53:18]  So that allows the developers to take the time to find the best possible solutions instead of making forced compromises just to be faster. So it won't be prematurely presented
[02:53:24]  as 1.0 to the public ready when done applies. And I, I, I do think this is important because, I mean, it's kind of funny.
[02:53:32]  Next is getting a huge amount of pushback right now for not being like for depending on canary builds of react and not being production ready. And they're like, we
[02:53:42]  are production, but we're not production. Um, it's hard when you have an existing project and you're basically rewriting it like I would in the open,
[02:53:51]  we don't have that dilemma where we're at right now. So it's like, why would we double down and say like, this is 1.0 when we know
[02:54:01]  things aren't where they need to be, that things are going to be better. Like there's as much as we'd all like to see this happen myself more than
[02:54:12]  anyone, there's no point releasing something and saying, yeah, this is the production thing. And then like two months later going, okay, we're, we're changing
[02:54:19]  this. Like that's the reality of things we've learned a lot over the course of this beta. And so much so that beta two is kind of like a V2
[02:54:31] . It's kind of like a rewrite. You could have used version one this whole past year and it's been relatively stable. That was the beta we thought based on what
[02:54:50]  we designed and thought at the time that that was the best pattern. That's what we want the release, but we weren't certain. And we have now learned, we
[02:54:46]  have learned that it is close, but there are some things that have to be addressed. Right. Like. React has stated the circumference cells are stable, but the
[02:55:23]  integration points of variables are not. Yeah, well, this is the thing that I don't think it's hard for people to appreciate is the pattern is so different that
[02:55:31]  even if they know mechanically how they want everything to work. If they choose a certain API, a certain approach and go, Hey, frameworks use this. It might
[02:55:42]  not be the right one because they designed it with next in mind and not remix in mind. Like it's good that they're taking their time to kind of figure out how
[02:55:51]  to make this universal. you know, so like it's a challenging place because it is literally on the open. Everyone wants to use the latest and greatest. But
[02:56:05]  yeah, back off of React, I just want to kind of point out to here, and this is tying in with what I was talking about, where the where basically stuff
[02:56:17]  like server functions are product of the work that we've been doing on solid start. we're still learning, we're still improving, um, these things and we're
[02:56:28]  understanding what it takes, like the, the same work that reacts doing right now. In terms of like figuring out how frameworks can build on top of RSCs is very
[02:56:39]  similar to what I'm doing with solid start. I want to figure out how solid start can be generic enough of a layer that people can build any type of app on top
[02:56:51]  of it. This is why like it's a similar kind of process. The biggest benefit of this is that is we haven't released a production version of it. So
[02:56:58]  we were allowed to change it. We warned people we are doing our best here, but that is the point of a beta. Yeah, I want that too. I'm
[02:57:15]  not going to lie. Solid 1.8.4 has some secret sauce in it. I didn't wait for 1.9 to put it out. You know,
[02:57:23]  it's not officially released. We're going to, I sometimes use patch versions and solid to not, to introduce unrelated features that are not part of like that you would use
[02:57:33]  as a way of like testing them out. So that when, you know, 1.9 or 2.0 comes out or whatever that they're, they're there.
[02:57:40]  So like, yeah, I can, I, I can get, you know, I can respect that. But the challenge here is that if there's basically no point
[02:57:54]  trying to push a 1.0, that doesn't, isn't ready to go out. That isn't a thing. Okay, Rolande. I disagree with
[02:58:05]  this mindset. I have super appreciated the amazing work and thought leadership coming out of the solid team and put my money where my mouth is by backing. So it's a fair
[02:58:11]  question because calling something beta suggests near completion. And I think devs spending countless hours helping to support the project through adoption, filing bugs that deserve some more than it will be
[02:58:20]  done when it's done. Also preset start is take reset with beta two. Good. But with at least like the idea when we can expect to be available. I
[02:58:26]  paused all solid work in the meantime. Okay. I mean, that's fair. If he wants to pause solid work, I think that's perfectly his thing mandate, but
[02:58:34]  like it's, I talk about this a bit in the beta two issue, but these solutions, I guess it's the thing that's not, how should I put it
[02:58:49] ? It's the thing that's not like maybe a little bit below the surface. We're pulling everything out of solid start, but that means that work has to go
[02:58:59]  on somewhere else. So it's not as trivial as, as just, you know, going beta two stamp. We're actually have to look at like how libraries interface with
[02:59:10]  the framework, right? Basically, what are the, what, what are the, what are the pieces here? We're very similar, as I said, to the
[02:59:18]  RSC thing where it's hard to know. Like we, we, we have to shift in a whole bunch of different places just to get solid start out. Solid start
[02:59:29]  is the combination of these things. So every piece else has to update. So I spent a bunch of time, you know, updating one point for solid 1.8
[02:59:41]  to support like serialization stuff, which is important for the data fetching that we're going to be doing in the future. Not just in 2.0, but it
[02:59:48] 's all start. That's why 1.8 came out with the serialization. And then I've worked on getting, uh, async local storage in. These
[02:59:56]  are pieces that we need. Now we have a context on the server that will work through async requests, solving some of our issues that we had previously with server functions,
[03:00:05]  right? At the same time, Vinci is getting worked on, right? But these aren't myself. I'm paid. I work on solid full time. Everyone
[03:00:15]  else, you know, like Alexis has the specific funding that he's working on related to solid start and the serialization. And he's working on islands stuff, but that
[03:00:26] 's specifically for these performance improvements. And that's where he is. It feeds back into it, but it's different. Nikhil is completely volunteer. I can't account
[03:00:34]  for his hours, right? Like how do you, should I estimate solid starts? Release based on how long it would take me to do it by myself? I just,
[03:00:47]  just, just going to be real here. Like It's okay, I guess, to disagree with the mindset, but it's, it's like futile. Like,
[03:01:04]  as I said earlier, the work of solid is the combination of a bunch of people working on stuff through generous contribution. But if, if, if I was to take
[03:01:15]  the standpoint of how long would it take me to do it by myself? The number would probably be astronomical. I know that I'm not going to be doing it by myself
[03:01:26] . I know that there's amazing people stepping up to work. We're engaging those people to work on all the different pieces in the ecosystem. So yeah, I,
[03:01:37]  but like, like, I feel like for this fellow, perhaps the right answer is to give him the estimate as if I was to do it by myself. And then he
[03:01:46] 'll probably just drop it and drop solid and just leave. But I mean, I don't, I don't want to do that. But I mean, this,
[03:01:51]  this is the kind of scenario. Right. Because rewriting a meta framework from scratch after you've done it once by yourself. I said previously that making a meta framework
[03:02:11]  for the first time will take no less than 18 months. I think you could rewrite a meta framework in six months. For myself, I was trying to make the target
[03:02:30]  more like one to two months. But how would I, how would I tell, like, I don't, I, I want to get beta two out. You
[03:02:44]  know, this, this month actually was my, my goal originally, but I, I, I, I'm not going to, I wasn't going to say that publicly
[03:02:51]  because realistically, if stuff doesn't go my way, it could be March. I don't, I don't think that's the case. I'm making good progress,
[03:03:00]  but there's, we're dealing with enough unknowns that I think that people need to, to understand, like, you know, The, the truth of the matter is
[03:03:15]  when we released beta and we put the label on it, we did think we were close to done and we were mistaken. So there, there's a bit on, on
[03:03:22]  us on that. Right. I understand that this, but sometimes that's what happens with betas. You realize that you're like, yeah, not quite. People have
[03:03:31]  been happy with it. That's great. But honestly, not as close as people, as we thought, or as people thought. The, as I said, yeah
[03:03:41] , I can use up to, but that up to is going to be so large that, that like, it's, it's, it's, it's almost a
[03:03:50]  pointless conversation in itself. I believe this current segment will be the last one before 1.0. Yes, we've, I think we've learned enough, but I do
[03:04:00]  not see a fixed ETA. I too, when the devs tested a few times, I followed the fixed. My answer does not imply that the question is a pair
[03:04:08] . It's a timeline, the roadmap. And I appreciate it. It's a hasty, hasty, hasty compromises. Yeah. Yeah. I think
[03:04:15]  it's set expectations on timelines. If adoption is a concern, it's not a concern. I can't be worried about adoption right now. That's not where we are
[03:04:25]  at. It, it comes when it comes and the development community deserves to too, because they are mostly working free and non-commercial. Yeah. All I can
[03:04:35]  say to people in that situation is, I spend all my time on this stuff. And I have for years and years and years. And other people have spent significant portions of
[03:04:50]  their time right now. If that doesn't compel you, then I don't know what will. I realize we're all kind of consider our own interests, but
[03:04:59]  like, you know, uh, what are we going on? Non-commercial science. Sorry. Or if solid is simply being treated as a science project to prove the
[03:05:08]  benefits of signals for other frameworks to use, that's okay too. But should be clear about the expectations. Still looking forward to beta two so I can re-engage with
[03:05:14]  solid. Oh man. I, I, I, I, I, I get what they're saying. But when I look at solid and I look at, you
[03:05:34]  know, the things that people consider us competitors to, we have three times to probably 30 times less resources than them. Like, like, like the signals one is what
[03:05:47]  gave me such a chuckle. Like, okay. Sure. Like preact is pretty small like us. So like preact and signals, you know, like, and
[03:05:58]  their integration wasn't as deep. So it's easy for them to pick up signals, but like angular. Do you know how many people work on angular or the web frameworks
[03:06:04]  at Google? Cause now the, the whiz and angular teams are working very closely together and signals and stuff. And they, they have like another unified team as well
[03:06:13] . That's more people. Let's just say 40 people. Okay. How many people work on, uh, Facebook meta? I think the next closest to us would be
[03:06:21]  Svelte, but Svelte actually has three full-time paid resources. Um, so yeah. And you know, the community is a little bit bigger than
[03:06:34]  us, you know? So like, I think it's fair to say at least three X, maybe, maybe close to five X more resources than, than, than probably
[03:06:44]  we have, which honestly, that's not your fault. You know, person wanting to invest in solid. It's just a reality, um, you know, that
[03:06:52]  pretty much compared to things that you'd compare us to. And I, I'm glad that we're getting compared to these things. Cause it means the work we're doing
[03:06:59]  is relevant. But like, the, like, I can't, it's, it's obviously not my science experiment. The work is impacting other frameworks cause they see
[03:07:13]  what we're doing and we're doing good things. It's not like, what are we supposed to do? Like not do these things? Like before we did transitions with
[03:07:25]  signals, no one knew that was possible. Before we did native, uh, like universal rendering without a virtual DOM, no one knew that was possible. Like, I
[03:07:37]  guess that's a science project, but like, how else would you have us do it? Not, not do it. Um, yeah, I, I don't,
[03:07:50]  I don't even know what that means. I understand there's a certain amount of frustration here, so it's fine. It's just, I use it every day in
[03:08:01]  production. I don't understand. Yeah. And the problem is I think that you ultimately decide to go, okay, I'm going to chop the line here. I
[03:08:18]  basically, you have like a minimum viable and that's what you end up shipping and you always fall short. And that's true of all software, even open source products.
[03:08:26]  It's not like we just wait until it's perfect, but there, there has to be a judgment call on it. And you could say that it's because we
[03:08:33]  have the privilege of not having, you know, those kinds of deadlines, but we don't, because if we take too long, people lose interest. You know, people
[03:08:40]  get frustrated like this. It's just that if we error on the other side, things are much, much worse. yeah. And this is the best approach that
[03:09:03]  I can think of and basically approach it in more pieces. And I don't know if I did it in this other thing, because I basically, I basically suggested high
[03:09:21]  level, the pieces of all the work that need to get done in this issue. So I'll start beta two. I also went in the discord regularly where I put in
[03:09:30]  updates of like how progress is made, but each one of these requires a specific redesign and a specific design consideration and R and D to see what's possible in that. But
[03:09:41]  these seven things are basically what's in beta two. So if you, I guess there hasn't been much progress on our success of these so far, but this,
[03:09:56]  this is, this is, you know, as much as I can, this is where I come out with what's been happening actually is most of the changes aren't in
[03:10:05]  solid start. They are outside of solid start. So maybe that's where the visibility challenges, but I just wanted to kind of like put, I, I agree that
[03:10:14]  knowing what the things are, are, are the key to this stuff. Um, I'm trying to think if there's anything else in this issue. Okay. Yeah.
[03:10:26]  And finally, um, I think, so I'll start to have a clear roadmap. I wants to print solid start projects. I can come. Yeah. Yeah. The
[03:10:31]  thing is, yes, we're just not at a stage where it's easy for people to do that contribution because the decisions are too up in the air. If,
[03:10:44]  if, if anyone wants an idea of what's going on here, literally go to the next channel in, in, in, in, in, in our discord. And
[03:10:54]  you'll see me discussing this stuff with people every day for the last like several weeks talking through design decisions. I also write endless hack MDs on this stuff because solving
[03:11:11]  these problems is literally all I spent my time on here. Um, this, okay. I was, I, I, I only got to two days ago. Like I
[03:11:22] 'm still scrolling. You, you, you, like, yeah, I, I'm just, I'm just, I just want to kind of put it out there
[03:11:32]  and there's people helping with this project on their various pieces. Um, the, the big thing we needed initially was Vinci up the speed, um, so that we
[03:11:43]  can get server actions and stuff back. The next, uh, at the same time, we need the updates in the serializer. We need updates in the router. Lots
[03:11:52]  of this had to do with the router and the the way we inject context into it. Um, people will be able to help when the next, we get to that
[03:12:04]  next beta stage, right? Because then there will be something to do there. The problem is we can't release the next thing until we have enough functionality. And right now
[03:12:15]  we're kind of like, we have pieces of it, but those pieces will change very rapidly. So I just haven't got around to actually do any releases on them
[03:12:26]  because we're, we're kind of at this point where we're not next, um, scenario, but I don't want to break the people currently working on solid start
[03:12:36] . So, um, there's a little bit of treading carefully, but a lot of the work, um, is, as I mentioned, related to the router.
[03:12:49]  If you actually look at the list of things that have to happen, we base off Nitro's adapter and Vinci. Okay, done. Merge start CLI
[03:12:54]  with a cell community project. I need to follow up with this. This apparently is fairly trivial, but we actually need to finalize what this detail looks like. Okay.
[03:13:02]  Update the entry point. Not done because we can't pull the router out here yet. We have the meta provider out here, but we can't pull the router out here
[03:13:10]  yet. Router change required. Stop aliasing other libraries. Mostly done, but again, have to do stuff with the router. Update the router. Um, better
[03:13:20] , better middleware. Um, we have a solution for this. I'm probably going to throw it out there soon as a proposal so people can look at it and see
[03:13:30]  if it does what they need it to. Um, I think after the last few streams, we are finally here. And if you've been following along, I've
[03:13:41]  been doing a lot of exploration on this side. I think for now we are following reacts use server use client. Um, I proposed a completely different thing, which is a
[03:13:49]  lot of people were excited about because it actually made more sense from like, uh, 10,000 feet, but I'm, I don't know that a fighting react
[03:14:04]  is smart. B, um, it actually makes sense from a practical standpoint anyways. So yeah, as I said, um, we've got some great feedback here that
[03:14:21]  we've been looking at again, router. Yeah, I don't know about this, but I think we already fixed this innately by the changes set up. So
[03:14:42]  if you're interested in solid start, we should talk about the router, shouldn't we? Right? Yeah, I'm just leading back. Yeah. No, thank you
[03:15:02] , Luke. It's true. I, I'm not going to lie to people about the state of where solid is at any point. I have no interest. It's
[03:15:08] , I'm not trying to like sell people on and it's so hard that I have to be like, Hey, we've got this thing. You should come use
[03:15:14]  a, I don't sell like that. I've never sold like that. If people come and use solid, it's because I'm hoping because of what the framework does
[03:15:23]  or enables for them. So yeah, I have great ambition for what started accomplishes. And I think that's really where this comes in. Yeah, this is one
[03:15:38]  of the tricky things here. I actually, I think you server at a file level is actually kind of useless for the way I'm designing APIs. I actually kind of don
[03:15:49] 't want people to do it. I mean, they could, I think, I think having the flexibility is good, but this is, this is Yeah. We'll
[03:16:01]  get into this a second. Can you talk about your full time work on solid? I'm sure it's not just head sounds. Hardly. Oh man. Yeah.
[03:16:11]  Cause maybe, you know what I can do that might be helpful. I'll talk to the core team about this. Can I show you something guys? I'm going to
[03:16:20] , I'm going to put something on the screen. That's a little bit private. I don't think there's any private information in it. Me and Alexis and
[03:16:25]  Milo, when he's available, do something called async standup. I actually run our stuff very much like a normal company development team, but we work at different
[03:16:37]  hours. Uh, Alexis is 15 hours ahead of me, so it makes it difficult, but I've, I've worked in that scenario. I once was, uh
[03:16:46] , uh, QA lead over a team of where my whole team was in based out of China. Um, every day we do stand up every day. I, we
[03:16:58] 've been doing it since I put this in place. Um, but which since I think August, but there is there, there every day we do stand up. So
[03:17:15]  I, I don't know, I could make this channel public perhaps. And then, you know, that give people even more visibility. Yeah. August 7th, we
[03:17:23] 've been doing standup every day. So yeah, I don't know. Maybe that's the kind of visibility people want into it. It's the consideration. Um
[03:17:35] , but yeah, the, the, the work is being done and what you're going to see when I, if I pull up my standup here is like, it
[03:17:43] 's a combination of R and D, like looking at solutions, a combination of design. It's a combination of reviewing PRs and looking at people's issues. It's
[03:17:55]  a combination of working on freaking stream covers, uh, approving designs, looking at people's benchmarks. Um, it's, uh, prepping. I spend a
[03:18:12]  huge amount of time prepping for prep, uh, presentations. Uh, I do a lot of slides. Whenever I have a talk, it usually takes me about a week
[03:18:21]  of time. Uh, I can reuse most of my talks, but sometimes I've recently been turning them more down because I don't, I don't have time for
[03:18:28]  it. Uh, yeah. And the problem is like, so like, if you're wondering how much my time goes to actually sitting down and coding on a given week,
[03:18:40]  it might be like two out of five days. Um, two and a half, if I'm lucky, you know, I've been able to focus on it more recently
[03:18:50] , which is why I wasn't on Twitter. But I also man our social media, um, accounts. Um, I've offloaded that at times in the
[03:18:59]  past. Um, I bet. Yeah. I don't know. Yeah. Yeah. Yeah. Yeah. Yeah. I, I, I, I, there's
[03:19:19]  reasons that we don't put everything out in the open, because we don't want to, you know, set expectations like designing. Look at this reviewing docs designs.
[03:19:30]  Uh, that's cool. Yeah. We, we had some lady blue notes in here. I, I, I've been trying to get more active with the team.
[03:19:36]  Me and Alexis are vigilant. I was trying to get everyone else in here as well. Um, doing standups. I think it's a cool idea. The thing
[03:19:43]  is, it's, it's, it's not a one man show. That's like, that's like saying someone that the CEO is a one man show. It
[03:19:54] 's that ultimately, yes, I don't need to go write all the code. Like a lot of Nikhil has done more work on solid start than I have,
[03:20:04]  but someone still has to be aware of everything that's happening and be able to make decisions and execute them and, and push R and D at the same time. You know
[03:20:16] , uh, I'm also very, I, I try and spend my time. I'm active in the JavaScript singles TC39, um, thing, which, you know
[03:20:24] , has some kind of time pressure to it because you have to make sure that, uh, you know, everyone gets aligned for that. So I, and then in
[03:20:30]  meet weekly meetings and discussions around signal future signals design, because, you know, make sure it's all represented. Um, yeah, I mean, it's not earlier.
[03:20:41]  I was explaining how it's not just me that a lot of people are doing stuff, but there is a lot of facets of it. I, if it was just me
[03:20:52] , this would be impossible. Like this would be just astronomically impossible. It's just that I myself am very busy, so to speak, but I do think that
[03:21:04]  there's varying benefits to everything. And I, part of my job, in a sense, in a sense, are, are these streams that we're doing and we're
[03:21:14]  talking about right now, because this is, this is keeping face. This is talking about things. This is getting people learning about projects. And because I have to do
[03:21:26]  this groundwork research anyways, right? Like it's important that I, I stay connected and I know what's going on. So like, this is just all part of
[03:21:35]  the, of the parcel, right? It's not just like one guy writing code. The exact point is it's, it's, it's not. And because
[03:21:42]  it's not, we scaled beyond just developers sitting on their laptop on the couch to like managing a whole bunch of variable assets. It's not like I have many full-
[03:21:55] time employees, so to speak. It's like juggling a bunch of people who have all their own incentives that don't, uh, aren't getting paid for it
[03:22:03] , um, necessarily. So it's like, you know, I, as I said, I appreciate what everyone does because it wouldn't be possible otherwise, but it's
[03:22:11]  also like, you know, making sure that you can direct people to be able to help. You know, I've been engaging people who help with projects like the router.
[03:22:21]  You know, there's, there's too much where there's opportunity. I try and pull people in so that they can take on that responsibility if they want to,
[03:22:28]  but it's always hard. You need like a few people who are especially motivated, who can actually drive a lot of the stuff themselves, right? Like who can handle that
[03:22:37]  stuff, right? In a lot of ways, like Nikhil, for example, and Alexis can kind of go off on their own and like discuss them on themselves and figure
[03:22:45]  stuff out without me being involved. I, you need people at a certain level that takes time to invest in and it takes their time to have available and commitment. So
[03:22:55]  this, you know, you know, Sarah's leading docs, incredible effort, you know, um, it's translating that to things that everyone can come and do a pull
[03:23:07]  request on is hard, especially at certain stages. Coworking stream when that's fair question. Um, I, I, it's funny cause there's like, I
[03:23:20] , I have meetings, me and Alexis, you know, have an evening meeting that goes a couple hours and we dig into stuff. We could probably just do them straight
[03:23:27]  on the discord if it made sense. Like where we get into really technical stuff on start. Um, sometimes Nikhil will be around like, yeah, I don't know
[03:23:36] . The funniest thing is except for those unique opportunities where we get to sit down and actually like co-code. Um, when I'm interested in other people solid,
[03:23:49]  my interaction is not as I'm, I'm like the manager. I'm not like, it's not like the, there's not a ton of like, uh,
[03:23:57]  peer pair programming, if that's what people are looking for. So I'm not sure it'd make a good stream. Uh, but yeah, I, I think
[03:24:05] , I think, I think people, I'm hoping you can get the idea here. Right. Um, I like when I went and did the conferences for two months,
[03:24:19]  basically nonstop in the spring. Uh, I was the only one working at solid start on solid start at the time. It did kind of go on, on halt
[03:24:28]  a bit. Right. Arguably it wasn't the right time to do it maybe, but that's when the conferences were. And it was, you know, you could
[03:24:37]  argue how good it was for showing face, but you know, you know, like, do we get as many new people interested in solid from the conferences? The funny
[03:24:47]  thing is, I don't know if we did from the, from the attendees, but we definitely did from the speakers wouldn't have such great representatives in the solid community like
[03:24:54]  Attila, who we had on last week, if it wasn't for meeting him at a conference, I'm pretty sure, you know, like, um, he's
[03:25:00]  recently been working on a remake of the solid intro video, right? This is how projects involve people, not just code. And those connections need to be made. And they
[03:25:12] 're, those people connections are probably even, I mean, not probably, they're definitely more important than any of the technical stuff we're doing. Right. So,
[03:25:21]  yeah, I think, I think to put that in perspective, you know, you know, maybe, maybe it would be useful to give people a bit of a, uh
[03:25:35] , you know, a look under the hood of, of what it looks like to work full time on an open source framework. Right. I'm not even talking about
[03:25:43]  my involvement with Netlify, which, who keep fairly hands off, but again, I need to understand, we need to understand each other to benefit from their, from
[03:25:53]  like arrangements. So spend time with the team, understanding the latest platform features, tell them, talk to them, you know, planning around what frameworks are going to release.
[03:26:02]  Like, yeah, there's a lot of things, you know, but this all works towards a common goal. So like that's valuable. Hey, Dev, you
[03:26:14]  just caught the, catching the end of me ranting about, it's not even ranting, but about answering the question of how long it will take for solid start
[03:26:23]  1.0. Yeah. Sorry. Going back here. I solid JS. Maybe I should just say this one more time. Solid JS. One repo. Solid more than
[03:26:38]  one repo. Let's, let's pick another one. Solid playground. Let's see how many commit, let's see how many commits are here. Contributors
[03:26:45] , 26 contributors. Nope, not even here. Let's pick another one. Solid docs. I mean, solid docs next here. Let's go here. How many contributors
[03:27:02]  to this one? 51 contributors to solid docs. That's amazing. Oh, wow. I don't think I'm even on here. Okay. Let's keep on
[03:27:11]  going. Let's keep on going. Solid site. Hmm. Solid has a website. Let's go here. 160 contributors. Oh, I did contribute in this one.
[03:27:31]  Let's look here. To be fair, this is like all day vid, so. All right. There I was. I did something one at some point.
[03:27:52]  Uh, where are we? Templates. Those vtemplates that everyone uses. 40 contributors? Okay. Am I on here? I think I'm on here.
[03:28:16]  Oh, there I am. I did commit once. How about solid refresh? Where was I? I think I've done some work here. I think this one might
[03:28:25]  be kind of split. 10 contributors. Not that many people were to solid refresh. Okay. I am the winner. I beat Alexis by one commit. Okay. How
[03:28:36]  about solid start? Let's look at solid start. Solid start. It's a good one. Because I was the only one maintaining it for a while. Let's,
[03:28:48]  let's go here. How many contributors there? 165. That's nice. Okay. Now, my guess is I'm going to show up as the highest contributor,
[03:28:56]  but I think it's misleading. Yeah. Okay. 520 commits. Then Nikhil's serif, 435. And then other Nikhil's serif account
[03:29:07] , 160. So yeah, Nikhil's a winner. But yeah, so me, me and Nikhil are about 50/50 on solid start. But, like,
[03:29:21]  the funniest thing is, like solid has the most maintenance, but most of my commits, and it's hard to see on the complexity here, are like, are like
[03:29:31]  these little PR things. This has by far the most commits over the whole age of stuff, but I like, it's, yeah. Anyway, I'm gonna, I
[03:29:46]  could just keep on going, but I'm not going to. Yeah. What about the router? Yeah. What about that router? Yeah. Yeah. Okay. Sorry
[03:29:58] . Give me a second to drink some water. I think that. Oh, we're downloads are up. That's nice. We're kind of also having him.
[03:30:34]  Yeah. Yeah. Okay. Yeah. Ryan Turnquest. We say something else, but that something else is, is, is, is, is Marco. We kind
[03:30:43]  of switched places. Um, and he built Marco Run, as Michael Rawlings was telling us the other week. Yeah. But the router, is Ryan Turnquest still the
[03:30:52]  winner? Let's see. Okay. No. Ryan did all the work here. See, I did the early work. Then Ryan did a huge amount of work to make
[03:31:02]  the router what is today. And then I've done sparing work here. Right. So we need some new help on the router because the router is probably the most
[03:31:14]  important project other than solid start. Well, other than solid core, but like out of the library projects. And I've been kind of, uh, David put an advertisement
[03:31:24]  out on, uh, Twitter and we got some hits and people willing to help with this, um, to varying degrees, even the, the man Tanner himself, but
[03:31:33] , um, you know, figuring out stuff forward, but there's, there's, there's still some stuff that needs to be figured out. Yeah. There's
[03:31:45]  always fear of it being abandoned. Yeah. Um, well, I don't know. You're right. It's always possible. I'm just, you know, one
[03:31:58]  day, am I going to wake up after doing this for seven years and being like, I'm done? I don't know. But there's, there's,
[03:32:04]  this has grown beyond me. So to such a large degree though, like they're just, there's so much stuff that, um, you know, needs to be done
[03:32:14]  over time. I think one of the biggest challenges is that solid is different enough from react that I can't just onboard people in the same sort of way. They have to
[03:32:25]  understand the vision of it, not just like, Oh, this works in react. Let's do it. But I mean, that if people want to step up and
[03:32:31]  do stuff that way, that's a good starting point. Ryan Turnquist got involved with the router cause he basically ported react router to solid. And then I was
[03:32:38]  like, okay, let's do this, you know? And I think that, you know, the same could be said of other stuff. Yeah, yeah, yeah,
[03:32:50]  exactly. Um, okay. But I wanted to talk about the router a lot because I've been, I've been working a lot on, you know, my,
[03:33:04]  my docs here and I was kind of a while, a few streams back, I presented this create async and cache API. And I still stand by this design, but
[03:33:14]  I realized a few things in the, in the last week that completely change the thinking. First of all, I spent a bunch of time, um, examining next JS
[03:33:25]  is caching solutions and then bugging people on Theo's discord about like, why does next do this? Is this weird? Um, So a lot of my work
[03:33:39]  has been about decoupling the router, um, from solid start as mentioned. Yeah. I was thinking when you said some routers, you know, yeah. Um
[03:33:49] , yeah. Yeah. It's an interesting challenge because I'm actually not interested right now, at least of decoupling cup decoupling, um, um,
[03:34:05]  our server component mechanisms from the router. I think it's actually challenging enough of a problem. And I think I, I give it a credit on react side to think of
[03:34:16]  this in a general sense, but, um, right now, well, I mean, they're kind of can be decoupled from the router. Cause if you serve
[03:34:27]  a page and treat it as server only, you don't need the router. It's just to do the partial nesting. That is a router problem. Um,
[03:34:36]  so is it similar? Maybe on a certain level. Um, I, last week I gave an example of how I decoupled, uh, solid meta and I showed
[03:34:52]  that solid already had a way of injecting tags in the head automatically, um, built in. So I put that right into solid meta and then solid start didn't need
[03:35:01]  to know about it because it just uses solid. And since meta knows how they inject tags into the head using solid start didn't need to know about it. The router
[03:35:10]  is a little bit trickier than that, but there's an idea of which I talked about last week about get, uh, a request event, which is going to be
[03:35:20]  universal on the server side using node, uh, local storage, which means that a router could read from that directly and get it, get the request, like the URL and
[03:35:27]  stuff. And then again, it wouldn't, solid start wouldn't need to know about it as long as like they could share some kind of convention. Yeah. If
[03:35:42]  Jesse, if you have a link to this, I would probably be very interesting, interested in this because I, and I, I've, I've, I've,
[03:35:51]  I've been doing a bunch of work here because I wrote this table because I was like, persistence is a tricky problem. Cause when I wrote cash, it can mean a
[03:36:02]  million things to people. And I was like, I made this table. Cause I was trying to like, see if I could notice a pattern because everything from what I
[03:36:11]  call the preload cache, which is like the link hovering all the way down to the database for persistence. There's like tons of levels where you can store things and then
[03:36:21]  throw them away, throw them away and invalidate them. And it's, it's kind of like a challenge to figure out like the benefits because like some of these
[03:36:34]  things like a CDN generally aren't personalized or like Vercel's data layer. Like you can use the fact that this is unique, like the cache headers or the
[03:36:42]  URL, like maybe you have some access token on it and then it can be personalized, but the mechanism is, isn't scoped by default. I think. Um
[03:36:49] , there's like other things like say the request cache, um, like that lasts a life of a server request, which, you know, just gets thrown away. Like
[03:37:01]  it's very ephemeral versus something like some based in the user session or in the page, you know, like, like the page load, which lasts a lot longer
[03:37:12] . And I started trying to categorize a bunch of these caching solutions to decide like what behavior you wanted. And one interesting, uh, thing that I observed that
[03:37:22]  occurred to me at first was that the cache, the cache API is very composable because it takes an async function in and returns the async function out. So you
[03:37:31]  can wrap as many of these wrappers around the cache as you want, right? You can just kind of like build them out and get the the behavior and, um
[03:37:46] , and I, I, uh, I think we can use this and leverage it to our advantage. I think one of the hardest problems that I had for solving this zone
[03:38:01]  is that create async. Yeah. I don't know about this API, but create async. Um, everyone likes because it's very easy. You just have
[03:38:11]  a reactive expression. You've called your fetch call. It looks nice, but this is actually at odds with making hydration work because you, when you run this on the client
[03:38:20] , you don't want to fetch again, what you already fetched on the server. And if you can't get in the middle, like we can with the current create
[03:38:26]  resource where this, the two halves, we can't stop the promise from happening essentially, which has been the whole problem here. So I thought, well, then we
[03:38:36]  need to add a cache just to do plain hydration and react needs a cache. Um, you know, to, even if you forget about waterfalls, um, I,
[03:38:46]  I believe the cache is really important. Um, even for like the way suspense works, like you don't want to use use memo or like they don't have that
[03:38:55]  like if, if the same component reruns again, you don't want to fetch the function and they actually need that mechanism core. We already have create resource or create as
[03:39:05] ync or whatever to be able to, to handle these scenarios. So we don't actually need another primitive. Like why would we use cache? Well, cache has benefits in
[03:39:14]  that you can hoist it above. You can do preloading, you know, a few other things, But, um, it occurred to me that this whole
[03:39:23]  world gets a billion times simpler. If we could just somehow make hydration work without the cache, continue serializing the create async. And the reason this is important is
[03:39:39]  this API is better for composition. And I'm going to show you an example of why this API is better for composition, because if you've, if you've ever seen
[03:39:51]  create resource, actually, you know what, I might have to pull up discord to find what I'm looking for here. Um, let me see if I can find
[03:40:02]  this. Um, do, do, do, do, do, do, do, do, do, do, do. Maybe, maybe, maybe I, I had
[03:40:08]  something where I will get to that in a second. I had something that was kind of cool where, um, let me see if I can find create resource. I have
[03:40:20]  to jump up a little bit here in my, my thing, but yeah, no, not that. Um, yeah, here it is. Create async versus create
[03:40:37]  resource. The problem with create resource is that if you want to refetch something, if you just wrap the fetching function, you have no way of doing it because
[03:40:55]  it's not reactive, it's untracked. So there's no way to trigger like a revalidation and solid doesn't re-render, right? Like
[03:41:03]  solid, you render everything on the page or you listen signals. And then you're like, Hey, like think remix style where you're like, I've reloaded the
[03:41:10]  page. I want to update the, the data. Like I want to, uh, I want to refresh the data for this page. You're not going to re-
[03:41:17] render the page. You're just going to update those resources. And you want the router to be able to trigger that invalidation basically automatically. Well, if you wrap
[03:41:25]  only this part, you can't do it because like it's detached from the reactivity. What people do is create resource returns a refetch. And then what you do
[03:41:37]  is you basically wrap the whole create resource and then register all the refetches and then call the refetches from your caching solution. This is how solid critical
[03:41:46]  works. This is how the, um, you know, a bunch of them work. And it's kind of awkward because then you, you need to create loader or
[03:41:55]  create, um, you know, like route data. You need like to start building primitives on primitives. And the problem with that, which is fine pattern for end
[03:42:03]  user final libraries, like solid query, you know, use query or create query, but it's not good as a baseline because then people who want that functionality, like
[03:42:12]  if someone else builds off create resource and you build off create resource and you want them both together, it doesn't work. It's not composable. Um, you know
[03:42:21] , no multi inheritance, so to speak. And I, I, I create resource because it has refetching kind of has to have the mutation APIs. So it
[03:42:31]  has all these complexities and if you want to make it a store, well, you have to diff on the fetch. And because it has the mutation APIs, you have to
[03:42:41]  mutate on the, you have to, uh, diff on the mutation. Like you're basically stuck in this really awkward zone. And this is why create resource is so
[03:42:50]  overloaded. Like if you want to handle hydration, like this primitive has to handle literally everything, expose it out, and then people have to wrap it completely. And
[03:43:00]  it's really, you know, a pain in the ass. Whereas create async, you know, doesn't have these problems because it's reactive. Like if you wrap
[03:43:09]  this fetch call, then you could do what you want with it. You still have the reactive context here. If you, if you don't have, I didn't
[03:43:18]  show the signature, but if you don't have mutation, then all the stuff you need for stores can happen in the same wrapper. And what I, I'm hoping you
[03:43:26]  guys are still following me, but let me show you what I mean by that. I made an example called, um, uh, which I've been doing this to do
[03:43:37]  example for the last couple of weeks. And I made a version that used the proposed cash and, uh, and action APIs. Right. And this one was pretty good
[03:43:53] . Um, use create async, which I realized that I could basically fake create async, um, by, by passing the promise from the first half into the
[03:44:07]  second. What I mean by that, I think I show it down here is, um, create async is basically just create resource where you pass the promise through. So
[03:44:20]  you generate the promise on the first half and then you pass it straight through the thing with create resources. If you send only one argument, it assumes it's not reactive
[03:44:28]  and it's the fetcher this way. If you do this, you basically make a, a weak version of create async. So I, I, I basically did
[03:44:37]  that so that I could set this up and you're getting to where I'm going to get to here in two seconds. Yes, exactly. This is the problem here.
[03:44:54]  I, and I, I'm going to throw one of those crazy ideas out. And you guys can tell me how terrible an idea it is, but just this,
[03:45:00]  if we can just assume for a second, like obviously you could solve this with a cache for hydration, but let's, let's, let's assume for a second,
[03:45:10]  I'll get to where I was talking about in a minute. And when you guys can shoot down my crazy idea, but where I was getting at is I just made this
[03:45:23]  API. So I just went cash, action, action, this, this, this, and actually, if I refresh this page, I think we're going to see
[03:45:31]  that I actually updated it or I made it even simpler where I put the cache inside the fake API. So then I just import my functions from like a different location. See
[03:45:47]  that, that API was a good example of like, if this whole fake API was used server, then I'd wrap them here. But I was like, okay,
[03:45:54]  let's pretend that we're not doing that. So I'm going to import my functions directly from my API, just use them directly. Cause this is more of like the
[03:46:01] , what the feeling is. I've got some optimistic updates. I think I showed this example on stream before, but it's like, you do this and then like,
[03:46:08]  it might fail and then you can edit it. And this is like the full updates. I made a version. I forget, did I show you guys the version I
[03:46:17]  made with forms? Um, last week, I can't, I can't remember if I showed the, does anyone remember if I, if I showed the version that worked
[03:46:26]  with forms, I actually made a version work with lowercase form anyway. And I, I, I, I, yeah, action for those, if I didn't
[03:46:36]  say it before action, getting given a name is a way to solve that form problem. I'm not too worried about that. Um, we just need to give it a
[03:46:43]  key. And then essentially we will work for SSR. If I don't need to do any crazy serializing the bundle garbage I was talking about before my, where I
[03:46:54]  was going to get to get here is I'm going to go into this file and look at our fake API. And all I did here was like, get to do
[03:47:02]  is this cash create delay to do's action, action, action, cash. So I pulled this out now into here. Okay. And then the API kind of works as
[03:47:12]  you, as we want, as I mentioned, uh, create async. It's just to create resource that passes the promise through. So, okay. This seems,
[03:47:25]  uh, where am I going here? This seems like not a bad experience. You can preload the thing ahead of time in your component. You can wrap it in a
[03:47:36]  create async. Um, you can use, you can either use it form directly, or you can go, you know, call the submit, get the submit function using
[03:47:46]  the action. You can use it in flight submissions to do optimistic updates. This like, you know, so yeah, this is, this is all fine. But one
[03:48:00]  thing that I noticed was this, let's look at this. I mean, everyone probably notices this, but let's, let's close this down for a second.
[03:48:09]  And let's look what happens when I have a couple of these, I have three of these items here. And then I start typing in this box. So I'm
[03:48:22]  going to go GGGG. So now I've updated this one when I on change out. Oh, it collapsed. The reason it collapses, this whole div was replaced
[03:48:32] , not just the thing. The whole div was replaced when I, when I, when I, when I updated it. And the reason it replaced is because we're
[03:48:40]  just using a resource. So when we updated the signal, we, um, we got a new object back from the server. These ones stayed the same. So the references
[03:48:50]  were the same, but if they weren't, if we sent back the whole list and it wasn't, uh, you know, using equality checking like it is, this
[03:48:57]  whole list would basically re-render. Sure. You don't see it in the client. It looks fine, but it's actually recreating this DOM element, this
[03:49:05]  whole div, this whole role. So not exactly what you want. So I'm like, can we get stores in here? And if you use create resource, we have
[03:49:15]  this experimental storage API, right? And the reason it was experimental is because I kind of knew that it wasn't actually, let's, let's not do that. Let
[03:49:28] 's just do where's this. Let's just go to me. I was like, let's, let's add store behavior to it. And if you go into
[03:49:50]  our, my fake API file, what you're going to find is it looks the same as it's looked so far. Um, cash, action, action. I didn
[03:50:00] 't change this file. And in fact, if you go into index, HTML, I didn't change this file at all either. It's actually working the same.
[03:50:08]  Now it's arguable that I could, that I could expose this outside. But what I did was when I went to data TS, I was like, I created two
[03:50:17]  functions. I have the simple cache, which is the cache mechanism that I showed before. Um, that, that basically uses some kind of map based on the key,
[03:50:29]  which I think, what did I use for the key for the cache? It's right here, isn't it? Uh, key. Yeah, actually I did something very
[03:50:38]  simplistic here. I let the end user set the key. So they just return a function. The function gets the same arguments that the function gets. So if this had an
[03:50:46]  ID, you get the ID here, right? Like if this was like ID, then you go here and you go, what, what is this? Oh, it
[03:50:51] 's ID. Oh, ID string. So my function has ID string. So the key has ID string. And then you can go like to do's plus ID. You
[03:50:59]  get the idea. So you, um, but what, what the important thing is here is that I had my cache and then I export cache is actually, again,
[03:51:14]  being composed. Again, we can pull this out, but I said, I just took my cache and I wrapped my async store and then, you know, made that
[03:51:24]  the cache function because it's composable. And what's the async store? Well, it creates a store. And then if the objects that gets is a promise,
[03:51:32]  it attaches the end and sets the store with a reconcile function and then returns the stored up value. So the store is just an empty object with a value prop. That
[03:51:42] 's whatever the value comes in. And then we diff the value and then we return the value in. And as it turns out, the simple wrapper that literally can just wrap
[03:51:53]  the function up for that you pass in for create resource or whatever, like the, the fetcher function, you know, like the cache function. Now, when we look
[03:52:01]  at it inspect, do, do, do, do. And we open these up and let's add something new. Okay. Oh, really? This example's not
[03:52:20]  going to work for me right now. That was weird. Okay. I must've broke something in this example since the last time I looked at it. It's fine
[03:52:33] . Um, let's go here again. I could probably show this simply from, from, from here. If I change this text and let's keep this. Did you
[03:52:46]  see that? It didn't replace the div. Yeah. The, the, these elements updated because they did, but it's, it's using the reconcile function essentially
[03:52:58] . So instead of replacing the whole thing, it's only updating what's changed using the store diff. And I did this simply, I mean, you saw the code,
[03:53:07]  um, a second ago, it's like literally like promise then reconcile and return that. And that's the basically the cached value inside create async. So it
[03:53:17] 's internals become a store. And then it just diffs when the new data comes in, but there's no storage option, create deep signal, none of that.
[03:53:24]  It literally is just like the super promise then set store, you know, the reason is because I don't need to expose the setter because the create async can't
[03:53:35] , um, mutate. The idea is if you want to mutate, you do something like create writable. Um, I don't know if I've talked
[03:53:42]  about this much on stream, but the idea is you wouldn't change the data source. You would derive something that acts as like a temporary writable on top. So like
[03:53:52] , I mean, I don't have an example here, but like, if you wanted to update, um, a to do, like, let's say you're iter
[03:54:01] ating over the to do's and you want to have an editable version of the to do that wasn't getting pushed back. You'd go like const, um,
[03:54:09]  you know, t set t equals create writable. Um, and, and then you could like, like, let's say you want to update the title, right?
[03:54:26]  So you go like this, set title equals create writable to do dot title. And then what would happen here is it would initialize like a memo that whenever this
[03:54:36]  changed reactively, it would update. So it'd be still part of the reactive graph. And then you could temporarily use set title to override it until you saved it back
[03:54:46] , which would trigger the reactive graph. This is so that the reactive graph, this fixes the need for create computed, which is a whole other topic. But my point
[03:54:55]  is there, there's ways to take a reactive thing and make an ephemeral state that drives off it. This is good for like controlled forms and stuff. Um,
[03:55:03]  this primitive is actually really easy to write. Um, it's just like a memo that returns a signal, but it's probably going to be core and solid in 2.
[03:55:11] 0. But in the meanwhile, it's like three lines of code. Um, my point is we don't need to build the mutation APIs and to create any sync,
[03:55:19]  which drastically simplify stuff. I'm getting somewhere. What if you need to change the reconcile options? Yeah. Yeah. I didn't put this here, but, um
[03:55:29] , let me Okay. There's actually a simple solution for this options options. You just define them on the, on the store, right? Like the be fair for
[03:55:56]  this to actually work. We'd have to do this and pass the options through the cash here. I don't know if I want to combine these. I'm just,
[03:56:03]  I'm just throwing, I'm just kind of throwing it out here that, um, yeah, this, the, this is just kind of prototyping like what the
[03:56:15]  mechanism would be, but my, we could definitely configure it on a per cache. I actually kind of like this because each cached thing could set its own reconcile logic,
[03:56:27]  right? Anyway, it's so, you know, this one works because they use IDs and IDs as the default, um, reconcile option, but you, you just
[03:56:38]  configure it on your cache essentially and go like, you know, similar to, uh, what create route data does today. So this is viable. This simple wrapper works
[03:56:48] . Um, the only problem, the only problem is hydration. So, okay. Okay. Are you ready for this Greg? See if I can find it here.
[03:57:10]  It's easier to show you than it is to, to, to do this. Um, I'm actually gonna have to edit an, an issue. Give me two seconds
[03:57:23] . Yeah. See, I'm showing it right here. This is the create a sync to store thing, but okay. Let's do this right here. Okay.
[03:57:37]  I didn't finish my example. Here you go, Greg. Do you, do you, do you understand what I'm showing you? Is this the hackiest thing you
[03:57:56] 've ever seen? Okay. This only happens during hydration, during the synchronous execution of, of, of create async. You don't run it any other time.
[03:58:11]  And I can't believe I'm going to suggest even doing this, but it solves everything. Yeah. I, I, I knew you're like, I, I
[03:58:38]  knew you were going to be like, man, but like, it's unobservable except for that small async execution. Okay. What I am suggesting here,
[03:58:50]  and this is where you guys like shout at me and throw fruit. I actually literally say that. I see you patching global fetching. Yes. I patched
[03:59:06]  a global. Yes. And it's so funny. I literally came up with a solution right after being Theo's discord and being like, I'm too much of a gentleman
[03:59:14]  to patch global fetch. But, but just think about this for a second. When it runs the front half of, of, of, of the function, you just
[03:59:31]  try finally to make sure it restores. You basically make all the promise constructors and the fetch function basically no op. What I'm not showing here is that,
[03:59:41]  look, I'll do it in a browser for you. People are surprised about how freaking broken JavaScript is and security and all this, but look, let's just do this
[03:59:49]  right on the browser. Okay. Okay. Um, um, um, make this really easy. Let's go P equals promise. Okay. Promise. We all use
[04:00:00]  promise, right? Okay. And we will make, um, what else should we do? Uh, F equals fetch. Okay. Good. Or it's lowercase
[04:00:14]  fetch, isn't it? Okay. Sweet. So if I go new promise, it's going to complain, you know, a bunch of stuff, but if I go
[04:00:24]  promise equals, well, actually, did I make it right here already? Yeah. I mean, this is, let's do something simpler than this. I won't patch
[04:00:34]  all the methods promise equals class constructor console dot log. Hi. And if we go fetch equals return promise or new promise, that also is nothing. Yeah. Now,
[04:01:06]  if I call fetch, what do you think is going to happen? it console logs high. And the thing is reactivity. Yeah. It's the problem. Problem
[04:01:20] s not revolve. It's not there. I have to actually, there's a little bit more that I have to do here. Um, let's go back here
[04:01:31] , try resolve return new promise. Okay. Let's do this. Oh, damn it. Resolve. Return new promise. Okay. Let's try this again.
[04:01:58]  Okay. But the thing is, you have to understand is, is the reason, the reason this works is because reactivity can't track past the first await. So
[04:02:15]  like, it doesn't matter if the function never finishes. If someone writes create async, whatever, you know, and goes and writes, okay. I mean,
[04:02:28]  we can, we, we can make this right now in the browser while we're hacking here, right? We can go, okay. Let's make a signal a
[04:02:33] , right? Um, console dot log um, signal, right? So now we got a, right? And then let's make, um, then we have our function
[04:02:53] , right? So our function that we're going to run function equals, you can pretend this is what we pass into create async is going to basically, um,
[04:03:04]  create a new promise. Um, yeah, I'm trying to think how I want to show this off. Um, let's make fetch user equals um, like some API
[04:03:19]  that we use. Um, doesn't really matter. Actually, I could just use fetch for this example, couldn't I? Yeah. Let's make our function equal
[04:03:28]  that we pass to create async equal, um, fetch. And we're gonna, it doesn't really matter. Well, let's make a URL like, uh,
[04:03:39]  um, slash API slash users slash a, so it's going to call our signal, right? Right. We're getting the ID from a, right? And actually
[04:03:57] , no, I'm going to, I'm going to up the stakes of it. We're going to make this an async function and we're going to make it
[04:04:03] , give it a function body and go like const res equals await fetch. And then we're going to go return res dot JSON. Okay. And then we go like
[04:04:22]  that. Okay. So you pretend this is our async function that we pass into our create async call. And then while we're hydrating, we do that patch
[04:04:30] ing issue to do. And then we call the function. Oh, it's because of the freaking, I didn't patch, I didn't patch res dot JSON.
[04:04:40]  Ah, screw it. You guys get, it doesn't matter. Console dot log never get here. Okay. Oh, oh, weird. It does get there.
[04:05:01]  Okay. I got, I got to look at this, but you, you, you, you, um, yeah. Why does it get there? It's probably cause
[04:05:13]  the promise that I set back, I got to do a little bit of work here, but you kind of get what I'm getting at. It should be possible to
[04:05:26]  essentially stall the program at this first await. And it still tracks the signal. And then we throw this away. And it, I checked, it does garbage collect when,
[04:05:41]  uh, the promise that never resolves, loses references. And then we replace it with the promise that we serialized during hydration. So it runs this once gets the
[04:05:51]  dependencies and then uses the promise that we got from the server. Yeah, yeah, yeah, yeah, yeah, yeah, exactly. Yeah. I think if we patch all
[04:06:02]  the methods we'll be good. Yeah. Yeah. Yeah. Yeah. Well, I mean, yeah, so you can track up the wait. I can't track
[04:06:16]  after the await. So yeah. So this, this, this, this, this, this, this, this is, this is basically in one ways sort of hacky
[04:06:30] , but do you have to understand is I'm not keeping this, like, it's literally just during the, the, the call that one function synchronously outside of
[04:06:40]  that code. You do, you have access to the normal thing. I'm not like permanently patching it. I'm just like saying like, while this one synchronous function
[04:06:48]  runs, we're going to know off your fetches and your promises. And then, um, yeah, hydration will work without refetching. Yeah. Yeah.
[04:07:11]  Yeah. I mean, this is just a very small little trick and we don't need to on hydrate with this method because solids serializer D dupes.
[04:07:29]  So the cache can handle its own serialization and the create async can handle its own serialization. So they, we expose that and they can both call serialize and
[04:07:42]  then they'll both serialize the same value, which means it'll get D duped, which means we don't need a hydrate call so they can work relatively
[04:07:49]  independently. So we just completely reduce the API service around it and we're able to, you know, basically have this much simpler primitive. This is zoned yes.
[04:08:06]  No, but yeah, I don't know. I, I'm not patching it permanently. I'm patching it for like the, you know, this is
[04:08:13]  like a try finally, like try run the function, finally restore it just for that one little execution. I don't know. I, I'm glad people don't completely
[04:08:27]  hate it, but I, I know I can see the, I can see the stuff. The, the funny, that's what they all say. The funny thing
[04:08:42]  about this is if I didn't tell everyone on stream that I was doing this right now, I don't even know if people, um, would, um, yeah,
[04:08:52]  I don't, I don't even know if people would, would pick up on it. They might. I, I, it needs to be documented, but I,
[04:09:00]  I, I think it's just like, it's, it's, it's subtle enough. And, and we could argue that this is a temporary solution, until
[04:09:09]  we get resumability. Cause then if we're resumable, then we wouldn't even have to run the function, just throwing it out there. But this,
[04:09:15]  this, this lets me go forward from an API standpoint, cause I am not handled it. Cache does not need to be core to solid, which is huge because the
[04:09:24]  primitive is incredibly powerful with create async and 2.0, even more so with the way that it propagates through the whole reactive graph. And it, we don't
[04:09:34]  need a new concept for the people doing the simple stuff. the people who pick up the cache want to, because they're doing router based stuff. I, I
[04:09:58] , I only mostly hate it. A generator that yields a different promise than the real promise might make more sense to me. Can I do that in a way that, um
[04:10:15] , I didn't think about that. No, but I like, I feel like if you're suggesting that like in line while it goes, it actually result group sw
[04:10:34] aps in the right promise. Oh, I don't know if there's edge cases around that, but that's interesting as well. I mean, we can get fancy with
[04:10:43]  it. Yeah, definitely. Okay. So let's get back to where I'm getting at because you, you start seeing that now, if this is not core,
[04:10:57]  then we can basically alleviate this from solid perspective on a design basis. We're just like, okay, create async will be installed 2.0 and it's going to
[04:11:06]  be the solution to everything. Right? Like I'm, I'm joking only partially because it also handles like all our data fetching across the board. And basically what
[04:11:15]  I'm saying is you're going to use cash because you want to use cash. So I finally did it. I I've been talking for months and months and months about
[04:11:28] , let me put the share link in, in the thing. If people want to look at it, but what a future router would look like that worked for client side
[04:11:44]  rendering worked for server components worked for SSR, what the universal router would look, could look like. And I decided to take the current solid router readme and update it
[04:11:55]  as if I'd already, already implemented the future universal router that works in all of these contexts. So yeah, I mean, I guess this could have been a stream
[04:12:06]  on its own. Oh well guys, now I have nothing to talk about next week. We'll just skip it. Um, I updated solid docs. Now I feel like
[04:12:18]  docs are a good way to kind of get a feel for, for like how these things can work. Now you guys can tell me if this is terrible. And if you
[04:12:26]  have suggestions, I'm more than open to it. But the idea here is your app would start with the router component. Okay. No, no surprise here. And
[04:12:33]  then you could define your routes by passing them as children to the router component. Now I'm not opposed to pulling the construction of the router out, kind of like Tanst
[04:12:43] ack does. Um, but it's important that the router gets the routes directly, not like these nested routes components. It's also important for server components that the router
[04:12:55]  wraps the part of the page that acts as the top level layout that's dynamic, that gets refreshed on a page refresh, but not on a navigation. That's why
[04:13:06]  I didn't put stuff outside of the router. You could in CSR and SSR not care, but for server components, you want actually everything, even context inside the
[04:13:16]  router. So I made a root prop or app proper layout I played with, but I hate the word layout. Um, I made a root prop and I pass what
[04:13:27]  the app is. And this is where you do that. So you could easily see us in the past, putting this outside of the router, but I want it to be
[04:13:35]  inside in case there's stuff that dynamically updates in here. Obviously this is static. So it doesn't, but you'll notice that it props dot children is where it
[04:13:44] 's going to insert the route. Um, there is no outlet component in this method again, because with server components, outlet doesn't really work. It uses context. People
[04:13:56]  can try and like inject it in the wrong place. Like injecting the client component doesn't make sense. Prop children include in enforces the, the, the server client
[04:14:07] , uh, tree divide. So there. Okay. And then obviously you can still lazy load routes like you've always done, right? Um, lazy, put them
[04:14:20]  in. Okay. Everyone with me so far? You guys have been kind of quiet. I am expecting an answer just so you know, someone's going to just say
[04:14:39]  I'm alive in the chat or something like that. Yeah. Okay, cool. Okay. Let's keep on going. All right. Maybe I'll blow this up one
[04:14:51]  more size to make it a little bit more readable. Okay. Yeah. I actually got to give Jesse big shout out. He's the one who suggested me to pass
[04:15:04]  the, the routes this way. I had them both as props and it was really awkward because these would always be fragments. And this one needs to pass the outlet in.
[04:15:13]  And originally I had it as a special outlet, but then I was like, I can just make it a component and then I can use props children the same as we would
[04:15:18]  do on any page. Okay. So creating links. Well, we need to support server components, things that aren't hydrated. So our default is actually, we're
[04:15:31]  going back full circle. We used to do this with solid router back in 0.5 and then we changed it. We are going back to lowercase a. I
[04:15:41] 'm glad you asked. We're going to get there. But I'll skip ahead for you just because it's such a simple solution. Where is it? There's a
[04:15:54]  section here that's like, not components, config based routing. Here it is. See, you just do this. Make your route config. Like I said, we
[04:16:20]  could play with the fact that we could, we could create a router with it instead of putting it directly, but the, the routes component the routes component is just,
[04:16:33]  is, it's our, it just returns this JSON anyways. Right. So nothing fancy. Oh, we, did we get a raid from Nate, Nate codes. Thank
[04:16:43]  you, Nate, for coming in. We are talking about what the future of universal routing looks like. I just rewrote the solid read me for the solid router for
[04:16:52]  a router that would support client-side rendering, server-side rendering and server components, it's all as a single router. So yes. Thank you for joining.
[04:17:03]  Yeah. I mean, yeah, I don't know if they've updated their stuff. I was looking at their older stuff. This are, we are a cross between my
[04:17:21]  original router, which was actually more like this. And then we went more react router. And there's a lot of conventions stuff that were very similar. Me and the
[04:17:30]  react router guys are probably very much aligned these days. Hey, already gave you a big, big shout out for the amazing work you did on docs a bit earlier. So
[04:17:46]  yeah, I mean, I, I, I'm using docs here as a way of introducing this. I actually rewrote the, the router read me so that
[04:17:57]  I could, could see if I liked how it worked. So yeah, we just put our routes in the router, our root component, lazy load it. Okay. So
[04:18:12]  where was I links lowercase anchor? It doesn't mean that if you want, obviously it detects if links are outside the site or if they have a specific target,
[04:18:20]  but it means that if you don't want a local link to use this, then you're going to have to put something like target self on it, or we'll
[04:18:26]  maybe have a prop rel external. So there are trade-offs with this, but this is important for our server component future and not even server components islands, like client
[04:18:40]  routed islands. I don't know if I want to use the term server components, but this also works with client side routing. Um, and like, if you have
[04:18:49]  like an MPA mode, you just wouldn't have the JavaScript anyways. So like it would just work at normal, like uh, capital A still exists because you want
[04:19:00]  to set the active class, but it's like conceptually a client component or an island, so to speak lowercase is your default. Yes. Are necessary routes still route
[04:19:10] , children route, then the props children are passed to the component prop. Exactly. Yeah. Let's get, we'll, we'll get there in two, two
[04:19:18]  seconds here. Dynamic routes, same path matching stuff. Um, animation transitions, extensions, blah, blah, blah, blah, blah, blah, blah, blah, blah
[04:19:28] , blah, nested routes. Yeah. Still this, this, this. And then when you're inside, you use props dot children, right? That's why
[04:19:36]  it's the same pattern all the way down. And I was getting kind of like inlining them. This is this example used to use the element, right? Right.
[04:19:44]  Remember it used to use element here and I've removed the element prop. I'm sorry guys. Um, you can still inline stuff like this, but the reason I
[04:19:53]  removed the element prop is besides being ambiguous and actually a pain to detect in all the cases because outlet needs to pass props dot children. It's always going to be a
[04:20:03]  callback anyway. Like there's no other way to get the outlet in. So I'm not going to bother with element prop. We just have component prop. I know
[04:20:12]  this gets us away from like classic react router, but were we ever classic react router? How does active class work? Yeah. You use capital A capital A still exists.
[04:20:26]  Um, I think I might've answered this. The funny thing is it's already a global listener in solid. When we switched to capital A, we just added a
[04:20:36]  property that scopes it to that, but we've been using a global delegation for solid anchors this whole time. Otherwise our, our islands router solutions and stuff wouldn't
[04:20:44]  work either. So yeah, global delegation is the secret to making this stuff work. We've been, we, it's already there. It's also the way that
[04:20:56]  I made my form example work last week. I don't know if I, maybe I didn't show this off on the stream. If I go back here just for a
[04:21:03]  second. No, where is it? Did I, did I show route loader action form? It's the same example, the, the to do that I did last
[04:21:17]  time, except instead of using use, uh, instead of going use action here, I just went form action, add to do, and then form action update to do
[04:21:29]  and button form action toggle to do. I have some TypeScript issues here, obviously, but, and I couldn't use a checkbox here. I had to use a
[04:21:38]  button for this toggling because I needed it to do form submits. Technically I could style a checkbox and do nicer stuff, but I'm not CSS wiz,
[04:21:47]  but I'm just showing here that forms with form actions could work directly with optimistic updates and with these action APIs that I think I had to make a new one because I had
[04:21:57]  to change toggle to do and updating the text that to do the title actually had to be two different actions when you use forms. It's clunkier. I don't
[04:22:04]  know why you'd want to give up TypeScript. One of the best things about this action cache API is like, like literally the types pass straight through and now all
[04:22:12]  these things are just like, Oh, guess what form data? Guess what form data? Guess what form data? But obviously server components with this solution lowercase form, you
[04:22:24]  wouldn't have to ship the component user client component. So yeah. Yay. Anyways. Getting back to my router docs. Everyone following so far? Okay. Cache
[04:22:42]  API. To prevent duplicate fetching and trigger refetching, we provide a cache API that makes a function returns the same function. Okay. It is expected that the arguments
[04:22:51]  to the cache function or serial level of this cache accomplishes the following. It does deduping on the server for the lifetime of the request. It does preload
[04:22:59]  cache in the browser, which lasts 10 seconds. I'm just picking an arbitrary time. I was like at five, but then I was like a five might be like too
[04:23:07]  fast. I do this. The idea is this has got to be fairly quick when a route is preloaded on hover or when the preload is called when entering into
[04:23:16]  route, it will make sure that dedupe the calls. We have a reactive refetch mechanism based on key. So we can tell which routes that aren't new
[04:23:23]  to re trigger on action revalidation. So I use this name here as serialized cache. We can play with this API a little bit. Maybe it's just
[04:23:36]  a string, but you kind of get the idea. It will, and then here's the most interesting part. It'll serve as a backboard cache for browser navigation for
[04:23:44]  up to five minutes. Any user-based navigation or click links bypasses this. So they only cache for the 10 or five seconds. But if someone presses the browser
[04:23:54]  forward or back buttons, it will last up to five minutes so that when you go into a page and go directly back, you get the cache results, unless they've been
[04:24:03]  invalidated due to some other action you did, because this will also get replaced for the revalidation. Um, anyway, so that's the basic idea.
[04:24:15]  On the server, it will act like react cache. React cache does just this one, the one here. We add all this behavior because I didn't really show it in
[04:24:26]  a fine grained way in the demos that I was showing over here with the route cache. But what's really cool about this cache is if you go in here in
[04:24:35]  our fake API and you say, return to dues or something, or maybe it was like, get to two, to do singular, to do is one ID. And then
[04:24:44]  you do something that causes an action cause it invalidate the one to do or something. Nothing, the page doesn't reload the action just fires. And then it, it
[04:24:53]  will cause the cache to trigger, but the cache has to know how to trigger, uh, create async. And the, the way I, I did that is
[04:25:03]  in this, uh, thing here is when I create the cache thing, I create both. I take the function, um, that gets passed into the cache and I create
[04:25:16]  a signal with equals false. And then essentially when you call, uh, revalidate or whatever the thing is, it does a start transition and it maps over
[04:25:26]  the keys. Uh, and if it's looking for a specific key, you know, it can narrow it down or some key match. This is very simple, but you
[04:25:32]  can use like tan stacks, like partial key match thing. And then it basically gets it and calls this, the signal and, and then removes itself in the cache or whatever
[04:25:43] . Like this is a simple one. I don't have the five minute cache thing working yet. But my point is that because it calls that signal, um, the
[04:25:51]  thing that I created down here for the simple cache, well, it reads the signal here to track it. So this function is inside the tracking part of create async.
[04:26:02]  So it, it's just using baseline reactivity to re-trigger create async. That's why it's important to create async tracks. And I was
[04:26:10]  actually kind of tempted talking to someone that I should probably untrack the function you pass into create async possibly. I need to make a decision there just so that it
[04:26:18] 's very clear what's reactive and not. I, in any case, it's, it's, it's, it's not, uh, actually maybe because of this
[04:26:26]  way of composition, we shouldn't because it's your spoon function to function to function. But anyways, my, my point is we're simply using reactive signal tracking as
[04:26:34]  a way to do the invalidation. Um, it's, it's, it's as simple as just setting a signal and it'll trigger whatever's listening to it.
[04:26:42]  So, um, based on an action, you could set a key and I'm thinking we still use our response model. So we could actually have a server action invalidate
[04:26:51]  something on the client simply by, you know, we could, I'll show an example here. I haven't settled completely on the APIs, but, um, um
[04:27:00] , I'm, I'm thinking that the action, um, uh, where is it could like, like put some headers or something on it in terms of what they're
[04:27:13]  invalidate on the response. And then essentially that key will cause the update, which will trigger create async, which will then, you know, revalidate
[04:27:26]  the specific data. And when you're on a client side scenario and then automatically diff it to do the fine grained update, um, fetch and diff. So the whole
[04:27:35]  thing kind of just wires together, um, based on this behavior is this opt-outable. Yeah. I mean, it depends on what you want to do.
[04:27:49]  I mean, there's gonna be some options there obviously, but generally you don't need cash as a core mechanism. So you, you can just not use cash and go
[04:27:59]  use tan staff query. Like this mechanism is designed to have this behavior. Um, we can probably play around with timeouts a little bit, if it makes sense.
[04:28:10]  And obviously preloading can be, can be turned off on a link basis, like it is for most routers or whatever. But the point is like, this is
[04:28:18]  like the default kind of set up and you can always just choose not to use this cache API. Yeah. Because cache from react only only does this. So the,
[04:28:36]  the tr, the tricky, actually I, someone shared with this media the other day, let me see if I can find it unstable cache next is building a cache on top
[04:28:47]  of react cache where they're trying to do something similar and they have a name. Um, and because if it was only in one environment, just on the server, then
[04:28:58]  you don't need a key cause you use the function reference, like the function itself. So that you pass in as a reference, but when you're going across the
[04:29:05]  wire, it's not stable. You can't trust the bundler. We, we had this conversation, I think the other week. So a name is really, or
[04:29:11]  key or whatever is really the only way to do it for the communication work cross server. Right. And it's, it's needed for, yeah, number four, and
[04:29:21]  it's also needed for, um, number three so that we can like pick off certain things. Yeah. Default, we can refresh everything, but we can go
[04:29:31]  like, okay, because of this action, we only actually need to invalidate this one to do not all the to do's or something like, obviously we fetch the to
[04:29:40]  do's as a blob here. So that's not a good example, but like I could picture, you could have like three different pieces of data on a page,
[04:29:46]  like a user section of, uh, uh, something like, like, and you're just like, okay, this mutation only needs to update this one part. You can
[04:29:53]  just trigger the key essentially. And this isn't even cache base. This is just refetch based, right? Like this, like even without a cache, this mechanism
[04:30:06]  needs to exist so that we can basically not re-render the page and just trigger, um, data refetches. This is a big issue. This apparatus was RC
[04:30:18]  browser cache could not be opted out of. Yeah. Okay. Yeah. And one thing that I'm doing here differently than them, I think, is they, they
[04:30:27] , they cached like actual user actions where I'm only doing back forward cache. Um, I'm fine making it opt out of all, I suppose, but what I
[04:30:37] 'm, what I'm getting at is like, um, yeah, I, yeah, this is, this is a good insight from the experiences they had here. I think
[04:30:51]  one of the more interesting things for solid is the cache isn't necessary. Like this is an opt-in API. It's not part of the core mechanism. Like,
[04:31:00]  you know, so from that perspective, we don't need to have it. Like there's no cache coming from solid the same way it comes from react. So like the
[04:31:10]  challenge with next is they are trying to bundle it. I'm not patching global fetch. Um, I mean, I, in a different way, um, next had
[04:31:18]  this cool thing where they had the fetch and they were patching it, you know, with the keys, um, that's not my domain here. If you want
[04:31:26]  to cache a fetch call, just use cache here with it. So in a sense, our cache is more like next unstable cache. Um, and we have no equivalent to
[04:31:36]  the react cache or like the react cache is sort of just implied, um, from, from like the most base thing, but we don't need it as part of
[04:31:46]  our core rendering mechanism. Yeah. I, uh, this is, this is kind of cool. Okay. So for now create async is just going to be wrapper
[04:32:04]  or create resource. I showed this before we can probably do that promise caching. I'm thinking of just releasing it through the router until we're actually ready, create
[04:32:14]  async and solid 2.0 is going to like blow things open, but we're already aligning for it. I mean, people were going to use create route data
[04:32:21] . I think it's a billion times better that when they pick up this API, they just use create async from the router and have to update it to actual solid when
[04:32:28]  the actual solid's ready. But for now, you know, this gets them in the right mindset, action APIs, I think I already talked about them. Um,
[04:32:37]  you, if, if you're, if you're not using server functions, um, and you need to do SSR with an action, then you have to give it
[04:32:48]  a name, use action. We talked about, I love how the types work with this stuff. Cause you just like use submission, use submissions. I think I talked about
[04:32:59]  this before. Yeah. Um, yeah, I, the, this is an interesting one trying to use the same API to double up on both sides. That that's
[04:33:15]  an argument for the composition of splitting it apart. The one thing that I saw that was parallel here, when I get back to this is the deduping cache and the
[04:33:23]  preload cache are both ephemeral. So they're kind of like the same thing, like they're not, but they're like their own version of it.
[04:33:33]  Like it's just that the deduping cache happens during the request and the preload cache happens maybe slightly before the request or during the request, but it's basically the
[04:33:43]  same deduping and it has a very short life. I'd like it to even be shorter than this, to be fair. This refresh mechanism doesn't need an actual
[04:33:52]  cache to exist, but it, it needs the subscription keys. This is the only actual cache. And I'm, I think this is, this is just being,
[04:34:00]  being nitpicky because we don't need, need this, but I feel like I don't care what SWR and all like the performance optimization of the cache. I
[04:34:09]  think if you want to use 10 stack query, if you want to do that, go for it. I want it so that when you're on a page and you click
[04:34:17]  the back button to go back, you know, you get that page again. You don't have to worry about suspense and all that weird stuff. Like it, it
[04:34:24]  tries to like, there's some issues around navigation with pop state around transitions. I, if the data is already there, then those issues go away. So this is this
[04:34:34] , I, I'm going to have my selfish, selfish motivations for it. Also the browser works like this. I forget if I showed this ever on stream, we were
[04:34:42]  experimenting. I opened my hacker news demo, updated the data and then press the back button. And I got the old data. Like that's, that's how it
[04:34:49]  works. Um, it back and forward tries to restore it to the state that it was in. So yeah. Yeah. Yeah. This is us trying to simulate what the
[04:35:03]  browser does, um, with client side router. Okay. Um, okay. Preload functions. Now, obviously the cache function can just be called, but I'm
[04:35:21]  suggesting that on your component, you can have a custom preload function. Now, one of the cool things about the component API that I've talked about previously, but it
[04:35:29]  should be obvious is if this is a lazy component, the router is smart enough to go like call preload on this automatically when it like knows. And we could do this
[04:35:37]  ahead of time on link cover, but now I'm talking about giving us an actual, um, function to do this. And then, you know, you can just
[04:35:44]  import from the cache function, this preload that one thing you got to remember with this stuff is that the preload function or that the function API should be separate from the
[04:35:54]  components. Cause you want to lazy load the components, but not necessarily lazy load the function. So you don't want to put the functions in the same files, the components
[04:36:01] . Okay. Um, let me look here and they, they just take the parameters and the location. They work basically very similar to the old data functions. Um,
[04:36:12]  but I was mentioning here, you, you kind of want to put the component lazily in one thing and put the preload somewhere else. I was talking about, you
[04:36:21]  could still use like the dot data convention if you want to my idea for solid start. Um, here is is this is basically default export my page and then export route
[04:36:41]  config. Um, and basically this route config is literally what you'd pass to a route. So you can get match filters. You can do what you can put your
[04:36:49]  preload function. You just everything that you'd put on the route definition other than the lazy component itself, you put in an object. So instead of route data, we
[04:36:56]  do this and then we export the default of the page. So then we put metadata. We can do everything like this. Basically that's, that's my, that's
[04:37:02]  where I'm sitting right now. It's all start. Um, so yeah, let's, let's continue here. So we, this takes care of the code splitting
[04:37:17]  for you. Um, but you have to like, I just want to mention for people who use this in a, in a non solid start environment without this, that
[04:37:28]  you, you have to consider the split. Um, yeah, that's all good. Still have capital anchor capital navigate capital route use primitives. These are all the same
[04:37:41]  use, use, use, use, use, use. Okay. So big changes from a deprecation standpoint, outlet routes, and use routes all gone. Okay
[04:37:50] . There's no outlet. We use props, children routes and use routes are weird. Cause like we did this cause the switch component react router. I never had this before
[04:38:00] . I went to talk to Tanner Tanner doesn't support this. This is, it's just awkward. Um, to have these like nested switches. I mean, you
[04:38:08]  could just nest a router at that point for all the benefits you get, you lose the data fetching. It causes waterfalls. If you need to, you need to
[04:38:13] , I know there's these recursive patterns that you can only do that way. Um, where you could put like routes inside routes, and then you can like recurs
[04:38:21] ively build out your UI. Um, I'm going to tell you put routers and routers. Um, this is just off the beaten course. I don't eat
[04:38:27]  the complication. This has probably not worth it. No more element prop on, um, on the route, um, component. As I mentioned before, because you
[04:38:37]  have to pass the props children in, we might as well just make everything, uh, uh, component data function and use route data are replaced by this preload mechanism.
[04:38:47]  Um, and this is probably the most controversial thing because this allows link hover preloads because you don't have to worry about main, like keeping reactivity around.
[04:38:58]  The biggest problem we had before was this weird thing where if you, if we tried to implement it where you hover it, call the data function, but then it would create
[04:39:05]  a bunch of like create resources. And it's like, you hold them around until the thing executes in a few seconds. So it uses those same resources. Um,
[04:39:12]  do you throw them away? Well, if you throw them away, there's no cash for that, right? Because we don't actually like, there's the, I
[04:39:17]  guess if you put cache headers on the, on the requests, then you're probably fine and it'll probably fetch it right, right away. But I mean, like
[04:39:28] , um, you kind of, you kind of get what I'm, what I'm saying here. It's like, we could never do hover preloads because of
[04:39:36]  the reactivity in it. Um, I'm still recommending that people use the preload function because they should hoist their data fetching up. Um, it's,
[04:39:48]  it's very important, but we also get rid of, we solve the TypeScript problem. If you've ever used route data, you have to go like use route
[04:39:57]  data with type of checks. And if you've seen these cache APIs, um, uh, let me look here. I mean, actually I probably have an example, uh
[04:40:06] , here when I go and I use this cache API here, look, it's a promise of to do's. This is an accessor of to do's like
[04:40:16]  the TypeScript works perfectly with the, with these cache APIs, use route data. You'd have to like tell it the types. So this actually is better for Type
[04:40:25] Scripts, right? So, and also there's no context on the server components in this. So this actually, this pattern, um, uh, yeah, this pattern
[04:40:43]  is basically how we solve the, like the future for server components. Um, yeah, I mean, this, this is the gist of what I'm proposing.
[04:40:55]  I know this is super breaking. That's why I want feedback on it. And if you're wondering, like you start putting pieces together, it's like, I couldn
[04:41:03] 't, how do I make solid start 1.0 if I don't figure out what the router is like, if I know that we're going to have to change
[04:41:09]  the router to continue. So I needed to, you know, one of the big other changes is we're going to be using the async local storage. So the router
[04:41:18]  is going to go in outside. Salt start is actually not going to import the router. It's not even going to know about the router. It's only going to have
[04:41:24]  the file system router. And then guess what? I mean, was it config router based config? It's going to be like this, right? Router routes or router
[04:41:33]  file routes router, right? Like it's, it's essentially Vinci gives us this more or less, and then we just stick it in. Can you share a
[04:41:48]  layout between different pages? Okay. First of all, there's the top level layout, which is shared by all pages. And then the rest of this is nested routing
[04:42:03]  the way that we've always done nested routing. So there's grouped routes. There's you, you nest if you want to share stuff. So if you've
[04:42:11]  ever seen a config based routing, which again, I just pull this out here. Same thing where you do this, right? Path component, children path. Like it looks
[04:42:19] , it looks like this, right? This is if you, this is like the layout. And then this is the stuff for that. And I wanted to show this is
[04:42:28]  because this is very classic in this pattern. You have a users, which is a list of users. And then you have a specific user. And you notice how these
[04:42:34]  are not nested because they aren't nested. The users might have the global layout. And then the specific user might also have the global layout, but it doesn't
[04:42:43]  have the users list layout. And then inside you have, you know, the, the main page for them, their settings, settings, maybe a catch all, like
[04:42:53]  a not found. This is how config based routing generally works. Um, because the way it does path match partials, there's no such thing as a layout. Um
[04:43:02] , So if you look at the goal with solid start, this, this config is just that config being exported, reout doesn't care which router you have on the
[04:43:14]  other end. It's just going to generate that config using this and this, then it starts making a lot of sense. Why the file system routing doesn't have like a
[04:43:23]  bunch of different properties. Someone linked to like, Oh, wouldn't it be cool if, if you could, if you could use routing like next. And I looked
[04:43:31]  at this and I was like, what the, sorry, is going on here? Uh, where, where was it? Uh, uh, not this. Yeah. Yeah
[04:43:40] . Here we go. Layout.ts, page.ts, loading.ts, not foundts, error, global error, route, template, default. And
[04:43:58]  Yeah. Sorry. I, I just missed a question because I was seeing here dev. So data function now just warm the cache instead of creating resources. Yes, exactly.
[04:44:06]  And then resources can grab them immediately. Yes. That's the gist. You put the fetching and people who don't use the preload function like morons or
[04:44:17]  basically like every next JS user, um, then they can get the waterfalls. Um, and you know, maybe they won't be that bad, but, um
[04:44:29] , this gives them mechanisms so that we can support both. Yeah. I know. I know. I, I, I don't the, be fair. The waterfalls
[04:44:46]  are only on the server, which is a difference in why we need this mechanism is because on the client, those waterfalls are unacceptable. Although to be fair, most
[04:44:53]  people using react router before remix were actually causing those waterfalls innately anyway. Um, like, again, I don't this, I spent years just killing uh, app
[04:45:04]  demos because all the other competitors had waterfalls. So I'm very conscious of this fact, but the problem is the, the base design of, of these cache mechanisms without
[04:45:16]  hoisting, the remix guys are 100% right on this is waterfalls. And I like, it doesn't matter all the fancy other stuff you're doing.
[04:45:25]  You know, you, the default is the default is waterfalls. So we fetching components, but at the page level, we still only know what to fetch so
[04:45:40]  I can preload. So what's the point of fetching the components? Exactly. I, I, this is, this is the, this is the, this is
[04:45:46]  the, the, the, the, the biggest problem here that I've been facing with this API. Why I wanted create async to work without cache API. It's
[04:45:59]  because mostly server components is the answer to your question because we don't have context and because we can render each route section independently. So without context existing, we just,
[04:46:13]  the, unless I can find a different solution here, like, which seems doubtful. Um, you, we just can't, unfortunately. Um, but I,
[04:46:26]  I have to give it credit to the react API to the react style cache API and the one that proposing solid is you do actually only define the hard parts in one place,
[04:46:37]  right? Like, yes, you, you have to call, where's the example? I, I don't know where it is, but you have to call the get
[04:46:43]  user in, you have to call get user in two places, right? He, you know, here, and wherever you do that, you're preloading,
[04:46:52]  you have to call get catch user in two places, but, um, it's not like you have to regenerate the query or whatever. So like, I, I
[04:47:03]  think it's okay. Yeah. The idea is pulling this outside. I, there's benefits of this too, of pulling it outside of like the general reactive system, because
[04:47:16]  as I said, the preload, um, now actually works, which is really nice. Um, to be fair. Okay. I was being mean about the water
[04:47:29] falls, but now picture this scenario. Why are the waterfalls worse on the client than they are on the server? Does anyone stop to, to, to, to,
[04:47:38]  to think about this for a second? Well, obviously it's freaking round trips, right? Back and forth. It sucks. But why are they so much worse and
[04:47:47]  people have such an issue with it? Because a cache API would be duping, you know, you probably, there's probably not that much nesting in local data
[04:47:55]  fetching. Yeah. But the reason you hit it literally every freaking time is because you lazy load routes. So the, the very first time you go to a route
[04:48:08]  on a page, you can't even fetch the data. You have to wait for the code to fetch, to execute the code, to fetch the data. There's an
[04:48:18]  implicit waterfall just because of code splitting. Now I made a huge deal about this early in my career, but that's because I never had link preloading. If
[04:48:28]  link preloading is actually decent, then the be fair, it's not really any worse than anything else. Cause if the code's already there, then, um,
[04:48:41]  like it's kind of like the net, like you, you might be fine in small apps for like the, the 95% case, right? Like the, it's
[04:48:52]  kind of like the next JS argument. Like they're trying to, I was on a discussion with Dan, uh, Dan Abramoff for like two hours where he
[04:48:59]  was trying to convince me that their approach wasn't innately flawed because of the waterfalls. And like base, basically, if it's good enough for, for that,
[04:49:11]  then I can, I think it's probably okay that some people like if preloading works well, I think it's okay that some people are lazy and don't do
[04:49:18]  the right thing. Yeah. Loaders definitely fix that, but loaders don't work with server components. So yeah, now we have preloaders that that's
[04:49:30]  basically the, that's, that's where I'm landing at here. Anyways, back to file system routing Are any of these options inside here, like what, what
[04:49:50] , like, what is this? Like it's, I understand loading is a suspense boundary. This is an error boundary. Layout is a parent child relationship. Page is
[04:50:03]  just the page. Route is a page that returns different API stuff. Instead templates like a layout, but the, we, we needed to make it different because layouts have
[04:50:14]  certain limitation. Global error are not found is basically a star route. Global error is like throwing an error. Default is interesting because parallel routes I haven't looked into yet
[04:50:28] . But basically every one of these things is not a part of route configuration. And it's probably like, I think the problem is once you go down this path,
[04:50:48]  like some people have a problem with magic exports, right? And I think next got burnt really bad by their crate, like their exports, they like, they're trying
[04:50:57]  to like remove that stigma. But, and in a sense, when you have a nice consistent file system, like where you see and every folder you open has page layout loading
[04:51:06] , whatever, you know, exactly where the code goes. And, you know, I power to you, because now when you open up your project, and you go to
[04:51:16]  your local zone, you can see where everything is, just never search for page. Just don't do that. But, you know, like there's benefits to having
[04:51:27]  this file based approach with the folders. The problem I have with this is, these are kind of your idea of where these things were, what, what, what if
[04:51:40]  I have an error that's partially down in the layout, like not top level, like, what if I, especially the loading states, they're probably not going to be
[04:51:49]  completely top level, because like, if you want to catch the route above, you actually want the loading above the swap. And if you want to make it granular for streaming
[04:51:59] , you don't want to just freaking loading the whole thing, you want to load where the pieces are that depend on the data, you want to get the suspense boundaries
[04:52:06]  tight, you know. So yeah, you add your own error boundaries, you add your own suspense boundaries. Yeah, so like, I mean, these are good things to
[04:52:18]  have, because if you've already taken the plunge here, like, why not? But as I said, it's a very specific opinion, maybe we can, you
[04:52:25]  know, have some Vinchy config to do this. But none of this is really the route config. So, you know, but you got to give Next.
[04:52:32] js, like, some props here, because honestly, I was thinking about this, I was like, okay, this is my page in solid that has all these things in
[04:52:42]  it, my page create, can I shrink this part a bit, so that I can get a little bit more on the screen, let's see if I can just
[04:52:54]  want to get this a little wider. But yeah, here we go. Create async, fetch user, this is this is solid, okay, error boundary, fall
[04:53:06] back, suspense, fallback loading, div, some data you're rating. So now the suspense boundary is keyed on to this data, and you're done. Do
[04:53:14]  you know how hard this is to to write in react server components? I think they should because that's where it belongs. It's basically the top level. So yeah,
[04:53:28]  yeah, although that doesn't speak a good story for NPM modules that do data fetching, which actually, I think, doesn't make a lot of sense.
[04:53:36]  Anyway, so moving on. But does anyone I tried to figure out what this would look like if I wrote this with react server components? This is what I came up
[04:53:53]  with. Your page that you export would have would have an error boundary in it. And I just stole this one from Brian Vaughn. But you could write your own
[04:54:07]  error boundary class. So this could be a class component. But I'm just going to steal this one to make it most the same. And then I'm gonna put
[04:54:13]  a fallback. And then I'm gonna put the suspense component in it. Because the error has to happen in the child, it can't happen in in here, because
[04:54:24]  the way react is re rendering. And then in here, we have suspense component. And I'm wrapping my page because you again, the await has to happen below the suspense
[04:54:33] . So I can't put the weight up here. So then I made my page component. And then this was an API choice, they could have just done fallback
[04:54:43]  and string or something. But because they this library use a component, I put a separate component here, that doesn't really matter. But picture having to do this. Like
[04:54:53]  this could never be your default. Right? You won't want your end users to write four components, just to write a page when they're trying to do this.
[04:55:07]  So like, I get why they want the file based routing. Now, this can be in the loading TS, this can be in, you know, error TSX,
[04:55:21]  and this and you kind of get why you wouldn't ever want to do this with react. But it's because they sort of tied their hands a bit because they can't
[04:55:29]  do this. How does suspense read from the promise? Because it's it's a signal. So data. So the read happens here, which is underneath this suspense boundary
[04:55:44] . Right? So create async creates a async signal, more or less. And then the promise is read under the context of here. So it because everything in solid
[04:55:59]  is wrapped in functions, essentially, it's actually the when the suspense calls its props children, it renders this, which then calls this function, which gets the promise
[04:56:12]  out and works. As I said, solid and reacts render model are very different. But it means that component boundaries like don't matter like this, you can define some kind
[04:56:21]  of reactive data. And then where you use it is actually in the context of where you use it even within the same file, you can like nest create signals in a
[04:56:29]  for loop like, and they'll have their life cycles and be released properly. uh, does hustle handle re rendering issues? It's all I do have issues like that
[04:56:50]  and like in react. No, I'm no, we have different problems. We, we handle re rendering issues by not re rendering, but we have, we have different
[04:56:58]  things. You can, you, this is a special thing, right? This is a data function. So like, I guess the equivalent problem solid would be someone reading this
[04:57:07]  in a stupid like place because the read is where the await happens. So to speak. Yes. Yes. It's all you. Yeah. To be fair, you
[04:57:25]  can make the same promise above somewhere and then pass it in as props through, but then this is the funny thing. I was looking at APIs like that, where you're
[04:57:34]  passing promises through, and we could and you know, like, but this is again, why async await is just not my model of choice. Like we're already
[04:57:43]  in signals. Why do I want async await? Async await makes sense on the server because you're used to having promise based APIs, but it also kind of sucks
[04:57:52]  because it's blocking. Like, it's like, you have to do this before you do this, which is fine on the server, but it doesn't work when
[04:57:58]  you have other stuff updating. It's a reason why there's not async await in the client. React might do it in the future in the same way. I was
[04:58:04]  talking about compiling this into an async await just for fun, but it has different semantics. Like how do you handle the code running after before it, when you
[04:58:11]  can have state updates inside an async component? It's, it's weird, right? Like I, yeah. So I am not on team async await at
[04:58:20]  all. I'm on this. I'm on team. This component could be a client component or a server component. And you, and you, and data fetching is
[04:58:29]  not a differentiator. There are things that make a client component or server component different, but data fetching ain't one of them. So I, I'm yeah,
[04:58:40]  the, the, the, this, this, this is, this, this makes a lot of sense, but this I feel solves it cleaner. But yeah, we
[04:58:47]  could, but I honestly, three files side by side is probably much preferable than this. In Next.js you should need the component without the Spencer Airbrown
[04:59:09] s and then they're loading.js. Yeah. Yeah. I mean, yeah, I'm just saying like, if Next didn't have the file-based convention,
[04:59:17]  you would be doing this essentially. Like if they, there's a reason they designed the, the API that way. It's a smart move because you wouldn't like,
[04:59:27]  you wouldn't want your end users to do this. I, I didn't realize this when I first in, uh, came up with solid suspense design, just how
[04:59:34]  nice this, this is by comparison. Um, because this can be anywhere, right? Like it doesn't need to be top level. If you want to go do this
[04:59:43]  stuff somewhere deep, it's really easy. Where in React, like it's easier because you have the parents in it like already. So you can like jump in and put
[04:59:51]  the suspense wrapper in the parent or whatever, but like, like you can't just make that decision locally. Yeah. Misko would love if I tried to hijack
[05:00:03]  resumable that way. The funniest thing is this definition of resumable would be probably more understandable by more people. All right. Anyway. Um, my point
[05:00:13]  is that a file-based system routing router is what Vinci gives us, um, by using an API, like I was showing there, where you're just passing the
[05:00:25]  config out. That's kind of where my mind's at. You can take that API and generate whatever crazy crap you want to. do. So, you know,
[05:00:36]  I, I, I, this is, this is directionally why I'm thinking now that I know what it is. I just, we got to go implement it,
[05:00:44]  but this is what I've been working on. I've been trying to figure out how like this stuff takes time. Can you picture, as I said, releasing solid start
[05:00:55]  without these changes and then being like, okay guys, now we're changing it. No, this stuff has to be figured out. So that that's where we're
[05:01:06]  at. I'm getting very, we're not done. We have the more work to do in the implementation, but I'm happy where this is going. I think the
[05:01:14]  directionally it's, it touches on the right sort of things and gives the right kind of power. Um, the only casualty here really is those is the data load
[05:01:25] er pattern, which I've been using for almost a decade now. I'm a big, big fan of it. Um, right from my first routers that I
[05:01:33]  wrote back in 2013 or 14, I've been using something like this data loader pattern. Um, it definitely, uh, sorry, I'm trying to find where's
[05:01:42]  my, it definitely, it definitely hurts to lose this and move to this caching mechanism. But I think, I think I, I, I'm going to continue
[05:01:55]  working through this a little bit more. This is like the last piece of it. I think, I think this is how you create a universal router. 10 stack router
[05:02:11] . Well, yes, that's what I'm opening up to. You can just use 10 stack router here. Um, but 10 stack router, I don't know if
[05:02:18]  it actually will support server function. This is why we couldn't merge the efforts yet. I talked to Tanner because I needed to figure out at a fundamental level how this stuff
[05:02:27]  works. Um, so yeah, but this will open up. So some people will just grab solid start with 10 stack router and ignore all the stuff that I've just been
[05:02:37]  talking about for an hour, maybe prefer the APIs and be happy with that. And I'm happy for them. Um, because that will be their choice, but this
[05:02:46]  stuff here, yeah, I think I've figured out what the shape of the future of routing looks like. And that is also exciting. All right. Honestly, it's
[05:03:01]  five. I want to eat food. You, you, you should, you should all too, but, uh, I'm going to call a stream. Um,
[05:03:13]  I think have you considered a way to lazy load the routes themselves as in the route map, not just the vendor? Yeah, that's, that's, that is tricky
[05:03:26] . Um, I've considered, uh, a scenario where we could have server and client only routes like server components. Um, you know, like routes sections that are
[05:03:39]  server component versus clients roots and like how the play would like hybrid there, but actually lazy loading the routes is tricky because you don't want it to delay the routing,
[05:03:53]  but you kind of like need to know what, I guess the trick for lazy loading the routes would be analyzing all the links that are on the page and then like only
[05:04:02]  loading the routes for things that are linked to. Is that, is that, would that be the strategy? I'm sorry. I've never actually thought about this. So
[05:04:11]  you'd like load the page and then scan the page for all the, the, the links and then load the route configurations for any of those. Right. Cause the
[05:04:26]  problem is you need to, when you have clients that running, you have to be able to match on the client. Um, yeah. Anyway, the cache is being
[05:04:41]  coupled with the router. Um, yes, that's the thing. Uh, create async for now is, but it will eventually be core solid, but the cache is
[05:04:50]  basically, I was thinking of just coupling it with the router. Cause that was where the usage was. I, um, you either said, you could also just not use
[05:05:01]  this cache mechanism and use solid query. Um, you could use, there's, there's options here, but for now I was just, because it, yeah,
[05:05:09]  I mean, there's an argument that none of this is route based, but I think it ties in enough. I will look as I implemented to see if there's opportunities
[05:05:17] . I said that we don't need the cache core, but there might be reasons to make it core, but yeah. Anyway. Um, yeah. Facebook has it
[05:05:31] . Yeah. Anyways. Thank you everyone. Um, have a great weekend. Um, till next time.