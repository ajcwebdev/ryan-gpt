---
showLink: "https://www.youtube.com/watch?v=VanpBTKLFNM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Marko - The Most Underrated JS Framework?"
description: ""
publishDate: "2022-01-15"
coverImage: "https://i.ytimg.com/vi/VanpBTKLFNM/maxresdefault.jpg"
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

[00:00:00]  Hello, welcome to my stream tonight, starting a little bit later today, tried to give myself a bit of a breather. I don't know if you've ever
[00:00:08]  been in that scenario where you have like afternoon meetings back to back to back to back. That's how the 730 start felt on my streams generally from finishing up work and
[00:00:18]  then dinner, hanging out with the kids, putting them to the bed, and then like running here basically to get the stream started. So today I took a moment,
[00:00:29]  gave myself a little bit of time to get myself ready. Never seem to actually be ready on time, but you know, that's how these things go. Anyone who's
[00:00:39]  joining me here, why don't you say hi in the chat? Introduce yourself before we get started. Oh yeah. I'm kind of excited to do the stream tonight
[00:00:54] . A little bit, I wouldn't say nervous, but like this is one that I've known that I wanted to do for like quite, quite some time. It
[00:01:02] 's obviously on Marco, which is another JavaScript framework, but it's not any JavaScript framework. It's obviously the one that I do at work. And, you know,
[00:01:19]  I got into Marco after I'd created Solid. So it's kind of, you know, a bit of interesting story, at least from my perspective, I wasn't
[00:01:27]  here for Marco at the beginning. Right. I, I, uh, you know, I, I wasn't, um, I wasn't there. So I kind of
[00:01:37]  had to piece together what I know, um, from talking to the other guys and they're definitely more experts than I am. Um, but you know, Marco is kind
[00:01:47]  of incredible. And I think it kind of is been worth more attention than, you know, it's, it's gotten over the years. So I kind of want
[00:01:54]  to look into those origins of it and talk about how Marco is today. We'll talk a little bit about Marco in the future, but I think Marco, what Marco's
[00:02:01]  doing already, um, you know, today it's already quite amazing when you kind of put into the context of the whole JavaScript ecosystem. And I think it's even a
[00:02:11]  little bit hard to appreciate, um, given where things are today. Um, so we're, we're going to explore through that a bit and just kind of do
[00:02:19]  a very introduction overview of Marco, you know, where it's been, where it is and where it's heading. That's kind of, that's kind of the rough
[00:02:27]  plan for the stream today. So hopefully you guys enjoy, I know there's gonna be people like Dylan who, um, is from the Marco team. So I've
[00:02:36]  got to make sure I represent properly. He knows a lot more of the details than I do. So he'll probably correct me anytime that I say something wrong, but,
[00:02:44]  um, yeah, I'm, I'm looking forward to this one. Uh, but yeah, let's, let's first get started talking about this week in JavaScript a
[00:02:51]  bit. Um, I'm going to share my screen here and get started. All right. All right. Let's share and I'm going to go switch over to
[00:03:06]  Twitter. Um, few things happened in JavaScript this week. Um, last week was all for me, all at least all about, all about solid. Um, we,
[00:03:17]  we did the 1.3 release and whatnot and, um, uh, launched that hackathon, um, which I'm just gonna plug it again for a moment because
[00:03:27]  you know, I can, if you haven't heard about it. Um, we have a very long running hackathon, like a three month one, $12,000
[00:03:37]  in prizes, different categories do check it out. I didn't really plug it, um, on the last stream. Uh, and I was, I was told by
[00:03:46]  other members of the solid community that I should have done that. So, you know, this is exciting for us. I think it's real opportunity to build up the ecosystem
[00:03:54]  and show people what, what we're doing, what we can, you know, what we were capable of, but yeah, it's a quick plug for, for solid
[00:04:02]  hack. But you know, back this week for me has been a lot about Marco and I'll go over that in a minute, but there's been a couple of
[00:04:09]  other, uh, interesting things that I think are worth mentioning. First of all, which, which you already see here on my screen is Astro is now the Astro
[00:04:15]  technology company. And, um, as you know, we love Astro and, uh, this is the big news. They, they were able to raise $7 million
[00:04:25] , um, uh, seed round. And, um, I, I think it's all well-deserved when you consider the potential of what Astro has, it
[00:04:33]  lets people use all their existing technology and be able to build faster, smaller websites. Um, I think Astro is amazing. And I think, I think this is
[00:04:42]  a really, really cool thing to see happen. We see these open source projects, uh, remix, uh, um, a couple months ago gets similar money to kind of
[00:04:52] , um, take kind of the, the meta framework, uh, level further. We haven't seen the same kind of investments on core frameworks. Um, but meta
[00:05:01]  frameworks are definitely a business towards it because it gives like the fuller polished experience. And I, I think it's really exciting in terms of Astro. The other thing
[00:05:08]  for me, I guess this week, um, let me go to my profile is some quick in my, in my views, but, uh, JavaScript, uh, state
[00:05:16]  of JavaScript survey is up. Uh, so do try and fill it out. I understand that that might be tricky. I had a hard time. It is very bug
[00:05:27] gy this year. Um, I had to refresh like three times to get it, to get it working, but you know, it's, it's important. You do
[00:05:35]  it projects you care about get good visibility and more than just that. Um, you know, you don't, you don't have to choose your favorites in here,
[00:05:45]  right? Well, the best thing about this survey is almost everything has a free form field where you can fill as many options as you want. Um, so, you know
[00:05:54] , take your time, think about it, try to give credit to like anyone you can, can think of, um, you know, that you appreciate the projects, um
[00:06:02] , and the projects I'm really happy that this year, that solid was actually in the short list. So it was actually one of the preset options. So people didn't
[00:06:10]  have to find it in the free form field, which is awesome. Um, you know, after the whole, uh, we managed to, I didn't mention this
[00:06:17]  last week, but we, we were number fifth in front end frameworks for most stars this year. So I guess we're starting to get noticed. So I'm pretty stoked
[00:06:25]  on that, but hello, this, this stream is not about solid. The stream is about Marco, but I just wanted to kind of, kind of point that out.
[00:06:34]  Um, so yeah, what's been going on with Marco, right? Um, we, we had a really good week and that's part of why I wanted to
[00:06:41]  talk about Marco today because, um, honestly, we, we've had a string of really cool announcements, uh, the last little bit here. Let me go. Oh
[00:06:50] , I didn't let me, what would, it's always like advertisements sneaking into, sneaking into my feeds here. What I want to find is, yeah. Yeah.
[00:07:01]  First of all, um, we released from Marco, uh, template with V plus fastify, which was pretty sweet. So again, just straight up, write this
[00:07:12]  in your console, you get bootstrapped to the V fastify project. This doesn't use the standard, um, V fastify plugin. Cause Marco has a lot
[00:07:19]  of specific stuff around bundling, which we'll, we'll get to in the stream, but, um, super easy way to get started with Marco. The one
[00:07:27]  that I'm, another one I'm super excited about was the V cloudflare one. This one, um, I worked on a bit myself too, because I've
[00:07:34]  been really stoked on getting, uh, showing Marco on the edge, um, as you can imagine. And, um, again, this template, um, is pretty cool
[00:07:42] . You can just install it command line, same deal. Um, Dylan was actually doing a little bit of some more experiments on here. Uh, added some, a
[00:07:50]  different form of file-based routing and stuff to kind of make things nicer. Um, we, we actually took this and took my hacker news demo that I keep on making
[00:07:59]  again and again on every platform. And we, uh, we, we released a cloudflare hacker news demo, um, which we'll, we'll look at a
[00:08:10]  bit later for comparison. It's kind of, it's really cool to see partial hydration and streaming at the edge here. Um, I think I mentioned one of my
[00:08:18]  retweets that I think this is the first, like, um, template that people can just go out and use and have both partial hydration and streaming, um, at
[00:08:28]  the edge. So really exciting stuff. And the other thing, um, which kind of brought around the stream was, um, Pierre, uh, kind of the fire
[00:08:39]  ship was asking what are the most underrated open source libraries out there? And, uh, you know, number of libraries and great projects got mentioned, but, uh,
[00:08:48]  he, he made this retweet mentioned that Marco was the definitely the most underrated framework of all time. And, um, I, I feel like that's pretty accurate
[00:08:58] . Um, you know, he mentions that most people never heard of it, yet it powers EWA's front end, and it's been doing partial hydration streaming since
[00:09:05]  2017, if he recalls correctly. And actually it's actually since 2014, um, even longer. And I'll, we'll go a bit into the history today,
[00:09:13]  but like it's, it's one of those enigmas for people because it didn't really break on the like open source side. It's been open source the whole
[00:09:22]  time, but it didn't really break as much as other projects, but people in the know, know what's up. Like, again, this is one of my,
[00:09:29]  my favorite quotes from Dan Abramoff, where he said, I haven't looked too closely at Marco, but this 2014 article describes mechanisms that are ahead of what most
[00:09:37]  mainstream solutions, including react do in 2020. Um, he wrote this in 2021. So I think he was trying to prepare for the potential of them releasing react 18 in 2021
[00:09:46] . And he didn't want to get misquoted. He's, he's pretty clever on that, but here we are at the beginning of 2022. And I,
[00:09:50]  and you know, we're, this is still kind of true, you know, he's, they've been adding some of these features to react since 2018, but
[00:09:58]  it's kind of crazy how much, like this is a lot of the stuff Marco is doing is actually stuff that even predates, predates Marco. It's older techniques
[00:10:06] , um, that kind of found their way into JavaScript frameworks much, much, much later. And, uh, yeah, this is both the best, uh, testimony you
[00:10:15]  can get from Marco, but this give kind of give you kind of perspective of where Marco, you know, might have been surprisingly, you know, undervalued.
[00:10:25]  Um, so yeah, that, that, that's what made me want to do this stream. Now I I've been trying to, you know, think of how to
[00:10:31]  approach it, but this is this, this, this, this was a great little thing going around. The other, the other reason is I think, I think the
[00:10:39]  conversation is kind of come back around here, right on, on these, on these sort of topics, right? Uh, like Astro, which we already mentioned today is
[00:10:48]  all about, um, islands and partial hydrating shouldn't and sending less, uh, JavaScript. And, um, another great one that I saw this week was, uh
[00:10:59] , Justin Fagnani, the, uh, creator of lit HTML. He was talking about Google's internal framework whiz, which also is basically, um, uh
[00:11:08] , kind of zero KB JavaScript framework. And I've, I admittedly, I haven't looked at whiz myself, but I've heard about it several times before
[00:11:18] , um, talking to misco and Igor and various members of the angular team. And they, they, they always kind of point back to it as like this kind of
[00:11:26]  thing. That's like, and it's, it's kind of nasty and hard to use ergonomically, but you know, it does when it needs to it.
[00:11:33]  And, you know, it was very innovative for its time. And he's saying how he wants to explore these techniques with lit. Right. And basically, um,
[00:11:43]  it kind of started a conversation with myself, um, and misco a little bit about it. Cause, uh, Alexis, one of our community members was like, well
[00:11:53] , you know, it quick is clearly very based on the same idea of whiz as like late lazy loading stuff. How does Marco fit into this picture? And that's
[00:12:04]  part of what I want to kind of answer tonight. Right. Um, and I was mentioning that there was like a fundamental difference in that Marco was never really about lazy
[00:12:13]  loading. It was about you were, were instead of making a framework, which would figure out how to best eventually load, load JavaScript, Marco, um, you know,
[00:12:22]  had a different use case at eBay, um, where, you know, most of the shop front page is mostly actually static and there's only a few points of interaction
[00:12:30]  that Marco was more focused on just figuring how to send the least amount of JavaScript period. So instead of figuring out how to find the right ways to defer and find the
[00:12:40]  right interactions to load that JavaScript, Marco instead focused on syntax and, uh, compiler to figure out exactly what JavaScript needed to be in the browser automatically. That's kind of
[00:12:55]  the hook for Marco. right. And I, I was kind of talking about that, right. Um, that, you know, Marco never really initially cared about lazy
[00:13:05]  loading. It was more of just about figuring out how to send the absolutely least amount of JavaScript. And, um, this led to a little back and forth with Misko
[00:13:15]  who was like, you know, DX is important, but if you start with DX, you get a sub, you know, sub optimal performance. I disagree with that
[00:13:21]  somewhat. He is right. If you only care about DX, I was trying to explain that with Marco, it was a look at syntax and compiler analysis, which I guess
[00:13:33]  is kind of nowadays considered a DX first kind of approach instead of looking at like loading mechanisms. Ultimately in a lot of cases, the difference between quick and Marco are like,
[00:13:46]  they become the same thing, but, um, essentially the, the final take or nuance appointed this conversation was that current framework syntaxes unintentionally hinder startup times for
[00:13:58]  preventing decomposition and lazy loading quick tries to make minimal changes to that syntax to get what developers are familiar with and allow them to do this decomposition and lazy loading. And, um
[00:14:09] , you can see that, uh, they did some announcements, uh, a couple of weeks ago where you can see the, how that, what that looks like. They
[00:14:16] , they have JSX and they have, um, like these kind of wrappers around the render function and event handlers and their components that lets them identify the key
[00:14:26]  granular points to break apart with their compiler, but it lets you mostly author things the way you're used to. Marco, which is a little bit older, which we'll
[00:14:35]  get to, took a completely different choice. It was like, what if we just controlled all the syntax and designed the language exactly the way we needed it to be to
[00:14:44]  do our task? And that's the premise. That's, that's the difference. So with that, I think is probably a good point to kind of switch over,
[00:14:55]  um, to our topic for today, which is obviously talking about Marco, but I would, I, I want to kind of, I want to kind of like dive
[00:15:05]  back a bit. Um, you know, I did that last stream when I was talking about petite solid or petite view. I was mentioning that these are techniques used in,
[00:15:15]  you know, the 2010 time period, but I want to kind of, you really need to get back in time to really understand the perspective that this was coming from.
[00:15:26]  So let's, let's, let's do that. Right. Let's, let's kind of go back in time. And part of it is obviously talk about the
[00:15:34]  technologies that were available at that time. But another part of it is actually talk about how people were and what the perspectives were, you know, coming into this time period
[00:15:46]  because Marco was created, um, to my knowledge in 2012 ish, internally at eBay. Really, if you look at Marco's timeline, it's very similar to react
[00:15:56] , but we live now in sort of a post react world is, is, is the, is my best way of, of kind of putting it react. I don't
[00:16:04]  know if there's ever going to be another react. Essentially it came up at the right time with the right technology and essentially even like most of tech Twitter and like the
[00:16:16] , the communities and stuff we know today around front end were built as part of that wave of, of growing. Like it's, it's so big and influential even today
[00:16:27]  that it will be a very long time before, you know, that, that would ever, you know, not be felt, even if react fell out of favor,
[00:16:37]  it's, it's, it's last, it's made a probably a permanent impression on things. So where, where I'm getting to here is just to kind of
[00:16:46]  actually, if you go back to 2012, 13, 14, as people had been building classic websites using .net and rails and whatnot, you know, these server rendered
[00:17:03]  websites and they were heavy and bulky and they sucked for interaction. They caused these full page reloads and whatnot. And it was, it was kind of brutal. Um,
[00:17:12]  I, I, I still call my time in .net the dark ages and when, when JavaScript became a viable option, we wanted it more than anything to be the
[00:17:24]  solution. We pulled more and more stuff in the client and it felt so good. Like, like, like every time you didn't have, you got rid of those like
[00:17:33]  heavy back and forths and stuff and you had more and more stuff in the browser. It w it just made your whole life feel easier when you're building really complex
[00:17:42]  stuff. People wanted mobile apps basically in their web browser. And like the tools we had weren't really set up for that. And that mentality kind of is what, you
[00:17:56]  know, react grew out of. And I mean, the thing is these days, you know, everyone's talking about SSR and partial hydration and being, you know,
[00:18:07]  good web citizens and using the platform and all that stuff, but go back even a couple of years. And that wasn't the sentiment. I said myself quite often that
[00:18:15] , you know, when I built solid, I didn't care about SSR, you know, client side rendering was fast enough, you know, but now I'm here
[00:18:22]  for big proponent of a partial hydration and it's not just, you know, me, like it's, it's not, it's not just stuff like that.
[00:18:31]  This was like the whole community. Here's a quote that I came across in December because Sunil retweeted it again, but no, I'm not calling anyone
[00:18:41]  out. I just want people to understand how different things were even five years ago. This is Michael Jackson, the creator of Remix, as at which we all know is
[00:18:50]  big proponent of just using the platform. You know, literally the only thing server rendering is good for these days is SEO and search engines that are not Google. That
[00:19:02] 's it. Which, you know, that's, that's pretty heavy. Right. Because I I'm sure, I'm sure he probably wouldn't say that.
[00:19:17]  And I'm probably taking this message out of context. Yeah. People think it's their answer to their performance problems. It's not. SSR alone doesn't solve performance
[00:19:26] , but you know, you know, Remix is a big champion of progressive enhancement. And it's, as I said, it's not just me. It's not
[00:19:33]  just Michael Jackson. How about, how about, we just saw Justin talking about how he wanted to bring wiz into, uh, lit HTML. Right. You know,
[00:19:45]  this is, this is web components. Mr. Use the platform himself. Right. Again, I'm taking these quotes out of context, but I want to kind of emphasize
[00:19:58]  Marco came up, you know, very, in a world, very hostile. When people ask me why Marco isn't more popular than it is, I only have to kind
[00:20:09]  of point back at understanding how much people did not want to be based on some kind of server rendering technology. So this, this is 2018. So like, can you
[00:20:27]  picture even a few more years early when everyone's on that, like react honeymoon, what it was like, I know I was there. I like, honestly, something like
[00:20:37]  Marco is probably the last thing we were looking for. So why Marco though? Right. I mean, we've heard the re we've heard the rhetoric a lot more
[00:20:49]  now. And I was actually, uh, I was doing like a presentation for eBay a little while ago, and I'm just going to share this one slide here that
[00:20:58]  I think is kind of relevant. No, not share, share, damn it. Just present it here for a second. I pulled this off one of, uh, um
[00:21:07] , Adi Osmani's articles, uh, the left-hand side and the right-hand side is I pulled off something else. I could probably dig it up
[00:21:15] , but essentially they were saying in the cost of JavaScript article, but, um, the median webpage, um, loaded 350 kilobytes of JavaScript back in 2017. I
[00:21:26]  think that number has actually gone up, but on a low end mobile form, like a Moto G4 that can take up to 15 seconds to, to be, to be
[00:21:37]  interactive, which is a lifetime. Uh, yeah, we started at eight. So you haven't really missed yet much. We're just getting into Marco. I like
[00:21:48]  to kind of give a rant on the this week in JavaScript before I get into it. So, you know, that that's, that's a lot of time. And
[00:21:56]  then the thing on the right, um, which you, you know, is how much of a user drop-off you have based on how many seconds it takes for your
[00:22:08]  site to load. So if you look one second, you know, two seconds, you know, minimal amounts, three, once you get above three seconds, 24%,
[00:22:23]  38, these are considerable drop-off amounts, right? And now picture you are an e-commerce site and you're trying to get referrals off Google search results.
[00:22:36]  And your site takes, like, it doesn't take much 350 kilobytes of JavaScript for the 15 seconds. Your, your site takes four seconds to load on that.
[00:22:46]  Like you're, you're like, you're losing almost half your customers before they bought anything. And, and these, these numbers are not like unique. You'll find
[00:22:57]  them all over the web. And eBay has their own internal numbers, um, which I can't share, but essentially picture being one of these companies with like a Java,
[00:23:08]  the classic, you know, server backend, and you know, you need to move to JavaScript. You know, you that like, that's where things are heading, but
[00:23:15]  you can't risk, you know, losing that time. And people come to me and they'll be like, oh, but Amazon uses React and blah, blah,
[00:23:23]  blah, blah. There's a system around it. You know, Google has had whiz, eBay made Marco. I'm sure Amazon has some kind of micro services,
[00:23:32]  lazy loading mechanism that they're doing it, even if they're using React. Like, and probably the core static parts of page aren't doing, doing that because this
[00:23:43]  is a death sentence for e-commerce. This is why Quicken Builder have been doing their thing, you know, with more modern tooling, but this, this
[00:23:53]  is like, this is like not going to work for you. Um, for a lot of things. So, um, one, one, one of the, one of
[00:24:02]  the things, and actually it also matters where you are around the world. Right. I, I didn't actually show this earlier, but, uh, I actually,
[00:24:10]  I, I actually love this little tweet. The response to Michael Jackson's tweet about SEO was, "India would like a word with you." I'm not saying internet
[00:24:18]  is terrible in India. Right. But the thing is not every network is built the same. So you have a slow network. It's a, it's a, it
[00:24:28] 's a, it's a big, it's a big deal. I hope so. First input delay is, is, is a better metric. And the reason it
[00:24:41] 's a better metric is because if you just do lazy loading, you cheat the metric, right? If you just go, oh, I'm not going to load any JavaScript
[00:24:51]  until you click something. And then you download your one megabyte. When the first person clicks something, you're, you're just, you're just cheating the benchmark.
[00:24:59]  And this is our biggest thing we have to watch out for, um, with, with these new frameworks and stuff because lazy loading alone isn't enough of a solution.
[00:25:10]  Um, most frameworks, and this is what Misko was talking about in terms of the, the, the, the decomposition and the structure, most frameworks can't, they
[00:25:20]  have to hydrate top down. This is like react solid felt like you name it. We hydrate top down. Um, and for that reason, if you have
[00:25:31]  a button nested way deep on the page and you built your whole app as a single app and you click that button, you're like, you might not need to bring
[00:25:39]  some other leaf nodes off, but you're, you're bringing the whole fricking trunk down the wire. So, you know, depends on what you're doing. It
[00:25:47] 's fine. You know, I'm not going to tell you how to use other frameworks. I wrote other frameworks, but I want, I want, I want to
[00:25:54]  be kind of understood that like from, from, you know, eBay perspective, 2012, I mean, you gotta remember JavaScript wasn't even a real player until about 2008.
[00:26:06]  Like, yeah, there was Ajax in the browser, but that's when the, around 2008 is when like Chrome, V8, uh, WebKit, Safari
[00:26:14]  and like, uh, uh, uh, whatever, what was in Mozilla. I try to remember what the, like the modern, uh, was a spider monkey,
[00:26:23]  the modern JavaScript engines came out and they were a big deal because like the performance was like 10 X, what was before that's what enabled node to finally be a real thing
[00:26:35] . And you know, which came in 2009, right after you have to understand for enterprise and bigger companies, betting your backend on JavaScript seemed risky, right? So you
[00:26:46]  had the, if you're going to make a large company move from Java to JavaScript, you better know what you're doing. Right. And the eBay had to really like
[00:26:55]  prove out this concept, you know, Marco was released in 2014, but it was, I believe it was started building back in 2012. It took a couple of years kind
[00:27:05]  of, you know, it's a bit of a different story than react. And, um, that's because react mostly was like kind of a layer on top of
[00:27:13]  the PHP. Marco right from the start was a replacement for the backend. So, and I'll get a bit more into how and why, but this is, this is
[00:27:22]  also from that article from Addy Osmani and, uh, the real cost of JavaScript. And here's the problem. Even if you have the same size asset,
[00:27:32]  right? This asset is half the size of the medium page size, the 170 kilobyte, a JPEG. Yeah, sure. So on our slow network,
[00:27:40]  it took 3.4 seconds to send this asset across, but the image took 0.064 seconds to decode and 0.028 seconds to rasterize or
[00:27:50]  paint on the screen. The JavaScript took 2 seconds to parse and 1.5 seconds in execution. To be fair, browsers have done an amazing job to make this better
[00:28:00]  now. But my point is the bytes aren't equivalent. This added, it doubled the time. It was 3.4 seconds across the network. And then it was another
[00:28:09]  3.5 seconds to parse and execute in, in, on this device. So you're ascent like essentially doubling the time that it takes to, to, to
[00:28:18]  do work here. Um, just because it's JavaScript, the JPEG, like this doesn't even add to a hundred milliseconds, you know, put together here.
[00:28:27]  So like, like essentially the image costs the network time, the JavaScript costs twice the network time. So this is a, this is a real concern, right? Like they
[00:28:37]  go on him and Alex Russell wrote a great article in 2017. Um, can't remember the name of it off the top of my head right now, but they basically
[00:28:45]  suggested you should be really aiming that first page load or whatever to be in the 80 kilobyte range, right? Like that, that, this is sort of the mentality
[00:28:56]  at least that bred Marco. Uh, this one, there was execution at the time at the bottom of this chart. It's two seconds, parse compile 1.5
[00:29:09]  for execution, uh, in, in this example. So yeah, it's basically double with parse and execution, but I mean, that that's obviously going to vary.
[00:29:16]  Um, but you know, essentially where they started was, okay, I need to make a node backend. So this is very different. React was like, how do we
[00:29:32]  make our web experience like a mobile app? That's why they created it. Marco was like, how do I make a node backend? So fall, go back in
[00:29:41]  time and you might, it used to be called Jade, but have you, have you guys ever seen pug? Um, let's see if I can find pug here.
[00:29:50]  And this is, I want to actually get pug template. This isn't, this isn't fun. Do they have a rebel? Um, your, your homepage is
[00:30:00]  supposed to be like a nice thing showing your actual syntax. Like this is nothing. Um, there's really no basics pug example. Okay. Pug was a, with
[00:30:17]  a, with a node, uh, language where it was basically like white space matters. You gotta remember this, this was a thing back in the day, but essentially
[00:30:25]  you could just write your div and like, and this would like turn into HTML. This was, this was probably one of the most popular templating languages in the early 2010
[00:30:34] s. Cause it was very concise. Cause you wouldn't have to do, do you wouldn't have to write like, uh, uh, brackets. Yeah. Yeah.
[00:30:44]  Nunchuck's another good one. Well, the one that eBay was really interested and was the one that was used by LinkedIn at the time, which was called dust
[00:30:52]  and less people know about dust. I didn't know about dust, but dust was special. Um, see dusty us by LinkedIn, you know, dust was special because,
[00:31:03]  okay. It looks like what they're saying is, yeah, I don't know, actually know what they're talking about here, but dust didn't have the nicest syntax
[00:31:12]  to be fair. But what made dust special, um, was it was really pluggable in terms of these little widgets, which again, you can get that with
[00:31:21]  handlebars or whatever, but it allowed you to put async stuff in your template. And I can't, I wonder if I can find an example of this, right
[00:31:31] . Um, cause there's a lot of syntax stuff here. Partials blocking inline partials. What's a partial? Partials probably their name for like inject
[00:31:42] ing stuff, advanced topics, compiling, rendering. No, I'm, I'm probably not going to find it here. Cause honestly, um, that's API.
[00:31:54]  I'm not, I'm not, I'm not a master of dust by any means, but just in case you're wondering dust was LinkedIn's templating language.
[00:32:04]  And the cool part is that they have, they, they let you put async stuff inside the template. And the reason is dust was the only node templating language that
[00:32:14]  actually supported node streams. So it would actually stream the data. And then when you hit something async, you could block it and then, or, you know, or
[00:32:25]  it could, I think it could, I can't remember if we can fork it, but it could actually process the stuff and then stream it all out as it finishes
[00:32:31]  essentially. Um, which is really cool because most server rendering you, you know, and it's still true today. You go pick up next JS. I mean, before
[00:32:44]  react 18 or, you know, any of that, you know, remix or whatever you, you just do all your data requests, then render it, then send it back
[00:32:53]  to the browser. Right. There was even a while. And I was in this crowd where I was like, oh yeah, client side rendering is faster than server rendering
[00:32:59]  because you can start loading the assets and start, you know, start doing stuff preemptively um, before the server even finishes. And to be fair, that's only
[00:33:09]  really true in fast networks. Um, and with bigger data, see the latency to your database perhaps, but you know, essentially dust allowed streaming, which is basically one
[00:33:24]  of the core tenants or features of Marco. Um, and it's getting more popular in attention now. Um, but essentially this is where they started, but they realized that
[00:33:32]  dust really wasn't going to do everything they wanted for them. And that's really where Marco started from. Right. You gotta understand that at this time period, people were
[00:33:43]  still mostly rendering their templates on the server, right? They were using something like pug or dust or something. And then they would add JavaScript to do stuff. The earliest
[00:33:55]  JavaScript frameworks were just like petite view or petite solid, which I, you know, that I was showing off, uh, you know, last time or Alpine JS,
[00:34:04]  you know, they were these little apps that kind of got embedded on your server side page and added interactivity. Almost all of them were able to parse HTML to create
[00:34:13]  their templates and do their work. But now this is where things diverged essentially react and, um, angular and, you know, those frameworks started doing more and more
[00:34:30]  client side rendering and Marco stayed on this path. So that that's, that's kind of like our history lesson. Let's, let's actually look, let's actually
[00:34:43] , you know, take a look here, um, at Marco, I think, because we should, we should kind of get a feel for it. Cause I, I
[00:34:52] , I think one of the most, uh, maybe thing that might repel people about Marco sometimes is a syntax. And I just, I think you need to get
[00:35:04]  into that mindset of pug and dust to kind of understand where Marco came from. So let let's, let's, let's take a look here. Marco, if you
[00:35:14] 've been to the homepage, um, HTML re-imagined, I think, you know, that's as good of a description as anything, but it started from this
[00:35:23]  templating language. And for a lot of times people, someone, I think someone actually, put it in a quote somewhere this week, his response is that Marco was
[00:35:30]  the pug of 2020. And in a way, you know, maybe that's a fair judgment, but Marco does so much more. It's easy to see how that gets
[00:35:39] , um, kind of blown over, but essentially we have some Marco here that looks kind of like normal HTML. And let me blow this up a bit. Uh, sorry
[00:35:48] , wrong window. Let me blow this up a bit so you can kind of see what I'm talking about. But this, this, this, this is, this is
[00:35:53] , this is what Marco looks like, right. You, it's single file components. Again, remember this is from like 2013, 2014 time period, right? Nowadays
[00:36:03] , single file components are like commonplace, you know, and people are used to this kind of ease cause it's felt, but Marco predates felt by several years.
[00:36:11]  Um, so just kind of put that in perspective, essentially that the, the, the, this is part of, you know, why I've Marco might be under
[00:36:21] appreciated or have its time. It was doing a lot of, it was doing this compiler stuff, um, way back in the day. So yeah, basically
[00:36:29]  HTML and then it uses tags, um, for control flow. So if you have an if statement or, or for, it actually uses tags for them. There's some
[00:36:38]  interesting syntax that I'll discuss in a minute, but essentially, and you can even tell the interpolation using stuff like dollar sign, which again is pretty standard in our
[00:36:47]  tag template literals, but it's, it's, it's the, this is more of a kind of holdover from say pug. And then on the, on
[00:36:54]  the right side, we've got like an interactive example here. Um, essentially in Marco to, you know, have state it uses a class. Um, there,
[00:37:09]  there's a different syntax that we're, we've introduced, uh, this summer to do this in a different way, but talking to this classic Marco, this is their
[00:37:16]  single file components. You make a class and give it some methods, use it in the template. Um, pretty, pretty, pretty straightforward in terms of that. But
[00:37:27]  Marco has some great features, right? Right from 2014, as mentioned streaming, which you can kind of already see how maybe this could lend to a, you know, a
[00:37:39]  better experience when you have lots of pieces that kind of load in, um, and the biggest thing you should notice about this image is look, look at the image, the
[00:37:48]  time that it takes for this image to load simply by being able to load, start loading the asset earlier, even though the page which finishes at the same time, the
[00:37:57]  thing that streams the content sooner has the advantage even on total load time. And then the other big part with Marco obviously the selling is the ability to send the least JavaScript,
[00:38:09]  but those are all selling points. Let's, let's just, let's just kind of, I'm going to dive into an example in a minute, but I wanted
[00:38:15]  to kind of show one more thing, because I'm not going to use it. I don't remember I mentioned pug Marco has concise mode and, uh, honestly I
[00:38:27] 've, I'm past my white space matters days, but it is definitely kind of gives you the, the, that feeling of, of, of the time period in
[00:38:38]  which, in which it was brought about. Right. This, this started as basically a server templating language. You just wrote your HTML, you know, or your,
[00:38:46]  your pug template essentially. And then you're like, oh, I want to do some small bit of JavaScript. I'm just going to put a class here. And when
[00:38:54]  you, when you click on click on it, you know, it'll do, it'll do the thing. So that that's like the starting point that they were
[00:39:02]  like, okay, if we can stream HTML, make it non-blocking and just produce HTML as fast as we can, then all we need to do is take this
[00:39:10]  class and this click handler and send it to the browser. And then now our app is interactive. That it's starting from a place where all you have is HTML and
[00:39:21]  you just go, oh, now I'm just going to add some, uh, some JavaScript. That that's kind of the root of Marco. So I already gave you
[00:39:32]  showed some links to getting started templates. We can probably dig into one of those. I'll dig into the hacker news demo in a minute, but I'm, I'm
[00:39:48]  just going to quickly pull up the try it online right now. Um, say quickly, but clearly my internet connection is not playing nicely with me because that's interesting.
[00:39:59]  Not built for mobile. Okay. Let's see if I can blow this up. We actually have a new try to online, um, with the new syntax, but I
[00:40:11]  want to use this one because it has examples. Let's see if I can blow this up a bit. All right. Okay. So this, this is just some
[00:40:19]  basic Marco syntax just to kind of get a feel for it. Um, in Marco, you can put JavaScript literally anywhere in your template by just putting a dollar sign in front
[00:40:30]  of it. So even though it's a single file component, it's super, super dynamic. So, and then in this simple example here, um, it it's
[00:40:39]  just showing that, you know, based on this array of colors and I think I can just edit it, it will contain the color, can I add a color orange
[00:40:50] ? Yeah. It will basically iterate over, over this list with the for loop. And if the colors dot length, you know, basically if you've used JSX before
[00:41:01] , this idea of using components for control flow actually might seem weird to you. But on the other hand, if you've used like suspense or error boundaries, it's not
[00:41:11]  too far too far. If you use solid, this should be fairly much more similar, but the, the key bit of syntax that I wanted to kind of show here
[00:41:19]  is unlike most, uh, single file components, Marco uses, um, basically has the same as render props and react where you can pass props from the, like from the
[00:41:31]  parent into the child body here. So in a sense, this color is almost like a callback function. Like this, I know other frameworks have different syntaxes for
[00:41:41]  this thing, but this essentially works on like basically any component. If you want to build a component that takes a function, if you're thinking JSX, you can do
[00:41:52]  this in, in Marco's, um, templating language. So it's kind of an interesting templating language in that it started as a server templating language,
[00:41:59]  but it's one of the, because of the dedication to syntax, it's one of the few ones that actually, um, has most of the flexibility that you find in
[00:42:09]  like, um, JavaScript. You can even make multiple components in the same file. Hi, welcome. Yeah. Just kind of introducing, uh, some Marco syntax, just
[00:42:22]  kind of get a feel for it. I understand this is not everyone's cup of tea, but I just wanted to like kind of show because the syntax actually plays a
[00:42:30]  really important role in terms of, uh, uh, analysis on the server. Um, because, because Marco controls the control flow, because it knows this is an if and
[00:42:41]  knows this is a for it can look at this template and be like, oh yeah, well, here's a static array. This array never changes. So we know that
[00:42:53]  we don't need this for loop in the, in the browser. Um, you know, because it's never going to change. Essentially it can look at what's state
[00:43:05] ful and whatnot and make that kind of decision. The heuristic in Marco might be a little bit simplistic because it just looks for classes, but essentially you get like Ast
[00:43:14] ro partial hydration without making islands manually. If you ever use Astro, you can go, oh, client visible and then go, oh, this works in the client.
[00:43:22]  Or, you know, and you load in these components in your template. Marco, you actually just build an app from scratch and then you don't really think about it
[00:43:28] . And then it just automatically does what Astro does, but actually maybe slightly more because it's not when you enter the child framework, that's something you have to bring
[00:43:38]  all the JavaScript. It's when you actually do something that needs JavaScript. So you probably don't know what I mean. Let's bring up a real example. I got
[00:43:45]  a hacker news example. I was trying to find this blog site I made when I first started, but let's, uh, let's, let's, let's
[00:43:52]  look at the, the good old hacker news. Cause this, this demo has been worn out to, to, to, to, to, you know, I, I
[00:43:59]  made it with remix. I made it with solid on stream. Let's, let's look at what a hacker news demo looks like in Marco. So this is not
[00:44:09]  using the latest template. I'm just, I just grabbed this just so that you can kind of see this is using Marco serve. this is like next JS style routes
[00:44:16] , but first thing you're going to notice in, in here is we just got some simple file-based routing. And then in Marco, you don't need to actually
[00:44:27]  import any of the other components or the control flow. So in a, in a hacker news page, for example, you have, you know, actually, let me just
[00:44:40]  pull up one right now or HN, what's it HN, HN dot Marco JS worker. Yeah. Okay. Cool. I'll just pull up one
[00:44:50]  of these hacker news demos. You got a page and you're listing a bunch of stories, right? So essentially this page that does that, I, I pull in something
[00:45:04]  from, uh, API, you know, this is just, you know, in this case, I'm fetching from, uh, from, you know, hacker
[00:45:12]  news API, but this could be some database. Like, we don't really care what this is. You're just fetching in your data. I decided to put it
[00:45:18]  out here. It doesn't really matter. As long as you pass a promise into the template, you can then use an await tag and the, and this introduces us to
[00:45:25]  another little fun bit of syntax, but basically in Marco, you have the ability to, and I was going to do it here, um, to, to just put in
[00:45:36]  a wait tag and then put then for the success case and placeholder for the loading place. Um, I believe Mark, uh, stealth has a similar tag. You
[00:45:44]  might be wondering what these at signs are. This is the other kind of fun bit of syntax. I, I mentioned how Marco supports basically, uh, render bodies, but
[00:45:55] , uh, or, so not render bodies, uh, uh, uh, render props. These at things basically get mapped to attributes. So, you know, in
[00:46:05]  JSX, you can like assign JSX to any prop on it. Like it's, um, like you can go, um, you can, you could have a
[00:46:15]  tab and then, uh, or our table and go header equals some JSX. Marco basically lets you use these at signs to basically make attributes that can be blocks of
[00:46:26]  HTML. Most single file component things use slotting like web components. Um, but this allows for a little bit more, um, uh, flexibility because essentially for,
[00:46:39]  for, for, for you react people who are wondering what this is, I'm just, I'll just write it really out really quick for you, but essentially this would
[00:46:45]  be the same as if you had a wait, then equals stories, draw some JSX essentially. Marco has the ability to basically, um, kind of pass in mark
[00:47:07] up to any prop, very similar to like a JSX type framework. So just if, if, if you've, if you've, uh, this is pretty
[00:47:16]  powerful, but it kind of plays out nice because it just looks like HTML. So essentially here we have our, this is like our suspense component. Um, I sometimes joke
[00:47:26]  that Marco invented suspense back in 2014, that Danny Ibromoff quote, that's sort of what he was kind of referring to essentially that, um, uh, in
[00:47:35]  that, in that article that Patrick, uh, posted back in 2014, he was basically describing how, how one would use server side suspense, um, which is coming
[00:47:46]  to react this year. Um, but, uh, uh, with react 18, but essentially this is kind of what Marco was doing back in 2014. So this is the
[00:47:54]  component that enables it. And essentially, you know, we see our logic with ifs and elses, and you kind of just build out your page for loop and
[00:48:04]  then story, we don't import it's automatically detected, um, in the components folder. And it's just another component like this don't really have to build it out
[00:48:12] . I think anyone can kind of see that this is basically HTML standard HTML, just littered with some special control flow components. And essentially we, we have our,
[00:48:26]  our app, um, our, our landing page. And the reason that I want to show this example is you, when you're building this, it is kind of a
[00:48:37]  server centric mentality, right? You could put a database query in this get in the, in, in your API call or whatever, and you just kind of build
[00:48:46]  it out and then you kind of template it and it renders. And I often ask people when they see Marco, you know, actually let's, let's just,
[00:48:54]  let's just build this example. Um, okay. It's already running on localhost. Sweet. Let me, let me just pull this out over here. And actually
[00:49:05]  I'm going to, I'm going to open this in an incognito window because it's better for, for us to kind of see this, but, um
[00:49:12] , I always ask people whenever I show this on stream, you know, how much JavaScript do you think it takes for, for Marco to render this hacker news page? You
[00:49:26]  know, we did an API recall, we awaited some async data, and then we, we, we basically show a placeholder. And then when it's
[00:49:35]  finished loading, we show the content. And if, if I refresh this page, you should see that. This is a really terrible placeholder. I'm sorry. I
[00:49:41] 'm pretty bad at this, but essentially you see that loading. And then when we navigate around, you can see, can you see my terrible, like I said, it
[00:49:49] 's like suspense, you know, you can see this pretty terrible placeholder, but you can picture something nicer, you know, with, with not using my CSS skills and
[00:50:00]  you you might be going, okay, well, how much JavaScript do we send on the page? And the answer to that, um, is a bunch in dev mode
[00:50:07] , but let's, let's, let's build the, let's, let's, let's build the, let's build this for real in production. I'll
[00:50:13]  run build, build the packages up MPM run. Start the node server. And the answer to that, as you can see, quite clearly is we send no JavaScript
[00:50:33] . And, and the reason for that is because Marco, there was no, there was nothing interactive about what we were doing in Marco. These links you're seeing are
[00:50:48]  actually links. Like if, if we go back into our hacker news example and look, these are just anchor tags with H refs on them. We didn't bring in
[00:50:58]  a router or anything. This is a old school, in a sense, multi-page app, but streaming makes all the difference because now instead of having that flicker
[00:51:11]  of white, that drives people crazy. And we can actually show probably even better loading states here because we don't block the rendering. You get the static content as fast as
[00:51:23]  you would in a client side rendered app. And then you get the content loading in the way you're used to, you know, you've used Twitter before, right
[00:51:30] ? This is not going to work here because I'm not logged in. Sorry, wrong window, but use Twitter before you see that little bird come in the placeholder,
[00:51:38]  you know, you get that experience essentially, um, without loading any JavaScript on the page. Because we, we don't, there's, because of streaming, we don
[00:51:54] 't block. We can show the stuff right away. And if data takes a while to come in, it's fine because it gets sent on all over the same stream
[00:52:00] . Now, to be fair, this is not a hundred percent zero JavaScript because this shows the loading spinner in your place. And you're like, well, how the hell
[00:52:10]  would you have zero JavaScript and show one thing and then show another thing? Technically speaking, um, and, uh, sorry, not this example. I'm going to,
[00:52:18]  sorry. I need to switch back to the other window. Um, technically speaking, there is a script tag on this page. One little script tag at the, at the
[00:52:26]  end here. It's not even, it's probably not even 20 kilobytes. Like there's the whole thing. It, it just, it just goes when
[00:52:39]  this content for the page loads in, replace the, the placeholder spinner. And to be fair with, with, um, Marco, you can actually tell it to do
[00:52:51]  it in order. And actually look, if you, if you, you want to see what that looks like, we can get rid of the loading placeholder and go
[00:53:00]  get rid of that client reorder. And this forces it to, to stream from top to down to bottom. We can actually, let's see now when we load it
[00:53:13] , there's no loading state this time, but we can actually load the page. And there is actually literally no JavaScript. If I disable JavaScript in my browser, this
[00:53:23]  would still stream in. That's a, that's essentially, um, the power of streaming. And it makes a huge difference for multi-page apps like this, because
[00:53:33]  essentially, I mean, this is a bad example because it's like literally just the header that's fixed, but picture your app with a sidebar, like Twitter or whatever
[00:53:42] . you can navigate around and it doesn't really feel that bad or clunky compared to a single page app. And this is, this is the message that Astro
[00:53:51]  and them have been, you know, and quick and stuff, but the difference with Marco, as I said, is you don't, you literally just write HTML, like
[00:54:00]  with some stuff in it. You don't, you don't go, Oh, load this. When you do this stuff, Marco, isn't a lazy loading framework
[00:54:06] . It's a, it's a compiled framework. So, um, I'm going to, I'm going to put this back for a moment, but what if you
[00:54:14]  do have JavaScript, right? So let's, let's, let's, let's, let's, let's, let's, let's look at that for a
[00:54:20]  second. Cause I use a Hacker News example a bunch because, uh, right. I'm not starting. We do have JavaScript, for example, let's go
[00:54:33]  to this comments page. In this comments page, we have the ability to shrink and hide comments. So obviously there is JavaScript. So, um, in, in this case
[00:54:46] , we are loading JavaScript. In the case of Marco, the Marco runtime in Marco five, you know, isn't the smallest runtime you we've ever seen on the
[00:54:54]  stream, but it's 13.9 kilobytes. And then the, um, basically the, some page specific stuff's about 1.5 kilobytes. So
[00:55:02]  all together, it's about 15 kilobytes of JavaScript. But what I want to show you is the end user doesn't really worry about that. Cause when they load
[00:55:08]  the page, this page has no JavaScript and then, you know, so no JavaScript. And then when you go here, it loads JavaScript because it needs that JavaScript, but
[00:55:15]  it's only, it's only loading the JavaScript needs. And I can, I can show this a little bit better here, but I think the, the, the
[00:55:25]  interesting thing about that is have you ever seen what you saw this hacker news page where, you know, we just have this little script to move stuff into place and it streams
[00:55:38]  in. Have you ever seen what this example looks like in a different framework? Like let's, let's, let's pick one. It doesn't really matter.
[00:55:52]  It's spelled. Um, what do we have? I'm looking for it. Yeah. Okay. This one's, this one, I guess, was built with
[00:56:06]  Sapper. Um, most of the time you, you, you render in the page, right? Which you're, you know, here, here's our page and
[00:56:15]  you have all the articles of stories and all, you know, all of them with their, their data and all this stuff. And you have this giant blob of data that
[00:56:24]  you need to send to the, to the client to hydrate. So you both send a bunch of JavaScript. And I mean, in the case of Svelte,
[00:56:32]  it is not a ton of JavaScript. What is it like? 13.4 kilobytes. Um, I could definitely pick an example that is less nice next.
[00:56:43]  Yes. I mean, this is like shooting fish in a pond, but you get the idea. Let's let's how big is next. Yes. 121 kilob
[00:56:52] ytes. That sounds about right. Um, and you, you can start to see like, this is, this is, this is a, a world's, uh
[00:57:02] , a world away. Uh, let me see here in terms of, in terms of like the amount of JavaScript you're doing the page, because in Marco, you're
[00:57:11]  not going to find the, those assets serialize the page because Marco knows that it doesn't need that data at all. It doesn't need to be stateful.
[00:57:20]  So it doesn't need to send that data to the page. Right. And, and, and the thing is, but this gets a little bit trickier, right?
[00:57:32]  Because if you go to say the comments page, let's go to the comments page here and refresh. Okay. So 13.6, this one's a little bit bigger
[00:57:41] . Um, here's our script page with all, with all the posts and all the comments and all that kind of stuff. Right. And I don't know if
[00:57:49]  Mark Svelte doesn't do the shrinking, but in the Marco example, you know, we, we actually have to hydrate this page, but again, there
[00:58:02] 's a bit more data because it needs to, it needs to basically know where the islands are. Essentially where it needs the interaction and this did serialized stuff, but this
[00:58:13]  is much, much smaller because we didn't actually have to send the data. And the key to this is because Marco knows that the async stuff is only like it's
[00:58:21] , they can tell that it's not stateful. It's not driven by something stateful. So it knows that the request only happens on the server, which means
[00:58:30]  it knows that the only data it needs to send is the data that is the input of any components that are stateful. So in this case, unfortunately, you can see
[00:58:40]  all these little empty arrays in this data structure, that's it Marco going, Oh, here's your, here's your props components. In this case, um, there
[00:58:48]  isn't any, so it's an empty array, but essentially, essentially this is why there's a bit of data here, but Marco automatically creates the islands. And
[00:58:58]  the way we did this example did take a little bit of cleverness because I, in this, because essentially, let me show you here. When you go to the story
[00:59:11]  page in Marco, sorry, where is it? Pages, pages, stories, no store, yeah, story ID. It's like the other one where we await our
[00:59:19]  info. But what I what I did here. Yeah. I, we show the story, which we know there's no classes here. There's nothing interactive. And
[00:59:29]  then we loop over the comments and the comments also are not interactive essentially on their own. So we just, again, you don't see me state the way I did this
[00:59:41]  in this example. And this is a bit, like, I don't know if anyone's read Dan Abramoff's, um, when to use memo. He
[00:59:47]  talks about solving a problem by hoisting it. Um, and that's essentially what I did here. You see this toggle component. This is the only stateful component
[00:59:58] . It wraps our for loop, which makes sense. It wraps it right. We can compress all the children, but because we know that this is coming from up outside and
[01:00:11]  there's no like render crop here. There's no like arguments being passed in from the component. Marco is smart enough to know that, oh, this is statically
[01:00:18]  rendered on the server. We, even though it's a child of a stateful component, it doesn't actually need to pass that state, which means that the comment and
[01:00:29]  all these comment fields are also static. And the toggle is really simple. It is simply a button that changes state. See on create, create the state. It's
[01:00:40]  kind of like react class component. And then when we press toggle, we switch it. Right. Marco syntax is kind of in the middle between react and Svelte in
[01:00:49]  that you can just do simple assignments, but it's still like at this state kind of thing. So it's like, uh, it's, it's like,
[01:00:56]  it's basically, um, component level reactivity, um, where you don't have to call like set state calls, but it still works very much like any other V
[01:01:05]  DOM today, um, with Marco five and essentially the, we just toggle the display between open and between open and close here essentially. And because the children, um,
[01:01:20]  because the children are static, it knows that nothing in here actually reads from the comment, which means we don't need the comment in the browser. Now, if I was
[01:01:31]  to, um, do something to kind of fool Marco and be like, ha, we have stateful stuff here in this comment component, our output gets quite a bit
[01:01:42]  different. Now Marco goes, oh, this is a stateful component and it has reads from some comments. So when I refresh this page now, we're going to see
[01:02:01]  a very different script. We're going to see all the comments serialized, just like, like Svelte or solid or next JS or whatever, because, because
[01:02:11] , you know, we're, we were doing some stable stuff in here. So I, it's, you, you can't just do this completely dumbly. Like
[01:02:19]  you can't just like put a class and just go blah, blah, blah. You, you, you might, you might be aware of this to a certain degree,
[01:02:25]  but the, the, you know, especially when you come to optimization, but the key part is, you know, outside of these kind of like use memo or,
[01:02:34]  you know, type scenarios, you author your code in Marco, like it's HTML and Marco can just tell what not to send to the browser. It's automatic islands.
[01:02:45]  Right. Um, and it, you know, this in, in Marco four or five, this is, you know, a simple, does it have a class thing
[01:02:54] , but it actually holds up pretty, pretty well. As I said, this is obviously me kind of playing around with the system, but like your authoring experience is just
[01:03:02] , it's just this, you know, writes, pass in some promises, write some HTML. Like it's, it's hard for me to picture, um,
[01:03:12]  building, especially like content sites or simple websites, like in an easier way. There's no, like, you're not going, Oh, like what, like for the
[01:03:22]  simple stuff, you're just writing some simple JavaScript and basically using a templating language. It's like pug. You're kind of, and then when you go, Oh
[01:03:32] , I want to add a little JavaScript. That's literally all that Marco does. It adds the JavaScript where you add the little bit of JavaScript. So, I mean
[01:03:41] , that that's, that's kind of like what the authoring experience is. I remember the first time I did this and the feeling, because I was like, I
[01:03:48]  was just like making my hacker news example and it's copying it over. And then I saved it and I ran it and I refreshed in the browser. Cause I was like
[01:03:54] , okay, I want to see how this compares to solid. And then there was no JavaScript there. And I stopped and I was like, Oh yeah. Like I
[01:04:02]  forgot that there should be JavaScript, like, or it shouldn't be JavaScript. It was kind of like the framework kind of fooled me because I wasn't, I wasn't
[01:04:13]  thinking about it. Like in this example, my API is a client side API. It's just a hacker news API. So I never really had to think about it much
[01:04:22] , but you can understand that this, this benefit that kind of comes from, sorry, I'm going to rebuild this one again, like with our toggle or there's
[01:04:33]  sort of back to normal. This benefit that sort of comes from being able to just author stuff in a very simplistic way. And, and with HTML and just use stuff,
[01:04:44]  let's make it really easy to forget that you're dealing with a client server interaction. It's, it's a really cool model, especially because you don't have to
[01:04:51]  import tags like other tags. I'm, I'm usually not a big fan of a single file components, as you know, but if I'm built this, this
[01:05:00] , I sometimes say that like a lot of these systems aren't built in a way that scales to like complex state management and all that stuff. But the thing is, if
[01:05:11]  you don't need the state management anyways, you know what I mean? Like for person building a blog site or a simple e-commerce store that doesn't need app like
[01:05:23]  behavior and crazy stuff. This, this is very compelling. Of course, this isn't the end of our end of our story for Marco. This is just, this
[01:05:29]  is just kind of the feel for Marco today. Right. And I mean, let me see here, as I mentioned, we, we actually deployed, deployed, stuff
[01:05:47]  recently to Cloudflare. Where is it? Let's make sure I can, yeah, you know, and the, this, this, this example is, is basically
[01:06:01]  the, the, the Cloudflare version of, of it. And, oh, my, my grammar, the extensions. This is why I opened the other tab
[01:06:10] . Essentially you have the same, the same experience right on the edge. So we already talked about size. We talked about the kind of hacker news example. just to
[01:06:30]  lay in the point until we, before we move to the next topic, just to make sure that everyone's going to clear on this, the, you're, what you
[01:06:36] 're saving in the scenario when you have true partial hydration is you're, you're, you're not only saving the JavaScript running on the page. Um, you,
[01:06:47]  sorry, you're not saving, shipping the JavaScript. You're not just saving, um, running the JavaScript. You're also tend to save the double data duplication problem
[01:06:58]  because you only need the bits of data that are actually connected to the things that are actually interactive on the page. And depending on your site, that can be actually very little
[01:07:05] . Um, but that's marco today um we knew we wanted to do a little bit more um where am i at we're about an hour in that's we're
[01:07:16]  in a pretty good place yes great great and great great question it depends which benchmark you're doing right let's pull let's pull out the js framework thank you thank you for
[01:07:31]  asking because i'm a big i'm a big fan of this benchmark as everyone knows why is marco not doing good in this benchmark well this benchmark only tests one thing
[01:07:44]  it tests how fast can you client side render after you've already loaded the page essentially that's that's all this benchmark so i will tell you right now the fastest client rendering
[01:07:57]  techniques except for block dom and a few ones that are using these new kind of experimental purchase are generally not vdoms generally like there's a few in here and so
[01:08:07]  there are fast vdoms and they're still vdoms but essentially marco is very much the product of the front-end technique that they use at the time because
[01:08:18]  i want to see if i can find it here but if i remember correctly marco and react are about exactly the same place where where is it marco react um it
[01:08:31] 's not it's not terribly impressive i actually looked at seeing if i can improve the benchmark for um you know current marco because one of the main reasons is for uh
[01:08:41]  list sorting it has a like half the frameworks have a smart algorithm for sorting lists half the frameworks have a dumb argument group uh or like a very naive approach to sorting lists mar
[01:08:52] co is on the naive side as long along with react so those frameworks immediately get kind of sent to the back of the list whereas once you get past here you notice that
[01:09:00]  it's all green no one on the front of the list has has it so that this is a big one basically the the gist of the matter is marco today is
[01:09:08]  not the fastest client-side framework uh that that that it's it's comparable to react but what if we wanted to look at server-side rendering which which which which
[01:09:23]  which is a different kind of benchmark then you have a very different world because in server-side rendering it looks more like this um marco these are client-side so uh
[01:09:40]  this one's the only server-side one this is actually not this table yeah i'm gonna just maybe i'll just look at the numbers it's easier we need better
[01:09:52]  display for this but the gist of it is if you look at the server-side benchmarks marco is almost 10 times faster than reactor many of the popular solutions like it
[01:10:03] 's it's not even close i mean inferno actually has a bug in there escaping which is why this is so fast in front of should actually be slower than this they have
[01:10:12]  a security issue but essentially compared to most front-end frameworks marco is like like a few 9000 easily three to 10 times faster so this isn't everything i showed
[01:10:29]  you has been about server rendering less about client-side rendering uh and marco's hydration is super fast so where you're gonna so while on the js framework benchmark benchmark
[01:10:39]  it's gonna be slow if we do like kind of the load thing like what about web dev we got web dev um slash was it measure we all we all like running these
[01:10:53]  benchmarks right um let's let's go to page insights tools if we do something like this and you take next js and you stick it in here let's do it
[01:11:11]  i mean this is a hacker news page this page is basically nothing it's it's just like a list of stories um 73 percent 1.7 1.7 3.9
[01:11:23]  seconds interactive that's that's not great right and let's let's let's let's give let's give let's give them another shot let's let's now add server
[01:11:37]  components with next js and streaming in the latest best stuff you know this example probably still needs a little work but let's do experimental react with next js and do the same
[01:11:48]  thing this is another hacker news i i have every frameworks hacker news up at the at the fast in my at the to my frameworks right so 96 it's a lot better right
[01:12:01]  half the time to interact in our classic next example but still largest control play 1.8 first content load it's not bad so this is this pretty decent place let's
[01:12:11]  let let people like remix right let's see i've got remix this demo right here too let's let's let's just run remix through here sorry i'm burying the
[01:12:22]  lead a bit because i already kind of know how this goes oops something went wrong let's let's oh did i copy some extra stuff here yeah let's let's let's
[01:12:33]  let's try remix again right remix is a bit better than next js you'll find but 97 so 1.2 1.2 1.2 1.2 1.
[01:12:46] 5 so another 300 milliseconds they're pretty fast to getting the paint and stuff but another 300 milliseconds until hydrated and i blame this on react because if you if you sorry that's
[01:12:58]  the wrong one if you take like solid solid you know i gotta do it in this order because if you take solid essentially let's see how this one goes and as i
[01:13:17]  said this we're just taking the first go well those are much better numbers than than than what we've seen so far 0.8 faster zero content but timed interactive is
[01:13:32]  one second it's still costing us like 200 milliseconds to get interactive even even with solid right and how it's how it's felt felt another good one let's let's do
[01:13:45]  this i i literally as i said i have everybody's hacker news at the tip of my fingertips here um this one should be close to solid but it doesn't stream so
[01:13:58]  it should be slightly slower yeah yeah so 1.1 1.1 1.1 across the board pretty pretty good the like the the hydration cost with solid as i said it
[01:14:13]  usually between 100 and 200 milliseconds svelte's hydration here actually looks pretty good so but again a little bit slower on the on the load on mobile but essentially in the
[01:14:22]  end we're both about one second right let's take marco i've i've been i've been i've been obviously waiting for this one for last let's let's
[01:14:33]  let's just let's take the marco example i'm gonna here we go quick needs to get in on here too but to be fair quick is going to be very
[01:14:42]  similar to marco but let's do quick or let's do marco this should be 0.8 across the board yeah i don't know what the speed index is i
[01:14:58]  have no clue but look first control 0.8 just like solid largest control 0.8 just like solid streaming is awesome tender and attractive like this is this this is the
[01:15:13]  difference like to be fair when remix first posted their demo they took the script tag off their page when they compared to the next and they and their numbers were pretty good they were
[01:15:22]  pretty pretty similar to to to mark where we were here for solid i think there was 0.9 but essentially they were basically the numbers but the difference is you you had to
[01:15:32]  take the script tag off the page and then on the next page add the script tag back or like make that decision and do all that stuff like marco you like you
[01:15:39]  saw me you just like write the code and it just automatically makes things fast right you don't you don't even have to like like like the like the syntax is the catch
[01:15:50]  but not anything mechanical you don't have to like like wrap things in special wrappers or do do anything special you just write html and with some syntax if you couldn
[01:16:01] 't swallow the fact that there's some slightly different syntax like you know there it is yeah yeah and that's the whole thing it it it doesn't because it's m
[01:16:27] pas are like a different thing like like i i there are trade-offs here obviously i'm selling marco on on on its strengths here but there are different trade-
[01:16:38] offs with different types of architectures and the the reason marco doesn't have an easy to use router rule it's because it has the easiest use to use rather the browser
[01:16:47]  like you change the url and it renders the page right like but like state management yeah marco is lacking on state management and i've recently made a graphq
[01:17:02] l client for marco but it's lacking on like some of like state management and data service thing and a lot of that kind of ecosystem mostly because primary use case for mar
[01:17:11] co which we've been probably terrible at selling people on it is just building e-commerce sites or blog sites or stuff like yes if you need advanced state management yeah sure
[01:17:20]  you can probably pull x state in and figure it out but there's not a marco integration for that right as of today like essentially like there is ecosystem considerations here but in
[01:17:32]  some ways it doesn't affect marco as much because it's a completely different architecture that doesn't lend to those patterns that's a thing every time someone comes in and goes
[01:17:41]  oh where's the router we're like there is no router um i'm not going to say that that makes marco perfect for everything i think and that's what i
[01:17:53] 'm going to talk a bit more about the future in but i just wanted to kind of show you that just if you care about your page loading as fast as possible this
[01:18:05]  this is this is this is this is for you right should i just go with solid yeah see some people probably were wondering like as i said i had no qualms as someone
[01:18:15]  in solid you know creative solid coming and working on marco because our starting points are on the opposite side i had a great conversation with dan abramoff uh a few weeks
[01:18:25]  ago on theo stream and our sort of space and essentially he was talking about the left hand and the right hand side that was sort of his his metaphor for this he was
[01:18:36]  saying that like react you know coming from the right side and making the apps these really interactive things but there's also websites and blogs and reacts kind of making the progression over and
[01:18:44]  i was like yeah and marco or you know these other new framework some of these new kind of mpa frameworks are starting on the left side and he was like he was
[01:18:53]  trying to kind of suggest that react just covered a wider range and i was like yeah i you should check some of these out because they're making the move to the right
[01:19:01]  like both sides seem to be converging in the middle right if if if if if there's one thing you know rich was dead on when he's talking about transitional apps there
[01:19:09]  is a convergence to the middle going on right now i you know this these both frameworks on both sides are kind of expand out their capability we're starting to see mpas with
[01:19:19]  different type of client writing so right now it's starting with very turbo links rails can influence but i think i think think where things are going are going to be a lot
[01:19:28]  more interesting but i'll talk about that a little bit later i want to i want to keep trying to keep this on on track on the rails but in terms of should i
[01:19:36]  go with solid today the answer is is your application more app like is your application have like a dashboard or has lots of interactivity i would still go with solid for that
[01:19:49]  um i would go for solid on maybe yeah anything that scales like building social media or that am i building a blog site or an e-commerce site like like people have different
[01:20:00]  comfort levels so like like i'm i kind of like jsx and i like that feel if you're building you know a small simple site like a blog site you could go
[01:20:10]  with anything and especially something small like svelte or solid if it fits your feel like the that 13 kilobytes of javascript wasn't really killing anyone you
[01:20:18]  know what i mean you know whether it's 13 or zero whatever but yeah if you're building an e-commerce site or something where load actually matters like i wouldn't
[01:20:30]  choose next js um i think seltzer solid would be fine but if i actually if i if i had a large large site and i knew that i had lots of content
[01:20:42]  and like it was a big thing and my business depended on it definitely marco right um as in the middle i think we have a lot of choice that's what's
[01:20:51]  what's great for us the middle you just go with whatever feels natural like personally if i was building a blog site i'd probably do you know or like a simple like
[01:20:59]  kind of contestant like just be able to edit html and have a designer dump that in i feel like something marco seems really really good for that um but in
[01:21:07]  the middle none of the solutions are that bad that you couldn't really just choose to go with any of them but definitely there are definitely cases where marco just far exceeds um
[01:21:18]  other options this and and where page load is concerned there is basically no comparison so anyway uh yeah let's let's let's let's let's talk a bit more about
[01:21:32]  um let's where are we right now 121 let's let's let's let's let's let's kind of go into the next phase here marco next we
[01:21:46]  talked about benchmarks we talked about performance we talked about hacker news the syntax and everything i've been showing you so far came out in 2017. okay that the modern marco that
[01:21:59]  we know came out almost five years ago we released marco 5 which is a big technology update but all the syntax hasn't changed like the core of it um from the
[01:22:08]  outside perspective hasn't changed that much so marco's had the the modern features that we know since 2017 it it had it had them before that but they had different syntax and
[01:22:20]  different things but marco the future is taking a slightly different direction and it's one that i'm actually pretty excited about um we've seen reactivity kind of come over as
[01:22:34]  a wave sweep over the front end ecosystem um svelte solid like you you know you know the deal and i can go back i find an article from michael raw
[01:22:46] lings as early as i think 2000 to 2017 or to 18 like he knew they knew they wanted to take marco this direction but hydration and this kind of performance is still the
[01:22:55]  biggest goal here and runtime reactivity is challenging here because runtime reactivity has to run it has to actually collect the dependencies like you you run it then you know what changes
[01:23:11]  it makes it incredibly dynamic it's quite likely them that solids approach to client side rendering from a pure performance standpoint is not going to ever i don't say ever but isn't
[01:23:25]  going to be trumped by um these compiler based approaches um just because of the level of dynamicism and as long as you can optimize the memory allocations fine you you
[01:23:37]  can do stuff with nested routing and and um that would be would be much more verbose for the compiler and fight against what where they want to go but on the hydration
[01:23:51]  side being able to use the syntax analysis is something that is very difficult for a runtime approach to to handle like it's not just a matter of like compiling in the
[01:24:01]  dependency arrays so to speak um and svelte actually has a really good approach here um where they basically compile away the reactivity the problem with svelte approach was
[01:24:14]  it kept everything in the single file like you can't compose um reactivity you couldn't you can't like you can use stores but now you're on a runtime approach you
[01:24:24]  you you can't like use things like hooks so where marco wanted to do is they wanted to make their own hooks that worked we wanted to make our own hooks that worked
[01:24:34]  with compilation um um and worked with hydration and that's that's essentially the where we went and what we came up with um is something called the tags api and actually
[01:24:48]  if i if i go out the marco twitter open it's the tags api preview um i'm gonna show the tags api for a moment because i think it's
[01:24:58]  kind of interesting but essentially the tags api looks like this which you're you know if people weren't already put off by some of the syntax but essentially it lets you
[01:25:12]  declare state as variables or sorry state variables like instead of using a class it lets it basically lets you use tags and while the syntax you know might take a bit to get used
[01:25:27]  to it has an incredible power because it is in that analyzable i've written some articles on it my reactive script article kind of goes into it a little bit but
[01:25:35]  essentially we know that this is stateful kind of like a hook we've denoted it and what's cool about this is sure this is let but this could be anything this
[01:25:45]  could be this could be any hook you want because it's a tag we know to treat it especially you know we have effects here and most kind of things you expect let
[01:25:56]  is basically use state and const if you see it is basically use memo or in solid um create memo so essentially you can just write reactive statements in your template and then they just
[01:26:11]  kind of work this is this is this is essentially the gist of it you your your templates instead of having that kind of break into the class components like mark was now
[01:26:21]  everything is markup the for loops the effects and even the custom ones and i i i go over a lot of it in this article context api but the the reason for
[01:26:34]  this is that we we we can essentially uh where i'm trying to find the example here but yeah i mean we can basically make custom tags that have the same um thing
[01:26:56]  yeah here's here's my example i want to show everyone picture you wanted to make your core signal or data persist in a in local storage you see this at the top
[01:27:13]  of every to do mbc example so i i kind of made this example here so you can kind of see it essentially with marco tags api instead of let you
[01:27:22]  can now use say local to find your own tag and because it's marco you don't have to import it pretend these are two different files it just finds the mark the
[01:27:30]  let the local component lets you initialize the count and set a key and then you use it just like state like if this was let this would have been the same right
[01:27:39]  it shows the count and when you click on it it updates it and it's your typical counter but local like a react hook essentially it defines these props and marco we call
[01:27:50]  them attributes or actors and then essentially you we pull the the when we first initialize this we pulled the value from local storage it's like it's like solid it runs
[01:28:01]  once um and then basically it's it's the expressions that run multiple times um then essentially we parse out the value and then we write an effect that whenever um um essentially
[01:28:17]  our storage key is fixed but whenever the dynamic part in here changes we have to in this case it's it's our store um which is our let variable which is just kind
[01:28:28]  of like a signal and i know i might not be doing the best job of explaining this but essentially it's like the cross between svelte and solid it's fine
[01:28:38]  grained compile away reactivity it works cross file but it has the same reactive semantics as solid some people understand like svelte reruns components um the it's not
[01:28:51]  as well known but essentially when you when you update something they go oh you need to rerun this component and they just do this really simple diff to check it so in
[01:29:01]  a sense svelte under the hood works like react and react forget is a lot like svelte surprisingly the what they presented um at that uh js comp because essentially um
[01:29:14]  they just started putting these dirty checks all over the place um so that when things re-ran and they memoized they were able to say oh only this change i only need
[01:29:24]  to run it that's exactly how svelte works where this approach with marco is actually kind of like if you compile the way solids reactivity instead of rerunning
[01:29:33]  a component it actually breaks the component into a whole bunch of different fine-grained reactions and then when it through the use of uh topological sorting kind of like svel
[01:29:46] te and setting setting up the execution it only reruns the reactions that depend on the data there is a limitation it's not dynamic right it doesn't know if you have
[01:29:55]  a conditional you know which side of the branch it looks at everything that could be tracked inside of this effect essentially but it's only this effect that reruns when when the store
[01:30:06]  changes well and obviously this this one because this is this the store but just kind of showing you it's compiled um it's compiled fine-grained reactivity and uh
[01:30:18]  as i said on a pure performance level this probably will never touch will won't quite get to where solid is in the browser but um we've done some early benchmarks and um
[01:30:30]  i i i can't reveal the exact numbers just yet but i would say i all i can say is right now the numbers look to be closer to solid than they are
[01:30:43]  to say svelte just in terms of where where things are where things are on client-side performance but the key to this is this fine-grained analysis sure that
[01:30:55] 's great for performance right we can tell we can we can basically like solid it can do even less diffing than most of the frameworks less diffing than svelte
[01:31:07]  most less diffing um than react or view or whatever but the real secret here is because it knows the fine-grained data dependencies it even knows better what can change right
[01:31:23]  and um and this allows for something um which we've been kind of talking about is subcomponent hydration and i'm going to explain subcomponent hydration in just a
[01:31:39]  minute but before that before i'm gonna because that's kind of the future here i i wanted to show you because the tags api is available right now as um as a
[01:31:50]  preview demo and you can install it but if i go try it online new you can actually just this this we're gonna release this but this this this essentially is is our
[01:32:03]  playground our new playground and we can just um let me see here div we can we can just do it right right in here right now div div and marco and what was
[01:32:22]  it or should we get button more semantic you can use the tags api right now in marco um it has some i've been really enjoying some of the new syntax like
[01:32:38]  the this uh this shorthand um so one of the coolest things i said it's super super concise um but essentially the authoring experience um of it is i think the
[01:32:52]  the real the real win here and um i actually had an example again from from this presentation but and i i just i post on twitter but i feel like this makes it
[01:33:05]  like way more obvious i mean we've all kind of been here before um you you you want to write everything in the framework the best way you can but sometimes you got
[01:33:19]  to bring in that jquery chart or something and the thing that i i didn't really impress on on anyone yet about the tags api which makes it so powerful it
[01:33:27] 's the same with solid and this is the power fine grain reactivity but it's easier when you have the syntax in a sense is that because everything runs once and components
[01:33:37]  aren't a real thing you can put state wherever it makes sense so this example is is kind of a great example of that i hope i hope everyone can kind of see it
[01:33:46] 's like i don't think i yeah i can't make this slide much bigger but essentially this simple example we show us you know pretend you have an something i i don't
[01:33:57]  have the address tag in here this is from a slightly older demo but essentially we're getting a reference again we're using the tag variable syntax to get the reference out for
[01:34:05]  this element and what we're doing here is we're getting we're getting a reference to this div and then uh the this mount hook um is kind of like on mount and
[01:34:14]  solid we we actually currently don't have this the tag api you could just use an effect but you essentially on mount when this component mounts you create a chart you know
[01:34:26]  with the with the ref to that element and some input data say that you pass into your component and then you return you return um the cleanup function so this is just kind of
[01:34:36]  like use effect and react the the exact and you can see on react the exact code would begin declare an element create this use effect which is very similar set your empty dependency array
[01:34:49]  and then draw draw the stuff in here right draw it in the devil and as i said i'm using this kind of effectful thing because it's always easy to show
[01:34:58]  really emphasize the difference from react by using effects because the the effects apis are always the clunkiest examples but jquery third-party chart library we got the
[01:35:10]  ref now new requirement comes in what do we do if we have to conditionally show this chart like if we basically need to go oh only show this chart if there's
[01:35:24]  a prop for um make it visible and we've all done this with react i'm pretty sure what we'll do is we'll put some extra logic inside our use effect and
[01:35:39]  we'll set a dependency there and then um maybe we'll add some conditionals around the logic and stuff so let's look at what it looks like in react i'm
[01:35:48]  going to focus on this side first so first now we need to tell if we're enabled and then create the chart and if enabled and then do maybe a uh optional chaining
[01:35:59]  to tell like if the charts been enabled release it and then make the thing depend on the chart and then you know we will mount our element we're going to do the
[01:36:10]  same thing and then we're going to do the same thing and then we're going to do that so basically we're going to do that so basically if you remember that old
[01:36:17]  react hooks example where they showed um you know a class component and you when you have to change something you have to change in like six different places because the the the colors were
[01:36:26]  split like the different concerns were split all across your template between the life cycles marco's taken that a step further so to speak because in marco if you want to
[01:36:41]  make the chart conditional you literally just wrap it in an if statement and all the life cycles and the refs and the internal state all will be handled simply by the fact whether
[01:36:52]  this mounts or not because components don't matter here it's you don't have to have hook rules or any of that kind of garbage to be fair this is identical and
[01:37:03]  solid but you you can see how much simpler this is in a certain sense in marco because in solid you have to go back into javascript land from the jsx
[01:37:13]  to kind of do this you have to go oh okay well now i'm going to um you know define my effects so if you wanted to do this if statement thing you
[01:37:24]  would still most likely have your effects like react at the top and your jsx at the bottom so you would probably still you wouldn't need this array but you still probably write
[01:37:34]  some logic like this even though you could nest it um you know doing some tricks in the jsx but with marco because you use tags you you're more likely to have
[01:37:43]  put the effect next to where it's where you you authored it so this sort of if statement just does it and while this looks like two changes if you think about
[01:37:54]  it you probably just type the if and then cut the whole block and insert it and in my original example although i don't have a highlighted version of it here i i took
[01:38:04]  this and it was like what happens if you wanted to actually split it out into a different component and again with marco you could just cut hook this essentially and sticking a
[01:38:13]  different component and then put the component in here and with react you'd have to almost refactor back to the original version and then wrap the component with the conditional so it was
[01:38:26]  like it was way more maintenance essentially by using markup it's kind of like using html you create a cut and paste editing experience for maintainability so it's
[01:38:38]  not just write less code now you know which is like this this felt thing i'm definitely playing off that it's it's actually write less code in the future and this is
[01:38:48]  something that is like a superpower of fine-grained reactivity but as i said um because of solids templating we don't really leverage it as much because you still
[01:38:58]  tend to write stuff this way with separating but with the marco tags api um we expect that people will have just cut and paste whizzy wig uh refactor stories um
[01:39:08]  essentially as long because they'll just author the co-locate their stuff so essentially it's like the next step of that components are pure overhead story that i've been telling
[01:39:19]  people for um a few years because essentially with react you chose to break components up based on how they effectively work there's a performance consideration that's why this whole react memo
[01:39:33]  thing is you know react forget is happening because if you don't break up components you over update like if you put a for loop inside a component that um has other state and
[01:39:46]  that other state updates it's going to rerun the for loop when that other state updates right that was the whole react for good example a framework like felt is kind of
[01:39:55]  on the opposite side most reactive frameworks because they they don't want you to make components because components are their like their their effects essentially they're the things that rerun so the
[01:40:09]  more of them you have the more memorization the heavier they get so essentially they're like don't use components as as much as you want the bigger you make your templates
[01:40:18]  the better fine-grained reactivity basically makes the component not a consideration i know it's not about performance it's about not letting performance dictate how you organize your code and
[01:40:32]  when you take something like this approach to templating with marco it's not only that the that you get to choose you know how you break up your components and components
[01:40:46]  have no effect on on um your performance you know you can just do it however you want with marco this approach it's it's more of like components have no effect on
[01:40:58]  how you structure structure your code ever like in solid for example you'll still probably decide to structure it like the react way so while components don't really matter you'll just
[01:41:12]  do whatever makes sense but maybe down the road there'll be a bit of a refactor job you have to do with marco refactoring is not a concern okay
[01:41:23]  so that that's the selling point on the tags api um on the ergonomic standpoint because it's all just tags you know you know but where the other big side of
[01:41:38]  this is where it's getting on the hydration story and the hydration story is really powerful because we can analyze granularly what's stateful and that means that we can effectively
[01:41:58]  split a component into um multiple different pieces and i i i actually covered this in my compiler um stream towards the end if you want to see it so i'm not going to
[01:42:11]  go too much in details about this topic but what that means is uh let's see did i have another example up um no i didn't but yeah uh yeah let me
[01:42:29]  see here maybe it was no yeah okay maybe there's a good example in here essentially we we can we can look at those dependencies it was the constant example i was talking
[01:42:52]  about wasn't it um when i was talking about this earlier yeah i mean this is as good as anything but essentially we can track and know based on what's stateful
[01:43:11]  which which things depend on it using basically a fine-grained reactive graph so you can picture if you had a component if you if you if you if you have a
[01:43:27]  component essentially you and you passed and the parent passes in data to it that is static we know like like in our uh in our you know yeah like let's look maybe i
[01:43:47] 'll pull up this silly example again but like like even in this example here if if if if if input enabled is set to true or never passed in from the parent
[01:44:05]  we know that it can never update which means that we know that we don't actually need to send um the javascript to be able to render this div or whatever like
[01:44:21]  essentially on a per binding level based on the inputs being passed into template based on the dependency graph across files we have the ability to know exactly what could update and only send
[01:44:37]  that part and the way marco is doing that is actually compiling these components into like a bunch of separate components you can picture yeah you know what give me two seconds here
[01:44:49]  and see if i can pull it up i did show this on the on the previous stream so i'm just gonna see if i can pull this up out of my google drive
[01:44:58]  again um if i can find find it because i pretty sure i grabbed this talk from michael um i saw it a little bit earlier give me just a minute um
[01:45:27]  oh man i have so many of these talks this is my fault i should have prepared this one i wonder if i may stream notes from from last time compilation notes i might actually
[01:45:37]  have it yes thank you ryan yes thanking myself from the past all right all right let's let's let's spend a couple minutes talking about this one i'm just
[01:46:01]  gonna this this is the key on the hydration part right find the component most frameworks when you have to hydrate something you find the component boundaries we render the component basically or in
[01:46:14]  the browser you don't re-render the div but compare you compare what was re-rend rendered to what was server sent and then attach the vent handlers where what
[01:46:23]  we all we want to do is find the button and attach the vent handlers right this is a lot of work that can be avoided if we can make our hydration resum
[01:46:32] able and this is kind of the selling point on that quickswing going on but the thing is there's lots of ways to make your hydration resumable most frameworks aren
[01:46:40] 't set up for it but there are different ways to do it and i've been showing showing this counter component you this should kind of look familiar to you um now and
[01:46:50]  hopefully people who watch the compilation stream before i'm going to be too concerned about me going over this again maybe it'll make more sense now right i already showed what the tag
[01:46:58]  variable was we show the count we click on it whatever but marco hide compiles it into multiple different exports the component actually becomes granular and this is actually very very similar
[01:47:11]  to quick except our granularity quick goes so here's the event handlers here's the view code here's like the component state code where marco splits all the templates here
[01:47:23]  the view code um this is some encoded walk thing in terms of how to walk through the elements this is actually like element first child next sibling next sibling encoded but
[01:47:34]  something marco splits it the code paths between stuff that needs to be rendered in the client stuff that needs to be hydrated and splits those by like inputs to the template so everything
[01:47:48]  is split fine-grained we don't just have like a single state we actually have not only split out the event handlers which um need to be added during hydration but
[01:47:58]  we actually split based on each separate input so that when the parent imports it um parent can go oh am i pat from its own analysis am i passing static data if i
[01:48:11]  am i know that i don't need to import the dynamic version of the of the code and we can actually tree shake it essentially as our ability to do this so essentially in
[01:48:25]  this example here for our button which is a completely stateful client side component we can have a render function essentially this is like the client side render which basically initializes a
[01:48:38]  count um to zero essentially so going back to our example this is let count zero um and and it calls hydrate and when you render in the client what you do is you
[01:48:52]  initialize it with the value it does write which is kind of like a dirty check that's what this if is and if it is update the div but if we were
[01:48:59]  rendering this on the server we wouldn't call render we'd call hydrate and all hydrate does is add the click handler which is here and and it doesn't actually need
[01:49:13]  the other code um essentially and michael actually kind of shows this in in this example essentially because when you call hydrate um essentially you need the click handler you need the
[01:49:29]  ability to set the new count but we don't actually need the code for the template we don't need the code um here for uh for the walks and we don't
[01:49:41]  need the code for the rendering and this is kind of like our default export for the component it's not that important we don't need that either and while this seems like a
[01:49:51]  bit of code when you minify it we actually on this very very simple component shrink the component in half this is a stateful component too this is this is like a class
[01:50:02]  component today in marco we we've shrunk the component in half on something that's stateful if it wasn't stateful the whole thing would be gone right but
[01:50:11]  this is just a normal stateful component but because nothing really re-renders we just update some numbers and attach click handler we we're able to use our analysis of the
[01:50:23]  reactor graph to actually split the component code down to 50 percent and um yeah that example is just showing that if you send static data data in then we like we can we
[01:50:36]  could even like remove more stuff but my my point is for a stateful component because we break things up into these imports i mean this this is a simple staple component but you
[01:50:48]  could pretend if you had two different states coming in from the parent you you could choose what to actually import and not and actually tree shake parts of the component out of the compiler
[01:51:01]  so this brings up a really good question um actually which was what about reducing data sent to the client like you showed with adding class the hack news will this be a caus
[01:51:10] ation of the tags api yeah that's the thing with with the class component we always had to serialize the inputs coming into the top level components the approach that we're
[01:51:21]  going to take with with hydration with the subcomponent and hydration is is a little bit interest more interesting because it's not guaranteed to send less data but it only needs
[01:51:34]  to send the data that is read in an effect or in an event handler because those are the only things that need to be um essentially ran in the browser so we we have
[01:51:51]  the initial state in in whatever signal we initialize right um if we if we did need to handle it but essentially what we can do and this is i don't have
[01:52:04]  a good graphic for this to explain but essentially the memos or you know um constants or whatever like the the derivations that run on the server don't need to rerun
[01:52:17]  on the client if their inputs aren't stateful essentially so we have this ability to prune off parts of the reactive graph um and not send them to the browser and
[01:52:32]  serialize only the data closest to the stuff that's actually being used in the browser which means that this is this is a huge difference from something like quick because quick hydration
[01:52:42]  is very similar to this um they just have the event handlers and then um they when they go and hydrate they just go here's all the event handlers and then
[01:52:54]  when you click that button the first time um it goes and loads all the code but let's forget about the code loading aspect let's pretend it was already there like they
[01:53:03]  knew this part of the page was the place you used they then rerun their components so hydration resumes but execution is like like a v-dom like you you rerun your
[01:53:16]  component code and you generate it with marco because it's fine-grained and we serialize the data closest to where it's used we can actually resume from the middle
[01:53:26]  of the component like we don't have to rerun the component we've already calculated the derived values like you know how they can solid like if you update um if you
[01:53:36]  have a computed uh or memo sorry you have a memo and you have um another signal and they're read in your view and you update that signal even though it calls both functions
[01:53:49]  the the memo doesn't run again like um you've already calculated that value the memo only reruns when that value is changed um marco you know and it gives that
[01:53:59]  really fine-grained uh updates marco six's approach here basically lets you resume fine-grained updates like that from server rendered code so um it's more than res
[01:54:11] umable hydration like the term resumable hydration is being kind of thrown around right now as like you know basically not redoing work from the server at hydration time but mar
[01:54:21] co actually doesn't redo work from the server on update time either um in my mind that's actually true resumable hydration but i mean it's hard to say uh
[01:54:30]  as i say quick's already kind of taking that term so uh it's always it's always it's so it's always kind of hard so more truer resum
[01:54:43] able hydration um but essentially the the idea here is marco can literally resume where the component left off it's not like just don't do any work at hydration and then re
[01:54:57] -render the component when something updates it's like literally render the component with as much information as you know send exactly the minimal amount of data you can to the client you
[01:55:09]  know that you need and then when the component updates only rerun the small separate little things that actually update don't rerun any components so yeah like this is pretty crazy
[01:55:21]  stuff we don't have this completely yet we're working on the first demos of it um on the client side and that's kind of marco um is yeah we're kind
[01:55:32]  of like building the alpha now we're past the prototype stage we've proven this out we're now essentially in the process of building the first version of this um and building
[01:55:43]  the compiler but the runtime approach seems to work pretty well so hopefully that answered the question about the data reduction it's i'm not going to say the data reduction is less than
[01:55:55]  we have now but it enables crazy ability and we haven't talked about async and async is a little bit more complicated but what you realize in this approach and this is
[01:56:07]  the real clincher here is if you serialize the data closest to where you use it and you don't rerun the component when the component loads in the browser you
[01:56:16]  don't need a cache to to resume do you know like one of the biggest challenges um when you when you when you do like isomorphic fetching um is that you
[01:56:28]  fetch it on the on the server and you get the data and you serialize on the page and you fetch it on the client and the client and the client and the
[01:56:36]  client goes you don't want to fetch on the client but when you hit the code to fetch it you go oh it's okay i already have this data don't fetch it
[01:56:42]  and that's basically how solid works right now with its resources and it's very common you you basically precede a cache so that you don't have to fetch again on the
[01:56:50]  client and then you you now can hydrate everything with that data in the marco case because that data fetching is like is um how should i put it it's
[01:57:04]  before you get to the event handler or the view it's output um if read by the effect like close to the fact that's what gets serialized so when it goes to
[01:57:16]  run in the browser it knows not to rerun the async function because it's not it's going to be in the render function it's not going to be in
[01:57:23]  the hydrate function so we don't actually have to send the whole cache we can actually we can actually um just send the data that's used in the event handlers
[01:57:35]  and the and the uh and the effects and be confident that we're not actually going to refetch because it's outside of that scope i hope that makes sense yeah fine-
[01:57:48] grained reactivity is is the key here i mean this is a large part of how i ended up working on marco i was viewing all this stuff about solid and you
[01:57:59]  know fine-grained reactivity and and about the you know no component overhead and all this stuff and michael and dylan were like like kind of like that's
[01:58:07]  it like we weren't sure what the solution would look like but they're like this is the answer to the hydration problem essentially like basically fine-grained execution semantics the
[01:58:20]  problem was we we actually kind of played around with the idea of bringing something solid in and it probably would have made development like marco six probably already out if we went
[01:58:29]  that way but um the ability to we wanted this resumable hydration and it's hard to do that with a runtime approach but it's hard to do a compile time approach
[01:58:41]  with fine-grained unless you have the semantic execution this is why i've been talking a lot about the language of reactivity because i believe with the language of reactivity
[01:58:50]  the ability to compile um is is infinite like you can describe the intent very well through the language and even react has talked about how they're used as like a language and
[01:59:00]  what and it does have a lot of that similar um compilation and analysis like if if in solid will be forced everyone to use like a prefix then like we could probably do something
[01:59:12]  similar but you know there's there's there's different paths to take here which actually brings us into um maybe the last and final section of our conversation today which is sorry
[01:59:28]  just making the banner i i doesn't matter how much more time i give myself i'm never i i'm never i'm never ready mpas in the future this is this
[01:59:39]  is even more futuristic because right now with marco 6 which should be coming out this year um you know definitely have elevated i don't know if like the final release you
[01:59:51]  know these things take time yeah i i people expect that now after you know how long reacts 18 is taken so i don't feel as bad saying that but these things take time
[02:00:01]  um where do we go from here because i'm basically showing the way that we could have the most optimal compiler analyze uh partial hydration combined with streaming like this is this is
[02:00:18]  pretty incredible stuff from a technology standpoint and as i said this we got kind of deep dive on the technology here but the authoring experience as i showed you is just using some
[02:00:29]  tags so guy who makes his blog site and just writes html gets gets the benefit um but i think there's a bigger question here and rich harris kind of
[02:00:40]  posted it to post it to me a while back because he was like but you know ultimately no one actually really wants a an mpa we want client-side routing we want
[02:00:50]  we want that flexibility you want we want that ability and this this aspect is not lost on marco or the marco team and and stuff like obviously you can add client
[02:01:04] -side routing i think i mentioned uh that was kind of like a trend in december where a bunch of frameworks like quick niles started adding um turbo like routing or just
[02:01:13]  experimenting with it but that's generally clunky so where we need to where this goes is i feel that mpas will have some form of client-side routing as i
[02:01:30]  said for your simple apps i just showed you there's like i'm all about apps and like interactivity and javascript and all that kind of stuff but like the
[02:01:40]  the blog site or the content site or whatever like you're you're not really suffering from having the mpa but you know i said i said that side the the marco
[02:01:52]  quick uh so they are trying to approach the center too right um they want to do more app-like things i think i think the way this is done and the way
[02:02:00]  we do this involves definitely involves client-side routing and what that looks like we're still obviously figuring out but i think the the key part about it is how do you swap
[02:02:14]  the html from the server yet keep fine-grained updates right react server components have to come in in this conversation because they are sort of a version of this
[02:02:28]  coming from the single page app side and for something like solid i imagine that's where the research will go because i don't think we'll ever be able to compile like mar
[02:02:40] co does it's it's just it this is this is this is incredible stuff honestly um and these guys were already like on this track to a certain degree like they were on
[02:02:51]  it before i even joined the team um but for the marco side and the mpas i do think there is an interesting convergence because i think client-side routing in
[02:03:02]  an mpa that is resumable like this that is hydratable out of order like this essentially will want the ability to hydrate a button or section of the page
[02:03:13]  when you click on it and then choose when you interact say with the router to load the router at that point and and kind of be able to navigate to a new page
[02:03:27]  that is server rendered but not necessarily you know wipe everything out obviously when you go to a new page you can just wipe it out with html and we don't care
[02:03:38]  right but pretend you're on a search page you know like everyone's everyone's favorite search page you know whatever it's not favorite but this is an mpa you can
[02:03:48]  tell very minorly the page reloads you can tell because the way the browser interact but it doesn't really like what what if we wanted to i mean this maybe isn
[02:04:01] 't even the best example but what if we want to persist elements underneath the part that changes and i think that's going to take a different type of of approach one that we
[02:04:13]  haven't seen yet it's not turbo but we we need a way of actually perhaps fine-grained even be able to send updates from the server with the new content
[02:04:30]  but not necessarily replace all the content html that's already there and just how that works i'm not sure but i think fine-grained has the tools and
[02:04:42]  that's the research that's going to go into as i said i think it's possible that everyone is actually going to be looking for the same solution this is my prediction part
[02:04:50]  of the show here but you know i actually think there is obviously vdom libraries like react have an angle but the solution for non-vdom approaches to this might be the
[02:05:03]  same across single page apps and mpas so i i the dylan guys on the marco team have some really good ideas here this has been something that i've been
[02:05:14]  racking my brain about i think this is i think that i think that that that's the next really cool thing i want to see more projects trying to make things like server
[02:05:25]  components i want to see different types of routing that are smarter than like x hml or turbo links or whatever you know approaches you know in non-vdom things i
[02:05:37]  think i think there's i think that that's that's the gold rush as i said for marco the focus first is this this ability to because once you have this you
[02:05:48]  can just build upon it because you you know you're sending the least javascript you you know that you have the most efficient hydration you know that you have the ability
[02:05:57]  to load javascript out of order but it's going to be interesting to see what other kind of solutions or how you can build upon this you know in this space i
[02:06:04]  think i think that's the future i think i think mpas still are going to be good for the majority of apps but i think you're going to see mpa frameworks
[02:06:13]  come at the single page app frameworks i think i think i think i think the convergence is real transitional apps is real so um i'm excited to see what that looks like and
[02:06:26]  you know we always have to remember you know like those quotes i showed you from big proponents of ssr and use the platform basically saying it was useless a few
[02:06:34]  years ago what we think we know now might be completely wrong um in a couple years so you know take it all with a grain of salt but it seems to me that that
[02:06:44]  would be a really interesting and fun thing to research into and it's definitely something that has my attention now that i've got streaming and solid and i've kind of finally
[02:06:54]  finished the story of solid having react parity and marco as i said when marco six comes out we're going to see the state of the art on mpa stuff at
[02:07:06]  that point i don't know do they do they meet in the middle this will be really exciting but um i definitely am very interested in all the technology being developed i think quick
[02:07:17] s got part of the answer in there i think astro's client visible and like they're very simple api i think while it might not be the best solution for
[02:07:27]  partial hydration like in terms of like how granular it is um it's a good solution for lazy loading and i think that i think that um in the future we're going to
[02:07:39]  need to separate lazy loading and partial and partial hydration boundaries there are things that it doesn't make sense if when you get super super granular on um partial hydration you don't
[02:07:52]  necessarily need to be super super granular on lazy loading sometimes you just want to save the work being done in the browser but it's okay to ship a little bit more of the
[02:08:02]  javascript because the last thing you want is someone clicking a button and having to like oh now it loads like that's why google probably is looking at changing the metrics
[02:08:11]  it's hard to measure this but we might have a middle zone before we get there where people are like essentially um how should i put it like essentially um just like turning off
[02:08:22]  the script tag so to speak and then loading it lazily like there's a lot of ways to do really poor poor lazy loading and score good on lighthouse and my biggest
[02:08:33]  fear is like we're going to see that we we're already seeing not that but we're already seeing like you know this the zero kilobyte javascript banner being
[02:08:43]  raised by frameworks that essentially aren't partial hydrating right they're like well look we can do zero kilobytes of javascript because it's progressive enhancement so and
[02:08:53]  i'm like yeah every framework can you just remove the script tag but the difference is when you add the script tag back in astro or marco or or quick you don
[02:09:05] 't bring all the javascript with you you just bring the stuff you need where in other frameworks um popular frameworks it does mean that it's binary do you mean server
[02:09:19] -side rendered islands yeah yeah i'm this whole conversation is kind of about islands the marco just makes islets it makes the smallest possible our aisle like the possible smallest possible
[02:09:36]  islands and it does it automatically so um yeah so the the the partial hydration and islands are kind of like the same term so when when i'm i'm i'm i
[02:09:46] 'm talking about islands and islands like when i talk about this routing solution i'm talking about client islands inside inside server islands like and different parts of the page being replaced with server
[02:10:00]  chunks and then still being able to reintegrate those client parts this is pretty complicated stuff but i i think you know like react like for a single page app and server
[02:10:13]  components the way react is going is probably the right sort of research i want to see what that looks like outside of vdom but i think i think the convergence is happening there
[02:10:24]  on server components as i said i've been critical server components because to me they don't actually solve the they're good for this like the initial load is not their win
[02:10:34]  like just going to server components with react like that alone like doesn't solve like the same stuff as partial hydration like that that's not going to make react good at e-
[02:10:44] commerce you know like if just because you have server components you haven't suddenly like solved that but it is good for scaling large applications so there's a lot of applications for
[02:10:55]  server components and i think i think you know there might be an opportunity for server component like things to actually be decent enough for something like uh e-commerce if done with a
[02:11:06]  small enough framework and done in a smart way so i am interested to see how that works does marco prod anything interesting on data mutation remix and forms cool again um we don
[02:11:15] 't have a built-in dylan actually made this the other day we took it out of the template because we didn't standardize on and we didn't want to
[02:11:24]  be too opinionated um he's got the code if anyone's interested he completely remade the he saw remix and he he was drooling he was like man if this
[02:11:33]  just wasn't react it was like like he's like this is how i've always wanted my stuff to work so um i don't know if we're going to publish
[02:11:40]  anything about that but he he does have the code to do this kind of magic form uh mutation in that works perfectly in our cloud flare template so yeah we'll we'll see
[02:11:52]  what we can do about that it is definitely very nice to have this mutation story um and obviously with something like marco which is already just you just use the html
[02:12:01]  like forms are the way you should be doing things right like it just it makes sense for the model um and so like this was a no-brainer i i'm
[02:12:10]  pretty we don't have an official solution but yeah i mean the we will like it's it's pretty obvious thing for us and we already actually built it so it's actually
[02:12:23]  surprisingly easy to build so yeah okay that is actually most of the content in the stream i talked about the futures of mpas i talked about marco i talked about a
[02:12:35]  whole bunch of awesome awesome stuff so um i i'll field a couple more questions here while i finish my long island but um other than that i i'm good to call this
[02:12:47]  one um i hope this shorter more focused stream approach works for people better i start a little bit later at eight o'clock because um as i said i get more time
[02:12:58]  for myself but uh yeah i'm i'm i'm pretty i'm pretty excited this is all going to be posted on youtube and whatnot um but yeah uh this is a good
[02:13:09]  stream thank you everyone for joining me tonight and uh hope gained a little appreciation for how incredible marco is both from just an authoring experience standpoint and from a technology standpoint and
[02:13:23]  hopefully you know you'll give it a consideration in the future and you know as i said go to the js uh the state of javascript survey look it up i
[02:13:33]  know it's buggy go in there give give solid a nice nod and go type marco in the box it does autocomplete the survey is aware of marco so
[02:13:42]  um you know give us a shout out in the survey get a little attention for both the projects i'd definitely appreciate it and actually anything astros in there just just just
[02:13:55]  support the projects you love please do fill out that survey and uh what's the term here like comment subscribe um we'll see what we do next week but uh until then um
[02:14:09]  have a good one and enjoy your weekend Have a good one.