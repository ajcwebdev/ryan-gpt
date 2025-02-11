---
showLink: "https://www.youtube.com/watch?v=JBRgUs9Kp64"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Million.js with Aiden Bai"
description: ""
publishDate: "2023-07-15"
coverImage: "https://i.ytimg.com/vi/JBRgUs9Kp64/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 7-10 minutes long.
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

[00:00:00]  Alright, hello everyone and welcome to my stream today. This is my second stream back and I'm pretty happy to have a guest today. It was funny, I was gone
[00:00:11]  for a month and I felt like, you know, I have a ton to talk about last week but the truth of the matter was I was pretty much far away from everything
[00:00:18]  so I didn't really have as much to talk about as usual and I don't know, it feels like, it's weird to be away for like a month and then
[00:00:26]  find people still talking about the exact same stuff you were talking about before you left and, you know, other than things like milk or whatever. So yeah, I'm
[00:00:34]  actually very excited to actually be getting into some technology today and to talk about something, you know, a little bit different, maybe a little bit new, maybe something you haven
[00:00:47] 't seen before. I've been looking at performance benchmarking, you know, to answer the question of how to render the DOM the fastest or render really anything the fastest
[00:01:02]  for quite some time now. So whenever new approaches, you know, change the math, so to speak, they definitely get my interest. If you all are wondering what's
[00:01:12]  going on right now, yeah. Come say hi. I'm just, I call this the pre-roll killer because if you're on Twitch, it will definitely sit
[00:01:22]  there and play ads for you because I am not so tech savvy as to play ads in a reasonable manner. I guess another thing I can do usually right now is tell people
[00:01:30]  that we're live. live. So give me two seconds. Um, yeah. Yeah. Come say hi in the chat. Oh, sorry. Maybe take a
[00:01:40]  drink. It's getting hot the last couple weeks. Hey. Good. People are coming in. Let's, uh, let's retweet here and we are live
[00:02:05]  and I should put my Twitch channel. I feel like I got a bunch of new subscribers this week for some reason. I guess when you make big announcements people are,
[00:02:18]  uh, um, I don't know. New people find out about the project and find out about streaming that I do these streams. So here we are actually. Let's
[00:02:32]  share my screen for a second. I haven't actually done that. uh, yeah, I'm, I'm, I'm, I am completely killing time right now
[00:02:45] . All right. But no, in, in all se, in, in all, in all seriousness, um, I've been looking at this stuff for quite some time
[00:02:56] . Right. Um, back in 2019 on medium, I posted an article, which was like fastest way to render the Dom. Right. Um, that's the way
[00:03:08]  to render the Dom. And this article is pretty out of date now. I wrote it May 28th 2019, but it was, it was, I'd kind of decided
[00:03:20]  that there was a few different ways that we could render the Dom. Basically there was fine grain reactive, like what solid and surplus did there's virtual Doms like Ev
[00:03:31] ie and, um, uh, what does it not come to you, uh, Inferno. And then there were this other kind of category, which were kind of
[00:03:41]  like, almost like dirty checking, um, uh, library called Dom C and lit, um, is an example of this kind of thing. It's like a single
[00:03:50]  pass diff, right? Um, reactive is about fine grained updates. Um, this kind of lit and Dom C were about single pass. And then there was,
[00:03:59]  um, Inferno and Evie and most V Dom libraries, which I call two passes because you do one pass to construct the virtual Dom and then in second pass to
[00:04:07]  diff it. And I, I mean, sure it's, it's kind of obvious why, you know, these different approaches would have different kind of performance, uh
[00:04:19] , characteristics. But what ended up happening at the end of my thing was that this, this showed me, I think, let's see, what was the final chart?
[00:04:28]  I can't remember, but essentially, um, signals are really good for fine grain updates. The single pass Dom diff was actually really quite good. Um, I had
[00:04:39]  some few other signals libraries and then again, the single pass diff, and then it was the virtual doms that were basically the slowest version of how you do this,
[00:04:52]  right? Basically nothing could beat pre-compilation in terms of optimization with reactivity, but single pass diffing was in many cases, almost identical. Um, after
[00:05:06]  I did this test and wrote this article, I talked to, uh, I tried to, you know, I was like, something doesn't add up. So I actually
[00:05:14]  looked and tried to figure out what the virtual Dom would be the fastest at. And it was through that, that kind of research that I found out, uh, what is
[00:05:24]  it called? The real cost of components. Uh, maybe it's the real cost of UI components. This looks like my, my SEO is not as good as it
[00:05:36]  used to be. There we go. And I took a very similar test and this one, you can tell it was, it was actually only like a month later. It
[00:05:43]  took me a couple of weeks to put this example together. But what I, I had managed to realize was that the virtual Dom was actually really, really good at being
[00:05:51]  cheap when you have millions of components and a lot of the reactive libraries or even the single pass diff ones were not, um, they weren't as optimized for this case.
[00:06:03]  And when I did, did my research in the end, um, it was solid in the virtual Dom libraries that actually did the best for performance. Solid because it doesn't
[00:06:15]  have components. And the virtual Dom libraries cause they had almost no components and it was actually stuff like Svelte and lit that actually did really poorly. And it was
[00:06:24]  really interesting to me because I could start seeing this balance between the cost of fine grain updates and the cost of like doing diffing. And it was, it was sometime around
[00:06:35]  this time. And, um, I don't know if you guys all came here to sign up for a history lesson. Um, but that Dominic Ganaway
[00:06:43] , the creator of Inferno reached out to me for the first time. He'd seen the work that I was doing and he was, he's a very appreciative of
[00:06:50]  the fact that I mentioned that the, like the virtual Dom was not necessarily that slow. Um, and he was like, Ryan, I gotta tell you something. He was
[00:06:59]  like, I've got a version of the virtual Dom that I created, um, that is even faster than what you get solid in these benchmarks. So it's basically
[00:07:10]  the same speed and he's like, he's like, I came up with it while working at Meta on the react team. And we had the choice to go that
[00:07:18]  direction or go into fiber and do like the concurrent rendering. And the team decided that to solve, uh, you know, Meta's, you know, code issues in
[00:07:28]  terms of like how big their apps were and how like state changes all over the place could, you know, basically, you know, blow up cost in a way that
[00:07:35]  like, you're not going to find a micro benchmark. He's like the, we decided to go the other way. Um, and it was incompatible, but
[00:07:43]  he's like, there's a way to build the virtual Dom. That's way faster. He's like, in my head, I think you're on the right track
[00:07:48] . The, the, it's no, it's the virtual Dom, isn't the virtual Dom to me. The virtual Dom, isn't this tree of, of
[00:07:56] , uh, virtual nodes representing Dom elements. It's the holes. He's like, if you view the virtual representation as a holes, which is what you're doing
[00:08:07]  with your reactive graph and solid, you basically have the same kind of characteristics without reactivity. And I was like, okay, I buy it. It makes sense. I
[00:08:19] , I tried some performance stuff like that around Dom C or whatever, but I didn't get anywhere. Um, but I was like, I'll trust you, but you
[00:08:28]  know, until you prove it, you know. I'm just going to have to, you know, assume that, you know, it's something maybe more performant than
[00:08:38]  Inferno, but, you know, we got to measure it. And he's like, he, he just kind of, you know, left me with hints.
[00:08:45]  He was too busy working on, uh, Lexical at the time. But about six months later, the creator of, uh, Dom C came back with a new library
[00:08:56]  called One More, which was essentially a virtual Dom library that basically was single pass, kind of like his Dom C library that worked on the holes. Um, so
[00:09:08]  this is, uh, 2020 sometime. And it was right up there with Solid. He, he, he'd, he'd done it. And, uh, and I
[00:09:16]  didn't even realize the virtual Dom. I just assumed that it was like a better UX or DX for Dom C. Um, so I didn't really pay that much
[00:09:25]  attention. I was just like, okay, he's, you know, still doing good work. And then about a year after that, another library comes out called BlockD
[00:09:36] OM. And again, same kind of characteristics. And at this point, I'm just like, okay, something is going on here. The, there, there's these
[00:09:44]  guys building these virtual Dom libraries that are actually benchmarking, like indistinguishable with the reactive libraries. Like they're basically in the same zone. What,
[00:09:54]  what is, what is going on here? Um, and I realized kind of reverse engineering, uh, BlockDOM that they'd caught, they'd taken the same cl
[00:10:04] oning method that Solid used. Basically the whole trick to where reactivity was fast was because we could use a compiler to extract the, um, static parts. And most
[00:10:14]  VDOM libraries like to re-render the same thing every time, you know, like that's the whole react thing, but these guys had optimized for creation the same
[00:10:21]  way that the reactive libraries had, um, using cloning nodes and whatnot. And, um, I was like, okay, but the thing was the DX around BlockD
[00:10:31] OM was kind of terrible. Um, so I was like, okay, I'm going to keep my eye out for this. Um, this seems very promising, but
[00:10:41]  like there's, there's this, we haven't got to a point where this is really usable. And then about a year after that, that's when I first heard
[00:10:52]  a million JS and again, very big claims, 70% faster than react, all this kind of stuff. And I was like, okay, and sure enough, well
[00:11:04] , you know, you know, I was a little skeptical at first. I, I went in some of my bench parks and it was not terribly fast. Um, you
[00:11:14]  know, it was, it was okay. It was like preact, but it was not, it was not, it's not like breaking up the whole thing. And
[00:11:21]  I was like, okay, well, that's interesting, but you know, let, let, let's, you know, give this a little bit of time and
[00:11:30] , uh, we'll, we'll see where things go. Cause again, a lot of people talk, we've seen stuff like Imba, we've seen lots
[00:11:35]  of frameworks over time, talk about performance. And then when put in kind of like generalized tests, don't quite live up to the same thing. But another six months later
[00:11:44] , Aiden, who I'd talked to a little bit about performance stuff came back and he, he'd done it too. He got right up to the front of the
[00:11:54] , of the benchmark, um, you know, using this block dom technology, so at this point, I'm, I'm, I'm, I'm very interested
[00:12:04]  to see what, what's going on here because we're getting to a point where now there's been several libraries kind of touching on this kind of technology. And it looks
[00:12:13]  like million JS is by far the most popular. I think they just hit 10,000 stars this past week, um, of this approach. So I'm gathering the
[00:12:20]  shortcomings in DX have, have kind of washed over and we've, you know, it's, it's probably time to kind of see what, what this is all
[00:12:27]  about. And I, uh, personally have a little bit of an interest because I've been looking a lot at server components and being like, what the hell does server
[00:12:34]  components have to do this? Well, server components have a, a diffing requirement. And I, I've been diffing HTML, um, or the DOM as
[00:12:43]  a mechanism for the stuff outside of like the static parts that come in from the server. And I was thinking, well, if there is a more optimal diffing that's
[00:12:52]  set up for primarily static stuff, then this is probably something of interest. So I, I, I've started kind of poking Aiden a few months back and I
[00:13:00]  was like, okay, help me understand this so I can see if there is some potential here because there's different categories of problems when you're building frameworks. You know,
[00:13:11]  I usually say I have this kind of thing is like, don't diff unless you have to like diffing is always like the last resort, but sometimes you do need the
[00:13:19]  diff and I'm, I'm kind of interested in what we've got here. Cause I think a more optimal approach or, or way of looking at diffing might be
[00:13:27]  exactly what we need to solve this particular area of problem. As I said, that's a personal thing of mine. It just took us this long to get scheduled.
[00:13:34]  I had conferences, Aiden had to finish up his classes. Yeah, that's right. His classes. Um, we'll talk about that in a minute. And finally
[00:13:43] , very happy to hack to have him here to join us today to actually talk about this stuff. So without any further ado, I'm going to, um, introduce A
[00:13:52] iden to the show. So everyone, uh, say hello. To Aiden, sorry. Let's get him in here. You're muted. Oh, Hey,
[00:14:02]  everyone. Can you hear me? Yeah. I should actually, I should have put a banner up. This is like, so sloppy. There we go. Welcome Aiden
[00:14:11] . Yeah. I know the chat's been going off. They've been waiting for your appearance here. I, you've, you've got quite a few fans. Um
[00:14:19] , million JS as well. Obviously. I know you've been working on this for a while now and people are pretty excited. I can, I can tell. Yeah
[00:14:27] . I, I'm really happy to be on the show. Like I remember like two years ago, I was just like every other week, every week. I was just
[00:14:35]  like watching your shows. And it's really, really cool to be on it this time. Um, yeah. Uh, hi, my name is Aiden. I
[00:14:45]  18. I, um, I'm going to the university of Washington next, this September. Um, and I work on million JS and I assume that's what you guys
[00:14:54]  are here for. Yeah, definitely. Yeah. So as I was saying, when they say finished classes, it's probably final exams and stuff too, right? You
[00:15:02] , you just finished high school. Yeah. APs. Yeah. Everything. Yeah. Yeah. So, I mean, that gives you a little bit of perspective in here
[00:15:11] . How, how in the world did you, no, even before I go there, how in the world did you get started working? I was going to say, how
[00:15:18]  did you find time to work on JavaScript framework while you're in high school? But I was actually, how did the world do you even like, like, like, like
[00:15:23]  find yourself in a place to get started on working on a JavaScript framework while you were in high school? Yeah. I mean, like, I think it's actually much
[00:15:32]  more accessible than you think it is. Like the nice thing about JavaScript frameworks is that like JavaScript is an easy language to learn. And as a high schooler, you know
[00:15:40] , with that time I have, I can learn JavaScript and frameworks, they're all open source. There's, I mean, there's tons of articles on dev too,
[00:15:47]  like with Ryan or, or literally like, there are like five articles on how to create a virtual DOM. And so they're actually like not hard to get into if you
[00:15:54] 're just randomly interested in stuff like that. Okay. Well, I guess the question is what made you randomly interested in stuff like that? Because I mean, I,
[00:16:02]  like, I, I, I guess, I guess I built some game engines when I was in high school. I, I, I, I, I was like,
[00:16:07]  I'm going to, I'm going to build video games, but you know, I like, I video games are cool. I aspire to build the next giant JRP
[00:16:16] G or something. That was like my hope. How do you get into web frameworks and web framework performance? Yeah. So I mean, it all started with like,
[00:16:27]  so in fifth grade, our, uh, middle school or sorry, our elementary school, like issued the first round of Chromebooks and we were like the pilot grade and I
[00:16:37]  didn't have a computer at the home in the home. So that was like my only access to any sort of technology or internet. Um, so it was really cool
[00:16:44] . Cause like, I got to play like cool math games in my Chromebook, like who, which fifth year five, five grade, fifth grade does not like that.
[00:16:52]  Right. Like it's awesome. But like, as always school districts finally hire an IT professional and they implement firewalls. So once it got blocked, I was like
[00:17:01] , okay, how do I, you know, play cool math games at school? And I found that, you know, the iframe element wasn't blocked by,
[00:17:10]  um, the, the firewall. Cause it, what it did was it checked the URL and it was like, oh, nothing wrong with that. Um, so I
[00:17:17]  literally, that went on for another six months and I, then I found more about like, sir, like sending it, like fetching the HTML from a certain page and
[00:17:26]  like figuring out cores issues. And from there it just kind of like interested in a lot of things specifically like rendering though. Like I remember I was implementing some sort of like
[00:17:37]  user chat so people could talk to each other inside the website and I was using inner HTML and like the thing about in HTML, it's terrible. Right. Cause I
[00:17:47]  like the more users you have, the more, you know, HTML get the parse and reflow and repaint. And so I got it, I got into like a
[00:17:54]  virtual dogs and they're just, yeah. Okay. Okay. Okay. Okay. So just so I'm, first of all, your initial story there is actually very cool
[00:18:02] . I love how it's always like that. Like the first wave of technology that comes in, people are never really prepared for it. Um, and like, obviously
[00:18:10]  this would give up my age, but like when I started going, I remember in high school we still had like hidden, um, message boards busses people had set
[00:18:20]  up from the, from the early nineties or whatever, like pre internet age. And I remember hacking around, trying to like get around the, like what they had set
[00:18:29]  up and it was not very hard, um, in the mid nineties cause of, you know, the internet was new. People didn't do that. But I,
[00:18:36]  it's a whole other thing that when they're actually putting the computers in people's hands. So I like, I like hearing that there's still room for that kind
[00:18:42]  of getting around stuff. Cause that was, that was essential. I remember like opening something up in Microsoft word, going into the file, like the, into like open file
[00:18:50]  dialogue and then right clicking as a way to get around their security. So I could open file, like I could access folder structures that were hidden through the open dialogue.
[00:18:59]  And anyway, but yeah, so I can relate with that a lot, but the, the, the chat that you're talking about with this inner HTML, what, what
[00:19:09] , what motivated the chat? What, what, what, where did this come from? Was this just something that you had with you and your friends or what, what was
[00:19:16]  the idea here? Yeah. So, uh, my friends and I use discord a lot, um, especially in like eighth grade era. Uh, and the thing about like
[00:19:23] , it's, it's, it's, it's blocked on the Chromebooks. There's like no way to get past it. Right. Cause there's like
[00:19:29]  so much stuff associated with it, you can't block it. And so I was like, okay, what do, what if we could go in our Chromebooks and chat
[00:19:33]  with each other in like a chat room? And so it was like really bad implementation. It was like, I had a web socket server and every time would, anytime you
[00:19:41]  sent like a chat and input, it would just send this, the server. And then it would like write globally for every user in the connected to the socket server. And
[00:19:51] , uh, there, there were issues with like, um, XSS. So people like initially who are like entering like HTML and like breaking this stuff. Um,
[00:20:02]  but yeah, like, like, I know, like when I realized international work, I looked into like, I didn't realize, so I probably should look into like how
[00:20:12]  like the DOM API work first, but I didn't, I just kind of dove into virtual DOM. Cause I was like, okay, what does react use for this
[00:20:20] ? Um, yeah, it was, it was like a really weird mix of like express socket IO and EJS. EJS. If anyone knows that.
[00:20:28]  Okay. Okay. So yeah, that's interesting. Cause yeah, I mean, it's a, it's a whole different time period here in that like, you were
[00:20:36]  aware of react when you're like, okay, how do I build a website and react was a solution. So it's it, you know, like react, you know
[00:20:42] , I think of, you know, I do a lot of, I've done hiring in the past. I think a lot of boot camps and stuff, but even
[00:20:48]  when I was, I like react never showed up anywhere like, yeah, the level of programming sophistication, I'll say at high school, even when I was taking a
[00:20:58] , I was in the IB program and I was taking, you know, advanced computers was not nearly as sophisticated. We're in a very different place here. So you were
[00:21:06]  just like, okay, I need to build something. Let's look, let's just look at that. Um, oh, sorry. I, I missed this right at
[00:21:12]  the beginning. We got a whole bunch of gift subs, like right before the stream started, I was like way too, you know, on my monologue here,
[00:21:20]  but I want to thank our, uh, rat, ratty, I can never say anything. R-A-T-I-U-5, rat-t
[00:21:28] -u, I don't know. Um, in any case, thank you so much for gifting, um, 10, uh, subs to the channel very, very
[00:21:37]  much. Um, yeah, this is probably like leet speak and I'm just like really like ratty-us or something, but anyway, thank you very much
[00:21:46] . And yeah, all right. So, um, sorry, sorry about that. Okay. So you base, I love this story because it's like one out of like
[00:21:59]  both innovation and one out of like, uh, like necessity kind of like where you're like trying to solve a real problem. And then you're just like, well
[00:22:10] , how can I just like hack around this and make something that works for us? But yeah, it actually led you to looking up, discovering the existing solutions a little
[00:22:20]  bit and then going, okay. But okay. So that's fine. You could have just used react. What, what, why, why look at doing your own thing
[00:22:28] ? How did that happen? Okay. I feel like maybe this is just like, I have like N equals like three, but I feel like every framework author doesn't
[00:22:36]  want to use the status quo tools. They just build their own for no reason. And then they figure out a case for it. I feel like that is. Okay.
[00:22:44]  Okay. So this is just like curiosity. You're just like, oh, I could do something like this. Yeah. So I actually initially didn't build a million
[00:22:53] . I built a library called Lucia. And like the principle of it was like, what if I could like, cause like I didn't know react and I didn't
[00:23:02]  like JavaScript at the time. And so what I did was I basically recreated Alpine JS, but significantly worse. Like it was, uh, it was like imm
[00:23:12] utable, but it was facet list rendering, um, for my case. Um, and then eventually like I realized, okay, this is not the perfect approach. And
[00:23:21]  I kind of went towards the billion virtual Dom stuff. Right. So yeah. So Alpine JS, like people seeing here, you basically what built bindings into the HTML
[00:23:32] , uh, like string bindings, and then use some kind of an event system to trigger stuff, updating almost like, I mean, Alpine uses views reactivity
[00:23:41]  these days. Um, so did you like use a reactive system at all, or was it just like an event system at that time? It was more of an, uh
[00:23:50] , it was like, there was like state and so you could have state. It was like really janky. I had like a, like a proxy and like every
[00:23:57]  time you wrote to the proxy, it would like trigger some subscription thing. Um, I didn't call a subscription at the time, but like, it would like compile
[00:24:06]  the template first, figure out what each like, uh, directives dependencies were, and then run certain, like, make a subscription for each of them. Run them
[00:24:18]  based on the mesh dependencies. Right. Like, okay. Yeah. Okay. Yeah. No, that, that makes sense to me. I I'm following. Okay.
[00:24:28]  So at a certain point, you're like, this, this is just not good. I'm going to, I'm going to, I'm going to do better
[00:24:32]  than that. And you started looking into what would become million. Um, what, okay. So you were aware of the virtual DOM setting up a simple virtual DOM, like
[00:24:41]  a Hyperscript function is pretty easy. Anyone could probably go do that over a couple hours on a weekend and get like something basic working. Right. What, what got
[00:24:50]  you to take it further than that? Yeah. I, I mean, it's kind of the, kind of the same mantra that you mentioned earlier. It's just
[00:24:58]  like, okay, so why does a virtual DOM like status quo, like, why is it slow for the benchmark cases? And like, um, just kind of like making
[00:25:08]  a way to do it. Like my first approach was like, okay, Svelte uses a compiler. What if we compile stuff and then it would make it faster maybe
[00:25:16] . Um, and that did not work. Um, so we, we use a similar approach to how Inferno did it. Um, basically we just kind of
[00:25:24]  like, like proactively ran the, the Hyperscript nodes. Um, and so it would just become like plain objects. Yeah. And then also we assigned flags.
[00:25:34]  And so like, there would be, there'd be like, uh, like if it hit some case, like if it was like a child, it would only run certain
[00:25:42]  parts of the code. So it didn't have to do conditional checks. But like, that was like a very small improvement, like it, and actually it was slower
[00:25:50]  than react in the benchmark. Yeah. So, so like, if it, like, it probably was down to the computation. Right. But okay. Like, because were
[00:25:59]  you looking at, like, I mentioned when I first saw million, I was like, okay. Uh, another person claiming to be super fast. I'll wait till they
[00:26:07]  enter the benchmark. Were you already looking at the JS framework benchmark by that time? Because like you posted some pretty like boastful numbers before you ever entered the JS framework
[00:26:18]  benchmark. Um, and you, and I remember that, um, because obviously I, I pay attention to the performance stuff, but like, what were you using or how
[00:26:28]  were you benchmarking or that stuff at that time? Yeah. So we had our own like virtual DOM benchmark. And so like, it was really janky because
[00:26:37]  like, I saw the JS framework benchmark and I was like, oh, this is for JavaScript frameworks. And I just saw like react or Alpine install. And I was
[00:26:45]  like, okay, what did I did? And I didn't see like the existing virtual doms on there. So like snap dom, virtual dash dom, whatever. Yeah
[00:26:53] . Yeah. So I benchmarked it. And then, uh, I think Marvin made a post where I was like, okay, this is notation is flawed. And this
[00:26:59]  is why, and this is why. So like, like what we were doing is. Yeah. We were like, basically we have like a conversion thing where it would
[00:27:07]  convert million nodes to like whatever nodes. And that was like a huge bad. It was really bad. Cause we were cloning them. Like we're doing structured clone essentially
[00:27:17] . And it was just like deep clone. And that was like half of the. Overhead. Yeah. Yeah. I, I, I gotta give mad props to
[00:27:26]  Marvin. I mean, you can take your own things there, but I've seen people fight over sillier stuff on Twitter. Um, or like in public about, you
[00:27:34]  know, when people make claims and I saw, you should see some of the hostile stuff around Dimba. Um, because they, they, they've just kept going how
[00:27:40]  they were 20 times faster than react. And like eventually like headline, they weren't, but, um, like Marvin did the, and for those who don't know
[00:27:49] , Marvin, uh, Heigmaster, uh, is, uh, one of the main devs on preact is, uh, now full-time on fresh.
[00:27:57]  He, instead of like even pointing at, at the million project, instead of like going there publicly and like kind of going like, blah, blah, blah. He
[00:28:06]  just wrote an article. That's like things that you could do wrong in benchmarks. And in the most subtle way, he was like, was putting it out there. Like
[00:28:17] , did you, did you realize that he was sort of, you know, communicating? No, I realized. Yeah. I could tell. Cause like, that was like
[00:28:27]  exact. I remember implementing that and read the article cause I was like, okay, let's check this out. And it was like, this looks exactly like our code
[00:28:34] . And I was like, hold on a minute. Wait a minute. I kind of just went back to the table and was like, okay, we're doing this all
[00:28:41]  wrong. Yeah. Um, yeah. Still, I, I was, I thought that was classic cause we, I think I might've already talked about by that point,
[00:28:48]  uh, at least one point. And, and I remember thinking like, cause as I said, instead of being, everybody, no one wanted to be aggressive towards you.
[00:28:58]  We've had, we had some problems, the guy from Mikado as well. We were like, let's encourage him to do better without, you know, making
[00:29:05]  a big deal in public about it and trying to like, because I got a lot of questions. People kept on coming in to me like, what's this million JS thing
[00:29:11] ? What's the thing? And I just like, uh, when it gets in a benchmark, I'll tell, I'll tell you about it. I just kept on
[00:29:16]  pushing people off. I'm, it made me incredibly happy. Um, when I just said, I don't know, it was like three to six months later,
[00:29:23]  you came back and no more fake, but you know, not the fake's not the right word, but like no more benchmarks benchmarks with unforeseen, uh,
[00:29:32]  you know, uh, overheads, you know, manufactured overheads. I know that wasn't intentional, but like, as you said, and you know, this is
[00:29:41]  the real thing. Um, and I'm glad you kept with it. Cause I said, there's been, there's only a few people you mentioned how it,
[00:29:48]  you know, wasn't maybe that hard. You just get started, you can build something, but there's actually very few people who've gone through the process and just keep
[00:29:58]  on pushing and pushing and pushing to get to the point where you end up with one of these frameworks that actually sticks around. Um, like I knew this, I was hiring
[00:30:08]  for Marco, finding people with a skillset with either, you know, AST compilers for this that you use for kind of templating stuff. People understand
[00:30:16]  the runtime performance, the DOM overhead, um, you know, understanding the DOM engines well enough to understand how to do optimizations for, uh, you know, monomorph
[00:30:24] ic versus polymorphic data structures. There's actually a small handful of people who are actually suitable to hire in, in that role. And the last thing that I
[00:30:34]  wanted or any of us wanted was to come off as discouraging. So I'm very, I'm happy that Marvin did stuff the way he did and that it had
[00:30:42]  the right result. Um, I know this is me coming from like an outside perspective, because as I said, now we have the million JS we have here. And as
[00:30:50]  far as I could tell, it's legit. So, um, anyway, I just wanted to throw that out there. I'm, I don't know if you had
[00:30:56]  any perspective around that whole time period, but, um, it's, it's, it's good to hear that you saw and then you learned and then you made
[00:31:04]  better. Yeah, no. Yeah. It was definitely a wake up call. Like I was like, cause I, I've been working on that project. Like it was
[00:31:13]  like my second library. So it was just like a whole learning curve. Like, I know you said like people take like two or three hours a weekend to make a virtual
[00:31:22]  DOM. It took me like a month cause like at that point I have like no idea what I was doing. Um, yeah. So yeah, it was just like
[00:31:31]  a lot of, like for me, it takes a lot of time to figure out things. Um, so, um, like you said, going, just going back to
[00:31:40]  the table starting fresh was like a nice, nice change of events. Yeah, no, that's awesome. And when you did you like, what, like, what
[00:31:53]  did you like, where did you go next? So what did you look at? Cause you're like, okay, this test is artificial. Um, millions doing good stuff
[00:32:01] , but it's kind of middle of the line. What, what did you look to, what did you find that got you to the next step? Yeah, for me
[00:32:10] , I, I just looked at the ones that ranked high. So I looked at Evie, I looked at Inferno. Um, and to be frank,
[00:32:16]  I looked at them and I didn't get anything from them. Like not much cause I didn't understand how they worked. Like I still don't understand how they're so
[00:32:24]  fast. Like it's probably like monomorphism, some wizardry. Yeah. But like, yeah. Yeah. Yeah. Yeah. Because when you look sometimes at the
[00:32:33]  code bases, uh, for a few though, Evie was hard for me to follow personally, but Inferno is a lot more straightforward. You look at it and
[00:32:36]  you're like, for the most part, they seem to just be doing the straightforward thing. Like, why is their version so much faster than my version? I I
[00:32:43] 've, I've been there. Um, and then over time you go, Oh, like all those things you look at that, like, you might think are just like
[00:32:50] , why would you do that? Or I could write this much shorter or simpler. And you're like, no, they were making sure that the object was the exact same
[00:32:56]  shape every single time or that, that they allocated it this way, or that it happened at this point in time. And it's funny. Sometimes you, it's
[00:33:06]  almost impossible to know that stuff upfront and you almost, there's like a black art. I feel like, I don't know. Yeah. Where you like, I,
[00:33:14]  I personally, I learned a lot of stuff through trial and error, which probably can lead to the wrong conclusions. I don't know. What was your experience like?
[00:33:22]  No, I'm for sure the same. Like, um, yeah, it's just like a lot of like, I remember I, I was working on like text insert
[00:33:31] ion. And so I had like, um, I still don't know if it's right. But like, uh, if you could, I was doing like document.
[00:33:37] createTextNode and I found that text content, like sending text content was faster than, you know, uh, replacing the, the node. Um, and also
[00:33:46]  like, um, for some reason, oh, uh, like selecting a child. Like selecting a child node by this index is slower than the next, like traversing
[00:33:56]  by next sibling. Sibling. Yep. Yeah. Yeah. I learned that one from the Dom C. Yeah. That's, that's a huge one. It
[00:34:03] 's cause it's cause when you, uh, access child nodes by an array, they have to actually get the whole array because they don't know what, how you're
[00:34:11]  going to access it. And in the actual internal C representation, it's a link list. So if you use next sibling and previous, you know, sibling and you walk
[00:34:19]  through, it will just go to the next one and just get what you need. But if you, as soon as you go child nodes array index accessor, they
[00:34:25]  have to build the whole list and they usually do it at that point. So the second you do that huge de-opt anyways, um, but yeah, how do you
[00:34:33] , how do you learn this stuff? So, um, yes. Okay. So similar story, a lot of trial and error. Um, but, uh, when
[00:34:40] , when, when, when did, when did the block VDOM kind of come into your mindset? Cause EV, uh, original EV or I guess it was EV
[00:34:50] 2 at the time did not have a block VDOM. Inferno does not have a block VDOM. How, how did, how did that come
[00:34:58]  into your radar radar? So to speak. Yeah. I remember you tweeted about block, block DOM and I was like, okay, they're claiming to be literally the
[00:35:07]  fastest library. I'm like, there's, there's, they gotta be doing something. Right. And so I, their code base was like also hard to read
[00:35:14] , but at least it was like conceptually different where like the way they, so like when, when you like, when I finally kind of understood it conceptually, um
[00:35:23] , it all like kind of clicked for me. I was like, oh, this is so much faster with certain trade-offs of course, but like it was so much
[00:35:30]  faster than how we were doing with virtual, like normal virtual doms. Um, and so, uh, like I spent like three weeks just trying to like scratch up
[00:35:40]  my own implementation. Like how, of, of how I understood block DOM conceptually. Um, yeah. Yeah. And then there it is kind of, I,
[00:35:50]  I like put it on the JavaScript framework benchmark after like a couple more months of working on it. Um, and eventually just kind of spiraled from there. I'm just
[00:35:59]  looking at the JS framework benchmark off screen for a second. And they remove my favorite filter, the one that removes all the warning message versions of, of, of it
[00:36:07] , which is kind of disappointing to me because it's actually very helpful to remove all the noise. Oh. You know what I'm talking about? Yeah. I know what
[00:36:16]  you're talking about. It's not, it's not, it's not, it's, it's, it's not here anymore. Wait, that's actually,
[00:36:24]  what was the reasoning behind that? I don't know. I mean, for people who want to see what I'm talking about, I'm just going to share my
[00:36:32]  screen for two seconds to show you what I'm talking about. Cause most of the time I ignore stuff with these warnings because like they, they're kind of cheating around the
[00:36:41]  list. So you go up. It's funny though. There's a new one. What's 1261, 1261 manual caching of VDOM nodes. Ooh
[00:36:48] , there's a new. I suggested that one. Yeah. Yeah. Yeah. There's a new, there's a new cheat. Oh, you were. Oh
[00:36:56] , so you're not doing a, you're doing a. We're doing DOM delegation. Yeah. I think 801 doesn't matter. 801 is fine. I
[00:37:04]  don't think anyone needs to mark on it. Yeah. Look, but yes, you can see it here at the top of the list here. Some of these are basically
[00:37:12]  like not, and then do. Yeah. This is, these, these ones are not real DOM, but yeah, if you look, if you get. Yes.
[00:37:19]  Right now at the top here, we have block VDOM. Million. Xenia. Eevee actually is ahead of solid in the, in the results right
[00:37:30]  now. We kind of go back and forth. Um, Sinuous. Yes. One more. Maverick. Inferno. Every, I say that like,
[00:37:38]  this looks like a big range, but if you look at all the frameworks, um, once you get to pass the, this, um, no legit, you, you
[00:37:45]  guys have pulled a couple points ahead. No. I was going to say everyone was like sitting around 1.091010 for quite a long time. Usually, um
[00:37:55] , the VDOM library is taking a bigger hit on select row and some of the other approaches not so much. Um, but yeah, no, it's legit
[00:38:06] , right? Do, do, do, do, do, do, do. Yeah. I mean, we're talking about fractions. Yeah. This one's always killed
[00:38:13] . The biggest difference now I think has got to do with memory allocation. Because if you look at it, things that involve replacement and things that involve clear are the biggest
[00:38:27]  points of the difference between the block DOM approach and the reactive approach. If you look at creation, we're very close. Solids a little bit faster. If you
[00:38:36]  look at partial updates, reactivity's faster. Anything partial. But yeah, what's this one here? Is this remove row? Swap rows. Swap rows
[00:38:45] . Ooh, I got hit on swap rows. That's, that's odd. I think that, I think that's an anomaly on a run. Swap rows shouldn
[00:38:52] 't be that low, but usually the, that's probably the reason, but usually what you'll see here between the approaches here, you have creations, uh, bulk creations
[00:39:02] , very similar. What do we got here? 406 to 412. Like fractions of milliseconds difference on, on, uh, 16 X or anywhere between 4 X
[00:39:13]  and 16 X slow down, CPU slow down. So this is, this is, this is very, uh, thing. Like if you look at all the frameworks in this
[00:39:21]  top bubble here, there's a lot now. And then you, at this point, you have to actually scroll a good ways before you find the next framework you might
[00:39:35] 've heard of, um, like lit. And then where's, where's view? And if we go a little further, Svelte 4. Like there's a
[00:39:46]  lot of people pushing this space right now in the front side. It's, it's kind of, it's kind of crazy actually. And then, yeah, as I
[00:39:57]  will say in general, um, a lot of the tools are getting faster over time. It used to be a, there used to be a time period where react was
[00:40:05]  like the middle of the chart. And then now it feels like react is kind of towards the back of the chart. Even stuff like preact used to be in towards the
[00:40:14]  front. And I'd say preact is like the new middle. Where's preact back here. Yeah. Preact's the new, the new middle at about 1
[00:40:20] :43. Anyway, sorry. It was just interesting. This, this is just what I, what, what I was getting at here is that when you're trying
[00:40:27]  to chase these benchmarks, like it's like, you could do like 10 runs and see variation bigger than this. And you're just like, what's actually faster.
[00:40:36]  Let's talk a little bit about your experience of that next phase where you chase these benchmarks. Yeah. I, I still don't understand like how, like, I
[00:40:48]  mean, so I was talking to Fabio about this. Like there is so much variation in the benchmarks. Like one run I could get like solid is like zero,
[00:40:57]  like 0.05 faster than million. And the next one I get million is like, like, it's just like, it doesn't make any sense to me. So
[00:41:04]  I just, I just take, I mean, as long as I see the boxes are green, I'm like, it's probably okay. Yeah. Here's his V
[00:41:12] obi. This run was not very friendly to Vobi. They're only 1.11, but, but they're further behind. I've ever, I've seen other
[00:41:19]  runs where Vobi was up, up here, you know? So yeah, at this point, the variance on the top range is definitely within a 0.05 between
[00:41:28]  runs, but I, and not just runs between Chrome versions. Actually, I think runs are actually point plus or minus 0.02, but versions of Chrome are also like
[00:41:39]  another additional plus or minus 0.02. So it's like when you put it all together, you, you, you kind of get that kind of range. Anyways.
[00:41:49]  Yeah. Sorry. The reason I was mentioning was Fabio was the creator of, uh, Vobi, which is up here. He, he, he, another
[00:41:56]  reactive library. One, um, not based on, um, the DOM expression stuff. So he kind of redid everything himself and it's pretty impressive. He, as
[00:42:06]  you, he has slightly different characteristic across where he's slightly slower in some areas than solid, but much faster in other areas that solids particularly weaken. Like, so I
[00:42:14] , I always look to his insight. Anyway, continue. Yeah, no, totally. Uh, I was like, no, cause what I would do was I have,
[00:42:25]  I have to have my laptop plugged in all times. And I would just like, like, I don't know. Like, I don't know. I would have
[00:42:30]  my phone and I would do scroll on Tik Tok. And while it ran benchmarks like over and over again. I know, I know. Yeah. It's because you can
[00:42:37] 't do anything on your computer because you might like distract from it. And about the plugged in, it's because you don't want to risk the computer going into low power
[00:42:45]  mode. Like, so like, and it, the things get used to get, I like my M1 now, but the problem M1 is the performance better.
[00:42:52]  I used to get like the biggest differences or like, I felt like I, when I had my old windows laptop, I could actually like tweak things and actually like see it
[00:43:00] . Like there's been certain times periods where I could actually make changes. And because of the speed of my computer, I could actually actively see what was making improvements, which
[00:43:07]  is incredible, but it was hard because WSL was unpredictable and the computer had a fan. And once you got to a point where you're kicking on the fan,
[00:43:15]  cause the computer is overworking again, there's heat based throttling happening and then throws it out again. So it's been crazy. Like since the M1,
[00:43:23]  it's been like really cool. Cause I get almost more consistent results, but then I can't actually tell what's faster or not anymore. Cause everything's so fast.
[00:43:30]  Um, and I don't know if it's still true, but we had a hard times, uh, slow down and work properly on the M1 for the longest time
[00:43:37] . So I had to turn off the slow down cause it was like causing exponential memory. There's like an issue with the way the, the, the Chrome driver was
[00:43:45]  working. Anyway, sorry, I'm getting way too detailed. There was a question in chat here. And I think might give some people some good perspective. It was like
[00:43:53] , could you both speak to how you interpret an example from JS for an inventor, like adding a thousand rows using, using the, uh, the Chrome dev performance time
[00:44:01]  and zoom in on the task tick. Um, I mean, I don't, I don't, I don't high level question. I feel free answering. I don
[00:44:10] 't want to like, uh, look at timelines at the moment when you say interpret, like, I don't know. Like JS framework benchmark is in some ways,
[00:44:22]  this is kind of proving that it's over spawn its usage. Like it's useful for people like Aiden here to kind of vet the idea and myself. But if we
[00:44:32] 've gone to a point where all the top frameworks score so closely that this is no longer really a differentiator. Basically, if you're in a range below 112 is
[00:44:41] h or 113 on this, maybe even, I'd say even 115. You're probably in a range that no one is, no one is like really noticing much difference
[00:44:52]  between on the range. So it's tricky because in order to try to simulate stuff, what you'll see here is stuff like create a thousand rows. Okay. That one
[00:45:02] 's not bad. 10,000 rows. These ones are normal, but a lot of these tests are like 16 times slowdown or yeah, 16 times slowdown,
[00:45:10]  4 times slowdown, 4 times. The amount of time for these actions to happen is so quick that like you'd, you'd have nothing to measure that the variance would
[00:45:20]  outweigh it. Like, like select row at 16 times slowdown is 10 milliseconds. So can you pick like without the slowdown, you would see like a
[00:45:31]  millisecond or less than a millisecond, let's say. And like you could never differentiate between someone running at point, who got a 0.6 this time versus someone
[00:45:41]  who got a 0.7, like millisecond, 0.7 millisecond. Like it's, it's just not. So, um, yeah, I think
[00:45:52]  these things largely amplify, like even adding 10,000 rows. Right. I, it's important to understand, like when you do a page navigation in a single page app
[00:46:01]  and you go from page one to page two, you do create a lot of elements. Do you create 10, each row has five elements in it. So do you
[00:46:07]  create 50,000 elements? So, you know, I wonder sometimes, you know, cause when you, like you, you don't, if you look at a lot
[00:46:15]  of websites and you count the number of DOM elements on the page, when they initially load, you're not in a, usually for a lot of sites, you're not
[00:46:21]  in a 50,000 range. Usually not. It's much lower. Um, not, not, maybe not like incredibly much lower. I've definitely seen, uh
[00:46:28] , sites around 20,000 elements. Um, but 50,000 are, is, is, is insanely high number. And a lot of sites are actually more like two
[00:46:39]  to 3,000 elements. Like, like, so, you know, and then you, then you go, okay, well with two to 3,000 elements, that
[00:46:48]  means the time it takes for me to navigate, say from page one to page two in a spa is going to be what? 37, uh, milliseconds with solid or
[00:46:59]  million JS or whatever, Inferno, everyone here. And how much does that 37 milliseconds compare to, Oh, guess what? It's only 44 milliseconds in react.
[00:47:12]  Um, like, so there's that. I mean, you might get more concerned with the reactive around these other things where, but again, the, the problem is.
[00:47:24]  The, the problem is it's an amplification, right? It's like in react to swap two rows in a table. Um, might only take on a,
[00:47:32]  on a slow mobile device, 20 milliseconds for us. And it might take react 160 milliseconds. There's a bit of like this. So what factor? The problem is it
[00:47:42] 's in actual sites. It's never as simple as these tests. So you have to kind of balance the amplification of these tests with the fact that like in reality
[00:47:49] , there's also like amplification, right? Like, uh, because the situation more complicated. There's a reason why when people were looking at say solid in something like
[00:48:00]  tan stack table or ag grid, we saw noticeable real world performance improvements over the react version. Um, but like the simple example, like the simplest you find is benchmarks
[00:48:12]  can never really, really cover it. I don't know if I'm answering the question very well. I don't know. Do you have any thoughts on this, A
[00:48:18] iden, in terms of the value of benchmarks? Yeah, I think they're good. Um, there's like the performance tab. I, I honestly still don't
[00:48:27]  know how to use it. I just kind of look at a little squares and like, if there's a lot of them, it's probably a bad thing. Um,
[00:48:34]  yeah, I still have to look into that, but benchmarks are a thing. If they're much easier to see results on. Uh, I does adding these roles. Yes
[00:48:45] . Um, and actually the, he has margins of like, cause a lot of these tests run multiple times. He actually has margins here for statistical significance here to the
[00:48:55]  point that you can actually pick a framework and, uh, well, let's pick million here and hit compare. And he gives you a reasonable idea of what is statistically
[00:49:08]  significant from his perspective. Um, which is actually pretty impressive here because we're million sitting, according to this, at least from the run standpoint. Um, it is
[00:49:19]  safe significantly, uh, scores better for what's this replace all rows, swap rows, remove rows, create many rows and clear rows, but not on append. Um
[00:49:40] , where it's solid, where the whites neutral reds negative thing. I don't know. Maybe we are getting too close here, um, for us to be able
[00:49:49]  to kind of tell this, but I mean, yeah, it's interesting when you get over here or we want to start react. Yeah. Here's react where it's
[00:50:00]  like, it's literally straight red. Um, I don't know this, this, these things used to be more helpful at one point. I remember that it does
[00:50:14]  seem like, um, these numbers are incredibly sensitive, but according to the math, like he, as I said, he shows error margins. He shows percentages. Like overall
[00:50:25] , actually, this is kind of interesting here where there's an overall slower, uh, thing where, where it's on. On average where according to this run million
[00:50:37]  is comparable, even to vanilla JS all the way up to stuff like, uh, um, where is it? One more Maverick, but then, or actually once
[00:50:48]  we get to Maverick and million, or sorry, and Inferno, apparently they're statistically slower on average. And then once you get past, uh,
[00:50:56]  up to like lit, basically the whole rest of the chart is slower. I don't know. As I was trying to say before, take this to a certain degree with
[00:51:04]  a grain of salt. Um, but according to these runs, he does do a bunch of stuff to tell you the margins, um, and the significance of the results.
[00:51:17]  Anyway. Yeah, it's interesting. I, I, he runs it on his, on his own laptop where he kind of isolates it. It might be interesting
[00:51:35] . There's trying to set up a cloud setup with it. He, he, he turns off, he has complete control over the machine. He turns off a bunch
[00:51:41]  of like, uh, mitigations and stuff too. Like there's, I, I don't remember stuff like heart bleed and like all those fixes. Like there's things
[00:51:49]  that affected the CPU that actually caused the, the, the, uh, benchmarks to do worse. So like there, there's a whole bunch of stuff that he has on
[00:51:58]  his own run. That's different. He, he tests between different machines, like different operating systems, different verniaches of Linux, all this. They're trying
[00:52:07]  to come up with a setup that he could find would seem to get the fairest results, which you can follow the threads on. It's, it's, it's
[00:52:14]  tricky. Anyway, sorry. We, we, we got, we got into benchmarking, right? It's a fun topic though. There's lots of things to
[00:52:26]  get into. Aidan, no one really understands performance time. We're all just pretending. Well, yeah, I mean, it's interesting. There's a lot of
[00:52:32]  data there and it's how you, we, you interpret the results, right? Like, um, yeah, I, it is interesting though. This benchmark is based on
[00:52:41]  timelines, um, which is why it's one of the most accurate. Like he actually looks, uh, he actually looks at, at, um, it's not just
[00:52:49]  like the pure JavaScript time. He actually looks at paint times, which is actually much better, I think, because it's more holistic. If you just look at like
[00:52:56] , there are frameworks, for example, that are really good in JavaScript, but then the way they handle the DOM rendering actually, it makes it, you know, slower.
[00:53:09]  The benchmark is all about contributors who, who, who put in it. A lot of times framework versions don't matter like a ton. Uh, someone looks like someone
[00:53:17]  updated solid to the latest. So that's good on them. Um, I only released that four days ago, but to, to answer the question, there are PRs
[00:53:26]  merged in this benchmark pretty much every week. This is, while not every framework gets updated all the time, I would say this is probably the best maintained benchmark by, by
[00:53:35]  far. Like a lot of benchmarks, like no one's touched this in three months or blah, blah, blah. This, this benchmark gets updated multiple times a week
[00:53:42] . Partially a lot of people, you know, who spent those weekends are like, I have a new framework. Let's throw it in here. Right. Yeah
[00:53:53] . Anyway. So, yeah, anyways, I'm, I, we kind of diverged a little bit here. We were talking a lot about how you did it,
[00:54:04]  how million, million ended up showing up here. Um, but, um, I, I want to understand a little bit more about the actual technology itself, rather than just
[00:54:18] , you know, the result. The results are impressive, which is what brought it to everyone's attention. But I, I am, I am definitely interested to understand
[00:54:28] , um, especially as you said, you, you look at other block dom type approaches, like from block dom itself. And, you know, not many people have explained
[00:54:38]  this in the same way, not people, many people had explained reactive rendering, um, before I started writing. Um, not many people have actually explained what a block
[00:54:46]  Vdom is and you've actually taken on yourself to actually do that to a certain degree, which I obviously I love because I love learning and understanding these things. So,
[00:54:55]  um, should we get into it? Should we talk about like what makes a block Vdom fast? Like how it works? Sure. Um, we can use the
[00:55:04] , the visualization on the website first and then we can kind of like get into some of the implementation details. So when you see the website, do you want me to drive
[00:55:14]  for this part? Um, yeah, I think so. Yeah. Okay. Cool. Let's throw this up here then let's go make react 70% faster.
[00:55:26]  I mean, that's bold right off the top, but okay. Let's, let's, let's, let's, let's, let's, uh, yeah
[00:55:32] . Yes. Framework. If you go to the blog, there's like a, there's like, it should be a blog post somewhere. Yeah. And then back
[00:55:40]  in block, I think. So if you kind of scroll down, there's sort of a, like visualization of how the, the virtual DOM works. Like, it
[00:55:50] 's just like, you just dip the nodes. Like if you scroll down a little bit. Yeah. I'm just, I just want to see this example. This example
[00:55:57] , you have one, two, we have what? Five elements. One, two, three, four, no, four, four elements. So is this example at all
[00:56:07]  related to this example? Oh, I think I may have miscounted the number. I don't lose that shit. And we don't talk about that. Anyway
[00:56:16] , we'll just, okay. Just say that's there. Okay. But what you can do, what you're showing is a virtual DOM with less nodes, if I
[00:56:26] 'm understanding. Yeah. So like if we updated the, yeah. Okay. Okay. So we, okay. Is this a good example? Or am I jumping too
[00:56:41]  far? Yeah. If you scroll down even a little more, it should be like the title, like static analysis. Yeah. Okay. Yeah. So if you kind of
[00:56:50]  imagine this in code, it could be like a function with some props and the props are node one and node two. Okay. And then the, like this can have
[00:56:59]  some sort of nodes. And then like the values, like the question marks are where like the JSX containers are. Like the curly braces inside your JSX. Okay.
[00:57:09]  Okay. Okay. And so that's actually probably not a great like explanation of it. But essentially like data can go into certain nodes, right? Like can, like
[00:57:20]  for example, like node one could be like hello world text. And then it goes into the node as like a, like, like a hello world text elements. And
[00:57:31]  so the way we do this is the, the, the tree is, is all like virtual nodes. Um, I think, I think, I think for this example
[00:57:42]  to sit here for most people can, what, what, what would, in this example, you have a tree here where you have one, two, three, four,
[00:57:52]  five nodes, and we're talking about these two nodes. What kind of structure would create this kind of tree that we're talking about here? Like what, what would this
[00:58:02]  look like, like in code that people would write? Um, it could just be hyper script or it could be JSX. Yeah. So let's pretend it,
[00:58:10]  let's pretend it's JSX. Each of these nodes represents an element. Could this be div in, uh, could this be a parent div that has a div inside
[00:58:19]  of it that has, um, like, like a sort of like, like that has like, uh, uh, uh, h1 and an anchor. Like is,
[00:58:29]  is that, so we're talking like these could just be DOM elements or, or, or are we talking more like components? Those are like DOM elements. Yeah.
[00:58:39]  Okay. Gotcha. Okay. Okay. Okay. Okay. So the static now stuff can occur the first time, like compile time or first thing at runtime, depending on whether
[00:58:50]  you use millions experimental compiler or not. Okay. Stuff is responsible for extracting dynamic parts of our job into the edit map. And so essentially like we run that function and
[00:59:01]  we, those question mark values are like special values we use during static, like look forward during static analysis. And so like, um, when we run the function, it
[00:59:11]  returns it, a virtual node, like object thingy, a virtual node tree. And then in for a certain parts of the virtual node, we have this whole value
[00:59:20]  or a placeholder value. Um, that, that we've looked for when we traverse it again. And so if you press one, when you say a whole value,
[00:59:28]  that could be like the title in our H1 or the source in our hyperlink. Exactly. For example. Okay. Okay. Okay. Okay. So we get
[00:59:40]  a structure and this is like a pre pass. Like just so, so I understand, like essentially you build up all the static stuff and go, these are the places where
[00:59:51]  there could be values that change. Yeah, exactly. Okay. Okay. Because like when, when a normal virtual DOM runs, like when your runtime with react, it
[01:00:01]  builds a structure, but the holes aren't holes. They, the, the value is filled because you just executed the component. If I'm understanding this correctly, either ahead
[01:00:09]  of time or at first run, you don't just build the, the like final results. You actually build a map where you're like, this is the static parts,
[01:00:20]  this, and these are the holes. These are the dynamic parts. Exactly. Yeah. Okay. Got you so far. Okay. So in a sense, that's
[01:00:30]  not that different from Inferno, right? Cause Inferno, like instead of calling what hyperscript functions, they have, uh, like realized nodes that are
[01:00:41]  static, um, that they never have to recreate again. Right. From what I understand, um, they do do make us like, it's different. Like it
[01:00:48] 's like, it's different. So they, they make it static. So they don't have to make the calls. Um, but like for this one, it's
[01:00:56]  more like they, they, this, it like makes it static. It puts where the holes are. And then we analyze where the holes are to make a map. Okay
[01:01:05] . So do that part. Yeah. Okay. Gotcha. Okay. Okay. So can I actually run the, okay. I'm going to zoom out one step.
[01:01:15]  Cause you actually have working example, which is cool. So I was getting ahead of myself. So these two nodes have something potentially dynamic in them and then this is where
[01:01:33]  the static analysis occurs. Yeah. And it goes, there's nothing dynamic here. There is nothing dynamic here. There is something dynamic here. So you make a map when
[01:01:44]  node one changes update blank. When node two changes update blank, nothing. Okay. Okay. So you're just showing, okay. So you're going through and you
[01:01:59] , you, okay. I gotcha. Then, um, the second process we can use that edit mapping to advantage. And so like, we know how we know
[01:02:15]  like what, when we, when the state changes or when some props change, then we change something else. And so here, literally all we need to do is just check
[01:02:24]  that the values are the same. And so like in this example, both values are not the same. And so. Right. There's an update. Update one to three
[01:02:35] . And it's cause it's back map at that point you go, okay. Yeah. Yeah. You get the, well, I mean, do you rent?
[01:02:44]  Okay. Well, maybe I'm getting ahead of myself, but do you, how do you know that it's three and four in this example? So like, like,
[01:02:55]  so let's say someone calls like a set state and they would change the, like, they would update some, like, I, I, I, I, is it
[01:03:10]  okay to assume that these are all in the same state? Yeah. I think, I think it's better to separate the react part of it for now. Um,
[01:03:14]  because there's like a different layer to that. Okay. Like here, just imagine like every, we just assume all data is props. And so like, no. Yeah
[01:03:21] . Yeah. Yeah. Yeah. Yeah. Yeah. The, the reason I'm asking is like, I, it's easy enough for me to see that you could
[01:03:28] , that you could go, okay, update this one to this update this one to this. It's because from a data level, you have a node one and node
[01:03:40]  two, and then, you know, when you set something, you're like, okay, I'm updating node three to this and node two to this. And then
[01:03:48]  you can compare the data objects with each other and then go to only if they change between the two runs, then you go here to change this, right? Yeah.
[01:03:59]  Okay. Okay. Okay. I'm, I gotcha. So like, basically this is, yeah, this is very similar to this, the one pass approach, uh
[01:04:08] , of dirty checking almost like, as I mentioned, lit or angular where you, you, you diffing the data, not the virtual bomb trees so much. Right.
[01:04:17]  Okay. Okay. Okay. I'm still following. Is this tech technique effective? Okay. Okay. Okay. I mean, you know, yeah, I mean,
[01:04:31]  you know, my first question and maybe you address this right here, because okay, this is fine. This makes sense to me. Obviously you can shortcut a lot of this
[01:04:39]  because you're just like, okay. Yeah. Oh, I know where this like data ties to here. So I can just, if this doesn't change on the simple
[01:04:49]  data diff, then I don't have to touch anything. All the stack stuff gets skipped over. That's great. But what about, what, what, what,
[01:04:55]  what about structural changes like, uh, lists or whatever. Right. Cause that's the first thing. Cause sure. It's easy for people to picture holes like DOM elements
[01:05:03] . Yeah. Uh, you know, like, uh, like, oh, you updated this attribute, but I'm trying to understand like a, like a, like a
[01:05:11] , like a for loop or a map. Um, or like, if new data comes in, then you, you, you go through the process and you're like
[01:05:22] , okay, I need, you need to do a diff at that point to decide whether to like, do you have. I don't, we don't, we
[01:05:31]  don't. Yeah. Well, it's for circle changes. We just bail out. Like we don't support that yet. Um, but for lists, we do like
[01:05:36]  lists. If you have like stable ish elements, the stable ish blocks as a list, we can do that part. Uh, okay. Yeah. Yeah. You
[01:05:46]  understand what I'm asking. Yeah. React. They don't care and they recreate freaking everything. And in Sol, it's the opposite. We have, we have
[01:05:53]  to have memoized list helpers like the four component. And I was wondering if this approach made me think that you'd need specialized list helpers if you wanted to leverage
[01:06:02]  it. Maybe I'm, I'm wrong. We do. We do. Yeah. Okay. Okay. Um, okay. I, I'm okay. Okay. But
[01:06:13]  I, I'm, I think I'm following here. It's actually remarkably similar to the, the, to the, the one pass approach. Um, but I
[01:06:26] , I, I guess, huh? Okay. So, uh, okay. Let's, is there more to this thing or this is just basically the explanation here? Yeah
[01:06:41] . Kind of just limitations and stuff like that. Okay. But the core might be slower than a regular virtual dom. Okay. Because we have structural, we need to
[01:06:50]  do the replacement there. Yeah. So this, this, this is the structural question. Okay. So this is something you have to be aware of because you have to,
[01:06:57]  you are doing technically more work upfront, which saves you less work later. But that means that if you have to bail out and do all the work. Yeah.
[01:07:06]  And you don't get that benefit and you're just paying the slightly higher cost. Got you. Okay. The block virtual dom is not silver and not always faster than
[01:07:16]  the regular virtual dom. Instead, you should recognize certain patterns where the block virtual dom is faster and only is in those cases. Interesting. So what you're kind of
[01:07:25]  saying is like things that you would end up say cloning a lot are the situations. Like. Exactly. Okay. Yeah. Milo from solid core team a long
[01:07:35]  time ago came up with this, actually, I actually, probably actually the original is actually sinuous framework. You familiar with that? It was a reactive library and they,
[01:07:47]  they used hyperscript, but hyperscript makes you recreate everything every time, which is slow and basically getting you not, none of the advantages of the reactivity then
[01:07:57] , because like, like a VDOM that you have to go through, create everything. Cause conceptually you're making a virtual dom you diff it, but reactive
[01:08:06]  library doesn't need to do that. But he was putting, he was using hyperscript and solid has us to hyperscript with reactivity and kind of paying double
[01:08:12]  cost. And so what he did was like, well, what if I just, first time I run the hyperscript function or the template literal, I just make the
[01:08:21]  clone to the clone. So I'll just make the elements and then I'll, you know, make the clone that I need. And then after that, um,
[01:08:29]  I will only, you know, do the reactive updates and he did it with a proxy. So he actually made a special template function essentially, and he made it and the
[01:08:39]  template function basically wrapped his hyperscript and then basically said he, he, his map was a proxy. So essentially whenever he wrote to, um, to where I
[01:08:53] 'm going back to your example here, whenever he wrote to like one of these, like say wrote to node one or node two, it would just, because his signal pass
[01:09:03]  made a proxy. It would immediately just go to the node in the DOM and just up update it without running any code again. Um, and the, the, this
[01:09:12]  was really performant and let him use like no compiler step, but on the downside, um, you know, he had this thing where like in that one place, it
[01:09:23]  was like a one for one mapping. Like you couldn't share the state, like it was like literally Dom node tied to, to tied to data structure. And it
[01:09:30]  just, sorry, this made me think about this a little bit where it's like this localized, um, uh, kind of mechanism that lets you. Like optimize places
[01:09:46]  that are not structurally, uh, like they're mostly structurally stable, essentially that, that, that, that, that was the trick that he did. And it
[01:09:54]  worked very well in the JS framework benchmark for him. And I was like, you know, I, I did tip my hat to him. Cause I'm like, he
[01:10:01]  basically solved the problem. I was like, man, you can't do it. See, I use a compiler because that's how I know to, to do this,
[01:10:07]  uh, structural, the structural stuff. And he was like, I can do it without a compiler. And I think for him was a good enough trade off. Cause
[01:10:14]  he's just like, as long as he identified that block, so to speak, he could get similar things to solid. I was just like, well, with the compiler
[01:10:21] , you don't have to even think about it and you always get that performance. But there's, there, there was, there was that kind of tension there because he
[01:10:29]  didn't want to use a compiler. Um, anyways. Okay. So I, I'm conceptually getting idea. How's chat doing? We, we kind of dug
[01:10:36]  deep in here for a moment. I just want to know if you guys are still, are still out there. Yeah. Where, where are we? Um, let
[01:10:45] 's see. Lucky to see it live. Well, come ask questions, be involved. Yeah. We'll, we'll talk about react in a minute, but I want
[01:11:00]  to actually understand. Okay. Actually, here we go. Here's one. Why did you specifically choose to make million about wrapping react? What's your view of potential
[01:11:13]  risk? I tell yourself to closely to react. I do. I guess we're going to, are we going to get into the react conversation right away? I, okay
[01:11:19] . We can talk about react first now. Cause I actually want to look at like what writing native million is and then look at writing million react. this is a fair
[01:11:26]  question. Like, like the very, like, like, you, you, you know what I mean? Like it's a fair question. What do you think?
[01:11:37]  Yeah. Um, how I view it is just like, I don't want to make another framework. Not only cause there's already like a hundred, literally hundreds of probably
[01:11:48]  thousands of frameworks out there already. Um, but also like, I don't want to like deal with doing every part of the, like the whole stack. You're
[01:11:57]  thinking about like data, you're thinking about components. I didn't want to think about those things. I just want to think about the, the view, the rendering in
[01:12:03]  this case, um, and do that really, really well. Um, so that's kind of the approach I went for it. Um, technically it, it is like
[01:12:13]  integratable with, with other virtual dom ish libraries like react, but like, yeah, it's kind of like the main thing that's like people are complaining about.
[01:12:23]  Right. So I guess maybe I was asking the wrong question. Cause I was like, I was kind of like, well, you know, I want to see some
[01:12:32]  native million code, but you you're making it sound like native million code beyond small stuff. Isn't really the intention. You're you seeing this more as like a way
[01:12:41]  to like do some performance optimizations and say an existing framework. Yeah, exactly. Okay. Because I think, yeah. I mean, if you want something fast, you
[01:12:52]  might as well as you solid, right? Like there's no point in making another framework. Well, that's high praise. I mean, I think, you know
[01:12:58] , if you want to do the work, but yes, you have to want to do the work and maybe you're just insane for wanting to do the work. Um
[01:13:05] , but yeah, I, I, I, I, I, okay. I'm, I'm, I'm, I'm, I'm, I'm getting you
[01:13:13] . So the react question is a pretty fair question then. So basically if I'm understanding. Yeah. Cause like, how do you want to introduce this? Cause see a
[01:13:22]  lot of times I do stuff like I've shown the JS framework benchmark a lot. See the thing with the JS framework benchmark is I know that. Yeah. There's
[01:13:33]  no react here, right? This is just pure million. So like this is, this is a very simple example. And so I like showing it off. Cause you
[01:13:42]  can, you can kind of see like if, if, um, I think maybe solid or solid store is another good example. the, the, the, the,
[01:13:52]  uh, let me blow this up a little bit. The, the code is mostly a bunch of random string identifiers to fill a table. See that you have to do
[01:14:02]  like random to choose. And then there's this function that builds each row and for solid has to build signals. Right. And then the app itself is just a bunch of
[01:14:10]  like buttons that do stuff like run, run a lot, add, update. And most of these are just like some, you know, build the data, set the data
[01:14:17]  to set some signals, you know, and then the, you can see the UI. It's very simple. It's like div button, button, button. There
[01:14:23] 's a table. There's a loop, each table row showing that data. And then there's a selected row on the table. And that's at 81 lines of code
[01:14:30] . And you have the test. Some people have done stuff more verbose, but I mean, it doesn't matter the way. Like, let me see here. Let
[01:14:39] 's like Svelte means Svelte. What if they touch this? I did the Svelte two to three migration. Someone else did the four migration, but
[01:14:46]  yeah, it's the same thing. Here's a big Svelte template. And then here's all the data function stuff. And similarly again, with about 90
[01:14:55]  lines of code, you've got that example. Where's another one? Can I find the React hooks here? React. React. Source. Main.jsx. Yeah
[01:15:07] , I think they're all pretty similar now. Oh, this is a class component one. This isn't even hooks. Where's React hooks? I feel like that
[01:15:17] 's a more simplistic look at this now. But yeah, there's our list of strings, build data function. Oh, this one's using a reducer. Oh,
[01:15:26]  I think actually, do you know what? I did the hooks implementation. The reason I'm using a reducer, Dan Abramoff suggested I use a reducer
[01:15:33]  because it reduced the number of like, because we had to pass these functions around and I was like, oh, do I have to use callback all this stuff and all
[01:15:40]  this? And he was like, no, no, no. If you use a reducer, it's the easiest way to like delegate the control mechanism through instead of passing
[01:15:47]  a bunch of separate things through. Um, but you can see that this is not the 120. Like this is pretty straightforward example of just a table. It's,
[01:15:57]  this is like to do MVC. Um, so I'm just, as I said, I haven't looked at the million example. What, what is, what's
[01:16:05]  the million look like? It's virtually unreadable. Like, it's just like, yeah, you can take a look. Uh, we use JSX, but
[01:16:11]  like that's the only saving grace. Okay. So we have some, some strings and array. Cause I like, as I said, to do MVC, the
[01:16:20]  greatest thing about it was you kind of picture using that in your app, even if it's a simple example, I, I use the JS framework benchmark both ways. Cause
[01:16:26]  you can, you can always highlight the stuff that's like clearly for performance and that. So you've got to make that trade off yourself. Um, but yeah, let
[01:16:34] , let me see here. Okay. So we got that. We've got to build some data that looks very similar. Okay. So first thing I'm noticing here is
[01:16:43] , the V DOM wise, you have the, you don't have set state, you have update, like updated. You, this is like, uh, there's
[01:16:53]  a lot of V DOM libraries actually are like this, where they're just like reconcile now. Instead of worrying about scheduling or batching, you just call update, right?
[01:16:59]  Like this is so you don't have to worry about all that weird batching stuff that people go like, why when I update the state and react the next line, it
[01:17:05] 's not updated and all that stuff. This, this avoids that because you're like, look, I'm not committing anything until you call this function. So,
[01:17:12]  um, okay. Yes. But I mean, this is, this looks pretty straightforward. This is still the same thing. Create the list update. Update the data update.
[01:17:20]  Do this update. These are the same functions remove GSX. Okay. So first thing I noticed this block. So we're putting a block around the whole thing.
[01:17:28]  You have your buttons with those functions. Clear update. Okay. So yeah, it's a little bit less terse since calling set state, but it's basically the same
[01:17:39]  kind of thing. Table. Oh, interesting. It's a delegation. Right. And then click. Yeah. Yeah. This whole thing. Don't worry. Many
[01:17:50]  libraries, some of them have been removed. Now do this delegation. Solid does it automatically behind the hoods. I think it's actually, I fought with the guy from
[01:17:57]  Evie for ages about whether I don't. It's like you could do delegation solid so easily. And I'm like, yeah, but like, like, should
[01:18:04]  we, is it our responsibility? And he convinced me it was back in 2019, but yeah, this isn't that bad. It is doing a bit of a Dom walk
[01:18:11] . That's why it gets marked with the 801, but it's not a big deal. And then another block for each row and then a block for main.
[01:18:18]  Okay. So how rows, I want to see how rows happens. Okay. This is what you mean. Okay. So your update function is actually like, not just a
[01:18:34]  force. What's, what's main dot P? What is this? It's supposed to be like main dot patch. Okay. So you, okay. Okay.
[01:18:44]  I got you. So you, but you're actually, okay. So what you're doing here. Yeah. I understand what you mean now. Cause like there, there
[01:18:52] , there are like, like crank JS has like a, it's a V dominant. It's just like, has an update function and you call it, this is not
[01:19:00]  that update function. This update function is actually something keyed specifically for the benchmark, which manages the array stuff here. And, and the, you're, you're
[01:19:10]  calling patch yourself to do the diff on the specific node. Like V DOM node that you know is the entry point to this table. So you're like, uh,
[01:19:19]  this main, get element by the main, who's going to guess that it's the table body. Where's main. And why not seeing it or is main.
[01:19:33]  Uh, yes. The whole thing. Okay. Yeah. Okay. So anyway, you, you, you say diff patch it called map array is map array, something implemented
[01:19:45]  inside the framework. Yes. So this, you do have a special map function. Yeah. So this is, this is like your four component in solid. Got you
[01:19:53] . So this is how you do the memoize diff and then you create the thing, pass the props in your, is there any reason why you didn't use GSX
[01:20:01]  here? Like this, this looks like a component. We. Oh, it's because, oh, it's because it's a block. So blocks are called like functions
[01:20:13] . Okay. Gotcha. Okay. Yeah. Now I'm falling. Yeah. So blocks are like, and then you, you basically the props you pass in here.
[01:20:24]  I see. Yeah. So this is, yeah, no, this tells me a lot. Actually. This helps me actually have a significant amount. I don't know.
[01:20:32]  It's not helping people in the audience much, but basically blocks are like, like exactly sound like these static building pieces. And then you're like, okay, this is
[01:20:41] , it's, it's kind of like a different concept from a component, but you're like, okay, this is a block here. And you here are managing
[01:20:47]  every time you call it essentially. Um, but because the block is smart on updates, it's more efficient to update a block by passing data in and doing the simple diff
[01:20:56]  than it is to diff a normal virtual DOM. So yes, this is why I like the US framework benchmark because like the map, like in the for loop, this
[01:21:06]  forced you to have to actually have a solution for, for, for lists. Conditionals also can fall into this, uh, kind of thing. Uh, there
[01:21:16] 's actually a number of frameworks that are in the front of the list that don't actually have conditionals because the framework benchmark didn't actually need it. I, uh,
[01:21:23]  there's like an open issue on, I think it was like DOM C or stage zero where they're like, can you add a conditional so we can actually do it?
[01:21:29]  And, and the guy was like, yeah, yeah, yeah, for sure. And like, it never came. So it was never actually usable, but, um
[01:21:35] , but like it was the top of the DS framework benchmark. Okay. Yeah. No, I I'm following this and then should update. What is should update?
[01:21:43]  Okay. It's a simple memoized diff on the whole thing. Yeah. Okay. I mean, this is not actually that complicated. It's just a little bit,
[01:21:51]  a little bit clunky. Like it's a little bit, but it's actually fairly straightforward. What happens here? Block is like a special component that has an optimized thing
[01:22:03] . Can a block have its own state? No. Yes. Okay. This is all making sense to me, but this is, that's, that's where the
[01:22:11]  optimization is. Cause you don't have to worry about it updating itself. It's, it's, it's like, um, it's like, it's like a
[01:22:17]  memo. It's, you know what this is actually like, have you ever seen a view in 3.2? What is it called? Quintessential something or others
[01:22:28]  view view view. What is it called? Quintessential quintuplets. They released this feature called, and this is why view jumped way ahead. At one point
[01:22:38]  they were about the same performance as Svelte. And then they jumped way ahead of Svelte. Although this doesn't even show up. They're even further ahead
[01:22:44]  than this. They added this new directive called V memo. So views had this problem because reactivity and, and, uh, V doms don't play nice.
[01:22:52]  Usually because you, you were saying that, you know, if you have to restructurally build stuff with, with millions, it's a little bit more expensive, but
[01:22:59]  it's actually not that much more expensive. But I'll tell you what is much more expensive. Making a bunch of signals. If you're re-rendering, that
[01:23:05] 's like the worst thing you could possibly do. And, but so they had this tension where if they wanted to make the components really big, um, uh, to
[01:23:16]  like, you know, are sorry. They want, the V dom wanted the components to be really, really small so that they could like only run the least amount of stuff
[01:23:23] . But the reactivity one of the components big because they didn't want to have like too many little effects because every component gets wrapped in effect. So what they did
[01:23:31]  was they made it so that you can make really big components the way reactivity wants. And then mark parts of the virtual dom as static by putting a directive on it.
[01:23:40]  Like, yeah. I mean, it's, it's, it's not. Yeah. I, I, I'm not sure anyone would actually know how to use this
[01:23:51]  except for people like ourselves. but it is, it is interesting. I actually think your, your UI here that you're doing, uh, with, with million,
[01:24:00]  uh, sorry. If it's actually at least much more approachable because you can like, you can go, okay, I'm making a block. It is a thing
[01:24:07] . Okay. Interesting. But okay. The react integration with million came right from the start then, or was it, was that later? It was a little bit later
[01:24:22] . Yeah. Okay. Let's see if we got some questions here from the chat. Um, could this, could this render function with JSX in view? Yeah.
[01:24:34]  I mean, I guess we sort of just answered the question. It could, but it sounds like view has similar, maybe similar optimization. We'd have to benchmark to
[01:24:42]  see million might still be faster, but. Aiden should, Vercel should hire Aiden. There you go. I actually have their mug right here. Shout
[01:25:01]  out Vercel. Oh, what, what, what, what, what am I holding right here? Oh, sorry. Like this is the dichotomy.
[01:25:10]  This is a Netlify water bottle. Yeah. Anyway. Um, yeah, no, I'm enjoying this. I'm definitely enjoying this. Yeah. Would you
[01:25:29]  consider creating a benchmark for million react? Okay. So there's two reasons we haven't. The first reason is, do you know how on the solid, um,
[01:25:47]  react thing you had to have like a div or like some sort of like wrapper element? Yes. It doesn't. Yeah. It's not compatible because we have to insert
[01:25:55]  that. It just doesn't work. Right. The, the benchmark has a very specific shape. It's the same reason I haven't made a Flutter web UI version
[01:26:02]  of this. I really wanted to put Flutter in the benchmark. I, I, most of the time I do stuff very, uh, altruously. Like
[01:26:09]  I like seeing stuff progress and do well, like stuff like million JS. Sometimes I add stuff out of the benchmark just, um, to kind of prove a point. Um
[01:26:19] , and, uh, yeah, Flutter was on my list to prove a point. Um, but I couldn't do it cause the structure was too, was too different
[01:26:28] . Um, yeah. Yeah. Yeah. Okay. That's one reason. I guess another reason to consider it is I don't think it would show very much because
[01:26:37]  you would just like, how much react would you actually use in an example like this? Like you would use react to drive the state maybe of the top level, but
[01:26:46]  then the whole benchmark is just going to be a row block. Like, uh, in, in, yeah. In theory, I mean, you're basically bypassing react
[01:26:56]  in any way that matters from a performance standpoint, I think. Right. Yeah. That's how you do it. Yeah. But it's a good question because I
[01:27:06]  think if you're telling us that reacts the way we should use this, then I mean, it's a fair, it's a pretty fair question. We should see,
[01:27:13]  you know, react. Right. I think that like comes down to like more, more like real world. Like, I don't know if to do MVC is
[01:27:22]  like a good example, but like something more like that. Cause like, I feel, I don't know. It, it doesn't, I didn't sit right with
[01:27:30]  me. Cause like, yeah, it's like you said, it's just like, doesn't make sense. It's just eventually going to be the core again.
[01:27:35]  Um, but if, if, if we figure out how to like bypass the slot issue and it's like easy to do, then might as well. Right. Yeah.
[01:27:45]  That's super interesting to me. I did. I, the, the, the example he was talking about when I shared a while ago where I, I put solid components
[01:27:52]  inside react. So it sounds like you're using a very similar approach with million then. Yeah, exactly. Okay. Cool. Cool. But which means that, yeah,
[01:28:01]  I mean, I, I, I was just packing away, figuring out, like, I have no clue. I, this was one of those things where I,
[01:28:08]  I gotta give Theo a heads up or a shout out for that one. He was like, he was trying to convince me that this is what I needed to do. So
[01:28:14]  I was like, okay, fine. And I, I, I'd already made it like, I knew it was easy to pass props through, but I, but to
[01:28:19]  actually make react rendering and slots and stuff work was actually like a lot of trial and error and be like, I learned a bunch about react, like the order effects run and
[01:28:29]  stuff. Like you got to do some funny tricks to keep the stuff running. I don't know if you ended up hitting the similar kind of problem. Or if you
[01:28:34]  were just like, okay, this works for me and just kind of went with it. Um, yeah, definitely. I was like, okay, looks like this works.
[01:28:42]  I'm going to take it. And then let's go. I, I didn't, I honestly didn't understand how the effects of going to work until like months after
[01:28:50] . Okay. Yeah. Yeah. Yeah. So yeah. So yeah. So yeah, you did get it from that. Yeah. Yeah. It's yeah. It
[01:29:00] , I, I've, someone came up to me during conferences and said they, they, they've gone at working on server side with SSR and next. Um,
[01:29:05]  so I dunno, that's probably something you'd be interested to. You, you haven't got us server side rendering going yet. Have you. It's yeah.
[01:29:12]  No, not, not like we have SSR, but it's just like the hydration part is not. Yeah. Yeah. Yeah, exactly. Yeah. I'm,
[01:29:21]  I'm, that's going to be fun. Anyways. Uh, that's another project. Someone asked here their, uh, monowary Chris millions does have a
[01:29:27]  four as well. Right. Did you make a four component? Yeah. If you go to the docs and look at four, it should be, it's like almost the
[01:29:35]  same thing as solid. Okay. Oh yeah. There it is. Huh. See? So it's, it's funny. Four is one of those things I got so
[01:29:44]  much flack for. It's cool to see other people at least considering it as like a semi decent reason. I guess the truth of the matter is right. like
[01:29:51]  even in react, if you had a component like four, it'd be more optimal. But, but you know, react doesn't bother with it. I think actually I
[01:29:59]  saw a video. I think Adobe has a, like a four component that they use with react, um, to make it more optimal. Just most people don't bother,
[01:30:07]  you know, like that optimization isn't worth it. But I think in our cases it is because it lets us skip bypass something that is actually slightly more expensive than react on
[01:30:18]  creation. Right. I think it's a bigger impact. Yeah. That's okay. Okay. Yeah. Yeah. No, the, this, this, this is
[01:30:27] , this is fun. Um, where was I? Okay. Uh, yeah. Cause I want to, I want to look at the react part of this a bit.
[01:30:34]  Yeah. So someone's like, so instead of react memo, I can probably use a million block components. In some places. Yeah. Depends. Those that aren
[01:30:45] 't stateful essentially like leaf nodes. Um, can you, you can, can you, does this work still well with like parent through injection? Like if, if you
[01:30:55]  pass something from the parent into a block, could like the, should, could the children be stateful in that way? Like, so, uh, it, it
[01:31:07] , that's actually how we do it. We, we run a compiler that, so like you can write normal react components with state and with effects and whatever, and then
[01:31:16]  just wrap it in a block and it works. Cause like basically what we do is we take all that state effects, put in a parent and then put the state down
[01:31:23] . Yeah. Gotcha. Right. And then you project it through. Okay. Yeah. That's, that's the trick. Cause the thing is, uh, is can
[01:31:31]  I, where, where can I show this? Maybe I'll just throw a solid playground. What do I do? Oh, this is from one of my, I was
[01:31:36] , I was showing concurrent rendering, uh, in a, in a, in a, in a talk I did recently. So I must've left this open. Um
[01:31:44] , it doesn't matter. I'll just go to the bottom here. Ignore this in the corner. If you can, what I'm saying is something, some people
[01:31:52]  don't realize about react is you can have component, right? And you can go in here and I'm going to put in child, right? This is the reason why
[01:32:04]  server components stuff work. What I want to point out is like, if it, it's possible here that if, um, you know, if, um, if
[01:32:13]  component here updates, it doesn't necessarily need to re-render child. Um, it's something that people don't realize. It's almost like automatic memorization.
[01:32:26]  There's a difference between a child being here, being passed in and between like having, you know, the component definition and then return child. like here, when you
[01:32:45]  have some state, whatever here, when you have some state, like you're compelled to know that when this changes, that you have to like, you could impact, like
[01:32:58]  you rerun this function, but the, the, if it's hoisted out and projected through the parent, then it doesn't, it's not necessarily tied to
[01:33:07]  that state update. It's in fact isolated. You can actually tell by looking at this that like here, there's a potential that like something equals state dot something, right
[01:33:18] ? There's a, there's, there's coupling here, right? Like, like, you know that like these things could impact each other, but there's no way
[01:33:25]  to get the state from inside component into child here when it's passed in this way. And this is actually why server components work like, like this, this is the
[01:33:32]  whole kind of concept of Dan Abramoff has a great article, went to memo. And he talks about all the ways you can use react without memo to actually get the
[01:33:40]  performance. This is the same trick I'm gathering. You look at the static stuff and you're like, Oh, like, you know that you can actually wrap blocks in
[01:33:49]  ranges as long as you can isolate the child projections. Anyways, that's, that's interesting. I hope I'm understanding you properly. I just, that that's
[01:33:57] , that's my, that's my interpretation of what you said. Um, it's a little bit different. It's like if we took the component and literally split into
[01:34:06]  two. Um, so I think, but like you go to. Yeah. Do you have an, do you have an example where that end result, like, can we
[01:34:15]  fake it here? Cause like pretend this was your component and I'm going to do something for you. I'm going to wrap it in a div. Maybe. Actually
[01:34:28] , let's wrap it in two divs, just for fun. If, if I understood what you were suggesting earlier, like this is our component we're looking at here
[01:34:43] . You can, uh, actually maybe help me out here. Like you, you can, you, you can pull the dynamic stuff out. Like almost like, so
[01:34:59]  this is like made up. Yeah. And we can get rid of the divs and we can get rid of these divs and we can put the state here.
[01:35:09]  And then we also have something like, like this. Like, am I, am I, am I close? Like, is it, is it, is it something
[01:35:31]  like this? Like you got it backwards. It's like the, so the return on at line one 31, the made up component would return, uh, like a
[01:35:41]  reference to one 25 and one 25 would have like identifiers as like the props. Like a bunch of like, so it would have like a reference to like a state prop
[01:35:53] . And then the return would just be like divs and then the child's component. Um, or like not. Okay. We also hoist the, the components
[01:36:03]  out cause we can't optimize react components, but, uh, that's another thing. Like, um, can you, can, is my, my, I guess my
[01:36:10]  question is, can you make an example like this to show me what you're talking about? Yeah. Very simple. Can we just like pull up a text editor and just
[01:36:17] , you show me this. I just want to kind of understand this. Can, can you share your screen for a minute maybe? Sure. Yeah. So. Sorry
[01:36:25] . I need a second. Yeah. Can you guys see my screen? Two seconds. Yeah, here we are. So we could have some sort of like function, like
[01:36:33]  counter. Yeah. With like some state. Right. Use state. And then, uh, we return some div. Yeah. So we could have some sort of like function
[01:36:42]  like counter. Yeah. With like some state. Right. Use state. And then, uh, we return some div. Div with the statement. So this would be
[01:36:56]  split up into two functions. So let's just say like the parent. Just call it pan or something like that. And then the parent would hold like this. Okay
[01:37:06] . And then return some child or like, we'll just do a lowercase, um, child, um, state is equal to state. Okay. And then for
[01:37:21]  a child, we would have. Okay. And then for a child, we would have. Return. Uh, div state. And the state's the prop. Got you
[01:37:27] . And that child's wrapped in a block. Exactly. Yeah. Whatever. Yeah. Like you get the point here. Yeah. Yeah. Yeah. Yeah. Okay.
[01:37:38]  Gotcha. Gotcha. Gotcha. So the author of the component wraps block around counter and they end up with two components, one with the state and the other one wrapped in
[01:37:56]  a block, which has the template. Yeah. Gotcha. Yeah. Of course. Question is what tool are you using to show this off? Ray.so. I
[01:38:09]  just like, it's for like, it's basically like carbon, but like made by Raycast. Okay. Cool. Cool. Cool. All right. Okay, good
[01:38:22] . Thank you. Yeah. This clarifies it a lot for me. I hope it clarifies it for people in the audience. Okay. Yeah. It's like
[01:38:29]  a different property of, of this. Um, but yeah, that's, yeah, actually you could probably do this relatively easily by just looking at the top half and the
[01:38:39]  bottom half of the component. It's almost like view setup functions, like where you basically pull all the stateful stuff, everything. I guess that the only thing that would
[01:38:48]  make this really a pain in the ass would be early returns. Um, that's exactly what we don't support yet. Of course. Yeah. So, yep. Yeah
[01:38:56] . It's, it's the same constraints you have with like solid and stuff because basically the top half runs once. Like that's conceptually the, the thing I
[01:39:03] , it's not, but it's, it's funny how these things parallel, parallel. The, the, the truth of the matter is the top half doesn't run
[01:39:12]  once, but you're, you're breaking the, the statefulness from the, from the, yeah, this is kind of, this is really funny. If you
[01:39:22]  think about it. Like, do you know why it's funny? Um, because you're breaking the state from the template and like we do this and like view does this
[01:39:32]  for example, and they do it so that the state only has to run once and then they can just rerun the template as needed. So like, you know,
[01:39:38]  it, it makes it like less confusing. You don't have hook rules, all that kind of stuff, right? It's similar to solid solid obviously runs everything once.
[01:39:46]  Um, except for like the little expressions, but what you've done here is you've done the same split and it's everything still runs over and over again. you
[01:39:54] 've just improved the performance of the template part of it running over and over again. So it's almost the opposite kind of mentality is like you've improved. You've made
[01:40:04]  the part, the, the, the template, like instead of making the state not run over and over again, which is the kind of thing that a lot of people have
[01:40:11]  having DX thing over with react and hook rules, you've made the template just not run as much over and over again. It's, it's, it's like
[01:40:20]  the opposite of view in a sense it's, it's, it's interesting that you can get performance in both ways. Um, yeah, that's, that's why
[01:40:27]  I find this amusing. Um, yeah, is it solvable the early returns I'm gathering? I mean, it is solvable. It's just like, I mean
[01:40:39] , it's like you have to do like the, like the diff part, like figure out the structural changes, like writing first and then everything else is simple, right?
[01:40:49]  Right, right. Cause basically what you would do is you'd have to figure like, make sure that there's where the references of the state are. I guess it
[01:40:54] 's fine. Actually you're, you're always going to have a single parent stateful component and then you have to replicate the structural returns from gather, keep those in the
[01:41:03]  parent and then make multiple template components. Yeah. Yeah. It's a little bit easier than our problem. Um, making things faster often means doing less work or shifting
[01:41:18]  when the work happens in and having that actually reflect the work that needs to happen. Sometimes we do extra work because, um, how should I put it? Because like,
[01:41:30]  uh, like maybe one part of the process gets run a lot and one part of the process doesn't get run as much and sometimes you can save work by just moving
[01:41:39]  the work to the part that doesn't run as much from the part that runs all the time. Um, so, uh, you know, like if, for, for
[01:41:45]  example, classic examples, reactivity, if, if, if you can move work to creation, you only create things once, but you update the multiple times and you've
[01:41:55] , you've, you've, you know, saved that. It is more interesting when you can move that creation time stuff to compilation time because then you, yeah,
[01:42:03]  I feel like we're always just pushing the, the, the, the, the, the envelope, not the envelope, but just pushing the buck, you know, like
[01:42:10] , I forget the saying, but you know what I mean? Like just pushing it down the line. So we, we still memo and use callback things. Um,
[01:42:19]  yeah, because react state, yeah, you still have to deal with the fact that react is the hook rules and react state. This is basically like a more efficient render
[01:42:29] er for react is, if I'm understanding, right. Right. It doesn't change. It doesn't change react being react, which is good in a lot of ways
[01:42:38]  because a lot of people like react. I think actually might be just like, if we separate rendering and reconciliation, it would just be like making the reconciliation better because rendering just
[01:42:49]  still happens. Right. Right. Right. Yeah. Yeah. Yeah. Yeah. It's making the rec. So yeah, it's a city. It's almost
[01:42:54]  like an optimization, kind of like the, the way that view has a bunch of optimizations or inferno. This one's different. Like don't, I'm not
[01:43:02]  saying they're, it's identical, but the idea that they can optimize, uh, the reconciliation, uh, but by doing something, you know, a little bit smart
[01:43:09] . Um, I feel like, yeah, this would be interesting. I feel like this is a range that something like react forget might even just like tap into. Like
[01:43:17]  if they're already rearranging all the code to save you from writing, use callback and use memo, how much do they have to rearrange so that they can cash them
[01:43:25]  VDOM nodes or whatever. But then again, I think they're doing that already actually. Um, I heard. Yeah. Yeah. So, uh, can
[01:43:37]  this help solid become even faster? Um, not really. We almost already do the exact same thing is, is, is, is, is the best way I can put
[01:43:46]  it. Like the biggest cost of solid is that there is, it's not even the creation time. It's the memory release time of the reactive variables. Like it
[01:43:55] 's the garbage collection on the overhead of the reactive system. That is a real cost, right? VDOMs are a little bit simpler in the sense that they don
[01:44:03] 't have a reactive system, but on the flip side, it means that like, like this doesn't solve the prop drilling problem or whatever, like, like, uh,
[01:44:14]  as Mishko calls it or whatever. Like there's things reactivities, update performance and way of decoupling from the component can improve. Like you saw
[01:44:22]  when I did the JS framework benchmarks, there's still places where the reactive libraries are faster on partial updates. This doesn't actually solve that, especially from a structural level.
[01:44:31]  So in a sense, the way I view this, and this could be completely off is this is actually almost like applying solids creation optimizations to a virtual DOM. So
[01:44:44]  yeah, like it's almost like this was actually us giving back, um, in a way, not the other way around that we, we go on these cycles. Sometimes
[01:44:54]  you'll probably take it further and then I'll learn something. We'll, we'll, we'll bring it back the other way. But I think that's actually almost
[01:44:59]  the way I'd look at it. Um, when would I, you want to use a memo versus a block or is that even a fair question? Oh, we
[01:45:07]  lost this camera for a moment. Oh, sorry. Um, I mean, if, if your state, I mean, if your state's going to update, then you
[01:45:19]  should still use, I mean, if your state's going to update, memo doesn't matter. Um, if it updates from a parent component. Um, so if it
[01:45:26]  does update a lot, then that block may be, oh, good. If you have like that view structure that, that works well. I see. Yeah. So
[01:45:36]  it's like differentiating the, the size of the static nodes versus like the, the state update, like they're, they're almost addressing different parts. Like you might
[01:45:47]  still use them together. Um, why is React not doing this out of the box? I think, I think, I mean, react forget is smart, right?
[01:45:56]  It can, if it caches like sub trees and it could eat millions cake a lot. Right. Um, but I feel like, I feel like this kind of is
[01:46:05]  a one catch solution for that. Like you can cache sub trees, but like there are some cases where, you know, it doesn't work. Yeah. I'm not
[01:46:14] , I'm not going to lie. I, my expectations that react forget will probably be a pretty cool DX win. I actually, I don't think, I mean,
[01:46:21]  I'm calling it right now. I don't think the performance for react forget is even going to get it to Svelte's level. That's, that's
[01:46:27]  my cold shot right now. Or it'll get it to about Svelte's level. Um, we'll, we'll, we'll have to see. We don
[01:46:34] 't know, but that's, that's, that I, I, I don't think react react, react, I mean, maybe even preact, like maybe I
[01:46:40] 'm being too, I gotta be careful. If I'm too over optimistic and then they fall short of that, then people will be like, and react has a history of
[01:46:46]  falling short on the performance side. Like it's just, it's not their focus. So it's like, I don't know what I'd say. I,
[01:46:52]  I don't think performance is going to be the key driver there. React bundle going to be at Svelte level. That's, that's an interesting question, right
[01:47:05] ? Like, are we training one thing for another? Is it, it's a code size going to get larger too? Yeah. Svelte has some of the biggest
[01:47:10]  compiled output. Um, I, I don't think so. Most of Svelte size comes from like their template transformation. Um, I, I, I imagine
[01:47:19]  react state transformation isn't going to add that much on size. Um, okay, let's, uh, we got, I want to, I do want to look
[01:47:30]  at some react stuff. Like, is there an example or what, what, what should we look at next? Actually, it's a good question, Nate. And
[01:47:38]  I'm, I'm sure I want to get back to the questions in a minute, minute, but I think I've got a good, we've all got a good
[01:47:43]  sense now of like what million does well. Um, but I, I'd like to see maybe, do you actually, maybe it's a good time to show your
[01:47:50]  other example is your stock ticker example, pure million or does it, is there react in it? There's react in it. It's just like. Perfect. Then
[01:47:57]  I think that I think let's, let's do it. So, oh God, I forgot the name. It's donks. Um, and I can show the
[01:48:06]  code as well. Yeah. Let's see. It's just donks. Wait, I forgot what it was called. So I'm like, so not ready for
[01:48:17]  this. Okay. That's, that's, it's, it's, it's, it's all, it's all good. Let's see. So if we
[01:48:25]  kind of look at the implementation here, it's just like a data map, right? With like table rows and, oh, well, I said, let's do the
[01:48:36]  UI first. That's probably a good idea. Yeah. Let's see what we're actually building here. And so can you blow it up a little bit for me?
[01:48:43]  It's like just a tiny bit too small. Okay. How's that? Yeah. That's better. Yeah. So, yeah, it's basically, um,
[01:48:52]  a bunch just has a random faker data and then, um, you can have like a diff, like how much it, what, like how much it gained,
[01:49:01]  how much it lost, and then it's price. I don't trade stocks at all, so I don't know how it works. This is probably not how it works
[01:49:07] . Um, but yeah, so in terms of rotation, each row is like TR here. It's interesting. Yeah. I, I, another good benchmark for this
[01:49:19]  kind of stuff is the old DB Mon paint refresh benchmark. Um, but let's, okay, I got it. It's a, it's a table, is a
[01:49:26]  table on a table. It's like a double map or is it, or is it, uh, no, it's just a table and then like, uh, two
[01:49:32]  rows. Okay. Um, and then the milling one is effectively the same thing. Um, anything that's inside of four will become a block. So, um
[01:49:43] , this is just automatically optimized. Gotcha. And then you have a four each. Oh man, I love seeing the four component in the wild. I'm not going to
[01:49:50]  lie. Let's yeah. Okay. And then, uh, there's kind of like a switch you can, you can do here. So we're currently using react and
[01:49:59]  this is react lag radar radar. I don't know how scientific it is, but. Interesting. Have you tried doing this with concurrent rendering? Sorry. Like adding transition
[01:50:08]  and transition before we do that, let's just show me what you're trying to show first. So we switch. I really hope this becomes better else. It's going
[01:50:21]  to be really embarrassing. It's like when you're streaming and you're like using more computer resources. Yeah. I mean, it is better. Yeah. But yeah
[01:50:31] , I mean, you, you also have the FPS in the corner here at what? You can see like 20. I don't know what's going on. Okay.
[01:50:41]  Switch back. Yeah. Anyway, we don't. Go back. I think react is more red, like overall speaking. Yeah. Okay. Yeah. I mean,
[01:50:54]  definitely reacts. It's funny because you can see it reacts more at like 12 where you were more at 18. So you're like, you know, in this example,
[01:51:02]  one of working out the computer, it looks, you know, okay. Can you send me a link in the private chat? Let me, let me see if it's
[01:51:08]  any different on my Mac book pro. Yeah. Let me, let me see here. Okay. Yeah. This is, this might be a bit better. Let me
[01:51:22] , let me pull this across here. Huh. Interesting. Okay. I mean, it looks way better than on yours. So let me, let me put it on
[01:51:42] , but reacts also not doing too bad on mine. Reacts getting pretty decent numbers. June, June, like there's on the, there's like a, a delay
[01:51:56] . And then when I switched to million, it's, it's smaller and it's smoother. Um, but this might not come in as obvious in the stream.
[01:52:06]  Um, I love tests like this, but let me see animation demos are always harder to see. I'm actually interested. I was interested in a memory usage, but I
[01:52:23] , yeah, it doesn't make any sense to me. We're at, we're at like both opposite extremes right now, where on your computer, they're both really
[01:52:30]  slow. And on my computer, they're both really fast. Um, so like million is like, you could tell million never really gets red here. Like it's
[01:52:38]  just like a little orange thing. But like when I, so you can see react to the tail is much longer, but it's such a brief flash that you're not
[01:52:47]  seeing this. Uh, these kind of tests are always hard. It was, it was actually like when I showed that playground, uh, here. Um, Oh,
[01:52:55]  sorry. I put a bunch of garbage at the bottom here, but when I showed that playground, when I was earlier here, I was trying to do the same kind of
[01:53:03]  test with the green here. And I was like, Oh, if you go to a hundred, you know, 500, but you can see that even 500 chugs on
[01:53:12]  its own. But my point here was like, this has slowed down and if I turn off concurrent rendering and solid and I do the same test, things should be getting
[01:53:24]  way worse. Like, but you know, these demos never work the way you want them to. Oh yeah, here we go, but like, but you know what
[01:53:36]  I mean? You can like see ripping on the screen. So you go there and yeah, but yeah, these are always tricky. What's this 500? Yeah. See
[01:53:47]  concurrent. Yeah. It delayed. Anyways. Yes. I, I get what you're trying to do. The only problem is it just, on my side, the red
[01:53:54]  it's too small and on your side, it's too big. So, ah, it is what it is. Um. There's another demo if you want to
[01:54:02]  try. It's, it's more skewed cause each row has like, um, which one I, the, the one thing that I was hoping here, I,
[01:54:13]  if you do do this to do like tweak the numbers and get to this to a nice spot, I think you should have a concurrent version of react as an option here,
[01:54:21]  just so that people, because that's what someone's going to say to you. The funniest thing is it's tricky one because concurrent react doesn't mean reacts doing less
[01:54:31]  work. Like you're actually making it do less work. Right. It just means that it doesn't look as bad. So it's like, it's kind of misleading
[01:54:38] . Um, and I, I feel like that might be the argument that the react team makes instead of optimizing the reconciliation, if we can use concurrent rendering, like especially,
[01:54:49]  yeah, I, this is something if I were you, I would be curious about at least because then you'd be like, okay, lots of limitations of that.
[01:54:55]  And yeah, like if concurrent rendering makes it seem like an example, like this seem even smoother than optimized rendering, who cares? Well, the truth matters at a certain
[01:55:06]  point you do care because as I say, concurrent rendering can't change the total amount of work, right? You saw my 500 issue. I was even glitching a little
[01:55:13]  bit. It's because 500 is too much in this scenario. Right. It only, it only changes the, it only schedules the pure computational work, but I do
[01:55:21]  think it's actually kind of interesting. Okay. So you got another demo for me here. Let me see. Yeah. Yeah. Full disclaimer. This one's like
[01:55:30] , so each row has like a hundred elements. And so this is like a lot, a lot of elements. We're just testing here. I'm going to, I
[01:55:36] 'm going to just kill the other one because I just don't want to risk. And let's put this one in. I don't want to risk like some kind of
[01:55:46]  background thing. Okay. So million versus react demo. Oh, so when you say react versus fiber, is this 15 versus 16 or something else special? It's using
[01:55:54]  the same version, but fiber use start transition. Okay. So, okay, good. So we'll see concurrent rendering. All right. Is this the idea that I'm
[01:56:02] , I'm supposed to do this like really, really fast. You might need to put up a note count. So there's some more effects. Okay. Yeah. All
[01:56:11]  right. So I can, I can, I can add a zero. I can go like this. Hmm. Oh, I did it. I killed it. Okay
[01:56:24] . Fine. Let's, let's meet in the middle. 5,000. Yeah. There we go. Let's just. Yeah. Paint it red. Okay.
[01:56:42]  It's better. Mm-hmm. This is the example I wanted. Thank you. This is exactly. You see, you can see start transition already kind of making
[01:56:59]  it. The big thing about start transition is, I love this example because it shows it. Look, when I click this on react, there's going to be a
[01:57:09]  delay, right? When I go to fiber or concurrent rendering, there's still going to be a delay. Because even if it can schedule the stuff, so it's non
[01:57:19]  blocking and keeps on spinning, it can't make the work happen any faster. Right? Right? Let's try million. I really hope this works. It does.
[01:57:30]  Okay. Yeah. And there's less. But here's the difference. There's less delay. This is the fundamental difference. See, there's less delay here.
[01:57:46]  I'm trying to raise my hand so people can see the delay. Even if I go to fiber, which has the same looking graph, to be fair. It doesn't
[01:57:54]  delay it that much. It doesn't trail that much. There's a delay. Like, million again? I can't even get my hand up. Fiber?
[01:58:24]  You see what I'm saying? Fiber C can make it so that it's smooth, so it's not doing this when I'm clicking it. It's not
[01:58:31]  like doing this. Fiber, at least, will keep the circle going around when I do this and I click it, you know, a few times. Fiber is
[01:58:38]  not going to, like, you know what I mean? But the work is still taking longer because Fiber doesn't make it any faster. Million does. That is
[01:58:48]  a great demo. People following what I'm saying? The end result looks similar. It's not blocking. One side does less work. One side smartly schedules.
[01:59:06]  But because the schedule can't change the amount of work that needs to be done, it just takes longer still. So it's less responsive. I like that example a lot
[01:59:19] . Because a lot of people don't understand the difference between concurrent rendering. Right? Yeah, exactly. It's almost as if doing less work is going to be faster
[01:59:29] . Yeah, yeah. No, no kidding. Right? So... You know? This is... This... Yeah, no, this is great. Yeah. This is the
[01:59:44]  kind of thing I was doing. This is the argument that people have against concurrent rendering. Right? Like, the views and stuff. Like, I am playing concurrent rendering solid
[01:59:51]  because, you know, why not? I need to prove... Certain part of the work I do have to prove that reactive libraries can do everything virtual DOM libraries can do
[01:59:58]  without a virtual DOM. But I was kind of skeptical. Because I was like... If you just make the thing faster... Okay. Well, actually, let's... Let
[02:00:06] 's... Let's... Let's do something here. Let's actually... Let's up this. This... This is the trade-off. Okay? Let's up this
[02:00:14]  to 8,000. I think... We already talked about it. It won't actually make solid any faster, probably. Um... Now we're at 8,000
[02:00:27] . Is that the right number? No. I need... No, this is going to be hard. I need to get the number... The problem is the creation takes such
[02:00:37]  a long time that it gets... That it gets lagged. But I need the number high enough to show the update difference I want to show. We're going to
[02:00:43]  forget about React. Actually, we're only going to be between Fiverr and Million. Because... I don't think React will be able to handle what I want to
[02:00:50]  do. I want to... I want... I want to get... I want to get back up huge here. I want... I want 15,000. The... Because
[02:00:58]  I have a theory. And I'm hoping this example proves my theory. Um... Okay. Let's try it now. Wow. See? That's a long delay
[02:01:08] . Do you see that? Click. There it is. But it was pretty smooth through it all. Right? Now let's go to Million. Wait for it.
[02:01:15]  Okay. I'm going to click it. Huh. Not even here. Can I show it? Like this actually just proves the point we were making a moment ago even better
[02:01:35] . But you notice it does pause, right? It does stop moving for a second. It goes red. So one could argue that this is a worse user experience.
[02:01:47]  But this is... Yeah. Even this is great. Because look. See the red. See the red. Go back to Fiverr. It's never going to go
[02:01:57]  red on us. But... What I was trying to show here. Let's see. Actually that one did go red. Let's try this now. Okay. The
[02:02:10]  first one went red. It won't go red again. There we go. Or it goes red like... Actually I don't know if it's even that much better.
[02:02:16]  It just goes red like a second... Like two seconds later. Click. Oh there it is. Yeah. What I was trying to point out is that in theory if
[02:02:29]  the workload got heavy enough to that both options are really expensive. Like if you got it to a point where you got a threshold where Million was super slow still and React F
[02:02:40] iverr was super slow. I don't know. I don't know. I don't know. I don't know. But you have to get to the
[02:02:46] ... Like for that to be true. You have to get to such an extreme that I'm having a hard time in this demo getting to it. Right? This is the
[02:02:55]  whole argument. Because it's like... It's not... Like you have to simulate these slowdowns. Like I'm probably going to kill my laptop before we get
[02:03:03]  here. Yeah. It's probably red for the actual DOM updates. That might be it. Right? Maybe that's what it is. So now we're at 20,
[02:03:11] 000. Click. I don't even... There it is. I put my hand down too early. It took that long. There's like two phases there. Let me
[02:03:23]  try again. Click. See it slowed down for a minute. Oh there it is. It's like in two batches. It's like there's so much work
[02:03:32]  that they had to split it in two batches. Okay. Let's go to million. I'm loving this. It's like all the followers are leaving. No one
[02:03:40]  else is loving this. Only me. No seriously. The viewer count's dropping right now. Clearly no one cares about this as much as I do. Let's try this
[02:03:51]  with million again. Click. Click. The red's just a little bigger. Yeah. Yeah. I... Yeah. I mean... There's concurrent rendering that matters from
[02:04:08]  a... Navigation. I/O standpoint. That I'm all behind. But from a CPU user standpoint. You're seeing the problem. You get to a point where
[02:04:17]  the work is so expensive anyway. That all React can do is delay it from happening. Like it can't make it actually any more... Like it just doesn't solve
[02:04:29]  the performance in the way that people expect. Anyway. I think I've nailed this one down to like, you know. You know. Yeah. Are they just using
[02:04:40]  queue microtrath? No. They have a dead letter queue with priority queue. Basically. And they basically do as much work as they can within a time window.
[02:04:51]  And then pass priority and then do as much work. And they only do the pure work. Like the rendering work. They don't do the diffing or patching
[02:04:58]  kind of work. So. And then they basically keep on doing this work in the background as they can. Until they get to a point where they've caught up. And
[02:05:06]  then at that point they flush. And then apply all the DOM changes. Basically. If you have some like expensive 3D thing. That's like expensive on the rendering side
[02:05:14] . Concurrent rendering doesn't help you. It's only for pure computations. It's hard. That's probably the problem with this test. It's hard to tell
[02:05:22]  if there's a computational overhead. Maybe the computational overhead is not high enough here. To actually trigger this. And we're just seeing the DOM overhead. In which case
[02:05:31] . Concurrent rendering actually just makes it worse. Maybe not worse than React without it. But it's like basically. I mean. I'm going to temp fade here.
[02:05:40]  I'm going to go back to React. At 20,000. Oh my God. There's no computation. Actually. Is there? I believe there is computation.
[02:05:53]  When like recreating the list. Yeah. Okay. There we go. So, okay. So let's do this. Oh, I already clicked it. I'm sorry
[02:06:03] . I need to do this. We'll wait a minute. No, actually. No. I must have not clicked it. Cause React would have done the work right away
[02:06:09] . So let's try it again. Click. Yeah. There we go. Click. You see. You see what's going on here, right? It is faster
[02:06:19]  than fiber. But it blocked for like freaking half the screen. So that's the trade off. Right? That's what it's solving. It's making sure that it
[02:06:32]  doesn't do this. But you can also reduce that dramatically. I mean, the problem is I'm going to have to get to like 100,000 nodes or something
[02:06:43]  before we actually... Actually, no. The number of nodes I do because this is going to turn into a DOM bottleneck is not going to make a difference here.
[02:06:50]  This thing just can't click. See? It's just smaller. It's just faster. I can't actually, with this test on its own, simulate it. We
[02:06:59] 'd have to make some pure computational overhead. The DOM... Like, I could add 50,000 nodes. It's not going to actually change the math here. Cause the
[02:07:07]  DOM is really what's killing us here. So... Yeah. I think this is fair to say that this is actually not a good React Fiber demo. But it
[02:07:15] 's the kind of thing that would cause most people to be confused. They'd be like, "Isn't this why you do this? Is it to make a performance better
[02:07:24] ?" And it's like, no, it actually only makes performance better in a very specific scenario. Well, I mean, I'm just trying to exaggerate it to a
[02:07:37]  point where we can actually see that there's some kind of benefit here. And the answer is adding DOM nodes does not show the benefit of concurrent rendering. Right. Anyways
[02:07:49] , this was a fun tangent. I enjoyed that. But yeah, I want to go back to in the stream. Cause I actually want to see what the difference between author
[02:08:00] ing is for a second. Cause can we see the React example with... Yeah, we already saw it. You literally just switched the map for four. Yeah. Is that
[02:08:10]  it? And you ran your compiler and you were good? Yeah. Basically. I mean, like we have like a quick start here. I mean, like it's
[02:08:22]  basically just this and then, or you, if you have a list, use a four. Yeah. I mean, we can look at some more examples, but it's
[02:08:30] , it's basically just... Oh, some, someone mentioned here that you, your million react version doesn't use start transition. So you could add the start transition to
[02:08:44]  the million react version. And then in theory, you could get the, it could also be like a little bit smoother, I guess. Yeah. But there's a
[02:08:55]  trade off there, right? You, you delay it, but yeah, because you're already more efficient, your delay might not be as, won't be as big,
[02:09:03]  which means it won't have. Yeah. It's interesting. Yeah. When I tried it, it was like basic, I think it's what you mentioned. I
[02:09:12] 'd still don't, I mean, I don't understand concurrent rendering. So like, I think there's not enough computational costs. And so when I tried it,
[02:09:20]  it was basically the same as react fiber. Right. Right. Yeah, exactly. So yeah, it's, it's, it's, it's interesting to say the
[02:09:27]  least. I, I, yeah, I liked, I liked this example. Anyway, sorry. Yeah. So yeah. Just block it. Yeah. Yeah. So what
[02:09:40]  are we looking at here? Like, so, because in your example with, did you put a block? I can't actually see you put a block anywhere. Like
[02:09:45]  in the code from the example, you just showed the. No. Um, this one, like anything inside of four will just automatically be blocked. So. Gotcha. Um
[02:09:56] , yeah. And then that's almost a good rule of thumb because like a lot of people probably don't need blocks for most things that aren't lists. Like, yeah
[02:10:06] , exactly. So like, interesting. Yeah. Yeah. Cause we already saw it. Well, I mean, we, we looked at the JS framework benchmark and I
[02:10:18] 'm pretty sure that if I go which frameworks and I go none and I put million, but my guess is it's not going to, it's not going to do what
[02:10:28]  I, what I think. I'm going to put million react right next to each other. Okay. So let's just do that. Yeah. Yeah. Like who
[02:10:36]  cares? Yeah. Yeah. But swap rows obviously list. What I was going to get at is yeah. Create many rows. This is actually substantial. All right. Um
[02:10:44] , I think the, your screen isn't shared. Right. Yeah. Sorry. Yeah. Perfect. Yeah. I'm going to say that the create many rows is
[02:10:53]  actually substantial, but I wonder how much when you're using million in react that you see that benefit as much. Uh, I think that'd be the one reason I'd
[02:11:04]  be interested in, in the, in the, in the benchmark is to see if, if adding million in react, improve the creation. Uh, I know it's
[02:11:13]  going to improve updates, but we'll, what impact will have on the, on the creation time? Because if it does this, there are more use cases where this might
[02:11:22]  actually be quite, uh, quite interesting. But if I understand, uh, from, from, from your example here, four automatically wraps the children in a block.
[02:11:37]  Um, otherwise if you put a block around a react component, it will also, it will also automatically do the splitting. Those are the two things. You look for the
[02:11:49]  block thing from a compiler standpoint and you look for components. And then is there any other optimization you do? Uh, no, not, not like related. We have like
[02:11:57] , like macros if you ever want to try them, but that's about it. Macros. What are macros? Is this just like a memoization function
[02:12:07]  or whatever? No, it's just like, if you ever want to execute code at compile time, you can do it. So. Oh, okay. Gotcha.
[02:12:15]  Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Uh, uh, uh, bun. Uh, and, uh, yeah
[02:12:26] . Yeah. Jared has been talking a ton about its macros and in a lot of cases, a lot of the stuff, I view the stuff like this, uh,
[02:12:33]  bling as basically a macro system. It's like JavaScript really wants one and we just, yeah. Yeah. Yeah. Uh, I mean like just why not?
[02:12:42]  Cause we already have, um, like if you have like some sort of like one plus one or business side here. Oh shit. We probably should not run that. Anyway
[02:12:51] . So yeah, if we, if you have something like it's actually, we will like evaluate on the serve. I just realized that that's probably not what we
[02:13:00]  want to do here though. Okay. Yeah. Anyway. Um, you only use a different algorithm for ending on the search. It does not run. It does disable SS
[02:13:11] R. So what happens if you disable SSR just doesn't render that block at all on the server and then a client renders only. Yeah, exactly. Sometimes like
[02:13:18]  we, we, you know how we have to have like the wrapper elements. Sometimes they just don't match up or. Yeah. Yeah. Yeah. But that's
[02:13:26]  okay. That, that's still cool though, that you could just have that granular control. Just being like, yeah, no, I'm not rendering on the server.
[02:13:32]  I, I, that is interesting. Chat's just obnoxious as always. Uh, um, okay. Is it a, what's this? What do we got
[02:13:45]  here? Is it a good idea to create million JS UI components and use it in your react project? Like, yeah, I guess people are still thinking, trying to figure
[02:13:53]  out the pattern for adoption. This is something you kind of, you use in, at an application level. Like mostly like the funny thing is you, you, you
[02:14:01]  said yourself, you don't want to get into the framework game, but at certain point people go, okay, well now I want to make my stuff. Like, cause
[02:14:08]  this is applied at a component level. Yeah. And then, so people, and it's done through compilation. So people are probably thinking they're like, oh,
[02:14:17]  if I use all the react components, I don't actually get the advantage. It's only like the leaf nodes, things that I might pass into those components. So
[02:14:23]  they're like, then they're like, I mean, this is a fair question. Like, yeah. Is it, what's the, is million going to have an
[02:14:29]  ecosystem? What's, what's the thinking here? Eventually like the, the, the, the one year goal plan. Cause yeah. Yeah. Um, is to make
[02:14:39]  it like more of a performance stack. I think blocks and four and whatever. It's just like the gateway drug, like react people think it's cool. And then
[02:14:49]  we, then we, we offer like 10 stack virtual plus million or, you know, stuff like that. Uh, or like, you know, performance monitoring. Cause there
[02:14:57] , I mean, there's, I mean, every, there's a bunch of performance stuff. It's just really scattered around and like having a one little like utility thing
[02:15:06] . That'd be really cool. Right. Okay. Yeah. This is, I mean, this is a fair question. Cause I, I, I, I liked it
[02:15:11] . And the reason I, I, you know, I, I don't, don't put it past parasocial debate a little bit on this. It's
[02:15:16]  just, it's like you say you're not making a framework, but then you are making a framework and I don't think you get to actually away from it. So
[02:15:22]  yeah. Um, yeah, it's, it's, it's, it's, it's, it's, it's interesting for sure. Um, yeah. Uh
[02:15:31] , but I, I, I'm glad to hear that you at least acknowledge that like that as a thing because you could, you could also be like, no, I
[02:15:37] 'm not doing this. This is for your own app thing. Um, but yeah, that's why I think you actually have to be clear about this. You have
[02:15:44]  to actually make a decision whether to support the community in this direction and say like, yeah, this is a good thing or not. And I know that puts you kind of
[02:15:51]  out on a ledge, but you know, it's like, it's like, I think it's kind of an inevitable if that's, if, if, if,
[02:15:56]  if that's where things are going. Right. Table libraries and stuff like that are, are people are talking about a perfect example. This is where we've,
[02:16:04]  when you, when you have good performance, um, uh, well, that's a tricky one actually. Tables are like one of the places where a lot of people
[02:16:11]  care a lot about performance. That's where I saw it's actually on a huge gains there. But then again, solids update characteristics make it almost ideal for tables.
[02:16:18]  I'm trying to think if there's like something similar for a block VDOM that would, that would be like a use case that would be like really like, I
[02:16:25]  mean, I'm sure you'd like already being better at react pretty much across the board. I think you could have benefit there, but where, what kind of stuff would
[02:16:33]  really benefit from a million, um, kind of components like that. I'm trying to think if there's any like structural, like stuff that is mostly structurally static
[02:16:44] , but yeah, tables is probably still a, probably a pretty good place because you it's, it's the, it's the number of dynamic entry points over that might
[02:16:55]  eventually balance out. Um, maybe, maybe the stock ticker example is like your sweet spot. I'm just pointing out there things that are actually static, but update a
[02:17:05]  lot of stuff at the, at the same time. right where reactive libraries, a lot of the strength is actually things that are mostly static that update, not as much
[02:17:12]  stuff at the same time. It's so good at doing small updates, like swapping a row and doing that. But what if something where you have to like blasted
[02:17:19]  a billion times that might with a lot of data that might, that might be sweet spot in either case, just an idea of like where integration, like where the prioritize early
[02:17:31]  integrations. Yeah. Yeah. Yeah. Yeah. And I mean, maybe that's why Angular wants signals. Just, just putting it out there. Uh,
[02:17:45]  if you see AG grid, do you go back, check out my stream. We, we absolutely kill it with solid on, on AG grid. Okay. Games.
[02:18:02]  Games. Games is an interesting one. Yeah. Yeah. Yeah. It's yeah. Actually games is actually a really good one. It's what I described. And it
[02:18:12] 's an example of where people like, uh, immediate mode mental, mentality more like retain mode is generally more performant. Um, but people like, uh, immediate
[02:18:23]  mode mentality in games. That's like, we're like the, that's like one of the biggest example. Most game engines are immediate mode. Almost reacts to influence there
[02:18:31] . Yeah. I like that. I like games. That's a good, that's a good thought. I don't know how that like practically transforms into like game
[02:18:40]  engine components, but I think that's actually a very, a very good thought. Okay. Cool. Um, yeah. So that's it. That's interesting. It
[02:18:51]  doesn't actually take that much. You can basically, well, how does it work with like imports and stuff? Do you like, how do you set up your project?
[02:18:58]  I guess is my question. You have the quick start guide should be, um, but I guess when I'm. Okay. So take a look here. Yeah.
[02:19:09]  Let's, let's look here. So you install it. Millie react. Then you put the lock in. I got that. Is that just it? It like
[02:19:16] , you said there's a, how the compiler bit, like you said four automatically does it. Is there like a, is there like a plugin for it or something?
[02:19:24]  Like, Yes. We use, we have unplugging, which is like works with, you know? Yeah. And then we have, and then unplugging gives us the
[02:19:33]  code and we run a Babel transform on it. with our Babel plugin. Okay. And then from there, you know, I'll close down. Okay.
[02:19:41]  So you could just like unplugging that works with like V works with web pack works with. Yeah. And then, sorry. And you have an additional Babel plugin.
[02:19:51]  We do provide like a Babel plugin, but if you want to use it, but yeah. Okay. Gotcha. Okay. Yeah. Sorry. I was actually just
[02:20:02]  looking at the docs. I'm, I'm actually on my screen now looking at the exact same page. And I was actually trying to see your, you don't mention
[02:20:09]  the plugin. Do you hear this is no, this is just like a, like getting to learn. Yeah. Yeah. Quick start. And then installation. Use the
[02:20:19]  compiler. Okay. I got you. Here you go. Nice. Next. Experimental optimizer. Okay. So this is the thing that does all the cool magic
[02:20:28] . Yeah. Or no, this is the thing that, so we have the magic by default in the compiler. And then the, the things that make it into like,
[02:20:46]  we, we analyze on the server or compiler is that it, it, it works kind of not really, but you can try it out. Okay. Okay. Okay
[02:20:59] . Cool. Cool. Okay. We got some questions coming in. So this is, yeah, now is a good time to ask your questions. Um, we're,
[02:21:07]  I think we're at the end of our demos, right? Aiden, it's, it's question time. I think so. Yeah. Yeah. Okay. So
[02:21:15]  what we go. Okay. Okay. Well, that's, can you explain that? That was actually for me. Can you explain the game comparison to react? Yeah
[02:21:23] . It's just like in most game engines. And I think it was mentioned right above in the chat. They re render the whole frame. Like every frame, they don
[02:21:30] 't keep like a representation around an update. They just like, like everything's, they, they know their FPS is pretty constant because like every frame, they do all the
[02:21:38]  rendering work over and over again. They basically like throw away the previous frame. Um, which seems really inefficient, but it means things stay consistent because they can always just
[02:21:47]  go like, what's the state? And then view is a function of state. Like it's very straightforward. React was built on those principles. I was just saying
[02:21:54]  like one of the like advantages, like the funny thing is the dom is retain mode. It's not like that. You don't throw away the dom every frame. You
[02:22:01] , you keep the dom and you mutate it. So that's why like reactivity, um, fits well with the dom because you don't, you run the component
[02:22:08]  once and then you update just the things that change. Right. Um, but if game mentality is like, let's just re render it, throw it away. Okay
[02:22:15] . A more efficient reconciler in that world would be great. Like that makes a ton of sense. What do we got? Greg, Greg is the creator of L
[02:22:26] eptos. For those who don't know the rust, uh, react delivery. The great thing here is the best of both worlds thing. I think there'll never be
[02:22:33]  a block dom or EV or one more adoption in a meaningful way. But react integration is so simple here. There you go. Yeah. What would an NPM component
[02:22:45]  live bundling look like? It describes the app to set it up properly. Yeah. I guess this is a fair question. Do you, do you follow what he's
[02:22:52]  asking? Like, do you think people would pre-compile at like for the lib or in, or would the application be the one responsible for doing the compilation or?
[02:23:02]  Definitely pre-compile. Cause we can only analyze JSX currently. And then I don't think component lives ship JSX. Do they? I'm not sure.
[02:23:13]  Well, yeah, most of them don't in the react ecosystem, but it's, I, this is, I, I, it's a fair question. Like
[02:23:18]  for example, in solid, we actually ship the source because we do different compilation for client and server and hydration and all this stuff. Svelte switches source. View ships
[02:23:25]  are short. React pre-compile. React pre-compile. So generally speaking, I'm guessing you'd follow suit there. So you do all the,
[02:23:31]  the, you just, you'd have to use a plugin like this. If you're a library author and include as far as your build step. And then people would
[02:23:39]  just import the components, install million. And then it should just work. If I understand. Yes. I'm not sure if this has been asked, but I'm
[02:23:54]  curious. Is Aiden the only person behind million.js. Did he come up with this idea or are you sponsored or funded or anything? What's up? Sure.
[02:24:01]  Fair question. I just hated getting this question early days, but go for it. Yeah. Originally it was me, but now, um, we have like a,
[02:24:10]  oh my gosh. I don't even know how many, like 10 person team. Um, mostly, mostly it's community. And then we have a couple R and D
[02:24:19]  I think Tom just asked a question earlier. He's one of the contributors. Um, but yeah, we're, we're, we're, we're, we're
[02:24:26]  going on individual sponsors. And if David is still in the chat, I asked him for advice for like, okay, how do we get like more, like how do
[02:24:35]  we break even? Uh, like, and so, yeah, so we're still looking into how to get sponsored, funded and, you know, paid contributors. Yeah.
[02:24:47]  Um, do like, do you, just out of curiosity, I mean, I want to ask, do you have any plans there? Are you, are you, are
[02:24:53]  you, how should I put it? Like, it's funny. Like you, you, you're going to go to university next year. You just, it's
[02:25:00]  high school. So my, my guess is like, you're very much on the open source path right now. Like, uh, like open collective donation, that kind of
[02:25:07]  deal. Right. That's the plan here. Do you, do you guys have a way of collecting money like that? Do you have a. Yeah. It's just
[02:25:15]  through. Or Patreon or whatever. GitHub sponsors. Yeah. We've given sponsors. Uh, I can send in the private chat, but yeah, it's, it
[02:25:25] 's not easy, but like, yeah. Um, one thing I'm thinking about is like, um, how do we get companies to use it? So they could
[02:25:34]  consider like thing is like, we're in a chicken egg problem, right? Companies don't want to use it because other companies aren't like, not enough companies are using
[02:25:42]  it in production and therefore they don't want to use it. So how do we convince people to use it? And then also that problem doesn't go away. Not
[02:25:50]  for a long time. Yeah. Yeah. But yeah, no, I, I, I follow you. Um, yeah, it does start with this stuff. Um,
[02:26:00]  I'm, I'm, I'm, I'm glad to see a lot of familiar faces here sponsoring the project. People like Anthony, um, very, very awesome.
[02:26:09]  Um, so there you go. Okay. Cool. Cool. Cool. Cool. Yeah. This is important. You know, this, this, these funds help.
[02:26:24]  Obviously when companies back, they can give larger chunks of money, but, um, it does start here at first. It's funny cause you usually don't have a ton
[02:26:33]  of money to like tons of things to spend on. You're like, yeah, I, I've collected a few hundred dollars. What am I going to do with it
[02:26:40] ? I don't have to pay someone to do anything. Yeah. Covering the website fees, but you watch it and it grows. And then eventually, you know
[02:26:49] , you can do stuff. We, we've managed to start a fellowship program with solid, which is based off the open collective. Again, it's not enough to pay
[02:26:56]  someone full time, but it's enough. Um, it, I mean, we'll talk about a bit about that later, but it's enough to, you know,
[02:27:02]  fund. It's been enough to fund, you know, various projects for like a couple months here or there. And, you know, you know, let people get
[02:27:09]  paid to do work. Like open sources work. Like open sources work. Even if you know, people get to consume it for free. I'm suggesting this to
[02:27:24]  my team lead on Monday. If it works, it claims to make you proud. There you go. People trying it out. Let's go. Yeah. No, exactly
[02:27:33] . And I'm sure Aiden would love you to reach out at any time if you have any questions and stuff. Um, so here's a question. I mean
[02:27:42] , do you, you could do your best with this, but I mean, keep in mind, as I said, he, he's just about to go into first year
[02:27:50]  of university or whatever. So what are your plans for future? Do you see yourself still working on million DS or do you have other projects you have in mind that you'd
[02:27:57]  like to explore or work on? Yeah, I think my number one priority right now is like, okay, if I, if I'm like the main person driving development,
[02:28:06]  I need to like in the, in the two or three months before university, I need to figure out a way to make this somewhat sustainable. So I don't have
[02:28:13]  to like dedicate like 50 hours, 60 hours of me just working on this thing. And so, yeah, for now it's survival mode and just trying to like get this
[02:28:24]  project somewhat going, um, before I go part time. Um, but I, I haven't looked into like fellowships, not, not solid fellowship, but like fellowship
[02:28:34]  in general. And just like saying, can I, can I take a gap year or gap semester? Just working on this thing. Cause like, I like working on
[02:28:42]  it. It's, it's really fun. Um, everything from engineering to community and whatever is, it's a lot of new things. And maybe it's because I
[02:28:50] 'm like in the honeymoon period, but yeah, it's yeah. Oh, that's, that's great. Um, okay. I've got a couple of technical
[02:28:58]  questions while we're at it. I, I mean, I, I think this is the first thing that comes to someone's mind. I know the answer, but go
[02:29:05]  for it. What if, what if I just wrap my root component in million JS block? Is that just when, what, how does that, what happens? -
[02:29:13]  No, I mean, I mean, it depends. I mean, like if you just have like one giant app function component, then yes, probably, but maybe a
[02:29:23]  little bit like improvement, but like generally you want to like use it where it's needed at the moment, because there are trade-offs, right? There are certain trade
[02:29:33] -offs with this approach. If it doesn't, if it like hits somewhere, it doesn't work. It just defers back to React. So technically you won't
[02:29:40]  have any like performance debuff, but like, you should probably figure out that. - My understanding of the compiler, 'cause the way it is, is you're
[02:29:49]  basically just gonna split the JSX in that top level component. So if your app component literally is like a bunch of context providers, like not much is gonna happen here.
[02:29:59]  Like it basically, putting block around your React component goes, okay, here's the template. Here's the state. I'm gonna optimize the static parts of that template.
[02:30:12]  but that template might have other components in it that have other components in it. And those all aren't going to be like leverage that benefit unless they themselves are wrapped in
[02:30:24]  blocks and for their static parts. Yeah. - Exactly. - I have some of the comments here. You should just work on a weight lift. It helps for sustainability
[02:30:39] . - I did try squats the other day and I have like a bruise here 'cause I like did not get the form right, but... - Yeah, I'm
[02:30:48] , yeah. - I saw that you got, and I also saw that you reached 10,000 stars on GitHub this last week and you promised everyone that you would shave
[02:30:59]  your head. What was that all about? I'm just curious. Let's see if I can actually find what I'm looking for. Yeah, Aiden, Aiden
[02:31:09] , Aiden. Yeah, here we go. I found what I'm looking for. - Oh God. - Let me... - So yeah, it was like 3
[02:31:20] :00 AM. I like woke up in the middle of the night and I saw like this tweet from... like if you click on the original tweet, there's like
[02:31:27]  someone with a different project. They were like, oh, if we hit 10K, I'm going to shave a mustache. And I was like, okay, you know
[02:31:33]  what? I'm going to do you one more. I said real bald. Yeah. So, I mean, it's, it's halfway there, you know? -
[02:31:40]  Yeah. - There's, there's compatibility. - Now, is this an like Avatar Last Airbender reference or what's going on here? - Exactly. - Exactly
[02:31:51] . - Okay. Okay, good. I'm not completely... I was like looking, I was like, this arrow. Yeah. Some people mentioned at the beginning of
[02:31:59]  the stream, they were disappointed that you were not bald for the stream. So... - I thought about it. Like, but like, it's going to take me months
[02:32:07]  to grow it back. And I was like, no, that's too much. I'm not committing that much for this project. - Oh yeah. Yeah. Yeah.
[02:32:16]  It's like, yeah. Don't shave your head. Don't get a tattoo. - Oh no. - No, no, no. I, the tattoo's
[02:32:23]  not from the framework. - Okay. - I just got to, I just got to do that for, for, for fun. Um, my, my, my old
[02:32:30]  punk rock band was also called solid. So. - Oh, right, right. Um, but, uh, what, sorry. Where is it? Yeah. -
[02:32:37]  If we had 10k sponsors, then maybe. No. - People just give me a hard time about that. - Oh man. - Anyway. Okay. All good.
[02:32:43]  All good. Okay. We're going to wrap up with Aiden pretty quick here. Unless there's any other questions. Um, we're going to get onto this week
[02:32:48]  in JavaScript. I think it was really cool. Um, hearing about the block V DOM in million JS and mostly just how easy it is to just put it into react
[02:32:55]  and for people to get some level of benefit. It is interesting that I really enjoyed that example we had where we, uh, looked at the difference between the like
[02:33:24]  concurrent rendering in that because it is a very clear way of seeing the difference between reducing work and scheduling work, um, as a demo, which is really, really cool.
[02:33:33]  Um, so yeah, I, I think, I think this is very cool. I, I, I'm honestly in awe, um, of a high school student putting
[02:33:42]  this together and already making such a big impact. Um, you know, there's a lot of people into it. So just hit 10,000 stars on GitHub and
[02:33:51] , uh, already, you know, top performance and benchmarks, very impressive work. Um, and I'm looking forward to see, uh, where you take things moving forward
[02:34:00]  in the future. And, uh, yeah, it's, it's, it's, it's awesome. Yeah. I really appreciate it. Like, I think honestly
[02:34:09] , this wouldn't have happened without your guidance. Um, and thank you for featuring in the stream. Like I said before, like this is, this is kind of
[02:34:17]  surreal. Uh, usually I'm the watch watching the streams and like shit posting in the chat, but now I'm, I'm on the stage shit posting. It's
[02:34:26]  like a big difference. Um, so thank you so much. I really appreciate it. Yeah. No, this is, this is, uh, very impressive stuff.
[02:34:33]  I couldn't say it any better. Um, super fun to look at. And honestly, I had so much fun making even the thumbnail, uh, with the, uh
[02:34:41] , the, the, the lion or whatever, uh, really cool branding stuff, really fun stuff you've done with millions. So keep it up. Great work. And
[02:34:50] , uh, we're going to let, we're going to let Aiden go, but the stream is not over. Anyways. See you Aiden. Don't leave
[02:34:57]  yet. Actually, wait, wait, wait, wait. I didn't give you a chance. Any shout outs, shout outs, links, anything you want to,
[02:35:03]  want to share with Trigo. I'm, I'm, I'm, I got ahead of myself. Sure. My, uh, my Twitter is Eden Y by here
[02:35:10] . And then you can go to million.dev if you want to check out the projects and go start. All right. There you go. Perfect. Okay. Thank you
[02:35:21] . Till next time. All right. That was awesome. Wasn't it? Yeah, no. Uh, I w I was definitely entertained, uh, uh, by
[02:35:34] , uh, some of the stuff when I was going to go build this, the thumbnail here. Uh, sorry. Where am I? Here. I was like trying to
[02:35:45]  find content. I'm like, I could use this. Um, I ended up using the lion that I found from the, uh, million, uh, from the
[02:35:53]  actual account. Um, yeah, I don't know how many people realize that they're like, what's with this logo? It's, it's the, like
[02:36:00]  the mouth of a lion, right? But if that wasn't obvious enough, this great image here, um, gave me everything that I needed to work with. Um
[02:36:14] , so very cool. Okay. So let's, let's get set up for this week in JavaScript. Yeah. We're going to talk about a few things. We
[02:36:21] 're going to talk about, yeah, I, I, I've been a little bit in my own zone here, but there, there has been a few happenings
[02:36:31]  this week. Um, and we should be, we should talk about them. Um, obviously there's the, the announcement for the funding. Give me a second. I
[02:36:45]  was like, get stuff all set up here, close down that million demo. So the 20,000 rows or whatever, don't, uh, sit there and,
[02:36:57]  uh, clog up our, uh, our performance here. All right. Yeah. Give me a second. All right. Yeah. I haven't had the most active Twitter
[02:37:12]  week perhaps. Um, but, um, and I haven't been following a ton of what's been going on. Um, so yeah, people have stuff that they
[02:37:21]  want to talk about. I think it's probably worth it. Oh, I hate this. So I'm just realizing one of the funniest thing that Twitter does is when at
[02:37:29]  a certain zoom bookmarks disappear. Um, I don't know why it's like they just missed it in the UI, but book, like bookmarks, which I use
[02:37:37]  for this part. So I have to have to zoom out to zoom back in to actually get to the bookmarks. Cause they, they just don't show up on the
[02:37:44]  menu anywhere. Uh, it's like they added that Twitter verified thing and then now you can't find bookmarks. There we go. Once you get above one 25
[02:37:58] % on the screen. Okay. Let's go. All right. All right. People still there. We had a bit of a drop off, obviously, after Aiden
[02:38:07]  left. But I mean, I knew there's a lot of, uh, million JS fans in the house today. Yeah. Yeah. Let's, let's talk
[02:38:19]  about a few things. Um, okay, cool. All right. Um, let's start with the, the more happy news. Let's start with that. Okay.
[02:38:31]  So yeah, let's, let's go. Um, everyone is on threads anyways. Yeah. I saw that, but I'm, yeah, I'm, it
[02:38:42] 's fine. I'm, I am still in my zone. I, I had my first interaction on Twitter with Ryan Florence in a long time, which was actually, actually
[02:38:51]  I didn't interact. It was, it was fun to see that he's back. Um, anyway, I deleted my Twitter app. Getting out of hand there to
[02:39:01]  drain my energy rather than inspires. Yeah. I, I, I think there's been a lot of that sentiment recently. I thought it died already. I'm not gonna
[02:39:11] . Yeah. All right. Okay. So yeah, let's talk about this week in JavaScript. Um, for me, a couple big things happened this week. Um
[02:39:21] , thing, you know, that I hinted or perhaps leaked last week, um, as well, but it's fine. Uh, so I actually got a lot of
[02:39:30]  very nice, uh, private DMS this past week where people are like, Hey Ryan, if you don't want people to realize you leaked something, don't mention it
[02:39:36]  while you're on stream. No one would probably have noticed. I was fine with it leaking. I just didn't want it to be the topic of discussion in the
[02:39:44]  chat. Um, but it was fun because a lot of people came on Twitter after we made the announcement and were like, we're like, uh, Hey, I saw
[02:39:51]  this last week, you know, people felt like they're in the know, which is a lot of fun, I think. So anyway, let's flop flip over to
[02:40:03]  my screen. First thing, um, I'm glad this was recorded. Um, I started this week. I did a space with Mishko Hevery, um
[02:40:11] , where we talked about the future front end. I, there are some criticisms at that space was a lot of just like us talking about why signals are the best thing in
[02:40:19]  the universe. Um, like for like literally almost an hour. Um, I, I think it's fair. We probably went too far, but you can at least play
[02:40:29]  the recording in here. At one point, someone asked to compare react server components to PHP or whatever, and I just lost it. So some people would probably find that
[02:40:39]  fun. But in general, um, I don't know. Uh, these discussions of looking further out, I find really hard. Um, admittedly, uh, you
[02:40:48]  know, I think we're actually at a time where there's a reasonable amount of uncertainty. Um, there's a lot of, and we talk a lot about that
[02:40:56] , a lot of tension to, you know, to push things towards the server to reduce client side costs, but at the same time, a lot of people who will never
[02:41:04]  make that switch. So, yeah, I, I think we're in an interesting place and I wish there was more answers, but I, I want to find out.
[02:41:14]  That's the thing. Um, how else are we going to find out unless we try and explore these avenues? Yeah. We'll be around last week to see
[02:41:27]  what you leaked. Yeah. Well, the big news this week was definitely for us and the pretty big news in general, like, it's decent amount of likes.
[02:41:39]  Um, we've been working, um, to secure funding from the, uh, Aurora project through Google Chrome. Um, and, uh, it's all gone through now
[02:41:47] , which is absolutely amazing. Um, it's a, it's a big chunk of money for us. Uh, $30,000. I, I think, I
[02:41:54]  think if, in fact, I think they've already started, um, dropping money in here. Oh, oh, they're going to do magic link me. Aren't
[02:42:05]  they? That's annoying. Uh, I hate this. Give me two seconds. Uh, the funny thing is I probably could have just, you know what? Screw
[02:42:17]  this. I think I can literally just go to GitHub. Or no, go to SolidJS.com. Go to, is there an open, do we not have
[02:42:29]  the open collective link here? It's probably on the GitHub. Why am I just like, so, yeah, here we are. I believe, I think, if
[02:42:46]  I look, we should have, yeah, the first Chrome Framework Fund drop in, into SolidStart, $5,000 today. So, I'm very excited
[02:42:58]  about this. Um, this represents us actually being able to fund a lot of research that we've wanted to do, um, in SolidStart. We kind of put
[02:43:12]  it on the back burner a bit, um, prioritizing other things. Um, this, this is pretty exciting. Um, mostly that with this kind of money, we
[02:43:27]  can actually put significant money towards getting people working on SolidStart. Um, I, I, I hint here on my quote treat full time. And that's true.
[02:43:36]  Uh, Alexis, um, you might be familiar with, uh, uh, from SolidCommunity. He, he's going to, um, be able to work
[02:43:44]  on the SolidStart research full time. We've already started work into the benchmarks. I, I think, I want to go over this announcement a bit, because I think
[02:43:54]  it's actually important to understand a lot of the motivation here and how the Chrome team even got involved. It, and it's largely because, uh, if you remember
[02:44:04]  in the fall, uh, there's that taste movies app and I released this article around it and we were working on SolidStart. And Addy Azmani came to me
[02:44:12]  and he was like, Hey, we want a solid version. And I, and I was thinking about it and I was like, this is a perfect opportunity. Maybe we
[02:44:18]  can build it. And if you remember from this article, um, a number of people from the community, it wasn't just Nikhil, um, who kind of led
[02:44:27]  the charge. But I believe we, we mentioned it in here. Hopefully. Um, where did we get to it? There was a shout out. I thought it
[02:44:37]  was in this article. Maybe it's in a different one. But yeah, here we go. Yeah. Uh, yeah. Nikhil, David, seven months of Solid
[02:44:45] Community including DevRB. We haven't, uh, Zaki, Paul, a whole bunch of other people went and built the SolidStart Movies app demo,
[02:44:54]  which you can find at SolidMovies.app. And this was like basically an experimental look, um, at, um, kind of something similar to server components
[02:45:04] . We called it islands routing, um, where we can do client side routing, preserve state, and, and essentially only ship the minimal amount of JavaScript. In this case
[02:45:15] , I think it's 13 kilobytes for this whole app by sending HTML partials. And, um, it was a really cool demo. It had some gaps
[02:45:22] , still has some issues. Like there's a, everyone tells me about the scroll restore issue. Like when you navigate, sometimes the scroll doesn't restore properly. These
[02:45:29]  are, there, there are things we didn't get into, but it, it was kind of a premise proof of what we could do here. Because I have to admit
[02:45:38] , um, I'm very excited about server components, but the implementation so far haven't really made people that excited from the performance standpoint. And that's something that we
[02:45:46]  really wanted to address and look at here. Um, and the funny thing is I didn't tell the community this. I was pretty bad at this at the time, but
[02:45:55]  adding like when he was like, you know, we could fund you to build this movies app. And I, at the time I, instead of taking the money,
[02:46:01]  I was just, I didn't even notice. I was just so excited about the opportunity that I just like went to the team and went to people and like, let's
[02:46:07]  build it. I never took any money from them. It's kind of a funny story. I like was looking over it later at some point. And I was like,
[02:46:14]  Oh wait, he offered up to $10,000 to build this movies app. So I went back to him and I was like, okay, we didn't take
[02:46:21]  that money before. We really want to build this for, for real. Can you help us? And that's kind of started the conversation, right? They, I've
[02:46:31]  talked to a number of people from the, from the Chrome team over the last several months. Uh, people like Michael Mockney talking about, um, IMP.
[02:46:40]  And we really decided that we need to take a really empirical look at this. Decide if these choices are worth it. Serialization, resumability, islands
[02:46:50] , how this actually impacts the measured performance of this, of this, of, of what we're doing. And as I said, Alexis has already started on making a new
[02:46:58]  set of server side benchmarks to look at hydration and server rendering costs so that we can, you know, compare each step of the way, whether our experiments are actually going to
[02:47:09]  have a positive benefit. Because honestly, we could put this together and then, you know, because we think it's cool. And if it didn't deliver on performance
[02:47:16] , it's like, we're kind of wasting everyone's time. People are already happy with the DX they have of apps today. Sure. There might be like little trade
[02:47:24]  offs that might be better in some ways and worse than other ways. But this, this, this whole thing is, I feel like we're only going to be very compelling
[02:47:31]  if we can actually show that there's a positive benefit for a lot of websites here. And I'm, I'm really excited by this approach because we, we have
[02:47:40]  the potential to keep the interactivity and the stuff you like with client side apps and just reduce that footprint, you know, in terms of JavaScript. So, um,
[02:47:52]  you know, game on, so to speak, and with Chrome doing this, um, making them right off the bat, our, our second biggest contributor behind Netlify
[02:48:02] , um, is, is huge. We've, we've, we've actually, I want, I should take a couple moments here. Also shout out a couple
[02:48:09]  other contributors. People don't realize JetBrains is actually secretly, um, they're, they're so low profile, our, our third largest financial contributor to the project
[02:48:18] . Um, and they regularly give us a nice sum and even, and builder IO is, is fourth. Um, there's a lot of great, uh, people and
[02:48:26]  companies that have supported us, but I think a lot of times the bigger names get more attention. And all, um, three or four of these, including Chrome,
[02:48:35]  um, are making a really significant difference. This is why we can have the fellowship programs, solid hack, solid start fund. Um, so I just wanted to kind of
[02:48:45]  put that out there, but this is very exciting, right? Um, and it, it opens up new doors. We, we're going to have some more announcements probably
[02:48:54]  in the coming week. Um, and maybe even a bit further, there's, there's, there's, we, there's more things like this. I think
[02:48:59]  solid has really gone to a point where, um, people associate us with innovation, whether it's just on pure rendering hydration, whether it's on. It's, you
[02:49:08]  know, interesting areas like, uh, our research into reactive dev tools or, um, our look into, uh, um, you know, obviously signals and the reactivity
[02:49:18]  patterns in different frameworks. And for that reason, there's a lot of companies that interested in wanting to associate, um, with the brand and work together, um, to
[02:49:27]  kind of help innovate on the web. Um, this is something that we're really serious about because we care a lot about performance and we care a lot about, you
[02:49:36]  know, good user experience. So I'm very excited to work, uh, with the Chrome team and, um, you know, a lot of other partners coming forward
[02:49:48] . But as I said, the biggest thing that excites me about this is we're, we're going to take this back to the basics. You know, we
[02:49:53]  remember when Aiden was sitting there and we were talking a moment ago about how the JS framework benchmark helped us understand stuff that was difficult to understand, right? We experimented
[02:50:05] , we did a whole bunch of like, why is this fast? Why is this not fast? And we tested it and we, we iterated and we learned cool
[02:50:12]  things about underlying C layer and you know, all this stuff to the point we got to something really, really quick. Um, I think we need that kind of focus
[02:50:21]  when it comes to entering this area around hydration and server side rendering. And it wasn't anything to that degree right now. And that's why we don't know.
[02:50:31]  We all talk about like how great our server side stories are, and we just don't actually know. And I being able to return back to benchmarks and numbers and actually use
[02:50:43]  that to drive the development. I'm something I'm very excited to, um, for, um, because it's like, it's very much at home with how I
[02:50:52]  developed Sol in the first place. Right. There's an idea. There's a certain developer experience. Kind of expectation. And then the question was like, you know
[02:51:02] , what do we need to make things performant? Right. Just catching up on chat here a bit. Yeah. The, the, the Aurora Chrome project. There's
[02:51:21]  only, I think a few projects that are supported by it. This has been large. I, I may have been a little critical in the past at certain points because
[02:51:29]  like, to be fair, when they started off, they basically just said like, we're going to help open source projects. And then it looked like they were just only
[02:51:35]  funding next. It was like straight into the next react thing. And it's because they have the biggest impact. If you think about the most people using it, if
[02:51:42]  you can improve next, you improve more websites than you do by improving solid. Um, for example. And I, I, I, I met the, uh,
[02:51:49]  some of the people, you know, around the Aurora project a couple times through Marco. I, the, I pushed the Astro people there at one point. And even
[02:51:57]  the builder people, I didn't really see it with solid at the time because I was just like, I'm just going to innovate anyways. I kind of keep kind
[02:52:03]  of close my mind on this. I'm like, Oh, I'm not a company or I'm not this, you know? And then at a certain point, you
[02:52:09]  know, it's kind of silly. I've kind of grown since then. I'm just like funds like this and supportive, uh, groups like Chrome can really make a
[02:52:17]  huge difference on a project like ours. And, um, I, I feel very fortunate that, yeah, next, next and angular, I think are the main ones
[02:52:26]  that they contribute to, to be, you know, on that list. Um, um, they're, they're betting on our ability to innovate and improve the web.
[02:52:35]  And I think that is absolutely huge. We're, we're, we're obviously out here trying our best, but to have that kind of re-information from, you
[02:52:45]  know, someone like Chrome that we're, you know, doing the right things and doing the right work. And doing the right work is, is huge for the project
[02:52:52] . Yeah, no, Nikhil's still working with us on the project as well. He's just got other work. Um, so he, he, the biggest thing
[02:53:10]  with Nikhil is he's a free spirit. He wants to work on what he wants to work on. So I just make sure that what those things align and,
[02:53:18]  uh, yeah, that's the problem. I, I, I don't think I could even pay him to force him to do something he didn't want to do.
[02:53:23]  He's, he is, he, he is very driven that way, but I'm very excited because I'm having both him and Alexis on the project now, um,
[02:53:32]  is good. It's going to mean great things are solid start. Yep. I think this is something that we definitely need to look at. Routing is a big
[02:53:47]  part of this. If you haven't said to me, server components are actually a routing solution. So there's two parts of the problem to solve. There's the
[02:53:54]  partial hydration part, which is like how we reduce JavaScript. And then there's the client side routing part. And I think both sides, um, are very important to
[02:54:03]  kind of tell the whole story. And the view transition API is a big part of the routing side. Yeah. The biggest difference between our season. It's one of
[02:54:12]  it being sold to me as a, this is the way you need it to. And if you fall behind, Chris, Hey, we think this is a benefit. We
[02:54:17] 're going to test and let them know what's good for. Yeah. That's fair. Yeah. I think, I think there's a lot of potential here. I
[02:54:23]  am kind of bullish on this side, but it, unless we, it's up for us to prove, unless we can prove that this is something worth doing, then it
[02:54:33] 's not worth anyone else's time. Right? Like that's how I've always operated. Right? I think it's a huge benefit of being a big player like
[02:54:40]  react where you can get the community to test the stuff for you and you can learn from it. They can dog food it that way, which is huge that, you know
[02:54:47] , meta to do that. But I, we don't have that at our side. So all I can, we can do really is try our best with what's available
[02:54:58]  to us to approach this empirically. Yeah. See, okay. This is a good question. I think it's inside the solid start repo under a dev branch.
[02:55:13]  And if people have been watching my activity recently, I've just merged main back into the dev. It's not working completely. Basically, Nikhil went off and got like
[02:55:21]  120 commits ahead of main in a course of two weeks, basically, where he did all the RSC stuff. And he did a whole bunch of other stuff and stuff
[02:55:31]  that we hadn't agreed on yet. And he just went crazy. And I was like, okay, well, let's, I didn't know how to merge it back
[02:55:37]  in to the project at the time. And I wasn't sure I wanted to merge it all back in. Because there's a lot of stuff that like we hadn't
[02:55:43]  decided on. And if I put it in the project, then people would be using it and all this kind of stuff. And I kind of put it out there, you
[02:55:48]  know, on delay. And we continue to fix bugs for solid start in the meanwhile. I'm now trying to merge this thing nine months later. It is one of
[02:55:59]  the hardest merges I've ever done. Because Nikhil also refactored everything while he was doing it. And we've also fixed a whole bunch of stuff in solid
[02:56:07] . So like, merges aren't even lining up properly. But I'm doing it right now. So the solid movies app will soon show up, I'm hoping
[02:56:18]  on the main branch. But right now it is on the dev branch. I wonder what will come from Google. Yeah, I don't know. Web components have kind of
[02:56:33]  dropped off. But that had already happened by the time the Roar project started off. That's when around 2018, 19, Google Chrome seemed to make a kind of
[02:56:41]  shift. Instead of investing like just on the web platform and web components, they started investing in frameworks because that's what people were using. So I don't know. If
[02:56:50]  they have a place, they'll have a place. But I think they're not forcing it anymore. I think the Chrome team is looking at where users are. And I
[02:56:56]  think a lot of people seeing solid as a potential future places users are because the amount of innovation that goes on in our community. Yeah. With Netlify support,
[02:57:10]  Ryan can buy us Friday night. So with the Chrome, more of the team can buy theirs. And that's huge. Yeah. That's what this is about. And
[02:57:16]  I am stoked. With Alexis coming on full time, this is the first time in the history that we've had a second person full time on something on the solid project.
[02:57:25]  We have a lot of people part time. We're going to have more people because there's more interesting projects that we're working on that people want to sponsor. And
[02:57:31]  we'll update you on that. But this is just the start. I mean, we're going to have like a paid team of full slash part time people, you know
[02:57:40] , like a handful now in the coming months. And I'm pretty excited about that, what we can accomplish. From Chrome side, this is all about performance.
[02:57:57]  They actually helped me with this blog post because originally I was a little fluffier and I left out, you know, some of the details here. And they were, you
[02:58:05]  know, a little bit like, we have to make sure that people understand we don't just give money to open source frameworks for anything. We, this is about performance
[02:58:13]  and how we can address core web vitals. So I did a rewrite a little bit, you know, tweak the messaging towards the end where I got a little more technical
[02:58:22]  because I'd already written a big, long GitHub issue and articles about what we're doing. But I was like worried that for an announcement, it was a little bit much
[02:58:30] , but they're like, no, no, put the tech stuff right in the announcement because we want people to understand our commitment to performance and, you know, looking at
[02:58:39]  these metrics. So yeah, mostly their involvement here is like, they, they just, you know, they are interested in seeing the performance happen. So we check in
[02:58:50]  with them, you know, this is why the benchmarks and stuff are so important and advise the progress. Like the hope here is that what we learn here, and I I
[02:58:59] 've said this many times before, it's going to impact more than just solid, right? I think this kind of technology has wings and if we can prove it,
[02:59:09]  thanks to their funding, we'll be able to actually, we'll see others do similar things, right? Yeah, that's a, it is a horrific merge.
[02:59:32]  Yeah, there isn't much. I think when we solid started solid start, this is the one downside. A lot of people working on other meta framework type stuff for
[02:59:45]  solid kind of dropped off. Um, the V playing SSR guys are doing some stuff, but most people are leaving the people. This is the challenge. People know
[02:59:52]  that we're working on some stuff that are game changers in solid starts. So people are like, I'm going to like, wait to see it. Everything gets back
[02:59:59]  poured into other libraries. Solid start is just a collection of things like the router is going to be the one that takes on the routing pieces. The most of the changes
[03:00:05] , a lot of changes are in the core here. So it's not like solid start actually does anything special. And ultimately, I'm hoping that it basically disappears from a
[03:00:14]  code standpoint, but it right now for SSR that and maybe like Astro are basically what your options are. Um, it's tricky because someone could go build something
[03:00:29]  if they had a need, right? You can just use solid SSR. But I think a lot of people are interested in seeing where this is going and solid start,
[03:00:38]  you know, there's been a lot of production apps and stuff, people using it, but there are definitely rough edges for certain configurations. Yeah, yeah, exactly.
[03:00:55]  It makes a big difference, right? Um, I have to admit, Chrome's interest in us is largely around, uh, performance. So this is more of an R
[03:01:07]  and D thing. But I there's, there's, there's other people we're bringing on the solid start is kind of forming its own team right now. Um
[03:01:13] , uh, uh, interested parties. It's already started in the discord. So I think this is, this is all part of a bigger movement. Um, I just
[03:01:21] , there's a lot of excitement here right now. Only Addy Osmonek is, yeah, no, Addy's great. I, a lot of respect
[03:01:34]  for him and, uh, that what the team is doing there. Um, yeah. Yeah. Yeah, they help next and next with the image components. Yeah,
[03:01:43]  definitely. No, see, this is what we got to reconcile on this side of things. There is in parallel work being done on the stabilization of beta, but this is
[03:01:53]  mostly around future development type stuff. I, this does alleviate me though. Um, in a lot of ways, because as, as I said, um, having people
[03:02:02]  fixing bugs and start and getting that rolling, uh, helps a lot. I think the interesting thing is we have a few major projects going on. We have solid start,
[03:02:11]  we have solid 2.0 and we have this R and D stuff. And I think all three of them are interconnected to each other in meaningful ways. Each one right
[03:02:19]  now has different people working on different parts. Um, obviously, uh, the R and D stuff is getting started with Alexis getting the benchmarks going. The solid start stabilization funny
[03:02:29]  enough is I've, I mean, I've gotten a keel back and we're doing some work looking at the foundations. You know, we were working on the
[03:02:36]  Astro, uh, base where we're kind of still working on that, that foundational piece and figuring out how we can finish that up. And then solid 2.0
[03:02:44]  Milo, um, is working on, uh, with his latest research that he's been doing. Um, he, he, he did an internship over the summer where
[03:02:54]  he was working for a company that uses solid, but also has their own reactive system. And he, they gave them in the opportunity to pioneer async reactivity in
[03:03:00]  a whole new way. So this is, this is all kind of feeding back into it, but, um, there's a lot of moving pieces. So I'm still
[03:03:08]  not going to give you people a 1.0. I won't put a 1.0, same with solid. I won't put a, I didn't put a
[03:03:14]  1.0 out till I knew that it was time. And it's same thing here. Yeah. So people talking about SSR and SSR anyways. Yeah,
[03:03:26]  this is, this is, this is, this is absolutely huge for us having other people working on the project as I, as I mentioned. Okay. Um, and yeah
[03:03:34] , the, the outpouring of support has been amazing. Um, yeah. Great. It's just the other thing. I found this a little bit amusing,
[03:03:46]  but I don't know if you saw David also use this to like make official the solid start logo. Now don't get me wrong. This logo might look familiar to some
[03:03:55]  people, probably you folks, especially because you're like, wait, I've seen that logo before. Where have I seen that logo before? Um, actually let's switch
[03:04:07]  it by popular where Greg is king, but let's see. Wait, I've seen it. There it is. Um, a year ago. Well, the truth
[03:04:15]  of the matter is we had this logo about a year ago. And, um, what ended up happening was some people weren't into it as much and David was very
[03:04:26]  hesitant. And then I, you know, we're like, finally screw it. Like, let's do it. The logo is great. Um, I love it.
[03:04:34]  Um, it's got solids like, um, block design while offering like this kind of sleek layered thing, which is like what a meta framework is. I think it
[03:04:45] 's, I think, I think it's pretty safe to say that a lot of people like this logo. Um, this, this tweet kind of blew up. And as
[03:04:53]  I said, I, I thought this was awesome. Um, what was I going to say? It's the first time I've seen our buddy Brian Florence in a while
[03:05:02] , who made a very funny joke. Um, hopefully I can find it right now. But he was saying that we stole the glow, um, from remix and,
[03:05:11]  uh, I can see it now. It took me, uh, you know, the, the glow, the glow, the glowing R is, uh, is, uh
[03:05:18] , yeah. Let's see if I can find that. Um, yeah, exactly. Yeah. There's so many like careful design elements. I could probably like have
[03:05:32]  David on stream talking a couple minutes about how like all the pieces work together. But let me see if I can find my, my man Florence here. Uh, he
[03:05:41]  didn't follow me when he came back. Well, that's too bad. Anyways, I'm following him. Um, uh, where is this? Am I not going
[03:05:54]  to find it? It was just yesterday. I thought it was hilarious. No. Is it already gone? No, there's no way he deleted it. It's
[03:06:05]  just, I can't take it. Maybe he did as a reply tweet to someone. Yeah, maybe, maybe that's what it is. I'm like, I
[03:06:16]  really want to find it now, but it's, it's fine. It's fine. It's fine. It's fine. It's fine. Uh, this is
[03:06:21] , this is my fault for not being more prepared ahead of time. Uh, give me two seconds. I'm going to find it. I've, I've, I
[03:06:37] 've, I've, I've spent this time, amount of time getting here. I'm going to find it. Uh, no, it's deleted. Oh,
[03:06:47]  okay. That's too bad. Okay. Let me see. I, I guess we're up to old patterns again. Oh, that's too bad. It was,
[03:06:57]  it was funny. Um, anyway. It's just a solid logo pureed. Yeah. Oh, well. I guess no one has a sense of humor anymore on
[03:07:22]  Twitter. If he felt he had to delete it. Anyways, um, pretty cool stuff. But, uh, yeah, no, this, this has been a fun little
[03:07:37]  time to make announcements. More announcements are coming for Solid. So yeah, I wanted to start with the happy news. Um, but yeah, let, let, let
[03:07:48] 's, let's continue on. We got some more stuff for this week in JavaScript. Yeah, this one's a heavy one. Um, I actually, it's funny
[03:07:58] . No one had actually shared this on Twitter. I shared it with Fred and then Fred, Fred ended up being the one that shared on Twitter. Um, it all
[03:08:09]  happened very quickly. Um, yeah, some people, you know, sent me well wishes and asked me if I was okay or safe, but I am, I'm,
[03:08:19]  I'm still working at Netlify. Um, but, um, Netlify let off, uh, let go another, I guess, I'm not sure
[03:08:25]  the exact number, but I think around 50 people. So another decent size of our workforce. This is the second layoff in the last, what, eight or nine months
[03:08:35] , kind of falling trend with a lot of companies that did a second round not that long ago. Um, it's always hard when this happened, a lot of really
[03:08:46]  talented people, um, people I'd worked a lot with too, people like in the DevRel team were let go in this, in this shift. Um, but I
[03:08:54]  wanted to talk about this for a minute because, um, uh, Matt, Matt Bellman, the C, our CEO, um, actually wrote a public message this time
[03:09:06]  right on the blog site to tell people. And I think this is probably the best summary of the situation, but Netlify is a company needed to change path and
[03:09:14]  it happened about a year ago. Um, maybe a little less, maybe more like 10 months ago, um, with the change in the economy to focus on enterprise. The
[03:09:25]  thing is, these layoffs also come at a time of after two different acquisitions, um, to align on the enterprise. The line on the enterprise space as well
[03:09:38] . So I think restructuring is a good way of looking at it. The company originally was built for incredible full growth, shifted a bit, um, and then made
[03:09:50]  the shift to enterprise. Um, and this has still been, you know, a fairly tough year. Interestingly enough, my, my understanding is the enterprise side of the
[03:10:01]  business is actually the size that, that it's actually succeeding right now. So, um, here we are again. And a lot of, you know, a lot of
[03:10:10]  people, you know, kind of, uh, are now looking for new employment. That being said, um, a lot of the restructuring was at an executive
[03:10:20]  level to my understanding. Um, almost half of the people who were let go were actually in senior management positions. So this is a slimmer, more efficient Netlify
[03:10:29] , um, so to speak. Um, obviously you're going to miss some of my coworkers that I, I saw, you know, pretty regularly. Um, Zach
[03:10:40]  from Eleventy, uh, no longer, uh, works at Netlify. Um, just a shout out, but, um, definitely hard to see him
[03:10:51]  go, uh, and some of the DevRel people. Um, but, uh, Netlify as a business is still in a good place. Like the plan,
[03:11:06]  like on the plan that they're executing on, they're, we're, we're, we're fairly stable. It's just the group, they, there was
[03:11:14]  a hope that there'd be growth over the last quarter. And instead we just kind of, the last couple quarters, instead we just stayed stable. So it is what it
[03:11:22]  is. Um, but as I said, um, they, they've kind of shown a renewed focus, which I think is really good. I mentioned this a while ago
[03:11:35]  that in a sense there's a, for the longest time I felt like Netlify and Vercel were kind of like this head to head battle. And like
[03:11:42] , you know, people are going to choose next and go to Vercel or this and that. And I just, I don't even feel like it's even a
[03:11:49]  consideration anymore on the Netlify side. It's like, we like don't actually care what Vercel does. It's just like not even competing on the same
[03:11:56]  space and the same customers. Um, it's, it's kind of liberating in that sense. And I'm, I'm, I'm very happy that they
[03:12:04]  still see the potential in solid. Um, um, while the frameworks team, uh, that's sort of the open source team that I'm was on no longer exists.
[03:12:15]  Um, I am part of a kind of special R and D team. Um, so I get to continue my work and, um, I think that shows a lot
[03:12:28]  of foresight, um, in the company and trust in us to, you know, to, to continue the work with solid and improving on the web. So I
[03:12:36] 'm, I'm very happy, um, to still be able to do the work we do. And Netlify has still been incredibly supportive of doing that. Um,
[03:12:46]  uh, it actually came up, uh, you know, this question came up. It was like, oh, you know, what are you doing with solid JS or whatever
[03:12:53] ? And cause 11 D and Zach not being around and, uh, the senior management, uh, doubled down on mentioning, you know, the, the potential here that they
[03:13:03]  saw. And I think that's really exciting. Um, this, the work we do is really unique and really important for where, um, the web is heading.
[03:13:12]  So I, I'm very blessed to be able to continue that work in Netlify. Hey, Nick. Yeah. Hard couple of days, right? Um, Nick
[03:13:25] , Nick works on the, uh, framework integration team, um, and Netlify. Um, a lot of, as I said, a lot of, uh
[03:13:33] , great coworkers, um, were let go. Um, so if you're hiring, I, I think Nick actually had a, had a great, um, tweet here
[03:13:42] . Um, let's see if I can find it. Um, where he was like, hey, hiring people, um, where is it? Um, where is
[03:13:55]  it? Am I going to find it now, Nick? Right. I'm not going to find it now, am I? I swear I saw it. Um,
[03:14:10]  he, trying to, yeah. Um, I, I want to put it out there. Like, Netlify is still, Netlify is still, you know
[03:14:25] , doing its thing. It's not like the, like the doors are closing down or something. We're actually doing perfectly fine on that side. A lot of this
[03:14:35]  is all about structuring that enterprise business. But there's obviously still customers, um, people who have sites on Netlify. Um, unless you were affected by the
[03:14:44]  enterprise pricing changes, you're, you know, I think a lot of people in the lower tiers have been mostly unaffected. And, um, there's still
[03:14:54]  an incredible focus, especially on the R&D side. I'd say that it's like the development side, to continue making developers' lives easier if you use Netl
[03:15:02] ify. Because, like, it doesn't matter if you're enterprise or hobbyist. We're all developers. And, um, you know, what helps developers helps everyone
[03:15:12] . Thanks, Nick. Let me see here. Yeah. I don't know why I didn't see this. But, yeah. Here we are. Um, yeah
[03:15:28] . Drop a comment on the earlier careers page. So, yeah. He had a lot of great responses here of people hiring for positions. As I said, especially the Dev
[03:15:38] Rel talent that I know. Like, Netlify has had some of the best DevRel people over the years. And, uh, it's funny. Discover More
[03:15:48]  actually shows you some of them. Heh. Cassidy. Jason. Um, anyway. Uh, such a great team. Mentored by some of the best people in Dev
[03:15:58] Rel. Um, I was fortunate enough to work a lot with them in the last couple months. Um, and, yeah. Really great at what they do. So
[03:16:08] , I strongly suggest anyone interested to reach out to them. Um, because I think as of, uh, as of yesterday, the DevRel team at Netlify is
[03:16:19]  literally one person. Which is Phil. I think the rest of the team is gone. So, um, yeah. Anyway. Heavy news. But, uh, um
[03:16:28] , Solid, at least, is in a pretty good place. And, um, I, I was, I was very, um, I was very, I felt
[03:16:44]  very supported by them when these kind of questions came up during, you know, the meetings and stuff. And they were like, yeah, this is something we believe in.
[03:16:54]  So, yeah. Yeah. This is, this is never easy. But it's also something that we've seen a lot of. You know, Shopify had a second
[03:17:05]  round that was larger than their first round. Microsoft, Google, a whole bunch of companies kind of went through this. Uh, people are talking about Eleventy and
[03:17:29]  Astro and Slinkity and stuff. That pivot from Venn was masterful. Yeah. Yeah. I mean, static web generation is still definitely a thing. Uh
[03:17:40] , a lot of our marketing pages are built on Eleventy and Netlify. And, uh, um, obviously Astro is also another framework in that kind of
[03:17:50]  zone of things. Um, anyway, uh, yeah, but yeah, I do want to thank anyone who, who reached out during this time to check if I was
[03:18:06]  okay. Um, um, so it's, it was definitely difficult, um, this kind of see that happen, but, uh, things are moving forward and,
[03:18:22]  uh, Netlify is still here, still very much, uh, doing what we're doing. As I said, um, I think you're going to see a
[03:18:31]  lot, some, I think in the next little bit, we're going to see kind of the results of the shift, right? It's just, there's a bit
[03:18:38]  of a lag when you talk enterprise. And I think that it's, uh, I'm, I'm even going to hedge as much as we might even see some
[03:18:47]  really cool, big new customers for solid. You know, that's all I can say, but, um, uh, yeah, exciting, more exciting times in the future
[03:18:56] . Alright, what else do I got here? Yeah, okay. Yeah, I'm going to talk about this. This is, this, it's, it's
[03:19:11] , it's, it's about time. I, I, I, I haven't talked about this, but it seems like a few days ago, everyone decided that
[03:19:23]  they were gonna, gonna give their story out, um, it, it started before this, um, Dan had taken so much needed time off, and he came back,
[03:19:44]  and a few people, like, who had some difficult dealings with Dan, uh, got very upset about it, um, like, Alexis, not the solid Alexis
[03:19:58] , the different Alexis, and this got posted, um, the other day, where Dan basically threatened someone that they'd never get a leadership position in tech, and, yeah
[03:20:13] , it kind of blew up. Um, and it's, it's, it's tricky to see this, because, like, it's funny, if you read
[03:20:25]  the comments, and there's things, there's a whole bunch, like, half the audience here, understandably, without any context, sees this, and they're like
[03:20:32] , enough of these white men keeping women in diversity down in tech, and blah, blah, blah, and, you know, this is all we need, another one of
[03:20:42]  these, you know. And the funny thing is, Dan has been one of the biggest supporters of diversity in tech that I've ever known. In terms of making
[03:20:55]  sure that the little, you know, that minorities, or people who don't get the opportunity to work in it, have the ability to, to make sure that, you
[03:21:06]  know, people working on roles that are maybe considered typically female, get the right type of compensation, you know, he's been very vocal about this stuff, you know
[03:21:18] , he's, he's, you know, kind of an activist at heart. Um, and he, and he cares. Unfortunately, Dan's also gone through a
[03:21:31]  lot, and people have seen some of this, the, you know, the last few months. But it started even much, much earlier than that. Right, mental
[03:21:45]  illness is something that is very difficult to work through. I mean, the problem is, especially over time, the whole frame of reference shifts. It's not as simple
[03:22:02]  as like, you know, people picture when there's like a, like a breakdown or something. These things can take weeks, they can take months, and they can build
[03:22:11]  on each other where judgment is impaired, not because of any single event, but because over time the foundation is no longer something that makes sense anymore. And I saw this
[03:22:27] , and I saw a lot of the responses, and the cancellation stuff on Dan, and I mean, it's not like there haven't been victims here. It's
[03:22:44]  just tricky when we are looking at this from like a perspective of a social platform, and social platforms. And so much sway goes into like, how things are positioned, or
[03:23:02]  perception of people who really have no clue what goes on. And on one hand, you can say that's our own fault for not sharing stuff. But then, like
[03:23:15] , watching the whole thing feed into each other itself, over time, has made me realize that we made the right decision at every point. Or the best, or the
[03:23:30]  best, I can't even say right, the best that we could, in handling the situation. Because there's just no good amplification of what went on. What I
[03:23:43]  saw was someone who deeply cared, a champion for people, over time, become what he hated the most. Right? Because somehow, in his head, he saw this
[03:24:04]  as a way of protecting people. that... that, like, he could get his hands dirty, that he could be the bad guy, if it meant that justice or
[03:24:24]  rightness was served. Things became so black and white, that any kind of semblance of understanding kind of went out the door. things became so black. Because
[03:24:45]  the truth of the matter is, this started way before anyone else was involved. Way before. This is something Dan's had to struggle with for years. I don't know
[03:25:01]  when it started. I first became aware of, of, of this, over a year ago. And Dan was having some trouble, you know, kind of, with
[03:25:19]  his role in, in the, in the project, in the community, because he took it on himself, to make the change he wanted to make, and it was too
[03:25:29]  much. And he took some time away for himself, last year, to do that. And he, and he came back energized, and he came back refreshed, to
[03:25:41]  everyone's knowledge. And I was very happy to see that happen. You know, we all have hard times, and we all have stuff to work through at various times
[03:25:59] , and it's more difficult sometimes for some people and situations than it is for others. But, I, I realize now, in hindsight, that, stuff was,
[03:26:16]  like, stuff was still ongoing, and the truth of the matter is that it would always be ongoing. Yeah, thanks for the comments, like, a lot of the
[03:26:28]  love in the comments here, yeah, it's, it's, it's very tricky. I had to cut. The thing is, something that, that causes me
[03:26:43]  a lot of consciousness, people calling him very manipulative, and even acting like him before his mania was all a big, yeah, how should I put it?
[03:26:56]  I mean, he was manipulative, that's the problem, but it's like, this happened, over time, very gradually, the shift. I can trace, like
[03:27:09] , like, this is why there's no, like, beginning for me, because, within about a month of, of joining back on the solid team. Dan was
[03:27:20]  getting back out into socials, and getting out there, and he started on a phase that I'm going to call Hot Takes Dan, or Spicy Dan, where he started
[03:27:34]  kind of picking fights with people on social, um, especially Theo. Uh, just, and hoping that Theo would dress him down and give him attention, um, so
[03:27:47]  to speak. And that, like, that kind of behavior would get good results and help him grow his channel and his reputation and his brand, because he's like, look
[03:27:55] , Theo's a little bit on the, you know, maybe more abrasive side. I can be abrasive too, that works for him. So, in a
[03:28:02]  sense, what he was looking at originally as something that was calculated, to a certain degree, kind of grew over time. Because at first, you know, some people were
[03:28:13]  like, hey Dan, you know, maybe not a good idea, like, you're taking it too far, you know, like, get what you're doing, but
[03:28:20]  like, maybe, you know, like, from an angle perspective, maybe calm it down a bit. And he didn't. And most people didn't really think too
[03:28:30]  much of it at the time, like, how much of this was just him playing a role, or how much had he internalized it? I don't know,
[03:28:42]  but I started seeing more and more red flags, um, and due concern, you know, when stuff happened, like, uh, Astro team, uh, you know
[03:28:59] , they, they didn't really have a place for his role anymore. They offered him a different role, but, um, it was one that didn't pay as
[03:29:05]  much or, you know, had different responsibilities. And so he, he didn't take it, and he was going to find his own way to fund his projects and,
[03:29:14]  you know, start doing that. And everybody that I knew, you know, in that community reached out, tried to, you know, offered, gave their contacts, helped
[03:29:24]  them try to find a job. Um, we looked into lots of different sponsorship models and money, and he, he secured one himself with a, a, a,
[03:29:34]  a racer to do docs. And like, there's a lot of people just trying to help out someone having a hard time, so to speak. And, but
[03:29:43]  you could tell things just weren't quite right. You know, there, there, they had personal event that happens. There's a death to someone close to him. There
[03:29:57] 's, there's a whole bunch of little triggers and little things. But if you step back and go, I'm going to act rational, so to speak, you
[03:30:08]  could see a perspective, maybe a reality at first, where everything kind of made sense until it stopped making sense. Right. No, I mean, maybe, but it
[03:30:27]  was hard to tell. He, he was enthusiastic. He was good. I mean, this is, this is, this is, this is, this is one of those
[03:30:39] , those things, right? Like, sometimes you just need to get into your work, you know, you've, if you do something productive, it feels good.
[03:30:48]  You, it gives you the right kind of emotional, you know, feedback. I mean, what can you do? Yeah. Like, don't, don't get
[03:31:09]  me wrong. Like, people were hurt where this ended up going. Damage was done to many parties. The unfortunate reality of it is most of the things that you hear
[03:31:22]  people accused Dan of were true. Those, that did happen. And sadly, because of this morphing of reality that I'm talking about, most things that he accused
[03:31:32]  others of, he was the one actually guilty of doing to people around him. It was almost like a flip projection, which sounds about the most worst way to put it
[03:31:41] , that basically everything wrong that he did and everything wrong that he accused others of, he all did. That's, it sounds terrible, but that's, that's kind
[03:31:50]  of the closest to the truth that I'm going to get into without talking about everything and I don't want to talk about everything. I want to focus on, on
[03:31:59]  the, the problem of how, you know, the, these things are a long time thing and how we get here because the truth of the matter is he took this stuff
[03:32:15]  to social. Because, I mean, for people, everyone always asks what happened with solid and he honestly, I feel like I'm in a place I can talk about
[03:32:24]  it now, but this was nobody's business a few months ago. Um, there was a lot of concern because we were looking to fundraising and stuff. And there was
[03:32:33]  a lot of concern that, um, you know, the, some, we, we, some people in the team, you know, Dan, David, they, they
[03:32:39]  went and tried to go to Netlify to see if we could get some more funds through them. You know, help, you know, help, you know,
[03:32:44]  in the situation, um, there is a question of what we should do financially about my position at Netlify and all this kind of stuff. And largely private conversation about
[03:32:54]  myself, my work at Netlify, about funding the project, all that got into a disagreement, you know, and that's basically all that happened. But,
[03:33:07]  um, there's, you know, there was concern to me spending too much time doing DevRel and doing different things. And it essentially got to a point where, you
[03:33:17]  know, I mean, the, the, the conversation probably should have cooled off. It was, it was a bit of an argument, but it wasn't, it wasn
[03:33:32] 't, it was more of like heated argument level of things. It wasn't like, people are like, oh, share the screenshots, all that. I, there
[03:33:39]  was nothing in the screenshots that anyone who had full context of the conversation would have thought anything was, you know, problematic with. But with all of the stuff that was going
[03:33:49]  on, and I was traveling, it was very late. I was like, Dan, let's just put a pin in this. Let's take a couple of days,
[03:33:57]  lots going on. Like what people miss on the context when they see screenshots is conversations that go weeks or days that lead up into this kind of situation. And it's
[03:34:06]  like, all, all we wanted was just to kind of cool off and figure out how we can approach this stuff. You know, and how would we fund members of
[03:34:16]  the community, how we can do this. And basically it just, it wouldn't get dropped. And, um, David, I mean, we put it out there
[03:34:32] . David said, look, Dan, if this is how it's going to be, cause like Dan had started posting stuff publicly, kind of bashing Netlify a
[03:34:41]  little bit and talking about like different things that weren't really good look for us. He's like, I'm going to recommend that, you know, you temporarily get
[03:34:52]  kind of like, um, you know, you know, kind of on hold from representing the project. And that's when Dan went on Twitter that first time and kind of
[03:35:02] , kind of laid it in on us a bit after I, I basically said like, let's just cool off. I went to sleep. I was, hadn't
[03:35:11]  slept. And then I woke up to that and that, that, that's really like everything that happened afterwards just really accelerated from there from, you know, looking into a
[03:35:30]  whole bunch of different claims and a whole bunch of different stuff. But like the unfortunate part of this story is that it started from a lot of people who just wanted to
[03:35:43]  help and, you know, and just be like, Hey, what's up? You know, and every single person who tried to offer aid ended up becoming the enemy.
[03:35:54]  Theo actually only really got dragged in because at a certain point, yes, the solid docs repos were deleted and the training videos were removed. And, you know,
[03:36:09]  people, you know, wanting to protect other people are like, Hey, you know, don't let this guy just kind of like run amok here. He's
[03:36:18]  causing real damage. And then, you know, obviously Theo got pointed out for like attacking people with mental disability and, or not disability, mental illness. And sure enough,
[03:36:31]  then he had to kind of come back and he's like, okay, well, you know, let's, let's sort this out then, you know, but the
[03:36:40] , the problem is like, there was a time period where Dan gave his account to Theo, for example, because maybe it was for clout, but also because there
[03:36:51]  was some level of trust there, but basically every one person, and this is what happens with this illness. Every person who was trying to help ends up becoming, you know
[03:37:05] , an enemy, so to speak of a shadow. Like, it's just hard because like, you have no clue how many times we had conversations, even after the
[03:37:30]  original thing, and just like, don't, going on social, going public, isn't what makes sense here. Like, this is not how you solve problems,
[03:37:39]  because it just, it, it, it, it brings attention to things like for everyone. But again, this is part of a crusade, right? It was part
[03:37:48]  of like, doing what's right and fighting the evil wrongdoers, right? And it's like, I was like, no, this, like, you,
[03:37:57]  you just don't, I'm like, this, this is not going to help you in the long run. This is why we didn't talk about this, because like
[03:38:07] , I didn't go public or say any of this stuff. Like, even when egged on, like, when, when, after he deleted the videos, he
[03:38:15]  went on Twitter and kind of was like, hey, you know, kind of was like, anyone looking for solid content, you know, I've got some videos you might
[03:38:23]  want. Like, he, he was trying to hurt us. And I understand that's not him. But that, that was kind of the thing, like, he
[03:38:32]  was provocative. He mentioned, he, he, he would poke Theo about, um, one of, uh, someone who passed away in his past, you know, is
[03:38:44] , is this what Lily would want? You know, like, he, he was trying to anger people, to pull reaction out of it. The only, I guess
[03:38:53]  the biggest thing is he didn't want to be ignored. And, unfortunately, when it fell into stuff like social media, we got into this zone where we had a bunch
[03:39:01]  of, like, Me Too reply people who literally, you could tell they had no clue what they were talking about. Like, I, I'd propose like, oh,
[03:39:07]  clearly the solid docs are still up, you didn't delete them. It's like, yeah, thank you, smart guy. Like, that was probably the most frustrating
[03:39:19]  thing. And that's the problem with putting this stuff in the public space. On one side, you can go, like, okay, then everyone's voice is heard.
[03:39:26]  But the truth of the matter is there's so much noise from the peanut gallery that have no clue, even remotely what's going on, and just fed into it.
[03:39:35]  People would join his spaces and be completely quieter, his streams, and just sit there just to see what he would do. He'd put on a, he'd get in
[03:39:42]  a, in a space and say a bunch of stuff, and they'd be like, hey, I want to invite people on the talk. He thought these people were his
[03:39:48]  friends, and no one would step up. They would literally just sit there silently to see what he'd do next. It's so tricky because people, people reached out
[03:40:06]  to the family, tried what they could, but, you know, that was attacking his family. You know, like, it just, it just kept him propelling
[03:40:16]  into this thing, and, I hope, I, I, things had gotten kind of quieter again, and I was hoping that it was over, and we could, you
[03:40:32]  know, build, but the thing is, he did hurt a lot of people. Like, Alexis has a real concern, you know, he, like, stuff,
[03:40:42]  there, there were threats made and stuff, but I can understand why some of the people who were hurt don't want to give him a second chance. It's just
[03:40:56]  very, very difficult, when you put in the timeline of the mental illness, to separate Dan from it, and that's what makes this so hard, because he's still
[03:41:06]  out there, right now, doing this. He's been, I believe he's been hospitalized a couple of times, you know, you know, he's, this is
[03:41:17]  not something that just happens in a day or freak out. This is something you struggle with for, for years, and, it's, it's very hard, right
[03:41:32] , because, on one side, I was really happy that his platform sort of got shrunk down, so that he wasn't gonna get the wrong kind of feedback.
[03:41:45]  Because a lot of times, especially when we talk to close family friends, they're just like, we're told, don't, don't engage, let him kind of
[03:41:52]  just express his feelings in his way, don't be too critical, understand he's, like, this is where he's at, and then, you know, just be
[03:42:01]  there for him when he needs you. Which is hard. Which is hard. But that's what you gotta do. But the problem is, it only got amplified by
[03:42:08]  the platforms and the way that, you know, social and everything work. And that's why when, like, I saw this, everyone had their story to tell, and
[03:42:20]  I was just like, there's a lot of people. I mean, you can, yeah, I mean, this is true. This screenshot is very tame. I
[03:42:34] , I, I, the, like, this is why this message is a thing. I, it's tricky, cause, I'm, I don't, the
[03:42:56]  only way this works is if, if, if we can treat things as human, which is almost impossible to do on these online platforms. Like, because, while this
[03:43:09]  is true, it's also like, how, how do you move forward from this? And, yeah, what made me talk today was I just, I, I
[03:43:30]  just saw so much stuff here, and it's good. Some people, yeah, I mean, it's all true. This is the unfortunate part. I,
[03:43:56]  I, but I don't see the way things are going right now as a path where this actually gets resolved. I, I, I, awareness is necessary, but it
[03:44:11]  also, like, can you picture how isolating this is? I don't know. When I started this, I don't, I, I don't know what I
[03:44:27]  wanted to say, but I knew that, I knew that, um, I wanted to say something. I wasn't gonna get on Twitter, cause I feel like,
[03:44:41]  it's not, there's, there's, there's, there's, there's no human aspect on Twitter. I, I mean, it helps now that everyone has
[03:44:49] , like, Twitter blue and they can write long posts, but. Sorry, I'm just catching up with chat. It's been like 12 minutes. I, I
[03:45:05] , I, just watching the, the, yeah, watching this whole cycle on social media has been really, really hard. I, I think this was the right time
[03:45:20]  for people to speak up, I guess. It was hard while it was going on. No one wanted to talk about it, cause he didn't want to amplify it more
[03:45:27] . But I mean, we're amplified now. Yeah, I mean, that's the problem. Everybody thought they could help, but. It's funny, cause
[03:45:51]  like, it's not funny, but it's like, there was little hints. You, you think that there was points in time where it could have, uh, dec
[03:46:00] elerated, you know. But just kept on ramping up and up. And in a sense, it's almost like he wanted it to. It's just,
[03:46:11]  it's, it's, in one way, it started way before anyone realized. In another way, it's, it's, you know, it's still not
[03:46:39]  over. I, I haven't been following as closely because, uh, at some point, uh, Dan blocked me. Um, I haven't blocked him, but
[03:46:55]  he blocked me. I think, I think there was, yeah. And, um, so I, I don't, I'm not as prized to this stuff
[03:47:07]  anymore, honestly. It doesn't really matter what the specifics are. I know what it is. It's all the same stuff. Um, I, I've just been
[03:47:20]  scratching my head at how there can be some sort of, more positive outcome from this because there's the things you can control, the things you feel like you can do
[03:47:33]  in these situations. And then, but so much of it, you feel powerless to do anything about. The trickiest part is the people who, who've been hurt.
[03:47:48]  Like they've been hurt or traumatized. Like, like they've been concerned. Like I know on discord, I could call and post things almost like Dan's support
[03:48:02]  groups or people who had run-ins with them where they were seriously concerned about violent behavior or whatnot. Almost, you know, talking with each other to help almost cope
[03:48:16]  with the situation. I know that seems crazy in a certain sense, but it's not that crazy. I mean, it's just, a lot of people were affected
[03:48:27]  by this. It's tricky though. Cause at the beginning I was kind of involved in some of those places because like, obviously, you know, stuff had happened to myself
[03:48:41]  in the project and, and you know, trying to figure out like how to position stuff. Like how to position stuff, but over time it's just like, there
[03:48:50] 's just, there's, there's like too much trauma all around. I had to kind of separate myself from it because like, too, like, a lot of that
[03:49:03]  hurt doesn't just go away. Um, but it also, it's hard to direct it completely at the person who's not completely in control of their mental faculties
[03:49:28] . Um, yeah, I mean, you, if you saw the last couple of days, the, the, there's a thing where he faked his, his
[03:49:38]  girlfriend who, and he committed suicide or something. Um, that was not true. Um, um, he's under family care and getting treatment. But as I said,
[03:49:49]  this has happened before. This is, this is not just, oh, treatment, then you're better. Nothing we can do from the internet. That's probably fair
[03:50:06] . fair yeah, that makes great content I'm glad some people are talking here in chat yeah, I mean I just wanted to put this out there because it
[03:51:03] 's a hard balance I mean, at a certain point like I get why this was posted and I get why everyone retweeted to it but ultimately what ends up happening with
[03:51:22]  this you know, 1600 likes anyway, does anyone want me to in a tech leadership position, right? like, it I mean, yeah take advantage of the I mean
[03:51:34] , the situation I understand I mean, it's out there now it just alright I don't know if there's much more I can say about that to be fair as
[03:52:00]  I said, I didn't want to get too much into the weeds on the details but you know, everyone's going to have an opinion on this an opinion on that and
[03:52:09]  hot takes and you know it's so much more tricky than that yeah, yeah, for sure I'm hoping what am I hoping out of this? I'm hoping
[03:52:37]  that sorry I'm hoping that obviously we're all hoping that Dan gets the help that he needs but realistically this is just not a simple thing it's something that will be ongoing
[03:52:54]  and I hope that anyone who sees this and has that temptation to just like beat into it a little bit just just doesn't I I never really understood this before I remember
[03:53:09]  sometimes seeing tweets where terrible people like people were being terrible to women and all this stuff where like and then they post it publicly the screenshot on Twitter and all this and you'd
[03:53:21]  be like why the hell would you do that and get all injustice and everyone kind of goes on cycles and someone pointed out to me like Ryan it's not worth it they said
[03:53:27]  that the guy probably has some kind of mental thing and I didn't really think about it much at the time but when I'm thinking back about it now it's like
[03:53:35]  it's probably right I mean in some ways you know behavior is not acceptable but there's a whole other type of amplification that happens on social media and I'm glad we
[03:53:57]  kept away from it for the most part because in hindsight I realized different decisions from certain people would have made things much worse would have that got help sooner who knows but it
[03:54:10]  also would have been way way worse I'm just it's just unfortunate to me we weren't able to handle this in a way that didn't basically ruin Dan's reputation
[03:54:29]  and career and everything in the process yeah I didn't think this through this is not how you end a stream right you end a stream on good stuff not on heavy
[03:54:59]  stuff but now I'm not going there again but I mean this this is this is something you know that has kind of haunted me for several months now even longer before the you
[03:55:19]  know everything went down back in May and it it's something that you know when you have a community of people it's something you can't ever get too far away from
[03:55:32]  oh yeah unfortunately because of all the solid stuff and this I got very distracted this week you can understand so I don't know what else was new this week unfortunately every tweet
[03:55:58]  I saw in my mentions every like thing was like did you see this tweet about Dan and I was like that was what Twitter did it was like discover more and it was like
[03:56:09]  Prisma 5.0 okay that's worth looking at let's talk Prisma 5.0 where can I find out about Prisma 5.0 let's search Pr
[03:56:25] isma Prisma 1,000 members on that doesn't seem like very many I guess for DevTools maybe it is what is new in Prisma 5.0?
[03:56:53]  I'm just interested because I thought everyone was on Prisma and then I thought everyone was like no Prisma is too slow kills your cold starts don't use Prisma
[03:57:03]  so did the okay here we go Prisma 5.0 is released preview features include generally JSON protocol making Prisma faster by default okay that's gonna get field references okay
[03:57:15]  let's take a look All right, we're releasing a pre-continental change of improved performance with serverless environments. There we go. So they're addressing the
[03:57:44]  cold start problem. This is actually probably what I'm most interested in. I'm like, what's the scale of this? They just deleted the whole freaking graph.
[03:58:15]  It's like two and a half seconds or 2.7 seconds down to like... I don't know. I don't know. That two-thirds
[03:58:44]  bundle cut is significant. Okay, yeah. Okay, yeah. This looks like it could be a game changer. Obviously, we have to try against real metrics,
[03:59:03]  but this is what we were looking for from them. Yeah. So, Jason, what's the deal with this? So, Jason, what's the deal with
[03:59:23]  this? Oh. Oh. Oh. Oh, so the communication protocol was like, literally just straight up slow. Okay. Okay. Okay. Okay. How
[03:59:48]  does anyone get anything done? That's a great question. I mean, it was real, like multi-second cold start times is not good in a serverless environment
[04:00:12] . It's so funny watching the providers work their way down, like getting into hundreds of milliseconds, and it's just like, oh no, now Prisma is going
[04:00:21]  to take four and a half seconds to start after. It's just like, why do I even try that's worse than where we started at? Would million.js
[04:00:43]  wasm and lazy loading? Probably not today. I mean, lazy loading is nice, but wasm... Well, you can watch my stream with Greg, and we
[04:00:59]  can talk about wasm. Yeah, so GraphQL, yeah, it was like GraphQL type format before, that's interesting. So, they had like these custom strings
[04:01:11]  probably. Anyway. Okay. I'm buying it, and this could be a big deal. The biggest problem I have when I do JavaScript framework stuff is like, literally everybody
[04:01:21]  wants to support Prisma. Prisma and Prisma is always like freaking broken. Like, the platforms have to do something special because they need to get the native stuff
[04:01:29]  into the bundle. So, it's always like, this is one of the reasons why I don't want to write adapters. I'm blaming Prisma, but
[04:01:37]  it's like there's a few others like that. Dependency version. This is interesting to see stuff like this, like changing minimum node 16. I'm loving
[04:01:48]  new tools this way. Node 16 was a big change in terms of protocol, in terms of like moving towards like the web APIs. And especially the latter half, which is
[04:01:59]  why this is after 13. Node 18, in the next couple versions of Node, if we could just like bring the floor up to it, so much stuff just goes
[04:02:08]  away from us worrying about. Like, it's kind of like, like we're getting to a point where like we can finally shed the legacy crap. If we get
[04:02:17]  there, I think it's easier these days to move between like a node 14 and a 16 and an 18, so to speak. Um, I remember back in the day
[04:02:25]  it was like really broken if you moved between node 0.4 and 0.6. Yeah, I don't know too much about the other stuff here to really comment
[04:02:35]  on it. I just heard endless things about how bad the performance was. And I mean fairly, because some people that we know, maybe popular influencer types, were really pushing
[04:02:44]  Prisma, you know, maybe in their starter templates. And, and someone had to be like, "How can you possibly say this is a good idea given how bad
[04:02:51]  the performance was?" Like it was just insane. Yeah, no, exactly, like we're so close. Node 18, getting the crypto APIs, like, I already
[04:03:05]  moved start to 16 minimum when I went to the Astro branch. But I think I almost want to move to the 18 minimum. "Personal zone's perfect time
[04:03:12] , we just need a way to exit Zod, so you don't have to rewrite the beta searcher in each API input." Okay, that's cool. On a
[04:03:19]  side note, I know, because of what I've been helping with the project, there's a new Zod-like project coming out pretty soon that is tree-
[04:03:29] shakeable, super small. You actually won't have to pay the cost from the client. This excites me an incredible amount. Zod's never made the investment
[04:03:40]  to make that move, which makes this new library, I think, going to be really compelling to everyone in our space. I might be able to talk about it a bit
[04:03:47]  next week after the release goes out, but very excited for this. Yeah, that's cool. I mean, this is what everyone wanted to happen and it's what
[04:04:02]  happened. So I'm pretty stoked about this. I think this is exciting. As for my stream next week, I don't know how exciting it will be for all
[04:04:11]  of you guys, but I'm pretty excited, personally, because I'm going to have Brandon Roberts on and we're going to talk about Analog. And you're
[04:04:20]  like, "Oh, well, what's Analog? Isn't it that Angular framework built on Veet and Nitro?" Well, I have a very, I
[04:04:28] 've been, you know, I was trying to, I've been trying to coerce Brandon over to the Astro side for a little bit and I, but he
[04:04:37] 's like, "I like what I got here." So he's going to show us what you can do with Angular these days. He's going to show us what you
[04:04:47]  can do with Nitro to a certain degree, which if for those who aren't familiar, Nitro is the base of Nuxt, but it's also the base
[04:05:01]  of Analog here. It's, it's kind of like a framework agnostic adapter level. So yeah, yes, exactly what I wanted to get from Astro
[04:05:08] , but it's built with that purpose. So I want to, I want to check it out. I want to see what this is about, because I said, I
[04:05:13]  was trying to convince him to come our way, but I think he's going to, he's going to show us what, what, what the other direction looks like.
[04:05:19]  So, um, I'm very excited about that. Even if I don't really know how to code in Angular, I, sorry, Minco, um, as
[04:05:25]  much as I tried that the Angular lesson was great, but I think I have a long way to go before I'm a fully fledged Angular GDE, so to speak
[04:05:35] . But, um, yeah, I, I think it's, I think Angular is a great, really interesting because attacking the meta framework for Angular is something people haven't
[04:05:45]  really done. right? So this is, it's interesting. Like, I always find this like, it's kind of like when I started kind of making just like
[04:05:53]  a framework with, with signals with solid, like everything was built for React. How do you work around that kind of scenario? Coming from that outside perspective, it gives a
[04:06:01]  different appreciation for what's needed. And I think, I think maybe there's, you know, some similarities to Angular and Vue that maybe the Nux guys know
[04:06:09]  what they're doing, so to speak, originally when they, uh, you know, started rolling out Nitro. But, I don't know, I guess we'll
[04:06:17] , we'll, we'll find out. And, uh, I think that's, I think that's gonna be definitely interesting. People, Blazor is bla
[04:06:27] zingly fast. Yeah, it's gonna be a while since we're, it's gonna be a while until we talk about Blazor. I'm sorry.
[04:06:34]  I don't really have much to say about Quick. Um, we, we've, uh, we've covered, I, I think I mentioned the Quick 1.0
[04:06:44]  release. Um, did I mention it on my previous stream? Yeah, I mentioned it, not on my previous, the one before. And I wore the Quick 1.
[04:06:52] 0 shirt last week, but I, I don't think there's, they've been doing a lot of really cool research recently into, uh, developer experience type stuff and
[04:07:00]  the way like the, like interacting with the browser interacts with the ID. Which I think is really cool. But I don't have, I don't have a ton
[04:07:06]  more to talk about Quick right now. Um, I am a Nitro fanboy. Yeah, I, I would love to hear more about that. I was actually very
[04:07:15]  tempted to go grab Daniel Rowe and pull him on again to talk about Nitro. He did a great, uh, talk, um, at Agent Conf, um,
[04:07:23]  not that long ago about it. So we might still do that. Um, that being said, my understanding is he, he's actually like the core, uh,
[04:07:33]  Nuxt dev, not actually Nitro. Nitro on MJS is actually under a different organization and the lead dev on that is a, uh, different fellow. Um
[04:07:42] , so, although I, I get the feeling that, uh, Daniel is still kind of the public face of these things. Angular's been doing a lot of really
[04:07:54]  cool stuff recently. I gotta give them some cred there. You know, it's, it's been really awesome to see, you know, modernizing the framework. Um
[04:08:06] , where that goes in the future, I guess we're gonna have to see, but like, it's, it's, I mean, they, they got Google behind
[04:08:13]  them and stuff, so they can accomplish a lot. Um, and, um, the team there, uh, is amazing, honestly. I, I, I,
[04:08:21]  it was, it was, it was definitely one of the things. At one point I, I, I had actually considered, uh, joining Google and working on the Angular
[04:08:30]  team, um, just over, maybe like a year and a half ago. But I ended up having an opportunity to work on Solid, so there's no way I
[04:08:37]  was gonna go off. But, I mean, I, I love those guys. They're awesome. Yeah, no, he's been working on it a while,
[04:08:52]  and I, I probably came to him too late. I was like, trying to be like, join the dark side. We can get everyone on Astro and the super
[04:08:58]  framework thing. But, maybe, maybe I'm just, uh, trying to force my agendas a little bit too hard, too hard. I, I think, I
[04:09:07] , I, I'm, I'm really interested to see how he's put analog together with Nitro. What quick one and pause with starting a new project from the
[04:09:19]  game to be solid, original thought it solved as a beautiful spot. Uh, the deal with Solid Start is, it's funny, the APIs have been stable for, in
[04:09:30]  a sense, for like, nine months, because I haven't changed them, but I know that they're gonna change a little bit. That's just the, where we
[04:09:36] 're at. So, I can't, I know that we're gonna make some changes, so I can't say that we won't. Um, even though it
[04:09:46] 's, part of the reason I haven't made the changes is because I want the migrate, I want the technology migration, like the adapter migration, to happen without any code
[04:09:53]  changes, like a TikTok. And then I want to do the, the code changes from what we've learned here. So, um, if you make a spa with Ve
[04:10:00] et, you 100% can't go wrong. Solid is, if, if that's what you're looking for, a single page app, Solid is one of the
[04:10:07]  best ways to make single page apps today. Like, it doesn't, like, people know that. Solid Start, people have made the bad, made large, uh,
[04:10:18]  production apps on it. I just, I'm not, I'm not gonna guarantee complete stability here at this point, because I, I already know. I, I
[04:10:25] , I even hinted two months into beta, the stuff that we'd likely be, uh, shifting around a bit. I mean, conceptually high level, not necessarily
[04:10:33]  big changes, but there will be, like, some renames and moving some imports around and stuff. Um, and I think the way we approach server functions, I want
[04:10:43]  to address it a little bit differently. I, uh, honestly with Blazor, I just haven't really, I mean, it's funny, I love Steve
[04:10:53]  Sanderson's work, but, like, it's, you know what, you know what it is? Because, I'm a, I'm a benchmark guy,
[04:11:00]  and I like, I like when, like, a new technology is being proven, that it gets proven first from a performance standpoint, and then we decide whether we want to
[04:11:07]  do it. I like going, okay, make the prototype and go, is this viable? And then, if it is, that's good. If it's not,
[04:11:15]  throw it away. DX doesn't matter, as, like, if it's not going to be viable. You can always say, you can work towards that. And
[04:11:24]  what got me for, for Blazor, um, is, I, I mean, I, I can give you some funny antidotes, but, you know,
[04:11:31]  um, sorry, javascript framework, benjamin, I, give some funny, funny, um, Um, some funny, eh, eh, sorry, anecdotes
[04:11:43] , like, about, about, like, this one time I did a performance test and Blazor got 100% because Chrome was fooled and thought the page had loaded and
[04:11:50]  it hadn't loaded anything yet. It was so slow. But, um, sorry, not this one. But, for me, it was very difficult, um,
[04:11:58]  to, to, to take much look at Blazor when it's basically the slowest framework that has ever been created in the last 20 years, um, in this
[04:12:10]  benchmark. Like, it's just, I, I just can't take it seriously. Like, at no time, I mean, to be fair, Alpine's pretty
[04:12:19]  poor here, but it, like, I guess Chew is this, I guess, but, like, there's, oh, actually, this is a new one
[04:12:30] , Blazor, ahead of time, so that got a little bit further. Like, like, I guess React Starbeam, that new Ember Reactivity
[04:12:37]  library in React is the slowest thing ever, but it's more of, like, if you're pioneering a new way to do stuff, a new technology, just
[04:12:44] , like, vet that it's actually fast. Like, the, the, the, the, or at least, like, worth going into, someone could do something
[04:12:53]  on their week, like, what I'm getting at is, like, like, so, okay. Knockout JS, thing hasn't been changed in freaking eight years
[04:13:01]  or something. It's basically the same performance it's been for, for, like, 15 years. It's still here, so over time things get more performant,
[04:13:09]  but not Blazor. Blazor is just slower than literally everything. Like, I, I don't know, this is, this is, it's just difficult
[04:13:16]  for me to, to say much on. Um, it's, like, it's funny, too, because it's called Blazor, like, it's
[04:13:24] , it's, it's almost, like, memeable. It's, like, let's create the slowest framework ever and then call it, like, blazing
[04:13:31] ly fast. Sorry, it's just, yeah, it's just not, it's not where I'm at. I know I'm going to get, like, some
[04:13:44]  crap about that. It's just, like, yeah, Daniel Rowe was a, was a great guest. And I, that's why I'd love to have
[04:14:01]  him back up. We'll, we'll see what he can do. Maybe in August sometime. I'm telling people they aren't changing. I mean, changing a little
[04:14:11]  bit. He doesn't like performance. Yeah, I can. Shipping for, oh, see, we even got the rest of people. Shipping 4.6
[04:14:28]  megapixel miles. Yeah, okay, yeah. Yeah, I mean, that's, it's, it's, like, let's make it to, to do MV
[04:14:38] C and five, like, it's just, I, I, like, there's just, it's hard to picture a practical use case here unless, like,
[04:14:48]  like, I, I just, yeah, it's, it's hard. Yes, it should be possible. I don't see why not, right? Because it
[04:15:05] 's just a proxy. And then as long as you have a way of triggering, see, the problem with React, you have to figure out a way of triggering React to
[04:15:12]  render. We have something called React solid state, but that's more of, like, making, right, authoring React the way you'd author solid. So,
[04:15:22]  to do what you want, what you'd actually have to do is make a hook that's subscribed to part of the store. It wouldn't be very optimal on the React
[04:15:30]  side, unfortunately, now that I think about it. Unless, like, you wrote your React the way we write solid. Like, the way, like, when you use
[04:15:39]  MobX to React, you write React a certain way that's not very React-like. That kind of thing. Oh, well, we even got better. Yeah
[04:15:59] , I'm trying to think if I've ever made a site that had nine megabytes of JavaScript. Like, what it was in it. Like, we even code split
[04:16:14]  it. I don't think you can code split this, which is the problem. Like, you can't, like, say, like, lazy load part of it
[04:16:18] . Like, I remember trying to load something quite heavy in the browser that was, like, multi-megabytes. Maybe it was the AWS SDK. It's pretty bad
[04:16:29] , too. Yeah, there is no... Yeah. But, yeah, there is no limit for a lot of fire. I had a lot of usage from the .
[04:16:49] NET. Well, I mean, because it does a lot of cool stuff. What's cool about Blazor, and I saw some stuff that was advertised, and I
[04:16:54]  was like, well, maybe I will check this out, is that they do, like, the live view thing. And, like, almost something that's server component
[04:17:01] -ish, all baked into the same thing. And they use heuristics to actually figure out the best scenario. So you can put it in automatic mode, and it
[04:17:08]  actually, like, does a combination of HTML partials and, like, live view type web socket updates and all this. Like, in theory, if I was,
[04:17:16]  like, an armchair architect type that you find in a large company who's the same kind of guys who probably like Java, you know, and have been at it 20
[04:17:24]  years. Because you look at Blazor and you're like, it checks all the boxes. Like, it literally does this, this, this, all these scenarios
[04:17:30] , you can do this. And you miss the fact that, like, your website will never load. Like, so it's like, it's like, it's like
[04:17:38] , if you, yeah. There's probably an environment where you have, like, people using some kind of internal web-based thing, and it's, like,
[04:17:47]  really powerful. And then you're, like, like, internet kind of enterprise kind of web apps. And then you can build this kind of thing. And then kind of
[04:17:55]  be okay with it. But it's, like, your bar of standard of, like, what's acceptable would have to be, like, like, 1990s Windows.
[04:18:05]  Like, if that to you is, like, the pinnacle of user experience, then, like, maybe this is okay. Like, it's hard to say
[04:18:16] . It's, like, Steve is a really smart guy, and I know the stuff they're doing makes sense. It's just, like, part of this is probably
[04:18:26]  the hurdles of the technology that they have to use, you know, like, with the .NET and all that. It's just, like, and, like, they
[04:18:32]  incentivize because of Microsoft and stuff, but it's just, like, I just don't, I just don't get it. Yeah, I don't know.
[04:18:56]  It's interesting because if you watch, Steve Sanderson did, like, the best overview of the history of the web that I've ever seen. I posted it,
[04:19:04]  like, a year ago. Do find that talk. Do watch that talk again. It's so good. I feel like I almost want to look for it right now because
[04:19:10]  it's, like, literally the best. Let's try it. Steve Sanderson history of web. There's a JavaScript. Let's just try web. Keynote
[04:19:25] . Why web tech is like this. Is your underperforming... Okay. We're just going to copy this into chat because literally this is such... He even gives examples
[04:19:37]  that, like, make sense today, but in the perspective of it. Like... Website. Losing new traffic? It's similar. Sorry, just a second.
[04:19:44]  I want to... It's so simple. Like, I can't recommend this talk enough to people. Yeah. I think this is the one, right? Nine months
[04:19:56]  ago? I thumbsed it up, so this has to be it. He literally goes to the thing. The funny thing is, he's got so much history of the
[04:20:04]  web that he only gets to modern JavaScript frameworks, like, 45 minutes in. He, like... Yeah. He took this from Sarah Drasner. Right? He
[04:20:17]  somehow manages to basically get up to Node and then spot frameworks to 2010, and then he literally just, like, skips over, like, React like it doesn't exist
[04:20:30] , and starts talking about WebAssembly. But one cool thing he does do is he actually does a SvelteKit demo, which, I mean, I was,
[04:20:42]  you know, as a huge Steve Sanderson fan, I'm maybe a little jealous because, like, I was, like, Rich Harris must have, like... I
[04:20:48]  mean, Steve, like, and Knockout were so big for reactivity, Rich must have got a kick out of it, and he definitely did. But, check this
[04:20:55]  out. This was one of the coolest shoutouts. This was one of the coolest shoutouts. Metaframers, like, Next, SvelteKit,
[04:21:03]  Astro, and Solid Start. A year ago. So, yeah, yeah, this talk is great. Sorry if I sound like I was saying bad stuff. I
[04:21:16]  know, like, what they're accomplishing from an engineering standpoint is incredible. I just, I, my, we, and they have a use case for it, I
[04:21:24]  guess, but, like, my bar on performance makes it very, very hard to look a blazer seriously right now. But it's, like, I want to
[04:21:31]  look at it to understand what they're doing and see if I can, like, steal stuff from it, in a sense, because, like, there's good ideas there
[04:21:38] . It's just, like, the, the implementation is kind of, like, beyond a threshold that I can't ever consider acceptable. Maybe that's how you just
[04:21:49]  place it. But, no, I mean, he's, him or someone who helped him with a slide is on it. Like, you don't mention Svelte
[04:21:57] Kit and Solid Start if you, if you're not, like, paying attention, because we're, we're, like, little guys, even Astro. I love
[04:22:02]  that there's no, like, like, these are the metaframers you choose. Anyways. But, yeah, he does a really cool SvelteKit
[04:22:18]  demo. But, yeah. But, it's funny, guys. Yeah, he basically gets up to Knockout and then skips straight to WebAssembly. He's
[04:22:25] , like, yeah, spot framework. It's, like, Knockout. And then, and then it's, like, bam, blazer. You know, anyway
[04:22:32] . I think he's, even though, acknowledging even with this kind of stuff, though, like, when he gets to the future part, you can tell that he's
[04:22:38] , like, we're doing a lot of the right stuff here, but, like, it's almost like they're attacking it from the other side. And maybe there
[04:22:45] 's a place where he can meet in the middle. I'm, you know, I'm. Anyway. This talk is amazing. If you have not watched it, watch
[04:22:52]  it. Anyway. How are we doing here? We've lost some of the viewers. It's all good. I don't think people are used to these five-
[04:23:21] hour streams anymore. Anything else cool happen in JavaScript this week? Yeah. I'm trying to think of some guests that I thought, for the future, that would be really
[04:23:35]  cool to have. Obviously, Brandon Roberts is very cool to have. Having Daniel Rowe come back would be pretty cool. I kind of want to chat with Dominic
[04:23:45]  Ganaway, but I'm worried that, like, now's the wrong time. Like, I should have got him when he was working on Octane and just got
[04:23:53]  him to, like, just give us a deep dive on that. Because now he's working on Svelte 5 and it's probably all, like, hush,
[04:23:57]  hush, top secret. I'll still reach out to him. I love his work. As I mentioned at the beginning, he was kind of the one who t
[04:24:03] ipped me off to the potential of a block dom, like, five years ago. And he's always on the cutting edge of stuff. So, he would be a
[04:24:11]  great guest to have on the show. What do we got here? I've been reading, uh, the problem is they didn't. There was basically two divergent
[04:24:25]  paths. The only thing that I thought was interesting, sorry, to answer your question here, is that Astro's format is in a world where you really want to separate
[04:24:33]  client from server. You could, but even then I'd want control over what the server did. So, I was just hypothetically saying, okay, like, even
[04:24:41]  on Astro, we wouldn't use Astro for that. So, it just, and I think the Astro folks looked at that right up and they kind of took
[04:24:49]  their own thing. And I think they're very much focused on the MPA view transition APIs. I don't, I saw some tweets that suggest as much, and I
[04:24:58] , there, there's value to preserving state, but I don't think it's something that they generally care about. Um, so I think that's the direction that
[04:25:06]  they're going mostly. They might like have client-side routing, uh, kind of a more coarser version of what we were doing with the islands router. But
[04:25:13]  I feel like that's not really where their focus is. Um, the Astro thing, honestly, is I basically want it for the same reason I want Nitro.
[04:25:21]  Like I, or I'd want Nitro. It's like just, I want an adapter level layer by, that is supported by frameworks that deploy so that we can work
[04:25:30]  together and not all remake the same thing over and over again. Um, yeah, no, that's, that's awesome. I'm hoping Solid Start makes a good
[04:25:41]  impression on people soon. Um, they don't always have to be five hours, says my wife. She's right. I appreciate that. Yeah, I don't
[04:26:03]  know if I'm like set up to learn about Blazor. I feel like I need to like get Visual Studio or something. I don't know. Maybe like
[04:26:15]  he could just demo it on his computer. It's just, it's, it's hard. I, if the stuff's too far from what I'm working in or
[04:26:21]  working, doing, it's hard as, it's harder for me to get set up like to kind of relate to it. Even like the reason I chose to do,
[04:26:27]  uh, live view JS rather than actual Phoenix live view. It just, it just more, it feels like more attainable for us. Yeah, that, that
[04:26:44] 's true. Um, 28th will be a shorter stream. And then actually I am taking the fourth, is it the fourth off? Um, uh, Netlify
[04:26:55]  does a holiday every first Friday of August every year. So I won't have a stream the week after that. Yeah, the time difference with Alexis is freaking insane.
[04:27:06]  This is one of the hardest parts that we've always had. We, we, we, he, he, uh, it's midnight his time at 9 a.m
[04:27:13] . my time. And then it's, uh, at 6 p, it's, it's 9 a.m. his time at 6 p.m. my time
[04:27:21] , which is, if anyone knows, it's like the worst time for me. Cause that's like family time, like dinner time, you know? So yeah.
[04:27:28]  That being said, Alexis is kind of a private person, even though like he goes on social and he does amazing work on so many libraries. Um, he's not really
[04:27:36]  the type of person to come on a stream. Oh, I said earlier, but, but the Dioxys React, like the BlockDom and Rust team has gone
[04:27:48]  funding to work full time. Kind of breakthrough in Rust's web space. Interesting. That's interesting. Who, who's funding it? Cause I, I mean,
[04:27:59]  I, I don't have a leg in this race, but I kind of like the idea of, uh, reactivity instead of VDOM. Um, but,
[04:28:10]  you know, still good to see potential here of Rust frameworks. Yeah, this is very actually interesting when I think about it. Cause like, there's still that hurdle
[04:28:26]  and it, it's a hurdle. Cause if you think about it, JavaScript frameworks are doing everything in their power to improve that loading time and reduce the overhead. And that
[04:28:34] 's like, Rust frameworks are basically hopeless in that fact. So you need a really compelling update story and a reason to use Rust. Yeah, this is actually probably pretty
[04:28:47]  big news. Yeah, cause I, I, I, this, I was not expecting this to be fair. Get DHA to talk about TypeScript. Now I
[04:29:08]  know people are just trolling. Yeah, I mean, I, I, I'd love to know more about this, but yeah, there's always potential of that
[04:29:23] . Um, I tried to keep the API almost identical. So I, I've had good luck on it, but there are some things that don't work. I
[04:29:31] 'm sure we'll get to that at some point. Yeah, uh, yeah, there was some good million content and then we talked about some heavy stuff today. I'm
[04:29:42]  having a, oh, congratulations. If you're right, I've been having problems with the next effort in RSC. It seems like a lot of people are, I
[04:29:55] , we, it's a tricky problem to solve to be fair. Like this whole space is still being explored, so it's very brave of next of releasing it as
[04:30:03]  production ready where we are at right now, but I guess they feel confident and it's good cause more eyes are on this. We get to see more progress in a shorter
[04:30:11]  period of time. Yeah. I mean, maybe I'm, I'm, I think, I don't know if Evan would come on, but that's interesting. I
[04:30:20] , I'm definitely interested to see where he goes with View Vapor. Okay. Yeah. Greg's answer. GitHub funny, a mix of other grants of things.
[04:30:27]  I have a day job. Is block DOM rendered in a worker wasm or just more granular bindings than VDOM? In general, like millions, it's,
[04:30:42]  it's just about extracting the static parts of the VDOM. But I'm sure the Dioxys or whatever is doing some pretty fun wasm stuff. But
[04:30:52]  block DOM is literally just like combining a virtual DOM and that kind of like template cloning trick. It's, it's not actually that different than some of the like DOM
[04:31:02]  C or one more type stuff that we were seeing the JS framework benchmark a couple of years ago. Oh, he's trolling me on Marco. Well, I don
[04:31:12] 't know if anyone noticed what shirt I'm wearing today. I wasn't sure if I was going to talk about it today. I've been, I've been really on
[04:31:25]  this trip that like, what if Marco was always right? I started it last week when I was sitting there with that diagram in Excalibur, you know?
[04:31:33]  But like, it's not, it's not just that. There's just like, Marco six is also the only approach that I know of that doesn't, that tries
[04:31:47]  to hide the serialization boundaries from you at a granular level. And I, I, I started getting like really far down that thought thinking process this week. Cause I
[04:31:55]  was like, I was like, well, solid components run once. So anything that's not in a reactive primitive, what the hell is it doing there? Like if like
[04:32:04] , could you do something similar to what Donald Gannaway did with his forget like compiler where you just say like in component bonds, you're only allowed cost. You can
[04:32:11] 't reassign a value. Like, would it be possible to not try and be as aggressive as quick and pull out all the dollar signs type stuff? Like, forget
[04:32:18]  that, but do deconstruct the component. Just don't worry about the serialization boundary because you're not literally shipping these in separate pieces. Like, could you do that
[04:32:27]  and use the reactor graph to figure that out? Which of course is what Marco six is all about. But it's just like, I started thinking like, I mean,
[04:32:37]  if we go to a world where all our stuff is lazy, cause we have this reactive system where we can like in 2.0 where we're like completely lazy,
[04:32:43]  like you could kind of just do all the work. Like it's not hydration, but you could just kind of pull stuff. Like you don't actually have to serialize
[04:32:52]  that many different things. If you can go, I'm still only going to serialize the async stuff. Right. And then you could be like, if I hit
[04:32:57]  this at a certain point and it's not there where I'll just recalculate it and just pull through the whole system. Like, could you just do that
[04:33:04]  and then not need the dollar signs and still have completely resumable fine grained stuff? Of course, then I ran into context, but then I was like, I
[04:33:16]  have no clue how quick does context anyways. So, you know, I don't know. It's, it's, it's, it's just one of those
[04:33:27]  thought experiments, but it occurred to me that like, if you remove, I mean, this occurred to me a while ago, but if you remove that constraint of having to
[04:33:35]  break everything to different bundles, can you actually loosen the resumability constraints to a certain point? Like, let's say you don't care about the code loading.
[04:33:43]  Could you just use the laziness of pull-based reactivity to basically be resumable? That's, that's my premise and thought. How about Ryan Florence
[04:33:54]  as a guest? Oh man, I'd have to have a reason to go back to Remix, but I mean, I saw some cool stuff. I was looking at
[04:34:01]  docs this week and I was in Remix for some reason and I saw they had like a preparing for V2 and there's some really smart decisions where like, I,
[04:34:12]  like that I'm getting like the way that they're changing the way the meta tags work and the way they're looking at the file-based routing and stuff. And I
[04:34:18] 'm like, all these decisions make a ton of sense. I didn't want to go to some of Remix's V1 approaches because I, like, it didn
[04:34:25] 't quite sit right. And it looks like they're solving them here, which in, and I actually never really bothered to spend the time to try and solve it. So
[04:34:33]  this is actually really interesting. Like they're getting rid of catch boundary. They're going back to just error boundary. And like, that's makes a lot of sense
[04:34:39] . And just like, yeah, there's just, I think, I think there's some stuff that we can maybe learn from Remix here. Other cool thing, docs
[04:34:48]  diving that I noticed this week. Next, I was looking at the Next.js docs for some reason, because I was looking for React cache, right? And,
[04:34:59]  um, where is it? Uh, it's not here. I want the, is this the app router? Yeah. Okay. And I was looking at the cache section
[04:35:11]  and, okay. People probably somewhat familiar with the React cache. The whole idea is like, it dedupes during a single request. You just wrap something with cache
[04:35:21] . And then when you call it in your component, when you use an async component React, you just await it or whatever. Then if you do it in like two
[04:35:27]  components and with the same arguments, you get the same thing back. It's, it's a memo, you know, it's, it's a memo function. No
[04:35:35]  big deal. But one of the things that I thought was really interesting here is because people know that I have gripes with this a little bit. mostly that I don
[04:35:46] 't think you can get rid of data loaders, right? This cache approach doesn't stop waterfalls, but there's a way to stop waterfalls preload pattern,
[04:35:58]  right? And if you use the cache for preloading, then they just show an example where they export the same function just as a preload function. And then somewhere
[04:36:06]  higher up in the tree that, so like you could picture, you could take the remix pattern and just instead of having a loader have preloader and you just
[04:36:16]  call the functions there and call them where they use them and precede the cache. And you might be like, why the hell would you do that? Why would you
[04:36:24]  fetch an extra time when you don't need to? I know you're not actually fetching because it's in the cache, but why would you bother forcing the user to
[04:36:29]  write it in a separate place? Well, the answer is the whole reason this whole thing exists is because they can't have context on the server. So, because you
[04:36:37]  can't have hook like APIs on the, in server components. So the only, when you realize that and you go, okay, well, the 90% case of passing
[04:36:46]  stuff around on the server is just data fetching anyways, using a cache makes a lot of sense. And now you don't need to use context on the server. But
[04:36:52]  in order to prevent waterfalls, you have to do it higher up in the tree. So that's the actual answer. And it's really cool that the next docs actually
[04:37:01]  point this out, that you could, you could always just call a preload thing. I think you'd have to, you should, the reason that this matters is
[04:37:09]  like next doesn't really care about waterfalls on the server. Whereas I think it's actually important if you want a universal API that worked on the client as well, that
[04:37:18]  you'd have to handle in both places. But technically there is a pattern that works in both places, which is the loader pattern. But technically it's you, because
[04:37:26]  you can't use context to pass it back into the components you, and you don't want to prop drill to death. The pattern is maybe the preloader pattern
[04:37:36] . Anyways, just random thoughts. I actually started another HackMD document on that, um, talking about, okay, yeah, there's what if Marco was right
[04:37:48] , um, which got derailed by cache API, um, which is like, what if you lived in a world where data fetching was exactly the same on the client
[04:38:00]  and the server, whether it was normal SSR server components or client components? What if you just remove data fetching out of the reactive primitive zone to the end user
[04:38:11] ? And yeah, this, I'm not ready to share this really yet, but it, it, I was thinking of like, if the cache API and preload routes
[04:38:21]  could actually accomplish this, just one of those kind of crazy thoughts anyway. Yeah. So maybe I'm talking about Marco light. I know you're talking about something else
[04:38:35] , but yeah. People's doubling up the suggestion that I bring Dominic on. Yeah. Careful. If you say learn from remix is dangerous, whatever. Oh,
[04:39:03]  man. You're, if you're working open source and you're worried about people you coming up with very similar ideas or and crediting you for being inspired by you,
[04:39:14]  you're in trouble, you know. I haven't seen the Dom parts proposal. I know, I know that Evan talked about it in his view vapor talk. I
[04:39:32]  didn't actually look it up. I, I, I paid attention to the template parts proposal, which I absolutely was horrified about because it was basically bringing lit into the
[04:39:41]  browser. I saw a very quick look at Dom parts. Um, and I just didn't quite follow what was going. It looked like stage zero. It looked like you
[04:39:49] , you built like something that looked like a Dom. And then you just indicated where your insert points were. Um, I guess that's cool if it, if it
[04:40:00] , if it can be, uh, made performantly, because then maybe we could skip doing the walks. But I, I just, I'm not familiar with it.
[04:40:06]  If, if, if you can, if you can use this, skip doing the rock, the walks, it's very compelling. But part of the thing I want to
[04:40:14]  do is not ship the template in partial hydration scenarios, but still walk. So I don't know if that actually works. Anyways, I need to look at it more.
[04:40:23]  Biggest tricky part about these proposals is that, that, that means they're like two years from showing up in Chrome and then another like four years from showing up at anywhere
[04:40:15]  else. It's almost like I, I almost shouldn't pay attention to proposals until they're like implemented in Chrome. Yeah, yeah, yeah, yeah. Yeah
[04:41:05] , I, to be fair. Yeah, yeah. SvelteKit and Remix are like incredibly similar. Um, but I, I think some of the specific stuff
[04:41:12]  that, uh, uh, Remix has been doing is more relevant for us. Just, there's more similarities of React, like syntax APIs. People are just talking
[04:41:25]  about a bunch of other random proposals. You guys talk, pipe proposal. You're talking about like the functional, like the functional programming pipe. So you can like do a
[04:41:39]  reduce, uh, write or whatever, but just by doing like arrows, like a pipe and then an arrow, like, uh, natively in the browser. Yeah
[04:41:50] . I mean this, yeah, it's hard. Standards take time. I, I've been getting asked a lot more recently about like what standards I'd like to see
[04:42:00] . And I participate in those because like one day they could make a big difference. It's just so tricky because you know, it's going to be a five year cycle
[04:42:08]  if you're lucky. I think async local storage, like my, or what's called async context, async context. What stage is this at? Uh
[04:42:25] , can I find it? Maybe use one word. Maybe if I add async, local storage as well. I, I'm most excited about that RFC moving
[04:42:51]  forward, but I think it was stage one last time I checked. On the positive, I think that things outside the browser are going to push that forward because they need
[04:43:03]  it so desperately that you'll see stuff like Dino and node and stuff supported even before it's stage fours. Uh, is that much better than an arrow function
[04:43:19] ? Oh, I, yeah. Okay. Yeah. Yeah. Yeah. And the art, it's in the opposite order of arguments. Yeah. Yeah. Stage two.
[04:43:31]  Yeah. I saw something about performance. I, I've been trying to avoid async local storage because of performance. It used to be 10 times slower and you just
[04:43:41]  make your whole server slower because once you turn it on, like everything's dead, you know, for that request, it's like, bam, but I, I've
[04:43:48]  heard it's only half as slow now, but it's, it's interesting because it's, it makes the APIs really nice. And obviously after, after he's
[04:43:55]  using it, I'm going to have to benchmark the hell out of this stuff. Um, it's one of those things where it's like DX for just bottlenecking performance
[04:44:05]  by 50% right off the top, but it might be worth it. Yeah. People, everyone expects something reactive. It's, it's hard. We're still figuring
[04:44:15]  out patterns here. And I'd like some primitives to make it easier to write reactive code, but that's maybe the best case scenario. And I don't know
[04:44:26]  how those permits would be performant. There we go. Thanks, Dave. All right. Let's see here. Like, isn't this just a nice context API?
[04:44:50]  Like, stage two, very nice. Where, where is it? Yeah, yeah, yeah, yeah. Yeah. It's just like, it, it, it
[04:45:08]  even has shadowing the last time I checked. So like, if you already have a, the same type, it, it, it finds the closest one of that type
[04:45:17] . Like it's just, it's just the context API, like as we know in react and solid and whatnot, but like a little bit different. It's,
[04:45:24]  it's, it's pretty cool. Yeah. Yeah. Do you know announced support for racing closer? Basically everyone supports it at this point, which is why it's a
[04:45:35]  safe bet. It's just, I'm worried about performance. Yeah, I mean, the API is clunky or whatever, but I, I don't think it
[04:45:56]  really matters. Yeah. That work. Yeah. Which built works over async. Yeah. I mean, I, Seb made a comment about, uh, maybe two months
[04:46:09]  ago where he's like, what if all react context was just async context, like using the platform, so to speak, it's interesting. Okay. Yeah.
[04:46:22]  Didn't see a slowdown yet. I'm also worried about, um, serverless platforms, but at my gut is because of a desire to compete with node,
[04:46:33]  they'll be faster just like, because like next JS and like the, the, the, they will never let themselves like Dino bond, whoever is never going to let
[04:46:41]  themselves be slower at running next JS than node. Yeah. Yeah, yeah, yeah. This is all over the new next server component stuff. You think about server functions
[04:46:53]  like server dollar sign or use server. This is the key to getting the request over async context. It's actually a pain in the ass. Otherwise you have to pass
[04:47:01]  it in as an argument. Then you lose the transparency. It basically just doesn't work without this. I tried some funny stuff where I was hanging things off this and
[04:47:08]  off server dollar sign. It never worked in all cases. This doesn't work with arrow functions, server dollar sign, uh, didn't work when it was hoisted out
[04:47:19] . Like, cause only the compiler could see it. Like this is the solution. Like we will be using it. It's just, it's just, I've,
[04:47:25]  I've been just, you know, performance always something I'm concerned with. Yeah, react cash. Yep. Yep. Exactly. Yeah. I mean, part of
[04:47:43]  what we're working on right now is pulling signals out of solid core part of the reactivity system. I mean, you can already use it that way, but we're
[04:47:51]  really thinking first principles here right now. A lot of the work with Milo and this work he's been doing with the team at bubble is about, we'll see.
[04:47:59]  I mean, there's always going to be competing reactivity implementations, but, um, I think we're going to tell a pretty compelling story around the stuff for
[04:48:07]  solid 2.0. Too late. I ate it all. Yes. Talking pizza. All right. All right. All right. All right. Cache is a messy
[04:48:24] . This is the part that I'm missing. Cause like cache seems like a good API. I, I was thinking in my head. I'm like, I wonder
[04:48:31]  if you could make it apply to server and client and like have something universal thing. Cache seems like it would be pretty straightforward to use. I, I'm getting such
[04:48:43]  mixed reports about RSCs. Some people saying that like the DX of using them is great. Other people, you know, saying like stuff like this. And then
[04:48:54] , but the fun thing everyone agrees on is, is that they're dead slow, um, in dev and that they didn't, and the people who actually checked that they
[04:49:02]  didn't actually reduce their bundle size. So at least on the performance side, we know that they're not succeeding to a certain degree, but I, I don't
[04:49:09]  care about that. I'm like, we can always make similar looking APIs more performant, but I, I'm still unclear if people actually like the patterns and I'm
[04:49:19]  getting the impression that they don't. Oh, the fetch cache. Some people equal Theo. No, Nikhil also is a very big supporter. He built a whole
[04:49:31] , an app for his uncle's company, um, using, uh, next and, uh, react server components. But then he was like, man, dev is so
[04:49:41]  freaking slow that he decided that he needs to make his own react framework as well. Um, you know how he is. So like, it just was too much.
[04:49:52]  He's like, he's like, HMR was taking 10 seconds. He was just like, but otherwise he said it was good. Yeah, yeah, yeah. I
[04:50:12]  was trying to get him a spot, uh, at, uh, a conference recently. Maybe I can convince him to put paper in. Yeah. I don't know
[04:50:20] . I guess you got, yeah. I don't know. Nikhil could talk to lots of cool stuff. He could talk about how he, how he got react server
[04:50:29]  components working in beat. That would be pretty good for a react conference. Yeah. Yeah. Yeah. Okay. Yeah, exactly. Cache and validation was something that
[04:50:45]  I was looking at too. Yeah. I, I feel like I actually went to Tanner and I was like, okay, what does a universal cache API look like?
[04:50:51]  Cause I mean, I said, I said, look, I love react query, but I think if the goal is to make it the same in the client and server and
[04:51:01]  get away from the hook mentality, we need an interface that doesn't combine the cache with the hook. You got to keep the cache separate. So me and Tanner had a
[04:51:08]  good discussion the other day about, uh, caches. He, he, he seems to know what he's talking about in that regard. Sure. I'll,
[04:51:24]  I'll, I'll, I'll take a bite. Let me see here. I mean, I'm sure there's lots of little issues that are popping up. It
[04:51:34] 's not the end of the world. Okay. I see. Yeah. Yeah. Yeah. The, the basic react cache API makes a lot of sense to me.
[04:51:55]  The patching global fetch is for the tree. Yeah. I understand the incentive. It's, it's tricky, right? Cause basically next is, is always been big
[04:52:06]  on their, you know, static stuff, you know, site generation, all this. So the, the cache is like doubling up. They got rid of get service
[04:52:14]  side props and get static things to kind of do this unified model. And I feel like those are the gaps. I feel like if you're just like trying to do stuff
[04:52:21]  where you expect most things can't be cached, which is the world I live in, then like, this is not such a big deal, but yeah. Yeah.
[04:52:31]  I, I, the people have asked me about this in the, in the past, like this kind of zone. And I'm just like, I, I honestly can
[04:52:37] 't tell you, I'm not used to people being able to cache data between users. I'm used to, I, I've worked on highly personalizable personalized sites
[04:52:45] . My whole, my whole like for product career, I worked in social media, like everybody's stuff had to be all personalized for them. Feeds, um, suggestions
[04:52:55] , all, you know, all the different kinds of data flows. So like caching like this was never something that I even thought about. Yeah. I w I
[04:53:14]  was thinking when I was talking about cache, I was thinking cache per request on the server, like, like, like, like, like the cache API, but it
[04:53:21]  only lasts the length of the request. And then on the client have an invalidation time period so that you can decide how long the cache works. And then you could
[04:53:31]  use the unique link between the cache definition on the server and the client as a way of handling hydration without making the resources, the vehicle for it, so to speak.
[04:53:45]  And then, then you could simpleize resources basically into just memo. And then, uh, yeah, I, I just, I started kind of going down this crazy path
[04:53:54]  to think if we could basically erase, create resource and just like, just have async, like I'd already kind of come up with an idea with that you could have
[04:54:03]  async reactivity. So is a resource just an async memo? Um, so to speak, like a memo, the async function. And then if you
[04:54:12]  combine that with a caching mechanism, the handles the automatic serialization and streaming, could we just completely lower the number of concepts and solid into something simpler and streamlined? I
[04:54:22]  don't know if the answer is yes, but that, that was the thinking, because it'd be really cool because then like, you could just be like, look,
[04:54:28]  you have signals, memos, effects. Oh, you need something async? Well, just make that thing an async function. Oh, you want it to
[04:54:38]  work on hydration and caches? Add the cache API. Done. Like that, doesn't that sound like really easy and straightforward? Want it to run on the server?
[04:54:46]  Wrap that thing in the server or use, use server or something. Like just, we could drastically reduce the number of concepts in teaching solid if I could kind of balance this
[04:54:58]  thing. So anyways, that was where the, the thinking was. Yes, the React cache is per request generally, but Next.js has a beyond per request cache that
[04:55:11]  they're using with their fetch as well so that they can use it almost like their ISR mechanism where they can like cache stuff between requests. And I think that's where
[04:55:19]  like this fun is coming in because they, they, they want the ability to like, because they're also, it's, it's so they can do like pre
[04:55:28] loading too, right? Because I mentioned that they don't really deal with waterfalls nicely. So this way, like when you hover a link, you can hit the
[04:55:35]  RSC and basically server cache the page before you go to it. And then when you actually request the page, it's already warm that cache. I believe that's
[04:55:44]  part of the stuff that Next specifically has on their platform because they wanted to get back to that speed of static. Um, so they need the, they need the granular cache
[04:55:54]  to exist beyond the single request. I could be wrong, but React cache is request only, but what Next is doing is a second layer. I was in a space
[04:56:03]  with Dan and he was like talking about patching fetch in React. And he's like, yeah, we're going to scale that back. But he's like, Next
[04:56:08]  also has their own patching level. That's like a level above it. Anyway. Yeah. Uh, we'll, we'll talk about it soon. I mean,
[04:56:22]  maybe we'll have Milo back. Um, I, I mean, I've got some notes in a HackMD somewhere, but the idea is like, if
[04:56:32] , if you, if you could mark, if you're doing lazy based, uh, reactive graphs, if you could throw a promise, I know this sounds a bit like
[04:56:44]  React, like throw the, if you basically, when you hit, uh, async read or something and you get a promise back and it hasn't resolved, then if
[04:56:54]  you read that signal somewhere, you know, inside another reactive context, it could throw and mark itself as being waiting on async. So if anything read it, it
[04:57:05]  would also throw. And you could basically just pull through the graph that way. And then as stuff resolves, complete it. And what you'd get is something kind of
[04:57:15]  where you don't have to null check kind of like react suspense, but it would only block along the, this specific async graph. And as long as we were
[04:57:24]  able to separate the pure part of reactivity from the side effects, like where it's red, you could actually hold up running those side effects. It's basically like a
[04:57:32]  more primitive way of looking at how, uh, something like suspense works. And that's, that's sort of where my thinking is at. Um, Milo's actually
[04:57:40]  already implemented something very similar, um, for, um, the company he's working at right now. So we're just kind of like figuring out how to pull this
[04:57:50]  back into the solid 2.0 core. Yes, is what I was talking about there. Yeah, I've had this idea for a couple of months now. Yeah,
[04:58:03]  this is a good idea. Maybe, maybe I can find, I don't know who the right guest is. Like, I, I'd love to have like,
[04:58:08]  maybe like, Michael Mockney explained IMP to me so well. Um, it's amazing. But yeah, I, I, I got some good contacts over on
[04:58:19]  the Chrome team. So I'm sure we could probably find the right person to talk to. Anyway, um, it's five o'clock, I'm gonna go eat
[04:58:29]  some pizza.