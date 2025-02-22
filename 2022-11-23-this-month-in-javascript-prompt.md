---
showLink: "https://www.youtube.com/watch?v=ijKULkvSaAU"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "This Month in JavaScript"
description: ""
publishDate: "2022-11-23"
coverImage: "https://i.ytimg.com/vi/ijKULkvSaAU/maxresdefault.jpg"
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

[00:00:00]  Hello. Hello. Do we have audio? Just a second. Okay, we're good. Welcome to my stream today. If you're here, come say hello in
[00:00:13]  the chat. I heard there's some issues with YouTube, but if YouTube's working, then I guess we're good now. When I first signed on a streamer,
[00:00:24]  they're like, we're having trouble connecting to YouTube. Can anyone confirm to me that they're watching from YouTube? There we go. Yeah, I've seen chat
[00:00:36]  coming in from YouTube. So I suppose we're live. Yeah, let's give people a few minutes to join on. I'm going to post this in a couple places
[00:00:49] . Yeah, there we go. There's like the delay. So weird echo on YouTube. Interesting. I wonder if the audio devices are set up weird. Let's
[00:00:59]  see here. Looks like my camera is good. What's my audio? Yeah, it should be. Oh, weird. Why is echo cancellation on? What's stereo
[00:01:13] ? Okay, how's that? Does that sound okay? Is that a bit better? Okay. Yeah, I just adjusted some stuff. All right, all right, all
[00:01:24]  right. Give me a second here. I'm actually gonna open up Twitch as well. And let's see, let's, let's post the YouTube link. Or
[00:01:34]  the Twitch link here for a second. Because I learned that StreamYard, which I use, which is kind of, you know, my low budget thing, Theo
[00:01:47]  makes fun of me for this constantly, doesn't really handle information from like, subs and whatnot. So when people sub and do stuff on the channel, I get no knowledge
[00:02:03]  unless I'm also watching Twitch chat. So here we are. Let's get Twitch chat. Yeah, and there we go. Insanity later to subscribe to tier
[00:02:11]  one. Thank you very much. Second month sub. So starting to get people on here. I think I've only been affiliate where you could sub for the last maybe two
[00:02:20]  or three months. So thank you very much. Okay, how are we doing? Got people on there. Let me just quickly go on Twitter and remind people that I am
[00:02:30]  in fact streaming right now. But yeah, no, I'm really excited to, to, to talk about this, everything today, because it's been a while,
[00:02:42]  as many of you know. So thank you for all the welcomes back. So let's see here. Let's what am I going to do? I'm going to
[00:02:50]  quote tweet this. Yeah. Actually, you know what, it's been so long. Let's make sure that my screen share still works, right? Because like my luck
[00:03:00]  is okay. Yeah, we're good. That's gonna like prompt me and make me restart the stream. It's, it's, it's, it's really
[00:03:06]  been that long. Okay. We're live. What's, what's my Twitch handle? I can never remember this stuff. What Twitch TV slash Ryan solid. Indeed
[00:03:25] . Okay. All right. Let's tweet this. It's just like double, double check. Okay, cool. All right. So hopefully at this point, um,
[00:03:40]  we are in a place where, uh, what is I going to say? People are getting past that dreadful, dreadful pre-roll. Um, and,
[00:03:50]  uh, you know, we can get, start talking shop. Uh, let's see here. You know, that's not what I wanted. Scroll, scroll, scroll
[00:04:01] . Where's my profile? It's the fun part of this stuff. You guys get to learn how like terrible I am at tech sometimes. Um, let's not
[00:04:10]  worry about that too much. Um, yeah. So what we're doing today, um, today's gonna be a little bit casual compared to my normal streams. We're
[00:04:18]  gonna, we're gonna just talk about, you know, the last month in JavaScript. There's been a lot of releases. There's been a lot of conferences. There
[00:04:24] 's been a lot of, you know, spicy stories and whatnot. And I thought it would just be fun, uh, to, you know, uh, you know
[00:04:33] , just talk shop, shoot the shit, so to speak. Um, you know, we'll just keep on waiting. Um, you know, as more people join in
[00:04:41]  for just a couple more minutes, you know, there could be up to 3000 people on the stream and then I might have to charge you guys for being in chat. So
[00:04:52] , um, you know, that, sorry, I'm, I'm just, I'm just, being facetious. Um, I, I had a lot
[00:05:01]  of good times the, the last, uh, the last month or so. Um, I guess my last stream was October 20, 28th. Mmm. God, orange
[00:05:13]  juice is so nice. There's actually, well, like, well, we're sitting here for a month. I, people, a couple of people actually asked questions in
[00:05:21]  chat before I even got here. So I'm going to answer a couple just cause why not? Hey Ryan, hope you're good. I'm wondering whether you have
[00:05:28]  anything to say about the blow to the modern JavaScript ecosystem. I do. It takes 10 plus configuration files and 250 megates to build that. Oh, that kind. Yeah
[00:05:37] . That kind's trickier from my perspective. It's interesting. Yeah. If we, we just want to like tangent right into like some kind of thinking, um,
[00:05:46]  I'm very end user oriented, you know, even though I, I work on dev tools, um, I'm very much, I'm always thinking about like the
[00:06:00]  final UX the end user gets. So like, I, I, I'm, I'm one of, I'm like one of the weirdest people to ask this question too
[00:06:06] . Cause I'm like the guy who's like, and, and don't get me wrong. I've, I've been on places where there's slow builds. I
[00:06:12]  also worked on, on Microsoft.net stuff during the like two thousands. So like, I know what it's like to like, you know, set the compiler off
[00:06:21]  and go grab a sandwich, but like, um, I would pay every drop of it. If it means that the end user gets a better product, uh, is,
[00:06:33]  is that it's a challenge of it. Right. I'm, it's funny. I'm like such a stickler for when it comes to kilobytes and loading
[00:06:39]  times and update times and all this stuff for when the user's actually using the product in the end, but I am not the biggest like, like on the build tool
[00:06:46]  side of things. Like if those build tools let us get there, I'm like, I'm like, okay, like we'll streamline them over time. But number one
[00:06:54]  is get the user, the fastest, best products. So like, it's tricky. I know a lot of people are trying to like go no build kind of stuff or
[00:07:02]  like lower build. And I feel like the JavaScript language itself has kind of moved on from this. Like I understand at some point it was cause the, uh, browser
[00:07:11]  compatibility with stuff like Babel. But at this point, like when I see JavaScript, I just assume that that's not what's going to get run for the most part
[00:07:18] . Like, like we, JavaScript isn't a language anymore. It's a meta language. And I think 10 configuration files is unfortunate, but every time we try and streamline
[00:07:28]  something, these are monumental efforts. And then the opinions change. It's kind of like meta frameworks. Like when I think I used the term meta bundlers before,
[00:07:36]  um, we kind of get into this like zone where it's really tricky to find the right level of like, like opinions to kind of streamline all that stuff and yet leave
[00:07:46]  ourselves to be completely flexible. And I know this is like a crazy, you know, a lot to get into right off the start here, but it just, it's
[00:07:53] , it's a challenging thing. Cause the one, the more opinionated we are, the harder we have actually being inclusive on technologies. And that's, that,
[00:08:02]  that's a, that's a tough one for me, always working on stuff that's on the fringe, always cutting the edge. I'd rather like bleed a bit on
[00:08:09]  the DX side as we get there, then like stress too much about this. Cause someone's going to come around, right? Rome will come eventually. Right. Um,
[00:08:17]  or what is it? Rome wasn't built in a day. Whatever. We can make enough Rome jokes. It's actually funny. Rome actually came up in the conversation
[00:08:25]  again recently, um, which I hadn't heard anything from them for like a year. So, I mean, here we are. Um, what else have we got here
[00:08:35] ? Uh, all right. Here's a good one. Hi Ryan. Instead of all the work on solid start, which is awesome. But don't merging the remix and
[00:08:41]  making solid JS, the first class citizens are great instead of competing. Yeah. I, I love the, the sentiment here, but it's kind of funny. I actually
[00:08:50]  did talk to the remix guys like really, really early on. Um, for me, not like, not that early on, like it already like started solid start for
[00:08:58]  like eight months, but like the second they open sourced it, um, I was talking to them because like the truth of the matter is I never wanted to make solid
[00:09:04]  start. I I've said that like multiple times. Like I just, we start getting to opinionated places. Like I, I, you know, people lose freedom and
[00:09:11]  stuff like there's trade-offs. You can be smart about it. And I feel like we've been really smart about it with solid start, but it's a very
[00:09:17]  hard balance for me personally. And, um, the challenge though is agnostic tools have never been really friendly to solid. And this is something that I think like
[00:09:26]  Tanner has really, um, uh, recognized and even when I, and he's done so publicly. Um, but like if, when you talk about like these things,
[00:09:36]  uh, um, in terms of, uh, like even remix, we sat down there and what we ended up going, like, what could we share? And what we
[00:09:43]  ended up realizing was, it's just the matching patterns for the router. Uh, uh, and the, the, the reason is that solid's kind of reactivity
[00:09:51]  is very different mental model, update model so much to the point that you actually like everything almost from the, like the, the native part, like parsing the URL,
[00:10:05]  like everything from that point on you think of updates different. And if you cater to solid's model and the reactivity model, you can kind of actually put it de
[00:10:13] opt into like reacts model. But the problem is like, if, if you start from something that's kind of thinking like a react model, then you can never optimize to
[00:10:23]  get into the solid model. Like it's, it's, it's, it's very interesting for me. Cause there's like the spectrum of, of, of granular
[00:10:30] ity and fine grain updates. And react is like on one side and it's all, it's like the complete opposite. So like what ends up happening is like view
[00:10:37]  and Svelte, um, kind of are in the middle cause they can work like react, but they'd much rather have you write your code like solid, but because
[00:10:46]  they kind of cover that kind of zone. Um, most things that are made like generic to fit a react type mentality still work there. There's not quite as good
[00:10:54]  as they're optimal. And this is kind of like, uh, after what it's just, it's just a challenging place to be with because I talked to, to
[00:11:02]  Michael Jackson and he was like, you know, we could look at it at one point, but like, there's no way we could prioritize that. And I'm like
[00:11:09] , I needed solid start like yesterday. So like that, that was where these kinds of things leave off. Um, it's really hard for people in the react ecosystem
[00:11:19] . Um, like when there's a difficulty there on migrating, like the state logic side, if your stuff's very view, heavy component libraries, all that kind of
[00:11:29]  stuff, like those, those, those fly across like nothing, but when you're kind of getting into like really, um, like architectural pieces, react installs architecture is
[00:11:39]  distinctly different to the point that, um, I haven't, other than a few people who are getting into stuff like Tanner, um, I haven't seen people
[00:11:48]  willing to make that trade off yet. Um, I think they will as more people are going more reactive and they realize that's where the optimizations are, but it's
[00:11:55] , it's not as simple, um, like as just saying, Oh, why don't you just use remix? Okay. And well, just three great questions right
[00:12:08]  off the bat. Um, hi, I hope you're doing good. I'm also curious what mentioned about quick and solid printing, what that looked like in broad terms.
[00:12:13]  I mean, that's a, that's another challenge. Um, and one that maybe we can get into a bit more as we cover some of the stuff that's been
[00:12:20]  happening on stream, but essentially, uh, the easiest way we can do it is get solid quickify working, which is getting solid components inside quick, kind of like we
[00:12:27]  have an astro and someone actually managed to successfully do that. I believe yesterday. So getting your solid components inside quick is a thing, but fundamentally it's a much
[00:12:35]  trickier conversation to have. So yeah, maybe we'll get to that more. Yeah. So let me catch up on chat. Sorry. I've been doing this.
[00:12:42]  Um, what are we going to hear? Am I plotting something with Tanner? Most definitely. Um, I think I nudging you get the working quick. Yeah. Yeah
[00:12:55] . I'm, I don't think it'll be too hard to get the basics. It's interesting if we can optimize further because quick has reactivity and solid has
[00:13:01]  reactivity. So like there, there's potential there. Um, yeah. And the patterns are, are very great, which is largely why we grabbed a lot of those
[00:13:12]  ideas from, from, from, uh, from remix and try to incorporate them at least in a way that they're portable and like you can use it or just completely ignore
[00:13:21]  it and it'd work. Right. The thing is actually the loader, uh, and action, uh, abstraction while doable, we have this still change it very
[00:13:32] , if you look at solid starting, you see the differences from it, from remix, you'll understand very quickly why, um, we didn't do it the remix way
[00:13:39]  and why it makes sense for our reactivity. They've like, we've looked at the remix way, but it would, it'd be like a deopt. So
[00:13:44]  like, it's, it's, it's one of those kinds of challenges, but of course we can't expect remix to change what they're doing. Right.
[00:13:52]  And there's lots of opinions here, right? Um, that, that, like that's, that's the thing, right? We got the capital get put post right
[00:14:09]  from SvelteKit. So deopt. Well, the, the problem is like, it's, it's coarse grain versus fine grain. And I, it's
[00:14:17]  like, if your mentality is like, we're just going to re-render everything all the time. Like that's just not how solid works. If solid did that
[00:14:23]  like very bad things would happen. Right. So like, even when it comes to routing, like how do you handle, uh, uh, update on a route partial,
[00:14:30]  do you re-render it? Like you're like, okay, well maybe you can get the data props in and then write them into a fine grain store and then diff
[00:14:37]  that. And that might be fine. But then invalidation becomes a thing. Like if, if you start building systems with these fine grain reactive libraries, you might be like
[00:14:45] , well, why do I want to like always refresh all the data when I could do some of the data. And since I need react, like I could just listen
[00:14:51]  to certain query prams and only update those things. Like you kind of go down this, this branching. And it was like, is it possible to actually accommodate all
[00:14:59]  these people? And I mean, don't get me wrong. I don't mind strong, uh, simplification. If we can get to a zone where we can kind
[00:15:06]  of like go, okay, by extension, you can get here. Um, but for me to get that common ground meant we had to lower the abstraction one level.
[00:15:13]  Um, if that makes sense. Hey Johnny. All right. Yeah. I love the CUNA. Do you see options to make solid faster? Do we hit
[00:15:25]  a ceiling already? Um, in the client, client render browser rendering thing, um, maybe like, how should I put it? Like, uh, let's look at
[00:15:33]  the JS framework venture. It's funny. We've been kind of like sliding like the tiniest bit, like some of them are bad runs, but after enough
[00:15:40] , enough bad runs, you're kind of like, you're kind of like, what can we, we, we do here? You know, like maybe there is some
[00:15:46] , some space like, um, let, let me just flip over here. So you see what I'm saying? Like, uh, yeah, we got some bad runs
[00:15:58] , but like, we're all around 1.10, 1.11, this zone. Vobi, which is very, or Vobi or whatever it is very
[00:16:04]  similar to solid has managed right now to shave as part of it's a bad run, but maybe a 0.01 noticeable off in a couple of key places, mostly select
[00:16:13]  row. Um, this is a very bad run. Whenever solid state or store version gets a better score than the solid naked version, you know that like there's something wrong
[00:16:26]  going on. Um, so like in this case, this, this is a very bad run for select row. Um, so we should be like more like over here
[00:16:36] , but every, it varies, you know, within that kind of variance. So it's not a big deal, but what I'm getting at is client side rendering.
[00:16:45]  I, we're at like the end of the unlock here. I, I think, I think server rendering is more interesting, but it's not the raw string rendering either
[00:16:53] . Solid has like the fastest raw string renderer too. It's like the architectural stuff. This is why I want to work closer with the platform team. Someone, I
[00:17:01]  think there's like a misconception about performance here, like you in that it's not like a linear thing. Like it's, it's to the next bottleneck and
[00:17:08]  the bottleneck we have right now is making our SSR work best with the platform. Another place I think is interesting is reduction of hydration costs. Um, and we've
[00:17:17]  been seeing that with like our, you know, solid movies demo, which we'll get into. So like, maybe I'm just getting too far ahead of myself right now
[00:17:24]  when we're just chatting shop, but, um, and maybe we should talk about some of the news and kind of pull these topics in. Um, uh, quick
[00:17:32]  question. Why does react use class name and class? Um, yeah, I mean this, this, this, this came up a while ago and I, I, I
[00:17:42] , I'm pretty sure, uh, like they could have always used class. I mean, maybe like destructuring kind of as awkward cause class is a keyword,
[00:17:52]  but I think it was just like the mentality of like the props or properties. So they looked at the property form rather than the attribute form. Um, but anyway, uh
[00:18:01] , so I'll start docs. Um, they are right in the repo. We had a problem with deploying, but, um, it looks like we're back up and
[00:18:12]  we're getting some better examples, like how to do authentication and driving people absolutely nuts the last few days. Um, and how to do like nested layouts and all
[00:18:22]  that kind of stuff. So, um, if, if you are interested in getting involved, uh, solid start, which by the way, thank you two point, like
[00:18:31]  we're already growing pretty quick here. Uh, um, two and how many projects on it? Oh, it's not going to show me this right now. Is it
[00:18:40] ? I love this. Sometimes you'd have you like refresh and it's like, Oh, it's not there. Nope. Not there right now. It's already
[00:18:46]  been 72 contributors, but there's also, I think there's like 700, um, uses already. Um, but yeah, in here, this docs project here is all
[00:18:57]  the wonderful markdown files that you can help and contribute to the docs. So all right here, look here, Anthony, FS jam, you know, already did some great
[00:19:08]  work at cleaning up the docs. So I think those just got released this morning. Thank you, Anthony. So I saw you in chat earlier. Um, all right
[00:19:17] . Um, uh, would you notice a difference? I mean, it depends. Uh, we, we use significantly less memory. And so like when you, and
[00:19:32]  so when you see stuff that like scales up, um, it's just like this kind of added cut death by thousand cuts. I actually think the benefit of solid is the
[00:19:41]  architectural benefit of, of isolating change using fine grain reactivity rather than doing these component re-renders. So my gut feeling is subtly. Yes. But not like
[00:19:52]  drastically. So I like, I think, I think you would like, you would notice things are like, like very subtly feel a bit better, but not like
[00:20:02]  something where you're just like, not hugely, I'm sure it'll benchmark better, but it's like, this is one of those things where like they replaced react with
[00:20:11]  Inferno. And because even though Inferno was like way faster, like Facebook, they're doing tests and they're like, okay, the boot up's faster
[00:20:18]  memory usage, all this, they weren't getting like big performance wins. And it's because most of their stuff was trapped in like use memo type hooks, like processing
[00:20:26]  in the body of the component. And like, even if you made the renderer faster, it was the end user code that was wearing them down. You might be like
[00:20:33] , okay, well then in that case, end user codes and our end developer codes and developer code, you're stuck. But I do wonder how much architectural consideration they're
[00:20:41]  like, for example, react started using thinking about fiber and time slicing to kind of go like, how do we take this all this like kind of dev junk and organize
[00:20:49]  it so we can like keep the performance good for everyone, even as we get like more and more of it. But I mean, another way of doing like fine grain is
[00:20:56]  another way of slicing things up. So it might, yes, I think you would actually know, notice the performance benefit if you use solid in this sort of situation.
[00:21:06]  All right. All right. There's just so many people in chat. Thank you very much. Yeah, I'm looking forward to that blog post. Thank you. More
[00:21:27]  examples, I mean, honestly, stuff around routing and, and authentication are the ones and data fetching. like all the classic stuff. That's the only thing solid
[00:21:33]  start actually ships, the rest of it is just like solid. Yeah, yeah, I do this a lot, actually. I did the vanilla JS implementation. I did.
[00:21:50]  I've updated a lot of these different implementation time. I was one who had a Svelte 3. I was one who added React hooks. I added, I
[00:21:59]  added, um, uh, what else did I do? I, I tried to add Preact signals. I didn't actually make the PR for quick. I made
[00:22:13]  a version of it, but then it, it didn't, uh, before I made the PR, I actually went to the team was like, Hey, you guys probably
[00:22:20]  look at the performance here. And then, um, uh, when they did the beta release, my version no longer worked. So to be clear, um, I don
[00:22:27] 't always just go like straight there because I usually talk to the teams before I do that. But, uh, uh, uh, Alpine, I did the Al
[00:22:36] pine one. Um, I did all my, my libraries up here, you know, view Rx, uh, solid Rx, or ko JSX, mobX
[00:22:46]  JSX, view, like all, all, all, all, all those libraries that I wrote using DOM expressions. Um, yeah, I, I, I've
[00:22:53]  probably done like 12 or 15 of the implementations in here. Um, yeah, this is a complicated topic. I hope to, we'll, we'll, we
[00:23:08] 'll address this a little bit later on. Yes. Very supportive wife and two kids. What do you think would boost up? Do you think it's definitely, it
[00:23:23] 's a developer experience. I think like, like, I didn't understand it until I saw the quick guys do a poll and be like, if, you know, forgetting
[00:23:32]  all this resumability stuff, I think it was Manu. He was just like, what DX would you ideally want out of every framework you can think of? And
[00:23:39]  it was like, I mean, with that audience, the quick audience, it was overwhelmingly solid. Like Svelte was up there too. But it was like,
[00:23:47]  literally like, like, it was just like solid, solid, solid, solid, solid. I was just like, wow. Um, and, you know, when I
[00:23:53]  go around and talk to people and show people solid, um, it's the DX wins that seem to actually get people. It's like the, it's, it's
[00:24:02] , it's, it's DX in a way that people finally, they feel like they can understand what's going on. Like they could have built it themselves. Uh,
[00:24:14]  Oh, is it released now already? Uh, uh, let me, let me see here. Yeah. We got some first time chatters in the thing. Did
[00:24:24]  I miss any subs while I was going on my rant? Yeah. Emo por Emilio and, uh, Ed Burton, Burton X. Thank you so much for your
[00:24:33]  subs. Um, I hope I didn't miss anyone. Oh yeah. Uh, that one bra. Thank you. Thank you very much. Uh, and, uh
[00:24:42] , Davyco. Yeah. So awesome stuff. Yeah. Let's, yeah. Thank you for sharing that in the chat, AJ. Um, I'm going to
[00:24:50] , uh, see if I can pull this over for a second. I don't know if we want to dig too much into this article right now, but, oh,
[00:24:58]  nice. Look at this. The table of contents. Um, I, I know that I'm going to be into a very thorough, thorough, thorough, thorough,
[00:25:06]  thorough thing. Um, yeah, this is the JS framework benchmark. It looks like, um, yeah. Yeah. This, this, this, this looks like if you
[00:25:21]  want to read like the history and the, uh, this is very thorough. I'm, I'm, these are the kind of articles that I appreciate a lot. Cause
[00:25:27]  I know they take a lot of time to get all the details. Right. And then like people can learn a lot. I'm, I'm much better at like white
[00:25:32] boarding. I'm, I'm much better at like whiteboarding, like the theoretical stuff. This seems like, Oh, this is great. And examples and how to
[00:25:40]  use them. Oh, I'm going to have to look at this in more detail, how to deploy it. Oh, wow. Okay. This is, this is
[00:25:49] , this is amazing. I'm, I want to like almost go on Twitter and start tweeting stuff on this right now, but I, maybe, maybe a bit later.
[00:25:57]  Let's, let's, I'm going to actually send this through the stream yard chat. So those on YouTube, um, who didn't see it? Cause I think
[00:26:03]  the Twitch stuff doesn't feed back through YouTube. Now you guys can, you can see it as well. Yeah. Yeah. Here you go. Yeah. We'll,
[00:26:10]  we'll definitely be, uh, pushing that one in a bit. Yeah. And why are solid states named signals? I, yeah, I, I needed to really
[00:26:23]  differentiate because like, they aren't a value. They are a thing that holds a value that changes through time. Um, it honestly, they could have been like, whatever
[00:26:33] . They could have been like observable, but the problem is observable. It was already taken by RxJS. And I just needed like a couple points
[00:26:38]  of thing. Um, they were called signals in the library called SJS, which is big influence a solid. And they were also called signals in Elm early days.
[00:26:47]  And I was just like, okay, yeah, I'm, I'm going to pick that name. And honestly, like it's a little bit arbitrary, but now it
[00:26:53] 's become the de facto name. So I guess you're stuck with it. You know, I mean, that's the kind of thing. Um, uh, but yes
[00:27:00] , I did not invent signals. Um, but sure in the hell use them a lot. Yeah. Yeah. Yeah. Okay. Um, anyway, uh, yeah
[00:27:12] , I mean, this is going to be a loose stream of, of, of stuff anyway. So like, uh, we're, we'll just keep this rolling like
[00:27:20]  this, right? If I see good stuff in chat that fits from where I'm going, we're going to keep doing. So keep on shooting it. Oh,
[00:27:30]  sorry. DX is the reason why I don't see most bundle of stuff. Yeah. Well, the thing is there's stuff like Dino where they're kind of like
[00:27:36]  pretending like TypeScript isn't a build step. Um, but it's also like, um, there's so many things code splitting. Like, I don't want to
[00:27:47]  get into like a me versus Brian LaRue, uh, conversation, but like, there's just like every bit of the tooling is working for you. It's,
[00:27:54]  it's, it's a good, it's a good thing. Yeah. The hardest thing for us is drawing lines here. Um, because like the stuff that we
[00:28:04] 're using, it just really buggy, but it's like all there. So like, we could just like fill that out and be like RC and release it. But
[00:28:10]  then like we're spending a bunch of time, like maybe too much time, um, in the new islands type, uh, server component realm. And the stuff there
[00:28:19]  is just mind blowing and you start using it and you're just like, man, this is so good. Like, is this the product? Like, I mean, you
[00:28:27]  can, you can kind of have both, but then like when you go down that lane, you're circling like literally, can this just do everything and cover the whole
[00:28:35]  spectrum? But we'll talk about the spectrum in a minute. But I, I, my, I did, I need the push beta. So we definitely drew a
[00:28:41]  line. Um, whether that's the same line that we draw all the way to the final releases to be questioned. Cause like, look, solid start today, the beta
[00:28:48]  stuff, the stuff that we're focusing on, the main thread, all the stuff that we've committed, the docs, all that stuff will build you some of the best
[00:28:54]  apps you have today. It's like best parts of spell kit and remix together with solids performance. Like it's a powerful combination, but like, you know, when
[00:29:01]  you're that guy and you're just like, you know what, like we can do crazy more stuff. And that's kind of where I'm, I've been at
[00:29:08]  recently. So, yeah, I mean, uh, right now, like the APIs we have are actually pretty stable. Like I'm like, it's just a matter of
[00:29:19]  like the bugs, like, like, like for, like for that experience, I feel like we've like nailed it pretty good. Um, yeah, I mean,
[00:29:29]  there's a lot of stuff we can do better in those kinds of zones. Yeah. Ryan rediscovering servers. Sorry. This comment just made me laugh. Okay.
[00:29:49]  All right. Where were you? Yeah. Yeah. I mean, if you find time, just do, do what you can. Um, anyway, uh, yeah
[00:29:58] , this guy, I've been hanging around a lot with this guy. Cause he's been, he's been, uh, he's been at the same conference as me
[00:30:06] , but anyways, let's, let's get to it. Last time we were here, uh, we were talking about, we made a preact, uh, like
[00:30:12] , uh, solid version, like preact. And it was, it performed actually pretty good. Um, it was basically right up there with solid in terms of performance
[00:30:20] . So preact signal implementation is actually quite impressive. And, uh, Milo, I know has been working on even crazier stuff on the solid core team in terms
[00:30:28]  of reactivity for our next version. Um, but yeah, for like a benchmark like that, I was very impressed with preact. Um, We also spent a
[00:30:35]  lot of time talking about, um, you know, next conf and whatnot, uh, last time and talking about the, the kind of tension that was like along the whole
[00:30:45]  spectrum, you know, uh, like, I don't even know. Do I have, I probably, if I pull up Excalibur right now, we
[00:30:51] 'll like actually see the, the, the, the thing from last time where we were talking about like how, even if it's like not intentional, there's this like
[00:30:59]  sort of alliance of things, which puts us kind of in this interesting spot. And I kept on telling people, I was like, you know, look at next conf,
[00:31:08]  see what's up with server components, keep an eye on remix, keep an eye on hydrogen. Like little did we know going back, I mean, this is old
[00:31:18]  news now for, for, for everyone that like literally like the next, the next day, like, or like not next day, like, like the weekend's over,
[00:31:27]  come back Monday. And, uh, so this is where we are like a month ago, essentially, um, like absolute bomb drops that remix, uh, uh, and
[00:31:36]  Shopify, which is old news to everyone right now. Right. Like I'm, I'm just catching up, but I didn't get to say, um, so much
[00:31:44] . Right. Cause like people are like, Oh yeah. Why does next comp feel like it's like it, like it happened like a year ago, you know?
[00:31:51]  Yeah. I mean, because react 18 came out last March. No. Um, um, okay. Okay. I mean, maybe, maybe honestly, yeah, it seems
[00:32:09]  suspect. I mean, I, I, I, I had no idea that Shopify would, is trying to like put high, would be trying to put hydrogen and remix
[00:32:21]  together. Um, that, that, that I had no absolute, I, no idea about. Um, but yeah, I, I don't know. It's
[00:32:34] , I, I, I think, and you have to understand the reason that I was like looking at next comp is because conceptually I was thinking, I was thinking that
[00:32:44]  like, um, how should I put it? Um, I was thinking that, um, server component announcement has to happen. Like it's time to move on
[00:33:02] , but there's been no, anything from the community or whatever, like there's been no talk about like how this actually looks like until that RFC came out. And
[00:33:10]  when that RFC came up in my head, I was like, Oh wow, this just happened. This is way too close to next comp. There's no way this
[00:33:15]  could possibly be released in time. Like that was where my thinking was. Like there'd have to be like some kind of like time period between like the idea and like
[00:33:22]  actually implementing it. Um, and so that's why I was like very interested. Cause I was like, are we going to like, like, like, like, are
[00:33:32]  we going to see some different version and then they're going to work towards the RFC or like, or are they going to do what they do and just like go all
[00:33:41]  in on the RFC. Um, presumably cause they knew the RFC was coming and then like, essentially just like in the background, build the stuff to the R
[00:33:48] FC that no one else is aware of. And then just be like, release the RFC and next to the same time and just like wing it, which is what happened
[00:33:54] , which is, you know, that's an interesting thing when you consider like how the ecosystem plays in. That's, that's basically why I want to kind of look
[00:34:01]  at it. So like, I think this is a very interesting topic in general. Um, because like, to be fair, they did not say that they're dropping
[00:34:18]  server components completely, but I, like my first thoughts here was like every indication of benchmark I've seen is that e-commerce perspective reacts to the components outperform Remix
[00:34:28] . And this is something I'll stand behind. You guys, you guys are on stream, you know, you're all on stream with me when we were benchmarking this
[00:34:34]  stuff. Like Hydrogen was pretty sweet. Like, like, like the server components, I saw the savings, the hydration costs, like it, it did fix,
[00:34:47]  at least on my simple demos, it was very clear that it fixed the performance issue in e-commerce to a degree that like, I guess it depends on the site size
[00:34:59] . I was doing like really small sites, but like on the lower end, like React could easily fit in there. You know, you just spend your whole JavaScript budget
[00:35:08]  on React and then just be like, you know, we're okay. The page is mostly static, but like, we're okay. Whereas like React today, like you
[00:35:15]  could not do that. So like seeing Remix going there, I was just like, no, like, this is good, but more is happening, right? And
[00:35:22]  obviously, you know, the pre-act thing that I talked about before you saw, they were all being all buddy-buddy. Like, you talk about me maybe
[00:35:28] , you know, having, you know, being suspect, but like, seriously, they were sharing, like, we found, like, they're sharing stuff in public,
[00:35:35]  essentially, like, like on Twitter, if you kind of read between the lines. That's what I was looking at. I was like, yay, what's going on
[00:35:42] ? You know, these guys are really working close together. So this is kind of like an interesting, you know, alliance. And I think the potential there is huge
[00:35:51]  now that you have like, like, there's this question, right? And this is mentioned, I didn't realize the shop, I wasn't sure Remix and Hyd
[00:35:58] rogen, like how that fits together. And I'm sure everyone knows how that fits together yet. Because like, are we talking about like a Remix server component feature?
[00:36:05]  Are we talking about screw server components and do everything in pre-act? I don't know. But I think, I think there's this interesting place where we're
[00:36:13]  at kind of a fork in the road, essentially, like trying to, like, if we think about like, what can be done here? Yeah, I mean, this
[00:36:21]  is super interesting in terms of like, you know, what's going to go on here? Well, I would think so. But like, because of the struggles,
[00:36:32]  you know, the teams have had, and people were kind of like, passive aggressively vocal about, you know, how to work with the React team and stuff. It's
[00:36:41]  because everyone has their own needs, their own vision of stuff. And I think like, what happened is that my gut, when I saw Hydrogen, I'm like,
[00:36:47]  this is the 2020 React Conf demo, and someone just ran with it. But me on the React team at the same time was like, we have so many ideas how
[00:36:54]  we want to do this. And as I mentioned before, and this was reaffirmed when I met Dan Abramoff in London, was it last week? Like
[00:37:01] , they really had a vision on this all along, you know, Seb's vision, and they wanted to implement it. And it just happened that Seb works for V
[00:37:11] ercel, and then they were the ones who were willing to do it. And the other people were skeptical, you know, after so many years of waiting and, you
[00:37:18]  know, API changes and not wanting to invest in it until seeing it happen. So like, from that perspective, I can see how we got here. But like, I
[00:37:26]  don't know, like, maybe Preact tries their own hand at other performance optimizations in the partial hydration world or something like server points. You already saw, do
[00:37:37]  it with solid, but you know, like, I don't know. There might be a range there. Maybe it's not the right model. I think people are really
[00:37:47]  skeptical about server components right now in a way that I, I think it's good maybe from an implementation standpoint. But I'm not actually sure, like, it's the
[00:37:55] , like, we should just, like, write them off at this point. I, I, can someone help this, like, what are the chances we don't
[00:38:10]  have this library? I think people underestimate our ecosystem. Like, I, I don't know what this library is, but I'm, I'm given like nine out of
[00:38:18]  10 that we already have someone ported something similar to this. Right? We have like 15 form libraries. Yeah. I'm not familiar with, with, with like
[00:38:35]  that particular one. But yeah, there, there, there is, there is a lot of them. Okay. So this is a particularly good one. So maybe,
[00:38:47]  you know, people can look at that and see, like, I, I just, I don't know about this one particularly, but the, the, you know,
[00:38:54]  this is a lot of the conversation, but yeah, in any case, um, a lot of people had interesting thoughts and responses to this. Um, but I, I
[00:39:03]  think the most interesting response to me, um, was that, you know, the people talking about being good in theory and verse not was that, uh, I love Marvin
[00:39:15] . Yeah. I mean, good times ahead for Preact definitely. Um, but I, I, I think the interesting part for me is like, does this have
[00:39:24]  an impact on the react ecosystem as a whole and where we're sitting? Cause this was, um, a conversation that I did have with Dan and you can kind of get
[00:39:34]  there. Cause like if react server components are a packageable piece, and if you think about the UI for it or the API for it being like writing use client into things
[00:39:46] . Which is not a heavy lift, but we're, we're actually kind of going into libraries and going, okay, where do we put the use client? You
[00:39:52]  know? And like, how do we make this compatible? We're actually migrating stuff essentially. And if half the ecosystem migrates and the other half is like,
[00:40:00]  I'm using remix and using patterns and building towards that and not building towards serving components, you, it would be like even more of a split than if half the people stayed
[00:40:10]  on class components versus hook components. Like, and as I said, I've been using the word fork cause Dan used the word fork. Cause like, that's really
[00:40:22]  where like, even if someone doesn't physically fork it, um, like you're kind of wondering like if you're, if you're in a zone where like it kind
[00:40:29]  of is a fork because people are building towards one architecture instead of the other architecture. I think react's big enough to support multiple architectures, but it's interesting when
[00:40:40]  like server components feel, and this could be the wrong impression. Like they're kind of like trying to, they, because of the change that has to happen in react
[00:40:48] , like it's a, almost like a new framework wrapping an old framework. They, they need to kind of like entrench their, I don't know, I'm
[00:40:56] , I keep on getting like tentacle illusions in my head. Like, like, like, like they're kind of like trying to like get the, get them in there
[00:41:03]  and like hook it around so that they can like hold the whole thing together. Like it's some giant, like Kraken or something. But like, uh, that
[00:41:10] 's where I wonder if the tension is, um, sorry, that's, that's a weird illusion. I'm just, I'm, I'm just, I'm
[00:41:19]  just kind of like, like, there is a real concern there, right? Um, because yeah, as I said, I was sitting there with Dan and he was like
[00:41:26] , you know, we wanted this out so long. Like, even if the release was like a little bit of a, you know, you know, it didn't come
[00:41:33]  off like, you know, like the hooks release. Like, you know, now the people who care about the stuff are, are looking into it, you know,
[00:41:41]  who have like a niche, you know, set of people who really want to develop it out, you know, in public. And I'm like, yeah, no,
[00:41:46]  that's a hundred percent what you needed. Right. Cause like now people can, you know, can slowly build them a momentum and get excited about it. Like, this
[00:41:52]  is a big enough change that maybe everyone coming along was never going to be a reality. Right. So I definitely think that it's, uh, it's interesting.
[00:42:03]  Um, so like, I, there is a sense that like, it's not Vercel calling the shots, but more that like the react team would love you to
[00:42:18]  build stuff in the way that they envision. And like, there's just enough, like their, the opinions have gone to a high enough layer that now we're kind
[00:42:28]  of like having other people who are also are deeply invested in react ecosystem. People like the remix guys who've been doing react since 2013 or 14 or whatever, and who
[00:42:37]  are also like, you know, we have the most popular routing. Everyone like knows how to build their, their apps this way. In a sense, routing is the framework
[00:42:47] , you know, and you know, we, we built the most popular react framework in a sense. If you can, you know, look at react router. I
[00:42:54]  mean, next could probably compete for that, but like, in a sense, like we, we, we have two higher, higher level views kind of going up against each
[00:43:01]  other. And, um, yeah, I don't know. I don't, I, I wasn't as worried about the fork thing, but I, it seems that
[00:43:08]  like people, other people are. So maybe that's something we should pay attention to. All right. So yeah. Yeah. How are we doing chat? You feel a
[00:43:22]  little quick drink? Mm. Oh, I see. Hey, Dev. I hope I pronounced that right. It was great meeting you in person at, at Jamst
[00:43:35] ack Conf. Um. Yeah. So yeah, I mean, this is, this is, this is a, this is a, this is a big one. I think
[00:43:50]  this is definitely a wait and see kind of thing. Um, next is going to continue on their path. So this is like, where does remix Shopify, you know
[00:44:01] , preact all fit into this? We don't know yet. Um, so let's, you know, let's move on from that for a moment. Um
[00:44:09] , where, where are we here? We should have called one kilobyte JavaScript frameworks. Yeah. I mean, do, do, do, do we want to
[00:44:19]  talk about zero kilobyte JavaScript? You know, we'll leave that a little bit later for when we talk about quick, but I want, because like the, to
[00:44:27]  be fair, quick is also one kilobyte JavaScript framework. The, the zero kilobyte thing is a little bit over blown because like in practice, like nothing is
[00:44:35]  really zero kilobytes unless it's static. And at which point, like, why are we talking about it? But the, the reason I brought this up is
[00:44:42]  because the, uh, my, my response to this, because I was like, honestly, I'd settle for anything that less than 10 kilobytes in the app with
[00:44:51]  the interactivity. I wouldn't be critical of anyone who didn't lazy load the framework if it was small and all they needed, because most things, there's interaction
[00:44:57]  with it. Yeah. I mean, like everyone can make a zero kilobyte framework. You, you just like remove the script tag. So like, I, I
[00:45:06]  think we need to work on our marketing. Um, similarly, like, yeah, I do want to talk about this a little bit because it's related to, um,
[00:45:18]  the server components discussion we just had. Um, and, and this was related with what Dan said. I don't know about you, but a lot of people basically
[00:45:28]  went and tried server components when they came out and they're just like, why is my next bundle bigger? And there was no, like, I forget, I've turned
[00:45:35]  around when the conference was 25th or 26th or something. No one knew for five days until Dan made this tweet essentially. Cause like, I was kind of joking with
[00:45:45]  him. I was like, seriously, man, it's so unfortunate because like, you guys could have like, like, like, I don't know, like V
[00:45:52] ercel could, would next could have shipped like a broken demo. Like it could have like not worked, like clicked and nothing happened. But as long as someone went to
[00:45:58]  the network tab and saw less JavaScript, they would have been like, yeah, you know, server components or something. Because like this, it did the demo or like the
[00:46:05]  doing the fresh install that the only thing that this was not allowed to do, which was put more JavaScript on the page. Um, so, um, it's good
[00:46:14]  to know that this was a bug and that even the, the, the current version at the time still didn't have a bug. I want, I want to look at
[00:46:21] , uh, next 13, maybe next stream or something. And we actually play with it and see where it landed. Cause I'm a, as I said, I'm
[00:46:26]  a big fan of server components. Unfortunately, out of all my content, server component content seems to do the worst. But like, um, you know, I'm
[00:46:33]  into it and I'm glad that Dan was just like, Hey, there was a bug, but like, it would have been nice for like, cause like I had people
[00:46:41]  for days, like telling me stuff and I kept on, had to be like benefited out. Cause I saw hydrogen and stuff and I was like, no, no, server
[00:46:46]  components are good, you know? And they're like, why, when I load next, is this thing giant and blah, blah, blah. And I'm like,
[00:46:51]  uh, I don't know. Maybe there's some next specific stuff. Uh, is there a bug in your code? Are you, you're using it right? Like
[00:46:57]  I, I, I kept on like doing that and people like, no Ryan, take a look at it. And I'm like, uh, I'm too busy
[00:47:01] . I don't have time. And then, you know, like five days later, it's like, oh, okay. There was a bug there. So it was
[00:47:07]  like, sorry to anyone that I kind of pushed off and just gave server components the benefit of the doubt. I'm very, uh, bullish on the technology. Uh,
[00:47:14]  it's just like, yeah, sometimes implementations don't land where they are. And I, I do apologize if I, if, if I was like too positive towards
[00:47:23]  server components after the next release, when in reality, like it w it was kind of a blunder. Um, yeah, when I can hire them, I don
[00:47:42] 't know. Um, at one point at, you know, I, I was like, I was like, you know, solids kind of gaining steam, Theo's gaining
[00:47:52]  steam. Like, I don't think I can afford Theo now. Um, but yeah, anyway. Yeah. This is, this is the challenge of open source.
[00:48:08]  And like, I mean, like to be fair, um, I'm, I'm now hired by Netlify. So I have like a, you know,
[00:48:14]  a little bit more leeway, but like, uh, as we talked about last stream, this is nothing like what next has behind them or, you know, we,
[00:48:20]  we, we, we try and raise money in our way. Um, we're, we're looking at stuff like the Google Aurora project, be able to fund fellowships
[00:48:26]  and getting more people, you know, and working on docs and like getting things done. But you, you know what I mean? Like this until recently, this was
[00:48:32]  literally like, thank you, uh, open collective. Yeah. Netlify could, we could, we could see what we can do now. We're talking about money
[00:48:45] . Yeah. Yeah. Currently it's just me, but there have been conversations, but then, you know, what, what happened with the economy, things that kind of
[00:48:56]  slowed down right now. So, um, figuring stuff out into the new year. Um, yeah, no, Lee, Lee is great. Um, uh, yeah
[00:49:08] , yeah. Hiring freezes ever. I mean, this is, this is a, this is a real thing, you know, and, you know, and a
[00:49:16]  lot of people even laid off. So, um, I'm not be cavalier about that. This is a, this is a tricky time for everyone. No,
[00:49:28]  like I got the, like the rich Harris deal, like, which is kind of sweet, which also makes me feel like I'm like the most expendable person in a
[00:49:34]  sense. So I love what Netlify is doing and I love, you know, showing what we can build out there. Um, mostly like R and D type demos
[00:49:40]  type stuff. Like, like, it's not like we're building product products for Netlify with solid. Like I'm just working on solid, solid start getting out
[00:49:47]  there in the community and giving talks, uh, being a good representative. And then like sometimes, you know, new edge functions come out and we're like, Oh,
[00:49:53]  let's try this caching thing. Oh, let's like roll it up with solid. It's that kind of stuff right now. It's just like getting an
[00:49:58]  idea of what we can do with edge so that we can both promote, uh, proactive stuff at Netlify in terms of doing edge computing. And, you know,
[00:50:04]  also, you know, they get kind of an ear of like what the frameworks are doing. Cause like, you know, I'm, I'm always benchmarking and playing
[00:50:10]  with stuff. Um, money is the best JavaScript framework. I'm just going to put this up there cause, cause probably deserves, deserves this anyway. Um, yeah
[00:50:30] , I mean, someone's talking about the speed that the react beta docs are this, it's hard to do like that full, like it's incredible lift. And
[00:50:39]  this is what Dan's been working on. Um, I think mostly solo recently, because like, I mean, that's a whole other topic, but, and I,
[00:50:47]  I did get that. Can I ask Dan this a little bit? Cause I'm like, man, I see what's going on. Like, can you confirm this for
[00:50:54]  me? Like, I see what's going on. He's not, the reason that it takes it, Dan Abramoff to write the react beta docs is not cause
[00:51:02]  it's like, it's complicated. Like he's a, he's naturally gifted at taking complicated stuff and explaining it in a simple way. It's because he knows
[00:51:08]  where react's heading and it's, it's easier cause it's not even about explaining where react is today in the docs. If they are in the process of kind of
[00:51:16]  shifting their mental model, moving towards the compiler server components, he has to kind of like write docs that he thinks would be valuable, like two years out and no one else
[00:51:26]  is going to be able to do that. Like he, he, he needs to write for a beginner for something that, you know, and like leave space, you
[00:51:34]  know, for things like he knows that are coming to kind of fit in this narrative that he can stitch together for something that doesn't even exist yet. So yeah, I
[00:51:40]  mean that, that is why Dan is the man. Yeah. Do I like Dino? Um, yeah, uh, I, I, I, I like the
[00:51:55]  Dino, like no build thing has been useless for me, you know, but like Dino deploy has been great. Um, and like, I, I, I
[00:52:04]  think they're doing a lot of good stuff in terms of performance and looking at like how we can, I told you, I need to work closely with infrastructure engineers to get
[00:52:12]  the next performance unlock. Oh, like there's a reason besides great company, why I was hanging out with Luca, like a ton when I was in London, um
[00:52:21] , from, from Dino and fresh. Uh, all right. How are we going? People talking about Dan feedback. Yeah. Yeah. They are, they are great
[00:52:39] . we are, our, our beta docs, the fact that they're called beta docs are actually very much influenced, uh, by the react docs and, um,
[00:52:49]  the, um, it's Shogun username, um, Michael or he, he's been great picking up the slack and, and for the last couple of months,
[00:52:57]  actually moving them forward after, uh, Dan's been getting busier with stuff on Astro. So awesome work. No, uh, Dino deploy for Netlify
[00:53:07]  Edge. Um, yeah, no, I mean every part of it, and we, we've been doing a lot of the same kind of structuring and stuff,
[00:53:19]  uh, you know, and making it so that you can like develop her journey it a little bit too. I mean, I haven't, I haven't, maybe I
[00:53:25]  haven't highlighted this enough. Um, but then like, this is our like beta docs and it's like, oh, do you prefer JavaScript or TypeScript? Are you
[00:53:32]  a view developer? And like making these kinds of decisions actually affects like, I know that's like not working right now. Maybe I don't know like what content we
[00:53:41]  show you and tailor the journey. There's tutorials getting like, these are way better than anything I've ever written. My docs kind of suck here. They're like academic
[00:53:51]  papers that got converted into documentation. The work being done here is, you know, using diet axis model and stuff. It's just amazing. Yeah. But what about bun
[00:54:02] ? Jared is a madman. I love bun and I love what Jared is doing. And like, he's one of those guys that you just don't, don
[00:54:08] 't bet against because he's like that crazy. He'll just, you know, he'll, he'll, he'll get it done. Thank you. I appreciate
[00:54:22]  that. Yeah. I mean, there's so much, the docs topic is huge. When I, when I was in the Jamstack conf panel, that, that
[00:54:35]  was, that was like a big thing. Right. So like, yeah, I mean, I want to, I want to talk about this for a moment because I
[00:54:47] , you know, we're kind of getting a little further along, but I, I needed to write this post and it's actually one of my most popular posts that I
[00:54:55]  didn't like do a tech demo in. Um, I asked, is anyone else feeling the weight of all the future JavaScript technology discussion? It feels like a lot. It
[00:55:02]  is because it is a lot. There's a lot of cool stuff going on right now. We need to take some time for this all to sink in. Um,
[00:55:06]  if, if you got, if no one knows why I wrote this, I mean, it's a bit of a sub tweet. I just needed everyone to shut up.
[00:55:14]  Um, I, I, I, I don't know if, if people were, were like getting it, but the discussions had gone to a point on Twitter after next
[00:55:25]  conf that like, like, I think the general people sitting around it, like who aren't like right in it, were just like, I don't get what's going
[00:55:35]  on, but why is everyone so heated and like, like, like it was just like loud noises, you know, like, and maybe that's just like a bad
[00:55:41]  read on my part, but that, that's what it felt like to me. And, uh, I mean, I loved technical discussions, but I wanted everyone to like
[00:55:50]  step back and take a breather. Like, especially when you think about stuff, like, I think there was a tweet, probably what inspired this was, uh,
[00:55:57]  Guillermo, um, tweeted something about astro and next performance being like very similar and this page or something. And like, it doesn't even matter what the reality
[00:56:06]  of that is too much. Um, but it was like people getting way too invested in like defending next, um, or something, you know, when like, like,
[00:56:15]  like for self strategically is a deployment platform, which services everyone. So you're kind of like, like, why is this happening? And then like people are like,
[00:56:24]  like, it would just, it was very, like, we got in a really ugly place for about a week and it was like framework wars all over again. And
[00:56:33]  it was just like, I don't mind competition, but it was just like, I started wondering, like, what's everyone's investment in this competition? Why is everyone
[00:56:41]  like doing this? Like, if you step back, you do kind of go like, you know, it's all, this is, this is all good. Um,
[00:56:47]  and, uh, yeah, I, I, I felt that we just, it just needed to be like, stop, just stop. You know, people are going to
[00:56:58]  say stuff that they regret. And like, we, we need to just kind of cool down here, especially like, you know, stuff around the server components and that
[00:57:08] , like, I got it. Like, I'm glad, like the, we covered this last stream, you know, Evan did the due diligence. He was perfect gentleman
[00:57:15]  about turbo repo, found out the, the true facts, have everyone up to the benchmark, like a lot of good stuff happened or sorry, not turbo turbo pack. A
[00:57:24]  lot of good stuff happened out of the, that aftermath where people were being logical and stuff, but we, like the whole, there's like this tension that was been
[00:57:33]  building up where people have been waiting to pile on react for when they like finally released react 18. Cause when they released react 18, like it was like cricket. So it
[00:57:43]  was like, okay, I got react 18. What can I do? Um, nothing. And we, we, we let you console log everything twice. Like all
[00:57:53]  anyone ever got, got from that was like strict mode, but it had so many features like just buried beneath the surface. So people like, weren't going to be like
[00:58:02] , like, like, like there's just a bunch of like skeptic, like there's a certain amount of people like just kind of waiting, going like ready to p
[00:58:10] ounce and finally be like, okay, like, and I don't even mean in a negative way. Like people are kind of waiting for that signal. They're kind
[00:58:15]  of like, is it time to try something other than react? I have to give react the benefit of the doubt. And they're like, okay, so something's coming
[00:58:22] . Okay. I'll wait to see that something coming. Wait, see that two years later. I'll wait to see that three years. I'll wait to see that
[00:58:26] . And then they're like, okay, is it here? Not here yet soon. And they're like, okay, so is it here? Um, yeah, it
[00:58:32] 's here. It's like, okay, is this what I waited for? Like there's this like anticipation expectation for something that really is just like, just, just
[00:58:40]  kind of early days. So like, like the, you know what I mean? Like there's this like kind of heat and yeah, just, it's okay. Like
[00:58:50]  even if we're standing on a dam that's cracking and the whole water is just going to come flooding down, you know, at a certain point it's okay to just
[00:58:58]  be like, okay, this is going to happen. Deep breath. What do I do next? You know, so like that, that was all I was trying to
[00:59:08]  say here. Um, so just my kind of personal commentary, I told you I'm bullish on react server components and I, you know, but I'm always bullish on
[00:59:21]  new technology. So like, you know what I mean? Like maybe don't listen to me completely, but like, yeah, I just, it just, and there
[00:59:33] 's all these nastiest conclusions and then people getting really defensive on the other side. And it was just like, and then attacking outwards in a different way. Like
[00:59:42]  I just like, there's another one, like about like hydrogen or remix becoming like a, like we shouldn't like build stuff. Like I'm, I'm sorry,
[00:59:52]  Guillermo, a couple of those tweets that week were just really brutal and people can go find it in themselves. I don't want to talk about it anymore, but it
[01:00:01]  was just like, I, I, everyone needed to shut up so hopefully they did. Um, so I know I, I hate telling everyone to be quiet, but
[01:00:16]  like, sometimes you got to like walk in and be just like, like, you know, mom, mom and dad are fighting. Like just, just, you know
[01:00:33] , uh, so let's, uh, oh yeah. Yeah. I, I almost forgot about this. I don't know if Maple's around, but seriously, big
[01:00:43]  congrats. Astro has been like killing it. Just like picking up all the, like, like a bunch of the open source, like hot shots and just be
[01:00:52]  like, yeah, come work for us. Um, you know, um, yeah, I did an open source thing. This interview is really good. If you care about
[01:01:03]  like my backstory, if you've been watching my stream for a while, you're probably familiar with it, but we talk about like Canadian engineering. We talk about my
[01:01:09]  sweet, solid tattoo and punk rock, and this is like the least technical interview ever, but I still get to manage to spend like two minutes talking about how awesome Marco is
[01:01:19] . So definitely, definitely come and, uh, check this out. You know, if you, if you, if that's your thing. Okay. Talking, uh,
[01:01:35]  yeah, thank you. AJ, I appreciate that. Yeah. Yeah. Okay. Talking, talking a bit about, you know, being a gentleman on benchmarks and stuff
[01:01:48] . Um, Evan, you has finally decided to check out what resumability it's all about. Someone asked me earlier if like, um, if you know what my
[01:01:57]  thoughts were on the resumability and yeah, I mean, of course I think there's viability there. Like, I don't know if everyone here knows it.
[01:02:07]  Quick and Marco team independently came to resumability without even talking to each other, really realizing each other existed. I have quick, obviously delivered it right away. And
[01:02:18]  that's, you know, they're going to be known, you know, because they, they did so. And the, if you go down Mishko's trail
[01:02:25] , it's far further back in history. He has some internal framework whiz from Google that he can cite in terms of like where he got the inspiration and he gave
[01:02:34]  a talk in 2019 and this is all like the talk in 2019 was publicly available. So like someone could have like been inspired by that or figured that out. But I
[01:02:41] 'm not going to lie, I've, I've never paid attention to Angular. So, um, like, like I kind of regret it now. Cause that, that
[01:02:49]  talk would have been a gem to really influence future thinking, especially cause I was literally working in that space with Marco the last few years. Um, but like, I,
[01:02:57]  I, like, I didn't think Angular was where we were going to find SSR truths. Um, just like, like, like I, I, I don
[01:03:06] 't even think they have hydration. So like, yeah, I mean like the, like actually, I actually, let's look here. Taste movies. I actually think this
[01:03:22]  is, yeah. Did you see that? Let's do it again. Oh, it's so fast this time, but the page white flickers because Angular server renders
[01:03:31]  it. And then re-renders it completely in the client. Um, like they don't actually hydrate. It was funny cause I was on Twitter a while
[01:03:39]  ago and someone was like, oh, uh, you know, I don't like client side SSR and all this stuff, you know, use MPAs cause you
[01:03:47]  don't get that stupid white flicker. I'm like white flicker. No, one's had that white flicker in like five, six years. Like what,
[01:03:54]  what crazy framework are you using? Then I was at ng comp Poland last, uh, like a three weeks ago, you know, because I was talking at JS Poland
[01:04:03]  with, and I watched some talks and the Angular team did like a discussion court thing. And I was like, oh, I see Angular. That's the framework that hasn
[01:04:11] 't done SSR. Um, so, uh, I, I was not expecting resumability to, to come from here. Um, I know this seems like a
[01:04:20]  big dig on Angular. They have like way more other concerns that were important. And I think they're finally got past it. They're working on that Ivy compiler.
[01:04:28]  And now like, they're like, oh, let's look at signals. Let's look at, you know, let's look at SSR again. But you know
[01:04:35] , like, I just wanted to kind of like, in my defense, why I wasn't paying any attention to the Angular or why the Marco team was not paying any attention
[01:04:43]  to Angular. Um, we, we, I've, I've written, I love writing in public as we get new ideas and like doing streams and stuff, because
[01:04:51]  you can trace it back. You'll see that, um, the ideas of resumability actually published in a Dev2 article, um, several months before Quick was even
[01:04:59]  announced. Uh, it just, we didn't have a name for it. Uh, I think, I think the article is called like what the Marco team has been doing
[01:05:06]  all these years or something, what is it, um, what is it, let's see if I can find it, what, oh, I will, yeah,
[01:05:24]  I guess this was, yeah, this was like right before, it was like June, but I tell a story about something that happened in March of the year, but anyway
[01:05:34] , um, if you're interested in some Marco history, not sure you all are, but you know, I'm just gonna post in chat anyway. But anyways,
[01:05:42]  um, my point is there is technical reason to look at resumability. Um, Marco's approach is very different. It doesn't have any of that like crazy,
[01:05:52]  I shouldn't say crazy, like that really granular bundle splitting, lazy loading. That's a quick thing. We came to resumability, a different path using compilation and
[01:06:02]  fine grain reactivity. But my, my point is that there, from a pure technical standpoint, I don't know how that integrates into real apps and what the
[01:06:10]  real world implication is of it. There is like, from a, like, you can see the benefits from like a, like it's very technical, like obvious benefits.
[01:06:18]  And what I love about this thread is what quick was doing until November 4th was basically the, and you saw this when I was running my benchmarks on quick and whatnot was
[01:06:30]  basically hydration. Like it was resumable, but it was like eagerly resuming all the like data structure when it consumed it in from the HTML. So in
[01:06:40]  a sense, like they were like, uh, they were, they were doing like a form of hydration. Uh, like it's not like hydration in the typical run the
[01:06:47]  component sense, but it was like, uh, create all the signals sense, like, like instantiate all the, like the reactivity and, and whatnot. So
[01:06:57]  Manu's like, well, we don't actually need to do that. So thanks to Evan's prodding, he actually managed to make quicks hydration or not hydration
[01:07:05] , whatever you want to call it, 14 times faster. Um, so like that's, that's, that's pretty impressive, right? Um, like maybe now we
[01:07:14]  can have some better numbers to compare the impact of here. Like, it's still unclear. Like, this is a stupid demo. This is like, there's something
[01:07:20]  like, I don't know, 200,000 nodes or something. Like this is just like this, a benchmark like this might actually be, sometimes I talk about like benchmarks
[01:07:28]  and range and it's good to kind of like overdo it so that you can kind of like look, project worst case. This benchmark might be so over-exagger
[01:07:35] ated that it's actually completely useless, but, um, something positive came out and I was, and I was trying to like suggest this is why benchmarks are valuable.
[01:07:43]  Cause honestly, as an author, if you can find a way to like clearly compare a couple things and go like, okay, in this micro scale, this is where I
[01:07:50] 'm losing stuff. Like you find a clear bottleneck and you can fix it and it's fairly trivial. Like that's, that's a good, amazing feeling, right
[01:07:58] ? So yeah, I mean, this is, uh, this is, this is, this is, this is a real win. And I'm glad that it was
[01:08:10]  valuable. And I appreciate this tweet from Mishko cause he was like mad props to Evan and my, me for making benchmarks on quick dev and then privately reaching out to
[01:08:18]  Solata's fixed issue. That is how OSS is supposed to work. Thank you. Yeah. Yeah. I, this wasn't about getting gains over quick. Like
[01:08:24]  I wasn't going to like, like when I made the JS framework benchmark, I wasn't just going to like make a PR and push it up to the repo or something
[01:08:30]  like, uh, and just, you know, without talking to them or doing that, like, because like, especially with what I saw when I first ran quick through JS
[01:08:38]  framework benchmark, it was like, like, it was like blazer slow. Um, they've made drastic improvements since then. And me saying that isn't even like
[01:08:47]  a thing. Cause like they actually, if you go on the repo and look at the issue, they actually, they actually post the original like results from like when I first
[01:08:55]  ran it. So they published it. I didn't. Um, but it was very, very slow. And my understanding, I haven't seen the latest is that,
[01:09:03]  um, and it makes sense cause they're, they're a V dom plus signals. Like basically they're very similar in performance to something like preact with or pre
[01:09:10] act with signals. Um, so like that's sort of how you can view where quick is on the spectrum of performance for client updates. And, um, yeah, they
[01:09:21] 're still like finalizing it. So like, we'll see where it actually lands, but it was, it was, I very much appreciated the, the shout out
[01:09:29]  here because like the thing is if you make a benchmark and then someone goes, changes it, like you just, it's like your article is worthless. Like you, because
[01:09:36]  you're like, you, you wrote a bunch of stuff and then, or you like make a benchmark and then like, it's no longer true. Like the thing
[01:09:41]  is the truth of the matter is like these things change at such a rate that like, it's hard, you have to find the right way to frame it. Cause then
[01:09:49]  someone like, if you're not measuring the right thing or framing it the right way, like it takes like two seconds to disprove it. And it's unfortunately, no
[01:09:56] , people don't actually see the thing. Like most people see the original claim, which makes it a lot harder. Um, so like, uh, when I do
[01:10:03]  benchmarks like this, I'd rather like sit on them for like months before I actually show them if possible and try and engage the people. Sometimes they won't engage until you
[01:10:12]  actually publish. So that's on them. But like, at least that way, you know, like you're doing something at least like reasonable given a chance, cause you
[01:10:22]  really don't want to redo the work because someone's like, oh, you missed this one thing, you know? Oh yeah. Jamstack.com. Anyone
[01:10:32]  see this? Theo, Theo posted some spicy ones too. Um, the, Tanner router, which is what he was showing here. It was like literally, um, like
[01:10:49]  an eye opener. Um, like it is, it is incredible. I wish the video for Jamstack was up because it, it, it, it, you,
[01:11:01]  you know, like when a new car comes out and they do like a release video and they have a speaker and they play the video and then it's like all lock
[01:11:08]  and step. Tanner's release of Tanstack Rudder, Jamstack Conf felt like, like, like, like, like when a car company releases a new car
[01:11:16] , it was so slick and so like perfect and like every part of it. He just went seamlessly with like, like, like his talk, like it was, it
[01:11:24]  was like, it was all in the same style, like his talk and his video, like, yeah. And the music and like that, that's, that's,
[01:11:32]  that's going to be the hot talk from Jamstack Conf when it gets published. Um, uh, but yeah, I mean, I, I did jump over the
[01:11:40]  fact that I did a course for, or a workshop for front end masters in between. Um, but we'll, we'll, we'll see if it gets making
[01:11:47]  into a course and then we'll talk about it more later, but yeah, I, I, as I said, I was traveling, it was like ng-conf,
[01:11:53]  uh, you know, and then I did that. And then I came in for Jamstack and what you're seeing here a little bit is we had this crazy idea
[01:12:00]  on the first day that we could make the solid integration for Tanstack Rudder and then stick it in Astro and then like literally make a demo like that same
[01:12:09]  night before like Tanner did his talk the next day, like literally at Jamstack Conf, just whip it all together. Um, and, uh, Fred, Fred,
[01:12:16]  Fred lives close enough that he like went home, but like me and Tanner ended up like sitting down the, the later part of that evening and trying to like hack it out
[01:12:27] . Um, and we, we, we got, we got decently far and we got most of the types working, but that we had this like really awkward thing
[01:12:35]  where he had a monorepo and react wouldn't go away. Um, what, what do I mean by react wouldn't go away? Well, like, like maybe
[01:12:43]  the ES build thing, but essentially like we, we, we kept on like trying to remove react, like TypeScript and all this stuff and react just kept on like showing
[01:12:51]  up like JSX, like react kind of pollutes global namespaces and it's like, like build configs and everything, like no matter what we did, like
[01:12:59]  we'd be working on solid code in this monorepo that it's all in react and react just like kept on creeping back in. We were like, okay,
[01:13:05]  good. Okay. I got rid of the react reference here. Let's continue. And then it'd be like, bam, react says you can't do this. And
[01:13:10]  it was just like, where's the react? Like it was like playing whack-a-mole. And, uh, eventually Tanner's like, I know this will
[01:13:17]  be good. We'll get there, but I am done for tonight. You know, like, like it was, it was like, yeah, you know, um
[01:13:29] , but, uh, no, it, it, it, it was good. Um, yeah. Thanks. People have posted the Tancic router in the chat.
[01:13:38]  Um, there's a lot of revelations in that conversation. Um, because like Tanner started going, oh, okay. Like he took a very react type model.
[01:13:50]  And by the end of it, he's like, okay, yeah, this is how we do a reactive. It'll work for react as well. And that leads
[01:13:55]  more to like the second evening or whatever, like when we're all hanging out with Theo's house and all that kind of stuff. Cause we thought of some crazy, not
[01:14:03]  even that crazy ideas were just like, how easy is it to migrate solid to react? Well, for a lot of people, migrating libraries is easy. Cause you just
[01:14:11]  migrate the JSX is like 80% of it. And then like, you just change some logic. This is why we've have like, like so many react libraries.
[01:14:18]  Like people talk about our ecosystem, but I sometimes tell people just like go look because like, like it's surprising. Like here's the thing. When preact had
[01:14:27]  preact compat, no one bothered moving the libraries, moving libraries from react to Svelte is kind of tricky. You have like a whole different model moving reactions, uh
[01:14:35] , apps from solid to react, like our server react to solid. I was like surprised at how easy, especially when we did that, uh, um, what do you
[01:14:43]  call it? We, the hackathon, it was like all react projects ported and people moved like heavy lifted, like full things like MUI, like chakra, like
[01:14:51]  they like lift it. They like literally lifted full component libraries in, in like a month or so, you know, and like that, those kind of, it's
[01:15:00]  surprisingly easy, um, to, to port stuff from, uh, um, react to solid. Uh, this, you know, there's tools like mitosis, but
[01:15:11]  that's a subset of react. I actually was introduced to someone working on machine learning and they were like doing code mods. And they're like, yeah, let's
[01:15:18]  see if we can, we start talking about the startup. Like maybe we can, you know, take the code mod solid code mod project, which is actually like, there
[01:15:25]  is one out there. If you guys want to look out, people actually looking at how to code mod it and, and kind of identifying where the gaps are. They're
[01:15:32]  like, yeah, let's see if we use ML to convert react to solid. Um, so like, I think there's an interesting range there, but, um
[01:15:39] , yeah. Yeah. Um, yeah, I'm just reading a little bit on the chat here. Yeah. So yeah, essentially it was, it was a pretty
[01:15:51]  good time, um, at Jamstack comp, the food, the catering, everything was like top notch, um, which is very big juxtaposition to
[01:15:59]  what, what came, um, to the next conference I did after that. But, um, yeah, I mean, it was, it was definitely very, very
[01:16:09]  cool. Sorry. I'm just seeing. Um, so yeah, I, I don't know if there's much to say other than I thought, I thought that the
[01:16:22] , the Netlify people were really quite smart to get Theo co-tweeting or sort of co-streaming on it because they, we probably got way
[01:16:31]  more views just from him, like being in, in, in there, like compared to him coming in person, he came in person the second day, which is what I
[01:16:39]  said, led to our, our, our, uh, hangout at, at his place talking about like, you know, the future of Tanstack and solid,
[01:16:47]  but, um, that was kind of the, you know, the, the, the kind of stuff going into Jamstack comp and what was going around, going around
[01:16:56]  with it. For me personally, a lot of stuff was happening around Jamstack comp because I really, really wanted to release solid start for that. Right. Like
[01:17:04] , and I, I wanted to show off, but at the same time, I want to show off the really cool stuff we're doing and I didn't want to mud
[01:17:16] dle the release. So I actually did in reverse order. I released the, uh, the movies app demo. I think, I think everyone probably here has seen this by
[01:17:24]  this point. This is the, the demo where it's like client side routing. So like, even though this looks like a server routed page, this is actually
[01:17:32]  like, there's no, the spinner doesn't change. I can, I can make this animation faster. I actually did that on a branch just because people complain that it
[01:17:39]  looks slower than the page actually is. Cause this, this page is very, very fast. And like, if you look at the JavaScript payload for this thing, like this
[01:17:47]  is the, this is kind of like what's, oh, right. Cause I'm, I'm not in an incognito, it doesn't really matter.
[01:17:53]  It's, it's, it's like, it's like, yeah, it's funny. The thing is I haven't even deployed this again and it's like,
[01:17:59]  give me different numbers, whatever. It's, it's like 13 kilobytes. It just says it's 13.5 right now. It doesn't really matter.
[01:18:04]  But what, as you navigate around, like this doesn't change, um, because you know, the basic stuff was already loaded, except for when we go to search
[01:18:15] , when we load the search box, but this is all like, you know, uh, maybe I should actually put a real word in here. Like this is all like
[01:18:22]  server component type stuff. So you get like super fast bundles. So small bundles, so you get super fast page loading. Um, it was funny before I
[01:18:30]  even touched any images and did anything special and just like made this demo, um, we were getting like 92 on lighthouse with like, like, with like giant, like original
[01:18:39]  images for every poster. Um, this demo has some limits because it's still fairly simplistic, but it's like the starting demo where you start seeing the cost of assets and
[01:18:51]  what like optimizations matter. But, um, this is a great showcase because people could start immediately picturing, like I can get a single page app experience with the
[01:18:58]  same amount of JavaScript as using Astro. So like fast page loads, fast navigation. This demo is super hot. Uh, honestly, like, yeah, I mean,
[01:19:08]  read the article if you get a chance. Uh, I actually had to update it recently because I had quick in here, but quick change implementation, the original quick implementation was
[01:19:20]  a single page app. So it fit in, but I had to remove it because then they changed to an MPA. So if you see the newest quick version,
[01:19:26]  they, they, it's a, it's a multi-page app, kind of like Astro. Um, this is, that's why this app is kind of
[01:19:33]  so groundbreaking. Cause it's, it's the first application that I know of, like of this nature demo to show, I mean, we made some already with Hacker
[01:19:42]  News, but it's, it's the most significant one to date to show, um, how you can do, um, client side routing with partial hydration. Uh
[01:19:51] , so, you know, like this, like once we started using it, we're like, wow, this is the, this is the future. Like, like just
[01:19:58]  the, the experience of being able to author apps this way and like basically keep the best of both worlds and not in like a theoretical way, like in actually like,
[01:20:08]  like here's the app doing it. Like, cause as I mentioned, the, the, I'm, I thought I actually, before I post this article, I asked
[01:20:16]  the quick guys, I'm like, should I put quick in here? I think it's a mistake that the people who made this demo app made it as a single
[01:20:23]  page app, because I think it doesn't showcase quick. We got in this really weird place where when we navigate to the next page, it suddenly like had the like death
[01:20:33]  by a thousand cuts, like all the JavaScript. It's fine. Cause there's like the service worker in the background, but like when I like slowed it down and my
[01:20:39]  service worker is always off. If anyone knows me, cause I'm always benchmarking, like you, you, you get the, the, you get to see like the
[01:20:45]  quick version was like six, uh, 57 kilobytes of JavaScript. Right. Like it like really wasn't showcasing it. Like if you want to use quick
[01:20:51]  uses an MPA. Um, so like, you know, I went to them and they're like, it's okay. Publish it. At least mention us.
[01:20:58]  It's a good, it's a good way to like get quick, you know, attention and stuff. I'm like, yeah, okay. Yeah. You're right
[01:21:03] . Even as a single page app, it's still like relatively good in this comparison, I guess, you know, but, but, um, they, by the time
[01:21:11]  they released their own article, they did go and make it into an MPA and do it proper quick style. But as I said, what makes this demo really cool
[01:21:21]  is it's not an MPA and it's like super small and super fast. So, um, yeah. Yeah. So just catching up on chat here for a
[01:21:34]  minute. Yeah. Yeah. Yeah, yeah, exactly. And it's funny. You notice that I want to, I want to actually play into that a little bit
[01:21:46]  more. Cause this comes in like, we're kind of building up to, to like, I had a lot of insights talking to different people and Tanner was a big one
[01:21:54] . And why I was talking about jams.com because he, you know, he was, he, he, we started talking and yeah, I'll get to
[01:21:59]  that in a minute. Actually let's, let's continue forward for a minute before we get there. But I want to say that we are like, it's definitely
[01:22:06] , we definitely feel like, yeah, I thought it would be, but the Nate from Astro wrote a really fast DOM diffing library and morph DOM that Marco uses is
[01:22:13]  relatively fast. It might be slower than the fastest VDOM, but like put it in economies of scale. Like it's, I, I'm not even sure
[01:22:24]  how react server components do the diff if they don't have the previous state of it. I think, I think there's a more aggressive DOM type diff situation happening anyways.
[01:22:35]  In our case, the performance was good in the imp category as well. Um, there's a comment, I think it was on this article, sorry, not, not
[01:22:43]  here. In here from someone from the Chrome team and they were saying something along the lines of like, I felt guilty telling people that, that, uh, okay,
[01:22:52]  it's not here. Maybe it was on my hacker news demo. Like they felt guilty telling people that they should get such a low, um, interaction next paint score,
[01:23:01]  but they're like, after trying your demos, Ryan, I don't feel bad anymore because like it just, it was such like a, yeah. So yeah, I
[01:23:09]  don't think this is really killing us. Um, or hurting us right now. Yeah. I mean, definitely. Um, so, I mean, there's still
[01:23:24]  optimization to do here, but even just using this very rough version, like it's immediately obvious, right? Like most optimizations have to do with scale, right? Uh
[01:23:35] , page like this only has one main data source. So the fact that we're doing like more server rendering than we need to right now doesn't impact it. But
[01:23:41]  once you get to the next stage, then this matters. So we still have a lot of work to do and especially on DX, which I'll talk about a bit more
[01:23:47]  as we continue on. But like, I am, this is part of why I'm bullish on server components. Like this, this demo, including like, this is
[01:23:56]  like showing the diffing right here because literally the input doesn't disappear. Like while we're typing, even though it's refreshing the panel, um, you know, we
[01:24:07]  don't lose our focus. You know, we can, you know, we can, you know, it just keeps on going. This is, yeah. I,
[01:24:15]  I mean, I sat down with Nikhil last night and we went over all the cases and we're like, can we do everything a single page app can do with this
[01:24:23]  architecture? And the answer sounds like yes. Like the, this is something that, you know, I've been kind of playing around or struggling with here for a bit.
[01:24:33]  And I'm going to, I'm going to use this thing. Uh, I don't know if you, if you, if you've, if you've seen
[01:24:38]  Fred tried to make a chart a while ago from Astro and it roughly looked like this. And what Fred's chart did was he basically was like, okay, we got
[01:24:48]  like personal blog over here. Right. And then he was like, he's like, okay, let's put a few other markers on here. He's like, let
[01:24:57] 's put, um, content site over here, like a new site or whatnot. And then let's put e-commerce down the middle. And I've seen other
[01:25:05]  people make versions of this chart. Um, what was this one? Social media. And then like over here is like freaking Figma. I'm sure ping is somewhere over
[01:25:16]  here. Cause I always hear that it's too apt, you know, too much of an app to do any other way. The thing is, in my personal opinion
[01:25:25] , if we start talking about like trying to shade ranges on what, where, where things are applicable, we kind of end up in this zone where like, okay, let
[01:25:34] 's pick a fill color. I don't know. Let's use pink. I don't really care. We're like MPAs live, live here, right
[01:25:50] ? This is their, this is their range, right? Um, let's do this MPA. Okay, good. All right. And then when we, uh
[01:26:02] , kind of come from the other side, let's do something like green. Um, single page apps kind of fill in this zone, like, so like, like
[01:26:34]  this, this is kind of classic thing. And there's this area in e-commerce where they kind of battle out. And in my opinion, it's, it's
[01:26:39]  kind of interesting here. Cause like my personal opinion here, cause someone actually is funny as I was at a talk with Alex Russell and Theo and you know, who thinks we
[01:26:47]  actually be in e-commerce or shouldn't be in e-commerce. And, you know, Alex immediately shot his hand up that they shouldn't be Theo did too
[01:26:56] . And I did. And a couple other people, but I, most of the audience was kind of surprised by this because even though I draw a single page app here,
[01:27:03]  I actually think that like relatively past this point, like you, you need to get into like pre-X felt solid range. Like I don't even like most single page
[01:27:14]  app frameworks next or whatever. Like I don't even want, I don't want them past this zone. Right. Like they're okay over here. The biggest irony
[01:27:24]  from my perspective about this is, can you guess where solid is the strongest? Like where it's clearly like, I don't, I usually don't call like strictly better
[01:27:34]  type situations, but where it's like absolutely is probably better than any other solution. Like comparatively, cause there's no way to be the best across the whole range,
[01:27:44]  but where solid is like amazing. Solid is amazing. Like, like very, very, very powerfully amazing. And I'm going to delete this in a minute,
[01:27:52]  but I just want to, I just want to kind of put this out here. Solid is like incredible here. Like because of the fine green updates, it is like
[01:28:03]  so client focused and optimal that it is like probably the very best framework for, for like this, this side of the spectrum, like, like very deep on the side.
[01:28:17]  Whereas like, what I'm saying is like, this is, this is the line that big framework should not cross. Right. So solid is like sitting there like really
[01:28:28] , really good over here yet. Like our conversation is like, how do we bridge this stuff? Right. I don't know if you saw, AG Grid, I
[01:28:41]  did like a stream with Niall and solid like killed it there. It's the reason why Tanner is so into to solid. He, he like conceptually knows that it
[01:28:51]  would be the best framework to do tables. Like, and AG Grid, like it smoked the competition in terms of like, what, what can do it. He actually
[01:29:01]  gave that talk now that at, uh, modern frontends, like at the opener, it was, it was actually like, he was showing what they're doing at AG
[01:29:08]  Grid and showing how you can do like native rendering in each framework. And, uh, he did this, he, he did a really nice boost to solid, like solid
[01:29:15]  kills it on, on this side. Right. Where you don't care about page load and you care about long session. Right. In a sense, you could say
[01:29:23]  that, um, in theory, you know, stuff like Astro, um, and quick, like kill it and Marco kill it over here. But this is like solids
[01:29:31] , like super power range. And yet, and yet, why am I spending all my time somewhere else? Right. Like what, uh, cause I'm going to,
[01:29:39]  I told you I was going to delete this. Right. Um, so I, uh, what I actually want to show here is server components are this new hybrid mechanism.
[01:29:51]  In my opinion zones in like this, like, okay, maybe you don't need it, but when you have a personal blog site or like a doc site, like
[01:30:02] , like I've shown you with like, like solid start, like this movies app is even like 13 kilobytes. Like when it's like five freaking kilobytes
[01:30:11] , you don't need an MPA. And if you like the, the authoring experience is good. So in my opinion, this new kind of hybrid server client
[01:30:19]  routing thing does this, this is its zone. So when I talk about, when I talk about, it's like that, when I talk about, uh, like,
[01:30:28]  I don't want to call them server components, but whatever this is like hybrid, hybrid, whatever. Like this zone, you know, Richard talked about transitional. I
[01:30:40] , I, the reason I don't talk about freaking transitional is because I'm not caring about this transition. Like this, this, this mechanisms got the whole, like got
[01:30:47]  most of the range. Right. Like, but you're, you're still sitting there like, what about these guys? What about the like crazy dashboard? Like,
[01:31:02]  like the, what, what, what about these guys? And it's really, you, you, sorry, I'm going to draw solid back in. Cause I just
[01:31:07] , you know, why, why not? I'm going to, I'm going to, I'm going to maybe use a teal or something like, cause like,
[01:31:12]  as I said, like, this is a zone where solid is like the absolute best. This is a, this is a very awkward thing. Like why I've been
[01:31:21] , it's taken me so much like trouble working through the patterns here, because if this is the best and our users are happiest in this zone, do I tell them that
[01:31:31]  they should go over here? Like when there's this, like, like, like solid, what, what, what would I want to put here? Solid. K
[01:31:50] ills it, whatever. Right. So slaps. Yeah. And I say, now they're going solid is perfect for Tori. Yes. Yeah. All of
[01:32:07]  those things. This is the funniest thing. When I released solid start, people were like, oh, you know, what's the next thing on the list? That reason
[01:32:15]  for me not using solid yet. Oh, right. Native. We haven't built the native client, but like, like, yeah, you know what I mean? Like
[01:32:27] . This, this, this is sort of like where I see the range of things. Like, cause React is good over here too, right? But what's
[01:32:40]  ironic is that solid, well, conceptually is really good here because it's so small in performance-wise isolation. Like, it actually scales the single page app range.
[01:32:49]  This is the thing. Like, classically, like, we were narrower. Like, like, when React came out, like, initial React only cared about like this
[01:32:59]  range. And then we're like, next JS, let's like start hopping over here. Like, what the prerogative of what a single page app does has
[01:33:08]  like shifted and expanded over time, in my opinion. That's why we, we, we, we, we get here. So like, like, like, yeah
[01:33:16] . What do we got here? Server components. So like, the funniest thing is I'm sitting here right now going like, look, can I do this? Can
[01:33:27]  I like, can we, can we somehow get to a happy place where we can like cover this range? Because if not, like, am I doing a disservice
[01:33:38]  to people for spending so much time trying to do this sort of thing, right? Like, because like, solid's already good. Like, you know, there's,
[01:33:48]  there's, there's a lot of apps in this place. You know, when you, when you watch an Alex Russell versus Theo debate, like, like, Theo is
[01:33:56]  just sitting here, like firmly over here with Ping and being like, man, you know, I don't, I don't, I don't care about this.
[01:34:04]  So in a sense, you're also like, maybe I don't really care about this. Right? So, yeah, I, I think, I think this is kind
[01:34:16]  of like one of those things where, like, like no solution is perfect. It's always going to be gaps. But, but like, it's, it's
[01:34:30]  very interesting to me, like, like, it, where are the trade-offs here, right? Cause like, like, like I didn't draw a remix on
[01:34:46]  here, but remix is also, this is the gap where they are. Like, it's possible, but you're like, you're like, you have to think about
[01:34:56]  how to do it. Cause like, remix generally sits, like, it doesn't have to, but it, it, it really, like, I find if you
[01:35:05]  like really focus on an area, sometimes you can like get better results of it. Remix kind of like sits, sits here, you know, in this, in this
[01:35:14] , in this zone. Like they're, they're like, like they're, they're brushing on the same, you know, like server component thing. It's
[01:35:26]  like, it's the mindset that lines them. Like it's the fact that when you start thinking things more like an MPA, like, don't be getting wrong.
[01:35:34]  Remix can like, we, you can use these in the side of the spectrum. It's e-commerce has such a high performance threshold, why it becomes kind of
[01:35:42]  a wall. But like, you can use these all the way down. You might not be able to use these all the way down. I think it'd be pretty
[01:35:49]  prohibitive, but you can use these all the way down. But I'm talking about where you get to a point where people, like, no one would begrudge you
[01:35:56]  from like a perspective of like, oh, this should be like, like, you know, some guys like, oh, this should be an MPA, not a spa
[01:36:02] . Like, like, yeah. Right. I mean, there's different needs. I pointed something about streaming and someone's like, you know, no JS. And
[01:36:14]  I'm like, well, I mean, sometimes you like, sure. I think it's important because I talk about JavaScript being like the access format, like supporting progressive enhancement
[01:36:25]  or graceful degradation, you know, probably more accurate name is like a part of being accessible for the web. But then like, at a certain point, you're
[01:36:34]  like, but you know, I want to do cater for the like, a wider majority and want to like get that last bit of performance, get that last bit of like
[01:36:41] , like user experience. Like, you need JavaScript. Like, I just joined, so you might already mentioned it, but there's a new social network being built on
[01:36:51]  the wake of Twitter and it's being built in solid JS called post. Oh, that's what the post is. That's great to know. Yeah. I like
[01:36:59]  we kill it over here, but I'm still working over here because maybe I'm, you know, I think, I think I'm one of those crazy people who maybe
[01:37:08]  think that there's a potential of covering the whole spectrum in a reasonable way. Like, obviously you can do that today, but like, actually really like, like,
[01:37:19]  good way. Yeah. Like all social media apps don't work with JavaScript. Yeah. But the problem is on a technology side. Yeah. It's because the performance is
[01:37:39]  like, they care, like they care about load performance where this is, this scale is more about. Um, I didn't put it up there. You're right
[01:37:46] . This, this diagram is missing a title. It's like, it's like interactivity scale, but you're right. If we're talking about like even session length
[01:37:57] , e-commerce probably shifts farther left as well. But this is more of an interactivity scale, like points of interactivity kind of thing. Um, and obviously there
[01:38:06] 's some that are farther on this side, like eBay, like an auction site is more interactive than like a, like a fixed shop site. Like, right. Talking
[01:38:17]  about dynamic data and stuff. Yeah. Like it's, it's, it's like a complexity kind of measure. What does quick span? Well, that's the thing
[01:38:31] . Quick is a potential approach. How should I put it though? Quick has their sites on the, on the full range as well. But like, that's why
[01:38:44]  they've been talking about like, oh, we don't think about MPA versus single page app, but we're still figuring out the best patterns. Like just because
[01:38:53]  you cover the whole range doesn't mean that like you figured out what the best patterns are for covering the whole range. Because like, as I mentioned, someone made the movies
[01:39:01]  app as a single page app with quick and it was fine. But in a sense, quick was, I, I, I takes like in, if I was just being
[01:39:08]  like, like pure, like performance nerd kind of guy, I take Svelte kit over it or salt start in that, in that zone. It just, it
[01:39:16]  wasn't like it's forte quick is very strong over here, but it's also very strong over here in a way you don't expect in that quick has removed a lot
[01:39:26]  of the scaling costs of going across the range because their JavaScript's incremental. But on the other hand, like, just because you could become a single page app doesn't
[01:39:43]  mean you want to be a single page app. So like, if you're very, I feel like where quick is right now is like, they do actually cover most of
[01:39:51]  the range, but like, it's, it's not a smooth line. It's like, it's like, it's like big swells in certain places where like
[01:39:58] , you're like, okay, there's where the benefit is. Because like, on this side, it's kind of gradual, you're like, okay, you
[01:40:04]  know, like, maybe I'd rather use Astro or Leventy way over here, because it's simpler, like, I probably won't even pick up solid start
[01:40:10]  yet. But then you kind of get here, and you're still the same. And then you get into e-commerce, and you're like, okay, quick is
[01:40:16]  making a ton of sense here, big swell here. And then, you know, but, but, but, but it's also kind of like the scenario where you're
[01:40:24]  like, you, you're like, there's like this tension between the simpler stuff that still works there and quick. And then here, you're like, okay,
[01:40:33]  but then when you get way over here, you're like, maybe quicks, like, lazy loading JavaScript can like, help me deal with a huge amount of complexity.
[01:40:43]  Because in a sense, the classic MPA is very strong in this range, you add some client side routing to it, you know, like I showed with the hybrid
[01:40:51]  stuff, like, it's still very strong in this range. I think the trickiest part is like, figuring out the, like the quality differences, like, how
[01:41:00]  should I put it, put it to you this way? Like, if, if, if quick, if you're looking at a range of stuff, and like, single
[01:41:09]  page app today is fine for most of these things, but it has some gaps. But let's say if you stretch a single page app over into here, you're
[01:41:18]  going to start seeing issues, right? And we can say that like an MPA effectively is considerably better than a single page app on this side. So maybe like,
[01:41:29]  like, like, let's fictionally call it like 2x. And quick comes in here, and it's also 2x. Okay. But like, as you start
[01:41:41]  getting this way, MPAs start dropping off. Right? Especially as you get into here, like you start, start, start, start getting less of the benefits.
[01:41:53]  Like, by the time you get here, for quicks, like lazy loading thing, you start going, okay, we're only like, at the end, this
[01:41:59]  is the end of the hybrid thing. You're like, we're only at 80% of the improvement over, like, like, I told you it's like double.
[01:42:10]  So like, we're saying 100%. So let's assume that quick improves, you know, as well, like double spa, like, you know, better. You
[01:42:19] 've, you've lost about 20%, but you're still like 80, 80% better as you're coming into this range. And then finally, when you get over here
[01:42:27] , like, there's an amount of complexity where quick actually gets even better. Like the, the, it's just, it's too much. And at this point,
[01:42:40]  like, you basically are a spa anyway. So you're not really improving the client metrics that much, but quick can still get gains here. Like, it's hard
[01:42:48]  to kind of draw this on a chart, but like a part of me wonders if, like, at which point on the spectrum, like, good enough is still a thing
[01:42:56] . It's funny. I was talking to Dan Abramoff about this because he was, he was trying to figure out how to pitch server components. And he, well
[01:43:03] , he had an idea and he was like, I'm pretty confident. I've got a good explanation that'll get people into it and can absolutely build that up.
[01:43:09]  And I'm like, I mean, what I've seen the challenge is you, you react basically told everybody that everything was good enough. And now like, how do you
[01:43:17]  tell people good enough, isn't good enough. And I, I, I think that narrative still sits here that like, if, if you can build demos and like
[01:43:25]  do work and get all the way to this full range without going to the extremes of some of the stuff quick does and hit 80% above what we get today. Like
[01:43:36]  almost like drastically, like double the value, you know, but not quite double, but quick doubles it people like, people aren't going to be making the decisions based on
[01:43:44]  performance here. It's going to be some other element because whether you're doing quick resumability or you're doing server components or something like that, like, like no
[01:43:54]  one's going to be like, it's going to be the DX thing. That's going to do it. It's not going to be like, like doing point because
[01:44:01]  compared to the classic single page app, you've already like doubled that lighthouse. It's not, like, it's just not, it's not like, are we
[01:44:09]  like people arguing over like the real, like, like everyone will get hundreds on the lowest end and then people will be like, you know, on this giant, it's
[01:44:19]  like the difference of, of like some giant app getting, you know, it's, it's, it's, it's 85 instead of 90. Like, like
[01:44:31]  it might make a difference if loading metrics, like you're in e-commerce, but I haven't, I haven't seen the e-commerce site that complicated to actually
[01:44:38]  have that. Like, you know what I mean? Like I worked in eBay, like we're doing perfectly fine with Marco. I think we could do better, but like
[01:44:45]  what I'm getting at is like, it takes amount of complexity to unlock the, to get to the differential between the different approaches. And I think that's going to
[01:44:56]  be a challenge to sell for a while because like the type of people that need to reach that point are far less than people realize. And when other solutions come up that
[01:45:08]  like maybe someone comes up with an easier way to explain it, like they're like, it's going to be like, like, and the DX differences and stuff, people
[01:45:15]  are going to be like, oh, you know, I think that's the challenge here. And this is why quick is, keeps on like, like, like we
[01:45:21] , we keep on like circling and going like, how do we market this? And a lot of this stuff comes in the performance conversation. I'm, I'm,
[01:45:27]  I'm wonder if solid is kind of like past the performance conversation largely. Like I've still get into it, but like, like at a certain point, that's not
[01:45:36]  the thing that makes the decisions until you get to another certain point, which is much further along. I, that's what the design feels like, but I don't
[01:45:47]  think that's the, I don't think anyone, I, I think if you turn to a single page app, you you've lost. Um, unless like your F
[01:45:59] igma. So like if you, if you, or over here, like if you actually need to turn into a single page app, like where you're in this zone,
[01:46:05]  then like, um, then I agree. That's why I'm saying, I don't think we figured out the right patterns yet, because I don't think everything
[01:46:16]  should be a single page app. And I think we should actually, in, in a sense, and I'm going to get rid of solid kills it one more time.
[01:46:24]  Um, I think in a sense, um, where if you go to the historical single page app, which kind of covers this zone, I'm going to call it.
[01:46:37]  Uh, if, if you, if, if you're sitting in here, that's really where single page apps want to live. Um, I think that with the
[01:46:45]  right hybrid model or whatever, like you actually might not even want single page apps past this point. And you'll notice I'm not even covering social media here. Like
[01:46:56] , I actually think that past this point, single page apps just might not be the best architecture. And like, this is going to be a very compelling argument. I
[01:47:13]  mean, live view and HTMX are a tricky one because like, mechanically, they have pretty good performance, which means that like, they fit well into e-
[01:47:27] commerce, um, and they could probably do social media. Um, I don't know because the, like the, the biggest difference between something, and I know the
[01:47:37]  live view JS kind of handles this a bit, but the biggest difference between like the, the kind of work that the react team has been doing versus the live view stuff.
[01:47:45]  And like, like not web socks on that is building a interface. Like it's still like an application first model, even if it's distributed, like it's not
[01:47:53]  like the server knows. And this is always a challenge I had with like stuff like HTMX. So like, I feel like HTMX, even though it adds
[01:48:01]  single page stuff, it probably covers a lot of the same area that the server components stuff does, but I'm not convinced that it can cover the full space. That's
[01:48:11] , that's sort of where my head is. Like, I think it covers a lot of the same area that the, this hybrid thing does in terms of like what
[01:48:17]  space it takes up, but I'm not convinced that it does the, it can do the whole story. Not that it necessarily has to, but like, that's,
[01:48:24]  that's sort of where it fits in my head at least. Uh, do we even need a writer's shirt on the screen? Yeah, I don't know.
[01:48:44]  I mean, maybe that's why they're dragging their feet. I think shared transitions. I, I, I, I brought this all the way over, but there might
[01:48:53]  be like a certain, like this line might be like, like here, maybe. But it's very easy to like, like, like, when you get on this
[01:49:02]  side, it might actually be complexity in authoring and stuff, why you wouldn't go the way. I feel like that's achievable. DX is always achievable.
[01:49:09]  Like, as long as you can do it mechanically, you can get there. But like, part of me wonders if it's just like this range, you know
[01:49:15] , like, like, like, I do see this as like a third thing. Even if we aren't there yet, the work that we've been doing on partial hydration
[01:49:24] , even Marco over the years, it was like the start of understanding what this third area is. Because like, Marco has always been alienated. And I feel like
[01:49:35]  a lot of, part of it is like, people didn't understand the vision. There's like the classic MPA people and the, and then like what became the classic
[01:49:42]  single page app people. And they didn't, they didn't see the potential for this. So like, both sides hated on Marco, so to speak. So it's
[01:49:50]  kind of, I'm glad that Marco is getting its redemption now that people are kind of getting into this space. But it's, it's like, I feel like
[01:49:58]  we are talking about not, like, we are talking about something new, like a third clear architecture. People are talking about reactivity and solid in chat. Yeah,
[01:50:26]  yeah, people still talking about reactivity in chat. Yeah, yeah. Sorry, I'm just catching up. Sorry, people are wondering if I think Spotify, do I
[01:50:45] , okay, let's put it out here. Do I think Shopify bet on the wrong technology? I, I, I don't think so. I don't think
[01:50:54] , what's Spotify's goal here? Is it SEO, like, like eBay or Amazon? Or is it like, to make it really easy for people to set up their
[01:51:04]  own shop and customize it? I think the barrier for end users building their shop and stuff was probably justified the thing for Shopify. I think they would very much benefit from some
[01:51:14]  of the performance gains and stuff from like react server components or whatever they're going to work on with Preact, if they're going to do that. But like,
[01:51:20]  push comes to shove, their customers are people making those storefronts, and that's who that they cater to. So that's like, it's a pretty, I
[01:51:29]  said, Preact stock is, is going up right now. Just because people trying to look at react alternatives. I'm hoping through that and people playing with signals and stuff
[01:51:40]  that they might notice some stuff about solid and realize that like, maybe, you know, it's time to make the architectural switch. But I think that, um,
[01:51:48]  I think Shopify did probably the exact right thing that they needed to do, given where everything is. you need to write more in server code to get the most efficient,
[01:52:14]  you can write, yeah, yeah, yeah, yeah. I mean, yeah, I mean, HTMX and stuff does really powerful thing. I'm just like saying
[01:52:20]  like, do the, the thing about, it's a controlled granularity. It's like, we want HTMX for navigation or big changes, but then we want
[01:52:28]  client side JavaScript for small stuff. Like, it's a scale, you know what I mean? Like, and I think that's like having, I talked about transitional
[01:52:34]  apps, like not being real because of covering the range in a sense. But when we look at specifically at interactions, I do think it's a hybrid or a scale.
[01:52:41]  And that's, that's the thing. I think some stuff does belong in JavaScript. We can't just like sit there on the server. You know, it's very
[01:52:47]  awkward. I've been there before. We've all been there if we built MPAs, not that they're called MPAs back then, but in the 2010
[01:52:54] s, we need to, there's a big benefit to single page apps. And as long as the MPA crowd doesn't acknowledge how big of an improvement single page
[01:53:00]  apps were, they're going to be stuck in the past. Yeah. Like straight up. People are trying to compare solid and complexity. Yeah, I know. I'm
[01:53:15]  not going to get pulled into that one right now. I understand that there's still gaps here. I would love, love, love to see more party talent support. I
[01:53:23] 'd love to see Google get in there and support them. I'd love to see anyone. This is something that we all need. Like, it's so funny.
[01:53:29]  Like, quick, you know, does a bunch of work, speeds up things, kind of like Marco's been doing forever. And then it's like, bam, our
[01:53:36]  site's still 60. And it's like all those 30 third-party scripts. Like, the amount of difference something like Party Town makes compared to like frameworks and good engineering
[01:53:45]  is absurd. It's just absurd. I know there's still gaps, but like, it's like Party Town is the single biggest performance improvement for a lot of sites
[01:53:54]  by like orders of magnitude more than what I can do between different frameworks. Yeah. Yeah. Yeah, it's interesting. I actually think reactivity is just like a
[01:54:21]  nicer DX than, like, there's differences. The language looks similar, but I really want to point this out here. I think, I think like, how should
[01:54:29]  I put it? Like, I think there's like, can I draw this as a scale too? But I want to talk about this for a second, because not
[01:54:37]  all solutions are equal, even though they look kind of similar. And part of that comes in, like, react has amazing composition. And, like, it might be a
[01:54:48]  little bit heavier, but it's like super, super powerful. And then something like Svelte is very slim on syntax, but actually its composition is like something else
[01:55:05] , like stores. Like, they don't have, like, don't get me wrong, Svelte can do every piece of composition that react can do, I think
[01:55:12] . Even, you can even do control flow composition if you really try. It's not idipotent. Like, you have to change the APIs, essentially, which
[01:55:22]  is like my gripe. But generally speaking, like, you can do composition with Svelte, but like, like, from a language perspective and their hooks,
[01:55:28]  like, you can't, they're not really geared for composition. But like, those two are kind of like the opposite extremes, right? So you can improve on React
[01:55:37]  by streamlining it. And that's something like Solid does, right? In terms of the, like, execution model. Like, there's a benefit there, because S
[01:55:46] velte kind of also has a feel of that execution model. And you can get composability, which Svelte does not have in the language with Solid and stuff.
[01:55:53]  So, like, like, it's not quite, like, a scale that I can draw here, but like, Quick and Preact are kind of like, in
[01:56:03]  one grouping. Svelte is in another grouping, Reacts in another grouping, and Solid is in another, Solid and Viewer in another grouping, if that makes sense
[01:56:12]  to people. So, like, I kind of put, like, like, out of, yeah, yeah, yeah, I don't know if I can draw it
[01:56:21] , but I just wanted to, just so people have clarity here, that there's basically, like, React. Then there's, like, what I would call View
[01:56:34]  and Solid. And then there's Preact and Quick. Yeah, but even View is in the Preact, you know what? Yeah, this is kind of interesting
[01:56:52] , because, like, it's actually, yeah, this isn't actually right. Because, actually, in reality, View is over here, too. It's, like
[01:57:00] , View is the original here. Like, I don't know how to chart these out. I just want to explain that there's differences in all three of these systems
[01:57:09] , in terms of what it means for the developer experience. Like, um... in terms of like architectural impact and um composability and to me these are four distinct things
[01:57:26]  that have dx trade-offs that you have to consider oh yeah yeah yeah someone's like i don't have a left or right here but someone's suggesting that it should
[01:57:41]  be more like this and i think that's actually accurate like i think if there was a scale it looks it looks like this i i was putting language consideration to the thing but
[01:57:57]  when you talk about like yeah there's different scales you can do i these shift but this is one scale someone might say i'm sorry for not being particularly clear but like
[01:58:13]  solids fine granularity goes all the way to rendering and it's the only one that does that these guys do like a hybrid and it has an impact because like obviously these are
[01:58:23]  like there there's a vdom that can render here on the view side like on the and i don't mean view i mean like the template side and then like reacts like
[01:58:33]  fully like that i mean it's it's it's it's not fair because like svelte is also like this depending on what graph you do like don't don
[01:58:40] 't worry about the order of these i just want to say that these are four distinct approaches and i'm and if i'm going to say something reacts doing this right now they
[01:58:49] 're like looking very amorously at svelte and their new compiler is kind of like doing this game so but so maybe maybe this like boils down into actually three like
[01:59:01]  if we ignore language like maybe maybe there's like three views of of this but what i'm getting at is it's not that they're all the same i think there's
[01:59:12]  actually like because reactivist wants to keep compositions so which is where i started so i'm sorry this is just a mess of a thing don't worry about the order of
[01:59:20]  these i just want to say that there are differences very clear differences between these approaches except these ones are sort of in the same bucket um it's a good question i think
[01:59:41]  back end frameworks have their uh place but yeah i mostly focus on front end on the back end because the the the challenge here is that to unlock the perfect client experience we
[01:59:52]  need to be on the server um and that makes it hard for non-javascript stuff so that's kind of why we're here i think i think there's a
[01:59:59]  lot of back and optimization a whole realm of stuff you can do on the back end it just when it comes to the web server side of it um we need to if we
[02:00:06]  want to get the best client experiences using the models i've been talking about we need to have our frameworks on the on the front of the back end yeah some people have
[02:00:29]  that but like to me svelte and solid are very very very different um and it's actually react and svelte that are more similar i know no one gets this
[02:00:37]  because they're thinking like dom v dom but it's not about that it's about like like we're all it's such a hard thing why i can't move me
[02:00:45]  if you pick a vector we are all like each other on a different vector at a different time like you just have to pick like a 4d like pick two axes and then
[02:00:53]  choose those and chart and you'll get tons of different variations of it so it's not this is why we kind of carve out unique spaces because these solutions are actually um
[02:01:03]  all different from each other in different ways um uh enough that they actually carve out their own space enough but funnily enough like that overlap of view preact quick actually i
[02:01:19]  think happens more often than you'd think across all the different tables uh like not classic preact but like preact with signals i just i just wanted to kind of throw
[02:01:28]  there classic preact is clearly in the react camp but preact is sort of like playing with this game you know like if like we'll move over here maybe if react is
[02:01:38]  moving over here like exactly people are saying like oh maybe they're in the same group because the single file components but like again there's a big difference between how view renders
[02:01:49]  and svelte renders uh so yeah i mean yeah and yeah so from a dx standpoint view values a lot of the same stuff as svelte whereas solid quick
[02:02:00]  and preact and react all value something else anyways so yeah a lot of people trying to trying to place their stuff and i'm just i can draw 10 charts no matter
[02:02:13]  yeah yeah yeah exactly it's this is not a simple subject and if you watch my stream you'll learn little bits you know sorry that tangent probably went on longer than it needed
[02:02:37]  to okay so um let's let's let's let's let's get back to back to it um so to speak uh um yeah wow we we we were right out
[02:02:50]  there um yeah so we released the solid star beta um if you haven't watched it i strongly suggest watching theo's stream uh it's on youtube now in fact so much
[02:03:03]  so that i might actually just like go find it and post in the chat because the the like this conversation is great and um yeah i mean this is gonna play for a second
[02:03:14]  but you guys won't be able to hear it so let's get rid of the time stamp here watch this video if you haven't this was like my sub in when
[02:03:24]  i wasn't streaming that week um it's definitely good a good watch um i yeah i had a very good time we've been wanting to go and stream together for like like
[02:03:41]  literally over a year it feels like like we both started streaming yeah i started in august he started i think at the end of october and right from the beginning we
[02:03:50] 're like what what am i going to on your stream you know and it just it it finally happened um a lot of fun a lot of good times so anyway uh just a
[02:03:58]  quick shout out to that you you'd think that i talk a lot about the solid star beta but we've talked about it with nikil um i don't know if there
[02:04:07] 's there was actually much new there right oh i sorry i forgot the shout out nate codes who subscribed at tier one i missed that a little while ago thanks nate
[02:04:17]  um i actually need to catch up on twitch chat make sure i didn't miss any uh subs uh yeah okay let's keep going okay so if you haven't heard of it
[02:04:30]  i mean i'll give a click a quick not pun uh thing here but essentially solid meta framework like next js i i put in some funny opinions uh but essentially we have
[02:04:44]  a built-in rpc method that does a lot of stuff um that's super powerful because it lets us take current patterns stuff like tan stack query etc and actually port
[02:04:53]  them to a world where they can work server only without having like get server-side props and stuff so this is a really powerful pattern we have progressive enhancement forms we have all
[02:05:03]  that stuff and you know it's a beta beware you know that kind of thing but you know big news for solid so i definitely want to give this a shout out
[02:05:12]  um been working on this for almost two years started back when view 2 was released and but you know it's just taken forever um so i don't know if i want to
[02:05:23]  tell you a ton about it but that that that's the that's the whole solid start thing i think i've showed a lot of these demos on stream right um so
[02:05:30]  yeah yeah yeah i think i think i think there's good patterns in here that can really help streamline stuff and what i love about the pattern of solid start is that they're
[02:05:43]  composable and you can always like rip them out like even if there's a place for something you can always like import it into that place like it's not the stuff
[02:05:52]  isn't locked um i i think i think this is a really powerful thing and theo really digs into it because he cares about that so yeah i honestly people should should check
[02:06:03]  that out um i was trying to push it while i was away because it was like my stream while i wasn't streaming i didn't i just didn't have time i missed
[02:06:09]  so many fridays in a row i'm if someone's asking yeah so yeah parasocial media or whatnot i forget what username you want to go for the moment but
[02:06:22]  like netlify edge so dino stuff is great um obviously you can do stuff good with the versell i'm a big cloudflare fan as well so like cloud
[02:06:31] flare workers um and dino deploy so but the thing is like if you do dino deploy and use cloudflare workers like both technologies are great and you're essentially
[02:06:40]  going to be you can use them straight or you can use them as part of netlify or for cell so you're like you're in a pretty good place like
[02:06:46]  you're going to be using one or the other obviously there's things that don't go on the edge um and those things will end up in serverless functions and aws
[02:06:53]  i just get sad you know that streaming doesn't work on aws yet so both for cell and netlify uh standard functions don't get our streaming so you know
[02:07:03]  so yeah uh in in any case um do check out solid start um anyways yeah great theo and his thumbnails um yeah so yeah the the the the it might be worth checking out
[02:07:24]  the downtonnet comp framework discussion uh panel it was really fun uh you know fred myself um uh you know uh i can't remember the guy from knox sorry
[02:07:38]  it was alex and then obviously uh why am i this account doesn't exist what happened never mind um yeah yeah exactly i i'm like i was slipping on the first
[02:07:59]  name thank you i knew the last name i was like janiak i knew that that was the last name but i was like jess jen jess jess j
[02:08:05] essica jen janiak yeah i don't i don't know what happened this account doesn't exist okay well maybe it's the end of twitter um maybe it
[02:08:13] 's finally collapsed um but at least like uh awesome you know representation astro um solid um noxt angular it was a fun conversation yeah yeah i i'm i'm not surprised
[02:08:37]  yeah yeah yeah uh this is real yeah people working on building stuff in solid um yeah i i stuff's starting to pick up um elon happened this month yeah yeah what
[02:08:47]  did i miss while i was away oh yeah yeah that's probably like the biggest news in tech and i'm like not covering it because you know content um i'm i
[02:09:01] 'm going to pick up on this more but i do want to point out this tweet for a moment because i actually feel that this is so real uh theo says something online it
[02:09:15] 's astro win because they're the only hl first framework that doesn't make people do doesn't hate people who use javascript and i know this isn't true
[02:09:21]  like alex russell as much as he talks about the javascript industrial contract he he he his like sticker his brand is like is the ant the anti-anti
[02:09:32] -java what was it god i'm gonna screw this up now it's it's something like the the anti-anti-javascript club or something like he it
[02:09:42] 's they're not that they're anti-javascript but you you know when you talk to people who work along all these frameworks especially the platform to style like web component
[02:09:52]  stuff enhance or whatnot they get very like pushy against other like javascript frameworks and it gives you this impression that they don't actually like they want to like be
[02:10:01]  critical of you using javascript um because javascript is kind of like a pandemic from the perspective of the way like it's growing over years but i think astro
[02:10:12]  has sort of struck on something that is just so simple that people get and it just like it works it's kind of like it's kind of there's just like universal
[02:10:20]  love here kind of like veet and i think that's really really powerful and something that i've been thinking about a lot recently especially when i was sitting there with dan ab
[02:10:29] ramoff and he was like kind of trying to figure out how to sell people on the value of like server quotas that i'm sitting there and i'm like do
[02:10:35]  you realize like what marco and astro and quick and you know everyone's been trying to do around mpas and and multi-page apps like literally the struggle has been
[02:10:43]  the struggle for like the last um few years you know like like we we we've been trying to sell on value we tried performance we tried all these angles and in a
[02:10:54]  sense even though you know there hasn't been like a success story completely in the space if you're going to look at one right now like for that kind of partial hydration space
[02:11:06]  you you have to look at astro astro has made people love it without pushing partial hydration down your throat it's just like this feeling of free wins and you know i
[02:11:18]  think i think what astro's done is incredible from that perspective and i think i think we should be paying attention from it even from our white tower academic js framework like
[02:11:30]  towers that we've been building people yeah exactly people had never heard of partial hydration before astro right do you know why because like i can find you some articles where the mar
[02:11:45] co team describes partial hydration for like years and years and years it's it's like it's like it's like reading like a document like it'd be like reading like
[02:11:53]  seb or or like yeah maybe even dan or something like you ever been to dan's vlog what's overreacted on io and you like algebraic facts are the rest
[02:12:06]  of us there you go like this is very well it's just like you know it's very well explained but like explaining partial hydration to someone a few years ago probably felt
[02:12:15]  like this article like if you're really into it you're going to like follow this but like that's the that that this is the sales pitch is is not going to win
[02:12:24]  people over because they just like they're like so what what i need algebraic effects like this this is sort of like the problem of of marketing or pushing uh you know
[02:12:35]  partial hydration astro tried to come in with islands partial hydration it kind of worked and they tried zero kb like everyone tried like all these different angles of it and then finally
[02:12:45]  if you go to you know was it astro.build and go on the website it's like build fast sites at the end like like like they they they slap in
[02:12:55]  an island thing in here but like literally this because people just pick it up and they use it and they like it like they didn't have to push so hard and i think
[02:13:08]  i think i think this is really relevant because it usually those paths to simplicity are where the success happens it's not the most optimal solution it's the ones that make it like
[02:13:17]  enjoyable or like obvious to use that usually kind of pull out it's hard in our space because it's so entrenched but you know yes algebraic effects are awesome i
[02:13:34] 'm not but yeah right yeah comments like astro one on dx i i pay attention to this right so still going to all start fire ship made a video i i don
[02:13:56] 't know how to thank this guy like seriously he makes a video and like the mountains move so like thank you so much fire ship um like again this is a good way
[02:14:12]  to get a highlight of all the features if you don't want to spend the whole time watching theo stream but i i i don't want to uh just like monopolize time
[02:14:21]  on this solid stuff i think there's a lot more interesting stuff that's been going on this meetup coming up in new york is interesting i think people from post that
[02:14:30]  new solid uh you know project coming up and also babel is sponsoring it there's a lot of interest in a lot more companies using solid and i this is uh fl
[02:14:41] itcher program we're eager to promote yeah i i i'm very excited where stuff's heading right now people are really starting to take us seriously um have we caught up now
[02:14:51]  to modern front ends should we talk about modern front ends i i was gonna wait until there was three thousand people in the chat um but uh i i guess i i guess that
[02:15:05] 's not gonna happen i mean we we sometimes you know set our expectations too high and we don't quite reach them so um yeah i mean people are probably people probably expecting
[02:15:22]  something kind of spicy from me um but like truth of matter is like it's funny we are actually on a yacht here and people made a like a a big deal about like
[02:15:34]  oh the speaker's dinner on a yacht and like people pointing stuff and for spenders this was just a restaurant like the the conference center was literally against a dock so there
[02:15:41] 's like permanently parked boat with a restaurant on it if you guys are wondering about like miss spending and stuff like this like there was no alcohol at this event so like like the
[02:15:50]  food was great and stuff like i had a really good time i'm just i'm just i just want to point out there that it wasn't it wasn't it wasn't
[02:15:57]  like that right um i i obviously have my own story but as you can tell i just want to show these pictures first to show you how awesome of a time hanging out
[02:16:09]  with like luca and manu and eric and shy you know and sami and like everyone you know like this is this is we had a lot of um a
[02:16:22]  lot of you know a lot of really good hallway track um like who's this crisp crate t3 app fuzzy bear i don't know sorry man i actually did you have
[02:16:33]  i don't know if you want your face out there my bad um but uh you know kensie dodds can i sneak some other people like like um yeah people
[02:16:48]  did you pay for travel not out of pocket let me i just want to show everyone like this is me at 5 p.m on friday to be fair um so uh
[02:16:59]  this is the big room by the way um if you saw the thumbnail to my video that was the like like let's just go through it like where did where did i start
[02:17:09]  my journey my journey started here where what's lovely about is that they haven't updated the site through the whole thing so you can you guys can all see along what happened
[02:17:19]  it's like okay that's gonna be a huge conference three thousand plus developers 100 plus speakers two conference days two workshops five tracks you know and uh if you look at the speaker
[02:17:32]  lineup like man is this stacked like i i did not put a call in for papers originally i like was like i wasn't like part of this but then when someone was
[02:17:45]  like hey do you you know it was actually dan jutan who he's like hey you don't want to you want to go on this and i was like wow daniel
[02:17:53]  rowe kensie dodds big fan of mark erickson like just people i want to meet personally luca from dino like there's just i i could just
[02:18:00]  go through there's so many names here you know uh expo evan you know fastify uh mateo like there's just like this i'm so niall from
[02:18:10]  age like they're just like ionic like there are a lot of people cyprus like like typescript you know like this is this was like a stacked conference and part of
[02:18:24]  it is like maybe if you get like 100 speakers you're generally going to have stacked i think i think there was like like like i don't see him here anymore but i
[02:18:32]  think jared was here for bud ben lush j phelps uh i was just like wow wow this must be the the the conference right and the thing was they told
[02:18:44]  me straight up that they could cover me and i was like well that's too bad i understand they're like there's something about them like covering some like women in tech conference
[02:18:57]  and all this stuff and i was just like okay you know what i'll ask my my uh my employer and if they're down i'll come otherwise not so me personally
[02:19:05]  i didn't actually have that big of a friction there because like if they weren't going to pay i wasn't going to go and i went to netlify and they
[02:19:13] 're like yeah yeah we're sponsoring the event and um phil's the mc so you'll see them there yeah this is good we can like get a couple people from
[02:19:19]  netlify we can like you know as you know we can kind of like make good presents and you know you know let's let's do it so i didn't
[02:19:26]  in a sense i did not have to pay but on the other hand they they like they straight up weren't covering me like i there's other people had their own stories and
[02:19:36]  they've shared that on twitter and you can read them uh you know dan funnily enough was supposed to be covered at first and then they pulled coverage on him pretty early
[02:19:46]  uh under the guys that like now that dan had signed up like fred and myself uh that like maybe you know the astro company could cover him and then that never
[02:19:55]  happened and fred ended up not going because it was kind of shady on like what the reimbursement was the truth of the matter is it was kind of i guess we all
[02:20:03]  kind of suspected moving in i didn't know until i went to my first like this is my first time like september i went to react finland which is my first in
[02:20:12]  person conference and people warned me of the conference at that point but i'd already like bought tickets and i was already in at that point so i'd like you know and
[02:20:19]  i got a netlify the sponsor me so i wasn't i was gonna do it but essentially uh you know i i was i was in for it um yeah i mean
[02:20:31]  there there was a lot of things that didn't happen like they've sold virtual tickets but there was no streaming there was no tech crew like you go into a room and
[02:20:41]  you see like multiple speakers trying to help each other out because like you'd like be like okay why is this projector not working let's like okay try my laptop you know like
[02:20:50]  it was that kind of scenario like a bunch of independently set up uh meetups like um it it's it it kind of felt like that and the biggest thing for me while
[02:21:03]  i was there was i didn't want the conference to be a disappointment for anyone who was there in person who was actually participating in it because they paid good money and yeah
[02:21:17]  i mean i don't know there's probably like 300 ish people there probably and you know i i have to admit i had a lot of fun i know that like
[02:21:31]  a lot of stuff you know like and if you read people had like like because they were out of pocket like i talked to one of my friends who's a speaker and he
[02:21:41]  had to get a visa because where he lived in order to get in there and he that was a few hundred on out of pocket on top of everything else like it was
[02:21:47]  was just like people in hopes of like being able to speak at such a common conference with so many people and such great speakers and do this stuff you know a lot of quite
[02:21:58]  a few first-time speakers too like uh catcherton who uh did architon i damn it i name's wrong uh did did a solid js talk as well um you
[02:22:09]  know people getting to do their first conference and they were like you know what to be at this conference i'll put a little bit of pocket because like it's worth it
[02:22:16]  and then you know you get there and then is it worth it i mean that becomes kind of the question because i was covered i even though i saw a lot of that stuff
[02:22:27]  um happen like i wasn't as personally affected so i don't have the juiciest story i just everything was just like the feeling going on because like i remember some people
[02:22:39]  after the first day were like almost wanted to boycott it at that point and i was like man like i is that gonna do it like because like you know like some
[02:22:49]  people showed up or like oh you know i'm not gonna show up tomorrow because i didn't realize or whatever like some people i guess got it for free or like it was
[02:22:58]  it was just kind of like the thing was the people most out was were the speakers by far because there's five tracks essentially and 300 people maybe maybe like 300 people including
[02:23:12]  like the 80 speakers so at any given point you might find yourself speaking to a room for like five people and every room i went to and i guess i went to a lot
[02:23:24]  of maybe the more popular talks were you know well-filled so it wasn't a you know it wasn't a problem but i remember like at the end of the day
[02:23:33]  there was one that wasn't and i was right after i talked and i was i was doing like kind of q a with some people off stage and they're like you know
[02:23:40]  one of the only times i actually talked to uh uh jen and and she's like oh can you go watch this talk you know there's no one in there and fell
[02:23:48]  and i was like we're like yeah definitely so a bunch of us uh went in and watched uh this talk and it was really cool talk actually about accessibility standards um so
[02:23:57]  like a you know it was i think it was like chris crate t3 luca myself daniel rowe like a bunch of us like went there and then it's
[02:24:05]  kind of interesting because in that environment like if you were giving a talk there was like a relatively good chance that your audience like the speaker to rest of audience ratio was really
[02:24:18]  high so like all those people that you wanted to meet are probably like unless they like ended up i guess split between the five rooms or whatever but there's just like a higher
[02:24:27]  ratio that those people would be like what like in like maybe not higher than being in a big in a big setting but like the the the opportunities for interaction because of these smaller
[02:24:38]  groups and breakouts like it literally felt like what the hall track was like like just you you couldn't turn around without bumping into like people you want to meet or
[02:24:48]  talk to so it's like yeah i don't know for me it was incredible because i probably gave my best version of my solid js talk um to date and i hope that
[02:24:57]  people got the same thing out of like you know whenever i talked to anyone during the conference you're just like oh man i was just talking to so and so it's
[02:25:06]  so amazing like that vibe was still there it's just like behind it all was like the fact that like yeah i mean i i think people will look into it and see what
[02:25:17] 's going on i think the biggest concern is if there's some kind of mal intent there and the reason that there's a certain sort of uh who cares kind of attitude um
[02:25:27]  not who cares but like i don't know how to put it it was like some of the talks actually ended up getting recorded because shy um devrel quick you know speaker
[02:25:39]  the guy said earlier that i was you know hanging out with a bunch he he started going around trying to record stuff and he's like offered before he's like hey do you
[02:25:44]  want i can like bring some recording gear we can like maybe at least record the main thing he's like i can do some mc work and it was just kind of like
[02:25:51]  yeah whatever i know it's okay you know like it was just like like what made the conference good where it's good was that where people kind of volunteers stepped up did it
[02:26:03]  on their own terms and didn't really interface with like the promoter you know so to speak and like it just otherwise just you know i know a lot of money went
[02:26:12]  into the sponsorships and all that stuff so and the and the space was shrunk down um as you can see from from from like this but like there's another screen over
[02:26:23]  here on the side like it was like you know not the smallest room but essentially uh how should i put this like the people are gonna probably be looking into like if there
[02:26:35]  was money and where that money went and what went wrong or whatever because a lot of people were out of pocket so i mean that's sort of mostly what what i would want
[02:26:43]  to say about that like would you go back in the future no no no like this this this this was this was not i i there is a it's unclear but it i
[02:26:57]  think there there might have been opportunities to redeem this at different points and they weren't taken like i think this is like a lot of things not going wrong or not going
[02:27:05]  right and just continuing to go off the rails and i i you know stuff happens whatever but like after a while you're just kind of like it's more than that i'm
[02:27:14]  gonna let other people look into it and figure out what happened um people who have stories to tell tell their stories i is personally got a lot from this conference from networking stuff
[02:27:31]  perspective and from like i had a really good talk like just watching like kent c dodds light up in the middle of my talk when i converted the vanilla to jsx
[02:27:40]  was was worth quite a bit on that side but i also didn't pay anything to go there so i'm not one to talk um so yeah i i think that uh
[02:27:53]  i i yeah this this was not a great conference the the the food you know catering little different elements are much below the standard that i've had it even meetups
[02:28:05]  or anything else that i've done uh i i do hope though that the people like in the same way i got value i hope the people that were there got value that's
[02:28:16]  that's really the thing from my perspective honestly just being there meeting people made such an impact right yeah like some people start seeing stuff uh phil from netlify backed
[02:28:33]  out as an mc um yeah i mean yeah there there is a bit of that going on i i feel like there's a justification while the conference is going on to try
[02:28:47]  and make the best of it but i also wondered if the if the if if if like organizers not also as earnestly trying to make the best of it like i don't
[02:28:57]  know i i i don't know But yeah, tickets, um, 699 pounds, I believe. And, uh, virtual were 42 pounds. Yeah. Uh,
[02:29:17]  some people tried to like hand record stuff, you know, on phones and stuff, but yeah. Uh, 5 PM. Yeah. 5 PM on Friday. So it
[02:29:30]  was like, it was the second to last talk. So yeah. Yeah. I mean, the recording was kind of like the redeeming factor. And then when that didn
[02:29:41] 't happen, you know, as I said, there was so many points at which you think like you could like, like somehow redeem some, you know what I mean?
[02:29:51]  And it just, it didn't happen. So I don't know. Is it true there's no coffee? I'm not a coffee drinker, but there was
[02:30:11]  like a tea time. The thing was like, yeah, I don't know if there's no coffee, but it was like, maybe not in the morning. Like
[02:30:20]  there was very specific time when you could eat and it was like for a very short thing. And they brought out like the same stuff both days. And it was like,
[02:30:26]  it was like, uh, like, I don't even know what to call it. It's like, it was just like, like sandwiches cut into fours, like
[02:30:35] , like five different types. Like that was the food. And then there's like a tea time. So yeah, I don't know. I'm not a coffee
[02:30:43]  drinker, so I can't speak to that. Yeah. These links are great where people actually give more details. No coffee. That's, that's, that
[02:30:51] 's the takeaway. They put pineapple on pizza. Uh, yeah. Yeah. Um, there are some recordings, uh, floating around and I know my talk was recorded on
[02:31:04]  a phone. Uh, Fuzzy was actually playing with me and he was like, oh man, it didn't come out as good as I, as I hoped.
[02:31:10]  So he, he's trying to like reconstruct something from my slides. I don't know. I, if he does that, that he's, he's amazing. Um
[02:31:17] , but like, honestly, it was what it is, you know? Yeah. Yeah. Okay. There you go. Like it was just, cause I remember I was
[02:31:30]  talking to someone and like, if you miss that 45 minutes that there's lunch, like you, you, you just, there's like no more food, you know
[02:31:36] , like boot like tech talks. Yeah. So like, I don't know, as I said, like it's, it's hard because like from a what if standpoint
[02:31:52] , you can picture like how crazy things would have been different, but from like what I was doing where I was, I, I, I, uh, I had
[02:32:04]  a very good time, you know, as I said, the talk was good. I love this, this Kent, this is one of those like Kent C. Dodd
[02:32:14] , you know, I got a few quotes over time from people. I like to put them in articles sometimes and I'm just like, you know, you know, the
[02:32:20]  fist pump one, this one, this one's one. This talk blew my mind. I think I finally get solid.js and I'm into it. I'm
[02:32:25]  very impressed by how Ryan led us to it as well. Super well explained. This is, this is, this, this is, this is a testimonial right there.
[02:32:32]  Um, so yeah, I mean, yeah. And, but if you look at every single comments, like, is there any links you can check out my Finland talk?
[02:32:45]  That's probably the closest, but I think like I, I finally refined it because what happened was I wanted to make this talk more concise. I realized that it was
[02:32:55]  too long. The explanation is solid. And my inspiration came last minute. Um, I was sitting there on, after day one in the hotel at night, um, pretty
[02:33:05]  late. And I'm like, how do I shrink this down? I wanted to get that movies demo in there to just like showcase off like how cool it is and
[02:33:12]  where hydration is heading in the future and I'm like, how do I simplify it? And then react Brussels released, uh, Dan Jutanium's talk from the lightning
[02:33:20]  round here. And again, people should check this out. I know I keep on telling people to check this out. This is, this is, this is probably one of
[02:33:27]  the best, like short introductions, like 10 minutes. We already have like short, like introduction to reactivity. This is like that same thing, like 12 months later where
[02:33:38]  it's refined and it has so much this is the best introduction to solid ever. And I literally saw how we explained reactivity, looked at the, his slides,
[02:33:48]  copied them the best I could look with the animations and stuff in, uh, Google, uh, whatever the presentation thing that Google has, like Google slides. And like,
[02:33:59]  like that's how I did it. And I cut a part of my talk that she was like four minutes down to like one minute and found room for more demos.
[02:34:06]  But it's all because of like how genius, um, Dan figured out how to explain solid. He literally does that thing where I walk through the JavaScript. It has a
[02:34:14]  little bit less impact at points of not like building it fully, but he covers exact same content in like three or four minutes instead of like the, uh, like 10
[02:34:24] , 12 minutes. It usually takes me. It's very impressive. And it's very understandable. Dan's kind of like a genius when it comes to this. So
[02:34:33]  yeah, I mean, yeah, uh, I just wanted to kind of throw that out there. Cause I, I was like stuck and then he, I found the solution
[02:34:41]  cause it's got published just in time. Um, but like this kind of all ties together to like where we are at now. Cause, um, I just started,
[02:34:53]  yeah, actually also at modern front ends, uh, TRPC 10 was released, uh, which is huge. Um, but the reason I wanted to kind of,
[02:35:06]  uh, get into this a little bit here is that like this comes to the conversation we were talking about a little bit earlier, where we were talking about, uh, um
[02:35:16] , like how hard it is for agnostic solutions. Like Tanner, he said, the hardest part of solid isn't solid. It's a lack of granular reactivity
[02:35:24]  found almost everywhere else we use. If we had truly reactive produce from the start, it would be an easier transition. I'm very interested in making that if a reality
[02:35:30] , it's another great testimonial. Um, right. Like this, what the thing is, what I'm starting to see is people recognizing that the core value of the
[02:35:44]  primitives are very powerful and they want to build with them. It's just hard to like pull react along with it. But this is where we're, we're
[02:35:52]  working right now. This tweet is very relevant to what we were talking about before. And that's why I want the, uh, I wanted to check it out. Yeah
[02:35:59] . I, yeah, that's the thing, right? It's a matter of like getting it. Like there are TRPC things with solid, even with solid start
[02:36:06] . I think, uh, create JD app or something. Uh, let me see if I can find it. Create. Actually, you know what? We can probably
[02:36:15]  find it off Twitter. If I, if I go to the solids account, give me a second. Um, cause it's, it's been a month, so there
[02:36:21] 's a lot of stuff going on. And if I'm right, uh, let me see here, right. As I did the beta announcement, uh, yeah.
[02:36:30]  Create JD app, solid start based Zod solid JS. Oh yeah. Um, type script, optional atoms, Prisma, upstash, TRPC and tailwind
[02:36:42] . It's basically create T3 app, but for solid start. So, yeah, I mean. Um, we built our own RPC mechanism in, but like
[02:36:57] , as always, this is like a baseline for core mechanisms. TRPC has a much richer, like piece to like orchestrate. Like, so if you can build with
[02:37:07]  TRPC, you're already going to be like a leg up from people kind of manually building the stuff using our server functions. What I love about this, and I've
[02:37:15]  seen this already from the T3 community, even talking to Christopher when, when I was in London was like, even though there's like the react solid difference. People
[02:37:25]  don't notice that here because of like, they're using the libraries that they're familiar with. Like, it just feels like almost like create T3 app, except it
[02:37:31] 's like solid. Like you just kind of go in and go, okay, here's my Zod. Here's my, like, it just, it just kind of
[02:37:36]  like, it's got that kind of power. We're still working on like little kinks and stuff. I was helping debug some stuff this morning, but like,
[02:37:42]  you know, the auth story, but like, essentially this is like, this is very kind of powerful, um, things and you can do them today. I think people
[02:37:52]  always underestimate our ecosystem and it's like, like, because of how easy it is to port react. Like, I just, like, I guess there's some animation libraries
[02:38:03]  missing. We have like motion one, we don't have Framer and there's probably some, like people were working in solid area. So the ARIA, they
[02:38:11] 're like, so there are like some accessibility things that we could do better, but like the, the random stuff, you're probably going to find libraries for that. Right
[02:38:21] . Right. So like, I think this is very, very cool. Right. So anyway, sorry, jumping back a little bit here, but, um, yeah
[02:38:38] , I mean, it's really cool to see parts of the ecosystem kind of understand that this is a change. I, I, I showed this a while ago, but
[02:38:45]  like, uh, the angular guys calling like signals, the new VDOM, like this is a shift in architecture, shift in, in changing. Right. Um,
[02:38:53]  okay. How about using multiple Cloudflare workers to stitch them multiple framers? This is really cool. Cloudflare guys have been played with quick a lot to do
[02:39:01]  like micro-fronted architectures. And this time they decided to put solid into their crazy experiments. Let me see if I can find the demo here. I want
[02:39:11]  to show this for a second. Uh, cause maybe it's at the end, do, do, do, do, do. There we go. Okay. So
[02:39:22]  I'm going to have to log in. I'll give myself a name. Ryan. Okay. Do I have a password? Okay. There we go. So this
[02:39:33]  is a, this is a, uh, quick app, right? I think. And then this is a react app. And then you can guess what the solid one is
[02:39:43] . Haha. Hacker news. Anyone. Um, but what I love about this app is you can control stuff. So you can actually like refresh the app and like
[02:39:52]  start navigating around hacker news before the outer app, um, actually updates. So it's, it, it's kind of cool showing like these regions of like micro front
[02:40:02] -ends that can work, um, independently. So like, uh, this is using multiple cloud flare workers to stitch, um, multiple apps together and they, the stitching
[02:40:13]  happens server side, um, and I guess client side. Um, and it's very similar to the technique we actually used at eBay of using HTML communicator. But I
[02:40:22] , I think it's cool that they're building it in a way that like anyone can use it is, is the thing I, this is a very kind of cool
[02:40:28]  thing. I'm not a big fan of micro front-ends. Like don't use them unless you need them kind of thing. And that's like, hopefully never,
[02:40:36]  but in terms of like how they should be done, this is very compelling. Yeah. But there's a different expectation there for micro front-end you want complete isolation.
[02:40:49]  You're not building a UI together. So to speak, like micro front-ends look kind of like islands, but like you actually probably want a stronger isolation contract with
[02:40:57]  micro front-ends. Um, there are similarities mechanically, but for me, like, I don't really, the goals are very different, but yeah, some of
[02:41:07]  the problems you have to solve might be similar too. Right. Um, you know, how do you communicate between micro front-ends islands or whatnot, but like,
[02:41:18]  you can use islands as like a quick micro front-end thing. like the problem is like, it's a piece that they're missing. Like you could author stuff
[02:41:28]  independently, then bring it into like an Astro app and then have islands and like have the work. But it's like, maybe it's a model repo. So
[02:41:36]  you could like kind of do it, but it's the more important part of micro front-ends is separating the end user work so that teams don't have to like costly
[02:41:43]  talk to each other rather than actually, um, like the, what gets displayed on the screen, so to speak. And what's key about this one is this is
[02:41:52]  a server-driven approach, um, using edge workers. So very, very cool tech demo that I wanted to kind of give a shout out to because like, um,
[02:42:03]  yeah, like, I mean, this, this, this kind of stuff's cool. This is stuff that I want to play with more with Dino when I get a
[02:42:08]  chance. I was actually talking to Luca about like what we could do, you know? So, yeah, um, very, very, very cool thing. Um,
[02:42:18]  and I managed to sneak that one in there. Uh, uh, where are we? Okay. I got to give this one a shout out. Um, state of JavaScript
[02:42:31] , 2022, fill the survey out. It helps people, um, helps frameworks helps. It just, it's, I don't know how we got on the list last
[02:42:45]  year. I always laugh about that, but you know, go fill it in. Um, it was way better. Last year it crashed. Like every time I tried
[02:42:54]  to open it this year, got through and I was able to fill out the form after spending a ton of time putting in the free field for like the, at the end
[02:43:03]  where there's a people field where you just like put anyone you follow that, you know, does good stuff. I was just like typing forever and then I still forgot
[02:43:10]  people. And then I went back and was able to add more people. And I did that twice. Um, so like, um, yeah, the site's way better
[02:43:18]  this year. That's nice. That's higher than me. I got, uh, I, I usually get pretty high in the nineties. This year I got
[02:43:26]  89. I think there's a couple of things I didn't really know about. Um, yeah, yeah, yeah. Yeah. Sorry. Kent did his dot,
[02:43:45]  uh, his blog on modern front ends live. So this is a good read as well about the topic we were talking about before. Um, yeah, there, I do
[02:43:53] , there's a couple more things I want to get to. Um, and, uh, before I'm just doing a couple of randoms right now. Um, another
[02:44:06]  one I want to point out, you know what, actually we'll come back here. Um, let's, let's, uh, let's continue on to what
[02:44:16]  I wanted to, where is it? Uh, my bookmarks. It's always fun when you're in like the zoomed in view. Um, let's start with
[02:44:36]  this one. Dan Abramov did another one of his classic, uh, ask me any things kind of things. You know, he likes to do those from time
[02:44:45]  to time on, on Twitter. And he, he, someone was like more, instead of just asking what he thought of Selt, they're like, oh, React
[02:44:50]  or Selt, what do you prefer about each and why? I love this response. I hope everyone who, I hope everyone who, uh, watches my stream loves this
[02:45:01]  response. In, in React, I like that I can write components as functions. One, many in one file and use JS syntax instead of templates. Honestly, I
[02:45:11]  kind of hate templates. Never want to go back. Okay. It's Selt, I like that there's less syntactic noise. Also no runtime reactivity compared to
[02:45:18]  some others. Zing, like, some of you may be like, well, what does he mean by runtime reactivity? Well, he means like solid or
[02:45:31]  like view or like signals and preact or whatever, like, yeah. Yeah. Yeah. I, I, I was like, I, I, I couldn't pay
[02:45:50]  Dan to put out more tweets like this. I, I, I'm loving this know why, because like there was a while there where people are like, Oh,
[02:45:59]  what's react just going to like absorb what you're doing. Right. You know, like why would I bet on solid or something, you know, like react will find
[02:46:09]  the hole and they'll just plug it and they'll, you know, we'll just continue on. And it's like, and it's like, no, like you
[02:46:17]  don't understand how much they are like, not into this. We're like as diametrically opposed as you can be while agreeing on like values and stuff. Like
[02:46:31] , this is why it's like a four quadrant, like, like a two axes grid. Um, right. I, I, every time I show the grid, people
[02:46:39]  are all like, what, like, w like, what are you talking about Ryan? You're being very vague, but like, what's wrong with runtime reactivity
[02:46:52] ? Oh man. Okay. I actually, I don't know all of his gripes, but a lot of it is like, they're very functionally program oriented
[02:47:04]  and runtime, he's talking about auto dependency tracking reactivity. I think he was trying to figure out like the right term to use for it because like Svelte's
[02:47:13]  dependencies are compiled in. It's almost like you took reacts dependency arrays and actually compiled them and hid them. That's how Svelte works. I talked about how
[02:47:19]  they're similar. We're like dynamic tracking ones actually changed dynamically based on what runs. Um, and it's, it's kind of like, they're, they're
[02:47:32]  like view of the world of like, of like, the immutable cloning and stuff is very fixed in this kind of functional, everything's immutable, you know
[02:47:48] , re-render memoize kind of pattern that they do. And reactivity is kind of like the opposite side, especially runtime reactivity. It's, it's around
[02:47:58] , uh, um, mutable internals and like, uh, I mean, that's not even completely true because like the single itself is an immutable switch, but
[02:48:09]  like essentially it's almost like diametrically opposed in like the view of what the component is and what their functional purity is and whatnot. It's like why solid and
[02:48:20]  react are so different. Yeah. Um, yes. React compiler would be very similar to Svelte. Yes. That's why like, the only difference is they
[02:48:39] 'd probably still generate a VDOM. Like they're, they're not going to like go straight to DOM, but like, yes, it's still like this component
[02:48:48]  reruns kind of thing. People don't realize that Svelte isn't really fine grained. Um, so it's like, it's like the state is
[02:48:55]  still owned by the components and the components rerun. Whereas like in view and I guess pre acting quick, the components, even though the components rerun, they're
[02:49:06]  like, they're like triggered by the reactivity. Like it's permissive. It's kind of like a state library being jammed on. It's solid's
[02:49:13]  case. It's literally the render is the reactive system. So it's, it's like the purest form of the opposite side of things. So like, yeah
[02:49:22] , I mean, some push pull isn't bad except for like, our reactivity is actually hybrid. It's like push pull, um, like typical push based reactivity
[02:49:36]  is stuff like RxJS. Um, and you could say that react is like very much on the pull side. Like you trigger something and go, something's
[02:49:46]  changed. Now, like let's pull the values we need as we rerun it and memoize and like do that. Um, sorry, I'm not being clear.
[02:49:53]  Yeah. Solid's actually a hybrid, um, approach. So like it's push versus pull isn't even fully applicable, but it is mostly that. Yeah. Yeah
[02:50:10] . More or less. Um, like it, what, what Svelte does. Sorry. Give me two seconds. I can, can show you really quick. Um
[02:50:17] , is like, it does split the components into multiple parts, but it's like a class component. So you can picture, you can write something like this in Svel
[02:50:25] te. And then what you end up on the end is this class component, right? And this is what they actually minify to. But if we do something like make
[02:50:32]  it, uh, where is it? There's, there's a version. Maybe it's dev makes a human readable. So you'll see it converts your code here
[02:50:39]  into a class. It's like create claim. I'm not sure what that is exactly. Mount maybe claims for hydration, destroy. They essentially compile your code into a class
[02:50:52]  component. And then like when you, when you update a value. So, um, let's see if I can do this on click equals, um, what do
[02:51:04]  we do here? Something like name plus exclamation mark. Okay. Sure. Um, what they, what they end up doing. And we, uh, we get a
[02:51:14]  few more things now is what you're going to see is that click handler. names, capture state if name, name prop, they call set state here. Sorry,
[02:51:25]  invalidate. But they, they, they, they, they basically call set state. And what this does is go component rerun your render function essentially. Like,
[02:51:34]  um, so like while, because they've separated into a class and it's not like reacts, crazy hook rules, you're not going to have to deal with like life
[02:51:47]  cycles getting in your way. Like, you have to do with react, but more or less, you can kind of view, um, uh, felt is like class
[02:51:55]  components. Oh, I, I, sorry. Maybe I should, I should have blown. I should have blew that up to make it more obvious. I'm sorry.
[02:52:03]  Hopefully that, that makes sense. Um, so, uh, yeah, I w I kind of joked about that. I, I kind of joked about how
[02:52:18]  pre-act signals were like a Trojan horse. That's something I want to explore more. Actually, my talks with, with Tanner, we were like, well,
[02:52:26]  what if we let you write solid? Like there's already react solid state, but what if we took it further? Like, what if we actually made a react compiler with
[02:52:35]  solids attached? So you can actually like literally write solid and then have an output react. Like sure. You don't get the benefits for like from a performance standpoint, but
[02:52:42]  people could start converting all their code into solid for the DX win. Um, inside react and then like, like pull the blanket out later. Um, that was one
[02:52:53]  of our conversations. Yeah. I mean, this is in my talk to like, this is, this is like, like if you're going to point at Svelte
[02:53:08] 's equal sign versus set state, like you're, you're pointing at the wrong thing. They're, they're, they're, they're the same thing.
[02:53:12]  Um, I mean, there's nothing wrong with it. It just, I want to make very clear that, that react and solid or not that like, like this,
[02:53:26]  you know, as I said, I couldn't pay Dan to write this stuff. Like this is, this is like the best fuel that I have. Um,
[02:53:37]  is there mitosis solid? You write in solid and then convert to others. Um, mitosis. Sorry. Uh, JSX light. Um, mitosis started its
[02:53:46]  life as exactly this. It was called JSX light. And it was actually based on solid. Even have like the four components in the state. Like it was, it
[02:53:52]  was literally this, they shifted more to react syntax because we have usage. And that's when it became mitosis, but technically the original version of mitosis was solid
[02:54:00]  to everyone else. And it was called JSX light. Yeah. Yeah. Yeah. And that's the challenge. Preact signals. Like it's funny. Like
[02:54:09]  on my scale of things, I feel like, and I know this isn't most people like, I feel like preact signals approach and like what quick's doing on the
[02:54:26]  reactivity is only like 20% of it. I, I, I, they, they, it's good that they're on the right path. And like they
[02:54:32] 're on reactivity. But when I look at the spectrum of like what you can do with it, it feels like, like that's 20%. And, but it's
[02:54:39]  also why you can make the easy shift. You can get in there and you can just do it. Right. But like, there's a lot of caveats around those
[02:54:46]  APIs and the trade-offs that come, which I've covered in previous streams. So like, I, I, I'm glad that we're starting to get in there
[02:54:52]  and people play with this stuff. Cause I'm, you know, I think when they try stuff like preactive signals, they're going to like see, like, I
[02:55:00] 'm hoping they don't have to do that. Like, I'm hoping they don't walk away and go, Oh, there's the good parts and the awkward parts
[02:55:04] . I hope they actually like see more. So they're like, Oh, I wish it did this little thing. And then they'll see solid and like, Oh,
[02:55:11]  it does that thing. You know, like that, that's, that's the sort of thing. The monkey patch is just very, it does, but it's
[02:55:21]  a very specific kind of thing that I like, it doesn't bug me much. Like it's like, pretend you could wrap a component around an attribute. So if you
[02:55:29]  pass a signal all the way through, right to the DOM, they just intercept and they go, okay, what's this value in my B DOM? And they're like
[02:55:35] , Oh, it's a, it's a signal. Okay. Well, I'm just going to update that independently, like wrap it in a component. That's
[02:55:39]  essentially the mental model. The downside is that you have to be aware of signals throughout your whole tree. So now suddenly you have like two classes, like, is a signal
[02:55:47] , not a signal, like from an author composition pattern standpoint, it's a little bit awkward. And then like, you know, when you got there and you're like
[02:55:53] , Oh, I want to transform it. Well, but now I need to compute it. So you start bringing in more reactive overhead on top of your V DOM.
[02:55:59]  So there's like a performance trade off. If you author completely that way, but you'll get wins on like the really small things, like, like doing like a specific
[02:56:07]  animation or something, which is a classic slowdown on a V DOM. So like, it might be a good trade off, but like, that's, that's kind
[02:56:13]  of like the scenario there. It might be, and it's funny you guys are kind of talking about this because I've been thinking a lot about DX here and you
[02:56:35]  know, I've, I'm always kind of playing around with like crazy ideas in my head and maybe I'll talk about more in a minute. But yeah, actually maybe
[02:56:45]  now is, yeah, we'll, we'll see where we get. Um, it's just because like, we talked about Astro a bunch and we talking about
[02:56:53]  like this kind of, I think Astro and my conversation with Dan, you know, I think Astro gets so many things right. And that I like, it ties
[02:57:00]  into that conversation where I was saying like, who else is like, even though I wouldn't call like huge success, like as of yet, they've made people like partial
[02:57:08]  hydration without realizing it compared to stuff like Marco or react server components. Yeah. Or even quick, no one else has actually succeeded at this. And then you start thinking
[02:57:19]  about what makes Astro feel so good. And like part of it is that it's built for the purpose. Like, I'm not, the second I saw a
[02:57:35] , I saw me actually, I gotta get Ben Holmes credit here. The second he saw async await in, in, uh, the server components, uh, RFC
[02:57:44] , he's like, huh? Kind of like top level away to an Astro. And I don't know if everyone made the connection there, but I immediately did
[02:57:51] . I'm like, yes, Ben, that is exactly what you're looking at. And like, when you, when you start like kind of working through that. And
[02:58:01]  I was like, listening, listening, listening to like Dan, you know, something came kind of obvious to me. Maybe this is my hot take. Yeah. Here
[02:58:10] 's my hot take. If, if, if react has sort of a weak spot, like a blinders, it's the fact that like, they can't, they
[02:58:22] , they don't really see innovation elsewhere in the ecosystem as being related to the innovation that they're doing. Like, don't get me wrong. Like, don't
[02:58:30]  get me wrong. They give credit where credit's due for their inspirations. Like when they released hooks, you can still find it to this day. Like there's like
[02:58:39]  prior art or something. Right. And the hooks FAQ, you'll see like, let's see, prior, prior, prior art for hooks. Here it is
[02:58:50] . They'll, they'll, they'll, they'll credit some react feature thing. They'll talk about some stuff Ryan Florence did, Dom from Inferno, adopt
[02:58:58]  keyword, reducer components. They may even mentioned RX a bit for subscriptions. But like, in my opinion, for, for the, they, they missed what is kind
[02:59:10]  of like the most obvious thing because it didn't inspire them. But like, how could you possibly ignore this? They didn't talk about like fine grain reactivity,
[02:59:19]  stuff like that's in knockout or view or whatever. The stuff that was like on the opposite side of where they're going. Like the thing they felt like they were
[02:59:26]  competing with, they didn't give that any. And the thing is most developers, when they look at react hooks, they're like, they see reactivity. Like,
[02:59:31]  that's why when people come in, they're like, oh, solid. It's like what I thought react did. Like, I thought that's what the point was
[02:59:37]  that it would work like this. That's what, when I saw hooks, I was expecting it to work this way. Instead, react told me it works a different way
[02:59:43] . When I come to solid, it's working the way that I would have expected it to work. And, and this, this is like a blind spot that I
[02:59:50]  feel like, like they have here. Because like, even though they, they credit where they're, like their inspirations are, they don't actually like look wider at
[03:00:02]  people solving the same problems and what they've learned. And I feel like they've done this again with server components. I feel like they basically were like, oh,
[03:00:12]  like, we'll see if prior art comes out for them. But like, they're like, no, this is our big thing that we innovated, but like server
[03:00:19]  components and islands and partial hydration are like the same thing. Like so much the same thing. Like so much the same thing. If you've been following my stream that
[03:00:25]  like, like, like, like you, you need to acknowledge that. That like, the new react server components is wrapping an existing framework with an old framework.
[03:00:38]  And I feel like that attempt, which if you think funny, that's like the description what Astro is, that attempt of trying to mask that make it all react like
[03:00:48]  do all that for that purposes, make it fit within react shell is going to be the same blind spot in the same way that the second everybody saw hooks. They were
[03:00:57]  like, like, like, not everyone, but like the people in the reactive side, like, uh, Evan, you, Rich Harris, myself, even we're like
[03:01:03] , wait a second. Ours are maybe better. Like, like, this is our pattern. And I think with server components, even though they do something technically different,
[03:01:17]  they're not something, it's not something out of the reach of Astro. I've already shown that with my solid movies demo. Like you can take something like islands
[03:01:23]  and make server components out of it. Um, with the right pieces. That's what I've been building, right? The nested routing, uh, nested
[03:01:29]  server rendered client routing, all those pieces together islands. We can build that experience, but without acknowledging that or understanding their place in the ecosystem that way, they, they hit
[03:01:41]  the same thing again. And. I mean, I, I, I argue about the foot gun being client load, but yes. But yes, essentially. Astro
[03:01:58]  is been very successful at just coming in and being like, Hey, what are we building for? We're building for that case. They're already where that new framework is
[03:02:08] . They're not trying to like mutate their old framework to play to it. Like the problem with react server components right now is like, okay, no one wanted the
[03:02:17]  extension. I get it. But the thing is because it's like too much file changing, but like if you package up react server components, you're going to be
[03:02:25]  adding use client all over the place. Like you have to change your existing code to facilitate the new framework. like that's where the friction is. Like that's where
[03:02:34]  the friction is. It's not a hard work. You can just go do it if you understand what you're doing. But I think those boundaries are harder to understand.
[03:02:39]  One of the benefits of Astro's model, not that like it doesn't have trade-offs was that people like took the components as they were. And the boundaries
[03:02:48]  on the outside, right? Like if you're, the thing is, if you're moving to a world of automation, like quick and Marco six and stuff, and even
[03:02:58]  Marco five has automation and Marco forehead automation, whatever. I'm sorry, digress a bit. But like, if you're moving to the world of automation, having the
[03:03:06]  boundaries on the inside is kind of good. Cause you're going to like get more optimal of reducing those boundaries. But if that's never the goal, the outside actually
[03:03:18]  might make more sense. So like, I'm just, I'm just, I'm just going to put it out there that I think that. Astro does an
[03:03:31]  incredible job of just like going like, look, like I started thinking about it even more. I was like, okay, if I want to do my PHP thing, do
[03:03:41]  I care that there's multiple functions in the folder? Like, no, I'm, I'm freaking templating. Like, like there's no state. Like when you
[03:03:50] 're not dealing with state, your criteria for your authoring experience changes considerably. Right. Like, like solid might detach state from components to the point that like it's
[03:04:04]  in your control, but recognizing that, you know, basically is that you still make boundaries because at a certain amount of like logical in your brain, it makes sense because usually
[03:04:17]  because of state, because of like how you want to, like, there's a reusability aspect, but it's usually tied to like units of change. You don
[03:04:25] 't have to do it for performance. You don't have to do it because like, okay, now there's a for loop. I need to like make one per row
[03:04:30]  or whatever, but you do it because like, logically, this is the grouping. There's some kind of interaction, some kind of state, you put it together. But
[03:04:37]  on a server render part, like the server component thing that I don't think that's the case anymore. So like maybe a single file component kind of mechanism that uses JS
[03:04:48] X is a brilliant way to do server components. Maybe top level await is async await. Like maybe all that noise goes away because literally the beginner comes in and they
[03:05:04] 're writing HTML or JSX or whatever it is. And like, that's the starter position because that's how you should view JavaScript as an add on. Astro
[03:05:15]  hits every one of those marks. So we were talking about DX, right? I think us client side framework people who are so up our own, trying to figure out
[03:05:36]  how to unify our picture need to look a little bit wider. Yeah, but in the same way that, I want to go back to my Excalibur
[03:05:53]  out here. The one thing that I didn't include here is that every single page app gets served from a server. So technically speaking, an MPA to SPA
[03:06:00]  switch at a hard line is something that you can do with anything. So like in Astro, you can literally like do MPA, get here, put a single
[03:06:07]  page app, like make your solid app. I know people have done this. Like the solid Astro, you know, thing is real. So like people like put
[03:06:16]  full solid single page apps in Astro. They don't get the benefits of the single page app framework, like the, you know, and people are going to do stuff
[03:06:22]  like that with Tanstack. You bet. But like, they don't like get like the, you know, unless someone builds out that tooling the way Tanner is,
[03:06:29]  you don't get the benefits that you get from like a solid starter spell kit. Like, it's just not as integrated. It's like you leave the happy Astro
[03:06:36]  place to like the wild west place. And like the whole reason that I'm making solid start or something like that is because people need help on that part. Even if
[03:06:45]  I don't like being too opinionated, there's still necessity of needing help. And I think with this model though, this is true. So I don't know if
[03:06:57]  Astro could jump to this model exactly. I think that this model requires explicit knowledge of the client components, but if we can figure out how to do it with primitives
[03:07:04] , I think it's possible. But I just want to more point out that Astro's DX is exactly where it needs to be for people just rendering pages. And
[03:07:12]  I think that's true across the whole spectrum here. So, you know, you know, decide what you will on that and what I'm saying. But like where
[03:07:24]  I'm sitting at least, I think it's very compelling to look at what we can actually learn from stuff like Astro in terms of even our fancy cross the spectrum apps
[03:07:42] . Okay, there's, there's, there's, there's, there's my thing. Don't, don't be surprised if you see me playing with,
[03:07:51]  uh, uh, Astro's file format. Okay. Right. Like in a sense, like I'm lazy, especially on that stuff. Like that's the side
[03:08:03]  that I don't like dwelling on, you know, Rich Harris is a genius when it comes to syntax and all that stuff. I don't like, I don't want
[03:08:09]  to deal with it. I want the mechanical pieces. It's funny because people go, okay, then you're not very DX oriented. No, I'm, I
[03:08:14]  recognize what's good. I just have to, I, I, it's always like an analysis on me and how it interlies with like what it can work with UX
[03:08:22] . I'm not going to like die on a hill about specific syntax, but mechanically you, you start thinking about it and what it means to the developer. I think
[03:08:31]  it's huge. Well, I mean, we couldn't compete there. That was the problem. We, when, when, when Astro first came out and we
[03:08:47]  tried to talk about it, like we were like, no, we do stuff different than next. Cause we want to differentiate. And I know I'm not on the Ast
[03:08:52] ro team. I'm just, I feel this cause I was Marco and we were doing the same kind of conversations, but everyone's like, oh yeah. So like next
[03:08:58] , I'm like, no, not like next, next does not do this. Yeah. Yeah. Like, like next server renders and I can do like multi-
[03:09:04] page apps and next, no, not, no, not the same thing. Um, so yeah, I mean, I think, I think, I think, I
[03:09:13]  think, I think they were smart. And I think this, I think this is a spectrum that they're going to continue exploring. My biggest challenge always is that the same
[03:09:23]  thing I brought up with the Tanner quote is that like solids approach is uniquely different enough than everyone else that it's very hard for agnostic solutions to bet on us because
[03:09:33]  they have to cater to the popular things. And because they keep on not being able to bet on us completely, we end up having to build it on, on the
[03:09:41]  solid side. And I hate doing it because like, it's so much extra work to maintain and do it. But I feel like when we get there, we end
[03:09:49]  up with like a better product. So it's like, you know, maybe it's just a matter of time. So yes, do stores and contacts work? Yes
[03:10:07] . Yes. Yes. Definitely. Um, there is some tricks to get around, around the routing side, but yeah, you can put a provider up at top. You
[03:10:15]  have to put in the right place. You have to put it outside of the routes component and it'll all work. It can also work within specific routes. Yeah.
[03:10:28]  Yeah. We'll, we'll, we'll, we'll see where it goes. But the thing is like, it's such a, it is a bit of a
[03:10:33]  shift, even though I just told you how easy is the port react, the port has to happen. And react is not going this way. This is, this is
[03:10:42]  just not happening. I'm wondering who quote tweeted this. Not for me, but nice. Okay. Dan quoted himself. Okay. What else do we got here? I
[03:10:53]  want to talk about this in a minute. Okay. Who, who wants a funny story? Svelte jumped way up because we are guessing someone's screwed up their
[03:11:09]  CI. And actually, if you look at the quote tweets today, they have now passed react on downloads this week because of this crazy runaway CI. I was kind of
[03:11:21]  hoping we overtake react before the support NPM figures out which needs leaking. But actually, actually, I think he might've, might've been in his reply.
[03:11:31]  It just, yeah, it just happened. Svelte overtook react on NPM downloads this week. I thought this was, the reason that this is hilarious from my
[03:11:48]  perspective, isn't because of this happened. Like this, this, this can happen, but I got to ask you guys. Like, many of you are Theo fans
[03:11:57] . You watch Theo streams. Why is Theo, like, why was Theo the one who broke this news? Why, do you think, do you think he was like,
[03:12:11]  he like regularly checks on Svelte NPM downloads? This is, this is, this is, this is, this is actually really, I mean, it's
[03:12:26]  not a funny story. It's just, it's, it's, right? No. I mean, what was actually happening was, uh, he just finished his talk
[03:12:34]  with Alex Russell. And, um, Nikhil, myself, uh, Theo and Mark headed back to Theo's place to hang, hang out for a little bit.
[03:12:41]  Um, before I head back to San Jose and we're, we were literally talking about the stuff we talked about on stream, talking about Tanner, talking about Kent, talking
[03:12:52]  about like the perception around solid and where it is and talking about, you know, how continuous growth of GitHub stars, you know, we're at like almost, I guess
[03:12:58]  like 24,000. And he's like, how's the downloads going? And I'm like, uh, you know, we're, we're, we're
[03:13:05]  getting somewhere like 50, 50 K a week, uh, roughly. So we're like about 200 K a month, you know, that's, it's big up for
[03:13:11]  us. Right. And then he's like, okay. So the, then he's like, well, it was like, yeah. So yeah. How does that
[03:13:18]  compare to Svelte? So we were actually sitting there like trying to like gauge solids growth against Svelte when this actually came up. And, um, I was
[03:13:28]  confused. I didn't see this line cause he, he like pulled it up on his computer and I'm like, what, did someone like delete Svelte's N
[03:13:35] PM? Cause I was like, I was, I thought like, I thought this was like flatlined on the bottom. I'm like, did like, like,
[03:13:41]  did the history get deleted? Um, but yeah, I mean, he was like, sorry, Ryan, I can't talk right now. I need the tweet. And
[03:13:48]  I'm like, what? And he's like, just, just a second. So he, yeah, he went and proceeded and then he, yeah, anyway, but
[03:13:58] , so, um, yeah. Um, yeah, that, that, that is the story of this tweet, not the most interesting story, but, um, it
[03:14:14]  was just cause we're sitting there trying, trying to like figure out, uh, like where solids, uh, sat in the world. Anyway. Um, it's not
[03:14:26]  a CI bug, it's a for loop. Um, but yeah, I mean, you ever wonder like how trustworthy, um, NPM download numbers are where things
[03:14:40]  sit? I, I don't know. I don't even trust our own numbers. So stuff like this can definitely happen in spikes, but yeah, I don't know
[03:14:50] . We'll, we'll see how long this goes on for, but it's definitely fun for everyone involved to see a Svelte overtake react on downloads for
[03:15:00]  the week of November 21st. Uh, signals are everywhere. Does that mean you're next to collect all other fragments appear? Um, potentially, but I think
[03:15:20]  again, a lot of solid uniqueness is cause it's rendering. Like it's that we treat signals differently than everyone else. If people are willing to go all the way,
[03:15:30]  like view vapor, for example, I see that path forward, but we'll, we'll, we'll have to see. I'm not as convinced. Like if
[03:15:38]  you talk to Mishko and stuff, he's always like, no framer could do a quick does. And I'm like, well, maybe there is an ecosystem
[03:15:43]  consideration there. But sometimes I wonder like if you're just playing percentages and find a ways to make peripheral wins in the same areas, like that are somewhat related, like maybe
[03:15:55]  it's enough. Like maybe the signal stuff, but pre-exturing now plus like another 20% somewhere is enough to like, you know, you don't have to
[03:16:02]  go all the way. But I, we're going to have to see. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Basically, basically reset the ecosystem
[03:16:23] , right? Um, it's not even the rewrite. It's the reset through ecosystem. Cause like you have to, biggest thing is it's the lazy loading, right
[03:16:28] ? Like the, the mechanism of doing the, the chunking it. And like, it makes every boundary async, um, which is a, which is an
[03:16:37]  interesting challenge. Um, okay. So that only leaves, uh, I think one more thing here. I think I, I think I saw shy in chat. Hey,
[03:16:48]  hey, shy, how are you doing? Um, obviously earlier in the stream, I showed my movies, uh, demo article. Um, let me see if I
[03:16:57]  can pull it up again. Um, my article was not really focused on performance benchmarks. Um, this is still new. Um, as I mentioned, we got like 92
[03:17:07]  without trying. And then I did a little, I optimize the images and I got 99. We still have more work to do. I was like sitting on this
[03:17:15]  yesterday after I saw the builder article and like, oh, people are going to make the comparison. I better like see if I can do some performance optimizations on the solid
[03:17:22]  one. Because like people will be like yours is 99 and it's has less JavaScript than quick. Why is quick to a hundred? And it's like trying to explain
[03:17:33]  that is going to be complicated. Cause it's, it's, it's, and I guess I'm here we are, but I was hoping that I could just like
[03:17:42]  get the 100, like, and just like move on. But then I found bugs in solid start. And then, you know, here we are. Um, but
[03:17:50]  what I was focusing on this was like, how can you client routed experience and how small you can make this into impact? So you obviously get great loading and you get
[03:17:59]  like, um, uh, you know, you, you know, you get, you get full client side interactive experiences. Um, as I said, I'm very glad
[03:18:10]  that quick actually changed, um, their demo here because the original version was not. really levered showing quick. It had single page app, but as I said,
[03:18:23]  you don't really use quick for single page apps. It just doesn't really make sense where they are today. I think that will change. They are working on some container
[03:18:28]  stuff, but people are still, we're still figuring out the patterns here. But what's cool about this one is that, uh, skipping all that stuff. Um
[03:18:38] , it's, it's, it's, it's interesting. Um, I actually did spend some time benchmarking it and this sort of led into where I was talking
[03:18:45]  about. Um, if you saw here, I was struggling with this out of order streaming thing. I'd benched this a while ago. Um, but essentially when I
[03:18:55]  was trying to optimize the solid demo, I was like, Oh, I should put streaming in. And it made my lighthouse score worse. I'd get like 98 because
[03:19:05]  the blocking time would go up from like green, you know, like a one 20 or something to like, like maybe into the oranges. And it was because of like
[03:19:15] , what does out of order add, it just swaps the content in place. But what I was seeing lighthouse was it wasn't affecting my simulated slow down page load scores
[03:19:26] . And the reason for that is because lighthouse kind of puts a fixed buffer on asset loading. So the whole benefit of streaming the head content sooner, like, uh,
[03:19:40]  with like the, uh, like, uh, you know, like the preload assets and stuff is basically completely lost. So you only see the negative. So this is
[03:19:49] , this is, this is where I was like struggling. Cause I'm like, I was playing with the out of order version of the demo. And I was like,
[03:19:56]  this feels faster. It is faster. Um, like running it without slow down. It's just like, clearly lighthouse doesn't want to award me for it. And
[03:20:04]  then I actually went to webpage test and tried it on like a slow 3d network. And sure enough. It was faster than our current movies demo. Um, you know
[03:20:12] , like it, it just felt better. You could just tell on that initial load that it was a little bit faster, but lighthouse actually scores at worse. So that,
[03:20:20]  that was something that, you know, this is why I was writing this yesterday. Cause it was like, man, this is kind of annoying. Um, so yeah
[03:20:30] , if you want to see, um, this is the, the builder article. And like the first thing that's interesting is like quick is fast. And the problem
[03:20:51]  is most of these other ones are actually like single page apps in this comparison type light. So like the first thing I want you to notice is actually where quick falls on
[03:21:00]  the rendering time, because ultimately the difference to the solid demo and the quick demo was nothing to do with hydration in terms of scoring or very little. It had everything to
[03:21:13]  do with like some loading stuff. I wasn't doing the preload properly with the, with the certain islands, like there's a bug. Um, but like, and
[03:21:23]  in the quick demo inline, the CSS, um, it did have lower blocking time, but it wasn't like affecting the, the, the total time loading on the
[03:21:35] , on the timelines. And that's, that's the thing when you start getting to, when you get into demos like this and you're like talking about like,
[03:21:42]  cause every run, like I ran quick, like, uh, you know, a bunch of times. And sometimes it was a hundred, sometimes it was 99, you know
[03:21:50] , like sometimes 98, like it varies run to run. Um, it's all these, like, what's good about this demo is we're finally getting to a threshold
[03:21:57]  where it's like almost good enough to actually look at the cost of assets and all that kind of stuff. Like it's, it's right on the threshold. A
[03:22:03]  lot of the demos we do are, it's way too simple to the point that like you, you should get a hundreds with your eyes closed. This one's like,
[03:22:10]  you should get like, you know, in the high nineties with your eyes closed. Um, so it's hard to act to the differentiator cause the actual differences are
[03:22:20]  not like what you're measuring or not. Like, cause like, here we go. Google gave these all like, there's not really much of a difference on Google
[03:22:30]  page speed here. Um, you know, total blocking time. Uh, yeah, I don't know. I think they updated these charts or something. Cause I think this
[03:22:42]  was different before. Cause probably the, the Astro demo was actually written using Alpine JS. Astro plus Alpine. I don't know that that's not
[03:22:51]  the combo I tend to use. Right. Like with Astro. So like, these aren't always the best examples are all a little different, but like everybody's
[03:23:01]  basically a hundred on, on this. Like, like the quick team didn't point out about like, not having to optimize much, but like, because I saw the
[03:23:11]  original version of the app, they, I like, they did opt. They did change it. Like someone in the community built the app one way and then they were like
[03:23:18] , no, we should build it the other way. So like, you know, I don't know if like the problems are demos are just aren't conclusive enough,
[03:23:28]  but this is a very good show of where. The faster light, like start seeing where the, the, the divergence happens. This is right on the threshold of where
[03:23:38]  you can start seeing the cost of stuff and like the difference between next and whatnot. Like, like stuff like this, um, cause this is an MPA. Like there
[03:23:48]  is basically no, uh, no JavaScript cost. Um, I don't know what this Alpine app is, but like this is it's, I think the challenge here
[03:23:59] , and this is probably going to be one of the challenges for marketing. Quick with this stuff is like what, when Mishko changed, originally it was loading JavaScript
[03:24:07] . I told you it was like the other version. And then, so it was also loading JavaScript initially. And then he changed it to like loading zero kilobytes JavaScript
[03:24:13] . And I said, I said to Mishko, I'm like, did changing that affect the score at all? Like, did it actually change anything on performance?
[03:24:19]  And he's like, no. So like the, the fact that it was loading like 20 kilobytes of JavaScript or zero kilobytes JavaScript, you know,
[03:24:27]  or 30, like, I think it was 30 and zero made apps like basically no difference. Um, so like it, it, it, it, it's kind
[03:24:37]  of like, like what quick's doing here is actually prefetching stuff in the background if it needs to. And this app, it probably didn't need to do very
[03:24:45]  much because it's a, it's an MPA app, but like, this is kind of like the difficult of using the current metrics for it. Like, um
[03:24:51] , quite often we see, uh, I've seen this chart a few times. I don't know where it is. Um, but like I wrote an article a while
[03:24:59]  ago. Um, some people might have seen it because it's funny. One thing that I noticed that modern front ends is like three of the talks used by benchmarks as ways
[03:25:08]  of like explaining their points in terms of benchmarks. My benchmarks are starting to go around. I made this like is based on Evan use work to show how components scaled on size
[03:25:16]  using to do MVC. And to be fair to do MVC is a whole app. So in my head, even though I say 80 components, I'm like
[03:25:22] , these are bigger components. Um, a lot of components are smaller, like, you know, give or take, it might actually more components than this is suggesting. But
[03:25:30]  if you graph out these trend lines, you can see that like Svelte ends up surpassing the others when you get to a fairly large app. And the other ones
[03:25:39]  are all kind of the same. React just starts like with a bigger, like it doesn't have as much of a headstart. And then someone will go and they
[03:25:47] 'll take quick or Marco six. I did this myself on stream. I'm guilty of this and draw like a straight line along the bottom and, or maybe try to do
[03:25:53]  steps or something. But the problem is the graph is a lie. Like essentially, it's not like if you need interactivity, you need interactivity. Like, like
[03:26:03]  if you need 80 components that are interactive on your page, then you need all of this JavaScript. You probably don't need 80 components that are, these interact on the
[03:26:16]  page, but the problem is a graph like that can never show that delta. So like, this is, this is the challenge that we're getting to now, because
[03:26:30]  even if people aren't saying it, I think they're starting to conceptually, like, this is where there is, like the, like the challenges on talking about this
[03:26:39]  stuff, because like, there is a benefit here, but we can't use the graphs that we've been using. Because the fact that this, like, there's
[03:26:47]  more than just the initial page load, which people will say, but like the difference between, like, I think if someone authored Astro in a slightly different way,
[03:26:59]  it would also have nothing like quicker. Like, it just, it doesn't, it depends on the implementation, it depends on details that are just like, not purely
[03:27:11]  on the academic theoretical side of things. It's just like, it's, it really comes down to what you chose to do on this specific app. Right, I
[03:27:18]  think quick, right, that's a good argument. This is back to my graph here, right? That's a very good argument, if you're living further over on
[03:27:37]  this side. But, let me, let me throw another one out, because it's more representative of that zero line that Quick shows. What if there isn't those
[03:27:48]  80 components all the time, and you're like, like something simpler on this side, like e-commerce side, and there aren't those, and you've already eliminated
[03:28:05]  70 of those components. You just got the last 10. Like, who cares? Right? Like, don't get me wrong. Resumability is important because you
[03:28:17]  don't execute the JavaScript, but loading those 10 components, like, no one cares. Like, don't execute them with the load. I think, I think that's
[03:28:28] , I think that's sort of insane. It depends on where you sit on the spectrum, but this is why the charts aren't doing it. Because, like,
[03:28:38]  this, this is, this is where the challenge is because, like, like, it doesn't actually, like, in the same way that Mishko went to zero
[03:28:48]  or didn't go to zero initially, didn't make a difference. How much of that range where that doesn't actually make a difference? Like, like, so I
[03:28:58] 'm big on resumability, but this is where I wanted to actually, like, like, there's challenges and tradeoffs and resumability. But this is
[03:29:06]  what I wanted to kind of talk about in terms of the lazy loading story. Because when I see a chart like this, like, I'm like, oh, so it
[03:29:12] 's a static site, essentially. It's an MPA. Like, it doesn't, it doesn't, it doesn't, unless you show interaction. That's
[03:29:19]  why when I was writing my article, I was like, I was trying, in the, the one I had on dev over here, I was kind of like, not
[03:29:27]  this one, but the, this one. I was, I was kind of like, okay, I actually navigated around the app to see the cost. That, that
[03:29:35]  this was more of a single page app thing. That's why I don't have Quicken here. It doesn't make sense. Once they change the demo. But like
[03:29:40] , what I'm getting at is like, we need new metrics or ways to gauge what's relevant. What's relevant about this. I love stuff like Imp. And
[03:29:50]  I love, I love that the fact that the quick version of this page is actually super performant. So like, if you go and try it, or like, lighthouse
[03:29:57]  it, you'll definitely feel the speed. And you'll definitely like, understand that this is a good page. I'm just saying like, the, it's hard to
[03:30:05]  figure out the depiction of what actually matters here, right? Because like, is it how fast it server renders? Does the hydration part actually have any impact on the
[03:30:19]  story? In fact, I think it has almost none. But it, this is a fricking sweet demo. If you know what I mean? Like, like,
[03:30:29]  you know, it's a, where, where is it? Can I see the demo somewhere? Uh, taste movies comparison. Yeah, here it is. It's
[03:30:42]  a, right? Like that page loads pretty fast. You can see the, the, it's an MPA, you can see the arrow X change. I click
[03:30:57]  into it. When I do the search, I press the button. It does a page reload. It's interesting. I guess they didn't end up doing a,
[03:31:10]  uh, kind of debounced auto thing. But like, as I mentioned before, like no one's suffering Astro in this kind of scenario either. Right. Um
[03:31:24] , right. This, this is sort of, these apps are almost too simple to, to kind of see the difference. Right. If you go here, you do this
[03:31:34] . Like, is this like, obviously that thing is distracting the line, but is this now we, we got like slightly faster client rendering. You can get a feel
[03:31:44]  that the navigation is slightly faster, but like, it's not client rendering, but it's like, it's like, it's like, it's just not, you
[03:31:50]  know what I mean? Like these are all fast sites, right? Um, that's a solid one with using single page, uh, navigations. Um, and then
[03:31:58]  like, actually let's, let's, let's see if we can find the Astro one. I think it's on the taste movie. I just want to
[03:32:03]  kind of like, it's the challenge here is like what's being shown is a fast demo, but the correlation. Um, okay. So the Astro one is a
[03:32:12]  little different. It doesn't have, um, search. It looks like, um, movies, TV shows, but like what I'm, what I'm getting at is
[03:32:25]  like the correlation isn't necessarily the correlation, but it tells a good story. Um, and this is, this is a challenge that I think we're going to have
[03:32:34]  moving forward. Because it's like, it's not clear what factors actually lead to it. Cause if you, as I said, if you benchmark it on the hydration costs
[03:32:42] , you're not going to see practically any difference between these approaches, except you're going to see, uh, it looks like quicks rendering for this is actually pretty fast
[03:32:49] . So, uh, you know, maybe worth looking into what, um, what happened there, but like, you know, I mean, this, this is,
[03:32:59]  this is, this is, this is the challenge we face these days. Um, sorry. Um, sorry. MPA. Um, not MPA. M M
[03:33:11] PA. Like MPA. Multi-page app. Um, anyway. Uh, yeah, I, I, that was my, that was my little bit on
[03:33:26] , on this article. Cause I think, I think this is, I think that's a hot demo. Um, you know, it's, it's good.
[03:33:31]  It shows good performance. I also think the client routed version of it also is pretty hot. Cause it's kind of like best of both worlds. But I think that
[03:33:40]  like, we still need better ways to measure this and figure out what this actually looks like when we move along this scale of where we sitting at. Because simple sites like
[03:33:58]  that movie site, which I guess you consider like a content site, essentially, like it's like here, we're not going to, we're not going to like see
[03:34:11]  the differences. Right. Unless like, it's subtle stuff, like, like feature, like architecturally feature things like, like doing cool client side transitions because you're
[03:34:25]  client navigating versus MPA navigating. Like that's the only kind of difference you're going to, you're going to see or shared element transitions and stuff like that. Like
[03:34:34]  you're not going to, because like loading the page and navigating is all you're doing. It's going to be lightweight as long as you do it performantly.
[03:34:39]  So. Yeah. Yeah. I don't know if, if this is, I think with the service worker stuff, they've gone past it. I always have my service
[03:34:54]  worker off, so I don't see it, but the pre-fetching, like they pre-fetch very aggressively kind of addresses this problem. I don
[03:35:02] 't, I think the lazy loading stuff got oversold early and I, I don't think that's where we end up. And so much so that I don't even
[03:35:09]  think it's actually that important unless you're trying to improve the loading speed of say something over here, like the figmas of the world. If you need to improve the
[03:35:20]  loading speed of figma, then it'd be interesting to benchmark and see the difference. but I think I think I think that's kind of like interesting because you can
[03:35:30]  have multiple solutions cover wide ranges of the spectrum and still have to kind of talk about the architecture thing so I'm unfortunately you can't simplify stuff necessarily but it's it's
[03:35:43]  it's worth you know it's it's worth at least talking about um anyway I don't know I think I think that is really honestly most of what I was I
[03:35:56]  wanted to talk about today was did anyone else have any cool news stuff that they saw um that they they thought was cool wanted to talk about I should actually tech chat make sure
[03:36:07]  people are still alive on on twitch case someone might have secretly subbed without me knowing also remind people that uh they should uh like the video apparently that's how you get
[03:36:28]  people to watch your stuff yeah but yeah I don't know a short one today unless anyone has anything specific I think I think we're all pretty good chat has slowed down
[03:36:47]  all right someone wanted to ask me about wasm okay let me dig for a couple quick questions yeah yeah I updated from single page mpa after you stream with theo yeah
[03:37:09]  it was the right move completely I think I think quick today you don't want to use a single page app I think the experience is so much better with the new version of
[03:37:18]  the app it meant that I couldn't put in my comparison anymore but it is definitely like that it's a nice feeling app take deeper okay yeah let's let's I
[03:37:39]  I love uh Michael's work let me see if I can find that tweet um sorry the links I have to get through that way let me see yeah is he just showing
[03:38:02]  that is he just showing that stuff like just it just varies or let me see here I mean let me see here these scores look where I'd expect yeah yeah I'm
[03:38:37]  not sure what the comment is but there is variance in here like let's see here oh interesting he's got like a spreadsheet that actually triggers the stuff in the background oh
[03:39:04]  this is wild okay me huh cool uh anyway sorry I got distracted with that um sorry I should have shared it on on screen you guys are probably like what are you
[03:39:31]  talking about Ryan I just got I just got distracted yeah my bad um sorry what I was showing is that there's this spreadsheet that you run and then like it literally runs the
[03:39:50]  page stuff in the background and fills in the table I just ran it which is why it's it's it's not there but it's it's basically it you put
[03:39:58]  in the url and then it fills it out and makes the table and everything but yeah I didn't see his what his complaint was um he my understanding is like there's
[03:40:09]  probably just variance in the stuff um so anyway oh yeah question about self-start what's your point of point about some issues in consistency with syntax and self-start in
[03:40:28]  the view urad um yeah I mean that's an interesting one uh what what's being asked specifically is that we've been it's funny this is actually somewhat quick inspired
[03:40:37]  we we were working on those server functions and for the for those of you who don't know server functions um it's probably easiest to just um go to solidjs.com
[03:40:48]  and find our very hidden blog section um and server functions are like a type safe way of um of essentially like writing a function that always runs on the server so you do
[03:41:06]  this and then you get greeting out and then you can just like run run it anywhere client or server and it just works and it's like type checked and what Theo's comment
[03:41:16]  was that we kind of had this convention using the dollar sign it's inspired by quick essentially that like the problem with this or the thing with this is you have to be aware
[03:41:26]  that like in this boundary this runs on the server so you can't like put it in a component and have to like read props in here and have it work because like
[03:41:34]  the props don't exist when you just run this function on the server so it gets hoisted out essentially um and we made the convention into a few loader functions where the
[03:41:45]  first function is the function that gets hoisted out and then you can like do whatever you want and Theo was commenting that like he wasn't clear which things um like were
[03:41:58]  on the server and which things weren't I get the confusion and it's something that I've considered in terms of like best patterns and the examples of how I show it on
[03:42:08]  the other hand like there is a very clear definition here that like once you know it it just works so I I think it's interesting reviewing the APIs from a sense that
[03:42:21]  would encourage people to not like have to like split their mind thinking like passing stuff in and stuff but on the other hand I think that like this is one of those examples where
[03:42:33]  like that's what it does so um hopefully that makes sense yeah okay yeah here's here's what I wanted to touch on if you convert this is about making solid and
[03:42:56]  quick kind of the same thing if you converted every single import to a dynamic one and added a few global event listeners at the root you could get close to quick right um
[03:43:04]  not I mean you'd have to break stuff up much smaller if you wanted to do what quick was actually doing I think that if you had islands that were resumable then
[03:43:18]  like maybe the data loading part doesn't matter but generally speaking um you need to slice stuff up pretty small like the this is why quick has dollar signs everywhere because this this
[03:43:34]  thing that I just explained for these server datas which happened in a few places you basically have to guard every single because it's like a serialization boundary um it's where like
[03:43:43]  you know that it's gonna get hoisted so any data like like goes between client and server here needs to be able to be um serialized across the network and for
[03:43:52]  that reason and for that reason when like using quick you have dollar signs like this pretty much everywhere so you have to be very aware of like oh this data like needs to be
[03:44:02]  serializable um like because it's gonna be shifted potentially not necessarily but it may get shipped across the boundary um you know between server and client because what I think is uh it
[03:44:15] 's an interest choice it's the difference between marco 6 and quick is marco's been trying to optimize those boundaries and reduce them small enough but the the challenge we
[03:44:23] 've been having is like how do you know what needs to be serialized because most things don't need to be serialized if you're smart about the reactive graph but you
[03:44:31]  still have to like like like there are things that need to be and if you actually like if you end up in a situation where that thing that needs to be serialized is
[03:44:39]  not serializable we can't really fail on you until run time and um quick went the opposite way they're like okay structurally all of these things could need to be
[03:44:52]  serialized so we're going to literally make it into the syntax that like to tell you that so that there's no confusion but I mean this is where the trade-offs
[03:45:02]  come in because this is why like people are asking how solid and quick can work together well one of the challenges is if you are that strict on serialization rules it gets a
[03:45:10]  lot harder to do composition patterns like the way solid does composition like uh with memos derived state and stuff because suddenly like you have so many boundaries that you have to worry
[03:45:17]  about it through that chain and while it's solvable um you know to handle like say the preact case where you're like okay count plus one like right now in uh
[03:45:28]  quick like if you put something directly in the template they can actually like a signal directly in the template they can actually skip sending the template to the browser because they know it just
[03:45:37]  has to update that one text node or whatever but if you make it count plus one similar to preact it just de-optimizes and now you have to do
[03:45:45]  a whole vdom re-render and you know you can work on making computants and things that wrap that but like essentially uh putting it in user space is like giving a
[03:45:59]  user quite a loaded gun when you have this level of granularity they have to worry about serialization so like those are two very different extreme approaches to handling um resum
[03:46:09] ability with automated boundaries and so like yeah that's that's where you know I'm kind of going like are there other options where you can you know maybe be more explicit but
[03:46:24]  make the boundaries larger so yeah it's an interesting one there's still limits here of what you can do and I think resumability with quick is super compelling um having
[03:46:49]  a function for this looks like yeah yeah what you're saying is like don't do this just like always wrap it with the server function like that was something we were doing
[03:47:06]  here like so you create resource and then you're like oh server function this one it makes it explicit um the thing is this whole mechanism is compiled it has to be because it
[03:47:15]  has to be code split so like you're already there like your options are like making named exports for this and then you can't like get service like props is another example
[03:47:41]  like the named exports you need something that you can hook into so for to be able to split it it's all compiler tricks because you're writing isomorphic code that you
[03:47:50]  don't want in both places so I mean you're you're kind of stuck there I don't wouldn't call it stuck necessarily it's just yeah yeah sorry this was
[03:48:03]  about the lazy loading bit yeah and I'm like I thought so which is why I was kind of addressing it because like I just maybe I'll be proven wrong one day
[03:48:12]  but like the lazy loading part is like by far the least interesting thing to me like I could really care less like it's almost a detriment from my perspective because you start like
[03:48:24]  I start looking at solutions and go if it didn't have that lazy loading what else could I do like I feel like that's going to ultimately be where like the philosophical split
[03:48:36]  is between us because I will die on the hill of composition and I suspect quick will die on the hill of this lazy loading yeah I mean this might be the best way
[03:48:49]  to get both right because by using solid you lose some of the granularity of quick's lazy loading but you get our composition right that was my hope of this integration happening I
[03:49:00]  was hoping that I'd learn more about optimization in terms of like resumability by seeing how this works and like see how we can wake up solid components and stuff you
[03:49:09]  know if we get like really smart with the reactivity and then I was hoping on the other side that I'd convince quick that composition is more important than anything else that they
[03:49:18] 're doing so yeah I'm looking forward to it yeah I mean the thing that often gets kind of called out on the quick demos examples examples is is like is like let
[03:49:35] 's see if I can find it not the showcase is it it's examples I want to find the I want to find the they have this really cool thing that they I probably
[03:49:49]  need a specific URL they have like literally like something that's like called it's not examples it's like it's not tutorial it's like literally like the demo showcase or
[03:50:06]  something like the the talk showcase and they showed it every single time they give a talk and it has this like I'm not going to reverse engineer and find it right now like
[03:50:17]  there's this there's this clock example that's always there but it's they have this thing where they visualize the way that quick is different than different hydrations and it
[03:50:27] 's like a big table and you can like click on parts of it and yeah it's not here I would love to talk about on that at some point probably well the thing
[03:50:45]  is like okay if you have really complicated dashboards or things where pieces tie together I think in theory you can interact with parts of it with quick only get some of the
[03:50:55]  stuff in ways that you can't do in any other framework like there's there's no way to possibly like like pull out just that javascript you need for that piece
[03:51:04]  like you're like within a single like conceptual section of the page and you're like oh I only need this javascript right now and maybe this thing is huge it's
[03:51:12]  like megabytes of javascript it's like super table it's like ag grid like just I don't know like and then you're like you know I only need the
[03:51:19]  javascript for this part and like you could do this kind of thing but like again you know when you look at that Excalibur example that part of the
[03:51:28]  graph you know when you're sitting there and you're like how often when you're in something like e-commerce even in social media where it's just like you know the
[03:51:39]  main focus parts and you know the stuff that comes later like don't get me wrong we can make the code splitting there and the hydration timing and all that stuff easier to
[03:51:49]  do you know but like like I just have to ask what's the difference between going okay the sections below the fold will astro it versus like slicing everything up I mean that
[03:52:02] 's the question we have to ask because over in Figma land might be a huge difference almost the whole rest of the scale I'm not sure it even matters so this
[03:52:14]  is my opinion I do not know this but this is why you know I I pushed stuff in a certain direction and the thing is don't undercount quick every time I've
[03:52:25]  had like a hey what about this they bounce back and done it like when I was like oh quick isn't really partial and they're like oh let's you know they worked
[03:52:34]  on and they got partial and they got proper partial data serialization that wasn't something they had originally they weren't skipping data serialization for stuff that they could properly skip
[03:52:42]  you know I've been bugging them since the beginning of time that fine-grained reactivity was important you know you know because it helps them ship less templates and they
[03:52:52] 've started down that path too so like they they definitely are on it and they understand the problem space so I wouldn't count them out on any of this I'm just I
[03:53:01] 'm just pointing out that like this particular aspect is just not very interesting to me yeah yeah I don't someone's sorry mentioning where was it the showcase I think the showcase
[03:53:15]  is actually apps that people have made using quick which is a great idea so people can like kind of just see what the websites look on quick I think this is a great idea
[03:53:30]  because it really shows off cases off like hey I made a real site and I got these real performance benefits you know but yeah it's not it's not what I'm
[03:53:39]  it's not the example I'm looking for unfortunately sorry I remember responding to to this all right yeah nice and short three and a half hours so yeah I don't know
[03:53:58]  um I think we we are actually done for real this time um so I hope everybody has a great Thanksgiving um if you're in the States um and I'm gonna sign off
[03:54:18]  have a have a great week um I won't be streaming this Friday but um uh Friday the December 2nd I should be back to my more regular schedule all right see
[03:54:32]  y'all