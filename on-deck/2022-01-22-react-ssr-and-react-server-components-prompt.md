---
showLink: "https://www.youtube.com/watch?v=dnuh-jKuDpk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "React SSR and React Server Components"
description: ""
publishDate: "2022-01-22"
coverImage: "https://i.ytimg.com/vi/dnuh-jKuDpk/maxresdefault.jpg"
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

[00:00:00]  Hi, welcome to my stream tonight. I am late. Thank you, Michael. I am late. I got tied up reading a couple things, but here we are
[00:00:10] . We can get started pretty quick here. Thank you, everyone, for joining my stream tonight. Sorry to make you all wait, but this has been quite a week for
[00:00:22]  performance talk and React, and I'm absolutely thrilled to talk about this stuff we're talking about today. Obviously, a lot of topics about the edge and streaming and SS
[00:00:33] R, which is something very close to what I've been working on. But also, there's been a lot of discussion on, sorry, yeah, that's the main
[00:00:43]  thing on that side, but that's one half of the stream I want to talk about, and that's what I do with current events. And the other half is that
[00:00:49]  I've never actually taken the time to really look into React server components. I've kind of been wrestling with the concept of them, and that's all fine. But
[00:01:06]  I had some misconceptions, I realized, until very recently. And I think it's important to actually look at it and get a feel for it, because what I've realized
[00:01:16]  is server components are a lot closer to the partial hydration techniques that I've been studying and implementing in various solutions. So I think we're in for some interesting stuff,
[00:01:28]  hopefully, tonight. So thank you all for joining me. All right, if you're here, come and say hello in the chat. Hopefully, the audio and
[00:01:45]  video is fine, you can hear me. But without much further ado, I guess I'm going to get started on -- oh, here we go. There's always
[00:02:03]  this delay, right? You just got to sit there and pause and wait for people to come in and say hi. All right. So we're doing okay? All right
[00:02:12] . Well, then, let's get started with this week in JavaScript. As I was saying, a lot of talk about performance and streaming and whatnot. And last week
[00:02:32] , a bunch of news about Marco. And the week before I was talking a lot about solid, solid releases, solid hackathon. It's been all Remix.
[00:02:40]  Like, let's just face it. This week's been all about Remix. And it all kind of started with this blog post. One question -- they did it.
[00:02:54]  They basically decided to make the Next.js Remix comparison. And that's pretty cool. I've got to admit, I was pretty delighted to see this article. I
[00:03:02]  do a lot of the same kind of testing and benchmarking, you know, on page load and looking at different performance. But for me, it's always kind of
[00:03:08]  like an apples to bananas kind of comparison. I don't get to compare React against React, generally speaking, because, you know, usually it's solid or Marco or,
[00:03:21]  you know, whatever other, you know, tools that I'm kind of working on. And in the case of Remix, they get to do the React, React
[00:03:31]  comparison. You can't just kind of hand wave and go, well, React slow or, you know, whatever. This is just pure looking at the architecture. And I
[00:03:39]  think that's great, because a lot of the conclusions and a lot of things that Remix has been putting out there, I agree with completely. So to actually have it
[00:03:51]  codified as a well-written article and kind of see it in practices is actually just absolutely awesome. So, yeah, let's just start there for a moment here
[00:04:01]  and kind of take a quick peruse of this article, because I did read it. I didn't actually read the whole article. I was trying to read it again before
[00:04:10]  the stream started, which is why I was late. But, you know, Brian Florence decided to answer the question finally, you know, what's the difference between Remix
[00:04:20]  and Next? And he's trying to do it in a way that's not dramatic. But I mean, let's face it, anytime that you're doing this sort
[00:04:27]  of thing, you are kind of putting it out there, you've got to tread carefully, you've got to make the comparisons as similar as possible. But I mean,
[00:04:35]  there is a point being made here. He's got a big list of TLDRs to takeaways, right? Basically, Remix is as fast or faster than Next at
[00:04:45]  serving static content. Remix is faster than Next at serving dynamic content. Remix enables fast user experience on slow networks. Remix automatically handles errors, encourages client side
[00:04:54]  JavaScript for certain dynamic content. Next does, but Remix doesn't. There's a whole bunch of differences here. But the big takeaway that I found when reading through this
[00:05:06]  article was largely Remix is trying to position that static site generation isn't necessary to get the best performance. And there are other architectural tricks you can do to get that
[00:05:21]  performance. And in that, I agree completely. So they went and they actually rebuilt an e-commerce page that had been built in Next previously. And they did it in
[00:05:38]  two different ways. Honestly, read this article if you want more background. But essentially, they did the port where you just lift and move it into Remix. Being
[00:05:48]  a React app, they can do that. And the second thing they did was actually rewrite it the way they would write it using Remix. And they're kind of just
[00:05:55] ifying that. I don't know if everyone remembers this from a couple months ago. Lee was kind of going off telling, saying like, hey, look, it's really
[00:06:03]  good to see this competition because it's kind of pushing other frameworks to improve. And when that happens, you know, developers win. And I think that's I
[00:06:16]  think that's a pretty accurate statement. Although I think sometimes when you're the big name or the incumbent, like, say, start pushing React, I don't know.
[00:06:23]  I don't know how much like a, you know, a feather pushing, I don't know, 300 pound elephant kind of has that kind of impact by comparison.
[00:06:36]  But you know that at least the mind shares there. And honestly, maybe this was prophetic because React forget is a perfect example that even if React doesn't go that way,
[00:06:49]  the fact that they were talking about that, that they demoed that at React confs does suggest that they they heard it. Right. So I there is a lot of
[00:06:56]  truth to this statement. And he called it out right there that Remix is pushing next. I don't want to open this. Okay. So anyways, skipping ahead
[00:07:07] , blah, blah, blah. They're doing a much visual page test. And I love this because you can actually see the visuals here of the timing of it when it
[00:07:14]  loads. And obviously, the Remix rewrite tends to be the winner here. But they tested on a number of scenarios. And honestly, the initial results are not terribly
[00:07:29]  surprising. What do they say here? Okay, this one is that all three versions are so fast, it's not even worth comparing who's faster. Yeah, I mean
[00:07:38] , between the port and next, it's probably not that much of a difference. The rewrite definitely is faster. He says not care, but 300 milliseconds for visual for e
[00:07:48] commerce site actually will make it dimmered some money. It's been it's been shown. But essentially, changing the speed to like something slower. Let's see
[00:08:02]  what's going here slow mo cable. Oh, they're just others showing it back in slow mo. So you can actually see the time. So visually speaking, I
[00:08:18]  see. Yeah, this is actually really good that they went this far in the analysis because the truth of the matter is the total load time is longer on next. But the
[00:08:27]  main content has actually loaded like the largest contentable paint is actually within in around the same place as a Remix port. So this kind of shows that there isn't
[00:08:35]  actually that much difference. And this is probably the least interesting part of this comparison. But essentially, what what what they're saying is that next is actually using static site generation
[00:08:47]  and to pull the data and then the stuff that essentially, they can't know ahead of time, they fetch from the client. But we okay, so Remix doesn't
[00:09:02]  support SSG, we support HP still, revalidating caching directive, blah, blah, blah, and result the same static document at the edge, even
[00:09:10]  though it's the end, that's how we got there. Yeah, so it's essentially the same thing, right? So basically, instead of doing static site generation,
[00:09:18]  they're just caching the document until that new version has been put out. So in a sense, someone once said that, that, you know, the whole difference with
[00:09:30]  all the SSR strategies are like when you do the rendering, do you do it at build time? Do you or like, do you do it at runtime? Do
[00:09:38]  you know, do you do it on request? This kind of mentality is really basically the difference here. The biggest thing about this article, and as I said, I'm
[00:09:47]  kind of skimming through here pretty quick is, I don't think most people should find any of the stuff that surprising. And, and here they go. Now they
[00:09:56] 're showing the difference. Yeah, so because SSG doesn't scale to dynamic pages. Yeah, switch to client side data fetching. Okay, yeah. So okay,
[00:10:06]  sorry, I was wrong. This was all just cached, these examples, and they're roughly equivalent. What they're showing here now is this is what happens when you
[00:10:14]  actually have to do client fetch in these examples, you can see a significant difference now, where we're getting to almost double the time. And, and that's the
[00:10:23]  thing, when you have like the Jamstack type mentality, where you serve the static page, and then serve the dynamic part, the problem is you have to load the
[00:10:31]  JavaScript before doing that, before doing that, the request. So you you're, you're naturally waiting on it. And it's actually really awkward, if you both
[00:10:44]  have to do dynamic rendering on the server, and dynamic fetching on the client, because you actually end up paying twice. Sorry, are you saying my volume is a little
[00:10:53]  quiet? Just anyone can confirm. I could see if I can adjust that. What's my audio that? Yeah, you're right. I'm a little bit on
[00:11:07]  the quiet side. Let me see. See if I can. Hmm, maybe it's work. Maybe it's the angle where I'm sitting. I turned your volume down
[00:11:20] . Yeah, okay. It's fine. Okay, yeah. All right, let's just continue for, let's just continue here. Okay. So because SSG
[00:11:32]  doesn't scale dynamic pages. So this, this, this shouldn't be surprising. But all they're saying is, is that if you go, as soon as you start
[00:11:41]  fetching in the browser, you know, things get slower. And yeah, I mean, most of this is talking about how they can use the cache to load things
[00:11:51]  faster. So as much as I'd like to pull some crazy, you know, element out of this, this, this honestly, is a fairly uninteresting comparison, at
[00:12:08]  least up to this point. So the, where things start getting more interesting is they were trying to show that that remix was faster on a cache miss. And I think
[00:12:23] , I think, I think that's interesting because essentially, if it, it doesn't take very long to render a page. I don't know if people know this,
[00:12:36]  like the actual time it takes to, if you ignore the data elements, if, if you ignore the time it takes to do the data fetching to actually render a
[00:12:44]  page only takes maybe a handful of milliseconds in any framework. So when, you know, certain frameworks are like, oh, we're 20 times faster on the third, on
[00:12:52]  the server, 10 times faster server. It's like, oh, that means you take one, like 0.5 milliseconds and someone else takes 10 milliseconds. Like it's
[00:13:02]  not, it's not a huge range of difference, but I've actually, as I said, these results are really kind of interesting. Um, because this, this is
[00:13:10]  all about you know, the effect of the, of the cache and one of the arguments here, and I'm going to get into this a bit later is you're saying
[00:13:19]  that on, on a server, you can, you know, make the connection to the API or the database stuff like ahead of time. Like you have the ability to,
[00:13:26]  to have already like warmed it up where on the client, all you can use is this link pre-connect tag. And essentially they're dealing with pretty fast APIs here
[00:13:35] . He's he, he'd mentioned, you know, turns out the Shopify API is quite fast. You know, if the user browser could make the request to Shopify that
[00:13:44]  quickly, the remix server can certainly do it faster. The user's connection to the cloud is always going to be slower than your servers. Probably best to keep the data fetch
[00:13:50] ing there. Generally, yes, but I'm going to show you something pretty cool in a minute, but bottom line is caching is nearly pointless when using the Shopify
[00:13:58]  API cache hits or misses will be virtually indispensable from each other. It's the best illustrated by slowing down the user's network and seeing what happens, right? And do,
[00:14:06]  do see this. Yeah. Next can't load images until the data loads, but it, it can't load data until it loads JavaScript. It can't load. Yeah
[00:14:20] . So this, this essentially is just showing the client side rendering is kind of terrible when your network's slow. So, you know, there's this whole thing and
[00:14:33] , you know, Shopify cores, handshake, all this stuff. I think this is all true. The funny thing is I'm going to show you something that, that
[00:14:44]  actually suggests almost the opposite of these conclusions in a minute, but I generally think for the most part, this is true. I just think it's, it's, it
[00:14:53] 's interesting because there was a time when, and it was, I, I've talked about this in the last stream where people were pretty content with client side rendering,
[00:15:03]  and this is why Jamstack exists. Um, what remix has done is shown a very optimizable path or optimized path to react, but, um, you're still
[00:15:15]  kind of paying other costs. There are so many costs when you're doing, when you're doing, um, server side rendering and hydration and whatnot. So this,
[00:15:24]  I love how in-depth this article is. I'm going to be reading it and some referring to this one for, for ages to come. Um, okay. Edge
[00:15:33]  native. Yeah. Okay. So do, do, do, do, do, do, do, do. I need to kind of review and see where we are
[00:15:42]  here. Yes. So showing the difference of deploying to the edge, cloud flare, blah, blah, blah. Did they actually show a comparison on this one? I don
[00:15:53] 't know if anyone knew this. Other people, I assume, have read this article. Because this image, like it's very clear that the remix rewrite is much,
[00:16:07]  much faster. And I'm assuming this is saying, you can see it in the network graphs. I don't know if you'll be able to see this over the
[00:16:13]  stream, but we're talking, we're talking page load in about 400 milliseconds. The most resources come in a quick waterfall. Whereas on the other side, let me go
[00:16:26]  here. They're, they're seeing almost 1200 milliseconds. I'm gathering this is because it's from Hong Kong and the network connection is super slow, but they're just
[00:16:35]  kind of showing this slide off. Okay. So client side transitions. Yeah. I mean, they, the rest of this article is about their, um, UX.
[00:16:45]  And I think, I think it's a good point here, but on the other hand, I mean, I got to put out there, there's a lot of react
[00:16:52]  devs in this, in this, um, chat. I imagine people who've used react, everyone kind of hates use effect. That's kind of the thing everyone kind
[00:17:04]  of goes on and on about, but isn't it mostly, I mean, I wonder if people are using it too much. Like my feeling is the most common place
[00:17:14]  you're going to hit use effect where, you know, maybe end users shouldn't be is around data fetching or the data layer, like that side. As soon as
[00:17:22]  you abstract the data effect fetching later, you basically use effect goes away. And I think everyone who's used react query query knows this, right? Um, that's
[00:17:30]  kind of the thing. So on one hand, like remix is a bit loaders and actions and kind of abstracting that in a common pattern is awesome. Um,
[00:17:41]  but because, you know, it takes the data fetching out of the thing in the end, you get something, you get your own, it's basically react query.
[00:17:49]  That's, that's, that's the thinking where remix actually has a superpowers on mutations. And I haven't seen this in other, um, solutions so far
[00:17:59] . I've seen optimistic updates, most optimistic update solutions involved doing the update, basically saying, this is the update I'm going to do putting it in the cash kind of
[00:18:09]  imaginarily or just like temporarily. And then having the ability to roll it back if it fails essentially. So you, you end up writing this code that's like,
[00:18:18]  okay, this is the change that I think is going to happen with this data. And then as long as it, um, doesn't fail, then we can commit it
[00:18:27]  or maybe actually commit, you know, commit the real thing from the response or maybe refetch that that's generally the pattern. But what's interesting about remix is optimistic updates
[00:18:37]  is it's declarative optimistic updates. Sorry to state in the URL. Yes. Yeah. I mean, that that's, that's probably the other half of the
[00:18:50]  equation, right? Because the web was based off the URL, all the common patterns. If you want your stuff to be progressively enhanceable, like it's, it's
[00:18:58]  the place where you can resume. Um, I think, especially in the early days of single page apps, we were terrible at this being able to resume, but, you
[00:19:06]  know, now, uh, you know, most tools are a little bit better, but remix does take it to the next, level by using this, even through your
[00:19:15] , you know, data mutations, through form posts and whatnot, and basically, uh, following those patterns. But what I want to get about, uh, is do they
[00:19:21]  have an example in here? We did a stream all about remix, uh, like a month or so ago. So people probably should, you know, they've seen it
[00:19:29] , they've tried it themselves to kind of have an idea. But when I'm, what I'm getting at is this, their action code, blah, blah, blah
[00:19:36] . Unfortunately, the article doesn't really, they just talks about it, doesn't really give examples, but the key, you know, the key part about remix is
[00:19:44]  forms is essentially that you, you get state back and the state's ephemeral. So if you're going to do this change, they just push that back through state
[00:19:54] . They're like, okay, this is the form data that you sent. So this is like your model or, you know, you're adding a to do here
[00:19:59] . It is now have a different declarative part of your dog dom. Actually, uh, Ryan Florence did a great video this week, uh, that we probably should probably
[00:20:08]  look up. I don't have it at the tip of my fingertips, but you can search for it, uh, where he does like an agenda, um, with remix
[00:20:14]  and he kind of shows you optimistic updates. I think most people like it is worth checking out understanding, but it's basically, it's like, if you had a to
[00:20:23]  do list, have two for loops, have a for loop for the to do's that you already have, and then have a for loop for, or sorry, map
[00:20:29] , list map for the, for the items that would be optimistically added in. So you don't actually merge your data ahead of time. And what's really cool about
[00:20:39]  this pattern is you never have to write the cache update code. Like, as I was mentioning, and I've talked to a lot of people who use Apollo or, you
[00:20:46]  know, different GraphQL clients, they all have caches, but when they're like, oh, do you do the cache update? A bunch of people have been
[00:20:53]  like, yeah, or I just refresh the data. It's too much work because an optimistic update is going to force you into that pattern. We're like, okay,
[00:21:00]  you have to do the cache writing. It's like the most painful part about using those systems where with remix approach of declarative data, you just describe how you want the
[00:21:07]  optimistic update to look. And then, you know, when the data, when, when the, it finishes, then the data updates and the optimistic update goes away.
[00:21:17]  But if you, if you do this kind of refetch model, which is common in React query, essentially, you never have to write the cache updating code yourself, because
[00:21:28]  you, you have the, say the new to do item, you just display it. And then when you're done and you refetch, you now get the list with
[00:21:35]  all the to-dos. You never had to write the code to add the to-do to the list. Obviously a to-do to the list is a simple
[00:21:40]  example. But in reality, doing these kind of optimistic updates is usually really, really painful. And Remix's approach completely alleviates it. Unhandled errors. Yeah
[00:21:50] . I mean, there's, there's just more stuff here. I think we're going to move on probably from this, this article, because I got some cooler stuff
[00:21:56] , but React hasn't really implemented error boundaries on the server. So their ability to have error boundaries on the server is really quite nice. And I, you know,
[00:22:07]  I think, I think there's, there's, there's some good innovations. I think this is the big thing about Remix is good innovations here in the way that
[00:22:15]  they've, they've kind of taken the, the web model and just kind of made it seamlessly work with React. You know, like these are real web request objects
[00:22:28]  and they've kind of, they've kind of basically pre-built it this way. I don't know if they mentioned this at all in the, in the article,
[00:22:35]  but I think one of the coolest things that people might not realize off the hand is a lot of the edge deployer deployments like Cloudflare, whatever, they're
[00:22:43]  just like really simple, you know, maybe based on V8, like JavaScript engines, but they're not like, no, they don't have all the tools.
[00:22:52]  So when Remix kind of came in and added their own request response wrapper and wanted to kind of consolidate across the board, they also had to bring all the stuff that was
[00:23:01]  kind of missing. Like, say you want to manage a session. So Remix has session management that essentially works based on these, you know, web requests in this universal
[00:23:10]  interface. So in so they basically brought like express type stuff in a consistent way across all of the platforms and which is really powerful for some of the really like bare bones
[00:23:23]  platforms, like a Cloudflare worker, because now you can kind of treat it like a regular server and Remix lets you just use that pattern. I think that's
[00:23:30] , I don't, it doesn't seem like they're talking about it here, but maybe what's personalization? No, I, I just, I just think that
[00:23:37]  that's really a powerful thing. Anyways, enough, enough on this article for now. That was, that was conversation number one. Conversation number two. Let's
[00:23:47]  see. Sorry, I'm pulling my stuff off another screen here. Yeah. Conversation number two was this one. And it's also related to Remix because, you
[00:23:57]  know, middle of all the conversations here. Dan Shippers goes, Hey, web devs, if you intend to build a website that has significant traffic and mostly static
[00:24:07] , there's a few dynamic elements that is not an app. Usually, you know, shallow navigation needs connected to CMS. What kind of tech stack or framework do you use
[00:24:15] ? Right. And this is, this is right. Coming into the heart of our, uh, single page app versus MPA islands, partial hydration conversation. Right.
[00:24:26]  This, this, this is, this, this is, this is the e-commerce is one place. The other place where this kind of comes in is like, this
[00:24:32]  is the use case. And Kent, of course, it goes, well, choose Remix. We can, we can make it work all without JavaScript, you know
[00:24:39] , you know, it feels free to sprinkle in as needed. Then when you decide to hydrate, you can, you can do so without re-architecting your
[00:24:46]  app. And Dan asks a very great question. He goes, interesting. Can it also do partial hydration for a page that is 90% static SSR a hundred percent,
[00:24:55]  but only download and execute the code that I need, basically. Um, and of course, Fred jumps in, you know, the man behind Astro and goes,
[00:25:06]  you know, Astro and Slickly are the only two frameworks that support partial hydration. As far as I know, I'm, I think he might mean react based
[00:25:13]  frameworks. He, he knows about Marco and he knows about quick. Um, so, but essentially he he's, he's, he's pointing, he's pointing the
[00:25:21]  conversation this way. And he's like, by sprinkling JavaScript as you need it, I believe kind of means literally sprinkling in script tags, which is different than what
[00:25:29]  you're asking here, which is actually a very fair assessment because the problem, it's not problem, but the difference here is when you have partial hydration, you only
[00:25:38]  need to send the JavaScript you need. Whereas, you know, with felt kid or remix, you can like make static routes, but essentially you're just removing the script tags
[00:25:49] . It's it's once you need JavaScript, you get all the JavaScript, right? So, you know, we, you know, there's a bit of a,
[00:26:01]  more of a discussion here. And essentially I was just like, look, because Kent was suggesting that, you know, the performance, you know, was he's like
[00:26:09] , if the UX was better, you know, maybe we'll consider it. And I'm like, no, no, no, you can't, you don't just
[00:26:13]  consider partial hydration. It's an architectural change. And essentially I brought up the stream we did last week where we did the benchmarking. And I think this is probably one
[00:26:23]  of the more interesting things. I compared the hacker news of remix next JS, the next RSC example, solid Marco, I put them all in the pit. And
[00:26:36]  we did, we did a bit of a comparison here. And the results were not the best for remix, I guess, I thought it was pretty fair. But I was
[00:26:48]  informed that the solid Marco examples were from cloud for workers and the remix example for cell was just a serverless function. And that even the react server thing was a server
[00:26:59] less function. And I, I, I, I, we followed up a bit more and we came to realize that that was actually true. I didn't realize this
[00:27:09]  because solid Vercel example is completely cloudflare worker. Um, there, there's like a bit of a, a misunderstanding because apparently I've been using a new
[00:27:21]  API, um, that not even next JS uses solid, I guess is the first framework to do full like edge, um, like have a full edged deploy on V
[00:27:32] ercel. Um, I thought the next example did that. I thought the remix example did that, but they, they didn't. So it was a bit of
[00:27:40]  an unfair comparison. So I felt kind of bad about it once I realized it, but it triggered a great conversation because as this went on Lee confirmed that Vercel edge
[00:27:50]  is in fact workers and everyone got really excited about the potential of next JS and, um, remix being on these edge workers. I was like, but it was my bad
[00:28:00] . I assumed they already work because we've been doing this for months with solid. Um, because like when I did that demo, they, they came, they came to
[00:28:08]  me and was like, oh, you don't need to use next JS to go on the edge. You just use this API. And I was like, oh sweet
[00:28:13] . And I just did it. I didn't realize no one else was doing it. So, um, I, I think we're going to see some awesome stuff here
[00:28:19]  from Vercel soon. Um, in terms of that, because I got to use the file-based system API for Vercel and it is absolutely amazing. You
[00:28:26]  need, you do not need next JS and you get to basically, let's see if I think there, it was linked somewhere in here, but essentially you get to
[00:28:34]  do something very similar to next where you, based on your folder structure, you just make an output folder. You can put stuff on the edge. You can use the CD
[00:28:43] N, you can put stuff on serverless functions. It's like next where you can just organize your files in a way. And Vercel deploys it across the
[00:28:49]  stack, but it's completely independent of Vercel. And while I guess it's behind beta right now, you can do this with any framework. And that's been
[00:28:58]  what we've been doing with solid and with solid start is, is leveraged this incredible way to just define, um, basically this file system and have Vercel
[00:29:08]  deploy it with no next JS. And, um, yeah, I'm glad other people know about it. I, I didn't realize we've, we were the only
[00:29:17]  ones. So, um, yeah, this is coming for, I guess, for next and remix soon. So it's gonna be pretty exciting, but as I said,
[00:29:23]  I felt bad, Kent went, went, went and, you know, maybe some comments and stuff on the YouTube video going like, Hey, you know, this isn
[00:29:30] 't a fair comparison. So I, I went back and I, we, we built hacker news on the stream, uh, a few months ago. So I was like
[00:29:38] , okay, well, why don't I finish that demo and deploy it? Uh, deploy it to cloud flare. And that's what I did. So now we
[00:29:47]  can do a real comparison. You guys like benchmarks writing. And I want to, I want to show you a slightly different story than what we've been hearing here perhaps,
[00:29:56]  because the interesting part was I took, obviously I have solid it in Marco demos and on, on, on cloud flare. Um, but, um, I, I
[00:30:12]  was like, what if I took my original client rendered version of hacker news and put it on cloud flare site? So not the SSR plus client thing, like, like
[00:30:25]  next was doing. Cause as I mentioned, that's usually the worst, both worst of both worlds. Why, what if I just took that very first demo that I
[00:30:33]  did, that's completely client rendered and throw it in the mix. Cause I told you, I wasn't into SSR because I believed that client rendering outperformed SS
[00:30:40] R back in the day. It wasn't really my fault. I was just comparing it to next JS and, and Sapper and whatever, Nuxt. And it just
[00:30:47]  seemed that client side rendering could outscore it. So I was like, it's been a couple of years, let's put on a cloud flare worker and let's
[00:30:55]  throw that in the mix too. So let's, let's do that right now. Let's, let's, let's just go into our page insights or paid
[00:31:01]  speed web dev and, and, and run a few tasks and get a feel for stuff. So, um, yeah, I hope you, you all will indulge me
[00:31:08]  because I, I actually have a second little story. This hacker news demo that I wrote three years ago or whatever it started as a client only demo, which means that
[00:31:19] , um, and what doesn't mean it, what, what happened was I was having this problem with speed. Um, essentially it was much slower than I thought it should
[00:31:29]  be. And the reason was all the hacker news demos did these requests using, I guess, was it fire base against the hacker news API. And there's, there
[00:31:39] 's a hacker, hacker news, PWA site. Like the site is long dead. All the links are dead, but you literally could find hacker news for every single framework
[00:31:49]  in this list. Unfortunately, they're all dead, but I I'd gotten to a point where I was like, I was like, why is it so slow? And
[00:31:57]  it was because the way the hacker news demo loads, is it loads. The API gives you a list of all the IDs for all the stories. And then you have
[00:32:05]  to fetch each story in a separate API request. And all the server rendered versions were really fast. And the client rendered versions were, were slower because they were doing freaking 30
[00:32:17]  requests or 31 requests to load that first hacker news page. And I was like, man, this sucks. I'm like, am I gonna have to make an API server
[00:32:24] ? And then I looked through this list and I found this angular one and it was client. I think it was at this one, I forget one of the angular ones
[00:32:31] . It was client rendered and it was, it got pretty good scores. And I was like, okay. And I looked and then they were using a different API. So
[00:32:36]  I took that API and I used it in all my hacker news demo. So every demo might be a little bit different, but I, I built one that I grabbed an
[00:32:45]  API that would be efficient so I could do stuff in a single request. And I've been using that API for my hacker news ever since. But my gut suspicion is that
[00:32:54]  API wraps the other hacker news API. So we have kind of a ping pong essentially. Right. And that might make this, even though it was a huge performance improvement
[00:33:04]  for my client side app, it kind of makes maybe that request a little slower than you might find, um, in another example, um, you know, where they're
[00:33:12]  doing their own server backend. But I love what this illustrates because essentially not all APIs are fast. You might not even control everything. And when you move it to the
[00:33:25]  edge, maybe some latency increased. And that's what I want to talk about on the show today. Maybe not all APIs are made equal. So I've got the exact
[00:33:34]  same demo that I've made with the same code, same hacker news identical in, in, in these frameworks. And let's, let's look at what happens here
[00:33:43] . Right. So we we've, we've seen me demo this on several streams, but you know, and every runs a little bit different, but let's, let
[00:33:51] 's, let's start with our solid hacker news, um, uh, test here. Right. And we'll use the mobile scores and we'll just kind of look
[00:34:06] , right? Yeah. See, every time I run it, it's a little different depending on the network speed. So what we have is 1.1, 1.
[00:34:13] 1, 1.2 yesterday, when I ran this, um, and I'll run it one more time. We'll run everything twice. Just kind of average it
[00:34:21]  out. We, we got 0.8 and it, it depends sometimes on my network or where we're at, whether we get it, but okay. So best of
[00:34:28]  two runs, we we've got 1.1s across the board. As I said, sometimes we get lower numbers. So here we go. And we we've obviously
[00:34:39]  got a hundred here. Okay. Now let's take our remix demo and I I've, I've shown this one before. And as I said, this is the
[00:34:52]  one we built on the stream, except now I've, I've, I've deployed it to a worker and the point isn't so much about the initial rendering time.
[00:35:01]  Cause I doubt it should be different, that different. Um, we probably should see another 1.1 or 1.2. Yeah. So I'm getting, different
[00:35:10]  results right now than, than, than when I've done this in the past. Um, but we get 1.2, 1.2, 1.4. Um
[00:35:17] , yeah. So this is actually a pretty good score and let's, let's run it twice. Just like I said, I said I would, I think, I
[00:35:25]  think the biggest thing to notice, um, in this scenario in 98, so slower this time this, but now this is about the same speed. So the rendering was
[00:35:38]  about the same, but the hydration and the blocking time is significantly more, and this isn't remix fault. This is react, right? It takes instead of in the last
[00:35:46]  solid runner was 1.1, I think pretty much across the board, it takes 300 or more milliseconds faster and, and increasingly more blocking time because of, um,
[00:35:57]  because of, uh, mostly because of reacts element here. Now I actually ran this earlier from my computer and I got this, my, from my, um, my desktop
[00:36:09]  and I got the 0.8 and the remix was around the same range. Um, but it was a 97 outside 98, but I, I was kind of, as
[00:36:18]  I said, now that I'm on stream, I'm probably not going to get the same results I got earlier. I actually have screenshots of them, but let's
[00:36:24] , let's, let's, let's, uh, let's run the client side render and see, see how different it is. This is purely client side rendered.
[00:36:31]  It actually sends a blank page to the browser and then does its rendering. Now, the funny thing about this is largest content full page is way later, 1.9 seconds
[00:36:47] . Like, because it has to load on the client is exactly the scenario that they were showing on the next, on the next JS example. Right. Um, but
[00:36:57]  the, because of, because like the hydration cost, there isn't any, and the low cost of them, it basically looks the same other than this. And lighthouse gives
[00:37:06]  it a 99. I've run it earlier, but essentially this is a very simple example, but lighthouse will score my purely client side rendered page higher than it will score
[00:37:19]  a remix app app in general. Um, and with this, because of the time it takes to do the data fetching when it's not a remix app, if I
[00:37:29] , if I did a solid, uh, it's not just remix app. If I did a solid, um, well, I guess it is the react hydration cost
[00:37:38]  plus the wait till finish on the API calls. But essentially when, when the API is going slow, you, that's more blocking when you don't stream or don't
[00:37:48]  client side render. And because the client gets the content earlier to load the resources, the JavaScript loads earlier. And when the JavaScript loads earlier, you can actually get more
[00:37:58]  performance, right? So this, this right now when I'm running it, the results are much closer than they were earlier, but generally speaking, a purely client side rendered
[00:38:08]  page with the right parallelized code split architecture fetching and, you know, doing the parallels fetching kind of like what remix does on the server, but doing it in
[00:38:19]  the browser, you can, you can do it without like a meta framework, um, actually outperforms SSR in terms of light house score, not in thing
[00:38:28] . This is slower, like a hundred percent slower, but lighthouse is not aware of it. So this is one of those funny things. I said, this is what started
[00:38:37]  my quest on SSR, but looking back in hindsight, if you, if you run this, you know, a dozen times, um, you know, you've run
[00:38:44]  this thing, the client side render will be faster than remix than the majority of them, not in a meaningful way. Just, I just from the lighthouse score. So
[00:38:53]  this, this is just a perfect example of showing where benchmarks are kind of flawed. And it's funny thing because these page speed insights are what are used, uh, to
[00:39:01]  judge like performance ratio. Well, the, the original solid example was streaming, but it was a hundred. It's a hundred every time. It's, it's
[00:39:11] , it shouldn't, uh, as I was saying, let's, let's, let's run, I could run Marco again, because I said, it's,
[00:39:19]  it's kind of weird sometimes. Uh, let's see, because let's, let me, let me run solid one more time because it just going to do this
[00:39:30]  right now. I actually want to show one more thing here in a second. Yeah, here it is. There we go. This is what I was looking for. Um
[00:39:39] , this is the results we got last time. Um, about half the time solid streaming and approach pulls these numbers, uh, which gets zeros 0.8. I
[00:39:50] 've never seen 0.8 on, um, the, the, any, the weight for the non-streaming version of, of this, the streaming version seems to
[00:40:00]  be the only version capable of getting the 0.8. It can, because you get to load the page sooner. Like it might essentially you, you get to load the
[00:40:18]  the assets in the head sooner. Like the, the HP early hints can do that too. But like picture, if you're waiting for all your data load before you
[00:40:26]  send anything, then that's how much later it takes to load the JavaScript, which means that that it's going to take that much longer. And if your data is quick
[00:40:36] , then it's no problem. But as I said, when it's not, then you are going to, uh, you're going to see this scenario where,
[00:40:45]  um, uh, a streamed page will have faster time to interact it. And actually, you know what, I'm just using the Marco website for this example, because
[00:40:54]  we, we have a silly example here, but this, this is exaggerated, but watch the timing of stuff loads in on the streaming on the right versus on the, like
[00:41:03]  the full page load. So like, this is on the right side, this is like Marco and solid and react 18. And on this side, this is like remix
[00:41:11]  or, you know, whatnot. Look at when the image loads, see the whole page content loads at the same time, but the image is able to load faster on,
[00:41:22]  on this one because it was there first. And it's the same with the JavaScript and any kind of other interactive parts. Do you get the process starting earlier? You can
[00:41:32]  just do it earlier. Now, not every site can benefit from this, but it's, it's just kind of like a baseline. And to kind of show you
[00:41:39]  what I'm talking about, I'm just going to pop into a, a, a, a new Cognito tab and just do something really quick here. Right.
[00:41:48]  We, we, we've all seen this before. So, um, I'm going to take, I'm going to start here. We see the difference is when you
[00:41:53]  have a fast local network, your results are a little bit, are going to be a bit different, right? Let's see. Okay. So I just did a
[00:42:01]  thing. Um, I just ran this, the client render version first paint is 150. And then largest contentful paint is much, much later at about 263, because
[00:42:14]  it had to do this request from the client and it took 92 milliseconds. Okay. So there's no hydration costs because this is when it renders, but essentially for
[00:42:24]  here, we end up with 263 milliseconds for those, for the full time thing. And this is a client render. So it was a white page and then it loaded
[00:42:32]  in. Now, if I took the solid streaming example, this is, this is sort of the extreme side of it. What you're going to see, unfortunately, is
[00:42:40]  the client render is going to beat it for some reason. And I don't know exactly why, but you can see the streaming because you can see the page load, the
[00:42:49]  assets load before the page finishes streaming in the data and the client, the first paint is going to be 159. It's very similar range, but then the largest
[00:42:58]  control paint and the hydrations finish at about 389. Okay. So in this very fast network scenario, when the JavaScript's available to me instantly, and I'm on
[00:43:08]  the edge and as fast as possible, the client actually loads, the client render is actually faster than the streaming with this slower API. But the thing is, if I
[00:43:19]  take the remix demo here with the async rendering in this example, when we, when we have the scenario and we do it one more time, look what happens. We
[00:43:30] , we have to wait the whole time. So we're at 480 and then we load the assets. Then we do the first paint. And the first paint's not
[00:43:41]  happening until 566. And the largest control is at the same time. So everything, and then finally hydration, it's not that far after 630. So essentially
[00:43:49]  it's over, it takes twice as long as the purely client rendered one. What? I thought this was at the edge and I thought this was fast. Why the,
[00:43:59]  why is client side rendering the fastest in this, when we're at this fast network? right? This is, I've seen this result consistently for years. The thing
[00:44:16]  is not everyone has the fastest network that not everyone's sitting in Silicon Valley like I am, but this is in a well-architected client side app in this scenario
[00:44:27]  is beating the edge function on streaming and especially on async. The edge function on street on, on, on, but you notice the difference, the streaming one,
[00:44:37]  which I actually kept here just so that we could compare it, the streaming one and the client one, both first paint around the same time, which is, is a mis
[00:44:48] namer for the client one. Cause that's not really, it's not, I don't think it's like a, I guess it's just the header, but
[00:44:56]  then in this case and scenario, it takes a little bit longer, but the, the async one is like, it's just way later. Right. And as
[00:45:07]  I said, I blame the API. I think the API is, is for some reason closer to me than it is closer to the, to, to the worker or something
[00:45:16] . I can't explain why this is so exaggerated, but from a lower, like this is, this is the, this is the advantage of streaming. And it's pretty
[00:45:26]  weird to see client side rendering. Um, can I come out at top here? But the thing is, there's a reason why this isn't good because look,
[00:45:36]  let's go back, let's go, let's do fa let's do fast 3g for a second and do this all over again. Um, yeah. Okay.
[00:45:45]  This now we're on a slow network. Let's watch what happens. Right. This should actually bury the lead a bit. I'm going to go, I'm
[00:45:55]  going to start with the solid hacker news. We'll do that one first. Okay. So on a slow network, um, our first paint now is what? 1200 and
[00:46:06]  our confo 1200 and our largest confo, everything comes at basically the same time on a slow network. Streaming didn't end up, uh, doing anything. And
[00:46:17]  we basically got effectively async rendering in the end because it couldn't really do anything early. Um, so in this case, the streaming and the eight, like wait
[00:46:28]  till the end, like remix does, it's going to give you like the exact same results, uh, more or less. Um, let's see here. Let
[00:46:38] 's make sure what's here. Okay. Yeah. So what we got 1165. Yeah. So basically, basically at the, on the slower network, the difference between
[00:46:54]  waiting till the end of streaming is almost nothing. Right. But the problem is for the client side version here, this is a death sentence. You can even see it
[00:47:08]  the way the page loaded there, the first paint 1262. So it's, it's even a little bit slower, but look, look what happens. We don
[00:47:20] 't finish till 2, 2100. It's like 900. It's almost a second slower. This is what remix was basically showing in that article when they're going to
[00:47:31]  Hong Kong or whatever, like jam, like jam stack style, like client, like shell and then client fetch does not scale on slow networks. It's, it's,
[00:47:41]  it is atrocious. Uh, when I saw this, when I, this, this is why I started doing, uh, SSR and solid. Um,
[00:47:48]  so generally it, yes, if you're sitting in Silicon Valley, it's possible that a client rendered app is faster. Um, so to speak, you know, if
[00:47:56]  you're like right on the network hub, but generally speaking, if you scale your app around the world, you want to do server side rendering and streaming is the only
[00:48:04]  solution that actually scale is takes advantage of the fast network and the slow network. That's why I love streaming. So this is, but it is interesting that this is not
[00:48:14]  just like, this is always better. That's what I want to point here. If your data latency is long enough, this, this, like, this is, this
[00:48:21]  is a real example of that. So yeah. Uh, this, this, this is, this is interesting. I said, I wouldn't recommend client side rendering,
[00:48:31]  um, for, you know, things where you care to have performance in a universal way and make things, uh, you know, accessible to people like this only gets worse
[00:48:40] . Like, like if I, if I went to throw slow 3g, the difference between client, uh, fetching and, um, and, uh, like any
[00:48:50]  of the SSR techniques is like three seconds or something like it's, it's absurd. It's like three, three, three, three seconds for like e-
[00:48:59] commerce is the death sentence. That's like, uh, I think the first three seconds lose you 25. The second three seconds loses you like an additional 40% of your
[00:49:08]  customers. Um, anyway, so that's just our silly little performance thing. I just wanted to kind of throw that out there because I think it might not be as widely
[00:49:22]  understood why, um, like, um, and this performance data is against cash client side render. What do you mean cash? No, there's no, there's
[00:49:36]  no cash. Um, yeah, um, yeah, there's, there's no cash. This is literally loading all the assets cash disabled from thing. The client side render
[00:49:46]  is just that much faster in this scenario. Um, obviously once you slow down, it's freaking terrible, which is why the, the, the page insights scores that
[00:49:55]  we were looking at earlier, um, um, what were the page insight scores? Let's see if I can flip window here. Um, why, um, why they
[00:50:07]  were like so much worse, right? The solid one, like the desktop ones aren't bad, but these guys, when they do the mobile tests here, you see
[00:50:15]  they, they, they, they put it through slow 4g throttling with a moto g4 or whatever. So, um, yeah, no, the JS assets
[00:50:25]  are not cached. I can actually show that in the timeline. This is clock client side rendering done well, small framework, good network, um, looks a lot like
[00:50:36]  streaming. Usually I, usually when the API isn't lane, they're, they're kind of similar. You don't get the SEO. Um, yeah. And
[00:50:47]  that's a good point too. Caching might even change the equation at a different thing. Honestly, I think it's, I think SSR because the way it scales
[00:50:55]  is like way more beneficial. Like, like once, once you move off a super fast network client side, it's just, it's just terrible. Um, in terms
[00:51:05]  of like the waterfall class that rendering is actually pretty fast. Um, but like in terms of like, um, the waterfall effect is it's pretty brutal. Speaking.
[00:51:17]  So, yeah, I mean the caching, there's so many details here, which makes this really, really interesting topic. Um, with CD and it, I mean
[00:51:27] , it should work with each, with CD and caching, um, or with caching. I mean, I don't know, maybe Michael or Dylan might be
[00:51:37]  able to answer this more, but the thing is when you stream a page, I did test this before. Um, let me see if I, if I have it here
[00:51:46] , let's, let's go to one of these. I've kind of shown the, the, the, the thing is it's just HTML. You have with a
[00:51:56]  little script. Uh, let me do it over the network here. Not the remix app. I want to do solid. Where is it? Where's one? Okay
[00:52:05] . Let's do it. The, the actual page and I'll make this a little bigger so you can see it's just the HTML. It might be out of order
[00:52:14] . Um, let me see if I can make it bigger, but it's actually harder to see. Um, it might be out of order. Like we have this
[00:52:24] , we, we, we, we, uh, you know, in this example, we actually render the header and then some scripts, then the data, and then down
[00:52:35]  here, we render the content and then we insert the content. But essentially in, if, if, if, I mean, I guess, I, I guess I
[00:52:44]  can see this by turning by, by, uh, by going here and turn, like don't disable the cache. Did you like, essentially, if I don't disable
[00:52:56]  the cache, you don't even see it stream in. That's, that's the whole thing, right? Because yes, technically, um, the JavaScript moves it into
[00:53:05]  place, but it all happens before the time it first rendered. So essentially it looks like it was completely rendered. Um, because the scripts are in line, there's
[00:53:13]  no JavaScript you have to wait for, for it to load it in. It's just part of the page load. It just, it basically looks like a per, like
[00:53:19]  a normal rendered HTML page. So yes, I believe the caching will work. Um, fine. Uh, Marco actually has in order streaming as well, not just out
[00:53:28]  of order where you the swap in. And in that, there's no, there's not even any JavaScript. It literally just, you just send the page in pieces as
[00:53:36]  they've come in and then you can do it. So, um, stream responses can definitely be cached. Okay. So it's funny because this stream actually,
[00:53:47]  my intention isn't so much to talk about streaming, but I didn't want to talk about the edge here because I think it is interesting. Yeah. See what's Dylan
[00:53:57]  got here? Yes, exactly. And it's just HTML. So yeah, the thing is, do you have as much value when you have lots of dynamic pages?
[00:54:11]  Um, probably not, but that's, that's, that's, that's a caching problem in general. Right. But yeah, uh, I think, I
[00:54:18]  think, I think, I don't know if anyone has any other questions. It's a good time because I think it's probably, um, probably a good time
[00:54:29]  to move on to our next topic here. I think I'm, I think I'm done with streaming and, uh, and the edge and that, um, for now
[00:54:39] , I think, I think there's more questions. There's more, um, there's more, how should I put it? Um, more considerations here, especially
[00:54:48]  what the edge is going to mean, because obviously there's a lot of work going in right now to moving data sources to the edge so that like, you don't have
[00:54:56]  that long latency and like things like MongoDB have really fast, uh, access through AWS networks and stuff. Um, so I'm, I'm pretty sure. And I
[00:55:06]  know what there's a DAO from like with cloud flare, a lot of people have concerns about security. Not all data can go on the edge, all that kind of
[00:55:13]  consideration. I know I worked in education, um, with, uh, information about children. So like that was a no go, um, for us, but you
[00:55:21]  know, there, there are solutions to deal with that latency, but I think streaming is particularly well positioned in the, in this world where we're moving the stuff as close
[00:55:30]  as possible. Right. I think streaming at the edge is like the new jam stack, right? Remix has showed us that you don't, you can use caches
[00:55:40] , you don't need the static site generate and you can get that really quick performance. Streaming is like that extra little boost now where you can get, you can
[00:55:47]  get, when you do cache myths, you can get the page immediately. And even if the data takes a bit longer, um, you're not really paying for it any
[00:55:56]  worse than client fetching. The huge, huge difference there is you don't have to wait for the JavaScript to start the request to get your data. It happens all at
[00:56:04]  the server time. You just street, you basically send the, the stuff that you would have rendered in the, you know, had in the client anyways, except you
[00:56:11]  started the request that much sooner instead of waiting for it to ping pong, you know, wait for the browser to go, oh, I need this JavaScript file, pull it
[00:56:19]  in, you know, then run it, do the request, the server, the second you made that request, you know, the, the, the worker is going and
[00:56:27]  fetching the data for you. So it's, it's just like a better version of the kind of static shell, um, dynamic content model that you have with
[00:56:37]  Jamstack. It's just, that's essentially how I view it. Streaming at the edge is, is, is, is basically the new version of that.
[00:56:43]  All right. Any more comments? Just, it's your last chance though. I'm kidding. You can keep on asking me questions, but yeah, let's,
[00:56:54]  let's, let's, let's, let's move on to, um, the other part. Cause I'm, I'm kind of, I'm kind of,
[00:57:01]  I'm pretty stoked about talking about server components because I feel kind of dumb. I spent so much time looking at how I could find other ways to do the same stuff that
[00:57:14]  server components did that I never actually looked at how server components worked and that was a bit of a mistake I feel. And it's, it's just cause I was
[00:57:24]  immediately put off by the complexity. So some, so hopefully maybe some of you don't know what I'm talking about or what server components are. So maybe that's where
[00:57:31]  we should start because react server components are something that react, um, introduced a year ago. there is no new announcement. Me talking about server components right now is not
[00:57:44]  because there's been some great breakthrough or progress that they've announced. I just, it's taken me a year to get back here. I spent the last year on streaming
[00:57:52]  and the edge and, and all, and all that. That's been my whole last year. And we finally put out solid 1.3 and I'm just like,
[00:57:59]  okay, time to, to take a serious look at this stuff again. And I I've been really into the partial hydration. You, you, you've seen you,
[00:58:07]  many of you've seen my streams about partial hydration you and, and you know, the different techniques and islands and how that works, but server components has been the one
[00:58:16]  that I just haven't talked about. I've talked about Astro. I've talked about quick. I've talked about Marco, you know, in, um, stream
[00:58:24] , one of my streams coming up in the next couple of weeks, I'm going to be looking at aisles, um, which is based on VEAT, which
[00:58:29]  I'm very stoked to look at, but I have not talked about react server components. And it's because I honestly didn't understand them. And I wanted to make
[00:58:40]  sure that I did. I, I wrote some articles kind of figuring out where the benefits are, because the thing is react server components are capable of so many things that it
[00:58:49] 's easy to like, look at the features and not understand that this is a different architecture in my mind. Now, this is so, this is as big as the
[00:59:00]  difference between a single page app and this and a multi-page app. This is not like, um, I thought this was just like a fancy data fetching technique.
[00:59:09]  No, This is an architectural decision. This is, this is, this is, um, a different way altogether to view what, how your browser app should, should
[00:59:23]  behave. And I think maybe a good indicator of this, you know, for the future, in case anything else that's groundbreaking comes out is ask yourself if the routing
[00:59:35]  paradigm has fundamentally changed. That's the backbone of any web app. And if the routing paradigm has fundamentally changed, maybe like you're dealing with a completely different architecture because we
[00:59:48]  know that classic web, you have your route in the URL. Every time you change URL, you go back to the server, send back a page. These days we call
[00:59:58]  those multi-page apps, but that, that was the routing paradigm. Single page apps changed that so that they can intercept the change of the URL, not go back
[01:00:07]  to the server and have the client render what it needed. Over time, that got more complicated and we lazily loaded resources, you know, code split and all that.
[01:00:17]  But essentially, we had a new paradigm for the web that didn't involve full pager page reloads, but involved, um, basically virtualizing our pages. And
[01:00:28]  there's been improvements over time, like nested routing and layouts and all that stuff, things that you can only do because of the way single page app routing works. You
[01:00:39]  can save and only render parts of the page, kind of onion it, like I've shown on the previous router stream. React server components is another one of those fundamental
[01:00:49]  changes in my mind. And I'm going to, I'm going to, I'm going to talk about that and show that a little bit more. Tonight marks the return
[01:00:57]  of the Scala draw, and I'm kind of excited about this. Okay, we've got some comments that I need to catch up on. Okay. I'll
[01:01:11]  take a moment to answer the questions in the comments here before I move on. Because these are related to the last topic. Could it, could this whole prompt for Android first
[01:01:21]  business? Could it, yeah, of course. If you cache the stuff in the browser, it's, it's, it's going to be faster if you have the
[01:01:27]  content of the browser. This whole conversation is about first page, which is why, um, it's definitely a concern that is more worried about things like e-commerce
[01:01:36]  where you're coming in from search results and SEO matters. Um, even blog sites and content sites where, you know, you know, links and stuff like this, this
[01:01:46]  whole thing, once they have your JavaScript, then like it's client rendering is fast and that's where you want to be. And this does sort of tie into what,
[01:01:56]  what, what we're going to be talking here with server components, but, um, it's, it's, it's kind of interesting because we spent the first
[01:02:05]  five years of single page apps, um, focusing so much on how we can make an app-like experience. That's where react came out of from about 2008 to 2000
[01:02:18] . And well, actually maybe, maybe a bit later, let's say from 2000, because of the early, early web between 2000 or of like the modern JavaScript framework from
[01:02:28]  2006 to 2010, it wasn't so much about mobile mobile was like, iPhones were what was it 2006, 2007. It wasn't felt how much of an impact we
[01:02:36]  were. At that point, we were just really excited that we could just make apps in JavaScript in the browser. Like we have now suddenly had the tools that we needed to
[01:02:45]  do Ajax and asynchronous requests and JavaScript were getting faster and do really cool things. And we didn't have like, I used to work, um, on sites for like
[01:02:56]  travel agencies, like an Airbnb type thing, but way back then. And you, you, you'd have like a list, like a dropdown where you would have a
[01:03:05]  list of like the countries and then the cities and these cascading dropdowns, like in the old web, you'd change one of those dropdowns and then you'd
[01:03:13]  have to reload the whole page to get the list of the cities. And then to like the dates, you'd have to reload the whole page. It was just so painful
[01:03:20] . And just moving the stuff client-side with JavaScript was like, oh my God, like how did anyone use the internet before? Um, that was the first age
[01:03:27] . Then from about 2010 to 2015, um, I mean, that's not the first age of JavaScript. That's the first, I'm just talking about modern JavaScript frameworks
[01:03:35] . There was JavaScript way before that. The next five years, we spent our time obsessing about mobile, like mobile was getting all the traction, things were moving out the
[01:03:44]  desktop, you know, and this is where react came out. We're like, how can we make our apps more like mobile apps? Right. And you know,
[01:03:51]  PWA and everything like that is just like the further realization of that goal. But the last four years or so, since about 2017-ish, I guess it's getting
[01:04:01]  on five years, the shift has all turned back to SSR again. It was like, we realized that we were putting too much JavaScript in and we're like, okay
[01:04:08] , we got to change the pattern again. And that's, it's kind of being felt. I think, uh, I saw a tweet from, uh, De
[01:04:15] vin, uh, critter parcel talking about like, why can't we focus on app stuff? What's all this SSR stuff? Not everything needs to be SSR
[01:04:22] , you know? And I mean, that's an interesting conversation in its own, right? Cause I actually really enjoyed, um, Sebastian, um, for former meta now
[01:04:32]  works at Purcell react core team member saying that, you know, on that side, it's not even about, um, web apps. It's about like react
[01:04:40]  native for web and abstracting in a way, I'm not sure everyone's going to agree with that tape, but I think it's very interesting and very promising show of
[01:04:47]  where reacts mindset is at, but SSR has been dominating our thinking and that's where, you know, the last couple of years have been, and that's where
[01:05:00]  this is coming from. So, um, yeah. Okay. So now let's, let's get into it because yeah, I had some fun with my kids before the
[01:05:11]  stream. Um, essentially I don't, and the interesting thing, and I don't know if people get that granular, I've shown off how partial hydration works or
[01:05:24]  islands work, um, in the Marco and Astro streams, but I don't know how familiar people are on how the tree actually works or web components in the shadow DOM
[01:05:34]  are the exact same, um, mechanism. And I'm going to, I'm going to do the circles because that's what everyone does here, but essentially any partially hydrated
[01:05:45]  app and let's make them feel great. You're good. The root of the app is going to be rendered on the server. Okay. And maybe underneath it,
[01:06:00]  you're going to have a few other, a few other server modules, but at a certain point, you're going to hit client module. I'm going, I
[01:06:17] 'm going to, I'm just going to, I'm just going to put a couple more down. Okay. And then let's be that and let's make the client
[01:06:22]  modules look like this. Okay. Beautiful. And you'll see trees like this used in the examples, a bunch where they, where they show, um, where they show
[01:06:39]  this kind of weaving of client and, and server, um, components, so to speak. But I don't know, this isn't the most, how should I
[01:06:53]  put it? This isn't the most accurate or easy to visualize tree here. Um, because the truth of the matter is the server tree and the client tree are completely
[01:07:06]  separate in that a server, a client component is not allowed to actually have a server component inside of it in terms of like partial hydration. This is true of Marco. It
[01:07:20] 's true of Astro. So if we're just focused on this side of the tree, I can kind of explain a bit why, how I have this server component
[01:07:30]  under this client component. And the reason for that is, um, let's think of the best place to show this, um, is, I mean, we've all
[01:07:39]  kind of seen this for, I'm just going to open a playground just because it's easier. But essentially, if you have some HTML, like maybe, let me
[01:07:52]  blow this up a bit. If you have, if you have some HTML like this, a div. Okay. And then inside that div, you have, you know
[01:08:06] , a component. Okay. And inside component, you have a span. Okay. He passing his child. Hopefully everyone can see this. What ends up happening is, if
[01:08:28]  this was a web component, what you see here would be considered the, the light DOM inside our component, you know, let's pretend we have a component here.
[01:08:41]  We can have our own representation, right? We can have our own divs and spans and spans and whatever, whatever. Right. And we can, I don't
[01:08:57]  know, each one. You can insert our children wherever we feel like in this tree, but from the outside perspective. It's like, just so broken, whatever I
[01:09:22] 'm doing, I like broken syntax highlighting even. I don't even know why. Oh yeah. It's because of this, not closing. Okay. From, from the
[01:09:34]  outside, you don't see these internal children, essentially. Like you just see this. And if, if this was like style style doms or shadow dom styling and
[01:09:44]  web components, this span would be styled the same way as this div, even though it gets inserted here, it actually is part of the parent tree. And this works
[01:09:57]  in a sense, because in the dom, for example, these are eagerly created. Like this span is created with this tree. And essentially if you had a conditional
[01:10:10]  that was like, you know, false or, you know, you know, whatever, um, or, you know, false. Show and props children. The child might
[01:10:26]  not even choose to actually run it. Like insert it. But in these models, this has already been created. You can't avoid the span from being created. It
[01:10:41]  is created in this parent scope. The child can choose not to insert it in its, in its own representation. It might never make it to the final dom, but it
[01:10:51]  is created as part of this tree. And this is how you can get fancy with islands and partial hydration. Well, maybe. Quite possibly. Yeah. Yeah. And
[01:11:18]  that's what I'm trying to get at. I mean, in the case of the web component, technically, this is also a dom element. So it's created
[01:11:23]  at the same time. Um, but like from a pure, like from like, in a sense, this whole representation is great. I think the virtual dom actually works kind
[01:11:35]  of similar to this as well. Like this representation is created and then it gets inserted. This is very different than like the, you know, there are other patterns where you
[01:11:46]  can do like render props and that's how you can lazily render them. Right? So if you do render props, then you don't have to render this until
[01:11:54]  the, the, you know, they, they call it, but generally speaking, this is created as part of this template. Well, JSX in itself builds whatever
[01:12:07]  you want it to generally, it's usually like a virtual structure. Um, in, in solid, since we use real dom nodes, for example, we always lazily
[01:12:16]  create everything because we don't want to create this unless it's shown. But this is, this, this model I wanted, I wanted to kind of show, um
[01:12:23] , show is that generally speaking, if you're talking web components with like dom and shadow dom, or if we're talking partial hydration, uh, this is how this works
[01:12:34]  because with partial hydration, taking this example further, you can say that this is our server component, right? And this is our client component, right? Hopefully you all are
[01:12:47]  following so far. And if we, if we, if we do that, essentially we know that this is only rendered on the server and this can update and stateful
[01:13:01]  on the client, maybe it has some, you know, some state, right? But like, regardless of whether you're talking Marco that automatically analyzes and finds this,
[01:13:14]  or you're talking about Astro, which goes, oh, this is a framework component. Um, essentially you have this, the, you have these trees. So
[01:13:22]  when, when, when you, when you see a server part, part underneath a client component, it's because of this, technically this span is still part of this server
[01:13:33]  component. It's still part of the server tree. If you think about it, it makes sense. While this client component could choose to render it or not render it,
[01:13:44]  it can't, it has no way of changing this part's contents. If you think about it, like, there's nothing, this is still following the stateless
[01:13:52]  rules that still can't be updated. So we know that this will never technically be re-rendered. As long as you evaluate it ahead of time, as long as
[01:14:02]  you can pretend that props about children is literally holding a span in it. It's not lazy. It's literally props children equals span. This works because you can choose
[01:14:15]  to show it or not show it, but essentially this is still part of the server tree. And that's what I was trying to show here is that technically speaking, this
[01:14:24]  server is actually part of this one. And you can't actually like inside the client component, server components are not allowed. This is, this is basically the rule because
[01:14:36]  any, in here we don't know, like, as I mentioned, this props children here in our example, we know that it's, it can't be changed.
[01:14:44]  We know that it exists. It's just like static. If we created a server component under here, like another one, we just went like, Hey, server.
[01:14:54]  We don't, if we, it wasn't initially rendered, perhaps like we, we, we don't know that. And. You know, it could be affected by
[01:15:04]  state too. Right. So this is this. And the thing is, even if we were smart enough to kind of figure out a pattern where we could do these disconnected
[01:15:16]  server trees, this would be kind of terrible because it would cause waterfalls innately because essentially if, if, if, if, if we, if we have, you
[01:15:32]  know, cons data equals fetch data or something in here, like we're, we're doing some data fetching on the server and we fetch our data and we,
[01:15:45]  we say we pass something here, like data field one here. Okay. I'm just gonna do this. Okay. The thing is, depending on whether we, the client
[01:16:00]  decides to show this, decides whether, um, the server component can render. And this is kind of awkward, like the, the nested one, because let's say
[01:16:11]  we go, Oh, let's re-render this top server component. I'm going to call this one server two, just not to confuse you. Right. At the
[01:16:19]  time of fetching, we don't know what props this would have, or what input this would have. If we could nest it, we actually have to go to the
[01:16:28]  server up, do some work, pass it to the client component, have the client component update, and then go to the server. This, this returns the waterfalls back
[01:16:37]  to the client. This just doesn't work. Right. There's a reason why even react server components don't work this way. I thought they did initially. And
[01:16:46]  I was like, Oh, that's kind of weird, but they don't, they actually are the same as Astro and Marco in a sense, in terms of
[01:16:53]  the way that these, these rules work, because essentially, as long as you can't nest them in the client components, but you can put server two here. If
[01:17:10]  you think about it, cause it's still in the server space. As long as they're in like continuing that chain in the server, when this changes, like when,
[01:17:24]  you know, you have to re-render this, you can address this all at the same time. If this was fetching different data. Sure. You have water
[01:17:32] falls, but the waterfalls are on, on the, are on the server, essentially within that single request, you have the ability to hit all the server components, which
[01:17:44]  kind of leads to the difference. Okay. Yeah. Sorry about that. Yes. You're right. Sorry. Yes. My, my, my demonstration here was that
[01:17:59]  this server component is fine out here, you know, inside our server component one, we can put it. And if we put it, but we can also even put it
[01:18:08]  in here and nest it inside the client component, as long as it's this way, because there's no way for the client to pass data to this. So we can
[01:18:16] , we can basically know whether we have to re-render server two and server one purely from like on the server. We don't have to go back to the client
[01:18:25] . That's, that's essentially what I was trying to show here. So I kind of got ahead of myself and I was talking about react server components, but when talking
[01:18:40]  about partial hydration, this, this, this is basically the key rule because you know that you know, that this will never re-render on the client, the way
[01:18:50]  that Astro or Marco or works, um, essentially you have this great ability here because the, the only, the, the only thing that can possibly change is the state
[01:19:09] ful stuff inside the components essentially, or their children. And the only data you need is field one in my example here. So you could fetch a giant blob on the
[01:19:22]  server, but you only need to serialize the one field from the blob because technically speaking, you know that the rest of this data isn't reachable from inside the client
[01:19:34]  tree. this is, this is like the, this is part of, this is the secret here. Um, I, I don't know if frameworks like Astro
[01:19:41]  leverage this yet, but this is like why, how Marco can basically serialize no data, like solve them, solve the double data problem in a sense, because you know
[01:19:51]  that all you need to serialize your top level inputs. This behavior also is why, um, is, is key to how, um, quick, um, does
[01:20:01]  out of order, um, hydration. In their case, they don't have explicit islands. They don't know what is server client at all. They lazy load based
[01:20:13]  on what you interact with, but the only way you can hydrate stuff out of order is if this is always, always eagerly evaluated because then you can go, okay
[01:20:25] , I know that I'm not responsible for the children here, that they already exist. So you can basically treat them like, um, like they're static, even
[01:20:35]  if they are dynamic. So, I, I mean, I, I can attend it a little bit, but I just want to explain, this is one of those like
[01:20:42]  interesting quirks, like we're, we, we, on the server client boundaries, you have Astro that's very explicit where you're like, this just has
[01:20:52]  to work this way. You know, this will never hydrate, um, or because it's part of the server tree in Marco, you can write stuff however the hell
[01:21:02]  you want. Um, but it will find this stuff and go, oh, this is part of the server tree. Like essentially you don't have to think about it.
[01:21:10]  It'll just, it will, it will kind of make the decision based on how you structure your code. It's still beneficial today in Marco because there's no subcomp
[01:21:18] onent hydration to, to basically know about this. You can use this trick to add some stateful code and still not send all the data. Cause you can pretend what
[01:21:30]  if down here picture picture, our server comment here, picture this is like a post, like a blog post, right? Right. So we fetch our post and then we
[01:21:41]  need a stateful component because we need the ability. Um, so we pass maybe the ID or something. We need the ability, um, to, to like it
[01:21:52] , but maybe we don't want to send the content of the blog post. Well, if you, if you actually have another server, server component down here that actually is
[01:22:03]  responsible for rendering the blog post. So it, it takes all the blog post data. You actually don't need to send the blog post data to the client. You just
[01:22:15]  need to send the ID. So it has the ability for people to like it and do requests based on that ID, but you don't actually need to send any of
[01:22:22]  the data. Um, so essentially this is, this is kind of the, the mechanical aspect of how all these kind of frameworks work. Right. Um, sorry,
[01:22:42]  I didn't, I didn't finish my little example here. I was saying that Astro, you, you have to follow the rules and you're explicit about it.
[01:22:49]  Marco will detect the scenario and decide where these boundaries are. And then with quick, you can never have your children always have to evaluate eagerly because any component could be loaded
[01:23:01]  out of order. So you could, you basically can never have like render props. Okay. What does this have to do with react server components? Yeah. There's
[01:23:12]  a question here probably, but as you'll see where I'm getting here is I did this too. We're asking the wrong questions. it isn't about how we
[01:23:25]  can get around this shortcoming. This, this is powerful because of the way that you can basically save sending the data. Like we, we, we saw this, um
[01:23:37] , we saw this like on the, the hacker news examples that we've been, we've been doing here. Right. Like it's not, you're going to
[01:23:47]  see this on remix and you're going to see this on every other, every, every framework that goes in here. When, when we go in, there's going to
[01:23:56]  be, I mean, I saw, where is it? Um, how can we sell it? Where is it? There's that huge blob of, uh, maybe it
[01:24:10] 's easier to see it from the network tab because I can blow it up, but there's that, there's that huge blob of data. Um, let's refresh
[01:24:19]  the page. It's a huge blob of data that, that shows up on pretty much every SSR page ever. And yeah, see this big blob. I'm sending
[01:24:31]  all the stories over the wire here and all again, serializes HTML. Whereas with a partially hydrated framework, like, uh, like, uh, like, uh,
[01:24:46]  what's it, what's it? Uh, why the second one, I have the link some, I have the link from the last stream, two seconds. Um,
[01:24:51]  do, do, do, do, do, do, do, do, do, do, do, do, do, do, do. It's funny. I
[01:24:58]  didn't have, because the stream was about Marco. I didn't actually copy it down. Um, wait, let me just start typing and hope that it works.
[01:25:08]  Yeah. With, with, with, with a framework like Marco, you, you, this is all, this is, this is all the stuff. I mean, I
[01:25:23]  can show the network here. Um, um, you don't act, it doesn't need to send any of the, the extra data. There's a, there
[01:25:32] 's the script to move the stuff into place, but essentially none of the data is serialized. And this, this is the advantage of, of partial hydration and, and
[01:25:38]  server components, all this technology. It's not just sending less component code, you know, like zero cost components. It's actually, you, you remove the data
[01:25:49]  serialization cost. Um, as well, you actually make your HTML pages smaller. You, you solve both the template problem and you solve the, uh, the data problem
[01:25:59] . So getting back to it, what, what, what, what the hell is react server components? If, is it just partial hydration? And the answer to that question
[01:26:07]  is no react server components are, are kind of crazy because on one hand, they have this restriction, um, the same as all the other partial hydration frameworks, but
[01:26:20]  react being react is like, we don't want to be an MPA. We want to render in the client. So the biggest ironic part about react server components for most
[01:26:29]  people can be is they basically always render in the browser. I know they're called server components, but they actually render in the browser and you, which you're like
[01:26:38]  what essentially you, they create server components and this whole mechanism is basically a client side mechanism. You can SSR initially, although I don't believe like they've ever shown
[01:26:51]  a demo of that doing that, but essentially you have, you have these top points, you know, where we have our client components and basically where we enter in there,
[01:27:03]  let's, let's, let's, uh, let's kind of do a little drawing here, like around here and I'm sorry, not that. Sorry.
[01:27:12]  Basically if we around here, around here and maybe around here, our top most client components have props that come in and essentially our hydration routes. So you can picture it like
[01:27:30]  you typically call hydrate on, on these, on these ones when you sort of render, but they basically update like three independent apps. And this is the same,
[01:27:39]  they're islands essentially. They can have other client components under them or whatever, but essentially they become automatic islands. But the difference is with react server components at any point,
[01:27:52]  you can just go, even though you can't tell the server components, like give them state or props, really, you can go, re-render the whole page
[01:28:01]  with the new data. So any of these components, any of the ones here can go, okay, you re-render, or maybe, you know, maybe this one
[01:28:16]  can do it. You can go, you re-render, so they basically tell the whole page re-render. It's like an MPA. It's like
[01:28:24]  you, you click a link and you re-render the whole page. And if people have seen things like Turbo, or like, Turbo, which is used by Rails
[01:28:35] , which is used by Rails, you might go, is that really kind of clunky? Because what, what Turbo and Rails do is, even though you're in the
[01:28:42]  client and you've, and you've rendered it, essentially, you, you, you have, you have a shell for your page. And, all right, and let
[01:28:55] 's remove the hashing transparency. Okay. And then, inside the shell, you might have, like, you might have the nav, and then underneath you have your
[01:29:09]  main page content. So I'm going to, I'll draw a nav, I guess, as part of the shell. So we have our shell, and we have our
[01:29:17]  nav, and then we have the page content. And as you navigate, it does full page reloads of the HTML underneath it, essentially. And you, you might
[01:29:26]  be thinking, okay, well, server components like that, they're like semi-MPAs. Some of the MPA frameworks are looking at this. They're going,
[01:29:33]  okay, well, can I render an MPA in here? Because if you render an MPA in here, your root goes back to being static again, and you can
[01:29:39]  just hydrate the islands like we've been doing. Right? But React server components are, are, are not that. They, they start re-rendering right
[01:29:53]  from the root again, like an MPA. They're not swapping out the HTML. Instead, I, I don't know how many of you are familiar with,
[01:30:01]  with VDOMs, but essentially the, the classic thing was when you call in a VDOM, when you call, um, render, you render,
[01:30:12]  you know, your tree. So you render, you render your document. And then the next time you call render, you render a new document and let's make this one
[01:30:26] , uh, like green. Okay. And then over here, somewhere over here somewhere you have the actual dom okay and turn up there you have the actual dom and
[01:30:51]  every time you render you just go okay what's the difference between this and this what's the difference and then any little differences you find apply them to this and you just
[01:31:07]  repeat this cycle right of of next previous and the dom so you just do this this process and in the middle you have um this process is called diff and this process
[01:31:37]  is called patch okay so you get the next state you diff it with the previous state then you patch the dom that's that's a vdom for you all react is doing
[01:31:49]  with server components is sending the whole page the next they just send this this the biggest difference is suddenly this like this all happens on the client for normal react component now with
[01:32:04]  the server components this happens on the server and then everything else here happens in in the browser that that's that's the secret of server components essentially they they render they do they
[01:32:17]  render that component on the server as in they make the vdom like the the the version of it send whatever uh temporary artifact they have to the to the to the browser
[01:32:29]  where the browser can like go oh is this different than what i had before and then it can patch the real dom and the key is they treat these islands as just opaque places
[01:32:40]  that they don't update now we haven't looked into this yet and i haven't so i haven't confirmed it this but this is this is this is to my understanding
[01:32:49]  how this works so essentially they they can retain client state even because they're not inner htmling they're not trying to like go oh where's this component and keep
[01:33:00]  or where's this like dom element and keep it there they literally it's the same vdom diffing that they have always done and like if you're doing a big navigation
[01:33:10]  you're kind of re-rendering everything anyways right so why don't we just re-render the whole app well yes and no though because do you know what's
[01:33:23]  really cool about this and and this is where this is this is where where we're going with this is that what they've achieved by doing this is you are getting that benefit
[01:33:34]  i told you about data serialization you are not sending the server components you know as part of that initial bundle so you are getting smaller size but at the same time it
[01:33:45] 's not an mpa if you had an input field down here again i don't know why you have an input field in the in the stateless part of the app but
[01:33:55]  let's pretend it wouldn't lose focus if you have child components and you're navigating or refreshing a search or something they aren't getting blown away you're not just entertaining
[01:34:07]  thing it's not clunky like turbo is and you might be going well why are they doing the whole page well consistency it's it's kind of like when in remix when
[01:34:18]  you do a mutation we you just refresh all the data along the route you know like it's copying the multi-page app paradigm without without reloading all the javas
[01:34:34] cript assets and losing all your state they basically are building a browser inside the browser so listen this is not what i thought they were when i originally looked at server components i
[01:34:57]  thought i was like okay you know what's the big deal like so you don't send you know uh some lodash stuff to the server a good a well-written
[01:35:06]  api could do the same thing but this is actually react virtualizing the browser in the browser and you're like well why the hell is react virtualizing the browser in the
[01:35:15]  browser well it's probably part of their bigger plan this could probably work on platforms outside the traditional web i don't know exactly and in a sense vdom diffing your
[01:35:24]  whole page all the time probably isn't that performant but again who cares right and this is a technique that's uniquely react it's pretty much impossible to to do this without
[01:35:37]  a vdom or it's very challenging i wonder how you would do this but on the positive on the positive these trees are completely independent and that's really powerful because just
[01:35:57]  like astro and partial hydration i kind of wonder are server components a framework agnostic mechanism i actually went around and i started tapping people like ben from slinkity
[01:36:12]  and i started going to astro chat this week and just going like hey you guys are going to implement server components and they're like what like i don't think anyone really
[01:36:18]  realized this when i looked closer at it i realized this is very it's just like because the tree is completely separated because they had those rules that are exactly the same as partial
[01:36:29]  hydration rules it seems possible that you could basically weave a vdom diffing framework around an islands framework and essentially have framework agnostic um it's kind of server component
[01:36:43]  architecture and you might be like well it's not framework agnostic if your server components are like a framework but the thing is think about the quality of the qualities of server
[01:36:53]  components they don't have state right they can't be stateful they can't do updates in the client they are for the most part just templates that do data fetching
[01:37:04]  so yeah sure it's nice to write them in your same format like you know if if you're using react use the jsx it kind of fits in seamlessly or whatever but
[01:37:13]  think about it if you're using something like astro you already have astro files it's just a different compilation of astro files is one way of looking at it
[01:37:23]  there are trade-offs though you know conceptually you can see it with partial hydration there's like no runtime so you just send the islands as you need it maybe you lazy
[01:37:34]  load them but you just send the island code and you just it updates and does it you send the least amount of code you need this needs a runtime to do all this
[01:37:43]  diffing you basically need to always load it in the browser so this is better scaled for larger apps you know like as i mentioned before this actually makes react i think 10k
[01:37:52] b larger so like you're at 50kb with react even before you started but this is kind of why i don't see it being quite the same but for large large
[01:38:04]  sites maybe this is a good scaling option so yeah like don't feel bad if you don't get this right away i didn't i looked at this stuff for a year
[01:38:17]  and i didn't really click on me because you start going well how the hell does routing work then you're not using react router you just tell the server like i moved to
[01:38:26]  a new location honestly i have a lot of questions this is what i've kind of figured out simply from reading stuff but maybe we should try it let's let's let
[01:38:37] 's look and see how server components actually work i'm i'm excited about trying the demo app because maybe that can give more insights right so let's let's let's uh
[01:38:52]  let's let's open up the demo i'm glad i actually installed it earlier i actually i didn't i didn't leave it usually i leave these things last minute and then
[01:38:59]  i install them like while i'm working on the stream and i'm so glad i didn't this time because you actually have to have postgrads installed and stuff and
[01:39:07]  i actually ran into like some some issues there because i was like i didn't have it and i was like oh damn it this isn't going to work i can't do
[01:39:14]  the stream today but luckily i figured it out and realized that you know read the read me probably a good recommendation for anyone so i have the server component demo for anyone so
[01:39:29]  i have the server component demo that react uh had uh in that original video so let's let's take a look and see what we're dealing with right um i'm just
[01:39:36]  going to put a banner up one second i'm kind of excited about this because honestly i just got the page up and then i was like okay that's it let's
[01:40:03]  let's let's look at this first time do real live um um uh kind of reaction to this stuff so okay we have a project and it has notes okay this is
[01:40:17]  probably what they used to seed the data because the demo has some notes actually you know what maybe we should open the demo window first just so that we can see what we're
[01:40:28]  dealing with here it's on port 4000 that's an unusual one okay yes okay so um for those who haven't seen the demo um so essentially essentially it's a note
[01:40:38]  app we have notes on the side and a search okay yeah yeah yeah okay search and you can create a new note okay and then oh oh what what wait a second and
[01:40:54]  you can click and look at the notes oh it's not even using browser history i was like naturally it was like how do i go back so i click back and it takes
[01:41:05]  me right out of it so yeah this is what i'm talking about routing being a different consideration here there's not there's not even browser history i'm sure like they
[01:41:14]  can address that and have ways of of doing this but just it's kind of it's it's kind of it's kind of interesting okay so let's let's move on
[01:41:24]  okay so public um okay just static assets scripts some stuff for building okay okay this looks like express server this looks like just a typical express server server this looks like
[01:41:49]  just a typical express server okay yeah okay i i kind of was heard about this but i think the way this works is was it's not that fancy but i think server components
[01:42:03]  work off a single end point um the and the as i mentioned it makes sense because you re-render the whole page and you did yeah based off that state okay we'll
[01:42:15]  look into this morning but essentially this looks like where they set up their notes for their api post so that you can create notes yeah yeah update a note delete a note
[01:42:24]  yeah this is a rest api and the react server point so this is just your server entry and then this you know like the your server code and then here is our whole
[01:42:33]  tree of server and client components um all kind of co-located with each other here's our entry app okay okay so we have our header and we have our search
[01:42:49]  field search field is client component we have our edit button which is a i feel like you'd be doing a lot of that i mean maybe you should use naming conventions but you
[01:43:00] 're kind of like which one's the server component and they have a suspense boundary interesting in the server component so you can suspense in the server component around a note list and then
[01:43:06]  you have a suspense boundary the note list is a server component so they're rendering the notes on the server so this is probably again so they never have to serialize that
[01:43:21]  data and send it to the client you avoid the double data problem and you just send the html and then suspense and then note notes selected maybe there's some editing
[01:43:34]  information notes selected it's also serving component okay cool so all right is there anything else in the project okay so we're going to spend most of our time looking at how
[01:43:52]  these occlusions work but essentially yeah this is funny because this new probably technically is server rendered but the edit button is client but the new can never change okay okay well
[01:44:07]  let's look at the demo for a minute and and let's get our console open because we probably want to see what happens first of all i think they mentioned in the read
[01:44:16] me that this is client rendered not server render so i'm sure the initial page load is just the pits yeah okay yeah let's not worry about that but essentially we have our
[01:44:29]  html and let's look at our html yeah so so yeah this is like a full like div root dip yeah this is just a client's rendered app
[01:44:37]  like here's your mount point and then main okay yeah so this is like your vendor bundle or like your thing no it's small it's only 268 i mean let's
[01:44:54]  move let's disable cache i don't like cache yeah okay 283 kilobytes yeah okay yeah this is this is this is this is this is this is this is
[01:45:04]  react okay and then client so these are probably the separate islands client five client one client six these are probably the the separately isolated client islands code each separately lazy loaded and then that
[01:45:22] 's it for the javascript and then this looks like a request request to the react endpoint okay cool i don't know if anyone see this this this must be their
[01:45:30]  their format i guess there's no prettier on this but it's um it's like it's like it's like it's like almost like a b dom node and thing or
[01:45:40]  it's like or maybe it's like almost like jsx children yeah it's basically encoded yeah it's basically encoded view code you can see class name sidebar
[01:45:51]  stuff like that okay so that's cool now when we select a node it renders some stuff and i guess it renders this we know already this is a server component
[01:46:05]  and it needs to update this but this list is a server component um but maybe it's but i think it's wrapped in a client component um let's look at the
[01:46:17]  request because it did another request on the new location it's funny because it's not reflecting the url but huh see oh that's funny yeah so you can see it's
[01:46:27]  it's going from the top because it's it's the the data is actually almost identical it just added this line at the bottom or it added a line in here um ul
[01:46:38]  and then div it adds like this line at the bottom which i'm gathering it was adding this so this is just new stuff but generally speaking you can see it's the
[01:46:48]  whole tree kind of being rendered so if i click here again will this basically be the same yeah so every time i click react keeps on sending the full page again oh wait actually
[01:47:02]  no wait wait wait wait wait wait okay let's let's let's let's watch that again let's we only care about the ajax request let's watch that again
[01:47:12]  so we land we get our initial data we select one it shows it we select two it shows it we go back to the first one it doesn't show it okay so they
[01:47:21] 're caching the same location it looks like i don't know if they always do that but they seem to be doing that in this demo but essentially if you look at each
[01:47:31]  request as we select we select them it's like 99 the same data being sent over and over again because the stack part of the page doesn't really change much that's
[01:47:41]  interesting but i guess it could that's the that's the that's the point i guess that's like an optimization they can probably decide not to send the whole page if if
[01:47:50]  they know that but generally speaking it's this is interesting okay let's jump here so new again cache it so right now basically the first time you load a page they load
[01:48:01]  it and then it gets cached and it never happens again this is even when we need to save them the cache so this is like a javascript level cache in in
[01:48:07]  their app that's doing this behavior different reactions i love it yeah i mean it's it's it's interesting right i mean you you can tell that this is super powerful
[01:48:26]  in a sense i mean on one hand you're you're kind of like i don't think i mean this is obviously dev mode and whatnot but obviously not everyone wants like the
[01:48:38]  full react package like there's a lot of javascript for for a solution that's all about no javascript um but i i i but like uh let's
[01:48:52]  let's oh i'm i'm also in fast 3g that's why this is so slow sorry let's refresh yeah there we go we we're still we're still in
[01:49:02]  slow-mo mode from when i was uh doing the benchmarking okay that's a little bit better yeah but same pattern okay so interesting it it does seem wasteful in
[01:49:15]  a sense but you you you start thinking maybe there's like ways to optimize this um but essentially the reason it's always the same is because it's not the dynamic parts um
[01:49:24]  that are changing so let's let's do a search right like how does that work let's go here and go like click w okay what what that was the new one
[01:49:41]  let's let's clear the council console again okay original state doesn't matter but now we go w clarity to w let's do um um m okay there we go yeah
[01:49:58]  i wonder i have this it's hard to see because we'd have to like pull this out i mean there's no formatting this like with a prettier type thing because it's
[01:50:09]  like its own thing i don't think preview looks any nicer than response it's hard to tell the differences my my assumption well let's let's do this let's let
[01:50:23] 's let's let's just do this let's what like text diff text compare does that load up i'm just i'm just curious sorry if not everyone is curious about
[01:50:36]  this as i am but i just want to kind of understand what like a little bit better what's going on here so let's load our initial page and get the location get
[01:50:48]  this stuff put it on side a it's it's a special format uh i think it's streamable you notice how each key is independent it's not all connected i
[01:51:00]  think it's because they can actually stream it in chunks um and it's that's what is it w and it's um yeah okay so essentially you're seeing the because
[01:51:27]  the those that list is server rendered we're just seeing this part of the json essentially removed from the results that's what that's what i was expecting to see but
[01:51:40]  yeah it's interesting as i said it's it's it's a little bit hard to read but i don't think this is supposed to be human readable but you can tell
[01:51:48]  each one of these keys is independent it's not tied to the same object so you can serialize this in a session this is a special json format that's made specifically
[01:51:56]  for this but it's uh yeah basically re-rendering the whole page and then doing some sort of diff against it to to make it render in the client i mean
[01:52:08]  this is this is pretty cool stuff because as i said they don't need if this was ssr in like they don't need to actually send the data um except for
[01:52:18]  what would be what would be an input to a component let's let's look at the project are there any components that that take any interesting data they are stateless yeah
[01:52:35]  that's the whole thing server components aren't allowed to contain state um which is um they basically just get called with their location or their input essentially and it makes sense because
[01:52:49]  as i said in partial hydration you can't have stateful components because they could re-render so it's it's actually perfectly consistent with the partial hydration model right but
[01:52:57]  i i don't think that gets persisted per se i mean you can make a caching layer if you want like outside of it but like yeah like essentially it's it
[01:53:08] 's like an api request or like a like restful thing you just request with the input and then it does the work fetches the data does whatever i'm assuming that
[01:53:19]  each time it probably fetches the data and then renders what it needs to like pretty typical thing like pretty typical thing it's just all bundled together okay but i
[01:53:28]  was interested though was do do any of the client components have input and the problem is this one's a server component this one so let's look at node server component and see
[01:53:39]  if it has any client components see these are static there's nothing oh right but it makes sense because server component can't be but it could no but no no no see
[01:53:52]  that's that's too bad it's funny in a server component passing different arguments here like passing a variable here would be perfectly okay um because each renderer could actually change what
[01:54:06]  that value is and send it differently um without being quote unquote stateful but it looks like our client components in this example edit button edit button don't have any actual dynamic
[01:54:22]  props okay the id is dynamic okay interesting if is editing this is gonna be so hard to actually see though i think that's for the tricky thing yes yeah i unless you
[01:54:51] 're driving it from the input you're literally not allowed to use hooks inside server so yeah i don't know if we're gonna be able to diff this but it's
[01:55:16]  interesting because i kind of want you're kind of interested because you're like okay if i if i let's forget about this let's close this again if i get into
[01:55:25]  this preview here um or inspect this element and then i click on it yeah like you saw it like it's it's a fine-grained change like it's it's
[01:55:38]  been diffed and patched only in this one specific place because the the interesting thing for me is this component is server rendered technically but but the but but but but i
[01:55:49]  think the wrapper i'm not sure if the wrapper comes in on that what's this and this this is uh that that up i don't think that up actually made another request
[01:56:04]  we get that one and then we press the app no the data was already there okay yeah it's interesting because this whole ability to toggle this i think that that's kind of
[01:56:13]  what they're displaying the power of here because this is server rendered but this toggle this is client wrapper around a server component right so i kind of want to i kind of
[01:56:29]  want to see what the code for that looks like just to kind of get an idea of of i'm pretty sure it's just the transclusion that we've been talking about
[01:56:38]  before but if we go to notelist server there's a sidebar note which is a shared component which means it it matters where it's rendered under but since it
[01:56:49] 's rendered under a server component it's technically a server component here and then each sidebar note also has a client component in it and the client component yeah this this this is
[01:57:03]  a perfect example of what i was looking for right the the client sidebar note wraps the sidebar note so the actual note itself has a title um and last updated at
[01:57:20]  which is what we're seeing here see title last updated at and then this description isn't part of the server side of it they they well actually they pass it here who
[01:57:38]  wants to bet that this is still server rendered even though it gets because it's getting passes as a prop see they're passing jsx as a prop here it's no different
[01:57:46]  than setting children if you think about it but essentially interesting and then they pass the id and title to the child okay okay let's look at it this is this is the
[01:58:02]  kind of thing that that that i was looking for so this is client sidebar note usually let's try location okay this is this is probably how they do their routing i
[01:58:18] 'm going to guess but essentially we have some animation stuff we have our button that goes back and forth and then we click it they start a transition this is a react transition where
[01:58:34]  they set the location so they know that it's going to take kind of thing so they they can do the pending state so they don't this is the transitions and suspense
[01:58:43]  are so key in all these technologies because they kind of smooth out all these async interactions and then basically based on the the client side is a expanded thing they either show the
[01:58:56]  different chevron and then shows the show expanded children and expanded children is the prop yeah okay so that's the it's exactly what what we were thinking i don't
[01:59:13]  i don't know why there's there's oh it's it's summary that's why i can't see it okay it's summary except smart so essentially this going back
[01:59:26]  to our example here both the minimal or not nothing here in this case so both the this view and this view are server rendered but the client um component controls whether to show
[01:59:46]  it but it actually isn't responsible like the the server component passed in the essentially the rendered html um as props so this this is this is the perfect example of what
[01:59:59]  i was talking about so essentially nothing about the note needs to be sent to the browser like if this was ssr this is all client rendered but if you if this was
[02:00:09]  ssr we wouldn't serialize the data for for the note and the cool thing is we can keep on up updating it essentially i think that's the next thing
[02:00:20]  we want to look at right um because we can we can update this right you can even link so if i go in here and click edit okay now i'm sure this is
[02:00:34]  all client side but i want to see it update the the server component that we have selected and expand it on the outside so i've added this thing okay so we got
[02:00:51]  some client side mirroring going on here this thing is is cool period space now when i click done let's watch the sidebar and see what happens this is cool yeah
[02:01:06]  yeah so this this is this is this is sort of the the mechanism let's let's actually let's let's um let's look a bit at that edit experience because i
[02:01:22]  want to find that done button handle save request location blah blah blah await save and then navigate which again should react writing their own router don't tell the remix guys like do
[02:01:46]  you see what i'm saying it's like they're navigating it's like they're bypassing the whole like like like the whole browser like the whole experience that we've
[02:01:57]  come to kind of expect from from from client side as i said i suspect as much as sort of confirming what i'm saying is this is a different paradigm like completely this is
[02:02:08]  like this is like mpa like virtual mpa so like how can we recreate mpa without you know reloading everything so yeah they await the response and then they navigate
[02:02:23]  and then because they navigate i don't know how navigate works i think we'd have to like reverse engineer the router but let's pretend like can i get a let's pretend
[02:02:31]  we understand how this works um essentially i wonder if you can kind of like can like have a redirect in a sense have the ability to basically go oh actually while we're
[02:02:43]  here let's redirect to in front server tree and re-render it within with the new data um actually well actually this is the client navigating isn't it that's weird right
[02:02:54]  where are we note editor is that us that's a a client component it's saving the node where save node and then it's navigating use mutation okay so it's posting
[02:03:09]  okay let's let's let's do this again and watch what we get in the network i think it's actually doing two trips but which is fine it's probably like uh
[02:03:20]  i was thinking it'd be interesting if the mutation model could be part of the same thing like think about it like a form post you post with the data and then you
[02:03:28]  get back the new server stuff but that would be kind of cool right so let's edit this again all right and go cooler okay i did not see an ajax request just
[02:03:47]  this so they are doing something smart here i don't know what save note is or use mutation is doing it's funny it's like a codified route thing but otherwise
[02:04:15]  yeah it's a pending state and thing it'd be very easy to turn this into an optimist take updating mechanism i've been looking at this recently but let's decide
[02:04:25]  the point it doesn't no it doesn't appear to be sending a post request so it must be handling this it must it must be handling this like that's what i was
[02:04:39]  looking for i'm like where's the post request because the way the code's written makes you think that but look request payload see we haven't been looking at the payload
[02:04:49]  but most of the time when we navigate it's just like here's the new navigations thing but when we do this it actually did send a body and title so it is
[02:04:57]  doing in one trip like we like we thought the code made me confused because like how does this work but essentially they're posting it's it's like a form post they're
[02:05:06]  posting the data and then re-rendering this the server on the on the way back up this is this is really cool no this demo doesn't this demo doesn't
[02:05:18]  have graphql or anything fancy i don't know how the api works exactly but essentially they're just going okay we're on the client we're going to send this
[02:05:29]  data and against the react endpoint it's going to i guess realize it's a post i don't even know mutations must get registered in some way and then essentially yeah this
[02:05:47]  this is interesting okay yeah yeah so it's a combination the location is like the url that tells you where things could you see is editing false like kind of lazy here
[02:06:03]  but let's let's let's let's uh let's get a tool what is it like a url decode or something let's let's just decode this ur
[02:06:15] l and see what the location looks like select yeah so on the url they are sending the the location information and then in the body they're sending the data they're
[02:06:29]  updating so and then it's a put okay where this one is a again like it's literally like the browser right like you're they're like putting or posting to to uh
[02:06:45]  resource locations and then responding with their their re-rendered uh browser page yeah exactly this this isn't we were looking at remix earlier right using this kind of like rest
[02:07:06]  like location based thing like posting back to your own page and that this this is essentially the same model but done with a virtual browser see the this i don't know when
[02:07:22]  when when you heard about react server components was this what you were thinking it wasn't it wasn't what i was thinking as i said i got that hint when i realized like
[02:07:32]  wait this works like partial hydration a everything starts clicking once you once you make that connection and for some reason that original demo didn't do that for me like i i saw
[02:07:50]  it and i was like oh okay they they're just uh doing some fancy diffing over the wire but this this is actually an mpa paradigm like they're actually doing
[02:08:01]  server-side routing and and basically full page postbacks like rails or remix um but using a completely different paradigm and using completely different libraries this is yeah this has got to be
[02:08:16]  like the long-term game i don't this is so crazy though right when you kind of like piece this together you're kind of like huh like stuff that you've
[02:08:28]  taken as the backbone of your apps like react router like what makes remix remix does that fit in here this this isn't this isn't the web anymore this is like react v
[02:08:39] m machine right but it's kind of cool and i should have done this early like ages ago i don't know if i would have appreciated it as much you know a
[02:08:55]  year ago but man this is so much like when you look at the benefits you're like oh okay it's so you don't have to send data or you you know this
[02:09:04]  is a really nice model for uh for data fetching you know like you you can kind of like you know this is not an api thing this is like this is this
[02:09:15]  is this is mpa and this is mpa in the bra in the in fully mpa in the browser sort of thing okay what else can we look at here because
[02:09:24]  that that's that's the moment i didn't even know i i didn't even know it worked like this this is this is really cool so puts and posts like let's
[02:09:31]  make let's make a new one i mean we probably have an idea of what this is going to do let's what are we going to do hello stream in this stream
[02:09:45]  we are looking at react server and really unique okay so we got a preview panel and then let's clear our logs but we know what's going to happen we're going
[02:10:14]  to hit done and we're going to post oh that's different huh this is an actual proper post this isn't against our react endpoint this is different but it's still returning
[02:10:33]  it so there's more oh okay okay okay i i got a theory why this is like this because it's still react server code so this this this defeats my initial
[02:10:55]  thinking there is more than one server component endpoint it's not just the react endpoint essentially remix is is basically going to make this more easy for people to make the transition this is
[02:11:07]  a resource route if you if you if you if you if you're making a new one well yeah sort of like you can only use a single http verb against the same
[02:11:24]  resource like you when you have like if you know your rest apis you have you know post put delete get um patch and a couple other ones that no one uses but
[02:11:38]  um your your your url and combination of verb are the unique uh combination so essentially to make i'm gathering what's happened here is the other routes we're doing it
[02:11:55]  you're already on that page so you're just posting back to the page so you're like it's like in remix you can have pages that have loaders on them and
[02:12:02]  when you hit that with a get it runs the loader and and loads and always return the html but if you have another um resource route so a pay a
[02:12:13]  file that doesn't have the component in it and just has the loader and the action in it in that page it doesn't return the html and it just performs
[02:12:23]  the the action and you need that sometimes because like like there's no there's no posts page here so that so like there's no like you're gonna have yeah like
[02:12:39]  i i'm this is sort of my theory i mean i guess we can look at the code and kind of make this out but essentially sometimes you're gonna have routes that still
[02:12:46]  end up returning html or doing that you know doing your work but but they're not tied to like a page or like a server component so i'm gathering the notes
[02:12:57]  endpoint is for the things that aren't like tied to the same resource location as the server component but still need to be able to process stuff and then like redirect to to
[02:13:08]  render it like but if that's the case they could just use react like just use react like this is obviously a post yeah the different like post is for creating and and
[02:13:24]  um put is for updating definitely but i'm saying they didn't they chose specifically not to go against the react endpoint here right they like i was expecting them to post against the
[02:13:35]  react endpoint and they posted against the notes endpoint which as i said so that's note editor save i i mean i don't even is there a difference between yeah see here
[02:13:54]  id put post and note id see wait maybe i wasn't paying attention earlier maybe these all go against the note i thought the save didn't go against the note but maybe
[02:14:08]  i'm wrong let's edit this again to learn more okay let's let's try let's try the save again i i i might i might have been mistaken here when i
[02:14:20]  looked at the save i thought it went against the react endpoint because i just saw the number and i didn't think of it no it's against notes okay so okay nothing
[02:14:29]  is so fancy it's more just like i guess you can have your api endpoints uh essentially like they basically have an api that returns server component code it's kind
[02:14:43]  of like doing the redirect so to speak um so when you do edit the notes it always hits the notes endpoints but it's interesting you can have multiple endpoints that serve
[02:14:50]  it up i kind of want to see what that looks like yeah no i i completely understand that if there is anything like that it wasn't about the difference between put and
[02:15:06]  post i just couldn't figure out why they're hitting different endpoints uh like like but they weren't that was my mistake i thought they were for some reason putting against the
[02:15:15]  react endpoint and posting against the notes but in both cases they're hitting in both cases they're actually hitting the the one a variation the note 10 point um right with a
[02:15:28]  post you hit the the top of a resource because it's its job is to allocate you the resource id on the sendback and then the put you give the the route with
[02:15:37]  the id because it already has its location you're just updating it but let's go let's go let's go back here for a second because this this is this is interesting
[02:15:46]  because it means that everything's in here yeah okay so it's just updating the md so we've been we've been writing to a local thing so here's our
[02:16:01]  new note here see there's md5 it's funny because there's a sql database involved in here too but um that's that's interesting okay so insert
[02:16:14]  into notes with this data a weight rate file so that's a post and then put and then send response yeah i'm not sure how they bridge this all together i think i
[02:16:35]  think this i think there's another technology that i don't understand quite yet but my sis like because you you don't see the redirect they all just call send response and
[02:16:44]  the codes written in a way that they're almost like they're separate but they're getting sent together so i i i there's got to be a technology that reacts using here
[02:16:51]  um that they've developed specifically to kind of handle this kind of multi in flight um thing you know but in in either case i i kind of like this this is the
[02:17:05]  i kind of love the model from like a pure mpa standpoint like it's it's just like you know post or put the update return the new stuff diff it yeah this
[02:17:19]  this is this is kind of cool as i said this is a very purest vdom kind of approach as i said it i've always been kind of like when the
[02:17:29]  vdom got popular there's a lot of benchmarks um like uh like dbmon and i've talked about this before where it's just like stock tick wraps and they're
[02:17:39]  like spamming the page with all new data and i'm like who the hell would ever do that right like why would you spam the whole page with data that's so
[02:17:50]  wasteful yeah and it honestly killed the fine grain reactive libraries back in the day obviously i built solid in such a way that it it can handle those scenarios but like essentially that
[02:18:00]  was like oh look how perform react is and i was like what a stupid example why would you ever do that it's wasteful you're sending way too much from the server
[02:18:08]  you're doing you're sending too much data you're sending it way too often you know most apps and most things you do you interact with little things and you do fine
[02:18:17] -grained changes and you can't you know this is just like the extreme terrible like worst scenario like you'd never do that um so when you work with like fine-
[02:18:31] grained reactivity and stuff it's like it's like it's not hard to make something more performant you know um when you take that this this this approach is
[02:18:41]  like it's i i think it's it's good for the the wide grain stuff you wouldn't want to spam something with this but if you're going to do a full
[02:18:50]  page navigation anyways do a full page navigation so the real question for me on this is can someone do server components without bringing in 50 kilobytes right yeah that's interesting
[02:19:08]  because like this is this is a real this is like a fun place like completely different place to live in and it but it looks like it requires a little bit of like the
[02:19:21]  way the notes and the location stuff works and the post like the way that they handle it you need some infrastructure behind this and you need some stuff right running in the browser
[02:19:32]  it's complicated but in another sense once you have that infrastructure the client-side islands can kind of stay exactly the way they always been so like in a way react server components
[02:19:47]  aren't even like i mean they're doing diffs so they are like react but they're like a different framework it's like two frameworks being wrapped around each other um
[02:19:56]  and their their interface is fairly simplistic or basic it's just like passing props so yeah this this this is this is this is this is interesting i think it'd take a lot
[02:20:08]  of work to make a proper server component infrastructure you know like this and as i said there's clearly something going on more than i'm seeing especially the way that they're handling
[02:20:15]  the put and post and like combining them you know but as i said it's it's it's like a different platform honestly this is so cool i you're you're
[02:20:31]  getting i i i i have not played with them in the whole one year i seem kind of stupid for saying that at this point but when you when you consider the the
[02:20:40]  implications here right because like there's this there's this thinking right like mpas are good enough for most things and they're incredibly fast for e-commerce because you never need
[02:20:52]  to load that extra data but there's always this nagging thought you're like well what if i could do the server the client-side rendering like that's why people are
[02:21:01]  looking to using like turbo with their astro frameworks or or aisles or whatever because they're like okay let's bring client-side the framework and get like the partial
[02:21:09]  hydration and you know a very small runtime to kind of do client-side rendering like in the back of their minds they want to go back to they want to be able to
[02:21:19]  have client-side capabilities like everyone kind of innately knows that for a certain class of apps that is beneficial like rich harris who's you know been coining the whole
[02:21:32]  transitional app thing he he straight up sit on on twitter when i was talking he's like like like let's face it he he even though he's talking about this transitional
[02:21:41]  piece he he was like there's basically no reason to do mpas anymore i'm like oh no that's not true at all but but he's like well in an ideal
[02:21:51]  world no one would be using mpas and i don't know but like i i i don't think no one is the right word but i think this is an interesting
[02:22:02]  middle ground that's quite compelling i see a few people in the chat of are having their minds blown away very similar to the way i have been like this it's it
[02:22:22] 's it's interesting because i said we're starting to look at some of the stuff with solid as well you know and um alexis has been making like some partial hydration
[02:22:31]  demos and stuff but this is even more different than i i thought um this this is this this this this is this is very close this has to be close to the end game
[02:22:45]  like not the end game like reaction to keep on improving but if you look at the progression if you kind of step back and go okay if everything they were building was to
[02:22:57]  get to this point does everything that they've done up to this point suddenly make sense that's that's sort of my that's that's sort of what my what the question
[02:23:12]  is for you because i i'd mentioned that when react with it you know showed off suspense for the first time and the lazy loading trick you know with it and you know
[02:23:21]  people are like oh yeah that's cool you can render some placeholders i was like okay yeah that's cool you can render some placeholders and then they showed off transitions and
[02:23:30]  then i find out like a year later dan's like oh no uh actually uh we started working on suspense because we were trying to actually do the same thing marco's doing
[02:23:39]  basically like we were we wanted to have a uh out of order streaming on the server that's actually why we made suspense so they if they were already there in their mindset
[02:23:50]  then like you you you can kind of backtrace it because the truth of the matter is streaming is best in a partial hydrated environment because you can remove when you have
[02:24:08]  partial hydration you can remove the duplicate data problem um and keep the html payload small uh basically and you and by maintaining html essentially you can keep like they work
[02:24:26]  hand in hand right because you could always just start you could always like render html and like stream the data but why you stream the html is because you
[02:24:34]  get to preserve that that experience you get to preserve the being able to send less javascript code um you know even with async like in marco something data related like
[02:24:47]  an await tag or something like the equivalent to suspense doesn't mean something is stateful how much of our code i talked about use effect earlier and saying that you know a lot
[02:24:58]  of time we write use effect is for that data layer but how much of our stateful code and remix hinted at this as well because remix like oh i built this
[02:25:06]  whole demo without using use state or use effect because we again they abstracted the data layer 90 you know most of your state of that a lot of your state is derived from
[02:25:15]  that data layer if that data layer um essentially can be removed completely to the server you know and partial hydration enables that like all the pieces fit i'm not sure i i
[02:25:41]  i this is this is where this is where i come in i i you know this is why i start brainstorming because i i've shown numerous times that things that can only
[02:25:52]  done with the vdom can be done without the vdom right that that's that's that's that's what i've that's what i've been doing with solid
[02:26:01]  from jsx and analysis there from um the type of hydration we do to concurrent rendering i've never found a problem that i couldn't solve without the vdom this one might
[02:26:15]  be the one of the hardest ones yet so maybe but it's literally it's literally um like a purist version of virtualization so i'm not sure how you do
[02:26:30]  that whether it be done i mean you could or what makes sense right all my state comes from react query yeah exactly right like think of think about that because suddenly you don't
[02:26:41]  have client side caches right like this is this is this is completely different like i don't know if it seems wasteful to send the whole page every time but again
[02:26:54]  it also seems wasteful to like mpas have been doing that forever right and the like it's a it's it that might be an okay middle ground it's also
[02:27:06]  wasteful to diff the whole page every time but we're just talking about places where you can optimize it's so funny it's taken so long to get to this point right
[02:27:22]  yeah you actually like that you react query yeah um like it's taking it's taking it's taking them so long to get to this point right yeah there's also option
[02:27:36]  for vdom hybrid me well yes because it's two framework you could have a vdom framework that's the that that a vdom library that's super small that's really
[02:27:43]  good at doing the server component part wrap uh fine-grained reactive library that's incredible at doing client-side updates and get like maybe invest in both worlds yeah yeah
[02:27:53]  i mean that's possible you know but what i was getting is so many of the pieces that it took to get here like suspense and react fiber and concurrent rendering and all the
[02:28:03]  pieces put together we actually kind of like they've been on this road so freaking long and if it pays off no one no one almost no one can follow them in the same
[02:28:17]  this way like like like what what's like everyone kind of was like oh yeah react you're wasting your time you know like not everyone but like a lot of the fram
[02:28:29] ers that the people who have probably put on the badge they're like we don't do transitions or concurrent rendering you don't need that because our framework so performing oh man
[02:28:44]  i mean i always said to keep an open mind um but like this is this is a starting point i mean don't get me wrong this is gonna take a long time and
[02:28:57]  it has taken a long time but it and people who come later once they know the pieces they will be able to replicate them better it's always like this but this is
[02:29:08]  this is such an incredible amount of things like meteor was kind of trying to do stuff like this back in the day perhaps and you know they had their own model and people people
[02:29:17]  trying stuff with web sockets and all this and maybe that's where the optimization goes maybe there's different ways to achieve the same thing maybe different patterns or architectures but the
[02:29:26]  goal wow that's that's that's that's a goal to have to be to basically have the classic web mental model without having to deal with multi-page navigation
[02:29:50]  yeah i mean to be fair this this still takes a lot of code you know um in a sense this could cap the limit like maybe react apps start from 50 kb
[02:30:10]  and now it's very rare that they ever go over 200 kb like that that's that's what i see this doing um there how many to do mvcs can
[02:30:26]  you put on a page with 50 kb i i did this uh comparison you know let's let's let's go back for a second how many i i say this because
[02:30:34]  i'm i want i'm comparing this to pure partial hydration like you have with um uh what do you call it like you have with um like astro marco whatever
[02:30:48]  like that let's let's just let's just kind of do that sort of thing so 50 kb how many to do mvcs can you get at 50 kb
[02:30:58]  i've got a table for that don't i one of these 50 kb okay 40 kb gets you yeah okay so let's say 35 to do mvcs
[02:31:10]  so basically before you even get to this before you even get to this point um where you would want to use this react server component technology you could you could have a pretty complicated
[02:31:25]  um mpa partially hydrated and be like happy and never get to the point to need this right like this is still a pretty steep cost i don't know how many like
[02:31:36]  e-commerce sites like need 50 to do mvcs on them or not 50 sorry 35 and to do mvcs on them or whatever um maybe there are like maybe
[02:31:49]  that's just like the where the sweet point is maybe they're like but so this might be still kind of bloated on that side but this is uh this is kind
[02:31:57]  of this is really interesting once you get above that right um okay let's let's check catch up with the comments yeah yeah quick's an interesting framework because it does veto
[02:32:15]  them diff but it it's still i mean they'd have to change their architecture too quick understands the rules of how to hydrate out of order and i think you know what
[02:32:30]  actually you're right quick quick could implement this because their mechanism doesn't rely on knowing anything oh but that's the problem yeah quick couldn't reproduce the data serialization like
[02:32:50]  the the thing with quick is you you it's lazy loaded so like at each component level so the pro but they don't know what server or client or what stateful or
[02:33:02]  not they don't denote it with server or client components they don't have a compiler that's smart enough to do it they're literally like look every component can run independently
[02:33:10]  um so if you interact with it and that has a cost but let's say we know the the places where you interact we can load that content in no quick quick is like
[02:33:21]  battleship that you know what i mean you you've played battleship before right like you you've got a grid and and depending on where you guess you you you hit
[02:33:34]  or you miss and every time if you could pretend that every time you're playing the same game of battleship you you you go okay well i i actually i i know like
[02:33:45]  things don't really move much you go next time i know i can just guess because i already know where the boats are that that's that's how quick does stuff but the
[02:33:54]  the thing is in that model you don't know what stateful or what could potentially render so there's it's very difficult for you not to serialize all the data
[02:34:03]  right like without the knowledge well it comes like react is like oh we need it to be called server right like we we need it to be called client and and to do this
[02:34:15]  i don't think that's true now that i know that it works like partial hydration like it actually has the same rules marco's compiler analysis could automate the server component
[02:34:25]  thing i'm pretty sure now that i understand it's the exact same you do not need like to be explicit like this a compiler could could could do it i'm i'm
[02:34:34]  almost certain but both of those approaches whether they're manual like react server components or astro islands or compiler like like uh like marco they need to have that knowledge quick
[02:34:49] s as i say it's just it's a different approach and it's really cool to see everyone kind of work in these different zones as i said reacts like really trying to
[02:34:58]  change the game but they're not maybe that optimal about it they just go look this is the paradigm but they're kind of doing it in wide strokes marco is the smartest
[02:35:09]  in that like it's like a sculptor every time they optimize the block gets clearer like you can kind of you can kind of see more detail in your sculptor they
[02:35:20]  peeled it away it's your islands aren't just components they're sub components like you you you basically shedded the stuff but the problem is it's still a block at its
[02:35:31]  core like it's still tied to the tree um you know just like react um server components like where you know that it's all part of you know like under the island
[02:35:42]  everything has to come in client side in marco you just make the island so small that you can eliminate that much more of the code kind of like the sculptor cutting for
[02:35:52]  details and then quicks like battleship but the difference with quick and battleship is they don't actually care about having the knowledge so they can just do every piece like light
[02:36:03]  it up as it as it comes in so in the end maybe your creature looks more like like your app looks more like minecraft right but but it doesn't really matter
[02:36:12]  because they'll even not load some of the stuff that could be rendered in the client that like the other frameworks come in just because they're like you didn't use it so
[02:36:22]  in a sense they have the potential to do the least amount of hydration possible in a dumb way what you really want to do is push all three of those together right because then
[02:36:32]  you you want maybe the mechanism of marco or sorry the mechanism of react the brains of marco and like the the like the ability to um kind of lazy load and
[02:36:48]  like optimize like like like like like quick you know based on like how people use it there is a fair question though if you if you have a certain floor to get up to
[02:37:01]  to like say using this like react right like you you you have to have a site big enough to benefit from it and if if if if you have um how should i
[02:37:18]  put it if you have something that like marco's mentality and animal analysis which is actually ironically based completely on fine-grained language basically marco's smarts the
[02:37:31]  reason that it can do this stuff you know without denoting the islands um in the future and you can get smaller is it's basically using the same concepts as solid but instead
[02:37:42]  of applying it to fine-grained updates as applying it to hydration it's like the same mentality as solid but applied to that if you can if if you've already jumped
[02:37:50]  that level and then got that smart with marco that you've already eliminated 80 90 of the code maybe the lazy hydration thing just doesn't matter like at that point you
[02:38:03] 're just like look my page has six sections i'm just gonna lazy load these ones and do this one like maybe you don't need to rely on lazy loading to get
[02:38:19]  your granularity if you already have something that's that's smart and already that like that capable like re the react thing like maybe um like it takes the pressure off the lazy
[02:38:30]  loading do you know i mean like if you've already eliminated 90 of your code um you can you can be a lot more crude with the lazy loading and what's kind
[02:38:41]  of cool about that is some of those rules about transclusion don't have to be somewhere like it's okay if some component children um are eager are lazily evaluated and you
[02:38:52]  have control flows and convenience because sure those things keep grouped together but who cares loading one extra sub fragment here or there isn't going to be a thing is if you can already
[02:39:05]  break it up granularly so yeah i don't know it's interesting in some ways i think they all need a little bit of each other but then on the the other way
[02:39:13]  i if i was betting i i i would hedge more towards react server components and marco um yeah anyways let me look at this do you think this level of discovery is
[02:39:29]  unique to interacting level of discovery so can you clarify a bit on the discovery bit i think i think reacts i think this ability to diff the top level is very venoms cent
[02:39:43] ric i think the ability to be really good at partially hydrating and i've been to the islands is actually beneficial from as is what marco's doing with fine grain
[02:39:52]  reactivity so um but they're solving different parts of the puzzle one one is trying to figure out how to re-render the stuff outside of the islands and one's trying
[02:40:01]  to figure out how to make the islands as small as possible you put them together that's amazing so maybe maybe maybe explain discovery a bit for me that help um what do you
[02:40:09]  mean by that you said marco can automate it but it doesn't need to decide that i saw our quote worth being on the client sorry no no that's the thing
[02:40:18]  yeah maybe but when you get to component level sub component level hydration you kind of don't you just write your code and then if it's stateful it ends up and if
[02:40:29]  it's not it's not like you you this isn't i think i think the key thing that i'm starting to kind of piece together talking this through is partial hydration boundaries
[02:40:41]  and lazy loading boundaries shouldn't be completed i know they are today you know everyone has their islands and they're kind of the same thing but i think the question of lazy
[02:40:52]  loading and partial hydration probably should be separate i think the compiler analysis could be smart enough to handle the partial hydration stuff for you so you don't have to worry about defining what
[02:41:03]  what what like the island is i i like so to speak i think if that's your definition of island it can split out the code and break it into into the get
[02:41:13]  rid of all the dead stuff or basically the stuff that needs to be react server components it can basically the compiler can go these are the server components these are the client components and
[02:41:22]  use that kind of analysis then maybe the end user has to decide oh this is what's lazy loaded and this is not so kind of like astro you just go go
[02:41:36]  client visible client intersection you just wrap sections of your code in that but that doesn't define what like everything below this gets sent to the browser instead it's only the sub component
[02:41:47]  level hydration that gets sent to the browser you define the lazy loading boundaries by simple rules just going like oh like you don't like one of the challenges with playing battleship is
[02:41:59]  the first time you play battleship you don't know where any of the ships are and you you have a lot of misses so what do you do do you just guess
[02:42:06]  everywhere you know what i mean like you can't have analytics before you have analytics you make smart defaults but you you don't know um i think once you have the granular
[02:42:18] ity you don't actually need you don't actually need the like you don't you need you don't need to give the partial hydration sorry give the lazy loading to the
[02:42:30]  end user as islands have the partial hydrations i.e the server component client's components uh split automated and then i don't know i don't know how we achieve server
[02:42:42]  components without vdom but right now i'm thinking vdom on the outside fine-grained on the inside you know business in the front party in the back yeah i
[02:43:00]  don't know yeah maybe like a fine-grained turbo links the way of doing it but the turbo links is kind of clunk clunky right like you you send this
[02:43:11]  html the thing is you're right we haven't talked about the downsides of this right like like or the missing parts this is client rendered what we've been
[02:43:19]  what we've been looking at today right like this this we've saw we've seen everything here is client rendered you still need the server components to be able to also output h
[02:43:29] tml right like so you this is complicated you have multiple modes you're gonna have html rendering and like part of me wonders like should you be smart enough that
[02:43:41]  on partial hydra uh partial navigations that it does work like turbo like when you go somewhere new should you be sending the html because that's gonna be better than
[02:43:49]  the diff right so it's like new navigations html update navigations uh this jsx format and let's get even crazier let's interweave it based
[02:44:00]  on what's new and what's not new like i think like this is a whole new world of possibility here but i i think i do think the vdom part might
[02:44:09]  be essential here to actually get the diff and not lose the state you can't just replace the html you lose focus and stuff like there's people who are trying to
[02:44:19]  like replace the html and then bring back the focus and then bring back the islands and do that maybe but i i do think the vdom is is valuable here
[02:44:29]  yeah yeah i mean this is like this kind of like a better version oh man you know this that's worth a whole other discussion because maybe not flutter itself but this
[02:44:53]  is what i was talking about seb was really pushing react native for web and so has dom ganaway every time i've been talking for the like the last six months he
[02:45:02] 's just the reason solid has a universal renderer was because uh dom the critter inferno just kept on nudging me he's like oh man this is this is
[02:45:13]  like if i was to build a framework again from scratch and you know i look up to that guy he he was working at a time when performance was still improving um in in
[02:45:23]  js frameworks like i came in at the at the end i i was there to see them reach that place but i didn't like solid and and you know like the fine
[02:45:33] -grained stuff it was just like get pushing the the last 10 percent of it like they'd already saw performance like client-side rendering has not got faster in the like
[02:45:45]  the last five or six years um which is why i'm usually pretty confident to talk about solid and performance because like this approach has been the fastest approach to rendering for like half
[02:45:56]  a decade um so like like nothing's changed right but man if he's excited about that stuff you know i take a listen yeah like right but here's the other thing
[02:46:15]  to consider you're always sending like full pages right so like think of the format and what you want to be doing there like do you want to replace the whole dom and
[02:46:27]  then re like rehydrate it like that can't be is that more performant than diffing and patching is inner html better than diffing and patching
[02:46:39]  i think we know the answer to that is no right that's where react even exists um because backbone was like you don't react as an improvement over backbone just turbo linking it
[02:46:51]  is basically bringing backbone back we like we can do better yeah flutter is itself is terrible but i i'm talking like would you feel the same way about react native for
[02:47:10]  the web yeah okay this this is an interesting idea right a similar approach to marco six is fine grain hydration to have the pinch of the fine grade updates and service without it
[02:47:23]  be done but how yeah i guess i guess the i i i mean you you're right there there is there is a thought here and let me let me explain a a
[02:47:41]  bit when i was being pessimistic about yeah and inner yeah exactly this is what i was saying a few minutes ago when i was saying that that like on the initial render
[02:47:55]  like the big slide navigations which probably make up the 80 case you want to be sending an html because that is better than trying to diff something that's completely different
[02:48:06]  like you're wasting your time um it's it's way better on on to send the html in that case but what i what i was saying is part of the
[02:48:15]  reason my attraction like to to to what was going on here is it's it's the promise of zero kb components but i don't know how important that is because
[02:48:27]  a completely other different take is if you're if your hydration is granular enough and that the static stuff um is static you know the amount of code you need to do fine-
[02:48:40] grained updates is relatively minimal right this was always my thinking with partial hydration right like if something's not stateful um then you don't send any javascript anyways
[02:48:52]  like you don't need fancy partial hydration if if if you can know what's stateful at a granular level because like i've talked about it as the three modes of hydration
[02:49:02]  as being the middle mode like sure it takes a little bit more than jumping right to the node that needs to update but but a component that only has a couple things in
[02:49:16]  it that updates can still eliminate its template like not send it to the browser and then like you know walk to those um places that do update and be super super super perform
[02:49:29] ant and send a tiny bit of javascript to get to those locations to update in a fine-grained way but save the majority of the code by not sending the
[02:49:37]  template and in a sense react server components because every time you freaking do anything send the whole template and data again in a verbose thing all they're doing like if you're
[02:49:48]  being kind of like a pessimist you're like this is just lazy loading templates like we can all just lazy load our templates you don't need to diff if you just
[02:49:59]  have the minimal fine-grained uh code to to update it right you don't like it it takes like if you take a small fine-grained library like marco
[02:50:12]  solid and then you just send the code for the little places that change it's not zero kb but it's going to be a lot smaller footprint than this react server
[02:50:25]  component solution and by the time they catch up to each other like you could probably show that they they never catch up to each other so maybe there's a completely different way of
[02:50:36]  doing this that you know isn't zero kb components but essentially is so much smaller and technically they'd be way more performant too um that you know there's other
[02:50:51]  options out there so i mean i i think that's fair thank you michael i i was i was so i was so focused on this zero kb bit but like if
[02:51:03]  you let that part loosen then you can get the performance back so yeah i mean yeah exactly right you over time you're not sending everything it'd be completely fine-gra
[02:51:21] ined i mean honestly i'm i'm a little hyped about how cool this is this is react server components is cooler than i thought but when we get back to the drawing board
[02:51:30]  when you have people as smart as michael rawlings here working on the problem i i'm sure we're gonna find you know other ways um so like yeah this this
[02:51:43]  i just i just think this is our first hint of what that future can look like like is this even if the implementations are different is this our goal do we want to
[02:51:57]  recreate the classic mpa in the browser without doing full server back and forth without losing state is that is that our goal is is is this the first hint of where where
[02:52:15]  we go and react is the first implementation but we're going to do this even better is this is this is this what web development looks like in the 2020s i know
[02:52:31]  many of you have have shown some excitement in this stream about this i mean this is a year ago can i i feel bad as i said that i didn't look at this
[02:52:40]  before but i think i think what's we've seen with remix has kind of prepared us mentally for it the work that i've been you know astro and and this
[02:52:52]  i think react team core team has this funny challenge that i always say this i'm just like i i i they share something and then i'm like yeah i have two reactions
[02:53:03]  usually i'm like oh man i was literally thinking of this today how to solve this problem and you just showed me how to solve it like that it keeps on happening because
[02:53:12]  i'm working on the same problems and then suddenly they're like a few months ahead and they just drop it and then you're just like oh man you know a lot of
[02:53:20]  smart people working on that team the second one that happens to me often is that six months later after they drop something i just wake up one day and just go oh obviously
[02:53:32]  like ding like and i guess it's so hard to be working that far in the future right i there's this there's this like there's not you know the the not
[02:53:43]  appreciated in your time thing i think i think this is really cool stuff and i think this is only the starting point and i am so enthusiastic about where this is heading i
[02:53:56]  said like it took seeing astro and maybe remix this year for for this to actually probably make sense to a wider audience if we tried to do the stream and looked at this
[02:54:06]  a year ago i don't know if anyone would be able to like i don't know if we'd be making the same connections or have the same point of context i
[02:54:20]  i don't know if the main advantage is really nice like the dx is nice you're right the ability to to simplify things by a simple client server model seems kind of nice
[02:54:30]  but and and it is the performance is nice ish because you're not maybe inner htmling in places where you shouldn't be but if you think about it
[02:54:42]  if i rewrote an app as simple as this in svelte or marco or actually i i guess marco doesn't decline type but i'm thinking spa framework
[02:54:53]  so svelte or solid it would be super small it would be super fast and it would be less javascript than this than this react server component thing and who knows
[02:55:06]  it could the dx could be wonderful um and it could be super performant it might just maybe maybe the dx wouldn't be as good let's let's let's leave
[02:55:15]  that on the table but what i want to say is like you building this app with with like a svelte or solid or something like this is is it's just not
[02:55:23]  the right app for this right or the you know like it's not big enough it's going to be better than anything you do with server components you know unless the dx
[02:55:34]  is way better so it's not like a performance thing really but at least on the surface level but i think when you get further out when you when you get to like when
[02:55:46]  you when you get to the higher scale this doesn't keep on shooting up this kind of flat lines you know it's changing the way the code sales like i think there's
[02:55:58]  something that was talking about like uh fine-grained systems scale with interactivity like the more interactive your code is the more code you need and then um vdom scale
[02:56:09]  with your tree size right that's that's essentially the rule um react desperately wanted to stop scaling with tree size so this this solves that problem because by moving like the tree
[02:56:26]  to the server um they they basically find a way to flat line their size in terms of their tree size um i think a system that scales with interactivity like fine-gra
[02:56:39] ined stuff does has an interesting uh different potential or path perhaps like mark uh like michael was suggesting just simply because it's already so well suited for large trees it doesn
[02:56:51] 't really have the same thing it has to worry about in terms of the cap is the main problem solving double data so this is the thing i i said at the beginning of
[02:57:01]  stream or at least in the beginning of the react server component part that we couldn't just look at the feature double data is mostly solved by partial hydration and in fact the more
[02:57:11]  granular partial hydration is like what marco is doing the better you get at this um marco six is something equally as exciting about this in a different in a different realm
[02:57:22]  because when you consider the fine-grained partial hydration the resumable um uh hydration like like truly resumable like actual like leave computations where they start off like
[02:57:35]  what i talked about in the last stream like these are incredible kind of uh ways to do it so i just think server components or something like this just finally puts everything to
[02:57:47]  get together like there's multiple reasons if you focus on any one feature you're just gonna be like i can do this another way but put it all together that's that's
[02:57:54]  where that's where all right well i don't know if anyone i is this is this isn't like a space so i can't have like a good conversation with you
[02:58:07]  guys i'm just talking to the air um but like if you have more questions now that's the time to shoot i know people are starting to wind down the stream is uh
[02:58:18]  getting to that three hour mark which is i try and keep my streams like to two hours these days but this this was really quite cool i mean does anyone see anything more
[02:58:27]  from the demo i think we got a gist without like reverse engineering it any further i'm sure you could you guys can download the project and take a look if you want
[02:58:35]  to do that but um i don't know if there's any more discussions now's your time to get those questions in um i've i think i've given my initial
[02:58:43]  spiel this is really me seeing it fully wide open like eyes wide open for the first time so i'm gonna have to sit with these thoughts and you know figure out what
[02:58:53]  this means even more i do a lot of that kind of analysis and um you know thinking we us on the marco team are constantly working through problem spaces like this um
[02:59:06]  but so i don't know if i have much more to give on that side but if people got questions yeah yeah michael's tired that's what happens when you're in
[02:59:13]  the east coast uh double data no component code already too yeah exactly yeah like yeah the the the get the remove the double data like you can't completely remove it but to remove
[02:59:28]  it to a certain degree all you need you just need a smart compiler that knows what's stateful anyway you know what let's let's let's wrap this up then
[02:59:38]  let's call this a stream it was a good stream this this this was a really fun one right from the benchmarks and the remix and all that stuff all the way through react
[02:59:45]  server components completely mind-blowing paradigm as i said i suspected as much but the and the execution still needs a little bit to probably get to the full story but you can tell
[02:59:56]  that a lot of really cool things are happening here and i think more than anything the ability of this demo to kind of expand our minds in terms of like where things get
[03:00:06]  headed is incredible it's just it's it's funny like i am it's funny people may have forgotten about this already i am so much more excited about react server components than
[03:00:16]  i am by like react forget i i feel like that was them just kind of tossing something like oh you guys kind of like svelte uh oh here's something
[03:00:26]  like like this this this is this is the real deal um huh this is really cool stuff whoa this i'm kind of lost her words all right good night everyone thank you
[03:00:42]  for joining me on the stream um this is really awesome um i think yeah i think we'll look at aisles maybe next week uh another partial hydration framework that works with with
[03:00:54]  solid maybe slinkity i want to get into slinky i don't know anything about 11d but i'm curious so um maybe line one of those up in the
[03:01:02]  next couple weeks but uh yeah um everyone have a good night and uh until next time