---
showLink: "https://www.youtube.com/watch?v=CQm52h3Ukng"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look at Remix"
description: ""
publishDate: "2021-12-04"
coverImage: "https://i.ytimg.com/vi/CQm52h3Ukng/sddefault.jpg?v=61aa5dcc"
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

    ### 00:00:00 - Introduction and Overview
      
    A comprehensive description of the content, serving as an overview for readers. It begins by introducing the main themes and concepts that will be explored throughout the chapter. The author outlines several key points, each of which is examined in detail. These points are discussed in terms of their significance and potential impact on various aspects of the subject matter. The text then explores how these core ideas are applied in practical contexts, highlighting their relevance to current issues and challenges. Throughout the chapter, connections are drawn between different concepts, demonstrating their interrelationships and broader implications within the field of study.


## Transcript

[00:00:00]  Hey everyone, welcome to my stream today. I am looking forward to this one a bit. A little bit nervous. It's been actually a while since I've sat
[00:00:12]  down and coded in React for longer than 20 minutes or 30 minutes to whip up a quick demo. But I'm really excited to look at Remix Run. So I
[00:00:25] 'm going to give everyone a couple minutes to join on. This is when people who have slick production and stuff actually have, you know, some music playing in the background and
[00:00:37]  let everyone join on the stream. But instead you get to look at me, sit here nervously and drink my drink. But let's -- if you're joining, you
[00:00:48]  know, come in and say hi in the chat. Let me know you're here. I'm just going to give this a moment. It's been two weeks since
[00:00:58]  I last streamed. It came to my attention actually that the last time that I was on stream, I was demoing a bunch of concurrent stuff where like the whole key
[00:01:10]  to it was how much, how should I put it, like speed and performance smoothness. And it just wasn't coming in over the stream. I kept on saying stuff
[00:01:18]  like, oh, look how smooth it is. And I rewatched the video and everything was jagged and out of sorts, which is really unfortunate because it pretty
[00:01:28]  much defeated the whole point. So if you did catch that stream, know that it was very smooth on my computer. And unfortunately, it just didn't translate over to the
[00:01:39]  stream. You know, that's just how it goes sometimes. All right. Nice. Hi, everyone. Thanks for joining on the stream today. Okay. Well,
[00:02:03]  let's -- enough preamble here. Let's get started. I'm going to talk a little bit bit about this week in JavaScript. I'm going to share
[00:02:12]  my screen here. Yeah. As I said, it's been two weeks. So a lot of stuff's going to happen over that time. for me, it
[00:02:26]  started actually a couple of weeks ago. I dropped an article about a reactive script, the sort of idea of, could we approach a reactive language, essentially, using basically purely
[00:02:43]  the syntax to play plain JavaScript. And I thought that's kind of interesting idea. No matter where you look, when you look at reactivity, the biggest problem is
[00:02:52]  it drops off, essentially. It doesn't leave the file you're in or someone destructures a prop or something. You always have all these situations where you can lose react
[00:03:00] ivity. So what if the language was just built for reactivity in a way that you couldn't lose it? That was sort of the idea here. Honestly, I don
[00:03:06] 't know if it's actually viable. It might be confusing as hell. But after watching how people can have quickly adapted to Svelte, it seems quite possible that
[00:03:15] , you know, you could use similar syntax and people would actually be amenable to it. I think it's weird to change the semantics of the language. But,
[00:03:23]  you know, who knows? We also had our first solid community meeting, which was cool. Other than Discord has a 25 person limit, which we realized about five minutes
[00:03:35]  into the call. There were so many people pouring in that we basically capped the call at 25. I'm sure there would have been, I mean, there probably would
[00:03:42]  have been 40, 50 plus people in that community meeting, but we basically chopped them off. So we do better next time. And then, yeah, I think,
[00:03:53]  I think, also, obviously, Learn with Jason did that session. But I wanted to dig into some stuff that's actually more interesting. A couple things that I thought was
[00:04:03]  actually interesting this past week. Builder.io rebuilt their web page in Quick and using PartyTime. And I think this demo is actually really quite cool. I want
[00:04:18]  to spend a moment to show this off before we get into the guts of our stream today. If you haven't seen this, this is, this is like a full,
[00:04:28]  you know, e-commerce style site here. Let's, let's look at this for a second. Where is it? BuilderEye. Yeah, just their
[00:04:36]  homepage, right? And obviously, like, it is mostly static stuff. There's some links to sign up and a few other things. But can I, can I
[00:04:45]  show you something here? Like, look, there's a hamburger menu. This is fully interactive and everything, right? And let's, let's, let's reload that
[00:04:53]  page again and look at the performance tab. Let me blow this up a little bit so you can see it better. But let's look at the network tab. Let's
[00:05:00]  re, let's refresh that page. And actually, let's just change it to just JavaScript. This page is fully interactive and actually only loads 1.7 kilob
[00:05:17] ytes of JavaScript. I mean, you've seen this with Astro. And to be fair, that preload time is a little bit longer than I would like to be
[00:05:25]  interactive. Like you look for clicking again, it's instant. But this is the danger of waiting everything to clicks. But if you look, this is actually pretty, pretty
[00:05:33]  powerful stuff here. This, this, this, this is built with a quick framework, which is really quite cool. Basically, no JavaScript on the page, and it
[00:05:43]  just loads up. And the really cool part about this is this page has ads, it has stuff like this. This was a discord thing and a whole bunch of other other
[00:05:55]  like little layer ons. And they've managed to reduce the load significantly, thanks to Party Town, Google Analytics, all this stuff is actually there, but it's not
[00:06:04]  slowing down their site. Getting 100, obviously, in Lighthouse is relatively easy to do in like, when you just build a site, but this is everything. This is
[00:06:12] , this has all the analytics, everything present that you'd expect. And they're just not getting hit by that. I think that the work they're doing at Builder
[00:06:19]  is quite amazing in terms of pushing this stuff forward. The other thing that was cool this week was actually, Ben Awad interviewed Dan Abramoff, doing React coding
[00:06:31]  questions and stuff, and some algorithm questions. And it was kind of funny. If you haven't seen it, you should definitely check it out. It's, it's
[00:06:39] , it's, it's, it's, it's, it's pretty, it's pretty cool, I have to admit. I bookmarked it here. But
[00:06:46]  essentially, he, Dan like whizzes through all the easy questions until there's a really hard one at the, at the end. But I think the question,
[00:06:53]  the thing that got a lot of people kind of excited or interested was Ben asked him about Redux. I mean, it's been a few years and people, you
[00:07:00]  know, to ask him about Redux, check this little clip out. It's, it's kind of, it's kind of funny and I understand where he's coming
[00:07:06]  from, but man, I, I, I, I empathize with the difficult position that, uh, Mark Erickson is in, um, promoting and trying to
[00:07:15]  contribute and keep Redux flow when, when you have stuff like this happen. Okay. So if you're starting a new project today, you would only use Redux
[00:07:23]  if you had a piece of data where you could not figure out where to put it anywhere else. Like the Redux is the last place you're putting it, it sounds
[00:07:31]  like. Yeah. And maybe I wouldn't even use it then, but yeah. I mean, obviously that's a little bit sensationalism there, but, um,
[00:07:43]  it was definitely a, a fun video. Um, do check, do check it out. Um, but, um, yeah, this has just been, you know,
[00:07:54]  mostly I've, I've watched a lot of videos this week, essentially. Uh, that's, that's been the thing between Dan's and, uh, all the
[00:08:02]  learn with Jason stuff. There's a re great, uh, introduction to remix with Ryan Florence there. And also, um, uh, misco did a video about
[00:08:13]  the builder homepage, which is also a must watch. But yeah, I mean, that's, that's pretty much it for this week in JavaScript. Let's, let
[00:08:21] 's, uh, let's, let's talk, let's talk remix run for a minute here. Cause I, I think I need to give this a little bit of
[00:08:28]  a, uh, preamble before we actually get into building something mostly that this is kind of fun for me to kind of take a moment and look at remix because
[00:08:38]  generally speaking, I am, uh, sorry. There's a comment here for a minute ago. Um, is, is there, is there any audio issues? Just
[00:08:56]  let me know in the chat if there is, um, it's kind of fun for me to come and look, look at this because essentially I'm not really involved in
[00:09:03]  the react community at all. Um, I have no stake in it. I am not, I did not in, I'm, I don't work on the react core
[00:09:10]  team. I don't, you know, have to watch my words. It's, it's, I said, I mentioned Dan works on react. So when he
[00:09:16]  talks about a third party library, it has impact. And, uh, and, uh, basically, um, you know, I, I get to look at this and
[00:09:28]  as I mentioned, like solid, isn't really, it's just like a mini school thing, like reacts like this. And so it's like this little thing. Maybe
[00:09:34]  I can move my fingers apart a touch now in the last couple of months, but essentially we're, we're just, you know, um, there's, there
[00:09:41] 's no issue here. I actually love the work that's been going on here. And I, I feel like this gives me perspective to have some amount of expertise to look
[00:09:49]  at a framework like remix without having as much bias in terms of being competition or this being related at all to actually anything I do. So this is, this is just pure
[00:09:58]  fun. And I've always liked the work that Ryan and Michael have done, um, uh, right from, you know, early demos around, uh, react around
[00:10:07]  Florence doing, uh, early like, uh, benchmark demo that I, that was really interesting. And then even moving forward to work at, uh, you know, all
[00:10:15]  the work on react router over the years. Um, and every time I, I've watched every single beta preview video on remix that I had. So this is not my
[00:10:23]  first, first look at it. I've actually been trying to keep apprised on it, but I've never installed a project. I never had the license when
[00:10:28]  it's closed or so I didn't influence a couple of people close to me to buy the license and report back to me, so to speak, but I've, I
[00:10:35] 've yet to install the project, um, yet. So, you know, I'm just really stoked from what I've been seeing. And as I said, every time
[00:10:44]  I watch Ryan or, uh, or Michael talk, I feel like a bit of a kindred spirit. They, they somehow mix both the elements of pragmatic kind of gri
[00:10:52] zzled, you know, experienced old developer with, you know, the still being so excited about, about what's going on. You can, you can see that
[00:11:01]  excitement when they talk about remix it's, it's tangible. And, and that's something that, you know, I can identify with a lot. So I I'm
[00:11:08]  super stoked to see what they've been kind of putting together and, you know, see how, um, it's, you know, what it does. Um, the
[00:11:16]  truth of the matter is, I mean, obviously I have a few biases, uh, kind of coming in that I have to address and put out front, even with
[00:11:22]  that kind of open-minded thing, mostly that, um, for me, at least the most interesting part about remix is the nested routing and the way that they're
[00:11:33]  handling, uh, progressive enhancement, the way that, especially with forms, a lot of the techniques that they use have existed for years and years. And even, you could
[00:11:43]  even use them in react. So like on one hand, I look at remix and I'm like, well, I mean, this doesn't actually change the equation.
[00:11:49]  It's still react. You could have always done that. You should have always been using good patterns, but you know, some of the libraries and stuff in react, haven
[00:11:57] 't always made that easy. So like, I think you kind of got to turn off the analytical side of the brain there a bit and be like, how does it feel
[00:12:05] ? And, and that's, that's, that's sort of a bit what I want to get into today. Um, and, uh, as I said, those
[00:12:12]  are, those are two main areas. And, um, the first nested routing is something that I'm well familiar with. I wrote my first nested router back
[00:12:21]  in 2014. Um, and the thing is when you don't have a virtual DOM, which can just key match, um, when you switch page nesting nested routing
[00:12:30]  is essential. So the first nested router that I saw on the client side was from Ember and I used that back in 2012. And I'm, I'm pretty
[00:12:39]  sure the original react router one was very influenced by Ember, Ember router. And that was the same influence a lot of our work here. And as you know
[00:12:47] , solid has a nested router, very, very similar to, um, to react routers six. And the it's, it's no coincidence. Um, mostly
[00:12:55]  that nested routing was essential in a, in a framework, uh, like solid, um, where it's, where it, you know, in a V DOM,
[00:13:03]  you could get away with it until you don't want to. And that was the thing. Um, the, the guys on remix were like, we want to make
[00:13:11]  react sites performant and, you know, you know, like every time they were seeing their projects being used in places that they weren't there, it kind of bummed
[00:13:20]  them out. So like, no, this is the right way to build a website. And then with that, I can, I agree completely. Um, so this
[00:13:26] , this, this is kind of, this is, this is really cool. Um, so I think one more thing before we kind of dig into the code is I just
[00:13:36]  want to talk about the concept of, uh, nested routing routing for a minute, just to make sure everyone's familiar before we dig in and understand that this is
[00:13:43]  actually where a lot of the performance gain is the, the other API stuff is really nice. Um, it looks nice. It has, it's good patterns, like the
[00:13:52]  way accessibility is good in terms of progressive enhancement, but the, the actual thing that is translating directly to performance here is nested routing. And I talked about this a little
[00:14:01]  bit previously on my routing stream, but I think, um, now that I have Excalodraw at my disposal, I think, I think we can explain this a
[00:14:10]  little better for those not familiar with this topic because honestly, every day in the solid discord will ask me about nested routing. And we're not quite at a point
[00:14:18]  now where I can just go, oh, look at react router six, you know, or like some place that has better docs than, than the ones I've managed to
[00:14:24]  put together. Um, because truth of the matter is react router had nested routing through v3, I think. And then they got rid of it in v4.
[00:14:32]  So most people in the react ecosystem, that's like the last three or four years have no idea that this is just the best way to do routing. And, um,
[00:14:39]  um, it, I'm so glad it's back in react router six. Um, it definitely influenced our design. So let's, let's, let's,
[00:14:46]  let's, let's, let's do a quick example that kind of visualize or understand what nested, nested routing is. And actually I'm gonna, I'm
[00:14:52]  gonna use Twitter as an example, because this is a, this is a perfect example of a place where nested routing would be beneficial. And then we're just going to
[00:15:00]  kind of take our Twitter example and explain it a bit. Um, using a Scala draw. As I said, I love teaching along these topics and obviously if you
[00:15:07]  understand nested routing remix, well, you understand solid, we use the same stuff. So let's do that. Okay. So here's Twitter. You most of you
[00:15:14] 've seen this, I'm sure at the side, you have a sidebar navigation, right? And if I go to something like home, I, it's, I
[00:15:23]  swapped out my whole section and the sidebar remained, but here is, here is my main content. Now, when I go to my profile, it's now replaced
[00:15:32]  that main content here. And, and you already see that something like the sidebar doesn't change. Right. But we can go further. What if we have tweets,
[00:15:42]  tweet replies, media, and likes, if I go to tweet replies, well, this panel changes, but we don't want to do anything here really. Right.
[00:15:52]  Cause it would be wasteful. Now, a lot of times classically with react, you're just like YOLO. Like just go for it. Just redraw
[00:16:00]  everything. V Dom's cheap. We'll key it up. We won't affect the change, but like, this wasn't a luxury of non V Dom libraries, which
[00:16:09]  is why nested out it came out. But so remix kind of, uh, brought that in and I'm going to use a Scala draw just so that we can
[00:16:18] , you know, make this, make this real again, I'm going to use the Twitter homepage as kind of our model, but essentially we have our Twitter page,
[00:16:25]  we have our sidebar navigation. Okay. And I'm going to call this layer one. So this is the thing that this is the root. Right. And then we
[00:16:38]  have, um, let's go in blue. This is our main content panel. Right. And in our main content panel, we have our like hero thing. This
[00:16:54]  I'm just doing the user pain and we have another navigation panel. Right. Now, if I was more talented, I would draw my stuff in, but then finally,
[00:17:05]  we're going to add our third area, which is our content page section. There we go. three colors, three distinct zones. And they're actually in each other
[00:17:20] . You see that the black layer actually wraps the blue layer, which wraps the purple layer. This, this, this is a bit basically the thing. And, uh
[00:17:29] , okay. I can do it like a little bit more. Let's, let's, let's add some, you know, buttons here. Let's, uh,
[00:17:35]  let's fill them with a cross hatch or something. Can I do that? Yeah, let's, let's, let's just, yeah, sure. Wait,
[00:17:44]  that's the wrong shortcut key. Just add some buttons on our, on our section here. And similarly, we're going to add some buttons, um, do these
[00:17:59]  ones with our blue and add some more buttons, you know, maybe a nice cross hatching there over here. Okay. So these are these nav buttons. Okay. So
[00:18:12]  this is like our Twitter page, but this could be any page you've, you've, everyone's seen this before, right? You have the user page and you got
[00:18:19]  the user settings and the user profile and whatever, and you just, you kind of just swap around. So here's my completely poor drawing. Now, as I mentioned,
[00:18:28]  the trick to this whole nested routing thing is when you change like layer one, then you have to re-render everything. If you change layer two, then you only
[00:18:38]  re-render this. And if you change layer three, you only re-render this. That's all nesting routing is. This is different. And, uh,
[00:18:45]  like if I, if I, sometimes, uh, let's just, uh, let's add, can I, can I just add some text here? Yeah. Let
[00:18:53] 's add some texture. Like let's pretend this, this was URLs. I didn't look at Twitter, but like, let's say we're looking at user,
[00:19:01]  um, feeds, right. Um, and give them an idea of feeds. This, this good. And then, you know, when we change to the, the other
[00:19:15]  thing, it's going to be, uh, well, let's look here. What do we have? Replies. Okay. Sure. Let's, let's
[00:19:22]  use replies. Uh, Replies, right. As long as I'm under user ID, I'm going to be, I'm going to be drawn this blue section.
[00:19:37]  And then the red section changes when I switch between feeds and replies. Right. But there might be another section here that's like feeds altogether. Right. And if there
[00:19:48]  was a user listing page, maybe there's users, but if you notice some, if you've ever seen apps where they have listing and then you click and go to the
[00:19:58]  details, that's not rest nested routing. See that that's nested pass. Like these might share the same prefix. Like they're both slash users. But,
[00:20:08]  um, what makes it nested routing is that you actually draw the components inside each other. And the reason this is important though, is because this informs you a lot
[00:20:19]  about your page. And the best way to explain this is essentially you, if you set up your page layout this way and tie your data loading to the specific sections of the
[00:20:36] , of, of, of, of, of, of your page at any point, when you navigate, you know, that say, say like, if you go
[00:20:47]  to user ID feeds, you know, that you need to load Twitter, you know, you need to load the user information and you know, you need to load the feeds
[00:20:56]  simply from the URL, like you've encoded that information. And sure, you can encode that without using nested routing. But because you've defined these separate
[00:21:05]  entry points in your routes and potentially separate data loading mechanisms with your routes, you can just fetch all the data up front without having actually gone there yet. Like if,
[00:21:19]  if you didn't have the nested routing, you'd have to wait for the parent to render the child and render the child. And we've got code splitting and lazy
[00:21:25]  loading. And you end up with this waterfall thing where you go, okay, I hit the, I, I load Twitter. And then I have to load the user
[00:21:32]  panel and then I go, okay, well load the code for the user panel and then, okay, now I'm going to fetch some data for that user panel and load
[00:21:42]  the code for the, for the feeds. And then I'm going to, oh, now I got the COVID feeds. Now I got to fetch the feeds. You
[00:21:50]  end up with this cascading effect. And what's really cool about nested routing, where you can just set up the data loading. As part of the route definition
[00:21:59]  is you can just go, oh, you're going there. I know exactly what to load right off the, right off, right off the start. You, you navigate
[00:22:06]  there and you load it all in parallel. You load the components and you load the data all in parallel. Um, obviously there's other ways to stop the waterfall.
[00:22:15]  A lot of things like next JS have like that link hover, uh, preloading and whatnot. But what, what I'm trying to get at here is that that
[00:22:23] 's all fancy, but that, that, that also has like interesting things. Like, do you, do you have to worry about the cash on the preload and all
[00:22:31]  that kind of stuff? Like this pure, simple mechanism of using nested routing gives you all the information you need for your page upfront. And, um, with,
[00:22:42]  you know, you can, you can do lots of stuff with it. You can, you can know that if, if, if you do keep stuff, you know,
[00:22:48]  in a cash or a global store, if you are editing stuff on this page, well, you know exactly what data you need to refetch simply because of the route you
[00:22:57] 're on. And as I said, this, this is the power nested routing. This, this approach has existed for eight, nine years in JavaScript. But,
[00:23:06]  um, you know, a lot of stuff in react is like, eh, good enough. Right. And thankfully the, the guys are in, for, you know,
[00:23:17]  responsible for remix are like, no, not good enough. Let's, let's do something about this. Right. And as I said, there's a lot of
[00:23:24]  same motivation, right. We have the same system and solid it's it's, it's, it is the way to do things. I'm, I'm, I
[00:23:30] 'm super stoked to see react, um, get this kind of stuff because when it comes to react, that means it's on people's radar. on people's radar
[00:23:38] , you can sit here on a soapbox and spill it for ages and no one's going to listen to you if, if, because you know, they're on react
[00:23:45]  and it just doesn't apply to them, but. But you know, good performance and good practices in the web are universal. So, um, that's the,
[00:23:53]  that's part of the reason why I'm so excited about remix. So this is a little, little bit of an intro for nested routing for people. Okay. So
[00:24:04]  yeah, comment here. I mean, before still hadn't messed around, it just wasn't not at the top level. Okay. Yeah. Um, yeah, yeah
[00:24:11] . I, I mean, how do I, how do I, did V yeah, they didn't have the way to define it all in one place anymore. They used
[00:24:20]  to originally. Um, but then yeah, you can nest stuff, but then the nesting, when I was talking about nesting routing, like, and you can still
[00:24:27]  do this in V six, like you can, you can make a component and put a router in it. And then in that component, make router and put, and
[00:24:33]  put make router at the whole key for nested nested routing. At least what I'm talking about is being able to define it in one place so that you can have
[00:24:41]  this kind of knowledge as it it's an older pattern. And, but, uh, react kind of moved away from it. So yes, you could nest routes to be
[00:24:51]  fair. Um, and I I'm, I'm, I'm overplaying, I guess a little bit, the, uh, the, the, um, like
[00:25:01]  the key thing of it, but they're like people didn't nest routes and did do this. It just, you, the, the power of doing upfront is really what
[00:25:09] , what makes re remix, uh, special and this kind of route decoration to be fair. Um, outside the react community, this sort of nested routing, like
[00:25:18]  you've seen remix is de facto, the common thing. Like it's funny next doesn't do the nesting routing like this, I believe, but nox does.
[00:25:28]  Um, uh, felt historically did not, but I believe they have nested routing and spell kit. Um, uh, Ember is nested routing. It was
[00:25:39]  just for some reason react really liked the fact that like how dynamic you can make, uh, the function DSL to the components. So like it was a pattern and then
[00:25:49]  people moved away from it because they like, they're like, oh, we can distribute stuff. But here's the thing routing is the backbone of your application. And while
[00:25:57] , you know, it's great to have these patterns where you can distribute stuff. And I'm all about cold aggressive co-location. I mean, it just inherently
[00:26:04]  leads to waterfalls. And if done well, you can actually benefit here. Like this, the benefits of what I just explained is obviously easy to see, um,
[00:26:17]  for something like server rendering, let's say, or, or, or, you know, client side navigation. You don't want to like, but like where you can
[00:26:25]  just start this, uh, the fetch ahead of time for all the pages and then just go render it. Because if, if, if, if, if, if
[00:26:32]  you've seen classically something like next JS had something called, they called like pre-pass where essentially you would render a page to figure out. Like what requests needed
[00:26:45]  and, and, and, and then basically use that data to, to then render it for real again. And, uh, what remixed has done here is hoist
[00:26:55]  that out upfront. It just, it, it, it, it, it's, it's, it's more efficient to just do the data fetch and then do the
[00:27:01]  rendering. But honestly, that's not the end of the story that's remixed today. Um, but what I've been doing with solid and what remixes,
[00:27:10]  I have no doubt is going to go to very soon and react supports it is you can start the fetch early and then feed it into suspense components. And as it's
[00:27:22]  rendering on the server and in, so basically have the ability to start all the fetching as soon as you get the request from the server, start streaming the response out and
[00:27:35]  then fill it in as it comes in essentially. So have like non-blocking server side rendering with the fetching happening up front as soon as possible. That's
[00:27:43] , that's the dream, right? I said, that's what we do with solid remix. We'll be doing it soon. I'm positive. Um, so,
[00:27:49]  um, yeah, the nested routing. Yes. It takes away a bit, but you could still nest nested routers. If that makes any sense, like you
[00:28:00]  can, you can still do the react router five trick and put them in your components. So you can still have teams operating independently in their own subsection of the routes
[00:28:08]  and doing all that. It's just, you don't have the same ability to link it all up, up at front that you have when you do it all top level
[00:28:15] . But, you know, at a certain point in a certain scale, like you don't get to, you don't get, you just don't get that benefit of
[00:28:25]  being able to do everything up front. It just, this pattern works really well in the small to medium case and still doesn't break apart when you go big. That
[00:28:33]  that's essentially all I'm saying. Okay. So sweet. Uh, so that's, that's my little spiel on nested routing. I don't know if
[00:28:41]  anyone has any questions. I, I feel like they've, they've done a decent job of explaining it, but you never know. Um, especially if I'm going
[00:28:51]  to cover some of this stuff today. So let's, let's, let's, uh, let's, let's, let's, let's, let's
[00:29:00]  get started remix. Big thing here that mentioned, I've never installed the remix project yet. So don't expect huge revelations coming from my side in terms of, um
[00:29:09] , advanced, uh, features and stuff and all that. I, I am literally doing this mostly so that I can get a feel for, for, for what,
[00:29:20]  for what they have going in. Honestly, my, my plan here is going to, is mostly around, um, running one of these tutorial docs, I think.
[00:29:29]  And we're going to kind of get a feel for like some of the features. I think they should, they should show off, you know, a couple of the key
[00:29:36]  features. And then I was thinking, let's just take that demo that I do all the time, that hacker news demo. Let's just, I haven't seen a
[00:29:42]  hacker news demo in remix. Let's just make the front page, right? I recently saw one with next JS and server components. I have the solid streaming one. Let
[00:29:50] 's just make a remix one and see what we can do with it. Um, so let's, yeah, let's, let's, let's do this getting started
[00:29:56]  thing and see what that's all about. All right. Make sure to read the read me. Yes. You watch the learn with Jason. Uh, yeah. If
[00:30:08]  you don't read the read me, um, you know, bad stuff can happen. I, yeah, let me see here. And actually I didn't showcase it off
[00:30:19] . If you haven't seen it, the remix website is pretty awesome. Um, they've done this cool scrolling effect where things cut. Yeah. Uh, you know
[00:30:28] , usually I'm not a huge fan of this, but yeah. I mean, they're, they're show they're showing stuff. I'm zoomed way in.
[00:30:34]  So maybe it doesn't look as good, but like having these active demos while you scroll. Right. I mean, basically a lot of the stuff that remix is doing
[00:30:49] , um, you know, in terms of the loading and all that stuff in their transition stuff is actually a lot of at the similar purposes of, uh, suspense and transitions
[00:30:58] , uh, which you're familiar with if you solid and are coming in react 18 remix kind of just went around that and just made it themselves. Yeah. I,
[00:31:08]  I am interested to see if they actually change their approach to leverage these react 18 features. Once they kind of rock, how to put them in. I actually think that remix
[00:31:15]  is core approach and the react 18, uh, features are actually really suitable pairing. Um, they're kind of not completely on board there yet, but I mean,
[00:31:25]  to me, it's actually very obvious how they could benefit from each other. And as I said, that's why. In a sense, uh, solid start our starter
[00:31:33]  is essentially that it's that mixture of those things. I think, I think that's the way to go. So, um, I'm really excited to see,
[00:31:41]  um, as remix starts embracing more of those react mechanisms, but yeah. So let's get started. MPX create remix latest. Um, they have these two starters and
[00:31:52]  I'm probably should pick the more advanced one. I'm going to do the quick start one though, because I feel like this is might be just my easiest way to go
[00:32:00] . So let's just, let's just, let's just get going here. Um, what is it? MPX create remix at latest. Yeah. And actually
[00:32:14] , did it say anything? Do I need to go into the folder? Okay. Well, let's just follow the CLI and hope I don't just put everything everywhere
[00:32:21] . Um, do I want to proceed? Yes. Nice touch. Yeah, sure. Yeah. Let's call it my remix app. Um, yeah, why not
[00:32:36] ? And I want to read mix app server. Um, from what I read. Oh, and you can actually choose where you want to deploy to. That's interesting.
[00:32:47]  Okay. I mean, remix app server. I'm pretty sure in all the tutorials, they say important. You pick remix app server. Yeah. It says that in every
[00:32:57]  single tutorial. TypeScript or JavaScript. What does the tutorial use? I can use TypeScript. I don't love using TypeScript, but I can use it.
[00:33:09]  The tutorial uses TypeScript. Guess what? We're going to use TypeScript. All right. Let's do this. All right. Give it a moment. Probably
[00:33:20]  won't be that long. Pretty much everything in the world is faster than create react app these days. Yeah. See, that's nothing. Okay. And we're
[00:33:35]  going to actually open our, the app, our workspace. Um, development. Examples. My remix app. Let's see what we got here. Okay. Yes.
[00:33:46]  Yeah. Yeah. Yeah. I'm going to trust the authors. All right. So, okay. He has config, remix config, remix MDD. Okay. Yeah
[00:33:53] . Pretty standard. And then we got a public folder, probably static assets. No modules already installed. And then we have our app. So this is like the source
[00:33:58]  folder. Okay. Cool. So. Hmm. Root TSX. Import a bunch of components from remix. Links functions, some global styles. Okay. Cool. So
[00:34:11] . Hmm. Root TSX. Import a bunch of components from remix. Links functions, some global styles. Okay. Cool. So. Hmm. Root TSX
[00:34:22] . Import a bunch of components from remix. Links functions, some global styles. They have an app entry point. That has a document layout outlet. Okay. And then
[00:34:38]  they have an error boundary, which has a document with a specific layout in it. And then not sure the difference between error boundary and catch boundary, but they have great links
[00:34:52]  to the documentation. This, this is really smart. And then the document itself. Hydrated from the head. It's a cool trick. This is the first time
[00:35:06]  I actually saw this was with remix. I ended up copying it with solid, but this, this is really nice because you basically get a bunch of, you can just like
[00:35:16]  insert the stuff where you want. And like, if you want to turn off JavaScript. And like, if you want to turn off JavaScript, just remove the scripts.
[00:35:20]  I always, I always kind of joke to people. Cause I, you know, MPA frameworks like Marco or Astro, they start with zero JavaScript and they progressively add
[00:35:31]  just the JavaScript you need when you need it. And, you know, and quick, which I already demo at the beginning. Um, that's really, really powerful
[00:35:38] . And it's completely game changing in terms of the way you view your app. Whereas like, it's, you know, a single page app kind of style thing.
[00:35:45]  Like what solid starts felt kit remix does doesn't it's much more binary. So, um, I often kind of use this joke that like, oh, if you
[00:35:54]  don't want JavaScript, just remove the script tags. I, I actually love that remix just makes it like that easy where you can just remove the script tags. You know
[00:36:05] , um, I don't know. Scroll restoration is new and library load. Both of these I did not see at the time of the beta demo. I've watched
[00:36:14]  a lot of videos on remix and I, I'm, I haven't seen these. I I'd be obviously interested to know what scroll restoration does. Um, so maybe
[00:36:21]  we'll look at that. I'm pretty sure I understand what library load does. Um, and then the layout component. Yeah. It's interesting to set the default.
[00:36:29]  This is, it makes it less noisy. So I've got to give them some props like this to be, to just kind of split up. Like they could have stuck
[00:36:36]  the whole, like the, the doc, like these aren't exports. These are just a choice to make this more manageable for you. Um, you know, the
[00:36:45]  cool thing about this is you might never really touch much in root TSX. Um, maybe just the layout. I guess that's not true. You touch the layout,
[00:36:53]  but I guess that's why the decision there, they split this off. So you're like, okay, I'm going to leave the document stuff. It's pretty standard
[00:36:59] . And then I'm gonna do the layout, you know, and they just keep it in the file. Because like truth matters, once you configure this, it's a
[00:37:05]  little sudden forget. I imagine you kind of just move on to authoring your app. But I think this is, this is kind of cool. SVG. And
[00:37:13]  this, this, this, this is a nice little highlight here. Um, yeah, document layout. And then, yeah, sorry, actually this is the real one
[00:37:24] . And then outlet and outlet. What is outlet outlet is the nested routing. Um, I, I was, I was showing all the stuff with the nested routing
[00:37:32] , but the, the key to nested routing is you need to tell the component where to drop the stuff. Right? Like, uh, you, you, if
[00:37:41]  you define all the routes up front or you, you need, you need a place to, and you notice that there's no routes here. That's because they're using
[00:37:47] , I'm, I'm positive they're using file-based routing. So this, you just make the decision. You're just like, where do, where do I
[00:37:53]  draw my content? And that's it. Remix takes care of the rest for you. So this is, this is, this is definitely pretty cool. Um, entry
[00:38:01]  server, um, and entry client is how they give you access to the entries. Cool. Pretty straightforward. It's just the, the kind of, how should I
[00:38:13]  put it? The boilerplate. I don't know if I would ever, I mean, maybe some server stuff you might want to change. I don't know if you
[00:38:21] 'd ever really touch much in here. I mean, a little nice touch here is that they, they're just giving you the request and response objects here. And this isn
[00:38:30] 't, this isn't like express or anything specific. Um, if you've done any work with like Cloudflare workers or like anything like that, um, it
[00:38:38] 's getting super common in those environments to just use like the universal, like web request and response objects. And by, by doing this here, it's really nice abstraction
[00:38:47] . Cause you know, you can just, uh, you still have strip, but you still have control over what you're sending. Like if it's not completely abstracted
[00:38:55]  away from you, but, um, it's, it's not, you can, you can write it a certain way. And then like, not really worry about
[00:39:02]  whether like it's a node backend or, or whatnot. So this, this is a nice little mix. So they said, in a sense, these two files for most
[00:39:09]  projects could just like get thrown off a cliff and you don't even never even need to look at them. But the fact that they're here, uh, gives a certain
[00:39:15]  level of flexibility. I think that's cool. Uh, I wonder if slotted outlets could be interesting for some experiences. Do you mean like named outlets almost like not
[00:39:31]  just the one outlet, like parallelized routing. Um, just going to give Dylan a chance to, to clarify if that's the case. Uh, Ember had
[00:39:48] , had some stuff like that where you could do like double nested routing and stuff. I think it's interesting. I, I hadn't really come to, uh,
[00:40:02]  to, I haven't hit that scenario myself, but actually. Um, today in the solid discord, uh, Joe Pia was actually talking about exactly this and using
[00:40:11] , uh, schemes in the URL to like have multiple apps controlling the path, which I mean, I thought it looked pretty crazy, but I mean, technically it could work
[00:40:20] . So, yeah. And I'm, we, we actually did a little experiment to see if we could do that with a solid app router and we could, which,
[00:40:29]  you know, it wasn't named outlets though. We, we, we did nested routes essentially, or, uh, which is like the cross route definition, cross
[00:40:39] , um, outlet component. And given that that works, I wouldn't be surprised if react router six could do the same thing because it's the same architecture more or less
[00:40:49] . Yeah. I don't know. It's an interesting question and definitely one get you get the brain thinking a bit. Anyways, uh, let's, let's
[00:40:57]  keep on going here styles, some stuff and routes. Yeah. Index, which is probably just slash. Like, you know what? Let's run this app to see what
[00:41:07]  it looks like. Cause I feel like we'll have more to say or look at when we actually, uh, look at what, what this app's doing. So
[00:41:15] , or actually, no, sorry. Read the read me. I already forgot. NPM run dev. There we go. We're in the right place. Right.
[00:41:23]  Local 3000. Nice. And let me see if I can get us into, it's going to need to. Oh, I like this. They have automatic detection for
[00:41:44]  dark mode. You can tell I'm always in dark mode. Um, but I've seen this demo and I've saw it white before and that this actually, this
[00:41:54] , this actually makes sense. Okay. So we have, uh, um, oh, great demos in this app. Nice. Do we have an act? Oh, beautiful
[00:42:03] . Okay. What's more useful when it's broken? An egg? I don't know. Okay. Okay. Okay. Okay. We, we got to look
[00:42:17]  at that and okay, cool. This, this, this still has enough, uh, stuff in it, which is, which is actually really, really good because I'm
[00:42:27]  not going to lie. Um, I have a tendency, a lot of demos, you know, just to have like a counter on it or a spinning, uh, spinning
[00:42:32]  logo or some, some kind of garbage like that. This looks like it has some functional stuff in it, which I guess it makes sense for meta framework stuff. You have
[00:42:40]  the router, you have all the pieces already there for you. So like, why not? Right. Okay. Um, let's, let's, let's look
[00:42:46]  at what they have. I know their demos have some more stuff in it. Um, yeah, you can see the post request down here. Nice. Okay. Um,
[00:42:55]  let's, let's, let's, let's look at, let's look at the code here. So we have a demos slash about slash parameters. Okay. And
[00:43:05]  then you already see the nested routing in at work here. If you have a folder and a file that are the same name, this is how you tell the,
[00:43:12]  the nested router that, that, that it should do that. Because you can have. You know, a folder like about here on about is this one actions.
[00:43:23]  Yeah. Yeah. Yeah. Okay. Okay. These are actually mostly nested. That's interesting. You can, you can have a folder and then have a bunch of
[00:43:30]  files in it. And like, that's, that's not nesting it. The trick to get it nesting is you actually need to have a parent component that matches
[00:43:34]  it. And if you look in this about component, what you're going to see is you can see an outlet. And that outlet is where it tells the parent where
[00:43:42]  to insert slash, which the default here at index or woe. So this, this is essentially the trick to nested routing. And let's go back to our demo
[00:43:52]  and see if we can find where that is. Um, nested roads. Okay. Okay. They're using the CSS only import. It's only including this route
[00:44:17]  and his children. Okay. Okay. Let's, let's, let's, let's, let's look here a second. So what, what do we have going
[00:44:25]  on and about? Okay. Okay. So here's the road and then the, it goes all the way down to read all about nested. And then there's
[00:44:34]  an outlet and then in the outlet. Okay. Okay. Okay. Yeah. So they're just, they're just swapping out this section without re-rendering the
[00:44:54]  rest of the page. So, um, not anything too fancy, but you can kind of see that. Look at the URL slash about slash about. Whoa. And
[00:45:07]  only this part of the page is changing. And obviously like a beat on diff can do this anyways, as I mentioned before, but just know that essentially it's only re
[00:45:16] -rendering these components. These aren't being touched that you know where you are. Okay. Interesting. Okay. Cool. So nesting route, nested routing
[00:45:25] , isn't, we kind of already have gone over that a significant amount. So let's look at something else. The links at the top of the parent page for
[00:45:39]  the CSS overrides. Let's, let's look at that. Okay. So. Okay. No, this is just a. Okay. About TSX.
[00:45:57]  What did we do here? Styles. Meta. They set the title this way. So this is how they're handing meta. It's neat. You know,
[00:46:05]  so a bunch of uses of, of, uh, export, uh, named things as a way to, um, essentially, um, get your configuration in your component.
[00:46:18]  At some point I'm going to, I would love to like dissect the output bundle and see how they're code splitting this. But if they're minifying and stuff,
[00:46:27]  it might be hard to do this. One of the, I'm sure they're using virtual modules of some time. One of the tricky things always with this is.
[00:46:32]  Parts of a page should belong in the main bundle and parts belong in the nested, but on the code splitting. So it takes a little bit of work to actually
[00:46:40]  make sure that it actually goes that way. Because when you, the problem is when you, uh, lazy import a file, you don't get the code split anymore.
[00:46:47]  You bring the whole thing in, right? Even if you're just trying to get the default export and you kind of, I mean, this is nothing, but you don
[00:46:53] 't want to import this, um, in your, when you do that, you want this to be part of maybe the main bundle or what the thing that can,
[00:47:02]  not this one maybe, but like the thing that can be parallelized, parallel leaf fetched, like we talked about earlier. And you want the component to be lazy loaded
[00:47:10] , but not bring in a bunch of extra JavaScript you don't need. Um, but yeah. So let's see here. Yeah. Rel style sheet. So this,
[00:47:17]  this is the, this, this is a trick right here. They're, they're adding the link to the head. Um, essentially. Uh, when you navigate
[00:47:26]  to this page and then when you navigate away, it goes. So this is, this is, this is basically like their react helmet or whatever approach using these same things.
[00:47:35]  This is, this is pretty nice and pretty slick. Um, especially cause it gives you this kind of page focus thing. Like sure you can have components and do all
[00:47:41]  that kind of stuff. I'm sure. But this, like the power here is in the pages. Okay. Um, yeah, definitely cool. Okay. Now I
[00:47:52]  want what's correct. You got it right. Yeah. Params. I didn't see that one. We'll, we'll, we'll, we'll see what
[00:48:04]  that one is. The one that I want, actually, maybe we'll do params first. What's this? Okay. Uh, this is more routing fun.
[00:48:16]  Um, so I hope you can, I, I, I can blow this up a little bit, but I don't think the URL bar gets to blow up. Um
[00:48:21] , so let's see what we can do here. Demos params. So param one. Okay. Yeah. So you're seeing, um, yeah. So here
[00:48:35] 's the thing to understand. See, cause the params page is like the parent page, this whole section is getting replaced. So they're under the same thing.
[00:48:46]  This will be a 404, 401. This one will throw an error and you caught the error. Okay, cool. So what does that look like? Because params
[00:48:58]  essentially, again, the links and everything, this bar is part of the parent layout. And then in here we have, okay, there we go. We have a
[00:49:09]  dynamic section and we have index page. So the index page is the one where they explain everything that we saw. And then they have this dynamic section. So, um
[00:49:19] , they, they're not using the same syntax as next or, or nox. They're using, it looks like dollar sign for dynamic section. Um, so dollar
[00:49:28]  sign ID probably is the dynamic section on your thing. So for people to understand what this means is this route is, um, demos slash about slash params. Sorry
[00:49:40] , not slash about. So it's demo slash params slash what wildcard ID is, right? So everything we do here, the one, the two gets passed
[00:49:51]  in over the params here. And then based on the ID, they're simulating a bunch of stuff in this loader function. We haven't talked about the load
[00:50:02] er functions, but essentially at the top of their files, they they have, they, they have, um, essentially, um, another export they can use, which
[00:50:18]  is loader. I got to get used to these export lets. Um, I, I, I realize that this just doesn't matter, but it, it's funny
[00:50:26] . I develop in reactive languages, uh, and in re and with reactive stuff, like signals and things, um, you never actually reassign it. You always like
[00:50:35] , uh, you, you always set it. So I almost use const religiously, um, because everything is a const. Um, like literally everything is a constant except
[00:50:47]  for refs. There's like no lets. So this is less characters. So I'll give them that. It's just, it's, it's, for some
[00:50:54]  reason, I don't know why I found that jarring. Um, but let's, it's, it's funny. Uh, all right. So this record
[00:51:07]  does not exist. Yeah. Okay. So where am I going here? Okay. And then in here, use loader data. And this hook will pull the data from
[00:51:17]  the loader, whatever you return. You could this, this, I believe this runs on the, on the server. And what they do is they use, um
[00:51:25] , uh, basically the wire. So when you call this on the server side, it just runs the function. But then when you're on the client, it actually ali
[00:51:33] ases it. And you can see it right here, all the stuff we're doing. It aliases it to basically, uh, like an API call. Um,
[00:51:39]  and that way you just write this runs on the server. Then essentially. Um, ta-da, you get the data isomorphically and you don't have to really
[00:51:52]  worry about it. So you can write SQL queries or whatever the hell you want in the loader. And then ta-da, you have in your component and it
[00:51:58]  runs on both client and server as needed. Okay. So, um, yeah, I mean, I guess that's the point of this demo. I mean, they have
[00:52:06]  a bunch of, they have this catch boundary, which is, I guess, their way of defining error boundaries. So this is interesting. So, oh no, this is
[00:52:16]  error boundary. I couldn't understand the difference here between fetch. I guess the catch boundaries are for things that aren't actually errors. Um, things that aren't actually
[00:52:28]  errors, but, but like, if you've ever used like a request library, I mean, this being a big deal in super agent, um, back in the day
[00:52:36] , like classically, the request doesn't fail. If you get a bad response, it just like, it's also requesting the fail. It has an error. You
[00:52:43]  can get, you can get like a bad error status or something, but request doesn't fail. It's only an error. If it, if it actually fails making the
[00:52:52]  request. And at some point they decided to switch that suddenly. So any like, like non 200 or 300 response would cause like the callback or the promise to reject
[00:53:04]  or whatever. And it just caused havoc everywhere. Um, and, and it, it was, it was just kind of, uh, it was, it was kind
[00:53:14]  of, it was kind of funny and chaotic. Um, so yeah, I, I, I think, I think it's, uh, obviously probably need to read more
[00:53:23]  about this, but I think that's why there's a separation because these things are gracefully able to be handled. And these things are like, he's something went
[00:53:34]  wrong. Right. This is interesting. This whole idea of like all those, the, the exports defining a structure. I know there's a few other libraries that do this
[00:53:42] . I think maybe is it Redwood that does it. I, the first time I actually saw this kind of structure was, uh, something, uh, uh,
[00:53:50]  Sean's swicks or whatever it was proposing. He was kind of looking at how you could like break things apart into almost like single file components. What I like about
[00:54:01]  this is it doesn't it's it's the pages are really the only place that are naturally like this in react. So you can make use of it here, but you
[00:54:10] 're not, you're not like the, yeah, I, I think, I think that makes sense in the sense that the default exports the component and then all these other
[00:54:17]  things, anything else you don't have to actually export. So it works fine. Yeah. This is, this is an interesting one. Okay, so now the last
[00:54:25]  one that I want to look at here is actions. Um, just to get a feel for let's, let's see here. Actions are about forms and I,
[00:54:37]  I don't know if, I don't know if we, how far deep we want to go into it, but essentially. We, we already saw the action earlier when
[00:54:48] , when I went, when I went to the actions page and. And it, and it, it asked me the question. Let's see what happens if I get
[00:54:57]  it wrong. Um, let's put something random. Answer. Sorry, random is not right. And then when I get it right. Got it right. Okay. So
[00:55:09]  redirect. So let's, let's, let's, let's use that information and see, and kind of look at what's happening here. Um. Right.
[00:55:22]  So. Action gets the form requested. And this is the actual form. Like this is the actual request. So they're actually getting like the standard. Dom form data off
[00:55:32]  the request. And form get the answer checks the answer. Okay. So this all runs on the server. And then if you get it right, they redirect you.
[00:55:43]  Otherwise they return a Jason response. Okay. Now that's, that's cool. So. It controls. It controls. You don't always have to do like,
[00:55:52]  you can redirect or return Jason. Um, I wonder how it handles it. If the JavaScript's off, but I guess it doesn't because it knows. Oh yeah.
[00:56:07]  That's clever. Right. If JavaScript's off and you click on the, you, the whole reason forms are interesting here is because if you have no JavaScript on your
[00:56:17]  page, the only way you get to update things like is you click on anchor tags to navigate to a new place. That's like your get, or you do forms
[00:56:27]  and you post, and then it goes to the server and returns with some data and then it comes back. So if you want a page to work with no JavaScript, you
[00:56:35]  have to wrap all your interactivity, um, in a form essentially. So using this model here is, is what, is what they've done here. But this is
[00:56:43] , this a little bit, this a little bit fancier than that. Right. Because essentially with JavaScript, you can handle the stuff, you know, in the browser,
[00:56:53]  you know, you, you, you, there's the redirect here, but maybe it'd be nice to dig into that as well, but you, you can handle
[00:57:00]  Jason coming back. But if this is on the server and it's like a full page post, um, like they'll know that. And then they, they, they
[00:57:09] , they don't have to respond with the JavaScript. They can just render it on the server with the updated data. So, um, I, I, I think that
[00:57:22] 's pretty cool. Yeah. Yeah. Let's turn off JavaScript and test that. It's a great idea, Dylan. That's what I'm doing here. I
[00:57:30] 'm just saving you time from trying this stuff yourself. Um, let's do that. So it should be in the, sorry, the top level layout component here.
[00:57:46]  Not app. It should be in the document document document. Not document. No, it's, it's in document. It's in actual. It's God documents
[00:57:54] . The worst thing I can search for. It's literally in every single. Okay. There we go. That should do it. I mean, no, it's
[00:58:03] , I want to do random here. All right. Yeah. Okay. I had to refresh the page cause I have to make sure it's not there. Let's
[00:58:10]  actually open something and actually see this happening. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay
[00:58:23] . Okay. Okay. I had to refresh the page cause I have to make sure it's not there. Let's actually open something and actually see this happening. right
[00:58:40] . Okay. I wonder what that code is. It's fine. It's pretty fire this, but yeah, I mean, essentially what you can see here is what's
[00:59:06]  happening is when when I, when I'm clicking this button, clear everything, it's actually doing a full page reload and re-rendering this. Right. Whereas
[00:59:21]  when you have the scripts enabled, it actually reloaded here. So when I do have my error, instead of re-rendering a page, this is just going
[00:59:37]  to be the payload, the JSON, it's handled smoothly. Yeah. This, this, this little thing is very nice. I mean, it's interesting because everything
[00:59:45]  should be formed from a progressive enhancement standpoint, but I wonder what happens. Like I, I, I work on a lot of apps. This is not the world that I
[00:59:53] , I work, I work in traditionally. Um, and I'm trying to picture like wrapping every button in an individual form. This, this setup is really set up
[01:00:01]  for the page to have a single form and view the post back page. I mean, this takes me back to when I worked on .NET a lot. Yeah.
[01:00:14]  Yeah. Yeah. Definitely. But I like the options here. This is one of the things that I wasn't sure. I was like, well, is everything just
[01:00:22]  going to be a redirect or something, but you, you get the ability to play it both ways, which is really cool. How are they updating text without a redirect?
[01:00:34]  Uh, well, they, they, they reload the whole page. Um, like when, when you have JavaScript off, you're actually doing a full, uh,
[01:00:47]  I think they're, you're doing like a full page reload. Like you're, you're actually posting and handing the reins over to the server and then they re render
[01:00:58]  the whole page and send it back to you. Um, so yeah. Uh, where was I? Okay. So yeah, I mean this, this is, this is
[01:01:10] , this is, this is. This is nice. And this is just coming from a, from my framework perspective, cause ever people who are in the solid community know
[01:01:16]  that I've been, I've been playing with different actions. I've been playing with RPCs and like thinking of ways that the, the premise here from, from
[01:01:25]  remix standpoint, looking at this is that there is only one loader and there's only one action. one action. This is sort of in, what's been cripp
[01:01:34] ling me to make these kind of, kind of make these kind of, uh, these decisions. Right. Right. Because this is super, this, this is super
[01:01:45] , um, powerful. Right. Um, but like, is it limiting? Like, do I want to be able to post multiple different things? Do I want to
[01:01:55]  load from multiple different, uh, granular endpoints or granular data sources, um, that can all stream in independently and all this stuff that, that that's, that's
[01:02:10]  something that cripples me. I, the thing is, this is so nice from the like 95% case thing that you just go, here's my loader,
[01:02:19]  here's my actions. And, you know, like, yeah, that, that keeps things really simple. Yeah, no, yeah, you do have a point.
[01:02:42]  What must be happening is they must be, they, they have to, they, you have this hook with use action data. Right. And they must somehow be like store
[01:02:55] , like know that it's a post back. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Like, do we need to reverse use action data and see
[01:03:07] , and see, and see what, what it's doing? Let's see. What, what, what, what have we gotten here? Thanks. QRS. Whatever
[01:03:16] . Where am I? Remix. Load. Uh, let's see if we can backtrack. Use. Oh. Yeah. Yeah. Uh, let's see
[01:03:27]  if we can backtrack. Use. Oh, okay. So this has probably got some kind of export. Yeah. Okay. So that's not going to help me.
[01:03:39]  Server. No. Actually, maybe I should just look at the TypeScript to know what. Okay. So now that's server specific stuff. Client server platform.
[01:04:03]  Okay. Cause this is just a, okay. So everything's in the client here, even if it's server too. So use, so, and this is found
[01:04:21]  in remix run slash react. This is interesting. Cause do you know what this suggests? I mean, they've been saying it, but I mean, it's tied
[01:04:32]  to react, but they did author it in a way that react is outside of the main bundle. Right. So like, essentially that, that is interesting. I know they
[01:04:51] 're working on preact. Someone was like kind of nudging them and being like, Hey, Svelte, you know, and we were actually talking today with
[01:05:01]  Marco. We're like, Marco solid. Who knows? I, I, I think it's, I think it's interesting. I think one of the tricky parts is
[01:05:08]  so much the backbone of this is based on the router. And sometimes the routing isn't compatible with the other frameworks as easily. So that, that might be the challenge there
[01:05:17] , but like preact, I can definitely see, and I'm sure it's coming, but some of the others, but they have at least. tried to keep
[01:05:22]  these things separate. So yeah. Where are we going? We're going to remix run react. Remix run react. All right. Nice. Nice, nice, nice
[01:05:44] , nice, nice, nice, nice. I wonder what the server.js is in here. Okay. I should just trust TypeScript. It's going to tell
[01:05:57]  me everything I need to know. Route data. No. How about actions? Oh, here we go. Use. Okay. So that's from the react router.
[01:06:06]  Okay. So this is where they do all the aliasing. Okay. Use. Action data. From components. Action data. Okay. Yeah. Some, okay.
[01:06:15]  Okay. So this is where they do all the aliasing. Okay. Use. Action data. From components. Action data. Okay. Action data. Okay. Yeah
[01:06:39] . Some, okay. Action. Transition manager. Get state. So there's a transition manager and there is a route context. Okay. Use. Use. Rem
[01:06:52] ix entry context. Remix. Entry context. I'm just being a vetting person. Yeah. Maybe I'm trying to dig a little bit too much. Yeah
[01:07:00] . Maybe I'm trying to dig a little bit too much, okay. Remix. Remix. Entry. Entry. Context. Remix. Ent
[01:07:10] ry. Context. I'm just being a vetting person. Yeah. Maybe, maybe I'm trying to dig a little bit too much. Remix. Entry
[01:07:22] . Either that or it should be. Remix. Entry. Context. Okay. Okay. Yeah. That doesn't tell me much. Does it? Um
[01:07:32] . I mean, it's just a context. I was trying to like get the shape of it, but it looks like obviously I'm not, if I was looking at
[01:07:52]  the source code, like on GitHub, I'd probably have a better chance here. Um, this has already been kind of separated out. So we only see the D
[01:07:58] TS for the, for the exported interfaces. I mean, let's see if I, like this is internal. We probably don't get to see the types here. Anyways
[01:08:12] . Yeah. Let's, let's, let's move on from, from this. I, as I said, I imagine that when they, they know that the
[01:08:20]  page is being there because of a post request, because the, the client didn't, uh, didn't just do like a Ajax request, but actually like the,
[01:08:31]  the request is actually like a full on form post. They're able to go, okay, when we re render the response here, we'll, we'll use the
[01:08:43]  data through the hook and just return the, like, just assume that without a redirect, we're always going to re render the current page with the data hooks, you know
[01:08:53] ? So, okay, let's keep on going. Okay. So, do, do, do, do, do. I mean, that's, that's the
[01:09:04]  gist of it here. I mean, you can put anything in here, but I think that's pretty cool. I think this is about as far as I want to
[01:09:13]  go, go with that. Let's, um, let's, let's, let's, let's look at building something from scratch here. Um, yeah,
[01:09:27]  let's, let's, let's just gut this baby. And I think in one of the tutorials, they actually have, like, they, they actually, like,
[01:09:36]  mentioned, like, about gutting it. I don't, I don't know. So, yeah, you know what, screw, screw that. We, we
[01:09:47] 'll, we'll, we'll figure it out. Okay. Let's delete everything. Let's, um, we need routes. Let's, let's just do it
[01:10:05] . Oh, you would say that. Um, let's, let's, let's, let's, let's, let's, let's, let's go
[01:10:20]  on to our next phase. Let's, let's, let's just, uh, see if we can, we can, we can throw together a hacker news clone or
[01:10:27]  something here. Um, just the main page. Um, I, I'm, I, I don't have the code all prepared for this, but I'm pretty
[01:10:36]  confident that I will be able to port one of my existing hacker news clones very quickly into react and using these patterns. Because it's very familiar for me, the way
[01:10:46]  this works. Okay. So I guess the first question is, okay, all this looks good. And then these styles, and this is how you get the global styles.
[01:10:58]  Okay, cool. So, um, and I might not even mess with that. I might just dump all the styles in, in, in here. Okay, cool
[01:11:10] . Um, I actually don't even need this index dot route. Probably maybe I'll leave the loader around for a minute for reference. But, um, let
[01:11:21] 's, let's look here client and this, we're not going to need to touch root. We will. Um, I'm just going to get rid of, I
[01:11:32] 'm going to leave global style. I'm going to get rid of this one because it's fine. Um, and I'm going to clear out demo, delete,
[01:11:53]  move. That's fine. And then what else are we going to do here? Document layout outlet seems like a good pattern. We'll leave the errors. They're fine
[01:12:02] . Catch boundaries seem perfectly fine. Okay. Document head, head, head, head. Okay. Um, interesting. Okay. I'll leave that for now. Leave
[01:12:10]  this for now. Let's, let's just quickly pull up something for reference here. Uh, solid hacker news example. And I've hopefully can just, sorry,
[01:12:31]  I'm doing some experimenting with streaming here. Let's, let's just go to the source code. Okay. Number cell. Okay. So, so we go to
[01:12:42]  a root TSX. Okay. Yeah. Okay. So they, no suspense, but that's fine. Outlet scripts, same header. Let's let's. Yeah
[01:12:50] . I just had a hard fix header. I don't think there's anything fancy we need here. No service worker. Let's just grab the CSS here. It
[01:12:54] 's already minified. Let's let's just dump that in global CSS. And then actually it looks like it's like complaining that I still have the, uh,
[01:13:03]  demo open where it's a 404. Let's just go to localhost. And then actually it looks like it's like complaining that I still have the, uh,
[01:13:14]  demo open where it's a 404. Let's just go localhost. Let's just go. Let's go. Okay. And then. Root PSX
[01:13:20] . Um, I made a nav component in solid for this. Okay. So, let's go. Okay. So, let's go. Okay. So, let's
[01:13:30]  go. Okay. So, let's go. Okay. So, let's go. Okay. So, let's go. Okay. So, let's go. Okay
[01:13:39] . So, let's go. Okay. So, let's go. Okay. Um, I'm just going to copy the component over. And I, I mean
[01:13:47] , this is react. So, this isn't just going to work obviously out of the thing. We're going to have to, we're going to have to do a
[01:13:55]  little work here, but the nav component is going to be pretty similar. I think all the H refs become two. And all these server only use get deleted.
[01:14:10]  Partial hydration trick we have going. Um, and all the classes become class name. And everything else probably looks fun and built with remix now. And it's not
[01:14:32]  solid app router. It's, uh, well, let's, let's look at the root. What do, what do, what do they, is it just remix
[01:14:42] ? Yeah. Okay. Remix. Okay. All right. Sweet. Converted solid. What's wrong with this two? What's your problem? That's
[01:14:58]  unusual. Oh, cause it's an actual anchor. My bad. All right. This is the only one that's actually not too. Okay. Sweet. So now
[01:15:14]  we have an app component and presumably we will be able to just bring that in here. import, um, nav from, um, um, components nav suite. And
[01:15:42]  now in our layout. Yeah. It's even in our layout. Do we want this? I think it's in our layout. Yeah. We just remove all of
[01:15:58]  this lovely remix stuff. Is the outlet. Why mad is he? There's an outlet here somewhere or props children. Props. Children's what we need. Where is
[01:16:09]  children? Children. Where are you children? Fine. Fine. Make me look for it. There it is. Okay. Fine. We'll just, we'll just
[01:16:22]  cut this. And then just go fragment, put our nav in here. And our children. Okay. Is our stuff looking. Okay. We're half and half.
[01:16:50]  See, um, we got some hacker news going here. Um, but not, not, not, not quite yet. Okay. So let's, let's, let
[01:16:59] 's keep on going. Okay. Uh, okay. That's, that's, that's all I really care about for the main layout. Um, that's reusable
[01:17:10]  parts. So now we're going to be, uh, we can get rid of this remix logo, I guess. Um, okay. Now we need a wildcard route
[01:17:20] , not a dynamic section, but we need an actual full on wildcard route here. So let's take a look here. I, I, I'm sure they
[01:17:28]  support it. I know the routing convention for it. It's star. So let's, let's go back here and look. Oh, conventions. This is beautiful.
[01:17:38]  Let's see routes. Um, yes. I want that. I want star. So. How do I do? How do I do star? File name conventions.
[01:17:47]  Here we go. Special values. Okay. Do, do, do, do, do, do, do, do, do. It's fine. Routes.
[01:17:53]  Star dot. No, but that's not it. That's just telling me that I can make my routes that dollar sign param. Okay. We already saw this. Yeah
[01:18:02] . Oh, interesting. So if you just don't put a parameter and just put a dollar sign, it becomes a catch all. Okay. Okay. Okay. Let
[01:18:17] 's give this a shot because the interesting thing is in this, what I'm trying to build here is we have the main page, right? And here I'm using a
[01:18:34]  splat because I actually want to grab the stories. And if it's blank, I, um, you, you know, basically the reason that you can't just use
[01:18:42]  a parameterized route. If you've ever been to a hacker news demo is see this, the homepage is slash and then slash new, but this is this, but
[01:18:51]  it's still the same page. So I want to support both slash and a parameterized route. And usually a parameterized route will not match on it. You need to
[01:19:00]  use a star if you actually want to get the whole thing. So, um, yeah, let's, let's do that. I guess it's good. I
[01:19:10]  did choose to type script. The solid examples in type script too, although it's probably gonna be a pain in the ass more when we do a bit more stuff.
[01:19:19]  Okay. So let's go here. So our routes, we don't want index TS. We want, we want rename to dollar sign TX. And I'm
[01:19:31]  gonna leave the loader here for now. And I'm not gonna worry about meta. We can, whatever. And default. Okay. Use loader data.
[01:19:50]  This, this, this, this, this part I think is going to be the same use data stories data. Yeah. So this is basically the same thing. Okay.
[01:20:05]  So let's, let's, before we worry about how we use the data, let's just make a giant blob of JSX and copy this over. Um, again
[01:20:15] , we're gonna have to do a little bit of conversion here because this is solid. And React does not have a, um, show component. So we gotta,
[01:20:26]  and okay. So let's do all the class equals. Class name. And, okay. Okay. So let's start getting busy with curly braces. Um, okay.
[01:20:47]  Okay. We'll, we'll, let's, let's assume that we're gonna have some of these variables. So when page is bigger than one, then we
[01:21:00]  need to do all of this. Okay. And then, otherwise, you, this. that's the as hell, but format doc. And that's, we
[01:21:32]  have prettier on our side. And then all these href equals are now two equals. And then I'm gonna assume that we're gonna have a type and get rid
[01:21:46]  of the extra function calls. Cause it's all these are signals, but in here, this will not be. will not be. And then. Stories. Stories.
[01:21:55]  Okay. And then the same deal again. Curly braces. Stories. It's kind of interesting. Ternary operators are nice and all, but for stuff like
[01:22:10]  this, they're just like so much more verbose, especially when you get prettier involved and you like gotta like, like find the blocks inside the JavaScript instead of just being
[01:22:25]  like these solid, like consistent markup blocks. And then these are gonna be. And then these are gonna be type page. And then. This is, this is
[01:22:48]  probably why people do like preparation ahead of time, but you know me. I do these streams, so I don't have to prepare. I'm much too, too,
[01:22:56]  too busy. Oh, and actually this one, there is no fallback. So it's just stories. And. This. I suspected that I'd be able to
[01:23:06]  just convert solid into react. Like. Let's demo this simple, like easily. So. Right. And then the four becomes. Stories. But map. Yeah.
[01:23:22]  Like this. All right. Curly braces. Hold this format for me. It's on the wrong side. This is just. Right. Right. Right.
[01:23:37]  Right. So. That's fine. Okay. So. That's fine. Okay. So essentially we are just moving. And. Okay. So. Okay. So
[01:23:51] . Okay. So. Okay. So. Okay. So essentially we are just moving. Okay. So. Okay. So. Okay. So. let's. Let
[01:24:05] 's. Let's. Let's. Let's. Let's make our data layer. Um. We use this loader function. And. We. We're probably gonna
[01:24:15] . I'm gonna copy this. From solids. Demo here. I'm just gonna go. Types dot. Yes. I think. Let's. Let's see
[01:24:24] . Is it. Okay. Let's see. Let's see. Is it. Okay. Let's see. Okay. Let's see. Let's see. Same
[01:24:36]  difference. Okay. Beautiful. Yeah. I can do typescript too. Um. I've been using typescript for like. Two and a half years now. I think
[01:24:47] . And I still just. I feel. I. People like. One day. You're gonna like. Hit the curve. And it's just gonna work for you.
[01:24:55]  And I'm like. Two and a half years later. Like. No. I don't think I'm ever gonna like typescript. But. Let's. Let
[01:25:02] 's just. Let's just keep on going. Um. Okay. So. Uh. Meta function. Need. Loader. Oh, right. Types. Yeah
[01:25:15] . It's like. Why am I importing all this stuff? It's. Type scripts. All right. Um. And then. Let's. Give stories data. Um
[01:25:25] . Um. And then. Let's. Give stories data. These won't be functions because they react. My story is number types. And we'll have the important
[01:25:56]  story too. This is the only problem with doing it like this. I'm trying to do it as fast as I possibly can, but let's face it here.
[01:26:14]  I'm still doing a huge amount of coding on the fly here and not knowing if this is going to work or not, but I'm just optimistic. Right? See
[01:26:29] ? Yeah. Beautiful. So bear with me. This might be a little bit boring part, but we're going to make this work because story is the same deal again.
[01:26:43]  Okay. Beautiful. Okay. So this becomes remix. This becomes nothing. How does a remix handle? How does it react? Yeah. Whatever. YOLO
[01:27:08] . Do this. Do this. Do this. I'm like in the wrong file. Sorry. Same idea. We're probably not even going to get to comments
[01:27:17] . We're going to do a story here. Here. Props. do this i'm like in the wrong file sorry same idea but probably not even get the comments
[01:27:33]  um we're going to do a story here um here props there's probably nicer ways to do this with react i just as i said i have never programmed in react with
[01:27:55]  typescript before so this is just seat of my pants trying to do this but i have confidence because react is such a great framework and i'm already familiar with a lot of
[01:28:08]  this stuff that we will be able to just figure this out all right and this see if this all goes well the way that i'm hoping it will in a few couple
[01:28:27]  minutes here we're gonna have a fully working main page of hacker news um just blindly um copying the stuff over oh right i'm gonna need a because there's no component wrapper
[01:28:43]  i'm gonna need to add an extra fragment here interesting it's like funny little benefits you get from using components to do control flow you guys don't notice otherwise so this
[01:28:55]  is the stream i should do when i when people are like why do you use control flow in solid because it's just way nicer for for handling like random like blocks of
[01:29:09]  html let's format that yeah okay um here let's do this be fair like this is mostly all just boilerplate kind of stuff here that i'm doing that
[01:29:34]  it's like really matter what syntax you use i think i think being too concerned with syntax is overrated if it doesn't have a mechanical implication right like who cares what you
[01:29:45] 're typing there we go um there we go and then the last one All right, this one can be an "and" because there's no "or". Sometimes
[01:30:10]  it's like when I was doing the demo. I wrote an article about, what do you call it, to-do MVCs, and I had to like just remake
[01:30:20]  my own to-do MVCs in all of them because I was doing a size comparison, and the solid version was like much smaller than the pre-act and react version
[01:30:27] , and there's like no reason for it. Sometimes I just end up liking doing stuff myself. But if I undo everything in here, we're probably never going to
[01:30:37]  get to the comments, so I don't really care. Let's see. Okay. Okay. So it looks like it's rebuilt. That's not ours. We're
[01:30:52]  not that far yet. Where are we? Okay, sweet. That's about where we should be. There's an error because we haven't loaded data, so let
[01:31:08] 's get some data going here. Okay. Okay. All right. Where is our loader? Okay. So back to remix. Loader. Okay. So
[01:31:23]  loader function just returns data. Is that it? Yeah. Okay. So this is the trick. Oh, okay. Okay. Beautiful. Okay. So we just
[01:31:43]  need to, oh, I mean, this is going to be like the, this is going to be the, let's see what arguments are here because I don't know
[01:31:55]  what they are. Okay. So this is, this is borked already. Oh, it's because I'm an error function. It's really mad at
[01:32:24]  me. I did something, I did something very bad, but it's probably because of the errors. Like it's, it's, if I just like, if
[01:32:37]  I just go like return nothing here, probably not going to get mad at me anymore. Oh, no, I, I, I, I did make it mad at me
[01:32:49] , which is interesting because right now we just have an index file that returns nothing. Hmm. Okay. Does get to here though. Why is it mad at me?
[01:33:08]  Well, let's not worry about that. Let's worry about the loader. We can't worry about the loader because we can't actually see the loader running
[01:33:16] . Let's see if we can see loader running. I'm not seeing loader running. Beautiful. Okay. So, okay. Empty index or whatever,
[01:33:32]  wildcard component. Route is slash. Let's, let's, let's, what I'm going to make route new. No. Okay. It's just complaining
[01:33:45]  at me that the HTML service to contain a matching head in HTML. Okay. So what are we actually sending? I wonder if this is because I like remove the medic.
[01:33:58]  Like what, what is, so this is fine. This is fine. This is fine. This is fine. So, okay. Let's remove the children here.
[01:34:13]  Let's just, let's just, no. Okay. Yeah. Let's remove the children here for a second to, to ensure that we get out. Okay. Imp
[01:34:23] ressing. I figured if we just like didn't bother rendering anything, like just render the nav, it would just stop complaining at us. There's nothing special in this
[01:34:35]  nav. It is literally just a component. Okay. Well, let's not render the nav too. Okay. See. Okay. So the request is being made now.
[01:34:57]  Okay. So it's, it's an app that's broken. Okay. That's fine too. Okay. So it is children. So we are seeing the request
[01:35:05]  from the server. Not sure what breaks here. If I go children, we can see now what we have. We have the request. We have the context and we have
[01:35:22]  the params. Okay, sweet. Nice. And you can see the params. That's, that's beautiful. See star blank. That's how you get
[01:35:28]  the params. Okay. So we, we've got what we need. Awesome. So from here, we, I want, I want params. And it
[01:35:34] 's params star that I'm, that I'm, that I'm, that I'm, that I'm actually looking for. Because let's go back to solid
[01:35:58] . Okay. For a second, this is not going to be the same, but it's a start. So, get rid of the functions. So it's par
[01:36:33] ams star that I want. It's not a, it's not a legal character. So we want star or top. And then I want to get the query off
[01:36:48]  of this. Let's, let's do one more experiment with args before we move on. So I probably, again, I'm going to break everything, knowing
[01:37:05]  me. Just comment this out. Console.log args. I should have, I should have done this experiment before. Okay. So let's add like page equals to
[01:37:20]  this. What do we get? Does it pass this along to me in a way that I can get at it easily? Okay. Because like, I know React router
[01:37:41]  has like use search params, but I was thinking that I might see it here. Okay. Let's double check it. It's not like some other thing.
[01:37:51]  Let's do jobs. Okay. I'm going to have to do work myself to get the queries off the, off the query parameters. Okay. Does request have a URL
[01:38:07]  on it? I'm just not seeing. I don't know why I'm spreading anymore. I already know that it only has one on it. Beautiful. Okay.
[01:38:30]  So I'm going to parse, I mean, maybe we can look, but otherwise I'm just going to parse the query params myself. I mean, it's
[01:38:38]  not too difficult thing to do. Yeah. Let's go here. Docs. Not conventions. I want data loading. Route params. Route query params.
[01:38:57]  Say search. Okay. Yeah. Okay. Yeah. Yeah. This is what I meant by it's not hard to parse this myself. They're, they're, they
[01:39:17] 're just like use the platform. See, this is what use the platform means. It means, it means exactly this. Um, it's a request. Interesting that
[01:39:33]  they give you the convenience of, of, uh, for the, um, the params, but yeah. So I want page is page and then, or one
[01:39:52]  and I guess it's make it a number and then beautiful. And then. This is going to be chase on this one. We're all done. Okay. All
[01:40:09]  right. And then we just need to set up our API. So I'm just going to make top level. I'm going to make a new file and I'm
[01:40:12]  just going to call it API. Yes. And. And then we just need to set up our API. So I'm just going to make top level. I'm
[01:40:17]  going to make a new file and I'm just going to call it API. Yes. And then we just need to set up our API. So I'm just going
[01:40:32]  to make top level. I'm going to make a new file and I'm just going to call it API.ts. And from here, we should be able to just
[01:40:45] . What do I do? API.ts. Sure. I already kind of. I wonder how they're going to handle fetch. I'm going to trust that they
[01:41:01]  can handle fetch is server. It's always server. So we don't actually have to worry about that. We're just going to assume anything that says is server is true
[01:41:11]  is just going to be necessary here. So we're just going to do this. And. Okay. And then what we need to do, you know, route here
[01:41:38]  is just pass it. Right. So yeah, this becomes cons stories equals await fetch API. This. This. This fun thing. And then. This becomes.
[01:41:59]  Async function. And then we just need map stories, which is. This. Mapping because the URLs don't match what actually the Hacker News APIs use.
[01:42:22]  So. Type is not a function. H is not a function. H is not a function. H is not a function. H is not a function. H
[01:42:39]  is not a function. God. I hate TypeScript. It's complaining because it's a string and it's not like exactly one of these values. So like
[01:42:55]  I can. I can like make a union type out of it or type of something or other. There's so many comments in the comment thing that people are probably.
[01:43:12]  But no, people are just chatting with themselves. I'm glad. I'm glad. I'm glad. There's some interesting conversation going on in the chat. Okay.
[01:43:24]  So. Oh, why can't I just make this? Yeah. That's right. That's why I tried it. It didn't. It didn't work.
[01:43:34]  It didn't work. Maybe I can do this one as any. As any. Way. Can any. Any. This is why TypeScript is my favorite language.
[01:43:58]  Maybe this didn't need to be a const. Maybe this is just being annoying. Yeah. You're right. That's the solution to every problem. Nope. Oh
[01:44:26] , nice. I mean, it seems to be ignoring TypeScript. So that makes me happy. Okay. Yeah. So it's, it's complaining about the fetch request
[01:44:45]  because it's not getting the right data. Okay. So this is actually going through. The problem is it doesn't. The Type will. Yeah. Let's,
[01:44:58]  let's console.log here. Cons. Or let's, let's see what this would. But what we're getting here. Console.log. Page. And Type
[01:45:05] . page and type. No, TypeScript hates me. It's interesting though. It's actually not getting to the console log again anymore. Let's have
[01:45:59]  some, all right, yeah, okay, type as, type as key of map. Let's get rid of the annoying stuff. Okay, okay, well, let
[01:46:46] 's, let's, let's see if we can get to a state where stuff console logs again. Okay, it console logs here, but something I'm doing below
[01:47:07]  here is pissing it off. Cause it's not getting to this one. Although it is fetching it. I've never seen. That must be a nice
[01:47:30]  world to live in. I, any, this is not the first time I've had stuff like this happen. This happens like all the time to me. Okay.
[01:47:39]  Okay. So what is our problem? Cause it's called console log debugging. Okay. Okay. Okay. Okay. Well, if you can get here, then hopefully
[01:48:02]  you can get here. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay
[01:48:20] . Okay. Okay. Okay. Okay. So why is node fetch thinking that why I'm passing undefined here? jobs oh that's interesting how is it oh
[01:48:37]  it's because i typed it myself i'm just being dumb so i'm sorry guys if i'd actually gone to job it would have worked it's just it's because i
[01:48:49]  typed it myself and it wasn't matching the map this is this that's that's on me sorry that is completely on me this is this is why you code live on
[01:49:01]  stream with something you have not tried before so you can you can show people all the great stuff okay sweet um okay so other than typescript being a jackass we are actually
[01:49:19]  okay and then let's let it rip yeah okay so there there is something that i've finally mentally done wrong with the application structure that is making remix upset at me um
[01:49:38]  which is unfortunate because what's happening here is if we go to the network tab and look at the page as it's loaded we essentially render the header and no children
[01:50:02]  why is there no children coming from the server did i do something here no it's wrong yeah so why is there no children coming from the server children children layout component into
[01:50:17]  outlet okay okay new sweet so this actually works the problem is it's not handling slash properly um basically i was trying to get a catch all route and slash is nothing index
[01:50:42]  is returning is this is this something i'm doing or is it's the way that the the router is is is matching he would know this this guy you want to thank
[01:51:00]  someone for solid app router it's this guy um but but you know okay let's let's let's let's ignore that for a second what we built actually works so
[01:51:18]  we we did build it we lost a few people along the way a few casualties to to to to to the issues i was having but oh right it's react it's complaining
[01:51:32]  about keys man i haven't i haven't dealt with this in years oh this is fun there's keys oh man and you want you want keys because if you don't put
[01:51:44]  a key like you you definitely want keys um story god id man i haven't seen a key for ages i don't i don't know why it's complaining about that
[01:51:57]  but we're not gonna hopefully we don't have to worry about that morning so interestingly enough this all works and if we go to the yeah it's just the router doesn't
[01:52:10]  work this way okay okay uh that's interesting because the whole reason i did it this way using the star route was because i was hoping the star route would match on this
[01:52:25]  but it doesn't so so my i mean my my expectations were a little bit different there okay but it's as i said we we this is this is this is what
[01:52:41]  i this is honestly this is this is this is the app i want to build fear i'm not going to bother with anything beyond that what i'm going to do is i
[01:52:50] 'm going to make um a dummy page for the like we're not gonna i don't think i'm gonna bother with with with wait did it just delete the whole folder
[01:53:06]  of course it did god vs code's awesome isn't it did you guys catch that it deleted the whole folder with all the files in it and then it um then when
[01:53:29]  i restored it it didn't bring the files back i mean it didn't it didn't remove most of our work to be fair um like the important work but it did remove
[01:53:45]  the for the story component um which is unfortunate because i can't undo to it which means when we can do this again it's just gonna take me three minutes sorry about this
[01:53:57]  we lost the nav and the story oh man that's that's because i wanted to clean up okay sorry people i'm just gonna do this really quickly again now that i
[01:54:11]  know that what we're doing this will be actually it was pretty fast last time but this will be just the tiniest bit faster it was definitely really cool how how
[01:54:25]  similar the pattern is here that it was really easy um for us to just convert stuff from solid to react the the only thing is like it's like can we get a code
[01:54:39]  mod to to ternary all the all the all the show components here because man that would that would have been that would have been nice um it's definitely because
[01:54:53]  um definitely because yeah there's just no quick way to do this i think microsoft doesn't like me yeah that's so unfortunate you like select something and then it's
[01:55:14]  like it's like no it's not quite what we selected and i probably should have been paying more attention admittedly but like no and then at least this part was like really
[01:55:30]  really easy um where's the fallback there's the fallback because everything's off props for this part of the of it so i didn't even have to do any
[01:55:39]  single transformation or anything so this is like this is this is a place where other than the the kind of clunky ternaries we're doing here um solid and reactor identical
[01:55:52]  so sorry everyone wants to make this to happen since i get everything working i don't know if someone in the chat wants to research and figure out how we can do the
[01:56:07]  index route i'd be pretty stoked about that i it doesn't look like it's giving me a catch-all top level that catches the index route which again doesn't surprise
[01:56:18]  me because i actually hit this before with um um was it ember router the algorithm that they used didn't match um star against index and um i actually i had to
[01:56:33]  change it when i wrote my own routers um but because it just seemed you know that reasonable use case so you know let's just go this way but i i can understand
[01:56:49]  why that might not be the case this one's actually just uh and and there that document and then nav this one's way easier it's just class to class name
[01:57:17]  href to two except for the last one i'll change it back this one the real href i'm gathering this is just because of legacy because given how like use the
[01:57:39]  platform they are on on the remix team i think if they did it again i suspect they wouldn't use two on the link component it's just it's just like it
[01:57:48] 's it's being different for like no reason um when you could you know what i i mean like this this could be href and it would just feel more natural um
[01:57:58]  bang okay hacker news demo working except for this weird warning that i don't know why that's happening but essentially here now the only thing is this route route route doesn't
[01:58:18]  match properly so what we need is the problem is this this is this is how wild card is i can get so i don't think i can do this without um using some
[01:58:29]  different type of routing um like either i copy the file which you know knowing me actually is something you know what that is completely something i would do i i i i for
[01:58:41]  something like this i don't feel like it's worth wasting people's time by me like looking things up right um i mean i could i could spend a minute looking things up
[01:58:52]  but generally speaking um i mean this makes life really easy this just becomes top um um stuff with top news um yeah i mean there we go i mean this this is taking
[01:59:38]  a bit too extreme you know the whole thing about wet versus dry code bases i'm i i have no problem duplicating but in this case it is actually the exact same thing
[01:59:49]  so that's not a fair thing i think they actually have a way of defining routes let's just let's just play this because i think they have a way of of actually
[02:00:00]  saying like hey you can also add add routes and not bother with um just the file based routing no i know yeah we already did that yeah yeah yeah yeah no no
[02:00:26]  no not that um what else do we have not found handling yeah see it's because it's because i'm not yeah it's it's yeah it's because the air
[02:00:49]  handling can like sometimes you use star rouse is like so air i'm pretty sure there's there's there's there is a because i need to get it into the
[02:01:11]  same router is the thing i can't just make like a new routes component um i need to actually essentially get it into the same router yeah you know what i didn't
[02:01:27]  figure it out so we're not gonna worry about that we're just gonna that's enough time on that let's let's let's let's take this to the next step
[02:01:35]  okay so ta-da we have a remix app sources console elements network okay yeah so i i just want to let's let's let's can we build this for real
[02:01:50]  and not do dev that's what the readme is for right what's the next step mpm run build all right beautiful mpm run start okay beautiful okay okay no
[02:02:16]  that can't be right it is right crap that's just like him it's in just a second it is jesus okay okay javascript refresh what oh react dev
[02:02:43]  tools die in a burning pit react dev tools like what it's funny because it yeah this is this is my browser extension stuff uh can i just kill react dev tools like
[02:02:59]  manage extensions go away react dev tools it's funny i forgot i even had that as i said i haven't probably used it in years all right let's do this better okay
[02:03:14]  63.9 kilobytes payload um okay i always like checking this to kind of understand the initial payload for react app that's not bad actually um the next js demo
[02:03:29]  uh that i saw was about 120 i i think if someone did it now they could do a little bit smaller um svelte is 13.5 kilobytes um
[02:03:43]  i think i saw a pre-act one at about 22 kilobytes and um yeah that's that's not bad on pure size can we deploy this sucker that's probably
[02:03:59]  the next question right because i want to i want to put this somewhere so that we can actually try it out in a real deployment environment um i guess the other thing is
[02:04:09]  i want to do yeah okay so they're smart enough to do the module preload on the on the chunks and let's let's see what they do here so the module
[02:04:15]  preload on the chunks here do all right i didn't i didn't okay let's do a little experiment here but what i didn't do that i should do is
[02:04:26]  where do these go to these go to stories slash id okay let's let's make a a quick route here um that's just going to be like not complete yet and it
[02:04:42] 's just going to be um folder stories and then new file dollar sign right and then we'll just like go export uh default story whatever and just have it like return
[02:05:10]  the reason i'm doing this is i just want to check really quick what happens when we when we go here what story is plural no it is plural okay so that's
[02:05:43]  solid version plural for default oh that's interesting because there's no data loader on this route so i want to expect it to match on it because it's more specific than
[02:06:12]  this route okay let's just make sure this is clean slate because what should be happening is it assuming that it can match on stories um id this should take prevalence over the star
[02:06:27]  match which means that um and there's and there's no matching here so this should just be a straight up nested router unless i screwed up something on their conventions let
[02:06:39] 's go back to route file names nested urls but not nested routes yeah yeah there's no nested thing so this this this should be this should be this
[02:06:59]  do they do anything spoof oh you are right i'm no longer in dev mode silly me let's just double check that in depot this is this is obviously great not
[02:07:17]  implemented thank you thank you sometimes you do stuff like this we could probably implement that page pretty quickly but let's let's just for now leave it at that and the reason
[02:07:45]  i want to do this is i wanted i want to see how it handles preloading like how aggressively does it preload by default like if i click to this page
[02:07:56]  does it load another chunk okay good it does okay so it is only reloading the chunks that are on that page so this 64.4 kilobytes are real it's
[02:08:05]  funny that it just got bigger though you know like i added a page and the the main bundle got bigger for some reason anyway okay interesting enough okay so yeah how do we
[02:08:27]  how do we deploy i guess this is a remix project so i can't i can't just get away with um yeah i wonder i wonder if i like started the project
[02:08:38]  in the wrong mode like i i guess the question is if you if you let's read the readme if you go through this this thing and you make it um okay it
[02:08:48]  is just a node server i see or there's just saying pick up and drop the app yeah okay yeah look okay you know yeah we're going to do that we're
[02:09:08]  going to keep both copies so i don't have an accidental vs code um malfunction again but we're going to go back and we're going to go um mpx
[02:09:19]  create remix that latest and we're going to pick up that cool animation again and we're going to call it remix hacker news and we're going to make a amplify app
[02:09:40]  and it's going to be typescript and for sure mpm install we didn't need any other outside end dependencies okay okay sweet and then i'm going to open up a
[02:10:01]  new vs code window and that while there's all those great um commands actually yeah you know what i'm i'm hopeless with that stuff so let's just i grew up
[02:10:14]  on windows i apologize to everyone i used windows for years i never had any problem with it i'm used to guis so i am not going to run a terminal commands right
[02:10:27]  now i am just going to basically wholesale got the app folder and go here to this project and copy this app folder i love that vs code like at least lets you do
[02:10:54]  stuff like like this like outside there and then let's read the readme okay yeah i already have the cli let's see if i'm logged in yeah i
[02:11:21] 'm already logged in of course okay perfect and is that all i need to do net if i in it sure sure remix hacker news all right all right and then tell
[02:12:08]  netlify to do some stuff beautiful and then let's just before we do anything let's just make sure our app still runs um can probably oh let's let's
[02:12:28]  let's make sure our app runs before we do anything okay our app still runs okay uh um this one solid i'll leave open for a minute this remix one we can close
[02:12:40]  and then this is our new remix hacker news one okay perfect so it works mpm run build be a run start let's just make sure start really no what do they
[02:12:57]  do oh because the netlify i guess the way you start in each is going to be different based on the adapter we have similar kind of adapters in solid start except
[02:13:06]  i alias them all to mpm run start um but i have to admit they don't all work beautifully because there's like different deploy preview deploys and all that
[02:13:16]  stuff okay so so let's just uh netlify deploy nice and let's go to the draft website and we have a wonderful remix hacker news example and actually you know
[02:13:47]  what let's just do it all the way let's let's just let's let's let's go to prod while we're doing that i'm going to load up solid
[02:13:58]  h and uh i'm going to do any of that see this beautiful okay sweet um actually let's go to twitter and just scroll down really really fast because what i want
[02:14:27]  to do is i i just want to i just want to i want to i i i just like looking at stuff so what i'm going to do here is have some
[02:14:40]  fun with this um oh yeah here we go i've never done this so honest honest see oh bill what's solid ooh let's fix that sorry let's let's let
[02:14:59] 's let's let's let's let's fix that really quick app i think i fixed some of this stuff previously um when when we were when we were doing this stuff but
[02:15:09]  i think what happened was because i deleted the component folder by accident um so let's let's fix that built with remix and um what is it remix dot run yeah it
[02:15:33] 's a note h3 has on that that sounds terrible what's their website remix dot run yeah let's let's let's fix that real quick all right cool okay see
[02:16:00]  i think i think remix has got like a bunch of really cool stuff and they've really thought about how they deliver the experience this is the area i'm not as strong
[02:16:08]  in these days just to kind of understand yeah okay so that's resources let's talk network tab yeah okay yeah let's go all all okay okay okay okay let's do
[02:16:24]  one of these okay let's do the dev timeline what are we dealing with here all right um i'm sorry guys i'm i'm going to zoom out i can't see
[02:16:46]  anything when it's so thing so hopefully you can see what's going on beautiful right so we got a first paint event uh network yeah all the resources come out front and
[02:16:59]  pay by accounting so we can ignore network for the most part yeah first paint event coming in at 306 first contentful paint well it's common 306 dlc and
[02:17:14]  then the final load event 398 but largest contentful paint that's what we care about mostly 306 let's let's do this a couple more times i just want to
[02:17:23]  get a feel for this sometimes 348 348 yeah yeah it's all the same i forgot that we're both we're not using streaming netlify uses aws
[02:17:38]  functions doesn't support streaming so like this is just the core experience um just kind of get an idea here it's always interesting to see like the work being done by react or
[02:17:48]  any kind of framework when they do hydration this is what misco like showing when he's doing the quick demos right because you you can kind of um see these long tails where
[02:18:01]  everything's where everything's happening and the trickiest part obviously with async rendering is you don't get to do much work until until later okay so that's cool that
[02:18:11]  gives me kind of ballpark see how we're doing here i just just want to let's do one of these i imagine these are going to be really similar 298
[02:18:29]  298 let's let's just do another one yeah i'm the this yeah this one's for 336 this time a little more 277 okay yeah the biggest thing is
[02:18:49]  like everyone's gonna ace a light post score with a with a with a a site this this this you know this simplistic right 348. it's interesting though because when
[02:19:01]  when is does the final like when does the hydration end and i think i think i think for the most part all that work is happening up front like let's look at these
[02:19:16]  timelines yeah i mean what's this one at 3 14 let's switch through a few of these different timelines and look at like the the fastest one was our first one so
[02:19:30]  we'll use that one and then everything's done by 339 or three this one was actually end up in the actual fast one actually we should probably look to here so
[02:19:43]  about 320 okay and then same kind of well actually i guess this is where the hit happens this is let me let me do this again because the the the first paint no that
[02:19:57]  was a bad run we're not gonna count that one let's try this again first paint is yeah that's a good one and the load is 414. yeah yeah
[02:20:09]  so that's interesting it takes like a whole extra 100 milliseconds for react to hydrate um you don't always get to kind of do these sort of comparisons but like the the
[02:20:20]  initial page load is actually very similar the time and server rendering like this is something i like to sometimes point out to people because if you look at benchmark solos like 10 times
[02:20:31]  faster rendering than react but it doesn't actually matter the the latency here is on the data fetching to the api and then at that point um you know the load
[02:20:43]  timing is going to um really depend on how much hydration work you need to do so the yeah that that that's kind of like that but let's see what happens like does
[02:20:56]  this get exaggerated or worse if someone's on a bad network let's let's let's let's do uh let's do a let's do a couple fast 3gs
[02:21:04]  and just take a look and see how that kind of affects our experience here so fast 3g is not the slowest network but it's it's slow enough you're gonna
[02:21:14]  okay let's go yeah yeah look look at this this baby fast 3g very fast 1268 and yeah it's just gonna be a single number this is why i like
[02:21:25]  streaming um because um the way it works on different networks is a little bit cooler okay let's do this fast 3g run again all right all right again about 1270
[02:21:49]  very similar and then 16 document finish 13. oh yeah wow is that because the the script loading time let's let's let's run these two again that's 300 milliseconds difference
[02:22:05]  it's like getting close to half a second difference i let's that must be just a blip let's let's do that again because like this isn't cpu
[02:22:14]  this is just network yeah what do we got here 11 yeah yeah that was just a blip oh no 16 what the interesting well this isn't remix this fault i'm sure
[02:22:28]  this is react but that's that's interesting that is like a huge difference in hydration time like hundreds of like for really like a nothing app but like 300 milliseconds okay yeah
[02:22:46]  that's that's interesting okay well okay but i mean the the core thing is is is um this is this is just react server rendering and stuff like i mean this i imagine
[02:23:02]  when maybe when they move to preact or whatever we have kind of different numbers but mostly um it was really easy to build to build this this page um we we just
[02:23:15]  you know like look at at this um sorry that's a whole one um we were able to just like go in build our routes exactly how we wanted to just load the data
[02:23:29]  just fetch it right in here use the data and and then it just it just works i i like this pattern a lot um i especially like it being in the same file
[02:23:41]  just feels really connected and um there's no use effect or anything this is like really really um like simple to do you can just picture just authoring your pages that way i
[02:23:53]  think i might i might i might go and borrow this uh for solid actually i really like this loader thing if i can the the as i said it's interesting because
[02:24:04]  it's non-granular but maybe that's fine like if you if you look here uh the solid example the component's the same but then we put the data in a
[02:24:13]  separate function and it's a little bit different i guess it's kind of the same thing but really really really cool pattern to just kind of like be able to use that
[02:24:20]  sorry that's a solid one again sorry to use the the data this way and just have it like uh just like this is this makes data fetching so much easier i don
[02:24:30] 't know any anything else anyone wants me to try this stream's already a bit longer than i was originally intended but i i think it's i think it kind of got a
[02:24:41]  i got a feel for for stuff i especially think i need to dig more into the to the actions a little bit and understand that a bit especially like the way you can
[02:24:49]  return json or redirects i think that's like brilliant and like this this common api that they they've offered here um the way yeah it just json redirect works
[02:25:01]  for loaders works for actions very consistently um i think the i think the pattern is great um i didn't do optimistic form updates that's probably like the next place that
[02:25:12]  i don't really want to dig into i was just curious curious about if the how like the deployment story or like how the like the like i i mean truthfully like as
[02:25:25]  i said it's still react under the hood so like you can't fundamentally change the math but i think this will really help people author apps in a better way um so i
[02:25:35]  think that's pretty cool we deployed our netfly app and i'll just post this in the chat in case anyone wants to try it i might actually go and implement the rest
[02:25:51]  of the the hacker news demo um you know give people a chance to kind of play with it more but i i think i think this this gives me ground work it's always
[02:26:00]  hard because there's different apis i'm sure there's faster apis and stuff but this this gives them a kind of level uh playing ground and you can kind of
[02:26:08]  see yourself as i said this it's not like like this this site is going to be fast like let's let's just do this right like easy all right let's
[02:26:28]  friend one more time i'm sure that was blip or maybe not okay i mean these scores are good i don't know why it's giving it 99 i guess it's
[02:26:42]  the time to interactive i guess it's just the hydration that's that's doing it which is really unfortunate because it's it's not remix's fault at all yeah des
[02:26:51] ktops fine like these numbers are are good numbers i i think this i think this is this is this is the killer right there because like uh if you like i'll show
[02:27:04]  you actually these numbers are all going to be almost identical except for the for that i mean it's it's also kind of maybe an unfair thing it's not just the
[02:27:19]  hydration time it's like you're comparing a 14 kilobyte demo with a 64 kilobyte demo right yeah see look these these loading times aren't actually much different but
[02:27:30]  but one like it's basically interactive immediately at the time the content loads instead of almost half a second later um so yeah i i think i think that's probably going to
[02:27:42]  be the biggest difference here i mean yeah i i i i'm not sure that any react framework is going to really escape that honestly um the next js demo well actually do
[02:28:02]  i even have because have you have you seen this not with delays this is this is the the versell next js demo i i i don't think it's quite the same
[02:28:14]  thing right but let's let's just uh let's just feed that in too just why not here's server components and streaming and all the bells and whistles with with react
[02:28:27]  to be fair i think this demo can be optimized more but yeah wow i mean this this is interesting but this this this is it timed interactive a little gut punch um um
[02:28:52]  um yeah no i mean that's that's that's that's that's that's that's that definitely is is is a hit i mean i think these are still 99s
[02:29:06]  it's just it's just like a hundred and uh in lighthouse for site this like for a demo like this is table stakes you know what i mean it's it's
[02:29:16]  it's or like like 99 like like like this kind of range it's just this is this is this is definitely um where where slowdown is where you know optimization i like
[02:29:29]  on a desktop you're like you're not going to notice it oh well that is but yeah yeah yeah no yeah no definitely and it it already has if i haven't
[02:29:46]  been clear the reason i was able to port stuff so so so so so so easily across um when you're watching the demos was because like this whole react router influence thing is
[02:29:57]  the same in solid and they call used loader data we call to use data like these patterns are already like i i i look at remix i said again with great detail
[02:30:06]  i think i want to look at the actions and see you know in the forms and see what i what i can do there but like the the nested routing was already a
[02:30:13]  thing um yeah actually honestly before even remix but but like but and this like very similar kind of mentality and seeing such similarity it's easy to kind of like for us to
[02:30:23]  like look at and see where tweaked i think it's really awesome actually i think the api and the experience part it just makes me giddy to look at like just
[02:30:32]  how they're using the like the request objects and the things that are already there and not inventing this thing and i think the coolest thing it's in a demo i didn
[02:30:40] 't get to do it today is the optimistic updates the fact that it's just as simple as using a hook to get the form submission is just brilliant it's such a simple
[02:30:47]  solution that just that just simplifies like the whole thing like i'm pretty sure everybody's gonna have something like that yeah within the next six months it's just it's
[02:30:59]  such a really cool thing it's they see that kind of movement yes you you can't i mean yeah i wonder though if everyone adopted party town like the offloading the
[02:31:12]  scripts how much of a difference certain types of hydration is well you know like yeah i it's it's it's it's interesting because i mean how many more hacker news demos
[02:31:28]  can i find marco news let's see if i mean i wrote this one so that's not really looking very far but you know that it's the same oh freaking
[02:31:38]  heroku you know never mind um yeah i mean i i don't know if there's much else to do on the the performance thing at this point i i i think that
[02:31:56]  where you're going to feel this is larger apps just having a better architecture is just going to be better um you know just in terms of making sure you paralyze that
[02:32:05]  data fetching like we talked about earlier and whatnot um yeah i think that's enough on the page insights but yeah the the patterns are great all in all it's really easy
[02:32:17]  um to build this stuff with remix and i i i look forward to seeing new projects being built in and find new interesting like just just kind of really dig into the ap
[02:32:29] is to understand uh like what they're doing and how they work i i think this is like a reverse engineering paradise so to speak so i'm pretty excited about that okay
[02:32:40]  um i'm sorry i'm sorry marco i i think there's something weird and i i watched the logs on the demo i seriously i watched the logs on the demo
[02:32:57]  i mean maybe we can get in here um and and like it's the stupidest thing ever oh really oh come on later yes later no security for me okay and it's
[02:33:17]  like it just fails at some point on one of the ajax requests in the background and then just crashes the server and it stays crashed forever so honestly i i will have
[02:33:26]  to fix this but one little trick we can do is we can just deploy this right now for two seconds and uh get this back so just long enough to test it uh where
[02:33:41]  was it almost on heroku and like i i don't know if heroku doesn't have uh um it's still building um heroku is like um doesn't have
[02:34:03]  quite some the same performance stuff as some of the serverless functions and whatnot we're gonna get a new demo that's gonna be a lot nicer but um man heroku
[02:34:13]  was such a game changer for its time but think of how things work now i did a stream all about deployments it's just so easy now with everything to just go server
[02:34:24] less and the the new stuff like for cells been doing with like the file system uh stuff is just insane i i've shown i've shown this demo before in case people have
[02:34:34]  missed it just i wanted to show you something you know how we always sit here and we we look at this stuff and we go oh way the coolest thing about the mar
[02:34:41] co version of this demo is that there's zero kilobytes of javascript because even though it all works um it's it's using an mpa based thing so
[02:34:54]  it actually does all full page re-renders all the time and sure you can do that with remix or solid start and just remove the script tag but the difference with mar
[02:35:04] co is when you go somewhere where it doesn't need the javascript it just it does have the javascript there's it's not like it's not binary
[02:35:10]  like no or not you just you just bring in the javascript you need as you need it which is why marco quick astro are so powerful but you know let
[02:35:20] 's before we we tempt fate by waiting too long let's let's let's let's just look what this actually means this is probably i'm not gonna lie i don't
[02:35:30]  know if this is actually gonna have as big of an impact because when when you're dealing with like a hacker news demo and you're already so close to the to the
[02:35:38]  thing yeah like i don't know why this is a low speed index i'm blame moroku but this has a faster first contemplative paint largest contemplative paint and time to
[02:35:48]  interactive than anything that we've talked about right but i blame heroku here for this because this isn't based on any of that and and i think if this was on
[02:36:03]  well i mean we can we can see right here let's look at the let's look at the uh performance time of when this loads if it's if it's the front
[02:36:13]  loading the issue then you know it's a problem right because it's because it's sure the hell not hydration yeah look this this this this is all done by 246
[02:36:25]  like um that's 50 milliseconds faster than the solid example and 150 seconds faster milliseconds faster than the remix on a fast network you slow things down and it gets even more exaggerated but
[02:36:37]  um yeah like google just being biased like what the hell what the like what the hell does that mean anyway um can't bring can't you bring js per page with react
[02:36:49]  uh yeah sort of yeah i mean not well how exactly like you from the server you can make that decision but otherwise your client-side routing so you i guess you could
[02:37:04]  choose not to include that bundle but like the the difference is like it's yeah i mean sure you can just based on the route choose whether to include the script on the page
[02:37:21]  or not that's basically it but it's it's interesting because like and this is actually how svelte kit in that do it's just so binary like you can
[02:37:30] 't just like because in that marco page we weren't including the javascript for the page sorry to be to be clear when i when i when i went here this
[02:37:38]  when i switched here this is not javascript for the whole page it did bring in the library at that times which is why there's this bigger chunk this is marco
[02:37:46]  it's a little it's 13.9 kilobytes but the javascript being brought in for this page is literally just for the comment component like it doesn't even
[02:37:55]  ship all the javascript um is is is is is it so per page is just very clunky i mean research is being done here but generally today remix next s
[02:38:07] velte kit solid start like we're pretty much trapped to ship all the javascript or ship none of the javascript um like there's some tricks that like that
[02:38:21]  we're working on with with with with uh solid and view is doing similar things but yes if you use astro then you basically get like a portman's marco
[02:38:31]  in a sense which is fine because essentially um it's probably good enough probably but like i have a separate stream where i talked about this stuff from marco where you like ast
[02:38:44] ro has the islands and you're thinking about it and quick has the quick hooks and you're thinking about it the difference with marco is you just like write the app
[02:38:51]  and then it's presto you get this for free without even doing anything but that's a different stream off topic for this but um yeah essentially just kind of showing some kind
[02:39:02]  of different characteristics and stuff so this fundamentally changes the the characteristics of how the page loads versus versus not right mpas are just fundamentally different quick is working on kind of brid
[02:39:15] ging the gap and marco and stuff and we'll see when we get there there's a lot of really cool technologies coming out that are going to get there but like today
[02:39:22]  we basically have single page apps that know how to remove the script tag and or not and we have multi-page apps that um uh are pretty much stuck in multi-page
[02:39:32]  zone but they have ability to ship significantly less javascript with while offering a consistent javascript uh build environment yes um i will do a marco stream coming up
[02:39:44]  uh um yes and especially i want to talk like this there's so much i could talk about marco today um which is pretty crazy anyway but i actually want to do a
[02:39:56]  stream about marco 6 because you know people are getting excited about quick and they should be but i i think marco 6 will blow their minds it's like it's
[02:40:05]  like combining elements of that um with marco's compiler like svelte and just like look it's it's it's it's really incredible stuff we've taken the ideas
[02:40:15]  of resumable hydration and automatic analysis to a whole different level um so i i look forward to being able to do a stream on that as i said right now though there
[02:40:27]  is still very like hacker news is a is a perfect marco demo so to speak and maybe a less perfect remix or solid demo because like this this this is an m
[02:40:36] pa in its heart like you don't need a lot of javascript here you don't need much interaction it's you know this is a good demo for that um basically
[02:40:47]  if you're building a simple site like like you couldn't go better than marco right it's you know if you're building twitter today i i like i want i
[02:40:59]  probably wouldn't you suggest using marco you you could but like there's different right now and i think what's interesting is it's converging right like but you know which
[02:41:11]  is like the hashtag transitional apps it's just we are still pretty far away from it converging and like um if i maybe i'll use escala draw to to to
[02:41:23]  to emphasize this point um a lot of people are going to build the kind of sites with next genetics anyway if it's not the right use case oh yeah of course they are
[02:41:35]  yeah whatever i mean but and in a lot of cases it won't be that bad because the site will be simple like i i like using smaller frameworks i think svelte
[02:41:42]  kit or solid start are going to like have a key in that zone because like okay so you loaded 10 or 15 kilobytes of javascript like it's not
[02:41:50]  the end of the world you know like this this is mattering like if you have a business based on it like why do you think builder built quick ebay built marco
[02:42:03]  see see see a pattern like if you actually like if you want e-commerce if that's what you're about you want fast page speeds like yeah i i i feel
[02:42:14]  like i've already demonstrated that but but what what what i'm trying to get at is if if we have a line here in my opinion like and this is the golden
[02:42:32]  center here right like where we're like okay mpas and it's more like a range but if mpas and yeah let's it's not that it's a range if
[02:42:41]  this is the golden center where where we've merged mpas and single page apps and everything in this lovely zone right now like client-side rendering you know like the which
[02:42:58]  was like the starting point of all this stuff is here right and like rails is kind of over here right hotwire is kind of like here so yeah maybe maybe i should
[02:43:18]  use labels and stuff while i'm doing this but you know so what did i say rails um csr hotwire you know marco six and quick are like here okay
[02:43:52]  quick marco six are like here and okay let's put some lines over here this line here is like um next.js and this line here is like svelte
[02:44:34]  kit remix i'll start so like in my mind this is like like there's some view and some stuff in here but my mind this this is this is sort of like
[02:44:51]  where the spectrum is sitting like like there's this idea of this transitional perfect app here and like like the gap here is like this and we're like on the solid s
[02:45:10] velte side or like like way over um not even like halfway yet and um they're just we're all gonna get there but it's some some before others if that makes
[02:45:21]  sense um to be fair next.js has been moving the line sideways so they're they're they're they're coming right up next to to us over here and so
[02:45:31]  i'll start remix svelte kit zone a little bit like but you you start you kind of this this is the spectrum from my perspective of what it's going to look
[02:45:41]  like because we we're seeing a mad rush towards the center and um it's just i mean the the tricky part that that i had and i'm sorry i i i
[02:45:54]  i i'm a huge fan of rich harris and all that stuff is he basically did this and it was like um hashtag transitional apps sorry i i missed a line on
[02:46:29]  this side astro is is right sorry astro i missed astro um and aisles and all them they're like right here let's use black yeah they're they
[02:46:51] 're like right here astro and aisles and stuff they're right here okay so um let's move this so it's a little bit more readable okay so here's our
[02:47:10]  here's here's our here's our spectrum okay this this is just this is just this i i i don't didn't mean to be like mean or call sound this is
[02:47:21]  just why i found like the i had to say something about the transitional app stuff because you you have you have basically these frameworks that are sitting here looking at this mountain it's
[02:47:31]  right in front of them like oh man this is a big climb like it's like it's it's humongous right like let's let's let's let's
[02:47:41]  draw a mountain right um so we have this big mountain right and and you know whatever so you you you have you have like astro and marco all kind of like
[02:47:56]  sitting here um you know looking at the base of this mountain going how are we going to climb this mountain and what you have on the other side here is looks kind of
[02:48:09]  like this um and maybe this dip is a little bit unfair like maybe it's more like like that and and so let's let's put our guys on here so this
[02:48:31]  is this is this is astro and marco and all that here and then this right here is is like solid start and next js and svelte and they're just
[02:48:44]  below the the peak of the mountain in front of them and they're like oh once we get here it's that mountain right there so they're picturing like like this
[02:48:56]  they're like picturing that there's this like i'll just get over here and it's just a little bit higher over here but reality is it's like this it
[02:49:05] 's like a it's it's it's like a it's like a it's like it's a it's like it's a lot farther than it looks like um i
[02:49:12]  mean this is kind of a silly visualization but this this this is in my opinion what the what the state of things are these guys are just like wow this is going to be
[02:49:24]  really hard i don't know how long it's going to take this is going to take a lot of work but they see the mountain this side is like they see the
[02:49:34]  mountain but they they don't see the the ravine between them and the goal um i hope that makes sense to people but this is just this this is just my my take
[02:49:46]  on things i didn't i honestly didn't draw this in the article i'm just saying like there is a long way to go um and i think it's awesome that we
[02:49:55] 're climbing the mountain because the truth of matter is a couple years ago we we were down here right collectively in javascript land we're down here and we're just
[02:50:07]  like we weren't even looking that way like oh there's some mountains over there like screw that mountain we're we're just playing here right right and i think it's awesome
[02:50:20]  like this is still a steep climb like i think i think this i think this this this this growth you know i think doing this is is is is amazing but like the
[02:50:34]  we we just got we got we got we got further to go so hopefully people can appreciate my my my terrible drawings but um you know it's okay um if you want to
[02:50:49]  you might be like oh well crap what's the next new framework that i should learn or whatever and the thing is it's okay that not everything has to live here or
[02:51:01]  live over here or leave over here like it's perfectly fine that you're like oh i'm going to do something over here and oh i'm going to do something over here
[02:51:10]  it's it's it's it's perfectly okay you don't need to um to to like absorb the whole space but you know everyone's looking for the the the there
[02:51:25]  must be one kind of thing i just i just think it's it's it's it's it's it's okay but yeah this is my perspective i'm sure people
[02:51:34]  will disagree but this is my perspective i know anyway that i was trying to do shorter streams but this is this is this this ended up being a longer stream um again so um
[02:51:45]  thank you um for joining i'm going to give people like one last chance to ask any questions or whatnot but i think i already made my my long tangent on on on this
[02:51:57]  stuff um but you know i know sometimes people are kind of interested in these topics so i'll give them a chance but yeah i mean a lot of exciting stuff going i
[02:52:10]  mean as long as we're climbing mountains exciting stuff is happening um okay sure i'm going to do this more in detail on a future stream but quick answer to this is even
[02:52:25]  when marco 6 first comes out we're going to have partial hydration we're going to have um aced and handling all that stuff lazy loading is going to take a little
[02:52:40]  bit more work even though the the approach to resumable hydration would allow for out of order hydration we're going to need to find out figure out ways to manage lazy loading
[02:52:38]  and actually develop techniques like if we do want to do partial client-side routing or whatever we're going to actually have to build stuff to leverage it right like marco
[02:53:03]  6 will have the technology that's what i say and quick it's the same reason why quick isn't in here quick can technically already do that like it can already like start
[02:53:14]  as a multi-page app just load the code you want navigate to new page and then load that page do it all clients it already has a way to actually transition but
[02:53:23]  you need specialized routers to handle this you need um you need basically a way to mitigate um lazy loading and not death by thousand cuts like quick has an optimizer that the
[02:53:37]  they're using to figure out how to bundle stuff it's really interesting i didn't get to talk about this last time but they they actually have set it up so they use
[02:53:43]  your own analytics to figure out how to code split bundles based on how users click on your website um and that's fine for the basic case but the problem is you
[02:53:53]  you have to be what if you click to a whole page that needs to be re-rendered from scratch the way quick split up depending you might need to load i don
[02:54:01] 't know like hundreds of javascript bundles so figure out the the best strategies and ways to automate that and like handle those different scenarios is what's going to view
[02:54:11]  the game and you're either going to look at doing it you know manually which is incredibly hard this is what what you know it's something like astro might not make that
[02:54:21]  climb ever um you're going to look at compilers which will automate it for you which is what marco is looking at or you're going to look at analytics data
[02:54:30]  which is what quick's doing but as i said you when you go to actually navigate to the next page you kind of got to figure out how to approach this and the
[02:54:39]  thing is quick's approach is hyper lazy loading so what that means is like you need to like it's sure you can split stuff apart but then you can bring stuff back together
[02:54:53]  if you want so don't split as granularly but it's their decision of how to split stuff is based purely off usage off lazy loading like they don't know a
[02:55:02]  component will never load or if it needs to be loaded or all that stuff whereas like the compiler approach you know it's taking the opposite thing it goes okay we know exactly what
[02:55:13]  javascript we need but we don't know when we need to load it um so ultimately when you want to make the transition from multi-page app to single page app
[02:55:23]  i personally believe that knowing what javascript you need will be more important than the lazy load thing because when you are faced with a new page um and you know not
[02:55:36]  and like like you you need to it would be better if you just ship the least amount of javascript you needed to begin with rather than like death by a thousand cuts
[02:55:47]  um essentially so like i think there's gonna be a happy balance but quick might not know how to put the pieces together um in a way that works for single page apps
[02:56:01]  is essentially um the thing because at least version right now i'm pretty sure they're going to move to compiler stuff if you've seen mitosis you know that that there's
[02:56:10]  people there who knows who know how to handle compilers and and stuff like they've they can take a react component and almost change into any framework so i i see it
[02:56:19]  coming but i think it's the same reason i think the core technologies are there to make the transition on that side they just haven't figured out how to apply them and
[02:56:28]  when you i think about that that's why i know that the single page app side is even further because the single page app side is just they they don't have that
[02:56:37]  those kind of smarts um right they didn't they didn't build it into their systems at all um so like it's just it's a longer journey um so as i
[02:56:48]  said um this i i know what the pieces are i don't know how they're going to come together in a marketable product way necessarily i'm making some you know
[02:57:04]  hedges with with marco i'm not even sure if this center zone like it might be everest like i'm i'm not even sure if we ever completely get
[02:57:14]  there in in the way completely thinking like maybe maybe we borrow something from hotwire like or react server components we end up kind of that is the strategy but like it's there
[02:57:29]  all i'm trying to say is that there needs to be more than the core mechanisms for for us to get there the mpa libraries have the pieces to make sure that
[02:57:43]  we can basically serve the minimal javascript to begin with but have a hard harder time transferring so like as i said just maybe both sides will eventually learn from each other that
[02:57:56] 's the best we can hope for but i i don't think i don't think that i don't think we'll realize this centerpiece like in the next year it's
[02:58:06]  going to take longer hopefully that answers the question and i hope i um haven't rambled too long i'm i i think i think there's a lot of potential here so
[02:58:17]  um that that should be the real takeaway i think i think i don't know if this should be the goal is one of is is the other side i i think it's
[02:58:26]  good that we're all working towards this to make the web better and maybe in the middle there is like that golden like this is the solution for the web um like the
[02:58:35]  the one but i don't think that should stop people from innovating and using tools to make sense for them for their use cases is the thing like we will be waiting for
[02:58:45]  quite some time to get there i just want people to understand that these things are still moving and the definitions and stuff are still loose like i'm sorry for javascript
[02:58:55]  fatigue i'm sorry for you know people getting tired of of this stuff um and wanting stability but like this is new territory when people go oh reacts discovered php or rails
[02:59:11]  or whatever no like look at my graph here that's that's that no one's even we're not even talking about that that's outside of the that's that's outside
[02:59:19]  of the box you know um the the the the real thing is that you know it's somewhere here in this middle maybe we never fully bridge the gap but that's what
[02:59:31] 's going on anyway yeah i've yeah but still this is what most people have had at the end of the end of a stream um i'm i'm gonna go i'm
[02:59:45]  i need to save some material for next week so uh let's let's have a good night and uh um till next time uh keep keep an open mind all right see
[03:00:00]  ya