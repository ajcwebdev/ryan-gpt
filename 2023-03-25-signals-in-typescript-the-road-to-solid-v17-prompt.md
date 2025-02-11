---
showLink: "https://www.youtube.com/watch?v=2fW6JaJHoCE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Signals in TypeScript: The Road to Solid v1.7"
description: ""
publishDate: "2023-03-25"
coverImage: "https://i.ytimg.com/vi/2fW6JaJHoCE/maxresdefault.jpg"
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

[00:00:00]  - Hey everyone, welcome to my stream today. Sorry, just, just, there we go. How's everyone doing today? Come say hi in the chat. Plus,
[00:00:12]  you know, get past that Twitch pre-roll if that's how you're joining on. Let's see here. Okay, cool. Today, I wanna talk about Solid
[00:00:28]  1.7. I've been like pushing this one off for weeks. And I honestly thought it would be released by now, but here we are. And that's
[00:00:39]  largely kind of my own fault because I knew that I was gonna make this release all about TypeScript, which meant kind of getting up to date and understanding where, you know
[00:00:56] , we were on TypeScript and, you know, what was possible and not possible. Biggest challenge for me is I am not a TypeScript aficiado
[00:01:05] . You know, like I am passable at TypeScript. I understand enough to make it work. I've said this many times before. If Solid has good types
[00:01:16] , it's thanks to Otanashi, who basically, if not providing the types of cells, basically has guided every TypeScript decision in the repo. So, it
[00:01:31]  is not me. I am not particularly good at TypeScript. I don't think in TypeScript. I don't know if thinking in TypeScript is, I guess thinking
[00:01:40]  in TypeScript is a thing, right? It's kind of funny because like, I previously, there's like a time gap between like, when I was originally doing JavaScript
[00:01:55] , and then, when I got back into JavaScript and in that middle time period, I obviously used a lot of Java, VisualBasic.net, and C
[00:02:03] #.net, and C# in general. I was building game engines in C+ and C# as well. And like, those as typed languages, I'll
[00:02:12]  get. TypeScript, I don't. For some reason, TypeScript is like this weird language that's an anomaly to me. So, part of this process for me
[00:02:24]  has been talking to people who either understand TypeScript better or have a unique perspective on TypeScript. Because for me, TypeScript feels a lot like art, like painting.
[00:02:36]  You know, you're kind of like, you kind of like, get a feel for it. And then, you know, kind of like, paint it on as
[00:02:43]  this like, extra color. You know, like, Bob Ross adding little, you know, green bits to his, you know, trees. It's, it's
[00:02:57] , it's an interesting, it's an interesting challenge for me, definitely. So, yeah, seeing some people join up on the stream while we're getting this rolling.
[00:03:10]  I'm going to, I'm going to retweet here that we're live. We're, we're, we're, we're, where's my stream advertisement
[00:03:16] ? I don't know if you guys like the thumbnail. Some people were, let me actually share my screen for a second here. Uh, present, this is your
[00:03:25]  screen. Oh, I'm right, I'm alive. I can't show the thumbnail anymore. It's all good. Um, uh, silly me. Uh,
[00:03:47]  but yeah, this was not a result of me trying to game the algorithm as, uh, some people might think. I honestly usually try and come up with some kind of
[00:03:59]  clever symbolism or some kind of connection in my, in thumbnails, or I get David to make them, which is, you know, much better option. But this time I
[00:04:07]  literally just couldn't think of a better cover. I was like, this, this is all about me puzzling over TypeScript. So, you know, that's
[00:04:18] , that's, that's where I'm at. This is the most accurate cover I could come up with. I hope that's right. I always like forget if that
[00:04:34] 's right. sanity check. Yeah. Okay. We're good. So how are you doing today, chat? I'm doing pretty good. Luckily for me, I
[00:04:50] 'm West Coast. So, you know, spending six hours on a Twitter space last night with, um, Theo, Dan Abramoff, Dan Jutan, a few
[00:05:00]  others joined in at various points. Ben Humphrey, uh, Sophie Albert. So yeah, it was, it was incredible stream or space. It was actually two
[00:05:17]  spaces each, like two to three hours each. And, uh, I don't know, maybe my voice is a little scratchy after that. But luckily for me,
[00:05:26]  it was only midnight when we ended and I still had time to work on some stuff. But, uh, yeah, let's, let's see how we're doing
[00:05:33]  chat. Hey. Hey everyone. Yeah. Just catching up. I don't like TypeScript at all. And you don't even, are you a library or framework
[00:05:48]  author? Uh. Hey. No, not late at all. I'm, I like wasting time at the beginning here because we got pre-rolls and, you know
[00:06:03] , I should have some cool intro music, you know, like coming soon. But this is, this is me on StreamYard. This is about like as high
[00:06:11]  tech as I get. Thinking TypeScript is creating interfaces first. I mean, I think a lot of time when design, you can kind of approach design like that. The
[00:06:26]  problem is what if TypeScript can't represent that interface? I think this is one of the things I find the most amusing about people who are like really into TypeScript
[00:06:36]  and then people who tolerate it is like. People really into TypeScript will tell you that TypeScript is a superset of JavaScript. Whereas in my opinion, I mean,
[00:06:48]  it's fine. It's a, it's a very powerful subset, but TypeScript is a subset of JavaScript. It's just a very powerful, I realized that
[00:06:55]  you could just like opt out of things and then like use the full power of JavaScript, but no one actually wants to do that pretty much ever. So it's like in
[00:07:05]  practice, it's like TypeScript is a very powerful subset of JavaScript is the best way to put it, which, you know, having strong limitations is a powerful thing,
[00:07:15]  especially from a design standpoint. Yeah. I mean, JavaScript was never designed for it. So this is a, one of those challenges. My problem with types is it
[00:07:36] 's fun. I was creating the most correct types than writing the code. Yeah. So this is, this is kind of funny thing, right? When you think about
[00:07:42]  like meta programming or whatever, like you, we've got a program to program our programming language. Like we get into this kind of zone where it's like, you can
[00:07:49]  actually just spend. You know, hours perfecting the, like this layer on top of the actual functionality of the code without actually changing the functionality of the code. I definitely
[00:08:03]  found that when I was working, um, when, at least on my first TypeScript code base, a large one, when we were writing a new react app at
[00:08:13]  my startup, I was at, um, all in TypeScript on the client and the back end. The back end was actually really easy, but on this, on the
[00:08:20] , in the client, we, we definitely were learning things as we were going. So like we spent an enormous amount of time just like trying to perfect how types work.
[00:08:35]  Yeah, yeah, yeah, yeah, exactly. That's the thing you, you, there's like different styles and different things. So you could like, you can
[00:08:44]  definitely like think about it like the painters, like, um, yeah, I, I, I like this. You can do that parasocial. It's better
[00:08:59]  than being called someone I suppose. Thanks. Yeah. Um, I made it that one myself too. So this might be the best thumbnail I've ever made. All
[00:09:27]  right. How am I doing, Chad? I'm just, we're, we're, we're, oh, we're already 10 minutes in. Jeez. We wasted
[00:09:32]  more time than usual. That's the thing. You're always going to find these exceptions and it's, it's, it's, I've, I've learned
[00:09:48]  a lot about TypeScript in this process and that's kind of why I wanted to share it. Like we're going to cover the 1.7 release and look at the
[00:09:52]  features and how I developed them, which is always fun. Some of my people's favorite streams, especially after the fact, like almost these streams always get the most watched because
[00:10:02]  like I go into how I build the framework or approach the design problems. But, um, this one just felt like it had that TypeScript element to it. I
[00:10:10]  wish people listened to me. Is this, this is, this is about the, uh, the recording. Um, I suppose about that Twitter space. Yeah. Uh
[00:10:25] , yeah. It's so random too. Every time this happens, and I'm sorry, we, we never advertise. It happens really randomly. It's happened twice now
[00:10:35]  with Dan Abramoff, but we've had a few other of these runaway ones where like, it'll start with like Jacob or Theo, but you know, just
[00:10:43]  doing like a random stream, you know, talking about topic, like, Hey, I want to talk about blank. Like Theo did this, I want to talk about
[00:10:49]  server components, um, space. Like, um, I want to say maybe it was like a week, two weeks ago, like at the beginning of like everyone talking about
[00:10:59]  server components again. And it, you know, we just hung out and talked a lot about, you know, we didn't get really technical. Um, I was there
[00:11:07] , but I was trying to like hold back and we, we just kind of talked about, you know, like DX and how this is like a new thing and looking at
[00:11:16]  how people create content and all this kind of stuff. But you know, then what happens is, you know, they're having this debate because, uh, I forget
[00:11:25]  his name, but some, someone's on the space debating the merits of Svelte's DX versus React's DX. And I was like, okay, I'll bite
[00:11:33]  because I'm actually a pretty big supporter of React's developer experience. I understand where Svelte comes from, but there's like trade-offs there. And at
[00:11:41]  a certain point while, you know, I'm talking and I see Dan in the audience, I, I, you know, you, you kind of bait people up.
[00:11:50]  I was like, we were talking about dependency arrays and it's kind of like, it's interesting, like the shift of React from, you know, being explicit to maybe
[00:11:58]  being more implicit, especially with the compiler. And then actually, no Dan's there and we just kept on going. So, you know, not planned, completely imp
[00:12:06] romptu, um, you know, so yeah, it's, it's tricky. The recording would have been good. The recording would have been good. We talked
[00:12:16]  about a lot of stuff. I mean, a lot of it was like, you could have to listen to it twice to really let it sink in, which is probably why
[00:12:21]  the recording would have even been better. But, um, I learned things, uh, which was huge for me because it's sometimes hard. There's like a couple
[00:12:30]  details that I almost have to be in a conversation for an hour or two to actually get around to, to be like, wait a second, let's clarify that. Um
[00:12:38] , yeah, sorry, enough on that. And I'm probably giving people even more FOMO about it. We'll talk about it maybe a little bit later in
[00:12:49]  this week in JavaScript, if you know, about any kind of like specific elements of it. But when do you sleep? I'm dead at midnight. Yeah. I was
[00:13:00]  starting to get pretty tired. Yeah. Well, I mean, and that TypeScript can't assume things. And I, I think ultimately where we land is understanding that.
[00:13:15]  And actually I I'm going to tell you, Greg, Rust has been more and more of the influence of my decision-making recently because it, Rust has been showing
[00:13:23]  me what the almost complete opposite mindset looks like. And I, I noticed it the second that, uh, you showed me how to code Rust on a previous stream. For
[00:13:34]  those who haven't checked it out, um, Greg joins me on stream about, I think in December, uh, talking about his library Leptos, which is
[00:13:43]  a, it's, it's very similar. It uses the same kind of foundation fundamentals as solid, but written in Rust and WebAssembly. Um, and he was
[00:13:53]  teaching me Rust because like, I understood the reactivity. I understand the model. I understand the rendering. I understand like how that works. So in that way we could
[00:14:01]  build something. And the only difference I had to worry about was the language pieces rather than like the rest of the functionality, because like there's differences, but Lept
[00:14:10] os to solid are very close on like a surface one-to-one kind of basis. And the one thing that I really stuck stuck with me with the Rust stuff was
[00:14:19]  like how explicit and like how you, you had to like work around stuff to make it happy. But when you made it happy, you knew you were done. And
[00:14:27]  when you made it unhappy, it gave you just great immediate feedback. And I realized like watching the trend with people in TypeScript that, um, this is like what we
[00:14:39]  want. It's that shift left, you know, like get errors while I'm typing. The sooner you can find them, the better. And intuitively we know this
[00:14:48] , but you know, this is very different. I came from a, I, you know, sometimes like when people at the beginning, you want those guardrails,
[00:14:58]  you want them, they're fixed. When you're a bit like maybe more like senior developer, you know that there's, uh, there's, there's exceptions to
[00:15:07]  every rule. So getting warned or, you know, getting pestered about stuff that you know that you can get around and you know what you're doing. It
[00:15:14] 's really, really annoying. And when I built solid, I just inherently brought that mentality with me. There were rules, things I was very strict about because I understand the
[00:15:26]  importance of them. But there are other things where I was like, you know, I'm not going to stop you. And after the whole signals, like where all the
[00:15:37]  react core team kind of came out and like Devon from parcel and a bunch of them were kind of like poking at like our model, I started thinking like maybe the
[00:15:48]  rust approach is just more clear to people. Cause it's not like what we're doing is actually breaking anything, but like, how do you deal with react brain?
[00:15:56]  I actually loved, uh, last night in the space, Dan admitted or kind of like put out there that react brain was real. Um, so like, how, how
[00:16:06]  do you, how do you, you know, like if this is kind of guided the ecosystem and people see stuff in a certain way, even if it's not like necessarily
[00:16:14]  the truth or the only way to look at something, how, how do you like give them those tools? Right. And what came out of that discussion was that Dan
[00:16:23]  basically was like, yeah, he, he, he's like, when I went and played with solid, um, let me reset this. What is this? I don
[00:16:30] 't even remember. Okay. Yeah. This is from previous stream. He goes, when I go play with solid now, and I do this. ESLint tells
[00:16:39]  me that this is no good. Uh, sorry. Let me move this over to my screen here. Let me get this. Yeah. Sorry. Where I was going here
[00:16:48]  is when I like, if, when, when he first tried solid, this wouldn't, wouldn't warn or do anything. And it's a simple thing like this,
[00:17:03]  but this kind of guideline, right. When you get that first counter, like if you've come in and you think you're using react and you go, okay.
[00:17:10]  Yeah. Count set, count increment button count. And you just kind of go here. This first squiggly line is the best thing possible from, from my perspective, because
[00:17:22]  technically. And I can get into that a bit later. Solid actually accepts the functions directly, but we don't want you to. It's not idiomatic, um,
[00:17:32]  for lots of reasons. And this is like the first indicator, like, Hey, you're in a different place. Like this is not react anymore. And I started
[00:17:42]  thinking about the effect of that as a lot of tooling. And that basically is what guided me to deciding what we should put in solid 1.7. That's, that
[00:17:52] 's the kind of origins of solid 1.7. This is my wife. Yeah. Yeah. That's not true. I sleep some. Yeah. Just catching up
[00:18:12]  on chat. There's a lot of you. Everyone has a TypeScript story, right? My team is knowing the right functional code, you know? Yeah. Like
[00:18:24] , sorry, I put that down too fast. Like you said, it's a subset, not a superset. Yeah. Okay. Don't get me wrong. Type
[00:18:34] Script is incredibly valuable, like incredibly valuable. I'm not a TypeScript hater. I'm just a TypeScript realist. Like my example here, TypeScript is
[00:18:43]  just like the best linter that, that, that we have. Like it's like the best auto linter. I, I'm, I have to admit,
[00:18:50]  I don't trust TypeScript completely because I'm aware of all the places, not all the places, but many of the places it breaks down. But the, in those
[00:18:59]  cases, the proper answer is like, be less strict, don't lie. And that's been kind of the challenge that we've had to, to play it through
[00:19:07]  here. All right. Let's keep on going. Elixir. People are talking about Rust because I was waxing poetic about it. Yeah. If you have any
[00:19:29]  misconceptions about where, or questions about where Wasm is, I do really strongly suggest watching one of Greg's videos. He, let me see if I can find one
[00:19:38]  right now for us right now. Let's see. I don't know if, is it, is it just Greg? Maybe I should go to Twitter. I can find
[00:19:44]  it. I'm not going to find Greg Johnson, Greg Wasm, maybe. Here we go. See, Greg Wasm. That can be his name. Truth about
[00:19:55]  Rust and WebAssembly performance. Here you go. Get rid of that timestamp because you are not me. And you don't need to jump to where I was
[00:20:04]  watching the video. This video is great and it clears up a lot of the misconceptions. It's true. Wasm doesn't directly interact with a DOM, but that's
[00:20:15]  actually not where the bottleneck is. So yeah, check this out. Yeah. The thing is, I've never really used a linter. You got to
[00:20:38] , this is coming back to my whole thing, right? I, if, if a linter would even yell at me once in a place where I'm like, no
[00:20:44] , I want to do that. I just feel like throw the whole thing out. Like I'm, I, you are not helping me. And I, I, I
[00:20:50]  even felt a little bit about that with TypeScript, but like linters notoriously have annoyed me. I'm, I, but I, I'm, you know
[00:21:00] , it's, what's the, you can't teach an old dog new tricks. Like I, I, I like to think that I'm, I'm, I
[00:21:05] 'm as open-minded as I can be given, you know, how ancient I am when it comes, you know, in the scheme of web dev. So,
[00:21:15]  but yeah, I, I, this is the only reason why it's not present because I, like I never trusted that it wouldn't annoy people. But I, I
[00:21:23]  think people don't mind being annoyed. They're kind of like used to it now. Like that's the difference. Do, don't have ad blocking? Nah.
[00:21:42]  I mean, I have some ad blocking, but not like specialized stuff. Actually on this computer, I don't even have it. I think that's where you, you
[00:21:47]  hit on the head. This is the thing though. It's kind of like one of those, like. Sometimes going to the opposite extreme is acceptable. It's just the
[00:22:06]  middle ground that sucks. I, I think that's the best way I can put it. Compromise is like the worst. Um, so when I saw Rust
[00:22:15] , I was like, okay, this is a different model consistently true to itself. It's kind of like, this is, this is how I'm able to appreciate things
[00:22:24]  like React. Um, it's, it's, it's when you get messy in the middle that I have less patience. Probably why I've had, you know,
[00:22:32]  a harder time with you, for example. Um, and yeah, it's, it's, it's tricky though. Cause it, no one's completely in the
[00:22:42]  middle or completely on side. This is always a gray spectrum, but it's the perception. Yeah. I mean, that's a hard line and I, I feel
[00:23:02]  like that might, you know, be the final answer. You know, we talked about a strict mode, uh, stream or two back, you know, like maybe,
[00:23:10]  I mean, that that's, that's a runtime mechanism, but like, still like that. Maybe we should be okay with being like, not a warning. Be
[00:23:20]  like, no, like you're done, you know, anyway, enough on that. Um, let's, let's get started here. Cause I mean, we're
[00:23:35]  already getting started. So let's just keep on rolling. Kind of put 1.7 in the spectrum and I, I don't have like the full, like nice
[00:23:45]  release notes. I just have like the, the, the change log that's nice. And this will become like the release article, but it's just like the rough version
[00:23:53] . Put it simply, what, where solid 1.7 kind of fits into the, the timeline of things here is that solid 1.0 took a while to come out
[00:24:05] . Cause I delayed it for server rendering. I like knew we wanted server rendering. So in like 2019, instead of just like going one 2.0, I spent
[00:24:12]  like another two years doing a bunch of server rendering stuff. The truth was I didn't actually finish that story until like solid 1.3. So everything from solid 1 to
[00:24:22]  1.3, like in my head was the true 1.0. But like anyone who knows when dealing with deadlines, you just put out, you know, what
[00:24:31]  you can and then kind of get there in the next couple of releases. And you might be like, why is there a deadline? Well, I wanted to get to a
[00:24:39]  point where people could trust using solid in production. And that's an important milestone to hit. So, you know, we were pragmatic, practical about it, decided on,
[00:24:51]  you know, pretty good API choices and got all the way through solid to solid 1.3, which is all in the first six months of that, I think,
[00:24:59]  December 2021 was when solid 1.3 came up. But 2022 was a much more interesting year because at that point it was, it was like, okay, roughly, we
[00:25:12] 're going to start working towards a solid 2.0. But now people are actually using this thing. Let's, you know, we start finding the quirks, you
[00:25:20]  know, things you only find when people are actually using stuff in production. You're actually getting downloads. You're actually like building real projects that aren't hacker news clones
[00:25:28] , you know, or real world demo or, you know, to do MVC. Like, I guess movies app is a new one. Like when you're just not
[00:25:36]  building like the simple basic things, the basic ones are good or in showing like, I have all the features I need to tell the story, but they're not good to
[00:25:44]  handle like, you know, what random developer decides is a good idea to do. And this led us to, in solid 1.4, kind of doing our first
[00:25:56]  check of like, oh, there's some inconsistencies in the model, specifically around the way we were batching updates. So we did, we did some work
[00:26:05]  there. Unfortunately, the fix, which made everything more correct, you know, from like the, I don't know what use the word, the react use of the word
[00:26:14]  correct, I guess, or whatever the functional programming use of the correct, it actually broke a bunch of our stuff. And I, it wasn't the stuff that I
[00:26:25]  used, right? This is the kind of thing is like people using things like create mutable, which again, we're already kind of warned, like you probably shouldn't
[00:26:31]  be doing this, but take my philosophy. I was like, you know, coming into 1.0, I was like, look, I can't stop people from doing
[00:26:38]  stuff. So should I let them go do that stuff themselves? Or should I just write it myself so that they have a good version of it? That was like my,
[00:26:47]  my thinking, like, if people are going to want a mutable proxy, they're going to hack together some terrible stuff, potentially, you know, until they figure
[00:26:55]  it out or learn like what they need to, why don't I just make it? And we didn't, we hadn't really established solid primitives at the time.
[00:27:03]  So we didn't have a really good home. Solid primitives, if for those who haven't seen is this amazing collection of, of like, it even has its own
[00:27:13]  website now of like hooks basically, or, you know, that you can use with solid, it's a full set of like, I'm still scrolling, right,
[00:27:23]  of different libraries and like mini packages to do all sorts of patterns in your solid app. And essentially, with that that kind of home, I was just building stuff in core
[00:27:39]  that maybe wasn't the most core, but like, was common enough for, you know, people complained about enough. And I didn't I what the here's the
[00:27:48]  thing, when you're building with primitives, you can kind of get away with it a bit. Because like, if it's not too entangled with the rest of
[00:27:54]  the system, you can always like move it to a different package later, you know, deprecate it, replace it, whatever, because the primitive itself is really
[00:28:02]  modular. So like, it's not, it's not like, I didn't feel too tied down to it, you know, if, if, you know, one
[00:28:10]  day, I didn't want create mutable somewhere, we could find a new home for it. And then people just have to update their imports, you know, like,
[00:28:16]  that's not a difficult, you know, code mod or whatever that would need to happen. And essentially, that was kind of the situation where I was very much focused
[00:28:30]  on like, what we were doing, and like, like the vision, and miss that, like, I had introduced a few things that maybe I personally even didn't like
[00:28:40] , and kind of broke it. So 1.5, we we kind of fixed that up, got ourselves in a good place and gave us a better understanding where we
[00:28:47]  want to head for the future. That's when we understood that we want to do lazy, change the batching for 2.0, like, do a lot of,
[00:28:54]  you know, kind of like, really define our model. And we created the solid working group on reactivity at that time, and started the conversation. And since yeah,
[00:29:05]  since the summer, we've been working on solid 2.0's new reactivity model. But after that, it wasn't really clear, like, if there would be
[00:29:14]  any more releases, and what they would look like. So like solid 1.6 had some stuff, but it was mostly to support partial hydration and server components in solid
[00:29:24] . And we did a great stream on that. So it was pretty cool. But 1.7, you know, similarly, I wasn't sure what it was going to
[00:29:31]  be, it looked like it was gonna be some dev tooling improvements and performance improvements for our dev tools. For those who haven't seen it. I've shared it several times
[00:29:39]  on stream, but solid dev tools are really coming along. And they have the ability to visualize the reactive graph, which is crazy, because then you can like see with
[00:29:48]  any change you make, you can actually see it propagate through your app. It's not a component thing. It's like you can see the flow of data. I mean
[00:29:54] , there's component tree as well. So you can like have both views, but really, really quite cool. And, you know, understanding all of this stuff.
[00:30:06]  It wasn't honestly, as I said, it wasn't until that whole, you know, signals thing that happened, that I was like, okay, the gist
[00:30:16]  of it was, yeah, sure, ESLint, squiggly line. But why can't types, why isn't that, why is that a yellow line there?
[00:30:27]  Why isn't it not a red line? Right? Why can't typescript be, be that? Why can't we just use the best linter we have available that
[00:30:38]  almost everyone's using in every project? I got some notifications on Twitch. Sorry, catching up. Thank you. Insanity later with tier one subs for six months
[00:30:46] . What else do I get notified? And JulianNG, another tier one subs, subscribed for three months now. Thank you so much. I very much appreciate you coming back
[00:30:55]  with the subs. Oh, uh, uh, uh, Dev with Prime Sub. Three months. Yeah, a lot of people, I guess, new crew kind of come
[00:31:03]  in. Gabriel, well, there's been a whole bunch of subs. Uh, thank you so much. Sorry for not keeping up with Twitch. I really appreciate you
[00:31:12]  guys taking the time to show the support and also save your guys from those terrible, terrible ads. They're not that terrible, but I'm just not, I was thinking
[00:31:21]  about, you know, doing what, you know, other streamers do where they like take a pause for an ad break and stuff. I just never, like, you
[00:31:27]  guys know how the stream goes, just like streaming conscious at the top of the head. Especially when you have guests, I find it really hard. Like if your guest
[00:31:32]  is for like 30, 45 minutes, you can like make a scheduled pause and I guess you can kind of work that into your flow. But like, yeah, I don
[00:31:39] 't know. I feel like, um, yeah, it's too much for me to think about. Oh, thank you, uh, Kyle for the, uh, Prime
[00:31:48]  Sub. Very nice. First time sub here. Yeah. All right. Create signal needs better types. Probably. I don't know. Uh, I, I there
[00:32:07] , that might be true as well. I create signal seems like a fairly simple primitive to type from the, like, like the basic sense. The problem with signals is a
[00:32:20]  little bit trickier. Um, and we should get into that, but for me, this is where it started. You know, you start kind of going, can
[00:32:29]  we do more with the tooling to like indicate that, you know, like right from your first experience that you're, you're in a different paradigm. I also started getting
[00:32:43]  interesting issues on GitHub. Okay. Can I, can I like, let me show you, show you one of those interesting issues on GitHub. People would do stuff like this
[00:32:52]  and, and okay. See, this works because I I told you solid accepts functions technically because it needs to, because of dynamic control flow, it needs to like the
[00:33:05]  function or the signal, whatever has to get down to the rendering. But this makes no sense from my perspective, like, or anyone's like in it, like why should
[00:33:17]  a Dom node accept a function like as children? And what if this is capital button? Do you know what button does with its children? Like one of the biggest things
[00:33:34]  that people probably know about solid, but, but you know, just in case you didn't is that I'm just going to fake it right now. it's fine
[00:33:51] . We have a component type and stuff, but I'm just going to, okay. Is that like, I, I guess, I guess I'm not going to do
[00:33:59]  the whole TypeScript thing, but the, the thing that I wanted to kind of point out here is, yeah, actually, this is a terrible example for pointing it out
[00:34:09]  because it's like a native element. Um, let's just make another component that just has a simple value on it, something like value, you know, is a
[00:34:21]  string or something, right? Okay. And when I went to point out and I've, I've probably shown this on stream a bunch before, but if our,
[00:34:31]  like, let's just call it like comp, if our comp here takes a value, I think it's like that, right? Um, my problem is I gave
[00:34:50]  it children. It's my fault. Whatever. Okay. If, if, if, if I give it a value here and I pass D you access that value by
[00:35:10]  doing props dot value, right? And actually I'm not going to call it value. I'm going to call it something else. Just call it something. The reason I
[00:35:19]  call it something is because some reactive libraries, use dot value as some special property. I'm going to, I'm going to do it like this. What I'm
[00:35:28]  saying is this is stringer undefined. If instead of passing as a string, I took count, right? I'm just going to complain, um, whatever to
[00:35:38]  string. I don't really care. Okay. It's still props dot something, right? And the reason we do this, that it like, we're not passing a
[00:35:49]  signal, so to speak is so that you have this locality, you don't actually need to worry about how comp is passed. Don't worry whether the parent passes
[00:36:00]  something reactive or not. Just decide for yourself as the component author here, like do, does it need to do something reactive? Well, yeah, I put it in this
[00:36:09]  crate effect and now, you know, it does something reactive, right? And like, or it goes into JSX binding you author with this local mentality. You're
[00:36:27]  not like tracing through your whole app. There's this local thing that like local thinking that goes into this, and this is really, really important to me. I didn
[00:36:36] 't want an is signal or whatnot, but the reason I'm getting at this, uh, is that understanding this, sorry, was... I actually don't remember
[00:37:08] , but I'm sure it'll come back. I think this is an important piece of prerequisite knowledge, though, to understand, um, basically this, the way props
[00:37:25]  work in the locality of it. You need that kind of as a prerequisite to kind of get into the rest of this conversation. Right, oh yeah, I
[00:37:32]  was talking about, about, about this. What, what I'm getting about, yeah, exactly, the, you know, thank you. This is, this is where
[00:37:40]  I was. Thank you, chat. Because, like, sure, if a DOM node might know what to do with this, but how is this poor component supposed to
[00:37:58]  know what to do with it? Like, it might just insert it in the DOM, so it's like, who cares? But why should a random component know how to
[00:38:05]  handle a function? Because we pass values, not functions. That's, that's the... like, that, that's, like, what we do here, because
[00:38:18]  of that locality of stuff. So this actually has no, not, not really any meaning. Um, it gets inserted, it would work, but it's actually really
[00:38:27]  quite awkward, and I got an interesting issue on, on our GitHub, which was, I mean, this issue spans more than, like, this is like a general
[00:38:38]  thing, but they're like, when I have suspense, where is it? Yeah, here, playground example. Yeah, here we go. See, suspense wrapper, this
[00:38:54] , which is, like, I don't know what the D is there for, I can't remember, but, uh, where's suspense wrapper in this one? Sus
[00:39:02] pense wrapper. Okay, so, basically, having gone through multiple components, um, I think this was, I'm just playing with something, um, like,
[00:39:20]  anybody could insert in the DOM, or intercept it, like, unless the component is expecting a function, we shouldn't just randomly expect it to work. This puts on
[00:39:33] us on each component to handle it, and, um, yeah, I just, like, this whole thing is really weird to me, and I think it, it's
[00:39:43]  really rooted in that first example at the very, very beginning, you know, when we go back to, like, I'm going to erase this for now, but
[00:39:51]  when we go back to the beginning here, and you did, you did this, that is the root of this problem. Like, something, something, don't want
[00:40:13]  his signal. It's important, though, because, like, I, I, maybe I'm not doing the best job of explaining it, but, like, as soon
[00:40:24]  as you start having to account for that, like, you don't get to live in this world where, you know, everything can be reactive. It's funny, this
[00:40:34]  is something that myself and the React team actually share in common, we just have, like, a slightly different view of what it looks like. Um, like, from
[00:40:53]  a props perspective, yeah, like, why not? We, like, the JSX has to. If it's a function call or property access, it has no way
[00:41:01]  of knowing whether it should wrap it or not. It doesn't, like, it doesn't, like, because you can always do this. Like, this property of
[00:41:13]  solid is very important to me. Because it gets away from, like, explicitly, like, if, if you, if you go the other way, you have to,
[00:41:28]  like, make wrapper after wrapper after wrapper, um, you know, of these computations and stuff, and it's like the over-memoization. It's
[00:41:36]  like, what happens if you memorize everything? Sometimes you don't, it's too expensive. The fact that this just works, you can just double count it, means that
[00:41:45]  this isn't a signal. It's not identifiable as a signal, but it doesn't, it's purpose. And in a sense, any expression in your JSX
[00:41:55]  is the same thing. This is, like, how we reduce the cost. Like, if we had to memoize every single prop and do, you do memo,
[00:42:03]  if you memoize every expression you do and then we memoize every single prop and, like, I mean, luckily we're getting smarter and our reactive systems are getting more
[00:42:12]  efficient so that, like, blowing up the world that way isn't as expensive in the past. But, like, you know, and our compilers will probably
[00:42:22]  move to be more lenient that way for that reason. I didn't want that to be, like, a fundamental caveat of the system, so to speak, that
[00:42:31]  you couldn't just do this, you know, which is a big part, that's why I'm talking about this right now, because it's a big part of understanding
[00:42:38]  why, like, functions are so much better than .value, like, and why, like, people who feel this way, it's not even a debate, um,
[00:42:46]  which is interesting, because I know there's, you know, libraries that think differently, and we'll talk about those in regards to TypeScript soon. Right, we
[00:43:04]  always pass down observers if we expected the clone to modify them, right, and that's the thing, I don't, I want to keep unidirectional flow.
[00:43:10]  This is the other reason, by separating the count from the set count, and by forcing values to keep things localized, this scales better for your mind, and it enfor
[00:43:20] ces unidirectional flow. We talked a lot about this on the, you know, the last couple streams, like, with Dan and stuff, I just wanted to
[00:43:30]  kind of, like, put that out there. There's a way you can skip thinking about TypeScript, just let people write React, forget it, and compile the solid
[00:43:42] . Well, the funny thing is, React itself, like, the language today with hooks is really hard to be, like, the compile source. Mitosis does miracle
[00:43:49]  work, and even then, it has gaps. But if you can reduce the possible syntax of React, get rid of all the memoizing stuff, and just leave their intent
[00:43:56] , it looks like a reactive system, at which point, compiling React for get to solid is actually a much easier prospect than, than compiling React today to solid.
[00:44:06]  AKA Svelte, yeah, good call. Main argument for job value, use it, TypeScript. That's, that's, we're going to talk about
[00:44:16]  it today. I accidentally think the TypeScript argument is good, but I think TypeScript is actually the main, like, the main argument towards doing it. There's also
[00:44:27]  people like mutation, and, but like, for me, I'm very much in the school of unidirectional flow. Two-way binding is not a good thing
[00:44:38] , you know, so to speak. I think there's even context to the discussion. Um, I saw Quick added two-way binding, and I started writing an
[00:44:45]  article to explain the nuance there, um, but I never finished it. You know, I'm too busy talking to people about TypeScript. Uh, yeah, that
[00:44:56] 's a great question. Um, we're, we're, we're collecting the list now. That's the thing. It's starting to happen. I remember, um
[00:45:02] , you know, like, it's not like a huge number, but it was actually kind of funny. Uh, I, I saw some stats or something, and,
[00:45:10]  and it was shared, like, I remember it was a Netlify, and I'm gonna give you numbers, because obviously, you know, privacy thing, but they
[00:45:17] , they were looking at the numbers, and the, and solid had a lower usage than, say, a lot of the other frameworks, especially the stuff like Remix
[00:45:23] , or, or, you know, Next, obviously, and stuff. But what was, what was surprising was, um, solid's enterprise usage was actually higher than some
[00:45:31]  of the, like, smaller of the big frameworks than you'd expect it. So, like, there are people using us out there. It just, we're still,
[00:45:37]  like, we don't know that. We have to go, like, ask them. People have just been starting to use it. I mean, the irony is not
[00:45:47]  lost on me, or anyone, I think, except for those guys on Reddit who, when I tried to explain this, didn't get it. But, you know,
[00:45:55]  that's Reddit for you. I mean, don't get me wrong. JSX TypeScript is painfully, painfully bad, and I, I'm not gonna
[00:46:05] , we can take a quick jaunt into that, but I, I don't, I don't want to distract too much where I want to get to. I want
[00:46:12]  to talk about reactivity. But, like, this is, like, what's div? It's JSX element. There is no way, I mean, except
[00:46:23]  for me to tell it, to tell it that's an HTML, sorry, div element, to actually do, like, there's no way in TypeScript to actually type
[00:46:34]  the div to return an HTML div element. There's an open issue. We've been following up. They said it would be complicated, but, like, just the way
[00:46:43]  the types work in JSX and TypeScript, you cannot actually just, like, like, do this and end up with a div element. It's just not possible
[00:46:53] . Yeah, I mean, we tried to work with Reskip. The problem with them is, again, like, certain tooling assumes that everybody compiles JSX the
[00:47:07]  way React does. And it's kind of funny because React changed the way they compiled JSX, and not everyone follows suit, even. Like, it's hard to move
[00:47:13]  the tooling that makes those assumptions. And it's funny. In the future, I expect more changes to compile JSX, because JSX is actually quite capable to be
[00:47:23]  analyzed for, you know, compilation. It's, like, a decent language, even though it's not, like, a custom DSL. It's a little bit
[00:47:28]  more permissive, which makes it harder. But it actually does that well. And the problem is, like, rendering Hyperscript, like, the way we,
[00:47:35]  like, the standard way, is just not optimized. It will never be optimized. So, like, generally speaking, everyone who's working on this compiler stuff, like
[00:47:42] , they know, kind of, like, that can't be the end game, you know. I was covered last week a bunch of, like, VDOM libraries
[00:47:49]  that have been improving the performance. Stuff like BlockDOM, and Million.js, and the latest version of Eevee. Like, these smaller VDOM libraries
[00:47:59]  are, like, right up there solid on JavaScript performance. And they're using a different compilation of JSX. Like, that's, and so is Inferno
[00:48:08] . Basically, anyone who's performant just doesn't use JSX the way all the standard tooling supports. Knowing that, like, it seems, like, kind of obvious
[00:48:17]  to me that all these people trying to, like, put it in the browser, all that, like, like, that's, like, not the thing, you know
[00:48:23]  what I mean? Standardize it, like, build it into Dino. Like, no, you know, not a good idea. I struggle with JSX,
[00:48:34]  but I like JSX. Like, picture if I didn't have, like, all the tools, like, on the parser stuff. Like, I built custom template
[00:48:45]  DSLs, you know, like, like, string-based or whatever you want to call them, like, Svelte style. And then I pulled Acorn
[00:48:50]  in and, like, did that whole thing. You know, JSX is really great and anyone can just get it out of the box. You know, you just
[00:48:56] , like, fire up Babel. You're good to go. So, like, I struggled with it because of, like, the opinionated tooling. Like, the
[00:49:04]  next level up, the typescripts, the prettiers and all that stuff. But even prettier was fine. Like, code highlighting. Once I, like, gave in
[00:49:10]  a little bit and conceited, honestly, typescript's the only problem. But, I mean, that's the common thread here, right? Yeah, I mean
[00:49:19] , div as a div as const isn't, I don't know. Maybe I missed the rest of the thing. Interesting. Huh. Maybe there's something to that.
[00:49:37]  But anyways, I mean, it doesn't work, but maybe, yeah, it would be neat. Yeah, there's the rest of the sentence. Yeah. I
[00:49:45]  mean, this is a whole stream. I'm not going to cover it right now. Um, lots of little things and a couple big picture things. I, I mean
[00:49:57] , for climate, I think, I think a lot of, I think very much we'll come close. I think that's the thing. In the future, they're
[00:50:07]  going to come close. I just don't think we're going to get considerably faster. Like, I, the beef, like, it depends on, like, how
[00:50:15]  you measure and how you benchmark. But, like, Inferno, uh, had basically got there. And it's funny, right now, Inferno and Solid
[00:50:22]  are almost, like, like, next to each other. But that's because of, like, warm-ups and stuff. But for the longest time, stuff had gone
[00:50:28]  to Inferno-level performance. And then, like, Solid was, like, this little bit more than that. And we've been stuck here for five years.
[00:50:35]  I don't expect anything to move. I think what you're seeing is other ones catch up. If Vue releases Vue Vapor, I am pretty positive they
[00:50:42]  will be right up there with Solid and Inferno and all that stuff. I'm less confident about React Forget. But it will be, I'm sure it'll be
[00:50:49]  significantly better as well. So everyone's just getting faster. But we are kind of maybe at a local maximum. And it's really up to the browser to make our performance
[00:50:58]  any faster. Sorry, where is it? JSX isn't perfect, but it's free. Yeah, there we go. Thank you, Michael. Yeah,
[00:51:20]  and that's fair. That's the way we're handling it. Although I've thought about handling it in a different way, which is cool, but yeah. I guess
[00:51:25]  it... Yeah, that's interesting. I've been playing around the idea that div is actually a bind instead of a call, but I'll leave that for another time.
[00:51:37]  Wasm is fast enough today. It's not the performance of Wasm that's holding it back in terms of like DOM updates or stuff. What's holding Wasm
[00:51:47]  back is you've got to load it into the browser. It's big, it's slow. You're not going to build your e-commerce site doing that. There
[00:51:55] 's a lot of websites that like barely need JavaScript and definitely don't need Wasm like from that perspective. What makes like Wasm is... faster Wasm frameworks are
[00:52:05]  as... they're closer to solid in performance than Vue, Svelte, React, like any of the major frameworks. I think the Wasm update performance thing is
[00:52:16]  just like, it's just not true anymore. Okay. I don't know. That's a great question. That's why I didn't like quite fit in.
[00:52:32]  Yeah. Dioxys to my understanding uses this block, uh, compilation that I was talking about, like blocked all my millions and all that. And it's Wasm
[00:52:45]  and it's in and Leptos and stuff are right up with us, you know, like few steps behind, but like maybe, and maybe when Wasm gets DOM
[00:52:53]  access, it'll be a few steps ahead. But that level of distinction isn't like why, like people are choosing to use or not use Wasm at this point
[00:53:02] . Okay. So I, I, I hope I kind of laid out the problem a bit. Um, so I'm gonna, I'm gonna skip the, the,
[00:53:14]  the, the controversial one. Oh, I mean, I mean, it's all controversial and just kind of go straight into, you know, I already gave the counter
[00:53:24]  example, but what, what my solution for this problem, as I mentioned, this, this thing of my comp in my comp, my comp, and then this having no
[00:53:33]  meaning. Like, the thing is in solid, if nothing happens, what ends up happening is this function doesn't get called by my comp three, it gets passed to
[00:53:44]  my comp two, to my comp, and then into the DOM, like up the tree, which means it gets like pulled out of that context, so to speak. And
[00:53:53]  that's why, you know, suspense didn't work in that one issue that I said, because it was actually pulling the read out of the suspense boundary. Now,
[00:54:03]  obviously I can make the choice of, you know, resolving all the children, but I, I don't, it's kind of expensive and pointless to do it at every
[00:54:12]  single step. So, you know, with solid built in components, we only actually resolve the children when you have a context provider, because that's like, when you have
[00:54:21]  to set the context. And by that, I mean, like, use the children helper, you know, like it's this extra overhead that I didn't see any
[00:54:27]  point doing. So like, this is why I don't like, like this, because it just doesn't make any sense. So the solution actually was kind of simple.
[00:54:40]  And it simply say that you can't accept functions for JSX. Like, you just can't pass a function to the JSX. If the types don't allow it
[00:54:54] , like, obviously, if you have a div, it's not going to expect a function anyways, if you have a component, your components like, hey, I
[00:55:00]  take a function, then it will take a function. But if you if this component doesn't expect a function, you're not like going to give it a function. So
[00:55:09]  let me pull up solid for a minute, and I'll show you what I'm talking about. JSX. See, we have this like, set of, of
[00:55:21]  legal elements in here, right? And I have, I haven't actually built this with the latest or installed it. I think I just, let me let me see here
[00:55:28] . Git pull. Am I up to date? Oh, man, this is my fun, eh? Do you ever do this? Like, you've been using this
[00:55:39]  Mac for years, and then they tell you that your XPath command tools are missing? That's actually really quite annoying for the sake of the stream, because I hadn
[00:55:48] 't actually run this locally. Um, man, I'm really like, I'm gonna be like running Xcode in the background for the few minutes here, until we get
[00:56:02]  the setup. Oh, man. After every macOS update, and this is my, how do you do this again? Uh, why am I getting this? I
[00:56:12] , I gotta remember what the actual thing is. I have to like... Yeah, duh, duh, duh, duh. Yeah, here we go. I, I,
[00:56:21]  it's, it's always this, right? I agree. Sorry, this, this will delay this a little bit. 41 hours. It's gonna be fun,
[00:56:39]  fun wait. You guys stay with me for 41 hours? It's only five minutes now, so... All right, two minutes. It's fine, this, this will
[00:56:51]  take a couple minutes, it's fine. But this lets me show the before and after a lot more effectively. Um, because, essentially, we allowed this function element,
[00:57:06]  which is just a function of element. Same way we don't think. The thing about solid is we don't have V DOM nodes. So, like, it's
[00:57:11]  not just V node. Our, because we just have functions that return DOM elements or whatever. Like, it could be a DOM node, it could be an array of DOM
[00:57:20]  nodes, function of DOM nodes, a string and some crazy TypeScript trick. I can't remember why we had to do this, but number, boolean, null
[00:57:29] . But you can almost return anything except for a normal object to our JSX element. Right? And, and that, that makes things a little bit tricky. Right
[00:57:45] ? So, I mean, it's accurate because you can, like, they're just function calls that can return anything. But what I did was, I was like,
[00:57:52]  okay, what if we just delete function element? Right? Because if we delete function element, now we don't accept functions. Then we're, you know, uh
[00:58:01] , where are we, sorry, not, we're done with solid primitives. Then, suddenly, we're in this different world where you can't pass a function unless
[00:58:11]  the component expects a function. So, to illustrate that, I actually got an example for everyone right here. See, pretend we have a layout component that just takes JS
[00:58:18] X, um, elements. So there's no, you know, it takes children. There's nothing special about it. It, you know, it does its internal thing
[00:58:26] . It just wraps some children. And then I made my own for loop component. I didn't implement it here, but essentially it takes an each and then the children are
[00:58:36]  a function with an, with a, you know, with a callback or whatever for each item, you know, do it. And what this new change means is
[00:58:45]  this is all still valid. You can go like my layout, pass in the string, my layout, pass in an element by layout, you know, uh, access a
[00:58:56]  signal, my layout, do some conditional logic and signal, return an element, my layout, call an iffy. If you want to, you can have it like,
[00:59:04]  this is sometimes fun. If you want to like inject state in the middle of your JSX, remember solids components don't rerun. So like, this is completely
[00:59:12]  legit. You could probably just make a component instead of doing this, but yeah, you can put signals and state and life cycles will be managed automatically anywhere in your JSX
[00:59:21] . Um, you can call on track on this thing and haven't, you know, not track something. You can use a for loop exactly the way you would expect to
[00:59:31] . But with this change, what ends up happening is if you just try and pass the name or the count straight in, it errors. If you try and pass a
[00:59:39]  function to my layout, which is not expecting a function, it errors. All of these variations error. And you, and the thing is because in solid, you don't
[00:59:51]  need to pass this function. If you want this to be reactive and dynamic, like name and hello, just put name and hello. You don't need to wrap it in
[01:00:00]  a function here. That's what the JSX compiler does. The reason the compiler does this is so that we get that trend, like that transparency I showed earlier where
[01:00:08]  everything is just props dot blank and we're not worrying about like is signal. And similarly, if you use an each component, um, and what's wrong with this one
[01:00:21] ? Ah, we, I mean, this one's, this one's actually kind of off topic. It doesn't matter. It just shows that if you don't
[01:00:27]  pass a function to, uh, users that errors. And here, if, in this case, if you tried to pass a development, because this one specifically doesn't expect
[01:00:38]  it to expect the children to be a function, it also errors. So, so far, so good, right? Uh, question. Yeah. I mean, that
[01:01:00] 's, that's essentially like, uh, Dan actually answered this on, on the space yesterday, uh, when he first jumped in because react, how sure about it react
[01:01:12]  doesn't compile in the dependencies because like, it can't, it's actually probably pretty easy to compile in the dependencies. It's because it's like inconsistent with the
[01:01:23]  model, unless they can patch all the little leaks and little holes or like exceptions to the model. It's actually a lot more explicit and clear to have that dependency array because
[01:01:32]  there's always edge cases and they weren't confident when they first put it out that people wouldn't need it for edge case. And I think that's a very smart move
[01:01:37] , especially because think about it. React runs top down line, line, line, line, line. Like if that's your mental model, you got to see the dependency
[01:01:45]  arrays to kind of understand what changed. You see with the reactive system, that's not the mental model. You're just like this reruns when it changes. And
[01:01:52]  I feel like because of that kind of guarantee, it's a lot easier to get rid of the dependency arrays. And in fact, it's why we'll talk about this
[01:02:02]  later on stream react renamed their auto memoizing compiler, which makes no sense to talk about from a top down sense to an auto reactivity compiler, because they had to
[01:02:12]  start talking about react in terms of reactivity. As soon as they started compiling. Yes, you're right. You're right. Before I release this, I'll
[01:02:22]  do that. Yeah, name and users are signals in in this example. But to be fair, it doesn't matter if they're actual signals or if they're just any
[01:02:32]  accessor, because the way solid works, these could be actually any function, right? That's the thing. This part aligns quite well with TypeScript. There
[01:02:42] 's a gotcha here, right? Because if this is just true, this like, why didn't we do this from day one? Like, isn't this a win
[01:02:49] ? Like, I mean, I can get a sense from chat here. But like, if I just came in, and this redlined on me the very first time I
[01:03:00]  tried to do it, like, like, that's kind of like a win for everyone. Why weren't we doing this? And the reason is, I felt
[01:03:09]  that TypeScript was there for being kind of like, the truth. So that like, people could understand the state of the system, kind of like when you write in C
[01:03:24] #, or Rost or whatever, and you don't like, if the types aren't right, like the code doesn't compile, like, like, in a
[01:03:32]  sense, like, things have needed to work. But then I realized that TypeScript is just a linter, which means we can lie to TypeScript on purpose. And
[01:03:44]  as long as we can never be caught in that lie. And you know, it's not like a harmful lie, like where we're like, over stricting some
[01:03:52]  evaluate can be or something like in a negative way, then like, TypeScript is a tool for us, right? Like, it's even if this technically can accept a
[01:04:02]  signal, we can error and say it doesn't for our purposes. So, yeah, a lot of this realization, it comes from the fact that like, in one sense
[01:04:13] , I see that you can't like completely trust TypeScript. And like, you know, there's, it's a subset and all that. But like, knowing
[01:04:21]  that empowers you, because now you can use it to like, how you want to use it. And that was something that I never really understood. I was thinking to
[01:04:29]  like, you know, it's a typed language kind of thing, and not like, it's whatever, like, I mean, it's like this, it's kind
[01:04:35]  of like JavaScript in a way, like, where you kind of kind of approach the problem and go like, how can I hack this thing to make it do what I want
[01:04:42] ? That's what TypeScript, it's like super hacky, like JavaScript. Yeah, yeah, of course. I mean, that's what it's there for
[01:04:57] . Why else are we doing TypeScript? Because it's safe? Like, it's the best autocomplete we have in JavaScript, you know, it's the best
[01:05:08]  linter we have. So, okay, so there's a gotcha in here, a little bit, because if it, there's a reason we accept functions.
[01:05:26]  And the reason we accept functions is because technically speaking, if, if a part of our DOM needs to update like a for loop, or show component, like something that switches
[01:05:37] , or we need, like, something to listen to it, because these are expressions, they're like, basically like memos, right? Like a for component is
[01:05:42]  like, you could, or show component, you can think of it as a memo, essentially, where it's like, doing some condition, it's like a tern
[01:05:48] ary, right? Like, you can visualize it, like, you know, count bigger than five, or four, whatever, something, nothing, you know what I
[01:06:03]  mean? Like, you can you can view this as basically like a reactive memo. So whenever count changes, and because of that, something needs to subscribe to actually do the
[01:06:14]  DOM, like, how does this get inserted in the DOM? This memo has to feed into an effect that actually does the insert insertion, that's kind of like
[01:06:22]  the mental model we have here. So like, if you make a component that returns, like, a memo, essentially, you need, like, it needs to be able
[01:06:31]  to do it, there's no way to pass it in a dynamic way, unless you pass the function into the, like, the underlying create effect renderer, like
[01:06:39] , I've displayed this, like, if you don't know what I mean, watch the intro solid, um, like, where is it sort of, uh, w
[01:06:47]  is, uh, solidjs.com, whatever, like, watch the, like, advanced intro 10 minute video at some point. But like, solid renders everything with
[01:06:56]  effects, you need to pass that signal to the effect. So, so for the most part, we do need to support this somewhere. But the, the, the
[01:07:08]  secret to this is that, like, let's implement my for, so let's go const, um, my for, so this is my own for loop, and we
[01:07:18] 're gonna, this is gonna be really dumb for loop in solid. Because the thing you have to remember, I, I, I say this, like, a billion
[01:07:24]  times, I never know if people believe me, is that solid, um, is, uh, how should I put it, is all runtime, right? The compiler isn
[01:07:35] 't, like, doing fancy, like, DSL type stuff. So, like, uh, like, my for could just be what props dot each dot map, um
[01:07:46] , props dot children or something. That's, that's roughly what a for component is, right? And we'll say that, um, let's make it,
[01:08:00]  what it was, a generic, um, I'm doing something probably terribly wrong here. I had an example of what a for component might look like here. Is this it
[01:08:12] ? Yeah. There it is. Beautiful. This is what I want. Yeah. My for, um, um, where are we going? My for, okay,
[01:08:32]  it's never read. And what's this one's problem? Okay. I don't need it to run. I just need it to type check. Okay. My
[01:08:49] , I am missing something though, aren't I? Some chat, tell me what I'm missing. Okay. But I can, I can still illustrate this without it
[01:09:13]  running for the moment. Oh yeah. Like I literally have like dangling stuff in here. Uh, it's all good. I don't, I don't know how
[01:09:26]  that disappeared. Um, anyway, let's, let's not worry about that for a second. My point is I could write my own for loop component like this,
[01:09:33]  right? And yeah. And essentially write it like this and it's just a map function, but there's a problem here because this is only going to run once. So
[01:09:46]  even if each updates, this can never run again, the way solid works. So the answer to that is the same answer they give other people is you just wrap it
[01:09:59]  in a fragment, you know, like, and I know that's like a little bit magical for people, but essentially if you wrap it in a fragment, this now is
[01:10:08]  a reactive context that you can pass through. The other option is you can wrap it in a create memo. And actually the funny thing is, yeah, cause this isn
[01:10:19] 't compiling. Let's like get everything else going. Something I'm doing here. Okay. Let's do this, this just in case I don't, I don
[01:10:41] 't want to lose it when I refresh the page. Sometimes the playground gets in a weird place. Return outside of a function. Okay. I'm missing a brace.
[01:10:55]  Yes. Okay. That's the problem. My example is which one, which one, which one, which one am I missing? Line four. You props is this
[01:11:18]  each item. Oh, I'm like literally missing the open brace for the function. Thank you. Okay. Okay. See this memo. Okay. Thank you. Chat
[01:11:46]  is great. Um, but essentially a fragment expression is a memo. So the thing is you can write this, this will be legal. You can also write create memo
[01:12:04] , but if you write, create memo in this world, this is the gotcha here and try and return it. It's going to say JSX element can't be
[01:12:12]  a function or something. And the only way to solve that is cast is unknown as, as JSX element. That's the gotcha. If you're returning functions from
[01:12:21]  your component to make like custom control flow, um, as like a memo, you, you, you have to cast it here or, um, return as a fragment
[01:12:33] . I don't think that's probably a big deal, so to speak. Like it, it means for people authoring libraries, they have to be aware of this stuff
[01:12:50]  a little bit. And, but for most developers, the solution is really simple. Uh, I mean, I just showed it. Just return a fragment. If you
[01:12:58]  have a reactive expression, it's the same thing you do in all your components. So we basically get the TypeScript win of tightening up all the ambiguity around the function calls
[01:13:08]  and, um, you know, for a pretty reasonable, uh, trade off. Of course, this is a breaking change from a TypeScript perspective. But if Type
[01:13:16] Script's willing to break stuff on minor version releases, then like, you know, I'm going to play ball at least for now. I think there's a point in
[01:13:25]  the future where we have to consider differently. But I mean, this, this is a big part of 1.7. And I think it's going to make the,
[01:13:34]  like, the end user use of solids so much clearer, like all that ambiguity goes away. Well, technically, yeah, like, but the thing is, if you
[01:13:50]  think about it, what would you do anyways, you wanted this to update, so you needed it to be a reactive expression. This is like, you know how I say
[01:14:01]  that we have no cost components. It's not 100% true, um, in the sense that if, if an expression could have been grouped at a higher level and
[01:14:12]  you have to break into a component, you might need a way of passing it back up. Um, so technically speaking, like, a function is lighter than a memo.
[01:14:22]  So, like, maybe you're okay to just return a function and then you have to cast it. But, like, I'm not, I'm not, like
[01:14:28] , what's a, like, nickeling over that kind of thing. Like, just, this, this doesn't matter much. And it's not just that a
[01:14:33]  fragment is a memo. Let's add another expression to our fragment. It's, it's that the expressions in the fragment that could be dynamic or memos. So,
[01:14:46]  like, if I put high in here, it's just a string. Fragment is just an array. It's the, it's, it's the,
[01:14:52]  it's the expressions that get memoized. Does it have to be a component function or can you just call functions in JSX expressions? I might need a better,
[01:15:12]  yeah, I mean, can you just call, I don't quite understand the, the question. Like, what am I going to do here? Like, count. Sorry
[01:15:25] . I actually need, can't just do that. I need to do this. Memo count. Yeah. So this, this is illegal now, right? That
[01:15:47] 's, that's the whole point. We're the reason that I put the restriction on the authoring side, which is a little bit unfortunate is because so that this
[01:15:56]  would be illegal. Can you have a thunk calling map array in a JSX expression in the parent? Um, you could, but as long as you like, how
[01:16:11]  are you passing it in? If you're wherever you're passing in, you should call that function. Like never, unless the component wants a function and puts that in
[01:16:20]  as type def, you should always be passing the value, not the, the function. It's the way, like, I really wanted to like, if a component expects
[01:16:29]  a thunk, it gets a thunk. That's same as true to today. Right. But like, I want to remove that whole ambiguity that children could just be
[01:16:39]  thunks. Thunks are gone unless like they're good for local reasoning, but you pass values. Yeah. Like basically all of these things in a situation like this
[01:16:57] , where they're not asking for functions, all are invalid. But the thing is like, you don't need to do this because this is the equivalent of this.
[01:17:16]  Like this was like, there, there was a couple other solutions before I like we end on this point, which one of them was that it's Otanashi or whatever
[01:17:31]  is very, very clever. And it was like, well, what if we leave the function element in, right? Let me get here. Where is we're solid
[01:17:41]  here. Can I get pull yet? All right. Beautiful. Um, what if we leave the function element in, but instead go like super secret is, uh, element
[01:18:06]  like something like this, never or something, basically what if we added a typescript symbol, like this isn't quite right. Cause, but like added a typescript
[01:18:17]  symbol that never existed on the actual interface. And if we did that, we could say like memos or accessors, like, like signals, so access or signals or
[01:18:28]  memos could essentially have this secret property that was like an error message. So like, if you tried to pass a function, it would be like, your function is
[01:18:39]  not, uh, you know, an accessor of solid or something. And this has no runtime implication, but could like tell, um, like it could give us the
[01:18:50]  error message. And I mean, this is a pretty clever trick. The problem with it is the message was really unclear, right? Like you start like, how should I
[01:18:59]  put it? Like, like you could, sure. This was, this part of the message was clear, but when you're reading it, you're like, what
[01:19:06] ? Like, so functions are okay. If they have this hidden property, what do I add this hidden property? Like, like it was, and, and the biggest problem
[01:19:17]  with it, I had was this initial scenario here. Like the, we'll just go back to it because we can, this initial scenario would pass still in this,
[01:19:29]  with that thing. So while we remove the fragment return memo issue, this scenario would, would pass because it'd be like, oh, it's a signal. It's
[01:19:38]  fine. The only way to actually restrict it was just say no. And the no error is much, much, uh, much more straightforward. Let me see if I
[01:19:46]  can show you that. Let's get rid of this. Let's go back to where we were, not that it really matters. And let's, uh, I'm
[01:19:53]  up to date. Let's, uh, PMPM build our sol, our solid repo. All right. Why did that build fail? Let's try building one
[01:20:13]  more time. Sweet. So the thing currently pushed up on git does not build properly. Actually not. Let's, this is probably so out of date. Let's
[01:20:31]  PM, PMI. There we go. Whoa. Okay. Yeah, that's what it was. So, yeah. See, no more function element here. Okay.
[01:20:50]  How's chat doing? How's Twitch doing? Did I miss anything? People on Twitch, tell me if I miss anything. Okay. All right. All right.
[01:21:05]  So here we go. Okay. So now let's, let's mess with things a bit. Let's go into one of the web tests. Maybe, um,
[01:21:19]  where's the web source. Let's mark sort of tests. Let's just pick one of these, maybe. Let's make this a little bit bigger. Okay. Um
[01:21:32] , element. Okay. The element test actually have any DOM elements in it. Okay. Whatever. Now, if I go in here and I can go high, obviously
[01:21:44] , but if I go in here and do this, it's going to complain at me and the error is going to be function string is not assignable to type element.
[01:21:52]  Like this is a much clearer error message, so to speak. Like, it's like just straight up just tells you that you can't do this. Um, so
[01:22:02]  while we could get clever with it, um, yeah, it, it, it, it's just, it's just, it's just nicer that way. Um,
[01:22:12]  that's unique ID. Do have an example here with, um, yeah, I think there's a couple other variations of that error, but you kind of know what
[01:22:24]  to expect. Yes. Because four expects a component. That's what I was trying to, or sorry, expects a function. So if the types expect a function, then
[01:22:35]  you can pass a function, but the types don't. And what's really cool about this is we've long time had this little adjacent bug that I haven't talked
[01:22:45]  about a bunch, but it's almost impossible for solid show component. Um, let me just make a show component for fun. Um, I don't actually, whatever,
[01:22:59]  you know, we'll just leave it there. Let's it's almost impossible for solid show component to differentiate between two scenarios. And those two scenarios are, um,
[01:23:13]  show when count is bigger than five. Okay. Let's say smaller than four. Okay. Um, it's impossible. Yeah. I don't even know why I kept
[01:23:30]  the button there. It's very difficult for solid to tell the difference between, um, um, this, like a signal and, um, um, and why
[01:24:07]  isn't this is like yelling at me. This is so funny. I expected this. Oh, it's cause I have an imported show. Okay. I'm surprised this
[01:24:17] , I'm still surprised this isn't yelling at me. This should be yelling at me that it needs a key prop, but it's, it's very difficult for
[01:24:25]  solid to tell the difference between like someone using the callback form and passing a function because when show gets at a runtime, it's a function in both cases. Okay.
[01:24:38]  And what we did was kind of like this hacky thing where we look for the argument count because that's the only difference between, you know, as I mentioned,
[01:24:50]  it still gets wrapped. Right. So that, that was like the only difference. Like we couldn't really tell the difference. And now that we have this rule that's
[01:25:00] , you know, sorry. Yeah, I was wrong. Sorry. It's not count count is fine. When you put in curlies and passing count, that's obvious
[01:25:08] . It couldn't tell the difference between this and someone just passing count in naked. Like it couldn't tell if it should be calling that function as a callback or
[01:25:18]  calling or, or that it was just like the, the, the signal. And now that it's illegal to pass functions arbitrarily, we can actually type it so that
[01:25:28]  when people do this, it's an error. Now I understand you might think this should work, but, um, now it's like now in, now this will
[01:25:38]  error. And the thing is, this is useless again, in this scenario, because if you were fine using show and you didn't need a, didn't need the argument
[01:25:48] , why are you even doing this? Do you, do you know what I mean? Like, so we actually solved a weird, interesting thing with, with, um,
[01:26:01]  the show component as well, because we can now detect the difference between those two scenarios from a TypeScript level. Hopefully that's a good explanation. Yeah. I mean
[01:26:18] , that, that, that was basically what we were doing, which I, I, I understand that's like not great, but now TypeScript will prevent you from screw
[01:26:25] ing it up. No, we haven't gotten into the, even the fun types script issues yet. This is just like the, you know, the, the,
[01:26:38]  I was thinking this a little controversial at first, um, as well, but I think like the winds here are pretty evident, like in terms of like how much, like
[01:26:49]  it's, it's weird. Cause like if you're coming from this from a pure reactive side, like a, like Fabio and Bobi or, you know
[01:26:58] , sinuous or, you know, like the surplus, even like the roots of where solid came from, this approach seems bonkers. You're like, wait, no
[01:27:06] , everything's a function. Why are you like trying to force everything not to be a function? Make, you know, make these rules around it. But once you put
[01:27:15]  all these pieces in place, you have one consistent way of doing things for this, that, um, is not ambiguous, right? And basically this is all a
[01:27:29]  product of the fact of the way we, we change the props and the way that is signal is not a thing. You, you basically, once you start making those decisions
[01:27:36] , I think you logically get to this place, um, where you have localized component and you can think of things in values and you don't have to think of the whole
[01:27:45]  tree. And if signals are being passed through or that, it's not your responsibility. How do I type, uh, yeah, I solid has some great utilities,
[01:27:58]  um, built in for, for handling, uh, let me see here if I can find it. Um, is under render components. Um, we have, we have
[01:28:09]  a bunch of types, um, for this, obviously there's types components. So yeah, there's a generic for normal one. There's a generic, um,
[01:28:17]  for like, can never have children, void props, void component, parent props. This is a component that can have children, um, flow props, uh, so I
[01:28:28]  guess it's for the flow components, props with children. There's a whole bunch of variation component props. This is a very helpful. I love this one. This is
[01:28:38]  how you can extract the props, um, from a component, but essentially the common pattern is you either just like with your function, set the props, like whatever,
[01:28:47]  or you use a generic with one of these like component or probably parent component. One of those two are fairly common. It's a breaking TypeScript change. So depends on
[01:29:01]  how you feel about that. We've broken TypeScript, like almost every release. I mean TypeScript, like TypeScript's grown with us too. I know this
[01:29:10]  one's like on, on our side of things to be fair, but like over time TypeScript's broken us as well. So it's like, I feel like that
[01:29:17] 's the relationship here. If TypeScript feels like they can just like break on every minor, I, I, I, I feel like for us TypeScript breaking on
[01:29:30]  minor is okay. Um, yeah. Yeah, we're, we're gonna, we're gonna get here. Right. So I think we're, we're good
[01:29:57]  on where's the beard. It looked good. Yeah. I mean, yeah, I don't know. I, the beard actually was more of just like after signal week
[01:30:08]  and stuff. I was just like, so like out of my, I like, I, I, I went really hard for a little period of time and I just let
[01:30:14]  it grow. And then I was like, Oh, it's still growing. And then I can let it go for a bit, but you know, we're back
[01:30:20] . I have conferences to do coming up and, uh, talks and streams and all that stuff. So I, I don't know. Anyway, um, let's,
[01:30:32]  let's continue onto more TypeScript goodness. Cause this whole thing is about TypeScript almost. I mean, there's a few other things we can talk about a bit
[01:30:42]  later, but the, uh, what, what, what, what other one was fun? Um, no, we're not gonna do that one yet. Let's talk
[01:30:49]  about better types for input elements. Okay. This one's gonna be a quick one, but I, it's, it's an important one to point out because it conf
[01:31:00] uses everybody and I blame react, right? Let's do this to do reset. Okay. So let's, let's make an input element whose value equals count that
[01:31:24]  on input we set it. Okay. And I, I'm calling it count. It can now be a string. We don't, we don't really, you
[01:31:38]  know, I don't really care. Okay. On input, we, we set it. And how do we set it? Well, we go set count equals e dot
[01:31:49]  target dot, um, value, right? What the hell is going on? Um, this is so weird when like TypeScript's not yelling at you when it should
[01:32:05]  be yelling at you. Oh, there we go. Just had to toggle it. Thank you. Okay. Wait, what value does not exist on type element? There's
[01:32:15]  a couple of things here. I want to, I want to talk about because let's just put our count in here. Let's just do this just because let's
[01:32:27]  put our count in here. Let's put our count in here. Okay. Okay. So let's just put our count in here. Let's just put our count in
[01:32:35]  here. Okay. Let's just put our count in here. Let's just put our count in here. Okay. Let's just put our count in here. Okay
[01:32:43] . Okay. Yeah. Right. So I type, where is it? Oh, I clicked out. Oh, there it is. Let's do a div. Let
[01:32:54] 's pick it on, on the next line. Okay. That, that is a blur event. Okay. I had to click enter for this to show. I'm
[01:33:17]  clicking. I click enter. It shows, or I do here. I click out. It shows. That is what the on change event in the DOM is. That's
[01:33:28]  what the on change event in every JavaScript library is, except for React. Now, to be fair, a lot of libraries have like two-way binding for this use
[01:33:41]  case. So you don't like, it doesn't become, you don't become like conscious of this too much. But like, React does a bunch of stuff around their
[01:33:53]  change event to make it work. And there's historical reasons too, because like, I remember even the knockout, can I show you, here's a little history for
[01:34:03]  you all. Knockout JS has a, let me look here. Uh, what is it? It's a text binding. No, no. What's the one
[01:34:14]  for the input? Uh, value binding. Where is it? Value, value, value, value, value, value binding. Knockout had this value binding, right?
[01:34:21]  Where you'd just go like input value user thing. And don't worry too much about this. But what's funny is value worked like change, like I just showed
[01:34:29]  you. And then you'd have to like, pass an additional value update property and like you would set, set like when it set the value. Because back in the
[01:34:41]  day, um, we didn't actually have the, the DOM input event. Uh, it's kind of funny, like, cause people want the support stuff back to like
[01:34:49]  IE6 or stuff. So there's like a long history here, but I just wanted to start here because the proper event to update is called on input. Do
[01:34:59] , do, do, do, do, do, do, do. Um, and, you know, like this, this is, this is basically, yeah, I
[01:35:20]  tended in here, but I just, I just wanted to kind of like the number of people I've seen come on stream. Like I'm learning solid and they go
[01:35:26]  on change target value and they hit those two issues. Like is significant number. Like, cause they, they're like, Oh, this is weird. Why is it not
[01:35:34]  updating? And then they like move and they're like, Oh wait, it updated now. What, what happened? And it catches like so many people. And I realized
[01:35:43]  why was because I'm like, if it's just react, okay, that's understandable. But it's because they're, if they're using Svelte or
[01:35:51]  view, they're using two way binding and it never occurred to them. Like no one types on input. Um, even though technically that is the only actual answer here.
[01:36:01]  So anyways, getting, getting back to our example, now that we, we fixed it and changed it from on change to on input. Why is this value there?
[01:36:18]  It's because from its perspective, TypeScript is like, Oh, this can be, uh, an element. It can be any element. And the reason for that
[01:36:28]  is what happens if I move my input event onto this div. I, I, I needed to, it's because the target is this input element, right? Sorry
[01:37:13] . I had it backwards, right? It's bubbling, right? But the truth is if I'm TypeScript and I'm looking at this, how am I possible
[01:37:27] ? And you put an input element on some div. How am I, how's it possible that I know that this target is this input? Like there's no way
[01:37:44]  for TypeScript to know, anticipate what the end user's going to click on. Like all it can be is like, it's a Dom node. Like it has no
[01:37:56]  way of knowing, like, like, what, what, what if, what, what if I had a text area under here as well? Like let's, I had
[01:38:09]  both of them. Right. Um, you know why this is working in cause I, I, I, it's, it's actually picking up the, the input
[01:38:25]  events from both, from both of these. So if I type in here or type in here, but this one's not getting synced because I didn't put value
[01:38:32]  count on it. but let's, let's, let's do that now. Do, do, do, do, do, do. In this one, do
[01:38:39] , do, do, do, do. Like my, my point is TypeScript doesn't know which one of these, the end user is going to type in.
[01:38:53]  Right. Like it just sees this div and goes, okay, you got an event handler on it. It is impossible for it to know that the target, what element the
[01:39:09]  target is. There, there is a solution to this though, but, but we'll, we'll get here because the thing is there's another, there's another
[01:39:26]  thing on the event that tells you what the current target is. Now, if I change this to current target, current target, it's still going to complain because a
[01:39:34]  div does not have a value, but look now, this is a div element. This isn't going to work because, you know, it has, it has no idea
[01:39:46]  what's going on, but my point is the current target is the element you put the event handler on. So if I move our event handler back onto our input,
[01:40:07]  value is there and it's the HTML input element. So now when we type, we're back in our, in our, in our happy zone. Of course, this
[01:40:18]  one's no longer picking up the events. So, you know, it's not doing that, but what I'm, what I'm getting at is that like Type
[01:40:28] Script cannot know the target of your event. So it can't give you this, but you might be like, wait a second. Doesn't react. Why doesn't this
[01:40:38]  error in react? And this is one of those things where like, sometimes you shouldn't just stop at like the truth. This is again, where like the theme of
[01:40:53]  this, this, this stream is going to be like lie to TypeScript for your benefit. Right? Like that's what TypeScript's there for, to, to
[01:41:01]  be lied to. And. No, this, this doesn't error in react. Let's just put, let's pull it up. Vite. React. Something
[01:41:11] . Like template. Vite template react or actually want Vite. TypeScript react. We want a TypeScript feed react. Um. There we go. That is that
[01:41:18] . Uh, can I actually, no, let's, let's, let's look, let's do like stack blitz. Stack. Stack. Blitz.
[01:41:26]  TypeScript. React. Beautiful. Okay. Let's add an input. Uh, let's not put in the UL. All right. Let's not put in the
[01:41:40]  UL. Okay. Let's add an input. All right. Let's not put in the UL. Okay. Let's add an input. All right. Let
[01:41:52] 's not put in the UL. Let's not put in the UL. Let's add an input element. And let's give it a, on change event
[01:42:03] . And then go E is whatever, something. We don't even care. E dot target dot value. Well, if I look here, E dot target is, uh
[01:42:19] , their change event with an HTML info download. It knows this is true. Look at chat, Ryan. Yeah. Okay. Yeah. It's a little slow.
[01:42:31]  People found react on new. Yeah. Okay. Yeah. Right. That, that, see, that, you're, you're, you're right. This,
[01:42:48]  this is the key to the solution. If you put on the div, it does error. So, but you, like, if you think about it, what,
[01:43:00]  what, what I showed earlier, you're like, but the target hasn't changed. The target's still this input element. Um, why does it error? Well
[01:43:14] , this is the little trick we can do. What we can, we can, we can assume something here because the source of these sort of events, like the change
[01:43:25]  in input event or whatever are only like, if you go on MDN and you're like MDN, uh, input event or something. Right. Input events
[01:43:35]  fire with the value of input select or text area. Like basically because you know that these events, no matter like where they are in the tree, um, are going to
[01:43:48]  be sourced from these, from, from these. And because these generally don't have like other elements of these types inside, you don't put an input inside a text
[01:44:02]  area. You don't put a, uh, input inside a select or, you know, a text area inside a, you know, because they like, because they
[01:44:09]  don't, you don't do that. Right. You can basically assume that if the handler is on the, an input or a select or text area element, that the
[01:44:27]  current target equals the target. That that's, that's the trick here. So while target won't work, if you hoist it up to a div, cause
[01:44:39]  it has no way of knowing and current target. Won't functionally work up here because it, it, it's, it's this one that you want. It
[01:44:48]  means that this very, very, very common case of just working on it on the element itself works. And it's so funny cause like, didn't really think about this
[01:45:03]  hard. Cause like we, we could have fixed this at any point, but like we were like following the truth that like TypeScript can't know this, but we can
[01:45:11]  give it a, like a, you know, a white lie and get there. So let's look at our JSX types, JSX DTS. And we
[01:45:21]  have something in solid because we support a few, but we have event handler and bound event handler in the union. But now we have input event handler and what does an
[01:45:30]  input event handler do? Well, the normal event handler is the event. Plus we added a couple things specifically saying that, look, target can be any DOM element. Current
[01:45:41]  target is T for our event handler. But our input event handler says, look, current target is T, but then if T extends input, select or text area element
[01:45:52] , then target is also T. Otherwise it's DOM element. So like, it's like, it's like a, it's like a slight, like little manipulation
[01:46:06] , so to speak. But that means that in solid 1.7, um, you will be able to do this. And it will not error at you because you
[01:46:18]  will get an input element because it'll know that in the case of adding an input event or a change event or whatever to an input element, the target equals the current target
[01:46:30] . Yeah, yeah, I mean, the change event is special in so many ways. Um, so yeah, like the, but the thing is even solids event hand
[01:46:49] lers are also what I call semi synthetic. I got that term from Inferno because we do event delegation. We have to fake the current target. The target itself
[01:47:01]  is fine except for web components where we actually have to undo the shadow DOM, which is something we do in solid. But because like the, they kind of the, if
[01:47:10]  you have a web component and you put, and you click an element inside it, um, the, the, when you're outside of the web component. And if that
[01:47:18]  element was like in the shadow DOM, it will report the custom element as a click target instead of like the specific button or whatever. Um, but what we actually do
[01:47:27]  in solid is the current element, because we, what we do is we catch all the stuff up at the document. The current element, we actually replace the getter,
[01:47:36]  like with an object.define. an object.define? I mean, why don't I just show you? Well, since we're talking about, why
[01:47:42]  don't I just show it? Dom expressions, dom expressions, source, client. Not that, not that. Was it event handler? Yeah, here. Object defined
[01:48:10]  property current target, get node or document. And what's this node? It's the node is actually this node that when we receive it at the top of the document
[01:48:24] , we actually go back to the target and walk up the parents in this wild loop. And then the current node is, so as we walk up the parents and fire off
[01:48:35]  your event handlers, when you're at a particular event handler and you call get, it's just a getter, it returns the node that we're at on our
[01:48:46]  current walk. So we actually patch the native events slightly to do this. It has the same interface. We didn't like change it or add missing properties or whatever,
[01:48:55]  but to simulate like event bubbling, we actually do this. And you'd be like, this is a lot of extra work where you just use the dom EPS. As
[01:49:05]  it turns out, attaching a bunch of event handlers is expensive historically. I need to test this again, but for the longest time, event delegation was a significant performance win
[01:49:16] . keep in mind, I'm not patching all global events. Literally it's the event. Well, I guess technically fine. Like I'm not like patching
[01:49:35]  like a constant object. It's the event. When we get an event and we realize that we should handle it, then that event object, like when we, we handle
[01:49:45]  it, when like, like, like the documents done with it, we, we mutate that specific event instance. So I don't consider this the same as like
[01:49:54]  patching global event. This is more of like mutating an instance of event once everyone else is done with it. Reverse shadow dom retargeting. I
[01:50:06]  mean, I did just explain it. It's, it's the fact that the, um, if you click inside a shadow dom, um, it reports the element as
[01:50:19]  the click target instead of the button. So we, we actually have to walk down the composed path to actually find the target and then we make that the target. So
[01:50:28]  we, the shadow, we can reverse that tendency of it. Yeah. I, I, I had a stream on web components a while ago. We, I,
[01:50:39]  I, I'm not going to get into all the weirdness that web components, web components have a lot of very interesting choices. Okay. Um, so yeah,
[01:50:51]  yeah, long story short, solid 1.7. Let's again, kind of just playing with the types a bit and, you know, a nice convenience factor. Okay
[01:51:03] . Yes. But if, if you remember solid was built for web components originally, all right. So there is, let me see here. There's a couple other
[01:51:28]  smaller, we've been adding types that we've been missing from the JSX types, but I think it's time for the big typescript issue, right? Um,
[01:51:41]  let's talk about what I'm now calling null asserted control flow. This, this is what, this is what everyone's here for, right? Mm. Mm
[01:51:51] . All right. Give me a second. Cause this, this topic is why the stream had that cover. I've, I've, I've known about this problem
[01:52:12]  for over a year, like for quite some time. And it was, it's always been on the list, you know, and you could see solid 1.5 was
[01:52:18]  building towards it. Um, when we introduced the keyed, um, the keyed property and the, you know, for the keyed control flow, we're building
[01:52:28]  towards, um, letting for this kind of simple case, it's fairly common getting past this, what this, this problem, which is when someone has a show component
[01:52:44] , I mean, maybe I should just make the example in the uh, playground so we can, you know, do this. Right. Show div everything's count,
[01:53:10]  right? when count count show, no show. Um, and actually we're going to say that count is a little bit more complex. a little bit more complex
[01:53:38] . We're going to say that count is, um, an object with, I don't want to use dot value because dot value is let's, let's do
[01:53:59]  data, which is a string. What's it complaining about? Oh, right. Cause I can't put it in. Right. Cause I need to access data. Right
[01:54:16] . So we got a, we got a problem here. Right. So you look at this and you're like, show this only when there's a count and count
[01:54:34]  dot data. You're telling me that count could possibly be undefined, but I just said only show this one, one count. And the truth of the matter
[01:55:03]  is it's because TypeScript has no clue what to do with this. Like it, this is just JSX. There's no idea of context. There's no idea
[01:55:14]  of a flow. Like how's it supposed to know that this is supposed to type narrow? And the solution is this. Sorry. No, it's, it's
[01:55:24] , it's this. For some reason, TypeScript users absolutely detest this. Right. I don't blame them to a certain degree, but like they, they
[01:55:43]  might even rather do this, but the, the, the, you know, like they have no way of possibly knowing without knowledge of the compiler step type. We correct
[01:56:06] . Well, the thing is TypeScript is correct, but it's actually not the compiler that, that does this. As I mentioned, show is just a function like solids
[01:56:15]  compiler doesn't do anything special in terms of this. And in fact, if TypeScript saw the compiler, um, it might be even more inclined. Yeah. To
[01:56:26] , to do this, like this actually from like a pure, um, the, basically the root of this problem is even deeper than this. Do you know what I
[01:56:40] 'm doing TypeScript offer? Sorry. Where's that comment? I need that. Right. But like TypeScript doesn't, isn't aware of that step, so
[01:56:59]  to speak. Like it, it, it, it, like all TypeScript knows the, the problem is actually like even more fundamental. Like, first of all, JS
[01:57:09] X, TypeScript would have no way of handling this anyways. So we'd have to do something, which we'll get to, but like, um, sorry, here
[01:57:16]  it is. The, I know what I'm doing operator. I love that. Um, but what I, what I'm getting at is like, there's, there
[01:57:23] 's, there's even more fundamental problem here, which is, which is this pretend I wrote this expression. Now count and count dot data. Object is possibly undef
[01:57:39] ined. Uh, don't worry about the link thing. We can put the, we can put this in here. It doesn't really matter. Let's put it here
[01:57:51] . Even doing this doesn't actually solve our problem. Yeah. And I mean, the reason for that is that from TypeScript's perspective, this is a function call
[01:58:06] . It has no way to know that during a synchronous execution, that it could return the same value, that it's, that it's the same thing. And there
[01:58:17]  are ways to solve this. And the, the, the key way to solve this is usually around some kind of like type guard or null is null guard. And I,
[01:58:29]  I, let me, let me, let me, let me show you, uh, an example of playing around with that null guard. Okay. I, I,
[01:58:41]  I went to the TypeScript playground and I wanted to try like a bunch of different scenarios and essentially, I wanted to see if we can like look at something synchronous and
[01:58:56]  kind of play with it. Um, you know what, actually I'm jumping ahead. We'll, we'll get back here in a minute. Sorry. My bad.
[01:59:02]  I, I, I need to choose one to show that playground. This isn't quite right. I got ahead of myself. Okay. So if you've seen type assert
[01:59:09] ions and stuff, you know that you can, you can do stuff a little smarter. And one thing that you may have seen in solid is that if we use a
[01:59:18]  callback, we have more control over what, um, like what we, we, we pass through here. And it's going to complain here because it needs to be
[01:59:33]  keyed. And this is important because um, we're passing the value through. So you could think of show almost as like an assert or a guard function in this
[01:59:49]  case, and we're passing the value through. So now it knows that it's only running through and that it has this value. So count now becomes this object. There
[01:59:58] 's no possibility of, of it, you know, not being that object and TypeScript is happy. The, the problem with this is it's not granularly reactive
[02:00:14] . What I mean is our original statement didn't re-render the div. If count was still true and we just replaced it with a different true value, it would
[02:00:26]  only update the, the, this content. If the value is coming back in through a callback function like this, well, it has to recall the function, which means
[02:00:37]  every child from this point needs to be recreated. Okay. How, how's chat doing? Sorry. I, yes, this is true as well. Type narrow
[02:01:05] ing is beyond what I'm, I'm capable of to be fair. Um, you will have to put it. You can use the same, you can, you
[02:01:15]  can use the same sort of technique to like for specific cases. Like you can be like, I want to type narrow this and write a guard for specifically that, but in
[02:01:27]  a general sense, I can't like the guards have to be specific. So in our case, a show component is designed to basically be nullable to be a switch
[02:01:39] . So this is only about nulling, not about typed arrowing at the moment. But, but where I'm getting at here is that this is kind of a solution
[02:01:50]  and people who use TypeScript are just like, Oh yeah, sweet. Callback form keyed done, you know, but this is kind of like, and in a
[02:01:59]  lot of cases, when you change something major, you are kind of like going to a new place and you're replacing it. The problem is like, if it were
[02:02:07]  not for TypeScript, almost no one would use this keyed property and they go for the more optimal updates. There's almost like, there are reasons you want to use
[02:02:21]  keyed sometimes, but there's a lot of reasons where you wouldn't. And what I was finding was I was talking to developers and I would never recommend keyed because
[02:02:29]  I understand, you know, like when you didn't need it because I understand the performance implications. But then every TypeScript developer we're going through is like, no
[02:02:37] , types and solid are sweet. You know, show keyed, got it. And I'm just like, what, why are you guys using keyed? Like this
[02:02:46] , this is like not good. Yes. Our match has the same thing. So this, this is, yeah, the problem now is it becomes a React kind of
[02:03:12] , yes, except a bad React, a React that actually recreates like real DOM nodes. So like, there are times you do want it to be keyed.
[02:03:21]  That's the point, right? Like you want to swap out that section for consistency. You know, you don't want bleeding animations and all that, you know,
[02:03:28]  data model, but there's plenty of times you don't want it to be keyed and forcing everything to be keyed is not a good thing. So the solution,
[02:03:37]  seemingly, you know, that we talked about for a while was, well, what if you, without the keyed, this could be, it's going to complain
[02:03:47]  to me right now, but this could be a function. And now it can still go through this guarding process. And now you go, I have a function that I don
[02:04:01] 't need to, I don't need to check on because we control it from show. And now you don't need to do the checks. Pretty straightforward idea. Seems
[02:04:11]  like a good one. People had been selling it on me, you know, ever since we, you know, even before we introduced keyed, just needed to find the
[02:04:19]  right time to introduce it. You move too fast. Okay. I'm just saying if you had a callback form that was not keyed, you could pass a
[02:04:34]  type narrowed function version through. And that way this would retain the fine grain tracking, right? So basically, if I go to the change log and I can show you
[02:04:51] , we're talking about before you had this keyed version, right? Where you, you could do this, get the non null user and use it. You had
[02:05:00]  the non keyed version without the callback where you'd have to null assert, but it would only update the one thing. And the new thing would be, you can
[02:05:08]  now get the null non user when you don't use a key callback and you get a function and you can use name directly. Exactly. Yes. So if you
[02:05:32]  exist on Twitter, you know that I got here and I was like, all right, sounds good. And all I did was basically pass the signal straight through. Um
[02:05:47] , because we do the check, the type narrowing, everything just kind of worked. And I was just like, done and done. All good. Let's, let
[02:05:55] 's ship it. It's been a long time coming. This looks good. Well, not exactly. I had some astute people in, uh, in our discord kind
[02:06:06]  of be like, Ryan, what if you hoist the value out of that context? Like what if you put it in a set timeout? Right. And
[02:06:19]  that, that gets us to, um, to, to, to my, my Twitter examples here. Right. What if someone did this? It's so funny in
[02:06:36]  discord, when you post the Twitter link, it gets code syntax highlighting, but on Twitter, you don't have code syntax highlighting. Yeah. Yeah. Big props to
[02:06:44]  Fabio, always thinking of these things. Honestly, part of this gap is I'm not like heavily a TypeScript user. So like so when I understood this,
[02:07:06]  because this is definitely null. If someone switches user to false and then like four seconds later runs this timeout, it's, it's false. Like it's, it
[02:07:17] 's no longer there anymore. And I put the poll out there. It's null or undefined or whatever, you know, it is. And there is a big
[02:07:25]  difference of opinions on like how this should go. Most people actually said null or at least initially some changed their mind, but I think a lot of people, their first
[02:07:38]  gut reaction is like, it's a signal. It like when it go like signals, you always get the latest value. That is the rule. We have all these,
[02:07:48]  like the thing is with react, it's immutable. It's in the past. You, you get the past value with solid. It's kind of like deeply mut
[02:07:57] able. It's not like each atom is immutable, but like the structure is immutable is mutable. And you'll always get the latest value. Always,
[02:08:04]  always, always get the latest value. So in both cases, if, if, if there was ever like a tear where you could get like a mix and match of those
[02:08:14]  things, we, we bail. Like we, we, we do suspense. We do transitions. We do, we do stuff. We're like consistency is king.
[02:08:27]  And, but the problem here is, I mean, I could show you and I will with the TypeScript playground, but essentially this will tell you that this can't be
[02:08:39]  null. Like if you hover over, over narrowed user, it'll be like, Oh no, narrow, narrowed user, um, can't be null.
[02:08:48]  And actually, because I've implemented this, we can actually probably look at this in one of our tests, the show spec. Yeah. Let's look at this,
[02:09:01]  um, testing donkey show control, testing show control flow. I want non-keyed function show control flow. I guess this one isn't like a good example because
[02:09:18]  it's like, it starts at zero. If I made this like undefined or something and then, so this was like number or undefined, let's
[02:09:34]  pretend this was the case. What you're going to see here is count is number or undefined, but this one is an exact accessor of numbers. So here
[02:09:43]  the undefined is gone. Right. But the problem is, you know, uh, can I do this as a matter of expressions? Maybe set timeout count
[02:10:03] . If I go here, it's still number, even though it potentially could be null. So like this, this is a, this is problematic because TypeScript
[02:10:41] 's, you know, lying to us. I implemented this and I was like, it's fine, but I don't know if everyone who read the Twitter poll understood what
[02:10:50]  I was trying to say here, but this is the base behavior. If you're in solid, you get a null, even though TypeScript would tell us that it can
[02:10:59] 't be null. So there's a problem here. When I put this post up, I was like, screw it, let's just throw an error. Right.
[02:11:07]  That's the, this was actually where I was sitting, the least popular answer. And the reason I put the poll up was because in my head, I only had these
[02:11:16]  two options and, uh, Fabio and people at discord and every, a bunch of TypeScript users were like, no, just make this previous value. And I
[02:11:29]  didn't like the previous value because of the consistency thing. The previous value, while you could say, make a stipulation where you're like, this is always the
[02:11:51]  previous value. It's not solid is not immutable. So it's, if you get past the fact, it's not previous value. It's previous value for
[02:12:02]  when it was true. So if, if user changes 10 times, it's the last user before it goes to null. And secondly, if this condition isn't just user
[02:12:14] , let's say it's user.visible or something. You, you, you have a new problem. And I actually, I made a second poll to show the
[02:12:24]  problem with using it in the past. Now I'm using a store, which is deeply, um, reactive. So if, if you're basing this on user
[02:12:37] .visible and you're using this narrowed thing for visible, what should you do here? Because here's the thing, even if I keep the value for when it was
[02:12:50]  last true, visible will have updated. So in a sense, you will still have this narrowed user, right? Like, like, who kind of shouldn't exist
[02:13:06]  in this context anymore, because it's been unloaded. But now visible is false, even though, you know, it was initially true. Yeah, because I mean
[02:13:28] , here's the thing, right? No, you should never actually hit this situation. This is, this is the crux of the problem, right? If you have
[02:13:38]  a timer like this, you should be releasing it. If you expect it to exist past the lifetime of the show component, then don't use the narrowed version,
[02:13:46]  use the original user version, you know what I mean? Like, this, this pro, this, this example is, is kind of weird, right? And you shouldn
[02:13:52] 't be doing synchronous setting either. Like, while you're rendering, you shouldn't be setting. Like, basically, the situation should never happen. But it's an awkward
[02:14:02]  place, because, like, we're showing something top level. What if you're passing it through to other components and stuff, using it in like their hooks and stuff,
[02:14:15]  and it actually works differently? Most of the time, when you change something, it changes it, right? And in here, this one doesn't change. So like
[02:14:25] , if you set two things at the same time, like set user to, like, pretend this user selected user, that changes the user, and there's a user.
[02:14:33] visible. So let's pretend you change both user.visible and selected, selected user at the same time. You get inconsistency in this, leaving it in the
[02:14:43]  past thing. So like, very, very, very not stoked with this solution. It makes TypeScript happy. But on the other hand, it basically throws away many of
[02:14:58]  the kind of consistency guarantees that we've come to expect. Well, I mean, it's not my responsibility. This clear timeout could happen inside a child component that
[02:15:19]  has no knowledge of the show. Like, but you're right, the end user should be cleaning this up, so to speak. It's kind of like when people
[02:15:28]  access state and react after the components unmounted. And the problem is, the only true way of doing this is degrade the data all the way to pure immutable
[02:15:42]  cloning stuff. And that's not how solid works. It's just not happening. We're not going to, like, we're not going to make our data
[02:15:50]  structures completely immutable. Like, again, you're back at React. You can't do that. Yeah, I think you're onto something there in this sense. Like
[02:16:08] , this is a huge argument for why values should stay in the past. That being said, it's not our model. And basically, you're never going to hit
[02:16:18]  this case anyways. So, like, this is the kind of thing when you get nerd sniped by people in your discord. But knowing this is still an important thing from
[02:16:33]  a design standpoint as a framework designer. And there's a lot of arguments that flew around because they're like, look, there's a lot of arguments that flew around
[02:16:46] . And there's a lot of arguments that flew around, because they're like, look, look, there's a lot of arguments that flew around and they're like,
[02:16:48]  look, there's a lot of arguments that flew around and they're like, look, there's a lot of keyed would work this way. Like you'd get
[02:17:12]  the previous value. But like, from a reactivity standpoint, it's very awkward that you have, you can be in a situation where you have the thing, but shouldn
[02:17:21] 't have the thing. Like you're not getting the latest thing, but you are getting the latest update of that thing. That kind of inconsistency is, like
[02:17:29] , from my perspective, almost unacceptable. The truth is, and we're starting to hit on it, right? Like, we're starting to hit on, on
[02:18:03]  like, this problem is, comes down to the basics of TypeScripts. Let's, let's, let's, let's just get into the TypeScript playground and
[02:18:14]  play with a few things and, uh, and, and look at that. So, uh, let's, I have the open one. Let's, let's
[02:18:27]  just, uh, let's just start with the most basic version of this. I'm going to, we'll, we'll, we'll get back here in a minute
[02:18:35] . Because if real value in TypeScript, real value, pretty obvious what's going to happen here. It's just a string, right? And if you go set
[02:18:51]  timeout, you know, real value, what you're going to see here is we're back to stringer undefined. Okay. This is, this is basic
[02:19:02]  TypeScript. Now, a couple of things to consider about TypeScript. If I go in here and go real value equals undefined, TypeScript knows that it
[02:19:13] 's undefined, right? So now it, you know, at this point it goes back to stringer undefined, but TypeScript's smart enough. If
[02:19:22]  I go update, let's, let's make it more close to home. If I do this, TypeScript has no clue. It's, it thinks it's
[02:19:45]  still a string, right? So the second you have a system where you, uh, where you're like not inlining the, the, the mutation or whatever,
[02:20:01]  as soon as you're hoisting into like setter functions and all that stuff, unless the value is locked in the past, um, you're going to have a
[02:20:09] , you're going to have trouble. So this is kind of true of signals in general, just like, because the scenario here is that, and not just like reactivity
[02:20:19] , period. The, the, the problem is TypeScript works off the premise that your code is immutable, um, essentially. And like in the past, if
[02:20:29]  you, which is, you know, a reasonable place to be coming from. Right. But it's, it's, it's, it's a little bit more complicated
[02:20:44]  than this. Yeah. I mean, a decorator would be nice. I'd be into that, but it's the, there's ways to kind of like lie.
[02:20:54]  And I'm going to, I'm going to continue a bit with that because like the problem is it still just comes down to the fact that TypeScript can't handle
[02:21:01]  that initial situation where we had, which was signal and signal dot value. Like it can't handle those two function calls, but you might be going, ah, what if
[02:21:16]  we made our signal getter a property, like a getter value. As it turns out, if I do that, and then I go, a dot value,
[02:21:25]  I get a string and then I go set type out and it's back to stringer undefined. We're solved, right? Actually, no. Like this is
[02:21:36]  like the first level thing where you're like, okay, well, that's it. We shouldn't use functions, even though functions are incredibly composable. Um,
[02:21:45]  we should just use dot value. And I was like for a while going type script, can I decorate my signal? So to tell it to act like a property, right
[02:21:53] ? Like if we can do this, then, you know, we're in a better place and don't get me wrong. This is better. But there's still
[02:22:10]  a problem here because typescript has to assume that every function is going to be called at a different point. It has no clue. And the truth is, what do we
[02:22:20]  do in reactive systems to propagate reactivity so we don't lose reactivity? Even if stuff executes synchronously, what do we do? We wrap it in functions
[02:22:29] . So the second, even if this worked, the second that you go to like put it in a reactive expression that runs synchronously, it's gone. Right? So
[02:22:44]  like dot value can't, like typescript can't tell the difference between a synchronous executed function. And like, uh, uh, like a callback like this.
[02:23:02]  So like we almost lose the value immediately. And some people might argue that this is a very big lie because this is a function call. So math dot random is a
[02:23:15]  real thing. You know, you know, like, so I, I'm not saying like, we know the rules of signals, this is not going to happen. So
[02:23:30]  this is actually kind of convenient, but in general, the fact that this works in typescript is kind of a hack. like it's not telling us the truth because
[02:23:41]  there is no guarantee with a property access in reality. And typescript can't tell you that. So like, as much as we want to believe that this is
[02:23:55] , uh, type safe and that's a good assumption, it's not the truth. Right? So like, okay, this, this isn't bad. It's slightly
[02:24:12]  better. I don't like the trade-offs because of the composability, but it is slightly better for typescript, but it still has a bunch of traps in it
[02:24:21] . Um, the other reason I don't like it is because it's like immutable and we can, we can talk about that as well, but like, like
[02:24:29]  you pass the getter and the setter together, but I've talked about another stream. So it's a whole other thing, but essentially even this isn't like the
[02:24:39]  whole truth. So can we do anything else? Well, we already showed the naive thing, right? If we, if we make a real value, uh, a
[02:24:50]  signal and then we call as a function, unfortunately string or null, it doesn't remember set timeout string or null. So this is good, but this is bad.
[02:24:59]  Um, you could, how about a non-null assertion? I, I learned about this in, in the process of making the stream where you can,
[02:25:08]  you can actually retype the getter in a certain way, like, like check its value and then say it's a non-nullable getter. This is
[02:25:16]  really cool. And in the sense, this is kind of like what we're doing with the show component, because now with this cool little helper, which I'm even
[02:25:26]  debating publishing it for solid, maybe you can basically go non-null B and now, um, B is fine here as a string. Of course, it's still
[02:25:35]  narrowed here, which is our problem, but you know, we can do this now, B and B dot value. Like obviously B doesn't have a value, but
[02:25:45]  this, uh, sorry, not B, you can do non-null B and B dot value, right? Obviously like this isn't the right type, but
[02:25:55]  this actually works. So every instance of B from that point on now thinks it's the narrowed version. That's the string. Does that fix user dot filtered or
[02:26:17]  this? No, because we keep all our values in the present. All this, like, this is the problem that the show component has. It would be null, even
[02:26:26]  though it says it's just a string. Do you know what I mean? So, okay, this, this, this is this. So let's, let's get
[02:26:36] , let's do something even crazier. What if we let our signal instead of constanting it? Well, as it turns out, because if you let it,
[02:26:45]  it thinks it can be reassigned, it actually works properly. So you can actually go non-null C string, set timeout string and undefined. So
[02:26:53]  funnily enough, this little trick in TypeScript lets this work. Problem is we can't really leverage this trick because introducing a variable into a context, like there's
[02:27:03]  no way to say that, like, this is like, it thinks it's a const coming in. If you like, in a sense, like it, it sees
[02:27:10]  no opportunity of reassignment. Um, so, um, we, we, we don't get this behavior and I understand why not. Like in theory, you know,
[02:27:19]  this would be kind of cool. Like you think, think about it in a callback, when you get a variable in technically, it's not a const, you
[02:27:28]  can reassign it locally, but they treat it like a const for convenience, I think, which makes sense. But otherwise, you know, we could actually get the
[02:27:37]  right behavior. Right? It's funny. It's because this assertion here is, makes it think that it could be reassigned. But I, I tried this
[02:27:49] , this doesn't work for us, so. Yeah, I mean, no, if, if this was a Matt Pocock screen, you guys would be learning something
[02:28:12]  valuable. Um, you are almost at the exact moment when I took the, the thumbnail shot. Like, I'm, I'm, I'm probably making the same
[02:28:29]  face right now. Like it's, it's, it's really painful, all the different like variations on this. And like, from my perspective, value in the
[02:28:49]  past might be acceptable for TypeScript, but it's the kind of decision that, that as a framework designer, I would regret in the future. It would call, it
[02:28:57]  would introduce some unexpected variable that then suddenly I had the support for all of time because of my stupid mistake. And I've, I've made those kinds of mistakes in the
[02:29:05]  past. And it's the thing that you learn over time to like get better at avoiding them. We all make them initially, but like, like it's, it
[02:29:14] 's one of those. Just letting it null through. I mean, I, I was fine with that initially. The funny thing is I couldn't make up my mind.
[02:29:24]  I actually nulled through originally. Then I went to previous for like a couple of days and I talked to a whole bunch of people. And like, basically the,
[02:29:48]  the challenge I had is if, even if they would never hit this use case, people really into TypeScript did not want to use the non-dual assertion.
[02:29:58]  And if they knew that it was, could be broken, like in the set timeout case that they will never use. They'd, they just put keyed on
[02:30:08] . And the second they put keyed on, I lose. Like the, the whole thing is pointless. I think, I think, I mean, cause I,
[02:30:27]  I think you're starting to get where, where, where I'm getting at. Cause what I started realizing was I care about runtime consistency. Of course I would.
[02:30:38]  TypeScript heavy, you know, people care about type consistency. They will give up all the performance of the world. Like, like, which is like, this is
[02:30:53]  the problem I was having. I couldn't get in their mindset. I'm like, you're telling me you'd re-render your whole thing. Like you go back
[02:30:59]  to backbone style updates. Just to like save yourself from putting exclamation mark. Like I couldn't like, I couldn't understand that thinking. It was like so foreign
[02:31:11]  to me that someone would like basically like, why use a JavaScript framework? Why don't you just like spin around on a chair? Like, like, like from where
[02:31:22]  I was sitting, it was like, you know, it takes a lot of empathy to be in my position, but this was something that I like, I was having a
[02:31:29]  very hard time. And every person that was very heavy on TypeScript was just, yeah, keyed, keyed. And I was like, like, you know,
[02:31:37]  yeah, yeah, I guess so. Like, like this, this was like one of those ones that is just like, man, you know, like, so I want
[02:31:51]  some people like, well, you should pull the keyed out of the show component. I'm like, yeah, fair, fair. But that doesn't change it
[02:31:57] . People go looking for it, right? So I need to have a solution here that satisfies everybody. And I was even for a moment considering giving past values, because like
[02:32:08] , I could kind of like make some pseudo explanation of it. But yeah, I mean, it's been hinted at a chat a bunch. If this situation should
[02:32:18]  never happen. Like, look, type consists, the only overlap of type consistency and of runtime consistency is a thrown error. Right? I I this this made a huge
[02:32:39]  comeback after I did it, people still log false is definitely still the winner here on this side. But you start thinking about it, it's like the only way that we
[02:32:52]  can actually guarantee that it is not null. And at the same time that things aren't consistent. Yeah, I know. And the thing is, you can't really
[02:33:07]  explain it. Yeah, yeah, yeah. I mean, you could do this thing. But yeah, so it's tricky with an expression, because you gotta like layer the
[02:33:23]  expression. Yeah, I know there's ways that you could like add one additional check, and then do it like you can add my non null here. And then it
[02:33:31] 's still tricky, though, because like, the non null is kind of lying to you, even unless your solution is to throw. As we see here, this, like
[02:33:43]  this is lying to you, like any level of this guarding is lying to you because the truth of the matter is, a signal, which is always the latest value,
[02:33:55]  can be undefined in this case. The exclamation mark is the most accurate thing. You're saying like, hey, I know it's not null here. Type
[02:34:06] Script will probably never help us with this. Maybe like, we can convince them to make it like a way of decorating it so that it looks like a looks like this
[02:34:18] , and we can kind of get halfway through. But as I mentioned, the problem with reactivity is you pass everything in functions. So you almost immediately lose this benefit.
[02:34:25]  And even this is a lie. But you know, as we've learned here today, lying to TypeScript is a good thing, like from a library perspective, because
[02:34:38]  it lets the end users, like, you know, it's like a white lie. Well, I don't think it's a big performance thing because you're not
[02:34:50] , you'll never throw the error because you'll never do this. Yeah, I know. But the reason I did the poll is not to get the answer initially. I
[02:35:11]  mean, the later ones, like this one was probably, the second one was probably like a, like, you should completely ignore this. I wanted to know people's
[02:35:19]  gut feeling. When they first saw it, and they just clicked on it, and they weren't really reading, and they're just whatever, and they didn't understand the
[02:35:25]  situation, what their gut read. And the gut read is a signal is a freaking signal. That's what I read here, right? That's, that's the,
[02:35:31]  that's the gut read. Like, you call the function, you get the value, you know? That's, that's sort of where it starts, and really where
[02:35:40]  it should end. I'm okay, I would be fine with null, generally, because, you know, this is, you know, I could be like, it
[02:35:49] 's a TypeScript problem. I'm fine with an error because it's, it's consistent, because at least we didn't break things, you know? Like, we
[02:35:56]  didn't, like, tear our, our consistency. And it seems like most people are talking TypeScript are fine with an error, because then I'm not, TypeScript
[02:36:04] 's not lying. So, this is the, as I said, the only real overlap here. Yeah, this is for 1.7, right? This is
[02:36:14]  a new feature. Biggest thing for me is, having to do derived signal returns null if it's not type asserted, to then being able to do a non
[02:36:35] -null assertion stuff. Yeah, maybe I'm not quite following. This stuff drives me nuts, too. I don't like it, but I'm willing
[02:37:01]  to be like, okay, you know, if you care enough about it, do it, you know? Yeah, you know what the problem is? I could kind
[02:37:13]  of do it, but Solid isn't a compiler in the same way Svelte is, so our control flow isn't special, for better or for worse. It's
[02:37:24]  so funny, like, because sometimes we don't get credit for this piece, because people are like, they see the for component, and they're like, oh, it
[02:37:31] 's like freaking Svelte or Vue or whatever. And it's like, no, actually, it's way more like React. It's not a compiled control
[02:37:39]  flow. Like, Solid doesn't know the control flow. Our compiler doesn't actually know that. 4 component could have been written in user space. So, like, we
[02:37:50]  could make 4 special for a plugin, because we're being practical. But from a language design standpoint, we have no foot to stand on, because Solid is just JavaScript
[02:38:03] . Which whole other topic, which I find amusing, because as React gets less just JavaScript, um... Yeah, anyway. Yeah, I mean... Yes, exactly.
[02:38:21]  Like, that's the thing. You should be cleaning up. Events go away automatically, because the DOM goes away. Like, this is such an edge edge case. And
[02:38:32]  if you really want it to happen, I wrote two error messages. Maybe some people can help wordsmith the error messages for me. But what I what I ended up
[02:38:40]  doing here was, I made a dev error and a non-dev error. And in the non-dev error, it's just like, stale read whatever, because
[02:38:47]  I didn't want to use a package space. But you have to error in both modes to be consistent. Um, you know, to live up to the guarantee. But
[02:38:54]  what I did, sorry, it's in flow, was I was like, look, attempting to access a stale value from name a component that could possibly be undef
[02:39:03] ined. This may occur because you're reading the access or return from the component at a time where it's already been unmounted. We recommend cleaning up any st
[02:39:11] ale timers or async or reading from the initial condition. I mean, it's a bit wordy, but this gives me the possibility to give you a really detailed
[02:39:20]  error message. And basically tell you what to do. And we can even link docs to it, you know, if it, you know, makes sense. And, you
[02:39:30]  know, it's very clear what the solution is. Because it's like, if you want to do something kind of out of the loop there, just pass the outer
[02:39:38]  user in, you know, like, just like pass this version in, not this version, you know, I named them the same in this example. So it's
[02:39:46]  not good. But, you know, I mean, like pass and user rather than null user. Yes, it's based on the condition. It's not based on whether
[02:40:07]  it's null or not. It's based on the condition. In this case, like these, it's the same thing because it's the null thing, but it
[02:40:15] 's based on whether the condition is true or not. Yeah, someone can help me with the text to make it nicer. I'm not used to writing this, but
[02:40:33]  this is the new norm, right? We're going to, we'll have like a string lookup table for our, for in dev mode or like paragraphs of explanations.
[02:40:40]  I think when strict mode happens, we'll have to do this too, right? Yeah, that's, that, that, that's where, that's where I
[02:40:54]  think I landed. I only landed on that this morning. I posted the stream before even having made that decision. But like, you know, so I have to give it
[02:41:07]  a day because every other time I made this decision, I've had to sleep on it. And then I, you know, went back and changed my mind. But this
[02:41:15] , after talking about it, once I convince people that the past is a terrible idea, the, the, what they come back with is like, most TypeScript users
[02:41:25]  are like, okay, fine. Get rid of this feature. Don't add it. And, um, you know, if we need to, we'll use the exc
[02:41:34] lamation mark or the, uh, you know, optional chaining. And then I, then I like, I stopped them for a second. I go, so you're
[02:41:42]  just going to use key control flow. They're like, yeah, we're just going to use key control flow. And I'm like, no, okay. That
[02:41:46] 's like, that's not, that's not working for me. Yeah. I, I have no real guard against that. This isn't guaranteed. It's kind of
[02:42:06]  like when people set state in react after component amounts, it's the best example I can think of because it's like, if you do stuff like this is the kind
[02:42:13]  of thing that that's why you've got to air in prod too, like you, you just got to error. So people like go, oh, there's this bug
[02:42:20]  that we haven't reproduced and we have to find it. No, not quite. Um, I did want it to come out this month, but, uh,
[02:42:33]  we've been working with, uh, library authors. I got to get into the docs, um, to make the proper updates of docs. I, uh, I've
[02:42:40]  been talking and putting the betas out. So the ecosystem team goes in a few, uh, libraries have mentioned that they have some breaking stuff. I want to look
[02:42:48]  at that personally myself and make sure that it makes sense. See, the cool thing about these breaking changes from an end user standpoint, um, unless you're doing some more
[02:42:56]  complicated or weirder stuff, it's not going to hit you. It's just going to make everything like a little stricter and maybe a couple things here
[02:43:02]  and there library authors. This is not this one so much, but, uh, the, this, this, uh, like stricter, not the input one,
[02:43:14]  stricter JSX element one that we've been talking about earlier. You probably might feel that a bit more because of the whole, like return a memo. Now you
[02:43:25]  have to cast cast it or return a fragment, so. yeah so where is it if it switches the false and back true that would be i mean this is why
[02:43:43]  you should do cleanups but like yes it's still going to be true at that point so it's not inconsistent because again the way solid works you get the latest value you
[02:43:58]  get the truth it is not null so it is fine you're going to have to be more specific i think we can is it off the typescript topic though or the
[02:44:22]  solid one percent topic if so i want to save that for maybe about 30 more minutes and we'll talk about this week in javascript because there's a couple other
[02:44:31]  things um in this release that i want to go over uh just so everyone you know is on the page um this um this there's the small stuff uh actually these are all
[02:44:47]  actually kind of fun yeah let's let me i'll just go top down for the rest of these okay check this one out um this is a small one solid has this
[02:45:00]  on error handler and we're going to continue supporting until we can deprecate it but we are moving from on error to catch error um again people don't use this this
[02:45:11]  is the underpinnings of like error boundary and you probably should just use error boundary but the problem with on error was you could have like siblings this is like how you
[02:45:19]  could like do error boundary catching and the because what it did is it would be like on error do something right and then you could go on error do something else right and you
[02:45:38]  could register as many of these you want and register with a parent context the problem was people had really different mental models of what this meant some people are like oh you this
[02:45:49]  is a sequence of try catches like almost like they wrapped each other i'm like no no these are siblings because you have no knowledge and like there's a difference like when you
[02:45:56] 're initially rendering and you haven't registered them all and some people like well maybe you should reverse the execution of on error so that like it like bubbles and i'm like
[02:46:04]  what if the error is registered in something that happens after your component so if you would have errored on initial render your handler's the first one that gets it and if you
[02:46:17]  error later it's some other handler that was defined after you that you're not even aware of all this stuff is just terrible so the the solution is model after try catch it
[02:46:27]  should be very explicit that errors should have a single handler and that you know you you can go up them perceptually kind of the way error boundaries work and not register multiple
[02:46:37]  handlers if you need a second handler you have to make the decision to wrap it so that there's a clear progression so that's just what we did so catch error do
[02:46:49]  the stuff handle the error 90 90 of you will never use this i just wanted this is one of those kind of primitives we're working towards just use error boundary but
[02:47:02]  i just you know this is how we're approaching it the beautiful thing with primitives is you can just like introduce a new primitive and kind of slide the old one out and
[02:47:12]  you can even implement the old primitive using the new primitive generally speaking so usually like there's a good deprecation story here because we can like piecewise um you know
[02:47:23]  mutate salt like in theory i'm we're gonna obviously do a bigger change with 2.0 and i don't mean bigger necessarily apis i just like some behavior things
[02:47:32]  you know important for a breaking standpoint but like in theory one could take this approach and as long as they named the new thing a new name you could literally migrate the framework
[02:47:44]  almost without like um losing anything as long as you exported the old things like you'd get bigger but you'd actually like you could actually like just migrate like you could stay like
[02:47:57]  1.0 forever you know i'm not suggesting that that'd be kind of terrible but like you could just like deprecate everything and just because it's so piecewise
[02:48:06]  anyways um yeah some standardizing of on i mean it's hard to tell where the line is on breaking changes this one i look as more of a bug fix but you
[02:48:22]  guys can decide on it but we had this behavior where we cast some errors to errors and other ones like strings not to now we just we're just like when we handle
[02:48:36]  an error with solid errors we they're always error objects and if you want your original object it's going to be tagged on as dot cause this we should have been doing this
[02:48:47]  anyways and the inconsistency was weird um i hope this doesn't cause too many issues but it's very edgy kind of case again almost everything was cast in errors
[02:48:59]  except for strings but now we have better error information um big things dev tools performance we were in dev mode we had really slow performance and um it was because i was doing
[02:49:18]  this weird thing where i was like trying to generate unique ids for every signal in the graph and i thought the dev tools would need it it turns out damien has way
[02:49:24]  smarter ways of doing this and we just removed it and because you'd see when you had large stores solid got really slow in dev mode um obviously in production it was fine but
[02:49:33]  in dev mode it wasn't now with this change dev mode it's gonna be a lot faster when you have stores of like tens of thousands of items okay let's get
[02:49:44]  into a few of the fun ones we had a support for prop and atra in our spreads which is good this helps with people working with custom elements specifically um it's uh
[02:49:53]  so yeah people using web components really appreciate this one uh we also uh again this is a pr from the community i'm gonna put all the like apps in this when i do
[02:50:07]  the actual release i'll thank all the actual contributors um don't apply special props we basically the way we did like special handling of props was based on like the property name
[02:50:19]  and again custom elements you can reuse certain property names and use them differently like read only we handles a boolean always but if someone had a read only on their custom element
[02:50:29]  it wouldn't have the dom's native behavior but solid would treat it like it did because it was read only so now the special behaviors are actually scoped to specific elements
[02:50:43]  which means that uh again custom elements have better support to be able to use the same attribute names as special properties on other dom elements no clue what prop and attribute are these are
[02:50:57]  namespaces that force the compilation um and the runtime to work in a certain way what i mean by that is we assume in solid let me clear this out that these
[02:51:08]  are all attributes so if i if i want like types not a good one let's do placeholder and i put count or something okay i know it should be a string doesn
[02:51:24] 't matter but if i do this what you're going to see here is set attribute placeholder like in it thinks it is that but what if especially what if i want
[02:51:36]  it to actually set the dom property instead of setting the attribute well if you put prop colon in front of it now it's l dot placeholder equals count so these little uh
[02:51:48]  yeah this makes a huge uh deal for gsx because it um like the problem is a dom can't handle special objects it can only handle like strings so if you
[02:52:02] 're like trying to use web components that like and you want the api to be able to accept like you know like an array and you want to keep references and not serial
[02:52:12] ize it to a string you need a way of indicating it um so we have prop for prop and then we have attra which forces attributes of course the default for stuff
[02:52:21]  is attributes so it's not a big deal but on custom elements again this comes from my experience with it we actually default to props because like it was actually a saner default
[02:52:32]  because most things actually kind of want to be props because they treat it almost like custom components you know so you we have attra to force it back to attributes for custom elements
[02:52:43]  where you want it to be yeah i mean again this comes from the fact that solid was built with um custom elements in mind at the very very beginning but i did we
[02:52:56]  supported that for a while but i didn't support it for spreads so now you can actually spread in prop colon or attribute colon um okay read only read only okay big one
[02:53:15]  our our guy alexis who writes great plugins uh around solid you know stuff like uh uh uh react of ours he's been working on his own react forget compiler called
[02:53:30]  forgetty recently he builds you know a good chunk of our ecosystem he has been working on a new serializer and he found some issues in solid serializer which was a port
[02:53:41]  of like an early version of some stuff the guys from marco were working on where it wasn't handling circular trees and i'm very impressed with his work and so we
[02:53:50] 've changed our serializer now to use his serializers still very small project but yeah i mean it's not as fast as the one we were using but to be fair it
[02:54:02] 's still five or six times faster than devalue which is what like it's used with svelte and a lot of other libraries um it's very similar performance
[02:54:11]  slightly edges out uh warp 10 which is what ebay uses today for their serializer with with marco um so this library is is set up to be you know you know
[02:54:27]  pretty good performance better than industry standards significantly and uh uh handles a little bit more of the better uh harder use cases that are super fast one that we were using the last
[02:54:39]  couple releases do so very stoked about that yes but we switched to the faster serializer in like 1.5 so like we've only been on the faster i guess serial
[02:54:57] izer the last like four six months but to be fair as i said it's still much faster than what you find in most libraries i'd probably have to have alex
[02:55:15] is on stream to talk about the details here um he uh he was explaining some stuff i asked him that question um but i i i couldn't repeat it for you in in
[02:55:27]  detail um this is not an area that i've spent a lot of time on kind of the reason why i went the other one because i was like i trust the marco
[02:55:34]  guys but it was kind of like an early prototype and i was like missing some features and i realized like i wasn't going to keep on top of it so how are
[02:55:42]  we doing all right thank you julian for giving uh gifting a tier one sub to andres uh much much appreciated oh wow julian gifted five tier one subs see i
[02:56:02]  am so far behind i miss that thank you so much um very awesome wow yeah i'm still always amazed when i get like a bunch a bunch of gift gift subs come
[02:56:19]  in it's it's kind of unexpected okay um okay um okay i got two other things before this week in javascript that are actually kind of cool um one of
[02:56:37]  them is i was you you have you all heard of view vapor view has been making let's see if i can actually find the original tweet that might be actually kind of fun
[02:56:52]  this is the kind of reverse engineering i do right view vapor i think who posted was it jess i could actually remember actually maybe i should just start with there i can
[02:57:08] 't remember what her actual image should just i'm sure her actual yeah underscore jessica okay view i made it too much i think it's vapor oh yeah okay here
[02:57:33]  it is this is when they released view view vapor right um and uh like showed the idea off and i looked at this code and i mean you you does this look familiar
[02:57:52]  to to any of you like like i mean i think we were just looking at it weren't we template signal clone let's let's let's add a child here yeah
[02:58:15]  clone walk to the first child add a click handler insert run an effect yeah okay yeah it's knockout that's that's that's what it looks like okay so anyway
[02:58:28]  anyway my point is if you if you if you looked at at this what is it set attribute we were just looking at set attribute weren't we um run an effect add a
[02:58:35]  click handler see get the clue the template go to the first child here's your template function i mean yeah okay yeah it's knockout that's that's that's what
[02:58:52]  it looks like i mean yeah i mean reactivity aside it's it's it's very similar like the whole template cloning walking the tree breaking things down to effects and event
[02:59:06]  handlers the funniest thing for me was i was like i saw that obviously and i was like okay obviously right but you know what stood out to me in this example out
[02:59:18]  of everything any here you go chat what what what what what do you think stood out to ryan and i want i want your guesses here i'll give you a minute
[02:59:37]  to to put them in no one gonna guess what about template dot value no i mean return div is fine i mean they they called it div we called ours l so see
[03:00:07]  return l it's right there uh yes yeah this this this this is this is it yeah yeah yeah exactly div buttoned what the hell is this what kind of template is
[03:00:36]  that well let's let's find out what could it what could let's find out what the template that is what kind of template is this all right so now i have
[03:01:02]  a div okay and then i'm going to go enter html equals div button what kind of template is this oh i can't do this on google's home page
[03:01:16]  i have to go to somewhere that's unsafe okay just a second uh they changed that recently okay okay let's try this again oh there we go here we go we got
[03:01:45]  a div button but let's actually see what the inner html is huh that looks a lot nicer yeah i i was aware of this we we talked about it in
[03:02:01]  marco there's some interesting rules here though like like where does the five go right five goes inside the button it wraps inside out like essentially it'll close like the you
[03:02:20]  know it makes sense if i wanted the five to go in the div i'd actually have to like i'd have to close the button myself but oh do we have an
[03:02:47]  edge case uh i can't i have to do a table to do this d equals document that create element table with a t body tr td yeah i mean this
[03:03:35]  is completely like the funny thing is gzip probably handles this fine anyways but i thought it was kind of cool and as it turns out the timing was yeah i mean a
[03:03:52]  table without a t body um is a whole other thing and here's here's here's the problem solid had this validation that we did run time to protect against people doing stuff
[03:04:04]  like table in t body right without t body because like we clone templates and then suddenly the browser likes to add the t body in for you like if if i did this
[03:04:14]  see our table and we do this wait where did this t body come from okay and and because the browser does that um at template barriers unfortunately there's almost nothing i could
[03:04:33]  do but like on after the fact runtime check which is super expensive and we aren't doing that but i analyze your jsx right that you put it and we had this check
[03:04:42]  for the longest time let me see if i could find it uh you can see it right here if you've ever seen the compiled output for solid in dev we send a
[03:05:00]  a like a check which is the number of tags that are in it and then when we're in dev mode we actually split on the number of tags and count them like opening
[03:05:10]  closing tags and say like hey something didn't match you know an extra element was added and like if you try and put a a block element inside an inline element it
[03:05:20] 'll get hoisted out and it'll add a different closing tag it it'll do all these weird things this check would be very dumb not knowing anything about the structure actually
[03:05:33]  detected most issues but it was less than ideal so during the lifetime of 1.6 we snuck in a smarter checker um called like validated nesting that looks at your
[03:05:47]  tags in your jsx and at compile time or june i think this is actually in the playground today um let me see if i could try it like what if we did
[03:05:57]  this what if we went table let's put our table in here okay and let's add a tr to this table and then let's add uh yeah i don't know
[03:06:22]  if this version of the playground has it invalid jsx tr cannot be a child of table sorry it's blocking here we get that out of the way so we actually error
[03:06:41]  at a compiler level if we x if we come across uh invalid html that uh that like shouldn't be structured that way and i i it took us a while to
[03:06:55]  get to this point but this is good because it gives you you know immediate feedback and you like the compiler can basically tell you hey you're messing that up and the
[03:07:11]  reason this matters again is because we hoist the templates and we clone them and we walk them so the browser changing the templates is detrimental and the funny thing is a lot of
[03:07:19]  frameworks like vdom frameworks don't actually hit this until they actually because you can insert elements yourself for the most part and like break the rules they don't hit this until they
[03:07:28]  try to do hydration but for solid if you've noticed and i mean this code example from view is a better example solid code like when you when with solid here when you
[03:07:40]  notice like you clone the template and then you do the walk if you just don't clone the template hydration is the same as um as actual rendering you just go get the elements
[03:07:54]  and then set the effects you don't actually clone the template but it's the same code logic so as i said a lot of like vdom libraries which create elements one
[03:08:03]  at a time didn't actually hit this problem until hydration this consolidates hydration and rendering flows but in any case because we had that validator and because a really weird issue can
[03:08:19]  i show you a weird issue let's let me let me duplicate this let me let me show you a weird issue let's go here someone was using no script uh it
[03:08:31]  wasn't this one firefox this is this is just a weird bug where you you put no script and solid's template validation was breaking because in every browser except firefox when
[03:08:47]  you make a no script in your template it just works that way it matches the input but for some reason firefox escapes the stuff inside the no script um only when j
[03:09:02] avascript's turned on when javascript's turned off then obviously the no script works the way it's supposed to but they actually like escape it based on whether the user
[03:09:11]  has javascript on you could imagine from my horror as a compiler guy this is kind of like the type script with the current target target problem you're like how am
[03:09:21]  i supposed to know if the user has javascript turned on well there's a piece there that if they're running my framework clearly javascript's turned on but how
[03:09:30]  am i supposed to even know that they're using chrome or firefox or whatever like i could check the like i'm just not doing this okay so a combination of this kind
[03:09:41]  of weirdness um i was just like okay screw it we we should just rely on the validation and once that template counting was gone i was like okay well screw this let
[03:09:55] 's let's do the view optimization like why not so yeah um i don't yeah i mean do i have dog expressions locally i might not i could show it to you
[03:10:09]  you guys could just trust me that um in 1.7 we're gonna have in 1.7 view vapor and solids are gonna look even more similar okay we can do cool
[03:10:20]  stuff like div button anyway anyway all right little view vapor okay let me where's the change log all right i've i've uh i do have a whole video on
[03:10:54]  this topic but the main reason is solid needs to wrap everything in functions if i didn't you would have to wrap everything in functions and if you had to wrap everything in functions
[03:11:05]  then the whole thing that i was talking about locality of change and all that would go away earlier in the stream uh that that's the key point it's because we
[03:11:14]  want reactivity to flow through the tree so we can't access the values until that where they're used yeah thanks this is this is a great resource okay so i found
[03:11:30]  something else weird i noticed that salt's bundle size had gone up obviously we've been adding features but it had gone up but i was i was rewriting to do mv
[03:11:40] c in typescript because i wanted to feel the whole experience here and i noticed all our original demos weren't in typescript so i was like let's update this to latest
[03:11:49]  solid right in typescript and i looked at like the bundle size had gone up uh how many it was it was how much was it something like 400 bytes and i was
[03:12:02]  like whoa what's going on here i knew it'd be bigger but 400 bytes and like i was like what's going on so i looked and i found out that tree shaking
[03:12:20]  has stopped working properly in roll-up after roll-up version 2.69 or something and there's a few reasons for this but i i started looking into it and
[03:12:35]  i was like man this is like kind of annoying because for for those who don't know solid is amazingly good at tree shaking to the point that like if if you don't
[03:12:47]  use like obviously there's like if you don't use hydration you don't get hydration this was actually what roll-up broke but also if you don't use um like
[03:12:55]  here's one of my favorite ones our router is built on transitions right the whole use transition thing which is like it's it's probably one of the biggest chunks of code you
[03:13:04]  know to get like concurrent rendering working and the router has to implement it in the core of the library but what i did was in such a way that if the user doesn
[03:13:17] 't use suspense not only does it tree shake out the suspense code it can actually tree shake out the transition code and if you've ever seen solids core um like i could show
[03:13:29]  this kind of briefly here i'm not going to explain how it works if you look for the word transition in here transition you're going to see a lot of code paths
[03:13:41]  have these like extra transition checks that are like if like whole blocks of code in the middle of like the most core parts of the library like let's get in there like
[03:13:53]  load we're still in we're still at resources let's keep on going oh yeah no start transition no do transition transition transition use transition like like like this is the core
[03:14:12]  of the reactivity and transitions are just layered throughout the code yeah sorry today today isn't a diagramming day um unless we do some during this week in javascript
[03:14:30]  and it's because transitions fundamentally introduce splitting the model in the middle of the reactive system you you should be able to shake it out but guess what with rollup you can you
[03:14:42]  don't get any of this transition code if you don't use them like it's literally like when people tell me that like oh yeah you know no bundle yeah yeah okay
[03:14:57]  like yeah no bundling is a marvel um like and but i found that we weren't tree shaking properly and so i started looking at it like can i show you before we
[03:15:10]  talk about the issue i actually opened up an issue with roll up and then they told me it was expected behavior and they gave me a fix but let's let's look at
[03:15:17]  this issue before we actually look at this issue okay here's the basics okay um and actually i'm just going to delete this for now and then we'll reopen the issue
[03:15:28]  when i want to get to the specific issue okay this is how crazy roll up is okay i've showed this before on stream it never gets old from my perspective pretend you have
[03:15:41]  a library that has a main feature and a specific feature so you can pretend this is like signals and this is like transition or suspense or hydration or something and inside the library
[03:15:54]  it's really simple you have a let that says hey you use this feature like this feature is being used so somewhere in your code you're gonna be like if you use specific
[03:16:04]  feature do something with that special way else just do the normal way right and what you do is when you import or call that feature for the first time you you set it
[03:16:17]  to true so like as long as it's something that's like higher up or like something that you enable like like when we have experimental flags and we say enable scheduling you just
[03:16:28]  call this or if you use suspense um solid creates a suspense context object at that point we say yeah we're using suspense or when you call hydrate which is like the
[03:16:40]  first thing you call in your app again we just say yeah you're using hydrate so we set it to true and the thing is i'm going to uncomment this this
[03:16:52]  is you get full code in full code out so you end up here with like you know use it false use it true so you know if you you call it and you
[03:17:01]  don't even have to call it you can literally just import it in and like the symbols i guess i guess roll up smart enough but what i was trying to get at is
[03:17:11]  like we're going to use it and now when we get here it can choose but even if like at the second that it realizes that it needs this symbol roll up goes oh
[03:17:25]  use specific feature can be set to true which means we need to be aware of this branching but the cool thing about bundling and tree shaking is if i comment this
[03:17:36]  out so you do not use this feature roll up can go okay this is false i don't have this so nowhere in this code could this ever be anything but false so then
[03:17:49]  it looks here and goes oh if false oh i don't need this else okay yeah so just do this so what you end up in your bundle is just main feature console
[03:17:59]  log do normal so it's not just like tree shaking out the imports it it dead code eliminates the stuff like inside your bundle right this is solid uses this religiously as a
[03:18:17]  way to like shrink bundle size you guys there are you guys doing the call for paper for react by emmy but yeah yeah like but basically you control it by what you
[03:18:42]  use this is this is a really powerful pattern and i learned some really cool stuff when i was when i was working on it because there was three things that solid um did
[03:18:54]  do properly that had broken because roll up had done bug fixes and i didn't realize it which had broken the tree shaking for solid okay okay thing number one i'm not
[03:19:11]  going to really reproduce it easily in this playground but i can show it show you the change in solid's code let's go to solid repo and uh tree shake up no let
[03:19:28] 's just look at the let's just look at the the changes here thing number one that i ended up having to change a bunch where's the diff view commit signal i
[03:19:45]  could have sworn there's a diff view in here changes ah there we go sorry i got it okay really i'm not gonna get a that's so weird oh here we
[03:20:14]  go the funny thing is i don't know why i wrote the code this way but this is this is or statements and i know this from what i do my compilation the
[03:20:27]  problem with an or statement see ands are fine and ternaries are fine but the problem that or statement is technically speaking the first argument can be returned if you know what
[03:20:40]  i mean uh let me explain uh consider const c equals a or b if a is false c equals b if a is true c equals a okay whereas like i mean
[03:21:19]  maybe we should just yeah let's just console log this so like we can just observe the behavior here let me get rid of our tr here okay oh right i actually have
[03:21:41]  to do this for real okay basically the thing you can assume here is that uh it's funny because this is not showing what i wanted to show maybe i should do like
[03:22:18]  zeros and ones and maybe this is something i only assume because the way my compiler works and for effective falsiness i only care about truthiness but if you're if you
[03:22:33] 're considering if you're if you're if you're if you're putting it in a boolean expression where you only care about truthiness you have the situation where if
[03:22:43]  obviously we get one here for a or b but if we change this to two we get two so you return a if it's an and one statement um it returns one
[03:23:01]  right it's actually b that you end up with right so if it passes so you actually like get to where it's not falsy it's actually the last argument so like
[03:23:16]  you never return a and if it's a a ternary it's wherever you get to but or is special because or actually is the one scenario where you actually return
[03:23:29]  the first argument and this is such a like a a subtle thing but it meant that i was writing all these expressions as like let's see can i blow this up at all
[03:23:39]  no not easily sorry if i hope you can see this but i was writing all these expressions as like this and this or this because i had to basically determine like are you
[03:23:48]  in a transition check here if you're not in a transition check here so if either these two were together or these two weren't you can do it yeah it does when it
[03:24:00] 's falsy but in the case of a conditional we only care about it being truthy so the falsy part can get thrown away anyways right which is important here because
[03:24:16]  the reason it's important here is because essentially if i rewrote these and it turned out it was shorter to rewrite them as ternaries because they actually were checking against
[03:24:28]  the same state it was like not running versus running i don't know why i wrote them as or statements have it and like adding them after the fact you know because i
[03:24:37]  think originally i only had half of it like i wasn't doing the right code for the transition i was only doing like if not a transition this do this and when i added
[03:24:44]  them later i just just copied the expression and negating them everywhere when i switched them to ternaries it was able to tree shake them where at some point rollup stopped
[03:24:55]  being able to tree shake uh these ores properly because probably someone corrected them um because it was working but it was a bug that was working so i went through and actually
[03:25:05]  end up code ends up cleaner and shorter if i do that so there's a whole bunch of these where all these wars all become ternaries and it's it's pretty
[03:25:14]  much just a straight win from from a size perspective and it actually lets the tree shaking work to remove all those transition statements the other one that i the thing is i got through
[03:25:26]  this whole thing and i had removed all the transitions except for let me see if i can find it here there there was one place that the transitions did not go away and
[03:25:42]  it was bugging me um and let me see let me see if i can find it i'm not going to find it easily here because um i didn't i wasn
[03:25:56] 't able to actually fix all its code i made a bug against rollup about it but essentially there is a place here where we're checking transitions in a pretty big chunk yeah
[03:26:07]  inside right signal and essentially it does a whole bunch of these transition checks inside a run update function for some reason inside this function the transitions would not go away and at first
[03:26:23]  i was like oh maybe it's like typescript you put something in a in a function it doesn't know right you know um but that's not true because the top level
[03:26:32]  functions the the top level functions uh like work so what's going on well i found i figured out what the what the issue was as it as it would turn out let
[03:26:48] 's go back here if you put the statement inside a try catch and it doesn't even have to be directly in any function called inside a try block tree shaking gets turned off
[03:27:05]  yeah i mean to be fair it's 400 bytes g-zipped um minified and g-zipped so like the actual code size like when you look at the
[03:27:17]  code is it was more we were getting a bunch of extra function calls and all that stuff so it's like if it's 400 bytes g-zipped it's probably about
[03:27:27]  i don't know at least three or four times that much minified yeah but if you look at it it still has do it normal and it still eliminates the other branch
[03:27:43]  but it leaves the conditional statement in here which honestly gets rid of most of the work so to speak but the problem i was having was that um like it meant that all
[03:27:59]  the references of this like all the transition references all stayed in because like once you get rid of it like all the references everything just drops off um so i i submitted the
[03:28:14]  bug and they told me that it was by design and they had a whole explanation of it that was really good relevant to that many built-in globals blah blah blah according
[03:28:26]  to spec so you can say try catch the optimization to set it to false so in our little demos where we know we don't have to worry about it we're gonna we
[03:28:34]  can set this one little setting and it eliminates the last bit of the transition code but i could never set that as a global setting for our bundlers and stuff because you
[03:28:42]  there might be some kind of feature detection that you need to use and that's why they they do this so that feature detection works and doesn't get tree shaken out so there
[03:28:52] 's a good reason for it but i finally found the answer for something that has been bugging me forever fork um anyway uh the last thing that i found out this one
[03:29:13] 's kind of cool was that when we do hydration in solid um we uh we we we use something called shared config and it's just like this kind of context that lives
[03:29:32]  outside of the the tree and we use this a lot of places to guard like for hydration and this is how we get our unique identifiers that match across server and client
[03:29:48]  and all this kind of stuff and it wasn't tree shaking out after roll up 2.7 or something and it was bringing all this hydration stuff even like when you're doing
[03:29:59]  it to mvc so i managed to find out that they had made a change where i mean it's it's kind of stuff you'd you'd never guess on your
[03:30:08]  own but this was like this where it was just an object and we just it roll up used to assume if you had an object if you if there if nowhere in it
[03:30:24]  you had a a feature which wrote to the object that you could just similarly like our boolean conditions just like drop them like the use specific feature after rollup 2
[03:30:39] .7 again this is like a year ago this has been bugging me um you have to actually set those properties to undefined for rollup to have that behavior so
[03:30:51]  it's kind of silly that i have to go in this object and do this but if i go through and set the context undefined and registry to undefined now
[03:30:59]  all hydration code will tree split properly and you won't end up with like these random functions getting pulled in again it is interesting because obviously different bundlers have different patterns and
[03:31:14]  i think that's probably one of the most tricky parts about this but yeah it's it's like another dimension oh good question doesn't midify to that uh what's
[03:31:28]  the best way to check uh okay let's let's let's let's try let's get rid of where the typescript nope no it looks like because i set
[03:32:08]  the properties minify minification assumes that it's there undefined always get uh minified to void zero so it's interesting it just like saves a couple characters but um
[03:32:20]  yeah it looks like this does not go away oh well i'm okay with that compared to like the number of bytes the hydration the hydration was literally pulling in functions but yeah
[03:32:41]  yeah there's a lot of little details like this but yeah this is the kind of fun stuff you get to do when you work on a framework someone was mentioning you know
[03:32:59]  about the bytes and stuff but it's like at one point uh we had a bit of a jump i think it was 200 bytes between solid 1.0 and solid i want
[03:33:09]  to say like 1.2 time period and stuff was like a lot of bug fixes and little things like and like you know someone was like you told me you were the
[03:33:20]  smallest blah blah blah and i'm like we are still but they're like they're like like that those 200 bytes were like they were considering like that you know they'd lost
[03:33:29]  trust in the project um i do take it seriously not seriously enough to prevent uh like progress and bug fixes and stuff like you know i won't be like i'm gonna
[03:33:44]  block this pr because i mean i might like rewrite it because i want to make it smaller but i'm not gonna like you know like i'm not gonna be like no we
[03:33:54]  can't get this important bug fix in because it would add bytes and we can't say we're the one kilobyte library anymore we don't advertise on size like that
[03:34:02]  like we're not the you know whatever four kilobyte library but like it's still something that i take pretty seriously all right i know that's a lot of stuff
[03:34:19]  isn't it like is that enough for a minor release what do you what do you all think it's been quite a ride to go through all this but um that's
[03:34:31]  that's what solid 1.7 is shaping up to be there's like a few other things that if i like look through the change log on the repo i i i can
[03:34:42]  probably talk like they're bugs and stuff but i think i think we hit the big ticket items so to speak where's our change sets this is always fun control flow type
[03:34:56]  narrowing templates and hydration oh yeah i this is a minor one um still there's some hydration improvements around the way that we handle that i don't know if i want
[03:35:17]  to talk about that it just hydrating fragments is actually a little bit tricky because there's no template to clone um i'll talk about that for very briefly show this show the
[03:35:29]  problem i think that this this one is if you if you want to build a solution on cloning templates you should be kind of aware of this it's let's let
[03:35:42] 's let's let's manufacture a scenario on the client side so you can kind of understand the problem it's actually not very hard to manufacture okay i put a bunch of text
[03:36:01]  with spaces in between and there's a space between these ones and there's this space at the end is are we going to get there no um the reason we're not
[03:36:13]  going to get there is because we trim the extra spaces now we're going to get there because now the space is clearly there okay so space space and you might be like
[03:36:27]  okay so what great but the problem is when you're cloning a template or doing s s uh ssr and hydration this is a cons this block of text is a
[03:36:42]  single block of text right like you you you're not like like when you're creating it like element at a time or something it's you know it's no big deal
[03:36:56]  but when you're getting it from a template it's a single block of text so i think the easiest way to do this is actually put i'm going to use one count
[03:37:05]  and i'm going to go high and then i'm going to go by okay let's forget about this single liner this is the easiest way to show it you're going
[03:37:17]  to get high one by here as a single block of text so how does solid know where to put the count in if this is a single block of text this is the only
[03:37:28]  place we need it but what you'll see here is a comment note some of you might be going what what the hell is this explanation mark you know you work on these
[03:37:42]  frameworks long enough you learn all the tricks can i show you something let's let's bring back our our div here d dot inner html equals exclamation mark hello as
[03:38:00]  it turns out they won't serialize right it becomes a comment node essentially um so you can skip the exclamation dash dash you know thing dash dash thing so you can
[03:38:20]  you can write an empty comment as literally just up square brackets with an exclamation mark or a trick well the thing how would we possibly know how to split into two two
[03:38:35]  things we wouldn't know where it it is we just have this one string we clone the nodes and we'd end up with just one string here high high zero by like i
[03:38:46] 'm showing it here in the template which is a little bit unfair because like the zero isn't in it but like if you were actually ssr-ing it you
[03:38:57]  would you would also you'd basically have high zero by and if you look at ssr output we actually wrap we have an open and a close comment because there will
[03:39:15]  be a number in here in the rendered you the the rendered thing and this is important because as i said you have a single text node how do you find where to do the
[03:39:28]  insert one thing you could do is just diff the full chunk of text like replace the whole text every time and that's an interesting choice and it wasn't one that i
[03:39:40]  made um i because like as you create it and stuff you don't generally need this and this is something you know we we handled the all each text node separately so essentially it
[03:39:56]  means we have comments and we can find that location so we can actually literally walk to the comment and insert insert the count before that comment so we actually insert a text node
[03:40:10]  before the comment node so we go okay first element next sibling and then yeah so it's right here so we walk in first element is this high next sibling is this comment
[03:40:25]  node insert insert uh count before that that's like that's fine the problem is and this works for ssr as well the problem is look what happens what happens when
[03:40:46]  i change this to a fragment okay well there's no more um marker because it's just an array we don't know we don't have the parent to insert into so to
[03:41:06]  speak so we don't know like we can't we can't clone this template it's actually it could be multiple type templates if you put elements in here like a span
[03:41:16]  you know now we have our own template like look there's the last element's a template we have an array and one of them's a template for client side this works perfectly
[03:41:29]  fine because we instantiate that array it's all separate we're not cloning anything and we can you know piece each piece in one by one we have our own template
[03:41:44]  yes because we we broke up the string like instead of having one giant string we actually wrote a comment element like like html element in the middle which means that the strings
[03:41:57]  the strings on each side become two different text notes so this is fine for client but for server rendering this is a little bit more awkward so what i ended up doing
[03:42:20]  uh as a fix in solid 1.6 was insert uh comments as like ssr templates in between and then if you look here in the fragment you see these ss
[03:42:36] r uh things so this is a bug that that we've had for a while that i fixed it in one of the later versions of 1.6 by inserting comments so
[03:42:45]  that hydration matched up the problem is okay i did it for fragments maybe and i i i noticed this bug but other people probably didn't um and i fixed it in a different
[03:43:05]  way but if this is a component now i didn't do that and we have the same problem if this fragment ends up getting inserted in the dom from this component and solids hydration
[03:43:25]  is kind of resilient in the fact that because if it doesn't match it'll like end up creating new dom nodes and it did and if the way the nodes get removed
[03:43:38]  and added you just end up with extra dom nodes that are not attached to the dom temporarily before they like like lose their reference and they get garbage collected with like a small the
[03:43:50]  way we were working that way um meant that essentially these these kind of hydration errors kind of were not noticed except for some really edgy cases so even after i fixed the
[03:44:08]  fragrant one to to match up and not create extra nodes because you got to understand the challenge here is when you come in and it doesn't match we don't know that
[03:44:20]  like the bye is the same vibe we're passing a string in like if we're if if it doesn't match we're going to create a new text node even during hydration
[03:44:30]  and we'd ideally not create any dom nodes during hydration so i realized that my solution here was was incorrect it was it was okay and but it didn't solve the problem
[03:44:43]  so and the reason that i don't want to insert the markers in here is because we're actually changing this component could care about its children and introspecting it and
[03:44:54]  then it'd be like like what if instead of it being this like some dom nodes what if what if um the children were actually um like something else that you introspected
[03:45:13]  like putting markers in that are unseen to the end user would be really weird because like you'd be like why does it have all these children like this could like i wrote
[03:45:23]  count count why am i getting these in like with a fragment it doesn't really matter but with a component people might actually introspect the children and see this trick so this was
[03:45:32]  not not going to be the solution so what i ended up doing is realizing that i needed a runtime solution that is instead the compiler inserting these markers the runtime at the point
[03:45:49]  that it was inserted into the dom on the server using the same kind of rules but at runtime essentially it would look we we have this function in in in uh on our server
[03:46:04]  side called ssr resolve no okay you're not it's not going to show up what am i in dom expression server yeah where is it ssr resolve no
[03:46:21]  resolve ssr node and this gets whenever we have a template we call something called the ssr function which is just like a tag template literal style function which goes through
[03:46:33]  like the static strings and the expressions and kind of like inserts them in and calls this resolve ssr node and basically this is like the point of insert in the dom
[03:46:46]  it's the it's the same as like saying insert is a dom in our string renderer so all i needed to do was in this process where we're resolving them like
[03:46:55]  check if the previous ones were strings so like check if you need to insert a marker and then insert an extra marker so doing it runtime we get the same output from the
[03:47:04]  server that i showed without um messing with the templates themselves so this could work for both components and fragments because you wouldn't be applying it to the component you'd be applying it
[03:47:17]  to when the component took its like children and inserted them at the dom and then on the client side do the exact same do almost the opposite thing when when hydrating if
[03:47:28]  you come across the comment markers remove them i actually tried to like match them up for a bit and then i realized that that was a kind of a fool's errand because the
[03:47:40]  way stuff comes in i'm not going into it too much but yeah i don't know kind of an interesting solution uh to the problem so to speak but the end result
[03:47:55]  now is that for we don't have this weird compiled thing but we have a consistent runtime way that at hydration we can match up the nodes properly in fragments all right thank
[03:48:11]  you jutanium dan jutan for gifting jazzypants420 with the gift sub all right so everyone's still alive we we good um i i think that
[03:48:27]  is most of what i want to do for 1.7 so we should get ready for this week in javascript um i all in all i think this release for
[03:48:39]  1.7 is kind of got us on a path which will be a lot it's it's heading us on a path which will make it a lot easier for people new
[03:48:51]  to solid to have like better guardrails and i'm kind of excited about that i think the better typescript support like just in these little areas makes all the difference for
[03:48:59]  people having their first impression yeah i mean it felt like that that was it was funny because dan was exhausted you could tell like even even me getting towards midnight i was starting
[03:49:18]  to get tired because i was like i was like i would stay muted longer and be like happy with that i'd be like okay i don't have to respond to this part
[03:49:25]  i can just like you know sit for a moment uh but no it was it was awesome let's let's let's get i'm just gonna get all my stuff set
[03:49:36]  up here in the background um make sure that i don't leak any uh um what is it uh like private circle tweets or anything okay all right my profile all right solid
[03:50:02]  js i wonder if i bookmarked anything this week i feel like oh yeah i did okay oh yeah i did okay one sec all right all right i'm back
[03:51:04]  sorry i just needed a moment okay okay okay what's it at 24th okay okay cool yeah i i haven't made the move to mastodon okay i i'm
[03:51:37]  gonna i'm gonna tell you i mean this is probably just silly of me and i i can't believe i haven't done this on stream yet um and i don't know
[03:51:45]  if i'm i'm supposed to but at this point i'm gonna do it anyway i know mastodon's a thing and all this i i was kind of uh
[03:51:55]  oh yeah i'm not even logged in here um i've i've been trying out this this other site called uh post dot news it's pretty new um so you know
[03:52:09]  i tried posting things there's like no dev community there they haven't really officially launched but it was interesting it's basically very similar to twitter so unfortunately there's no dev
[03:52:26]  community here but i i was definitely very like the the you know it has a lot of the kind of same feel to it and one of the coolest things about uh post dot
[03:52:36]  news is it has these uh data hk attributes um on their elements and uh i i heard when your site has data hk on your on your elements um that you
[03:52:52]  know good things happen so i i've been just kind of trying out actually solid start actually so it's it's kind of cool this is a you know full production basically similar
[03:53:10]  to twitter type experience built completely on solid start um but they have something like 600 000 or maybe 800 000 signed up users you know um we don't have a community there
[03:53:25]  or anything i just i i this is where i've been kind of checking out and to be fair i i there's so much still going on twitter i it's hard to
[03:53:36]  for all these guys to have an incentive to to to you know go but you know this this is pretty cool for us right to see solid start used in production on a
[03:53:45]  site with almost a million users so yeah and they've been hiring we there's a they have solid devs if you look for a job in solid like these guys they've
[03:53:56]  been hiring you know so just throwing that out there i've been waiting for their official like push or whatever they're still like ironing out bugs and stuff you know but um
[03:54:09]  it's kind of cool all right i missed that you're gonna have to send that link okay all right anyway sorry all right all right um how should we go here
[03:54:34]  um yeah let's just let's just go let's just talk about this week in javascript um high level might have not been it didn't start for me at
[03:54:51]  least as the most engaging week but there there was definitely a few um different things going on and uh definitely the highlight of my week was uh the twitter space on react server components
[03:55:08]  with uh uh ben holmes and ben dumfrey were on a few parts of it too and like colin from clerk and there was a really good conversation around uh
[03:55:29]  just framework framework design server components the future and what i really liked about it was um you know what we'll we'll get to it when we get to it but this
[03:55:42]  that's how this week ended for me so let's go for the start all right i'm gonna start with a little solid news like i always do we we need more
[03:55:59]  representation solid i've been seeing it's been great i've been seeing people give talks um but you know our man dan hook hook him up um he he is a great speaker
[03:56:20]  um he he gave probably my favorite solid talk of all time in uh brussels last year so yeah uh just quick shout out to that um yeah he's been doing
[03:56:35]  a lot of streaming i thought this was pretty cool um the uh i don't know what it was maybe it was that signals debate solids npm downloads have been soaring
[03:56:49]  recently we're on a good up trajectory but it seems like the more the debate gets you know the more people are trying and using solid so it's been it's been really
[03:56:59]  good uh last little while speaking of that uh uh also about conference talks i don't speak german but uh we're we're i this is so awesome to see the community
[03:57:16]  grow different languages different locations um i i'm not the only one giving solid js talks anymore so um let let us know when you're doing this and we'll try and promote
[03:57:28]  it you know i i found out about this like after the fact i guess this is a podcast but um you know if you're involved in solid community you know come by drop
[03:57:38]  a link we'll promote it uh really important to us to kind of like promote solid and um you know into a variety of communities yeah honestly invite invite yeah yeah honestly invite
[03:57:58]  dan out to do stuff i i'm getting busy i i think from end of april to june i want to say like 12th or something i have like at
[03:58:13]  least one event a week that i'm flying to like a different location to do um so yeah which could affect the stream schedule so good to know okay let's let's
[03:58:28]  get back we already talked about a lot of this stuff on the stream because it's very topical um yeah i i think um the you know all the typescript stuff we
[03:58:42] 've covered a couple interesting things uh we'll get to that in a minute i think the big piece of news which was came out midweek was that the react team posted
[03:58:55]  their update on where they are in terms of all the projects they've been looking at i'm not i skim this i didn't actually read this in as heavy detail as
[03:59:06]  i probably should have um but they're obviously very excited about the progress on react server components and they talk a bit about next app router which is like the first implementation of
[03:59:23]  what this kind of future router is going to look like but they're very clear it's not the only way to build um server component compatible router so they're trying to
[03:59:36]  like emphasize that this is a general pattern but they're like very excited obviously that that it's uh coming in i thought this was interesting a little side note they're talking about
[03:59:46]  using suspense to use asset loading one of the challenges they have with this is my understanding is their suspense is blocking and this has made stuff like like say using it to load images
[04:00:02]  and stuff a little bit trickier i didn't really explore this stuff but solid suspense is not blocking so in theory it could load all the image assets in parallel um so
[04:00:13]  this is this is kind of cool i definitely want to see what they're thinking of and see if there's any like good ideas there for us as well but like i could
[04:00:24]  very easily see how you could build image loading into using a resource into an image tag and then if you did that it could actually hold suspense or transitions so you wouldn't
[04:00:38]  navigate to the next page until the images are actually ready like present in the browser so i think that's i think that's really cool yeah i mean at this point is
[04:00:52]  the reality we talked this is why i did this first before talking about specifically the conversation you know with dan because this is this is kind of the basis of why people are having
[04:01:02]  a conversation right now why dan was probably like out there like seeing like hey what's the chatter um this is also fairly interesting because this is something we've been considering as
[04:01:13]  as well for solid they want they're thinking of moving well not thinking of moving like meta tags into the framework to handle because the way asset handling is streaming makes this really difficult
[04:01:28]  in our case we have it in a first party library but yeah this this is with streaming it gets a lot harder to figure out how to do head insertions and you
[04:01:38]  want to give the frameworks the right tools it's a lot to push on all the frameworks to like implement their own way to handle this for streaming i think react team's seen
[04:01:49]  this now that react like remix has done their own thing and next had their thing and like how can they streamline this and they they basically explain that there's two main techniques that
[04:02:01]  are used right now one of them is using a third party components that kind of move things into the head that you can stipulate anywhere but they say the problem is this
[04:02:11]  relies on javascript and the other one is to kind of like delay stuff in pieces so you can like render the head and then render the rest and that obviously doesn't
[04:02:26]  really work with streaming so this is why they're looking at way to do this kind of like built it i think i think that's cool and there's something actually a
[04:02:36] lexis you know again is looking into for solid on the solid ecosystem and actually astro as well he was looking into so i i this this is definitely really cool feature and
[04:02:47]  i i think there's a i'm glad that react came to a point where they can look on at those add-on features um and kind of see how to kind of
[04:02:54]  like you know show people the value of stuff like suspense and transitions which are so powerful but as you guys can all imagine my favorite part of this article was the part on
[04:03:09]  the optimizing compiler because as as everyone knows i have been excited but also a little bit like how do i put it very interested to see the way they talk about it because
[04:03:29]  in a lot of ways i see a lot of similarities between different projects doing kind of similar things and reacts optimizing compiler so i think it's kind of like a lot of
[04:03:38]  the way of marco or svelte works and the thing is in those libraries you can't easily talk about their execution model as as top down or memorizing it just
[04:03:52]  doesn't make any sense anymore because you've eliminated all the explicitness of like how things are you know sequential and i think the react team is going to come to the
[04:04:05]  similar conclusion where they are now rebranding it as a reactivity or an automatic reactivity compiler which is something that makes a lot of sense to me i i i
[04:04:23]  think it's interesting because obviously they want to be very specific here about about what they mean by reactivity like they're not talking about like introducing a concept of signals or
[04:04:36]  at least visibly doing so and they're not even suggesting necessarily that the implementation would follow reactivity that way but that the mental model of explaining it would and to me that
[04:04:53] 's a bigger deal because implementation aside the way we think about how our program executes is in my opinion much much much more important and it was interesting because a week ago
[04:05:21]  or a couple weeks ago when the singles thing came up it was that mental model that they so carefully wanted to guard and i could see the tension that's maybe why i
[04:05:33]  was a little bit short with andrew clark if you remember that thing back and forth where i was like you know guys go implement your compiler come back and then we can
[04:05:42]  talk about mental model um and andrew thought i was being kind of rude and i was being like a tiny bit rude he was he he got that correctly but it's because
[04:05:54]  their premise coming out wasn't to say that like that the signals or that kind of reactivity model like the way i like it's funny because he's looking at solid
[04:06:05]  from an implementation or like look at these reactive libraries even quick or whatever pre-act signals from an implementation standpoint and saying like oh i only care about performance and all the reactive
[04:06:14]  guys like view and everyone's like no it's the dx we care about the mental model so like to be fair that exchange would get me to be like hey you know
[04:06:23]  if you're going to be like that how about you go build your compiler and then we'll see actually how different things are so yes that i'm happy to see this
[04:06:33]  shift because it aligns very much with my experience and my expectations on on this side and even like it's not about having a signal primitive it's about the idea of your
[04:06:49]  app being something that is has implicit dependencies that update and that's the way you think about how your code executes so like part of this change i think is the fact
[04:07:14]  that this wasn't let me let me let me pull something out here uh did i bookmark it yeah i'm gonna get back to that in a minute i skipped to
[04:07:35]  the the juice i i did i did not bookmark what i was looking for um it's funny i ended up bookmarking this but this is what i actually wanted to
[04:07:46]  find give me two seconds it's one of the quote tweets there's a lot of quote tweets this might take me a while i'm pretty sure it's right at the
[04:07:52]  beginning joe savannah who's kind of in charge of react forget gave a better insight into this and i think this is this is something we should recognize starting late last year
[04:08:05]  so remember react forget started fall i think fall 2021 i want to say like a few months before the uh the conference where they showed it off starting late last year so say
[04:08:22]  fall 2022 they completely rewrote the compiler from scratch basically they had moved off the auto memorizing thing that that huxpro um had shut off to align with this
[04:08:36]  auto reactivity model and i i like i'm glad he's talking about this because i i i'm gathering this is not very known like they they gave a few updates obviously
[04:08:48]  because they've been releasing these articles but this is the most direct that i've heard it where that like they basically built it that way and then kind of like we're
[04:08:56]  like hey we need to actually do this differently and essentially like um what's cool to know about joe is he worked on relay but he also worked internally on a reactive language
[04:09:17]  inside facebook and i feel like that kind of influence is coming into the solutions when i consider stuff like what dominic ganaway has been doing with his like uh oct
[04:09:26] ane compiler framework that he's been working on where he basically takes something that looks like react and not react today but more like react forget would and compiles it down to something
[04:09:38]  like solid you start seeing like in a sense reactivity like whether you show the signals or not it's kind of irrelevant is an easier target for the implementation part of it
[04:09:50]  this is part of why i like reactive primitives from like the ai standpoint and like the building the right primitives thing because you start understanding like what are the building blocks that
[04:10:01]  uh language or compiler might consider you know so i think this is a good point because i think what happened is the project fell under new leadership and new direction and now our
[04:10:16]  auto memoizing compiler is an auto reactivity compiler they do want to say here that the mental model is that reactor we render whenever the application changes we believe the simple model will
[04:10:35]  keep close to javascript semantics blah blah the catch is that react can sometimes be too reactive okay i i actually think the catch is that with automatic memoization it
[04:10:48] 's a lot harder to reason about like if you could observe that the key to all this stuff is being able to not observe side effects then it doesn't matter top down or
[04:10:59]  not is identical once you can observe side effects it becomes a lot harder to reason about because like if you had two different expressions and you put a console log in between them
[04:11:11]  that log the value of one of them you know i mean like how do you when does that console log log if you're like being very careful with your memoization anyway
[04:11:29]  okay in terms of concrete progress since our last update we have substantially iterated on design automatic react approach and incorporate feedback from the compiler internally they started using it in production and unlimited
[04:11:44]  tests great okay so they use babble but it's decoupled they just use babble as the delivery mechanism basically it only supports a subset of features so far that
[04:12:05]  makes sense making play javascript in react quotes reactive requires compiler with deep understanding of semantics instead of being limited to a domain specific model i think this is fun i
[04:12:26]  always find this statement kind of funny by taking this approach we're creating a system for reactivity with a javascript that lets you write product product code of any complexity with
[04:12:37]  full expressivity of the language instead of being limited to a domain specific model or language take that statement okay in your head go up here however javascript has lots of
[04:12:51]  ways to express each of those features if else termaries for four and four of etc trying to support the full language up front would be delayed point to validate our core model instead
[04:13:00]  we start with you know a subset okay what i'm trying to do what i'm trying to do what i'm trying to get at is this is true in the ideal
[04:13:14]  sense but if you are changing the semantics in any sort of way not true in the real sense as long as javascript isn't executing the way that javas
[04:13:30] cript would normally execute then i i would say i'd post it that it it's basically impossible to view this thing as anything but a dsl so i i get from
[04:13:47]  an idealistic standpoint taking this stance but i don't think anyone should kid themselves react is uh creating a dsl this is this is they might not like make dollar signs you
[04:14:02]  know colon things like svelte but you should view this the same sort of way like this is not just javascript it's plain and simple um i wonder if
[04:14:16]  people will try and argue this point with me in a few months i think this is amusing because like there's no way this could possibly be true it's interesting in theory
[04:14:35]  there's no difference between theory and practice i love that oh man yeah i mean that's that's the thing like i i i wrote about this and i want to do
[04:15:04]  a follow-up article about this because i wrote about this uh actually before the react compiler was even uh was even announced i started thinking of what an automatic reactivity compiler would
[04:15:24]  look like back in november 2021 um and i i basically funny enough when i even when i look at this now and look at the examples it's like exactly the kind
[04:15:37]  of examples they're going to show you for react forget um and that's why i immediately like latched onto this idea that like it's an on like it's a react
[04:15:48] ivity model more than a memoization model um i i need to do a follow-up to this article definitely um because i think a lot of people don't i think
[04:16:00]  there's still things that people don't understand about the implications of this stuff and what the restrictions are and what it means but like what i'm getting at is look at
[04:16:12]  this component with an early return like if this without side effects you could view this as something flat that runs top down but if you understand that not all of these expressions are
[04:16:34]  going to run on every render like if yeah i mean it's a bad example because you only stated this component's first name and last name but i guess it's visible but
[04:16:45]  like visible could change and you don't actually need to run any of this code or no actually i guess you'd need to run this but like yeah okay fine i don
[04:16:57] 't actually have a good example here for this because the state's too tied but like essentially it's possible that pull blocks your code will or won't run like the this is
[04:17:12]  not top down anymore and the meeting of an if statement is kind of like the way hooks like it doesn't mean like yeah these things don't exist in a single moment of
[04:17:30]  time it completely warps the actual like meaning of conditional statements in your code oh wow we got a raid right right right coming in how's everyone doing yeah hey austin
[04:17:52]  i'm just doing my segment right now in this week in javascript where i kind of review some of the stuff that was going on and we were just talking about react
[04:18:02]  forget and the stuff from the react labs uh announcement and i was just pulling out this old article i wrote two years ago uh describing what an auto reactivity compiler could look like
[04:18:12]  um a month or so before they announced react forget like the auto memoizing compiler i was like thinking about how an auto reactivity compiler would look like and how you could
[04:18:23]  compile like early returns and stuff using reactivity um and it's really interesting to me kind of revisiting this thought because react just announced that their auto memoizing compiler is actually
[04:18:35]  an auto reactivity compiler kind of kind of i guess more similar to what um i'd kind of been was thinking about a couple years ago so um yeah just kind of
[04:18:46]  talking the stuff the whole thing isn't four hours we talked about typescript most of the stream we just we just we just got here although i could easily talk four hours
[04:19:00]  on this subject uh as anyone who's around for the twitter space last night with dan abramoff knows we we talked for quite some time um yeah we already talked typescript
[04:19:12]  um but yeah i i think the the article had one more thing that i think is cool i'm i'm excited about off-screen rendering a lot of people don't realize
[04:19:22]  that um view actually has this feature already it's called keep alive um but it's very powerful when used again for routing and i think they're looking at this for server
[04:19:34]  component routing so you can emulate browser-like condition where you can like return back to the previous page and not like fetch everything again and have it happen in kind of a natural
[04:19:48]  way so i think that's the interesting thing i'm actually very interesting about um off-screen rendering um myself this is part of the reason for solid 2.0's
[04:19:57]  laziness um we will be able to do stuff like off-screen without a virtual dom uh with solid 2.0 which is makes me very excited because that's fairly unprecedented
[04:20:07]  this is one of those techniques that um has precipitated a virtual dom from the point of view that um if you have a reactive library yeah sure it's really easy for me
[04:20:17]  to rip something off-screen it has nothing to do with like the renderer right i can you can you can take like a component in solid and just be like yeah
[04:20:24]  i'm just gonna stick it over here for a minute and then bring it back like like off-screen is easy but the problem is with a reactive system you update something everything
[04:20:32]  updates so you're actually rendering the off-screen page off-screen if it like share a state like it's isolated in the sense that like if you update a signal that
[04:20:40] 's only on the current page and not available on the off-screen page then yeah like no work's getting done you know who cares but if you say you have something
[04:20:49]  like global store you know something higher up in the tree and it's used on the on-screen page and the off-screen page and you start updating on the on-
[04:20:56] screen page it's gonna like be rendering the off-screen page on the you know even though you don't need to and um that's why i'm very interested around
[04:21:09]  lazy computed um model because then we can not only do fine-grained updates to push out the changes so we know exactly what changes we can actually control when we do the
[04:21:20]  the actual changes themselves so we can be like okay this is off-screen don't do the work yet right that way you know all those changes can batch up and then you
[04:21:29]  just pull the trigger and do the render once so we kind of get the best of both worlds um which is why i'm very excited about the approach for solid 2.
[04:21:38] 0 and again it ties into that compiler thing because again it you you you create a reactive system like that it's a really good target for a compiler that looks kind of like
[04:21:48]  react forget because it just like this is one of the funniest things about about these um kind of mechanisms is that and i i've talked about this in talks but like solid
[04:22:01]  gets the performance benefits or like the like of a compiler like that like the like to get like you know people like you know only run the code that needs to run all that
[04:22:14]  kind of stuff that happens automatically in a framework like solid without a compiler like you like the compiler actually might have i know this from my work with marco i actually i
[04:22:24]  think the compiler unless you do some crazy stuff like what dominic ganaway was working on um compiler is actually and even then in some cases compiler actually is slower than the
[04:22:36]  runtime approach like you can't actually know enough and to the point that i actually think that even with the compiler it will still be slower than approaches like solider view vapor but
[04:22:47]  but you also get that without a compiler with a reactive library so you you want the compiler for ergonomics so you like don't have to worry about losing reactivity but
[04:22:56]  um yeah it's kind of interesting that this is where the worlds start colliding because like you have something that's like react and like we want it for performance and optimization and
[04:23:12]  to make our dx nice because the problem is in react today to get the performance like like you can write code a really easy way and don't care about it then you
[04:23:20] 're like i need to optimize this and then suddenly you have to write your code differently and do more work uh react library would be like right at the beginning they're like no
[04:23:27]  no you can't write your code quite like that you got to write it a little bit differently but you know it's performant and that code that's performant isn't
[04:23:34]  any like is like isn't any uglier than like like the react um performing code would be much uglier it actually probably looks more like the react original code um but
[04:23:47]  like you know slightly different so react's trying to like cover the gap so that like all their performance stuff can get swept under a rug and reactivity is trying to you know
[04:23:58]  might work on a compiler like that so that like those like couple little like ergonomic things kind of so i find that interesting yeah which means like svelte which is
[04:24:13]  also compile time it's kind of closer to react but the way marco gets away with this is svelte is very limited because of this choice because like they don
[04:24:28] 't have a composition model in there like you have to get out of svelte to do the composition model i mean it's fine like they have all the composition but like
[04:24:35]  when you want to do compositions felt you're not writing svelte lang you're writing uh javascript in your use actions or in your stores or something like you're
[04:24:44]  suddenly no longer like svelte proper um marco pulls this off because literally they created the most advanced compiler language thing you know so like it's not an easy task
[04:24:57]  to do it and like uh stuff that dom was doing even crazier runtime reactivity at its core but compiler often optimized to the point that it actually looks at the branches and
[04:25:09]  conditions in your code in your reactivity itself it's like if you had a memo that had two different paths so it had different dependencies like inside that computed thing dom's compiler
[04:25:19]  like to the best of its ability would like look at it and be like okay these are depths for this branch these are the depths for this branch and these are the depths
[04:25:29]  for this branch and it would actually pre-calculate what the depths are from a compiler perspective and then based on what changed swap the depths so like he was working on
[04:25:39]  some crazy stuff which basically got the the uh i don't want to call it granularity but it is kind of like it's granularity in time like basically got like
[04:25:51]  the the problem with compiling reactivity is you just look at something and you say everything's a depth so you over execute um like you can't handle conditional dependencies he basically
[04:26:02]  had solved the conditional dependency problem at with a compile time approach that kind of fell back to a runtime approach really really clever stuff so yeah i i think i i think this
[04:26:23]  ooh i think this is really interesting stuff yeah i mean what do you get here we off screen what's the last one transition tracing whoo that's a cool idea oh
[04:26:38]  it's on hold okay fair enough i hadn't thought about that as you guys may know solid has transitions as well but i never thought about timing them that's interesting okay anyway
[04:26:50]  really cool news okay let's keep on going i thought this was cool um i shared this again this week um after after the uh after the web component stream i've been
[04:27:21]  writing docs right and i wrote this article it's not really an article just a gist essentially where i describe how someone could implement server components in any framework essentially like i
[04:27:31]  was like talking about all the way to handle routing considerations for single file components considerations for multi-file components apis what kind of primitives you need to handle it routing
[04:27:41]  semantics and different like things how async thing how to design suspense like primitives patterns for mutation how rpcs played in um optimistic updates cache validation basically it's
[04:27:56]  not like a perfect article but it's rough notes that someone could probably kind of pick this up and then kind of use that as a guide to basically build server components for any
[04:28:06]  javascript framework um and i've been working on this because i was looking at astro i was looking for solid um and i finally published you know put it out
[04:28:20]  there and i don't know if it's related but like literally like the the next day or so or it's uh they they officially put client-side routing on the road
[04:28:34]  map for astro so they're looking basically at their server component type solution which is kind of cool because this means if astro has something server components set up where like
[04:28:43]  dot astro files are the server components essentially you can get this client hybrid routing mechanism for literally any framework can be like oh svelte here view here but you know this
[04:28:55]  is a very very cool feature um and as i mentioned i to when i started down on stream as well as astro already has a lot like all the pieces like their hm
[04:29:06] r i know there's been bugs with it but generally their hmr the way they do hot model reloading is kind of like how server components work right they don't
[04:29:13]  want to kill your island state but they want the server rendered html update without reloading the page right so in a sense uh astro's already been working on a
[04:29:25]  lot of the pieces and one of those is nate's library micromorph which is what solid also uses for our server component um implementation um and yeah nate's
[04:29:35]  kind of excited because it looks like they're pushing this forward and yeah i i i'm i'm this was just notes i'm i'm very open to helping astro uh
[04:29:45]  get to the next stage with this so yeah it is it though it's not really csr unless they're doing something different that i don't understand right because it
[04:30:13] 's like we're talking about like dom diffing and then the client components are still responsible for the csr rebrand to brand yeah i mean of course that's what this
[04:30:24]  is this is always what ryan thinks is cool yeah yeah they're doing something like flamethrower but the thing you have to understand is does turbo like to fl
[04:30:37] amethrower preserve the client islands that's the key here i think nested routing is actually important i think they're not looking at that right now but i think i
[04:30:49]  think i think it's very powerful yeah i gotta do something about this htmx and livewire like those technologies each are actually quite different from each other and this is
[04:31:10]  also different from them like all three of those are actually distinctly different models htmx is lakes astro is islands and live view is like i don't know
[04:31:26]  i'm just gonna call it web sockets but it's like like i mean it does the web sockets isn't what matters though it's yeah oh that's interesting
[04:31:47]  yeah i saw i saw the tweet i just didn't get into it it's funny because there's that one at taco bell i think that they have like a hard shell with
[04:31:57]  a soft shell inside so it's like a double layer taco and actually funny enough i actually really like that one um but yeah tacos generally ah man that's hard usually like
[04:32:10]  when you get the nicer fancier ones they're soft shell but like if i'm gonna opt for a taco i usually actually want a hard shell like i'm a big bur
[04:32:18] rito person i eat more burritos than i eat tacos oh man that's that's hard yeah this is something i don't care to give my opinion on that was the
[04:32:35]  right answer okay um let's keep on going uh okay okay get to that in a second let's get back here because there's a few other little things here uh let
[04:33:10] 's get i want to get back to my bookmarks there we are earlier in the week um there was a bit more um other stuff going on um actually okay i should
[04:33:28]  have covered this earlier i'm just going to cover it now ori here sort of predicted where i'd land ryan carneo just throw an error i thought this was cute
[04:33:41]  but uh generally speaking if someone wants the most up to date that uh value even if it's null he she could use the same expression of when if someone wants the old
[04:33:53]  value he she could cache the value before until it tear down if someone wants to make bad code you don't need to help them i could have just summarized the whole stream
[04:34:02]  right here i saw this go up like right before the stream and i'm like yeah there we go but wise words of insight okay let's go back to earlier in the
[04:34:14]  week before we go to catch up the end of the week uh okay let's go here no i don't know if do we need to get into another matthew ph
[04:34:34] illips and dan debate about there was some more heated mpa versus spa stuff i think i think this is kind of like the new norm uh unfortunately i don't know
[04:34:44]  how i feel about it but i mean it's fine it's it's just like really close solutions and mentality kind of going against them basically matthew phillips um
[04:34:54]  talking about how like you know sometimes you don't need rscs you know islands are good enough and i i kind of agree with him but like the this debate has
[04:35:08]  just been going on now for ages i don't know i feel like there's a bit of uh yeah we we don't need to go here too much i i think uh
[04:35:18]  i another example of this that i think is actually better and i'm gonna open another tab to show this is uh let's find what's his name gear armo let
[04:35:30] 's see if i can find this um because i i read something and i that he posted and i was like okay yeah so this is cool supporting uh remix um you know
[04:35:47]  on versell and you know remix is great because like a lot of frameworks remix works well on all the service providers use it for sell using netlify you know same way
[04:35:59]  as felt kit solid start we built on multi adapters and generally every hosting provider is kind of like treated as equal game so it's cool to see you know guill
[04:36:09] ermo taking the time to kind of look at it and making this integration but i there was an interesting little thread here because could you what did it say the jordan understand the
[04:36:27]  trade-offs more deeply i think this is going to be like part of the new narrative right now um and i'm actually looking for quote tweet yeah michael jackson
[04:36:38]  and and this is going to be like the new conversation does remix doesn't fully embrace react you know opinion for simple apps loaders easy read for mark complex i expect lots of
[04:36:56]  gotchas like forgetting to promise all our complex yeah that's this is an interesting one from guillermo because i i think for this complex case actually loaders are probably
[04:37:13]  a win because if the problem with the complex case that rscs is you're you're not going to realize that you're causing waterfalls when you start fetching stuff
[04:37:22]  all over the way that have all these dependencies and you're going to send your performance through the like through the floor whereas with a loader pattern you actually see all the
[04:37:31]  code in front of you it might be messier but it's like there's the source of the problem interesting anyways i love the way michael responded though very even ke
[04:37:42] eled you know he's like talking about the differences you know you know oh yeah i want fetch based cache facilities i'm actually this is probably the piece i'm most concerned
[04:37:59]  i i want to build solutions that don't depend on caches i think cache is an important tool but if you use cache as your like gap stop gap you're going to
[04:38:08]  hit use cases where it doesn't fit and then you know your cache misses are going to be really expensive i think fundamentally we shouldn't design with the cache in mind i think
[04:38:18]  that's a flawed approach so i it's funny because that's like versell's thing so like this is this is this is interesting i think caching is important but
[04:38:26]  i think it's like what you add later once you have a good design so huh yeah this is interesting but i love how he's very down to earth on this and i
[04:38:39]  i i i should have actually liked all of these tweets anyway um this is this is this this is a much more even keeled thing because like i think remix is going
[04:38:51]  to get a lot of criticism for not you know adopting all of react stuff and like you know i'm sure they have their reasons i think it's tricky though because they're
[04:39:04]  in a position where like react server components are still kind of experimental if they decided that react server components weren't for them and they had valid reasons maybe stuff they learned through
[04:39:13]  hydrogen project or stuff like that made them think like hey there's trade-offs here we're not willing to go on if remix tried to air that right now i think people
[04:39:23]  would yeah i think the sentiment would be like oh you're holding it wrong or it's too early so you know good on you michael you know just address what you
[04:39:36]  can and i i think you're doing a great job yeah talked about this with with with dan a bit as well um which is yeah i i this this dialogue about fully
[04:39:58]  embracing react remember like i i said it a couple weeks ago right what did i call it it's the beginning of the fully react here it is so begins the age of fully
[04:40:08]  with react i don't think people got it then um but i hope that you get it now um this is going to be a thing sorry one sec Thank you.
[04:40:58]  Thank you. Sorry about that. Yeah. Yeah. Duh. Calling it now. It's pre-act in two years. Yeah. I mean, they
[04:41:53] 're close proximity that we might land there. I think React's still the biggest framework. There's no way you can ignore what React's doing. But at this point,
[04:42:02]  it's one of those "be careful" junctures. Because you've got to let React do what it's doing. You know, it's so tricky,
[04:42:13]  because ... I'm trying to think of how I want to phrase this. The stuff wasn't ready. We were talking. For those who ... I keep on bringing up
[04:42:28]  this Twitter space, because it was really good. I'm sorry it wasn't recorded. I mean, Dan Jutan did a great summary at the high level. But
[04:42:44]  talking about this Remix thing in depth, there was a point where we were having this discussion, and Dan was like, "Hey, I went and opened an issue on
[04:42:54]  the Remix repo to say, Hey, let's get suspense and transition in here." And what had basically happened, which is good, but Dan Jutan had also
[04:43:05]  said something. He's like, "Hey, do you need React server components to do all this streaming on the server and doing all this fetching the component and all this
[04:43:18]  kind of stuff?" He's like, "In Solid, we've been doing that for years, and we didn't need server components to do it." And he's
[04:43:24]  right, obviously. But it was because React didn't have that data fetching primitive, right? When Solid added suspense and stuff, we added data fetching right away,
[04:43:39]  back in 2019 or something, and everything was built on top of it. Part of the awe of server components that are coming in right now, where people are like, "
[04:43:48] Wow, this is so cool," you've been able to do in Solid for three years. But the problem was, I knew that. Because I was designing Solid,
[04:43:58]  I knew what primitives I was building, and I built every piece of the core library and stuff like the router or stuff that was close. I built it and guided people
[04:44:08]  to build it following these things. We've had transitions in our router since 2020. This was just part of the model. And Remix didn't have that advantage,
[04:44:20]  because they had no clue when React was going to release these things. So they had to literally rebuild, not rebuild, at the same time build all the same stuff.
[04:44:30]  Loading states, race condition handling, transition handling, mutation, all these pieces that you almost get for free with the underlying React model that they had to handle. And
[04:44:46]  it was unfortunate because I watched this happen, and if you guys know, Solid Router is very inspired by React Router. And we were building these things at the same
[04:45:00]  time. I was seeing Remix develop out, and we were doing our thing, and I'm like, every piece would be that much simpler and easier if they could
[04:45:08]  just tap into stuff like Suspense and transition, stuff like we already had because it was built into the core library. And Remix instead, and I saw this with
[04:45:17]  Tanstack, too. Tanner had to go and build all these mechanisms, and they were something that could have just come come from the framework. And this is a
[04:45:33]  really tricky thing because they had no option. They had to build today. And now they've built all their mechanisms and React's like, "Look, we have a good
[04:45:44]  solution for this. You should build on that." That's tricky, right? It's really tricky when elements of it might not even look as good from your perspective.
[04:46:00]  Remix had put a lot of thought, and parts of their stuff have made it into other things. Their approach to optimistic updates, and I've said this like a dozen
[04:46:10]  times, will be copied by everyone. All the other pieces, you know, here, there, that, like, you know, the whole action loader thing,
[04:46:18]  like, half of it's, like, that part is probably going to fall away in a sense. Like, React doesn't have, like, RSCs, you
[04:46:26]  don't need to have explicit loaders in the same way. You could, though. And actions for RSCs are going to be actually more like solid start.
[04:46:39]  They're going to be RPCs, not, like, route-based, kind of, like, rails model, like, Remix. But, like, those
[04:46:48]  optimistic updates, everybody is going to copy, because that was such an innovative realization in the way it plays with progressive enhancement. Um, that is, that is like,
[04:47:00]  and it's all theirs. Um, so, like, it's an interesting place, because, like, we're going to see elements of Remix in other things,
[04:47:12]  but they might not want to adopt it fully, because it, like, doesn't align with what they've been building the last several years. Next basically gutted itself
[04:47:24]  for React, um, which seemed like a pretty good gamble for them, but not everyone else is going to easily follow suit. So, yeah, it's not an easy
[04:47:39]  topic. But this fully in React stigma thing is interesting, because this is the kind of thing that is such a delicate balance, because on one hand, like, even
[04:47:50]  Dan brought up some really, really good points about this from a doc standpoint. If you, yeah, let me, it's time to pull up the Dan Jutan.
[04:48:00]  I should have bookmarked this before. I know it's in the chat, but let's just go to this. He did the work of actually, um,
[04:48:13]  uh, where are we, Dan? Is it his latest tweet? Nope. Nope. Nope. Nope. Nope. Nope. Nope. Nope. Nope. Nope.
[04:48:33]  Nope. All right, here we go. Yeah. He gave a nice summary of, of this stuff, uh, that went on. And I want, I can talk
[04:48:38]  to a few of these points, um, before we wrap up tonight. Okay. Yeah. Okay. Yeah. Stateless component can be used as server component and run
[04:48:46]  the server or important client and run on both sides. Yeah. Um, the shared component idea. This is something that where you have strict boundaries like Astro, you don
[04:48:54] 't get. This was one of the tricky things that I had to think about to be fair. You can always write something shared as a client component and get this in Ast
[04:49:01] ro by using client only or sorry, uh, serve like not passing a directive to it. So you can do this with Astro if you want to stay in your framework
[04:49:09] , but the boundaries are, you know, less permissive RCS and Astro components are the same server only mental model and they both let you use top level
[04:49:19]  weight and can serialize directly new world order data fetching is part of the component tree. Yeah. Yeah. It's interesting though, because they accomplish this, you actually
[04:49:34] , it is, it is actually tricky. Do you know what the problem with async await is on the server? how do you resume context? You have to use
[04:49:46]  stuff like async local storage or whatever, like node has, but not every platform has that. So like, I feel like this is an example, which is smart on
[04:49:53]  them is where they're leading the cart before the horse, so to speak, where they're like bet, like they don't have server context right now. Um,
[04:50:02]  and it hinges on this feature and like, they might be able to add it in versella for cell. Like if next only works on node based environments, um, like
[04:50:13] , like only running on AWS or whatever. And then like, you know what I mean? Like this is an interesting place because I think they start poly filling. Like
[04:50:24] , I think this is what actually happened. They started poly filling async local storage and suddenly like cloudflare guys and Dino are just like, what the hell are
[04:50:32]  you guys doing? I thought like we were standardizing this stuff and they're like standard plus like, no, there's no such thing as standard plus. Like what
[04:50:39]  is that? So like the, the, this one, this one's tricky for me. Cause I was thinking about it yesterday. I was like, okay, yeah,
[04:50:48]  I can, what would it take to implement async components in solid? And I realized I need async local storage, which not all platforms support. So it's
[04:50:56] , it's, it's a very, it's, it's, it's interesting. Um, something like Astro where you just do it page level might not matter
[04:51:04] , but context considerations, like, you know, things like generating hydration IDs, you know, unique identifiers, all that kind of stuff requires that you have something that like
[04:51:15]  lives across async boundaries within the same request, like resuming reactivity, you know, like that kind of stuff and without that, you can't actually implement that
[04:51:26]  model. So like only react could make a bet like this, I think, cause they know, like if they do it, everyone has to follow the, they can just
[04:51:36]  like hold them at gunpoint. It's interesting. Yeah. The other problem is async components and you don't actually want a top level of weight. I've
[04:51:51]  talked about this before. Um, this is the other thing that I've been, I like in some ways, like it's, it's simpler, but it's like
[04:52:00]  in a general sense, you don't want a top level weight. It forces you to break things into a whole bunch of components that leaves you only with a file system router
[04:52:11] , basically as any kind of, um, way to deal with that. Basically, because of suspense, you don't want to await above the suspense boundary. You want
[04:52:20]  to do it below the suspense boundary. And you know, if you want to break stuff up into streaming and stuff. So like essentially at minimum, you need a suspense component
[04:52:30]  with a suspense boundary above your top level of weight, um, from react standpoint, which means that every route starts with two components instead of one component, it's interesting
[04:52:42]  to me because the, as I said, file system writer can, can hide this, but it's, it's a huge assumption from like a generalizable standpoint.
[04:52:51]  So, um, yeah, I dunno, it's interesting. Uh, yeah, competing patterns, loader action, championed by this, JSX didn't knock the
[04:53:03]  templating off easier, but loader here won't be fully resources. I'm not so sure about this. I think it's possible that a loader pattern is a
[04:53:12]  subset of this architecture. If you hold it the right way, I'll talk about this more in a future stream, but I've been designing what a generic server component
[04:53:21]  slash spa router would look like that could handle both use cases. And I realized that if you design it in a certain way, it's all the same thing. Yeah
[04:53:45] , basically that's the way to think about it, right? You just, the first component is, is your git service like props. And then the rest of the tree
[04:53:54]  is we've done this for pattern forever, you know, with lazy components and routing before it was built into file system. You could like have the first component of the route
[04:54:03] , fetch the data and then lazy the rest of the tree. So you could fetch and load the code in parallel. Nested routing made that bad though, because you
[04:54:14]  couldn't get the next piece of code or data fetching until that one loaded and you get waterfalls. So the thing was, you pull out the loaders to parallel
[04:54:21] ize the data fetching. But what if we just pulled out the routes and parallelize the routes? Sorry. That's more interesting to me. But if you do
[04:54:32]  that, you have to start rethinking context and dependency injection. But maybe that's the place we want to go to. A key RSC features is protocol. This
[04:54:46]  lets server expose a special endpoint. The client can hit the endpoint and ask for part of a tree. The server generates a serial. Yeah. It's interesting though, is
[04:54:53]  this is a React server component feature. I don't actually think server components in general need this feature. I mean, there needs to be somewhat of a format because you need
[04:55:04]  to handle a certain amount of asset loading and stuff. But I don't know if it needs, the way React is chosen. To do it isn't the only way
[04:55:15]  to do it. But it is, it is important to understand that like this is, this is architectural paradigm shifting. Yeah. Talking about the, this was an interesting part
[04:55:31]  of the conversation where they were talking about like how much in the future they talk about because, you know, suspense left people waiting. Okay. Yeah. Now we're
[04:55:42]  getting into some of the cool, at a certain point, people were, were trying to suggest that server components were more complicated and trying to like, kind of take that stance
[04:55:56]  of being like, Hey, you know, maybe I just don't need them. And on this, myself and Dan, uh, completely agreed, which was that,
[04:56:04]  no, no, no, no. You, you got to flip the thinking around, um, which is that like server components are just functions that return JSX or HTML
[04:56:16]  like conceptually. And if you, if you start that as your base of talking about react and forget about react today, then it's actually a lot simpler model.
[04:56:26]  Cause if you're coming in and you just go, okay, I want to make a website, I'm going to create a component and I'm going to return some JS
[04:56:34] X done. So if you start from that point of view and start with the server components, not even really calling out that the server components is saying like it renders
[04:56:43]  some stuff and it sends it to the browser. You can build on the client side and the interactivity afterwards. And in that mental model, it's very similar to
[04:56:51]  something like Astro or Marco or something, which does partial hydration, because you start with talking about the web by talking about just shipping HTML. Um, and it, what
[04:57:00]  kind of prompted part of this conversation was, um, the, you know, Dan was talking about a bunch of pieces and I was like, Hey, remember that conversation we
[04:57:10]  had two years ago where I told you, you introduced everything backwards and like, I finally got it. It was about two years ago, but like, I understand why no
[04:57:17]  one else is getting it. And it prompted him to kind of, he was like, yeah, maybe I should give a talk about this where he was like an alternate
[04:57:24]  history where he described if, if React had actually started from this model and actually built up on it. And the most interesting thing about that story is his story of that remind
[04:57:34]  me of the actual story of Marco. Um, like that, that is what Marco was built to do. It was, if you had started that way and built up that
[04:57:43]  way, the parallels are incredible. Cause even when he was talking and Sophie was talking about like some, of the earlier prototypes and things, they tried to do a server
[04:57:50]  components before they realized server components for the patterns. These are things that Marco went through in its history, except like eight years ago. And, um, I mean, I
[04:58:00]  don't say everyone gets in the same place, but it's interesting. Cause Marco basically got to something like server components, um, or, you know, our islands
[04:58:10]  or whatever. And then now they're trying to take it further. I, I wonder if there's any hints there of how react would take it further one day. Yeah
[04:58:24] . The thing is, I never saw it that way because you're, you're just shifting the mental. Well, the reason it's complicated is because you're asking people
[04:58:34]  to think backwards, right? It's like the silly guy who made this, the solid video where he's like, it's like twisting my handlebars backwards. And
[04:58:42]  I was like, what if your handlebars were already backwards and this is setting them the right way? You know what I mean? Like there's a little bit of that
[04:58:50] , you know, like it's okay. Like sometimes we just need to change the perspective and it unlocks incredible amount of stuff. We like single page apps were hit a
[04:58:59]  local maxima years ago. There's a reason reaction working on this forever. There's a reason there's been a shift and there's like, we've been building
[04:59:07]  towards this future, um, and not just react. Everyone's been doing their part in little ways. That's why I'm very excited because it's very clear to me
[04:59:16]  that in the next 12 months, there's going to be alternate solutions to react that are going to be quite compelling in this zone. Yeah. I mean, okay,
[04:59:29]  don't get me wrong. Server components is a terrible brand and it's like the worst name you could have picked for it because the branding suggests that it's the addition and
[04:59:36]  I understand because it's a feature, but it's like, it's suggesting that like, it makes people think of what I call the lakes architecture. It's like suggesting
[04:59:46]  you have a client app and then you do server components. No, no, no. It's more, it's more like, it's really tricky. Cause it
[04:59:52] 's like, I, the part you're supposed to denote is the client components, you know, or as Theo likes to call them, the isomorphic components. I
[04:59:59]  just, I just call them islands now because that's the term for them, right? Like react will never call them that, but that's, that's what I
[05:00:07]  call them islands because they, they are islands. I know like sometimes when I talk with Dan and stuff that he like, doesn't like that. And he tries to say
[05:00:15]  like, they're like donuts or something like that. Was it, oh no, not isomorphic. Sorry. Interactive. Sorry. Interactive. No, no
[05:00:25] , no. Interactive. Sorry, Theo. You're right. I misquoted you. Interactive. Interactive. Right. I, I meant, I
[05:00:32]  meant interactive. Yeah. Sorry. I got the word. It was another I word. Yeah. Sorry. Interactive. Thanks for correcting me. I didn't mean to
[05:00:48]  misspeak. But like interactive components. Of course, I completely lost my train of thought there, but well-deserved. I know you, you don't like
[05:01:00]  the word isomorphic. I don't think anyone likes the word isomorphic. But like, that's the special part. Like, that's the thing that
[05:01:07]  like, like these are interactive components, but you can't brand that because that's what everything's been to this date. Is it, sorry. Where I was getting was
[05:01:17]  Dan, sometimes we're talking about donuts and muscles and all these things. But the truth of the matter is the islands pattern is identical to the server components pattern from like
[05:01:25]  a design DX standpoint. Obviously the UX is different the way that like you handle it, but like the actual structure, the rules, everything is identical to a T. It
[05:01:34] 's not like the shape is different. It's not like now we're dealing with donuts or what, you know, lakes or anything. They are islands like that,
[05:01:40]  that is the, an islands architecture. Yeah. But what I'm getting at is, is that islands work that way as well. Like they've always worked that way
[05:01:57] . You could, this pattern is how Marco's worked, you know, all along as well. Right. Um, so like maybe the naming of islands isn't right.
[05:02:09]  Cause like they can be like donuts in that sense, but, um, that is what islands are. I think there was an interesting question about docs and how to teach
[05:02:25]  it. Cause you should start from RSCs conceptually or like the basics. And because if not every framework adopts it, um, there's that friction that I
[05:02:33]  was talking about, like with remix. Um, because it's like, you can't, it's hard to be your starting point. If it's not everyone's
[05:02:41]  starting point, you can always like add it on as a feature. But if, if, if, if you're trying to teach it as like, this is react,
[05:02:46]  people are going to get really confused. The thing is react can do this though, you know, and they probably will like Dan was like, was like Dan Jutan was
[05:02:55]  like trying to suggest like you couldn't do this, but react is fully in its right to do this. And it's just going to make alienate remix, but like
[05:03:03]  they can do that. So not everyone uses Marco. Oh, I, I know Marco is just where you go to get all the good ideas. Yeah. We're
[05:03:23]  going to talk about the router in a minute. Sorry, Parasocial, you, you, you, you have your own summary of, of events as well.
[05:03:29]  Oh yeah. This was, this was actually kind of cool. Um, this, this one thing, there was a part of conversation where they were talking about how to put
[05:03:42]  server components inside Astro, which, which is kind of like two levels of, huh? But I love it because it's part of that story that I love seeing
[05:03:51]  of Astro literally just supporting everything. So looking more at Astro as an alternative to next rather than react, which is really what Astro, you know, like Ast
[05:04:01] ro should embrace react. Like why not? Like it's just another piece of the, like another feather in their hat. So like, you know, they should,
[05:04:10]  Astro shouldn't be worried about react. Like the more they integrate with react, the better the, you know, we can have react RSC framework sitting next to solid
[05:04:20]  start on a different page, you know, like let's, let's do this. Um, so yeah, I thought, I thought this was a really interesting part
[05:04:33]  of the conversation and insight, uh, we got Devon here. What do you got for me, Dev? Oh, you're just quoting me. Uh, sorry
[05:04:53] , the replies here are good. Okay. We'll get to it. We'll get to it in a second. Um, let's, let's keep, let's
[05:05:02]  keep on track here for a moment as an on track as we can. Where's, did I lose Dan? No, here we are parasocial. Yeah. Okay
[05:05:10] . Here's Dan. Okay. Anyway. Um, yeah, I mean, there were so many talks. There were so many topics. I can't, I can
[05:05:23] 't, I can't get into them all. Um, honestly. Oh man. I shouldn't like overhype it for the people that missed it, but like,
[05:05:36]  this is, it was better than any framework panel that I've done all year. We talked about like, oh man. Anyway, sorry. Um, okay. Whatever
[05:05:54] . Okay. It's weird how adamant both Dan and Sophie seem to be about building a router. It seemed really like a natural extension to me. Yeah. Let's
[05:06:02]  talk about that. Um. Sorry. I was just reading another comment that made me laugh. because of the, the, uh, yeah, sorry. It was
[05:06:29]  just funny. I think spaces are different. I agree with Theo that spaces are different when you know they're going to be recorded or not. And Theo likes, likes that
[05:06:37]  like authentic, real kind of thing. Um, it is unfortunate for those who, who missed, missed on that, but it's, it's, it's always
[05:06:45]  hard to know. Um, anyways, sorry. Back to where I was getting about the router. Let me, let me put this why I agree and also why it's
[05:06:57] , it's, I can see why they're not going to go there. I mean, I think I've already said it like a bunch of times router equals framework
[05:07:09] . So when react is telling you that you need a framework to use react, they're actually telling you, you need a modern router to use react. So in a sense
[05:07:20] , they don't want to take that all on. They want to leave that open in the ecosystem. That's like the place where they feel like a lot of the opinions
[05:07:30]  can come in to kind of build on. So like, it's funny because I, I, when I introduced server components and solid, I didn't introduce them as
[05:07:40]  server components. I introduced them as a routing feature. Like it was actually a new router. What was it like? Uh, let me see. What was the story called
[05:07:49] ? Uh, not two way binding as a two way street. Um, what was it called? Um, client side routing without the JavaScript. This may be buried the
[05:08:00]  lead about server components, but it explains, it basically explains how solid does server components. And my focus was on the routing because the routing is actually the fundamental piece that everyone
[05:08:13]  needs to actually put everything together. And it's what makes an architecture. What's the difference between an MPA and a single page app? The routing. What's
[05:08:22]  the difference between a modern isomorphic SSR single page app and the original, uh, single page apps that came out before that. It's actually the routing. Again
[05:08:32] , every time we've had a shift or generational change, it's the routing that is a thing. And this is why I got interested and went this direction because I understood
[05:08:40]  that the routing was the thing, was the new paradigm. And that's what unlocked it routers routing is always what to pay attention to. If you want to understand
[05:08:48]  generational architecture in, on the web, the web is just a giant router. So if you change the routing, you change the paradigm. In any case, this,
[05:09:06]  it is kind of interesting topic, um, because again, I was starting to look at, um, let's just go home. I was starting to kind of look
[05:09:20]  at this and I actually wrote this tweet because I, I'd already been thinking about this. I wrote a document that I haven't shared with people yet, but explaining this
[05:09:28] , but I was looking at this and I was like, could we just reduce all routing server, spa, whatever to essentially this one thing. If the router owns the
[05:09:42]  HTML and is aware of the routes and you have this proper locations to handle server context and client context, could you not just make a single router to rule them all, so
[05:09:58]  to speak? Because like what I mean by this is like on initial page load, you can just run the router as normal, run, render everything, but like after
[05:10:08]  the fact you could, because the way this is wrapped, you could always choose to skip rendering the children. And because you know the routes, you can jump straight to the
[05:10:18] , the outlet without actually rendering the outlet. Like the router could render the outlet. And once you kind of understand this, you can emulate server components because you can literally have
[05:10:28]  the router initially do the render, do the HTML body, whatever. And then on subsequent renders, only choose the routes that it needs to based on the request.
[05:10:36]  You can do client side routing by at build time running the top section to generate the HTML body stuff. And then the client router basically starts from the outlet. So your app
[05:10:50]  actually starts from there. You can like, so that's full CSR with no backend and you can basically, once you can do that, you can basically mimic any
[05:11:02]  pattern in between and you could even do it on a per route section level. Right? So like when I attack these problems, I love writing routers. I wrote my
[05:11:12]  first router in 2000, nested router back in 2014 for web components. And it's funny. I don't like frameworks, but I like routers. So it
[05:11:20] 's, this is like an alternative tact to it. If you could write the router or you had the router and anyone could use that router and you had the bundler
[05:11:40] , if you have those two pieces, a bundler capable of knowing how to split stuff up, you know, whether it's use or bling or whatever, and you
[05:11:49]  have a router capable of handling SSR, single page apps, whatever. If you have these two pieces, do you need a framework? Like I met a framework like
[05:12:04]  that. Do you need a next JS? I would argue you, you don't, I think it's good to have, I think people should build those things. I
[05:12:20]  think there's, it's good to have those opinions, but those opinions travel much faster. The interesting part is like the infrastructure piece. Um, and those specific tie
[05:12:31] -ins, but I'm going to argue that's if you make the right paradigm for the router, that tie-in happens at the bundler level, not at the
[05:12:39]  runtime router side. It's the bundler that interfaces with the infrastructure piece. So if you look at it that way and the router is actually isolated from it, you
[05:12:53]  could, you could approach this in such a way that you could use stuff like deployment adapters to handle the gap. And in a sense, we just move down another level
[05:13:10] . The framework is like the, is like the, it's not the bundler. It's not the router. It's the, like the infrastructure tie-in
[05:13:19] . It's the deployment adapters, so to speak. And then when you think about that, what solid starts doing with Astro starts making like a whole ton of sense
[05:13:28] , doesn't it? Just saying. I, I, I think, I think it's interesting where these layers sit, but I, I, I, I think
[05:13:46]  the opinion of like framework versus non-framework is always a moving target. It's, it's all about having the right primitives. So moving into this new
[05:14:06]  age, react will be the framework, like need the framework and other solutions are going to be the libraries. Anyway, we've talked about this before. I just, I
[05:14:21] , I, this is why I want to spend time on these kinds of things that the understand them, but yes, no, every, but I love this Jenna. She
[05:14:30]  wrote a whole thing here in March 10th going like, why aren't you guys writing a router? It's like, when is this going to happen? And like
[05:14:36] , we pressed on it a little bit in this space. Like, come on, you guys are going to write a router at some point. Like what we're going to
[05:14:43]  have to see if this is going to be something kind of like the auto memoizing compiler. Are we going to just, you know, or auto reactivity compilers
[05:14:51] . It's just one of those inevitable things that, you know, where we end up anyways. I don't know. Sorry, the, the HL body elements
[05:15:19] . This was so we could get the head tags and stuff on the initial render. I think you guys are hinting at it here. Um, like you, you
[05:15:27] , you also in the structure would put like your nav maybe out here. Things that don't change. Um, and the reason this works, yeah, I, I
[05:15:40]  think I, there's a few details here, but the reason this works again is because the client components never rerender on the server. So you don't actually have to
[05:15:48] , you can just skip that part of the tree. I actually think client context needs to move for the story to be true. I think you have to move it above
[05:15:56]  the router. I realized as I wrote in the comments, but the, I think this sort of thinking is interesting to say the least. Yeah. I mean, yeah,
[05:16:15]  I mean, react is still library. That's why they don't want to build the router and whatnot. But like, I guess there's, there's just a
[05:16:25]  difference between what is and what like the result is. I, I, like I, I talked about this a bunch when we were talking about the, the, um,
[05:16:35]  the whole Vercel react alignment thing where people were like talking about them colluding and stuff. Like, no, they're, they're not actually colluding with each
[05:16:43]  other doing some weird sketchy stuff. But like, like the result, even whether they are or aren't doesn't matter. Cause the result is the same. Um
[05:16:53] , react is looking at itself as like providing more of these primitives. Um, so in a sense, like they're, they're kind of being what they've,
[05:17:05]  they've always been. But if they push hard on this fully react thing, that's where the identity changes. It's not what they offer. It's what the
[05:17:19] , like the philosophize. If they, if, if there is a concept of fully react, that's when they become the framework to me or whatever, it's a
[05:17:28]  spec or whatever. Like it doesn't matter, but that's when the shift is react, never had the concept of fully react before. Uh, is this right?
[05:17:49]  No, I would, I was trying to unify the concepts of server components with, with client things. general purpose APIs can't, don't handle the structure needed
[05:18:00]  to do the, like a, a server component architecture. Even if you think about it, even, uh, handle the architecture to do, um, uh, a client
[05:18:08]  side single page app. Like there, there's, they are architected a certain way. So I was like looking to see if there's like overlap, but yes,
[05:18:17]  we are talking about frameworks like solid react, but presumably like this pattern can apply, like I'm using JSX here as an example, but like if this pattern worked
[05:18:29] , it could work for anyone who wanted to do this kind of nested server component routing, Svelte, Astro, or, you know, everyone who knows.
[05:18:38]  All right. Yeah. So, I mean, it's, it's so awesome to see like this kind of thinking, um, you know, kind of promote more
[05:18:53]  thinking. I learned so many things on that, like that they weren't actually parallelizing stuff. And sir, I knew, I kind of knew how server contexts work,
[05:19:00]  but they kind of confirmed that they worked like ASP.net. And I mean, that's why they're being careful with it. But you start, I don
[05:19:07] 't want people to walk away and be like server components are ASP.net. They're not actually all these decisions actually remove the downside. It's very clear. They
[05:19:16]  understood the problem with ASP.net when designing server components. Um, server context is bad or it should be very limited. So like all these pieces are coming to design
[05:19:26]  and why we're very different now than they were like 15 years ago. But, um, there was just a lot of like interesting little snippets, even for myself
[05:19:36] , which got me very excited. I think my takeaways, this use client, use server thing react has a lot of push and bundlers will try and follow to try and
[05:19:49]  make things work, you know, regardless. So fighting it might be battling upstream a little bit. This use server, use client thing might be like the new JSX
[05:20:01]  where like a bunch of frameworks just pick it up if they want to use this kind of technology. It might not be, but if bundlers work hard to support it,
[05:20:07]  I'm already seeing it with people like Jared and Bunn, but to be fair, Jared and Bunn is right on the cutting edge of things. But if that's
[05:20:15]  the approach, it makes a much harder story for stuff like bling, which will still work, but you know, it's a different if every bundler just supports it
[05:20:23]  instead of us having to write a plugin for every bundler and like, don't get me wrong. Server dollar sign is way more powerful than use server. And I
[05:20:35]  don't mean because you can embed in client, like take that away. If you don't like that, don't worry about that. I mean more that it's very
[05:20:41]  hard to figure out how to inject the request response model into these things right now. And actually that was, leads me to my second takeaway and Colin from Clark really kind
[05:20:54]  of put it out me. There's parts of this like request response model that are getting generalized, but every framework handles them different, which makes it really hard to be aware
[05:21:04]  of this stuff inside the react server component land. Yet, because they're the API, we must. And I think this might be the biggest point of friction around this
[05:21:14]  whole thing is that how do you write a third party library where those kind of details have to be specific to the framework? Is React going to standardize on that? They
[05:21:28]  can't without knowing the underlying infrastructure. Dino is different than Cloudflare. Like, our library author is going to have to like have detection on these environments and
[05:21:42]  put all that logic into their components. Maybe. This is the new world we're entering into. She's catching up with chat. I've been using bling.
[05:22:18]  You know what's, what is working silly? You can't send a request until that. Oh yeah, yeah, yeah. It's the way the compilation works.
[05:22:29]  Um, yeah, and with code splitting. That's interesting. We, we, yeah, we need, we need to, we need to finesse some of that stuff
[05:22:39]  probably. Yeah. I'm not getting into that part of chat. Okay, so what do we got? We got one more thing before head off. I do,
[05:23:03]  I'm just going to look at the replies for this. We started with TypeScript. Let's end with TypeScript. TypeScript is a subset of JavaScript. Not too
[05:23:13]  many people are buying this. Long, it's a superset. The funny thing is every time I read comments like this, like, it's true, literally,
[05:23:45]  but again, this is the difference between what's written on paper and what the actual reality is. If people treated TypeScript is, if people treated TypeScript this way
[05:23:52] , I'd have way less headaches, but no one actually treats TypeScript this way. It's a superset of JavaScript, not a subset of JavaScript, but the
[05:24:07]  opposite is not true. See, again, in theory, except in practice, we know... Set theory, clearly states otherwise. Yeah. I mean, this is the
[05:24:33]  response I expected from this. It's a superset and that's a hill I die on. Yeah. I mean, until you realize that there's a bunch of
[05:24:49]  ugly JavaScript code that you would never write in TypeScript and that you consider unacceptable from a TypeScript perspective. And then, at that point, it becomes a subset.
[05:25:00]  There's just no other way around it. All right. Ready to be rated. Okay. Yeah. See, this is being smart. All right. He knows I
[05:25:20] 'm done. He knows that I am going to eat whatever yummy food that is sitting just out that hallway. Yeah. Who's live? Let's see how this raid
[05:25:36]  business works. I'm wrapping up here. I appreciate you all joining me today. Let's get back here. This was a fun one with all the TypeScript stuff.
[05:25:54]  I hope you all get something valuable out of it. Let me refresh Twitch and see who's going. CM Griffin. Uh, yeah, okay, fine. There's
[05:26:06]  no way I can't raid Dan at this point. What are you doing today, Dan? Are you still here? Maybe he's already started his stream. Let's,
[05:26:19]  let's, let me get in here and get that raid going. Yeah, thank you. Thank you all. Let's raid Tutanium. That's just his username
[05:26:30] , right? Tutanium. Oh, wait. I, I like, said it in Dan's chat. That's hilarious. Sorry. I need to go back to my
[05:26:38]  chat. Uh, what is Dan working on? I think he told me he's been doing a lot of Astros, this Astrosolid project that he's been
[05:26:50]  working on, um, so let's go see him there and until next week. See you all.