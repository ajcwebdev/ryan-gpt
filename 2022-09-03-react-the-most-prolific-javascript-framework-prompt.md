---
showLink: "https://www.youtube.com/watch?v=BBWA7PGJcts"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "React: The Most Prolific JavaScript Framework"
description: ""
publishDate: "2022-09-03"
coverImage: "https://i.ytimg.com/vi/BBWA7PGJcts/maxresdefault.jpg"
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

[00:00:00]  Hello everyone welcome to my stream today. This one we're gonna talk a lot about React like the title says and I mean a lot about React. I've talked about
[00:00:17]  React a bunch on various streams at different times different aspects of it but I thought it was probably a good time to finally just like address the whole thing and kind of really
[00:00:30]  give my thoughts on React because I don't I don't think it's what a lot of people expect and I've I keep on getting pulled into these conversations and seeing these
[00:00:41]  dialogues that I'm not like particularly happy with and I think it misrepresents React misrepresents myself as well and what I like my perspective on on you
[00:00:53]  know the frameworks and yeah I mean the truth of the matter is React is like holistically looking at the whole progression of React it's probably my favorite JavaScript framework which a lot
[00:01:09]  of people don't expect me to say that so you know I'm just putting that out out there so yeah let's just I'm getting I'm just kind of r
[00:01:17] ambling here while I get some some stuff going on actually I should probably post that I'm live on Twitter so bear with me come say hi in the chat um let's let
[00:01:26] 's see where we are where is my stream yes quote tweet it we're live we're live how's it going everyone all right oh great people saying hi got the popcorn
[00:01:44]  yeah see people expecting something spicy here and and there might be something spicy here but it's not what you're expecting hi uh everyone's around that's awesome hey Theo thanks
[00:01:56]  for popping in yeah hey yeah just doing all the welcomes make sure I take a little sip for my drink here yeah no for sure I React um really is amazing someone
[00:02:19] 's saying that in the the channel we're actually making my first framework off yeah um it wasn't mine though to be fair I I've been at this uh a little bit
[00:02:28]  longer um and that gives me a little bit of perspective perhaps um which is kind of what I want to bring to the conversation here um and it's funny like as I was
[00:02:37]  saying before I'm bound to get pulled into these conversations about React because like I'm working on a different JavaScript framework framework that looks like React um and uh I mean the
[00:02:50]  comparison is going to be made uh whether um you like it or not but I've I've all I haven't always been a fan of React but it's undeniable
[00:03:06]  um you know its impact anyways I'm going to talk more about that in a minute I'm actually just rambling right now to try and give people some time to join
[00:03:13]  on every it seems like every every few seconds I wait um more people join on more people will see what's going on mmm it's a great muffin I've spent like all
[00:03:24]  morning collecting these clips it's been a very busy week for me actually I've been working on solid 1.5 bug fixes I've been working on solid start for for those
[00:03:35]  of you who've been waiting for a bump up on solid start uh happened last night so we got 1.5 in solid start um but you know I've been where
[00:03:45]  I've got two conference talks coming up I'm talking at React Finland um September 15th I believe and I'm gonna be live there in Finland and I'm also talking at
[00:03:54]  vconf uh in the beginning of October which is pre-recorded so I have to get the recording in this week as well so I or next week so been working a
[00:04:03]  lot on conference talks and that's part of really why I've been you know kind of thinking about this stuff and kind of kind of reviewing or reflecting on on where things
[00:04:14]  are at uh so to speak all right good yeah see see more and more people coming in on twitch and on youtube which by the way I guess I'm supposed to say if
[00:04:23]  you haven't subscribed yet or whatever go go click the follow button or whatever do I sleep with my earrings I just I just caught that um yeah I actually tend to I
[00:04:37]  take them out wash them you know here and there but I tend to actually um sleep with them I'm so used to it at this point all right yeah so I guess
[00:04:48]  I'm supposed to get started just give me two seconds here let's just two more seconds to give people a little bit more time all right it's funny because I was debating
[00:05:01]  the start with this week in javascript um but the truth of because like so much of the conversations or why I ended up here I didn't really have an idea for
[00:05:10]  a stream this week um and but I think it's probably it's probably better um to just go right into this and we'll worry about uh this week in javas
[00:05:25] cript later all right all right so shall we get started yeah nice to see everyone all right see this these are great tips see this is the funniest thing this is why I
[00:05:58]  need to do this stream people think that I tried to fix react it's so funny I I have no interest in fixing react and I think yeah let's let's get let
[00:06:08] 's get started here so I can actually address this question directly all right so yeah I'm just gonna start right here because to to have a stream like I'm gonna have
[00:06:23]  today it's gonna be filtered by my bias my perspective um and that's something anyone who's listening has to take into consideration I also would love for people to be participating in
[00:06:33]  the chat and put in their opinions too I'll address them and talk through them as we go because honestly there's a lot of thinking and thought that go into this stuff
[00:06:41]  I mean from higher level vision to api designs and I would love to get into any of those details with anyone um given the chance just because like there's so much here
[00:06:51]  I this is why I wasn't worried about doing a stream like this because I knew I could pretty much walk in with almost no prep and talk for like four hours about
[00:06:58]  react and like no problem this is just one of those subjects where it's like if someone asked you to give a talk with no prep could you do it and I'm like
[00:07:05]  yeah definitely um part of it is because my passion and interest of being kind of like a web javascript web historian a bit so it just plays into it quite well
[00:07:17]  so yeah and and to be fair yes uh yeah yeah exactly that that's why I have to answer this question because there's there I think that it's confusing I don't
[00:07:28]  I know no one was actually um um suggesting that it was an insult I I think the best of everyone here in my chat um in the community so just yeah let's
[00:07:38]  let's go here first thought I love my entire career to react yeah um I don't but then I do like it's let's let's kind of start here so first
[00:07:49]  thing I want to say is yeah no hate here this is this is there's there is no hate um I don't want people to kind of like build up this narrative
[00:07:59]  I there there's no I don't there's no need for it um people I I I want people in chat to give their comments and talk about what they like or didn
[00:08:10] 't like or be descriptive but this is not there's no hate here react isn't broken from my perspective I want to be very clear I do not think react is broken I
[00:08:20]  think react is a different model um one that perhaps I might not think is the most intuitive for certain things or the best at solving all problems but there's nothing in I
[00:08:32]  don't find anything inherently broken about react it makes a lot of sense to me I think react is very very very well designed so I want to kind of put that out here
[00:08:40]  um and I think it's also really really important for people to understand that solid doesn't fix react react is a completely different paradigm and it was it was kind of a
[00:08:55]  funny thing because most people not most but a good number of people I know can I assume well you saw react you saw a way of improving it and that's why you created
[00:09:06]  solidjs that that's kind of something logical you see the jsx you see the similar looking hooks api and you're like this guy found a way to solve react with
[00:09:14]  slightly different trade-offs that's solidjs but the the actual story is like nothing like that the truth of the matter is I saw react back in 2013 looked at it
[00:09:29]  and was like god I hate this like I don't like this and it was it was like it was a first reaction I like I was trying to be open-minded to
[00:09:40]  kind of like come come in and be like okay well yeah this kind of trades off here trying to see the similarities but for the most part my takeaway was like I don
[00:09:48] 't I don't know I mean I like my pug template separate from my javascript logic you know I don't know if I like jsx I don't know if
[00:09:59]  I like any of this stuff um I did see a lot of similarities to what I was already doing which we'll talk about in a bit but I I was just like okay
[00:10:08]  well react is kind of interesting but I prefer using knockout js and fine-brained reactivity and composing stuff using primitives and stuff like that so I just
[00:10:18]  I wasn't in the market for react I saw the class component I mean it wasn't even real class components it was like old school faux class prototype kind of rapper type components
[00:10:29]  and I was just like man these uh life cycle functions and stuff they remind me of asp.net um I don't like components with life cycles I hate them I mean
[00:10:38]  I said no hate on the stream but where I was sitting I was just like this is just not for me um so like we're gonna we're gonna review this when we
[00:10:48]  go through react's history but I just want to kind of put this in perspective to to people so I'm just sitting there working on knockout and fine-grained
[00:10:57]  reactivity and I start seeing people talk more and more about react and to see performance benchmarks and as I said that's going to parallel through my story is going to come out
[00:11:08]  through the majority of what we talk about today but what I want you to understand was I saw react as a solution to the problems I was having with reactive libraries the same
[00:11:19]  arguments they made when they first presented react I looked at it and I was like it isn't necessarily that I have to do what they're doing I just have to understand the
[00:11:28]  value of what they're doing and then apply it to fine-grained and I did that so I wasn't trying to fix react I was like reacts over here I'm
[00:11:36]  fine with that I wanted to fix reactive libraries and I saw an opportunity so I looked at that and I was like okay well yeah maybe two-way binding isn't great maybe
[00:11:47]  like it's kind of chaotic and if we do this kind of separation you know of read and writes we can control things better but I'm like oh this is tricky because
[00:11:56]  I've got all these like primitives you know like separate little pieces I don't have these components that re-render how do I do this and that's when I started
[00:12:06]  working on solid and trying to solve those problems it was trying to figure out how to make reactivity more predictable to make it you know do what I wanted to do and
[00:12:16]  that that's what I said I I didn't think anyone else would like it honestly I was just like oh okay well I love reactivity some people in my work love react
[00:12:25] ivity maybe we can use this and it'd be really cool and I've got some better patterns here now we we aren't like blowing up the world on every change because of
[00:12:34]  some crazy butterfly effect you know know good kind of oh not immutable but good read write segregation and we were building this stuff on top of knockout at my work it
[00:12:42]  was just logical that I'd try to build a better version of knockout using these patterns that I'd applied on top of knockout that I'd basically inspired by react and
[00:12:51]  at a certain point even not even the earliest days if you watch my stream I decided that JSX was a good thing too and that you know this modularity should continue
[00:13:03]  into the view code and what that ended up meaning was I had a JSX framework with all these little fine-grained primitives and I was like I'm kind of
[00:13:13]  happy I I like it maybe we'll use it work and then like I found a benchmark online I was like oh I want to enter it I I want to show that react
[00:13:21] ivity is fast like I know it is because you know I'd seen some other stuff to suggest otherwise and we'll cover that in the stream today and I just knew that
[00:13:31]  I could do amazing things with this approach then react released hooks and then and then I was just like I was talking to someone earlier today Theo um he because he was saying like
[00:13:44]  the hooks announcement was really you know groundbreaker for him and if you ever watch that talk and I'll pull it up here a little later it starts with Dan doing the
[00:13:53]  technical explanation and then Ryan Florence gives like this really great real demo and Theo was like when when Ryan got through that demo I was just like sold it just everything aligned and it
[00:14:03]  made sense but for me personally I was like I got two minutes in Dan showed the hooks and I was just like oh my god I like I knew what that would mean I
[00:14:16]  was like never in a million years did I think react would go that way and we'll talk more about that but I suddenly was like they just created something that looks like
[00:14:26]  solid.js and they're telling everyone they should use it I like I mean I'm sure like no one here had heard of any of my work before that point like that
[00:14:38] 's when the moment happened so to be very clear I I never tried to improve on react they just happened to do the the most unexpected thing and we found ourselves here so
[00:14:55]  do I like do I owe my career to react I don't I don't know but I I definitely wouldn't be here right I can understand coming in after the fact
[00:15:08]  like people kind of coming in and be like oh yeah you know it looks like react there's a react influence I can't deny that but it's like not what you think
[00:15:17]  I I did I've done react development I've done mostly react native actually and you know I understand I do end benchmarks and demos and stuff but I haven't maintained giant
[00:15:28]  react apps my experience with giant react apps didn't happen until post hooks that was the point when I convinced my company um that you know solid wasn't quite ready yet and it
[00:15:38]  was probably good thing because I ended up leaving anyways and we needed we needed we really uh restrained resources to actually go to react and hooks are a big part of why
[00:15:47]  I did that because I was like react finally has some of those qualities that I think are really important in the framework but I just wanted to be clear I never I don't
[00:15:58]  view what I've done as fixing react all right hope that I hope I made my point there and so when I look at this I'm going to try as I said
[00:16:15]  I can't deny my own bias but I want you to know that I do have a perspective here and a way that a framing so you can see that in my perspective and
[00:16:27]  you can say what it is in some ways at the beginning of react they got more credit than they deserve in some sense but moving forward several years later in from my perspective
[00:16:39]  they get less credit than they deserve today and more criticism than they deserve um so like there's this weird kind of contrast going on in the sense that early days of react you
[00:16:50]  know you have the whole histories written by the victors kind of scenario where people's memory or is a little bit shady and they they kind of assume like the things didn
[00:17:02] 't happen as smoothly as the history books would would have you believe so to speak but similarly years later when you have this giant incumbent that dominates the whole industry I think they
[00:17:16]  get a lot of undeserved um criticisms you know I have someone the other day was trying to decide if react was a net positive on web dev like its existence like should
[00:17:29]  we consider like a world of react never existed and I think that's silly because this is part of maybe giving react too much credit something else would have filled its place and would
[00:17:45]  have been kind of similar but what the difference comes in not about what happened at the beginning when it caught attention or arose but how they've managed the narrative since and that
[00:17:59] 's the incredible story of reacting the react team that we're going to be telling today um is is it goes beyond just the early days it's it's something there's a
[00:18:12]  reason react um has been so successful and it's not I don't think it's all the things that people sometimes attribute it to there was actually a great video a little
[00:18:23]  while ago um like why react one and that's honestly the closest I've seen to my perspective on it and I actually get gathered a lot of sources and information from the same
[00:18:35]  places to kind of put together what I wanted to talk about today um but obviously as I said this is very biased and I'm I I was there and I had my
[00:18:44]  own perspective so let that that'll filter in all right how's everyone doing chat yeah Tyler completely killed it with that video um I remember watching it I'm like this is the
[00:18:57]  this is by far the closest that I've seen the only thing that Tyler I mean he mentioned it and stuff and he had a good perspective was um my perspective was a little
[00:19:07]  difference because I was very heavily on the knockout camp so more than perhaps others I felt that there were other solutions like reactive solutions that that um solved the problem and could
[00:19:18]  have you know gone a different way whereas but if you step back you know and you see angular and backbone and the whole conversation you'll you'll you'll understand that like from
[00:19:28]  the general sense um it there was there there is a good reason for things being the way they are and what I loved about Tyler's video more than anything was that he
[00:19:40]  didn't just go oh jquery to react revolution because that's not how these things happen and this is very relevant today and that's why we're gonna this you know
[00:19:55]  that we'll do this week in javascript at the end even though that's what spawned this I think like just understanding that oh the guy who made the video
[00:20:03]  I probably should link the video in the chat or someone should link the video in the chat let's see if I can actually find it here um it's it's kind of
[00:20:10]  almost like the shortest version of what we're going to be talking about today um yeah let me see I found it why react one mootools did it first yeah and
[00:20:25]  to be fair I'm I'm probably not going to be terribly fair to mootools today because for my purposes I'm going to kind of shortcut a little bit at the
[00:20:36]  beginning but yeah let's yes reacted a lot of things um including credit generation deaths you're surprised if a function doesn't rerun on a state change but I mean that
[00:20:49]  that's that's a flavor its own type of reactivity and I think that's you know that's that's that's that's good I mean it's different I don
[00:20:57] 't I don't I don't think we're too easy to just kind of go this is bad or whatever right but it is interesting because on the same token people should realize
[00:21:09]  where their biases are or kind of understand what a assumptions are making and if you've only grown up in a single world view then you're not going to maybe have that
[00:21:18]  perspective thing key thing about react is people often want one true solution for their problems people thought react was it tried hard to make it later it wasn't well I don't know
[00:21:28]  if they realized it wasn't maybe they have maybe some have but yeah I mean it's that that's why this is like there doesn't have to be one we don't
[00:21:38]  have to play the highlander game here completely um and we're gonna get a lot of react love yeah no this this one's gonna be a fun one theo but
[00:21:47]  I think you probably know most of what I'm already going to be talking about um all right so with that all being said um I think you can't talk about react about
[00:21:59]  without talking about what happened before react right you gotta you gotta paint the picture here and that's what that video that I shared earlier really does um and I've got my own
[00:22:11]  perspective but I saw something just the other day ng conf was happening um which again we don't always pay attention to ng conf classically um especially people more like myself that
[00:22:23]  may have been on the react side of things or um you know knockout or pretty much view or pretty much anything that's not angular but I'm learning to pay attention to
[00:22:34]  ng conf when you realize that michiko heavy spilled the secrets of quick literally in an ng conf in 2019 just like went up on stage explained quick to everyone no one got
[00:22:46]  what he was talking about but he did it I I want to pay more attention to ng conf because clearly there are some good ideas coming out of the angular community even if we
[00:22:57]  tend to like you want to talk about a a framework that doesn't get much credit um yeah uh I I think I think we're a little bit hard on angular too
[00:23:08]  maybe way too hard but okay what I wanted to show was something from sarah drasner's um speech and sarah drasner I am super super excited about her
[00:23:17]  working with the angular team because she's basically worked with like a number of frameworks at this point and she's completely um amazing so here let's let me share my screen
[00:23:27]  and see what I what I want to talk about here this I did a similar graph uh last week on this week in javascript not as detailed but where I was trying
[00:23:38]  to show how like there's a few types of frameworks um and mentalities and how they kind of been on this kind of line I used it to try and show that
[00:23:48]  you could draw a line from um essentially uh backbone through react through svelte to marco six or you know like I was trying to show show that there's this line
[00:24:03]  but what I liked about this image from from sarah um talk was that she showed that this is actually really quite messy with the arrows and the influences it's it's
[00:24:14]  not as simple as saying like there's the functional programming frameworks and the oop ones there's a lot of shared references and actually it almost helps to start with part of this
[00:24:27]  diagram is framing I don't know if I want to keep doing this throughout um what we're talking about today but I feel like I want to kind of as we go
[00:24:35]  through the years of react and talk about the development I want to kind of map this out a bit for ourselves perhaps and I think if we start with this like pre-re
[00:24:44] act zone range I'm going to make a couple of these lines right here um because I want I want to kind of yeah these these are rough zones and let's let
[00:24:56] 's say this is like 2007 to 2010 and then let's make this zone 2010 to actually I'm going to shift the boundaries here slightly 2009 to 2012 and we're make this
[00:25:18]  one 2009 I'm going to choose where I want stuff to land here be fair but the we're going to we're going to add some more of these later but I
[00:25:28]  just want to kind of help paint this picture of the world before react um not to my knowledge uh at least not outside of meta and I given that um I yeah we
[00:25:48] 'll talk about that in a minute yeah um yeah so let's let's let's let's kind of start here so the most obvious thing to start here and sorry this
[00:26:04]  is going to be a mess maybe I'll just do frameworks in a different color so we can see them I'm going to just put jquery here this is when I
[00:26:10]  said I was going to be mean to mootools because I mean well I don't have to be mean right let's add mootools here but honestly I didn't
[00:26:18]  use mootools so I don't know much about it I also did not use prototype prototype js so I can't tell you how this how this is like I was
[00:26:32]  doing web dev at this time but I was I was working in dotnet using giant um I don't I don't know what else to call them but like components essentially that
[00:26:44]  had huge overridden life cycle functions with huge switch statements so during this time period like I was very much aware of of how I absolutely hated class components um I said
[00:26:58]  no hate but again the let's just move on from that so my point is there's jquery and then somewhere around 2009 people like jquery is very imperative it
[00:27:10] 's like vanilla javascript so people decided that like okay well we need something better here um we need something more structured and arguably I don't know which one came first
[00:27:21]  but and we can look at the dates on google but it doesn't really matter because in end of 2009 I think backbone came first and then angular came almost and when I say
[00:27:32]  angular I mean angular js the original and then I kid you not like uh let's do one more almost six months later knockout js came out so you notice the js
[00:27:46]  this is kind of a trend here but I just want to point out and we're going to need this space to get a little bit bigger but I mean these all kind of
[00:27:56]  came out around the same time each with their own kind of idea of how they're going to update the DOM and backbone was like we're going to have mbc
[00:28:06]  structure but I mean our views aren't really smart so we'll just have the ability to like re-render them okay so we can use inner html and just blow
[00:28:17]  out the DOM and because we use this mbc to keep the state out of the DOM it's not too hard for us to just replace giant portions of the DOM this
[00:28:24]  is incredibly inefficient but it gave us something more structured than jquery um is the best way I can put it uh so like that one came first and I could probably
[00:28:38]  draw some back arrows here because there is some like these guys all borrowed from these tools here I'm going to say jquery for the sake of it but I like
[00:28:49]  I honestly like okay right yeah so some people are asking because they might have not heard of knockout.js um or some of these but that was backbone okay and you could
[00:29:06]  still probably find it today backbone.js yeah you know it had models view controller uh some built-in templating so you could basically wipe out your inner html
[00:29:17]  it had advanced it had a great system to keep your front end and back end in sync it it it it it was a modern framework for the browser um it didn't invent
[00:29:27]  mvc but it kind of brought it to the browser for us all to use patterns that we used in back end frameworks angular um had some similarities to that except angular
[00:29:40]  was like okay we got to be a little smarter here so what if instead of like wiping out the view let's um more or less uh kind of keep references and kind of
[00:29:55]  walk the dom and then figure out what has changed and then like apply those changes this uh digest cycle um also called dirty checking was kind of like it's it's big
[00:30:08]  bread and butter because for the first time we weren't inner html and stuff and to be fair in jquery you didn't have the inner html stuff
[00:30:15]  you're just using dom directly but backbone had kind of made it like really easy to update stuff and not worry about those details angular was like okay we need to be a bit
[00:30:25]  more optimal but angular one had some a lot of interesting ideas of how to accomplish that and the thing i want to point out at this point is none of these frameworks really
[00:30:34]  they were like m mbc they had no they didn't know where to put the state in the client they're like like they had models that were staple and then they
[00:30:41]  had views which are stateless and then controllers wiring them together but there's no idea of like like you know the old if you have two components on the page how do you
[00:30:51]  represent that well i guess you need another instance of the same model like they they they weren't really clear on how to manage state in the client they'd come from things
[00:31:03]  that were kind of stateless like backend servers and where mbc just works amazing and they're trying to apply the same patterns on the browser so so yeah i mean this
[00:31:14]  is fine knockout i always talk about because it's like my favorite um like knockout js and react are my favorite for frameworks of all time and to be fair neither
[00:31:24]  of them are frameworks they're both just ui libraries i love this because the site feels like it's lost in time they're one of the first sites to have really nice
[00:31:31]  interactive tutorials you know um but if you want to like a very high level idea of what were knockout fits in let me see if i can find documentation they they were
[00:31:43]  this kind of simple library where you created instances for your kind of views where you actually it wasn't just a controller but each view managed its own state um and the in those
[00:31:56]  in those states what you could do was you could um make primitives um to represent that state and there's basically three types of primitives the first type of primitive was called
[00:32:08]  and this has got a bunch of noise in it damn it i wish there's like a better example here um but the first kind of primitive is called an observable which
[00:32:16]  is basically the same as like use state and then they had something called the computed which is you know if you're a react person you might think this looks kind of like use
[00:32:26]  memo and then they had something um but you could also use computed to do side effects they didn't really distinguish the difference i want to be clear this is a completely different
[00:32:34]  model but essentially if you've used solid or react knockout from 2010 is going to look really um similar uh because it is essentially they did their data binding differently they had like
[00:32:47]  a whole declarative binding system but essentially they'd use these primitives to compose behaviors kind of like hooks back in 2010 um so that that's what knockout js is
[00:32:59]  and where i was sitting so you know but i mean this isn't my point is this was there's this these guys and then not long after you know ember js
[00:33:13]  kind of came in and uh who else was worth mentioning i mean there's so many frameworks from this time period but um let's let's put elm in here more on
[00:33:23]  a functional side a little bit later around 2012. um but the the data binding for knockout was kind of similar but it updated completely different the way that knockout where
[00:33:39]  angular i mentioned did these like long kind of digest loops so they went through and they checked everything knockout did something called fine-grained reactivity where they did pinpoint updates
[00:33:50]  to the dom so the problem you'd create the dom tree and put these bindings in and as it initialized knockout would walk through your actual physical htm like
[00:34:00]  actual dom tree find these attributes and then attach uh like you can think of it like effects to each dom element so that when and they'd parse the the signal read code
[00:34:12]  um which was tied to an object and you'd pass that object in which is like your view model like a component and then it would it would um basically tie it so that
[00:34:23]  when you updated one signal it would just update the one effect in the dom and if this sounds really similar to you this is where solid js and view actually came from which
[00:34:33]  is important to point out here but uh that was much later yeah i mean the whole library framework thing is is neither here than there but i mean there isn't other ones like
[00:34:49]  knockout wasn't the only reactive library i think there's like can js and a little bit later on react reactive we'd have to like look through this and find uh
[00:34:58]  them but i wanted to kind of point out that like yeah elm elm is kind of here ember was like 2010 11 ish um there's a lot of playing
[00:35:08]  going around here angular did dominate though right angular js was like backbone was really popular initially even though they came out almost the same time backbone really dominated the everything from 2009 2010
[00:35:20]  2011 but 11 angular had just taken over the 12 and it basically had flipped to angular js being like the the kind of popularized way of doing it because it was more efficient
[00:35:31]  it was just it was a natural thing knockout was something that was too magical for a lot of people i feel like if you want positioning to understand it now knockout was
[00:35:41]  kind of like this this felt at its time where people were just like this is crazy magic i i don't know what to do with this it's really cool but like
[00:35:49]  it was just kind of like like it just didn't make sense to people because it had all these like automatic updates and automatic dependency tracking you know um and even though it's
[00:35:58]  a really simple mechanism that i've taught on my streams you know uh if you've watched my other content for for people in 2010 this was like as magical as you could
[00:36:10]  get so yeah anyway like we're kind of get setting the stage here and the reason i want to set the stage here because you're already starting to see some of this stuff
[00:36:18]  like even let's i mean i guess we're gonna see newer ember if i look up ember right now all right ember js like i want to point out that
[00:36:26]  a lot of these frameworks haven't actually changed too much and probably looking at ember is probably like maybe i'm like lying it's like the the worst example because em
[00:36:36] ber used like handlebars um for its templates um and yeah i'm just not gonna yeah my luck when i'm like showing this stuff off my point is before react we had
[00:36:49]  certain things and those certain things that we had are we had declarative views we had stateful rendering we had classes if you go back to ember we had like uh
[00:37:00]  like ember dot create class i i'm not going to probably be able to find like this kind of stuff because like obviously components have changed and reacts had its influence everywhere but
[00:37:13]  i wanted to point out that we have a lot of things that people associated with like react because like react came uh okay so i'm going to move this bar a little bit
[00:37:26]  because i i realize now i don't need it to be that wide but react came here let's say here's react right and a lot of people kind of draw this
[00:37:38]  line that goes from jquery to react and they basically ignore the tons and tons of innovation that was going on during this time period if that makes any sense um like
[00:37:51]  like like there's just there's there's there was so much stuff happening here that the people like there's way more libraries than i could put in here this was a time
[00:38:03]  when people were realizing that single page apps were a real thing like it was possible to build a whole app in the browser you have to like go back in this time period
[00:38:11]  we're still talking about rails backends and some php and whatnot suddenly somewhere around here around backbone people like holy crap like i can just only use javascript which which
[00:38:21]  is huge but for some reason we like this whole phase where as i showed you people had things that looked like components people uh had things that looked like hooks and and like not
[00:38:33]  just knockout like you know backbone had a philosophy where you can just like throw things out and re-render them and like a lot of the concepts even though like the
[00:38:43]  performance might have not been great and the rough edges um existed here but they just weren't like really refined the problem is like we had the technology but we didn't have the
[00:38:52]  best practices and this is going to be very important to understand what i'm where i'm getting to with react like essentially we had the means but we just didn't know what
[00:39:02]  to do if that makes any sense right so yeah everyone's falling around so far yeah what's my thoughts on state management we're gonna get there because the funniest thing is
[00:39:13]  until you get to react all of these solutions had opinions on state management because they were mbc or mbm they all had the the m the actually there's only
[00:39:24]  one solution here that didn't have didn't provide the m um funnily enough and that was knockout knockout knockout said okay look you provide your own models
[00:39:34]  but then you have to map them to these observable things in a sense you could say that state management but it was a local state management um so it it was like the
[00:39:42]  in this view models and components aren't the same but knockout essentially had local state and the view and the view binding basically in my opinion knockout was the first just
[00:39:54]  a view library um so it's but this is important to understand because react was not influenced by knockout at all to be fair react kind of came in and they're like
[00:40:06]  yeah we like functional stuff from elm which i haven't talked about it now and we like that redraw everything that backbone is is doing and this is kind of where
[00:40:16]  react came into this tree because um i haven't talked about elm elm is crazy it's a compiled javascript language that's like functional functional functional pure and el
[00:40:29] m actually has influence on on solid funnily enough um because uh they were they had signals originally they got rid of them over time they changed their model but elm actually
[00:40:39]  had the concept of singles um with that reactivity so anyways i'm going to just put elm in here for now but my point is up until this point we had
[00:40:48]  elements of what react was popularized for and people if you jump from jquery to react yeah it's hell of a revolution if you lived through these years you saw tons
[00:41:01]  of churn tons of similarities and it's all just slight differences and evolutionary changes um so yeah i mean some people are still talking about uh framework versus library in here what
[00:41:13]  we got react to the library that can be used as a framework fun uh libraries provide developers with predefined functions in the classes make the work easier and boost the development process yeah
[00:41:23]  i mean i think calling react or any i know what see i feel like library was the perfect marketing thing for react because they could come in and be like look we're
[00:41:33]  lightweight we don't try and put all these opinions on you that being said all uh like we all our single page app frameworks start with like a render call we basically give control
[00:41:48]  to the library framework whatever when we call render and at that point they call us which is what most people define as frameworks so i think it was a useful distinction to talk about
[00:42:00]  scope but in the purest sense i'm not sure if react was ever actually a library um not that i'm sure that that actually matters much right so yeah i mean
[00:42:13]  it's funny because there is a gray zone there because uh for those of you who know solid um you can use solid like a library if that makes sense right like we generally
[00:42:27]  use render and we make a tree and we make an app and you generally use solid like as a framework but because the reactivity of solid could just be like so a
[00:42:35]  couple things you put on the page you know and it's all independent and it's not like here framework do it you like you couldn't control it i would argue that you
[00:42:43]  could say that uh like the reactivity of solid could be considered a library but i don't generally speaking all of these ui frameworks are frameworks from my perspective but reacts
[00:42:56]  the first it's just different and i i want i want to i want to get there because elm is i don't know have you have you you all seen elm
[00:43:04]  before i think elm is one of those things or like i hope people it's a delightful language for reliable web applications i hope people don't like lose this in time
[00:43:14]  um can i find an example it's yeah it's got their own language i want oh where is it yeah this is all the text i want to see their up um i
[00:43:29] 'm i probably shouldn't divert too far into elm because it's like its own language but like see this idea they have a model an update and a view and it's
[00:43:39]  very they they basically said like look here is our state here is our kind of like update ability which is kind of if you notice they're all written as like pure functions
[00:43:50]  they're like derivations and then here's our view our side effects this kind of functional split is very important um and will come back up again in framework design but elm
[00:44:01]  was like very cutting edge for bringing these kind of functional ideas into um into um into the modern uh front-end uh vernacular even though react is the one who really
[00:44:12]  carried it um oh this is a fun one i i i i wouldn't mind if someone asked me this question because i mean you could kind of think through it and talk
[00:44:35]  it through i would i would probably mind if they thought there was a right answer to that question i think that would actually bug me more um yeah elm syntax is kind of
[00:44:45]  crazy because it actually is very vertical which is something you might not like expect right but um yeah i it's it's it's very cool in its own sense but anyways
[00:44:58]  i'm trying to build paint this picture here and i hope now that you're kind of seeing what's going on um to where react kind of comes in here so we there
[00:45:06]  was a lot going on i think i've established this so let's uh i'm going to throw something up here just a second enter react right that's that's where
[00:45:18]  we're at right now we're going to talk about react so what where did react come from react was created by jordan walk um i i was actually a little bit disappointed
[00:45:28]  because i've been having fun with this recently even though it didn't show up i was like this is the perfect stream for it i was going to like google jordan walk
[00:45:35]  right and to show you guys because one of the most or actually what was that who created react yeah yeah yeah yeah okay it still works yeah so you you it tells you
[00:45:48]  right away who created react and it shows jordan walk and then you look over here and you're like is this jordan walk um it's actually andrew clark and
[00:45:59]  dan abramoff it's kind of funny for the longest time it was it was just like a picture of that dan abramoff um and i i think sometimes there's
[00:46:06]  some confusion there um dan did not create react um he's an amazing steward and and you know maintainer of where react is today but it's just jordan cr
[00:46:16] itted react and um essentially uh it was not his first foray into trying to create uh javascript framework um he jordan had lots of ideas and he was he had
[00:46:31]  a vision for where the web could go and i think one of the things that people don't realize is a lot of the developers who were building stuff between 2009 and 2012
[00:46:42]  developed in the pre single page app web they had experience they understood that it wasn't just simply a win to do single page apps they understood the trade-offs so like they
[00:46:52] 're always considering how their paradigm could expand and jordan was actually no different um if you want to see something by jordan that predates react just to give you an
[00:47:03]  idea what he was working on before he did react he actually did something called fax js and i i love looking at this look hasn't been touched in a like oh i
[00:47:10]  guess someone did something fix to read me five years ago but like it's this is 11 years old um it's 113 commits i i don't know where the where the
[00:47:18]  start is but this shows you that in 2011 and 2012 jordan was working on this not react okay so react probably somewhere in 2012 is where he began his work here he
[00:47:34]  kind of moved on from his original framework that he had and let's see here um and let's he he tells everyone that they should just use react because it's much better
[00:47:46]  in every way but i want to just kind of point out here about what he was trying to accomplish with fax js because this puts you in perspective because sometimes when i
[00:47:52]  like pull up marco and and show people that marco was doing partial hydration in islands and this was and out of order streaming and all this stuff and they were doing it
[00:48:00]  in 2000 like they it didn't get released 2014 but they're like working on that stuff in 2012 i want you to understand that you know jordan working you know facebook and
[00:48:10]  stuff like we're thinking about stuff that we're only releasing into the wild now look seamless client server rendering so this was jordan's 2011 framework he was worried about is
[00:48:22] omorphic rendering he want reactive he wants to use automatically update on state change no bindings necessary so no data binding this is still kind of like react performant obviously and structure
[00:48:30]  high level components functionally defined declarative use this all sounds great and this is all before react so okay and yeah it shows an example and oh interesting i think we see js
[00:48:44] x's uh predecessor here or at least hyperscript he's using functions to define the view but what i wanted to kind of point out here is yeah so i guess
[00:48:53]  these are kind of like components and it returns a div there's similarities here to react but the reason he called the fax js um to my understanding was he had this idea
[00:49:02]  that the app could render on the server and then be sent across the wire and then like continue in the browser that was that was like his goal here right kind of like a
[00:49:14]  fax machine like the idea that you could like start in one location and pick it up in another location and the way he saw to do that was using a diff engine
[00:49:25]  essentially he was picturing a world where you could have the server send updates essentially like send like full pages maybe even and then the client would diff the changes so you could keep
[00:49:37]  them going to the server and diff them and essentially only apply the updates on the diff so he basically designed a diff engine that worked for cross server browser and if that sounds
[00:49:47]  familiar to you i am describing react server components and this is 2011. okay so i want i want to put it out there to you all that that there is some sort
[00:50:04]  of like a lot of these ideas have been floating around forever um and even influenced like where jordan saw react might get one day he you know his original thought was you know
[00:50:20]  this is how i could do something and because think about what you had to solve a scale for a company like meta or like ebay in case of marco like they
[00:50:29]  they had these like uh ebay was java and i think uh i was was it was it php over uh facebook back then but like they had these classic backends
[00:50:40]  and if javascript was gonna get a toehold in here it needed to be able to properly handle server rendering and actually be able to deliver the same level of experience
[00:50:49]  so this this this was very much on people's minds and essentially i just wanted to kind of point this out here because this is what we this is where we enter into this
[00:51:02]  conversation right um because jordan decided you know he he'd done this i don't know the whole story behind this but he he he figured out yeah he started working on a
[00:51:12]  new framework and i think it was him and i'm trying to remember who he kind of co-wrote it with but this this was kind of the influence and the
[00:51:18]  inspiration that led to him working on the framework and um i i actually got a little clip here i want to show that it's nothing to do with jordan but but i
[00:51:29]  want to show you kind of the perspective of react kind of in hindsight this is better than i could say so i'm just going to grab this rich harris talk you could
[00:51:40]  and you guys just kind of chill on this for a second because this is probably the my best take on how react entered our world so yeah let's just do this for
[00:51:58]  a second okay oh really the audio is not coming in oh the volume is too low is this is this better sorry this is important so still can't hear right oh
[00:52:44]  that's too bad i assume that i could get this audio device oh man that's that's good that's gonna put some fun fun on us here um hmm gotcha
[00:52:57]  okay well it's good we hit this now so we can we can figure this out i'll give you the link but i've got too many video clips for us to to
[00:53:13]  resort to this so give me two seconds what i'm gonna actually do um is i'm gonna i'm gonna do something here with the sound give me give me two seconds
[00:53:37]  it's funny i didn't realize it was actually playing through my speakers is how you all heard the sound in the past um let me let me just try this for a
[00:53:44]  second can you hear it now did that work did the did the okay yeah okay one more thing i know exactly what i need to do i'm sorry this is gonna be
[00:54:20]  fun okay okay i got i got it i got it um all right i'm going to try something which is probably terrible but i'm gonna just try straight up um
[00:55:20]  using the macbook um pro speakers and built-in just right like this shouldn't be using my headphones anymore oh yeah it's still coming through my headphones that's hilarious
[00:55:44]  yeah yeah yeah yeah yeah okay yeah okay yeah okay that's funny okay it's it's it's act even though i changed what stream yard's using it didn't actually
[00:56:04]  change the audio device that uh um that youtube's was using here um which is funny because i i changed stream yard but i actually have to get the browser to do this
[00:56:19]  that's that's that's that's annoying and yeah i'm not going to help us a bunch is it because i'm like looking for a setting here but it feels
[00:56:34]  like i almost have to reset the browser yeah sorry i just sorry about the technical stuff we will figure this out yeah it's not enough to reload the page i actually sadly
[00:56:49]  enough have to probably reload the browser unless i unless there's like a place that i can yeah uh but i can't yeah okay yeah let's yeah let's let's
[00:57:07]  see that uh firefox oh i see yeah it's because it's because the system yeah yeah okay so this is a fun thing it's because the system is like uh
[00:57:36]  it's like i'm using this but what i wanted to do is a system actually to to do this right now if i change the output and i change the input on the
[00:57:50]  system then that should be enough go all right sorry this is and is that enough to fix google chrome the way sister it is okay sorry about that okay so now i have
[00:58:08]  i we have something that will work yeah okay cool and what i can do is i can i can i should be all if i'm smart enough here stream yard should still
[00:58:18]  be able to um essentially i i like i'm still coming in through my mic i can tell and i can still hear um i can still hear stuff like my own monitors so
[00:58:30]  i think i think we're good now okay so thank you all for your patience and uh let's let's let's get this going all right so i want to i
[00:58:39]  think rich harris gives the best introduction to to to like the feeling when react came in okay the wisest of the javascript elders came down from the mountain and said
[00:58:50]  i have created jquery and the villagers said jquery the actor from zombievers an elder rezik for it was he said no it is not a man it is
[00:59:01]  magic with these spells we shall tame the capricious browser gods and bend them to our will and the villagers rejoiced for the browser gods were indeed capricious and
[00:59:10]  cruel and visited much misery upon their lands and they replowed their fields with the new magic and at the time of the next code harvest all agreed that the fruits of their lab
[00:59:20] ors tasted sweet and ajax-y and there were conferences and t-shirts and other assorted merchandise and that was the end of the first javascript era the
[00:59:30]  tide came and went the moon rose and fell years passed and while jquery was still the dominant religion there were some who grew fearful that it was not powerful enough the elaborate
[00:59:41]  designs of the modern age then one day a traveler came from the western lands of zuckerbergia and said hear me for i bring a message of great import you're
[00:59:52]  all doing it wrong these primitive incantations do not befit our modern age of science and technology look at these wretched structures you have built i would not step inside for
[01:00:02]  fear of my safety in zuckerbergia we build not these mud huts but magnificent towers that reach the very heavens and we do it not with magic but with machines
[01:00:10]  come let me show you and the villagers looked upon the machines and they liked not what they saw was cast out as a heretic and yet some felt these machines could perhaps help
[01:00:24]  them meet their own ambitions and the heretics grew in number until the heresy became the new orthodoxy and the land was covered in machines and that was the second era
[01:00:33]  of javascript i'm here today to talk about the third area the chapter that's being written right now my name is all right so yeah okay hopefully you guys are
[01:00:48]  all still here with me that was sorry a little bit of a volume boost there okay so yeah he did skip the lot in the middle and i think that that was my point
[01:01:04]  right when i when i when i was when i was talking about this um that's where the perspective is and i just wanted to kind of put put that out there so
[01:01:12]  you can can kind of see you know but he did bring up a lot of good points when react came on the scene it presented a lot of really powerful ideas um you know
[01:01:24]  jsx and the point part there is understanding the separation concerns mod um the modern component model um formalized the idea unidirectional flow and and most importantly um look
[01:01:36]  at a framework as a philosophy and i want to touch on each one of those um here to kind of really get a perspective of what it was like in 2013 and 14.
[01:01:45]  um another great talk from this point uh was from pete hunt um but when you start to build abstractions on top of you know html you start to have
[01:01:54]  to invent a lot of things in order to get to the level of expressiveness you need to build real applications so now i'm going to pick on angular and i just pulled
[01:02:04]  this this quote out from the angular docs and i've highlighted every concept that they've created that i'm not i'm either not really sure what it means as a new
[01:02:13]  user of angular or it sort of exists in javascript and it's based on the idea that they want to augment html to support two-way data binding and
[01:02:23]  in order to do that you have to rethink the idea of scopes and if you rethink the idea of scopes you have to rethink the idea of composability and modular
[01:02:30] ity and you start building directives and transclusion and all this other stuff but i think the framework cannot know how to separate your concerns for you it should only provide powerful and
[01:02:45]  expressive tools to let you do it what i mean by that is that a lot of frameworks force you into this mbc style of development and mbc is great
[01:02:57]  however your controllers tend to get really fat or maybe your models get really fat if that's your style of building or maybe even your views all right sorry yeah this video was a
[01:03:06]  little bit quieter but hopefully you picked up some of this and he talked to most of the points but essentially this was kind of the first presentation where like like they really had
[01:03:21]  to kind of convince people that this was it was important to be able to you know escape from uh kind of this mvc pattern right um so this is this was one
[01:03:33]  of the the one of the kind of pieces to that um i think the other one that kind of came out around the same time uh that i want to show here is from
[01:03:42]  uh tom um and this is where he kind of explained um what i consider like what the the revender aspect of react let me oh interesting this one didn't want to
[01:03:57]  open on the same browser window let me get that one out of the way um let's get here and yeah i i will also link some of these things but let's let
[01:04:09] 's see if we can let's see if this works for us the simplest way conceptually that we've found to to build views to build this piece is to just basically
[01:04:20]  avoid mutation altogether and you're thinking to yourself like what wait what you need to update things right but instead you know what we found is that if you could just anytime your data
[01:04:32]  changes if we could just blow away our view and just re-render the thing from scratch like that would be so much easier right it would make your application the structure of
[01:04:43]  your application and the amount of code that you have to write it just makes it so much simpler right because you could describe what your view looks like and then never worry about updating
[01:04:51]  it it's just like okay when my data changes i'll just blow it away and re-render it but like does that work in the browser it seems like that would be
[01:05:00]  prohibitively expensive right that we all know the dom is slow and i feel like that's going to be like really you know memory expensive and just slow it's not
[01:05:09]  going to be performing and additionally like if the user is typing into a text box and then some comment changes right around that thing and you try and blow that away and we render
[01:05:17]  it's like you're going to lose their state maybe there's some internal state that you're not even showing you're not even displaying to the user but you're going to
[01:05:24]  blow all that away right so conceptually we still want this model though from a developer standpoint we want to be able to say okay anytime anything anything changes we're just going
[01:05:35]  to start over we're just going to blow everything away and re-render from scratch but we want to do it in a way that's actually performant and actually provides a
[01:05:43]  good user experience right so this yeah so i mean this this pretty much here i'm going to put a couple links here here's the pete hunt talk and this is
[01:05:54]  the the tom chino talk um i just i wanted to put put these ones in because i'm just kind of like to give you a little bit of perspective here because a
[01:06:03]  lot of people come into web dev more recently have seen stuff that dan's done or that um you know rich harris has done amazing speakers on these topics but like the quality
[01:06:13]  of this video is pretty poor um i was just looking at what what we're going and like can we get better than 360p and we can't um it's kind
[01:06:20]  of lost in history but these were just as groundbreaking in terms of thinking of where we we get today i mean people are pretty used to these concepts by now but this is actually
[01:06:34]  like this was a big deal i just said the technology was there but you have to understand we didn't know how to use it um and i got i got one more
[01:06:44]  from this chain and before we can break off and kind of dig into this and talk about this a bit and that's um what my favorite honestly from uh uh jing ch
[01:06:55] an so let's talk about some of the problems behind mbc that make it not scale and how flux proposes to solve some of those problems well mbc works
[01:07:05]  pretty well for small applications everything has its own particular role to play the problem is that it it doesn't make room for new features let's look at what happens to this
[01:07:16]  diagram when we add a lot of models and when we add a lot of views to the system there's just an explosion of arrows and if you just look at these arrows can
[01:07:27]  you tell if there's an infinite loop here where you know the model triggers something in the view and the view triggers something in a different model it goes in a cycle it's
[01:07:35]  really hard to tell just by looking at this and that's with all of your relationships drawn out if you were to look at that in code and try to figure out where
[01:07:42]  do i have an infinite loop somewhere in here that's causing my app to just go in constant loops it's really difficult i was drawing a very similar diagram while i was trying
[01:07:52]  to figure out the architecture of one of our more complicated interfaces looks very much like this and it was so complicated that i ended up drawing numbers instead of arrows to represent the relationships
[01:08:03]  between them that's how dense the arrows were getting so we want to do away with all of this what we want what we propose instead something called flux it's a single
[01:08:13]  directional data flow um and that avoids all of the double arrows that go that go in both directions that make it really hard to understand the system what we have is an action
[01:08:23]  coming into the system a dispatcher that sort of acts as the traffic controller for the whole thing the store which is the data layer that basically updates whenever you get a new action
[01:08:33]  and then the views revender whenever the stores say something has changed and then from the view side they can throw another action back into the system the dispatcher here is the
[01:08:44]  main um the main piece that enforces that there's no cascading effects once an action goes into the store you can't put another one in until the stores are
[01:08:53]  completely finished processing it that's pretty abstract though so let's work our way back but yeah i mean this this i hope i've emphasized how this was a real problem people didn
[01:09:05] 't know how to structure apps right mbc is an architecture um you know and one that kind of was inherently built from a world where our controllers weren't stateful
[01:09:17]  right so like this to be fair i i said it was important to recognize the stuff in the middle from a technology standpoint but react did come in with a philosophy and i think
[01:09:29]  i think this is really important to get because i said it started in the sense from jordan's facsimile thing that i showed you earlier like jordan uh jordan
[01:09:38]  was completely on it like he's later on this talk it's funny they're doing like an outro here and you know just check this clip out and then what jordan
[01:09:48]  did is he's like all right i'm gonna take the exact same code that renders an action button as divs and spans in the document and i'm going to turn
[01:09:58]  it into a native component in ios so use titanium js to basically take this representation of javascript the same code that we would run in the browser and turn that
[01:10:09]  into like rendered native components on ios using javascript core bridge um which is pretty nuts we don't talk about that too widely yet because we haven't like done a
[01:10:19]  ton of stuff yet this is this talk happened july 8 2013 and they're describing react native in so i i i i as i said there's incredible vision behind this
[01:10:34]  stuff i want i want i want everyone to stop and appreciate it from jordan basically describing server components back in 2011 to like this uh talk up here where they actually slip in
[01:10:46]  that they they essentially were working on something like react native back in 2013. this is before people even liked react if you if you looked at um uh rich's talk at
[01:10:55]  that one point in it he was like you know the the people sent the zuckerbergian away because you know it was heresy um so i i i i do want
[01:11:07]  to kind of point out that this is all part of a mentality built around um diffing essentially like this idea that you can build something and throw it away um over and
[01:11:24]  over again right so yeah like the there there are hints throughout react's history about where things would go and this is just in the first two years when they were still trying
[01:11:39]  to get people in on the idea right um so as i said we already talked about gsx separation concerns modern component model formalized unit directional flow but for me ultimately the
[01:11:53]  the real thing was the philosophy and and i want to i want to pull up this article um this little known article from uh dan abramoff he he wrote this in
[01:12:05]  january 2015. i don't even think he was part of the react team at this point or maybe just joined on and i i want to kind of throw this out there
[01:12:13]  because he never finishes the article at the end he's like we'll examine the in the next articles to be continued and he he never finished this article um um and it it
[01:12:24] 's it's kind of funny because like he was like let's just read it from this for just a minute because i think this is something to reflect on right i've
[01:12:36]  seen react misunderstood by smart people more often than any other javascript library react is packed with ideas that were radical at the time of its introduction this introduced an air controversy that
[01:12:46]  was hasn't quite dissolved after a year of using react observing people learning it i can say that the best parts of reacts are not the ones that made it famous it's not
[01:12:53]  about the virtual dom it's not about the custom event system or server rendering or jsx rather they are a few boring old and powerful ideas he called them old he called
[01:13:05]  those ideas old okay using other people's code is like surfing you control and surrender you've got to trust the wave to carry you but stop paying attention the first abstraction leak will
[01:13:15]  throw you under the water when we see something that is new both technologically and philosophically we tend to focus on technology part because we need to tame the magic first we
[01:13:24] 've had enough black boxes in our careers we want to understand if not the full picture then at least up to the level where we can make a snarky comment that is
[01:13:31]  also correct to some degree how is more viral than why at this point yeah so here here's my secret right he goes on to talk about about a bit more but he
[01:13:49] 's like reacts true strains are composition unidirectional data flow freedom from dsl's explicit mutation and static mental model this is how he summarized it and i'm
[01:14:03]  going to agree with dan yeah i'm agreeing here with 2015 dan in fact that this is what's important i wanted to show you know these pieces of the philosophy so people could
[01:14:16]  understand it right like composition is king unidirectional data flow is how we wrangle in our programs freedom from dsl's i'm gonna i'm gonna say that
[01:14:27]  he's this is a little bit strong i don't i think jsx is a dsl so i don't i i i think restraining the dsl is powerful but
[01:14:38]  it is a dsl nonetheless but moving on explicit mutation and static mental model these help people reason about what's going on in your app and this is what react brought to
[01:14:54]  the world as i said the technology pieces existed they as dan called them old and boring but being able to codify what's valuable is something that react did and did very very
[01:15:08]  well yeah so dsls um what he's talking about is the template language remember in that talk with pete hunt i don't know if you guys all heard it he
[01:15:16]  was highlighting all the words that angular introduced um to describe the language and that you needed to know to even get some data bound the ironic part is if you're talking about
[01:15:25]  language domain specific language and not templates react has actually introduced a lot of it since where it started like you know some of this today's uh stream is going to be seeing seeing
[01:15:37]  that whole thing where you like where the hero lives long enough to become the villain that's that's that's what's a bit have been going on with react right um
[01:15:47]  so i i think i think this is i think this is really key to understand if you're coming out of that you know introduction p some people were bought into what react was
[01:16:02]  saying some people didn't at first but because of that fundamental philosophy react was able to take over people it was a subtle thing they would try and be like oh this actually
[01:16:15]  isn't bad and then it would grow on them and it was the way they were able to build on top of it you know take in react's case the the components were
[01:16:23]  these primitives that they could build on top of um and that was enough to get people up and started that it's within two years by 2015 the narrative around react had
[01:16:38]  completely changed um it wasn't it like the early years people were like jsx and whatnot but if if you go you know forward a couple years things changed so much and
[01:16:53]  suddenly the virtual dom went from being like uh oh uh you know a novel trick to being like well i mean you've seen the memes about it probably still to date um where
[01:17:04]  like like you know v doms faster than the real dom you know have you ever let me see if i can find one v dom real dom like i i there's
[01:17:17]  there's enough memes to fill a book but this is like this this is start this is what started out of this right um and and part of this kind of came about because
[01:17:34]  like there the model was great the patterns are great and apparently the performance was great so i want to talk about that for a little bit and do a tangent because this around
[01:17:45]  2015-16 once react started getting adopting adopted we started seeing like a kind of like a narrative develop around like being performant essentially and um i i think it's kind of
[01:18:04]  interesting because the v dom wasn't necessarily that performing if you look at if you listen to more of those talks i showed you at the beginning um pete and tom were
[01:18:16]  just like look we realized you'd think that blowing everything away would be really bad you know and really unperforming and we couldn't do that but it turned out it was
[01:18:24]  fine it was like as fast as angular so like it's it's it's okay you know but what ended up happening is somewhere in the middle we decided that react was
[01:18:36]  even faster and i i think we got to give credit where that's due to our man ryan florence um who you some you know is the creator of react router
[01:18:50]  um also created a remix and are arguably one of the best public speakers especially on topics related to react ever his talks are all absolutely amazing and i'm gonna i want to
[01:19:01]  pull this one out because this is the beginning of that moment where people started going like really highlighting this whole performance thing right so this is all the same app and we actually
[01:19:17]  have a real version of this thing um at work and it monitors all of our databases uh well all of our database clusters and i did it in each one of the popular frameworks
[01:19:33]  ember was the original one that we had and we started running into some performance issues uh actually the memory just kept climbing and climbing and climbing so we put a meta refresh
[01:19:45]  on the html for every minute uh otherwise we'd hit the v8 1.48 whatever gigabyte limit and then uh yeah it would die all right so you can
[01:19:56]  see as i move my mouse around in this version uh that pop-up this is ugly it's just funny demo code but you can see that every now and then that
[01:20:04]  stops my cursor gets way far away from the pop-up angular does a great job and then uh react over here is also doing a great job uh down in the bottom corner
[01:20:12]  you can see the memory usage of each of these apps um and uh stanley stewart i don't know if any of you know him used to be a co-worker
[01:20:22]  of mine one of my favorite people he identified a memory leak in ember which apparently he fixed last night but i didn't get his code to fix it so we'll see
[01:20:30]  this number just keep climbing over here um so this is neat let's uh let's let's pump it up a little bit let's make it do something more um 25
[01:20:40]  rows is not a big deal 50 is neat but for the inches of time let's go straight to 100 rows of data we'll let ember think about there we go
[01:20:55]  um so now we're already at 100 megabytes down here and you see i'm not getting any pop-ups as i move my mouse around um we have 100 database clusters
[01:21:05]  now in our real app so this is not like some contrived example this like that's where we're at um and it is useful to see them all uh angular does
[01:21:14]  a great job still uh i can scroll pretty well you can see the scrolling sort of jumps like it gets stuck occasionally when uh hits the digest loop i think and then our
[01:21:23]  react again does a great job we don't get any jumpiness when we scroll and the pop-ups are very fast um let's just see how different these things really
[01:21:34]  are so as soon as it's done chunking new data and rendering i'm just gonna do it again i mean it's yeah yeah it's coming now here's the
[01:22:01]  really impressive part so like angular's still doing a pretty good job here and this is this is a contrived example uh but as i try to scroll uh it's
[01:22:08]  you know it's not really working very well and the pop-ups aren't showing up uh but man react is still just like it's like nothing is even happening over here
[01:22:19]  um and you also notice as i hover over this my pop-up it's the stuff is changing inside but over here we get like it shows up and then it disappears
[01:22:31]  and now it's never back again um so all this demo is basically saying is you know what the human might not be able to process 2 000 things on a page at once
[01:22:43]  but if your app wants to do that it can right so yeah this this this demo was a was a big deal at its time um and it it it kind of cement
[01:22:58] ed this narrative that virtual dom was faster than real dom um yeah this presentation makes the ember team to completely change the renderer yeah yeah this this people understand how huge this
[01:23:11]  was like this was like people are just like uh you know and honestly the the thing about this and i'm gonna drop this link in the chat because again this is amazing talk
[01:23:21]  um if you go to the end of the talk um and i suggest you do if you haven't seen it at all um ryan florence and this is 2015
[01:23:29]  it describes how he's going to make remix uh five or six years later this talk actually has a whole section where he shows how to do progressive enhancement with server rendering um so
[01:23:40]  again i just want to talk about you know and draw attention to the long-term vision and direction even you know at this point um basically all the secrets of remix are
[01:23:53]  are kind of on on display in this 2015 talk and the thing is the benchmark i love this one because this benchmark is actually still here today right um you can kind of go
[01:24:09]  and find it and it's on github here and yeah it's let me drop that in the chat for you all in case you want to check it out yourself
[01:24:18]  it runs on your computer like a lot of some of the older benchmarks did it looks like i put a dash in front of it sorry but um i want to show this one
[01:24:26]  because it hasn't been updated for ages but this this benchmark is is real right like um if we i don't know if we can find old ember but like if
[01:24:39]  we if we take react obviously things are much faster on computers today that no one's like worrying about this kind of stuff anymore uh you can't see this closely but react's
[01:24:47]  getting about 130 uh 130 frames per second or whatever on my computer and i can crank it up i guess and it doesn't change it it doesn't change it too much
[01:24:59]  but if i if i take something you know naively implemented in something like uh knockout remember knockout was my favorite framework let's try ember first ember ember
[01:25:11]  is okay it's getting actually 120 so they might have updated ember after this thing but let's let's take my old buddy knockout knockout's getting about 50
[01:25:23]  but by comparison in this benchmark um and you have to understand back then when computers weren't this fast it was more like knockout was getting like 10 right um in fact in
[01:25:37]  this benchmark if i took an inner html um in vanilla like this it's actually i'm getting 100 here it's actually faster than knockout using inner ht
[01:25:51] ml knockout was half the speed of just like someone naively putting inner html in and this this benchmark is kind of stupid in the sense of like whoever is
[01:26:03]  going to try and send a whole page's data constantly at fractions of seconds to diff that are you more likely to interact in a specific way or are you more likely just like
[01:26:13]  smash the page with data um and i have to admit this is yeah like this just wasn't you know the this is just wasn't what these um kind of fine-
[01:26:29] grained libraries were built to do um they were they were very very poor at this benchmark um let's see if we have inferno here yeah there we go yeah i mean
[01:26:38]  there are faster vdoms now right inferno is pulling about a 160 right um and i but i just want to like point out here that like that like this was
[01:26:52]  groundbreaking and it made me go okay no i need to show how reactivity can still play in this game um and this is a little bit tangible but like yeah it's all
[01:27:04]  it's getting 180 so you don't need a beat on to do this but i i but i want i do wanted to kind of point out that that this this this
[01:27:19]  just changed everything people started really getting actually into benchmarks after this that that talk was february 2015 um the the infamous js framework benchmark that you guys um might all be familiar
[01:27:33]  you know the ones with the colored graphs uh the greens the reds that you see everywhere the first version of that was a was a gist um on github
[01:27:42]  that was authored in january um uh 2015 as well let's see if i can let's see if i can pull this up but i think this started where was it
[01:27:56]  yeah here it's someone made this demo app that did the js framework benchmark back in this suddenly performance entered the conversation um around 2015 and it wasn't really the highlight before
[01:28:09]  that right if i think a lot of you have seen this table now but to kind of put in perspective uh i i've got round one here the first time he uh
[01:28:21]  stefan published the results and i don't there's only limited set of frameworks that were available at this time but like you see angular and angular 2 and aurelia and
[01:28:33]  ember and mithril reactive if you aren't familiar is um svelte's predecessor created by rich harris react vidom and view and essentially if you look
[01:28:45]  here react is this gray one it's it's pretty good actually in this world like you see ember being these really tall ones um but it's not like leading the pack
[01:28:56]  it's just kind of mostly kind of middle of the pack um in a lot in a lot of these benchmarks and to be fair at this point we didn't understand a
[01:29:04]  lot about these benchmarks um we didn't understand the difference between how you can use keyed and non-keyed to kind of cheat at it or whatnot like uh that's
[01:29:15]  fine um the it wasn't until round three in july 8 2016 that the benchmarks actually kind of started resembling what we what we see today um and you can see that
[01:29:29]  the you know we were filling out our chart before right um the world had started growing uh beyond where we started at right because i'm going to put another line in here
[01:29:42]  and and essentially a lot of these frameworks and different different ones showed up in here um during this time period where i'd call like uh let's go what do i want to
[01:29:56]  say look at 2013 2014 um and then we're gonna put one in here for 2015 2016 right um i i i don't have exact dates but you oh not that
[01:30:25]  um somewhere around this time we're gonna start seeing stuff like view show up um uh who else oh nope um maybe reactive um mithril different vdom libraries um so
[01:30:52]  this kind of this is all kind of during this time period and they all had their various influences um actually maybe i should rearrange them around like this so let's get some more
[01:31:06]  arrows going because essentially i think i could be wrong here but if i'm if i'm right the arrows roughly mithril was like this and like view was like knock
[01:31:22] out and react because it's using like the vdom and like reactive was like very much like knockout you can kind of see how how this started building out further from
[01:31:37]  here um through this time period so yeah i mean and i'm we're playing a little catch up here because i think um if we go further out into here we're gonna
[01:31:55]  find pre-act and inferno all right um and these are again very much off react right yeah i i this is what i'm getting getting at basically during this
[01:32:24]  time period um we started seeing a bunch more frameworks come in and they aligned with react's mentality i would say 2017 16 17 was when react really exploded like like when we
[01:32:41]  were like yes like this is just the way like um and uh i was showing this table i mean when this got posted around 2016 you could see a lot of different libraries you
[01:32:54] 're like okay yeah vanilla js is obviously our baseline it's amazing and a lot of libraries were like in the yellows here like around double the speed we had some red
[01:33:02]  ones like reactive again reactive libraries didn't do well in a lot of benchmarks um generally um was not doing great um ember i mean cycle some more functional programming ones there's
[01:33:18]  a lot of approaches that people played with that were incredibly um a lot slower right the funny thing is like react and angular almost all stayed around the same zone all throughout the
[01:33:31]  years it was like they're watching each other um and actually i missed one on on our chart uh an important one uh right around here um angular not angular js actual like angular
[01:33:46]  2 came out around this time period as well um and it was funny because it was influenced by react and it was influenced by old angular okay but what you start to see
[01:34:00]  here is there's a there's like a singularity building around react here it's like like this is a like everyone kind of acknowledged what reacted had done um and this this
[01:34:12]  this zone of all the arrows yeah i can bring i can bring view down thank you these things aren't connected properly all right let's bring view down all right okay a
[01:34:30]  little bit better but yes there's just there's just too much going on through react what made these older reactive frames well the problem is they were i don't know why
[01:34:44]  reactive wasn't doing good on some of these let's look let's look at where it's slow reactive reactive yeah honestly i'm i'm honestly not sure reactive has the fastest
[01:34:59]  select has a fastest select swap rows which is interesting i think people don't understand keyed versus non-keyed back in generally speaking the problem is reactive libraries have a
[01:35:08]  huge amount of memory um that was necessary um so you look at reactive they they required more memory to like set up all those subscriptions and bindings so they lost hard on things
[01:35:19]  that involved creation or just like mass blasting out the stuff if if you had a benchmark like an animation benchmark where you had to like update some circles or do one specific change
[01:35:29]  like some action um or animation reactive libraries tended to kill vdom libraries like it was the reverse thing but um generally rendering large pages was something that vdom libraries did better right
[01:35:46]  so okay but it's funny there's actually only a couple green libraries on here and one of the key ones here i want to point out is actually inferno inferno
[01:35:58]  came on the scene and it you could just tell it's just like it was just faster than everything else like not even close and it was a vdom library like react um
[01:36:09]  and i think that's important to point out here because as i said react's always been kind of middling but now that we started doing these kind of benchmarks and stuff we
[01:36:20]  actually started seeing super fast um react uh sorry react like libraries like inferno and actually the author of inferno dominic ganaway the creator joined the react team like
[01:36:36]  six months after inferno went out he he told me one time he went to a conference talk and everybody wanted to know how inferno was so fast and he he actually like
[01:36:45]  after he'd done his talk he kind of like had a little session with all the framework authors and he just like went over it and kind of like it was like it
[01:36:53]  was he said he was like i i was like i didn't know these people that well and like knew of them and it was really intimidating because he was like the like the
[01:37:00]  new kid coming in and you know all these experts who've been working on farmers forever were just like how did you do it you know um and as i said the long story
[01:37:09]  short he actually joins the react core team where he ended up working on stuff like pre-pack which if you haven't seen it um pre-pack um facebook although it
[01:37:21]  might be easier to search meta is pre-pack dead facebook archive it is dead which was this thing basically would evaluate yeah they're not going to give me a good example it
[01:37:32]  evaluates code ahead of time at compile time so he started working actually on a react compiler at the time to see if he could push the performance both taking the techniques of
[01:37:41]  um of of inferno which is incredibly fast vdom and that and seeing if he could push the boundaries even further with a compiler um and we're going to talk about i
[01:37:53] 'm going to get into that in a minute and and the impact of that but code rebuild no i mean the beef inferno is different and diverged but inferno looked
[01:38:06]  identical to react um pretty much at this point with class components and stuff it looked almost exactly the same it was like a drop in it has it compat just like preact um
[01:38:15]  and it was just it it killed at the benchmarks um but yeah we'll get to that in a minute so yeah 2016 17 um uh dom's brought on the team by
[01:38:29]  this point react has kind of gone through a change of guard jordan walk isn't really running uh the the isn't like really as involved anymore and the the big part of
[01:38:42]  um react has actually been uh seb who's uh sebastian marc bodge i i never say his name right um and dan and andrew came in around this time too like
[01:38:52]  the current react core team kind of came in in this uh during this time period and yeah i i think i think it's it's good to kind of understand i i
[01:39:05]  think i think the scald rocks already shows it really well how how prevalent this thinking it got um it's funny because we had frameworks every week during this time period because like
[01:39:17]  back here we had tons of frameworks because everyone's like oh what's the paradigm i'm going to try all these different crazy different protests here we just got a ton and
[01:39:26]  ton of vdom libraries that were essentially trying to push the boundary in a different way can you be small like preact fast like inferno yeah we can get to this later
[01:39:41]  but if you've been watching the stream the dialogue i'm going to point out here is i don't think react is going to borrow very much from solid at all um
[01:39:50]  and and it's it's because they've had a vision for like a decade now um so okay so yeah i look yeah we okay i'm sorry i'm just catching
[01:40:09]  up where my notes are because this the the thing is where we are right now um in our stream and our conversation is kind of i don't know if i want to break
[01:40:21]  react into ages but it's kind of what one might consider um uh i'm actually going to extend this out to 2017 as well the the the kind of golden age or
[01:40:36]  of the first age of react like this is how it kind of started how it grew and how by the end of 2017 we have stuff like react native or that was in 2016
[01:40:50]  i believe but react had shown off its capability and had grown to be the most popular um javascript framework it didn't pass jquery completely until much much later
[01:41:00]  um but like it had already won by this point and that's where most people's videos might end but we're we're we're only like this is if you look in
[01:41:11]  years we're this is only the we're only gotten the first four years of react here um and it's we've had what it's been another five years like this
[01:41:21]  is only halfway through our story right yep yeah exactly all the tooling came up with react and this is a really good point thank you i didn't have this um um kind of
[01:41:31]  mentioned but the tooling built around this ecosystem um which is crazy in a sense because react defined a spec with jsx and then they they didn't have to worry about if you
[01:41:43] 're building a new framework today and you try and build your own dsl like svelte or view or whatever you have to do an incredible amount of lifting to get
[01:41:49]  like all the niceties that we we know you you know get the language server for typescript and get prettier you know code formatting and completions and and syntax highlighting and like
[01:42:02]  all of that stuff um the react team was obviously involved with pieces of that um from from time to time but like the the whole ecosystem kind of built around this model like it
[01:42:14]  was just this crazy convergence point um and i i think i think i think i think that's kind of you know worth pointing out right ever was actually the first to use
[01:42:28]  es6 compilation by default yeah i'm it's quite possible but the thing is like yeah i mean the funny thing is if you go back and look at uh react code from
[01:42:40]  like 2015 uh you know it might not all be what you know it's cracked up to be one thing that i didn't show from this benchmark finally was going from react
[01:42:49]  0.14 to 15 was actually a pretty big performance regression here um i think they they address stuff over time but um like react kind of grew up between this time period
[01:43:02]  and you know it established itself and and and changed it was like okay we now care about weird like consistency issues and all this stuff like it was a changing of the garden in
[01:43:15]  terms of people and a changing garden in terms of philosophy redux was damn before i got to face like oh ss because since react was wild back then yeah yeah yeah
[01:43:27]  exactly they pulled a lot of people in from their ecosystem dan obviously was working on redux um and obviously andrew clark and and also like stuff like recompose and uh
[01:43:37]  what was uh was it yeah was it recompose yeah like there's a lot of patterns and stuff like i i can't i i can't like people there's new things
[01:43:48]  every week like you can go look and see some old kensie dawn art articles but things like hawks we're talking about not introducing stuff technically hawks or higher
[01:43:57]  order functions are a functional programming pattern but hawks is definitely a part of the react vernacular the ability to wrap components and get them um things like render props even though react
[01:44:09]  funnily enough had rejected the dsl they had essentially introduced concepts and language just as much as if they had a dsl right like i i i think this is
[01:44:24]  this is this is something kind of worth getting into um but the reason this all worked because this was reacts um um approach to composition i don't know have you uh was a
[01:44:38]  recompose js maybe if you've ever seen andrew clark's recompose i think this is this is a is something here we're going to get to hooks in a
[01:44:46]  minute but this is all pre hooks um recompose was this idea that you could use higher order components to inject state into your function components everyone just wanted to do these function
[01:44:58]  components which is is funny because if you think about it for a second it's it's it's not completely funny but if you think about it for a second react put all
[01:45:09]  the logic together in the component and said no we don't need separation concerns you can split the code the way you want to and break it slice it up the other way
[01:45:17]  but then um people started flocking to function components which are basically just like templates for the most part and and then they were like well i want to use state with it i
[01:45:29]  guess the thing they want to get rid of get away from was the class methods but recompose was a really cool idea because then you could stack these things on top and inject
[01:45:38]  state and then essentially write your function components and then put your logic on on top and the funniest thing to me and people might disagree with me on this but as you start
[01:45:48]  composing large parts portions of the state using special these primitives they had like the inject state or reducers and all that stuff and you start stacking them on top of your
[01:46:01]  component and then and then have your component this started to look like view um yeah yes right like doesn't this like this this started to look like view and i i mean
[01:46:18]  i like this pattern but if if you've ever seen the options api from view it was basically this thing these defined objects that you'd stick on top and then you'd
[01:46:28]  have your view underneath and if you squinted hard here this pattern kind of looked like it and i know this is not the takeaway that most people would have here but
[01:46:37]  i this was the first indicator to me that like trends just kind of go in these circles right like uh i'm gonna keep this here but i'm just scroll down but like
[01:46:48]  uh you know what i mean like yeah i don't think i can bend can i bend this line yeah like we i don't know if there's and there's probably
[01:46:59]  an end of this loop here but but essentially there was this dance through the early phases of our frameworks where it was like okay functions are cool and then and then it's
[01:47:17]  like oh no there's like too much stuff you know and then it's like i i i actually had like a while ago i'd really thought about this but i i'm
[01:47:31]  trying to remember what the order is but like every time we weren't no one was completely happy with the with like the any of these you'd like build everything up in
[01:47:46]  functions and then you get to a point where the function had too much stuff in it um and then you'd be like yeah yeah actually yeah i have this backwards then you would
[01:47:55]  end up extracting stuff into objects and like pass it through the functions and then eventually those objects would just become classes and then at a certain point you were looking into classes and you
[01:48:04] 're like i don't like all the methods hanging off them i want to get back to functions again and we did this dance like through framework trends like multiple times where it
[01:48:14]  was like functions to objects to classes to functions to objects to classes like and um yeah something had to break the cycle um because like we weren't we weren't getting anywhere right
[01:48:30]  and sometimes this distinction is what made you decide which framework you liked like this was as opinionated as the dsl it's like well i like objects i like functions right
[01:48:40]  um i like classes and as i said what but what made react really cool and this is the part that i want to highlight here is it could do it all some a framework
[01:48:51]  might be opinionated about like yes this is the way we do it this is the way to do it but because of reacts focus on its primitive um at the time it could
[01:49:00]  actually be all be all of that and you might be going oh is that great like i mean i was in projects where all three patterns are being applied whether it was like
[01:49:13]  using the hooks to inject objects like recompose whether it's the old class components or or functions yeah right i i do think that's why classes versus objects is worth a distinction
[01:49:27]  here right but yeah it's more the way that they're being used because like because objects get introduced almost as like output of factory functions and then they become the thing because
[01:49:40]  no one wants the functions anymore and then they evolve into the classes which then get devolved back into the functions um so yeah this is this little loop um was real and we
[01:49:51]  needed something to change but in a sense everyone was very very happy where react was and and react was kind of at this all-time high um and i guess the the
[01:50:06]  challenge here was things weren't going to always stay this way right new problems web dev moved on and i think from react's perspective they hadn't finished the mission right like this
[01:50:20]  wasn't about being reactionary react was like they set out to do something at the beginning that i've talked about you know um with the work from jordan and they
[01:50:31]  were like we still have more work to do so um you know as time goes on we get later in this graph it's funny svelte actually exists um here let's
[01:50:44]  add svelte here but svelte here is not much different than reactive to be fair um svelte does exist here um but it becomes much more relevant when
[01:51:08]  we we get into the next period which i'm gonna call 2018 to 2000 i mean it's almost till now and you you're probably thinking like four years is a long
[01:51:24]  freaking time you know to for these categories most of the time we've been doing two years and like tighter gaps but this has really been part of the same uh the same time
[01:51:37]  period here right um and we're gonna we're gonna get into we're gonna get into that here in a second uh one sec as we talk about modern react okay and
[01:51:59]  modern react is probably something that continues to kind of shift in definition but i i think i think i think it's important to know that it has its roots back in these
[01:52:11]  this earlier time period but essentially um it's continuing to evolve even today so let's let's see here right yeah yeah i could probably split this in two and i actually
[01:52:35]  wrote an article like um there there was actually a time yeah i think i nailed it perfectly actually i i wrote an article right at the at the tipping point between people loving react
[01:52:49]  and disliking react and actually brought that one back up on twitter today because it's been another two years since then and it's like how have things changed right hooks did
[01:52:58]  change the game and hooks are a big thing and they are but they weren't the first thing that signaled the entrance to the modern react age right we focus on hooks because
[01:53:10]  hooks were the thing that mattered to us and changed the author ending like i the bit of my personal story flows into this time period um you know because i was using my stuff
[01:53:23]  and i didn't care and i was happy using my stuff then ryan florence goes and makes a benchmark and everyone's you know like oh i don't know
[01:53:30]  if we should be using stuff like knockout anymore because uh you know reacts faster and all this stuff and i'm like okay i'm gonna show you that a reactive system can
[01:53:39]  be fast so that's when i set off right around the time of like 2016 17 to work on solid right i didn't release it too much later so we can put
[01:53:50]  solid on the map here um it's all solid solid's a funny one because solid is is again i love how these arrows bend everything together because solid why did i put it
[01:54:02]  over here solid wasn't very influenced by svelte solid was influenced by knockout way back here influenced by elm way over here and influenced obviously by react right here
[01:54:22]  um and but the important thing is um sorry like just kind of like get into this thing is that's where i was sitting at when hooks came out but the the role for
[01:54:40]  for um react was as i said react wasn't even thinking about knockout js or reactivity um when they introduced hooks and i i think it's to understand that you
[01:54:52]  need to actually trace back to what that the first thing that they did to usher in this new modern age of react and that was they introduced the idea of suspense and concur
[01:55:04] rency first um so let's see if i can pull that up searching for a better way to collaborate with your team ads sorry an online whiteboard mate i type js conf
[01:55:16]  iceland and even though it waited a little bit it still froze later because the underlying problem is just that the update is big and it's synchronous so as soon as react starts
[01:55:28]  rendering it cannot stop well what if there was a way to make updates asynchronous so that we have to start rendering something but then yield back to the browser and if there is
[01:55:40]  a higher priority event like an input the browser could handle that first and not start at the threat so i will disable the throttle info now let's see how it normally behaves
[01:55:50]  in asynchronous mode so what you can see here is that when the input is short and it doesn't uh there is not a lot of computation it updates almost synchronously so
[01:56:09]  it feels like uh as if it was synchronous but if i type more what happens is that instead of uh hanging the thread the thread stays responsive you can see that it's most
[01:56:25]  agreed but instead we are just uh updates the charts less less often and uh they lag behind my input a little bit but in many cases this actually doesn't matter and it
[01:56:36] 's a completely fine compromise uh from the ui perspective let's see what happens on a slow device so i enable the cpu throttling four times slower you can see
[01:56:51]  that it does stutter a little bit but it is mostly green and it tries to catch up to my typing even though the device is slower compared to the synchronous version where
[01:57:05]  it just stutters on every keystroke this this this was the the demo um and some uh pointing out yeah react fiber is a big deal the thing is they introduced fiber
[01:57:20]  and people were like okay that's cool but it didn't mean anything until we could actually see a place where fiber actually had a use and it's it's it's
[01:57:28]  kind of funny because this demo the original one is actually the one demo that the current version of reacts concurrent rendering is not good at um because they actually changed their approach um which
[01:57:41]  actually makes this this specific demo not um like not a good demo anymore but it takes some hindsight perspective here to understand uh what what what they showed off here and that was
[01:57:55]  that um they actually introduced two concepts two features in this demo um but people but they got wrapped into the same feature and and i i to this day i don't think it
[01:58:10] 's very clear to a lot of people that there is actually kind of two sort of related features here um the the first one i showed you um is actually kind of built
[01:58:22]  upon the second but the the idea is that um react for the first could render things in parallel not at the same time obviously because um uh you this if you have one
[01:58:38]  cpu core that's all you can do right you can just take turns or whatever but essentially react now had the ability to do multiple trees that was a big part of it
[01:58:46]  and the second part which is what we showed in this demo was react had the ability to switch between those trees and rendering and actually schedule stuff based on uh priority but both
[01:58:59]  abilities have can be useful on their own even though they got wrapped into this single thing the the piece that we just saw here um where it's about you know giving each piece
[01:59:11]  of cpu was called time slicing originally um and the other piece actually uh dan demos a little bit later and it was the piece that i was actually more interested in which
[01:59:23]  is that see if i can find the beginning of this demo because it's actually kind of long but so now when i click it shows an inline spinner yeah okay yeah
[01:59:33]  to make loading id an argument to render list and i'm going to call render list uh so if we are currently loading which is what we wanted to ask react then i just
[01:59:46]  pass the current id otherwise i pass no and i can even remove the domain placeholder now let's see what happens so now when i click it shows an inline spinner
[02:00:03]  and again no race conditions i can click here then click here okay sorry i jumped too far ahead essentially less than a second i start loading a movie and i load the details first
[02:00:15]  yeah it shows the details but the reviews are still loading and when the reviews are ready it shows the reviews and again there are no risk conditions i can go back i can
[02:00:29]  hopefully you hopefully you pick up that piece but essentially um he was just showing like this this flow and i'm just show really quick here is what kind of typical flow you'd
[02:00:39]  find in a react app classically and i load the details first so so i can wrap the movie reviews with them let's see what happens sorry let's see it one more
[02:00:52]  time so i pause all new requests i start loading a movie and i load the details first it shows the details but the reviews are still loading and when the reviews are ready
[02:01:05]  it shows the reviews right and again there are no risk conditions what he's showing here is when you go to a new route you have to go to the route to render the
[02:01:13]  new route so you fetch the data when you go to the new route and then you have to show a placeholder for it and then as stuff comes in you you can
[02:01:19]  show it right and this this is pretty much um the way you typically do stuff but the idea that was is if with with using um and then he goes and shows how you
[02:01:32]  could make any an api that works the opposite way which is that when you click on it it actually gives a pending indicator right away and then moves to the new page when
[02:01:43]  it's done but he had to do hoist a bunch of stuff up and then what he ultimately showed with suspense was i think this i'm bad at this right yeah
[02:01:52]  this should be now if i click on it that didn't work okay it's a live demo some things don't oh right i forgot to use my image component that's why
[02:02:08]  i usually look at lynch warnings so let's use the image component now click on it and jumps on the page when the image is ready right this this demo um shows
[02:02:26]  a completely different use for concurrent rendering essentially showing that you can show a pending state without dropping back to a skeleton and then loading the data in and there's different ways to do
[02:02:37]  that but the key part of this demo that dan was showing is that it can do that by just writing almost very simple react code and then just wrapping it in um a
[02:02:47]  trans this kind of idea of a transition and uh this technically the only requirement to do this is be able to render in parallel you don't actually need time slicing to accomplish this
[02:03:03]  because this is bottlenecked by input output it's bottlenecked by a request the database for some data it's not like that typing example where it's cpu bound if
[02:03:13]  react goes and renders that off page and you're not really interacting with the current page like who cares you don't actually need time slicing but these things kind of got
[02:03:22]  conflated with each other um into concurrent mode even though there are two very distinct use cases but i i did want to show show them off here because this is when like the
[02:03:33]  we were first introduced to modern react why they wanted react fiber i think this talk was more interesting to someone like myself like more on the like framework author side because like i
[02:03:48]  i mean i'm suddenly like oh wow i like you i mean people build apps with uis could probably respect this problem but there was always a way you could solve it you
[02:03:58]  could just hoist the state up but being able to handle this at a fundamental level so that you you could kind of invert the control was incredible um but it does come
[02:04:10]  at a cost here because if you can parallel render suddenly our expectations on the way that components should run have to change we have to be we we have to like follow some rules
[02:04:23]  otherwise things can clash with each other and the problem was react wasn't react wasn't almost restrictive enough to have the way to to express that intent with their class components so
[02:04:42]  what we ended up doing was they they they actually were thinking we could hit two uh what's the term like two birds with one stone what if we could both solve our
[02:04:59]  problem of not having the language to be able to express some ideas and finally give react a composition model that it's been missing since the old mixing days the class components actually hurt
[02:05:13]  composition big time which is really awkward because react was built on composition and suddenly composition was not you know not as good as it once was it was cool because it actually pushed
[02:05:26]  people into like other patterns but that's part of the reason i think like we ended up with function components you know that whole loop happened because the industry you know and everyone was
[02:05:37]  like okay yeah we need classes and then it was like oh let's let's get let's like react started it with create class which basically objects classes to functions um so this
[02:05:51]  this this was kind of the it's funny sometimes i feel like react demos during this time were backwards like they essentially show just tried to show us the results so we'd
[02:06:02]  get excited about it um but not how to get there and no one really understood what they were doing they're like okay that's a cool demo but like you couldn't connect
[02:06:13]  the dots um which is one of the which is one of the biggest challenges um and from a lot of people this is really exciting but it didn't really mean anything to
[02:06:24]  them of course then almost immediately after about six months later the same year 2018 they dropped the bomb that changes everything um yeah someone's asking about this to be fair this pattern
[02:06:44]  of using the router exists way back in ember days it doesn't change very much the the problem is even with these mechanisms like uh being able to invert control you still need
[02:06:58]  to start the fetching at some point so nesting stuff down the component tree isn't like doesn't work very well so that's why these nested routers are
[02:07:07]  a thing because they they give us the anchor points but the coolest thing is you can use these technologies together you can let the router do the fetching but be non-block
[02:07:14] ing and then you can let suspense handle everything in all the race conditions below it automatically i think this is something that's been missed um on a lot of the first ones
[02:07:23]  because suspense wasn't ready yet but like i don't want my it's kind of funny i the the the loaders and stuff shouldn't be considered blocking functions they they should
[02:07:37]  run and then your app should be rendering at the same time um like they shouldn't expect the data to be there at the time that that they run that's what suspense
[02:07:48]  gives you so while those patterns are common like these are complementary they're not uh competing i just think that a lot of react libraries had to build in a world where that didn
[02:07:57] 't exist yet yes yeah i i think there's a gap here right and so essentially as i said we we now had a really cool idea of why they did fiber but
[02:08:16]  then but this wasn't really useful because like you're not gonna you you weren't gonna go use this at the end of the demo they're like now you have a lazy
[02:08:23]  component i was like okay sweet you know but there there wasn't much else you can do it i think the bigger change as i mentioned was they worked on a bunch but
[02:08:36]  they decided that it was time to address that problem you know that i was mentioning a moment ago how to express the intent how to get composition back that they lost in class components
[02:08:46]  and this for me is probably the most seminal talk for me like changed my life um but um i'm just gonna throw this on here for you all to enjoy um of
[02:08:58]  course it doesn't there were this this is dan october 26 2018 i have that date memorized because like it was just like one of those life events for me which is
[02:09:10]  sad in some ways but also you know it is what it is um let's see okay so i jumped way ahead sorry where where are we um i thought i had the link
[02:09:22]  at the right spot but let's and the input has sorry i will find the marker there is the state here just a little bit further render and then put value at here
[02:09:39]  and we said he's just making a simple name tag that you can update okay so i i need to bind uh sorry uh i need to find the event thunder okay so
[02:09:52]  now i can actually edit it and it works so a familiar class component as uh if you work with react you probably write a lot of those but let's take a step back
[02:10:09]  what if we didn't have to write a class when we wanted to use date so i'm not sure how that's gonna work uh but i'll just start with what
[02:10:19]  i know i want to render an input so i'm gonna put an input here and the input has a valley and that valley is the current name so i'll just pass name
[02:10:29]  i don't know where to get name from so it doesn't come from props uh i'll just declare it and i don't know i'll fill it in later um
[02:10:42]  so it's gonna have a change calendar as well so i'm gonna declare on change handle name change and i'm adding a function here takes an event and then here i
[02:10:58]  want to tell react to set the name to something but again i'm not sure how to do that from a function component so i'll just call something called set name with the
[02:11:09]  current input value and i'll just deploy it here all right so these two things they're closely related right so one of them is the current value of the name state variable
[02:11:32]  and the other is a function that lets us set the name state variable and so because these things are closely related i'm actually going to put them together as a pair of
[02:11:44]  values so i'm going to get them together from somewhere so where do i get them from from react local state so how do i use react local state from a function component well
[02:12:01]  what if i could just use state and pass the initial state to specify it let's see if this works yeah works you could tell he's pretty proud at that moment like
[02:12:33]  he he it's like when you have a secret that no one else knows and you get to show everyone and you're just like yeah yeah exactly yeah like yeah like what
[02:12:43] 's the classic one like we have something we we think you'll really like you know oh man um this this whole talk is actually great and actually ryan florence makes
[02:12:57]  another appearance later on where um he kind of goes into like use effect and actually showing people like how this is a long coding demo so it's not really good for the
[02:13:08]  sake of the stream but um this this this whole talk again is great because he makes it real um but for me the second that i saw dan's talk personally that i i
[02:13:21]  this probably meant more to me than other people because that was essentially the moment that i realized that solid js was a real thing um was like he like i saw that i
[02:13:32]  saw him do the tuples and i'm like oh that's how you do it i've been i've been struggling with how to keep the separation with a good api
[02:13:41]  and then and then secondly i was like wait how is that possible but the key thing here is you can and you can see this if you go and react uh i figure
[02:13:53]  where is it react hooks prior art or whatever um where is it is it in here is it prior art for hooks there is not going to be any mention of those reactive systems
[02:14:12]  that i talked about before right um they talked about some yeah future thing they talked about an idea that dom we already talked about him and inferno had in terms of for
[02:14:24]  syntax talked about a pattern that ryan florence had come up with talked about some stuff in reason talked about rxjs actually of all things for subscriptions but like
[02:14:35]  zero mention of the api that i showed you earlier with knockout that looked almost exactly um identical and or even view which looks really identical or reactive or all of those libraries
[02:14:50]  because honestly they weren't looking at those libraries somehow um and maybe this comes from uh like this web of how much cross-pollination has happened over the years um
[02:15:05]  they they had pulled in influences from different places um that they'd somehow managed to uh to kind of land on almost the same same patterns i i can't explain it exactly but
[02:15:23]  um it's important to understand like this is a completely different execution model right in react you know we have these functions that run over and over again so you have to think
[02:15:34]  of a way to actually preserve state in them it's a complete opposite of a reactive system where you have it's the actually that state that reruns over and over again so
[02:15:44]  hooks mind-blowing demo right change everything but yeah and they brought something to react that i don't think anyone actually realized would happen i mean there's there's some great
[02:16:01]  conversation from that time like the the probably best visual of what hooks did initially for people was like this like i don't know if you could see this that well i don't
[02:16:11]  know if blowing up my screen will help anymore and probably not but sunil who's later would become a react core team member as well posted this thing where he's like look
[02:16:18]  i got this class component and i got all this code and he the black stuff was actually stuff that he was able to delete because it just wasn't necessary anymore when he
[02:16:26]  moved to hooks the yellow stuff was stuff that was concerned with like the window object and he was showing like with the life cycles the stuff was sprinkled all over he you know
[02:16:33]  the stuff related to the theme and the context is green and the stuff for the local state was blue with hooks this mess of stuff suddenly looked like a bunch of blocks that
[02:16:44]  were together um where green stuff was together the blue stuff was together the yellow stuff together and then in the view it kind of sprinkled in um this is incredibly powerful cold location
[02:16:55]  i've actually only ever seen one framework take it farther where the green is actually next to the green and the blue like the whole thing combines that's upcoming marco six but
[02:17:05]  like this was like this this is just mind bending to be fair this was the this is what i personally liked about libraries like knockout because they were always like this but
[02:17:19]  until someone actually pointed this out no one was going here and i i i mean we showed we showed view you know talked about view view had a reactive library like knockout did
[02:17:31]  not go this way it looked like you know they had these objects um it was incredible the impact this had across the ecosystem i you know we talked about reacts influence you know
[02:17:43]  on philosophy it was it was basically they've even if you ignore the technology they've impacted best practices for years and years and years um right like another example like rich harris
[02:18:00]  fresh out of the out of the that conf like what when did he post this october 30th four days later he's like he he he just he first like okay
[02:18:10]  well we need hooks for svelte so he's like okay i can do this yeah that makes sense it's like okay that's cool and then he's like okay wait
[02:18:20]  wait wait no he's like screw it i'm just gonna use the compiler and do it this is not obviously final svelte uh he realized that you need a special
[02:18:28]  syntax to show derived state because there is a difference um but the point is hooks are what influenced svelte 3's api design and avenue to expose their reactive system this
[02:18:45]  was a not popular thing i i showed those old libraries like knockout right i showed them basically being the same thing but it was magic back in 2010 when this was happening
[02:18:58]  people played with it but then ultimately were like we're gonna leave the magic in the past hooks were like oh no this is okay all of a sudden and i mean that's
[02:19:07]  huge and i just said i i told you all i warned you at the beginning this would tie into my personal story um that that is my personal story i was one i was
[02:19:17]  that weirdo that already thought that this was the best pattern before react told everyone to um and that's the only reason why i'm here so this was this is like
[02:19:28]  i can't state enough how like as i said can you picture being view having the ability to have done something like hooks for like four years and just being like no no
[02:19:40]  we don't think that's the best pattern until react actually does it like i i mean this this is this is a crazy thing because in a sense if you focus just on
[02:19:52]  the hooks themselves i would argue that a reactive system is just better for this kind of syntax or this kind of approach um it just it aligns more with the way it
[02:20:05]  works but as i said react wasn't interested in that they were like how do we solve this composition problem it had nothing to do with reactivity in the sense that i talk
[02:20:14]  about reactivity right that that's that's what that's that's what they were trying to do that's why every time someone asked me like oh what what what's react
[02:20:24]  going to take from solid js i'm gonna be like probably almost nothing you know maybe maybe i'll make a good api design decision that i get to before and it
[02:20:34]  tweaks their their their thinking a bit but they probably would have landed on it anyways they they have amazing api design um i i've seen that again and again i think the
[02:20:43]  only i got one for you solid when when react introduced start trans or uh um was it use transition they had the first argument being the starting the transition and the second argument being
[02:21:00]  the like is pending and in solid i was like this isn't the pattern we use and i reversed it so i made the is pending the first argument and i made the
[02:21:08]  start transition the second argument react later switched it to the same order as solid that's that's about the extent uh of of that influence from my perspective and i don't think
[02:21:21]  they even looked at what i was doing it was just the logical decision they just introduced the wrong order and luckily i realized that um and and made my apis that way
[02:21:31]  and they ended up you know realizing it later and following suit uh but like you know what i mean like i don't think that was them looking at solid so to speak so
[02:21:42]  but i i as i said hooks didn't just change everything for react they changed everything outside of react that's the impact it's also why they're not probably like ph
[02:21:58] ased by a lot of the conversations that are happening right now all right people still talking about redux uh hooks gave me the react syntax i wanted solid gave me the way
[02:22:15]  to use the syntax i wanted yeah i mean the thing is hooks are like clearly one of the best things that ever happened to react it's just unfortunate that that model aligns
[02:22:26]  a little bit better with the exact opposite mental paradigm or like thing but uh we're gonna get into that more in the future and what that means i i think right now
[02:22:36]  um like this this this was 2018 people's minds were blown and and everyone was rushing to kind of fill in the gaps here um it's funny most of these frameworks only show
[02:22:52]  up once but i i want to i want to point out here that like like uh delete that one sorry that in a sense because of how big the api change was
[02:23:06]  i'm gonna put view 3 and svelte 3 out here because kind of like angular 2 like they're they're they're actually worth pointing out i mean in the case
[02:23:19]  of svelte it wasn't that painful because um essentially they were uh how should i put it like they didn't really have many users before v3 but going from view
[02:23:34]  2 to view 3 was a big lift for a number of people and i i want to point out here that essentially um like this happened you know like i mean in
[02:23:57]  a sense i should put react let me actually get rid of these last two arrows because react is at this point is just is just uh too crowded it's actually easier to treat
[02:24:15]  this new react that we've been talking about as another thing here too um so let's say 2018 so a little bit later than solid so right here react i don't
[02:24:27]  know what to call this it's it's like react next or whatever it's it's it's it's it's not next though because next next js but we need
[02:24:34]  we need something to denote what this version of react is react 2 clearly thank you theo of course this is react 2. yeah i mean 16.8 yes it was like somewhere
[02:24:50]  around 16. i mean to be fair i guess i could call it but it wasn't actually 16 16 put it in process but like that's fine i'm gonna call
[02:24:59]  it react 2 because that's actually better um from my perspective react 2 is very influenced by react react 2 was um i mean that's the difference here i don't know if
[02:25:10]  react 2 had any new influences it goes all the way back to i didn't put it on here because it wasn't like the framework thing but like obviously our old buddy
[02:25:20]  fax js um is part of this lovely graph as well but but what's more important is these lines because we had we had this happen right like this sort of ecosystem thing
[02:25:39]  and to be fair solid probably deserves to point an arrow at react a little bit too here even though it's like a an almost like uh straight horizontal one um so this
[02:25:58]  this this is kind of like this is a big change and react pulled it off almost seamlessly well at least at first is how i would put it right because this is this is
[02:26:13]  this is one of those points the problem is it was only one piece of the puzzle that had been of a plan that's been rolling since about 2000 i want to say
[02:26:23]  2015 ish um and by the time we get to 2020 right people someone earlier made a joke that i should draw a line here um in 2020 20 like kind of like a
[02:26:39]  half line or like uh um and i think you're actually kind of right um from framework's perspective it doesn't really matter as much but this sort of halfway point and
[02:26:51]  i guess it aligns with view view it was 2020 so what was 2019 um from this perspective things started to change and part of it was people seeing other systems do hooks
[02:27:07]  in a way and part of it was from hooks themselves just kind of understanding what how the dynamic worked right that's a congested flight path yeah um and that's gonna
[02:27:20]  be part of it right um the first the first one that kind of called it i think was from uh the first kind of hint that we got like maybe something's up uh
[02:27:35]  dan actually covered this in this article which is making set interval a declarative hook with react and i this article is amazing um that's fine i was just light mode um
[02:27:47]  and in the words of ryan florence i've had a lot of people point to set info hook as some sort of agon react space it just people didn't
[02:28:00]  get why they couldn't just put an interval at the top of their component right like why why can't we just do this and i mean if you've used react before
[02:28:17]  um you can't kind of get it you're just like there's no way this could possibly work the way you want sorry use interval isn't right because that one's actually
[02:28:27]  the the fixed one i want to where's the actual original demo the the the thing that actually didn't work where can we start at the beginning they're not gonna oh
[02:28:39]  that's funny the article doesn't actually have the original yeah here it is stack overflow see the the be fair the person here at least knew enough to put it inside a use
[02:28:55]  effect right so like but like yeah stuff just wasn't working the the way they wanted to because they figured out that they needed an empty dependency array so that the interval only
[02:29:10]  gets set up once but then they didn't understand that this time variable is the same as this time variable which has been closed over it never changes on the first render you
[02:29:21]  get a zero when the interval fires it's zero plus one sometime later this thing fires again the interval just keeps on firing and all it ever sees is zero plus one and it
[02:29:31]  shows one forever this is the egg on the face example right the thing is this makes a ton of sense right set interval is like an external change mechanism that isn't part
[02:29:50]  of react system and we need to have these things come together essentially and the problem was there wasn't an easy way to pull something out of the component anymore like the class components
[02:30:01]  did that for us but but now with this you're just like okay well i guess i'll use use effect but the problem is you're still driving state so somehow you
[02:30:10]  have to combine state and stuff that kind of was outside of the render cycle together and you've you've kind of removed that from the language right so like okay fair enough but
[02:30:31]  dan goes through this article and the thing is i i'm trying to remember if this is the final version no yeah i've used internet but the version I like is
[02:30:44]  to go back to before he extracts it into another hook because he goes through all the process and I like that how he explains it and he explains how you can use ref
[02:30:55] s for effects but essentially before he extracts the hook yes this is the version that I think is the most illustrative of of where we ended up with the hook now don
[02:31:07] 't get me wrong I think use effect is actually fairly well designed hook because when used independently on its own it cleans up after itself I know that's kind of like a
[02:31:18]  funny thing but like if you ignore all this other noise inside the effect you create the thing that you'll get rid of later so it only lives inside this zone it keeps it
[02:31:30]  it keeps it tight essentially and because of that you don't need refs you don't have to once you're inside this escape hatch you don't have to worry about
[02:31:40]  the outside world until you do that's where the that's where the complexity suddenly triggers on because suddenly if you have two use effects that need to communicate with each other you need
[02:31:50]  a mechanism for them to talk to each other that isn't stateful because you don't want to re-render and again this makes a ton of sense but you have
[02:31:59]  to know that or understand that yes I think I think this is dead on right or it's a primitive so you're supposed to compose on top of it right like things
[02:32:17]  like um the most egregious thing about using um use effect and I I could go over this again but I think Theo already did this on stream it's kind of obvious
[02:32:28]  is is is is basically using it to synchronize state you should derive data where you can like like state should derive from other state you should use memos if they're expensive
[02:32:36]  but you shouldn't be using effects to write to state because in react that's basically you can pretend it compiles to rerun component every time you write the state it
[02:32:44] 's like rerun component in line so if you start doing that if you have something that runs because something causes the component to run and then you get to another point it's
[02:32:54]  like rerun me again you're double rendering like at least every time and that's that's that's the first one the second one actually isn't bad stuff like async
[02:33:05]  is internally how you would do it but I think I actually don't actually have a huge problem with use effect for doing async fetching it I mean that's what
[02:33:14]  something react query is using under the hood there's an argument that you should always use higher level primitives if they're available but like generally speaking use effect is doing its job
[02:33:23]  there but as I said the problem is people aren't used to thinking about their apps as pure graphs right right like like and and this is not a react it's funny
[02:33:37]  this is one of those things that's uh solid and react actually have in common um surprisingly is we both want you to derive data and have a distinction between things that are effect
[02:33:49] ful and pure this is actually really good ui design uh pieces that react had kind of discovered over time um but yes there was definitely this sense you know it started as
[02:34:02]  I said with this article where people are just like this is crazy you tell me to set an interval I need to add like I started with something that looked like you'd be
[02:34:09]  top level maybe I would add an effect that makes sense now I need a ref I need to extract a callback I need two effects and I don't even know what
[02:34:18]  this thing is doing anymore like that that but you know how often do you hit this in real life maybe you don't hit it like who wants to use set interval so this
[02:34:28]  kind of passed but at a certain point it people hit it for real and I think this is this is probably the it's this was like six months later but this is probably
[02:34:39]  the article that was kind of pushed it forward um and they're saying that react became a black box basically the concern that react became magic essentially you know react expert says check
[02:34:52]  out this cool thing we do with hooks react core teams this will break for the incredible subtle reasons oh you're right honestly this was more intuitive of classes don't worry it'll
[02:35:00]  make sense you just need to clearly configure your brain and to be fair to react rich harris made this graphic this is this is this is but we we did see these conversations
[02:35:12]  these were like the the real conversations like this didn't did happen out in the wild you know on twitter even if rich did completely manufacture this graphic um but yeah not many
[02:35:26]  folks are talking about it publicly perhaps fear for embarrassment or their lack of knowledge but recent twitter banter over the last few months as well as conversations had with a handful of thought
[02:35:34]  leaders have made it clear that very very few people people in the community understand how react works now so this is this is kind of um interesting because i we've shown an
[02:35:47]  api that is so well designed makes ton of sense solves all the problems and get there's this gap here how do you how do you deal with this gap and as i
[02:36:01]  said there's this this this this this was a very nice way of talking about kind of wrapping head around the concurrent changes um other people you know been pushing stuff uh like
[02:36:13]  creative xstate uh david korset um talking about use effect use effect has been kind of the struggle here and the funniest thing is use effects shouldn't even be something
[02:36:21]  that we like talk about just like oh yeah you we did the side effect it's like somehow use effect became the thing that everyone decided to build around and i get it
[02:36:33]  and i said i have this problem with solid a lot too and it comes back to this knockout mentality actually where at a certain point you're like i got state and i
[02:36:41]  want to update that state so you're just tempted to just write all of these computations and in your head you're just like i see that i wrote a function that will
[02:36:49]  run when this changes and it will update my state like so you can break your logic into this kind of thing where you're like okay here's my data here's my
[02:36:58]  updates and and it's just easier to kind of write it that way um even though it's not good and that that's that's essentially it use effect as we mentioned shouldn
[02:37:09] 't be the focus but yet it keeps on being in and it's kind of the same reason why it's related to the reason why people are into stuff like fine grain
[02:37:18]  like solid and view and not rxjs rxjs if you've ever written anything in rxjs i'm going to throw this out here i am actually quite familiar
[02:37:28]  with rxjs um and it's many many operators but what i wanted to show here if i can show like just a simple operator expression is yeah not subscribe i need something
[02:37:39]  a little bit yeah here we go from event pipe scan this thing subscribe and thing right so they're using a piping syntax that push this to this to this and they're
[02:37:53]  applying the scan operator as a way of basically taking the input value and feeding it back through again um it's kind of like a reduce operation for those who who might not be
[02:38:04]  familiar and essentially you can take something you take something kind of imperative like an event listener and then suddenly have the ability to go okay take a click event pipe throttle it scan
[02:38:13]  you can describe stuff incredibly tersely with as a matter of like uh pieces like define pieces with rxjs you can basically take any kind of idea and then find the
[02:38:27]  like what primitives form that idea and and make like make it a function of some known operation that's that's what rxjs does for you but you know the
[02:38:36]  challenges what if the wiring needs to change there are operators for that but things start getting a lot more complicated because with rxjs it says push you start from the event and
[02:38:48]  you push push push through this chain right and if if if the structure changes um it's hard to deal with that react is almost the opposite it's like pull pull pull
[02:39:01]  pull pull pull like essentially um we're going to rerun and then we're going to just get the the piece as we need it as as we request it and in both
[02:39:13]  of these cases you're part of a system that's already been wired for you and you don't have much dynamicism like in rxjs you can actually change what
[02:39:27]  the piping is but largely like in react you actually it's it's kind of out of your hands now like it's just like okay this is the component life cycle and these
[02:39:36]  hooks will get kind of pulled in according to these rules right so i i this is why i wanted to show it because what the someone once asked steve sanderson steve
[02:39:52]  the creator of knockout and let's see if i can find it knockout versus rxjs and it was in like a uh yeah i'm probably not gonna find
[02:40:03]  that it's like in a stack overflow question or something and uh where was it yeah i'm not gonna find it that's fine he basically said that what was really cool is
[02:40:16]  that in in knockout you could write things as expressions still right like you didn't need to do all this piping thing you wrote things as if they were pull right like
[02:40:28]  you would you could you could write your expressions like like oh in here name to uppercase so you could you could basically write the stuff in line in your templates right and
[02:40:40]  like the that kind of windows into imperative logic is what made things nice because sure you could if you add a couple more operators on here and you're doing something really complicated
[02:40:53]  this this this representation is really good but it like i mean do i have a open code window to show you what i'm talking about let's say file new let's do
[02:41:03]  new text file or whatever okay if if and can i change it to javascript okay i just i'm just gonna throw this out here just so so you can see
[02:41:12]  what i'm talking about but like is it easier to combine two values by saying like name equals first name plus last name or you know thank you or or or let's let
[02:41:30] 's pretend something something something like uh let's use double count equals count times two okay versus like uh from sorry some like count dot pipe double double double subscribe um you
[02:42:11]  know do something i guess i'm gonna call this one double count out like like my point is like for a lot of people you like even if it's like double then
[02:42:28]  subtract two right dot pipe dot subtract two like there's there's a huge difference in writing your code this way right um and i mean this is not this is yeah you
[02:42:56] 're right you're right someone's pointing out that you can i can do this i don't actually have to call pipe a second time yeah yeah okay but yeah you you
[02:43:04]  you you get what i'm saying it's clearer it lets you represent stuff but at a certain point if i'm a developer just like now pretend that this logic is in a
[02:43:13]  div right if this logic's in a div i can just go okay if this logic needs to be in a div you know what i mean like i have to hoist
[02:43:33]  it out into double count or something dollar sign and then i need to go div like like you everything just gets like i actually looked into using rsjx as a reactive
[02:43:52]  library background unless if you're doing things fine-grained you actually need to you need to actually hoist things out otherwise it could i could have put it in the
[02:44:03]  subscribe right i could have like put the div inside here and put you know did my stuff in here and it'd be instead of subscribe maybe i'd be like combine and like
[02:44:17]  i pipe a bunch of streams together but you like there is there is some benefit for being able to express logic in this kind of like oh there's just an expression and
[02:44:29]  use effect lets you change to write logic like this instead of like this in a sense like when you drive state it's not bad but like like if you are using you
[02:44:42]  know like this is already a memo like you like this this does not take much to to to kind of go oh you know this this this is a memo but all right next
[02:44:52]  let's put a function here you can already see that but like when logic gets more complicated with computations it's a lot easier sometimes to just lay everything out in some
[02:45:03]  kind of imperative code block where you can go okay when the number when the when the when the subtotal changes we have to apply this tax and this thing and it's easier
[02:45:18]  to apply the taxes than to actually you know have them all be derived but the I mean that's the whole point of use of right to have an imperative escape hatch from
[02:45:32]  react it cannot be compared to any reactive logic right but actually this is a place I say stuff is actually sort of comparable and why people get pulled into it because they see okay
[02:45:41]  it's much easier for me to express things as simple expressions so they start just writing these expressive blocks and treating it like a reactive library because in a sense use effect feels like
[02:45:52]  a reactive computation you say what the dependencies are it feels like a subscription it it feels like what goes in here that's that's that's use effect feels like like like
[02:46:02]  what goes in here it doesn't matter this is just a dependency array this whole stuff in front but it feels like what's in here and um this should be the output but
[02:46:12]  picture using this to feed back in right right you have to shift around but when you put when you sorry when you give people a place like a like a clear place so
[02:46:28]  it's like use my logic that's where they have the tendency to do it and as I said I'm not saying it's a good thing I'm just saying like that
[02:46:38]  that's how we end up here and like this kind of this kind of conversation went on for um for quite some time right like um I actually I I I actually had
[02:46:58]  a tweet for a while here because around 2020 I mentioned that um I noticed like what I call a temperature change around react and I don't mean like at that point there
[02:47:08]  was a bit of a Facebook backlash going on around the beginning of COVID um but like where developers were just like rejecting the concepts and the vision of react like in current mode and
[02:47:18]  suspense they were basically like I don't want these react can build them but I don't want these I'm going to keep on using react the way I've always used it
[02:47:24]  and even frameworks like preact and view like announcer like we're not supporting these features um and everyone's like yeah view is so awesome they're not going to do concurrent rendering
[02:47:35]  and maybe that's fine but like it was such a definitive statement that I was like I mean sure don't do it but like like and I understand they had to tell
[02:47:47]  the community who thought that stuff was coming but like it was I was saying it felt more like a badge of honor or something right and people were just kind of and I I
[02:47:57]  just had enough of it I'd seen a bunch of people on Twitter like acting like the members of react core were like clowns or something for you know doing this es
[02:48:05] oteric thing that only matters to meta and I'm like did you guys watch the demos like that the stuff that Dan presented in that 2018 time slicing demo are real things maybe
[02:48:19]  like the type ahead thing you can solve pretty easily with a debouncer it'll be good enough I mean obviously the thing was better like time slicing may be something you don't
[02:48:27]  need to worry about but those that inversion of control good patterns around data like skeleton screens loading states the problem is people at that point didn't see the full picture and they
[02:48:41]  might not even see this full picture today but like this is what makes streaming rendering possible and and all those other improvements are coming down it's it's I had a chance
[02:48:54]  to sit down with Dan Abramoff and talk to him a bit about it and he explained that if we go back to our timeline everything started around 2015 because while this framework
[02:49:08]  thing was going on with React you know which you know and where we're sitting React was like at Facebook we're like okay we think and I'm going to use a different
[02:49:20]  color here that GraphQL is the solution they had a real problem with data fetching and distributing data pattern flows and it was really awkward when you try and scale it up
[02:49:36]  and you have this desire to make all state local like they could try using stuff like use query type patterns but they needed stuff far more granular like to be able to scale like
[02:49:47]  key invalidation is fine but like normalized cache and stuff actually made a difference so they basically created Relay around this time period using it internally basic like this was all brought
[02:50:02]  upon because of the desire to get the feeds on the mobile app essentially and this this is kind of cross with React Native like in terms of motivations because early on around the
[02:50:17]  2012-13 period Facebook was betting pretty much on mobile web they were hoping that like that they would be able to like bet on the web and have a single platform that worked
[02:50:29]  everywhere I don't know if people remember this they even had like their own kind of environment I think on the phones it was a while ago but essentially they figured out Rel
[02:50:47] ay it worked pretty well but once they'd explored that path they were reasonably happy but it was very complicated and they and the question came up around this time you know they
[02:50:58] 'll say Relay caps off right on this 2015 line what comes after GraphQL what comes after Relay and they already had an answer from the past like FaxJS
[02:51:08]  which we talked about earlier and that started everything that came right because if you if you follow down this line of thought and you're like what what comes after like they they
[02:51:23]  needed to be able to solve server rendering they needed to be able to solve no this the Flux to be clear was much earlier that was like they were already using Flux
[02:51:37]  and talking about in 2013-14 I guess to be fair we should consider the Relay boundary right about here but like they they'd already been working on GraphQL and figuring
[02:51:50]  all that stuff out Flux was like a direction and something that they strongly believed in but that that was present probably even before they open sourced it yeah so I mean
[02:52:11]  where I'm going here is suspense you know where does suspense show up suspense showed up here hooks showed up shortly after here it's funny like the order and then finally React
[02:52:35]  18 which is around here came up with streaming and somewhere out here we're we got two more ones we're going to add we're going to have React or I'm
[02:52:50]  just putting RCs for short React server components and we have compiler and to be fair internally I'm pretty sure a whole bunch of crap happened in the middle here right like
[02:53:04]  someone's asking me what I mean by prolific what I meant is like widespread in adoption and mindset and mentality before I moved React 2 out of here which is kind of where
[02:53:22]  we've been going recently if you look like the whole world converges on arrows in React both from and this is like a mindshare perspective like React basically managed to
[02:53:33]  pull its gravity to pull in the whole universe so that's sort of what I was getting at it's not this is more in the like framework author mindshare side but
[02:53:42]  it's true also in terms of job marketing whatever React is like a singularity that like like a black hole it just pulls everything in it's everywhere I mean that's the
[02:53:54]  opposite of prolific I guess because prolific means it's spread everywhere when I'm saying it's acting more like it just like it's like a gravity well but like
[02:54:02]  all of these features actually played together because in order for them to get streaming rendering they needed to have suspense right and this is kind of a weird arrow but for suspense to really
[02:54:19]  work in the proper way they needed granularity with hooks and in order to get like this and then this is just something else but what I'm getting at is this is
[02:54:33]  all part of a bigger picture that's been kind of getting put together here and it wasn't obvious where they were going until they got there the funniest thing is like I know
[02:54:48]  this from being working on stuff you need suspense or something like suspense you need async to do streaming but they didn't tell us about this here because like what did they
[02:54:57]  release with suspense what was it like lazy lazy is like this thing the other thing that's missing here actually and it kind of ties into RSCs is data loading primitives
[02:55:08]  right like and and as I said this is this is sort of the crossroads here I'm kind of laying this out here so let's I'm going to create a
[02:55:21]  banner here which is we are now I talked about modern React but now we are definitely moving into the future of React if you've been following everything so far I hope it kind
[02:55:42]  of makes sense at least how this whole story kind of plays out together but the thing is the other day let's see I'm going to go this probably will come up
[02:55:58]  again on this week in JavaScript but I want to pull this out here is Dan asked everyone if if you know ask him a question about JavaScript right and I was I asked him
[02:56:13]  I'm like are you ever concerned that the level of abstraction we're heading towards in JS frameworks is going too far that it's hard to keep things in one head should
[02:56:18]  we be trying to mitigate that or is it inevitable and we should be working on shoring up the language essentially like should we just build better abstractions and Dan very strongly responded
[02:56:30]  it's not far enough at the right level all things work in unison and complement each other in a deeply intentional way much the complex we know now is caused by fragmentation
[02:56:38]  and parts not understanding each other there's a there's a reverse trend for unification and it's good so from from his perspective the problem is that the abstraction today still
[02:56:56]  leaks they've been trying to build all the pieces in the right way like actually sorry there's another piece of this tweet that's actually relevant which is he goes don't
[02:57:04]  get me wrong with higher on the abstraction ladder you go the more ways you can absolutely fuck it up and if you get the design right you can do the things naturally that not
[02:57:13]  even thought possible at a lower level this is a big if but I'm sure there'll be progress on this so what he's he's what he's suggesting here is that
[02:57:30]  like like even more ambitious yeah this is the whole framework versus library thing like this is a clear trajectory I agree with this this kind of kind of positioning but it's it
[02:57:51] 's it's it's more than that he's he's just talking even on a pure abstraction level like how if they do a good enough job shoring up the gaps
[02:58:05]  in the abstraction certain classes of problems just disappear and everything just works really nicely it's almost like creating a programming language which you start to understand why things like the compiler and compilation
[02:58:18]  kind of come into mind here because how do you finish this story I actually somewhere in the chain someone's like well abstractions are a thing you know you know like we
[02:58:38] 're programmers we deal with abstractions all day long and I'm like yeah but at what point does it like does it do the escape hatches get too far from what
[02:58:51]  your understanding is right because escape hatches are vital they're what you need from a design standpoint to be able to account for the things you can't account for but if the
[02:59:05]  model gets far enough from the escape hatches like if the distance spans people no longer feel like they understand how things work that's the use effect problem the model had gone far
[02:59:18]  enough from the escape hatch that they couldn't reason about it anymore your options are to get rid of the escape hatch like have the perfect abstraction because in a sense the escape
[02:59:27]  hatch is an abstraction leak or you know try and figure out how to minimize that gap a different way right that's the thing if you go really really like how should I put
[02:59:44]  it like I ask this question I'm like picture writing all your code in like C sharp garbage collection and all this stuff and then but the only way you could debug your
[02:59:53]  code is using assembly like essentially if something goes wrong in your C sharp code you can't debug through your C sharp code you drop into assembly mode to figure out what's going
[03:00:04]  on like that would be and sometimes working in JavaScript like that because you write your code in this language whether it's react or solid or svelte I mean they
[03:00:19]  aren't all compiled languages but you write your code in your language and then when you go to something goes wrong and you go to look at the debug and look in the intern
[03:00:28] als you're in assembly like you're in low level JavaScript and there's a couple trains of thought in there and that's something maybe that's worth ranting about later
[03:00:39]  but my point is Dan and React which started as we're just a view library is now saying look we spent some time there we've learned the lessons and now we believe that
[03:00:54]  we can present a better abstraction so you don't have to worry about that that's what he's saying he's like saying we haven't taken things far enough we can
[03:01:02] 't get the new stuff coming out soon enough React yeah I mean yeah Paraphrasing use effect can't be reasoned about because it's gone too far from the model
[03:01:25]  would you say that still applies to use effects intended use cases or you're purely talking about how well I'm to be fair I've said that use effect was beautifully designed
[03:01:38]  and consistent and made sense but I think I think even in the intended cases if the gap gets too big it's still it's still difficult like even obviously when people use it
[03:01:53]  unintentionally it's hard but at a certain point it's hard to straddle both lines both lines of like this is a simple thing that's easy to explain and
[03:02:10]  actually under the hood that there's whole other systems present that was the whole thing if you remember the Jared Palmer article where he was saying React is becoming a black box it
[03:02:22] 's because essentially he felt that he couldn't dig into it anymore and the truth matters React is the same react it's always been right this is what's confusing is if you
[03:02:35] 're someone who's working on the framework and you're writing the stuff and you're like okay this is better how suddenly do we find a place where the perceptions change so
[03:02:47]  drastically yeah yeah yeah but I I agree with this fundamentally that's when I was looking at those examples where people are getting stuck you're like well obviously it doesn't work that
[03:03:05]  way but I I'm more talking about the future React I think this trend perhaps of getting further away from the escape hatches is an inevitable thing I think React today is
[03:03:17]  walking a line and that's why some people are very unhappy with it other people like it makes sense and they're doing that but I'm saying the direction of the arrow is
[03:03:26]  going further like today isn't the end of it right when you start looking at where things are going especially when we talk about the context of compilation but I haven't given
[03:03:40]  you guys any context about this right so discussion before the context is not right so let's talk about a few of the things right and the first one is react server components
[03:03:57]  this is the first completely mind bend of things right and in a lot of ways mind bending very similar to what we saw when some of these previous announcements so let's look at
[03:04:14]  this one the next key point is that server components let you decide the trade-off for every concrete use case and so if you have some code that just some data fetch
[03:04:27] ing and just some preprocessing it makes sense to put those components on the server and then if you have some code that needs fast interactions to respond to input immediately it
[03:04:37]  makes sense to put it on the client but because there a lot of the code can actually be shared and we expect that the majority of components will be shared components that can
[03:04:53]  run both on the server and on the client and for example if you're developing something like a content management system where you have some kind of articles it makes sense to render those
[03:05:04]  articles on the server but then in the admin panel where you're able to edit them it makes sense to render them on the client so that we can preview changes immediately and
[03:05:15]  so this is what being in a single paradigm and unifying client and server gives us the last thing I want to recap from Lauren's demo is that server components let me create
[03:05:29]  user interfaces that feel modern and app-like but the way I write them kind of reminds me of building an old school what I mean by this is here's a search
[03:05:42]  results server component that accepts search text as a prop and I don't really need to think about how exactly the client server interaction happens instead I can focus on describing the UI that
[03:05:57]  I want to see and in this case I want to see the search input and the list of results and that's it and so the search input here is state but it
[03:06:11]  also triggers a refetch of the server tree with the new search text and so we're back in the search results server component but this time the search text is different and so
[03:06:23]  we're going to get the new results and we're going to emit a list but in the client react is smart enough to figure out to only do the parts to only
[03:06:37]  update the parts that changed so in this example it's the list itself that might have changed right so we might have had we might insert some new dump nodes for new search results
[03:06:48]  and remove some of them or maybe update them but it's smart enough to understand that the search input has not changed because it's in the same place so it doesn't
[03:06:58]  destroy its state and it's really curious what kind of features you can build on top of it yeah I mean Dan does go on a bit more here I was trying to find
[03:07:10]  a good clip for this one it was a little bit harder like Lauren's demo was really good but I think this one's one that's been harder to demo the key
[03:07:17]  part that I was trying to get at here was that it's a server driven model it feels like an old PHP or Rails app and it's funny because React through Next
[03:07:30]  they mentioned actually I think someone here that they straight up mentioned that they're working with Next right about how they're working on this model but it actually has a lot of the
[03:07:46]  same motivations and stuff that you might have found in something like Remix except React core team has been working on this thing for ages like this whole story is them writing their
[03:07:58]  own version of Remix and then at the same time I showed you that talk with Ryan Florence back in 2015 where she came up the idea of Remix basically it's like
[03:08:07]  the same timeline the only thing is we have two competing approaches on it built on top the same framework which is really interesting but yeah some people are talking about yeah they don
[03:08:20] 't reduce the size of React DOM but like if you use Astro plus React it also doesn't reduce the size of React DOM so to speak so it's about scaling
[03:08:33]  at a different point right like if React server components let a React app flatline essentially to a certain degree where they can basically yes the initial cost up front is higher than something
[03:08:52]  else but like I mean you know how this works right like if you got like a graph or something right like she is black a typical React app is gonna like start up
[03:09:15]  here somewhere and then it's gonna go like this right and then view might start about halfway down and also basically do the same thing thing right and solid and preact I
[03:09:36] 'll use preact purple here because that was view solid and preact might do something like this and also basically be about the same thing so we'll get svelte
[03:09:52]  in here and sorry keep on changing it too early get svelte in here maybe that's orange and they'll start like down here and do something like this and then
[03:10:04]  finally finally finally something like what should we make react server components I don't know maybe a different blue react server components are kind of like like like this they actually start above
[03:10:37]  react but they're kind of like like that the line gets way more shallow these aren't showing up enough but yeah I don't know that that's that's the thing
[03:10:58]  people are asking Marco and quick well to be fair today uh where's quick quick will be like another purple one quick is kind of like here but maybe it's hard to tell
[03:11:21]  maybe a slightly flatter line than react server components and then Marco I'll use the orange um is like here Marco six yeah it's like there to be fair okay I actually
[03:11:47]  have to change the quick line a bit because the this I'm making an assumption here that you're going to need all the javascript the problem with being able to
[03:11:56]  show something like quick or anything with lazy loading like astro is they could also be like instead of this straight line they might draw themselves as like some steps like they might be
[03:12:11]  like they might be like we actually we actually are like a bunch of steps so it's hard to draw quick on a line like this because they might start from from here
[03:12:29]  damn it stupid thing just get me out of here they might like start here at zero and they might just go hop hop hop hop it's hard to draw something with progressive
[03:12:41]  thing right I mean it depends on how scale you're how interactive you are like this diagram has a limit to like how much I can show because if the app is super interactive
[03:13:01]  like this bar is going to go up the more interactive if it's not interactive it's almost a flat line but if it's interactive it goes like this and to be
[03:13:12]  fair something like marco also has the zero step like here so like but you kind of get what I'm getting at if if I'd say if your site is mostly static
[03:13:22]  this is like has a lot of static stuff this is what it looks like and but if the stuff gets more dynamic the whole graph tilts a little bit where these ones
[03:13:39]  get steeper or I guess these ones fixed rate yeah this basically scales basically the flatness of the line scales based on interactivity yeah yeah so I'll try not to
[03:13:55]  take that as an insult but this one is definitely a challenge in terms of being able to properly depict so yeah in any case just kind of yeah it's it's it
[03:14:22] 's difficult to to kind of yeah we tanted it way way hard just now into this but yes with server components at a certain point like if you're here it it if
[03:14:41]  you look at our original line here react and solid or react server components and solid are at the same size like like the amount this matters just melts away to a certain degree
[03:14:51]  on when you're over here when the sites are smaller and especially static like you take any of these like if you're a static site you might not ever get past this
[03:15:05]  line right you might never get past there at which point you're like you're kind of hard pressed you're like why am I just not down here somewhere right but over here
[03:15:15]  yeah I mean anyway so yeah let's get back around so server components but that wasn't the takeaway I wanted you to get from server components I was answering the question the
[03:15:31]  takeaway from server components is actually that see if I can find it they talk about reducing code size but it's more of that it's a server model and this is important for
[03:15:48]  our graph here that we've been drawing because in our last zone here on the framework side if we go into what do we call 20 22 and beyond I don't know
[03:16:03]  let's just leave it as a dash if we get into this zone we actually I love how we have react to here thing but I think we actually end up with if we
[03:16:21]  get into this zone it's funny I didn't actually put Marco on the grid and I probably should let's put Marco here because no one cared about Marco back here so
[03:16:30]  they're kind of on their own over here and Marco got influence from some old server technology that you're not going to find anywhere and over time Marco did borrow stuff from react
[03:16:47]  but then if we get here we now have marco marco marco six quick rscs react server components or react three whatever you want to call let's just
[03:17:11]  call it really is react three to be fair and we have view four maybe maybe this I don't know if vapor is going to become view four but like I'm not
[03:17:32]  talking about actual view four I'm talking about conceptual if they if they go this way and then we have svelte four right and it's like this is controversial
[03:18:09]  but I'm gonna argue that like if not marco they're pointing at the same thing marco was pointing at okay like this this goes way back over here um zoom
[03:18:23]  and react four my understanding with svelte four is they're actually gonna add fine-grained stores we'll see what else they do um but this this is this
[03:18:49]  is sort of how I I view things um which is interesting yeah and actually right solid two it should be in here too solid two might be like here solid two might look like
[03:19:05]  this actually I don't know where these other ones come but solid solid two is it like this is the the inbreeding here right one of the cool things I'm
[03:19:25]  noticing is solid is actually oh actually and sorry react three like if we assume we haven't talked about the compiler it's gonna take some svelte too so we're
[03:19:35]  actually seeing um solid's actually becoming a bit of a new heat point the same way react was back here react is still a hot point here and svelte's got a
[03:19:46]  bit of attention too but you can actually see um and I've talked about this before the reason solid's getting inspiration here is because the move away from the component model was our
[03:19:57]  our innovation right um and then quick and marco realize it for real view vapor is gonna be kind of similar onto that side react funnily if you notice of all
[03:20:08]  the all the 2022 frameworks that I are plus frameworks here react is the only one not pointing at solid um and it won't so this this is this is this is this is
[03:20:23]  sort of uh what I was what I was getting at earlier it's very obvious to me um react won't borrow from won't borrow from solid um where uh svel
[03:20:35] te 4 and view have already talked about how they intend to borrow from solid it's a schism right yeah I showed this on the on the on the other on the on
[03:20:45]  the other side of things when I did the last stream so yeah so this this is this is how how I like I kind of yeah this is sort of how I kind
[03:21:01]  of see things I actually think in reality so like if if I kept playing this this graph forward a little bit um I actually think that that like we already see svel
[03:21:17] te and react kind of converging here and we actually see like I think marco and svelte are actually going to kind of converge a bit and um yeah we might
[03:21:30]  end up with different flavors of mostly two different approaches so we're gonna have to see where that goes but that this goes this goes beyond the scope of this we're talking
[03:21:39]  about react today this is very hypothetical but what I'm talking about is we are seeing I want to implement the numbers because we are seeing a new generation here which is interesting because
[03:21:52]  two wasn't that long ago especially in view's case it feels like we're like as soon as we get something new with view we're on to the next thing it just
[03:22:00]  changes yes yeah it's kind of interesting and it's why I have such a weird view and I sometimes might sound dismissive and calling certain things superficial but yeah but
[03:22:23]  you can see I mean if you really want to take away you can see all the like convergence points like if I haven't written it in here yet but it's very obvious
[03:22:35]  to me that angular isn't dead we're going to see angular 3 I mean there's already been an angular 3 but we're actually going to see angular 3 for reels
[03:22:47]  that's what's been going on over there and they're actually looking at adding a reactive library and how to handle reactivity so this is it's funny if you look
[03:23:01]  at this graph oh there was no angular 3 that's hilarious if you look at this graph where do the paradigm shifts happen like this is my thing I think Victor is right
[03:23:17]  the history we'll see where things converge in the future but the hottest points on this graph at least from not from the usage but from the framework author's mind share perspective the
[03:23:34]  hottest points on this graph are definitely right here that is a freaking hot point right and if I extend it fact this was a hot point too to be fair I don't
[03:23:49]  have enough arrows going back to jQuery and all these guys this was a hot point I think this is a hot point too I'm just throwing it out there I mean
[03:24:15]  yeah so I mean I but today we're not actually talking about about solid I just wanted to show that we are getting into the next iteration of things and this is going
[03:24:33]  to be super exciting here and the one line that I haven't explained yet is the Reactus felt line so I got one more video clip for you all today Jack is still
[03:24:45]  learning at practicum to become a data scientist but already receives I want to talk about React and memorization here I have yet another to-do list you know as
[03:25:00]  javascript developers we just really really love to-do list so we enjoy the simplicity of the React code here until we open up the DAB tools and we realize we
[03:25:15]  have what we added to-do or toggle to-do all the other to-dos actually getting re-rendered as well the batch here shows how many times each
[03:25:25]  to-do has been re-rendered so fix this what we usually do is wrap the to-do component in re-app the memo but don't forget the handle
[03:25:38]  change is recreated on every render so we better also wrap that and use callback now when we add to-do toggle to-do no other to-dos are
[03:25:50]  getting re-rendered that's fixed but this is going to be a moving target as the app scales up so later we want to build an even better to-do list
[03:26:03]  first first we want to pass down visibility prop so we can use it to call get filter functions to filter our to-do list then we need a second prop named theme
[03:26:16]  color so users can pick a color to theme the user interface if we try this code out it works but the app feels pretty laggy and slow when we're picking color
[03:26:31]  and the reason is that changing theme color will re-render the blazing to-do list and to-do list which will eventually call get filter function again and again
[03:26:43]  if we pay attention to the zoomed-in number here it's been executed about 200 times I'm going to pause it there and skip forward I think that's like this
[03:27:00]  is this is like the the like um um that's kind of like the point to it he jumps ahead and he's like I love this like because I mean it's
[03:27:13]  a real pain here right people are like what what is this but the truth of the matter is he was like what if you could basically worry about accidentally breaking the memorization the
[03:27:27]  community have to think about what should be the best practice of using React now sorry I gotta jump even further ahead so he's talking about DX versus UX and all this stuff and
[03:27:37]  basically he's like you don't have kind of see it like this basically if you ever it's a little bit different but if you've ever seen Svelte it
[03:27:48] 's actually a lot like this where he has kind of hoisted all these things into a slot like these array positions where every time it re-renders it knows where to
[03:27:57]  put the thing and essentially what's really cool about this is yeah it's a lot of code that gets generated and an setter call but he got rid of the need
[03:28:15]  to write memos because essentially react could look at the structure of your code and figure out how to best execute it based on memoization rules and this ties in this the reason
[03:28:32]  I want to point this out is this ties into something Maple was saying a bit earlier because when I was talking about escape hatches and use effect if react is now magically
[03:28:44]  doing this right if react is now magically I'm going to actually keep this big on the screen I'm just going to add myself back on here yeah if react is magically doing
[03:28:56]  this for you how do you reason about how the component updates like look at this component think about it in the sense that only when the filtered list changes do we actually update
[03:29:11]  the map if you update the theme color it doesn't update okay I don't know if enough people actually sat and stopped and looked at this example and really sat there if you
[03:29:22]  think about things in the way react works and it runs top down can you figure out when filtered reruns again can you make sense of it like you like okay well if
[03:29:35]  I'm running this function I call get filtered like this isn't a hook it should run every time but with this compiler it doesn't I was working at Marco 6 and
[03:29:48]  we hit this exact problem we were sitting there and we're like we're like does it make sense to think of things as top down renders again when on any re-
[03:29:56] render only parts of the code re-render right the truth of matters Svelte is like this they have a component that runs top down essentially in its update function they separate
[03:30:07]  update from create but essentially they rerun the component except because of heavy memorization only certain things update and when we're working on Marco 6 it was like the same thing
[03:30:16]  even though we'd broken things down even more granular almost like solid level whereas on the reactor graph it became incredibly difficult to actually think of this as something that runs top down well
[03:30:31]  that's the question right if you seal the abstraction if you get all the way here maybe it's fine but you have to think of a new way of describing how things
[03:30:46]  change you have to think of a new way to tell people what you're doing because the current model doesn't work and in the same way and when you have a use effect
[03:31:00]  in here like what are you making sense of obviously this is still early days and we don't know what that looks like but I really want the highlight under the hood react
[03:31:11]  is what react is it's not changing it's still re-rendering but what you see might be different from what you get right and but as I said it works
[03:31:31]  with their I don't know I guess I'll leave it open if it works with their model this I have to admit this was the one that I didn't see coming the
[03:31:40]  rest of the stuff everything else react has done to this point like I completely got in the line of this is very interesting stuff and something we're going to have to reflect
[03:31:49]  on into the future when we think about how to describe this but the thing is it's already happening can I show you all something to see what I get at what I'm
[03:32:03]  talking about I've got another bookmark here and it's a little bit further back but I want to talk about this one for a second because I think this is at
[03:32:15]  all reacts working on rewriting the docs if you're putting that much effort into writing the docs you're probably not going to want to rewrite the docs again again so soon
[03:32:26]  and you start thinking about how do you find the best mental model to describe to people what's happening and I don't know if this is where he ultimately landed on but
[03:32:42]  I read this and I was like ah you know like the meme almost what's the first line effects are reactive no one for years used the term reactive to describe react but react
[03:32:59]  now is starting to use that term to describe what they do and part of this is talking about event handlers effects serve different purposes that's why there's use event this
[03:33:07]  is all fitting into that narrative which on a side note I think use event is brilliant and it was like the missing piece that was needed to direct people where to use it it
[03:33:17]  it's such a subtle thing but it actually does a lot but more specifically look at the way he describes effects an effect reruns after its values it depends on change for example
[03:33:27]  imagine your effect connects to chat room by room ID you must include the room ID in your effects dependencies when your component is added to the screen your effect will run connecting to
[03:33:35]  the room with initial ID when it receives a different room ID your effect will clean up disconnecting from the previous room and run again when your component removed the effect clean up one
[03:33:43]  last time in other words effects are reactive they react to values like props and state this might remind you how react always keeps UI synchronized by writing effects you teach react how
[03:33:55]  to synchronize other systems but you're mentioning how you hope they don't use this word too much might change the definition but what they're describing is reactivity I could have
[03:34:09]  used these in solids docs he's not talking about components re-rendering he's talking about effects having dependencies and that's when they rerun that's not actually what
[03:34:32] 's happening under the hood but have they built a successful enough abstraction to do here it seems like that's what people want out of hooks right that's what we talked about so
[03:34:41]  is react this is reactivity in the same definition that's svelte reactive I often say that like svelte and react are very similar so it's always funny
[03:34:49]  when you go to the svelte home page and they're like the truly reactive framework or something and you're just like sure but if svelte's truly reactive then
[03:35:05]  reacts truly reactive and I think it is all reactivity it's not worth getting bike shedding over different types of reactivity like I wrote a whole article about where I was
[03:35:16]  like reacts reactive get over it right but I want to I think this is important though because this is a change in explanation it's a change in mental model and how they teach
[03:35:28]  it right blazingly reactive yeah that did cross my mind when working on Solved marketing stuff but do you see the narrative maybe I'm trying to put too many pieces
[03:35:52]  together but between what Dan said earlier between this between our whole graph here of what's going on here RSCs are kind of like their own thing and that's like
[03:36:08]  as I said they're dealing with a scaling thing and it's very similar to why we use Marco at eBay and you know Wiz which led to Quick they're attacking both
[03:36:20]  relevant problems right they're attacking the thing that Quick and Marco set out to do and they're attacking ultimately this mental model gap that say Solid or Svelte have recently done
[03:36:36]  a really good job of poking a hole at but the truth of the matter is React is still going to be React under the hood so when we look at each other and
[03:36:48]  we can go oh see some influence and think about it that's why there's no there's an arrow from React to Svelte there's no arrow from React to Solid
[03:36:58]  if you look at the history of React they have never pointed an arrow out like this Svelte is the closest they've come and that's where this whole reactive talk thing
[03:37:10]  is talking from but fundamentally it goes back all the way back to here you could say that React basically improved upon Backbone and Angular like they actually solved their models Knockout
[03:37:31]  has never been incorporated into React's model it was the opposite side of the paradigm that they had never had any interest in and in that sense Solid is the purest version
[03:37:40]  of what Knockout represents today and that's why we're all borrowing from each other we're all learning from each other but funnily enough out of all the frameworks React
[03:37:52]  and Solid are probably the least likely like now that I've borrowed from them from the API standpoint to get the JSX or whatever the composition we're probably the least likely to
[03:38:04]  actually borrow from each other so yeah that's that's a bit of a rant obviously on that but you can start kind of seeing that there are numbers here like React 3
[03:38:22]  like we are heading into a new zone and what's really interesting to me is how many of these architectures leave their old ecosystem behind because they change what the question is
[03:38:38]  because they change the mechanics too much like are we talking really a bunch of new frameworks all over again just reinvented right React server components being a server model kind of like stuff
[03:38:54]  like React Query has less of a home in a certain sense like it still works on certain places but if you think about it in the same way Remix has kind
[03:39:05]  server components actually cover the whole gap Remix gives you a hint of it server components actually succeed at that whole problem this is fun well yeah jQuery too right at a
[03:39:20]  certain point I didn't like if I scale the graph further back and get into what happened around here around jQuery came out we hit a point of complexity that was almost unre
[03:39:30] concilable with the old server technology and people needed a reset I feel like we might need a reset I want yeah well react never changed that I want to challenge this
[03:39:52]  a little bit it's funny because I started lining this up react never broke the past and they did a really good migration story and that but they have changed the way you
[03:40:08]  write a react app three times now like they we were only talking we're only going react to react to here because they've done a really good job in the migration but hooks
[03:40:21]  is like a different framework the move from react pre hooks to react hooks and view to view 2 or view 2 to view 3 should have been no larger of an uplift in actual
[03:40:35]  theory the move to view 3 because the reactive primitives the mechanics of them already work the same way they just you wrote them differently I don't know why this was so
[03:40:44]  painful and maybe there's an execution question there but the move from react classes react hooks was bigger than the move from view 2 to view 3 from a mechanical standpoint and if
[03:40:59]  you remember before hooks there was class object components back in 2015 time period or 14 you might not remember this but there was mixins really common pattern when we moved to class components
[03:41:10]  we had to ditch the mixins so like the real reason is react in addition to having like the officially supported patterns also had lots of like hawks and render props and
[03:41:24]  all these other patterns that emerged and people exploring them and with such a large ecosystem and most of them not actually being core supported it felt like a trend like fashion and like it
[03:41:36]  was just all just different flavors of the same thing if that's the challenge when you go through that interaction that's that's when you lose it angular to angular two was
[03:41:51]  such a painful was the same thing that's where angular originally lost a lot of of like they had the lead they were the framework and they lost that edge when they went from
[03:42:06]  angular two to angular three or sorry angular to angular two and like sometimes that's what it takes it takes not the incumbent actually being amazing but that when the time came to
[03:42:23]  change the migration was hard and people wanted to try something else because if you're changing to a new framework you're changing to a new framework there's a bit of that
[03:42:34]  churn that's inevitable when you get to this point in your life cycle I honestly this view to the view three thing confuses me a lot I'm not part of the
[03:42:49]  view community I personally when I saw view three I was like come on finally fist pump like on the money like I've been waiting for you guys to do this for five
[03:43:01]  years like this is the future but I think there's lag in community and people weren't as unified on it and like I feel like there's a lot of other elements there
[03:43:17]  and if you talk to Misko about Angular to Angular 2 he still talks about how while it was painful they did from their perspective they did an amazing job of doing the
[03:43:29]  migration they had scripts they had all this automated tools to do it and like inside Google they did that lift if you want to talk about something being difficult try and doing it in
[03:43:40]  a huge corporation like like from their perspective they did an amazing job at the migration but it's different when you're not committed like when you're in these other companies and
[03:43:51]  stuff yeah as I said the funny thing is I don't know if this is going to happen again I mean to be fair with Vue if they move the vapor and that
[03:44:07]  leaves some of the ecosystem behind because vapor is incompatible the same react you might see a bit of that thing but in my opinion when you move to primitives you
[03:44:18]  move to longevity that's part of react secret that's why people were telling us here that oh yeah react like never broke anything or which is fair they didn't really but reacted
[03:44:30]  like never changed react completely changed they just like I don't know the move the hooks was genius and I think the focus on primitives is how you how you can continue
[03:44:44]  to move forward I have a lot of ideas on that in terms of migration strategies for solid in the future but primitives are your way out because you can always because if your
[03:44:56]  whole system based on abstractions of primitives and say one of those primitives changes or gets pulled out of the core as long as you can rewrite that primitive in the
[03:45:05]  new language and swap it back in you'll be good enough until you can change to the new pattern like it's layers by definition which means it's completely swappable okay
[03:45:19]  maybe that was it TypeScript Angular is just way ahead of its time no like it's I can't say yes to that question even if if Solid handles all the exact
[03:45:35]  same features the the mechanically there's enough differences that it would be impossible for me to chart the future so to speak yeah I mean there's so many brilliant parts of
[03:45:57]  React's API and how they worked things in it's actually unfortunate on the context side because there's like making the component that's a context like provider have its own state causes
[03:46:12]  the whole tree to re-render you know like generally causes a big so you don't use it for frequent updates if that just worked in a more fine-grained
[03:46:21]  way like that's when you build a redux or something or Jotai or whatever they use context well Jotai doesn't necessarily but like the frameworks that use context
[03:46:32]  they inject that state they don't re-render the DOM tree they just use a different change management system which now is getting a bit more heat I've been following the Mob
[03:46:40] X React 18 concurrent conversations and they just keep on going on and on but generally speaking the trick to context is not to use react zone reactivity and I think that's
[03:46:52]  where it's one of those gaps on the composition story right I mean it's not a big gap when you compare like say something like Svelte where you actually literally go
[03:47:01]  to Svelte stores like you literally pull a switch composition for some reason for a short period of time became less of the priority and I think that's unfortunate composition is
[03:47:14]  really the most important feature anyway I don't know this is kind of the conversation I wanted to have today around react and that I wanted to kind of illustrate react journey I
[03:47:39]  wanted to show how their place filled into the ecosystem and how they're continuing to not just evolve but lead innovation and push boundaries and I really want to show that throughout they've
[03:47:56]  been consistent in their model and they've been consistent about what they believed in so it's so hard I understand from coming in and being like oh yeah see this grab this
[03:48:08]  see this grab this the one thing especially from this graph you can see really clear that react has been very consistent about is they actually don't like solid's model ever since 2010
[03:48:23]  or 2009 so I think from that perspective we shouldn't be comparing these things in that way like it's they're just like alternate models alternate ways of thinking and they don
[03:48:39] 't actually overlap which is crazy when things can look so similar so yeah I mean what what what what strikes me is at any point when you're that popular you could have
[03:49:01]  they could have rested on their laurels but they kept on innovating they saw where things are heading and it's hard to move the big ship we just talked about view two
[03:49:09]  to view three right react was already taking the steps back in 2015 to ensure their success in 2022 I'm pretty sure they didn't expect it to be 2022 I'm pretty
[03:49:21]  sure in their mind they're like yeah 2018 you know I'm pretty sure that this was like like maybe like initially a three year or four year plan and then somehow now like
[03:49:37]  the story's not even done yet we're like seven years into a 10 year plan right what started as maybe a three year plan so you know things are still moving forward
[03:49:52]  and I hope I hope that people kind of recognize React for what it is and not just make these comparisons I feel like React's impact you know in the job market hiring
[03:50:11]  its impact on other frameworks has made it so not just well respected but so fundamental to the language and the way we speak about and understand user interfaces that it deserves our respect and
[03:50:30]  I don't mean that just in like a legacy way because they continue to innovate but in the sense of like they've got a model and they're working towards it the
[03:50:38]  best way possible and that's really really exciting I feel a little crazy as I yeah I mean different amounts of how much framework you want I think we're seeing more meta frameworks
[03:51:00]  now because of the complexity but there's always this bundling unbundling thing so that you know that's a big thing all right everyone I think it's time
[03:51:11]  to switch to this week in javascript if if not anything else I've got so many open windows but this was a this was an epic conversation and I hope everyone got
[03:51:29]  some value out of my perspective on these things so just give me two seconds as I as I set up for that it's funny because I think most of this week in
[03:51:49]  javascript for me was related to this which is why it was the perfect topic all right and then duplicate no notifications I just got so many freaking notifications I was looking
[03:52:09]  for my bookmarks that's where we left off it's funny because I already talked a bit about this but because this kind of caps off the react thing you know people
[03:52:30]  are asking what thought about sunswalding so if we preferred some other model we'd be moving react to that model I think we're really big on state immutability
[03:52:35]  impurity because it unlocks things you can't do otherwise render multiple virtual trees ahead of time and interpolate I'm actually going to talk about this conversation and the other
[03:52:44]  conversations on yeah we'll save this for this week in JavaScript well thank you I think this is definitely one of my biggest live streams this is my highest live screen I hope people
[03:53:00]  follow them and stuff I think there's a lot of good content maybe I streamed too long hidden behind the layers but it's the kind of stuff that's not into
[03:53:09]  everyone someone made a joke the other day about explaining push-pull and I will do that at some point probably not on the stream and how it'd be a really interesting
[03:53:18]  conversation for 20 people and no one else would care and I'm like man you're describing my stream that's what we do here we dig into those details right yeah I mean
[03:53:34]  react to so many incredible things the truth of the matter is these kind of characteristics aren't limited to react other frameworks can do the same thing react's component model what they
[03:53:49]  taught us is why we're here though they showed us that if you can create that right abstraction you have the ability to do anything to be fair I feel that way about react
[03:53:59] ivity so in that sense I could argue that reactivity taught me that rather than react but I'm still gonna hold that react also taught us that yeah am I gonna do
[03:54:12]  a photo shoot where I mess with my hair and have a bunch of thumbnails this week in javascript I've generally been cutting I'll be releasing but like topic like this
[03:54:21]  I don't have an editor I don't know how to do this it's just tons what features react does have and solid doesn't thanks to stream that's a good
[03:54:37]  question before I get into this what features does react have currently I mean the only one I can think of is they have element clone node like where you can clone a virtual node
[03:54:52]  solid can never really have that there's other ways to model it but if you iterate over in react you can get vdom children back and then iterate over them and clone
[03:55:00]  them and modify the vdom before it applies and to me it's like a huge abstraction leak and even Seb has in the past been like I don't I wish we could
[03:55:11]  get rid of this but solid can't do that so if you want to do those kind of patterns you have to have components return objects and then do the same thing but
[03:55:22]  it's ultimately somewhere you're going to have to read those objects and do the rendering so that rendering will happen in the parent rather than the child or you have to do render
[03:55:30]  props and inverse the control but generally speaking yeah that's the only thing I've got now we have currency and time slicing it's an opt-in but yeah we have
[03:55:41]  pretty much all of the existing react features in that sense the time slicing is experimental but I have a whole stream about it because some people were saying like you can't do that
[03:55:52]  without a virtual dom yeah you can completely do it without a virtual dom check out my stream last December we've had that capability for almost a year now so so yeah we
[03:56:07] 're let's let's see is there any other questions before I can I'm going to get the banner set up here it's a library solid server yeah I mean yeah I
[03:56:20]  mean I'm Astro is amazing yes yeah there we go we don't have a huge ecosystem sorry I was like thinking on technical stuff you got me like all my technical
[03:56:30]  brain going like okay what feature like like and I think we're actually going to have a few features like like they're working on something called off screen which view has but I
[03:56:39]  haven't implemented solid so like they might get a couple features that I'm not working on or focusing on right now you know first and all that but like generally speaking we can
[03:56:49]  we do a lot of the same stuff well yeah although you kind of have to opt into transitions and suspense and stuff so in a sense it is a feature like I guess
[03:57:05]  react does a lot of that stuff automatically in the background um but like I mean we saw it when he did the concurrent demo being able to do that so easily like the navigation
[03:57:17]  between tabs and holding the state using suspense um without dropping the fallback stuff that's and with parallel trees that's really cool kind of I'd still call it a feature
[03:57:25]  I think it's kind of cool yeah we've been lucky that um doing the conversion has been so easy but um mostly because JSX is a battle but to be fair there
[03:57:40]  are differences and people do get snagged on them it is a different very different different paradigm so you know I'm not this isn't about like react has a very
[03:57:53]  continued bright future I I'm I really wanted to express on the stream how awesome react is um I'm glad that people are interested in solid as well and I'm glad that
[03:58:04]  I can show that a different model can also work but like I mean use what makes sense for you and what makes you happy and a lot of times that is company risk
[03:58:18]  consideration and a whole bunch of other factors that go beyond the technology and react has all the boxes checked it's it's an amazing framework um although yes I I say that but
[03:58:32]  at the same time like I'm we're people give us a chance I would love it it's hard to get adoption in this field even a few projects just starting to
[03:58:42]  show the power of solid is it's gonna make a huge difference for me personally I just wouldn't want that conversation ever to turn into a us versus them kind of thing yes
[03:58:53]  yes and I I've got some talks coming up this fall that I'm gonna talk about this where people some yeah it's gonna it's actually gonna come up um I think
[03:59:05]  on this this this week in JavaScript where I actually talk about uh being a compiler target because like some people are like oh why do you care about that how you can ho
[03:59:14] ist the state out of components you know that demo and and control and all this stuff devs are lazy but the truth of the matter is you can always build some DX abstraction
[03:59:23]  on top of something what's important is the the fundamentals and the mechanics and that's what I care about I want to make sure we have the right primitives and we understand
[03:59:29]  the right like core pieces people have already gone and built stout like compilers on top of solid if that's your thing go for it but a lot of times
[03:59:37]  those projects hit dead ends because the amount of investment if you want to go do that you have to do so much work to actually get there like writing the compiler might be the
[03:59:47]  easy part but then you have like the length like I already talked about this TypeScript syntax highlighting a whole bunch of things and in fact um I gotta completely confirm with it
[03:59:54]  but my my old co-worker Dylan Piercy is going to come on stream next week talk about Marco and Marco's TypeScript support and actually go into detail to explain what
[04:00:04]  it takes to build a language from scratch like to do the Svelte thing or the Vue thing it is a hard amount of work and he's gone through the whole
[04:00:14]  experience himself of building designing a language for UIs and I think he really helped us appreciate how challenging it is and also remind me of how glad I am that I didn
[04:00:24] 't take on that effort with Solid and got to focus on the things I wanted to focus on but to be fair it's incredible work and I think the output of what Marco
[04:00:33] 's doing here is just amazing so like it'll be worth it in the end but it is a huge investment which framework provides the most salaries I mean that's obviously really React
[04:00:45]  will be fun yeah good I'm hoping I'm taking that as a confirmation yeah no Dylan is awesome and I think this is a really personally as a framework author I think
[04:01:03]  this is a really interesting topic to kind of understand what the real cost is like the end result with Marco always amazes me I do some piece of the experience I'm
[04:01:12]  just like oh wow that makes so much sense but it's like it's a lot of hard work to get to to get to that place and I I want to really
[04:01:19]  kind of celebrate and look at what it takes to build something like that oh yeah yeah we talked about a lot of this stuff I'm super happy about that you know seeing more
[04:01:31]  and more options appearing oh right how are we doing I think this is something we could build I mean I mean technically no but I would I would I would say Astro
[04:01:50]  isn't always the best solution for certain type of ROMs you can do it I don't know I forgot to share this last week or something someone the Flutter online
[04:02:00]  editor for yes online editing Flutter is an Astro app and the editor on it is written all in solid so an Astro page with server or sorry with a client side
[04:02:15]  solid single app that is made for editing Flutter just think about that yeah yeah I mean comparing these projects is pretty challenging there's similarities and they do a lot of similar
[04:02:36]  things but I think one of the big differences of the focus Astro is much on the content side they have an incredible ability with partial hydration and they can deliver these sites and
[04:02:48]  especially on the less dynamic side of course you can do the stuff like the Flutter thing I just talked about they're they're built to handle the scenarios they're like
[04:02:55]  the majority of websites the things where people use WordPress today or whatever like Astro handles that whole spectrum amazingly you add some solid or whatever in there and you can do almost anything
[04:03:05]  quick you know is also very good in that range but it's almost like you're under serving it at that point like yeah you can build your e-commerce site in quick
[04:03:16]  and that's kind of like where I feel like their starting line is but where quick gets interesting is it can scale almost all the way up to a single page app like
[04:03:25]  and does that seamlessly that's a very rare quality I don't know how important that quality is everywhere but and that's where you know the debate is but quick does something very
[04:03:36]  unique in that sense that when if you have a site that javascript loading is very important and complexity amount of javascript on it is immense interactive javascript
[04:03:49]  not static stuff and people only interact with parts of it so as I said I feel like this is beyond typical e-commerce quick there's nothing like quick or preact
[04:04:09]  compat the problem is once you go down that path and you want to use quick it's kind of the same problem you have with astro you're kind of like well am
[04:04:17]  I going to use react at that point like because now you have react yeah I mean this is definitely a possibility one thing that solid has that quick doesn't have is the
[04:04:34]  super performant granular updates they've been I helped them benchmark on the JS framework and I think they're going to publish some stuff soon they made a PR where they drastically improved
[04:04:44]  their performance after you kind of looking at it because quick's initial performance was not very good for client-side updates where it's like literally solid is just as you guys are
[04:04:57]  were like just almost unmatched so like applying the benefits of solid and quick together could be really really quite powerful to take the granularity in a sense that's what Marco
[04:05:09]  6 is it's like if that package is already together and automated with a compiler like Svelte and everything was easy so you know but everyone there's different lies of
[04:05:21]  where preferences anyways I've been just chatting here it's been great hearing people talking in the chat should we should we cut to this week in JavaScript are people just still talking I
[04:05:33] 'm also looking forward to sort of here if I didn't mention it see how we can do stuff with Bun I think it's going to be a little bit especially with any
[04:05:40]  kind of custom compilation and stuff Bun's getting more compatibility in the features that Jared talks about especially when he sends me private messages where he's like oh I was thinking about
[04:05:48]  this thing and I'm just like oh man this is amazing a certain part of me is kind of being back from like but I think probably we should focus on stability first kind
[04:05:59]  of scenario so I'm very much looking forward to see where Bun goes Bun just released a plugin API oh that's exciting this is what I'm talking about I'm yeah
[04:06:19]  Jared is nuts in all the good ways oh man that's another conversation I didn't get into it here's the thing we can cancel Bun if we want to and take
[04:06:35]  whatever context we want to take it on but if he delivers the fastest framework and he has no HR issues like where people aren't happy doing what they do no one's going
[04:06:51]  to say a thing it's just drama to be fair it's a pretty strong message and not everyone agrees with it but I could see a place where there are people where
[04:07:02]  that's what they're in for and maybe that's how he accomplishes his goals so yeah any I'm not working on it people have been playing with it though I think
[04:07:27]  there was a project that tried to like build on top react native this stuff is possible reactivity is incredibly dynamic it's just it's not an area like I mentioned I
[04:07:36]  use react native but it's not an area like native is not an area that I'm specialized in I like I'm hoping the community picks it up where it makes sense we
[04:07:46]  have custom renders we have a lot of capability maybe something but it's also like it's I'm still very much focused on the core of things I think with the
[04:07:55]  project our size with our resources that's the smart thing to do yeah yeah I think there's more people out there like yourself that's a hard question I mean the thing is
[04:08:15]  this I don't think the technology is going to like the core technology Marco quick going to make the difference here in my mind if I was like armchair racing I would
[04:08:25]  say e-commerce still under values quick's benefit like Marco gets all the benefits of quick and where it gets those benefits Marco six is actually kind of like better where quick is
[04:08:35]  better when you scale even beyond that so for my zone but like that's not going to be the switch like either will be good right but what's interesting to me is that
[04:08:45]  because builders like see the company behind them is CMS focused content site building they built party town they built all these tools around stuff to help people do e-commerce quick's
[04:08:57]  always going to have a really good e-commerce offering same way that Marco's built at eBay it's always going to be really good at that even if in my opinion the
[04:09:06]  technology architecturally wise is actually suited for greater things and Marco might actually be technically better in that specific case it it's I'm not like both of them are going to
[04:09:20]  be fine and because of builders focus quick will definitely be good enough more than good enough it would be amazing is solid going to be proving the same bunch of I mean we already
[04:09:36]  built that demo and we actually added client server client we'll see I don't want to go I'm still we're still exploring what the best pattern is so I don
[04:09:46] 't want to just like go like this is the solution we we're we could basically spend a few weeks solidify some stuff and be like bang we can do what fresh does
[04:09:54]  like I'm not but I don't I don't know I feel like that's not our end game we want something more like server components we want something more powerful um so
[04:10:03]  while we can make those demos and we start showing how we could do server we could use islands the client routing with partial swaps really cool demo if you didn't see
[04:10:13]  the solid start stream I don't think that's the end of it I think we can do better and until then um these are just experiments yeah yeah yeah yeah yeah yeah
[04:10:27]  exactly in a sense in a in a sense uh those those are good for e-commerce too yeah don't don't get me wrong Marco Marco Fresh and and Astro are
[04:10:39]  basically the same as like Marco two to or Marco three to five essentially like the current Marco that's been around uh for the last like five or six years that's they
[04:10:48] 've been Marco was doing basically what quick or sorry what Astro and Fresh do and that has been plenty fine for eBay so they are good for e-commerce as well what
[04:10:58]  I was getting at is obviously quick is good for e-commerce but I think quick's real advantage is when you get like even larger scale types of apps it's going
[04:11:10]  to be physically supported I'm not sure in that form I feel like as I said we can we can do more okay before we lose everyone no actually we still got good viewers
[04:11:18] hip this stream's been pretty good let's let's cut over to to my hot takes section of the stream right that's that's that's what we want we want we
[04:11:27]  want more hot takes um all right all right cool so let's let's do it all right now it's time for this week in JavaScript um this week in JavaScript it
[04:11:56] 's kind of a mixed bag um we already focused a lot on the stream on React but um there's a reason for that because a lot of the conversation for me has
[04:12:08]  been kind of like fringing on the outside of that with React but before we kind of really get into that um I just gotta point out I've been so stoked on seeing
[04:12:19]  the positive benefit that we've been seeing from like co-tweets and like um this kind of like framework love going around um if this this this this one's
[04:12:33]  a a banger from Eleventy and Marco maybe you don't need that spa and another great one quick and astro the web is better when we work together um
[04:12:42]  I talked about last week how I hope the love fest continues and it looks like it has been um and honestly I think that uh it's it's just it's just
[04:12:58]  amazing like the have this feature basically enable that and it's it's so funny because for a lot of people like involved this has kind of been it was a lot of these
[04:13:09]  tweets have been kind of jokes and playfulness fun but it's it's been having a real positive effect on on people and just goodwill it's like something that I
[04:13:22]  I was describing to Fred from Astro that like something we people feel like we needed right like like there's just been so much other negativity and it's like wouldn't it
[04:13:33]  be just great if if you know we can show friendship every once in a while and I was kind of actually hoping that this react stream would show how much you know how much
[04:13:43]  I love react to people so they could kind of get that vibe but so I was very much inspired by this um the the twitter and twitter memes have been just a crazy
[04:13:53]  crazy story um honestly and um I I mean it's so funny anyone who's been working uh who's been around our channels um know this um so essentially uh I you've
[04:14:15]  all seen these one word tweets or you know you know where certain project shows or stuff I believe this actually started from the Astro tweet um and for those who don't
[04:14:29]  know uh Theo actually I think put his whole story out on uh on some kind of Instagram feed but we're gonna highlight Theo here because sometimes it takes just okay fine story
[04:14:42]  time on how I actually started the one word tweet yeah um some yeah quick context me software blah blah blah blah yeah we're sitting here in a private chat and um and
[04:14:56]  um and and Theo was like really wanted to write a tweet to say like that HTML was awesome like it's you know and Fred was like oh yeah sure you can have access
[04:15:08]  to the to the to the Twitter account um and it was it was pretty funny because he basically went back again and did it on HTML and once once he started that he
[04:15:26]  went and ping and did content and I believe like very quickly I think that I think I think Solid was actually number three like after after that we were on August 13th and
[04:15:39]  then Quick jumped in and all the rest of the crew around the MPA frameworks Marco you know which we did on last stream and next thing you know it moved from the
[04:15:49]  frameworks to like Firebase things out you know because you have VIEW, VEAT almost everyone kind of jumped in on these one symbol things and at some point on September
[04:16:02]  1st some large company decided that they were going to do it too and honestly I think this is because there's developers working at these companies that somehow got into the mainstream
[04:16:20]  I don't know how this happened exactly it's interesting I've seen yeah and the funniest thing is apparently Theo's original influence was actually a tweet from a year ago from
[04:16:35]  BART about trains which is a San Francisco like transit thing but it's actually kind of crazy because I don't know if people I guess most people have been paying attention
[04:16:45]  to the story but President Biden tweeted democracy yesterday which is just mind-blowing that this started from you know we've been covering some of these tweets on the stream a bit but
[04:16:57]  something that like basically the first set of tweets were either Theo ghostwriting for framework accounts or basically talking directly with other framework writers in a private discord that I may have access
[04:17:13]  to and basically we're all in on it to basically the president you know it's pretty crazy obviously every step of the way got us there and there was like obviously the September
[04:17:31]  1st thing blowing up had more to do with the corporate side but yeah I mean it's just crazy like Amtrak Bloomberg Washington Post Axios and as far as
[04:17:44]  we can trace the line it goes all back to that Astro tweet yeah most companies have devs right like I think this is I don't know is there a message in
[04:18:00]  there about the power of the developer network I'm not sure you know Theo's probably going to cover this more at some point if he hasn't already maybe I missed that segment
[04:18:10]  but it feels really cool to be part of that even as I said kind of such an incidental thing but it's part of to me it's an extension of that
[04:18:21]  same goodwill thing we were doing everyone just kind of joined on and it was a fun thing you know and I think sometimes we need fun so thank you Theo and as I
[04:18:33]  said it took him convincing a number of us originally to get in on it and that's all it takes to roll the snowball until it's an avalanche yeah planet
[04:18:44]  scale the database the dev side blew up so quickly I don't have links to those we looked at the previous tweets but if you look like the 12th the 13th the
[04:18:55]  14th there was a ton of them yeah yeah yeah that's right actually I remember seeing your post although I'm not going to be I don't think I can copy
[04:19:07]  it from here oh really planet scale was before astro I might have missed that but yeah no it's yeah it's been it's been a crazy ride is that Ukraine
[04:19:29]  one wow yeah I've seen so many memes of this as well it's just kind of cool to have a story that actually started from the JavaScript community essentially so anyway yeah let
[04:19:45] 's let's continue on here so yeah that was tweets and memes I think I think the other thing that was fun was the I sometimes wonder if the perspective around frameworks has
[04:20:09]  changed in the last few years for longest time the new JavaScript frameworks were kind of seen as like an act of violence almost and it's funny because I saw this attitude when
[04:20:25]  I was working at eBay where they're like people are just like oh this is how people get promoted blah blah blah like the funniest thing is that I don't actually think
[04:20:36]  any JS framework actually came up this way I mean someone in the chat mentioned lit because the reason I point out was Angular was built completely outside of Google like technically Michiko was
[04:20:49]  working for Google at the time but like Angular like Google didn't even want Angular initially they actually like it took time it wasn't actually until Angular 2 that Google is like this
[04:20:57]  is de facto but it wasn't like what people think and as I said I'm pretty sure Jordan wasn't trying to get promoted you know like there's just I don
[04:21:13] 't actually like if you look at recent history too when you talk about Rich Harris and Evan Yu and whatnot like this just wasn't the thing but anyways I don't know it
[04:21:23]  was just it's just funny because this is like one of those sentiments that kind of passes around but it's also like probably completely not true so that one was worth me
[04:21:33]  pointing out but let's keep on going if you think you I'm glad Astro is trying to cash in on their their kind of attention due to the one word meme I
[04:21:44]  hope people do check out the framework it's amazing where did I want to get to yeah sorry here I was talking earlier on stream about how react and we're talking about
[04:21:57]  use effect and how react and reactivity have parallels I thought this tweet from Seb was actually really interesting and that like he basically was trying to say like look my top performance
[04:22:11]  tip is avoid multi-pass rendering i.e. don't set state from an effect it can be useful adjust based on the computer layout but if it can be avoided it
[04:22:19] 's always better and he goes in and explains it that's why start by removing multi-pass he explains all data fetching client render after sr often use these techniques
[04:22:27]  but with suspense you can avoid it for both he basically goes through goes to explain this pattern and the thing that stood out to me in my mind is because I've been trying
[04:22:34]  to tell people in solid if you saw my 1.5 release to not do the same thing I'm like use memos and the truth matter is this was so well
[04:22:45]  codified in mob x if you've never seen it I hope you have it it's state library from react that's reactive kind of like solid is and Michelle Westrate basically
[04:22:58]  coined in it what can be derived should be derived and this is the secret that will save you lots and lots of pain no matter what UI framework you are using because UI frameworks
[04:23:10]  are all about synchronizing state that's like it's all about it's not about like necessarily things changing through time it's about at any given point you have the state
[04:23:21]  the UI is updated and responsive and it's super important because you want to be interactive you need to show people consistent state and you got to make sure that interaction feeds back in
[04:23:31]  in a consistent way it's the whole backbone of how we trust our user interfaces so that's why we use the type of reactive patterns we use in the frameworks we do
[04:23:42]  because it's about synchronization it's not about transformation and from that perspective the best way to do smart synchronization is through derivation because I mean this oversimpl
[04:24:00] ifies things again but there's a it's kind of like the two way binding kind of thing but like if you got two nodes right and you update one and see if
[04:24:19]  I can draw this causing something to happen and then I actually need a third node to draw this example and then yeah sorry I've got my arrows backwards give me a second let
[04:24:36]  me get this sometimes a scale draw is a little bit fun let's delete that if you have state so this this is state and this is something that listens to it like
[04:24:49]  a use effect let's pretend it depends on that state and then this use effect writes to this state and that ultimately this depends on that state okay I should use different color arrows
[04:25:09]  here so let's say that orange is depends on and blue is writes so you write to some state you write to some state this depends on it and updates which writes to
[04:25:34]  some state and this depends on it and updates you get this mess this is basically what it looks like when you use effects to synchronize okay whereas if you use derivations
[04:25:55]  to synchronize and actually let's label our state so we know what it is we have state a and b and then these maybe these should be different shapes this is why
[04:26:13]  you think ahead before you draw diagrams right there we go effects are boxes right if you in turn I guess I can just grab this as a starting if if you change this
[04:26:39]  to a derivation derive state instead suddenly this this delete this depends maybe I'll just copy this arrow this b depends on a right and this here you don't need the
[04:27:11]  intermediate effect to synchronize first of all and you don't call the problem with this is every time you go over this boundary and I know I didn't draw this as
[04:27:33]  a really good straight line but every time you do a right like it's something like react you actually each time you do one of these this could be a this is a
[04:27:44]  this is like a render essentially like it not only makes your code simpler and to use it like it knows that B is of A is thing like it connects the dots for you
[04:28:07]  in a way that like you can be optimal right so anyways this is what I mean when I talk about using effects to synchronize versus using derivations to synchronize it
[04:28:27] 's just it's a way cleaner model yeah reactivity is that's that was kind of the point of my tweet like that's what people do in reactive libraries like we
[04:28:40]  even haven't like we even have a we even have a phrase for this right we like what can be derived should be derived like it's one of our mottos so
[04:28:48]  yeah it's it was interesting to like kind of see that similarity in react and it while it might not be obvious to people the reason this is important is because this line here
[04:29:04]  there's there's a line here and this line is like where stuff is like can be considered pure and this can be effectful and almost you know a lot of
[04:29:22]  the react concurrent features and like transitions they depend on the fact that this part of the graph here and let's create a green can be like thrown away like keep the knowledge that
[04:29:36]  the state changed but we can recalculate b and stuff with different inputs as many times as we want and then when we get to where we want to be we
[04:29:45]  then run it so we can like we can like you know possibly what's the term hold hold hold the line here so to speak like if we need to we can choose how
[04:29:57]  to schedule stuff to our benefit you try and apply that to here and it's a mess it's like cascading waterfall type thing it's like where do you draw
[04:30:06]  the line through here it's like it's like it's like um you know what I mean so yeah this this is this this is something very obvious from reactivity land
[04:30:35]  but something it's this is part of what I'm talking about codifying those lessons I actually think even if they will never implement stuff like solid they should actually look at
[04:30:45]  reactivity as an inspiration for the docs we already saw Dan describe react as reactive right and his description sounds a lot like how I describe solid he doesn't talk about component re
[04:31:03] -renders I feel like there's more opportunities here where react heading to kind of embrace this mental model assuming that the escape hatches still line up properly so yeah this
[04:31:21]  was an interesting observation I think it's one worth pulling out another one here was kind of again talking a bit about this I already talked about this a bit on stream but
[04:31:38]  we didn't talk very much about react 18 in the react segment we looked a lot at the future technologies but the truth of the matter is react it's because react 18 came
[04:31:52]  and went and it was kind of unclear what the impact was like who this release was for and two years ago I wrote that tweet about how I felt like the kind of
[04:32:07]  backlash and people were almost like proud of not being react two years later I don't know if the sentiment has changed all that much but I get the sense that you can
[04:32:21]  sense the difference where people used to really want to argue about this stuff it's kind of like this is quite accepted and when I look at the react hooks announcement October 26
[04:32:40]  2018 and I compare it to the react 18 release which is when they finally delivered on all the things that they promised the suspense like all those pieces it what the like the ju
[04:32:52] xtaposition it couldn't be more different how that felt and in a sense it's probably healthier people were kind of going crazy around the hooks time like it was like everything
[04:33:03]  needed to be converted to hooks in the next week people are now kind of like a little bit more level but there's a lot of innovation happening right now we saw it
[04:33:14]  in the Excalibur that we've been drawing on the stream which is a big mess right now for those who probably follow but there's a lot of really cool stuff
[04:33:21]  happening in this outside range and while I get the sense that a lot of people are kind of looking out for the next thing you know they're seeing all this innovation seeing
[04:33:35]  what quick's doing seeing what Saul is doing Marco and then they're like Astro they're like I want to be a part of this there's a certain reality where they
[04:33:45] 're like well I'm going to be using React in my day job anyways so I hope some good stuff comes down from React and React and React 18 wasn't a bang
[04:33:54]  it was kind of just like oh it's there and I feel like it's definitely kind of shifted the mood a bit right there's a lot of stuff going on right now
[04:34:13]  to be excited about but at the same time there's almost an acknowledgement that you can't get too excited about it and we can see the frameworks evolving in front of our
[04:34:24]  eyes almost building to brand new frameworks as I was talking about special new compilations things like server components things that are so fundamentally different like you know even like quick on that
[04:34:35]  where you can't really use an existing framework to get there so we're rebuilding them so in a sense whether you're React or you know with server components view with view
[04:34:46]  vapor quick whatever like it doesn't it feels like everything's new again and at the same time maybe it's hard to get excited about it I love this tweet from Madison it
[04:35:01] 's like everything okay babe you barely tested the newest javascript framework it just it's kind of it's such a it's such a change even two years ago people would
[04:35:09]  be angry at you when you said that you create a new framework I experienced this I created this all back in 2016 and I guess open source in 2018 in 2020 people are
[04:35:18]  still telling me that I was like a bane on the existence for creating a new javascript framework these days no one cares they're like oh yeah I mean yeah of
[04:35:30]  course there's a new javascript framework so in a sense you're like oh that's a good thing but it's not people were passionate enough to get angry about it
[04:35:37]  before I feel like it's it's like the opposite like it's everyone's just like waiting but for what I don't know I'm not completely sure a lot of
[04:35:48]  people are working on really cool stuff but the way that I get this feeling when I talk to people everyone's kind of like in a holding pattern they're like React's pretty
[04:35:55]  good to what it does I don't have to do anything so whether it's new stuff from new frameworks new stuff from React you or whatever everyone's just like the I'm
[04:36:04]  not sensing the same excitement like four years ago was a very different world right but so yeah now the new thing is HTML framework sure but if you're going to be realistic
[04:36:22]  here they are very good for a certain range of problems there there's limits like it doesn't completely solve the problem there's still work to be done to bridge the gap
[04:36:34]  so while there's excitement there and I'm like I shouldn't be saying like people are very excited about Astro and they should be it's not quite it's very different
[04:36:46]  than the kind of excitement that happened when React hooks were released people are tired of the quirks with React perhaps but they also can't leave React they're like so I keep
[04:36:59]  on talking to people and they're like it's like some kind of like everything's kind of cloudy and then they're looking and they're waiting for the clouds to part
[04:37:06]  and some like light to come through like as if someone has granted them some divine blessing or something like that's the atmosphere that I feel like we're kind of sitting in right
[04:37:19]  now where like people are looking and they're like I can see that I can see that that's all really cool but I don't know if it's gonna be as impactful
[04:37:26]  of React so I'm not really gonna there's you know my hands are tied and then I'm sure React will do something good eventually and that's all that's that
[04:37:38] 's all that I'm kind of getting at here I it was interesting I haven't looked at all the responses people have been responding to this not sure how many Reddit threads you
[04:37:46]  read releasing but there's still a lot of frustration going on the hooks and yes there's a ton of stuff on use effects and hooks and and I I can respect this
[04:37:58]  but my point wasn't on hooks specifically we talked about that earlier in the stream obviously people are still upset with hooks it's just it feels like we're at this kind of
[04:38:07]  turning point where people were you know starting to turn away from the vision you know this is beyond hooks just like concurrency in the whole model and two years later has it been
[04:38:21]  delivered I'm not sure this I was saying I wonder if there's a sense of powerlessness or almost apathy like we just don't care anymore like you know like
[04:38:31]  I don't know maybe maybe this is what maturity looks like when you're young and you're excited about everything and then you get old and you're just like yeah that's
[04:38:43]  life are we in a place where there's been a lot of dashed hopes like this one PWAs web components was another one is the whole platform set out where maybe
[04:39:00]  people like myself talk a lot about exciting new things on technologies and then if they don't pan out we just feel like oh well maybe we shouldn't care anymore I don
[04:39:09] 't know this this is a conversation topic that is kind of why I did the react stream today I was hoping to kind of leave it on a positive note at least on the
[04:39:19]  stream part but I wanted to kind of reflect on this because it's like we have a lot to be excited about and I hope that some point in the future we can be
[04:39:36]  again it's that's if that makes any sense I maybe this is like my own projection a little bit more than anything but as I said I just it's just a
[04:39:45]  subtle subtle thing you know yeah I love that we see iteration in real time right I think this is the innovation this is what I was talking about people are looking for a revolution
[04:40:01]  but we we didn't jump from jquery to react there was all of this stuff in the middle and I feel like if the next thing is actually somewhere over here
[04:40:14]  we in reality we don't jump from react to whatever is over here it's it's that like everything iterates and we slowly get there until it becomes clear you know what
[04:40:28]  the thing is there's been conversations about the gens of web dev and stuff I don't want to get into that discussion because you don't really get to label the generations
[04:40:34]  until you're already there like once it's actually settled then you're like oh that's where the lines were because at the time everything's just little steps so yeah this this
[04:40:54]  is this is the sort of feeling and I said it's it's it's it's why we've been kind of having conversations it's interesting because Dan is one of
[04:41:04]  the most generally if he's very positive and he's very he he gets a lot into like the thinking and he gets excited about it same way I get excited about it but
[04:41:15]  if you want to see a topic that he doesn't get excited about ask him about other JavaScript frameworks that actually still gets me excited but but like you can just tell he
[04:41:28] 's just like you know because and to be fair people probably bug this about him all the time they're like he he had that Q&A right and someone of course asks
[04:41:38]  what do you think about Svelte or Solid and he's like if we preferred some other model we just do it you know the end of question and he starts talking
[04:41:47]  about some benefits and and you know people jumping in like Fabio who's like there's always trade off immutability is probably slower blah blah blah optimizing but then he started
[04:41:58]  going the other thing we care about is pull rendering where we only compute what's needed for screen unlike push reactive approaches where code change that through we execute on change and can do
[04:42:06]  anything we don't think of rendering as a signal but more as a request which I think is a great answer this is part of the reason why like the mental models are
[04:42:16]  so different one's kind of pull push what's interesting is solid is actually a push-pull hybrid so that's why I'm able to emulate so many different patterns that
[04:42:24]  both do and I look forward to looking that in the future yeah someone asked him what have eliminated start transition one example already said that we can start applying a lower priority state which
[04:42:39]  may have CPU extensive work or may suspend for data code but we remain interacting can skip this update if we want to handle another change urgently what's actually kind of cool is
[04:42:48]  we actually do this in solid as well under the experimental flag so again this is not necessarily it's more complicated but it's not necessarily part of their model someone's like I
[04:43:00]  like the idea that you can put it's not someone obviously in chat hey the idea that you can push to make sure your pure computations are consistent and pull to render at
[04:43:11]  once applying side effects that would give you a lot of the same benefits that we achieve immutability and in a sense that's how solid suspense works we hold the effects
[04:43:19]  essentially so we don't actually push them but we actually like hold on to them and then we do all the pure computations and then once we're like okay everything's settled
[04:43:29]  we then run through the effects queue and we're actually kind of like pulling it so this is actually very I don't know I didn't like this very dead on to actually
[04:43:37]  how we approach a lot of problems that React does but it just he got asked this question over and over again in different forms he started like quote tweeting quotes because like people
[04:43:47]  just kept on asking because I think there's a lot of a lot of that question right and similar question I decided to step in and I was like okay well what about the
[04:43:56]  abstraction in general like are we going too far with compilers and all this stuff and Dan's answer was like I don't think we've gone far enough which is
[04:44:07]  interesting which means I actually think React and Svelte align more in philosophy than you'd ever realize when you get this like he's he's saying there's danger in it
[04:44:16]  but generally speaking they want to create a language that's what that's what I hear here and not just a lower level language that gives people the tools they want to create a
[04:44:24]  higher level language yes I did already show this but I went on the react part but I want to do this again here because it's relevant to a different conversation which is
[04:44:39]  kind of similar where Kevin here started we this is kind of it was these kind of tweets that got me to do the stream this Friday which which is like after reading this complex
[04:44:55]  react thing the mental overhead of using react is insane one step there I hundred percent believe we can do it or maybe solve is the answer so this is the kind of comparisons we
[04:45:03]  get now right where people are like you know like people are like well maybe solids they're looking for a fix and I already mentioned solid isn't a fix and one thing
[04:45:21]  Kevin here has been pretty he's definitely more on the svelte side of things he kind of started saying like one of the things he's noticed is like he's
[04:45:33]  like well I believe solids will hugely forward from react but depending on your use case I think svelte is even bigger leap forward cells in particular appears to have specifically addressed the
[04:45:42]  pain points we're facing when building modern react apps which is interesting because we kind of get into here he's basically talking about how easy it is for him to build in
[04:45:54]  svelte and someone was like well I don't know svelte does all things I don't care about so that's why I don't I'm not into it
[04:46:01]  was a response and I thought it was interesting where this conversation went if I can find it but let's see if I can find where this goes yeah here it is I think
[04:46:16]  and this is talking about svelte they took the approach of how we like would like our code to look like to accomplish things and work backwards from there and you can
[04:46:24]  start to see the similarities to what Dan was talking about about having the right abstraction and I personally think it's the right move in any radical paradigm shift again people looking for revolution
[04:46:38]  despite the cognitive shift required piggybacking existing solutions right it's funny because like part of the reason I was talking about this is because I don't view solid as piggyback
[04:46:49] ing but I guess I am because I'm just using I guess I am using things that are there but it's not because I care about those things is the best way
[04:46:57]  to put it so basically the idea here is svelte is looking at where things they see things should be and they're trying to build backwards from it is the idea and
[04:47:07]  what I responded the only thing I caution is that the presumption of knowing what the final result should be it's easier to make assumptions that reflect today or tomorrow's thinking but
[04:47:15]  restrict the ability to change those boundaries again fortunately a good abstraction still leaves a lot of room so this kind of gets into this thing where we're like I think framework dev
[04:47:33]  we should ask what are we trying to do the answer is build apps or translate brain ideas into workable things it said we tend to focus on alleviating pain points from existing
[04:47:39]  systems through incremental progress other than heading upstream I think this is interesting because I think it's kind of perhaps misrepresenting like people I think people as I mentioned think
[04:47:49]  I worked on solid as a way of addressing pain points I didn't which actually clarify here a bit in your case Ryan I think you've already demonstrated incredible progress feats with
[04:47:59]  solid but I challenge you to apply your talent to solving entirely app building experience with none of the preconceived notions we carry today basic situations if I were a brand new developer
[04:48:09]  and say the year 2030 and I had an idea project how would I want my experience to be what to solve and how easy would it be then we bridge the gap to
[04:48:16]  make a reality and I said right I think about the future a lot I honestly don't know what it would look like but I only have hints of what the qualities it should
[04:48:25]  have so I focus on the minimal assumptions I need to make and leave the bike shining to others those opinions will change over time and I think I think this is this is this
[04:48:34]  whole conversation there's a lot of back and forth here and I kind of mentioned here yeah in terms of decision making I want to clarify that I never saw my work in
[04:48:43]  solace fixing react it was more the opposite I felt react's velocity was missing from reactive systems and that they had learned something important that others had missed see and he goes I
[04:48:54]  keep thinking about how powerful your fine-grained reactivity demos are completely outside of component scope but the very idea clashes with my idea that a lazy dev wants fewer controls
[04:49:03]  not more so how do we take elegant concepts and use them under the hood to enable powerful dx kind of like how we abstracted away absolute power of autism years ago and
[04:49:13]  you can you I love this conversation because I think it is actually the pure argument between solid versus felt and in a sense react on the solid side of things or react versus felt
[04:49:25]  or whatever and even though react is now kind of crossing that line that's why it's interesting to me and what I said is what how do I explain to I said that
[04:49:36] 's one problem to solve I'm sort of just less worried about that you know at certain point people use this felt like syntax on compiler because we had those controls you can
[04:49:47]  basically build on top of stuff and I said I see the lazy dev clash but I can't be bothered too much by that lazy devs will always exist and what is acceptable
[04:49:58]  to them is tangential to fashion essentially it's whatever is fashionable whatever you decide is acceptable on the dx side however using primitives to build uis was faux pas when
[04:50:08]  react simple pojo state came on the scene this is when react came out but we still ended up moving on to where we are today with hooks so I think the message here
[04:50:21]  is I'm it's good that certain people are focused on how to build the experience that makes sense today on how the future should look like I think that's what we
[04:50:34]  all do to a certain extent but the patterns that we use do change over time and we learn from them and if we try and sit too far in the future we might end
[04:50:49]  up with something maybe like web components which in one side clearly makes sense to be the one impossible future but then the whole world has gone a different direction so it's a
[04:51:07]  balance in terms of how much you want to work there and and not every solution can actually cater to every sort of problem like work and person even like it's good that
[04:51:27]  we can accommodate the lazy dev but for a certain project it doesn't make sense to actually have them define what you do anyway right but yeah I mean the the the idea
[04:51:50]  here is that that people don't want to do the work and I probably the person with the least sympathy towards that I it's funny we when you work in a framework you
[04:52:01]  care about DX and UX so much you you get into those details and you're like and you're like okay how do we balance it so that it makes sense that it
[04:52:11] 's intuitive and that it doesn't feel cumbersome you get into all those elements and find the balance where you keep control explicit in it implicit it there's those decision points
[04:52:21]  at every point um but it's like every single one of those is a trade-off and you kind of you start trying to figure out you have multiple parties you serve
[04:52:32]  right it's almost like a stakeholder on any kind of project you you're like okay you have these users these users and these users and it's an interesting question to define who
[04:52:41]  are the stakeholders that you care the most about and I don't I I can see that Svelte actually does and I don't think that's what's going to
[04:52:49]  do and I don't think that's what's going to do and that's what's going to do and I don't think that's what's going to do and I
[04:52:55]  don't think that's what's going to do and I don't think that's what's going to do and I don't think that's what's going to do and
[04:52:58]  I don't think that's what's going to do and I don't think that's what's going to do and I don't think that's what's going to do
[04:53:01]  and I don't think that's what's going to do and I don't think that's what's going to do and I don't think that's what's going to
[04:53:03]  do and I don't think that's what's going to do and I don't think that's yeah yeah I mean we can say that from that perspective that we've
[04:53:15]  made things simpler in a certain way because you're not fighting certain things but what I'm getting at is like view has basically the same reactive system and I would argue that they
[04:53:29] 're they're close to just felt on the scale because that's something that they care about um and this is this is where the values meet the the the metal you know
[04:53:41]  sort of mean the tire meets the road because there's gonna be certain people that work on that developer experience you ever hear rich talk he's like I want to envision that future
[04:53:54]  where developers can just tell the computer what they want it to do and it'll just do it and I want to bridge that gap as much as possible and not worry about
[04:54:07]  um you know figure out how we can do that but figure out how we can help people build stuff you know convert those intentions in and I feel like the recent direction to react
[04:54:21]  has been that way but I'm I'm much more interested in how I want to know how it works like it's all that's all fine but if you can't
[04:54:35]  deliver on it like if there's a huge difference in experience if something's fast or slow even if it's the ideal scenario but if it's too slow then it's
[04:54:47]  it's no good that happens in a lot of cases and and sure I'm I'm not saying things can't be fast enough I'm just saying that sometimes the mechanical pieces
[04:54:59]  and understanding the fundamentals is is is as like the journey is as important as the goal but that's what I'm saying this is this is a deeply philosophical question when you
[04:55:14]  get into that zone so I I think I think this is interesting because I feel like these kind of conversations are going to come up again same way that benchmarks have been coming
[04:55:37]  up again and performance um as I said I I've I'm I'm very maybe my last topic here is um uh is that I'm I'm glad that um yeah
[04:55:53]  we got some pull requests here improve DOM render performance yeah I mean it's unfair this is in dev mode but this this is actually from my computer the first time I ran
[04:56:05]  quick um on the JS framework benchmark um this is just absurd the real numbers are about are are still back here but there it's more like two not 150 um but they're
[04:56:19]  doing really good work here and it looks like the expectation is if I was to project based on this this new update that quick's doing this 0.8 behind preact
[04:56:32]  yeah faster than react probably in a brown mithril range so like a little slower than preact is what they're kind of aiming for for this first release which is huge
[04:56:42]  because look at this execution line and look at look at this side so very I'm excited they're they're approaching beta soon um we'll be able to get the benchmarks in
[04:56:52]  for real and see exactly where it sits but quick is making big improvements um to performance here that's that's that's the first thing and then um the second benchmark thing
[04:57:04]  I want to point out here is that um I I I think we're making good progress to um where is going to see we're starting to see uh star beam the
[04:57:22]  universal renderer from uh from um from the ember team is is starting to uh make implementations they've added a lit implementation and an integration uh I believe with react so
[04:57:35]  this is this this is kind of interesting to see um cross framework state management um so I I I mean obviously stuff like mob x works like that and you could probably use
[04:57:49]  some react stuff but I'm actually it's it's interesting to see this uh the the maintainer this repo is going away has been on vacation so I'm I've got
[04:57:58]  to put a new solid version in it um millions hasn't been uh hasn't uh been merged yet and it kind of caused a bit of a kerfuffle yesterday on
[04:58:08]  reddit um because someone just read run it ran it locally and they're like millions is slower than react why are they advertising that they're 11 times faster on um on on
[04:58:20]  their on their page and I think this is a little bit complicated scenario um because obviously different benchmarks weigh different amounts I think some tuning needs to be happening I think I think
[04:58:31]  that that's probably why this pr hasn't been merged it's been a month a month so I think I think I think I think there's some work being done here um
[04:58:41]  yeah both keyed and non-keyed is working pretty sure million and yeah so they're hopefully in the next few days this will get resolved but I think I think
[04:58:50]  this is just kind of the creator of millions is uh really really smart 17 year old uh talked to him a couple times shared some white paper stuff he's been working on he
[04:59:00] 's been doing a lot of research into this area and I'm I'm very interested to see um what his determinations are but I I think it is important as much as
[04:59:09]  we get excited about benchmarks and stuff um to you know try our best to to to have certain like you know possibility of doubt so to speak and to to use multiple benchmarks
[04:59:24]  to kind of make the determination of where performance sits I like JS framework benchmark because it actually tests so many different things but this isn't the only benchmark out there and um yeah
[04:59:36]  it just it saves us sometimes you know and you know every everyone's kind of gone through this I think IMBA a few years ago saying they were 20 times faster than
[04:59:44]  react and they weren't they were they they had these pretty good performance but I I think this is one of one of those things where you know it's really tempting to count
[04:59:55]  your chickens so to speak so um yeah I imagine this stuff will be getting through also preact team's been hinting on twitter that they have a big release coming out soon
[05:00:06]  so hopefully next week is the week um I'm I'm hoping to see whatever this reactive thing that there is you better believe that I'm going to be their front row
[05:00:15]  center to benchmark it so um I'm very excited um for hopefully the next week in javascript um and with that I think we are done for today um so thank
[05:00:26]  you for joining me on this week in javascript all right that this is a long stream it's already five o'clock this is probably the longest stream I've ever
[05:00:39]  done it's been five hours there's so much stuff going on so I gotta I gotta bail out pretty quick here um if you haven't already give the like button subscribe
[05:00:48]  you know all that deal I appreciate it um helps me a lot uh I'll I'll be releasing this week in javascript as separate videos pretty soon and I think that
[05:00:58] 'll be um fun for people to kind of be able to uh you know get into the content and make it more accessible I don't think my stuff is as clippable
[05:01:08]  as Theo's maybe one day when I get an editor but for now um I'll put time stamps in and hopefully you guys can find the gold so to speak all right
[05:01:17]  so with that I am going to go you all have a great weekend till next time