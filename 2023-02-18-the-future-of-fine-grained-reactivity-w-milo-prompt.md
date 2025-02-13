---
showLink: "https://www.youtube.com/watch?v=A2TiLvCDKSg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Future of Fine-Grained Reactivity w/ Milo"
description: ""
publishDate: "2023-02-18"
coverImage: "https://i.ytimg.com/vi/A2TiLvCDKSg/sddefault.jpg?v=63eef14c"
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

[00:00:00]  Hello everyone and welcome to my stream today how's everyone doing today come say hi in the chat as we get this thing going as you know I am just gonna sit here and
[00:00:11]  ramble because I don't have a cool starting screen but that's all good actually I wonder is this the first stream I've done since I got my new monitor yeah picture
[00:00:20]  looks a lot sharper how you all doing here all right let's go out to the I was I was just distracted a moment syntax just dropped a solid episode that I did
[00:00:36]  a few weeks back so I always like re-listen to them to kind of like see you know if what I said actually made sense and yes so far pretty good I
[00:00:47]  was I was actually quite happy with that interview we we talked about stuff technical but also in a really approachable way it was a really fun episode to do all right so
[00:00:58]  you know as we're getting started here how how's how's that how's everyone doing yeah no that's that's awesome yeah I I know there's never a perfect time
[00:01:10]  for everyone it's just kind of the reality of things let me open twitch here too and another tab so that I can see twitch chat in case anything comes through there because
[00:01:20]  unfortunately I stream with stream yard and in stream yard I don't get to see much of what's going on from twitch so there we go all right yeah do I have a
[00:01:35]  link for the syntax stream yeah sure give me two seconds here actually let me also present my screen just just in case uh what do I want to share I want to share
[00:01:46]  my window entire screen this one yeah I think I just retweeted it so I can probably grab this link pretty quick here all right sure someone already beat me to it yeah
[00:02:05]  well I don't have to do this I'm still going to post it through stream yard just because I know go to both youtube and twitch but yeah I don't need
[00:02:12]  to post this stuff right good good everyone getting past that those twitch pre-rolls yeah yeah yeah yeah I'm super excited today because I got three main parts of the stream
[00:02:26]  today right and probably in the opposite order you you'd think I'd advertise them but yeah this week in javascript is a lot of stuff's been going on a
[00:02:37]  lot of hot talks about compilers and syntax and stuff I I'm quite enjoying what's going on there right so that's going to be towards the end of the show
[00:02:46]  but um you know server functions all that kind of stuff really really cool um and then obviously advertised milo's joining me we're going to talk about um reactivity and
[00:02:56]  progress we've been making their work he's done maybe even talk a little bit about angular preact like the whole evolution of what's going on with reactivity um right now
[00:03:06]  uh so I'm very stoked for that but even before that I got another guest and another announcement so um I'm actually going to uh just advertise this stream on twitter and in
[00:03:19]  the places so people will come and join us here right let's see here uh just did the good old go live tweet maybe I'll share my screen while I do this
[00:03:33]  no it's fine I'm going to leave the surprise to the last last minute let me see here uh we are live Thank you. Alright. Cool. Just
[00:04:16]  making sure people are ready for this. Alright. Yeah. YouTube, Twitch. Yeah. Let's just... Maybe I give a shout out in the Discord. I always forget
[00:04:27] ... Yeah. Let me see here. I gotta get Discord off my main screen. I don't want to show any of that stuff. Now, honestly, this last
[00:04:36] ... I didn't stream last week. And then it's like... Maybe there wasn't that much stuff. But then this week, it's just like... Everything. So
[00:04:42] , yeah. This is gonna be a lot of fun. Where are we here? Let me see here. Alright. Sorry. This is just how I kill time.
[00:04:53]  I'm sorry. I'm sure you guys would prefer one of those... What do you call it? Twitch TV. Is it still Twitch TV? I can't even
[00:05:04]  remember. I prefer one of those, like, cool loading songs. But, you know. Yeah. Cool, cool, cool. Oh, I posted an article.
[00:05:17]  Sorry. Give me a second. Alright. We'll get started here in a minute. Also... Yeah. There we go. Cool. Okay. People are coming in now
[00:05:30] . Alright. Alright. Are we ready to get started? Everyone got their... Friday afternoon drink? Yeah? Alright. So, find me this tweet somewhere. I
[00:06:05] ... I want to... I want to... I want... If you can find me this tweet, I would like to talk about this a bit later. Alright. Cool,
[00:06:19]  cool, cool. Good. People are joining on. That's great. Alright. Cool. Alright. So, let's get started then. Yeah. So, the
[00:06:32] ... Milo is going to join us in about an hour or so. Uh... He's... He's actually in college. He's in classes. Um... So,
[00:06:42]  he couldn't make it at the beginning of the stream. But that's good, because... I... Something else is pretty big that I wanted to talk about. Um...
[00:06:49]  And... Uh... Some of you are probably already kind of guessing what this is. You've seen photos leak around Twitter, um... Um... At different times. But
[00:06:59] , uh... I... I have a special guest with me today who's going to, um... You know, help me talk and announce, uh... Some important, interesting
[00:07:10]  stuff that's coming up around Solid and the ecosystem in general. So... Yeah. I'm pretty excited about this. Um... So, without any further ado, I
[00:07:20] 'm going to throw up a banner here. And we're going to welcome Tanner Lindsley to our stream. Hello, hello. Hey, Tanner. How's it going
[00:07:29] ? I'm so glad you were able to come on and join us. This is the first time you've actually been on my stream. Um... Yeah. Um...
[00:07:36]  No, it's... It's awesome. It's funny. We've been talking for ages. But... But... Yeah. Everyone's saying hi from the chat. Nice
[00:07:45] . Hello, everybody. It's good to be here. Yeah. For those who don't know, uh... Tanner's obviously, um... Behind TanStack. And
[00:07:51] , like, uh... You know... Um... All the libraries there, you know, famously React Query, React Table, React Chart, React... I don't
[00:08:03]  know. There's so many of them. Actually, Tanner, how about you give yourself the introduction? You'll do better than me. No, that was great. Um
[00:08:09] ... I'm addicted to building open source software. Uh... Mostly React stuff, but we've gone agnostic over the last two years. Yeah. Can you tell me
[00:08:19]  a little bit about that? Like, what... How did you end up deciding to do that? And, like, what does that look like? Yeah. So,
[00:08:25]  in the beginning, um... It was about ten years ago. We started a company called Nozzle. And we do search SEO analytics. So, all the tools that I
[00:08:34]  build, um... Are basically just a means to an end to accomplish the things that I want in Nozzle. Right. So, in the beginning, they were just React
[00:08:41] . But, uh... You know, with React Query, it was kind of the first one that we realized, like, wow. Everybody needs these features, right?
[00:08:47]  Not just the React ecosystem. So, we decided to build it in a way that could be abstracted out. So, all the core to our libraries now are built
[00:08:55]  separately in just TypeScript. And then we build adapters around them that kind of hook in. And, uh... They hook up all the different things for the framework.
[00:09:05]  Mostly around state management, reactivity, and if there's any, like, UI components and styles and stuff. So, not all my libraries are agnostic.
[00:09:14]  But they're all going that direction. Like, React Charts is still just React Charts. Um... But most of them are agnostic and can be extended.
[00:09:22]  So, if there's a demand for it, there's a... There's a framework adapter for it. That's really cool. Honestly, that's a very, uh
[00:09:29] ... Admirable goal. I always thought doing something like that would be really, really difficult. Like, just from my perspective of being very hyper-focused on,
[00:09:37]  like, a single framework. Um... Like, how... How has it been? Like... Like... It's been... It's been an adventure. I mean,
[00:09:46]  Ryan, you know... You know the adventures that I've had, right? Because when you build everything for React, you get... You have to and get to, I
[00:09:53]  guess, assume some things about the ecosystem. One of those things is that, like, the entire React ecosystem operates on immutability and memorization for everything. For change
[00:10:05]  detection, for performance, for everything. And it's kind of annoying a lot of the time. Um... It was great in the beginning, but now it's annoying
[00:10:14] . So... Yeah. Yeah. Moving to other frameworks, it's kind of... It's both uncomfortable but also enlightening and kind of makes you a little more angry at
[00:10:23]  some of the things that you have to deal with in React. You know, like, moving over to solid with signals. We're going to talk a lot about signals today
[00:10:30] , but, like, signals are fantastic. And once you use them and get used to them, going back to, like, immutability for a lot of this
[00:10:37]  stuff is... It just feels like garbage. So... Yeah. I mean, it's interesting. I wonder if... I mean, you've been exposed to this now because
[00:10:46]  you've been building all these tools. I wonder if other library authors kind of hit similar kind of places with this. It's funny because I remember I mentioned Pete
[00:10:55]  Hunt after one of your tweets. I brought it up a few weeks ago. Pete Hunt was like, "Look, React in the beginning wasn't actually about the immut
[00:11:02] ability and the referential equality." Like, we were like, "You could do whatever." Like, sure, that's a way you could use it, but we weren
[00:11:10] 't going to enforce it. But then once hooks were added, like, you needed that because you needed a way of being able to say, like, "Hey, don
[00:11:16] 't rerun all this code every time the component rerenders." So it's kind of interesting to see that evolution kind of play into that. Yeah, I think it
[00:11:25]  just also as applications have grown in size and complexity over the years, taking on more and more responsibilities from the SPA perspective. Well, you know, we were just sucking
[00:11:35]  everything into the client. And so it just got really heavy, you know, and where we could have done anything in the past and everything just kind of worked great. You
[00:11:44]  know, now you can't do anything. You have to be very conscious about performance and conscious about doing things in your application. So I think it's natural.
[00:11:53]  It's natural evolution for a language and a framework to kind of push the boundaries and push it as far as you can go before you have to kind of reassess and pivot
[00:12:01]  and change. So. Yeah, I mean, and that's the thing. React has been around now for a decade. I think that was the whole point of that documentary
[00:12:08] . It's Tom Brady's comment is interesting. Meta framework suck for single page apps. I don't even I don't even someone's gonna have to unpack that
[00:12:17]  for me because I'm not quite sure I understand because like I consider almost everything a single page app. So it's like a yeah, I think I think I get a
[00:12:24]  little bit of the sentiment and I hope I can prove it wrong with with what we're going to talk about. Yeah, no, that's, that's, that
[00:12:31] 's, that's good. And that's what's interesting. Um, uh, uh, people are asking about VEAT and stuff. Yeah, yeah. No,
[00:12:40]  I like it. It's, it's interesting because in a lot of ways you look at these tools and you're like, they basically do the same thing for you.
[00:12:48]  Like they're interchangeable, you know, so you kind of go like, what's the developer experience? What's the syntax? Like you kind of focus on that
[00:12:56]  kind of various, um, superficial top level kind of considerations. But like over time, once you have to live with the applications for a long, longer period of time,
[00:13:06]  you start developing different types of opinions. And I think people do develop, develop different opinions. I don't think everyone agrees on everything in the, in this range,
[00:13:15]  but a lot of what, where I got to with solid was because of my experience. I was a knockout developer using these reactive patterns and I maintained the same application,
[00:13:27]  rather large, not like super large, but a decent sized single page app for almost a decade, like for like eight years, maintaining the same application. When you go
[00:13:37]  through that process of like shifts and modernization and partial refactors and like all of these kinds of things, you start appreciating different things. Um, you know,
[00:13:47]  when you watch, I watched reactivity get really out of hand on performance. We built a shop front one time for our photo products. And it was like the craziest p
[00:13:55] inging you've ever seen where like someone would change something and like all the calculations for all like the, the shop stuff would just, and the variants would all just like got
[00:14:04]  entangled and it was a mess. Like there, there are trade-offs with any of these decisions, but then you learn from them and, um, you know
[00:14:12] , find different solutions to it. But quite often in the wider ecosystem of things, we take an idea to a certain point and then we, we go, Oh, it
[00:14:21] 's not doing good here. And instead of maybe solving it for a certain portion, we'll break off and go like, Oh, we need to do it the exact opposite
[00:14:29]  way and do it that way. And then that becomes the thing until it hits a wall and kind of this back and forth. And I think each time it's that
[00:14:35]  pendulum, you know, we learn a little bit, but, uh, that's, that's often how I feel about like the relationship between stuff like solid and react.
[00:14:42]  I totally agree. It's, it's natural. That's what we're seeing today. You know, it happens with everything. Uh, I got my start in
[00:14:51]  angular. Angular is what brought me into front end development. It was fantastic. Yeah. I, I got it. I wanted to be an app developer, like a
[00:14:58] , like a native app developer, but I refused to learn objective C back in the day. So I learned about ionic and I kind of knew a little bit of JavaScript
[00:15:07]  already. So yeah, that's kind of how I got sucked into it. And then pretty soon I wasn't building native apps. I was just building web apps and
[00:15:14]  it was really good. So yeah, angular, angular was a lot of fun. And, uh, like we're still using a lot of the patterns that angular kind of
[00:15:20]  pioneered, but just in better ways. So yeah, yeah, no. And that's the thing. There's like elements of it that keep on bleeding back and into
[00:15:26]  each other, you know? So it's like this, on one hand, you know, there's like these different philosophies and different like beliefs, but then there
[00:15:35] 's also like things when you can like look at something from else from a completely different way and get like a piece of it and then kind of integrate it back in. And
[00:15:43] , uh, I'll cover it later in this week in JavaScript, but Dan, um, Abramoff in the chat session after the react documentary had an amazing, um
[00:15:54] , quote where he was talking about like. Looking at things in the, in, in terms of like ideas surviving or, um, like, I dunno, like getting
[00:16:04]  out there and living on, you know, like being, it's the important thing. And yeah, I saw something about that too. It's, it's not about
[00:16:11]  framework or technology, you know, winning it's about certain ideas and patterns surviving beyond their implementation. Right. Yeah. Yeah. Yeah. And that was very much a thing
[00:16:23]  for me. I mean, I'll probably cover it a bit more later, but like, you have to understand. Like I felt with solid in the early days that
[00:16:28]  I was like taking this reactive pattern that no one wanted anything to do with. And then was like, come on guys, this is really good. I hope that someday someone
[00:16:39]  will like, you know, kind of appreciate that this is really powerful and we're getting there. Yeah. Yeah. Yeah. It's been crazy. Yeah. Yeah
[00:16:49] . So we're, we're doing pretty good here. We got, we, we got a bunch of people on the stream. How are you doing stream? How are
[00:16:54]  you doing chat? Yeah. Yeah. How many people are here? Uh, about 160, which is good for my stream. Nice. It's not, it's
[00:17:02]  not the, it's, uh, we don't, we don't go too, uh, too crazy here. But I gotta thank, uh, Deutanium
[00:17:10]  for, who subscribed at tier one. Um, and I try to see here, am I missing any other subscriptions? Yeah. Uh, ADRIE UI gifted tier one
[00:17:18]  sub. Thank you very much. Um, and also, ooh, ADRIE UI subscribed at tier three, subscribe for five months. Wow. That's pretty much
[00:17:26]  the whole time that I've been streaming as a affiliate. So thank you very much. Nice. Yeah. So. Yeah. Um, come on to the meaty stuff
[00:17:37] . Well, actually, okay, fine, fine. Let's fast forward a little bit. Cause I, I'm trying to remember we've been Tanner, me and you
[00:17:42]  have been talking probably since around, it was right around the solid 1.0 release. It was about a year and a half ago that we started kind of really, um
[00:17:50] , started our, having our conversations. Um, yeah. Yeah. And we have talked about a lot. Yeah. Yeah. Yeah. Well, yeah, to get
[00:18:00]  to where we are today, when, wouldn't even, uh, wouldn't have happened without going through a few different thought ideas. I think, I think one of the
[00:18:08]  funny things was there's, uh, there's some, I remember, remember Jamstack Conf this year. That's really when, uh, a lot of the current
[00:18:16]  ideas started kind of taking shape. Yeah. I, I, I, I think, I, I think some people were making some fun on Twitter. Making some fun
[00:18:23]  on Twitter to like hype some kind of conversation, but I, I'm not sure. Yeah. We need a link to that picture. Somebody took a picture. I think
[00:18:30]  Theo did. Theo, I know I got to find Theo's picture. I was actually looking. There's two pictures. Jason took one. Um, and, and then
[00:18:37] , uh, yeah, it's, it's too bad. I, I don't actually have it on hand. The one when you're adjusting your context, contact
[00:18:45]  lens. Oh yeah. It looks totally wacko. Yeah. Yeah. I'm, I'm not good enough at Twitter search to get that. I think it's probably
[00:18:53]  like, do I just at everyone's name or at Cardiato? Possibly. Yeah. Tanner. Cause there's no way he didn't. He definitely tagged
[00:19:05]  everybody in it. Yeah. It's at. Yeah. Hopefully I'm doing this right. No, did I get, did I get yours wrong? No, I,
[00:19:19]  I, the other thing is I'm not even, I'm not even sure that. Twitter search works properly anymore. Um, to be fair. Yeah. That is
[00:19:29]  fair. I've been having some, some challenges. Um, Oh, it's funny. I got a search working, but honestly, the three of our names being tagged
[00:19:37]  together on Twitter is not a unique combination. No. Oh, I found it. I found it. Someone made a meme tempo template of it. This isn't the original
[00:19:43] , but okay. I found it. Let me share my screen. Oh, I found it. I found it. Someone made a meme tempo template of it. This isn
[00:19:50] 't the original, but okay. I found it. Let me share my screen. Uh, sorry. Where is it? Uh, there we go. But yeah,
[00:19:59]  yeah. This is this, this, this one. Oh, man. Yeah. Still bad. It's so bad. But yeah, this, this is, this is
[00:20:07]  where it all started. Right. Right. And actually there was another really cool picture that I'm, I'm probably not going to find right now that Jason Langstrom
[00:20:24]  took. That was me and, uh, Fred over your computer. Um, at Jamstack conf. Um, when you were, we were first showing us the router
[00:20:34] , but yeah, this, this is the start Oh, man. Oh, man. Oh, yeah. Anyway. Um, yeah, this, this, this,
[00:20:40]  this was good. This was good times. This is at Theo's place. But, uh, but yeah, I, I, uh, this, this started with where
[00:20:45]  we started having some more serious conversations about this stuff because the truth of the matter is like, is there, is there a, it's hard. Like you start looking
[00:21:07]  and you're like, solid's doing some pretty cool stuff. but how does, how does it make a dent into the ecosystem? Right? Like you have like,
[00:21:12]  even from like, uh, agnostic kind of perspective, like Tanner had where he's kind of like going like, look, I'm supporting all this different stuff.
[00:21:18]  You could tell something is different here. Right. And you're like, how do we make these things work together? How do we, you know, use the, you
[00:21:24]  know, use them maybe together? You know, it's, it's a tricky problem. Yeah. Well, and it's, it's difficult because like, I
[00:21:36]  don't want to, I can't move away from react. You know, like I have so many things that are built on it and the world really the, the development
[00:21:49]  world should not be built on the idea that when, when something new comes along and changes, like you don't, you shouldn't have to rewrite everything. Right.
[00:21:58]  You should be able to incrementally adopt ideas, concepts, patterns, and hopefully by the time you do that, you know, migrating or rewriting is at least easier
[00:22:09]  or feasible. And this was one of those areas where, you know, I, from at least a year, no, probably two years ago, I remember calling you up
[00:22:19]  and saying, dude, so re like solid, maybe not even just just all the signals are the future. Right. And I was like, signals are amazing. I
[00:22:27]  believe that solid is onto something and we need to figure out how that's going to work into everything that I do. Right. Right. And then we looked at bringing
[00:22:37]  it into react. And I wrote some hooks that kind of treated signals first class, but they were terrible. Um, and then ultimately we ended up talking right there about,
[00:22:47]  uh, that, you know, routing and it's like, Hey, how can, I'm going to build this agnostic router and, uh, I want to
[00:22:53]  make it work with solid. And that's what we were doing. mostly there as we were talking about, like, like how could we build an agnostic router
[00:22:59]  that works with every framework? And to be honest, we didn't get very far. No, like that's the funny thing. I mean, it, that seems like
[00:23:07]  the obvious solution, but people don't always understand that agnostic sometimes doesn't mean good. Like sometimes there's certain types of problems. If you can find the right
[00:23:15]  primitives or the right common ground, you can do it. But other times it's, it's actually really difficult because you're just sacrificing on one of the sides
[00:23:24] . You're just compromising. Um, at some point people might need to, might better think about it as sometimes the technology doesn't need to be agnostic.
[00:23:33]  Just the, just the ideas and the patterns and, and how you think about certain things. Right. Right. And that's kind of where I have been with a lot
[00:23:44]  of my libraries. I think it's like headless is a theme, right? That doesn't really matter where you go. And react query, it was all about
[00:23:53]  like server state. Right. And, and this new router that I'm building, it's, it's not about how it's implemented, or it's not even really
[00:24:00]  about being framework agnostic. It's really just about type safety and, and better state management and just having better tools to do routing, you know, and that's
[00:24:11]  not, that's not specific to any one framework. And you can't really, you know, embed that into a core. If you think about it, cause every
[00:24:21] , every framework is going to be a little different. Well, especially routing routing is like very, very special. Yeah. Yeah. And it's funny, this kind of
[00:24:28]  idea. I mean, we saw it. Uh, I, it was like when react released react native and they're like, no, we're not like, they
[00:24:34]  were saying like, keep their mentality, but you're not going to be reusing the same components. Essentially. This is stepping back even like one level back from that.
[00:24:43]  And it, it is hard. Um, routing is like the backbone of applications. Um, which means that like, it comes with a lot of the opinions. It
[00:24:52]  comes with a lot of like the change detection update model things that are very core to the framework. framework. And for a lot of things people are lucky. It might
[00:25:02]  as well be in the framework itself. If you really think about it. And one thing that I was just talking about with a friend was that it actually might've been you
[00:25:10]  that, uh, react is really one of the only frameworks that didn't have a router. That was just kind of like, this is it, this is the router
[00:25:19]  and this is how it works. It's first class support for everything. Um, and that kind of made an interesting ecosystem inside of react for routing. Yeah. I mean
[00:25:29] , and everything I, I, okay. I gotta admit, I kind of admired this and I actually spent the first couple of years of solid, like again, not building
[00:25:36]  the router and be like, yeah, you can build the router. And then there was like, we had like three or five different routing solutions. And then at some
[00:25:45]  point I was like, okay, well I'm going to build a router for what I want. Cause everybody who was building the router had their own thing. There was like
[00:25:51]  a type safe router. Actually you'd quite be thinking that someone had created a completely type safe router back then. It just was, it was like, it was a little
[00:25:57]  hard to approach. It wasn't as usable as some of the stuff you've been doing. Um, and then like someone else, most people made, there's like two
[00:26:04]  or three clones of react router. And, and then I made my own router, which was based on nested routing and configuration based routing. Cause I like in my
[00:26:13]  head, I was like, like, this is where I want to be. And yeah, I mean, at a certain point I was, I got the guy who had
[00:26:21]  been building the most popular react clone router and just merged my efforts with him. And that's how we got like the official solid router. But like, it's tricky
[00:26:30] . Cause once you do get there, it is very obvious that an official solution sort of does pop up like, like react router for all purposes became that official solution for react
[00:26:42] . Um, so it is interesting. I don't know what other implications are you thinking about with the fact that they didn't actually have an official router. Um,
[00:26:51]  and maybe it wasn't that it just wasn't official. It's that, you know, react router really dominated the space for a while, but then meta frameworks came
[00:27:01]  along and really kind of through a, through a wrench into things because as we have discussed and learned over the last many, many months, um, you know, meta frameworks
[00:27:14]  and routers are more tied together than the framework in the router, to be honest, because to do all of the things that you want to do with a meta framework
[00:27:24] , you need to have full control over the routing experience. Um, and ultimately this put my router in an interesting situation because, uh, I wasn't trying to be a
[00:27:36]  meta framework upfront. I didn't really want that. I just wanted something to be SPA and, um, but I did want it to work with SSR. And
[00:27:43]  that's where it got really weird is because once you start doing anything on the server, your router needs to, you know, be knowledgeable about a lot of that stuff
[00:27:53] , at least be integratable. So here we have Gatsby and remix and next, and they all have their own routers. Right. And it just so happens
[00:28:06]  that react router is the only one that's used in remix that you can also use without the, the meta framework. Right. Like, could you imagine next being able to
[00:28:15]  use the next router outside of next? Honestly, I don't think it would be that great. So yeah, I mean, yeah, if you, if you take
[00:28:24]  away the, if you take away the meta framework from next, the router that they have is, is really just, it's pretty simple. And, um, it'd
[00:28:31]  probably be the same thing for, but I think Gatsby uses reach or something like that. So, you know, the rise of the meta framework world has created a
[00:28:40]  lot of division in routing. Um, because of the amount of control that you need. It's also locked everybody in really tight on their routers. You know,
[00:28:50]  it's, it becomes a part of your meta framework. It's really difficult to change it or move away from it or, or even improve it without making people's lives
[00:28:59]  more difficult. Yeah. And it, and it, and what we're seeing now, especially cause like, yeah, as you mentioned, react router is kind of like
[00:29:06]  the free agent, but even then they, they've been adding stuff like actions and forms and posts. Like, like, yes, it works isomorphically, it
[00:29:14]  works client only or client and server into remix, but they're getting like, you, you suddenly have to be aware of the network kind of as like, and again,
[00:29:23]  you're thinking, well, yeah, a router would be aware of the network. But for a while single page app routers were not actually that aware of other than
[00:29:29]  the URL, they didn't have to be aware of the network. Absolutely. So now you're expected to handle all of that stuff or not all that stuff. I think
[00:29:38]  that, that, that, that must have been very challenging for you Tanner to kind of figure out like when the router stops and when the meta framework begins. Yeah,
[00:29:47]  it's a, it's a, it's a big challenge because it's, it's kind of like you, you're expected to just jump into this server, this
[00:29:56] , this server environment. Um, and honestly, I will admit over the last two or three months, I've just been just totally confused about where to draw those lines.
[00:30:07]  Um, and it wasn't until some blingy stuff came up that I was like, wow, those lines are now just really clear and really easy to use.
[00:30:18]  Um, so it's, it's taken a lot of work to get to where we are. And I think it would be a disservice to a lot. I,
[00:30:26]  I already think it's a big disservice to a lot of the industry to, to talk and treat SPAs like they don't exist anymore. Like, let's
[00:30:35]  like, talk about the biggest bike shed ever, right? Is we just spent the last seven, eight years moving to a world of SPAs. And then the minute that
[00:30:47] , uh, you know, the, that the MPAs or pest pills or whatever the crap they're calling them now. Uh, such, I hate the acronym,
[00:30:56]  they're so dumb, whatever they're calling it now, you know, it, it, it can't invalidate everything that we've worked towards. It needs to
[00:31:04]  be incremental. And so, like, I remember when I was at, at gem set conf up on the stage, I said, who, who builds and maintains an SP
[00:31:13] A. And like everyone in the audience put their hand up and because it's true, people are still maintaining and building SPAs. And it's going to be really
[00:31:22]  difficult to get those people away from SPA land. And you, you need to consider that if we want to move things to the server, we need to be able to
[00:31:30]  do it incrementally and rewriting to a new meta framework is not incremental. Yeah. Yeah. Yeah. And that's so tricky because then like, it's like
[00:31:40]  the KCD standards thing though, too, because you're like, well, if, if everyone's presenting stuff in a way that like rewriting to the meta framework is
[00:31:49]  actually difficult. Then we need another meta framework that doesn't force you to write to the meta framework. Yeah. It's a new standards problem. Right. Right.
[00:31:57]  And luckily, you know, we don't need to think about it though, in, in terms of so, so single layered though. Right. Right. We,
[00:32:05]  when we start thinking about it more as what this pyramid of pieces that we have to put together. Right. And like move swapping pyramids, you're getting rid of
[00:32:15]  every piece you have and moving to a new one. And really a better world would be moving, you know, only top level pieces, moving things around top level so
[00:32:26]  that you can still share lower level primitives across frameworks and across expectations of your router. And even just those ideas that we're talking about, the concepts and the patterns,
[00:32:38]  being able to transfer those from framework to framework would be really valuable. But that just doesn't exist today. Yeah. It's difficult. I actually, that was probably
[00:32:47]  a decent top point to bring up what we, this is kind of like what Tanner has been looking at the last while. I'm going to talk a little bit about what
[00:32:53]  I've been looking at for the last while and kind of put this in context a bit from my side. Cause I've was working on solid. Everyone told me I needed
[00:33:02]  a meta framework. I'd already built the router. Right. We talked about, and I was pretty happy with it because I was using it actually back then, um,
[00:33:11]  to just blow out demos and benchmarks. Like lighthouse thing, like client side rendering with parallelized data fetching and nested routes. Like if done right, even without
[00:33:20]  server rendering will slay slow SSR builds where people wait for all the data and they'd have slow backends and stuff. I was just, I was just killing benchmarks
[00:33:30]  and demos with client side. And I was just like, who needs SSR to be fair. Then I went to the network tab and said, slow three G and
[00:33:37]  I was rudely awakened, you know, so to speak. There are, there are, there are considerations here, but I had this kind of challenge where I'm like
[00:33:44]  built really good single page app style tools. And then I was thinking like, okay, SSR should be an extension of that. How do we approach this in a
[00:33:54]  way? Because like, I didn't want to write a meta framework, but I like, I was kind of getting pushed to it. Cause I was like, Oh,
[00:34:00]  Svelte has Svelte kit. React is next. You know, it's like an expectation. It's like, because people want these like starter kits.
[00:34:07]  And I was like, okay, fine. We can make a starter kit. Right. But I w I didn't want to be opinionated about it. So I approached
[00:34:14]  it in a really interesting way. Cause I was like looking at each piece and I was like, okay, how do I write this in a way that I don't have
[00:34:20]  to write or maintain any of it? So I was like, cause I was like, when I was working on the data loading for solid rudder, I couldn't assume
[00:34:27]  what you wanted to do there. And I needed reactivity to trigger updates and stuff. So I just like made a container for it. And then when I went to
[00:34:33]  solve startups, like, yeah, we should just bring those data functions and okay. Maybe a file based router to make it easier to use. But generally speaking, same thing
[00:34:39] . It runs isomorphically on both sides. I want you to use 10 stack query in there or whatever. I'm not going to tell you how to fetch your data
[00:34:46] . That's ridiculous. You know, like, sure. If you want to do that, maybe, maybe a form library could do that. Like I, I was just
[00:34:52] , you know, I really didn't want to tell people what to do. And, um, so I had, I was kind of been sitting here. So I
[00:35:01]  built solid start, uh, with a few people from the community, especially Nikhil. Big shout out to Nikhil. And we, we, we've tried to do
[00:35:09]  the least amount of stuff possible and make every piece be able to be ripped out. But the, the sad reality of it is even at the minimum, there's just
[00:35:17]  so much you have to do. Deployment adapters, different platform support, monorepos, tooling, change. And I'm not going to lie. The last
[00:35:25]  few months for me has been just like fixing bugs on windows, um, and configs in VEAT rather than developing cool features. We developed the cool features and released
[00:35:33]  it. Then we got real people using it. We got real people using it. And then it's like, oh yeah, reality sits in. This is what maintaining
[00:35:38]  a meta framework is. This is why these companies can find it. Even the most minimal do nothing meta framework, like solid start still has all of this infrastructure and orchestration
[00:35:49]  behind it. And I'm just like, man, I'd rather be like making some really cool, like approach or get the show people how the next architecture could work
[00:35:57]  rather than, um, why this path doesn't work on windows. Exactly. We're worrying about some, you know, your, your deploy to Vercel or Net
[00:36:07] lify broke and you gotta go check that out, you know? I mean, it's, it's really like you, once you do that, your responsibilities all of
[00:36:14]  a sudden move to all this, like deployment and infrastructure problems. And you have no more time to iterate on the really great ideas that are pushing like forward the, you
[00:36:23]  know, the JavaScript ecosystem and like the UI ecosystem and actually building apps. Like how much do we talk about deployment and, and building, you know, and, and then
[00:36:35]  we're like ignoring all of the fact that like none of our apps are ARIA compliant. And, and, uh, you know, everybody's still complaining about styles
[00:36:44]  and tailwind. And so it's like, can we get back to like building apps, you know? Yeah, no, it's, it's, it's tricky
[00:36:50] . And it didn't matter. You know, there's that whole, some people might call it procrastination. People witnessed this whole thing. My last year of on stream
[00:36:56]  or whatever, I literally was like dragging my feet kind of, I was like looking at every framework and like being like, Hey, are there solutions here? Are there
[00:37:05]  patterns here? Are there patterns here? Things that I could learn that would basically allow me to keep solids unique reactivity and basically push the burden of, you know, having
[00:37:19]  opinions on the, on the end user. Um, which is fine. Cause don't get me wrong. Someone will make a more opinionated layer and package that up
[00:37:27]  as well. Like someone will make, you know, uh, you know, like a redwood or something on top of, you know, what we've been doing.
[00:37:33]  This all starts. This will, this will happen or create T3 app. Like, I mean, that's already happened. Like create JDF. Like someone will do
[00:37:41]  that. And if that's what they want to do, that's amazing. Cause then people can like trust that. But the thing is opinions change at that level much
[00:37:49]  quicker than they do at the core library level and being, you know, an open source maintainer, you know, community, I gotta be realistic here. And I really
[00:37:57]  like empowering the community. I really love honestly that when, uh, when that's tan stack query example came out on Twitter and it was put up and, and it
[00:38:08]  was just like, oh yeah, look, I just stuck this in solids route data. And I, it works with streaming. Um, and like it works with, uh
[00:38:18] , data is automatically serialization. The end user does nothing. It just literally just works as if it was built into the framework. I was like, finally, like
[00:38:26] , that's why I built all these pieces was so that someone could literally take a library, like tan stack query. And it just, it just work as if it were
[00:38:35]  native. And I think this is really powerful if you understand what the primitives are, um, there. So yeah, I mean, that's, that's where I
[00:38:43] 've been at. So I'm like sitting here and Nikhil, uh, been doing great work on solid and solid start. He had, you know, life happens
[00:38:51] . He, um, actually moved back to India and kind of, you know, had to uproot his life, you know, and kind of pack up and get adjusted
[00:38:59]  and get to his new place. So I was sitting there with solid start kind of mostly doing effort on my own and Nikhil comes back and he's like, man,
[00:39:07]  like you're still turning through these bugs. And I'm like, yep. Um, so like you start kind of going, can we somehow combine our efforts? Can
[00:39:19]  we somehow do better here? So like, you know, people who, you know, focus on one side, like the platform, they care about that can work on that
[00:39:28] . People who want to do the glue, they can do that people who want to do the architecture. Like, can we, can we do something? Cause let's
[00:39:34]  face it. Like next JS is a big elephant in the room. Not everyone's going to start a VC started startup to like, you know, come up with a competitor
[00:39:43] . It takes that on meta framework. I think a core library could definitely be done independently. We've seen it multiple times from view, um, Svelte,
[00:39:51]  but solid's getting somewhere, you know, like, but, but a meta framework, like a next JS, even SvelteKit. Like, why do you think
[00:39:58]  SvelteKit took a while? Like it takes incredible amount of work and company backing to do this. So, um, that kind of really, I think leads up
[00:40:06]  to, to what's been going on and what we want to talk about today, unless there's anything else you want to add first Tanner. No, I mean, I
[00:40:13]  will preface it with like, what, like two weeks ago. I came to you and I was like, dude, how did you build solid start? And you
[00:40:23]  were like, painstakingly, you know? And I'm, and what, and I remember what did I say? I said, I don't want to build
[00:40:29]  a meta framework. There's like a last thing that I want to do. The last thing I have time to do, you know? But then like the thought was that
[00:40:37]  like, why, why is it so freaking hard? Like, why does it have to be this way? And it doesn't, it doesn't have to be this way
[00:40:43]  because there's, they're being built every, every month. Now there's a new meta framework, right? And everybody's repeating themselves. So I think that's
[00:40:52]  my practice to what, to what we're going to announce. Right. So, yeah. And, and that, yeah, exactly. And that, and that gives you
[00:40:59]  context here because what we're talking about, it's me and Tanner here today. Um, because this, we're, we're the ones kind of on the forefront
[00:41:05]  of the, the products that we're talking about here. Um, tan stack and solid start and whatnot, but there's actually a third partner, um, in this,
[00:41:12]  um, and we'll have him back on the show again, um, in the near future, as we start gets rolling. Yeah. Yeah. And, uh,
[00:41:20]  and, uh, the, uh, the Astro community. Um, so the three of us are all tackling, um, parts of the problem. And what we
[00:41:39]  realized is Astro is actually a company that is building a meta framework that is VC funded and actually has the, the, the work going in who build the adapters,
[00:41:52]  build the core pieces and they build them on, you know, the, the web standards, uh, stuff that we're all doing. We just keep on repeating the work
[00:41:59] , all the adapters. Yeah. So. So, but important, but I'd say most importantly, though, they're building a meta framework without a single framework
[00:42:10] , right? They're just really building the meta part of it and not the framework part of it. You know what I mean? Um, which, which explains why we
[00:42:21]  are so interested in working with them, you know? Right. Right. So what this means for the, for those understand is some, someone asked us like this,
[00:42:32]  the end of solid start? No, no, no. Uh, solid start offers a very, um, unique, important user experience. And in fact, we, we
[00:42:40] , we've brainstormed a lot of ways to combine efforts and realized that there's only certain places that we can. It doesn't make sense to completely combine it. But
[00:42:49]  what we're talking about is a replatforming. Astro is the platform. It's like VEET plus, plus, you know, like if you want
[00:42:56]  to think of it, it's, you get all the power of VEET and VEET's plugin system, plus a set of deployment adapters, plus,
[00:43:03]  you know, content collections, plus, you know, a bunch of tertiary stuff. You forget about the islands for a second. We're talking about a platform, a
[00:43:10]  common platform for building, you know, on with meta frameworks. It's actually, it's, it's, it's, it's that an SSR, it
[00:43:17] 's like, it's, it's basically VEET plus SSR. And the funny thing is you, you all are probably expecting, oh, well, let us
[00:43:25] , uh, you know, are we going to merge our, our router efforts and whatnot. And that is not actually the plan here. Um, we're actually talking
[00:43:34]  about two integrations that are basically sibling integrations built on Astro that are basically their own experiences, but use a lot of the same pieces. We're talking about
[00:43:45] , I don't know if you're going to stay with us, but tan solid start and tan stack start, which are both different targets. Cause they have different needs.
[00:43:53]  Um, we might figure out how to share more and more stuff over time, but generally, uh, solid start is built for solid first class citizen built on Astro's
[00:44:02]  core. We were actually able to lift the current solid start and just like swap out Astro. And like, it basically would just work already. Um, like the,
[00:44:10]  like all the stuff you've been using, solid auth, middleware, everything. It's the same product, except we get to benefit from that, that shared foundation
[00:44:17] . And similarly on, uh, tan stack side of thing, I believe tan stack start is actually a react specific or react preact specific, uh, meta framework. Yeah
[00:44:30] . And honestly, that's probably a big change from like the big hype video that I released it, uh, at, uh, Jamstack conference. So the
[00:44:39]  scope is changing and really has already changed because, um, through all of this discovery and realization is that, you know, framework and meta framework and router, they really are
[00:44:51]  really tightly coupled. And while I truly believe in my heart that building agnostic tools is the way to go. Um, this is one of those situations where,
[00:45:04]  um, building a router that's going to be available in any framework is probably going to produce a, you know, a lower quality end result. than if we were
[00:45:15]  to just take the concepts, um, that we have in 10 stack router and spread those concepts into other existing routers that are native to their frameworks. Um, there
[00:45:28] 's nothing saying that solid solid routers should not have completely type safe routing, better search parameters, you know, more flexibility around search validation. So, you know, that
[00:45:43]  that's kind of where we're heading is that, um, you know, we don't have to combine the code to combine, you know, the, the patterns and
[00:45:53] , and how people approach building applications. Yeah. That's, that's the super excited part here. Cause like, I didn't, I didn't get to that
[00:45:59] . Uh, yeah. But Tanner just said, he's going to help us get that type safety into solid router. We're happy with solid router because it works for solid
[00:46:07]  really well. And it has the reactive model. And at the same time, tan stack router is morphing a bit because it gets to focus on react, do patterns
[00:46:16]  that are best for react. Plus I I I'm pretty happy with this because of the shared pieces actually align a lot closer to the patterns that we already use in, in
[00:46:25]  solid around. And solid around data fetching and, uh, like, like, and loading patterns and you just the way these pieces move together. Yeah. And you
[00:46:34]  know, when you look at it, when you look at it this way, it's really not going to be, um, that difficult to take the things that we've
[00:46:43]  learned from building a fully type safe router. That also feels good to use and just bring those concepts over to an existing router that works great where it is. You know
[00:46:55] , um, the, there will probably be some things that need to change or, or, you know, get better different APIs as we go forward. Um, but
[00:47:04]  that's, that's the whole idea is that, um, for me personally react is, is great. And, and I support react as an ecosystem because it is,
[00:47:16]  it's really fun and it's really great. And I have a lot of, uh, invested, um, stuff in react, but honestly, like I'm,
[00:47:24]  I'm more excited about the fact that Tansac start and solid start are going to spiritually feel and look the same, that they're going to behave very, very similar
[00:47:37] . One will have signals and one will have immutability and one for now is going to have, you know, the type safety and one is going to get that
[00:47:46]  type safety soon. So it, we're, we're unifying the, the underlying tools that we're going to be using to build these frameworks. And, um,
[00:47:56]  there's a couple of layers to that. Maybe we should talk about those layers, right? Yeah, yeah. We, we should get into those layers. Uh,
[00:48:02]  but my last high level comment on here, because I'd like to, before we get talked about the layers for a second, is that the reason this is exciting to me
[00:48:11]  is because it's not just are these specific two products that we're working towards and this kind of shared effort and shared, you know, moving forward. It's the philosophy
[00:48:22]  of the start projects also aligns with the philosophy for solid start that I started at the beginning where it's about the minimal. about the minimalness of the, of
[00:48:32]  the pieces and the layer and being all optional. I, it's important for, for me at least to, to push back against the concept of like you, the,
[00:48:40]  the, you need a meta framework thing. And you can make that choice and what a meta framework means to you, but I am not going to with solid say, you
[00:48:52]  can't use solid without it. And I think that this approach keeps us very open to that reality and, and show that there is an alternative to being like, Hey
[00:49:06] , you just go use next or whatever. I, I am, I'm not, I'm not big on that mentality. I'd also say too, that it
[00:49:16] 's not just about, you know, it is about that, but it's also about, you know, not being so binary with, you know, either you're using
[00:49:26]  an SPA or you're using, you know, a meta framework. Like the lines there should be a little blurrier. You should be able to gradually adopt server
[00:49:36]  side technology, you know, on a spectrum of SPA to, to server side. And I think that's something that solid start has really nailed. And it's
[00:49:49]  a pattern that we're going to be adopting for 10 sec as well. Yeah. So yeah, let's, let's talk about those pieces. Then we talked about the
[00:49:56]  Astro piece. I don't know if we have to go too much into that. Just know that they control the adapters, the build process through beat and what other
[00:50:04]  cool. Server environment, you know, all the goodies that come with server environment and endpoints. You know, that's, that's another interesting thing to talk about
[00:50:13]  is that next and remix, you know, because they have to, they have to control everything top to bottom down to infrastructure and deploy. They needed to have a good story
[00:50:23]  around building API endpoints as well. And this is something that Astro already has built in. You know, we, we don't need to, we don't need
[00:50:31]  to worry about replicating that. Which is one of the biggest reasons that I wanted to use Astro is because I don't want my router to have to, to
[00:50:41]  also be a rest HTTP router. You know, hats off to remix that they can do it, but it puts a lot of assumptions and a lot of constraints on the way
[00:50:50]  you can architect your apps. And, and I just didn't want those. And by adopting is adopting Astro, we get that for free. So it's I'm
[00:50:58]  really excited about that. Right. And yeah, so that layer is, I think pretty much self-evident. The other layer is the top of the stack.
[00:51:09]  We'll talk about the middle last, I think, which is pretty clear. If you've seen parts of solid start, we're talking about the router. We're talking
[00:51:17]  about the framework, like solid or react itself. You, you all are familiar with those pieces. Um, you can use tan stack router, which I guess is in
[00:51:27]  a sense, it's a, the next gen of react location. Like you, you know what that's like solid solid apps. You know, anyone's, do you
[00:51:34]  get it a template? They understand what that, what that means. So that piece is the same. The, the, the router, um, uh, design is
[00:51:42]  actually for both of them are actually is converging on what I was talking about earlier where solids loader pattern, um, is isomorphic. And it leaves the
[00:51:52]  data fetching, um, details, uh, to you, it, it, it, it basically assumes that how you do loading is, um, is client side.
[00:52:02]  Like it's, it's, it's, it's a client side meant. That's a really important distinction is something that is that the, the data loading,
[00:52:10]  like the, the events and, and the life cycle of the data, um, is isomorphic and, and really always is isomorphic. And that's,
[00:52:20]  that's great. People make the mistake of saying, well, if it's isomorphic, then it, it can't possibly do just server as well. Right.
[00:52:28]  But that's where, you know, that's where the other part of the tools come in. Right. Right. Yeah. And the, the, the, the
[00:52:37] , the, the middle glue between, you know, what Astro offers today, like, don't get me wrong. We'll, we'll probably be helping Astro
[00:52:42]  adding more to that layer. Um, is this idea that you've seen in solid start already, um, which is these compile based macros. I want to call them
[00:52:53] , um, uh, stuff like the server dollar sign and Island dollar dollar sign and client dollar sign. Um, and what these macros let you do is, uh
[00:53:03] , and this is, this is nuanced. Like you have to actually think a bit about like the implications of different API choices here, but they basically let you take.
[00:53:11]  Isomorphic code and to denote that say, Hey, this is client only, or this is server only in rather than changing the code itself. The existing ecosystem forcing you
[00:53:22]  to go around and modify all your files. It's saying, and this is actually aligned with Astro's philosophy of doing the imports of the islands. It's saying
[00:53:31]  here, I want to use this like this, and I'm going to denote it that way. Um, another idea we have here, uh, came from Tanner was split
[00:53:39] . Why can't we separate code split with inside the same file? Well, all with these kinds of powers at your disposal, you could literally build a whole application in
[00:53:50]  a single file. If you want to, if you want to, I'm not saying you do, but the choice here is basically to get away from the fact of that
[00:54:01]  a prescribed structure. Like, don't get me, you can choose, you know, you can build a file based, uh, parser thing that generates code,
[00:54:08]  like generates the right routes. You can take next or Svelte kits conventions or whatever, and do that. But this universal primitive approach means that you can also just stick
[00:54:18]  the whole thing in one file and it, and it works. And we were like 95% of the way there with solid start already. Um, except for the code splitting
[00:54:26]  on the router. So what we're talking about here is taking those macros, which gets shipped out as basically a Babel or Viet plugin. Uh, essentially
[00:54:33]  and packaging them independently, uh, jokingly code name bling because of all the dollar signs. Yeah. But like as a way that any framework built on Viet or
[00:54:44] , or, or whatnot, I, I, it's even Babel technically, but we could move away from Babel. Maybe, uh, you know, we,
[00:54:50]  we can look at different compilers when we get there. It's just a convenience right now, but basically like you just take any Viet framework. Like I
[00:54:56]  don't know is analog in the crowd, like, you know, like, and have this ability to do this, um, sort of very powerful thing. It's not
[00:55:06]  saying like, this is our use client that is react specific. Like we're saying, look, this is a pattern that you can use as a primitive across the whole
[00:55:16]  ecosystem. And what's really cool about it is, as I mentioned, I just take salt, hand stack query or existing router loading pattern or anything that exists in the ecosystem
[00:55:26] . Just go, Oh no, I just, I just want that to run on the server. Like that's all there is to it. It's it's,
[00:55:32]  you don't, you don't have to like re-architect your libraries around this stuff. It just, it just works. It's just a nice little augmentation
[00:55:40] . The way I like to look at it is from my perspective, moving to something like signals is you're, you're taking the, the coarseness of component and
[00:55:53]  file boundaries of react. of react and, and you're going down to signals, which you get fine grained reactivity, right? And, uh, hats off
[00:56:02]  to the reacts team for going all use client use server that hopefully that pays off for the react ecosystem. I'm already, I'm already kind of like jaded by it
[00:56:14] . I just think I don't really want to put use client use server and all my files everywhere. Um, but then you have, you know, kind of this
[00:56:22]  other camp that's like, well, it's all convention based, right? It's next it's remix and it's very strict conventions. This to me is spiritually similar
[00:56:32]  to the move going into fine grained reactivity. You're saying what is the, what is the most complex and advanced use case of, of custom bundle splitting and
[00:56:45]  compilation that we could imagine. And honestly, that, that use case is, is somewhere in the lines of solid starting like quick, right? Is that you're grabbing
[00:56:57]  these tiny, tiny pieces of scope or scope and outer scope and little tiny boundaries inside of existing files. And you're able to just kind of code fence those and say
[00:57:08]  split server client only island, right? And you, you are indicating to the compiler exactly how you want that code to be compiled with just a simple wrapper. And this
[00:57:20]  is so important in my opinion, because you, you get so much, so much, uh, of the great things of the ecosystem for free. You now get all of
[00:57:30]  your, all of your type safety just kind of stays where it is. You know, an identity function is all that's needed for these server dollar sign and, and
[00:57:39]  split and stuff. Um, so you get all that, you get to keep things in scope for TypeScript. And everybody knows that when you have things in scope for Type
[00:57:49] Script, it just, it's so much easier to infer types. Um, rather than having to import them from other files. And now you're getting into circular import problems
[00:57:58] , you know? So you get to keep this amazing developer experience of having everything in a single file or, or just, you know, together. But then at the
[00:58:07]  end of the day, everything gets split out. Anyway, ask anybody who's built a large app and how many files they create or have to create to do, you know
[00:58:15] , proper bundle splitting and, and all the asynchronous imports that have to happen. And it's a lot of work and a lot of the complexity of a large application comes
[00:58:25]  from these patterns that have really been necessary up to this point. You know? Yeah. Yeah, no, I, and that's the thing. There's a, there
[00:58:34] 's a bit of an element here of like, if you like that structural patterns, you can still do it. People will build more opinionated stuff on top of this.
[00:58:42]  They will do that. And they'll be like, no, I don't like this. You can do this. Good. Go ahead. Build, like set up
[00:58:51] , like just a plugin. You can. Yeah. Just like make your own file system router. It doesn't take that long. Plug in output the stuff. Like I
[00:58:58]  remember, I mean, obviously you need to know a little bit of what you're doing, but like, you can just generate this. It makes it really easy with
[00:59:05]  glob imports, like side note, just go, go for it and then enforce your pattern. But we're enabling all of it. Like that's, that's the thing
[00:59:14] . Like I it's, it's okay to people have different opinions here. Um, I, I, I think personally, I'm, I'm like, I'm
[00:59:20]  like, I'm not even like a hundred percent over on the co-location. Like when I see the server in lines in the, in the middle of an
[00:59:26]  event handler, sometimes I'm like, that's a little bit too much for me, but you know, I, I, I tend to put them at the top of
[00:59:33]  my file. It doesn't like, this is a choice. We're making that a choice and making that a primitive. And I think that's really powerful when you can
[00:59:41]  consider, you could use it with, with anything. Like I, I, I just said, I, different products have different goals. Um, being heavily opinionated
[00:59:49]  has never been one of mine. Yeah. And I think Tanner's like on the same page on that. Yeah. Just kind of staying out of opinions. Uh, you
[00:59:58]  know, let's find the least common denominator and just start there. So that that's exactly what we're doing here. You know, code name bling is the least
[01:00:06]  common denominator, uh, between solid start and tansec start. Um, and it unifies the patterns. It, it, uh, unifies the deploy platform.
[01:00:15]  It does a lot. It does a lot of things while still letting everybody just kind of do whatever the heck they want. Yeah. Uh, someone was mentioning the decorators
[01:00:23]  are a good fit for these compiler. Yeah. In general, I think decorators would be, um, one of the challenges obviously is like syntax and stuff like it.
[01:00:31]  Like you can't decorate a variable with decorators in JavaScript. Like you only works with classes. Like there's like certain things like that. Like that's the only reason
[01:00:38]  why I like it didn't quite fit ready. But I do what I talk about them. I do view these kind of like decorators. Like that, that is
[01:00:44]  like mentality of things. They're, um, they're pretty much identity functions. A lot of them are. So they're, they're, uh, they're a
[01:00:50]  function where you're passing it. Another function that will get executed, you know, in some different context. And so a lot of the time, you know, just
[01:00:58]  an identity, an identity wrapper. It's very, very similar to, to a decorator. Yeah. And I, I think, I think it's interesting. Cause
[01:01:05]  like, I don't know where this goes. Like it was, there was a comment. Rich was talking about how like this line was just one line too far for him
[01:01:13] . Uh, Rich Harrison spelled. And someone was like, well, okay, I got a question for you then. You, you, you, you, you saying
[01:01:19]  that the, uh, network should be a separate file. He's like, should the difference between edge and not edge be a separate file? Should like, it's like
[01:01:25] , I talked about this in my article a bit about future, you know, 2023 frameworks moving forward. But like my belief is people want this monolithic, um,
[01:01:35]  architecture experience. It's always easier when you have like, put the stuff closer together, like sure. Split stuff out where it makes sense, but artificial boundaries are bad.
[01:01:43]  Um, and what ends up happening is we're going to build monolithic apps in these frameworks. And then they're going to be distributedly deployed. There's some of
[01:01:53]  the stuff's going to go to the edge. Some of the stuff's going to go next to the data center. Some of the stuff's going to like different types of
[01:01:57]  processing. Some of the stuff's only end up in the client. This is kind of like the new norm. And there's a question. Maybe you can build a
[01:02:03]  compiler smart enough to automate that process. And I think in a sense, if you want to understand quicks, longer time term mission, that is part of their long term
[01:02:13]  mission. Yeah. Um, this, this idea is kind of similar idea where, but it's just more explicit. It's just saying like, this gives you the,
[01:02:20]  uh, you know, maybe the, I'm not suggesting that we're going to add an, uh, edge dollar sign, but I'm just saying like, maybe there
[01:02:27]  is a sort of like explicitness of, of being able to manage, um, execution computation along these lines. Like understand, uh, you know, Hey, this
[01:02:38]  is how we approach or design applications. Like we don't know what the emerging patterns will be, but having primitives to be able to control or experiment with that,
[01:02:46]  I think is really, really, really powerful. Yeah, I agree. It opens up the door for so many things too. You know, being able to push code into
[01:02:54]  surface workers or push code into web workers. Um, like you can, you can really start to get creative with, with where these primitives could go. And the
[01:03:03]  more that the ecosystem shares, the better. Yeah. Yeah. We're still working on the patterns. There's a lot of comments in chat coming in. Kind of be
[01:03:10]  like, let's make you splitting serverless functions much easier. Potentially. I mean, this is, this is actually one of the problems that I've been trying to
[01:03:14]  figure out. Uh, and I, I don't know the answer to like API routes are kind of obvious, but there, there's, there, there's a
[01:03:20] , there's this whole question around like, you know, cold starts or consideration a large app on the, on a serverless has cold start issue generally. Like you have
[01:03:30]  to load the whole app. Yeah. How do we approach distributing it? I think there's caching considerations. I think there's stitching considerations because like do you use multiple
[01:03:38]  workers and then have them all stream through the same worker. I think we're going to be figuring out a lot of those pieces over the next year or so. Um,
[01:03:46]  and this is all kind of aligning on that. If you, if you're kind of, that's where your mind is coming from. Power of next to everyone
[01:03:56] . Yeah. I mean, yeah. I mean, that's another way of looking at, I suppose. Yeah. You know, I wouldn't say it's the power
[01:04:04]  of next for everybody. I don't know. Maybe if you can look at it that way. Um, the way I look at it is that you get, you get
[01:04:11]  the power and ability to, you get the power of a center stack API. A term that's been floating around. I think the remix team honestly have been using that
[01:04:23]  term a lot is center stack. Right. And it's, it's the idea that, you know, even, even if you're proxying, uh, an
[01:04:29]  API that your backend team's building, at least you have the capability to call into a server environment to do server things. Right. Yeah. Um, but without all
[01:04:40]  of the overhead now of having to create an API route or, or create, you know, a special route with a loader or something like that. You just do it
[01:04:48]  right inside of your code. Um, which is not very different from what the react team is envisioning with react server components. Yeah. Yeah. Yeah. I mean
[01:04:57]  these, and yeah, these are all see everyone's working towards the same common goal. Like you see, like, I didn't know that the react team was, was
[01:05:05]  going to release server functions last week or like do that. Uh, but like, it's not surprising to me that they would. Right. Like, and, and
[01:05:14] , you know, remixes been talking about how they can make their loaders more fine grained and like quick added server functions last week. Like, I don't like
[01:05:23]  some people, people kind of been getting really defensive in this area to some degree. They're like, I invented nested routing or whatever, like server functions or whatever.
[01:05:31]  And it's like, no, everyone is kind of coming at this independently, you know, like next getting nested routing was obvious to people paying attention. Like it
[01:05:41]  would happen like three years ago. Like, like, like this, this was just an inevitability. It wasn't because people asked for it. People asked for nested
[01:05:47]  routing from next, like, you know, months after it came out, you know? So it's very rare that, that ideas these days are new or original. I
[01:05:56]  mean, you might have a unique take or a unique version of an idea. Um, but once we all realize that, uh, you know, I, I will be
[01:06:05]  honest. I'll be the first to admit that I have stayed away from meta frameworks and doing, you know, anything that would honestly resemble remix or next because I didn
[01:06:16] 't want to feel like a copycat. But at the end of the day, I, I want those same types of features. I want to be able to,
[01:06:23]  to have a center stack app and meta framework ability. Um, and at the end of the day, it's, it's not about who came up with what idea or
[01:06:31]  not. Eventually, if an idea is good enough, everyone's going to have it. Yeah. And, and that's the way it should be going back to that
[01:06:39]  quote that you made from Dan, right? It's a good ideas should survive beyond, um, you know, their implementations. That's the whole point and, and
[01:06:47]  nested routing. Um, and hopefully this, uh, this server boundary compile stuff is going to be another one of those ideas. Yeah. So, yeah, I
[01:06:57]  mean, it's, uh, yeah, it's, I dunno, I, I'm excited about this. Uh, I think, I think, I think this wasn
[01:07:08] 't what people might've expected, you know, to a certain degree, like, were you expecting us to say that tan stack, uh, start was not gonna support stuff
[01:07:19]  outside of react. You know, I don't know if anyone expected that, but, um, I, I think that what we're doing here is gonna, is
[01:07:26] , you know, sharing efforts. So making a meta framework or a minimal meta framework is actually palatable. And, and I think, I think when you consider the Ast
[01:07:36] ro angle as well, this gets really exciting because you start, like you get all of Astro's benefits around it too. Like next thing you know, you've
[01:07:44]  got like your app sitting next to your content site when you've got an, you know, an MPA and you've got like the, the potential. Just ask for
[01:07:53]  a demo. You mind if I, I can show a demo. It won't work, but I'll demo the code. I'll demo. Yeah, we can do
[01:07:59]  something quick here. Yeah, sure. Why not? People want to see code. You try sharing your screen. I hope that it, it works right away. You got
[01:08:06]  a Mac probably. It's probably until you restart. Oh no, we're in good. Add to stream. Here you go. Are you ready? Yeah. See
[01:08:14]  my screen? Yeah. All right, cool. Yeah, this is, this is the, the basic example from 10 stack router. And right now it's, it's
[01:08:22]  all client side. So it's not doing any server side fetching at all. We've got some just Axios calls here that are fetching some posts from the JSON
[01:08:31]  placeholder API. Um, in task router, there's this concept that it doesn't handle any of the data. So we're bringing in the tan stack react load
[01:08:40] ers library, which is like a microscopic version of react query. And we're going to put, uh, we're going to put our fetch functions into those loaders.
[01:08:48]  And then when we get down into our routes, like let's look at the posts route that fetches all the posts. It's funny. Cause this is all in
[01:08:56]  one file. And while this makes it really easy right now, while you're working through it, like real people in real apps will probably break this up a little bit more
[01:09:03] . Yeah. And thankfully we have this same example, but in a multi file. So you can go kind of see how it changes. Um, but yeah, so
[01:09:10]  the post route, we're getting our parent route. We have our path and then, uh, we have our loader here. And right now what we're doing is
[01:09:17]  we're grabbing our post loader that we created up above. We are making sure that it loads before we load our route. Um, this is something actually that I just
[01:09:25]  did today. We're actually returning a curried function. We're not curried where we're encapsulating a hook inside of our loader and returning that so that
[01:09:35]  we can use it later inside of our component right here. So, so right now that's beside the point, but right now this just works on client side, right?
[01:09:44]  Now, if we wanted to make this work on server side, you know, it's like, well, okay. Isn't the loader service side? No, all
[01:09:50]  of this is still isomorphic. If we wanted to actually fetch our posts on the server, it actually has nothing to do with the code that's happening right here.
[01:09:58]  We would need to go back to our posts loader and we would need to change something up here. So in this fetch posts function, um, instead of calling this
[01:10:09]  on the client, we're actually just going to call this on the server. And this isn't going to work because I don't have bling installed here. Yeah
[01:10:18] . But by wrapping this function with server, we are now going to be calling out our PC style to our, to our backend executing this function in server environment scope.
[01:10:32]  And then the results are going to get serialized back down to us wherever we're using it. So the rest of our application really has no idea, uh, that,
[01:10:43]  you know, that it's being split out. It doesn't need to, uh, all it knows is that it's a promise and it's going to get fulfilled with
[01:10:50]  some data. And you know, this server function for all intents and purposes, I just want to type this out. Um, let's do, let's
[01:10:59]  declare a function server. And this is going to take a function. He funk. Yeah. And it's going to return the return type of T funk. Just like
[01:11:19]  this. Turn type T funk extends. We'll do, well, I can't really have, eh, it could have args. So we'll give some arg
[01:11:32] s there. And we've got to wrap that up. Yeah. For, for the, yeah, I was going to say for those. Yeah. Keep on going,
[01:11:42]  sorry. There we go. So this is, this is what the types will look like for a server funk. And you'll see it. What we get back is the
[01:11:48]  result from what's going to happen on the server. It's a promise that resolves post type. Um, and let's see. The function fetch posts. This
[01:12:02]  is actually should return a function that gets called returns that space. They're just a proxy. So now all of our types are back to normal and that's exactly how it
[01:12:11] 's going to work. You won't have to do this in your own code. Uh, but the server function, you just wrap it up so we can do it again
[01:12:18]  with our, our fetch post here. You'll just wrap this up in server. Yeah. And for, for those. Everything stays the same. And for those who
[01:12:27]  aren't familiar, this is already how solid start works. Um, this is, this is what we introduced when we introduced a solid start. Um, so, uh,
[01:12:36]  we've already seen this pattern be used to really good effect. Um, with, with solid the last several months and I, I, yeah, like why not everyone
[01:12:45] , you know? Um, yeah, the types just work straight through. Right. And yeah, as I said, we're, we're still going to find the best
[01:12:53]  conventions and stuff to do it, but like it's, it's yeah. Okay. People are the typescript people out in full effect. Yeah. Hey, Hey
[01:13:03] , I didn't have time. This is, this is on the fly people. You gotta, you gotta give me a break. Yeah. Yeah. Yeah. So yeah
[01:13:12] , no, I, but yeah. Yeah. Yeah. Yeah. Sorry. Yes. Yeah. Yeah. I, that, well it's because solid start kept all
[01:13:23]  solid conventions and then it added this layer that's actually framework agnostic. Um, so yes, uh, yeah, a lot, very similar to, to what we
[01:13:32] 're doing with solid start. And that's why like, these are companion projects. I w we're going to get a bit from, um, Tanner's work on those
[01:13:39]  router to get better type safety in the router and, and we're going to share, um, stuff like Astro base core and the bling primitive, so to
[01:13:49]  speak. Yeah. And it's very likely that we'll probably see Astro start to take advantage of, of the bling. Right, right. Exactly. Because Ast
[01:13:57] ro itself is server template language. It doesn't really care about bling, but now suddenly, because it's like adjacent, you're, you'll be sitting there and
[01:14:03]  you'll be like, oh, I've got a preact, uh, island in Astro. And I want to talk to the server. Uh, why don't
[01:14:09]  I just drop one of these in here? You know, like if you like it, you should have put a ring on it. Right. Uh, that, that
[01:14:17]  should be the, that should be the tagline. Yeah. Yeah. No, there we go. If you like it, you should put a ring on it. Yeah
[01:14:27] . This just writes itself. Um, but yeah, so yeah, it's a shameless Beyonce plug. Um, yeah. Yeah. So people excited. We got a
[01:14:41]  couple more minutes. Uh, but did any questions for Tanner? Um, cause Milo is going to be joining us, um, very shortly to talk about reactivity,
[01:14:51]  but I just, I just had to get this out here because it was leaking anyways. And I have, I probably have like another five minutes. So yeah. Yeah
[01:14:58] . I have a question for Tanner here before we let him go. Um, or in general, people seem pretty hyped just reading the comments, uh, in chat.
[01:15:05]  Um, I see one about file routes there. Um, so right now 10 stack router does not have file based routing. We had, we had a version of it
[01:15:15]  for an older API and we might bring it back. Um, I'm actually waiting to see how much of that we can take from what, uh, Ryan has done in
[01:15:23]  solidstart. Um, type safety across file based routing is actually really difficult because it requires, um, you know, with, with compilation, with, with build time stuff
[01:15:39]  going into a bundle after you build it, the types don't matter. Um, you know, but with, with typescript they do. Um, and the,
[01:15:46]  the API for typescript is files. So you actually end up needing something that could generate, um, you know, dot DTS files, or even actually regenerate your
[01:15:57]  code. Um, to, to allow you to import those types into a type safe way. So we will see, I think it's going to come back in some
[01:16:06]  form or another. Um, I want it to, and I know that there's ways to do it. It just takes a, it takes a little bit of work.
[01:16:12]  So, yeah. And yeah, the thing is, as long as you have the thing to generate too, there's a lot of things at our disposal. Like one
[01:16:20]  of the things you were doing with tan stack router file routing was you wanted to make it bundle or agnostic. So like there's, there's some considerations there
[01:16:26] , whether, you know, how much do you need to cater to that versus cater to VIT and like, you know, like basically the ecosystem. Yeah, I
[01:16:35]  know of a way to do it now that wouldn't, wouldn't require, um, totally cloning the application structure. We could just use it with a giant, uh
[01:16:45] , like a DTS file and it would actually, it actually wouldn't be too difficult to, to generate that file. So, um, that's probably where we're
[01:16:54]  going, uh, using something like solid starts file based routing in combination with, uh, with like a V watcher that will generate some DTS files for. Right
[01:17:04] . Yeah. No. And that, that sounds pretty cool. And yeah, there's just, there's, there's just so much where that we can do with these
[01:17:11]  tools once we get them rolling. Um, uh, sorry, was there, I saw someone asking a question about anywhere we can watch progress on bling or 10 sec start
[01:17:19] . Uh, I mean, I'm, I'm tracking my progress with the router and, and start in my discord under the router and start channels. Um, Ryan will
[01:17:29]  have to tell you where they're doing their progress. Yeah. We have a solid start channel, uh, in solid discord, obviously. Uh, and yeah, what
[01:17:39]  I wanted to mention just because we didn't talk about it is like, there's other patterns that come from the server functions that we haven't like that could get into tan
[01:17:45]  stack. They're really cool. Like, uh, solids has like progressive enhanced forms, like the remix experience, whatever. This is, this doesn't have to be
[01:17:56]  tied. Like the, the details have to be tied to solid. Cause like the forms have to be in solid, but the pattern of it using server functions could be generalized
[01:18:01]  in a sense. So I just want to kind of put that there. Like, that's just a library. Like once you have this primitive, you're just like
[01:18:09] , Oh, now I want to make, uh, an action kind of primitive that works that invalidates and works with progressive enhanced forms. with progressive enhanced forms. Well
[01:18:17] , that's just a library. It doesn't need to be built into the framework now because of this. And you can just be like, Oh, and we will,
[01:18:22]  um, just put a server call here done. Like, so like you, yeah. People asking for that kind of stuff. Yeah. Like, there you go.
[01:18:30]  Like we can make ports of like solids, um, uh, like route data and route action, uh, primitives to use in 10 stack start as well. And then
[01:18:41]  there you go. I totally plan on doing that by the way. Um, we're, we're going to have some, we're going to hopefully have some of those
[01:18:47]  abstractions that'll, that'll let you do, you know, progressive enhancement, all you want forms and, and everything. So a couple more questions. A couple
[01:18:55]  more questions before I got a jet in like two minutes. Somebody asked what product I use in my hair. Uh, I just wash it and condition it. That's it
[01:19:03] . Sorry. Um, API routes and 10 stack start. You might've missed this at the beginning, but we talked about that Astro already has API routes built into it
[01:19:13] . So we're not going to need to expose API routing and 10 stack start itself. Um, it'll just be route routing solely for your UI. Yeah. Um,
[01:19:23]  Um, generate dynamic types. Does it make sense to use a quick? Not really for the same reasons that we decided it wasn't worth trying to build 10 stack router
[01:19:32]  for solid. Um, is that it just won't, it wouldn't ever take full advantage of the framework level things that are there. Um, and make sense for everybody
[01:19:40]  else at the same time. Hopefully, uh, I've already, I've already reached out to, um, to. To, who did I reach out to over
[01:19:48]  a quick? Uh, I can't remember. I've talked to Steve. No, I've talked to Steve. Yes. I've talked to Steve and Misco
[01:19:59]  and, um, I were, we're both really excited about, you know, the type safe routing. Similar to what I've offered to Ryan. Um, I plan
[01:20:07]  on doing for quick as well to, to just kind of be able to, you know, help them navigate the full type safety that they, that everybody really needs. Honestly
[01:20:16] . It's, it's, it's, it's not, it's not rip rip the, the solid adapter. If you're talking about this island still exist
[01:20:24]  in Astro, right? Like this is the crazy thing. This is just like another integration level thing with Astro, right? Like you, you, you could literally
[01:20:32]  have like a tan stack, start app. Uh, solid start app and an islands content page in your Astro project all next to each other, just handling different parts
[01:20:41]  of the route. You could literally take like picture this, take your next app. Um, in, in, in most of its entirety, move that over to Astro
[01:20:51] . Maybe, you know, convert it. Maybe something like it's a single page app. So get the benefits of tan stack. Um, you know, uh, start
[01:20:52] . And then maybe you're like, I want to do some pages in solid instead of in react. Then do fire up some, you know, solid start in there
[01:20:58] . You know, like this can all just live next to each other. Right. If you want to. And there's a certain thinking of like, Oh, isn't
[01:21:10]  that expensive? But the thing is like, these are separate apps, separate pages, separate, you know, things like this. Like this isn't about putting react and
[01:21:12]  solid on the necessarily on the same page. Although like the ideas of here with Astro got my mind, like thinking, cause Astro is one of the only compil
[01:21:26] ers are built tools that supports two types of JSX and same project. So in theory, if you really wanted to, you could probably take a react app and we could
[01:21:35]  probably figure out how to put solid islands inside a react app. Yeah. Okay. So fine. Fine. This is, this is a pretty cool migration tool, but
[01:21:43]  I mean, that's not the only like consideration here. I'm just saying like, there's a lot you can do because of the shared Astro platform. Yeah.
[01:21:52]  The last question I'll answer before I got to go. Somebody said, is tan sec start the name for this? And I saw another question about what's the difference.
[01:21:59]  Um, the 10 stack router is going to stay all the router code. 10 sec start is going to be a new package that we make that is going to hold.
[01:22:07]  Is going to hold hopefully, uh, you know, all of the framework or the SSR specific stuff. So if, if we do like, uh, actually, you
[01:22:15]  know, it might not even be called 10 sec start. Maybe that'll just kind of be the brand around all the tools, but we're going to have a head utilities
[01:22:23]  for managing head and meta. There's going to be utilities around forms actions. Um, really anything else that, that pertains mostly to like an SSR environment.
[01:22:33]  So, um, still up in the air, but I mean, I honestly would really like to keep it named 10 sec start. It pays homage to where we're getting
[01:22:43]  a lot of the ideas. And, and it just shows really how aligned we want to be with the, with these projects and their outcomes. So. Yeah. That
[01:22:46] 's awesome. Yeah. Progressive enhancement too. Um, we want to get there just as much as everybody else. So yeah. I mean, and yeah, I mean
[01:22:57]  this stuff, it won't be difficult with the tools we're putting together. Anyways. Yeah. Sorry. Uh, we kept you longer than I expected and Milo
[01:23:03]  is like sitting in the wings here. So we're going to let Tanner go. Thank you so much for joining us. This is so exciting time. Um, anything you
[01:23:10]  want to shout out before you head off? Not that I haven't already. All right. Thank you so much, Tanner. Talk again soon. Thanks. See ya.
[01:23:18]  See ya. All right. That was, that was awesome. Wasn't it? Um, yeah. Yeah. Yeah. We were still figuring out where to sort all
[01:23:29]  the packages and stuff. Right. And move things because of like, obviously with like, so a lot of the stuff, like the bling stuff is already in solid start
[01:23:39]  and we need to probably take it out of the solid specific repo to make it more universal. I think some people will see solid on and be like, Oh no, I
[01:23:45]  don't want to use it. That's solid. There's always like a little riffing between the frameworks. So an agnostic place will make a lot of,
[01:23:52]  a lot of sense. Um, so, um, what are you, what are you sharing Dev? I'm going to open it off screen first, just in case
[01:24:02] , because, you know, I never, I never, I don't want to be caught unaware here. Um, okay. I like this. Let me pull this
[01:24:18]  across. All right. All right. We're sorry. Let me just switch my view here for a second. Oh no, I guess I gotta add my screen back
[01:24:39]  to the stream. I like that. That's awesome. Uh, okay. Okay. Okay. Okay. Um, well, yeah, I mean, that was huge
[01:24:59]  news. So we probably need a second here to switch gears, but, um, Um, now you can see kind of what we've been working on because truth of
[01:25:12]  matters, we tried a lot of stuff. We tried to bring reactive core into the router and like try and like optimize, but like there is, there is a world of
[01:25:19]  difference. We're, we're going to find patterns that make these things work even tighter and nicer together over time. But I think the really obvious thing is that there
[01:25:26]  is an probably a need for solutions like this in the space. And I'm very excited. I think working together like this is probably the only way that a bunch of independent
[01:25:38]  pieces can fit together. And that's actually accomplished what we need. This is an insurmountable amount of work. Um, there are companies funding meta frameworks, you
[01:25:49]  know, like directly as their, as their thing. That like, how could a bunch of like individuals across ever kind of compete with that? Like, let's face
[01:26:00]  it. You can't. So I think it's the best thing we can do is work together and see, you know, what we can build. Yeah. I mean
[01:26:12] , there, there's an acknowledgement here that I want to point out is that sometimes things aren't easy to share. And we shouldn't like try to force, uh
[01:26:21] , you know, the square peg in this round hole, so to speak. Like, I think this is a fairly, um, I, yeah. I mean, I
[01:26:33] , I, I think that this is like just acknowledging that there are differences and figuring out reasonable places to break it apart. It makes sense. Right. We, we
[01:26:42] , we do reinvent the wheel a lot here and that's okay because when we reinvent the wheel, we build it better each time. You know, it does require some change
[01:26:49] . It doesn't, you know, um, pushing, you know, uh, but yes, once I'll start version one comment, this, this change is going
[01:26:56]  to destabilize things a little bit. Again, this is why I've been hesitant a bit on solid start timing. Cause I kind of, kind of, this has
[01:27:03]  been coming together for several weeks now, especially when I was sitting there fixing all the bugs, mostly, you know, you know, I can't under impress the importance of
[01:27:13]  contributors coming in and helping make this thing reality. So I'm not gonna say by myself, but to a certain degree, like, um, it felt like a lot
[01:27:22] , uh, you know, as a maintainer working on multiple projects at the same time and being like, this one needs more love than I can give at this point.
[01:27:30]  So, um, this, this is all going to be part. It's good. This is just beneficial for everyone. Right. Cause you, you, you see,
[01:27:37]  it's, it's, we get more people on the Astro project. Astro will benefit from that. We get this kind of framework core stuff, uh,
[01:27:44]  lifted off of us closer, um, work with Tanner means that the ecosystem and the libraries will flow just that much smoother, um, between us, you know, which is
[01:27:55]  really beneficial for solid. Right. Um, we're already kind of seeing it. Um, in fact that like, in a lot of ways, like solid query works
[01:28:02]  better with, with solid than it does in with other frameworks, just simply because of the wave, like we've been able to integrate. And I, I, I
[01:28:10] , I, all these pieces come together. I think it's really beneficial to all the parties. All right. Anyway, let's, let's switch gears and get to
[01:28:23]  the next thing. Cause I've been, I've been keeping Milo waiting for like 15 minutes now. Um, and for those who don't know, um, main
[01:28:32]  part that I want to talk about for the stream here is I want to talk about reactivity because signals are super hot right now. If I'm going to say,
[01:28:41]  you know, and we, we should talk more about, about them and a lot of the most recent work. So I'm without any more further ado, I haven't
[01:28:48]  tested his mic. I, we haven't, we didn't have a chance to do any of the kind of pre stuff. Um, I'm going to actually welcome Mil
[01:28:56] o onto the stream right and about now. How are you doing Milo? Hello. Can everyone hear me? Yes. Yes. It is working. Yeah. So many
[01:29:07]  of you probably don't know Milo. He's kept a rather low profile and it makes sense because he is a first year university student. Um, but he's
[01:29:16]  been around the solid ecosystem for a number of years now. Um, Milo, why don't you introduce yourself and then talk maybe a little bit of how you first got
[01:29:26]  involved with our project. Yeah. Yeah. Uh, so thank you for the introduction. Um, I found solid a few years ago when like from one of Ryan's
[01:29:39]  articles, uh, and was super excited about like the performance, the simplicity, uh, and the design of solid. And sort of ever since then I've been working
[01:29:55]  to find cleaner ways to streamline the core and make solid the best it can be. Uh, what, what are some of the, just cause people don't know, what
[01:30:07]  are some of the projects that you've been deeply involved with around the solid ecosystem that the people should credit your work towards? Uh, so I guess one of the first
[01:30:15]  things I wrote with solid was a, uh, an early renderer, uh, that has since mostly been deprecated. But, uh, I guess my main
[01:30:26]  focuses right now are on the solid playground and the new solid, uh, core, uh, nicknamed X reactivity that top secret, uh, core that was seen on
[01:30:40]  one of the previous streams. Um, yeah, yeah, no, he, he kind of like just waved it under, but you know how solid has a JSX
[01:30:48]  compiler and has a hyper script and a HTML. Dan Jutan actually did a great video this week explaining how you can use solid without a compiler. Um, Milo
[01:30:56] 's like first thing he did was like, Oh, Hey, I, I think we could make like a version of hyper script. That is a performance as the JSX
[01:31:04]  compilation. Um, and he, he, so he just like came into the project and was like, here, look, I wrote a whole other renderer. I mean
[01:31:12] , right away, I was like, wow. I was like, wow. Like, like someone just like picked that up that quickly. And I said, this was
[01:31:21]  like 2019, I want to say, or 2020. Yeah. Yeah. So this was, this was a very long time ago. Since then he's, he's been
[01:31:29]  on the projects. Uh, playground is our internal name for the, the REPL that you, that everyone uses. Um, it was started by, um, Alexander
[01:31:38] . Um, but Milo's made majorly taken it on, including doing the most recent rewrite. Um, right. So that's like the, the, yeah,
[01:31:47]  the, the REPL that you see on our, on our website. Um, you see, uh, on the playground itself, the, the, the whole code editor
[01:31:55] , which is quite an interesting piece of engineering. Cause you gotta be building stuff in the, in the browser to make it work. You also were working, I think
[01:32:02]  a bit with the stack blitz people on the container stuff for a bit. We haven't released our version of that, but, um, all, all the tooling around
[01:32:09]  there really amazing work. And now the future of the solid core is what we're. Yeah. Yeah. Yeah. Yeah. I'm, I'm, I'm
[01:32:21] , I'm building it up here. You know, you, you, you, you want to just kind of get straight, jump straight to the chase here. Cause.
[01:32:25]  Okay. So, cause clearly I'm, I'm much more on the storyteller and building a narrative thing. Um, I'm, I'm, I'm, I
[01:32:33] 'm going to do a bit more introing on this in that, uh, let's flash back to about last summer. Um, Milo's like looking at,
[01:32:40]  at, at our reactivity and he's like, you know what, Ryan, I think we can do this thing a lot better. And it was around the time of
[01:32:47]  like the 1.5 release. Cause I was finally explaining to everyone how batching worked and how like propagation worked. And there's a lot of confusion. People didn't
[01:32:56]  understand solid's algorithm, which is kind of weird. Cause it was a kind of, it's kind of like a bastardized hybrid between a bunch of stuff. Um,
[01:33:03]  I am, I'm not always the most algorithmic programmer. Uh, so what had happened was I started from one base decide. I didn't like what it did
[01:33:13]  and just changed it to do what I wanted it to without the kind of like academic rigor that people care about. But I did have a rigor. I benchmarked the
[01:33:19]  crap out of it. So I made sure that it was fast, not that like, like, and that essentially made a weird place because I solve problems as I hit them
[01:33:32] , you know, without losing performance. But it meant that I had inadvertently kind of come up with a different change pattern than I guess a lot of other frameworks had
[01:33:44]  done because of this weird hybridization between SJS and like kind of like mob X, but not using their algorithm directly. Um, so Milo came in, you
[01:33:54]  know, quite rightly and was like, I think we could clean this up a lot. Um, I don't, do you have any comment on that Milo, but
[01:34:03]  it's fine. We can push this forward a little bit. Um, and sure enough, a couple months later, like, uh, I guess you worked on it over
[01:34:11]  the summer. Uh, I'm talking about reactively here specifically. Yeah. I guess I did a, uh, ice. There we go. Can you still hear
[01:34:26]  me? Yeah, I can hear you. Cool. Um, so over the, um, over the summer, I started looking at different implementations of reactive frameworks.
[01:34:36]  So how mob X was implementing it versus how SGS was implementing, uh, reactivity. Uh, and I even looked at how, uh, different frameworks and rust were
[01:34:45]  implementing this. So there's a framework in rust called salsa, which is how a rest incremental compiler works. Uh, and all of these frameworks are, have the same idea
[01:34:57]  of, we have this data and we want to propagate it through a graph efficiently and do as little work as possible. To make it, to run your computations along
[01:35:09]  the graph. Uh, and they all had variations of similar algorithms. So solid had a algorithm using dirty marking and, uh, and a queue system. Mob X had
[01:35:26]  a different algorithm of marking, uh, and same with salsa. Uh, and they, among all of these algorithms were these differences between, uh, laziness and eag
[01:35:43] erness, how, and how changes propagated. Uh, so what I was trying to think about was how, how can we make this as simple as possible. Uh
[01:35:53] , so I started with like a couple of basic ideas of, we want it to, we want a reactive core that is consistent, that is performant and that is simple
[01:36:06]  to use. Uh, and so those were sort of where I was coming at with reactively. Yeah. For the, for those, um, I'm actually gonna
[01:36:15]  post, uh, his article in chat and I, I'm gonna actually pull it up while we're talking here. Cause I, what I love about this article.
[01:36:24]  Um, this is a bit later. Um, this is after when I was ready to share it was that, um, he, he act, he doesn't just talk
[01:36:32]  about his library reactively. Um, he actually explains how the algorithms work in multiple popular libraries. Um, but sorry, uh, I'm actually gonna, you, you
[01:36:47]  can continue Milo. I just wanted to kind of get this out there so people have a little bit more context of what we're talking about. Cause actually, let
[01:36:54]  me show on the screen quickly, um, a code example from reactively. Um, right. Cause if I understand this, essentially you just called everything reactive, right?
[01:37:07]  So. Yeah. The experiments and trying to make, uh, reactivity simpler is, can we make everything work? More like a spreadsheet where everything is just a cell
[01:37:20] , a reactive cell. Um, and so we, uh, I tried making a reactive node. So you have, uh, say user and the user is just a reactive
[01:37:32]  node with the variable 10. Then we can have reactive functions that take, uh, that use other reactive variables. Uh, and you bring all those reactive functions. Um
[01:37:44] , sorry, not what I was meaning to open up. Okay. We'll get back there later. Okay. Continue. Um, and so the, one of the ideas
[01:37:56]  that I started with was if everything is lazy, we can actually simply simplify effects. So effects in our, uh, our computations that are automatically rerun when the
[01:38:14]  data changes. Does, does reactively even have effects? It does. Okay. They're, they're a little hidden. Okay. Okay. But it does have
[01:38:23]  effects. Okay. The, the reason effects are so, uh, are so separated from reactively is that at its core, reactive system is mostly about not evaluating things.
[01:38:40]  Uh, you could start with the idea of just trying to rerun everything and then not evaluate a few things. And so what reactively does is it says effects are
[01:38:52]  just saying, we can rerun the, uh, the things that we depend on. And if they don't change, then we just shouldn't run them. So the
[01:39:02]  idea of an effect is just something that we run whenever anything changes. Right. Right. And we'll take care of almost all of the rest. Right. And I
[01:39:10] , I think we, we gotta just like stop a moment here, uh, in the sense of like, we've, we've used a lot of terms, um,
[01:39:18]  that are great. If you've watched my previous streams where I've dug into reactivity, but you're probably like, okay, well, what, what are we talking
[01:39:24]  about here exactly? And I actually love that in the beginning of the article, you actually make the most simple example here. And it really illustrates the problem quite well of talking
[01:39:32]  about the difference between a lazy and eager, um, propagation, right? Because. Yeah. This ABCD, or as we classly call the diamond problem is,
[01:39:42]  is, is kind of something that signals solve. Like when you have people been asking me all week about pub, sub versus signals about, um, Oh, what if I
[01:39:52]  use Joe tie or whatever, like these other kinds of systems that they, if, if synchronization is important, they will find a way of debouncing like multiple
[01:40:02]  channels coming in, whether it's react scheduler or whatever, you know, with those state libraries, but signals handle that innately themselves in that, in this little diagram
[01:40:13]  for you, for people to understand a is a signal. And then, so you can pretend this is like, like, I don't know, a count. And
[01:40:22]  then B is, uh, at some derived state. Like, uh, let's pretend double count. Like, so this is always double what A is. And C is
[01:40:32]  some different derived state. Maybe it's triple count. It's triple count. It doesn't really matter what it is, but these depend on what A is. So
[01:40:39]  count, double count, triple count. And then D might be an effect that console logs the sum of B and C. And the thing is, there's, there's
[01:40:51]  different thinking into how we make sure that we execute all of these parts, um, once, because you might be looking like, okay, like, how does a system
[01:41:03]  know that when you change A, um, that we should be executing, um, B and C before D essentially? Like, cause like, if you're being really naive
[01:41:16] , you might be, and this is kind of like a push based kind of thing that we talk about is you, you go, okay, A has changed. Who
[01:41:23]  depends on A? It's a list of B and C. So you might be, you might go, okay, well then I will update B and then I'll update
[01:41:32]  C. But there's a problem right here. When you get to, when you go to update B, you go, oh, well, but who listens to B?
[01:41:38]  D does. So if you go and run D and at this point C hasn't been updated yet. So there's this like awkwardness in general. And there are some
[01:41:48]  systems that don't solve for this because they'll go A, B, D, C, D. They'll execute D twice because essentially they, they don't get
[01:41:59]  to it until they evaluate C. Does, am I making sense to people in the chat so far? Are you all following? I'm going to need a head nod or
[01:42:07]  like a, some kind of indicator in chat. Okay. Thank you. Do you have anything that this is, am I, am I doing a good job Milo of
[01:42:15]  explaining the basic problem? Yeah. Yeah. I mean, I guess there, uh, more basic than that is just like reactivity library. Reactivity libraries, let
[01:42:27]  you write these computations that depend on each other. Um, and that's, that's sort of the most fundamental primitive is we B, we can write a function
[01:42:41]  B that depends on A and should rerun when A changes, um, or not rerun when A doesn't change. Yeah. Yeah. Yeah. Yes. So
[01:42:54] . Yeah. And I, I didn't actually produce the code I described, but if you were to actually go into solid or something and, uh, why is this hanging
[01:43:03]  off the screen? Sorry, that's okay. Okay. Okay. Okay. Okay. And if I was to kind of just go in here and just be like,
[01:43:15]  okay, import, create signal, create memo, create effect. These are the three primitives in for solid for this, but you, you're going to find these kinds
[01:43:31]  of primitives pretty much in any library. What I just described here. I love when the playground does that. Okay. Is that if we had const count equals create
[01:43:42]  signal, actually, I mean, I can also just use the, the, the, the numbers here. Um, and then we'd have what const B equals create memo
[01:43:57] . Um, I said it was double count, right? A times two, and then const C equals create memo, uh, a times three, and then create effect
[01:44:18]  console log. Um, B plus C we've kind of just described our problem. This is zero. And then at some point later, you can see this in the
[01:44:33]  log. It's zero. So let's set a, which I haven't exposed yet to two. Okay. So let's set a, and it should only log
[01:44:42]  twice once initially when it's created. And when we update the two, even though that this forks in, in logic, like it runs, what's going to
[01:44:54]  happen is D will only evaluate after, um, it has both the correct values for B and C. Um, in solid's case, it's actually a little bit
[01:45:06]  more fun, um, in that sometimes C hasn't been actually calculated at the time we run it. And when we go to ask for the value of C is the point
[01:45:16]  at which it actually does it. And that's what we, what, what I mean by push and pull. We're going to have to visualize that I think in
[01:45:26]  a minute, but, uh, but maybe we should start with lazy versus eager. Cause I think that's probably an easier topic. They're very connected though. Um
[01:45:36] , they are very connected because, um, yeah. So how did you describe it here? I actually really liked what you did though. In the article, a lazy library
[01:45:45]  will recognize that the user is asking to update D and will first ask B then C to update, then update D after B and C updates have been computed. Right. So
[01:45:53]  in a perfectly lazy library, what you would do is actually pull, start from D essentially. So when a changes know that through this web of things, there is a
[01:46:07]  D and when you get to D go, Oh, I need D depends on B and C. So I'm going to run B then run C and then get my D
[01:46:15] . Whereas an eager library. We'll see that a has changed. Then tell B to update then, and then C to update. And then basically both of these each will
[01:46:29]  actually tell D to update. Um, and that's why there's complexity here because if you're pushing stuff down, you don't want it to execute A, B
[01:46:45] , D, C, D. Okay. Um, so I don't know. How should we take this next, uh, Milo? Should we, should we
[01:46:55]  like draw some stuff? Do you think? Does it make sense? Or, uh, there's a little more we can do with this, uh, as well. Um
[01:47:04] , I've seen a couple of questions in the chat about, uh, why you can't just do a breadth first search or why, um, why laziness isn't
[01:47:15]  just memoization. Um, so I guess like those are the, the first ideas that, uh, that come up when you see this diamond and you say, how
[01:47:27]  do you prevent D from being updated too soon? Uh, or how do you efficiently cache, uh, some node at the top? Like if A was a, a
[01:47:37]  function, like if you just made D, B, C, and A all functions, you would call it and it would automatically be lazy. And if you just memo
[01:47:46] ized all the functions, it would seem like everything should work. Uh, and similarly, if you just evaluate breadth first, it seems like that should avoid over-eval
[01:47:55] uating D. Uh, so these, at, at first glance, these do seem like easy problems to solve. Uh. Yeah. Yeah. Yeah. Yeah. I
[01:48:06]  will say something here. Breadth first was a solution and something that I actually used in solid for quite some time. Breadth first has one awkward detail though. And
[01:48:16]  that is that when you initially create the code, it runs depth first, not breadth first. Like, um, like in, in this simple example, you, you're
[01:48:27]  like, yeah, no, what are you talking about? It's like, this is, this is breadth first. You have to declare B and Z, but like when
[01:48:35]  you, when you actually talk about, uh, like wider graphs, um, and like, like when you start like the building, building it out rather than just the
[01:48:46]  simple case, multiple sets of dependencies, like things that depend on A and B. Like sometimes it's not a single signal that changes. It's multiple signals that change at
[01:48:56]  the same time. And you have to have the same guarantees. Um, when you start talking about that, so now you're changing in A and B and you, and
[01:49:03]  they converge, you know, somewhere down you, you, what you'll find is like, it's kind of like your component tree. you'll actually like, you
[01:49:11] 'll, I'm trying to think of the show this with JSX, but you, you go down your component tree on a specific side before you do the, like the
[01:49:19]  next side. Like the breadth first was actually causing a lot of issues because stuff on update would run differently than stuff on create. Yeah. Yeah. And, uh,
[01:49:30]  this is also a difference, uh, with when you start nesting things, uh, this breadth first, this is a good explanation of why breadth first doesn't work here
[01:49:41] . Uh, if you have a, uh, do you want to pull up like skeleton? Yeah, let's do it. Yeah, let's do it. Should
[01:49:47]  we, should we. Oh, you got, you got like the shared Excalindra. Yeah. Yeah. All right. Let me, let me see there.
[01:49:55]  Milo. Where are you? Okay. The one you shared earlier. Yeah, that should work. All right. Here we are. This is cool. Yeah.
[01:50:06]  First time trying live Excalindra. Uh, so what can happen is, uh, we can start creating a graph, uh, like this, uh, and then
[01:50:22]  we'll have to create edges. See if you can do this. Does this work? And more edges. So as we start to fill out these edges, if we
[01:50:37]  go and update. I love, I love playing with Excalindra on having it. Just magically works. You want this too, right? Yep. All right.
[01:50:49]  So now as we update a first, uh, and then we have, it will go and update B, which is. It's okay. I, I, I,
[01:51:01]  I, I got, I got the letters. It's fine. C D E. Okay. There we go. We, we go and we update a. So
[01:51:12]  it gets updated. Then we go and we update B and we update C. So this is our breadth first approach. And now our breadth first approach might update E first
[01:51:28] . Cause it's on the same next level. Uh, and then update D and suddenly we're running into a problem where we have to update E again. Uh,
[01:51:38]  yeah. Yeah. Yeah. Yes. Yeah. This would have been clear if we drew the second note on the other side first. Cause we're kind of going left to
[01:51:46]  right. But yes, the, the order of how we drew it is, is not terribly important here. What the, the, the, there's just that. Yeah
[01:51:53] , exactly. If we, if we went, if we, if we moved it that way, it, it might be more obvious. This, this joint Excal
[01:52:01] ibur thing is wild. Let's try it. Okay. White. But yeah, like if, yeah. So yeah. Breath first is not sufficient. Um, I
[01:52:20] , we, we have talked a bit about this. Uh, I, I think in the past on one of my streams about the, the propagation, um, on
[01:52:32] , on this, I don't know how far we're going to get on, like, I guess we need to do need to start here on the basic idea because I
[01:52:40]  do want to talk a little bit about how we go. Like what does reactively approach do differently? Cause the reason I wanted to talk about this in general and bring you
[01:52:50]  on the stream Milo is that there's been a trend in my mind. A lot of reactivity was very push based originally. Um, a lot of the RX
[01:53:00]  stuff is all push based. Even our hybrid push pull was still mostly push. And what I've seen over time is a trend towards more pull based. It's still push
[01:53:11]  pull. We still notify in a push manner, but we execute on a pulled manner at our discretion. It's scheduled. And I think, I think that's the
[01:53:19]  key thing here. If people want to understand the future of reactivity, cause they might look at like solid today and not like quite understand the implications of that or how it
[01:53:29]  works. So, yeah, well, and so like push pull is really what you have to do to get the efficiency that, uh, we want. Uh, and
[01:53:45]  we're, I'll sort of unpack that as we go along. Um, so, uh, one of the, uh, one of the first things that comes up
[01:53:59] , one of the first differences between solid, uh, and reactively is what happens when you have, uh, not just one output node at the bottom, like E here
[01:54:13] . Uh, but also a secondary node, uh, say this node F, uh, and, uh, this node F maybe we want to reevaluate. Maybe
[01:54:30]  we don't. Sometimes we just want it to be fully lazy. Uh, and by default right now, solid is always eager. So if we update a, B
[01:54:40] , C, D, E, and F will all update as well. And for a library that renders directly to the screen, that's almost always what you want.
[01:54:51]  That prevents inconsistencies where the data has changed and you see something that's outdated because the screen hasn't updated. But there's also times where that gives you too
[01:55:06]  strong of a guarantee. And what you really want, uh, for example, let's consider if you have, uh, a virtualized list where you have hundreds of these
[01:55:17]  nodes here, like hundreds of nodes E that are connected. And only a couple of them are on screen at once. So if the screen is currently just displaying, say
[01:55:32]  these two, we definitely don't need to update E or F. Um, but by default, an eager reactive system, uh, will go through. It'll,
[01:55:46]  uh, look at a, it'll update B, C, D, and all of the E's and the F, regardless of whether or not they're actually used.
[01:55:56]  Right. Right. And so one of the things that we're looking at is how do we only update the things that are used that we, we really want to update
[01:56:06] . Um, and this starts with transitioning at the core of the reactive system to be lazier. Um, so the, the way solid, uh, works right now
[01:56:20] , it'll always, uh, for no matter what kind of nodes these are, A, B, C. So if these are memos, if these are computed effects
[01:56:29] , they will always get updated. Uh, and the, the reframing that reactively, uh, thinks about is if we instead pretend that everything should be lazy
[01:56:45]  by default. And at the end, we just call the things that we need. Uh, so what we end up with is a system that, uh, where that
[01:57:00]  looks almost like memoized functions. E is just, uh, a function that you can call. And if its inputs haven't changed, then it won't reevaluate
[01:57:14] . Uh, and that's, what's the, that's, what's at the heart of a memo. Uh, and implementing that is a little tricky because of
[01:57:23]  this, uh, the problem of what happens when an intermediate node doesn't change. And we can get that, we can get to that a little later. Uh, right
[01:57:35] . Cause what, one of the main reasons that push is really easy is our eager is really easy is that if you get to a point and you go, Hey, this
[01:57:43]  didn't update. Then like you, you basically cut off the rest of, of the stuff. These never get flagged. They like, they never need to know
[01:57:52]  to, to, to update. Um, and to be fair, solid still does a little bit of work there. And I think most reactive libraries do. Um, but
[01:58:01]  in, in general, you can visually see that, Hey, a changed, go, C doesn't change. Don't need to tell E and it's, it
[01:58:11] 's very, it's a bit different if you actually have to always tell E and then decide if E runs or not. Like, sorry. I, I hope I
[01:58:24] , I explained that in a very, I hope that's a reasonable explanation. Yeah. So like with a push library, we're doing, we're controlling the notification of
[01:58:39]  these downstream arrows. Uh, that's like sort of why these arrows are pointing down is because a changes and it decides, Oh, let's go run this arrow here
[01:58:49] , or let's go run this arrow here. And a, when a goes to rerun, it knows whether or not it's changed and can just decide, Oh
[01:58:57] , let's not run these arrows here. Whereas with a pull library, uh, you're asking E to rerun or potentially rerun. So whether or not like
[01:59:09]  to, it might seem like you just need to run E to even know that it depends on C. Uh, and that, that would be a problem because then you'd
[01:59:20]  be running E unnecessarily every single time. And you wouldn't really be able to memorize anything. Right. Cause yeah, I mean, this is the natural question here.
[01:59:30]  How do you even know which E's like that you have to even run E later in the first place? Like one of the benefits of reactivity is that it's
[01:59:39]  automatic. Um, that like you change a value, everything that updates knows to update. So if we're decoupling that so that you have to actually, if it
[01:59:50] 's like purely lazy, like in a sense, react is purely lazy. Right. Cause react goes, Hey, set state, rerun some components, figure it, figure
[01:59:57]  it out yourself. How is this different than that? So the, uh, the difference is in solving that, uh, like don't rerun if, if C
[02:00:18]  changes. So solving that is sort of how we, uh, allow ourselves to be lazy. Uh, and to do that, we actually stop being lazy. We have
[02:00:29]  two phases. Uh, and so the most efficient reactive renders all have to be a hybrid between push and pull. Uh, which is, uh, interesting. Like
[02:00:43]  you, you would think that it's, we're just calling functions. We shouldn't need to do any pushing from the top. Uh, or if we are doing
[02:00:51]  pushing from the top, like we shouldn't need to do any pulling from the bottom. Uh, but it, it turns out that we need both to, to support this
[02:01:04]  idea of these, uh, we only want to rerun these two nodes here and we, uh, we don't want to rerun them if C and D haven
[02:01:18] 't changed. So yeah, the way, uh, the way we do this is with this hybrid, uh, push pull system. Yeah. At a high level follow
[02:01:31]  the pushes is, is, is, is like a, is like a dirty marker, right? You called it a coloration. Yeah. I find it kind of like
[02:01:41]  when visualizing these graphs, it's nice to color everything. That way we sort of intuitively see what's going on. Um, so we have as a changes. Do
[02:01:53]  we want to use this graph or do you want to make a simpler graph to demonstrate this? Uh, sure. I mean, the calculated graph doesn't really make things
[02:02:01]  that different, does it? Okay. So let's go. Uh, so we start with a, uh, so a changes. So let's say a becomes red.
[02:02:12]  Um, then, uh, maybe the first thing we might think of is let's just mark everything that's dirty. So we, we go through and we ask,
[02:02:25]  uh, so we mark a, b, c, uh, and you know, so on and so forth throughout the entire graph. Uh, and that way, if we
[02:02:35]  have some node that's over here, that's outside of the range, we, uh, uh, like if we have a node G that isn't dependent on a
[02:02:46] , it doesn't actually need to get marked. It's only the downstream nodes that get marked here. Right. Right. And, but this system works, uh,
[02:02:59]  mostly, it doesn't handle the case where. So just, just so that I understand it in this system, what we're talking about is, um, you would
[02:03:16]  basically queue up all the ease and the Fs at the bottom, like the effects. And then they would just, when you hit C like inside the E execute C execute
[02:03:29]  a, like, or sorry, a already was updated. I just, the part of the way this would work is use, you could store the past values. Uh
[02:03:36] , and it's, it's like, uh, basically exactly a memoized system. Uh, and we just use these, the coloring to invalidate the states. So
[02:03:47]  we say, okay, E depends on something that's changed. So we know we're gonna have to re rerun E. Uh, if E also happens to depend on
[02:03:56] , uh, G for example. Yeah. Yeah. We could, uh, we would, E would just rerun. It would ask for the values of, uh
[02:04:07] , G and C. And when it asked for the value of G, G would just give its old value because it knows it hasn't changed. Right. Okay. Cool
[02:04:15] . Cool. And E would rerun and figure out its new value. And of course, once C reruns, it then changes color. Uh, so like we were
[02:04:24]  rerunning E it'll change color. We rerun C it'll ask for a. Uh, and so this means that when we go back up on the other side
[02:04:33] , so we've asked for E, C and A, then E will ask for D and B. Uh, and it won't actually reevaluate A because A has
[02:04:41]  already been updated. Gotcha. Yeah. Uh, and this system is almost exactly what we want. There's just one minor tweak related to what happens when things don't
[02:04:56]  change. Uh, and this might not seem like a big deal. Uh, but it's actually a huge part of how it's a critical part for frameworks like solid
[02:05:09] . And. Yeah. We can't have stuff rerunning when it's not supposed to rerun. Otherwise we do a lot of bad things like extra work, like recreate
[02:05:18]  dom nodes. Right. And, you know, recreating dom nodes only occasionally might seem okay, but it turns out that one of the places that, uh, we
[02:05:32]  do X, we would have ended up having to do extra work is in show components. Um, and yeah, let's see why. So the way a show component
[02:05:44]  in solid works is you have some, uh, say at the top, we have some number, uh, like 123. And now let's say we're asking. Now
[02:05:58] , uh, so maybe we have to label this A is 123. And here, let's say we're asking is a greater than 50. Um, so the extra
[02:06:12]  modes here. Yeah, sure. Get rid of a lot of these. Yeah. Um, yeah, actually, so we can really totally just simplify down here. Uh,
[02:06:23]  so this is, this is what we call. Like the single. I don't remember exactly what I called this in the, um, uh, in the blog post
[02:06:35] , but it's an equality check problem. So we have, uh, we have our nodes like this. So we have just three nodes in a line. Uh,
[02:06:49]  we have a, which is some number. Then we have our node B, which is just a Boolean. So it's asking a question about A and then E
[02:06:58] , which is doing something based on B. You can maybe rename this to C. Uh, yeah, B. Cool. Um, so what happens when we go to run
[02:07:11]  this in our naive incremental solution? We update a, so a is currently 123. So B is true. Uh, and C is going to display whatever it is based
[02:07:27]  on that. We update a to 122 and B stays the same. B is still true. It's still greater than 50 and C reruns because when we update
[02:07:40]  a, it gets marked. Uh, it would get marked as red. He would get marked as red, uh, and C would get marked as red. And so now
[02:07:49]  we rerun despite the fact that C depends on changed. Yeah. B is still true. Yes. Um, and that would be really bad. That would be bad
[02:08:04] . Yes. In particular, that's bad because this is how a show component works. A show component re-renders based on whether or not the, uh, in
[02:08:15]  solid, you have show when equals some signal, uh, or some computation. And so you never want to re-render if the show component stays the same. Uh
[02:08:30] , and what would be happening here is we'd say a updates, B stays the same and C now let's go re-render the DOM. Uh, and that would
[02:08:38]  be terrible. Yeah. Yeah. So just, just queuing all the effects at the end is in a naive way. That's what kind of react react does.
[02:08:48]  That would not work for us. Right. React has the advantage that it can do this. Um, and then instead of going and actually re-rendering the DOM
[02:08:58] , it just has its diff comparison, which should be faster. Um, right. So what we do instead is we, uh, we have this system where we label
[02:09:13]  everything with two colors. Um, so we go through, uh, we have our, a, which has changed. Yeah. We mark it as red and then
[02:09:26]  we mark all of it as children as, uh, green, uh, which is this sort of potential to become red. Yeah. So, A has changed. It
[02:09:38]  definitely needs to re-run. B has some sources that might have changed. So it might need to re-run. C also has some sources that might have changed.
[02:09:49]  So it might need to re-run. So then when we go to ask for C, we say, does C have any sources that have changed? And C,
[02:10:01]  walking up the graph, we see that C has this red source that might have changed. So basically via the push mechanism, we always add, in this example, we're
[02:10:13]  always adding C, the effect. Like C always gets added to the list, essentially. Like there might be a D over here that's unrelated. That doesn't get added
[02:10:20]  to the list. Anything that could change from A gets added to the list. anything that could change gets marked is where I'm going to put it. Okay. Right
[02:10:34] . So we walk, we walk down the graph from A. So, uh, if A has more edges, we just sort of recursively walk through the entire graph.
[02:10:41]  Um, marking the nodes as green. Right. So this lets us know that when we go to run C, we can't just trust the old value. It might
[02:10:56]  have changed. We're going to need to do something clever here in our phase two whole phase. Yes. Uh, yes. Uh, that is the, the other
[02:11:07] , the other part of this is walking through the graph from A, uh, will tell us if any effects might have changed. And for anything lazy, we don't need
[02:11:22]  to start pulling yet, but any effects were we care about because anytime anything changes, we want to rerun the effects. Yeah. Um, someone, someone's mentioning
[02:11:35]  the sounds similar to tan stack queries algorithm for handling cache invalidation. That is because reactivity is all about cache invalidation. Yes. Yes. What's beautiful is we
[02:11:45]  solve this really hard problem for you. And then you just write stuff as like a equals B plus C. Um, and this is why signals are becoming like our,
[02:11:56]  our popular is because a nice API for cache invalidation is a hard thing and a great thing. Yeah. Okay. Okay. So I'm following so far and I
[02:12:08]  hope Chad is following too. We mark something as dirty. We walk down the tree and see all this stuff that could change because of it. And then we, we
[02:12:16] , we, we, we basically, um, you know, mark that as being potentially needing to rerun. Yeah. Yeah. So we get down to the end
[02:12:28]  of the chain. So we, we get there on these effects at the bottom, essentially we're like, okay, these ones could have been need to be run.
[02:12:34]  We're going to queue them. And then phase two is basically at the time of our discretion. Um, from scheduling standpoint, we then go run effects queue essentially. Right
[02:12:46] . And the, the naive approach is just going to go through all the effects. You're talking about the windowing situation. I mean, that's cases where we can
[02:12:57]  control that, but yeah, generally speaking. Okay. Right. So, uh, these two phases in reactively are almost entirely separate. Uh, so we have our
[02:13:10]  push phase that happens when you set something and then reactively, because it's designed to be lazy by default. Phase two poll doesn't happen until you actually make a call
[02:13:23] . Right. Um, in solid, it happens. And, uh, as soon as we've seen that the graph has been fully marked. Right. Yeah. That
[02:13:35] 's right. React. That's why I was asking you if we actually had effects. Cause in a sense, reactively you're, you're, you're, you
[02:13:39] 're like the pure pulse on your list. Like you have a function that's just like, do the work. And in solid, we're going to queue that for you
[02:13:45] . Um, automatically. Right. Um, but one of the nice things we notice is because we're marking everything. Along this tree, we'll see any effects that
[02:13:57]  might need to rerun. Right. And so all reactively is, uh, doing for you on top of that to add effects is just keeping track when we go
[02:14:07]  through and mark these things, uh, of what effects might need to rerun. And so this limits our list of, you know, say, if you have a thousand
[02:14:14]  effects in your app and only 10 of them that depend on a, we, we then just build up this list of the 10 effects that depend on a. Right.
[02:14:23]  And then in phase two, all we're doing is saying for each effect, call this effect. Um, so we, we really just have a for loop that says for
[02:14:33]  the 10 effects that were queued, just run them. Right. Right. And Greg's asking a great question here. Does the order in which you run the items,
[02:14:41]  the pull phase matter. Do you just push things into a queue and then pop them in the reverse order? No, it's not reverse order. I think we actually generally
[02:14:48]  run things in the order that they were. pushed in, right. It's. Yes. Um, the order, it, the order does matter in, uh,
[02:15:01]  in the, there, there were interesting places in which the order doesn't, does not matter. Um, the order of the things that you depend on matters and the order
[02:15:12]  of the things that depend on you does. does it. So, uh, you can actually think of there as being two arrows, one up and one down. Uh
[02:15:23] , and only the upstream. So when you go to push everything in, uh, it should not matter. Uh, so it shouldn't matter what order you push things into
[02:15:37]  the queue. Although it's nice for the user if you push them consistently. Yeah. But yeah, the, the, the, the reason I brought this up an
[02:15:48]  interesting question, cause that's where some of the guarantee, the guarantee questions, reactive systems, make sure that the whole dependency graph, like when you're running those effects,
[02:15:58]  all of the, everything that it could possibly depend on has been evaluated by the time that it actually does its calculations. And that effect will only run once. Um,
[02:16:06]  if, and only when necessary, however, between effects, um, it's trickier. And we do have some guarantees in, in solid around this in that there
[02:16:19] 's hierarchical considerations. We have to consider that we have nested effects. So we, we ensure that like a parent effect that begets other computations underneath it will
[02:16:30]  run before the child does so that we, you don't have like children running in detached. Um, like context, like if, if the parent effect would cause the
[02:16:41]  child to be thrown away, you don't want to rerun the child before the parent. So there is, uh, there is consideration, but only from our perspective,
[02:16:51]  at least, um, as far as, um, hierarchical impact and not so much about sibling. Yeah. And we can get it into this further as we sort
[02:17:00]  of build up the layers of what a reactive system needs to do. Right. Well, so the first phase we push everything, uh, we, sorry, we, the
[02:17:10]  first phase we, we walk our way down the graph. Uh, we call it push because we're eagerly sort of looking our way through, pushing our way through this
[02:17:21]  graph. Um, so then when a function is called it's in one of three states, it's either, um, like, oops, that was not the color
[02:17:36]  that I was hoping for. Uh, okay, there we go. Um, so it's either red, green, or blank. Yeah. Uh, and we do
[02:17:48]  three different things based on what, uh, what color currently is. So in the case where it hasn't been marked at all, that means that it's totally up to
[02:17:59]  date. So we can just return it. It has, it caches its old value. Uh, that cache still accurate. So we're done. We can just
[02:18:09]  return that value. Yeah. In the case where it's red, we know that it's definitely, uh, changed. And so we definitely need to rerun it.
[02:18:23]  Um, yeah. Then in the case where it's green, we have this question of, is there something above it that might not have changed yet? And so to
[02:18:36]  solve that, what we do is we try and sort of push this red down the graph. So the way we do that, as we go through, we start at our
[02:18:47]  node that we're rerunning. Then we check if any of its parents need to rerun, uh, or in, uh, are in the red state. If
[02:18:58]  they are, we rerun the parent in this case, none of the parents are. So, uh, we keep going. We say, are any of the parents of
[02:19:06]  B in the red state? So a is, um, and so now if we encounter something in the red state, we know that we have to rerun it.
[02:19:16]  So we know that C depends on something that's definitely changed. Uh, and so we're going to rerun it. So we rerun a, and then the next
[02:19:25]  thing we do is we go down to B and we say a is definitely changed. So that means that B definitely needs to reevaluate because anytime a parent has definitely changed
[02:19:38] , uh, we must, I see these comments coming up. Um, uh, we, this is the same as felt. Um, Svelte works in a
[02:19:51]  slightly different way as far as I know. Yeah. I mean, the, because Svelte's change is just, is based on, I mean, they pro it
[02:20:02] 's hard to say because Svelte is component level. So Svelte goes, something's changed, invalidate the component. And then we like, we know
[02:20:12]  what has changed. So we've like marked some dirty flags and then we rerun a function and check against those dirty flags to see what additional code we run. So in
[02:20:20]  Svelte's case, you're not really entering in this propagation of things. It's literally like, it's kind of like react almost like essentially the call set state
[02:20:30] , rerun the component, do the work. It's like a memoized, it's like an auto memoized react almost, and then do the work that,
[02:20:38]  um, is related to that change where this has nothing to do with the component system. Sorry for that side. I didn't mean to get you off track. It was
[02:20:47]  just, it was amusing. Yeah. Um, no problem. So we have, uh, we start with a, we've rerun a, a is definitely changed.
[02:20:56]  We just, cause it's a number like the numbers went from one 23 to one 22. So that means B definitely needs to reevaluate because one of its sources
[02:21:04]  is definitely changed. Yeah. So now B goes and it reevaluates, uh, and B when it reevaluates went from true to true. So it checks
[02:21:16] , it reevaluates, it checks against its old value. Um, so B is reevaluated. It's up to date. Yeah. Yeah. And now
[02:21:24]  B didn't change. Yeah. So what we do is we just don't tell this child that it's now out of date because it's not. Um, it might
[02:21:37]  still need to check other parents, but it's, it's not out of date. Uh, and so now when we go and we're running C, C is
[02:21:47]  in the check. If any parents have, uh, need to update state. And we see that no parents actually need to update. So C just says, well,
[02:22:00]  that must mean that all of my parents were actually truly up to date. And so it, uh, returns its original value without reevaluating. Just writing down these bullet
[02:22:21]  points here. Cause this is, this is basically what happens. If possibly we check parents. If not go next. Okay. Okay. The nice thing about this system
[02:22:37]  is because we're doing this sort of hybrid push and pull. It gives you a lot of flexibility as to when you want to pull. So if you want to pull,
[02:22:46]  uh, C, if you want to set a, and then immediately pull C, if you want to set a, uh, and then run all effects, uh,
[02:22:56]  or only run some of the effects. Or even say automatically scheduling effects in an animation frame. Right? Cause this was the question came in. So nodes remember that they're
[02:23:09]  dirty after the fact, just seeing no effect was listening. And I guess it's push, pull, push, push. Since after the push value of pushes, actually
[02:23:17]  you're clean. Um, is that true? Uh, it is. So it'll that's, that's right. As you're pulling, uh, you will
[02:23:28] , uh, you'll be pull, pull, pull, push, push, push. So you're going to sort of pull your way up the stack. Uh, as
[02:23:36]  you, so your C is going to pull from B, ask if B needs to check. B is going to pull from A and A will push to B. B will
[02:23:44]  push to C. Um, right. So it'll force this sort of red down the grass. I think the key part understanding is right. If something's detached and
[02:23:53]  we mark it as dirty, that just means that the current value in the computation, the memo or whatever I call it, um, is out of date. So it doesn
[02:24:02] 't matter if no one reads it for like, uh, you know, for a minute and then suddenly reads it at that point, we know we have to do the work
[02:24:11] . So, uh, yes, memos can stay in a like dirty state for indefinitely until you're, you ask for them. That's, that's the
[02:24:20]  pole nature of this. Um, and that's sort of what, what's nice about separating this out is, uh, it, it makes effects just a layer on top
[02:24:32]  of memos. Uh, right. So someone, someone was asking if these checks could cost more than always push. But the problem, the thing is the, the
[02:24:41]  thing is if you want these guarantees, you're not doing just a simple push anyway. So like, like the truth of the matter is you're doing expensive stuff.
[02:24:50]  like, uh, like something that we don't do and I don't think anyone actually does is sort the list of like propagation based on a topological, like depth search
[02:25:01] , uh, sorting algorithm or something. Like, or like, you definitely don't want to be like sorting while you're executing, but that's like a naive approach of
[02:25:09]  solving this when you're doing like all push. Is that how Svelte works? Like, do they, do they just know the sources and then they can sort
[02:25:15]  it and that's how they, they can make their invalidate if checks, uh, are sorted topologically? Yeah. I mean, they can do all this stuff at
[02:25:25]  compile time because they have a, like, they know the dependency graph at a compilation. So. Right. Yeah. That that's, that's, that's a place
[02:25:33]  where you can do something like that, but given a runtime approach, like we're not going to take that on. Um, I don't actually know for sure to
[02:25:41]  do this for memory costs reasons. They have like very, um, they care quite a bit about the performance of pushing down the graph or a exponentially large graph. And so
[02:25:53]  they, they actually do use a, uh, they do sort of the graph. Sorry. Who, who does this? Uh, incremental. Okay. Okay. It's
[02:26:03]  an OCaml library. Okay. Okay. So you go to leaf of subtree just to go to the first answers in these updates. Then it starts from its
[02:26:11]  parents down the tree and repeat the process above the bottom. Yes. And this is doing three walks through the tree. Yes. Which seems shockingly expensive. Um, but
[02:26:22]  rendering to the Dom is just so much more expensive. Uh, yeah. Yeah. And the thing is once you've solved the part of the tree, any shared,
[02:26:32]  like future reference to that part doesn't need to rerun again. So like the tree kind of starts all lit up and then it starts graying out. And then like
[02:26:41] , as each little node comes in, like, cause it's, it's part, it's often part of the same kind of graph. The, the, the
[02:26:47] , the amount, as you go further along, the amount of color starts like shrinking drastically. Yep. And you know, maybe your node is only connected to, uh,
[02:27:01]  a wide section, uh, or, uh, narrow, like your node may is only connected to a subsection of the graph. Uh, and that, that sub
[02:27:13]  part of the graph can be very small. Right. So yeah. And this coloration algorithm is essentially what we actively does. Um, it's funny because solid did a
[02:27:23]  weird, like hybrid version of this that we explained on the 1.5 stream, but, uh, essentially this is kind of like the pure version of it. Right.
[02:27:32]  Cause like, um, it, we already have the means to do this. Um, so in a sense for solid, it actually simplifies a whole bunch of stuff
[02:27:41]  because I had to walk up the tree in part anyways. And this just means like, like funny enough, like, don't get me wrong. When Milo first presented
[02:27:50]  this to me, I was like, I was like the same thing. I'm like, is, is that going to be okay? And, and, and the question
[02:27:56] 's like, okay, I guess the shape of the graph might depend it. Like how is it converging or is it diverging? Um, but like, I think
[02:28:05]  a lot of the things that we're going to do is, you know, the trees are mostly like, what's the term? Like diverging, like a fewer
[02:28:11]  set of changes at the top to more like, like fans out rather than, than the other way. Um, but yeah, it's, it's interesting though. Cause
[02:28:26]  in your article, um, yeah, we just talked about this. We talked about the D twice. We talked about the, the, this problem, right? Um
[02:28:35] , this is what we just did. Right. With the, the, um, I don't know if I, if we want to talk too much about how other algorithms
[02:28:44]  have solved this in the past. Um, but yeah. Yeah. I think. I mean, not. Yeah. I mean, this article covers a great, Mob
[02:28:53] X has accounting system where they like, they add up. MobX used to do accounting system. Okay. So that's not how they do it anymore. Uh, yeah
[02:29:01] . Um, yeah, they, they actually have updated to a system. Uh, that's essentially the same tree actively. Okay. Most JavaScript frameworks now use this sort
[02:29:11]  of zero one and two as, uh, three states of whether you need to, whether you're totally up to date, you need to check, uh, like you're
[02:29:24]  in the green state or in the red state. Gotcha. Yeah. Cause I, I, I've drawn this one before on stream too, where you kind of go through
[02:29:31]  and mark and then you, you mark your run, I guess the, um, okay. Cause this was, uh, uh, uh, West straight had like a
[02:29:39]  great article explaining how this algorithm worked, but I see it doesn't actually, um, do that anymore. What about preact signals? That's been another recent one.
[02:29:49]  I'm just curious how is, is how did this one work? I was surprised at this one because I, I, as far as I can tell, preact signals
[02:29:58]  can also create a green and red, um, marking algorithm. Um, and they opted to instead store, uh, lots of versioning. Uh, I think one
[02:30:08]  of the reasons they do this is to get, to shortcut marking as much as possible. Um, I see. I see. And so they, uh, they opt
[02:30:20]  for looking up the entire graph. When you go to check, if something's dirty, you, you, you compare the versions of everything. Um, right. Um
[02:30:31] , and they, they use lots of little shortcuts, like global versioning and local versioning to sort of avoid marking a large graph, uh, but it ends up storing
[02:30:45]  a lot of extra memory and doing a fair number of extra checks in some cases that it doesn't need to. Right. But this is why preact signals does so
[02:30:54]  well in the cell X benchmark. Uh, yes. When they can shortcut marking it, uh, it helps. Interesting. Okay. Yeah. Okay. Yeah. So
[02:31:07]  the versioning thing. Of course that doesn't work for a graph, uh, for a graph where lots of notes are stale. Right. Okay. Or sorry,
[02:31:18]  or clean, but like are, are fully up to date. Um, I see. Yeah. So if we're a bigger graph where only a few things changes, this
[02:31:26]  doesn't help us that much. Yeah. Whereas the cell X benchmark, literally everything's tied to the same signal. It's a big mess of stuff. That's
[02:31:36]  5,000 layers deep, but it's really just all connected to the same thing. Right. And the cell X benchmark, a lot of things update at once. And
[02:31:44]  so, uh, the extra checks always end up returning through. If you're wondering what I'm talking about, uh, in general, the cell X benchmark, you'll
[02:31:54]  see, um, when you go online that a lot of frameworks post this reactive benchmark that has like, uh, uh, like columns and it's like, uh,
[02:32:04]  where, where's the last time I saw it? I saw it on Twitter. I don't know if I want to like look for it. I could probably find it
[02:32:11] . Uh, it, uh, man, it's, uh, someone said benchmark. I'm like, no, not it. Okay. Okay. I'm not
[02:32:23]  going to find it now. Am I? Um, what part of the cell X benchmark are you looking for? I'm just looking for like one screenshot of it so that
[02:32:32]  I can actually show what's going on. Uh, there it is. There it is. Here it is. Bang. Cell X benchmark. People keep on showing this
[02:32:43]  benchmark around. And yes, we can actually preact really good to hear the, the, the actual benchmark for anyone who wants to see it. I actually have it
[02:32:53]  in the code sandbox that I've been using forever. What do you sign? Sorry. All right. Thank you. Cell X. What, what this benchmark is,
[02:33:08]  is essentially a bunch of like, you can choose how many levels deep to make, but I'll just show the code from one library. So someone can get an idea of
[02:33:19]  what this thing does. It's, it's essentially for each level of, uh, vanilla. Cell X, maybe I'm trying to pick a mob X solid.
[02:33:33]  Okay. Makes sense. Each level in a for loop, it creates four memos that all read off the previous level, essentially in different combinations. Like some are like,
[02:33:47]  uh, like a combination of two of them, you know, it's like an addition and a subtraction. Some of them are just passing one straight through, but basically
[02:33:55]  it's as if you had. Uh, um, a bunch of reactive signals all depending on each other, you know, like a crazy cross graph sort of way.
[02:34:08]  Um, with a certain like numbers, levels of depth, right? So like 10 levels of a for loop versus like 5,000 levels of the for loop. Um
[02:34:18] , this is why often you'll hear me come on when I see this and just be like, guys, 10 is like the only even, like even 10 is kind of
[02:34:30]  crazy, but it's fine. Benchmarks always, when you do benchmarks, you always like push the limits a little bit. You don't test the real use
[02:34:35]  case. You, you, you, you test like the, you know, the 10 X one. So in a sense, you know, if you want to be 10
[02:34:43]  X, the real use case, you'd probably use about 20 or 30 here. But this test unfortunately goes to like 20, 25,000. It's like completely
[02:34:54]  meaningless benchmark. Um, I like the, the problem with the cell X benchmark too, is like, like, I like, we don't have some other libraries here
[02:35:08] , like mob X, but like, um, let's get to about 30. A lot of the established reactive libraries, 50. Um, it gets like, they
[02:35:19] , they, they, they start, they're not designed for, for, for this. Okay. I got a hundred. Can I get to a thousand with mob X
[02:35:27] ? Okay. So mob X has, has, has gotten okay recently. That's good. I'm actually, that's, that's actually very good. Historically mob
[02:35:35]  X used to just like freeze, um, this and knockout freeze, freeze this essentially. Like, um, like. Like my, my point is like, this
[02:35:48]  is pushing a range that is beyond anything you're ever going to do in your, like your UI. Yeah. Like a neural network. Like, like, I, I
[02:35:59] , I, maybe like. Except it's a very skinny neural network. Like it's, it's, it's four by, uh. Yeah. We showed the FR
[02:36:09] P of not competing stuff over a hundred. Right. Yeah. Um, the hundreds, like the upper limit of like any kind of, like, like, so anyways
[02:36:20] , this is why. Yeah. Uh, sorry. Wrong one again. Um, this is, this is why I've been kind of critical of, of this benchmark a
[02:36:30]  little bit, because it's like, like we're optimizing for a zone that just is completely irrelevant. Um, this, this was a recent posting where the new,
[02:36:40]  uh, ng signals implementation came out. Um, but yeah. Preact signals and use signal have done a lot of optimization in this zone. Um, anyway, sorry
[02:36:51] , just a, just a tangent because this benchmark keeps on reappearing over and over and over again. Um, and yeah. Yeah. I don't know.
[02:37:04]  It's just tricky. Cause like, I've, I've never come across. Like I haven't built, I guess like if you were building something for reactivity sake
[02:37:12] , like building a really complex reactive graph, um, then maybe there would be some value. I don't know. Like you didn't hit this kind of scenario when you
[02:37:20] 're building your 3d stuff. Right. I think we're using reactively to. It was very shallow. Yeah. I mean, like you, you would end
[02:37:28]  up with this. If you had like thousands of reactive notes, which are hundreds of thousands of reactive notes that all depend on each other, which you might in, uh,
[02:37:39]  complex apps. Uh, but like, I'm trying to picture what type of apps because usually. Like it's like the Gantt chart. Um, so,
[02:37:51]  uh, uh, giant or, or even like a spreadsheet. Um, yeah, yeah, yeah. I mean, cause like lots of rows that all have sort of connections
[02:38:08]  and depend on each other. Right. Yeah. Somehow they have to all depend on each other in sequence thousands of times where most of the time. Yeah. You,
[02:38:18]  you, you really have to have like calculation and calculation and calculation and calculation and calculation kind of scenarios. Um, where they, because even, even like in a typical chart
[02:38:28]  you make where you have like a bunch of data and then you have a row that totals it. And then a row across that like puts that total against the total of
[02:38:36]  the total. We're still talking like three layers, like that times like a thousand. Like it's like pivoted like a thousand more times. That's yeah.
[02:38:47]  I, I haven't hit this. This is something that we saw like, or we heard came up with, um, the there's charts where like planning charts where
[02:38:58]  the date something is due depends on the date that something else is due, which depends on the date that something else is due. Uh, and if you have thousands of
[02:39:06]  tasks that depend on each other, then shifting the date that one of them is due will shift all of them. Uh, yes. Uh, yes. And so that
[02:39:14]  will be a case that's very deep. Uh, yes. Yes. That's, that's a good, that's a good deep thing. When you're like,
[02:39:19]  when you're trying to do like a date shift. Yeah. Yeah. And so if you had, yeah. Okay. That's a good example. I was looking,
[02:39:26]  that's the thing I was looking for. I, that's a good visualization and where the depth, uh, consideration would come in. So yeah, there, that
[02:39:33] 's the, the one test. Um, okay. So the preact kind of optimizes for that using versioning, um, which explained greatly in the article. And
[02:39:41]  then we reactively leave, we went over the color algorithm. That's the commonality here though, as we're seeing is this more lazy, more pull based thingy
[02:39:48] . Um, so I don't know. I mean, we basically, I love how you did the coloring in this article. Cause you actually showed what we just showed,
[02:39:56]  but in a very nice way where you're like, look, when a changes, we know immediately that CMB have to be like checked because when a signal changes,
[02:40:06]  the things that directly depend on it will rerun, but everything else below it is green. So this, this is my chance to review the algorithm with the, with the
[02:40:14]  chat here. And we make sure we all completely understand what's going on. Right. Um, then, then, so we, presumably at this point we've, we
[02:40:25] 've queued everything. Now we, we run our effect. We, so we run F. We just queued F, but yeah. Yeah. So now we
[02:40:33]  do the second phase now and we go, okay, let's walk up. Do, do, do, do, do. We get up to C and we go,
[02:40:40]  C's dirty. We rerun it. And we realized that cause C changed that now we have to mark E as red. And then we go, okay, well
[02:40:48]  let's try and run E. So we run E and we realize that F is definitely red. So good. Now we know we need to run that effect. Unfortunately,
[02:40:57]  we can't run F right away. Instead. We have to check its parents again. And we go do, do, do, do. Actually we do run F right
[02:41:03]  away. Do we run F right away? Okay. Yeah. Okay. So we, uh, we push red down the left side. Yeah. So, uh,
[02:41:14]  you, you, uh, if the left is sort of your first source that you depend on, we're tracking is the first source that you depend on dirty. Um
[02:41:24] , and, uh, if, if it is, then we know that we need to rerun. Right. Um, one of the, one of the reasons we have
[02:41:35]  to check if the first source that you depend on is dirty and can't just check if is the last source that you depend on dirty is if we start to reevaluate
[02:41:45]  the, uh, the last source, you, you may actually end up in rerunning, not depending on your last source. And so then it would be bad to
[02:41:55] . Right. In a lazy case, you're, you want to only rerun, uh, the first verses or if the first source hasn't changed, then the.
[02:42:05]  Yes. Yes. To translate this for people, it's because you can have dynamic dependencies inside. So you can have like, if conditions and branches inside your effects. So
[02:42:14]  if one branch is taken and the other one isn't, you might never, uh, actually subscribe to something the next time around. Like it might have no impact on
[02:42:25] , on what, what happens. So is that if I'm following, right. You, you, this is why the order is important. Cause you need to actually be
[02:42:34]  like, oh, like check that top level. Dependency because the lower level one may never matter. Yep. So this, this connects back to two of like
[02:42:43]  the comments in chat where, uh, like we, we expect that your, the dependencies that you depend on are, uh, sure. Like only change. Uh,
[02:42:56]  if the first one has changed. Right. Like your, your, your, your second dependency, you can't just remove it. If the first one hasn't changed.
[02:43:05]  Gotcha. Gotcha. So you're saying is once we get to F things actually go a different way. So we actually, cause when I saw this diagram, I was
[02:43:14]  like thinking, oh, okay. So then I will go up this side and do the, do the same thing. But you're saying F actually starts. We do
[02:43:20]  go up that side. But first we like, the reason we go up that side is because we've called F. We know F needs to rerun. Um, and
[02:43:30]  now F can ask for the value of D. But we don't run F yet. Right. We do. We actually do. Okay. So it is like solid.
[02:43:38]  So you actually start running it and then you get to D. And then. Then you ask for the value of E and D. Gotcha. And D says it's done
[02:43:46] . D says it's not. Gotcha. Okay. So this is, this is someone asked in chat how I, why I called solid a hybrid. I called it
[02:43:52]  a hybrid because in solid, when you got to this scenario, like we, we actually run F, um, and then we pull, pull, pull them down in this
[02:44:04]  way. Like it's actually when we hit the line that calls D that we actually go up to B. So like. We're also running C and E already. Right
[02:44:14] . So, okay. F runs F literally calls the D signal inside of it and goes, Oh, this one, I don't know. So then we start over
[02:44:23]  again. And then D is like, okay, let me check my parent. Oh, my parents dirty. Run the parent. Oh, I am dirty as well here
[02:44:28] . And then it runs returns that value back to F and F completes with all the necessary data. Okay. Beautiful. Beautiful. And this is your executed execute. So
[02:44:46]  yeah, I jumped ahead a minute ago. Um, so where does. Okay. What a question. How does, where does B and D or do not need, or
[02:44:55]  do not need to run. Um, yeah, I mean each node is when, when you get to that question, even though it's the effects that like start the
[02:45:02]  queuing when you're sitting on a specific node, like you're like when you're running F and then you like read D D can start like, it's the same
[02:45:11]  thing. Now you're calling that lazy thing and it has to ask the same questions. It goes, Oh, I could be stale. I need to check my
[02:45:18]  parents and it, it knows about its parents. So it goes up and goes, Oh, this one's dirty. We should rerun it. So it's, it
[02:45:25] 's the same process again, whether it started from a derived value or from an effect. Is it like a next situation? There's a, there's internally. There's
[02:45:41]  like a, is it a set or like a list of, of dependencies inside here. So like it just can iterate through the list and then basically almost go depth first
[02:45:52]  back up essentially. Uh, yeah. So we're always like, whenever we run anything, we're just sort of running the left side first. Um, so we,
[02:46:05]  we run the, we sort of walk our, we sort of try and push our, the, the red down the left side. if it reaches f then we then
[02:46:15]  we actually do run f um and if it fails then we try and push the red down the next column in a sense um right when we rerun anything uh we're doing
[02:46:28]  the same process of trying to uh push this red down the left side um that's very very cool stuff and a lot it ends up being a lot more optimal um because
[02:46:41]  we did talk about on the stream um but this is this is like a more pure version and just purely based off that current reactivity benchmarks are focused on creation time and update
[02:46:50]  time for static graphs additionally existing benchmarks aren't very configurable and don't test for dynamic dependencies yeah this is kind of my other problem with the cell x1 so you ran
[02:46:58]  a bunch of benchmarks and you made your own benchmark and i thought this was really cool because it you made a very simple benchmark here but um like you basically have a bunch
[02:47:10]  of different graph shapes you have a thousand uh by five so what do these numbers mean just so i understand yeah so uh these are uh these should be like weak by height i
[02:47:23]  believe um yeah okay so you know yeah yeah so deep graph is yeah exactly deep graph only has five at the top but it goes 500 so just like um stell x so
[02:47:36]  selects in this notation would be four by ten thousand or something right right and this is five by 500 beautiful so what you see here actually is is it was interesting to me
[02:47:49]  because i know people can see this too much let me see if uh uh yeah this is better um reactively obviously wins at all the benchmarks i mean that's the point
[02:48:04]  of this article but i i the the other side of it is that the cell x is showing off this case in a you know very hyper way um where you can see something
[02:48:17]  like solid does not do is very well but interestingly when you went wide the implications are like considerably different the other way like a thousand by five right and also these are static
[02:48:31]  um yeah so solid is like very good at handling dynamic cases right it deals a lot with uh your slots optimization really right um right and unfortunately it looks like the preact
[02:48:46]  ones didn't work on the dynamic case for some reason um yeah so preact as when i wrote this article had a um had a performance bug where right they had like hyper
[02:48:58]  exponential blow up in the cost of dynamic wide graphs right they've worked on fixing it and they improved it substantially right still uh i believe does takes still takes too long to
[02:49:16]  complete for one iteration there right right yeah and and yeah this this is sort of um this is just kind of of interest to me because it just shows that like there's different
[02:49:28]  dimensions to to this problem uh this thing that i actually pulled out um was um taken uh we've been working on solid 2.0 reactivity um the the secret reactive
[02:49:42]  project that's kind of come out on stream and a lot since milo wrote his article um on reactively which is you know in our circles was actually pretty big deal
[02:49:54]  um it's actually had an impact on other reactive libraries maverick for example uh which was around before switched its core to basically be uh like a more feature full version of
[02:50:07]  the of reactively and actually that core is the basically the core of um for solid 2.0 uh we're we're working with milo and rahim from uh
[02:50:19]  i hope i said the name right uh from from uh from uh from uh uh uh maverick to work on the new solid core so what you can see here if you
[02:50:29]  were roughly going to pretend that maverick is solid 2.0 and solid js is solid today and um like the new um angular one is that there are different sorts of
[02:50:42]  um um like like the the benchmark here doesn't completely show the full picture of the implications of this kind of stuff right obviously the angular thing is like so brand new i
[02:50:53]  wouldn't be like stressing about the performance thing they're gonna like this like they literally just like been playing around with something for a couple like a couple months like it's not
[02:51:01]  where it's gonna end up but i just this optimizing for this benchmark is kind of like it it helps a little bit on one side i think but uh it it's
[02:51:12]  like it's kind of narrow because where are we where's our where's our deep one do we have it here this graph by the way is opposite this i just confusing because
[02:51:22]  i realized that your graph bigger bars are better and on this graph over milliseconds and one is yeah this one's actually smaller bars are better um so you can you can actually
[02:51:37]  see um the like even different kind of shapes and stuff like uh funny enough like wide very dynamic and wide and dense solid um you know does decently well um it's
[02:51:55]  all it's apparently very bad for simple component which is unfortunate but uh this is this is cut this is kind of the improvement that we're expecting to see um poured into the
[02:52:09]  next version anyways just wanted to kind of throw that out there um because um yeah there's different schools of this kind of coming out right now and i i think um i
[02:52:21] 'm actually very interested to talk to the angular guys to understand where their take is i think they they're a little bit on the i don't know if they did the pre
[02:52:29] act versioning thing i don't think they did um i'm not sure if they did but i i know that they're they've been looking at all the different solutions in
[02:52:38]  the space um so i'm i'm i i'm gonna have them on stream very soon to talk about their signals implementation probably next week so that's gonna be really cool
[02:52:47]  um anyway there's sort of a there's another big optimization that goes into making this faster um for static cases uh which is the sources optimization i don't know if you want
[02:53:05]  to go into that right now um um i i will yeah i don't which which sources optimization you're talking about uh well i guess the diffing like not not working
[02:53:17]  oh right gotcha yeah i mean we can we can explain it at a really high level um because one of the things that most reactive libraries have done historically is because they're
[02:53:30]  dynamic like i've shown this before if you've seen it before like if you have like you can if statements and the dependencies can change a lot of times what ends up
[02:53:39]  happening is every time uh node reruns it frees up all its dependencies which means that milo pointed out earlier that these things are backlinked right that they went both
[02:53:49]  ways they basically go back and go unsubscribe me so you actually walk the node to like the immediate um parent node or whatever dependency perspective and actually unhook yourself um
[02:54:03]  like before you run it so that you can create those dependencies again fresh when you rerun it and this is one of the probably biggest expenses of runtime thing uh versus like like
[02:54:15]  a compile time it's also super power why we can execute less than a compiler could like if you purely compile your dependencies um a lot of them don't handle branches properly so
[02:54:27]  like they're kind of prone to rerun kind of like react dependency rays if in react if you have some conditional inside your effect you have to put all the possible things
[02:54:36]  that could cause it to rerun in the dependency ray so it's always going to run when any of those things change even if the current calculation doesn't depend on it whereas
[02:54:45]  with runtime reactivity we only need to update what actually depends on it but a compiler also has a hard time splitting that out so um essentially you go through and you un
[02:54:57] hook it to hook it back up again and you kind of came up with a clever solution to that um if i remember yeah here uh so okay one of the like reasons
[02:55:08]  this is important is if you have a ternary in one of your components so say c uh c depends on either uh like c looks at a and then depends on either
[02:55:26]  either b or d yeah um so c is then going to look uh uh like this so we have c depends on a uh and c depends on b and uh c
[02:55:49]  potentially depends on both b or d uh so maybe we can denote that with like a dotted line here uh let's see let's yeah there we go um yeah so what happens
[02:56:04]  here is uh depending on the value of a c depends on c depends either on b or on d um so if you do this where so the way a reactive system works
[02:56:18]  when c runs it as it's running we have this global variable that's what reactive variables are currently being accessed so at the start of c we say initialize the global uh
[02:56:32]  dependencies to an empty array and at the end we say okay whatever it's finished as those are our dependencies uh would be the default um method so right we a so the
[02:56:48]  first time say a is true will depend on b uh so this will become a solid line um and then uh if it and you know we don't even have this connection
[02:57:01]  yet um the next time it runs say a is false then will depend on d uh and the issue is if you don't remember to unsubscribe you get a case like this
[02:57:13]  and so even though c only depends on uh a and d right now like because c is or a if a is technically false um yeah c only depends on uh when c
[02:57:28]  should only rerun when a and d change yeah but if we don't if we aren't careful to unsubscribe what'll happen is we leave all of these subscriptions around b
[02:57:40]  changes and it says c you're going to need to rerun because there's still this down error yeah and so what we want to do is we want to be really
[02:57:50]  careful about when c reruns b we should um get rid of uh b and d both uh to prevent any uh problems there but if we do that that's quite costly that
[02:58:08]  means we're we're making a new array every time c reruns and c we want c to be able to rerun i don't know say uh what have we
[02:58:19]  what have we been trying to set like 100 um like thousands of times a second yeah five five thousand times a second ten thousand times a second you're right if we're in
[02:58:32]  if we're creating a brand new array in javascript 5 000 times a second maybe there are 50 sources like this is not a good scenario uh for garbage collection so
[02:58:43]  uh and like to constantly be creating these links um so what we want to do is make sure to make sure that this is as efficient as possible and solid and reactively
[02:58:59]  have two differing approaches uh to doing this reactively's idea which is the sort of simple quick idea that you come up with uh is when c reruns uh let
[02:59:18] 's see we we don't start creating a new array and until we detect a difference so what that means uh well what's going to happen is we go to rerun c
[02:59:39]  and we say we depend on a okay great keep uh but a is already in our sources so just don't do anything yet so now we're gonna look at uh our
[02:59:50]  source number two versus what we're what the second thing we're depending on and so if a is true and we already depend on b that's fine if we want to stop
[03:00:02]  depending on b we're gonna uh we'll have seen okay our first source is a and we uh and our first new source is a so we we haven't created any
[03:00:13]  new memory at this point and then we run into a thing where we see d is different from our old source because d is and b are different and so at that point we
[03:00:24]  start creating a new array uh and this allows making this okay this makes the case so you just like slice from that index okay or slice i tried swapping the indices like
[03:00:37]  in place uh and it turned out that javascript garbage collection does like because swapping a slice out um is faster because it's a tighter loop than walking through and
[03:00:53]  swapping one by one um which is surprising that tight loops still have that much of an impact in a modern like in a high level language such as jobs like it's interesting
[03:01:11]  how the benchmarks carry over there yeah yeah it's okay so yeah yeah so this is this this is this is important because it means that for things that don't change like
[03:01:23]  static stuff which is very very common like think think you're in your jsx and you go div um i don't know whatever like i'm just gonna pick an attribute like
[03:01:39]  title equals uh user dot name or something like picture you have a situation like this the truth of the matter is while this name might update every time you know it changes or
[03:01:51]  whatever user changes the the this dependency on user is static it never changes the majority of your jsx like bindings are essentially the static thing where you don't have you shouldn
[03:02:04] 't need to dispose of the arrays every time um so this is this is very good optimization it's also like there are parallels here between this and things like react dependency arrays
[03:02:20]  uh where they have you have a list of static dependencies that uh you depend on which is kind of just sort of an interesting uh note okay yeah uh sorry scale address trying
[03:02:36]  to get back to okay yeah so combination of this pull-based coloring algorithm smarter handling of uh array dependencies and we're it's kind of interesting i've watched in the last
[03:02:49]  like few months such a revolution here where all these new solutions are breathing life and performance into this area that we haven't seen in years because it's the the truth of
[03:03:01]  the matter is until you we haven't had good benchmarks and until you get into certain shapes or types of graphs people haven't really noticed stuff like i i i could go through
[03:03:11]  and take um reactive libraries that benchmark better or worse stick them in the js framework benchmark and like have almost no impact because the cost of the dom elements um i mean i
[03:03:24]  i have ones that do see the impact because as many you know i've imported dom expression solids core into preact view mob x knockout sjs rxjs um so
[03:03:38]  i i was able to compare all of those reactive libraries as they applied to dom updates um so like for the large part solid was very much optimized for the kind of dom
[03:03:51]  tree kind of scenario um so we just we haven't seen as much like i think the cell x benchmark actually kind of got people more again on this kind of like academic algorithm
[03:04:03]  thing although unless you're doing crazy stuff like that it's not going to impact you as much as your renderer right like it's one of those things like if you
[03:04:12]  add signals to preact it's not really any faster than preact without signals um so like you you're gonna be constrained by the by the renderer like it's it
[03:04:21] 's it's not and it's the same thing with the react thing like it's not changing the game um it's you know without actually being adopted into the actual rendering libraries
[03:04:37]  so yeah it's interesting i i i'm very stoked about this though because yeah i'm kind of stepping back a little bit milo because i what i what i what
[03:04:49]  i'm thinking about here is the reason that i'm really stoked about this is this is a clearly more pull based um mechanism and this this separation makes it a lot easier to
[03:04:59]  do the kind of stuff that you might find in react which is completely pull based you know so like there's this kind of like interesting space that i feel like we live
[03:05:09]  in where we can now get the benefits of the um reactive dx experience get the benefits of the performance from the know what changes perspective but then be able to model problems that um
[03:05:22]  that you know like react likes to model you know there's been a lot of conversation there where that's like oh you can't do this without doing it our way on
[03:05:31]  the react side and i don't believe that's true um i think where we've been showing here that you know between my silly concurrent rendering and time slicing demos to like different
[03:05:42]  things that we can do a lot with reactive modeling i'm very excited with this one because this makes off screen really easy this one makes um you know those kind of ap
[03:05:52] is work really really well basically virtualization built into the framework um you know when you consider that you can just like not pull some of the effects that aren't on screen when
[03:06:03]  the framework's aware of what's on the screen and those kind of boundaries we can say yeah don't run those effects right now that's basically how suspense works and this um
[03:06:13]  mechanism lets us push the execution to the right places yeah this algorithm is a good change for solid yeah yeah we've done so much without it and now this is this this
[03:06:26]  will just make our life that much easier to do the rest of it um not looking at request animation frame i'm still very much on the q micro task this is a good
[03:06:39]  question though i think the ideal form for a lot of uh these systems is something that we we work on when we're working with marco which was that it should run
[03:06:48]  basically immediately for the first set of changes like q micro task or as fast as you can get to and then if you do any changes in the effect at that point it there
[03:07:00] 's an argument whether you should keep it part of the same queue like if an effect writes to a signal or um you know set it up for the next thing and what the
[03:07:09]  marco guys were thinking where they're like look if you're in an effect and then you update another signal they're like like it should be its own frame and i
[03:07:18]  don't know if they they went with this in the end but they that they were like we should request an animation frame and then post message to get to the next set time
[03:07:26] out as in move it to the next macro task if you do a request animation frame you end up right before the paint and uh uh that so they were like let's
[03:07:36]  do the work immediately and then if we queue any more work we should do it after it paints and this is a funny exercise because if you think about it for a minute what
[03:07:46]  ends up happening is if you make an infinite loop it could be intentional like if you have an effect depend on like its own sources because it would just be making an animation because
[03:07:56]  you wouldn't be blocking paint so like you could literally like you if as long as you hopefully stopped it eventually uh uh an effect you know writing to and depending on the
[03:08:07]  same sources would actually just be a way of doing like a max frame like 60 fps animation i think that's more novel than it's useful but it's this question made
[03:08:18]  me think about it yeah there's a there there was another question in chat about like is it possible to set inside uh a reactive effect and the the solution is very much just
[03:08:33]  wait till for consistency you you want to be careful to wait until the next frame uh before setting anything yeah i've had a hard time solid's batch behavior used to kind
[03:08:46]  of enforce this in a really awkward way that everyone hated and complained about for like two years but like it wasn't an easy trade-off because it also sacrificed this other aspect
[03:08:56]  i i'm to to date this is a place where me milo aren't completely in agreement on because theoretically i agree with him but in practice i can't commit to to
[03:09:07]  pissing that many people off um it's one of those challenging things where like really the problem is you can see it in these graphs when you have drive state we know
[03:09:22]  everything we can control it if you start writing to signals in the middle of our beautiful executing process you're like throwing a hand grenade into the into the china shop so to speak
[03:09:33]  or whatever you know like you're you're causing stuff now to maybe have to run twice you know like what's happening is we have this uh we have this thing where
[03:09:44]  normally we'd have an edge uh here where like if c if c actually says you know set whatever where this is x um normally we'd have this edge where it's very
[03:10:02]  clear that you know x actually just uh x is depends on some form of c um but if we if we use set then what happens is this edge disappears from our view
[03:10:14]  uh and so that immediately removes all of the magical things that we have about running things in a certain order and uh and preventing things from running twice and there's a chance you
[03:10:29]  get lucky and nothing runs twice but it's entirely inconsistent um yeah so you just have to be very careful when doing things like this and don't get me wrong like when
[03:10:43]  from a rendering life cycle standpoint there are cases to set effects or set values at after or at or after effect time for example you're reading from the dom like you you
[03:10:54]  you the effects are queued you've rendered your update and then you're like for an animation i need to see where the dom is timing wise that's going to run as
[03:11:03]  like an effect after words which means you will get that value you'll read from the dom and then you'll want to do something with it um we're we are still
[03:11:14]  working a bit on primitives i think there's a gap um on a couple cases around synchronization but like fundamentally like there are places timing wise where we want to address that
[03:11:27]  and i think if we can figure out how to make more data derived the better off we are yeah definitely as you're writing solid code like you want to try and make
[03:11:38]  sure that everything like it's ideal to avoid calling a set inside an effect for as much as you can um yeah no milo is great sorry comment came in a little
[03:11:57]  um and this is this is the truth of the matter uh earlier on when milo kind of went off there there's a lot of really smart um younger people from my perspective
[03:12:07]  coming up in this right now and i i've been i've been i've been very lucky to have uh them involved with the project um you know and kind of talking uh
[03:12:17]  through this stuff uh people like uh shane with uh cairo as well and like uh like yeah just kind of getting these minds together to kind of figure out how we
[03:12:29]  approach the next version and react to reactivity has been really awesome yeah one of the things that we're currently thinking about is how uh how this plays in with asynchronous effects uh
[03:12:41]  and this is sort of like a yeah our async model with solid provides the api but it doesn't completely leave us in a great place and this is a this
[03:12:54]  is a topic that's probably too advanced to handle today and given the timeline milo i don't think we can really show how we're thinking about async async coloring
[03:13:03]  but um yeah uh it's funny let's let me see here solid i want to see if what i did last at solid js slash reactivity npm yeah um it's
[03:13:18]  funny because it never shows up first for me i have to like go in here and do it again um this library does exist we haven't published it privately started something good
[03:13:31]  yet um but uh but it does it does exist um we've been we've been we've been working on on this and uh oh man it's i'm way out
[03:13:44]  of date on this computer but um i don't know let's just do a not solid start let's just do a quick walk over of the code just really high level show
[03:13:56]  where things are at just so people can get a a glance at this for a moment um open uh what am i looking for actually i'm gonna open a new window first
[03:14:16]  all right i'm gonna do this yeah um so far it's it's it's a very simple implementation it has um signals it has stores um very basic version store which
[03:14:29]  basically uh works like um let me actually um there's a little example here right um yeah i mean it's not even showing it it's basically doing the produce function built
[03:14:48]  in directly uh and then so it's like there's very little code in this i think the whole build for this is like 424 lines of code um for the for
[03:15:01]  all the reactivity and the stores um and build this out of date is yeah you're right this build is out of date yeah yeah don't worry about it install yeah because
[03:15:13]  and it's probably pmpm isn't it yeah whatever it is yeah it's just mess with stuff yes i was able to see how fast that was just side note
[03:15:29]  yeah uh pmpm uh build yeah sorry yeah you're right this is out of date the code is probably much larger now okay fine it's 550 lines of code but um
[03:15:42]  uh yeah i mean let's see here i i don't know how much of this we we actually do want to go over i thought it might be interesting but i realized that
[03:15:52]  like uh um yeah you know what i don't know is there anything we want to talk about in here really uh i think the the only the most interesting thing to me
[03:16:06]  is the fact that every single thing almost ends up being the single compute function which is interesting um um let me see if i can find it compute compute compute basically this context
[03:16:26]  setting thing i i i'm kind of amazed at this this implementation in both that basically everything works out to being a call that handles tracking of you know setting the current owner
[03:16:41]  tracking scope or or and the other thing is that everything else is what is it called create computation if if if i if i go into the signals implementation here create signal create computation
[03:16:59]  node create memo create computation this create effect great computation like the the whole system is basically it's basically a wrapper over like two main functions compute and create um did i see
[03:17:12]  zombie yeah that's the name for something a dead branch yeah one of the tricky parts of handling reactivity uh is that we haven't covered very much at all on stream
[03:17:28]  is um what happens when you nest like when you start grouping uh reactivity uh and then cleaning it up uh or like nesting a group of reactive elements all inside another memo
[03:17:45]  so that they all of the reactive elements are destroyed and recreated when it's rerun um and that ends up being quite a complicated task uh someone asked if there's
[03:18:00]  no classes technically is it owner node there's like a there there's like a everything is a using like es5 classes yeah uh essentially we yeah it's it's interesting i
[03:18:16]  i want to test through this myself and see what what the implications are but yeah there's a lot of the benefit of using classes is you can share the prototype which saves
[03:18:27]  a lot of memory on um you know like function creation um and but we're like manually handling the binding and call stuff ourselves so we can make it reusable in multiple contexts this
[03:18:40]  is this this is um a little bit complicated i think it was very much inspired by the work of fabio in our community who was creator of phobie um uh
[03:18:48]  this specific detail if i'm right um who who found some really interesting ways to reduce memory um by by doing this so yeah but i mean the whether the internals do that
[03:19:07]  or not is of very little concern to you because you will go in here and call create effect or create signal and you know that that's it um yeah this is a
[03:19:22]  long way to go to get to the full functionality of what solid has today especially the async stuff but this is this is the start and it's it's it's very
[03:19:31]  promising i already made a js framework benchmark with it as you can imagine um so uh yeah not not quite where solid is today but it might have been a bad run it
[03:19:44]  was like 0.01 slower um so i i got some work to do you know but uh yes i mean no one's really caring about 0.01 um at this
[03:19:55]  point of the process given that this is just the the raw thing here um and i think there's other types of optimizations we can do now that we have this at our
[03:20:04]  disposal yeah i mean yeah this solids core has always had this sort of characteristic to be fair um so yeah yeah this is actually kind of simpler in a sense which leaves more
[03:20:28]  room for optimization there's some interesting things here that i need to evaluate so far like using the context ownership being done with a link list instead of an array and stuff like that
[03:20:38]  um this is going to evolve but i this this was the kind of this is the library that what we're talking about reactivity a little bit earlier where tanner was
[03:20:47]  playing around with it was this um so like this this is a very promising direction anyway i i i don't i think i'm okay on the topic now uh and where we
[03:21:00] 're at i i i'm i'm almost ready to move on to the next sort of thing does anyone have any questions from milo while i still hear before i do this
[03:21:07]  week in javascript um i was there anything else milo you wanted to cover specifically no i mean this is a great introduction to reactivity yeah yeah we covered the
[03:21:18]  algorithms we talked about the work we're doing solid talked a little high level too about like looking at because i i think there was a tweet where someone was like why is you
[03:21:27]  know is angular's reactivity uh uh i don't have it up right now i guess uh never mind is angular's reactivity different from solid's reactivity and the
[03:21:39]  truth is today yes but i think in the future we're actually seeing a convergence here of of these approaches to the point that i think that uh um they're they might actually
[03:21:51]  be getting more and more similar other than some syntax stuff um which is mostly very superficial like whether people use dot values or calls functions and stuff like angular was very prompted the fact
[03:22:01]  that they use classes a lot so a lot of their apis are designed to work well with classes for example um so yeah that's like where did my window go um
[03:22:11]  yeah i i think i think it's i think it's definitely interesting to see these kind of common things yeah yeah milo before you leave can you help me fix some bugs
[03:22:25]  in my app i hope you're studying cs or mathematics speaking as a master's in math and undergraduate focus on grad theory yeah what what are you what are you doing in
[03:22:34]  school i am a cs major with a math minor as of right now how lazy yeah context isn't bad resources is a whole other challenge i i want working a lot on
[03:22:50]  uh transition should i give a brief explanation of why transitions are interesting uh no one no it's not going to be brief because no one knows how transitions work okay yeah but in
[03:23:03]  the future yeah no i i might the the biggest thing right now is resource reads i this is the fundamental part i want to talk about resource reads happen where they're read and
[03:23:14]  then we look up context to find suspense and suspend there the problem is a lot of cases what you actually want to do is derive from a resource and actually push the suspense
[03:23:23]  down to where the final derived value is used um like in the effect and we don't do that at all currently with solid and i was hoping that lazy memos would be
[03:23:33]  a solution to that but because you're pulling and because they might not reevaluate you know under that effect uh because they evaluated a different effect um we might have to
[03:23:45]  come up with another sort of type of marking system um because it's but i am this is one of the things i want to solve during this process i want i want the
[03:23:56]  async story to be a lot nicer yeah this is sort of our active research area is can we make not just lazy memos but async memos that uh like
[03:24:06]  for example resources right now can't a research uh if you have a memo that depends on a resource it doesn't trigger suspense uh and we want to fix that yeah yeah exactly
[03:24:18]  it's it's it's the memo executing that triggers your suspense rather than the like the like use of the memo so it happens usually way too high up in the tree
[03:24:29]  it like happens like like maybe where you're fetching and for transitions there's some like other niceties that lazy memos bring us yeah that's true there is so much
[03:24:42]  niceties that come from the fact that it's pull based another place where this is really valuable actually is figuring out patterns for like resumability like when you when you start
[03:24:52]  thinking about the graph that way because you're not eager now on these executions and you're looking in a world where you're just like oh it's either an event
[03:25:02]  handler or an effect that runs it's like one of my biggest fears is that um serialization in a resumable world is very challenging because you like suddenly like every single
[03:25:14]  composable hook becomes a boundary and now you're like in crazy land trying to figure out how to like make everything like like work when every piece has to be serializable
[03:25:26]  you're like no i i just wanted this intermediate date well no sorry like it i mean dates an easy thing to serialize but like like like you you end up with like
[03:25:34]  all this kind of consideration there and one thing that i thought was interesting with lazy is you you you could be kind of like lazy about it and be like oh yeah i
[03:25:42] 'm gonna compute this not compute this you know like you you could probably partial do partial bailout and not you know have to worry and if that's the case it might be
[03:25:52]  possible to get to a place where the end user doesn't have to worry about or be aware of serialization and resumability and that is an incredibly powerful thing because then
[03:26:00]  you're not putting dollar signs everywhere um so like this is this is like the kind of thinking that i'm very excited about um yeah um it's funny because the beginning
[03:26:14]  of our talk was talking about how we can put dollar signs everywhere with bling but there's a difference between like explicit choices and like like other you know basically being almost
[03:26:29]  forced into it from the perspective of like being aware or being safe about it it's it's it's a tricky zone honestly we're going to talk about this more going into
[03:26:39]  this week in javascript uh in terms of like the whole compiler conversation but yeah um let's see okay i think i think i mean look me and milo could go
[03:26:49]  into this stuff for ages if you ever sit in on a conversation i try and pull them sometimes into core chat but like we just go on and on and on so i
[03:26:57] 'm not going to do that to you all today as much fun as it would be so we're gonna we're gonna let milo go thank him very much for coming in
[03:27:05]  after after his classes um on a on a friday um to to chat about this stuff i think the work he's doing and others in this area is really inspiring um it
[03:27:16] 's pushing stuff forward in ways that like i'm very happy to have him around i don't have to figure this out um so thank you so much milo and uh
[03:27:25]  until next time we have you on um you know have a good one all right yeah seriously college kids these days yeah like all right hopefully hopefully you guys all got something from
[03:27:47]  there this i knew that we'd get kind of technical i'm trying i was trying to pull it back into where like the relevance is but like the thing is like there's
[03:27:57]  this there is this common trend on reactivity right now and with people picking up signals and one of the challenges is understanding what's important in the solutions which i i think
[03:28:09]  right now there's a lot of noise and the other thing is like um from that is understanding like how to like push it forward like what are the things that are important to
[03:28:19]  optimize what are the things you know that aren't and yeah yeah yeah i push yeah seriously but i mean the thing is do the math here he was i guess he was
[03:28:33]  like what like in grade 10 when he came in and he wrote the the the the he like i didn't always in the end we realized that the syntax wasn't as good
[03:28:43]  but he wrote a really um you know optimal uh hyperscript renderer back then and i i guess to be fair it's probably has a lot of similar characteristics to
[03:28:54]  like uh what fabulous work with vobi where you could kind of like wrestle template cloning back into a hyperscript thing um yeah yeah yeah yeah no it's that
[03:29:11] 's the thing you you find with these communities i think i think the t3 community has similar members in it who um like 16 year olds who are like you know mate core
[03:29:22]  maintainers of it you know like that that wasn't me i have to admit i i was building websites and doing my thing but i wasn't so i wasn't exposed to
[03:29:33]  open source at that point and then like at a certain it was much much later and i went through a whole phase where i was like you know kind of like microsoft
[03:29:44]  shop kind of you know the corporate thing before i actually found open source so like um to get involved this early because you're you're building a portfolio you know in a sense
[03:29:57]  uh like i don't know if colleges look at it but definitely a job market does over time like you're this is this is your resume and you're starting it like
[03:30:05]  at 16. like yeah all right so streams not over as you guys know because this is this is when the the the real fun starts um this is yeah thanks for the answer
[03:30:23]  gray sorry yeah well okay i i can talk there's like there's one other thing that i should mention dominic ganaway creator of inferno has been working on
[03:30:39]  an incredible compiler project um called octane which he sees as kind of like the blend of you know stuff but it's basically if he took a reactivity system very similar to
[03:30:49]  what milo just presented and then took a page from svelte's compiler but like go beyond that like actually work on branch and now analysis kind of stuff similar to
[03:31:00]  like what react forgets doing like he uh dom was like uh was that uh meta he saw that stuff kind of unfold and basically try to get something very close to react compat
[03:31:14]  with it um which is like crazy so um there is work being done there i don't know if everyone's gonna like like the amount of i don't want to call
[03:31:26]  it magic but like the compiler control but like we're entering a world where this could be very much a real thing yes this week in javascript is coming here let me
[03:31:39]  yeah yeah let's let's let's let's let's get this going um yeah and yeah if at any point someone finds some like juicy thing you know feel free to
[03:31:51]  send the send it in you know like um and then we can talk about that as well just like i'm setting up my my twitter feeds here so that i can do this
[03:32:00]  week in javascript give me a moment um but yeah uh because i know now to do it off screen so i don't share private circles we we already had that
[03:32:15]  happen on stream so let's go here let's do give me a second so that's why i'm not doing on stream hope chats all doing good see here three categories we
[03:32:26]  have it's funny i always get bookmarks in twitter blue screwed up because i like i see the b and i'm like oh b no okay so when did when did
[03:32:38]  this week really start well for me it's been two weeks so it's this two weeks in javascript so i have to go back to wow so much has happened this
[03:32:51]  is crazy eh let's go back um today's the what's what's the date today 17th so we're going back to the third oh wow okay there we go
[03:33:09]  give me two seconds uh oh yeah yeah yeah that was good yeah yeah so the gatsby merger had just happened last time we we we talked right so what yeah perfect
[03:33:33]  and then oh wow i have so much stuff that's happened oh okay yeah this is this this is gonna be fun i'll see what i can do okay um all right
[03:34:03]  let's let's get in let's get in gear um get some water all right all right oh what do i want to start with man this is i feel like i
[03:34:20]  should just like nail some solid stuff off the top and then we go from there but chronologically that doesn't make any sense um yeah you know we're gonna do that we
[03:34:33] 're gonna we're gonna we're just gonna run some solid stuff off the top and then we'll go from there all right cool so everyone ready uh let's get chat
[03:34:47]  like all the time it's just like crazy trying to keep on top of it yeah um yeah man yeah okay we're gonna run solid stuff first okay all right i think it
[03:34:59] 's about time we talk about this week in javascript well actually the last two weeks i've been i've had some time off um it's funny i do this intro
[03:35:10]  every time as if i'm gonna split it off into a separate video but i just never end up doing that so whatever but let's get started let's get into it
[03:35:19]  all right so i'm gonna start with a little solid um news to uh to get get this rolling um there's a there's a few things here that i want to point
[03:35:31]  out one of them was uh it's awesome seeing solid gonna use more and more examples one of the ones here was using solid native script to run a react native web view you
[03:35:41]  know people always keep on pointing to me like oh what solids native story and yes we don't have react native um someone did make a wrapper once but uh like generally speaking
[03:35:51]  there's lots of ways to do um mobile though and maybe it's not as good as react native but um tori and obviously capacitor and um native script so um these work
[03:36:03]  with solid um and it's cool to see these kind of examples pop up um uh xstate solid package is out this has been like a year in the making uh so
[03:36:18]  like a big fist pump to austin here like this was like incredible amount of work we talked to tanner about the complexity of mixing immutable immutable systems and all
[03:36:29]  that kind of stuff and i've covered it on stream um this is the most state of the art version of that um and i think it's really cool because our version of
[03:36:40]  xstate does fine-grained updates no none of the other ones don't like even view which has this ability like literally when you go from state a to b we
[03:36:50]  we like only update like the fields that change in a fine-grained way we can like not re-render like any of the components and just pinpoint updates um this is
[03:37:01]  a really cool integrations um sorry for those who aren't aware xstate um very popular in the react community is a finite state machine and state chart modeler um it
[03:37:12]  it is a very powerful tool has incredible visualizations um great dev tools like yeah it's created by david corset or david piano um and the stately is behind
[03:37:29]  it and yeah yeah i know what happens yeah when you say state machine david appears for use effect but it's really cool um stuff a lot of like if you notice
[03:37:42]  this streams that were not by solid core people coming coming out here so a lot of a lot of really cool stuff happened alexis never short on libraries gave us solid
[03:37:54]  mason uh which is a masonry grid um dan jutan is back making videos for solid he released two of them one about singletons and shape state sharing and
[03:38:06]  another one about uh how do you solid without a compiler really great at explaining topics in a short manner something i am not otherwise i like if dan was doing the stream they
[03:38:18]  wouldn't be five hours um so yeah so yeah this really cool okay okay this is probably the big solid news of the week uh damien released um solid dev tools the latest
[03:38:34]  version which added an ability to actually inspect the reactive graph this stuff is so cool this is what i always visualize i made an open it was the longest open issue on solids repo
[03:38:44]  for ages because there's like how do we make dev tools that are proper for reactivity of this nature and we're really starting to get there like this is this is this
[03:38:53]  is cool people like if you see the responses and like the quote tweets around this it's just it's just absurd um like not just people saying it it's good people being
[03:39:05]  like hey like why doesn't my framework have it this is how it should work like really good work right marvin from preact was saying like this is the main reason
[03:39:15]  why any signals based approach is better than hooks it enables additional debugging insight which is not possible with hooks like showing why something updated yes yes marvin yes yeah and they're planning
[03:39:27]  to add something similar to preact um yeah this is just this is what this is one of those really interesting applications of reactivity and one of those things that like have
[03:39:39]  been a gap so i am very excited about this yeah yeah this this is just amazing i can't say enough about how awesome this is um that was a really awesome way to
[03:39:56]  start my week this week um valentine's day fun um stack blitz containers are out we've been experimenting with them milo is talking about how he's done
[03:40:08]  some work with that um really really really important stuff uh i'm just going quickly through here because it's mostly just released type stuff but um for those who don't know
[03:40:20]  solid community joe is the also true skater is the creator of loom which the web component library built on solid that does 3d let's like basically let you do
[03:40:29]  3d graphs as web components um it's being used um in this uh open world game apparently so really quite cool um to see that in progress um so very very cool
[03:40:42]  yeah i i'm trying to think of yeah there's just so many of these like someone that asked if i was over i can't even go through all the news anymore because
[03:40:52]  there's just too much uh going on it feels like um so yeah it just yeah i i think that uh this solid's starting to pick up and it's very obvious for
[03:41:05]  those who following along the project and i have something else to block sorry all right so let's let's continue on uh from from the solid specific news and talk about what
[03:41:28]  else happened well two weeks ago probably less relevant now was there was a bit of a uh i feel like the the controversy on twitter never uh never seems to kind of w
[03:41:42] ane um there's a little tension going on uh around the way some content is being made sorry let me fix sorry about that my my screen kind of fell down um and
[03:42:10]  essentially there's like this divide between people who appreciate the youtube culture i mean i can pull it up right now if i pull up youtube you'll you'll see exactly what
[03:42:21]  i'm talking about um generally speaking um you know this and this um yeah actually there's less of it in my in my feed than i expected um usually i open my my
[03:42:36]  feed and it's like literally half theo faces half uh what's the guy the whatever coder you know um yes got some steve in here um and yeah you
[03:42:55]  know like not everyone's happy about this um you know push to like clickbaity titles and thumbnails and whatnot and some people have been very vocal about like how they're
[03:43:07]  never going to do that and all this and it's and danny maroff has does anyone know successful developer youtubers who aren't constantly milking for engagement by posting bait i
[03:43:16]  get the argument that bait is just a hook and that then you actually have to make the video good but it still turns me off curious to see the path like it's very
[03:43:23]  clear it turns them off from his use of language because like oh let's just go beast let's look at if you go outside of dev um and i don't have
[03:43:43]  that because i don't follow these kind of people generally but if you go into this other zone of youtubism like this this is just the reality of things and i
[03:43:55]  think it's kind of interesting that i think probably we we have to kind of shift our perspective you know like it's fine i understand like i saw a lot of clickba
[03:44:08] ity stuff that was garbage and the whole grifting thing for like a couple years ago where it's like 10 easy steps to um i was gonna say uh you know you adjust
[03:44:19]  your diet or whatever but no like with like programming type stuff and that stuff was mostly just garbage and listicles and stuff but that's not what's happening here what's happening
[03:44:31]  here is is essentially different types of tech content obviously it's not my zone i i make long explanations on technical you know stuff that goes deep dives but like we're
[03:44:44]  people were watching this stuff for enjoyment right it's kind of like if you go back like 10 years i remember people asking me like you watch other people play video games like why
[03:44:55]  would you do that once you just play the game but i got very much into watching people do speed running and stuff and i know what i'm trying to say is like there
[03:45:04] 's different types of content and ways to approach dev that isn't just like code this tutorial with me and i think this isn't like the whole pool like it's funny
[03:45:14]  because someone was asking the things of like you know is there metrics to prove it i mean it's hard to say but you can definitely see when someone can literally change the title
[03:45:25]  or thumbnail of a video and all the stats improve drastically like and i'm not talking about like not talking about like just spiking on initial view but retention and like every
[03:45:35]  single metric just go through the roof and i'm fairly supportive of this movement personally because it trickles down you know when somebody you know starts watching javascript content from t
[03:45:50] iktok moves to youtube finds developers they follow um for entertainment then decides to go a little bit deeper and learn more they find themselves to my channel eventually so like yeah i
[03:46:01]  mean i'm i'm i'm kind of fairly pro this i don't actually have any problems with it it's just interesting that there's a lot of people who actually like
[03:46:12]  this offends them on some level um yeah i don't know i i i think i think we're just kind of adjusting to the new norm yeah i mean the yeah
[03:46:28]  and i'm not the channel to talk about how to like the benefits i'm not but i'm just gonna say like yes like there's a science behind this right so yeah
[03:46:43]  that's that's fine oh sorry let's go back here oh i need to get back to my profile okay all right so let's let's keep on let's keep
[03:46:54]  on going keep on keeping on okay so let's see this is why i was i was literally scrolling like this to to find the beginning of this stuff um yeah mistico actually
[03:47:06]  had a really good uh thread um about micro benchmarks might be interesting some some people to check out um not gonna dwell on much but it is interesting how much um benchmarks micro
[03:47:20]  benchmarks lie to you you try and make the situation as close to the actual situation you can come to completely wrong conclusions um i remember last stream when i did kind of like drew
[03:47:32]  this like in real time i posted it um seemed to get good response i don't need to talk about this anymore because this literally happened on stream but uh i think a
[03:47:43]  lot of people are noticing this alignment i think some of the most interesting responses from this was like the remix guys going going like i'm like yeah i know remix isn't built
[03:47:54]  on preact but they're going believe me the thought has crossed my mind what would remix look like with preact by default on the front end we'd already ship about 30
[03:48:01]  less javascript than next with preact we could be even smaller and the the this whole thread goes down 12 kilobytes or bust yeah there you go yeah which
[03:48:14]  is actually very similar to solid start actually in size um so anyway uh i thought this i thought this was probably the most interesting thing people did point out that this makes people think
[03:48:28]  about support of the platforms the platforms support everything like sarah has very good points this both makes sense and doesn't because a lot of these platforms are agnostic yes very
[03:48:35]  very much true um it's just i i think it's an interesting um interesting um interesting narrative and we've already talked about the gatsby merger but interesting to kind
[03:48:46]  of reflect on the implications of these kind of things moving forward all right let's keep on going all right yeah so i didn't stream it was my birthday i'm very old
[03:49:05]  now so we'll we'll just keep on going um yeah so the this week last week had twitter drama had you know maybe not that much interesting kind of stuff you know
[03:49:20]  outside the few solid announcements but this week has been signals signals signals and server functions right um mitchco starts off by highlighting some of the uh the frameworks that use signals um
[03:49:37]  i love how we got shallow ref in there although i guess he misspelled it but yeah um i i this has just been the thread you know um i i yeah yes
[03:49:49]  it was also tanner's birthday we we both have our birthday on the same day yeah that was probably one of the most interesting observations uh like we were in like a group
[03:49:59]  chat somewhere and like literally everyone's like yeah no no way my birthday is that day no no my birthdays birthdays that day we we literally all found out at the same time
[03:50:09]  like um yeah and and david from solid community uh david dibiase is uh is on the 10th so like uh yeah like uh yeah a lot of febru
[03:50:25] ary birthdays um here but yeah i realized that that after like like like not all signal implementations are necessarily the same so i actually tried like you never do this but you
[03:50:38]  know people i tried to put in a chart for people right like this one i could have drawn on stream but i i pre-did this one and i think it's this
[03:50:47]  naming of atoms is arbitrary some people got like offended like oh no atoms are this and this and felt stores aren't atoms and whatever my point is that there's kind of
[03:50:59]  a spectrum and whatever you call it or whatever the examples are i actually think today there are four distinct levels of adopting signals in your frameworks or in your tooling and uh there's
[03:51:14]  the way that react typically works which is like a component subscribes this is like the pub sub thing right it just like reruns it's like something changed run that component
[03:51:23]  and it's children like you get some control over it this is like the joe tie recoil it's like where it enters the component you go like you could have like a
[03:51:29]  bunch of proxies and reactivity or whatever change mechanisms you want but then you get to react and you're like use my thing and that use is when react like
[03:51:38]  under the hood has like a use state flicker so if you go use this data get the data pass it through your component tree when that data updates it's that component that
[03:51:50]  reruns even if you don't like use actually use the data till further it's very common in these patterns to actually like put the use as close as you can so you
[03:51:59]  don't do prop drilling but i wanted to just kind of point out that like where you use is what runs right um whereas like the typical signals vdom approach which is
[03:52:11]  what i call like the mob x view of the world is that like the use doesn't do anything but now you need kind of like these hidden wrappers around your components or
[03:52:22]  not so hidden that actually tell the component to rerun wherever it's read so you can basically like use contacts bring the mob x observable or view observable whatever into
[03:52:34]  your component but then pass it to a child and if the child uses it the child is what re-renders not the parent so that's why i said mostly because yeah
[03:52:45]  for the most part you're going to use in the same component the opponent re-renders whatever but you also have the ability to kind of pass it down and based on
[03:52:51]  where it's used that whole component will re-render and this is how mob x works some people were like oh but there's an observer component i'm like okay sure
[03:53:00]  like yes that way you don't have to break an actual component off so the parent doesn't run just everything below the observer like render component or i forget what they're called
[03:53:11]  i guess it's a render prop component but my point is still the same you're like injecting a component level um mechanism to to do it and that's kind of how
[03:53:21]  most vdom signals implementations have worked historically um so like both of these exist in the react community pretty readily um and they're not the same as what we we do
[03:53:34]  in in solid or preact or quick but even preact and quick don't do what solid does because for them they kind of fall back to that zone like if you
[03:53:46]  read at a component level that component will rerun but if you pass the signal all the way directly to where the dom binding is preact and quick will be like okay our
[03:54:02]  virtual dom and you'll see commonly because they both use virtual doms they'll be like okay we get that node in our virtual dom we know that that we can isolate
[03:54:12]  this binding to that so they basically almost like create a component at that point like inside the attribute or whatever so it's kind of like that observer component we talked about but it
[03:54:22]  happens for you automatically um and that that's that's pretty powerful because if you are careful and always wrap expressions and computeds which i guess quick doesn't have but they
[03:54:35]  could probably automate that with their compiler if they wanted to but if you like wrap expressions and computeds and you and you always pass signals down and you make sure that it always
[03:54:47]  gets to the dom then you can get something that updates um at the leafs kind of like solid essentially um as long as you you know and you always have this option
[03:54:59]  like of like just not doing that and then having parts re-render and for a lot of people this is a comfortable middle ground because then they're like oh i don't
[03:55:07]  want to figure out the reactivity i'll just re-render you know so it's like kind of like the you get both worlds right interesting part as we showed on the
[03:55:16]  preact stream is when those things do re-render they tend to be more expensive because the overhead of using signals is higher than the overhead of just using the plane state
[03:55:25]  with the vdom so it's it is kind of an interesting trade-off like almost everything compels you to write your code as if it were solid but um it will
[03:55:34]  it won't punish you as badly although it will be worse than what it was um if you don't go that way so it's that's kind of an interesting zone
[03:55:44]  and then finally um stuff like solid review vapor which is basically just doing the full reactive um activity at the fine grain level so um yeah i thought this chart was interesting i think
[03:55:57]  this is only starting to be understood what those those those levels are um and like what it means like there are trade-offs when you go this way like your components never
[03:56:06]  rerun that's very it's very foreign to some people so yeah um but yeah a lot of talk on on on signals marco are hinting something that they haven't
[03:56:19]  released yet i hope that it should come out like does it have they no february 10th that's a week they should i don't know if you're supposed to
[03:56:28]  leave a hint that that long but i'm looking forward to seeing what whatever marco is releasing yes uh yeah we're gonna get to angular and signals in just a moment
[03:56:43]  here um but yes i think they i think there's a reasonable chance that angular is going to fall into this category mostly at least at first it's just it's hard
[03:56:53]  to take an existing system and go all the way down to here um i'm not surprised view will be the first ones to join solid here um just because views had this react
[03:57:04] ivity longer than anyone else um but yeah i'm gonna jump up a little bit ahead because it kind of ties in uh is that we'll we'll come back is that
[03:57:16]  yes angular is bringing reactivity in so um fine-grained reactivity of this type so we're talking we've seen quick we've seen preact we've seen um
[03:57:32]  we've seen a lot you know of of this sort of uh reactivity and signals kind of become the hype and the funny thing is every time this happens um there's
[03:57:41]  like a new burst of interest which is always funny because people find solid for the first time and it's like that was my week this week where um there's a lot of
[03:57:50]  people going going like oh solid why is there another new javascript framework and you're gonna be like man it's been doing this for like seven years like it it
[03:57:57] 's it's kind of funny i have to sometimes ignore responses to videos and chats and stuff because it's just like it's not surprising but a lot of people like there's
[03:58:08]  the there's a bunch of people who are like what's up to the signals thing isn't it like why are we claiming like we're inventing a new thing it's
[03:58:14]  like no no we we're not inventing a new thing it's just like there's a lot of confusion when these moves but i think i think it is really cool
[03:58:24]  to to kind of see um this propagation of this idea um you know this different change model it also brought up yet again why people are like like hey we will react ever add
[03:58:38]  this um and and there there is you know some discussions about that um uh let me see if i can find it um and i don't actually think i have any of
[03:58:53]  those discussions here um but yeah i i i think i think it's fair to say that while i've heard some rumors of like some backdoor conversations i don't think the
[03:59:08]  react today would consider it i think it this this is more of like a future where if you're memoizing react already and having to use reactivity as your way of
[03:59:15]  explaining how it works maybe they might consider it but generally they've been very um you know not into it in fact i think i was there was a thread here off one of
[03:59:27]  these ones where i was i was like i i don't know where i first used the term because mark grabansky who was the um he's the guy behind um
[03:59:40]  sort of uh front-end masters um it's a credit to me for the whole fine-grained reactivity term and the truth of the matter is i did i used
[03:59:49]  it kind of by accident originally i actually opened up a article here um where i was like why react hooks i was this is january 19 2019 right after the hooks announcement a
[03:59:58]  couple months and i was like trying to explain to people why hooks were so much a bigger deal than mixins and that it was basically a solution to address two really powerful constraints
[04:00:09]  in react and at some point just i use the term fine-grained like a ton uh in my writing i'm like fine-grained this fine-grained
[04:00:18]  fine-grained i just happen to write so much like if you notice i actually capitalized fine-grained and then lowercase reactivity so much so what did i
[04:00:24]  say here i'm very excited enjoying the time i've been spending with react hooks the api feels very natural to me given and it gives a dimension to react i never dreamed
[04:00:32]  possible their api design is progressive so much so solidjs has taken the last few steps to bridge the gap in api with fine-grained reactivity while maintaining
[04:00:39]  its top of class performance react pushing out hooks now is a big validation that the mentality of approach patterns of fine-grained declarative data is something worth doing if not straight
[04:00:50]  up the future it was always the constructs around explaining effects and reactive data patterns when juxtaposed against something like former react that made react look more attractive but if this
[04:01:00]  is the new react that changes everything beyond just react itself i realize it is probably too hopeful to think this approach would be ubiquitous but i remain optimistic um yeah i mean
[04:01:15]  okay actually i go on to be a little bit like that's the positive what's the negative note i'm i'm just sort of left wondering if the inferior approach of technology
[04:01:26]  went out and it took six years to realize the mistake picturing where we'd be if the great minds at facebook had been working on this the past six years okay that
[04:01:33]  was pretty harsh but um i yeah i a lot of my stuff has aged surprisingly well um uh which is which is good i guess um uh i i i didn't this is
[04:01:55]  when the marketing started about six months later i was just like fine grain finding fine green react to programming this whole article is just like showing the differences of syntax and like i
[04:02:03]  i just kind of just like this is when i said like this is the thing and i explain everything this article is still good too um but i've gone better at explaining things
[04:02:12]  over time um okay we got we got the acd uh andrew clark um tweet yeah thanks i i want to see this yeah okay we might add a signals like
[04:02:31]  printout to react but but i don't think it's a great way to write ui code it's great for performance but i've heard reacts model where you pretend the
[04:02:39]  whole thing is recreated every time our plan is to use a compiler to achieve comparable performance maybe we'll end up being wrong but i'm happy about our direction confident en
[04:02:49] js and team will figure it out yeah when we do add a signals like primitive it'll mostly be geared towards serving a compiler target or as a low-level api for
[04:03:00]  library authors interesting it's it's yeah it's it's it's funny because like i mean i guess my six years or longer comment is even better because what ends up
[04:03:20]  happening is michael rawlings goes here and says i didn't find this term fine-grained reactivity but he goes back to 2016 and then seb goes we this
[04:03:28]  is you know seb from versell react core team guy he said we used it quite a lot early on to differentiate between frameworks before react often in a derogatory manner in
[04:03:38]  this thread fine-grained chain tracking is used to describe a solid like approach but if i recall it was already well established for them he's right we fine-grained
[04:03:46]  as a term was around but people didn't apply it to the reactivity they talked about they called it change detection it's it's like a semantics like a language
[04:03:54]  thing but yes this is very true i used to read all these react issues where they talked about stuff and they'd say like oh but that'd be fine-grained almost
[04:04:01]  like as an insult um so yeah i mean this i mean and as a sub owns that like he said often derogatory manner and this is is is is quite uh quite
[04:04:14]  a world's apart um i've often stated that you know solid is kind of safe where it is because uh react will never add signals to react but this is interesting that
[04:04:27]  it could have such an an impact as this um but as i told you the this is what i just said is essentially the fact that they wouldn't add it to react today
[04:04:39]  they they it doesn't the problem is it doesn't align with the mental model that they want to depict even if it mechanically is a better approach however this is the
[04:04:54]  fun part i think they're going to realize if they go down this path that the mental model is going to have to change we did this with marco and the the funniest
[04:05:04]  thing is when you start trying to explain invisible memoization with a compiler without explaining it like reactivity it just stops making sense so yeah i don't know i mean who
[04:05:22]  knows by the time they do that you know maybe maybe that will be the end of all our struggles react will have done that on the other hand that might be you know another
[04:05:31]  five year from now and uh we'll we'll have to see where solid js is at that point so yeah i i mean this is this is interesting this is the first
[04:05:49]  time that i've seen them actually talk about this in kind of like more positive light and um i it's it's it's a little bit to to take in and
[04:05:59]  think about because as as mentioned people ask dan this like weekly you know a while ago and he was just like look if we liked it we would use it that's his comment
[04:06:11]  um so yeah um yeah so we'll we'll we'll we'll we'll revisit that in the future but very very interesting if if things actually did end up converging
[04:06:25]  like this yeah i i thought they were heading more svelte than solid because like literally their memoizing compiler is basically like svelte but this suggests that like this is
[04:06:40]  why i like working with primitives do you know why because then okay maybe the developer experience isn't to where you need to be yet or whatever but like you see the
[04:06:50]  pieces and you can go okay what is the fastest possible way to do this or the best possible way to do this and then you can build it and go okay now i understand
[04:06:58]  it and the truth of the matter is solid's approach to rendering uh with the fine-grained didn't start with solid uh there is surplus and sjs you know previously
[04:07:07]  um and it's been the quote unquote fastest way to render the dom you know according to benchmarks if you believe those for since 2000 i want to say late 2015 so like
[04:07:23]  we're coming on a decade of being like very clearly like like at least according to some benchmarks the the fastest approach like not even like like like like like gap gap you
[04:07:38]  know to the point that you know people like dominic ganaway uh creator inferno one of the fastest vdom libraries is completely jumping on board with this kind of stuff
[04:07:46]  like it's kind of understood like i don't like how long do you have to be the fastest before things are like oh yeah that's that's that's you know
[04:07:57]  like it's like i guess a decade is the answer right so i mean it's fine speed and performance aren't everything too there's a philosophy thing i think it's going
[04:08:13]  to be interesting though because i mean this is one of the challenges with compilation and transparency right yeah so i mean is this is this is this is this what's is this
[04:08:26]  what the the problem is is is it that essentially people are pressuring them to care about being fast fast enough being fast enough isn't enough on its own if you're trying
[04:08:42]  to compete in a space that's already entrenched you can't just come and go like i'm a little bit faster no one cares but it should have some like performance
[04:08:54]  should have some impact over the course of a decade in terms of consideration of design when you're like okay yeah this seems like a good approach we should you know should we like
[04:09:02]  work on that or should we wait a decade before we decide to work on that right i think i think mental models are important the funniest thing is i think their mental model
[04:09:18]  is shifting like i love that art like the use effect oh man i mean you guys are gonna make me like pull it out of my my bookmarks from like ages ago uh
[04:09:27]  not that one where is it the the thing that's is it hidden here bookmarks i'm like a scroll down far enough and i look for it i'm gonna find
[04:09:37]  like just gotta look for dan dan tweets the problems my bookmarks are like too long where is it yeah look at look at this comment in react i i like that i can
[04:09:52]  write components as functions many in one file and use the s and text kind of hate templates it's felt i like that there's less syntactic noise also no runtime reactivity
[04:10:00]  compared to others tell me that's not derogatory you know like oh man yeah i don't need to dig you guys trust me the funny thing if you look there
[04:10:14]  there was a version of the docs that dan wrote that was like use effect is reactive ding like that that is that is very much you know a thing oh okay but yeah
[04:10:31]  i mean yeah i mean it's it's it's it's it's pretty funny um i i don't know i i i don't know i i think this is gonna
[04:10:48]  be interesting to see how this progresses nonetheless i thank you for bringing this to my attention i'm gonna have to deal with that um later and think think through that um but
[04:10:59]  yeah i mean the signals thing seems to be seems to be interesting because yeah even there's so many different degrees in which we can approach the signals we can look at like how
[04:11:16]  they interact with our thing and yeah i don't know it just it's it's really cool to see signals be like this kind of hot topic i wonder like if i
[04:11:25]  twitter search right now and i search for signals like like maybe maybe not hot enough to to be to be to be that without yeah i don't know um i don't know
[04:11:44]  try to try this no yeah no not we're we're still a speck of dust in the in the in the thing it was just i i got i felt like
[04:11:56]  i was getting bombarded by signal stuff this week but apparently i am just i i i'm not you know it's fine i i i it just seems like everywhere i
[04:12:10] 'm looking i i i go somewhere and then it's just like yeah people people talking about signals um yeah all right um sorry i'm just let's let's get out
[04:12:34]  of this um anyways let's continue on um i think was there any other signal stuff that i'm trying to think of that happened um yeah well i mean look at my
[04:12:53]  timeline for for me people talking more about it yeah i mean this is this is going to be the hot topic um for for for a little bit now um yeah i love that
[04:13:10]  meme um anyways it's it's it's it's oh wow anyway i i'm i'm i i i think i think i think who i think we'll uh we
[04:13:37] 'll move on from single signals sniggles all right uh yeah um yeah it's i i it's funny some of those some of those things kind of i get stuff sent
[04:14:04]  to me from time to time from outside the community um and yeah i don't know it's it's i i don't know what to do with them but um it
[04:14:15]  it it's it's it's kind of ah man i just this is the chat talk of the the town and i i think that um it's going to continue to be
[04:14:30]  for a little bit now that angular is also in there um but yeah let's let's let's continue let's move this progression forward i mean there's there's lots of
[04:14:40]  adjacent topics here what was the other one my bookmarks um uh like there there's a sense around yeah do i want to go there next no actually i want to i
[04:14:55]  want to briefly plug the react documentary um if you haven't watched it you should check it out it is really cool people don't always um uh how should i put it
[04:15:11]  people people don't always uh appreciate uh what it was like for react when they first started out like in a certain way some of this reactive stuff already existed and react was actually
[04:15:22]  the really odd one out like they're the ones doing stuff different than everyone else somehow they managed to win so hard that everyone shifted into their model and then like by the
[04:15:31]  time like my stuff with solid came out it was like everyone's not doing things that way um but like yeah the documentary was really well done the q a was even even
[04:15:46]  better as someone's mentioning chat here yeah yeah like um it was awesome and my favorite part of that was was this quote from dan abramoff which is we win not when
[04:15:59]  react wins but when the idea survives into the next generation of tools we can we compete to let the idea survive and i said that this this this uh hit me really hard
[04:16:09]  this quote i was sitting there in what in the q a live and i was just like wow like i'm so glad that dan said this because this this is this is the
[04:16:20]  feeling there i i i got this sense because someone made a comment where this came from was about competition between frameworks and i don't know if they were looking for dan to
[04:16:30]  say like oh no we don't compete with each other but dan was like no no no like look there there there's a bit of a competition here right like we do fight
[04:16:39]  to you know we do actually like compete but the idea he's suggesting is like the like he believes in react's mental model this like their their approach to like the way they
[04:16:51]  do their you data and the immutability and the unidirectional flow and all that kind of stuff and he wants this he says like react's legacy is that
[04:16:59]  you know as a you know declarative data you know the whole thing that they built philosophically if the implementation changes whatever but that that approach it continues out and it's funny
[04:17:13]  because the reason if you look at some of the comments i'm not sure everyone appreciates the comments in the same sort of way right people like oh a growth mindset or
[04:17:22]  you know like you know the i think there was some other quote tweets i saw um that's why i say to learn react not only because it's used now but it will
[04:17:33]  be for a long time that's not what he's saying he's not saying that it's a sure thing because reacts so popular that its influence will continue on forever he's
[04:17:44]  saying that if it wasn't for people especially in those early days fighting to keep these like ideas in the ui out there and improve on them and iterate on them like react
[04:17:58]  wouldn't exist and who knows like what else wouldn't exist you know like in the future based on those philosophies you know some people will always prefer this mental model even if
[04:18:10]  someone's like saying oh you should use signals or something like there is a completely legitimate mental model behind react and that's what they they like they fight for you know kind
[04:18:21]  of like the underdog story kind of positioning and in a sense i do i think react early days was kind of the underdog story they ended up kind of winning everything in
[04:18:32]  like a very crazy way when you put it in that kind of perspective but the reason i identify so much with this is like i was on the other side of it when i
[04:18:42]  got into creating solid i felt like react was killing everything i liked like reactive programming patterns composability all this stuff i thought react was just murdering it like just that the
[04:18:55]  whole equal i'd actually just given up i i was like oh no one's gonna like these patterns no one's gonna care about these patterns and like i just was like
[04:19:09]  no this stuff is really good i need to show people that it's really good like not just good for authoring it makes sense it's more performant like this is really
[04:19:23]  something worth exploring and working on and um i'm sure like if if an idea is that good it'll rise to the surface again eventually like that's my my belief but
[04:19:37]  it's like i i felt that it was important for me to to work in this direction to let the idea survive like not let like all we learned about reactivity and
[04:19:50]  knockout and all that kind of stuff just die off for this model that reacted popularized so like it's incredible to see this swing around again um because in a sense like
[04:20:02]  my original mission has succeeded right so anyways yeah this this this this this this this is was very heavy um tweet for me personally at least um and like just the the quote
[04:20:34]  well i was expecting the thanos memes um and instead of we got the three memes in one i'm curious why you thought that way ryan i feel like ryan
[04:20:53] 's going to load straight forward but yeah i well no it's just i i used reactive systems first like solid so like it was the same thing reason that they hit those
[04:21:05]  frictions at the beginning like they were like oh yeah just throw it away re-render i'm like no like picture like you gotta understand like in a sense react today is
[04:21:17]  a bit more of a hybrid but there's two things about react that didn't sit well with me first of all they they they use things that looked kind of like classes and
[04:21:25]  i did not like classes very much because my.net days i didn't like life cycle functions very much didn't like that and i i'd been building like that for several
[04:21:33]  years in dot net through the 2000s and then when i found knockout and i realized that like i didn't need life cycles i could just use the data to describe
[04:21:41]  how things worked i could compose and like all the benefits you know of hooks i was doing that in 2010 and then react comes out and it's like no classes life cycles and
[04:21:53]  yeah we don't care about that data stuff it'll just re-render like sure it's simple but it's like you you start thinking yourself you're like well there
[04:22:04] 's no way that could possibly be more optimal like how can diffing something be better than just updating it and then i was like i don't like this control why like why
[04:22:14]  would like i'm kind of giving up the ability to say this thing updates it's going to re-render like the mental model just never sat with me but i i
[04:22:22]  had to admit i'm like i saw jing chang's like uh talk about flux and stuff and i'm like yeah yeah this this data directional flow stuff is really awkward and
[04:22:32]  everything's pinging in some places like sure i know how to handle it but you know i've already been trying to like talk to the junior devs on my team and
[04:22:40]  be like okay like let's not use those patterns or here's a way that we can work around it so like i was like the problems it solves are real but i was
[04:22:47]  like am i going to give up all the power and control of having primitives to to do that and i'm like no not a chance right but no no one really
[04:22:57]  thought that way that much so like i just as i said i honestly didn't think anyone would like what we're what i was working on it's very it was very weird
[04:23:06]  the day that react hooks were released right like it's so it's so hard to put a concept because people come to me and like why would you build another framework when
[04:23:19]  we have hooks and composition api and stuff i was like that stuff didn't exist it's just taken this long to to actually you know push the dial right i wonder if
[04:23:32]  i had been more involved in communities or if i'd found help sooner in different places and just hadn't been some random developer working out of a startup in vancouver can
[04:23:41] ada if things would be different i like i don't know um i just like believed in what i was doing and at first thought it was my thing and then eventually became
[04:23:53]  other people's things i don't know does that make sense to anyone so it just like i mean the feeling started with and then yeah but the thing is like most of
[04:24:18]  those pieces kind of already existed in knockout like this was already a pattern it was just so odd to see like a whole generation of front-end developers start developing and
[04:24:30]  have like just make a bunch of assumptions of like how good things could be and i was just like no they could be better but oh i i see you like i get it
[04:24:40]  like oh now your data is like a primitive like wouldn't it be better for just plain objects and classes and like i'm maybe you're right you know um it's
[04:24:48]  it's hard to be that sure about anything um do you know i mean like so like yeah i you know but yeah i mean this this this is a big topic for
[04:25:15]  me um yeah i think i think i'm gonna move on for now but like we're just talking about how stuff here people go to the solid repo you're still gonna see
[04:25:28]  a story of one guy by himself except for otanashi i don't know name like seriously thank you basically my type scripts savior reason solid has decent types um in the
[04:25:40]  last uh you know like this is a couple year period here you gotta understand here like yeah i get the projects here but i this doesn't represent the like if you go into
[04:25:51]  any of solid's other repos you'll see like i'm not even present so you know like the website or the playground or like yeah it's funny so people give me
[04:26:00]  all this credit even for solid start but can i show you can i show you you guys something about solid start um uh if i go to uh insights contributors here everyone's
[04:26:12]  like like okay nikhil's number one but ryan's number two and they basically have the same number of commits this is also nikhil you just use a
[04:26:21]  different username um so yeah just just yeah anyway i but i mean i can just literally go through the repos it's just it's it's it's not even funny how
[04:26:38]  little i contribute to everything else um yeah here we go docs effort i am oh i did i did i did do 11 commits there let's you know uh solid playground i
[04:26:58]  just want to kind of point out that these things are not something that can be accomplished by an individual um yeah there's our buddy milo you know like yeah i've
[04:27:12]  never touched this repo like and if you go down the list of projects here you're gonna see common trend maybe i made one commit this this is like things grow beyond you very
[04:27:33]  quickly um as soon as things like get rolling otherwise this just doesn't happen right so like i i just wanted to i just want to kind of point this out here the
[04:27:57]  this on the shadow because this this came out because there is a comment at the end of the react documentary where they quoted something mishko heavy said where he said change
[04:28:06]  usually starts with one person it like doesn't start in committees it starts with one person slowly winning other people over to the idea until it kind of like builds up to a snowball
[04:28:16] ing effect and a few people um were basically like no i want to destroy the myth of the single individual you know thing um especially people who are seen that way and that i
[04:28:26]  can understand like rich harris is one of the people who went there and he did a big thank you list of everyone in this felt community and it's true but like
[04:28:33]  when you're in that position like myself or rich or evan like you're gonna say that because you you think about it and you're like man how could have i done
[04:28:43]  any of this without other people like the sheer amount of work is insane like it just there's no way you could possibly picture it getting there um but i will say that there
[04:28:54]  there for all of us there was probably that moment at the beginning and it depends on how long for me it was actually several years where you you were just working through ideas
[04:29:03]  and doubting everything that you probably are doing and just like is this a thing i don't know and that that might start with a smaller number of people um yeah
[04:29:33]  so another let's see is there anything else in the bookmarks i wanted to touch on before i move on to the next topic sorry uh bookmarks no that's in here
[04:29:44]  bookmarks yeah i mean oh i while we're talking about andrew clark we should throw this out here this is big news um andrew joined for cell um this
[04:30:03]  is part of why i ended up posting that image again from the stream because i i was being a little bit i don't know what the term is i was playing a little
[04:30:15]  bit with the idea that versell and and next uh were kind of like our sir like next was react essentially and when two prominent members of the core team uh seb and
[04:30:29]  andrew joined versell it seems to very much create that narrative i think ultimately getting react distributed outside of meta is going to be a very good thing for react i think the
[04:30:42]  challenge is if personalities can deal or handle with this because here's the problem pick picture like we talked about this previously on stream where uh dan had said something along the lines
[04:30:56]  of like maybe i even have the quote in here this might be subjective but one of the things i like about next 13 app directory is how it gets rid of a bunch of
[04:31:04]  next isms yeah it's still raw and metaphorical ios 7 phase but it feels refreshing basically when the react core team looks at next.js they see react right
[04:31:15]  that that that they've been slowly adding pieces to remove all the unnecessary like git server side props and stuff and what they're like is this is react as it's meant to
[04:31:26]  be the problem is there's other players out there like um remix or gatsby or whatnot and well react team sees next and sees react what's happening is i think
[04:31:44]  the remix and gatsby guys are seeing react and seeing next and this is a really odd mismatch because like you need to bring everyone in get them on the same page
[04:31:58]  and working together but they still want to keep their unique identity and as react moves up the stack and starts taking on more of the responsibility and you know establishes the patterns
[04:32:08]  there's this really interesting question or tension here all of a sudden because now if you're i don't know ryan florence or whatever and you're looking at stuff
[04:32:18]  and reacts like team is like you should you know do this pattern and he's going well like so we should just become like a copy of next as like there's going to
[04:32:26]  be like like there's a bit of a interesting potential for friction there even though from pure stance this is react like it's not next as it's react that's actually
[04:32:39]  hijacking next but i don't know if everyone sees it that way so yeah um i just wanted to kind of point this out here i think i think we need to
[04:33:05]  see react kind of move beyond the stage it's at but the the next period of time is going to be interesting because there's a lot of people invested in react and extensions
[04:33:18]  of react and if react and next basically become the same thing um it makes it it makes it difficult um for you know egos and pride and stuff too so i i
[04:33:32]  will we'll see how it plays out but i i think i think this is one of the most challenging parts about this um what if you memorize your memorization so it
[04:33:43]  runs even faster i love this joke because generally it's the opposite it makes it slower so i i i thought that was hilarious lauren um uh yeah okay here's a great
[04:33:55]  one the biggest competitor to react right now is react there's a lot to unpack here and i'm probably not going to do that on the stream but i i think this
[04:34:10]  is true whenever you're you're the biggest fish in town like you're the thing it's it's reacts game to lose not anyone else's game to win so to speak
[04:34:26]  um react has to figure out how it maneuvers the next stage of things as it migrates or shifts along you know it's it's it's tricky yes i yes
[04:34:35]  this is undoubtedly true to a certain degree but i actually don't think the react core team actually believes this that it even if it'd be nice to write that narrative i i
[04:34:51]  think they honestly believe that they're just bringing next along with them um so yeah i don't know we'll have to see i mean this could be jordan trolling
[04:35:08]  um but i don't know i i tend to take things seriously i this this this also might just be like saying like nothing is as good as react blah blah blah you
[04:35:22]  know like and that's the the comment but if that's the case i mean it's it's yeah i mean this this kind of leads me up to something else that i
[04:35:32]  i wanted to that i wrote down here which was that um where was it i haven't talked enough about how server points and server functions are architectural in the way say single
[04:35:44]  page apps or mpa are with islands they asked little client isomorphic solutions that don't already provide there is nothing to tie them particular framework or library remember last stream when
[04:35:54]  i was trying server components and i realized that they were completely isolated i was like oh my god you can't pass promises across i know they're working on a pr to do
[04:36:02]  that or whatever but generally speaking you could offer the experience of server components for the most part without with having two separate frameworks right and i like this is what i was kind
[04:36:15]  of talking about i was like beyond showing up in a framework near you you know count on appearances agnostic solutions things like astro and maybe other languages i started like going
[04:36:25]  down this thing i had a great talk with greg from uh leptos i'm like can we can we just like make the outside of the server like the server components
[04:36:32]  be written in rust because the thing is we saw last time client components never re-render or never render on the server after initial load so if you could use something like
[04:36:40]  inertia js kind of style where you can just like offload the client rendering on the first render for those islands so render mostly in rust offload the client islands um on the
[04:36:50]  first render so you get the initial page load it the communication is actually fairly straightforward you just serialize the data into it there's no back and forth just the it's
[04:36:59]  like calling a function it's like an rpc just like go in node render this island out html string inject if you could do that then every subsequent page navigation
[04:37:12]  with server components never needs to touch the javascript layer i don't know why people would want to you know necessarily author in two different languages it's just an interesting observation
[04:37:22]  from my perspective that it will be quite possible to offer this experience in a way that like could be split across languages um this has been a problem for a while but literally
[04:37:33]  javascript has a stranglehold on this you know front to back-end communication if you want to have an optimal client experience it's interesting to me that you could
[04:37:43]  basically like farm out islands initial render and then basically have a full rust back-end um how much do the core teams in next react to talk to you there because you
[04:38:00]  know i mean they are the same people that's like i mean seb is like it's not even talk to each other like to certain degree they're like literally working on next
[04:38:12]  and are on the react core team in some cases um like yeah that that was a whole controversy seb stopped working at meta and was making prs against react like day like
[04:38:25]  the day before next conf um like and people like would anyone outside of meta be able to just like come in and like make a pr last minute to you know get something out
[04:38:35]  for next conf so yeah i that that's the thing so i just communicate not only they communicate all the time they're like partially the same people um but yeah anyways i
[04:38:47]  was saying is we're already seeing the influx of server functions from blitz salt start leptos quick react thing i was talking about remix technically they're just talking about
[04:38:56]  more granular loaders and i'm saying server can be the same it can be commoditized um i'd be surprised by the end of year we didn't have alternatives bo
[04:39:03] asting benefits and dx size and performance i was hinting a little bit about the stuff that we're working on um with tanner earlier um you know i i think i
[04:39:11]  think it might be interesting to see with astro how we can generalize this um now that we're all kind of aligned so this is one of those exciting things i've
[04:39:20]  been specking it out seeing what a universal server component spec would look like for both single file component styles and not you know like because like think about it if astro had
[04:39:29]  server components you literally could just be like oh i've got server commotes with preact salt like all of them just bang like and the funny thing is if it was
[04:39:37]  astro you'd probably feel it because you'd be like oh i'm just gonna make a simple islands demo thing and then turn into server component mode and then like bang you
[04:39:45]  know it's still like oh how big's my site oh 10 kilobytes of javascript like like i i think i think this is like this is we're going
[04:39:58]  to see this branch out a lot in the next year um so yeah i um well they don't quite do but you you see the potential there right i think there's
[04:40:20]  some considerations on stuff yeah well no no the astro file is the server component what i'm getting at and what i'm trying to say in this whole tweet is that
[04:40:32]  the client part the island part astro astro already does this so like literally if you took astro and then let them have a routing solution essentially that could handle async
[04:40:44]  and can ship html over the wire and then do the same diff that they do in their hmr like you and you know know the like how to load the
[04:40:54]  right client bundles all the stuff they already do then you basically have server components um the only thing the client has to implement is context how the islands talk to each other
[04:41:04]  but that could be implemented today even without the server component thing like this is completely doable um like this is not this very this will not be a next only thing for very long
[04:41:16]  and as i said i think a lot of the other solutions are going to like kind of people are going to be like oh why why why is next so big or you know
[04:41:23]  you know like that kind of thing like this yeah yeah yeah but the islands are out of frost yeah but i'm saying that effectively that's where it comes to um i
[04:41:38]  i've figured out the last little gaps to to kind of tell the full story so yeah i i think this is in this is very interesting right i i mean the author
[04:41:54] ing experience is still a question i wonder if frameworks still want to own it like solid start but the thing is right now um we're going to be really close with astro
[04:42:02]  so maybe the solid start built on astro solution and the astro native solution if they choose to go that way um can be developed at the same time using the same
[04:42:10]  building blocks just just saying like this is and yeah if astro gets it i mean it's very compelling because suddenly you're just like i like i could literally do this with
[04:42:20]  anything like yeah i don't know yeah i'm yeah this yeah it's interesting stuff um yeah yeah and yeah yeah i mean server functions hot right now that was another treat
[04:42:39]  because when people are reading what am i talking about server functions servers dollar sign like the stuff that we talked earlier about with tanner it looks like we have a used server coming
[04:42:49]  from react which is basically their version of of server components it's in a separate file but you can basically like do a use server and import from that file and that function
[04:43:02]  will now always run on the server via an rpc call you see so yeah effectively creating an rpc this using json serialization arguments but more utils coming
[04:43:11]  blah blah blah okay yeah but this is essentially react adding server dollar sign in their sort of way um so like they're they're using their directives because they want to make
[04:43:24]  it part of their component model like they want people to package up server modules and client modules and they want that to be on npm obviously i have a different idea here
[04:43:34]  and i don't know if it's better but like that's i i'm gonna kind of explore me and tanner are gonna explore that um but the thing that i thought
[04:43:44]  was really interesting about this and i highlighted the most interesting part of this is is isn't that multiple frameworks have landed here independently you know semi-independently like solid
[04:43:52]  has them quick has them everyone you know got them but that it's a react proposal not a next one it allows it to be standard that can be npm packaged up but
[04:44:00]  it requires other tools to play along see so react is turning into a spec like i called it a platform here but i realized afterwards um you know that react is actually turning into
[04:44:10]  a spec it's not a library it's not a framework it's trying to turn into a spec almost like the browser so like i was kind of like joking around like oh
[04:44:18]  i can picture people being like make a can i use for react and be like oh uh remix next you know like gatsby you know like that's like but it
[04:44:29]  will be bundlers too veet like they're they're basically turning into a spec um and the fact that their their solution is playing on like use client loot server that
[04:44:43]  parallels um that that that was kind of a realization i i'd come to myself in a sense solids i haven't added dollar sign to our islands but we we had we added
[04:44:52]  server dollar sign an island dollar sign and client only dollar sign and you know like you can start seeing that there's these kind of parallels in these kind of patterns whether directives
[04:45:02]  or or uh they're calling yourself directives at the top or um decorators like what solid does wins um or is the best dx i don't know but it's
[04:45:13]  it's interesting um to see react take this on rather than like the meta framework take this on but it's yeah it's interesting someone talks talk about the andrew and
[04:45:35]  the signals thing yeah i mean maybe they feel like they have to get in the conversation i felt like the memoized compiler thing was like a reaction to svelte like
[04:45:44]  they saw the svelte and they're like oh we need to show that we can make the dx like they have so many things they want to do and they have the
[04:45:53]  ability to do it with so much backing um but you know at a certain point you still have to go and build that thing um so i think at their point right now they
[04:46:03] 're like look we want to do all this stuff and they're just like telling you that like if you stick with us we'll get there one day um all right where
[04:46:19]  am i uh i need to go back to my profile okay cool um was there anything else under bookmarks um no i mean there's a lot of feelings in the ecosystem
[04:46:35]  here jason miller was saying we implant the server components decide not to pursue the solution preact has no need for concurrent mode we are pursuing solutions that reduce or move overhead
[04:46:44]  not solutions that amortize overhead yeah um that that's kind of like the the thought here a lot of the work that react has done is is about isn't about
[04:46:54]  like removing costs but like spreading them out over time and preacts like look we just want to cut the costs all together this has been a challenge myself as well because salt has
[04:47:06]  been so performant that we've like cut the overhead but then you're like you kind of go like is there going to be a point at which you will need to am
[04:47:12] ortize should we seal those doors i don't know that being said i take this to mean time slicing i think concurrent rendering in this in the you like the navigation io
[04:47:25]  story is actually really compelling from a dx standpoint i think it creates a really nice experience but time slicing might be something you know we have an experimental mode that might be something that
[04:47:36]  we just lay to rest it might just not be valuable enough when you have a system that's efficient enough but i don't know yet because react also has to deal with
[04:47:43]  a different type of skill than any of us are dealing with oh question yeah let me go yeah i thought they had granular diffing only time parts of the dom sort of yes
[04:48:02]  uh it is more advanced they have shortcuts and and like optimizations but it's still people conceptually like my understanding at least is that it's a component that like the
[04:48:14]  view of the component that we renders but they can they have ability to go like oh this branch doesn't change like they have more shortcuts in in terms of optimization optimization but
[04:48:25]  there's still very much a vdom uh cost like i forget view uh i brought this up a few times on stream view 3.2 quintessential quintuplets added
[04:48:37]  this feature here about vmemo where they could tell the vdom not to like to cache it essentially because the problem with view is um not the like the challenge with the
[04:48:50]  vdom reactive hybrid is that if you start wrapping each component create effect it's it has a cost so and view kind of also encourages you to make larger components with a single
[04:49:02]  file component structure so there's like this weird tension where like as you make your components better because it's nicer for authoring and you reduce the the that overhead of having
[04:49:12]  as many reactive wrappers um unfortunately the vdom gets less efficient because vdom likes smaller components so they added a way to say like hey make it like a sub vdom
[04:49:24]  component in the component with this vmemo and the thing is before view added this trick in the js framework benchmark they were much slower they're more like uh pre-
[04:49:33] act um range on performance where now view is the other of the like most popular frameworks view is the next one closest to solid um they're still you know quite a ways back
[04:49:47]  but um they they're they generally benchmark better than svelte because of this trick and that trick is again suggesting that they have a vdom that re-renders
[04:49:57]  and they're just giving you ways to annotate it so yes view is still very much even though they have optimizations they are still very much uh like a component re-
[04:50:07] render kind of system their setup function is never re-rendered but their like render function or template does um it means that like when you have a cost um like like
[04:50:21]  the idea what react's been doing is basically scheduling they're going like look if something's really expensive instead of running it all at once we're going to split it and time
[04:50:30]  slice it so you we can like prioritize let the browser handle events and then we'll just kind of as the work finishes we'll bundle it up and then show it on the
[04:50:38]  screen in a consistent manner that's what like time slicing does it lets them instead of blocking split up work and then displaying it when it's ready um because you have to
[04:50:47]  be consistent you can't show partial updates to a ui um so he means amortization and that thing is like splitting up the work rather than getting rid of the work
[04:50:56]  because there's like an argument with reactivity you're like well if you're not re-rendering a bunch of components then like aren't you gonna like just not be
[04:51:02]  doing the work in the first place i don't think that's 100 true honestly i think that's like a bit simplistic but we can push that for a while and probably
[04:51:11]  be right long enough that anyone who pulls up a simple benchmark on their computer would be like whoa look how much faster we are we don't need that um because the truth matters
[04:51:20]  like adding time time slicing concurrency and stuff makes base react even slower like it actually um it actually slow i think someone actually submitted to the js framework benchmark and it made
[04:51:32]  it react like 20 slower um even though it wasn't doing anything yes yes if you if you literally look at the slide that evan presented at the compile output you're just
[04:51:50]  like oh and you picked up solids compiled output and put them side by side you'd be like okay someone definitely took notes um yeah um yeah it is basically just solid and
[04:52:00]  the performance i i as far as i understand is probably going to be very very similar but again they're resetting their ecosystem so it's interesting like i don't know what
[04:52:08]  happens does everyone copy what i'm doing with solid and because they have more momentum even if they have to recreate all the libraries solid becomes unnecessary i don't know or does
[04:52:17]  solid keep on innovating during this time period and we're not done yet and we got way more in store that people can't even picture not sure no it's not but
[04:52:28]  it it makes it worse that's the thing right like it's not about rendering faster but it makes it slower so it like it's an interesting trade-off for when a
[04:52:45]  lot of people are never going to hit this problem but yeah um let's continue uh is it time for that conversation let me see here um this was a fun one i
[04:53:04]  got called ceo of signals i've updated my twitter profile appropriately um uh what am i looking for yeah server functions um another announcement quick released their server functions what's cool
[04:53:21]  about quick's server functions is um i got a little story behind this because i was at the conference that shall not be named in november and uh we were sitting there around
[04:53:32]  with me and manu um in the end of november and i was i was like i was like showing off solid starter bin and i was like man you like check
[04:53:40]  out this like this this thing that we did with the with the server functions it's kind of like quick and and manu saw it and he was like man like we
[04:53:49] 're already 90 there like literally we just like like our our framework already does this you just like just need to like make the mechanism around the stuff um and yeah like it
[04:54:02] 's it's cool to see how conversations like that kind of start and propagate and then uh back in early december yeah that checks out that's right after um the conference um
[04:54:12]  they they kind of went back and they they added their version of server functions and loaders and actions um and the cool thing is quick already handles situations that no one else
[04:54:24]  does in that they like handle closures so you can actually like put a server function inside a component and have it read from client state via closure which nobody else does um so
[04:54:33]  this is really kind of cool to see their approach i don't know what the implications are of that like i don't know how actual useful that is to close over something versus
[04:54:42]  pass it in in solid's case especially because of reactivity i don't know like if you would like subscribe somehow like i don't know if you can make the react
[04:54:51] ivity work through that hoisting properly or if it makes sense but it's it's just interesting this capability of the compiler and i think it's really cool because while i
[04:55:00] 'm not sure if the usage um has a case yet it's super powerful what they're doing and that's just quick in general in a sense these special applications of stuff like
[04:55:11]  we're doing with bling is actually like the whole quick framework is just that it's just like a bunch of those things and they can just like add new ones very
[04:55:22]  simply just because of the way they're they're architected so i it's it's very um it's it's it's unsurprising but what i like about it
[04:55:29]  is that we're all kind of aligning on like what we're trying to do with it it's the product less the technology you know like so um very very very cool
[04:55:37]  to see that as well um and also my beat conf talk is up finally i've been waiting i i think i was literally the second to last talk to go up but
[04:55:46]  this is one of my favorite talks of the year i this is where i introduced solid start server functions all this stuff back in october but i actually recorded it back in sept
[04:55:53] ember and talk about stuff still being relevant because i um it was a great talk uh i even talked about the whole library versus framework thing and it's so funny because i didn
[04:56:04] 't know react was going to say like oh you need to use a framework to use react but i was like literally this whole talk is like i never want to say that
[04:56:11]  you need to use a framework to use solid um it's just it's really funny juxtaposition and obviously like everyone's talking about service functions this week but um this
[04:56:20]  is what i recorded back in september um which you know yeah i i think i think this is a really great talk um so anyways uh it might be it's pretty
[04:56:33]  cool uh close i never we were never able to get uh marco's uh client-side performance as fast as solid we got it close uh with a few optimizations but
[04:56:45]  i think their goal right now mostly is just to kind of it was to arrive at a similar point as inferno i don't know where they are now but i know
[04:56:55]  that they they are mark i've seen marco's approach get as close as 0.02 to where solid is so i i i don't know if it'll beat it
[04:57:05]  and especially with the new stuff we're working on i'm not expecting it to beat it on that performance but i expect it to become close enough that like no one really cares
[04:57:12]  it'd be interesting if we get to a point where like view vapor comes out and react builds whatever they do and this performance thing is is not a thing but i mean we
[04:57:21] 'll have to see everything that comes there like as i said it's so interesting to me because this level of performance has existed basically for a decade like it just hasn't
[04:57:30]  changed so um why are we caring about it now i don't know you build a to-do app with marco 6 i'm not sure i already built a to-
[04:57:41] do app with marco 6 um but we haven't they never they didn't want to publish it because worried about things would change and um it doesn't have key features
[04:57:52]  that ebay needs like streaming at the time so it's like really awkward that if you publish it and then people start using it and then like it had to change because of
[04:58:01]  some async thing that weren't handling it just like it just yeah i think marco and quick um are going to just be on their own vein kind of like separate
[04:58:18]  like um the stuff that we've been doing with solid start um and maybe with astros stuff you know uh is essentially does mpas does server components which is means that like
[04:58:28]  when you put the full package together even if solid itself it's just the library that the package is like in an alternative to say using marco or um using quick or
[04:58:42]  whatever so i don't expect those kind of things to work together so to speak if that's what you're wondering um anyways uh let's keep on going uh yeah did you
[04:58:58]  already talked about this the syntax just dropped before the stream it's actually pretty good i i wasn't sure to expect from the syntax um podcast but they did a great job
[04:59:12]  of asking questions and really listening from me like a lot about the i've talked about these things before like origins and but i think this is one of the best that i've
[04:59:22]  been able to describe solid in a way that people could digest it um okay we already did the big news earlier with tanner um let's talk about i i got i
[04:59:33]  think two more topics for today um and yeah yeah i i could probably find that do you know what the problem is i don't i almost don't want to look i think
[04:59:56]  i already did look at this one sorry how do you spell it academic mind aca dem mind solid i probably could just look up solid js yeah it's all better react
[05:00:09]  34 000 views in one day oh man i'm not gonna watch the video right now um i think i already watched it but i don't even know if i want to read
[05:00:23]  the the comments section here this this is this is what happens whenever someone um discovers solid for the first time i wonder about solid native okay sure solid is great but unless it
[05:00:40] 's adopted by companies and community rallies to build password not talk about react blah blah because you know that's true uh better people won't use it because they can't use
[05:00:55]  mui or similar and reviews themselves it's funny we actually have an mui um thing but of course no one who comments on youtube will actually check that so solid just react
[05:01:07]  with a hash map that's funny um let's talk in two years well it's already been seven okay let's keep on going react native see this is a new catch
[05:01:22]  point for people the the the the native script isn't enough we need to employ a team to create solid native solid is similar to view somewhat another month another javascript framework
[05:01:43]  yes that's right it took me a month to create solid oh that's a nice comment gsx is just wrong anyways i don't even know if i should waste
[05:02:05]  my time looking at the comments here um i find that there it's probably it's yeah we're not going to do that anymore yeah what is it called let me yeah
[05:02:23]  we we have lots we have like a handful of of component libraries um my favorite is probably you know what's this one let's see here it's docs yeah i don't
[05:02:42]  know there's a few ones that are actually a lot better like that are really cool like the people i think hope ui is compared to chakra and then something i think
[05:02:53]  it's called cobalt yeah yeah pretty much that's all they're going to say but my favorite one is like oh a new framework bubble fun it's like yeah
[05:03:11]  oh yeah yeah sorry marco six is untouchable in small bundles just fyi as far as i've i've seen the it's gonna be a very long time
[05:03:20]  until anything else has bundles anywhere near marco six i was just sorry i took that part for granted i was talking about the performance in the client marco six bundles
[05:03:29]  like it's like it's like it's like it yeah yeah cobalt yeah that's the one i was looking for um yeah it it it it's yeah
[05:03:56]  was it cobalt dev did i get that right this this library looks very promising i believe it works with ssr um it's i think it's headless or
[05:04:09]  something i i don't keep track of this stuff what is this is a ui toolkit for building accessible web apps designed with solid logic access provides settle lower every component of
[05:04:19]  primitives yeah follows best practice accessibility composability unstyled yeah this is there there's yeah there's some great libraries here there's another comment some kind of design system added
[05:04:29]  support i i didn't check this out but do you guys know what what's this flow byte integration tailwind css kind of thing i don't know um i'm i
[05:04:41] 'm not sure there's so much of the stuff that i'm not actually i don't keep track of it yeah i we try and link it all on the resources page
[05:04:53]  um so i mean we don't get everything here resources or actually is it packages the right one i don't know components what if i just do this yeah so sewage
[05:05:12]  style components motion these aren't all the flow byte yeah anyway yeah i mean i guess we we're only listing like 200 maybe 250 packages here maybe 220 but 58 130 yeah yeah
[05:05:36]  whatever yeah there's probably more out there in the ecosystem these are the 250 that i know about is there a ui category yeah what's this hero icon solid icons in
[05:05:52]  motion and loom phosphor what's that solid particle solid form action solid reach felt it's a form one solid 18n there's a lot here solid flip solid headless
[05:06:03]  tip tap dismiss form direct dnd so drag and drop i guess tip tap solid toast markdown i18 ends late i don't know okay hope ui the original capacitor
[05:06:17]  yeah spring preview it doesn't look like cobalt is here sorry there's a lot of ui libraries here solid table 80 grid yeah anyways we don't have to
[05:06:34]  we don't have to you guys can look yourself you don't need to have me go through the the dozens of libraries um um yeah for yeah we have motion one
[05:06:52]  but not framer yeah yeah yeah we we need we need to establish that i there there's some big stuff that's the there's some big stuff that's coming out
[05:07:06]  very soon um and we just need to be better at talking about who uses it um it was funny we yeah this stuff just takes time you know that that's it it
[05:07:21] 's a slow roll at the beginning but once we get rolling um sorry uh i think i said there's two topics left right and uh one of them was uh what was that
[05:07:36]  this one yeah okay let's just let's go into the last two topics okay um yeah i mean there's there's cases like this where like there's some internal tools
[05:07:50]  being built and stuff yeah prime prime uses solid during his day job which is amusing to some people then he uses laptops when he can't like he signals all the all the time
[05:08:02]  js and uh rust um but uh yeah i those kind of things aren't like the big like we built our whole product on solid and there's a couple of those kind
[05:08:13]  of coming up sooner okay so this this is uh all this server function and server components and stuff has caused a bit of a backlash or like we have talked about the recent trend
[05:08:24]  among frameworks to promote a pseudo javascript it looks like js but the semantics are not the same the semantics are also not documented because the point is to trick you
[05:08:31]  into thinking it's normal js my feeling is i have the rules of code when i'm writing i know most of the rules of javascript i don't know the
[05:08:37]  rules of this thing but doesn't do the normal thing that's why i'm a big fan of dsl they clearly delineate from normal code this is a great point
[05:08:46]  right like the like when i was saying i was having a hard time with server components i was like this is why i like astro astro could have dot astro files
[05:08:56]  it's very clear that my server components are not my solid components like very clear whereas like you start going like well if like if you suddenly have like rules where you're
[05:09:08]  like okay if i'm use client here i can do this if i don't have it i can do this if i'm you know a server i can do this like if
[05:09:16]  you start injecting all these different sorts of of of rules um in into the setup and the stuff all looks the same you start going like it like what what what is the
[05:09:27]  hidden thing you know did i not scroll the top of the file and check what mode i'm in or whatnot and i'm i have to admit this was part of my
[05:09:35]  reason for the server function dollar sign thing because i like i was kind of like i wanted to put the decision as close to the end user as possible like at the point of
[05:09:44]  i'm going to use this not at the point of authoring but it is an interesting question because i'm sure he's not a big fan of of that as well
[05:09:53]  um um right there's yeah guiding star for remix requires too much magic i i think it's funny but then someone was like remix you're guilty of it with your magic
[05:10:15]  exports the thing is everyone has a different level of comfort here about what to do and nothing highlights this better than where i was what i actually bookmarked rich harris is
[05:10:27]  co-signing this take i need to put my taken essay form by the meantime i'll settle on co-signing this tweet it's been head spinning to watch it
[05:10:34] 's just javascript brigade represented by multiple frames gleefully embraced butchered semantics do you realize how ironic this is i get what he's saying okay check
[05:10:45]  it out his his his he so i guess what you're saying we should have used dot jsx instead of js right because like that's what came to my mind too and
[05:10:57]  i'm like we do use dot jsx and solid i guess it would be equivalent to svelte versus js i'm not talking about jsx i'm talking about
[05:11:02]  server functions like rpcs that give you illusion type safety remix is co-location so the magic exports fast right impression of tree shaking quicks event handlers that break
[05:11:11]  after valid refactoring he's talking about the fact that the dollar sign functions like literally it's you like because serialization boundaries are there so you could just like change a
[05:11:19]  bit of code and then suddenly like like like it's not like you're no longer serializing the right stuff so it's like it's funny though because that that that
[05:11:30] 's not that this is actually a little bit of a jab i guess i it's more of that he's just saying like the dollar operator and quick like the way the dollar
[05:11:38]  signs work and the closures and stuff um but the reason i found this comment so interesting was um to me at least um you've been very clear as well there's
[05:11:56]  a new language that uses syntax but folk but fork semantics i think community and maybe salt learners have been less clear on the outside an outsider so it's just javascript
[05:12:04]  with felt users dunking on other frameworks yes so this is why it's ironic because he's right technically he he's very clear at delineating that in a separate
[05:12:12]  file but this is kind of where i'm getting getting at um on the on the thing is because the people generally don't um yeah i actually responded to i said this is
[05:12:27]  the world you kind of soon sown to a degree no one notices the dots spelled at the end of the file you asked me once why i thought marco didn't catch
[05:12:35]  on this is true rich harris asked me when i talked about how awesome marco was and there i said there a few reasons but mostly that they tried to create a
[05:12:42]  language instead of hijack one the common thread is new dsls are something only their creator can love what people learned from svelte was warping semantics is an
[05:12:51]  acceptable way to deal with shortcomings of the language it's also cheaper on tooling like rich has a gist where he explained how solid is or sorry svelte is secretly
[05:13:01]  a language and how he didn't try to conquer the world and he he used it but what it effectively did is you think that react compiler is not inspired by svel
[05:13:09] te to a certain degree like the what svelte showed us and showed the world was that you could just people were accepting of you completely mangling the semantics of j
[05:13:20] avascript and that was more preferable than creating a new dsl that did it and it's funny because he's right oh it's in the svelte file
[05:13:29]  but that's not that's not like the the hook what people get that the hook is it's just javascript and we we continued on this conversation for a bit um
[05:13:40]  you know and where was it shortcomings language um i find most languages well designed they appeal more to language designers though consistent elegant sound are not what brings the masses it's not
[05:13:52]  unlike bringing new javascript frameworks to the world yeah um okay where did i say here okay i've gone down rabbit holes trying to accomplish the goal rather than introducing a
[05:14:01]  new syntax i'd solve the problem instantly right i i talked about solid script a while ago this whole idea of what our reactive script like what that would look like have a stream
[05:14:08]  on i have an article on it we've become a world of compiler macros like when so when i look at all this stuff it's just like same stuff like all the
[05:14:17]  examples that rich gave there are all just different examples of different people's comfort levels but all kind of do the same thing so while we can debate the merits of clear boundaries
[05:14:28]  this is javascript today maybe we should be laying babble or browsers couldn't keep up or the fact that js isn't a data flow language but when just js react
[05:14:35]  of all things adopts a compiler it's the world that is warped so he he's he goes on about adjacent syntax and stuff you know and uh we change the
[05:14:49]  meaning of export and dollar sign and equal and and what i said to him is interesting where we draw lines i get called out for compiling ternaries inside of solid js
[05:15:01] x which i understand but justify for me svelte changed the meaning of let conceptually right from the very first variable you declare it has different semantics i do understand
[05:15:11]  mechanically it is the equal sign that does it like the compiler looks for the equal sign but the let like you change what the javascript variable is or and he's
[05:15:18]  like well it's actually let and const but yeah you this is interesting to me because everybody is guilty of it even the guys who like claim that they're not guilty it's
[05:15:30]  almost like a superiority thing something i'm not talking about svelte specifically because i don't think rich doesn't have that kind of ego but like when people are like
[05:15:37]  we don't use a compiler we just do magic exports or whatever like it's it's it's all this slippery slope of different syntaxes and how much we can kind of
[05:15:46]  convince people that it's just javascript um i don't know like should we care that much is this is this the hill we're all gonna die on is it
[05:16:00] 's gonna get really confusing when people try and figure out what's going on in a couple years i these are all possibilities right so yeah yeah yeah yeah yes and it's
[05:16:25]  been for such a long time this is what javascript is i talked on an article about javascript stop being the like the language and start being like the machine or
[05:16:34]  whatever like some poetic thing about a javascript soul like this is what javascript is now it's babble did this right like it's funny because there's
[05:16:46]  a lot of people who are like trying to go all the way out but even then like if you're like a big dino fan and you're like look we don't
[05:16:54]  use builds dino still uses builds so like we're all part of this thing like you know like fresh still has to build jsx you know like that's why this
[05:17:11]  isn't worth getting into like a holy war battle about distinctions here you can say i don't like this api but as i talked of earlier with about the tanner
[05:17:20]  i i i honestly i'm not going to be the one to give you that opinion i'm gonna give you the tool that lets you do what svelte does lets
[05:17:28]  you do what you know maybe even one day close to what quick does um but i'm not i'm not going to tell you which one you're going to use right rich
[05:17:39]  is very much concerned about that because he's very much concerned about how people approach the web like how they learn how they look at the platform i'm much more concerned of enabling
[05:17:51]  people to do what they want to do so it's just a different place on perspectives here so which is why i'm much more lenient and then i find it a
[05:17:58]  little bit amusing um that like everyone has their comfort level and their their place i just want to stop spending a day setting up my dev environment yeah and that's that's the
[05:18:13]  thing right these things kind of move together right like don't get me wrong there there's that whole thing where they're talking about you need a framework to use react like next
[05:18:21]  you're right if if someone went back to 2015 and was like here's next js in 2020 or 2021 let's go with next 12 before 13 let's just use that
[05:18:34]  as the benchmark next 12 and here's webpack 20 2016. i want you to build the experience of next using webpack um and tell me that you don't need
[05:18:47]  a framework yeah i mean that's not even like a fair comparison like but the thing is the primitives in the building blocks improve alongside with the top level bundle so yes the
[05:19:02]  the flagship product gets easier and easier and easier but then beat comes out and makes takes the bottom up as well so like these things are constantly moving right um and right there
[05:19:15] 's like this balance where you're like does it take more than a day to set up your dev environment uh you know that should be the constant right maybe if computers get faster
[05:19:24]  and npm get you know downloads get faster or whatever that also impacts that it's it's but to me this is just a continuously sliding scale scale um yeah yeah i
[05:19:49]  mean that the and and we just said astro is like the next thing on top of eat like the that's sort of where where we're getting to like i i
[05:19:58]  don't think these things like the whole unit shifts over time right like the but the philosophies stay the same which means that say react going from we're just a library you
[05:20:13]  don't you know need a framework to like you need to use a framework to use that that is a philosophy shift more than like just the the the progress because react could
[05:20:23]  stay on the the left side of the field instead of the right they're actually crossing that field right now whereas historically as things have shifted forward they've stayed on the left right
[05:20:33]  so it's the that's why it's a choice i don't believe because someone tells me that that like the whole thing has shifted that much that you need to use
[05:20:45]  like next or remix or solid starting for that matter but but like this is just a constant range that slides along with a you know a leading end and uh and a you know
[05:21:01]  like like with two two edges you know so yeah i i you can dig through the comments and people saying how their version doesn't do what or their version does worlds isn
[05:21:22] 't ready for this talk no babble no problems you know the the this is this is a talk where like the vanilla js crowd so to speak was i i used to
[05:21:31]  call them it but it could be no build or whatever can kind of like laugh at what's going on here and maybe they have a point but it's also kind of like
[05:21:39]  um yeah i i don't actually think almost no one actually gets this tweet reading all the comments here i think i think uh rich's thread that came off it is probably
[05:21:53]  a lot more interesting but i think for some people they might have not thought things this way so i think there's some value in here but i i do think that the one
[05:22:06]  thing i've noticed about this um with the people kind of jumped into the conversation because you know it perhaps has been harsher on the framework authors um is that like
[05:22:17]  everyone has their own comfort level okay one more topic before we sign off stream um oh what what did we get do i have another i have to go over to twitch to
[05:22:32]  grab this one oh thanks dev this this this is what i was more expecting not the the the one on on on theo's uh yeah thank you uh okay that was
[05:23:22]  amusing i appreciate that dev um uh anyway um yeah the last topic today is related to food not related to sushi um i'm actually doing some i think korean barbecue i know
[05:23:42]  changing it up but um a very important food topic as related to javascript and that is um the ideal number of uh toppings on a pizza i think this is a
[05:24:02]  pretty valid take you know i i worked um i worked at a pizza place for how long about a year and a half when i was like the beginning of going to school
[05:24:20]  before i left to go on tour the first time i was i was terrible at university like i like be playing my band and like working making pizzas and and whatnot and there's
[05:24:31]  there's definitely a way to get around the problem is if you just like do your standard like american style pizza with like typical like all the five like when you go to
[05:24:43]  like uh like when you go to like let's let's try dominoes here and you and you look at like all their pre-made um like pizza options um what
[05:24:53]  is it uh whatever delivery is it gonna ask me for my location first yeah i don't want to do that online um carry out they're still gonna ask me for my location
[05:25:03]  right the other i'm like screw this but like when you look at all like the pre-made options they all have like five toppings on them and they're all garbage
[05:25:10]  right um i i like i i my favorite pizza actually has five toppings on it but it took a careful balance that it's actually based on three toppings and then the other
[05:25:28]  toppings are kind of extra and they're kind of um like they're not fundamental to the pizza they're just like a flavor addition if you're just trying to like put all
[05:25:38]  the stuff on it is not good it just makes worse pizza and honestly sometimes i question i'm like is that fifth ingredient really necessary um um rich harris showed his and he
[05:25:49] 's like this pizza has seven toppings but you gotta keep in mind he has multiple types of peppers on here we have banana peppers roasted peppers and jalapenos i don't
[05:26:00]  know if you can count those all as separate toppings just right so i i there's an interesting question here and this has led to a debate about a scoring system but yes
[05:26:19]  i i i actually very much enjoyed this thread there's lots of great pictures of pizza oh yeah best pizza city in america is portland i had a really good pizza in
[05:26:31]  portland i gotta admit um i could i haven't i didn't get new york pizza when i was in new york i'm just crazy aren't i but i
[05:26:41]  i've had obviously italian pizza in italy that was very good but in a different place if we want to talk about american style pizza i have to admit the best
[05:26:49]  american style pizza i've ever gotten was in portland that's interesting okay anyways anyways sorry i'm just having fun the the audience the stream is quickly leaving um it's fine
[05:27:07]  it's also end of the day but um thank you jason for bringing some levity in in the in the all the drama and conversations i said this was a big
[05:27:18]  week a lot of stuff going on um and uh i hope everyone had a good week two through through it all anyways i think i'm good i think we're good for
[05:27:32]  this week um oh that awesome sorry i i i just you're right this is worth a shout out i know how much people have been uh waiting for this um like two
[05:27:47]  quick thing yeah here we go experimental yeah i mean this is the trickiest thing they chose not to build on beat and now they have to like re-implement that part
[05:28:00]  of the platform um so this is this is a big um improvement and big go part of me wondered at one point of why they didn't just move to beat at a
[05:28:11]  certain point you know like i guess they're like more and more but like nothing remix does went just like you know right over um but i guess they have their reasons does anyone
[05:28:24]  actually know why i i i i i heard about them having a beat based fork so that um ryan florence is all like yeah i use veet so that
[05:28:35]  i can get hmr like like um when i'm developing stuff but yeah i i don't know i am so yeah it's interesting i i'm i'm i'm
[05:28:53]  interested to see yeah it's something we did yeah i mean i can i can believe that i guess but like veet does so little like to do remixes patterns in beat
[05:29:08]  i i mean i know just from the work we did on salt started it's like incredibly easy like someone could whip that up in like like half a day so um yeah anyway
[05:29:20]  um you guys just gonna keep on feeding me tweets is that what's happening here suspense is older than hooks what's what's the context here uh damn it why is
[05:29:47]  it not showing me is there it's funny i opened up this tweet but um i it's not showing me what's this in response to my little joke about suspense being older
[05:30:03]  than hooks though is marco released suspense in uh in uh 2014. um of course i'm never gonna find it by searching for marco but async seriously what
[05:30:25]  this article is a good read for anyone who wants to understand they explain how they suspense actually exists mostly to get the like it was an understanding that out of order streaming or um
[05:30:36]  and ui states and the loading states kind of could be handled the same pattern and this article isn't quite suspense from react but it kind of the parallels here are actually
[05:30:48]  surprisingly similar um marco had like to marco's a weight tag obviously it's not the same complete semantics but that's my joke but yes my understanding that suspense did
[05:30:58]  exist before um and hooks yeah yeah it's it's it's interesting uh sorry and i did not open up this one all right yeah this is the the comment from r
[05:31:28] yan florence where say today i actually run beat in parallel to remix and pull in those kind of components for better tx yeah so you start going like yeah i
[05:31:39]  don't know why maybe someone will know the real answer at some point beat is definitely less stable i i i will i will give them that i i think especially during that time
[05:31:53]  period v like broke stuff so often for us but like the benefit to the end user like drastically outweighs that anyways you guys are going to keep me here forever unless
[05:32:06]  i actually just call it so we're gonna we're gonna we're gonna call it here um uh google solid start all right check you all later um uh have a have a
[05:32:24]  great weekend