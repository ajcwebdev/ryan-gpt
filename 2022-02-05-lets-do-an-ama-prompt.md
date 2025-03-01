---
showLink: "https://www.youtube.com/watch?v=8_YiKUb6DW8"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Let's do an AMA"
description: ""
publishDate: "2022-02-05"
coverImage: "https://i.ytimg.com/vi/8_YiKUb6DW8/sddefault.jpg?v=61fd77a9"
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

[00:00:00]  Hi, everyone. Welcome to my stream tonight. A little bit nervous about this one, not really sure how it's going to go. I didn't have a lot
[00:00:13]  of content, so I thought maybe I'd turn the tables a bit and let you guys, the chat, drive the conversation today. So we're going to do a bit
[00:00:23]  of an AMA, ask me anything. So it's important, obviously, if you're around in the chat to participate, it'll help a lot. I have
[00:00:31]  been gathering some questions off our solid Discord, so I do have some content to go off anyways. But, you know. Oh, good. Yeah. Hi, everyone.
[00:00:43]  Glad to see you here. But as you know, before I get into that, I am going to do a This Week in JavaScript like I normally do. And for This
[00:00:54]  Week in JavaScript, there's been a lot of, like, there's no avoiding it. There's just been a lot of talk about remix and drama and conversations going
[00:01:13]  on. And while people are kind of filling into the stream here, I just want to play something for you, because I think it's important before I go any further on
[00:01:22]  the stream and get into that, just to put the whole thing in perspective for everyone. And then I'm hoping the rest of everything will kind of come to play.
[00:01:32]  I'm just going to, we're going to play a video for three minutes here, just while we're waiting for people to join the stream. And I hope you can
[00:01:40]  appreciate what this is. I want you, I want everyone to know how much I like remix. And, yeah, let's just watch the video. And it is
[00:01:48]  actually in the browser is actually just a optimization. It just makes it faster. Sorry, I didn't start that at the beginning. Let me give me two seconds.
[00:01:56]  I screwed that up. One sec. Let me just get to the correct timestamp. This, this, this, this little clip that I'm going to show you is
[00:02:07]  from 2015. So this comes pre-rendered from the server. And then as I click around, it's using React router to then just go and fetch the data
[00:02:21]  as I move around. That's pretty cool. So now you get like this immediate render of the data before JavaScript even downloads, like this thing is here and ready.
[00:02:34]  And if the JavaScript is huge and you click a link, it doesn't matter. So I've got JavaScript turned off over here in Safari. And you see, I click
[00:02:47]  and I get a full page reload. So I don't even need JavaScript for this thing to happen. At this point, running it is actually in the browser is actually
[00:02:56]  just a optimization. It just makes it faster. Now, there are some things that we sometimes think about with server rendering where it's like fast-boot or it's
[00:03:07]  a quick pre-render. We call it pre-rendering a lot. I don't know. Like, it's a whole app that runs on the server. This
[00:03:14]  is not just a pre-render. And the big question around that is like, okay, well, actions, right? How does, what do actions mean? Uh
[00:03:21] , without JavaScript? Um, well, this doesn't have JavaScript. I click new contact. And I say V games, by the way, that's what means.
[00:03:35]  And let's add him in here. There's no JavaScript running there. Um, it's like, okay, that's neat, but you've probably got a whole bunch
[00:03:47]  of weird code. Um, should have pulled this open earlier, but they took my computer from me. And what is a presentation by Ryan Florence if I don't
[00:04:04]  change my color scheme a couple of times? Oh yeah. Um, so new contact, you guys probably don't like that. That's better. Um, so here
[00:04:17]  we've got new contact. When the form submits on this, on the, uh, client, we'll do handle this, handle submit. We grab the values and
[00:04:26]  then we transition to create contact. And then over here at create contact, we'll transition to, we take the parameters, we make a post to our data API,
[00:04:35]  and then we redirect to that contact. Well, what about when we aren't in this browser or we don't have JavaScript? Well, our form has a plain old
[00:04:43]  action. And, uh, this thing is, it doesn't care if it's on the server or the client. So if every interaction in your app is represented by a
[00:04:57]  URL, just like in the nineties, you now have a server app that will render in the client. Thank you. That's, that's it. Thanks for
[00:05:18]  bearing with me for that little demo. The reason I wanted to show that, um, is because I, I really want to emphasize here that even things that come off,
[00:05:27]  that even things that come off as new ideas are often old ideas. And that was Ryan Florence, basically giving his remix demo in 2015. So, you know, putting
[00:05:41]  everything in, in stride in a lot of ways, remix is a realization of a dream that he's had for seven years, maybe longer. And I think,
[00:05:53]  I think it's important to kind of in so kind of recognize what it is and what it isn't, right? It is a react framework, everything you could do in
[00:06:01]  remix, you could do before they've just made things better. And they've made things streamlined, but essentially in a lot of ways, it's the same old story again
[00:06:09] . And I, I, I, I, I, as you're going to see, as we can talk about this week in JavaScript, which I want to get
[00:06:14]  into now, um, let's go this week in JavaScript. Um, I think it's important for us to kind of realize and set the right, right expectations up
[00:06:25]  front, um, about, about a lot of things, because otherwise we can, we get pulled into the, you know, hype cycles and we don't, you know
[00:06:35] , fear of missing out. And like, this is the one way, or this is the one way. And what ends up happening is we fail to see that there
[00:06:41] 's a lot of other things going on that are just as incredible or amazing. Right. And when we live in our bubbles like that, um, you know, sometimes some
[00:06:52]  really, you know, less than friendly interaction happens. So, you know, in a lot of ways, remix, for example, is just a react framework, you
[00:07:01]  can do everything with react before remix, you can do the exact same thing. Not a big deal, but they've streamlined it and made it easier. So I'm a
[00:07:10]  big fan because I think these are really good patterns. And I, I started web dev before react, as many of you know, but that being said, um, there
[00:07:19] 's just been a lot of talk and chatter going around. And for me, this week in JavaScript has been a lot about clarifying a lot of misunderstandings. Um
[00:07:27] , and I wanted to kind of talk a bit about that. Um, let me get my window the right size here, because realistically, as many of, you know,
[00:07:37]  I've been, I've been a big proponent of, of, um, partial hydration and all the technology around that. And I think, I think it's important
[00:07:47]  for people to kind of recognize that there are different techniques going I'm glad that a lot of questions coming in through the chat, by the way, we're going to
[00:07:59]  get to those in just a minute. If anyone's wondering what's going on, I'm just kind of doing my this week in JavaScript for a bit, because I do
[00:08:04]  have something to say here. But, um, essentially I wrote this article in hopes to really clarify for people what server side rendering is, what it can do, and the
[00:08:19]  different ways that you could do hydration. And if you haven't checked it out, do check it out. I'm hoping that it can, this will kind of help
[00:08:26]  clarify things for people, because one of the hardest things we're dealing with is a lot of misunderstanding. And like, I think what's been going on with remix is kind
[00:08:36]  of combination of those things, because like, there's two sides of it. One side of it is there's a bunch of people going, oh, they're bug
[00:08:46] ging the remix guys. Why don't you add partial hydration? Why don't you add partial hydration to remix? Right? Like I just saw this thing about solid JS support
[00:08:56] . And they're like, I've spoken about this with Brian, blah, blah, blah, blah. And then I saw this latest comment, nothing against this poster
[00:09:01] , but we're considering implementing astro and remix besides react astro has all these different frameworks. And then, and you'd have partial hydration. Wouldn't that be great
[00:09:09] ? Partial hydration is a completely different architecture. It'd be like going over to DHH on rails and be like, where's your V-DOM you guys
[00:09:23]  should go implement a V-DOM I I'd wonder what the DHH would do. And I think that's, what's been going on a lot. Remix
[00:09:33]  has come out. They've been seven years, you know, working on this idea and, and more or less people are like, well. yeah, you're,
[00:09:45]  you know, this is good, but this is better, you know? And they were like, no, I mean, we believe in this. We've been working on
[00:09:51]  this as our dream. The truth of the matter is at the same time that Ryan Florence had done that demo, eBay, for example, was already doing partial hydration and stuff
[00:10:01] . So people, there was a, there was a bit of a conversation conversation that went on Twitter, uh, this past week where Ryan was like, well, show me
[00:10:09]  a good hydration demo. Um, you know, I've only seen theoretical stuff. And it's a fair point and the part of the reason for that is because demos
[00:10:18]  and benchmarks suck. Like they are just bad. Right. And the problem is that the types of sites that have built large, um, technology, like technology on, on
[00:10:29]  partial hydration are the biggest websites you see in the world. And they all tend to suffer from the same problem, tons and tons of third party scripts. And this is
[00:10:38]  why everyone should be excited about party town, um, from the biller IO guys, because it seeks to solve this problem. So, but, but essentially the,
[00:10:47]  the, like, if I go to eBay.com right now, let's just load it all up. It actually renders pretty fast when, and, and hydrates
[00:10:56]  pretty fast. So when we open this network tab, we're going to see like megabytes, a megabyte, like, look, it's, it's still
[00:11:02]  rolling. Like, and the truth matters, Marco is the core of this, this site, but Marco is not responsible for like any of this. You like go back
[00:11:14]  up to the top and you'll see like one JavaScript file. That's like maybe 80 kilobytes or something somewhere up here, I guess it's gone up maybe
[00:11:21] . Where is it? I'm not sure if I'm going to be able to find it right off here, but you're going to find like the one JavaScript file.
[00:11:30]  Um, and that's Marco and everything else is, is, is these other scripts. Marco doesn't really do code splitting that much. There's, there's like three
[00:11:39]  sections of the page. I think that, that independently load Marco, but essentially this isn't a good example for, for someone coming in. So they're like,
[00:11:49]  what does, how do I do partial hydration? And the thing is, I was already not going to answer this question because like the remix guys kind of already made clear that
[00:12:08]  they had this bias. I understand partial hydration basically is incompatible. Like, like you could do it, but it'd be like adding a different architecture. So
[00:12:16] , so like, you know, someone asked a week, you know, oh, you know, how can I just add a sprinkling of JavaScript and Kent mentioned remix and
[00:12:27]  then Fred from Astro was like, well, I don't think that's what they, they, they mean by sprinkle of JavaScript. Right. Um, not turning the
[00:12:34]  script tags on literally, but like, because what with remix, you can either remove the script tags or add the script tags. I talk about in my article static routing
[00:12:42] , but at a certain point, Ken said, well, the burden of proof is on you prove that partial hydration is provides better UX. And, and Fred at that point
[00:12:53]  goes, I'm not sure if you're trolling, you're asking for evidence that removing 90% of the JavaScript doesn't improve the page load or like the page UX
[00:13:01] . Um, and yeah, here we go. Theo little, a little, uh, little promotion of, of your next JS site. Like there, you could tell
[00:13:10]  already that there's a disposition and there's been a bunch of these conversations the last couple of weeks. I'm not the only one. I feel unfortunate that I've kind
[00:13:18]  of aided to the, to this thing and rather than like deflate it, I've been trying to downturn, turn it, but sometimes emotions get hot.
[00:13:27]  So when this came up, I was just like, whatever, like there's coming up with good examples or like either come up with examples that show off the technology, but
[00:13:38]  aren't realistic. Like that's what benchmarks are. Or you come up with, um, like a site that someone made and it's never optimal. You, you
[00:13:46] , you never get it both ways. Like benchmarks can always be slighted to work a certain way. Right. And, and, and basically in the, in the,
[00:13:56]  in the responses here, at some point, someone's like, Oh, what about Marco? And they show this hacker news demo and, and Ryan, Ryan puts this up
[00:14:02] . And he shows how the Marco app compared to his remix app, which uses a different API and different, everything and loads slower. And this ticked me off because
[00:14:15]  this has nothing to do with partial hydration. Like, like in a simple case, like in a, in a site like this, partial hydration, isn't about first paint
[00:14:28] . It's about hydration time. It's about the difference between when you see the page and when it's interactive. So like, he should like, this is this
[00:14:38] , like, this doesn't show anything in it. And it basically what, like, what's the point to try to show, like, there's no way that a
[00:14:47]  demo like this could actually show or just show the benefits of partial hydration. So I, I kind of took this a little bit personally, admittedly, because I was like
[00:14:55] , why are you like, why are you showing this? It has nothing to do with anything. So basically I, I, I, I pulled up all three hacker
[00:15:08]  news demos like we did previously on the stream and I benchmarked them again. I mean, you've all seen these numbers. This is solid 0.8, 0.
[00:15:18] 8, 1.1. So that you can see the hydration cost. It's real 300 milliseconds roughly, but streaming gets the content in there fast. I showed Marco look
[00:15:27]  0.8, 0.8, 0.8, basically no hydration cost. And then I showed remix, which obviously is the slowest of the bunch. I
[00:15:34]  mean, this isn't surprising. It's simple math. Bigger JavaScript. More to run. Like, it's just, it's obvious. You don't have to
[00:15:45]  do much to figure out why this would be. And the thing is, if remix removes the script tags on a page like the Hacker News homepage, which has no interact
[00:15:53] ivity, then they get scores similar to Marco. I mean, it's not rocket science. And like hydration has cost. So, yeah, I was definitely put
[00:16:06]  off. And then I went and published the article and everyone assumed that I published the article because of this. And the truth of the matter is, no, I'd already
[00:16:13]  started working on the article because that incident with Fred and the partial hydration thing happened a week ago. Like, I knew it was going to come back around again. So
[00:16:20] , I just, I just want to, I just want to say, like, it's tricky because when you're talking about page load performance, there are better solutions than
[00:16:32]  React. Like, anyone who's familiar with my stream knows this. This is not hard. Yeah. Here we go. It makes us two performance folks for the React
[00:16:42]  community and two React focus for the performance community. Yeah. Man, that's a great summary. It's an awkward place to be in. And it makes them defensive a
[00:16:52]  little bit, I guess. Because when you, because this is a bad demo. The reason this is a bad demo is because you could just remove the script tag and do
[00:16:59]  the same thing. But that's not the point. The point is, look, this page has nothing on it. It shouldn't cost anything. And hydration has a
[00:17:07]  real cost. You can still see it on a basically a nothing page. It's just a list of stories with no interactivity. You can see the cost of hydration.
[00:17:14]  So, like, I just, what, getting into the debate about it just, it's just like, what do you want me to produce? It's like, like
[00:17:23] , open a website. Like, I definitely lost it a little bit. But I'm hoping that through the article, you know, people can connect the dots. Because
[00:17:33]  I understand, not everyone's familiar with this technology and stuff. I would assume that the members in the Remix team are obviously know how, like, first contentful paint
[00:17:41]  and largest contentful paint and time to interact all work, right? I mean, the argument here is that you don't need partial hydration if you have progressive enhancement. But
[00:17:50]  if you think about every multi-page app framework, because they do the multi-page routing, generally are built usually with progressive enhancement in mind. Because they have to
[00:17:59]  kind of work that way. Like, they're already set up to work that way. So, like, these aren't things that replace each other. But, yeah,
[00:18:11]  I was annoyed enough that I actually put together a different demo. And that's what I want to show you guys in a minute. Yeah. You know what? This
[00:18:21]  is a good question to throw in right here. Can you clean partial hydration in less than 20 words in different lazy loading? Sure. Partial hydration is, okay, I
[00:18:30] 'll start my words there. When you only load and run JavaScript for part of the page, period. Lazy loading is just, like, the code will get there
[00:18:45]  eventually, maybe. But with partial hydration, you just know that the code doesn't get there. Like, if you have a page with islands, I'll show you this
[00:18:54]  picture. This picture, Jason Miller's done the picture. We have another picture. Every article that does it has a picture. It's, like, this is the
[00:19:01]  whole page. Now, if you don't need the code for the whole page because this header never changes or the sidebar never changes or whatever, partial hydration is just,
[00:19:11]  like, look, I got this code, this code, and this code. Don't send the whole page. That's all it is. It's just less JavaScript,
[00:19:18]  less to run. But partial hydration has a secondary side effect. Okay? And that is because you know the code outside never runs again. If you fetch data on the
[00:19:31]  outside and the only way to get that data into the components is through inputs or props or something, you know that there's nothing stateful above. You know there's nothing
[00:19:41]  that can change. And for that reason, you know that you only need the data that enters into the components at the boundaries. And for that reason, even if you use
[00:19:50]  fetch too much data to render your whole page, you know you don't have to send it all to the browser. Was that your image originally? Not this one. Jason
[00:20:03]  Miller had a different one. But. Like, the thing here is, like, what I'm trying to get at is, like, this is built for multi-page
[00:20:19]  apps. There are techniques figuring out other ways. But essentially, the reason we can do this is because we know that when you navigate, you're going to go to
[00:20:27]  a completely new different page, so you know that this will never re-render. And that's the whole reason why this is, like, an incompatible mindset with
[00:20:35]  single-page apps or remix. When people come and bug them, like, they're like, oh, yeah, we'll look into it, you know, because they
[00:20:41]  don't want to not be included. Evan from Vue is a little bit like this, too. And he added an MPA mode. But it's, like,
[00:20:47]  it's okay. Different architectures, different tradeoffs. It's okay not to have partial hydration. Solid does not have partial hydration. But, as I said,
[00:20:56]  you guys wanted to see -- everyone wanted to see a demo, right? They want to see how partial hydration is super powerful. So, like, it didn't take me
[00:21:04]  long. I was like, wait a second. You know this Hacker News demo that we keep on looking at? Well, why don't we just find -- find a
[00:21:13]  place where you have an article with a lot of comments. Because of that data serialization characteristic, if you have a lot of comments, this is a freaking lot of
[00:21:22]  data to load and serialize and hydrate. And this page has to be hydratable because, look, you can collapse them. And it's recursive. Like
[00:21:29] , this is not an easy hydration scenario for a top-down framework because it's recursive. Like, you can collapse one. You can't just be like, oh
[00:21:38] , like -- you can't just be like, oh, like, I'll do some kind of jQuery trick or something very easily. Like, this -- at least
[00:21:46]  not with something like React. Like, you can see that this is -- there's comments and comments and comments. This page has to be hydrated, right? And this is
[00:21:55]  Marco. And this is Remix. Exact same demo doing this. And this has a stupid amount of comments, right? 13 or 34 comments. Now, let's look
[00:22:04]  at this, right? Because I want to show -- no, that's solid. But let's grab Remix here. Because this is a heavy load to hydrate
[00:22:17]  and serialize and send all that data. And let's just run this in our favorite page score tools here. Okay? 57. That's actually pretty good with that,
[00:22:36]  right? First comparable taint, 3.5 seconds. Largest comparable taint, 3.5 seconds. Time to react to 4.7. And about 11
[00:22:43] 00 milliseconds of blocking time. Okay? This is a big, heavy page. Okay? That's actually one of the better runs that I've ever had there. So props
[00:22:56]  to that. Usually it gets about 54. Let's run Marco. Now, Marco's not going to be great either. It's a heavy page. Let's see
[00:23:07]  the difference. Okay. Yeah. Let's run it one more time. I've seen much better numbers than that. But, you know, there's a little bit of
[00:23:17]  variety here. Let's see if this one is in the right. Yeah, okay. This is good enough. 2.7 seconds. 2.7 seconds. 3
[00:23:31] .2 seconds. It's literally twice as fast. For the same page. Twice. Double the speed. Why is that? Well, I'm glad you asked.
[00:23:51]  Let's open a network tab. Now we're not going to be in a bit faster network. But let's see how this page loads. We hit the performance score.
[00:23:58]  All right. There we go. Let's look at our timeline here. Remix. Let's scroll up. Loads the page. Server renders the whole page.
[00:24:12]  Does the page. Server renders. Server renders. Server rendered. Gets there. You know, it finishes loading. What about 1300 milliseconds. It starts loading
[00:24:20]  in the JavaScript chunks. Does all this stuff. And then we get to paint it all. And it happens around 1.5 seconds. Okay. And by the time we
[00:24:31] 're done, it's about 1.6 seconds. That we've got this, you know, document loaded. Now, what happens if we do the same performance thing on
[00:24:43]  Marco? I mean, you could already tell that was way faster. Well, Marco doesn't wait for the page to load. It's streaming. And the assets start
[00:24:54]  loading while it's streaming. So, you get the first paint. That header shows up at 200 milliseconds. Okay? But, I mean, and all the content loads in
[00:25:04]  by, oh, 8 or 693 milliseconds. 700 milliseconds. There's still some painting that has to go on. So, like, you know, by the time the
[00:25:13]  document loads, it's only one second. But the largest confold's paint has already occurred by 693 seconds. And as I said, there's some hydration work
[00:25:28] . You can see the hydration stack here. Marco takes how long to hydrate this little blob? 40 milliseconds. I've seen it as low as 20. And to
[00:25:39]  be fair, I don't even know if, in this example, that I don't even know if hydration is taking as big of a thing as 60. So, yeah
[00:25:47] , it's taking -- Marco only saved hydration by 50% in this. But the data serialization savings and the streaming and stuff basically doubled the performance from Remix on
[00:26:01]  this page. And if you want to understand, you only have to look as far as this. You know, like, the data blob of this stuff. Honestly, yeah
[00:26:15] , this is getting truncated. They can't show it all, right? Where on the Marco side, there is some blob, but that's it.
[00:26:24]  That's the whole -- most of the thing. Because it's just -- these are all the top-level islands. Every single comment node has an ID and has to be
[00:26:29]  shipped in. But, I mean, you can see right here on the network tab, the Marco page for the document is 200 kilobytes. And the Remix
[00:26:40]  page is, like, almost 400 kilobytes. So, I mean, this is a terrible example. This is a bad example. Why am I loading 1,300
[00:26:56]  comments on the page? Why am I doing this? But the benefits of partial hydration and streaming are obvious. I mean, as I said, like, I didn't need
[00:27:06]  to show you this. You could have, like, figured it out by, you know, thinking about it. So, I mean, different use cases. I'm
[00:27:17]  going to say right now, Solid or Svelte. I ran them through the same test. React is actually pretty good at hydrating here. Svelte and Solid
[00:27:25]  are actually slightly slower on this case. Not by much, but slightly slower. They were scoring mid-50s, too, but, like, a couple points slower than
[00:27:33]  React. So, React, you know, and Remix may have looked slightly better at the large hydration case. I haven't actually spent as much time on large data
[00:27:40]  serialization. So, it's not like Remix is bad. It's right the same as any other framework working on this. But it's not as the same as
[00:27:48]  a partial hydrating framework. Like, that's why they were built. Okay. So, a little bit of a spiel here. I just thought it was important
[00:28:00]  to kind of show that, in the same way, Ryan Florence has been working towards this dream of realizing a really great product in Remix. And, like, honestly
[00:28:12] , I love it. You saw my stream. You saw how, like, how much fun I was having building that app with it. Other people have things they've been
[00:28:25]  working on for just as long. And they're just as viable. So, I don't like, you know, I take offense to some of the stuff. Even
[00:28:33]  if it might not have been intentional. Like... Anyway. So... Anyway, that's kind of a... I hope that wasn't a sour note for people too much.
[00:28:51]  It's just that's essentially the demo. I shared it with Ryan. We probably won't get a response or something. I mean, now that I've actually produced it
[00:29:00] . I didn't want to go that way. Because, honestly, that's a terrible example. But every benchmark is kind of terrible. That's just what they do
[00:29:08] . But now, like, it's a very visual, obvious way. Some... Someone... I actually love this. Someone looked at the comments from when I posted it.
[00:29:20]  See, I posted it right here. And they're like, SSR seems much faster. Are you caching? You know? Consistently less than a second.
[00:29:29]  And it's like, no, it's not a cache. It's just literally faster. Same API. I shared the source code. You can look. It's
[00:29:37]  like copy-paste. It's the same thing. It's just that much faster in this sort of scenario. All right? I mean, the problem is, and
[00:29:48]  the reason I prefaced this whole thing is, now everyone's going to go, "You need the partial hydration in Remix." No, you don't. Don't
[00:29:54] . It doesn't make sense. Remix is really good at what Remix does. Leave it alone. Not everything needs partial hydration. So anyway, that's enough
[00:30:09]  of my early rant. Maybe we should switch this around now. Let's, you know, let's start this. It's going to create a banner. All right
[00:30:26] ? So I'm going to try my best here. Most people get help when they go through this. I'm just going to start at the top. I've got some
[00:30:31]  stuff in Discord. We'll get to that too as we go. I'm just going to try and answer the questions as they come in. Let's keep this conversation
[00:30:38]  rolling. I'm pretty stoked about having the opportunity to do this. And I'm glad everyone's here. So yeah, let's chat it up. All right. So
[00:30:52]  where do we start? What's the best framework? You guys are pretty funny. I'm not going to get too far into this. Sorry. Once. One,
[00:31:01]  one, one, one, one second. No, I don't think it's in here. All right. Okay. Thank you, everyone. I know I wasn
[00:31:22] 't on mute. I don't know how to do that here on this. But let's keep going. Okay. So yeah, no, it's best framework. And
[00:31:27]  why is it React? How do we use these frameworks on mobile? There's two different answers or questions to that. But there's mobile web, obviously, which you can
[00:31:40]  just use the frameworks the way they are. Using them with native clients is a little bit trickier. I don't only a few, few of them have made universal
[00:31:50]  renders that have that ability, obviously. Marco has not solid has the capability, but has not. There's an official one. I think some people were playing with native
[00:31:58]  script. Remix, obviously the web framework. So you can, you can use it for mobile web. Okay. So let's start here. Have you checked out hot
[00:32:07] wire turbo stimulus before and thoughts? Yeah, I have. And actually in the article that I wrote before this one, I talk about hotwire and stimulus a bit here
[00:32:18] . It's called the return of server-side routing. Because I talk about MPAs and the whole islands thing. But this thing, I didn't know what to
[00:32:26]  call it, but turbo links, HTML frames. My general take is, of the three approaches people are taking to get this kind of full page reload MPA style mentality
[00:32:37] , each of them has an advantage. Pure MPAs like Marco has today, or Astro, are the fastest at page loading. Because they have no overhead,
[00:32:49]  you don't need orchestration. I mean, you can lazy load stuff if you want. But they essentially, you know, especially if you add stuff like streaming, like
[00:32:57]  Marco has. They essentially, like, have no cost on hydration. They just, they just run. You saw a great benefit of that. Just now. Turbo links
[00:33:11] , however, when you're doing navigation, it's quicker to just replace part of the HTML, per se, than go back for the whole server page, you know.
[00:33:22]  You can also do some cool pre-render tricks and stuff with that if you want. So, generally speaking, I think hotwire has its place. But it's also
[00:33:30]  not the ideal solution. I think, I think it's a good early middle ground. You're going to see these MPA frameworks, like Astro and Isle
[00:33:37] . They're going to pick up stuff like hotwire. It's just, it's just logical. Because they already, that way they get to preserve the advantage of their
[00:33:44]  partial hydration. Because when you load the new page in a hotwire, it's still HTML. So, you can still know that the static stuff won't re-render
[00:33:52]  again. You can still send the least amount of JavaScript. But the truth of the matter is, once you're in the browser, once you have the JavaScript, client-
[00:33:58] side rendering is faster. This is a fact. So, how can we find the trade-offs? And stuff like React server components are really interesting like that. I
[00:34:08]  think there's other solutions that are kind of in that vein. I think hotwire kind of works well for that, like, big transition move. But where we will really
[00:34:17]  want to get to is granular, partially applied updates in the browser, client-side, driven, you know, maybe driven by single-server interactions. Because the
[00:34:29]  benefit of stuff like server components is that no matter what the action is, it's one request to the server and one back. There's no waterfalls. There's no
[00:34:36]  chaining. And while you can avoid waterfalls with a lot of smart APIs and do parallelized requests like we do with nested routing with Remix and Solid, it
[00:34:44] 's, you know, if you do a mutation, usually you post to something and then you go, oh, it succeeded. And then you refresh the data and it
[00:34:53] 's like, you still waterfall a little bit. You know, there's, you need different techniques to kind of get it all in on the same request. And this model
[00:35:01]  fits that a lot better, the whole MPA server components model. But I think the future involves actually maybe server-side routing, but with client-side rendering of
[00:35:12]  it. I know, weird. And maybe when you go to large new sections, you send in chunks of HTML like Turbolinks, but the whole high level like replace
[00:35:23]  the page with Turbolinks. Because what Turbolinks does is it loads the whole document and then just like replaces the body with the body. That's clunky
[00:35:31] , you lose state, you know, like DOM state. You know, if you had a form or a video, you like lose that. I don't think that's
[00:35:38]  the long-term solution. I think it's an intermediate step. All right. Obviously for something like Rails, it makes sense because they don't have that ability to render
[00:35:48]  the client. But the client, even with us moving to the server, the client is the key. That's the difference this time. Client's way more powerful.
[00:35:54]  We just have to figure out, like, it's not about no JavaScript. It's about making sure our apps scale, right? That's why size of framework might
[00:36:03]  not matter as much if we're not sending all the components. I think something like React server components has a lot of potentials. React server components has a huge shelf to
[00:36:10]  get up to. Like you're at 50 KB already. That might not work well on your budget for your e-commerce site or something. But maybe there'll be
[00:36:20]  smaller, better solutions, you know? And if that's the case, this might be a really viable option. But as I say, QUIC is looking at a
[00:36:28]  whole different approach that's different. So what do I know? But in all cases, I don't think Turbo is the long-term. And I think Stimulus
[00:36:36]  is -- I don't -- I get why it exists. But Stimulus is kind of like -- it's bigger than a JavaScript framework. It's like 20K or
[00:36:44]  something. Like it's bigger than SolidSvelte, Preact, any modern -- like bigger than Vue maybe even. To do like -- and it's slower
[00:36:51] . Like they're not -- it's not efficient JavaScript framework. It's just like fits with their model. I think we can do a lot better. That's my whole
[00:37:02]  point here. That's interesting. Not having like a weird JavaScript layer on top of your Rails app. We can just make it feel like just write a React app, write
[00:37:10]  a Marco app, and then just have it be performant and be nice. That's the goal. I mean, maybe that's impossible. Maybe it's too complicated
[00:37:17] . Maybe there's too many tradeoffs. But that's what my article is about. That's what people are working towards. That's what's exciting. Because it isn
[00:37:25] 't just going back to Rails. And as cool as Hotwire and Stimulus are, again, these are technologies that have been around for a while. Like I know
[00:37:35]  this is the latest thing that DHH and the Rails crowd have pushed out. But in a sense, Hotwire and Stimulus are actually like update panels and stuff
[00:37:46] . Like they had similar techniques of replacing slotting in HTML like that ever since Ajax first came out in 2005. APIs have got better. Things have improved. But
[00:37:58]  I think we're going to go past that with things that you can only do with well thought out client-side rendered JavaScript. I hope that answers the question. Yeah
[00:38:17] , yeah, the joke. Yeah, 2015 in that video. Okay, let's keep on going. All right, let's see some more questions. Just scrolling through
[00:38:39] . What's your least favorite array function? I don't even know. I think the reason I'd have a least favorite one. Yeah, I don't know.
[00:39:03]  It's a weird one. Probably. Probably. Yeah, honestly, they're all kind of annoying. I try to avoid most of them. I mean, they're convenient
[00:39:12] . I sometimes use for each. But like maps awkward because you always know that you're cloning it. So it's. Splice. Yeah, it's got to
[00:39:22]  be splice. Because splice does some really important stuff you need to remove things. But it's built in such a way that it's always inefficient. Like spl
[00:39:31] ice. It does slice the thing out of the array. But I think it returns a new array, too. I've got to get my specifics on it. But it
[00:39:40] 's. I wish there was a more efficient way to remove an item from a list. That's. I think, yeah, I think we're going to go with
[00:39:49]  splice. Like I said before, I don't think you add partialation to remix without basically negating the benefits of their nested routing. Like they'd have
[00:40:05]  to solve partial hydration in the spa and like react has to solve that. Like the underlying framework remix isn't going to solve that. I don't think it's an addition
[00:40:14] . I think it literally doesn't make sense. Yeah. There's some good. Reduce is definitely. It's definitely on the list. But because you can do
[00:40:28]  most of the four. Reduce is kind of convenient. I sometimes like reduce. Map. As I said bugs me sometimes. Because like I know I'm cloning.
[00:40:36]  Like for an optimization standpoint. Using four is better. Like in push the array. But yeah. Splice is my winner. Yeah. Reduce is the best.
[00:40:55]  Yeah. Okay. I can see the sarcasm. Okay. Does edge server rendering help with the actual user hosted on the origin server? Yeah. This is a great question
[00:41:05] . Because if you think about it. You have to wait that latency anyways. Right? So like why not bring it all closer? And with traditional rendering. I would say
[00:41:17] . Yeah. You're right. Like you saw what happened with remix. That API was big chunk of data. So you're pretend that data was far away. That's
[00:41:25]  why it was why it took so long. You're sitting there. Right? Like can I can I show my screen still? Yeah. Right? Like like let's look
[00:41:32]  at the performance timeline again here. Right? Pretend this is is is your this took so long. Not because it's huge, but because it's far away.
[00:41:40]  Like this is on the edge. Both these demos, by the way, are from Cloudflare worker. So you're waiting for your response from your origin server. And
[00:41:49]  then finally you get it and you're responding like bang. But we just saw the answer, didn't we? We're waiting for the response from our origin server. But
[00:42:01]  no, we're loading. We've already responded, drawn, drawn the header, loaded in the JavaScript. I mean, the thing is streaming is even better on the
[00:42:11]  edge. Like if you think about it, like, because now you're not blocking. Now, you know, if it takes longer from the origin server, yeah, sure
[00:42:21] . The main content isn't loaded. But it depends on the type of site, the type of content. Right? You can start loading the JavaScript and obviously something like early
[00:42:28]  hints, which is a new thing coming out, will help with that too. Because then they can start loading it. But think about depending on the type of site.
[00:42:35]  Maybe only certain parts of your content need to go somewhere. Maybe you have certain things cached. Maybe, you know, in those kind of scenarios, you can start loading
[00:42:44]  the images. Because it's not just the headers. You can actually start rendering the document ahead of time with streaming. So there are trade-offs to streaming. But
[00:42:54]  streaming is a great equalizer here because, as I've shown in previous demos, when you slow down the network, streaming and async look the same. Like it just
[00:43:04] , the stuff comes at the end because it's all clogged up and it's bottleneck. But on a fast network, or maybe it's fast because you're so
[00:43:10]  close to it because it's on the edge, streaming is great. All right. You guys are still talking about arrays. This is like that Dan Abramoff interview
[00:43:22] . I forget which one I watched, but it was definitely along these lines. What's my preferred way to handle styling and solid? Oh, that's a fun one.
[00:43:38]  I don't know if people know. There's a couple things that I just, I feel like are like holy wars that I don't want to get into. Like
[00:43:45]  if you'd want to talk web performance and you want to talk about page loads and you want to talk about update timing and reactivity and, you know, whatever, I
[00:43:55] 'm all over it and opinions and architecture and all that. But CSS and TypeScript are things that I just don't want to even touch because I know that I have the
[00:44:04]  wrong opinion. I do have a leaning. I will say this. In my ideal world, I actually think stuff that looks like the way web components style would be awesome
[00:44:16] . Like using CSS variables, being able to have like component scoped CSS that maybe you can extract into actual CSS and not as in JS. Like I like that idea.
[00:44:28]  Like so things like vanilla extract to a certain degree are attractive to me. Um, the only thing I know is what I don't like. And sorry, because like
[00:44:36] , sorry, tailwind's also kind of attractive if you like atomic things. What I don't like is style components. That they are my least favorite one. The one
[00:44:44]  where you wrap everything in components because components. I mean, we do a lot of work in solid to make components, not cost anything. But essentially components break up your template
[00:44:54] . They make them less perform at the clone. You're generally spreading stuff. You can't compiler and it interferes with compiler analysis a little bit more. Cause like
[00:45:02]  you can, you can assume some things I suppose in that case, but generally speaking, the way it breaks up the templating is really under desirable from my standpoint.
[00:45:13]  So pretty much everything, but style components, I'm pretty happy with. I've never actually programmed in list, uh, just thing. I I'm sure I would enjoy
[00:45:24]  list type dialects. People always like comments on some of the things that I like and some of the patterns, but I've never actually like stepped down, like it stepped
[00:45:32]  into actually doing this. Okay. That's a great question. Well, I did, I did prioritize streaming over partial hydration, but that's again, partially from where
[00:45:45]  I started from. Right. Because, um, I built solid, not thinking about server rendering at all. And I feel like most, um, most frameworks are built that
[00:45:55]  way. Like what's all you could see very pinpoint is like, how do you build. The, the, like, it started from like, I have to put it
[00:46:05] . I liked reactivity. So it's not purely that, but I'm like, how do you take reactivity? You know, it's granular kind of compos
[00:46:12] able patterns. You know, hooks has now popularized it for non reactive libraries, but in the past, only reactive libraries had those kinds of patterns. How do you take
[00:46:19]  that and make it super, super performant in the browser? That's what my goal was. So hydration in general, I was just like, no, client side
[00:46:26]  rendering is fast enough. And to be fair, it's, it's easy to kind of play that game. If you, if you saw in my previous stream, I
[00:46:31]  had, uh, I had, uh, the client side rendering version of this hacker news app, um, outscoring on lighthouse, um, the react app, because
[00:46:39]  you know, it was close enough to me, I guess. And, um, yeah, I, I was for the longest time saying client only the truth matters.
[00:46:49]  There's benefits of service side rendering, but if I was to come at it today, that's an interesting question because obviously streaming in my opinion is like one of the best
[00:46:59]  things that any kind of classic single page app can do. It's just, it's just, it's just gravy. It just, it, it basically removes a
[00:47:06]  bottleneck and doesn't require you to change your architecture that much, as long as you already have some kind of consciousness on how to, um, do asynchronous flow. And
[00:47:14]  in the case of like react type frameworks, suspense, you know, people think that's about loading spinners, but like suspense is just a way of doing async fragments
[00:47:22] . So building that in is still congruent with your model. Um, you don't even necessarily need crazy concurrent rendering or anything. Um, but today, I don
[00:47:34] 't know. I think partial hydration is really interesting. And, but I also know the work that goes into it. I work on Marco team. Marco has in a sense
[00:47:45] , probably the most advanced solution for partial hydration. And the stuff we're working on the next version is crazy. It's like sub component and it's compiler now analyzed.
[00:47:54]  I think if I was coming up right now, I would try and just thread the needle. I try and just go straight to the end game. I'd just be
[00:48:03]  like, I want to, I want to know what partial hydration in a spot is. But that would be the problem I'd be solving. And to be fair, that
[00:48:10]  might be something that I'd be looking at even in solid in the, in the nearest future, but we have other priorities right now. Um, in the same way Marco
[00:48:18]  has other priorities and what Marco is going to make the best MPA. That's what eBay needs. And that's, that's the best way to leverage Marco today.
[00:48:25]  So we're going to optimize partial hydration to a point that no one's seen that kind of optimization before, um, with solid, we're working on solid start and
[00:48:33]  meta framework, and we're going to make sure people can get in there, make it easy to use and kind of get that there. But you know, solid 2.
[00:48:40] 0 that, that might be what we're looking at. Yeah, of course. Yeah, that sounds like a good solution to me. I'm, I'm just
[00:49:01]  gonna agree with you. Oh, man. Well, see, I could go. Can I get into Bitbucket and pull it up? Cause like, I
[00:49:14]  don't know, we can do something really easy here. That's so I'm going to switch windows a little bit. Like, I mean, but any of you guys
[00:49:21]  can do this. I don't know if you ever do this on GitHub, but I, this isn't the very beginning though. I could get some old commits. That
[00:49:30]  would take me a bit to look up, but this, this I can do relatively quickly. Cause I, I mean, I think people even, even going back three,
[00:49:36]  no, three, four years, four years almost now would be enough. One of the funniest things. I don't know if you ever do this on GitHub is they
[00:49:43] 've got a cursor system where they're like after this marker, plus this. So you just look at like the number of commits in the repo. And I didn't do
[00:49:50]  that first, which I should have. How many commits? 1238. Okay. So then you just go, okay, so roughly let's, let's just go 1200
[00:49:58] . Wait, that sweet. And can we get to, can we get to the open source, the repo? Let's, let's take a look here at solid
[00:50:12]  0.01. Okay. What is this? This is example. It's funny. I wrote examples. I'm so embarrassed by this. I wrote examples in JavaScript,
[00:50:25]  but like, you're like, where's the bar? Like what's going on here? I hadn't written JavaScript for so long. This is like the worst JavaScript
[00:50:31]  you've ever seen because I was a CoffeeScript user and I wrote solid CoffeeScript, but I wrote the examples in JavaScript because I knew no one used CoffeeScript, but
[00:50:38]  I like literally just couldn't write. JavaScript. Varsed like, this is just so funny. The example, just from the read me. Like there's so many
[00:50:48]  mistakes in this. Um, but let's see if we can find some code. Here we go. Core.coffee. This, this file still basically exists.
[00:50:55]  It's called single signal.ts. But yeah. What do we got? We got a comparator. Look, look at this CoffeeScript loveliness. V and
[00:51:04]  ID, like all this optional chaining or, and optional chaining, optional chaining, optional chaining. Yeah. This is this operator here at the end without the
[00:51:14] , the dot is basically the same as the null coalescing operator with the double question marks. So, um, it's kind of funny. Yeah. Let's
[00:51:28]  see. Q there's, there's a queue for, for, for setting stuff up. And let's see process updates to recursion. Yeah. You can see the
[00:51:37]  roots of what there, if you've ever looked at current solid code, but you know, God is that's like a really bad array diffing thing. Let's
[00:51:48]  see if we can find normalizing coming array, single expression. This is stuff is all in DOM expressions. Now reconcile arrays. For me, this looks probably more familiar than
[00:52:01] , than to a lot, to a lot of you people. But let me see if I can find the implementation. This is reconcile arrays. Where are my actual reactive
[00:52:13]  base classes? Mutable state. Sorry. Just give me two seconds. What do we got here? A little state. This is one of my early proxies that
[00:52:23]  I had that was based on path instead of mutability. Selector. Extend signal. Yeah. So selector was my original name for memo. Um, this
[00:52:33]  stuff is just so not good. See if I can find, I'm trying to find the signal. Here we are. Here's signal. It's a class.
[00:52:41]  And it defines a get and there's a peak on it and the next and a subscribe. I was actually trying to use rxjx style, um, APIs.
[00:52:53]  I said, thank God for react hooks for, for giving me the light here. But I was, I had like a get and a set essentially. And I was
[00:53:02]  trying to copy rxdx type type APIs. This is, this is just, this wasn't very good. Anyways, that's enough down, uh, memory lane
[00:53:12] . I'm probably blocking the code too much anyways with, with where I am on the screen here. But hopefully you can see this loveliness. That is the
[00:53:20]  create signal or the signal class. I'm even defining the observable thing. So this was fully interoperable with rx style observables. Um, yeah.
[00:53:37]  Thoughts on mob x, would you find we have to use? Yeah. I mean, mob x is great. I mean, mob x is a big influence. They
[00:53:44] , they were one of the ones who finally solved the predictability problem. Frameworks like knockout, literally just like ping pong all around. You just like hit, uh
[00:53:53] , update a signal or whatever. And then it would update all the computers and they'd update and they ping around. There's no guarantee that things only ran once and glitch
[00:54:01]  free and all that. Mark x all everything. And I think reactivity is useful in general. One of the things is with solid, we made a concession for
[00:54:09]  disposal, um, hierarchy. I didn't want to worry about like calling dispose on everything. So we use the, the reactive tree to handle disposal, which makes it a
[00:54:19]  little bit awkward to use on its own. You can, but essentially we just didn't include the code to clean up because it's handled internally by this framework. And
[00:54:28]  I don't really want to add a bunch of extras like API surface on, on it. So it's a bit different, but like the underlying render for solid, I
[00:54:36]  mean, is called dom expressions. It's a different library. My first stream I ever did 20 streams ago or whatever basically went into this library. But the thing is dom
[00:54:46]  expressions supports any renderer. And I mob x csx was one of my first experiments that a knockout of, of doing it. And it's, I mean,
[00:54:55]  it will look a lot like solid. I did add support for things like classes, but essentially this is like something very similar to solid to render, um, using,
[00:55:04]  using mob x. Um, I don't, I don't really maintain it anymore, but you know, every time a while I do go in here and like, as
[00:55:16]  you can tell, like it's, it's still the same underlying render. Like we can look it up on the JS framework benchmark. If you ever go here and
[00:55:23]  you'll see, you'll see, um, let me remove the stuff that shouldn't be there. Okay. Um, you'll see that like, there's, there
[00:55:32] 's obviously solid up here right near the front and solid state, which is our proxy, or it should be solid storage. The name hasn't been updated, but view r
[00:55:39] x.jsx. That's my view library. My, uh, ko.jsx is my knockout library and mob x.jsx is my mob x
[00:55:48]  library. So, um, the, they are all, um, like it is pretty power powerful. The, the core rendering meant mechanism behind this and with solid 1
[00:56:03] .3, we actually support a really cool thing where directly in solid itself, you can, you can interface without wrappers. Let's see if I can find it.
[00:56:14]  Yeah. Without wrappers with a third party, uh, rendering system. So in this case, this is solid, right? Solid is, is here, solid web
[00:56:23]  rendering. And we just set up mob x here as an external source. Um, we, we use their reaction mechanism and this, this, this here is a solid app
[00:56:33] . Like this is solid JSX, but we're using mob x. This is a timer we kind of just decorated this class, make auto observable if you're
[00:56:41]  familiar with mob x and we're just using mob x like observable here, like timer dot seconds passed right in the view directly bind with no wrappers. So I don
[00:56:51] 't know if that was your question, but, um, you know, definitely exploring the ability to kind of make this interrupt nicer in a lot of ways. It's
[00:57:01]  almost easier to just take solids API and, and wrap it, um, with a compatibility layer almost. Um, like we've done with view in a few examples, just
[00:57:11]  because then you'll get solids performance. If you don't care about some of the other features, um, and still have the same API, like you can always make solid
[00:57:19]  look like mob x and perform almost the same. And you'll get that slight performance edge, but it's cool that this is an option. No, I mean,
[00:57:29]  it's reactivity. I, I, I I've shown this before a number of times, but like, I mean, everyone sees this react example, but,
[00:57:48]  you know, you could just ignore this whole thing and just be like, oh, okay, um, what, you know, creative fact creep. This doesn't dispose obviously
[00:57:58] , which is bad, but, um, like the components have nothing to do with anything components in solid or illusion. They're just functions. So like, you can just
[00:58:08]  be like, okay, create signal, um, hi, and then you can be like, create effect, console log, our signal, and then you can be like
[00:58:27] , set time out, set a time out for something, I don't know, um, and just say, yo, make it a second and let's blow up
[00:58:44]  our, our thing a little bit so we can see it better. Okay. And watch, hi, second later, yo, like, the components are just not a,
[00:58:58]  not really a thing. What is the thing is the reactive context. We have this idea of root, which handles the disposal. So there is like, technically for disposal
[00:59:07]  reasons, you want to build things under a root and it helps the hierarchy and let's face it, dom trees are a hierarchy. So it works well, but generally speaking
[00:59:16] , um, there's no hook rules or anything like that. So you can just do that. You, you, you really want me to pull up that code from,
[00:59:26]  from, from, uh, Bitbucket. You're right. I, I, there were templates like very view looking templates. I, I'm not, I
[00:59:37] , I don't think I'm, I'm going to be wasting everyone's time if I was pulling them out. Cool. Yeah. I haven't used Tailwind,
[00:59:45]  honestly. I, I didn't build the site. I know the site's built with Tailwind and so is the, the playground, but I, I've, I
[00:59:54] 've, I've been just working on a lot of JavaScript mechanics. Okay. Let's keep on going. Yeah. A lot of people talking about CSS. Good
[01:00:08]  question. What, what's, what about WASM? WASM is an interesting topic and I've talked about it a bit recently because I, I, I, every
[01:00:22] , it's like one of those things, like even some of the stuff with web workers like this, you come back around to it like every couple of years. Cause you
[01:00:29] 're like, I know there's something good here. It's, it's, it's gonna get there. Right. Um, and, and some people are about
[01:00:36]  that, like that about web components. I'm not, but some people are like that about that. Like one day they'll actually be good. But as I said,
[01:00:41]  for web components, I don't think that's the case, but, but for WASM, um, I, I think, I think there's a lot of potential
[01:00:50]  there. Right. And the problem is there's just this wall they have to get through and that wall is called JavaScript and one day WASM will probably be our secret
[01:01:05]  weapon. The, the, the real question to ask is not like if, or maybe even when directly, the question is to ask is by the time that WASM becomes
[01:01:16]  that thing, that ability to offload certain types of workflows, will we have gone to a point that TypeScript compiles to WASM or will Rust have taken over
[01:01:26]  the universe? That's, that's, that's, that's the question I asked because I think, or go maybe, but I think WASM has size concerns.
[01:01:38]  It doesn't really fit into like the whole website first page load thing that we were just focusing on at the beginning. But it is incredibly powerful and fast to update. So
[01:01:47]  when you think of things like that require, you know, more sophisticated calculations, things that are, you know, heavier, more app, like it seems like a real
[01:01:57] , uh, potential, but right. As everyone knows right now, um, I mean, I can look at any given time, but essentially solids as fast as the fastest
[01:02:05]  handcrafted WASM on, on in benchmarks, right? Like I forget where we're at. We're at right now. Where are we at? Okay. So
[01:02:12]  WASM is slightly ahead at 1.05 and solids at 1.06. But like, if, if you want, if you put these numbers head to head,
[01:02:20]  and maybe I should pull this up a little bit, we're talking like, okay, solids faster for initial render. Wow. They're tied on partial updates, select row
[01:02:30] , you know, WASM, it's a little bit slower on creating many rows to slower this, but WASM's a little bit better on memory handling, which
[01:02:40]  gives it the wind. But essentially this is handcrafted vanilla JS. It's like writing vanilla JS and solids a higher level declarative library. The, the first WAS
[01:02:50] M declarative library you get to is probably something like Sycamore, which I get a little pride in because Sycamore is basically modeled after solid or it's
[01:02:57]  dominator. Yeah. Sycamore is up here, but essentially one day WASM frameworks will probably get there. But what I'm kind of interested in is this,
[01:03:10]  the gap between WASM libraries and the raw vanilla version of WASM is larger than the gap between vanilla JS and the fastest higher level JS libraries. So is that just
[01:03:22]  a matter of just all the extra red tape they have to go through? Or is it that in the JavaScript space, we've evolved uniquely in that we've optimized almost hyper
[01:03:31] -optimized in a certain direction in the way we handle compilation and DSLs in a way that isn't as ergonomic for a library, for like a language
[01:03:41]  like Rust. I'm not sure, but in JavaScript, we're building specialized languages for UI. It feels like we're almost like progressing in a, like really advanced
[01:03:54]  in a very like specific direction that you're not seeing as much on, on the backend traditional languages. So I don't know, even if WASM, you know,
[01:04:03]  pulls ahead of vanilla, like that won't be enough. It needs to get like significantly better if, if I'm interested in it from a performance standpoint, but there's
[01:04:12]  going to be non-performance reasons to use WASM obviously just because you, maybe your C code now can run in the browser. And I think WASM is more
[01:04:20]  interesting, maybe the opposite direction, like running WASM in a, in an edge worker as like a efficient runtime, um, maybe something faster than, than node. So
[01:04:31]  maybe it's actually the way JavaScript escapes the browser instead of the way that backend libraries get into the, into, into the browser. So I don't know, we
[01:04:41] 'll see, but I think, I think we should be watching and paying attention. I'm curious to learn more about the whole transitional app idea. What does it mean
[01:04:58]  exactly? I get, you're supposed to get rid of the, get the best man. That's the, that's the, you hitting the nail on the head here
[01:05:05]  with the question. Nobody actually knows. Not, not completely. We have ideas, but it's unproven. This is why, um, I think it's a
[01:05:15]  little bit premature. I think it's obvious that there's a desire to meet in the middle. Um, and there's some really good ideas working there from anything from
[01:05:25]  react server components and quick to watching the developments on the partial hydration MPA side and how they're, um, you know, getting more interactive and smarter about the work they
[01:05:34]  do there. But the truth of the matter is there's so many facets of it, obviously, you know, things like routing are key and what the architecture is, but
[01:05:43]  we haven't seen it yet. So I'm not, I'm not sure. I, I, I suspect like if you're a betting person on horses, quick
[01:05:51]  is going to be the first framework to show us a possible avenue of what this could look like. They just have all the right pieces and they were built from scratch with like
[01:06:00]  their kind of version of granular, lazy loading in mind. They have all the pieces, maybe even today, someone could make a demo, but I'll probably make that demo
[01:06:09] , but someone will probably make a demo that will showcase this. And, but I think that's only one possibility. I think we have a few different ways and knowing
[01:06:22]  right now the, the gap here, I can understand the confusion because you're like, it's supposed to be the best of both worlds, but how that's not
[01:06:33]  a very clean picture. And I wish I could give you better answers. I've been hinting at it in my articles. Like when I'm talking about the return to
[01:06:39]  server rendering, I think there's something there, but quick is also a different model there. We're going to just have to wait and see and actually prove it out.
[01:06:46]  Cause there's a lot of good ideas in the space and they'll probably take it another year or two to kind of come to fruition. So like when people are talking
[01:06:55]  about it, as I said, I tend to kind of back off that. I it's, it's just, it's, it's a very tough problem. And
[01:07:05]  one of the dangers, at least of bucketing things under transitional apps right now is that people don't end up valuing the differences of the different approaches, like what
[01:07:18]  Astro or Marco is doing or quick or whatever. It's very, very, very different than remix and SvelteKit and people are like, oh yeah. Has
[01:07:25] htag transitional apps. We're all, we're all working towards that future. We are, but like, that's where a lot of the, like a certain amount
[01:07:34]  of friction comes in because, because you know, people are like, oh yeah. So yeah. Astro, it's just like remix. It's like, no,
[01:07:41]  no, no, not really at all. So I'm hoping that we see, this is kind of like JavaScript frameworks in the early 2010s, 11s, 12
[01:07:53] s. There was a whole lot of different ways that people were building apps. React might have kind of won or come out, but React was not the only model. And
[01:08:00]  it wasn't even the only potential feature. It's not like, I know React came in and kind of squashed things, but in my opinion, there were other models
[01:08:07]  that were just as viable and probably could have continued on. Solid is a continuation of a different model that wasn't React that I think is just as viable. So right
[01:08:17]  now this chase to transitional apps is going to end up with a bunch of kind of similar, but different looking solutions. And I think that's really awesome. So I'm
[01:08:26]  not going to, I'm not going to pick a single horse here. I think, I think we should be supporting everyone and just like see the trade-offs and
[01:08:33]  like, it might not be this first generation. We might have like three or four different options. And then like React, which came kind of late in the game of that
[01:08:40]  original thing, someone's going to come in and go, this is how it all works. This is, these are the pieces that matter. Yeah. Like this is super
[01:08:47]  exciting time. I'm passing reactive state to solid components as a prop. Should I pass the accessor like counter the actual value account? The latter, the actual value
[01:09:00]  of the account. I am, I am big on that mentality. Let's see if I can reset the playground. That's not what I wanted to do. But even
[01:09:11]  though it can work sometimes, I'm going to turn this button into button to show you what I'm talking about. Although it's kind of silly to do it a
[01:09:27]  little bit. Is this even the best example? It doesn't really matter. I don't need a good example to show you what I'm talking about. The biggest,
[01:09:37]  the biggest reason that I'd suggest passing the accessor, even though sometimes it's not as technically performant, like there's an extra function wrapper involved. Is that
[01:09:47] , and just for simplicity. Yeah. I mean, I can do, I can use children here. It doesn't really matter. I'm just going to console log this
[01:09:56]  for my sake, console log children. Right. So this is only going to console log that zero once or whatever. Let's, let's set it to one just
[01:10:07]  to prove that. What I want to get at is whether this is count. See, if I do this now, you're going to console log a function, right?
[01:10:17]  If I do this, you console log one. So inside here, you're like, okay, it's a value I'm dealing with because the call. Now, if
[01:10:25]  I change this to four, it's still four, like if I change this to something static, whether it's basically by calling the function on the outside, the person
[01:10:38]  on the inside doesn't need to worry about what gets passed. They just know that they're dealing with a value that accessing this children is the thing that's going to be
[01:10:49]  reactive. So make sure to do it in the, in the proper context. But, and well, in some theory, you're like, well, if I knew
[01:10:56]  it was a signal, then I'd know to wrap it or not. And you kind of get into that mind game. The simplicity here of not having to go like is
[01:11:03]  function or is signal everywhere is well worth it. I've worked in frameworks that didn't have this kind of abstraction and just like, sometimes you pass signals, sometimes you didn
[01:11:12] 't. And the code was always harder to reason about, and it caused a bunch of weird edge cases, like writing custom bindings and knockout was a perfect example of
[01:11:19]  this, this very simple abstraction, which again, leads to the destructuring. It's a trade-off and no destruction. But what it does is it uniform
[01:11:27] , it makes the APIs uniform to the point that you publish a component, you follow these rules, you treat it like a value, and you know that no matter where your
[01:11:38]  components use, whether someone passes a static value, passes a signal, does whatever, it's just going to work. That's why we pass by value. All
[01:11:55]  right. No, nothing like that yet. Someone was working on a book. I don't know how far that got, Amin was working on a book. I don
[01:12:12] 't know. We'll see. Hopefully the book comes out. Some people approach me about writing a book. I'd love to have time too, but between what I
[01:12:18]  already do, I don't know when. I'm a, wait, did we talk about vocals yet? No, not sure. Do you still sing? Oh, there
[01:12:34]  you go. Did you get into other genres? Oh, that's interesting. I do still sing. Some of you know, I played in a punk rock band
[01:12:45]  for a very long time. I played kind of post-punk. I played heavy metal, like metalcore towards the end of it. Sorry, I called it heavy metal
[01:12:56] . It was metalcore. Like, the funniest thing about those genres is they always have really complicated long names to be descriptive because, you know, you have to differentiate yourself
[01:13:06] . But yeah, you know, punk hardcore with, I described my band, which started as a pop punk band like Blink-22, you know, actually like
[01:13:16]  Green Day, let's say, evolved over time that by the end, I was playing with a lot of the same guys and we changed names and stuff. And we were
[01:13:22]  basically playing like youth crew style New York hardcore with Dragonforce interludes. So, I mean, figure out what that means for yourself, but it was incredibly tech
[01:13:34]  and, you know, a lot of like sweet picking and harmonics paired with kind of like shout back group vocals and like the kind of like, I call stutter step
[01:13:48]  style breakdowns like the... Anyway, since then, do I still sing and do other genres? Yeah, I mean, I'm a big fan of the 80s
[01:14:05]  and I listened to a lot of 80s influenced music, both on the hair metal side, although to be fair, I can't sing like that. You know,
[01:14:17]  part of me in my dreams wishes that I could sing like Sebastian Bach from Skid Row, but that's never happening. But no, I'm also a big fan of
[01:14:28]  stuff like The Smiths and The Cure and a lot of the kind of semi-trooner kind of eerie dark pop kind of stuff. So, I've
[01:14:39]  kind of, my music taste has evolved more into that side of stuff. Although, I mean, I still like some of kind of post indie deal and I also like enjoy
[01:14:50]  some of the 80s throwback stuff like the recent Weekend album and stuff like that. But I don't listen to music nearly as much as I used to.
[01:14:58]  And I'm not nearly as connected. One thing that's fascinating is due to the rising complexity of front-end and competitive performance, it's become normal for front-end
[01:15:14]  devs to operate Node servers for SSR. For servers, we're back in Detroit. Yeah, it's interesting. I worked at a startup for like eight-ish
[01:15:22]  years and we weren't Node. So, maybe I wasn't the norm back then. And obviously, because startup is smaller scale. But I think there is an interesting
[01:15:34]  split there because the whole front-end on the back-end has become a thing because of like GraphQL and whatnot. And I think back-end still has its place
[01:15:43] . It's just where the line has gone has moved back. You kind of have like back-end services, databases, all that stuff. And then you have like
[01:15:52]  the people responsible for like web servers and whatnot. And the cloud's going to push this even more. Basically, the domain of the actual web servers and like maybe APIs
[01:16:04]  like GraphQL are kind of on the fence, which way they fall. But yeah, it's interesting. I guess it depends on what work you were doing. The funny
[01:16:14]  thing is, if you go back like a little bit further, like when I got into the professional industry, like I got started on .NET, you know, because
[01:16:24]  we were doing isomorphic applications back then, right? .NET, you didn't write JavaScript, but your code, like you'd write C# code and then like
[01:16:34]  it would generate JavaScript code that ran in the browser and then interact with the back-end. So, you were doing this kind of full stack thing. And, you know
[01:16:43] , with update panels and Ajax and stuff, like it was like a really bad version of what we're doing right now or heading towards the SSR. Like,
[01:16:51]  don't get me wrong. That's one of the reasons I kind of stayed away from meta frameworks like Next and SSR originally was because I was like, oh man,
[01:16:56]  are we going back to the .NET dark ages? Like for me, that was not a fun time. The complexity, the weird patterns that kind of trying to hide what
[01:17:08]  ran on the server and the client to kind of like, no one wanted to get their hands dirty with JavaScript at the time. But, you know, luckily for me,
[01:17:18]  and where I found my passion was when jQuery became a thing, when Knockout and Backbone and Angular became a thing, suddenly people, there was an industry or
[01:17:27]  that wanted front-end devs for that kind of stuff. I was never a web designer. I was never the CSS guy. So, maybe not front-end in
[01:17:36]  the typical case. So, when I think about front-end development, like going back to Node and, you know, handling or the cloud workers and handling that side
[01:17:49]  is part of Parcel. Like, there was only that period of time between, you know, React really taking over until, you know, more recently, until maybe the
[01:17:59]  last couple years, we're kind of going back to the back end, that you could just be like a pure in the browser, front-end developer, if you cared
[01:18:07]  about the mechanic part. Like, sure, there was front-end developers who were just, who were more on the CSS and all that, you know, that kind
[01:18:16]  of side. But if you're doing, like, the actual, like, logic code and the heavy lifting, it's only all been in the browser for the last seven
[01:18:24]  or so years. So, yeah, it's interesting. I guess it's a line that kind of shifts a bit. Yeah, I don't know if my thoughts
[01:18:34]  make sense there. What kind of keyboard to use? See, that's the thing. I got some questions in the Discord, too, about this, and I probably should
[01:18:42]  talk about it, because people are interested about my setup. And obviously, I'm not in front of my setup right now. Most people see me stream. I always stream
[01:18:48]  from the same location, except for when I do these evening streams. That's because I'm trying to get away from where my children sleep, and they sleep over where my
[01:18:57]  office is. So I'm, like, in the living room right now, or family room, whatever you call it. So the opposite of the house. But I
[01:19:04]  don't have a crazy setup. I just program everything on MacBook these days. It used to be a Windows computer that I used for the longest time. But essentially, I
[01:19:18]  don't have a fancy keyboard. I mean, I do have it on my desktop, but I, like, never sit at it. When I'm working on Solid,
[01:19:24]  I am probably laying down on a couch or on a bed. That's the scenario here. I work on it very late at night, as everyone knows. So as
[01:19:32]  long as I'm, like, you know, sometimes I have to escape away, because I don't want to keep my wife up typing all night. But essentially, yeah
[01:19:43] , no special keyboard, no special mouse, no really special anything, chair, desk, I'm sorry, it's just not interesting. I literally am just, like
[01:19:53] , laying on a couch with a MacBook. That's, that's, that's, that's, that's the truth. I don't, yeah, about Sy
[01:20:07] camore, yeah, I don't think this is Sycamore's fault, or even, uh, uh, Dominator. I think, I think there's,
[01:20:17]  there must be some kind of gap there. And I wonder if the way that modern JavaScript frameworks optimize the templates from compiler, like pre head work actually plays into this,
[01:20:27]  but I'm not sure. Music stream next Friday. Oh, man. No. Yeah, no. Oh, man. I should read the comments before I, before
[01:20:43]  I, uh, put them on. Right. Um, yeah, that's, there you go. Yeah. Because, you know, I've been, I've been
[01:20:49]  working on that, that solid theme song. I, I w it would have been really cool if I actually already had a song, because I, I, my punk band
[01:20:56] , like that people who don't know the origins of the name solid JS. And then like, someone asked, like, if you did it again, would you change the
[01:21:02]  name or is it all about the puns or, you know, like all this whole thing. And I, I'm going to admit that what, what made me finally
[01:21:10]  go with solid was because of the puns completely actually, because while there's the OOP concept, I mean, that wasn't it, it was more of this
[01:21:19] , like, you know, like, like, you know, like that, that JavaScript is solid or, you know, something like that. I, I just like the
[01:21:27]  adjective through it. And I, I thought it was funny that you've seen stuff like, like most JS or, you know, things like that. Or I, so
[01:21:36] , you know, I was just, I, I just thought it was, I thought it was kind of a funny name in a sense, people have taken more meaning
[01:21:43]  from it. But like, honestly, I was sitting there and I was like working with like a icon generator and like trying to like, think of a, of a,
[01:21:52]  of a, of like a, what do you call it? Like a slogan or something. And I was like, okay, if I pick the right combination of things,
[01:21:59]  it will seem like it makes sense to people. So when I finally made the choice to go solid, I was like, okay, solid, it's an S symbol
[01:22:06] . I can use like a snake. I saw a snake in the logo generator and that'd be like salt snake, like metal gear, people might get that reference. And
[01:22:14]  I was just like, you know, just kind of, you know, and then I was like, what I was like, I was at the deceptively simple UI
[01:22:20]  library. That was what I started with because I thought it was kind of funny how solid was simpler than it looked like the way that, you know, I've shown
[01:22:31]  in the past some students, you can just deconstruct it into like just these simple primitives. So I thought, I thought, you know, that would be kind of
[01:22:39]  a clever thing and all kind of played together with the S and the alliteration and all this stuff. I have appreciation for rhyming alliteration from my,
[01:22:46]  you know, time of writing lyrics and, and doing a lot of like, I did you guys know, I write articles, but I also write poetry, I've written
[01:22:55]  poetry, and I wrote all the band songs and stuff. So, but actually, the name solid came from my band, my band was called solid, originally Mr. Solid
[01:23:07]  from the chocolate Easter bunny. But I've been carrying around the name solid for forever, for that reason, like, essentially, like, like, we were kind of
[01:23:22]  a punk band. So you know, it's very common punk bands that like the name of the band becomes your last name like Joey Ramone. So I was Ryan solid
[01:23:28] , which is my email address and all that. But that all predates the solid library, I already had all the this, the, I already had all this stuff
[01:23:37] , you know, at one point, I probably own solid.com, which is unfortunate, like, you know, like, when I had the band, like, back
[01:23:46]  in 97 or something. So like, you know, I already, I was already kind of playing into that. So it was just one of those things, you know,
[01:23:54]  like all the pieces sort of fit nicely. Solid state is also a technology that is sometimes used in guitar amps, like you have tube amplifiers, which sound better.
[01:24:04]  Like I've got a mess, it would be dual rectifier, kind of sitting in the garage right now. But the when people moved off the tubes into transistor amps,
[01:24:12]  the technology, this is kind of pre digital technology is called solid state. And, and again, state being a react, like a render library, you know, I thought
[01:24:22]  of funny playing words again, solid state and stuff. So it just kind of all jive together for me. But yeah, you know, I forget if I showed
[01:24:31]  it before, but always good to kind of show this on stream, stream occasionally, but there's the solid tattoo. It's an old, it's an, it's
[01:24:40]  an old English. But I got that with my guys, we're in Nanaimo, waiting to play gig, I'm from Vancouver, Canada. And we're just
[01:24:49]  kind of sitting around killing time. I think we just come up from Esquimalt in Victoria. And, and we just, yeah, we were kind of like,
[01:24:59]  that's a funny thing with touring, you drive a bunch. And then like you, you like get to the town. And maybe if you're early, you kind of
[01:25:06]  like, don't know anyone there. And you have kind of nothing to do. And maybe, you know, haven't met up with the promoter. So you
[01:25:14]  like, just kind of explore these towns for like a couple hours. And like, with like, no context and no preparation. And we were just like, we've came
[01:25:23]  across a tattoo parlor. And everyone's like, yeah, let's get tattoos. So you know, that's that story. All right. Yeah. I mean
[01:25:39] , maybe not blink 182. But I don't know if I should be sharing this. But like, I think I think my bass player put everything up. Let's
[01:25:48]  let's see if we can find a garage band, Mr. Solid. Not my later stuff. I mean, I guess it was it. Or no, no,
[01:25:56]  it was. What's it called? I've got it. I've got it. It's North Van Rumblers. But garage, garage band. God, no
[01:26:10] . That was kind of the joke. It was like our crew. North Van Rumblers. You know, we punk stuff you got to have. Yeah. Band
[01:26:23]  camp. That's what it is. Yeah, this is this is like really young. But we did a reunion back in 2015. And we recorded this album of songs
[01:26:39]  that I wrote in 2004. So, you know, it's not Blink 182. But this is the end of the pop punk stuff. I have other recordings of
[01:26:49]  my hardcore stuff and what I was describing the the metalcore meets Dragon Force, which is much more technical on the guitar. But if you want to hear the end of
[01:26:57]  the pop punk stuff, there it is. All right. Let me see. Where are we? Yeah. You know what? I'm evil sometimes. I'm not
[01:27:14]  going to lie. I mean. Oh, man. It's not evil. I just when a library comes out and they tout their performance, I want to put it to
[01:27:29]  the test. And I want to I want to like, you know, I want to poke holes in it if possible. Right. If someone, you know, not
[01:27:37]  go taking that angle and it's like, OK, you know, not performance doesn't matter that much. But if you're going to tout it like, you know,
[01:27:43]  the way Blazor did where they like, you know, like like I wanted to add Flutter Web, not the canvas version, the HTML version, the canvas
[01:28:03]  version probably can't be tested properly. It'd be hard to measure it and it'd probably be pretty good. But they also have a version that renders down to HTML
[01:28:11] . And to my knowledge, it is just completely not good. That's the best way I can I can put it. And because, you know, the whole Flutter
[01:28:23]  performance, you know, like I kind of wanted to put it in here because I have a pretty good suspicion where it's going to land in the benchmark. But the
[01:28:32]  canvas could be a lot better, to be fair. I haven't got it. But the problem is because of the predefined primitives, it's hard to get in
[01:28:39]  here. You have to build this with a very specific structure. So I'd have to escape into the DOM level, at which point I'd be just circumventing Fl
[01:28:46] utter and it wouldn't make sense. So that's not why I'm excited about Flutter, to be fair. I'm not excited about Flutter in any way
[01:28:52]  that actually has to do with Flutter itself. I just think the concept of building primitives maybe over the web, redesigning Web 2.0, whatever you want to
[01:29:01]  do, and maybe React Native Web or whatever, has incredible potential of maybe, like maybe it's time for a new abstraction. I think, like when people, a few
[01:29:10]  people I've talked to who really, you know, I respect in terms of framework design and development, like people like Dom Gannaway, who created Inferno,
[01:29:18]  you know, talked really highly of this, of stuff like React Native for Web. I want to look into and kind of do it. But every time he describes his
[01:29:24]  vision, I'm like, oh, it's like Flutter then. And I think, so in a sense, I do think Flutter has a lot of the right
[01:29:30]  ideas and interesting concepts. I just don't know that the implementation is any good at all. But I haven't tried it, so I shouldn't really go much beyond
[01:29:39]  that other than what other people have shown. And I do know that... I do have, as I said, suspicious about how the web performance is. Let's keep on
[01:29:49]  going. No. Why some stuff like CrateStore and Demac is located under web and not a source from index. Okay, yeah, cool. This is
[01:30:09]  an easy question for me to answer. The reason is that I wanted to separate some of the stuff that... And this happened right before 1.0. Store was originally
[01:30:26]  like State, which I thought was going to be like the primary primitive. And once it wasn't, I felt it was better to kind of separate it out. And I
[01:30:32] 'm copying the same patterns as Svelte does. And part of it does keep things more organized, but I still forget this stuff myself sometimes. The other reason is...
[01:30:41]  I mean, this is so stupid. It makes your bundle phobia score go down. Like when people look at it, people keep on going, "Oh, it
[01:30:47] 's solid and it's only 6.4 kilobytes." And it's like, "No, it's way smaller than that." But people can constantly look at your
[01:30:54]  bundle phobia and think that's the size. There's an article that just went out from Smashing Magazine that was really good. And they said, "Well,
[01:31:00]  the minified size of Svelte is 18 kilobytes, which is really good." And I'm thinking to myself, I'm like... And then they're like
[01:31:04] , "Well, the minified size of Svelte is 4 kilobytes." And I was thinking to myself, I'm like, if you built the equivalent
[01:31:11]  apps in Svelte and Svelte, they'd be very, very similar in size. So at least if they're on the smaller size. And so part of
[01:31:20]  it is appearances, which is kind of sad. Other one for dynamic is dynamic is different on every platform and portal too. On the server, on the web, universal,
[01:31:33]  native, 3GL, dynamic is different because it can create native elements. You can pass a string to it. And for that reason, there's no DOM-specific
[01:31:42]  code in the core of Solid. Solid is platform agnostic. So stuff like the control flows, like 4 and stuff, completely work on native as well as they'd
[01:31:53]  work in a terminal or all the stuff we showed previously. Whereas dynamic and portal actually are dependent on the platform. So the stuff that is in web is all there for
[01:32:04]  a very good reason. It also needs to be, it makes it easier for the compiler because compiler and you can only import stuff from web. It's generic. It's
[01:32:10]  like, where is my import source? And web is the import source. But the stores was just a choice. It's a big chunk of code that doesn't need to
[01:32:19]  show up on bundle phobia. And I felt once I put in the store, in its whole sub bundle, it just felt nicer. It's like, I felt like
[01:32:26]  I had more room to experiment and make it its own thing instead of just like a super signal. Now stores are a thing. And we can build more utilities and feel
[01:32:35]  comfortable just kind of expanding out and seeing what we can do with it. So hopefully that answer makes sense. Yeah. Yeah. Yeah. Yeah. That's true.
[01:32:47]  Performance isn't everything. And it just, but I mean, a lot of times the libraries are on here to give an idea of where, where they sit on the spectrum
[01:32:59] . Right. And I don't, I imagine if you're developing with Flutter, you're going to use the canvas version. I mean, that's, that
[01:33:07] 's why I I've seen in other benchmarks, you know, canvas is very fast canvas, like especially an update animation benchmarks, like DBMon or whatever, canvas is
[01:33:16]  incredibly fast. So there was potential for Flutter to be good. I don't know if it is or not Theo has, has definitely his own opinion and he's used
[01:33:25]  it. So, you know, I'll defer to anyone who's actually used it. And Dave from the solid core team has used it too. And he's not
[01:33:34]  bullish on it either. It's saying the politest terms. So, you know, maybe there are some things, but yeah, if it's not Dom based, like
[01:33:45]  if we can't convert it to HTML elements, this benchmark won't be able to measure it. And I think the, the version that does, we can't like,
[01:33:51]  it just doesn't make sense. Like we'd, we'd have to escape it to actually make it work. Oh, someone asked me a TypeScript question. It
[01:34:14]  depends on what the initial value is. If the initial value is given, it should be T or whatever. But if it's not given, I would think it's
[01:34:27]  T or undefined, but honestly, people who work on TypeScript know it way better than me. And every time I do something in TypeScript, I have six
[01:34:33]  different people telling me how to do it better. So I'm just going to let those people do it and I'm not going to worry about it. Will solid primitive
[01:34:47]  practices and others be transferred to the solid team service? Yeah. I mean, maybe we'll, we'll kind of make a decision and call as we go. I actually
[01:34:53]  like having something implemented a little bit further outside, even though David is a core team member who runs it and we have a lot of really key ecosystem members contributing to it.
[01:35:03]  I like that it's outside of that purview to a certain degree. We could bring it in perhaps, and then maybe have more, even more scrutiny on it. But
[01:35:11]  the truth of the matter is being where it is, is really nice because then I don't get to interfere with it. You guys don't want me to interfere with
[01:35:17]  it. I'm pretty opinionated. I like keeping the core tight. I like that solid permit exists to do stuff that I would never do. So I think it's
[01:35:27] , I think it's interesting. I like the ideas going and maybe something will show up there that we're like, Oh, that's a really good idea. Something I
[01:35:35]  thought of and we'll kind of bring it in, but generally I do like its independence in general. I'm in a bit of odds with some, some other perspectives
[01:35:45] . I love reacts mentality. I love the ecosystem. I love everything about it. A lot of, but I understand the difficulty of being something like solid where you're new
[01:35:52]  and people need to find the definitive answers to questions because there isn't that many solutions out there. And early fracturing would be absolutely the worst in terms of adoption. So
[01:36:02]  I can get behind it, but honestly, I love fractured ecosystems. I think they're the best. I think they breed innovation. And I, I would
[01:36:08]  love if, if, if we had an ecosystem big enough to, you know, not collapse under the weight of fracturing, but we don't. So I think,
[01:36:18]  I think this is a really nice middle ground where we can kind of build stuff out, test ideas, have it semi-official and enough that people can point to it
[01:36:27]  without, you know, pulling it into being like core where, you know, I'm betting everything because I, I don't want to do that. I don't
[01:36:36] , I have my opinions and I think they're important, but I don't want to step on people's toes. I want people to really do what they want. If
[01:36:42]  people want to compile Svelte to solid, go for it. Do I think that's great? No, I think that's terrible, but do it. You know
[01:36:51] , that's what solid lets you do. Yeah. Type script. Don't know. Yep. No. Do I have Mac OS or Windows? That's a great
[01:37:06]  question. Well, well, yeah, I don't know. I, it's a tricky question. I was a big Windows user. My bandmate, Duncan came
[01:37:25]  on the last stream and was poking fun at me at that. Cause you know, I basically, I mean, it's like anything I, Windows obviously isn't UNIX
[01:37:32]  and actually max built on a flavor UNIX. So it's kind of funny, but I always viewed windows ability to just kind of mix and match and be open as like
[01:37:42]  a strength. So I never really was that into Mac for years and years and years. There's lock-in obviously it was great for recording software and using it for,
[01:37:50]  you know, we used it for a lot of music stuff, but I kept on my windows and it wasn't just because of gaming. I just kind of liked it
[01:37:59] . But truth of the matter is everything development wise is a billion times easier on UNIX based systems. So Macs just make a lot of sense. And this M one
[01:38:07]  that I'm streaming off of right now, air is the first Mac that I bought as a personal computer. Like it took me like over a decade of using Macs at
[01:38:16]  work for me to buy one as my personal computer, but it's just, it just makes my life so much easier. I, that I'd say I'm a
[01:38:24]  Mac convert, not because of anything about Apple or Macintosh is just because for what I do, it's the, it's the best tool for the job. Yes
[01:38:32] . Sorry. I'm catching up. It's funny. Cause I'm reading the comments and I'm like, like 10 minutes behind the actual conversation. How old am
[01:38:43]  I? Oh yeah. I mean, I'm not, I'm not ashamed of it or anything. I'm, I'm, I'm, I'm getting up there
[01:38:51] . Um, my birthday is, is, uh, as I said, coming up, it's, uh, beginning of next week. Um, so I will be
[01:38:57]  turning 39 next week. I'm not 40 yet, but I will be turning 39 next Wednesday. So, um, there you go. I've been, I've been
[01:39:06]  at this for a long time, not as long as some people, but, um, I was definitely building websites and, uh, playing in bands back in the late
[01:39:16]  nineties. Uh, yeah, it's not online. Um, I mean, if you go to the rumblers, um, YouTube and you can find that you
[01:39:28] 'll probably see the stuff that was like transitional period before we got really hardcore and more metal oriented. Um, there's some live stuff there. Um, but, uh
[01:39:38] , we had it on iTunes under break the chains, but I, I stopped paying for it and it's not there. So you're not gonna find it anywhere. How
[01:39:48]  good was Josiah Van Ness on that base? Um, no man, he, he was awesome at like the Rancid style walking baselines and that, but
[01:39:58]  honestly his, his skill was this, was the showmanship. He could jump around like a, like a crazy person. He'd like climb up his amplifier and like
[01:40:06]  jump off stages and flip around and he, he's such a personality. How do I recommend testing solid apps? Um, testing library, um, to be fair, I
[01:40:21]  I've, I've, I've, I've gone through some struggles with this over, over time, mostly that all the inconsistencies, especially around stuff like Jess
[01:40:32] , like the thing that kills me is a lot of the ecosystem has moved on to ESM and it's been smarter about stuff. Um, and export maps solve like
[01:40:41]  all the issues, but, um, not, not everything supports it and solid, you know, when you start a package up and it's client side, just like,
[01:40:48]  okay, no problem. You just set the exports and you're happy. But when you can do service side and client side rendering in a pre export map time period, you
[01:40:56]  have to like use special fields, like the browser field or come up with, you know, different things. And usually you actually default to node being your main and then
[01:41:05]  browser being the, the one, cause there's no server. You can't make the client, the main one and then have server it's, you make this the main
[01:41:14]  one, um, the server code and then have a browser. And this killed me because even just didn't really support browser properly. You'd have to use like, um
[01:41:23] , you know, make customer resolver and stuff for it. And like, it's just been a lot of pain on that side in general, because once I changed the
[01:41:33]  main export to the, the node version, then other tools would like be in bad shape and it'd be really awkward for them because, you know, it's just so
[01:41:41]  much easier just to take the main export. And when 90% of the time you just want the client one anyways, I know this is a kind of long ramble,
[01:41:47]  but I I'm hoping the tooling and testing gets way better. I, um, Alex, um, for ecosystem team has been doing a lot of great work. He
[01:41:54] 's, he's written, um, documents. You can find them on dev too. He's written articles on how to test solid. He is the, he's the
[01:42:01]  voice. He was the reasoning when V test came out, I was like, that they reached out to me and I got invited the server. And then I instantly, I
[01:42:07]  was like, okay, can I invite the guy who actually knows about testing the solid? And I got him right in there. So we've been working with that.
[01:42:12]  He's been looking at what's at UVU, um, from Luke Edwards and a bunch of other libraries. Um, I got, I see we can find the reference
[01:42:19]  for it, but his stuff on dev two is definitely what I recommend in terms of that. You can always come to the desk Gordon, ask for it and we can pull
[01:42:26]  it up. But yeah. Um, other than keeping philosophy of testing library, I'm going to say that this is an area that we have some good options and solutions.
[01:42:36]  We just haven't backported them into our templates yet. And that's something we have to do soon. Yeah. I mean, yeah, something like that'd
[01:42:53]  be cool. See, the thing is my testing library port is literally, I looked at preact one afternoon and I was like, okay, cool. I'll just copy
[01:42:59]  that. A lot, a lot of stuff like that was all, we just have missing pieces in the ecosystem. I knew we needed it. So I literally copied the project
[01:43:06] , got the test passing and then moved on. So I'll transition groups like that too. Anyone who's used it can probably tell I'd like looked at view and
[01:43:13]  was like, okay, here, that's how it works. Um, and you know, that, you know, for better, for worse, you know, some of
[01:43:22]  these libraries, I just never get around to using that much just because I'm working on the library code and not on like application code. So I can feel for, for
[01:43:32] , for people who, you know, missing stuff, like come contribute, add to it. It's just, I knew there was a gap and that people weren't
[01:43:38]  ready to maintain it. So I, I just got it started. This is a good question. And, uh, technically here, there's another library you should check out
[01:43:49]  too, on this side, although it's, it's marked as, uh, uh, direct dominant manipulation, which is Xenia and technically Mikado it's base
[01:43:59]  mode. The way they recommend you use it is the same as Xenia. So technically yeah. The funny thing is if Mikado was in here using that technique
[01:44:08] , it would be faster than Xenia because it's actually slightly more optimal, but the version that they did for us so that they could get remove the warning and get
[01:44:16]  it working. Um, yeah, I'm not, I, I don't usually talk or compare stuff to Mikado. Cause I don't really can, I don't
[01:44:24]  really consider these libraries uh, equivalent like block dom and solid are siblings. This is a V dom library faster than solid on this benchmark. Very impressive. They take the
[01:44:35]  select row hit, but they're solids cleanup is memory cleanup is something I've worked a lot on, but you know, it's, it's definitely dinging us.
[01:44:45]  Cause if you look, we're tied otherwise it's just solids better at partial updates, um, and, and block dom slightly better mass cleanup, but we're otherwise
[01:44:57]  like very neck and neck. Um, but Mikado is a whole different thing. And it's the only solution here that actually is able to remove most of the cleanup costs
[01:45:10]  and also benefit from the select row. And the way they do that is actually relatively simple. Mikado puts a proxy over the dom elements. And what I mean by
[01:45:25]  that is essentially in this benchmark, it's a table, which is a list of data. So they create a proxy over the table rows that links the properties directly to
[01:45:39]  where they are in the dom. So the compiler goes, okay, this data field links to this dom element in this location. So when you, when you update the field
[01:45:50] , you go data equals this, like do this assignment, Mikado instantly updates that place in the dom and and in that sense, that's why like solid, they're
[01:46:00]  really good at this kind of select and partial updates because it's, it's, it's, it's a fine grain system, right? The reason they're so
[01:46:08]  good on cleanup though, is because they have no subscriptions. The data is hard coded to the dom elements underneath the proxy. So they make a template and it basically is directly
[01:46:20]  linked to that template. You, you, like there's, there's, there's no store, there's no passable signal or something. It's, it's
[01:46:30] , it's hard coded. If you have the same data and you want to use it on two templates, you need to, you need two datas. Like you need
[01:46:36] , like in a sense, you, you, it's so close to vanilla with these techniques, because literally it's just a thin layer that directly using compiler that directly calls
[01:46:49]  the updates on those elements. And as I said, that's a super good model for benchmarks like this. Um, because like, how could you have less overhead than
[01:47:00]  basically just hard writing functions that update the dom exactly where you need to update it? In a sense, solid writes those same functions. The difference is solid's triggers. Aren
[01:47:11] 't bound to the specific view. The, the, we proxy the data for sure, but all the connections are subscriptions. So you can have the same piece of data and
[01:47:22]  then update 10 things or one thing dynamically add things, remove things, you know, like our dependency lists are dynamic, right? Like it's not just that we don
[01:47:31] 't have a raise. We only listen to what you listen to at runtime. Mikado bypasses all that, um, in a sense. Uh, and that's why
[01:47:39]  it has a quicker cleanup because it literally hard codes everything to a dom element. So I think it's a really cool technique. Unfortunately, we can't benefit from it
[01:47:50] . If we want to keep that data portability that we like in solid, like we can't just adopt that model. I don't know how this model scales to anything
[01:47:58]  over like a, uh, single template type apps. And the funniest thing is it's, they're kind of down here on the list here. There's sinuous
[01:48:07] , um, where did they end up sinuous here. This library is a reactive library. That's a fork of solids, hyperscript renderer. And for the
[01:48:17]  longest time they were sneaking in right in front of solid around the Mikado thing. And what they'd done and this before Mikado came out is they'd created a special
[01:48:25]  template helper that just for that template, they proxied over the dom. So it was like an opt-in mode. So instead of doing your normal, you
[01:48:34]  know, uh, in their case, hyperscript or JSX compilation in this one place, they're like, okay, instead of doing that, we're going to
[01:48:41]  actually, um, convert it into something where we proxy over the dom and update. So they were able to get this incredible performance without the subscriptions just for that single template.
[01:48:51]  And in a sense, if you want to do that hand optimization, like we could make a helper and solid that did that. And then for like a specific template,
[01:48:59]  we could bring it in and go look, JS framework benchmark. We're as fast as Mikado, but that's just not a solution that skills architecturally. Like you
[01:49:05] , you have to give it special. Perfect. The cool thing about solid is you get this performance by just writing code. Like you, you just go in and write the
[01:49:12]  JSX the way you normally do. And you're up here. It's not like a, now we're entering performance mode kind of thing. And I've just never
[01:49:19]  been interested to eke out that like extra 0.3% here, basically the savings on the cleanup costs for a solution that doesn't actually scale to real applications.
[01:49:31]  So, um, I think it's cool. And I, as soon as I saw Mikado, I'm like, we're going to have a dozen of these in
[01:49:38]  a year or so. Xania is the first one that's come in, but like the, if you want to win the benchmark, yeah, this is, this is
[01:49:46]  how you do it. If you want to build apps, I'd, I'd start the line probably over here somewhere. Well, thank you. Um, uh,
[01:50:01]  yeah, I came in late, late in the game. Um, I I've been developing stuff for, for ages and I was just minding my own business. I
[01:50:09]  didn't really, it's so funny. Cause like when people see solid, like, uh, I can go on some YouTube comments, they're like, oh,
[01:50:15]  another developer trying to just get their, their fame in, you know, get into their fang company and stuff. And I'm just like, what are you talking
[01:50:23]  about? I'm too tired to argue with you. Um, like I, I, I, I believe in the stuff I'm building. I've, I've,
[01:50:33]  I loved knockout JS and I wanted to bring that mentality into modern web dev. It's really cool that other people like that and are getting into it as well. So
[01:50:41] , um, you know, it happened later. I, it's funny how different life events get you to different places where you don't expect. I played in the
[01:50:50]  band in the early twenties. That's part of it. I, I, I wasn't, I left university, played in the band, Mike Reno from lover boy produced
[01:50:57]  our album, you know, working for the weekend, that guy, you know, we, we thought we're going to get signed to a major label. I, I
[01:51:03]  toured, I played over 500 shows, the band across Canada and us did it for several years. I, you know, been playing in bars since I was like 15
[01:51:11]  years old. You know, I started the band when I was like 12 and you know, it was, it was challenging. I had to, I had to get
[01:51:19]  readmitted back into school after the time I worked several years in the middle, went back to university, finished university while working full time through my mid twenties to thirt
[01:51:30] ies. I didn't need to go back. I was already in the industry at that point, but I wanted to, cause I wanted to prove it to myself that
[01:51:35]  I could do it. It always bugged me that I didn't graduate. Um, and then I just started, I had my, my oldest daughter, she's six
[01:51:44]  now. And when you're in that first year, you know, and you don't sleep and you, the kid's always up. I just, I was already coding
[01:51:51]  and working on JS framework, you know, like my early incarnations of solid, but I was just like, man, I'm up anyways, I'm just gonna,
[01:51:59]  I'm just gonna hit, hit, hit at it. And I started programming and I don't solve it. And that's when it really ramped up and you
[01:52:05]  know, some people like, how do you do that? You know, how do you balance that? And it's a tricky balance. And initially I was gonna say about
[01:52:12]  setting boundaries. I'm not always the best. I try my best at setting the boundaries this week was particularly the challenge to get into those Twitter arguments and you're like,
[01:52:19]  you know, it's family time. You should draw the line, but it's hard to get worked up. Um, but generally speaking, um, I just did my
[01:52:28]  thing and worked with solid, you know, hoping that maybe my startup would use it. And then react hooks came out and I was like, wow, I can't
[01:52:38]  believe that, you know, the react team thinks this is a good pattern. I've always thought this was a good pattern. And I just started writing articles and that's
[01:52:48]  how the guys from Marco found me, you know, it's been kind of really crazy last two years. I haven't even been on, I wasn't even on Twitter
[01:52:55]  before then. I, I kind of got off Facebook years ago because I didn't want to get distracted by it. And then I'm glad I came on Twitter.
[01:53:04]  I met a lot of new people and interacted with, you know, people who are kind of my heroes in the JavaScript world. Um, and, you know, it's
[01:53:11] , it's really awesome to be able to reach out and have, you know, Dan Abramoff explain something to you or, or, um, you know, Rich
[01:53:20]  Harris, get you unblocked by Avenue, you know, stuff like that. It's really awesome. Um, so, uh, it's cool. But as
[01:53:28]  I said, I, I, I never saw this happening a few years ago. I, I, I kind of had thrown away my prospects in the traditional sense when I
[01:53:37] 'd, uh, basically got, um, kicked out of school because of not spending any time there, you know, touring with a band and, and basically staying up
[01:53:46]  all night bands always operate late at night. It seems like, and, uh, not going to classes and stuff. So, um, it's really cool to be here
[01:53:55] . It's just funny how life puts you in weird places that startup, the, the, the CEO happened to be the creator of knockback. That's what got me
[01:54:03]  into open source. It's just a bunch of pure coincidences happening at the right time. And I, I know that doesn't always happen. And, you know
[01:54:12] , I'm, I'm like a white male or something, you know, like there's a, there's some kind of statistic or something that has the world working for
[01:54:20]  me, but I don't know. I, I just, I just kept on doing what I was doing and trying to grab every opportunity that I can. So I
[01:54:30]  I'm, I'm happy to be where I am here. I don't, I don't, I don't know. Um, I don't know where things go
[01:54:36]  next. I think there's a lot of potential for solid and a lot of potential for, um, you know, learning more and driving things forward, but I, I
[01:54:42]  just love being part of the conversation. Um, let me see, where are we? Cause I, yeah, always get some fun comments in here. Um,
[01:55:05]  yeah, I'm gonna, I'm gonna get to the questions in discord. I figured I'd do it once I caught up with the chat. Cause I figured you guys
[01:55:14]  would kind of do to do there, but yeah, some of these questions are, they're fine. I talked about solid native. Oh, I made the example integration,
[01:55:22]  but I don't have time to do it full time. I haven't seen people try to use it or can be honestly, I didn't even let's, let's
[01:55:28]  push that along some channels. If you want to get some attention, throw something on Twitter and people will, will go for it. Show, show, share it in
[01:55:36]  the discord and let's see if we can get some hype around that. I think it'd be interesting. Yeah. Let's let me see. Let me see if I
[01:55:42]  can pull some questions in discord. Some people couldn't be with us tonight and they asked some really great questions and I've got a bunch of them here. Yeah. Yeah
[01:55:53] . Tiger, he, he's a force. Um, yeah, we talked a bit about code settings. Um, do you use Vim? No, I'm
[01:56:02]  sublime text was my, my go-to. I use VS code. Now I use web storm for a very, very short time. It's funny. Cause I
[01:56:08]  was a, I told you I was Microsoft, Microsoft shop guy. Um, and, uh, so I use visual studios forever. I got my first copy of visual studios
[01:56:18] , like the full version back in 1997 from my teacher. When I helped him set up the computers over the summer, he was like, here, here's visual studios
[01:56:25] . And that was like an amazing thing for, you know, a kid to get full programming suite. And I was sure I was going to make video games with it,
[01:56:32]  but it took me a long time to kind of get back to stuff. And I think VS code is just like the perfect blend. At least that's where I am.
[01:56:39]  I never gone to Adam or any of that other stuff. Um, what do we got here? What is your dream for the future when it comes to the state of the
[01:56:46]  web? See if I can make this a little bigger so people can see this. Um, yeah, I don't know. We talked a bit about potential of the
[01:56:53]  future here. And I think it would be interesting to see, um, this whole transitional thing realized, but I, I mean, it's hard to know where this stuff
[01:57:03]  goes. Um, I think it's, I think it's going to take some time. You know, I love that it's always evolving. That's the best part
[01:57:09]  about this stuff. I feel like we get better. We know more user interfaces, bringing people experiences close to close together is it's like a hard problem. And I
[01:57:20] , I like, I like problems like this. They're open-ended. They let us, they give us work for ages. Maybe you should do that then. You
[01:57:33]  know, I don't know. Like it's interesting as sublime was, was really good. It felt like no had plus plus, you know, like if we
[01:57:41] 're going back to my early days, so like getting out of.net and getting out of VS code, like it was, I can't explain how refreshing it is.
[01:57:50]  Um, we haven't quite gotten to this point again and complexity, but I feel like we're close with, with stuff. And I know I'm not helping with the
[01:57:58]  direction I'm talking about frameworks and where they're heading, but sometimes I wonder if someone's going to like get to a point where like we have server components in next
[01:58:06]  JS and they're just like, what, like just throw it all away and just write some simple JavaScript again. I feel like there's that, that nagging somewhere.
[01:58:15]  The truth of the matter is the performance is actually good this time. Whereas the last time it wasn't, I mean, maybe not completely in all next JS cases, but
[01:58:24]  I feel like, I feel like it's not this, the clunkiness isn't just the DX or like in the past it was UX and everything was clunky.
[01:58:31]  I feel like we're doing better this time, but yeah, I don't know. I, yeah, I'm sorry. I'm tangenting here. Um
[01:58:38] , okay. So let's keep on going gif or jif gif. Um, I'm probably wrong, but at least I say beat properly because I'm Canadian
[01:58:49] . So I, I know, I know how, what French words are. Someone asked actually in the, in here, if I spoke a second language. Um, not
[01:58:56]  really, I stuck at, uh, spoken languages for some reason. I can't hear the words. Like I did French my whole time growing up, you know,
[01:59:06]  I should know French. I even did French 12 because I had to, for the program I was in, in school, it was brutal, barely got through it. Um
[01:59:14] , but like something about the, the hearing the words, which is funny, you think like a singer would, would be able to pick it up, but I was never
[01:59:23]  good at hearing the words. It was always the tonal things in the shape of the sounds. Um, I was big into punk rock and for the longest time,
[01:59:31]  my favorite singer was Tim Armstrong. And I feel like I could imitate his singing almost exactly. And if anyone's heard Tim Armstrong sing, um, he slurs every freaking
[01:59:43]  word. And there's like all these nuances and how he kind of backs off his breath and stuff. I mean, it's funny, like whether it's intentional to
[01:59:54]  sound slightly drunk or whatever, it's just, it's just part of his style. And for me, it was more of like the phonetic thing that I was hearing
[02:00:01] , like the way that the sounds worked rather than like, like in a musical instrument rather than the actual words. So I'm like hearing languages has always been a weakness for
[02:00:11]  me. I can write decently well, but yeah. Uh, what do we got here? Um, if you look back and totally regret one thing, what have
[02:00:23]  you done differently? Regrets. That's a hard one. I used to, when I was younger, I used to say like, oh, I never had any regrets
[02:00:31] . You know, those experiences shape who I was, blah, blah, blah, blah, blah, blah. But in hindsight, while that is true. And I
[02:00:40]  actually talked to Tiger about this once the, the, if you, if you know, Tiger and you know, the way that he just puts himself out there all the time
[02:00:50] , I, I regret not realizing how important that was as a lesson when I was younger. It, I spent a lot of time afraid of putting myself out there.
[02:01:01]  Um, it's funny cause I was an abandoned at least so you think you wouldn't have that problem, but it was, it was hard for me. I, I
[02:01:07] , the, even to put myself on stage um it was it like i wasn't really good at public speaking at that time and i i i knew i wanted to play
[02:01:17]  in a band so i just did it i mean my first show was a train wreck the the guy who promoted it like we should have played as the opener you know but he
[02:01:27]  put us like second to the headliner or something just because you know it was his show and you know the people who were fans of the other bands got pissed off so
[02:01:36]  here i'm at like younger than the other kids or the other people to show like his all ages show so everyone's like 16 17 18 19 whatever and i'm like you
[02:01:45]  know i'm like 13 years old and we have all the hecklers and people like throwing bottles from the back and stuff and i don't know at a certain point in the
[02:01:54]  show i get hit in the head with a bottle and i mean i remember just kind of waking up to it but then i was like i was like wow that isn't
[02:02:03]  actually that bad you know i just gave the person the finger and kept on playing and it's something obviously punk rock about that but um i had to be pulled into that you
[02:02:15]  know i i always it was hard for me to understand the value of people in the thing if if you've ever uh if you've ever talked to like a good engineering
[02:02:27]  manager they'll tell you you know the secret is people process and product you know and balancing those things um i i just didn't understand the people part for a very long time
[02:02:37]  and i it was it was a hard challenge for for me i don't know like a personal question or whatever but like i'm a was an intj if you've ever
[02:02:46]  used myers-briggs that was that was my personality type i think i've grown from that a little bit but i'm traditionally an intj um if if anyone
[02:02:55]  looks that up they'll they'll know what i'm talking about and um you it always i like to analyze and i like to look from the outside in and i i feel
[02:03:06]  like you know the only way you get anywhere is put yourself out there and i i learned that i told you i was incredibly lucky when i was talking about how i got
[02:03:14]  to where i am now and every time it was from just putting myself out there and i feel like if i learned that a bit earlier in life i might be in a very
[02:03:22]  different place so when i see what tiger does and the way he's been approaching it i have a huge amount of admiration about how he gets that and i'm going to talk
[02:03:32]  to him in a future stream in the show about that because i think a lot of developers people kind of kind of come into this kind of work and enjoy this might not
[02:03:40]  have that same um mindset that he has and i think we could all use a little bit of tiger um so to speak um and while i'm on tiger's question he wants
[02:03:55]  to know my thoughts on naruto um honestly it was a it was a very transformational show it took such a long time i i remember when i started watching it i
[02:04:08]  was i was so young what was it like 2003 and by the time it got to the end it was it was like decades later like i actually started naruto right when it
[02:04:16]  was originally airing and i watched almost every episode right i mean i suffered through the years of filler and all that stuff um as much as it's like a popular anime
[02:04:26]  and people are going to be like you know that's you know cliche or whatever i mean sometimes the popular options are just relatively well done and you you see this by the end
[02:04:39]  the the fight scene that whole sequence right towards the end of the series with sasuke and naruto uh in terms of like the final battle um and the fist fighting and
[02:04:50]  there's like they're so exhausted they can barely move that whole choreography is is genius i don't care what people say about fight scenes and anime and all that it's
[02:04:59]  it's one of the most real feeling thing like i i was i think i think the show did a great job for a series that went on that long and then had to
[02:05:09]  have an ending um you know there's low points and high points but uh yeah naruto is is awesome you know and i know tiger that's where he gets a lot
[02:05:20]  of his influence from you know data bio you know believe it um you know definitely oh man one more from him before i go back and see what's up with chat do you
[02:05:37]  miss moving and from canada the biggest thing i miss from canada is i moved from a place where there was a lot of water i i know it's funny because
[02:05:47]  i'm obviously in california but vancouver canada is kind of like seattle it's like there's there's rain and rain and you're living in a
[02:05:54]  rain forest and everything is green and there's like one and a half months during the year like there's there's there's sunny times stuff but like vancouver is the
[02:06:04]  most beautiful place imaginable from the end of august mid-august through september it is just it's it's warm but not too warm it's just that
[02:06:14]  is where when you want to be there and it's a short little time period because before that you know there's the summer where you know maybe it's a little bit hotter
[02:06:21]  or whatever i've never been a huge fan of like the hottest of heat and it's not like it gets as hot as it is here but vancouver is just perfect
[02:06:28]  during that time period and even even into the fall vancouver's nice but it starts getting to rain and i'd say like 60 of the year is all rain um
[02:06:36]  everything's hydro-powered that you know you there's you have no problem having nice water move to san jose and the water is hard there's like minerals in it you
[02:06:47]  can tell like you wash your hair you can feel it we have filters and stuff but you know it's it's expensive the water bill it's just very different moving to a
[02:06:57]  place where everything is water to a place where there's like there's no water um that's probably my biggest gripe here but i mean it's really nice that i
[02:07:06]  i think i was barbecuing on christmas eve like i never did that in vancouver you can't barbecue on christmas eve um so you know it is sunny
[02:07:14]  here like every day like the weather is perfect um all year round so you know it just there there's a lot of bigger hikes and stuff you know the the coastal
[02:07:27]  mountains the rocky mountains are going to the island uh there's just a lot of outdoor stuff that was really really nice and lush green swamps no it's forests but there's
[02:07:38]  you know like it just yeah i i think the terrain and stuff and that is what i miss most that being said um you know it is really nice to to to live
[02:07:52]  um in california you know in a different sense if you can ignore the water it's really nice okay let's get back to chat what have what have i been missing
[02:08:01]  you guys are talking about some stuff what do we got here um electron adam do you have a car yeah i do have a car um it's funny as a kid growing
[02:08:24]  up i didn't care about cars i was not like those guys who are always like you know into cars and stuff i didn't know very much but i acquired a taste much
[02:08:33]  much later and like my javascript frameworks i i'm very interested in certain types of performance and certain types of characteristics so people who know me can probably guess what type
[02:08:46]  of car i drive it's not a mustang it's not a muscle car or anything like that um joe pia what ecosystem team has an awesome like gt500
[02:09:00]  or something but no i i uh my current car is a ford focus rs um before that i owned a mitsubishi uh evo x um i've
[02:09:10]  always liked japanese cars partially the anime influence um always wanted to get like a nissan skyline um not always but like when i got older and got into cars but um
[02:09:22]  yeah rally style cars um always been into evos stis um all-wheel drive those kind of things and i love my ford focus i didn't get the blue one
[02:09:32]  i got the gray one this the stealth mode one no one even knows it's a sporty car i i just i i i just love the the feel it's it's
[02:09:40]  stick shift it's uh um it's it's got 350 horsepower but it's like complete sleeper um yeah it's just perfect kind of car for me um the it has
[02:09:52]  the really you know advanced uh um all-wheel drive system with the uh torque vectoring which i like from the evo so honestly the evo's torque vectoring
[02:10:03]  was the craziest thing i've ever experienced it just the the wheels they change the speed at which they spin the inside to the outside where they actually almost overspin to purposely
[02:10:13]  um mess with the traction to corner like honestly i i i i was studying those all-wheel drive systems for a while um just out of curiosity on how they work on
[02:10:25]  the performance side of things um but yeah i do have a car torii i haven't used torii but it's interesting i guess that's there's a solid
[02:10:39]  integration blah blah tori tori tori electron hey love it's good good torii torii torii or torii what did i do
[02:11:04]  oh yeah oh i see yeah sorry about that theo okay let's let's continue with some questions here right oh this is a great one under which circumstance would you quit your daily
[02:11:21]  job to work full-time and solid jas i just want to start i would start funding campaign if you tell me the number okay i i think that's an interesting
[02:11:29]  potential for the for the future my biggest thing is i have a family to support i want to buy a house i want to get settled here i used to own a place in
[02:11:36]  vancouver and we sold it to move uh to move and pick up our lives and work here um and i'd love to get established again it's hard in californ
[02:11:46] ia things are really expensive but you know if i could support my family i i definitely consider you know if there's an opportunity to work on solid i that that would be
[02:11:55]  the that would be the kind of situation that i i would leave and do what you know go and do do that because otherwise i have like like almost the perfect job you know
[02:12:09]  being able to work on marco and solid is is amazing um to be able to you know see both sides of the spectrum and like honestly the work being done by marco
[02:12:20]  team um is is amazing just to be a part of that is amazing to to know to work with this technology that you know is can be so impactful and so powerful is
[02:12:33]  in its own right right and have solid on the other side like i i feel blessed every time to to be able to like it lends to me having the the perspective i
[02:12:42]  do that's so wide i'm not like just like in the solid zone of things you know like i my whole world isn't react you know like you know kind of
[02:12:51]  scenario um and as i said marco is an incredible project when when michael and and dylan first approached me about it like i just i honestly couldn't believe what was
[02:13:03]  there i was like how did i not know this how does anyone not know about this this is it's incredible you saw you saw the thing at the beginning like if i
[02:13:11]  showed you the hacker news code there where you know for that example that was as i showed you it's like twice as fast as remix it's it's it's just some
[02:13:20]  html like this is not like sir dot server or dot astro or here's your island you just write some html drop a class here or whatever and like
[02:13:29]  this is incredible stuff and nothing in that demo you couldn't have done in marco back in 2017. like like exactly the same i imagine you could have done it in
[02:13:40]  marco in 2014 but since 2017 all the same api and same capability and marco's only gotten better since then so like yeah i mean i it would take me being
[02:13:52]  able to work full-time on solid i think then but even then i mean i want to see marco six i want to see what the future web dev works on and
[02:14:00]  i have the blessing of being able to work and touch so many things where i'm sitting right now so um yeah i don't know we'll we'll see maybe there
[02:14:10]  will be an opportunity there in the future but um and i think that would be amazing you know to have the opportunity to work on solid full-time but yeah i mean i
[02:14:19] 'm already so blessed um did your perception on open source change after succeeding with solid do you sometimes feel like starting a new or contribute to different was products are the ones around
[02:14:34]  solid something completely different generally is there some other thing that you'd like to build or do if the time wasn't an issue okay it's a great question perception of open source
[02:14:43]  change after succeeding with solid yeah i mean that's that's pretty strong i don't know if i've succeeded per se i think like we're we there's the stages
[02:14:53]  i think we've gotten gone now with solid to like us like that first step where it's like yeah maybe this is a player you know like we're on the map so
[02:15:02]  i i appreciate being in that position because it gives us so much room to grow it gives us room to even have people ask me if i could work on solid full-
[02:15:11] time you you know what i mean like i but like we're we're a pebble you know or what's what what's the one uh um i should say a pe
[02:15:22] bble in the sky where uh um uh what's the other one current in space stars like dust sorry i'm just listing isaac asimov books from his empire series
[02:15:35]  um but they all have the same kind of notion to them i i was reading those recently actually isaac asimov is probably my favorite offer author of all time
[02:15:44]  and um anyways that's a tangent uh like we're still such a small player here so you know but it is growing there's users and there's support and maintenance and you
[02:15:56]  know between solid and marco that's that's a lot of that's that's pretty much all my time um are there other ones you want to contribute to i yeah
[02:16:06]  i'm interested to see if if my perspective could help other libraries grow um one library for example is quick i think would be really fun and i'm going to do this coming
[02:16:16]  up we're going to i think we're going to have two streams two-parter on quick coming up in the coming weeks if not i said this before next week maybe
[02:16:24]  the week after just launch into that and i want to i want to prove that quick can do um what i think it can do no one's made that demo yet i
[02:16:34]  want to make that demo so i don't know if that's contributing to quick per se but i want to i want to i want to i want to i want to i
[02:16:40]  think seeing that will push web dev forward so i want to i want to get in there um beyond that everyone knows reactive script i think it'd be really cool to design a
[02:16:49]  language we are designing a language with marco and in a sense that's that's enough you know designing a language is an incredibly time consuming process and there's so many
[02:16:59]  details involved and it's it's it's quite it's quite challenging work um working through edge cases making sure it's consistent and makes sense and once you do it all
[02:17:11]  then you have to worry about tooling and you know prettier es lint type script like all the things reactive script is interesting in that my whole goal is to preserve all the existing
[02:17:20]  tool chain but i i don't even know if it's viable but that's an area that's something that like if i had infinite time i would love to look at but
[02:17:28]  the truth of the matter is like i don't feel like i'm tied to the priorities that make me not work on reactive script like if i really wanted to maybe i
[02:17:37]  just think there are way more important things i could be working on um oh man there's so many good questions in the discord i'm gonna let me just see how the chat
[02:17:51] 's going on on here is people still talking about tori i thought you're gonna say a toyota prius yeah no only only if it was a uh toyota cor
[02:18:03] olla ae86 right um where are we going yeah you know what as cool as that would be it seems i i don't i don't think solid plays into bur
[02:18:19] sell's plan or strategy at all i i think salt was a very good pickup for them it lets them play both sides and i know this very well because i i talk about
[02:18:31]  this a bit with solid and marco kind of having both sides i think marco and solid are actually a wider spectrum because of if you think of the goal of getting
[02:18:40]  to the middle with transitional apps um marco's coming from one side and salt's coming from the other side but the thing is the versell isn't a ux play
[02:18:50]  it's a dx play it's all about it's not about performance it's about making websites easier and and svelte kind of plays into that perfectly it's just
[02:18:59]  this sort of simplicity you know this sort of like don't worry about it and i i i i think it kind of rounds out the thing they have react for you know the
[02:19:10]  popular option and then they have felt for the for this um yeah i i don't as much as i can put out hot demos that catch people's attentions and there
[02:19:20] 's i i suspect that i am not what for cells looking for well i mean ecosystem pieces maybe like certain tools like there's nothing fundamental that i think would get in the way
[02:19:39]  of that i i know um i know david is very interested on the enterprise scale stuff it's just it's never been where i've been i've worked in startups
[02:19:49]  we we did b2b you know um which i guess is kind of enterprise sales stuff but not not quite the same thing um yeah my understanding is that they've been they
[02:20:06]  did try and pursue evan years ago he actually suggested that in a tweet and he was just like he was just kind of like you know i want to do my thing
[02:20:18]  evan evan is someone people should look up to in the sense that he's he's kind of threaded the needle to be exactly where he wants to be he's like
[02:20:28]  his own boss he does everything he needs to he's he's he's got the framework you you know he goes and drops veed on us you know after he plays
[02:20:37]  for a few weeks you know like evan's living it up um as an open source uh maintainer like i think evans has the most autonomy or ability than like to
[02:20:51]  than anyone else and i think he realized that i think as he was moving up and he realized like what what he could do in the choices he made he realized view was big
[02:20:59]  enough and he just took the time and he he built himself to where he did um you know very different than like rich who kept with working at the new york times
[02:21:09]  the whole time right um or i guess the guardian before that but like i'm excited for rich this isn't a real opportunity to kind of focus on spelling get stuff done um
[02:21:19]  as i said i'd love to have the opportunity to do that with solid um but on the other hand i think evan might have you know he's might have been
[02:21:28]  the one who's actually figured it out better than the rest of us right okay that's good on that side let's go here how would you approach from scratch building up to
[02:21:43]  your current level knowledge about things like frameworks internals front-end back-end and drop performs asts whoo um yeah it's so funny because it's such a
[02:21:54]  long journey like things just kind of happened i learned asts not because of like javascript is from we built our own orm like a graphql and i i
[02:22:04]  was i was um building a json to sql query language and kind of that's where i got into asts i guess technically it was before that a little
[02:22:14]  bit but not really asts um knockout let their templating be customizable so i changed it from their data bind syntax to something that looks like handlebars or like view um
[02:22:24]  but yeah i don't know it's the thing is it's it's piecewise um it was i guess it was easier for me in that i came up while the technology
[02:22:34]  was coming up like i showed in the previous stream about petite view it was just like for me it was like nostalgia i was like oh this is like the first time i
[02:22:42]  was writing a framework you know that process and i think evan said something very similar when he was working on um uh what do you call it uh uh uh sort of petite
[02:22:53]  view yeah actually petite view um that he was like view one all over again um going through that exercise of building a framework or doing something simple is is the best way to
[02:23:05]  learn this stuff like don't i mean compiler is a big deal now so you could build babel plugins there's much people in the computer these who are good at that ast
[02:23:13]  is well defined you can use tools like ast explorer and you can try that if that's what you're into but on the runtime side i think you just build a kind of
[02:23:21]  simple framework you know and try it and that's the best way to get there like the guys on marco team like we all have framework experience before we worked on mar
[02:23:31] co um you know like dylan wrote a framework called rill um which um had a lot of it was based around kind of isomorphic routing and has a lot of
[02:23:40]  the same qualities that that are in remix that whole like everything's just a form or just a link kind of mentality so you know you you just i learn by building i
[02:23:52]  that's that's that's my my my suggestion just try and build something um look at then you'll start asking the right questions and then you'll find the pieces you need
[02:24:05]  to finish it you that's that's the that's the i'm glad i've never had that problem i i told you i wasn't good on the people side so
[02:24:14]  i you know didn't know how to the benefit of um making those connections and and building building those things up but i think a lot of people also have trouble on this side
[02:24:25]  where they just go oh this is so much work and they like they see the hill before they even get started they never do anything just make something find something concrete that you
[02:24:33]  can make with it and just start doing that thing you know you never know what you're going to end up with what you're going to find you just you just got to
[02:24:41]  start building it don't don't stop before you get started so um like if you're looking for resources i mean most of the stuff was reverse engineering other frameworks picking up articles
[02:24:54]  from my favorite authors people like uh you know you know like uh was it michelle and michael um uh westrate um mobx you know his articles on reactivity
[02:25:09]  are the best for the more mid advanced sides once you get past like my beginner articles read his articles you will understand stuff um just you know i link a lot of those articles
[02:25:21]  in the articles i i link i hope that i'm a source now for people who want to come up and learn this stuff you know read the articles get the context and
[02:25:29]  then try and build something oh what are you what are your current knowledge gaps that you'd like to research and improve upon are there other fields and technologies that you're interested in
[02:25:39]  exploring um yeah i mean that's the thing you never know everything um yeah it's so funny because you get so focused on on a certain area um that it's it
[02:25:56] 's it's it's tricky um i at different times there's different things i've wanted to explore but nothing enough that i um like i feel any kind of regret or like
[02:26:11]  any kind of onus to do that most right now i'm pretty happy with the types of technologies and stuff i've been i've been looking at around the web technologies
[02:26:21]  i think it'd be interesting to know more about um you know like what the hell is web 3 and what everyone's talking about and that stuff but i you know i i
[02:26:31]  honestly you know i'm pretty content on that side i in terms of like uh um the web i i think it would be nice to go back and learn more about the
[02:26:43]  back end again i was i was a full stack developer but i'm pretty rusty these days maybe it's time to learn rust you know speaking of rusty um i i think i
[02:26:52]  think it'd be cool to to see what modern back end looks like um and i i know that that will help me on the tooling side i i'm definitely not up
[02:27:02]  to date on that okay what's the question if someone made a tool or library in for solo not for the hack along what would it be not quite sure if someone made it
[02:27:19]  yeah i'm not sorry i'm not quite sure what you mean if like what what tool would i want to see someone build is that what you mean like more than anything
[02:27:31]  um i mean for solid's sake i just want to see more component libraries like honestly um that that's the biggest gap i hackathon or not we we just need to make
[02:27:45]  it really easy for people to like pick up their favorite components um if that's what the question is um where were we um flows i think that's a problem i could
[02:28:07]  be a lot more efficient so i i don't have anything to add there music i've been listening to lately already answered do i regularly keep up with music mostly just singing
[02:28:18]  for my kids when they're little um i i pull out the guitar occasionally but i i i haven't been playing electric guitar i've been playing acoustic guitar you know um uh
[02:28:29]  i i used to like practice stuff like peganini's fifth caprice and stuff like the full like hair metal shredding kind of stuff i i'm i'm so rusty
[02:28:39]  you know i i probably have a hard time getting through the guitar solo rock me like a hurricane at this point so like i i i'm i'm not really probably yeah
[02:28:50]  i'm definitely not where i was talked about renaming renaming solid now okay let's see here yeah yeah yeah what's your favorite password to use yeah that that's
[02:29:13]  a great question thank you uh okay uh what learning material do you suggest for someone interesting getting deeper into reactivity i i actually surprisingly just talked about that start with my learning series
[02:29:24]  on on dev2 the like building for scratch and then get into the mobx articles i think that's that's the best stuff on the the fine grain how do you
[02:29:32]  find a balance between open so uh to avoid open source burnout um yeah that's that's a challenging one um i i probably have a higher threshold than a lot of people just
[02:29:48]  because of continuous uh motivation and desire you know i'm like i've always part of my personality is like always wanting to get to the truth so to speak so i i
[02:30:02] 'm like very driven but yeah time boxing you know as i mentioned before is the best thing that i can do um but it's still hard i get pulled over time all the
[02:30:12]  time especially towards the like late at night when i mean the only consequence is being tired at work the next day you know i'm up there for the for the morning call
[02:30:22]  you know or even before then i make sure that i start work on time but sometimes i am i do stay up too late so i i feel like it's an area that
[02:30:31]  i can do better i am i'm definitely lacking on sleep sometimes so um it is a challenge i i've been doing it now for who i'd say good five six
[02:30:42]  years so maybe i've found a certain balance but i feel like that balance is is not perfect um so i want to do better i i'm i i definitely don't sleep
[02:30:55]  as much as i should be um do you have any favorite podcasts yeah this is a good question because i don't that's one place where i almost um never have a
[02:31:17]  ton of time to get into or listen to i know a lot of people have a like favorite podcasts um i i've listened to a few shows of people that i like
[02:31:31]  i'm into and one thing is i i want i want to say like big props to the guys at pod rocket their interviews that they've done with people they resonate with me
[02:31:42]  i don't know what it is i felt really good about mine i felt good about dylan fred's like a bunch of a bunch of those interviews they just they drive
[02:31:51]  on the points in a way that lets the person talk about the technology but still gets the bottom line out i've been on lots of different podcasts and i always feel a
[02:31:59]  little embarrassed because like oh yeah so you listen to it and they're like popular podcasts i'm like no um i've yeah it's just one of those things that like you
[02:32:08]  know you only have so much time podcasts are the are the thing that get get the get kind of the the run around on that i i if there's a certain content
[02:32:19]  i will go for that because i'm interested in it um other than that honestly um i just need a quick dose of what's topical at the time um you know
[02:32:32]  maybe something that i get off twitter or something so like i'll just like drop onto like a one of theo streams or something just to kind of get like an update of what
[02:32:40] 's going on and that's that's about enough for me i know there's a lot of people working on a lot of interesting journalists type aspects in terms of podcasts and
[02:32:50]  stuff but the truth of the matter is like for the technical level of detail that i'm looking for and the specific things i'm looking for i don't usually get that
[02:33:00]  on pockets i know people are listening to me now talking about my non-programming side of things and all that but like you know a lot of them talk about like how
[02:33:09]  did you get where you were what was your story and stuff um there's people that i'm interested about that and then like vast majority i like the the analysis you know
[02:33:24]  i've just found isn't as deep or interesting for what like for the time investment i dylan has helped me he has shown me how i can listen to stuff at 2
[02:33:33] x speed so i'm getting used to that um my original problem is i didn't even think about speeding stuff up until a couple months ago so that's probably why um which
[02:33:41]  is kind of interesting because i did used to listen to a lot of podcasts back in the day before i got as heavily into development i was really into magic the gathering and
[02:33:49]  i listened to magic the gathering podcasts um but uh yeah unfortunately yeah i'm probably the worst person on that side i felt so bad when i when i as i said go on
[02:33:59]  these and they're like oh so you familiar with the show and i'm like no you just asked me so i said yes yeah a little promotion there for theo yeah i
[02:34:21]  hope those timestamps work i go back and i try and edit a stream like this today i'm i'm probably not going to be able to edit it in detail i'm
[02:34:35]  probably not even going to try um so i apologize to anyone who's not catching it live um there's just too many questions and things i don't know how how to
[02:34:43]  group it i can like group like remix stuff ama but yeah i mean that's about as much time i finish the streams and it gets pretty late sometimes and i'm editing it
[02:34:56]  while catching like my one anime that i have time to watch a week or whatever um recently for me that's been platinum end by the way i'm a a huge fan
[02:35:05]  of the work uh i've always liked the work by the the guys who made death note the the the writer um artist pair um their other series actually bakumon um is
[02:35:17]  great it's about it's almost like autobiography about two anime authors um it's it has all the right notes it's inspiring and whatnot but platinum end is like they're
[02:35:28]  you can tell they're like someone's like write another death note you know it's a little bit different it's like a it's not as dark in the same way
[02:35:37]  but it still has elements of it i don't know um but yeah i i don't know how i ended up talking about anime again there you go see i'm not used
[02:35:49]  to it 1.5 took me a while to get used to i can do 1.75 now i i can't even get to 2x it's it's it
[02:35:59] 's it's difficult i told you i have a hard time hearing words so this is more of a struggle for me than most people probably yeah yeah i mean i've watched demon
[02:36:10]  slayer and this is the new season i'm gonna i'm gonna try and catch up on that i'm a few episodes behind i haven't watched any of attack on tit
[02:36:19] an i know it's like one of those critically acclaimed ones i just i never got started with it and so i haven't i haven't seen any of it yet
[02:36:27]  yeah i mean hunter x hunter i've watched both versions the 2002 version or whatever and the 2011 version from start to end um different ones they have different benefits of that i i
[02:36:45]  thought that show was very clever um i i i am a sucker for classic uh shonen you know i mentioned already like naruto um hunter x hunter is definitely a favorite
[02:36:55]  of mine and actually my wife she doesn't even watch anime that much but for the longest time she's like we're gonna name our son gone that's that that she was
[02:37:04]  determined and i was like i don't know i don't know if we'll name him gone but she she she she thought he was just the cutest little boy um and
[02:37:16]  yeah but i yeah uh ooh what kind of legacy do you want to have in the field do you think about it no uh actually no i i mean it'd be cool
[02:37:36]  to make that kind of impact but i i just want i just i'd be really cool if fine-grained techniques ended up being something that like as far as i can
[02:37:46]  see they can scale we've seen them for performance we've seen them now for hydration with what marco six is doing it'd be cool if this approach had wings you
[02:37:56]  know outside of that i think it does but it's going to take some proving i i would love to see if that this model versus like the react model like to me those
[02:38:08]  are the two like two very different approaches but i think they're like the two like leading sides maybe they're converging i don't know whenever i talk to dom he he
[02:38:19]  kind of makes them sound like they're more the same um then they're different but i kind of really want to see if we can take this kind of fine-gra
[02:38:29] ined thing and not just reactivity just the language of fine grain you know reactivity is an example of it and take it to all the same place as react is and see
[02:38:37]  if it's if it's a better model um but that's that's the technology that's not about my legacy so yeah i don't know are there are there always
[02:38:46]  gonna are there ways to gain more speed by utilizing web workers um web workers yeah i mean offloading work if possible it's good but you got to weigh off the serial
[02:39:00] ization costs and the thing is if this would cause you to go async it would it can change performance thing one of the things we want in a framework is being glitch
[02:39:10]  free we want to apply our effects all at the same time you know and that's where the whole transition model from react and whatnot web workers um you know they put a cost
[02:39:18]  in there that would make it trickier like do you do you go into a transition or suspend whenever you send work to a web worker i think where they're interesting is like
[02:39:27]  where you know you're like this is async it can go off on its own that kind of mentality and you know that kind of splintering obviously isn't consistent
[02:39:36]  but i think there there's types of heavy processing where web workers makes a ton of sense um but it's a different kind of thing the reason react didn't go that way
[02:39:46]  and they want the fiber is because they want a bunch of lightweight things they're getting killed by a thousand cuts if you look at the way that concurrent rendering works in react um
[02:39:55]  and time slicing it's like it only works on memos not on effects essentially it doesn't work on the rendering it only affects the code that's expensive when your components
[02:40:05]  are rendering so to speak and i'm i'm always like what the hell are you doing that's so expensive that you need this and i i think the problem they were like
[02:40:13]  is we have this giant page at facebook running react and maybe they have some over re-renderings going on and whatnot and they're just like they can't possibly pinpoint all
[02:40:23]  the expensive places and it's just the total sum of it all is is adding up because of the pure size of it so they came up with concurrent rendering and time slicing
[02:40:34]  as a way of going like okay now any stupid thing that one person on the team does or one team does or even if it's just a bunch of small stupid things they
[02:40:42] 're not going to impact the performance of our whole app but that's very different where i feel like a web worker is like you know this is going to be expensive like it
[02:40:51] 's a single expensive process so i think they're easy to identify kind of thought about just like what if you just go like create worker memo or something you know what i
[02:40:59]  mean where you're just like just call it out like and and do it explicitly like maybe that that's a cool thing i just don't know where that what i want to
[02:41:07]  do in there people can probably think of it but um yeah i'm sure there's something expensive that's worth worth uh you know abstracting off thanks theo i don't
[02:41:23]  know if you're already gone but thank you yeah i mean i've considered it i have a different perspective than other people which i think is kind of valuable mostly in that
[02:41:44]  at least with the current crowd like there's a few different schools of of of thinking you can see it when you go on twitter there's like the alec russell b
[02:41:55] rian larue you know and even a lot of members of the chrome team are kind of in this boat where they were developing before the rise of single page apps and they
[02:42:03]  never really believed in it like they're like oh this is cool this is gonna interact and like oh no there's downsides to it and they're kind of like on the
[02:42:11]  like mpas you don't need single page app side of things the coincidentally they're also closer to things like web components you know it's standards driven development and but which
[02:42:23]  is fine but they're kind of where they are because they never took the step then you have a whole bunch of people who all converged on react and built their career
[02:42:33]  on react um and that's good like they came up with it but like i talked to one of those people earlier today and they were basically explaining to me how react's mental
[02:42:44]  model like regardless of you know what happens with the technology in the future they're like that's the one piece that stays so like you know it's okay we can change the
[02:42:51]  technology replace the libraries maybe even react itself goes away but you know they've defined that model and that's what how all ui should be forever and i'm just like
[02:42:59]  no i disagree strongly and i feel like that's why maybe i'd have a different take because like in my opinion react was you know huge like it changed the game but the
[02:43:11]  things that react did were already evolutionary steps that other frameworks were moving towards like going from mvc to mvvm to components like it was a natural transition that
[02:43:22]  was going to happen react is just like like someone coming from like a year or two in the future coming back and like in time and going this is a solution and people like
[02:43:34]  people didn't get it at first but like essentially just having like a slight further interest like insight into the future and then being able to kind of shape things on a certain
[02:43:44]  direction but there were other directions to take at that time that would have got us to similar ish places with like the same benefits but different implementations that's that's my
[02:43:53]  belief so i don't have the same view of like react changed every like they they change everything from an impact standpoint but not from an innovation standpoint from my perspective so so i
[02:44:05]  think it'd be interesting maybe at some point to write a book on that perspective because you know i give a lot of credit to other like knockout for hooks even though
[02:44:14]  they're not the same thing those patterns existed outside of react and react you know in they're the victors you know so goes the spoils you know they get the revision
[02:44:26] ist histories i feel like there's a the the true history is you know slightly slightly different um so yeah i don't know maybe some people will find me my my perspective
[02:44:40]  interesting i'm going to be away from web dev for one two years what do you think is going to change and what should i focus on at the moment to get ready for
[02:44:51]  that uh it's hard to predict the future i think the one thing is this this this trend towards the server is going to keep on going so like don't be surprised
[02:45:00]  when you come back in a couple years that stuff like server components are like perhaps a more of a norm you know um you were already seeing it right now like generally speaking web
[02:45:14]  dev moves pretty slow i know there's this whole like the reason that it feels like it's fast and people have the javascript fatigue is because things get built up so
[02:45:22]  big that everyone focuses in on those narrow things and they ignore everything around it and then like the stuff around it was actually there the whole time and then it becomes a big
[02:45:32]  thing and then it's like oh wow we're over here now we're over here there it's that my optics focus that makes makes things feel like they jump around or move
[02:45:41]  around so much i think you just step back and go look all the writing's on the the wall so i wouldn't i wouldn't worry too much about about that i
[02:45:51]  i think like react's gonna still here and be a big player i'm i'm interested in the future for angular i think i think angular has has interesting choices to make at
[02:46:02]  this point because even though they're perfectly viable framework and they're used everywhere their mind share has almost dove off like i don't know if people just even like their mental model
[02:46:14]  anymore i i don't know if that's where people are at but in general yeah i just i just look i expect like more of the this stuff around less javas
[02:46:26] cript in the browser and new patterns like that things that compilers are going to continue to get worked on um yeah this this someone at least someone's going to move towards
[02:46:38]  transitional apps i don't know if transitional apps will actually be a good thing like the first versions will actually be any good but i think you're going to see some of
[02:46:45]  that stuff generally speaking though i i i think a bigger trend is you're going to see react is moving into being like the new enterprise software like the new angular i think you
[02:46:54] 're just i think you're just gonna see more react dominance over the next couple years even if the grassroots level and like hip style is kind of get tired with react and wanting
[02:47:03]  to try new options react is cementing its foothold you know you know like where angular was before i think they're moved from being like the library to the framework
[02:47:16]  is what's doing that and yeah i don't know i i don't expect any like huge huge shifts unless like there's some unexpected new player that we that's already been
[02:47:28]  going for the last couple years and suddenly takes the forefront anyways that's enough of me speculating yeah i appreciate you saying that i i i like getting in other perspectives heads
[02:47:46]  like that's how that's how i that's that's that's how i that's how i do it yeah solid has a good amount of stars on github
[02:47:55]  but not too many downloads npm what do you think that is i think we need a big company that backs all it up and shows how good it is yeah yeah and a
[02:48:01]  similar idea is if if i was working on solid full-time or had a small team of people working on solid full-time we paid for that might legitimize us in
[02:48:08]  a different sense but no i i think it's i think it's more than that i think i i saw someone post something the other day about lit um and and basically just
[02:48:17] in was saying the from like he like lit and stencil have more downloads than svelte they're both they both have have more downloads as well and and svelte
[02:48:27]  has way more get out get up stars like lit has 8 000 hasn't even hit the 10 000 mark i forget where stencils at probably in like the low mid teens but
[02:48:37]  both the libraries are more downloaded than svelte yet as i said svelte's like what 40 50 000 stars at this point it's it's it's it
[02:48:48] 's trailing angular view and react but like it's it's the only other one in that range it's gone past preact ember you know what i mean like get
[02:48:57]  it's downloaded less than than those i i think there's like there's a huge difference between mindshare and and like what's being used because it has to be
[02:49:15]  used or like things that are getting pulled into ci tools or like being used by by google or whatever so yes a big company would help a lot i think we're just also
[02:49:25]  at a stage with solid where people are trying it out maybe looking at it going on the website getting an idea but they're not buying into it yet like it's hard to
[02:49:33]  gain this kind of traction i'm happy about the github stars and stuff because that shows that when someone comes in and get hub stars that they're going it might be
[02:49:41]  like a popularity thing or a hipster thing but it's they're saying like i think this is a good idea and for us right now that's that's that's
[02:49:49]  enough there's a lot of people who think solid is a good idea regardless of whether they get to use it or not you know solid has grown in stars um for a small
[02:49:59]  library faster than you know any other library in the last year like if that was alpine the year before they did that kind of jump but like big libraries have a certain
[02:50:08]  inertial thing where like they'll just gain stars just simply on size but we we like this past year we had almost as many stars as angular um you know and given the
[02:50:19]  difference in size that's that's monumental um so i think it's just a matter of a lot of time people using it you know people kind of gaining an appreciation you
[02:50:27]  know or getting the opportunity really i'm as i said it's been flatlined i looked at some other frameworks further back like preact and stuff when they first came on and
[02:50:39]  yeah they had a faster ramp up on downloads they did flatline at a certain point or were closer to flatlining on the npm download side um like less steep but
[02:50:51]  they did have an initial bigger growth than solid which i think is interesting so yeah i don't know maybe it's not a good time to be a new framework from like a
[02:51:01]  practicality standpoint even if a lot of people think we're doing really really good stuff yeah someone asked me in here when solid start um it's going to be ready yeah
[02:51:19]  i that's that's the one we're working on our own meta framework there's also um uh the the one that uh alexis from the ecosystem's working on uh
[02:51:28]  bridgety um there was a few in the past like liquid someone had one called liquid and uh steve from build builder io and quick and stuff was actually building out solid
[02:51:40]  uh meta framework for a while too um it's just going to take some time those these these these things are beasts in terms of configuration i think the biggest gap is we
[02:51:49]  haven't used solid this way and as we're doing it we're finding the gaps you know there's there's building blocks or pieces that are just missing in solids maybe not
[02:51:57]  core but i know we want to be opinionated them at the core and we're kind of using this as as our real example to build towards so anyone who's building a
[02:52:06]  meta framework right now like alongside solid start is hitting the same issues and learning the same things and we're coming up with the same pattern so it's just a matter of
[02:52:13]  time um you can go wire solid ssr up yourself today but i think solid starts coming along great and as i mentioned before we're still on track for getting a beta
[02:52:22]  version out this quarter you know in the next month or so you're into modularity is a fitness strength movement are you like you are you are you are you talking about
[02:52:38]  um like just staying healthy and working out and stuff um i'm gathering that's the question i don't quite get it which probably shows that i'm not enough my my
[02:52:48]  my wife is definitely more on the fitness side um yeah i mean i do a lot of hiking um used to do a ton that used to be my exercise i used to just
[02:52:59]  like go several times a week like after outside work hours i just like even sometimes at lunch just go hiking not so much since i moved here um definitely put on a a
[02:53:08]  couple pounds uh but um yeah i yeah still do hiking and you know nothing special a few you know downloaded workout video type of things like but yeah i'm still rocking stuff from
[02:53:25]  the from that i've had forever from pirated downloads you know old pirated copies of p90x with what's the name tim horton or whatever yeah but what
[02:53:38]  do we got here on this note can we compare solid to dino's i mean dino is like a node run it's like node it's like a different runtime or
[02:53:49]  like cloudflare work is a different runtime solid should be able to run on dino with some tweaks but like almost all build tooling is built in node so you'd probably
[02:53:59]  still use node to produce a dino app today our compiler specific stuff makes it like not really lend to like just work at runtime we we still pre-compile our
[02:54:07]  server bundle so yeah i don't know um i david was working on this doing some really cool stuff with swc and there's potential for it to work but i mean
[02:54:16]  solid is just like a different piece in this in the stack so to speak or or you mean you meant in terms of like company structure and business model maybe this is not
[02:54:28]  an area that i'm terribly versed in otherwise maybe i would have already figured out how to work on solid full-time well there you go good on you i i have
[02:54:40]  p90x i've never finished p90x i just keep on doing the p90 one you know i'll be motivated do that for like the three months and then
[02:54:49]  be like yep that was good and then usually i finish or right before i finish i mildly injured myself and then another three or four months or six months pass and then i
[02:55:00] 'm like oh crap i haven't been on it and then i do it again so i've never you know i've never i think i did p90m for a
[02:55:05]  while i never i just never worked up to x like mad respect for x3 all right where were we uh okay let's see if i can go for what's your favorite
[02:55:26]  cartoon movie musical band video game food oh well just favorite everything um that's interesting i haven't thought about cartoon for a very long time yeah i'm gonna sound so it
[02:55:43] 's so funny when i was younger i had like all those lists of favorites and i like as as i got older i just like don't have those anymore like i remember like
[02:55:53]  for years being like this is the best band like like going from like rancid to afi at one point to like like gray and some of the stuff i like
[02:56:04]  later but man i don't i don't know movie yeah this is i'm surprised i can't actually think of anything right now like i could say something cliche like oh yeah
[02:56:16]  i love the lord of the rings movies but like you know um video game um i'm a huge final fantasy fan but honestly i think legends out of breath of the wild
[02:56:30]  it's just like it's like one of those things i always like those moments when like i'm i'm i'm nostalgic by nature so when you find a game or something
[02:56:38]  that takes you back to what it was like the first time you've ever played a video game it has a deep meaning for me like the same way that i was talking about
[02:56:46]  when i found javascript again after you know doing javascript in 96 97 and then finding it again in 2010 it just did that full circle for me i mean
[02:56:52]  that's part of getting old but i've always been like that so for me like like breath of wild was like was like finding zelda one again it just had that
[02:57:02]  feel where you didn't know where you're going like zelda the first zelda game was like my first video game i begged my parents to get a n
[02:57:11] intendo as a kid and uh i i got in like 1989 i believe it was a few yeah 89 1990 i can't remember but yeah the original legend of zelda game
[02:57:23]  i remember playing through it and like without guides or directions it was you kind of just found stuff and you could do it out of order and breath of wilds just kind of
[02:57:32]  captured that feeling but done so well cats or dogs um i like cats when i'm allergic to both my wife had a cat it was very sad that she had to give
[02:57:44]  him up i i tried i just or her up rather i just i just couldn't i i couldn't handle it speaking a language other than english not that i as i mentioned
[02:57:55]  i i can speak french barely but i don't want to do that favorite programming language other than javascript um hmm it's not typescript which is funny because it
[02:58:07]  might be typescripts like ancestor um i really really like the design of c sharp when i was doing game programming so i really really really liked c sharp i liked how it
[02:58:16]  loosened up stuff on the types i liked how you could do uh um like the delegation and stuff like c c sharp and like had like i mean when i introduced like
[02:58:27]  anonymous like lambda to like functions and looser types and stuff like i i thought c sharp was like just such a future thinking language i don't know like as i said i
[02:58:36]  haven't used rust or anything recent so i don't i don't know but i was a big c sharp fan um think about south park my friends thought it was funny
[02:58:44]  i just never got into it when you were younger and into punk were you also in an anarchist no no political leanings now slightly leftist center i don't know i
[02:58:53] 've always been i've always liked left wing politics like um i grew up in canada always kind of more on the socialist kind of side of things you know like the idea
[02:59:03]  of higher taxes and and giving of supporting social programs um not much has changed there it's interesting in the u.s because even the left is kind of center so i
[02:59:12]  don't know it's it's so funny because like you come to us it feels like you've like entered right like like the whole political system is so far right wing like
[02:59:23]  it's just it's just so so funny because like the guys on the the really far right are like going you socialist whatever to the to the like to the left wing side
[02:59:32]  i'm just like the the left wing isn't even left wing it's like right wing like it's the the the far right is like i i don't they they
[02:59:39] 're in like a different dimension like their heads like up their own ass i i i just i don't get american politics it seems really really stupid i know this is an ignorant
[02:59:49]  position but i as an outsider i can't make any sense of it um what do you think about crypto i know nothing about it i want to learn more maybe how do
[03:00:02]  you feel about working for a huge corporation um i don't know uh it was different working for ebay would i work for meta or google maybe i i never really associated thing
[03:00:13]  there and i know like from the left wing side of me should be like oh you know capitalism and whatever but like i don't know i i was never strong on the political
[03:00:23]  leanings for me even when i was in punk rock it was about the social side um when i was growing up my my parents had foster kids we used to like take
[03:00:33]  kids into our house um and the the a lot of times parent kids of abuse um parents of drug problems and i saw a lot over those years when i when i was when
[03:00:44]  i was younger and we we tried to give them a home but like you know those kids have been through a ton like like some of the stuff they'd say you'd
[03:00:57]  have like a cute little three-year-old girl and then the stuff that come out of their mouth when they're angry you could tell like they'd been threatened or like
[03:01:05]  it's really it's really incredibly sad and i i'd like to think that we gave them at least for a short time you know a more opportunity a way to change
[03:01:16]  direction your life because it's it's hard the you know as much as you know nurture versus nature and all that like it's it's growing up in those environments it can
[03:01:30]  be very difficult on your offset and it kind of lends into self-propagating problems where like it's hard to break the cycle um and for me when
[03:01:43]  i like part of the whole thing with like punk rock for me was more on the social issues sides of things i was never very political um but it was always it's funny
[03:01:57]  i totally was having a hard time identifying with people on like the programming and technology side but for for for me um like punk rock was about empathy what do you think about
[03:02:09]  no code okay end of this block um i can see the desire for it i've never seen it pulled off interestingly but i think all our work in declarative like everything we
[03:02:18] 've been doing to make stuff more declarative even like the stuff we're doing with fine green reactivity and all this to kind of get this model that's declared a
[03:02:25]  data declared a view is all precursor to maybe a day when we can do no code like maybe no code is the extent of it you know us really understanding the language properly
[03:02:35]  in the model to the point that we can model it with something other than words so i think it's a potential just that we're we're probably not there yet i mean
[03:02:43]  we're definitely not there yet okay where are we going what gave you the motivation need to create solid when react is so well established well i mean the problem is i never
[03:02:57]  thought react was very good at the beginning i mean this is such a funny thing because i respect react a ton more now like a ton more like i came to appreciating begr
[03:03:06] udgingly over the years but like when i started i was working on knockout and i was doing my thing and you know we were we had observables and we
[03:03:16]  composed the behavior like the the stuff you do in solid i was using those patterns a decade ago and i thought it was good like why wouldn't i think it was good so
[03:03:25]  when react came out and like here's classes and like life cycles i was like god are you guys serious this is like dot net like i i didn't i didn't like
[03:03:36]  it like oh and we did this vdom thing where we render everything but it's fast enough i was like why would you re-render everything why would you render it
[03:03:43]  over like the whole react model to me was like alien and it took me a while to appreciate things like the things that i took from reactor unidirectional flow and imm
[03:03:53] utability like those are things that were important the old knockout stuff was full of foot guns but like right from the get-go it wasn't jsx i saw js
[03:04:02] x and i was like huh that's interesting and i i wanted to experiment with that stuff because i was like i'd already sensed that we needed to co-loc
[03:04:12] ate things we were doing mvvm and once the once your controllers basically become view models once you get that instant stuff you want to bring it closer together so we were
[03:04:20]  already experimenting putting our like pug files next to our uh coffee script files or whatever it was jade back then but we were already putting kind of getting towards the components so
[03:04:32]  when i saw jsx and it could be in the same file i was like huh i don't know if i like it but like that seems kind of cool you know what
[03:04:40]  i mean it was i wasn't repelled by the stuff that repelled most people about react i just didn't like to lose the composability and i know they had the
[03:04:48]  mixing pattern someone showed it to me and i was like well that's really cool the way it hooks in but like look how like i was like the code gets split in
[03:04:55]  all these different places like what i loved about knockout was i just like define all the behaviors in one place like the whole hooks intro that react gave that was my argument and
[03:05:05]  like six years before hooks came out like when react came out i'm like why won't you just do it that way so like that's why solid got pushed because when react
[03:05:15]  said like this is the way i'm like you gotta be kidding me like this this is this is what i've been saying the whole time like i i i instantly was
[03:05:24]  like okay this is an area that i know something about so i'm gonna start sharing it and once i realized the hook rule limitations and the the closures and all that i
[03:05:34] 'm just like this is like not even as good as the reactivity here like i i just ran with it from that second it wasn't about established i didn't care about
[03:05:46]  adoption when i started solid i just wanted to write something that i'd enjoy i want i want to go to work and we we had the startup where you know it wasn
[03:05:54] 't greenfield it wasn't like a newsroom where new stuff came up we had to maintain the same app for years and years and years and i loved the product but we
[03:06:02]  wanted to adapt and keep it up to date and not incurred technical debt so what i valued about all was modularity and this composability all the things i built solid on
[03:06:10]  i want to make a framework that you would write the code in and three years later still be happy about it so i didn't i didn't care about adoption i wasn
[03:06:17] 't daunted by react at all i wasn't like oh everyone uses react i was just like oh sweet they can use react i've got something better you know like that that
[03:06:24]  was the mentality i didn't really care i wasn't like out there to win people over to to my framework but when react came to me so to speak when they were like
[03:06:32]  yes this is the pattern i'm just like oh man i mean not even at first i was like okay well maybe maybe react is going to be something i liked doing and
[03:06:44]  we brought it into our react native project you know we i was using some react i had to right um and and we brought hooks in and used it and i was like i
[03:06:52]  just immediately felt like i'm like it's kind of good like this is an improvement but you know i it was very very obvious to me very quickly that this sort of
[03:07:04]  approach reading was solid it was like it was it's its time so to speak i i probably should have pushed it earlier and not get so tied up with ssr and
[03:07:13]  feature parity maybe we should have gone 1.0 a couple years ago but i kind of was aware that once we went 1.0 got more users on we'd be
[03:07:22]  kind of stuck with our decisions and i wanted to be fluid i wanted to make sure that before we went 1.0 we weren't because the problem is once you do that
[03:07:31]  effort do the documentation do all that stuff you're stable you know it's changes happen slower i wanted to make sure that we got past the current frameworks that we were you know
[03:07:41]  improved on them in every way that i could think of like actually like just leapfrogged in front of them and then when 1.0 so that the next period
[03:07:50]  of time when we're doing docs and you know getting stuff stabilized yeah sure everyone else would catch up but we would be right in the pack at that time in terms of being
[03:07:59]  a good solution from a technical standpoint because as a small guy you have to be objectively better in some sort of way so i needed to make sure that before we went 1.
[03:08:09] 0 that we were objectively better and we'd keep that lead um through you know slowing down through stabilization so yeah it's a funny question because as i said it wasn't
[03:08:18]  it wasn't about adoption originally it was just like i just wanted to build something i i liked yeah yeah i mean i i'm getting help now which is so helpful um especially
[03:08:35]  on solid start solid start is time during but personally yeah i mean i've spent to do it's not unexpected there might be a week a day or two a week that
[03:08:43]  i take off you know usually that it is but the last little while it hasn't been but i work i would say good four to five hours on solid a night so yeah
[03:08:57]  seven days a week yeah i mean do the math what's that 28 hours to to uh 35 hours so yeah i almost work on solid full time yeah i mean it
[03:09:23] 's hard for me to estimate but i i've definitely worked 70 hour programming weeks i mean it's not all about programming it's about planning and doing other stuff um my work
[03:09:35]  on the marco team sort of split i do a lot of evangelization i do a lot of article writing i do a lot of planning i do a lot of like
[03:09:42]  preparation for talks and stuff as well and documentation writing so it's not all programming so that variety lets keeps keeps things you know fresh okay how are we doing good morning what
[03:10:05] 's your impression from which frameworks people are coming to solid um that's an interesting one obviously i'd say the majority of people come from react but that's because the majority of
[03:10:21]  people know react um although i don't know if we have that many full react converts like people react people are pretty loyal just from long history so even when we have people
[03:10:35]  coming from react like it's it's coming from all over we've had some from view less common interesting because probably because the philosophy difference um surprising number of people from svel
[03:10:47] te um i wasn't expecting that because i figured people like svelte for like the svelte things and solid is not that but a lot of people ended up
[03:10:57]  at svelte not because of the svelte things but because they were chasing performance or they were chasing ways to get away from react's complex model but they'd actually
[03:11:06]  prefer if react was just you know simpler i i imagine we'll get more react converts in the future because what was happening i think a lot was like people would go from
[03:11:17]  react and then they just dip their toe in svelte and they see solid and go like oh this this is where i want to be like that kind of thing i think
[03:11:24]  we're with enough attention now we're actually kind of catching the people as they leave react before they get to svelte i think that's that's sort of the thing
[03:11:33]  because we're just more natural fit for for people coming from that mentality we we respect and value the same things that the react community does and the react community has been great they
[03:11:43] 've they've been really surprisingly supportive um you know uh i i think i i i feel more of a sibling relationship with them than you know svelte who because a
[03:11:54]  compilation people think we'd be kind of similar to but svelte has a very different philosophy and i find people who are really into svelte are more like the difference
[03:12:03]  of people who are really into react like really like react and hardcore would never leave react they'll see solid and be like that's pretty cool like maybe maybe that's not
[03:12:14]  you know maybe i'm not going to move and i like react but they see it and they go you know if i was ever to leave react for some reason that i can
[03:12:22] 't think about why and i'd ever do i'd check out this library because i think i think it does the right things i think it agrees with my way of thinking where
[03:12:30]  on the svelte side they just look at and go why the would you ever do this like why would i give up this clean syntax and do all this stuff and
[03:12:39]  like that's why i left react like for them they they they went to svelte from view or react because of you know certain things on like this like the syntax and
[03:12:48]  all that kind of stuff and i don't like they see solid and they see react in it even if it executes differently for them they've kind of conflated those
[03:12:56]  things so as i said i feel like reacts the natural one but react has a lot of people to share you know so no it's been mostly small companies and startups we've
[03:13:15]  i've seen people want to come and invest in in solid invest in me invest in that but start a company all that kind of stuff but uh we we haven't had
[03:13:24]  any uh like i've never had a huge company be like oh we want to come and use solid yet they need they need more than that they they're cautious i've talked
[03:13:34]  to people from big companies smaller teams vetting stuff you know none of that's panned out yet or you know i haven't seen experiments through i have definitely talked to
[03:13:45]  companies members of teams on other like say fang level companies who want to use solid for specific purposes but you know they they have to go through a vetting stage and it
[03:13:55] 's very hard sometimes for them to introduce new technologies and stuff so i haven't seen the fruit of that but i'm hoping it's just a matter of time yeah yeah
[03:14:08]  i think one thing people say often is that learning solid is like they learn every other framework that they they like like they learn it better and i was talking to someone about this
[03:14:18]  the other day because someone took offense at something i said on a stream because i was like you know with svelte they try their hardest so that you never need to learn
[03:14:26]  how the framework works and that with solid um it's kind of the opposite people who come in and learn solid are like yeah i feel like i could write this framework and
[03:14:39]  i was saying and someone's like you know didn't like what i was suggesting there but i mean i gave enough evidence i think to support my case but i i i find
[03:14:48]  that people who use solid you get adopt solid suddenly understand how every other framework works better it's just because we put the mechanics on the outside so to speak which you think
[03:14:59]  oh that makes it really hard or complicated but if the model is simple enough it isn't and then you suddenly go oh now i get what all the other frameworks are doing under
[03:15:10]  the hood and you go why why the level of interaction well there are lots of good reasons and we can get into that you know different question but essentially this is the trend i
[03:15:21] 've been seeing and maybe it's because of the learning curve and stuff but um you know the this sort of awareness is part of the reason that i love our community so
[03:15:30]  much thank you for the birthday wishes everyone um okay let's go i haven't have i seen orange orange on the stream but i'm now getting to some of the questions here
[03:15:45]  um is pineapple a legit pizza topping it it is it's it's hard um i don't like pineapple on pizza i'm not a pineapple pizza person i know that there
[03:15:58] 's like two types of people in the world you know those who like pineapple and pizza and those who don't but i'm i'm also the been the pizza guy uh i
[03:16:05]  i i like doing tax and tip calculations in my head for the longest time i always felt like it kept me you know kind of quick you know and i'd be the
[03:16:15]  guy at the office especially when i was at the startup who'd like figure out the pizza orders and figure out the the the right proportions like it's an interesting problem because you
[03:16:24]  you don't order the pizza reflective of what the different people want directly it's not a linear correlation for optimal pizza ordering because when you have people who don't like specific things
[03:16:35]  or do like specific things you have you can't cater as much to those outliers and you have to play to the common denominator so figuring out the ratios is interesting and
[03:16:44]  the tricky part is you need a certain number of people present that day or when you're ordering the pizza to make pineapple legit because otherwise ordering a pineapple pizza will won't work
[03:16:57]  you'll alienate too many people so there's there's some there's probably some mathematics behind that that i could uh kind of uh point out at some point but yes
[03:17:07]  pineapple pizza is usually a legit pizza topping above a certain threshold all right sing and play guitar yes still do that do you ever talk to yourself or sing while coding sing definitely
[03:17:22]  i sing a lot i probably drive my kids crazy um reactors felt that's an interesting question i may have already answered this because it pains me to say it yeah i mean
[03:17:55]  that's interesting i like i like them both it's it's really hard i like different parts of each of them i might feel more at home with react but svelte
[03:18:05]  is like still an improved model in a sense so it's it's it's hard because for me i have to go where the composability is i i feel like a
[03:18:17]  framework that doesn't address composability as part of its core fundamental pieces is just inadequate as good as svelte is without the composability it's just not it's it
[03:18:28] 's just not for me i think svelte with composability and i'm not talking about the stores i mean actual composability like hooks would do it but that was
[03:18:36]  what i liked about knockout and stuff so even if i think svelte is really good technology i like the language i like the approach i like the performance like animations like
[03:18:44]  everything about it without the composability it's like a non-starter for me um that's what i value the most um do you regret calling the library solid no solid start
[03:18:57]  confirm agnostic i have no intention of that maybe i know people would be interested in seeing that i i think it'd be cool if some of the plugins that we
[03:19:06]  wrote were framework agnostic but in general i like being framework specific that's how you get optimized if you want the best performance you'd be specific if you want the best
[03:19:16]  anything you'd be specific so i'm i have solid i'm interested in solid agnosticism is just a dioft so yeah i i i'm i'm if it
[03:19:29] 's something that you can support piecewise i'm interested in it but yeah you know i've i haven't had good luck on most agnostic solutions i mean obviously
[03:19:39]  astro is an exception and i think their model works well for that but generally speaking i don't chase agnostic solutions and and as ironically dom expressions is a framework
[03:19:51]  agnostic core library it almost proved my point because once you it all that for being agnostic does is it's the whole like 15th like we have 14 standards
[03:20:09]  oh we should make a standard that unites them all now there's 15 everyone's seen that uh kxcd you know um comic about the standards the agn
[03:20:19] osticism is just another framework right and all that happens is the thing that aligns with that framework's mentality best rises to the top and everything else falls to the wayside
[03:20:29]  eventually because it always leads to a the best option um so to speak so with dom expressions which is you know it's great that people have the different choices of the different
[03:20:39]  reactive libraries to bring in and i keep that core agnostic because i want to support that at least in theory the truth of matter is eventually solid one right it's just
[03:20:49]  the i built it to be the best for that mentality it's the best at dom expressions so at a certain point just didn't make sense to maintain the other ones and
[03:20:59]  maybe even just like at a slight deopt bring them in through solid just because the specific version is just going to be the best version all right so i'm not very excited
[03:21:09]  by agnostic solutions generally that aspect is not what makes me excited i know like anyone else i don't like lock-in or whatever but how should i put it
[03:21:21]  some people are like oh i love reactivity you know i've seen people i've heard it's called like the pure model or something where they talk about how they separate the
[03:21:28]  view code from their from the the data layer or the business logic and then they drive it and they're like it's completely framework agnostic i just write my logic here
[03:21:37]  in this reactive level and i can drive any view framework with it you know and you know you know it's react today but you know in the future if that changes i just
[03:21:45]  switch to that and i'm like the whole time while they're saying that i'm thinking to myself like you do have a framework it's that data layer that's driving
[03:21:52]  it you are tied to that reactive system sure you can bring it to any of your views but you've made your choice you've decided what that thing is and i don't
[03:22:01]  think it's a bad thing i think the reactivity is a good place to be like this is where my my choice is but you know in the future if solid had a
[03:22:10]  different rendering technology you know so i explored hyperscript and lit and jsx you know we can introduce a template dsl or whatever like whatever the rendering thing is we
[03:22:22]  could change and not do the stuff the way dom expressions do as long as we have the reactivity but i i'm pretty tied to the reactivity um so as i said
[03:22:30]  i'm i am very pessimistic on framework agnostic solutions okay let's catch up here on some questions in here vim i already talked about this earlier no um
[03:22:50]  i i learned a little bit at some point but it was never my thing i was a windows developer i'm sorry um i i did a little bit of linux but i
[03:23:00]  almost went from windows straight to mac so i'm i just don't have that firefox um for the two years before chrome really took off but yeah i i'm i
[03:23:12]  haven't been on that uh are they gonna be meta yeah i mean sure someone's gonna build it um v plugin ssr as well on its way i'm just like
[03:23:27]  and they're gonna support partial hydration too and everything like sure i i the thing is once you get to a point where you can generalize everything and you like go look
[03:23:40]  this can handle this scenario and this scenario and this framework and this framework and this framework and this framework once you get to a point where the problem is that understood just write
[03:23:50]  a framework specific framework that tackles everything in in the most streamlined way using that knowledge yeah i'm just i'm just not sorry i'm just not on the framework agn
[03:24:00] ostic train at all like someone could go build a meta meta framework and that'll be cool until the fact that the person who just built the framework will be running circles around them
[03:24:11]  it's just just math like yes then you have to migrate again and we go through this again but these cycles are natural if they take five or seven years so be it
[03:24:20]  like it's a good thing we need to revitalize and and and do this stuff you know things need to grow modules need to die i i i don't think we
[03:24:30]  should build like it was the year 2022 and we figured out the universal component model and and now a decade later we're still using the components that we wrote back in 2022 because
[03:24:45]  that standard was so good no that that's garbage that's that's that's going stagnant we should have rewritten the components by that point like i i'm just i
[03:24:53] 'm just not on that that that boat um what are your thoughts on the current browser ecosystem yeah yeah i mean it's it's a tricky one i mean you have to weigh
[03:25:12]  your balance of how much you you were you know i should put it like spited or not what's the term like how much you were scorned by internet explorer
[03:25:28]  versus what's healthy for everyone like everything's chrome or web like everything's chrome these days you know everything is a chromium um you know this kind of consolidation which is like
[03:25:37]  in some ways like so awesome from a developer standpoint i know there's some other new browsers coming in but i've never really picked like up on those like brave and stuff but
[03:25:47]  like it's not good that everything is chrome but on the other hand it's amazing that everything is chrome so i don't know what that means for what that means for
[03:25:56]  the future of the web um i i i as someone who cares about performance i usually just go where i can get the best actually that's not why that's a lie a
[03:26:08]  little known to people even though like safari kind of is annoying you know it's become the new ie safari's javascript engine is actually kind too fast it
[03:26:17] 's like one of the best at doing client side rendering people i don't know if this is still true but it was true a couple years ago like people don't realize how
[03:26:24]  performant um the javascript engine is safari for doing tasks related to frameworks but so i don't i i use chrome a lot or chromium browser so i don
[03:26:34] 't know so i can't say i go for where the speed is to be fair so yeah maybe i just don't care enough i can't say i know people do
[03:26:44]  but maybe maybe i don't did you go to university yes i talked about a bit earlier um i i went to university twice so to speak i went very early on right out
[03:26:55]  of high school um basically wasted away my time there playing in bands and stuff until they kicked me out and then i went back later to finish my degree yeah elm is
[03:27:06]  pretty cool i've always wanted it's one of those ones that you're like i should learn that especially when i read white papers on like reactivity and signals and stuff like
[03:27:15]  that they inspired like design concepts and understanding like how async consistency should work and all that like i've read up on elm i've just never used it it's like
[03:27:24]  more interesting to me theoretically than in practice it seems like the perfectly designed language yet no one you know like it's not as well adopted it it's it's one of
[03:27:37]  those things you know kind of like marco is on the hydration side it's just like you look at it and you're like this is kind of incredible and yet so i
[03:27:46]  i want the thing is i forget who it is it's if richard feldman um i always get his name mixed up with the singer goldfinger um but he
[03:27:55]  he gives like the best talks if you ever see a talk by him just watch it even if you know nothing about elm or whatever he he he he's just so
[03:28:05]  on point um so like there's really good thought leadership and stuff there i think it's very interesting i just haven't learned it and adopted it there's a certain like j
[03:28:16] avascript just has this kind of permeating way of just just being everything even if it's not the best so yeah i i would i would love to know more about
[03:28:28]  elm if i ever get the time yeah productivity trick huh i used to think i had some it was like use coffee script like no i don't i honestly don't
[03:28:45]  have that many tricks anymore um most of everything i do is around refining my thinking process which i i don't know if i can get into too much detail in general it
[03:28:58]  just it's i i spend a a lot of time before implementation figuring out if there's a way that i can change the question being asked i really feel like like we
[03:29:10]  we should at every point re-evaluate our assumptions um especially when approaching new areas you know when i see something in another library people like oh like there's probably the
[03:29:21]  thought that i copy a lot from other libraries because i do but every time for solid i have to make this decision uniquely for solid because the architecture is different enough so i i
[03:29:30]  really take my time with these and try not copy a lot of people i i hit this all the time in the ecosystem side because a lot of really capable incredibly productive engineers
[03:29:39]  who are working now and are you know offer discord and those just like see something another library and they'll just copy it directly and just do it and i'm just like man
[03:29:46]  i don't know how you did that so fast i mean i do there's probably a time i could have done that but that's not me anymore um you know uh but
[03:29:55]  then on the other hand i'm like it's awesome and it's kind of like how i made solid it's awesome you just do it as i said earlier just do it
[03:30:02]  and get it out there you'll never know where it takes you but on the other hand i spend a lot more time now being like do i even want to copy this
[03:30:11]  like i i i don't know if that makes sense like i'm very careful now in terms of thinking process i i have like a sheet in google docs and i just collect
[03:30:22]  my thoughts over time and it's like this running document and i come back to it over time and and it helps kind of shape or brainstorm i think writing it down and
[03:30:32]  getting the ideas out there is really key um but it's it's tricky when you're dealing with these large systems and actually other people i know who are kind of in the
[03:30:39]  same boat do the same thing i know i know my michael rawlings um marco team kind of very much a visionary he he he always keeps these uh hack md
[03:30:48]  documents and stuff where he kind of just types out these ideas and he just collects them and collects them because eventually you'll kit the same idea again and then you'll be
[03:30:59]  surprised what you wrote before you'll be like oh i already solved this i just didn't realize it in that context so i just try and write stuff down and kind of take
[03:31:07]  my time working through the application see if i can like re think the question being asked um because that's where you make the biggest changes like it's like it's you
[03:31:17]  don't take something like fine green reactivity and get to where solid is without kind of thinking outside the box a bit i hope not no no i mentioned i just haven
[03:31:38] 't been up to date on the on anything back end since i got back into javascript in 2010. that's a good question i i i don't know if i
[03:31:51] 'd be the best person to interview him on that side but i i think it would be interesting to ask him a bit about like origins on the typescript side because i
[03:32:04]  told you i really like c sharp the language is so well designed and all the concepts but when i look at typescript i always felt like it was like a hot mess or
[03:32:12]  whatever that the term is because like it's it's a much harder problem right because because um javascript isn't statically typed i guess you know what it is
[03:32:24]  it's kind of like when people play and poke at my my compiler stuff because people do stuff i'm just like why the hell are you doing that there is no good reason
[03:32:34]  to do that you know from my mentality and once i show them the right way they're like oh yeah yeah of course what i was doing makes no sense but they did
[03:32:42]  find a bug or an edge case you know and i feel like when he looked at javascript and typescript he must have been like okay well i can just apply this
[03:32:51]  model and and it's pretty consistent and we have an approach and then you know when someone comes in and does something weird he's probably would be like why the hell would you
[03:33:01]  ever do that and then his expectation is when he showed the way to do it people would be like yeah that makes sense but as a javascript developer i sort of reject
[03:33:11]  that so yeah i'm i i i would love to just get back pick his brain about like how he saw typescript evolving and stuff at the beginning um and just like how
[03:33:24]  he could think he could solve this sort of problem because as i said a decade i'm pretty i've always had trouble with typescript and i've been using for three years
[03:33:35]  now four years almost um it'd just be really interesting because i said the for me the contrast is crazy because like c sharp i loved i get used the generics to
[03:33:44]  do everything when i moved to typescript it's like the hardest language i've ever did it's just not intuitive for me if it feels like i'm instead of like having
[03:33:54]  like this is strict and this is the way it should be i'm like selling an artist kind of just deciding i'm like i feel like these types today you know and
[03:34:03]  and then someone else will be like no no no that is like like like that is the neocentrist way like like it feels so like meta like it's not it
[03:34:15] 's like type like i i just can't with c sharp it felt like there was a right way to code and you just did it and you didn't think about it
[03:34:23]  typescript is typescript just confuses me as i said it's not from a lack of i've i've programmed to java too i've used types languages for years
[03:34:31]  and years and years but for me typescript is just really like the worst type language i've ever used i i don't know it just it just doesn't work for me
[03:34:39]  so it'd be interesting to understand how he got there from the start yeah yeah yeah i probably went a bit delphi too back in the day i remember like he
[03:34:51]  used to get like the the ides on like discs um anyway vision visual delphi yeah oh man uh let's see what we got here glad there's people still here
[03:35:02]  i i wasn't sure how long this ago we're at three and a half hours it's been going so fast you guys are just rapid firing off the questions it's it
[03:35:09] 's it's it's crazy um i'm going to keep on going for a bit i at least until i get to the end of the discord but let's see here
[03:35:16]  we go do you think that ai is dangerous and that we should have given more regulations you know there is a real potential for that it's one of those things like we won
[03:35:29] 't know until like catches up with us like because right now my thinking is like you know we're it's far enough off that you know i'm not really worried about it
[03:35:38]  but you kind of get this feeling that at a certain point it will like i mentioned earlier i'm a big big big fan of um isaac asimov's
[03:35:47]  work right from when i was a kid um and if you think about his robot novels like it i've always wanted the right sci-fi i've actually started books before and
[03:35:57]  then dropped them actually it wasn't my fault my computer died and i got so disheartened i'd written about three or four chapters into a book and and the freaking computer
[03:36:06]  died and i didn't back it up to the cloud and i regret it ever since it was just like it was a rough draft but i've i've i've always
[03:36:11]  thought i thought it'd be interesting to write science fiction as i said isaac asimov's a big influence and but the thing is and it was the same thing
[03:36:18]  with the kind of stories i was trying to write is it's always interesting to me when you can set up the perfect set of rules like base like i'm very much
[03:36:28]  a systems thinker like you know when designing frameworks working magic the gathering metagaming it's all it's it's all systems design it's all looking at really complex systems
[03:36:38]  figuring out how to model them and then kind of best approximating like what you need to do strategic position kind of make things work and the funniest thing about that is you
[03:36:50]  extrapolate rules in this case and and the thing is with isaac asimov's um robot books um his whole idea was like how picture the perfect set of rules
[03:37:01]  to govern behavior for machines and then show how even though those rules in the abstract seem absolute that by simply applying them in a certain condition or system there's a there's
[03:37:17]  a loophole that shouldn't be possible but it is just like that that was his whole thinking and every time that i approach science fiction writing that's where i want to go
[03:37:26]  to so i feel like this whole thing with ai being dangerous is kind of along those lines because are we like are it's kind of like wishing from a genie are
[03:37:38]  we is it possible to describe in words the perfect conditions to to um and rules set up so that artificial intelligence isn't dangerous like i don't know maybe it's okay if
[03:37:52]  it's a little dangerous like i don't know i i haven't thought about it enough outside of science fiction kind of context um so i'm just gonna leave that one
[03:38:03]  for now vr xr blah blah smartphone yeah i haven't really thought about that this question's about like like vr and ar type technology and it's like how it
[03:38:16]  works into our lives the funniest thing is and now i realize i wasn't alone science fiction always kind of precedes the actual technology in terms of our ability to kind of
[03:38:27]  visualize things like i was so positive on the existence of tablets and those kind of devices for years i remember writing blogs in the late 90s about like how like where like how
[03:38:42]  i thought that would go and even kind of like the idea of the smartphone like i i was definitely kind of future thinking for that for that but i realized years later i was
[03:38:51]  just like copying star trek the next generation like a whole generation grew up with thinking that people would be walking around with tablets and uh that will coming to that realization years later
[03:39:03]  i i'm i'm not going to pretend this is the area that i've thought too much about ooh finally got to michael rawling's question this is a this is
[03:39:13]  this is a this is a tricky question as you guys know michael works on uh marco with me and he's now east coast so if he's still watching the
[03:39:22]  stream it's like 2 30 in the morning for him so i doubt that's the case but he's asking how would you approach debugging a fine-grained reactive system especially
[03:39:31]  one with queuing batching where the call stack doesn't map to the execution he's describing solid by the way because solid is all scheduling and queuing batching and what
[03:39:40]  that does is when you're trying to debug it it completely detaches cause from an effect and it's probably one of those areas where people like feel like when when the
[03:39:51]  reactive library works you're just like oh yeah that's great and when it doesn't you're just like what the hell and i i think this is even amplified more when you
[03:40:01]  have something like svelte where you're just like like you know there's too much magic going on but i guess felt doesn't have the queuing and batching so
[03:40:09]  at least you can kind of make your way sort of through the the file a bit but in solid's case you basically look for the run q command and you watch the
[03:40:19]  way the q processes if you ever hit reactive things and this is not an obvious um solution oh you're still here michael that's great i would love to see progress on
[03:40:30]  the debugging tools here i think mob x is probably the furthest along like wouldn't it be cool if you could drop a breakpoint inside an effect and then almost see
[03:40:39]  the call stack of what triggered it the problem is you can have multiple sources trigger the effects so like how do you visualize that because it's not just like a flat call stack
[03:40:52]  you know like what you really want to do is be like this effect's running because of these two changes and then when you go up to those changes you go oh this these
[03:41:02]  ran because of this change or this like you kind of want to walk up a directed um tree in a sense but it's not it's not it's you could you
[03:41:13]  can have diamond shapes and stuff we tried visualization of just the graph to graph itself but that's not good enough you you actually want it localized you know to get a feel of
[03:41:24]  runtime the problem with a declarative system is it it's declarative you know like i often say how do you debug html like there's no this and this
[03:41:34]  and this the reason you write it this way is so you don't have to worry about it you know so that you can like you can just set up these rules but if
[03:41:41]  they don't work you're kind of pushed into trying figuring out where they where they fell apart and now if the bugs in the framework you have to get in like i was
[03:41:50]  talking about the bugs in your code like there are techniques to debug reactive libraries you get very used to these techniques but it does take a little bit for people to get used
[03:42:00]  to because it's backwards when you have imperative code like something like react and you're like why is this not working you start from the source and this always happens to people on
[03:42:10]  the help channel and everyone who's been using react or solid for a while knows that it's not the thing everyone goes i'm setting the state here and it's not updating
[03:42:17]  and they and then they show me the code of them setting the state and if if you maybe coming from react or any kind of top-down approach that's probably the
[03:42:28]  right place to start because then people go oh you didn't do this or the the value is out of date because some stale closure or something right but in solid it's
[03:42:35]  the opposite you actually want to go to where it's being read and work the way way up so i'm like yeah it's not here and they're like yeah but
[03:42:42]  i'm setting this thing i'm like no show me where you don't see the value it's in one way it's almost a positive because more than likely where things break
[03:42:53]  is close to where you use them versus where you set them so like like if you're like this value isn't updating it's more likely that it's right next to where
[03:43:01]  that value that's not updating is then it then it is the center but it's not how people think because people think procedurally they think like this then this and this
[03:43:09]  and this and this and this so they everyone goes back to the center and tries to debug down where your best bet is actually start at the thing that's not working and work
[03:43:17]  your way back up so you know for us today that's a lot of console logs but it would be great if we had the ability to kind of you know just go deep
[03:43:27]  and walk up with some kind of visual tool obviously component type debugging experience is valuable too just to kind of see trees and initial render but for reactivity it's it's
[03:43:39]  not sufficient like a react uh dev tools is not sufficient i don't think all right what is your thoughts on the future dx when developing uis a lot of recent and current
[03:43:55]  focus at least in my bubble is on reducing trade-offs our current declarative approach partial lazy resumable hydration certain consequences blah blah blah is there anything on the horizon that
[03:44:04]  will fundamentally change the way we develop uis whoo yeah michael's asking all the hard questions tonight um see i and he knows a bit of my perspective because we
[03:44:18]  work together like i i'm very pro on the declarative side i realize there's gaps in the tooling like we talked about the debugging but like i i'm i'm
[03:44:30]  probably more positive on that side than anyone like my hope is that we we just get better and better at these declarative models to the point that as i said maybe no code
[03:44:46]  is an option right i understand there's a lot of complexity here but it's just because we're learning what the pieces are we're learning what the building blocks are and
[03:44:54]  this is a process of refinement of uh you know hack it till you make it or something uh nikil uh you know who's on our last room keeps on repeating this
[03:45:03]  to me something dan abramov said you know we'll just kind of like hack it outside until it actually you know it starts feeling like it should right there's this weird
[03:45:13]  feel sort of thing it's it's not all just logic you sometimes just have to try something and then like apis are as much of an ergonomic consideration as a
[03:45:22]  mechanical consideration so it's as much as just getting a feel for it i think we're we are heading to a place of extreme complexity and i and that makes things challenging um
[03:45:35]  for ergonomics fundamentally change i i don't know i i i right now i'm only looking as far as seeing if there's how viable our return to this kind of
[03:45:49]  server rendered or server routed mentality is and we'll go from there i feel like you michael probably have some more thoughts that are more pertinent on that side i part
[03:45:59]  of me the like whenever a system gets sufficiently complex i feel like we've gone astray and maybe we're getting there now like we're doing good work this time but
[03:46:11]  whenever you get to that point what will usually happen is something simpler that will come out that understands the trade-offs enough and where the current thinking is that even if it doesn
[03:46:22] 't solve all the problems or solve them well enough it's good enough to kind of get there and it becomes a new norm like even react was that to a sense because it
[03:46:31]  wasn't the most performing approach you know they were just like it's okay to re-render everything it's good enough you know that mentality you know did change things and
[03:46:43]  i feel like um how should i put it like if a change is going to be happening it's going to be like that something's going to come up that just simply isn
[03:46:53] 't as good as the other solutions but simplifies everything and that will be probably good enough but we won't know what that is or what that looks like until we actually explore
[03:47:03]  the space enough to to to allow for that change in paradigm okay sorry kind of technical dev tools is good it's getting into interest like if you have yeah yeah yeah i
[03:47:23]  i get that but the problem is that if the components themselves don't re-execute like the the correlation is harder to trace like you're like okay this component has
[03:47:32]  a state which is nice like then but like and you and you can kind of go oh when this updates like it it helps you localize that a little bit it says
[03:47:41]  you can visualize like okay i did this button the state updated here and here okay but because the execution isn't top down i i do feel like it's lacking thing i mean
[03:47:50]  if we had react dev tools we'd already be like miles ahead so and if someone's working on that for the hackathon like big that's a big thumbs up from
[03:47:58]  me um that i i didn't mention it earlier about missing gaps it's a component libraries sorry i i refined my statements dev tools is the single biggest gap right now um in
[03:48:08]  solid even bigger than the component libraries because we're starting to see those anyways um those those two are big the the dev tools are like is the longest open issue on the solid
[03:48:19]  repo there are people working on it and trying ideas and stuff but i think i think to be successful we need a certain kind of polish and ergonomic feeling and it requires
[03:48:27]  a different sort of focus than just technical i'd love to get like the technical people like you know modern me and stuff like really good on that side paired with someone who's
[03:48:37]  just gets the the feeling the ergonomic side of it and get those dev tools working because he has all the capability to make whatever anyone wants like he he hacked crazy stuff
[03:48:47]  i tried to make like some stuff into the library that make it easier to intercept dev tools and he was like yeah i don't actually need that and he completely went on his
[03:48:54]  own and completely like found different ways to get what he needed out of the tooling which completely amazed me so if as long as we get can kind of like bridge that with something
[03:49:05]  that's like useful or economically will be in good good place um yeah we i'm getting to some of these questions from that are from like two hours ago yeah we already
[03:49:21]  talked about wasm um about eating both sides i i said i'm more interested about wasm um potentially being used on the back end like another wave javascript escaping from
[03:49:31]  the browser typescript more than the other way but i mean i would so that's unsurprising has js performance peaked and how much further can it go well i
[03:49:40]  mean the browsers keep on improving performance but the truth of matter is the frameworks haven't moved in ages like like the js framework benchmark is basically static at this this point right um
[03:49:53]  and yeah i think that i think that's i think that's pretty crazy um to think you know people people are discovering solids performance today but solids performance like there's some
[03:50:08]  updates that happened under my watch the move to clone node like some smaller details that the idea of being able to do reactive uh fine grain reactive selection but like generally speaking most of
[03:50:22]  the performance was there back when inferno was added to the benchmark like the the amount of improvements we've made since 2016 is almost none and like as i said solids had
[03:50:36]  basically the same performance since late 2018 so it's it is amusing when people come in and go wow how did you create this so fast library and all this stuff and you're
[03:50:45]  like it it's been this fast for four years or whatever like before you know like before svelte was ever created there were there were libraries that were using solids approach
[03:50:56]  um that were basically as fast as solid if you ever heard of surplus that that you know like this is not a new technique people just haven't used it for one reason or
[03:51:06]  another you know um so i feel like um yeah i i feel like the performance has hit a bit of a cliff um that's what you know ssr is so
[03:51:19]  interesting you know this is just some raw rendering i i i i i'm still finding bottlenecks i i want to look more into hydration performance i think hydration performance is a place
[03:51:28]  where there's huge potential i'm not just talking partial hydration i showed you that demo earlier with the react or remix versus marco but the solid version is not doing hot
[03:51:38]  or the svelte version so we can do much better on hydration in general i think i think that that's under tested if we find the right benchmarks you know um there
[03:51:48] 's a lot of stuff around ssr you know it wasn't that as hard as you think for solids uh raw rendering speed to be aware it is that you've
[03:51:56]  seen some of the benchmarks solid raw rendering speed over react or preact is like more than 10 times faster that that was not as difficult as trying to get like two percent out
[03:52:07]  of the dom you know um so i feel like i feel like there's a lot of technology on the ssr side that can improve from performance and ways that we can
[03:52:16]  leverage the server and client interaction to to do that i mean partial hydration is the obvious thing or server components but like that's where the performance is it's not client-
[03:52:26] side rendering where we have tapped that probably i said about five years ago um uh let's see coming from react i found refreshing that you don't get decision fatigue from having to
[03:52:49]  choose between 10 state management libraries yeah it's an interesting one some people were really stoked about that especially uh jack harrington he that that was how he sold it and
[03:53:01]  it's so funny to me because i love the openness of reacts ecosystem i love like how there's all these choices and in a sense if you do take state management off the
[03:53:10]  table like you do because like like let's face it you can use those state libraries with solid you can use the stand or you can use redux so you can do
[03:53:19]  that you know or xstate and actually it's a little different because the state machine it models things in a very specific way that is beneficial um but outside of like say x
[03:53:28] state for the most part it's just not worth using those libraries or if you would use those libraries you just write them in solid like you you just be because there's
[03:53:38]  not that component requirement like you're already seeing this in reacts things like jotai are the most the most performance state libraries in react are the ones that can use react's own
[03:53:46]  internal update model and it's the same thing with solid you you just rewrite those apis in solid and that is better than using the other library from a performance like it's
[03:53:56]  just always going to be better other than integration with like third-party tooling like if they have a dev tools but maybe if you copy their api the dev tools will
[03:54:04]  just work um outside of us specific things like state machines or like xstate so i think it is good that we have this kind of streamlining um even if you know my
[03:54:16]  personal opinions are like keeping it open um but as i said it's just i guess it comes from building a framework that is you know just a state library versus just a view
[03:54:28]  library i felt like this it's funny though like this was always my perspective when i first saw react the fact that they didn't solve this problem seemed really weird to me
[03:54:36]  because it just never felt like a full framework and i know they said just a view library but then they had their own state management system too so it's like not just a
[03:54:45]  view library it's it's just like a crippled state management library and sure enough the last few years what you're going to see by the end of this is react's
[03:54:55]  own internal state management it's going to be enough to not need most global stores i love that interview um with ben awod with uh dan abramoff and he's
[03:55:06]  like when would you use redux and he's like he basically is like i'm not sure if i would ever use redux and then ben summarizes something along the lines
[03:55:21]  like so you're saying you would never use redux unless you didn't have to know where to put the data and even then you don't think you'd use redu
[03:55:31] x you know like like it's it's not redux's fault it's just that it's getting to a point where the way we think about state and models has changed
[03:55:44]  significantly to the so that like it isn't about global state it's it's it's it's about slightly more powerful local state than maybe react offers today but like it
[03:55:55] 's getting there they're gonna have new like selector primitives built into react so you can get not pay the cost of contacts as heavily um and deferring stuff to c
[03:56:07] aches like most of your data on the on the client side side actually has to do with um like a data layer and and caches so it's basically separating the storage
[03:56:21]  of the data from the reactivity and update of the data that's that's kind of what's going on which is why a kind of like a something like a redux
[03:56:29]  which is like change driven doesn't really fit where things are heading whereas react query is exactly why you know where things are so i i think that um i i think it
[03:56:42] 's interesting i i'm hoping that i do a good enough job designing the primitives in a sense that that you don't need other things you can just build on top of
[03:56:50]  them it isn't it isn't about it's it's not about like having to choose between 10 different state libraries it's about having something that is powerful enough and compos
[03:57:03] able enough that you build the state solution that works best for you and maybe some people will get opinions about them and come up with state libraries on top of solid but they'll
[03:57:14]  use they'll still be solid like you know solid be get solid so to speak that's kind of the model here i think people do have opinions on this stuff and we should
[03:57:23]  let them build stuff the way they want to but it's just natural to just use the built-in primitives and kind of expand on those patterns like it's the
[03:57:33]  same composability all the way up and down thank you yeah i i i guess it's getting late i i you know we've been going through lots of questions and we are
[03:57:45]  getting pretty um close to the end here i've hit the end of the questions in these chat and let's see if i've got a couple more in the discord you
[03:57:52]  guys on in the chat have a few more minutes a couple more minutes to add in questions before we wrap up here but we're getting close uh replacement what are your thoughts on
[03:58:01]  capital investment and oss uh you would ask that david um i don't know it's confusing to me and this is this is the problem i'm not a business person i
[03:58:13] 've never taken business i i i understand that software has inherent value but i i've never really gotten the freeware kind of thing i i got involved in oss because
[03:58:24]  i wanted to make stuff that i could share with people and that could make an impact and that like you know people would use it and that you know we we'd be able
[03:58:33]  to build stuff together the whole idea of bringing money into it i i just don't know what i love getting money you know like i i love having support so we can
[03:58:44]  pay legal fees and for us like if this eventually led to a place where i could work on solid full-time that'd be amazing you know you know by people funding it
[03:58:53]  you know i can help other people so i'm not like one of those people who's like says like it's a bad idea but i just i don't understand what they
[03:59:02] 're investing in like i don't see maybe it's down it's all it has to be downstream stuff i just don't understand enough about this because you're giving it
[03:59:10]  away for free like i don't know maybe someone someone will probably explain this to me i know remix uh raised three million and astro raised seven million and all this stuff i
[03:59:22]  don't i don't know how those investors make their money back i just i just don't understand this enough so maybe it's just me being naive um but if people
[03:59:33]  are willing to put money into it i mean i'm all i'm all i'm all for that as long as like open source isn't about necessarily open ownership it's about
[03:59:44]  it's about like i mean it is from the like copyright perspective it's it's about putting our maybe open governance it's not about open governance like it's about putting the
[03:59:56]  source code out there and making it available for people it's not about it's it's perfectly fine if if there's some company and money behind it deciding what gets made
[04:00:09]  or is that like open source doesn't mean open governments i guess is what i'm saying from my perspective it just means open source so um you know i i think if people
[04:00:20]  put their software out there and people can use it you know that's amazing um regardless of how um you know it's fun to do because this stuff does take time i
[04:00:34]  i mentioned i work almost full-time on solid on my own wouldn't it wouldn't it be awesome to to you know get paid to do that yeah yeah and this
[04:00:52]  last question i i'm not familiar with dci maybe something i should look into okay got to the end of the discord how are you guys doing in chat a lot of birthday
[04:01:02]  wishes thank you everyone i i really appreciate it um we are yeah we just hit the four hour mark i don't think we're going to do as good as the last
[04:01:14]  stream in terms of time but i'm so stoked to take this chance to be able to answer so many questions um and talk about so many things that i love so thank you
[04:01:24]  all for asking questions as i said this is your very last chance um to put something in here but otherwise i think i think this was a good stream we covered lots of
[04:01:34]  stuff and uh uh thank you for spending your friday night with me uh all right i don't i love this funny thing is because the delay i lose uh i lose
[04:01:49]  context on this stuff um uh okay cool i i think i'm gonna call it then my throat's getting a little bit dry my my long island iced tea ran out quite a
[04:02:04]  while ago so everyone have a good night and uh until until next week see ya