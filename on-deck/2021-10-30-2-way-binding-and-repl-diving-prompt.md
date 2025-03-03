---
showLink: "https://www.youtube.com/watch?v=C83XD19-1jg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "2-way Binding and REPL Diving"
description: ""
publishDate: "2021-10-30"
coverImage: "https://i.ytimg.com/vi/C83XD19-1jg/maxresdefault.jpg"
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

[00:00:00]  Hello, welcome to my stream today. Today I wanted to talk about I think just a few topics that I've been like thinking about and discussing for ages now and they
[00:00:15]  just happen to come up this week. So this is kind of more of a topical episode more than others. I honestly might not even have that much content. It
[00:00:26]  might be a shorter stream than usual. I've been super, super busy. I've been working on three speaking engagements that I have coming up in the next couple weeks and
[00:00:36]  been doing some work on trying to bring like an isomorphic streaming GraphQL client to Marco. Between everything, it's just been like super busy, especially with everything that
[00:00:51] 's been going on this week. So yeah, if you're here, come say hi in the chat. Hello, the new brand. Just going to ramble a
[00:01:00]  little bit, but that actually does kind of tie into the topics this week. I'm literally going to use my Twitter feed to kind of spawn this whole episode. So if
[00:01:12]  there's stuff that's related or you want to talk about, get into the discussion, definitely use the chat, ask questions. That's what it's here for.
[00:01:25]  I have a feeling the stream more than others will probably depend a lot on participation, but it's also probably the least... I'm not covering a specific topic that people
[00:01:37]  are interested in. So I'm not sure that as many people are going to log on this week. But, you know, we'll see. If I just keep r
[00:01:42] ambling, you know, people tend to come. But yeah, maybe it's time to talk about this week in JavaScript. And yeah, there's definitely been a few things
[00:01:57] . And really, as this whole stream came about because of that I wasn't sure if I was going to stream today. But thankfully, there was enough content just from
[00:02:06]  what's been going on. So yeah, let's, this, for me, this week started almost immediately after the stream last week. And I was like, oh,
[00:02:16]  man, I wish I had a chance to address this. Kyle Shevlin asked the question, what makes two-way binding suddenly okay? I remember part of the success
[00:02:28]  of React was the rejection of two-way binding and the bugs and confusion that came with it. Very one-way data flow. The verbosity is a feature,
[00:02:36]  not a bug. And we're going to talk about this a bit more later. But this is kind of what spawned the whole idea of the talk about the stream.
[00:02:44]  Because I agree with him. I was there. And I remember React kind of came in almost to save us. And even though it was a problem, people didn't
[00:02:54]  really acknowledge it. But, you know, things have changed. And every time you kind of go through these cycles, you got to kind of look again and see if,
[00:03:05]  you know, the rest of the world has changed. It's very easy for us to kind of stand on our high horses and be like, you know, we've already
[00:03:11]  figured everything out. Got to keep your mind open to the possibility of change. But yeah, I'm not going to talk about this one yet. I just wanted to
[00:03:19]  say this was like a perfect cap off to the week. Obviously, this week in Solid, Solid 1.20 came out. This big release, I've been working on
[00:03:31]  a lot of stuff around the reactivity and playing around. And I'm really happy that we were able to bring in native support for custom renders. This will enable
[00:03:40]  like iOS or app or Android app development, you know, kind of like possibly native script or WebGL or Canvas. Honestly, there's so much stuff this enables. And
[00:03:50]  the best part about it is like, I don't know how all those systems work. But now that the tools are out there, I'm, you know, there's
[00:03:56]  a potential people building stuff. I did last stream, as you know, if you were watching, take the custom renderer from Solid here and actually run it to JS
[00:04:06]  Framework Benchmark with like the most naive DOM implementation I could come up with. And it scored well, about as well as Inferno. We didn't have
[00:04:16]  Inferno on the list. So I'm only guessing, but we came out well ahead of Svelte, just with something very naive. So I'm pretty enthusiastic
[00:04:24] . I think this will be really powerful, really performant, especially compared to other solutions in this space, given how perform the reactivity is. So if this is
[00:04:34]  your thing, you know, please come check it out. I really want to see what people build with this. Yes, Next.js. This is this is probably big
[00:04:46]  news for most of you. Next 12 came out. And I don't know. I'm, I've always been a little bit, you know, what's the term
[00:04:55]  opposite of bullish sluggish. It's, Vercel, huge fan. I think it's awesome how they built the whole company around this, the deployment,
[00:05:05]  the, you know, and they have this full storing pipeline and everything they do makes the process easier and makes it easy, you know, easier for people to get involved with
[00:05:13] . Next.js, on the other hand, has been a challenge for me because I'm a performance hound. And basically, it's always what ends up on
[00:05:21]  the butt of my, you know, sort of the end of my thing. Just like, you know, like, essentially I do these comparisons. And next is like
[00:05:36]  the slow option or the big option. So sometimes, you know, I'm a little bit skeptical or harsh on, on some of, you know, aspects around performance,
[00:05:45]  but they really delivered this time. Edge computing with streaming is what I've been waiting for, right? this is really the, how should I put it? The,
[00:05:56]  like, everything that I've been working towards, this is, this is how you leverage it. Obviously, the, the secret here is they're using Cloudflare under
[00:06:06]  the hood. But we, we have the ability now to do some amazing things. And I told you this week was busy. I was trying to do other stuff.
[00:06:16]  But when, when I saw the next example with, with, you know, React and 18 and the streaming, I was like, you know what, we can do this
[00:06:26]  demo. We can do this demo. We can blow this demo out of the water. And that's why, obviously, I stopped, dropped everything I was doing to
[00:06:34]  get this demo out. If you haven't seen it yet, it's pretty cool. Obviously, it's just hacker news. Everyone's seen hacker news, but it's
[00:06:42]  small. It's fast. It's got streaming. It's got everything you want. Super good page performance load scores. I wasn't even trying to kind of draw people
[00:06:51] 's attention to this. But yeah, I mean, this, this is kind of, I mean, it's a simple app, but this is kind of the epit
[00:06:57] ome of the best you can do with a single page framework right now. And I was mentioning, I was working on, on, on Marco, right? And working
[00:07:13]  on this, I'm sorry, where is it? Working on this kind of isomorphic GraphQL streaming renderer. And I kind of made this post maybe a
[00:07:24]  little bit out of frustration, but essentially, oh, sorry, I missed this question under the question here. Wait, do you say they're using Cloudflare in the
[00:07:35]  hood? Yeah. I, I wasn't actually perfectly clear on this, but when I, when I posted my, my, my example, um, I mean,
[00:07:44]  besides the API, it's being very similar to Cloudflare. When I posted my example, um, here, uh, not this quote, I was sorry. Just
[00:07:53]  let's look at the responses here. Um, so good. Want to try deploying to the workers directly. And I was like, wait, that's what kind of t
[00:08:02] ipped me off. He was someone was like, would it be that different? That kind of tipped me off that they were using Cloudflare because essentially he was
[00:08:09]  wondering, like, just avoid next and use Cloudflare. And the truth of the matter is, um, Sunil, he's a former React form team member.
[00:08:17]  And, uh, obviously he works at Cloudflare now. He hadn't realized that I already did this exact same demo on Cloudflare eight months ago. Um,
[00:08:25]  right. But yeah, I'm, I, I would take this to, to be a confirmation of that. Um, it makes sense to most streaming platforms do not
[00:08:36] , uh, support, um, um, or sorry, most, uh, cloud services don't support streaming. Uh, it's, it's unfortunate, but like AWS
[00:08:45]  doesn't and like Netlify believes on AWS. So that, you know, that's a challenge. And I, I don't know what Bercel was using
[00:08:52] , like what their network is, but they, they didn't support streaming. Um, Cloudflare was the first and maybe the only one on the serverless side.
[00:09:00]  Um, other platforms is going to hit or miss. I don't think Heroku supports streaming. Um, there's very few. So obviously very aware of when,
[00:09:08]  when we come across a platform that supports streaming. Right. Um, and, and that's the thing I was mentioning Bercel cares about, uh, performance and,
[00:09:19]  uh, you know, at least in their tooling, as I said, next, next.js sometimes is a bit of a contradiction for me, but, but generally
[00:09:30]  speaking, they, they've invested hard on it. They brought S uh, the guy who created a, uh, uh, SWC on board, um, and,
[00:09:39]  uh, you know, basically, um, you know, like they're, they're trying to improve their web pack. Like they're, they're working really hard to
[00:09:49]  make the builds fast. I mean, obviously it's important when you do static generation, but they're really trying to make you, allow you to, you know,
[00:09:56]  make the web period faster, like be faster at making the web. So really good. Um, probably I I've covered this in two separate streams. I'm not sure
[00:10:09]  if I should cover it again. It's a little bit complicated. Uh, but I, I mean, people that ask, I will say that this came up on
[00:10:15]  the Twitter threads, a whole bunch, um, mostly that, yeah, I mean, this, this is a tricky thing to explain and it, but maybe one angle that
[00:10:26]  I can talk about is why edge computing is a big, big deal here, because when you stream, all it is like, all HTML can be streamed out.
[00:10:37]  The streaming that we're talking about the one that like, um, you know, the frameworks make a big hype about is this out of order streaming where you can start rendering
[00:10:45]  your page. And while you're rendering your page, you start fetching your data and you, you're already sending the page to the head, right. And so you
[00:10:54] 're sending the head to the page and it's starting to fetch JavaScript. And it's, you know, maybe you send the footer and the links are available and you
[00:11:03]  show a placeholder. And then as the, your data finishes loading, you keep on streaming more of it in, and the page kind of constructs itself. And
[00:11:10]  the reason this is such a big deal is because you, you, the alternatives are so poor. I mean, I made a solid kind of cut its teeth in this,
[00:11:20]  um, kind of industry, um, based on how poor the other options were, right. Um, the way people often implement them, obviously client side, isn't always
[00:11:29]  poor. And that's what I was doing with solid. Um, if you just, you know, send the static content and then have your JavaScript, make your requests
[00:11:37]  and fetch on your page, you know, that's not, that's, that's not too bad. Um, but there's a delay. You have to go to
[00:11:44]  the server, get your page, page loads, page requests, the JavaScript, get the JavaScript, load, parse the JavaScript, execute it. At that point, fetch the
[00:11:58]  data. You know, you can do some stuff to kind of speed that up. Right. Like, especially, um, you know, some like preload tags and
[00:12:07]  stuff, but let's face it. You're, you're, you're not, you're still not removing the round trips. Uh, and yes, that JavaScript waterfall
[00:12:15]  is, is going to happen. I mean, people talk about HP, HTTP two and push, but that's not going to solve, um, what you need here.
[00:12:22]  Um, because you're just basically giving up caching. That's, that's not, that's not what you, that's not going to work. And Chrome
[00:12:28]  teams already kind of like that we're getting it. People are surprised by this, especially the backend, because they've been like, yes, HTTP two. And they've
[00:12:33]  been working all towards this stuff. Frontends is just like, you know, but on the other hand, uh, with streaming, you still get that immediate page load.
[00:12:46]  Like you can fetch the page and it comes right away. Except at the point you fetch the page, that's when you start requesting. You don't have to wait for
[00:12:54]  the JavaScript to come, or sorry, you don't have to wait for the page to come and then for the JavaScript to come, then to start your request. You
[00:13:00] 're just requesting your data right away. And once your data loads in, you just send it along with everything else. Right. And what's great about this is there's
[00:13:11]  no latency upfront and you basically get the same kind of loading experience, um, as the client side, just, it's, it's, it's as if your
[00:13:21]  front end APIs and the client are closer to you. Like that's what it feels like. Um, because you remove that latency, but the other side, the traditional thing
[00:13:31]  that Next.js has always done, um, and stout kid and sapper and noxt and all of them, um, was wait to render. They go
[00:13:42]  to the server, then they'd fetch all your data, then they'd start the render. And then when they finished rendering, then they would send it. And then at
[00:13:49]  that point, they request the JavaScript and then it goes and it comes back and then you hydrate. And as it turns out, on a fast network, you're
[00:14:00]  at, you know, or you're in the edge and you're close and stuff. Uh, well, kind of the way it tends to turn out is a client side
[00:14:07]  rendering beats that that's, that's how solid was, you know, smashing those early benchmarks. Um, because you know, they'd have these server side things and solids
[00:14:17]  like client side rendered demos would be smaller because they require less JavaScript because usually hydration costs a bit more and they, they just render faster because there's no blocking. So
[00:14:27] , you know, if you go the opposite way and you put like really slow down your network, well, you know, or, you know, you are on a slow
[00:14:34]  network or device, it completely changes client side is terrible, like just horrendous, like seconds slower. Like that would never fly for any company that has to, you know
[00:14:45] , deal with customers with shoddy networks or slower networks or slower devices. It's, it's, it's so bad. Um, whereas, you know,
[00:14:53]  server side rendering is huge benefit, but the funny thing is in those cases where the network's so slow streaming might take a while to kind of load stuff back. But what
[00:15:04]  all it means is that the server is done by the time you're still kind of sending stuff over. So streaming still ends up being about just as performant as waiting for
[00:15:12]  it to render in those cases. So basically streaming is the best on both ends and throughout the whole spectrum, it's just, it's just better across the board.
[00:15:20]  Um, and, uh, the, the key part of the reason I wanted to bring up the edge is you notice the benefit, the faster you can get the static or
[00:15:31]  the, like the synchronous content to the end user. So when you put it on the edge, like a CDN or something, they get that page immediately. It
[00:15:38]  has all that Jamstack type benefit, except you get to load the data right away. So, and because of the out of order placeholders, um, you know
[00:15:48] , that's where you get the benefit from the loading more. Like obviously if the database is fast, you'll see Brian LaRoose on Twitter go on and on about
[00:15:57]  his nine millisecond database. Like I'm, I'm sorry, that's awesome, but people have different data sources, different world. I've never, I've
[00:16:04]  never lived in a place where I just did one, nine millisecond query and I'm done. There's different services, communications, some waterfalls on the server. It
[00:16:12] 's not just like nine milliseconds and you're done, but you know, in that case, sure you don't need streaming, but in pretty much any other case or pretty
[00:16:21]  much every case you get, if there's database latency, that's where streaming makes the biggest benefit that people get that, they get the page content sooner. They see
[00:16:31]  the loading indicator. It's all the stuff that you benefit from client side rendering, but interestingly enough, because of the, it being HTTP and HTML being sent over the wire
[00:16:38] , you still get the kind of benefit from, you know, just native browser behavior. And, um, you know, in the case of something like Marco, which has
[00:16:47]  partial hydration on top, you actually get the partial hydrate through the stream. You don't need JavaScript to render your asynchronous code. So this just lets you ship even
[00:16:57]  less JavaScript. You can have this beautiful kind of almost client side feeling loading experience with zero kilobytes of JavaScript. So streaming is a big deal and I've been emphasizing
[00:17:08]  it a ton. So when people ask the question, sure, I'll, I'll answer it again because I think it's that important, but, um, you know
[00:17:14] , that's big part of solid solution here and why I knew when I made this demo that, you know, it's, it's a great showcase for Verc
[00:17:23] el and, um, you know, it's a great showcase for solid. Oh, okay. Little spiel there. But anyways, what I was getting to,
[00:17:36]  um, was that unless anyone wants to talk a little bit more about streaming, I mean, it's a, it's a great topic. It's one of my favorite
[00:17:44]  topics. I, I talk about it all the freaking time, but, um, you know, uh, yeah, I mean, other, other, other solutions are
[00:17:57]  going to, to, to, to get there. And honestly, um, I I'm not sure if this is what you're referring to, but, um, there
[00:18:07]  was a kind of follow-up, um, which was with, uh, uh, what's his name? Sorry. Rouch, uh, the, the founder,
[00:18:19]  the CEO of, um, Vercel, he actually saw this tweet today and actually started retweeting it, pumping it up again. And, um, he
[00:18:26]  actually was like, well, you know, people were wondering about SEO and bots. And I think he had a great response. They've been working on better bot detection.
[00:18:36]  And this, this is the key. This is why I, I, when I first saw this approach and suspense and putting all the pieces together about two years ago, and
[00:18:44]  I immediately went and implemented in solid. Um, and I actually explained here, this model is the universal, um, server side rendering model. If you support streaming and
[00:18:58]  use this kind of suspense, like patterns, you can basically write your code in a single way. And it works in all cases, you can render synchronously and have the
[00:19:10] , the client, um, you know, fetch, you know, behind suspense, you can render, um, async and wait for everything before you send it,
[00:19:21]  or you can use streaming and get kind of in the middle. Right. And what's beautiful is for something like a bot or something that can, you know, where
[00:19:28]  they can detect it here, you can, they can feel the request and go, oh, it's a bot. I'm going to wait to send it with no JavaScript
[00:19:35] . So I'm not going to do streaming. I'm just going to let it wait. And the bot will still be happy. Like who cares about a couple hundred milliseconds
[00:19:41]  or whatever. Right. Or, you know, you can get that immediate responsiveness with streaming when it's an end user. I think that's, I think that
[00:19:50] 's, I think that's amazing. And, um, that's what he really highlighted here. Tools like this are going to be kind of built in because that switch is
[00:19:58]  something that next can just build into its own platform. You don't need much to it. Right. You guys are, you guys are great. Thank you. Thank
[00:20:12]  you for that. Um, maybe, yeah. Yeah. I mean, hopefully the, the, the funniest thing, and I know it's because of largely because Rich hasn
[00:20:31] 't been able to work on it. So I'll start, um, and even SvelteKit have been really delayed. Um, you know, there's a lot
[00:20:37]  of details that work out. Making meta frameworks are hard. There's a reason there's so many people working, working on this stuff. Right. And, um,
[00:20:45]  you know, like why Guillermo has like, I don't know, like millions and millions of dollars. And I don't know how big his team is, but like
[00:20:55] , there's a lot of people working on Next.js. Um, but yeah, I mean, I have no clue what Rich is doing. He suggested it would be
[00:21:03]  Svelte related in one of his comments, but I mean, he could also be just kind of playing up. I mean, I have to imagine for him to
[00:21:09]  leave New York times. They're pretty good opportunity opened up to him. It's tricky. I'm sure in his position, he gets lots of opportunities. I'm not
[00:21:16]  even in, in, you know, that position or even close and people are always approaching me. Obviously I love what I do at eBay. I think it's like cutting
[00:21:24]  edge and some of the, you know, the best, uh, innovation happening in, in the front end right now, but you know, there, there's always
[00:21:30]  options when, when you have something like this, people who want to leverage the framework, want to see what they can do. Yeah. I mean, if we could,
[00:21:38]  we could, if we could get them, um, we would, we we could definitely do it, you know, what's next for solid. Oh, geez.
[00:21:46]  I mean, I, I want to keep on working on this SSR story, solid start. I want to, I want to make it easier. Um, I'm
[00:21:54] , you know, after this good demo with Vercel, uh, I, I actually, uh, Guillermo reached out to me. So I've been talking to
[00:22:00]  Vercel a bit, just seeing what we can do to make this integration better. Um, uh, you know, I, obviously, I, we've been
[00:22:08]  working, uh, with, you know, Netlify make deployment easier. I think that's the next step, like making it easier to get, to get apps out
[00:22:15]  there, to, you know, get people started. And I think the deployment story is a big part of it. That's why we've been so interested in this.
[00:22:22]  Um, early on, we, we, we kind of got Cloudflare to help us obviously with hosting, but we were big fans of Cloudflare. Netl
[00:22:28] ify jumped on and, um, as I said, Vercel loves what we've been doing too. So, um, I think it's a big part of
[00:22:34]  the story. Yeah. I'm not gonna lie. It's very low, almost zero percent chances. These are things that I would be working on myself. I am.
[00:22:47]  I, there's so many core type things, things based on the web platform that would take priority for me. I really just wanted to open the door. If, you
[00:22:54]  know, there's members of the core team working in different areas and there's potential there. Um, but there's so much core stuff. I'm, you know
[00:23:01] , the core team's been working on documentation, been looking to work on debug tools, uh, been working on the website, been working on, uh, you know,
[00:23:08]  solid starting the router, that kind of side of things. Um, this is, this is a whole other undertaking. Um, I, I obviously I'm excited, but
[00:23:16]  this, the thing with this is, this is an area that takes a specialty. And I don't know if, I mean, there's people around the ecosystem, great
[00:23:24]  with 3d, great with different areas. They could probably leverage a specialty, but this is not, that's me. I, I, I'm, I'm
[00:23:31] , I, I know the web, um, and I'm working on that. So maybe this will come, but probably not for me. Uh, right. So I
[00:23:41] , it's funny. Um, I, I did, I was trying to get somewhere, uh, before this, but that's good. I'm the, the chat
[00:23:49]  keeps things flowing. There's a lot of, there's a lot of good stuff that's been happening this week between the streaming and the release. So I, I
[00:23:54]  welcome those questions where I was going though, was streaming is a big deal. I did the streaming demo and I was working to Marco with the streaming and trying to get graph
[00:24:06]  to all the work. And I was like, oh my God, no library today actually supports this. I, I, I was like, okay, react 18 is out
[00:24:13]  the wind coming out soon. Next.js is making all the, you know, noise, the hype. And, and you can tell, you know, the work is
[00:24:19]  getting done and I'm, I'm right on board, been working on stuff with solid to kind of improve the performance and kind of get things there. And I,
[00:24:26]  I go to try and implement graph QL and I, I just come to the start realization that, you know, like the SSR exchanges or links or whatever, I
[00:24:35] 'm talking to your QL, all of them, you know, and even the way we had handle head metadata, CSS and JS, all that kind of stuff is not
[00:24:43]  where it needs to be for streaming the work. They assume that you just collect all the resources at the end and stick them in the head. And that's, that
[00:24:54] , that's not, you know, that's not bad in a sense, but it's, it's doubly compounded that side. It's awkward, but even
[00:25:04]  more awkward is on the client. They expect the stuff to be there before you start doing any work, right? Like a perfect graph QL. Generally, you know,
[00:25:14]  they have these normalized caches that are these big blobs and you do all your queries and they're like, okay, we've got all the data. Now we
[00:25:20] 're going to send the page with all the data. And they expect it to be there so that when you run the queries, when the page starts off, you don't
[00:25:27]  overfetch or refetch again. And I think, you know, that makes sense and that's reasonable. But when streaming world that's, that sucks because if
[00:25:38]  you can't hydrate until you have all the data and you can't have all the data until the whole page is loaded, you are blocking something. It basically neg
[00:25:49] ates the whole benefit and particularly awkward with Marco, which, you know, has partial hydration, the ability to eliminate most JavaScript on the client to have this kind of weird dilemma
[00:26:02] . So I was really hoping, I was like, okay, well, we asked coming out, people got to be working on this. And as it turns out,
[00:26:10]  they aren't. And most, a lot of library authors were genuinely surprised by this. And this is what kind of kicked up the heat a little bit because they were like
[00:26:20] , oh, I didn't know I'd have to do anything about this. There is the React 18 working group where they're talking about it, but essentially most people were
[00:26:28]  actually in the dark. They didn't even realize that how big of a change this was. And most of the industry is kind of moving on, not even caring about this
[00:26:35]  a little bit. Like, Remix Run, I'm a huge fan of Remix. Like, the routing solution, their ability to, how should I put it
[00:26:44] , like, kind of use the route to fetch the data and stuff. Like, this is the same stuff that I've been building. Those guys are on it. But
[00:26:52]  I went and asked them about streaming after I saw their post because they were like, oh, our kind of superpower is because we know the route, we can fetch all the
[00:27:00]  data ahead and then render your page. I'm like, but what about streaming? And they're like, no, we don't believe in suspense. I mean,
[00:27:06]  that's fine. But it's just cutting off that whole angle, right? You have to architect your app with that kind of consideration, right? Solid is going to definitely
[00:27:22]  consider streaming. And I think it's just important to kind of understand the impact and the implications of those kind of decisions. And we, well, we drew out the
[00:27:34]  big guns with this one. Dan Abramoff came on this, and, you know, honestly, as everyone who knows me and the way I guess about React, I
[00:27:44] 'm a huge Dan Abramoff fan. I think, I think for someone maintaining such a, you know, large use framework and must get, like people like,
[00:27:52]  I know from even supporting Marco at eBay, and like in those environments, and I know the open source, like, it's hard to maintain even libraries at a certain size
[00:28:05]  with enough user base and supporting them and being positive and all this. Dan always takes the time to answer the questions, and always keeps calm and keeps to the point. You
[00:28:15]  know, and he came in and he was like, look, we know this is going to be tough. We don't want necessarily to kind of get ahead of ourselves
[00:28:23]  on the documentation. We're engaging specific integrations. And we're going to, you know, we talked about what we're going to do in our working groups here.
[00:28:31]  And, you know, we're going to make sure that we find good solutions with key partners. And then once we got that worked out, we can kind of extend
[00:28:39]  that out to the rest ecosystem, maybe not through documentation, maybe through other means, even, you know, this is a great thread, if you want to check it out
[00:28:48] , like Rachel Neighbors, who's in charge of React's documentation was gotten by the end, you know, you kind of get this idea of the challenges, like
[00:28:57]  at one point, Dan's talking about, like, there's different ways to look at this, right? People are, there's the, there's the migration story,
[00:29:04]  and then there's the Greenfield story. And basically, from that perspective, we, you know, we have to kind of attack this in two different phases. And
[00:29:17]  I think this is really quite powerful, you know, to kind of hear from him, how they're actually doing this. I'm trying to find, if I can
[00:29:26]  find the actual thread, it's so hard with Twitter when things kind of get, get, get into this zone. But essentially, that's great. But that sucks for
[00:29:36]  me, right? It means that no library out there is going to actually be doing this stuff right now. And it's probably going to be months until after React 18 comes
[00:29:44]  out, that, that we have solutions here. So, as usual, you know, this is not a new story for Marco, I'm obviously newer on the dev
[00:29:52]  side. And this is one of the first bigger tasks that I'm doing solo. But yeah, you can understand that this, this is basically the history of Marco, eight
[00:30:04]  years, every time it's like, Oh, there's this cool thing, let's do it. Oh, no, we don't support anything that's helpful for you
[00:30:10] . Well, would you know, you know, that's kind of the thing. Now that React's getting in the zone, you know, and others are going to
[00:30:16]  feel the kind of pain of this because, you know, it is different, right? It's funny, even stuff like SSR, everything that the ecosystem is going through
[00:30:28]  right now, Marco went through five, six years ago, but they did it alone and had to kind of come up with their own solutions. So I'm glad things are
[00:30:35]  catching up. But it is it is definitely, you know, still a challenge, you know, even in this day and age. So, yes, this is a
[00:30:44]  little bit of my frustration thread, but I'm glad it kind of alerted some people to things people asked legitimate questions. And I'm hoping this keeps the conversation going and
[00:30:52]  maybe directing people to the right place. Yeah, so there's my little spiel about streaming and React as I said, it's always great to hear what, what they
[00:31:01] 're thinking or working on. Dan actually gave a few really cool insights that they're actually talking about head tags, like things to manage the hard parts of streaming for you
[00:31:10] . They're really committed. And I think it's pretty clear. I know, Evan, you actually had a tweet this week where he's like, you know, don
[00:31:18] 't call React just a library. That shipped sale a long time ago. Yeah, clearly, if they're the type of orchestration and stuff need here needs a framework.
[00:31:26]  I know there's some people trying to attack this from a framework agnostic way. You know, a great example is, sorry, Brilout's name,
[00:31:36]  Veed, plugin SSR, little plug there. He's really dedicated to trying to unify and come up with a framework agnostic way. In a sense,
[00:31:46]  people who work on web components are also going to do that. I think that's great. I think it's really cool to see if we can kind of unify things
[00:31:54]  and, you know, save the work. I also think that generalization also kind of balances out. So it's like if a specific target, you know, the
[00:32:04]  work amount is 1x, generalizing it is probably going to make the work 4x, but it saves the duplication of the four people doing it. So, you
[00:32:15]  know, once you get it wide enough, maybe the payoffs there, but there's other challenges there in that. I think Astro, which I kind of talked
[00:32:25]  about a couple of streams ago, might be the most successful project I've seen being framework agnostic. Obviously, bundlers and build tools are to a degree, but
[00:32:38]  even then, like even with Beat, we had to kind of fight a little bit for some of the templating and all that. But Astro has done an amazing
[00:32:46]  job, mostly that their concept is so simple and they got the dodge routing because they're an MPA and there's, you know, static generated MPA. Even server
[00:32:57]  rendered MPA would probably be fine, but routing is the framework. I had a whole stream about routing and I think it's super important to kind of recognize that everything
[00:33:12]  else, at least for a single page app, spawns from it. That's why a single page app is a single page app, because of the routing, the client
[00:33:19]  side routing. So I think once you kind of get into that mindset, it's easy to understand why being agnostic is hard. That kind of communication does differ between
[00:33:31]  different rendering approaches, different technologies, right? As much as, you know, people working on these want them to kind of unify, like even things down to update
[00:33:40]  model communication makes such a big difference. For concrete example, in a VDOM library or even a lit, when you go to a new page, you just call render
[00:33:51] , right? Like you just go, oh, new page render. If you go to the same page with different URL parameters, you just call render again. But like
[00:34:02]  a fine-grained library, like solid, you don't, you actually have to update the reactive signals. You know, and it's the same kind of thing with
[00:34:12]  a component update model versus a fine-grained. I've hit these kind of obstacles the whole time since I started. Maybe that's why I'm pessimistic on it
[00:34:19] . But the thing is, it's, how should I put it? Even those kind of agnostic solutions still have an optimal point. They still have the thing
[00:34:32]  that they're trying to build. To me, it looks a lot like the, you know, the 15th standard. You know, we have 14 standards. Let's
[00:34:40]  fix that and make a single standard. And you just end up with the 15th standard. It's basically that kind of scenario all over again, because, you know,
[00:34:50]  there's a thing that fits their mental model. There's always assumptions that are there. And as I said, it's a valiant effort, but you can always
[00:34:59]  optimize better for the specific case. So it's definitely a challenge. Okay. That's my little spiel on that. I'm sure I can talk much more on that
[00:35:11] . But let's continue on with the stream. What's it? How are we doing? 35 minutes in so far? People still there? Yeah. Why don't
[00:35:18]  you get me talking, you know? But yeah, so let's, let's see if we can, we can kind of turn this around and get back to where I
[00:35:31]  was trying to start from, which was talking about two-way binding, which was kind of the start of this week. And actually I can probably look through this thread
[00:35:42]  to find what I'm looking for next. But yeah, let's, let's throw up that banner. This helps me editing later, but this is officially starting our conversation
[00:35:54]  on two-way binding. Okay. Okay. Yeah. I'm, I'm, I'm probably not going to find it here. I read this article this week
[00:36:08]  and it goes how Svelte makes two-way binding safe. This article tells a pretty decent story. It looks at Angular and then looks at Svelte and explains
[00:36:28]  how Svelte's two-way binding isn't like crazy unperformant the way Angular was. But the, in my honest opinion, it actually, this article
[00:36:39]  misses the point, uh, actually the actual nuance take of it. Because again, I feel, how should I put it? I feel because of my experience with fine-
[00:36:49] grained reactivity and with Knockout JS, I have a very unique perspective. Knockout wasn't, how should I put it? Unpopular back then, but it
[00:36:58]  still wasn't like an Angular or React. A lot of people went from like backbone to Angular to React. They went like, kind of like on this train and they
[00:37:06]  never tried some of the smaller options. And fine-grained reactivity was always different. And honestly, it hit different problems at different points. And the thing,
[00:37:20]  in my opinion, like two-way binding is worse in every, in like the worst place for two-way binding out of all technology and approaches is with fine-gra
[00:37:32] ined reactivity. That is like the, that's the place where two-way binding is at its absolute worst. And that's why when I, when I read
[00:37:40]  this article with Svelte and why it's safe and, you know, and the whole Angular thing, it wasn't about direct performance. He, he, he details
[00:37:51]  how with, uh, two-way binding essentially, um, like Angular runs these kind of dirty checking top-down digests. And you, you kind of,
[00:38:03]  it basically got really inefficient. Let me see if I can actually paraphrase the, like find the exact quote there, right? What is one-way binding? Everyone
[00:38:11]  does one-way binding. Yeah. Two-way binding. Blah, blah, blah, blah, blah, blah. Yeah. Yeah. Yeah. Okay. So
[00:38:19]  where was the thing? With traditional two-way binding, you don't really have a way to know when the value is updated. So it becomes difficult to make sure
[00:38:27]  that any state derived from it actually up to date. Angular, Angular 1 has a digest watchers that reruns the whole template expression in the component when something might have changed
[00:38:36] . And yes, it does all the performance problems. See, this sucks, but I'll tell you something else. Two-way binding in reactive libraries was really bad too
[00:38:46] . And it didn't rerun everything. It only ran exactly what changed. Like that part was still the same as solid. Um, you know, like that this
[00:38:55]  is these, these technology approaches that we use today, um, have existed for like a decade, like, and it's always interesting to me, as I said at the
[00:39:06]  beginning, to, to, to notice what fundamentally has changed when things come around, because sometimes they have changed other times they haven't. So the, I guess the question
[00:39:18]  ultimately is, is two-way binding safer and svelte. And, and, and two-way binding is safer in probably most frameworks. Um, like,
[00:39:44]  but I'm, I'm still partial skeptic unless, unless, um, certain conditions are met, right? Um, how should I put it? Like, s
[00:39:52] velte's two-way binding is safer. And I'll talk about why in a minute. Um, how's the quality doing? Have we, have we jumped back
[00:40:05]  up? I know my internet always, isn't always perfect, but I hope, I hope, I hope we're, I hope we, we, other than a
[00:40:11]  few dips, we, we're okay. Um, but, um, and similarly, um, upcoming Marco's two-way binding is also safer in, in, in
[00:40:23] , in the same way. But, um, maybe we should just start with what is dangerous about two-way binding, right? And this is possibly maybe for some
[00:40:38]  people that's going to be kind of esoteric. Does safe refer to performance? Exactly. That's the thing you can, you can still be performant in
[00:40:51]  a system and not be safe by, at least by, by my definition. I mean, obviously performance is a big part of it. And this is why I felt this
[00:40:58]  discussion sort of missed the point. Um, sorry, let's hide some of these. So what's dangerous? Let's start with what's dangerous about two-way
[00:41:12]  binding. Well, first of all, in our simple case, like binding to a form field, it is not bad. Like, let's face it. The, the
[00:41:22] , the, the values can't go anywhere. They're, they're localized when you're like, here's an input and you can bind both ways to it. There
[00:41:30] 's no problem there. And honestly, you know, that, that that's not a bad feature to have, you know, and you can kind of build specialized form
[00:41:40]  libraries to do that in React or solid or whatnot, you know, and that's why I wasn't terribly concerned with that part. Um, there's a question about controlled
[00:41:49]  and uncontrolled, which I think is actually more relevant. And that is when you step the next level up, but what makes two-way binding, um, dangerous is
[00:41:58] , is the same reason that functional programmers consider mutability dangerous. Steve, why don't I even have to talk? I got, I got Dylan here. This is
[00:42:10]  yeah. Predictably introspection, interception performance. Yeah. The, the, the, these are kind of qualities you want. So from that perspective, old
[00:42:21]  frameworks had a strike against them, uh, right, right from the beginning. Um, like they mentioned Angular's digest system, which is kind of like, was like,
[00:42:31]  oh, we're running everything again. We have no clue what's going on. Um, earlier reactive systems didn't have batching. Um, and you know,
[00:42:40]  like they, they could sometimes, you could just kind of infinite loop it a bit, you know, and just wait for the system to settle and the performance would be kind
[00:42:49]  of poor, but no one would really notice, you know, you just accidentally subscribe to something somewhere. Um, and maybe then reuse that, uh, function somewhere else.
[00:42:59]  The biggest challenge of me kind of to show off the dangers of two-way binding is that almost all the situations to kind of display where it's bad are like really
[00:43:09]  bad or convoluted, but they're the kind of things you hit in real code bases. So if I had more time to prepare, I would have actually come up
[00:43:18]  with some terrible ones for you to kind of see, but I can, we can still play with it a little bit and get, get a feel for it. Right
[00:43:24] . Um, the, the biggest one is come down to the losing track of what's, what causes updates. Um, and the biggest culprit of that, in my opinion
[00:43:37] , at least for fine grain are proxies and, uh, nested reactivity. And like, I, I, let me just open like a, I
[00:43:48]  don't really need a playground, right? So I'm just going to code editor to kind of show what I'm talking about here. You, you've seen someone kind
[00:43:56]  of go like, oh, uh, it could even be cons, doesn't matter. Like my thing equals, you know, the objects, you know, with some
[00:44:07]  stuff on it, right? Here's some stuff. Right. And we've seen my, and then you go function my thing. And then you're like, okay,
[00:44:22]  like, do you, does my thing like, like, this is, this, this is the like classic example of, um, you know, people talking about,
[00:44:40]  um, uh, um, the whole mutability versus, um, immutability problem. Right. Um, if, if your data is mutable, you don't
[00:44:52]  even know if stuff is even on that object anymore. Um, where immutability gives you that guarantee. And the challenge with, with that is there's like,
[00:45:02]  if people don't obey a contract and similarly, we have this problem with, with, with, uh, let's like, let's just, let's use solid here
[00:45:13]  as an example. I, I, I definitely have the means to do terrible stuff if you want to, right. It starts with a, something called create mutable.
[00:45:20]  If you want to do bad stuff with solid, just start with this one. Um, uh, tweet mutable store. Yeah. Okay. And, uh, what
[00:45:35]  am I doing? I like, you know what? Screw this. Let's just go back. It'd be easier for me to start from a template that exists.
[00:45:41]  Yeah. There we go. Let's just go for create mutable and let's go over and whatever. Now, now we instead of a signal, let's use create
[00:45:59]  mutable. Okay. And I mean, this is just the analog of our, of our, of our previous example, right? We have stuff with some stuff on
[00:46:11]  it, you know, this stuff. Isn't good enough though. We need like an array maybe. And then maybe in that array, maybe a user name, maybe a
[00:46:25]  first name, like I, I, I, I need to make this like much deeper and like, you know, it could be a store. This, this isn't
[00:46:36]  immune to just, you know, um, simple stuff here, but yeah, this doesn't return array. This returns just my thing, right? And if we pass
[00:46:49]  my thing to, you know, whatever child child one or whatever, like, I, I don't care how many child beeps we go. We just go my thing
[00:47:07]  equals my thing, you know, and let's make child one, but at a certain point, uh, yeah, child one. And some people probably still, even after
[00:47:23]  I do this example, because it's not convoluted enough, we'll still probably be like, well, whatever. And then this is child two. And sorry.
[00:47:32]  But I, this is just, uh, where are we, let's go stuff. Um, and it's, what is it? Uh, let's go props
[00:47:52]  dot My thing dot stuff zero. And then let's just go, let's just copy this again for child two, essentially. Um, and maybe like, I
[00:48:19] , I, it's hard to even make this a convoluted enough, like maybe like with this, a simple example, but maybe what do we got? Like
[00:48:29]  S equals, um, props dot stuff. Let's, let's create a, an effect. It does something with props stuff. And I don't really care what
[00:48:55]  this is. I mean, my, my point is at a certain point through this whole process, um, uh, I'm missing some, maybe, maybe this isn't
[00:49:09]  even nested enough. Maybe, maybe I need a, uh, address on it. And street. You know, and Jones Avenue. Like, what I'm trying
[00:49:27]  to get to is at a certain point, you're doing some, something here and S dot. And. You know, I, I can't even like. Add
[00:49:46] ress. I use. We use constant stuff. And this is one of the things that might have changed since back in the day, but like. You could be doing some
[00:49:59]  kind of calculation here. And if you're, if you're okay with mutability, you know, in your coding patterns and stuff, you, you, a dot
[00:50:07] . You might end up accidentally doing something where you actually assign street to, to some temporary value, you know, temp street. And then. Like, I, I
[00:50:25]  don't know the operation. Maybe you're swapping some rows. Like what I'm getting at here is at a certain point. Do you know that this assignment's going
[00:50:34]  to cause your whole tree tree to re render? Like, or like, you're going to cause some butterfly effect over in, over in like somewhere else complete in your
[00:50:47]  app. Because someone like this thing is bad because someone might actually assign this address to a different variable. Maybe, maybe they're like, okay, temp address equals this
[00:51:13] . And then they pass it as a prop to somewhere else. Like, I'm hoping I'm doing a decent job of explaining this because guess what. Address street
[00:51:28]  equals temp street is still going to go change everything else somewhere else in your app. Like this is obviously localized. I probably should have done this maneuver in child one or something
[00:51:42] . And this, this is, this is, this is two way binding the bad part. And the truth of the matter is solid doesn't really protect you from this
[00:51:56]  that much. I, I mean, it does because I tell you to use create store, but in general, people can just kind of do use create mutable and going
[00:52:06]  to go ham. Um, view has the exact same problems, but it can protect you a little bit because it has a V DOM. So even if everything re-rend
[00:52:15] ers, you know, a bunch, it's not that bad. It just dips, but in solid, if everything re-renders, we create real dom notes
[00:52:20] . So the, the downside of being so performant is we have less safety nets and that that's a big part why I've never gone that way, um, with
[00:52:30]  solid, but there's other ways to build safety nets. Nested reactivity, non-localized assignment. Very, very bad. Okay. but what
[00:52:51]  about, so you can do this and it's pretty bad. Solid can do this and it's pretty bad. Solid tries to make you not do it. View is there
[00:53:00]  to be easy. So it's probably not that bad, you know, but Svelte and Marco protect you from this. And the way they protect you from this
[00:53:13]  is actually really, really quite simple for the most part is, um, you, you, you can't just pass through deeply nested reactive values. Like I, I
[00:53:27]  went a little bit crazy here, but the truth of the matter is if this props, I pass the stuff thing through, I can't reassign props stuff because it
[00:53:37] 's, it's, it's been passed down one way. Like this example is broken, but if I tried to go prop stuff equals something new, it's not going
[00:53:45]  to work because it's, it's one way. The problem with two-way binding or sorry, not two-way binding. The problem with nested reactivity to
[00:53:52]  like, like this is even goes past two-way binding. You can actually kind of get around two-way binding because your objects can be nested inside objects inside objects
[00:54:00] . That's, that's even arguably more dangerous than two-way binding. Um, I actually, someone asked me if a while ago, if I could figure out
[00:54:10]  how to make Svelte's reactivity work cross template without using stores. And, uh, I did, I, I, I figured out how to add prox
[00:54:20] ies to Svelte, um, in such a way that it used Svelte's template reactivity instead of stores to actually, uh, cause updates across template.
[00:54:29]  But it broke things in the exact same way I'm talking about here. Um, because updating it would cause the parent to re-render. And I mean, I
[00:54:38]  can actually probably, let's see where they hide this stuff. Where's bookmarks? I can probably show you this. Yeah. Check this, this, this sucker out
[00:54:48] . Um, I, I, I actually made a proxy implementation. This is kind of silly because I'm reassigning state to make it trigger, but essentially with this
[00:54:58]  proxy implementation here that I'll show in a second, I could make something stateful in Svelte, like a deep nested proxy, and then even call changes that
[00:55:08]  weren't part of the template. Like if we'll talk about this when we do, uh, you know, we'll talk about this a bit more later when we,
[00:55:15]  when we do, uh, we look at the rebels and look at the way the different frameworks work. Um, but in Svelte, if you pull an assignment
[00:55:21]  out of the template, they don't know it can change. Even if you pull it out. Yeah. They basically have no way of knowing, and that's part of
[00:55:29]  their safety net because literally for something to change, the assignment has to happen in the same file. binding kind of gets a little bit away from that, but it's
[00:55:40]  shallow. It's literally just that value. You can't, you have to rebind it again. You can't, you, you can't get away from, from
[00:55:48] , from this. Right. And, um, that's part of where the protection comes in. The compiled frameworks like Marco or Svelte don't give you true
[00:55:57]  nested reactivity. There's semi-performance trade-offs in certain scenarios there, but you all, there's also performance gains because there's less complexity to deal with
[00:56:08] , uh, like subscriptions at runtime and stuff. So like, it's a wash. I think it depends, like, unless you're trying to do something really complicated,
[00:56:17]  but then again, if you need it, you can all like this, this example is forced with the state equal state, but we were, I was playing with some
[00:56:23] , some Marco tag variables with proxies and you can, you can, you can get nested reactivity or something like it. If you want to, uh,
[00:56:30]  you just got to make a proxy. So it's not like it's out of the table. It's just the default is set up in such a way that it's
[00:56:35]  actually hard to abuse it. And that's, that's the key, the key point here. Um, yeah, I'm going to show this example a bit more later
[00:56:43] . Um, so that's, that's a bit of like the terrible side and then a little bit on like the protection. I don't know if the protection makes
[00:56:52]  sense yet. We might have to dig in a bit more, but essentially I think when we look at Svelte, we'll do that, but let's, let
[00:56:58] 's look at the positive sides of two way winding first. I took views playground example and remade it in every single framework that had an online rebel. So not react,
[00:57:08]  but I've got solid here. I got view here. I got felt here and I got Marco. And, uh, I thought it would be fun to kind of compare
[00:57:16]  the code, kind of, kind of, kind of look at stuff a bit. Um, we're going to talk about two way binding and stuff during the, during
[00:57:23]  the rest of this, but, um, I would say this is now switching over to our next segment here, which, uh, which I'm calling repls and diving
[00:57:35] . Um, this is kind of, uh, a bit fun because, um, it's awesome these days to see the use of compilation in, in JavaScript frameworks and
[00:57:46]  kind of see how opinions differ and how, you know, you can, you can do different stuff. I'd love to have react in here too, and kind of play
[00:57:53]  around with it. Cause it's like the missing link here, but being able to just have an example and just go through these rebels, um, myself and, uh,
[00:58:02]  Dylan, who's in the chat and Michael, who's also in the marketing. We spend a lot of time in these things because you start, you're designing something
[00:58:08]  like, well, how does that work in that language? Or how, like, how did they approach it and stuff? And this is invaluable tool. Um, I,
[00:58:16]  I, I, some of you might remember, I did a tweet on Twitter, maybe, Ooh, I'd say almost a year ago now where I compared the,
[00:58:24]  you know, effects and stuff and the different timings of the console log and the reactive systems. Um, and that was based on one of those sessions that, um,
[00:58:34]  myself, Michael and Dylan were doing while we were designing the next version of Marco. We're like kind of surprised. We, we went there and we realized that every framework
[00:58:41]  had different behavior and we're sitting there going, which one's the best, what makes sense? Um, and the, I, I don't have this example right now
[00:58:50]  in front of me, unfortunately, although I could probably dig it up if I really tried it. Actually, I don't have to try that hard. I'm 100
[00:58:55] % sure I bookmarked it. Um, to do, to do, to do bookmarks. The, uh, the, um, just get a little insight of
[00:59:06]  what I actually bookmark. Um, not write less code. Yeah. Yeah. This one is that this simple react example was different in every framework, all it is
[00:59:21] . Um, if, if anyone's followed my talks on reactive programming, there's basically, you know, what I call the three primitives, um, signals, um
[00:59:31] , derivations or memos or computers, and then reactions, the three of them. And this example basically tested the timing of all three. We have use state, which
[00:59:41]  is our like stateful signal, whatever we have used memo. And then we have like our event handler and, and essentially, um, using, using that kind of
[00:59:58] , uh, mechanism. Uh, I, I could kind of see the difference and the interesting enough, they all console log different things. Um, react everything's in
[01:00:09]  the past until everything's completed. So at that point, then we log it every, and because they use micro tasks to, to batch everything it's zero, zero,
[01:00:17]  zero. It's like in this example, it starts with zero. And then you, the whole point is you update it to one on the next line. It's,
[01:00:23]  it's still zero, zero, zero view the reactive part of the system updates, but the side effects don't. So it's one, two, and then zero
[01:00:32] . Svelte, the state updates, but then the reactive system doesn't update until afterwards, like including everything else. So, and, and then in solid, everything
[01:00:41]  updates immediately. And from, from the, from, from that perspective, you're kind of like, who the hell is right? This, this is crazy that things that
[01:00:54]  look so similar, because I actually put the other implementations here. And since the dawn of hooks, things actually look really similar. Like you saw this react component,
[01:01:02]  you know, you got a couple of things declared, and then you have your bottom with your click handler. When you, when you look at like how this looks in view
[01:01:09] , you know, uh, it's not that different. You know, you have your couple of signals, your computed, and then again, you got to go up here
[01:01:18]  where you see your click handler. And then the codes right here, update, like the syntax is different, but it's a couple of signals double, like these are
[01:01:27]  all the same looking things. And then the solid, you know, looks a lot like react, but these are basically analogous, except their behavior is different. So this
[01:01:38]  is one of the reasons when I like was talking, uh, about like people kind of going, Oh yeah. You know, like compilation of different framers stuff. These
[01:01:47]  are the the kind of challenges and insights and thoughts kind of go into this, this thing, right? Like how do, and why do these operate differently? The funniest
[01:01:57]  thing about this is everyone will have an opinion, like which one's right. Like if I asked right now, I bet you chat can't even agree on this.
[01:02:08]  We came to one realization in the end though, which I think was, was kind of helpful. React and solid are actually the same. Um, I, I know you
[01:02:19] 're like what zero, zero, zero and one, two, two at first you go, Oh, they're the same. Cause they're glitch free. They're the
[01:02:24]  only ones that present a consistent model. Right. If, if you look at it in a sense view and Svelte it's broken. If somewhere you were going
[01:02:33]  that one times two equals result in, you know, like in react, you went zero times two equals zero. That would be true in solid. If you went one times
[01:02:46]  two equals two, that is, that is also true. But for view, you might get like one times two equals zero and Svelte, you know, the
[01:02:56]  same thing, you know, depending on it. And, but the difference between react and solid is when the batching happens in react, it just hadn't happened yet in
[01:03:08]  solid. If you, if I put that inside a solid batch command, we would also get zero, we'd also get zero, zero, zero. So just, just
[01:03:17]  to be clear, um, react and solid are actually the same consistency, but view and Svelte's position are equally justified in a certain way because view says,
[01:03:28]  Hey, your reactive system's up to date. We'll handle the side effects when we feel it's the right time. Some people think that's logical. Svelte
[01:03:39]  you might be, and for us, the longest time we're like, Oh man, Svelte's approach is just like so broken, but look at the code.
[01:03:48]  Look, let's look at the Svelte code for example. If you wrote this code where you went, let count equals zero, and then you went count plus
[01:03:57]  plus, would you expect double count to have changed? like Svelte might be broken from a consistency standpoint, but it actually mirrors the behavior of native JavaScript. Yeah
[01:04:21] . Yeah. Let's see. Can I, can I link to this thread in the chat? Yeah. This is, this is, this is, it's another
[01:04:27]  great one. It's pretty old. Let me see if I can grab this. There you all are. You can see the discussion. Um, it's funny. I
[01:04:40]  still have the banner up for repl diving, but, um, you know, this is the, the, our conclusion funnily enough was the, the, the
[01:04:54] , as always is the, the right answer depends a little bit. I, we think, you know, we thought we decided that consistency obviously was important, but it's
[01:05:02] , it's not that simple because there's certain parts of the framework's design that makes you design that like view seemed really attractive for a while because for the average developer using
[01:05:11]  it, um, it just kind of makes sense. You know, it's, it's kind of expected. There's no kind of trade-off. The problem
[01:05:19]  with the reacts model is when you update the count and then you read the count, people like, wait, I just freaking updated the count. Why is the count not updated
[01:05:27] ? Right. That, that, that everyone knows why, you know, if you learn react, but for a new developer, this is incredibly confusing. They're like,
[01:05:35]  I updated it. Why is it not updated? Right. Most people aren't looking at their refs. So view kind of gets that, that scenario there. Cause
[01:05:47]  the, the problem with the solid approach obviously is if you, if you do, if you update everything immediately, what if you have to do multiple operations, you know,
[01:05:54]  would that be expensive? Well, if you are re-rendering whole component trees, they are, if you're doing something fine grain, maybe not. Right. So
[01:06:02] , and Svelte's model kind of just like, let it lay, you know, kind of can work for for it. So is it, yeah. I
[01:06:12]  mean, I don't know if there's much more to say about that, but that, that was kind of the, the, what I wanted to show here. Right
[01:06:21] . So, okay. Let's, let's, with that in mind, let's, let's, you know, and let's go back and look at what
[01:06:33]  it, what it looks like to do some simple form stuff. I'm, I'm hoping to go and get to a little higher level here too. It looks like Dan
[01:06:42]  and Dylan have already kind of had a discussion in the chat about something that I will be getting to a bit later, but essentially here's our example. And I'm
[01:06:52]  going to start with solid because it's the most verbose version. This, this is not a place where, uh, solid gets the benefit from the, the shortness
[01:07:00]  of, uh, of, um, you know, like terseness of, of language, let's speak. It's very explicit. And in this kind of case
[01:07:08] , let's face it, two-way binding is not doing it or sorry, not having two-way binding. Isn't like, you know, a big gift,
[01:07:16]  gift, as I mentioned in more complicated scenarios, you know, that verbosity is, is, you know, perhaps worth it, especially in systems where it's,
[01:07:25]  it's actually dangerous to, you know, have two-way binding. But here we create our signal and because we have this tuple, you know, this is all
[01:07:34]  intentional in solid, this kind of separation. It's, it's actually hard to two-way bind in solid. Like, even if we made helpers for it,
[01:07:40]  you'd still have to pass in two functions. You like, like it's even with like a custom directive and stuff. We kind of made it sort of harder.
[01:07:48]  The way out of it would have to be using compiler tricks, which we could talk about in a minute, uh, when we get over to Marco. But essentially, this
[01:07:57] , this is actually kind of set up in a way that it's purposely difficult. I mean, the whole idea is we, we have a value and then on input,
[01:08:07]  we update the value. So like, yay. I mean, right. This is one of the first demos people show with, with JavaScript frameworks. The next one on
[01:08:20]  the, now we're going to get into two-way binding land. So we're going to look at view. And sorry, I'm okay. Um, view is
[01:08:28]  a little bit nicer, right? Solid with all that stuff. We had, that we even had, this even shows off that we had to use a fragment to get the
[01:08:34]  equivalent code. Like there are some trade-offs with JSX. I like showing this because I, I like a lot about the stuff about solids design. This is
[01:08:43]  like the worst case scenario I can think of for, for ergonomics, for this stuff. Like trying to maybe unnecessarily event handler, having to use a fragment. This
[01:08:54] , this, this is, this is about as bad as it kind of gets when in comparison, right? There's places where solid ergonomics are good, but this
[01:09:03]  is a place where it's pretty, it's much awkward. So yeah. Yeah. Like knockout to like back then every framework was like, wow, if you update
[01:09:15]  this box, it automatically updates the text at the same time. This was like, wow, data binding. Right. Like this, this, this, this, every
[01:09:26]  demo was this demo. It's funny because all the other rebels except view don't use this as their main demo anymore. Um, but view did. And I was like
[01:09:33] , okay, let's just do it. My favorite topic when JS comes back. Yeah. I mean, if you call this biting you, I, I actually still kind
[01:09:43]  of prefer the consistency, but that's, that's the, that's a different thing. As I said, mostly because of the knowledge of the fact that I,
[01:09:52]  I don't think with solid, it would make sense to embrace two way binding in, in, in, in, in, in, in its, in, in its
[01:10:01]  hole, so to speak. Right. Um, because the, the, the dangers I talked about earlier. Right. But yeah, we get back to view and,
[01:10:10]  um, we have our V model on our message and this time. Okay. So they import their signal or ref or whatever, create the ref and then bind it. Sorry
[01:10:24] , bind the value. They use double curlies and then V model it to get to, to basically have the special behavior. Um, generally input binding is special compared
[01:10:36]  to other two way binding, because it has to do something on the value. It actually has to get the thing off. It's not just the straight, like, here
[01:10:43] 's the signal both ways sort of way it's, it has, he has to pull the value off the event. Um, and there's some other details that Dylan can
[01:10:52]  probably tell you in, in, in more earnest than me, but, uh, essentially you, you get the idea here, they, they, they, they use
[01:10:59]  script and template to separate the code. Um, which probably adds more verbosity over what you'll see over in the next couple of solutions, but we can say hello stream
[01:11:09]  just as easily here. Right. And let's move on to Svelte. So we went from 13 to 10. What's Svelte going to be another,
[01:11:18]  about the same amount off. Yeah. Now we're down to six. And we still can do our thing. Svelte, you didn't have to import the
[01:11:27]  primitive, which is kind of nice. Um, because, uh, you know, all their lets are it. And, um, yeah, someone's talking about the
[01:11:42] , Dan talking about the details here of view. I'm, I know the basics. I'm not going to pretend that I'm like, I'm expert here, but
[01:11:50]  I'm just trusting what the REPL gave me this one. At least I didn't write myself. You was the starting point. I'm out of the four frameworks here
[01:11:56] . I am the least familiar with, with view, to be fair. I spend more time with Svelte. I spend obviously more time with Marco and solid. Um
[01:12:05] , but you can kind of see, you just bind value. I, I, there's probably a shorthand for view that looks better. I actually like this
[01:12:13]  a little bit nicer, just in terms of it indicating that I am binding the value. It's not the V model thing came from angular, you know, and they're
[01:12:21]  like, I, I didn't, I know that it has other uses, you know, binding a whole model and stuff, but this is kind of like, I am
[01:12:29]  binding a value. Right. Um, and then finally Marco, um, which is the, obviously the tercest of the options here. Um, this is using
[01:12:40]  the tags API and you know, same, same fun again. Right. Um, and because it's like Svelte, there's a language, you just have the
[01:12:49]  lettable here. Right. And then Marco uses, um, it's funny. You can, you can tell the roots of some of these things here, right.
[01:12:57]  Cause solid is using JSX. This is very much react view is using like these double handlebar type things, uh, which was really common in the original, uh,
[01:13:08]  angular and kind of like HTML, um, templates, like the ones where you'd actually render these onto your markup, like with your page load, that's where
[01:13:18]  view had its start. Um, Svelte actually uses, um, more like modern handlebars type syntax, and they kind of got to invent their own, which is
[01:13:25]  kind of cool. So you can definitely see where Svelte's kind of very modern feeling and Marco, this is, this is like pug and, and like server templ
[01:13:36] ating language type thing. I know this is the symbol of the JavaScript interpolation, but, um, but like, uh, You know what I mean? Like this
[01:13:45] , this has that kind of feel to it. Right. And in Marco value, and then Marco takes the language thing to the extreme on the side, instead of just using
[01:13:56]  HTML semantics, they add syntax for, for stuff. So binding is colon equal instead of just equal. And like Svelte, I really, I really liked
[01:14:06]  that because it just makes it, you know, really clear what you're doing. Um, and yeah, so that's kind of the basic comparison here on the two-
[01:14:15] way binding. So you can see the frameworks that I personally work on are about the most opposite ends of the spectrum here in terms of what the code, the code is
[01:14:32]  like, uh, but, uh, I think it's really interesting personally, because I love this stuff. And I, I think, as I mentioned with the example,
[01:14:45]  with the different execution timing between react, all the different frameworks and stuff, these decisions reflect the philosophy and the, the being of the framework. Every framework has an identity to
[01:14:56]  me. They have like a personality and when working on Marco, we're very much, uh, kind of in tune with that personality. You gotta, um, you
[01:15:06]  gotta, you gotta, you gotta kind of see that perspective. Like Dylan, myself have worked a ton with react. We understand it. We understand the trade-offs of
[01:15:13]  two-way binding. We, we, we struggled actually on our team a little bit. Michael was probably the first one to be kind of more pro on the two-
[01:15:21] way binding side. Me and Dylan were both like, I was kind of like, and Dylan was like, it has to be done in the perfect way. Otherwise it
[01:15:30]  is terrible. Like we're not going to accept two-way binding unless it is like, um, has amazing capability, right? You know, like it does everything exactly
[01:15:39]  the way we want it to. So, you know, but looking at Marco's language, we're like, two-way binding makes sense. When you say this
[01:15:51] , it makes me think of Ember, right? Like, like Ember, Ember is, uh, is, is really quite, um, you know, they
[01:16:04] , they had that, uh, what the, let's just look it up. You, I, it's a, it's like a chipmunk or something.
[01:16:14]  What? Like, um, do people, do they have someone dressed up in a suit at Ember conferences? I just love it every time they, they, they
[01:16:25]  can kind of style it. Look at this, this, this, this, this, this, more frameworks need this, right? Yeah. Ember is great.
[01:16:39]  Ember was, was my, uh, like I, I needed to do the heavy framework at one point to kind of get an appreciation for it. And for me,
[01:16:46]  it wasn't Angular, it was Ember. Um, Ember spoke to me because the way the binding stuff worked, I, I, it was more closer to
[01:16:52]  the fine-grained and I was like, I, I was really into Ember for a while in the 2012 time period. So can I kind of look back with
[01:16:59]  this fondly, but yeah, Ember, like, oh man. Yes. Yes. And, and actually this is a good place to talk and get into some of
[01:17:14]  the nuances of two-way binding here because I, I, I think Vue does this. I'm a bit unclear. I don't know if Svelte
[01:17:23]  does this and I would have to look at the docs, but, um, like obviously with something like, you can always diverge with like React or Solid to like the
[01:17:36]  really explicit way of wiring it. It's a pain in the ass, you know, to, to, to, to wire stuff in a certain way, but like
[01:17:45] , uh, um, how should I put it? You can always default to just doing everything explicitly, right? I have an example here and I'm, I'm going
[01:17:58]  to have to pull up Dev too for a minute. So part of me, because when we were working on Marco, I, we came up with a pretty good example
[01:18:07]  of control, which I think is right up what you're asking, uh, for, for Dan. And let's see if we can implement this in a few of the
[01:18:16]  other frameworks to kind of get a feel for what it, what, how this actually works. And actually Dan being on the channel and being such a, so good at V
[01:18:23] ue, you might be able to help me with my, my lack of knowledge and Vue specifically. Introducing the tags API preview for Marco. Um, not many
[01:18:32]  people read this article, not as many people I would have liked can given how crazy innovative this is when you consider that we applied the language of fine-grained reactivity
[01:18:43]  on top of a virtual DOM library. Um, you know, that's kind of unheard of without using runtime reactivity. This is compile time reactivity on top of
[01:18:55]  a virtual DOM library. But what I'm looking for here is we had a great example here about controllable forms. Okay. And did I just do? Okay.
[01:19:18]  I think I'm going to jump straight to the controllable example. Unfortunately for me here, I don't get to, uh, how should I put it? I
[01:19:31]  don't get to, um, copy and paste because, uh, these are all the image things. So we're going to whip this up really quickly here, but I
[01:19:40]  hope, I hope you can kind of follow here is generally speaking, there's two types of approaches to, um, form controls, right? Controlled and uncontrolled.
[01:19:51]  And when you have controlled forms, it's the parent, the parent, and this isn't just forms, it's components in general, the parent, uh, basically
[01:20:01]  controls the input. Um, it sets it. So an example of that, see, it's easier for me to show maybe using solid syntax for me personally, and because
[01:20:13]  it's similar to react and all this stuff, but let's, let's pretend we had a, um, input component capital P, right? And And it
[01:20:29] 's going to return an actual input, right? Now we're going to have our value and props dot value, and we're going to have, uh, on input
[01:20:44] , which equals, uh, props dot whatever. Let's just call it on input. And Yay. Our stuff still continues to work. This is what I call controlled
[01:21:03] , right? Because the, the parent controls all aspects of this. If the parent was like, like this, this child doesn't even have any state. If the parent
[01:21:14]  was like, no, um, we want to limit this to only, I don't know what, what's what, let's go slice free. Did I do
[01:21:26]  that right? I did. It's the other way around. But, uh, like that. Actually, a solid ability to control is not quite what I wanted to do
[01:21:41] . What, uh, I need to actually, yeah, this is actually a good point. I don't know that many frameworks actually handle this properly in a sense.
[01:21:58]  So if you, if you consider this properly, cause this is kind of reacts. The thing, um, I handle this properly. Let's see if now this will work
[01:22:10]  because I didn't set it. I have created a form now that can't be longer than five, five, five characters, obviously the initial state. But my,
[01:22:29]  my point is, um, the parent has complete control over what's, what's, what's happening here. Right. Um, it is not, it's not up
[01:22:39]  to the child. The child isn't even stateful. This is, this is, this is essentially the, the controlled form. The uncontrolled form is when,
[01:22:51]  is basically when you have the state on the inside, right? When you go, oh, actually, I'm gonna, I'm gonna put this inside and in the
[01:23:02]  uncontrolled form, you might do something like, um, um, initializing this to props dot value. Right. But you're not like the parent doesn't control
[01:23:26]  it. Right. This is, this is essentially the uncontrolled form. Right. Um, it's still, it's doing its behavior, but the parent, parent has
[01:23:37]  no means to do anything with it. Like this isn't an input, this, this, this is an input, this is input limit five, right? Essentially I
[01:23:46] 've created input limit, limit five. And now obviously I should, I need to just, oh, right. Okay. Let's just get this all wired up properly
[01:24:14] . Okay. There we go. In, input limit, limit five, right? See how the top seat stays. Hello world. But the problem is the parent has
[01:24:23]  no, has no control. No, no, no knowledge of this. I could try and middle grounded a bit by adding like, uh, like, uh, on kind
[01:24:33]  of like an on change thing here. And then. All right. I've been using Marco a little bit recently. Um, and then basically, you know, go
[01:24:45] , okay, on change value, set message value. Right. And if I do this, I could get it to, to call props on change with our, with our
[01:25:00]  new value as well. Right. And if I do this, it does reflect back, but my, my, my point is, um, this is where people usually
[01:25:20]  end up in the end. Right. I started with uncontrolled. Then I went to uncontrolled and then I went to this mess. And what this mess is is
[01:25:37]  basically hybrid of both garbage, essentially. I E I, the problem with this is and, and, and the reason I want to bring this up is this is where we
[01:25:55]  end up most of the time. Most people naively when they're building their components end up with something like this, where they end up having internal state that they synchron
[01:26:04] ize the external state. Like there's still a problem here because if my message changes, it doesn't reset our initial value here. So usually what we do is we go
[01:26:13]  create. Puted here, because the problem is if, if the parent that's well, eventually, eventually. Um, but my point is the problem with this obviously
[01:26:30]  is, is if the parent sets the value again, um, nothing happens. Like what, what, what happens here is the problem with this mess. Uh, what I
[01:26:41] 'm calling this mess is that now let's pretend. The parent actually wants to do something. They want to limit it to three or something. So they're like,
[01:26:53]  okay, um, I'm going to slice zero three, right? And we don't care. It affects their value, but the form still can do five, right?
[01:27:08]  They're, they're stuck at three, but the form can do, the form can do five. This, this is sort of, this is the, this is the
[01:27:18]  mess. So what do we do? Well, we could add a crate computed for solid. This is for signal synchronization and we go create computed. And I realized
[01:27:29]  this is showcasing probably what you guys might consider weakness is solid. I don't, I don't care. Honestly, this is because the truth of the matter is this
[01:27:39] , this is the explicit way, right? Um, that's the message. And then we're going to use props dot value and slice zero five. And we,
[01:27:52]  we have to duplicate that logic. We could also like, in theory, just go, you know, this probably shouldn't be initialized like that. Now it's good
[01:27:59] . And now it's not, it's not, it's not even good enough. It's solid here because this doesn't, doesn't know. Like I want
[01:28:13]  to just want to illustrate the challenge. Like if you go control, it was pretty dirt simple. If you go uncontrolled, also pretty dirt simple. When you go controll
[01:28:26] able, which is, or try and go to controllable, which I'm getting at, it's actually pretty complicated because, um, essentially. Yeah. Like what
[01:28:39] , yeah. What, why trying to get back to why? Yeah. Because we, we also have to synchronize the field, the field and the field stateful.
[01:28:47]  And that's basically the set. I could spend a little bit more time on this to fix this because essentially like the way you do stuff with uncontrollable is use ref
[01:28:59] s and we could use refs on this input as a means to manually control the value and keep everything up to sync. Okay. So this is the, this,
[01:29:07]  this is, this is, this is, this is the kind of tricky thing. Now let's, let's play with one of these other frameworks and see how, how
[01:29:17] , how, how they, how they work in this scenario. Right. Um, I'm gonna go Svelte first because I know Svelte, so a little
[01:29:23]  bit better, but let's, uh, let's add a input. So we need a new file here and. and let's kind of let's copy some of
[01:29:35]  this over into our new input you don't need message here and we're going to export let this is one of the kind of niceties here um and then let's
[01:29:59]  let's um find message manage and change this to capital input and then we have to import it and that so here's the first question is oh it's value so
[01:30:36]  it should be like this so for the simple case of two-way binding works pretty nice let's let's uh now i guess the question here and actually i don't know
[01:30:53]  this part about swelter as much so unless dan wants to help me with view first here um like actually you know what let's let's just also while we're
[01:31:05]  at it do the same thing here forced uppercase is good one yeah yeah let's forced uppercase is probably the the best one um obviously the simple case is is
[01:31:24]  is pretty easy but i how does this work in view in view actually it's been a while um what are the what are the what are the what are the props in
[01:31:43]  view like if i have an input maybe i'm not equipped to actually do the view example here because i'm assuming that i should be able to do can i v model
[01:32:00]  from the outside like should i be able to do this import i don't really care about uncontrolled here i'm trying to get the controllable um so i should be
[01:32:10]  able to import input from input view and now this needs a closing tag yeah where do the props come from in the setup tag yeah but you know what this is actually gonna
[01:32:56]  yeah non-prop input model value equals hello world on update value yeah i i might not be able to do view because i'm not i'm not good enough on
[01:33:04]  this side but the the thing is is svelte here's a question is svelte just a syntactic sugar this is probably a fair question here because if they
[01:33:17]  have a section here on two-way binding i love these tutorials because they're so useful for this but right because the the the the gist of the problem here and maybe
[01:33:28]  i'll just skip to marco because i know how this works in marco and you guys can tell me a svelte can handle it or not or especially view can
[01:33:35]  handle it or not we can come back the gist of the problem is and i've solved it for a second is in the controlled case you kind of don't want
[01:33:47]  the child to be stateful you want the parent to control the state you don't want to deal with the synchronization in the uncontrolled case you're fine with the child
[01:33:57]  doing all the synchronization you just want to let known but the thing is if you're trying to support both cases supporting them both at the same time is a messy it
[01:34:07] 's a messy endeavor because in in as i said in the control case or the uncontrolled case you're fine with the with the child just calling its own set props and being
[01:34:20]  done with it whereas in the um you know controlled case you want the parent to actually intercept it and be able to pass it back down through again um and honestly the only
[01:34:37]  piece of this equation that can make that decision is the parent that that's that's what it comes down to so i'm going to do this in marco right now kind
[01:34:49]  of show show this and i'm just going to input that marco and then what do we just kind of copy this and um this is fine this is fine this is
[01:35:02]  fine and then we just change this to capital input all right sorry okay so i believe right now we're in the uncontrolled case yeah we're in the uncontrolled case um
[01:35:21]  it is bound but the child isn't set up to handle it um so if we wanted to to make it um controlled i think is it all we have to no okay
[01:35:32]  no it's not that i i need to see what all right marco has an attributes tag yeah so that's that that wasn't even the uncontrolled case that was like
[01:35:43]  the this works completely independently case we need our actors tag to get ourselves our value like in value okay and then i think see in the uncontrolled case with marco
[01:36:08]  or the control case of marco you would just go like this right you'd go in value and and yeah this is the control case in marco okay so essentially you
[01:36:24]  just do this bind it bind it send it through the the attributes right and then to do the um the uh uncontrolled case um well i mean just don't bind it
[01:36:44]  here right sort of not not i mean obviously that that that's it but let's let's let's let's go all the way to um uncontrolled case actually would have
[01:37:01]  the state in here obviously right so i'm going to let value and then what i'm going to do the uncontrolled case would be initialize it to the initial value
[01:37:12]  and then bind to value here right um and close tag okay so this would be the uncontrolled case you can't really tell obviously because it looks the same but trust me this
[01:37:21]  is the uncontrolled case it's what i first did with solid i assigned it to the local state and did it and then marco to make it controllable you do this
[01:37:30]  now it's controllable and what controllable means is this this doesn't matter too much to us but it marco actually analyzes and sees what you do because if
[01:37:44]  you don't find it here um it actually handles the state completely locally and if you do bind it here it doesn't actually it just forwards the state from the child so
[01:37:57]  to speak so or sorry it just forwards the state to the parent the child doesn't end up in an intermediate state the biggest problem we had with solid here was that these these
[01:38:08]  like this message and this message were out of sync and the parent has to kind of tell the child again what to do if if it's doing fancy stuff it has to reset
[01:38:20]  the whole loop again where in marco when it knows that it's being controlled it just this this operation is the same it just you don't have to worry about it
[01:38:30]  um and part of that is a combination of syntax sugar right because there is um there is a value change event and the value change event the way the the binding works is is
[01:38:44]  is in a pair um essentially that that that um and this is true for any of them i'm trying to think of did we i guess yeah value change um b let
[01:38:57] 's see if i can do this console log the do we have a console in here this is this is brand new by the way this version the repl no no console for
[01:39:09]  me i mean the real console right oh v cool so does what this means is we're in a controlled state right now just as if we use binding so if we were
[01:39:34]  like b to uppercase uh what is it b equals v to uppercase and someone gonna help me with this uh what was it why is this not coming to
[01:39:50]  me right now um it's not b it's message we are controllable and the and we've basically opted into the parent being able to to to do the you know
[01:40:13]  this is like my trim example essentially the parent is is is handling this i don't know if this is like the worst explanation i've ever given i'm sorry but but essentially
[01:40:28]  what i'm what i'm getting at is the child doesn't have to go through any kind of intermediate states this is one of the beautiful things about binding syntax i got
[01:40:36]  to give you that is that if someone wanted to make a controllable thing they just have to add this one extra colon on top of the uncontrolled form and then all the
[01:40:49]  different scenarios are handled for you but the nuance here is that this essentially this this value value change event is just is what that syntax is covering and i think view works actually
[01:41:04]  very similar um it's just basically when you write value colon it it's basically just wrapping up essentially this um but the key difference is if if if we just go like this
[01:41:26]  here and and decide to revert to something that's uncontrolled if i added like an on click event here um click and and and did something like uh message equals hi
[01:41:52]  okay this is okay this is still this still passes down this isn't the best example um like i'm trying to show um the difference between controlled and uncontrolled behavior here
[01:42:06]  and i'm probably doing pretty poor being mean move to anywhere but last character and type lowercase um you probably mean going back to to to to to to to to
[01:42:27]  this right to to to to to to to this right yeah yeah this is this is what i was trying to trying to say that essentially the the the the the sorry this
[01:42:51]  is the uh essentially that um yeah it looks like we don't actually have scroll position uh or sorry cursor position uh jump i i i think react some of the veto on
[01:43:09]  libraries handle this properly uh right but you're not going to get it in an edit scenario because the edit scenario is the the the one that's a pain in the right
[01:43:21]  the yeah yeah exactly it goes to the end yeah same thing in solid yeah um cursor uh i didn't do this in view because i didn't actually figure out view how in
[01:43:36]  svelte this does anyone know svelte is sugar is there a way to intercept the bind yeah yeah no this this this is true we hit some added complexity of
[01:43:55]  trying to apply this to the old beat on but what what i'm kind of looking at here is does does anyone know maybe it's got to be let's let's let
[01:44:06] 's try and do svelte because we showed off marco i might have not done the best job of getting it but you can kind of see that by looking at
[01:44:12]  how you pass the props into the parent it automatically knows whether to route it back to local state or route it back to the parent state essentially so you don't have any of
[01:44:21]  that out of sync things and that's what we're dubbing as controllable um bind i'm looking for the bind why can i not find the bind bind bind not this
[01:44:39]  i'm looking for that out of sync so you can do that out of sync so you can see that you can see that yeah yeah yeah but the problem is we can
[01:44:54]  we can do this but there those are those are those are different right like on change well let's let's let's let's just play this game let's go to
[01:45:06]  the parent here and this and and right here if we pass down value and on change or sorry on change it's not going to propagate in the same way i don't
[01:45:30]  think you can put like can you put an on change event on a on a on a let's just do this to start with this isn't going to wire anything
[01:45:50]  up to begin with i don't like actually this is a good also good explanation if you've been following my reactive stuff as far as controllable goes in marco real key
[01:46:08]  is the let tag it can be toggled between basically being just the the um the state or the signal and being a computation you know if it's being bound it basically
[01:46:20]  it it's like wiring that crate computed right into the right into the mix automatically which is super powerful um i don't someone might come back and correct me later i don
[01:46:30] 't know self actually has true interceptors because it would have to be a special event like it couldn't just be on change because the component won't pass it through this would
[01:46:42]  have to this binding syntax would have be syntax sugar for something um yeah i i'm i'm this is one that might actually component bindings here we go use component bind
[01:47:01] ings sparingly it can be difficult to track the flow of data around your application if you have too many of them yeah okay so even these guys caution you against two
[01:47:15] -way binding even with their safety net that's a good point to make yeah i think so too i think one i think that svelte gives you a nice bind syntax
[01:47:26]  but then once you opt out you're in the same boat as solid essentially once you actually need to do this stuff it's you're you're you're back to handling
[01:47:34]  the events yourself um so yeah i mean that's that's fine i don't think as i said view i think is different maybe we can pull up pull up some view docs
[01:47:48]  for a second but you can kind of see like the trick here that's going on with marco is this value change is special it's not like the the input event that
[01:47:58]  i'm forwarding it's actually it's it's basically the marco's binding syntax is actually the just sugar for these two functions and i'm pretty sure um view
[01:48:12]  is the same way view two two-way binding where are you dan when i need you you know all about this stuff right i'm familiar with vmodel but i
[01:48:27]  want i want something else vmodel with components custom inputs i love the how long the hash links are let's vmodel is the same as this okay okay
[01:49:18]  but that's oh right because okay it's because okay got it okay so basically and dan correct me if i'm wrong here i've hit this before because view developers come
[01:49:43]  and start using solid and they're like they're like why how do i wire up events and i'm like you connect them just like you pass you you call the function you
[01:49:54]  passed in a function to it you passed an object or props already that has a function on it just wire up your function right but view developers like oh in view the components automatically
[01:50:03]  for the events like if you put a an on event on a on a component then like it's like proxying for its underlying dom elements so in in view um
[01:50:14]  vbind and on essentially here are like they're basically proxying it out so when i put on this component here oh actually no it's not even directly prox
[01:50:31] ing they are wiring it up themselves okay that's actually not too bad um never mind so yeah they're just forwarding it through although do you know what this means though
[01:50:44]  this has the same problem because essentially you have to make that choice you you know like if if you want to be controlled do this if you want to be uncontrolled don
[01:51:03] 't do that but if you want it to be controllable you can intercept the event up here or you can upset the advent up here but then you still have the synchronization
[01:51:12]  problem of the states i guess i guess yeah one of the cool things i guess with svelte which and i guess maybe is the same is if you never if you
[01:51:27]  go export let and you never um is there no way to well i mean yes you can add it make it control that's my whole point you make it controllable by
[01:51:49]  adding internal state and then synchronizing that internal state you're you're kind of back at the solution we had to do for solid at the beginning i guess the whole point of
[01:51:58]  this exercise is to show you guys that marco's better than everything else that that wasn't actually my intention here but um uh um basically two-way binding is a
[01:52:09]  nice convenience syntax when you want controlled stuff you can obviously choose to have uncontrolled stuff but when you actually want it to be flipped you have to manage the synchronization yourself that
[01:52:21]  that's kind of probably the takeaway from this section um in every framework but uh marco um these are the kind of weird problems you start thinking about though eh when you
[01:52:37] 're like authoring component libraries um because like the the the fact that you can overwrite props is kind of convenient here this is one boon that you have yeah and
[01:52:56]  this is this is the this is the gist of it which means you get into this kind of weird um state where you're yeah i mean the be fair the export
[01:53:13]  let or writing directly the props kind of lets you get around that a little bit but huh my my challenge here with the svelte example is i there's got to be
[01:53:28]  a way to ford events it's not gonna be in the docs but i um let's put on change on here like we basically have to change our syntax completely change
[01:53:43]  our approach here with svelte once we get here right like if we if we if we want to intercept we actually have to go back to to to you know doing that
[01:53:56]  and handler can we can we can we do this essentially and go export let handler and then handler there's no i'm just missing something here you know what they probably use
[01:54:33]  events they probably like have like like they probably use like actual like they have like an event thing um dom event forwarding yeah okay so it's just is there anything other than
[01:54:52]  trans no just transparent dom event porting but what if if i want to make a custom event event porting in general yeah and then you have to create an event dispatch
[01:55:03] er and then you forward the oh man that's fun okay we're learning we're learning stuff here so for my purposes i think on input is enough um how let's
[01:55:31]  read the rest of this how did how did i do the how did we forward it oh we just don't yeah that's a clever syntax we just don't we just
[01:55:51]  don't yeah that's fine so message dot to message equals e dot target dot value to uppercase so there's our controlled thing um but svelte syntax
[01:56:37]  prevents us from doing controllable because the second i put something here it cuts off the outer event i i would have to forward the events myself which is probably fine but then you
[01:56:53]  end up in the same game again right we have to use the for with use event for syntax uh yeah i mean yeah exactly um sorry this this is so foreign to me
[01:57:15]  coming from jsx js actually just like passive function you're just like whatever um this is the you you have to use like a separate api here to kind of like
[01:57:24]  mirror some kind of event system um yeah i don't know how how much further we want to take this particular example um yeah exactly i think that's the gist of it
[01:57:40]  and if you want the source of truth to be dynamic you you have to do a lot of clever checks we i don't have it here we actually worked out we actually
[01:57:49]  took the marco controllable example and re-implemented it in something like pseudo solid or pseudo react to actually see it and we actually use pseudo solid because we're
[01:57:57]  thinking fine-grained reactivity and we we we took it took us a few minutes and we we figured it out and then but it was really weird because we we
[01:58:06]  had to check the state of like what was on the props to make the decision and that check had to be reactive technically um like yeah it was a little it was it was
[01:58:19]  quite awkward because you'd have to like conditionally create computers um it was one of those things where we were all trying at the same time to see who could come up
[01:58:30]  with the solution fast enough um it's not terribly uh illustrative and i'm not sure if i really want to go there what i wouldn't mind looking at right now though
[01:58:40]  is um this someone wants to kind of sit on this example much more it looks like felton view are kind of similar except for um uh views approach to fort like they
[01:58:58] 've sent you to sending the events sooner essentially um that's that's basically the the approach that both these libraries use they have some nice shortcut syntax but it kind of comes down
[01:59:09]  to components having their own event system um which is interesting um uh and requires like a kind of separate a kind of a separate api concept it's not that hard coming
[01:59:22]  from the dom but it is interesting so yeah have i have i mucked up and muddled the whole two-way combining conversation i kind of kind of kind of kind
[01:59:37]  of still want to go back to uh um back to this one but i don't i don't know if this is actually that interesting to anyone i basically broke svel
[01:59:56] te by making nested reactivity i thought we'd get back here but the truth of the matter is i think i've already we've already kind of made the point here
[02:00:05]  this is more novel i think just to people who uh i'll post this in the chat for anyone who who might be interested in looking at this in the future but it
[02:00:14] 's this is more novel than anything honestly because i it's kind of uh um it's basically showing how you can do terrible terrible things with svelte that override their two
[02:00:29]  waybinding and let you do view type updates and just it's it's bad um well honestly i don't know is there anything anyone wants to kind of kind of
[02:00:44]  play with this is i said the stream would be a little shorter today this is kind of what i look at what i wanted to play with mostly um i didn't have
[02:00:52]  a ton i've been doing a lot of prep so um i know maybe less fulfilling than some of the other streams but if uh if that's it maybe we just call
[02:01:03]  this one early um i was hoping i'd have some more interesting revelations here but it looks like you know what i i got i got well i got everything here i got
[02:01:14]  one more i want to do you know what this is this this this is this is this one's worth doing this this is the last example probably but do you know what i
[02:01:25]  want to do i want to take these frameworks let's start from scratch again and i want to implement a a custom list component with them okay let's do it it's
[02:01:38]  always kind of bugged me a little bit but let's let's probably yeah i mean a really well thought out two-way binding thing i think view and svel
[02:01:57] te's uh you know way to opt out of it is fine but it's not it's at that point it's just like reactor solid you're kind of in the same
[02:02:05]  boat thoughts with the two-way binding but they check from the mutual store itself the the the interceptor where the data single source is is is fine the problem is if
[02:02:18]  you if you have different use cases and i haven't made this part particularly clear um what i mean by different use cases is like a modal component is probably the most common one
[02:02:31]  in the world if you ever like use a modal component and the question is who is responsible for closing the modal like and you know if you're coming from the controlled perspective
[02:02:43]  i said we always talk about input fields but think about this for plus many controls if you think the control thing it's the parent that closes it which means that the it's
[02:02:50]  up to the modal to go hey someone click my button they want to close me and you forward an on close event and then the parent's like okay yeah um sure i
[02:03:01] 'll close you by setting your open state to false or the parents like no you have unsaved work you know that that's that's like the the kind of situation where you
[02:03:16]  still have this kind of controlled uncontrolled mentality because while that's fine for some things a lot of times when you just have like a click to dismiss modal you just kind of
[02:03:24]  are like just just let it close itself right like you're like show me a modal that's like a warning like hey um before you continue be sure to know that this
[02:03:37]  you know has potentially destructive consequences you know like you like you know like you're deleting or something you're like like there's a lot of tool tip type things there's a
[02:03:49]  lot of scenarios where you're just like just show this and if they click x you want to close yourself if if you design your component to be completely controlled you always have
[02:03:57]  to make a handler you always have to make a state that reflects the change of that handler to then close the modal from the outside or the tooltip from the outside where
[02:04:07]  maybe 80 of the time you don't you don't need that and the funny thing is if you go back in time to the jquery days controls are almost always uncont
[02:04:17] rolled that was the default everyone was used to models closing themselves and you do some really interesting hacks to kind of get around that and have special events and whatever but like everything
[02:04:27]  was in control and then in the modern kind of declarative like react days everything's controlled but the truth of the matter is controlled is verbose um for for the consumer so
[02:04:37]  controllable is this like sweet spot of being able to have to support both so what i'm getting at is handling it just in the state itself doesn't account for that
[02:04:50]  kind of discrepancy anyway uh where was i uh yes i i wanted to just make a list of apples bananas my kids and orange oranges or something okay and i
[02:05:17]  want to so we're just going to make list set list and we're going to i'm not even worried about just add a for loop i'm going to do it
[02:05:36]  in each idiomatic way for each framework here so each list and um am i returning i don't really care let's just make divs um item i mean this this
[02:05:59]  is uninteresting yay okay so here we go we created it in solid okay let's do view next yeah i don't care about that um we've got our ref i'm
[02:06:18]  just going to use a ref we don't need a ref per um but let's just this in case we want to update it later you know this is this is fine
[02:06:28]  let's just do that um and in our template let's make a div and let's what is it v4 um or actually it's on the template itself can i
[02:06:49]  do it on the template itself v4 item in list or something and then we'll take this list and then yeah i there's two ways view could be working and we
[02:07:13] 're going to find out which way they work right now i've worked on multiple frames yeah view works the way that i thought it worked they i it's actually repeating it's
[02:07:27]  a repeater on the on the on the element you're on that's that's what i thought a lot of these um directive based ones use uh the control flows repeaters
[02:07:35]  okay and then let's go into svelte and do the same thing get rid of this and let our list equal and then and then probably yeah i wrote the
[02:08:16]  js frame for itself and my memory is just a little bit loose here i think i did not do something right each each each each each each as okay sorry every dsl
[02:08:37]  is a little bit different list as item they reverse the order of the stuff too not a big deal you learn it some some uh some react developers get really angry about stuff like
[02:08:56]  this it's it's all the same right um let's do marco here um what was it a list and then for uh item of list and then if delete
[02:09:38]  item okay okay okay so we've just gone and we've created the same example in all our frameworks yet again um okay yeah so this time it's actually much more similar
[02:09:55]  it's just a signal and a for loop with a div signal div for div and finally that okay so what's the exercise here well the exercise now is we have we
[02:10:14]  have to make a new component that takes the list but only shows the first 10 rows kind of like a or controls the pagination or something like that so let's let's
[02:10:30]  let's do that in solid first we just go function paginated for now i'm just gonna use identity functions like i'm like i'm not gonna bother implementing the logic
[02:10:41]  of like limiting the stuff i'm just going to um essentially just assume that i'm just gonna return the identity function essentially so then this becomes props dot each and this becomes props
[02:10:59]  dot children right and then we just go paginated paginated sweet okay that worked okay so there we go i just switched our four to a paginated component in solid okay
[02:11:24]  um let's do the same thing in marco um um and render body yeah okay so i think that's right dylan's still here you can correct me if
[02:12:20]  i'm wrong but essentially we probably need a closing tag there probably need a closing tag there that looks right and then what do we do we change this oh is it of
[02:12:39]  not list of boom right it's at the list because of the javascript keyword and then here we go here we just go paginated paginated paginated oh am
[02:13:06]  i hitting a fun little little issue with the tags api oh is it this it's a default attribute uh huh that wasn't what i was going to do that but
[02:13:25]  i'm probably not doing something right oh oh all right it's intact still getting used to it okay but okay so you you can kind of see we're going to continue
[02:13:48]  here with solid um i was able to copy and change the mapping of the props pretty easily and then in here we just literally kept the same component just changed the component name
[02:14:00]  um with marco um we had to create a new tag for like do the prop mapping here um a little bit of difference on how you handle the children um but the for
[02:14:13]  loop outside stayed the same and here we literally again just changed the tag name let's do this with svelte okay okay okay so uh what am i going to call
[02:14:30]  this one paginated so first thing we have to now import um paginated i'm sorry from paginated dot svelte and we should copy this over to here
[02:14:59]  and let's just tag and let's call this each export let each each and then export let each each as item div each item and then in here this becomes pag
[02:15:40] inated and then okay i have to remember how to do this um what is it called um i'm looking for uh scoped slots if anyone can see spread props default
[02:16:31]  default event forwarding dimensions slot props found it uh oh okay okay okay okay so let item equals item and a second okay oh actually no that's not right that's
[02:17:37]  not right that's not right um okay okay item equals item item equals item and then we need to pass each list okay all right there we go um actually i kind of
[02:18:20]  almost want to do one more thing here while i'm at it sorry i'm changing the example on the fly a bit but we should also add um index um just to
[02:18:30]  to make this more fun let's make it i plus one all right cool actually didn't need to change anything here the way it works so that's fine let's go
[02:18:54]  to marco and add the index um bang and let's go to svelte and add the index let in or let name it index because it's named the way
[02:19:28]  this works so we actually we can call it i here but if you were developing the api you probably do sorry do that and then inside here um index and this
[02:19:56]  one would be i plus one okay now our svelte example is up to date let's can i adjust this a little bit okay so what are we doing so i
[02:20:14]  almost want to kind of multi-line this so i can actually pull this multi-line yeah there we go a little a little bit more readable um okay so i've done
[02:20:24]  svelte now i've done marco and i've done let's do view now the last one here um all right if you're asking why i'm like going
[02:20:45]  through this kind of silly exercise it's it's interesting to me because even though pagination is kind of a funny story but layouts and stuff hit this all the time you're
[02:20:57]  always doing conditional pieces and layouts and stuff so having control flow extend cross template is definitely like a super common pattern right so um oh man this is interesting isn't it how do
[02:21:13]  i how do i actually let the parent choose the element that the v4 goes on and dan's already gone now so this might actually be trickier than i was thinking
[02:21:31]  because let's just continue this for for now but obviously where i want this to go is you know we import um paginated um paginated but and i want this to
[02:21:59]  become paginated and i want yeah i don't know if we're going to solve this without any view experts in the stream uh let's look at the docs for a
[02:22:20]  minute and figure out how to do this um right like because so far with with like with solid you literally just change the name of the tag and you were done um from
[02:22:32]  the outside obviously you have to do some mapping if you wrote the component um with marco you again did a little bit more complicated mapping but again you just change the name
[02:22:41]  of the component it just worked with svelte we had to change the control flow type to now not use each or item type things and then we essentially had to uh
[02:22:59]  use uh use named values that the component provided to add this kind of let syntax to get our values in but then this part at least stayed the same um with view how do
[02:23:18]  we do this i think view calls these slot props i mean you start authoring the internal component here pretty easily right the the component on the inside um at least is fairly
[02:23:45]  easy to to do i mean can we go slot i'm sorry this is my gap i should have done this example when we had view experts still on the stream i
[02:24:24]  don't know how much time i should spend looking at this sorry this is my bad my view knowledge isn't isn't good enough see they're short they they're showing
[02:24:50]  example where they put the v4 on the outside on the component but that doesn't work that's not what we want to do here that that that doesn't that that's
[02:24:57]  not a good pattern for what we're trying to accomplish here because we want to control the iteration on the inside we just want what we're trying to do here we want
[02:25:08]  to pass the data like that won't work for us hmm okay i might have to leave this one let's if anyone has any ideas let's try let's try b
[02:25:26] 4 on slot nope nope oh man it's quite possible that this isn't okay okay okay okay okay template bbv slot that's name slots that's not what
[02:26:15]  we want quite but i think i think we have to use a combination of this sort of thing because like the two different options is you can you could pass children that have
[02:26:43]  the v4 in them but that's not going to help us we want to pass these individual items you can put the v4 on the outer component but that doesn't do
[02:26:49]  it because then the outer components controlling the iteration what we need to do is be able to pass just the list in and the item definition and have the v4 on the
[02:27:07]  inside because vslot tells it which slot so you can go vslot default but that's not the problem our problem isn't getting the template into the it's
[02:27:27]  putting okay i got it i got it okay so it's a little bit different we can put a b4 on a template element i don't know if we can put on
[02:27:41]  the top level template element but we can definitely put a v4 on a template element which means that inside of it we can put a slot right which then suggests that
[02:28:07]  we should be able to pass a div with an item to it i don't know how to get the item there yet we're going to just go high right okay so far
[02:28:22]  so good now now we just need to figure out how to pass the the proper slot props to to it um so close i don't name slots dynamic slots dynamics no
[02:29:12]  that's not okay okay slot scope okay yeah yeah okay so essentially our div i mean this might work but it we might have to wrap it in another template i'm
[02:29:58]  thinking in order to uh in order to to get where we want because it needs to have the slotted scope sorry i'm looking at the wrong one here slot dash scope name
[02:30:15]  a variable and then we have to figure out how to pass it in okay to-do list this is this is very close to what we're trying to do here
[02:30:42]  okay the only problem is it's not showing me the other side of it i'm sorry i know this is taking longer than than we were hoping um um template
[02:31:36]  v slot default slot props that's what i was looking at but that's how i do it on the other side that's that's that would be this side that would
[02:32:07]  be slot that's that's that's that would be this side that would be slot i've lost most people now sorry this this there's something about the slots that
[02:32:40]  i'm just not quite this this this part makes sense to me but how do where do they actually pass yes yes okay like everyone's left the stream at this
[02:33:52]  point oh well who thought view would be the hard one to figure out like there's all these abbreviations syntaxes so like okay vbind on the inside that that
[02:34:31] 's that's it okay there we go that's the piece i was missing um item um item and then maybe these the slot on this side okay the the support dest
[02:35:26] ructuring is what they're saying so if i do this i mean i don't need that this is redundant but if i do this i did something wrong somewhere i did
[02:35:44]  something wrong somewhere Okay, let's try this. Let's just call them slot props like they do in the example and go slot props.item. Make sure
[02:36:33]  I'm vbinding it properly here. Not this one, this one. vbind colon name equals name. So maybe that's -- maybe I missed that --
[02:36:48]  vbind name item equals item. Bang. Okay. Sorry about that. Good. I mean, Vue has pretty good docs and good -- it's so easy to
[02:37:07]  do stuff like this. Oh, we've got to get item -- we've got to pass I as well. Vbind item -- no, index equals I
[02:37:25] . And then -- yeah, I'm thinking -- I'm going to do it the long way first just to make sure that I'm, like, not -- Yeah
[02:37:44] , I'm going to do it the long way first just to make sure that I'm, like, not -- let's make this a little bit more stylish. We
[02:37:57]  can probably do something like a destructure here and be, like, index I -- no, index item. All right. Yeah. Okay. There we go.
[02:38:20]  Thanks to -- people are still here. That took, I think, this example we've been working on for 40 minutes. And I'm pretty sure the last 20 minutes has
[02:38:27]  been Vue. This -- Vue is not -- it's a framework out of these ones I'm the least familiar with. So I've got to be a little
[02:38:35]  excused there. As I said, their docs are very helpful. But I mean, this kind of illustrated -- kind of illustrated what I was thinking. And as I said
[02:38:48] , I hadn't tried this yet. But I almost wish I had the before and after. But now that we've created all the solutions, you know, this is
[02:39:00]  kind of a common composition pattern whether you're making, you know, at least for a reactive valve or whether you're trying to make, like, for loops or layout components
[02:39:12] . You know, you can think of things like suspense and whatnot. Like, I think this kind of -- this kind of stuff happens in React so much that I didn
[02:39:19] 't even have an issue with putting for loops in solid or show components because it's just, like, suspense, error boundaries. Once you start writing code, you just do
[02:39:28]  this kind of all the time with the patterns that you use in React. But I'm gathering Svelte and Vue don't do this very often because it's definitely
[02:39:39] , like, a thing. You know what I mean? Like, you saw with Solid -- like, pretend that someone else made paginated for you. You come in
[02:39:48]  and you change the name of the tag and you're done. If you're using Marco, same thing. Svelte, it wasn't too bad. But you'd
[02:39:58]  have to kind of, like, look and go, okay, what are the items that you're exposing? Because before you just named it whatever you want and you used each
[02:40:05]  or whatever. Now you have to add these let things. Svelte's ability to just add the items on here is pretty nice. It probably supports bind syntax,
[02:40:18]  too. I bet you can go, like, bind this. No. Okay. Maybe I'm -- okay. Whatever. But going from this to this is still kind
[02:40:32]  of a bit of a shell shock. This example for Vue is like -- no part of this we were able to keep. It just completely changed every part of it
[02:40:49] . So, yeah, I definitely kind of plan ahead here. You -- this kind of refactoring seemed completely brutal in Vue. It's a little bit of work
[02:40:59]  in Svelte. But, yeah, I think earlier we showed where, you know, maybe JSX was clunky. But, man, this is -- this
[02:41:08]  is pretty brutal. Um, I don't know. Yeah. I mean, obviously familiarity with the bindings and stuff would help. And I think -- I think the
[02:41:20]  shorthands -- I think I can just, like, do this. So -- but, yeah. Like, your whole mental model had to shift from -- from copying,
[02:41:31]  like, a div with a V4 to suddenly, like, a bunch of nested templates and destructured arguments with these slots. Yeah. I don't know. Anyway
[02:41:44] . Interesting. Um, yeah. I don't know. If there's any other good comparisons people have -- everyone's been kind of quiet for a while. I --
[02:41:56]  you can go endlessly with these repls. The only -- the only thing that we haven't done yet, um, was look at the compiled output. And I don't
[02:42:06]  even know -- I think -- I think a quick look is -- under the hood is probably worth a -- a last little bit of our time here. Obviously -- I've
[02:42:19]  shown Sol before -- our component functions become, like, basically create component for -- and we wrap getters around these dynamic things. And then for our actual DOM, we have
[02:42:30]  this template cloning walk and some kind of effectful inserts. So that's pretty typical for us. Uh, maybe look at Marco next. Um, oh, actually
[02:42:40] , no. Before -- yeah, we'll do DOM and then we'll do SSR after. That's a cool thing. You can actually see both sides. Um,
[02:42:47]  we'll look at the VDOM. Um, this is probably gonna be the biggest output we see because, um, Marco's faking the reactive system in
[02:42:56]  Marco 5 right now. Marco 6 is -- uh, output is super small, smaller than Svelte. But maybe not as small as solid or -- or -- or,
[02:43:05]  um, view. But, yeah, this is -- this is fun. Um, it looks like the -- the, um, the div or the -- you know, like
[02:43:17] , the -- is basically a bunch of commands where -- this looks like incremental DOM. I don't know if you've ever seen incremental DOM. But essentially, it looks
[02:43:27]  like it calls an open tag and a closed tag. And then it calls a bunch of functions for each of the attributes, um, presumably to create a virtual DOM node.
[02:43:35]  And if I switch to paginated, this is kind of interesting. The for loop here is literally a for loop. Um, like it -- which is kind of cool because
[02:43:47]  map is actually less efficient than for loops for anyone who actually knows that because you, like, you have to, like, map it and create the new item. So
[02:43:55]  Marco actually uses an actual for loop for their for. That's cool. And look, const item of list, like -- and then index is kind of manually put in here
[02:44:07] . But, yeah, that's interesting. And then for our actual render body, this is kind of like a dynamic tag, it looks like. Okay. So that's
[02:44:15]  Marco. Um, I don't want to make a ton of sense. They have a VDOM, but it looks almost like incremental DOM. And it has --
[02:44:21]  and then stuff like control flow is, like, literally compiled in as straight JavaScript, which is kind of wild. Um, let's look at Svelte. Svel
[02:44:30] te always takes a little bit to look at because their output's a little bit large. And it's -- I think we can actually -- I think they have, like,
[02:44:41]  a human readable version. If we go dev, yeah, yeah, this will -- oh, dev. This will be a little bit human -- more human readable. Um
[02:44:50] , Svelte creates these blocks with, like, C and M and P and different things. And these are all life cycles, essentially. Svelte splits your code
[02:45:00]  into different life cycles. Like, C is create. So you see helpers for creating the text, the element, each element one time in a -- one in a
[02:45:08]  row. And then here is mount. M is for mount. So they're inserting some stuff and appending some other elements. And then update is essentially a list of dirty
[02:45:21]  checks. So essentially the whole component reruns and then it just, like, checks a flag. So it's kind of like -- it's kind of like -- when
[02:45:28]  you call the update function, you pass in this context, which I guess is, like, all the state of the component. And then, like, each index probably --
[02:45:38]  like, it looks like a bitmap. Each index is, like, is this state dirty or this state dirty? So you can actually kind of get a granular update here
[02:45:46] . Because on the other end, it actually compiles indirect assignments. If you've ever looked at Solid's way that it groups in CritEffect, it's actually
[02:45:59]  very similar to this. This is kind of the shallow update when you kind of group stuff. Although it looks like -- let's look at our paginated. I want to
[02:46:11]  kind of see how granular we get here. Because, okay, each gets its own block. That's how they do it. So it has its own create, its
[02:46:21]  own M and its own P. So, yeah, that's the secret to spelt, essentially. They kind of behind the scenes almost create their own component, almost,
[02:46:30]  as a way of looking at it for the control flows. That's how they keep semi-granular. Because if you batched that with the parent, it would be
[02:46:40]  really inefficient. Because any change of state would cause the whole list to reevaluate or any change of the list or whatnot. So they get granularity, it looks
[02:46:50]  like, by actually splitting it. And there's a lot of life cycles. Intro, outro, destroy. It's kind of interesting. Let's get these big class objects
[02:46:57] . And then, yeah, the main part, they call it a fragment. They create each transition out. Yeah. So they have the life cycles, anchor. Okay
[02:47:11] . I said Marco was having the biggest output. I guess even with the VDOM backing, spelt is still the winner on size. Paginated slots.
[02:47:27]  I think this instance is actually probably the core of this component instances. Do we... And... Okay. Interesting. Here's a bunch of the invalidate calls. So
[02:47:45] , like, this is how... Like, basically, if each in props invalidate... This is all their component setters. See how I was talking about how they must
[02:47:55]  be using index base? It's not unlike React hooks, in a sense, where they're keeping track of the index of the different... Like, state. Like,
[02:48:07]  if you go export each, like, they probably use zero, one, two. And then they use that in their compilation and then basically invalidate with the index, which
[02:48:15]  will tell you, you know, this is the part that's dirty. So while it's not super granular, it's a very simple index dirty check kind of thing.
[02:48:27]  And this is good because, as I said, if you're too granular with Reactivity, it's actually expensive. And in a lot of ways, what Svel
[02:48:33] te's compiling to and what Solid compiles to is very, very similar, other than in the sense that, like, it groups together stuff and does a shallow diff
[02:48:46]  for, like, attributes and separates off the control flow. The only difference is Svelte does this based on explicit life cycles, it looks like. Like, each
[02:48:56] ... It's almost like creating a component. There's, like, instance where in Solid, almost nothing's created. It's just a... It's another reactive wrapper.
[02:49:07]  It's another effect or something is essentially the difference. So it's... Yeah, interesting. There's a lot of, like, invalidation rules. Basically, they have
[02:49:18]  no reactive system. So what you're seeing here is the... Is basically the, like, unwinding the reactive system into the compiled thing. That's why the components
[02:49:29]  are still larger. We're still not done this file, eh? Well, yes. So it's huge, but you can kind of get an idea of how it works
[02:49:36]  here. Let's look at view. View is the one I know the least about. So this one's probably going to be a little bit interesting. Okay, so
[02:49:48]  we have our list in a ref. So the runtime reactivity stays the same. It looks like the setup script is kind of like the top part of Solid's thing.
[02:49:57]  Where we don't transform the runtime reactivity. View doesn't either. But the template block is a function. Context, cache, create block, paginated, create
[02:50:10]  element, vnode. Vnode, yeah. This looks like an optimized VDOM thing, right? They have VDOM elements in here, kind
[02:50:22]  of like React or Preact. But they also have stuff like create blocks. So my guess is they've isolated static... So my guess, I know they've isolated static
[02:50:31]  portions, but they're using helpers like this to kind of break up their VDOM structure into almost like sub-templates that they can interact with independently
[02:50:41]  instead of going through the whole process of creating everything one by one every time. Let's see if paginated looks any different. Also not much code. I think Solid and
[02:50:49]  Vue are pretty close here. No, Vue might actually... You can see why Vue has so little code. Mostly that it's DOM part isn't DOM
[02:50:59] . So it just compiles down here to more creative thing. And then they have a render list. So they have a helper for the V4. That's interesting.
[02:51:08]  Sometimes directives, you know, have their own kind of custom code kind of handler where it's like, okay, look up the directive in a list. But it looks
[02:51:18]  like in this case, for the built-in ones, Vue shortcuts it. They're like, yeah, we know that's a V4. We're not
[02:51:27]  going to bother doing like a lookup. This is one of our built-ins. And then, yeah, it's this is this render slot, another helper. Yeah
[02:51:40] , Vue has really done a good job of extracting literally everything into helpers so that the VDOM creation is actually quite small and quite simple. It looks like there
[02:51:48]  isn't really much to it. Very different approaches, right, to the different frameworks here in this example. And none of them are like your traditional React hyperscript
[02:52:05] , right? Vue does have elements of that, but they have a whole bunch of specialized helpers that they import that just shortcut it a bunch, whereas like Marco
[02:52:19]  was actually kind of similar with all those specialized helpers. And sorry, it's more obvious. Maybe it was here. But the things like the for loop are just literally
[02:52:32]  for loops, which is kind of interesting. Okay, one more pass. Now let's look at what happens when we do server-side rendering. Solid. Actually,
[02:52:43]  that almost happened so fast, I didn't even see the difference. Okay, yeah. So in solid, the component code stays identical with server rendering. We just changed our
[02:52:57]  template. There's some more markers for hydration boundaries. You can kind of see those kind of come in. But the biggest difference is that the DOM part becomes this single
[02:53:11]  function call, SSR template, and then the expressions kind of inlined. Whereas in the client side, there's some DOM node walking and then like separate statements.
[02:53:24]  But for the most part, the output is not that different other than behind the scenes, this is creating a string essentially. But it's like, we just change what the
[02:53:36]  template is. And then instead of cloning a node, this is like a string concat, essentially. Let's look at Marco. That doesn't look that different
[02:53:51]  from there. This one's actually has nothing to it. Let's look at the index again. Yeah. So, okay. Yeah. Before I said it was very incremental
[02:54:02]  DOM where you saw opening tag, closing tag, and then the attributes. Now it's just out dot right. I guess this is, and it's just strings.
[02:54:10]  So, inlining, template literal, create the string. So, list there, pass in the string, for loop. This for loop is still just a for loop.
[02:54:27]  Yeah. I mean, it's pretty obvious when Marco's pretty fast on the server side rendering. There isn't like, it's like a for loop with a string in
[02:54:36]  cat. Okay. Let's see how spelt is these days. I think there's a compiler option for this. Generate necessary, yeah. Interesting. Well, those
[02:54:51]  giant components disappear. This is what they can ship to the browser. Yeah. So, default object render. And then there's some inline string stuff here, the items
[02:55:06] . And then, how did the for loop look like? Each, prop, each, each, each. So, they have a helper function for each. So,
[02:55:18]  yeah. They just do a dirty check on the input, and then they run the helper function on each. Return each. Interesting. It's a map function. Yeah
[02:55:33] . I mean, we have to look at the internal. They must use a for loop on the internals. Otherwise, they could lose 20, 30% performance here.
[02:55:43]  Maybe that is why they're a bit slower. Interesting. I have to look at that at a different time. More on the internals, but. Yeah. Other
[02:55:56]  than that, you know, you see the inline escaping, similar to what Solid Marco was doing. Tag template literals, though, kind of inlining it. I
[02:56:05]  wonder if Solid's approach of hoisting the static parts has any performance benefit. I think I tried benchmarking before, and it was minimal. So, probably not.
[02:56:12]  SSR. View. So, it's like. Push. But marker. Open close. The markers are similar. Solid with slash. And they're using. Square
[02:56:31]  brackets. But it looks. I don't know if they were always this way. But it looks like view is also doing render to string. They just have. It's
[02:56:43]  kind of like Marco. Like Marco on the right. They have this push function, essentially. and tight template literal interpolation. So, all of these frameworks don't
[02:56:53]  render like VDOMs or anything on the server. It looks like. They're all using string template rendering. I think I might have to go through some benchmarks and
[02:57:01]  update view. Because I'm pretty sure view. SSR performance wasn't that good before. Although. So, what's this. Create V node. Interesting. Do
[02:57:17]  you think. It's possible. That. What they're doing actually. Is. The static parts are just a static string. But that the dynamic parts are still a virtual
[02:57:30]  DOM. That feels like something you would do. I wonder if they actually still have a virtual DOM on the server. But they're kind of interlacing it.
[02:57:38]  With static strings. As kind of an optimization technique. Huh. That would definitely have more overhead. But. Okay. Well. I think that's almost. As much
[02:57:52]  as I can. I can glean off this. I don't know if anyone has any questions. This is. This is probably more interesting to me than. For.
[02:57:58]  For any of you. But. You know. If it gets killed some. Time on stream. And kind of. Look around. At. How. These frameworks. Work
[02:58:09] . But yeah. There's definitely. There's definitely. Some interesting stuff going on in view. All right. I don't know. That's all I got.
[02:58:22]  We're at three hours. Like clockwork. It's funny how that works. I don't know if anyone has any more questions. But I'm. I'm pretty
[02:58:31]  good here. This went longer than I expected. There's a few interesting points. But. I feel this. This one was a little bit more dry. Sorry. I
[02:58:39]  didn't have. As much of interesting topics prepared today. Simply because of the other work I've been doing this week. But. Awesome. Have everyone. And.
[02:58:50]  I think. I'm going to call it a night. All right. Have a good one. Have a good one.