---
showLink: "https://www.youtube.com/watch?v=DYwI1eWkMcI"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Looking at SvelteKit"
description: ""
publishDate: "2022-03-12"
coverImage: "https://i.ytimg.com/vi/DYwI1eWkMcI/maxresdefault.jpg"
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

[00:00:00]  Hey everyone, welcome to my stream tonight. Today, kind of changing it up from the narrative we've been kind of carrying the last few weeks, I've been really digging
[00:00:13]  deep into partial hydration and a lot of the really like, how to put it, like bleeding edge things going on around like, I guess you'd call it like multi-
[00:00:24] page app kind of architectures. And we're going to take a break from that for a moment. The last stream we did with Marco kind of represents kind of the
[00:00:36]  furthest we've taken that thinking kind of, we started with like react server components and we looked at quick and then we looked at Marco and kind of went through this whole
[00:00:44]  progression. But there's still a lot of details to kind of work out and I'm going to let that kind of settle for a couple of weeks. I recommend anyone who
[00:00:50]  hasn't watched it to watch the stream from last week. It didn't quite have as many views as some of other recent ones, but it's probably the most like
[00:00:58]  future forward thinking stream that I've done since I've started streaming. But today it's going to be a little bit different. Yeah. Hello, everyone. Say hi in
[00:01:06]  the chat as you come in today. Today we're kind of going back back to the looking at like the best patterns you have now. You know, we've looked
[00:01:18]  at remix. And we've looked a little bit even at solid start. But the one that's been kind of, you know, strangely missing from the conversation has been
[00:01:27]  Svelte. I haven't actually focused on Svelte once in the last nine months of streaming, which is, you know, perhaps unusual. And I thought I
[00:01:38]  would take this opportunity finally to come in and, you know, take a look at SvelteKit again. I am somewhat familiar with SvelteKit in that
[00:01:49]  when I saw started solid start a year ago, I literally looked at SvelteKit and like reverse engineered it and lifted the whole adapter set up over. So, but
[00:01:58]  I've been hearing that they've been working on some really cool things and they've really been like adding a lot of features and polish to this whole project. And I kind
[00:02:06]  of want to see what's going on here. So we're going to look at that a bit while we kind of go through the stream. And when I actually have
[00:02:13]  my, you know, Hacker News example that I always use, I have that in built in Svelte. And we're going to port it from like an old
[00:02:21]  classic CSR one to SvelteKit in a bit. But, you know, I think this is really just a good opportunity to kind of talk about Svel
[00:02:29] te in general. We haven't really covered it. I've showed a few of the compiler things I've compared and contrasted it previously on my stream where I showed where
[00:02:38]  I did the REPL diving stream where I looked at each framework's REPLs and kind of compared making examples in them. But yeah, I mean, there's
[00:02:46]  been a lot of conversation. And as I said, I'm not afraid to come in and, you know, answer any questions or share any opinions. I know this is
[00:02:56]  sometimes considered a little bit of a sensitive area or hard to talk about. And, and there's, there's no history. There's no like hiding the history that while
[00:03:07]  generally like Rich Harris is like a standup guy and I've gone along really well them. He's actually one of the first people that I interacted with that, you
[00:03:15]  know, on Twitter that had a huge following and he was really great and kind of, you know, in terms of, you know, guiding me through the conversation and kind
[00:03:24]  of getting, getting to, you know, be in a civil way. But I've definitely had friction with the Svelte community at times just because my opinions are so
[00:03:31]  different. I'm, and part of the work I've done at Solid kind of calls a lot of that into questions. So like, if you have questions for that,
[00:03:38]  like, I feel more, you know, feel free to shoot them out here, you know, and, and we can, we can talk about that. Rich has
[00:03:46]  done actually a really great job when talking about Solid. He was actually on a builder's meetup and he, someone asked him point blank what he thought. And he
[00:03:54] , he, he gave, you know, the, you know, a lot of the stuff comes down to DSL's answer. And he mentioned, you know, he
[00:04:04]  made the comment about solid being what's, you know, maybe React was meant to be. And then he, he backpedaled that a bit because then he's like
[00:04:10] , well, that says that I'm not saying that React isn't what React's meant to be. And we're going to talk a little bit about that today as well
[00:04:16] . Cause that's been, there's been a lot of conversation around that. Do you think���子 and���子 and���子 are different? Oh
[00:04:24]  yeah. Yeah. Yeah. Very, very different. This is, but I don't think it's a bad thing. This has actually been kind of part of my whole
[00:04:31]  strategy. And my approach to the framework space is understanding or acknowledging those differences and kind of exploring what they meant. And we could probably talk about that definitely a bit.
[00:04:44]  Yeah. Let's expand on that a little bit. I'm going to, I'm going to instead, now that I'm done kind of rambling here for the first
[00:04:51]  comments, do my typical this week in JavaScript. Just kind of get this started. There's been a lot of stuff, a lot of discussion, a lot of, a
[00:05:01]  lot of stuff this week. And I think it all kind of ties in and it's always this week in JavaScript that kind of gives, spawns the idea for the
[00:05:08]  stream that I'm going to do. And while this wasn't particularly a felt week, it, it just, it felt right. And I'll kind of explain that as
[00:05:17]  we kind of go through the different things. Right. So yeah, let's, let's, let's, let's, let's kind of just jump right into this
[00:05:25]  week in JavaScript. First big thing is I'm just going to highlight right on the screen. You see that React 18 is an RC, which I think is a huge
[00:05:33]  deal. Regardless of use React or not, React 18 represents that change that React has been working on forever. Like React 17 was kind of like this migration step, you know
[00:05:45] , kind of like bookkeeping, making sure things in the right place. React 18 is the culmination of the baseline of what React's been trying to do since like
[00:05:55]  2016. But it's like six years in the making. It's, it's huge. Like the ideas here spawned even before React 16 came out. Like they knew
[00:06:06]  that the whole fiber architecture and this whole thing started, you know, from, from that time period. They basically ask the question, what comes next after GraphQL?
[00:06:16]  And even though React 18, when it arrives, doesn't completely answer that question, it's the foundation that makes it all possible. So this is absolutely huge for anyone in
[00:06:26]  JavaScript. I think we'll see how it plays out, but this, this is, this is one of those moments coming here when React 18 is finally released. But
[00:06:34]  the rest of the conversation has gone in two ways and I kind of decide which way I want to take it first because half the conversations have been about syntax and half the conversations
[00:06:48]  been about tooling this past week. And I think, I think the tooling one is interesting to say. We'll start with the tooling one. Why not? Okay. So
[00:06:58]  what am I talking about tooling? What am I talking about tooling? Well, essentially, um, Hey David, um, essentially there's, there's a couple of
[00:07:11]  camps forming right now. And I've mentioned this before. And if some people think it's like the single page app versus the multi-page app and all this stuff.
[00:07:17]  No, no, no, no. There's like a bunch of people who, uh, who, uh, essentially came in, uh, like there's basically the
[00:07:30] , the, the people who are, who have kind of, kind of grown up with this new stage of JavaScript. And yes, it is associated with single page apps mostly
[00:07:36] , but it's, you know, compilers, build tools, and, you know, all the conveniences of modern DX, you know, like they've gotten
[00:07:44]  used to and grown into this. And then there's kind of like a more old school perspective, which is trying, been fighting for years to kind of make a comeback
[00:07:51]  of this, like no tools. And it's, it's a funny contrast for me because I, I think I mentioned this. I took the state of JavaScript, uh
[00:07:58] , survey and they asked how you learn JavaScript. And my answer wasn't on the survey. Um, that is, I learned by using view source. Um, and
[00:08:11]  there's a whole contingent of people who really wish the web to go back to view source. Like DHH is one of them on the rail side. And while
[00:08:18]  I would love to think that this is purely an altruistic perspective, they, they also kind of have their own, how should I put it? Like there's
[00:08:28] , there's agendas involved there and technologies. Yeah. Yeah. Yeah. Yeah. It is very difficult when you get into threads and stuff, but that's why we
[00:08:39] , we got a moment here at the beginning here, before we get into, um, before we get into this to kind of, you know, talk for a moment.
[00:08:47]  Cause like I, I myself do kind of walk that line a bit. Cause I, I, my first retweeted this week was I mentioned Jamie Kyle. You
[00:08:57]  might know him as a, you know, I think the co-creator of Babel people think because I work on tools that I love to use tools everywhere. No
[00:09:05] , I avoid them as much as I can spend as much time as you can focusing on the things that matter, do everything else out of the only necessity. And I
[00:09:11]  can, I can live by this when I make a small library, like a, like something that could fit in a single file. I don't want TypeScript. I
[00:09:17]  mean, I'll write the types myself by hand. Like you, you just, you, you just want like the less moving parts for maintenance, the easier and better it
[00:09:25]  is. You just go, look, here's the file. And that was the whole point of his, his tweet. It goes on. Like, this is actually kind
[00:09:32]  of like nested down on the tweet line, but this is kind of like, we're saying like tools for certain things, not tools for other things. Like I
[00:09:39]  said, he created Babel. So obviously, and he was involved in Rome. So obviously he's very much on the pro tooling side, but when you create some libraries
[00:09:46] , you don't need that. Like it comes down to what fits the purpose. So I just wanted to put this out here because I think this is a good introduction.
[00:09:53]  Uh, no, I'm actually rocking, um, Mojito for the second week in a row. I've been really getting into these. Um, let's
[00:10:01] , let's, uh, moving on here. And the reason this is a big one, right? You, everyone saw this, um, TypeScript in the build step
[00:10:12] . Um, could we have types in JavaScript? You know, and this is interesting. Again, the reason I mentioned this one is because at least this proposal is more or
[00:10:21]  less glorified comments. So I, I don't think it actually saves you the build step, but it's, it's funny how it's being positioned because yes
[00:10:32] , in the whole shift left mentality of the world where, you know, let's catch type errors as soon as possible. Like in your IDE, something like this is
[00:10:40]  actually, you know, it could be pretty powerful, but it doesn't, it doesn't eliminate the build step. And it's kind of interesting again, cause we're
[00:10:46]  seeing the no build people come out and champion it. They're like, okay, well, if we have TypeScript, maybe we don't need a bundler. We
[00:10:52]  can use ESM and import maps. And, um, you know, maybe we don't, we don't need, you know, minification or, you know,
[00:11:00]  whatnot. And, you know, it just starts a whole bunch of conversations and, you know, wherever you sit on this whole TypeScript in the browser thing. I
[00:11:07] , I think, I think it'll be useful in the same way that I think what Jamie just said was useful. Like when you're just building a library, sometimes you
[00:11:15]  don't need to like bring the whole tool chain in. I, I think, you know, when you have like the, the rich Harris take on TypeScript where he
[00:11:20] 's already just writing comments anywhere ways, you know, it's, it's kind of useful, but I don't think it's, I don't think it actually changes
[00:11:28]  that much for like, for the mechanically, you know, people who really leverage these tools, you know, and, you know, that's my opinion. You
[00:11:36]  know, that's my opinion. Other people are going to have other opinions. You know, yeah. Well, I mean, ES4 was crazy, right? ES4
[00:11:42]  also almost had a JSX, which is another topic on this building. As I told you, there's, there's, there's, there's, there's been
[00:11:50]  like a lot of things, you know, Devon was like, now do JSX, right? You guys don't know Devon, uh, create a parcel
[00:11:56] . Um, and. You know, there's, this has come up a few times in the last couple of weeks, but I've been very on the, not JS
[00:12:03] X side. I like that. It's kind of this universal DSL that anyone can leverage to the purpose. Once you go this direction, you kind of say what
[00:12:10]  JSX is. And my gut is more and more in the future, people are going to make, want to make more optimization. Solid's built on optimizing JSX as
[00:12:18]  many of you know, but like Inferno optimized JSX before Solid did. Like Inferno, which is a VDON library still has a different compile
[00:12:26]  output. View. I'm pretty sure if they're not doing it already are, are, are working would, would go that direction where they'd optimize their JSX.
[00:12:35]  Like, it's just, I think it's inevitable growth there. So brilliant. The browser is like the last thing I personally want, but it, it brought up an
[00:12:42]  interesting conversation. I just want to put this note in here. Cause this, this, this is the kind of comment that'll probably slide by most people, but I just
[00:12:48]  wanted to put this there. Sebastian Macbaje. I don't know if I say his name. Correct. I apologize if I don't, uh, also known
[00:12:55]  as visionary behind react basically for the last seven years. Um, he, he basically made this comment and this one's more of a personal comment on my side and maybe solid
[00:13:04]  people could, uh, you know, respect this. You know, people have been using it for what it's worth. This introspection is heavily deprecated.
[00:13:09]  He's talking about props, children, essentially. Right. Um, deprecated and react in my mind. He's if you've ever used a pattern react where you
[00:13:16]  like clone the children, like go clone element on the children. Um, basically cause they're talking about different patterns for JSX and about traversing the JSX.
[00:13:25]  Cause Devin was saying that like, it's really useful how, you know, the standard format, we could just traverse it and learn about the nodes helps with accessibility analysis
[00:13:33] . All this kind of stuff and, and stuff like, you know, from my perspective, it's already deprecated in react. You shouldn't be doing it
[00:13:38] . It blocks essentially all optimizations we could do. And it's very rarely used. We just need to provide suitable alternatives. I think this is really interesting as this
[00:13:46]  is more on my side of things because in solid, as you know, we don't have react clone node. Cause if you clone the node, you'd be cloning
[00:13:51]  a real dom node and that'd be kind of terrible. So, you know, like inefficient. So it's interesting that they're kind of pointing out that this, this
[00:13:59]  one place is a place that they, they actually don't want people to use. I mean, he admits later on that there isn't a good solution and, and
[00:14:06]  that yeah, or Dan says there are use cases, which is the only reason why it's not actually deprecated, but, but essentially it's an interesting shift.
[00:14:15]  And I know this is a little bit off topic, but I just wanted to bring this in because this is, this is kind of obvious, especially when you start thinking about
[00:14:22]  the stuff we talked about with quick with breaking stuff apart and like any kind of optimization in this pattern, you, you don't want to break the abstraction. And this
[00:14:29]  is the one place where reacts abstraction completely falls apart. I actually completely hate that pattern and people it's, it's something that's a gap in solved. So people always
[00:14:38]  ask about it, but it's interesting to reacting themselves, consider it kind of an anti pattern. Okay. Sorry. Back, back on topic. Right. Well, yeah
[00:14:49] . And, and this, this is, this, this is, this is one, right. Thomas asks, can you get the strongest version of this argument to avoid tooling
[00:14:55] ? It seems to me that it doesn't get you much unless you can literally remove all tooling. which seems unlikely. Yes. And here's the thing. There are
[00:15:01]  cases where you can remove all the tooling, right? Like I think in education, I think in scenarios where you're teaching people, it's really powerful to just be able
[00:15:09]  to throw something in a file. Like I, I did look, I learned HTML on the web that way. We, you know, like notepad plus, plus
[00:15:16]  that's how, that's how I learned things. You know, it wasn't just view source. Then once you viewed the source, you copied and pasted it
[00:15:22]  into a text file and then to the website, you know? So I think if we can get back to that, you know, I mean, ESM was amazing for
[00:15:30]  that. I mean, the first time I had solid running in the browser, as many, you know, solid doesn't require a compiler. It's actually not the
[00:15:36]  compiler is just like a syntax sugar for the JSX. It actually runs completely runtime. And the first time I had it running off, like one of the, like sky
[00:15:45]  pack with the modern CDN on ESM, like on just a text, like a notepad on my computer. I was like, wow, this takes me
[00:15:53]  back. You know, this shows how old I am. But I was just, it was just like amazing, this kind of feeling. But the problem is, yeah.
[00:15:59]  Would I ship a production app like that? Never like tree shaking is fricking huge deal. I mean, some people talk about minification compression, which is the next topic
[00:16:07]  I'm going to bring here. But like the solid core has concurrent concurrent mode, like essentially, and time slicing wrapped into it. You have to use the scheduling and
[00:16:20]  stuff is all kind of intertwined and you have so many touch points. But in solid, if you do not use transition or, and use it with suspense and enable scheduling
[00:16:30]  one of our flags, they basically, if you don't use the features, we can tree shake it away. Solids, people go on, but they'll be like
[00:16:36] , oh, solid 6.5 kilobytes. I see preacts for, but like solids, actual bundle. If you're using the same features that are in pre
[00:16:43] act is like three points, something like essentially like tree shaking is. It's huge when you start adding it up to like the multitude of libraries that you use in your
[00:16:51]  framework or in your application. So that's a whole other thing. But let's, but there, there are use cases, you know, for education, I would think
[00:17:03]  you still, yeah, I don't know. If you've ever used Babel standalone in the browser, it's, it's, it's, it's kind
[00:17:12]  of unpleasant or whatever. Like there's something nice about being able to just open the text file. I think my problem is I can see the need or not the need.
[00:17:20]  I can see the want and I can see, how should I put it? I can see like how it could work out and it wouldn't be that bad and it
[00:17:29] 'd be fine. And, you know, but the, it's, it's kind of only like a, okay, you know, it's not like, yeah,
[00:17:35]  this is the way forward. And the people who are kind of pushing it are really like, this is the way forward. And part of it comes from like this,
[00:17:41]  like, like anti spa mentality. And so it's, it is, there is a line drawn and you'll find that like web components have somehow aligned with people on like
[00:17:50]  the rail side and all. It's kind of interesting to see how these kind of movements in JavaScript are going. Meanwhile, all the single page app people really focused on how
[00:17:58]  to reduce JavaScript and solve the problem in different way. There's like a couple of opinions, how we can solve this problem. And I've been covering the last few weeks
[00:18:04] , how we can solve the JavaScript problem using JavaScript. But there's a whole other group that's like, well, let's reduce tooling. Let's like, let
[00:18:12] 's go back to how things were before. I think they're not going to find what they're looking for there. But the part that really, you know, is more
[00:18:19]  irksome or more thing is just like how strong try to put this one. This, this, this, this is like, this is peak what I'm talking about
[00:18:29] . Does minification matter if contents is gzipped? And the answer for that is yes. Like obviously not as much, but yes. And, and, and
[00:18:37]  the TDLDR is not really, I have to bring this one up because this is just so ridiculous that, you know, sometimes things are worth being called out. So
[00:18:46]  I'm here's the thing. This article is fine. And it's from Chris Corian 2015. And he's just talking about the maybe minification of CSS. Isn
[00:18:54] 't that big of a deal. And he's kind of right. I don't know if you know, if you look at CSS at all, like, if you
[00:19:00]  look at CSS at all, it's a lot of repetition. You can't compress any of the symbols because they're all key words or values. And all you can
[00:19:09]  do is remove the white space. So he was showing that, you know, 147 kilobyte file becomes 123 when you minify the CSS. But when it g
[00:19:18] zips, it gets down to 22, which is only two kilobytes more than when you apply both of them together. This is true. And there's nothing
[00:19:25]  wrong with this perspective. Because CSS, there's so little you can do. But think about the characteristics of JavaScript. Because Brian's trying to suggest that JavaScript works the same
[00:19:35]  way. And that's ridiculous. Because in JavaScript, not only can you reduce all the white spaces, but you can shorten and mangle, like, all the names.
[00:19:44]  And if you think about it, it's a lot less repetitive. Compression isn't actually as effective on JavaScript as it is on CSS. So, like, basically
[00:19:56] , both factors, you know, change the math considerably. But, I mean, they're not going to find a study that supports that, you know, only gz
[00:20:05] ipping is good enough on JavaScript. So, you know, he's going to use CSS here. I just wanted to kind of put this out here. This is just
[00:20:16]  something I had to call out. Okay. Let's keep moving on. There's not much more to say about that one. And I think what I wanted to -- yeah
[00:20:29] . Let's continue on with what else has been going on. Let's switch the conversation a bit from tooling. I mean, we could talk a little bit about --
[00:20:38]  about the other side of the puzzle. So, Matthew Phillips, as many of you know, works on Astro. Really, like, insightful thinker trying to, like
[00:20:49] , change the game. He's been exploring ever since he's, like, got past the islands at Astro. He's, like, how can I make the
[00:20:58]  islands smaller? And he actually started posting what his ideal framework would be in terms of how to make it smaller. And somebody's, like, that sounds like Marco. And
[00:21:05]  a few people usually do. And he's, like, oh, no, I don't think so. And it's, like, no, Marco does actually do this
[00:21:10] . And we've covered that. And Marco's doing it even better. as the last stream I did. Very good. Do check it out. But he introduced a
[00:21:17]  new framework that's kind of, like, on the Alpine petite view side of things. And it's kind of cool. It uses CSS selectors to essentially -- I
[00:21:28] 'm not going to use the word hydrate, because hydrate suggests you wrote the HTML. But essentially, add JavaScript back to an HTML file. So you can basically render
[00:21:37]  this in any backend. It could be your Go, Rust, whatever you feel like, PHP, Rails. And then it basically uses CSS selectors to basically add the
[00:21:46]  interactivity. And this just uses reactivity to do it. It's very similar to Alpine. But instead of embedding it into HTML, it's kind of like
[00:21:55]  this separate -- it's using selectors, essentially. And while this is -- you might think it's kind of crazily different. I mean, it works using tag template
[00:22:03]  literals. And you can do a lot of dynamic stuff, actually. He was kind of worried that Sprinkles undersold how powerful it was. And I was like
[00:22:11] , no, no, no, no. Because Alpine, for example, can compete in the JS framework framework. It can do everything. You don't need the HTML
[00:22:17]  to do it. So what he actually did was he actually shared with me a little example -- let's see if I can find it here -- where he's doing pure
[00:22:28]  client-side rendering with his library, CGS only. And -- oh, is it not going to load for me now because I'm here? No, okay.
[00:22:36]  I mean, it's a silly example. He just said hello, Ryan. But you can basically use the body selector to attach a template, which is literally just a
[00:22:44]  template element that he created, you know, like hello with a span. And then notice that there's a class with a name in it. And then he uses the
[00:22:52]  name to set the text to Ryan. Really novel approach. And what's cool about it is because you keep it all the HTML, it actually makes it easier to play the
[00:23:01]  two app game, I call it, right? Because you're not really messing with the HTML output. I don't know if you've ever done this. I've
[00:23:07]  been there before. I'm not a huge fan of the two app thing. That's why I work so hard on these partial hydration things and completing the single app story.
[00:23:14]  Because essentially, like, you start getting, like, templating languages in template language. Like, you have, like, ERB for Rails, and then you have,
[00:23:26]  like, Alpine, and they're sitting on top of each other. And it's really funny, too, because sometimes stuff like ERB is kind of dumb.
[00:23:32]  It's, like, not semantic templating. It's just, like, insert the space templating or JavaScript or whatever. And then you have, like, the really
[00:23:41]  kind of meaningful semantic thing. And when you layer them on top of each other, it's kind of a mess. And honestly, I never want to go back there again
[00:23:47] . This keeps them separate, though. So this is kind of, like, an interesting take where you can keep your HTML clean from your Rails or PHP app, yet have
[00:23:55]  that same kind of reactivity. And if you want, you can, you know, do, you know, some stuff. This is a bit more, like,
[00:24:04]  stimulus because, like, I don't know what type of bindings it has. But, you know, you've got the full power of JavaScript at your disposal.
[00:24:11]  Yeah, yeah, a little bit, right? Yeah, I mean, he was trying to show a point. But, yes, I think so, right? Because,
[00:24:19]  I mean, you're right. If you've ever seen solids compiled output, it looks exactly like this. Create a template, set the template, and then, like
[00:24:26] , clone the template. So, yeah, I think -- I don't think every example like this is a pure client render. You can picture the more base case of the
[00:24:34]  HTML already being there and then just being, like, this selector, put this in, this selector, this way. So it's still very declarative.
[00:24:39]  It's just keeping, like, a secondary tree, and it's using CSS syntax. What I think is interesting about CSS-like syntax is if you can keep the benefits
[00:24:47]  of the parser, like, one of the hardest parts about inventing DSLs is all the tooling and tool chains around it. Again, back to tooling. And
[00:24:53]  that's why I brought this up now. So if you can preserve -- if you can preserve your tooling, you know, by following the same syntax rules and whatnot, it
[00:25:03] 's an incredible boom, right? This is why I chose JSX. I mean, I chose JSX in solid for specific reasons because that's certain properties I think
[00:25:09]  are very important. Like, the fact that you can make a div element, just an HTML div, like, this portability where I can just pass it around, I
[00:25:17]  think that's incredibly powerful. But, okay, if you're not going to use HTML as your DSL and you're not going to use, you know, why not
[00:25:28]  use CSS? You know what I mean? Like, that's essentially what we're seeing here. So it's interesting. I think this needs more exploring, but as
[00:25:35]  I said, Matthew's a trendsetter, and I think it's really cool what he's been playing with. Okay. That's it on the tooling side. Unless
[00:25:45]  anyone wants to talk about that more. But now I want to talk about syntax because that kind of gets us back into this conversation with Svelte because, you know,
[00:25:56]  like, it's all about syntax, as Richard was saying. I was, I was actually, I actually have the recording at the handy. I was actually going to
[00:26:04]  kind of play that for, if anyone heard it. It's a short little clip. Let me see if I actually have it on hand. But, like, I think
[00:26:12]  I love how, oh, here it is. Sorry. I love how political. The name is in Japanese, so I'll just say the question. So they ask
[00:26:24] , what do you think of Solid? About before, what AST libraries would you recommend playing with? Okay. So Solid, Solid is very cool. Solid is kind of
[00:26:37]  like React done right in a way. I shouldn't say that because now I'm suggesting that React was done wrong. And that's a terribly impolite thing to
[00:26:47]  say. But Solid is a really well designed library. If a lot of this comes down to stylistic preference, right? And I think we're at the point now
[00:27:00]  where if you prefer the JSX way of doing things, then Solid is a really great option. If you prefer a more template-y approach that combines styles with your
[00:27:12]  markup in your JavaScript, then Svelte is a really good approach. And it's really good to have those choices. And the people who are using Solid at the
[00:27:23]  moment seem to really love it. I'm not using it for anything, but I don't know if people saw the state of JavaScript survey that came out recently. Solid,
[00:27:33]  brand new entry into the survey. Got the top satisfaction of any front-end framework. Solid and Svelte both got 90%. And you really can't argue with
[00:27:45]  numbers like those. It has a pretty small user base at the moment. It's like a very early adopter-ish brew, but those people really, really love it
[00:27:56] . So I would definitely encourage people to give it a look. It's kind of disproving a lot of the assumptions that we had made about front-end framework
[00:28:07]  performance. And it's kind of pushing everyone to do a little bit better. So Solid is great. Yeah. I mean, Rich is great. He brought up the
[00:28:17]  two points about pushing the boundaries and about the kind of coming up again, because my position that I've had for the longest time is that it isn't just the shortness
[00:28:29]  of Svelte. Actually, I have a tweet here. I was helping Pierre earlier. He wanted to know what relations React Hooks had to Svelte 3
[00:28:38] , because someone's like, oh, yeah, Hooks inspired Svelte 3. And I pulled up this old thread because he, Rich was trying to add,
[00:28:47]  was thinking, oh, maybe I can add hooks to Svelte. And then he realized that, you know, he could just reduce it down in terms of like syntax
[00:28:56] . And this is like, you see, there's no dollar sign on this double. It's like very early, but he, this is basically where he had, he
[00:29:01]  came, he first realized the concept of what he was gonna do with Svelte 3, their compiler, you know, just compile in the hooks. Right. So
[00:29:07]  to speak. But I think the thing that's not always obvious with this thing is hooks don't exactly work like this. You know, I mean, in some ways,
[00:29:20]  um, react and, uh, and Svelte very, very, very similar, but the other, but the, the, where they're not similar is this is
[00:29:32]  the perception of the execution model, um, where, um, you know, in those cases. So does feel more like solid in that, um, essentially it's
[00:29:42]  like this reactive model, right? You don't need the dependencies. Um, and if you're, you don't need the dependency in react, which I'll show in
[00:29:49]  a minute, but it's still this kind of rerun once. Like the, the world runs once, and then you have the expressions that change. That's the kind
[00:29:57]  of, at least the visual that they do in reality, react and stealth actually rerun your components. Um, but, uh, essentially the, the execution model that
[00:30:08]  is shown to you is one in which, um, you know, in Svelte, which it runs once. And this kind of ties into what it's doing here
[00:30:18]  because Tanner, um, react query and react location and react everything really, um, uh, essentially was like, well, I, I, I, I don't want
[00:30:30]  the dependencies. arrays in react. So he actually came in and I'm just gonna put this on the screen so you can kind of sync it in this, this looks
[00:30:36]  a lot like solid. If you've seen it. And my point here is it, this is actually still react. Cause if, as I said, if stuff was like
[00:30:46]  solid, the component would only run once. In this case, the component is running multiple times and, and there are hooks behind it. What he did is a whole
[00:30:55]  crap load of use refs behind the scenes to basically like keep mutable state behind these hooks. And then there's, there is a state setter behind the signal
[00:31:05]  and it is tied to this component, but essentially he's, he, he's by cleverly. Um, by cleverly having these, uh, these, these
[00:31:16]  objects in, in, in refs, essentially he's storing the dependencies arrays as refs in the background, but he's not using. Reacts dependency rate because
[00:31:28]  react isn't, doesn't let you make the dependencies, um, dynamic instead. He's providing his own invalidation mechanism, essentially giving the array, like say one argument
[00:31:38]  and, and based on his own heuristics deciding whether it's updated or not, but he's keeping track of his own dependency arrays. And, and then basically
[00:31:47]  invalidating himself all using refs so that when you call this count under the signal effect, it is actually doing solid style tracking. And. Essentially when you set count again
[00:32:00] , he knows from the dependencies, whether to invalidate the effect or not. So it actually has dynamic dependency tracking. Like solid in terms life. Like if you had
[00:32:11]  a conditional or something in here, I think he has an example. Uh, let me see. Yeah. The, the final example where, uh, it's actually worse
[00:32:18]  when I make it big. Maybe I can. Is there a way that I can blow this up? No, it's not gonna, it's not gonna let me do
[00:32:25]  that here. Um, this might be too small to see, but maybe there's like open image in a new tab. And then can we blow it up? Yeah.
[00:32:37]  Okay. Let's, let's look at this for a second. Um, he's actually like, look at this one. Use signal effect. If should log console
[00:32:45]  log message. This is a classic example. Um, Michael Jackson, actually, when he found out about this behavior and solid and in these things, he was like, oh
[00:32:54] , this is really kind of smelly. But I actually think this is like a superpower because if you, if you don't, if you set should log to false and
[00:33:02]  you change the message, this never reruns. That's how dynamic dependency things. It lets you turn things on and off by feature. It's super powerful. Like
[00:33:09]  the rate, you can picture the rate changing lane and he's actually simulated it here. Um, this is just like a prototype that he's working on. Let me
[00:33:20]  see here. Some comments. Yeah. I mean, but I mean, if you've used solid, that's, that's, that's, that's basically what this
[00:33:30]  is. Uh, this is a little bit funny. He is observing the, these, the state, but the problems of state is the component. It's still react
[00:33:43] . So things do run over and over again. It's not like fine grained reactivity, but it has the same API. Yeah. I mean, sure.
[00:33:51]  I think everyone can acknowledge that a little bit, even, even, uh, our man, Adam Rakis. I, I, I was surprised by it. He actually
[00:34:03]  tweeted. He's like, oh man, if Tanner Lindsay's into solid, I'm going to have to look at it. Um, good times, but yeah.
[00:34:09]  So yeah. But the funny thing is it's not actually a package. It's a hundred. Like, I mean, it is, it could be a package, but
[00:34:13]  it's like a hundred percent done in refs. I've seen the implementation. He's shared it with me. I don't know if it's my place to share
[00:34:18]  it on stream. He seemed like he wanted to be guarded. I do have access to it. I've looked at it. Um, it is, it is clever.
[00:34:24]  I've never wanted to write that many refs in my life, but in a sense, he's writing the refs. So you don't have to, you know
[00:34:29] ? Um, it is, it is clever. I've never wanted to write that many refs in my life, but in a sense, he's writing the refs
[00:34:34] . So you don't have to, you know, um, yeah, yeah. He, he did say that, but I do have access to it. I'm
[00:34:42]  sorry, you guys. I it's, it's not, it's not my place to, to share his work, but you can, if you want to picture it
[00:34:49] , it's just like a lot of refs and rest to refs. Like it's, it's, it's kind of crazy, but he did this. There
[00:34:56] 's, there's no like subscription model. There's no like, like third party. It's not like brought solid in or mob X or like even something like Jot
[00:35:03] ai. Like he literally is just using refs, using local state. This isn't global store. This isn't global state. He's just, he just wants
[00:35:09]  to solve one problem. It's like, get rid of those freaking dependency arrays. And it actually works. And he made it dynamic, which is cool. As I said
[00:35:17] , it essentially changes the length of the array, even though react doesn't let it. I mean, it takes an expertise of react that a lot of people don't have
[00:35:23]  to do this. But what's really cool about it is he, you know, he put this, he was up to like 2 AM. He went to like,
[00:35:30]  me and him were both up. I was playing around the Svelte demo and he was working on this. And it's just like, man, it's gotta go
[00:35:35]  to sleep. Right. That's like, I'm a little tired tonight. But, um, he just kept on adding features cause we were talking through and we're
[00:35:43]  like, okay, well, how do you do this? Right. Can, can, can, can we do this? Can we do the conditional thing? What if you
[00:35:49]  have some props or some static stuff? Like essentially you can still pass the dependency array and have that also work, but essentially it's tracking, you know, but if you
[00:35:59]  have stuff that's like user reducer or something, it can still feed in through the dependency array. So it works both or check this out. That's the last
[00:36:06]  little thing, make a wrapper. You can take something immutable state in react and use as a signal. And now it's trackable in the same way, right?
[00:36:13]  If divisible over three, he was really loving playing with the conditionals. Once you are used to playing the conditional dependency tracking, even though it has like the gotchas
[00:36:20]  a little bit, cause you're like, oh, if I could write something that's like unrelated and cause things up. It's so powerful in terms of reducing execution,
[00:36:28]  you know, like, like, you know, especially when the work you're saving is expensive. This is not that expensive work. So like it's not a big
[00:36:35]  deal, but you can, you can see like if it isn't divisible by three, well then no, we don't need to get random or do count. And
[00:36:41]  I enjoy this in solid and I've always enjoyed this in solid, but seeing it in react and seeing the joy that it brings people playing around with this react just makes me
[00:36:49]  like giddy. Like giddy almost. It is, it is interesting, right? Because as I said, you, you just, as I said, it's
[00:36:58]  just counting. It's just like using salt. The only, the only difference is it doesn't benefit from any of the performance gains because this, this, you, this
[00:37:07]  use, where this use signal or whatever he's got here is tied to the app component. No matter where you update it, it causes the app component to re-
[00:37:14] render. It's, it's not fine grained. It's not like causing this stuff to re-render. It's literally just react. Um, but he did
[00:37:21]  it without, as I said, introducing another subscription system at all. There's, there's no, like, this is even lighter than some of, uh, the commander
[00:37:30]  libraries or whatever, like the daishi's working on. I think it's like less effective. You don't get that, like pin, you know, you know
[00:37:36] , with the Jotai everyone's like, oh, update. It's like a scale. This is like just react scale. So like if you update it, well
[00:37:42] , everything below it in the tree is updating unless you put memo yourself. So there's, there's no performance optimization. It's just an API thing. Then you have
[00:37:50]  like Jotai, which goes, okay, we know specifically which components depend on the state. So if you change the state that you listen to re-render those components
[00:37:57]  and preact is actually working on something like this too. I, I don't have the tweet at my fingertips, but they're actually looking at adding a reactive module
[00:38:04]  for preact. It gives you that kind of Jotai mob X type experience. Um, and then solids like the third stage where you don't actually even re-
[00:38:11] render the components. You just update what changes like super optimized. So this is like, this is like the, the steps to get there. But as I said, let
[00:38:21] 's not linger here too much. This is the stream is going to be about, uh, Svelte when we get to it. But I wanted to bring this
[00:38:28]  up because I, I think that it's interesting about how important syntax is. Right. And as I said, my approach was solid. Hasn't been about syntax.
[00:38:41]  It's so funny because people are making a big deal about it. Like, um, I don't know if I have the quote here, but I, Rack
[00:38:49] us has been making, uh, Adam Rackus has been making a little bit of a, uh, a fuss on some of these things. Right. Uh, you
[00:38:56]  know, I actually, I don't want to pull it up. It doesn't really matter, but he was a couple of weeks ago. He's like, Oh
[00:39:01] , solid looks really nice. Or I should check it out. And the funniest thing is I wasn't. I saw a stream yesterday with, uh, who's a Cass
[00:39:07] idy, uh, Cassidy on Twitter. And she, she had a hard time getting to solve it. And I understand she's, she looked at the counter example.
[00:39:15]  It was like, Oh, it's like react. I get this. And just went at it and she didn't go any further in the tutorial. And then it
[00:39:21]  hit like our, our one rule, which is like, don't destructure and you know, every variation of it along the way. And the problem is you see something
[00:39:31]  like syntax and it immediately evokes a certain thought or recognition pattern in your brain and kind of causes you to, um, you know, go, Oh, I know what
[00:39:41]  this is and make that connection. And for better or for worse, for solid, we ended up like react and we're nothing like react. So it's, it
[00:39:50] 's very hard for people to make that shift. Whereas if they see viewers felt, they made like, Oh yeah, go. Okay. This is different. My brain is
[00:39:55]  now thinking in a different way. And you know, what I was getting at is the execution model that run once execution model makes something like Svelte and solid. Um
[00:40:05] , on, at least on the. Appearance of execution, as I said, solid, it's a little difference, a little bit more optimal in terms of how
[00:40:11]  it executes. But when you, when you look at like how the model looks to you, it's, it's, uh, analogous. Like it's
[00:40:19] , it's like, it's, it's almost line for line in terms of the same permits to the same things. It's not like react where you have like these
[00:40:26]  other mechanisms, like use ref and use callback. Um, but as I said, the syntax feel, you know, adding the dependency rate, this all kind of
[00:40:35]  adds to this layer that I usually I don't really care that much about. Um, but people do. And it affects you as I said, when you learn a
[00:40:42]  new tool, it's a familiarity thing. When you, um, when you, you know, try something for the first time, this has probably the biggest influence on you
[00:40:52] . When people pick up Svelte and they see let in constant and like, oh, this is just JavaScript. It has that kind of impact. Even if mechanically
[00:41:00]  under the hood, it's doing a whole bunch of other stuff. Right. And I think, I think that's, that's the thing I can come into this
[00:41:07]  too, because I'm not gonna lie. I've been a little bit kind of like, eh, with some, there's people in the solid community. Like you can
[00:41:13]  take Svelte templates basically and compile them to solid. Um, and you can do that. And I've been kind of like, yeah, sure. You know what
[00:41:22] , whatever's your cup of tea. Right. One of the cool things about working with primitives is really easy to make them do whatever the hell you want. Um,
[00:41:29]  but yeah. And I actually have a whole thread about that. I know, I know this is a Svelte stream, so I don't think it's worth
[00:41:34]  getting into. But, um, if you do get a chance, do check this out. I, I kind of reflect on how this perceptions change around solid. And it
[00:41:41]  is about this whole idea of, of, you know, people look at it and see different things. Um, and I, I, I guess working on the framework or
[00:41:51]  the mechanical side is this, this has been the least important piece to me. And, and yeah, I saw a lot of. Um, yeah, yeah, yeah
[00:42:03] , yeah, yeah. This is a perfect example. Yes, of course we could, but here's the, and we, we, we could even have an ESL
[00:42:08] int rule, you know, and we do. I don't think it's incorrect behavior. I destructure props. Sometimes I do destructure. I tell everyone never
[00:42:19]  to destructure, but I, I destructure. And the reason is the model makes sense. And it's perfectly consistent. It's just not what you're used to
[00:42:27] . We have, we, we have, there's Babel plugins. It's not part of the main one, but we have two different Babel plugins that, that
[00:42:35]  I'm destructure. And when people get come from react, I sometimes say like, use this plugin, but it changes. To me, it changes the meaning of
[00:42:44]  what's happening. And it's, it's just hiding stuff. I don't like heavy abstractions. I like being on the metal. I don't solid is
[00:42:51]  almost an abstractionless framework. This is, this is what the, where the, that philosophy difference kind of comes in. You know, I'm going to do a stream
[00:43:00]  on this at one point when I really talk about what solid is. And tonight is not that stream, but like we try and keep the abstractions at a minimum. Right
[00:43:11] . And that is kind of the opposite of what Svelte does. And it has different consequences. And, and there's, and there's different reasoning behind it
[00:43:24] . Right. Like, as I said, we, we, we can fix at least the easy cases. I just, I mean, there's always a trade-off
[00:43:31] . Like, okay. How do you know what, what a component is? Right. In solid. I enjoy the fact that a component is any function essentially, or,
[00:43:40]  or, you know, some reactivity is any function. You don't need to wrap it, you know, wrapping it has a performance overhead. But in order to
[00:43:46]  get the destruction, the work, you actually have to annotate to know what the components are. And go, does it return JSX? Does that make it a component
[00:43:52] ? Maybe. That's not a bad heuristic, but essentially you enter this zone when you have that level of flexibility and power that like, there's always these kind
[00:44:02]  of trade-offs. And for me, the trade-offs often just aren't worth it. It's like, how hard was it for you not to destructure
[00:44:09] ? Just don't. It's like, you know what I mean? Like you're going to jump through a bunch of hoops to not even really solve the problem.
[00:44:15]  And then if you pretend that's the abstraction and someone finds the hole, like that's when the earth shatters. And I don't like, I don't like
[00:44:23]  that. I mean, to be fair, they'll probably get really far before they find the hole in the abstraction. And maybe that's good enough, but it's
[00:44:31]  like, I built solid with my mindset and maybe I'm a senior developer or whatever. And that's where I'm coming from. That that's what I value. But
[00:44:39]  I don't, I don't care if I, if it means explicit in this, I don't mind, you know, typing a few extra characters. I like having
[00:44:48]  the control reflective of what's actually happening unless like, I don't mind having some conveniences. But essentially, like, I don't like masking behavior. Yeah,
[00:44:59]  I mean, this, this, this was like, and this comes from functional programming, to be fair. It's very common in functional programming to do a lot of dest
[00:45:11] ructuring. And people love it. You know, I'm, I'm probably gonna be pushed at some point to, you know, come back to the chat.
[00:45:23]  You know, can make the, that part of the standard preset for solid or something. I just think it's kind of, I don't know, I, there,
[00:45:30]  there are shortcomings in terms of recognizing these things. I don't like annotating components. I like the freedom. Like, if you ever seen me talk about solid,
[00:45:38]  you'll see, it's like, it's like the most raw, powerful thing. And it's like the complete opposite. It feels like something where like, and
[00:45:49]  this seems weird to people, but I feel like if the paradigm in front end completely changes tomorrow, I can still use solid for that. Because I'm just like, oh
[00:45:59] , we're doing this now. Let's just switch it around. It's like, oh, concurrent round. Sure. Let's just do this. Like the power
[00:46:04]  of the reactivity in the primitives is literally like, you just do whatever you feel like. You're just like, oh, okay. Like, oh, this is
[00:46:10]  what we should be doing. Let's do this. Like, like there's no framework, right? I have the DOM expression compiler, but then you just write like
[00:46:20]  a slightly different compiler. Like everything's runtime and it's all mechanical and the core concepts are three primitives, you know, and that's just how I attack these things
[00:46:31] . And sure, you can build layers on layers and someone else will do that because it'll make their life easier. Someone can build Svelte right on top of solid
[00:46:38] , you know, trade some of that power for some ease of use and good for you, you know, do that. But that's not like not here. I
[00:46:47] 'm kind of a control freak. I like having complete power and the complete ability. Like solid came out of this time period essentially where it was the crazy part of the early
[00:46:58]  2010, 12, where everything was changing and react came up and I was using stuff like knockout. So like you can just see as a continuation of that, you
[00:47:09]  could, you know, in some ways you could say that current solid is just kind of imitating react on purpose. Cause it, it seems like a good thing to do
[00:47:22] . Not for any other reason. If the next paradigm is something else, well, we could do that too. And view plays this game a lot. They, that
[00:47:30] 's why they have so many different syntaxes. I just don't care about the syntax game. I care about the mechanical game, like more architectural game, but view has
[00:47:38]  fine green reactivity and has that same potential. That's why view is like, oh, we have, now we have ref sugar. It's basically like Svel
[00:47:45] te because when you have these powerful permits, you can do whatever you want. The only thing is that it's all power goes even lower level. Cause we don't have
[00:47:53]  a beat on. So yeah. Sorry. This is, this is kind of tangent, but I knew we'd get here a bit. Um, yeah, yeah, exactly
[00:48:02] . Yeah, exactly. Yeah. Sorry. I had this up before, but I missed the key point, which is the familiarity. People see react and they just do
[00:48:12]  it. Yeah. I mean, this came out of that time period, as I said, because that's what I was doing. I was in a company that was building
[00:48:21]  apps with like backbone. And somehow when I left that company in 2018, 19, we, we did move to react right at the end. I didn't feel for
[00:48:31]  one moment in those six years that we were behind the curve. I thought we were ahead of the curve the whole time in patterns and stuff. Hawks, components, all
[00:48:38]  that stuff. Just because we could do whatever the hell we wanted with Knockout and Solid. I just was like, like Knockout had problems, but I, I just
[00:48:45]  was like, these are solvable. I don't know why people like came up with all these like fixed systems. You can just make the thing do what you need it
[00:48:54]  to do. And yeah, it's, it's a different mentality. I don't think most people get what solid is just yet. And I'm, I'm
[00:49:01]  going to try and alleviate that more in other streams, but that's, that's where this is coming from. Right. This is this kind of mentality. Yeah. Okay
[00:49:09] . Yeah. I mean, the, and part of that is like too many variations, too many things that that's because it's hard to be everything to everyone.
[00:49:21]  And that's not, that's why I don't see that as my responsibility. I want to provide the primitives. I want to provide the building blocks. I,
[00:49:27]  this is why, like, if you're going to provide the building blocks, maybe you don't get into that syntax game. Maybe give them their, you know, thing
[00:49:33] , you know, let, let people build those experiences. I, I just, I don't mean to be insensitive to it. I just don't care.
[00:49:42]  Um, it's just, it's just, it's just, it's just like typing characters. I like what it does and the mental model is so much more important
[00:49:49]  to me. Um, so, you know, as I said, you like, here's the thing. Solid has this explicitly as this composition model. Svelte
[00:49:59] 's composition model takes you to store. So you can level up. You go from let something to like, now it's a store. And if you ever seen a S
[00:50:06] velte store, it's basically like one of our signals. It's a little bit more verbose in its style and it's a little less granular the way the subscriptions
[00:50:12]  happen. It's basically like RxJS, but essentially like you kind of level up view kind of levels up. I just don't, I just don't
[00:50:21]  feel like leveling up. It's just like not worth having multiple things. Just give me the thing and have it work the best way possible that I can do what I want
[00:50:29]  with it. And then I'm done. But as maybe that's like a different kind of developer perspective. That's, that's not how you get beginners using your framework
[00:50:37]  and new people, even that's a bit of a friction. So we're working on it and I have people who care about this stuff so that they're working on
[00:50:44]  it. But for me, I just want to make like the best possible things that can, that give me the most control over what I can do with it. Anyway,
[00:50:52]  I think we're kind of getting off into tangent. We should, we should start talking about Svelte here, right? Yeah, exactly. Let's, let's
[00:51:02] , let's, let's, let's move on a bit. One thing. Yeah. I mean, I already kind of covered everything here. I was, I was
[00:51:08]  going to mention here. It doesn't matter. I am not a stranger to Svelte. Um, uh, and I, I just wanted to put that out
[00:51:18]  here. Just kind of that I've, I've used Svelte on and off for years as like for little sample things. I, um, I, I write
[00:51:29]  about Svelte. I write about Svelte. That's why it's specifically interesting that I haven't, um, to date done a stream specifically about S
[00:51:38] velte. Um, in fact, uh, I was just pulling this up here. Cause in 2021 on Dev2, which is only one of the publications, but I
[00:51:45]  wrote five of the top 10, uh, posts of the year on Svelte. I, I'm very interested in how it works. I'm very interested in
[00:51:52] , in the, in the kind of mentality behind it. Svelte was a big influence on Marco six. In fact, um, it's funny, it's kind
[00:51:59]  of full circle because a Marco influenced Svelte back in the day. And now, uh, you know, being a compiler, Marco was kind of a compiler,
[00:52:07]  um, way back even before Svelte was. And now full circles, Svelte's compilation for Svelte three, it was kind of served as the basis
[00:52:16]  for a Marco sixes compiler. That's how we figured out how to do lexical scopes, um, which ended up being the key to resumable hydration
[00:52:24] . Um, Svelte is very close. They're missing like a few pieces that I think could get them on the path mainly around composition. But essentially, and
[00:52:34]  compiler analysis, but essentially the basis of what they did, um, you know, at a coarse grain level, we kind of took solids fine grain idea and took their kind
[00:52:43]  of mentality around compilation. And that's where Marco six, the last stream goes into it in way more detail, but, um, a lot of respect for the work of
[00:52:50]  Svelte and a lot of I I've looked into it a lot over time. Um, so I am not, uh, unfamiliar with, uh, another example.
[00:52:59]  I was the one who updated Svelte two to Svelte three in the JS framework benchmark. I actually put in a couple other optimizations, um, that
[00:53:05]  made it even faster, but I couldn't get buy-in from the Svelte community. Cause it made the, it made the implementation look a little bit messier
[00:53:12] . And I think Svelte has this aesthetic value. That's very inherent to it. So it just wasn't very representative. I could do these couple of little things
[00:53:19]  and it would have upped the performance a tiny bit, but it just wasn't worth it. And over time in the framework, we actually do a benchmark. We
[00:53:25]  actually now mark, um, uh, frameworks that do those tricks anyways, like with numbers and stuff. So it's good. We didn't, and Svelte kept
[00:53:32]  its true form without kind of hacking the benchmark. And, um, yeah, so I'm familiar with benchmarking Svelte. I'm familiar with writing Svelte
[00:53:41] . Um, you know, this is, this gives me, this is why I feel more comfortable talking about this stuff on stream. Um, because, you know,
[00:53:47]  you could tell Rich was being very diplomatic. He was being like, you know, I'm aware of Saul, but I haven't looked into it too much. I don
[00:53:54] 't want to say anything that's, you know, not quite right. I don't, I don't, I don't care. Um, I, I've used
[00:54:00]  Svelte enough, um, that I feel that I, I have enough information to, to at least talk about it to a certain degree. Okay. So with that
[00:54:08] , I think we're on to part two. Um, so what are we going to do here? Should we just start talking about SvelteKit? Right.
[00:54:18]  For, uh, for, for people who've been living under a rock, um, SvelteKit, um, is, how do I get there best? Yeah
[00:54:28] . SvelteKit is basically a meta framework for Svelte built by Svelte. Um, and it's an SSR first framework. It uses adapters
[00:54:36]  as a way to deploy to any number of different, um, platforms. And it kind of just has everything you need to make modern apps. And SvelteKit
[00:54:48] , um, has been in development for quite some time. I was following his development in the Snowpack days. Um, and then when it, it, it, it
[00:54:57] 's funny, it was almost coincidental. I didn't expect SvelteKit to go this way, but Alex on the solid core team was like, Ryan, you
[00:55:04]  have to use view two. This is where everything's at. So I'm like, okay, let's try and start building on view two. Like a week later
[00:55:09] , which is like, we're moving to view two. And at that, or V2, not V2, V2. Um, and once he moved to V
[00:55:15] , I was just like, okay. And that's when I really dug into SvelteKit for the first time to kind of look at it. Cause solid at
[00:55:22]  the time only had one thing. I'd built a really nice data fetching nested router. I knew that was going to be the thing I'd been working on that
[00:55:28]  for, you know, I had prototypes of it for years. And I knew the key to the future was nested routing with data fetching. Um, right,
[00:55:35]  right from the start, I, my first version of it, that was back in 2014. You can find a web component version of it, but I built that router and
[00:55:43]  I was like, I need to build a meta framework. Where do I start? Well, I looked at SvelteKit as that inspiration because, you know, it
[00:55:48]  seemed to be doing everything right. And, um, in this sense, I haven't looked back at it as much recently cause, um, remix came out and remix
[00:55:59]  in a sense is closer to what I was doing. Cause they too landed on the same routing solution. Um, and it's funny how similar are the remix and solid is
[00:56:06] , even though they were developed completely independently. Um, so, um, in any case, I'm kind of enthusiastic to look back here at what's going on. So
[00:56:16]  we can build an app like this, but before we do that, I'm going to show you. the, what I want to port here. Um, let's
[00:56:23]  see here. Cause I've, I've made an app and it's a very simple app and I love using this app cause it's simple, but it has some of
[00:56:32]  the basic stuff. Uh, where is our app? Uh, VS code. Let's blow this up and get some more text on here so we can see it. I
[00:56:42]  built this app and it is a hacker news demo. Um, and I built this with Svelte app router. Um, I, I threw this together, um
[00:56:55] , just this week and it's interesting cause it's a hash router. So I had to do like a bunch of, a few little hoops to get it working the
[00:57:03]  way we want. But generally speaking, um, I have just, I didn't take me that long. I just took that same solid hacker news, remix hacker news
[00:57:13] , Marco hacker news demo, and just copied it across. You see this use link. This is Svelte app router. And yeah, yeah, yeah, exactly
[00:57:23] . We're, we're, we're, we're doing hacker news again. Um, what's it's very simple app. There's, you know, you've
[00:57:29]  got some routes, you have a nav bar, you have the router, and then essentially you have three pages. Um, yeah, you just missed my whole philosophical dive
[00:57:42]  into the differences with solid and Svelte and that whole thing. Now we're, now we're actually getting some real code. So we also talked about Tanner's
[00:57:50]  amazing stuff. Um, so yeah, it, this, this, this, this is, I'm using the same API that I used in all of them. This is
[00:58:01]  like weird combination of the Firebase API. And then from there, one thing I couldn't get working with this was parallelized fetching with this, with the, the router
[00:58:11] . There didn't seem to be any dynamic resolution other than the ability to, to wrap components. So I'm hoping that I can solve this in SvelteKit
[00:58:18] , but I, it's, it's basically waiting for the code, the separate co-split bundle before it fetches the data, which is a big, big
[00:58:26]  no, no in terms of waterfalls, but it's fine. I, I made sure that the, you know, all the markup and stuff is, is right
[00:58:33] . I use a weight tags and the templates, you know, some loading indicators. So let's just run this right now and we can see what we're dealing with.
[00:58:39]  Right. Um, we're close to 8080. Let me give you an idea of what we're building here. It should look familiar. Um, a slightly different
[00:58:48]  color. I, I hope that's felt orange, red or whatever it is, but essentially we've all, we've all seen this demo at this point. You
[00:58:55]  can change pages, you can change the category. You can go to here and you can shrink them and collapse them. This is the, this is the, why this page
[00:59:11]  can't be completely red, but essentially you can do that. And I think there's a user page that really sucks. Yeah, exactly. Okay. There's some
[00:59:19]  loading states. You know, using the away tag, nothing too fancy here, but this is, this is just kind of the baseline app that I want to port from.
[00:59:27]  This is just your classic D get template for Svelte. I want to support it to SvelteKit. I haven't actually tried this yet. So, you
[00:59:33]  know, we might hit stuff along the way. As I said, I, I reverse engineered it from a technical perspective and not for an authoring. This is my
[00:59:40]  first time actually writing an app in SvelteKit. So we're going to see, we're going to see how that goes. Okay. So let's, let
[00:59:49] 's get started. I got like a million IDs open here, but you know, what doesn't hurt to open one more. Right. Okay. Let's, let's
[00:59:59] , let's get that going. And actually, before we do that, let's just go here. And I guess it's not, not true. I do have
[01:00:12]  this kit example that I did back in the day, but let's, let's, let's, let's make, let's just follow the instructions and get this going
[01:00:21] . Let's go. Yeah. Well, not my app, but empty minutes felt at next. And yeah, this is probably not what you should leave to last minute.
[01:00:32]  I remember I, I, I, the react server component demo I did do ahead of time, but it was funny because if I hadn't, I would have hit
[01:00:40]  it on stream and like, it wouldn't have worked. I'm pretty sure this will work though. So let's, let's just go there. So let's
[01:00:45]  go, let's call this Svelte hacker news. What am I gonna call it? Kit? Sure. Yes. I want to install that. Svelte demo
[01:01:02]  app skeleton project. Let's do demo app. Use TypeScript. TypeScript. I didn't use TypeScript here. So I'm just going to say no.
[01:01:13]  No. Add ES link for code one thing. No. Prettier. Well, this is interesting. I didn't realize. Yeah. We'll have prettier. Playwright
[01:01:26] . No. Thank you. Okay. So. MPM install. Get in it. Get out. Okay. Yeah. Okay. Yeah. That's fine. So
[01:01:38]  we're going to open up our new window now and we're going to get started. Yeah. People know, I mean, TypeScript is fine. Examples. S
[01:01:56] velte kit. Svelte hacker news kit. All right. Let's do this. Okay. And we chose to do the, the, the demo version because I
[01:02:18] , I actually don't know any of the conventions and that'll just make our life easier. We can got everything later. Like for example, routes is the convention,
[01:02:28]  but they have a different scheme for naming stuff. Underscore is API routes. It looks like double underscore is layout component. I want to see what dynamic components are,
[01:02:41]  but we'll probably look that up in a minute. Let's just run the example, right? NPM. We'll install first. Yeah. I mean, I
[01:02:53] , I get some of the tooling often. I just, I just wasn't expecting like prettier as an often. Like I don't, I guess it's just the config
[01:03:05] . Um, but all right. So let's just run this npm run dev. And it's port 3000. Ooh, they've made this a little bit nicer
[01:03:22] . So let's try to literally copy their, their start page. Like I copied, um, unapologetically, but they've, they, they now have
[01:03:30]  a nice little graphic thing. And home about to do's. Oh, look, there's a little to do a demo in here. Beautiful. Counter. Counter.
[01:03:40]  It hydrates. Wonderful. Underscores, prior files, as I'm not, but I use while they're exported. Okay, cool. Okay. Yeah.
[01:03:55]  Maybe I'm going to double look at that again. Cool. So, uh, back to home. Typical counter demo. Okay. Yeah, this all nicely done
[01:04:11] . I like the gradient background and stuff. Let's, uh, look here for a second and see what that means. Yeah. Cause it's used by the twos
[01:04:21]  and point to me calls. Uh, gotcha. Yeah. So it's not the API actually doesn't live here. So this is like how you just co-
[01:04:40] locate your lib stuff. Yeah. Okay. That's, that's cool. I had it hoisted out, but you know, sure. Co-locate where
[01:04:48]  it's used makes sense. We have some ideas sort of like salt start. Okay. So that's fine. Some head. Yeah. So this to do's.
[01:05:00]  I wonder what use enhances. Formers. I, I, I, there's probably a lot of APIs because these are, these are, or lib form. Okay
[01:05:15] . Okay. Yeah. So they, they have some, okay. So this is nothing special. They just, they, they want it. I bet you they want to
[01:05:21]  show progressive enhanceable forms. It's all the rage these days. Right? Yeah. I mean, it's, it's easy to do, but remix has turned
[01:05:28]  it into a standard now that everyone kind of has got to pay attention to, but it's, it's fun. Um, yeah. Okay. Sure. Yeah. That
[01:05:38]  makes sense. And then what else do we have here? Okay. So. Prerender. Okay. So there you go. So. I, I suspect that this
[01:05:50]  is a behavior setting things. This is how you handle config. They have two script tags. two script tags they have normal svelte script tag and then they have
[01:06:00]  um special one and i guess this dollar sign is how they do prefixes like so essentially i wonder if any top level folder you can just put a dollar sign in front of
[01:06:09]  and then essentially just shortcut it it's easier we we do something similar to insult start okay web peep blah blah counter styles blah blah blah um hmm one thing that i
[01:06:24] 'm i am going to wonder about is i wonder okay maybe i'll just do it like this i i yeah okay yeah this is i do have global css so i i
[01:06:36]  do want to get that in here um so that's the pattern for that and then they have an index and then you see this yeah this is a very beat i i was
[01:06:46]  doing this with solid but then i was like wouldn't it be cool if we could just build the whole thing into the jsx like picture like the whole thing being the s
[01:06:52] velte file but then i had i had to hack like crazy around beat to make that work not not crazy but it was a bit of work where i think this this just
[01:06:59]  plays nicer with what they're doing hooks js what is this cookies i don't know what this is cookie parser alert huh interesting yeah so maybe this is some of the
[01:07:21]  special stuff that we're going to kind of come into i mean i get routes we're gonna have to look in the conventions here and i i get what's going on here
[01:07:31]  i think that's cool i think though maybe it's time to move on to hacker news any questions so far sorry i'm just looking in here maybe maybe um you all
[01:07:40]  have some thoughts yeah yeah exactly it's the alias for the source yeah i i love veed and the plugin system and it's just great i've been i've
[01:07:55]  been having so much fun building stuff with it i mean it's also kind of like the biggest pile of hacks on hacks when you get underneath and you realize what's going
[01:08:06]  on like when stuff doesn't work you're just like what it's it it how is it working it actually does that but from the outside perspective it's just like the nicest
[01:08:17]  thing ever and i think there is some work going on that was that that was the whole point they wanted to kind of like make it to be what people wanted to use and
[01:08:25]  then kind of they're in this process now i kind of call this like the second stage where they're kind of going back and like cleaning it up under the hood they
[01:08:32]  kind of went really fast and out there to make it like make it kind of like have the right api surface the right way and like it's so good from the outside
[01:08:42]  perspective that it's just going to get there there's amazing team working on it and yeah hooks is a middleware yeah i'm just not clear how it knows to be a
[01:08:53]  middleware i mean that's what it does look like right here's your event and then resolve obviously is finishing it it just i don't i don't know if it's
[01:09:04]  a special name thing or because it caused a cost handle in it or it's it's always fun playing this named export game yeah cool all right so no man he's a
[01:09:16]  he's a wizard man a mad wizard uh when it comes to putting together stuff on the developer experience side but like huge props on that um yeah no veed is amazing
[01:09:31]  um let's let's yeah so if it's just some hooks that i don't care about i'm kind of tempted how to best strategically gut it if i go like this
[01:09:42]  okay so static is static stuff so i don't won't need this no one the biggest problems i don't want to gut too much right but i do want to gut
[01:09:53]  a lot so lib is the pattern that they're using for putting their components in it and like any random thing okay i can live with that so let's just let's just
[01:10:02]  start from i don't think i need this hook this is not doing anything relevant here it's it's yeah okay for our purposes we don't need this hooks okay i
[01:10:14]  don't yeah i'm gonna assume it's just file included um yeah i could have gone with the skeleton you're right but this also teaches us that's one of the things
[01:10:24]  teach by example right um i i said no to typescript why are you here here it's fine it's fine it's fine uh okay so i'm gonna leave this
[01:10:36]  and this is clearly just pretty much let's change it to svelte hacker news okay done okay okay okay and then let's port some stuff across um we have this
[01:10:56]  okay so let's make this a little bit bigger we need what do we need our first point is we need let's grab the css global css and that's
[01:11:16]  now global css beautiful okay and then hmail is fine and then we're going to empty the lib folder just delete it and my gut here is we can just pull kind
[01:11:33]  of we can just pull whatever we want from the lib full from from here over to here just drop in our components and then let's drop our api in too okay because
[01:11:48]  i i think i think these pieces are just going to stay the same um oh except for the routing because of the stupid link thing i think i think running is going to be
[01:12:01]  a lot nicer i didn't look at the routing before but the layout component should tell me everything i need right yes looks like let's see where is it we see about
[01:12:15]  where's the nav oh i delete the nav my luck um of course that's fine i got ahead of myself it's fine let's look that's what docs are for right
[01:12:27]  um uh we've actually i i i already have this open i have to already have this open let's go to docs no actually screw this let's just start by by
[01:12:45]  um by filling out our layout component and then kind of going from there because i'm gathering we're going to have one main layout component that not where they have the header
[01:12:59]  but where we're going to basically connect our nav into so import is this and import nav from live okay and did i get that wrong okay that's fine and then essentially from
[01:13:21]  our other example which is here we're just going to okay forget about the routing we're just gonna do this and how does this okay slot beautiful so this component's gonna
[01:13:39]  be really easy it's gonna be nav and it's gonna be slot um and then so this is the thing with these kind of demos which also makes them kind of nice
[01:13:52]  script interesting it's completely i don't know being able to find an adapter i didn't want to think about adapters so far but let's it was working so i
[01:14:12] 'm gonna assume that's fine okay and then just so that the nav doesn't ruin our day we're gonna get rid of this garbage and then all these use links i
[01:14:24]  believe just go out the window i'm hoping it's just like this okay now okay let's let's pretend that a warning doesn't exist and we're just gonna run
[01:14:49]  dev and hope that we see the hacker needs to title bar um beautiful okay yeah no that's that's good wow i went through that drink fast okay okay so yeah
[01:15:12]  obviously the layout doesn't work because i gutted it and yeah i mean it's fine we can delete about we can delete to do's we aren't doing anything fancy here
[01:15:27]  too trash okay and that's fine okay so okay all good and then let's let's just do a quick uh look on on routing here because the the one thing that
[01:15:46]  hack news has it's unique and i hit problems with this with remix is you base basically you want a wild card at the root because slash and the title stuff both lead to
[01:15:58]  it so essentially you want to like it's not you don't just want a slug you want like a wild card route like uh not found route um in next js
[01:16:08]  it's dot dot dot that right that's what i'm looking for um and this is it i'm just saying that i've never used next js i've never even looked
[01:16:18]  at next js but um just hoping that i can see support for wild card routes like star routes um remix for some reason didn't do it easily either so i'm hoping
[01:16:38]  otherwise i mean there's a really really easy work around we just copy the file twice but this is this is this is the first thing that we should figure out i'm going
[01:16:48]  to blow this up a bit um yeah okay so this is all yeah it's it's basically i don't i just want pages which are now called routes but it's
[01:17:10]  this is all i get in terms of docs so far which yeah okay okay yeah i i i i'm thinking if they supported that i would see some note here um i
[01:17:29]  mean we can try it let's let's just let's we don't have the counter i'm not going to worry about pre-rendering we'll come back to that
[01:17:40]  um or head let's just put something like this in give it a style tag don't need it and essentially index works right we've let's see if index works okay
[01:17:59]  yeah styles are broken but it works okay and then uh what's going on where it's like there's a okay i'm gonna restart it it's like it like thinks
[01:18:15]  the the old routes are there and it didn't we can update let's yeah yay okay yeah exactly okay that's not felt fault i've seen this behavior in beat beat is
[01:18:27]  not great with adding and removing routes um dynamically one of those things um okay so this works um so the question is does this work or is it gonna a better question does
[01:18:51]  actually you know what i don't trust this now this is the problem take away my what i don't trust okay that works does this work no beautiful okay so it does
[01:19:06]  look even though they haven't documented it it looks like they do the same convention which is beautiful because then in theory um um they're already doing what i did already so
[01:19:25]  if we copy this and paste that sucker right here um obviously we got to do a little bit of reworking because there is no spelt spa router and this has moved
[01:19:40]  moved moved to a more convenient dollar sign lib as has this but beyond that oh right i need to figure out how we get we do data fetching and stuff but that's
[01:19:58]  fine let's the the one thing at a time um or i'm okay with this doing it this way but we need to figure out how to get the location or the
[01:20:07]  prams or the query string from the router because i suspect yeah this is thank you yeah it's good it lets you add but it doesn't let you delete that's that
[01:20:19] 's that's that's where the error is okay so let's let's figure out how we um get route data in so how do you use the slug it's like
[01:20:29]  it's gonna be an export lead isn't it that would be smart if i was writing svelte that's what i would do i would expose it through like a
[01:20:37]  prop somehow or something i don't want endpoints i just want to in the svelte file how do i get the data is there like oh yeah so they do
[01:21:00]  have rest parameters right here why am i not this should be something this is probably my fault for deleting the example too soon but there should be a way to i guess i
[01:21:19]  didn't show okay export let item what why is it called item because okay okay this is their approach to parallelize data fetching i see okay okay okay okay yeah
[01:22:00]  essentially they they if you name a file with the same name as the route then essentially they will automatically do the data fetching and then i don't know why it's
[01:22:22]  called item though that's but i don't necessarily need a data loader okay but i'm gathering they're not saying it directly but they're saying this is like the
[01:22:51]  remix loader thing but i don't actually need it to be only on the server i think they used to actually this has changed a little bit i think they actually used
[01:23:03]  to have like a like a us like a a script tag approach to this so i think things have changed a little bit right because okay okay yes i see it's whatever this
[01:23:27]  is named okay and i'm gathering the parallelizes for us so this is the way to do it then let's do it seemed reasonable to me yeah so let's do
[01:23:40]  this so essentially we'll have a new file called stories dot yes right and and it's going to do some stuff like this we don't have a database it's fine
[01:24:09]  and it gets params right from there we're going to see what it passes us in a minute but let's assume that this whole thing that i'm doing here doesn
[01:24:24] 't belong here essentially this whole fetching data fetching it does just doesn't belong here i know it's another api and we could probably just do a client side but
[01:24:33]  um we're we're playing the remix game right so uh let's just do that and we'll i'm gathering this is going to get rid of the need for these
[01:24:46]  awaits and stuff so we're we're gonna we're gonna see how this works following the pattern so fetch it all right we can pull this out this is all right so
[01:24:59]  and this is a constant we can pull this out too and we don't need these to be reactive because this function is going to be called every time so we're returning an
[01:25:14]  object that represents this response and this is where we pull our data so eventually what we want to do is i'm going to get rid of all of these for a second
[01:25:30]  um we're actually gonna it's funny it's fine it's it's fine i mean we we're gonna i'm just gonna do it here it's it's it
[01:25:46] 's it's a little bit funny to do it this way but essentially we need all this information anyways so even though technically speaking um you know it might not be necessary yeah i
[01:26:03] 'm not going to worry about this weirdness right now i'm just going to await this const stories and we'll just we'll just send this back like this stories and
[01:26:25]  now we just need to we need to get this stuff and um technically this is going to be params probably params are top and this is going to be yeah we
[01:26:45] 're going to we're going to we're going to find out what's we're just going to we're going to comment this out for a second and just make it page
[01:26:51]  one and we're just we're going to find out what spelt gives us here but if all is right in the world what should happen is we should we should essentially
[01:27:05]  in here have an export let and we should have stories export let page export let type and i probably crashed the server at some point yeah or turn it off let's do
[01:27:39]  this oh it's because story still has this garbage in it um garbage let's get rid of this i knew when i was working on the the app router i'd be
[01:28:04]  removing garbage all right i wonder if that like json stringify the response myself or something um well let's see what we're getting well let's look at the server
[01:28:19]  area is it any more descriptive okay let's restart the server let's see if we get anywhere here first let's just go console dot log yeah we do get here
[01:28:57]  okay sweet that's that's good so um let's let's let's let's take a look at arguments too while we're here why not well i just have arguments
[01:29:14]  beautiful so we have a request object nice url nice which looks like an actual url object and we have um prams which is nice oh and it's smart enough to
[01:29:29]  to to result yeah i like that sometimes they like they aren't nice like that so we can use prams and then all we have to do is essentially take the ur
[01:29:37] l search params off the url objects we just go prams url and then it should be yeah i mean actually this is very much like remix i'm just going
[01:29:56]  to do something really quick here um just use your file new window file open recent remix hacker news this is actually almost identical so we should be able to just take this
[01:30:18]  to get the page just because i'm lazy yeah sweet so that still that doesn't explain why we're why we're crashing though um so let's just make sure the
[01:30:44]  what we have is what we expect stories page type and we can get rid of this okay yeah so i broke something before this because this is yeah what am i i'm doing
[01:31:05]  something just wrong here which is fine oh of course yeah i'm just like global fetch right but i you're you're you're you're you're absolutely right they they
[01:31:25]  have a special fetch don't they i was thinking like they just like this is do node fetch for me but it's this this is my problem isn't it okay so
[01:31:37]  how how and since this is this is always going to be on the server anyway so i mean i can literally just get rid of this well i'm going to leave it in
[01:31:46]  case we do some fun stuff later um yeah what's what's what's their deal with data fetching do they actually what's the fetch they okay so i'm
[01:31:56]  going to leave it in case we can we search for fetch okay so i'm going to leave it in case we can we search for fetch okay so i'm going to leave
[01:32:08]  it in case we can we search for fetch okay so i'm going to leave it in case we can we search for fetch okay so i'm going to leave it in case
[01:32:15]  we can we search for fetch okay okay is it just like import fetch from oh it's part of the yeah yeah yeah yeah yeah i think i see what's going
[01:32:45]  on it okay so i actually have to i'm gonna have to do this which which is fine um i think right because i'm gonna have to essentially in here be like
[01:33:00]  pass fetch to it because i get fetch from fetch here um fetch is not a function okay i thought that's i thought i was understanding this correctly because it's like where's
[01:33:19]  fetch coming from the load function receives the object containing euro params props fetch okay is there a difference between the load function and the get function that was a load function oh
[01:33:42]  interesting see this this is not what i'm doing right now this is in the context module in the file this is what we actually want for this particular demo fetching the
[01:34:01]  client tends to be faster than fetching on the server um okay but okay that was confusing but that's i think this is what we're actually looking for yeah sorry i
[01:34:25]  was ignoring chat for a little bit yeah okay sorry guys i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm sorry i'm
[01:34:53]  sorry i'm sorry i'm sorry yeah thank you thank you yeah it's funny because it's at the beginning they have this whole thing about pages and stuff but it's actually
[01:35:00]  down here yeah this is this is what i'm looking for this it's funny because remix has these things that i think are like what we're doing right now but um
[01:35:17]  it also solid's version works more like this which which felt kit is doing here with this load so it's it's kind of interesting that there's both um yeah yeah like
[01:35:31]  i get i get i get this it's just it's weird that there's like they kind of occupy the same space it's just when it runs um but yeah let's
[01:35:43]  let's let's let's switch it over to this one okay so thank i think i think i think i think we're it's funny we're closer to it before
[01:35:52]  okay so now we want script and we want type equals context module and then the other changes we make actually don't make sense we just want all of this and it
[01:36:28] 's and it's defined in a export async function load export async function load okay i need to copy the whole thing we'll get back to it all right and then
[01:36:51]  we want params and what do we want the other one fetch the url okay and we need this as well url format document prettier oh svelte oh
[01:37:29]  i don't know okay that's fine um let's get rid of this because it's probably aliasing it in a really bad way let's stop this because it's
[01:37:39]  probably okay and status response status props it calls them props okay it's interesting that it has like different naming conventions all right we still getting the same token there uh yeah
[01:38:56]  they provide their own yeah because they do the sterilization it's kind of like resource it's in solid they need us they need to do something special to intercept it to
[01:39:06]  automatically handle the serialization solid it's just a primitive you just go like and then you can use any promise with it for them they've decided to single out the fetch parameters
[01:39:15]  but this yeah so like yeah let's just let's see i'm probably doing something wrong in the fetch side and they're not happy with me um like did some types
[01:39:30] cript fit in here let's let's let's get here console dot log yeah okay and we have fetch right it's not it's a real thing it is an as
[01:39:46] ync function good okay so then this is interesting because it's complaining about link not to find it i got rid of that crap okay all right just minor annoyance okay let
[01:40:20] 's get less errors on my screen so the api fetch is just failing yeah i don't get what the it's the whole editor is not happy with this script
[01:40:50]  tag but it's been since the beginning for some reason like since since i started the project it's been unhappy with with this and there is an adapter auto presumably let's s
[01:41:01] velte.js that's right at svelte.js adapter auto like it's here so i don't i the editor complaining is i think it's just a
[01:41:14]  red herring i think i i think i think it's there a reload window maybe i'll just let me just save any open files and reopen this whole editor again so
[01:41:46]  all right so all right sure we'll do that later okay so okay at least some red stuff has gone away okay yeah i mean yeah i can yeah i wonder how we
[01:42:31]  show the loading states now i'm not i'm not gonna worry about that for the second i don't i don't need to worry about this i'm just gonna get rid
[01:42:38]  of the await tag here yeah let's put here this okay so there we go extensions have been modified just please reload the window okay and now we're happy okay so anyways
[01:43:01]  npm run dev find you that that was just the the the editor i don't think that explains our unexpected json that's happening here um it's funny i had
[01:43:17]  i forget what i was doing and i had a similar problem with fetch it just the only thing is this time we're using the built-in stuff so it's like
[01:43:29]  why don't you don't you like maybe the header format um although i mean that's seems like a stretch uh yeah i mean i use it for all the demos we
[01:43:58]  were we were just looking at it a second ago uh hacker news yeah yeah yeah okay okay i mean it looks like just literally that it's failing to parse the json
[01:44:29]  here from the response which is interesting we saw this working on localhost from the other demo like a minute ago so that is tricky and we need definitely to run this on
[01:44:47]  the server i wonder okay let's i mean this server yeah is this like a compiler trick and like we're messing with their compiler trick do you think that you think maybe
[01:45:14]  that's what it is yeah let's let's let's let's let's do that um yeah we just need to yeah let's change this to here get rid of
[01:45:29]  this and then we have to do a little bit more mapping um we missed the rest of the url this is the story url so it looks like yeah let's
[01:45:42]  do that so that'll fetch that and yeah let's do that point one page so that'll fetch that and then it's um p.json, what's that
[01:46:04] ? Unless we need to set those headers, which I don't think. Let's see. Yeah. This thing sometimes rejects if you don't pretend you're Chrome
[01:46:36]  on the server. It just doesn't send the data. But just making sure I'm not missing anything else here because it looks like this. Then you put the path in
[01:46:45] , which is we put the path in. And then like that. And it's the same thing. I mean, let's just sanity check. Like maybe, you know
[01:47:03]  what, there's probably like a simpler solution. It's probably like this isn't getting like formed properly or something. Like there's like this, like our inputs mism
[01:47:13] atched and like we're just not creating the right request. And I mean, this is the most obvious thing. And then the first thing we should have tried. So
[01:47:21]  let's just do that for a second. Make sure that the URL is right. Yeah, undefined. Yeah, undefined. Beautiful. Yeah, we
[01:47:28]  found a problem. Yeah. So why is it undefined? Because it should be top and then it should be. Oh, right. Okay. Yeah, this
[01:47:50]  is. I apologize. This is because the other router. It maps it to params directly and doesn't use name params. I've never seen that yet.
[01:48:04]  Sorry about that. Here we go. Okay. Okay. So actually what I'm going to do is I'm pretty sure this all works. So I'm going to go
[01:48:25]  back to here. Make this params.stories. And then change the API. Make sure the API is still there. Beautiful. Okay. Looks good. I
[01:48:49]  don't want to see my console logs. I'm not. Oh, yeah, there it is. Yeah. Okay. Yeah. So that was just. Svelte
[01:48:58]  app router is weird. And it's it doesn't follow conventions and it was kind of unpleasant to use. This on the other hand is actually quite nice. So yeah
[01:49:08] , this was just a small little mishap. Okay. So we now have our loading page. Yay. Okay. And it navigates. And we go to the
[01:49:19]  new page. Done, done, done. Okay. Okay. Sweet. Okay. Let this should only take a minute to finish the rest of the function. I want
[01:49:33]  to actually play with a couple of things here. The server loading thing might actually be interesting to look at. But I also want to look at static routes and what that looks
[01:49:42]  like. I think that's kind of interesting. But before we do that, actually, I don't know why I stopped it. Let's just finish the rest of the
[01:49:48]  app. Because the rest of the app is going to be relatively simple by comparison. Once we know what the pattern is, this is the most complicated of the bunch.
[01:49:58]  And yeah, it just wires in beautifully, right? You just go, here is my props. Here is this. Yeah. And this is a nice pattern. And then
[01:50:08] , oh yeah, we didn't, we didn't, we didn't care. We are missing one thing. Loading state. How do we get loading state?
[01:50:21]  Props. Okay. I want to. There's got to be like, there's got to be like some kind of placeholder thing. Like while it's loading
[01:50:43] . Sorry. Is this a suggestion for an area of the docs I need to look at? Navigating. Packaging. Okay. Yeah, but it, it
[01:51:28] , it, it, my, if it works the way I understand, and then we let's, let's actually look at the network and actually confirm this. What
[01:51:36]  it'll do is, and this is actually for you. People use yourselves sold start. This is actually how our route data works is what it will do. If we can
[01:51:45]  look at just the XHR. When you load the page, you're not going to see anything because it loads it on the server and feeds the data in. But
[01:51:52]  when I go to the next page, now it's going to make a client side request. That's a, the code is isomorphic. It works on both
[01:51:57]  sides. So you could still want a loading state between this navigation, like some kind of pending indicator that, hey, this data for the next page is loading. Right
[01:52:08] ? So, so yeah, I, I don't know. I'm not, if I, if I don't find it right now, I'm not going to stress
[01:52:19]  on it. Okay. Yeah. So that's, that is a hint is navigating. Let's try that. It's a readable store. Okay. Yeah. So
[01:52:51]  it's like, it's like the global is pending thing. So essentially. Gotcha. So if I'm not here, here. Navigating. Spore.
[01:53:15]  So I should be using it with a dollar sign preceding it. So if I'm right. Should actually be, I think it's in here. It's like
[01:53:27] . If. Navigating. And then. To do all of this. And then. Else. And let's grab this one. Right out of here. And
[01:54:12] . Forever loading. Okay. I'm not using this right. Navigating. Navigating. It's always true. What am I doing wrong? Do I
[01:54:41]  not need to use it like that inside the template? Okay. I don't need to use it that way inside the template. Okay. Interesting. Usually with Svel
[01:54:56] te stores, you put the dollar sign on them. But I guess maybe it's where you use that. I have to submit. I've only really used them mostly like
[01:55:06]  top level to feed into local state. And I haven't used them directly in tablets before. So. Okay. Beautiful. So when we load. All right. Not streaming
[01:55:13]  rendering. Sorry. But when we navigate. To a new page that we haven't seen before. Maybe we can see it. You know what? It probably happens so
[01:55:21]  fast. We can't even see the loading state. Oh. Maybe it was all for nothing. Or maybe that just didn't work at all. And it's never navigating
[01:55:30] . Not a big enough deal. I'm just going to pretend this is the right pattern. And we'll kind of go from there. I'm going to assume that it
[01:55:38] 's working. So let's just put in the next bit of functionality from our app. Which is porting these two over. Oh. Yeah. Sorry. We
[01:56:09] 're back to here again. Now do we want the dollar sign? Yeah. That makes sense. Okay. There we go. I had it backwards in the logic. See
[01:56:31] ? There we go. I'm not saying this is a great experience here. This is a terrible UI. Like you'd have better loading states and timers. But
[01:56:39]  it's illustrative. Which is the point? See? Refresh. You don't see it because it's async rendered, not streamed. But as you move
[01:56:47] , you can see the loading state. Okay. Good enough for me. Okay. Thank you. Thank you, Adrian. This is just silliness on my part. I
[01:56:55]  obviously know the syntax and stuff, but it's easy to get hung up on the details. If you haven't done much Svelte recently. Okay. So sweet
[01:57:03] . Yeah. So then let's continue here. So users. Yeah. What's nice about this little thing here is you can see how I already had the script line in
[01:57:14] . This is one of the cool things, right? The reason I like the data approach over the loader approach sometimes is when you have these apps that you built using
[01:57:27]  CSR and you just want to move them to SvelteKit, you just go like this. You can almost take your script tag that does the data fetching
[01:57:35] . You might have to break it in half. But you can almost take your script tag that does the data fetching and kind of just port it over, essentially. Because
[01:57:47]  we should be able to just copy the same pattern here, right? export this. And then. That. This. Need. Well, for this one. And then
[01:58:09]  it should be as simple as what? Const await. What are we calling this? This is a user. User equals that. And then. It should be. Very
[01:58:21]  similar logic like this. And then if user return. User. Let's give it a 404. And then. Add a script tag. That. Port. Let.
[01:58:50]  User. And then. Instead of this await. It becomes. If. Navigate. If. Navigating. You automatically imported. Else. Don't need
[01:59:14]  this user here. And then. This becomes. A slash. And if we just. Did our. Our work. Properly here. We should have the user page.
[01:59:28]  Like that. Yeah. Easy. That's. Yeah. Okay. Sweet. Let's do the last page. It'll only. Take a second here. But. Yeah
[01:59:38] . Very. Very straightforward. At this point. Of what. How this works. Ah. Man. They must be so happy. To have a good router now.
[01:59:49]  Really interesting choice. To make. catch routing. Your default approach. Let's do this. For nicety. Oh. It's easier. To just. Copy.
[02:00:07]  This. Boiler plate. Actually. Rather than port it. It's like. Exactly. The same thing. Fetch. API. Don't need it here.
[02:00:21]  Manage a big user. We're getting a. Item. Item. Do I call it item? No. I call it story. Let's change this to story.
[02:00:36]  Story. Story. And then. This. Let's port let. Story. And then. if. Okay. I just made. One small. Mistake here.
[02:01:18]  I have too many script tags. that's funny. Still. Is this formatted? Can't even tell. Okay. Whatever. Looks good. Bad path.
[02:01:46]  Bad path. On here. Because. I didn't update it. To our new dollar sign. Lib. Let me guess. Comment. Has that stupid. Writer.
[02:02:00]  Yes. Sorry. The router. Wasn't that stupid. It's just. I knew that. This was going to be where. I had to do the most fun
[02:02:10]  stuff. Oops. Sorry. That's solid JS. I missed. I missed. Porting that properly. From solid. It's pretty clear. Class list. Yeah.
[02:02:29]  So. What is it? Class. Maybe like. If open, how do we know what this is doing? Let's just not do this. Yeah, this
[02:02:59]  is probably bad accessibility, but I didn't make this demo. This is actually, you can blame Vue. This is an old Vue demo that I've been using
[02:03:18]  over and over again. Beautiful and then, okay, cool. So now we have -- oh, yeah, of course, yeah, yeah, yeah, yeah, yeah
[02:03:34] , yeah, yeah, yes, yes. Have this for hand and sold it as well. Advertise it. That's what classless compiles to under the
[02:03:50]  hood into a namespace class thing. Most people don't know about that. Okay. Beautiful. Okay. So I think we have a working Hacker News demo. So
[02:04:04]  the next thing I want to do -- there's a couple of ways we take this, but what I wanted to look at next, there's two places. We can look
[02:04:13]  at some of the features and see what else we can do here. I also kind of want to look at deployment, too. I think I want to do deployment first
[02:04:19]  and then, you know, as we go, see what we, like, leave the advanced features to last. I want to play the adapters here because that's one
[02:04:25]  of the coolest things about -- so, okay. So let's see what the docs say about adapters, but let's get this demo up on Cloudflare.
[02:04:34]  You know, that's what I like doing, so let's do that. I know they have a worker's adapter because I copied it. Okay, I didn
[02:04:51] 't mean to be that. Okay. Actually, maybe I will go here. They probably have the instructions right here. I'm going to use workers for now because
[02:05:24]  it's probably -- it's probably -- it's more -- oh, I guess I can use either or -- it will make it the same as my other demos so that we
[02:05:34]  use workers. Although, technically, it's a pages app with a worker's integration, so I guess it's, like, kind of the same thing. Okay.
[02:05:44]  Let's do it. Subconfig -- yeah, I doubt I'm going to need this whole thing like that. I don't need this one here. Replace
[02:06:07]  this one with this one, and then adapter adapter. I don't think we need this. Okay. I don't need travel objects. Do I -- they -- they
[02:06:41]  don't mention the Wrangular -- Wrangular toml. I can just copy one over, but they don't mention it. Okay. Let's -- let's
[02:06:55]  see how magic this is, but I feel like I'm missing something. Okay, mpm run build. Okay, complained about something, but I'm gathering it's
[02:07:06]  just the thing that I complained about before. Yeah. This anchor tag not having an href. Okay. So, nice. Very nice. Okay, cool. So
[02:07:24] , I'm going to go to mpm run preview. Let's use Wrangular in the background. Sorry, it's the same API error we were having before,
[02:07:41]  which is why I thought it was funny. Like the JSON thing. But I don't know what it's previewing it on. What is it so? And it
[02:07:52] 's a sanity check that we didn't break the universe again. Okay, everything's fine. Okay, so, is preview doing -- let's look at -- I guess
[02:08:06]  I won't know. Because it's going to -- preview is going to call whatever preview SvelteKit preview does. And the SvelteKit preview is going to
[02:08:14]  feed it out to the -- it's going to feed it into the adapter. I've looked at this code before in the past. Some conversation in the chat. What
[02:08:28]  we got here, cloud pages is nice. Yes. You're welcome. Use workers on the hood. Yeah. I used to use Vercels. Is there any improvement
[02:08:39]  of this? I've noticed that Vercel is, like, has slight latency over the underlying workers implementation. It's not a big deal. But my same pages deploy
[02:08:47]  the Cloudflare edge are slightly faster than the Vercel edge. I don't know exactly why. But it's, like, it's minuscule,
[02:08:54]  but I noticed it. But, yeah, Vercel's edge is actually literally using Cloudflare workers under the hood. They also have functions which aren't using edge
[02:09:04] . But, like, the whole new middleware stuff and the deploy that I do with solid is -- on Vercel is literally Cloudflare. Okay, so,
[02:09:12]  yeah. I mean, I can look at what it's doing. Okay, let's pretend this works. What's -- what's our instructions for deploying it? Okay
[02:09:35] , yeah. I've never used pages, but if I go Wrangler dev, it's going to tell me that I don't have a Wrangler file
[02:09:51] , right? So, Vercel does use AWS Lambda for everything except for their, like, new edge functions. So, most people haven't used the new edge
[02:10:07]  functions. They announced them, and they announced a Next.js demo at the same time. And I just assumed that they were, like, oh, server components on the
[02:10:16]  edge doing streaming. But, no, the Next.js is over here, like, most of it. And they can do some middleware on the edge, as
[02:10:23]  they did in a demo, like, doing some, like, routing stuff. And then, like, the main next apps are getting deployed to serverless functions or whatever other
[02:10:31]  infrastructure they have. So, I think Solid was the first to do streaming full app from the edge on Vercel. Let's all start. But -- okay.
[02:10:43]  So -- okay. I'm just going to steal my Wrangler Tommel from one of my other apps, because it's just going to be, like, almost
[02:10:51]  the same thing. Just do this. And this doesn't -- if this doesn't work, we'll just use the other adapter. I don't know anything about pages
[02:11:06] , unfortunately. But the weirdest thing is, like, I don't know if any of these settings are right. Do you know what I mean? Like, because --
[02:11:24]  like, they don't tell you to configure a Wrangler Tommel, but then they say use Wrangler to test it locally. But when you try and
[02:11:33]  use Wrangler to test it locally, it complains. So, it's like -- okay, please -- you know what? They gave me the instructions. I'm
[02:11:46]  just not following the instructions. So, this is probably what they want with pages. It just, like, makes life a little bit easier. Right? Exactly. I
[02:12:08]  don't need the Wrangler file if I use pages, which I'm used to using workers directly. But the thing is, I'm still missing something here. Because
[02:12:17]  if I try and use Wrangler locally without the Tommel file, it errors at me. So, like, there's something I have to do. Right
[02:12:25] ? Because I do have adapter Cloudflare installed. Right? Where is it? Yeah. I didn't grab the workers one. And they did say, oh, to
[02:12:37]  test it, just use Wrangler. So, I'm, like, missing something local here. Let's see. Build output. Build output. Given that all
[02:12:54]  these are around adapter Cloudflare. Because I don't -- is adapter work -- just because my familiarity with workers makes me -- is tempting for me to go this way.
[02:13:14]  Yeah, see, if I go this way, it's just going to work for me. Yeah, I'm very, very tempted. Yeah, I'm going workers
[02:13:20]  just because I've done workers like a billion times. So, let's just do workers. And then I can just grab my Tommel file and I know how everything
[02:13:29]  works. I know workers is, like, considered a less nice kind of interface and stuff. But I'm pretty used to it at this point. Workers, workers
[02:14:01] , workers, basic config, bucket. Okay, now we just need to know where the config is here. This is the important part. See where that is. Okay
[02:14:27] , it's not in build. It's top level. But where's -- so they don't use -- okay. It's a different version of the site config, but
[02:14:36]  it's the same idea. Beautiful. Angular dev. Interesting. I wonder if this is, like, a newer version. It's funny. Huh. I cannot
[02:15:10]  download cargo generate. Failed to download from -- that's interesting. I've never had that happen. What -- what -- we said we had to install an ad next
[02:15:54]  of what, specifically. I mean, we can go back to the other one. It's just -- the worker setup is basically just use the toml file, and
[02:16:10]  you're good to go. But I wonder -- I wonder why this is -- the problem is this stuff's been getting updated pretty rapidly as well. Because -- I can
[02:16:30]  tell already that the -- like, the format here is slightly different, right? Because it's a build worker site. You can see, like, this format is different
[02:16:47]  than this format. I wonder if what's happened here is, like, older versions. Yeah, yeah. I mean, all the adapters have to be on next.
[02:17:02]  That's just how they do everything. It's more of -- I actually think maybe the worker -- like, maybe there's a mismatch. Maybe I'm on an
[02:17:13]  old version of a Wrangler. Like, I don't -- I have Wrangler 1.1.15, right? I mean, backfire, I
[02:17:39]  mean, completely. You can, like, update the latest, and then now nothing else works except for this. But let's do that. Yeah, I have 1.
[02:17:51] 15 installed. I don't know if that's the latest. I guess we're going to find out. The 1.15. Sorry, I hit the same command
[02:18:05]  again. I didn't mean to. That's weird. Okay. Let's try -- Let's try it a different way. I was hoping workers would just work because
[02:18:30] , literally, I just have it here. Now we get to go through the non-CLI way. Let's go back to doing the recommended approach of doing this.
[02:18:44]  Let's do pages. Okay. And let's follow the next instructions to do pages. Okay. I'm going to have to, I have to actually initialize
[02:19:17]  this. I see. So it's like, it's like that. That's the missing piece. Okay. So let's get this repo up. Probably people
[02:19:53]  in -- what do we want to call this? Svelte Hacker News. Svelte Kit Hacker News. I'm like so lazy. Oh, is
[02:20:24]  there -- is there -- there's -- yeah, yeah. It's got me to get ignored here. Thank God. Okay. Literally not even going to write my own
[02:20:34]  commit messages. Oh. My bad. Okay. Okay. Okay. Cool. Now we have a repo. Now what are we going to do? Count home, go
[02:21:18]  pages, create a project. Okay. Create a project. Connect to GitHub. Right. I feel like maybe I should do some of this stuff off screen. So when
[02:21:42]  I show you guys, I don't remember my password. Okay. We're in. Svelte Hacker News. Begin set up. I need to get solid
[02:22:08]  on this list. Is Remix on here yet? No. Hold on a minute. Okay. Okay. I got some work to do. Okay. Is there anything
[02:22:28]  special on the config side? I'm gathering most of the defaults will be good. Yeah. They don't say anything. Okay. Okay. Let's get them
[02:22:56] . They don't. These guys don't. Oh, weird. Oh, weird. Framework preset and none. That's interesting. I wonder if that's out
[02:23:16]  of date. This looks right. I feel like some stuff has moved since then. Environment variables. Let's do node 16. Node version. Okay. Node version.
[02:23:47]  Anything else? I don't know what they're talking about. But let's just continue from here. This looks good. Yeah, that's true. When Luke
[02:24:22]  Edwards works on your team, it's kind of cool, right? Because he works at Cloudflare and he's one of the main contributors to Solkit. Yeah,
[02:24:31]  we're all good. Yeah, I've been people who have asked me that it's pages to Solkit only have a worker so far, but it seems like it
[02:24:59]  won't be too far of a stretch. It's cool because it uses this kind of functions thing. And it's very similar to what we're doing with a new file
[02:25:05]  system. Maybe I imagine. Okay, continue to project. Pages dev. Nice. Nice. Nice. Okay, okay. This is the fun part. Sorry,
[02:25:25]  I'm not sure. This is Svelte right here. This is Svelte right here. But yeah, let's just see some stuff to understand what we
[02:25:41] 're dealing with. I just, what do we got? GS. Interesting. So this is bigger than I expected. Is it loading? Do you have to do something
[02:25:55]  to tell SvelteKit to lazy load the other routes? No, it is lazy loading the other routes. Okay. So that's not it. Okay. So
[02:26:04]  this is just the payload size. I wonder why this is bigger than I was expecting. Huh. I mean. Okay. Well, okay. 19.7 kilobytes
[02:26:18] . I mean, okay. That's not bad. I mean, it's just -- I've been competing with this HN Svelte dev hacker news, which
[02:26:32]  is not equivalent to my hacker news demo, but I've been like -- I've been like -- oh, it's 19.52. What? Okay. 14.1
[02:26:47] . When did Soli get five kilobytes smaller than Svelte? I'll take it. Okay. Sweet. Okay. Let's look at -- let's
[02:27:03]  look at some stuff here now. So now that we got this, I'm going to switch to an incognito window because I like -- I just -- I like looking
[02:27:15]  at loading profiles and stuff. It's just -- it's interesting. Who do we want to look at? I have every hack news demo. So Svelte,
[02:27:23]  Solid, Remix. Looks a lot like Solid. I should get a new React color. HN Marco. Who else? Yeah. So we got Svelte
[02:27:43] , Solid, React, and Marco. Yeah. I got to change the Solid or the -- this is Solid's blue. I need to get the React blue. Then we
[02:27:56]  can have, like, a nice little -- a nice little setup here. Yeah. Actually, I'm not too worried about the other ones. What I am interested in is
[02:28:03]  I want to see what the loading profile is when we look at this. So let's do a quick page load and take a look here. Okay. Yeah. So
[02:28:13]  very nice. 538 at blocking render, which pushes the first paint back. Considering 942, that's not good. Let's try that again. I don't think
[02:28:24]  that was accurate. Let's try that again. Okay. Better. There we go. Yeah. 497. This is what I would kind of expect. We have the
[02:28:31]  page loading, blocking, async. And if we look here and we go to Remix, I think we're going to see basically the same characteristic. Yeah.
[02:28:42]  Right. We -- that was a -- let's give Remix another shot. Get Salt a second shot. No. That's not good. Let's try Remix one
[02:28:50]  more time. We'll get there. Beautiful. Okay. Yeah. So this is the kind of thing, right? But 414. First paint coming in at about 5
[02:28:59] 27. First paint coming in, 497. It's the same kind of thing, right? The biggest challenge here. And then it finishes its longest contentful paint
[02:29:10]  around 497. Because it all comes in the same time. And our friendly page load is at 593. With Remix, it's a bit longer. Why is
[02:29:18]  it so long? That's a good question. It's probably -- I wonder -- let's look at execution. Why is hydration pushed back so far here? That's
[02:29:31]  weird. Why are these taking so long? That is very strange. Okay. Let's give Remix one more shot. I don't know what's going on there.
[02:29:41]  No. Come on. Okay. Still, it's the timing of when -- you know what it is? This JavaScript file, the main entry is just so much bigger
[02:29:58] , right? I think that's what we're seeing here. The paint -- it paints about the same time. But over the network, Remix is sending 62.7
[02:30:07]  kilobytes of JavaScript. JavaScript, where Svelte is sending 20 kilobytes or whatever, right? And just while we're at this, let's load
[02:30:20]  solid in here, too. Let's see here. Performance. Let's just do this. That was not a fast one. Let's try that again. Okay.
[02:30:37]  First paint for solid is at 182 milliseconds. And then it's done at 452. When's this will finish up? 452. Yeah. So, yeah.
[02:30:53]  Yeah. It's because with streaming, it responds right away. While the other ones are waiting for the data to load. And then we get the first paint, which in
[02:30:47]  this case is nothing. It's just this silly navigation bar with the loading indicator. But then the data loads. And then the page is still loading, which is what you
[02:30:56]  see in the background. And then the largest contentful paint and stuff comes in at 452. And because everything gets pushed forward like this, and all the resources start
[02:31:19]  loading that much earlier than in here. See how it's like wait for the whole page or here. Waiting for the whole page. It just means that the whole thing just
[02:31:31]  loads faster. Like every element of it is faster. I guess we really should see what we're dealing with. This is probably, this is just not even fair,
[02:31:41]  right? Do Marco. First paint. Okay. That was not good. Let's try one more. You got to give them all the warmup run apparently. I don
[02:31:51] 't know why. The cache is disabled. So, it's not like this is leveraging the cache at all. If people are thinking that. It's just, I don
[02:31:58] 't know what's going on. But yeah. Okay. So, what do we get? We get first paint here, the Marco in 287. And then it
[02:32:05] 's done at 4:16. So, it's even faster than solid 4:30. Yeah. So, yeah. This is kind of interesting different characteristics of loading.
[02:32:16]  The difference of what streaming makes. You know, solid Marco with streaming, react, remix, and salt without. So, this is just kind of basic loading indicator kind
[02:32:25]  of scenarios. I think the thing is if we just go here. And we pretend like we're somewhere slow. And we run this again. I think you're going to
[02:32:33]  see all of these are going to perform very similar. What have we got here? First paint at 1284. And largest contentful paint at 1284. And when are
[02:32:43]  we done? I can't see it. Did I interrupt it? Oh, it's because it's like loading stuff. Yeah. So, let's say 1284
[02:32:51] . Let's do Fast 3G. What's this one? 1259. Remix. Yeah. I think I'm cutting it off too soon because we don't see
[02:33:14]  the hydration cost. Remix hasn't hydrated by this point. 1218. So, Remix has a faster paint for async than the others. And then when
[02:33:24]  you're under slower network. But it's the slowest when you're on a fast network. And then Marco 1250. Yeah. So, they're all within --
[02:33:34]  even on slow network, they're all within like 30 milliseconds of each other. So, it's pretty good. Marco's just dehydrated like immediately though because of the side
[02:33:42] . Let's just run this through page and speed insights and then we can get to move on. Do I have Vue 3.1? No. I have a
[02:33:52]  Vue 2.1 because I copied off Vue 2.1. But I don't trust the Vue 2.1 because it's not using any of the optim
[02:33:58] izations and parallelized data fetching type stuff. So, yeah. Let's just use PageSpeed Insights and just give these all a whirl. And just see
[02:34:16]  -- I'm interested to see how hard work goes here. 100. Unsurprising. And then -- yeah. Good numbers. 0.9.9. One 10
[02:34:35] -millisecond blocking. Yeah. No. That's nice. Right. I'll grab the Remix one, two over here. Yeah. It's pretty good.
[02:34:44]  I don't -- sometimes I don't know what the speed index is. It's confusing. Like there's nothing here that would make you think that this is slow. And
[02:34:50]  you can see that it is taking this thing. But these numbers are good. 0.9s are where you want to be. And interactive is really fast. I
[02:34:59]  think that's really quite good. I think Solid needs to do a little bit work on our hydration performance, actually. Let's do Remix here. Remix won't
[02:35:16]  get 100. But you guys are talking about Reacttacks. Yeah. Yeah. And in this case, architecturally, Remix and SaltKit are actually identical.
[02:35:42]  They're both doing async block to render. And they're doing parallelized data fetching and stuff. So, yeah. This is basically just Reacttacks is
[02:35:51]  what you're saying. Because they're on the same infrastructure with the same stuff. Let's do Solid next. As I said, there's different elements of performance.
[02:36:04]  For page load performance, obviously, the MPA that does partial hydration is going to be the winner, which is not Solid, which is Marco. But, yeah. I
[02:36:14]  think our hydration could use some work. Yeah. Right? Like, SvelteKit actually came out ahead on this run in the past. But you see this?
[02:36:26]  It loaded faster. So I don't know how they're determining this thing. I'm going to run it one more time just because I can. Because those numbers are actually
[02:36:37]  larger than normal. But, yeah. Sometimes that's what he gets. Yeah. So all 1.1s. Right? So, yeah. I don't know
[02:36:48] . Let's run Marco. I think there is something I've noticed with PageSpeed Insights. And I'll show you again when we get back to here. See
[02:37:02] . Because you've seen Solid get .8s for the exact same page previously. See, like Marco is .8, .8, .8. I'm just
[02:37:12]  going to grab this one one more time and see. Let me grab the Svelte one again and see how consistent these results are with the others. Because I ran a
[02:37:23]  couple of the others a couple of times. So let's just kind of look here. See, this time it's 1.1 across the board for Svelte.
[02:37:32]  So, yeah. I don't know how much. I think there's a bit of variety on runs here. Because we got .9 the first time. Yeah.
[02:37:41]  So now it's all .1, .2. So let's give Remix one last shot, too. Because I think the thing is, what I've witnessed with
[02:37:51]  PageSpeed Insights is that occasionally, there's like the good run, and then like all the rest of them kind of normalize at the same numbers. Yeah
[02:38:04] . Remix is consistently at 1.2, though, with the extra hydration cost. The other ones, none of the other ones have such a big hydration cost. And
[02:38:13]  that's really just React coming into play. Let's run Remix one more time. Oh, see? Now we've got 1.1. So again, hydration
[02:38:25]  cost. Like 300 milliseconds to hydrate. So, yeah. I mean, you can get 100 with Remix as well. With the other ones, like, I don
[02:38:35] 't think we saw any of the other ones not get 100 on this demo in any of the trials. Kind of like, give me the good run. Right. Give
[02:38:53]  me the good run. Sorry. I lost the stream for a second. Hopefully everyone's still there. Yeah. Side note. Yeah. We're not getting a good run
[02:39:25]  with Solid today. It's fine. Marco is ahead of the others because of partial hydration. Remix, Svelkin, and Solid are very much identical. And
[02:39:38]  then Remix is, like, a tiny bit slower because of the thing. Yeah. I mean, to be fair, they all work without hydration. I mean, you
[02:39:45]  just, like, remove the script tag and it's like, you know. Svelkit was actually. This is a funny thing. It kind of gets buried. But
[02:39:54]  Remix did their beta demo where they showed the forms off for the first time. And they did this, like, really cool beta reveal. And it's one of
[02:40:01]  my favorite things, like, from a presentation where they were, like, sitting there. And you're doing a Remix app and you're building it and you're,
[02:40:07]  like, not even paying attention. And then they're like, oh, JavaScript's been turned off the whole time. And you're just like, what? And it
[02:40:17]  was an awesome demo. But the funny thing was, Rich Harris gave the same demo four days earlier at a Svelte conference using SvelteKit. He didn
[02:40:27] 't, like, he didn't, like, he didn't have the showmanship. But he did this. He did basically the same progressive forms demo with the JavaScript turned
[02:40:36]  off. So, like, the truth matters. This is a trick that every JavaScript framework has been able to do pretty much since the beginning of time. But people haven't
[02:40:45]  been really focusing on it. You know, a lot of work on, like, we want a mobile thing. I'm glad the direction is heading this way. And it
[02:40:51] 's important for where things are going in the future. I've talked about this in other streams. But I just wanted to kind of put it out there. Like,
[02:40:56]  the state of the art today in terms of, like, static routes. Well, actually, that kind of ties us into the next thing. I want to know how smart
[02:41:05]  static routes are. You know, I'm sorry, did I talk about this yet? Vue 3.2 did have some really good client side improvements. And it's
[02:41:19]  a funny one. Because the way they did it, see, reactivity, I didn't talk about this earlier. And I wish I did. Because it makes sense
[02:41:27]  more when we're talking about preact, adding reactivity and all that kind of stuff. Reactivity and VDOM are naturally at odds with each other in that the
[02:41:36]  way components break up. Like, with a VDOM, you want really, really, really small components as a unit of change. But with reactivity, the
[02:41:43]  smaller the moments of change are, the more overhead you have on subscriptions. I know Solidity is a granular approach, but we actually kind of mess with the granularity and
[02:41:54]  actually go less granular for certain things as a way of optimizing creation. So what I'm getting at is Vue has always been a puzzle to me. Because it's
[02:42:04]  basically both sides of it are fighting with each other. Like, it wants to do these fine-grained updates because it's got that reactivity. But then it's
[02:42:12]  got a VDOM that's, like, punishing you for it. And what Vue 3.2 did, which was so clever, was, like, he
[02:42:21]  let you keep the giant components, which are good for reactivity, and then mark DOM or JSX nodes or template nodes as being static or, like, memoed as
[02:42:33]  a way of preserving the granularity that the VDOM wants. So it is a weird, it's like an optimization technique kind of similar to Inferno, where
[02:42:41]  you're doing these kind of, like, denoting stuff on the nodes. It's kind of like a pro trick that's really useful, you know, in benchmarks
[02:42:48]  and whatnot. But it's really cool that they found a solution for it. And that's the reason why, if you go on the JS framework benchmark now, Vue
[02:42:55]  and Svelte are basically the same performance. He just did this little thing, and he probably could have done it ages ago, right from the beginning of Vue 3
[02:43:02] , but now they actually have a way of doing it. And it's very clever because it lets them mitigate the inherent conflict of having a reactive system feeding into a VD
[02:43:13] OM. Vue's really the only one that's kind of gotten to that level. I think we're going to see some reactive libraries come in, especially with the
[02:43:20]  influence of the stuff we've been doing in solid, into VDOM libraries. And people not realize that adding reactivity to your VDOM library while it's convenient
[02:43:26]  actually slows your library down. It's not just, like, makes it faster. It's actually, like, it can make updates more granular, like, you know
[02:43:34] , like Jotai style or whatever, like, update only the component you needed to update. But it itself is an overhead. Like, if you just did that with
[02:43:41]  React's built-in primitives yourself, then you'd actually have more performance than adding another library to do it. I don't have a Vue example. Maybe
[02:43:57]  one day. Vue is the one that I have the hardest time with. You've seen me on stream, I get really stuck with Vue. Svelte
[02:44:03] , I can easily figure it out. Vue kind of takes me back to, like, to just not getting it today. Okay. Vue kind of takes me back
[02:44:12]  to, like, the early days of when I was doing web dev with, like, Knockout. And for some reason, like, certain parts of the patterns just aren
[02:44:20] 't intuitive for me anymore. I just have a hard time. When I look at the docs, there's so many different ways to do stuff. I get confused because it
[02:44:26] 's, like, tricky that way. But this gets me to where I wanted to actually go. I just want to make sure I didn't miss anything. Yeah,
[02:44:33]  I don't have context for this anymore. Generally, though, it's cool. We all have the same API. What's cool about this test is all the same app
[02:44:44] , all the same APIs deployed all in Cloudflare. This is just, like, on the edge. It's all, like, uniform. Anyways. Okay, cool
[02:44:55] . So let's continue on for a minute here. Let's see. We're at, like, over two and a half hours. That's fine. What I
[02:45:03]  want to know about is you're probably wondering. Actually, okay. Yeah, I mean, I don't need it. You're probably wondering how Marco is so fast.
[02:45:13]  And we covered that in previous streams. And that's because this page could be completely static. And it would still work. Because if Marco does this automatically without you,
[02:45:24]  like... The biggest difference with Marco, and I've talked about this previously, is on a page like this, where there's 75 comments, and you have all this stuff
[02:45:34] , Marco can ship just the code for the component and not ship the rest of the data and stuff. And you have to see it. Basically, partial hydration is like Ast
[02:45:41] ro. It's the same kind of concept. It cuts pages down. But what I'm interested in is how do static routes work? I know Remix, you
[02:45:48]  just remove the script tag literally in the head. And SolidStart works the same way. But how does it work to do static routes in SvelteKit? Because I
[02:45:57]  want to see if there's, like, some other stuff that maybe I'm missing that we should look at in terms of features on SvelteKit. So let's
[02:46:06]  go back here. We've got the deployment working. What else do we want to look at? And anyone in the chat, go ahead and suggest some stuff. The
[02:46:13]  reason I'm interested in static routes is SvelteKit does something really cool and with its router. And as I mentioned, Solid has always been on the nested rout
[02:46:23] ed remix stuff, even before Remix existed. Like, we knew we were on that path. It goes back to Ember days. It's because in reactive libraries that
[02:46:30]  don't have a VDOM, you can't waste your time re-rendering layouts. So you need nesting router. Otherwise, it's super unperformance.
[02:46:37]  So I always knew that I was on that path. And then you're just like, well, parallelize the data fetching, obviously, right? But what I
[02:46:42] 'm interested in is Svelte, what it does is it -- how should I put it? You're still using the anchor tag as normal in React router. But in
[02:46:59]  Svelte, they actually kind of delegate the event and listen to all the anchors on the page at the top. And we actually added this in the latest version
[02:47:07]  of Solid app router. And what's interesting about that is, in theory, you could have static pages with client-side navigation. Now, I don't know that S
[02:47:14] velte is doing this. But, I mean, if they had a trick up their sleeve that I didn't know about that would make me very, very impressed, that
[02:47:22]  would be the one. So we're kind of heading that direction with Solid as we're getting to partial hydration and looking at these kind of techniques. But it -- and
[02:47:32]  Svelte had a lot of potential. As I said, we used a lot of it for the basis in how we approached Compiler Marco 6. So Svelte
[02:47:40]  has -- while there's some certain limitations in terms of composition, it has the same analyzability, even if they aren't leveraging yet, in the compiler potentially,
[02:47:49]  that, like, something like Marco has. So they have a future where they could go towards these other patterns if they choose to. And I don't think they choose to
[02:47:57]  right now. I think they want to see what it looks like first. But I'm wondering if they're -- if, like, some of their experimentation is taking them there
[02:48:03] . So, you know, yeah. I mean, what I'm interested in is -- is this pre-rendering? We saw this earlier. Is it just pre
[02:48:19] -rendered true? Or is, like -- or, like, the static routes, is it just -- sorry, what do you say? Hydrate? You can turn
[02:48:28]  off hydration and/or routing. Yeah. Let's see if we can find that. If you're asking about the routing stuff I'm talking about, again, that
[02:48:47]  Marco stream, the last one, has all the secrets of the future of the universe in it. People should watch it if you get a chance. It's a little bit
[02:48:56]  dense, but, like, it is incredible in terms of future technology. I'm just wondering if they're playing -- I got a feeling like maybe they're playing with this
[02:49:08]  stuff and I don't know about it yet. So what am I looking for? Hydrate? You can turn off on hydration and/or routing. Yeah. How
[02:49:15]  do I do that? That's what I want to do. Because that first page in Hacker News doesn't need to hydrate. And I want to know what that
[02:49:20]  experience looks like in Svelte. I know it can't do partial hydration like Marco does on the second page, which is -- if you ever saw that demo I
[02:49:30]  did with Remix and Marco, Marco's, like, beating it by, like, seconds. Like, it's just not even close. That's because of partial hydration
[02:49:37]  and streaming. But what I'm wondering is can we -- what -- how does it work? Because we have pre-render, but I don't know what keyword to look
[02:49:46]  for in the search here. I thought it was static routes for a second. Hydration. Okay. Yes. These are good terms, but what do I get
[02:50:28]  to do? Export let hydration. Okay. Let's try -- let's try the term -- let's try looking for hydration again. Hydration. Page options. Beautiful.
[02:50:47]  See? Okay. Yeah. Okay. Okay. Let's give this a shot. This is -- this is -- this is -- this is why I'm here. I
[02:51:11] 'm not -- if there's -- if there's a feature that they have that I -- that I -- they could potentially have that I think as interesting as this. Because
[02:51:19]  technically speaking, some of these pages don't need JavaScript. Although I don't know if me doing the data fetching here messes with that. Let's hope it doesn
[02:51:31] 't. Let's just do this. I don't know if I can do that. I don't know if I can't do that. I don't know if
[02:51:42]  I can do that. I don't know if I can do that. I don't know if I can do that. I don't know if I can do that.
[02:51:44]  I don't know if I can do that. I don't know if I can do that. I don't know if I can do that. I don't know if
[02:51:46]  I can do that. I don't know if I can do that. I don't know if I can do that. I don't know if I can do that.
[02:51:49]  I don't know if I can do that. I don't know if I can do that. It's very, very exciting because I haven't added this to Solid
[02:51:57]  Start, but Solid Start can do the same thing. And this is what I think it is. Okay, let's go local host. No, not that. Very,
[02:52:07]  very fun. Yeah, okay. I'm probably going to know until we actually do some stuff. Okay, let's first, yeah, let's get off fast 3G
[02:52:28] . Let's go back to no throttling. Okay, let's, let's, let's. Okay, so this is, let's confirm. This is still
[02:52:39]  client-side routing. Beautiful. Okay. I, I think for us to really see this though, we're going to just have to go and deploy it or whatever
[02:52:57] . Let's just, let's just do this. And actually the user page, the user's page is also static. There's no interactivity on this here. So
[02:53:11]  let's, let's do this as well. Turn off. Actually before this, I want to, I want to double. I want to check all elements of it
[02:53:28]  before we do this. Let's look, I want to look at data serialization patterns. Um, here, cause I've mentioned this before on a page like this.
[02:53:39]  Marco doesn't need to serialize any of the data. Cause it knows and you know, everyone else, even if yeah. Yeah. Yeah. Okay. So yeah
[02:53:54] . But where is it? Yeah. Big blob. And let's where, where's it? Where's our data serial? This is the head. Where is our
[02:54:05]  data serialization for remit? At first of all. Don't see. No, let's look at network. Cause they don't refetch it again, presumably.
[02:54:21]  Right? So where is the data serialization? Um, let's, let's look at the page. Where is it? Hmm. Oh, there it is.
[02:54:41]  It's, I don't know why I didn't see it before. It's this, this, this thing at the bottom, it's just. Why didn't
[02:54:48]  I see this? Does it get absorbed? Yeah. It looks like they, they remove it when they're done with it. Okay. That's fine. I, I
[02:54:59] , I, I found it. This is, this is all the data all being serialized. And as I said, Marco doesn't need to, but everyone else does
[02:55:05] . So if we go like this and turn off hydration for these two pages, but leave routing on. Let's do this. This should hopefully deploy a new page.
[02:55:18]  Cause I'm not, I'm not. Oh, is it supposed to be in the module script? Yeah. That makes more sense. Yeah. Sorry. I got into
[02:55:37]  that a little bit too much. Let's, let's, let's look. Uh, it is in the water. My bad. Let's do this one more time
[02:55:47] . Move it up. Yeah. That makes more sense. Cause the module script gets hoisted out. Um, more sense. And it's top level. Okay.
[02:56:00]  And then let's do, where's it stories. I just saw those nice lined up exports. Hydration. Let's do that again. Yeah, no, this
[02:56:38]  is cool. This, this is what I hope it is because I, I, I want you to understand the difference between this and what remix does in a minute.
[02:56:45]  Cause what remix does is the same as like, uh, removing the router too, which is really quite easy to do, right? You just remove the script tag. This
[02:56:55]  isn't removing the script tag. This is piecewise removing it. If I think, if it does what I think it does and it actually can do other things too.
[02:57:03]  So I'm, I'm, I'm, I'm, I'm hopeful. Yeah. Okay. So this one's still, um, the point. Let's
[02:57:12]  give it a second here. Cause I'm not gonna lie. Cause I'm not gonna lie. This is secretly what I was hoping for. Cause this, this,
[02:57:30]  I was looking at this with nested routing and it's a little bit tricky. Cause once you turn off hydration at a certain point in the tree, you kind of got
[02:57:38]  to turn it off for the, the rest of the way down. So like you can't do clever stuff with this and since felt kit doesn't do the nested
[02:57:48]  stuff in the same way, it's almost easier. But I think, I think this is still solvable. And I think, I think this is, if this works
[02:57:57]  the way that I hope it works, this is actually really, really cool. Well, I mean, yeah, let's, let's see how our deploy is doing.
[02:58:11]  So it was deployed. Did we get there? Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. They got rid of the
[02:59:13]  data. They're not, they didn't serialize the extra data. There, we, there's a couple of ways we can know it's not hydrating, but
[02:59:30]  I think, I think. Hmm. And I probably make sense. Okay. Yeah. Okay. So this isn't quite as cool as I was hoping, but it
[02:59:47] 's close. Let's, let's, let's, let's do the loading profile and, and see what it looks like here. Um, let's get back to
[02:59:55]  no throttling. And do, do, do, do, do, do, do it again. Let's just, this is why is this like way out
[03:00:08]  in here? Okay. Okay. Let's try this again. Yeah, yeah, yeah, yeah, yeah. Yeah. It's, it's, it's not
[03:00:24] , let's, let's get a good run for first paint. And then. Yeah. Okay. Let's look at the CPU running. I should have kept
[03:00:45]  the old, um, time. Yeah. I'm pretty sure it's not hydrating here, but the thing is they didn't eliminate the, the JavaScript packages as far
[03:00:57]  as I can see, which is what I was kind of hoping for. Like the thing is, once we move here, it needs to be present. Otherwise, like
[03:01:09] , uh, otherwise this doesn't work, right? Like the, but that initial page, technically stories doesn't need to be here. And I was hoping when we set
[03:01:18]  to hydrate false, it just wouldn't even ship this, the, the, the script tag and actually reduce the initial JavaScript payload. Um, but it looks, yeah
[03:01:29] , we should double check that it's actually doing what we think it's doing, but it does look like, um, it removed the hydration script, which means that
[03:01:38]  it's probably not running the components. Um, we're not going to see like this on page speed optimizer or anything, because we're already like a hundred for this
[03:01:48]  simple page, but what I believe what they're doing is they're not serializing the data and they're not, um, they're not running the hydration for that section
[03:01:56] , but they're still sending the JavaScript. Um, yeah, but if you turn off both, um, then it's like remix. It's like, kind of
[03:02:14]  like, oh, you removed the script tag. What's way more interesting here is the potential of almost doing like a really dumb version of partial, reverse partial hydration.
[03:02:26]  Um, because we need the JavaScript for the router and we need the JavaScript for like the main pages, you know, so like in theory, what we could do is render
[03:02:37]  the whole page on the server, send the JavaScript for the router and not preload or prefetch the JavaScript to reload this page. And then when you do that first navigation
[03:02:46]  at that point load, right? So not only not serialize the data, but also not send the JavaScript for the static section. If we turn off the router,
[03:02:54]  what's going to happen is when we click more, the whole page is going to reload like MPA style, which again, isn't the worst thing. That's
[03:03:01]  what Marco is doing here. Marco is reloading the whole page here. You don't see the flicker because well, um, it's streaming and all this stuff and
[03:03:09]  the loading. There is a loading state. I don't know why we're not seeing it right now, but ignoring that for a second. But essentially then, then we
[03:03:16]  turned into that thing. And sure, like any of these frameworks can do that. Like, cause it's, it's like solid remix felt. They can all just
[03:03:26]  remove the script tag. Um, what's interesting is situations where you can reduce the JavaScript while still having JavaScript and this don't get me wrong. This is good. Um
[03:03:37] , not hydrating and not serializing that data is going to affect your, your, can I show you what it affects? Um, but it affects let's reload
[03:03:54]  this. Wait a second. Why I'm bypassing it. Why is it being like this? The page is more than four kilobytes. It's not, that
[03:04:11] 's not nice. What is it doing? When I wanted to, um, turn off the stupid thrilling, uh, document. I thought, okay. Okay. See
[03:04:30] , solid seven kilobytes for this page. Remix. Uh, disable cash. Sorry. Wrong one. Turn off the 3g. Doc, doc. Yeah
[03:04:51] . I don't know why solid's so large right now. We have to see. Anyways, we mix 5.8 kilobytes. I think something's 5.
[03:04:57] 9. Something is weird going on right here. Oh, okay. Streaming is always a little larger. And then. Uh, let me go doc. Um,
[03:05:13]  yeah, this, this, these numbers aren't in the right range. It should be like a hundred. It shouldn't be like four kilobytes. It should be
[03:05:21]  bigger than that. I don't, I don't know. Anyways, um, what, what we did when we switched this is we, we basically shrunk the,
[03:05:34]  the payload of the HTML page. Uh, anyways, um, yeah, this is cool though. Um, it, this, this, this reduces the page size and
[03:05:59]  it, uh, and it reduces the execution cost up front. And it seems like something fairly trivial to, to add to any system that, that does the smart data
[03:06:10]  fetching in the routes. This is, this is what I was hoping to see. As I said, there's a difference. You can also turn off the router,
[03:06:15]  but this actually lets you load the router and not load the JavaScript for the page, which is cool because that, I mean, it technically is loading it, but in theory
[03:06:23] , you wouldn't load it. And then when you click on the next thing at that point, it can load it or, or hover or do preloading or
[03:06:29]  whatever. So, uh, yeah, this, this is, this is, this is a, this is a cool approach. Technically. I don't like we, we
[03:06:35] , we could go MPA mode, but as I said, to me, at least that's very uninteresting because like literally like you can just not, you can
[03:06:45]  just decide not to send the script tags or whatever. You can just be like, don't send the script tags. Um, this is slightly smarter than that. So this
[03:06:54]  is like a good stepping stone. Like there's, there's a lot of sites that are like this, where like you have a page and there's no JavaScript, just
[03:07:00]  don't run the code. Um, in our case for this demo, Svelte is already so performant, you know, that it's just not making going
[03:07:10]  to make a difference that we're going to measure, not doing the hydration, you know, for any kind of like page score thing. But in general, this is,
[03:07:18]  this is, this is a nice hybrid that I don't think is in remix yet. Um, so this is really cool, but yeah, we can, we can,
[03:07:26]  we can, we can, I think we knew a little better here, but like, this is what I meant. Once you have, you're using the anchor tags,
[03:07:32]  like you can, you can basically not have the link components and have the anchor tags delegate at the top. And we, we actually have the same ability with the latest
[03:07:40]  version of the router. Okay. Let's look at me, let's look at the comments for a minute, see what we've got here. Yeah. Have I addressed
[03:07:47]  this one? Yeah. Yeah. For sure. And Jacob from salt, uh, from remix reached out to me too, about getting it in with solid. They're not
[03:07:54]  quite sure what they want to do in terms of the compiler transforms. But, um, yeah, I think you're going to see some, some different stuff there. I
[03:08:01]  don't, I don't know what the timing is on that. Cause it seems like the core team at first was really welcoming of this. Cause especially cause they got
[03:08:08]  some flack, you know, cause people are like, look guys, like you're trying to win on performance. And like literally every other library is already kind of doing
[03:08:17]  that. So they, but I've got the, I, I, I, other than preact, I'm not sure if there's anything immediately on the,
[03:08:24]  on the, on the roadmap. Um, yeah, yeah. We're getting close to beta. I'm going to be covering solid start very soon in the stream. And
[03:08:35]  my intention was actually to, uh, do it next week. I think it's either next week that we are after in the next couple of streams. We're going
[03:08:44]  to, we're going to, we're going to, we're going to, we're going to get to solid start. Um, static routes actually haven't been something
[03:08:56]  that I've been working on yet in terms of optimization. I've mostly been working on the, as you've seen the core page load, um, mechanisms and like,
[03:09:06]  uh, been working on like, uh, streaming and, and making that work and data fetching. We have data loaders. Uh, the, the person solid
[03:09:15]  start is taking to, uh, data fetching is like, you know, see how SvelteKit has both ways. So I'll start has both ways too,
[03:09:23]  but it actually bases it off the original one. It's like this, you, we have isomorphic data fetchers, but we have the ability to annotate any
[03:09:31]  function used anywhere with server. And then suddenly it's a type safe RPC call. And, um, that means you can just feed it right into your resources or
[03:09:41]  whatever. So you can, you just write your app, like it's a client side app. And then you're just like, oh yeah, do this on the server
[03:09:47] . And you can literally do that anywhere in any file. Um, and you can do, and we, we have some, I'll showcase it. We have forms like
[03:09:56]  remix with optimistic updates, um, with a, you know, an API. And you can, you can put as many of them as you want on a page and stuff
[03:10:02] . Like basically we liked the progressive enhancement and like a lot of stuff that remix was doing. Um, but we didn't like, sure. I understand that the classic
[03:10:13]  web space stuff, the redirect model and the page and the single like resource location. We were like, screw that. Let's just let you just do whatever you want anywhere
[03:10:22]  and just have it work and be progressive enhanceable. So, um, I think it's gonna be pretty cool when we showcase it off of soon. Yeah. I
[03:10:42]  mean, I've already shown the, the perfect demo to kind of debunk that. Yeah. I mean, I mean, I think they're doing the right thing.
[03:10:55]  this is what I hoped for. I mean, I think there's probably a couple more things. Maybe I didn't turn the option off. Right. Like, let
[03:11:00] 's just triple check. Um, did I like, maybe I'm saying stuff and it's not working and this is just wrong. Right. But like, I think export
[03:11:10]  const hydrate false script context module. Okay. And script context, actually cons hydrate. Okay. Okay. I'm doing this right. Okay. Okay. But
[03:11:25] , and actually we saw this, right. They, they removed the hydration script. We actually saw it. So I, I think, I think I said, this is
[03:11:31]  what I was hoping for. So I think it's really cool. And I think, I think this is just all gonna come up. No, no, no,
[03:11:42]  it's fine. There's always kind of like little frictions and stuff. I mean, and little things we're, we're, we're, we're, we
[03:11:54] 're, I'm not, I'm not too worried with that. But I think, I think if anything, I've just been kind of vocal, you know,
[03:11:58]  the position on performance and like how it plays in. And, um, you know, we'll probably start chatting again soon when it's the right priority. I think remix
[03:12:08]  has been really focusing on their core values, getting the conf out and all that kind of stuff. So I I'm, I'm not too concerned about that. Um
[03:12:15] , I know obviously solid start is a bit of a competitor. Um, if timing had been different, I'm pretty sure I would have worked really in, we would,
[03:12:22]  we would have seen solid start or solid, like remix instead of solid start. Maybe, um, if, if they'd open source their project, like nine months earlier
[03:12:31]  or a year earlier when I started, um, cause it, it is so close to the kind of stuff I want to do. Although I, I have to say,
[03:12:38]  I love the beat ecosystem and I love that we can leverage it. I think that might actually be the, sometimes I feel like we accidentally fall into like the happy path with
[03:12:47]  solid. Sometimes like the JSX actually ended up being like a really good thing, even though it was just like, what was there. And in this, the other
[03:12:54]  sense, I think Svelte or sorry, um, beat is so good that even though things might've gone differently, I'm like so happy. That's how,
[03:13:03]  where we ended up, um, oh, the, the JavaScript is running on, is, is running on, on the client, um, for all of these projects that
[03:13:19]  I'm talking about today. Um, for the routing, um, the, be fair, even the future routing I'm talking about is a weird hybrid where the client
[03:13:29]  is still kind of running JavaScript, but the server is fulfilling the rendering of the page. So, um, yeah, I ideally is the ideal approach that I've been talking
[03:13:40]  about. And the whole last stream was about that. The second half of it, again, if you haven't watched it, the last stream is the best stream to watch
[03:13:46]  ever. Just saying that, um, the, the, the whole approach is as it's a hybrid. I think the best approach is okay. How should I put
[03:13:55]  this? the best way in general, client rendering when the stuff is already there is the faster way to handle stuff. Even doing like API calls, you just go get
[03:14:14]  the API and render it. And if you have the JavaScript already, client side rendering is really fast. And I think just going to the API Jason, like there's
[03:14:22]  no benefit there for typical navigation is or gets if you have all the JavaScript. What's interesting is if you live in a world where you don't need the JavaScript, you
[03:14:32]  don't need the complexity and you never will. Then it's not really any more expensive to pass HTML back or hybrid HTML and JSON back when you do those gets,
[03:14:43]  but where the wind comes in is when you do like mutations or mutations that cause redirects. Then with a kind of more MPA style routing, you don't have to
[03:14:52]  do a bunch of like jump backwards. Like consider post a form when you're on a page for like creating a new post. And it takes you back to your list
[03:15:02]  of posts when you're done in a client side routed single page app, a typical thing you do the post. Then it succeeds and it comes back and then it goes
[03:15:11] , okay, now redirect me back to the page for the list is when you go there. And then at that point, maybe you use the results from there to refresh the
[03:15:20]  list, but to add it to the list. But no, that's not what you tend to do. You tend to, then when you get to the new page
[03:15:26] , now we pull the data for the new list. You can parallelize the fetch at that time, but essentially the mutation causes one trip and then the new page loading causes
[03:15:37]  a second trip to load it. And this is pretty common with an MPA framework, you post the form and then the response is the new page. And I think
[03:15:48]  that's where this is kind of going where you're going to see the server, the client still have like a client routing and probably nested in terms of how it interacts
[03:16:00] . But the partials that are new, you want rendered on the server. And where it gets really interesting is if you can kind of get to a hybrid format where
[03:16:10]  you can kind of update existing stuff with JSON and new partials with HTML interleaved and somehow do this in a fine-grained sort of way. And that
[03:16:22] 's, that's what I want to work on in terms of ideal solution and where things are heading. Be careful, these are those people about, um, yeah,
[03:16:39]  yeah, I know, I'm, it's, it's funny cause I I'm generally pretty open to lots of ideas and, and working through like, uh, like
[03:16:50]  different trade-offs and different approaches. But I think sometimes I'm, I'm really hard on like the no tools side of things and really hard on like the classic M
[03:16:58] PA side. Cause from my perspective, it, it, they've been the, like the, the really, the thing that, that kind of makes the discussions a
[03:17:10]  little bit harder because on the single page app side, yeah, we, we've done some terrible stuff. I'm not, I mean, the benefits were great, but
[03:17:20]  we've done some terrible stuff, but it's, there's been a whole other breed of like MPA, JavaScript MPAs and smart partial hydration and stuff.
[03:17:28]  It started with Marco, but we've seen other frameworks and like other techniques over the years kind of come up here and they're, they're, they're, they are
[03:17:38]  doing the stuff that they should be, but it's, it's like a third group, right? Like the, the classic MPA, no tools, whatever group,
[03:17:46]  then there's the single page app group. And then there's this group and somehow, even though this group is basically has been MPA in the past, they never really
[03:17:54]  got the respect of the other MPA people. And the single page people are just like, why are you doing this old technique? It's only now that starting to
[03:18:04]  understand that that's the path forward to actually like unifying everything, but I'm not sure the single page app side or the classic MPA side is ever going to acknowledge
[03:18:13]  it. And I actually, I have more hope in the single page app side than the classic MPA side. So I'm, I'm, I'm, I
[03:18:21]  sometimes refer to like the real side, it's kind of like dinosaurs and stuff. And it's not, it's not fair. It's just, it's just
[03:18:26]  like, it's like, they're the stick in the mud that I like, that are kind of blocking it. And I get it because I'm suggesting a future that
[03:18:33] 's all JavaScript. And that's really the sticking point. It's not about how much JavaScript's in the browser optimizing and all the stuff. I mean, it's the
[03:18:42]  same reason it's why it's no build. They, they just, there's still this, like, you know, JavaScript's something different for them and that's
[03:18:50]  never changing, I guess. Yeah. I mean, yeah, that's, yeah. But like, like stuff like this, like I showed that I've been showing and
[03:19:08]  stuff like this, like hydrate, it's the start of this kind of change. This is how, this is, there's multiple ways to attack this problem,
[03:19:17]  you know, and there, some might be in WASM and there might be some SPAC and stuff, but this is a real approach, approach to, you know,
[03:19:24]  where we can go with this stuff. And I've been talking about it at length for, for weeks now, I'm going to probably write another article. I mean,
[03:19:30]  every time I get a little bit more clarity here, I wasn't expecting much more clarity, obviously talking about SvelteKit today. because SvelteKit is
[03:19:36]  kind of like the forefront and remix and solid starter, like forefront of what the current single page app things, right? Like, like the, this is, this is like
[03:19:45] , this is not what I've been talking about. This is a single page app thing. Right. Like, um, but you can see it starting on the,
[03:19:55]  on the journey, it wants to get there. It's going to be hard for single page apps to make the full transition, admittedly, but that's, that I
[03:20:05] , I do see that middle ground is starting to be kind of obvious. But right now, for the meantime, I think it is important to keep the boundaries so we
[03:20:14]  can, can keep an idea of where things live, like where that old MPA is, where single page app stuff, like, um, SvelteKit or remix
[03:20:23]  or solid start is. And then we're like Marco and quick sit, these are three distinct places, but the, the, the, you know, the progressive stuff on
[03:20:32]  the single page app side and the Marco quick stuff are quickly approaching each other. And I want, I want to see where it meets. I don't know if every
[03:20:40]  single page app framework is going to make that transition. If they're going to get there or they're just going to stay where they are, but, um, those on
[03:20:48]  the MPA side are definitely interested in bridging the gap. So, um, I think this is going to be a really interesting time to see that. Yeah. Yeah
[03:21:02] . But my, my, my, my point here is the, the new technology I've been kind of covering the last few weeks, like on the more MPA
[03:21:08]  stuff, the quick and the Marco side is not your typical single page app. Even this stuff isn't really classically your typical single page app. I think, I think
[03:21:17]  the, the PHP people, if it wasn't for the fact that they're like Marco and quicker done in JavaScript would like what those are doing. Like it is an
[03:21:27]  MPA mentality, it isn't the, you don't have the same complexity necessarily. Um, you, most of the stuff like conceptually, even though I told you
[03:21:36]  the router is happening in the client, it is conceptually routed on the server conceptually. And, and I think this could appeal to those people other than the
[03:21:46]  fact that I'm telling them to run JavaScript on their server. I mean, after all, today started with me showing something from Matthew Phillips from Astro, where he's
[03:21:55]  like, I don't want, you know, to alienate people who don't want to run JavaScript on the server. And that's fine. But it's, it
[03:22:00] 's, that's the other approach. It's the two app approach. We've been there. And as I mentioned, I don't really want to go back there.
[03:22:07]  I think that could be potential to do other stuff, right? The two app approach always had this weird double templating thing. And Matthew solved that with a CSS kind
[03:22:16]  of approach, but you, you, you, you still basically have like two views that are going to layer on top of each other. Um, it's fine. CSS
[03:22:25]  is like that in a sense, it's like a second representation. So, you know, maybe mentally, like you can view like with a core set or whatever that
[03:22:37]  essentially server and client are like two different views, like two different technologies or whatever. Like you have your CSS file, you have your JavaScript file, you have your HTML file
[03:22:50] , and you have your core set file. Maybe that's the mentality, but I think hydration is solvable. I'm going to go as far as saying that the
[03:23:05]  solution to hydration that we've been challenged, you know, I wrote an article about the challenges. It's right here, honestly. I was talking to Misko. It
[03:23:15] 's funny, it happened the same time this week. I was sitting down with, I was implementing use effect or effect tags in Marco, and we realized that there's
[03:23:29]  some awkwardness with the queuing. Like you always have to queue effects because they have to happen after everything else. And we didn't, we had already split hydration
[03:23:39]  off from regular rendering, you know, and the only thing that happens at hydration is event listeners' effects were like, oh, we don't want a third freaking queue.
[03:23:49]  And then I think it was Dylan, he was like, then let's not, we don't actually need to attach the event handlers at that point. They're
[03:23:58] , they're, they're, they're kind of like already there through delegation on the server. And, and then we're like, oh yeah. So literally all hydration
[03:24:05]  is, is calling the end user effects, i.e. code that only runs in the browser. If you literally don't have any user effects, like don't use
[03:24:13]  the effect tag or use effect with Marco six. There's no hydration, none. And I didn't really make much, I didn't connect the dots when I heard
[03:24:24]  that at first, I, I, like, we didn't actually say that out loud. I, we're just like, oh yeah, don't do the event thing
[03:24:29] . But Misko was like, I've decided that quick doesn't do hydration. We're resumable and we, we, we just do no hydration. And I
[03:24:37] 'm like, holy crap. That's, that's, that's what this is. So yeah, we'll, we'll see this, but essentially approaches like quick and
[03:24:46]  Marco basically. Um, in a sense, have eliminated the JavaScript execution part of hydration. I think you, I think with partial mechanisms, I need to know what to
[03:24:58]  serialize and not to serialize finishes the puzzle. Like, like the whole Marco's analysis or like server components. Like, but if you take resumability and you
[03:25:07]  take the knowledge of what runs on the server and the client in terms of data serialization, you basically have solved hydration. Like we, we, we, and I think
[03:25:18] . I, I think with the knowledge that we've basically have solved hydration, I'm, I mean, I don't, I don't think we need to go
[03:25:27]  other ways. Like, I think we can build a single JavaScript app and just not have hydration. I, I, I don't know if it's a crazy idea
[03:25:37] , I'm not articulating it well, but I think I, I, to me, it's starting to look like we actually like, it's not just about partial
[03:25:46]  or progressive hydration. It's actually about eliminating hydration altogether. And we're, we're like right on the, the, like the, the edge of accomplishing that
[03:25:55]  it's like, we know how to do it. We just haven't done the work to finish the, the story yet. Um, yeah, I'm curious why you
[03:26:04]  consider routing fundamental rather than thinking of the URL just as one input into function that returns markup. Is it because routes tend to change the whole page? Yeah. Yeah
[03:26:12] . I mean, and especially on the server, this is like the source of truth that everything else is driven off of what view to show, what data to load. Like
[03:26:22]  it's the most fundamental source of data. So it makes it a very natural place. Like, and, and this comes back to like the fundamentals of the web.
[03:26:32]  Every time that we've had a big paradigm changed, it's, it's, it's the routing paradigm. That's like, it's the routing that defines that change
[03:26:38] . Right? Like what's the difference between an MPA and a single page app. Right. Um, it's, it's mainly the routing. It's the routing
[03:26:47]  on the server versus routing on the client. And like, it's basically the, the backbone it's the, it's the input of, of it. I understand
[03:26:57]  the URL itself. You could like use it different ways, especially from a client side perspective. You can do nothing with it or everything with it. But this is a piece
[03:27:04]  of information that lives like outside of your. Like it's in the browser, but it's like outside of your, your, your, uh, like the, the
[03:27:15]  world, the, the world you live in. It's like your input from the, it's the only actual input. Like on server, it's the request and,
[03:27:22]  and the route essentially. But essentially this is like, this is the input, right? Especially when you consider stateless environments, um, where you don't have any persistent
[03:27:33]  state. Like it's all driven off the route. So yeah, from my perspective, it's the complete back, the complete back, like the backbone of all Apple
[03:27:45]  web applications. Yeah. I think this is an interesting one. I don't know. Node has obviously had like some concerns and some security. I don't know.
[03:27:59]  Some people I've talked to think that, uh, Denno or Dino might like change the game here. I'm not, I don't know. It seems the
[03:28:04]  only reason I'm saying this, I've seen people more back-end excited about Denno than people on the front-end side. But maybe that's just like the
[03:28:13]  smallest slice of the smallest slice. But if, if, if, if there's a path there, maybe, maybe that's, that'll do it. Like maybe there
[03:28:21] 's just certain parts about JavaScript back-ends that just doesn't jive with their thinking. Um, and maybe like we don't get it cause I don't know
[03:28:29] . I've, I've been a backend dev or full stack dev, I was for years, right. Like, uh, pre single page app, every web developer was
[03:28:37] , I mean, unless you're like just a designer. Exactly. And so, you know, I spent years doing websites and C sharp and some PHP and rails definitely.
[03:28:48]  So like, yeah, I, I don't know. Yeah. The router is funnel because the way you're offering to increase the URL, which is the source trivia
[03:29:06] . Yeah. Exactly. Yeah, so this is the difference between state and stateless. Right. Don't like, don't, don't get me wrong. Like
[03:29:17]  there are other sources, um, for sure. Um, and when you're like sitting there on a page, which like for anyone who doesn't know, Theo's apps
[03:29:29]  are like video apps where like long session, you're basically on the same page. You know, like it, it, it, it makes sense, but yeah,
[03:29:41]  in those kinds of things, like your app would basically be a single page anyways. Like even like, if you go back to before single page apps, like you pretend we
[03:29:50]  lived in an MPA world, like you, you probably would have built your app as a single page. Anyway, kind of like maybe there's some like setting screen
[03:30:01]  or something, you, you know, it would have been a way worse experience. Don't get me wrong. Like, but as the, like, you can always house
[03:30:10]  interactive stuff within, inside this model. Right. It's the routing again. That is the key, the key, the key thing. Yeah. Yeah. Yeah.
[03:30:26]  I'm a big, um, you know, proponent of like cloudflare and cloudflare workers, but I want to see what, where this goes. This
[03:30:32]  might be, this might be the, the, the, the more suitable thing. I mean, I'd love to see it's hard because Dino is just this platform
[03:30:40]  that kind of goes anywhere, Dino or whatever. And, but like workers have like this really good platform. So like, I don't, I don't know,
[03:30:48]  like we're going to have to see how this, this plays out. Um, yeah, this is, yeah, the typescript and the error handling is like,
[03:30:58]  I figured it was a rust. The one people were comparing it to rust or whatever, in terms like error handling being like really good. I haven't played with it.
[03:31:05]  There's parts of it that just threw me off immediately. Um, but I think maybe this is what it's going to take. Um, yeah, I, I
[03:31:19]  tried to do this. I got stuck, um, and you're right. I don't have patience for this stuff. So that's pretty much sums it up completely
[03:31:25] . Yeah. The comments are coming in so fast now that I'm barely keeping up. Yes, it's easier with 18 hour session. Yeah. I, I,
[03:31:43]  yeah, I, I can see it. That's amazing. Honestly, the, the, the things you can do with the web now. Yeah, no, that's
[03:31:51] , that's so awesome. Yeah. The concern is about JS backend. So yeah. And it's because it, yeah, I don't know. You'd think
[03:31:59]  that they were, would like, there would be something okay by this stuff. I don't use them enough and maybe that's why, but like, you'd think that
[03:32:08]  there was, there'd be some kind of, I don't know about nest JS or any of that stuff. I've heard bad things or, you know, I don
[03:32:14] 't know, but like, you think there'd be like a full fledged JavaScript backend framework. It's been like 10 years, you know, built on node. Is
[03:32:20]  it that people are just happy enough with like spin up that express app? Like, I don't know. I, I lived at a startup that we did do that
[03:32:30] . We just had node express did we move through different architectures, eventually getting on serverless, but starting on like node servers. I just, I never missed the stuff
[03:32:39]  that I had in .NET or, or PHP, but I mean, other people like that's how their stuff works. So I, I don't know, I,
[03:32:45]  I have to imagine the tools are out there, but I'm used to just like throwing together what I need and just going from that. So like different mentality, different scale
[03:32:52] , but like eBay, you know, we, we, we we still have Java for like our, on the API side, you know, like on the data side
[03:33:00]  and the business layer, we did move all the web technologies all to node on the backend and other large companies have as well. Um, but you know, we still have
[03:33:10]  a big contingent of Java. So yeah, there's, there's, there's probably real things there that I'm just not, you know, taking into consideration
[03:33:16] . Yeah, no, I get, yeah. Like I think there's some really good stuff coming up with Rust and go, especially it's just right now maybe Web
[03:33:34] Assembly is going to be the change and you can always do other parts, certain parts and backend, but right now I actually think that we're at a precipice,
[03:33:44]  as I was saying, where we can have the full single app experience in JavaScript, um, frontend and backend with salt hydration, optimal JavaScript, amazing user experience in
[03:34:01]  terms of like navigation stuff. I think we're like right on the thing. And I, right now I think JavaScript on both sides of the only way to achieve that
[03:34:11]  right now, it could change, but right now that, that we, that's where we're at. Yeah, I don't know. I, if you, I
[03:34:24]  didn't highlight this with SvelteKit, but remix SvelteKit and solid all, um, pull their graphs and based on routing, like by virtue of code
[03:34:35] . So we're going to do a lot of stuff. We're going to do a lot of stuff. We're going to do a lot of stuff. We're
[03:34:39]  going to do a lot of stuff. We're going to do a lot of stuff. We're going to do a lot of stuff. We're going to do a lot
[03:34:42]  of stuff. We're going to do a lot of stuff. We're going to do a lot of stuff. We're going to do a lot of stuff. We're
[03:34:46]  going to do a lot of stuff. We're going to do a lot of stuff. We're going to do a lot of stuff. We're going to do a lot
[03:34:49]  of stuff. We're going to do a lot of stuff. We're going to do a lot of stuff. We're going to do a lot of stuff. We're
[03:34:53]  going to do a lot of stuff. I have to assume like next is doing the same thing. Like this whole architecture that we do right now in single page apps is
[03:35:00]  very much based on splitting along routing. Maybe it's kind of handled automatically for you in the background, but essentially routing is the key to that. Sorry, this is
[03:35:10]  funny stuff in the chat. Yeah. I mean, this is serious. And yeah. Yeah. What would happen if we brought everyone together? You know, it's interesting
[03:35:26] . Yeah. What if you could now move that to the edge? That's the only thing I'm going to throw out there. Like single edge function is basically what
[03:35:50]  I've been doing with, and these guys have been doing with all our starters. That's the only little difference. And the thing is Cloudflare has like higher
[03:36:00]  limits than like AWS's edge functions. Like it's just a better platform. So I think it's more practical, but to be fair, there are still limits and I
[03:36:12] 'm not sure all apps would actually fit in there, but yes, I've been really digging serverless. And I think, I think edge is the other thing here,
[03:36:19]  right? If we're moving back to the server and the servers on the edge, I think, I think this is all kind of part of parcel. This is why
[03:36:26]  like it takes a kind of perfect storm for this paradigm shift. It wasn't just enough that the JavaScript frameworks have the ability to do this, but having edge, you know
[03:36:37] , being this and like serverless being this kind of vehicle. We've had service for a few years, but I think, I think stuff is just kind of aligning
[03:36:45]  quite nicely right now. So, thank you. Yeah. We're, we're going to be wrapping up soon where this is three and a half hours is longer than
[03:36:53]  I, I thought again, but I'm glad we got to see some stuff in SvelteKit that, that, you know, I was pretty stoked, stoked about
[03:37:01] . Um, yes. Yeah. That's what I think they, they all do. Um, you know, like that, that's, that's sort of where
[03:37:10] , you know, where, where like the current generation of, uh, isomorphic gaps are. Um, yeah, I mean, it's a good question.
[03:37:30]  I, I, I, I've, I've wondered about this, right? I, I think, I think, I think there's potential there. Obviously I haven
[03:37:41] 't learned Rust and it's been on my list because of stuff like this. I, I think it, when this happens, it potentially could be a huge game changer
[03:37:50] . We're gonna have to see what the performance is and how that kind of works out. One of the things I think I've pointed out to people before is the gap
[03:37:57]  between optimal JavaScript frameworks and the optimal JavaScript is much smaller than the gap between optimal Rust frameworks and optimal Rust. Whereas I'm like, like at this point, like we've
[03:38:09]  optimized the JavaScript side closer to vanilla and the framework side more than it has been on the, on like the Rust side. And I'm not sure. Uh, but
[03:38:20]  if, if, if, if, if going straight to WASM past JavaScript is like a 20% performance improvements across the board, then like, and it doesn't affect
[03:38:30]  load times and stuff like that, like the right trade-offs then yeah. I mean, that is where we are. Like maybe that is the next thing. And
[03:38:37]  you should just wait past what I'm talking about and go there. But I feel like from a timing point, we're going to hit these perfect Java, like not
[03:38:46]  perfect, but like this realized JavaScript isomorphic frameworks, like I'm talking about in like react server components is even kind of part of this story. Next year, sometime
[03:38:56]  2023 sometime. We're going to, we're going to, we're going to see what that looks like. We're, you know, we'll have Marco towards the
[03:39:01]  end of the year quick. We'll kind of finish the pieces it needs, you know, let's say 2023 is a year of that. that i i'm not
[03:39:07]  expecting basm for at least another few years like 2025 at the earliest so yeah i guess i guess we'll have to see yeah i mean streaming i don't know we'll
[03:39:24]  see what happens with data i i i wonder if i i think we're i i think i think i think i think i think there's also potential to change the way
[03:39:37]  that we distribute our apps you know like i think we're just like the single function you know at the edge might just not even be the thing to be fair this is probably
[03:39:49]  something that matters more scale like and like and by scale i mean complex apps with lots of parts and pieces so maybe this is just not really a concern and you know any
[03:40:02]  kind of serverless is just deploying now and it's easy and you don't really have to worry about those levels of details i do think solving the data question is going to
[03:40:10]  be a the big question coming up um obviously i'm a big fan of like yeah i i i'm big fan i've been a big fan of streaming because i think
[03:40:20]  that it makes it feel almost like jamstack like it's like just the apps immediately there on the edge it's like hitting a cdn with the static content it
[03:40:29]  feels like that and then dynamic stuff comes in almost like it was client rendered or client grab but it was from the edge so it's like a little faster maybe but you know
[03:40:37]  i i was talking to guillermo um from rusell and he he was like you know we're looking at all means of caching stuff like he's like
[03:40:46]  we can even cache stuff at suspense boundaries and like like he was telling me some really cool things and i i you know they kind of got this vision for what they like called
[03:40:57]  the dynamic static or something like that where you know it's like taking i granular isr at a subpage level and like kind of wiring that all in as part of
[03:41:08]  these solutions like they're thinking some really cool stuff to kind of orchestrate this at a wide scale and i i know they're not the only ones i know people cloudfl
[03:41:20] are are thinking along these lines too right and i'm sure you know netlify's working on the new edge solution you know and like this is just the next thing
[03:41:29]  in this infrastructure that's coming out rescript it looks like a really sweet language honestly i i just wish it worked for us with solid but it it looks cool i don't
[03:41:47]  know i i think i think i think javascript has a sort of staying power it wouldn't do whatever like typescript you know it's kind of supplanted it
[03:41:56]  a bit but it's still kind of javascript i after this we're going to end up with some other kind of language that probably is a like good on the back
[03:42:04]  end and the front end it does a whole picture but i said i feel like we're still several years from that yeah great comments all around on this chat sorry one of
[03:42:19]  the biggest problems with truth spas was taking things out of the url and hiding in the local state lately we've been figuring that out yeah yeah yeah i mean yeah we
[03:42:26] 're just asking for it essentially if one it is tricky i did live in the age of dot net like postbacks and where you have to serialize everything and these it was
[03:42:37]  this really terrible back and forth like the whole isomorphic single app vision predates the single page app or it was there right at the beginning of the ajax like
[03:42:49]  before we saw javascript frameworks really take off you know and become a thing people were trying whatever they could to make their server technology not like work in a really interactive way
[03:43:00]  and not dirty your hands like dot net circa 2005 ish 2006 you could write whole apps without writing any javascript like all in c sharp on the back end and
[03:43:11]  they were doing partial ajax page swap outs like kind of like turbo like stuff where you like doing html partials and stuff and it's all javascript handled
[03:43:22]  and they're serializing the data automatically back and forth for the communication and all this stuff but you didn't write a single word of javascript the c sharp generated
[03:43:30]  the javascript from like like the code to run dot net and it was the biggest beast of garbage like ever like i it just it was terrible but and the complexity was
[03:43:42]  there so i i i am sometimes worried about these solutions like i feel like quite often the script to kind of getting that key new solution in that space that changes things isn
[03:43:55] 't about just solving the problem you actually have to simplify some aspect of it make it easier and sometimes that often comes as a deopt but it's an acceptable deopt in
[03:44:05]  the new world of things and i think that that's interesting because like react react was a deopt like i know it's funny call it but they were less like okay look
[03:44:15]  this data binding stuff everyone's doing and all this reactivity it's way too freaking crazy it's like bouncing around like ping pong whatever you know and you know all this
[03:44:23]  imperative jquery code and all this stuff just big pile of garbage what we're going to do is just re-render everything that is a deopt that is that that
[03:44:32]  doesn't make any sense why would you just re re-render everything like it's like by its very nature it's going to be worse but change some element of it like
[03:44:43]  it's not re-rendering the dom you know and the simplification that came from that completely changed how we built apps but it's based in challenging an assumption that
[03:44:56]  we take for took for granted which was like no like we got to get more granular we got to get better at updating stuff and they're like no screw it just re-
[03:45:05] render everything that's the kind of mentality it takes to to really change the world i it often comes with like a step back to forwards kind of thing and don't get
[03:45:18]  me wrong i hated react for it i was like you're wrong fine-grained updates is how you get the most performance and all this stuff right and here we are again
[03:45:26]  full circle and we're like yeah fine-grained updates is how you get the most performance but like react was right for its time you know i mean like they were
[03:45:39]  correct the solutions back there were were not great um they needed work i think we've improved and we figured out this the solutions for those problems but in the meanwhile a completely different
[03:45:53]  paradigm uh sprung out and that's where we have it it's good that these different things exist yeah yeah exactly i'm hoping this gets people thinking come back ask more
[03:46:14]  questions let's just keep it rolling right yes i will i will do cloud for pages it's just yeah i've been so used to workers it looks like pages is a
[03:46:26]  really nice deployment story like like i just saw in terms of just doing it on github um it probably isn't that much work um so yeah i will i will add
[03:46:37]  pages maybe the worst uh decision to make for being moving up it was miserable yeah i i i think kb kb kb has its uses i'm not sure if
[03:46:57]  databases it exactly but i know they're working on stuff um so i'm interested to see where that goes but i i think there's certain practicality like in my opinion it
[03:47:08]  takes years to get solid data like that's that's that's a field that takes a while it takes a it's not like a it's not like javascript frameworks
[03:47:19]  right it takes it takes a long time to establish the right like databases are not something you just go into uh you know willy-nilly so to speak um and
[03:47:31]  i i think it's just going to take some time on that side is it here sorry i'm like catching up on like 10 minutes behind streaming would be slower than already
[03:47:46]  live js runtime in the browser requesting updated data yeah i mean streaming is only really consideration on mostly initial data right um yeah i i think yeah the situation that i was explaining with
[03:48:04]  streaming um 10 minutes ago when this comment was made was more along the lines of like uh uh how should i put it it was more along the lines of um like when
[03:48:15]  you don't have the data available at that point you can just send you know page layouts and it's like the there's there's other things that can kind of go
[03:48:29]  out there but you're right there's nothing we can do about that latency it's going to take to get to the database we can just make it feel nicer um but ultimately
[03:48:37]  it doesn't make things any faster um i yeah okay so back to here it's back to the routing thing clever we do quotes splitting where each route is an entry but
[03:49:02]  the depth graph doesn't know which modules invoke which routes because we use yours yeah i i am yeah i'm not sure if i'm completely following here uh because we we
[03:49:30]  do uh like i i use plugins that analyze the the bundle and then look at the route data paths from the code splitting to to see what assets are loaded and stuff i
[03:49:42]  i think there's tools working here i'm not sure i'm completely following what's what's what's being said here but i just wanted to like i think routing is given
[03:49:52]  a lot of consideration in terms of how um bundling and asset handling is we did talk about this a bit at the beginning um i have to admit i don't have
[03:50:07]  the biggest comment on this i think i'm not sure this achieves what people want it to achieve or think that it achieves i think though that on like like for like
[03:50:18]  the people who are using js docs already case like it's kind of nice but beyond that i don't i don't think this is necessarily what everyone expects it to be
[03:50:29]  but maybe that's okay i maybe i just don't care enough because i'm probably not going to use it anyway so yeah but i did cover this a bit at the beginning
[03:50:38]  of the stream oh okay i think i've caught up to the end of the comments that was that was that was a that was a that was a bit of a sp
[03:50:49] iel there um it's good yeah no i i think i got what i wanted out as spelt kit i i know there's more things to check out but um that that
[03:50:59]  was what i mostly wanted i wanted to see how i was handling the kinesthetic routes and i want to see the performance i want to see what the authoring experience was
[03:51:05]  i think all the stuff was really good i was confused a bit a couple points you know around the whole like loaders i think those are new or not loaders sorry
[03:51:13]  the it's a term yeah they have two concepts for data loading on the page and then while they're yeah they seem kind of conflicting um so yeah i i think i think
[03:51:26]  uh i can see why it's just yeah i think i think what's happened is the targets mood during the course of developing this and they're just kind of like oh yeah
[03:51:37]  we need this too and this and this has happened on solid start as well i think it just we just need a little time kind of refine things out but i i think
[03:51:44]  salt kit's already in a really good place it was really easy for me to pick up and whatnot so um i i think it's i think i i think and it looks
[03:51:51]  like they are starting to play with some of the exciting stuff that i was hoping they were starting to play with so that is really cool um so what do we got here
[03:52:02]  uh i should try next yeah um view for some reason i have just a hard time with for some reason um even though the composition api is like like my jam like it
[03:52:14] 's like it's it's like the same as solid you know for some reason view templates and authoring and everything just feels so awkward and every time i try and go
[03:52:23]  in i haven't tried to be fair i haven't tried next js either so i i missed the the big ones um i was so focused next always was hard for me to
[03:52:32]  get into because i i i kind of understood what suspense meant and transitions and all the stuff that reacts chord was doing so i in solid was kind of doing the same stuff so
[03:52:42]  i was trying to design a framework that would be built for those technologies and next js always i looked at it i was like oh this this is like completely in the past like
[03:52:50]  you're just not using the right patterns by the time i got into this like i got into this game late i i i got really heavily into ssr and j
[03:52:57] avascript in 2019 time period and your next had been established already for three years but like yeah or just 2018 time period but like at that point i was just like yeah next
[03:53:07]  is not the way it is but they are changing i just yeah i just i just i just never got into it and nux was kind of like also on that boat
[03:53:18]  if i have time but it's kind of like if i have time i'll look at ember and uh and or actually no ember i mean angular as well soon uh
[03:53:27]  if not next stream the stream after uh i expect some solid content in the next couple streams a lot's happened on the solid side and we've been exploring other frameworks it's
[03:53:37]  time to come home and uh kind of bring it all together i mean there's a reason we've been exploring this is all building towards you know the stuff we've been
[03:53:44]  doing with solid um and uh so you can expect some more solid content coming very soon all right yeah thanks for joining us tonight good night can we do a stream together where
[03:54:01]  i show off next plus trpc yeah i mean i saw you do solid with tr trpc um and i think i think the patterns of next like they are fine
[03:54:11]  i just meant like nexus actually core thing like git server props and all that kind of crap is is is just is just that i i i think i think you build great
[03:54:21]  apps with next i just meant like i think the some of the core data loading primitives and all that kind of stuff it's all changing yeah this this is that it
[03:54:39] 's like with any other kind of technology it is interesting though because it's i what you have to do you know what edge is it's the new jam stack it doesn't
[03:54:54]  really suit everyone but it's gonna like i think it's for like like i'm kind of surprised netlify isn't there yet this is gonna i think this is
[03:55:04]  gonna be their jam you know so to speak like it's just gonna be really easy just like deploy a function at the edge cbn get that whole feel and except now instead
[03:55:13]  of the client doing the dynamic parts the edge functions doing the dynamic parts it just fits really nice i i think i think i think it's gonna take more work for this
[03:55:23]  to actually be the like go to application framework and the thing that scales i think i think there's more pieces but it is really cool to have a network of compute so close
[03:55:36]  to you i feel like we can do something with that it just yeah it's not it's not yeah it's not it's not there yet yeah night everyone kind of
[03:55:46]  signing off we're getting to the four hour point it's the longest solo stream i think i've done yeah yeah i mean it was good for its time but like there's
[03:55:56]  a lot of bad patterns around that like people what's it called like react pre-pass and stuff where let's render the app once to figure out what the data fetch
[03:56:05] ing is and then render it again like just just i mean it's fine but just stuff like that is just not like there's a reason react team's been spending years actually
[03:56:13]  solving these problems and knowing the solutions i could tell that next was out of sync with them but now with the sub there and that like they're they're they're tied to
[03:56:23]  the future just like you see the patterns svelte kit next is going to be the is basically the official react core team meta framework it does put remix a little bit
[03:56:35]  at odds as react goes from a library to a framework more and next is kind of that framework so i think they'll work together but i i think if you felt friction about
[03:56:45]  new react features like partial you know react server components and streaming from remix i think it's just a sense or feel that reacts picking favorites um you know wait jesse but
[03:57:06]  for me the edge computer what i i mean it's kind of the same thing right like you just view the edge as like a cdn kind of and then yeah i
[03:57:14] 'm not quite sure i'm sorry i follow that one if you do using salaries then you could just literally just pre-underation and push it to a cdn
[03:57:33]  yeah i mean well i mean there's there's still some latency right like like i mean even if not like you still it depends on if the data is on demand or
[03:57:46]  not i don't i don't know if centralization is a thing i mean obviously that's a latency kick but i mean like what i'm getting at is if you had
[03:57:54]  jamstack you statically rendered most your page maybe and then you dynamically loaded some data on top i'm just saying that dynamic part now maybe is fetched at the worker
[03:58:05]  level so you remove some of that cascading waterfall so like essentially hit the edge function return the page start streaming in that data so you start fetching on request time
[03:58:18]  instead of waiting for the page to get to the browser then requesting the javascript then running the javascript then starting the fetch to some data that's far away it
[03:58:26] 's it's just optimizing that kind of like static app shell kind of thing yeah i yeah i mean but i i don't know if they're ready yet too i think
[03:58:43]  that's a big bet on the future of react too i think so i've seen people push up against it like not like what react's doing and actually like server props i
[03:58:51]  you know i've had even people in like the solid community kind of being like you should add get server or whatever static props or whatever the whole thing is to solid start i
[03:58:59] 'm like no i'm not doing that but like they really believed in it so yeah right but i'm saying in jamstack it was also fed like all we're
[03:59:12]  doing is like it's the same thing we're just fetching sooner like you always presumably had something like you could have a perfectly static page sure but i'm saying is if
[03:59:24]  if you if you were fetching from a database we just get the fetch from the database sooner like like i i don't i i i don't see how it's
[03:59:36]  not a positive to to use the you know the the edge function here because like we're just we're just removing a bit of the handshaking and we're just
[03:59:49]  getting the day going sooner let's see there would be no need to cash something like user safe profile there yeah i mean yeah i mean i i i guess the edge itself
[04:00:17]  doesn't change that equation you could have already been doing that somewhere else it's just the speediness of the initial response right to me as that's why i view it a
[04:00:26]  lot like like jamstack like it's the it's the stuff that's static you're getting basically the same time and you're doing the dynamic stuff at the first
[04:00:38]  request it's just it's minor i suppose but it's it's like it's still happening sooner i just came in what is solved and why is all better um oh
[04:01:03]  god i i i don't know i i need more specific than that so you didn't have an inch function the community that you're so slow at the point you've
[04:01:28]  managed uh okay so what you're saying is you you you might as well just do everything yeah i'm i'm mostly concerned on the initial response to like yeah it depends
[04:01:53]  where the bottle you saw you saw my streaming examples right you can load the html you can start sending the static assets the css the javascript sooner and
[04:02:07]  that that's that's mostly what i've been i've been i've been getting at right like if if you can respond sooner and get that in place it kind of the
[04:02:21]  the data fetching is happening anyways i suppose what you're saying is the handshake from the edge to initiate is that much slower so like we're just pushing the latency
[04:02:34]  back on the data somewhere else so even if we can load the assets in the browser sooner the database is taking longer for the data to come in yeah i mean i i think
[04:02:51]  streaming is a big part of it and yes i'm just going to let you guys play out these comments here so get to the end of it yeah the the the
[04:03:30]  the as i mentioned uh already uh i i i actually maybe not on this stream actually it was when i was talking to jason um on jason's ama um the the
[04:03:43]  data fetching part is still obviously the like the reason everyone's been trying to work on this but i and i honestly don't know if if there's a good solve because
[04:03:52]  even with distributed databases and capabilities like this there's there's still certain industries and certain things where like data privacy data security are actually going to play in as a as a
[04:04:03]  as a as a big piece of it you know and um i don't even know how distributable some of this stuff is i i think basically at least for now edge is
[04:04:15]  kind of like a toy where we get to try some stuff and from like a benchmarkers standpoint like someone just kind of playing with like pure mechanics it's very interesting um
[04:04:26]  you can see the potential there but they're like any of this new stuff there's definitely pieces that are missing um so i don't know uh we could probably go on
[04:04:39]  about this for a while um yeah because i i think i think we've stopped talking about svelte like and the stuff like 30 minutes ago so i'm going to end
[04:04:48]  the stream now because this is went on a kind of a funny tangent but thank you all for joining and uh thank you for asking your questions and uh we're gonna the next
[04:04:58]  couple weeks we should be bringing in some uh some more solid content again so uh look forward to it all right thank you all have a good night