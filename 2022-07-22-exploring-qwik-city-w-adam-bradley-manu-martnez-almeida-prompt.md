---
showLink: "https://www.youtube.com/watch?v=XoeJisRJjlo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Qwik City w/ Adam Bradley & Manu Martínez-Almeida"
description: ""
publishDate: "2022-07-22"
coverImage: "https://i.ytimg.com/vi/XoeJisRJjlo/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 04:25:13, which means the transcript is four hours and twenty five minutes).
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

[00:00:00]  Hello and welcome to my stream today today we're going to be talking with the members of the quick team or at builder IO to talk about the new meta framework they've
[00:00:16]  been working on quick city as if you've been following the stream for a while, you know, I've been digging into quick quite a few times already, but this this
[00:00:28]  is new. I've seen the potential at work, you know, we've seen all the technology, but the piece that's been kind of missing even questions like how
[00:00:38]  does it all come together perhaps like you know there's questions about preloading assets and best project structures and how routing and all that and I'm hoping today we're going
[00:00:49]  to learn what the best practices are with quick as well. Yeah, everyone come in and say hi in the chat. As you as you can drop in the other big
[00:00:59]  change today, just because of scheduling is. We're going to. We're going to be. Starting actually right in with the quick stuff. I'm going to do
[00:01:13]  this week in JavaScript a bit later Adam has to leave in about an hour, so I want to make sure that we get enough focus on on what's going on quick.
[00:01:24]  I am excited for this week in JavaScript. There is a lot of really cool stuff that's been going on, especially conversations around performance. Which I, you know,
[00:01:33]  always are of interest to me and. Most of this audience, I imagine so. Yeah, let's let's let's hope that. That all goes good. I'm
[00:01:46]  going to just send out a couple more messages get remind people the streams on so let's just let's go just blast that in the discord. Let's see here.
[00:01:59]  Let's see here. Give me a second. Do say hi as you join on. Kind of direct some people more to Twitch. It seems that people like Twitch for more
[00:02:15] . I honestly can go either way, Twitch or YouTube, but nice to see the new people coming in on Twitch. As always, remember to subscribe or follow rather so
[00:02:27]  you can find out when the streams are coming in and yet first high from Twitch. Yeah, I'm streaming on Twitch as well. That's been the new thing. I
[00:02:37]  usually post to YouTube because I'd like to preview thumbnails and all that, but you can always catch my channel here. So the last three or four streams I've been
[00:02:47]  doing on Twitch at this time of day, too, it's just getting better viewership this way because as you can imagine, I used to stream at like 8pm Pacific
[00:02:57]  time. This is this is much easier for people to reach in the middle of the day. Okay, so let me just close down. Discord here. Good. I
[00:03:10] 'm in streamer mode so no one should bug me. All right. People are starting to come on now. Awesome. Okay. Yeah. So. Yeah. Hello
[00:03:20] , everyone. Thanks for saying hi in the chat. No. Yeah. Nice contingent coming over from some Twitch now. So, yeah, there's some comments about my
[00:03:35]  new setup. Last time I, as you guys know, I updated some audio stuff and video stuff. Hopefully it's good. Do let me know if there's any
[00:03:46]  thing that you notice as it's going. This is still very new. I'm still working it out. I got a new mic and then someone posted on YouTube. They
[00:03:54] 're like, someone please send Ryan a new mic. I was like, but I just got a new mic. So hopefully things are working well. Okay. Good.
[00:04:04]  Quality is good. Thanks. Yeah. People say they prefer Twitch. Yeah. Awesome. Thank you. Yeah. Yeah. So much better. Yeah. I, I put
[00:04:15]  a little work into it, so I'm, I'm hoping that it's noticeable. All right. Um, without further ado, probably though. Um, actually just a
[00:04:24]  second. Let's, um, one more. Um, yeah, we, we probably, oh, sorry. Just give me one second here. Um, I think
[00:04:42] , I think everyone's probably pretty good to get started here. Okay. So, um, what I'm going to do is we're going to welcome Adam and Manu
[00:04:54]  onto our stream here. Um, um, um, these guys both work on builder. Um, they are both, um, have a lot of experience in this field
[00:05:03] , have worked on multiple frameworks, and now they're primary responsible for quick, uh, quick city party town, um, doing a lot of really amazing stuff. So
[00:05:14] , uh, let's, let's, let's welcome them on the stream here. Yeah. Hi guys. Hey, how's it going? Thanks Ryan. Yeah
[00:05:22] , no, I'm, I'm super excited to have you guys here. Uh, I, I've been playing around with quick, as I said, right from.
[00:05:30]  Early days. I mean, me and Steve go back a little bit and, uh, um, you got, I've had Mitch go on stream. I've done
[00:05:36]  solo streams on quick and you guys did a really, uh, both of you guys helped me out a ton back in April when I was trying to update my demos and,
[00:05:44]  and keep all my benchmarking fair. So, um, and it's, it's been incredible cause like literally every three months, you know, every two months I
[00:05:53]  kind of poke out, come poke in so much has changed. So much has, uh, like improved. So, so many areas of just like gone beyond even, you
[00:06:01]  know, any of my initial expectations. So, um, and I talked to Mitch go recently, like both of you guys are a huge part of that. He's actually
[00:06:09] , but he, the way he was putting it, he, like he had this goal. It's gonna step back for a moment and take care of some other business.
[00:06:15]  Uh, you know, he's been doing a lot of talks. He's been traveling. He's been, he's been doing that. And my understanding at least
[00:06:20]  is that you guys have been doing a lot of, uh, heavy lifting, uh, especially in the last six months in terms of, you know, party town and getting
[00:06:28]  quick and quick city to where it is today. So, um, yeah. How about you guys, uh, introduce yourself. Tell, tell us all a little bit about
[00:06:36] , uh, what you've been doing. Yeah. I'm, uh, Adam Bradley. Uh, previously I worked at, uh, Ionic and helped build, uh
[00:06:42] , help create. Ionic framework. Uh, through that, uh, we developed, uh, stencil, which is what powers Ionic today. You know, and
[00:06:50]  so it's another, uh, library built on top of web components that allows Ionic to work into many of the different frameworks. Um, and now I'm working with
[00:06:57]  Mishko Manu here, uh, on quick, uh, quick city in party town. Awesome. Um, my name is Manu and I work with Adam
[00:07:06]  in the same company in Ionic. We built Ionic together. We build stencil together. We build a lot of things together. Um, before I built, uh,
[00:07:16]  some web, um, like web framework for the backend. Uh, there is one called gene for, uh, Golan, which is the most use, uh,
[00:07:25]  use, uh, use one and also game engine. So kind of like all my life around building APIs and, and trying to kind of break the boundaries of what's possible
[00:07:34] . Um, uh, in terms of like, yeah, as the case and, and as options, no. Yeah, no, I, I I've seen some
[00:07:42]  of your work. You, you, uh, if I, if I understand correctly, you're largely responsible for the quick optimizer, uh, which I believe it was
[00:07:50]  a built all in rust. Um, and it does all the really advanced bundling stuff that quick does. Yeah. Yeah, exactly. It kind of came from this idea
[00:08:00]  that, um, so when we join, uh, I joined, uh, build. Right. Quick was in a stage where it was very clear the goal of the
[00:08:08]  framework, but it was not very clear how it looked like. Right. Um, the kind of the, the developer experience was not really, it was pretty rough and it
[00:08:16]  required a lot of manual work in, in order to wear things up. And kind of the, my initial like project, a big project in the, in, in quick
[00:08:23]  was let's build this optimizer, um, that does this work for the user. And that's how, like we decided to just do it in rest. Um
[00:08:31] , which at the beginning might was a bit like, uh, a little word to get something done. But now like seeing, uh, from now, I feel like it
[00:08:38]  was the right decision. It was, uh, yeah, no, the compiler is amazing. Uh, and I, well, my favorite part about the progression of quick and
[00:08:48]  the compiler or sort of the optimizer, you guys call it. Is that it's based on basically to my understanding, a very generalized pattern. Like essentially if there
[00:08:58] 's a dollar sign, do something special. But beyond that is, is, is, is actually a lot more generalizable pattern than one might've expected. Cause I remember
[00:09:05]  looking at those early days and I even have the commit history on my hacker news example, uh, in terms of progression. Like there was a lot of, uh,
[00:09:13]  you know, like URLs and all the mechanical things on the outside. And what I've seen piece by piece is those things all get internalized to now to the point that
[00:09:24]  it just like, it's, it's just a convention. It's just like, oh, you want that lazy loaded? Put a dollar sign on it. Yeah
[00:09:29] , no, and it was, we, we have a lot of pushback. I think that the dollar sign was kind of like, do we really need this? And
[00:09:36]  kind of the, the idea was three, three points that it needs to be local. It needs to be composable. So that's what was also one of the requirements
[00:09:44] . So, um, this thing that is the, the compiler doesn't really need to walk through or like, uh, look into different files. Right. And it
[00:09:54]  can resolve everything like locally, like looking only at the identifiers. Right. And then it's, uh, you can extend it, which was like, we are not
[00:10:04]  going to make this magic component word that only we can create. Right. And then developers cannot create their own like kind of hooks. Uh, so that was kind of the
[00:10:13]  thing. And then for developers to give this small hint or something a little bit special, some extra rules, some extra requirements you might need to know about. And it
[00:10:22] 's very, like very clear in the code. Where is it happening? So it's not something that you need to keep thinking all the time, but it's, it
[00:10:28] 's good that developers have this hint that something is, is up in, in this location. Right. So you're kind of not keeping the magic a little bit visible,
[00:10:38]  like, um, so developers can, can, um, yeah, do good decisions. Yeah. I think that's actually super important. And it's one of those
[00:10:45]  balances that we, I, I, as you know, I have a lot of, uh, experience also playing around with compilers and trying to figure out where the
[00:10:52] , where the kind of meet that balance between automating things and being explicit. And I, I think I really do like the, the, the, the place that
[00:11:00]  quick has been, you know, moving towards and where it's kind of landing in terms of that. But, uh, today we're going to be talking more about,
[00:11:08]  uh, quick city, uh, which is built on top of quick click. Um, a meta framework and honestly, I I I've heard some chatter. Obviously I
[00:11:16]  talked to these guys enough that I know what's going on, but, uh, I was, I was on Twitter, uh, about a week ago. And, uh
[00:11:22] , and I, Steve, uh, Steve posted this and I was looking at it and I was, I was like, how much code does quick city add to your bund
[00:11:31] les as opposed to just using quick dev directly. And, and, you know, zero kilobytes. Um, and I, I, I was, I was
[00:11:37]  thinking about it and I can see how it makes sense, but I mean, this, this obviously, uh, piqued my interest, right? Because, you know
[00:11:44] , you, you, you have meta frameworks to get all these new features to have exposed new capabilities, like to impose opinions and better best practices on top of building your apps
[00:11:56] . Um, and yeah, often there are more features and more capabilities that come with it. And so you don't usually associate that with zero kill KB. So
[00:12:07]  I don't know, maybe Adam, can you, can you give us kind of like an overview of what quick city is and what, what Steve's talking about here?
[00:12:13]  Sure. Yeah. So quick city is basically the meta framework for quick. Um, and just like you got next JS or Gatsby to react or Svelte kit
[00:12:22]  to Svelte quick city is the, uh, meta framework for, for quick. Um, and so what Steve is alluding to here is that really a majority
[00:12:30] , if not, well, a majority of quick city is kind of a build time tool where it's able to, you know, crawl the file system and build up the
[00:12:38]  routes. And then it's able to SSR that route. And there's a good chance that you never need to get any of that code, any of that JavaScript to
[00:12:45]  download, because that's good enough. Um, if you were to interact with the site, if you were to have some sort of left menu widget, do something,
[00:12:52]  it is going to download that one kill by whatever size that component is. So it's not entirely, it's a little, uh, misleading. There are times you
[00:12:59] 're going to need JavaScript when you need JavaScript. Um, but no, for the most part, like that, that first load is going to be zero JavaScript because it didn
[00:13:06] 't need it. Um, which in itself, I guess, isn't completely mind blowing because you do have like, you know, 11 T or Jekyll or any
[00:13:13]  sort of, you know, static site generator doesn't need JavaScript to run. Um, so it can do that for sure. But then the, the big difference is
[00:13:19]  that, um, quick city makes it easy to then upgrade, um, to use that widget, whatever that one widget on that page is. It's only going to download
[00:13:26]  and use that JavaScript or prefetch it. And if you needed it. Um, so I know if that helps answer the question of the zero kilobytes and how we
[00:13:33] 're able to do that. I think it's kind of also like a property of quick, right? Like, um, yeah, the amount of JavaScript is a kind of
[00:13:39]  like a function of the interactivity. So we have, we have this demo where there is even this, like, uh, 20 components in the page. It's
[00:13:49]  the header. There is the, the, the, uh, the, the footer. There is like the, the, the main component. There's a content.
[00:13:56]  There is like little things and kind of, there is only one little part, which is interactive, not even quick city. Like there is not any, like any real navigation
[00:14:04] . So all that is like removed and not even like, it's like, I think. Yeah. Yeah. I think, I think you're hitting on it.
[00:14:13]  Cause I, I was, I, I stepped back. Cause they said, they said, this is quick city over quick and obviously quick has this property. So I was
[00:14:19]  like thinking, well, what would a meta framework bring to the table that would take up size? And I was thinking about that. Cause like, I dealt with a lot
[00:14:27]  of really small single page app frameworks, right? Like, um, Svelte or solid they're, they're very small. So like, uh, the,
[00:14:34]  the framework by itself might only be a few kilobytes. Right. And then it gets, but the meta framework ends up being bigger. Obviously there's the component size
[00:14:43] . So even the smallest demos, but if you're literally doing a hello world in these, uh, in these, in these, uh, frameworks, um, they generally
[00:14:52]  come out under 10 kilobytes. Okay. So, um, in Svelte or solid, and I was, I was trying to think of where is that
[00:14:58]  jump. Right. And most of that size difference is two things. Um, for my, it's the routing and it's like the meta tag injecting, which is
[00:15:07]  essentially an extension of routing. So I, and so I started thinking, I was like, so routing is probably the big, like the biggest piece. Um, data fetch
[00:15:16] ing is sometimes a consideration too, um, as well. But obviously like, uh, the meta framework itself isn't gonna add the data fetching overhead in a hello
[00:15:26]  world example. Cause there's no data fetching. So, so I figured those are probably the two areas that would be most interesting, uh, for me on, on
[00:15:34]  focus. Um, given that, uh, quick city is a meta framework on top of quick. Yeah. And, and really, um, what was fun about developing
[00:15:43]  quick city is that there's numerous times that I restarted it because it's like, I'm reinventing, you know, lazy loading. That's not necessary. It
[00:15:51] 's like, you know, like there's times where I'm like working on the routing. It's like, okay, when this route hits, we have to now request
[00:15:56]  it dynamically import. It's like, oh, wait, wait, wait, like quick to set, you know, it's like, so there's numerous step backs
[00:16:02]  of just like, just entirely making sure that we're leveraging quick as much as possible and really not providing much code at all. So, so again, like a,
[00:16:10]  a lot of quick city is that build time component of how to build this route map out of, uh, regexes. Um, but then beyond that, it's
[00:16:18]  really just build the stack of components, you know, you know, build this hierarchy of what are the layouts of components that we found in the stack. And then just hand
[00:16:26]  it off to quick to do the right thing as if you hand wrote it yourself. Um, and really all of quick city, um, the entire, if we were to
[00:16:35]  make every single bit of the JavaScript used, um, unminified, you know, still source code is about four kilobytes of code. And the majority of
[00:16:44]  that wouldn't ever have to get into the client to begin with. So really there's very, very little runtime at all involved with it. And I think you're,
[00:16:50]  you're exactly right. It's, it's kind of that loop of going through the regexes of seeing which one matches. And then the other is, uh,
[00:16:57]  yeah, updating the head component of just like, oh, the title is now this let's add this meta. And so we're able to keep that pretty tiny. Um
[00:17:04] , so there really is not much to quick city cause it's just leveraging quicks capability. Right. And especially depends on the decisions or the choices made in the router
[00:17:12] . Right. Uh, if the, if the routing is mostly server side, then, um, you, like, you definitely don't need to send most of it there
[00:17:22] . If, if it's client side, there probably is going to be a small portion, um, that needs to, to be sent so that it can like have the
[00:17:29]  code. But the interesting thing is you write quick doesn't need the special code to handle the lazy loading as you're saying. Cause like essentially every like quick is already
[00:17:38]  built to lazily load everything. So like, it's just another, what is it? What is it? What's the term Q Q R L? Like it
[00:17:44] 's just another. Like. Right. Location that quick. So aware of. Um, yeah. Yeah. And it is cool. How, again, like when we
[00:17:53]  build this stack of the JSX components, basically there's a little tiny content component we have, which is kind of also kind of fun. Cause it's about five
[00:17:59]  lines of code of, it just goes through this loop and just like creates a stack of JSX components. Um, it's those components and quick runtime that knows like,
[00:18:08]  oh, it is impossible for me to re-render, or it is like, there is no button inside here that is ever possible for me to redo something. And so
[00:18:16] , um, it's again, leveraging quick to realize that all of this code that you're building, like the left menu, the footer header, stuff like that.
[00:18:24]  That it can't re-render, but that wasn't a quick city thing. That was a quick thing that was able to understand what isn't possible to re-
[00:18:30] render and to never download. Right. Yeah. One very, very, very exciting things is that, um, we recently, like last week, at least we get like
[00:18:39]  a, a proof of concept of how it will look like the single page navigation, uh, in quick. And the, the, I think the main, what kind of
[00:18:46]  mind blowing difference is that it's not like a configuration you put at the root level. Like it's, uh, in some other, I don't know, Rem
[00:18:53] ix, you say like, if you want to have MPA, um, uh, the solution is, you know, you remove the scripts here. And then it's
[00:19:00]  like, yeah, and it works, no kind of like forms work. There is all the interactivity. It doesn't work. Um, but in, in, in
[00:19:08]  quick, it's about. It's about if you put our link component, right? This link component will include a click handler, right? And this click handler captures
[00:19:19] . Some context, right? And this context, there is like little, like, uh, kind of like a tree analysis or a tree seeking dynamic tree seeking based on the
[00:19:28]  execution in the server side. This is this click handler is capture a piece of information that can actually trigger, uh, effect at the very, um, root level that
[00:19:39]  might cause a re a single page. Re rendering, right? Re rendering, right? So that implies that now SSR needs to share like some extra information because some
[00:19:50]  components might re render. So they become, um, uh, theme, they might have to re render. This doesn't change the amount of JavaScript, right? This only
[00:20:00]  becomes the amount of things to prefetch. And things to serialize, but this is not a, not a root configuration. It's just because you have a link
[00:20:09]  component in this particular page is going to cause this different dynamic tree seeking of the page to, to include that. Um, which I think is really cool. Yeah. I
[00:20:19]  mean, I, I, I, I, I'm obviously very curious about this. Cause I, from what I'm picking up here and from your previous stream that you
[00:20:26]  guys did, you guys are, are working on some sort of high, like when you say single page routing. We're, we're still talking hybrid zone, right
[00:20:33] ? Like, are we, are we still talking like, like, yeah, I honestly, I, maybe you tell me, uh, or maybe this is on the scope
[00:20:41]  of what we're looking at right now. But. Well, I, I do think it's, it's interesting. Cause, cause it kind of what Manu is
[00:20:47]  saying is like, when it's time to build an app, you're like, all right, is this going to be MPA or is this going to be, uh
[00:20:51] , you know, SPA? Like you have to make decisions like, well, this is a business app. It's gonna be a dashboard. It's going to be
[00:20:55] , let's make an SBA. And the next person's like, well, this is gonna be a blog. So it's gonna be, so you kind of have
[00:20:59]  to make a decision at some point. Uh, what's interesting. And we've kind of discovered over time is that that decision is less so needed to be made with
[00:21:07]  a quick city because, um, you can have it at MPA and sprinkle in your SPA parts all you want. Or, and when you get to a page that
[00:21:15] , um, has the path name and hit refresh, it's going to, you know, load from that state and everything. Um, and then you, it kind
[00:21:22]  of kicks in and can become an SP at any point. So really the, the decision doesn't less so has to be made of how you're going to make that work
[00:21:30] . Um, and that's kind of. The decision is per link. And then even beyond that, like it, it could be down to, um, I want to
[00:21:36]  pre-generate. I want to, you know, a static site generated all these folders, but this one folder, the dashboard, I want this one to be
[00:21:44] , you know, SSR, you know? So like that decision is also fairly easy to make to anywhere in the process rather than at the very beginning. Um,
[00:21:51]  and it's kind of, I don't know, I think I, we kind of just tripped into it and just like, oh, it's, it's going
[00:21:57]  to work pretty easily. Actually, like we don't, there's not much we have to do to make this works. And, and, uh, you know, we
[00:22:02]  put a lot of work into making the SSR work well, because, because we kind of started it from the SSR side first. And, um, knowing that we
[00:22:09]  wanted to add client side navigation, eventually, you know, like we made sure that the routes were going to be able to re-render if we needed to. Um
[00:22:17] , but when it came to it, Manu, what, it took you three hours to add client side navigation to it this week. Yeah. The, the thing is
[00:22:24]  because it is, it was the natural thing. Like it's, you know, the quick gives you this primitive to resume the application. So at some point it's just
[00:22:32]  like, okay, this, the link component is, it's funny to show the link component is literally this anchor that has a click and just, just like, just mut
[00:22:42] ates like a, a signal. No, it will be like material in a signal in, in solid. That's the only thing it does. Right. Yeah.
[00:22:48]  It doesn't actually try to, it doesn't call navigate to method. I just mutate some mistake and that triggers some functionality and it just worked. Right. Later.
[00:22:59]  We have some other ideas of how we can do client side navigation by, um, doing inner HTML and like re-rendering parts of the DOM in the server and kind
[00:23:07]  of like updating that. But the natural way of just triggering some updates and that re-renders. So it will have to download the component, right? That's
[00:23:16]  right. Right. Um, so, so what I'm hearing is, uh, classic server side rendering opt into kind of client side rendering at any point where it does the
[00:23:27]  client side kind of rendering pattern in the future. potentially some kind of hybrid even between those where it's server rendering and client stuff kind of coming in, uh, together
[00:23:39] , uh, after the initial page load. Okay. Exactly. Yeah. So, so, um, I guess, I guess, and this really is some questions in
[00:23:47]  chat that I want to address here in a minute, but, um, what's, what, what, what is the state of, uh, Quick City right now?
[00:23:53]  Um, like if, if I want to get started, is it, is it like, where are we at? Uh, I'm gathering, there's probably a pattern
[00:24:00]  for deployment as well. Like adapter pattern type thing. I've been seeing a lot of meta frameworks, like what, what's the current state? Where, where is
[00:24:07] , what is Quick City at right now? Yeah. Luckily we've had an awesome community on Discord helping us out a lot. Cause we have been pretty fast moving, uh
[00:24:15] , of, um, breaking changes, things like that. But it's been awesome to get a lot of good feedback from the, our Discord channel. Um, that I
[00:24:21]  think now we're just, you know, as of like this last few days, we've been pretty stable and, uh, we're actively updating our doc site to be
[00:24:28]  the latest version of Quick City. And that's gonna be a big milestone for us. And so once we get the doc site updated, which should be done shortly here
[00:24:36] , um, that's, I think we're gonna start calling it beta at that point. Cause I think it is pretty stable and there's, and again, you know
[00:24:42] , it's got four kilobytes of runtime. There's really not much to it. And Quick has, uh, the requirements we've had for Quick City has also
[00:24:50]  made a lot of improvements to Quick itself. You know, there's been a lot of dog food in between the two. Um, and so now that we've got the
[00:24:56] , yeah, the docs that are having, um, starting to get improved slowly. Again, thanks to community is helping us out with that. Um, so yeah,
[00:25:03]  I think we're, we're really kind of in a good spot now to start getting more people starting to test it out and kicking the tires more. Uh, we
[00:25:10]  do have it in the CLI now. Although this very second at the time of this recording, I do think the CLI is one version back to the one that we
[00:25:19] 're, um, pretty happy with. Um, so there is, I do wanna say that. So I think it's version 0025 is the, is the one we
[00:25:25] 're pretty happy with and probably the one will, will become beta or the slightly around that. Um, so yeah, that's kind of, if that helps answer that
[00:25:33] , that's kind of where we're at. Um, I think it's in a really, really good position and you, and I saw some of the questions have been
[00:25:38]  like bullet run and Vercel. Um, and yes, about the adapter pattern. Uh, one thing that, that we, that Quick City also comes with would be
[00:25:46]  the middleware that you could include. Uh, we wanna make sure that Quick City itself really is, you know, stepped away from how the server works. Like there
[00:25:54] 's plenty of servers out there. They all have their request response system. Um, this is where Quick City kind of steps aside. You know, it's like, uh
[00:26:02] , and we provide the middleware then to wired up and which is, which is also, you know, what most, uh, um, most meta frameworks would do.
[00:26:08]  So we're providing all those. I don't think we've got the Vercel one in quite yet. Uh, but if you look at the source code of,
[00:26:13]  of what these adapters or middleware actually is, it's actually quite minimal. Um, so adding in any one of them is gonna be pretty simple. So we
[00:26:21] 've kind of started with, uh, express JS and then, um, uh, club for pages, which is what the doc site is on, uh, currently. Okay
[00:26:29] . And I think Netlify is on there too. Right. Actually. Yeah. Ryan, I just sent you in the discord, uh, because we just released.
[00:26:37]  Yes. In this moment, I actually started the release when we started the live streaming. Of course. Like five minutes before and I tested while, uh, Adam was talking
[00:26:46] . So I sent you the dev release, uh, in the discord. That's what works. So that's really like having main right now. This is what I
[00:26:53] 'm talking about. Oh, fast moving. Like he's literally pushing while I'm saying it's not ready. So that's okay. Yeah. No, I tested it
[00:27:00]  out. Okay. He tested it. So it's good. Okay. Yeah. We've, we've had this game before. We'd like book a call and be
[00:27:06]  like, yeah, yeah, yeah. It's, it's good. And it's like, oh no, we just did a release this morning and it broke it.
[00:27:11]  Oh, but I'm doing another release. Like, yeah, no stuff's moving really fast. Yes. Yes. But, but, uh, yeah, let's
[00:27:17] , let's hope that, that everything is good. Um, on the stream. We're doing it live. This one's on minor. Okay. Yeah. So,
[00:27:27]  but yeah, yeah. Checking out the doc site. We, it's our, if you go to quick.builder.io, um, you can see
[00:27:32]  the, uh, the links at top. Quick city's already got its own header. It's got a bunch of stuff. It looks like I'm seeing stuff about nest
[00:27:39] ed routes, uh, layouts, named routes, components, MDX piece, um, some built in components for menu and breadcrumbs. So navigation based stuff,
[00:27:47]  um, information about data points. Uh, this is interesting. This is all new data fetching patterns, route parameters. Yeah. Yeah. You passing them through,
[00:27:59]  um, looks like, uh, quick cities for presenting kind of like a router type API, like a used location. Um, that's really cool. Um, so being
[00:28:08]  able to kind of, uh, yeah, I mean, this, this is what I was missing. I've been trying to like hack together routing solutions for a while now
[00:28:17] . Um, so having these pieces kind of all there and built in is awesome. Um, I, I, I know I wanna kind of get started on a project
[00:28:27]  and kind of port Hacker News project, but is there any other example that's maybe a good, uh, like example from just a learning perspective to show people more about
[00:28:36]  features of quick city before we go there? Yeah. Manu, we got the, the dark side example. That's in the CLI, right? Yes.
[00:28:46]  Yes. Is it updated to the latest? Well, I thought you just, you just pushed that, didn't you? But anyways, uh, yeah. Okay.
[00:28:56]  Okay. Yes. I don't know. One of ours. Look side itself. Or I mean, what I push the starter, right? You just with it. That
[00:29:03] 's the one I mean. CLI. You will, you will get the latest of the latest. Um, but if you check the actual docs, that's, uh
[00:29:10] , that's not right. Yeah. Yes. The starter has like a very mini doc site. Um, it's kind of, which is ported from our,
[00:29:20]  um, testing app that we have. Um, so I think if you set the starter and select the quick city, um, it's going to be this tiny doc site
[00:29:27]  with a couple of different examples of how things would work. Okay. Shoot. So that's a good starting place. Okay. Then maybe that's just what I'll do
[00:29:34] . Um, cause I've got, uh, sorry, server benchmarking, ignore this file. Um, anyway, um, where was I? So if I was
[00:29:45]  to get started on a new project, okay. Let's see. So I'm going to just make it, uh, this and I'm going to go into my examples
[00:29:53]  folder. And where, where do I get started? Who's there? You have to go to this core and copy the link. I sent you. Oh, right.
[00:30:03]  Yeah. Okay. Yeah. I will. Yeah. I will. Otherwise, otherwise it will be NPM in it quick at latest at latest just to make sure it
[00:30:14] 's getting the latest. Uh, but we just make a dev release. And I think is we just said just, uh, Jolo, you know, it was just
[00:30:19] . All right. Let's let's do this. Uh, do I need, do I need to make the directory first or like, will it ask me? Yeah
[00:30:28] . Yeah. I will ask. Okay. So install. Project name. Okay. So is this the one that we're going to eventually make into our, our, our
[00:30:40]  app or. Yeah. This is the name of your app, right? Your app will become quick app and the folder will be called quick app. Quick hacker news.
[00:30:49]  I'm going to do two because there is a one it's in a broken state, but there is a one here. I'm, I'm just gonna do this as
[00:30:57]  my project name. And then I see, cause there's a blank and there's a quick city, but we're gonna use. We're gonna use quick city. I
[00:31:03]  guess, uh, is there's no overhead of having the MDX support if I don't use it. Right? No, no, no. It just, yeah.
[00:31:11]  If you have an MDX file, it just knows to do something. But if you don't there, yeah, there's no overhead at all. That's nice
[00:31:15]  to see you have a library mode. Uh, is that just using beats library mode or is there anything special about it? Yes. Yes. Okay. All right. Quick
[00:31:26]  city. And then. Yes. Okay. Does this work? I, um, I, I tested express. Yes. That's what, that's what I tested.
[00:31:37]  The only reason is cuz ultimately, uh, if I want my apples to apples, it's gotta be cloudflare or netlify and I'm, I'm
[00:31:44]  going to probably just lean towards netlify at this point for no particular reason. Um, so let's do it. Let's do it. Let's do it.
[00:31:55]  Um, features. No, I, I, I, I guess we can keep prettier. I don't really care, but I don't need reactor tailwind.
[00:32:03]  Tailwind. So I'm just gonna go, go there. And then. So now, now you need to do NPM install force because it's a dev release.
[00:32:12]  So the pair of dependencies will be like, um, complaining, but it's, um, yeah. All right. This is exciting. We're, we're living
[00:32:21]  on the edge here. Terrifying. Uh, thank you. Thank you for letting me be the first guinea pig. I works. I think Glenn contributed the, in
[00:32:27]  the comments. Yeah, that's right. And he's like proud. They're like, Natalie, five words. So if it doesn't work, we will just,
[00:32:31]  um, Glenn, we will just, uh, blame on you. Yes, we'll blame, but no, that's who I was kind of referring to. Glenn
[00:32:38] 's been extremely helpful. Uh, so thanks, man. Hey, man. There was a question. Although phrased in maybe not the most flight way, you guys still
[00:32:44]  using the rather slow JS DOM library for server side rendering. So, uh, JS DOM, no, uh, Domino. Yes. So, but, but I
[00:32:52]  do want to follow it up with like, um, that's absolutely replaceable. You know, that's not like welded in a how quick will forever work. That's
[00:33:12]  kind of just one of those things of like, uh, the hard thing right now is resume ability and serializing, you know, data and picking it back up.
[00:33:21]  You know, that's been a, a big chunk of the development. Now that it, that we're pretty happy with that going back and, uh, doing like a
[00:33:27]  different render where it's going to do string concatenation. Um, and a much, hopefully a great performance. Uh, that's kind of the NAR roadmap.
[00:33:36]  It, so the, we have, have a PR open for, um, the string concatenation transform. Um, and it was kind of like a proof of concept
[00:33:44]  because, uh, the way that previously we serialized state, um, in quick, we have to kind of go back to, um, kind of go back to
[00:33:50]  the dome and update and put like extra attributes. So that will not work great, uh, in, in, in a string concatenation, right? Because you cannot
[00:33:58] , the moment you put something on the wire, you cannot just come back and, and update it down. Right. So we kind of went through a lot of refact
[00:34:04] ors to make sure of it. There is right now one, uh, PR open to add the streaming. And when we have all this stuff figured out that we will
[00:34:13]  keep, uh, working on the, uh, on the, um, string concat transform that we have kind of like working. Yeah. Yeah. Yeah. And
[00:34:24] , and quick city. And yeah, again, like the, the whole internals of what we've been doing with quick. Usually the very first or second question is like
[00:34:30] , well, how's that going to work with streaming? Like you can't, like Manu says, you can't like do something, make it a string. And
[00:34:35]  then later on, like, oh yeah, we've got to update that. So it's entirely been, uh, part of the architecture from, from really the beginning
[00:34:41] . And so now that we're happy with it, I think we'll be able to go back and revisit how to do the string concatenation. Awesome. Yeah.
[00:34:50]  And someone asked about SSR benchmarks and actually client side benchmarks too, is a fair question. Um, I'm going to answer that for a moment just cause I've been
[00:34:56]  bugging these guys forever. Cause that's what I do. So I, I, I I'm aware of the progress going on. I don't think it's the
[00:35:01]  right time to focus on those benchmarks yet. I think very soon will be, um, but yeah, I, because what, what quick offers is an architectural change that
[00:35:11]  has, um, incredible value, but there's no actual benchmarks that actually show off that value. The benchmarks we have today are all about how fast can something do raw rendering
[00:35:23] ? How fast can it put strings together? How fast can it update a 10,000 row table? Like that kind of stuff, as you guys all know, that's
[00:35:31]  an area that I have expertise on. I have expertise on and solid is very, very, very, very, very good on those. But, um, what we
[00:35:39] 're, I think, I think it distracts from what quick is doing right now. And I, I think it will be time soon enough when things are in a good
[00:35:46]  place, you can better bet. Uh, I'm going to be in there to, to, to keep everyone honest with benchmarks. I, I just gotta say that that
[00:35:53] 's extremely kind of you, Ryan. It'd be so easy to, you know, come in and say, you know, quick's performance is absolutely horrible. They
[00:36:00]  obviously don't care about performance, you know? So like, I think it's, so thank you for recognizing, you know, like what we've been working on is
[00:36:06] , is kind of the, the, the challenging part. And, uh, the render is, is kind of like the, the next section that we want to put a
[00:36:11]  lot of time into. Yeah. So soon, um, is what, what I'm getting at. I, I, I'm pretty, I I've gone down
[00:36:18]  this path. I know what it looks like. I, I know I, I'm pretty good at looking at libraries and like estimating what their performance is in benchmarks.
[00:36:26]  And yeah, I, I think for the, I think string can catch super important on the server side. I think, uh, I am, I'm almost ready to
[00:36:33]  test client side, to be fair. I was waiting for those keyed updates to come in. Um, but, uh, you know, we can give it a
[00:36:39]  little bit longer. Um, right now our priority next one is to do the SSR, uh, performance. That's how our, um, in terms of growth performance
[00:36:50] , that's where we, uh, want to focus next. Right on the client side, I guess it will not be, uh, it will not be impressive because
[00:37:01]  we try to keep, we still have some like legacy from the early days when we have to check the DOM every single time, because that was kind of the only source of
[00:37:09]  the truth. Yeah. And moving a bit because we went to kind of the couple of a bit from the DOM, but there is still a lot of like, a lot
[00:37:15]  of reads to the DOM that are not necessary because we could just keep the previews. Uh, uh, so even if it's, uh, V DOM, um
[00:37:23] , is will not be the best one. And when we're part of the refactor, we want to do something else that we are in the making. Yeah. So
[00:37:32] , but it's just like first SSR, I think is our next focus in terms of, of rendering. Yeah, no. And I think this is a smart priorit
[00:37:38] ization. I've seen different projects take different strategies. Um, and this has been one of the, the, the, the challenges there. Like, as you guys know
[00:37:44] , I, I work on Marco six and we've taken a very, very, very long time. From a lot of people's perspective to get our resumable
[00:37:51]  part of the solution out. And part of it was because it was kind of like the opposite approach. We like started from the rendering thing. And the, like the,
[00:38:00]  because the techniques, uh, the markers using is like a tiny bit different. Um, and it's using the reactive graph. It's like, it's, it
[00:38:08]  is non-local. It's about using. Uh, cross file analysis. Right. For, for compilation. So like in order for that, the work we had
[00:38:16]  to actually start with reactivity. So it was kind of funny. It was like, it was almost like the, the other side coming from the other side. And it
[00:38:23]  was, it's interesting because on that library, I spent a lot of time doing benchmarks, but the product is still not finished yet. So, whereas you guys are
[00:38:30] , are clearly already releasing stuff, have a meta framework and moving very, very quickly here. And we're gonna come back around to this stuff, uh, eventually.
[00:38:39]  Um, so I, I think, I think, I think there it's good, it's good to kind of, uh, come up with the, the right balance
[00:38:46]  there to figure out, like getting stuff in, in people, in people's hands versus like, you know, maybe spending a bit too much time, uh, worried initially
[00:38:58]  about performance. Yeah. And I think, uh, it's something that you're, you're well aware of is that, you know, VDOM and JSX
[00:39:03]  are not the same thing. You know, JSX is a syntax for, for writing templates, you know, and VDOM is kind of how it renders
[00:39:10] . And so currently we use JSX as, as our syntax for how to write components, but the VDOM section of it can be replaced with something better at any
[00:39:17]  time without breaking changes. I have to say, I love the conversation that, uh, I think you, you, I think Ryan, you was the one starting it,
[00:39:25]  uh, about the semantics of JSX and how back in the day we were like, or they were like these comments kind of joking, kind of real. Like
[00:39:33]  let's, let's make JSX in the current react semantics into the platform. Right. And it seems like a good idea. Okay. Well, not, not
[00:39:41]  for a lot of people now, but, and then we realized that, no, that that was, that will happen at terrible mistake. Right. Because it's, it
[00:39:46] 's just syntax. Right. And that's where I think the most of the value of JSX is, right. This is a syntax. And then you can just
[00:39:53]  have completely different semantics. Yeah. Yeah, no, definitely. I'm so glad that kind of halted dead in his tracks that sometimes it's kind of funny because
[00:40:03]  people think of, you know, like the platform and having everything built in. Right. Right. And there's benefit there, but there's also benefit for an ext
[00:40:10] ensible thing that build tools can tag onto. Like JSX is a standard, but it's a standard for syntax and compilation. It's not a standard for output. And
[00:40:19]  I think that's amazing because it means all the. Like tooling can be shared, like from like syntax highlighters and prettier and all that stuff, but then we can
[00:40:26]  do different stuff with it. If you, if you tried to standardize it, like the output, then suddenly you lose that because you can't use it for other things
[00:40:33] . And now you have to build another, you need another JSX. So I I'm very happy. And I mean, and it, yeah, and there's,
[00:40:40]  there's always a lot of confusion about like what quick does. And I am trying to keep the focus a lot on quick city, but I just want to grab this one
[00:40:47]  while it's here, because I think there's a lot of confusion between. And I actually, I was planning to do it on this week in JavaScript. I didn
[00:40:54] 't get into it where I was going to like, just play like a game where I just bucket technologies into like different categories on hydration. So people could understand. Cause if
[00:41:02]  everyone's read my stuff, I break hydration into three characteristics, partial, progressive and resumable. And then I just, I was like, there's so many technologies
[00:41:11] . You can just play a game of slotting them into the respective buckets. And I just saw this question because people, you know, ask about web components, declare a
[00:41:18]  shadow and partial hydration stuff. Like technically web components don't actually do partial hydration. That's not actually like you, you can hydrate a web component and you could
[00:41:29]  use that. Yes. You could use that as your entry point, but I think like you, that is one applicable thing. You can also client side render. Now that
[00:41:38]  we have the declarative shadow DOM, but I mean, it's interesting because you still need a framework on the backend to handle the multiple component instances if they're going to
[00:41:45]  render on the server. But if we move on from that, I think what's interesting about quick or Marco is that it's not just islands. It's not just
[00:41:54]  like, here's a component with some JavaScript because component seems like a reasonable level of, uh, abstraction. You it's just a piece that reruns or whatever, but
[00:42:03]  what we're seeing with quick. And with the new stuff, Marco is we're talking sub components components, aren't even the vehicle. We're talking about that much
[00:42:11] . I mean, to be fair, I believe there's still a VDOM with components and quick, but that's not the way we talk about quick. Even we
[00:42:16]  talk about splitting things into the events from the logic. And when you, when you do an action, it just triggers a signal. Like we were talking about it in
[00:42:25]  a way that is not actually about components. It's about. It's about it. It's more similar to going back to like J not even jQuery, cause j
[00:42:36] Query did a lot of inner HTML, but think along those lines where you're just pinpointing pieces, like just little parts of the DOM all over the place. And
[00:42:46]  making those things happen rather than any kind of component model. So even web components aren't necessarily as granular and well, we haven't seen this in practice yet. I I
[00:42:57] 've shown it on stream with Marco. Like it's, it's a, it's a, it's a, it's incredible. Um, how small the, the
[00:43:04]  compilation can be fee and how small the run time can be when you have this knowledge of how the whole app. Or how like essentially which parts are static or which parts
[00:43:16]  are dynamic that goes beyond what the developer can denote themselves. Cause islands, um, are going to be bigger generally than what we can do. Um, and while, as
[00:43:26]  I said, using platform pieces are great. Um, and, uh, we leverage them a lot. Um, there there's a, when you kind of step back from
[00:43:34]  it and look at the abstractions and stuff, you can, there's always so much more you can, you can do. So like, like, I guess one
[00:43:39]  of the biggest differences, if you think of things like components generally, you actually hydrate them because they're a component that runs. If you, if you actually can break
[00:43:50]  it up smaller, then there's, there's no, the running piece can be broken down granularly to only perhaps the thing that changes. And once you get it
[00:44:00]  that small to the thing that changes, well, then it's, it's actually a lot safer to make the assumption that the initial state. You know, doesn't need
[00:44:09]  to be refreshed to begin with, because you don't need to create all the closures and all the context. I mean, Mishko has gone over this before
[00:44:16]  and other streams in great detail. You can check out my stream with Mishko actually from, uh, I guess back in, was it February? Great on this topic
[00:44:24] , but I just, I think it's important to understand that, um, this is, this is like a completely different level than what you're getting with any kind of
[00:44:32]  component architecture. Yeah. And I think it's also tough to judge and with starters and hello world examples because it, uh, you know, all everybody's hello world
[00:44:42]  example is extremely fast. Um, no matter what you do is just, as things scale, as things get to be a massive size, the more you're going to add
[00:44:49]  more components. That's just part of how, how it's going to be. Um, and that's the big difference between quick is that like the start of time is
[00:44:56]  going to be identical, whether you have a hundred components or one component on that page. Um, and I think one of the best examples that I like to think of
[00:45:04]  is imagine a product page, a product page has an add to cart button. Um, so everything is static server side rendered. All the HTML CSS is everything is in place
[00:45:13] . When you click the add to cart button, we don't have to download the whole page component. Whatever that add to cart button did is the only bit of JavaScript that
[00:45:22]  needs to run. We don't actually have to render. We don't download the rendering code. We don't download the rendering code to realize we don't have to do
[00:45:27]  it. There is absolutely, we knew not to get any of that code. We only knew to run the add to cart logic, which could have been just a little
[00:45:33]  bit of JavaScript and then redirect you to another page. And I think that that would be very difficult to pull off with in a traditional component architecture of something like web components,
[00:45:43]  which have certainly have their place, uh, in, in the web development environment. But if you think of how to do that with a web component, you would have
[00:45:49]  to download that entire class and that entire class would have many, many different listeners that you'd have to pull in regardless if you're going to use them or not. And
[00:45:56]  that's, that's one different that's able to, to make a difference. I think also one, one kind of, um, to the level that also Ryan
[00:46:01]  was mentioned about the components, right? Like when you interact with a, let's say with a car button, right? And what might be here, but then actually the
[00:46:12] , the counter or whatever, like gets updated and reflects the amount of items may be in a different part of the page. Right. Uh, maybe quick can actually ded
[00:46:23] uce that that click on the, on the, on the button component doesn't need to download the button component rendering, right? Just needs to handle the units to get the
[00:46:38]  click handler. That doesn't mutate the button, right? It doesn't need to, it doesn't need to download the whole button. You just need to run all
[00:46:44]  that. And then he knows that that is going to mutate some other state. And that information is known at SSR times. So all the prefetching and
[00:46:53]  all, everything is there already. So it's not like, it's not going to be like a cascade of things as it happens. Right. And, um, and
[00:47:00]  with the island, you have, they're literally islands, right? This is a, the name almost describes the problem in a way where you have two different things. And
[00:47:10]  there are like islands, right? Like if you interact with something nested inside the island, you have to wake up the whole island. Like it's not something that
[00:47:18]  you can just say, I want this little piece. Right. And, and it's, you could try to, I think also the problem is that as application get more
[00:47:27]  and more complex, the time developer needs to put into actually optimizing, even if it's just optimizing the islands. It's a lot, or it gets, it turns out
[00:47:36]  to be a lot of time to optimize all these things. Yeah. And that's something that presumably frameworks like Marco or in this case, there is, that does not
[00:47:45] , doesn't just, it doesn't happen. Right. Right. And I, I, I, that's, that's where my interest is admittedly, because I
[00:47:50]  think there's, as I've talked about before, cause there's lots of different buckets. The, the commonality from my perspective, and it would be my perspective
[00:47:56] , obviously, because this is like, you guys all know that I wrote solid. So obviously I have my perspective is the, the, the departure from components from a runtime
[00:48:04]  perspective. Um, generally like they're very important to organize our mind kind of, uh, kind of mangling a Rich Harris quote, but like, that's what
[00:48:16]  they're there for to organize our mind or, you know, or, or, but not necessarily like change how our code, our code behaves. And I think,
[00:48:24]  I think that's the commonality here. If you want to look at, um, if what Marco or quicker doing, or even if you want to pull in commonality
[00:48:31]  of progression, if you looking water, things that don't maybe have resumability. They put things like solid, or even, even directions that are happening in, uh
[00:48:41] , stealth or, or, uh, preact or react and stuff. And we'll talk about this more in this week in JavaScript, but you, if you're just
[00:48:48]  looking at the general trend, the general trend is breaking things down smaller than components. And actually, and, and, and even though components are a great tool for author
[00:48:57] ing, they might not actually be the best tool for, um, the runtime we can, we can do better. That's essentially. That's that's, that's
[00:49:06]  my take. Right. If I'm, if I'm looking really broad, I think resumability is one of the coolest applications of this approach. And obviously it's
[00:49:13]  very much captured my interest. Right. Um, okay. it's quite better than solid. Uh, we're gonna, we're gonna, we're gonna, I
[00:49:25] 'm not even gonna entertain that question right now. Um, so let's, let's, uh, let's, let's get into the app because, uh, yeah
[00:49:34] , let's, we, we saw, we did this thing. So I'm, I wanna get started with quick city let's, let's actually, um,
[00:49:42]  look at what this beautiful starter has laid out in front of us here. Um, I'm coming into the package. I see my V config. This looks familiar.
[00:49:50]  I see my Netlify Toml. This is all pre set up for me, some ES length rules, everything. So we're all good to go. And I
[00:49:56]  opened this, I see a public folder, which has, you know, what I'd expect some fav icons and logos and stuff. But what I wanna see here is I
[00:50:03]  opened the source folder and I have a routes folder and a components folder. And then I have an entry dev, entry Netlify, entry SSR, and a root
[00:50:11]  CSX and global CS. This, this all looks very familiar. Having looked at about a half a dozen meta frameworks on the stream before everyone with me should be pretty
[00:50:20] , uh, pretty, uh, uh, you know, pretty much, uh, you know, seen these patterns before, but I, I wanna open up and take a
[00:50:30]  little peek here. So root TSX is yes. HTML head body. So right now we've got something very simple, which is body. and I'm gathering body
[00:50:39]  is a, is a, is a, is basically a nod to whatever these entry points are. Um, well actually in this case, so head and body are actually the
[00:50:49]  user's components. So if you see where they're imported on line two and three. Wow. So this is kind of just a starter pattern. Like you can, you
[00:50:57]  know, like I, I think why I started with it like this is so that there's gonna be a case where you're gonna have some sort of state and you wanna
[00:51:03]  change the class, like a dark mode or light mode on the body. That just, this kind of gives you a good starting point for that. Um, but certainly
[00:51:11]  that root component can be written. However, the developer wants to do it. Um, the only other thing that's separate from, or that is special here is line eight
[00:51:20]  is the content component, which does come from quick city. And that's the one that gets built up of the hierarchy from what route you're in. Yeah. So
[00:51:28]  the body component is kind of like a, a chance to say, Oh, I want to inject, imagine some, um, global state, like some context. I want
[00:51:37]  to pass down and I want all everything anywhere to be able to access this. It can be like what Adam said, like the tackle, right? Like something you want
[00:51:46]  to, or the user is logging or not. It's like a good chance to just create this. Right. And declare it has a context. So that, that
[00:51:53]  will be kind of a good component to do that. Right. Um, I'm going to go ahead in a minute, but just so I can see on body. I
[00:52:00]  knew there was gonna be an entry point. It's content then that entry point that I was talking about. Um, is, is that the thing that signals the entry
[00:52:09]  thing? Really? Uh, HTML is if you go to the root, um, file again. Yeah. The HTML component is a quick city component. And that's really
[00:52:20]  the majority of the guts of the runtime of quick city is inside of HTML. And that's the one that is able to, um, understand the loop through the, um
[00:52:29] , array of regexes to say, okay, which components match this person. And then the content, uh, component that we already looked at, that's the
[00:52:36]  one. That's just like, just a for loop of like, let's stack them together. Yeah. Yeah. Yeah. Okay. But it's, it's the
[00:52:43]  outlet or whatever using the other term, right? It's like, I want to. Outlet, slot, children. Yeah. You name it. Okay. Yeah.
[00:52:52]  Okay. Yeah. I see. Cause these entries are actually calling root. Um, and then yeah. Yeah. I was looking for the outlet. Uh, that that's
[00:52:59] , that's, that's the, that's the one right there. And another thing we, we put a lot of effort into is, is, uh, it's
[00:53:03]  entitled. Is, uh, it's entirely a V plugin. So, uh, quick itself has a V plugin and then quick city has a V plugin. So we
[00:53:09]  made sure that we kind of didn't want to write another, yet another CLI. Um, you know, for us to maintain. And so, uh, it
[00:53:16]  was a pretty good decision. It, you know, it's also because of the whole V plugin community, uh, that we're able to leverage too. Whereas, uh
[00:53:23] , in the past, having to support stylus and then less and, you know, all the different like preprocessors and how's that going to work and how's
[00:53:29]  this. So it's kind of fun to step back and let V do the work. It is a smart move. I see the funny thing is, uh, when
[00:53:35]  I started solid start, I'd started right there because I was like, I don't even want to make a meta framework. Like I was just like, I don't
[00:53:41]  want to leverage as much as V, but you know, what's happened over time. I think others have seen that obviously you guys just start on this more recently.
[00:53:47]  So it was, I think it was pretty obvious when you walk in, you're just like, wow, V does everything. Yeah. But SvelteKit just made
[00:53:54]  this move about a week or two ago. So SvelteKit is actually moving to just being a V plugin as well. Um, so yeah, I think that's
[00:54:00]  the trend here. I, I, I, I, I was, I talked about this a bit last stream. Um, but when that was brought to my attention,
[00:54:09]  but yeah, I think, I think V has really done a good job of positioning us or even just showing us what's possible when you have. Uh, such a
[00:54:16]  good d bundler development environment, all in one, you know, in a sense, even though it doesn't do every, everything like in the, you know, the
[00:54:25]  way that I don't know if you guys remember Rome or whatever was promised on the react ecosystem. Yeah. It has kind of. Created with the help of the plugin
[00:54:32]  system, which I think was inspired by, uh, Jason Miller and his work with HMR, the universal plugin system. Um, it essentially has now become that platform where
[00:54:41]  you can just bring in what you want. Uh, we solid start now literally is just, uh, it's all in one repo right now, but it is a
[00:54:50]  collection of V plugins. Like just like, uh, a series of. Yeah. There is a small, there is a small detail to the community in the byte config.
[00:54:58]  Um, somewhat like the problem with the routes and the MDX is that if you want to, from a route to reference a component, it becomes this dot dot dot
[00:55:09]  slash dot dot dot slash component. Right. And there was this, someone this build this byte plugin, which is, it takes the TS config paths. Yeah. You know
[00:55:20] , where you can like, and applies to byte. And I was actually thinking to implement this in the byte. And if you're like, no, let's actually,
[00:55:26]  it's actually a feature we can use that plugin for the community. Right. And it's not. You didn't have to write it yourself. Even though we like
[00:55:33] , I mean, we go from a stencil time and we like to not have dependencies. But the thing in this time was like, it's a good move that it works
[00:55:39] . Like it's a, it's a good thing. It works. Yeah. Definitely. Um, yeah, let's move a little forward in the examples. There
[00:55:46] 's a question about the host. Um, I think I've seen this before. This is, this, this makes you think web components, but I'm gathering. If
[00:55:52]  you noticed one thing interesting about the components here is that they have a tag name, so you can actually alias them to a specific HTML element. And I guess the host
[00:56:02]  is the way of interacting with that, like styling the, the body itself. Is that correct? Yes. Yes. And it's, it's kind of like a
[00:56:11]  fragment, right? Um, so, so, so you could use a fragment instead. So you can just remove host, but it's a fragment with the, with what
[00:56:18]  you said, with the extra abilities to control the, the host. Okay. And then let's look next at the head. Cause that was the other interesting part. So
[00:56:27]  here we have a fragment and we have a bunch of meta tags, and then we're just mapping over this and we're use document head. Okay. So I'm
[00:56:37]  gathering this is your meta injection pattern coming out on this side. Like this is, this is how you serialize it out and you're showing how that happens. I guess
[00:56:47]  we'll have to see somewhere else how you're actually setting it. Right? Yeah. Let's see in this example. So maybe go to, or go to the
[00:56:55]  routes. Okay. Um, and let's maybe just, just index TSX. So there's the, there's a head, uh, export there, which could be
[00:57:05]  a static object or it could be a function. Um, and that function is passed in the, the previous, uh, resolved head. So, so at the lowest
[00:57:15]  level, I set the title, then the next layout can decide to change the title a little bit and next level can change the title a little bit. So it kind of
[00:57:21]  works that way where they, they kind of can resolve up. And, and this is something that I think it's somewhat familiar, um, for developments. Yeah.
[00:57:28]  Yeah. And, and I wanted to make sure that, um, it's outside of the render because again, you know, back to the question about streaming, HP streaming
[00:57:36] , we want to be able to render that head as fast as possible. We don't want to have to render the entire application and then start to actually add the, the
[00:57:44]  head component to the beginning of the string. And so, um, separating that out, not having a head component inside of the render made a, made the biggest difference in
[00:57:53] , in allowing that streaming to be easier. Um, but then that is what sets the, the use head, uh, function use document head function. And then if
[00:58:03]  you go back to the, the head component that again, that's the user's component. You could as preform do whatever you want inside of that component, um,
[00:58:11]  set your meta tags. However you, you choose to do that. It's just that you could be able to gather what you've learned from all the other, um,
[00:58:17]  the layouts, the hierarchy of layouts, uh, components. Yeah. Yeah. I, I, I've seen this pattern now at least once before this is re I,
[00:58:24]  I, I, I've been looking at how the different meta frameworks influence and inspire each other. This one, I, I think remix is when, where I first
[00:58:30]  saw it. Yeah. Absolutely. Yeah. Yeah. this is, we're heavily inspired by, you know, Svelte kit remix, uh, next GS.
[00:58:39]  And then even next GS is latest RSP RFC proposal for their layouts. Yeah. I'd say those are kind of the four most influential of how we have it.
[00:58:48]  And in my opinion, you know, taking a lot of the, a lot of the good ideas, a lot of inspiration from those frameworks. Um, this one was
[00:58:53] , is, is certainly from remix of how that works. Cool. Cool. Yeah. Okay. And then, yeah, then the rest of it's all your stuff and
[00:59:02]  then social and analytics. Okay. These are just other components. Yeah. Yeah. Okay. Yeah. Yeah. Okay. Yeah. Some custom script tags or analytics and
[00:59:14]  all that fun stuff. Um, out of curiosity, I, I forget if I saw that in an option is, is party town. Like, uh, does it get
[00:59:22]  packaged into this stuff sometimes? Not yet. That's, it's somewhat of an easy thing for us to do. It just hasn't been done with those things.
[00:59:30]  Um, but yeah, I think we can easily make that like kind of, uh, um, um, out of the box works type thing. Set it up for them
[00:59:37] . Okay, cool. Okay. I think I'm okay on that part for now. Let's, let's look at an actual route and layout and understand what's,
[00:59:44]  what's going on. So we, we, we, we have our content that's our insertion port and it goes, okay. I've matched against slash. Um
[00:59:52] , so I go to index, but actually index has a layout. So layout tells me that I want a header and then, uh, quick uses slot based API,
[01:00:01]  I guess. Uh, yes. And, and then footer and then the header and footer are going to be from our components folder that I was just in probably,
[01:00:12]  um, head header. And then these have their own CSS and this is used styles, which I guess is your way of importing them for a specific component and lazy loading them
[01:00:22] . it's got a dollar sign. And then this is basically, yeah, this is our pattern where we have all our anchor tags. Um, as you can see
[01:00:31] , these are all just plain anchors, no, no link tag or anything. This is just, um, generated using, um, the location from the router. Um
[01:00:40] , for the, I guess the, for, for matching against to figure out what the, the active classes. Gotcha. Gotcha. Okay. And then, yep.
[01:00:50]  Okay. And this is tag name header. And sorry, I'm just going to talk out loud right now. I kind of work through this. I'm gathering footer
[01:00:55]  is going to be pretty much the same thing, except it's customer links. And then if we kind of go through this, we have a main section and our,
[01:01:04]  we're going to slot in our content and our content is going to be based on, if I remember, it's gonna be any of these ones. So if we're
[01:01:11]  index, um, it's, I mean, I can say this layout applies to the whole shebang. Yeah. So everybody underneath that, um, directory is going
[01:01:21]  to get that header and footer. Um, with one, one catch, I think this example has an open up, uh, dashboard or maybe it's docs, open
[01:01:31]  up docs. You see how this layout has an exclamation point at the end. Yeah. Um, that's, that's where there's a scenario of like, you
[01:01:38]  actually don't want to keep crawling up. You want to stop at this layout and use only this one. Don't use the higher one. And that's because in
[01:01:45]  this scenario for this app, the, the docs app, we want it to be full screen and it has slightly different, uh, how the scrolling bars work, how the
[01:01:54]  structure of the left menu stays put, the footer goes inside the scrollable area. So there's, it's just different enough that we really can't just always use
[01:02:01]  that every single one at the top. And so. Reminds me of, um, important. Yes. Yeah, it does. I get that. Yes.
[01:02:12]  Yes. It's very important layout. And so, so, so we added that as like, uh, cause I certainly needed that for our doc site for those reasons.
[01:02:20]  And then also for like the, the repl and the playground have slightly different layouts that we can't just use everyone in the hierarchy. Okay. Um, that's why that
[01:02:27]  was added. No, that's cool. And it's a real use case. It's good to have these kinds of considerations, uh, in mind when kind of putting
[01:02:33]  these together. And I, I love that it's actually in the example, this, these are sometimes like the little tricks that don't always get documented right away.
[01:02:40]  Cause people aren't like, like they're like kind of edgy, edge cases. And you're just like adding these features as you need them. And then you're
[01:02:45]  like, kind of come back and go, Oh crap. I forgot to document this. It's awesome. That it's an example. Right. And this is actually the
[01:02:52]  test app that we, um, so that just to tell you like the amount of like, uh, what we should put to make a good start is it was like
[01:03:01]  the test app to develop all these features and we cannot took it and put it there. Okay. So, um, I, okay. I I've seen enough for now
[01:03:09] . I've, I mean, going through the thing we will go come back here, but I just want to run the thing. I want to like actually see it working
[01:03:14] , right? Like let's just, let's just. NPM start. NPM start. Okay. Or NPM dev or NPM run dev isn't, is
[01:03:22]  it start? It's the same. Yeah. Okay. All right. So I am beat three. I can tell already cause the port has changed and I'm going
[01:03:33]  to need to. Why did I do that? Uh, they said there's, there's an issue with, uh, port. Yeah. I, I saw it on
[01:03:40]  Twitter actually. There was an issue with using port. Um, it's funny. Yeah. It's almost the same. It's the same blue and stuff. There is
[01:03:47]  an issue with using port port port 5,000 is blocked on max period now. And port 3000. I, I think they were worried about just conflict. So they
[01:03:55]  decided to just. Go pick a different port. Okay. The most updated port basically, no, like the one you can remember. Yeah. Nice. Nice. So I
[01:04:05] , I am, I am, I am, I am clicking around this app, which looks very much like a react app. And there's the doc site where we saw
[01:04:12]  with the layout completely switched. Um, and I'm just, I mean, I'm in dev mode right now. So this is completely not fair. So actually no
[01:04:18] , I, there's no point even looking at this in dev node. I V will load everything. I was, I just click. I will, we'll go there
[01:04:24]  in a, in a, in a bit, but essentially you, you're just using this app and you wrote it and you're not really thinking about client server. Okay
[01:04:32] . That was an interesting API. You can grab the data directly. Oh, that's cool. Okay. That's it. That's the data endpoints. Actually
[01:04:39] . Actually. Um, Ryan, if you go to the dev tool and you filter, um, Vite, cause there is used to find you, um, I think
[01:04:48]  you should do, you should find like only like two things. Yeah. Let's, let's, let's, let's reload the page and see what you have here
[01:04:55] . Yeah. Cause. Yeah. These two are the, um, Vite, uh, live reloading thing. So it's not part of the. Right. Right
[01:05:05] . Yeah. They're just thing. And then as we move around, uh, these are MBAs. You see the, you see the flicker like the,
[01:05:11]  on the, on the dev tool side. And then. Yeah. If we let's go to a page that has a little bit of extra something. These are, are
[01:05:18]  these preload scripts? Let me look at this. I don't think dev mode will be doing preload. Oh, right. Okay. So yeah, this is just
[01:05:25]  the client effects. These are the, the, the separate bundle pieces. Yeah. And, and I should say the products page is purposely has a, uh, a time
[01:05:34] out that makes it a little bit slower. Um, and that's the test out the, the, like, if this was downloading from a database information and. Yeah
[01:05:43] . Let's, let's look at the products page for a second. I want to, I want to understand what's going on. We haven't, that's
[01:05:47]  the one pattern we haven't seen. Like this stuff is all familiar to me, but what I haven't seen is this use endpoint. Um, what is, what is
[01:05:56]  use endpoint? Is this in. Sure. Yeah. It's, it's probably most similar to, uh, remixes like loader and actions is if, if,
[01:06:05]  if, if you're familiar with that, that's probably, um, similar to that. But I'd almost say like the, our approach was even lower than that
[01:06:11] , where it's like, uh, on get request, you know, load this data. And then you can, uh, within the quick component, you can use endpoint
[01:06:18]  and it's gonna be that data. Right. But you're also in the on get, you have the opportunity to, you know, do a 301 redirect,
[01:06:25]  do a 404. Add headers, um, you know, aboard it. So you have all these same options that you would at, at kind of the server level.
[01:06:31]  Um, and so that kind of gives, it's what I feel is, is the best of both worlds where it's somewhat like Ruby on rails, right? Where you
[01:06:38] 're able to have kind of this rest architecture, provide, uh, you know, a post handler and a get handler. And then this page should be actually 301 redirect
[01:06:47] ed to another location. Um, or the data that's returned can now can be loaded inside of the component. And so you have a single file that's able to
[01:06:54]  do both the server side and client side. That can be all types, strongly typed, uh, across the two of each other. Um, but you don't really have
[01:07:01]  to think server and client at all. Interesting. It's, um, under the hood is a use resource. So it's like create resource and it does a fetch.
[01:07:11]  So in the, in the client, it will do a fetch, right? To, to an actual M create resources. Sounds familiar. Yeah. In the SSR
[01:07:18] , it will do an actual, it will just call the function, right? So it's just kind of like, um, yeah. It's like a, like a
[01:07:25]  abstraction around, uh, a fetch. Okay. I'm, I'm seeing it. I'm seeing it now. Cause okay. So this, the, the endpoints
[01:07:32]  get registered for the route. So when the route matches partial, you know, to call the gets and generate the data on the server render. The data gets exposed.
[01:07:41]  This is like use route data from remix or solid starter, the same kind of pattern there. And then you get to resource. And then the, the, the,
[01:07:48]  there's one other piece of the puzzle usually, which is if you've got your data now, what I like about this one. Right. If I'm seeing off the
[01:07:55]  bat here. Is. I, I'm not sure if it's blocking or not, but I'm gathering it's not blocking. Cause. Um, but is because
[01:08:03]  there's the other component here. And my guess is this resource component is basically the same as the Svelte's await tag or Marco's await tag essentially. And it
[01:08:15] 's basically meant to be the equivalent to suspense, uh, more or less. Uh, because what I'm seeing is I see a resource get fed into it. I
[01:08:24] 'm seeing a loading state and I'm seeing like a, a, a then state that, as I said, it really reminds me of a Svelte's await and
[01:08:31]  Marco's await tag. Um, but I'm, I'm gathering this to the piece, cause this lets you basically control flow using the resource as a driver. Um,
[01:08:38]  and yeah, I've got this right. Right. So, um, I, I always still think that it's, uh, an abstraction for developers, but it doesn
[01:08:48] 't do any magic. Like you could, you could go to the host and say, uh, resource dot state equal pending. Then you render something. Right. And
[01:08:59]  then you do the state equal resolve. And then you do the, the thing with the resource object is that it handled, it has a bit of, uh, it's
[01:09:07]  a bit smart in the SSR. For example, this is sorry. It says, I don't care about the pending. So I'm not going to do like
[01:09:13] , uh, uh, I'm not going to render the pending state. Right. I can just wait for the actual, um, resolve state, for example. Right.
[01:09:24]  It has some internal implementation that make it nice, but you could just take the resource. And if you check, uh, the, the signature of the resource is just
[01:09:32] , uh, a promise and a state that you can use, um, just like any other story. In fact, uh, it's a store. So it's like
[01:09:39]  a reactive object. Right. So it's, it's, it's kind of, it's kind of ties in the question that someone asked a minute ago. Cause
[01:09:47]  I was trying to get, get, get to this was they were asking, uh, what the invalidation process looks like. Cause like, if you have an end point
[01:09:54]  and then is, is there like a way to like, when you mutate, let's say post against something. Uh, can you get it to like, does it
[01:10:01]  refetch? I guess the thing is right now with an MPA router, um, it does, because if it, I guess it depends on how you do the post
[01:10:10] . But if you are actually doing a full page post, then it will refetch because it will revender on the server. I, I, I guess the question
[01:10:17]  is might not be in this example, but is there any primitive, like you mentioned, you can use like an on post here. Um, is that like, is there
[01:10:26]  any, yeah. Is there any mechanism on top of that in terms of, uh, I guess people are asking the equivalent of remixes actions is sort of where I think
[01:10:35]  the mindset question is coming from. So, um, so if you mean like if it was client side only, so like the first SSR, we got the data
[01:10:41] , we rendered the data and then we want to stay client side and the on get changes. So yes, like that is the, the same code, same identical code
[01:10:50]  that we're looking at. If you click, let's say a different product ID and it was, we wanted to stay at SPA, it'd be able to ref
[01:10:58] etch at the exact same URL. Um, and that's pretty similar to how Svelte does it with your accept header. But the, it's the, the
[01:11:06]  other way around, uh, or the, the, we are on the same product and you're editing the product name and then are the product details or something. And you
[01:11:14]  want to, so you're doing a mutation and then you want to reload the data. Like, is there any built in or any mechanism around that? Cause like in
[01:11:21]  remix, if you do a mutation, the whole page ref data refreshes. Um, that's just how they do it. They, they pretend like you're doing like
[01:11:28]  a full page post. That's just their, their mechanism that's built in. And I was kind of curious if there's, if there's any thought to actions,
[01:11:34]  like obviously if we do an actual post, it'll do that. But I was wondering if there was any, um, client side consideration on that side yet. Yeah
[01:11:43] . You want to cover that Manu? Do you know the answer to that? So I don't think we have that yet. Like, I don't think it's
[01:11:49]  so, so use endpoint right now. If it depends on the path name, that's kind of the, it's like a watch kind of is the point in the path
[01:11:57]  name. Uh, the things it can depend on can be more, it can be anything, right? So we haven't, uh, covered that case, but I
[01:12:05]  don't see any reasons, uh, that we could not do it. Yeah. Makes sense. Yeah. No. And especially if you've looked at this app, this
[01:12:13]  is very, um, initially very MPA centric. So like, there's like completely no need for that pattern because MPA will just like, that's just how
[01:12:23]  an MPA works. Like it just, it just, it just works. Um, so, um, but yeah, that's interesting as we get into more hybrid territory
[01:12:30]  between where those lines blur. Um, okay, cool. Um, okay. So this is good. Yeah. This is the other piece I was missing. Cause now
[01:12:37]  I have all three pieces that I need to, to, to, uh, to move my, my hacker news demo across, I think, unless there's something else.
[01:12:46]  I wanted to see how to fetch like this. I wanted to see how to do the layouts, I think. And I wanted to, I guess the question is, can
[01:12:55]  layouts also have on get like, or, or. Um, yes. And at this time that can handle like changing the response. So let's say that the highest
[01:13:04]  level, highest layout wanted to do authentication. It could redirect you to the correct page or. Nice. So that logic is inside of there. As far as the action side
[01:13:11]  of things, that's not, that's not part of it yet. Um, but I do have to apologize. I actually have to take off right now. So
[01:13:18]  thanks. Thanks for having me. I think Manu can absolutely take it from here. So, so thanks again for having me online. Thank you, Adam so much.
[01:13:25]  Uh, your insight has been very valuable. Thank you. All right. We'll see you. Yeah. So the question, uh, we, we want to make sure
[01:13:34]  that you can have the own get and you can use endpoint. So the same use endpoint in every, uh, layout and you will get only the data from your own
[01:13:44]  get. Uh, but it's not something, uh, right now it's only the previous one. So we want to make sure that layouts have exactly the same API as
[01:13:53]  the final page. There is not any difference between a layout and a page. Exactly the same API, but right now you can only mutate the headers and the state
[01:14:02] . Okay. Okay. Well, let's, let's, let's now turn our attention then. And I said entry Netlify, entry dev, all this stuff
[01:14:08] . I doubt I'm going to have to touch here, but I'm, I'm, I'm in the, in, cause I, if I was on my own
[01:14:14] , I'd probably try and keep references and figure out the stuff because I got you here. So I'm just gonna gut everything and we're gonna, we're just gonna
[01:14:21]  try and see if we can make, like make some stuff work here. Um, so I guess the only thing I wanna keep is. Yeah. I don't know
[01:14:29] . This API is for actual for API routes. I'm gathering. Yeah. I get to, if you haven't, if you have an on get on its own in
[01:14:37]  its own file, it's, it'll know how to handle that properly. So that's, that's, that's cool. There's interesting. It's a layout
[01:14:43]  for. Oh, interest. Okay. Cause there's also. Yeah. I see. Cause there's actually a page and then there's. There are names. name
[01:14:53]  layouts, uh, which they have their use case. Um, right. Uh, so you can say instead of, yeah, instead of using the whole, instead of using
[01:15:02]  the whole nested, I want to use this layout. And, uh, and the way you do it, it's like naming the layouts and then using that. This
[01:15:09]  is a very similar syntax with spelled. Very, very, very, very, very, very, very, very cool. Okay. Um, yeah. Yeah. Cause
[01:15:18]  I was like, I was looking at this and I was focusing on this, but actually this is like a hybrid page where you have like actual JSON next to TSX.
[01:15:26]  And then you have these layouts that apply just to this one. Okay. This is. Yeah. Originally the endpoints were kind of like difference, right? We want
[01:15:34]  to keep the endpoints and then pages, and then we kind of realize that they are part of the same thing. Right. And you can kind of combine it with the
[01:15:41]  use endpoint to get data. that was kind of the, the recent. Okay. So let's think now. Okay. So, um, yeah, I, I
[01:15:50]  want to just, now that we have a router, so this is going to be a little bit more work. Uh, I got to think about this for a second,
[01:15:58]  but let's, let's, let's, let's, let's move on to, um, I'm just gonna throw up a banner here. Uh, migrating
[01:16:04] . Are. Is I, I just want to, I want to do this stuff and thing. Let's, let's try migrating or hacking use demo. I
[01:16:14]  built it with on stream. Like in February, I tried to update it kind of got in a middle ground. I think a lot has changed, but I think I can
[01:16:22]  still, uh, probably grab the guts and move it on. And luckily for me, I have. Uh, I, I have it, my old version ready. This
[01:16:32]  is this. This, the only problem with this old version is it is not very well structured and we're gonna have to break this out into, into, into routes
[01:16:41]  and pages. Cause I, I was not handling this very, very nicely. The funniest thing is I, part of me even wonders. Um, uh, if, if
[01:16:49] , uh, yeah, if, yeah, let's, let's just do a piece by piece. For the most parts to the work. Yeah. Yeah. The
[01:17:01]  only thing was I was doing a really hacky custom routing solution. So kind of what I wanna do is I kinda just wanna like delete the whole routes folder and just start
[01:17:09]  back at index. Um, because that's where we're, we're going. And then, um, I'm probably not gonna be using any of this advanced stuff.
[01:17:17]  So I only need the body and the head if I, if I am correct. Uh, I think the header was, the header, um, is valuable, but
[01:17:28]  the header comes in. Where did the header come in? Was it was. I think it's the, the root layout, uh, put it, puts it in the
[01:17:35]  top. I think that's, uh, the. Uh, the header and then the, it was at the head that did the, the head did not do this
[01:17:43] . The, the, the right layout. I think you remove the layout. Uh, from goods. Uh, yes. Yeah. That was one of the ones I wanted
[01:17:51] , I wanted to keep, uh, uh, which is unfortunate. Why did I, why did I remove the layout? Sneaky. Sneaky. I got it
[01:18:00]  back. Let me, let me. I got it back. I got it. Cool. Yeah. It doesn't bring back folders, but it brings back files. Okay
[01:18:07] . So now we, okay. Beautiful. So, um, I, I'm gonna keep this for the most part, cause I think this fits our, our pattern.
[01:18:15]  Um, I don't know about putting the main on the slot, but I think we don't have a footer. So I'll give her the footer, but
[01:18:20]  essentially this, this is, this is what we want. So I'm gonna try and keep as much of this structure as we can, as we kind of. work
[01:18:28]  our way through this. So we have head header. We don't need menu. Okay. So hopefully this just, um, doesn't. Okay. Right. It wants
[01:18:41]  footer. Yeah. Let me get rid of that. Yeah. Let's, let's see that if this just at least run still. Okay. Um, what am
[01:18:48]  I missing? Do, do, do, do, do. Cause I probably deleted something that I shouldn't have. Um, missing quick cities. Yeah. Yeah.
[01:18:59]  Sorry. What'd you say? Um, okay. Or maybe, can you check the indexed or the, okay. Or the, one of the hairs, maybe the
[01:19:10]  hairs does something. Let's see. Yeah, you're right. I probably, this is, this is, this is one of those things where like, I like
[01:19:23]  the head component, like I'm probably deleting stuff that actually is used. Um, but yeah. Okay. Body content content. Okay. We're getting there. Okay
[01:19:39] . This is always fun when you're, when you kind of go too far, um, the other way, but I was hoping that I could just, yeah, I
[01:19:52]  think layout looks fine. So we have a header. We have a slot. That slot is going to be this index, which has nothing special to it. We have
[01:20:00]  not touched root, which has head and body, head and body have content. And then head is here. I am not using anything special. Do, do, do,
[01:20:12]  do, do, do. Just remove other extraneous stuff that we're not using. Okay. So head, head, head. It's a bad time for Adam
[01:20:22]  to have leave, have left. Yeah. Yeah. Yeah. Yeah. This is always, this is always the fun part. Cause you kind of, you kind of get
[01:20:34]  to a point and you're just like, ah, this is why I wanted to check that it actually built first for it kind of moved on. Um, cause this
[01:20:44]  looks like missing quick city user context. Can you check? So, so this kind of feels like, so the HTML component, the HTML components for quick is from quick.
[01:21:04]  Right. Yeah. So it's from quick city. So, um, the crush is coming from there. Um, one thing I can, I mean, we can
[01:21:15] , I could try and restoring a bunch of stuff and then deleting it out, but it just, I, I think, you know, what are we missing? Is there
[01:21:25]  something in dev we're missing? No, I think we should be hitting entry SSR at this point. Entry SSR render options, render render to string.
[01:21:37]  So this is actually not too bad. Yeah. No, it doesn't look bad at all. Um, I'm trying to show a component. Yeah. Cause it's
[01:21:51] , it's funny. You're right. It's complaining from HTML component. Um, yeah. Interesting. Okay. Okay. Um, I mean, that's,
[01:22:03]  that's, that's what we were, we are running each, uh, npm run dev. Um, yeah, it's funny cause it's content. Yeah
[01:22:18] . Who's using use context. Someone's using use context and they're expecting something quick core use context. Oh, that's interesting. Interesting. Somehow I, I
[01:22:35] , can you try, can you try, can you try going to package Jason and not using the dev release? Um, so it should be there and try to put 18
[01:22:46]  at 38. So yeah, 38 or 37, one of these two, I think should be a bit more reliable. Same thing. Okay. Yeah. Let's try
[01:23:09]  37. Yeah. I mean, the other option is, um, we backtrack from, let's see here. Sorry. I didn't, I didn't,
[01:23:21]  I didn't, I didn't install that time. Hmm. Let's try that again. Okay. Yeah. So I, I've definitely, I've definitely, I
[01:23:34] 've definitely, um, I've definitely. God, that's on a, in a weird, weird, weird place. Okay. So what we're gonna do.
[01:23:45]  I, I'm going to. One thing you can try last is remove the bite. Note, you know, node modules bite. That's the only thing. Cause.
[01:23:53]  Oh, you can. Like, so, so. Yeah. Yeah. Yeah. The cash. Sometimes. Yeah. Mm. Okay. Cool. Cool. So what
[01:24:05]  we're going to do, we're going to reinstall from the beginning again. And I'm going to go with the new one again, just because I can. And
[01:24:22]  what did I call this? Quick Hacker News 2. I'm going to go with this one again, because it has all the stuff that I want. And we
[01:24:40] 're going to do this. And we're going to do that. And if everything works right, VS code should just basically have us in place. Because when I refresh this
[01:24:50] , there'll be no node modules and I'll npm install. I need to go into the directory. Sorry. Quick. And npm install. And we'll
[01:25:01]  get back to where we were. Oh, that's it. Oh, right. Force. I just have to retrace my steps. Sweet. Okay, so then
[01:25:19] . Okay, so we're here now. And then we're going to npm run dev. And this is going to work. And it's going to work wonderfully with
[01:25:29]  our example. Okay, right. And we go back. I believe it was. You know, I have a theory actually what happened. And it's such a dumb
[01:25:36]  one. I think it was trying to reach a route that doesn't exist. Because I just, you know, so I just had to navigate in the URL in the browser
[01:25:44] . I bet you it's like something stupid, like not like mishandled. Like there's no catch all error route or something. And it just like some kind
[01:25:52]  of mishandling there. Okay, now let's do this slower this time. So I'm going to delete a few of these, but I'm gonna delete
[01:26:04]  products first. And we're still good. I'm going to, I'm going to delete docs and dashboard. Ooh, it's by the same time. Yeah,
[01:26:23]  right. I think I'm pretty sure what we witnessed was just a miss. It was just the URL not I'm going to blog an API. Okay. Yeah, I
[01:26:34] 'm pretty sure that was what it was, which is fine. This is how we learn. We find places to put better error messages. And yes, okay, so we
[01:26:44] 're still good at this point. And now. Yeah. Okay, now now now this is where it gets a little bit more fun. Just leave it just just leave
[01:26:51]  it there. It distracts me. Okay, let's let's see here if we without these pages. Okay, I'm gonna I'm gonna remove about us. Okay
[01:27:00] , about us is gone. Still good. Still good. And then we're gonna go. Let's look at it. Now we're playing with fire, right?
[01:27:09]  Counter we don't need breadcrumbs. I don't think the one I don't think we need breadcrumbs. We'll see if we need breadc
[01:27:17] rumbs. Okay, let's see how that we're doing counter and breadcrumbs. Still good. Let's start and stop just to make sure that like it
[01:27:23] 's not like some cash thing. Okay, good counter breadcrumbs menu. We don't need I think. I think. All right. All right. And
[01:27:37]  then beautiful still good. And now we're back. Now we're back to getting very close to where I was before where I want to clean up the head. So I
[01:27:49]  don't need these. Yeah, this will be AC one. Yeah, so this these should just empty themselves right out. And we're still good. And then we
[01:28:01]  want to remove the footer from the body. No, not from there from the index, not from the layout. Yeah, I'm good. I'm good.
[01:28:11]  I'm good. I just I said it was the URL that I was on in the browser. I was on slash something and it was basically it was it was doing a
[01:28:23]  weird 404 basically the when you. Yeah, right. That's what I'm saying. Yeah, right. So yeah, I I realized it almost once I got
[01:28:36]  it working like oh crap. That's what I did. I I I didn't start from square one. That was my mistake. Okay. I was I was sweating here
[01:28:45]  and it's it's it's hot, but not that much now. Okay. So head head head head header. What's header header is we're going to keep header
[01:28:54] . Yeah. Okay, cool. So let's let's do a couple things here. If I have again, these are styles for the header right now. I've
[01:29:04]  got a global styles for for what I'm building. So yeah, so I'm going to just try and pull that over. So we're going to open up the good
[01:29:14]  old where is it? Here it is. So I have index.css, which is some global styles. So my guess is I'm just going to put them
[01:29:26]  in global CSS because that seems reasonable. And then what I'm going to do here is we're into our components now and this is back. It's funny. It
[01:29:37] 's funny. I built this. If you remember the very early days of quick, Mishko decided that he was going to make his example with all the components in a
[01:29:43]  single file just to show that he could because that was a that was like something that Angular, I guess, had problems with. And it was funny because I didn't
[01:29:50]  understand how stuff works. So I just copied the pattern. And, you know, obviously, I didn't need need to do that. But, you know, here we
[01:29:59]  are. So that will be the navigation that will be kind of the header. Yeah, exactly. So I'm going to actually I'm I'm going to use header
[01:30:10] . And I'm going to use your pattern with the host element and everything. So to make it more quick, like so we're going to we're going to actually just
[01:30:16]  take this out and we're going to go to header and I don't have a header CSS. So we're just going to move that to trash and that's going to
[01:30:25]  error because we are using it here, which we don't have. And that's fine. And then what I'm going to do is I'm going to replace the
[01:30:34]  contents of this with this, keep it as header and using using quick quicks host element. I'm going to go class equals header. I think if I if I understand
[01:30:46]  this properly, see class header and we have now ported the first component. And if we're lucky, we're going to see a very familiar hacker news header are coming
[01:30:58]  in now. Okay. And then yeah, so far so good. So we don't need the path name. This is just cleans itself up. Do this. And
[01:31:08]  let's let's reduce this all the way down. Awesome. Okay. And connect format this again. Oh, yeah, this is. Yeah, let's let's
[01:31:20]  just do something like this and let's hope prettier just takes care of the rest for us. Okay. Okay. Okay. Okay. There we go. I think I think
[01:31:35]  we're good. Right? Yeah, that component is a component that returns a host element like this. And our tag names are header and we've styled the host
[01:31:43]  element. Lovely. Okay. Um, head I'm gonna leave as is because I don't care enough. I mean, I guess I could do something here. Although
[01:31:53]  I guess the pattern is not to mess with this, but to do it a different way. We'll worry about that later heads like the least of my concerns. And then
[01:32:02]  let's let's talk layout. So in the, in the past, our layout would be something like, like this, the headers in here and actually there was no
[01:32:15]  layout. So, um, it's essentially the, the, the, we've already done the layout, right? That, that, that just getting the header. And
[01:32:23]  so I'm just gonna go slot slot. If I don't include host, does anyone get upset? I guess it's just a fragment. It will be okay.
[01:32:31]  Yeah. Yeah. I mean, it's just a fragment, so it's probably fine. I don't know what, why I'd use host over fragment, but let
[01:32:37] 's just, uh, I think it's, it's kind of like, don't make the choice to choose one or another, like depending on if you use it.
[01:32:44]  So you can put a fragment. Um, just, just, yeah, it's all, it's all good. Or not at all. Right. If you just return
[01:32:50]  one, you can just, um, put the element directly. Okay. Okay. The other thing I want to do, and I, I, I hope this works
[01:32:57] . We're going to try this. If, is, I want to do this. This, is this something that we have? You, Adam is expert on this
[01:33:10]  one, but let's see. Let's hope this works. Yes. Works on slash. Works on new. Yes. Beautiful. Sorry. I've tested five, six
[01:33:22]  meta frameworks. Only like two of them actually handle this properly. So, uh, or three of them. So you, you, you guys are in a very short,
[01:33:31]  short order. Um, can you try putting, um, actual, instead of a query, like an actual thing and see what happens? Like an actual, um,
[01:33:38]  Path name differently. Cause this is. Oh yeah. Is it only the query? Yeah, you're right. Why is, why is this only the. Can you actually
[01:33:50]  try with. Oh, do you know why it's because it's you're absolutely right. It's because I'd probably change it to be the query in all my other
[01:33:59]  hacker news. It's not the query. And, uh, so actually these, these are actually all wrong. Um, good to know. Uh, we're going
[01:34:05]  to change the header. Cause I actually, I would prefer these actually should be like this actually. Um, this, this was, this is how I did it in all
[01:34:13]  my other demos. Um, so yeah, that that's better. There we go. Let's see. Cool. Yeah. Yeah. Yeah. Perfect. Okay.
[01:34:28]  So let's, now we're, we're making fast work of this. So then the next thing we, we know we have our star route, which is lovely.
[01:34:34]  So what I want to do is, um, yeah. I mean, truth of matter is I'm not going to really override the head here at all. Um, if
[01:34:43] , if I just want to set one global title, um. Yeah. I, I, I could, could I just do this in the layout? Could I do
[01:34:51]  it like here? Could I be like, yeah. Could I be like, uh, Yes. Or you can, or you can directly go to the, to the,
[01:34:59]  uh, head. Right. And just, if you don't, you know, if you just don't want to use this, you can just directly go to head and
[01:35:06] , and put it there. Okay. Let's do that. Let's do that. Let's do that. Then let's just go right to the head component and
[01:35:16]  just do title. Yeah. Quick. Hacker news. Beautiful. Done. I'm done. Okay. So still moving fast. Uh, Um, we are now
[01:35:30]  on our page and we're going to want to do some data fetching. And of course I I've deleted what I, what I want to do for data fetching
[01:35:37] , but that's fine. We'll, we'll, we'll figure it out again. Cause what we have in our example, this example now is kind of,
[01:35:45]  uh, more dated than before. Cause what we want is the stories component and this, well, let's, let's see how well we can make this upgrade. Cause
[01:35:57]  what I want to do is I'm going to grab the component. And it's funny. Cause you could tell I was learning quick at the time. I was like trying
[01:36:06]  to tag name everything, which now is completely optional. But I was like, let's make it tag name stories, you know? Um, so, uh, let
[01:36:13] 's see here. We want, this is going to be this component more or less. So I'm just going to go like this and it's going to, it's
[01:36:23]  going to, it's going to be upset about that. And that's fine. But essentially the biggest difference here is we're not passing this stuff out in through props.
[01:36:31]  This is, this is, this is, this data, this data is going to come in through our, uh, use endpoint, um, function. Okay. Is
[01:36:40]  what's, is what's going to happen. This is going to become a, a use, use endpoint, um, thing. And it's just going to be.
[01:36:49]  So do you, do you actually call, um, do you want to do just a fetch, um, to the, um, to the. Yeah, I have
[01:36:59]  a prebuilt API here that I'm going to just copy across and I'm going to probably it. Yeah. There's a question, I guess for us, we're
[01:37:08]  doing MPA. So we're going to call this all in the server. I'm just going to, it's not going to be an exposed API endpoint. I
[01:37:14]  don't actually care to be, I'm going to do a fetch against a third party API endpoint. You can pretend this was a database for all of that matters. We
[01:37:20] 're just going to, we're not going to expose this as an API. We're just going to have it as something that we can, we can use, and then
[01:37:28]  we'll just import it in our, in our component. Cause in this case, we didn't want get stories essentially. Um, which we're going to, sorry
[01:37:36] , I'm jumping around a little bit. We're going to put the thing is that you could, I mean, you can do, you could do the request directly from
[01:37:47] , um, from the component itself. Right. Like, like the, or kind of the young get is I want to run this code only on the server. It's
[01:37:54]  like a different way to, to say like this on get thing is only running the server. Uh, you will never do this request directly from the client, right?
[01:38:02]  The client might be going to kill to call this kind of proxy, right? And the, the server is going to do the request, uh, the request. Of course
[01:38:11] . I, I've deleted the syntax for on get is on get documented at all, or do you know what it looks like? Cause I just, this is the one
[01:38:19]  reason that you don't do that. Uh, so it's export, I think it's export, um, cons on get and then end point, you will get
[01:38:32]  the end point on get and then try to import the type end point. Um, yeah, so this is why I shouldn't delete things. Everyone tells me I shouldn't
[01:38:44]  delete things. Um, so just put your dots after don't get just two dots and try to import, um, yeah, without, without the two, uh,
[01:38:55]  parentheses. Without the parentheses. Oh, right. Cause I'm going to be, sorry. I'm just like not thinking I'm going to be doing, I'm going
[01:39:01]  to be doing this eventually. Right. Yeah. So try to import the type end point, uh, handler. Yeah. Yeah. So now you will get the types
[01:39:12] , right? Right. And I'm presuming that this will be, uh, it's either. Yeah. We're going to find out what those are. Aren't
[01:39:22]  we? Uh, request response type things. Uh, yeah, let's see. What do we get in the types? Is it going to give me it? Here
[01:39:29]  we are. Request. Yeah. And what's never, what's the request event? Well, I think you don't have the autocomplete thing to just,
[01:39:40]  uh, see what you get inside. I think it's, so be like, uh, request. So probably, uh, come on guys, where is it?
[01:39:56]  You don't have the escape to, uh, to, to get the stuff out of it. Yeah, probably. Cave to, uh, to get the autocomplete
[01:40:05] . I'm just trying to see what this EV is. It's for some reason it's not telling me, which is lovely. Um, yeah, just, just
[01:40:15] , okay. Try to do, um, um, just to, I think it's because I thought you were declaring a new variable called MV. If you just put MV
[01:40:24]  dot, you should get it. Not there, right? Yeah. Yeah. I know. I know. Like here. Yeah. I was trying that a second ago.
[01:40:32]  I wasn't going, okay. Request. Carams request responses. Beautiful. So I want. I think params in this case might be interesting because you want to
[01:40:39]  get the index param, right? You want to get what is in. Yeah. Params is what I want. And if I look at the data fetching in
[01:40:49]  the other examples, it's going to be, um, do, do, do, do, do. Let's look, uh, how did it, oh, right
[01:40:58] . I didn't do it here. Cause this is like the one hacker news that I did. Strangely. Um, let's just open, um, one of
[01:41:04]  the other ones. It doesn't really matter. Um, let's go application sort of development, solid start examples, uh, hacker news. I don't know.
[01:41:17]  You know what actually for this may be easier. Um, because if you have different components doing this request, right? It's not like in a, in a centralized,
[01:41:25]  it's not per page, right? It's per component. Well, it's, it's, it is per route. We only do one fetch. It's
[01:41:31]  fine. This is, this is essentially what, what I want to do, but, uh, we need, we need to do it a little, a little bit different
[01:41:38] . Can you try, can you try, for example, just create a, forget about this for now. And just go to the component, to the, to the
[01:41:46]  root of the component, to, um, to the index, right? And I'm right here, use resource. And since I've used the endpoint, which will,
[01:41:54]  it's a quick city thing. It's just do use, uh, resource. You add one. And this provides a function and error function inside. Yeah. And
[01:42:08]  this error function can just return data. So you can do the fetch here and get the, and get the results. Okay. Okay. So that's. That will happen
[01:42:19] . That, that code you put there might happen in client side, right? That's the kind of the, the difference. Like when you put the non-get is
[01:42:25]  like server side only. Like that's something that maybe it's MongoDB. It's like internal APIs. But the thing, the thing is this thing, this thing does
[01:42:33]  happen. I, I do want this to happen server side. Um, I don't care if it happens client side later, but since we're doing client side routing
[01:42:39] , as long as it's fetches server side, then I am fine. Okay. Yeah, yeah. It will happen in the server side, the first run there.
[01:42:44]  Yes, definitely. So then I just need to do this. Looks very familiar. familiar. Okay. Sorry. So fetch API is expecting. We turned up any designing
[01:42:57] . No, fine. Cause I haven't imported it yet. Um, because I, why did I, why did I alias it in the other examples? Whatever.
[01:43:07]  It's just get stories. Stories. And then get stories takes a type and a page number. Oh, interesting. Cause I'm generating it. Sorry. Just give
[01:43:22]  me two seconds. Cause it's passing it to this. Oh, it's, this is, this is my bad. This is me entwining different things.
[01:43:29]  Cause this one's actually generating it just from the type in the page. And yeah. Okay. This is just, this is just me being silly. I just need,
[01:43:35]  I just need the type in the page. Um, so we just need the type and the page. Type and page, and we're going to get the type in the
[01:43:48]  page. Um, uh, we're going to calculate it here. Yeah. So we're going to get, we're going to get stories here. Yes. And
[01:43:56]  then we're going to get the type and page. We're going to calculate it based on, uh, whatever the equivalent is to this essentially. Yes. So, so
[01:44:05]  that will do use location, right? You will use the use location hook, which is, um, dynamic. So that will, that will happen actually in the route,
[01:44:12]  right? You, you can only use use location there. So just call it use location. Sorry. Can I do it here in the, in the pager? I
[01:44:19]  can go. Yeah. It's just, it is the only place where you can actually. So lock equal to use location. Yeah. This would be something coming from
[01:44:29]  quick city. Yeah. And use location. You might have, uh, path name. I think. Yeah. Let's route location. Yeah. Okay. Yeah.
[01:44:41]  Okay. Okay. You know, it's just location dot href params and path name. Okay, sweet. So, uh, params is not what I want
[01:44:50]  for everything. Params is actually going to be index, right? So just because you have the dot dot dot index is going to create a param call index, which is
[01:45:00]  going to be the path name that fits there. Yeah. And so we're going to change this to stories. Um, because that's what I want ultimately. And
[01:45:09]  then. Location dot pram stories or top. And then I need to, I need to parse the query off of it. Um, is the other fun part.
[01:45:18]  I do need to get the query parameter for what page where we are on. Um, okay. So, so, uh, we actually have this back and forth where
[01:45:27]  we remove the query from use location and we have to put it back. Uh, uh, you should, um, you could, oh yeah, I'm thinking.
[01:45:39]  Um, you could create two, uh, like two nested levels and correct two params. That will be a different way. But if it's with a query,
[01:45:51]  um, try to get the href and parse it. Yeah. Yeah. Yeah. If we have the href, that's perfectly fine too. I have plenty of
[01:46:00]  examples where I've done that. Okay. So, um, yeah. So let's yeah. Location has href, right? Location dot href. Beautiful
[01:46:07] . Okay. So let's just go, what, like new, new URL search params or something like that. Um, and then it's like, I can
[01:46:19]  never, this is why I keep references to everything. Right. I don't have it on this version, but let's just, uh, let's just go grab it
[01:46:34]  off. Remix. Um, it's cause this is this way. I never have to remember how to do anything. I just make. Remix. Acron
[01:46:44] ues. Uh, app. Routes. Index. Oh, right. Sorry. It's this. This. This is what we want. It's doing this
[01:46:51] . Wrong object. So one thing actually that makes this a bit more efficient, uh, in quick is you put this actually in the inside the resource. Um, not
[01:47:04]  outside. Um, the only thing is we do, we do want, we need, we need this stuff outside as well. We need in both places. Um,
[01:47:19]  okay. So let's see. Why is this? Type string. Uh, fun. I love type script. Anyways, it's, it's fine. Uh,
[01:47:25]  I could probably just grab. I'm probably just missing. Uh, uh, what? I just did call it type string. It's so funny. Um, whatever
[01:47:32] . I'll, I'll, I'll worry about that later. Um, as long as this doesn't complain at me, but I think, I think this is fine
[01:47:36] . Yeah. Cause what I need is. Yeah. Um, okay. Okay. Um, okay. So let's see. Why is this? Type string. Uh,
[01:47:45]  fun. I love type script. Anyways, it's, it's fine. Uh, I could probably just grab. I'm probably just missing. Uh, uh, what
[01:47:51] ? I just did call it type string. That's so funny. Um, whatever. I'll, I'll, I'll worry about that later. But I think
[01:47:55] , I think this is fine. Yeah. Cause what I need is I need the page and type to actually inform the rest of this. And then stories dot length. Right
[01:48:04] . So the question is what do I do with the resources to consume it? Um, is the next thing. So, so, um, the, the stories is,
[01:48:12]  uh, the stories that resource and you have a promise. So you can, it depends what you want. If you want to show the intermediate state, um, state,
[01:48:21]  you could manually try to do it. But the resource component is kind of like the nicest way to use it. So I will insert the resource component and, and you
[01:48:30]  pass the resource as one of the, the required properties. Yeah. I'm just, I try to remember if it was like a, it was like a self closing one
[01:48:39] . Wasn't it? Cause it was like resource equals, uh, yeah. So I'm actually going to call this resource so that it doesn't conflict with what we were
[01:48:49]  going to do and then we're going to, um, what else do we need? Uh, we need resource. Yeah. Uh, so, so, uh,
[01:48:58]  on resolve. On resolve. So that's kind of the only one you need to implement for sure. And that will give you kind of the, the value, right?
[01:49:10]  Um, so here is getting any, because, uh, resource is a resource any, so you can, it's not inferring the type for some reason, but
[01:49:18]  you can, you can put it manually with the, yeah. They're specifying the type. If you have it, I do have it. Uh, I need an
[01:49:26]  eye story, which I haven't put in this project, but we will be adding this in a second. So, so let's, let's do that. Um
[01:49:34] , let's import eye story from types, which is going to, which we're going to pull in from here. So let's see types TS. Let's just copy
[01:49:47]  that. See if it'll do that for me. Paste. Beautiful. And now is it two levels up? Levels up am I? Just to try. Can
[01:50:01]  you use the dollar? Uh, one is it? Well, it's like, uh, not a dollar. The, I don't know in, in, in,
[01:50:07]  in, in, in English. What's the name of it? It's this little one like this, the negation, the bite wise negation. It's like
[01:50:15] , we already the path names to, to go to the root. Just in case. Oh, are you talking? Oh, are you talking? Oh, you're
[01:50:22]  talking about being able to do like this. Yeah. That, that suit. That suit. Or maybe not. Anyways, just go back to the thing that works. That
[01:50:32] 's something to check. Yeah. Yeah. Yeah. Cool. Okay. And then resource, uh, is resource prop. Okay. So it's this eye story and then
[01:50:46]  resource of type. So the resource is this resource myself. Yeah. Okay. I mean, it's complaining at me. I'm just going to move the body of
[01:50:54]  this into there. So it stops complaining to me about silly stuff. Um, yeah. And put that in here. Yeah. Format that for a second. So we
[01:51:03]  can see what we're dealing with. Okay. And then. Yeah. You have to return it. Exactly. Yeah. And then. Now we know that we have
[01:51:13]  stories. I know actually to be corrected. This is the iStories array, which is why it was complaining. Yeah. And now we have stories here. Beautiful
[01:51:23] . This is, this works quite nicely. And. Okay. So other than. Can you, can you check in package Jason? If you have a dependency for node fetch
[01:51:33] . Cause I, I see this crash and, um, it makes me wonder if it's. So can you check in package Jason of the project? If we are
[01:51:41]  shipping it with node fetch. It appears that way, but yeah, it should be poly felt. Um, yeah. Yeah. It should be poly feel. Uh,
[01:51:51]  like, like injected in there. Okay. I mean, there's other reasons why this isn't going to build right now, because I, I'm going to actually let
[01:52:02] 's, let's actually just do the, do the, like this should actually build and compile, but it won't show anything, but it should at least fetch is not
[01:52:13]  a function. Okay. Yeah. So this is our, our, our, our challenge here. Fetch is. Uh, can you try to put, uh,
[01:52:22]  instead of fetch, I know that fetch three, node fetch three has some problem. Can you try to. Right. I mean, I can't find the version. Yeah
[01:52:31] . I, I know exactly what you're talking about. Oh, I lost. Did we lose Manu for a minute? Hopefully he can join back in. Uh,
[01:52:39]  let's see here. I still got you chat, right? I, I'm, I'm not on my own out here. Okay. Manu's coming back
[01:52:48] . Uh, right. Dash, dash. Force. Never forget. Okay. Thank you, Dylan. Thank you. Let's. I got to add Manu back
[01:52:57]  to the stream. Hello. All right. on a weapon. All right. So let's, uh, let's, uh, let's, uh, let's
[01:53:06]  try that. Come on fetch. No. Make fetch happen. Uh, let's, uh, let's, uh, let's try that. Come on fetch. No
[01:53:14] . Make fetch happen. Uh, let's, uh, let's, uh, let's, uh, let's try that. Come on fetch. No. Make
[01:53:23]  fetch happen. Um, okay. Okay. Okay. Yes. Just one thing. Can you go to node modules? just just one thing can you go to node modules
[01:53:35]  uh builder okay quick optimizer i know it's a file optimizer cgs maybe it's right is there flat and look for node fetch it's the elector okay so
[01:53:59]  for some again just comment this out like can you just get the if statement there and just like see if we get in here yeah yeah yeah and and maybe one outside yeah all
[01:54:14]  bagging yeah i think it's the previous one was working because we were doing the fetch inside the on get um no way i'm not seeing any logging i don't
[01:54:29]  know if it's the way that okay maybe it's because we are in the optimizer mgs because it's executing natively in mgs so can you do the same
[01:54:39]  thing in optimizer mgs sure let's look for node fetch oh i see i see i see i see a thing here yeah let's see okay oh actually you know
[01:54:58]  what we won't see these changes regardless until i clear up the we might not see these until i clear up the beat folder okay let's see how we can see it
[01:55:11]  because uh it catches everything um before and in interesting so it's in interesting um i mean we can we can do some oh oh oh i know i know i know why i
[01:55:24]  think node fetch puts the fetch in the default so can you feel actually not fetch dot default here so uh in yes that one here dot default yeah because it's a it
[01:55:40] 's a native module so maybe and maybe if it doesn't work i will update back to three oh works all right all right i'm fixing this right now oh wow okay
[01:56:02]  okay well we're we'll have to remember that um i'm gonna just get rid of our console lecture a moment here and we're gonna have to remember something on this line
[01:56:14]  but let's let's let's continue on okay so yeah uh beautiful beautiful and then yeah the data fetching presumably is working so all i need to do now is port
[01:56:24]  over a component which is a story preview which i'm going to call here and actually i'm just going to call it story singular because that's what i usually call it and
[01:56:34]  we're going to go components new folder following the structure i guess i'm going to call it story um and then new file story dot psx and then i think for
[01:56:52]  this one our old quick project will be of use to us because this one is just a is just a sorry this is solid which one am i looking at this one uh let
[01:57:04] 's look for story preview story preview all right so it's just going to be essentially this okay we're not going to we're not taking that with us okay okay so
[01:57:23]  and then there's probably one other okay so then just it's going to be export default um something like this and then one more and then format and then i've got to
[01:57:34]  fill in all the missing imports boo how did that happen okay okay so okay sorry uh that's it's a new computer i'm gonna i'm gonna blame that okay uh
[01:57:48]  all right and then what else do we need we need this one and then hopefully everything else is just playing along with the same pattern and then this just works magically and i
[01:58:11]  open the page and all the stories appear in front of me okay no okay so we got a little bit more work to do um so let's oh right it's i gotta
[01:58:21]  import it that's that's work that seems like story from uh is it is it you're you're pretty sure there's like a com a shortcut here that i should
[01:58:38]  be no i'm not i thought at some point we have it i'm just thinking that maybe we don't have it anymore all right now we have we have our working
[01:58:53]  hacker news okay pagination is not quite working so let's figure out why that's not happening at least the uh we can move around and we click and we can load the
[01:59:07]  different stories but when i click more um can you um i'm curious can you check the uh this is this is my fault beaver how we've how we changed uh
[01:59:19]  this this is this is because of the the this whole thing of uh of of of changing how the how this works see all these type equals yeah it's it's it's
[01:59:32]  it's got to be like it's it's supposed to be like this um so this is completely on me for when i was hacking around before so i think let's
[01:59:42]  let's see if there's any more type equals going on here sounds good so this is yeah this is on me i'm pretty sure okay okay so we're gonna go back
[01:59:57]  and then when we press more okay okay so almost um query i think i think query might not be working like the query might be empty all the time right right so as
[02:00:17]  i work around as i work around you're saying that if i look at href here there's a very good chance that this is okay yeah it just it's just like
[02:00:27]  it's just it just top and it doesn't have the query on it yes okay yeah um this is not the end of the world because this is not usually what i
[02:00:41]  care about um um so we can we can definitely move on well we if we can think of a work around uh but yeah because i wanted to do i do this mostly
[02:00:56]  so that i can what i what i was thinking is that we can have um uh so this has a workaround can you make can you make a folder sorry in routes
[02:01:10]  can you make a folder and the folder inside this and the folder is um brackets um not right yeah the square brackets and then put like page for example right uh yeah page oh
[02:01:27]  that's kind of oh yeah yeah yeah yeah yeah and then move the stories and make it like page page number so it will be kind of the it will not be perfect
[02:01:39]  but i think it will be a bit so i think you want the first one to be actually one because you want to capture only the name right like the name and the rest
[02:01:48]  is going to be optional but that the name is actually optional too oh okay so i don't know that actually might complicate things a bit yeah actually that i think that
[02:01:59]  copies things because essentially slash has to work you know what look it's it's the key this isn't the important page um we're gonna we're gonna build our uh our
[02:02:09]  next page which is uh i want to build um stories um new file id id.tsx this is i want to build the actual individual story page um uh yeah how
[02:02:27]  are we doing components we have header we have story and we're gonna have two more components come in we're gonna have uh i'm actually excited to do this on stream with
[02:02:36]  quick because i haven't done this on stream with quick when i did uh the original version with mishko um we just made it like we just made the comments uh an
[02:02:44]  interactive component and it did its thing but we didn't do what i call recursive partial hydration um and it works funnily enough the same way in quick as it
[02:02:54]  does in in islands frameworks even though quick's more granular you still play that game a little bit and uh um essentially i want i wanted to uh i would i'd like to
[02:03:05]  build this in quick uh here if possible so um i actually do have it in my example and yeah it's nice because it uh i don't think i covered it on
[02:03:16]  stream with quick previously but essentially we're going to use a toggle component to hoist the state to wrap um a static component and use this to help with uh even more aggressive
[02:03:27]  code splitting but let's let's let's start with our um story page component which is going to look a lot like we're basically doing the same thing we just did
[02:03:41]  again um sorry my it's always a pain when i i have to you know what uh i'm going to do it the other way i'm going to copy our uh this
[02:03:50]  component file because it's basically what we want to imitate and then i'm going to swap out the markup as we need okay um ryan can you i'm just
[02:04:00]  curious when you're doing this uh check the amount of things we serialize right now for the this page i'm curious of the if we are yeah so this page should should
[02:04:12]  serialize nothing because there's nothing client side if yeah like yeah it's like it's just like an empty object like it's just like you're but but there is
[02:04:23]  not even quick loader you notice that yeah yeah yeah so there is literally zero javascript in this one because there is not any anything that happened right at all yeah exactly
[02:04:33]  no no javascript yeah and and that's that's what this one's for the next one is the one that's fun because there is javascript and we get
[02:04:40]  to we get to we get to have some fun with it yeah so um let's look yeah so let's pull some of this stuff across because um essentially i want i
[02:04:52]  want this jsx all right actually this it's a little bit more fun than this because what i actually want is um i actually this props data is actually more like um
[02:05:12]  yeah this this is actually what's going to go inside the resource not inside anything else i'm pretty sure because the whole thing's and props data so we'll probably be able
[02:05:23]  to actually is it the whole thing's and props data we could probably because we know the resource won't show unless this stuff i think we can actually just shrink it down to
[02:05:34]  just this and then um essentially this is what we actually want to show in here and then we're just going to have to do like a little bit of of this yeah
[02:05:51]  yeah um so what we're going to do is almost the same pattern except now this is going to be store re and then all these props about data become story and then
[02:06:11]  they don't know what a story is which is fine because we need to get it and for getting a story all we need is the id right and we're going to get
[02:06:22]  that id very similar to this one we're just going to get the id from here and it's literally going to be prams id and which and then and i'm
[02:06:36]  going to do that and then we have a resource of type is it i story again i mean that would be a lovely scenario it is it is um and then we just we
[02:06:52]  just need to our story oh it's not a nice story array it's a nice story and then we just need to get our comments going and we need to get our that
[02:07:03]  we need to get our comments going so in this in this one um if can you make the use resource like um multiple line because i think we can make a small improvement here
[02:07:15]  it also comes a bit of the point of the oh right right are you suggesting that we can pull stuff from in here or something so we don't have yeah yeah so
[02:07:25]  so so yeah like um you import um so can you in the params different param of this resource uh you will get you can deconstruct uh property track so just open
[02:07:40]  the bracket and get track yeah yeah and then basically you can get track and then you pass location you want to track it's kind of like the like we have a signal you
[02:07:55]  can track the property uh params of yeah um of location right so yeah so put location there and then the second argument will be uh no actually you have to put coma
[02:08:10]  so you have to put um the object first yes and then yeah and it has that as a string you will get strongly type yes got you okay okay cool yeah so you can
[02:08:25]  get the value out of it like a track will return the value but you don't you don't have to if you want you can just get it there from track you
[02:08:34]  can get the value from track i can get the value so yeah but i want id too is it is it acts like this ah you will get all the params so you
[02:08:44]  can track the problems and from there you can do location so you can do just the location params id here in the directly in the get stories so move the line cons like
[02:08:56]  you want to have their cons id equal yeah that one you just move it inside the just move it inside the use resource will this work or so you said it returned it
[02:09:07]  or or do i would uh right now you cannot put multiple uh we we are we are actually have a PR for that but right now just move the cons id that that will
[02:09:15]  be enough uh you don't you can just track the whole params it's not going to be much difference yeah like that yeah and now now now it reacts that's
[02:09:25]  cool yeah uh so i i keep on looking at this and you guys are talking about influences uh because solid uses this very similar syntax with source but instead of track it's the
[02:09:36]  first function that gets called to it but yes the same idea where you can track the parameters and then on parameter change actually do the re do the refetch if this is
[02:09:44]  client side yeah so that's that's a good pattern um let's okay so where are we going um we are going to get our comment which is our last well actually we
[02:09:53]  have two more components um but i'm going to put them together in the same folder because they're part of the same the same kind of thing our in our comment we
[02:10:02]  actually have um we're gonna have two files um we're gonna have a comment dot tsx and we're gonna have a toggle dot tsx and the reason for this is
[02:10:16]  we're gonna we're doing a trick uh to do state isolation um which will help with the serialization um and i i tried to do this with fresh um a couple weeks
[02:10:28]  ago we did not succeed i this worked with quick at one point so let's hope it still works with quick um where we can do this kind of separation because what i
[02:10:38]  want to do is i want to get the comment component which is rather simple component but the you're gonna the the the nice thing about this is that okay i'm just gonna
[02:10:49]  grab this is so far if you notice we haven't used any state in our components at all right um yeah i mean i should just change my default i'm just too
[02:11:02]  lazy to to do that um and essentially export default we we haven't we haven't actually and still so far we haven't used a single primitive this is all static rendering um
[02:11:19]  but what i want to be able to do is um i'm doing this for a reason because what we're going to do is we're going to have a sorry i
[02:11:29]  put in the wrong file let's let's grab this one out um we're gonna we're gonna push all the state as low down as we can so we need the least
[02:11:36]  possible code to update and that's what our toggle component is our toggle component wraps each comment so you can collapse it and uh let me see if i get it this is
[02:11:47]  the very first and only time you're going to see any statefulness in this app um export default um and then all we need to do is import all our useful stuff that
[02:12:05]  we need and i will just use stories for example because it probably has oh it doesn't have slot okay that's fine um but we will need this okay comment comment
[02:12:28]  and then we're gonna import uh toggle capitalize it And then, yeah, I have to actually const comment and then export default. Beautiful. Now we have self-re
[02:13:02] ference. This does not need its own tag name. I can do that. I wonder how the optimizer is going to get with this one. This is the fault
[02:13:11]  and then the name. I wonder. It should work. I need to do something. That's the only thing. Yeah. I mean, this is what we all come
[02:13:22]  here to do. From the other side, it needs to actually import the default, right? Like, it doesn't need to import comment. Let's see. Let's
[02:13:34]  see. Yeah, so, and then, let me do this. Ah, that's a good one. Yeah, I mean, we can put it in this.
[02:13:42]  Oh, no, but no, no, no. I'm going to run it. I'm so curious. I'm so curious. About self-referencing,
[02:13:48]  but with a different name. I'm interested. Because I did find ways to make this work previously. So, I mean, I'm hoping that we can probably figure
[02:14:00]  this out slot. So, okay. So, everyone says this is the only statefulness in our whole app. We've actually now added state. This is something that is
[02:14:09]  actually client-side and we've minimized it. So, this is the only state interaction and it's a very clever trick of using slots because what ends up happening
[02:14:16]  is we're slotting in the parents. So, we're actually creating a consistent server hierarchy where we can render the whole thing on the server, like all the way through
[02:14:26] . And this is an island, so it's a little bit different, but it still holds the same idea that we only actually, we never need this component because we
[02:14:35]  know that it's rendered statically. And the only component we need to ship to the client is this. This is all the JavaScript code that we're going to need to
[02:14:43]  make this page interactive. And it's actually, the way QuickWorks, it's actually split in two. It's this click handler and then it's this one,
[02:14:52]  right? Or is it three? Splint in three, is it, is there, there's like this? No, there is two. There is two in this
[02:14:59]  one. Yeah, it's split in two. So, this is, this is all the JavaScript and if everything works like clockwork and we import our, our, our
[02:15:10] , um, comment component, um, like this, we should, in theory, be able to go into this page. Okay. So what happened? Um, So
[02:15:24]  what, what, what, what, what, what happened? Okay. So we have no errors. So is this just a, a matter of, of, of me
[02:15:30]  missing something, something, uh, because it is not airing out. Uh, is it not matching the pattern properly? Can you put a console lock, um, stories
[02:15:42]  is a stories ID? Yeah. Can you, can you try to put the, um, a console lock in after the ID? So where you already have the
[02:15:51]  ID? Okay. I'll do that too. Uh, sorry. After I have the ID? Yes. Uh, so inside the resource too? Yes. Yes. Just
[02:16:01]  to, to check that one. Uh, what did you do? The plus here. Yes. Curious. Uh, the cast it. Cause it was a string and
[02:16:09]  I want it to be an integer. Uh, cool. Okay. So of course not going to print anything, right? But in the server is printing anything. No
[02:16:16] , let's try restarting. Okay. Ah, this is probably our problem. Um, it didn't show this. It was just like coming along. Root identifier
[02:16:27] . Okay. Okay. So this is our problem. Okay. So I can, I, I think this should be fixed, but just make it export. Yeah.
[02:16:39]  And then do I have to, do I have to import it from that specifically instead of this? Yeah. Yeah. Just, but this should work. I just need to
[02:16:47] . Need to, need to optimize it to get that. Yes. And okay. So it, it works. Um, and yeah, I mean, as you see.
[02:17:08]  Um, and bang, and then we get our toggle component. So this is just our state. Yeah. It splits into state. Uh, this is the core.
[02:17:16]  It splits it into JSX. And yeah, that's it. That's it. Yeah. That's good. Uh, what's our, actually our click handler looks
[02:17:26]  like it's toggle component fragment. Oh yeah. This is, this is, this is the event handler and this is the component. Yeah. Those are two. It was
[02:17:34]  downloaded right backwards, right? Of a framework will happen. Right. You get first the click. Can you, can you check, uh, interesting to check the.
[02:17:41]  Elements. Uh, sorry. The, what do you realize in the quick Jason? Is it want to just check if there's something. Yeah. Something, um,
[02:17:50]  funny there. I am pretty stoked about this because let me tell you. Sorry. Can I, can I check one more thing? Because last time we did this, I
[02:17:58]  had, I, I had to do. Yeah. Yeah. So I'm doing this weird serialized thing. You're going to tell me I don't need this
[02:18:03]  anymore. Uh, for which kind of data. Uh, do not include it. Uh, quick loader. That's fine. Quick Jason, a bunch of island entry
[02:18:15]  points. That sounds. And, and the open and open state. That looks okay. We're not getting full stories here. Yeah. Yeah. That looks. So
[02:18:23]  you don't need, you don't need the no serialized anymore because now it's getting, now it should be much smarter now. Yeah. This is, this was
[02:18:30] , this was the thing I was bugging you guys. Cause I was telling everyone how, uh, quick, quick was, uh, yeah, we had to do this
[02:18:37]  crazy like thing. Now we can literally just like, I think we can literally just do this. We just go. We can just return because yeah, uh, quick
[02:18:50]  wasn't what I consider partial initially. Quick was, uh, progressive and, uh, resumable, but not partial. Quick is now completely partial. You guys have
[02:19:00]  done this, the analysis required to know exactly what state needs to be serialized based on what the usage is. And if this is all good here, this is a big
[02:19:09]  revelation. It's serialized the exact same stuff. This is it. This is just what is needed for those opens. It's just, you're seeing all the
[02:19:17] . Islands you, as you'd call it in another framework, but it's essentially there's. If you, if you open up this kind of serialization on like any
[02:19:26]  kind of, uh, standard one, you would see huge blobs of Jason. And now the, the thing is that, um, uh, when you run this in
[02:19:35] , if you go through the objects, you will see that some, some of these objects are the cure else that you need, for example, the use resource, but
[02:19:43]  there is nothing of that. The use resources are not even here, right? Because the use resources are static. Nothing can mutate. Yeah. Right. So the only
[02:19:51]  thing that we get through the page, if you build in production mode, you will see that we inject the right prefetching. So in this case, there is two
[02:20:00]  things that can happen, right? It is the toggle click and the toggle render. So you will only get a prefetch for those two things. So by the time
[02:20:09]  you actually click, uh, most likely it's already downloaded. Right. Yeah. You, you, you, I wanna, I wanna, I wanna take a look at
[02:20:17]  that. Can we actually do that? Cause you're right. I've pointed this out probably like 10 times on stream and it probably bugged the hell out of you guys
[02:20:23]  because I, I would, I would slow down the network tab and then click the thing. And then I'd be like, go grab my drink, sit there and then
[02:20:30]  come back and then I could compress it. Um, you guys are now with quick city, uh, doing a lot more aggressive prefetching. Um, yeah.
[02:20:37]  So, so, so NPM run build. Yeah. Oh, but that's when we use, uh, netlify. So is there a preview version for
[02:20:46]  dev on netlify or no? Uh, I mean, Uh, no, no. Uh, that's why I like this press, uh, and that's
[02:20:57]  fine. Yeah. I mean, this is, this has been, this is, uh, this is actually one of the tensions between all the, the meta frameworks. There
[02:21:04] 's, there's this approach is, which is kind of like what remixes, I think is done where you build towards, and then you're kind of like that.
[02:21:09]  And then, uh, SvelteKit did, uh, what we ended up copying, which is that their dev environment is not the same as the adapter environment.
[02:21:16]  It just like, like essentially like it's always express in dev, um, kind of deal. Um, but yeah, we, we, we were, I have the
[02:21:25]  netlify CLI already installed and ready for this moment. Um, so we could, we could, uh, deploy this. Obviously this app is not, um
[02:21:33] , completely finished, but it's good enough for our purposes. So I think I'm gonna do that right now. Let's, let's, uh, let's,
[02:21:39]  let's, let's do this. I, I mean, there's nothing. Is there anything that we need to know for netlify, uh, deploy? So
[02:21:46]  we built it. And then usually what I do is netlify, um, see, there's build SSR protection bill. So I'm going to use by thing
[02:21:53]  netlify blah, blah, blah, blah, netlify build. Um, oh yeah. Look, look, look at this. Netlify build.
[02:22:06]  And then NPM on the site run. Oh, okay. Yeah. So they want me to like, uh, yeah, they want me to actually like make a site
[02:22:18]  first. Um, uh, I, I, one thing we want to do for this specific, this problem is that use the Vite preview because the Vite preview
[02:22:27]  is kind of this is the, they, they have like a way to always be able to run it. Like, like it's pressed, like it's kind of built
[02:22:35]  in express. So at least you can always build in production and run it. Right. Regardless of the server. So I think hopefully soon we have the serve, which
[02:22:43]  is the native, like serve will always use the netlify CLI to really simulate everything. Right. Uh, but then have preview for something you can just very quickly
[02:22:54] , uh, try in production. Okay. Well, let's just, let's just make a quick. I mean, I'm, I haven't made this one
[02:23:07] . So quick hacker news. Um, let's try this. Okay. So I, I think I, for some reason I thought I could just like, if I,
[02:23:16]  if, if I'm being really lazy and I just do netlify deploy or publish, I can, I gotta remember which one it is. Creating figure new site.
[02:23:24]  There we go. I can just do it all right here. Um, ooh, I didn't really, there's a solid JS team, but that's my personal
[02:23:29]  one. And we're gonna call this one, um, quick hacker news. Um, beautiful. And then this is. This is just gonna do it anyways, but it
[02:23:47]  might be broken. Sometimes with the server functions, you have to do like a little trick. And so I'm gonna, we're gonna try, um, this just
[02:23:55] , uh, okay. Actually really interesting. I thought it would, it would give me the. Okay. Know what we're gonna do. We're going to go deploy
[02:24:05]  dash build. Um, because with, uh, the edge functions, you gotta do a little bit of extra, uh, generally speaking. Um, see, it didn
[02:24:17] 't do this last time. Um, so this is, I've, I've, I've had plenty experiences with working with edge functions on different vendors. Okay,
[02:24:27]  there we go. And now let's look at our draft website. Okay. Not quite where I want it to be. Sorry. You guys aren't seeing it on screen
[02:24:36] . I was just, I was just kind of, let's see what's going on here. Um, Um, yeah, what, what do we have happening here
[02:24:45] ? Uh, is it rendering anything? Uh, sources? Not really. No, this looks like an empty, empty, empty thing. So something is not quite connecting
[02:25:00]  up. Right. Um, I feel maybe it's something in the media where it's not passing the path and it's not matching. I'm wondering. Yeah. Mod
[02:25:09] ify it. Um, yeah, yeah, that's, that's probably what, what we're dealing with here. Cause it looks like, it looks like it builds.
[02:25:18]  It looks like it thinks it's serving it. It is definitely a quick, like it's, it's definitely a quick file. It's definitely this. It's
[02:25:24]  just the server rendering is not making it all the way through essentially. Um, I can, if you give me just a second, I can give you this file. So
[02:25:36]  if you, I don't know, I can share with you, maybe in this court. So this will be kind of just copy this file. I just send you
[02:25:48]  and call it entry express DSX. And then serve, and then just change, update the scripts. I will put everything here. And, uh, the dependencies are these
[02:26:04]  two dependencies. Let's see. Server dot. What is it? Uh, TS. Let's, is that JS or TS? I can't even tell. Uh
[02:26:15] , entry, entry express TSX. So it's like, um, it's in, it's in source. So this level will be like a sibling with the entry
[02:26:24]  netlify. There's a sibling there. Entry. Express. Express. TS. TS. Yeah. Yeah. And copy that one. And then maybe you need
[02:26:35]  to update, uh, install the, the, I passed you the, the things you might need. Okay. There. And, uh, and yeah, and then
[02:26:45]  my updates serve and build SSR to build for express. Okay. Yeah, we can do this for now. I, I, I, I was so hoping for that
[02:27:00]  deploy, but we'll, we'll have to, we'll have to, we'll have to do that. Uh, a, a, a different time, uh
[02:27:06] , yeah, force. Um, okay. So then let's, uh, change these commands. This is the build SSR and the serve command, uh, build SS
[02:27:17] R. And serve is this one. Yeah. And can you check byte config? Because I think the byte config has some extra stuff for netlify. Maybe that
[02:27:29] 's good to be removed. Yeah. Just remove that and, and comment out also the options for SSR there, uh, the output. Okay. Yeah. Yeah.
[02:27:39]  So we don't, we don't need, we don't need any of this. Yes. Yeah. If we are building for, uh, express, we should not
[02:27:46]  need that. Let's check it out. Okay. So then I just need to run, uh, npm run serve. Uh, npm run build. Um
[02:27:56] , yeah. And let's check if it creates a, is it okay? Let's see. Not found. It wants it. It's, it's, it's
[02:28:10] . Oh yeah. It's, it's wants this. Okay. Okay. Yes. Serve. Okay. All right. So then we can actually see how, how,
[02:28:31]  how this behavior actually works here. So we got the network tab open and when we go to a stories thing. Okay. So interesting. Hmm. Okay. It's
[02:28:45]  not actually doing it. Let's, let's look at what's if, if it actually, uh, what are we looking at here? Uh, pre-connect,
[02:28:55]  pre-connect style sheet. Is there pre, is there preload headers? Uh, can you, can I check? Yeah. Can I check that one? The
[02:29:07]  type module. Type. Which. The one. Yeah. That one. I think this is the mode. So it's pre fetching. It's supposed to be that
[02:29:19]  two ones because so we were doing some research and the pre fetch. We're not quite working on Firefox. Right. And we kind of have this one that was working
[02:29:29]  everywhere, but it's not working for you. Yeah. I, I, I, as far as I can tell, I'm not getting, I'm not getting the
[02:29:36] , let me check the network tab, but I'm not getting, getting it. I, and yeah. So you're, you're, so you're not actually using
[02:29:43]  the tag prefix. You're doing something else. Yeah. I'm not, I'm not seeing it come across. Like there's definitely like, I mean, just let
[02:29:50]  me, let me try something here. Uh, uh, settings, not settings. Oh, maybe, maybe it's fetch xml. Yeah. Fetch. Yeah
[02:29:58] . Oh, just put all. Okay. Okay. Yeah. Yeah. So I, do I have a service worker going on here? Let me go ahead. No,
[02:30:09]  I think it's, it's happening from a worker. That's why it's not there. Oh, okay. Yeah. Beautiful. Okay. So then, then that
[02:30:16] , that explains a lot. So now. Yeah. So that, yeah. What I wanted to do. So maybe refresh with clean the cache. Right. So yeah
[02:30:24] . What am I looking for is. If you, if you long click the refresh button, you will get the options. Yeah. Yeah. That one or empty cache.
[02:30:35]  Maybe the other one, empty cache. Just to make sure. Yeah. Fine. Yeah. So by the time it happens, it's already cache. Right. Right
[02:30:45] . So I put on slow 3G. So obviously it's taking a while for this page to load, but my, the key point is I used to do this demo
[02:30:54]  and yeah, it's, it's, it's, it's, yeah. Yeah. It's interesting. Cause. Yeah. This cache. When it's cached
[02:31:08] , it's like incredibly fast, but it does look like, even if I like, I think it's in. Interesting. Okay. So this is. What's
[02:31:22] , what's happening? What, what, what's happening to you? Like you click and it's not. Yeah. Well, I guess it's cause there's still
[02:31:28]  some stuff with it. Cause it's like, this one was still marked as pending. I'm gonna, I'm gonna empty the cache. Right. And then we're
[02:31:34]  going, we're give it a second. Cause I'm on 3G just so I can display it. So now it's pending. So these are fetching. And
[02:31:40]  if you look, this one is still. Fetching. So maybe it's not done. Okay. Now, no, it's still not done. Maybe this
[02:31:48]  is why it wasn't doing it. Cause. Cause this one. Oh, it's taking so long. Yeah. That one's interesting. Yeah. I don't,
[02:31:55]  I don't know. So maybe that's why. Cause when I, when I went to go shrink it, obviously it actually, uh, it took a moment. Interesting
[02:32:02] . Can you try one just to, uh, for fun, can you go to the, um, to the set, to the render? I think it's render
[02:32:11]  SSR. Uh, where like in the code or. Yeah. In the, in the code. Uh, where, where, where do I find this? N3
[02:32:19] , N3 server. Yes. No, N3 SSR. And the file is the N3 SSR file. And there, can you, um, after
[02:32:28]  the manifest, uh, try to see the auto completion. What do you get for the options? Like comma and then something. Yeah. Prefetch. Put prefetch
[02:32:41] . Yeah. That one. I think it's an object. Yeah. I'm going to look at the object. Yeah. I'm going to look into the,
[02:32:51]  uh, the options wait in a sec. So. Okay. So, so there is a implementation. Just like object. So it's object and then implementation. Yeah.
[02:33:10]  And then implementation is, uh, there is like several strings. Yeah. It's kind of all the possible like combinations of prefetching. And we are trying different
[02:33:19]  things for now. Can you do the link prefetch HTML? Yeah. And try that one. I'm curious and just build again and try to run the production. Let
[02:33:31] 's do it. See if it has some different behavior. I'm so glad that these kind of mechanisms are, are, are, are kind of showing up now.
[02:33:42]  So now can you check the HTML? I want to check if the actual. Yeah. This worked though. Let's click it. Yeah. Do you see that? Yeah
[02:33:53] . No delaying with slow 3G. That works. Can you, can you check that? Yeah. So now you get, see that you get the links, actually
[02:33:59]  the links there. Yeah. Uh, yeah. Are they, where are they? Are they at the end? Where did you put them? Yeah. At the very
[02:34:05]  end. Yeah. Prefetched script. Yeah. I see that. Yeah. Yeah. So yeah, this is what I was looking for originally. So that's
[02:34:11]  cool. So yeah, I mean, this, the, the idea is generally with smart configuration, knowing what you can prefetch the, the, the, one of those
[02:34:20]  like gripes, a lot of people like, whoa, what's up with the lazy loading? Like it's, it's fine. Like it's, it's,
[02:34:24]  it's here. Right. But the, the only unfortunate part is we didn't deploy the Netlify. So I don't have, we can't do the good
[02:34:31]  old, uh, lighthouse game right now. Cause it's so, um, we're, we're going to have to probably save that for another time, but this
[02:34:40]  is a much better foundation or base for then compared to what I've been working with. Uh, this, everything seems to work and, um, you know, and.
[02:34:50]  It seems to work. I mean, where we go to know that's good. The very, let's go to note modules. Oh yeah. Yeah. Right.
[02:35:00]  You're right. Right. But no, I, I already fixed it. Okay. Okay. So we'll have note fetch soon. Yeah. Um, I, I
[02:35:07] , I, this, this example, yeah, I'm gonna, I'm gonna push, I'm gonna push this up at some points or not this one. Um
[02:35:13] , uh, this one and, uh, we, I'll work with you guys more to kind of get it to where, uh, the, where it can be for
[02:35:21]  comparison. But I, I, I, this is, this is a huge step forward. I, I, I, I, the fact that, you know, we
[02:35:26]  have these kind of considerations now built in a lot of, a lot of like resource primitive was definitely really nice. The routing, um, being able to, to,
[02:35:36]  to like, this, this is a big step up in terms of, uh, the experience and being able to develop apps. Because I said, I've made this quick
[02:35:44]  hacker news demo, like in four different versions of quick at this point. So, and this, this, this is, uh, this is definitely much, much, uh
[02:35:52] , nicer, uh, consideration. Um, one, one last thing you could try and can you try to them, uh, NPM run depth client, because that
[02:36:02]  will be like, um, trying the entry depth. Uh, so depth client, I think, I think it's dot client. So see if this one works. This
[02:36:16]  page. Uh, interesting. Yeah. Uh, sorry, I'll bring it across. Uh, but it, it kind of works, but the styles aren't loading.
[02:36:27]  Um, interesting. I, if this is Netlify scenario or something like I've had this situation before, because this isn't using your express thing. This is
[02:36:37]  using. Yeah. Uh, what, what's, what's this could be, uh, it, this could be in your Netlify adapter. If this is the
[02:36:44]  case, what's could be happening is that this app uses a star route as the base route. Remember it uses the dot dot dot right on the route, which means it
[02:36:52]  intercepts the assets. So it'll actually grab your CSS files and try and serve them out as the, as the index page. That's my, that's,
[02:37:00]  that's my bet. If I was, if I was betting, cause I've, I've, I've, I've been here. Um, that what's happening
[02:37:06]  is when we go look at what's getting requested for the CSS here. Um. Oh no, it's working. It's working. I, I think it's
[02:37:14]  some, it's so messing with the head rendering. Um, because we, we can, like anything can append things to the head, but at the same time,
[02:37:24]  we have to also render the head component thing, something is conflicting there, but basically this mode sometimes useful when, oh, I want to debug something in my logic. And
[02:37:36]  it's kind of hard to do it from the note. Yeah. Um, perspective, you can kind of say, okay, I'm going to just run everything client side
[02:37:42] , which is something that we can also do. It's not like a string that's saying you can also have full client, but you don't get any benefit.
[02:37:49]  I guess you're right. Right. Yeah. So, okay. Well, uh, we got a couple of little kinks to work out, but I, I think
[02:37:56] , I think, I think, I think the impression was made here. Anyone in the chat got questions for Manu. I, I, I, I, I think
[02:38:01] , I think this is as far as I'm gonna take the quick demo. I am gonna actually do this week in JavaScript at the end here as a kind of a cap
[02:38:09]  off. So we're almost at the end of our time with our guest here. So I want, if there's any more questions about quick, any things, this is
[02:38:16]  a good chance that, well, you got him on the line. We'll give them a moment here. As I sip the melted ice cubes from my drink. Uh
[02:38:28] , here's almost midnight. So, uh, yeah, I know it's late for you. Um, so how do you actually specify the preload stuff? Well,
[02:38:39]  the thing is, I mean, yeah, go ahead and answer it. No, I, so, um, would you right now specify only the implementation of it?
[02:38:49]  Uh, that's the main configuration. So the implementation is something we are, uh, using for ourselves to figure out which one is the best, uh, free-f
[02:38:58] etched strategy. And this one worked for example, but in, in, um, in Firefox, it doesn't really. So that's one of the things you
[02:39:06]  can configure. And the other thing, the other option that we didn't, we didn't use is the symbols to prefetch. So symbols to prefetch right now,
[02:39:15]  the default option is kind of, um, let me see. What is the name of the, of the option? Um, see, actually looking at the code.
[02:39:25]  So it's called auto. And what auto means is that quick is going to look into the whole, uh, it's going to start from the events as the roots and
[02:39:36]  trying to see all the data and, uh, and hold that data when it mutates, what other symbols it needs. And it can collect like everything that you need,
[02:39:48]  like everything that can happen in this application. Right. And it prefetch that, but there is other studies. We have one study where you will prefetch kind of
[02:39:55]  all the things that can possibly happen every, in any possible moments. So it's more about that kind of thing is rather than saying I want this or that one. So
[02:40:05]  it's more about like a general, uh, level strategies, uh, than, uh, specifying a specific, which things to prefetch that to be taken care of
[02:40:13]  by quick. Yeah, it's, it's an interesting challenge. And then one of those ones that I think like quick long-term goal, if I understand is
[02:40:21]  use, uh, site analytics as a way to feed into this information so that prefetching could actually be based on end user patterns. Uh, and, and I think
[02:40:30]  that's a really interesting take. And part of the reason it's at that, the, the one trade-off that you find out it was talking about the, the
[02:40:37] , how we're moving to more granularity, um, in our thinking with how we split, like, splitting these farther than components that one trade-off that you
[02:40:44]  go more granular, it gets much, much, much harder to manage it yourself. Like, it's just not a realistic expectation anymore. So, um, that means,
[02:40:52]  uh, a lot of new takes in, uh, innovation to, you know, how to split things up. Right. Um, so yeah, I'm looking forward to
[02:40:59]  see, uh, work in that space. Cause like there, there, there's a lot of options, right? Uh, one of the, the, the one
[02:41:05]  that quick's looking at, I know it's with the analytics. Um, um, some people bundling too, right? Right, right. Exactly. Yeah. That
[02:41:14] 's not only prefetching, but bundling, like right now in the demo you're showing, it's, it's just making one, like every single piece is
[02:41:21]  a different file, but that's like optimizer option. Like, like, oh, okay. Yeah, there's, there's some confusion here because, um,
[02:41:29]  sorry, when, when, when remix prefetches, they're, they're prefetching like the next page. Um, but this is an MPA. So
[02:41:38]  like the, the, I, I believe that the, the, the quick has demos where they can use party town to prefetch the, the next page in a service
[02:41:44]  worker and do that at link cover. I don't think, uh, I don't think, uh, quick city has it yet, but this is different. Like in
[02:41:51]  remix to get that page, like we're talking about prefetching, like parts of the page to interact with and remix, you downloaded the whole react app. You
[02:42:00] 're like 70 kilobytes, nothing you can do about it. Right. So, or sorry, 63, 64 kilobytes and nothing you can do about it.
[02:42:07]  So this is like at a different level. Like when we talk about prefetching in remix, we're we we've already assumed that we've loaded react the, the
[02:42:14]  whole page, the whole thing. And this is about, this is about the actual pager, pager on initially. So when quick loads, there's no JavaScript
[02:42:24] , like zero. Um, and then you, and by doing the smart prefetching, you interact with, and you don't even notice that like, it just comes
[02:42:33]  in, in the background and you might be like, okay, why don't we do that? For the full page? Well, I can tell you that and I'll
[02:42:39]  be covering that in this week in JavaScript. Um, so yeah, so, so yeah, uh, yeah, this is complicated. This is what I was talking about where
[02:42:43]  it would be a fun to play a game where we just bucketed things in, in three categories and kind of play, played that game. Um, so yeah, I
[02:42:43] , I think there's a lot of technologies that are very, very, very similar and have similar, uh, words, no, for it, yeah, and,
[02:43:05]  and, and it's like, yeah, I mean, yeah, as I said, I'm going to enjoy playing a game with it. Um, what I'm going
[02:43:11]  to do is I'm going to, I'm, I think we're pretty good. I'm going to switch into this week in JavaScript. It's up to you,
[02:43:15]  Manu, whether you want to stay around and just talk, uh, talk stuff. You know, we can, we can, we can just talk, uh, talk
[02:43:22] , uh, what do you call it? Like this is mostly just gossip and whatever's going on, or, or you can, if you, if it's very late
[02:43:28]  for you, go ahead and I will, uh, I'll, I'll take it, take it. Yeah, I think I will love to be, but it
[02:43:34] 's kind of, uh, midnight here and my girlfriend was already like, okay, I'm just, ciao, so I might probably, uh, get back soon. Yeah
[02:43:44] , yeah, no problem. There's one more question and this is related, right? Uh, this is, this is, that's what I mean. This prefetch
[02:43:49] ing is on interaction. So hover could be an interaction, but actually to what we're talking about right now with quick is either click or just ahead of time. So
[02:43:58]  it's like, I don't, I don't know if you guys have played with hover interaction, but the, the, the idea here is the way quick does it
[02:44:05] 's fetching in general is like, if you ignore the prefetching aspect is it's literally just whatever you, it's not like it didn't have to build a
[02:44:14]  special mechanism for it. It's just built in. Like if, if you go to click or you go to scroll, or if you go to do any kind of event
[02:44:20] , it will just do it because there's code attached to it. If there's no code, there's no code to load. If there's code to load,
[02:44:26]  then quick will, will load it. Yeah. It's, it's kind of like by default, you don't need any JavaScript at all, right? Zero JavaScript.
[02:44:34]  But kind of the, after SSR, we know that there are some interaction that can happen. So this is kind of all the things you can do. You can click
[02:44:42]  this button and it's going to do this stuff or whatever. Right? So we can say, because this actually might happen. Let's just start to download in that code
[02:44:49] . So by the moment the user clicks is already there, but it doesn't mean that that code even runs, right? Or that code even like, um, uh
[02:44:56] , it's, it's not, it's not another, right? That will be for, I feel like that will be kind of like a quick city feature. Maybe
[02:45:03]  for the link component to say, oh, if I over it, but that will be like a quick city thing. It will not be like the framework. Uh, it
[02:45:11]  will, it will not be a quick thing. Yeah, yeah, yeah. And, uh, yeah, I mean, there's a lot of look into the pre
[02:45:16] , I would be very surprised if you guys didn't look at, uh, uh, future route preloading stuff. I know you guys already were doing that. Well
[02:45:22] , I think with builder IO or like on the actual site. So building that into quick city makes a ton of sense. Okay. I think we're good then. Um
[02:45:27] , thank you Manu so much for, for, uh, for joining us. Um, thank you. Thank you for inviting us. It was so fun. It was
[02:45:36]  so cool. I was a bit, in some moments, a bit nervous, uh, with the depth, you know, at three, no 0.0.38
[02:45:45]  depth, 224, but, uh, we, we managed to, to get it. Yeah, no, it's awesome. Um, thank you so much. Yeah
[02:45:54] . So I'm gonna, I'm gonna go back now to my entry stream and we'll say bye to Manu. Um, have a good night. Yeah. All
[02:46:03]  right. Um, so finally the session that we usually start the stream on, um, it's time for this week in JavaScript where I look at some of the stuff
[02:46:15]  that's been going on and give my take on it. Uh, usually I do this at the beginning because it's like, uh, it's helps me warm up,
[02:46:24]  but, uh, we're going to, uh, we're gonna just get into it right now, aren't we? So, uh, let's, let's look
[02:46:30]  at this. Um, yeah, this week in JavaScript had a lot of really interesting kind of performancey type topics that are slightly nuanced. And this is why I wanted
[02:46:38]  to dig into it. Cause I, I, this is. Coincidentally, this is one of the more interest than the last couple of ones. I'm, I
[02:46:45] 'm actually pretty stoked, uh, about a lot of the topics and things that have been coming up. The first thing that I want to point out was, um, Jason
[02:46:52]  Miller, creator of, uh, Preact. Um, he's kind of announced that they're adding some kind of reactivity to the Preact framework, which is
[02:47:04] , which is pretty crazy. Um, because you know, everyone's like, okay, well, it's a VDOM. What do you stand the gain or whatnot
[02:47:11] ? But he, he showed this bench or not even benchmark, uh, basically it's his bench. So I'm assuming it's a benchmark that he ran in the browser
[02:47:18]  looking to Chrome timelines at just how much of an optimization this is. And it, it seems pretty impressive. We, he, he basically improves the performance by five X in
[02:47:27]  this benchmark. If I had to guess what this benchmark is, it's, he says standard component rendering, but I'm gathering this has to be update performance because,
[02:47:36]  um, adding reactivity. Um, doesn't necessarily give you any benefits. And to my understanding, like at creation time. And my understanding here is that this is not
[02:47:45]  using any kind of fancy compiler. This is just a swap in just a different state primitive. So in my head, I'm kind of thinking something kind of like, um
[02:47:54] , mob X plus react, but maybe actually venturing a little bit closer to the tricks that view uses. But even with you, there was a huge trade-off
[02:48:02]  there that they didn't really address until 3.2 when they added, uh, um, like memoizing of, uh, of component partial. So I'm interested to
[02:48:09]  see where this goes. The truth of the matter is, uh, there's still room to improve performance. Um, obviously, uh, for various libraries, but in general
[02:48:20] , like you, even though this is five times here, like in the scheme of things, there's no way that this is five times faster. Do you know what
[02:48:28]  I mean? Like reactivity is a very nice DX feature, but unless you actually change the rendering in a significant way, which is my understanding, they, they, they
[02:48:39]  aren't doing here. Then it's, it's, it's a little bit like you're going to hit a wall anyways. And we're already kind of very
[02:48:46]  close to that wall right now. Um, so yeah, I mean, the problem right now is we don't have much to go off of. He hasn't actually shared
[02:48:55]  what this looks like at all. Um, other than just kind of talking about how it's inspired by views, uh, reactivity API. Um, but how's it
[02:49:04]  during VDOM rendering, teach the VDOM how to do updates, then pinpoint updates, interested updates can still be VDOM. Yeah. So, I mean
[02:49:12] , there's, this is, this is, this is interesting to see how like VDOM is there basically to diff. So I'm, I'm interested to
[02:49:23]  see how they do, if they're going to apply the fine grained updates to the VDOM, are they still diffing? I'm, I'm, you
[02:49:29]  know what I mean? Like I, there are very, very fast VDOM implementations. If anyone's like interested, you know, like if we, if we
[02:49:39] , if, if we look at, you know, a benchmark that has both updates and creation times and we kind of filter it down, you will see, uh, let
[02:49:46] 's get rid rid of this, you, you will see stuff like block DOM, which is incredibly performant, uh, VDOM library and even one more I
[02:49:56] 'd consider as a VDOM library as well. And these libraries are right up there. Uh, we we've had an interesting jump recently with vanilla JS, somebody switched
[02:50:05]  the test. So everybody's actually pushed back down the line a bit, but these, these libraries are all about the same speed. They're right up there with solid being
[02:50:11]  a VDOM library, which is quite impressive. Um, and inferno obviously right in this range. And so simply, um, being a VDOM isn
[02:50:18] 't necessarily a disadvantage, uh, but it is, it does for the optimal case at least, but it is, it is a tricky balance to a certain degree. And
[02:50:28]  I think, um, like just cause you know, you have a compiler, it doesn't mean you're, you're gonna be necessarily at the, at the front of
[02:50:36]  the list, so to speak. And like, this is, this is kind of a very interesting, um, to, to know, like where, where's Pre
[02:50:45] act now? Preact, Preact, Preact. I think it it's, it's here. It's close to spell. Yeah. Here's Preact right
[02:50:54]  here. Like Preact sort of middle in the pack, you know, and it'll be interesting to see how much implication this has because you've looked, this is
[02:51:04]  this kind of stuff. The update performance is a part where they're attacking. This probably won't affect creation, but if it can make a dent here, um, on
[02:51:12]  these two metrics, it's actually a pretty significant, um, effort. And might actually see it get into the same kind of performance level as something like Svelte
[02:51:19] . So, or, or view. So, um, something to pay attention on, uh, would love to see more. Uh, Jason's been teasing us now for
[02:51:29] , it feels like forever. He's been, he's been teasing us with, with these, uh, with these ones. I, I, I'm trying to see
[02:51:36]  if I can, if I, no, I don't, I don't, I don't have it. About a year ago, he had a new VDOM
[02:51:41]  technique that was, that increased the speed of the VDOM over vanilla or something. And I've been waiting to see this for like a year now. And then
[02:51:48]  this isn't the latest one. I'm, I'm hoping, um, this year we'll see what he's been working on the last couple of years. Um,
[02:51:54]  because he's, he's been, he's been, he's been, he's been hinting at and it's really exciting. Um, anyway, uh, yeah
[02:52:03] . Okay. Uh, yeah. So it's, uh, yeah, sorry. There's a question here. What do you mean adding reactivity to preact? I
[02:52:09]  mean, like having hooks, like, uh, instead of using hooks, using things like solid signals or views, uh, composition API. Like having, uh, independently
[02:52:18]  reactive, uh, primitives. MobX is another example. Um, but yeah, that's what I mean by that. Um, okay, moving on. Um
[02:52:27] , yeah, this one, Ryan Florence, uh, tweeted that by enabling time slicing with react start transition to prevent hydration from blocking the main thread for too long, users can
[02:52:40] , you know, can immediately scroll. Um, you can get a hundred, uh, page scores, um, essentially with, with, with remix here. And there
[02:52:49] 's a reason I called this out. And I, I, I mean, this is, this is kind of, uh, you know, on an edge case. It
[02:52:57]  just, I've been, I've been kind of concerned for, for a while that, um, and let's see if I actually mentioned, mentioned this anywhere,
[02:53:07]  but I've been concerned for a while that we're going to just, with all this ability to lazy load and frameworks, making this more automated and like all the prefetch
[02:53:14] ing stuff, kind of like we were just talking that we're going to start defaulting to lazier stuff. and like, well, what's, what's wrong
[02:53:20]  with that? Well, sometimes being lazy, um, will get us good scores on tests that aren't measuring for it. But the reality of it is, is we're
[02:53:29]  just pushing the same amount of work down the line. It doesn't actually reduce the amount of work. We're just doing it later. And sometimes that's okay. But
[02:53:36]  if you're talking about the time it takes to be interactive, um, is that where, where you want to be? Right. And, oh, did I,
[02:53:49]  did I unintentionally stop following Jason Miller? That's, that would be terrible. Did I, did I do that? No, please. No. Okay. Maybe not
[02:53:58]  me. Um, uh, I, this, this, this is kind of like one of those things where you're like, this is good. Lazy loading is
[02:54:11]  good, but there are trade offs, right? You don't actually want to wait for it. And a part of the thing that was kind of cool with remix is because
[02:54:18]  of the progressive enhancement. Uh, there's this kind of thinking that, well, doesn't matter if it's lazy loaded. Um, because you can always just interact with
[02:54:29]  the page and it's progressively enhanceable. And if the JavaScript hasn't loaded yet, um, then, you know, it, you can still do stuff with it
[02:54:37] . And it's interesting. Cause I mean, obviously I, I have a perspective here that progressive enhancement isn't necessarily solvable. I mean, Ryan kind of pulled that
[02:54:47]  up, pointed that out to me. I think let me, let me, let me see if I, if I can see the conversation here. Um, uh,
[02:54:54]  you know, there are Chinese. Yeah, no, no, no, no, no. Some other people. Okay. Yeah. Um, I've been cautiously warning
[02:55:03]  about appearance of more deferring and laziness after people have been seeing how effective this has been in Astro Quick on Lighthouse. I mean, cause it's not
[02:55:10]  free thing with, uh, islands based architectures like Astro or like quick or, you know, things that have these basic thing is you, there's a lot less
[02:55:18]  work you're pushing down the line. Um, because they're, they're only focusing on the pieces that are interactive. When you're talking about a whole react app,
[02:55:25]  it's kind of a different game. Um, and what did I say? Um, you know, there's an argument to me for, for reduced costs, pushing the
[02:55:37]  online has much, you know, my, my mind. Yeah. Right. Cause I, I, I mentioned this back in April, the way Lighthouse measures things
[02:55:43] . I'm gathering in case the page is done by then. This is one of my biggest fears that people start deferring scripts to gain Lighthouse scores. Right. And
[02:55:52]  I'm not saying people do intentionally, but when it starts becoming like a best practice, this could start being a weird widespread trend that actually makes worse UX, but it actually
[02:56:03]  improves Lighthouse scores. Um, which is a really awkward place to be because our metrics basically start supporting it. Right. And the second one is point is I don
[02:56:17] 't believe progressive enhancement is a solve. It's good to have if things explode. Um, but if hydration is absurdly slow, then being able to correct them and sure
[02:56:27] , you know, correct mistakes, your navigation is good. But, but these are different experiences. Like there's a different experience between client-side routing and server-side
[02:56:33]  routing. Um, so like, there's like a cliff there. Um, and the thing is you see an interactive page or you see a page you think might be
[02:56:39]  interactive. At what point are you safe to click on it? And like, it might be faster for you to wait like half a second more and click on it when
[02:56:48]  it's, when it's, uh, interactive than to click on it too soon and have it do a full page reload. Do you know what I mean? Like there
[02:56:55] 's this like cliff here and it's, it's kind of unexpected. I mean, we could work on better, uh, what do you call them affordances from
[02:57:05]  a UX standpoint for this, but it's like progressive enhancement is what you need because you don't want things to work when things break, but it's not a solve for
[02:57:13]  hydration. Um, so this is sort of where this perspective is coming from because like it is worth looking into stuff like quick because it's offering a potential where you can
[02:57:28] , you know, get that interactivity. Right. And to be fair, I'm not the only one, like this might have sounded like aggressive or like, I was
[02:57:37]  getting accused of being an anti reactor or whatnot, but I want to point out here that, uh, Andrew Clark from the react core team said, he agreed that time
[02:57:49]  slicing alone is a metrics hack. But you're not supposed to use it alone, right? There's other reactive 18, uh, features like selective, which is our partial
[02:57:58]  hydration. And it's a real one for time for interactive. And this I'm completely behind like, cause just turning on being lazy for the sake of it, or it
[02:58:05]  isn't necessarily going to improve things, but you've got to, you've got to do it together. Like I mentioned, like Astro quick, you got to find
[02:58:11]  ways to reduce the JavaScript and then find ways to leverage it in a way that's like smart and that this is from the react core team. So yeah, I,
[02:58:20]  just to kind of reinforce this kind of mentality. Um, well, and this is the challenge lighthouse first, other measures must then be made. Well, the thing is they
[02:58:29]  are working on stuff. Some, some people in the chat or are in the, on my original thread were like making jokes. They're like, because I said, you
[02:58:36]  know, this will work for now. I, the Chrome team's already working on this. Uh, where is it? It's called imp imp will come for us
[02:58:42]  all. I hope folks are ready. And then people are talking about interaction to next paint. Um, this is a new metric, um, that is hopefully going to shine
[02:58:52]  a light on this. Cause this is an area where it is very easy. I can achieve lighthouse. So it's, it's something that, um, I met
[02:59:00]  with Mishko a week or two ago, uh, about talking about how we benchmark this stuff in the future. And it's this sort of consideration in terms of planning
[02:59:09] , uh, how to do benchmarks. Um, that the coming in, I'm glad it's gonna get built into browser, but in general, like we were talking about
[02:59:14] , like in order to fully test a page, you can't just test it to when, uh, like the browser says it's ready. Um, and you can
[02:59:23] 't, you, you can use no, um, you can use blocking time as kind of a hint, but you can't, that you can't solely rely on that
[02:59:30]  as we just saw. So what you, the, what you really want to do is load a page and then perform an interaction immediately that will catch things off guard that are
[02:59:39]  being lazy loaded or spending too much time in hydration or whatnot. Um, you know, I was worried with the quick stuff originally, like you saw the delay when it
[02:59:48]  didn't prefetch that, that would negatively impact. And Mishko was like, don't worry about it. He was like, if sure, maybe that first hit
[02:59:57] , we take a bit of a delay. Cause we're fetching at that point. But he's like, at that point, they're probably still fetching all the
[03:00:03]  JavaScript, you know, piles of JavaScript they need for the single page app, you know, or, and then they're probably still running hydration by that point. So
[03:00:11]  like essentially we need better benchmarks to kind of show beyond, uh, beyond, uh, document ready. Cause that's not even a good indicator of time to interactive. Yeah
[03:00:27] . Um, just, just for like, well, I mean, you need, we need an interaction to make that determination. I think the problem is like when you do
[03:00:36]  a page load, there's no defined interaction on that page. Right. If you look at imp it's, it comes out over time with usage. Like, like
[03:00:45]  when I run a lighthouse page screen, I don't get an imp score. I get that for pages that actually exist and have visitors. And that, that Google over time
[03:00:52]  can measure those interactions and, and average them. It's not like a page load score. Yeah. Yeah. I mean, the, the, someone pointed this out
[03:01:05]  also in here, they called it a, there's a, there's a law for this. It's a good, goodwill or good or good goodyard law.
[03:01:12]  It essentially states that good hearts law strikes again, it essentially states that like, once a metric is like the target, like it stops being a good metric. Um,
[03:01:23]  yeah, thanks. So obviously this got a bunch of stuff because people are like, are you just being a react hater? But I mean, look, we got Jason
[03:01:32]  Miller in here until the score calculation changes. Like we're all aware of, of this. Right. Um, and he actually goes in a bit and it has a
[03:01:40]  really great description, right? Currently sums long tasks duration. He actually uses some analogy. You're waiting for your drink at a coffee shop. The time between ordering and receiving
[03:01:50]  the drink is five minutes. You say I'd waited five minutes. Now, if the barista was taking quick 15 second breaks, each of those five minutes, you still
[03:01:58]  waited five minutes. Yeah. Um, sure. I, it's sometimes actually worse than that though. But yeah, like sometimes it can actually push things back even longer
[03:02:08] . But, um, yeah, I, it's just talking about blocking and not blocking. But in, in general, yeah, this was not an attack on remix or
[03:02:18]  react. Um, I, I understand how they, they work. I, it was, it was more just talking about this is be wary. Like this is like,
[03:02:27]  we're starting to see it in islands frameworks. Um, and, you know, I've been like a little bit concerned. You know, I'm glad that quick
[03:02:34]  is putting so much effort into preloading now. Um, and w w the thing is, if we start seeing this get into like next.js or react apps or
[03:02:45]  more typical stuff, um, it's, it's, it's a little bit more concerning because as I said, it's pushing off the working and I can show you
[03:02:51]  what it means. And, and, and, uh, yeah, yeah. I, I, I was following up with them and it's, I was like
[03:03:10] , wait a second, are you saying selective and partial hydration are the same thing? And, and, uh, yeah, yeah. Uh, Fred actually from Astro one
[03:03:22]  of the, uh, thing. And I'm like, I think it's like this. And Andrew's like, yeah, it is progressive hydration with prioritization. But
[03:03:29]  they, they use the word partial to mean a different thing to the way I mean the word partial. And what this all led to was that, um, the, the
[03:03:39]  great Dan Abramoff decided to actually like, while chatting, you could tell he was like drawing this together as quickly as he possibly could. He decided to, um,
[03:03:38]  to actually, um, sketch what selective hydration looks like in react 18. Like he actually, he did nice picture diagrams for me. Look at this. So this is
[03:04:01]  awesome. And I, and cause I was, I was like thinking out loud and if you read the thread, you'll see, I was thinking of like, of like
[03:04:08]  different ways you could approach this. And he's like, no, no, no, it's way easier than that. He's like, it just happens that like when
[03:04:14]  we get past a root and we go to hydrate a sibling, if the end user is interacting on that branch, we'll prioritize hydrating that sibling over its other siblings
[03:04:24] . So we'll shorten the path, but this is sort of what I wanted to get at here. Because if you look at this, you sort of understand the challenge
[03:04:30]  here. Um, because we have a tree life structure and someone interacts down here. Um, in order to hydrate that you need to go here, here, and here
[03:04:39] , you have to go through a chunk of the tree and a lot of apps, there might be some side branches, but most of the app is going to be in
[03:04:45]  one giant tree and you're like, like the central core tree. And you're going to have to do a huge amount of hydration to, to, to, to do
[03:04:52]  this. And this is sort of why just doing that alone, lazy, like might not be sufficient. Um, this hydration trick is, is great. is great,
[03:05:01]  especially when you have stuff talking to multiple services, multiple suspense boundaries, and parallel, like this, this, this is awesome. But in a lot of, um, apps
[03:05:09] , you, you're still going to have that core central bottleneck. And that's what frameworks like quick that do resume ability solve essentially, because they can, they can
[03:05:18]  hydrate the child before the parent, which completely changes the nature of this diagram. Yeah, this is, this is, this is definitely art. You are, you
[03:05:29]  are right about that. Um, so he, he also did this thing and he was, he was showing like, so to get to this hydrated, we hydrate this
[03:05:36] , hydrate this, this, this, this is again, a great diagram. He's showing how he onioned into this hydration point and skipped hydrating this stuff.
[03:05:44]  And this is, this is pretty close to like what it, what it actually feels like. Um, so yeah, it's a simple trick. But it probably for large
[03:05:57]  apps would actually have a noticeable difference. But as I said, um, you know, someone, someone asked me actually, after I posted this, they're, they're
[03:06:07]  like, so do you still think that resume ability is like, um, do you still think this method is worse than resume ability? And I, I, it was
[03:06:17] , it was a tricky one because, um, it's hard to compare them. Um, because there's definitely hydration happening in that react scenario. You definitely have to rer
[03:06:30] un everything top down, even if you're doing it selectively in order. And whereas on the resumable side, there is kind of no hydration. You just
[03:06:39] , it just picks up at that point that click handler, um, draws it around. And I think this sort of leads me over to where I wanted to kind of just
[03:06:48]  kind of talk about this. I, this is going to work better if the chat's interactive. I don't know if this is actually, um, going to,
[03:06:58]  um, work because I'm very late in my stream now. So usually the, the, the big crowds have moved on, but like, if you, if you just
[03:07:06]  start bucketing stuff and you, I, I don't know if anyone's seen my old, my old charts, but like, I, I, there's basically
[03:07:13]  this idea of being progressive, which is the idea of lazy loading. Essentially I'm going to put bracket lazy. There's this idea of being, um, I'm going
[03:07:24]  to blow this up a little bit. Um, what was it going to be? This idea of being, um, partial, which means not everything. And, and then
[03:07:34]  there's this new idea that's on, that's coming in, um, called that is resumable. And you might've heard of that, but that's
[03:07:44]  the idea that it picks up where it left off. Essentially. Uh, it doesn't, it doesn't, it doesn't do extra work. And the, the thing
[03:07:53]  is when you talk about different techniques, um, they all kind of end up. In my opinion, this, this framework for, for, for, for splitting stuff out
[03:08:05]  has actually made it a lot easier for me to talk about these, these subjects, because I, I did write an article kind of, uh, getting on this a
[03:08:14]  little bit when I was, uh, a couple months back, I'm talking about different techniques, but the thing is there's constantly new stuff coming out. So like,
[03:08:23]  I, I, I figured like we've already talked about a bunch of techniques while we were, we were sitting here. Right. So for example, um, the
[03:08:31]  selective hydration that we just saw from, from, from, uh, react is a form of progressive hydration. The idea is that it hydrates stuff in part as it
[03:08:44]  makes sense and it just prioritizes it. So that's an example of selective hydration. Another example, uh, or sort of progressive hydration. And, um, the
[03:08:58]  other, the other one, um, is, uh, what's another example, uh, of progressive, if you've ever used astro and you've gone client visible
[03:09:08] , that's, that's, uh, progressive hydration, right? The idea that you can choose to only load it. Yeah. There's a comment in chat here
[03:09:24]  talking about like how, well, I mean, the tricky part is we're still bound by the network and end user device. And this makes it kind of really, it
[03:09:34]  makes it one of the most constrained environments to work on. This is why the web is so warped, like in terms of expectation. It's so funny cause we
[03:09:42]  see a lot of backend into like hope for web assembly, but, and maybe like, it's good for performance, but because of the load time characteristics, at least today
[03:09:50] , it's hard to picture it completely replacing pieces of JavaScript. If it has to load like bigger chunks of byte code. And one of the, one of the tricky things
[03:09:58]  is like it's gotten so far, um, on this. Um, yeah, e-commerce. Yeah. I was going to say it's got e-commerce is
[03:10:08]  the perfect example where money is to be made. Like it's actually noticeable. It's actually like bottom line defecting. I worked for eBay and you better believe every
[03:10:18]  page was religiously measured because even hundreds of milliseconds shifts, um, you would, would cause loss of revenue. And it just like, it's going into a point right
[03:10:30]  now where I'm, I'm, I'm seriously, like when I look at it and people talk, oh yeah, I want to work my backend and rust and
[03:10:34]  stuff. And I'm like, sure, that's, you can do that. But like, there's this challenge between having the maintenance cost of a single app as things
[03:10:44]  get more complicated and multiple apps. And classically we could do the split because we'd be like, okay, we're going to be very pinpoint. But when people
[03:10:52]  start trying to make the client-side apps apps, like single page apps, the problem is it needs, it becomes this big monolithic thing that ties everything together.
[03:11:02]  And you, you, you pull forth the blob, you know, and it's hard to kind of take that and split it up again, which is what, you know
[03:11:09] , quick and Marco and some of these islands frameworks are doing. And the, the, the challenge here is that, um, you know, when you, when you consider
[03:11:18]  that sometimes actually using the execution on the server, pre-compilation is one thing, but you only get so much knowledge there server server, server runtime is another thing.
[03:11:27]  It, the impact you can have on the end user by changing, uh, the hydration, um, and the, uh, JavaScript loading, uh, characteristics is bigger
[03:11:38]  than the change of making your backend render 10 times faster. Like, yes, your database layer is important and that's usually the blocker, like the async data,
[03:11:48]  but the actual speed of rendering is not necessarily the blocker. I'll talk more about the speed of rendering in a minute, but like, like. Make it 10
[03:11:57]  times, make it, you know, 20 times. Like it's going to make a difference to your bottom line as a business in terms of how much compute you use,
[03:12:03]  but compared to the effect it has on UX. Like JavaScript on full stack, JavaScript has a huge benefit because it can make such a big impact on UX because we can use
[03:12:13]  it to shift less JavaScript. There's always ways around it as in don't maintain two separate apps, but as long as JavaScript has a stranglehold in the browser,
[03:12:22]  it's very hard to like see that shift yet. Yeah. Right. Um, like, don't get me wrong. I, I, I value fast server rendering
[03:12:32]  and I'll, I'll show that in a minute, but yes. Well, I, I, I wanted to, I, I just wanted to say that specifically sort
[03:12:39]  of asking if client is eligible, partial, progressive sort of it is, but specifically the directive that's visible or that's, you know, whatever, like idle, that
[03:12:50] 's the progressive part. That's telling you when to load it. An example of partial, as you guys know, is islands. Right. We've talked about that
[03:12:59] . Islands are partial. Right. Client visible is, does apply to islands. But like, I, I just wanted to kind of give, give an example here
[03:13:08] . Uh, what are other examples of partial? Um, um, because these sometimes go hand in hand, but not always like quick. Didn't always have true partial
[03:13:20] , um, ability because it essentially didn't know what was server only partial kind of needs knowledge of knowing what server only without that knowledge. Um, it's very hard quick
[03:13:30] , didn't leverage that knowledge initially, and they were completely progressive and resumable, but did not have partial. Now they have added partial and you might ask why that
[03:13:37]  matters. Well, data serialization. If you know, things are never on the client, you don't need to send the data. Like if you know that they
[03:13:45]  can never be changed on the client, um, it's sufficient. And this might, that benchmark or that, that hacker news example, the compressible components is actually a
[03:13:54]  really good benchmark. If you get enough components, you can actually see the impact of not being partial. Um, it slays pretty much any framework that doesn't have partial
[03:14:03] , um, or, and recursive partial. But yeah, what else, what else is in this thing? Like we, we, we, we know that,
[03:14:13]  um, uh, another example of progressive, um, what else can we do that's progressive? Uh, quick, uh, qrls are an example of being progressive
[03:14:24] . Um, is the, the way they load. Um, let's, let's, I mean, I'm doing this also for anyone in the chat. If
[03:14:36]  you have any questions on like a term you've heard and you're wondering, um, in a sense, even though this is a little bit looser, we could say
[03:14:45]  that, um, streaming. HTML is a form of progressive. I, I, I, it's a stretch, but essentially we're sending the HTML in chunks and only
[03:14:57] , and hydrating it in pieces. Like it, it is sort of like a lazy loading. Thing. A lot, a lot of stuff is on this progressive side
[03:15:05] . Um, and not so much an other thing. Uh, let's look at some other ones. Do we have any other examples of partial? Yeah. React server components
[03:15:14] . That's an example of partial. Um, resumable is a tricky one. I, I gave it a category, but truthfully there isn't much example
[03:15:25] . Resumability is resumability. Uh, it hasn't been given any other names yet. Um, cause resumable is basically, um, uh, not
[03:15:35]  doing anything. Like it's just continuing where you left off on the server. There's like, there's, there's not really much else to it. Uh,
[03:15:48]  let me see if I can put that there like quick or whoever has resumability. It hasn't been rebranded, but yeah, I don't know if anyone
[03:15:57]  in chat has any other terms they keep on seeing slung around and trying to understand like what they are, like different hydration terms. Like, um, yeah, this has
[03:16:09]  been one of the things I've been trying to fight through because these things tend to get, um, um, rebranded, uh, um, I'm trying
[03:16:20]  to think of some other examples. Uh, you know, anything with the word progressive usually ends up over here. Um, right. What do you, yeah. Cause
[03:16:41]  like, I think if you've heard the term for like any, almost anything that uses the term progressive ends up over here, progressive rendering is another thing. I mean,
[03:16:49]  that's basically the same as streaming. Um, what other terms, what do you got? Maybe you could call serializing tops level input. Yeah. Yeah. That's
[03:17:00]  an interesting one. Yeah. I don't, I, uh, I, yeah. I mean, the whole trick with resume ability is the reduction of execution. So
[03:17:12]  in a sense, serializing something does, but you have to basically serialize internal framework state. I'm trying to think of another, there's like progressive hydration. Yeah
[03:17:23] . Yeah. I didn't even put that in. Yeah. Obviously yeah. Like progressive hydration itself is an example of progression of this. It's like, I didn
[03:17:34] 't mention it, but the term, uh, partial hydration is an example of this. Right. Um, so most things like, most things are a matter of progressive.
[03:17:50]  Uh, you could say that certain types of code splitting, but this isn't necessarily true. Cause code splitting usually happens after hydration. Um, it's not usually part
[03:17:59]  of that initial load, but I'll, I'll, I'll grant it there. Yeah. Yeah. I mean, you could divine it that way. I mostly.
[03:18:12]  Yeah. I mean, in the complete abstract, when you're talking about not doing work, cause in a resumable system, any work you don't do is
[03:18:21]  not, is, is work you save. Whereas like in the partial. Yeah. That's an interesting idea. Like call it coarse grain resumable. Cause of the
[03:18:29]  stuff that doesn't the non islands. That's interesting. I don't know. Um, I'm reserving resumable for the part that the code that actually runs
[03:18:38]  in the client and partial for differentiating with it and then lazy or, or progressive. So you can see that most techniques fall into this category, but there's,
[03:18:49]  there is a. There is a, there is a, there's a, there's a tension here because. Being lazy in itself is not a good thing. Like it
[03:19:01] 's good because it's non-blocking, but it means it happened. It happens later if, if it never happens, it's a good thing. But if
[03:19:09]  it's anything critical happening later is worse than happening. Like sooner generally. And then partial, um, obviously lets us. These are tied together. Cause sometimes if you never
[03:19:26]  do the thing and it's lazy, then it's kind of partial. That's why they get tied together, but partial is explicitly like this. You don't know
[03:19:34] , this is like an absolute. You're like, this is the code that is server. And this is not, you can bundle that way. You can, you can
[03:19:41]  act with confidence. But the challenge with this one is it, it requires kind of rules. You need to know this. You need to be explicit or you need to follow
[03:19:50]  very strict patterns. That's why there's .ask. Like, I, I, I, I mean, this is just another thing on islands, obviously. Sorry
[03:19:57] . But, but if, if you start seeing .server or .astro or islands as a, as a folder, you know, you know that you're in
[03:20:09] , you're in this zone, right? Cause you, it needs to be, it's, it's, it's called out. And the, on the flip side
[03:20:17] , resumability is great. Except the problem is like, as someone mentioned, it's like, it's, it's the trick to continuing is also like serial
[03:20:28] ize almost everything. And that's probably not free. So like, essentially you can, you see if you put all three together, you have a really nice story. Because
[03:20:43]  if you don't do extra execution, but you have to serialize everything. You're like, holy crap. I got to do a lot of work on the server
[03:20:50]  to get it that way. Like you're paying the cost on server rendering time. But then if you do partial, it's like, oh, you don't need to
[03:20:56]  serialize everything. So it actually counters the resumability, um, because it, because it does less. And then progressive is kind of like what you do when you
[03:21:06]  need to, right? If it can, it can, it can, it can, it's like, can take it to the next level. The one thing you notice
[03:21:11]  about lazy and progressive is it's always an option to make something lazier. You can always like do something later, but it's harder to actually build towards this knowledge
[03:21:22] , um, of being partial and resumable because, you know, this requires very specific knowledge or very specific, uh, like execution. Yes. Quick is all
[03:21:37]  three and it is the first framework to put all three elements completely together. yeah. Uh, it's I, I, the reason I like pointing this out is because
[03:21:48]  I think too much attention gets focused on the progressive part. People keep on going, like going, oh, you know, it clicks and it loads the JavaScript. I would
[03:21:55]  be happy with quick. If it didn't, if it wasn't progressive, it was just partial and resumable. I'd be perfectly happy with quick. I think
[03:22:01]  progressive is something you need when your app becomes like huge scale. It's just interesting that quick, everyone attacks us from a different place. Quick started with progressiveness and
[03:22:13]  basically went progressive and then they found resumability. And then they, at the end, partially because of my nagging, they found partial. Marco went kind of the
[03:22:24]  other way. They started at partial, found resumability and, um, and probably will have progressive at some point I imagine. Um, personally where I'm sitting
[03:22:35]  from a single page app perspective with solid and stuff, I think the only one of these three that is actually viable is the third one. And I, that's hard to
[03:22:44]  do. And I don't, I don't know if frameworks will be able to make that move because progressive isn't going to help us. Like we're just showing like
[03:22:50]  it's, it's a, it's, it could be a hack if it's not done properly. And partial is very, very, very difficult. Uh,
[03:23:00]  it's not very, but it's more difficult to pull off from a single page apps thing. We haven't solved the routing problem. So resumability in a sense
[03:23:07] , you can just view it as a better type of hydration, like a more effective hydration, a hydration that doesn't run. So, but there's trade-offs.
[03:23:14]  So I'm very interested in this, but I, the thing is the reason I want to do this is not talk about differences, but talk about similarities, talk about
[03:23:23]  how, how these are everything that's been going on is actually working along in these objectives. When we talk about server rendering and, and hydration. Yeah. Yeah. Yeah
[03:23:40] . This is the newest thing I w I, you might not notice in the demo, uh, my old version, I had like this, like no serialized thing
[03:23:47]  that I had to do to basically get quick to do it quick, added partial about a month ago. Um, they, the Mishko sent me a video and he
[03:23:55] 's like, Brian, did we do it? Like, have, have we, have we, have we, have we, have we done it? And I'm like
[03:24:01] , yeah, no, this is it quick. Just figured out how to trace back from the, the event, basically follow the reactive graph to figure out what didn't need
[03:24:10]  to be hydrated. That's why a man who was so intent on looking at that hacker news demo that I had open and seeing, uh, making sure that stuff,
[03:24:18]  uh, wasn't over serializing, because this is a pretty new thing, but yeah, quick now does it all. Um, this is, this is one of my
[03:24:26]  last pieces that I, that I was kind of like nudging them on. Um, and I'm very glad that they followed through with this. Um, and they
[03:24:34] , they did this two things. And the other piece that they did that I've been nudging them on is lay, lay back off progressive a bit. It's a
[03:24:42]  nice story. The zero kilobytes of JavaScript, but an even better story is 10 kilobytes of JavaScript that you need on the page. Yeah. Sorry.
[03:24:58]  This is usually, sorry. I splashed it down. Yeah. Thanks. This is usually where I start. This is my favorite part. Um, often where I get
[03:25:07]  to like, kind of talk about where things have progressed. Um, we, we touched on a lot of these subjects, um, during, uh, the talk with quick
[03:25:15] , but I usually like at the preface because it kind of puts the whole talk in perspective. Um, yeah. And yeah, quick, quick has done what,
[03:25:22]  what I wanted to see. Well, I was sitting there with Mishko the other day and he's, and he was like, Ryan, everything you described me,
[03:25:28]  it sounds like you just want quick. And I'm like, yeah, except there's one thing that I want. One thing that I want even more than quick. And
[03:25:36]  that's quick with fine grain rendering. I think we can do better. I, I once accused quick also of not being truly resumable. And while this is
[03:25:48]  a bit of a gray area, cause now they have the reactivity and, and stuff, and it's kind of moving that way. And that there's still a V
[03:25:55] DOM that re-renders components. So like, if I was going to be a purist, I'd say Marco six is resumability is mo is more
[03:26:02]  pure. It is more resumable. Just like Marco six is partial is more partial. Like it's, it's insane. That, that hacker news demo,
[03:26:11]  um, that we made, uh, I don't, did I close it down? Let's we didn't, we didn't do one thing that we should have done
[03:26:19] . Let's, let's, let's, let's quickly go over there and, and start, start, start, no, not dev client. Uh, the
[03:26:26] , uh, the, the express exam. Let's, let's, let's, let's, let's look at this in a new on Cognito window and
[03:26:32]  look at it localhost 8080. Cause we didn't do this. What I wanted to point out was when we go to the comments page, preload works lovely.
[03:26:41]  Quick is loading 36.7 kilobytes. I don't know. Oh, no. So that's everything. Let's get the JavaScript. Yeah. It's
[03:26:50]  smaller than that. Um, let's do this one more time. Oh, because of the cache, I don't get to see it. Okay. Let me try it
[03:26:56]  again. Oh, fine. I will do math myself. Uh, wow. Quick's actually got larger. Interesting. Okay. 28 plus change for, let's say so
[03:27:11]  32 kilobytes of JavaScript. Um, there's still a lot of moving pieces to get this to work. Um, whereas if I was to take like a Marco
[03:27:19]  six hacker news Netlify demo on the exact, on the exact same page, what you're going to see is that the Marco example, um, loads significantly less JavaScript
[03:27:33] . Uh, sorry. It's cached again. Why am I, where's my disabled cache? Let's, let's do this again. 1.6 kil
[03:27:41] obytes. And this is the thing. These trade offs aren't like straight up because you might be going, okay, well, 30 is not bad or whatever. And
[03:27:51] , and 1.6 is insane. But like, you can also for a simple app, you could also, you know, you could also do something like, uh,
[03:28:01]  I forget which one this is like 23. This is 12.5 kilobytes for solid JS, a single page app framework. So it's, it's not
[03:28:12] , it's not science here in terms of size. Like just because you have a good approach doesn't necessarily mean that like, you know, this, this scale is much
[03:28:21]  better. Like when the app gets bigger, that 28K is, is barely going to be a concern, you know, and thing where, but like, I just
[03:28:30]  wanted to kind of show that, um, like there's a, even within a theoretical zone, there's, there's, there's room, right? As, as
[03:28:40]  I said, like, this is sort of the kind of, uh, yeah, let me switch here. Um, consideration. Yes. Thank you. Yeah. Yeah
[03:28:55] . Yeah. But the thing is you, you need JavaScript to run. So you don't, sure it's zero, but then if you click on it and you don
[03:29:04] 't load it ahead of time, then, uh, you're going to get delay. If you're on a slow network or you just want in the tunnel, so your
[03:29:10]  page doesn't work. So the trick is you still load the JavaScript. Um, like, and the thing is, if it's not much JavaScript, it's not a
[03:29:17]  big deal that like loaded on idle is what we're getting at. Cause the hydration cost is zero. So it's like, it's not like it's holding things
[03:29:24]  up. It's not blocking, but it is kind of like one of those questions where like at a, at a, at a certain point, like you can't just
[03:29:34]  look at hacker news demos or simple examples to make these kinds of decisions. We need to understand the trade-offs much better. Yes. Yeah, exactly. So yeah
[03:29:50] . Yeah. But like, you know what I mean? Like if, if we only load the one kilobyte, there's potential for a bad user experience for any
[03:29:59]  critical, uh, JS. Yeah. And this is why we focus so much on the, on the pre-fetching. Cause like, if you've like
[03:30:08] , this is a simple example, picture if the pre-fetching was a bit heavier and stuff like you, there is value to having the critical stuff on the page
[03:30:15] . And that's why progressive is like caching. It's like being lazy. You know, it's like the hardest problems in programming or whatever. Like you there
[03:30:23] , there's no single right answer. Um, that's why it's challenging. Cause you know, this innately that with lazy loading, there's no single right answer
[03:30:32] . So you can't completely depend on a compiler for it. Your options are go to the data analytics or let the developer choose. I think let the developer choose a good
[03:30:41]  thing. I think going to the data could also be really good. Once you have a site that's been running for awhile and you know, the stuff, I think,
[03:30:48]  I think the, the absence of it, um, the most reasonable thing is just pre-fetch anything that's on the current page. And at that point,
[03:30:58]  you're slightly better to just load it in a single bundle anyway. So it depends on the scale, you know, and what you're doing. So I, I think
[03:31:06] , I think, I think my point is there's not, there's no, like, it's not like perfect solutions here. Um, so yeah, I mean
[03:31:18] , I, I was just kind of showing like the theory versus the practice kind of thing, right? You can be more resumable and more partial and maybe that'll
[03:31:26]  have positive benefits. I'm super stoked. As I said, that, that quick is now all three. Um, but I, you know, I, I think,
[03:31:33]  I think a lot of the work being done in different frameworks is going to be over the next two years is going to be looking along these avenues because hydration and SSR is
[03:31:43]  really a concern and a thought. So it's like, how do we attack these? And for me, it's been very easy to bucket things this way. I
[03:31:49]  don't know. Um, you know, what is it here? Yeah. Lazy fetching is better for Ben for it's a meter connections. That's where I
[03:31:59]  really prefer pre-fetching, right? Exactly. And like, ideally at which point you're like, is it complexity and just doing this pre-fetching
[03:32:07] , you can just bundle stuff like at a certain size, it doesn't really matter up to a certain size. Um, yeah, yeah. I'm, I mean
[03:32:17] , I don't know if there's that much on the prioritization side. Um, but if, if you could control it, that's what I'd want.
[03:32:31]  Thank you. Yeah. I mean, we're, we're, we're looking into this. I, I would also add Svelte to that title, or I
[03:32:39] , I, I give Svelte an honor on honorable mention here because I think they, they have the pieces they need. They just haven't done it yet. I
[03:32:49] , I have a lot of hope for Svelte, um, in terms of what, like, when I look at what they have available to them, um,
[03:32:56]  there, there is a lot there. They're just, they haven't made the decision to go down this path. Um, so, uh, yeah, I mean,
[03:33:04]  I, I, I, I, I'm not going to bet. I, I'm not, I don't tend enough to bet on a single horse. I like
[03:33:09]  looking at different approaches and seeing how far we can take them. And I think, I think Svelte does have a unique approach that could play into where things are heading
[03:33:17]  if they chose to go this way. Um, I think solid has a unique approach and, and obviously Marco and quick, um, are already showing what you can do
[03:33:25]  with this stuff. The compiler, they can do more with their compiler if they want to. And the biggest thing is Svelte's compiler automatic already kind of hoists
[03:33:37]  out state. It already does a trick for lexical scoping. And that is the key to doing resumable, just throwing it out there. Um, I
[03:33:46]  don't know if, if they've kind of thought through that at all, but if you look at, uh, how Svelte compiles, they like over
[03:33:54]  time with what we did with Marco six, I've started seeing a lot of similarities there. It takes more aggressive code rewriting, but Svelte already like has a
[03:34:03]  lot of experience in that area. So if, if this was something worth doing, they could look at, but I think, uh, Rich has already stated himself that he
[03:34:09] 's kind of like waiting to see what's going to happen. Um, so like, it's one of those things where like, I think, I think it's
[03:34:16]  fine. I think they, they have enough going for them right now. They'll figure out how they want to play into this. Right. Cause I think everyone gets a
[03:34:22]  sense that islands are not the end of the story. Like it's, it's, it's a stepping stone. Right. Um, and, um, we,
[03:34:31]  we need to, we need to, to kind of like figure out what the next step is. The, the next step has to do with routing and I've been hammer
[03:34:40] ing this on people for ages, but we need to figure out routing here. It kind of ties together. A lot of these stories. Oh, I forgot one that I
[03:34:48]  didn't mention on this list. Do you, do you all know what I didn't, didn't put on it? Progressive enhancement. Where does progressive enhancement go
[03:35:02]  on this list? Anyone, anyone have, have any guesses where progressive enhancement goes on this list? Nobody want to take a stab? Yeah. I mean, maybe it
[03:35:25] 's a bit of a trick question because I'm going to put it down here. Cause okay. let let's, let's, let's, let's, let
[03:35:32] 's, let's, let's, let's put it, let's put it through here. Yeah. Right. Cause the funniest thing is I love all the answers here
[03:35:44] . Thanks. Thanks everyone for, for, for, for participating. Yeah. Partial, resumable, partial nowhere. Yeah. Cause here, here's, here
[03:35:54] 's my perspective, at least the way I've defined these things. You might go, okay. Resumable is actually probably one of the more reasonable places to put
[03:36:03]  it because you're like, in a sense, it does pick up where the server left off. Um, but the reason I don't put under resumable is because
[03:36:13]  it doesn't actually do the behavior that the app does. Like it's a, it's a, it's a shallow clone. It's not like it's actually the
[03:36:23]  app's intended behavior. It does less. Right. It doesn't even, pick up. Like it just, it just is right. That's a, that's
[03:36:32]  a great way of putting it. Someone's like, it doesn't, it doesn't even pick up. Right. Um, is PHP with jQuery resumable?
[03:36:39]  Sorry. I'm interrupting my own thought, but, um, it's pretty close. The, the only thing is that you're managing two different apps. So you
[03:36:54]  don't, there's the, again, it's not picking up because there was no app, but in terms of what resumable is jQuery with PHP might be
[03:37:01]  the closest to there. I'll give it, I'll give it a, a different text. I'll give it like an honorable mention text. We'll just, we
[03:37:08] 'll just go, we'll just go like PHP plus, plus jQuery. Like this is, this is like the, the, this is like the, you,
[03:37:17]  you know, and any variation like that, the old sprinkles frameworks. This is, uh, yeah, we'll keep it blue. We'll give it honorable mention text
[03:37:26] . Okay. But so it doesn't quite fall in. Yeah. So progressive enhancement does lot from no JS to JS. So, I mean, but so this,
[03:37:42]  this argument for resumability is probably the same one you can make for progressive enhancement to a degree other than progressive enhanced, like, yeah, this is basically if, if
[03:37:51] , if PHP for jQuery is, is, is, is, is then perhaps we can say, say, say resumability is let's move to partial, uh
[03:38:00] , progressive enhancement is not really partial to any degree. It doesn't care about, uh, like server versus client. I don't think I, I can't make
[03:38:09]  a good argument for partial in my head. Um, yeah, exactly. So in a sense, resumability is, is like this whole table is, is a
[03:38:26] , is a single app problem, right? So we'll, we'll, we'll, maybe we'll just, uh, reserve this one as kind of just over here
[03:38:33]  and we'll think about it for a second. But the funny, so yeah, I don't think progressive enhancement is a partial thing. Um, because it's just,
[03:38:42]  it just is, and it's not a, from our definition of progressive, it's not a progressive JavaScript thing. It does add, JavaScript can get added on top,
[03:38:51]  but progressive enhancement, um, isn't like a technique to defer JavaScript. So honestly, from my opinion, I, I, I'm, I've, everyone can
[03:39:02]  differ here, but I, I'm, I'm actually on the, on the thinking that, uh, progressive enhancement is a good thing. And it is just not on
[03:39:15]  this table. I am, I'm, I'm on the nowhere camp. It's, it's, it's, it's, it's kind of over here
[03:39:19]  somewhere because you know, progressive enhancement is like to me, it's like accessibility. It's like core parts of the web behavior that should be happening. You should make your
[03:39:31]  apps accessible. You should make them, you should make them work without JavaScript, but it is, it is not a hydration technique. It's, it's none of these
[03:39:39] . Yes. Yes. You've been, you've been following along. We have a winner. That's, that's my opinion. So yes. Um, just
[03:39:52]  one of the, put, put that in there just cause it came up cause we were talking about progressive enhancement earlier, but yeah, I, I mean, I don't
[03:40:00]  know if anyone has any more of these, but I heard you're using my my favorite app. Yeah. Funny enough. Yeah. It was Dylan from Marco who actually
[03:40:11]  did originally, uh, didn't initially put, put me on this, but I, I, I definitely using as an education on, on stream, uh, was something
[03:40:21]  that Theo makes very good use of. Yeah. Yeah. We, we, we made a whole Marco presentation though, uh, about the, I think it was like
[03:40:32]  the future of Marco or like micro front ends at eBay and Dylan did every graphic in the PowerPoint or in the presentation in Excalibur. Um, but yeah, I
[03:40:44] , essentially. Good stuff. TRPC. Yeah. No, TRPC. Uh, I need, I need to spend some time with that, uh, coming up
[03:41:02]  definitely. Um, it seems like here, I, I saw your stream on TRPC, TRPC 10 and it looks amazing. It was beautiful. Yeah. Oh yeah
[03:41:14] . All the Excalibur love all around. Um, so, uh, where, where, where was I? Yeah. Sorry. This is, I, I
[03:41:24]  think this table has served its purpose unless, uh, someone can think of anything, other topics, but the truth of matter is like every time you see a new buzz
[03:41:31] word over the next little bit, I mean, maybe other than edge functions, um, a lot of the techniques you see come from frameworks probably are going to fall into bund
[03:41:40] les. Someone, someone's going to call it like instant. I heard someone call, uh, instant frameworks as a, as a new buzzword topic, transitional apps.
[03:41:50]  Um, it all, all of these things are trying to bucket some level of these kinds of things. Um, yeah, Steve is a big, uh, Excal
[03:42:03] ibur draw. If you've seen all, any of his perf tips on Twitter, um, Steve makes it heavy use of Excalibur draw blazingly fast
[03:42:11] . Oh, some reason the old blazing fast been around forever. Right. But now all I can picture, um, is as primogen, uh, talking about it
[03:42:22] . Uh, now it's just, uh, it's just, everything's blazingly fast. Uh, okay. But speaking of blazingly fast, um
[03:42:29] , we actually have one last, uh, uh, thing for this week in JavaScript and that's SSR raw rendering performance benchmarks. Um, and I, I,
[03:42:45]  I, uh, this benchmarks ancient, um, to be fair, like it's, it's very, very old. Um, it was created in 2016, I think
[03:42:57] , or 17. Dylan did like a bump in 2019. And then I've been like, kind of trying to make it still work while it's like incredibly crippled
[03:43:06]  and we probably need to rewrite it. But I, I went and I took it and I was, I was working on new version of solid. And I was like,
[03:43:15]  I was trying to like, make sure I didn't introduce any regressions. And as my starting point, I actually found a small performance improvement I can make on solid
[03:43:23]  and I tested it and I was like, oh, okay, cool. I, and I looked, oh, you know what? I should bump all the versions of the
[03:43:28]  other frameworks. And, uh, sure enough, it's almost unanimous. Almost every framework has stayed the same or improved SSR performance pretty drastically in the last year
[03:43:43]  or so. Um, and I, I think that it's actually, this is what I was talking about, about the focus being there, right? There's obviously frameworks
[03:43:51]  like Marco, which historically, uh, have been just like ahead of everything else. You might notice Inferno here. I, I, I can open a PR or
[03:43:58]  an issue on Inferno. There, there is a, bug in their escaping logic where something's getting through and because they're not escaping it, this benchmark,
[03:44:05]  um, is about their, their scores about 10% higher than it should be. And I, I don't, I didn't want to draw attention to it. I
[03:44:13]  don't usually use this benchmark, but unfortunately I usually use the other one, the search results, but unfortunately I couldn't get view to work. I'm having such a
[03:44:21]  hard time with a view three migration. Um, and as I said, it's probably on me. Um, I view always trips me up a bit, but I
[03:44:28]  was like sitting there and I was like, I need to update view to be fair. And I just was having a very hard time upgrading from view two to view three.
[03:44:35]  Um, and, uh, essentially, um, like I, so I had to use this one truthfully Inferno view, Inferno view and Svelte
[03:44:51]  are all in the same zone. In reality, they are all just right around here, which is like a tiny bit behind Marco five. And that that's, uh
[03:45:02] , and actually with this bump that Inferno got recently, I wouldn't be surprised if Inferno is pretty close to Marco five now, but I, I,
[03:45:10]  I didn't go in and manually hack the escaping in which I probably should and might do that in the future. Um, if, if I don't get them on
[03:45:19]  a fix, I wasn't sure if Inferno was still being maintained that much, but yeah, look, version eight just came out. Um, but the, the
[03:45:26]  big movers here is react 17 to 18. This was like, this is a significant move for react. Like I, I didn't see that coming. No one
[03:45:35]  didn't tell anyone, but and another big one Svelte this one I knew was coming. Um, about two years ago, someone, when I was first implementing SS
[03:45:46] R for solid, um, someone came up with a really quick escaping algorithm and it made my SSR. It's all way faster. Like remove the last bottleneck we
[03:45:55]  needed to get the performance, um, where it is way, way up here. And, um, they saw it in the self community and they're like, we
[03:46:03]  need to do this too. So it took two years, but they merged the commit and it, it doubled the speed of, of their, uh, raw SSR rendering
[03:46:12] . Um, so that was a big one. And then, as I mentioned, view is the other one, another big chunk where they basically, uh, between view two
[03:46:20]  and view three, I believe they moved, um, to stringing cat from, uh, V Tom on the server. And this made a, a, a big
[03:46:27] , uh, big chunk. So there's a question. Why is solid so fast? Well, I can, I can actually explain that cause I've been investigating this again
[03:46:37] . Right. And, um, it's you're only as fast as you, as the next bottleneck is kind of like what I want to say, but,
[03:46:46]  um, w w one of the reasons that solid is so fast is the lack of intermediate objects. Um, it's funny. I did a trick where I did a D
[03:46:56]  opt on solid. Cause I was like trying to play around with a different async insertion model for streaming or for not stream for when, for when you want to do
[03:47:06]  async rendering and you want to do, uh, async insertions after the fact. And I was like, what if we just kept all the arrays around and
[03:47:13]  then let the components themselves swap the stuff in place so that we could like not have to do any kind of string replace operations and stuff. So I did a test on that
[03:47:22] . And as soon as I stopped compressing the arrays right away and going straight to string again, as soon as I started leaving the structure around and then compressing it at
[03:47:30]  the end, solids performance on SSR, um, jumped right down to where Svelte and view and everyone was. And then what I did was I, then
[03:47:42]  I was like, wait a second, I can optimize the single case. Like not instead of like iterating over the array optimized for like the one element case and then solid
[03:47:52]  jump back up to 60,000. Um, but like for benchmarks like this, it is that fickle to be fair. Um, because the first bottleneck you
[03:48:03]  hit is going to like apply exponentially, um, on an ops per second benchmark. So generally speaking, solid just has the least bottlenecks. That's the best way to
[03:48:14]  explain it. Um, right. Um, so, I mean, I've, I did some hand optimizations, obviously. And as I said, I recoup
[03:48:23] ed most of the speed in that little demo that I did, um, that I was playing around with, but I was just curious, right? Because, and this is
[03:48:30]  the kind of stuff I'm playing with right now, because, um, this is synchronous rendering and you have a certain amount of play here, but async rendering is where
[03:48:39]  I really want to make a win. And async rendering is innately more complicated and figuring out how to optimize for that is something that I can't do without being
[03:48:47]  able to benchmark it or make to make decisions because you're trading one kind of D opt for another D opt and you have to know which one's the right one to do
[03:48:55]  it. Right. You can, you can basically prioritize synchronous rendering, um, and, you know, hope that you don't have to do too many, you know,
[03:49:05]  string operations. You can keep the, the, the, you can keep a sort of virtual DOM or a certain amount of stuff in memory, which makes it easier to do
[03:49:14]  insertions, but, you know, and hope that balances out the other way. Um, all this fast as a drummer. Nice to see you here, Duncan.
[03:49:29]  It's the drummer of my old punk band Solid. Um, yeah, it was true. That, that, that is one of the reasons why it's solid. It
[03:49:37]  was so fast. Um, yeah, we were like a fast, like a kind of like punk hardcore, you know, like, you know, like, so drum
[03:49:48] ming speed definitely made a big impact. Um, anyway. Uh, no, I don't have any cats. Unfortunately I'm allergic to cats. Um, asking about
[03:50:02]  instant. Yeah. Honestly, it's hard to come up with marketing names that catch. Um, resumable is something that made sense from a technical sense. So I
[03:50:12] 'm glad that it kind of caught, but it's not working from a marketing sense. So that's why this question about instant and whatnot. It's, it's,
[03:50:19]  it's, uh, it's an interesting question because like, I don't know if that also speaks to someone, uh, you know what I mean? Like the
[03:50:26] , someone's got to try it and see if it actually works, you know, like sometimes the things that work don't make any sense. I don't know. Jam
[03:50:34] stack that worked pretty well. I don't, you know, and it's probably the probably reason it worked was because the acronym meant something to technical people, but
[03:50:44]  it was something that was funny sounding and, and hooked. You know what I mean? Naming is, is one of the hardest challenging. So I, I, I
[03:50:53]  don't know. I mean, instant might be what they are and what they feel, but whether people will act positively to that, I'm not sure. Um, anyway
[03:51:05] , uh, yeah, I've, I've been doing a lot of benchmarking because of this. And I, I was just kind of wanted to highlight the,
[03:51:13]  this a bit. Um, the one thing that kind of went under the radar is react was always the slowest on this table and, um, essentially. Preact.
[03:51:26]  Like Marco Marco's working heavily on Marco six, which is why you haven't seen Marco six is going to have faster server rendering. Um, uh, one of the reasons
[03:51:37]  for that is Marco six doesn't rely so much on like that virtualized or even Marco in general doesn't rely so much on that virtualized structure. Um, so
[03:51:47]  to speak. Um, like I know, um, view does and I suspect Svelte does just because from the results, um, Marco actually is more optimal in the
[03:51:57]  places that solid is not, um, optimal, but it's almost impossible for me to optimize like loops. Marco is much more efficient. Um, I, I was prototy
[03:52:07] ping, uh, sitting there with Marco six and I, uh, are one of the earlier versions and I actually went in on the server renderer and I kind of
[03:52:16]  re moved everything around a bit and like changed, uh, a couple of things, whichever, which I is around escaping and stuff. And I, I was able, the
[03:52:26]  problem was Marco has the serialization at this point for Marco six was baked in and I, it wasn't easy for me to rip it out. So I added the
[03:52:35]  serialization back to solid and then, uh, and then ran them both and solid and Marco were, were basically the same speed. So I'm after I did these adjustments
[03:52:47]  I made. So my guess is, is that with Marco six, you're going to see performance very similar to solid. Um, but, uh, preact is
[03:52:53]  the other one that hasn't really moved. And, uh, there's a bunch of people who are like, how is preact slower and whatnot. And honestly, I
[03:53:04]  don't know. Um, I have been, uh, been, uh, trying to remedy that, uh, they, they showed, um, this graphics where they
[03:53:14]  showed where they got, they got, um, preact and whatnot and got a very similar thing. Um, and where, where the react was and whatnot. Um
[03:53:24] , I, I did get a PR from, from, uh, Marvin and I, I did merge it and I, um, I did try and do a bunch of
[03:53:35]  stuff with it and kind of play with it because there, there, he was right. There are some optimizations in the, in the Babel plugin that were applied to
[03:53:41]  react and not to preact, which is pretty unfair. It's just the old implementation. No one updated, but unfortunately on my computer is after even merging the PR
[03:53:50]  preact score did not change. Um, so I, I don't, I don't know how this came in. The PR was actually from what I could tell still
[03:53:57]  against an older branch. So it looked like preact was actually running against react 17. So maybe, uh, uh, Marvin just has a more powerful computer than I do
[03:54:06] . And he was running against, uh, reacts, uh, 17 and, and, and if this is a react 18, react 18 would be like out here or something
[03:54:15] . So, um, that's what I'm going to guess was the case. Um, uh, well, that's the thing I haven't, I have an
[03:54:22]  M one Mac book error and an M one Mac book pro and I ran it on both and I didn't see any improvement, um, for preact unfortunately. So,
[03:54:29]  um, yeah, I, I don't know. I know I, I, I have this, this computer. Um, so I, I don't know. I
[03:54:36] , uh, well, next time around, one thing I did do though, that was fun was I actually made a vanilla implementation from scratch of this benchmark. And I
[03:54:48] , uh, um, I just took like all those techniques that I could cut, gutted it and just tried to concat the string as fast as I could using like
[03:54:57]  a for loop. We do iterate over a list of objects and then using like a template literal type thing, you know, just, just concatting the strings together,
[03:55:05]  you know, uh, just straight without much thought of components and just ran that. And for anyone's reference that scored about 145,000. So almost double solid
[03:55:16] . So from my perspective, we still have some, some room to go. That being said, because of the way the exponential apply a bottlenecks are, it's possible
[03:55:26]  that double the speed is just one huge bottleneck. That's all it can't get away from most of your time on SSR rendering is spent on escaping and,
[03:55:36]  uh, and serialization. This benchmark doesn't do serialization generally. So, um, this is all just escaping. That's the bottleneck here, but it's
[03:55:46]  just good to know, you know, as a rough measure that had written vanilla JS, um, is still about double on this benchmark than what solid is. Yes.
[03:56:00]  Yes. Yes. Yes. The vanilla JS version included escaping. I used solids escape algorithm. I just, and put it in all the right places. So, um,
[03:56:08]  yeah. Um, so when does SSR performance matter the most? Well, this was like that question earlier when I was talking about like, I'd rather have a smart
[03:56:21]  hydration and streaming and like client side story from a UX standpoint than I've been edging out milliseconds on server rendering, but where it's going to matter the most is
[03:56:32]  throughput when you have big services and you have lots of machines and lots of requests, saving CPU time is cost effective for, for large, for large things. Like if,
[03:56:42]  if this, if these numbers are to be believed, you know, representative of an app, if a solid app is what do we got here? Six or seven times
[03:56:53]  faster to wrap to render than the same react app, then like that's a significant cost savings of times and parallelization on machines when you're dealing with requests in the,
[03:57:05]  you know, I don't know, hundreds of millions, billions level. Like it's a significant thing. Um, um, so like I'm not, there's
[03:57:19]  a really old Marco benchmark that I kind of appreciate, uh, just to know where we are in terms of where these things sit in. Um, I, we haven't
[03:57:29]  tested pug or, uh, let me see if I can pull it out. Uh, let's see Marco on GitHub. Um, let's see if I can pull out
[03:57:38]  this one. Cause it can't, it made me think about this the other day because sure I'm comparing JavaScript frameworks, but what about, what about, um,
[03:57:46]  like Jade and stuff like that. And there's this ancient one, the templating benchmarks. Um, and it actually grabbed dust and handlebars and pug and Marco and nun
[03:57:58] jucks and react in one of them, but, and, and actually benchmark them. And this is, you put it back in the time, but to understand here
[03:58:05] , there's situations where Marco was outperforming pug or whatnot. Like, uh, I'm sure things have changed a bit over time, but what my point is like
[03:58:14]  frameworks using the techniques that we're doing, um, aren't actually that big, different from using like handlebars or using these kind of, uh, templating languages.
[03:58:23]  Like it is fairly as optimal as JavaScript you can get. Right. Um, uh, this is back in the day when react, it's a lot slower at SS
[03:58:32] R. It's like a hundred times slower than Marco in this. Anyway. Um, my, my, my point is, um, that like essentially there, there is
[03:58:47]  going to be benefits in terms of throughput and cost that come from it. It's always better to do things faster, but you know, we're talking, it depends
[03:58:57]  on the size of your site. We're talking in the frames of milliseconds here, right? In practice, this might be the difference between something rendering in four milliseconds and rendering
[03:59:10]  in 24 milliseconds. You're like, you're, you're, you're, you're probably waiting on your database longer than that. You know what I mean?
[03:59:18]  Like, and if you put that whole thing in scope, maybe your database is really quick. You, maybe you got like safe 40 millisecond latency rendering takes 20 milliseconds for
[03:59:29]  react and you know, some other startup stuff and whatever. So you, you, you basically are ready to serve back the response in about 60, 60, uh, 70
[03:59:39]  milliseconds. To compare that to the amount of time you spend shipping it over the wire. Um, and like it, it, depending on slower hustle, the networks are
[03:59:51]  that, that can, that can get pretty much buried. Um, you're usually at least double that, uh, coming back over the wire, like, or like at
[04:00:00]  least that again, coming back over the wire. So like, um, you start asking yourself, like the other stuff is kind of fixed cost. So how much is
[04:00:11]  that 10 milliseconds render going to affect the end user, you know, versus half a second hydration, like on a mobile device? Like if you take a, I've done
[04:00:24]  it on the stream before, you can take certain app and you can watch the hydration cost on a React app and see it take literally about 400 milliseconds. And then on
[04:00:36]  a different app, take maybe 50 milliseconds. So yeah, I mean, there are benefits, but this is probably the least important part. Yeah. And if people have wanted
[04:00:52]  to see more stuff, I haven't done quick yet. Astro is another interesting one. I don't know if they do, I'm gathering they do some kind
[04:01:01]  of string recognition. They're probably fairly fast. I don't know if they benchmarked it the way that, you know, benchmark. It might be interesting to see.
[04:01:09]  But this is like, as I mentioned earlier, this benchmark is kind of like just synchronous render. I think there's some value in it and knowing it. It's harder
[04:01:21]  to benchmark async because different solutions will include data serialization or not include data serialization. And coming to parity on that is a problem because data serialization is such
[04:01:30]  a huge cost. It would just squash anything that any, like any framework would get hammered by it. And the problem is like, you might come up with a situation
[04:01:38]  where a framework doing synchronous rendering like this plus prefetching all the data might do better than an async framework. But that async framework though can handle streaming, which
[04:01:49]  has a better end user experience impact, even though it'll lose at the CPU benchmark. So yeah, I, for me right now, it's really useful to look
[04:01:58]  at like just the cost of going async. Like I've requested next micro task resolves. Let's see how expensive it is to do all the wiring and mechanisms.
[04:02:06]  But as a general mechanism, I don't know how easy it is to actually benchmark async. I feel like we probably just want to benchmark synchronous rendering. And then
[04:02:15]  we want to do like an end to end test where we take into the whole cost of interaction into it. It's very hard to bench the whole experience once you consider as
[04:02:26] ync. I mean, this is a problem we have all the time with benchmarks with async. Think about it like concurrent mode doesn't benchmark well. You know what
[04:02:34]  I mean? Like it makes a nice demo because you can feel it smooth, but the processing takes longer. It's always slower. So it's like there's a UX
[04:02:44]  element and then there's a performance element. And these things aren't always completely like on the same page and it changes at different ranges. Sometimes it's okay to be
[04:02:54]  blocking if the user is going to be waiting for it and you want it as fast as possible. Right? So like it's, it's, it's, it's
[04:03:04]  definitely a challenge. Yeah. Yeah, exactly. How scalable, like how, how many injection points, all those kinds of things. And this is something that I'm
[04:03:15]  kind of revisiting a lot. You know, it's trying, it's trying to figure out like where, where to kind of find the right thing. Like it's
[04:03:27]  hard to benchmark it because benchmark apps are all of two types. They're either overly simple, like my hacker news example. Well, actually my hacker news example is both.
[04:03:38]  There's a, there's a page that's overly simple and a page that's basically set up to be exploited. Like the only way you can, you can,
[04:03:47]  um, make a notable thing is make 10,000 of it. You know what I mean? Like that kind of mentality. Then you can like measure the difference. Like
[04:03:54]  you, you either get like a app that's too simple to be real world, or you get a very extreme case just for like in lab testing. It's very hard
[04:04:04]  to make a benchmark with a real world type demo because there's a lot of like other considerations, um, in terms of user experience and whatnot. And it's also
[04:04:12]  really hard to invest that much time to build a, like the real world demo, um, that was around before was probably one of the best examples of this where people could
[04:04:22]  showcase stuff. And I used to like that they did a bit of a performance comparison, but the truth of the matter is, um, it was a lot of effort
[04:04:30] . I remember I was talking to Andrea Giamatti about it, you know, uh, the guy from you HTML and he was like, yeah, I saw you had
[04:04:35]  that. Uh, how long did it take you to do it? And I was like, well, I needed, I realized while building it that I was missing features from
[04:04:42]  solid. So it took me a bit longer. I probably spent like, uh, three or four evenings a week for about three weeks to do it. But I'm
[04:04:49]  like, I think you could probably do it maybe in like three or four days. And yeah, he, he downloaded it and he's like, okay. And he looked
[04:04:58]  at it and, um, for a couple hours and he's like, yeah, I'm not doing this. It was just, it was just too much effort and too
[04:05:05]  many pieces to build in. It's hard to make the same app. Like, cause any company is, is probably not going to pay to make it multiple ways. If
[04:05:12]  it's like the real thing, it's a prototype, right. That they make, you know, and test stuff with. So you just never get really good real
[04:05:19]  world, um, benchmarks. Uh, there's a question from UX speed perspective, what would be using Greenfield commerce today? Yeah. Well, no, no offense to
[04:05:33]  not react. That's, that's probably the easiest advice. I mean, that's a weird one to say. And I, I, I don't have any,
[04:05:42]  um, I have no like grievances with the, the, the core team or react itself. And it just like, if you want the SEO, the fast page
[04:05:55]  loads, all that, like maybe server components can get there at a certain point, but we haven't seen evidence of that yet. You can either bet heavily on server components
[04:06:06]  and hope, but functionally, I don't even think e-commerce is their best use case. I think their best use case is even bigger scale. Um,
[04:06:14]  but the question is, what do you do in short of that? Well, if you're cutting react out, you're losing a lot of the tools that make things easy
[04:06:23] . Like it's still easier just to go with react to pick up next JS. I just don't think it's like the best option. I think stuff like hydrogen is
[04:06:30]  a much, much better option because, um, at least server components. But I mean, as I said, it's not really quite there yet from the core perspective and
[04:06:39]  stuff still being kind of figured out. I think if you want the bet on react, that's a good place to bet. But like, this is why frameworks like
[04:06:48]  quick or Marco exist. Um, and I think Astro with their 1.0 release is doing it. The problem is there's surprisingly few solutions that were made catered
[04:07:00]  for the space. And I don't know why it's starting to crowd in now, I guess maybe classically had the WordPress crowd or like people on PHP or not
[04:07:07] , but like from my perspective, like sort of like, like Marco was built at eBay in 2013 specifically for this use case. That was what it was built for. Um
[04:07:20] , but you know, the challenge with Marco always is legacy tooling because, you know, fast, fast forward six years and, you know, a single team maintaining it
[04:07:30]  less of a community makes it a harder pick, even though it's, uh, proven, uh, at the largest scale. Um, so like Marco is, is,
[04:07:39]  is a great choice for e-commerce. Um, and it's been battle tested at production. You know, um, I think, um, I think it might be
[04:07:50]  interesting to try and give Svelte or solid to try because they, they might be small enough and preact, unless I've preact to the list, they
[04:07:58]  might be small enough. Uh, but again, the challenge is that maybe the meta frameworks aren't as mature enough. Um, you know, SvelteKit, beta
[04:08:05] , Solstart, alpha, fresh, uh, Jits did 1.0, but from my perspective, having just used it, I would say they're, they're
[04:08:14]  beta, uh, essentially like they're kind of in the same zone as SvelteKit in terms of production readiness. Um, still needs a little work, needs
[04:08:21]  to be proven. Um, these are, these are like good solutions, uh, in the future, if you want to use JS, I think it just classically,
[04:08:30]  a lot of people weren't, um, Astro plus solid, uh, that's, that's, but again, the Astro is like not 1.0 yet
[04:08:39] , right? Astro hits 1.0. Astro plus solid is very, very similar to the experience you'd have with like Marco five. So, um, yeah
[04:08:48] , I mean, if I was pure, like Marco might be the only obvious one on the JS side, um, right now, just in terms of maturity. Um
[04:08:59] , but, but then, you know, it's hanging over me that Marco six is like a big change coming down the pipe and it's gonna be so much better.
[04:09:07]  Um, but just, just if, if I'm being pragmatic here and not jumping on bleeding edge technology, um, you know, that kind of consideration. Yeah.
[04:09:16]  Yeah, I know. But, and that's what I'm saying. I'm looking forward to it and I've been very hyped. I think, uh, solid and
[04:09:22]  Astro are a great combination. I think, I think, uh, you've seen this on both sides. There's the admire admiration just from how small and performance solid
[04:09:31]  is. And obviously Astro doing that islands thing, that's all it doesn't do innately. Um, and I see that relationship getting even better in the future,
[04:09:39]  but I'm still calling it out. Like, yes, in two weeks, it'll be 1.0. You know, that tells you how new it is.
[04:09:43]  Do you know what I mean? Like when, when someone has to choose software for a project, it's more like in their head, they're like, how many years
[04:09:50]  has this been production ready? You know? Um, probably, uh, this, the discord is probably the, the way to, um, to see that best. Um
[04:10:05] , I think there's a resources tab. I don't know if we're sharing that. We have some great stuff in the hackathon. Unfortunately, I see a
[04:10:10]  lot of these projects that come across my desk, so to speak. And I look at them and go, oh, that's cool. I'm so glad someone used solid
[04:10:16]  for that. Um, but we haven't actually stopped to like do some real, uh, what do you call it? Like use cases or like, uh, what do
[04:10:22]  you call it? Like, uh, the thing where you, the marketing people do where they like write white papers and, and show, show off, you know,
[04:10:29]  like, uh, like, uh, a sample case. Um, there's like, um, there's been some larger production apps now getting done on, um, solid
[04:10:38]  and we just, they're, they're, they're approaching release and very soon we'll be able to have some of those, uh, I forget they're called.
[04:10:46]  It's not use cases, like reference cases. You, you, you know what I'm talking about, um, so that we can see some better examples of it
[04:10:53]  in the, in the wild. Um, right now people look at our website, which is, is, is, is a lot of really clever engineering, but it's
[04:11:01]  also a client side app, right? Just because of the time period when we released it, it was before solid 1.0 and we were, we were, we didn
[04:11:07] 't have our meta framework and stuff. So the biggest thing is there is a lot of really good solutions that need investment that are working towards, uh, this better future.
[04:11:16]  Um, and it's because we're on a shift. People were, there's a time period where we were kind of like content where things were for the most part
[04:11:25]  and, um, things kind of bundle up with next, but you know, after a while things get really big and then you kind of unbundle and bundle again
[04:11:31] . Um, so yeah, uh, I, I think, uh, I think that's kind of where it was where we're at. Case studies. Yes. I
[04:11:40]  said use case. I'm in case studies. Yes. We will have case studies. Thank you. Everyone's like yelling at me in anything. Yeah. I mean
[04:11:50] , uh, quick city, show off the chart, whenever that. Yeah. I will have to see. I, I don't want to speculate right now because what I
[04:11:57]  know from my own experiences, um, uh, with, with the techniques that they're using is that it would not be very favorable. Uh, solid using a domino
[04:12:10]  is a little bit better, but solid using GS dom couldn't even get to half of where preact is. So, um, if you consider if maybe presumably has
[04:12:21]  higher serialization costs and like other factors and maybe hasn't performance tuned it yet. Like I, I don't even, it's hard for me to speculate, but I
[04:12:32] , I'm, I'm, I'm pretty sure that what side of the spectrum it is today. And I think we should just let them finish stuff. Uh,
[04:12:40]  like this is the thing. There's so much excitement because these technology come around. I'm going to be the first person to be like, Whoa, hold back, wait
[04:12:48]  for those 1.0 releases, you know, make sure, give them time to grow. If you're an early adopter, get in there. This stuff is
[04:12:55]  really amazing technology. Check it out, help them grow, but you know, making your decisions is still good to be cautious. But what I'm saying is once stuff does
[04:13:05]  go 1.0 or gets that zone, do consider giving these things a chance. I know I was a bit hesitant there on Astro, but because it fit my point
[04:13:14]  because I was like, I was like, you know, it's just 1.0 now, you know, but the truth of the matter is, um, that
[04:13:21] 's a flat, that's a signal, you know, and it means that they've done the work. They know that it's where it mostly needs to be. And
[04:13:31]  the way I would take that is what's the length of your project. The first three months, maybe there's going to be some bug fixes and a bit shaky, but
[04:13:40]  betting on Astro for anything that's about six months out from now. Definitely. Right. Astro already does amazing stuff with SSG. But if I, if
[04:13:49]  we want to take the next level of SSR and stuff like e-commerce, I think it's going to be a big time contender, um, once it gets
[04:13:56]  adoption. So yeah, if your project is, is, is going to take a couple months or whatever, get on Astro. Let's, let's, let's
[04:14:03]  get, let's get it going. Let's get, get, get them, you know, some adoption, get people using it. Um, I think it's going
[04:14:08]  to be amazing. I'm just putting it out there that like, there, there's difference when you have, you know, frameworks who maybe did done, been doing
[04:14:17]  this stuff for eight years, right? Like, um, and use it different levels of production scale. Right. But I think that shouldn't be the only thing, uh
[04:14:26] , kind of holding you back. I think that there is a lot of really great technology coming out again, and this is a time or chance to kind of try it
[04:14:35]  and move out, uh, of maybe the comfort zone. Okay. Yeah. So I'll start. Um, yeah, that's a great question. Um, there are
[04:14:47]  still, we're working right now on, like a super secret, but not that super secret dev branch, because, uh, Nikhil is putting together a set of
[04:14:57]  a bunch of breaking changes. Uh, but like, they're not that breaking. They're just like a bunch of places where you have to like change a keyword here or
[04:15:07]  change a thing here. Like they're just a bunch of really small nitty kind of ones that you could probably write like a script to do it or something. But like
[04:15:16] , essentially, um, we're trying to hold off all those changes so that we could like do them in one swoop, essentially. Um, I'm hoping I
[04:15:26] 'm that this is the last, like we've been narrowing down every time we go through this cycle, less and less changes, which means I feel like we're landing
[04:15:33]  on a really good spot. Um, I was talking about maybe having to kill on like next week. Um, I don't know. I think we're still early.
[04:15:41]  I, I got a lot of work to do on solid 1.5 that I think will support it. My, my goal with solid 1.5 is have all the
[04:15:47]  pieces in place that need to support the solid, uh, um, start beta. And to be fair, I might've said that about, um, solid 1.
[04:15:55] 4, but you know, we keep on learning, uh, things and, um, yeah, I, things are, things are coming along. Biggest holdup probably
[04:16:04]  is docs. As I said, I don't think there's that many changes, uh, big changes. These are all just subtle things, little things that make life easier
[04:16:11] , but we need to get documentation rolling. Um, and, uh, that that's, that's probably the biggest thing without docs. It's hard to do a
[04:16:21]  release. Uh, can anyone community? Well, yeah. Uh, it's tricky because Nikhil needs to finish what he's doing so we can get the docs rolling.
[04:16:32]  It's hard to start docs without reference. Once we get the docs rolling even a bit, I could see the community coming in and helping us fill in the blanks
[04:16:39]  and figuring that out. That's, that's the biggest one. Yes. This is a very long stream. This is my wife. Yeah. Um, how did
[04:16:55]  you get started with solid? Um, yeah, I mean, I've answered this question before, but essentially I was looking for a replacement for knockout at my startup and
[04:17:04]  I just started building a, uh, framework to kind of replace an already custom stack. Um, give Dan a week and the docs will be ready. Yeah. Now
[04:17:14]  Dan's been overworked. He's been pulling together a docs team. Anyone who wants to help on the docs effort is it is the most important piece. Uh,
[04:17:22]  and it like, there's such a high bar now in terms of expectations on docs that it is definitely an incredible amount of work, more work than even I do. And
[04:17:34]  if, if, if people have the knowledge to try stuff and work on the docs, it's just, it's, it is, it is incredibly valuable work.
[04:17:42]  Um, and you know, in the past, like pre 1.0 and stuff, I would just cowboy it. I just like make a release and be like, write
[04:17:50]  something in a changelog and be like, woo, we're live. Um, I don't get to do that anymore. Um, and docs are almost as much
[04:17:57]  effort as yeah, they're probably more effort than the work it does to actually co develop the features. So, um, um, you know, I, I think
[04:18:07]  docs are really, really, really important and that if people have a talent for that, I, I hope that they get involved. Yeah. Come to discord. Yeah.
[04:18:18]  We, we do have some translations. We, that was always really, really great. Actually. We, um, we, I think we're translating down 15 languages.
[04:18:24]  I think, I think that's amazing. Um, and Dan has come up with a structure that makes it easier to apply updates over time. So I, I think
[04:18:31] , I think keeping the translations up to speed too. That's what I mean. Like there's so much effort on the doc side. I was just talking about like a
[04:18:36]  native English speaking docs, but you, when you consider all the people working on the different translations and stuff, there's, there's dozens of people working on docs, um
[04:18:44] , just for our projects. So yeah, I mean, any help is very much appreciated. There's a docs channel on the discord, uh, do check it out
[04:18:52] . Um, I'm trying to think if there's anything else that I really wanted to, to talk about here. Um, Oh yeah. One, one last little thing
[04:19:03]  and kind of a hope for the future kind of thing is this is my last quote treat. Um, I, one of the biggest benefits of react 18 getting streaming, uh
[04:19:16] , for the wider ecosystem um, is that it's shining a light on all the platforms that don't have streaming support. Um, and I think that is really,
[04:19:29]  um, good because as I said, Marco has been struggling this for years. They'd be like, Oh, we can do all the streaming stuff. And then it'd
[04:19:34]  be like, Oh, new serverless function runtime, no streaming. And like for a while there, when I first started on the Marco team, I was like, where
[04:19:42]  the hell do I deploy Marco? You know, there wasn't a great deployment story. Like sure they can make a note express app, but everybody's moved to these
[04:19:48]  services now. And I was like basically spinning up, uh, Heroku, um, to make my demos because like I want demo streaming and like a bunch of platforms didn
[04:19:59] 't support it. Um, luckily that has been changing all the new runtimes, uh, such as the edge based ones have made streaming a first class thing. And I
[04:20:08]  got to thank cloudflare for that. Cause they started the trend cloudflare had streaming, um, which I think influenced Denno. And then that kind of
[04:20:15]  came in because Vercel used cloudflare for, for their edge and, uh, Netlify uses, uh, Denno for theirs. And now we're
[04:20:23]  actually getting them good options for streamings across streaming across a bunch of different infrastructures. But, um, uh, yeah, Kent C. Dodds was just like,
[04:20:31]  I have bad news. Some popular hosting providers do not support streaming instead they buffer. This means you can't take advantage of the benefits reactive team on these hosts. And
[04:20:38]  he went on and on about the thread and I just love that he's bringing awareness to this issue. Um, this has been something, as I said, it's just
[04:20:46]  been years and years of it. I think a year ago. Yeah. Um, I mentioned it to Dan, uh, this little thread cause we're talking and this is
[04:20:53]  when we first kind of showed Dan Marco and he had a great quote where he's like, he was like, I can't, he's like, I hadn't really
[04:21:02]  looked into Marco before, but he's like, this is Marco's doing stuff that, you know, years ago that we've been trying to add to react for several
[04:21:12]  years now. Like it's crazy how far ahead Marco was in this, in this way. Um, and, and it's interesting cause he was pointing out that the influence
[04:21:20]  for both Marco and the new stuff for react came from the same thing. Some older projects that were at meta or Facebook back in the big pipe, and they kind of had
[04:21:28]  the same source in this inspiration. Um, and we're, we're just chatting about how streaming has been like forgotten. And, and I mentioned back, I guess
[04:21:36]  there was a March, 2021. I think I just finished my cloud flared demo, uh, showing off solid, uh, streaming on cloudflare workers. Yeah.
[04:21:44]  About a year and a half ago. Uh, one, a huge benefit for everyone for react adopting these approaches is a platform support returning perhaps unsurprisingly, but many platform
[04:21:51]  services don't support streaming back responses and always been an unfortunate barrier. React cloud should help here. And then Dan goes, this is honestly one of the most rewarding parts
[04:21:59]  of my working on a popular solution. There's some leverage to push for better support. Um, and obviously absolutely love that. Uh, they, they have the ability to
[04:22:10]  make positive, positive change here. Um, I don't know why it says that I don't like this quote. I definitely like this quote, whatever. Okay. But
[04:22:18]  my point is, um, super awesome. I, I, a year ago, I was kind of like, Hey, what's going on? Anyone noticed the lack
[04:22:26]  of streaming everywhere? And no one was talking about like, it's coming in react 18. Um, in the last year, we've seen incredible support come in,
[04:22:33]  but it's really awesome. I, I, I, I don't know. They're trying out the name names, but I, the big one on the list is
[04:22:38]  definitely AWS doesn't support streaming, which actually is the underpinnings of both Vercel and Netlify's functions, the non edge ones. Um, so it
[04:22:46]  is a bit of an awkward, uh, situation cause it supports so much runs on AWS and it doesn't support it. So like, I think he's trying to push
[04:22:56]  the dial and yeah, hopefully something good comes of it. To my knowledge stuff is in the works. So I'm pretty excited about that. But, um, this
[04:23:05]  is like one of those things where, you know, having a popular solution that everyone uses can do really positive, uh, work, um, in terms of making change in
[04:23:14]  the wider ecosystem. So, um, really awesome to see. Yeah. But to be fair, he, he actually, he actually means, uh, AWS, um
[04:23:28] , because they both use Netlify and Vercel under the hood and Netlify and Vercel, um, or sorry, Netlify and Verc
[04:23:36] el use the AWS under the hood and they both support edge functions, which do support streaming. The only thing is there's been kind of like, uh, caution with the
[04:23:44]  Vercel stuff. Like, let me see here. I think there's a response here. Lee Robb came on himself and he actually wrote something. Um,
[04:23:51]  yeah. Do you know deploying the call for worker pages support stream, but AWS Lambda does not. So even within services like Netlify and Vercel, well,
[04:23:57]  they're edge offering support streaming, the standard function do not. And then, um, um, Lee goes reframe Vercel can support both node and edge runtime.
[04:24:06]  Personally, I think that's really important. Not everyone needs her on their edge. And which I, I, I agree completely. Although this isn't about node because node
[04:24:12]  support streaming, it's actually about AWS, which doesn't. And, and there's a question is like, doesn't Vercel support on their edge. And
[04:24:18] , and this is kind of been a gray area. Um, but definitely I can confirm that Vercel supports edge functions at the edge. Um, they released it.
[04:24:26]  I think October 26 and I kind of demo up basically the very next day. This is definitely possible whether they're promoting that as their use case, they're still kind of
[04:24:35]  being careful. Uh, they don't want to push it to production workflows. Um, and I know that's changing. They're doing work with next, but a
[04:24:41]  hundred percent Vercel support streaming on the edge. Um, so, um, as does Netlify Cloudflare. Um, yeah, we've made demos in
[04:24:50]  all of them. So, um, yeah. Uh, yeah. I mean, that was supposed to be a positive note for the future. So I, I, I
[04:25:01]  don't know. I think, I think that's it for our stream today. Um, that's it for this week in JavaScript. I don't know if anyone has
[04:25:06]  anything else, but you, if so, I guess you can, you can wait till next week. Um, thanks for joining me, everyone. And, uh,
[04:25:13]  I hope you have a great weekend. Thank you. Um, I'm out.