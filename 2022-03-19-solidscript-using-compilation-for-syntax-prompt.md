---
showLink: "https://www.youtube.com/watch?v=ZVKHxm1-g3E"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidScript?! Using Compilation for Syntax"
description: ""
publishDate: "2022-03-19"
coverImage: "https://i.ytimg.com/vi/ZVKHxm1-g3E/sddefault.jpg?v=623434dd"
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

[00:00:00]  Hello, everyone. Welcome to my stream tonight. Today, we're going to talk about compiling for syntax specifically. There was some discussion, especially around Twitter, about
[00:00:18]  some other compiler topics. And I've covered those in the past. I actually had a really good stream on compilation back in, I'd say, end of November, early
[00:00:28]  December, where I spent four hours talking about compilation and optimizations and that whole topic. Plus, week to week, we cover different stuff. Admittedly, I
[00:00:36]  don't think we get to completely avoid it because this week in JavaScript, there was some discussion. So we can dig into it a bit. Actually, I'm pretty excited
[00:00:48]  to talk about this week in JavaScript because there has been a lot of different discussions going on and kind of funny and interesting ones, really just a continuation of last week. But
[00:00:58]  we've seen them kind of a lot of these things grow and kind of manifest into new things. Anyways, if you're joining me, come by, say, say
[00:01:07]  hi in the chat. Oh, wow. Hello. We'll give it a little bit. I'll give it a couple seconds here. Sorry, I don't have
[00:01:20]  the cool, like, we'll start streaming intro music or anything. This is about as low budget as it gets. Like my blurred background, it's terrible. But until
[00:01:30]  I get a green screen and a permanent place to stream, this is what we're dealing with. Hi. Thanks for joining the stream tonight. Yeah, fairytale
[00:01:40] . Yeah, fairytale reference. Glad some people got that. It's hilarious to me. Like, yeah, obviously solid script is actually a thing in fairytale
[00:01:53]  anime. Good. Starting to see people join on. That's great. Yeah. Today was a good day for me, actually. I took the day off work and
[00:02:09]  went hiking over in the East Bay Area. And it was a wonderfully sunny day in these green hills. And I had a really good time. Got a lot of sun.
[00:02:20]  Which I'm not as used to. I mean, I've been living in California now for two years, but it's still still a bit of a shocker.
[00:02:27]  I'm from Vancouver, Canada, where it's just like rain 60, 70% of the year. The summer is beautiful, but like, it's like all rain.
[00:02:39]  Yeah, yeah, yeah, yeah, exactly. Yeah. It's funny because, but you know, like when, when you like, when Rich Harris first, uh
[00:02:47] , well, uh, you know, we'll get into it when we, when we talk about some stuff. Cause I can say like just the whole, you know,
[00:02:54]  JavaScript, whatever script I've heard Svelte being called Svelte script. And then I was like, okay, let's call it solid script. reactive script
[00:03:00] . I read an article about that in the fall, which we'll talk about a bit today too. So yeah, let's just, yeah, we got some people here
[00:03:08] . It's been three minutes. Let's, let's, let's get started. And talk about this week in JavaScript. Okay. So I'm going to share
[00:03:15]  my screen here, which I probably should have prepped before the stream, but you know, here we are. I'm going to talk about some solid stuff. Um,
[00:03:25]  largely, uh, last week there was a few other solid things I didn't talk about cause we're focusing on Svelte, but this is a solid week. So
[00:03:32]  let's talk about solid. Um, so I'm actually gonna start right from right, uh, last Friday, like a week ago, um, this thread about reflecting on
[00:03:41]  perceptions of solid. I'm just gonna read it out loud in case anyone missed this. Um, but it's kind of interesting to me cause this, this whole thing
[00:03:48]  came out because of kind of conversation, um, you know, about it's all the better than react and all this kind of dialogue. And it's a funny one.
[00:03:58]  I was actually on JS Jabber this week, um, recording the podcast and it came up again. And the, the funniest thing is that, and this relates to some
[00:04:07]  of the topics this week as well, was I chose JSX for a very specific reason and solid already had reactive primitives that looked like hooks before hooks came up.
[00:04:17]  So like, none of this was trying to look like JS, uh, like react, except now we just happened to. And once like we got close enough, you know
[00:04:29] , I was like, they got good ideas, really well-designed APIs, you know? So I, you know, I, I did definitely borrow, um,
[00:04:36]  elements of it, especially in terms of the, like the tuples for the hooks, but the funniest thing was I was never trying to make solid look like react.
[00:04:44]  I just believed in the same things and respected, you know, the, like had, had a reason to use JSX and then react out of hooks. And it
[00:04:54] 's like, okay, well, here we are. So yeah. Um, yeah, I'm just gonna read this for a second. Can I get an idea here?
[00:05:01]  Um, cause my reflection on solid is this. It's tricky. Solid first came to attention because of performance, right? Um, architecturally, because it's very different
[00:05:09] . It's capable of doing things that other frameworks can't, but that one will tell most people on. And I linked this great Fred K Scott, um, clip
[00:05:15]  here, which I quite enjoyed, um, where, you know, he showed this little graph showing like how much faster than this benchmark solid happens to be than some of the
[00:05:25]  other solutions. But it's more about performance, right? Like the server rendering performance is even better than the client side, but no one really talks about that. And
[00:05:32] , you know, then we got attention because of, as I mentioned JSX and hooks with a VDOM people are like, oh, you solve the, the react
[00:05:40]  problem. Um, you know, uh, some people actually ping, when I first joined Twitter, people pinged, uh, Dom, Dominic Ganoway, who
[00:05:51]  was working on prepack, uh, for fit for Facebook to add compilation into react. And they're like, he solved this. He says he solved this. How
[00:05:58]  could you guys can solve it. He must be like basically suggesting that I was a liar, but I didn't actually solve the same problem. I was working on a different
[00:06:05]  system. Reactivity is very different than react. Solving compilation for react react the way that Dominic was trying to do was, is actually pretty difficult. Um, right
[00:06:15] . So it's kind of funny. Cause then we got attention because, you know, we could do suspense and concurrent rendering. Um, so it started this sort of
[00:06:22]  felt for react narrative, but solid reactivity is runtime. It's not like a compiler across the board, which again, we'll talk about today. Only the JSX
[00:06:32]  is compiled. And now we're seeing this discussion around automatic dependency detection and, you know, independent updates, you know, this whole react as it should have been no use
[00:06:43]  raft stale closures or hook rules. And. I think that, you know, solid has its own considerations. And so I said, you know, we don
[00:06:57] 't need structure props. We have this like one rule, but it's the abstraction. Right. So like, and it's, it's, it's not very react
[00:07:04]  at all. Um, right. And I said, solid is not react. We chose JSX because it's portable and existing. We wrote reactive hooks before reactive hooks
[00:07:12]  were a thing. And then the final thing I put was, I think the way we solve skills up and down is really powerful and why I'm so confident about it.
[00:07:20]  When a div is just an HTML development, the state is a primitive that works on its own. Like a promise does. You feel like you can do anything. And
[00:07:25]  that's the takeaway. I'm going to do a stream about this, um, coming up where I kind of do solid past, present, future, and we'll kind
[00:07:35]  of, you know, reflect on this, but I just wanted to start here because I didn't give this thread enough attention last week when it came out, because it really
[00:07:44]  has shown that. has shown that like, it's funny. It's, it's never a single thing is, you know, and that's a challenge with something
[00:07:49]  like solid. There isn't that obvious hook. It's just like, people kind of come at it and like, oh, and then they're like, okay, well
[00:07:56] , that's interesting. And I'll go back to what I'm doing. And then a few months later, oh, that's interesting. I'll go back to what
[00:08:01]  I'm doing. But at a certain point, they'll probably just be like, oh, so yeah, it's, it's, uh, it's just one of
[00:08:11]  those kinds of things. And I wanted to kind of talk about it a bit today, just because this evolution, you know, started several years ago and it kind of
[00:08:20]  continues, um, on today in terms of, you know, us discovering the new powerful things we can do because of this primitive based architecture. Everything's just small pieces.
[00:08:29]  It makes them very, what's the term? Adaptable. I don't want to say flexible. Flexible usually makes me think of configuration where you have like lots of
[00:08:37]  like dials to turn. I mean, adaptable as in like, I have these pieces like Lego, like they can be built this way or they can be built
[00:08:45]  this way. And, you know, you just kind of decide what you're trying to build. And then as long as you have the blocks, you, you can do
[00:08:52]  it. And that's, that's sort of the mentality here. Yeah. Some nice comments coming in here while I'm getting started. Yeah, I know it's
[00:09:02]  a terrible time. You know, maybe I can do something about this in the, in the future. Um, you can't, you can't really work for everyone,
[00:09:08]  but I think this is actually probably the worst possible time to be streaming. So I do appreciate people coming here. Like you stream like first thing in the morning. It
[00:09:14] 's really good for Europe. It's like dinner time ish and you know, people, you know, all the way across North America and see it, but you basically
[00:09:22] , um, cut off people in, uh, South, the South Pacific, you know, in Asia and stuff. So this time is better for the, for them
[00:09:32] . So I guess there's a trade-off, but I think classically, um, solid's grown more in North America and Europe. So there's a little tension
[00:09:39]  there, I guess. Anyways, uh, keep on going. Uh, so yeah, what else was cool? That kind of came up capacitor, solid beat capacitor. I
[00:09:51]  I'm super stoked on this. Cause again, I haven't tried it yet. And maybe there's something we try on stream. I don't know, like how much
[00:09:55]  native stuff, like, do I need to get like Android studio? I'm still working on here, you know, to get it working, but like seeing solid on
[00:10:04] , on mobile makes me pretty happy, stoked. Like it's one of those things where, you know, I didn't have to do any work and people have built this
[00:10:12] . It's, it's amazing. Yeah. Yeah. You're probably, you're probably West coast. Like, like I am. So yeah. Um, so
[00:10:26]  yeah, this is really cool. Um, Ionic, um, you know, and capacitor solid beat. I haven't played with it yet, but yeah, iOS,
[00:10:35]  Android apps, PWA is really, really cool. Um, another cool thing that, that, that happened this week was some amazing articles were, were written. Um,
[00:10:48]  really. Uh, and, uh, the first one that I saw, uh, was from Taylor hunt. And to be fair, um, you know, I I
[00:11:00] 'm going to, I'm going to pause on this one for a minute. I want to get back to here. The reason I want to get back to here is because
[00:11:07]  it's going to tie in some stuff we're going to talk to you about in a minute. Um, before we go there, I actually want to continue on this,
[00:11:14]  uh, maybe raw, raw, solid conversation for a moment. And talk about, um, the ecosystem thing, because right after we did the stream on Friday, um
[00:11:23] , basically for the next two days, it had nothing to the stream. I've just been right after we got the stream. Everyone started talking about ecosystem. And,
[00:11:32]  uh, this is kind of a, it's a funny topic for me because like ecosystem means different things to different people. And it's always interesting to me when like the
[00:11:47]  popular solution and people who are, you know, proponents of the popular solution come out. And to start really pushing the ecosystem argument because like, it's fine.
[00:11:58]  Everyone knows that like, that's why the solution is popular. But when they get to a point where they feel like they have to justify it, you know, it suggests
[00:12:08]  that maybe you're doing the right things. Um, like this, this, this was, this was a funny one. I mean, I, I, I wouldn
[00:12:15] 't say, yeah, I like that there's quotes around three technologies better than react. And I'm actually gonna blow this up one more little bigger so you can see it
[00:12:22]  better, but like preacts felt and solved. These offer better performance, smaller bundles, more out with APIs, but I'm not using them. Why ecosystem reaction
[00:12:28]  equal system makes it compelling to me. And then someone there was like two or three of those kind of floating around. And then someone else was like, okay, well,
[00:12:35]  um, these ecosystems have you like 99% covered the time. They don't, you feel, you don't feel lost and you get a chance to contribute. Don't
[00:12:44]  buy into use react for the ecosystem PS. It's just fun. So it's, it's, it's a kind of funny argument because I think they're both
[00:12:52]  right. I think from a pure like library standpoint, third party library standpoint, like you, you'll find what you're looking for in these ecosystems. Solid is like a
[00:13:05]  little bit lacking on that, maybe on the component libraries, but that that's a gap that's gonna be covered in no time. Svelte has you covered and
[00:13:11]  view, like, I don't even know what views in this list. Right. But when you talk about ecosystem, you talk about job market, you talk about hiring.
[00:13:19]  It's a whole other thing. React has really cornered this and, you know, regardless of, you know, what we say or not, it's the, it
[00:13:29] 's, it's, it's the true fact. Right. But I, I just gotta say this though, like being included on these lists and this being the conversation,
[00:13:38]  like, what, what did I say here? Right. Right. Like I'm so stoked. Like if that's all that's holding you back, like, what
[00:13:48]  else can I hope for? What else can, what else can we do? You're like, it's like, it's just like saying like, this is more popular
[00:13:57]  and has, you know, more, more, you know, people working on, you know, around it, then that's what I'm using. It's like,
[00:14:05]  well, of course, like, that's a good reason. I, I worked at a startup. At a startup where we had a custom stack and I worked at
[00:14:11]  it for eight years. I said, I was never wanting on the library side. We always could do exactly what we wanted. And, you know, we, we had
[00:14:17] , you know, good developer experience and we built a good system around it. But, you know, uh, of eight years later, we actually ended up, uh,
[00:14:25]  doing a rewrite with, uh, react. And it's funny, we hit new problems and we tried other libraries and the open source and they didn't quite work.
[00:14:34]  And then we had to patch them. It was, it was the same thing. We didn't like it on the library side. I didn't actually feel any nicer or
[00:14:39]  better, but you know, what was nicer. We just started picking up like college grads and like, like just picking up like people who just out of bootc
[00:14:47] amps and they were up to speed, no more training. Like that was huge for our startup to be able to like ramp people up and, you know, not worry about
[00:14:57]  how much of an investment we had to put into talent. So like, I, I respect that argument, um, in terms of like hiring and job pools, like
[00:15:05]  completely, it just like to know that that's the only thing, like that's, that's sweet. You know, like, you know, keep on making posts like
[00:15:14]  this, people will see it and go, maybe we'll just read the first sentence and just be like, you know, you know, go for it. Yeah,
[00:15:26]  what do we got here? Yeah, exactly. I mean, it makes sense. So, yeah, um, yeah, this, this is, this is kind of comes
[00:15:37]  with the territory and, you know, um, yeah, and, and this is a good point, right? Like, why, why, why even bother, right?
[00:15:48]  The problem is there are problems and solutions, you know, react actually isn't the best at, and I'm not saying solid is actually going to be the best solution
[00:15:57]  in those cases necessarily. I'm just saying like, there, there are places where react actually isn't the logical like choice, like not at all. And, you
[00:16:03]  know, it's like, at a certain point, you know, you just go, okay, well, I'm going to try something new. Maybe, maybe I'll
[00:16:13]  build in this felt like at a certain point, someone's going to do that. And eventually the tide turns, if that's the case, I mean, it's
[00:16:19] , it is hard. I don't, I have no illusions to this, you know, like, like, it's just self perpetuating thing. And the more
[00:16:29]  and more popular gets like, I don't even know, like the angular lose its like edge when angular two came out, or was it just cause reacted that much better?
[00:16:39]  Like it was like, I'm not actually sure. And, you know, like, does the, does the, like the leader have to lose their lead for something else
[00:16:49]  to pop up? I'm not sure. Like there's, there's not, there's, there's an argument that stuff isn't compelling enough. Like regardless,
[00:16:56]  like felt, for example, is incredibly successful in the mindshare side, but not, not as much on the adoption side. Like maybe, maybe that's just a
[00:17:06]  reality we live in. I guess, I guess we'll have to see. I'm, I'm just, I'm just not so pessimistic. I think that when
[00:17:13] , when the opportunity strikes and as time passes, other things will get their chance. Yeah. Yeah, exactly. And, and, and when there's a chance,
[00:17:30]  the chance will happen. And so I'm not worried about this. I mean, I didn't get into this because I thought I would like win the framework battle on like
[00:17:38] , like, there's so many other things. Like, I, I, I was in music for a long time. Right. And thing you know about in music
[00:17:45]  is it's like 90% marketing and put yourself out there. Yeah. Like sure. Write a catchy song, but like, it's like, there's so many,
[00:17:53]  like talent. Like talent isn't going to get you to number one, like it'll get you. It's, it's, it's incredibly helpful to be talented
[00:18:02] , but there's so many aspects to it. And like anything, like even if something was strictly the best technology, which nothing ever is, that's still not enough.
[00:18:11]  Like there's, there's just so much to it. Right. So yeah, maybe, maybe, maybe that's, that's, that's what we need.
[00:18:22]  That's, that's not what we need. No, but yeah, I mean, I did the fact that these conversations are happening are cool. These threads were interesting to
[00:18:32]  me because, you know, yeah, safe enough for the long-term, you know, Rich Harris getting hired by Bursell to work specifically on Svelte.
[00:18:42]  That's big, you know, that's the kind of stuff that's going to make or break libraries at, at, at solid or Svelte stage. And I
[00:18:49] 'm not saying that solid is at Svelte stage yet, but you know, like there, there, there is a, there is a, there is a trajectory that
[00:18:57]  I'm seeing for new frameworks. I was looking at this on the JS framework benchmark, right? If you look, if you look, not JS frameworks, sorry, the
[00:19:02]  JS survey thing. If you look at the, at like 2015, 16, new frameworks actually launched up really quickly. And they gained like 10, 15% a year
[00:19:12] . Like you rise with meteoric, like react. They, they, they, they went up actually fairly quickly and they, then they hit their plateau and they, and
[00:19:21]  they kind of barely moved Svelte for the last three years has moved up slower. But just keep some moving up. Nothing else has been moving up over that time
[00:19:28]  period in terms of like usage. So I think this is just like the slow climb and that's what we're in for unless something fundamental changes. that's a great
[00:19:44] . Yeah. This is, this is, this is, this is an interesting topic for me. And I, I think it's, I think it's cool that people
[00:19:56]  are discussing it and being realistic about it. Um, I already talked about, um, I already talked about, I forget what more, did I have more? Yeah
[00:20:03] . There's things we control and things we can, as much as re reaffirmation of doing the right things, ecosystems come with time and it all starts with people
[00:20:11]  recognize the potential. Yeah. So yeah, I, that's really my, my closing point on, on this one. You know, I mean, I I've
[00:20:19]  seen the nasty other side of it. Right. So where is it not where we're here, which is that side. I mean, I'm not gonna, I can
[00:20:35] 't give too many details here, obviously, but you can imagine if you work at a company that doesn't use react and the other popular companies, um, that are of
[00:20:44]  the same size or caliber user. There is definitely a friction and misunderstanding with developers. I've witnessed this, um, you know, where the, you know, there
[00:20:53] 's this thinking that like, you're hurting their job, future job prospects. Like you're hurting their resume. Um, I, I, I, I've, I
[00:21:02] 've been, I've, I've been told that, that, that we're like, basically we don't care about their future because we're, we would, might
[00:21:12]  be making them use a framework that's not react. That's insane to me. Like, but I get it. Right. Their, their view of the world is
[00:21:19]  that they go into a resume. Someone's going to ask, or sorry, into an interview. Someone's going to ask them about the specific detail about hook rules and like
[00:21:27]  when to use ref and stuff. And they're just not going to have that experience. Sure. They built a hobby project, but they never did anything to scale. For
[00:21:32]  me coming up, it was all about just learning. The framework and the tools. And when I did one, I learned all about that one. I did the next
[00:21:41]  one, but I learned about that. And now that I know about two, I was able to connect the dots, see the similarities and my understanding of both increased.
[00:21:47]  That's why I'm here today because I spent so much time working on different solutions, benchmarking them, studying them. It was understanding, you know, doing real work
[00:21:57]  in one, doing work in another, and then kind of learning the thing that's not written down in the docs. And, but how do you tell someone that?
[00:22:06]  How do you tell someone when it's like their first job out of college and they're like, I thought I was going to be able to use react. And now where
[00:22:16]  can I get hired? Like it's, it's, it's, it's, it's, it's, it's, it's, it's, it
[00:22:25] 's a challenging thing. Yeah. Yeah. Like I, if you talk to hiring managers, like I do hiring myself, I do interviews, but I can, I'm
[00:22:37]  not hiring for a react position. So maybe like, I'm excited when people have good react experience with that. Like it shows that they, as long as you understand declar
[00:22:48] ative libraries, you've gone through the patterns of the trials that that shows that you're able to learn it. It's not like, like, you know, being
[00:22:55]  able to recite the hook rules in reverse orders or something, you know, while standing on your toes or standing on your head or something like I, it's, but you
[00:23:05]  know, it's, it's hard to appreciate. Um, Ember was a fun framework, but yeah, this is, this, this, this is the thing
[00:23:23] , right? Frameworks are a mode of space, just like programming libraries at the end of the day, the finished product, all the matters. Yes. Yes. And
[00:23:30]  do you know, it's even a hotter space in my opinion than frameworks, or maybe it's why frameworks are a hot space syntax. That's, that's why
[00:23:39]  we're, we're here today. Like talking about syntax is because God, is that an area where people are like opinionated and it's like, sometimes it matters.
[00:23:48]  And I talked about them when I saw compiler optimizations, but sometimes it does not matter. And it's purely superficial. And people just go crazy over the fact that they
[00:23:57]  have to type like four more characters on a few lines. Like, even if it's like conceptually one for one, like I, I, it's not something
[00:24:04]  that I appreciate enough and that's kind of why I want to do this exploration today, but you know, yeah. Yeah. This, this is an interesting one, right
[00:24:18] ? Because I think declarative frameworks are a skill. Like some people kind of talk and hire about, talk about like hiring on like JavaScript and I, I'm not
[00:24:27]  saying this is what you're saying, but like fundamentals, you know, and like accessibility, like there's, there's a whole bunch of native, you know, knowledge
[00:24:36]  around the platform. That's a really helpful understanding, progressive enhancement, like all, all these things. And I mean, we, we hire on JavaScript, um, on
[00:24:45]  our team, cause we do a lot of platform work. It makes a lot of sense, but I do think declarative, um, I do think declarative frameworks
[00:24:54]  are a skill set, but I don't care if it was view or solid or no one's getting heard of solid. Sorry. Um, like, or, or,
[00:25:03]  or react or, you know, or Marco or whatever. I don't, I don't care about which library it is. Yeah. Yeah. Yeah. I mean
[00:25:23] , I, this is why I want to explore syntax and we'll, we'll, we'll get there in a minute. I just, the ecosystem conversation was just too
[00:25:28]  much of a hotbed and I wanted to talk about it. So now I'm going to get back to where it's going. Cause I still got a few more
[00:25:33]  topics here this week in JavaScript was rich and it was really cool. Um, so I want to talk about the Taylor hunt story because how many times, um, and I
[00:25:42] 'm going to go into here. Yeah. Let's click into this one. How many times, like you see this situation, this is for some e-commerce site,
[00:25:48]  I think it's called Kroger. And how many times are you in the situation where you're, I don't know, tasked with like, he was tasked
[00:25:57]  to do with the rewrite and he essentially was trying to get his company metrics up. Right. And he basically they had react redux set up, which was like 44.
[00:26:09] 7 kilobytes before any feature. And they were doing their page test scores and they just weren't good. And they're like, you know, they're like
[00:26:17] , how, how can we get better performance here? And he goes and details this a bit, five stages of grief on performance. Like this article is hilarious. And,
[00:26:28]  you know, he spent a lot of time trying different stuff and testing it. And what was really kind of interesting for me is, you know, he, he looked around
[00:26:39]  for suggestions and like help. He was like, well, if I need to improve performance, how do I, how do I improve performance? Like what, what,
[00:26:45]  what, what are the things I have to do? And, you know, he, he looked, Alex Russell has a great article I've cited in the past about,
[00:26:54]  can you afford it? Real world performance budgets, which suggested that, you know, like, you know, he said he has a pretty high number that, you know,
[00:27:03]  we should be in this 130 to 170 range. But like, I've seen the number, like from Addy Osmani or was it Jake Archibald's articles
[00:27:09]  about the cost of JavaScript that suggests that number should be more like 80 on the initial page load. But, you know, essentially, like, he's trying to, you
[00:27:22]  know, cut down his page. So for some reason he did a bunch of math and he realized that he wanted to get to 20 kilobytes. Okay. So
[00:27:34]  they bumped them up to 250 now. Yeah. Yeah. I mean, I guess the bottom end devices were up, but what his test frame that he had, had
[00:27:45]  a much lower number. So he was trying to get the 20 kilobytes and then he started looking at like, he said, what I did, I went to
[00:27:53]  Amazon and made up a really bad user agent to see like what they loaded. And basically it loaded like the most basic page. And yeah. So he's like, okay
[00:28:05] , we can make things smaller. Like there's a way to get that kind of performance. Cause Amazon actually is one of the, actually for a large e-commerce site
[00:28:11]  has actually relatively pretty good performance. And if you saw tweets from a few months ago, part of that is because they don't use any JavaScript frameworks. They, there
[00:28:19]  was like a whole thread that kind of raised some heat. Cause they were like, yeah, we can't use react SSR. It's too slow. Um, so
[00:28:25] , um, essentially. He, he, he, what he landed on was MPAs essentially, um, because that was the only way to cut the JavaScript down.
[00:28:36]  And what, what it was interesting, what I loved about this article was he was in this like place where. He, he, he couldn't, he wasn't
[00:28:44]  allowed to touch the backend API. Right. And he had like these cascading calls and he tried to like optimize them as best he could. But, you know,
[00:28:52]  so he, you know, dealing with time to first bite and all these things. And the problem web performances, other people, basically within his own organization, he, he
[00:29:03]  didn't have enough control to actually change the backend. Right. Like there's so many places. Like there's so many places. So what he ended up doing was
[00:29:09]  kind of realizing that he wanted to do an MPA for this case. He did again, figuring out, let's say what here. Figuring out. What was this
[00:29:19]  here? Let's say you have 10 data sources. I listened to one API call. What are the odds my server can respond quickly enough? He basically calculated that he
[00:29:26]  would never have a chance of actually getting the fastest response. Like one in 10 would get the response he wanted. So blocking for time to first bite was just never an
[00:29:37]  option for him. So eventually he came up, he realized that he needed streaming. And in this video, he showed the difference between streaming and not streaming. Right. On
[00:29:47]  the right, you can see the same page load right away while it streams in the content. Well, the other page takes the full 2.5 seconds to load in.
[00:29:55]  And he's like, these take the same time to load, but one field's a billion times faster for the end user was essentially what the argument was. And I
[00:30:05]  mean, he goes on more, but I mean, okay, fine. Was this just a big, he was like, why not Svelte? He looked at S
[00:30:13] velte. He looked at a bunch of stuff. Basically there was only one solution that did streaming. So okay. Maybe this was just a big ad for Marco.
[00:30:20]  But my point was, this wasn't made by the Marco team. We didn't write this article. I thought this was really cool. If you want to learn more about
[00:30:29]  Marco, check out my stream from two weeks ago. But this article was really in depth with how he approached a real world problem. And, you know, he has a
[00:30:40]  whole bunch of articles here about streaming and his history of streaming. And he did his research and basically at the time, his only solutions were Marco and dust for node.
[00:30:56]  So like, and he's going to continue on it, but I just thought this article was, was really awesome. And not just cause it plugs Marco at the end,
[00:31:03]  but because essentially like, it's nice to see a real world example of this stuff. Of course, this caused a whole other chain of reactions because of course, remix
[00:31:17]  had the jump in because it was streaming and. They like to tell us that streaming isn't, isn't a fast enough, but you know what? I want to
[00:31:33]  talk about this too, because. Or sorry, that's not streaming as fast as the stream doesn't have a big enough impact, but actually I figured out the problem.
[00:31:41]  Why and. And we'll get to that in a moment because what. There was another thing that, that was very similar. Addy. As. As money.
[00:31:51]  Chrome team. Made this chart. And. He was trying to kind of show all the different ways to render the web. This is on patterns.dev this chart.
[00:32:01]  And it was. It's. They've been tailoring this chart for years. Like they had it in some old articles from 2017, 18, 19. And. In
[00:32:09]  the past, I was just like, yeah, this is mostly right. So I won't leave it alone. But this year it is like, they tried to add new
[00:32:14]  topics and stuff. And the one thing that actually was kind of funny and I'm not the only one said it, I read the chart and I was like. This
[00:32:20]  person's been using next.js because you could tell that all the numbers and all the considerations were very specific to the perspective one would have from using next.js. And
[00:32:34] . Especially this whole time to first time to interactive versus first contentful paint. This matters completely based on the hydration technique. And none of these actually define what hydration technique that
[00:32:45]  you have to use. Right. Like, like there's, there's some like obviously CSR doesn't hydrate, but like you can mix and match hydration techniques
[00:32:53] . I'm working on an article to hopefully bring some clarity to this because people pass this article to me and they're like, what does it mean by spa behavior limited or
[00:33:05]  caching minimum? And it's kind of like, I don't, I don't know. Yeah. Yeah. Yeah. Yeah. This, this current chart still
[00:33:20]  has some things, but what was interesting for me for this chart was that Ryan Florence Remix decided to make his own chart where he crossed off like half the stuff.
[00:33:32]  And at first I was just like, oh, is this like, especially with this red one. I'm like, is this just. Are we inventing a category for
[00:33:38]  our own framework? Kind of too. But he actually has a lot of really valid points because this whole hydration row is basically garbage. As I mentioned before, like, it
[00:33:47]  just doesn't have any correlation. And, and there's some comments about caching and yeah, all the ambiguous areas. Why, why is it limited spa behavior in
[00:33:57]  this case? And like, basically just this, this whole thing, just, I think we need a rewrite or redo of this at this point. But the one point that
[00:34:07]  he made that I thought was weird was he was like on streaming, he crossed out this low and consistent across pages. And so it depends on what first chunk does server
[00:34:16]  side and user network slow user networks have the same time to first bite as SSR. I was like, what? That makes no sense. How could like streaming, you
[00:34:28]  literally get the response, start rendering and start responding right away. You don't wait for any data. How could that have the same time to first bite as like, wait
[00:34:36]  for the data? Like we've seen on, on the stream, we've seen like the impact of, of streaming. How, how could that be the case?
[00:34:46]  And I was like, okay, I hadn't been paying attention to time to first bite. I've been looking at first paint and yes, first paint seemed to be the
[00:34:58]  same on a slow network. I've shown this before. So like on a fast network, it's streaming looks much nicer, but on slow network. Like it,
[00:35:06]  like the, the stuff kind of showed up at the same time. And it makes sense to a certain degree because, you know, maybe the data is like kind of still
[00:35:16]  coming over the wire and it like, it kind of all ends up at the same time. But time to first bite should definitely be faster for streaming. Definitely. It wouldn
[00:35:25] 't make sense at once. So I was like, okay, let's, let's, let's go look at this again. Because I mean, because I mean
[00:35:37] , you, you, you've, you've seen my timelines here, right? This is, this is solid hacker news. This is the remix hacker news. And if
[00:35:44]  we look at the performance, we, we, we've seen these charts and these graphs before. Right. So I compress something on the network side. Yeah. Let
[00:35:54] 's open it. Right. Right. Like the, the whole thing where like, actually I wonder if this has early chunks working here or something. I don't know
[00:36:04] . Anyways, but like essentially, usually the page loads and then the assets load for, for, for remix. And then that pushes things out. This, this,
[00:36:14]  this, this run here was done on slow 3g. So essentially first paint is at 42 85 and large content full paid is at the exact same time. This is what
[00:36:27]  happens. You do async rendering. And then because at that point, um, they have to go request the chunks from the server and then, uh, you know,
[00:36:37]  get, let's sort of get the JavaScript. It takes a while for hydration to happen. And it's at 13, 594 in the solid hacker news example,
[00:36:43]  while it's streaming here, we're loading the stuff. So, you know, yes, our first pain is, is, is around the same time on the slow network
[00:36:50] , but then, um, why is this not updating? Our, our largest contentful paint. Um, and, and, uh, and, uh, the, you
[00:37:04]  know, um, sorry. Our hydration is done about almost like three seconds sooner. Now the thing was, I was like, I was, I've been focusing so
[00:37:14]  much on this paint stuff. Right. So clearly like in my browser, I can see this event is like slight advantage on paint, but it's like minor, like in
[00:37:22]  the end, it kind of works out the same way. It's hydration costs kill. And that's a, that's a, that's a react problem, not a
[00:37:27]  remix problem. But then I, so I went to the network tab and I looked and it was like time to first bite on this is 2.02 seconds for solid
[00:37:37]  version. And on the remix side, time to first bite was 2.03 seconds. The time to first bite was identical. Like it, this, this doesn't
[00:37:52]  make any sense. You know, and so Ryan Florence is right. Right. So what I, what I did was I was like, okay, what if Chrome dev
[00:38:05]  tools are lying to us? Because we're throttling it. Like we're the ones who are causing this slow 3G. What if the Chrome dev tools are
[00:38:16]  the reason that we can't actually see the performance difference? That was my hunch. And as it turned out, it was the right hunch. Because, I mean, we
[00:38:31]  can, we can, we can run these again if we want to. Like we're in slow 3G. Like, let's, let's just run these again just
[00:38:37]  to be sure because, you know. This takes a second or like 15 seconds. We'll see a second. Okay, there we go. And let's run this
[00:39:03]  one again. Slow 3G. You can see the streaming, right? Like this loading state loaded sooner. Right? Okay, cool. Now we're done. But
[00:39:25]  again, 201. Oh, this was for 15. Maybe this is a bad run for Remix. It should be the, it should be the same. I don
[00:39:41] 't feel like we're running it again. But my point is that when I went to one of those like sites, like the same site that Taylor linked and grabbed a 3
[00:39:54] G connection in Mumbai, India, and said, let's, let's run this here instead and see what the difference is. What the difference is. And honestly,
[00:40:03]  if you look at these, these, what did I do? What did I do? I went to film strip view. If you look at these plots here, what you
[00:40:11] 're going to see. Can I, can I scroll sideways? Maybe, maybe I do need to go to this film strip view. It takes basically 2.5 seconds
[00:40:23]  to get to the loading. So it takes a long time. And then you see the final thing at three seconds. But our first bite is at 1.634 seconds
[00:40:33] . On the Remix one, first is at 2.387 seconds. So the first bite is pushed back. And this isn't a big data request. This
[00:40:39]  is not like that demo I had where we load like 1,400 comments. This is just like 30 comments, the 30 stories on the front page. The total time ends
[00:40:47]  up being like basically the same here. Like, like for rendering, it's like three second mark. Right? So it's not like a big deal. Solid shows the
[00:40:56] , or streaming shows like the loading placeholder for about half a second before that. So like the page loads, like maybe that's not the best experience. If it
[00:41:03]  was a longer data load, like with more data, that would be more impactful. But, and the final time is about the same for visual, not necessarily timed interactive.
[00:41:12]  But, but the thing is you can see streaming actually has a benefit. And look at this, look, look at the waterfall diagram here. I want to show you something
[00:41:23] . Even under the slow network, we can see this, the same, here's the HTML coming in and the assets starting to get low. While the HTML is coming
[00:41:32]  in, which lets us get our work started sooner. And in the remix example, we see, here's us waiting for the HTML page to finish before we load anything.
[00:41:44]  And which obviously pushed back hydration, which this does not measure here. This is not, this is not showing us hydration costs. Cause you see it finishes visual here.
[00:41:55]  Hydration is still going out of the four second mark beyond what we're looking at. And it's, it's still true here in solid solid too. But it just
[00:42:05] , it's just interesting to me that, that essentially you in, in Chrome, you don't actually get to see the benefits of, of the streaming in the dev tools
[00:42:17] . When you have a slow network, when you're doing the artificial slow down, but you can, when you test it in an actual environment. Yeah. Yeah
[00:42:25] . So. Sure. Probably. And we're all of this stuff from Cloudflare. So it probably isn't as big of a deal, but I did want to
[00:42:37]  mention, like it is a 3G. So it is a slower network and as I said, I, we can make worse, more aggressive demos, which show streaming
[00:42:50]  performing even better. I just wanted to show that the dev tools. Are actually misleading. And I'm sure that's what everyone does, right? You, you make an
[00:42:57]  example, you test it and then you go in the dev tools and you simulate slow down. And that's not the full story. So time to first bite is faster
[00:43:05]  with streaming. Makes sense. It's just the dev tools hide that fact. So. Yeah. I mean, there's a lot of things that you can't simulate properly
[00:43:18] . So I think I, I, that was, I know this is kind of a tangent on, on this sort of chart thing, but yeah, this needs some re
[00:43:27] working, but at least. Um, there is more benefit to streaming than the Chrome dev tools would witness, which means that I think the, I think I, I
[00:43:38]  do think that, um, this, the, the whole thing about streaming here isn't actually correct. So just wanted to kind of throw that out there. So anyone who
[00:43:49] 's like playing around with streaming and like playing them down with network slowdowns, that's not the best way to, to kind of test it. Um, what
[00:43:56]  else was fun this week? There's, there's a couple more things. Okay. Yeah. We're not quite there yet. This article from Igor minor, uh,
[00:44:10]  for you guys who don't know, Igor, um, was one of the lead devs on angular for like over a decade. And he left angular last year to
[00:44:23]  join cloud flare, um, to work on like the future of web, essentially. He's working on the workers pages team or sorry workers. And like, basically he's
[00:44:33] , he's there to kind of build a new, better experience around cloud flare. And, um, this is a really powerful post. He talks about the history of
[00:44:43]  web dev from his perspective, which is great. He goes through like over a decade and worth of history going through like each stage and shortcoming and how the next thing replaced
[00:44:55]  the, the previous. Um, what I thought was really cool was that, um, let me see if I can find it here was that, um, he told
[00:45:06]  this really personal story, um, which was really quite moving about experiences. And then when we got to, to here, he talks about generation zero, which is what
[00:45:14]  he calls like the pre Ajax age. And then generation one, which is like angular one and then generation two, which is where we are right now. Solid gets shout
[00:45:22]  out, you know, which is sweet. Um, but then, you know, he's talking about the, the problem with single page apps and fate sharing, and
[00:45:30]  there's a whole bunch of stuff here. And in, in, in basically though, what he's signaling is about the return to server and more specifically the return to the
[00:45:40]  edge. And, um, he gives a little bit of thoughts on what he considers, what a generation three looks like. He's, he talks a bit about quick
[00:45:49]  and he talks about what remix and islands. And he even gives Marco a shout out, which, and whiz, which was Google's like internal progressive thing. But basically
[00:45:58]  suggests that, you know, a lot of the same stuff we've been talking about on stream, talking about JavaScript first architectures, um, talking about, you know,
[00:46:09]  making infrastructure accessible on the edge. Um, you know, portability of compute, um, monolithic versus distributed. Um, and, and he talks about streaming.
[00:46:20]  So I, I thought this was a really, um, really interesting detailed, um, article. And I think everyone should, if they get a chance to check it out
[00:46:29] . Um, and I mean, he, he, he, he wasn't done like, honestly, um, sorry. Taylor's followup article has this whole thing show
[00:46:38] , you know, I'm gonna, I'm gonna, we'll, we'll go over that in two seconds. But, uh, Igor also wrote another one about
[00:46:44]  micro front ends, which I love just as much. Check it out. We've been facing this a lot. Uh, recently a lot of conversations about micro front ends and
[00:46:53]  like module federation. He's dead on here. Micro front ends leave a lot to be wanting. I'm really interested to see what Igor's, um, and
[00:47:00]  team built over a cloud flare. It sounds like they're working on some sort of new micro front end thing, or at least thinking about it. Cause clearly this article is
[00:47:09]  suggesting as much. So I'm, I'm, I'm pretty excited to see where that goes. One more thing on streaming before I move on. Taylor pulled out
[00:47:18]  this article and I, I don't pull out this image. And this is exactly what we showed. Um, just a minute ago and see how the time to first bite
[00:47:29]  and where it sits. Like, I think there's a good visualization of what I was trying to show with the dev tools there. Um, so I, I think
[00:47:36] , yeah, I, this is just, this is pretty typical of like, it's not just remix, but next. And basically self kid, basically all the JavaScript frameworks
[00:47:46]  we have today that don't do streaming. The timeline is considerably different. And I, I said, I've shown this like a dozen times on stream, but I just
[00:47:54] , it's cool that there's like, they have a graphic for this now. Yeah. Um, that one, the new types in JavaScript was the week before I
[00:48:07]  talked about it a little bit the previous week. Hmm. Sure. Theo, um, we can give a slot for that. I, I might've actually missed the,
[00:48:18]  the new ping giveaway. Um, yeah, maybe I can find this right now. What's, what's the, what's, what's the, what's the
[00:48:34] , what's the ping giveaway? The ping video. If I got it. What's the ping giveaway? Here you go. Free advertisement. Giveaway. Level up your
[00:48:49]  streaming giveaway. I want free stuff. We're giving away. I don't even know what that is. Wave three and face cam. See, this is, this is
[00:48:55]  cool streamer technology that I'm not aware of. Um, with six free months of ping pro. Follow the instructions below for a chance to win. There you go
[00:49:05] . Right here. This is all you need to do. Better camera. Mike. Six months. You're set. Yeah. I, I, I, I,
[00:49:18]  I, I, my completely, uh, budget setup could definitely benefit from this. Uh, okay. So yeah, we'll, we'll, we'll, we
[00:49:35] 'll do that later. Um, but yeah, definitely cool. Um, okay. That's most of this week in JavaScript, which we're at 15 minutes, but there
[00:49:46] 's one more topic that's related to this week in JavaScript, but I'm going to give it its own banner because I think it's important. Um, JSX
[00:49:53] , I want to talk about JSX. Um, it, the reason I'm taking care of this one up front here is because this is not the main topic, what
[00:50:01]  our stream is tonight. Cause I'm actually talking more about the compilation that happens for like on the code side, like the Svelte mentality. I'm not talking
[00:50:11]  about template. We've been compiling templates since forever, you know, not forever, but for a long time, we've had template DSLs, whether they're
[00:50:17]  runtime, just in time, compilation, pre-compilation, renewing this forever. But there's, there was this, uh, tweet, you know, after the
[00:50:26]  types conversation, and we talked about this last week, there's this tweet that was like JSX should be part of JavaScript. And I'm not going to lie. I
[00:50:34] , I was just like, oh yeah. Okay. Yeah. Sweet. And I ignored it. I mean, I mentioned on stream, but I was just like,
[00:50:43]  yeah, whatever. And the reason I was just like, whatever is because we kind of seen this before. I don't know if you like not JSX, but as
[00:50:54]  anyone familiar with MDV model driven views, this was a proposal from Google. Uh, look, what was this last worked on nine years ago? Here you go. And
[00:51:03]  they thought, okay, well let's bring some templating things. Now that we have templates elements in the, in, in, in here, we can add,
[00:51:10]  you know, repeats and we can do control flows and interpolation. If this looks familiar to you, this is basically Polymer, but you know, this is nine years
[00:51:19]  ago. Well, that's two, yeah, I guess it's around the dawn of Polymer. They were thinking that they would just bring the syntax to the browser
[00:51:26]  and Polymer was the kind of, kind of like, you know, the web component driven thing. And even if, you know, you, you don't care
[00:51:36]  that much about MDV. Well, it didn't die there in 2017, Apple came up with template, HTML template instantiation. And I remember seeing this one and being
[00:51:49]  like, okay. Um, and this one, it was also mustache syntax, but this time now it started kind of looking like lit HTML. Um, you know,
[00:52:00]  you basically could tell template and then you could feed it updated data. Like it's, it's like, you know, you have your syntax and then you can pass the
[00:52:11]  data through and call an update and template. Yeah, I think this became the template part thing. Like I'm, I'm, I'm a little hazy on
[00:52:18]  the details, but every time I saw this, I was just like, oh man, people really want their framework in the browser. Like, like maybe that that's the
[00:52:26]  solution. Let's just bring the JavaScript framework. And I think first it was like Polymer and then lit like which Google framework next. I mean, to be fair,
[00:52:34]  I mean, this is a complete joke here, but this tweet I saw just before I joined stream. Browsers should ship with the top one gigabyte of N
[00:52:41] PM built in with the option to download the rest on demand. In my head, I was like, oh, so react should shift in every browser. I'm not,
[00:52:48]  I'm not, I know that's not necessarily what they're saying here, but when, you know, Seb, uh, visionary for reacts is this. I'm
[00:52:55]  start thinking in my head, I'm like, yes, this is, this, this is, this is another way to get your framework in the browser. Then we don
[00:53:01] 't have to worry about the size of react. It's already there for everyone. Um, there's, there's obviously problems with this. I love this reply by Mark
[00:53:09]  Erickson. It's sad that I think this is a great idea and also immediately came up with at least three reasons why this won't work. And, but
[00:53:16]  I think, I think it's a, it's, it's funny. This isn't exactly the JSX conversation, but this is, this is where my feelings went
[00:53:25]  to right away when I saw this. Yeah. Yeah. Yeah. Yes. Yeah. I mean, there's, there's lots of concerns here. I'm just
[00:53:43]  reading through all the comments. I'll give them a second here on screen so you can see them. there you go. That's, that's one. So,
[00:54:12]  yeah, I mean, okay, this, that's, this is unfair, but this is where my head went to right away. But it's more, it's,
[00:54:20]  it's more interesting and nuanced than this because scroll up a bit and you're like, oh, I'm going to go ahead. I'm going to go ahead.
[00:54:28]  Yeah. Yeah. I'm going to go ahead. Yeah. I'm going to go ahead. I'm going to go ahead. I'm going to go ahead. I
[00:54:35] 'm going to go ahead. I'm going to go ahead. I'm going to go ahead. I'm going to go ahead. Yeah. look at what she's
[00:54:41]  she's doing here she's she's trying to figure out how we can bring mobile type gestures into the web because mobile web just sucks everyone knows it's like this awkward step
[00:54:49] child and and she's she came up with this whole kind of idea of how we could use kind of like css to guide um updates to the um like gesture types updates
[00:55:00]  the dom but she there's this shared state area and a way of interacting with it and she figured that something like jsx would basically be the bridge that she needs to
[00:55:12]  accomplish this really interesting stuff check out the thread but like and then and then you see stuff like this like these are not people just kind of going you know i want my framework
[00:55:25]  in in the in the browser and they're not people just like you know lamenting that they have to download react on their page or whatever yeah these are these are influential people
[00:55:36]  who are talking about this and i mean this is interesting it's it's it's it's a funny topic because personally i have i have some thoughts here and i need
[00:55:55]  to kind of think about what the implications are and why a bit further on why these kind of justifications are happening here but but there there is there is a reason i
[00:56:12]  like jsx and that reason i like jsx i fear would completely evaporate if we added it to javascript i don't know how many people have ever looked
[00:56:26]  at the jsx spec facebook has this page oh it's been updated oh they updated it that's crazy because it's not a problem because jsx came in and basically
[00:56:48]  said the we have a syntax with no semantic like without having any kind of execution um thing they changed it like literally the the home page the first line was like was essentially
[00:57:07]  like we have no opinion on how you use jsx just like here's the syntax and they talk about why they don't use template literals but there is a reason this
[00:57:20]  is interesting they completely updated this which is thing because a while ago um let me find it i think it was like my first article in dev2 i was running on medium
[00:57:33]  before that but let me scroll really far back to the beginning of beginning of time here no no my first article my first article in dev2 was was me complaining about types
[00:57:44] cript never mind jsx is not hyper script here we go i i had like big discussions with people but if from this from the jsx specification here which used to be different
[00:58:07]  the first line used to read jsx is an xml like syntax extension to ecma script without any defined semantics that is jsx they're changing the messaging slightly
[00:58:15]  maybe they're preparing for this potential change um this funny tag is neither string nor hfl it's called jsx and syntax extension to javascript basically it is not a
[00:58:27]  runtime it is not a language it is not a virtual dom it is literally just a syntax it's like people conflate it with hyperscript like they like and if
[00:58:40]  you like and if you don't know what i mean by hyperscript hyperscript is i mean hyperscript is come on why can't i just find like really
[00:58:57]  where's the github for hyperscript yeah here we go hyperscript is basically this which is a function which takes three parameters or more depends you can how
[00:59:07]  they handle those children but essentially you can define what the tag is you can define what the props are and you can do children and react create element or whatever vdom uses you
[00:59:19]  they don't they tend to use hyperscript but here's the thing jsx does not need to compile the hyperscript in fact solid does not compile to hypers
[00:59:28] cript inferno does not compile the hyperscript hyperscript what do those two libraries have in common well they're from a pure rendering standpoint they're actually quite different
[00:59:40]  one's a vdom that's super perform and one's sorry one's a vdom and one's a reactive fine-grained reactive system so it's not the underlying
[00:59:47]  technology is the same what they have in common is that both those libraries are incredibly performant and the reason they're performant is because they look at the jsx and do
[00:59:58]  smart things and don't compile the hyperscript hyperscript is not very optimizable yeah i i don't quick quick does some interesting stuff but they might actually keep
[01:00:11]  the the rent the view um actually like a hyperscript variant for the vdom but i they do break stuff apart more granularly so like some stuff like event handlers
[01:00:22]  also have to be handled differently but like i mean i don't really want to get into solids jsx compilation it doesn't really matter here like the fact that i i
[01:00:35]  make it into a string that i clone and all that stuff but like at a fundamentals level the the key thing to understand here when talking about solid jsx compilation is that um
[01:00:48]  let's add something here uh let's add something to the counter like something equals something made up okay d dot d see how i compile the the this into a getter
[01:01:08]  basically this create component almost looks like hyperscript function to be fair but the i if you if you even ignore all the dom specific stuff like solid has a universal render
[01:01:18]  that works on any platform um like for mobile terminal or whatever like it has a custom renderer we don't have the dom specific stuff but at a baseline for fine-gra
[01:01:26] ined reactivity to work you actually care about what's in the holes like what's what's in here watch something we analyze the parts that are the dynamic parts and if
[01:01:44]  you look at something view view analyzes the dynamic parts that's one of their secrets and essentially when you start kind of breaking templates into this quarter dynamic static mentality um it's
[01:01:59]  the holes of the dynamic parts that matter i was talking to dom you know critter of infernos and he was he he sells all and he understands like fine-gra
[01:02:08] ined reactivity and vdom aren't the same but for him he's like yeah it's the same thing like he because he's like it's like it's just where
[01:02:14]  the memorization is happening and for me a v like for him a vdom is just the holes he doesn't care about the static part like and that's an interesting mindset
[01:02:23]  because when people think of vdom they look and they go hyperscript it's that tree but for him it's what's not the static tree and we looked at
[01:02:34]  a conversation a week ago on stream where seb was talking about introspecting children should be deprecated and react kind of treats it like that in their thinking because you know
[01:02:47]  it it gets in the way of potential optimization i mean there are holes in jsx in a sense in terms of ability to optimize but the reason you can do all this
[01:02:58]  stuff you know and get to this level optimization as i said i'm sure you would be doing it if they weren't relying on the templates they have jsx and they can
[01:03:04]  go like it's kind of like second class compared to like their their string templates but essentially it's inevitable to me that you will want to analyze the template beyond what hypers
[01:03:18] cript does for any library that cares about performance and the reason i chose jsx was because it's incredibly portable right everyone everyone if like people haven't seen seen this you
[01:03:28]  know i i i love the fact that i can just be like h1 you know whatever hello and just be like let's stick this in the let's stick this in the
[01:03:41]  button you know like who i broke this because of d doesn't exist but you you know what i mean like like there we go like i just put a div like i
[01:03:51]  love this element of jsx that i just like threw an h1 in the button because i can you know like but i mean help like i i i mean yeah i don
[01:04:01] 't want to get too crazy on this example but my my my perspective my point is it's because it doesn't have runtime semantics that it's so powerful it's like
[01:04:14]  a pre-existing ast it's like a pre-existing state that you can analyze that can do incredible things for you and every tool supports it and that's the difference
[01:04:29]  like tag template literals can do a lot of the same things but they're expected to actually execute in the browser once you make these actually expect to execute in the browser
[01:04:39]  then there's just certain things you can't do um so i want to see about some of these comments yeah what i'm saying is that output is basically useless for us and
[01:04:56]  salt that's me being selfish but it's it's basically useless because i need to analyze the dynamic parts which at the time it makes the tree is already too late solids
[01:05:07]  hyperscript requires us to actually wrap things in functions ourselves like at the basis the reason we have a jsx compilation is because of those lazy getters that's the
[01:05:22]  power yeah like even if solid has these abilities the reason jsx is so special for us is because like i could make our html tag template literals work like the
[01:05:40]  jsx and not need all that stuff but then it would never run in the browser that's that's that's essentially what the conflict is it seems like this right but
[01:05:55]  like i said there's more complexity when you have to consider things like reactivity i'm and this is part of me coming from that zone i've never had good luck with
[01:06:02]  framework agnostic solutions before astro i know that's like such a big boost to those guys but it's because astro doesn't get in get in the way
[01:06:10]  of like solid's domain but web components and like just like every like every like oh we support everything has never worked for solid which you'd be like oh maybe solid's just
[01:06:21]  doing things wrong but sometimes doing things wrong is the way to do things right um like so like reactivity makes this like especially fine grain makes this just not align and again this
[01:06:36]  maybe just me being kind of selfish here but i really like jsx for what it is the second they add it to the browser and actually has a runtime potential it's
[01:06:45]  going to cause a ton of confusion like we won't be able to use it anymore like but the like last thing i wanted to do initially was write our own language which again
[01:06:53]  is a topic for today and why i wanted to talk about this up front jsx is uh is a is really powerful as it is because you can do whatever you want
[01:07:03]  with it and all the tools support it yes i maybe we'll see they they changed the compilation on us in react 17 right we'll see i don't know like infer
[01:07:26] no did this isn't like a fine-grained only thing like you can get a lot of information by looking at it the problem do you see the problem with hyp
[01:07:35] erscript is i mean it's fine this just generates objects but your sort could be an object but these are functions and look at the way they execute if you have a function
[01:07:44]  and a function a function does anyone know what the first function that gets called in this in this blob is like you all are looking at this with me right now actually i'll
[01:07:52]  go back about what's the first function get that gets called here i mean other than the require obviously the requires the first one who gets called but what is the first function
[01:08:00]  so not that gets yeah what's the first function that gets called here i believe the answer to that question and i could have like the the spacing wrong but my guess the first
[01:08:11]  the answer to that question is this function it's not this function up here it's not the first debate it's this function your stuff basically executes inside out and it
[01:08:24] 's all piecewise there's no way to go i structurally know what the thing works looks like until you actually build the whole thing up that's why solid uses a lot
[01:08:34]  of lazy evaluation getters we actually reverse the flow essentially we we actually build it downwards as we need it yeah like is it this one like i i can't tell from the
[01:08:49]  spacing here i could be wrong like maybe this is nested but i think it's it's one of these children essentially right so like and i've seen some clever solutions
[01:09:04]  where you actually like build the use the hyperscript to build the information about the tree and then like do something afterwards with it but like yeah i mean as i said this
[01:09:15]  is probably just me being selfish and there's some really powerful things that you can do with this but it just means that like if this if people expect jsx to be
[01:09:24]  executable in the browser we're probably going to need to find a new a new language because um this will never work for us in a nice way okay so yeah i
[01:09:43]  mean i'd love to see a jsx too and i'd love to see more work going in jsx hasn't been touched for ages i know some people hate it you
[01:09:50]  know for all those people who hate it you guys should just go use marco marco marco has the best templating syntax anyone has ever invented so you know sorry
[01:09:58]  i'm just i'm just playing with a bit but like the the whole subject matter here is is kind of is kind of a funny one right and this is actually sort of
[01:10:12]  the preface that i wanted to have before we actually got into this discussion and showing the stuff today because i i mean it is important um to kind of understand you know
[01:10:29]  how syntax affects us like you saw the hyperscript i don't know if you you all loved it but there are some people i saw a funny comment on twitter where
[01:10:41]  someone's like what's your favorite javascript framework and why is it mithril and some i forget someone's like oh you know oh you you spelt solid js
[01:10:50]  wrong or something you know the chatter on twitter's but you know someone's like jsx but as everyone who's used mithril it's like all hyperscript um
[01:11:03]  like people have really strong opinions about this stuff and then you talk to someone from spelt crowd they'll tell you well spelt's just javascript html
[01:11:12]  and css i don't even know if it's worth trying to pop like to pop their bubble i mean it's that's about as far from the truth as possible like
[01:11:29]  but i mean that that's that's the thing people see have familiarity they see it and like that is essentially like it makes this thing like i've shown people marco
[01:11:42]  and they're just like hell no but like from like as i said that my whole thing is like from like a mechanical standpoint marco six's language is the tercest
[01:11:52]  most to purpose and like i i can come up with a billion examples where it's like quantifiably the best but you know in terms of its capability and mechanics but
[01:12:07]  obviously it's it's enough of a turn off for people to look at that they'll never give us a second look so you know it's just it's a funny
[01:12:20]  range because when someone says you know for example that a templating language is is html you know just html i think to myself and i go well i mean
[01:12:34]  knockout was i guess just html it used attributes for data binding is using handlebars like ember does or spelt make something more or less html
[01:12:44]  i i don't know right when when you see that stupid stupid meme with the with the the guy you know in this felt like let count equals zero and it's missing
[01:12:55]  the script tag like is is that more or less javascript or html i i i don't know the funny thing is when i when i told someone that that
[01:13:07]  that script tag missing bug me they're like well you know it's it's a script tag you know that's where your javascript goes in and people can just custom
[01:13:13]  that but i'm like but that whole file is javascript nothing in that it doesn't emerge as html the whole svelte file is compiled to j
[01:13:23] avascript like and that javascript looks nothing like what you wrote so what is just what is just javascript or html it's like what it's like
[01:13:35]  what it's what you feel right like it's it's this is one of those areas that for me is very hard to pinpoint and probably why i haven't spent as
[01:13:49]  much time focusing here because it feels like almost like a waste of time because i i for me it just doesn't feel logical like people get this kind of like feverish almost
[01:14:04]  like yes this is the way feel because it feels nice to use or something and there's that ergonomic part and i'm just like sure okay then that works for you that
[01:14:12] 's great but it's like there isn't an empirical best and i'm just like that's the best in many cases and where there is that isn't the defining like
[01:14:21]  quality that actually makes it good people are still talking about uh jsx in the background i love it yes yeah and that's the thing these are all just dsls
[01:14:43]  right like everybody has a control flow whether it's a vif or handlebars each or something dot map or for as a tag like these are they're all incredibly so
[01:14:59]  it's similar like jsx for example what's the difference between jsx and html well jsx is xml based instead of uh html based so void
[01:15:10]  elements are are something that comes to mind right in in in jsx everything has to be closed with a slash um closed like essentially there's no void elements and that's an
[01:15:21]  xml thing um like yeah yeah yeah yeah i was gonna say knockout is another example alpine is very similar to knockout where it was just literally the data bind
[01:15:36] ings or attributes and you actually parse the actual html when you enter the dog incredibly slow and not perform way to do things but that is real html right
[01:15:46]  yes don't get in the way and that's the thing here right the funniest thing is how do you best not get in the way like it's it's it's interesting
[01:16:01]  because some people go if you if you have an opinion solution do really good with your abstractions then you give people a happy path and then they can just go do what
[01:16:13]  they want right like they can they can uh not so not do what they want they can just follow this path and not get in the weeds is a better way of putting it
[01:16:26]  like essentially you've constrained them you've limited their options but you know through constraint they're free essentially because they don't have to worry about a whole bunch of stuff and that
[01:16:36] 's a certain perspective on how you can approach this language thing and the other kind of perspective i had was if i make the smallest most base primitives then maybe i just
[01:16:51]  don't have to worry about this i don't like don't need to get into this battle if people want to build stuff you know and do this stuff good on them great
[01:17:06]  you know if i make my stuff as explicit clear and simple not easy simple as possible then they'll have all the tools they need to do whatever they want the funniest
[01:17:19]  thing about the syntax pieces i don't think it comes from necessarily real like sometimes there are real needs for syntax as we've seen with quick and marco the syntax has a
[01:17:40]  very important role to play in terms of optimization and performance um but you know ergonomics is something that um matters to a lot of people and for me the most ergonomic
[01:17:55]  thing i can have is the thing that has it's not about what i'm typing it's about how clear it is like how how it flows what sense of power control
[01:18:08]  it gives me but maybe i'm just a control freak you know maybe that's that's my curse here yeah and i mean at an extreme that's right that's why
[01:18:19]  uh you know jsx is even just an add-on in a sense so yeah let's let's let's go let's get going this has been the longest this week
[01:18:28]  in javascript uh you know essentially let's just start talking syntax i already started the conversation but let's let let's kind of get into the actual thing i have some
[01:18:39]  i have some great projects to show you today i you know and i think i think this will kind of kind of we can kind of talk about um you know the implications
[01:18:50]  of these things even when talking purely from a syntax standpoint so as everyone knows i just built these primitives up and that was really my goal but early on in doing so
[01:19:14]  i came across someone reached out to me and they're like hey ryan i i we we built our whole ide off of solid and this was the first time that i'd
[01:19:26]  seen something like this done with solid later on i would go on to joke that there is more compilers for syntax and solid than there are component libraries but the first thing
[01:19:38]  that i ever saw was this glue codes which is an online ide that basically lets you write i mean let's see if there's an example of the code here it's basically
[01:19:50]  html with some like special attributes and stuff and pre-built components to kind of build the stuff you need and it actually compiles it to solids jsx and solids
[01:20:00]  primitives to work but essentially the the developer experience is nothing like solid they obscure this all the way to make it easier and you know plug and playable and cut and paste
[01:20:12]  and you know make this easy ide experience but this was the first thing that i saw and yeah i mean this is a paid product built on top of solid and they chose
[01:20:22]  solid because of solid's performance but this this this was this was like the start of it for me because i was like wow you know i'm opinionated and i have all
[01:20:30]  the things and ideas i want these guys just went completely out of left field and sought huge gains by switching to solid to do whatever syntax they wanted but after that um
[01:20:47]  we kind of got into uh sorry i'm done with these um done done with these we got into um you know more of a discussion people start comparing us to svelte
[01:21:03]  and you know people just started kind of going off on on like oh how could they design different syntaxes and those people are the same people that critics in the libraries i
[01:21:21] 'm going to show off today but it was funny because it in it infiltrated every single channel in our discord like they'd be discussing it in an off topic and then they
[01:21:31] 'd be in tooling and then they'd be in help and every channel was just people discussing about this syntax and i was just like man we have other things going on can
[01:21:39]  we keep it so i actually made a channel just for the discussion and i didn't even stay in the channel it just kept on going everywhere as i said people are very passionate
[01:21:46]  about this topic um so what did i do well i wrote an article on the subject and it's kind of funny because if anyone knows me and my kind of position on this
[01:21:59]  stuff i actually wrote the article just so that people would like have a direction and classification and then they maybe just we could focus the conversation because i was kind of sick of
[01:22:08]  hearing about people arguing back and forth and this was the quest for reactive script uh article and i kind of go through the history and the different approaches to compiled um javascript
[01:22:22]  and that's what we're going to look at today because um the one thing is regardless of the framework like whether it's svelte or view or whatever um there
[01:22:33] 's only so much you can do with the javascript language in terms of reactivity as it is and similarly there's only really so much you can do with compil
[01:22:42] ers in my in my mind there's only a few base patterns that you can kind of fall into and they each have their trade-offs um and essentially i lined up
[01:22:52]  in this article four different things but for me this all started with literally i love this article if you've never read this article go read find this article i'm going to post
[01:23:02]  this in the chat right now just because of how awesome this article is here here you guys go seriously this is um this was written in 2010 way before you know it's
[01:23:15]  it's time um and he was joking that like in 30 years or sort of 40 years everyone would just like take for granted that we had reactivity built into into the language
[01:23:28]  and his his whole thing was it was something called the destiny operator this idea that you could just have variables and then when there was the destiny operator it worked differently than a
[01:23:36]  normal assignment in that it was a reactive expression that maintained over time so no matter when a changed b would be updated and to this day i feel like this is still the hall
[01:23:49] mark for when people look at using reactivity as language in javascript they're like okay can we make the destiny operator um and there there's there's there's
[01:24:05]  some issues with this in that and it's the issue that we find when actually in all bringing reactive language into uh javascript essentially reactivity is this declarative thing like
[01:24:21]  essentially you set this relationship and the behavior holds it's just like b is is destined to be a plus one like it never has to change never has to be updated never
[01:24:34]  has to be reassigned and this is it's very declarative and if you've noticed the the gap or the bridge between declarative and empirical code is always a messy one
[01:24:46]  and that's where like all the challenges come in like html is very declarative but then once you get into event handlers or you know that's when you enter
[01:24:56]  this imperative zone and things like rxjs try and like bridge the gap right from the get-go but they get very verbose um so like living and working through
[01:25:06]  this is always actually kind of a bit of a challenge um and the first thing you know that people kind of come to is you look at svelte right because svel
[01:25:19] te um actually kind of brought into the language and this is i had this bookmarked the other the other week let's let's talk about this tweet again this was
[01:25:30]  this was when was this tweeted october 30th this is literally like three days or whatever after the hooks announcement and rich harris suddenly goes wait a second i don't
[01:25:42]  need hooks i just need a compiler if you look this isn't valid svelte code anyone who knows svelte because this this wouldn't update like this this is sort
[01:25:55]  of where the challenge is because this looks like javascript right but if you wrote all javascript to be reactive like this like how do you represent things that like what
[01:26:05] 's the difference between something that's assigned and something that is um like a computation like sometimes you might and like if you're familiar with sol you know what i mean if
[01:26:20]  you have a signal sometimes you'll initialize a signal to um a reactive value that's transformed but you don't want it to react like sometimes signals need to mutate themselves
[01:26:32]  and computations need to be update based on tracking sometimes you track sometimes you don't track and having a let here is insufficient to do this right so there there's there
[01:26:43] 's basically a need for a different type of operator here right and if you use fault you know what they did is they added a dollar sign uh label on the front to to
[01:26:54]  denote this but it's a little bit more complicated than this because what if your reactivity is in more than a single file and you can see this and the funniest thing
[01:27:14]  is the first comment let me see here am i in here right where is it maybe i'm not going to find it now that i'm actually looking for it basically when when
[01:27:25]  rich posted this evan you almost immediately was like was like that's all great but how do you do composition that's like literally the first thing evan did when he
[01:27:35]  saw it he was just like how do you do composition with this yeah this would yeah here we go that would make it technically spell script which is kind of like the theme of
[01:27:43]  our stream how do you handle effects and composition in this case very first thing evan evans evans on on the ball here right because the answer is svelte
[01:27:54]  actually never solved this in svelte 3. they added stores but they actually never solved composition from a compiler standpoint um and that this is a good starting point for us in
[01:28:04]  our journey to look at it but one thing that you will notice is there's while someone could take svelte and compile it to solid you'll see stuff today that
[01:28:14]  is actually similarish to svelte syntax like someone could have easily just made svelte to solid like no problem none of the people who made these libraries decide to do
[01:28:23]  that and you're like well why wouldn't you want that for interrupt well it's because not a single person who'd use solid was willing to give up to give up like
[01:28:29]  they weren't willing to give up composition like for them that was a non-starter and um that's it's interesting because this is svelte made that decision and
[01:28:40]  it seems to work well for them but like like this persisting composition makes this actually very difficult um to do um with just this kind of syntax because when you use these ident
[01:28:54] ifiers they're keywords kind of like if statement in um in javascript or for loop you as an end user can't write your own for loop right like you can
[01:29:13]  write your own for each like you know like like a map function you can write your own map function but you can't write your own for loop right so the the language
[01:29:24]  primitive isn't extensible and hooks by the very nature and reactive variables are extensible so this is a very using a language primitive to define that's whether something is reactive like
[01:29:38]  like like as like a key word like that can have its limitations right and how do you how do you make it work across files is it like a variable declaration then it
[01:29:51] 's where the assignment happens locally that matters or is it a type is it the thing itself that's reactive so there's been a few thoughts on how to actually approach this
[01:30:15]  right because essentially i mentioned the the identifier thing here first and what was my example yeah so we're yeah i'm just using this example where we could decorate the variable itself
[01:30:41]  to say that's reactive we're going to see that today that's one way of doing it because then we know this is how kind of felt stores work it's this concept
[01:30:52]  that if we look at this as a compiler we go oh this is a reactive value now we don't have to call as a function but what was always interesting to me about
[01:31:00]  this approach is is this saving new characters over calling the function i guess it saves you from having to remember to call the function but essentially if we mark it now we know
[01:31:11]  that it's reactive i'll get to what view does in a minute so this this is the first solution you'll find which i call identifiers the second solution is what s
[01:31:27] velte does to a certain degree i mean i this signal could just be let but essentially the idea is this could be dollar sign my point is if you label it you
[01:31:37]  know this is salt right here then you can basically make a keyword so as i mentioned it makes it hard to make it portable because like how do you import something that's reactive
[01:31:47]  because like do you know what this is and the the third approach was which view ref sugar uses is this idea that you mark the function kind of like make it a hook
[01:32:01]  marco does this too in a sense because they make their hooks tags you know that well it's not like you it can be named whatever you want but because it has a
[01:32:12]  certain syntax around it you know that it's reactive for example like this is view ref sugar here because dollar sign ref is special the compiler looks for that and then it knows
[01:32:25]  how to handle this but it leads to this interesting like boxing and unboxing approach i had some other ideas and if we go through the stream i'll i'll talk about what
[01:32:42]  my where my thinking is on this but i just wanted to kind of introduce this as as sort of uh like um kind of top level approaches right there's there's there's
[01:32:54]  a lot we can do with a compiler and the very first thing that i want to show you is something that's probably gonna make a lot of uh react users really happy um
[01:33:03]  oran member of our community actually this is probably our most used um compiler trick but i what i did here and i was gonna show off this demo is i took a
[01:33:16]  a new solid start client only rendered template and installed i just kind of went in here and installed this plugin called undestructure plugin that will plug in undestructure okay so
[01:33:31]  let's let's actually just restart this because why not when dev and let's open this in a new browser window and of course it opens it in the wrong browser window
[01:33:40]  let me bring it over here this is the solid start thing but okay people haven't seen it so what it's just a counter that counts not a big deal but what this
[01:33:52]  plugin does if we look at our counter component in here is it lets the user destructure their props and basically reverses it into here and this is that's kind of
[01:34:12]  cool um i think if i open up this inspector again which is in the wrong window keeps on doing this to me what we'll see is just how it ends up doing it
[01:34:23]  so this counter tsx starts starts it starts its life i don't get to adjust the size of these it's a little bit awkward starts its life as this destructured
[01:34:36]  thing but then after it runs through babel it actually reverses it looks at these changes the props into props dot class props dot children and essentially re-embeds
[01:34:50]  the stuff in here so solid knows what to do with it and then solid transforms it into its jsx and then we're done so ta-da now we have destructured
[01:34:58]  props and as i said for everyone coming from react is probably big boon i was talking to tanner lindsey a lot this week and you could tell this was like
[01:35:09]  the thing one of the things that just bugged him he loved the dynamic dependencies he loved the the performance he loved the execution he loved all the pieces but like as i
[01:35:19]  mentioned sometimes this stuff is just so hard to get out of it's like why can't id structure well you can do this as a plugin uh with babel right there but
[01:35:28]  i mean it's it's it's interesting right because how does this know what to structure and undue structure well the plugin is actually looking at your typescript types so the
[01:35:39]  reason this one actually works is because there is a component type so it looks at the typescript and goes oh this is a component and then and did it there is a
[01:35:47]  a function you can import if you don't use typescript to do it but this is the the nice path essentially it looks at your typescript and it goes okay type component
[01:35:57]  no to destructure but now i'm not a hundred percent sure but i have a suspicion that i can break this pretty fast just let's see because the the whole way
[01:36:15]  this works is it has to know what you're intending to do hmm i'm in the wrong let me see if this thing not like hot reloading okay second i want
[01:36:33]  to see be wrong though this would be really cool if i'm wrong wouldn't that be awesome if i'm wrong let's see here some there's some little let's
[01:36:53]  see what this compiles to yeah no yeah precisely right yeah and then it doesn't know so it's it yeah i'm not wrong i don't know i i suspect
[01:37:23]  we had a weird bug with hot reloading i don't know why it's like still actually working no that's the kind of funniest thing is why is this example still
[01:37:33]  working uh click count count oh do you know why it's working because this doesn't do this probably or something like that no that's funny this is interesting because this this technically
[01:37:52]  should evaluate children which means that it's not under attract context which means it doesn't work but for some reason it's still working for me which i'm probably going to
[01:38:04]  have to figure out at some point that sucks when you're trying to make a point well yeah am i sure this example should break well probably right because the count is a
[01:38:22]  lazy getter this expression the children get the lazy getter here and then oh i wonder it's like oh i wonder it's because this is getting individually wrapped that's
[01:38:38]  funny like does this break it yeah that breaks it it's because of the fragment it's like nested reactivity so it still works it's it's it's basically
[01:38:54]  because once it became a fragment it's uh it's it's basically nested reactivity and for that reason um like it has its own reactive context now that works right so
[01:39:10]  essentially yeah smart uh solid granularity basically allowed it to still get wrapped in it like this children wasn't resolving it um it was individually wrapped but essentially this only works because
[01:39:26]  it's aware of what a component is using typescript or using some kind of annotation essentially other places that you access variables outside um are still not going to work for you
[01:39:38]  and you're going to need to do some other stuff so there is a question about like if you started using things like this you still have to be aware of the rules otherwise
[01:39:47]  you might like accidentally do something like oh well if children bigger than five return you know that's you know okay right like this is not not going to work because no like
[01:40:16]  essentially we're not actually changing the way solid executes the function once we're just hiding we're basically just reversing the props transformation so as i said i think this is
[01:40:32]  super powerful i think people will like it i bet you if this was the default for solid we would make a bunch of people super happy and they'd just be like yeah
[01:40:40]  maybe even forget react maybe if we just did this but i'm i'm hesitant on these kind of things because it causes a gap because it hides what's actually happening so you
[01:40:56]  think things like this would work and and they went so yeah this this this is where part of the tension is here when you're kind of coming at this from a design
[01:41:07]  standpoint in terms of what goes in i think this is cool and i think if you know what you're doing this is incredibly powerful a lot of the tools in view are like
[01:41:14]  that where they have shortcuts and things that make it much uh easier for people who know what they're doing um i do think that sometimes complicates things in view because you
[01:41:23] 're like oh there's like six ways i can do this um i know what i'm doing so i'll do it this way but for people coming in they're just like
[01:41:29]  okay is it that or that or that or that so i i think there's a balance to be made here but i this is definitely a really cool plugin and it's probably
[01:41:39]  the first and most important thing that we've done for syntax on compilation right exactly this will catch like 90 of the case except when they go to do something else because they
[01:41:52]  didn't learn how solid works it will not make any sense to them they'll just be like what is going on like this is this is one of those ones where like it
[01:42:04]  makes it really easy to just pick up solid and then just be but then like when you try and go okay well if everything acts used once why does this destructure props
[01:42:14]  work here and not here like it makes things less explainable um but as i said i bet you a number of these people watching this video in this chat are just like yeah
[01:42:25]  why am i not using this especially if you came in here and you're like big fan of react you're probably just like there we did we just solved it you know
[01:42:34]  but like how do you explain if this is the default behavior how do you explain this to someone why this works and other stuff doesn't work so far solid is very simple you
[01:42:44]  just go the jsx transforms nothing else transforms now we we're starting to transform your code if we transform your code why don't we just transform all your code exactly that
[01:43:00] 's what the thinking here is but i want to showcase this one off because this is this is probably when people come to sol this is probably their number one complaint there is an
[01:43:09]  easy solution for it but there's a reason why I haven't just built this right into the DOM expressions plugin. Here's the other challenge. I think this is good
[01:43:21]  for people to put in their app code. Like, they want to run it this way. But if you write your libraries this way, and you have to pre-comp
[01:43:30] ile them, or you have to pre-compile them, or everyone who uses them, so it needs to actually use your plugin. Like, if this was your
[01:43:49]  component library, and you used this plugin, and you wanted to be SSR safe, well, SSR, you need different outputs. Like, there might be a hyd
[01:44:00] ratable SSR output, a non-hydratable. There might be a, yeah, like, on the server, there's a client hydratable version
[01:44:10]  and the client render version. Like, there's different compiled outputs that are built for your specific app. There's a reason that Svelte ships source and Solid ships source
[01:44:17]  generally. But if you make it source, then your end users need to include the plugins, which kind of puts this burden on everyone. So if we, this is a
[01:44:25]  good thing to do for your apps, but it's not good for shared libraries, essentially, unless we made it official, but then it's a tax on everyone, right
[01:44:33] ? Unless it became part of the actual plugin. So I think this is something to keep in mind for all of these is there's a time and place for this kind
[01:44:40]  of stuff. But as I said, if this is your app that you're making, go for it, right? Because no one else is depending on that. So,
[01:44:50]  yeah, but this is a great thing. Yeah, but then you have to compile ahead into, there's some issues in compiling ahead. First of all, there
[01:44:59] 's probably, like, five outputs. Secondly, like, which people, like, which have to be selected from. Secondly, it gets tied to versions a lot worse.
[01:45:11]  Like, one of the coolest things about just shipping the source is that, like, it'll get the, as the people upgrade their apps, they'll get the latest
[01:45:18]  compiled output and they'll get the bug fixes, they'll get the improvements. So I think this is just generally beneficial to, like, to try and not compile ahead if
[01:45:31]  possible. But just kind of, I wanted to show this one off first because I think this is just, like, the primary starting point for people coming in and thinking
[01:45:42]  about compilation for syntax and solid. Yes, we can destructure props if that is very important to you. And if you use TypeScript, it's just, like,
[01:45:51]  it's just automatic and it just works. So pretty cool stuff. Huh, compile ahead only the plugin. There you go. There's your answer. Compile ahead only
[01:46:04]  the plugin. That's true. It's separate and it's, that's one of the benefits of making it separate, actually. If, if it was part of
[01:46:13]  the core library, I mean, I guess then it would be fine because everyone would be installing it anyway. So, yeah, there you go. There's, there's
[01:46:22]  your answer. In any case, I want to showcase that one off because that, that, I feel like that's probably the most, you know, straightforward thing.
[01:46:33]  But there, there's more we can do with this stuff. And yeah, I wanted to kind of show off a few of those libraries. So I, I made
[01:46:45]  a couple of examples in code sandbox. I kind of look at those. We've got solid labels and solid reactive bars, and I'm going to pull up their repos
[01:46:55]  here in a minute too, to kind of look at them. But yeah, I'm going to start with solid reactive bars. This is also by Oren, who
[01:47:04] 's in our chat here tonight. And he, he, he was showing off a, I'm sorry, we were just showing off this undestructured plugin. This one
[01:47:15]  is what I was talking about in the article as the, putting the identifier approach. And it's kind of cool example, because this example includes destructuring. And
[01:47:28]  essentially what it does is it uses this dollar sign as a means to identify variables that should be reactive. And then once they, once you use them, like it knows.
[01:47:41]  So in this example, we have a counter container, which defines some state count. It's kind of, you know, felt like in a sense, and then double count
[01:47:49] . And he, he's got this cool new syntax, which lets you set like a derivation and a setter transformation on both sides. Kind of like really good
[01:48:01]  for like two-way binding. And then we have an increment function, which has an expression, which updates these. And so this is like an event handler. And then
[01:48:14]  he spreads them into the counter, which he then destructures. And then shows them both. And this example just updates like this. So it's kind of a,
[01:48:27]  an interesting authoring experience in that basically, if you remove the dollar sign, I mean, it's going to take me probably easier if I just change all the things,
[01:48:41]  essentially things stop being reactive. It's essentially, this is a way for the compiler to know what it transforms to. And let's, I'm actually kind of interesting
[01:48:50]  what it does transform to. Let's see if we can pull this up here in Code Sandbox, because it's kind of interesting to see this. Interesting. Okay
[01:49:08] , cool, cool, cool, cool. So let me see if I can put this code side by side with, with the code that it's doing. Hopefully people can
[01:49:17]  see this. Essentially, this let gets turned into a create signal call with the value and then double count. Almost stays the same with this array syntax, but you notice
[01:49:36]  how to access and count. Yeah. One and zero, because this is the getter and this is the setter. So basically because your dollar sign is, is,
[01:49:46]  is basically the getter and setter tuple from create signal everywhere that it's access, the compiler is smart enough to go in and go, okay, double count
[01:49:55] , get the setter getter plus two. And then when it's passing everything around, it passes around both the getter and the setter. That's the,
[01:50:03]  that's the whole secret here. That's why there's no transformation here. And similarly, when you destructure, you can destructure because these are passing the getter
[01:50:11]  and the setter around. So basically this whole syntax, all it's doing is hiding the getter and setter and essentially everywhere you use it, it goes,
[01:50:21]  is this a read call function from zero or is this a write essentially grab the setter from one. Oh, this, the zero here at the, this is,
[01:50:37]  I don't know why it does this, but I've seen this a lot in like code sandbox and like, like web pack compilations, maybe someone smart in the
[01:50:47]  chat, I eat someone from the Marco team, maybe knows why it does this, but I've seen, I've seen this a lot because the comma syntax just means it
[01:50:57]  returns the second thing, but why does it bother doing the zero? I don't know. They're just answering this question. Yeah. Let's, let's,
[01:51:19]  let's open the react of ours repo here. Yeah. Showing some composition, get double. Let's get double in this example. Oh, I see. It
[01:51:34] 's a, it's like a custom hook. I see. So yeah, it's composable. Basically any, the compiler knows how to handle this dollar sign. So
[01:51:52]  as long as you make sure that you define your variables, that's like enter new scopes with dollar signs, reactivity is preserved essentially. So that's probably the
[01:52:01]  biggest benefit of this approach is that because it just passes the whole thing along, as long as you use the dollar signs, you know, that reactivity is going to get
[01:52:10]  preserved around locations. This is the, like the opposite problem. On the Svelte side, it's almost impossible to preserve reactivity. This makes preserving reactivity
[01:52:17]  very easy. And do, do, do, do, do, do, do, do, do, do, then spread. And yeah, I'm gathering this at
[01:52:26]  the example you were talking about, Oren. So yeah, I, this, let's go back to here. So yeah, so you can kind of see
[01:52:49]  how, how this, this, this approach is very portable and actually solves the, a lot of the problems. The, the catch is everywhere you have to do the
[01:53:08] , the dollar sign thing, which isn't that big of a cost to be fair. Um, other considerations obviously is you're always passing the getter and setters around
[01:53:19] , generally speaking. I think there's some ways to avoid that, but yeah, like everything is just implicit two-way binding. Um, unless, uh, there
[01:53:27] 's a syntax for that, but like the default is basically implicit two way binding everywhere. So you just pass the stuff around. Um, some people like that experience, um
[01:53:36] , and this is one way of accomplishing it. Um, it's right. So, but as I said, local scope, it's nice. I think, I
[01:53:44]  think, I think I'd be interested to know if there's ways to control, like passing the components, if, if you can pass only the read or write, um
[01:53:52] , privileges to be fair, this probably defines that to a certain degree. I think if I remember correctly, and I don't know if this is still the case,
[01:54:01]  if I make this like double dollar sign count. No, okay. That's not it. Um, there's a way to make stuff read only if I remember. Um
[01:54:14] , but yeah, what's cool about this is you only have to decorate everything coming into the variable scope. So, um, solves composition and transport. So, yeah
[01:54:28] , this is a cool one. Solid reactive bars. I'm going to, um, drop this one in the chat for anyone who cares. I got to remember to make
[01:54:36]  notes about this later. Yeah, here you go. Yeah, but yeah, uh, orange is here. Um, yeah, exactly. Because, because the way it
[01:55:01] 's written, it always handles destructuring because it's, it's literally just passing the whole getter setter pair. there's no like reactive access involved.
[01:55:26]  Right. Yeah. This is a, the comment here. Right. Cool. Um, let's look at another take. As I said, this is the first approach
[01:55:33]  that I was talking about using identifiers, essentially. Um, my example, I had a dollar sign at the end, but essentially this, this is often the, the
[01:55:46] , the, the first thing. And what I wrote here is the crux. So is it's the syntax doesn't simplify the mental model. You still need to
[01:55:53]  be aware exactly what is being passed around and what you're receiving. You, you're saving, typing some characters. Um, so yeah, I mean, this, this
[01:56:01] , this, this, this probably does the least on top of what solid does already. Um, but essentially does let you destructure, um, with a special syntax indicate
[01:56:13]  reactivity. Okay. So let's look at another one of these examples. let's look at, um, solid labels next. And what solid labels is, is
[01:56:23] , um, this is from another member of our community, Alexis, who's, uh, makes a lot of examples. Solid labels is kind of interesting to me because he
[01:56:32]  it's like, he couldn't decide which paradigm was the best. So he made them all, um, you can use annotations, like comments to save something to signal
[01:56:44] . You can use labels if you want, or you can basically use view ref sugar. Um, it, it supports all of these modes. Um, so what I
[01:56:56]  was, yeah, sort of wrong example again. Um, so what do we have to do for solid labels here? I think if we just get rid of this crate
[01:57:08]  signal and just go, there's a few different versions, but if we go dollar sign signal, this is like the ref sugar version. I, I kind of ended
[01:57:15]  up like that and we just make this account, so I haven't actually changed this, this example over yet because I wasn't sure which one I wanted to show off,
[01:57:24]  but I think we just do this and it still works. Yeah, so this is, this is basically the solid label experience, right? And if we wanted to make
[01:57:34]  an effect, um, let me look here. Is it always a label for the effect? How do we do it tile? He has docs for each one, which
[01:57:48]  is awesome. Memo. Dollar sign. Here you go. You just wrap it in a dollar sign for the function version. So you just go, uh, wrong
[01:58:00]  one again. Sorry. Keep on going there. Um, if we want to make an effect, we can just go console log count. And if we open up our console
[01:58:14] , hopefully we clear it and click, we'll see our console. Interesting. This approach is the variables are left untouched. So you don't have to do anything on
[01:58:25]  your templates. Um, and it, it kind of knows what to do. Um, yeah, better to make everyone feel better. Let's make it a let.
[01:58:41]  It doesn't matter for the plugin probably, but it is funny because it's definitely mutable. Um, let's, let's take a, let's take a look
[01:58:56]  here for a second. And see what we actually, what we're actually looking at here from a compilation standpoint. Uh, I haven't looked too deeply at any of
[01:59:08]  these. So this is kind of cool for me because I see people do this work. So, yeah, this splits us into our count set count unsurprisingly,
[01:59:20]  and then the effect just wraps the expression. What we should try and do is maybe we should be making that example. I don't, I don't know if this
[01:59:31]  in itself handles destructuring. I do, I do not believe it does, but it believes that there's a syntax like ref sugar for the double dollar sign to,
[01:59:39]  to get stuff back. So, yeah, this is, these examples are great and documentation great. Cause you can actually see the compiled output for, for each thing you
[01:59:50]  write, right? Whether it's a label or, you know, these functions, you can actually see the compiled output. Yeah, this is actually a really good point
[02:00:06]  to bring up. Sorry, I'm just reading this from the chat. All these plugins work with, with TypeScript, um, like quite nicely because, um, yeah
[02:00:16] , it's interesting. Cause Like, like if you see the example with the dollar sign counts or whatever we saw in reactivar, like, sure it's named
[02:00:32]  a funny way, but as long as you kind of define your types with the dollar sign, like, you know, it'll, it'll work like as you'd expect
[02:00:40] , um, yeah. Well, he's got functions for everything on create selector deferred resource, reaction, cleanup, mount, error observable from, he's basically
[02:00:52]  ported the whole API here, destructure. Here we go. This is what I was looking for. Interesting. So there's a helper and then it destructure
[02:01:00]  stuff. So this is kind of like views to refs I'm gathering, um, and it supports rest parameters. That's cool. It actually converts this destructuring
[02:01:11]  into like all these separate expressions. Oh, interesting. And then it uses split props to get the rest parameters. Very clever. Yeah. In terms of the referencing.
[02:01:27]  Yeah. Merge component. Oh, that's how you do property structuring. You use dollar sign component. You do a wrapper and then it supports property structuring.
[02:01:42]  This is cool. Like the. Every index, the full API looks like it's actually here. Lazy children. I guess the benefit of doing these dollar sign operators
[02:01:56]  is you don't need to import anything. If you noticed, you can basically do complete development without actually importing anything, which is kind of interesting here. Refs and dere
[02:02:06] fs. Right. So this is how you can go from a signal back to count. And then you like, you get your, your account. And then if you
[02:02:18]  want to get back to like the normal solid tuple, you can use refsingle. You can always pull the value out. Well, a lot of thought has
[02:02:40]  got into this. It's like a whole language on top of, of language here. Very cool. Solid store. Yeah. So I see, I see the motivation
[02:03:02]  here. Basically all these dollar sign things by having defined symbols for them, you get to skip importing. Right. Basically this is like the trick. So now you don't
[02:03:15]  have any import statements. Control flows. Very, very interesting. I love that the docs have like so many examples here. And you can see the compilation, which all
[02:03:30]  makes sense. I think it would take a little bit for me to get used to kind of the whole ref deref passing stuff around, but it's, it is actually
[02:03:39]  very, very cool. This is basically looks a lot like view ref sugar. So if that's your kind of thing, we've got a plugin for it. And
[02:03:51]  I, I actually, I can kind of see why he's, he's, he's going this way. Cause if you know, Alexis's work, he's also
[02:04:03]  created solid styled, which is like a, a CSS thing where you can just put in a CSS tag template literal, and it just styles the component that it's in
[02:04:17] . This is kind of a really cool solution, right? Like I was globalizing till I can, tree shaking is my guess. Right. The big thing here is
[02:04:36]  we only bundle what's used, right? I imagine using the compiler here, you can maintain that benefit of only bundling what's used. Yeah. And there
[02:04:49]  are other plugins for auto imports and to be fair, solace control flows are auto imported. But again, when you have TypeScript, that doesn't really help. That
[02:04:59] 's a, that's the one thing I'm not clear about. If you're doing all this auto importing stuff, is TypeScript going to be like, what the
[02:05:04]  hell is this stuff? Um, I guess you, you have a global, your alternate, you have a global TypeScript file, right? So you define all those globally
[02:05:12]  as, as like global types, and then you don't have that problem. So there you go global types to without global imports. So it's an interesting future.
[02:05:21]  Um, but yeah, I wanted to show this off because this is kind of cool, right? You, it's a CS and JS approach to my knowledge. Um,
[02:05:29]  but you know, it looks like, yeah, yeah. You literally just use this somewhere in your template, global forward scope, use, there's a directive. Interesting
[02:05:52] . It doesn't work like solid directives though, because we can't put them on dynamic. That's interesting thing. Style JSX supports like style JSX to put
[02:06:02]  them in template. That's cool. It's a limitation. Scoping CSS can only be called directly on components. This is so that the Babel plugin can find
[02:06:10]  and transfer the JS to the component. Global CSS can be used inside functions. This is actually really cool. But the reason I was showing this off as a CSS compiled solution
[02:06:19]  is I, this is all part of some grand vision that Alexis has here, which is this solid SFC. essentially I've always liked putting multiple components in the same
[02:06:37]  file, but what if you could just import some stuff, do it all top level and your file is the component. So essentially you have this. Okay. So this
[02:06:50]  is the trick. Oh, but it's only required for files that don't end it in with a special extension dot solid dot TSX or whatever. But essentially you,
[02:06:59]  you can, you just don't write the function. You just, you default, export default, the return value essentially. So your template is the default export. And then
[02:07:10]  everything else is considered instance based. It's interesting. Cause I don't know how you hoist anything here, but maybe you don't need to essentially. Everything is
[02:07:17]  like part of the component. Ooh, suspense and fragments. And slots. This is interesting. I guess, cause you don't have props in the same way. I
[02:07:34]  wonder how we handle those props here. Like where, where, where are our props coming from? Props, dollar sign props. So we have a magical props. Prop
[02:07:50] s getter. That you assign and then you can use it. What's our dollar sign view do? Oh, it's for TypeScript. See, this is
[02:08:09]  cool. All this stuff is very TypeScript aware. I think it's interesting. Cause I know a lot of the challenges over the last few years for template stuff, like
[02:08:16]  Svelte and view has been to get TypeScript support. And my understanding is it's gotten pretty good, but you know, like there's still a lot involved.
[02:08:23]  I guess the way this approach works and banking on JSX, like you kind of still get all the benefits of TypeScript using this approach. But you start seeing all
[02:08:34]  the pieces come together. Cause I showed you the CSS solution. I showed you the solid labels and I showed you this SFC. But this SFC, as you can
[02:08:42]  see is mostly just using solid the way it is. So I think. Yeah. Alexis made a starter and maybe we should just download this and actually play with it to actually
[02:08:53]  see the whole deal because yeah, I kind of want to see what the starter is. It's called solid SFC style labels starter. So he basically built all his
[02:09:04]  plugins into a single starter. And I don't, I don't know, I haven't actually tried this, see if it's out of date, but it uses
[02:09:11]  solid SFC, solid style and solid labels all in a single thing. And it uses it's built in Veed. So I should be able to just D get
[02:09:21]  this and we should be good to go. So maybe, maybe we should give that a shot because I'm kind of curious what this looks like to see like a full experience
[02:09:31]  kind of built along with this. Maybe let's make a new window here. Let's go examples. Oh, what is it? Never remember this particular. Just this
[02:09:59] . Oh, right. Make the, what do you call it? Solid SFC. Yes. All right. And then let's open this in a new window.
[02:10:26]  I'm kind of curious because it looks like he's basically built a whole experience here on top of solid. That kind of does the whole deal. So development. Examples.
[02:10:43]  Solid SFC. Let's do this. So this is a Vee project. It looks like. I'm just going to PMP. And. Okay. And essentially
[02:10:57] , you know, so it's got that whole index HTML. Let's, let's blow this up so we can all see this a little better. Speaker 1:
[02:11:05]  All right. And a little bit bigger. Beautiful. And then source. And in our source folder, we have what? Style registry. I guess this is. It's
[02:11:16]  just one SSR friendly. I don't even know what's going on here. No, no, this is. This is looks like it's just the client template.
[02:11:25]  Yeah. That's good. So we have index for our app. Our app. You set some global styles with using the CSS. Imports some stuff. And then
[02:11:36]  returns our view. And then our view has a counter in it. And our counter imports some stuff. You write some code, set some CSS and export some view.
[02:11:50]  It's interesting. It's, it's unreal. I don't know. But if you look at the stuff, it's, it's importing. It's just the
[02:11:59]  other components. And the, the CSS tag, like all the solid specific stuff, the control flow. I don't think what we've got here message props. Some
[02:12:10]  type script in here too. It's kind of cool. Like it's, I don't know. I don't know if I'm just like used to just seeing everything
[02:12:19]  top level like this, but it kind of looks like that just works. Let's, let's, let's give it a run. Okay. Let's do this.
[02:12:36]  And we have an incrementing and decrement encounter unsurprising. And I guess the message is that count five, that's in the middle. Let's look at
[02:12:50]  that code again, just to see the message components doing. Yeah. It's just span with that. Yeah. I don't know. I don't know what I want
[02:12:59]  to do with this to be fair. I just wanted to see it because it is. Does the message show. Yeah. Like you're not even thinking about destructuring
[02:13:11]  in this case because like. Yeah. But I think there's a helper for it. I wouldn't, I don't think I can just go like message. I think
[02:13:21]  I'll just break everything if I do this. I just like messing with stuff. Pretty sure I just broke everything. Yeah. Of course I broke everything. But.
[02:13:33]  Okay. That would be fun playing with this stuff. Yeah. That's what we really need. Isn't it? Well, that's the whole thing, right?
[02:13:57]  Like the possibilities are infinite. It's really cool that TypeScript is just working for these things. Like I'm always afraid of the tooling capabilities when you go this direction.
[02:14:10]  But if you look at what these guys have been doing is it's basically valid JavaScript, right? Like there's nothing invalid about what you did here. So this is
[02:14:21]  kind of like an interesting half and half place where you're actually, even though it's not like semantically like functions calling and that everything here is valid JavaScript. So
[02:14:31]  like if I like go do some weird stuff and then I go format document, like prettier. And that's on me. I did something weird, but prettier knows how to
[02:14:41]  handle this. TypeScript knows how to handle this. Like essentially these whole experiences don't require a whole new tool chain and they still just work with full TypeScript support
[02:14:54] . And again, I, yeah, it's interesting because I mean, is there, where's the counter with the state? Like, yeah, I don't know.
[02:15:07]  Like this is basically view ref sugar, essentially. That's what's going on here. But as I said, I think it's all labels support stuff. Like we
[02:15:18]  haven't done this one yet. I think you can do this. I think you can, the cool thing with solid labels is I think you can mix and match the approaches
[02:15:28] . I think. Yeah. Okay. So that's, that's an interesting one with the label approach. We should actually go look at solid labels and see how,
[02:15:43]  how's the label approach work? Because I didn't actually look at that. Yeah. Okay. So labels approach does probably have a little bit of TypeScript fun to
[02:15:55]  it. Because you basically probably have to tell it to shut up essentially. I wonder if this still works though, right? How do you do memo with the label approach
[02:16:11] ? Memo. Yeah. Curious memo message. For people who really hate parentheses, right? This is for you. Does this still work? Did I break everything
[02:16:34] ? No, it still works. Okay. Yeah. So I don't know if there's more tricks we have to do to make labels happy with TypeScript. But
[02:16:40] , you know, if you really hate parentheses, you know, this could be for you. Maybe mix it up. Make your signals like this. Make your effects like this
[02:16:59] . Let's just make a fact. Effect console.log message. Here we go. Is it something in the console? Did I do that wrong? Probably. Hmm
[02:17:25] . Let's see if I did it wrong. I wonder if they have to be block expressions. Maybe. Yeah, there you go. Yeah, so effects are block expressions
[02:17:52] . Okay, cool. Count, count, count, count. So, I don't know. Let count. Create a signal. Memo effect. You can understand
[02:18:02]  how the label approach doesn't actually lend to composability. But it is kind of interesting just to see this world where, as I said, it's because they're using
[02:18:11]  the CSS helper. But you could picture that if you actually want to do like a little bit work, you could actually make the CSS helper global. And then, you know
[02:18:19] , add some Marco style component discovery. And then essentially this part just disappears. And you're just writing some reactive stuff, setting some CSS and returning your view.
[02:18:36]  Yeah, that's a good question. I don't, I don't know if we can. I mean, message. Like if I do this, will this make
[02:18:56]  TypeScript shut up or will it? Label's not allowed here. Interesting. That's probably with Svelte too. Like essentially, you're not allowed. Yeah
[02:19:08] , this is interesting. I wonder how you deal with this. because it doesn't actually know. Labels might just not be as, might have this limitation. Could
[02:19:27]  I recall the way that there's only initially rendered once in the server and the client just attaches to the existing DOM? I mean, that's, it depends on your definition
[02:19:39] , but that's what hydration is. We already have that. How hydration works is like a huge topic with lots of nuance and a lot of different approaches. And the
[02:19:53]  whole reason why that article to respond to Adi Asimani's chart has taken me so long. But generally speaking, that that's, that's how like server side
[02:20:01]  rendering and hydration works in solid. If I'm understanding you correctly. Yeah, I mean, you can sort of, well, actually, yeah, you got to do
[02:20:18]  little tricks here. Maybe we should play more and understand how composition works. It's actually a little harder in here. Because then you need a separate, well, let
[02:20:28] 's, how does this work? Let's, let's play with this. Um, what if let's, uh, our message. Okay. I'm going to forget
[02:20:38]  about message for a second. Let's make a function. That's like doubler. Right. And doubler is going to take a number. That is a number
[02:20:46] . And it's going to return num times two. Right. And now if instead of that, we went count. And we went doubler count. Now I understand this
[02:21:02]  isn't the kind of composability I like. Cause I'd rather like, what if you want an effect in a different file? Like this composability is like what
[02:21:11]  people point me to when I mentioned that, like you, how hard is it to write a encapsulated paginated for in Svelte or view? They're like,
[02:21:20]  we'll just use the each on the outside and then pass your own custom logic for how the four handles. No, no, no, no. You want to abstract away
[02:21:27]  the, the each handler. And you want to use a component to interject new variables with scope. And I've done that in a different video is doable. But see
[02:21:35]  what I'm interesting here in here is. Yeah. I mean, this probably just works though, because count is being accessed here. This isn't doing, this isn't
[02:21:48]  like, because of the way that this is a read. Is there any way that I could do this where it doesn't read in the local scope? Oh yeah, of
[02:21:58]  course. It's doing it. So there you go. You understand why this is a little bit trickier, right? Because the effect is calling a function,
[02:22:40]  which wraps over, I guess, like basically it's still using solids. Auto tracking is what I'm getting at because counts only X accessed in here. Right. I
[02:22:57] 'm kind of curious. Does this work in Svelte? Does anyone know if this works in Svelte? Let's find out. Even within the same file
[02:23:10] , can I go, like, function doubler. And go, like, let something. Zero. And then what are we doing? Are we making this a button or
[02:23:25]  something? Button. We'll put num in here for good case. It'd be like, on click, num plus plus doubler equals return num times two.
[02:23:59]  Curious. And then we want to go to dollar sign console dot log double layer. All right. Curious. No. Okay. So this doesn't work in S
[02:24:13] velte. I thought so. This is basically the same example, right? You can see the count going up. Declare num. Make an effect. Console
[02:24:24]  log it. Click increment num. Put num in. And then double, redouble num. See, the problem is this is not actually reading from this. Like,
[02:24:36]  if this was like this, this would work 100%, right? Right? You can see it. It's working down here, right? But if it doesn't read within
[02:24:50]  the local scope, Svelte can't tell that it's been updated. So this updates, but this never runs. I can't tell her if you're joking
[02:25:11]  or if you're serious. Like, is this like array equals array? Like kind of joke, but. Yeah. Yeah. It's interesting. Yeah. Because this
[02:25:27]  makes me kind of want to see. It's kind of cool that even though you're using like, like basically Svelte syntax here, you actually still have the runtime
[02:25:40]  reactivity thing. I want to see what this compiles to. That's what I want to see. See if I can find that here. Just to understand what
[02:25:50]  we're looking at. Because. Oh, is this like module reloading giving me like 10 versions of everything? Okay. There we go. So we are in debug mode
[02:26:04] . Yeah. Yeah, exactly. Because it's just create effect console log doubler. And then runtime tracking catches it. Yeah. So, I mean, the compilation
[02:26:19]  is almost too easy. I'm always kind of skeptical on this stuff. But I will say this. This has a lot of the same qualities that Solace.js
[02:26:32]  transforms have in that. It's very much a one for one thing. When you write this code. You just go and find it. And it's like, oh,
[02:26:40]  it's right there. Like, oh, I made an effect. Okay. Now it's using create effect call. But again, it's not like it's suddenly
[02:26:46]  transformed your stuff. Like, I mean, maybe this is unfair. But you know what this felt code compiles to? Let's make it human readable. Okay.
[02:26:59]  So it's a create block. This is creating the button. Claim. Okay. Now mount. Insert dev. If not mounted. Dispose. Click handlers.
[02:27:07]  It's fine. Update. Dirty check. Set data. Context zero. No. Create fragment. Where are we? Doubler. Okay. Here's our
[02:27:14]  doubler function. Okay. Here's our script tag, essentially. After we call these. We are let. We got some. Our props coming in. Validates
[02:27:23] . Okay. So then this is this minus the reactive statements. And then click handler got hoisted. And then a reactive statement down here. It is cool though.
[02:27:40]  I got a gifs that they actually keep this intact. They just kind of inject some other stuff in the middle. But they do actually keep like all the lines of
[02:27:54]  code. Even though they rearrange it. They actually keep it intact. So it is. That is kind of cool. Kind of see that. Hopefully that's visible on stream
[02:28:11] . Okay. Yeah. So I mean. That's that's that's that is kind of cool. I will say that, you know, this doesn't seem like
[02:28:22]  it actually affects the transparency here. You know, I'm a skeptic on this stuff to a certain degree, but. It is very like one to one. So props
[02:28:34]  on that. Um, yeah, I mean. It is pretty optimal. I mean, you make that joke, but. Svelte's compiler was wasn't it
[02:28:53]  was a. Influence for some of the work that we we've done on Marco six. So. Yeah, it's just. One of the biggest fears I have with
[02:29:04]  compilation is transparency. And sometimes like you just can't get to it in the in the same sort of way. Like I imagine. One like. But I think this
[02:29:17]  actually kind of shows like how the the power of the primitives here. Right. Like you can see like the primitives are just almost mapped directly. Almost into language features
[02:29:29] . Right. So it's kind of cool. This. Yeah, I want to. I want to kind of touch back on unless anyone has any specific questions about this
[02:29:48]  part. I want to kind of touch back onto this article about reactive script for a minute because. Yeah, I mean, I didn't get into the D refs
[02:30:04]  case, but. There are edge cases here when you need to kind of go back and forth between the wrap value and the unwrap value. You'll see in all of
[02:30:12]  these because. The whole key to most of these approaches is you end up with a single variable that you get to write like a single variable, except the problem is when something
[02:30:24]  is a single variable, it can only be treated in one way, like and this is this is the crux of the of the whole reactivity thing is you have
[02:30:33]  a container like like a reference. And you have the value. And no matter what we do, we have both of these things. Like sometimes you want to pass by reference
[02:30:45] . You want to you don't want to read. You just want to be like here is the react value and you do with it what you will. And sometimes we
[02:30:53]  want to read the value. So it's important to kind of go back, be able to go back and forth because. Essentially, when you use JavaScript. This is
[02:31:03]  always the reference like pure JavaScript. The variable is always a reference. Then you might have to call it as a function or whatever. But it's always the reference to the
[02:31:11]  signal. And then you have to do something to get the value. All compilation is doing is reversing it. They're saying the value is the thing that you always have
[02:31:18]  access to. And you have to do some magic to get back to the reference. And. It's because this reversal makes things cognitively simpler. Yes, your plugin.
[02:31:35]  Well, yes, your plugin doesn't do it because you you denote the you did to note it with the the dollar sign that it's something special. That's the other
[02:31:49]  way to to do it. But if someone wanted to get the reference, they do have to do something a little bit different. Right. Like, I mean, technically
[02:32:00] , the the like. Yeah, actually, maybe you can help me with this Orin. I don't know if I have it still open. But active bars.
[02:32:22]  And let's just go to your GitHub. It's easier. Probably is. If I wanted to. Like we were looking at the compile output for this before. Right.
[02:32:37]  If and you just write this. But what if I actually. Wanted to get. The getter essentially. Like, I appreciate that in this example, you can
[02:32:50]  actually show that it doesn't even have to be components like you can literally pass it into a. Like you can actually compose it like. Make your own. Custom hook and
[02:33:00]  still preserve reactivity. But I'm just curious. If you wanted to get the getter what we do. Okay. There's a dollar sign dollar sign. Okay
[02:33:12] . Yeah. And what I'm getting at is. Regardless. Like, I realize that you don't need it. Most of the time. And this handles. Thing.
[02:33:20]  This is. You are correct on this. But the reason I wanted to point this out is because. As. Because of this kind of conceptual back and forth. That's
[02:33:29]  present. This is why there's always a thing. That's why these. These things are never simple that you can the only way to actually get rid of it.
[02:33:36]  That we've seen is felt felt actually doesn't do this, but. But that's because nothing can leave the file. Right? Like it's trapped by the local.
[02:33:49]  Compilation. That's why it doesn't have this. These concepts. So that was sort of what I was wondering. Because if you take. What Oren's
[02:34:01]  saying. If you treat things like this all the time. You most. Almost always avoid that. The need. For the double dollar sign. In the identifier case. Even
[02:34:13]  more so than other cases. So I was like. Oh yeah. That's funny. I remember this. I was trying to figure out if it would be possible.
[02:34:25]  To just. What if we reversed everything? What if we made. The JavaScript on the outside. The reactive thing. Instead of trying to denote. Reactivity with a dollar
[02:34:38]  sign. What if everything was reactive by default. And you had to denote. When things weren't reactive. Right? That's where I kind of started. This concept
[02:34:51]  of reactive script. To be fair. Part of the reason I wrote this. Was I said. As I wanted to kind of like. Trim down the conversation. Into
[02:35:00]  like specific categories. Because like these solutions. Regardless of framework. Seem to only tend to fall. In what I've showed you. Identifiers. Function wrapping
[02:35:09] . Or keywords. Like every. Compiled reactive solution. Or fall into those three. I was like wondering. Like if you could. Write something like this. And it
[02:35:22]  was. And you knew. That the grammar. Even the if and else statements. Were always declarative. Like picture. Like. That this is reactive. In the sense
[02:35:33]  that it. It ran once. But these. This if. Else has the same behavior. As a show component. In solid. Like essentially. Because it's built
[02:35:42]  in syntax. To JavaScript. We can analyze it. And we know this. That we could actually. Set a reactive value. Write a condition around it. And actually have
[02:35:54] . Updating that condition. Cause reality to change. Now this is a complete. Mind bend. Coming from JavaScript. But. This. This. This. This
[02:36:07] . This. This is just. I was like. What. What if you could keep. JavaScript syntax. To create a language. That essentially. Was declarative. That
[02:36:15]  was reactively declarative. The challenge here. Is that there's always going to be escape hatches. And denoting those escape hatches. Is actually kind of challenging
[02:36:23] . Here. Here. And if this escape hatches. Are also written in JavaScript. It might be hard to tell. What's imperative. What's declarative JavaScript
[02:36:36] . Yeah. What's looping look like? Exactly. This. This. This one. This one. This one bugged me too. Right. Cause. You want
[02:36:43]  a map function. Not a for loop. And. I've seen some people talk about. Like a JSX2. Where you can just put for loops in.
[02:36:50]  And they act like a map function. Essentially. Like you need. Coffee script looping back. Right. Like. You need. This is the. This is the first
[02:36:57]  thing that I hit. On the JavaScript side. That I thought was really awkward. Because you. You want a syntax analyzable. Loop. And for. Is all
[02:37:05]  we have. And. There's no syntax. In JavaScript. To treat. For. Like. An expression. It's a statement. So. That alone. Might actually
[02:37:18]  be the end of my. My. My brilliant little plan. Here. But. Do expressions. In JavaScript. Are interesting. But they don't support loops. Unfortunately
[02:37:26] . But. Have. Have. Have. Have you all seen. Do expressions. Do expression. Proposal. What is it? I don't even know what.
[02:37:37]  Body is doing it. Oh. What do you know? There we go. Check this out. Some people want coffee script. No. What do expressions. Let you do
[02:37:48]  is like. Turn something. Into an expression. Essentially. Like. Let x. Equals. Do. Blank. But it's cool. Because like. Look
[02:37:54] . Let x. Equals. Do. If. Like. Whatever the return value is. Becomes the x here. And they're saying. Like. Oh. It
[02:38:02] 'd be really cool. To be able to do this. Inside. JSX. Because then you could. Do. This. Um. It's a little bit. Like
[02:38:09] . A nicer form. Of an. Uh. Ify. Or whatever. I actually thought. This was kind of cool. Because. If you watch the Marco stream
[02:38:16] . There's this cool. Demo. Where we're nesting state. In line. And technically. Solid's capable of that mechanically. But not syntactically
[02:38:22] . With JSX. So it's like. Ooh. Insert a do statement. And maybe we can do that. But. The one thing that. That was interesting
[02:38:31] . About it. Is. Um. There's no declarations. Little trailing declarations. At least. And. They don't do loops. Which is too bad
[02:38:41] . Because. If. They did loops. That would be sweet. Because what CoffeeScript did. Is. It would actually collect. All the return values. From each iteration
[02:38:53]  of the loop. And return that as an array. Um. But essentially. We don't have syntax for this. Which I actually said. Might be. Our.
[02:39:02]  Our thing. Well. Perhaps. But. I mean. You know how solid does. Keying. Right. Dylan. So. I'm thinking fine-grained.
[02:39:15]  Referential keying. As. As. As the default here. Obviously. There's probably a lot of edge cases. But. If there was a syntax. That was
[02:39:24]  analyzable. In javascript. For. For loops. Um. Like for map. Especially. Um. That could return. That was an expression. Instead
[02:39:33]  of a statement. Like. Then. You know. I think. I think maybe this has some. Some legs. But. Yeah. I. I thought it was really
[02:39:44]  interesting. Because. Then things like. Early returns. Are just. Like. Everything. Just becomes. A declarative statement. So. You could just write this.
[02:39:55]  This. And this would be the same. As. What. Like. Using. A. A memo. Or. You know. Kind of. Wrapping.
[02:40:05]  It in a fragment. For conditionals. Because. As I said. Solids. Capable of nesting stuff. Underneath these. But the syntax. Doesn
[02:40:11] 't support it. So. It would be. Because for someone. Writing this. It looks. Like. Svelte. Kind of. But. Or. Slash
[02:40:20] . React. React. Like. It looks like. It has. Everything. But it would actually. Be using. Fine-grained reactivity. Um. Because.
[02:40:28]  And. This is. If you notice. I still got JSX here. Because. I still like JSX. Because. This approach. Lends to the portability
[02:40:36] . Of declarations. Because. You'd still just. Want to sprinkle it in. This is like. The most. You know. It's not JavaScript. This
[02:40:43]  is the most like. JS forward thinking. Approach. I could think of doing this. Which. Is basically. On the opposite end of the spectrum. Um. To
[02:40:52]  a certain degree. Um. From like. The most HTML. Approach. I can think of. Which is Marco. It's funny. I'm. Marco. For
[02:40:59]  me. Has kind of cemented. What. Like. Svelte. Could be. Right. And. Um. But. The benefit. Of Marco's tags
[02:41:09]  API. In this scenario. Is. And I. I have an example. Further up. Is. It's very obvious. When you're in. Declaration land. And
[02:41:16]  when you're in. Uh. Where's this? Function. Decorators. Here it is. It's. It's very. It's very obvious.
[02:41:23]  When you're in. JavaScript land. And when you're in. Declaration land. Like. Tags. Are. All declarations. These are. These are declarative
[02:41:31] . Everything that looks like. JavaScript is imperative. So it's. Very clear division. I don't know. How. In like. A reactive script. We'd be
[02:41:39]  able to. Denote the difference. Between the imperative. And declarative zones. But I have to admit. If we could solve. If there was a syntax.
[02:41:49]  For for loops. That made sense. And maybe it's just. The semantic. Like. The do semantics. Essentially. Like. Maybe the return. Maybe. The
[02:42:00]  last statement. Is always an implicit return. Or some. Like. Weird garbage. Like that. I don't know. Writing code like this. Seems like it has.
[02:42:09]  Notice the destructuring. Has basically. The best of. Both worlds. That. That was where my thinking is. Aster syntax. I mean. Yeah.
[02:42:29]  We didn't talk about. Aster today. Should we pull up. Aster. Aster. Was an. Was another project. Built on top of solid. Like
[02:42:35]  how many. How many. This is not it. Where is it? Maybe. Maybe this is why. Coffee script comes back. Yeah. Why can't. Or
[02:43:02] in. If you can dig up the link. Unless I. Find my own Twitter tweet. When which I promoted. Aster. I did. Here we go.
[02:43:12]  What is aster? Guess what? Oh. It's been. Replaced by client.js. Interesting. Basically. This. This was a framework. Built on top
[02:43:26]  of solid. I wonder what client.js is. Just out of curiosity. Okay. Okay. So he hasn't actually. Said anything yet. Dino. Based
[02:43:45] . Example. Sorry. I'm just curious. There's no package.json. Or anything here. Okay. So. But yeah. Aster. Was
[02:44:00]  built originally. I believe on top of solid. Because of our fine grained mechanisms. But essentially. Did he cut down the. There used to be. Yeah. He
[02:44:13]  compiles your aster code down to solid.js. It was another compiler. That did aggressive co-location. In its syntax. But I. I actually
[02:44:20] . Yeah. Okay. Here we go. Yeah. So they just literally. Just assume that for. Returns. Which is what I was saying. But I think it
[02:44:30] 's a little bit more awkward. When you have. You want it to assign to an intermediate variable. But I mean. I suppose you can make that work. My goal
[02:44:41]  here. Is mostly. Around. Not making stuff that Java. Like if you look at this. JavaScript or TypeScript. Is not going to complain at you. Like this
[02:44:53]  is. All valid. JavaScript and TypeScript. Yeah. Not terribly surprised. I think. I think this is. It's kind of. One of those interesting cycles.
[02:45:07]  Because I think what happens. Is you do enough experimentation. Then you're like. Okay. I can build this myself. It's been a lot of people. Who've
[02:45:14]  been. Who've been. Doing these experiments. recently. Especially on the. GS Framework benchmark. We see a few new. Fine-grained libraries. A
[02:45:21]  lot of those people. Are still in the. Solid community. Which is great. And actually. By building. Something like that. From scratch. It gives them. Even
[02:45:28]  greater appreciation. For some of the work. I've had to do. The solid. Like maybe that's the secret. To getting new members. On the core team.
[02:45:35]  Find people. Who try and rebuild. You know. Fine-grained reactive system. The cells. And go through. All the trouble. Benchmarking.
[02:45:43]  Going through all the. Trials and tribulations. And then eventually. They come to appreciate. What we've got. I don't know if you saw. The
[02:46:00]  Marco. Stream. Right. This is like a complete. This is like a complete. This is like one. Side of the coin. This is like if you. L
[02:46:08] iked. Javascript. Or you like. Like the idea of writing stuff in code. And you kind of just. Have this kind of. Flow. And this is
[02:46:16]  what I've been playing with. Right. And. You kind of just. Have this kind of. Flow. And this is what I've been playing with. Right.
[02:46:21]  And. Maybe this is just completely unnecessary. You know. This is just kind of. What I was thinking on that side. But if you. If anyone saw.
[02:46:35]  Let me see. Dev two. What am I looking for. Was it in. If you. If you saw the Marco stream. And the tags API. Even though
[02:47:01]  it has a specific syntax. Or whatever. You might not be friendly. The. One of the things that we were highlighting. And at least. If I can get
[02:47:08] . All the way down here. It's better in the stream. Is that. You can like. Make a for loop. And then put state inside the for loop.
[02:47:15]  And just. Put the effects inside the for loop. Like. You can basically. Put stuff as close as possible. To. Where it's used. And. This is
[02:47:23]  a very. Cut and paste kind of thing. Right. Because it's all just markup. So if you're like. Oh. I need to. Extract this
[02:47:31]  into a reusable part. You just like. Copy. Or like cut. You know. Select. Cut. Paste. Drop. And I think. Even for visual editors
[02:47:39] . That. That. You know. We're just building stuff. Being able to generate this code. Be super easy too. Because it's all localized. And then everything
[02:47:46] 's basically. There's no components. Everything is a component. Everything is just like. These pieces that can just. They just slide in where they're used. It
[02:47:53] 's just like. Right. So like. This is. This is one. Vision of the future. And what I was trying to show. With the reactive script. Is
[02:48:01]  like. The opposite end. I'm. I'm. Very much. Interested. In pushing the. Boundaries on. Both ends. Like. I'm
[02:48:10]  not. Completely. Sure. Like. When I saw. Svelte. I was like. Oh wow. I wouldn't have gone that way. But that's really
[02:48:16]  interesting. So I wanted to. Look even further. To see what you could do. With these template DSLs. Right. And. I. I found.
[02:48:24]  It's. You know. Where they found me. Marco team has. Kind of taken that thinking. And gone like. Way. Beyond. In terms of like. Er
[02:48:32] gonomics. Um. Performance. Like. Like. Like. The. Like the pieces that would take. To be able to build that. Almost HTML first thing. But
[02:48:42] . I'm kind of. I was kind of curious. I'm like. Okay. Well. There's that. But what if we are. Kind of JavaScript first.
[02:48:48]  What if. We want. To be able to. Like. Write everything as. Uh. Kind of portable code. Rather than. Portable tags. And that.
[02:49:00]  It's funny. When you get to the extremes. On things. Like. Sometimes. They become. The same thing. Almost like. It's hard to differentiate. Because
[02:49:07]  like. It's almost like. It loops around. But. Essentially. That was kind of the question. I wanted to ask. Like. Is there. A different paradigm
[02:49:16] . Like. When. As I said. When Svelte came on the scene. There's this kind of. Sense from a lot of people. They're like
[02:49:21] . Okay. There's React. But Svelte is the future. Like. These compilers. And all this. Is the way. We're going to do
[02:49:26]  things. And to be fair. When I'm looking at. Reactive script. There's definitely. Compilation involved. Right. But I. I wanted to kind
[02:49:34]  of. I was kind of wondering. Is there. A future. Where. Like. The compilation. Isn't all. Encompassing. It from the. From the
[02:49:44]  perspective. Of like. Yeah. I don't know. It's interesting. Because I think. Reactive script. Actually kind of. Blurs those lines too.
[02:49:52]  But we're like. You know like. The JSX thing. Like. Assign a div to a variable. Like. Where it's all like. Piece wise.
[02:50:01]  That's sort of. Sort of. What the question is. I want to. I want to. I want to know. If there's a different. Future. Than
[02:50:09]  that. Yeah. I mean. It all involves compilation. We're. We're. We're hitting the limits. Of what we do. With javascript right now
[02:50:18] . Which is interesting to me. Because. You know. There's a lot of talk about. Wasm. And stuff. And I don't know. What people
[02:50:24]  do. On the rust side. But one thing. That I've seen. Is a lot of the. Templating. And stuff. Is like. It's not.
[02:50:29]  As focused on. From a hyper optimization. Standpoint. You know. A lot of work. Has gone on the. JavaScript side. And the tooling. Into templating
[02:50:37] . And looking at. How to like. Optimize. These kind of. Seemingly. Micro optimization. But it's like. For javascript. And what
[02:50:43]  we're doing. In the browser. Makes such a big. Difference. Yeah. I'm just reading some comments now. Yeah. Well. Like. You
[02:50:59]  say plus Aster. But yeah. And reactive script. Is sort of. Encompassing that. A lot of the. Ideas of Aster. And co-
[02:51:05] location. If. Because the whole thing. Is declarative. Right. Yes. Yeah. And we're already working. On TypeScript support. It should be backwards
[02:51:16] . Compatible too. So TypeScript is coming. We're using it. You know. In the same way. I want to see how it evolves. Right
[02:51:23] . Because. Like. As I mentioned. Vue. And Svelte. Have had some challenges. We can learn from them. But yeah. I imagine we have
[02:51:31]  a. Somewhat similar approach. Although we've been looking at. What we can do with parsing. In terms of. Better. Responsive. With some errors.
[02:51:38]  And stuff. How is this. All fined to press as. Yeah. I mean. Progressive enhancement. Is one of those things. Where. How should I
[02:51:49]  put it. To me. It's just one of those. Givens. Like. Like. Like accessibility. It should be something. That we are all doing. When
[02:52:01]  we design our sites. Because we care to do that. I think that one of the challenges. Is. Like accessibility. People don't do the right patterns. They
[02:52:10]  don't get the benefits. And. It's kind of weird. To have something like HTML. And you know. CSS. And all the stuff we have. And not
[02:52:18]  just have the right. Defaults off the gate. That we have to work so hard. To make. Things accessible. Or progressively enhanced. I think. There's
[02:52:27]  an argument. And. Dominic Gannaway. Again from Inferno. Came into our discord. A little while ago. And he's been working on Lexical
[02:52:36] . Which is a. Like a text editor. Like hyper efficient. Text editor. Basically has. Like. Has its own DOM diffing. And everything. Like built
[02:52:47]  specifically. For the use case. And he was like. We need a different abstraction. Than HTML that we have today. Like he. He's not saying go to Fl
[02:52:55] utter. Necessarily. But he is kind of. That's where his thinking was. He's like. For something to really change the game. It needs to like
[02:53:03] . Somehow succeed at changing the abstraction. In such a way. That. Like stuff like accessibility. Is a problem of the past. It just. That's how it
[02:53:11]  works. Yeah. I'm not sure. Given the way people treat familiarity. And how hard it is to get an edge here. I'm not sure. If that's
[02:53:22] . You know. Where we. Like where things go right away. Or if it takes some time. Because. It's you know. Yeah. Some comments about JS
[02:53:38]  and WASM. For a few minutes ago. Yeah. I understand that. And that's probably where more of the tax is. Like I made a comment. Or I
[02:53:47]  noticed a while ago. That the gap between the most optimal WASM code. Vanilla JavaScript code. And the frameworks. Is a lot bigger. Than the gap between the
[02:53:56]  most optimal. JavaScript frameworks. And vanilla JS. Like we're only trailing vanilla JS. By like. You know. 5%. Where the gap between the most optimal
[02:54:07]  WASM. And. And vanilla JS is like. You know. In the JS framework benchmark. Is something like. 12 or 13%. Which might not seem like much.
[02:54:20]  But it means. Like I was trying to like project. How much further WASM has to get along. And how much faster it needs to be. Than vanilla.
[02:54:28]  Before it actually. Allows those libraries. To take a dent out of. The fastest JavaScript frameworks. So. Yeah. I think. I think there's still. A
[02:54:38]  little ways off. Yeah. I probably. Astra doesn't have much documentation anymore. It looks like it's down. Or they gutted it. It might be worth
[02:54:55]  giving it another look. As I said. I. I didn't see anything initially. That was like different. Than what I was already thinking. So I wasn't really
[02:55:03]  crediting. Like combining with aster. It's just like. That is what reactive script is. So. Maybe it requires a further look. My dream of next
[02:55:14]  version of JS. React. To just write JSX. Without function. Oh. Probably not a cleaner Marco. It's harder to get cleaner than Marco. But like
[02:55:31]  in terms of like terseness and stuff. But yeah. I. But yes. But it's actually. I think that's. Isn't that similar to what we
[02:55:40]  just saw? Actually. The example here. The. The SFC. Example. Where we literally. I mean. I guess he's exporting default here. But.
[02:55:50]  Like. Literally just. Like. Throwing some JS. In. You know. You pretend these are used states. Or whatever. And then just returning some JSX
[02:56:06] . Or whatever. Yeah. But. It sounds a lot like. What we were showing here. It's funny. Like. It's interesting. I think there's a
[02:56:16]  mental. Consideration here too. Because. When. Something's HTML first. Like this Marco example. That I had on screen. You kind of. Where is it
[02:56:27] ? Kind of. Like. If this was your whole file. You don't feel uncomfortable with it. At least for me. Because like. You start in. HTML.
[02:56:35]  And then you. And you put your JavaScript in it. It seems to fit. For some reason. This feels disjointed. For me. Like. Even Svel
[02:56:45] te. Where you have the script tags. It feels like you're in. An HTML file. Like it feels like it's this. This block. This. Like
[02:56:55] . I guess this could be a script tag. Or sort of style tag. Like. It's. I realize this is just JS. But on the other hand. Like
[02:57:09] . Expecting it. To be grouped as a. Like. As a component. Like this. Is already. For me. A mental leap. Because. It suggests
[02:57:19]  some sort of instance space. Because there's a difference. Like. Say. If you make a function. If you make a component. I mean. I've shown
[02:57:26]  the silly example before. Right. But. Like. It's the difference. Between this. And this. Right. We all know that this still works in solid. Right
[02:57:37] . But. When you have a SFC. There's no concept. Of this. I mean. Marco has a keyword. Called static for this. But there's
[02:57:44]  no concept. Of hoisting like this. Everything's instance space. And. What I'm getting at. Is like. To enter a file. And be. A
[02:57:53] cknowledging that I'm instance based. Is already like a. A cognitive switch overhead. To me. Like it's. It's not. It's not. It
[02:58:04] 's not. Java. Just JavaScript. Just like. Like. It's now a thing. And I don't know. Like it's fine. You're authoring components
[02:58:12] . You're allowed to have that abstraction. It's a thing. But. I think for me. That's. That's where. Like a bit of a gap
[02:58:20] . Like. Kind of where. A thing where. When I see this. I'm like. No problem. Or Marco. I'm just like. Okay. I'm
[02:58:28]  in some markup. That has some JavaScript in it. But. This. By its nature. I can already tell it's magical. Like. I can already tell.
[02:58:37]  That it's doing something special. And it's not just JavaScript. I don't. I don't know. It just. It's funny. Because. We all
[02:58:44]  know. Like. This is not just HTML. But. You can see it. Yeah. I mean. Yeah. I mean. That's why we keep on working at
[02:59:05]  this. Right. I don't. I don't know if there's like an optimal place to be. As I said. My personal approach is. Go for the
[02:59:15]  extremes. Go for the things that are. Don't seem possible. And then. See if. Where we land is. Somewhere. Like. If you don't test the
[02:59:25] . Boundaries. You don't. You know. From a design standpoint. Try and push things that far. You're not going to know what you're capable of
[02:59:31] . So hopefully some of this work. You know. Has some impact. And actually sticks. But that's just like where my thinking is at. Yeah. That's
[02:59:50]  an interesting question. There is a proposal. I don't know if you still hear Joe. He's been. He's been looking at like. What if we could
[02:59:57]  bring reactivity in. The funny thing is. If we brought reactivity into JavaScript. What would it look like? Like. Like. I don't know if we
[03:00:13]  get away. From. From the. I'm not in the right. Document anymore. But like. I don't know if we get away from the three. Styles of
[03:00:22]  things that I took. Like options that I talked about. Like you could make it a type. Essentially. Like. But. The funny thing about it is. Everyone focuses
[03:00:34]  on the destiny operator. They focus on the reactive assignment or computation. But for that to work. Yeah. It's actually the lettables. That are the signals.
[03:00:44]  So if you had a destiny operator. Or something in JavaScript. Every variable would have to be. Potentially reactive. Which is. Like. That's too much overhead.
[03:00:54]  I imagine. Now. If you denoted. What the reactive atoms were. Like. How do you do that? Would it be. Like. As I said. Would
[03:01:04]  it effectively be a type. I guess it would be. Kind of like. At which point. Like. I guess. It would be cool to have signals. In
[03:01:18]  the. In the browser. Essentially. But. I don't. Know if. We. We'd still have that problem of. Of referencing. And de-refer
[03:01:27] encing. Maybe. Maybe. Maybe the engine could be smart enough. Essentially. That. It would take the compiler high road. Essentially. That it would say like. No
[03:01:36] . You always read it as a value. And you need to use a second special helper. Like. Maybe we could. Get. To that point. And maybe that
[03:01:47]  would. Maybe that would be the trick. But. I think it would have to be a type. Built into the language. So. Yeah. Maybe. Maybe that's
[03:01:53]  what we should do. Maybe. You know. Like those people trying to get JSX in. You know. Maybe we can try and get reactivity in. It
[03:02:04]  would have to be explicit. I think. And like. It's hard. Because. Like. There's a coloration. That happens from reactivity. That you can
[03:02:15] 't. Tell. Like. Async await. Like. Makes it very clear. With your keywords. But if you. Suddenly have a variable in scope. And you're
[03:02:23]  like. Is this reactive or not? I mean. As I say that. Solid. Kind of hides our stuff behind props. And the idea is. You. Like
[03:02:35] . You know. In our scope or context. That you should treat. Things that you care to be reactive. As reactive. And trust in everyone. To be reactive.
[03:02:41]  But that works. Like. Very well in a component. Or a framework mentality. I don't know if that works. As like. A general language feature. Yeah.
[03:02:59]  And I was thinking away. With the reactive script thing. Of how to make the imperative code. More clear. But the problem is. It's kind of like.
[03:03:07]  The. The react server component. Shared components. Client component thing. When you're in a shared component. Like. Like. Some import. Like. Could it
[03:03:16]  be used under reactive scope. Or not reactive scope. And. And actually behave differently. Like. It's kind of a funny question. Right. Because. I don't
[03:03:25]  know if you're familiar. With server components. But essentially. The server components. And the client components. But shared components. Can be descendants of either. And they
[03:03:31]  have stronger restrictions. To them for that reason. But still. They actually can. Can act as either. Depending. And so they have different behavior. Depending. On where
[03:03:41]  they're used. And I think. I think that's dangerous. For something like. Reactivity in a language. Yep. Pointers are a type. So like.
[03:03:53]  Treating them as a type. Is. Is the thing. It just. With JavaScript. It's kind of hidden. So. Like. I don't. I
[03:04:02]  don't know if that's. Like. Makes things too hard. Right. Yeah. I mean. They could. They could. They could. They could solve this.
[03:04:13]  With the right explicit syntax. I'm. I'm more thinking about. How usable this would be. Like. Would you. Like. Even with my reacted script.
[03:04:20]  Idea. I'm still. Proposing it as like. A different type of block. A different language. Essentially. Just using the same syntax. Like. I don't
[03:04:28]  know how you. It'd be interesting to try and mix them. And. Like. Still be very clear. What you're dealing with. Yeah. I don't
[03:04:50]  know if my point's coming across clearly. Because you guys are talking about like. Mechanically. How you do it. I'm not. I. I'm sure they
[03:04:55]  could. Do it. But. It's more of like. What does it actually look like. To use or author. Is what I'm getting at. Like. Will
[03:05:05]  it make sense to you. Yeah. I mean. But it's literally. Taking the Svelte mentality. Of like. Take. Stealing the syntax. To
[03:05:17]  make it behave completely differently. Right. Like. Like. Svelte has. JS syntax. And it looks JS. But it is nothing like. JS. JS.
[03:05:27]  It doesn't. You know what I mean. Like. It's not actually JavaScript. That when you're. You're writing those script tags. It. It just steals
[03:05:33]  the syntax. And that's basically what I'm saying. Like. I looked at Svelte and I was like. Wow. Like. As I mentioned at the beginning
[03:05:38]  of the stream. There are people out there. That are like. It's just JS. Right. Like. That's incredible success at abstraction. If you can convince
[03:05:46]  people that. What's in Svelte script tags is just JavaScript. Right. Like. Like. Like. To take something that is like. Not even remotely true
[03:05:56] . And actually like. Convincingly. Have that. Like. Like. Like. Like. Like. Like. Like that discussion. With a straight face. You
[03:06:06]  know. Like. That. That is very successful abstraction. Yeah. I mean. It's funny. We've been talking about compilation language. And some of the earliest
[03:06:18]  compilation in the JavaScript space was actually Elm. Right. Elm is 2012. That even predates Marco. Right. Elm 2012. Marco 2014. Inba
[03:06:29]  2015. Svelte 2019. In terms of when they went like full compilation into a language. So like. Like. Elm had signals in it. As a primitive
[03:06:43] . But I think over time. They're like. I forget what the pattern is. But they're like. Their model. Like. They have like. Almost like a
[03:06:53] . Redux like pattern baked into it. Kind of. Just was more predominant than any kind of signal. Triggering. There are other languages. And there
[03:07:01] 's a lot of academic papers on the subject. So. Potentially. But this starts entering one of those areas. Kind of like. On the extreme functional programming side of
[03:07:12]  things. Like. You know. We might as well be introducing algebraic effects to JavaScript. You know. Like. Which. You know. If we did that. The
[03:07:19]  React guys would be really happy. Right. Like. It's. It's kind of. At that level. In my opinion. Where. It. It's a
[03:07:28]  mind bend for like. How things semantically work. It seems like it's possible. So maybe this is an area that someone could look into. Yeah. Yeah. I
[03:07:49]  don't know. This is the problem with these things. And I knew. Doing a stream on this would kind of get us. Into this zone. Right. Because
[03:07:57] . Like. As I said. So much cares on syntax. Right. And. These conversations have just been going on. And on. And on. I don't know
[03:08:07]  if I gave it enough attention the other week. Because we weren't focusing on solid. But. Like. Yeah. Right. You can't see the code. But
[03:08:17]  like. No. Not that. Where are we. No. I don't even have it open anymore. Maybe this one. This is like. Hopefully. You guys can
[03:08:33]  see this a bit better. here. But. This is like. Essentially. React. Using. Signals. Without solid. And I'm. I'm not going
[03:08:42]  to show the. The code here. Because. I shouldn't. Because. It didn't want to be shared. But. Like. This doesn't actually change all
[03:08:53]  react acts at all. But. Essentially. Has hooks. And composition. And automatic dependency tracking. All using react. Own primitives. So like. If you look at
[03:09:03]  this logger. It's like. Use the fact. If should log. Console log. Otherwise don't. Right. I love this. Because look. You click this
[03:09:09] . Nothing's happening. Click this. Conditional dependency tracking. Right. In react. This shouldn't even be possible. So. What I'm trying to get at.
[03:09:18]  Is. We can do amazing things. With the right primitives. Even if. Even the bend the model. So. It is only. It's not a matter
[03:09:29]  of what we're. Capable of. But like. Like. What makes sense to do. Like. Is this the best model for react? I don't know.
[03:09:38]  But it's damn cool. That Tanner Lindsay. Was able. To basically. Copy. Solid syntax. And dynamic. Dependency tracking. Without an external subscription system.
[03:09:49]  In react. And still basically. Have it. Act the same as react. Like. Have the dependency arrays. Optionally. If you want. You know. Pull
[03:09:56]  into props. And also. Do conditional tracking. Like this. I think that's insane. So. I mean. There's a lot. You can do. With the
[03:10:07]  right primitives. So. I feel like. This is a huge area. Of research. Research. And. There isn't. A perfect solution. Yet. Right
[03:10:19] . And. It's. It's a lot trickier. Than some people might imagine. Like. In the same way. That I've been saying. Like server side
[03:10:29] . Rendering. Isn't anywhere. Where it needs to be. Like. It's just starting. To get there. Maybe. You know. Like. People were
[03:10:35]  wondering. Like. Because people. Every time. Like a new feature came out. And they're like. They're like. Oh. You know. Blah. Bl
[03:10:41] ah. Blah. This amazing. Best thing ever. And. And they're like. What do you think Ryan. And I'm like. You know. In terms
[03:10:46]  of. Where server side rendering. Needs to be. I think like. I said something. A year or two ago. That I think. Next. JS is
[03:10:51]  like. A two out of ten. And people like. What? I'm like. No. We're like. This is not an insult to Next. JS. We
[03:10:56] 're just like. So far from where we need to be. To actually like. Leverage stuff. And. You know. In the next few years. I think
[03:11:06]  we're going to get. To a much better place. And I think on the. Syntax compiler thing. Like. There's still so much. To solve.
[03:11:13]  Which is a completely different thing. Than say like. Dom. Performance. Rendering Benchmarks. We've capped those. The JS Framework Benchmark
[03:11:20] . Like. We're not. We're not. See. There's no. We're not seeing any more improvement. Here. But. There are other interesting areas.
[03:11:31]  Of research. And for me. I've. I've taken all myself. To look at the. The server side. That's why I'm not working. On Re
[03:11:37] active Script. I'm. I want to solve. I want to. I want to get server rendering. From a three out of ten. To like an eight out of
[03:11:44]  ten. Or better. Right. But. I think this is another area. That's really worth attention. And can people kind of work through. And think through.
[03:11:54]  But it's going to take a lot of work. And a lot of trial and error. So anyway. I don't know. That's. That's kind of
[03:12:11] . Where I was at. I don't need to really say much more about this. If anyone else has any more questions. Otherwise. You know. I'm pretty good
[03:12:20]  on this. This is really all I wanted to. To talk about this week. I just wanted to. Kind of show some different types of syntax. And understand and
[03:12:28]  talk a bit about the trade-offs. As I said. And. There's. There's so much in this area. Like. There's an old tweet a while
[03:12:36]  ago. That I think. Jason Miller was making Svelte a pre-act compilation. Like. There. There's so much. Being done. And that.
[03:12:46]  Like. Can be done here. We're just scratching the surface. As I said. Svelte's kind of led the way forward. And we can now see.
[03:12:55]  That this is a possible future for us. But. As I said. Svelte where it is today. Is also kind of like a two out of ten. You
[03:13:02]  know. Like. Like in terms of. Of what we can do here. So. Yeah. I'm really excited for the future. See what we're. We
[03:13:10] 're. We're going to build. And. Yeah. I think. If you haven't. You should watch that Marco stream from two weeks ago. I know I've
[03:13:20]  said that like. Several times through every stream. But like. If. If you're interested at all. What the future could look like. Like. There's a lot
[03:13:30]  of really. Cool. Futuristic stuff on that side. Of the thing. I'm hoping. That I can talk about. More about what the other side looks
[03:13:39]  like. In the coming weeks. Because I've been. I've been giving a lot of thought. Of what this means for solid. But. For now. I'm
[03:13:48]  kind of. As I said. Focusing on. SSR. And focusing on what. Needs to come out. For the immediate stuff. We're working a
[03:13:55]  lot on solid start. And we'll be demoing that in. Upcoming weeks on the stream. We think we've done some really cool stuff. And. It
[03:14:04] 's. It's going to be really. Great to finally showcase it off. Yeah. No. I've never looked at Julia. There's. There's. There's
[03:14:13] . There's. There's a few. Let's see if I can find it here. There. There's. There is a few. Really interesting. Things.
[03:14:28]  Like on the language side. Yeah. I mean. They're going to give me an example. There's. There's definitely really. Cool things. Especially on the more
[03:14:46]  academic side of things. and the functional programming side of things. But like. This is like. Literally like. I want like examples. Not like. Not like.
[03:14:58]  Yeah. I don't know. I'll have to leave this for another time. I think. Yeah. There's so much in this area. I. I.
[03:15:17]  I. I dropped something. In. In the. Solid discord. A few weeks ago. That it was shared with me. I think Michael Rawlings. Shared it
[03:15:25]  with me. It was like. Basically like. Never create your own language. Yeah. Like. You'll never be satisfied. With any other language again. Or something along
[03:15:32]  that. It was a whole article. And it was hilarious. And. That's the thing. Like. There's so many aspects of this. And so many considerations
[03:15:41] . When you go into actually building these things. That. It. Makes it hard. To accept the status quo. In a lot of cases. But it also. Like
[03:15:51]  there's so many choices. And micro decisions. And impact. And use trade-offs. That you. Like. Like. There's just. It's. It
[03:16:00] 's kind of like a land of. It feels like almost infinite possibility. And. For every one of those possibilities. Only. A fraction are ever going to succeed. Or
[03:16:12]  get anywhere. So it's kind of like. You have to be doing it. Because. Of love of doing it. You want to. Find and explore. And learn
[03:16:23] . And. You know. What actually ends up sticking. Or actually is the future. Is a whole. Separate question. Yeah. Constraints are key.
[03:16:36]  Yeah. And I think that's with. Any kind of design thing. You have to know. What you're building towards. And constraints are key. Constraints are
[03:16:44]  also like. Technical debt on arrival. Sort of. I mean. Depends on. Depends on what you're doing. Obviously. But it's like one of those
[03:16:51]  things. Where like. By setting. The limits. That's your only way. Of actually being able to accomplish. Anything. But it's also like. Your base
[03:17:01]  assumptions. That are the things. That are hard to. Get away from. Which is why we have these cycles. Which is why. A javascript framework. Might
[03:17:09]  last five to seven years. Before. The next thing shows up. Because. You have to be able to work off. Those base. Assumptions. that's
[03:17:18]  how you push things forward. That's how you push things forward. And they all. They just keep on tweaking slightly. And just enough. That we reinvent the wheel
[03:17:23] . Over and over again. And I don't think that's a bad thing. I know. Like. That's where. You know. The sort of hope that.
[03:17:32]  You know. Oh. If we bring JSX into the browser. You know. Hope that. Like. We. Sort of. Kind of avoided. You know.
[03:17:40]  Make a standard way. Like standardization. Always trails innovation. And. We have to. We have to be careful with standardization. You can't be too ambitious.
[03:17:53]  And I think. I think baby steps. I think that's. That's the. That's the thing. But it's really hard. Because baby steps. If
[03:18:02]  you take a. A purely piecewise baby steps. Kind of. Look. You might not actually end up. With a cohesive product at the end. So there's a
[03:18:12]  whole different set of. Guidelines you have when designing. And standardizing a platform. Than you have when. You know. Boldly innovating along a certain space.
[03:18:21]  With a certain project. Or with a certain library. I feel like. In any art. The love of doing it. Pushes it a lot further. Than the
[03:18:43]  financial concerns. Though. And it's the people that find the future. Yeah. No. And that's the thing. There's. There's some amazing people. Working
[03:18:50]  on these projects. Looking into these things. I have an incredible amount of respect. For Rich Harris. And Evan Yu. And all the React Core team. And you
[03:19:00]  know. Who else is working on salt? Ben McCann. Luke Edwards. I know who all these people are. They do amazing work. And. And you know.
[03:19:14]  Obviously the Marco team. Michael and Dylan are both in chat. But just. Just. It's so exciting to work in a space. With so many intelligent people.
[03:19:26]  Like. Kind of just constantly wanting to push the boundaries. I know people. Like from a consumer standpoint. They're just like. Do we need to do this? Are
[03:19:35]  you just catering to Meta or eBay's use case? I just wanted to build a website. I mean. I can identify with that. I've been there
[03:19:49]  a couple of times. You know. As like building a storefront. For when my wife had a spa. Or like our wedding website. And I was like. Bringing
[03:19:58]  in like the full front end framework. And I was like. Oh geez. Like I probably could have gone a different way. You know. Things can get complicated.
[03:20:07]  But if you. If you see the work that everyone's doing. Like. There's so much care and sensitivity. Like that goes into considering those user experiences. And so
[03:20:16] . Because it's. It's not just about the performance. And the optimizations. Like people kind of get. Think about that. And they. They go. Oh
[03:20:23]  you know. Always just trying to like. Get that last little bit. For you know. Such and such as use case. But if we. If we wanted to
[03:20:31]  make something super. Super performant. There's always a solution to do that. It's called vanilla JS. Like literally. You can make something really. Not ergonomic
[03:20:43] . Perhaps. Not. Like as smooth to use. Expect everyone who uses it. To be an expert. And then. Sure. We can make the most performant thing
[03:20:52]  you've ever seen. And it would be a lot less work. Than trying to make a framework. But the. The work for the frameworks. Is all about developer experience
[03:20:59] . It's. It's. It's marrying those aspects together. People. Like people. When. When people criticize. Like developer experience. And stuff. On certain
[03:21:09]  tools. You just go like. Yeah. Okay. It's not as good as maybe you'd want to be. But like. It's. The amount of thought.
[03:21:14]  And concern that goes into that. From design perspective. Is immense. Because I said. There's a billion ways. You can get the performance. Without caring about the.
[03:21:21]  The developer. Like. Like. But. You want it to be fun. You want it to. Give. Be empowering. You want to make the developer feel like
[03:21:33]  they're in control. That their thoughts can be translated. You know. And this is like the number one concern. Even beyond the performance and whatnot. Because I said
[03:21:45] . That's. That's always achievable. It's whether we can have people feel productive. And be happy about it during. During it. I mean. That's
[03:21:56] . That's what we do. That's why we do this. Yeah. Sorry. Back to my comment a few days. A few. A few minutes ago.
[03:22:09]  Yeah. Exactly. This is the problem with baby steps. Because then you don't get the cohesive picture. So. This is a very hard place to be with. I
[03:22:15]  think some of the CSS stuff. That's been pushed. And some of the. Kind of like. The approach to web components in general. Has been a bit of this
[03:22:22] . Like. It's a combination of like. Super ambitious things. And little things. And trying to. Build towards this. Piece. It's harder for me to identify
[03:22:31] . On the standardization side. I just haven't been there. I think it's a much harder problem. Than the problem. That. We're working on.
[03:22:40]  In a sense. When we're working on the frameworks. As I mentioned. We only have to worry about. Our customers. In a sense. Or like our potential customers
[03:22:46] . Or like people who would be. Developers. And their potential. Consumers of their thing. When you're designing. And standardizing for a platform. Your
[03:22:56]  scope is even wider than that. And that seems like. It's incredibly difficult. Just write in binary. Yeah. There you go. Nothing beats that. So.
[03:23:10]  We wouldn't have a stream. Like tonight. If everything was written in binary. Really easy. Syntax choice there. Right. Tabs versus spaces. Right.
[03:23:24]  Oh. Sorry. It's just. It's just. It's. It's incredible. The amount of things. And thought that go into these pieces. And how
[03:23:43]  non-obvious. The outcome. For these decisions. May or may not be. And the rippling side effects. In terms of like. The implications. That
[03:23:52]  they have on others. It's like. It's a very powerful thing. And it's also like. A very like. Like. Foray into the unknown.
[03:24:08]  Like you. You don't know. So. Yeah. I'm glad that. People are. Continuing to work on things. To continue to make things better. Make
[03:24:19]  it easier. You know. Work on the web. And I think. That. That's. You know. All the articles. That we read. You know. Like
[03:24:26] . The one from Igor. And Taylor. From this week. Were both really. Great stories of. You know. Looking at. You know. Like. Somewhat
[03:24:40] . Like. Working through this. For. Quite some time. You know. In Igor's case. He's talking about. The last decade. But even Taylor's.
[03:24:46]  Probably the last two years. And. And these are. Like. These are. Like. Real stories. And things that we can learn from. So. I don't
[03:24:53]  know. I'm just sort of. Sort of rambling on. At this point. So. Yeah. I don't know. If I have much more to say
[03:25:03] . I. I. I just. I just think. That it's incredible. To see. The. Like. The nuance. That comes into. You know. The
[03:25:10]  impact of. Everything from. Like. Syntax. And. And. You know. And the way people get rallied. Behind. The. Their favorite tools.
[03:25:21]  You know. And the. Like. And. You know. The way things have to be. For them to feel comfortable. For things to work. This is.
[03:25:31]  This is something that. Is kind of. It feels. Sometimes. Always just outside of your grasp. As a framework designer. And it's like. It's almost like
[03:25:42]  fashion. It just kind of. It rolls. And with the trends. So. Yeah. I'm interested to see where it goes. That's all I got to say
[03:25:49] . Anyways. I think I've given everyone. Enough time to ask questions. So I'm going to call it a night. I. The last half an hour. Has
[03:25:55]  just been me meandering. As I usually do. So. Let's just. Let's just call it. I vote Vanilla.js. Yeah. But
[03:26:01]  it was a. Like never bet against Vanilla.js. Or now it's never bet against Vanilla.js. And Wasm. But I'm going to keep
[03:26:10]  it. With never bet against Vanilla.js. Brendan Eich statement. Anyways. Yeah. I hope some people got some value from the stream. Thank you all for
[03:26:19] . For joining me. And. Yeah. Have a good night. I'll. See ya.