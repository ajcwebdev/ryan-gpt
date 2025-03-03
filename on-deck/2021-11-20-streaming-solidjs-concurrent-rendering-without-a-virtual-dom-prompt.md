---
showLink: "https://www.youtube.com/watch?v=Hdc5QqPfFH8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS: Concurrent Rendering without a Virtual DOM"
description: ""
publishDate: "2021-11-20"
coverImage: "https://i.ytimg.com/vi/Hdc5QqPfFH8/sddefault.jpg?v=619818b5"
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

[00:00:00]  Hello, welcome to the stream. I realized watching some other streams this week that I should have some like cool intro music or something while waiting for people to join on and
[00:00:14]  make everyone else wait. And then when I actually start, instead of me having this ramble that I like to do at the beginning of every single stream, I've been
[00:00:22]  actually thinking about the way I approach streaming a lot. Obviously, when I got started, I just got the cheapest stuff I could possibly put together and, you know,
[00:00:31]  go with that using StreamYard and whatnot. But maybe at some point, I need to actually get some better equipment here. And I've also been thinking a lot about
[00:00:38]  the format. I've been doing a lot of three hour streams, really big deep dives. I think you probably benefit from being a little bit more focused, maybe make
[00:00:45]  the streams a little shorter. So we'll see how that goes. I have a tendency to want to answer every question someone throws at me. So, you know, we
[00:00:53] 're going to try our best here. But I'm just come say hi in the chat if you're here. I'm just going to get started in a minute to
[00:01:02]  give some people some chance to join on. pretty excited to kind of show off what I'm showing off today. I've been meaning to make a demo like this for
[00:01:24]  a while. And I suck at 3D. And for some reason, all the demos seem to be in 3D. I don't know why. You know, everyone
[00:01:31] 's doing these crazy 3D demos, and I'm just not the best at 3D. Hey, welcome. Awesome. Got some people coming in. Yeah. Yeah
[00:01:49] , I'm not going to wait much longer here. I'm just going to dive right into this week in JavaScript, I think, before we get much further. So
[00:02:05]  when you start every segment, usually just going over my Twitter feeds, usually there's a lot of stuff going on, you know, surprisingly, but this week, I don
[00:02:15] 't know, it was kind of, it was kind of, it was kind of, it was kind of calm. No, there was huge news. React 18 is going
[00:02:24]  to beta. And while that stuff might not affect everyone, because, you know, beta, you know, I'm pretty excited about this, because you have to figure
[00:02:34]  React 18 has been coming for a long time. I know 17 only came out last year. But realistically, React 18 has been, you know, the promised thing, since
[00:02:43]  basically React 16, they knew the second that they released at 16. So you can imagine they knew maybe up to a year before they released React 16, that they were
[00:02:51]  starting on a journey that's going to take React in a completely different direction. And, you know, I'm not going to like dwell too much on the features today for
[00:03:02]  this, because obviously, many of you are already kind of familiar with them, partially because they've been coming for such a long time. And also, because if you've
[00:03:11]  been using solid, you've been using many of these features for the last two years. Okay, that was a little bit of a snipe. But in general,
[00:03:19]  though, yeah, this is really exciting stuff. And probably my highlight for this week. I mean, this isn't React server components for people, you know, might get
[00:03:31]  confused. This is mainly around streaming and suspense and kind of unifying the story between server rendering and client rendering. This is all part of a single story. And once
[00:03:44]  you realize that suspense, which we've been kind of using a little bit for a couple of years now with React and lazy components actually started as a mechanism for streaming, like
[00:03:53]  it was there, that was why they developed in the first place, you start picturing how this whole big puzzle kind of came together. What else is big this week
[00:04:02] ? Netlify raised a Series D with $105 million. That's another deployment target. You know, I think Vercel raised something similar, was it a
[00:04:15]  Series C or something not that long ago, we're seeing hundreds of millions of dollars going into these deployment platforms. I mean, this is this is a hot area. And
[00:04:23] , you know, yeah, this is only going to grow. For Netlify, you can see that they've been doing acquisitions and you can see like,
[00:04:32]  like, that they're looking to really expand their offering and make things easier than ever. And that's pretty exciting. a few other things come maybe more kind of gloss
[00:04:47] ed over Tanner Lindsey kind of start pushing new react location or a router based on the the was it the tan stack that he's been building? I think it's interesting.
[00:05:00]  It had a really put a focus on the search parameters and or query part of the routing, which you don't actually see in many other routers. It's kind
[00:05:11]  of interesting because we had react app router a couple weeks ago, too. And, you know, remix is going to be open source to believe this coming Monday. So like
[00:05:20] , we're seeing this movement here. And even with react 18, there's a there's a lot of different ways you can create a react app and approach it mentally because
[00:05:30]  I was actually bugging the guys kind of like poking at the react router guys, because I was trying to like, how do you solve this problem that I've been
[00:05:36]  trying to solve with solid app router around basically preloading and all that stuff because we have parallelized fetching just and nested routing just like react router, except streaming
[00:05:49]  makes things a little bit more challenging. And and, you know, basically, I found out my answer, remix and react router are not actually even don't care about
[00:06:03]  suspense or that whole mechanism there. They preload stuff before you do any rendering. That's their recommended way. I thought it was interesting that Tanner's router had the similar
[00:06:16]  nested routing, but also has the non blocking suspense aware approach that we were doing with our router. So like these different things but then like react query is kind of
[00:06:27]  perhaps a bit at odds with the way that transitions work in terms like SWR might not be the best pattern. So like, we're going to see some interesting different approaches
[00:06:36]  to these kind of meta frameworks before this all kind of boils down because I said reacts definitely kind of going one way. Remix is kind of over here, maybe 10 stacks
[00:06:45]  kind of down the middle, you know, and that's not to mention how next.js or all the other stuff comes in. But anyways, I've been talking
[00:06:51]  a lot of react here. That's because you know, that's where a lot of the interesting news has been. You know, beyond that this week has been a lot
[00:07:00]  of just how should I put it a lot of just the Twitter noise. Dan Abramoff did a AMA, which I thought was really interesting. And of course,
[00:07:12]  someone asked, Do you see solid JS as a thread? Luckily, he didn't answer because I honestly, to hear Dan answer that I'd probably be a little,
[00:07:22]  you know, but I fielded that one and basically explained how every framework has its own merit on its own purpose. And even if they have overlapping features, it's not
[00:07:30]  like they can, especially with the case of salt, we can't just supplant react because we aren't actually the same as react. But probably the biggest conversation for
[00:07:40]  me, this week was, was I, you could you could hear it in my voice, I was kind of a little bit exasperated. There's a kind
[00:07:50]  of continuation of, of, you know, these conversations that have been going on, like the one that happened last week about react hooks and versus felt and all this stuff
[00:07:59] . And, and someone was like, um, you know, if you really want a new paradigm, no virtual long, but with hooks and immutability, look at
[00:08:09]  solid JS. And then Paul Henschel, creator of react three, and also kind of the voice behind all those 3d demos, like the cube demo that first got
[00:08:21]  me onto Twitter in the first place. I was like, "Without a VDOM you lose the ability to schedule. The VDOM solves most critical bottlene
[00:08:28] cks on the web load. React is not beholden to it. It can go beyond the DOM. Without the VDOM you can't. 50 milliseconds per frame,
[00:08:34]  slow paint, a slow DOM is the baseline of the horizon." And I just, I I'd had enough. I just called him out on it. I said, "
[00:08:41] This is simply isn't true. I wish you would stop spreading this stuff like you know about non-VDOM architectures." And that's a little harsh, admitted
[00:08:49] ly, but this is not the time we've had this conversation and responding directly to something about solid to say basically what we can't do. I'd basically add enough
[00:08:59] . We, this goes on for a thread where I literally explain like, uh, where is it? Yeah. Like it just keeps on going. Like he asked this
[00:09:10]  question and that's what I'm gonna actually, if you get served a hundred thousand items would solid render as much as it can before the framework thread and then either defer or
[00:09:19]  keep existing nodes or not scheduling react events. That does not sound like what reacts doing. And I go on to explain this. And honestly, after writing all this,
[00:09:28]  I felt kind of terrible because I was like, man, no one's going to like this explanation. In fact, I tried to explain this, um, at my React
[00:09:35]  Finland talk. I don't know if any of you have seen this. Uh, how does the term concurrent rendering make sense here when you directly update the DOM? And do
[00:09:43]  you somehow store effects to apply? Yeah, actually the truth matter, this is all queuing and scheduling behind the, behind it. One of the biggest innovations, I guess
[00:09:51] , with solid on the side is that the reactive, like react has fiber internally. So you have all these fine grain little, uh, updates. Solids hooks are
[00:09:59]  already fine grained. So we can just go, Oh, this is an effect and you're in a transition. Just, you know, stack those off and to them
[00:10:08]  when, when, when the pure computation part is done, right? We do, uh, the fetching, like say the resource fetching. I'm going to cut
[00:10:15]  myself off here. And we wait, cause honestly, no one understood this explanation. See Paul, Paul, here's Paul in the background, still not understanding this explanation
[00:10:22]  clearly. So, um, clearly I did a pretty poor job at explaining it. And that's why I wanted to do this stream. I wanted to really show, um
[00:10:29] , how we can, we can do it because like, Paul's not the only one, um, uh, block DOM. If you've, if you've heard of
[00:10:37]  recently, I kind of promoted it is a really fast virtual DOM. The fastest that I've seen, they actually use the same cloning technique we use in solid. And
[00:10:45]  if you go to like the JS framework benchmark, yeah, why not? Let's, let's just pull this up for a second. So you can see what I
[00:10:50] 'm talking about. Um, they're like, we're, we're neck and neck with these guys, like, or for this framework, like look solid blocked on 10
[00:10:59] 6, 106, like literally next to each other, like pretty much tied. I mean, blocked on actually averaged out, I guess, like fractions of millisecond
[00:11:10]  ahead to, to be ahead here, but essentially the exact same performance that solid with a virtual dom. And I always knew this was going to happen because let's face
[00:11:18]  it. Virtual doms aren't innately slow as much as people would tell, might want to tell you, but again, there's this little blurb here. Why
[00:11:26]  would you need a versus on the first place? Well, it depends on your needs. Clearly some framework can do very well by using other strategies. However, some frameworks such
[00:11:32]  as react and owl with their concurrent model need the ability to split rendering processes in two phrases. So we're choosing to commit a rendering or to commit a rendering or not
[00:11:40] . Some reason is no longer useful. In this case, I do not see how to proceed without a virtual mom. And yeah, the, the, in terms of perhaps
[00:11:48]  getting rid of a render, that's no longer useful. Yes. Virtual dom is useful, but in general, it's not, I I'm going to show today that
[00:11:57]  current rendering doesn't require a virtual dom. Um, you know, I, I have enough experts telling me that this isn't the case, but this is not the
[00:12:04]  first time people told me JSX wasn't, um, analyzable that you couldn't, you know, like you couldn't do, um, compile time away framework
[00:12:14]  thing with JSX. Um, they're wrong and they're wrong about this. So that's what we're going to, that's what we're going to look at
[00:12:20]  today. So, um, what I'm going to do first, because I know, uh, obviously I could, you know, explain how all this works, but
[00:12:32]  that, and I will, but that's a little bit much. You probably want me to start with the demo, right? Let's, let's, let's see
[00:12:38]  what the hell I'm talking about. Right. Um, and you might have seen some similar demos before, but I'm gonna, I'm gonna jump over here. One
[00:12:48]  second. Let's, let's throw, let's throw something up here. I started using these banners. They helped me divide the video later, but let's
[00:12:57]  look at our demo here. And the, what I did was back in the day, one of my favorite demos was, um, this demo by Jeremy Ashkenis,
[00:13:10]  um, which, which is called the circles demo. I think I showed this during the benchmarking, uh, the benchmarking, um, stream, but I mean
[00:13:20] , there's not much to this demo. You can see there's some circles animating. It probably comes in a lot worse over the stream, but there's some
[00:13:28]  circles and there's some numbers and there's some colors and they move. And reason I choose this demo is because, I mean, it's a little bit shaky here on
[00:13:40]  the screen, stream with me all zoomed in, but if I up the number of circles here, it doesn't really, I'm not really straining the rendering much
[00:13:50] . Like let's go up to 500. Like it can, it can handle this right back in the day. This was actually pretty hard to handle this many circles,
[00:13:59]  the processors and the computers and the frameworks, the JavaScript weren't, weren't that fast, but today we can handle this pretty easily. Right. But I'm choosing something
[00:14:10]  like this because it's, and I'll get into this more later, no amount of scheduling can make up for slow hardware. Okay. That, that, that is
[00:14:20]  the, that is rule number one and why, um, I think that in terms of like our approach to solid, isn't really compromised by not having a virtual bomb.
[00:14:30]  Okay. So, uh, anyways, yeah, obviously we can easily handle this, but let's do something a little bit more fun. This, this example, just
[00:14:38]  for people who want to kind of dive into it to understand a bit more what it, how it works. Um, and I, I can just, I'm going to
[00:14:47]  post in chat here in case you just want to see this basic example, although I'm going to do more work on it as we go. Um, but here we go
[00:14:54] . I posted in chat, um, essentially and this might essentially what, what's going on here is we have our app and in our app, we have this,
[00:15:08]  I use some pretty poor naming here. I apologize, but essentially this S is the number of boxes. This C is the count that's going on in the middle. And
[00:15:18]  then these are the actual boxes themselves. And then we have an animation loop where we just animate the boxes on ticks. And then we have an interval, a separate one where
[00:15:28]  we update the count in the middle. And this, I took, I kind of modified this to kind of resemble, um, this Piersky's, uh,
[00:15:36]  triangle demo, which, um, in that demo, essentially the, the number is separate from the animation. It's just trying to show you, you know, maybe some
[00:15:46]  heavy calculations are going on and you need to show that, but it's less important than keeping the animation smooth. And our animation is very simple. It's just using
[00:15:54] , uh, sine and cosine to kind of spin it in a circle based on some global counters. So essentially this, this is a pretty simple demo. And as I showed
[00:16:03]  you the, we can handle it no problem, but let's make this more fun instead of props dot count here. Um, let's change this to a memo that
[00:16:18]  adds a slowdown. And if you saw my previous stream on some Piersky's triangle, this should be fairly similar looking. And what we're going to do is
[00:16:25]  it, see now, see, I'm using terrible naming. Let's call this, I don't let's call this count so that it's actually a little bit more
[00:16:32]  human legible and let's change this props count now to account function. Okay. There we go. And let's refresh this just to be sure. Thank you code
[00:16:43]  sandbox. Okay. Now nothing much changed. It's still going. Well, that's because there's only 20 of them. Let's do 50. Yeah. Still good
[00:16:50] . Let's do a hundred starting to glitch. Let's do 500. Hopefully you're seeing it glitch now every time it turns essentially. And, um, this is
[00:17:08]  kind of what happens to your app when you have like a lot of, uh, calculations going on, right? We were, this is simulated, but essentially we're,
[00:17:18]  we're doing something really expensive that we're calculating in the app. It has nothing to the rendering. The thing can render itself fine. It just can't handle this.
[00:17:26]  Every time it goes to update the number, this count, it's interrupting the, the animation because it just can't, it can't handle this. So, um
[00:17:33] , I've enabled scheduling in this example, this whole topic that we're doing today is behind an opt in flag because it basically costs an extra kilobyte of JavaScript.
[00:17:43]  And I don't want to impose an extra, like, I think it's a little more, maybe one, 1.5 kilobytes of JavaScript on people who don
[00:17:50] 't want this feature. So you can simply just, if you don't call this, um, rollup is smart enough to code split all the concurrent rendering, uh
[00:17:58] , not just current rendering, but the concurrent scheduling right out of the core automatically for you. So by, if you import and call this function, it adds the JavaScript.
[00:18:07]  If you don't, the JavaScript is automatically, uh, tree shaken out. And honestly, for people to tell you that tree shaking like is whatever. This is,
[00:18:15]  this is a prime example of the power tree shaking. Now what we're going to do now is let's see if we can make this better. What we can do is
[00:18:24]  we can lower the priority of the count in the middle here. And the way we do that is back here where we set this interval and update the count. We can,
[00:18:32]  we can put this in what's called a transition. And this is should seem familiar to anyone who's used react because it is the same API. We just go start
[00:18:43]  transition react now. Thank you code sandbox. Okay. So what you're going to see here is again, but let's jump straight to 500. Oh, it's,
[00:18:54]  it's, it's now smooth. The numbers are updating and we're not doing it. And the reason for this is we have actually lowered the priority of the count
[00:19:04]  and it's being rendered off screen. We'll, we'll explain that more in a minute here, but now the updates are fine, but this wasn't Paul's question
[00:19:11] . Paul wasn't asking if we could update like this. Paul was asking if we could handle load. And if you look at this, we, this is not handling load
[00:19:18] . When I go to 500, it's going to freeze for a second. See, watch pause, even going from 20 to a hundred, uh, my, my
[00:19:29]  M one is fast, but to 500, you can see that pause, right? Hopefully everyone can see that pause. Okay. Actually code sandbox is doing some garbage, but
[00:19:40]  okay. Let's go here. Bang. Pause. And it continues. Hey Theo. Yeah. So what can we do about this really annoying pause, right? We want
[00:19:53]  our animation to be smooth. Even when we just dump hundreds of things on ourselves with heavy computations. Well, the answer is where do we do that dump? Oh
[00:20:02] , here on the, when we change the select, well, guess what? We can wrap this in a transition to start transition. And let's see what that does.
[00:20:16]  Okay. So thank you code sandbox. Now watch what happens when I jumped to 500. It didn't jump to 500 right away because it had to do all that work
[00:20:26] , but it did when it was able to, but let's watch this again. See the animation never stopped. It did the processing in the background as it could. And
[00:20:37]  then it showed the rest of the circles as it was able. And that's kind of why people are excited about this concurrent rendering. This, this is not 3d
[00:20:46] . I'm sorry. It's not as cool as, as 3d, but this, what I've shown is if, is I've taken this slow down where we
[00:20:55]  were basically every single update and every create, we're putting on almost attacks of a second. I think trying to think of how much processing here. Let me look here
[00:21:08] . I just stole this in Sipiriski's bench. I guess it's not that much, but we're, we're putting this tax on every single cell
[00:21:15]  here. So every time it's created, every time it's updated and by setting transitions to say that, Hey, when we add boxes, that's lower priority. And
[00:21:23]  when we, uh, update the number of the slow priority, we're able to do this smoothly without interrupting our animation. Even if it takes a little longer, we
[00:21:31]  don't care if it takes a little longer, right? If you're going from 50 to 500, like it's okay. It takes a little bit longer, but nothing
[00:21:39]  is interrupted. And that is essentially that's the demo. Like that is, um, current rendering. Watch, I'll go back. I'll, I'll turn off
[00:21:49]  scheduling for a second and show you, show you one more time, the difference let's go from 20 to 500. Okay. No, sorry. Okay. Maybe,
[00:21:58]  maybe let's see if I can sometimes. Yeah. Yeah. Here we go. Watch. This is what happens when you don't have the scheduling now. I now there
[00:22:10]  there's a, there's a few schools of thought here, obviously, but because react has this feature solid, has this feature free blocked on or owl. And a few
[00:22:26]  others have this feature, but why, but view and the preact opted out to not have this feature. And the main reason is, and this is kind of explain
[00:22:40]  it's only this can't change the speed of your hardware. What we're reducing is the cost of this expensive memo. That's just cascading. And, you
[00:22:49]  know, you know, like, let's see if we can stress this a bit more. Maybe we should make the drop down also go to, look, look,
[00:22:55]  can we, can we add, let's, let's stress this thing a bit more. Let's, let's add, let's make what 20,000. Let
[00:23:03] 's see if we can do 20,000. Um, okay. Let's refresh. Okay. 20,000 is too much for, for code sandbox. Okay.
[00:23:19]  Let's try 10,000. See, it's slowing down now. I'm hoping that it actually completes eventually, but what I'm, what I'm, what
[00:23:36]  I'm getting at is we're, we're hitting the limits of the hardware, no amount of scheduling, it doesn't matter what framework you're using is going to get
[00:23:45]  past the limits of the hardware. Um, cause like, even if we, you know, turned off, if we like, this will eventually pop in probably, but
[00:23:57]  even if we turn off scheduling, turn off, slow down. And I probably see if I can get this. If we turn off scheduling, turn off, slow down.
[00:24:08]  Like this is this, the hardware just can't handle this. It's just too much processing. Um, and, and that's just, that's sort of,
[00:24:20]  that's, that's sort of what my point is here. And we'll, we'll, we'll understand this more as we get into the details. So hopefully anyone
[00:24:26]  have any questions about the demo so far? This, this, this essentially was what I wanted to show this. This basically shows how we can basically handle expensive workloads in
[00:24:40]  the background without interrupting the main processing using fine-grained reactivity and no virtual bomb. Okay. No questions so far. Okay. That's fine. Um, let
[00:24:53] 's, let, let's kind of, uh, let's kind of scoot out here. Cause I'm going to start a little further back to kind of explain what's
[00:25:01]  going on here and I'm going to start this a bit because I keep on focusing on, on the fact that we don't want, or that the hardware, sorry
[00:25:15] , doesn't have any effect on, on this. And the reason is because we want our execution to be glitch free. This is very, very, very important. And
[00:25:26]  why, why the scheduling is special. Okay. So let's talk about glitch free for a minute. This is a stupid example, but I have, I took the
[00:25:40]  solid playground and let me, let me blow this up a bit so everyone could see it a little better. Um, I took the solid playground. This is like the standard
[00:25:48]  counter that we probably use on like every single thing almost, because I made one difference. Now there are two signals. There is a and double a, and a times
[00:25:57]  two equals double a. And to no one's surprise here. Um, if I click this button, two times two is four, three times two is six, four times
[00:26:08]  two is eight. It's consistent. Right. And you know, that's what, that's what, that's what we use UI libraries. No big deal,
[00:26:19]  but let's, let's do something a little bit more fun here. And this one, I kind of want to get at, let's, let's put a time
[00:26:25] out around setting double a. You can do this with fine grain. I've shown before how every cell, every text thing is like handled completely independently. So you don't
[00:26:35]  have to worry about this, but let's, let's, let's, let's delay it by a second. Okay. So now when I click it, sorry
[00:26:43] . Refresh this. I click this. One times two is two until it's not. Okay. Sorry. Something a little bit weird. Why is this not updating?
[00:26:54]  Sorry. Let's, let's see why this, I was doing this a ton earlier. Let's just refresh. Oh, duh. Sorry. It's funny.
[00:27:16]  Cause I, I had this all set up earlier. One thing we have to watch out for obviously is in a timeout. We don't, we don't, we
[00:27:23]  don't have the reactive tracking, um, in the scope. So yeah, sorry. See second two times two is two. There there's, there's a certain
[00:27:32]  time period before the button updates to the result. And during this time period, it's inconsistent. Now, obviously you're like, well, it's async. Of
[00:27:40]  course it's inconsistent. Um, but what if this is a price? What if this is some, some calculation? You don't want to take something as a source
[00:27:50]  of truth when it's not. And, you know, let's see what happens. I do like this. Yeah. It's funny. It's delaying. Yeah
[00:27:58] . Let's, let's actually make this still read from a anyways, just for the sake of it. So that if I click it fast, it just jumps to the
[00:28:04] , where it is. Yeah. Okay. Cool. So essentially, once you introduce this kind of timeout, things are no longer consistent. And this, this can
[00:28:19]  be problematic, as I mentioned, because you know, if you have things relying on the consistency of your system, you like, this is the easy job. Like if you
[00:28:28] , if you've seen, um, like, I think I've shown this demo before the, the one with the, uh, the cubes, you know, everyone's
[00:28:35]  seen this silly demo. Um, like there's real hardware constraints, you know, when, when like, sure up to, you know, where let's, let
[00:28:45] 's start over again, sorry, up to like, where about 3000 blocks or whatever, we're at 60 frames per second, using solids around these cubes. But you know
[00:28:55] , when you get up to like 8,000, you know, it's, it's, it's a lot lower. We're only at about 20. There's
[00:29:02]  real hardware constraints. So how do you, how do you get around it? Well, one thing you can do is only update half the blocks half the time, right
[00:29:10] ? Make them jump further, right? Kind of alternate your processing. Um, and that's kind of like that timeout that I was showing you, you can, you
[00:29:17]  know, do some, or maybe when you're adding blocks, you know, don't add them all at once, add them in chunks, but you will visually see
[00:29:24]  the tearing. And that's, that's, that's essentially, that's essentially what, what I'm showing here. Like this is, this is tearing 14 times two
[00:29:32]  is, you know, sorry, let's start over again, like six, nine times two. Okay. You can see that delay, right? Um, what the,
[00:29:43]  what, what concurrent rendering aims to solve is, is being able to delay this stuff, but not cause any tearing. And the way it does that is it just doesn
[00:29:57] 't do the side effects essentially. So if something's heavy on the hardware, like the rendering, well, concurrent mode, isn't going to help you because essentially it's
[00:30:09]  just going to do all the calculations. And if those calculations are dirt cheap, when it goes to render it, it's still going to get snagged. You
[00:30:15]  just, you just told it to render later. So you just slowed everything down, right? You, instead of blocking earlier, you're blocking slightly later, but essentially,
[00:30:24]  um, that's all it's doing. And, uh, it's, it's super important to understand that detail. And I can, I, at the, at
[00:30:37]  the React Finland talk, I actually kind of showed this slide here. And I, I think this might help kind of understand the similarities and the way that solid can work
[00:30:50]  very similar to React. Because all actions start with some kind of event, some kind of action. Someone clicks a button, someone navigates somewhere, someone tries to do
[00:31:04]  something, but you know, on the React side that, you know, we've all seen this, you set state, then you have this part where you do the pure
[00:31:15]  computations in React, which is actually the rendering in React. The whole render functions are pure. They're not supposed to have side effects. You can call it use a
[00:31:22]  fact, but that kind of gets stashed away to happen later. Essentially, they are confident that they can run your React component as many times as they want without any
[00:31:32]  side effects. It won't affect the outside world. So they can build it, throw it, take it down, do whatever they want. Then afterwards, they take your
[00:31:42]  tree and they diff it with the previous tree and they apply those changes to the DOM, right? And then finally, they run those effects execute up. And the thing
[00:31:55]  is in Solid, and I know this is a repeat from my previous thing, is like, we have the exact same steps. The only difference is every step is expressed by
[00:32:06]  a specific primitive in Solid. So, you know, I showed Create Memo there. Like, that's where you're doing your calculations, right? In Solid, everything
[00:32:15] , the components don't rerun. So all the expensive computations, all the logic you're doing, they're going to be in hooks. And those hooks can
[00:32:23]  run purely as long as they're not the effect hooks. So what actually happens in Solid, as I've showed before, is our rendering is also just an effect hook.
[00:32:32]  So from that perspective, like, if you have like a reactive graph, maybe, and, you know, you have, you know, a signal, right? Like
[00:32:42] , let's, let's make this, yeah, because I don't really care. Maybe fill it in green. And then that signal has, you know, maybe some
[00:32:53]  memos or whatever that listen to it. Let's add things. So let's, let's add a couple of these suckers on here. Essentially, and,
[00:33:05]  and if we go even further, and maybe there is some effects that listen to those over here. So you can see my awesome Scalo draw skills here. You know
[00:33:26] , we can draw, we can draw some arrows in black, why not? Essentially, like, go there, and maybe another arrow from here to here, and another
[00:33:39]  arrow, maybe this arrow goes to here, maybe this arrow goes to here. Who knows, maybe this arrow goes to here too, right? My point is, we've
[00:33:50]  got this kind of graph going on with the React system. And we have these signals. And then we have these like memo computations. And then we have these, these
[00:33:59]  effects. And sometimes even this goes all the way to, to, I probably wouldn't go through there. But sometimes this, this goes directly to, to, to
[00:34:11]  here as well. So, I mean, there's a few things, but what essentially happens is when we know, we have a couple of buckets down here, we have
[00:34:21]  bucket here for, I'm going to call this the effects bucket. And then we have, we have bucket here, which, which, oh, sorry. I gotta
[00:34:34] , my Excalibur skills are lacking. We have bucket here, which, which is, okay. So we got our, our computation, our effect bucket. So
[00:34:45]  all that ends up happening is when, when you update the signal here, it goes, okay, well, I'm, I'm going to notify these guys that they're
[00:34:55]  going to update or potentially update. There's a little bit of a game here that it's, it's either they, they're either will update or could potentially update
[00:35:03] . And, and then, I mean, these ones are going to notify these ones as well. And all we do is while we're queuing, we just go,
[00:35:08]  you go in this pile, you go in this pile, right. You're like, okay. Uh, you know, like, let's give it a dotted line
[00:35:15] . Like, okay, you go here and you go here and you can tell they're already color coded. They know where they're going and you go here and,
[00:35:31]  and, and so on. Right. And I mean, this is, this is pretty simplistic, but you can immediately see, we've got two queues going. And
[00:35:40]  then all we have to do is when we're, when we're running under a transition, we just go, okay, well, don't run these until everything is done
[00:35:51] . Don't, don't run these. You can run these red ones as many times as you want, you know, green changes or red causes another red. Like
[00:35:59]  I missed it. You can have some reds in the middle, but essentially they just go in two buckets and we just don't run the blue ones. Um, there
[00:36:05] , there isn't really too much more to it than this. Um, so we have clear separated things. And so all that the, the enable scheduling does is it may
[00:36:15] , instead of running this queue synchronously, it just goes, okay, we will use idle callback. Actually solid uses reacts, uh, scheduler, um, uh
[00:36:25] , kind of minimized port of a react scheduler to actually do it. So we actually use this very similar scheduling algorithm to that react uses for their, for their
[00:36:33] , um, concurrent rendering actually pretty much straight up stole it. So, you know, cheers to react. Um, and in, in that sense, we, we have
[00:36:43]  the ability to run this as much as we want. And why this is important is I'm not going to turn this example here into suspense, but what I want to
[00:36:52]  highlight is that we can essentially hold off applying a, in a visible way before, until double a is ready. Thanks. Right. That's the whole thing. What if
[00:37:13]  I click this as many times as I wanted, and we just knew that at the end, the sum would like, would, would complete. And the thing is,
[00:37:21]  this is common for things like navigation. Like you click on a new tab, right? You do, do you show that you switched the tab yet? Or, you know
[00:37:30] , maybe you want to show a pending state, but one thing like here is a delay here. I'm going to click on this tab and you're going to see a
[00:37:37]  delay before we show tab two, because we're loading something while tab two is loading. In order to load tab two, we have to actually render it. And the data
[00:37:44]  has to be, you know, updated and the fetching and all that has to happen, but tab one can kind of stay for a bit while it's doing that
[00:37:52] , right? See, it didn't, it didn't change right away. When I click dose here, there is a delay before it switches because we hold everything. We
[00:38:02]  wait till it completes and that can, async consistency is why we do concurrent rendering. So, and, and what my silly little drawing here is showing how you can
[00:38:17]  do this without a VDOM because events can be scheduled. I mean, that should be no surprise to anyone, right? Events can be scheduled. So essentially, and
[00:38:31]  the thing is, okay, so you're probably thinking, okay, well, what, what about those real DOM nodes that you're using? How, how, how
[00:38:37]  can you like, like deal with that? And, you know, all this stuff, the thing is in our example here, you know, the, our scheduling example,
[00:38:48]  where we have our, our circles, you know, otherwise would have kind of tied everything down there. It has to interrupt, right? Like when we made that switch
[00:38:58]  here, it took so long because it started working on those circles in the background, but then it's like, oh no, I have to update the animation. And then
[00:39:07]  it's like, oh no, I have to update the animation. So in react, the way that works right now, and they, they talked about changing this in
[00:39:14]  the future is they, they try and do as much processing as they can. And then when they get cut off, they're like, oh, well, I guess something
[00:39:23]  else is more important. And then when they're, when, when that something's done, they start over and do it again with, with the new information. And essentially
[00:39:34]  every time it interrupts, they have to start over again. So they interrupt, they don't have resumable yet. They have talked about it, but essentially
[00:39:43]  they interrupt and they restart rendering over again. And that's fine. Cause it's background. It's not going to be a big deal, but it means that if you
[00:39:49] , if you're harsh enough on it, you can actually kind of cause starvation. They do have like an upper limit to prevent that, but essentially it really turns into
[00:39:58]  a form of debouncing in a sense, right? Because like it's like, oh, you typed another character. I got to wait again. You know, it
[00:40:05] 's that kind of mentality and don't get me wrong. Solid is the same way too, to a certain degree, because if new updates come in, well, you
[00:40:12]  have the process of those new updates. So it's, you can always kind of cause the starvation to a certain degree, but the key, key difference with solid is
[00:40:19]  we're fine-grained resumable. And that is pretty, pretty cool. Okay. And you, if you want to see what I mean by that, check
[00:40:27]  out this little example here. I've used this example before, and this, this is, this is kind of a silly example. I'm just creating an H1
[00:40:36]  and then inside there's a P2 and I've wrapped it in this delay component. What does the delay component do? Nothing special. It basically, I know this looks
[00:40:46]  a little bit, it's because you can't set a function of the function thing, but essentially we have a timeout of a second. And at that point,
[00:40:55]  we set the signal to the children and we return that signal. So essentially what happens here is when we first render, we don't render the children. And then we wait
[00:41:02]  a second and then set the signal to the, to the children. And that's what we actually render. So when I refresh this, what you're going to see is
[00:41:08]  some stuff. And then a second later, some more stuff show up. And yeah, you're like, what? No big deal. That's I'm sure you
[00:41:15]  can do that in any framework. Of course you can. But my, my point is solid fine-grained and I I I've showed this another stream, but I
[00:41:23]  don't feel I need to show this again. All that happens when it picks up is it doesn't render app again. It just picks up. I'm not sure
[00:41:36]  a hundred percent on this, but they said no currently. Like that they have to, that they actually have that, like they're working on it, but right now it
[00:41:50] 's not. So that those original demos that they use to show up react fiber actually don't work well anymore like this. I think the spear ski triangle, um, they
[00:41:58]  focused on the IO stuff, which is to be fair, I'm going to get to in a minute, but I also focused on, but let, let, let
[00:42:05] , I mean, I can probably pull up Dan saying no, but, um, he's also not the one working on this directly. I think, uh, Andrew Clark
[00:42:12]  is so, um, don't hold me to that completely, but the last I heard, they said that it is not resumable. It's interruptible, but
[00:42:20]  not resumable. Okay. So, but my point is when this timeout runs and you set the component, all it's doing is triggering that signal, which
[00:42:30]  is then rendering this thing again, it's not rendering everything again. Right. And you know, we, we can play, we can play inception here. Right. And
[00:42:36]  let's how, how, how many delayed components can we, can we jam in here? Right. Like, I mean, this is just freaking stupid, silly example,
[00:42:45]  but you know, oh, there we go. My, my point is that every time they resume, they just continue where they left off. And this is just,
[00:42:56]  this is just fine grainy activity. Right. We, we see that you, the closest effect is the effect that runs like the, there, there isn't anything special
[00:43:04]  here. So when, when, when we, so yes, we pretend this whole thing happened off screen. Right. Maybe you're like, just the, the kind
[00:43:14]  of thing you got to understand here is that this P children was always here, right? Like we, all these dom nodes are always here. We're just choosing not to
[00:43:22]  show them. They get created first and then inserted. Um, and I, I don't know if the output function is going to show this well, but you, you
[00:43:28] , you, you've kind of seen this before in, in, in my other demos where essentially we create an element and then we return it. Right. That's
[00:43:36]  the whole, the whole process, right? They, they, you create first and then it gets into on the way back up essentially as you compress the jsx right
[00:43:44]  children you know children get created and then again certain the parent and certain the parent and sort of the parent kind of chains back up it's this it's the same kind of
[00:43:53]  deal here so we had all this stuff so you could picture if you were kind of making this analogous to concurrent rendering is we could render this off screen with some async
[00:44:02]  and then as each async thing comes back in we just continue where we left off just draw in the next thing so you know or do the next little piece of update
[00:44:11]  so we render as much as you can ahead of time and you've got to kind of got to ask yourself the question here it's like yes in something like i was showing
[00:44:20]  with the circles or whatever it's you know maybe it's bad to have all these dom nodes or doing that work ahead of time because you're trying to you're trying to
[00:44:27]  free the main thread up for the the main thread animation but let's face it for most io you're freaking waiting like like you're you're here and you're waiting
[00:44:37]  you're like okay is it ever going to load you know i mean this is pretty fast but you're you're you're you're you're essentially waiting on stuff to load
[00:44:46]  and what you're doing that maybe there's a little animation but for the most part what's beneficial about this approach is it renders as much dom nodes as it can ahead
[00:44:57]  of time it's already rendered most of the screen the second that last bit of data comes in and updates the last little bit and then inserts you have the least amount of
[00:45:05]  work left whereas with something like react it's been just doing all the pure rendering effects so that you know when it's time to go okay now we're going to swap over
[00:45:17]  well that's when it does all the dom work and i already mentioned earlier that you know we're not saving you on the hardware level right if the dom work is expensive anyways
[00:45:28]  you know you're not you're not you're not going to be saving so we have the ability to do more of the dom work up front and actually for things that
[00:45:37]  like this actually cushion the blow of of of of basically doing you know page or section re-renders because sure we can schedule it piecewise but we also do it as
[00:45:50]  soon as possible so when it you know when the you know at the end it comes in as possible now let's say there's trade-offs there i'm not going
[00:46:01]  to say that's a pure win but i've shown how we have a concurrent model that actually works quite similar um in a sense to react um and and essentially possibly has
[00:46:16]  some advantages in a certain way and like let let me let me uh go back to scala draw um here for a second because yeah i i like this image but maybe maybe
[00:46:27]  we can we can move on and do a different one let's just trash this one for a second okay let's clear this um just just so you have a real visual of
[00:46:35]  what's going on here like i know i already showed the tabs example but and i hope my explanation is clear no no one's writing anything in the comments so hopefully hopefully
[00:46:45]  what i'm saying is making sense you know we have our app and then we have our navigation bar right and then we have our our content and this is like a more typical
[00:46:54]  io scenario right and essentially beside it when you once you click on that one tab once you go okay i'm going to click on this button here right you you click on
[00:47:10]  this tab once once you've done that well solid and let's say it swaps out this content in the middle here solid already has i'm going to this is what's
[00:47:21]  happening off screen solid doesn't need to do anything special because this outer circle is already already there this tab bar is already there and the button and everything is already there so the
[00:47:31]  first thing that it needs to do is it goes okay well now that this button chat has changed i'm going to try and draw the new content here right and it's
[00:47:40]  going to create new dom nodes while it does it sure it's kind of scheduled and broken up like it will go as far as it can just like i was showing in this
[00:47:49]  demo where it can pause essentially but it's going to start um sorry it's going to start creating it it's going to start creating it as a as it can and then
[00:48:00]  essentially you're still seeing this so you know it's fine you know you can you can have uh you know i'm not i'm not a great artist here but you
[00:48:09]  can have like some some some some some fun spinning thing or you know going on here or some animation or whatever and this this over here is in fact doing its thing piece
[00:48:22]  by piece and then when it's done it just swaps it in right and part of and even if it's on the same page we can do this there's basically a
[00:48:34]  little bit more detail here that i haven't completely explained but essentially the key to the the whole transition thing is is is we do have these buckets and then the other part
[00:48:46]  is we actually fork reality and i know this sounds crazy but essentially because we know the signal change and we know every downstream dependency um we have the ability we can go okay
[00:49:02]  well this is fine and this is happening in this reality but we can then like make a shadow version of this over here you know what i mean and it can do different
[00:49:15]  like it can kind of maybe maybe um you know like the grass more complicated but we essentially can do parts of it and then merge them back in with the original so this is
[00:49:26]  how we keep how both pieces work we can we actually don't even really have to merge this part this part this part merges in at the end but essentially we can
[00:49:37]  we can we can basically like a v dom essentially sketch pad out the pure part of of of of this right we we can just keep on running this oh this gets a new
[00:49:50]  value run these again this gets a new value run these again and we just we're working on this all to finally merge with this and the way that we do this is
[00:49:59]  anything under transition gets applied over here on the transition side but if someone updates something um that is not under transition if it's if it's not related to any of these nodes
[00:50:11]  it's just going to run as normal because who cares but if it is related to the nodes we just kind of go oh okay well you know obviously a direct relation like this
[00:50:21]  is is is is a bad example but let's let me give a better example pretend we have let's make another node another node right here okay i'm going to make
[00:50:34]  a another single signal right and let's make it stroke no we're solid line we're making another signal here okay and this signal this signal points at one of these other
[00:50:49]  ones that we're worried we care about now when this one updates like this is the one that caused our async maybe this is our async event or something this is the
[00:51:00]  one that caused caused the trouble but when this one updates you see that it affects this node so all we have to do is basically let me see if i do this transpose
[00:51:17]  this over over here essentially uh we this doesn't have to be part of this thing necessarily it's more like a virtual kind of transposition let's do this more like this
[00:51:32]  but essentially when things happen outside of the transition to our nodes we apply them on both sides this way um you know things progress as they as they move forward like we're
[00:51:42]  merging as we go so that at the end we can do the full swap in so we as i said this is part of doing as much work ahead of time as we can
[00:51:49]  we do isolate the transition so any transition stuff happens in the transition timeline before swapping in but because stuff can still happen to this timeline we apply it to both sides and again
[00:51:59]  because this is non-blocking um at least with scheduling on um it's not a big deal um that that hopefully some of that makes sense um let's see we
[00:52:15]  got a few more comments now idea i'd send this with react portals to maintain state in some really weird state management stuff in twitch um that's cool i i might have
[00:52:26]  missed the context because i was talking to myself and i i forget which part this would refer to um but yeah theo if you want to clarify go go for it um discussions
[00:52:40]  on the writing docs yeah uh can you talk more about scheduler interrupting yeah okay yeah this this is actually maybe i have to show a little code for this one um because
[00:52:52]  i do want to i do want to i do want to get there um yeah let's let's let's let's look at this for a second yeah actually sir theo yeah
[00:53:05]  yeah you're right right you mean like using a portal to kind of like do some stuff to the side and then bring it in it's fun it's like double buffering
[00:53:15]  um but uh it's and the thing just in case anyone wants to know and i know that's from benchmarking dom creation is expensive but attaching and painting is almost equally
[00:53:24]  expensive it depends on the situation and like the css application but like it's not just the creation of dom nodes that's expensive but also the um also the uh how should
[00:53:37]  i put it the attaching like you you pay it's almost like there's a huge amount of cost that goes into painting and layout calculation and like actually taking the nodes and
[00:53:47]  attaching them to the dom so it's not just the pure creation cost here um in case anyone's wondering uh yeah so we've got a couple things going on here yes this
[00:53:56]  does do forking yes uh definitely and there is some similarities here um definitely and and the the better i get at the transaction model the more it is like this there there's
[00:54:08]  definitely i've been trying to clean up the code here a bit and that's why i'm a little bit hesitant sometimes to show to show this this this off a little
[00:54:17]  bit but it is actually um it's fairly yeah let's let's just go there it's it's it's it might be simpler than you might expect uh because i think
[00:54:29]  to show this off i do need to show this but it's actually um let's see if i can zoom this up a bit as you can see um and let's
[00:54:42]  go to signal ts and i'm not going to go through the the whole thing here but essentially most places let's see if i can find update see this update stop push
[00:54:56]  this is there's there's a place where i want to show yeah yeah sorry um yeah right when you write a signal there's this like loop which is like either push into
[00:55:10]  this pile or push into this pile like i was showing a few minutes ago right but but more than that what the way the scheduling works is at the end of running everything
[00:55:21]  um where is it complete updates if the scheduler is enabled we have the scheduled q function and the schedule q function is is actually just something that we store in the transition and
[00:55:37]  it essentially is just calling um this is actually request callback or our callback example but it's literally just just uh calling this request title callback um scheduler and
[00:55:50]  i i could get into details here but essentially this queue looks at um basically a maximum time scope uh that it has to run like it has a deadline and it also listens to
[00:56:07]  um if possible uh is input pending from the browser to know if someone's like actually clicked a button or something to interrupt and other than that it's just using a window
[00:56:18]  post message um to essentially queue um work um at the at at the yeah sorry where is it schedule callback not equal null that it does get a callback yeah it's
[00:56:31]  using post message communication to try and that's like the quickest way to do a set time out um to kind of to concede uh back to the process uh back to
[00:56:40]  back to the um like the main thread and beyond that i mean it is a little complicated here i as i said i grabbed a lot of this from react um where is it
[00:56:50]  flush work it's just it just it just it's basically just doing this work loop as far as it can and it just basically is checking against a deadline how much time it
[00:56:58]  has remaining so it just you queue up all these tasks and then it runs as much as it can um each time until it gets interrupted i don't know if that makes
[00:57:09]  a whole lot of sense to people um but we just as i said the the cues just get pushed and then when the scheduler is involved we just um almost run them straight
[00:57:23]  into this request this scheduler queue um yeah i hope that asked answer the question is a little bit technical the the other thing i actually really wanted to talk about here again
[00:57:37]  is more focusing on the pure expensive effects which is that i keep on mentioning that these things don't actually um save the work and i i had another example here but it
[00:57:58] 's actually eluding me right now um i had when the question came up i had in my head and it's kind of escaped me for the moment it was more that um
[00:58:07]  yeah no i don't i don't have it anymore so i apologize for that if we take a second to get a little bit of water maybe i'm drinking my drink
[00:58:17]  too fast probably not yes sorry this thing's still running background um yeah i i unfortunately i think i lost that point that i wanted to make about the expense of the of
[00:58:42]  of the work because um yeah i i it's it's eluding me well this is actually i was talking about keeping streams uh shorter and more focused this is mostly one
[00:58:56]  i want to talk about i got through everything in an hour um which is good um i don't know if there's a ton more on this i mean i i've showed
[00:59:04]  the suspense demos before where uh essentially we're doing the rendering off screen and then as it completes you know it this one this one that's a nested suspense you kind of
[00:59:17]  have that control but i i think in terms of concurrent rendering there's only really two topics there's there's the the io uh scenario like we we talked about um with
[00:59:28]  the navigation like suspense and then there is the um kind of like the the the time slicing thing uh which yeah i'm i remember now yeah the time slicing thing because i want
[00:59:43]  to get back to the topic like react has a solid has it free free has it why does view and preact and whatever not have this why haven't they done it
[00:59:53]  and why is it behind a flag in solid i and the as i said you have to like in all these examples like this i'm not doing um prioritize updates it's not
[01:00:07]  interrupting because the only difference between uh having the scheduling present and not having the scheduling present is just that queue i just showed you right which is why it's good to explain
[01:00:21]  the queue the that ability to to essentially um kind of push into that like uh deadline queue but without that queue um solid will just run what it can in the background and for
[01:00:34]  most cases you know that you aren't doing crazy heavy stuff and again not heavy um rendering stuff because heavy rendering stuff is always going to be slow but heavy processing stuff while
[01:00:47]  you're doing something else you're going to be fine and that was the thing in views perspective and even preact to a certain degree's perspective they were basically saying that react
[01:00:59]  was doing this to solve their own problem basically they already had and even i guess some might have not said it but but this is kind of the defense there like you need
[01:01:09]  to be doing heavy work that is not um rendering and the question is who's doing that heavy work that's not rendering it's not the framework framework so actually all pretty optimal
[01:01:24]  um you know they themselves aren't doing that much and as i said the pundits will kind of joke and laugh and be like oh it's because react is so slow
[01:01:31]  they have all that non-rendering processing the vdom diffing and that and maybe there's like a small sliver truth in it but no it's the end
[01:01:38]  user code um where that processing is but the the thing is what leads to that really bloated end user code that we would need that we would need to do that because like
[01:01:51]  it's hard to come up with these demos uh sorry where where is it here it's hard to come up with these demos like you got to fake these expenses like what are
[01:01:58]  you if you've written solid code what are you writing in a memo what are you writing in a memo that is going to be that you're writing in a memo that
[01:02:06]  is going to be that expensive that has nothing to do with rendering just pure computation and calculation in your app that's going to be that expensive i i honestly don't know and
[01:02:12]  for most apps small apps i think it's fine let's see the the reason that react and facebook could care about this time slicing thing more and the and splitting it up
[01:02:22]  is because if you have an app as big as what you might find at facebook you know something so massive and you have a top-down renderer like it's someone
[01:02:38]  could be doing something stupid and my guess is that something stupid might not be localized it has the potential to re-render whole sections of the trees demise connections on windows for av
[01:02:51] ia devices thank you yeah see this is this is this is the kind of stuff i'm looking looking for right because like 3d is another one right paul who's been
[01:03:00]  really pushing oh is this windows specific issue yeah um you know but paul's been pushing this for 3d because i get it for 3d definitely right um i like if
[01:03:15]  if if anyone knows anything about react 3 fiber it doesn't even use react to update like it uses react for the model but it can't use react to use state because it
[01:03:27] 's too slow um it gets in the way um obviously i was boasting earlier about how salt's like two demos fast but like obviously if you just skip the whole uh
[01:03:36]  framework altogether that that's faster too um but the point is like for react 3 the only since they're mainly using it not for updates but for creation this is amazing because you
[01:03:50]  can basically buffer the creation costs um behind the scheduling so they like it's it's expensive to update 3d graphs like they they tell you not to do that not not
[01:04:01]  in real time you don't you don't want to like have uh like basically you kind of kind of recreate most of the graph and and if you're to like have something
[01:04:09]  enemy on the screen you're trying to like add stuff to it it's going to chug right down and paul's like react has solved this for me because we declar
[01:04:17] atively describe our 3d graph a using react and now the creation doesn't affect what goes on the screen that's why he often makes things like it's faster than 3
[01:04:27] js or faster than vanilla obviously when someone tells you that they're full of but um pardon but like but in like it it's a very powerful way of making of making your
[01:04:40]  point right like basically by adding the scheduling layer on with react they have the ability to kind of mitigate the those costs do things off screen pull them in um and uh you
[01:04:52]  know these are the kind of cases where this is interesting but this is just not the common case unless you're doing really expensive work and i think the the thought here is if
[01:05:00]  you have an app that's big enough you don't know all that expensive work so you need you can just put something on a transition and just go look i don't
[01:05:08]  care it's not important deprioritize it it's just going to work nicely for me and not have to think about it right like all we had to do was go like
[01:05:17]  when this tab changes or when you set this thing call it start a transition another cool thing i mean uh is that react actually has multiple priority levels coming in they have these things
[01:05:29]  called uh i think it's called lanes where they have the ability to set like three or four different priority levels right solid only has two um it has normal priority and low
[01:05:39]  priority but react can actually like schedule like a whole bunch of them as i said i haven't hit a use case where this actually matters at all like hopefully you but you can
[01:05:48]  picture if something is complicated enough this might have some impact so it's interesting as i said there's these two sides to it because because from the navigation ios side like
[01:05:58]  the things i show with suspense i think this is like i knew right from day one i'm like this is amazing like this is what you want it's just smoother it feels
[01:06:06]  nicer you you kind of get you get this nice transition on the time slicing side i don't know who's it for but it makes a cool demo especially sorry it's not
[01:06:17]  3d but you know what i mean uh it's a really cool demo thing but um yeah as i said i mostly just wanted to kind of prove uh or show that
[01:06:29]  you don't need a beat on to do any of this this is just a another thing and the reason for that and i've said this ad nauseum in the past is
[01:06:37]  because reactivity is nothing it is literally just some events calling some events so you can make or model whatever the hell you want you put a beat on in reactivity if you
[01:06:47]  want you can you can so it it has an overhead reactivity is not free it's just when you when you use it as a way to avoid creating other systems it
[01:06:58]  can both reduce code because you're using the same primitives over and over again and it can and it can have good performance um because it's not introducing these other systems that
[01:07:08]  that that's the gist of it um right like it's it's it's it's almost too simple right like kind of like how redux is like too simple
[01:07:17]  um so most of my work as a framework author is actually hiding the boilerplate or you know making the experience smoother but the the core here is as i said it's just
[01:07:26]  it's just some signals and some effects i know now i believe i've said everything i have to say on this topic so i might call this one short if if there's
[01:07:38]  any more questions or whatnot i i said i want to kind of get things more focused these days and uh i think this this is is the pattern we're going to do
[01:07:47]  uh you know basically maybe an hour hour and 10 of a conversation 20 minutes for q a kind of deal your diagram do you want to explain why create compute is not just a
[01:07:57]  different effect oh yeah yeah yeah yeah okay cool yeah this is a great thing because i i showed um this create computed actually actually happens at the same time as create memo if
[01:08:11]  you look at the solid js code which i'm not going to pull up again it's too much it's actually marked as pure and you're like what it's pure i
[01:08:19]  needed a way to do updates pre-render and sometimes uh just pure durations don't work so technically speaking in our in our wonderful drawings here create computed actually happens here
[01:08:31]  like before the effects so that like the the rendering and the side effects and stuff gets held here but create computed actually happens in the red zone um it is actually purely red so
[01:08:42]  um yeah this this is why there's different ones we have we actually have uh three things that look really similar in solid and it confuses people and this is a great
[01:08:56]  time to address it we have create computed create render effect and create effect and essentially create effect is clearly on the blue side it is always blue it's your side effects you can
[01:09:09]  see it on the world create computed is always red it's only supposed to update other signals it's things that basically sometimes you can't drive them as a memo it happens
[01:09:20]  in the pure space you shouldn't put console logs and effects in there it should just update and then and then finally create render effect is the weird one and it's one of
[01:09:31]  the super powerful ones because what it does is at creation time it is treated pure and the reason for that is it gets created with everything else um because its whole point is
[01:09:43]  to render or create something but it's not the one attaching as i already mentioned the way solid renders it it renders something first then returns it to get inserted to get
[01:09:54]  inserted no no component inserts itself in the dog it's the parent that inserts it so at creation time our render effect actually runs at the same time as the red ones so it
[01:10:04] 's all prepped in the ahead of time and then anytime it updates in the future it's in the blue pile so it actually changes from being basically treated like red to
[01:10:13]  being treated like blue um during its life and this lets us do the dom rendering do the semi-effectual stuff at first it doesn't affect the outside world um and then
[01:10:23]  if it's already the thing that's fixed in the dom already the thing where the insertion happens it it gets held off so it's a weird split but it means
[01:10:32]  that each of those three have a very important and different purpose and while this is super advanced stuff most end users first of all they just need create effect and signal they won't
[01:10:41]  even need and then maybe they need create memo for some expensive calculations then maybe for some synchronization maybe they have like a form reset they'll use create computed but almost nobody should
[01:10:51]  be using create render effect because as i said it's basically an internal for the actual dom rendering for the for the for this kind of create um that isn't seen by
[01:10:59]  the world and even create computed is not that common but essentially all three of these serve a very important purpose hopefully that explains it and hopefully this is this is a hard topic and
[01:11:16]  there's a lot of confusion here i i went through that whole confusion because the first demo i ever saw concurrent rendering was this well i guess it was the triangles right the
[01:11:25]  this one you know which is very similar to what the other stuff i showed you today but then it was this demo and i was like what what does this have to do with
[01:11:31]  concurrent rendering i tried doing things to make things more performant the tricky part of solid was already more performant than the other libraries and then like when i tried to figure out
[01:11:39]  how to like make it concurrent i couldn't figure it out because nothing i could do would make it better and that's because the limitation here is the hardware so this was a
[01:11:48]  terrible demo paul knows it's a terrible demo he's actually taking it down you can't find this on uh on uh twitter anymore like it and he replaced it with
[01:11:55]  a better demo um but you're right like like it's it's essentially like um like this just was not the right demo for this the the newer demo is much closer to
[01:12:10]  my my uh my demo here except it's 3d and looks way nicer but uh essentially um that that's why that's confused because you think that it people keep on
[01:12:21]  talking about it associated with performance so you think like okay if i use this you know concurrent rendering time slice and my performance will increase well only if you're doing really expensive calculations
[01:12:31]  so often if you're already using a fast framework you know like a non-vdom framework you're probably not going to hit some of these things anyways um and i'm
[01:12:40]  not talking about vdom from the rendering side the rendering side vdom is just as fast i was talking about the block dom but i'm talking about more of like the
[01:12:46]  conceptual patterns of getting into full re-renders it's it's really about like expensive random end user code never got what pre-render is for yeah yeah honestly probably probably
[01:13:02]  don't use it like it's hard i i i i expose all the primitives in the docs because literally you see everything that we have that we build everything from there
[01:13:17] 's like i don't know there's quite a few helpers and stuff but like the core like create blanks there's what like i want to say there's like eight
[01:13:24]  or nine of them like you probably should only be using three of them and that's the same thing with react right like there's only a couple that you use most of
[01:13:31]  the time but they're there and with those you can recreate solid from scratch like the render so you know there's that well yeah yeah well we we can we can we can
[01:13:44]  we can talk about this um someone someone from the art community was like well i don't get it you you pray solid and then you go to say that without a beat
[01:13:55]  arm you can't do any stuff okay i'm gonna continue here but i have to address this one i don't even use context anymore there you go yeah and and to be
[01:14:06]  fair uh people have been trying to push me this way on solid too because um they like these kind of contextless uh um contextless uh you know patterns and there are some
[01:14:20]  benefits for solid for context it's kind of weird it's almost the opposite of react there's no performance overhead to using context and solid and it actually has benefits in terms
[01:14:29]  of being able to keep the reactive life cycle under the tree and under the graph especially for scheduling effects and stuff so yeah like i tried to push people the context a little bit
[01:14:37]  maybe too hard they don't need it for simple stores and all that kind of stuff but ironically context is way better and solid than it is in react yeah i needed to
[01:14:50]  do this just to show people um but i honestly like i'm like use context but you know whatever yeah people people like what they like um anyway uh back to this so what
[01:15:02]  happened was and i think this is under discussion someone was like vdom use cases that's harsh hi i was reading the readme and the premise of the library seems really cool
[01:15:14]  i saw on the section of the this side of the paragraph why do we need a vdom it implies that you need a vdom in order to achieve concurrent rendering i
[01:15:19]  should i'm not sure if you guys know the solid supports of blah blah blah um you're still doing it theo um anyway and you know because i've been telling the
[01:15:39]  community we've had versions of concurrent rendering maybe not the interruptible one but we've had versions of concurrent rendering now since uh i want to say uh sometime in early 2019 as
[01:15:49]  i told you it's been a couple years people have been using suspense they've been using streaming and they've been using this stuff in solid for for for quite quite some
[01:15:59]  time and and and and so they're confused when people are like oh you can't do it and essentially is he says that it comes down to what you mean by concurrent rendering
[01:16:12]  and as i understand solo is doing it is it has no virtual dom but it doesn't maintain an alternative reality by creating the actual dom nodes like um clone node and update
[01:16:25]  the actual dom nodes replacing the old one when the new dom is ready i was doing it differently that's fine but there's a much bigger difference all clones and all are unit
[01:16:33]  atom of rendering this means that the content of the component dom will be updated automatically every time and this is different the components actually disappear from the runtime so once you update two
[01:16:44]  values one synchronous value and the and another needs to wait by default and so you may have your screen updating to display the first community then later to update the other this means that
[01:16:55]  okay yeah i don't think he's saying that the dom is bad he's suggesting here that our default model is like what i showed you here that our default is when it
[01:17:08] 's async for it to tear that's that's our default model here but but but but like there there there is there is there is a difference right um let me
[01:17:20]  get back to here like react's default model is to tear as well fyi just on the async side they are we were both synchronously consistent but if unless you opt
[01:17:32]  into a transition we we our default is not to hold it and the reason for that it's a little bit tricky but picture writing a component and updating some state in your
[01:17:44]  component okay and it's working the way you expect and you you you you do some action update that state and then later somewhere else um you know something that you know generally
[01:17:58]  happens later you kind of count on that state being updated like you know it's been a micro task like that's typically how it works in react they get queued to the
[01:18:06]  next micro task so you do some work and then another action two comes in and you're like okay i can count on that that being updated then someone downstream from you um like
[01:18:15]  does something async now in reacts model you so what who who freaking cares right because you you make you change that state and the same with solid it still works the way
[01:18:30]  it does and that person's doing something async that's on them but if you have a model that is always asynchronously consistent like that's the default when someone over somewhere
[01:18:40]  else in a different component goes and makes something async that now it can cause changes in um behavior in your component without you opting into it like we tried this with
[01:18:51]  marco like we what he's talking here and it was terrible i i'm i'm glad people are experimenting with this kind of thing but it was actually kind of it was
[01:19:01]  really non-intuitive because like code that updates somewhere else now can change the behavior of your code because now suddenly it needs to be asynchronously consistent now no longer does
[01:19:14]  your value update anymore it's now been caught up in like a transition and not even a transition you opt you opted into that's the challenge if you make everything asynchronously consistent
[01:19:24]  because most of this stuff um it's just about defaults from my understanding because they don't have suspense right when one of the benefits of having suspense is you're like this
[01:19:36]  is contained to here we care about it over here you know there's there's this double-edged thing with a suspense where um like like there's a double-
[01:19:47] edged thing with suspense where like essentially how should i put it like um you you you're kind of it's not edged sorry that's the wrong term basically it it
[01:20:02]  it reverses the flow it's what it was it called an inversion of control because essentially the child can go you know what i the parent goes okay look if you're
[01:20:12]  going to do some crazy crap i'm going to contain it here in the suspense boundary have the placeholder have the transition and be like you do you right i'm i'm
[01:20:20]  just going to filter anything that walks up to me and and sections it off but it gives the power to the child to go oh i'm going to listen to something async
[01:20:28]  or not and it gives the parent the ability to go like okay here but if you remove that boundary that ability to make those kind of rules everything's like can just affect
[01:20:38]  everything else like it's really hard to wrap your head around this sort of async reality because any change may or not apply at any point depending on what downstream things change because
[01:20:49]  of it and i hope that makes sense but it's like suspense and having these boundaries are actually really logical way of of containment and being able to go like like consistent here
[01:20:59]  not consistent here and i know it's weird like why would you ever want something non-consistent well sometimes uh reality isn't consistent we as beings live through segments of time
[01:21:09]  if everything was asynchronously consistent i like like it doesn't it's not the way think or processes work sometimes it's it's good to have that control good to have
[01:21:21]  that escape hatch and good to be able to make sense of your code um but yeah i mean in terms of the way i originally thought i thought he was he was saying this
[01:21:32]  right because and this is why i was talking about trade-offs if you create the don stuff ahead of time um then yes you know you're doing that work ahead of time
[01:21:40]  so if you're doing something really heavy like super heavy something that would be close to maxing the hardware then doing that work ahead of time is expensive keep in mind we
[01:21:54]  don't update the dom completely off the screen we still hold the effects it's only the final effects like we create stuff but we don't update it off screen that update happens
[01:22:05]  at the end right as i said render effects render once but on every update they get held like every other effect so technically speaking we just create things once and we're so
[01:22:16]  we're not actually incurring that much extra off screen overhead on on the dom um but the more i'm reading it here it looks like this is more about um defaults
[01:22:27]  and basically how owl which the firm based on top of block dom basically delays everything until every component is ready without using suspense that's my take of it i i think it
[01:22:42] 's interesting um obviously um because there's obviously places where uh uh a v-dom has some benefits if you want to throw away renders like if your decision on the
[01:22:58]  offset is to throw away renders then like yeah use a v-dom like when i mean throw away i mean not resume not progress not build towards a consistent future but literally
[01:23:08]  just like let's make this and just chuck it away um so there are use cases like sometimes that that actual work maybe doesn't matter much like maybe it's almost like pre
[01:23:17] -loading you're just like pre-rendering a page ahead of time like what else are you doing you're waiting right like maybe it's not that big of
[01:23:23]  a deal it's in the background so i don't even care that it's dom nodes perhaps but a better example is stuff like um uh gqty or whatever the graph
[01:23:32] ql library that literally you pass the proxy through the state and basically just fake renders everything to figure out which query parameters you used and then re-renders everything with
[01:23:43]  the real data something like that is like obviously not great and solid because like you're rendering everything twice just to figure it out and another example is server-side rendering uh
[01:23:52]  some libraries uh like next classically although they've moved to react 18 and the good patterns they they just they just keep on rendering the whole app as long as there's water
[01:24:00] falls they just you know that they render so far get get get the fetch the data render it all again fetch the data like this was the old pattern that that they used to
[01:24:11]  on server-side rendering where you just keep on re-rendering your react app um which you know is is a little bit crazy um especially when react server rendering is
[01:24:21]  not particularly fast but you know good enough so there are places where like having a vdom you know maybe isn't as expensive um than other options to be fair the server
[01:24:33]  is maybe a bad example because i'll use a string rendering which is faster than vdom but like essentially like there are places where having a vdom and kind of preempt
[01:24:43] ively rendering and throwing away are beneficial i just i we haven't seen those situations in real life and our io case for concurrent rendering is not that situation and even our um
[01:24:57]  this demo is not that situation because you want to keep the work you do you're working towards an eventual future even with multiple priorities and transitions coming in like you're building towards
[01:25:10]  something and in that sense you know i think while it's unclear if in all cases doing the dom first is better like it's just a matter of front loading and backload
[01:25:21] ing a little bit you know it depends if you optimize for navigation building the dom ahead of time is better if you're optimizing for rapid updates uh maybe building the dom at
[01:25:32]  the end is slightly better you know but um in my opinion the io story you know the the tabs or whatever is is is the case i i said i don't i don
[01:25:43] 't even have this this is under a flag i don't even consider i'm not even sure if we really even need this i'm waiting to find an example where like
[01:25:52]  this is actually like other than maybe 3d or something where this like this is actually something that is like important to do but i want as i said the show for
[01:26:00]  like the fifth and time that you can do this without a beat on okay what time is it what are we doing here it is five to nine you know what that's like
[01:26:16]  an hour and a half i think we're good is everyone good say something to chat no give you a sec maybe just see this demo one one more time watch us
[01:26:32]  take take our slow down turn off our concurrency watch how it breaks and chugs along as both it updates and when we go to add the circles turn it on
[01:27:00]  smooth as butter all right yeah i hope the drawings and everything helped i hope the explanation helped thank you everyone for joining me today gonna call it early get get some my own time
[01:27:16]  back and uh hope you guys all have a great weekend