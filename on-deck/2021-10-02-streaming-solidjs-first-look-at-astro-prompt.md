---
showLink: "https://www.youtube.com/watch?v=UPhx3OxUH0w"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS - First look at Astro"
description: ""
publishDate: "2021-10-02"
coverImage: "https://i.ytimg.com/vi/UPhx3OxUH0w/hqdefault.jpg?v=615732c7"
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

[00:00:00]  Hello. Welcome to my stream today. I'm going to be talking a bit about Astro, the relatively newish MPA static site generator. And we're going
[00:00:15]  to kind of look at how it works with Solid. While I'm waiting for people to join up on the stream here, I'm going to do what I usually do,
[00:00:24]  talk a little bit about what's been going on this week in JavaScript. The funny thing is, it's kind of on topic. A lot of conversations still going on
[00:00:33]  about this MPA versus single page app thing. I actually listened to a podcast today with Rich Harris, kind of giving his thoughts. And he had an interesting conclusion where he
[00:00:45]  was saying he actually didn't see ultimately the point of going multipage app unless it was to escape the language of JavaScript. And, you know, that's a pretty
[00:00:56]  interesting perspective to have. I can see where it's coming from. But in the same podcast, he also managed to basically say that, you know, we need to focus
[00:01:09]  on other things other than performance and looking at developer experience. And one of the interesting things is I think multipage apps for simple sites are going to get there in terms
[00:01:19]  of developer experience a lot sooner while being able to deliver that performance. So I feel like the gap is going to widen a bit before it actually closes in. By the way
[00:01:30] , if you guys are joining on right now, say hi in chat so I know that you're there. But yeah, let's see what else happened this week in
[00:01:47]  JavaScript. Actually, this one's more. Let's talk a little bit. We did a little bit of an update with solid this week. So I could speak a little
[00:01:55]  bit to that. You guys might see my article state of solid JS. And oh, hi there. There you guys. There you all are. Here we go.
[00:02:06]  Big news for us is partnered up with Netlify as an official sponsor. And Netlify has been looking at giving back to open source recently. And as you guys
[00:02:22]  know as well, Solid and Astro, which I'm also covering in this, are sponsored by Netlify. So in a sense, Netlify is sponsoring this
[00:02:31]  episode. You want to look at it that way. But definitely been excited about that. Yeah, just kind of killing some time while people are joining in here. In
[00:02:44]  general, I've been pretty stoked about what's been happening since the release. So we'll go into a lot of details there. Share some libraries that have been coming
[00:02:54]  out for solid. And definitely a lot of things go out to people in the community already. We in what, two months, we've had 10 languages translated for the doc
[00:03:07]  site, which is just amazing. I honestly, I just can't believe it. And obviously, some great articles that have come out, like the CSS tricks article,
[00:03:18]  if you haven't checked it out, and some videos, stuff that, you know, could never expect, like just people really getting it. I was always worried when I
[00:03:28]  came out with solid that people wouldn't, wouldn't get it. You know, so I'm glad to see that, you know, this has been going on. And
[00:03:37] , you know, as much as some people are kind of, you know, talking about that narrative of solid versus react. I mean, you can see it from both
[00:03:45]  of these video covers here. The react community themselves have been really supportive, surprisingly, out of out of everyone, really, when you kind of they invited me to speak at
[00:03:56]  react Finland, which was amazing. And also, like, if you just look at the testimonials early in the article, these are a lot of these are people prominent in
[00:04:05]  the react community. So it's interesting, it's maybe not what you'd expect, we've actually had a really good run with with voices, typically associated with react
[00:04:16] . So I think I think people are starting to get it. And that's more than I could ever have hoped for. But, yeah, I mean, what this boils
[00:04:26]  down to is where development is heading for solid. And it's kind of the reason why I wanted to kind of look at is that basically server side rendering has kind of
[00:04:47]  become the focus the last couple of years, regardless of what you're looking at in terms of framework. And there's lots of different ways to slice it. As I mentioned
[00:04:55]  that talk earlier with Rich Harris, he was talking about how Svelkit could support, you know, like the five or six different modes, you know, you can
[00:05:03]  make static routes, you can add JavaScript here, not out of here. And this kind of control and flexibility are ultimately what you want. But it's also one of the
[00:05:11]  hardest things to explain, right. And basically, I think it's really interesting to see this kind of return to web fundamentals when looking at how we approach single -- sorry
[00:05:29] , server side rendering. And basically, it's different this time, right? This isn't -- I think the biggest thing that's kind of hung up this kind of
[00:05:40]  multi-page app versus single page app discussion is that the parties involved aren't really seeing eye to eye too much. Basically, how should I put this? Rich wasn't
[00:05:57]  wrong in characterizing that the discussion was between a lot of, you know, proponents, veterans, people who, you know, have the experience saying, you know
[00:06:07] , multi-page apps, less JavaScript, you know, has significant benefits. And then, you know, the single page app kind of comes off up as almost like the
[00:06:18]  upstart who are trying to, you know, dethrone that. And, you know, they haven't been seeing eye to eye. But to me, the
[00:06:23]  interesting part is you don't have to give up that in order to achieve the same goals. JavaScript on the server is a very viable solution. Obviously, we see stuff like
[00:06:37]  Next.js. But, you know, this is also why looking at stuff like Astro, because just because you use JavaScript on the server doesn't mean we need to
[00:06:47]  send more JavaScript to the browser. And that's basically the gist of it today, right? Like that, that's, that's the, that's the concept
[00:06:55] , right? Single page apps, as I said, you could go the SvelteKit approach where you have the different modes, and you can kind of tailor to it
[00:07:03] . And that'll get refined over time. But what we have today, with multi-page apps, that knowledge that you know, that the whole page is not going to
[00:07:12]  get re-rendered again, lets us do sort of level of optimization almost automatically. As many of you know, I also work on the Marco team. And we do
[00:07:21]  this sort of automatic island thing where the compiler detects the boundaries and knows exactly what components need to get shipped to the browser. With Astro, it's a little
[00:07:32]  bit more manual, but that has some benefits, because then you get to control how the hydration boundaries work. As I said, I'm pretty familiar with what Astro has
[00:07:39]  done. I've watched all the videos, you know, read the articles, you know, got my head wrapped around it. But the one thing I haven't done
[00:07:48]  on to this point, is actually go in there and build something, right? And kind of see how it works. In fact, the solid Astro plugin template, I
[00:08:01]  was barely involved in. People from the community came up and were like, I want to do this, you know, working closely with members of the, I don't
[00:08:09]  know what to call that team, the Snowpack/Skypack/Astro, you know, that whole Fred and company. Basically, Nate Moore and Trevor, I
[00:08:23]  don't know his last name. on Twitter, I could probably pull it up, basically put this whole thing together without even practically even talking to me, which is amazing.
[00:08:36]  So I really want to check it out and see what this is all about. What this means, though, is I am walking into this a little bit blind, like I
[00:08:43]  get the concepts, I'm very familiar with multi page apps, I'm very familiar with, you know, the mechanisms behind this, like what we're trying to accomplish,
[00:08:44]  but I am less familiar with any of the specifics. So I got the doc site up here, ready to go in case I need it. Fred was nice enough here
[00:09:02]  to share on Twitter a bit earlier, exactly the, yeah, these two are the ones responsible for the solid integration big time. To basically share with me what I need to
[00:09:13]  do to get started. What do we got here? We have some CLI commands. Yes. So maybe that's where we'll get started. Before I get started,
[00:09:23]  anyone have anything to say? Anyone got any questions so far? Anything they anything they want? Anything you guys want to see today? You know, related to the topics
[00:09:32]  we're talking about? Let's give myself a little breather here. All right. Well, without further ado, then let's see if I can dig into this
[00:09:46]  because this is going to attack this in my normal fashion, kind of reverse engineer. It's not completely, but just kind of get a feel for what's going on and
[00:09:54]  just, you know, see what we can do with this. So let me get started by setting up a new project. Let's let's just call this. I
[00:10:08]  believe I have to make the directory first here. So let's let's just do that. Let's call it astro app. Why not? All right. Okay
[00:10:24] . And then I believe MP init astro starter. Okay, cool. Okay. That's that's what I need to do. MPM init astro. Make my
[00:10:35]  window a little bit bigger so people can see it a bit better. starter generic blog. Okay. Interesting. Cool. So let's do a starter kit. And this
[00:10:50]  is awesome. Honestly, very much appreciate having solid in the list here. It's really hard as a new framework to get like ground like this. You spend months on PR
[00:11:00] s to try and have to put it like to try and, you know, get traction. I remember there's a there's a custom elements everywhere project, which tells you
[00:11:12]  how well your project works in web components. And understandably, no one had heard a solid at the time I added salt, but I was really into web components when
[00:11:21]  I started it. And, and basically, what ended up happening was I put in this PR for it. And basically, I had to wait for the project to grow to
[00:11:36]  get there. It took two years for the PR to get merged. And that's kind of the case you have often when you come out as like a new framework,
[00:11:45]  it's hard to get that traction. Luckily, a solid mainstream and astro kind of come up at the same time. So I'm super stoked to basically be an option
[00:11:55]  on the list here, right? All right, so there we go. MPM install, get init, get add, okay. Okay, this is just okay. Yeah
[00:12:03] , good. That sounds good. I'm actually going to do here is I'm going to open a new window, because that's what I've been doing here with
[00:12:11]  solid. If I look a little tired today, or voice a little, you know, it's mostly that I am very tired today. I've been a long week.
[00:12:22]  And not because, well, mostly because I've been working on a new concurrent model for solid. Basically, where it should allow us to have multiple transitions at the same
[00:12:35]  time if they are not entangled. And that's some complicated graph stuff going on there. So I've been working on it every night. And it's got so many
[00:12:43]  bugs, and I'm just like, almost exhausted. But it's so rewarding. Then I wake up and go to work and work on Marco, where we're working
[00:12:52]  on this new, resumable hydration analysis stage for looking at a way of doing scope, where we can basically do out of order hydration, so that like components can run
[00:13:05]  before their parents do, but really cerebral kind of problems. And I just kind of bounce back and forth between them. It's awesome, because one kind of frees
[00:13:14]  up your mind for the other. But on the other hand, by Friday, you're just like, you know, anyway, let's see what we got here. Okay
[00:13:22] , so this is our Astro app. And let me get that in here. I'm hoping you can all see my screen pretty fine here. Let me see if I
[00:13:34]  can make the text in here even bigger. I've had some comments that I don't make my code large enough. I find it really hard. For those of you
[00:13:42]  who know, I was a CoffeeScript developer. And with CoffeeScript, basically, code was so condensed, like it's a complete opposite of TypeScript, that essentially,
[00:14:00]  you got used to seeing all your code in one screen, like your picture, you could have like a 40 line CoffeeScript file. And in JavaScript, that roughly works
[00:14:07]  out to maybe like 70 lines. But in TypeScript, that might be like, I don't know, 140 lines, like it basically doubled all the way up. What
[00:14:21]  it meant is I got really used to seeing all my code in one screen. And I'd even kind of go for longer line widths, like 100 instead of like the
[00:14:28]  typical 80. And just so I could just see everything on one page. So it's been a big adjustment when I'm trying to like look at code and have Type
[00:14:36] Script types and then like zoomed in and you're like, all you can see is like the small portion. It's like the exact opposite. I like looking at stuff
[00:14:44]  holistically. I think that's the trickiest part about TypeScript. A lot of people say that it improves readability because it kind of makes sense of the code.
[00:14:50]  But for me, I like zooming out. I like it all shrinking away and structurally seeing what's going on first. It lets me see more at a glance. I
[00:14:57]  don't know. Pretty. Yeah, this is this is definitely true. Prettier is the thing that changed that. Yeah, definitely. And I was I was I
[00:15:06]  was I was I was I was not initially on board with Prettier, I have to admit. But after a while, everyone caves in. I mean, it is good
[00:15:15]  for a reason. So yeah, let's let's let's look. Let's look at this project here. We have our new Astro project. If you've used
[00:15:26]  Astro before, you're already way ahead of me, because I honestly don't quite know what I'm looking at yet. But we have a public folder, which
[00:15:34]  I'm gathering is just going to have our assets pretty standard thing. Some global CSS. Okay. And we have a source folder pages components, standard file based routing.
[00:15:48]  Ooh, I bet you there's an extension for this. See, I kid I'm kidding you not I have not asked her yet. I need to install the VS Code
[00:16:04]  extension here. Will this force me to restart? Or will it be fine? Oh, beautiful. I'll worry about upgrading dating this stuff later. Okay, so now
[00:16:13]  we have an Astro syntax highlight. Okay. Anyway. God, tap spaces for this is going to kill me. This is like coffee script all over again. And
[00:16:29]  didn't use a spaces to write, but then I have to might be able to format this. Will I know what an Astro file is? Okay, whatever. I
[00:16:42] 'm not going to let it kill me. Oh, yeah. Yeah, this is true, too. This is great. StackBlitz is really awesome. I haven
[00:16:53] 't really been advertising it. Someone made our Veed setup work with StackBlitz. I haven't really like pumped it anywhere. But you can also use solid with V
[00:17:01] eed in StackBlitz. The thing is, the day that we got it working, it was kind of working, but then kind of not working. We found out later
[00:17:09]  that it was actually a bug that like everyone was experienced, but everyone else went and promoted it on Twitter and I didn't. And then afterwards, I was like,
[00:17:16]  okay, well, I'm not going to promote it now. Everyone else did. Right. So, but yeah, no, StackBlitz is very promising, especially for
[00:17:24]  any kind of server side rendering set up like this. Right. It's a game changer for being able to actually have the whole experience in here. So anyway, let's
[00:17:33]  look here. So yeah, HTML entry point. Some components, style thing, tour component. Okay, cool. And all right. Astro components markdown, blah
[00:17:53] , blah, blah. Okay. And they're perfect. They're actually explaining to me what's going on. And using this markdown thing, I heard about that.
[00:17:59]  Built-in markdown is pretty cool. I definitely think that it's awesome that we can just kind of have this. I think it's the central definitely know their
[00:18:11]  audience in terms of figuring out what to do here. Okay. So, you know, before we dig too much, let's just see what this does, right? Is
[00:18:18]  it TS config? That's great. Let's let's just run it. Yeah. So dev start. It's funny. You always have to check this because no
[00:18:25]  one can seem to agree. Is it dev for dev or start for dev or build or what's start when it's not in dev? Preview is preview, which I
[00:18:34] 'm guessing is the after build. I like that they made dev and start both the dev script. So it's like, it doesn't matter which framework you came from.
[00:18:43]  We're going to catch you. Right. So anyways, let's let's just NPM start here. Let's see what see what we got going on. Okay
[00:18:53] . So, so right, right, right, right, right. Yeah. Cause it's static building. I gotta remember, remind myself of this. Right. So am
[00:19:00]  I going to actually see it in the public folder or is this a dev service? I don't know enough astro, astro dist, astro dist. So there
[00:19:07] 's like a bet you if I refresh this. I was wondering if I could like look and see what's going on. There's also config file here. Yeah.
[00:19:15]  We'll look at those options. Interesting. Render gone. I did do the solid option. So hopefully it installed it for me at least. I don't, maybe
[00:19:27]  I can, maybe it didn't. Yeah. I did this completely wrong. It's fine. I can probably add it manually. Yeah. There's no solid there
[00:19:36] . I'm going to have to look on that. Okay. So let's just run this thing then though. Let's just do what we're doing with astro.
[00:19:43]  Yeah. Like I, I, I took the solid version. I can shrink this down. We don't need any more. Let's let's, let's see
[00:19:58] . Localhost 3000. Okay. Give me a second here. It looks like it's popping up on my wrong window. Okay. Get on the full screen mode.
[00:20:20]  Okay. Everyone can still see my screen, right? Yeah. All right. So let's just, let's just give this a little peek, see what we're dealing
[00:20:36]  with here. Because again, I'm curious. Okay. So this is like static HTML. Although there was marked down in here. So I just curious, cause I
[00:20:46]  don't know. Yeah. All that conversion would happen ahead of time. Yeah. So there's no extra like artifacts or anything you see here. Okay. Let's just
[00:20:56]  move over dev tools a bit. So, okay. Yeah. I, I, I'm going to need to do something more interesting to actually see this. So I'm
[00:21:04] , I'm being told that I set the framework option to blank, which is about right. This is, this is the kind of expert work you're going to see
[00:21:17]  here with me working at this on the first go. So the question is, do I start over again? Or do I just look for the renderer? Let's,
[00:21:27]  let's, let's look at our docs and see what, what they do here. The only thing is I kind of want to, I kind of want the template
[00:21:34] . Cause I think that'll give me hints of where to get started from. So maybe, maybe, maybe I will start over again. Um, yeah, I think I
[00:21:42]  am going to start over again. Let's, let's see how much I can mess with my operating system. I'm just gonna delete everything. Good. And then I
[00:21:53] 'm going to see, make here. I mean, honestly, this is still better than what happened last week when I, uh, um, lost the screen for 10
[00:22:05]  minutes and because I was only streaming on my, uh, my laptop and I couldn't like see that I'd lost the screen. I just kept on going for 10 minutes
[00:22:14]  and people were like yelling in the chat that I, that they weren't seeing the screen, just seeing me. I had no clue. So improvement here. Okay.
[00:22:23]  Let's try this again. MPM init astro. Okay. Starter kit. So these are a toggle. Okay. I see. I just, I just highlighted
[00:22:38]  down to it and then clicked enter. I'm supposed to use a space bar to select it. See, it shows you how terrible I am with, with, uh,
[00:22:45]  uh, CLIs. Honestly, this, this is the biggest challenge I've been, I've been building a starter for, for solid. And, uh, I
[00:22:54] 'm, you know, like I'm not familiar with these. I've always. I've kind of built my own config and stuff myself. I've never used a
[00:23:10]  starter framework. Um, not since like way back in the day when we used to skeleton stuff out with like, oh God, I can't remember what it was. It
[00:23:19]  was like browser five, but it was like, I can't even remember what it's called. It was like 2012 time period. Okay. Let's try this again
[00:23:30] . Ah, it's a solid counter. Ooh. And it's JSX. Lovely. I've seen this before. This looks familiar. Okay. Let's, let
[00:23:41] 's, uh, let's, let's, uh, let's, let's, let's run this one now because now that there's a solid counter on it,
[00:23:47]  it is completely different. All right. All right. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. This, this, this is taking
[00:24:01]  me back. Yeah. Yeah. Yeah. Yeah. No, there, there isn't a whole age before the current age of things. Okay. And then we snuck
[00:24:09]  the solid counter on the bottom, which sweet renders and updates. So let's inspect that. Astro root. It looks almost like a web component. This is
[00:24:21]  interesting. I'm, I mean, I've, I've web components would be a great way to do this. If that's actually the case, you could also just
[00:24:28]  make an element like this and just do it for fun if you really wanted to, but yeah, beautiful. Okay. Yeah. Okay. We're going to have to play
[00:24:35]  with this more, but now at least kind of got a feel for what that looks like. And what else do we want to look at? Let's let's go
[00:24:46]  back now to our project because we've all kind of seen this before. Yeah. I mean, I love the counter, although to be fair, this is the manual counter
[00:24:59] . This isn't the one where we get to, you know, point it to how did Dan put in his article egg on the face for react to the, the
[00:25:06]  set interval example. Um, but, uh, you know, counters are everywhere. Counters are fun. I once went on a website where they actually had a counter on
[00:25:17]  their landing page and it wasn't done in the framework. And I was like, really confused. Cause I knew how the framework worked and I was like, this framework would
[00:25:24]  have to like render everything. And that this counter is not doing that. And then I realized that they just like vanilla J asked up the counter just to have the counter
[00:25:32]  there, even though like, yeah, it wasn't the framework doing it. Need the counter. Okay. So pages. Okay. So here we go. Tour.
[00:25:45]  Oh, is solid in the tour. Is that the trick? Where are we marked down? Okay. Cause I'm assuming our counter is called counter and we imported it somewhere
[00:25:58] . So this one doesn't import it. This one doesn't import it. What am I missing? There's definitely a counter on that page. Oh, do you
[00:26:16]  know what it is? It's cause I edited it out the, it's, it is on that page. It's cause I edited out the, uh, the white
[00:26:25]  space. Um, when I first got back into JavaScript after using.net for years back in like 2011, um, in that coffee script startup, I was talking about the
[00:26:38]  super zealous about white spaces and it like drove me nuts. I always have this trailing spaces plugin. So I moved it out and I didn't see the edit
[00:26:46]  perfect client visible. Right. Which I think is kind of like default thing. I'm gonna have to look at what these are exactly, but in terms of, they have
[00:26:55]  a bunch of directives on the component. What's really cool is you just import the component and bang, it's there. So I kind of, I think this is
[00:27:04]  good. And I think we should go and build something, you know, play around with this and see how this works. I mean, I know I'm interested.
[00:27:11]  Um, but I kind of want to know what's going on here first, right? Like one thing that I don't see here anywhere is solid's hydration script.
[00:27:27]  So I wonder what's going on. Let's, let's, let's, let's look at the renderer. I think it's in here. There's,
[00:27:33]  I know that there's a custom renderer thing. So if I search, I'm sure there's gonna be like a solid integration. As I said, I haven't
[00:27:43]  got a chance to look at this. I hope it wasn't too much work for the people doing it. Um, maybe, maybe it's under the astro names
[00:27:51] pace, right? And what do we got? Solid, solid, solid JS. This is a version of solid JS. Are we running today? 1.15, right
[00:27:57]  up to date. Okay. Beautiful. But let's try astro. Aha. Oh, interesting. I got the, I got the whole crew here. All right.
[00:28:08]  Okay. So here we go. Okay. So yeah. Babel preset. Okay. This is starting to look good. Solid JS node. And then index. What's
[00:28:18]  our index? Interesting. So this client server known endpoints. Okay. Okay. Oh, and then they're hot in the alias. Yeah. I was wondering solid
[00:28:31] 's server side rendering works off, um, what I call it, export conditions. If you guys are familiar with that. And that when you're in like a node environment
[00:28:40]  means it automatically aliases server versions and solid. We actually have a client and server version of most libraries. Cause I actually removed the reactive runtime and we compile differently,
[00:28:49]  do both things. Um, and what this lets us do is that's how solid gets such incredible suicide performance, right? If you don't switch out the runtime, I
[00:28:59]  believe it will still, it could still work. It depends. Um, but the reactivity, um, for the web, it wouldn't work. But for, if
[00:29:09]  you had the run, if you had the client runtime for just solid, it would still work, but you'd make all these reactive bindings and it'd be like
[00:29:16]  10 times slower. I mean, that's probably, you might not notice it, which is the tricky part because it would be about as fast as preact or react.
[00:29:24]  But, um, you know, obviously you want to be 10 times faster faster than that. So, um, let's, let's, let's see here.
[00:29:34]  Yeah. What are export conditions? Yeah. You guys might not take a moment to explain this for you who haven't seen it. Um, there's two, there's
[00:29:44]  two things here. If I go to node JS, I can, I'm just going to show it by going to GitHub and show you guys what I'm talking about.
[00:29:51]  Cause if you look up in the docs or node, it's here, but what I want to show you is if you go into package.json, preact
[00:29:57]  does this too. Uh, uh, not this one, the actual one, sorry, learn a repo. Let me make this a little larger so people can see what's
[00:30:06]  going on. If you go into solids package.json, um, you'll notice that there's this exports object, right? And while solid, um, has,
[00:30:15]  you know, main and module, you know, this is the common JS module and this is the JavaScript module and then some browser aliasing stuff here. This is another
[00:30:23]  way to support like chess to get the server versions and stuff. This is a beautiful thing. What you can do is for each module and actually we have sub modules here,
[00:30:33]  like store and like web, you can set these kinds of keywords and you can actually change what gets imported based on those keywords. And there's a default one at the bottom
[00:30:43]  here, which is just solid. But what's really cool is that, um, a lot of environments recognize browser and node, node itself. If you're actually running
[00:30:54]  on node, it will just apply that export condition. So it'll just go, Oh, here, here you go. And so when you import dot, which is solid
[00:31:03]  JS, just the plain package, it'll actually import server JS in the ES case and then require a CJS version of it. And this is true for everything like
[00:31:14]  web, we have a server version, same deal. And you don't have to do anything. Now, when you use roll up the bundle or ES build or whatever,
[00:31:22]  um, web pack, they actually have options where you can go export conditions. Um, I made a PR to snowpack to support this. I don't, I think
[00:31:30]  it got really complicated and while it got merged and then get through. So that's probably why there's that alias field that they have there. Um, but this
[00:31:37]  works in beat, um, which is what Astro is moving to. So I'm sure this will not be a problem in the future. Um, but generally this is
[00:31:46]  just a lovely way built right into the package.json of doing aliasing so that you as the end user always just import from solid JS or solid JS slash web
[00:31:55]  and we handle it and it lets me do really cool tricks. Um, right, exactly. Yeah. It lets me do really cool tricks because like we can export an is
[00:32:08]  server from the client or the server bundle and it can be true or false. We don't have to do any window type checking or all that. We literally know that
[00:32:17]  it's client or server. And what that does is it's a Boolean and it's like static. It can see that it never gets assigned. So tools like,
[00:32:25]  uh, roll up can just go, Oh, if something is behind this, you know, like it's, if is server and it knows that it's always false,
[00:32:32]  it will just eliminate that code from your bundle. Like you don't have to worry about getting server side stuff on the client. It will just disappear out of your bundle.
[00:32:41]  Um, when you have constants like that rollup is incredibly smart. I leveraged that all over the place. That's how I, uh, like if you don
[00:32:48] 't use transitions in solid or sorry, it's a little trickier than that. I recommend everyone puts transitions in their like libraries, like, like the router or like design
[00:32:59]  systems. But if you don't use suspense, even if there's a transition there, I'm able to code eliminate the whole thing out of the core. The reactive system
[00:33:08]  actually strips out like hundreds of lines of code for transitions and concurrent rendering right out of the core, because as long as you only write to it inside a tree shakin
[00:33:18] able import, it basically can see that it's impossible to ever be set anything but the initial value. And if that initial value is false, something like rollup can just
[00:33:26]  go, Nope, get rid of it. So yeah, incredibly powerful to use in combination like this. Um, so anyway, uh, yeah, there's the,
[00:33:36]  the deeper technical thing. I also use this for dev mode. See development. This is this, it's just, it's just useful for everything, right? If you
[00:33:44]  want to do minified builds or different things. Um, we also use this actually, um, for third party, um, libraries, there is a, we recommend
[00:33:53]  that you use a solid export and to export the GSX directly that way that, um, you can have two different exports. You have the main one, which is the
[00:34:01]  compile for the client. So everyone can use it because solid works without a compiler. You can do a purely runtime with, you know, hyperscript or tag template liter
[00:34:09] als, similar to lit HTML. It's actually the most prof no second, most performant tag time for literal approach. It's, um, but more, it's
[00:34:18]  definitely an approach much more performant than, uh, the, like the standard popular ones. And, um, you can use that. And as long as someone comp
[00:34:25] iles your stuff, pre-client, you can just use solid there. But if you also use the solid export and send out the JSX this way, um,
[00:34:36]  we'll know, and I build it into our library packages and maybe something I can consider here, um, once they support export maps, we'll be able to compile the
[00:34:43]  JSX, um, for, for you automatically. And what's great about this is it's much better than using stuff like process.m or whatever, because,
[00:34:51]  um, it just, it's like a universal mode switch. People don't have to like worry about, uh, other weird hacks and patches. And, um, yeah
[00:35:02] , honestly, export maps or, or it's not export maps. Like these is called conditional exports, um, are amazing. Anyway, sorry, little ramble side note
[00:35:11] , always a teaching opportunity here. Right. Okay. So let's continue. Um, so yeah, where was I? I was talking about export maps. So we
[00:35:25]  don't have that, but that's fine. So we alias and then babel preset solid. If it's, if it's SSR, do SSRs
[00:35:32]  or DOM. And okay. Hydratable isn't here. Okay. Let's, let's, let's see what this looks like. Okay. Server side,
[00:35:45]  rendered string async. Okay. That's an interesting choice. I guess. Huh? There's a little limitation of solid today that, um, I don't think we
[00:35:55]  could really support fully suspense, multiple suspense rendered, like auto serialization end points in a Astro app. Astro has islands, like multiple entry points. And I think
[00:36:09]  I've only set it up so that you can do full suspense, um, and, and data in a single island, but you know, maybe we'll test that
[00:36:18]  if we get a chance, but that's cool. Then you create the component and then this is how they inject the children. Okay. This is actually clever. They're
[00:36:25]  using solids, internal SSR string to kind of stringify the children that come in and then works. Okay. Yeah. So this, this looks pretty straightforward. You just
[00:36:33]  get the HTML and return it. Yeah. That's dirt symbol. I don't feel as guilty now about not helping people with this. Um, I know a lot
[00:36:40]  of work went into this and, um, Nate had said that they had to completely change their JSX solution to support, uh, solid here because JSX is kind of
[00:36:49]  ambiguous in terms of what libraries do with it. Um, to be fair at all, uh, obviously made preact and react better in the process, but really cool that
[00:36:59]  they, they took the time to, to come up with a solution that works with solid. As I said, between fine grain reactivity and like special handling of JSX
[00:37:07] , there's always like tools that are like we're framework agnostic and like my, my, my luck with those is pretty low. Astro might be actually
[00:37:16]  the first one that I've come across. That's actually worse. Apparently I hear with framework agnostic for solid out of the box. It's usually like there's
[00:37:25]  always issues. Um, so I'm, I'm pretty stoked about this. I mean, okay. So where do I go? Uh, next. Okay. St
[00:37:34] atic HTML. Okay. Yeah. I don't know what this is, but actually one thing I just noticed here, solid JS, solid JS web. This one's not
[00:37:45] , not using the server alias. I wonder, it's probably pulling it in from the client. You know what though? We export create component here. So maybe this
[00:37:54]  might just be better. So now we're not doing anything weird. But I don't know what static HTML is. I'm gathering this is server rendered still. So
[00:38:02]  I'm kind of tempted. I don't know for sure though. I'll leave this for now. Maybe it's not a big deal. Let's continue on.
[00:38:11]  Let's look at client. Oh, okay. Uh, okay. This makes more sense. Well, I'm glad I took a look today. What we have here
[00:38:38]  is it looks like our base plugin here is actually rendering, um, it's rendering and re-rendering the client. So basically you render on the server and then it
[00:38:49]  wipes all the elements and then it re-renders in the client afterwards. So it does a server render and then it re-renders. So you get that like
[00:38:57]  flicker effect. It's not actually doing hydration here. I wonder if there's a snag to hit. I might want to look at that. That might be something
[00:39:04]  fun. I don't know if anyone on the stream would be interested in seeing if we can actually get this hydrating or if that's like too technical of a task
[00:39:10] . But I said, I'm pretty open to do whatever anyone here feels like doing because I have no script. I, I'm, I'm really kind of getting into
[00:39:17]  this for the first time. So I, I think we could do it. This, this looks like it's really easy to use. I think they've done a really
[00:39:26]  good job here in terms of interface. So I don't know. Any opinions? Anyone on the stream? I'm gonna take take my sip from my drink here.
[00:39:40]  Hmm. Okay. Sure. I'll, I'll, I'll take this as okay. Yeah. Let's see what we can do here. Let's, let
[00:39:57] 's, let's, let's, let's look. Cause this, this looks straightforward enough that. Yeah. The cool thing about hydration is. It's not quite
[00:40:13]  that simple. See, I noticed something earlier and I, I was kind of wondering about it. I didn't say anything. And that, what that, what I
[00:40:22]  noticed earlier was that this never, you have an option here that's called, what is it, hydratable, true, I think. You know what, let's
[00:40:36]  just double check. Dumb expressions. Let's see here. What was it. Best way to the best documentation for any, well, set up project is in,
[00:40:56]  in its tests, right? Let's see here. Hydratable, true. Okay. My memory is not useless. Okay. Let's let's, let's
[00:41:09]  go back across to our, to our, to our app here. Okay. So hydratable, true. Okay. So that's only part of the problem or part
[00:41:18] , part of the situation though, because I'm pretty sure let's just run this ice. I wouldn't be surprised. Actually, there's another thing we do. We
[00:41:25]  don't need to replace the children. I imagine I'm, I'm, I'm gonna, I'm gonna, I'm gonna take a guess here, but I'm
[00:41:32]  gonna imagine this is gonna complain about some missing script, but let's, let's see if, let's see what we got. We got here. Let's,
[00:41:38]  let's run this again. I wasn't, I'm getting started. All right. See, as I said, um, okay. Okay. No, that can't
[00:41:54]  be, it can't be that easy, right? Uh, I mean, it's working still. I bet you there's something cached. We can, we
[00:42:05]  can confirm this actually though, pretty easily. Um, I wonder if it auto minifies in dev mode. Um, let's, let's look at what we have in
[00:42:15]  our dev tools here. Visible client assets, note pack, package solid. Okay. So here's the library. Let's get it again. Okay. And then
[00:42:28]  components solid counter. All right. So what do I see? This now is hydratable output. I can tell. Um, What else is interesting here. Um
[00:42:49] , so we, we are getting the hydratable input, but that would still work on a client render. I I'm curious, honestly, like we're not
[00:43:06]  clearing it. So let's, let's just run to this point and see what's going on. J query. Why the browser is the worst. Probably have like
[00:43:28]  some plugin that's doing stupid stuff here. Okay. Let's try refreshing this one more time. Astro components, tour Astro. The funniest thing is okay.
[00:43:44]  Right. Visible. See the hydration works. It, it wasn't visible. Cause I closed the window and pushed the scroll position. Honestly, that's, that's
[00:43:53]  a, that's a hot feature. Um, uh, we, we don't even have that in market. We've talked about it, um, as like something we
[00:44:00]  could address after we, uh, perfect the art of removing JavaScript, but, um, that is really cool. Okay. So I want to go up the call stack
[00:44:09]  because I want to see, I want to see. Okay. Right. Share config is an empty object, so it just doesn't hydrate, but okay. Let's
[00:44:25] , let's go all the way back up to our, our render call. Okay. So here's, here, here's my problem here. I changed the code
[00:44:41] , but we're still calling render and that's why this still works. Okay. Yeah. I knew, I knew, I knew it shouldn't still work. So something
[00:44:50] 's cached. So let's see, we have something called cache and it's a snowpack. So let's just delete the cache. This should error, right?
[00:44:59]  That's, that's my, that's my guess. So let's, let's, let's try this again. Yeah. Yeah. Yeah. It only actually
[00:45:11]  hydrates when it comes into view, but that, that is like so awesome. Right. Okay. So now let's see if I broke this thing. Um,
[00:45:20]  let's, let's, let's look at this. Let's see if I broke this thing. There we go. Now it's a broken. Yes. It's
[00:45:30]  broken. Okay. Yeah. Okay. Perfect. Okay. That's, that's where we should be. It should be broken. Okay. So let's fix it.
[00:45:39]  Um, as I said, I don't know if this is thrilling content for, for all of you, but this is, this is what I do. I mean
[00:45:48] , you could get the welcome to Astro thing anywhere. This is, this is where you can get a chance to see me either make a fool of myself or actually make
[00:45:58]  something that I can make a PR for later. So let's, let's, let's see what we got here. Okay. So my guess is all we need
[00:46:07]  to do is generate our hydration script. And if we generate hydration script, which is, and then we attach it to this HTML, then we should be fine. And I
[00:46:19]  think, I mean, I'm let's, let's just do this like silly way. Let's, let's, let's just straight up do it now. H
[00:46:27] edge guess is I'm going to have to clear the cache again. So let's just do that just in case. And then let's NPM start. And if
[00:46:37]  this works, then we might have just fixed it. Okay. Life couldn't be that easy, could it? All right. So it is in view. It did scroll
[00:46:55] . Oh, wait, it hadn't hydrated yet. Did I mess it up because of the way. Oh, did you guys see that? Did you guys see that
[00:47:04] ? Did you see how it jumped to seven when it hydrated? I just want to do that again. Yeah. Do you want to see that again? Let's do
[00:47:25]  that again. I don't get to test this stuff very often. But the problem is, because this page is already scrolled, Astro didn't realize it is in
[00:47:35]  view. So I guess I've learned something. But how did it jump? How did it jump to seven? Or 15? Because I went crazy on it. It
[00:47:44] 's because Solid has an event replay progressive hydration built in. So I'm pretty sure this is Solid doing it. Like I have built this. I don't know if Ast
[00:47:55] ro has built this as well and something happened. But if you interact with something, we actually gather the events and based on how the components flow and when it hydrates
[00:48:03] , we replay them. So if you start interacting with the page before it hydrates, you basically it plays them. Yeah. I haven't seen it so pronounced because I
[00:48:17]  haven't had a way of deferring hydration like this. But yeah. Right. Hey, I think of stuff like this. And no, actually, I didn't
[00:48:26]  come up with this. Reacted a demo like two years ago. And I was like, how hard could this be to implement? So I did. And that's what
[00:48:34]  the hydration script, that's one of the many cool things that hydration script does. Solid's hydration is actually kind of crazy between the auto serialization and this stuff and the
[00:48:45]  suspense on both sides and all this stuff. Unfortunately, with the static render, we're not going to be able to take the full advantage of it. but the core
[00:48:52]  mechanisms that we have are really quite cool. So I'm not sure what you mean by that. LE5. I'm not familiar with the acronym. But if we want
[00:49:15]  to, if you look here, do you want me to show you what I can show you what this happens? Yeah, I guess so. The funny this. Oh
[00:49:32] , it's playing to me like I'm five. Yeah. Yeah. Okay. Yeah. Yeah. Sorry. I just want to respond to this. Maybe. Honestly,
[00:49:40]  I've been trying to do this for ages, because what you guys are like, I kind of really hated react when it came out. I was just like, I
[00:49:48]  love knockout go away. So, you know, every time I saw something they did right from like 2013, I was just like, okay, how can I do this
[00:49:59]  a different way? And so like, basically, I've been building a counter, like a reactive version of react, like, since, yeah, like, since before
[00:50:08]  I even started on solid, it's just been more my thinking is so I mean, like, okay, sure. So let's, let's, let's look at
[00:50:15]  this. This is something this is an unexpected surprise. And obviously, this shouldn't really happen here, because I kind of fooled Astro a little bit. But see
[00:50:24]  this run hydration events. Let's, let's, let's, let's, let's, let's look at this, right? Okay, so what happens with solid
[00:50:39]  here is I'm hoping I can get into it. See, the maybe actually easiest way, I'm glad I have DOM expressions open, right? I, I,
[00:50:47]  I, let me see. Do I have DOM expressions open? Did I lose my? Oh, I see. It's because it's so weird. I can't see
[00:50:55]  my toolbar, but in the stream, I can. I have a monitor attached here. And it's like changed what my main desktop was, which is unusual. Let's
[00:51:03]  open DOM expressions again. So I actually have the code written in an unminified form here in DOM expressions and under assets in case I ever like go, oh,
[00:51:14]  I need to edit this script again. So let's, let's, let's look at this for a second. Okay. Solid that generate hydration script is actually when it
[00:51:26] 's all like minified and stuff, it's only like 200 bytes we load on the page, but it, it bootstraps a whole bunch of stuff, right?
[00:51:34]  And this is like, one of the thing here is this little, this thing zoom, this thing is super small, but basically by default, we, we, we
[00:51:41]  grab click and input and if you, but you can actually configure solid to grab what other events you want. Um, and essentially all we do is we, we basically register
[00:51:56]  it by template, all solid templates have this data HK thing. And essentially we, we make event handlers for these events at the, on the, on the top
[00:52:05]  of the screen, see document, add event handler. And so, so let's say it's click input and some other, uh, I can't remember what the other
[00:52:14]  event is, but essentially we register them globally when the document loads. And then when it, and yeah, I've got some shadow DOM handling stuff here. Cause I've
[00:52:26]  always been a big proponent of web components. So all, all our event handling and cross, like we basically have a semi synthetic event system in solid, but it
[00:52:35]  works across the shadow DOM by default just because I mean, added a bit of code, but honestly, I always thought web components were where I was going. It's so
[00:52:42]  funny because I'm like now almost completely opposite of that. But, um, essentially what it does is it, when an event fires, it goes up to the nearest
[00:52:53]  template element, uh, that has the hydration key on it. Um, that's what this lookup is. And then it just essentially grabs that element and pushes it on
[00:53:03]  to the hydration context, which you've seen that we use anyways. And basically it creates a list of events that are tied specifically to that hydration context. So like if someone
[00:53:15]  clicks a button, um, to get this exact thing to see what I'm explain what I'm talking about, see this data HK, this is the root of our
[00:53:24]  template. It walked up to this data HK and goes, this is the element. This is the template when it clones. This is what we care about. Right. So
[00:53:34] , um, it stores essentially that this button, like it doesn't, it doesn't, it just puts the event. It just grabs the end. It goes,
[00:53:44]  this event was fired, um, for, um, this template. Um, and yeah, we're okay. So, so yeah, walks up, finds the template.
[00:53:55]  And then what ends up happening is because we have the event, we have the target, we have all the information we need about it. And then what ends up happening is
[00:54:03]  in solid, um, I showed you that run hydration event thing. Just a second. Where was it? Was it in the source here? See this run hydration events
[00:54:14] ? Well, what ends up happening is, and this is in server. No, it's client. So let me run hydration event. I'm sorry. This is,
[00:54:25]  I don't know how five-year-old I'm doing here, but essentially it looks, it loads this thing off the window global object, the events, and
[00:54:33]  it choose a micro task. Um, it needs to do this. So don't worry about that too much, but essentially it walks every time you call this, um,
[00:54:45]  essentially it, it walks down and sees if this template's been hydrated. Like it starts in the top of the queue and runs through the top of the queue, what
[00:54:58] 's left in the queue until it hits something that hasn't hydrated yet. And then it continues. And the reason for this is if some, if you click in a number
[00:55:06]  of different places in, in like an out of order way, you don't, we have to preserve the orders of the events firing. So even if you you're,
[00:55:14]  you've hydrated, if someone clicks something further down that hasn't hydrated before they click you that's hydrated, we actually have to wait till that something further down hydrates
[00:55:24]  just in case that it interacts with each other. So it's a, it's a little bit complicated, but essentially we just check the progress of hydration every time a template
[00:55:33]  hydrates. And this is part of the compiled output of solid. And then it basically, when it gets to the point where it's like, okay, we're good
[00:55:40] . It runs the event handler and this event handler, like what's this event handler? Well, it's the same event handler we use to delegate events in solid anyways
[00:55:50] . So essentially what, what ends up happening here is this only works for the delegatable events, like the, all the mouse events that click and blur and that, but
[00:56:01]  essentially what ends up happening is we just replay the event at that point, the same way we replay events through event delegation built into solid. I didn't have to do
[00:56:13]  anything special here because we already have the ability to take an event that is bubbled up to the document and, and basically trigger it. So let's see here.
[00:56:25]  Yeah. Yeah. Yes. Uh, this is Dan, this isn't, that's not bad. There's some complexity, more complexity there in terms of like, we
[00:56:46]  care about the order things, temp, uh, templates hydrate. Yeah. Yeah, yeah, exactly. Because we have the target and because the way event delegation works
[00:56:58] , we actually, the compiler, I mean, you can, uh, let me see if I can show you here, but, um, the compiler that there's
[00:57:06]  a click handler, see this dollar sign, click our dollar sign, our click handlers for delegation are actually assigned to the, the elements. So we know we have the
[00:57:17]  target. So when we rerun the event, we'll be able to like, go, Oh, what's the target? Does it have a dollar sign dollar sign click
[00:57:24]  on it? And then just basically just go, Oh, what is that? Okay. That's subtract. And then just run subtract. So yeah, this is,
[00:57:34]  this is a bonus. This is, I mean, as I said, I don't think exactly that clickable, but this is one of those cool features that I don
[00:57:42] 't get the showcase off. Solid has a lot of that, you know, my docs are a little loose on the SSR because I mean, I'm a bit of
[00:57:48]  a perfectionist. When I release something, I want to be like, like it is good, you know, and I don't, I don't consider solid SSR
[00:57:56]  solution completely complete yet. But, you know, I got to thank Astro here for coming up with the perfect place for me to showcase what I call, this is
[00:58:09] , this is one of those progressive hydration techniques. I know complicated, confusing topic. What's lazy, what's progressive, what's resumable hydration. But this is
[00:58:18] , this is one of those progressive hydration techniques so that you can comfortably lazy load stuff. Yeah, yeah, thank you. Yeah, exactly. I wasn't 100%
[00:58:34]  sure at first because you have no avatar, but I'm pretty sure this is Dan who's on the solid core team who's in charge of the documentation. So that
[00:58:44]  makes a lot of sense. Hopefully I haven't gone on a crazy tangent too much for, for, for, for you all. But, you know, this is the
[00:58:50]  cool stuff you come across when you're kind of playing with this stuff. So let's, let's continue on unless there's any more questions about this. But it looks
[00:58:59]  like we did fix the, the, the, the, the, sorry, the, the Astro, um, hydration and renderer here. So, well,
[00:59:14]  let's not count our chickens too fast. No, why? Because we need to, um, we need to make sure this actually works. And more than just, we
[00:59:23] 're, we're writing a counter to the page. I mean, how, how hard can that be? Let's, let's, let's see if we can put
[00:59:28]  multiple Astro components on the page, right? Let's, let's, let's, let's, let's run this through its paces a little bit.
[00:59:34]  Sorry, solid components on the page. Um, yeah, no, honestly, so far, you know, Astro has been super intuitive. The fact that I could just
[00:59:44]  go in and fix this completely blind is, is pretty off for pretty awesome. You know, like, a lot of thought has gone into that. I love when tools have
[00:59:53]  gone through and put that kind of thought in. I felt kind of like this would beat actually. And I first thought I was like, I'd been working on solid
[00:59:59]  start and essentially like, I, I, I, I, I'm not gonna lie. I hate doing the config stuff. You know, like I don't mind doing
[01:00:11]  config. I can set up a web pack for myself, but like the general solutions that like make things configurable. I hate giving people options. I know that sounds terrible
[01:00:18] , but I, I like, I very much dislike, you know, flexible APIs, lots of options and stuff. I'd rather like make really good building blocks and
[01:00:28]  kind of like, you know, pieces and kind of put them together like Lego. I don't, I don't like configuration. And unfortunately when you're building like a
[01:00:35]  meta framework, you kind of, there's no way you can get around that. And I was like, I was like, okay, well, I'll just build all
[01:00:42]  the pieces first and then hope that maybe someone will put them together for me. And, um, um, I was, I was like, you know, I,
[01:00:49]  I, I'd been working on the router, the nested router, which lets you, you know, know about which data is tied to the routes. If you've
[01:00:57]  ever seen a remix demo, I, we were really on the same kind of mindset and, um, and essentially like, uh, I was kind of, how should
[01:01:14]  I put it? Like I was really torn because I knew that eventually I'd have to go do this, but I want to keep on working on cool stuff. Like what
[01:01:22]  I've been showing you guys. And essentially then I saw Snowpack first and, and I was like, okay, this is, this is cool. I now have
[01:01:34]  the tool that I can use to finally do this. And, and, and, and I was like, well, I guess I will, uh, you know, uh
[01:01:47] , you know, get around to building some point, you know, and, and I, I put a PR to Snowpack kind of, I was being patient.
[01:01:53]  I didn't really care when it came through, you know, just to make sure I could get solid built. And then I came across the VEAT and there were
[01:02:00]  so many features and I was just like, he just built all the missing pieces, like glob imports and the stuff I need for file-based routing. And I was just
[01:02:08]  like, Evan read my mind. Like this is, I was building everything else, hoping someone else would build these pieces and there it is. So I, I definitely
[01:02:18] , you know, appreciate, um, you know, tools that can have that kind of easiness. And I think that, I think they're doing a great job here
[01:02:29]  with Astro. You can already tell this let's, let's just keep on going. A couple more questions. What's the use case for clients that aren't
[01:02:34]  interact on the client? I mean, here's the, here's the thing, like you could just use Astro to template it, but maybe you're, you're
[01:02:43]  just, you know, you, you, you already have the stuff written in that. Like there's plenty of sites that are mostly static. You can build your blog site
[01:02:49]  and react and then just send us the static stuff. Actually, you know, I got a cool thing to show you guys for this. I mean, it's,
[01:02:56]  it's minor and it's not gonna make it as big of an impression, but let me show you something relating to this question. Cause here, here's something else I
[01:03:03] 've been playing with, right? See, you know, before we even go here, let's, let's give this two seconds. I just occurred to me, so
[01:03:11]  we, we, we've got this right. And if you looked at the component that I was looking at here, where is it? The, all right. Got
[01:03:21]  to load it by the way, Brendan. Yes. I think maybe this is in the common case. Um, but visible must be based on an intersection observer. And it
[01:03:35] 's like not realizing that it's already visible because the page is already scrolled. I think this is, I know, I keep on hitting it over and over and over
[01:03:42]  again. I think there's something you have to think about and kind of figure out how to best handle this. I understand why it happens, but, um, yeah
[01:03:50] , this isn't for the best, but back to the question. Right. So, yeah, so this, this here is a component and this is a freaking simple component
[01:04:04] , right? Um, because it, it, there's not much to it. If you've ever seen solid compiled output, you'll, you'll, you'll notice
[01:04:10]  what's going on here. There's a bit extra here because of hydration, but essentially there's no crate calls. We, this get next element is either going to
[01:04:18]  clone the template, which is up here somewhere, which is this, like just a button. It's like, you know, just a string here, or it's going
[01:04:27]  to, or it's essentially going to, um, just get it because it's already been rendered. So if you see the way solid naturally compiles, we're
[01:04:36]  already set up for hydration because we just create all the nodes up front or they already exist. And then we just walk to whatever nodes we need to add interactivity to.
[01:04:44]  So what's kind of cool about an example like this is this counter is never getting re-rendered again, and we know it's never going to get re-rend
[01:04:51] ered again. So why even include it? So checks up. Dollar sign, server only. Bang. Now, yeah, good. Let's hope this. I know
[01:05:04]  I'm going to debug breakpoint, but let's, let's hope that when I refresh the page, this does what I want it to do. All right. Sorry
[01:05:12] , I gotta stop doing that. What happened to the template? The template is gone. And we didn't send that whole string of HTML. Um, so what if
[01:05:24] , if this was a large component with lots of stuff, or if it was a truly static component written in solid, what's really kind of cool, um, the way
[01:05:34]  we do stuff here is right now, this is annotated, not automated in any way, but essentially we only ship the code we need to hydrate. Like we can
[01:05:42]  just remove the creation code completely. I, some people, um, call this partial hydration because it's kind of like what Astro does. Um, but I,
[01:05:52]  I usually don't consider this a partial hydration unless like it's done better, but essentially we have the ability, like if you just build a giant HTML page in solid and
[01:06:01]  then with a couple of components in it, and then just went server only on that. And in fact, we automatically apply that optimizations when you start, um, hyd
[01:06:11] rating from the document, um, we, we can just not ship the template with solid. So, um, you, you know, it's not basically only have
[01:06:20]  to ship the code that, that is actually interactive. So we already have sort of a means to, to, to doing semi, um, partial hydration, right? I
[01:06:29] 've seen an example like this. This isn't too interesting. Like, like, look, this counter still works. Yeah. But, and, you know, but
[01:06:37]  you have to figure, and this code that gets brought in is like its own bundle so that you, you have all these imports you have to worry about. But like,
[01:06:46]  if you were dealing in one large bundle, let's say, and not having these lazy loaded pieces, you, you, you wouldn't have these imports and you, if
[01:06:54]  your page is mostly static, we can basically like strip the majority of the HTML out of the page. So all you're dealing with is like some, a very basic walk
[01:07:01]  to hydrate the stuff. I hope that makes sense. Like essentially we have the ability to just not ship the HTML template, and this is going to be the secret
[01:07:15]  to how we do partial hydration and solid in the future, I imagine where we can actually just not send the HTML part. It's not very obvious here, but when you
[01:07:23]  like terser this and you have relatively static content, the, the, the string template for the HTML actually makes up like 60, 70% of the code.
[01:07:34]  So you actually can get like at least a 50% code reduction simply by not shipping the templates that don't need to be on the server. And this is something we haven
[01:07:42] 't solved today. I just, again, don't advertise it because I don't feel it's good enough, but you can kind of see where that's going.
[01:07:48]  So this little tangent, but I just wanted to kind of show you guys that or, um, I like the component model for breaking in views page one page. Exactly.
[01:07:58]  That's the thing. When we're bringing the client experience to the server, this is one of the benefits. Like, I mean, you can just consider partial templates and
[01:08:04]  stuff, but you just get to reuse the components, right? Um, hopefully Dan, that answers my question. Um, or sorry, answers the question. So that
[01:08:19]  that's kind of like the basic, I did go on a crazy tangent to trying to show you how we can actually further save code. So like inside your island, solid
[01:08:26]  can ship even less code if you want. Um, I mean, obviously I'm minified and stuff. It's not gonna make a big deal. And because we have
[01:08:33]  all these like import statements being a separate bundle, this is only going to probably make difference when your islands are sizable. but you know, it's always cool to have
[01:08:41]  tools on your disposal. So back to where we're going, we were going, I'm going to keep the server only here because who cares, right? We never need
[01:08:48]  to send that template to the client. Um, let's add another solid counter. And before I get going, I guess, I guess the questions are answered here. Um
[01:09:00] , let's, let's see here. Okay. So, all right, let's, let's, let's just see that if we can actually hydrate two
[01:09:09]  components side by side, because I, now that I'm seeing the laziness here, I, I, I do have semi concern that my hydration mechanism won't work.
[01:09:18]  Might be cereal though. So let's see. Oh, okay. It does work. Okay. So sweet. Multiple hydrated components. And if I refresh it, click
[01:09:34]  this one plus a bunch and this one minus a bunch and then scroll the page. Ta-da. Okay. So we should, we should, is there, is there
[01:09:54] , uh, is it, I'm going to get help from the audience here. Is there, is there one that just like loads it immediately? This is, this
[01:10:03]  is something that I'm, uh, I'm kind of more used to the funny thing. As I said, I think this kind of lazy hydration has a lot of value
[01:10:09] . I think it's overplayed right now. Um, honestly, I think it's really cool. And Astro is kind of pushing this forward, but this is
[01:10:15]  the way people cheat benchmarks. And then they've, if done awkwardly, sometimes you end up pushing the cost onto your users. Um, and I, I mean
[01:10:24] , obviously the, like a simple thing at Astro and you got a couple islands, like maybe seven or eight islands. It's not like, this is fine, but
[01:10:31]  I honestly feel that most of the island should load offhand anyways. Like, um, it's not really worth deferring it. Perfect. Yeah. Let's, let
[01:10:41] 's just, let's just do this. Right. Visible is the cool trick. Let me show off how awesome this is. But realistically, when you got a
[01:10:50]  little bit of code on your page, it's not worth the lazy loading. Seriously. It just, it's, it's not. Yeah. See, look, now
[01:11:00]  my site is nice and interactive right off the bat. And that's beautiful. You know what? I'm, I'm not sending very much JavaScript. Am I? I
[01:11:06]  mean, I'm in dev mode. Should we shoot? Uh, I mean, this is probably terrible. I got to get rid of my break points when dev mode
[01:11:16] . So this doesn't tell me anything, you know, let's, let's, let's, let's just, let's just try. What is it? MP
[01:11:22] M run build and let's, uh, what MPM run preview. Show me what I'm going to end up in the end. Okay. So ignore this hook thing
[01:11:35] . Yeah. Like, okay. Beautiful. So, yeah, this is my Grammarly. Tell it to be quiet. Solid counter is 658 bytes. And
[01:11:48]  then we had an eight kilobyte bundle here to have all the, all the solid stuff that we need. So, um, yeah, I mean, yeah,
[01:12:01]  solid counter is 658 bytes. That's my, yeah, see, it's all those import statements. Let's see what we're dealing with here. Yeah. That
[01:12:13]  and yeah. Yeah. It's interesting. That's one downside of cutting the slices too small, but anyways, it all works. Yeah. An example like this,
[01:12:27]  you're not gonna see in the savings I was talking about. Okay. So now we have hydrating and we have multiple, um, we, we, we tried multiple
[01:12:38]  components. Maybe we should do something more interesting, shouldn't we? What else can we do here with this? Um, let's, let's see here. Maybe
[01:12:48]  it'd be fun to try something a little bit more ambitious. Cause I, yeah, let's look, I got, I got a couple ideas here. Cause obviously I
[01:13:02]  can play with the different load modes. Uh, yeah, that's a great question. No, solid scaling for components is way better than Svelte's. Um
[01:13:14] , just to give you an idea, um, Svelte's compiled output is, is much larger. Um, mostly that, uh, if you've, if you
[01:13:24] 've ever seen the compiled output of solid, it looks almost it's, it's more than hyperscript. So like, um, but it looks more like,
[01:13:34]  uh, um, it is closer to that than it's Svelte. If you, if you've ever seen like Evan's comparison or the React comparison, basically,
[01:13:46]  uh, like here's an example, we were actually testing component sizes and like a component in React, a small component might be like 180, um, might be,
[01:13:57]  sorry. Yeah. It might be like 180 bytes, g-zipped, minified, um, 220 in solid. And then about 350 in Svelte. That
[01:14:08] 's, that's kind of like the, that's kind of where it sits in terms of a range. So Svelte starts smaller than solid. Solid, um,
[01:14:16]  generally starts, uh, I mean, R2DMBC is six kilobytes. Svelte's is four kilobytes. But like, if you
[01:14:26]  look at something like, uh, Hacker News, uh, a new page in solid is about 1.6 kilobytes to Svelte's three kilob
[01:14:34] ytes. So, um, yeah, essentially I, I, I did the, I did the similar math to what Evan did. And I found that, um, with
[01:14:47]  React, it takes 30 to do MVCs before Svelte and React kind of intersect. It takes 19, um, it takes 19 view, like to do MV
[01:14:59] Cs for view and Svelte to, um, interact, like to cross to the same side. And with solid, it's 2.5. So once your site
[01:15:09]  is bigger than Hacker News solid, it will be smaller than Svelte. And the intersection point with React or view is, I haven't calculated that, but
[01:15:20]  it's, it's, it's quite far out. Um, I think view is, is, um, it almost, it basically almost, it never, it almost
[01:15:29]  never, it, you know, it, it, it's like React was something stupid. I did the math one time and it was like, it was, it was
[01:15:36]  something like 140 to do MVCs or something. Like it was, it was just, it was stupid, but, um, in any case I'm, I'm kind
[01:15:44]  of going off. So what is it? Share state between two components? I actually don't know how that works. That'd be interesting. Um, we had an
[01:15:57]  idea. I, one thing I was thinking of, I guess that is really the next question, isn't it? How do you do that? Because one thing I was
[01:16:05]  thinking I could do is I could, yeah, how would I do that? I was thinking of a non-share state example, something like, like Hacker
[01:16:17]  News, because, but, yeah, that's interesting. But I, I'm still thinking to single page app, like, I'm thinking, well, like, why
[01:16:28] , why you could, you could make the header in Astro and then, like, make the rendered page data in solid. And that would, but I mean,
[01:16:39]  that example is kind of interesting because it all gets server rendered. And then if you, you, you just wouldn't, you just make a static site out of it.
[01:16:47]  Right? So yeah. How would we share state? That's it. Let's, let's think about that. How would we do that? Because can we in
[01:16:58]  Astro import a signal? Yeah. Let's, let's, let's do this. I, I, I love this question. Let's, let's do this
[01:17:08] . Okay. All right. That is very true, isn't it? Huh. Does anyone actually know? Honestly, that, that, that, that is a good
[01:17:45]  point. See, we, we, we actually have this similar consideration with Marco and we actually had to invent like a, because the problem is Marco automatically does the hydration
[01:17:57]  points. But, and if you have a bunch of islands, it's really easy. Cause you just go not stateful, not stateful, not stateful, you
[01:18:03]  know, and just peel away all the garbage. And then you're just to have what's stateful left and Presto. But the problem is if you have shared state
[01:18:10] , you have to hoist it up. So we actually had to use like a pub sub solution where the components can talk to each other through this kind of global registered
[01:18:18]  thing, but it's not considered part of the component tree. So that way we wouldn't have to hoist this data. Basically it's like decentralized. They can all
[01:18:25]  can just kind of communicate through this channel, but without pulling in the whole app. I don't have a solution for that offhand, right? Yeah. I mean
[01:18:40] , let's, let's, let's, let's, let's, let's, let's do it. All right. I suspect though, that is right.
[01:18:46]  Let's, let's, let's do it. Let's just, okay. Import, um, create signal. Yeah. I mean, I'm almost a hundred percent
[01:18:56]  positive. This won't work. Cause we'll have the static version of it on the server. Right. And then. Yeah. Like we, we, we'd
[01:19:09]  have to make something. Okay. And then like, let's just, you know, for fun, const, uh, S set equals create signal. I bet you
[01:19:22]  if I said it as two and then kind of set this as the count here. Funny thing is this is not using solids JSX here. So like, I'm pretty
[01:19:35]  sure. I haven't even looked at their syntax. Do I get the, do I get to use JSX like syntax? Let's see. Oh, okay. Okay
[01:19:46] . That's promising. Yeah. Yeah. Okay. Right. And then we change our component to be initial count. Right. So we can have props and okay.
[01:20:06]  Yeah. I mean, I can just set it once, but let's, let's do this in a way that it would update. So let's create computed, create
[01:20:15]  computed. So it synchronizes. I mean, it's just run first time. And I'm like probably in break point mode. Okay. So what happened?
[01:20:44]  Yeah. Yeah. This is, well, do we get to see this? This is the solution to everything, right? Let's see if, let's see if we
[01:20:58]  can, if we can see this. Well, I'm in preview mode. I'm not in dev mode anymore. Right. I bet you that's my problem.
[01:21:12]  Right. Yeah. I mean, initializes it too, but the, the, this is like, I have no trigger I'd have to. Yeah. I s I
[01:21:32]  suspect. Okay. Yeah. So we, we, well, I think we know the solution. Should we make the solution? Um, the solution is probably going to
[01:21:42]  be like, we're just going to make like, uh, I wonder, I guess I, I will call it DSX. Cause we can, but the solution is
[01:21:54]  going to be like, this is my guess. We're going to, we're going to make the question. We're going to have to wire it off the window
[01:22:02]  or something, which is fine. We're just going to, we're going to do this. I'm, I don't know if stuff's going to break terribly with
[01:22:14]  this, but I suspect that we can very easily use reactivity as a means to do what we want to do. Right. We'll make a store and, um,
[01:22:25]  we'll make it a component so that Astro knows what to do with it and take this message down. Sorry. As much as we like knowing that Theo has no
[01:22:43]  idea. Uh, okay. Let's do this. Sorry. Uh, getting a kid. Uh, and then obviously we can just return whatever string. Probably it's
[01:23:01]  pretty safe. I don't know how Astro handles that, but we're just going to, how are we going to do this? Oh, of course. I
[01:23:10]  don't know. We actually don't need to do that. We're, we're using modern browsers. We just global this, global this, global this. Um
[01:23:40] , um, um, I'm just gonna, I'm just gonna put the signal on it. It's kind of cheese balls felt store style feel where it's like pretty
[01:23:59]  nothing. But if if I do this and ice and I stick it above what we're gonna try and do, which I think might be fun. I mean, this
[01:24:15]  is sort of silly a little bit. I'm just gonna tie it all to the same thing. Like we're just gonna make both counters use the exact same thing. So
[01:24:27]  we're just, I went ahead of myself a little bit too. I should just, we'll just be able to, we're just gonna do this. We're
[01:24:35]  gonna destructure global this. This, but dollar sign, dollar sign, the store. Oh, did not like that. Oh, that's because I put a dollar sign
[01:24:53] . Oh, okay. Global this, store, destructure. I mean, it should be undefined right now. So, but then we put our store in our
[01:25:07]  app above here. And we'll make sure the store always hydrates too. Um, And load import store from components slash store. Did I not save that?
[01:25:38]  That's interesting. Oh, completion. Right on me. Components slash. Yep. All right. All right. Okay. So We did it. We did it.
[01:25:59]  Ta-da. See, both counters are connected to the same state. So there you go. I mean, I don't know if this is the best pattern.
[01:26:17]  They probably have like shortcuts for these kinds of things, but, um, there we, we, we've been made a component to host state, put it on a global
[01:26:25] , and then ta-da. I mean, I don't like putting stuff on a global like this, obviously. Cause in theory, um, you know, like
[01:26:38]  I'm a hacker. I mean, I'm not really a hacker, but window dot dollar sign store dot, what is it? Setter. So one I mean
[01:26:52] , you can always do this with JavaScript. Anyway, it's, I just, it's weird to have your state on the window object like this. I, we could
[01:26:59]  do something to get this a bit nicer, but, um, you know, it, it is what it is. Anyway, reactivity, not part of our component system
[01:27:13] . So we can, you know, we have a state management system built in this just works. So, you know, I did a store, I did a signal
[01:27:22] . This is like the Svelte store commitment. We can use, you know, create store and do this kind of stuff. So, you know, we, we
[01:27:29] , we got options. How are we doing? We're not doing bad. Okay. So that was, that wasn't too bad. So now we know that we can
[01:27:38]  share state. Um, what else cool stuff can we do here with Astro? Hmm. We could take something mostly static, I suppose. Actually, no, let
[01:27:56] 's, let's, let's, the age of the tour has, has, has, has waned. I think I'm, I think I'm okay going like
[01:28:06]  this. Let's, let's see if we can just do something a little bit different. Um, we can pull some HTML from another project or something and see what
[01:28:21]  we can do here. Now that, now that we have a means to do that. All right. Yeah. Why not? I was doing a, yeah, let's
[01:28:32]  just grab some static HTML here. Um, why not? Well, I can do a bit of this. I was doing a demo for Marco a little while ago and,
[01:28:44]  uh, and what we did was, okay, let me, let me see if I can find it. Um, I want, I want to try something where I
[01:29:01]  hit an API and do some data loading, if that makes sense. Um, and what I was thinking about was I put some resources away in a, in a project
[01:29:17]  here where essentially I grabbed all the static HTML you need to build a hacker news app. And I did this as a stream for Marco, which is, I love that because
[01:29:28]  it was like, uh, it was, it was like, uh, it was like, uh, how should I put it? It was, it was like,
[01:29:36]  uh, one of those reveal things where we were just building stuff the kind of same way you build something with, with solid or, you know, react and we're just
[01:29:44]  building the app. And then I did the big review and you see the loading states and the placeholders and we're doing all this typical stuff you do in a normal app
[01:29:50] . And then the big reveal moment happens when you realize that Marco was doing the fully interactive placeholders app without sending any JavaScript because it used a combination of streaming and partial
[01:30:02]  hydration enough that it was like, could do async data loading and placeholder swaps without sending any JavaScript. Um, so really big, but it happens an hour
[01:30:13]  and a half into the stream and no one is probably watching anymore. So, you know, it is what it is. But I just wanna, I think I can just
[01:30:24]  take this HTML file, play straight HTML. And I think if I can just drop it into this Astro thing, you know, just go ping. And if all goes
[01:30:35]  right, okay, how do we get CSS in Astro? That should be our next question, right? 'Cause how do we get CSS in here? I'm
[01:30:46]  just kind of curious, because this is H2S solid, yes. What's going on? I broke it. Tags cannot be inside element blocks. What did
[01:31:18]  I do? Oh, escaping. Okay. See, there's always some things you have to account for. Let's see if this is the solution. 'Cause this
[01:31:32]  has... Yeah, okay. Good, we're back on business. Does anyone know if I can just put a CSS file in here? I mean, I could add a
[01:31:50] , you know, yeah, let's... We know a style tag is gonna work, right? Like, that's a given, right? So let's just,
[01:32:00]  let's just, let's just grab our styles from my, from my example here. So I have a style.css, which has a lot of styles.
[01:32:13]  And actually, yeah, let's just, this is gonna be like a pain to scroll later, but let's just see. Can I just do this? And this
[01:32:24]  will just work. Hacker news. I mean, it's completely static right now. See, let's see what the network does. I mean, we're not doing
[01:32:37]  anything. We just have the Astro client, which is 7.8 kilobytes. So, yay. Okay. So, built with solid. Yeah. Let
[01:32:47] 's see. What would we do next? We would probably... This header section is on every page. So, let's see if we can make a Astro file for
[01:32:57]  the layout. I don't know if they have a special technique for this. Okay. Let's see if we can make a Astro file for the layout. I don
[01:33:04] 't know if they have a special technique for this. But I feel like I'm just gonna do something that seems rather sensible here. From my perspective. Watch this not
[01:33:21]  work. But I'm going to essentially grab all of the stuff here down to... One thing I love about static sites, and you can't get over this, is like
[01:33:33]  there's no routing you have to worry about. It's just like anchor tags as is. So, we should be able to just... There's a way I can
[01:33:40]  just skip down to the good stuff. Get down to about here. Put that in a layout component. Do I have to put the dash dash dash or whatever. I
[01:34:01]  was probably complaining that... Yeah, it's not even that. It's just complaining that I literally haven't closed our tag yet. So, let's fix that.
[01:34:09]  Let's... Let's just close it. I actually have no clue how projections work in Astro, which is probably actually going to be my first gap here. Because
[01:34:28]  what I want to do essentially... This is how an example... Maybe I had to look at the internals of the Marco component. I could see it. Or the Mark
[01:34:38] down component, rather. Because what I want... What I essentially want to do here is I want the HTML, right? And then right in between where I put it
[01:34:48]  here, the body and head, I want to be able to be like props.children, right? So, like... You know what I mean? I want like a
[01:34:57]  slot or something here. I don't know if Astro has that. Maybe a quick look at the docs can give us this. But essentially, what I want to do
[01:35:07]  is in our index Astro page, I want to essentially wrap the screen. Wrap this whole thing in our layout. Whatever. And then... Like this. And then
[01:35:32]  import... Import layout... From... Dot dot slash components slash... Layout. That's right. Okay. So, I don't have the slotting right. But
[01:35:50]  the main mechanism works, right? So, I just need to figure out how slotting works. Documentation. I told you, we'd be back here. Lay
[01:36:04] outs. It's probably an actual... Oh. There's actually literally like a... Okay. It's calling to put in a directory. Okay. So, my...
[01:36:09]  I have to figure out why this isn't working. my hunch was correct. Like... You know what I mean? Like... My hunch was correct. Like...
[01:36:11]  You know what I mean? Like... Like... My hunch was correct. Like... My... My... My... If I understand this correctly... Like... My
[01:36:19] ... My... My... My... My hunch was correct. Like... You know what I mean? Like... My... My... If I understand this correctly... Like... My
[01:36:34] ... My... My hunch was correct. Like... You know what I mean? Like... My... My... Uh... If I... If I understand this correctly... Like...
[01:36:46]  My... My first hunch here... Of just putting a slot... Should... Be... The preferred solution. I... Just... Am not doing something quite right. Oh...
[01:36:58]  Yeah. No. Here it is. Oh... Oh... I wonder. Let's look at the... I... I wonder if we have the web component issue. No
[01:37:17] . No. No. This is right. So... Why did I lose... Styling... Unless... Do they... Are every... Is everything automatically scoped styling? Is
[01:37:32]  that what it is? Do we... We have scoped... We have scoped styling. I bet you that's what it is. See all... See all...
[01:37:40]  I see all the hashes coming through here. Oh... I wonder if that's what it is. I didn't actually look at styling in CSS. Are scoped
[01:37:49] . Aha. Is... Sorry. I see some comment here. Is there... Is there a global dot CSS file? Like... Did I miss... Did I skip over
[01:37:57]  that? Because they said... Style tag... I didn't see if... Aha. Sorry, I see some comment here. Is there a global.css file
[01:38:17] ? Like, did I miss, did I skip over that? Because they said style tag, I didn't see if. I could also just. Yeah, because I
[01:38:35]  kind of just want to. Oh, yeah, sorry, I'm just silly here. I think they went in public. Go back to the beginning. OK, OK
[01:38:51] , yeah, I'm not a CSS whiz. We're going to do this the easy way because this is this is let's just. Can I consider like tooling to
[01:39:03]  compress this and then just go bye bye and then. Oh, I didn't do what I wanted it to. Again. Bye bye. OK. And then we'll
[01:39:16]  we'll take this styling and dump it in here. I don't know. Yeah, I'm just I'll keep the rest of this, but I'm going to
[01:39:28]  grab some stuff here. Where is it? OK, so let's try this again. Style CSS. OK, so let's just dump this at the end here.
[01:39:46]  No. It's global CSS get in. Get incorporated here. I don't even know home CSS. All right. Hmm. It's always going to be CSS is
[01:40:15]  always going to be my undoing, isn't it? OK. But yeah, that's not that's not doing what I don't actually see it here. Although
[01:40:31]  it's probably going to be in here. I mean, let's just see if we can import it, right? If it's public, I mean, gathering is going
[01:40:44]  to be top level. So it'll be just like maybe slash assets, maybe. Or actually, let's before we go there, let's just look at the docs real
[01:40:51]  quick and see if they have any mention about public. let's just see if we, if I, if I do something like, God, I hate, um,
[01:41:27]  like rels. God. This is like, this is, I showed you the last time I did this directly. Can't even remember what the syntax is. Something
[01:41:38]  like this. Third paragraph on CS docs page. Thank you. CSS and docs third. Is that global? Unless that's. Oh, you style global. Okay
[01:42:01] . Okay. Okay. That's going to be, that's my winner. Now. Let's just go back. I'll. Global. Something is broken. It
[01:42:23] 's better. Oh, it's because the title is missing. Why is the title missing? That's a great question. question. But, you know, I'm
[01:42:30]  not going to worry about that. Right now. Okay. So we have a layout. We have styles on it. We have. Let's see here. Um.
[01:42:43]  that's so weird. Cause the styles are there. It's just like the color or something. Probably. Yeah. It's like a hit. It's hidden.
[01:43:06]  All right. Well, let's see here. Yeah. So there's probably something clearly there is there. These global something is getting, I suspect something is coming in
[01:43:27]  here from here somewhere. I don't know what home CSS is. Let's just delete it. Cause we can. Anything crash? No. Like there's some CSS leaking
[01:43:37]  in here from somewhere. Yeah. I don't. Apply to the anchors. Yeah. Fun. Fun. Fun. Fun. Header is white. What?
[01:43:52]  Okay. Something. Yeah. Okay. Something. Yeah. Okay. Something. Something. Something. Something's not applying properly. That's weird. Okay. Not
[01:44:01]  going to worry too much about it. Instead. What I wanted to see if I could do is I wanted to see if I could load some data. in here somewhere
[01:44:09] . So let's let's let's let's. Because the problem is this header style is applying. Okay. Okay. Something. Something. Something's not applying properly.
[01:44:16]  Okay. Something. Something's not applying properly. It's weird. Okay. I'm not going to worry too much about it. Instead. I, what I'm,
[01:44:25]  what I wanted to see if I could do is. I wanted to see if I could load some data in here somewhere. So let's. Let's. Let's
[01:44:35] . Because the problem is this header style is applying. But it should be influenced by. There should be a rule in here where the anchor tags under the news item thing.
[01:44:49]  Pages. I guess. One thing that would be cool to see here is if we. How routing works. Right. Because. Yeah. How do we get route
[01:45:01] . How do we get params into here. Let's. Let's look. Pagination. Because. Dot dot dot slash page. Good. That's what I
[01:45:09]  want. And that will give me. Yeah. So. That's what I want. And that will give me. Yes. It's interesting. Astro has their
[01:45:29]  own means to do this, which is cool. But solid has a means of doing this all built in. That bypasses all of this. Because we kind of have a
[01:45:39]  fetch as you render mechanism that allows us to do suspense on the server, which is should still work on async. So. But what I want is. I want
[01:45:48]  this. And then I want to know how I will read it. Yeah. Astro props. Oh, they're in the page. It's going to force.
[01:46:01]  No, no. I can just go. I can just do this. Okay. Beautiful. Okay. Okay. So I can just do this. And then. Essentially.
[01:46:12]  We're going to have to do like a bunch of other fun stuff, obviously. If I rename this file to something like stories. This. Interesting. Okay.
[01:46:47]  Well. Sure. I'll add. Yeah, this is interesting. Because I kind of want to bypass this, admittedly. Because we have all this stuff built in
[01:47:18] . But, you know. Okay. So I like, I have to return something here. I wonder how it knows to put this in. Yeah. Okay.
[01:47:45]  That's interesting. Hmm. Okay. And so, like, if I disable it. That's interesting. Hmm. Okay. So, like, if I just do
[01:47:49]  this and comment it out. Is it still going to complain at me? No. Okay. Okay. So, like, if I just do this and comment it out
[01:47:50] . Is it still going to complain at me? Okay. So, like, if I just do this and comment it out. Is it still going to complain at me?
[01:47:53]  Yes. If I get rid of this too. What's it going to do? Okay. And so, like, if I just do this and comment it out.
[01:47:59]  Is it still going to complain at me? Hmm. Okay. So like if I just do this and comment it out, is it still going to complain at me?
[01:48:18]  Yes. If I get rid of this too, what is it going to do? Okay. So it's required. So the second you go to this, it needs to
[01:48:28]  get static prophecy. I'm not like -- I'm not used to these get static type methods. So this is all new to me. I've never used Next.
[01:48:38] js really beyond like -- so let's see. Expecting something from pagination. I was hoping I could just bypass this routing documentation. Dynamic routes. Yeah. I
[01:49:01]  understand that. Name parameters. Yeah. So we got -- this part makes sense to me. It's just this get static thing seems to be necessary. Must explore
[01:49:36] , which will tell Astro exactly what page -- what pages to generate. Oh. Of course. This is a static site generator. It needs to know -- it needs
[01:49:56]  to know like what possible combinations of things. So in our case, we need to be able -- okay. Yeah. Let's do it. I know now. I
[01:50:17] 'm also not very familiar with static site generators. I'm like a single page app guy who's been trusting to this stuff. Yeah. Yes. Thank you. I'm
[01:50:29]  a little slow here. This is why we're doing this, right? So -- and then essentially if I understand right, params and props. And params are
[01:50:46]  -- Okay. I actually have the API reference that I was using for my other thing here. Top new show ask job. Top, and then we should be able
[01:51:56]  to just copy this a few more times. Oh, I am missing a closing phrase. I was trying to get slash in there by going stories, nothing.
[01:52:48]  I think I've like jumped already to like a trickier version of these things because the whole reason I need to use the dot, dot, dot here is because technically it
[01:53:06]  can be, it's both home and, and these combinations of pages that I'm looking at here. I wonder if I can get away with not bothering with the
[01:53:29] , with the, what do you call it? With the, um, the dot, dot, dot for the shot. I said, I knew I'd get to
[01:54:00]  a certain point here where I probably would just have to like sit and get the docs to get it because I bet you if I go like slash top, we don't
[01:54:08]  have a problem, right? It's just the, the, the homepage. Right. Right. So, yeah, I knew show ask these all work. Oh,
[01:54:25]  it's job, not jobs. My bad. The only problem is this one. I'm going to have to figure out at some point, but let's, let
[01:54:44] 's, let's move on. Um, can I do query parameters here, or is that going to be lots of fun? Um, what I really wanted to do
[01:54:57]  was add pagination that way. But I think I suspect. Yeah. Okay. Maybe I'm trying to jump into something that's like a little bit too much. Let
[01:55:14] 's just worry about loading page one. Like not worry about this. So question is, can we, can we basically exit out straight into a solid component now? Right
[01:55:28] . That's, that's, that's, that's, that's my question. Let's, let's forget about our store for a moment. We don't
[01:55:35]  need this anymore. And let's. Let's do something a little bit different. Let's, let's basically. Go. Okay. Okay. I want to make
[01:55:49] . Yeah. I want to call it stories.jsx. And I want to take our astro page. And I can leave the news view here probably. Why
[01:56:13]  not? Let's now move all of this out of here. And call stories. Technically we should be passing in some information. Which I think let's say, what
[01:56:36]  are we going to be page? I don't know what this page is, but I guess we'll find out just pretty quickly here. Stories. Stories. Stories.
[01:56:54]  All the stores. And then. Export function. Or export. Default function. Stories. Props. And then export function. Export. Default function. Stories.
[01:57:05]  Props. Return. Some. Big block of jsx. What's going on here? Yeah. Let's put a fragment around those. Actually. Yeah. That
[01:57:15] 's fine. We'll put a fragment for now. Okay. Yeah. Let's put a fragment around those. Actually. Yeah. It's fine. We'll put a
[01:57:26]  fragment for now. Okay. Okay. Okay. Okay. Yeah. That's weird. But. That's. Weird. Main. Oh, it's because. I
[01:57:38] . Now there's main. Div. Div. Main. Okay. That's. Interesting. Let's. Let's. Let's. Let's remove like half of
[01:57:50]  these because there's too many stories on this anyways. I can't. See this. I can't scroll. All right. Let's remove all of them apparently.
[01:58:01]  What am I doing wrong here? UL. UL. Main. Main. Div. All right. Okay. Okay. Okay. All right. Let's remove all
[01:58:12]  of them apparently. What am I doing wrong here? UL. UL. Main. Main. Div. Format. No, it's. It's definitely
[01:58:25]  very unhappy with what I've done here. So. It looks like it should. Align. List line. Span. Span. Span. Span.
[01:58:45]  Like where you're missing the thing that doesn't match. Oh. Okay. What is the one difference between HTML and JSX? Only difference. It's not class
[01:59:02] , class name, all that other garbage. What is the only difference between JSX and HTML? JSX does not have void elements. So. That, that,
[01:59:15]  that, that is what this was. I, I didn't close the BR. That's, that, that's the only difference. You can pretty much copy and paste
[01:59:22]  JSX. As long. As. You remember that you have to close void elements. Anyways. Uh, where was I? Yes. Uh, where was I?
[01:59:32]  Yes. I do need to put a slot in. Um, or actually, no, I don't need to put a slot in yet. I'm okay. So anyways
[01:59:42] , uh, we've got our stories, stories, layout, stories, page, page, page. And hopefully when I go to top here, still rendering. Now
[01:59:54]  it's solid rendered. And if all went well, which I'm sure it did, um, we're not doing any client stuff. So it's all, it
[02:00:03] 's not getting shipped to the browser yet. We're still rendering with solid. Okay. So now let's, let's, let's see what these props look like coming
[02:00:15]  in. So console.log.procs.page. Do I get on the client and the server? Undefined. Unvalid path params stories.
[02:00:43]  Interesting. Yeah, this is, this is stories. Interesting. It's funny. It's, it's, it's rendering, but it's complaining. Hmm
[02:01:21] . I'm like probably missing something just like really small or obvious. In any case, it looks like what I actually want is, is this. And then it should
[02:01:43]  be stories. Is, is this one just messing with things? Yeah, it's messing with things. Okay. Okay. Okay. So I'm seeing it on
[02:02:07]  the server because this page, this never goes to the client, right? That's awesome. Okay. So we're rendering this on the client and we're getting our
[02:02:30]  page now. So what I'm going to do is I'm going to make another folder. And I'm going to call it, I don't know. Actually
[02:02:41] , let's not even bother the folder. Let's just add a new file. API.js. Let's see if I can get create resource in here. Right
[02:02:53] ? Because I said, this is, I just want to see if I can load something. Right. It's on the server. So I'm probably going to need node
[02:03:04]  fetch unless Astro gives me fetch, which, you know, that'd be like a next level move, but I, I suspect that yeah, this is pretty easy
[02:03:16]  API here. We're going to go get stories type and page. So we're just going to use page one. So then in our solid components stories component, we're
[02:03:27]  going to import stories. Nice. Okay. Yeah. I mean, I do the same with solid start to be fair. Like, and I think a lot of them
[02:03:43]  probably do. Cause like this, the last thing you want to be dealing with is like, like, why, why can't I just like do something like the beautiful thing
[02:03:52]  about these, these, these approaches, especially when you can consolidate them in a way like right now, there's still a very conceptual astro layer and solid layer.
[02:04:02]  But like, if you're taking it further and just have like a single experience, like you start forgetting about the client and server boundaries, right? This is one of the
[02:04:11]  coolest things, honestly, about Marco is like, you literally forgot that you were doing server rendering. It just all magically works. Okay. Okay. So, yeah,
[02:04:19]  so I'm going to need to get the stories. And what else I'm going to need to do is I'm going to also need to create a signal. or
[02:04:26]  actually, I'm going to create a resource, aren't I? Solid. Yes. I'm not giving me what I want, but that's fine. Okay.
[02:04:42]  Then if I should be able to just go const data or even brand stories equals create resource. And this isn't, this is going to be non dynamic anyways. So
[02:05:03]  let's just think I can just go get stories. Props dot page, no, props dot stories. And page one. Then if I, let me just double
[02:05:27]  check that the API is just something returning a promise. Yes, it is just returning a promise. Beautiful. Then we should be able to just, oh, it's,
[02:05:43]  it's going to be fun. We can't. All right. What's wrong here? Fetcher is not a function. Fetcher is not a function
[02:05:53] . Oh, okay. No. All right. Let's do some stuff. Suspense. React. Nope. I guess this is the fun part about react, but
[02:06:10]  also being in the project. We need, I guess, actually, we don't need to bring it from web. We can actually, I always forget that I export
[02:06:29]  them through here too. Suspense. And initially what we're just going to do here is actually, I mean, this is top level. So like this might
[02:06:44]  be like a little bit, what fallback equals. Yeah. Like we're not going to actually load the data right now. I'm just, let's funny. We
[02:06:54] 're never going to see this fallback because it's async rendered, but in theory, okay. Okay. Okay. This is a good sign. The fact that
[02:07:13]  we're still seeing data here is really good. Okay. Let's, let's, let's, let's just keep on going. You know, this suggests that
[02:07:26]  for each stories, yes. That we will be able to, what the editor is like doing exactly what I want right now. So we should be able to,
[02:08:00]  sorry, should be able to, I'm just going to take this existing item. If it appears more than once, then we know that we're getting somewhere. All
[02:08:16]  right. And we have to, we don't have to import for, I believe, wait, it's all it works, but it's not. Okay. Okay
[02:08:34] . Yeah. This, this, this is probably where it gets like super tricky to figure out. Although I wonder you paid source. I wonder if I can turn them
[02:08:52]  line wrap. No, it is, it is rendering nothing here. Oh, it's duh. You have to read a resource under a suspense boundary for it to actually do
[02:09:09]  anything. So, um, oh no, I did read it though. Hmm. Okay. So a little bit, a little bit trickier than I was hoping.
[02:09:19]  Uh, let's see here. It was interesting though, that it was still rendering. So yeah, probably cause it wasn't suspending. Okay. Let's see
[02:09:31]  here. Do, do, do, do, do, do, do. Yeah. This might be trickier than I hope to actually debug. Let's, let
[02:09:52] 's, let's see if we can kind of do something here. Like. Love the fact that JSX is just expressions. Like we should be able to just something like
[02:10:09]  console. log. Stories. And if everything works properly, we should see this log twice and we don't. It's like it never finishes loading. Which is too
[02:10:27]  bad. Okay. Yeah. Cause that's going to be harder for me to track down a debug probably. Okay. The other hint that this doesn't actually end up
[02:10:42]  working is because. Um, yeah, I mean, I can debug solid code, but I don't know how fun that is going to be for everyone. I just want
[02:10:53] , I just, I was just kind of curious cause you can see where I'm going here. Right? Like assuming that this works, you would be able to actually
[02:11:01]  just full on use solids own primitives and API fetching and suspense and everything. And just like write your app and just drop it in and like, not really worry.
[02:11:10]  Like it should just, it should just work. Um, that's the benefit of using the async renderer. Um, but I can tell already from the page source
[02:11:19]  that we're not serializing in. You can actually see here that there's a, there's a hydration resources here. That's empty array, which means that the
[02:11:30] , my API call is not getting the story, like getting back the data that I'm expecting. It just, it is serializing, which means it does think it's
[02:11:38]  finishes and then that it settles. But for, for some reason, it's not actually, it's not actually getting there. I mean, I guess we,
[02:11:47]  we can intercept the prod promise, right? We can just, we can, we can, we can see what's going on. I don't know how much. Oh
[02:11:57] , actually, I need to, I need to let it do the JSON thing. Okay. And then I need to go then. And then I need to go then
[02:12:03] . And then I need to go. Then. Our console.log.r. Refresh. Let's run it again. And rerun our page. Okay. Yeah
[02:12:10] . Yeah. So our, our, our, our, our fetch is just not working. I don't know if this is because I'm trying to use like Ast
[02:12:37] ro's fetch. Not where it's expected to be used, but it's actually the fetch that's filling. Not. Yeah. Oh man. Back to the start
[02:12:47] . Right. Yes. There you go. I, we, we were in the right place at the beginning. Okay. Let's bring back node fetch. Thank you.
[02:12:54]  I very much appreciate people doing the, the, the groundwork for me while I'm doing this. Okay. Let's get this going. Cause I would love to
[02:13:10]  show when, like, wouldn't you love to see this? Let's go. NPM install node fetch. Because. Let's see. This works properly. I
[02:13:29]  don't know. I don't know. I don't know. That just might've let me down too. Doesn't. You can see that it's, it's
[02:13:42]  clearly the, the promise that's not, that's not working. Oh man. That's too bad. Right. Cause we're not, we're not, we
[02:13:50] 're not getting in the then. Um, so this, this, this issue probably has nothing to do with solid and some weird esoteric thing to do with ast
[02:14:04] ro, but like, not like, it's probably solvable. Um, it's just like, I had to patch the headers to confuse it. That is Chrome
[02:14:13] . The weird thing is I'm not even getting. Okay. Well, let's, let's maybe, maybe that's my problem. Right? Like, let's catch
[02:14:20] . Are we getting an error? I think I should just use an async function in the first place. Cause this is already like, so convoluted. Um
[02:14:28] , no, let's just do that. So we can see what we're dealing with. Um, so await cons res equals await fetch check. Data equals await JSON
[02:15:08] . I know there's probably shorter ways to do this, but humor me. Cause I just want to just want to do this and let's try catch this whole block
[02:15:21] . Try catch error. Console.log error. This is what everyone wanted to see. Debugging node fetch. Uh. Nothing. Nothing. Why? Why?
[02:15:56]  Why? Why? Why? Actually, that's not. It is. It's weird. It's because. Okay. Maybe I'm missing something else. I'm
[02:16:09]  not. Okay. Console.log. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. It's not the fetch.
[02:16:22]  My mistake. We aren't. We aren't. We aren't. We're not mapping properly. Let's, let's make sure we get here. Console.
[02:16:30] log. Type. Okay. Okay. It's not working. Sweet. Okay. Now I know. So. This is not. Fetch is. Although we did
[02:16:41]  learn something valuable here. Um. Our problem is props.stories isn't defined. And. The reason it's not defined. Is because I called it page.
[02:16:51]  something valuable here. Our problem is props.stories isn't defined. And the reason it's not defined is because I called it page. This is why you use Type
[02:17:06] Script, right? All right. There we go. Now everything is making sense. Fetch.default is not a function. All right. Nodefetch is
[02:17:38]  not happy with me here. Is it -- did I just -- you know, because I had it -- let's just go back here a second. When I -- it
[02:17:58]  was always just fetch like that, right? Like, I commented out something that was already -- yeah, okay, so what -- why is Nodefetch not happy with
[02:18:08]  us? This pollutes the global. I don't think it did, but let's -- let's -- I don't -- I don't think this does but --
[02:18:27]  no, it doesn't. Fetch is not a function yet. Fetch isn't defined. Why? Why, why, why? Okay. Interesting challenge here is
[02:19:01]  I don't know if I get to see the temporary server stuff. This is the stuff that I generated from the disk but I don't actually know what it's comp
[02:19:16] iling to. Well, I guess in the docs that say they use Nodefetch, I wonder if they actually show like a really simple example. That would be really
[02:19:28]  nice. Because honestly, I think it should just work though. So I don't -- I don't -- I can't see why they'd have any reason to -- to
[02:19:41]  do that. That's -- yeah, import fetch from Nodefetch. That's interesting. Okay, I mean, what is fetch? I mean, we can take
[02:20:17]  this. Okay, keep on going. It's undefined. Awesome. I must be just doing something that's -- that's just like getting it in the weirdest
[02:20:54]  way. Okay, let's try something else. Let's -- let's -- let's see if -- it's a little bit trickier than that. Let's see if
[02:21:08]  I get a different result if I do it here. Okay, so did it just like -- the funny thing is you would error out earlier in the process if if
[02:21:40]  something -- like -- it's like watch it be like, we released a new version of Nodefetch two hours ago and it breaks everything because we switched the way we handle
[02:21:57]  ESM or something. Yeah, probably unlikely. It just -- it's -- it's interesting. I mean, the library is here. Compilations not complaining.
[02:22:15]  It's just literally undefined. I mean, the library is on the library. But it's interesting and kind of really blocking because I can't actually think of
[02:22:36]  what else I could do here to kind of get around that if I can't figure out this, right? You know, obviously I'm gathering this. I think I've
[02:22:46]  already tried this. But let's double check. Let's see. I suspected we would get to a point where this might happen. But I did not expect to be
[02:23:09]  -- to be taken out by Nodefetch here. Oh, man. That's pretty lame. It's fetch.default is not a function. It's basically
[02:23:36]  saying that there's a common JS conversion happening here. And essentially something isn't mapping properly. Let's see. Can I -- no. Okay. I was, like
[02:23:57] , hopefully -- hoping that I could see this underscore astro thing. I mean, one thing I could do is I could go npm run build and then, like,
[02:24:04]  maybe get a chance to see -- -- just thinking I could get a chance. But I'm not going to see any JavaScript here because -- -- it's statically rendered
[02:24:32] . It did its job, right? Here's the HTML, right? So that isn't going to let me get into the JavaScript. Pulling into the client isn
[02:24:42] 't going to help us because it's Nodefetch. Okay. This has to be where -- but no, this looks like it's just caching of Node modules
[02:25:00] . Yeah. Yeah. This is just pre-build kind of stuff. Maybe not. No. No. This looks like internal library stuff. Huh. How long?
[02:25:22]  I don't know. If anyone has any ideas, that's interesting. There's some comments about using, like, the top-over-weight and the astro
[02:25:34]  stuff. But that -- I imagine you can do that. I -- what I wanted to see if I could do was actually use the full, like, suspense on the server
[02:25:43]  rendering here. And basically -- basically lift almost an existing app and just have this functionality kind of built in. What -- this -- what we're going to generate here is actually
[02:25:57]  going to be server-side. It's going to be static. But we get to use basically mechanisms. Like, if it wasn't server-side, you could
[02:26:06]  -- you could have suspense on both sides kind of playing in. But I don't know what to do with that. This is -- yeah. I'm not going to waste
[02:26:23]  any more time kind of debugging this. I don't think. I've probably spent long enough. Which means that we're at an interesting point at two and a half
[02:26:31]  hours. I don't know if there's anything else or any other questions people want to have. But I don't think I can take -- if I can't find fetch
[02:26:36] , I can't take the example I want to any further. So, yeah. Let's move on. I don't know if there's anything else anyone wanted to see
[02:26:47] . I'm open to answer any questions or kind of play around with anything. But otherwise, we're getting pretty close to the -- where I'm going to call
[02:27:00]  it a day. Take a little water here. Yeah. I don't know. It's tricky. It's interesting. Because when you have like a -- I mean
[02:27:21] , this is always the tricky part with debugging server-side. And I guess it's more interesting here. Because with a static generator, we never actually -- with a static
[02:27:33]  generator, we actually never need to have the server-side JavaScript. Like, it's never something that needs to be exposed. So, I understand why you keep it
[02:27:46]  all kind of tucked away. But, you know, I'm always curious. At least you might be able to inject a global in the Astro config. Yeah. I
[02:28:03]  mean, that's a possibility. What else we got here? So, I'm going to go over here. Home page, you can add an index Astro component
[02:28:19]  in the Pages folder. Then abstract -- import the object. I don't know if I'm completely following, to be fair. But, yeah. I mean,
[02:28:39]  I think I could definitely set up the project structure a little bit differently here. Yeah. I don't know. This is a -- there's, like, something I
[02:28:53] 'm missing on the kind of, like, background build stuff. Which is too bad. It looks like the types they're completing. Yeah. Yeah. I mean,
[02:29:12]  let's see. There's this Astro config. I don't know if I want to go down this path and try and figure out how to inject it. Oh
[02:29:29] , you mean, in terms of solving that problem that I was having, in terms of, like, meeting the specific route that I could -- yeah, yeah, yeah.
[02:29:38]  I could make two pages and then use, like, two components and then use both of them in both pages. Yeah. Definitely. And actually, with Astro's case
[02:29:46] , there's no downside to that. The reason I was kind of mentally avoiding doing that was because, like, if you did that in solid and client-side routing
[02:29:54] , you would actually end up, like, re-rendering stuff you wouldn't need to re-render. Which is why I was, like, insulated. But
[02:30:01]  this -- who cares? This is static. Every page is independent. Right. Yeah. Okay. Yeah. That makes sense. And if it doesn't help us with our
[02:30:10]  fetch, it would be so easy just to -- oh, man. I don't know. Okay. I mean, I've been saying I don't know for long
[02:30:21]  enough. How long has it been? Like, 15 minutes? Probably longer. Yeah. I don't know. Yeah. I guess -- I guess that's it for our
[02:30:32]  stream today. We saw a lot of cool stuff. I'm super stoked that you could actually showcase the progressive hydration. It looks like the islands work pretty well. delete
[02:30:45]  cache. Okay. Okay. Let's do it again. As I said, I think the cache is -- well, actually, a lot of the cache stuff looks like it
[02:30:58] 's library stuff, like pre-processed node modules. But, you know, I will -- I will do whatever. Yeah. No, this is -- this is
[02:31:20]  -- there's something weird going on in the compilation here in the background. And I wish I could look at it. But -- yeah. Yeah, that's true,
[02:31:39]  actually. You know, I've got the fixed integration here. I'm going to make a PR. I'll do that off stream. But it looks -- the only --
[02:31:49]  if you guys want to know, the reason I want to try this async thing is because I suspect that there might be places where this doesn't work. And I thought
[02:31:58] , like, if I got an async data loading example working, like, with, like, node fetch, I could kind of -- well, okay. Let's
[02:32:05]  fake it. Who cares? Screw fetch. Let's fake it. We don't need fetch. I know what the API looks like. Let's fake it. Right
[02:32:18] ? It's only going to run on the server anyway. So, let's just -- let's just set a timeout and fake it. Like -- like -- like --
[02:32:27]  let's -- let's define our own fetch function here. Let's -- I -- let's screw this. Screw this. -- const fetch. I don't even --
[02:32:43]  don't even need fetch. What do we want to do? We want to -- you know -- yeah, I don't want to deal with a bunch of extra garbage.
[02:32:53]  Let's just -- let's just fake it. Let's -- let's just -- I'm trying to think. Like, it's been a while since I just --
[02:33:07]  I'll just do it inline. Why not? It's just -- just -- so, like, I'll just do it inline. I'll just do it
[02:33:19]  inline. So, I'll just do it inline. Let's do it inline. And then, let's set a timeout for, like, 100 milliseconds
[02:33:36]  or something. And let's go resolve array of some data. For now, let's put two things in the data, right? Let's move on. We don
[02:33:55] 't -- I was getting too hung up on, you know, things working properly. We don't need things to work properly. We don't care. All right.
[02:34:10]  So, see, two stories, right? So, I mean, you get what I'm doing here. I put in -- I put in lazy loading here. And --
[02:34:27]  okay. But let's -- let's -- now, because we can set the data, let's just make it whatever the hell we feel like here. I think I even
[02:34:35]  have a data structure here. Okay. So, each story has this information on it. Let's just kind of like this. And then, go ID one. Popular
[02:34:47]  one. Pull in. All right. I should have thought of just, like -- let's just go -- I should have thought of doing this way earlier. I was,
[02:35:06]  like, too focused on trying to, like, make it work. We don't care if it actually works. All right. We're back in action here.
[02:35:37]  And let's copy this again. And let's copy this again and make a slightly different story. An ID two. And what else is cool? Let's do astro
[02:35:58] .build. All right. All right. So, I, like, lost probably most of the stream when I was -- when I was -- when I was -- when
[02:36:15]  I was doing this. Beautiful. And we don't need to -- console log. And then -- stories. And then -- no, wrong one. Components. Solid
[02:36:36]  stories. Sorry, dot point. Mm-hmm. Story, dot -- is it -- row. Yeah. Title. Does that feel better to have something to show for
[02:37:13]  all that are ever here? Story dot domain. And -- let's do -- let's do this -- let's do this -- story dot user. And let's do
[02:37:27]  this -- story dot user -- story dot user. And then -- there we go. This is the busy work where I was supposed to, you know, prepare this ahead
[02:37:53]  of time, you know? It said -- there's a -- story dot -- time ago. It's a little static. I kind of -- probably could have just dest
[02:38:16] ructured and saved myself a little bit of effort. I'm so used to -- I'm so used to not destructuring now that, you know, here's what
[02:38:24]  it is. And -- Story dot comment. All right. I can't see it because of the styling issue I had earlier. But essentially -- oh, did I give --
[02:38:46]  I gave them the same points because I didn't want to discriminate, right? I wanted -- I wanted -- I wanted to show -- I wanted them both to have a
[02:38:53]  great -- a great upvote score. But we have to have a winner, right? Let's just make sure that they're different. Yeah, there we go.
[02:39:03]  So, yay. I don't know what's up with that styling, but whatever. I can show you some of my awesome CSS skills, way of dealing with frustrating
[02:39:16]  stuff like this. Where are we? Title. Stand up. Title. Yeah. Watch this not even work. Let's -- let's -- let's -- let's --
[02:39:34]  let's -- let's see if this -- -- like -- all right. There we go. There, there. I solved CSS. Okay. So now, just so
[02:39:44]  everyone following knows what's happening. I'm actually using Solid's suspense on the server to do this data fetching. So Solid knows when it's done, when suspense resol
[02:39:57] ves. You never see the loading state because this is a static page. But, you know, this -- this is -- this is kind of, like, how we
[02:40:05]  can get that solid experience into -- into Astro pretty easily. And now the real test in question is -- how do I do this? I -- I was kind of,
[02:40:21]  like, thinking. I was, like, what -- what if I do this? Are -- they're still part of the same -- no, they're not. Can
[02:40:33]  I do this? Because I was thinking, what happens if I created two islands here? Would I break the world? Okay. Yeah. So one downside about this approach
[02:41:22]  that I was thinking about -- actually, you know what, here's the thing. So we have to think about it. If a page -- if a page is going
[02:41:30]  to be completely static with Astro and there's no client side, you don't actually want to generate the hydration scripts. So we're going to have to make this configur
[02:41:39] able somehow to figure this out. I mean, the same trick that we use -- now that I'm thinking about it, I 100% know that it was Solid's progressive
[02:41:47]  rendering that was causing that cool counter thing earlier. But it means that we're actually putting extra stuff on the page. Because, look, here's the serialized data
[02:41:54]  that we never need to hydrate. So we probably need to think of a way to prevent it. But if we actually did want to hydrate on the client,
[02:42:05]  which, you know, we can do, right? What was it? A client load, right? We don't actually need to do this. But if we wanted
[02:42:19]  to -- we should essentially now -- yeah, I mean, it's funny. The styling is why we can't see these. They're sitting literally right on top of each
[02:42:35]  other. But -- actually -- but, yeah, you can see both Astro roots. And each with their own script hydrates properly. Which is cool. Yeah,
[02:43:00]  so basically -- okay, I got my answer. If -- if the stuff in Solid hydrates sequentially at load time with the async data like this, like this
[02:43:16] , it'll work fine. But because the hydration scripts get run immediately, regardless of whether the component is hydrated or not, it looks like it means that it's possible that
[02:43:32]  out-of-order hydration of the components will tie to the wrong hydration scripts. Which means that I have some work to do with Solid if we want to get multiple as
[02:43:41] ync hydration roots and it's working here. Essentially, my recommendation right now for using Astro after I do the PR is going to be essentially not to use it with
[02:43:52]  async. See, the async does nothing for Solid unless you're using Suspense and using the stuff I'm showing you. And that stuff's not going to
[02:44:00]  work. So I might even make the PR synchronous. And essentially, if I make the -- if I make it synchronous, what'll happen is kind of -- well,
[02:44:16]  is that -- yeah, let's just do it. Let's make it synchronous. The cool thing -- actually, I got a couple more things to show you guys before
[02:44:28]  -- you all before I'm done. So you see how you see the console logs right now on the server? And these console logs are happening when -- okay, so this
[02:44:35]  is the wrong one. Let's -- let's just get stories back here. Okay, so now no more console logs. And then let's go into API. And
[02:44:45]  let's -- let's -- let's actually -- why do I want to do this? I'm just going to -- yeah -- okay, function. Where are we?
[02:45:10]  Send the response. Set timeout. There. And I'm going to go return -- I don't even need to return. There's nothing special here. console dot
[02:45:28]  log. Okay. So you can see -- we can see our fetching for each of the pages that are generated at -- at a -- what do you call it -- at
[02:45:43]  a -- build time or whatever, right? This is a static site generator, fetch fetch fetch. Now, if I go back into our -- our renderer and change
[02:45:56]  it to -- as I said, I already know that this isn't going to work properly for Solid because of -- sorry, this render is up here. Because of, like
[02:46:09] , the way that we do the data serialization. If I go back and go, okay, now, our server renderer actually needs to be rendered extremely. It
[02:46:19] 's not async. There's no -- there's no await, right? It's just -- it's just a synchronous version of this, right? Which is probably a
[02:46:29]  smart move right now because we don't fully really support async in this scenario. See where the console log is now? It's -- why is this -- oh
[02:47:00] , okay. Let's actually -- let's -- let's clean slate this because I think I have to -- it's the -- we have to worry about that sneaky cache sneaking
[02:47:11]  in. Let's -- let's move this to trash. Okay, let's try this again. Right, add the component on the page twice. No fetching on
[02:47:29]  the server. Okay. So, what I just did, by changing it to render to string, instead of using render to async string, it no longer waits and
[02:47:36]  actually no longer fetches on the server. So, the exact same code actually now renders the shell statically and then does the fetching on the client to load the
[02:47:46]  data in dynamically. Might not be what you're looking for, but essentially, this at least won't break, so to speak. So, basically, if you use --
[02:47:58]  if we configure Astro this way and you use Suspense in your app, what it'll actually do is statically render the loading state. See? Did you
[02:48:07]  see the loading state there for a second? Loading, right? And then it'll -- it'll do the fetch on the client. No, as I said, not
[02:48:16]  the best thing. Pretty standard JAMstack. Like, if you were to actually make Hacker News app, you would probably do this because the data is dynamic. You
[02:48:25]  can't pre-gen it all, right? I mean, unless you're doing, like, some crazy, like, updated every X number of seconds. So,
[02:48:34]  what this allows us to do, actually, is use Suspense on the client, but you can just write your app exactly the same way, and we just change where
[02:48:46]  the fetching happens. Anyway. I don't know if that is any good. Someone asked earlier on if we show, like, a client-only component. But
[02:48:56]  essentially, with using non-async rendering, we can essentially get a -- basically, automatically use Suspense as a way of setting that as a client boundary. That
[02:49:12] 's probably, like, a little bit too tricky. I need to think about this. Mostly that I think that it's probably better to set it up this way without
[02:49:22]  the async rendering until we actually fully support it. Yeah, okay. This is a fair question. Basically, what I mean is when we go to render a page
[02:49:41] , there's multiple ways we can render it when solid. And, essentially, when I say async, I mean that at the time of rendering on the server, it
[02:50:00] 's asynchronous. As in, like, it doesn't matter if it's happening at SSG time. Like, if you're statically generating your site, by default
[02:50:08] , the build config was set such that it would essentially support async, which means that it lets the renderer decide when it's done. Like, render to string in
[02:50:21]  React is synchronous. You run the line of code. The next line of code you have with the string, you know. With async, this lets us do suspense on
[02:50:29]  the server. So, instead of, like, in classic React and Next.js and stuff, they actually, like, go do the fetching first. And then
[02:50:38] , when all your data is fetched, they then render the string with it. That's fine. But what I wanted to do is kind of bring it all together for
[02:50:49]  a couple of reasons, right? So, when I say async, what I mean is we start rendering. And it's actually fetching and rendering at the same time
[02:50:56] . And then it all resolves and gives you what you need. So, generally speaking, yes, it is about DX in the astro-specific scenario. But
[02:51:13]  what it means, though, is what I just did. I just switched from being async to non-async. Like, just changed where the fetching happens
[02:51:20] . And it's the exact same code. And if you want to switch it again to streaming, like, instead of using a static site generator, you actually have this real
[02:51:28] -time streaming where it's doing the data fetching on the server and streaming it through to the client. It's all the same code. You don't actually have
[02:51:36]  to change your app at all to be able to render because it's the same mental model. And what this lets you do is, like, just be like, this is
[02:51:44]  the way to build a solid app. And then we can move so that it optimizes for, like, the platform you want to use it for. So, like
[02:51:52] , maybe you want to go on Netlify and have it, you know, like a static CDN page or something and pre-gen it, you know, like
[02:52:00]  SSG. It works. You can take the same app and go, oh, you know, now we're going to server render it on an AWS function, but
[02:52:09]  our, like, in AWS Lambda, they don't support streaming. But that's fine. We'll just do async mode and it will serve the page when it's
[02:52:17]  done loading. And then if you go onto, like, a Cloudflare worker, which does support streaming, take the same code again, and now it actually gets,
[02:52:24]  like, the full benefit of streaming. Yes, exactly. So, the whole point here, and this is part of the reason I delayed 1.0, was I
[02:52:39]  wanted to create an environment situation where you just write your app one way and it just works regardless of approach to server-side rendering. And that's what I was trying to
[02:52:51]  show here, was by taking that same app that had the async rendering and making it synchronous, what happens then is instead at SSG time, it actually just loads
[02:53:03]  a loading spinner, but then at hydration time, you know, it does the client stuff. So, like, yes, if we remove the client load here, like
[02:53:13]  suggested, it's just going to show load because the client's going to pick up. What we're pre-rendering now is just going to be a header with the
[02:53:22]  loading. It's like the app shell experience. Very common on Jamstack. Like, if you're going to make a Hacker News example for Jamstack,
[02:53:30]  that's what you would do, right? You would essentially just render the app shell and then every time the client loads, it'll dynamically fetch the data. Hopefully that
[02:53:46]  makes sense. That's essentially kind of the thinking here. Yeah. So, yeah, I think I'm going to change the renderer to not be async for
[02:54:05]  now unless until I can fix the async renderer because essentially there's no benefit to async from Sol's perspective because there's only suspense and it'll basically break.
[02:54:14]  So, if I change the renderer to be synchronous, at least you can use suspense and basically build your apps with the client's data fetching if you wanted.
[02:54:22]  So, like you could basically static render the static parts and then, you know, data fetch the dynamic parts in the client. The synchronous renderer is also slightly faster.
[02:54:38]  So, for like SSG, it might be beneficial small thing. I mean, I don't know where the bottleneck is. I know Astra is working on performance things
[02:54:45] . I doubt Solid's renderer is going to be the bottleneck. As I said, it's quite fast in simple benchmarks. You know, it's several times
[02:54:53]  faster than most of the competition. So, yeah. Okay. Cool. I'm glad I got to be able to show that off though. And that gives me a direction
[02:55:06]  for the PR. And I kind of, I feel like I have a much better understanding of how Astro works. And hopefully you all have a better understanding of Astro
[02:55:13]  and Solid. The, as you can see already, even with this, there's a lot of different things you can do. And these are the kind of considerations I have
[02:55:22]  to take in. When working through these, the problem space, I just love the fact that we have this ability to have a multi-page app here and be able to
[02:55:30]  have that experience with Solid so easily. Obviously I hit that weird node fetch issue and we'll have to figure out what's going on here. But as I've shown
[02:55:40]  it, like this does work, right? And you can fully leverage the capabilities of Solid within Astro. Obviously this example is not great in that. I mean,
[02:55:56]  it's not, it's not the worst. What's, what's great about this example is that, and then maybe this is the one reason why to keep it in
[02:56:06]  async rendering mode. is that you, you have this ability to, uh, to kind of like use solid like suspense and all the mechanisms here to completely render your
[02:56:17]  page. The only thing is this is still sort of single page app yet. I saved myself from rendering the header, but I still, this whole app that I've,
[02:56:25]  that I'm drawing here, um, is just, um, what do I call it? It is just a single island. Yeah. See, this is, we
[02:56:35] 're talking about it. See, it only shows loading when I do this. It, you, we actually have to, it's what, the way I have it right
[02:56:41]  now, it's actually doing client load. Um, basically this is, this is not, this is what happens when you convert your current single page app. Um, this
[02:56:52]  is probably not the best way to use Astro. Um, it isn't bad. Like if you have a list component and that's what we have here, it
[02:57:01] , you know, it does the trick, but, um, where you're really going to see benefit here is, is rethinking how you approach apps. Like truthfully
[02:57:11]  for this use case, if you, if you're intending to keep things mostly static, don't use solid to do the data fetch and use Astro, you know
[02:57:20] , we didn't do this today, but use, use it to do its top level of weight, have it load, render all the pages. There's nothing on
[02:57:27]  this page that required you to use solid realistically. Like you could have just done this all in Astro, but then when you hit something small, interactive, you know,
[02:57:36]  a little piece on your page, you know, um, then you can just put a solid component in and you, you just saved yourself so much JavaScript. Like this,
[02:57:45]  this, this example was, you know, just so like, you should test out the data fetching and kind of play around with an app everyone's familiar with,
[02:57:52]  but realistically speaking, I, I would, I wouldn't consider this the, like the best way, right? The, one of the things, um, you know,
[02:58:02]  and I've kind of shown this off with the, the, the, the, the Marco hacker news example, um, which I probably have somewhere here. Uh,
[02:58:10]  was it, uh, this is the solid one is that, um, is, is that the real power of partial hydration is when you essentially have something dynamic on the
[02:58:31]  page, like, like, um, uh, this one's a bit, I've picked like the one story that has no comments, but like, see how we can
[02:58:41]  expand the, and shrink the comments. Um, essentially, you know, like, this is a really cheesy one and you could probably do the statement plain number that that's
[02:58:53]  the only interactive part on these kinds of pages, right? Like, if, if you look here, this Marco example, which is the same way that I was doing
[02:58:59]  a solid, this is Grammarly. It doesn't load any JavaScript to do this, right? Like, it's funny, you can actually see the loading state in
[02:59:09]  Marco, um, because it, it actually streams it in and stuff, but it doesn't need any JavaScript to do that. So that, that's where the, like
[02:59:16] , you can kind of go from this point to actually, to this point when like, oh, I need to load some JavaScript to do like a little thing. And
[02:59:24]  it's just, it's that much less. That's, that's what the benefit is here. Anyway, I, I think, I think, you know, this
[02:59:31]  is your last chance to get some questions in. Um, but, uh, this is pretty much, I, I got, I got what I was looking for and I
[02:59:39]  hope you guys did too. So I'm going to give you one last shot to, to kind of put it out there, but otherwise I'm going to call it
[02:59:46]  a night and, uh, I hope you guys, um, I hope you all have a great weekend. All right. Yeah, no, it looks like we're
[03:00:04]  at an end. All right. Thanks to everyone for joining today. It's three hours in hope people come back home over the stream can get some value. Um,
[03:00:13]  but, uh, yeah, have a good one. I'm signing off now. Um, see ya.