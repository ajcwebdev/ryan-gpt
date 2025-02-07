---
showLink: "https://www.youtube.com/watch?v=RzL4N3ZavxU"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidStart: The Shape of Frameworks to Come"
description: ""
publishDate: "2023-12-16"
coverImage: "https://i.ytimg.com/vi/RzL4N3ZavxU/maxresdefault.jpg"
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

[00:00:00]  Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. I didn't catch on to
[00:03:30]  them until about 2000, obviously dating myself a little bit, but they had an incredible impact on the next 10 years of post-hardcore, even rock music, even bands
[00:03:43]  like even Linkin Park, citing them as a major influence. I think Mike from Linkin Park said that they wouldn't have existed if it wasn't for the ref
[00:03:52] usage, but I've been thinking a lot about meta frameworks with Sol's Dart and the work we've been doing there. And it would be amazing, obviously,
[00:04:18]  it would be amazing if someday the work that we do could be as influential in our realm. And that's where the stream cover came from and the whole thing. So
[00:04:28]  I was hoping to give you a couple minutes to hear the tunes, but I was hoping to give you a couple minutes to hear the tunes, maybe not everyone's cup of
[00:04:37]  tea, so to speak, musically, but yeah. Yeah. No, no, no, I am using a green screen. There's a funny story behind this
[00:04:53] . I really liked the Theo had like an aperture effect, I guess, on the lens, like he's like nice cameras. So he was really clear and his background was
[00:05:02]  blurred. And I just took a picture of my own office and slightly blurred it. So like if I got rid of the green screen, it's like almost the exact
[00:05:11]  same background. There's more Lego figurines on my shelf, you know, you can see Grogu back there right now, but I have a few more. So
[00:05:19]  anyway, um, I should probably get started here and I have to share my actual screen now instead of, um, they've refused. So let me see here, share
[00:05:43]  screen. All right, here we go. Um, I'm going to talk about a few things today, um, but mostly related to solid start. Um, the
[00:06:00]  stream is going to have a lot of live coding. Um, so bear with me because I haven't, this is my first time trying to like do everything that I want
[00:06:10]  to do in the stream. Um, it's going to be a lot. I'm going to try and go fast. Um, but I guess. The first question
[00:06:19]  is, why are we here? Why am I doing a live stream about solid start at this point? Um, so big picture thing is solid start, uh, is,
[00:06:27]  has been in beta for over a year now. I've been working on it since February, 2022, I want to say. Um, although I think it's actually,
[00:06:40]  when did the, I mean, we can actually look up. When did I start working on? Maybe it was 2021. I can't even keep track. Vite to
[00:06:46]  release. When did Vite 2.0 come out there? Yeah. February, 2021. It's almost been three years since I started on solid start. That's
[00:06:55]  right. I started, started solid start before solid 1.0 had even gone out because I wanted to bet my ideas on service side rendering before I could release solid 1.
[00:07:03] 0. So that's a long time. Didn't go to beta till the end of 2023. Um, just, you know, there, there was issues and stuff
[00:07:17]  and things that we had learning over the way, but then spent the last year. You know, since we went on beta basically almost immediately realizing that I needed to change
[00:07:32]  some things and kind of rewrote the app. Someone phrased it that we rewrote solid start multiple times. And I think that would be fair. You
[00:07:41]  know, um, even in the last year, you know, the first time we, I wrote, you know, we wrote solid start. It might've taken us quite
[00:07:48]  a while, like 18 months, almost two years. The next time it took, you know, six months. And the last time it's taken us four months.
[00:07:54]  Um, so we're getting faster at rewriting solid start. You'd be like, okay, well, why rewrite solid start? Um, it's because it's really
[00:08:02]  important for us and ecosystem and given the amount of resources we have to create something that's sustainable. I, I, I, I know, I know that might seem
[00:08:16]  weird when we live it also in a world where we have VC funded frameworks and projects and, you know, a lot of money is going into, you know, meta frameworks
[00:08:27] . So why, you know, am I concerned about this? It's because solid as a project, you know, might not always have the same amount of resources or funding
[00:08:39]  as other projects. And even if there's good points and there's low points, the most important thing for me, for me is longevity and maintainability. So I
[00:08:48]  do apologize. This has taken a lot longer than I would have liked, but we're here today because we're close. We're basically at the next milestone, which is
[00:09:01]  not 1.0 release yet, but I, this one feels like it's going to be the one that leads to the 1.0 release. We have all the
[00:09:10]  pieces in place. Like when I started solid start, I had like a checklist. And if you go open some old issue on the GitHub, we could probably find it.
[00:09:19]  We finally are checking all the boxes. Plus I don't see any barriers to where the future is heading. This has been a very tumultuous time period because while we
[00:09:31]  were building solid start, the whole way we approached and looked at server side rendering has evolved. And I knew that was already happening. If someone asked me, you know
[00:09:40] , two years ago, three years ago, around 2020, what I thought about the state of, actually, I'm just going to go ahead here. What I thought about
[00:09:48]  the state of JavaScript frameworks for server rendering, you know, like, oh yeah, you know, we got server side rendering. We have next and next, whatever,
[00:09:56]  I would have told you it was about a two out of 10. And I know that seems pretty harsh, but the reality is we were kind of not great at it.
[00:10:05]  And the stuff that I'd seen, you know, starting to work on eBay and Marco, I was amazed from a performance standpoint, what they had accomplished. And I
[00:10:14]  knew that we were at this turning point where people are going to expect a lot more out of their SSR solutions. Tying that together with, you know, new
[00:10:25]  platforms, things like edge coming out, which enabled JavaScript, you know, being deployed in a way that it's never been deployed before meant that pretty much the whole ecosystem is
[00:10:34]  going to get turned on its head. So how do you feel comfortable putting out something that's basically the best of last gen? You need to, because you need the
[00:10:44]  project, right? Everyone needs to, not everyone, but a lot of people need server side rendering. It's an important feature. It's the thing I get asked about
[00:10:53]  the most, like, you know, where's your next JSC? It's like, okay, solid's really cool, but where's this? It's like the
[00:10:58]  first question people ask for. So I knew that it was absolutely essential that even if the future wasn't here yet, that we need to build for now and anticipate this
[00:11:09]  future and do it in a maintainable way so that we'd embarrass ourselves. Because I didn't want to create solid start originally. I was worried. I was hoping someone
[00:11:18]  else would, because it's a lot more work to add these opinionated layers. There's more churn, you know, trends change. It's like fashion, sometimes
[00:11:26]  for good technical reasons. But generally, the way we build apps, if you look, some people talk about framework churn, you know, like, you know,
[00:11:33]  there's too many JavaScript frameworks, they last six months. I mean, if you go more micro on that, the way we actually build apps, like best practices changed way
[00:11:43]  more rapidly than JavaScript frameworks. And those architecture, at each one of those architectural points, you could have just replaced the framework. React is a perfect example of this over
[00:11:52]  the years, going back to like original React, React with Flux type patterns, React with Redux. then the change to GraphQL, and I know I'm
[00:12:02]  just naming libraries, but these fundamentally changed the way you approach stuff. We got to the point when we had stuff like, what's it called, Recompose, where
[00:12:13]  we started doing Hawks, Spartan Dumb components, render, and while you can view some of these as techniques or storage, they actually fundamentally changed the way you build
[00:12:25]  your app. Back to the point that I've seen, I saw this a lot, people would come into a project that was a new project built, you know,
[00:12:31]  Greenfield on like the latest trends. And then they'd be like, this isn't React, in React, you should use this and this and this and it's
[00:12:37]  like, no, that was how we did it two years ago, or, you know, a year ago, you know, you know, the rise of Tanstack
[00:12:44] , and then the rise of TRPC and like, these changes have more of an implication on the architecture of your app, perhaps than choosing React does in itself. And
[00:12:55]  you could say that this is a good voucher for the flexibility of React, right, because it could always support all these different patterns. And I think it is.
[00:13:04]  And honestly, that's what I respect and love about React the most. But it's also like the goal with solid to be like, that's what solid is the
[00:13:16]  best at, like, that's where its strength is. And I think we've shown that but I mean, honestly, we're talking micro details between solid and react in
[00:13:25]  this case, like who cares, like, they're both good at that, you know, some other frameworks, maybe not as good at that. But I think what
[00:13:33] 's interesting is something changed, about a year ago, and it just set me off on the things react kind of abandoned that principle when they told everyone that they need to use
[00:13:45]  a meta framework, when they need to use next, I, that was the turning point for me. And some people are like, well, it's because all the
[00:13:54]  React team works of herself. That's not completely true. But, like, that, I think that premise, that basis is what we need. Someone can always come in
[00:14:10]  with their opinions, you can always get a Redwood for your, your reactor, create T3 app for your next JS or whatever. But, but the, where
[00:14:19]  those boundaries lie, that's the important part. And I realized that salt start did a lot of good stuff, you know, server functions, I think we introduced the to
[00:14:30]  the world, you know, pluggable routes and a bunch of like, there was a really good stuff with that release. But I knew that it just wasn't there
[00:14:41]  yet. I'm just catching up a bit on chat here. Oh, sweet to shit. Yeah. Yeah. Yeah. I would love, I know, I
[00:15:01] 'm calling shots on this sucks, but I would love for salt start to hit V1 and a Q1, you know, around March ish, you know, I
[00:15:18]  think, I think it's going to take a lot of testing and bringing up from the community. But at least we're at a point now where I don't feel
[00:15:26]  bad about presenting the APIs. When I did the beta last year, I was like, in my head, I'm like, we're going to change a bunch of stuff
[00:15:31] . I just, I know it. Like we might not come to V2, but we're going to change stuff. Like we're going to, we're going
[00:15:39]  to put this out, make a V1, have to support it and do the thing. And then we'll do V2 and we'll change everything. And I was
[00:15:49]  okay with that because we need something out now, but V1 proved harder than I anticipated. And now it just doesn't even make sense to wait for V2,
[00:16:00]  you know, like some features there, there's a future here and we'll talk about that later on in the stream. But I do want to make it very clear
[00:16:12]  that because a year has passed, we know that much more and our patterns are better. And I'm glad we took the time as usual. Solid took the time originally.
[00:16:21]  And while there's flaws and issues, SolidJS itself, you know, you know, wouldn't be where it is today if we hadn't taken the time and
[00:16:33]  care with it. Okay. So, who wants to see Solid start? Right. Look. Oh, wait, did I, I forgot to tell everyone I was streaming.
[00:16:46]  I got so like in my intro talk. Give me like two seconds here. I should, I should tell people that we're live on Twitch. I haven't even
[00:16:54]  opened Twitch yet. Are people around? I guess other people, I mean, opening Twitter shows me that, that people have already taken it on themselves to, to tell,
[00:17:03]  tell everyone, but, you know, we are live. So I think I should tell people that this is a solid signal. Okay, fine. A lot of people are
[00:17:15]  telling people we're live. Okay. All right, fine. We're live. All right. Give me two seconds here. I say we're, but it's
[00:17:23]  like, I am live. No, we're live. We're in this together. Okay. All right. All right. Here we go. All right. All
[00:17:30]  right. Let's signal everyone. Those jokes are going to come forever. Okay. So what am I going to do today? Okay. No, we're live.
[00:17:31]  No, we're live. We're in this together. Okay. All right. All right. All right. Here we go. All right. All right. All
[00:17:40]  right. All right. Let's signal everyone. Those jokes are going to come forever. Okay. So what am I going to do today? I am not going to
[00:17:48]  just do a highlight of the features. What I do have here is the new solid start docs, which look a lot like the actual solid start docs. You know,
[00:17:58]  you'll just notice one huge difference. API reference is this new one API reference is, is this, I don't, I don't even have to scroll. I'll
[00:18:09]  see the docs, but I'll see the docs. Are incomplete. So this there's that, but actually for the most part, this is going to be the takeaway
[00:18:17]  today is just how much less is in solid start. And I know you guys are like, what you're selling us on less. How is it going to be the takeaway
[00:18:28]  today is just how much less is in solid start? And I know you guys are like, what you're selling us on less. How is, how is, how
[00:18:37]  is, how's this a good thing? Well, sometimes less is more. So let, you know, yeah, yeah, that's, that's, yeah, that
[00:18:52] 's, that's the theme here today. So I want, I want to tell a story instead, and this story is going to take you on my journey. Through
[00:19:04]  web development, the last decade, because I think it puts solid start into perspective. And in the meanwhile, we'll get the show case off all the features and I'll
[00:19:14]  have the docs for reference. We can talk through stuff. And as I said, I have not done this demo live before. It's going to be some live coding.
[00:19:20]  It's going to be messy. Like last time where I spent like 20 minutes figuring out that you can't put, you know, what's those called the certain type of
[00:19:29]  quotes on use directives. You know, I've, I've learned enough that I'm not gonna do that again, but right. So where, like, where
[00:19:36]  do you start when you do that? Like, I'm, I'm going to start here. Actually, I'm, I'm, I've got an example that
[00:19:45]  I did update a couple files, but I'll explain it in a minute. I just grabbed solid start. I went PMPM create solid at beta. You can
[00:19:55]  do this right now. And I just pre downloaded this thing and it has everything, you know, all the latest dependencies that config all this stuff. And there isn't much
[00:20:03]  to it. What I want to do is actually focus here on the source folder because inside the source folder is our app. And this is the, this is the bare
[00:20:12]  solid example for solid start. And inside it, there is a entry server, which is our document. If you've used VEEP before, you can think of this as
[00:20:22]  like index HTML. It's a little bit fancier, but there is a document in here. HTML head. HTML head. You can put your stuff in here.
[00:20:30]  It tells you with script tags, where to insert your app. Okay. There's an entry client, which calls mount. Why does it call mount this? Because it can
[00:20:39]  handle like render and hydrate and like different types of scenarios. This is just an alias over, um, over, um, like our render or hydrate calls.
[00:20:52]  And you can see solid.js start client here. And on the server one, unsurprisingly, start solid.js start server. Okay. So we can ignore
[00:21:02]  these files. People probably don't even touch them most of the time and focus on what matters, which is our project in an app TSX. And what is our project
[00:21:12] ? Well, let's PM, PM dev and, and look what this project is. Cause you've probably seen it before. I wanted to play on your nostalgia here
[00:21:24]  a little bit. And let's, uh, actually, I'm going to use an incognito window for most of this demos today. Cause I always liked that.
[00:21:33]  Hello. Hello. You've probably seen this before, right? This is a lovely spinning thing. And I, you probably remember the first time you went in here,
[00:21:54]  uh, into the, sorry. I can't, I should get this one out of the way. You went in here and you, you, you played on the
[00:22:00]  template and you went and you added a bunch of exclamation marks to the end. And you're like, look, hot module reloading. You know, this, this
[00:22:09]  is nothing fancy, but this brings a lot of nostalgia for me because this was create solid app as mentioned, but it's this, I'm talking about create react app here
[00:22:18] . Like you opened up your app, your app basically was, uh, app.tsx. You put your code in it and bam, you're off to the
[00:22:32]  races. And there's nothing too special about this app. If we look at the, uh, network call for the doc, you're gonna see some debug stuff.
[00:22:42]  Cause I'm in debug mode right now. Some Nux stuff from nitro, but don't, don't worry about that. If we look at our HTML, you
[00:22:48] 're going to see something very familiar. You're going to see, where is it? Oh yeah. It's so small. I missed it. Body div ID app,
[00:22:57]  div ID. And the reason is this is a client send rendered app. Essentially. We just went to div ID app div. And then our, our Mount call,
[00:23:08]  as you saw in here, just was like, okay, Mount in element app and our server call. Well, you know what? I'm just going to give this a
[00:23:24]  title. Why not? Solid demo. Solid demo. Let's update that page reload. Hopefully. Uh, interesting. Yeah. HMR did not work on my entry
[00:23:40]  file. I should, I should check up what's up with that. It's possible because we're in DSR mode. Anyway. Now we have our solid demo
[00:23:49] . I'm just going to prove that we actually, um, have a HTML document with a lot of Nuxt dev stuff. This stuff goes away on the bill, but
[00:24:05]  here we go. Right? So pretty straightforward. We are missing that. And to be fair, the actual demo has it. I just wanted to start here for nostalgia
[00:24:24]  purposes, because I, I just wanted to take us all the way through because what do you do now? You have your beautiful demo, you go PMPM build
[00:24:33] . Right? And we're going to, we're going to, we're going to build this. Oh, sorry. Am I in the, am I in the right
[00:24:41]  thing? Yeah. Um, and we're going to look at our output folder from, from there. And we're going to see a lovely index HTML that if I
[00:24:51]  format this document for a minute, just so we can see it. Oh, really? HTML files don't have a, I never use this computer. Apparently my, what
[00:25:01]  I wanted to show was that this is, you know, I don't need to show it because we're just going to use, we're just going to MPX serve
[00:25:10] . You guys ever use serve before? We're just going to use serve the public folder. Go to back to our local host 3000, refresh the page. And we
[00:25:20]  have our lovely thing. And now this time when I look at the document, there's some manifest stuff from Vinci here. I got to talk to Nikhil what this
[00:25:27]  actually does. This might be a little bit excessive. Um, but we have our div app div, our title, our rendered stuff. That's basically, that's basically
[00:25:40]  it. Um, there's even, you know, our style sheet loads in. And how much JavaScript's on the page? Well, 5.7 kilobytes
[00:25:49] . That's it. You know, you built your hello world single page app. It's five kilobytes like it's supposed to be. Right. And that is
[00:25:58]  the start of solid start. It is create react app. It's built on beat. So, you know, there's a beat config. You can do way more
[00:26:10]  stuff, but at its base, I just have five kilobytes of JavaScript. And I threw the stuff in an app dot TSX. And I think we've
[00:26:21]  all been there before. Okay. Yeah. Yeah. Yeah. Okay. Yeah. This is like create react app, but the, but the, the, the nice stuff
[00:26:31] . Right. Yeah. No, none of this injecting, ejecting, whatever stuff. Right. Right. I actually don't know. And I'm going
[00:26:40]  to have to figure out like this next step tool thing, like what Nitro is doing. Yeah. So. Okay. Let's continue on from here. 7 kil
[00:27:05] obytes. It's so funny. Cause like some people come to me and they're like, I went on bundle phobia and I see that solid is eight kilob
[00:27:11] ytes. And I'm like, yeah, that's like, if you're using everything, right? Like this is this 5.7 kilobytes is the demo code
[00:27:18]  and solid. And, you know, like solid itself in like a hello world app. I think it's more like four kilobytes or four. Yeah. Four.
[00:27:31]  Yeah. Four. I guess it's a bit larger. Now this tells me it's about actually this, this, the code for this component would be about 1.
[00:27:38] 1 kilobytes. So it's almost 4.5 kilobytes. We've grown a little bit. Yeah. Yeah. I'll, I'll, I
[00:27:45] 'll think about that. Oh, Nikhil has the answer. We are building dev tools inspired by Nuxt dev tools. They should not be there by default if not opted
[00:27:56]  into. Okay. Well, there we go. There we go. We have Nikhil Saraf with us, who is the creator of Vinci. I don't
[00:28:02]  know if you guys saw the cover, the updated one. He's a big part of solid start project. And he also built the foundation that we built solid start on because
[00:28:11]  it is built on nitro, which I've already mentioned before, which is the same thing that powers Nuxt. It's built on Vinci and both of these
[00:28:18]  are built with Vite. And then I just sprinkle on the solid, which is why there's just so little of it. Right. So I mentioned before that this isn
[00:28:31] 't exactly the base template because I did it for nostalgia. If I go back here now and undo my changes here. This is the actual base template you get when you
[00:28:47]  install the app. No more logo. Um, so we're going to move forward a little bit. We're going to get our dev mode back going and. I'm
[00:28:56]  going to refresh and hello world and also dev mode. You see all the lovely JavaScript stuff that you get into dev, but this demo. I mean, if you guys don
[00:29:08] 't believe me, this demo is also 5.7 kilobytes, right? Right. It is a counter. Hello world counter. It is offensive. Yeah.
[00:29:17]  You're just baiting me. Of course, five kilobytes is less than quick. I think quick is 17 kilobytes or 18 kilobytes. Um
[00:29:26] , but you have like when you load the framework, but it's zero at the beginning or like whatever the inline script is. You guys are just baiting me
[00:29:34] . Okay. I should know when a troll is a troll. Okay. Sorry. Just give me a second. I got to have some orange juice. Okay. Okay
[00:29:39] . Okay. Okay. So, okay. So what now we have, we have CRA eventually, and we have a counter. Hmm. Hmm. Hmm.
[00:29:48]  What's the very first thing that. Yeah. Yeah. I, I, I, I, I, I. I, I, I, I. Okay
[00:29:53] . Okay. Sorry. Just give me a second. I gotta have some orange juice. Okay. Okay. So. Okay. So what now we have, we have CRA
[00:30:03]  eventually, and we have a counter. Hmm. Hmm. Hmm. Hmm. Hmm. What's the very first thing that. Yeah. I, I, I,
[00:30:18]  anything under 20 is like, who, who the hell cares? Honestly. Um, I'm just going to throw that out there. Okay. So let's, let
[00:30:33] 's just continue here. So I'm, I gotta get the stupid, I gotta get the start project out of my, we'll look at it again in a few minutes
[00:30:47] , but I gotta get on my view. What, where do we go from here? What's the very first thing you do when you got your client side app? Okay
[00:30:57] . So it's great. Um, I think we want a router, don't we? So I'm going to go in here and I'm going to install a
[00:31:05]  router. Okay. And the router I'm going to install is, I'm going to go with solid JS router. Cause that's the thing. And I'm actually going
[00:31:16]  to install the router you might be familiar with. Cause I could put 0.10 in, but I'm instead, I'm going to go 0.91. I'm
[00:31:22]  going to go with the previous version of the router. Cause that's probably what you've used before. So let's PMPM install. Um, this isn't
[00:31:33]  this, this will be important in a minute. Um, but let's, let's just go in here and let's replace. I don't know. I don
[00:31:42] 't know. Let's just replace some stuff in here and just put a router in here. Let's get router. And come on quick fix from solid JS router.
[00:31:54]  And yeah, what, what, what do we want to put in here? Um, maybe I'll put a new routes component, probably a route component and some anchors
[00:32:09] . So let's just kind of go at it. Let's go. Let's, let's make a bit of a nav bar. Maybe anchor. We'll make
[00:32:16]  a, like what home, uh, href equals slash. And we'll call that one home. And we'll make another one and say slash dues or something.
[00:32:32]  We'll, we'll, we'll figure it out as we go. And then we will, um, make a routes component. I think that's the pattern we
[00:32:42]  use here. And then we'll put a route in it. And our first route will be path. Actually, this can be self closing. I don't think I'm
[00:32:56]  going to do any nested routes at the moment. It doesn't really matter. And we'll go component equals home. And we'll make another route and we'll
[00:33:09]  go path to dues component equals to dues. And obviously I don't have these components yet. Um, we need to create them somewhere. Um, I'll just make a
[00:33:24]  folder in here. I'll call it like pages or something. It doesn't really matter what it's called. And inside pages, we'll have two new files.
[00:33:31]  We'll have a home dot. See, I'm going to home.tsx and I'll make a new file. I'll make a, what's the other one
[00:33:44]  called to dues.tsx. Okay. Beautiful. And we'll import those here. import home from the squiggly pages slash home. And we'll do basically the
[00:34:05]  same thing from, let's see other one. Uh, dues. Okay. Listen, I'm going to do a lot of live coding today. We'll see if
[00:34:18]  this is any good. We will export default function home. And our home will just have, I don't know. I could have kept the counter, but for now,
[00:34:31]  we're just going to go. We're just going to put home. And we're going to put to dues into dues. Actually, it's the other way around
[00:34:45] . The one I wanted to make cap. Right. And sorry, if everything works properly, I'm hoping that when I get in here, we'll have home and
[00:34:58]  then to dues, and then we can go back between home and to dues. Okay. That's not terribly surprising. Right. All right. So there, um, we
[00:35:14]  have a router. Um, let's, let's continue a little bit further here. Um, cause I want to expand this out a little bit. Uh, close a
[00:35:26]  bunch of these. Um, the hardest thing about demoing on screen with this stuff is that like, you have to make the stuff so large so people can see it
[00:35:35] . Um, let's, let's go const to dues equals an array. And we'll, I don't know, we'll, we'll put it something in here
[00:35:47]  like ID one. Um, hello world. And. Completed. False. Okay. Just do that. Okay. Just do that. And then we're gonna get
[00:36:03]  some solid code in here. Um. We're gonna get some solid code in here. Um, where we're gonna go. What? Const. Let's go.
[00:36:13]  Uh, to dues. Uh, to dues. So not create. That. To dues equals create. Signal. To dues. Now I, I'm not going to
[00:36:26]  make a full to do app right now. Um, but I, I, well, I'm not gonna make like the full to do MVC app, but we
[00:36:44] 're, we're going to just quickly, you know, put something in here. Uh, let's go. What, what do we want to do? We probably need
[00:36:54]  a four component to short to dues for each. Um, and then we will go for, honestly, for to do app, I'd probably use a store, but
[00:37:14]  I'm just being, uh, I'm trying to be a little bit light here. Um, so I'm just gonna, to do dot. Um, yeah,
[00:37:28]  we should import for. Okay. Does that give me anything on the screen? Beautiful. Okay. Looks good. All right. Um, let's actually make this a un
[00:37:47] ordered list. And I probably should like add that like text decoration, none. I never remember this stuff. This is my problem. I don't do enough.
[00:37:59]  Um, stuff anymore. The, to actually, what, what's the CSS property? What is it? Text decoration. How do I get rid of the bullets? Someone
[00:38:10]  chat. Tell me. I can't, I'm, this is not it. This is not it. I wanted to get rid of the bullets. I can like
[00:38:20] , look it up. Like the, the really lazy way. List style none. Thank you. Okay. Yes, yes, yes, yes. There. Sweet.
[00:38:31]  Of course it's indented. I don't care. Let's continue going. Um, probably is add some mechanism to actually add it to do. Right.
[00:38:39]  Right. So. Let's put. Let's put. Um, let's put. I don't know. Um, let's put, I don't know.
[00:38:44]  Um, let's put, I don't know. Um, let's put, I don't know. Um, let's put, I don't know. Um,
[00:38:54]  let's put, I don't know. Um, let's put, I don't know. Um, let's put, I don't know. Um, let's
[00:39:01]  put, I don't know. Um, let's put, I don't know. Um, let's put, I don't know. Um, an input here
[00:39:15] . And, uh, what's the value? I don't actually care about the value. I need on it. Actually, it's not even on input. It's
[00:39:25] , um, fun. It's on change. Technically. It's not even on change. I'm just going to actually, I'm gonna make a form. Um,
[00:39:32]  that might be like, I don't need a form here, but let's, let's, let's make a form. Okay. Let's just make a form
[00:39:42] . And then we'll make a button. That's like, add. And then let's, let's like, what do I want to do? Another signal.
[00:40:03]  I want like, um, new to do that new to do. Okay. Honestly, this is, this is why you should practice. Not why you should practice stuff
[00:40:15]  before you actually do it. We're just going to go in a little bit here. I don't actually need the value. I just need on input. Yeah,
[00:40:25]  I do need on input event. And then we'll do like set. New to do equals like event dot target dot current. Um, or sorry, just a dot
[00:40:38]  value dot trim. I'm sure that'll cause issues without validation. Okay. And then on submit of our form, we're going to simply for now go event.
[00:40:58]  It's probably painful for people who, who make, um, to do apps regularly in their day job. Um, sorry. I'm just, I'm just being
[00:41:09]  said, what we're going to do is we're going to go set to dues. Um, T we're just going to go own it. Um, add a new
[00:41:20]  object, which reminds me that now we need a counter. Let counter. Let counter equals one. And then it's simply ID counter plus plus title is going to be
[00:41:44] , um, the title going to be title is going to be the new to do text. And completed will be false. And what does it complain to me about?
[00:41:59]  Is this, is this one? I, I tell type script to be quiet. No. No. I, the number. Title string. Completed. Boolean
[00:42:07] . Sure. Everybody. Came here to see me make. Yeah. Okay. I'm sure everybody came here to see me make. Okay. I'm sure everybody came here
[00:42:18]  to see me. Make. Okay. Yeah. I'm sure. I'm sure everybody came here to see me make. Make. Make it to do. Um.
[00:42:27]  All right. What am I doing here? Theo's not watching. I'd safely say as any. All right. Um, I know the last step here is going
[00:42:32]  to be set. make a to-do. All right, what am I doing here? Theo's not watching, I'd safely say as any. All right.
[00:42:55]  I know the last step here is going to be set new-to-do-to-undefined again. We'll do mpString. It's
[00:43:10]  weird that I can't, I don't know what I'm doing wrong here. Give me two seconds. Let me remove this and see if this still complains. It
[00:43:22]  doesn't. So the problem is that it doesn't think this is a to-do. Did I get the shape wrong? Fair enough. Oh, right. This
[00:43:45]  should be a string. In fact, we can initialize it to this. And then you're saying that now that it's a string. Yeah, see? Py
[00:43:58] pescript developers are helpful. All right. Okay, cool. And if we did everything right, what did we not do right here? Oh. Ha. We do
[00:44:20]  need value. Believe me. I mean, I don't really need new value because I could also, depending on where I did the trim, whatever, I don't care
[00:44:36] . We can make it like non-controlled, but whatever. Hi. This is to-do's. Okay. Sweet. Now, this is, now this is
[00:44:50] , you know, I refreshed the page, which kind of sucks. So, the reason I did that whole little setup here is because, which took way too long, unfortunately
[00:45:02] , is that the next, the very next thing you do is probably load data from a backend somewhere, right? And, I'm, like, we're still doing
[00:45:19]  a client rendered app, so I'm going to make a new folder here. I'm going to call it routes, okay? And routes is a bit magical. I'm
[00:45:26] , I'm not going to lie. We'll talk more about that in a minute, but, I'm just going to, in the routes folder, I'm going
[00:45:33]  to make a to-do's .ts file, okay? And, in here, I'm going to export const get and I'm going to also maybe make a
[00:45:55]  folder here for my server content. Like, why not? And I'm going to, what should we call this file? We're just going to call it to-do
[00:46:06] 's dot, I don't know, whatever, to-do's dot tds. And, we're going to move our lovely to-do's stuff out of
[00:46:16]  here into our server. And, I'm going to be, do this sort of lazy way. I'm just going to put a types dot tds at the root here
[00:46:28] , just so that I don't have to worry, like, about TypeScript. I can just, like, there's probably, like, a better way to structure this
[00:46:34] , but we're just going to do this so that our types file, let's go export type to-do, and then in here, we can go import to
[00:46:51] -do. Like, I like being specific. that's the root folder shortcut, the alias it. Okay. And then from our to-do's here,
[00:47:08]  we're going to actually have to do some work. we're going to import we're going to import we import a couple methods here. We're going to import get
[00:47:25]  to-do's and add to-do from the server to-do's. All right. Sounds good. That's going to crash right now, probably, because
[00:47:41]  it's having some issues. I knew it would the second I saved it, because this is all wrong, but we'll get there in a minute. And then in
[00:47:53]  our to-do's.ts here in the server, we're going to, what, export get to-do's. Sorry, function get to-do's.
[00:48:05]  and it's going to be like make it a little bit more realistic. I'm making it async. It doesn't really, I'm just, sorry, don
[00:48:16] 't forget later. For now, we're just going to return to-do's and then export async function add to-do take a to-do type to-
[00:48:33] do, which we will import. and then you actually have to think of how I want to handle this on the, on here, because we were just pushing to it
[00:48:49] , but realistically, I think we're going to actually clone here. Okay. Interesting. Actually, this isn't, this isn't right. we actually should make it
[00:49:06]  the title because the counter is managed by the database, right? Who gives you the ID? The database gives you the ID. So, and to be fair, we could
[00:49:21]  spend the time converting this to like, unstorage because this, this will get like a little bit broken, but I'm hoping I won't need to spend the time to
[00:49:27]  do that. Unstorage is a great alternative where you can just basically set up the database however you want. And then title and then completed false. All right.
[00:49:38]  So look, we didn't even need the types. Yay. Now, if we are in here and we have a get, we can just return get to do's
[00:49:55] , I think. I think I can just return it. Git has a type of any. Right. what was the, this, this is like when I have to
[00:50:10] , I should like refer to my cheat notes. But should I return to my cheat notes? Oh, it's, it's cause it's cause I'm being dumb.
[00:50:26]  It's because it's, it's cause of this. I'm so sorry. Ah, and an interesting actually add to do, doesn't belong here. Does it
[00:50:38]  you guys, you guys know rest, right? So get to do's. Oh no, actually no, it does. It's a post, right? Yeah. So
[00:50:45]  this is beautiful. We can go const post equals here. And what are we sending? We're sending the title in the post body. I actually, I actually,
[00:51:06]  I'm interested. I haven't used the API routes to do a post yet because, because of the next feature that I'm going to show in a minute. So we
[00:51:14] 're going to, we're going to actually figure out what we're going to do here. Cause what we get here is an event, which is a type API event from
[00:51:20]  solid start. You shouldn't need that type texture. Yeah. There we go. So we're, we're, we're going to get there in a second. Let
[00:51:29] 's first see if we can actually show the to do's properly, because we're going to go in here and what I'm going to do. What's the create
[00:51:36]  resource. To do's. And we're going to, and we're going to, we're going to, I think we're just going to call. Fetch
[00:51:53] . Where did I put it? API slash. To do's. All right. Let's do a little bit more here. This is fun. I've never done
[00:52:12]  this before. Like I haven't used these features, this feature in solid start yet. Cause you almost never do this, but we're being nostalgic. I'll explain in
[00:52:23]  a minute why we almost never do this. but I think you got to feel the, the, the, the process here to understand. What I'm getting at.
[00:52:38]  Cause. All right. I have to wait. I'm just trying to like force it in a way. Not going to let me do that. Oh, right.
[00:52:58]  It's not. Res is used before it's assigned. Is this because I'm missing like a. That may go. Okay. Do I get to do this? Does
[00:53:14]  this make everyone happy? Create resource. Quick fix. Okay. Sweet. Now what's, now what's wrong? All right. Yeah. Type script's great.
[00:53:30]  Now this whole submission logic is all wrong. We'll get to that again in a minute. What's wrong here. Oh, I have to actually return something. Don't
[00:53:43]  I? All right. You guys still here? Sorry. All right. All right. Did I cry? I killed the server while I was, while I was doing
[00:53:59]  this. Good to know that, that we can still do that. Okay. Our, our to do show up. Success. Yeah. Thank you. Thank you,
[00:54:16]  chat. Yeah. It's, it's, I've built these demos. I should be a master of these demos. I just, I, I usually have so much
[00:54:29]  of a starting point that I just copy and paste over and over again that I don't. And actually I don't build in type script 90% of the time. I
[00:54:37]  think like, I, I just, I, it's just not usually where I'm at. Okay. So that's great. Now we need to do a post
[00:54:50] . Right. I'm like now, you know what? I don't feel like doing a post. I'm just going to throw this out here. Do you know why
[00:55:05]  I don't feel like doing a post? And the reason I haven't done a post, like I can do a post. We'll make another fetch request and then we
[00:55:11] 'll, put a post a method post and put a body of Jason string, if I had the Jason to send the body and then we'll parse it on the other
[00:55:19]  side. And I think that your handles that are automatically for us. And then we'll add our to do, but eh, this seems like a lot of work, right
[00:55:30] ? So let, let's change this up for a bit. because yeah, this, this route API thing is lovely. And to be fair, you could go,
[00:55:42]  you could go use that. Um, I actually have a demo here where I do use API routes. Um, and I'm, I can show you very quickly what that
[00:55:50]  demo is because it uses a library. Everyone loves, um, trpc inside the solid start repo. You will see this example where if I go into routes,
[00:56:02]  API, trpc, I just create an event API handler. Like we just did fetch request a trpc end point, assign it to both the get and post
[00:56:13]  methods and tada trpc. right? So, you know, there, there is a use for API end points. It's for using trpc or
[00:56:26]  expanding an external API. But I, I found this all, I find this like a bit tiring to kind of type out, you know, you saw what I just had
[00:56:37]  to do. So, um, let's, let's not do that. Let's do something different. Let's, um, let's, let's, let's
[00:56:45]  go back to the drawing board again. Um, and instead, you know, let's pull this out for a second. Um, let's call it, what do
[00:56:55]  we call it? Let's get to dues. Const get to dues. Okay. Right. A little bit cleaner. I can see what I'm doing now. Um,
[00:57:10]  I, I kind of, I, yeah, I mean, this is all fine, but let's see, actually, do I already have a get to dues function
[00:57:23] ? Oh yeah. It's right here. Yeah. Yeah, yeah, exactly. That, that actually makes my life a lot easier. Right. Cause then let's,
[00:57:31]  let's, let's forget about this. What if we could just import get to dues. from our, from our, our server folder, right? Like what if
[00:57:45]  we were just like server to dues? Like, okay. What if we could just do that? And then maybe in here, we could just be like, guys, keep
[00:57:55]  this on the server. Right. and hopefully our app would keep on working. Yeah. See, we just fetched it from the server. So there we go.
[00:58:12]  When we're page loads, we fetch the service. Cause you remember, this is a client side rendered app. This is CSR. Right. Right. like there
[00:58:22] 's no SSR going on right now. This is just client rendered app, but I honestly don't want to set up an API endpoint. You know, like you saw
[00:58:34]  all the stuff I was doing trying to wire it up. I feel bad for you guys, but I had to, I had to show you the work. Sorry. Sorry
[00:58:42] , TRPC. I, I, I love, I love you, but do you know, what's really cool about this? Because I'm going to, go
[00:58:52]  into, you know, let's just delete the whole fricking API routes folder. Like we're done with that. You're, you're done API routes. What did
[00:59:01]  I delete? Shit. That didn't delete. I feel like I probably deleted something else. Let's undo. Would you like to undo create server? No. Okay.
[00:59:17]  What? What? What's going on? Okay. Okay. Yes. API routes are gone. Okay. Okay. Okay. What is use server? Well, use
[00:59:36]  server is a mechanism so that when we call a function on the server, it just calls the function. But then when we call the function on the client, it doesn
[00:59:48] 't, it doesn't need to be request. And it just looks at these exports to decide, you know, that make these calls. Now I could get fancy and I
[00:59:59]  could put you server inside a function scope and then like put that in the to-do app. We might do that a bit later. We might do that a bit
[01:00:06]  later. But I, yeah, I just wanted to, yeah, let's see if I can, because what do we actually want to do here? Right. We
[01:00:22]  want, we want to take, we want to, we want to take our to-dos and then we, what's this refetch? Yeah. And then what we
[01:00:31]  want to do is when we submit, we want to go add to-do with new to-do, right? we want to send it and then not new to
[01:00:49] , yeah. And then we want to go then, then after we succeed, hopefully we're going to refetch our data. Okay. Now, why is this complaining at
[01:01:00]  me? Well, we don't have add to-do. Okay. Let's add, add to-do here. Right. And guess what? Add to-
[01:01:07] do. It takes a string and returns a promise of this title and completed. Oh, that's interesting. So TypeScript just works out of the box, right? It
[01:01:16]  makes sense. You imported it. So this is why I had to say goodbye to trpc for a moment. trpc does amazing stuff, middleware, inter
[01:01:27] ception and all this stuff. Because you got to, you got to recognize something right off the bat. And I'm going to tell you right now, these are end points
[01:01:35] . If there is auth security or whatever, you need to take care of it. Luckily for you, all of these travel through solid starts middleware. So you can intercept
[01:01:49]  it and put off things on it. But you, it's still generally speaking inside the endpoint, you got to check, right? You got to be like, is this
[01:01:56]  user logged in? You know, the same way you would do any end point. So it doesn't remove all the work, but like, you know, it removes
[01:02:06]  it significantly. So like technically speaking, what I was just about to do was a lot more complicated. Now, I think this just works because TypeScript works. We don
[01:02:14] 't worry about parsing and then we'll just refetch. Right. So hopefully let's refresh for good luck, but I go high and I add it. Okay.
[01:02:24]  What didn't work? Let's try doing it again. Okay. I have an idea what's wrong. I don't like, unfortunately, I don't like what
[01:02:33] 's wrong here. Okay. So we have ID, hello, completed. Okay. And then when I put this, what do we get? We get a post.
[01:02:48]  huh. That's very interesting. Oh, do you know what the problem is? This is so dumb. I'm being dumb. do you guys see what the problem
[01:03:07]  is? I'm returning the new array instead of assigning the new array. Like we don't need to return anything for a mutation. Right. We just need to do this
[01:03:14] . Right. So what it was doing was returning all the data, but we just, we just need to do this. We need to set the new data. We don
[01:03:24] 't need to return anything for the mutation. We do it via revalidation. So now when I go, Hey, it works. next got it. Right
[01:03:41] . I, I it's, it's hard to fight react in terms of the convention. Like I realized this when I was talking to Jared from bun. He came to
[01:03:52]  me about a year ago and he's like, look, Ryan, I got server components working and server functions working, you know, in an agnostic way. That
[01:04:00] 's not tied to react, but he used to use server. And I'm like, we use server dollar sign. And he's like, yeah, but like,
[01:04:06]  basically I didn't want to go to every bundler and figure it out. In fact, Vinci project is based off of bun app, which is a bun concept that
[01:04:15]  I don't think Jared actually ended up releasing, but Nikhil took the idea of, put it on top of VEAT and ran with it. So yes, in
[01:04:25]  a sense, we, their syntax one, we may have been the first to do server functions, we proceed quick. We proceeded next JS, you know, by,
[01:04:35]  you know, several months, but I honestly, like with other things, react kind of ends up being like the, the, the, like the little details on the API
[01:04:47]  have a big impact, you know, on how the rest of the ecosystem moves. I mean, to be fair, solid signals way pre exist hooks by years and years and
[01:04:56]  years and years, but that change to the topple was inspired by react, like the, the array. so, you know, I think, I think it
[01:05:08] 's fair to say that sometimes because they make good, you know, micro decisions on the APIs, sometimes because the whole ecosystem, you know, is a customer familiar with stuff
[01:05:22]  means react has a lot more power in these decisions than maybe they should. but ultimately I'm fine if it gets us in a good place. There are trade-offs
[01:05:39] . Don't get me wrong. Server dollar sign is better for configuration, like sending options in. It's better for TypeScript. It's better for, like, there
[01:05:47] 's actually a lot of reasons server dollar signs better than use server, but I was not going to fight the battle there. It just wasn't one, you know,
[01:05:54]  I was talking about making things practical. The reason Vinci works like this is because Nikhil has react problems. You know, he, he was building his sites on R
[01:06:03] CS and next and next was way too slow for the build process. So he's like, I'm going to build my own next. So that wasn't slow. I
[01:06:08]  know next, I think 14 or recently at least made it faster again, but he had a whole year where he's like, I want to use the latest tech and next
[01:06:16]  is way too slow. So he built it and he built the server function functionality in an agnostic way. So I was like, okay, let's use it
[01:06:22] . I mean, to be fair, I could have converted it again to a dollar sign, but why are we doing this extra work when the stuff's already out there?
[01:06:29]  I, you know, same way JSX, you know, anyways. the server doesn't allow to have a different client code in the same file. Yes. And
[01:06:48]  so does use server to be fair. I mean, I didn't do that here. Cause like, this was just so easy. Right. I just put this here,
[01:06:55]  but like, I can do this too. And now I think if I go like this, I got to see this high on client. it's on the server
[01:07:15] . Interesting. So maybe our tree shaking is incorrect. No. Okay. Yeah. Sweet. See. because it gets important in both places. Cause that's a run
[01:07:32]  the function. But if I move this up here, my own client should not run in the browser. Hopefully it doesn't. See, it's only on the server.
[01:07:45]  Right. So yes, we didn't go all the way to, to what reacts doing our, our server functions are more are like our existing server functions where they can
[01:08:02]  work in the same file for your CSR. By the way. Yeah. We haven't talked about reacts server components or solid server components or anything. I'm still just
[01:08:12]  building client side apps with an API endpoint at this point. Right. We, we're not there yet. I just wanted to show you. We haven't SSR to
[01:08:20]  a single thing today. This is just, this is still create react app. Sort of. Okay. Okay. I'm just trying to catch up on chat, but
[01:08:39]  you guys go, go way too far for me. Yeah. All right. So basically the whole point of this little piece here is same old server functions, the same
[01:08:59]  thing you guys have been using for over a year. Next came out after, but you know, they're obviously more popular. So we changed our syntax to match theirs
[01:09:11] , but generally speaking, same thing we've been doing all along. Okay. Okay, cool. So yeah, this high on the client does not run now. so
[01:09:24]  well now we have routing. Now we have simple to do's. We have API endpoints. We can do them the traditional way or use, use server functions. What
[01:09:35]  are, what do we need next? Right? Well, one thing you might've noticed so far, and I mean, you probably haven't, cause we didn't
[01:09:44]  spend any time on the network tab is that if we look at our JS, Oh, you can't see it. It's a fricking dev mode. Okay. Let
[01:09:54] 's, let's build our app. We haven't built our app for a while. So let's go PM PM build. And then PM PM start. Okay. We
[01:10:10] 're going to do production app now. Okay. Now you see this one client JS. And when I go to to do's, I go home the same because even
[01:10:20]  though we haven't any, um, well, this, this client JS is, is much bigger now. It's 16 kilobytes because it has the router. It
[01:10:30]  has, um, server function capability. It has resources. It has, it has some stuff, right? Um, you know what actually I didn't do, although it
[01:10:42]  probably should have been, and we missed one thing on our, in, in our async example here, it's not going to matter because our to do's load
[01:10:49]  really, really freaking fast, but we probably in our app around our routes here, probably good idea. Just to throw a suspense boundary in here. I mean, it
[01:10:58]  doesn't really matter because we're not server rendering. Nothing's waiting, but you know, when we first load the page, the, the to do's aren't there
[01:11:08]  yet. Right. Um, so let's, let's go. What should our fallback be? Fallback equals. Whatever loading. Okay. Whatever. We'll
[01:11:22]  probably never see it though, because of how freaking fast it is. Oh, right. And this, I'm in server, I'm in build mode, but the reason
[01:11:30]  I want to show this is usually you don't load your whole app. no matter what page you go to, you need to add code splitting to your routes. So
[01:11:37]  let's go back to our app. Our app's pretty easy. We have this. If we want to code split these, well, you know, this also is not
[01:11:45]  too hard. We can go, um, const home equals lazy. And then we can go import. This. quick fix. Importance LJS. And then
[01:12:08]  we can do the exact same thing for to do's. To do's. And now when I build this, and start it. I'm hoping I see the main
[01:12:37]  entry. And then I see a little one for, for home and see, it's only 13.4 kilobytes over that, which is still locked to the router
[01:12:44] . But then when I go here, well, we have, you know, a little bit extra for the server function handling and the more heavy page, it's got like
[01:12:52]  data loading resources and stuff. so you see that we, we only needed to load the stuff, you know, on the routes that we visit. So that, that
[01:13:03]  is how we get code splitting obviously with our router. Um, but there's, there's like a small little problem here, because let's see if, if I,
[01:13:15]  if we can see the problem, it might be hard to see the problem, but when I go here for the first time, Oh, it's hard to see the
[01:13:28]  problem. Can I see this? Okay. Let's see if I can see it by going fast. Like my dev tools just can't be big enough. Maybe I
[01:13:41]  can try to, what I want to show you guys here is. Should I just like record the, should I just record? let's just record a timeline here.
[01:14:02]  Let's just go record. And then go to to do's and stop. Um, I'm really like not seeing anything. Oh, here it is. Okay. It
[01:14:17] 's like, almost like I got my dev tools so blown up that I'm not actually seeing the, the events. I'm going to like trying to like snoop
[01:14:34]  in on like one very specific interaction. I'm not going to see it here. Um, there's a waterfall. Um, because if you look at our code,
[01:14:46]  we were sitting on home, we navigate to to do's the code for to do's hasn't loaded yet. So it has to go load the code for to do
[01:14:56] 's. So it has to go load the code for to do's get that back, then load our to do data. So we, we, we, we do a
[01:15:01] , there's a cascade. We wait for the JS and then we do the data fetching. So it would be nice if we could actually fetch the to do's
[01:15:11]  for the page before we fetch the code to parallelize it. Now our to do fetch is pretty fast as is our other resource. So I'm like, not being
[01:15:21]  it here. like I would love to see the JS load in. I it's probably cause the caching, I'm not seeing it, but like when did the
[01:15:36]  JS load in? Why am I not seeing the JS here? This timeline should have the network timeline should also have it too. We should see the, if I go
[01:15:57]  home, I mean, it's so fricking fast anyways, in this example, but like these cascade these, these two events cascade, but we want to, we want
[01:16:08]  to hoist it. So one way we can hoist it is if we go back into our router, we can now go to our to do's and go, let
[01:16:16] 's add a data function. Okay. Keep in mind, you guys, this is not the current version of solid router. I'm using the old version of solid router.
[01:16:23]  I just want to show you what I'm doing here. But our data function, let's say it's to do's data. we need, we need to
[01:16:35]  get that. And it's, you don't want to part of the lazy loaded. You want it part of the main route route. So we need to go get to
[01:16:43]  do's data. Right? So we need to get that from where are we going to get that from? I mean, I mean, generally speaking, classically,
[01:16:54]  I do stuff like pages. Maybe we can get it from, yeah, let's, let's try this pages slash to do's dot data or something. That seems reasonable
[01:17:06] . And then because for code splitting reasons, you don't, you can't be part of the to do's page. It has to come in a separate bundle.
[01:17:13]  So we're going to go to do's dot data dot TS. Okay. And then right now this is actually this function, but like, I'm just pretending like
[01:17:24]  we had to do more here, like maybe get parameters and stuff from the route, you know? So we're just going to go here and go what export a function to
[01:17:34]  do's to do's data. And this is, this is a router load function. And then we're going to return actually, you know what? we're going
[01:17:49]  to move this whole create resource call into it. So we're just going to do this cons and we're actually just going to return this quick fix. So as you can
[01:18:09]  see this, this has some client side code get to do's. We're going to get from there. We're going to quick fix. This one as well.
[01:18:19]  So we have our data function that is not part of our components. It's not part of the same thing. And then here we can do like use route data.
[01:18:29]  And here it's okay. If it references it, let's move, get to do's to do. So what we're actually going to do here is import.
[01:18:47]  What is it called? What did I call this to do's data? Yeah. Import actually to do's data. we're going to do's data. And then
[01:19:04]  we're going to go, this is type. was it return pipe. Was it return pipe? Type of, of to do's data. Quick fix. We'll
[01:19:23]  get that from the router. Yeah. Are these to do's? Oh, okay. Okay. So now what will happen is when the router, um, loads,
[01:19:44]  let's see, did I get the app right here as well? to do's data. Yeah. Okay. Let's, let's, let's see if this
[01:19:50]  still loads properly. What will happen is, and we'll go here first and we'll fetch. What'll happen is the server call. You can actually see the green be
[01:19:59]  in the same spot, the server call and the to do's call. Um, so, so they get the JavaScript and the, and to get the server call happen in
[01:20:07]  parallel now at the same time. So this is just something built into the router to enable parallelized fetching. And you might be like, why bother doing that in
[01:20:18]  the router? Well, it's important because if you have nested routes and you don't only show them conditionally and stuff like deeper in you, you, you need
[01:20:28]  the code to show the outlet. So like, if you want to hoist all the fetching up, you have to at least define it above the route level. You
[01:20:35]  can't just stick it in the page components because nested routing won't run until it goes to render the next section. So hoisting is very, um, very
[01:20:45]  important. And this saves us, now, because we don't have the waterfall. We aren't waiting for the JavaScript to load, to fetch the data for the next
[01:20:53]  route. So this is very, very, very common. As I said, we're still in, um, our CSR app. Uh, but honestly, I
[01:21:03]  don't want to do this every fricking time. Uh, you know, I don't, I don't want to do this every time. Do you want to do
[01:21:11]  this every time? do you want to code split it, do you want to code split it, create the function, create a separate file to figure out, uh,
[01:21:18]  you know, how to do it, to hoist it, to get the kind of performance you want. I don't want to do this, but all people love
[01:21:24]  the fetching components. Yeah, I know. And all people are wrong. It's, it's, it's simple. Uh, you, waterfalls are unavoid
[01:21:34] able when fetching in components. This is like, there's, it's very hard to avoid them in all cases because layout concerns and data concerns are different. It
[01:21:44] 's that simple. But this feels cumbersome, right? So let's not do this. Let's not do this. Let, let me show you a little secret
[01:21:57] . Can I show you a little secret? I'm going to take these routes. No, I'm going to take these route definitions here. Okay. And then I
[01:22:08] 'm going to console.log them. Okay. Um, we'll just make a second copy of the routes. It doesn't, I don't think it really matters because
[01:22:16]  they're never going to get instant, never going to get instantiated. So we're just going to, I don't know. We'll just make a, an
[01:22:22]  array and we'll put these two in here and put a comment between them. Okay. I want to show you what routes look like in solid router. So hopefully now let
[01:22:32] 's go back to dev mode so we can see my updates. And. when I refresh, you're going to see, it doesn't really matter server or client.
[01:22:41]  We're going to see. Children undefined component props, path, this, um, quantum props, data function, this, you know, that's funny to
[01:22:55]  use data. It's because of solid refresh. Uh, it actually should. I wonder if this actually makes a difference. Do something. it didn't actually make a
[01:23:14]  difference in this thing. It's just curious. If this changes, what's, what's going on. Did I miss, did I forget saving in one spot?
[01:23:27]  there it is. Oh, there we go. That's better. Okay. Yeah. So, uh, the, the heuristic around what's a component is a
[01:23:41]  little bit tricky with solid refresh. Anyways, my point is you can see that these are just config objects. This JSX just creates configuration objects. Okay. So.
[01:23:57]  Yeah. Yeah. I, this pattern that we're showing here, ironically, it pre-exists remix and they're loaded. pattern by over a year, but
[01:24:16] , um, it was very influenced by the same thing. Remix and us basically got our influence from Ember and Ember router. Um, and essentially, uh,
[01:24:37]  I've been using this. My first router had this kind of pattern way back in, uh, I think 2014. Um, so, but like we've been doing
[01:24:47] , we've been doing versions of this. What happened with react routers, they had something like this up to react router three, and then they got rid of it.
[01:24:54]  And then they brought it back in react router six, ironically. Like, this is where we started like 10 years ago, but then everyone's like, Oh, let's
[01:25:02]  just fetch in the components and not define our routes high up and just do stuff all over the place. But then we added code splitting and stuff got bad again. And
[01:25:09]  that's kind of how we ended up back here again. Um, but yes, anyway, uh, yeah, this is a lot of work. So what are we going
[01:25:19]  to do? Um, well, one thing we can do is delete everything we just did. Can I delete all that? Yeah, I can. Yeah. Let's
[01:25:35]  just delete everything we just did. Yeah. So what if instead of doing all of this, we, uh, we just went, let's get this, the routes from
[01:25:50]  a file system. We did this. And then weird completions. I mean, I could show you, we'll, we'll, we'll take a look in
[01:26:06]  a minute, but we'll go file routes. Right. Um, let's console log this again, file routes. And we'll, we'll see what we're doing
[01:26:18]  now. What are file routes? Well, I'm just going to rename this folder from pages to routes. And I'm going to grab this data function here. Okay
[01:26:31] . Fortunately, I think I have to grab all this again. I'm going to go back into our to do app and I'm just going to go export const route,
[01:26:39]  which is just a route config. And then we're going to bring this back up here and we'll worry about reconciling this stuff in a minute, but we
[01:26:51] 're going to basically in our route configuration, we're going to add a data function here. And yeah, what am I missing? There was an extra format. And now
[01:27:07]  we don't need this anymore. No to do is dot data. We'll just stick it in the same file. Cause we don't have to worry about code splitting
[01:27:14]  with the file system router. Great. And type of what route data. And then what is this? What's my, what's my satisfies route. I think this
[01:27:34]  for this version, partial of route definition is what we need. Cause now we will know that, that our data function, like we will know what these parameters are. So
[01:27:48]  there we go. And I think, I mean, does this just work? Yeah. Oh yeah. Yeah. Here's our file routes. Now console logging. You
[01:28:07]  see, there's a few more, there's some more information on the route definition, but our file routes component again, is just a config object. So honestly, as
[01:28:18]  long as you know how to, to handle that config object, you know, you're good to go. So you could just call as a function, do a little wrapper
[01:28:27] , you know, have your own router with your own conventions. I don't really, it doesn't really matter. obviously these are keyed to solids conventions, which
[01:28:36]  is like component equals a path equals, but you could do that. But now we don't have to worry about lazy. Lazy happens automatically. We don't have to
[01:28:44]  worry about code splitting happens automatically. and we, you know, we, we get this, it's a little nicer, a little less imports. We can do that
[01:28:54] . And actually, just to prove that this still actually works, let's just build it and run it for real. Right. and start run it network. Interestingly enough
[01:29:12] , we're getting a little bit more JS here, but let's see here. Okay. So here we have this. All right. Cause I didn't put GS only
[01:29:21]  filter. It looks like they chose to split the bundle a bit for some reason. Oh, interesting. Did I lose home? Oh, do you know why I lost
[01:29:31]  home? Because home doesn't follow the convention because it should be index, right? Slash home would work. So I did have to change one thing. And in
[01:29:41]  solid, if you want to name your index file, just put it like this, then you don't have to worry about, um, about that essentially. So let's
[01:29:51]  do this again. Cause I could just make this index, you know, because that's what it is. It's the index, but we can also do that. And
[01:29:59]  now home works. We have the JavaScript for home. And then when we switch, we'll get the new JavaScript for the to do's. Okay. That, that
[01:30:18]  that's, that's, that's essentially it. Code splitting still works. Parallelized fetching still works. Um, and instead of doing all that work we
[01:30:27]  did for the last like 20 minutes, you literally just put in a file with the right name. Um, and we're there. Okay. Yes. Yes. Very
[01:30:45]  much inspired by refused. Yes. Yeah. I mean, it's funny cause Sapper had isomorphic data fetching and they had it earlier, except then they
[01:31:03]  went to like adding server prefixes for server specific stuff. We don't, we don't have that. Right. You can, you can just stick the server stuff wherever
[01:31:13]  with you server. Um, but because the data loader runs on both sides, but the biggest difference, I guess, technically speaking is this is like SvelteKit
[01:31:22]  in that. I think SvelteKit has a CSR mode. We haven't done any SSR yet guys. I'm sorry. I know you guys are
[01:31:28]  probably expecting SSR. We're an hour and a half into the stream and we have not done any SSR yet. Um, how does the data function get code split
[01:31:36] ? Well, I wonder if we can see in dev mode, how that works. Let's look. cause it's because of the router. Um, it's the
[01:31:48] , it's because of the way that Vinci has configurable file system, routing system, the routes we actually got back that it's console logging actually tell the whole story
[01:31:57] , but let's see if we can actually look at the transformed source code here, because if I'm right, to do's we'll have the page component. There it
[01:32:09]  is. Some, and then there will also, and you see that there's no route data here, but then if I go into client, oh yeah, I guess
[01:32:23]  it's getting bundled together. We're probably not going to see it. Cause what are we looking for? Um, is it client or web? Okay. Maybe this
[01:32:32]  is less obvious to sing, but Vinci lets me configure, um, exports from the file and then they get created into virtual modules. Automatically. Um, yeah,
[01:32:45]  but my, the important thing to understand is that the function is isomorphic, right? So that essentially this runs on the client and on the server. If you're
[01:32:56]  doing SSR, um, um, in fact, honestly, in this, at this point in the progression, this is when SSR actually kind of started because we
[01:33:12] , why did we code split and go through all that hassle? I've been trying to show you the progression so far because we started with a simple app, create react
[01:33:21]  app. Then we added a router cause we need pages. And then we added data fetching because you know, when you go to different pages, you can't just serve
[01:33:29]  the same data every time you need, you want the update. And then we code split, but why did we code split? Well, it was because our app was
[01:33:36]  getting too big. We were loading all the JavaScript at once. And we're like, Oh, this slows down our page. Um, then, you know, we had
[01:33:43]  to do all this wiring because the performance got worse because now we had all these waterfalls. And then we're like doing this wiring sucks. Let's use a file
[01:33:52]  system router. Right. Um, but even with the file system router and the server functions, the prevent the, the waterfalls, everything compared properly for you, the initial
[01:34:01]  page load might still be slow because you're waiting for the, you request, you hit the server, get the HTML file back. It has a script tag on it,
[01:34:10]  which goes and gets the JavaScript, get that back. Now you've rendered the page, go to the server, get the data. You see that we, we went to
[01:34:17]  the server three times. in a client side rendered app in, in, in cascading waterfalls. What if we could, and until that last one comes in
[01:34:26] , we're not going to see the content of the page. What if we could render the page initially on the server? So on that initial HTML, we already can see
[01:34:34]  the page and then, you know, you know, let stuff load in as it's ready, which is, you know, pretty fast, but we want to do that
[01:34:43] . Well, the answer to that is really quick, easy. Okay. Now we're done. Now we're server rendered. So our create react app is now a
[01:34:52] , well, maybe I got ahead of myself. Ha ha ha. First bug on the stream. We knew we were going to hit, we were going to hit some.
[01:35:03]  Um, ah ha. Yes. I know what this is. This is something that I haven't backported into the, into the, the new, the new
[01:35:20] , the old router. I just added this yesterday. Give me two seconds. We'll, we'll, we'll just bypass the module preloading on the old router
[01:35:27] . two seconds. Do, do, do, do, do. Sol JS start server, server, start server. Do, do, do, do, do.
[01:35:38]  Do. We don't need any of this. Comment down. Beautiful. Sorry. I was like literally merging PRs this morning. Okay. Back to my, back
[01:35:51]  to my effect. You just click server render true. And now when we look at our network and we look at our, our response here, let's get our doc.
[01:36:05]  Let's, let's go, let's do one with a little bit more content on it. And we look at what's in our response now, you know,
[01:36:11]  besides the next scripts for the dev mode. What you're going to see now is we actually have server render content. Our div app is not empty. We are server rendering
[01:36:22] . We are hydrating. Everything works. And all I had to do was flip a switch. So are we went from our CRA app to basically like this right here
[01:36:46]  is kind of like solid start is today. Right. It's Svelte kit. It's next 12. It's like, I mean, I mean, plus
[01:36:54]  server functions. It's like if next 12 had server functions. Like this is kind of where web app development has been for years. But the, the jump from CRA
[01:37:08]  to that can happen by just hitting a switch. Why is that? Well, lots of reasons. And if you don't believe me, I mean, the first benefit
[01:37:26]  you can see right away. Once you want to see the first benefit right away. Let's look at the network fetch calls. When I refresh the page, there are
[01:37:37]  no server calls. We, you know how we, when we load the page, we have to get the to do's. How is this hydrating? And we don
[01:37:47] 't have to fetch the to do's. Oh, I know what's going on here. This is why I use a file system store. Sometimes when you have a dev
[01:37:57]  server, you get different versions of memory between the HMR. it's you should use a real database. You'll never have this problem. But if the persistence is
[01:38:07]  in the JavaScript code, weird stuff can happen. Okay. We won't worry about that too much for the second year. What, what I'm getting, what I'm
[01:38:18]  getting at here is the reason you didn't see that initial server call is because solid fetches it on the server. It serializes the data into the JSON on the page
[01:38:31] . And you're like, okay, that's great. next does that too. Right. But you know, everybody does that. But the, the key part you
[01:38:37]  have to understand here is that because you use resources in solid, you know, like that, that create resource call that we were, that we were doing, where's it
[01:38:51]  in here? Solid automatically knows how to serialize. And luckily for everyone, because we have data fetching with suspense and everything built into the framework. if we go
[01:39:01]  and we change what this create resource call is, like for say tan stack query or something, it will also, it uses create resource under the hood. So it also automatically
[01:39:12]  handles data serialization and streaming and all the features. just all these features just work because they're built on top of this primitive. So turning on SSR is trivial
[01:39:24]  because you don't have to change how anything works. You already wrote it the right way to enable us to do it because we know, okay, we don't have
[01:39:33]  to refetch it in the client. We can just take the serialized data on the server. We can render runs to the server. So you, you already get your
[01:39:41]  optimized data fetching with basically every library out in the solid ecosystem. So, and I'll show you what I mean by that in the next section here, but you
[01:39:54]  can see that we didn't have to change how our app worked at all to change it to SSR because just server rendering initially and handling that handoff of data serialization
[01:40:04]  is built in to create resource. but okay, that's pretty good. Let's talk about. Let's talk about. Yeah, actually, you know, toggling
[01:40:27]  is features. Cool. Next cannot do this. I mean, this is why I'm talking about this because I think we figured out the right boundaries. I think that
[01:40:36]  we, we are building towards the shape of frameworks to come. That's where the title of the stream came from. Of course, there's more. There's always more
[01:40:46] . Okay, let's, let's keep on going. I want to show this in practice to you all because the truth of the matter is I was really happy with this
[01:40:54]  data routing pattern for like 10 years, but it changed. Right? Data patterns change. You know, I, this is a stink. I got to thank Theo Brown on
[01:41:04]  this side. you know, T3 Theo. He gave us a half point on our type script because our actions were really good because we could do this, you know,
[01:41:13]  but he's like, what is this freaking garbage return type of type of route data? Like this sucks. And the reason we have to do it is because we want to
[01:41:23]  paralyze their data fetching and then you got to hoist it up. And you know, I went on a stream and I was really happy. I was like
[01:41:29] , Oh, create server dollar sign action, whatever. And I'm like, this stuff is so cool. Everyone's going to love it. And he gave me real hard
[01:41:36]  feedback. You know, he's like, this is confusing, which functions, the server function, which I think we've addressed now by removing all the special dollar signs.
[01:41:45]  there's just like the one use server. And he, he pointed out that, you know, TypeScript wasn't the best. So I was like, okay,
[01:41:52]  let's go back to the drawing board. How do I, how do we enable the future of everything we want to do? Well, it actually turned out we have to
[01:41:58]  change the router. So how do we change a router in solid start? Right? How do we change the router? Oh, right. We just install a new one.
[01:42:06]  Why not? Let's, let's, let's, let's do this. PMPMI. let's get a new router because solid start isn't tied to
[01:42:16]  a router. We don't actually, we don't actually, you know, care which router you use. There's a, there's a couple interface points. Like the
[01:42:24]  one that I just aired out on us. Remember when we went in here and I was like, Oh crap, I know what I did wrong. You know, these things
[01:42:31]  need to better, uh, um, gracefully, you know, there's a couple interact points that need to be documented. The couple places like this is for adding
[01:42:44]  the, um, link preloads for the JavaScript in the header. Um, we, we're using a shared context thing. So if you go in here and you
[01:42:54]  write to that shared context as part of your router, then you will be able to get preloads. So there's like a couple things like that, but for the
[01:43:03]  most part, the, and this should just not like, basically if this doesn't exist, like we should just have a check here. That's like, does this
[01:43:10]  exist? If not like this, this is just bad coding. Like it should be like, like, you know what I mean? Like null check it. Um, but
[01:43:22]  what, what I'm getting at is let's forget about internal solid start code. Now that I've got a new router, let's just change how the routes work.
[01:43:32]  So first thing in the new router is the setup's a little different. There's no routes component. And in fact, if I let's, let's do the
[01:43:42]  old restart typescript server. Cause this is like, it's so funny. What is it? Or was it? It's not restart. What is it? Relo
[01:43:51] ad restart TS server. Yeah. Something I've never used so much until recently. Well, um, you can see that there's no routes component. So I'm
[01:44:02]  going to, right now, we're just going to update our app to the new router. And guess what? The new router doesn't need capital A's. So yeah
[01:44:09] , different convention. Like, yes, I need to go in and I need to change it. I mean, you can use the capital A, but that's not how
[01:44:15]  it works. There's no routes component. So the way the new router works is we're going to go here. It's got a, it's got a different
[01:44:28]  API. It's, it's a different, it's kind of like a different router. We're going to stick the file routes into here. And then this goes away
[01:44:36] . And then there's a root component we're going to use, and it's going to have props. And I'm just going to, what is it going to be
[01:44:50] ? It's going to be, give me a second to do the refactor here. but this stuff can go inside the root. It's, it's a,
[01:45:04]  there's reason for these design decisions. I won't stress them too much. You can read all about them. I might even talk about them more, but okay, here
[01:45:13] 's our new, our new router has a different API. our follow routes still go through, but there's, there's, there's another difference in our new router
[01:45:22] , which we're seeing right here. Our new router doesn't have a data function. We, we changed the mechanism. It wants to use a different data fetching mechanism
[01:45:29] . And the thing is use rough data doesn't exist anymore either. So we, we got a little bit more work to do to change this, but Tyscript
[01:45:42]  told us. And in fact, that our new router has a load function that is very similar to the old one, but we're going to use some of the new router
[01:45:50]  patterns here. we're going to call get to do's here and I'm going to get rid of this. We're going to go create async, which is
[01:46:10]  a new primitive from the router. Create async. It's, it's basically a resource and it's just going to return to do's. And what, what
[01:46:25]  do we want to do? We want this async function to, I guess it's just get to do's right. Okay. And no refetch. I'll talk
[01:46:36]  about how we do mutations with the, with the new router in a second. But yeah. Okay. This should work. To do's here. TypeScript works.
[01:46:54]  That's good. Create resource. We don't need any more. We'll worry about add to do in a minute. Okay. So let's see. Did we convert
[01:47:01]  to the new router? Did that successfully work? Looks like it. Okay. So we just switched, which router essentially was in solid start and it still works. It's
[01:47:16]  basically a different router, but because it can understand the file routes config object. Now we're in a different world. And what's really powerful about this is because it
[01:47:28] 's a hybrid of routing approach. You can like, basically we say that this is your component, but then you can set whatever other fields your router supports in a config
[01:47:38]  on your route. We can support whatever your router is like tan stack router. I believe has a load function. You can just put it in here. And then if
[01:47:48]  there's a solid version of tan stack router, go for it. Right. So we are not tied to the router. That's why I started with a five kiloby
[01:47:58] te solid demo, because I wanted to show you that solid start is not a route is not the router. You know, there's a file system router in here,
[01:48:05]  but you can, you can, you're not tied to, you know, like Tanner has written an amazing router. I think when there's a solid version, a lot
[01:48:14]  of you guys are going to use it with solid start. You might not use a solid router. Maybe we can merge our efforts and that would be even better. But my
[01:48:21]  point is because you're using solid start, it's not like you need solid start router. it's not like remix or next or any Svelte kit in,
[01:48:30]  in, in this way. Like this is on one end, low level, just, you know, create react app. So let's, let's keep on going.
[01:48:41]  Well, there's a problem here. Thank you. Thank you, Dave. It is doing something. In fact, it's doing too much. It's actually fetching
[01:48:55]  twice. Uh-oh. What's going on here? It's, it's fetching. Yeah. So we, we, we got a problem here because the
[01:49:11]  load function is calling get to do's and create async's calling get to do's. And. Well, I mean, the first question is what? Like we
[01:49:22] 've, yeah, we, we've got some, we've got some issues here. I'm actually kind of wondering why create async is calling get to do's.
[01:49:29]  Cause by my best estimation, create async should not be calling get to do's. Well, we'll, it's possible that we'll see what's going on in
[01:49:39]  a second. you're using use effect. So, but my point is, yeah, I was expecting multiple fetches. Like stuff is, this is not quite right
[01:49:55] . This is. So what do you do in this situation? Because we could get rid of the load function. Right. And if we get rid of the load function
[01:50:06] . Why is this doing this? Let, let, let me just sanity check that this isn't the problem. I want to, I want to see what's going
[01:50:32]  on here. Interesting. Okay. I'm going to have to look at that. I, I, I'm actually not sure why we're even seeing any here. Cause
[01:50:46]  obviously when we change page, we have it, but this should actually be getting caught up by the resource serialization. it should not be fetching again on the client
[01:50:57] . We'll, we'll look at that in a minute. But the, what I want to point out here is you can always not. do the load function.
[01:51:09]  But the problem is if you don't do the load function, you aren't going to have that hoisting and link preloading, like hover preloading,
[01:51:17]  isn't going to work. The reason we switched to the new router, let's say is because we want hover link preloading. Um, I didn't show it
[01:51:25]  here for an example, but if I go back into this and I add this back and I hover now I'm on the, let's go to the homepage and I
[01:51:44]  go to network and I hover over to dues. It's pre-fetching the data for the next page for me. Right? So, you know, this is
[01:51:52]  why we want the load function, but now we have, you know, a different API constraint. We want a cache. And the reason I, I, I I
[01:52:00] 'm, I'm mentioning this in an example is I want to, I want to pull up, uh, another repo example for you. We'll go back to what we
[01:52:07] 've been working on, but let's, uh, open up a file new window. Let's open up. Let's hope I actually have it on here. Followed
[01:52:22]  hacker news. Yeah. Beautiful. Okay. We're going to grab a specific, fork of solid hacker news. Solid. I, I haven't updated solid hacker,
[01:52:35]  solid hacker news for ages, um, until very recently. So this, this branch is probably way out of date. Let's pull, let's pull Netlify.
[01:52:44]  All right. Where are we? Okay. Yeah. Well, to make my point here, I implemented hacker news using the new router with 10 stack query. Um,
[01:53:05]  all right. This is all like close all that. Okay. That's PMPM. I, I, and all I did was I set up, that's
[01:53:24]  my fetch API. And then I set up a new query client from tan stack query. And then in my routes, like we were just doing, I, I just,
[01:53:34]  in my load function, query client, prefetch query. and then inside here, create query with the right query keys. So this pattern that, that I'm showing
[01:53:48]  here doesn't require a native, um, fetching pattern because the combination, the auto serialization, the resource, the fact you can use server anywhere means that you can
[01:53:59]  just put in whatever data fetching mechanism you want for caching. Right here. We're using query and then we're using tan stack to prefetch the query.
[01:54:07]  And if I run this, hopefully I'm safe to do it on 3000. I am. And I reload our page. You see, you see, you see, actually
[01:54:21]  you saw the streaming work there, right? With the loading coming in. Um, and yeah, we have the prefetching on hover from tan stack. Um, so
[01:54:30]  this, this is just, like tan stack actually feels the query feels almost native here because you like, you could picture using, if you really liked the tan stack app
[01:54:42] , using tan stack router and using tan stack query because like the same data patterns apply here. Um, right. This load function lets you ensure your cache and then you click
[01:54:54]  on it and your data is there. Um, obviously not everyone is going to use tan stack, but this is, this is just an example of how you could take
[01:55:04]  a hacker news example and use tan stack, right? I took the same hacker news example. And I used solids data APIs. And if I do that and I go
[01:55:19]  to, yeah, this one, you can see it's very similar. Um, it's, it's, it's a little bit different. Solid's new start
[01:55:30] , uh, router is new, sort of not router start solid routers, new API. Well, we just wrap your fetcher in something called cache. And then
[01:55:39]  we give it a key and then you can call that function multiple times and it's only going to get called once. This cache lasts the request on server rendering. And
[01:55:50]  it, um, it lasts, it's kind of like a navigation preload cache. It doesn't, when you go back and forth in pages, it basically lasts for
[01:55:59]  five seconds, just long enough to do preloads. And then it exists as a back cache for browser navigation to make sure that the content is still there. But
[01:56:08]  generally speaking, this is, this is a very, um, non-invasive cache. It's not there to like be like stale or revalidated.
[01:56:18]  It's not long lived. It's super short lived. But if you want a longer lived cache, use HandStack or use a different caching solution. This is
[01:56:25]  basically a default solution to do it. You just take, this could be your server function, take whatever you want, just stick it in the cache, call it,
[01:56:34]  you know, in the load function, call it again in your create async call. And then we're good to go. Um, I can show this in action here
[01:56:44] . Uh, let's see. Yeah. Streamed in. When we hover, we get the preload. We go to the next page, go to the next page
[01:56:56] , hover back. We were just there. We still have it in our cache, but you know, if we wait a little, longer than five seconds and everything's
[01:57:05]  fetches once. And then when you do your initial render, no data fetching because it does it on the server properly. Yeah. Um, yeah, I'm actually
[01:57:16]  kind of curious what's wrong with our example, but, um, let's, if I was to take our example here to use the new, the new router,
[01:57:24]  uh, the new router stuff, let's stop this one here. This is the solid hacker news. but if I was to take our thing that we've been working
[01:57:35]  on to do this, I would take this, get to dues. And then I just go, you know, cons. I'm just going to do it here.
[01:57:46]  I could do it in the other file and then put the use server inside the function, but I'm just going to go get to dues equals cash, get to dues
[01:57:57] , um, to dues. And then quick fix. Again, you don't have to use this API. it just makes things nice. Um, because this cash,
[01:58:17]  um, it can be, it can be referenced at other places. It basically uses the arguments you pass to the function as cash keys. And then you can like, like
[01:58:28]  get, you can go get to dues dot like key for, you know, whatever the argument is here. This doesn't take any arguments, so I can't show you
[01:58:36] , but if it, you know, cause if I try to do it, let's type triple arrow, but basically it uses a combination of this plus the arguments as
[01:58:45]  a way of setting the cash. Um, we're going to talk about invalidation, the cash in a minute, but I just wanted to kind of show this in action
[01:58:57]  because we should be able to now. We load our app back and go to dues. Yeah. Interesting. With the cash, it's working properly where it's not
[01:59:12]  double fetching. I got to look into that. Create a sync should work on its own. But my, my point is that, um, yeah, this now only
[01:59:21]  fetches once and not at all on SSR. And, um, this gives us that powerful ability to do preloads. see already loaded the data for the
[01:59:32]  next page. So, you know, different router, new data patterns. What's cool about the, the cash is actually that we also have, um, the other side
[01:59:44] , right? We can do invalidations. we can, I'm going to do this as at. Um, we have const. I'm going to put it here
[01:59:53] . We have something called actions because server functions are just functions. But if I want to do a mutation or something, I can make add to two to do equals an
[02:00:03]  action of a T and, um, this will be fine. Cause it's a server function. Let's, let's, let's quick fix it. Cause I'm
[02:00:13]  missing an import. Beautiful. And now, I mean, the first thing with an action is I can just call it in our submit here and I don't need this ref
[02:00:25] etch anymore. Um, um, when I do this, this should just update right away. Um, but we have a problem. What is our problem? I saw
[02:00:37]  an error flare out. Oh, sorry. I missed this myself. This is my fault. If I want to use an action inside a component, we need to inject the
[02:00:56]  router into it. So we actually, sorry, we actually have to call. Use action. Um, my bad. So let's go here. Const. Um,
[02:01:05]  what if it's called add to do equals use action. Add to do action. I'm going to do it like this. We're going to name this one.
[02:01:16]  We're going to name this one. Add to do action. Sorry. My bad. Um, now when we do it, our ghost, uh, our ghost data is
[02:01:30]  still in somewhere in there. That's funny. I think, Oh, it's because of the bacteria submit. Okay. Okay. Okay. Sorry. HMR.
[02:01:45]  If you use real databases or file system stores when doing HMR, otherwise weird stuff can happen, but you, you, you see that it's doing the updates automatically,
[02:01:55]  um, thanks to the action. Um, so yeah. And what's cool about this API is this add to do action can be used to do optimistic updates, right
[02:02:05] ? So what we could do is we could go const, um, adding to do's and we can go use submissions for add for our add to do action. And then
[02:02:25]  now we actually have the submission. So what we can do actually, which is kind of fun is in our list, we can, we can, we, I think
[02:02:42]  we can just go adding to do's. And then I think it's just the title that we have. Right. What's this title? Oh, right. No
[02:02:57] , no, no, no, no, no, no, no. It's, it's, I'm going to call it sub and then it's sub dot title
[02:03:03] . Uh, I think it is sub dot input dot title. This is, this is, you can tell I haven't used these APIs enough. Have I, it
[02:03:14] 's an array of submissions and each inputs and put, Oh, it's just the input. I'm so dumb. The input for this thing doesn't have a name,
[02:03:28]  right? we're literally just passing. It's, it's actually input zero. I'm just being stupid. The input is the arguments that you pass to the submit
[02:03:36] , to the, to the submission. So when we're adding our to do, we, we have, um, an array of string and I, it knows the arguments
[02:03:46] . So it gives you a little hint of like what the, what the arguments are. So like when you call it, you pass one argument, which is title, um
[02:03:52] , which is a string. So input zero is that string. So for each adding to do, because the thing with our, our functions is they can have any format
[02:04:00] . You can have as many arguments as you want. Um, they don't have to be named. It's transparent. So essentially what we have here is sub input zero
[02:04:10]  will be our adding to do's. And then if we do something funny here, like style equals, I don't know, color red. What should happen is that,
[02:04:25]  I mean, this might be way too fast. we might have to introduce a delay or ghost ones. It should, the new to do while it's optimistic should be
[02:04:32]  red. I don't know if you saw that. It was, it was really fast. Um, yeah. Did you see that? it was red. It was
[02:04:45]  red. That one was a lot faster. Um, but essentially we have optimistic updates through this. And the reason that this is important is because this action, like, why
[02:05:00]  do we have this use action when, you know, why am I putting the action out here? It's because this can be imported anywhere. where you can use submission
[02:05:06]  in different components. Like you don't have to do it all locally. You can have optimistic updates in different, in different places, just using the action as the key for
[02:05:15]  the optimistic update, essentially. So obviously it's convenient in the place. we're using it here because, you know, we created the action here and we're using
[02:05:24] , we're using the action here, but we can also put the, this in different components. Uh, and what's beautiful now between the cache and that and the action
[02:05:34]  API is that, you know, we, we have type script all working properly here without, you know, any of those type of return ofs and we have preload
[02:05:46] ing and we have optimistic updates, cross components, and, you know, all the other kind of fun stuff. Um, so again, but look, look, have
[02:05:56]  we imported anything from solid start here? Not, not, nothing here is actually solid start. We could have used hand stack, the hand stack query. We could use tan
[02:06:06]  stack router solid when it's available. My, my point is that solid start isn't really anything here. We, we just happen to be using, this library.
[02:06:21]  Right. This is one pattern. I like this pattern. I think it's a very good pattern, but it is just one pattern. It's a very type script happy
[02:06:31]  pattern. So, you know, now we're kind of like caught up to things like remix. I mean, I haven't talked about all the features. We're SS
[02:06:41] Ring. We could, um, we could pre-render. Do you guys like pre-rendering? We can go in, into our start options here and
[02:06:51]  we can, you know, go, we can pass options directly to nitro. so we can go like server, um, pre-render. All the nitro
[02:07:02]  options go to server. And then we can be like, let's pre-render one of the routes, you know, and then like, we can go routes array.
[02:07:10]  And then we can, we can pre-render that, right? We can go slash. We can also do something really cool that nitro supports. We can go
[02:07:17]  crawl links. True. And then it will try and pre-render your, your whole site. Um, I'm just going to do build to see if we can actually
[02:07:29]  see this. We should have two pages, right? We should have, we should have slash. Um, and then we should have to do's. Yeah. It found
[02:07:37]  both of them. Slash into do's not a hard thing, but it means that like dynamic routes, it actually looks through the links of the rendered pages. And
[02:07:44]  see where you link to other pages on your site. And then it pre-renders them. So you can even get dynamic stuff. I don't do this on hacker
[02:07:50]  news. Cause you'll literally like pre-render the whole website. Cause you'll keep on fetching more through links. There's way more config on nitro, but
[02:07:57]  what I'm showing here is our client side thing. We were doing this whole time, like our CSR, that was just pre-rendering the index page, but
[02:08:05]  I'm using the same mechanism. Um, essentially there's nothing special CSR mode, except for not rendering the, the server, uh, when we have the server
[02:08:15]  side, not rendering the, the body essentially, like leaving it at the document and then telling it to pre-render index. Here, you have the power to pre-
[02:08:26] render as many, as little pages as you want. So this is something Solstart never had previously. So now we have per page pre-rendering. Um,
[02:08:35]  so just wanted to throw that out here. So SSG fans rejoice. Um, we can do pre-rendering. Okay. Okay. But I'm not done.
[02:08:47]  Do you want to see some, well, this, this is kind of why it's taking me so long to, because every piece has to have the right responsibilities to
[02:09:03]  true, truly make something disappear. Because the problem is if the responsibilities misalign, you have overlap and that's where bloat comes in, both from performance, maintenance
[02:09:16] , everything you have to find the right boundaries and responsibilities. That's why the Unix principles are, you know, philosophy is so powerful. and this took a bit
[02:09:24]  of time to, to find where that right, um, balances. Okay. Well, the reason I said we're not done is I want to message SSG because people
[02:09:35]  care about SSG. But the, the other reason we're not done is you, you might be like looking at this and you might be going, okay, you told
[02:09:43]  us that there was too much JavaScript. So we code split. Then we had all this complexity and we had file system routing to handle it. Um, you told us
[02:09:54] , you know, API routes were, you know, you need these when you have it at spa to get your data, but then there's too much, you know,
[02:10:00]  wiring. So then we got server functions to handle it. Um, w what if JavaScript doesn't work? What if, um, the pages don't have JavaScript? What
[02:10:12] , what, what, what, what can you do here? Cause nothing, none of the code that I wrote actually would work because you like, you're handling this form
[02:10:20]  submission and all this stuff. so can this work without JavaScript? And the answer is yes, because yes, I used our action here and I like submissions or optimistic updates
[02:10:35] , obviously, but, but, but what if we didn't use the action like this? and what if, what if instead we just said, Hey form, adding
[02:10:59] , add to do action. Well, I have a problem here because add to do action. doesn't, it takes a string and the form doesn't know what a
[02:11:16]  string is. Right. So, I mean, now I have, I have a little bit of work to do. Um, so let's, let's, let's
[02:11:28] , let's, let's go into our to do's here. I kind of want now, now I have to do something like this. And you're like,
[02:11:37]  Oh, you'll see where I'm going in a minute, but I'm going to do it the way you're supposed to do it, which is form data.
[02:11:47]  And then we're going to go const title equals, uh, form data. Was it string form data dot get title? I want to say, and then that should probably
[02:12:04]  work. We also have to make sure that our form input name equals, um, what was it title? And because we're using a server function, there's no
[02:12:22]  JavaScript really required for this. So, um, let's see here. What's wrong with the sub? Oh yeah. Right now we have to get title. Oh,
[02:12:35]  and that's not a string. So we have to, we have to do it now. Okay. Let's, let's get in dev mode and make sure this
[02:12:50]  still works. Oh, form posters are, are form, um, for actions need to be posts. My bad. Um, this action API only supports posts. So
[02:13:07]  good error message to catch me here. So we should make it meth mess method post. Okay. There we go. All right. Now I've really screwed things up.
[02:13:21]  Let's, let's hope I get out of this pit. We were looking at the dreaded hydration error. Okay. HMR is not perfect. I think that
[02:13:34] 's something we can all respect. God, you guys chat is just on point today. Sorry. I missed this one a bit earlier. Obviously with form data parsing,
[02:13:46]  you need to actually, um, uh, what do you call it? Um, you, you need to do validation and stuff, but let's continue. I hope
[02:14:01]  that this works. Okay. Of course, it's not going to work on my, my lovely demo. Why doesn't this one work? This is why you prep your
[02:14:18]  demos ahead of time. I do have working demos, but of course, Oh, do you know what it is? This is the stupidest thing. I got to
[02:14:25]  remember this. I think I know what it is. It's one of the most awkward things. The zeroing out of the, of the set to do messes with
[02:14:38]  the submission. it has to happen after it submits, which is a pain in the ass. This is, there's some, there's some things we have to
[02:14:48]  talk about on that side, because like the timing of a submission is interesting because you get the on submit event and then it submits, which means if you want to do
[02:14:59]  stuff like after you submitted, like there isn't a great way. Um, anyway, you see, you see the optimistic updates, everything still works. Right. Okay
[02:15:08] . So I guess the real moment of truth here is we're going to build this for real. Right. And then we're going to start. And we're going
[02:15:28]  to refresh. And yeah, I mean, who cares? It's, it's probably still working. What we're going to do is we're going to go to the
[02:15:42]  network tab. Yes. whatever. Actually, I don't even think we have to do this, but you just have to go disable JavaScript. Okay. Now there's
[02:15:52]  no JavaScript. So when I load the page, well, that's interesting. These are all blocked. Yeah. That's cool that they show that they never used to.
[02:16:00]  I can still laugh and get around because it's doing full page refreshes now because these are just anchor links. Like we're not doing a spa mode. There's
[02:16:08]  no Javascript in my browser, but if I go high and I add it, why does this post to work? It's going to be like another one of my
[02:16:21]  things. All right. What did I miss this time? All right. Action is add to do. Add to do is. Well, actually let's, let's
[02:16:41] , let's inspect our form for a second and see what's going on. See our form actually has the encoded server action encoded into, into the name.
[02:16:57]  So we can see that it's server ID, this name, this. So technically speaking, we do this preserve log and we do this. This should be all that we
[02:17:10]  need. We should see the post to this, which should return a redirect back to itself with the new to do's. Okay. Interesting. I wonder if this is still
[02:17:30]  the persistent problem of using the stuff in memory. That sucks. Okay. I'm going to show the exact same demo from inside the solids start repo with, uh, with
[02:17:43]  the, with the completed, um, hacker news demo, uh, or not hacker news to do MVC demo. I will look into that in a minute. Okay
[02:17:56] . So let's go in here and let's do PMPM dash dash filter. Example to do MVC. Um, I wonder if the difference between build
[02:18:16]  and dev can, can we sanity check that first before I give up? This might be just me not spending way too much time in dev and not with build until recently.
[02:18:28]  because I'm in dev JavaScript is disabled. No, not the difference between build and dev. Good to know. Okay. Let's go into, um, level
[02:18:41]  hacker news. Let's, let's just do dev here. Local host 3000. Actual to do MVC. JavaScript disabled. Sweet. So this one actually works
[02:19:02] . Um, you can see that it does full page reload whenever I do the edits here. Um, so same exact pattern in this example. Uh, where is it?
[02:19:22]  I wonder if looking at solid start will actually like show me my, the error of my ways. Cause this, this, the, the actual hacker news, not hacker
[02:19:35]  news. I keep saying hacker news, the actual to do MVC example here. Um, the biggest difference is it's using, uh, unstorage for file system handling
[02:19:44] . So like the data isn't just in memory. Um, and then, which, and then, which might actually be the, the root of our problem. I
[02:19:55]  actually think, I think server functions and non server functions end up in two different copies of memory, which, which is interesting. Um, I don't want to delve into
[02:20:11]  that. This is something like there's a little, there's a, in a real situation with the actual database, you'd never have this problem. Um, so let
[02:20:19]  me see here. Yeah. Cause this, this is the full blown example, right? Cache action, action, action, action, all the actions, um,
[02:20:27]  bunch of submissions and IDs. Um, so we're, we're basically seeing the full picture here and it's using forms to add, to do method posts. This,
[02:20:41]  this looks very similar to what, um, what we just did. Right. Oh, we got a raid. This is why I need to check Twitch more often.
[02:20:55]  I'm just showing people, I'm just showing people, um, solid start, um, which is the solid meta framework or non meta framework. It's funny.
[02:21:11]  I didn't actually get a raid notification. That's weird. Am I just like, all good. I will continue on my, uh, showing I'm showing
[02:21:30]  progressive enhancement right now in solid start, um, by using actions, uh, directly, um, in forms, but okay, let's go back. Let's turn
[02:21:45]  the JavaScript back on. Uh, right. Enable JavaScript. Okay. Let's turn the JavaScript back on and let's go back to the demo that we've been working
[02:22:02]  on this whole time. Um, all right, let's start this one up again. We, we had to do a little work to get this to work with form
[02:22:22]  data, which was kind of a pain in the butt, right? We, we, what if we didn't want to work with form data? Like you're like,
[02:22:32]  man, why do we need to do all this crazy, crazy stuff? Right. And there is a solution for this that also works with progressive enhancement. Um, I
[02:22:48] 'll show you this, but wouldn't it be nice if all the changes we just made here, we didn't have to do like, like we could just undo this
[02:22:56] . Like we already have our server stuff. Why give up? Why give this up just to get progressive enhancement, right? Like why, why do we want this casting stuff
[02:23:10]  to strings? actually, actually we, we, we, we probably still need that, but why do we want to cast stuff to strings? Um, that doesn't
[02:23:19]  seem like fun. Uh, why do we want to, you know, worry about all this when we can just go, like this. See, it, when you
[02:23:36]  don't have an empty action or a, uh, or a, uh, form data, it knows TypeScript knows. They're like, no, no, no
[02:23:46] , no, no, no, no, no. You can't pass this action to the form. You, you have different arguments, but, but this width function knows
[02:23:53]  the arguments so you can use partial application here. So I'm just going to take with, uh, what was it? New to do. So now, um, I
[02:24:04]  have the new to do text in here and I'm good to go. Now to be fair, this exact example is not where I would use this because you see the
[02:24:17]  problem here. This new to do only updates with JavaScript because it's an input field and doing this to be fair. This one, you would probably still handle as form data
[02:24:28] . Probably. Um, it just makes sense. The place where it gets a pain in the ass is let's say you want to delete something in a to do, right
[02:24:36] ? You have to pass the ID. Now you're putting all these hidden fields in. Like how do you get the ID in and have it work with progressive enhancement?
[02:24:43]  Right? So going back to our hacker news example here, yes, here, I'm just using add to do, but if I, if, if I'm going through
[02:24:52]  my rows and I'm like showing my, my stuff, I'm like, I want a button that toggles a to do on and off. I go toggle with to
[02:25:00]  do ID, or I want, um, a button that deletes the to do. Where's it here to, um, remove to do with to do ID.
[02:25:09]  And if you notice these use the same form and I'm using form action here, uh, instead of action, this also works. This is part of the reason for this
[02:25:18]  API, because now you can, you can just use action and form action. And this knows how to serialize this into a string for SSR. And it means
[02:25:27]  if the JavaScript's not there, we can still post this form with the correct data. Um, the thing you have to understand is when you have one of these actions and
[02:25:43]  you are rendering it from the server. So JavaScript does not work in the client with it. This needs to make it to the client. It needs to be encoded
[02:25:53] . So anything you call with this will end up in the client, even if it was initially server rendered. So I do want to point that out for, to people
[02:26:04] . I feel like this API is much more explicit than using stuff like closure extractions with server functions. Like the nothing will accidentally end up in your server function. Um,
[02:26:16]  because you know, from a localized state, because we literally don't do closure extraction. So we don't have that same problem next.js has, but, um
[02:26:25] , if you need to localize it, you can just use this with, um, and then put past the parameters directly. But just understand if you're passing, calling
[02:26:35]  a function, passing the parameters in submitted from the client, it's going to be on the client. What's the difference between action form action action goes on the form.
[02:26:51]  And it's the single action. You can in fact have these override it individual buttons in the form, um, can, can choose their own action. And so you
[02:26:58]  put it on the button instead. That's basically the difference. You can actually have action button form action. And like another button that's not, has a form action that
[02:27:06]  submits the forms action. This is all HTML. Um, so this is just a, I didn't need two forms. So I just did it this way. Um
[02:27:16] , I could have actually put a hidden field in here that said, um, to do ID. And then, you know, not done this and then parse the form
[02:27:26]  data. But this is a lot nicer because now toggle to do. It's just an ID number, which means, you know, all the optimistic updates are, are much
[02:27:34]  simpler. You could, you're just dealing with, you know, like values instead of form data all over the place. Um, as I said, I kept the form
[02:27:43]  data for the, for the, for this one, for like the actual showing of the to do's. Uh, where is it? Where's the second for loop
[02:27:51] ? There's one for loop. Yeah. See, so I am actually doing it still here. I form data makes a lot of sense when you have form fields, like
[02:27:58]  input fields. Form data does not make a lot of sense when you're just doing actions based on an ID, like deleting something like when you're not actually doing form
[02:28:10]  like behaviors form data doesn't make a lot of sense. But if you want to be progressive enhanced, you can do it. You all can also not and ignore this whole
[02:28:18]  topic, but I wanted to show you the pain in the asset was to use form data and to show you how you can avoid it and still get progressive enhancement. I
[02:28:31] 'm wondering if we could pass into it the name of the input that will be automatically extracted from the form data and passed to the action as a parameter. Yeah. I
[02:28:49]  mean, yeah, I, yeah, I don't know. I, you have to think of how progressive enhancement works in that scenario. I'm not sure. Yeah.
[02:29:02]  Yeah. the thing is you have to understand the reason that this is the case is check this out. Let me explain a little bit quick side note on closure extraction.
[02:29:11]  I am not a big fan of closure extraction. This is one of those things though, that it's up in the air enough that I can understand that. Like if I
[02:29:18] 'm wrong in, you know, a year or two and I changed my mind, like don't hold me to this too hard because it's a new area. But what
[02:29:25]  I, what I want to explain is this. Okay. I'm just going to scratch pad this for a second to explain. top level. We have function something.
[02:29:36]  Okay. And actually I'm going to turn off this so that we don't have to worry about function something. And out here we have import. Database. Okay.
[02:29:47]  DB from DB. Okay. And then if in here, this is, you know, use server, whatever. And then I go DB dot dot. This is not closure
[02:30:01]  extraction. in the classic sense, because we don't, we don't need to, for the client, you don't need to send anything to the client to do
[02:30:13]  this. Right. And if this has, you know, ID something, you know, whatever, or sorry, no, I let's like some kind of argument. And
[02:30:20]  then we pass that to here. Like, obviously the client is going to call the IDs. So the, the ID is coming from the client, but this isn't
[02:30:28]  closure extraction because we can just make this a module on the server. And we're, we're, we're good to go. We don't actually care about this.
[02:30:39]  this works and has no risk of leaking from the perspective of like, the, the chance of this leaking is from side effects and tree shaking, not working. It's
[02:30:52]  not because like, let, let's take this further. const secret. This has no freaking side effects. It's very clear. This has no side effects. If
[02:31:02]  I go like this, this is never going to get to the client. Assuming that you server bundling works like this. It's just not how these things work.
[02:31:14]  The closure extraction problem. is that you define this somewhere, right? Inside another function. So you go something else. Okay. Because like, I don't call this
[02:31:33]  closure extraction because you don't serialize anything. You don't bind it. It's just literally in the code references. The problem with this one is this belongs to the
[02:31:42]  instance of this, right? Like every time you call something else, you get a new something. So if secret is here, you have to call this to make this
[02:31:59] . The problem is we need this to be a separate module that gets called. So when the code actually gets transformed in a JavaScript framework, like when it's doing these server
[02:32:08]  functions, this becomes this again. essentially, you know, it registers some stuff, but you're like, well, how the hell do you get secret from here to
[02:32:22]  here? Well, it sees the call site, essentially. Like it sees where you define it here and it goes, okay. it makes essentially something to, and it
[02:32:36]  goes, okay, something to is something, something bind or let, we can use my width. It doesn't matter, but with secret, this is essentially what it does
[02:32:54] . And then you can like, what I didn't include in the original examples, I'm assuming somewhere down here, you have something two, right? This now has
[02:33:04] , so you do all this transformation. You have something two, two, right? Did I? Okay, whatever. It doesn't matter. You see what I'm
[02:33:15]  getting at? So secret gets bound. So when it creates it, it creates an instance, but the actual thing gets hoisted. And then this, like this binding or
[02:33:24]  whatever, transforms your function to basically have like, this is like, so it, it, like it's, it's a little bit more generic than this, but
[02:33:38]  like, I just want to show it so you understand. So you're actually changing the input arguments to your function, essentially, or like using some kind of context injection into
[02:33:48]  your function and then binding it at the call site to get each copy of it. And then you can call it with just the argument you have and the other one secretly gets
[02:33:57]  in. But basically closure extraction automatically does all of that for you. So you don't even, this just works. It doesn't error or whatever. And you don
[02:34:07] 't realize this secret got sent as an argument that now is in the client. To be fair, I think Next only does closure extractions on forms and they do the special
[02:34:15]  form behavior. Quick had to figure out something there too. And they do like this encoding stuff. You can just avoid all this stuff by having an explicit API for this
[02:34:27] . Like, maybe the convenience of this is so great, but the fact that it is not clear that this, this looks like, if you remember our original example with database
[02:34:39] , this database, top level here, stays on the server. This doesn't, but it's not obvious why. Why? Yeah. The thing is, there's
[02:34:57]  two problems. The Taint API is, I think the biggest value of the Taint API is largely to do with, like, you don't know what a client component
[02:35:07]  is further down. Like for RCs, like, you pass some kind of property around, you're passing it around, and at some point it crosses a client-
[02:35:14] server boundary and where you define the secret is over here and whoever decides what the client, you know, goes to the client serialization with the client component or island or
[02:35:25]  whatever is over here. And now you don't, you don't know because you're, initially, you consume a component, it's another server component and you pass a
[02:35:34]  prop and you're like, I'm good, this is a server component. I don't have to worry about the client. But then someone else who actually implements
[02:35:40]  that server component goes, oh, to do this new feature we need more on the client. So we're going to pass more of those props or that data through and you
[02:35:50]  as the ultimate consumer don't see that change. However, now suddenly something that wasn't serialized before is now making it to the client and there you go, leak.
[02:35:59]  That's why you need stuff like the Taint API because essentially the disconnect between that and for the longest time I was like, we need to make the boundary between client
[02:36:10]  and server more obvious. That actually doesn't help the consumer of upstream server components. Anyway. Only a tiny bit. The idea of encryption, yeah, like first of all
[02:36:26] , now you need encryption, which is a lot. But the thing is like, you kind of don't want, like the problem with this is not just secret. It
[02:36:32] 's like, let's change this now to super large JSON blob that I happen to be reading. Like, I don't, I care about serialization even if it
[02:36:56]  wasn't about secrets. So that's ultimately, like that doesn't, that doesn't do it for me. Like, I know this is all automatic, but I
[02:37:04]  also worked with .NET when we used to freaking serialize the universe back and forth on every page request. Sure, we can do that, but I'm, I'm
[02:37:11]  not, I'm not, I'm not, I'm not, I'm not buying. So anyways, little side note on closure extraction. This avoids the need
[02:37:31]  for closure extraction and it also is explicit. So we'll see if people like it, but for me, this is win-win. Right, so I showed off the
[02:37:46]  to-do MVC example. As I mentioned, very little coming from Solid Start right now. So does Solid Start actually do anything? Does it? Well, it
[02:38:01]  does a couple things. Right? It does the, the server functions, but there's no import for that. Let's refresh our memory what Solid Start does. Well,
[02:38:15]  it has file routes. We talked all about the file routes. You can just inject them in your router or whatever. It has an HTTP header status code components to help
[02:38:24]  you like with branching and errors. It has app TSX where you can like inject your context for routers, add your router, do whatever you want. It has
[02:38:33]  entry client, which is the mount point. It has entry server, which is basically like your index HTML, you know, or like where you can get the assets kind of
[02:38:43]  injected in. We could have used index HTML. I just like doing everything in JSX. You know, you can choose to do that remix trick where you don't
[02:38:49]  include the scripts and then, you know, you're like, look, I'm, I have a 1998 website with full page reloads and no JavaScript. You know,
[02:38:58]  we have a VIT config which can help us deploy to different places by using Nitro presets, the server thing. Like a lot of them are actually detectable,
[02:39:13]  so you don't even need this. Like we just deploy, take a solid start project, deploy to Vercel or Netlify. It will automatically know what platform
[02:39:20] ing is being deployed for. You don't have to worry about adapters at all. This is a nice improvement of using Nitro. we have our dev and build
[02:39:28] . Start right now is just an alias for the node local. We could do more. There's use server which we talked about with server functions that can be done module
[02:39:36]  level or can be done function level. We can serialize lots of data types with use server. This is from Cerevel. It's the same serializer that Solid
[02:39:49]  does. If you care about this, watch my stream about server functions and server actions because we can do crazy stuff with this. Sorry, I got a little ahead of
[02:40:00]  myself. Local host 5,000 I think I put the docs on right now. Okay. So we talked about routing. This is so funny because I had a hard time
[02:40:13]  writing the docs because I'm like, okay, this is fine. It hasn't changed. This whole head of metadata section uses Solid Meta but we haven't talked
[02:40:23]  about Solid Meta today because you literally don't need it. You just import it and use it like any other library. The reason this works again is because Solid has a
[02:40:32]  use assets thing that just injects stuff automatically in the head. So you can use any Solid Meta library. Solid Meta is not part of Solid Start the same way
[02:40:40]  the router isn't. Public folder convention, CSS and styling. Again, you can use whatever you want. we have examples with Solid Styled and Tailwind inside the
[02:40:50]  Solid Start examples. Route pre-rendering. We talked about this. You can pre-render specific routes. You can crawl links. This is all from Nitro.
[02:40:58]  Data loading. I talk about the cache and eight actions we just showed but honestly, you can use hands-back query and forget like this. This isn't even really part
[02:41:08]  of this. Same thing. We haven't talked about handling redirects to be fair. So let's look at the we talked about API routes like just using get.
[02:41:20]  This state management is a work in progress from an open source contributor. We haven't talked about sessions, middleware or like handling redirects and stuff. So let's go
[02:41:32]  there. Generally, our load functions are a void. Like it does technically return stuff and it can pass to the component but this is more for semi-backwards compatibility.
[02:41:44]  I recommend using the load functions because they can be called multiple times. I recommend just using them as like a load or preload function and not think of them as a
[02:41:53]  data function. So yeah, let's keep on going. I love how these examples I love how these examples all still work on the API side. So I'm the
[02:42:04]  you know, trpc. Yeah, let's go back to our demo. What do we want to do? No, actually, no, I think we took our
[02:42:16]  demo as far as we're going to go. I'm going to show some more specific examples now from this point on to show different features of Solid Start. So let
[02:42:26] 's look in an auth example with auth. This example you can get off the end point. What I did, I mean, sorry, off the CLI script. Again
[02:42:40] , simple routers set up. Biggest thing here is we have an index route where you have to be logged in which uses loads get user which is just some get
[02:42:53]  user call and then I'm using it with create async here. There's a login page where it's you can use the submission to show error messages and then essentially under
[02:43:09]  here on the API I have our kind of data layer where I have cache, action, and action and these are wrapping our used server which is all our database stuff.
[02:43:21]  I often like using used server like this top level. It just keeps that separation for people. I like the flexibility. I think this is also just doing it because it can
[02:43:37]  be nice. What you're going to see here is that those three functions that I showed you, login and register, they do take form data in this case because if
[02:43:48]  you look at a login page, it's kind of basic. It's just like I am a form. It might be a redirect hidden, but other than that, it
[02:43:56] 's like this is very much form stuff, so I'm just using form data. If I was trying to use actual APIs, I'd either not use actual interactive stuff,
[02:44:04]  I'd either not use forms and not care about progressive enhancement, or I would use with and use data. But for a login screen, you just want a form that always
[02:44:13]  works, so pretty simple on that side. And the logout button also very simple. So let's go back to our server implementation. What's cool about this is
[02:44:32]  error handling and redirects. and I want to talk about this for a moment because I'm rowing redirects. And you might be going, okay, that's
[02:44:41]  a little bit weird. I thought you threw errors. And you're going to love this even better. I'm returning errors. No, no, that's git users,
[02:44:51]  sorry. I'm returning errors and throwing redirects, which seems kind of weird. But if you think about it, it actually makes sense because look, if it's
[02:45:05]  an uncaught error, that's different. We catch the error, error boundary handles it. But a lot of times when you're doing form submissions, you have like
[02:45:12]  400 level errors. And now I don't need to use an error object. I can use whatever I want. But by returning errors, I have a promise of error,
[02:45:18]  essentially. Like, either this logins or I get an error back. And why this is beneficial is that when I look at my login screen and I want to show an
[02:45:28]  error, I know that this result is an error. So I know TypeScript works perfectly for displaying the error information. It's an error. See, most actions are
[02:45:39]  probably void. Like, you don't need, they might be a success message. That's a reason not to. But the type is, like, actions are not the
[02:45:46]  same as gets. Gets, generally speaking, you're returning some kind of data. You care about that data. That's a thing. If you're not authorized
[02:45:55] , you might get a redirect. Or, you know, there might be some kind of, you know, error state that you like is unexpected. But for actions, like
[02:46:06]  doing stuff, generally it's a void. The only thing you have to care about is the error. And this temporal state, this doesn't last. Submissions don
[02:46:13] 't last forever, right? This is only like while you're in error. There's options on submissions to clear them and all this stuff, you know? So, generally
[02:46:22]  speaking, this is what you want. You don't want redirects as your return type. You just want to be able to redirect. And some APIs I've seen
[02:46:32]  just call redirect. But the problem with that, which is kind of awkward, is, like, does it throw? Like, if it throws, then the next line of
[02:46:42]  code will never actually run. Like, this is very explicit in what's happening here. You call redirect and you throw the response. And let's show this example here.
[02:46:53]  example with auth dev. And obviously this works with JavaScript turned off, progressive enhancement, the whole fun thing. But if we go here and we refresh, we're trying
[02:47:07]  to get in, log in, no, redirect us. Let's go back to the index fix. Nope, you're not logged in. You cannot get in. This
[02:47:13]  about page, funny enough, is not protected, so you can go there. It's a not bound page, but you cannot get into the protected page. And when
[02:47:21]  we do this, nope, passwords must be at least six characters. Okay, that sucks. You know, well, now it's six characters. Oh, no, passwords
[02:47:30] , sorry. Wrong message. I meant to do this one. Usernames must be at least three characters. Now, let's make our password like something super long.
[02:47:38]  It's invalid logging, whatever. this is this kind of mechanism in practice. And we use cookies as a mechanism for handling these errors. Like if I go in here
[02:47:55]  and I turn, sorry, this is a fun thing. Certain screens, command P does different things. Let's disable JavaScript here for a second. Disable JavaScript. Right
[02:48:04] . Let's reload the page. No JavaScript. this still works because we use cookies to basically do it. You can tell the difference in JavaScript on and off because the
[02:48:17]  input loses its state. We could probably use the submission to repopulate the input on the server because we have flash messages the same way we do this. I didn't
[02:48:29]  implement it, but this is very easy for me to demo to show the difference of when this works and doesn't work. JavaScript's off. We're still not going to
[02:48:37]  let you do the redirect because it goes to the server on everyone, but yeah, let me do, let's let's enable JS again. So let's actually succeed
[02:48:51]  at logging in with the password, right? And now we're in, and then again, we can just log out. I, right, we're done with this demo
[02:49:05] . make this one big. So this is the basic pattern and I'm actually using some cool server stuff in this example because I'm actually using server from H3,
[02:49:17]  which is part of, if you're not familiar, Nitro use, and un.js use something called H3 as their HTTP server, and I'm re-ex
[02:49:24] porting them through solid.js server. So they have, this actually uses session management. And for H3 to use session management, you just basically pass in the
[02:49:35]  event. This get request event, I haven't showed off yet. Solid.js web has a new way of using async local storage to inject events, the event,
[02:49:45]  and this is how you can get the request. The request event has a specific form, but we can pass it to H3 helpers, like use session, to set
[02:49:54]  up sessions, and then it's automatically handled for us. So for example, in this example, when we get the user, we get the session, see if there
[02:50:06] 's a user ID on the session, if not we throw a redirect, then we try and get the user in our database, if not throw a redirect, and then we
[02:50:14]  return the user, without their password obviously. Similarly, when we log out, we get the session, and then we remove the user off the session essentially. So,
[02:50:28]  and actually, sorry, when we log in, we add the user to the session right here. So, these are, we have the full power of H3 at our
[02:50:38]  disposal here with Solid Start. I don't know if you've seen H3 before on JS. I imagine it's probably criminally under-documented, but it gives
[02:50:50]  us a lot of handlers and helpers to, you know, to handle and stuff. H3 has all this stuff, you don't have to worry about all
[02:50:57]  this, this gets wrapped for you, but like, get read raw body, read body, read validated, request get queries, see all these helper functions, these are all
[02:51:06]  available to you, cookie management, session management, cores, headers, this server runtime basically is completely at your disposal here. stuff, yeah, no, I don't
[02:51:29]  know how much this trickles down to Evan because the driving force of on JS is more of the Nuxt team and I'm not sure how much Nuxt and Evan and
[02:51:39]  Vue kind of, you know, overlap, but I mean, Vite being agnostic was a key game changer for all of us. although my understanding is
[02:51:49]  that this effort for on JS started before at least Vite 2 added support for non-view frameworks, like they were doing this, they started this during Nuxt 2 time
[02:52:02]  period. Yes, yes, because you can use that same get request event. The only thing you have to consider though is that calling those functions there will, it's
[02:52:20]  isomorphic. So technically speaking, you can, you can grab it and it won't be there on the client, but you're not going to like these methods are
[02:52:31]  not going to exist for you. so like trying to parse cookies on it doesn't make sense. You, but you could like wrap that call in and maybe an is
[02:52:39]  server call. I don't know if there's very many cases where you would actually want to do it purely like you might want to grab some data off of it. Like
[02:52:48]  say, is the user logged in, you know, like something you tag on, like the middleware and the locals and then read that in the, in the request event
[02:52:56] . But I'd probably do that like at one point high up and then feed it into the other mechanisms. like, like context or whatever, because like there, there
[02:53:07]  these kind of, this kind of code makes no sense in the client. Right. So for the most part, you're, you're going to be handling this stuff.
[02:53:18]  Um, that's why we have wrappers, like uh, when I was showing before, like around, um, HV header and status code. Cause like these could
[02:53:29]  happen during initial render, but like we, these are safe that they end up on the client through just no ops. Like you, you have to kind of guard for
[02:53:36]  this scenario for things that actually directly impact the request response. Um, and his server will probably do, do enough, but yes, it's, they are definitely accessible.
[02:53:48]  Async local storage runs all the way through the page request. sorry. Can you, can you expand on what you mean by use server directive programmatically? Yeah
[02:54:17] . Just, just interesting. Cause our user is just functions, which as, as like pointed out here is next does, uh, I think they, they, they do
[02:54:26]  behavior like the throw the redirects and stuff. Um, yeah. I mean, it, it doesn't make sense to me that like, like if you tried to write
[02:54:35]  something in the next line and it like, yeah, I don't know, I guess it's cleaner, but it's not clear. So, uh, maybe Type
[02:54:43] Script yells at you. I don't know. Maybe they've, they've got like special tooling. I'm, I'm just using what I got like our forms.
[02:54:50]  Like when I was showing that cool with example and all that, that is not compiler tricks. It's actually all runtime. We don't actually, we don't actually do
[02:54:59]  anything special for our server functions because our actions are compiled. Like the only compilation piece is hoisting the server function, um, like out when it's in line,
[02:55:10]  it's a function and a client component. Um, we don't do anything special with forms. You don't do closure extractions. We don't do a lot
[02:55:16]  of stuff. Everything's very explicit. And sometimes that means more code and it's more work, but I actually think what we've done here. And I think you'll
[02:55:23]  see from what I've shown everyone here is that it actually doesn't have to be bad to use from a DX standpoint. You know, like we're talking about like the
[02:55:33]  tiniest of maybe codes savings for, in my mind, a huge, huge improvement in terms of clarity and understanding. Okay. So, you know, I get
[02:55:49]  it. Throwing redirects is weird. Some people will knock it out, but it tells you very clearly what you expect back from your action, which is chef's kiss
[02:55:57]  from my perspective, um, because then all the optimistic updates and everything work properly. we can do it. I think we can do it. We can do it.
[02:56:12]  No. Uh, good question though. Uh, we have serialization for a lot of things. We can serialize streams. You can serialize response objects. Like you
[02:56:21]  can like, you know, like you can do that trick where you're like, like you, I think miscoded a demo the other day where he was like watching
[02:56:30]  his file system and having an update in the browser over a server function. yeah, we, we can do all that stuff. The one thing that we have not done
[02:56:37]  is serialization of functions. That is very tricky because it's the closure extraction problem. You need closer extraction to do that. Um, because you're just arbitrarily creating
[02:56:52]  a function and scope. Um, well, I guess you don't need, need it, but like it's a closure. it's a, it's like a
[02:56:58]  function of a function, which is a very difficult, um, thing to work out. The reason quick can do it largely is that the thing that causes the function to be
[02:57:08]  serializable, they split it out already as one of their pieces. And then they can reference that code directly. Um, we have no other code to do that right now
[02:57:16] . Like we don't, we just like server functions work one way and that works the other way, which is the same way quick works. Usually when they're like doing
[02:57:25]  their stuff, they, they, they break all their stuff into a bunch of different closures and a bunch of different functions and then lazy load those pieces. So they
[02:57:31]  already have a mechanism for doing that serialization where we don't, don't, we only do server functions only go this direction, not the other direction, if that makes
[02:57:41]  any sense. Um, but, um, it definitely is a cool demo. I will say that. Okay. So, but the funny thing is here, I just
[02:57:58]  pointed out here, use session has come from solid start server from age three. So we have another thing. This is redirected from the router. So like these server functions
[02:58:08]  know that they're being used in actions, like essentially because of part of the router, like this is not built in to solid start all this throw redirect stuff. This is
[02:58:18]  actually, I didn't show it earlier, but I mean, and I can't do this exactly because of the, well, what I'm saying is you can have
[02:58:28]  purely client actions with solid router. Like if we didn't have session or this database thing, you know, and the throw redirects could work in a pure client side app
[02:58:37]  that had no backend that wasn't using server functions. So like, like kind of like remix did with react router 6.4 and they backport all the remix stuff
[02:58:48]  into the router. The latest release of solid router does that. Essentially everything works purely client side, but then it also works server side and also support server functions in a generic
[02:58:58]  way. All of this reducing a huge amount of weight out of solid start and putting the work in the server. So, you know, you can kind of see when you
[02:59:08]  remove those responsibilities how much simpler everything gets. To, to be fair, you, the demo of serializing a promise that serializes another promise kind of shows off almost
[02:59:29]  the same kind of way because you can like load data from a server function and and then wait sometime later to, to await the promise you returned from the function. So
[02:59:44]  it's like delayed. So like, yeah, or like any of those streaming examples, uh, are, are perfect examples. It's with async iterators where you
[02:59:53]  can see like the code come in and then the client actually chooses when it wants to pull the next piece of data from the server. Um, anyway, sorry, I
[03:00:03] , I demoed a bunch of that stuff and, uh, I think one of my recent streams, if it wasn't the last one, it was the one before it
[03:00:08] . Okay. So progressive enhancement off, um, session management, thanks to H3, all those things from H3 we get for free. Um, what else do we
[03:00:22]  got here? Uh, middleware I've been playing a lot with, with different examples, uh, here for middleware, but the pattern for middleware right now
[03:00:34]  could be one where we could get more feedback right now. You just specify a middleware file in your start config. Um, we could make a convention like middleware TS
[03:00:42]  is always middleware or something, but for now it's like an opt-in feature where you just specify a file and its location. and then you can define two
[03:00:51]  types of middleware on request and on before response. And essentially the way this works is you get your event, the event we've been talking about this whole time. Um
[03:00:59] , and then you can, you know, do stuff with it and these just run in order. And, uh, if you return the, it early exits and considers itself
[03:01:11]  doing the response. That's basically the key to it. Like the default, there's no next or forward. this is based on, um, Nitro's pattern
[03:01:19] . Um, I don't know how everyone feels about this. This is just what was kind of built in for us. And essentially you can just intercept it. If you
[03:01:30]  don't early return, then you essentially, it just progresses down and you can process it. Right? So one example is adding protected routes, right? You know, here
[03:01:40]  there's an event and you check for the protected routes, you get your user and if not user send a read direct, this is using H3. Otherwise put it
[03:01:49]  on event dot locals and you know, you're off to the races. Right? So very simple middleware mechanism, maybe the oversimple. I've seen people who
[03:01:59]  have like per route based middleware and they intercepted like a bunch of different places. My gut, I haven't built a big enough project to need that, but my
[03:02:09]  gut is that like middleware is something you don't want to get lost. It's fine to have co-location on, on, you know, things that
[03:02:22] , you know, are very localized and maybe the middleware is localized and I'm just missing it. It's just, yeah, this is a place that we're definitely
[03:02:30]  open to more opinions to think about. Um, generally speaking, the reason we have it set up like this out outside of our handler and doing this kind of in this global
[03:02:39]  fashion is because it applies to API routes. It applies to server functions. It applies to page rendering. So this middleware gives you make sure that you can intercept stuff
[03:02:48]  for all the different types of things coming in and out of your server. Um, so it's, you know, it's a little bit low level, but,
[03:02:55]  um, you know, here we are. Yeah. See, I, I, I've, I've heard about this, but this always gives me pause. I
[03:03:08] , there's a certain complexity that comes into that. It would be interesting though. One of the, one of the challenges we've had is that we support any routes.
[03:03:20]  So like you, you, I showed you how you could just insert the file-based routing, but you can actually combine file and non-file based routing. Cause
[03:03:27]  it's just like a, an additional config step. So like trusting that the file-based routing is the whole story on routing is not something that we could ever take for
[03:03:35]  granted. I mean, the, the, some of the other benefits of file system routing that you don't get with the normal one, other than the lazy loading,
[03:03:41]  the code splitting is asked is also like acid CSS preloading. Like there's a whole bunch of things that come benefit. So you should probably just use the file system
[03:03:47]  routing and the config, you know, like export, like route gives you enough power to, you know, do more with it, but, but on the other hand,
[03:03:58]  like it's hard to like force people down that path. Like some people will never touch file-based routing and I support them, of course, you could say then
[03:04:11]  they don't, they don't need to get this feature either. And then they can like look into it. But yeah, it's, it's, it's,
[03:04:17]  it's interesting because generally speaking for an API route, I guess it kind of makes sense because like it has a location, but like server functions don't have a location.
[03:04:33]  and page routes, like the nesting doesn't really impact middleware. Do you know what I mean? Like it's, yeah, I don't know. It
[03:04:45] 's, it's, it's, it's interesting. Next use to have middleware colloquy and offensive running and mood wave favor global middleware. Yeah.
[03:05:00]  It'd be interesting to understand that decision. This seemed reasonable to me, high level, but I could be completely wrong. All right. So that's kind of it
[03:05:14] . Like, I, I mean, that's like, you know, are we ready to ship? Like pretty close. There's some bugs, but I mean, not
[03:05:23]  as many. I have an example with Prisma, MDX, our doc site. I absolutely loved going into our doc site and just being like pre-render crawl
[03:05:30]  links true. Like, um, but I do want to talk about there, there, there, there's a few more things because like, I guess I didn't give
[03:05:41]  you guys a good invalidation example. Can I, can I do one right now? I'm just going to show you something. So this is not solid start, but
[03:05:50] , um, Oh, actually I'm going to go here. They want to sign in. Why am I not signed in? Okay. Let me look at my recent
[03:06:05]  sandboxes here. I want to, I want to show you all an example here. Solid router next. Okay. Just to kind of show the power of route invalidation
[03:06:17]  here, because the one thing that might not be clear from, from what I've been showing off today is that with data, with the cache APIs, you get automatic
[03:06:27]  fine-grained updates. I made the silly app and where's the console? Is it here? Yeah. So you can like see loading, pre-fetching
[03:06:43]  and motion. See fetching, fetching user one, loading running, running the, I'm just kind of showing, like, I've made this example a while
[03:06:55]  ago, but one of them, um, and I've showed this on stream before, but one of the more interesting things is how the new data APIs came in. And
[03:07:02] , um, I got a chance to basically define some actions. Of course, this isn't not using solid starter. I was just hand showing it. So this is still
[03:07:13]  like the bulkier way where this is what you do. if you weren't using file system routing, where you define a few of your actions and caches here in
[03:07:20]  the data function. So the code splitting works properly. And then you, this is your load function for the route. Um, but what I was kind of showing is that
[03:07:30]  you can, you can kind of control what happens on the page a little bit. I, again, I don't know why anyone would ever want to do this, but
[03:07:36]  in this example, I have Joey settings and I'm going to click update to add explanation. Joey's name did not update because I said revalidate none.
[03:07:43]  If I, if I do nothing for revalidation right now, if I just leave it alone, we'll refresh the page. Right. And I do the redirect
[03:07:54]  and I go, you're going to see an explanation update on, on Joey's name, because we update it. We're just going to add another explanation mark and you
[03:08:02]  see it updates. Right. And if, if I do something like go here and go here, you're going to see double explanation mark on the list, but we
[03:08:16]  could trick it a little bit, right? You'd think what if we caused, we were here and then we caused the user list to preload. Then we click update
[03:08:25]  and quickly switch it. Um, you know, this is why, because these are two different caches, it's possible to kind of get around this, which might
[03:08:42]  be why you would want to revalidate more than just, um, the one particular cat for this, for this thing. Um, that's, or what's
[03:08:54]  on the page. So one thing we can do is we can say like, let's re invalidate all the user ones, because here we have users for this cache
[03:09:05] . And then I'm also using, um, for the top level data. Where is it users data? I'm also using as the cache key, because this is basically
[03:09:17]  users with no arguments. And this is users, um, with arguments. Now, the thing is, if there was multiple and they had different keys, it's fine
[03:09:27] , we can stick an array here. Um, so what we can do is Joey settings, hover update, and you can see that the, the exclamation mark propagated
[03:09:49] . So just, I just want to do the note a little note about here. The biggest thing, um, between is that generally speaking, let me remove the re
[03:10:01] validate option. Again, the default behavior, I'm actually surprised that the default behavior didn't do what I thought it would do because the default behavior actually should be
[03:10:12]  the invalidate everything. Sorry. See, I have some problems with code sandbox, which is why I shouldn't demo it, what's going on. Wonder if I
[03:10:24]  have an outdated, this isn't actually using the actual router directly. Uh, that's lovely. Basically the default, um, behaviors. We revalidate everything essentially
[03:10:37]  on mutation. Otherwise you can set keys and then you can also use a dummy key. If you want to reevaluate nothing, keep in mind the cache only lasts like
[03:10:45]  five seconds. So this is mostly just around forcing preloads around navigations, uh, under different scenarios. But I just wanted to kind of show that, um
[03:10:55] , you know, and you can always, if you're not sure what the key is, any cache API, like get user, you can go get user.key or
[03:11:03]  key for, and pass in the same argument again to get the specific key. So like, if you want to know what, like what the key is for the specific
[03:11:10]  ID, you can always go like, as I said, what is it? Revalidate, um, get user.key for whatever the idea is that you want
[03:11:26]  to, I guess it's the ID that's coming in from here. So there, there is a, there's a lot of power in this API, but my
[03:11:35]  gut is most people are just going, because it's just for preloads. Most people are just not going to bother the revalidate option and just let it
[03:11:42]  do its thing. Um, but I just wanted to show that there is granular invalidation and that, um, you can do it either for redirects or reloads
[03:11:53]  of the same page. You can also throw a reload. That's another thing that the router provides. This is router based APIs and know that the cache actually does data diff
[03:12:01] ing. So it will only update like the, it uses a store under the hood. It will only update the exact field that changes essentially. So you don't have
[03:12:10]  to worry about like things re-rendering even like you could like, I didn't show it in the to-do MDC example where I probably should have, but
[03:12:19]  like when we are updating like text in the to-do or whatever, it, it does revalid, like send back the data for the whole to-do list
[03:12:28] , but it only updates the one field essentially because it automatically does fine grained updates. Okay. Um, so yeah, this, this, this is essentially the,
[03:12:54]  like the, the, the router piece I want to talk about, um, but yeah, let's talk about what's coming. Um, couple things. People are
[03:13:08]  probably the number one thing you're probably wondering about is can I go into this hacker news example, can I go in the beat config? Can I go start and then do
[03:13:18]  something like islands, islands true. And then it'd be basically like Astro, like, can I just go example with example hacker news. And can this produce
[03:13:34]  islands for me? And then what, what I do, I go into low cost 3000, open my page, have it do full page navigation. But if I go into
[03:13:45]  a specific story, this still works and, and is able to only load the minimal JavaScript. Well, the answer to that question is yes. There are the island solution is
[03:13:55]  still there. It's still considered experimental. It works still about as good as it did before, except for literally last week, um, something broke in the prod build
[03:14:05] . I will, we'll get this fixed before solid start beta officially comes out, um, for beta two, but, or maybe not islands is still considered experimental. It
[03:14:15] 's still there. The islands piece. Um, so like, like Astro like experience is still there. And it's as easy as turning SSR on and off
[03:14:24] , you know, you just go islands true. The, the, the thing is we want to get something like server components. We want the hybrid router and that doesn't
[03:14:35]  exist in this repo anymore. If you think about it, because the router does not exist in this repo anymore. It makes absolutely no sense for the, this router, the
[03:14:43] , for us to actually solve, start actually have, um, the kind of server components type stuff like the hybrid routing with the islands. So that's going to be
[03:14:52]  in the router repo and it's going to take us some time to port that over. Um, but generally speaking, uh, we're, Alexis is working on the island
[03:15:01]  solution and we'll, we, at some point in the future, we'll update the router to support, um, support islands. Solid start probably, or sorry, the
[03:15:11]  islands running, but solid start probably won't actually need much of, uh, a change. It'll probably need some stuff, but generally speaking, um, most of the
[03:15:21]  work for that is actually going to be in the router, um, to get like the server component type stuff. Other things that are cool that are, you know,
[03:15:28]  even before we talk about, you know, hybrid routing and server components is that, you know, like remix, like tan stack, like all of this, whenever we were
[03:15:37]  doing mutations, you saw there's two requests. There's the post, and then there's the revalidate because of what I was showing in this example here
[03:15:45]  where we know what to revalidate. And we know what the next page is, and we know how to preload the next page. It's completely possible for
[03:15:57]  us to actually. Return the data with the redirect on the next page. And basically do single flight mutations without server components. Obviously server components do that. And that's
[03:16:10]  one of the benefits, but you could do this with pure JSON APIs in a, in a, in a spa. Basically. Um, we don't support that yet,
[03:16:19]  but this is another reason why I like these, the API design handling invalidation through headers, essentially what like this response is that we have the power here to basically enable
[03:16:35]  features that you can only get in stuff like server component architectures in your create react app, server functions, server functions with single flight mutation and invalidation. This is,
[03:16:47]  this is the power here. If you're not ready for SSR, it is a switch, but sometimes your libraries don't work properly with SSR. Don't
[03:16:55]  worry. You're not going to miss out on anything. You know, you're not ready for islands and reducing the JavaScript or hybrid RC stuff, whatever, you know,
[03:17:05]  you can still use suspense and stream on the server. You can still, you know, have progressive enhancement, you know, like working no JavaScript. Like this is all
[03:17:17]  progressive. This isn't like you have to buy into a single solution because that, that, that target is always moving. We just got to make sure we're building the
[03:17:27]  right pieces to enable people to do what they need. I'm not going to pretend like I know what that final product is completely. I've good ideas. I've put
[03:17:34]  a lot of work into this, but I am not here to sell you a product. If you want to know what may be the fundamental difference, maybe this is why
[03:17:43]  solid started where it is today and what it's like is we aren't one of those VC startups. You know, like it, this is a different perspective. I and
[03:17:55]  the team working on solid care deeply about enabling you to build the best possible app you can build. And if that means using solid, that would make me very, very
[03:18:06] , very happy, but I'm not here to sell you a product. So it's a lifestyle. Yeah. I was thinking the same thing. I like that. Right
[03:18:23] . So what is solid start? Solid start. Yeah. Solid is a lifestyle, not a product. It's true. He makes it so hard. I know it
[03:18:39] 's taken a long time in beta and we're not even out of beta, but like, let's face it. Next 13 was a beta. The whole year was a
[03:18:49]  beta. So we've all been there, right? Like things are changing. Stuff's hard to get right. I don't even know if we're a hundred percent right
[03:19:02]  here. I just know that, that like the potential and the direction seem to be aligned and we're at a place where I think it's reasonable to say like,
[03:19:14]  yeah, this is good. We can put a stamp on that. Right. Like there's so many features I can think of that, that can be built on this base
[03:19:21] . Another thing we're missing right now is get for service server functions. Like sometimes like caching works better with gets on server functions. We could, it's completely
[03:19:30]  doable with the APIs for the server function to have like a dot get and then like change it to get requests. So we just have to like handle it properly. And
[03:19:38]  so I'll start. What, what else? Sure side prison caches. This cache is the router's cache version and that it is for preloading and, you
[03:19:45]  know, simple. But like, what if we wanted cache to go to like, I don't know, like CDN, like we wanted like the cache sections of our
[03:19:52]  markup or something, you know, I've been, you know, working with the team at Netlify. Looking at what's possible there for, for,
[03:20:01]  you know, static partials, you know, the, the, you know, these are infrastructure questions. It's, and the thing is we, we, you know
[03:20:11] , we got to kind of like weigh in and figure out like what the best way to approach these things. Because like the truth of the matter is at the end of the
[03:20:21]  day, I, I, I was talking about the VC thing. I do work at Netlify just like full transparency here, but like, I'm not going
[03:20:28]  to release something that doesn't work on everywhere that could support it. You know, like, I'm not going to go like, okay, here's the new version of
[03:20:37]  solid start, you know, and this only works on Netlify. I mean, if that's a limitation, it's going to be because we haven't like,
[03:20:45]  like no major feature is going to roll out like that because like, like it doesn't make sense. So I, I think, I think like that, that's
[03:20:55]  why async local storage took us so long to, you know, get these APIs. The reason server functions work so nicely is that in, inside any server function, you
[03:21:03]  just go request, get request event. And that works. Our old server dollar signs had to like pass the event through because like it was really awkward to actually pull it off
[03:21:13]  without async local storage. I mean, our timing is pretty good now because we, we, it's supported now in every single platform pretty much. And that's
[03:21:26]  when we ship, right? It's supported on Netlify functions, Netlify edge for cell functions for cell edge cloud flare Dino. I got to thank next
[03:21:35]  for that to be fair, because they pushed the gambit where we are, we don't get to push the gambit. So it's a careful balance. Well
[03:21:44] , that's the whole thing. Solid start. I told you at the beginning of the stream that I wanted to give people the building blocks for their meta framework and not tie
[03:21:59]  them down to any particular thing. Like if you really liked hand stack, go ham, hand stack time. And that's why react historically has prided itself on being
[03:22:10]  that composable piece thing. I think we're better at it. Like things like create T3 app. Think of what they have to do for next create T3 app
[03:22:22]  and things like that in the future. Like that's what I built solid start for. Everyone can build their own create T3 app. Maybe not everyone. It takes
[03:22:32]  a bunch of work. But do you understand what I'm getting at? That's interesting. Server function versioning is an interesting question on its own. I guess this
[03:23:01]  is the biggest problem with like deployed apps that have like existing long live sessions. Because like GraphQL, the funny thing I'm going to say about server function versioning though
[03:23:09]  is GraphQL. Yeah, I'm actually kind of surprised this is a thing. Someone's going to have to explain this to me. Because like GraphQL also had
[03:23:18]  the criticism about server function, you know, versioning. And the thing is, when you're building apps that deploy and you control both sides and they deploy as a single
[03:23:26]  unit, it's like the only reason things get out of sync is that the person's client is out of sync. Otherwise, you, server function versioning is not
[03:23:37]  a thing. So it's only if you have something that's like, yeah. I guess the question is, what should happen? Because if server functions produce stable has
[03:23:50] hes, like they have the same URL, then you're right. This becomes a problem. This is a good question to look into. I can see that. If
[03:24:00]  server functions, yeah, if this, this is a fair question, I guess, because the thing is like, what happens if you do the deploy and the person's like
[03:24:08]  still got the website open? Like after they refresh the page or 30 seconds when you ping or whatever, this is not a problem anymore. But like at the exact moment deploy
[03:24:20] , there's an issue. Versioning with headers seems reasonable, but like that puts onus on the end user to do that. Yeah. Yeah. Old client is
[03:24:41]  another thing. PWAs are still a thing. I think I watched a stream somewhere where someone was telling me like they asked if PWAs were still a thing. They're
[03:24:49]  probably still a thing. But yeah, versioning in headers is a good idea. I mean, you have, you have full access to, to the headers. I
[03:25:02]  mean, this redirect mechanism is like the direct thing, but you, you either redirect or whatever with the headers here. This is actually a response in the option. Like,
[03:25:16]  like there's headers, like, or. You can literally use the, your H3 stuff here. Like, um, I was talking about before, like you have
[03:25:27]  access to H3 in here, so you can basically set the headers on the response on whatever you return. So you could definitely, you could definitely set headers, um
[03:25:40] , that is on you though. I could see where it might be interesting to try an auto version, but I, I'm not sure how I'd do that on a
[03:25:45]  framework level. I mean, I could think of ways, but I'm, I don't know if you, if you guys would want me to do it. Yeah
[03:25:55] . I'm middleware to roll. Yeah. Except version one. Yeah. Are, are, are they handling on Vercel side or are they like, or
[03:26:11]  are they like just showing you best practices to handle it? Cause like, you do have the control of the request response in the middleware there. So the, like,
[03:26:22]  there's an easy answer being like, here's how you do it and get you to do it. It's very different than like the framework handling it. Yeah.
[03:26:36]  I mean, that's fair too. Yeah. So this is like an infrastructure solution. Yeah. Okay. I mean, that's, that's great for them. I
[03:26:59]  think it's, I think it's interesting. I mean, it's funny we, I mean, similarly, notify you, you have post deploys like forever.
[03:27:09]  So maybe, maybe it can be handled, but then all you have to do is you have to make sure that every build gets a build ID. Kind of fed into the
[03:27:20] , the URL somehow. That's interesting. Okay. But that's like a very infrastructurey kind of solution that only works on both sides, but I don't know
[03:27:33]  how next does it sometimes. Cause it's like the decisions they make would like only work on Vercel or unless someone tries to copy what Vercel is doing,
[03:27:41]  which is great. Cause it gives them like this incredible power of like uniting these two pieces, but it's like a different type of lock-in, which is again
[03:27:48] , fine. But it's like, it makes it very hard for like everyone to use it in the same sort of way. Like it's, it's interesting when
[03:27:58]  all those pieces align like that. It's like, it's, it allows them to like do stuff easier in certain ways, but it also kind of makes it like,
[03:28:10]  that can never be the standard way of doing things. Yeah, it's, it's, it's, it's, it's a tricky one. Yeah. I
[03:28:21]  mean, that's, if you change the data and the function tries to access, like at some point, the, the, the secret, like the, the, the
[03:28:28]  party's over, right? If the, if the reason that you have a new version of server function is because you did a database migration, well, yeah. Does
[03:28:40]  anyone actually believe that I'm so, I'm sorry. Like that is a joke, right? Like I, I get it, but like, not really like, like
[03:28:50] , like they don't have Vercel representatives actually saying this, right? Like being like, or next people were connecting to me. Like, like the, the,
[03:29:00]  the next JS that gets sold is not the next JS that works everywhere. Like you, you, you have to be like smoking some pretty hard stuff to take the,
[03:29:13]  the, this line seriously. Define runs. Yeah. I mean, it does run, right? Like, I mean, I, I guess the thing it's like
[03:29:25]  progressive enhancement, like certain platforms have features that don't. The problem is like, like I literally, you, you could just open up their docs or something and pick
[03:29:34]  it or their releases and just pick a feature. Uh, what's the last big feature they released? And let's see if that runs on any other platform other than next
[03:29:43] , or on Vercel. Um, what, what, what, what did next 14 release next 14? Like I'm so confident that like, literally everything is
[03:29:57]  like, uh, what's, what do we got here? Okay. It's partial pre-rendering. I bet you that doesn't run on anything but for V
[03:30:04] ercel. Okay. I mean, it's, I think there's a certain amount of this, like, like we have to view different platforms, kind of like
[03:30:19]  we used to develop, uh, view browsers in, in the past, but like, it's kind of hard. It's kind of like, it's, it's
[03:30:29] , I can't even think of a good historical reference to it, but it's kind of hard. Like when not all platforms are equal or they do the same things,
[03:30:37]  but like slightly differently. And then you make a framework and you work at the one on the one platform. And they fund the development of that framework. And then you
[03:30:47] 're like, well, I'm going to add this feature. I want, I'm going to make it for Vercel and no one else. And then be like
[03:30:56] , well, you know, Vercel supports it. Others don't, but it's understandable. This is a thing that Vercel has specifically, but like,
[03:31:03]  if you don't make the effort to go to the others and develop the same feature and just like, oh, you could maybe implement it. Like, you know what
[03:31:13]  I mean? Like it, I mean, it'd be, it'd be like, if, like if the angular team, and, and this is not even good,
[03:31:21]  but like they work at Google. So they're like, yeah, this feature works in Chrome. We're going to say like, you know, maybe you can figure it
[03:31:27]  out for Firefox or Safari, but yeah. Check out angular because of this feature that only works in Chrome. Yeah. Oh, next server actions too. Yeah. Okay
[03:31:56] . So yeah. Um, it doesn't take looking very far to be like, yeah, maybe, I mean, it's fine. People, people can make their
[03:32:08]  own. I don't have to be too heavy handed here. I think people can clearly make their own judgment on how important that is, but. Yeah, this,
[03:32:26]  I mean, it can, it can run. Is that the next JS I'm excited about? So. I think there's going to be more of this in the
[03:32:44]  future, which means that it's more and more important, um, that we find ways to align and winter CG tried, but it kind of failed a bit. I think
[03:32:54]  Guillermo put out a post about, about web standards and winter CG. I think we, we, we, we walked, we looked at it on stream, right?
[03:33:03]  He, uh, not this. Where is it? Is it bookmarks? Do we look at, we looked at this on, no, no, no, no,
[03:33:10]  no, no. We'll get to that. We still have this week in JavaScript, but I think we looked at it on stream. Web API only which is, is
[03:33:18] , is viable. It's not known as a true standard. Okay. Sure. But like the extension of it was like when, when they introduced async local storage,
[03:33:26]  which again, thank you, because now I can use async local storage. It kind of got strong armed in, it wasn't a standard. And then it was like
[03:33:34]  you, that's what like Dino and everyone got like really upset about because they just like, we're like, okay, next version of next. And they're
[03:33:40]  like, yeah, we're standards. Plus the thing is it's reasonable to be standards. Plus when the platform doesn't support the thing you want to support. It's
[03:33:51]  the reason we have frameworks and we don't all use web components, right? It's just, you have to be aware of it. And now we're not just
[03:34:01]  talking about what JavaScript library you're using. We're talking about what infrastructure you deploy on. This is no longer a choice that only impacts like how you like things you can
[03:34:17]  use to build your app. Like this, this affects where you spend your money. So yeah, I mean, I don't know how far we want to go down
[03:34:25]  this rabbit hole. I just want to like, like, it makes sense. I think next is doing incredible things in the space. Right. It's just like,
[03:34:39]  like there is a, there is a trade-off. I think it's cool. Like from a startup PC standpoint too, it's like they have a product,
[03:35:05]  right? Like, gee, I, I, it's the only part that's always tricky with this is you got to. It's, it's hard not to be
[03:35:14]  like a little defensive and be like, look, look, we do run on everything. We don't care that others can use us, but like, obviously we're going
[03:35:24]  to optimize for ourselves. Like I, I, that's perfectly fine. It's just like when the messaging doesn't reflect that and you're kind of like, Ooh
[03:35:31] , like, do I believe you? But I have a problem with marketing in general. Don't listen to what I say. This is why Dave can't market solid.
[03:35:37]  Every time he says something that's even like white lie-ish, I'm just like, no, that's bullshit. And you know, that's why I'm not
[03:35:44]  a marketing person. So if, if I'm critical here, you know, take it for, take, take that for what it is. I don't, I
[03:35:52]  don't, I don't, I've done this with JavaScript frameworks too. Like you could tell, like, it's like, it rubs me the wrong way.
[03:35:59]  Like I remember when Svelte used to call themselves disappearing and I'm just like, it's war. Like, no. That's not how the world works.
[03:36:21]  People want to hear nice things. I, I, Swix had this post where he talked about the 30 things he learned at 30 or something. And he was like,
[03:36:27]  he was like, you know, people don't want to like, people don't want to necessarily hear the truth. And I was just like, no, you know,
[03:36:35]  but he's, he's right. Swix is right. It's just like, that, that was, that was like really my problem when I first joined Twitter.
[03:36:43]  I'd just be like, I'd just be like, I wasn't in even a harsh way, but I'd just be like, I'd look, let me
[03:36:50]  help you question what you think, you know, let's, let's just open it up. I'm not, I'm not saying you're wrong, but let's
[03:36:57] , let's, let's expand our viewpoint to consider more options. And people are just like, like ups angry about it. I mean, it's Twitter. Of course
[03:37:06]  they're angry about it, but like, yeah. Anyway, enough talking about me. I can't even remember why we were talking about, about, about, about
[03:37:20]  next walk-in. And I, but yes, I, I, I, I'm excited about these primitives. I want, I want the next person who
[03:37:28]  goes out and goes like, I'm making a create T3 type of app to see that solid is the best platform to build upon from that perspective between solid JS, solid
[03:37:37]  start, all these pieces. Like, I know we can't give you the product. We don't, products take time. That's where like 80% of the
[03:37:47]  effort is, you know, like all the work is actually delivering the real thing. But it's also perfectly skews with the resources we have, you know, build
[03:38:00]  the tools. Other people can do the amazing things with them because there's a lot more of you than there is a me or David or McKeel or Alexis or Mil
[03:38:10] o. Like, you know, like solid core team appreciates it. There's even going farther and a bit further than the ecosystem, you know, people like Fab
[03:38:24] ian, people like Joe, you know, people building these amazing libraries. You know, so yeah, I mean, I, I get very excited when I hear about
[03:38:37]  people doing the real work, like Brendan, who migrated like three giant 300 route apps, like type of, I think he's, I should have added all the routes together
[03:38:50] . I think he's probably migrated something like 800 pages to solid from react. Like that's, that's the real work. What, what, what I'm doing is
[03:38:58] , is it's small by comparison, you know, so. Yeah. Yeah. Yeah. And now I'm glad other people are seeing, because we're starting to
[03:39:09]  get more representation, like on the dev rel side on people who actually talking about solid and educating people that solid amazing recent talks by, and, you know, the video by
[03:39:20]  Attila. Uh, and, uh, uh, Eric, um, can't say his last name, Raz, and, uh, you know, like just seeing
[03:39:33]  that spread out, you know? So, I, I mean, these are all things that are amazing that go beyond the boundaries of like, you know, what we just
[03:39:42]  do here. Yeah, I agree. Yeah, yeah, yeah. Yeah, yeah, yeah. That's my point. From that perspective, I don't think what
[03:40:06]  we do on Solid is that, you know, exceptional or whatever. Because, like, literally, like, it takes the hard part is building the actual apps and maintaining
[03:40:21]  them year over year and doing that. I'm very blessed with what I'm doing. I've worked on product teams for, like, I don't know, 15,
[03:40:30]  no, 17 years of my career was working on product teams, building products, you know. So, I didn't even get to give my rant about waterfalls that I
[03:40:44]  wanted to. Yeah, well, we can do that. We're going to get into this week in JavaScript in a minute. But I do want to talk about water
[03:40:56] falls one more time. Theo was doing his JS survey and he was trying to explain why waterfalls on the server weren't as big of a deal. And I started
[03:41:13]  realizing this whole alignment between that message and, like, what has been going on with, like, sort of Next.js and RSCs and stuff. Because it
[03:41:22] 's kind of funny is that if you look at the data fetching mechanisms that we've introduced and the new router that we've introduced in Solid Start. It basically has a
[03:41:34]  lot of similarities with the stuff from the app router and, you know, like the cache API. So, this is all anticipating stuff like server functions in the future.
[03:41:44]  But we still have load functions, which is kind of odd because you could be loading in the component. And I think we all kind of understand that when you fetch in the
[03:41:54]  component, you open up the N plus one problem. And you open up the, you know, like when you fetch users and they all have their friends and you have
[03:42:04]  to, you know, you end up having to fetch all their friends, you know. So, that's like, if you had a list of 10 users and they each
[03:42:12]  have 10 friends, you end up with 100 requests. But, you know, we've always had that on the client and we've known the answer to that is simply ho
[03:42:22] isting it. It's things that GraphQL let us do it for us. The interesting thing is before I worked on Solid Start, before I worked on SolidJ
[03:42:38] S, back when I was working on one of those product teams, I was working on an ORM. People don't know this about me, I guess. I was
[03:42:51]  working on a project called Backbone ORM. You could probably search it up and find it. And the public open source version doesn't have all the magic I was doing
[03:42:57] . This is how I got good at compilers. I was compiling JSON into SQL queries using Mongo type syntax and supporting things like relational database queries and joins and
[03:43:06]  stuff. And the reason I did so much work there is because I was trying to avoid server waterfalls from an ORM standpoint. Because it was actually causing performance issue
[03:43:18]  the company. And this wasn't anything special. This was just like an AWS deploy between servers. It wasn't even like, you know, crazy. It was just the
[03:43:29]  fact that this was actually the problem space that I had to work in. And I did a ton of compiler work. That's what I didn't use Babel at
[03:43:38]  the time. I was just like generating ASTs myself and doing these transforms. And I think anyone who's actually lived in that world knows that server waterfalls are
[03:43:47]  real. And while some are unavoidable, you would want to award them if possible. They're not as bad. What's the latency on a server request to a
[03:43:56]  database? Well, for us back in the day, it was between 30 to 60 milliseconds, which is a lot shorter than, you know, the 200 millisecond round
[03:44:07]  trip that we'd have from the client. Right? And what I'm trying to get at here is like there's obviously different scales there. But if you can avoid
[03:44:22]  waterfalls and you can't completely on the server, I think people take it for granted, right? Because you like, off, you have to get the user before you
[03:44:30]  do the next thing. Like there are a bunch of those inherent waterfalls that you can't avoid, but why welcome the ones you can? I think where this gets really
[03:44:40]  interesting is if you kind of just give up on the waterfalls and just assume that like the app complexity is too hard and that people, you know, just use a cache
[03:44:48]  and hope it gets there, which is a fair. You know, in a lot of cases, like you'll probably be okay as long as that latency, you know
[03:44:56] , is manageable, but every waterfall you can save there makes considerable noticeable difference on your, on your page. That's why, you know, big companies ultimately get to a
[03:45:06]  point where they're, they're combining requests together. Things like GraphQL or, you know, server equivalent protocols that let them do this. It's interesting to me
[03:45:18]  because we've been working so hard the last year or two to, to, to go to the edge, but the data can't come with us. So when you deploy
[03:45:28]  stuff to the edge, that distance latency is, might be closer to a client latency than, uh, than a server latency. So if your goal is to go,
[03:45:41]  Hey, I'm going to deploy myself to the edge and the databases, server waterfalls definitely make a difference. Right. And funny Dave, you actually posted it.
[03:46:00]  Yeah. It's, it's, it's a real thing. Um, well, yeah, I mean, is that, is that what the thing is? Like everyone
[03:46:10] 's like, Oh, we'll get edge databases, but like partial pre-renders. Like I can, I think that feature is kind of tied to this kind of
[03:46:16]  mentality because. That initial send back without the suspense, yes, sending it from a CDN is fast, especially when on the edge fast. But if you have to
[03:46:28]  boot up the edge function, there's a bit of latency there, not as much as booting up a server function, but let's say like there's a little bit
[03:46:35] . And if you, the, like the, the, the difference between sending it back from the CDN and the difference from booting up an edge function and then
[03:46:43]  fetching it from the CDN and then sending it back. I don't know if that like adds much or not, but the time it takes to render the shell of
[03:46:53]  a page in client rendered framework is, I mean, it depends on how big the page is. But like my experience is, is very short, like, like it
[03:47:02]  depends again, how big the page is, but if you're waiting on the data, we're talking maybe a couple milliseconds, maybe like the, like it doesn't make
[03:47:15]  a huge amount of sense. I think, unless you're accounting for that, you want to reduce the impact of the waterfalls because you're instead put your renderer
[03:47:28]  close to your database, you can waterfall as much as you want. Short communication, and then you send the final stream along to the edge, and you only take the hit
[03:47:39]  once. It's, which is pretty reasonable so like, I feel like this is sort of why partial pre-rendering is, is the thing right it's,
[03:47:50]  it's kind of like, it's kind of like, okay, yeah, what, I mean, it's two problems, edge is always going to have data problems probably
[03:47:58]  because of like GDPR and, you know, privacy considerations, not all data will be able to the edge, and, and, you know, and there's also support
[03:48:06]  for like node and stuff like can you use Prisma on the edge I think I saw when I saw Prisma 5 that like they, they enable it. But,
[03:48:12]  but the, the other side of it is simply the fact that like if your architecture promotes waterfalls on the server, then it's not really a winning game to push the
[03:48:25]  server to the, to the edge. Like you're, you're, you're, you're, that's where the, that cost will actually matter. So it
[03:48:32] 's, it's, it's good instead have two server function instances and distribute the work, which I think is, makes a lot of sense. I don't know
[03:48:43]  how that applies to cost or anything, but it is interesting to me. Like there's different types of solutions to a problem. There's like the solve it using engineering or
[03:48:55]  like solve it by changing, like changing what you're doing. And I think that kind of thinking out of the box is actually really good in general. It's just
[03:49:06] , sometimes you can be pragmatic and, and solve stuff anyway. We're not deploying on the edge. Yeah. The funny thing is before I was ever deploying on the edge
[03:49:20] , server waterfalls were a problem. Like, I mean, yeah, not everyone writes an ORM. So like, you know, like that's probably not like what
[03:49:28]  they're thinking about. It's the wrong place to do it, but people will do it because it's easy to just stuff everything instead of React one, but it
[03:49:58] 's bad. Yeah. Yeah, people, not everything runs on the edge, but I mean, I'm not willing to give up the edge for that reason. I
[03:50:11]  like every day we get more APIs and more capability. We just, it's not there yet. You know, and this is so funny because I'm like, am I
[03:50:18]  taking the standards position here? Like I'm usually the guy who's like, yeah, standards aren't moving fast enough for me. But I think the difference is,
[03:50:29]  is when you work in the browser and the standards aren't working fast enough for you, you just build something better on top of it. You don't go, well,
[03:50:37]  the way that we did it before differently is better. Like, you know what I mean? Like we don't just go back and say, yeah, no, it's
[03:50:43]  the way to go. That's not, that's not the solution. That's, that's pragmatic. That's practical. But that's not the, that's
[03:50:50]  not a direction for the future. We know why we want edge to be good. We know why we want these web APIs. It's not practical today. You know,
[03:51:02]  it's kind of like in some people's view, I use react today. Solid's not ready. And I'm not saying react won't be good in the future
[03:51:14] . I'm not saying node won't be good in the future, but there's a certain pragmatism to choosing the solution, but that can't be where things stop
[03:51:25] . Because we already know that there's benefits of going the other way. You guys are having too much fun. Server components, SQL queries are turning server components. Yeah
[03:51:43] , let's just store them in the database. It's funny, I'm like saying this joke, but then we'll like find a use case next week for this.
[03:51:51]  We'll be like, there, that's how we solve their versioning. All right, all right, all right. So, yeah. I just wanted to rant
[03:52:15]  a bit about waterfalls because, yeah, obviously server waterfalls, in theory, are not as bad as client waterfalls. We know this. But, like,
[03:52:31]  it's kind of like, why even invite the situation in the first place? I mean, I like that next docs actually show, like, the pattern for preloading
[03:52:46] . Next, cache, preload. Like, if I do something like this and look here, they actually have, like, a best practice or data fetching or whatever
[03:52:56] . There's, like, an example where they show it exporting the server function and then, like, using it in a, like, exporting the whatever you're going
[03:53:06]  to await and then using it. I don't know where it is. It's somewhere in here. They have an example, but actually, yeah, here. Where
[03:53:14]  they're, like, what if we make our cache function and then export a preload function and then call that higher up in the route tree? That solves the same thing
[03:53:23] . If you look at this, this is the, this, this is, like, the API that we use for the new router. Right? So, you know
[03:53:32] , seems reasonable. Like, there are paths forward, but it's almost like the, the resistance for people to, like, push this as a standard or do it is
[03:53:44] , like, because they need the demo. They need those demos to be really hot, even though, like, it doesn't scale. Oh, sorry. Yeah,
[03:53:56]  you're right. I stopped sharing my screen. Yeah, I'm talking about this. The, the, the example of them using the cache API with the preload and
[03:54:08]  whatnot. I think my wife's telling me something. Yeah, I said that, I said this earlier in the stream, um, beta two is imminent. I,
[03:54:35]  I, I just got to decide, like, which bugs are, are, uh, worth squashing before I make it official. Cause yeah, don't get me wrong
[03:54:43] . This is going to be a release that breaks things. The router was a release that changed things too. We put the RFC up forever. Um, not forever,
[03:54:52]  but like for a while we worked through it. And I did the exact same approach with solid start. Um, there's a PR that is just sitting here ready to
[03:55:01]  get merged. I got to get this in first probably, but like, you know, there's hundreds of commits here. It changes everything. New docs. There's so
[03:55:10]  many changes that honestly, and I hope you guys have like my understanding here. I'm probably going to close every issue on the solid start repo because almost none of them are
[03:55:18]  relevant. because either the stuff has been moved out of solid start or it's, uh, so like into another repo if it's relevant or it like just doesn't
[03:55:29]  apply. Cause now it's like Nitro or Vinci and it's not what we're doing anymore. Like all the CSR stuff doesn't make sense. All
[03:55:34]  the adapter stuff doesn't make sense. Um, I could release it today if I wasn't streaming, but it looks like, like, you know, I'm, I
[03:55:44]  always want to make sure that there's, you know, you know, a few less bugs, you know, so to speak. There are also, which gives me
[03:55:51]  to talk about the, the, the, the, the, the gaps I need help with type script. If you, if you guys like type script, solid start is
[03:55:59]  still using its weird at build time approach where it's not like pre type scripting, which pisses everyone off, but it was easy to develop that way. And the
[03:56:07]  stuff that's like server only, um, is often JavaScript. And then the stuff that's client like shared is type script, uh, or like sort of client,
[03:56:15]  like runtime only is type script, but I'm missing types stuff is bad. It's passing the type check, but I, and as a user, I don't notice
[03:56:23]  the type issues, but I'm probably like, I'm probably not a very power user. Someone needs to vet the type script. I think that would help get solid start
[03:56:31]  out, um, beta two out this, the, the other thing. So yeah, I talked about issue bankruptcy. I talked about type script. Um, we need
[03:56:39]  to probably start a new docs effort, the current docs. I mean, I showed them off today. They they're there. This'll work. Um, but yeah,
[03:56:48]  feature wise, I'm happy for this to be the, where we're at. Obviously I'd like to fix the islands, but islands is still experimental and we have more
[03:56:57]  work to do there, but. Solid start beta two is ready to go because I want to push this. I want to, I want, I want us to over the
[03:57:04]  next few months, um, really worked on getting solid start version one. Um, out of the end of Q1, I think in the next couple of months,
[03:57:11]  we know, like I already feel confident from the pieces we have. This is just bug fixes and you know, a chance to hear from people using it about all the stuff
[03:57:20]  that I didn't think about when doing this. I just feel a little bit more confident this time because this is like our third time doing it. Never release on Friday
[03:57:37] . That's the other thing too, but the other similar thing is, do you ever release the week before Christmas? Like I've, I wanted to not lie.
[03:57:47]  I wanted to do the stream last week and I want the release this week. Um, I've learned a bunch of stuff, but it's good. You know, it
[03:57:52]  took time. I realized that the routes weren't being handled properly with performance issues, route free loads. I learned that the deployments weren't working properly with async
[03:58:00]  local storage across all platforms. I worked with the Nitro team to do that. I put two, uh, PRs into Vinci to fix some other bugs. Like
[03:58:07]  I've been busy, um, on, on like, you know, really testing out the platform under solid start. Cause like when you're, when I'm building
[03:58:14]  the features, I'm like just doing it locally. So it's like really easy. Cause it's like, you know, works on my machine. Right. But,
[03:58:20]  um, this last week was really a time to start like doing the preliminary, you know, works on your machine. And I think that, um, you know, there
[03:58:30] 's going to be more stuff along that line. Yeah. I'm sorry. The router changes probably caught you off guard. I'm like, I'm like, yeah
[03:58:42] , so those are that router RFC that I've been floating around for the last month. I implemented it finally now. And you're like, uh, so yeah,
[03:58:49]  we, do we have to update docs? I'm like, yes, there was a lot of doc changes. And you're like, and you're like, what,
[03:58:55]  when, when, when, uh, when are you releasing? I'm like, probably in like, you know, two days or a few days. And yeah, sure
[03:59:02]  enough. Like, I think I told you on Thursday and released it the next Wednesday. It's like less than a week. That's just not fair. I'm sorry
[03:59:08] . Um, this point. Try it on new projects. I think we're there. I think, uh, I think you can install it. Uh, NPM
[03:59:20] , and it, or PM PM, create solid at beta and just give it a shot. That's where we start to find bugs. I think we're kind of
[03:59:27]  feature repeat. We just got bugs. I I'm, I'm close enough. I just know about a couple of bugs. So I want to fix them, but I
[03:59:33] 'm close enough just to pull the trigger on this, like, and start working on it Monday morning. Um, always quit your job on a Friday. Yeah, exactly
[03:59:57] . That's why, that's why people are like, yeah, you, you release after Christmas. Cause you don't want to be on the hook for people. Cause
[04:00:02]  this is the tricky part is like, I changed the router. people can still use the old version of the router, but everyone wants to get very, you know,
[04:00:08]  angry about like how I broke all their app. And it's just like, fix the version. Like I showed you today that other than one thing that I got to go
[04:00:17]  fix, you know, there'll be like a solid router 9.2 or whatever. Um, solid start and the old router also work quite nicely together. Right. So
[04:00:28] , um, you know, it's okay. It's okay. We're not always on the front of the, front of the update curve. I, I,
[04:00:38]  it's funny. I'm, I'm very slow to do releases from the sense of like, I'm really, I'm care about Semver and I want to make
[04:00:43]  sure that's 1.0 and do all this. Like very careful. But when it gets to the last midnight hour, I am very much more tempted to just get it
[04:00:50]  because the longer I have to like find more bugs and just not just push it out. The, then it never gets out. So I'm, I'm at that point
[04:00:58]  where it's like, it's been a long time. Query preempts and where you can get it off the route or you can get it off the API
[04:01:12]  event. It's like in the prop. Yeah. I, although I think the APIs were missing that until last week. I think we're in a good place now.
[04:01:22]  Yeah. Yeah. If anyone's interested, reach out on discord. Definitely. Definitely. That's a problem. I've had to learn how to turn off. It
[04:01:34] 's challenging. Do you expect people to build meta meta framing? So tell us how to start a hundred percent. Yeah. I said this a little bit early in the
[04:01:45]  stream. This is my expectation. Um, I wanted to make sure that the pieces are low level enough that. Yeah. This, I, I, this is,
[04:01:57]  this is what I expect. I, the, the, the problem we're trying to solve here is that Vite isn't quite enough to do SSR for your specific
[04:02:06]  framework. You can't just like web pack, configure it. You need the, like a little bit more, you know, with modern things. I showed you in
[04:02:13]  real time, as I went through how hard it is to do it manually and what solid start enables for you. Like, so this isn't necessary, but beyond that,
[04:02:20]  I'm not the guy who, like, I don't want to be like, to use solid. You should use a meta framework. Use, you know, blank,
[04:02:28]  blank or blank. That is not us. In a sense, I'm telling you all the use solid start, but I've tried to make solid start. I've
[04:02:36]  tried to make solid start as unopinionated, as low level as I possibly can so that there's no friction there. The reason it starts on CRA, like
[04:02:44]  it did is, you know, like in my examples, I don't see any reason for solid start, not to replace all our V templates on solid templates. We can
[04:02:52]  literally just go in and be like, all our templates are solid start. Solid start is called start because it is a starter template maker. It is kind of a meta framework
[04:03:01] , but that is why I call it start. You know, I could even drop the solid in front. When I talk about it, I don't always go solid
[04:03:08]  start. I just call it start because that's, that's what it is. It's, it's a starting point. Yeah. Okay. See, here's
[04:03:19]  the other thing. Part of it is you could like, put like beta to tag on it and maybe I won't close all the issues on it. But like,
[04:03:26]  I'm going to, if I'm going to go issue bankrupt and you're trying to report on it, it's kind of awkward. I almost want to release, go
[04:03:32]  issue bankrupt and let's just start clean slate again. It'll be a lot clearer to see the feedback. That's an argument for releasing. It's also an argument.
[04:03:40]  It's also like the most asshole thing for people currently using it when I'm just like off a cliff. And I'm warning people in here that it's off a
[04:03:47]  cliff. Um, you know, I've suggested before on stream. I suggested in the docs, I suggest in the CLI, I suggest it literally everywhere that solid start
[04:03:56]  can break at any moment. But like, how long do I, do I wait? Uh, you know, December 8th. So exactly a week ago, I
[04:04:04]  told everyone that we were going to issue bankrupt. I don't know. I have many interns later hosted on patch series, certain static solid and everything that's made. Yeah
[04:04:27] , exactly. But the thing is, it's nice to just be able to do what I did today to take your CSR app and go, oh, I want
[04:04:37]  to server render it today. I want an API endpoint today. We do have a solid start channel. Um, it's not the best way to collect stuff, but it
[04:04:51] 's there. Let's go and then release. Yeah. I mean, I'm not gonna lie. I'm probably just going to close pretty much everything. If you
[04:05:06]  have a new issue, you can market beta too. Yeah. Bankrupt on Christmas. I love it. That's where J Dev opened up over it. Benton,
[04:05:21]  you're the, you're the worst. Oh, man. Uh, it happened in the opposite direction, ironically, because solid router is using future solid 2.0
[04:05:41]  APIs, like kind of proxied, not like fully implemented. So, um, solid solid 2.0 will be the real solid 2.0 release, um
[04:05:49] , which will be the real, like, maybe, maybe solid 2.0 will be the real solid start release by the time it gets out. But my intention is
[04:05:57]  to get solid start out before solid 2.0. There might be a bump up. We might call it solid start 2.0 to get that bump up. Right.
[04:06:03]  But like, because like, you kind of get what I'm getting at. Almost nothing changes from an external API standpoint because we don't own anything. So yeah.
[04:06:15]  All right. All right. All right. All right. Are we ready for this week in JavaScript? All right. People are still with me. I appreciate the people who
[04:06:26]  stay on the stream this long. Um, I'm just checking Twitch now to see because sometimes I'm, I miss. There's some for first time chatters. Okay
[04:06:40] , good. I guess any subscriptions. I guess the, the Twitch ads don't bug people enough. All right. All right. All right. We're, we
[04:07:04] 're running out of time quite quickly. I work facing this, this, this is the, this is the, this is the setup, right? All right. All
[04:07:13]  right. Let's see here. Am I, am I ready to talk about this week in JavaScript? It's two weeks, isn't it? When's the last time
[04:07:30]  I streamed? Um, so I can check on my own timeline. December 1st. Okay. Good. We're good. All right. Let me flip this
[04:07:53]  around and let's get started. All right. And with that, let's talk about this week in JavaScript, which as it turns out is the last two weeks in
[04:08:01]  JavaScript. Um, I don't know if I missed a bunch of stuff. If you've been paying attention to this stream so far, I have been working like crazy on
[04:08:11]  solid start beta to, um, getting those finishing touches in. So I probably missed a whole lot that happened, but I'm here to chat. So let's chat
[04:08:18]  and take a look at what's been going on. All right. I, I, I'm just gonna put this one out little solid thing. I haven't,
[04:08:37]  I haven't seen some nice boost from Theo on this kind of stuff for a while, but it, uh, it was definitely funny. Um, why do frameworks keep
[04:08:44]  on evolving to solid JS? Um, obviously nice pat on the back on validating our approach, but he's referring to the fact that like the next version of view,
[04:08:54]  the next version of Svelte, not just signals, but like obviously a bunch of them, you know, angular, quick, pre-act all have signals as well
[04:09:01] . But view and Svelte are even basically compiling into the same kind of output and render, um, as solid in the next version. So, yeah,
[04:09:11]  I mean, it, it is, if I, I guess this comes for, is this a play off my name? current Carniado Carson. Um, but definitely
[04:09:20]  it was fun. Uh, let's see here. Yeah. Okay. Let's while we're kind of playing through solid ask news, someone went through and actually.
[04:09:35]  Um, built a very simple, like list component in a bunch of frameworks and showed that that was 24 lines and this many characters. This character count is not fair to solid
[04:09:46]  or react to be fair, because it counts white spaces. Um, and it counts a bunch of other stuff. I think if I go down in the thread, he am
[04:09:56] ends this stuff. He, he, and he wasn't using the right view API. So view is the same at 24 lines. And. You know, view three
[04:10:07] , there we go. 24 lines, 471 characters. And it boils down to the, essentially with these kinds of code examples. Why am I talking about code examples
[04:10:18]  here? Because this never gets old. Two way binding is basically the only difference in code lines. Frameworks have gone so similar in terms of their state thing. Like what
[04:10:27]  I was just talking about, about Theo, about the, everything becoming signals or whatever, or like hooks that look like signals. That the code savings thing is kind of
[04:10:36] , you know, funny. It's basically like, do you think two way binding is good? Okay. That adds, you know, X number of lines, like 10
[04:10:45]  number lines on your hello world app. You know, do you think that you have an FS SFC? So should you wrap your thing in a function or just put it
[04:10:56]  in a script tag? Well, that adds another couple of lines. The actual type number characters is much, much closer. It's something along the lines of like,
[04:11:04]  um, I think at the end view and Svelte are basically the same off by about like 30 characters and react and solid come down to like the 600s. So
[04:11:12]  like they're about 200 characters apart, which is typing, you know, on a hello world app. It's definitely something that, you know, I take, you know
[04:11:19] , somewhat seriously. And for that reason, while solid is not optimized for typing experience, it is still a very important metric. So I worked on another framework, um
[04:11:32] , called Marco. And if you guys are interesting, if typing is a very important metric to you, for you, Marco is almost twice as good as Svelte.
[04:11:42]  It's the, it's the, it's, it's, it's, it's that much better. I didn't bother with the character count, but I
[04:11:48]  ensure, I ensure you that this is only 15 lines of code instead of 24, which is like another 30% improvement. And it's even less characters to the point
[04:11:57]  that I wouldn't be surprised if it's like half a Svelte again. So if you care about important metrics, like how many characters you type, I strongly recommend
[04:12:09]  using Marco. Not just for the performance aspects, because, um, you know, especially with Marco six, the performance is going to be really good. But the number
[04:12:17]  of characters, um, if that is your guiding metric, it's very hard to be Marco. I I'm having a little fun with this to be fair. There
[04:12:34]  are, there are trade-offs of the single component file thing that it's very easy to make an example that makes them look way clunkier. Um, ironically
[04:12:44] , Marco doesn't suffer for the single component file thing because they, it's almost like they're optimized for this. Um, you know, they, this, the two
[04:12:52]  way binding, like, I think it's, I think it's definitely alien. I think it's important to understand. I liked using Marco as a bit of a,
[04:13:02]  what do you call it foil on these kinds of discussions, because you can always think of a, like a more concise syntax. Um, that is more powerful, but
[04:13:13]  like at a certain point you have to like decide how far away do you want to get from say JavaScript or language or firmware. Technically this is like JavaScript in here, but
[04:13:22]  then like, you know, this is a different templating DSL. You know, this is actually like pug or, you know, Jade, essentially this is, this
[04:13:30]  is white space matters. Um, essentially these are HTML elements. This whole thing is HTML elements. In fact, um, this is an input element with, and I
[04:13:41]  think, you know, a lot of this comes down to familiar familiarity. Um, so I just wanted to like highlight this for a moment because it's, it's like
[04:13:52]  the thing that's important is whether you think two way binding matters or if it's dangerous. I think those kinds of philosophical decisions are way more important than like, did
[04:14:04]  you type less characters? Cause you can always find a way to type less characters, but you can't always find a way to make, uh, you know, stable,
[04:14:14]  predictable app. You know, I mean, this relates even to the, like the Svelte 5 thing, right? Where some people are getting, having a hard
[04:14:21]  time with ruins. They're like, Oh, that's more to type, but it's like a way better model. It makes way more sense. It addresses all the
[04:14:27]  gaps in Svelte. The, the, the typing metric and people who are upset about it are probably the same people making comparisons like this. This typing metric just
[04:14:36]  is so irrelevant, especially when shown in a hello world app. But thanks to people like who post stuff like this, I can always show people why Marco is just the best
[04:14:50]  framework ever made. Yeah. Yeah. Yeah. It's, it's actually markup. I went for concise mode. Um, yeah. Yeah. Yeah. I
[04:15:10]  don't, I don't think Michael's joining us today, unfortunately. Okay. Um, let's see, let's go. So yeah, what else did I do
[04:15:21] ? Well, I told you, I posted my huge router thing, hoping to get feedback and tell people that it was coming. Um, there's good responses. We actually
[04:15:30]  released it. So solid JS new router is out. It enables incredible stuff. I do. This is the first time that I've changed my routing paradigm in like a
[04:15:41]  decade. So I understand it's a big shift and it was a big shift for me. And it's going to be even longer long tail. As I said,
[04:15:47]  feel free to use the old version of the router version nine for as long as you feel comfortable, you might have no reason to use the new stuff. So it's
[04:15:56]  going to unlock some really powerful things out. It's going to unlock some really powerful things out of the box with like the fine grade updates of the cache. Um, and
[04:16:03]  validation through actions. Um, things like create async primitive, which is like a proxy for solid 2.0. So everyone will get it eventually. Uh, stuff
[04:16:13]  like on link, cover, preloads, really a lot of really cool features. I think it's worth it, but I understand, you know, if your app
[04:16:21]  you're like, I, you can't just change it. Writer is probably the most opinion part of the, of your app. If you remember, everyone remembers
[04:16:28] , I did a beat conference, uh, talk a little while ago. Let me see if I can, if I can, I'm going to grab this off screen for
[04:16:35]  a second, uh, drive.google. Um, what am I looking for? What was my beach top conference talk called decomposing the meta framework? Right? Yeah
[04:16:46] . Let's do this. I showed this image. No, not that image. That's a good image, but I showed. I showed this image on, on
[04:16:57]  stream and it's our on the, on the talk. And this is why, like, for example, I could see releasing 1.0 of solid start before getting to
[04:17:09]  1.0 of the router. Um, solid start basically sits like right on this line. So, you know, nitro Vinci slash beat, you know, and
[04:17:24]  then like, solid start and solid kind of sit here and, and then the router sits up here. I think, I think this is like a important thing because the
[04:17:35]  most churn happens here. It's so funny when we talk about standards and stuff, because we, we want the thing below us to be able to support anything we want
[04:17:44]  us to want to do. But then the thing above us, we don't want to, we want to like, you know, offer as least API area to like
[04:17:52] , like do just exactly what we want, because the more options we work, we want to support the more work it is for us. Um, and ultimately it means
[04:18:02]  that when you get higher up in the stack, you just start like getting really opinionated this to save people on complexity of the decisions. I like living right here,
[04:18:12]  but it's, it's funny that it's, it makes me a hypocrite sometimes in terms of my expectation of what comes below and what I want to offer above.
[04:18:19]  So as I said, it's very important to find the right spot. Um, but yeah, I, I hope that makes more sense in terms of how the router
[04:18:29]  fits into my view of the world and solids view of the world, I guess. No, the router is 0.10. So, you know, I, I
[04:18:40]  did bump 0.9 because what I did was I anticipated future solid start features. We were on 0.8 and I was anticipating future solid start features. And I wanted
[04:18:53]  to support, um, it's funny. I wanted to support solid start, but I knew that it would use stuff like async local storage. So it would only
[04:19:01]  work on newer versions of solid and maybe moving forward 2.0. So I went back and bumped the minor version before I did the new version to give us space so that
[04:19:12]  we could like basically split off between the old and new versions of people who actually want the existing versions of solid router use 0.8. 0.9 is the old
[04:19:24]  router with updates to into the future. And then 0.10 is the new router. Okay. Yeah, I, a little bit more solid news before I move on.
[04:19:43]  I just want to say I've been very stoked to see the community. I already talked about it a little bit, but like, like these guides are starting to show up
[04:19:50]  to use common things. Like, you know, century, um, clerk, um, you know, the, I don't know if this is the best way I
[04:19:59]  want to use clerk, but like, I'm just putting it out there. Like solids ability to just kind of work, you know, with its composable premise makes it
[04:20:08]  really easy to just integrate with these other libraries, even if there is an official stuff yet. So I'm very stoked to see this kind of progression. Then there's
[04:20:20]  other things like people in the community working on solid JS compiler plugins for bun, you know, this is very cool. Um, new comp was this new component library.
[04:20:31]  So unstyled customer print is. Yeah. So like very stoked over the last couple of weeks to see more people getting out there, releasing libraries, talking about this stuff
[04:20:43] . Just want to highlight a few of them. Okay. Okay. Let's go back here. Yeah. Big release. You know how everyone knows how big of a
[04:20:51]  fan I am of Astro Astro 4.0. It feels like Astro 3.0 was just the other day. And it was, we had Matt Phillips
[04:20:57]  on stream in August and August, August 25th. I think to talk about Astro 3.0 and the view transitions. Um, let's take a look at what
[04:21:07]  Astro 4.0 brings. Um, Astro dev toolbar. So better dev tool experiences, internationalization, I 18 routing. Sounds good. Let's see, dev
[04:21:18]  toolbar. That's nice. Convenient. I love the work they're doing on this kind of stuff. This is the kind of polish that I've, that,
[04:21:25]  that I've always liked, liked, liked to see. On a series of tests to audit the common accessibility issues. Nice. Nice. Yeah. No, this is,
[04:21:38]  this is lovely. We partnered with Sentry to design the initial version of the toolbar. Story block. Yeah. Okay. Internationalization. Nice. This is something that
[04:21:53]  I'm still interested to look at. One of the cool things about the work we did on solid start to pull the router out is that. We have more flexibility there.
[04:22:02]  If people want to use solid start to build mobile apps or whatever, and they want to use a completely different routing setup or whatever. I think it's, it should be
[04:22:09]  possible. Right. And I think similarly, I think as we explore into internationalization, I don't know much about it, but we can prototype this in user land.
[04:22:18]  Before we get the right international, internationalization solutions. Incremental content caching. Experimental feature to dance. You have to build. Okay. So they, they
[04:22:29]  now have a cache in front of their static builds. That's cool. yeah. Yeah. Yeah. That's a big performance thing for people doing pre-rendering
[04:22:40] . It's not a world I live in very much. I felt starts pre-rendering is probably like. Pretty slow. Now. Our old one was fast.
[04:22:46]  Cause we literally just fired a node process. And I didn't even like make a real HTTP service server. I just like baked it. Now that we're using nitro
[04:22:53] , like we're going through the, whatever their processes. It's probably a little bit heavier, but it's way more powerful. So not primary use case, but
[04:23:02]  this, this is going to make a difference for a lot of people. Ooh. New view transition. If yes, this is what I care about. Okay. Um
[04:23:12] , what do we got here? Animate, persist, morph, common elements, one page, another slide, fade. Okay. Forms. Ah, so they added
[04:23:23]  form interaction. Makes sense. Nice. Pre-fetching. Okay. So the, yeah, it's a bunch of broader. Oh, nice. Yeah.
[04:23:40]  So this is something that we probably should look at a solid router as well. They have a client side JavaScript navigate call. Yeah. This is interesting. I mean, I
[04:23:54] , I bugged Fred a few years ago saying that he was going to build a JavaScript framework. And I think he's only starting to realize that now, I mean,
[04:24:03]  what, like they're building, they're, they're building a router over at Astro essentially now. Cause this, this stuff isn't MPA stuff. So
[04:24:13]  we're getting to a point where, yeah, no, this is interesting. I think the biggest trick, tricky part about this is the persistent global state problem that I talked
[04:24:24]  about before. I think this is like a huge gap from building apps, but for building client navigable, navigatable, um, kind of like content sites, which
[04:24:36]  is what they specialize in. So this is kind of nice. Like they, they fill in the gaps. Now you use Astro router with the islands of your choice
[04:24:44] . Like at some point you're just wondering, like, are they going to push out the framework islands altogether and be like, yeah, you don't need islands anymore.
[04:24:51]  You can just use, you know, this new Astro feature. I mean, this is, they're, they're kind of taking on more and more, which
[04:25:00]  is, which is interesting. And I, I like Astro's clean focus on it. Cause they're like, we're content site app. Like there's clear
[04:25:09]  gaps if you're trying to make apps here, but yeah, no, this, I do like, I do find it interesting to see that they're doing more.
[04:25:18]  Logging redesigned docs. Yeah. Cool. It sounds like a good release. Yeah. And I think there's a lot of space here. Everyone's in the app
[04:25:37]  space and then trying to get more, you know, like you can do more, you can do, you know, basic sites with it. And they're trying to simplify
[04:25:44]  it. These guys are like almost unapologetic about it. They're like, Oh yeah. Yeah. That's completely broken. But you know, you could
[04:25:50] , you know, like, like they're just like, because their starting point is like the content site. They don't. Yeah. Because like the, the answer is
[04:26:01]  that you can put a client site app on a Astro page. You know, you can actually use Astro's router to client navigate between pages and then make, make
[04:26:10]  one of those pages, a single page app. Like you can completely do this. I think the, the part that's interesting is like, I think that's a
[04:26:20]  great, it's a great story too, for like migration standpoint. Right. Because you're like, there's a lot of CS, like client rendered pages that just don
[04:26:28] 't work or they can't migrate to server side rendering right now. So like, it kind of fits with this whole story. On the other hand, if you were
[04:26:38]  going to tell me that I could have two systems doing it versus one system. There's handle everything. I'm always going to take the one system. So it's
[04:26:46]  like, you will see how Astro, the JavaScript framework comes along because at a certain point, the gaps in RSCs, the gaps in meta frameworks today aren't
[04:27:01]  going to exist. And you're just going to have solutions that can handle all situations pretty decently. We're not there yet, but I'm interested to see what
[04:27:10] , what happens when we do get there. I tried to put solid start inside of Astro ironically, but that's a whole other story. But yeah, it's
[04:27:28] , it's interesting. As I said, like, like if you're building something app, like it, it's almost like if you could get into a single system,
[04:27:37]  but you'd be much nicer place. I mean, it's just unfortunate that we're not there yet. Like Astro's approach is a lot easier to get to
[04:27:45] . It's actually almost a simpler version of what we did with hybrid islands routing a year ago. But it's like the gaps are not, you know, I'm maybe
[04:27:56]  I'm a perfectionist. The gaps are not. It's not okay with me. We have more to do. Got more to do. Everybody has more to do.
[04:28:08]  Okay, let's keep on going. I found this one interesting. Tanner tried to try to see if people preferred concurrent rendering versus fine grained updates. And what would
[04:28:21]  you choose? I found this conversation really interesting because it's really hard to write external state that people talk about how, you know, people fetch in the components and react and
[04:28:30]  that's how they want to do it. And it causes waterfalls. But react innately, whether you consider it for better or for worse, that's like reacts
[04:28:38]  at biggest simplification. It's biggest flaw. They are basically equating your data tree with your view tree. That's just how they innately do it. You
[04:28:48]  can obviously pull state out and external state, you know, and that's what a lot of libraries do. People like Hannah are working on, but innately all their,
[04:28:55]  you know, concurrent rendering, everything is the fact that state and UI are the same thing. Like the component owns it. Even that waterfall thing. That's why they
[04:29:05]  work so hard to prove that that is viable, but in, but like, it's, it is a fundamental misalignment. They are related, but they are not
[04:29:13]  the same thing. And this means that people who are trying to work in react world and they are managing external state have a horrendous time at trying to make this stuff
[04:29:22]  work because it just like, it's like they're fighting the system. And he's got to a point where he had to choose one way or the other way.
[04:29:34]  And in the end, he chose fine grained updates rather than concurrent. Obviously there's like reply guys in the chat. I'm probably one of those reply guys. I
[04:29:46] 'm like, use solid and get both. But like, like, like, I can only imagine the internal struggle that was behind this post where you are fighting every part of
[04:29:55]  your body, being deep urge to just throw it all away, channel all this effort into rewriting nozzle in solid JS instead. You are not wrong. So like,
[04:30:10]  actually, what's the Maple left to say? I read the same conclusion. Whenever I have data, have a UI. So I need to optimize. There's never a
[04:30:26]  clean solution. Even with something like MobX, you're forced to break down components more than you would otherwise. This applies regardless of your pick, regardless of what you
[04:30:34]  pick. Yeah, I think I got to be a reply guy here, regardless of what you pick. Yeah, I'm just being, I'm just being facetious
[04:30:46] . It is interesting. He ended up doing a poll. He chose fine grain updates, but it was definitely a struggle. It's interesting to see how, like,
[04:31:00]  you're basically weighing the React model of the universe, which is kind of, they haven't been secret about it. They've been telling us this the whole time and people
[04:31:08]  just fought it. Like if you were using MobX with React, you were kind of doing it wrong. Of course, no one officially says that, but like,
[04:31:15]  you know what they think about signals, right? Like, they're like, oh, you can do it. It's kind of like when people write extensions for solid that
[04:31:24]  like enable two-way binding. I'm not, you know, you just smile and be like, wow, that's very creative. You know what I mean?
[04:31:32]  Like two-way binding, I think is like the absolute worst. So like, but the thing is the ecosystem evolved like this. React went silent for a few years while
[04:31:45]  working on like the new model. New model is pretty good, but it's not like things diverged. And the people who are sitting at that divergence point, stuff
[04:31:54]  like solid makes way more sense to them than where React goes. I think where React went actually makes a lot of sense, but it's like they haven't reconciled
[04:32:07]  the gap here. And it's hard to do that because these guys are kind of playing outside of the rules. Yeah, yeah, that's right. They come Dan
[04:32:24]  compared signals to go to statements, Danny Ramal. I remember that, that one, that one, like he said it in a way that he thought like I wouldn't
[04:32:31]  be offended by it, but I was like, come on. Transitions are really good. I feel like if I was in his position, I would pick concurrent rendering
[04:32:49] . Like it sucks, but then you're kind of dislike. I mean, I know in his position, I could in his position. I care about performance. I care
[04:32:56]  about how my app updates. I, you can't, but if I was a library developer for React and I cared about, you know, doing the React thing,
[04:33:05]  I would pick concurrent rendering. Fine grained updates are great, but you don't need them. Your app might be slower. Things might be, you know, there might
[04:33:14]  be downsides of it, but like, you're not embracing React for what it is. I think the problem is like React has too much in the market share.
[04:33:22]  So everyone's like, oh, just, you know, no one got fired for choosing React. The truth of the matter is some people should get fired for choosing idiomatic
[04:33:31]  React. I'm going to put it out there. I'm going to put it out there. The thing is, it's not about the time slicing. It's
[04:33:56]  about coming up with a consistent async model that prevents tearing, that makes the whole system unified. And you can do stuff yourself and not worry about like, we were
[04:34:06]  fine without concurrent rendering for like, years and years and stuff like signals even make it easier to kind of like do these kind of isolated updates. But like, directionally,
[04:34:18]  design wise, it's, you know, when a designer shows you the new design system, and they explain to you why like the slight slant on this touches this other
[04:34:27]  slant, and that like, this evokes some kind of thing. And like, the whole thing was this genius about like, how much this line slanted,
[04:34:34]  or how much, you know, the spacing and it just, it has this like, incredible metaphysical thing where every all the pieces in the world collide in there. Like
[04:34:42] , this is when I knew that I figured it out, that all like everything just kind of stacked up, and that the whole thing was consistent, and perfect and beautiful.
[04:34:52]  Current rendering is one of those kind of things where like, maybe you might say that's in the eye of the beholder, but it's kind of beautiful, the
[04:34:59]  way all the pieces work together and you think of the story of suspense and on the server and streaming and everything just kind of the transitions, all the pieces are like, I
[04:35:09]  saw what they were doing. And I went to implement it as soon as possible because I was like, damn, like, what it enables how it changes the way you
[04:35:19]  fundamentally approach async is incredible. But like, we've been doing it the other way for a decade, it's still good, you know, don't update to
[04:35:32]  the new version of solid router, like, it's okay. It's really, really quite okay. It's really, really quite okay. It's expensive to whatever
[04:35:46]  you are, but, yeah. Anyway, yeah, I don't envy his position. I don't envy his position. He's making the exact type of app where
[04:36:07]  he should be using solid. He knows that we all know that. We're actually flexible, though, so he can do what he needs to get done with react. So
[04:36:20]  huge props to him, but you can see, it's like paddling upstream. Okay, we talk about the router. I mean, Tanner just had hits all week
[04:36:34] . I don't know if anyone saw this video, but like, I kid you not, it's funny on so many levels in a subtle way. But this is
[04:36:45]  mostly around the routing conversation, because actually, if you actually pay attention, us old guys, and we'll get to old guys comment in a minute, but me and Ryan
[04:36:56]  Florence, even though historically, we've had like, public disagreements, so to speak, you know, like issues. We actually, technically, I believe we believe
[04:37:05]  in a lot of the same things when it comes to architecture and, you know, building performing apps. I think his opinions are dead on. I think that I'm
[04:37:15]  a huge Ryan Florence fans might surprise people, even if I poke fun at a couple things. And this is this, this whole like, like struggle. I just love
[04:37:30]  this clip. Because he's talking about his journey with the router. And you could see, you know, you know, it's funnier with audio on too,
[04:37:41]  but it gets to the end here somewhere. And, and everything goes crazy. And, and, and then we just have Next.js going like, what are you
[04:37:54]  fools doing? I honestly, Tanner, Tanner definitely had a fun, fun week. Um, but anyway, I just, I just wanted to point this out, because like
[04:38:09] , this, for me, there, there's been a Tanner arc here. I don't think I posted the last thing where he made his decision. But, um
[04:38:16] , yeah. Oh no, here it is. Yeah. Here's the Tanner arc. Moving to Tanstark router backfying green reactor. Our apps route components are
[04:38:23]  now only updating the exact state that rely on change. Yeah. So that, that is the Tanner arc. Um, I'm, I think you'll be happy with his
[04:38:34]  decision. I just think that it's, this is one of those places where reacts kind of becoming more opinionated is causing this kind of force. And Tanner has been
[04:38:47]  like streaming stuff on the router. I think he did a stream earlier today. I'm pretty stoked on, um, on where, on where that's going. Um,
[04:38:58]  let me see here. Did I catch up here? Yeah. Okay. Okay. So I'm done with the solid J stuff. We bookmark time. Second.
[04:39:08]  No. Did I, I talked about this last stream, right? Yeah, I did. I talked about the remix react router stars thing. Yeah, I did.
[04:39:19]  I did that last week. Um, okay. I, I, I talked about this last stream, right? Yeah, I did. I talked about the remix react
[04:39:26]  router stars thing. Yeah, I did. I did. I did that last week. Um, okay. Another release I want to actually call out right now while we
[04:39:39] 're still kind of going. Um, analog Brandon Roberts, some of you guys know, uh, came on stream, talked about this. This is the beat nitro framework
[04:39:51] , uh, built on. Uh, yeah, for, for angular, um, they're getting very close to 1.0. So I'm pretty, I'm
[04:39:58]  pretty stoked about this. Um, mostly that this is part of the angular Renaissance as we call it. Um, they have a legit, um, they have a legit JavaScript
[04:40:12]  full meta framework here. Um, currently this is a few little pieces that they need to get, get worked for migrations, but this is, I love the,
[04:40:24]  like the approach here. It's they're basically taking NX modules and just mapping them to analog JS modules. And then saying, we're good to go. I think
[04:40:32]  this is, this is, uh, this is gonna be interesting to watch the angular, like entering the fray with signals, entering the fray with meta frameworks. Um
[04:40:43] , we'll, we'll have to see where it goes. So I'm definitely paying attention. Okay. Okay. Okay. Okay. Now we get to talk about
[04:40:52]  some other stuff. Okay. Performance is no longer. Yeah. I'm trying to remember what this was, was sub tweeting. I'm pretty sure this was sub tweeting.
[04:41:04]  I mean, this is more comment on what Theo again, you know, pointed out earlier about all the frameworks becoming solid. Like, um, I think, do you
[04:41:13]  know what this is about? I think I know what this is about. I think this happened because JS framework benchmark. If I go on the JS framework benchmark. And
[04:41:21]  I checked the, the, the updated Chrome. I think they did a rerun. Yeah. And this felt five beta for the first time ever shows up in front of
[04:41:30]  solid JS. Um, which is quite impressive. Um, which is quite impressive. I believe this is not the final release. And the final release is a little bit
[04:41:38]  slower, but felt had a very good run. Solid had a slightly bad run. Um, and, uh, you know, these numbers tend to move, you know,
[04:41:48]  a couple of points and, uh, the new version of Chrome brought some improvements. And this was the first time a major framework or a version of a major framework showed
[04:41:59]  up in front of solid, um, in the JS frameworks benchmark. So I think this is what prompted this because, you know, it's been God, it's been
[04:42:10]  like five and a half years now since, since this has happened. And, um, I think we're at the beginning of that new era now. Now you shouldn
[04:42:20] 't be too surprised of it in the million actually has consistently shown like not run to run that it's, it is a little bit faster. Um, main reason for that
[04:42:34]  is probably creation memory costs. Yeah. Replace rows. Yeah. It's our cleanup. Yeah, we might be like, hit on cleanup harder than VDOM
[04:42:45]  libraries because the signals hold more memory. Um, if you look at it, that's also where Svelte gets hit. See, million has a cleanup of 13 where
[04:42:57]  we have cleanups of like in the 14 range, um, for solid and Svelte. Um, and you see it in replace rows, actual row creation.
[04:43:09]  Yeah. We might be like slightly dragging 409. Um, what about replace row 20, 22 similar with invariance. Yeah. It's mostly garbage collection. Um
[04:43:21] , and to be fair, it's Dominic did, uh, some optimizations there that I haven't put into solid that might, might give us like the, the
[04:43:36] , get us, you know, here or whatever. Um, so like, it's really cool to see people actually working on these kinds of micro optimizations again,
[04:43:43]  cause I haven't like touched this in solid in quite a long time. I think I spent the first couple of years working on the benchmark a lot. Um, but I
[04:43:49]  don't think I've updated it, like really done anything since 2019. And, uh, yeah, I think that that was a large influence on this because as I said
[04:44:00] , like five years ago, view and Svelte weren't even in sight. And then like slowly by slowly, you know, things like million came out and others
[04:44:09]  have come out, but we've been kind of like sitting at the same performance place for about for over five years now. Um, so it's like, we knew it
[04:44:18]  would come to an end one day. So whether that's official, like when I think when the, we'll see when the actual Svelte release comes out, it
[04:44:26] 'll be a bit slower, but like the writings on the wall, the thing you have to understand. Um, it's a benchmark doesn't consider any structural stuff.
[04:44:35]  It's like literally one table. So million can be fast here because it just optimizes the spitting out all the rows. Million is still trapped by the VDOM
[04:44:46]  re-render of react. So as soon as the logic gets nested or bigger, it's going to get hit more for a pure render thing, which is what
[04:44:56]  million cares about. They can go fast. They actually introduced stuff like four components from solid to try and optimize some of the control flow stuff. But they like, it
[04:45:04] 's still, it's still react and VDOM style re-renders that it ultimately makes that kind of difference. So on a micro level, I would expect something
[04:45:13]  like million to be faster because they're not dealing with signals, but on a macro level, I would not expect the same kind of performance. If that makes sense.
[04:45:25]  This isn't a bummer. No, I mean, this was expected. I thought it would happen sooner. I mean, I was pretty drinking my own Kool-
[04:45:33] Aid, so to speak. So I figured people would copy what we were doing a lot sooner. You know, I thought, I thought like Svelte,
[04:45:42]  like they brought in Svelte 5, but I thought this would be like much like years sooner. The fact that solid, like, like at this point, the difference
[04:45:51]  here, I wouldn't even call saying which one is faster. I think Svelte 5 in this version might be, I'll say like within varying degrees, it could
[04:45:59]  be considered faster. Let's see. Yeah, I'll, I'll give them that. Uh, it looks like it's with it, but it's not,
[04:46:08]  it's not, but like, I, I think generally speaking, like. The difference between Svelte 5, let's say, and solid JS now is basically
[04:46:26]  nothing compared to the difference that there's been for like the last five and a half years. So like, we knew that I'm, I'm not too bothered by it
[04:46:36] . I thought it would happen sooner when I was actually like still, you know, working on this stuff. I haven't worked on this stuff for a very long time.
[04:46:43]  Svelte 2.0 is an opportunity to work on this stuff again. Um, but I, there isn't much room to grow. It's more likely.
[04:46:52]  I'm going to be honest that for trying to make developer experience better or to like change something that solid, like stays around the same, or, you know, kind of
[04:47:02]  like that, like. It's more likely that we lose tiny micro points and gain some in other areas and there'll be trade offs than us to get considerably faster.
[04:47:13]  And in this benchmark, this benchmark is like anyone who is below. I'd say 0.15. It's basically now just gaming the benchmark between Chrome versions. Like if
[04:47:23]  you are faster than 0.15 on that test, it doesn't matter how faster I've been saying this for years. We slowly seen that section grow and grow and
[04:47:31]  grow, but you have to understand like when solid first came out, there was maybe like surplus or there was maybe an EV. There's maybe like two other frameworks that were
[04:47:40]  in that range of performance. And like now we have a lot more there. Like it's just, it's just a completely different world where like that range where like
[04:47:53]  the, the statistical difference between runs and because, you know, browser changes this slightly, um, is, is more significant than the actual performance. thing. Right now
[04:48:06]  Svelte has joined us up the front. Um, Inferno because they changed the testing also joined us up in the front recently. Um, but the other frameworks
[04:48:14]  are not there. Really? They're offended. That's funny. I mean, I can see the react folks being it, but like, like, like. I
[04:48:33]  mean, view vapor and Svelte five are undeniably boring. The approach we, we, we took like, so I think, I think, I think that
[04:48:46] 's like, okay. To, to kind of point out, they, they acknowledge it themselves. You know what I mean? I mean, Svelte five kind of
[04:48:53]  push more on knockout and signals, but if you look at the renderer, we're talking solid. If you know, view always had signals, even, you
[04:48:59]  know, under the hood, even before, um, solid when open source. So, you know, I can't take credit for giving them signals. I mean, technically
[04:49:07]  they, the composition API came later, but like view would have probably gone that way anyways, because of react hooks, not because of anything I did. But the render
[04:49:14] er for view vapor yet solid definitely impacted why they went that direction. Yes, exactly. Or they will be soon. or they will be soon. That's Dave's
[04:49:31]  whole point. This used to be an edge, but we always knew it. This is why I didn't like marketing on performance. Like we talk about it. It'd
[04:49:37]  be like a flag and it's obviously on the homepage, but I didn't. I stopped talking about performance almost from the time, but it's before 1.0,
[04:49:45]  especially because like we had already. Think about when solid 1.0 came out. Solid was the fastest framework already for three years. Like it wasn't new news.
[04:49:54]  Like, like it just wasn't worth, like, I just, I thought things would catch up sooner. Um, I guess we still have server side rendering. We can
[04:50:03]  be fast server side rendering. This is a good thing like that. Everyone is kind of in this zone. I mean, part of it is because yeah. Um, for
[04:50:16]  everyone getting faster apps is a good thing, but it's also because for us, people like framers becoming more solid. Like is a good thing because it validates
[04:50:24]  our approach. You know, it says that we've done a good thing. Yeah. I mean, I've been saying that for years that that benchmark has been done.
[04:50:34]  It's like when Inferno came out, they shot way up the benchmark. And then surplus and EB different Vdom and EB and surplus, basically the predecessor of
[04:50:45]  what solid does jumped up. And then I was able to kind of just push it a bit more faster than surplus. And then like until block Doms started showing up there
[04:50:57] , there wasn't anything else, but the block Doms are also in the same range of signals back then. I, uh, the, with updates, it looks
[04:51:03]  like block Doms are a little bit faster now, but you know, for, for this benchmark, but basically from Dom's perspective too, he was like, this benchmark
[04:51:12]  was done when Inferno showed up. I think it was done a little later when we showed that reactivity was viable. Like when surplus showed up on the benchmark
[04:51:19]  in 2016, that was about when we knew all that was going to go. I, as I said, I was able to get another three or 4% over surplus
[04:51:27]  by doing a template cloning. Um, but which I got from a different library that used to be out on top Dom C, but that was the last time we had
[04:51:36]  significant up uptake in this benchmark. It's it's, it's too close now. All right. Come on. Speaking of million JS, he's hiring. This
[04:51:46]  is an opportunity. I just want to give a big shout out to Aiden. Aiden is awesome. It's awesome that he got funded like this for open source
[04:51:54] . Um, so yeah, I mean, and there's my, I get it. There's money in this because people want to make the react faster. Right. I
[04:52:06]  wonder how much this is at odds with what react core team wants, but I think there's people willing to invest in legacy. One of the biggest challenges with solid we
[04:52:15]  have where we wouldn't get this kind of investment probably is that, um, you don't get to keep your react code, right? It's a, it's a
[04:52:23]  new framework, a new paradigm, but for anything short of like taking the full jump, um, million is very compelling. So I, I, this is, this
[04:52:31]  is awesome for Aiden and this is awesome for whoever gets hired for him. So I, this immediate repost. Meta framework benchmarks were challenging to say the least
[04:52:45] . Uh, our measuring tools aren't good enough. Alexis did some work, but at some point I just like had to pull them off and be like, let's just
[04:52:52]  build the features and then we'll get back to the benchmarks. Uh, our way of measuring isn't tight enough and that's going to take years of work. Probably
[04:53:02] . Um, I I've seen some good demos. I'd like to exploit them more, but we have the shift focus and work on features. I'm, I'm
[04:53:16]  probably not going to support this, but I would be interested in supporting solid inside react. I'd like the other direction I've made prototypes for it. Someone's made
[04:53:24]  version that works in next. I'm pretty stoked on making that work. The thing is we don't want the bulk of react stuff coming in. I, it's interesting
[04:53:33] . I realized that up to a certain point, it's easier to pull solid into react, which is why I'd want to focus that. Then in the next point you
[04:53:39] 're like, okay, now I've solid apps. I want to pull react in. I want people to resist the urge to do that. To be fair. I built
[04:53:48] . Code sandboxes that show how you can do it. If you're client side only, you can a hundred percent do this. And it's not very hard.
[04:53:54]  Um, I have code to show for people who want to do this, but the hardest part of the bundler, it's getting both JSXs to compile differently.
[04:54:03]  But that being said, I don't see this, that direction being a focus. I think it's kind of, uh, a lot of time spent for, for
[04:54:13]  something that like, is, I mean, we, we should ask quick how well this has worked for them. Are you talking after beta two, like we are changing
[04:54:32]  the APIs right now, but after beta two, most of the, the API, API surface is being defined by other libraries, not by start itself. So I could say
[04:54:41]  yes to this. Yeah, solid in, in React would be more beneficial. I agree. All right. If you have a client side app, I can probably direct
[04:54:56]  you on the right way to do it. Server side rendering is a bit harder. All right. Um, where are we going? Okay. Bookmarks last section for today
[04:55:09] . Talk about analog. Talk about analog. I love this. If you don't force reload your page every five minutes, regardless of what your user was doing at the
[04:55:22]  time, you ship too late. I like this attitude. I mean, it, it, it explains next 13 as well, but I do like this attitude. I mean
[04:55:30] , in all fairness, like at a certain point, you got to make the call. And when it's that edge, like that edge out, like you're probably
[04:55:39]  okay. And this is why I was talking about solid start beta too. I'm even like nervous to release beta releases. It's time to go. And, uh,
[04:55:46]  if you guys have a, have a problem with that, you can blame Guillermo. Truthfully, I, I, I bookmarked this because I'm going to
[04:55:58]  be able to use this tweet for years to come. Whenever someone says something about Next.js not being ready or a feature missing, I'm just going to, I
[04:56:06] 'm just going to use this tweet. Completely out of context. Because it is actually showing someone reloading after five minutes. But, but this, this is, this is
[04:56:18]  my ultimate Guillermo tweet to respond to anyone complaining about Next.js. Okay. So there was a whole conversation about SPA versus MPA. And I know there
[04:56:32] 's a belief that SPA is good for apps and dashboards, but it's different because you tell me when there's links, they stare at the fancy spinners for
[04:56:37]  multiple sections. Part of this thing is, I, um, I think Guillermo considered CSR SPA and he doesn't consider what Next.js does as a SP
[04:56:46] A. Malte came in, the CTO and I was like, no, I consider them all SPAs. I have a slightly different definition. And if you
[04:56:53] , we'll look at this in a minute, but this whole thing got blown up when Dax basically was like, oh yeah. Is that so? Check out this awesome
[04:57:02]  developer experience on next.js.com. You know? And I mean, there, there was apparently a bug or something. And this, the only thing that I
[04:57:13] , I, I, that, that was. That, that I, I immensely adjoined about this on the other hand, because this, this argument is tired and
[04:57:21]  old is. What, what, what, what framework do you think made this awesomely fast app that we're looking at here? Can you guys, anyone
[04:57:31]  guess what framework he used to build this awesomely fast app? I guess people didn't. Yeah. I, I guess, I guess people, you know,
[04:57:42]  missed the subtitle, but the thing is people who, you know, who were looking at this whole story and doing the back and forth. The, the app that
[04:57:48]  was the example of the fast app and the app that was example of the slow app was actually solid versus next.js. Um, I know, I know not everyone picked
[04:57:57]  that up. So I just, this, this is, this is just, uh, you know, a little bit of fun. I do think this, this is a
[04:58:07]  definitions problem, right? Fun facts. People do not share definition of those terms. Um, I got flagged on something where someone was like, Ryan, trying to
[04:58:18]  coin the term. I didn't coin it, but about single entry versus multi entry. I agree with this. With all respect to Ryan, he's not old enough to
[04:58:24]  have been around. I don't know what he's talking about. Maybe there's some joke I'm missing because, uh, I consider myself one of the old guard.
[04:58:32]  Um, but you know, uh, I think he means coined. Yeah. Um, I did not coin it, but, uh, I still hold by this definition
[04:58:45] . I think, I think we have to retroactively talk about spas in terms of those client side rendering and server side rendering. And we shouldn't, um,
[04:58:52]  like they are single still singles at page apps. I do think server components are something different because of the aspect of partial hydration. I think the, how it manages hybrid routing
[04:59:03] . I think it is not classically. I do. He himself says he thinks turbo links and like the Astro view transitions aren't classic spas. I consider
[04:59:12] , um, I consider react server components in the same category or they're in a different category from those, but they're, they're like approaching it. They're not
[04:59:24]  the same as single page apps, but whether you render on the server or your client side render only, these are all single page apps. So this is why I've had
[04:59:30]  a lot of amusement with, especially gear almost, uh, post. Cause if I go back far enough, I'll have a gear mo post where he's like sp
[04:59:38] as were a zero interest rate phenomenon. And it's funny, like according to multi, all of next.js is spas. So like, yeah, Garmo sometimes
[04:59:49]  makes tweets that I know I'll be using forever. Um, so I think, yeah, I use it on my slide decks. Okay. Let's keep on going.
[04:59:56]  Uh, Svelte kit to another announcement. This one didn't have a ton of features on it except supporting Svelte 5 and shallow routing. Shallow routing
[05:00:05]  is interesting because it lets them update state without, um, um, causing a navigation. So they can add a history entry. I think it's interesting. I didn't
[05:00:16]  look at the actual implementation, but it seems like something reasonable to add to a router. Um, but I think the bigger one is Svelte 5 support. Even though
[05:00:23]  Svelte 5 isn't out, they want to kind of prepare it for Svelte 5. So this is just, this is like when solid start 2.
[05:00:28] 0 comes out, it's probably going to be like this kind of release. Um, so probably not a, a, a big thing to talk about. Um, so
[05:00:38]  yeah, let's, let's, uh, let's go on. Cause I'm almost out of time. Uh, yeah. Oh, Brian Florence, SPA
[05:00:50]  versus us. It's all valid. The trick is going to leverage this around the single project instead of the right tool for the job. I'm just getting good at this
[05:00:57]  with clients data, SPA mode coming and really powerful stuff. So they're adding SPA mode as well. What I demoed you today is again, I told you
[05:01:04] , me and Ryan Florence, same wavelength. I showed you how we saw a start today. This distinction is, doesn't really matter. And that is really how I
[05:01:14]  want to leave it for this week. So it was fun conversations, but here we are anyway, that's my stream for this week. I hope you enjoyed it.
[05:01:34]  I hope you learned a lot about solid start in the direction. The future is solid. I'm very excited about it. I think, you know, this kind of path
[05:01:42]  is where things should be heading. I think remix is going to be kind of on board and obviously they're not going to like let you use any router. Who knows
[05:01:50] ? Maybe they will one day, but they're, you know, Ryan Florence seems to be on the same page in terms of like the ease of transition. I think rout
[05:01:59] ers are the opinionated piece. I think solid start is just a facilitator for this with bundling in that. So once you find the right responsibilities and you understand how
[05:02:09]  your framework and things should be broken up, you can do incredible things. And that's my message for you. All right. So everyone have a great weekend. I
[05:02:18] 'm not streaming next week. I'm taking extra day off for Christmas. So I will see you all in the new year, unless it's, unless you're going to
[05:02:24]  come and complain to me about solid start beta release in the GitHub issues. Then I might see you before that. All right. See ya.