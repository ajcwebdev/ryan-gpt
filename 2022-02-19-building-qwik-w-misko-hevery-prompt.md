---
showLink: "https://www.youtube.com/watch?v=lY6e7Hw4uVo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building Qwik w/ Misko Hevery"
description: ""
publishDate: "2022-02-19"
coverImage: "https://i.ytimg.com/vi/lY6e7Hw4uVo/sddefault.jpg?v=620fedfa"
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

[00:00:00]  Hello. Welcome to my stream tonight. If you hear some noise in the background, don't mind me. That's just some water draining out of the sink in the
[00:00:12]  back. But welcome to the stream tonight. I'm pretty excited. We're going to have Mishko Hevery, creator of Angular, and Quick on to talk about
[00:00:24]  Quick. So I'm super excited. If you've watched my stream before, especially last week, I've been following Quick a ton this last little bit. I've
[00:00:33]  been exploring it, wrapping my head around it, and trying to figure out what their vision is for the future of JavaScript. If you've noticed, there's been a common
[00:00:45]  thread through the last few streams. I was looking at Marco, which obviously I work on. Then we looked at React server components, and then we've been looking at Quick
[00:00:54] . And I think all three of them represent a sort of take at trying to solve very similar problems in slightly different ways, each with their benefits and trade-offs
[00:01:06] . So yeah, just chatting a bit here, let people join the stream. Yeah, I know this is like the worst time ever. Although I guess in Japan, this
[00:01:16]  isn't the worst time. But sorry, all you on the East Coast, 9pm in Utah. This is just my Friday night. This is what I do in
[00:01:26]  my Friday night. This is what we got. But I'm glad you can all be here to make it, to check out this really cool framework. And as I said
[00:01:35] , if you've joined the stream, we've already looked at this a bit. So you might have already have a bit of an idea of what's going on. And
[00:01:41]  this is your chance to ask some questions, get some clarity. But before that, as always, I'm going to talk a little bit about this week in JavaScript.
[00:01:52]  And I'm going to share my screen to do so. So where are we? Let's add my screen to the stream. All right. Well, I mean, I
[00:02:02]  had a pretty exciting week this week in JavaScript. I'm not like Hawaii. So this, you don't always get the chance to, you know, gloat a
[00:02:11]  little bit. And to be fair, there are there are elements of, you know, statistics and sampling bias working in my behalf a little bit. But really solid JS for
[00:02:24]  the first time ever was on the shortlist on the state of JavaScript survey. And people voted and, you know, all 3% of you. But still very thankful
[00:02:37]  and solid got 90% on the stated on the satisfaction results, which is the first one that they show under frameworks on, on this survey and put it right up at the
[00:02:48]  top of the list. I realize it is what it is, admittedly, because again, 3% usage, 90% satisfaction, but still, I couldn't be
[00:02:58]  more stoked about that. I even got voted in on the person 62 out of 15,000 people, basically entered my name in a blank field. And that was enough to
[00:03:10]  get on a list with some of the most known people in the whole industry. So I mean, I'm incredibly grateful, flattered, whatever you say, it,
[00:03:19]  it's been a fun week on that side, you know, take it all with a grain of salt. But I mean, it was, it was pretty fun. I
[00:03:27]  actually wrote my thoughts down in an article. So if you did get a chance, you can check it out. So yeah, it was good times. What else?
[00:03:39]  Um, there, the, the, the, the, the Svelte meme came back around again, which actually, you know, the one where they show it versus
[00:03:47]  react, or they show like the let count equals zero versus like all the react boilerplate. I'm not going to show that one again, you guys have all seen it
[00:03:55] , there's actually some really good discussions if you follow down that thread. But more, more or less, you know, I'm still going to gripe about the missing
[00:04:03]  script tag, because you show all the boilerplate for react and not for Svelte already wins that, that comparison. Like it is less code. Why, why
[00:04:12]  try and like hide the script tag? You know, it's just, it just invalidates it. I've that's just one of those pet peeves. Um,
[00:04:20]  what else? Well, quick, I want to, I want to talk about this for a second, because I, I got to, I got to, uh, write
[00:04:26]  a really great article on my thoughts. And if you saw the stream last week, um, we, we kind of dove into quick a bit and, um, this
[00:04:35] , this was a real, real fun one because there really isn't anything quite like it. And, um, I kind of gave my perspective on, you know, progressive
[00:04:47]  and partial hydration and what you kind of need for it and compared some stuff with quick. And as you can see quicks come long way in terms of how nice it
[00:04:55]  is to write an author. So I'm, I'm really stoked. And I think there's a lot of potential here for adoption now that like they're kind of iron
[00:05:01] ing out these patterns, but I got to admit that one of the funniest parts for me, for this whole, uh, exchange and interaction was that I'm used to
[00:05:12]  people when I write these tech articles coming in and being like, oh, you don't really need this, or, you know, some vanilla JS guy, you know,
[00:05:21]  kind of, you know, down, down playing, you know, this, you know, we should all be writing our stuff and just plain JavaScript and all that. But
[00:05:28]  what I didn't expect was not one, but two people claiming that Svelte already does what quick does. So, you know, it's not that big of a
[00:05:39]  deal. I mean, I, I thought I was clear in the article, but it is interesting. Um, I think, I think SSR and the technologies around
[00:05:50]  this are really misunderstood and there's like this real desire. And I understand why for existing technologies to kind of, you know, either downplay it like, oh, we
[00:06:01]  don't need partial hydration or streaming. Right. It's, you know, only if your site is slow, like fix your backend or, you know, basically people
[00:06:10]  assuming that their favorite tool already does this, but the truth of the matter is SSR and JavaScript frameworks is in its infancy, infancy. Like basically we're just
[00:06:21]  getting to the, figuring out better patterns here. You know, I think we're going to see huge changes in the next few years. So, um, as I
[00:06:28]  said, um, no Svelte does not do what quick does. Um, react does not do what quick does. Um, solid does not do what quick does.
[00:06:39]  View does not do what quick does. Angular does not do what quick does just, just to be perfectly out there. Um, even Marco doesn't do exactly what quick does
[00:06:51] , although it does share a lot more similarities than it is, has a similar mindset in understanding that to approach these problems, you got to approach them from the ground up
[00:07:01] . You don't just get to take your favorite tool and shape it into place. So I think this is a bit of an awakening. I'm not saying every tool needs
[00:07:08]  to do what quick does, but just understand that they don't and you will be in a good place. So, I mean, that's pretty heavy message coming right
[00:07:19]  off the start here, but I just, I think that's, that's, that was the funny thing for me when I writing this, I mean, as I said
[00:07:25] , I'm used to people downplaying stuff. I'm not used to people just not getting the topic. And I think, I feel like probably Michiko and team has
[00:07:32]  probably hit this a ton where people just keep on telling them that other firmers do what they do. And I can't, I can't picture that. That's a
[00:07:40] , that's a, that's a, that's a real different kind of problem to be up against because like you, you, you go through all these struggles and
[00:07:48]  challenges to try and figure out how to make the system balanced, get the right DX, get the right experience. And then people are like, oh yeah, everyone else already
[00:07:55]  does that. It's like, don't they don't. So, um, I've already given my take on how, what I think this is, but I'm
[00:08:05]  super stoked and honored to have Michiko going to come on our stream here and he's, he, hopefully he can give an even better explanation of what's going on
[00:08:15] . Um, so, um, let's, let's welcome Michiko onto our, onto our stream. I'm just going to add into our stream right now and I
[00:08:23] 'm going to take down this banner. All right, let's go. Hi, Michiko. Welcome to our stream. We're live now. Hi, Ryan. It
[00:08:32] 's so nice to be here. I'm so excited. Like it, as you point out, it is so hard to find people who actually understand how this stuff is
[00:08:39]  different. And I feel like you understand. So, you know, you're my buddy. I love it. Yeah. If, if, if, if there's anything
[00:08:46]  I can do to kind of help with that, one of the things that you're already doing it, you're telling the world. Yeah. One of the things I found
[00:08:53]  in the last in a while is just focusing on education, focusing on, on just like trying to bring things back to the basics is incredibly invaluable in these kinds of conversations
[00:09:03] , because I was doing a little math the other day. Um, I didn't talk about this, but Adi Osmani, um, published an article where he tried
[00:09:11]  to put all the different server rendering stuff. And they've done this in the past on the Chrome team into a single axis, essentially. Like they, they put IS
[00:09:20] R and SSR and SSG and streaming and client side all in the same axis. And someone showed me this and they're like, what does this one field in the
[00:09:27]  table mean? And I was like, I have no clue. I'm sorry. Like what the reality of it is, there's like five different types of rendering techniques,
[00:09:36]  maybe four different types of hydration techniques, and maybe like, how should I put it? Like maybe two or three major architecture decisions you can make. And while they're
[00:09:46]  not a hundred percent mix and match, you can mix, you can mix and match them a reasonable amount. And that's kind of hard to wrap your head around because if
[00:09:58]  you do them, if you do even the simple math, math, if it's like five times four times three, like there's 60 different combinations. I mean, not
[00:10:05]  all of them are valid of how you can go about server rendering your app. And it's no wonder that no one understands what's going on because people have decided to
[00:10:15]  name everything with like three letter acronyms that, that, that are supposed to mean something. And it's, it's gotten to the point where, when I write
[00:10:22]  articles, some people say that I'm just playing buzzword bingo. And I'm like, no, these, these are real techniques with real names, but I,
[00:10:30]  I understand why, like, if there's a dozen of them, how is anyone going to keep those all in their head? So hopefully in the future, we just
[00:10:38]  find more efficient methods and we can just peel away some of the different combinatorics that we don't need, but it is, it is a challenge. And I think
[00:10:47]  this is going to be a challenge for all framework authors and people involved with these libraries for at least the next couple of years. It's, it's, it's,
[00:10:54]  it's hard to explain these things. Um, sorry, I like going on little rambles and rants. Don't mind me too much. Yeah. So
[00:11:03] , uh, oh yeah. People are saying hi in the chat. Um, yeah. Didn't mood tools do it for us. Yes. Yes. That, that,
[00:11:13]  that's, that's, that's, that's definitely it. Um, yeah. And a few more things. Yeah. We might get to that later. Honestly,
[00:11:19]  I want to focus mostly on quick tonight. I think, I think we can kind of, maybe if there's time at the end, we can kind of talk about how
[00:11:23]  that positioning works, but I think if we focus on quick, you're going to get a real appreciation for the, the, the challenges and the problems trying to be
[00:11:32]  solved here. And that'll just give you, you know, better perspective in general. And that's probably where we should, should start a little bit because maybe I'm
[00:11:42]  going to share my screen. I've been taking a few notes from Misko pre-show that I'm going to throw up on the screen, but he maybe can
[00:11:49]  talk a little bit to explain to, to everyone from his perspective, what progressive partial hydration. Yeah. Yeah. So first of all, interrupt me. So it's not
[00:11:58]  a monologue. I love having discussions. So, uh, you know, jumping at any point, but I think the good place to start is kind of at the beginning
[00:12:05] . And I think the way people compare frameworks is they look at the syntax and they, they look at the DX, right? And they say like, Oh, I
[00:12:14]  like this, or I don't like this. What does it enable me to do or what it doesn't? Right. And, um, and you can make good arguments
[00:12:21]  why particular kind of frameworks, like Swald has a better syntax than react or something like that. Right. And so I think what's happening is people come to read to
[00:12:28] , uh, too quick and they look at it and they go like, it kind of looks like react. Yeah. I already seen that. Nothing interesting. Right. And
[00:12:35]  we actually intentionally. Sorry. I said, I'm too familiar with that. Yeah, we intentionally made it look familiar. Like this is not an accident because we don
[00:12:48] 't want to fight that particular battle, but what's very unique about it is what happens under the hood, right? The thing that happens under the hood are, are things
[00:12:56]  that, that other frameworks cannot do. And this is super hard to explain because it takes a while of using it. So, uh, there, there are two terms
[00:13:06]  that I like to use. One is that quick is resumable. And the other term is that it does progressive hydration. So what do I mean by resumable
[00:13:15]  by resumable? What I mean is that on a server or so, so, so we should really define what other frameworks are. So the other frameworks are, I
[00:13:22]  would call are replayable. And then the quick is reasonable. What I mean by that is that other frameworks when they do SSR, SSG or whatever, right
[00:13:30] ? Uh, you do a whole bunch of work on a server and then you come to the client and you have to replay all the work that you did on the server.
[00:13:39]  What I mean by replay is like, yes, you can, you can save the data as a JSON blob and you can skip like making requests. But for the most part
[00:13:48] , you have to download all the code. You have to execute all the templates. You have to figure out where the listeners are. You have to attach the listeners,
[00:13:53]  et cetera. In other words, all of the rendering has to happen again. And again, people can take issues and say like, yeah, but we don't actually recreate
[00:14:01]  the doms. We just attach them. Sure. Like minor details. But at the end of the day, you're downloading the template, you're executing the template and
[00:14:09]  you're reconciling the template against what you have on the screen. Right. And this is what I mean by. It's, it's definitely, if you look
[00:14:16]  at your react code or whatever that you're using, it runs the component. If you put a console log anywhere in it, you're going to, you're going
[00:14:24]  to just see it, you know, the whole tree runs from top to bottom. And it has to do that. Otherwise, the application is not interactive. Right. So
[00:14:31]  this is one of the very playable. Now, reasonable framework would be one where you do a whole bunch of work on a server, right? You always have to run the
[00:14:38]  application somewhere. And so on the server, you run it first and then you serialize it in such a way where on the client, you just continue running where you
[00:14:46]  left off on a server. Right? So if you, as you point out, if you put a bunch of console log statements, you just won't see them on a
[00:14:53]  client. They just won't run. They're just not part of it because the client just continues where the server left off. You know, if you remember the first time
[00:15:00]  you heard about a virtual machine, the idea of VMware, you take your machine and you save it, right? And then you move it to a physical, physical hardware
[00:15:08]  and then you resume it and continue running. That's what we're talking about here with Qlik is that the application runs, you freeze it, you serialize it,
[00:15:17]  you move it to a different physical machine, and you resume where you left off. Right? Because you're just resuming it, there's a whole bunch of stuff you
[00:15:25]  don't have to do. Okay. Now, the other term that people use is progressive hydration. And I think that people are more familiar with that, even though I personally
[00:15:34]  am more favorite to the resumable idea. So let's talk about progressive hydration. So progressive hydration basically, well, what is hydration? Hydration as an industry
[00:15:43] , we basically said it's the way of waking up a component. In practice, what it really means is attaching all the listeners to the component, right? So that's
[00:15:51]  what hydration is. And it means that a bunch of JavaScript executes in your browser, JavaScript has to recreate state. Frameworks are state full. And the reason why
[00:16:02]  the framework is hydrating you, right, is because it needs to rebuild the state of the application in such a way where the framework can then continue running, right? So
[00:16:13]  the rebuilding is what's happening. So that's the hydration part. And obviously, if you hydrate all the eagerly, which is what most frameworks do today, which
[00:16:21]  means like, you know, you download HTML. And the first thing you start doing is download all the code and start hydrating it. If you do it eagerly
[00:16:27] , well, you have to download all the code and execute it and do a bunch of things, right? And this has a real impact, right? I mean, Yeah
[00:16:36] , yeah. On a mobile devices, this can take seconds. You know, if you look at the Google analytic debate, what is it called? The Google core web vit
[00:16:47] als, right, which is the lighthouse or a bunch of names under it, right? If you look at that, the page speed score, you're going to see
[00:16:54]  that most sites are really good at like showing HTML, but then this huge amount of JavaScript has to execute, right? And that comes in two forms. One is the framework
[00:17:05] , which you call the first party code. And then the other part is the third party code, which we can talk about party time, but it's a separate discussion,
[00:17:11]  right? Yeah. So basically all this code has to execute. And if you look at your dev tools, you're going to see like crazy amount of code, just
[00:17:19]  runs and munges and whatever, mobile device, you're slow, blah, blah, blah, blah, blah, right? And it takes forever for the thing to
[00:17:24]  start up. And so to make the application start up faster, there really is only one answer, which is like, well, just push less code. Pretty much.
[00:17:34]  Yeah. No, push and run less code, both. But it turns out it is really hard to do that, right? Yeah. Some, some people downplay the
[00:17:44]  effect of this time to interactive cost. And I just want to pause there for a second on the, on this thought before we continue is that like, you can feel it
[00:17:53]  when you go to a website, because when you start, like it's so obvious, like the difference between like, sure, you can see a site right away.
[00:18:02]  The SSR is fast, but then you go to interact with it and you can feel the delay. If you actually lose input sometimes and the framework isn't there yet.
[00:18:09]  And you start trying to do something, you can get in really weird states where you like start entering text and then, then it hydrates and then your text gets reset or
[00:18:18]  like, like a whole bunch of weird stuff. And one of the biggest measures that we found working with Marco was something called first input delay, where because all this processing
[00:18:30]  is going and it's blocking, like it act like you, you can feel the delay sometimes, uh, even if you, you don't have to wait the full seven
[00:18:38]  seconds or whatever, if it's like a really slow site on a slow mobile network, you can still feel like a noticeable lag. Like sometimes, uh, the difference between
[00:18:48]  not shipping all this JavaScript and shipping all the JavaScript can be, uh, over half a second delay when you're actually like typing something in it or like clicking on something
[00:18:58] . You can actually try and scroll the page. Even sometimes like you can actually feel like this, like lurk or like this kind of delay. Cause I think I forgot
[00:19:07]  what it was, but there's something anywhere like around 300 to 400 milliseconds beyond that range. People will actually feel, feel that. So like, and all through the
[00:19:17]  hydration time, you're kind of in this like lagging underwater zone. If you're lucky enough that the framework doesn't reset everything you did when it's done hydrating
[00:19:26] . So yeah, sorry. I just really want to emphasize this because some people will just kind of pass it off and be like, you know, my app has progressive enhancement
[00:19:33] , you know, uh, it works fine when the JavaScript isn't loaded. So they'll, they'll kind of like brush it off. They'll be like,
[00:19:39]  you know, like I use anchors and real forms. So, you know, even if it takes a few seconds for that JavaScript to come in, you know, it
[00:19:47] 's not that big of a deal. Well, true. You know, if someone clicks a link, it'll do a full page reload and skip your client side routing or
[00:19:55]  whatever, you know, like, or, you know, you can submit a form. I mean, and to be fair, you're probably not doing a ton of that
[00:20:01]  in the first couple seconds. So maybe that's fine, but it, it, you feel it on every interaction on that page during that time period. You can't
[00:20:10]  just brush it off and say progressive enhancement does it. Progressive enhancement, it's great. You should do that. Sometimes JavaScript fails. Your page should still work. It
[00:20:18] 's a, it's a resiliency thing. It's not a page performance thing. Sorry. That was my little interlude. No problem. No problem. So progressive hydration
[00:20:27] , right? So let's talk about hydration, what it does, right? Yeah. So progressive hydration, to me, what progressive means that it's it's in
[00:20:34]  parts. It's not all at once. Right. And, and so, you know, there are frameworks that delay hydration. I think Astro is a typical one,
[00:20:42]  which creates islands and you can delay it. Right. But, but to me, progressive means different to me. It means that you don't delay all this work, but
[00:20:52]  rather you figure out a way of bringing only the code, the client that is actually necessary and ignoring all the code, rest of the code. Right. So if you
[00:21:01]  could have, um, uh, code, uh, how much of the code gets executed, right? The code coverage for your application, the thing you should see that as
[00:21:11]  you're downloading code, all of the code is being downloaded, that's being downloaded should be 100%, right? Uh, execute. In other words, you're not wasting
[00:21:18]  time downloading things that you are not actually needing on this, this, this point. Right. So I think that's a good mental model. I'm not saying that
[00:21:24] 's what you should do because there's network issues, et cetera, et cetera, and then there's other things to consider, but the mental model should be like, if
[00:21:29]  I have a page and I'm not interacting, you know, most of the page is static and there's nothing to interact with it. Like, why am I downloading all
[00:21:38]  this code for it just so the framework can execute all the templates and realize there's no listeners, right? Yeah. What you want is you want to set up where the
[00:21:47]  user interaction drives download of the code. So as the user interacts with the page and as more and more pages, more and more, uh, buttons and portions of the
[00:21:57]  page get interacted with, you download more and more code that's necessary just to handle that interaction. Right. But that's fair. I will say to Astro's credit
[00:22:07] , they are just doing a much, much coarser grain version of that. Like the, the, the, in the problem, the challenge here is it's hard
[00:22:16]  to get to a point where you can make it small enough where you can actually not get like, uh, you know, like hit as heavily, like the bigger that
[00:22:25]  code is, the longer you're delaying the inevitable. So if you go to a page and you just go one, two, three, like you're still running a
[00:22:32]  lot of, of code. So if you, in, if you could buy hand, go in and split it out enough, make enough islands, which is hard because
[00:22:41]  of nesting, which we'll get to in a, in a minute, then maybe you might theoretically get to a point where you're not loading as that much. But
[00:22:48]  it still will be replayable. It will not be resumable. It will still be replayable within those islands. A hundred percent. And just, I just,
[00:22:55]  in, on the progressive hydration side, uh, like this is a tricky thing because there's, do you, as you said, there's really are two things like there
[00:23:03] 's the resumable side and there's the progressive hydration side and they work together wonderfully. Um, no one else other than, um, quick today does the res
[00:23:11] umable side. Some people do like Astro do progressive hydration. In my opinion, I call it still progressive hydration, but at a coarser, it's,
[00:23:19]  it's, it's hard like for a human, human, it would be very hard to go in and make it that chopped up. And secondly, because you can't
[00:23:30]  nest it, you can't, you just simply can't get that kind of granularity for certain things. Sorry. Yes. Right. So it's like, it
[00:23:38] 's both like this progressive part to it and there's hydration, uh, resumability part of it, as you pointed out. Um, and then really the hardest thing
[00:23:46]  here is that as an industry, we don't know what these terms mean and we don't understand each other. Right. And so the first part is really just defining it
[00:23:53] . Right. And, and to me, again, the progressive app, the characteristic of a progressive hydration application is that you start with zero or no code, like very
[00:24:03]  very small amounts of code, right. That you need for bootstrapping. And then as you interact, every interaction brings more and more and more code in, uh,
[00:24:11]  and as needed basis. Right. Yeah. Yeah. Yeah. And, and this is another important distinction because we have different terms. This is progressive hydration because that's about
[00:24:21]  bringing it in Marco. I use the term partial hydration, which is slightly different because it isn't theoretically possible to have both progressive and partial hydration together, but partial hydration
[00:24:32]  on its own is only concerned with not the progression, not the loading of stuff piece by piece, but only concerned with only ship the parts to the browser that could be needed
[00:24:42]  versus the leave the stuff on the server that would never come to the browser. So two different terms, similar is sometimes an execution in terms of what they look like sometimes
[00:24:53] , but they, but they actually aren't the same thing. Like progressive is only the suggestion that something will start from very little and grow as needed where partial is, has
[00:25:02]  no sense of time like that. It only has the sense of stuff that needs to be there, stuff that doesn't need to be there. So you can combine these
[00:25:10]  perhaps, but they aren't innately the same thing. Yeah. That's, that's actually a very good point because the, the thing that's not captured here is
[00:25:18]  that if you look at something like, uh, Astra, right? Like let's say you have an Island and then you do something that triggers the hydration of that Island,
[00:25:27]  bam, the whole Island is hydrated. Right. And that's it. Like there's no more events in the future. Right. Whereas if you look at something like
[00:25:34]  quick, it's, it's this continuous thing, or you interacted with this button. Well, this button is now hydrated, but not that button over there. Or you
[00:25:41]  need to interact that over there. Or you interact over there. Right. And as you interact with more and more, more things come in line. And it's even the
[00:25:49] , like these, the concept even of a hydration just becomes weird at that level because it's like, eh, it's like, it's, you don't even have
[00:25:55]  to really think about it. Right. Like it just naturally happens. It's like the, the life cycle of the app. Oh man, my discord is still open.
[00:26:03]  I'm so sorry. Let me kill this right away. This I, I've muted the solid server, so I don't like get pinged every 30 seconds now
[00:26:09] , but I, yeah. Okay. It's done. Sorry about that. No worries. Um, demo. Yeah. Or yeah. Yeah. What do you want to
[00:26:19]  talk about next? The challenge is high level. Maybe. Yeah. So challenges. Yes. Yes. Oh yeah. Let's talk about challenges and then we can do demo
[00:26:26] . Yeah. Let's let me switch from our screen. So we're sharing this so we can talk to this a little bit, because I took some notes. Ms.
[00:26:33]  Go on a much more detailed set of notes, but I tried to put this in just speaking points so that people following on the stream could at least, uh, um,
[00:26:41]  can, could just hear about it. And actually, before we go here, let's, uh, we can answer a few questions coming in from the stream, actually,
[00:26:47]  because a few people were, were, were making a few comments. I just want to talk to them for two seconds. Ms. Go on, we need your help
[00:26:54]  finding three letter acronym for real transitional apps. Yeah. This was kind of an ongoing joke. Dylan's my colleague on the Marco and he, he, we've been talking
[00:27:05]  about how, you know, the transitional app thing that, uh, that rich Harris kind of put out there was, is, is, is a little bit different than what
[00:27:14]  we've been trying to do here. It's not, it's, it's not just, you know, rebranding single page apps. It's, it
[00:27:20] 's, it's something, it's something else. So that I guess that that's kind of the, it's the hard part, right? It's a different beast
[00:27:25]  and people are desperately trying to give a user label they already are familiar with, which is an actual human thing to do, but it doesn't fit. Yeah. How is
[00:27:32]  progressive hydration different from lazy loading or is it just a chunking? It's very different. And we're going to go the whole, you know, whatever, two
[00:27:40]  hours, whatever we're going to run here is going to be really about those differences. So hopefully we'll answer the question by end of the. Yeah. Yeah. So
[00:27:49]  then, yeah, I think that's, that's, yeah, don't worry. We will, how does progressive islands work in grip with global state distributed? We will
[00:27:57]  dive into it. We'll get to that. Yeah. Yeah. I think, I think, I think, I think these are good questions in terms of questions about how
[00:28:02]  quick works. We are definitely going to cover that here over the next little chunk of the stream. So yeah, don't worry about that. Let's go. Why
[00:28:08]  don't we do this? Why don't I give a little overview of these, of these bullets that are on a screen and then we can actually go into quick and see
[00:28:16]  how quick solves each of these, right? Yeah, that sounds good. Okay. So the first, okay. So you want to have a progressive, uh, uh,
[00:28:23]  progressive hydration application. And the, the point here is that the, the whole app isn't hydrated at once, right? You need to have this sipping happening of
[00:28:34]  like, when I'm interacting with this button, I only want the necessary code for this button and so on and so forth. And so one of the first things you're
[00:28:41]  going to discover is, well, I need a way of breaking up my application into chunks. Right. Because if you see. Component isn't small enough, essentially.
[00:28:50]  Component is not small enough. Right. And the reason for it, because component is made up a bunch of things, right? Component is made out of the
[00:28:56]  template and whole bunch of listeners, and then maybe like use effect or whatever the equivalent in your framework happens to be. Right. And so all of these things are essentially clos
[00:29:06] ures, right? Are things that will run at some point in the future, but not now. And if you want to re-render a component, then you just need
[00:29:14]  its template. And if you want to interact with a particular button, then you need just that button, but not the other button's handlers, right? And so
[00:29:21]  the first problem you're going to face is we need to somehow take this code base we have written, and we need to break it up into tiny little chunks so that we
[00:29:32]  can lazy load each chunk independently. And, you know, before you jump off and say like, yeah, but isn't it going to cause waterfalls? Yeah, yeah
[00:29:39] , yeah. There's other ways of solving that. But mentally, it's easier if you think about it as we just want to get the smallest possible symbol for that
[00:29:50]  thing, right? So if I click on a button, I just really want to download the buttons handler. I don't want to download the handler for the button that's
[00:29:57]  next to me. That's not what the user clicked on, right? And also, I don't want to necessarily download the components rendering function, because again, it's
[00:30:05]  very possible that clicking on this button won't necessarily cause me to re-render this particular thing. So the first problem you're going to discover is, how do I
[00:30:14]  break up my code base into lots and lots of chunks? And currently, there are no tools for this. The closest thing we have is a dynamic import. And dynamic import
[00:30:24]  is problematic for a lot of different reasons. Mainly, it is just a lot to type, and the developer has to create a separate file, the thing that they're
[00:30:36]  importing. And the developer has to give the file a name. So there's a whole bunch of stuff that has to happen that you really shouldn't have to think about as
[00:30:44]  a developer. So let's just say that the first problem is you need to break up the code. Okay. Now, somehow, magically, you broke up your code.
[00:30:53]  Let's not worry about how it's done for now. The next problem is, you need to figure out how to bootstrap your application. And the weird thing
[00:31:02]  is that we talk about bootstrap as, like, the main entry, right? It's the place where the app starts. You call the main method, and it
[00:31:09]  calls the render with the root component, and everything kind of works. And that's how we're used to using it. And that's how we do it. But then
[00:31:16]  you go to progressive hydration, and you realize, well, wait a minute. Every single button click is a separate entry point. Right? If I click the button over
[00:31:26]  here, then I'm entering and downloading a different set of functions and files. Then if I click a button over here, then different stuff gets downloaded, right? So this
[00:31:35]  whole idea of, like, centralized bootstrap, like, goes completely out the window. Because, like, you don't want that. Because if you do, you
[00:31:42] 'll just download the whole application. And that's the very thing you just did with the previous step of breaking things up. Right. So you can see, like,
[00:31:50]  like, like, I think in terms of terms, like, other than bootstrap, if you've ever written an app, an app in react, felt solid,
[00:31:59]  whatever you want, like, there's that top level hydrate function you call on the client, and everything kind of spawns from that single point, doesn't matter what
[00:32:08]  page you're on, how you route, how you do it, there's this one hydrate function, that is the starting point, always on your app, regardless
[00:32:16] . And you can't have that if you want to actually leverage the fact that you broke up these chunks, because then you're always going to start from calling that hydrate
[00:32:25]  function and bringing in that top level code, which you don't want, right? Right. And all frameworks have this function, right? And so people say, you know
[00:32:35] , when people say, like, oh, our framework already does this thing. And you go like, well, actually, no, because none of these problems are actually
[00:32:40]  solved in your framework. So let's go down the list, right? So the problem is, you can't have a centralized bootstrap, because the moment you have
[00:32:46]  a central bootstrap, the whole thing goes out the window. Because remember, what we're trying to do is delay download and execution of the code for as long as
[00:32:54]  possible, right? That's the name of the game, download, delay, download and execution. So it's successfully broken it up into a lot of files, we got
[00:33:02]  rid of the centralized bootstrap, so that we can boot up the application basically from any click listener on the page. The next problem is, we need to figure
[00:33:10]  out a way of serializing our event hanglers into HTML, right? Because on the server, the the you render the HTML, and in there, you need to somehow
[00:33:23] , you know, you need to somehow say, like, this is a, this is a button, and this button requires a listener. And it's a click listener
[00:33:32] , and there's the code associated with it, right? So you need to somehow serialize the war, the what, and where, right? You need to know where
[00:33:40]  these listeners are, you need to understand what these listeners are. And the way the frameworks do this is that, well, it's very simple, right? You have this
[00:33:48]  main bootstrap function, that goes and executes through the older templates, which forces all the templates to be downloaded, and you execute all the templates. And as
[00:33:56]  you execute all the templates, you figure out where the listeners are. But notice what just happened, you just download the code and executed everything, right? And it's the
[00:34:03]  very thing we're trying to avoid. Yeah, you run the JSX to know where the where Yeah, and so so the next thing you have to figure out is how
[00:34:12]  do you serialize the event handlers into the HTML. And so for this, you need to have some kind of a bootstrap. And so we're actually pretty
[00:34:19]  proud of the fact that quick has this little tiny bootstrap file, which is completely agnostic to the specific application, right? The bootstrap file doesn
[00:34:26] 't change depending on what application you have. It's always the same one. And what the bootstrap file knows how to do is just sets up a global listener on
[00:34:33]  a document that intercepts, you know, your clicks and your mouse moves or scrolls or what have you. Do you have a set of events that you just notably?
[00:34:42]  Yeah, you can, you can give it a set of events, or you can give it nothing, in which case, it tries to figure out what the set of
[00:34:48]  events for the browsers are, and then just registers it for all of them. Right. And so the cool thing about this, this listener is that it is super tiny,
[00:34:57]  it's literally less than a kilobyte Jesus and that Jesus minified, but non Jesus. And because it's so tiny, it is not even worth putting it in
[00:35:06]  a separate request, we actually inline it into the HTML directly. Just, yeah. Just for anyone who's interested, it's not the same as a quick listener
[00:35:15] . I was playing, we actually have something kind of like this in solid where we don't do anything as cool as quick does with it, but we use it to replay
[00:35:23]  the events at, at hydration time. Um, and it's, it's, if anyone ever wondered what that stupid hydration script is that I'm always like, you know
[00:35:31] , putting line in your page because it's so small. It's, it's, it's basically, uh, setting up global event listeners to replay back events.
[00:35:38]  This is cooler though, because they, in quick, they actually use those listeners to decide what code to lazy load, which is just crazy. All right. So you need
[00:35:47]  to figure out how to serialize all this information. So let's say you figure this out. You have an HTML and now HTML is fully contained, meaning that it has
[00:35:54]  the listeners where you need to have, and you know how to resume it. The next problem you have is that great. You go and download a specific listener for a
[00:36:02]  click button. Uh, but what you get is just a function and that function has no state. I say the functions have amnesia, right? Like you just executed
[00:36:12]  a function that was generated at build time and this build time function somehow has to know how to restore the application state. Right? And so the, the next problem you're
[00:36:25]  facing is great. I have to somehow rebuild the application state, but there isn't a central place where this thing happens, right? Every single button, every single listener
[00:36:34]  that exists in the HTML is a different entry point, and they all have to successfully rebuild the state in such a way that you can continue where the server left off. Right
[00:36:43] ? So that sort of, so restoring the state is kind of the next problem to kind of solve. All right. Let's say you solve all these problems. Uh,
[00:36:50]  you know, by the way, you, do you notice how, like none of the existing frameworks do any of this? Yeah. I was just, I was just
[00:36:54]  going to say that, like, when, like, when, when, when, when you talk about this list of things, like, um, I, yeah, like
[00:37:02]  react, felt, you, they, they, they are, nobody does this. So this is why they can't have progressive hydration, because these are real problems that you
[00:37:09]  have to solve. And, and unless you solve all of them, this is not like a, you know, pick one or two items off the list. You got to
[00:37:15]  solve all of them in order to have progressive hydration. If you only solve some of them, sorry, you, you're going to lose, you know, you're
[00:37:21]  not going to get the benefit that you're going after. Okay. So somehow we have to restore the state. Let's say we, let's say we did this.
[00:37:28]  Now, what the function that you click does is it will probably mutate some state. So let's say you have a button that says add to cart. Right? So
[00:37:36]  you go and mutate the state of the cart. And now the framework has to figure out which components do I have to re-render, right? Which components got
[00:37:46]  invalidated as a result of you interacting with this button? And most frameworks are like, ah, just re-render everything from the root. Right? And you see where
[00:37:55]  this is going, like, well, yes, but if I re-render everything from the root, I will just download all the templates. And the very thing we're
[00:38:02]  trying to do is not to download all the templates. Yeah. Hopefully the people on my stream are at least somewhat familiar with the solution to this. So keep on going
[00:38:11] . Okay. So you need to have a way of kind of recognizing that if you mutate this state, then that component needs to get, is invalidated. And this
[00:38:22]  needs to, again, all of this information has to be serialized into the HTML, right? All this information is information that you cannot rebuild after the fact, because the
[00:38:29]  only way to rebuild it is to replay the app. And that's the very thing we're trying to do is not to do this, because replaying requires you to
[00:38:36]  download the application, and we're trying not to download the whole application at once. Yeah. Okay. So let's say you figured out which component is invalidated. Now
[00:38:45]  comes the next hard part, which is you need to be able to do out-of-order rendering. You need to be able to say, great, this component is
[00:38:53]  invalidated and has to be re-rendered, but how do I re-render the component without forcing the rendering of the parent or the child? And at first,
[00:39:03]  it looks easy, but it's not, because the component gets its props from the parent. And the components produce children, the child objects, the child components reproject
[00:39:15] , right, through a projection. And of course, we have this, this, you know, if you're using JSX, when you have a component, the component
[00:39:26]  actually has symbolic references to your children, which means you, you know, you have to figure out a way of like breaking the symbolic references up in your code base in
[00:39:34]  such a way, so you don't automatically download all the children that are, that are associated with it. It's almost as if you placed suspense everywhere in your application without
[00:39:44]  actually doing it, because, you know, typing all the suspense would be a pain. So very quickly, you realize, great, so I managed to like successfully navigate all
[00:39:52]  these problems. And now you are at the rendering stage where you're ready to just re-render the component, and you realize none of the existing frameworks know how to
[00:39:59]  render a component in isolation, right? They all say like, oh, you want to render? Great. Let's start at the root. Or, for example, if
[00:40:07]  you're a reactive framework like Svelte, Svelte can be like, great, you can render this particular component. But in order for me to know which component
[00:40:15]  is associated with which data state, I need to execute all of this stuff at the beginning at least once so that I can build up the graph of dependencies. Right?
[00:40:24]  So again, you're back to square one of like, yes, but like the thing we're trying to avoid is not having to download all this code. And, you
[00:40:29]  know, all of these current solutions are forcing you to download everything. Okay, so let's say you can, you can render the component out of order, meaning you can
[00:40:39]  just render the component without forcing the render of the parent or the children. Let's see, you can do that. The next problem you're going to have to solve is
[00:40:47]  observing side effects, right? Every single framework has some API where you say, go watch these set of properties. And if these set of properties change, I want you
[00:40:58]  to run this function that will have some set of side effects that do stuff, right? And if you think about it, this is kind of like a headless component,
[00:41:06]  like it has all the properties of a component, it just has no rendering, right? The rendering is some side effect function. But it has the same exact idea of having
[00:41:14]  props, you know, the inputs to this particular thing that cause it to re-render. And it has a side effect, which is not rendering, but some other
[00:41:20]  side effect and so on and so forth. Yeah, I love that framing because it's, from a reactive perspective, like, I know that's a little bit off topic
[00:41:31] , a tiny bit, but like, I often claim that all of solid is just all side effects. We don't have components, we just have side effects. And in
[00:41:40]  a sense, comparing a side effect to a component is actually, I like that kind of mentality. Yeah. So where are we on the list? Okay. And so
[00:41:50]  finally, we have to solve the problem of idealizing bundles. And so this is the problem that, great, we have successfully broken the world into gazillion tiny little
[00:42:00]  chunks. But in practice, we know that's not the best idea, right? We want to somehow group them together so that we know we look at statistically, we
[00:42:09]  look at how the user actually interact with the page. And based on that, we can collect information about like, what are the probabilities of which symbols that the user actually needs
[00:42:19] ? And then we can place related symbols together in a single chunk, and then grade the chunks in the probability of being needed, and then start prefetching or preload
[00:42:30] ing the chunks in the correct order, right? So that what we can do is we can build the absolute best bundle, right? Because breaking files into bundles is
[00:42:42]  super hard, as you might have discovered. And because Quik, what it does is it breaks it up into gazillion tiny little pieces. It's always easy to put
[00:42:53]  independent pieces back together, right? The hard part is breaking it up. Once you broke it up, to figure out, like, what the ideal set is, what
[00:43:00]  are related, though, that's easy, right? And so finally, you have to do this kind of a trick where you bake bundles that are ideally both sized and
[00:43:09]  separated so that you can just download everything in the correct order. I think there's one more item on this list, which we haven't added, and that is the developer
[00:43:18]  experience. Yeah. Right? These are a lot of constraints that you're putting on a system. And you want to make sure that all of these constraints are done in such
[00:43:28]  a way that the way you write the code doesn't look off-putting, right? So then you look at it and you go like, yeah, I can
[00:43:35]  write this. I can see it me writing this stuff. This is not a horrible way of doing it. And I think Quik came a long way. If you looked
[00:43:43]  at the original original vision for Quik, what we did, it was pretty horrendous. And then over the many months of hard work, lots of people's inputs,
[00:43:51]  we actually got them to the point where we're, like, very private, but the code looks very natural. So we have the developer experience. Okay. So this
[00:43:57]  is the long list, and we're going to dive into each item in more in-depth and how Quik solves it. Yeah. But I want to point out something
[00:44:04]  interesting here. And that is that I always have to chuckle when somebody comes and says, oh, yeah, we'll add progressive hydration in our next major release. Not
[00:44:13]  going to happen. There is no way that you're solving this list of issues in a way that doesn't create significant breaking changes to your ecosystem. And this is the
[00:44:25]  problem, right? Suppose you have your popular framework and your most popular framework. You want to do this? You can't. Because if you do these things, you are
[00:44:34]  so significantly changing the API structure of what you do that you make all of the existing code that you have incompatible. In other words, you're creating a brand new
[00:44:43]  framework that is incompatible with what you have. You've completely destroyed your ecosystem. And nobody's going to do that. Like, that's just not going to
[00:44:51]  happen. Yeah. So go ahead. Yeah. I would say the funny thing is, like, I will say, like, Quik has a very specific approach that we
[00:45:02] 're going through and we're going to go through more in detail on how they approach, you know, you guys approach some of the problem or this sort of problem space.
[00:45:09]  And a few other solutions out there are trying to approach the problem space. But the one, you know, in slightly different ways, maybe they don't solve the same
[00:45:16]  thing as Quik, but they also address different portions of it. The thing that I found common in all of them is that it is basically like a rewrite from the ground
[00:45:26]  up or something different, like whether you have something like Quik, which is built this way from the ground up or Marco, which has its own kind of thing that's
[00:45:33]  also built from the ground up that way. But even React server components, which don't solve exactly the same problems, but it's still trying to find solutions in the
[00:45:39]  space. That version of React is nothing like React, you know, today, like, it's literally like they just took a different framework and tried to put it in.
[00:45:49]  Like, it is not the same thing. And even in the sense, they don't do the same thing as what Quik's doing. But anyone who's even trying
[00:45:56]  to approach this from a certain angle to get to do certain portions of ability to send less JavaScript, they are coming at it at completely different angles than the way that they
[00:46:11]  work today. Like, you don't just get to keep your API, keep the stuff the way you do it. I know I'm kind of stepping up general. I
[00:46:18]  know Amishko has like specific opinions, probably on those other solutions and why they're not what Quik does. But I'm just saying even just trying to approach this
[00:46:27]  zone, almost like forget about doing what Quik does, even doing something like, you know, slightly different, like a different attack at this still requires such drastic changes
[00:46:38] , that it's taking the React team five years. That it's like, like, like, like, it's, it's such a huge mental shift, and it
[00:46:47] 's such a huge change in how you approach these APIs, that even when you're not doing precisely this, like, it, you don't just get to take solid
[00:46:58] , or svelte, or view, or react as you know it today, and just go like, hey, you know, next release, it does not work like
[00:47:05]  that. Yeah. And the other thing I want to point out is that this list, what's, what's nefarious about this list is that you need to
[00:47:12]  check off all the boxes, like, if you check off half of them, you get nothing. Like, you don't get the benefit until all the boxes are checked off
[00:47:21] . And that's the hard part, right? If you figure out how to break up code into chunks, but you still do centralized bootstrap, eh. If you
[00:47:28]  don't know how to serialize the handlers, eh. If you can't restore the app state, and you have to redo everything to rebuild, if you replay
[00:47:36]  this, the work, you don't get it, right? You got to check off every single one of this list, and only then do you get the pot of gold
[00:47:44]  at the end, which is the, you know, the amazing performance. Yeah. Okay. I think we should do some demos. What do you think? Yeah, I
[00:47:50]  think, I think enough talk. Well, where do we at here? I might a little intro, but yeah, we've been talking for about 30 minutes straight. That
[00:47:57] 's a lot of theory. The classroom portion of this lesson is over. Let's see if we can share Mishko's screen and we can get that going.
[00:48:05]  So just give me a second here. I'm going to stop sharing my screen and let's add, here we go. And yeah. Okay. So just for you,
[00:48:13]  Ryan, I have built this demo since yesterday night. So this is a demo just for you. And I specifically built it because I want this not to show off amazing
[00:48:23]  stuff that Quik can do. Rather, this demo is specifically built to show off how Quik does it. And so it's more like an educational tool. And I
[00:48:32]  really wanted to keep it as simple as possible to kind of get there, right? I think I know where you're going with this because this is the example I use in
[00:48:40]  every article that I write about these techniques, whether they're a progressive hydration like Quik or partial hydration like Marco. I always use this example of someone clicking a button
[00:48:51]  halfway down the screen and affecting something up top like a cart or something. And that's, I'm pretty stoked to see how this works. Right. So the first problem
[00:48:59]  we talked about is we have to figure out how to do chunking, right? And so let me give you a demo of the app. Like the app is boring,
[00:49:06]  right? So here is two items and here's our cart on the top. It has an item. And so if I click add cart here, I want to update to
[00:49:15]  the little blue box that you saw that came up for a second. That's showing you what's being re-rendered. So that's showing you the re-
[00:49:21] rendering, basically, that's happening for that particular component. And of course, there's the other button. So you can add the second item in here. And then
[00:49:29]  there's this one button that, of course, is not going to work because there's a little bug, but let's ignore this for a second. That shows off the
[00:49:40]  details, the description of this particular item. And then you can hide the description again. And of course, why is it not working when it's demo time? So
[00:49:47]  please ignore that little bug. So the thing to see here is that you have JavaScript that gets loaded. So let me refresh the page again. And I am in network tab
[00:49:58]  and I have zero JavaScript tab and there's no JavaScript being loaded in here whatsoever. Right. And the thing I want to show is that when I click on add cart,
[00:50:06]  I download a symbol, which ends in D8, right? And this, I guess it's minified already, so you can't really see much. Yeah.
[00:50:14]  It ends in D8. And if I refresh it again, and if I click this button, it downloads a different symbol, right? Which ends in 3C. And
[00:50:24]  then other bits come in. And in both cases, I get, I believe, ABA because that's the cart, if I remember correctly. If I click here
[00:50:30] . Yeah, it gets, no, it must have been a different symbol. Anyways, the cart, it gets updated. So the cart has some symbol. And if it
[00:50:38] 's not, that must be one of those two. Anyways, the point is that there are chunks, right? And so we have to first figure out how do we get
[00:50:46]  all these chunks. So let's go over to the source code. And here is our source code. And I intentionally put all the source code into a single file,
[00:50:56]  because I wanted to, to kind of point out that even if you throw everything in a single file, everything just works. And I'm, yeah, yeah, no,
[00:51:07]  it's funny, because I didn't think much of it. But someone mentioned, and you can correct me if I'm wrong on this, that's, at one point
[00:51:14] , people were critical of Angular or something about this, in terms of the multi file thing, or maybe it was something earlier in quick days. So like, you almost
[00:51:23]  do it now just as a bit of a, like, yeah, we can do this. So Angular can do this, too. But I think the point that people were
[00:51:31]  saying about Angular is that there is a lot of ceremony to creating a new component, there's a lot of work, you don't just think about it, you just make
[00:51:38]  a component, right? Whereas in React, it's just a function. And so people are a lot more likely to create it. And so refactoring becomes easy
[00:51:45] . So I think they have a very valid point. And this is the thing I wanted to kind of do over here as well. Okay, so what you're going to
[00:51:53]  see here is, I'm just going to collapse some of this stuff. And what you're going to see here is that this looks very much kind of like react function,
[00:52:00]  right? So you're defining a function. And there's a closure in here. And that returns basically your JSX right in here. Now, there's more clos
[00:52:09] ures here. And we're going to explain why there's more stuff in here. But I want to get your attention over here to this dollar sign. You're either going
[00:52:17]  to love it or hate it. But dollar sign here is a special meaning to the optimizer. Basically, what it means is that every time you see a function that ends
[00:52:31]  in the dollar sign suffix, take the function and make it lazy loadable. Right? So this function that you see over here, right, which goes all the
[00:52:41]  way down here, actually gets pulled out into a separate, separate file, and becomes an entry point for a roll up to kind of do its magic and assemble things together,
[00:52:52]  right? And so what you see is that you have this function, we call this function, the unmount function. We also are loading styles. Again, styles are loaded
[00:53:01] , it gets pulled out into a separate symbol, because there's a dollar sign. And we produce a render function. And again, it's got a dollar sign.
[00:53:10]  And so it produces a separate file. And in here, there's no listener. But if you scroll down, let's see the listener. At some point, we're
[00:53:18]  going to have a listener somewhere. Here we go. We have an on click listener. And again, there's a dollar sign, which means it gets pulled out.
[00:53:23]  You just changed the API again, since I used this last week. Oh, yeah. We're always making it better. So let me just search for dollar sign. There
[00:53:34] 's 24 of them, really? I'm actually surprised by the number of myself. Oh, no, some of them are the actual dollar sign of the prices. Okay.
[00:53:42]  So ignoring the dollar signs of the prices, which looks like, let's say it's about three of them in here. There's about 20 different dollar signs in a
[00:53:50]  system. What that means is that the this the single file that you see here gets broken down into 20 separate entry points and 20 separate symbols. Now, one of the things
[00:54:05]  we do when we do a build is let's see if I remember this correctly. Let's see if I go to build here. Yeah, here we go. So
[00:54:13]  one of the things we have to do is we have to recognize the fact that on the server, we're running node.js. And therefore, we need to run CJ
[00:54:22] S, right? Because I know node kind of can do but not really because it's complicated. And so it's easier on the server to just run node CJS.
[00:54:30]  So we have a CJS built for node. And in this particular case, all the code gets placed into a single bundle, right? Yeah. So this whole application
[00:54:38]  is one humongous button bundle together with the framework and everything in here. Yeah. But for the client, we do different stuff. For the client, we produce lots
[00:54:47]  of different entry points, right? As you can see, every one of these queue files that you see here, that's a separate entry point to the system. And I
[00:54:55] 'm not saying that you need to have that many because we're going to later discuss how to like put them back together. But the point here is that, right?
[00:55:06]  So this is minified, et cetera. But it looks like this is a specific handler, right? So this we're exporting looks like S, which happens to be the
[00:55:15]  item unwritten button click. And, you know, there is some code in here that the user did over here to kind of make the magic work. So the first
[00:55:26]  kind of thing I want to get across, right, is just that Quick does some pretty innovative stuff in just being able to produce all of these bundles, right? So
[00:55:38]  before you run any sort of code whatsoever, you have to take even a trivial app, you need to figure out how to produce all of these individual bundles so that
[00:55:49]  you in any one of these bundles is potentially an entry point into your application. Now, again, there's a separate step that we're not discussing here of like,
[00:55:58]  how do you collate related things together so that you don't have waterfalls and all these other things? But that's easy, right? The hard part is how to
[00:56:05]  do this. And the reason why this is hard is, let me give you an example of what actually is happening. So what the dollar sign means is it tells the
[00:56:13]  compiler great. Actually, let's take the use styles as an example. It's a little bit simpler. Same thing works for everything else. So what the compiler does is
[00:56:23]  it says, great, you've typed this. I am going to replace this with another function, use styles, which doesn't have a dollar sign. Notice that it has
[00:56:32]  both of these functions available. Right. But I'm going to call it with a qrl and I'm going to have to insert in here this chunk, so
[00:56:41]  q, whatever the chunk happens to be, JS, and a symbol that I need to import. So in this case, probably going to be app/styles or something
[00:56:51] . And this is basically our dynamic import? This is a dynamic import, right? So your code has to get translated like this. So when you write this, what
[00:57:01]  the optimizer does is it produces this. Yeah. Okay. So that I think is pretty cool. But it gets better. Because let me not do it here. Let
[00:57:15]  me do it somewhere else. Let me find a better example somewhere down the line. Okay. So here is an example right here. So here we're in an item and
[00:57:27]  there's a button which is add to cart right here, right? So this button has a click listener. Yeah. And so what needs to happen is this click listener
[00:57:38]  needs to get pulled out like this. It gets deleted. We will generate an export. And so this is item on render click. It's cool. This is the exact
[00:57:50]  function that we found earlier when you went to the bundle that was updating the quantity. Oh, yeah, it is true. It just so happens. So this is the
[00:57:55]  function that gets -- this is what the optimizer does. And then behind here, you know, you delete this. And you leave behind PRL. And you say,
[00:58:04]  you know, what is the symbol? So queue some number.js. And what is the name of the symbol? Which is item on a render click. Okay. But
[00:58:14]  here is where the problem starts to happen. Notice when you pull this out, it's complaining and saying like, what in the world are you talking about? What is
[00:58:22]  this cart and skew? Right. Right. And this is the problem right here. This is like this insidious problem of breaking your code into pieces. It's
[00:58:32]  because your code is written as closures and they close over variables and blah. Yeah. Right. What do you do? What do you do? How do you break this
[00:58:41]  up? So this is where both the optimizer and the runtime of the framework and the build step of the framework need to cooperate. And so when the framework pulls this
[00:58:54]  out, it notices that you are closing over cart and skew. And so not only does it put all this stuff in here, but it also puts in cart and
[00:59:03]  skew. It also enters these pieces in here, right? So it says, when you generate this URL, I want you to capture the cart and skew. I
[00:59:13]  want you to serialize those two things. And then in here, a framework will generate this. Yeah. Okay. And so this is the bit of magic that knows
[00:59:30]  how to restore your state, right? Yeah. So over here, we said, oh, we're going to need this cart and skew. So please grab it and
[00:59:38]  save it for later use. And this bit of code over here knows how to restore it. And let me just tell you, we are so proud of this piece of magic
[00:59:47] . We think it's the business. Because this is what allows you to write your code in a natural way where you, like, nest closures and naturally use,
[00:59:57]  you know, close over variables and lexically scope them and capture them and do all the stuff that you're used to, but we still know how to break it into
[01:00:06]  pieces. Yep. Right? And that's hard. That is super, super hard and super unique. And as far as I know, no framework does this magic or comes
[01:00:15]  in and close. So let me just restore this. Say again? We're doing something very, very similar in Marco. But yes, I wanted to see this firsthand
[01:00:27] . Okay. So let's see what is the function again. Let me just find it. Okay. So here's our click right here. And so I think at this
[01:00:33]  point, it would be important to kind of talk about, like, what actually happens on the other side when you render this thing. So I'm going to find this on
[01:00:39]  click function again in here. And so I believe we were talking about a cart. So let's just zoom in on the cart. And in here, what you're
[01:00:47]  going to find is here's our button with our classes, et cetera, et cetera. And here's our on click. Notice the dollar sign is gone, because that's
[01:00:55]  what happens is the dollar sign gets stripped. Right? So the reason why the dollar sign is there is there's two reasons for it. One is it tells the optimizer
[01:01:02]  to do some magic. But more importantly, it tells the developer that magic is happening here. And certain things are not allowed. But just like when you're using react
[01:01:16] , and you want to use a use method, there are rules, right? You can't just put use method anywhere. Right? There's only certain places where the use
[01:01:23]  method works, and certain things you have to follow. So same thing happens here. Basically, whenever you see a dollar sign, we're saying not all valid JavaScript is actually
[01:01:32]  valid quick code. And you have to understand this as a developer, right? There's certain trade-offs you have to do, et cetera, et cetera, et
[01:01:38]  cetera. So the dollar sign serves a purpose. Originally, we didn't have the dollar sign. We just kind of like magically knew how to do stuff. But then we
[01:01:45]  realized, actually, you need to tell this to the developer because they will be surprised. Right, because he has to be able to be serializable. And like, if
[01:01:52]  they try and throw something really hard in there, like unexpectedly, and it breaks, they have no understanding why that would happen. That's right. And so what you
[01:02:01]  see here is first you see a URL, which we call affectionately called QRL. So you see a URL. And this URL here is a pointer to a chunk that
[01:02:11]  needs to be downloaded, right? Yeah. And right afterwards is the symbol that needs to import from it, right? So this is the dynamic import that has to happen here
[01:02:20] . And from that thing, we want the symbol. And it's done this way, because we want to make sure that when we, you know, if we later
[01:02:26]  decide that all the symbols actually are best served in a single chunk, that's fine, but we need to kind of keep them separate. And then comes the magic. And
[01:02:34]  the magic is this bracket here contains a bunch of IDs that tell us where this particular object is. So remember, when I did this refactoring, it complained that it
[01:02:44]  didn't know what a cart and a skew is. Right. That's the cart and a skew, these two IDs. Right, right. You were showing
[01:02:51]  us in the nice code way before, but what actually happens is they get given a unique identifier that you do a lookup in some kind of hash somewhere. Right, right
[01:03:00] . So what I showed you so far is basically how we solve the first problem, right? How we take a single piece of code and break it up into lots and lots
[01:03:11]  of chunks so that we can do this lazy load, right? That's kind of the first thing to understand. Okay. So now let's talk about more. So
[01:03:17]  the next thing to understand on that list is how do we serialize the event listeners? And I kind of already shown you, right? What we do is we actually leave
[01:03:27]  a on column click inside of the DOM and it contains a URL to the chunk, the symbol to download, and this bit over here is the bit that the use lex
[01:03:38] ical scope function uses to restore the objects. Let me refresh this for a second. Let's look at this again. So the objects we have here and then X and
[01:03:48]  J and F, J, D. If you go to the bottom, you will see that these are all the objects over here. And here's our X and J.
[01:03:56]  Here's our hash. Yeah. And the other one is what? F, J, D, F, J is this one. So this would be our skew
[01:04:05] . This is our skew. And this is our cart. So our cart actually points to another objects, which is QHB. And QHB is this one
[01:04:17]  right here. Oh, yeah. It points. Oh, because this is an array, right? This is an array. And the array contains a QHB, which
[01:04:24]  is this guy over here, which is the skew, which has yet another pointer. And it has quantity one and the price, right? This is the, this
[01:04:31]  is the line over here. Yeah. It's pretty clever there because I noticed because, you know, you're going to leave the event handler and even your syntax of using
[01:04:39]  the namespace on the on with the on dollar sign and then leaving it in because now it doesn't clash with the native on click event and like all that stuff. Like
[01:04:47]  basically everything's using namespaces and just by, like, you know, the API with the on dollar sign. Well, it's even more clever, right?
[01:04:53]  Because nothing after the hash gets sent to the server, right? Yeah. Because server doesn't care about any of that stuff. This is all client information. Yeah. Yeah
[01:05:01] . This is just your, your, yeah. Right. So we, we, we have to do all this magic. Um, so let's see, we talked about
[01:05:09]  that and we talked, okay, so let's see, we talked about how we break things up. We talked about how we serialize the listeners. We talk about
[01:05:16]  how we load the function, how the function has amnesia and how we restore state using the use lexical scope, right? So now the store is restored.
[01:05:23]  Um, what was the next on the list? What is next on the list? So next on the list is component state or out of order rendering. Right. So the
[01:05:32]  next thing is we need to invalidate the other component, right? Yeah. Uh, okay. So, so let's go back in here and let's look at what
[01:05:41]  the function does. The function basically says it iterates over the, the cart, right? So, so these are the, this is the cart, which is currently
[01:05:49]  shown over here, right? Uh, as the, as your shopping cart and it over it's over the cart and it says, if it finds the skew that matches
[01:05:57]  this current skew, then increment the count and just be done with it. Otherwise, if you iterate it for everything and you didn't find anything, then you have to
[01:06:04]  push a new item into it. Right. And, um, you know, what I, what I like about this is that, look, there's no, nothing
[01:06:12]  special here. Like you don't have to do like special, like you're just comparing object IDs directly. Like there's nothing. You don't have to do any kind
[01:06:19]  of like, oh yeah, but really this is serialized and I'm getting it. Like none of that stuff, right? It's all abstracted away. You're
[01:06:25]  just like writing code as you would normally write it. Um, the other thing I wanted to show you is look at this script here. The moment I click something like this
[01:06:32]  button, the script gets consumed. It's gone. Yeah. Right. Okay. Because on bootstrap, what you do is you grab the Jason and you serial
[01:06:40] ize it and, um, you need to know where to put these objects. And the way you know, this is you run a query, uh, and you say,
[01:06:51]  Hey, give me all of the objects that have attribute Q object. Right. And so these are all the objects that want to are interested in these, uh, these
[01:07:04]  objects. Right. And if you look at one of them, right? Like this one over here, notice it says Q object and it lists all of the ones that cares
[01:07:12]  about. And this is a form of garbage collection because we need to be able to keep track of it and figure this out. So what happens is on the beginning at the
[01:07:20]  very, very beginning, we consume the, the Jason object, we deserialize it. Right. And then we go over the dom and figure out, okay,
[01:07:27]  who cares about what? And then we hand off all these objects all over the dom. We spread the knowledge, uh, of the dom. So that happens immediately.
[01:07:37]  That's part of the, like, no, it happens on first interaction, right? It doesn't happen. So, and only, okay. It happens on first interaction
[01:07:45]  and only is it any interaction or only related to the interaction that that one pulls in, so to speak? Like it's only interaction that actually calls the use lex
[01:07:54] ical scope, right? Only if you don't call it. So if we had a button, so it's actually a good point. Uh, let's, let's
[01:08:02] , let's just for fun of it. Add on, uh, mouse move. Is that how I'm calling it correctly? Yeah. Just random side effect console log
[01:08:22] . Yeah. Okay. In this particular case, when the, um, when the function gets pulled out, they, the compiler realizes that you're not capturing any variables.
[01:08:32]  And so use lexical scope doesn't get inserted over there. Yeah. Because it doesn't get inserted over there. If I refresh this live demos. Come on
[01:08:41] . What's going on? Did I misstep something? Mouse move? No, that's correct. Cool. Demogod. Oh, sorry. I'm in the
[01:08:59]  wrong. Sorry. Wrong, wrong tab. There we go. How do I, here we go. Here's the console. Yeah. And look, the script is
[01:09:09]  still here. It didn't get consumed. Okay. So the whole thing is extremely lazy, but it even gets better. Like if I consume the script, I can just
[01:09:17]  go and document dot, um, I can serialize it back in here. And now it's back in here. Now the application is deserialized. Everything's
[01:09:28]  unloaded and it's ready to be moved into a different VM, right? So, right. So originally you, you, if I remember correctly, quick had all
[01:09:37]  of this serialized in the HTML at one point, and then you probably for a number of reasons, decided to, to pull it out into the JSON anyways, I guess
[01:09:46]  deduping probably valuable. Um, what else would be valuable from doing that? Generally constantly updating this, this stuff in the script tag in real time, probably had a
[01:09:56]  performance overhead. Um, I don't know. Was there any other considerations there? Uh, yeah, that's kind of pretty much it. Um, let me see
[01:10:05] . I like to do this, this trick, but I'm thinking, do I have the actual URL? Um, can I do blank? Because it serves up the
[01:10:15]  application anyways. Uh, this might work. Okay. I need it. I need a URL that contains the proper things so the code can wrote. Okay. So let
[01:10:29]  me, let me, let me try to do this. This is my favorite trick. Okay. Add a bunch of things into the shopping cart, right? You have something
[01:10:35]  in there. Go back and say, be hydrate. Now everything's in there. Now I can go and I can say percent zero dot, uh, outer HTML
[01:10:46] , right? Get the whole document. You can grab the hot document copy string as a JSON literal. Now I can go and go and download, go to a different page
[01:10:55] . It has to be a same URL. So that's why I don't have to state a localhost, whatever. Right? So I have something else in here now
[01:11:01] , uh, go here and say percent zero dot, uh, inner HTML is equal to and paste the document, right? It'll restore the application with all the items
[01:11:13]  in the cart, but all items in the cart. But of course it doesn't work. The reason it doesn't work is because we haven't executed the, the,
[01:11:20]  the integration didn't execute the script. So let's just click on the script and do eval. Okay. Text. And now that the script is executed, I can
[01:11:33]  add things into the cart, that is an amazing demo. Right. I mean, maybe you're like, why would you ever do that? You would never do that
[01:11:42] . Right. But the fact that we can. Right. Yeah. Like, yeah. Like if you want to like convince someone like that, your framework is resumable
[01:11:50] , like here's, here's your test. This is what I'm talking about. Right. This is something like this to actually showcase it, you know, just so
[01:11:59]  people can have a bar, like for concurrent rendering, I was trying to come up with something like this because people, everyone's like, yeah, I can concurrent render
[01:12:06] , but it's like, no. Right. So, so this is how it gets from the server to the client. Right. We run it in the server. And
[01:12:12]  at some point we do Q hydrate, we freeze everything, serialize the HTML, ship it to the client, restore it. I mean, and then just application continues
[01:12:20]  where it left off. Right. There is really no concept of like bootstrap or hydrate or like we talk about progressive hydration, but it really isn't about
[01:12:29]  that. Uh, it's about reasonability, right? The application literally just resumes where it left off. Yeah. Yeah. No, that's, that's super cool
[01:12:37] . And, and, and I mean, the key part to this is the way you can just, uh, what was a dehydrate or whatever that, that function,
[01:12:44]  I imagine most frameworks probably, even if they try and follow quick footsteps are probably gonna might not bother with that unless they find a use case, but having that is a
[01:12:52]  very, very cool demo. I'm not gonna go by this. That is. Yeah. Yeah. Okay. So let me reframe. Oh, then we got our
[01:12:59]  hammer again. Let's go back here. Okay. So we are our demo. And so we, we broke up the application. We can serialize the elements. We
[01:13:07]  can, um, restore the state. We can execute a side effect on the code. Right now, the next thing to figure out is how do we know what to
[01:13:16]  invalidate? Right. Is the next problem. Like when I click this button odd card, I need to invalidate this component. How do I know to do this?
[01:13:25]  Right. What's the magic? And if you look over here, um, there is really nothing in here, right? There is, there is, it just says,
[01:13:35]  you know, scan the card, but there's not, there's no update. There's no setters. There's nothing. Right. And the reason this works
[01:13:40]  is because all these objects are actually proxies. And, um, we need to, the reason we need proxies is because we need, uh, uh,
[01:13:49]  quick is a reactive framework. It's kind of weird. It's kind of a mixture of two things, right? Within a, within a, um, uh, render
[01:13:59]  method, which is right here, right? It acts like a V-DOM like framework, like react, but between components, it's reactive. It's more
[01:14:09]  like Svult. So it's reactive on a component level, but just a regular V-DOM on component. View is actually the framework that is, is probably
[01:14:19]  closest to what you're actually describing. They have fine grain reactivity on their setup function. And then they're, they use a J they, if they use template
[01:14:27]  or JSX, um, it feeds into a V-DOM. So I actually think for people wondering view is actually probably the closest to this. Um, right.
[01:14:36]  So, but the unique part is that we observe what you do inside of this function because everything's a proxy. And this tells us what, uh, this is basically how
[01:14:49]  you create subscriptions. So you don't create subscriptions by explicitly calling subscribe because that creates a whole bunch of functions and those functions, I cannot serialize into the HTML.
[01:14:59]  Right. So instead, what do we do is we observe, we give you proxies instead of for your objects. And when you work with proxies and you
[01:15:07]  read them, you write into them, uh, we keep track of like, okay, so you know about this thing and you read that thing. And therefore that thing changes
[01:15:14] , I need to re-invalidate you and so on and so forth. Right. So what happens is we gave you cart and, uh, and a
[01:15:22]  skew. Now skew is never, um, modified in this piece of code here, but cart is right. Because cart item, we call quantity plus plus, or
[01:15:32]  we say cart push. So cart is definitely a, uh, an object that gets modified. Now, if we go back here and we look at the, uh,
[01:15:42]  on click over here, we see that there are two objects. One of them is the cart and the other one is the skew. I believe it's the first one
[01:15:50]  that is a cart as we already got consumed. So we can't tell it. Well, we can tell it because if we go up higher anyways, this ID,
[01:15:58]  so this ID to quit with worry about is the one that ends in 6s. Okay. Okay. So the 6s ID, uh, actually what we do is we
[01:16:07]  do this fun thing. Uh, okay. So I'm bad. We don't do that. We do. We copy. Okay. Can I do part of that
[01:16:22]  6s? Oh yeah. Here we go. So I'm like, what's 5-0? what is in front of it, four, four. Okay,
[01:16:33]  so this is the output. I'm not going to have the whole idea here. But notice, we can just do a simple query where we say, like, hey,
[01:16:43]  what all nodes care about this particular object? And the browser tells us. The nice thing about this is, like, if a node is hidden, even if it has a
[01:16:54]  reference, the fact that it's hidden, it won't show up in a query, and therefore, we don't have to worry about updating it. Anyways, so
[01:17:00]  in here, we go through it, and we're looking for... Not all of these are actual components. This is a component, and the reason we know it's a
[01:17:10]  component is because it's an onQRender method. But this is also a component. This button is not a component. It's not an onQ, right?
[01:17:20]  Yeah. So anyways, so this basically is how we can figure out which of the objects we care. Now, if you come here, and it's a QR
[01:17:31] ender, we look at it, and we notice we see QObject, and then we see the 6S right here, and there is an exclamation point in front
[01:17:40]  of it, meaning this guy holds a subscription to 6S. Whereas if we go to the second one, the second one also has 6S, no exclamation point.
[01:17:51]  it doesn't hold a subscription. In other words, it has a reference to, but it doesn't care about it. Okay. Whereas this component right here has a
[01:18:00]  reference to it and also has a subscription. So this is the component that has invalidated as a result and has to be re-rendered. Well, just out of
[01:18:08]  curiosities, I mean, it's a little tricky to go backwards. Like, what's an example of something which would have a reference and not have a subscription? Because
[01:18:15] , I mean, obviously, you get a reference if you are, and a subscription if you read it under some kind of tracking context, but what would a reference without
[01:18:24]  a subscription look like on the other side? In the code side or here? Yeah, on the code side, I mean, I understand. So this is the item.
[01:18:33]  So the specific item is cart item right here. Yeah. And what happens is, if you look at the item, right, it has props and it has a cart
[01:18:42] . And so, sorry, it's not cart item, it's cart. So cart is that object, right? And what the system notices is that as props, the
[01:18:52]  cart comes in, but it's not referenced anywhere inside of the JSX. It's only referenced inside of the click function. Which is a separate piece, yes.
[01:19:03]  Right. So it understands the fact that it needs a reference to it, but it's not subscribed to it. So mutating cart should not cause a re-render on
[01:19:14]  the item function, right? Because it won't change anything. Like, it's never read, and so it doesn't matter how you mutate it. And then if
[01:19:21]  you change the identity of it, then you have to re-render. Yeah, yeah, no, that makes sense to me. Like, there are always tracking and
[01:19:27]  non-tracking contexts, but in this case, it's because of the way the components actually get split that you end up with the non-tracking context. Okay
[01:19:35] , gotcha. That's right, that's right. Okay, so where are we? So, right. So we have successfully figured out which component is invalidated,
[01:19:45]  right? And the answer is this component. No, that's not the component. The first one right here, because that one has the exclamation point, right?
[01:19:51]  So here is our shopping cart, right? Yeah. And I don't know how to use a CSS, so I'm using a table, forgive me. And, you
[01:20:04]  know, we know how to re-render it because, you know, here's a URL, right? So we know we have to go find main cart on render.
[01:20:12]  And if you look at the network tab, you will see that we, here is our button. That's on mouse move. That's not the button. Is this
[01:20:24]  the button? No, that's the console log. One of these is our button. Yeah, that's our button. This is our listener right here, right? Yeah
[01:20:34] . And obviously, this fetches the quick loader. But finally, what we do is we actually go and fetch the on cart on render, right? So this
[01:20:44]  is the JSX for the cart and nothing else. So we download the cart in here. Yeah. And so this is how we know to go and update that particular thing
[01:20:55] . Now, one of the things that I talked about is that we need to be able to do out-of-order rendering, which means we shouldn't be,
[01:21:02]  when the item renders, so let's go back to it. Yeah. So this is our div. And if you look into it, so let's see, we
[01:21:12]  can do percent zero dot q props. It will be, sorry, is it hydrated? It's not hydrated. I have to do something. Let me interact with it.
[01:21:21]  Okay. So now it's hydrated. Props. No. Did it property change? There we go. So these are the q props of this particular component. And
[01:21:40]  it's a proxy. And one of the things you can see here is it's our target object. It has a bunch of things. Well, we can just look at
[01:21:50]  it. It has a cart. See, cart is one of the properties. And it has the ID. And the reason for that is because if you look at our application
[01:21:59] , where is our app? Here's our app, right? Our app, we render the cart component right here. And we pass the cart to the component.
[01:22:12]  I know it's confusing. The property is cart in the component. Yeah, it makes sense. Yeah. And that's this guy right here. And that gets serialized
[01:22:20]  as this particular thing. Right? So what we can do is we can actually retrieve it. And that's the object that we're getting. So the cart is our
[01:22:30]  array, which contains our skew, right? Which contains all the items inside of it. So all of the data is actually stored on a DOM, right? The DOM
[01:22:39]  is the source of the truth because we can't keep sourcing the truth with us because at any time, we could be unloaded and moved and destroyed or whatever, right
[01:22:45] ? So the DOM is the source of the truth for us. And we can go and do stuff. And because this is a proxy, you can do fun things with
[01:22:53]  it. You can say like, foo equals bar. And look, a bar got updated over here, right? Yeah. And so you can actually interact with it
[01:23:07] . Now, what I wanted to show you is that when I click odd cart, the blue box jumps out to you because that's the only thing that changes, right?
[01:23:16]  Now, no matter what I do, no matter what I click, I can get this thing to render. I can get that thing to render. But like, I can
[01:23:25] 't get this thing to re-render. Like there's nothing in the system that I can click on that will cause the main of the application to render because, well
[01:23:32] , the main of the application is, there's nothing that changes the data, right? And so that piece of code never gets downloaded to the client unless we do something fun
[01:23:43] . So what we can do is we can grab this component right here. This is the component. And from that component, we can say, give me the queue props.
[01:23:52]  And if you look at it, the queue props has a queue object and it has reference to two of them. This object with an exclamation point, so that's
[01:24:01]  a reference. And the second one, let me look at it over here. If I look onto it, oh, it's going to be, yeah, oops. It
[01:24:08]  is not the cart. It's the item. It's the item. And it's two things, skew and a cart. And the cart is only used inside of
[01:24:18]  a click listener, but never in here. So there's no subscription on it. Skew, on the other hand, is used in here. And so there is
[01:24:24]  a subscription on it. And that's why one of them has an exclamation point, the other one does not. But we can get a hold of it. So we
[01:24:31]  can say skew. And here is our opting that has name, hammer, whatever price on it. Yeah. And we can mess with things. And now a
[01:24:41]  whole bunch of things were rendered, right? So the whole app is interactive. And the only reason that piece of code didn't get re-rendered is because nobody p
[01:24:53] oked at it the right way, right? No execution of any listener, handler, anywhere actually poked it. But if it did, the right magic would happen,
[01:25:01]  as you can see, right? We successfully, well, the ABC is the same. We were successfully able to cause a re-rendering of whole bunch of components.
[01:25:09]  And you saw the blue flash for a second as those components re-rendered, right? But because in a normal use of the application, there is no button that actually
[01:25:19]  changes that state, that code never downloads and never updates, right? So what you would... I think what's really clever here that I don't know if we lost
[01:25:29]  over it a little bit is the proxy on the server means that at render time on the server, the part that's getting serialized is getting collected. So it's like
[01:25:40]  from people familiar with reactive programming, it's like it's snapshotting essentially the current dependencies because this runtime system is similar to other fine-grained systems where it is doing
[01:25:50]  runtime tracking and actually hiding the subscription mechanism. it's actually like when you get into some place where it's tracking, it's like, oh, I'm just listening
[01:26:00]  to it automatically. Like it has the automatic tracking. But the really cool part here is that on the server side, it's getting serialized into the HTML here. So
[01:26:09]  you're actually... The dependencies could change on the fly in a sense because it's runtime. But they start already bootstrapped. Sorry for a terrible button to use
[01:26:21]  that term. Yes, yes, yes, yes. You're getting it. You're getting it. If you follow a different execution path that didn't track on certain variables
[01:26:28] , then they wouldn't track those variables. They wouldn't get serialized. They only need the variables that were run on that initial server render or wherever you're resuming
[01:26:37]  from. And essentially that gets serialized and then the stuff doesn't run at all until he actually poked at it and goes, look, I'm going to cheat
[01:26:46]  here. I'm going to make this value change and now go load and run everything that's listening to it. I mean, it is just a runtime reactive system here.
[01:26:58]  Yes. So if we go and change the price to $1, right? Notice how everything updates. Like this dollar updates. The shopping cart updates. The value rec
[01:27:10] alculates and now correctly does nine times one, which is $9, right? The total updates. Like the whole system just did its magic. Yeah, yeah.
[01:27:21]  Because it's driven off reactive subscriptions like any other kind of reactive. Right. And so now this is why it gets weird when people talk about progressive hydration. It's
[01:27:30]  like, well, is the app hydrated? I don't know. Like what does it even mean for the app to be hydrated? It's fine grained. Like if
[01:27:36]  it's fine grained enough, it doesn't matter because there's no guarantee that the whole app has to ever render it at some point. Like that part on the client
[01:27:44]  side, we've already seen in other frameworks like that you can use fine grained reactivity to only render part of it. The trick here is that this just starts on
[01:27:52]  the server and continues on the client. And for that reason, you don't have to download or you don't have to run once. That's the thing. Oh
[01:27:59] , runtime reactivity. Like there's two different ways to do reactivity. It's compile time where you look at the dependencies. But the problem with that is like,
[01:28:06]  I mean, it's not necessarily a huge problem, but you have to, you have to like, you can't have any conditional logic. Like you literally see what you
[01:28:14]  can do and anytime anything there changes, you run it. And there's runtime, which is based dynamic as each time it executes. And what's cool here is
[01:28:22]  the problem there is you have to run at least once. Any system with runtime reactivity has to run once. The trick here with Quik is it's running that one
[01:28:30]  time on the server. Yes, and serializing it. Yeah, exactly. Right? Like it has to run once. This is the nature of runtime reactivity, but
[01:28:37]  it doesn't have to run once in the browser. Yes, you get it. This is why I love you. You get me. Usually when I talk about to
[01:28:45]  people about this, like they just don't get it. I just gloss over and it goes over their head and I'm like, I'm sorry, I'm trying my
[01:28:50]  best here. But like, you just. Well, I'm hoping that I'm translating it well enough to my audience where there is a little bit of gap there. But
[01:28:59]  to your benefit, we have authors of other frameworks here like Michael and Dylan from Marco. We have a lot of people who are library writers, a lot of people who framework
[01:29:08]  author types, you know, who get you into these details. So I'm sure they're super appreciating these details. And a lot of people have been watching my
[01:29:16]  previous streams. They'll have context to know. Hopefully it's the same as me, exactly what we're talking about. So I'm, yeah, it's very cool
[01:29:24] . It just works. Yeah, this is. Okay. So I have this one more demo of this description. When I click, the description shows up. And I think
[01:29:32]  we should start with how it actually works. Where is it? No, it's an item. Oh, come on. This mark render, if I remember, this
[01:29:48]  is your new version of saying, tell me what the tag name is, right? In a previous version, we had something. Oh, no, no. This is my
[01:29:56]  code over here that I just wrote at the very end that puts the render in the console and adds a render class and removes the render class so that we can show you
[01:30:05]  how it's rendering. This is me cheating so that I can show you which parts are being re-rendered. Okay. I got you. And then you're giving
[01:30:12]  it like a label or something. Okay. Yeah, this is, there's nothing to do with the framework. It's just there. I put it in every single
[01:30:19]  function over here. Sorry, I should have made that point. Yes. The mark render is here only so that you see the blue boxes happen, right? Okay. Other
[01:30:28]  than that, you don't need to write it. So this is not something you would have to write in your framework. And I, you know what? I should
[01:30:33]  have totally remembered to talk about it and I forgot. So thank you for pointing it out. Yeah. So in general, when you write a quick component, you have your
[01:30:40]  component dollar sign, which denotes your component. You have your dollar sign function, which denotes your render function. And then you have your dollar sign on your click handler
[01:30:50] , which is your click. And then you have a couple more for any hooks, let's say like the use style or whatever. And then you use watch or whatever
[01:31:00] , if we get there. We'll get there. We'll get there. I want to show you a projection. Okay, great. Yes, yes. How do you
[01:31:07]  solve the props children problem? Okay. So here's our toggle right here, right? And what the toggle does is that when you hit it, it shows the text,
[01:31:15]  right? And so if you, if we zoom into what, and here's our description in here, right? So if I go into the toggle, again, ignore the
[01:31:23]  smart renders on there to kind of flash the blue thing for you. It has a state, which is whether it's open or not, right? You have to
[01:31:29]  keep track of it. And if you go in here, you'll just find, where is this? Oh, yeah, here we go. It does it through a slot
[01:31:36] , right? So you say, if you're open, then put the slot in here. Otherwise, remove the slot. And that's what it now. Here's the
[01:31:43]  problem, though. If you wake this button up, right? Like, you click on this button, and that just changes the state of this thing. It is getting
[01:31:53]  children from the parent. Yeah. And we want to have this rule that if we're rendering a toggle, we should never, ever force to re-render the parent,
[01:32:01]  right? Yeah. And this is where the declarative slots come in, because when I refresh this and I go in here, this is our, this is the component
[01:32:12] , the toggle right here. This is the toggle, because it's main toggle on render. This is our toggle. Notice what happens is we put the text into the
[01:32:21]  template, right? So when a parent renders the children, it has to always render the children, regardless or not, whether they're projected. Because what if, what
[01:32:31]  if the child wakes up and decides that it wants to project the children? We need to have them available. And so when I click this, the child wakes up and
[01:32:41]  moves it from the, from the template, from the inert part, into the actual part, which is right here. Now, the bug is, when I click it again
[01:32:49] , it's supposed to put it back, and it doesn't. Okay. Let's ignore that for a second. Yeah, yeah, yeah. No, this is,
[01:32:55]  I did want to see this. This is, this was one of the things I didn't get to in my previous demo, and I was very, very curious about this
[01:33:02] , because basically, and this is an interesting, this is one of, one of those things that, Mishka was talking about before, about what other frameworks do
[01:33:10]  and, and don't do. This is actually one of probably the most contentious breaking changes, I think, for a lot of frameworks, because even the frameworks that use
[01:33:18] , a lot of the ones that use slots, even ones like Svelte and Vue that use slots, they've, they've kind of changed over to use React
[01:33:28] 's model. And the same in Svelte and all, and that, is that they lazily evaluate, there's like a certain lazy evaluation of children in that
[01:33:36] , like, that way, if you do conditionals, you don't have to do extra work. Like, and, and so you can use children almost as control flow
[01:33:43] , right? I mean, as just anyone who's seen Svelte knows that that's, that's how, that's how we do that. But what's
[01:33:49]  interesting is, um, some other frameworks, um, or do actually do the eager evaluation. Most, the biggest one, actually not a framework, but web components actually,
[01:33:59]  and the shadow DOM work this way, where they always put the children in, regardless of whether the, the, they're showing it. But they, they built a
[01:34:06]  whole mechanism into the DOM to do that, because this is tricky. Like you see, there's a template element that we have to kind of hoist it up and put
[01:34:13]  it in a place where you can actually control it and have it always available. Because obviously if you just stuck the children in the children and then the, the child component rend
[01:34:22] ers its own children, they're going to clobber each other. Right. So this is, this is like one of the main reasons, I mean, there's
[01:34:28]  a styling aspect, but this is one of the main reasons for the shadow DOM exists in web components, um, to kind of handle the situation. So seeing, seeing
[01:34:36]  it here is, is, is, is interesting because as I said, like it actually aligns with that, but almost none of the modern spa frameworks actually eagerly evaluate
[01:34:46]  the children. And if they were to change this, it would be completely breaking. Like, like this is, this is probably, uh, I mean, there's other
[01:34:55]  reasons this stuff is breaking, but this is the thing that like pretty much like, in my opinion, why this approach that quick does, it's almost off the table.
[01:35:04]  completely for them because they're never going to change the way that their children evaluate. Anyways. Yeah. I, I'm just kind of reading that somebody's asking whether
[01:35:14]  quick supports render props, the receiving data. Yeah. Absolutely. I mean, that's what, what, uh, what you see here, right? Where is it?
[01:35:21]  Item here, uh, you have a component, right? Here's your props, right? You can pass in complicated data structures in here, uh, and it serializes
[01:35:28] , et cetera, and all that stuff happens. Right. So basically, I guess the, the question was specifically, um, and it doesn't have to be through
[01:35:36]  children, but like the prop passed be a function that, that returns JSX that like the, the term render props by, uh. Oh, Oh, I see
[01:35:45]  what you mean. Uh, it's, it's basically like, it's, it's, it's basically like, uh, uh, like you, you, you
[01:35:51]  often see with props children, but you can also see it on any prop and react where essentially you can almost pass a component. Yeah. Like as a prop. Yeah
[01:36:00] , yeah. I see what you're saying. Uh, as of right now, no, and I'm thinking in my head whether it would be possible to support it.
[01:36:07]  I guess the problem is that the problem is you can't really pass in JSX around, right? Like all frame, like react actually passes the data structure around and you
[01:36:15]  can like reach into it and you can manipulate it and change it. And it's super powerful, but the problem is that if you allow that you essentially shoot yourself in
[01:36:25]  a foot on the, on this progressive hydration, you have to run everything from the root because you just don't know. You can't trust that when I hand the JS
[01:36:33] X to the, uh, subcomponent that it doesn't modify it in some way, right? Yeah. It's, it's, it's tricky. Um,
[01:36:40]  uh, because yeah, I mean, you, your options are a little bit narrowed here because one thing quick has is very clear rules. Uh, of engagement.
[01:36:49]  So when you go and you go, I can expect this out of the structure of the component. And because I know I can follow these rules, then every component works like
[01:36:56]  this and they follow the exact same pattern. Um, uh, I'm just gonna mention it again. It's a little bit off topic on this side, but, um
[01:37:03] , because in Marco, we do have render props and we treat projections that without render props eagerly and once with render props lazily. But at that point, those
[01:37:12]  two components now have been fused together essentially. Like at the point that you use render props, you can no longer split them apart. So it's, it, it
[01:37:21] , it, it's dynamic cause we, we use a smart compiler to do it. But essentially the trade-off is as you correctly, it's like you,
[01:37:30]  you, once you allow that you, you don't get to keep that clean separation in the same way. Um, in Marco's case, the compiler is smart enough to
[01:37:41]  kind of track how big the damage area is. Like how much like cast we tied together, but generally speaking, it breaks the rules here. So it definitely, I
[01:37:51] , I could, I, I think it, I think that would probably be problematic. I guess there's. Yeah. What's the situation look like the array changes at
[01:37:59]  runtime. Yeah. I'm going to show this right now. So it's normal stuff that you're used to like within, within, uh, the, the rendering template
[01:38:08] , right? You can use all standard JSX tricks, maps, uh, conditionals, you know, all the stuff that you are familiar with works here. Where
[01:38:17]  it stops working is when you're trying to cross a boundary between two components, right? You can't just make a bunch of JSX and pass it as a property to
[01:38:26]  a child component. Yeah. Yeah. Because like, ah, like how do I, every time you're crossing a component boundary, you have to go through a serial
[01:38:35] ization layer and be able to say like this thing can live independently of that thing. And that means if it can live independently, I have to be able to serialize the
[01:38:44]  content. Um, yeah, this, this is the problem question. Like the example that you're giving that, that those are the render props. So I, I
[01:38:52] , yeah, this is, this is basically the, the constraint here, but by not, uh, but you can always do it locally. Like you can always map or
[01:39:00] , and you can, the map can have components in it. Um, and the, and the component can sing that maps like, like mapping in it. It's just
[01:39:09] , you can't, you can't compose the components around the map function essentially. Okay. And I should make another point, which is we have two kinds of components,
[01:39:16]  right? You have these heavyweight quick components, not heavyweight, but like they have all this magic built into them. Right. Uh, and they have these rules
[01:39:23]  about how they talk to each other, but you can still have a good old, you know, yeah. Right. And these ones don't works. You can use it
[01:39:38]  in here. Like you can totally, you know, here, let me, let me just make a point out of it. Foo. Gotcha. And then,
[01:39:46]  uh, and these are like pseudo sub components, right? Cause they don't have to follow the rules and they just get absorbed. They just get in line essentially. And
[01:39:56]  you can still have them and you can do problems or whatever you want. Like, oh, everything works here, but they don't get the benefit of lazy loading, et
[01:40:03]  cetera. They're permanently bound to whoever they, you know, they're permanently bound to the parent component of what they use basically. Right. But just curiosity. Can
[01:40:11]  those have like magic event handlers in them? Like, yes. Okay, cool. Cool. Okay. Well, that, that actually is interesting. You probably don
[01:40:21] 't recommend this. Cause my, my guess is we'll get to it in a minute. When we talk about bundling, my guess is you're like, no,
[01:40:27]  be as granular as possible because the bundler can make the smartest decisions for you. But it is interesting that if you were like really kind of dragging your feet on this,
[01:40:36]  you could make the decision based on like how you broke the components up. They were like, okay, I'm going to do these lightweight components along with them. You
[01:40:44]  probably wouldn't recommend it. Cause again, the bundler has the most knowledge to do this for you. But some, if someone really wanted it to be like me,
[01:40:51]  me, me, I want my render props. They could, they could just make less quick components and just use more function components if they really wanted to. Although it's
[01:41:00]  probably a terrible idea. So I, as one thing I'm going to point out some kind of, one of these funny things. So notice how foo is used inside
[01:41:05]  of a dollar sign. And I said, there's special rules. Yeah. Right. This seems totally normal. Like foo is in here. Like. Right.
[01:41:13]  But when I went and refreshed, it didn't actually work. And then I realized why reference to root level identifier needs to be exported. Right. The reason for that is
[01:41:22]  what happens is whenever you see a dollar sign, this gets pulled into a separate file. I, I hit this and it wasn't that big. It took me two seconds
[01:41:31]  to realize, but. Right. And so he's basically saying, look, I can't move this thing over there because you're referring to foo and foo
[01:41:37]  is not exported. And foo is not one of these special things that I can just move around. And so. Any top level data needs to be exported in a,
[01:41:44]  in a, in here, right? Like if, if I was just bootstrapping something for like a, to do MVC, which is just some, like an
[01:41:48]  array of data. I would also export that too. If I remember correctly. Yes. Yes. So it's just one of those, those rules. Okay. So
[01:41:56]  let's, let's, let's cover with this one more thing, which is the use side effects. Right. Yeah. I, this, I'm waiting for this
[01:42:02]  one. Cause this, is this the one we're going to show me on watch? Yes. Yes. So when you click a button at cart, we know to
[01:42:09]  rerender this particular bit because we have modified the cart array. We did a push to it. Right. Yeah. But how do we know to update all of this stuff
[01:42:18]  in here? Right. Like now it's three, right? Like these numbers all updated. Like there has to be a logic somewhere. And so this is typically done through
[01:42:26]  use effect. Um, and we have it similar. We have this on watch. And so here is a function that needs to run. And I conveniently put the console
[01:42:36]  log in there. Yeah. So that, um, if I open up the console, uh, and if I click the button, it, it, uh, it says
[01:42:45]  cart watch. Right. Because I, I clicked it. Right. Yeah. So every time I click the button, it updates the, the particular thing over there. So
[01:42:53]  how does it know to do that? Well, uh, it's a, it's a closure, right? And so there's a dollar sign. And so what
[01:43:01]  it really means is let me find it. So where is it queue render? Here we go. So it says on queue watch. Right, right here. It says,
[01:43:12]  uh, go and download, uh, this particular file and the particular symbol. And this is, this is, uh, by the way, we're working with, uh
[01:43:21] , bit, bit, not pronouncing it. Right. And so it does all this magic or putting all this, you know, whatever. Right. So this is
[01:43:28]  bit stuff here. Yeah. And then this is the symbol, the cart on watch that we want to load and noted. It has a bunch of pipes behind it, which
[01:43:35]  basically mean like, yeah, but only run this function. If these objects got modified. So in this article says, it says if this object gets modified, that's the
[01:43:45]  array. And the second object gets modified, but only if the property quantity got modified on that particular thing. Yeah. Or if this third object got modified and only the
[01:43:55]  property price got modified on it. And now by the way, in order for you to execute, you're going to have to restore these two objects. Okay. So
[01:44:04]  all of this information is serialized in here, but of course you didn't type any of that stuff in. And the reason all of this stuff can be done is because
[01:44:13]  we pass in a observable or like observe a proxy for you. And what you do is you take your cart and you run it to observe. And now whatever property you
[01:44:24]  run off of it becomes, um, we know that you, you touched it. Right. So by doing this, we know that you are looking at the cart and
[01:44:33]  we know cart is an array. And therefore we know that if you do any modifications of the array, we need to know about this. Interesting. Okay. So, so
[01:44:40]  the observer, yeah. So basically you observe the object and then whatever is returned from the observed object. So like, that's how, so what was, wasn't the
[01:44:49]  cart a proxy to begin with? Is this like. Proxy on top of proxy, but let's. Okay. Implementation detail. Yeah. Yeah. I
[01:44:57] 'm going to go over it. Yeah. And then as we get individual items, we say those items I care about as well, and I'm going to grow and get
[01:45:05]  the quantity out of it. Yeah. And so I am observing that bit and then go ahead and, you know, compute the value, add the sum and produce the result
[01:45:13]  at the very, very end. Yes. So the store that total gets written into. And so this function knows to, to, to recompute the cart. Yeah
[01:45:25] . And more importantly, as the function runs, you're collecting information about what it depends on. Yeah. And then that becomes your subscription model. And that's how you
[01:45:33]  know. And so. Yeah. Go ahead. Does this one run once on the server? Like first. Yes. That's what you serialized it. Okay.
[01:45:41]  Okay. So the way this works, right? On a server, you run a cart. A cart has a function, which is called unmount. So that just creates
[01:45:48]  a store. We give it some ID. Then we run the unwatch, which we have to run immediately because we have to have a side effect. Right? So we
[01:45:55]  run this thing eagerly. As a result, we collect all of the information. We return a render function, which is unmatched. You know, this is just
[01:46:03]  that thing to make it blue. So you can ignore that. Yeah. And we, we spit out this particular thing. Actually, I'm not going to touch that one
[01:46:12]  because I want that to be blue. But if I go to the app, the same exact thing happens here. Right? I'm actually going to show you if you remove
[01:46:19]  this thing, it actually becomes much nicer because you can just get to delete all of this stuff. And if I remember correctly, like this, right? So the actual
[01:46:27]  way you would write it is this way. Yeah. It's the uglier form for me because I wanted to insert the mark function so I can show you when the blue
[01:46:34]  things happen, the rendering is happening. Yeah, that makes sense. Yeah. Interestingly enough, though, if you look at this particular component, one of the things you're
[01:46:42]  going to notice is that this component is iterating over the map. So clearly it has a subscription to the items. Right? But because items never gets modified, the
[01:46:56]  render function never gets downloaded. The components are like all of these stuff that are related to this piece of component just never gets downloaded to the client because nobody ever changes the list
[01:47:05]  of items. If somebody did, we would download all this stuff, right? This is some, this is the place where there's some gray area. Sometimes people understand
[01:47:12]  the difference between partial hydration and progressive hydration. Because with progressive hydration, there is that, if there's no interactivity, they, they can be, that element can be
[01:47:21]  similar in the sense that if there's no interactivity, that part will never progressively load. So you get the same benefit you get from partial hydration in that scenario,
[01:47:31]  because in both cases, these things will never load. Right. Okay. I think I covered mostly items on the list. Is there anything on the list that I didn't
[01:47:40]  cover? And I, we should probably talk, answer questions. Yeah. Yeah. Let me see here. There is one thing that you didn't cover or no, there
[01:47:47] 's two things. Actually, you got to the main part of how we do the hydration at the end of your list. We, you have a few, some of
[01:47:54]  them might be talking topics, but one was producing ideal bundles for, for waterfalls. One was transient state. And then. Oh yeah. Okay. And then pref
[01:48:04] etching through web workers, which is probably related to the ideal bundles. Maybe. Okay. Let me, let me go through them super quickly. Cause I think people
[01:48:11]  have a gazillion questions. Yeah. I think that the coolest thing is that the, the framework can keep track of these symbols, right? Where is one of these things
[01:48:21] ? So on watch, right? Here's the symbol, right? Card on watch, right? This is one of the symbols. And one of the things I forgot
[01:48:26]  to show you is if you go to the server, we actually produce this file that has all the symbols that got extracted right here. And the particular chunk where this particular symbol
[01:48:37]  is found. Right? So this is kind of the mapping that exists. And this is actually needed because when the, when the application first runs on a server, it
[01:48:44]  uses the server URLs for everything, but then when it gets sent to the client, we have to translate it over to the client URLs because that's a different bundling system
[01:48:52]  than what the server is using. Right. And so we use this kind of as a, as a, as a lookup. Now, in this particular case,
[01:49:00]  we asked the system to generate as many bundles as possible because I did my config and hook. If I do this to single. Right. So this is just a
[01:49:13]  V plugin right here. So yeah. Okay. And then if I refresh, the symbol list should change. What is, oh, sorry. This is okay. Okay
[01:49:25] . This is running in. Dev mode. In the dev mode. Yeah. We need to run it in, in, in the server mode in the actual, right.
[01:49:35]  So we have to do build first and that's going to rebuild this thing. Here we go. So now we ended up with a single bundle. And of course the Q
[01:49:44]  symbol list basically says that everything is in the same bundle. Right? They're all the same. Yeah. So here's the magic, right? Notice nothing got changed in
[01:49:53]  the code. Nothing. And I've created a completely different bundle. So now imagine if your server, your, your, your, as the user is actually using the
[01:50:03]  application, you collect which symbols are needed in which order, which of them come together and which are almost never used. Right? And you use that information to, and give
[01:50:12]  it to the bundler and say, bundler, please make me chunks. I think ideal chunk is about 30 kilobytes. So make me a bunch of 30 kil
[01:50:18] obytes chunks. And here's a list of symbols in the order of statistical priority. So go get me a first chunk that has as many things as you can fit
[01:50:26]  in there that don't go over 30 kilobytes, but all the related things are together. Right. Do you see where this is going? Yeah. Right?
[01:50:37]  You end up with the absolute best bundling strategy you can possibly get. There's nothing better. Right? You just can't do any better than that because you have broken
[01:50:47]  the system down into gazillion pieces. And then you actually watched how the real users actually use it. And then you use that information to create ideal bundle sizes. Right
[01:51:00] . Right. Yeah. And, and I guess the thing is while you're collecting that information, you can, you can start like there's, there's some pre-
[01:51:08] built in stuff here. You can, you can do something, maybe you're a little bit less optimal at first. Maybe you group them a little bit bigger because you
[01:51:16]  don't want to push, you know, too much lazy loading on people. But then slowly you're like, okay, this is the stuff I can, I can chunk
[01:51:23]  this one. Right. And that's, that's kind of an interesting insight that I had, which is that when you're writing the code and you are forced to
[01:51:31]  write a dynamic import, you have no idea whether that's a good place to put it or not. You just don't know whether that is actually a lazy load boundary that
[01:51:38]  will make it better or make it worse. And so you really want the problem of what is the bundles look like? And the problem of I'm writing an application.
[01:51:47]  Those are two separate things that have nothing to do with each other. And you need to make sure that one is a configuration thing and the other one is actually, you
[01:51:55]  know, you need to have humans involved that write code. And then the way you bundle thing is a statistical problem that has nothing to do with how you write the code and
[01:52:02]  you need to separate those things out. Definitely. Okay. And so this allows you, so I think that that solves that particular problem. And then the other bit is that
[01:52:11]  nothing is stopping you from eagerly downloading all these bundles, all these chunks in the correct order. When you first navigate to a page, right? People say,
[01:52:21]  what if you are on a thing and you're in the tunnel or whatever, like just download the most of the application ahead of time. Just give the, you know,
[01:52:28]  in the main, in the, in the, in the initial load, just tell it to start downloading all these things. Don't bother executing them. We don't need
[01:52:35]  to execute them. We just need to download them. Right. And then once you have everything downloaded, maybe, you know, that like there is these six chunks at
[01:52:42]  the bottom that never, ever get used because there's no thing. So don't bother downloading them. But you know this because you see how people use the application. Yeah
[01:52:51] . And then you can pre-download everything without execution. Right. And so you can get all these benefits without really paying for this in, in any way.
[01:52:59]  Right. Yeah. No, that, that makes a lot of sense. And I, I, I, I think, I think it's an interesting one because like there
[01:53:09] , there, people are already used to splitting code chunks off for certain reasons, like for say routing or pages. But I think there's, I think this is when
[01:53:20]  you get to this level, like it, there's too much here for you to possibly make that decision very easily. Right. Like there's too many pieces. So,
[01:53:29]  um, being able to use analytics or even just something relatively dumb probably can still get you pretty, pretty far. Like if you can just be like, you know, the
[01:53:41] , the, the top half of my page is probably above the fold. Let's just bundle that. And, you know, I think it's interesting because like,
[01:53:50]  I'm a strong believer that like the, the, there is some core amount of JavaScript that should be loaded. I think the zero KB thing is been slightly over hyped
[01:54:01] . I think, I think there's like, I think there's like a small portion that is important to be downloaded. And if you can, if you can find that
[01:54:09]  portion, you know what it is like, then you're set. Right. Um, and there's nothing here stopping you from figuring out what that portion is. Right
[01:54:17] . Like you, that's right. Yes. Yes. That's cool. So yeah. Yeah. I was just going to show you one more thing. So, so
[01:54:24]  if I search for here, I'm going to search for dollar sign parentheses. I've gotten 14 symbols in here. See that. Yeah. And that should, this
[01:54:35]  should be 14 lines over here as well. Right. Yeah. 13, 19 minus my math workout. It should be 14. But anyways, those are the symbols, right
[01:54:43] ? That are here. Right. Right. And so the magic really is, you know, writing a dollar sign is so cheap that there is no reason why you just can
[01:54:53] 't put it everywhere. Right. And that's kind of the point, but it's not just putting it everywhere. It's that there is the, the API,
[01:54:59]  the runtime of the system has to understand this, right? You can't just put the dollar sign anywhere you want, right? If the underlying code doesn't understand them.
[01:55:06]  Right. So it is, you have to write APIs in a different way. You have to have a framework that understands the fact that at any point in time, things
[01:55:16]  can be asynchronous and I need to download things and I have to wait. And therefore it's a promise. It's not a thing, right? For example, most frameworks
[01:55:22]  expect the rendering function to be fully synchronous. You can't have a fully synchronous rendering function. You have to have asynchronous rendering function because as you're rendering stuff at any
[01:55:32]  point, you might come across a lazy loaded boundary that you have to go download before you can continue. Yeah. Yeah, no, that, that, that is definitely one
[01:55:41]  of the challenges that add that to, I mean, it's one of those ones like about breaking changes that you're not likely going to see. Right. Making everything
[01:55:49]  async is definitely on that event handlers too. Basically all the dollar sign hook ins have the potential being async. And if it's the, the reason it's
[01:55:58]  particularly interesting or challenging, I mean, and in some ways at a less fine grain level, like stuff like suspense is handling that for things like reactive because you, you want
[01:56:11]  consistency in your UIs. So the, there's, there's this challenge here where pre-computational stuff, it can be async, but you then
[01:56:20]  have to apply your changes in a, in a, in a, um, synchronous, you know, so it's not as simple as just going like, ah, what
[01:56:29] , what, what, whatever, you know, we just add some async stuff in here because you have to make sure that the pre-computational stuff or,
[01:56:36]  you know, like the, the, the pure stuff can run async. And then you, that you can collect it at the end in a way that's consistent
[01:56:42]  that you show the end user. You can't just go async throughout and just go YOLO, like let it fly. You actually have to have, there there
[01:56:50] 's consideration in terms of. We're thinking about having the idea of, uh, of transactions so that you mark certain things and you basically say, I want to make sure
[01:56:59]  that all these things render together. Right. Uh, and then the system can like queue things up and resolve everything and says, okay, now I have everything. Now
[01:57:07]  I can apply it all in a simple shot. So yeah, there are considerations to be solved here. So I'm not saying all this stuff is solved yet. Um,
[01:57:13]  but hopefully I convinced you that it's a very different beast. It's a beast like no other. Definitely. Yeah. I I've been gathering up a few questions here
[01:57:22] . I think maybe I'm gonna, I'm gonna switch view for a second, but we can always show a screen if we need it for explanations. But let's
[01:57:29] , let's see. I got a couple up here. Uh, one question about on watch. Can you do DOM manipulation or other browser specific actions in on watch? Because
[01:57:35]  the question is like use effect. That's usually why you use it in react. Like it's usually the title of the document or that kind of thing. Absolutely. Uh
[01:57:44] , and even weird things you can do. Like for example, if you modify the DOM and you add a on colon click property, all of a sudden. You made
[01:57:52]  a listener. If you delete one, you remove the listener because the DOM is actually the source of the truth. And we actually use this on the builder IO homepage where,
[01:58:02]  um, we can, uh, the whole part of the DOM is basically on a server. We don't send it across because it's below the fold. We just save
[01:58:09]  it. And then when we detect a scroll event, we just reinsert the DOM that we, uh, we're missing through inner HTML. And if it, if
[01:58:17]  there's components and listeners and whatever inside of the DOM, it's perfectly fine. Because. You know, the system just uses the DOM as the truth. I guess the
[01:58:27]  question here in terms of this was because when we were doing our demo and looking at it on watch ran on the server first. So they're probably thinking like, if
[01:58:37]  you go document dot title equals state dot something, like what, what, what is everything going to blow up on you? So document dot title is going to work, right
[01:58:47] ? Because you have a DOM on a server, but you're probably asking questions like, what if I want to listen to mouse, uh, listeners or whatever. Right
[01:58:53] . I mean, to be fair, like the server parts on interactive, I think they are probably talking about like the simple, like the simple case here. If, is
[01:59:02]  there, so there is a DOM representation on the server, like a JS. Okay. And if you want to set up a listener, because typically what you do is you
[01:59:09]  set up listeners, right? You can set up a listener, but you can't, uh, there's a special syntax for it, right? There's a,
[01:59:16]  uh, on, uh, on, uh, on method on dollar sign method, parentheses. You say what listening you want to listen to, like scroll or, and then
[01:59:25]  you would give a, uh, you'd pass the listener in it. And so on a server, the system would recognize that there is a listener being attached over here.
[01:59:32]  It would serialize it, send it to the client and continue running. Uh, there's additional considerations. So, so for example, let's say you wanted to
[01:59:41]  do something on the, on watch, like, uh, set up a stream. This is where we didn't get into transient objects, things that cannot be serialized.
[01:59:48]  Yeah. Um, but, uh, you can set up listeners. Like for example, you can, you can say like when an application is being resumed, I want
[01:59:56]  to be notified because I have to set up a bunch of things. Like for example, I, I need to render a clock and I need to be notified every second so
[02:00:03]  I can tell the system to rerender the clock. Right? So I need to set up a set interval, but I can't do that. I mean, I
[02:00:09]  can do it on a server. That's fine. But it's not going to help me on a client. Right? And so you have to understand that these certain
[02:00:17]  things you have to do in a special way so that they correctly survive the transition from the service of the client. Okay. Yeah, no, that makes sense. We've
[02:00:25]  got a couple of questions. Okay. Here's another one. How do you plan to use AI to determine the bundles? Of course. I mean, AI is
[02:00:33]  just statistical numbers, right? It's just stats. It's all it is, right? Statistics is what AI is. So yeah, we're using statistics to figure out
[02:00:42]  which one is the more likely to click on. So there's your AI. You can get some money from a venture capital firm. There we go. There we go
[02:00:48] . Machine learning. Here we come. Machine learning. That's right. This one I'm actually pretty interested in. We've talked about this before, but I think that
[02:00:55]  people are kind of wondering. Yes. Because I started this down this path and then I realized like maybe I wasn't right. And I wrote about that in my article
[02:01:02]  because I was like, what's really cool about quick is it's, it's obvious that you could, you could go fully spa the way I even most partial hydrated solutions
[02:01:11] . Um, because they're not progressive hydration. They don't actually go to spa. They just go, they, they, they stay MPA because they, because
[02:01:20]  they could never load the stuff on the, like the stuff they drop it. They could never load it for that reason. They can't just transfer into a spa. But
[02:01:28]  the funny thing when I was talking to you and maybe you can talk a bit more about this is you, you, you're, you guys are, you know, very
[02:01:35]  much still thinking, you know, like, uh, smoother MPA, like turbo link style, but like still MPA style routing. If I got the understanding correctly.
[02:01:42]  So yeah, maybe talk about that for a sec. Uh, I'm going to butcher this cause I haven't been practicing this, uh, this thing, but bear
[02:01:49]  with me. Um, so the first thing you have to kind of wrap your head around is that the routing information has to be in a server or rather needs to be in
[02:01:58]  a server. In other words, um, I don't want to be in a situation where like, oh, I want to click on something. And now I have to
[02:02:04]  download the router and I have to download all of the route maps saying like this URL goes to this component. This URL goes to this component. It's like, why are
[02:02:11]  you sending all this stuff to me? I don't need this. I don't want this. Right. So instead what you want is you want to keep all that
[02:02:18]  stuff at the server. And so the only thing you really leave behind is essentially an AA trip or glorified AA trip. Right. Now, when you click on AA trip
[02:02:27] , you would go and download the whole page, but that's the whole page. I don't want the whole page because that's going to call me to refresh, et
[02:02:33]  cetera. Right. So now what if you had like back in the old days, the way the routing was done was through iframes. Now, before you freak
[02:02:44]  out, think of what iframes actually did. They made a little box and said, look, this is our outlet. Right. Don't touch the stuff above
[02:02:53] . Just re-render this thing over here. Right. And what if you had kind of something like an iframe, but not an iframe because there was
[02:03:00]  a lot of problems with iframe. Right. Instead, you had like this concept of an isolate. And what happens in the isolate is, first of all,
[02:03:08]  you could just go to the server and be like, yo, instead of giving me the whole page, I just want the isolate over here. Just give me this thing.
[02:03:14]  I'll enter HTML into it. So that's easy. The hard part is, how do you do it in a way where you reconnect all of the objects? Right.
[02:03:22]  Because you have objects on the client. They have objects on the server. You know, they talk to each other. Maybe there's a search box on the top and you
[02:03:28]  don't want it, but you want to connect the top. There's lots of stuff that just kind of has to be solved. And so the idea of an isolate
[02:03:36]  is not just that it's an inner HTML box, but there's also a clear definitions of how objects get passed to the boundary. So that when you enter HTML, the
[02:03:45]  thing that comes from the server, you also get back the script tag with a JSON of all the objects associated with this thing. But additional information is in there so that you
[02:03:56]  know how to reconnect those objects to the object that might be inside of the navigation or sidebars or something of that sort. So this is an area still of active development
[02:04:05] . And we're thinking about it, but we are really liking this idea of an isolate. And what it basically does is it's like a glorified or lower level primitive
[02:04:13]  as an outlet on a router, which specifically deals with the fact like there is a bunch of I'm going to go and push a resume a subsection of the application for
[02:04:23]  you because I'm going to essentially do inner HTML. But I'll do additional stuff so that I can properly connect your object graph so that everything just connects together and you
[02:04:33]  can just continue running. Yeah, no, that was a very winded explanation. But it makes a ton of sense. I mean, if you even if you're
[02:04:40]  not quite following the details there, the key is this is it's a server routed approach that still keeps client state around it without reloading the whole page. And
[02:04:53]  does it by doing basically these isolates or partials essentially like but as he as Mishko explained, like it's there's complexities there because the new pieces have to
[02:05:06]  play with the plate pieces on the outside like they all have to get wired back together. So far what we're doing is we're just saying ask good we'll just
[02:05:14]  send you a new application because it's so cheap to just essentially inner HTML the whole thing. Yeah, that we've just been doing that and it seems to be fast enough
[02:05:23]  so far because yeah, I mean, to be fair. Yeah, like MPAs have been doing similar techniques for a while now, like turbo lesson, and essentially,
[02:05:33]  the truth of the matter is, at least depending on your industry, like we're doing ecommerce and stuff. It's that it's it's it's it's
[02:05:40]  that initial page load that is the thing that's going to kill you this part. Yeah, we're we're we're this is an area specifically that I've put a
[02:05:49]  lot of interest in the last of a while. Everyone seems to be working on this in like little ways or maybe not working on it yet. Actually, not everyone knows that
[02:05:57]  this is the thing that they're going to do next. Like they're essentially like there's there's like different approaches trying to optimize the partial or progressive hydration pieces.
[02:06:07]  And they're all like, yeah, we're going to get to the router next. And the thing is that I've heard from all of them is almost the exact same
[02:06:14]  story, which is this is the part that gets getting me so excited about it. Because whether I'm talking to guys, you know, talking to Dan about react server
[02:06:21]  components, or we're doing a power and the Marco team talking about how we take our MPAs into these slick transitions or what you just said, it sounds like the
[02:06:30]  same routing solution, which is which is really, really quite cool. This basic idea of kind of outlets or maybe nested routing, but server nested routing where essentially
[02:06:42]  like like that, that you can keep the outside of the page and swap in these inside pieces and make them work. There's probably some specific mechanisms on the communication.
[02:06:53]  And actually, I don't know if he's still in here, Ryan turn quest, who wrote solid writer actually made a server nested router that does this. He hasn
[02:07:00] 't solved the hydration part, which is the hard part, but we actually typed it just the other day. And I was just like, man, this is so cool
[02:07:07] . He just, you know, because he did like three levels of nesting and showed how you could like navigate. And it was just one kilobyte like bundle that
[02:07:16]  never changed. And he swapped all the pages out in parts. And I was just like, yeah, people are going to be making stuff like this very soon. Obviously there
[02:07:24] 's details to make it work for the specific frameworks, but this is, this is a really cool direction that I expect to see a lot of. Yes, it's
[02:07:31]  very basic at the moment. I know, I know, but I was still, I saw it and I'm like, yes. Okay. Everybody's there's this alignment
[02:07:39]  happening here. And I'm just like really. Maybe your, your name buddy Ryan can also come and help us with making router for us. Yeah. So yeah, yeah
[02:07:49] , yeah. This is a, this is, this is a really cool area. And I I'd like to see more stuff on that. Oh, what we've got
[02:07:56]  a couple more. I do want to wrap up soon. So if you do have a question, do try and throw them out here. If we can go quickly here
[02:08:03] , but when, okay, here's one from Dylan. When quick goes to re-render, does it avoid painting any changes until all the async downloading? Yeah.
[02:08:10]  So this is a timing question. Like, like if you're, if you start something and then you have to go grab the script, script tags. How do you
[02:08:16]  like, how does that work? Yeah. As of right now, no. So it vendors as it gets stuff. So you, so things can get out of sync.
[02:08:23]  Um, uh, but we are thinking about how we could make this idea of a transaction where you can basically say, like, I may have to make sure that this and
[02:08:33]  this area basically get the same key. And then the system says like, well, I have to make sure that all the data for this keys are available before I can
[02:08:41]  say that that's ready to apply. So it is an area of development, but as of right now, we just do the simple thing. Gotcha. Uh, what else
[02:08:48]  I got here? Oh, this was a little earlier. I scrolled back to see if I missed any questions and someone's like streaming. Yeah. What's your
[02:08:54]  opinion on streaming? Everyone knows my opinion on streaming. How do you, how do you, how do you? Uh, yeah. So, um, the, the good
[02:09:01]  or the, the, the bad part of the way we're doing quick right now is that we're doing dom on a server. And because of that, streaming is not
[02:09:10]  quite that simple. However, what we can do is we can do, what we're trying to do is we want to have this idea of these isolates that we want
[02:09:18]  to use. Isolates that we want to use for outlet, right? And one of the things that Isolates would allow you to do is to stream because
[02:09:24]  you can say like, I'm done with this section of the page. And now I'm ready to go to the next section of the page. And that previous section could
[02:09:32]  be safely serialized and sent over because we are kind of done with it. Um, and so with, I, with Isolates, you could basically break up your
[02:09:41]  package into bands and then send the bands as you, uh, finish processing them. Right. Um, but yeah, it's not really that high on a priority list
[02:09:50] . Yeah, that's, that's fair. That's fair enough. Uh, yeah, we're getting questions now. Are you familiar with HTMX? I'm
[02:09:55]  just gonna throw this out here. No. Okay. I can put, then maybe I can answer this one. I get this asked on every stream that I mentioned quick
[02:10:04] , everything that I've ever written. And actually maybe, maybe if I just take two seconds and see if I can actually pull it up just for so people can see what
[02:10:14] , what this is. HTMX is gives you this ability. This is why they get mentioned with quick. Cause they actually put actions onto dom elements and, and
[02:10:27]  like operations. And essentially the idea with HTMX is it's not about hydration. And this is the difference here. HTMX is essentially statically rendered,
[02:10:38]  uh, except for the small JavaScript bundle. And then when you say click a button, it goes post to this end point and HX swap means replace the HTML with
[02:10:52]  whatever the, with, with whatever gets returned from this click request, essentially. So I think the biggest difference between this, sorry, I'm gonna, uh, remove that
[02:11:03]  from this and quick, essentially it's it's HTMX is not a hydration method. Like with quick, once you've loaded that bundle, that little piece or
[02:11:12]  package, um, you know, once you interact with it once you're, you're done with the server. Like it just picks up and does the interactive parts rapidly in
[02:11:20]  the client as fast and performantly as every JavaScript framework that you've, you've used. Whereas HTMX could constantly just keeps on going back to the server. Every
[02:11:30]  interaction, every little thing you do does a full round trip to the server. There's also the authoring, right? Yeah. And the authoring is, is
[02:11:38] , is interesting because obviously that's clunky as hell if you're going to be swapping stuff. So if you do want nice interactive JavaScript, you're back to double
[02:11:45]  layering it. HTMX reminds me of, I mean, it's different, but it reminds me of some of the stuff that I I've seen come out of more
[02:11:52]  of like, uh, rails backend or like those kinds of things where they, they basically. like render something using some traditional backend server, non-Java script backend
[02:12:03] . And then this is their trick to like allow them to keep using rails and not write any JavaScript code. So I don't think it's, it's not quite the
[02:12:12]  same thing because in order to get the smoothness, you know, that you get a modern frameworks with HTMX to my understanding, at least you need to actually.
[02:12:21]  Then almost write another job app in JavaScript on top of your HTMX and your rails app. And at that point you've got like three apps going. So yeah
[02:12:30] , it's not the same thing, but I just wanted to address this. Cause I get asked this every time it's, it's just because quick serializes to the
[02:12:39]  HTML and that's why people kind of correlate this. correlate this and it's not always clear the difference between say progressive hydration and. Progressive server rendering. I don
[02:12:48] 't know what to call that. It's it is really kind of a cool like way in the sense we almost want to steal some of those techniques to do the routing,
[02:12:56]  but we don't want to do that all the time. Because once you got a little JavaScript in the browser, it's just way smoother than going back to the server every
[02:13:05]  time. So, uh, still, still not, we were hoping at this point that this, this question would have, would have, would have been answered.
[02:13:18]  So lazy, okay, I'll tell you the difference kind of a high level difference. Um, so we use lazy existing frameworks to use lazy loading across router boundaries, because
[02:13:30] , um, if a component is not currently rendered on the UI, then it's a good candidate for lazy loading. But if a component is already rendered on the current UI
[02:13:40] , lazy loading is a hindrance. It's not helping you because now you have to jump through a whole bunch of hoops to go fetch the code and rehyd
[02:13:48] rate the lazy loaded thing. So, um, lazy loading loading is really great for routing, but it's not good for existing, um, things that are already rendered,
[02:13:57]  right? For something that is already rendered and it's already visible to the user, lazy loading isn't going to really help you. If anything, it's going to be
[02:14:04]  in your way. And so you really want something like progressive hydration. Okay. Hopefully, hopefully that clarifies it a bit because I think where the confusion is, is
[02:14:14]  that technically lazy loading uses dynamic imports. Progressive hydration makes use of lazy imports. So underneath there's some mechanical. Yeah. There's similarities. Yeah. But, and
[02:14:28]  in that sense, you know, someone might even call progressions of hydration, like a special kind of lazy loading, but it's, it's. Yeah. When
[02:14:36]  used in the typical sense, um, one is very. Yeah. There, there are the differences. It's, it's, it's, I wish I could be
[02:14:44]  a little bit more clear on, on that. I, I, it's okay. That. Yeah. I mean, these are going to get. Compared interchangeably,
[02:14:52]  but hydration is a different process than saying. Usually when we talk about lazy loading, we're talking about like lazy rendering. So. Yeah. Yes. Yes. Progress
[02:15:05] ive hydration is lazy, does use dynamic imports. So. Yeah. I mean. The problem comes in is that the framework requires the code eagerly to register the listeners.
[02:15:19]  Right. And therefore it has to cross the lazy loaded boundary, whether you like it or not. With progressive hydration, the framework doesn't require to cross the boundary until
[02:15:28]  you actually interact. And so while underneath it, it's the same mechanism. Like the mental model is very different. Yeah. Yeah. Yeah. I, I like
[02:15:40]  that actually, because this, this is sort of an, to be fair, an arbitrary. Split on our part when defining these, because we have to differentiate them because in
[02:15:49]  other places, things are lazy loaded. Yeah. And I think, I think the, the event listeners is a good thing. Cause this, this, this piece is
[02:15:56]  actually common. Even when we talk about Astro, which is not nearly as granular, they still have that, that top level event listener that lets them at least selectively
[02:16:08]  choose which islands load. So in a sense, it's a very crude version of progressive hydration instead of laser loading. And I think, I think this definition kind of
[02:16:20]  lets that still be in, you know, that bundle versus the other bundle. Okay. How do you define it differently? You can write that in the chat. Yeah
[02:16:32] . I think. I think. Yeah. Yeah, exactly. Hydration is quite equally versus hydrating on interaction. Yeah. I guess. Yeah. That's that's
[02:16:42]  that, that, that, that, that, that, that can, that can work there, I guess. Okay. I I'm giving Michael a minute to, to
[02:16:48]  write. Oh, scroll up. Oh, oh, wow. I don't know if I want to read all this right now. God, you wrote a wall, Michael
[02:16:56] . In my opinion, progressive hydration is just hydration. That doesn't happen all at once. But there's several aspects that differentiate for the approaches. Timing, granular
[02:17:04] ity, and order. Okay. Some frameworks preactively, eagerly hydrate the entire tree, but will break up the work across multiple text and event loops as to not
[02:17:12]  lock up the page. Okay. But it's true. But hold on, hold on. That doesn't help, right? Because A, it still requires you to download
[02:17:19]  everything. And B, it still doesn't help because like, unless you go and render the listener for that particular button, the fact that it's not locking up the
[02:17:28]  page is not helping because you still can't click on it. Right. Yeah. Yeah. Yeah. Not that this is terribly helpful. I guess he, the question is
[02:17:37]  this, is this a form of progressive hydration in a different, in that it's progressive and it hydrates. Right. Um, let's just keep. Yeah.
[02:17:45]  Marco streams in content and will hydrate the islands at, at, in each flush as they become available. RSCs with SSR suspense look to be, yes.
[02:17:54]  Are there's actually RSC reacts, different components of Marco are incredibly similar, which is actually really strange and worth a different conversation. So yeah. And that's a different
[02:18:04]  form. And then all the above is eager, even though it doesn't happen at all at once as soon as it possibly cancel. Yes. So, so in that
[02:18:12]  sense, yours is a, is a right. Whereas astro and some other island solutions allow you to, to divine lazy based on some event to happen and click, click
[02:18:22]  visibility interaction. Right. But once the event happens, the whole thing has to go. Right. Whereas the quick is like very fine grained about it. Right.
[02:18:32]  And everything mentioned so far has to work on trees top to bottom. Right. And we don't want to work on trees top to bottom because that forces us to download everything
[02:18:39]  eagerly. Right. So the question and island based on multiple trees, it still can't hide your average job. Yeah. So. Well, the problem with, with
[02:18:47]  astro is that because it creates these islands, it doesn't solve the problem of like inter island communication. Like you have an application. You don't have a bunch of
[02:18:54]  independent islands. Like I can't make my shopping cart a separate island from my item. Well, I can, but then now I have a problem of like, well
[02:19:02] , now I have to figure out how to communicate and when to wake up who. And like, I don't want my framework to solve this for me, not me as
[02:19:09]  a developer. Right. And I think. Yeah. Yeah. I think Michael understands that because he, he's just listing different things. So I guess for him, the
[02:19:18]  question is, is it, is it a definition thing? Right. Because some of these examples that he gave considers themselves progressive. And it seems like there's a,
[02:19:27]  he, he started from the most, the least progressive thing, which was like preact, which basically is completely eager and just like uses delays to, to, to,
[02:19:37]  to react server components of Marco, which use streaming. But again, are completely eager to astro, which is not eager, but very coarse grain to quick, which
[02:19:49] . Which. A lot of. Resumable is a better word for, for quick. Yeah. Yeah. But the thing is when I say resumable, nobody
[02:19:56]  knows what I'm talking about. Okay. So really a quick is a combination of resumability and progressive lazy hydration. Right. Yeah. Yeah. Yeah. Yeah.
[02:20:08]  Yeah. Yeah. Co-opting the existing terms. Yeah. Because essentially, yeah, this is, this is the, this is a hard challenge because, and
[02:20:17]  it's funny because you, you're, you're caught in between a rock and a hard place. Cause there's existing terms that are close, but quick does it better
[02:20:24]  or more. So you're like, okay, let's just make it super progressive hydration. Right. Or you're, you're forced to basically invent new terms, which
[02:20:32]  is like rich Harris was trying to do with transitional apps. And that might just completely miss like, like where you're like, you know, yeah. Like it's
[02:20:43] , it's pretty, it's pretty tricky because the problem is no one wants to create another term again. Cause remember when we started the stream and I explained that there was
[02:20:51]  four types of hydration and five types of this and this, and I said, you know, let's do some math. Five times five is 25 times four. Oh,
[02:20:57]  a hundred different possible combinations, but not, not all of them are viable. No one wants to add the sixth one to the, to the list. So yeah,
[02:21:07]  this is, this is going to be fun. The one I, yeah, I don't even know. It's funny. Cause we were talking about this the other day
[02:21:13] . We're like, wouldn't it be cool if we had a different term other than transitional apps? Because unfortunately that's already been kind of co co-opted by
[02:21:21]  like single page frameworks. We need a name for. Resumable partial or progressive. And what else to call them? Because I mean, I'm not, I
[02:21:32] 'm like, I haven't mentioned this so far in the stream so much, but like quick. And what it's done is, is amazing. And as you know,
[02:21:42]  I've been working with the guys on Marco team and we've been in this particular area in space for a fairly long time, probably longer than a lot of people in terms
[02:21:54]  of, you know, looking at how to reduce JavaScript and do that. But when we saw quick, we, we, we stopped and took pause. Like we were
[02:22:00]  like, this is really cool because basically we had been playing around our heads with different ideas in the space. And we just didn't have a name for it. When you
[02:22:11]  said resumable, it actually helped us get clarity on the quality of some of the stuff that we were looking at. Cause we were, you had your list of
[02:22:19]  eight things and we were, we were already doing our, in our next version. We were like, we're already doing like six out of the eight things. So we
[02:22:25]  were like, we were like, we knew we wanted to do those things. And then when she's, once you said resumable and we saw quick, we
[02:22:31] 're like, oh, that's the other two things we have to do essentially. Like, like we didn't have your list, but we're just like, like,
[02:22:37]  it just, it kind of clicked for us. And we're like, oh, okay. We just needed this. We just need to take what we were, we've
[02:22:43]  been playing with the last couple of years and do that. But we were already kind of in that thing seems quick, really. And having that term, you know,
[02:22:52]  kind of gave us a, a, a banner, but our problem, of course, is still this naming things is so hard. So four years ago, I was at
[02:23:01]  the keynote at an Angular conference, ng-conf. And I basically explained, I wanted to build resumable applications. And I actually used those terms and I defined all
[02:23:10]  of these things and then nothing happened for three years. Yeah. Yeah. No, I need to find that video and send it to you. Yeah. No, I
[02:23:18]  want to see that too. Yeah. Yeah. Actually, Dylan, this, this is what Dylan was saying to me, resumable and progressive hydration are separate. And
[02:23:24]  then there's this server-side routed nesting thing that we've been talking about. Like we're on, we're, we're kind of on the same page
[02:23:30]  as you. We want a name that encompasses that whole thing. When you have resumable, progressive hydration, and resumable, and yeah. Tested routing.
[02:23:40]  Like we need whatever this, this architecture is, this is what we're going to need a name for. Cause this is, this is, this is, this is
[02:23:45]  the, this is our future right here. Because you know, the trick I did where I grabbed the HTML and I put it in a separate tab and I resumed the
[02:23:52]  app. Yeah. That's the thing that nobody can do. Right. Like, and it's the thing that enables the transition from server to the client or enables the
[02:24:01]  magic of just sending your inner HTML or whatever. Right. And that's the resumability. That has nothing to do with, with hydration. Yeah. Yeah.
[02:24:09]  Yeah. So yeah, they are separate. So then it's like, but you have this piece, you have this piece and you have this piece. This is like a
[02:24:18]  new architecture. God, we're getting suggestions from the chat. I know. It's a peanut gallery. I love it. So yeah, no, this is,
[02:24:27]  this is, this is, this is a lot of fun. Yeah. Yeah. We are still going. This is, this, this, this is, this is the
[02:24:34]  future right now. This we're figuring out the name of the future. Um, no, I, I, what do you do on your Friday night? Exactly.
[02:24:42]  I, I finished my drink already, unfortunately, but yeah, that's, that's how I always know that I'm getting close to the end of the stream. But
[02:24:48]  no, this, this is fun. No. Interruptible. Yeah. I don't know. Reacts trying to hijack that one. That's their, that
[02:24:56] 's their thing. Interruptible concurrency. Yeah. We, we're going to need, we're, we're going to need to figure this out over the next
[02:25:01]  several months and years. Um, but is it type safe? Oh, ooh, that's a question. Yeah, we've done so far with quick is all been
[02:25:10]  done in typescript. So, um, it's, uh, but to make a point here is that, uh, the, the quick never uses the type of information
[02:25:21] . So whether or not that you use typescript or some other thing, it doesn't matter. None of the stuff actually uses the type of information, which is different because
[02:25:28]  angular actually required the type of information. Oh, it does not. Uh, so that safety is fully there. It saves you and all that good stuff. And all
[02:25:35]  that good stuff. But at no point do you actually, does the system actually use it? That's good. Yeah. No, he, he, I think this is
[02:25:42]  just saying, I want the future to be type safe. That's that's. Yeah. Uh, yeah, we didn't cover this and I don't want to get
[02:25:49]  too. People are curious about serialization a little bit, but. Yeah. So, uh, obviously just consider everything like Jason does. We also know how to serial
[02:25:57] ize some special functions. We can certainly add things for dates. We could add more things to it, but there will be certain things that you'll never be able to see
[02:26:06]  like, like promises. And I wish we had more time to get into transient, uh, objects and how do we deal with that. And we're still kind of
[02:26:13]  figuring this out, but there's a whole, you know, separate discussion to be had about like, well, what do you do with things that cannot be serialized?
[02:26:20]  Right. Yeah. And then you have to basically have the factories that know how to recreate the stuff once it's needed and so on, but it's kind of advanced
[02:26:28]  stuff. Yeah. I, I, there will be a time for that. I think, I think that that is the cutting edge, uh, stuff. And the,
[02:26:34]  honestly, we'll, we'll probably have a chat about that too, coming up because this, this is the inevitable place we're heading. It's the, it's
[02:26:42]  like the last problem on the list. Cause you can solve the other problems. Cause you can make the assumption as you're developing that most things are serializable or in
[02:26:49]  these places and you kind of define your zones and you're like, okay, I've rules. But you know, those exceptions as this, and then you get to that
[02:26:55]  point and you solve it. And the truth matters, like we're going through the same thing right now on Marco, um, as quick is going to, is already here
[02:27:03]  and kind of already getting there a little, you know, going to be there first. But we're, we're, we're this summer, we're going to be
[02:27:09]  looking at probably a lot harder on those cases of the things you can't serialize. Cause it definitely, it is, it is challenging. Um, I know Dylan
[02:27:16] 's been working on some really cool ideas of how to serialize some really complicated objects, things like promises and stuff, but it's, there's always going to be the
[02:27:24]  case of the things that you can't. Right. So like it's, it's, it's, uh, you know, like one of the ones that we found
[02:27:30]  that was really tricky is factory functions that return functions. Uh, like, so like when you have dynamic, like a function that returns a dynamic function, but that's
[02:27:39]  hard because you can figure out how to serialize functions and closures. Like you already showed where you can kind of feed the inputs back in after you hoist them and
[02:27:46] , and stuff like that. But how do you serialize a function that returns a function? Uh, it's, it's, it's, it's wild.
[02:27:53]  So yeah, I, I, I, I'd love to have more discussion about that in the future. Um, let's see here, we're getting on two and
[02:27:59]  a half hours, which means I want to cut this pretty short here. This is your very last call on questions. Otherwise we're going to wrap up here, um
[02:28:05] , and call it a night. This has been an awesome, um, chat with Misko all about quick and the future of web dev. I I'm, I'm
[02:28:13]  super, um, stoked after having these kinds of conversations. I just want to go build something right now. I want to figure out what that router looks like. Um,
[02:28:21]  so. Thanks for having me, man. Like I love chatting with you. You get it. I, I, uh, it's just so much fun every time I
[02:28:28]  chat with you. Yeah, no, this, this, this, this is so awesome seeing this stuff kind of come together. Um, and, uh, what's
[02:28:38]  your favorite thing I learned tonight? Oh, uh, that's, that's, that's an interesting question. Cause I was familiar with a lot of this stuff, but
[02:28:47]  there, man, I've got to think up about it. I'm still processing all a lot of things. Um, geez. Yeah. That's a good question.
[02:28:56]  Um, I was really excited to see the, like the on watch and the serialization of the, uh, of the reactive primitives. You know, I'm
[02:29:02]  a, a runtime reactive guy. So to see runtime live in this, in this experience, it was one of those things that I was kind of fearing might be hard
[02:29:11]  to do, or, you know, like might be challenging to have runtime reactivity live in this future world. Um, and I, as you know, I'm
[02:29:18]  the biggest fan of runtime reactivity. So seeing runtime reactivity start from the server. And then the client is like the biggest gift someone could give to me. So
[02:29:26]  I am, I'm super stoked about that. The thing we didn't talk about, and it's not obvious why, how hard it is, but, uh, doing
[02:29:35]  it in a way. So you don't cause, uh, uh, memory leaks so that you can properly do garbage collection. It's hard. And it gave me a
[02:29:43]  lot of sleepless nights, but I thought that was gonna have to throw the whole thing away because like, I can't do it in a way where it won't leak
[02:29:50]  memory. It won't leak memory, but no, it is awesome. And as I said, it's one of them, it's, it's that, that
[02:29:56]  is like, everyone knows. Like I started solid just because of my pure love of that. Like forget about, like, I figured out how the framework would come out of
[02:30:04]  it later. The fine grain, the Dom, all that stuff came later. I just started because I love runtime reactivity. So to see it go into other places,
[02:30:11]  I, I have this kind of thing, the statement that I always say to people. And it, which is like, every time people look at that stuff and they
[02:30:19] 're like, oh, you know, but you can't do this. You can't do concurrent rendering. You can't do this, blah, blah, blah. I
[02:30:22] 'm like, I haven't hit anything with runtime reactivity. I haven't been able to solve yet. And, but there's, there's, there are some hard
[02:30:28]  challenges. And so when I see it enter a new zone, it just reinvigors that, you know, that, that passion and that, like, that
[02:30:40] , like kind of consolidates on that idea that this, what this statement is still true. Cause it's funny. You know, I, I've been in places where
[02:30:47]  I've said that statement and people just giving me that look, I talked to Dan Abramoff a week ago and I made that statement. And he was just like
[02:30:52] , Hmm, interesting as an, he was suspect, but you know, quick has shown that this is possible. And that I was chatting with Dan too. And he says
[02:31:03] , I forget the exact words, but basically he said, like, he admires our, our willingness to go there. He doesn't think it's possible.
[02:31:10]  So yeah, let's, let's, let's, let's, let's prove them wrong. I think I like this kind of, I like the challenge, right
[02:31:18] ? That's, that's, that's the whole thing. You know, we, we, we, we find some hard problems, problems worth solving, very worth solving
[02:31:25] . And then we work towards figuring out how to make them, you know, work the best for us. And I think it's really interesting because there's different ways you
[02:31:34]  can approach it, different mentalities, different mindsets. And that was like my biggest takeaway from that conversation when I, when I was talking to Dan, because on
[02:31:41]  the reactive side, they, they tend to approach things like mathematics. They kind of go high order principle. We know that if we can show that this works, that at
[02:31:50]  some point we'll be able to optimize it. And that we'll just figure it out eventually, which is a very interesting mentality. Cause it was not what I was accustomed
[02:31:59]  to. I'm for me, I'm like, I want to make a prototype that shows that this is super performant. If I, if that isn't going
[02:32:05]  to work, if I can't at least show that this will, you know, the simplest way be beneficial. I'm not going to spend my time on it, but
[02:32:12]  because like, you know, like you need to, you need, you need to like, you need to show that you're actually going to be, have some value about
[02:32:21]  the, what's already there. You know, but to each their own, they, you know, there's different philosophies on it. There's different philosophies
[02:32:26]  on it. And that's what makes it so interesting when you have different people working on these different projects. All right. That was long-winded. This whole thing
[02:32:34]  has been awesome. So, um, we're going to, we're going to sign off now. Thank you everyone for joining us. Um, um, thank you M
[02:32:41] isco for joining us. This has been a great stream. All right. I'm, I'm the one who should be honored for being here. Cause you know, I
[02:32:48]  really appreciate it. Thank you so much, man. You rock. Rock. All right. Bye-bye, everyone.