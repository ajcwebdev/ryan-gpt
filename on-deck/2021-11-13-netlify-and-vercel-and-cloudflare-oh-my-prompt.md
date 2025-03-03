---
showLink: "https://www.youtube.com/watch?v=O2kFXlNSdn0"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Netlify and Vercel and Cloudflare, Oh My!"
description: ""
publishDate: "2021-11-13"
coverImage: "https://i.ytimg.com/vi/O2kFXlNSdn0/hqdefault.jpg?v=618ea61c"
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

[00:00:00]  Hello, welcome to my stream tonight. Took a week off last week because I was feeling pretty sick, but I am back now. Today, I wanted to talk a
[00:00:13]  little bit about deployment. Honestly, this is a subject that I was terribly well versed with, at least with modern topics, until recently because of the work I've been
[00:00:25]  doing. But recently, because of that work, Solid Start doing different integrations, I've had a chance to play around with deployment, specifically obviously for Solid, but
[00:00:34]  it's kind of, you know, enlightened me to the way, you know, things like Purcell, Netlify, and Cloudflare work. So I just
[00:00:44]  want to kind of share what I've learned, kind of show how I'm using it with Solid, and kind of maybe talk a bit about where things are heading. But
[00:00:52]  before we get too deep into it, probably good to talk a little bit about this week in JavaScript, which I wish I was a little bit more prepared for, just give
[00:01:11]  me two seconds here. I was actually going back and forth with Sebastian from the React Core team for a little bit here. He had some interesting questions and thoughts about Solid
[00:01:25] . And this all came up because someone posed the question, how, like, it wasn't even a question. They were like, I think it's terrible or sucks
[00:01:34]  that you can't do conditional hooks in React. And I don't know, I actually don't think it sucks. I think it's actually really good that we can't
[00:01:46]  do when I do conditional hooks. And I know that might seem weird to some people because, you know, flexibility, and I'm always talking about, you know,
[00:01:54]  the benefits of reactivity and how we can nest things and do that. But I actually think that a lot of the cases that Solid can do that React can't do
[00:02:04]  don't actually really matter. Obviously, there's some nice benefits to being able to nest some things and be able to define state wherever you want. But for the most part
[00:02:15] , it isn't really that relevant. Your data is declarative, there's rules, you know, you want to kind of set the system up so that it's
[00:02:24]  like a reactive graph, like that it everything just works as data updates. And, you know, it's the same with whatever framework you choose. So, yeah, no
[00:02:36] , I think that I think it's not really that big of a deal. I mean, it was interesting, because, you know, obviously, some people from the S
[00:02:46] velte crowd came out and were like, Oh, you know, we don't have hook rules and all this. But it's not like you can nest dollar sign
[00:02:52]  labels, right? Like, you can't just write an if statement. And, as I said, it's funny, because, as I said, Solid can do these
[00:03:01]  things, but I don't even think that makes a ton of sense. So there you go. I'm giving concession to React. All right. Let's see.
[00:03:12]  Has anyone joined our stream so far? Am I just rambling to myself? If you're here, you know, feel free to say hi. I know it's been
[00:03:18]  a couple weeks. It's always hard when you lose momentum. I was doing this every Friday. But, you know, you get sick, what can you do?
[00:03:25]  I guess the last stream was two weeks ago. So that was like, what, October 29th? Before Halloween even. Hey, Dan. We've had a lot of
[00:03:36]  things happen since October 29th. So I've actually got a little bit extra talk about for this week in JavaScript, so to speak. So let's go there and
[00:03:49]  let me share my screen here. And look at that for a moment. What are we on? Okay, so I'm on Twitter. It's my easiest way.
[00:04:08]  Let's just look, because honestly, a lot's happened that I barely even remember. Let's go back to the beginning, right? October. Yeah, I guess
[00:04:19]  the last thing that I've talked about was I kind of sniped out that awesome demo for Solid with Vercel using edge functions and basically put it out exactly the same
[00:04:33]  week that Next.js was released. So it was a really nice demo for Solid. If you haven't seen it, check it out. But let's move on
[00:04:42]  from there. I actually had a conference talk for Holy.js, which you guys probably didn't see because you have to pay for it. So that's unfortunate. So
[00:04:56]  let's go to the next big thing. React Router 6 is out. Oh, hi. A few more people have joined the stream, I see. I think
[00:05:05]  that's awesome. Honestly, as you all know, React Router 6 is a big influence on Solid's router. It's the core of Remix in the same way
[00:05:13]  Solid's Dart, the router is the core of it. And I've mentioned this a few times before. We were already kind of working on the same sort of thing in
[00:05:23]  the same kind of vision. And when I saw React Router 6, thanks to Remix actually, realized that they'd solved this problem that I was having, basically
[00:05:32]  reconcile putting together both the file system-based routing and the component-based routing. For me, I guess, with Solid, the most interesting thing about React Router 6
[00:05:43]  is now, when people want to know how Solid Router works, I can point them to a doc site. No. We're going to get some good docs for Solid
[00:05:51]  Router. But generally speaking, React Router 6 and Solid Router have almost identical APIs. So it's a big move forward to have it out there. Yeah
[00:06:03] . I don't need to talk too much about this. I had some fun doing some comparisons between Angular and RxJS. Or sorry, Angular and RxJ
[00:06:11] S with Solid. I don't think that's too interesting. But yeah, another kind of key thing that, in case you guys weren't aware of for Solid, was
[00:06:18]  I took that same Vercel demo and deployed it to Netlify. So there we go. I put Cloudflare, Netlify and Vercel
[00:06:29]  for this Hacker News demo. So that's what we're going to look at a little later today when I talk about deployments. And we're also going to look
[00:06:34]  at just deploying simple templates like the ones you'd use If you just run one of our starter templates from dgit or whatever. The other thing. Yes. Yeah
[00:06:49] . Let's talk about this for a moment. In case anyone cares, this has been the hot thing this week. And the timing was probably a little bit awkward or whatnot
[00:07:03] . Basically, At Jamstack Conf a month ago, Rich Harris gave a talk about this concept of transitional apps. And if you've seen a couple of my previous
[00:07:17]  streams, I was kind of like, you know, I think a lot of good points were made in that talk. But I just didn't understand how, you know,
[00:07:28]  SvelteKit or, you know, Next or whatever is getting bundled in with this group of other frameworks working on this stuff. And I was like, Okay
[00:07:36] , whatever. It's Rich's talk. Who cares? Svelte and SvelteKit does amazing things. Reduces code size, as I showed in the
[00:07:43]  previous stream. Like, it's been a lot of progressive things. I think it's really pushing things forward. And, you know, I was just going to leave it
[00:07:52]  at that. But then, interestingly enough, which is funny, everything seems tied together. Rich Harris got a job at Vercel to work on Svelte full-
[00:08:05] time, which, as I said, I actually think that's probably the biggest news. Super exciting to see where that goes, because you know, he's wanted to
[00:08:12]  do more for a while, and he just hasn't had the opportunity. But it also meant that when that broke, all the news articles and stuff that he was talking about
[00:08:23] , you know, and mentioned Vercel to could finally be shared, which meant that a bunch of press came out at the same time. And one of those things
[00:08:31]  was an article where it talked about transitional apps again. And I was just like, yeah, this isn't, this isn't going away. I want to, I want
[00:08:39]  to pull this out, kind of examine this a bit. And what it comes down to is, and again, I've touched on this one in previous streams is,
[00:08:50]  there is a classic MPA crowd, right, like multi-page app crowd, who, you know, are there. And basically, they generally don't like build
[00:09:00]  steps, don't like JavaScript frameworks, and are always critical and basically say that they treat single page apps as kind of like irresponsible children. And maybe that's a fair depiction
[00:09:14] , maybe. But it's, it's definitely something that irks, we're at Cheris, because he cares about this stuff, you know, that with the
[00:09:23]  news, he cares about progressive enhancement, he cares about delivering experiences to the lowest end devices, you know, he cares about small funnel, JavaScript bundle sizes, and all this
[00:09:34] , he, he wants people, the web to be accessible, that's, that's what it comes down to. And everything he does shows that, whether it's making
[00:09:43]  the code accessible and easy, or whether, you know, it's making the experiences not suffer for that. So, you know, I'll say you can hear my
[00:09:51]  voice, I have a lot of admiration for the work that Richard does. The thing is, those, yeah, I mean, yes, exactly. Thanks, Dylan. Yeah
[00:10:07] . How could you, you can hear me? Right? And the thing is, knowing that, I understand where this all comes from, right? Because the MPA
[00:10:20]  people are unfairly characterizing something that Rich and, you know, many others actually are devoting themselves to, to, to working towards and making things better. So
[00:10:31]  here I am kind of sweeping it under the car, like not sweeping the car, because sweeping the legs under, why, why am I attacking this transitional JavaScript app thing?
[00:10:39]  Not because I don't agree with the sentiment, not because I don't think it's important. And it's just that if you make the umbrella too wide, you
[00:10:52]  basically pull in all the single page app frameworks, you know, next.js, you know, if you want to talk about modern frameworks that send 100 kilobytes for
[00:11:01]  hello world, I mean, there's one. And, you know, that's, that, that, that's, that's fine, you know, like different
[00:11:12]  uses, different things. And obviously, there's different kinds of ways you can attack this. But a lot of innovation has been coming on the multi-page app front,
[00:11:22]  which, as I said, is ironic, because the multi-page app is sort of the, are the, are the, are where a lot of the, you know
[00:11:31] , criticisms coming from, but we have a whole new generation of multi-page app. And it's funny to call it new, because, you know, you know
[00:11:38] , I work on Marco, Marco team's been doing this since 2014. But between Astro, Isle, Elder, Slinkity, I learned about today, there
[00:11:50] 's like half a dozen frameworks trying to push the barrier using partial hydration and islands. And this actually reduces JavaScript. Server-side rendering on its own did not reduce JavaScript.
[00:12:01]  Sure, you can just like be like, okay, I server-side render it, so I don't need to send any JavaScript. But that, like, we
[00:12:07] 're building apps. If that was your whole ambition in life, you could just make a static HTML page. No, like, there will be interactivity. And that's
[00:12:15]  what, that's where it's important. When you do need to add that JavaScript, you do have that button, you know, and it's actually the, these M
[00:12:23] PA frameworks, and they've had a hard time getting traction. For years, they've had a hard time getting traction. And obviously, I work on one. But
[00:12:33] , you know, as soon as Astro started kind of coming in the scene, I talked to Fred, and he was like, you know, I love that you talk
[00:12:41]  about our frameworks openly, and can I get it out there? Because it's hard. Let's talk about common terminology. I present Astro, and everyone's like,
[00:12:48]  like, so it's like Next.js. It's like, no, no, it's not like Next.js, right? It's, it's,
[00:12:53]  it's, you know, I've talked to different marketers. Misco Hevery, he's got some great ideas with Quick that might be possibly the most cutting edge thing
[00:13:02]  we've seen in terms of this ability to transition between multi-page app and single-page app. And he's convinced that no one actually understands what he's doing.
[00:13:11]  I don't think that's the case. I think some people do understand what he's doing. But there's too much of like a me too, thinking around frameworks
[00:13:20] , people need, you know, their framework to be everything for everyone, that no one's is really acknowledging and pointing out that like, Quick is doing something amazing that we
[00:13:29]  have not seen before. And that's, that's all I kind of want to bring to the surface. I posted this, and some people are like, Oh, why
[00:13:38]  are you trying to undermine Rich? You know, he's trying to move web dev forward and get people moving in the right direction. I know. I respect that.
[00:13:45]  I'm just saying is look at who responded, retweeted, and liked what I posted. It's all the authors of the frameworks that, I mean, it's
[00:13:53] , it's funny. Like, let's look, uh, what did I say? Unpopular opinion. Currently, only one transitional app framework in existence date, Quick Dev
[00:14:02] , and any attempt to try to paint Sveltecutter next or solid is somehow different than a spa is basically all marketing. Okay. Pretty harsh. Let's
[00:14:09]  say, but, but, but look at this. Let's see who retweeted it. Okay. Okay. Well, this, this, this, this one's
[00:14:16]  newer. I didn't see this, but Matt Phillips from Astro Misco from, from quick. I mean, these aren't even people working on quick. And I
[00:14:23] , and this is a quick tweet who we got Dylan Piercy, Marco builder, quick, quick, quick. Okay. A lot of quick people, obviously they liked it
[00:14:30] , but my point is it wasn't just quick. It was Astro's in there, myself, Marco, like people working on these solutions are working hard on these
[00:14:40]  solutions and to kind of be like, oh, so you're like SvelteKit. I mean, there's nothing wrong with SvelteKit, but these are
[00:14:46]  different technologies and they're different things working in different zones. And it's hard because I don't expect the average framework consumer to actually know that or understand that. And it
[00:14:57] 's fine. We haven't done a good job explaining it. This is a technical nuance. And I'm going to try my best, you know, and I'm
[00:15:04] , I'm not on the stream. I'm just in general, I'm going to try my best to, to explain this and help people kind of see what's going
[00:15:11]  on, because there is a lot of really cool things going on. It's not there yet. We haven't finished the picture. So under that, sure. We can
[00:15:17]  rally behind this banner that Rich has made for us, you know, using his, his influence. But when it comes down to it, these are drastically different approaches that
[00:15:30]  are actually incompatible with single page apps today. Right? I know there's this hope that, you know, I'm just going to see how the dust settles
[00:15:37]  is actually how Rich put it. He's like, I appreciate, you know, he's like, I think there's higher priority things for Svelte. And honestly
[00:15:44] , where Svelte and SvelteKit is, I agree. There's huge adoption happening. Like they're getting to a point where they can make a run
[00:15:52]  at legitimately being like a key player in frameworks, right? Don't waste your time doing this kind of R&D. But some people are doing it. And,
[00:16:01]  you know, they don't like perhaps maybe being lumped in, like the whole thing they've been trying to solve is not be lumped in with those single page apps
[00:16:10] . Yeah, I mean, that's my piece. Some, some of you at least came here to hear, hear me rant a little bit, right? How's everyone
[00:16:20]  doing in the chat? I see a few, I see a couple of people have joined on now more. So it looks like we're probably where we need to be
[00:16:31]  for this week in JavaScript. Oh, sorry. Yeah. Here's another one from Astro. Yeah. I, I don't, I don't think there's much
[00:16:39]  more to kind of go over for JavaScript. So let's see if we can switch gears. And as this is going to be pretty solid focus, but let me give you
[00:16:48]  all a little back history here. The last time that I was doing freelancing and really got into deployment before, for the, before now, I, it was Her
[00:16:58] oku. Heroku was basically had changed to, it changed to, has changed the scene. And I think, you know what, actually, let me throw a banner up
[00:17:13]  so that I can easier make this cut point. Give me two seconds here. Oh, what the hell banners have folders now? Forget it. Okay. Nevermind
[00:17:23] . I'm just going to get started on this. Sorry. I'm just reading the comments here. I missed some good interactions. I hate Twitter, but I learned
[00:17:34]  a lot from the rants. I'm here to rant myself. Good thing, Dylan. Anyways, sorry, back to where I was, where I was going here.
[00:17:44]  Essentially back when I was doing, you know, random sites and doing random projects, I was basically on Heroku. And anyone who's used Heroku back then,
[00:17:56]  I know that it was a game changer. Like it completely, like before that, like back in the original day of web, I was using FTP and dropping in static
[00:18:06]  files. And that, you know, I think I talked about my guest book and Pearl scripts and my site that looked as awesome as Space Jam 1996, or at least
[00:18:14]  in my mind, it looked that awesome. But essentially, beyond that, you had these, you know, servers and running these machines. I remember my first job, I
[00:18:27]  actually got as a QA. Part of the reason they hired me was because I was decently good running hardware, because I did a lot of like computer repairs. So
[00:18:36]  I had to run our whole test stuff locally, like on actual machines. And I'm not going to talk about Docker, which came much later, or Kubernetes or any
[00:18:44]  of that kind of deployment technology, not really. But essentially, and, you know, it would take it down, run your scripts. And that was great. Then for
[00:18:58]  work, I basically was on AWS. And I was on AWS for almost a decade. And I did not pay attention to anything else going on. Mostly, I was
[00:19:06]  just provisioning EC2 instances. And, you know, AWS is great, because it has a lot of really small instances, you get these nano instances for like five bucks
[00:19:17]  a month, at least back in the day, or probably cheaper in the US, actually, I'm talking Canadian prices. And you could just like spin up as many machines
[00:19:23]  as you wanted and make a microservice architecture. later, got into lambda functions, and even edge functions with AWS. So I basically hadn't touched any of this stuff
[00:19:35]  for years. But to my surprise, I kind of came back around, I was like, Okay, what can I do here? So the first thing I do is,
[00:19:43]  I started to get hub pages to post static sites. And honestly, it's easy, but also kind of sucks. So I'm kind of glad that these other solutions exist
[00:19:51] . So let's, let's, let's, let's first here, talk a little bit about Netlify. Because even though Cloudflare was the first
[00:20:01]  integration I did for Solid Start, Netlify, you know, as you know, approached us and actually wanted to help Solid get started. And they have this button that
[00:20:12]  just goes on repos and lets you deploy instantly. And honestly, our starter templates should have that button, but they do not, because our starter templates are in a
[00:20:21]  mono repo, which it doesn't support, but actually got something great to share, share with you all. There's actually a Solid Netlify starter, if that is
[00:20:32]  your, if that's your flavor. Solid, not, not that one. Solid, it's a problem with Solid Start, not meddled with it. But honestly,
[00:20:44]  I have, this is not GitHub. I hate this. Why, why do my search results not give me GitHub? It gives me like some stupid, okay, whatever
[00:20:55] . It's like, I've never met or talked to Charlie Gerard directly, but they have my thanks because wrote the CSS tricks article, which is considered one of
[00:21:14]  the, one of the best starter articles for Solid. And they, they also made this lovely Netlify starter that literally just took our standard V template and added this
[00:21:30]  deploy to Netlify button. And all it, this is just our standard V template. You've all seen it before, but, but sweet these days is you can
[00:21:40]  basically now just put a button on a template and presto, gets set up with Netlify in one minute. Solid JS Netlify starter. Sounds good.
[00:21:56]  Save and deploy. Honestly, I've never done this. So I guess we get to see if, if, if this, how fast this is or what this is like
[00:22:06] , but essentially, and it's not actually that much, it's that different from, from doing this manually, to be fair. What you just, you can just install
[00:22:18]  the Netlify CLI and just run it. But yeah, essentially one button click deploys with Netlify, which I think is really cool. And I
[00:22:28]  want to, I want to see if this actually works and goes with, of course, as I said, I've never done this. So there's like a non-
[00:22:33] zero chance. This just blows up in my face, like most things on stream, but hey, let's, let's give this a shot and we can look at it
[00:22:39] . I'm also going to talk specifically about what we did for Netlify with Solid Start, but I just thought it'd be nice to kind of look at what it
[00:22:47] 's actually like when you just start with a random GitHub starter. And as I said, this is basically our starter template. So if you know that you want to deploy
[00:22:56]  to Netlify, it's the perfect place to start, assuming this works. All right. Now this could be my internet connection slow, but I've never done
[00:23:07]  this. I don't know. Has anyone else ever pressed one of these deploy buttons? Is it usually a fast process? Anyone know? Maybe not. Maybe that's
[00:23:15]  why you're here. I'm at this. Let's just open up Netlify because I do have a Netlify account, which hopefully will just log me in
[00:23:32] . And I do have a couple things in the, in here. And this is why you do stuff before stream. So you don't, so you don't make
[00:23:50]  things look bad. Who wants to guess that this has actually locked us up? They say one minute. Okay. It's good advertisement. All right. They say right
[00:24:11]  on the, I read. Maybe it's like a little, literally one minute. I should be counting the 60 seconds down. I didn't get like a little egg timer
[00:24:20] . Um, yeah, I'm not, I'm not getting anywhere here. Am I? Okay. No, that's tomorrow. I was like, maybe, maybe
[00:24:39] , maybe I I'm doing it during a maintenance window. Not seeing it show up here. Okay. I'm going to give this one more shot. Just because, oh
[00:24:47] , this is probably like the terriblest thing to do. Just re, just re. I'm just going to change the name here just in case. Okay.
[00:25:02]  Yeah. That type error from the deploy. I mean, it hits the second I press the save button. I don't, I don't, I don't think I
[00:25:13] 'm going to like. Yeah. I wonder if it's just something up with the repo that's configured wrong. And I haven't tried this or like something updated.
[00:25:26]  I was hoping I could just take the solid starter and kind of show it off, but maybe not. I've also done some manual deploys here, as you can see
[00:25:39] , which we can look at in a minute. Um, yeah. Yeah. Let's, let's maybe shift gears. I was hoping this would just be like an easy
[00:25:52]  win, an easy place to start. Okay. Let's, let's look at, um, I want to talk a little bit about solid start and the hacker news
[00:26:00]  example. I'm going to, I'm going to switch into my Netlify branch. Cause I want to start there. um, solid hacker news. Netl
[00:26:15] ify. Cool. Now I've shown off solid start previously on the stream a little bit, but, um, I think it's kind of, this is the piece that
[00:26:32] 's missing that sort of completes the puzzles. Um, there we go. Let's kind of full screen this. All right. Yeah. It's complaining about that.
[00:26:47]  Okay. Some invisible files from Vercel. I keep on switching around, but let's, let's just get started. So solid start app for hacker news is
[00:27:00]  pretty simplistic as a root component and, um, suspense around the different routes. And we have these pages. I think I've showcased this before blow up my screen a
[00:27:12]  little bit, but, um, essentially the way adapters work for solid and, and for the Netlify plugin is essentially you just import the solid start Netl
[00:27:28] ify and I'm just going to update my node modules here, uh, get that in. So npm run install npm run build. So essentially for Netlify
[00:27:41]  this folder looks like this and it essentially has a functions folder where I actually dump in our source code and it has, um, the rest of it is actually the standard
[00:27:57]  beat output. Um, but our server code ends up in this functions function, uh, sorry, functions folder. And that's what the Netlify adapter generates for you
[00:28:08] . And the way it took the way Netlify works, um, and I can kind of pull this up here is twofold. Essentially. And this is getting
[00:28:20]  a little bit here. So I'll start now fine. Their, their entry point looks like this, where they get for their functions, they get an event and basically in
[00:28:34]  a context, and you basically have to put on export dot handler. Seeing this immediately was really familiar for me, probably not familiar for everyone else. I could tell immediately
[00:28:43]  that, that, uh, Netlify uses AWS under the hood because this is actually basically identical to how you write Lambda functions in AWS. So from, for me,
[00:28:53]  for solid start, this was actually really easy. All I had to do was look, check the method. If it's a post render actions, which I talked about before
[00:29:02]  for solid start, but the main code was actually really simple. I essentially just call the render function for solid start, which is an alias over streaming or not streaming
[00:29:12] . In our case, Netlify actually doesn't support streaming because AWS does not support streaming. So this is just a render to string async under the hood. And
[00:29:23]  we pass in our manifest for preloading and we, our URL, but essentially to, to get Netlify working as a function, all you need, um
[00:29:33] , for like, for this is just this async function handler and then handle the event, call render on it, which can be rendered to string async, take that
[00:29:44]  HTML, return it to the body with the status code. Part A, part B is you need a Netlify toml, um, which is set up to
[00:29:52]  tell it where the functions are, which I told you was dysfunctions and it redirects everything slash star to that function. That was essentially all I needed to do to
[00:30:03]  get solid start working here. And I wanted to show the other example because the other example was the single, the spot example. That's the easy one, right?
[00:30:12]  Using, it's not going to work using Netlify to create a static, um, site would just, um, you know, like it's a client rendered,
[00:30:22]  um, single page app is super simple because you can just basically point it to the disk folder. It'll run the build command for you and it'll do everything really,
[00:30:31]  really easily. Um, but, um, to do a function is a little bit more complicated because you need to handle the redirects yourself and you basically need to define
[00:30:40]  a handler in a functions folder. Um, and if, if I go down to the bottom of this, this is all my compiled code I used to roll up and beat
[00:30:50]  to generate this, but you can see this, this is just our same thing. That's, that's basically all there is to Netlify. If you have any
[00:30:58] , any kind of questions about it is it is identical to, um, AWS essentially. Um, so, uh, that's, that's the gist for Net
[00:31:08] lify. I could, yeah, I, I'm, I'm, I'm, I'm sort of disappointed that the simple example ended up not working the way I
[00:31:17]  wanted it to. We could probably just go open up a solid starter app, um, locally and just deploy to Netlify to kind of see what that would look
[00:31:28]  like. Um, but clearly this is, this is not working. So let me see, do I have, do I have, yes, let's just open up a
[00:31:42]  new VS code window actually. Hmm, hmm, hmm, oh, development, samples, my app. All right. I was, I was playing around with,
[00:32:21]  uh, for cell up, for cell ones here, but essentially I imagine Netlify is the same thing. So I, I have here, I don't know if
[00:32:28]  you've, you've probably seen this before. Um, I'm going to run build again, but I don't really need to, um, mpm run. This
[00:32:36]  is, this is what happens when you clone a, a basic template in solid npm run. Sorry. You've probably seen this before and yeah, it's just
[00:32:55]  a spinning thing, right? So essentially to get, sorry, closing my windows to get this app to deploy to Netlify, I think all we need to do
[00:33:09]  is run the Netlify CLI. Let's see what it says, right? Um, First make sure that we're logged in, already logged in. Okay
[00:33:36] . So Netlify deploy, let's see what it tries to do. Create and configure a new site. Uh, what are we gonna call this? Uh,
[00:33:51]  beat starter, um, publish directory. Might need to change this in the future, but let's give this a shot. Um, I guess we could do start out dist
[00:34:09] , right? All right. Let's see if our new site shows up on that, on Netlify. Beat starter, manual deploy. And let's look at
[00:34:25]  our deploy preview. Beautiful. And it worked that, um, it's, it is much easier, obviously, than what I'm making it look like probably, but essentially
[00:34:39]  that's all we need to get started with Netlify. You can, you can pretty much instantly with the CLI, get your app up there. And if
[00:34:46]  you go Netlify deploy prod, what would be the, the prod deploy? Um, what did I do wrong? This is weird. It's like, it thinks
[00:35:03]  I said deploy rod. That's so weird. Deploy. Prod. Unexpected argument rod. Oh, it's double, double. I'm just being
[00:35:23]  dumb. And asking me this again. Okay. Bam. And now we have beat starter Netlify app. That's crazy that I just got this because I feel
[00:35:46]  like someone else should have beat starter.netlify app, but there we go. Deployed. Okay. Um, and honestly deploying first, for solid start,
[00:36:00]  uh, apps like hacker news is exactly the same thing. Um, let's go over here. Let's go over here. Let's make sure this actually works.
[00:36:19]  Right. And, um, um, it's like opening it in the wrong window. sweet. Okay. Nevermind. Let's try it. Let's just try
[00:36:27]  our Netlify preview thing. All right. And here's our draft URL. Let's open it. And for some reason it's like pulling me off to
[00:37:05]  the wrong screen. Here we go. Here is our deployed hacker news preview. Um, using Netlify. Okay. So, this one doesn't have streaming unfortunately
[00:37:21] . Um, but it's interesting, you notice that you don't see any load flicker. That's because it doesn't have streaming. So sometimes that can be a
[00:37:31]  double-edged knife. Um, so to speak, but I like to pretend you missed something important, but what actually happened was I tried to show everyone, uh
[00:37:45] , a Netlify starter and, uh, that was pre-made for us and it didn't work and it keeps on crashing. So I had to just go take
[00:37:55]  a sample. Um, like when our standard beat templates download it locally and then do Netlify deploy. And now I'm just showing solid start, um, with
[00:38:05]  Netlify. So, you know, actually, no, now that we're here, why don't we do something useful, right? Let's, uh, let
[00:38:16] 's actually go in here and what version of solid are we on here? This, this seems, this seems old. Let's, let's upgrade solid to 1.2
[00:38:25] .3 or something. And we're on like 10 of this. Let's just upgrade some dependencies. Um, npm install. Npm run build. And let
[00:38:41] 's just deploy our preview app and let's look at it, make sure it looks nice. again, wrong window. And yeah, looks good. Still works. We
[00:39:06] 've updated our depths. Let's just, uh, let's just deploy this to production. Deploy prod. There we go. So we, we, we just updated
[00:39:17]  the hacker news example for, for solid. And, uh, let's commit our changes back up. Beautiful. Okay. I don't know if anyone. Yeah
[00:39:35] . I talked about this briefly. Um, maybe if we have time, I'll go back to it. Uh, we probably will have time because I don't think the
[00:39:44]  deployment stuff is going to take forever. Um, honestly, I just, this is what I've been working on. Um, and the funny thing is, although these have
[00:39:53]  all different outputs, as I'm going to show you, show you in a minute, um, the hacker news examples are sort of the, the, it's,
[00:40:01]  it's, it's remarkably simple, uh, similar to the setups between setting up these different things. So let's, let's, let's move on to,
[00:40:07]  let's move on to Vercel. Right. Um, I don't think there's anything more that I want to show on Netlify specifically. Now Verc
[00:40:14] el is interesting. And I've, I've had the pleasure of working on a brand new feature that they've been developing here. I've, I've made a PR
[00:40:22]  for it and I'm kind of waiting for it to get merged, but essentially Vercel has a couple of ways of doing things. And one thing that's really
[00:40:31]  cool that they do is that they have this ability for frameworks to kind of register themselves in this framework TS file, where you can basically set up things so that they can automatically
[00:40:44]  detect it. And you set all your build commands and you know, there you go. It works. I set up solid, um, for abnormal templates and I set up
[00:40:53]  solid, solid start this way. And they actually will host an example for you. So I, I, under their examples, I've actually, sorry, not sp
[00:41:00] elt, I have a solid example and a solid start example. And, and this is really quite cool because they've kind of take that out of your hands. So someone
[00:41:11] 's like, oh, Hey, I want to start a solid app or a solid start app. You have all, everything you need at your fingertips. You can just kind
[00:41:17]  of browse the different configs. It shows up right in their UI, um, which I can show here. Let's get to the first off. And, um,
[00:41:23]  I have a few apps here, but like if I was creating it, I'm just going to take this silly test project to show you what I, what I'm talking
[00:41:30]  about. But if I go to settings here and I don't have anything secret in here, I don't think, but essentially, um, let's make this a little
[00:41:38]  bigger. You can say what kind of, what kind of project it is. Is it a next project? Is it a blitz? DocuSort? Preact
[00:41:44] ? Hammer? And when I get this PR merge, solids and solid start is just going to show up as an option. So that's pretty cool. And, but
[00:41:53]  the, the real cool thing that they're doing here is I, I showed that hacker news example off, you know, and it's, it's kind of like a
[00:41:58]  pinnacle. It's got streaming and it's on the edge and it does all that kind of cool stuff. But I had to use next.js to do it
[00:42:04] . I, I kind of hacked around and I was like, saw what they're doing with next and jammed it. But what Vercel's been working on is
[00:42:10]  something they call the file system API. Um, and it's really kind of cool because it has nothing to do with next AI. Yeah. So it's still beta
[00:42:22] , but essentially you make an output folder in your project. And then depending on how you put the files in kind of like how our routing solutions work, like they have pages
[00:42:32]  and static and functions and middleware base, basically depending on how you structure it, like, you know, here's a blog site or here's this, it will
[00:42:42]  do different stuff. Like, you know, you can have API routes. So you put an API, it's, it's basically like the advantages you have with next without
[00:42:49]  using next, which makes it really think middleware, this is how you get edge functions. You, you literally just put that in. Um, so this was really easy
[00:43:00]  for me because before I made a Vercel edge adapter, I thought I could have to make a different adapter for each kind of deployment. Cause you know, the builds
[00:43:08]  and stuff are very different and you'd have to kind of, um, you know, worry about that, but I realized now I can just make it configurate,
[00:43:16]  you know, cause there'd be different dependencies. Like if I had to use next.js or not use next.js and all this stuff, but because, um,
[00:43:23]  it's just a simple file system output. Now I can literally make a single Vercel adapter and you can just go, I want on the edge or I don't
[00:43:31]  want on the edge. And that's the direction we're going to be going with, with Vercel here. Um, um, so far, I only support
[00:43:38]  edge, um, functions, but essentially, uh, that, that's, that's what we do here. So let's, let's take a, let's take
[00:43:47]  a look. Cause I said, because our main example is like VEAT, which, um, isn't, you know, terribly interesting. Um, let, let
[00:43:56]  me go back to my, my, my Vercel set up here. Cause I think, let's go over view, let's see here. Yeah, here
[00:44:06] , I already did this earlier. Um, I made this solid template that doesn't actually work. Let's visit. No, maybe I deleted it. So let's
[00:44:18] , let's, let's hijack this for our own purposes here and use Vercel in our simple, um, app set up here. So I'm not
[00:44:27]  going to mess with this one, but what I want my app, we just made Netlify. let's just, let's just make our, our thing work
[00:44:40]  with, with Vercel now. Okay. It's basically the same deal. So this example is old. Solid 1.0 RC 10. Hmm. Anyway, it
[00:44:52]  doesn't really matter. CV template solid. Okay. So this one is nothing special. You see how V just has its normal assets. I'm just going to leave
[00:45:03]  that as is. So if we want to, for, for our main solid templates, which are just a V, it just recognizes V and it just uses just that as
[00:45:10]  the dumps. So we can just go Vercel here and let me make this a little bigger and Vercel goes, Oh, okay. In fact,
[00:45:23]  it's already linked to this project. So it, it starts, uh, it's just building and doing its thing already and it's completed deploy. Let's open.
[00:45:38]  And this is again, wrong window. This is just our, our, our spinning globe here, um, working and preview. So this preview build, which we just
[00:45:52]  did should show up down here and it's working. Um, see deployed by Ryan just now, but prod is broken. So let's update prod. I don't know
[00:46:01]  why prod is broken, but I think it's just Vercel dash dash prod. And here we go again. Yeah. It takes a second to build because V
[00:46:19] ercel actually builds the project themselves. But I said, when we get this all configured with the new solid integration that I'm currently have a PR for, this is
[00:46:32]  gonna be really nice. Yeah. So now production build is updated. Hopefully that looks better. Doesn't it? Let's, uh, let's what's this, the
[00:46:43]  actual site here, solid template Vercel app open. And there we are. We have our lovely Vercel spinning app. Okay. Nothing too special there,
[00:46:59]  but I want to talk a little bit more about the file API because the file API is really quite cool. So let's go, let's, let's look at solid
[00:47:06]  start. And this time let's switch our branch over to the Vercel branch. I called it Vercel edge, but it's not even Vercel
[00:47:14]  edge anymore. So let's, let's, let's look at solid start. Now that's all start. Let's look at hacker news example. My bad. And
[00:47:24]  let's shrink that one down. Where is it? I want That's for cell. Don't need that one. So I got like too many VS code windows open.
[00:47:40]  Here we go. Hacker news example. Now we're on Vercel edge. Okay. So let's MPM install. Get our right dependencies. Let's
[00:47:47]  blow out. Actually, you know what? While we're here, let's update solid two, right? It's been a while. And let's blow out, um
[00:48:00] , our dist folder. And we don't need this Netlify folder. And all right. Now let's see here. Now let's run our Vercel
[00:48:19]  command. So let's set up and deploy. Actually, no, before that, let's run our build command. MPM run build. I want to show you what
[00:48:29]  we generate here. Um, and it's an output folder and it generates a function manifest file, um, which is how Vercel finds your function. In this
[00:48:40]  case, it's a middleware. These general Vite build that we've been seeing so far, the solid start field goes in a static folder. And then the server
[00:48:48]  filter has a pages middleware where our actual server render gap goes. And this one, um, I mean, let's pull, pull up here. He is.
[00:48:58]  So let's start for cell. Is, uh, sorry. Is a little bit different. Um, they have this structure here. I don't know what it is
[00:49:13]  exactly, but I guess they look for these keywords and then you set a default for the middleware. So that part's a little bit weird and different, but generally
[00:49:21]  speaking, the middleware gets your request. And then these request objects you're dealing instead of being like an AWS event are basically the browser's, uh, you know,
[00:49:31]  request and response objects, the native ones. Um, there's a little bit fancy stuff here, but when I started using this right away, I'm like, oh,
[00:49:39]  this is the same as cloudflare. I haven't showed you cloudflare yet, but essentially it was fairly obvious that they were using cloudflare under the
[00:49:47]  hood for their edge functions because it's basically the very similar API. I had to do a little bit of fancy wrapping to tell it to kind of like serve the original file
[00:49:56] . You got to set these special headers. This is stuff they document. It took me a little bit of playing to get there, but essentially with this wrapper, um,
[00:50:05]  as my entry, I was very easily able to and get things going in it. As I showed before, it's basically if it's a post, send it to an
[00:50:14]  action. This is how we do our isomorphic like RPC calls. If it's a URL, um, you know, route, then we're going to
[00:50:23]  do our render and send back the HTML. Otherwise just forward the resource through. And, um, this is the, basically there's a slightly different one for streaming and not
[00:50:35]  streaming for streaming. We, we actually create a transform stream and pass that through, but otherwise it's basically the same wrapper. I haven't showed you this side of
[00:50:44]  it, but almost all of these, um, these solid start, um, adapters have the same format. I basically, if they have async, I, you
[00:50:58]  know, they all have async. So I'm an async entry and then I have a streaming entry at this platform supports it. Um, there's an option
[00:51:04]  you can set to your config to turn streaming on and off called prefer streaming. And I just kind of use that. And basically the adapters, it export a start and
[00:51:13]  a build function. The start function is usually just like the dude, like the developer preview. So this one just calls Vercel, the other one just calls Net
[00:51:20] lify kind of like what we've been doing, but, um, the build one actually is pretty similar for all of them. It uses the beat, um, program
[00:51:29] matic API to build our outputs. So I, in this case, I'm building it to output static and that's how I do all the client builds are handled by
[00:51:39]  beat and even the server build is handled by beat. But then I, after that, um, basically I do a bunch of moving stuff around and then I use roll up
[00:51:49]  to do the final server build to kind of stitch together the custom entries. Now it's might be possible with beat to do this all on its own. Um, but I
[00:51:58] , beats like likes its index HTML and some like weird quirks. And I was having issues with it. It was, it was easier for me to just kind of
[00:52:06]  pull roll up in to put together a server bundle. And here we're not like really caring that much. This is only on the build and it just lets us stitch together
[00:52:14]  these, these entry files, um, that, that we use. Um, so just using a few programming APIs. And if you, if you look at the solid,
[00:52:23]  uh, start adapters, they literally are all identical. All I do when I go in is go, Oh, slightly change the build output, but they're almost
[00:52:33]  always the same. That's why I was able to kind of make new ones really, really quick. Most of the work is actually just figuring out what the entry format is
[00:52:40]  so that when we get our output, you know, like here, like all the way down to the bottom, we generate the right stuff. And in the case of V
[00:52:49] ercel edge functions, it's almost identical to Cloudflare. So I was able to almost immediately get that working. Um, probably more details than people care to
[00:53:00]  know, but we now have this built and just like before, let's just call Vercel on it. Yes. Yep. Existing project hacker news.
[00:53:14]  Yes. And we're going to deploy a, um, with our new updated build, new latest version of solid and, uh, takes a moment and we're good.
[00:53:27]  See, my, my hope though, as I said, is when the integration works, you, you, you'll be able to just get this for free, either take
[00:53:33]  the examples directly off of Vercel's page. And they have that similar deploy button, like Netlify. So you'll just be able to go, Oh
[00:53:40] , I want this solid start demo. Just click deploy. They'll deploy it to you. You clone the get repo and you'll basically, um, immediately have a working
[00:53:48]  Vercel deploy. Or as I, as I said, you can just do the adapter yourself, run the Vercel command, create the new app or whatnot.
[00:53:57]  And, uh, let's just double check that this is working. our hacker news example is working. It is. Yeah. Beautiful. So fast. You don't
[00:54:13]  even see the streaming. Oh, there you saw it. But yeah. And, uh, yeah, we're good to go. I'm going to, I'm going
[00:54:21]  to do a prod deploy at that one. But yeah, actually, you know, it might be fun. Uh, let's just, uh, it's probably not
[00:54:31]  that fun for most people, but let's, let's, um, let's, let's actually change one of the options here. Let's, let's, let
[00:54:41] 's get to adapter Vercel. Let's go. What if we go prefer streaming false, right? You know, not everyone wants to do streaming on their Verc
[00:54:52] el, um, endpoint. I do default to prefer streaming, but okay. So first of all, let's double check that our production deploy worked properly. And this
[00:55:09]  looks good. You see the loading state as the data loads in from the stream. Okay. Beautiful. And let's go, just go to one of these pages.
[00:55:20]  Yeah. Looks great. And let's actually just do it. Let's, let's just do a preview build right now, not to prod without, with streaming turned off
[00:55:29] . Um, kind of see how that works. I've kind of, kind of glazed over a lot of terms. Is, is everyone familiar with, um, edge
[00:55:40]  functions and whatnot, and the difference between, uh, serverless functions and edge functions. This, this, I realized I kind of just jumped right into it and I
[00:55:49] , it might not actually be terribly, terribly obvious. Um, sorry. And I actually missed a question back a little bit. This file system API is specifically for handling off
[00:56:07]  to Vercel for hosting, right? It's an API for deployment. Yes. Um, the file system, API is actually, um, like if you,
[00:56:14]  if you can generate that format, um, Vercel knows what to do with it. So you, you can basically generate any type of app using kind of the same
[00:56:25]  format. You can even combine a static site, which will, you know, pull from their CDN with, um, like normal, uh, serverless functions and
[00:56:37]  edge functions, all part of the same kind of app and they'll just deploy everything as it makes sense based on how you format your files. It's super, super powerful
[00:56:46] . So yeah. So here, um, let's see if we just did a, let's try our sample here with streaming off and just to, to, yeah
[00:57:03] , let's refresh. Oh, no, maybe do not. Oh, did I not build? See this, this is, this is a thing right now, the way
[00:57:11]  this is set up to build, they're happening on my computer. So even though I set the settings differently, I didn't actually build the project with the settings set
[00:57:20]  differently. So there we go. Now let's run it again. Sorry about that. Let's take a second. And we already have this open. That's good
[00:57:47] . That means it deployed. Or does that mean something's broken? No, it means it's deploying. Either that, or it means that I haven't tested the non
[00:58:02]  streaming version and I have a bug in, in solid, um, solid start. So, you know, let's, we can actually see this super easily because we
[00:58:16]  can look at our latest deployment. It has a function real time. Ah, there is a typo. I was positive. I fixed this typo, but maybe I
[00:58:30]  missed it in one location. So what happened here? I can fix this very quickly right now, but it looks like I have a typo in my generated stuff.
[00:58:48]  So, missing an O. I fixed this bug already, so I'm pretty sure I just installed older version of, of, a solid, uh, Vercel
[00:59:03]  adapter, but okay. Let's just fix that. But yeah, this is gonna be a lot smoother, obviously in the future. And I think that the amazing thing
[00:59:26]  is how we have these tools, great UIs, interfaces that, to kind of inter, intervene with, but in a lot of ways, they're all super, super
[00:59:34]  similar. Um, yeah, there we go. And this one won't flicker. You won't see any load. You shouldn't see any loading state on this one
[00:59:43]  because it, it completely, it completely server renders, um, before and there's no streaming happening. Okay, cool. So that worked. I know probably not
[00:59:55]  the most interesting, uh, tangent, but yeah. Talk about the difference between Lambda functions and the edge functions. Um, yeah, it's not the, it's
[01:00:08]  not actually a huge difference. It's all about where the function runs. Now, generally speaking, serverless functions are just little, um, code executed functions, like,
[01:00:24]  but they still get run on your, the, you know, the typical VM infrastructure that you find on the cloud providers. Um, you know, you don't manage
[01:00:31]  your own EC2 instances or whatever, but essentially they have a ton of computers running a ton of virtual environments. And what will generally happen is they'll allocate a certain amount
[01:00:44]  of processing to you, run your functions. And you can actually set stuff because you get billed by like how much CPU you need or memory. And they'll kind of
[01:00:52] , if you've ever heard the, the term like startup or a cold start, essentially when your function first fires, it will actually allocate some of that space to use
[01:01:04] . And if it runs again, it'll actually kind of keep it live. They don't actually kill the functions right away. They, they, they have it, them
[01:01:12]  run and like be ready in the background. Maybe I forget the exact amount. It depends on the provider, maybe 20, 30 minutes, but essentially that's kind of the
[01:01:20] , the gist of the, of the functions. But if you get too many, parallel requests, well, one function can't handle. So they allocate another,
[01:01:28]  another, and you can kind of get into these chains of cold starts because a bunch of requests come in and then essentially they all have to like, the first one can't
[01:01:35]  be fulfilled right away. So they try to allocate, the other one comes in and they, and they kind of spam out. It's possible go kind of really wide.
[01:01:41]  And I know this isn't specifically, but I just want to kind of explain a little bit about the basics of serverless functions. Um, in any case, uh
[01:01:50] , you get a certain allocation of, and once, you know, you have enough parallel requests. And what's great about this is they can just scale up as needed.
[01:01:58]  I mean, cold starts are awkward. So sometimes people ping their end points to make sure that like they always have at least one live or two live, a couple resources.
[01:02:06]  Um, you know, even on low times in case, you know, someone, you know, hasn't used the service for a while and it's, they can pick
[01:02:12]  up really quickly, but generally this is really great for smaller companies like startups and stuff because they don't know their allocation. And if their service, especially kind of spor
[01:02:20] adic, like maybe users only use it during the day or whatnot, it doesn't make sense to be running servers all the time. Generally speaking, if you run the service
[01:02:27]  yourself and you know, the proper allocations, it is cheaper and you can go in and, you know, do a bunch of other ways of things like run your own
[01:02:33]  Kubernetes to kind of scale things up and auto scaling groups and AWS and all that. But essentially, service functions are so easy. Like I've showed you just deploy a
[01:02:42]  function and you don't have to worry about that. What's the difference between edge functions? Well, they're just serverless functions with less resources allocated to them. And
[01:02:50]  the reason is that instead of running in the like internet of the company, like AWS or whatnot, they, they run at what's called edge locations. And basically these edge
[01:03:01]  locations are where like CDN hosting is basically if you have assets and if you ever use anything like Cloudflare or like for CDN or like Cloudfront in AWS
[01:03:13]  or whatnot, essentially when you have a site, you can have your assets distributed globally so that it's close to your users. So instead of going all the way back to
[01:03:21]  AWS in East Virginia or whatever, essentially you can have a site in Australia where, sort of location in Australia, which will serve static assets. What edge functions do is they
[01:03:33]  let you run functions basically at those, at those locations. And there's usually some restrictions to them because like, like essentially you're not, even though they have like
[01:03:45]  a, a really good connection to the main service, like at AWS, like it's better than the person's own internet thing. Like this is dedicated between these edge
[01:03:56]  locations and, you know, the, the main data warehouses and whatnot, AWS, you still, it's not the same as actually being in there. So quite often
[01:04:06]  there's limited functionality and you have less memory to work with. But what's really cool is it gives you a way of intercepting requests and running code even before the
[01:04:18]  CDN. A lot of times with edge functions, what they do is they actually intercept requests before they get to the CDN. So you can do really cool things like
[01:04:25]  edge slicing or edge splicing where, um, you can kind of like go, oh, I actually want to mess with stuff. Like I want to change the request.
[01:04:34]  You can do auth up there too, if you want. And you know, you can, you can both kind of on the way in change the request or on the
[01:04:41]  way out mess with it. Right. So you might go, okay, I'm going to go get this asset, get it from the CDN. And then on the
[01:04:48]  way out, intercept it and be like, um, I'm going to personalize it for someone slightly. And that's been kind of all the rage recently with static sites
[01:04:56] , because you can basically put static sites in the CDN and then tweak them a bit right on the edge, but we can do more with that. Right. And that
[01:05:03] 's what I've been playing with. If you've got a small framework, something easy render, you could just do the full rendering at the edge. Sometimes obviously there
[01:05:10] 's a latency issues with like database connections or you can't get private thing. You have to kind of go over the internet in some cases. Like if you've ever dealt
[01:05:18]  with, uh, what are they called? Um, in, in AWS, um, there's like zones essentially and stuff like edge functions live outside of the, of those
[01:05:27]  zones. Um, other global services like S3 or, um, uh, DynamoDB also live outside their design, but like you, you, uh, you
[01:05:36]  can, you have generally for a lot of cloud providers, you have your own kind of, uh, VPC or like virtual private network, um, which kind of mirrors
[01:05:45]  the old standard way you'd like set up, um, this kind of stuff in the hardware level. They kind of brought that over and cloud providers like, uh, AWS
[01:05:53]  and Azure could have mirror that. And this is great for people from familiar with, you know, classic networking stuff, but essentially with, um, edge functions and functions
[01:06:06] , you kind of mostly bypass that stuff. If you, you know, choose what kind of services you use, you know, um, you know, globally available APIs,
[01:06:14]  things like as a DynamoDB on, um, or just like API type services, you can just access them from the edge. And even if there's latency, this
[01:06:22]  is why I'm so excited about streaming on the edge because here's the thing it's super close to the end user. So serving static content happens fast, which means
[01:06:31]  if you, you know, have a page, you can get that shell up there. You can get the main content to them almost immediately as if it was static, but
[01:06:40]  if the connection to the data sources further away takes longer, it's okay with streaming, you don't lose that benefit of getting it in their hands right away. Um
[01:06:49] , whereas if you're doing async rendering and there's more database later and see, well, you just gave up the benefit of being so close to the end user because
[01:06:56]  you have to wait for that data anyways to actually send them the page. So, um, that's kind of the, the whole deal with edge and why edge is so
[01:07:03]  exciting is because it puts the processing almost right, right in the customer's, uh, hands, right. It's, it's right where there's the CDN
[01:07:12] , um, caches are. And, um, this is super powerful stuff. I don't know if that's a great explanation, but I, hopefully that makes sense
[01:07:19]  to some people. I, I I've obviously dabbled in this stuff more, uh, more than just with the, with the stuff I'm doing here with solid
[01:07:27] , but it's when I see things with edge streaming, I'm like, that's where you need to be. And that's why I got so excited by Cloudf
[01:07:33] air, which was my original adapter, but Vercel is doing the same thing. Um, so that that's kind of the gist. I don't know
[01:07:39]  if that answers the question, but hopefully that gives a little bit of insight. So let's, let's, uh, let's kind of, I think that is mostly
[01:07:47]  on Vercel and honestly, I'm gonna, I'm gonna go Cloudflare a little bit faster here because, um, it's more of the same. I
[01:07:54] , I think, I think the thing you probably probably take away from the stream more than anything is even though I've been doing a bunch of work trying to get these
[01:08:03]  kind of custom builds and adapters. And as I said, I'm very impressed with what Vercel is doing here. Um, essentially they're all kind of the
[01:08:12]  same. And just to briefly show what that means, I can go back to the Cloudflare example, which is probably the oldest of the bench. Um, actually
[01:08:23] , you know what, let's commit our changes for this one. Cause we did update the depths, right? Update that. Let's not keep our first streaming off
[01:08:34]  because we want streaming, um, update depths. Okay. Um, not really, it's just size. Like for example, on AWS, um, your standard Lambda function
[01:08:52]  can do be like 120 megabytes or something, or yeah. And the edge, like the ones that are actually on the edge, like it's funny, AWS actually
[01:09:02]  has four classifications of edge, um, functions. They let you actually intercept request in like pre CDN post CDN, like on the way to S3 or internal
[01:09:12]  library back from S3 or wherever. And then, and then finally back out again. So they actually have, and the ones on the inside are actually the same as normal
[01:09:23]  Lambda functions. It's only ones like that are pre CDN that are actually on the edge. Um, sorry, probably not important detail, but essentially I think those
[01:09:31] , you can only have like one megabyte. So it does affect things, but so size is a consideration. Um, and then I mentioned it, it also matters on
[01:09:40]  a lot of cloud provider services. Now with something like Vercel or Cloudflare or, um, you know, NetFi when they get to edge functions, I
[01:09:49] 'm sure it's on the docket. Um, essentially they don't, they don't have those other services anyways. That's not what they're focused on,
[01:09:57]  right? They expect to use APIs, Jamstack, all that kind of stuff. So generally speaking, as long as you are producing like huge megabytes of, of
[01:10:05]  code, you're, you're fine. And I think they actually have, I think Vercel and Cloudflare probably have slightly different limits. I know maybe
[01:10:13]  AWS has expanded theirs since then, but, um, because sometimes, you know, having binaries for like postgrads and stuff is, you know, where you actually
[01:10:21]  need C code actually took more space, um, on the edge functions. And we actually had to do a little wrangling on our bundling to actually make sure we
[01:10:28]  hit under that limit. Um, so things have probably changed slightly. It's been a couple of years now, I guess, about a year and a half since I've
[01:10:35]  been at eBay, but since I've been wrangling it, but generally it's mostly about code size and memory allocation. Um, but the code itself is fine
[01:10:43] . Um, so where was, uh, yes, uh, committed our changes and yeah, yeah, we're, we're good. Let's, um, quickly go
[01:10:59]  back to this one. This is the original Cloudflare one. The only thing you're going to notice with Cloudflare is it was the first one and it
[01:11:10] 's also maybe the easiest one. Um, what's the easiest one for me? Because I don't think I actually needed to change. Yeah. I just left everything originally
[01:11:24]  where it was and Cloudflare just needed to know where the entry point was. So I'm just like dist, index, find. And the Cloudflare example,
[01:11:32]  if we get down to the bottom here is actually, it's a little bit different than the one we just looked at from Vercel, but it's actually really
[01:11:42]  similar for the streaming. It's create that transform stream, exactly the same way, pass it to render and send back the new responses. These things are almost identical and on
[01:11:50]  the process for building them is almost identical. And it's nice to be able to kind of hide or abstract that piece from the end user. Um, so I'm not
[01:11:58]  going to deploy this one. Uh, but essentially you just call Wrangler and it's, it's, it's the, it's the same thing. Wr
[01:12:05] angler deploy, Wrangler deploy prod. These services are all very similar and they're actually all really quite nice. Um, Cloudflare is a little different than
[01:12:15]  the others because you don't, um, essentially, I mean, it's, it's not really, they, they, they have, uh, the edge functions
[01:12:26] . I haven't, I don't know if they have the static, uh, deploy things that they're set up a little bit differently. They have cloud for,
[01:12:34]  uh, workers, which are the edge functions and they have cloud fair, um, cloudflare sites. I think it's called, um, which are where you can
[01:12:43]  have like the host, the static hosted stuff. And, um, in our case for cloudflare, actually we can get a combo both and we use something called the
[01:12:52]  KV store to access the resources. I don't, I, these things are really all quite equivalent. Um, it's, this is kind of why I think
[01:12:59]  these adapters and stuff like solid start should exist so that we can essentially, uh, wrap, um, the functionality, um, you know, very easily. You don
[01:13:11] 't have to worry about this bit. I know I'm, I'm kind of going into it and showing a little bit of how it works and how the build step works
[01:13:18] , but I mean, really, this is all we need. And it's, it's really cool that we can just share the same setup and just do slightly different
[01:13:26]  builds and they all are roughly the same thing. Yeah. All right. So, I mean, that's, that's, that's honestly most of the stuff with deployment
[01:13:38] . I knew today I wouldn't really have as much stuff. Um, and honestly, I don't think people found it as interesting as some, some of the other streams
[01:13:48] . This is, this is kind of common knowledge you can find it. Um, but it's really cool to see what Purcell has been doing with edge functions.
[01:13:56]  It's really cool to see, um, not, not just with that trenches, but with their file-based API and it's, it's, it's kind of
[01:14:02]  cool to see this kind of converging. Uh, I think we're seeing it moved more towards using, um, request response, um, like built-in browser native
[01:14:10]  things for handling these things, which is quite cool. And remix run runs that way as well. So, um, seeing that in our deployments is, is good
[01:14:19] . And honestly taking the same app and switching where you want to go is really quite easy. Um, it doesn't really take much thought and that, that, that was
[01:14:27] , that really was my goal. Um, in terms of that, um, since, you know, we're probably gonna end a little early today, because I don
[01:14:35] 't have a ton of topics who wants to, I'm just gonna go at it. Let's, let's, let's look at this Twitter conversation that people said was
[01:14:43]  kind of interesting that I glazed over earlier. Um, let's, I'm just gonna look at my notifications. I can probably find it there. Um, yeah,
[01:14:53]  let's get to the top of it. Here we go. Where is this thing? Not being able to run, conditionally run hooks and react is such a pain
[01:15:07] . I know there's a good reason and there are workarounds, but I just want to use it in a statement and have it work. I, I honestly,
[01:15:14]  as I mentioned earlier, I don't think this is a, that big of a deal, but you know, people, people, people did kind of get to it
[01:15:24] . Some people called out solid, which is cool. And, you know, I appreciate that, but honestly, even if you can do it in solid is, you know
[01:15:34] , this isn't really that big of a, like, it's just, it's just a weird situation, but what, what kind of caused the, the conversation,
[01:15:45]  let me see if I can pull it up here is someone was like, oh, this is why I love Svelte. Svelte doesn't have to worry
[01:15:53]  about any of this stuff, blah, blah, blah. Uh, and yeah, here we go. The lack of rules, hook rules is such a fresh breath of air
[01:16:01] . And when I started using Svelte, so liberating to not have to work in the confines of hooks and also the virtual DOM. I, I know that
[01:16:07]  doesn't help, but I just want to share sweet. And that is awesome. As I mentioned, a lot of people are really kind of embracing and feeling the benefits of
[01:16:18]  reactivity, because of this. And, you know, some, you know, oh, it's so simple. Where's the catch? So what I was going
[01:16:27]  to point out was this very example about being conditional actually applies to Svelte as well, because you can't put a dollar sign label inside an if statement, nor can
[01:16:37]  you nest dollar sign labels. I actually test it. I already knew you couldn't, but I wanted to test it. And the reason is Svelte, it
[01:16:43] 's like react runs off components. So essentially, regardless of, you know, of, you know, the reactivity model, you still kind of rerun full components,
[01:16:56]  maybe not all the parts of the components, but you rerun the whole cycle from top to bottom. And for that reason, you don't get to be dynamic with
[01:17:07]  the, with like the fixed points of the template. And since Svelte can't nest, you can't put like a HTML tag inside a dollar sign expression or whatever
[01:17:19] . You have to break it into a different component anyways. Essentially, it has exactly the same restrictions as react. So I wanted to point that out. You know,
[01:17:29]  and I guess Ember is the same someone's mentioning, but essentially, in response to this, we got the attention of Sebastian. I don't know his last name,
[01:17:42]  I don't know if I pronounced it right. And he is many people, some people were like, Oh, well, what's this guy saying? Who's this guy
[01:17:50] ? Always be careful to look up who you're talking about before you kind of kind of go on a side thing. Seb is basically the visionary between react. He wasn
[01:18:01] 't, he's not the original creator, but he's been kind of in charge of the vision. Everyone else on the react core team kind of defers to his,
[01:18:10]  his, his, like his, where he sees things going. You, I noticed this talking to Dom, talking to Dan, he, for his real name is react
[01:18:22] . Yeah. He is basically like, he is the guy, the brains behind the whole thing. Suspense, concurrent mode, you know, algebraic effects, whatever
[01:18:33]  this, this, this, this, this, this, this is sorry. Did I share this one properly or did I click the wrong one? He is basically it
[01:18:49] 's important to take that to understanding here because he does not often come out to act. He, he, he kind of like works in where his vision is kind of keeps
[01:19:01]  his head focused. It's very rare that we actually engage with him in this sort of way. So I thought this was actually quite interesting. And what he's saying
[01:19:12]  is my main gripe of solid and svelte approach is that an evident by the strategies. It's very easy to just have it work for conditions and initial amount,
[01:19:18]  but not react to changes. It's simple, but deceptive. It doesn't matter how it doesn't matter for a few consumers, maybe. And obviously my first
[01:19:29]  thought was maybe, I don't think we should be bunching solid and svelte together. I mean, I, I, he probably doesn't know very much
[01:19:38]  about solid, but essentially solid is fine-grained reactivity. Doesn't really have components. Svelte is component like, like react. So when it runs once
[01:19:46] , it does have like that concern for him, right? If, if it's self does run once, um, you can't change the structure of a component. Um
[01:19:57] , because you can't nest reactivity. Like you can always make another abstraction, right? You can always wrap a decision in another reactive point. Um, technically speaking
[01:20:09] , you can do that with Svelte, but by breaking components and using like conditionals. And that's all ultimately how I, I, I approach this with,
[01:20:17]  with Seb, but let's, let's go a little further. Um, uh, Alexis, who's a kind of, um, he, he made, um,
[01:20:25]  uh, solid labels and, and, and headless UI. He's pretty outspoken member of our community was like, wait a second. No, it's
[01:20:34]  that this is a misconception about solid, you know, like the components render once, but everything else is independent listens and updates, reactor changes to be fair. Svelte
[01:20:42]  is the same on this line. So, um, this, this doesn't completely, um, kind of divert him the concept that is shared, you know, with
[01:20:50]  view and similar stuff, right? View is actually more like solid because view can actually nest reactivity. Um, if you handle the cleanup yourself, but again, I,
[01:21:00]  I think this doesn't really answer the question for, um, for Seb. He says, yeah, yeah. And Svelte is the same essentially using equivalent to hooks
[01:21:10] , which is fine. But in my mind, you shouldn't have access to props in those code paths, except as input to initial state, it's too easy to
[01:21:17]  use initial stale plots. Otherwise I love the simplicity of it. Right. And I think the misconception here comes a bit again, because not realizing you can structure, react
[01:21:31] ively structurally change things. Right. So, you know, Alexis, I'm not sure I understand any particular reason why they shouldn't have access. You know, I
[01:21:39] 'm sure the argument is as valid for mounting two components conditionally, or maybe I'm wrong. And he's saying anything you read from prop string setup won't be
[01:21:48]  reevaluated. So a consumer can't reconfigure on the fly. It's no longer declarative. You could avoid this problem by making it a generic setup function
[01:21:55]  that doesn't accept any particular props. And which comes down to what if the props are reactive and that would work, right? As long as you can't easily get the
[01:22:08]  current value, because if you read the current value, the setup function, you're back to square one. And there's a little bit of an exchange here. And
[01:22:17]  honestly, I think there's a miscommunication here because we're like, what are you talking about? Why would you need to rerun the setup function? You have
[01:22:24]  to do something to respond to the new prop. In that case, you deal with it in two places, mount and update. But you have to know that. Yeah.
[01:22:32]  So this is, I think, is part of where that misconception is, because from the Svelte view, where the whole thing's a component or that setup function
[01:22:40] , you have these two code paths and you have to basically handle the update and the creation differently. But when solid using primitives, you don't. It's actually the
[01:22:49]  same hook. Yeah. It's because view was brought into the conversation earlier. And that was my whole problem here, right? Because here's my response to this.
[01:22:59]  I was like, I was like, where is it? Is it here? I have no idea what you're talking about. I don't really think of things in setup
[01:23:12]  functions and components. I have a nested reactive graph or the closest things to the change update. Things are reactive tracking or they aren't. You always read the latest
[01:23:22]  values. Yeah. So this is probably a little bit hard for people following to kind of follow, because they're like, what is he talking about? Setup functions?
[01:23:31]  So it doesn't have a setup function. I think this is still coming from a view or a Svelte mindset where it's a component. Do you know,
[01:23:42]  what I mean? Like you still have that code that runs once for the component. And if you want to run code that doesn't run once, you have a separate path
[01:23:50]  and you need to handle both the initial state and the change state. Where given Sol's granularity, we actually don't have that limitation. We do combine stuff together the
[01:23:58]  same way React does. And I don't think this was very clear to him. And I honestly don't think it was clear to him by the end of the conversation,
[01:24:05]  but he never actually interacted with me directly. He seemed to just be fine talking to Alexis, which I guess is good because Alexis did a very good job of articulating
[01:24:15]  this anyways. But essentially, he presented this problem. And I think this is kind of a cool problem. Out of curiosity, how would you express this case conditionally in
[01:24:25]  solid or Svelte if anyone is lurking? you know, yes, because yeah, exactly. Because it's reactive. Like, why would you have a st
[01:24:35] ale prop? I think he's trying to get to this example, essentially. And actually think about how you would do this in view, Dan. I think this is
[01:24:48]  actually valuable. He's saying, pretend you have some kind of hook or reactive value or something that makes you decide whether you're going to have the videos. And if
[01:25:00]  there's no videos, return no videos. But in the case that there aren't any videos, I want to kind of grab from a different hook or a different data.
[01:25:09]  And in the case there are videos, I also want to grab this other information and kind of throw it in with the videos. And in React, I think this actually might
[01:25:22]  even work. Maybe. I'm not sure if early returns on hooks actually work. Because as long as like they're in sequence, I don't know if it's
[01:25:31]  okay for the counts to match. I should actually should have clarified. But essentially, this is actually not a particularly obvious or easy solution to solve in solid. Because in the
[01:25:40]  simple case, yes, if videos never changes. And think about this review as well. If videos never changes, you could just basically write this sort of logic, right
[01:25:52] ? At least in solid setup function for view being separate is a little bit more awkward. But assuming that you can, because the whole point is, I want to send this
[01:26:00]  back without hitting the second hook. That's the argument here, basically. Like do this, only do the first hook, not the second. When you have a declarative
[01:26:09]  thing, it's hard to have kind of this than that. When your approach is very declarative. And obviously, a setup function, which runs once, needs to
[01:26:21]  basically grab from both of these hooks ahead of time, essentially. And even solid is a little bit like that. The answer is obviously split off to another component. But if
[01:26:29]  we're going to avoid splitting into another component, what can we do here? And the first answer Alexis proposed was actually, yeah, the idea. Yeah, exactly.
[01:26:46]  And sorry, I spread that too fast. This is true in every framework. I think the answer in every framework is making another quote, this is just weird scenario,
[01:26:55]  right? The interesting thing is fine-grained reactivity that goes down to the binding doesn't have problems with this. Like, how should I put it? In solid
[01:27:10] , we can nest it. And I'm going to show my answer before getting into it. But I said we should just do this, which was use videos. And then
[01:27:22]  when videos, or when there's not videos, show the fallback of no videos. But when there is videos, now just run this hook in here and return videos
[01:27:30] . Like, this is actually pretty easy to do in solid. I'm sorry, I'm blocking the screen here. Like, this isn't React code. And someone's
[01:27:40]  like, well, use ternararies. But then I would have had to use an ife or like a self-executing function around here just to get
[01:27:45]  it to run. But my point is, this is how you would do it in solid. You basically nest it, you have one condition. And if that, and
[01:27:54]  we can use hooks right in the middle of things, right? Technically, this is the use of a different component solution. But in solid, you don't have to bring
[01:28:03]  it to a different component. And I think it's kind of funny mentioning this is because if this was Marco, this would even be easier because everything's tagged. So it
[01:28:12]  would literally just compress up into like, into something that would look almost completely natural. This is one of the the powers I was talking about Marco with a co-loc
[01:28:20] ation is stuff like this looks just like normal templating. You wouldn't even, they wouldn't even have this awkward like, oh, now we're breaking into JavaScript.
[01:28:28]  It would literally just look like a template. And you can just do this without thinking. But the power of fine-graining is that it's this declarative structure
[01:28:38] , right? Where the React code has this early exit. It's very imperative. It makes sense for it. And my whole argument there was like, which I replied
[01:28:47]  here was that, sure, you can come up with a situation like this, and I can solve it like this. And maybe that looks a little bit awkward. But you
[01:28:57]  know, you could, I could also just do the opposite. I was like, solid's really good at nesting. React is bad at nesting. It's good
[01:29:05]  at things that are serial. So I could come up with a nested hooks example. And how do you, would you do that with React? It'd be impossible
[01:29:12]  or very difficult, right? Like, you know it isn't hard to if we give an example that's nested it caters to solid if we give an example
[01:29:22]  that's like serial like that it caters to react but um what ends up going on happening with this conversation is alexis basically goes well if video static which i mentioned
[01:29:34]  before then this is valid code but if it's not i'm just going to wrap the second half of that in a crate memo and he's right yes sorry and this
[01:29:46]  is the problem with the example and i was actually going to get to it in a in a second he's treating it like it's a reactive tracking but in reality what would
[01:30:00]  happen is that hook would be used where it's used so either it's a hook grabbing some data that's used on the video tag which means that whole outer context doesn't
[01:30:08]  matter because it'll be used in the video tag or if it needed to track you would just call the function inside the video tag with solid like he he basically is is
[01:30:18]  going like oh you have to be careful not to read anything else in case to create memo and have it recreate everything again but the truth of the matter is because of nesting
[01:30:27]  in solid that actually isn't that big of a problem right i use show because i know naturally that it's inert inside the show function hook but the truth of the matter
[01:30:41]  is even alexis sort of naive approach if we were actually using it where it was used this problem goes away right like like this thinking that that that he has here he
[01:30:57] 's right but solid's designed to avoid this problem every piece of it where things are inert the whole idea of of accessing things as late as possible means that you actually don
[01:31:09] 't have to worry about this and as i said if seb actually addressed me directly i would have explained it to him but he he'd never actually responded to anything i said so
[01:31:19]  um you know it's it's fine um basically he said i agree but there's a lot of work arounds and he mentions at the end here that svelte
[01:31:28]  could do the same trick nesting dollar signs but it actually they can't um be which was the whole point of this whole thing svelte is actually room and is remarkably
[01:31:37]  more like react than people realize exactly like don't get me wrong this is why i made components a nerd i was scared of this sort of nesting and accidental triggering but
[01:31:56]  the thing is before i made components a nerd ninety percent of the time people never hit this problem it was only people who had bugs like people who were destructuring that hit
[01:32:05]  this problem like in natural usage solid doesn't over execute i i think it's hard for people coming from a component granularity to realize that if you just do everything where
[01:32:16]  it's used you like you automatically avoid the risk of a re-execution because things are already so granular like you don't accidentally like you know as you say be
[01:32:26]  careful not to subscribe to something else you wouldn't actually write it there you would write it where you subscribe to it like this is going to be one of those challenges i think
[01:32:36]  for people coming in because they like from the react mentality because they're used to just accessing variables where they want but once you start doing things the solid way like in that
[01:32:48]  thinking you don't hit this and and that's what i'm trying to say being aware of this solid pushing depends and certain safeguards built into avoid accidental training it doesn
[01:32:59] 't mean people occasionally are like why isn't this something updating but it can be tracked really easily basically if someone accidentally destructured something like people come in and go why
[01:33:08]  have i lost reactivity they they never share the right code in the discord which is unfortunately because i think they don't think that that way they always go they look at the
[01:33:16]  center and they're like i'm setting this why is this not updating i'm like where are you using it and almost immediately i can eyeball it without even running the code because
[01:33:23]  someone destructured something or or accessed in the wrong place you can almost always tell just from line of sight on this kind of stuff when things over execute that's harder that's
[01:33:33]  when you need the debugger and you're like why are these things executing but losses reactivity are actually usually relatively easy much easier to track and that's why i set
[01:33:43]  up solid this way where um very careful not to over execute and it just the patterns built in actually went to this so as i said i didn't get a chance to uh
[01:33:56]  directly interact i responded to seb but he never responded to me he never engaged me so i wasn't able to really explain this um which is too bad as that i i
[01:34:07] 've always had a really good repertoire like what's the term whatever like conversation with dan but my interactions with seb haven't really gone that great yeah and i mean that sounds
[01:34:25]  kind of idiomatic and maybe forced you know because people made fun of seb a little bit which is unfair when when when uh have you ever seen react as becoming a black box
[01:34:36]  it's it's it's it's i see a lot of people level um um um insults against hooks and they're in that thread um that i feel aren't
[01:34:48]  fair and i always defend it um but this interaction is kind of the person they're joking sort of at this react core team member they're talking about a step pretty much um
[01:35:02]  cool check out this cool thing i did with hooks yeah yeah this is the format guy that will break for the following incredibly subtle reasons oh you're right honestly this is more
[01:35:13]  two new classes don't worry it'll make sense you just need to completely reconfigure your brain that's that's sort of the joke here and to be fair i think
[01:35:23]  this is fine and this is actually from one of rich Harris's talks i said i love rich Harris's talks but but essentially solid or reactivity kind of pushes you that way
[01:35:37]  too people don't realize this because i say there are these little gotchas in every framework every approach people don't see them as felt so like it's uh it makes
[01:35:47]  me come off as a bad guy sometimes because when like i don't like the spread of misinformation so when someone's like and for some reason a lot of like that's where
[01:35:58]  i hear a lot sometimes people say crap about solid i'm like no no don't don't don't think we're exempt from this stuff but um it happens a lot
[01:36:06]  with svelte too and the truth of the matter is you do have to be aware of this to a certain degree like you do have to think this way as much as
[01:36:15]  things are easier or automatic there is a sense that things are different and um but the thing is just because they're different doesn't mean they're they're bad you just have
[01:36:27]  to like embrace the patterns hooks are different these are the patterns now that we've lived with hooks for a while we have an idea of what the hook rules are and people
[01:36:35]  are still whining about it but that's where it is i'm sure if solid ever got that popular people will be whining about stuff about us too but it would just
[01:36:43]  be different stuff and um the the key thing though i want to point out is that like react where there's this happy path with hooks there's there is a happy path
[01:36:55]  with reactivity and these kind of concerns that you know seb's worried about are just not things like they're just not concerns in the same in that sort of way because the
[01:37:06]  patterns actually lend to it right um this is certainly true the control floor yeah i i'm not quite sure what point you're making but yes the control flow are examples of
[01:37:19]  things that i've built just to kind of help kind of push things along so that people don't have to worry about um some of those details but as i said biggest ones
[01:37:28]  are simply from the fact that components are inert and that tracking is granular like even if you even as i said even if you just naively wrapped everything in create memo if he
[01:37:41]  actually showed where that some other prop was being used the the naive solid approach would not over execute i i just use show because you know i'm just being safe but the
[01:37:54]  simple example would actually work too yes yes and yes we aren't react yes yeah exactly control flow is a perfect example of why we're not react and yeah hey the funny
[01:38:11]  thing is we're also not svelte or view we don't have this built in the template these are actually handwritten runtime mechanisms that anyone could run and let's be
[01:38:23]  fair no no most people aren't going to write their own for loop i mean i did have the reason to the other day and maybe that means it should have been core but
[01:38:30]  i was like i was working on one of those 3d demos um and i said the other day i mean like a few months back and i realized i wanted a what
[01:38:37]  do you call it a repeat control flow one where it would you take a number and it would do the same thing five times or six times and it would scale so if you
[01:38:46]  went from five and then you tweaked it to ten it would only create the five next ones our built-in control flows aren't like optimized for that case um so i
[01:38:56]  just wrote one by hand it was a lot simpler than our for loop one and presto it worked obviously people aren't going to generally do that but it is that is
[01:39:05]  kind of the power here and i i think i think it's interesting because essentially there's i because of the way reactivity has been marketed and because of the way people
[01:39:17]  kind of look at react framers like view or svelte people look at solid and they're like okay it's react like that no beach it just must not be flexible
[01:39:26]  or have that just javascript it's funny react a solid values that ask me to react so much that it is even though like the mechanisms are so different it is so
[01:39:37]  similar to react in that aspect of just being able to just have runtime javascript doing the thing and you being in complete control react developers like thrive in that and the
[01:39:48]  design likes that solid has those same things i i know this is the one point where the like most people we've had incredible support from the react community especially you know compared to
[01:39:59]  some of the other reactive communities which are kind of like oh they see solid it's kind of like aggressively attacking their positioning because i devalue a lot of stuff they dev
[01:40:08] alue but the rack community has generally been like oh you know solid actually looks like a reactive library i'd use but in their head they're like yeah no maybe not
[01:40:17]  like because the the thinking is like well you know it's still just a reactive library i like my javascript i like my non-magic when they realize that solid
[01:40:27]  is also non-magic and has scheduling and you can do concurrent rendering and have the sync capabilities suddenly you know maybe it's not as friendly anymore because it it it
[01:40:39]  like things aren't that different it's always easy to kind of go like oh it's different so you know it's not a threader it's not like it's not
[01:40:48]  like the same thing but as i said solid values reacts principles so much that it has a lot of those same characteristics um you you like sure we're not using dot map
[01:41:01]  here we do have to be conscious of memoization of control flow but like when you think about you know how adaptable this is how you can just kind of take up the
[01:41:17]  pieces and move it around it actually in some ways exemplifies that even more than react because you can just get away like get away from the virtual dom get away from this
[01:41:28]  component model you can just go oh i just want this one thing to update you can kind of do whatever and that's weird because when these kind of examples go and people go
[01:41:36]  oh how would you do that in solid well i've never had a problem doing so there's there's usually like the easier way like i posted or the more complex way you
[01:41:46]  know which kind of goes into it but reactivity is just a way of modeling things so you that's the difference right like because it's just these building blocks and model
[01:41:56]  things you can literally use reactivity to solve any problem so like when someone's like oh can your framework do this the answer is always yes it's like it's never a
[01:42:06]  question um and i think that's kind of crazy because that isn't true of reactive frameworks most reactive frameworks like that are really structured around the templating and it's the
[01:42:20]  templating that does the thing like you know the compiler like the way uh svelte works and it's not true of um vdom libraries because like the vdom is
[01:42:30]  the thing you don't get to escape the vdom that's the change mechanism so like you can do what the vdom can do and don't get me wrong the v
[01:42:37] dom can do a ton but the thing it can't do is not be a vdom whereas a reactive system can be a vdom if it feels like it like there
[01:42:46] 's just no limit here um and in some ways maybe that's because it's too simple do you know i mean like like you you know people complain about redux and you
[01:42:58]  know you can do kind of almost anything with redux i mean it's not always efficient but it's it's so simple it's just like previous state next state some
[01:43:09]  kind of modifier like you can add a bunch of middleware on top you know redux saga or redux observable and you're just like why you know or you just
[01:43:18]  use thunks and you could do all this stuff and that's kind of the problem that comes with being too simple because sometimes you miss the gap on a key edge case in
[01:43:26]  this case async is a real thing you know i mean redux toolkit is taking care of that largely but you understand if if you build a system that's too simple
[01:43:35]  that doesn't consider like a fundamental important thing like as the async is a real thing then even though it's simple which means it can do anything it um you know you
[01:43:47]  still have work to do in lots of boilerplate where it isn't adaptable as easily into what you said i i'm not the reason i'm less big on usually flexible
[01:43:56]  things things with lots of config is it makes a bunch of assumptions sure it kind of guide you through the common cases but you you've already built too much with it if
[01:44:05]  you start with small composable pieces then you can build whatever you want with them the key is make them small and adaptable make them do exactly what they're supposed to do
[01:44:15]  sure again if the things you're building are too complicated then guess you know that's a lot of boilerplate but if you make them reusable and composable you you or
[01:44:26]  someone only has to do that work once yeah i love react because it allows me to write beautiful declarative code quickly and it's super easy to update state however once you write
[01:44:40]  yeah and the thing is i've been trying to straddle this line because i'm talking here waxing poetically about um reactivity and the thing is reactivity
[01:44:51]  is so powerful that it can be anything to anyone you're right it's funny i always complain that framework shouldn't try to be anything to everyone i believe in that because the
[01:45:01]  higher you get up on the abstraction level like then you have to make choices you have to have opinions i don't think your opinion should be please everyone otherwise you just make
[01:45:11]  a mess um but on the low level adaptable things can be so what i've tried to do is to guide things on a very specific direction i think react has the right
[01:45:21]  philosophies so let's take our universal can do anything and make something that feels like react that that's that's the thing i'm hoping that on the basic experience level when
[01:45:34]  people use solid they do feel a bit like react i know people would like it to feel a bit like svelte but it's my happy place would be somewhere in
[01:45:42]  the middle where you're like oh this is like react it's explicit i understand what i'm dealing with here's some state i can just update it and then you know it
[01:45:51]  just works but then you know kind of meet in the middle ground like uh svelte where it's like oh no there's no use ref or use callback or weird
[01:45:59] ness you just kind of continue on that thing that's my hope i don't know if that's truly achievable but then it goes beyond that for me because that's
[01:46:10]  stage level zero and level one i want the person who picks up these tools to be go like i can make 3g i can make react 3 or whatever like the funny thing
[01:46:21]  is i did make a custom renderer but even before that someone can just go pick up these reactive printers and make 3d themselves loom element which is done with web components
[01:46:29]  but it didn't need to be done with web components per se already is a full 3d renderer set up using solid without me introducing custom renderers like custom render
[01:46:39] ers is nice because it works with some existing apis people have some kind of mentality people have but if you are versed with reactivity if you understand create signal create memo
[01:46:50]  and create effect you can literally build anything you can literally build anything and sure as i said it might be more work but that's where the scale is that you you start
[01:46:59]  with a simple experience to scale to what you need and it's composable so um joe pia who knows 3d made something for you you don't have to
[01:47:11]  remake it it's it's the whole idea behind components as long as you can compose you the the sky is the limits because you don't have to force that complexity onto other
[01:47:21]  people and that is what react has taught us and i don't know if every framework has picked up the message um a lot have that's why people are into hooks people
[01:47:33]  into components components are composable but hooks take that further because of these behaviors and i said reactivity has been doing a lot longer than react hooks but it's just uh dan
[01:47:44]  abramoff was going off a little while ago about composition being king or never bet against composition and like yes don't bet against composition it's been a key part of
[01:47:52]  all my api designs and the framework work i've been doing because of just how powerful it is sure you're not going to appreciate it at first you don't need it
[01:48:00]  to go use state and update a counter or whatever but once you get beyond that level once you want to do powerful things this is where it comes in and hooks have that characteristic
[01:48:10]  i think in svelte the closest thing you have are the actions people really excited about the use but you you can't apply those to components and this is the same
[01:48:19]  kind of problem with a lot of customer directives and view and stuff to be fair view uses fine green reactability like solid but this is why they went with the composition ap
[01:48:29] i and this is why they went with the whole ref sugar and stuff because they knew that they wanted that composition that's how you grow i think i'm going to be really
[01:48:37]  interested to see where svelte goes in the future because they don't have that characteristic that i consider fundamental to building a well-designed framework and the problem is
[01:48:48]  it's not the thing the beginner is going to thank you for the beginner is going to go like you just let me use let they don't realize that they didn't let
[01:48:57]  you use let local storage and now don't get me wrong there's stores and other stuff but they and you can do this other way and that's how you level up
[01:49:07]  progressively but what's more powerful is if it was just the same thing the whole time not like level zero level one you know now use observables what if it was just a
[01:49:17]  completely transit experience and honestly this is why i love react you know because you learn use state you learn use memo you learn like they have a few extras that i don't
[01:49:29]  need but you learn those those hooks and you are done like yes there's complicated interactions you learn best practices but you are done that is that is that is the end of the
[01:49:39]  thing they put on the table to go like learn these these these 10 things and just master learning how to use those well the thing is in react i don't have to go
[01:49:51]  back to the once i've got to intermediate mastery level can it go higher i don't need to go back to the docs i just know how these things work small ap
[01:50:02] i surface and i can intuitively know i know okay i've got these six tools at my disposal maybe i haven't figured out the right pattern but like i i intuitively know what
[01:50:11]  they do and i can put them together and maybe i'll use a third-party package to cover the gaps when you have these level up progressive framework type mentalities yes
[01:50:23]  the beginner comes in and is like yes i didn't have to learn anything but the person who's advanced has to now remember every freaking step of the way and i don't
[01:50:34]  i i just at a certain point that doesn't scale like like all the different shortcuts hands all the different things because they can come across all those different variations and i mean
[01:50:45]  maybe that's my big spiel here for for solid and it's a big spiel for react but i i think these are the characteristics that um are are are actually important
[01:50:57]  for this kind of design considerations and i'd love to you know hear maybe members of react core team talk about because i my feeling is they value the same things right and
[01:51:07]  and this is this is maybe this is the division maybe this is the difference here between some of the frameworks um what do we got some comments here where is it here i've
[01:51:19]  always used felt as ideal for building interactive documents in that case i'm gonna will thank you for those features remember yeah okay yeah exactly because how many different ways can you declare
[01:51:33]  something in in view and this is part of being everything for everyone and being a progressive framework it's so weird because this if you want adoption you go easy and you let people
[01:51:46]  grow people see sol and they're like oh it's a it's an expert framework and i know dan's doing a lot of work to kind of make it easier and
[01:51:53]  get to people and maybe they're right is react an expert framework maybe this is why you got to work on the docs and stuff the problem is once you get past level one
[01:52:02]  two like get past that very beginner stage you're you just accelerate you you the potential opens wide and i feel like this is why react is staying and why react here when
[01:52:15]  we react first came out i was like man you know this will just pass it wasn't because i didn't like just x i just actually hated class life cycles but i i
[01:52:25]  figured that at a certain point you know there'd be the next thing right and and the reason people stayed with react wasn't the reason why they liked react initially you got to
[01:52:37]  understand like when um stealth and new framers come out and there's like hype there's like the things that get people immediately and then the and those are very different from
[01:52:46]  the things that have people stay with the framework and you know self was perfect example because they kind of came in on the performance track and stuff kind of same avenue we're going
[01:52:56]  with solid but people came in people kind of stuck with it because of you know what they they feel like just how nice or easy these things are in the way they don't
[01:53:06]  have to think about it the thing is i i want to see the next step because there's always that honeymoon period if you've ever seen that graph where people like talk
[01:53:14]  about levels of mastery where you kind of like first think it's so hard and then or over the moon and then come down it's a meme i probably could look look
[01:53:23]  it up if i wanted to but uh uh like what is it like stages of look of becoming a doctor that's my i probably won't be able to find it it's
[01:53:36]  like a joke meme where they show people like depressed and then yeah i'm not going to find it on here i'd have better luck looking through twitter and i don't feel
[01:53:44]  like doing that right now but essentially i want when we get to the the place where we have you know the pro the the real heavier problems then we can kind of see
[01:53:56]  whether it sticks and to be fair rich harris stevens kind of said this himself like he he built um self is like the best demo framework you know in a sense like
[01:54:06]  it was really good at putting together stuff for the guardian or the new york times and don't get me wrong i think it scales to real apps i think it scales
[01:54:14]  easier to stuff like basic websites because of just how simple it is but but he built it for that purpose that's why there's stuff like the stores are the way they are
[01:54:23]  they don't have nesting they don't have proxies or any of that kind of stuff i i looked at that and go like how can you have big data sets
[01:54:29]  without grinding the nesting there's a there's a limit to how many like separate stores you can have i wrote an article about you know applying react mentality is felt to become
[01:54:37]  a better self developer kind of understand the gaps um and and this is sort of where the root of that kind of thinking came from and i i think that when when you
[01:54:49]  kind of step back from all that and you look at what reacts done well it was never about the things that people originally found or looked for um you know what dan ab
[01:55:04] ri i you know i love dan abramoff's writing um he had a article like way early days i don't even think he was on the the react team at the
[01:55:15]  time and yeah that's a classic you might not need redux but he he he started talking about it and he he just never finished the article or finished the thought and
[01:55:28]  and let's see if i can find this article you're missing the point of react january 22nd 2015. do you think this is still relevant today i i i
[01:55:45]  wouldn't be surprised if it was i've seen react misunderstood by smart people more often than any other javascript library react is packed with ideas that were radically that radical at
[01:55:55]  the time introduction this created an error controversy that hasn't quite resolved he says that after years of using react observing people learning i can say that the best parts react are not the
[01:56:05]  ones that made it famous they're not the virtual dom they're not the custom event system server rendering or jsx the rather few boring and powerful ideas and he kind of
[01:56:14]  goes on a bit about i mean i think this article is worth a read but he um to be continues it this is such a short article um but uh like i don't
[01:56:31]  want to i wasn't going to read the whole thing on stream but seriously using other people's code is like surfing you control and surrender you've got to trust the wave
[01:56:38]  to carry you stop paying attention the first abstraction leak will throw you under the water when we see something that is new both technologically and philosophically we tend to focus on the
[01:56:47]  technology part because we need to aim the magic first we've had enough black boxes in our careers we want to understand it's not the full picture at least up to the level
[01:56:55]  where we can make snarky comments that are also correct to some degree how is more viral than why at this point yeah i probably should you know what yeah let me
[01:57:10]  copy this in the chat uh uh so so everyone can get access to it here um if you're following along i'm sorry this is completely off topic deployment wasn't as
[01:57:26]  interesting as actually talking about this sort of thing but like when react came out virtual long got everyone talking it was a breakthrough and like any good piece of engineering is built with careful
[01:57:38]  consider trade-offs the concept was so simple and powerful at the time that became the way people introduced in different react from other front end frameworks react is a view layer that uses
[01:57:46]  virtual long for performance another model you often hear is react can be used as a v in mbc at the time downplaying react's role in the application architecture was
[01:57:53]  intentional because reacted already had too many seemingly bad ideas to risk alienating people by adding some more in fact react is not about the virtual um its implementation detail made react famous but
[01:58:03]  it's overshadowed by other concepts that are less shiny the problem is he he only just gets the highlight right here reacts true strains are composition unidirectional flow
[01:58:12]  freedom from dsls explicit mutation static mental model i wish he elaborated on this but i remember the first time i read this article and it was way later even after
[01:58:24]  i started solid and i'm like god of course he gets it right like i don't even think he was a react core team at this time this is just it came obvious
[01:58:32]  i think about two three years after react came out that there was something special here that was not on the surface it wasn't superficial it wasn't because we we've gone
[01:58:44]  through different types of apis we've tried different types of things here what was so cool about react was that even as you scaled it to larger projects and i'm talking i
[01:58:56] 'm not talking like hooks and stuff some people get like caught up on that or class components or whatever was that by taking this philosophy it just kind of saved you it didn
[01:59:05] 't matter like i watched early reactive libraries ember angular um those aren't reactive but like knockout and stuff scale large and not have that feeling of calm like you felt like
[01:59:20]  you were working um to kind of build the thing and each thing was its own like piece and every part was special and you're kind of just you're building the site
[01:59:32]  react kind of just was you you almost kind of gave in you're just like this is the approach and you fall and i know some people i think oh well angular you're
[01:59:41]  given too because you have like freaking a dozen different types of service things that you have to use that are all set and go to the dark no reacts giving in wasn't
[01:59:52]  about specific libraries it was just into this approach you just kind of were like as long as i follow this these rules do things a certain way they'll just work and the thing
[02:00:03]  is once people stopped fighting react it just worked well for them and continue to it's funny because in the early days everyone's trying to like pull their own ideas into react different
[02:00:12]  types of state management and all that stuff kind of almost at odds with it and they want to bring those experiences that they had from from other frameworks and over time react sort
[02:00:25]  of just assimilated it all yes yes yes exactly the funny thing is i prescribed to it and this is why i did that react finland talk where i was like maybe maybe
[02:00:41]  in a different reality the react team would have built solid i i honestly believe that it holds the same values and principles even if it's a different implementation which is why i
[02:00:52]  i want to interact with the dan's or the sebs or whatever because i don't think they get it everyone just sees view or or felt when they see solid and
[02:01:01]  they don't realize that this is very i mean don't hear them they see react like literally on the surface but once they get past that level and they're like oh it
[02:01:12] 's reactive that's when they kind of go to it the truth of matters we don't really diverge from react's philosophy and this is why it was kind of fun because
[02:01:20]  at the time every time i try and go oh here's my reactive library especially early days on twitter except it uses jsx people just assume that i'd want to make
[02:01:28]  it more like view or self and at every point i'm like no that's the whole point it's not like that i don't want two-way binding like and i
[02:01:35] 'm glad more people have jumped on so i don't have to say i anymore and i can say we and that sounds more powerful and i hope people are embracing it but you
[02:01:44]  know every time people like there are values intrinsic here that i believe lead to success and led to react success that aren't about being easy they aren't about you know just
[02:02:02]  you know making those early steps you know more approachable it's it's it's a philosophy yeah so i mean okay that's a bit of a spiel for people
[02:02:15]  i'm sure um i'm not sure anyone was expecting me to go on a rant here but this is this is a classic article in that it's not finished and dan's
[02:02:24]  probably goes like you've seen his writing now he's probably almost he's probably been embarrassed of this one i've got some old embarrassing ones on medium too but um this
[02:02:33]  this this is really you could tell from that even short bit that he's like i want to start writing about react i want to get involved and i mean he already was worked
[02:02:46]  on redux and stuff like that at that time i imagine but he he he wanted to gush about it because like at a certain point he probably had that epiphany
[02:02:53]  he was like looking at it and going you know why does this work so well why am i always so content where it is and reacts gone through some harder times of late
[02:03:03]  um you know working through hooks and all this stuff but they kept that and that's why you have the kent c dodds of the world you know kind of shouting it
[02:03:11]  for the rooftop still and talking how it's simple not easy and all that stuff it's just this is what people should learn and actually uh you know i'll post another one
[02:03:23]  in here if people care i i used to write more about this kind of this kind of stuff and one of my earliest articles um for me even if if dan abram
[02:03:39] off didn't finish the article i hope i did essentially um i didn't get into all the points he had but this article is is worth checking out where i basically kind
[02:03:53]  of point out that reacts just kind of has everything mostly right except arguing in my mind like i don't like the the i don't like the implementation details i don't like
[02:04:05]  the the mental model but i love the philosophy so i mean it's fine i would i would debate the mental model execution thing with seb all day if if he given the
[02:04:14]  chance or or dan or whoever else from that team it's just like the important part is the from at least a design standpoint is just understanding the impact of of these kind of
[02:04:30]  subtle nuanced details here and for me it's a lot like designing a language you know you have to you have to kind of like composition and stuff like what what are we
[02:04:39]  talking about here we're writing a framework why are we talking about such esoteric things it matters um so i mean sorry i'm not i'm not coming off here
[02:04:56]  to uh dis felt it's just interesting to me because svelte has always challenged me because and in view to a certain degree too because they prioritize different things in their thinking
[02:05:10]  you can tell especially with view view was like i want people to to be able to build websites i want anyone to come and be able to build websites i want you just
[02:05:22]  to pick it up and just start with almost nothing and just get to where you need to get to and in the sense that's the goal of every davascript framework but
[02:05:34]  like you could tell react right off the gate want it to be a lifestyle i don't i don't know if it was there right away i don't know when you
[02:05:46]  know the original creators uh jordan you know etc was working on it they realized that's what they had i mean in a sense you could have just said oh it's like
[02:05:56]  angular except we have this vdom thing you know so our dirty checking is less expensive i mean that's the simple thing but somehow maybe by the choice of those early contributors
[02:06:07]  maintainers the way the open source project was handled maybe some hidden members of the team that i don't realize who were there right from the beginning they started crafting a story that
[02:06:18]  wasn't about apis but was about best practices and that to me is way more interesting because sure apis are important surfaces matter but but to actually view it in terms
[02:06:35]  of like a systematic approach is is a whole other thing you know each piece part of a whole maybe greater than some of its parts that that's that kind of design insight and
[02:06:48]  thought is is incredible and what makes react really cool and i i hope people use solid might see the same kind of aspects there because as i said it was a huge influence
[02:06:58]  oh man i don't know where i'm going anymore i just i i just said i was hoping that that that there was it's funny i i pick a topic that's
[02:07:11]  like fairly boring and dry and then we end up kind of kind of off the rails here i don't know anyone else have any more questions in chat maybe this is why
[02:07:21]  i should host twitter spaces because i love talking i love getting into conversations and discussing ideas and this sort of forces me into a monologue type scenario where i answer questions but i
[02:07:34]  i you know as you can tell i have a lot to say on these topics right um and i don't know some of it comes from a lot most of it comes
[02:07:43]  from experiences various experiences but um i i feel like in the areas that i've had a chance to dig into it you know there's some insight hopefully we can gain there like
[02:07:54]  don't don't ask me about web3 sorry i know nothing about web3 but um you know you know talking about uh javascript frameworks and whatnot and and and and
[02:08:05]  wet on the web i feel much more comfortable with anyway yeah i don't know that that i think that's at the end of my rant so unless someone has something else
[02:08:17]  to spike it on you know i think i i don't know if i have anything else for for you all tonight um i'm glad that uh we have places like twitter where
[02:08:30]  these conversations can can continue um and where i can interface with people from from you know react core team or the different frameworks um you know i i'm really stoked to see
[02:08:45]  where these new libraries are going where they're heading and you know i love the excitement that's coming over from from like quick um you know with what they're working on
[02:08:58]  i'm really stoked about what's going on with marco um you know i we're we're getting really close now i don't know i've been saying that for a
[02:09:09]  year you know i wrote the art marco art years ago but we're able to show people the compiled output and what it looks like obviously compilers not finished but
[02:09:18]  like it's working right and it's that's incredible elaborate this uh elaborate a little bit more on this i mean i remember the the cyber truck it was i i when it
[02:09:31]  came out that was as divisive as it was i remember the the people are like what the hell is it and some people like you know that's kind of cool how practical
[02:09:39]  and pragmatic is but can you can you elaborate a little bit what you what you what you mean i i don't i don't remember what i just remember the responses i
[02:09:47]  don't remember what the reveal was how important separate and getter said that made you agree with react on that yeah i think it's super important like i i've written articles
[02:10:01]  and articles about it i i i believe in it's and part of this is is it comes back to that time period but there's there's more reasons that are that
[02:10:12]  are subtle uh to to solid perhaps specifically but like okay if you go back people someone asked me today um and this is relevant on on on discord you talk about knockout all
[02:10:27]  the time like it was like the golden years or something and it kind of was for me but you never you you always allude to knockout dying out to react and
[02:10:36]  like you never really say why solid isn't knockout like why it's not doomed to repeat the mistakes of the past and i did actually cover exactly that in a talk um
[02:10:47]  for react finland but it's not in much my writing and i instead i just kind of go oh knock out how i missed the so to speak but it is everything
[02:10:56]  to do with this and and i did have a a stream about two-way binding where i talked about this a little bit but essentially sometimes something is just too powerful and
[02:11:18]  i know that's weird because i like giving people control and power but i like there's a difference between giving people power and giving people control and what i'm getting at is
[02:11:28]  reactivity is so powerful and if you do not have a virtual dom if you do not have even a component system if you don't have some kind of safety net around
[02:11:40]  it you can wreak havoc because think about it because the way you can subscribe and the way you can write anything can happen and this is even more pronounced have you ever seen
[02:11:56]  that old example where someone goes okay um and i think i i think i i use this exact example somewhere else but i'm just throw the playground just because i can't
[02:12:05]  but you've probably seen that example where someone writes some kind of variable and they're like okay here here's a value you know blah blah blah and maybe they put something on
[02:12:18]  it and they go five right or t or whatever i type doesn't matter and then you call some function you import you import a function you don't know what the function
[02:12:28]  is you pass your value to it and then you go can you like what can you say about value dot something and and let me let me uh let me let me zoom in
[02:12:41]  a bit so you can see what i'm saying what what do you know about values about something now now you you the problem is if if function can mutate that value you
[02:12:52]  know nothing you don't know if something is even on it anymore and if you had and if it gets worse if something was like i can't use you know it was like
[02:13:06]  this you could literally go like this and have a javascript error because there's no guarantee there's no contract there's no nothing and sure this is just the old argument
[02:13:20]  about you know immutability right and on contracts but the thing is functional programming type things some people will swear by functional programming some people will swear by um you know object
[02:13:35]  oriented or whatever but the the the thing is regardless of what the entity is you need if your app grows to a certain complexity and the huge thing even if it's not a
[02:13:46]  complexity it's a good pattern to invoke is is ownership and data control this is important when you have nesting this is important when you have trees it's important when you
[02:13:53]  have code executing in different contexts and the problem with reactivity and it's not like a huge problem but is that essentially people things can subscribe anywhere and if things can also write
[02:14:07]  anywhere like how far removed do we get before we don't even realize we're dealing with a reactive value and and i i went to a bigger example uh uh in the
[02:14:18]  previous stream but you know we're actually trying to come up with something convoluted but these things sort of happen like essentially you know props that get drilled into other props and
[02:14:30]  and at some point a local variable gets reassigned and no one realizes that it's that it that it's it's reactive it's actually dangerous to have nested reactivity
[02:14:40]  now to be fair we don't need nested reactivity for everything but essentially i wanted it very explicitly to be able to be like if you have a reactive value you
[02:14:51]  make the decision whether the child can can can change it that that's what it comes down to and react calls this unidirectional flow like look honestly it's a little
[02:15:04]  bit more wiring right and on for forms yeah we'd like to cut that thing but once you kind of step out past like direct binding of forms which is clearly something that
[02:15:16] 's nice um you enter a space where if you let things kind of go willy-nilly so to speak whether you can't guarantee that some assignment somewhere isn't
[02:15:30]  going to cause a ripple effect through your whole app and if those are real dom nodes pretty cause crazy inefficient work and the thing is i'm not even talking about um how
[02:15:46]  should i put it like like like things that you would notice like maybe you end up just replacing parts of the dom with the exact same thing and you don't even realize it
[02:16:00]  this used to happen to me in knockout all the time it used to happen to everyone in knockout all the time um once the apps got big enough and you're like
[02:16:11]  well why would you like knockout so much well because it started from something really simple it had that svelte like appeal you just like made it valued and updated in
[02:16:18]  the data bind and don't be wrong svelte doesn't really have this problem because they don't have nested reactivity but because they don't have nested react
[02:16:24] ivity they also don't have a whole slew of flexibility in a different way but like essentially the amount of damage it caused was enough uh let me see if i can
[02:16:39]  find this uh another link to share in chat uh let's see if i react react introduced flux um in a conference back in 2013 i want to say hack hacker way rethinking
[02:16:56]  web app development i love this because i'm pretty sure rich harris's rethinking reactivity was partially influenced by this rethinking web dev thing from facebook um and and
[02:17:09]  this video see if i can get to somewhere relevant because they do a bunch of crap but this is old old react but it's a certain point yes she comes on uh j
[02:17:23] ing chen and and basically explains why they use flux at um i'll just link this in the chat at facebook and i mean this is old it's not as relevant
[02:17:39]  anymore but what like i i don't really only add a lot of models i've only had a lot of views is this coming through can you actually hear the audio there's
[02:17:48]  just an explosion of arrows here we go and if you just look at these arrows can you tell if there's an infinite loop here where you know the model triggers something in the
[02:17:56]  view and the view triggers something in a different model it goes in a cycle it's really hard to tell just by looking at this and that's with all of your relationships
[02:18:05]  drawn out can you guys hear if you were to look at that in code and try to figure out where do i have an infinite loop somewhere in here that's causing my app
[02:18:12]  to just go in constant loops it's really difficult i was drawing a very similar diagram while i was trying to figure out the architecture of one of our more complicated interfaces looks very
[02:18:21]  much like this and it was so complicated that i ended up drawing numbers instead of arrows to represent the relationships between them that's how dense the arrows were getting so we want
[02:18:33]  to do away with all of this what we want what we propose instead something called flux is all of the double arrows that go that go in both directions that make it really hard
[02:18:45]  to understand the system what we have is an action coming into the system a dispatcher that sort of acts as the traffic controller for the whole thing the store which is the
[02:18:55]  data layer that basically updates whenever you get a new action and then the views re-render whenever the stores say something has changed and then from the view side they can throw another
[02:19:05]  action back into the system okay i'm gonna stop this here for a moment but essentially what i'm getting at is sure this this is describing redox or you know their
[02:19:18]  state management solution but in a way it's also describing the way to think about react itself internally and the approach with the unidirectional flow that early diagram was completely how
[02:19:28]  web dev was and the funny thing is if you go back to this this diagram which seems crazy it doesn't just have to be model view controller here it could be view
[02:19:37]  model like component interest this this sort of crap happened all the time and uh it was a mess obviously um we know better now our reactive systems are batched there there are improvements
[02:19:56]  here but i am i am a big proponent of unidirectional flow especially when you when you when you're talking about the component of the prop drilling angle see
[02:20:07]  something like mob x you might arguably get away with using a like read write proxy or something and the reason is you know the store is all defined in a single location and then
[02:20:22]  you import it into specific components and in those components you know you're interfacing with it and those are those locations but if you start prop drilling it that's not good
[02:20:33]  but a lot of times with stores you'll just have each component pull in from the store directly but think about it if if you have deeply nested proxies and you
[02:20:41]  pass them as props or parts of them as props any component down the tree might end up with part of it and not even realize that it's actually connected to the store
[02:20:49]  and it they they go yeah let's see if i can pull something a little further on in this example just to explain just how messages view in the chat tab view in sync
[02:21:01]  we also want to handle that unseen count so this code gets a little bit more care what else we were launching they didn't care we were improving okay it goes into the store
[02:21:11]  you can't put another one in until the stores are completely finished processing it that's pretty abstract though so let's work our way back to this and let's use a
[02:21:19]  real world example a chat interface at facebook we knew that we had a problem with chat in 2011 when we introduced the subscribe button on our blog and the first comment on that blog
[02:21:32]  post was please improve chat system with 898 likes and this was one of our more polite requests um we got a lot of comments that would just say fix chat and that
[02:21:42]  was became a pretty frequent refrain in all of our user comments so how do we get to this place how do we get to the point where we were annoying our users so much
[02:21:52]  they just wanted us to fix chat they didn't care what else we were launching they didn't care we were improving they just wanted us to fix chat well to answer that we
[02:22:00]  have to go through sort of um the chat feature as it evolved we started with something pretty simple you have a chat tab shows a list of messages whenever you want to whenever
[02:22:12]  you get a new chat message you just append it it's pretty simple the code is pretty manageable later on we also launched the messages jewel which shows you the number of threads that
[02:22:23]  have unseen messages on them that was kind of developed independently from the chat tab but whenever a new message comes in we also want to handle that unseen count so this code gets a
[02:22:33]  little bit more complicated we have an unseen thread count that we want to bump every time we get a new message and if we think that the user is looking at it we
[02:22:41]  also want to decrement it a couple months later we also introduced the larger messages view and with that we made this handler even more complicated this is what we had before and now
[02:22:54]  we have to sort of account for the messages view and decrement the count under the right conditions if we think the user is looking at either one of the views so what
[02:23:04]  are the problems here one is that the code has really has no structure um it's very imperative that makes it fragile and we lose a lot of the original intent behind it it
[02:23:14] 's hard to tell just by looking at the code that you want to keep the messages view and the chat tab view in sync it's hard to tell that you only want to
[02:23:21]  increment and then decrement you don't want to sorry you guys you know as we add more features this code just only gets longer but having something imperative like this basically led
[02:23:32]  us to the situation where we had our most annoying chat bug happen over and over if they would users would get an unseen count there would be no unseen messages behind it you know
[02:23:42]  everyone's sort of used to seeing one of these numbers clicking on it and you get something new behind it that's exciting but when they get that number and they click there
[02:23:51] 's nothing there they refresh the page and it's gone that's really annoying it's really frustrating and that's what kind of what led to the whole like you know fixed chat
[02:24:00]  user feedback and it wasn't like we didn't fix the problem we would always fix like some particular yeah they're blocking but this problem would keep coming back just because the
[02:24:09]  whole system was let me see if i can get it on here okay yeah it's just the site and that was a good sign that something was fundamentally wrong here so how can
[02:24:16]  flux help with something like this if we're looking at the structure of the code that we had before we have sort of the fundamental pieces we have chats have main messages an unseen
[02:24:26]  and then we have a next one handler that goes and modifies them right all of the logic to modify state based on a new new message coming in is in the handler
[02:24:39]  itself and so those three different pieces no longer have the ability to maintain internal consistency they don't they basically don't have that information they've already seated that control to the handler
[02:24:50]  what we want to do instead is internalize this control we want to move all of the control into the individual pieces so that the state is right next to the logic that updates
[02:25:01]  that state so for chat tab and main messages it's pretty easy you just want to append a message whenever you get a new message but it's a little bit less clear
[02:25:10]  what to do with the unseen counter we know that you want to still increment whenever you get a new message but where do you decrement that unseen counter you don't have enough
[02:25:19]  information at that point what the structure makes clear is that we need more explicit data what we really want is to keep track of a list of the unseen threads not just the unseen
[02:25:31]  count then what we can do is whenever a new message comes in we can add that thread to the list and then further down the line we can have the ui decide
[02:25:40]  when to mark that messages or that thread as seen and i can remove it from the thread list having more information this way means that that thread list stays more consistent if we put
[02:25:50]  in two mark scene messages no harm done the second one is a no op because that thread has already been removed so what we learned here is that we should use more explicit data
[02:25:59]  on the client instead of derived data in this case what that means is the unseen threads list is the explicit data and the unseen count is the drive data which is the length
[02:26:09]  of that list and doing it this way gives the client a lot more control and the better a better ability to stay consistent overall we also knew that we wanted to separate data
[02:26:22]  from our view state this isn't too different from mvc you know it's very uh non-controversial but it does add to our system um diagram a
[02:26:32]  little bit so now we have an action coming in to the messages threads and unseen threads state and whenever those update to tell the views hey something changed and you should go rev
[02:26:42] ender the biggest difference between flux and mvc is that we want to avoid cascading effects by preventing nested updates so what does that mean well if we look at
[02:26:53]  our system what that means is that we want to let the data layer completely finish processing before we trigger any additional actions in this case it means that the actions come in the
[02:27:04]  messages threads and unseen threads stores finish processing that tell the views to update and only then can the views say i want to mark something as seen and that goes back in through the
[02:27:15]  system the benefit here is that there are no direct no arrows going in the other direction more generally what this diagram looks like is you have an action that comes into the stores
[02:27:27]  stores update the views and all of your actions take take the same structure nothing goes in the other direction and having all of your actions go through the same flow makes it really easy
[02:27:38]  to onboard a new person when i was working on the teams that use this okay that's probably enough for this uh i this is an old talk and i it's funny i
[02:27:46]  realize i'm doing like a reaction video to a talk that happened in like uh 2013 the problems i've actually seen it before so it's not a reaction video but what
[02:27:56]  i'm this is by now this is such a well-known and understand approach that are understood approach that everyone does this stuff now anyways like this is not new this is not
[02:28:09]  like revolutionary it's like how you do things this is but at the time this was not the case and i know this is a really long way of doing it but what they
[02:28:19]  were basically describing don't be wrong there's some details here where i think implementation mattered i think the i think in terms of those three points the the third point is the
[02:28:30]  most important um of the of the bunch but essentially unidirectional flow gave the control back in such a way that it actually simplified everything um sorry what's this is
[02:28:50]  someone came back with the cyber truck yeah i mean yeah i i see what you're saying i don't know how to actually leverage it in the same way um but yeah
[02:29:11]  no i maybe maybe if the problem is solid on the surface looks like react um so this is gets very nuanced but my point is people have kind of forgotten how big of a
[02:29:26]  deal or how problematic this what actually was yeah and that's the thing like we've done other things systematically the way we've approached designing our frameworks and our libraries where this
[02:29:45]  stuff isn't as bad but god it it this this what react and the funny thing is even when this this talk came out people are still like oh like we still like
[02:29:55]  our mvc it just it's funny like people just tried it and they changed the mentality and they didn't they just realized like like it just the old approaches just evapor
[02:30:06] ated within a year like you know javascript kind of moves fast and stuff but can you picture frameworks that were completely the hot thing like it's hard now because we
[02:30:18] 've kind of settled in but can you picture stuff maybe not as big as reactor view or angular but picture something like svelte for example and i'm sorry they use felt
[02:30:27]  again because or solid maybe solid is even a better example where like picture a framework like that coming in being super hot for like two years like svelte's a good
[02:30:37]  example because it's been two years since 2019 and then literally disappearing in six months and no one using it anymore this was what was happening back in 2014 15 because like people just
[02:30:50]  realized they're like we this like this isn't quite right react actually has it right so it's kind of crazy because react came in on that and people and and some
[02:31:00]  people like they they saved us from two-way binding and and people like i want it back you know and and i i it's i don't think anyone coming up now
[02:31:10]  will ever suffer the scars in the same way to have such a harsh bias but it's it's kind of one of those things where like functional programming you find like certain people
[02:31:19]  just get gravitate towards it just because of like it can academically make sense to them and it and it falls through this is one of those things where it just there was
[02:31:32]  a real issue it was a real problem and we've kind of continued on this path just because it made sense and now it's fine level zero level one thinking of frameworks two
[02:31:43] -way binding makes life a lot easier but it's just not something that i'm at all interested in and solid and i mean i i maybe this is my bias showing
[02:31:50]  through it's just it's just like this is still very real to me and maybe i've been at this too long that's the problem you get get people who who've
[02:32:00]  been around too long they have those kind of biases it's kind of like the i was making fun of the classic mpa people um in my latest article calling them time travelers
[02:32:10]  um it can work the opposite way too right it's it doesn't have to always just refer to people set in like the old ways were so good sometimes this follows the
[02:32:21]  bias the opposite way where you're saying the old ways were so bad don't don't go there and i this is something i personally kind of have to kind of work through
[02:32:30]  because like i because of like dot net i really hated uh class life cycles and like class components and like life cycle functions so when i saw react i rejected it almost immediately
[02:32:43]  because i was like oh my god dot net back but now in javascript this is the worst thing imaginable um but you know now i've come to really like react
[02:32:52]  and someone might go well it's because react has hooks and ended up resembling your favorite libraries but but i think i would have come around on react even if they didn
[02:33:01] 't like hooks obviously you know things would have been a little bit different but um essentially what i'm getting at is we have to be careful of our like negative biases as well
[02:33:12]  it's also very easily easy to just be like oh this is a bad pattern don't do it so i you know that's why you know it is important to understand
[02:33:22]  that like svelte is a bit different and uh largely that's because they don't have nested reactivity i mean that that kind of helps the thing but like in
[02:33:31]  general as things grow these are just good patterns and i mean you always hear those stories um about like whatsapp or like some of the large telecom and they use these
[02:33:46]  like systems that basically never go down never have errors and like are perfect um i'm trying to forget it was it elixir or phoenix or something behind it but
[02:33:56]  basically they're designed in such a way um erlang of some sort i think where like using these really strict functional programming things there's just no room for error and i mean
[02:34:09]  that's an extreme but when you kind of have these patterns that are so well structured there's there's just value when things scale to a certain level and maybe that's
[02:34:20]  not skill everyone hits so maybe don't worry about it but i i think i i think it's really hard for people today to kind of get back to the mindset to you
[02:34:30]  know and i'm hoping we haven't forgot the mistakes of the past that that's what solid is all about but maybe maybe maybe i'm being a bit too conservative there
[02:34:41]  could be setter limitations outside of creating a second identifier but yeah yeah and that's that's the thing right someone was was like can we just do this locally and then make
[02:34:57]  it not escape the template right can we can we make it mutable within the template and not escape and one way the way svelte does it is don't make
[02:35:05]  things nested right it's almost impossible to share reactivity in svelte like you can use their their stores but like their core label stuff it's like really hard to
[02:35:16]  actually you have the bind syntax but it's which is explicit and kind of okay but generally speaking it's it's it's actually really hard to share reactivity in svel
[02:35:25] te um and i actually did a little hack where i did do that and i showed that i think in the previous stream and yeah everything broke apart it was like terrible i
[02:35:33]  could i could i could i could basically ignore binding and have child components update parent components and just cause a whole bunch of havoc um so the the the trick is like is it
[02:35:43]  possible to have it use the convenient assignment syntax locally but then make it have to be explicit when you leave the template and um not easily maybe a smart enough compiler or some
[02:35:57]  kind of way of doing it but you the problem is you still need to give the end user the syntax to make the decision to just pass the setter or not pass the
[02:36:05]  setter so um you know obviously this felt way is very obvious because you can't pass the reactivity of the template generally so you can just pass a function down which
[02:36:12]  becomes a center and you can make it explicit that way but it's not i i i think if you could do some clever playing you could probably come up with something but it
[02:36:21] 's not actually you know like view has a special helper to make things read only but i don't think it's enforceable essentially i feel somebody to show suspense giving the parent
[02:36:33]  control where similarly it's nice to explicitly pass the center as a permission yeah yes those are interesting suspense is particularly interesting because suspense um has a sort of weird inversion where the
[02:36:49]  parent gets to decide the behavior but the child gets to choose whether it wants to play um i actually love suspense from that design i think that's one of those genius things and
[02:37:00]  i obviously i think we gotta thank seb for that one probably um but like you when you attack the async problem your your first tendency is to look at where the fetch
[02:37:12] ing happens the async starts but what we really want when building uis is understanding the consistency of our application of our view so using suspense to invert it actually puts the on
[02:37:24] us back on where the values are read and where they use it and the funny thing is this is such a natural thing for reactivity that it fits like a glove i
[02:37:34]  mean some of the the this this is an interesting thing for me because which is i said when talking with sebastian and how he he has like this different view of things the
[02:37:44]  stuff they've been designing for react for the last couple years since hooks in this whole direction is so similar to reactive fine grain stuff um that i'm almost able to adopt
[02:37:59]  these ideas just straight up um because they're they're analogous they're almost identical and it's really quite powerful because it's almost like these ideas were made for reactivity
[02:38:10]  almost better for reactivity that's that's why i've been able to do this stuff so easily because like it's it's almost like like the new ideas coming out
[02:38:22]  for react were made for solid um anyway sorry kind of went on my rants again but i hope that answers that question um i i know that went on a crazy tangent and
[02:38:36]  somehow spent 40 minutes on it but you know there's there's there's so much depth in this area and when you kind of go through the progression i don't i
[02:38:49] 'm not sure if developers coming up today really do appreciate it i mean that makes me sound like an old man like the mpa people so i don't want to as i
[02:38:57]  said i don't want to get kind of pulled into that but essentially there are some lessons to be learned and put in perspective biggest thing for me though is as i said
[02:39:05]  this doesn't mean don't bet on javascript or don't bet on reactivity or whatever like you don't don't assume the solutions are the same today as they
[02:39:12]  are tomorrow um okay sure let's uh i'll i'll shoot one thing i don't understand about two-way bonding is why people want them that much isn't it essentially
[02:39:23]  just about passing one prop instead of two props why is this such a big deal yeah i mean it is an ease of life thing really like i i showed the controllable
[02:39:37]  uncontrollable thing in the last stream and when you look at like how much how cool marco handles controllable that's an argument for two-way binding like and that
[02:39:47]  is one where we it actually drastically simplifies knowledge to be able to make something controlled or not controlled and like because making either or is easy but making both is extremely complicated
[02:40:01]  but as we saw in the stream svelte view solid once you leave the either or scenario um you know the the uncontrolled is easy it just works but once you
[02:40:13]  leave the either or scenario um you know and control is easy it's two-way binding in those frameworks but once you um leave that they're all the same you have to
[02:40:22]  handle everything yourself and it's extremely complicated and at that point yeah i mean it is if you ignore that controllable thing from marco it is just adding that extra function
[02:40:35]  and the small things that happen a really big kind of deal yeah that's the thing people like that in svelte you type just a few less characters it looks cleaner you
[02:40:49]  know these kind of aesthetic stuff i'm not gonna lie i did a survey a while ago because honestly and this is about me again trying to value stuff i don't care
[02:41:00]  that you type less characters it's felt like that's like the last thing that i value i i i i've sometimes maybe been a bit harsh and called that kind of like
[02:41:09]  superficial like people not caring about what's important but these kind of you have to live with your code as a developer you have to like sit with it you have to type
[02:41:19]  it you have to you know you have to do this thing for me a much more important consideration of writing less code is the refactor story and composability and things that actually
[02:41:30]  matter for the long term but for the immediate gains typing less code is the easiest feel good thing you can do right like not having to add that extra uh you know completely
[02:41:45]  unnecessary like on input event to write back to the input like sure it only took you 15 seconds to add it or something but the fact that you had to add it is kind
[02:41:58]  of tedious people don't like tedious things they could have just went like bind input and call it a day you know score that's not the hill i'm gonna die on though
[02:42:09]  because like you're it took you 15 seconds it's explicit now you have control you know in some ways it's kind of better it's funny i was a big fan
[02:42:19]  of two-way binding coming out of knockout and stuff and not having it suddenly was like oh why do i have to keep on doing this thing but so like it definitely
[02:42:29]  has this emotional feel or connection but the other hand like i mean am i i'm not that spoiled you know what i mean like and again old man talking so to speak
[02:42:42]  but it's it's just like it doesn't really matter no like not having to write quotes on html attribute seems weird that someone actually wanted this out the js expect
[02:42:59]  marco uh does this um html supports not quotes on some stuff but this is another one of those kind of funny ones where you have to worry about consistency right
[02:43:10]  because on the time you do need quotes well then you do need quotes people really do try and do less stuff see if you remove those things you do you know there's
[02:43:22]  less places where you can make a typo less places where you can make a small mistake in this i i know this from the coffee script mentality you know there there's this
[02:43:33]  thinking that you know you can just move faster because the simple stuff you you're less likely to screw up so i mean there there is some some value there um and you
[02:43:49]  know yeah i didn't realize how much boilerplate until i started using copa yeah like maybe copilot's the solution i mean there there is repetition but it's also like
[02:44:05]  who you writing the code for you're writing like it's not just for you to implement it's also for people to uh to read code is red um so i mean
[02:44:18]  it's it's funny because uh you know people know that i was a big fan of coffee script as terseness but i i said it's just it's such a
[02:44:28]  funny game to go to on the extreme that i've seen all extremes like if someone wants to write the least amount of code go use marco and terse mode like
[02:44:37]  literally nothing is smaller than marco and terse mode like it's it i did some people like you know kind of measuring less code like there is literally nothing smaller um but
[02:44:49]  we don't use marco and terse mode generally because like it's the it's kind of like less readable or less approachable i don't know i think people have
[02:45:02]  their preferences i don't think i can really judge them for that or anyone can really judge them for that i have a hard time thinking that it's actually important so i'm
[02:45:14]  probably the worst person to ask uh you can ask alexis why he created solid labels you know the the my opinion on this probably is is not the is not the best
[02:45:25]  take um mixed mode oh you're talking for like marco's thing or sorry not quite sure which mixed mode you're talking about but anyway yeah yeah yeah being able to
[02:45:51]  like kind of play back and forth yeah i think that's cool but as i said like people have preferences they like typing less it's the first place you get that immediate
[02:45:59]  win i don't think in the long run it actually matters that much but maybe it does maybe every 15 20 seconds adds up there's just a little mental tax bearing at you
[02:46:08]  it just it's it's not the thing that i think should be making the biggest decision but again if i did maybe i would have created svelte except i would have
[02:46:16]  stopped short because svelte already existed and maybe that's where i'd be i said it's all about valuing different things um but why do people want it so
[02:46:27]  bad yeah i mean it's just that like nice little piece of syntax at ease of life feature um i can live without it pretty easily but for some people it's just so
[02:46:41]  nice that you know it's just like that icing on the cake it's hard for me to unsee the danger behind it but here's the thing two-way binding
[02:46:49]  to a form is not ever going to be like detrimental like i'm talking about the problem is when you add two-way binding to components and other things and you can like
[02:46:59]  pass things through trees and and whatnot two-way binding on a form is safe like there's nowhere else it can go it can only go to that form um yeah i
[02:47:09]  think that answers that one my margarita is finished i think they don't defy or don't define best practices yeah i mean there's a whole conversation to be had
[02:47:30]  about the season life things um one of the ones for me and i didn't really bring it up on the last stream that much but i personally think the reason i had
[02:47:38]  such a hard time with the view docs was because of all the shorthands they made things so easy that there was like so many different syntaxes as someone who was not
[02:47:47]  familiar it was a lot now what's weird about that is i understand how view basically works and i know basically what the shorthands are so i should be able to make
[02:47:55]  heads or tails of like the pattern and apply it so it's it's not like you know this is like super big a guy beginner guy trying to do like a super
[02:48:04]  advanced thing it's just that there's just so much i had to wade through it and know in my mind to go okay disregard that or translate that in my head um
[02:48:14]  and that's a perfect example of this sort of ease of life thing special syntaxes we have to consider this a lot with marco because marco actually defines different syntax in
[02:48:24]  standard html um and there's only a couple and we've reduced it but marco was like king for that kind of stuff at one point they just had sh
[02:48:33] orthand syntaxes for for everything and over time we've actually stepped back from those and only focused on the things that were mechanically important and again i don't know if
[02:48:44]  that's the right choice for everyone but that's why where it's templating language and ultimately ended up simply because the desire to actually add things that were needed to h
[02:48:56] tml um so yeah uh yeah i mean like let me see if i can pull it up here i i probably not actually it's let's do my bookmarks it's
[02:49:08]  funny when i'm in this full screen i can never see it i i don't think i actually bookmarked the the poll i i i i did i did a
[02:49:17]  a poll a while back where i actually asked that question and yeah i didn't bookmark it i'm sorry yeah it's fine um just like the thing was most people were
[02:49:31]  like two-way binding where it's convenient i think the results were 40 and then about equal number of people were like i need two-way binding to live and then
[02:49:41]  two-way bindings and abomination and then the and then i figured what the fourth option was but it's essentially so yeah i don't know what two-way binding
[02:49:53]  is which i quite enjoyed i think dan abramoff was like i don't know what two-way binding is um a lot of we've gone to such a point that
[02:50:02]  two-way binding wasn't even a term in our vernacular but it's kind of come back again because of the popularity of svelte and view kind of bring
[02:50:10]  into the limelight um on change do you want you want is this what i think it is you want me to talk about on change oh man if there was one thing
[02:50:22]  that reacted that i am like heatedly upset about and i know this is a silly thing is the change event they commandeered the change event um it's like the
[02:50:36]  worst because the browser doesn't doesn't doesn't like the browser change event works on blur i had someone uh put something in our discord and they were like why why doesn't
[02:50:53]  why doesn't this work and it was a perfectly fine example but essentially when they click the button it worked but when they press enter it didn't and the reason was when
[02:51:04]  you click a button you have to leave the input to click the button which caused the change event to fire and handled the change but when they clicked enter their cursor was still inside
[02:51:17]  so the change event hadn't fired and they were seeing empty to do's and honestly every live stream that we've ever like new person coming in they hit this stupid stupid
[02:51:28]  thing because of react commandeering on change and the and the challenge there is what are the other popular libraries other than react so react has an on change event instead of on
[02:51:42]  input which is as i said not correct then you have view angular and svelte who all have two-way bindings so the developers never actually bother writing like on
[02:51:55]  change events or on input event which is what it should be so essentially there's a huge whole generation of web developers coming up who don't understand that on change is a blur
[02:52:09]  event and they think that it's an input per keystroke input event where that's what on input is for and i can i as one person can't you know fight
[02:52:20]  that wave it's funny um uh inferno preact i guess lit all obviously require a non-input maybe lit has two-way binding which would explain it but essentially
[02:52:37]  it's it's it's it's it's kind of insurmountable in a kind of crazy way um that because none of the popular frameworks actually use the proper
[02:52:49]  input event no one like knows about it um i don't know if there's much else to rant about that but it's it's just it's just it's it's
[02:52:56]  strange every i i literally every new user to solid probably hits this or on on a stream hits this because even if they like even if they're a view user or whatnot
[02:53:10]  um like maybe they think react or they've seen enough react to to know be at least be aware there's an on change event so ah i don't know that that that
[02:53:20]  that one's that was just a little gripe but you know what i think the questions here kind of wound down we're at the three hour mark for a stream that
[02:53:30]  was literally about deployment and pretty much probably bored everyone's socks off until we started talking about more interesting topics so i'm i'm fine with that uh is part of your effort
[02:53:43]  to make different html elements have a similar api well early days there's this either again hard for people now to kind of as much like browsers used to be
[02:53:56]  like crazily inconsistent and different that's where the synthetic events came from they did want to try to make a standardized event system in terms of the elements themselves i i don't
[02:54:08]  know so much but essentially they like it was common for libraries like jquery and stuff to have polyfills and have to deal with all the weird stuff like oh
[02:54:16]  in safari this happens and you know in internet explorer these seven things happen or don't happen and essentially the early frameworks had to make a choice to follow the spec to as
[02:54:31]  well like like it was impossible they couldn't they couldn't actually if they followed the spec then every browser that didn't wouldn't work so they they'd have to patch and
[02:54:41]  hack stuff together i think it probably at a certain point they were just like screw all of you i'm going to just make something that works and because i made it i
[02:54:50]  know that um nothing else you know is going to mess with it i can just make sure that i patch every browser and what sucks is that requires more code in the framework and
[02:55:00]  it's those kind of things as why like react can't shed some of its weight but you know in a sense this you know we're looking back at it now going
[02:55:11]  oh man why didn't they get rid of it when they chance or whatever why did they go down this path and they probably regret it to a certain degree themselves but we're
[02:55:18]  still kind of do this to this to this day to a certain degree you know we use the part of the web platform that's convenient for us um because it makes sense
[02:55:27]  not not you know not because you know like it's the right thing to do you know some web component um uh supporters might be like oh frameworks bad blah blah blah not using
[02:55:42]  the platform but it's like no use the platform we just use the part to the platform that are actually good and i mean that's a little bit of a friction but
[02:55:51]  clearly um it's been going on since day one so you know things are getting there eventually i mean using the platforms in our benefit it makes the code smaller the the more in
[02:56:02] built tools we can use the less we have to rely on like building all these polyfills and stuff ourselves which makes our framework bigger and bloated no no one wants a
[02:56:11]  bigger bloated framework right so i think i i i i think react had good reason at the time it wasn't so unconventional it's just years later like it's just
[02:56:24]  so widespread they can't change it it's just really unfortunate that people literally don't know this fact all right all right last chance to get another question in but i think i
[02:56:40]  think we're gonna call it now i'm i'm betting that they're that since the viewers have seemed to kind of move on that there probably won't be that many
[02:56:48]  but thank you for those who have actually stayed till the end on this roller coaster stream i'm i'm gonna need to come up with some good topics coming up here in the
[02:56:58]  future so we can uh we can kind of look at something maybe get a guest on if you have any suggestions people interested to join me on my stream i'm super stoked
[02:57:08]  to i'm like to probably probably could do an interesting stream about the router if i could get ryan um on here he seems to be in the stream tonight but you know
[02:57:16]  um maybe we could schedule time for that also get alexis on talk about headless or whatnot yeah it's it's yeah don't yeah so you know if you
[02:57:30]  have any ideas to stream throw them in you know whatnot as i said i have a feeling this one might not be the most popular one but uh hopefully some of you found some
[02:57:40]  useful stuff in here and don't mind hear me ramble and rant um but yeah other than that yeah let's let's call it a night all right so thanks for
[02:57:51]  joining me and uh until next time and probably next week i'm hoping i've got a js comp india um monday like early early monday morning i'm hoping that
[02:58:04] 's public i can so i can share that out i'm pretty excited about that one it's a whole uh talk about reactivity in a lot of detail that and in really
[02:58:12]  kind of concise and hopefully clear way that uh than i've done in the past so i think that's great one to pick up on but uh yeah other than that um
[02:58:23]  until next week see y'all