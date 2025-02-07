---
showLink: "https://www.youtube.com/watch?v=k3RU0ayAdW4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Art of Suspense"
description: ""
publishDate: "2024-06-29"
coverImage: "https://i.ytimg.com/vi/k3RU0ayAdW4/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 10-15 minutes long.
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

[00:00:00]  Thank you. Thank you. Thank you. Thank you. Thank you. And welcome to my stream today. All right. Come say hi in
[00:02:34]  the chat if you're here, if you're alive. I know it's been a few weeks again. I've been traveling. Couldn't do it. Couldn't go
[00:02:50]  like two seconds without making that joke. Suspense puns are almost as bad as solid puns. All right. There we go. See, it's funny
[00:03:04]  when you're streaming because you'll say something and then there's naturally going to be a delay before people see it. And then naturally going to be a delay before I
[00:03:15]  see the response. So it's always kind of funny because there's always that moment where everything starts and you're just a little bit behind the eight ball, so to speak
[00:03:25] . Anyway, I'm glad to see everyone's doing good today. All right. Hey. Good. Glad to see everyone here. Yeah, it's been a while
[00:03:41] , hasn't it? I did, you know, family vacation, went to like Disneyland and stuff. And then I went to Amsterdam for React Summit, which was fun
[00:03:59] . I actually gave the opening keynote at React Summit, which you might not expect the creator of Solid.js to give the opening keynote at what do they advertise it?
[00:04:11]  The world's biggest React conference. But here we are, you know, I think it was a good talk. If you haven't seen it, maybe it might be worth
[00:04:23]  checking out. Mind you, if you're a regular watcher of the stream, you've probably seen a lot of the content. I basically, I don't know if
[00:04:33]  you guys remember, like four months ago, I did the front end extension crisis stream. It's like a five-hour stream. I tried to condense that into
[00:04:42]  20 minutes. That's pretty much what my talk is about. Yeah, you liked it? Yeah, yeah, no. But it also meant that I was right there on
[00:04:52]  the ground floor when everyone was realizing what was happening with suspense with React 19, which was an interesting experience to say. So I had some insight from, like, I
[00:05:05]  was in a meeting where they had a bunch of library maintainers all sitting around, you know, talking about the future of React. That was the whole idea. And this
[00:05:15]  just dropped. And basically, I kid you not, the room, like, basically there's other topics, right, that people wanted to talk about. But, like
[00:05:23] , it was like 70% wanted to talk about the suspense thing, 30% the other topics. And, like, after, you know, a short realization and working through
[00:05:34]  it, I think someone made a joke that it was like a support group. To be fair, one of the other topics was how to communicate better with the React core team
[00:05:45]  to get, you know, so, I mean, it wasn't even completely unrelated to the whole thing. I think that is a challenge, right? When you're
[00:05:56]  steering the ship of something as large as React, you know, how all these things kind of come together and how to kind of, like, deal with a wider ecosystem that
[00:06:06] 's not going to do things exactly the way you expect. All that being said, the suspense topic in general is super interesting because I will say it was interesting to hear
[00:06:23]  people from meta side, especially of the React team, talking about what they do when using React and meta, which to me, and I'm hoping mostly people on the
[00:06:35]  stream is like the obvious thing people should be doing, but the discourse that we see on platforms like Twitter lead you to thinking that it is something else going on, right?
[00:06:48]  They, they, there, there's all these people like, oh, I need to co-locate my data fetching and all this stuff, but they don't
[00:06:54]  even do that at meta. So I'm, they actually hoist their fetching up because that's the only logical thing to do. So we're going to talk about
[00:07:02]  that a bit today. Um, but first I probably should tell people that I'm live so they can get past that Twitch uh, pre-rolls name, Hey
[00:07:10] , I think the new compiler with the new valve is going to react at the hooks. What do you think? Um, it, it, it, it's, it
[00:07:21] 's an interesting one. I mean, I got a chance to talk with one of the authors of the compiler when I was there and there's a lot of really cool
[00:07:30]  things about the compiler, but this is one of those things where like the technical aspects of the compiler are pretty impressive compared to compilers that we've seen released to open
[00:07:45]  source. I've seen some compiler projects that have not been released to open source that are equally or more so impressive ones that I'm not allowed to talk about. Um
[00:07:54] , but I, I don't think it's so much that the challenge here is effectively for the developer. There's a nice DX story here, but it, from like
[00:08:10]  the DX story side, I don't feel it's revolutionary compared to say what we saw in Svelte three, three years ago. So it's kind of like
[00:08:20] , technically it's more interesting, but effectively, maybe not. I guess we're going to have to see, like, I think it's kind of cool that people perhaps
[00:08:32]  can just write really simple code, you know, stuff like where they don't have to be as aware of things at first and get good results. So it pushes off
[00:08:44]  optimization, which I think does make it a big deal. But on the other hand, like, so what? I, I mean, I don't mean that it's
[00:08:56]  just like, I never cared about Svelte for its syntax. I never cared about, you know what I mean? Like if you don't care about that side
[00:09:03]  of things mechanically, you know what I mean? Like if, if I'm going to write optimal react code, I'm going to write optimal react code. Um,
[00:09:13]  it might help. It will help a lot of people write more optimal react code without realizing it. But like, what does that even mean? Well, I talked about
[00:09:25]  the compiler a little bit previously and, uh, and I think there was one update since the last stream, but before I don't want to tangent too hard. I mean
[00:09:35] , let me see if I can share my screen. It's been so long that I don't even know if it's going to let me present my screen. Give me
[00:09:40]  without like restarting. I don't know if I can share my entire screen over here. Let's share. All right, let's, let's, yeah,
[00:09:48]  we're in, right? Cause if I go to my profile over here somewhere, and I think I had one comment about the compiler since we last streamed. Yeah.
[00:09:59]  If you remember last stream, I, I went on the stream and I actually built a benchmark with the new react compiler and we tested it on stream together. After the
[00:10:17]  stream, I realized that my depiction of the compiler wasn't fair. Right. And the reason it wasn't fair is because I was comparing something that actually I, I originally
[00:10:32]  wrote a very hand optimized version. And in fact, when I originally wrote it, I was hitting some questions and design things. And I actually reached out to Dan Abr
[00:10:41] amoff and he actually helped me make it even better against like the compiler doing something against some just random react code. The random react code. Wasn't completely unoptim
[00:10:53] ized because structurally it was still set up the right way. But like, yes, obviously my hand optimized code is going to be better than the compiler. So instead
[00:11:04]  I was like, what if we had a third option that I didn't test on stream, which is a no compiler option. So we basically have hand optimized by me purposely
[00:11:15]  removed the optimization version. So it's still like semi-optimal with a compiler. And then that version without the compiler. And that's a bigger spread, right
[00:11:27] ? I know we were going to talk about suspense, but we can talk about the react compiler for, for a bit. Yeah. You're right. I, I need
[00:11:34]  this to actually tell people that I'm, that I'm live here because we're, we're jumping right into it. Give me two seconds. Then we'll, we
[00:11:40] 'll, then we'll talk. We'll continue this conversation. Let me get back to my profile here. Whatever. God, I'm the worst. I am definitely
[00:11:50]  getting, as these user interfaces are changing, I am definitely feeling my age coming in because I think, I think this will happen to all of you one day. But over
[00:12:02]  time, it doesn't matter how quick you are on the draw today. Um, double check that I'm on. Yeah. You will get to a point where you
[00:12:18]  just get less able to change in your ways and you'll get accustomed to previous patterns. And then you will definitely, unfortunately, start having harder times with stuff that you've
[00:12:30]  always considered incredibly easy. Anyways. Did I say anything else other than I'm live? Talking. Compiler and suspense. Yeah. Let's, let's make it
[00:12:47] . Yeah. Let's just, let's, let's make it a little spicier. All right. Thank you for reminding me. Yeah. We, so anyways,
[00:13:01]  where I was going with this is so we don't like get pulled completely off the whole stream on the compiler stuff, but it was a good place because it's right where
[00:13:10]  we left off on the last one. Um, what does it say on stream? I care thing power. I went back now and compared non-optimized code
[00:13:17]  with the pilot turned off and this was more illuminating. Okay. Just what's cool about this benchmark. Is. We, I actually, we, we saw that the
[00:13:25]  pilot version on the stream was like slightly slower on some of these things, you know, but you, I managed to like, like it's nominal and it isn't
[00:13:35] . And after I did the test run without, you know, a bunch of background processes, my computer running clean and stuff, we, you know, we still saw this
[00:13:43]  small split, but yeah. Stuff like select rows and, uh, it's particularly different swap rows. But if you look here on the third column, let me see
[00:13:52]  if I can blow this up for you. Cause I understand that this is not, um, it's tricky. Open image in new tab. There we go. Is
[00:14:03]  that better guys? But if I, if I removed the compiler together and I don't do the hand optimizations, stuff like partial updates, you know, things where you
[00:14:16] 're doing, you know, more fine grained updates, stuff like select rows doubled, swap rows, remove rows, basically every part of this got slower and it's,
[00:14:30]  it's a more sizable on average, right? Because if react is, you know, 50% roughly slower than vanilla JS, you know, in this scale,
[00:14:38]  keep in mind, there's always a scale to consider and here without the optimizations and, and keep in mind this, this isn't much application code. This is just
[00:14:48]  down to the metal sort of, you know, you know, basically everyone has the same DOM overhead. This is just really forcing, pushing the, like, it's like
[00:15:00]  amplifying on the overhead of the framework itself essentially. Right. When you're looking at it relatively because everyone has to do the same DOM work. Um, and this
[00:15:10]  has basically no app code. There's, you know, there's a sizable improvement that the compiler gives you for free essentially. Right. Ver, you know, so
[00:15:18] , I mean, this is a pretty impressive scale. You know, I take this if I didn't have to worry about this at all. Right. It's one
[00:15:24]  of those challenges where cause like use memo, for example, doesn't go away with the pilot. Like, yes, you don't need to write it most of the time
[00:15:33] , but if there's something that's expensive that should be, you know, memorized, you should, you still might have to manually do it. The compiler, um
[00:15:40] , does it like, I think there was an exact example and they're working on this to improve it, but where like, there were cases where you'd still need to
[00:15:49]  use memo. If it was very important, um, to save certain calculations. I, that was from the react team themselves. I don't know if stuff has shifted
[00:15:59]  over time, but I'm just like, keep in mind that underneath every good abstraction is the truth. Um, but in any, in any case we can see here that
[00:16:08]  when we, instead of comparing the compiler against optimal hand code, instead against completely unoptimal code, we can actually see a reasonable performance improvement from the compiler. Um,
[00:16:18]  and when we look at stuff like memory usage, um, the compiler was the highest out of the three in terms of memory usages. But it, this didn't
[00:16:29]  make a nominal, like it was nominal. It didn't make a huge change over react. Like the hand optimized also a slightly higher memory for certain things. Um, but
[00:16:38]  it looks like, yeah, for some reason, this is an interesting metric. I don't know why no compiler would be, I guess, cause of all the extra crap
[00:16:49]  it has to create when it's, when it's like updating rows. It actually has worse memory characteristics, but generally speaking, um, the memory overhead is not that
[00:17:01]  significant. And then when we talk size, this is what I screwed up on stream originally because I didn't have everyone on react 19. This is a small, small,
[00:17:11]  small, small app. So this scales probably a bit differently, but basically no compiler 179.5 manually. I added 0.1 kilobytes and then it
[00:17:24]  was only two kilobytes more, uh, um, uncompressed with the compiler. And once you compress it, you know, into reasonable size, cause react react
[00:17:32]  itself is about 42, 43 kilobytes. The app's probably less than five kilobytes. You can kind of see here that the difference between no compiler and
[00:17:42]  hand optimized in this case isn't even difference. And the compiler basically adds one kilobyte. Um, I mean, if you looked at the application code, you could
[00:17:49]  argue that that's perhaps like a 20% code increase, but I'm not ready to make that, uh, off the, the single, single test. Um,
[00:17:59]  um, anyway, hopefully food for thought for people. Yeah. I mean, I had an interesting question when I, when I was talking, I can never pronounce the name
[00:18:17]  properly. The guy from the react core team who was at react summit. Um, and I was like, I've been having a hard time showing people the difference between
[00:18:30] , um, fine-grained updates and the compiler updates and, and, and, and like the react team kind of fried themselves in this. They think like, because
[00:18:41]  in the sense, the compiler is really clever that it's very hard to observe the difference. There is an actual difference in execution and rendering in, in, you know,
[00:18:50]  like difference between solid and react. Um, but because of how the compiler handles side effects, it's almost impossible to actually show it. The, if you try and
[00:19:03]  observe side effects in the compiler, react will log stuff as if it's rerunning everything all the time. So all my clever tricks to try and show exactly what's running
[00:19:14]  or not running is basically doesn't work. The only way to make it work is pull it into the graph, have it be a drive value. And that defeats
[00:19:23]  the point of what I'm trying to show. I'm trying to look at the overhead of the framework mechanics itself, rather than like your application code. I want to show
[00:19:36]  what's actually running from the framework standpoint and they make it almost impossible to show it. So like, um, I think this is like, makes sense because they,
[00:19:46]  you know, a lot of these side effects that can even just tree shake out. But it doesn't let me like, what's the term, you know, like when
[00:19:54]  you put a spy in there or like, uh, monitor the, the actual behavior as easily as like a, as a layman dev, just trying to come in and
[00:20:03]  see what's going on. So I think that's the way it probably has to be because I think as a developer using this technology, you're not supposed to really
[00:20:13]  understand how it works. Right. They don't want you to be able to breach the abstraction. I once made a comment that I said, the problem with use effect
[00:20:21]  was that was the first moment that people understood how react actually worked. Right. Like until that time, they might've had a mental model that hooks are kind of like signals
[00:20:29] . But the second, they understand you'd see use effect that layer between the abstraction and the metal erodes away. And then like, like the, and suddenly they
[00:20:39] 're like, Oh, that's how react works. I think if you provide an abstraction that is non introspectable on one hand, you can say it's magic,
[00:20:51]  but, but more so it then becomes a baseline. There's nothing to prove otherwise. Do you know what I mean? Like, so like, I think it's
[00:20:59]  clever because as long as it works properly, you know, it becomes the new mental model, so to speak, like basically you can, if you can't look under the
[00:21:14]  hood, then there's no, you know, big reveal. So I don't know. Take that as you, as you will. Yeah. It's like an
[00:21:28]  M&M reference. I guess I'm, I'm old enough for that. Oh, mm, mm, mm, mm. I agree. Yeah, but like
[00:21:55] , do you care you're saying it's weird? You don't know what's optimized, but like, do we really care? I think the average developer shouldn't,
[00:22:06]  I think. So from that perspective, react compiler is pretty cool. Cause it takes, it raises the floor significantly on what you can do with react. It does not
[00:22:19]  raise the ceiling though. The ceiling stays the same for all those people who are like, oh yeah, now react has signals. It's like, not even freaking close,
[00:22:29]  but like, does that matter? I, I don't know if the performance is good enough for you before I'm, I'm assuming it's going to be good enough
[00:22:38]  for you after with the compiler. I'm assuming it's going to be good enough for you after the, you know, it's going to be good enough for you
[00:22:44]  after the, you know, it's going to be good enough for you after the, you know, it's going to be good enough for you after the, you know
[00:22:48] , it's going to be good enough for you after the, you know, it's going to be good enough for you after the, you know, it's going to
[00:22:53]  be good enough for you after the, you know, it's going to be good enough for you after the, you know, it's going to be good enough for you
[00:22:58] . Like being able to have a little bit control and understanding what they're doing. They want to be able to create the most optimal thing themselves. It's a hard
[00:23:04]  pill when the reacts, like, don't worry, we'll take care of it. And it's like, do I trust you? You've said that before. You
[00:23:10]  know what I mean? Like you, you, you actually see this a lot. I forget where there was a comment. Maybe I bookmarked it, but like,
[00:23:19]  if you listen to like Tanner or Ryan Florence or someone, let's see if I can find my notifications here. Uh, not, no bookmarks. Yeah. If
[00:23:28]  you've listened to Tanner or Ryan Florence talk, I got one here with Tanner. Do I have a Ryan Florence one anywhere? Maybe not. They keep on talking about how
[00:23:39]  fine grained, like, like check out this new fine grain thing that I'm doing. Right. And it's like, they had the work against the react status quo
[00:23:49]  to get there. And they're really happy about, you know, mechanically doing that where the react. It's kind of like, don't worry about that yet
[00:23:58] . They are actually working really hard on that. I, I, Ryan Florence, I forget where he, yeah, he was talking about some fine grained router data validation
[00:24:08]  thing. I think I, I was reading that stuff and Tanner stuff and I keep on coming back to the fact that like, I mean, Tanner's is right here.
[00:24:17]  You know what? Let's use 10 stack query instead of the routers built-in loaders with zero sacrifice to SSR. Picture teaching the router how SSR
[00:24:24]  a client query route plus query serialized query on every client. Pretty sweet. We're about to take it even, we're about to take it even, take it
[00:24:32]  even, what? Show more. Yeah. Take it even further with the ability to stream non hoisted use suspense queries from the server to client, then seamlessly hydrate them
[00:24:44]  automatically. And I'm like, I understand why people are excited about this. How many, how many likes are on this one? 280. Yeah. This is exciting
[00:24:57] , but it's like, this is the way Saul has been working for five years, you know, to a certain degree with create resource. So it's like,
[00:25:07]  it's like, I don't know. It's funny. The library authors seem very much more in aligned with where we're sitting. And then we, you know,
[00:25:22]  yeah. I wonder how this tension plays out. Cause I said that there, there was a Ryan Florence tweet. I don't have a bookmark where he was basically talking
[00:25:29]  about fine grained updates as well for remix. And I'm just thinking, huh, you know, like what's pushing this. Right. Right. Right. Million
[00:25:46]  JS and, and they could, right. Cause million JS and we saw Aiden actually on stream. I was a moment ago. I highlighted one of his comments. Um
[00:25:54] , and the compiler are almost like passing chips. Like I said a while ago that I didn't think the compiler was going to win any benchmarks, but million JS wins
[00:26:05]  every benchmark. You know what I mean? And it's just because like, it's quite possible that react in the future does try and optimize some of those areas. But
[00:26:17]  like, they also had a Dominic from Inferno in there kind of optimizing along that same vein. vein and, and that, I mean, this remains to
[00:26:27]  be seen, but they said that the structural stuff, the stuff that compiler fixes, you know, that, that part were from application code. They're like most people's
[00:26:37]  apps are actually a lot of application code and that application code is actually what slows down the apps. So the fact that, you know, frameworks can render, you know
[00:26:45] , a couple, you know, you know, tens or hundreds of milliseconds faster, certain things doesn't matter as much as your application code. So like, we're
[00:26:52]  not going to prioritize or do trade-offs based on being able to do like these render techniques, like some of the optimizations that I think that million does might be challenging
[00:27:03]  for their concurrent model. I don't know, Aiden can probably fill me in on that better, but like, like essentially they went and they tried Inferno
[00:27:15] , you know, at meta and it may, you know, it was faster, some things, some startup time things, but it didn't, it barely made a dent
[00:27:22] . And then they were like, okay, we're going to go this concurrent way of, you know, and kind of take things, you know, the other way
[00:27:31] , because the, you know, if we can schedule or manage the application code, we can deal with the parts that, you know, people can't control. It's
[00:27:39]  the same strategy, the compiler, we can make the unoptimal code people write better, that'll have a bigger impact than making the framework faster. I think that
[00:27:48] 's generally, they're thinking, but the question you should be asking yourself in the scenario is, how much of that is due to the actual architecture pattern of react itself,
[00:28:00]  the beat on the re render, how much of that overhead is inherent to that model. So like, I mean, it's unanswered, right, to a
[00:28:12]  certain degree, but that's, that's where I'm coming from when I'm looking at these things, because if the model is inherently expensive, and then your app code
[00:28:24]  ends up just magnifying that, you know, then, yeah, I think if you want to keep the model, then you have to deal with that. But if
[00:28:33] , if, if we're talking about something else, then like, maybe there's other directions you can go, right, because millions direction largely is taking a page from what
[00:28:46]  lit or solid did, which was like, let's optimize the pure rendering, the not pure, but like the creation stuff, you know, our ability to just like,
[00:28:56]  very quickly generate large blocks of code. Right? Or view. React prides itself on having the first run be the same as the second run every time. And we
[00:29:09] 're going to talk about that today. Actually, we do some coloring. I call this stream the art of suspense, you'll see why in a little bit. I
[00:29:30]  mean, sure, I mean, sure, out of the box. But for me, when I'm talking about that, I'm talking about like, they're, they
[00:29:35] 're, they're raising the floor, like, it's gonna be much harder with the compiler to write truly inefficient React code. So they are definitely raising, like, the
[00:29:47]  four of the performance. It's just like, yeah, I don't know. In reality, the production use case. Okay, yeah, did I miss any of
[00:30:00]  it's content? In reality, the production use case for fast DOM updater tool is very small. Oh, what do you got for me? It is this, this
[00:30:09]  is a Dominic post? I will take a Dominic post. Give me a second. I saw this. I even bookmarked it. I was going to
[00:30:21]  talk about this. But you're right, the compiler is a good time to talk about this. JavaScript pilots today are fixated on compiling individual modules that is sensible and
[00:30:28]  deterministic property. But really, the true power compilation is cross module. Oh, he's gone here has any I know, there are some cross compiler libraries and dev
[00:30:42] s are cross module compilers libraries and JavaScript right now. I've worked on one for a couple years. You know, it's still not released because of complications there
[00:30:52] . But Marco six, which I'm not supposed to talk about is a cross module. That's how they can trace reactivity through the whole thing. Imagine being all
[00:31:03]  the inline components that you know used once, including their props. You could even inline well-known props on it, remove entire terms of code, do dead code
[00:31:10]  elimination. You'd even argue that there would be no need for something like RSC as a highly intelligent compiler could do all that work for you. Remove the limitations of ref
[00:31:16] actoring code to make it work. The drawback is going to be debugging experience. The more quality it does, the developer doesn't show it. The harder it is
[00:31:23]  to reach about some bugs to solve, although it has been shown in other languages. I'm, I'm with him up to the RSC comment. Like I get
[00:31:31]  what he's saying, but the data fetching RSC thing specifically is a pain in the pain because I talked about this in my talk. There are some things that we
[00:31:50]  don't know whether they are implicitly server or not. And even the smartest compiler can't make that decision point. Like I've worked on resumable systems.
[00:31:59]  And this is what he's describing is basically how like quick's resumability isn't cross module module, but Marco's is. And the biggest difference between the two because
[00:32:16]  of that is that Marco can confidently tree shake out the code. We're quick just bundles it separately for you and it might never get loaded. But the, the
[00:32:28]  key here to understand is that both of those architectures have to include the potential of any code coming in below a decision point, which means that any data that you need to
[00:32:41]  serialize. Um, you have to serialize any data that could be read below that decision point. So like the island architecture, the clear boundaries of like use
[00:32:52]  client or, you know, Astro's islands and texture, whatever it is actually are important to actually accomplish. What RCs do an automated compiler can't do that
[00:33:09] . I don't think it can solve the data serialization problem. It doesn't know. It's kind of like the similar to that problem of like showing the CSS on
[00:33:17]  the page, like how much CSS in line, like the part, you know, there's people trying to solve the like initial CSS. So you only show what's
[00:33:25]  on the page and then load the CSS later if we start getting to this area where it's a lot easier for a human heuristic to be like, you know,
[00:33:36]  this component generally appears on the page at first and pull that in. And it's a lot easier for us to go like, like, I think I actually had a
[00:33:43]  conversation with Adam Rakis the other day on Twitter too, where he was talking about data loading and he was like, you know, would it be cool if, you know
[00:33:52] , something went down and then basically anything that was static, pull out that data fetch and have it hoisted, but anything below a decision, then, you know, it
[00:34:02]  can be loaded later in the client or whatever. And it's like, not necessarily that decision point doesn't define whether you actually generally want to always load it. Like
[00:34:09]  what if the decision is 99% one way and 1% the other way, like even creators of things like quick understand that. And they were trying to use AI intelligence to
[00:34:20]  look at end user usage, to determine how to branch on those paths. But there, there, there has to be more than just the static analysis of the compiler there
[00:34:30]  there in order to accomplish these sort of things. There is actually a real decision point. You could try and use like, as I say, AI models and analytics and stuff
[00:34:37]  that kind of come in, but the compiler itself is insufficient at least to be able to handle what I call the RC problem. You know, without like a, I
[00:34:45]  mean the automatic part without like some sort of, you know, like notation or something. But yeah, the inlining thing was interesting. I talked about this in an
[00:35:03]  article about five years ago, because in order to get to a point where you can inline, I was saying like components have to basically be functions. Like you need to
[00:35:12]  get away from them having instances. Like, so when I was designing solid, I was very much thinking about it. Dom working on felt five, which is kind of
[00:35:21]  like solid. I can see why he's here again. I mean, to be fair, he did some of this work in prepack as well. Um, but like
[00:35:28] , I think he's in a place where he could attack this inlining thing, but yeah, basically I got to the point where I could only inline components in the
[00:35:35]  same file module. And I was just like, is this worth it? And I'm like, maybe like something, the JS framework benchmark where you, you know, just
[00:35:42]  put everything in the file. But I imagine with Svelte, this is uniquely challenging because Svelte is single file components. So you can't inline,
[00:35:49]  you know what I mean? Like, so that's interesting. Yes. For suspense. And I haven't talked about that yet. And the answer is, uh, probably
[00:36:08] . Yes. Yes. I, I, unfortunately, which means that RCs have a lot more, um, weight than you'd think. Yeah, it's,
[00:36:22]  it's cool. But as I said last time, I, I, I kind of think Ryan Florence and crew are doing it wrong. I think next JS is actually
[00:36:30]  the approach that makes sense. I, and I don't say that happily. It's just. Yeah. How I view. The world. I, Tanner was posting some
[00:36:38]  stuff too. And I'm like, they're, they're kind of gone off this thing. I, I, I think people just don't get RSCs.
[00:36:42]  And I think the thing they want them to be or not what they are. And I think maybe that's ultimately going to be their failing, but effectively no solution out
[00:36:55]  there. Presumability, whatever, you know, thing actually accomplish what RSCs accomplish. So yeah, yeah, even, even Marco six Marco six is a
[00:37:07]  very smart, reasonable framework. It does not actually solve the RSC problem because you hit it. The second you try and add client side routing back in seriously, if you
[00:37:19]  guys have not watched my talk, um, I'll post it again here. Um, it is, I I've talked about this on stream, so you guys should all
[00:37:29]  be familiar with it, but maybe like having it like condensed and in your face is the way to do it. But like, yeah, let's just drop this one
[00:37:39]  right in here. Don't maybe don't leave the stream right now, but. But like, yeah, I mean, this is, this is, this is the kind
[00:37:59]  of problem space. And keep in mind, I backed off RSCs for the solid start release or not RSCs. I got to stop saying RSCs
[00:38:06]  because server components in general, not non react version. Um, but that doesn't, that like, doesn't change my view of how uniquely powerful they are. Yeah.
[00:38:19]  Like from my view of the world, RSCs are just a, uh, a more advanced lineage of islands. Right. Um, whereas like presumability is trying
[00:38:30]  to take our current app, uh, single page app mentality further. Mostly the funny thing is when you hit something like Marco, which is trying to not do that.
[00:38:44]  So to speak where they're, they, they are actually solving for the, for the MPA case, but just in the most optimal way possible. And they hit resume
[00:38:53]  ability as well. But the problem, as I said, is client side routing. Um, yeah, actually maybe that's, maybe that's actually, it's so
[00:39:03]  funny how it's, how that works. It's like quick one works so hard on trying to keep the single app mentality. Like, you know, like you're just
[00:39:10]  writing something kind of like react with some dollar signs, ignore those. Right. Um, but the truth of the matter is like, resume ability is like the ultimate M
[00:39:20] PA optimization and it can't handle client side routing in an efficient way today. Um, whereas islands, which were the initial version of the MPA framework, you know
[00:39:35] , been going on now for over a decade of islands. Um, thanks to Marco, um, RSCs actually are an approach to solve the client side routing, you
[00:39:48]  know? So like, yeah. Yeah. Yeah, I, I don't server data. I understand. That's why they want to do it like the relay perspective
[00:40:04] , but like, and that's one perspective of it, but it loses all the like finesse of it. I mean, if, if that, if that's all
[00:40:12]  you wanted with server data, then, then remix is good. Do lakes. Nuxt is good with their certain one of things. I just don't call those actual server
[00:40:19]  components. It kind of misses the point. Um, and the reason, you know, when walk who came out and the reactivity. Like don't do that,
[00:40:28]  um, to a certain degree, uh, just like let people just drop server components of anywhere is because of fetch waterfalls. Mutation waterfalls, you know, people
[00:40:37]  more accepting of, but fetch waterfalls, you know, where you have, if you start weaving these things through each other and they can actually pass props to each other.
[00:40:43]  Then you can't render one thing until part runs on the client, part runs on the server, part runs on the client. And it's just back forth, back forth
[00:40:49] , back forth. That's what that's it's terrible. So like. Okay. Yeah, I don't know. I, if you want to get stuff small
[00:41:03]  and granular, you, you, the, your best bet is keep the outside of the onion as static as possible and push your interactivity to be as thin of layers as
[00:41:14]  possible. And as closest to the leaves as possible. Some things are not close to the leaves, but then make them a very thin layer and project the server back through them
[00:41:22]  again. MPJ, who's MPJ? Facts. Quick Astro this feature. Astro doesn't actually solve the client-side routing thing. Quick needs
[00:41:46]  something like server components to kind of bridge the gap. Yeah, it's one of those really tricky things because it's a reason why I started my research on the server
[00:41:58]  component side because the problem is it's even too late for us to a certain degree. It's much harder to get back to server components when you have a bunch of advanced
[00:42:12]  features than it is to start with that mindset in mind. The reason that we didn't end up shipping something like server components in solid other than like some really odd DX
[00:42:24]  issues like where I was having a real hard time justifying the mutation story for apps and all that and I couldn't unify it but like from a pure like who cares
[00:42:32]  mechanical standpoint was that we had out of order streaming. Out of order streaming makes stuff drastically more complicated. I could picture how I could take Astro without out of order streaming
[00:42:45]  and have a working islands router demo that would basically do the right things. Astro today naively like just using vTransition will fail. Again, watch my talk
[00:42:57] . I'll explain why it doesn't work for this but I could see how you could implement something Astro like or maybe a layer on Astro that could get you
[00:43:05]  kind of in the way and then you could try and get resumed really quick but at some point we're we have all these distinct pieces. We need these pieces to talk
[00:43:13]  to each other, right? Like some of those limitations that Astro have is because it doesn't own the client side framework. So like react or fresh with preact is
[00:43:22]  just better situated when we talk about an app context because the state has to persist. I keep on getting bugs from people from things like nano store and it's like you have
[00:43:31]  to understand that like lazy hydration is not a sensible thing to be doing unless you can wake up as it goes, you know, like as things change, not on some
[00:43:44]  arbitrary thing. You have to make sure that if you don't hydrate or initialize the app after any state on the client that it could read has updated. Now,
[00:43:53]  quick does that in its own world of things, right? But like, yeah, like something nano stores, a framework's not going to have the innate knowledge of it
[00:44:03] . So like there's not an actual clear path forward right now where I can tell anyone go use this technology and you're future proofing everything right now is very temporary.
[00:44:19]  It's very intermediate. That's probably why people are betting on react because they're like, look, these guys will figure it out eventually. I don't care if the
[00:44:28]  stuff is like super inefficient right now. Maybe one day they'll, you know, they'll get there. History has shown us that that's not the case, but it
[00:44:34]  might be different this time. What does that mean? You know, it'd be different for us. Oh yeah. Yeah. Yeah. I saw that. Yeah. The
[00:44:43]  funny thing is I, I didn't, I don't, I I'm sorry. I actually don't even know what that is. My introduction to tech YouTube was
[00:45:00]  Jason Langstrom. Um, basically. And that's the only thing that I paid attention to. And then I saw Jack Harrington and I was like, this guy
[00:45:09] 's pretty cool, you know, and then, you know, I started streaming and then, you know, I started seeing all the others, but yeah. They've
[00:45:25]  talked about it. I don't know, but do you want more competition in this space? What's that framework going to be like? I think the thing is Astro
[00:45:37]  has a really sweet spot and that they just stay there, they're probably going to do very well for the next five years enough that they, they are very viable. If
[00:45:48]  they try and overextend in these kinds of ways and do stuff, they're going to get in the slog against react that they probably don't want to be in
[00:45:55]  right now. They can just be like, look, you can use react here and people can be like, okay, yay. We love Astro. Is there a theory
[00:46:03]  or a feature where the state graph can be defined as I'm which notes on the side? I don't think so. I don't like, how do you make that
[00:46:16]  choice except for some kind of heuristic based on like what, right? Like the update cycle. But like, I don't think that, I don't think
[00:46:27]  you can automate this without AI or without like some kind of statistical analysis. It's not like, like just work through the problem yourself and then just think of like every exception
[00:46:39]  case and how you can't make a general assumption. No, no. And I said that in my talk, honestly, I don't talk about the rails and the
[00:46:51]  HTM X's and Laravel or whatever, because from my perspective, they're just not even on the map. Like, you know, like it's not because like
[00:46:59] , you know, I might be critical of stuff like quick and all this stuff. It just, I, I just don't even, they're just like not even
[00:47:07]  like the one thing that could change that is if, if like staple servers come back and then the interaction gets a little bit interesting, you know, and we've been seeing
[00:47:16]  people playing around with that. But otherwise, if we're talking about in the stateless world, JavaScript is the only option, not even close. Like profiler guided
[00:47:31] . Yeah. Yeah. Like, right. Like, so you're, that's what I'm saying. You need like to run something. You need to actually do something
[00:47:39] . You, the analysis of like the structure, the code can't tell you this. You'd have to be like, it's slow, or you'd have to be
[00:47:47]  like users use this, or you'd have to be like, you need, you need some kind of input that is not the code itself. I don't, the
[00:47:54]  question is, can like, I don't know. You can't, if you look at this way, use server and use client might not even have to be a rule
[00:48:04] , but like you change the wording and then it becomes like an intention. You need the way to flag the intention. And we've gotten there with reactive languages, because we
[00:48:13] 've gone to a point where like, um, you know, there's state and there's derived state and there's effects and we can understand the intention of those and
[00:48:23]  the guarantees with them. And we built the language to it. If we can build a language to this, then yes, but the language initially might be like use server,
[00:48:36]  use client. Do you understand what I'm saying? Like, like you need a way of describing the problem in such a way to actually do it because just structurally,
[00:48:47]  I don't think there's enough information there. You have to like say like, this is high priority. This is low priority. You need like some kind of way
[00:48:54]  of, so when I said impossible, I don't mean like in all futures impossible. I just mean the way people view the way they write their code today, not possible
[00:49:04] . We need a way of describing the intention in a way that is still permissive enough that the server or sort of the compiler builder analyzer can do something with
[00:49:17]  it, but explicit enough that, you know, it actually knows what the hell we intend. Right. I don't think this is a structural solve kind of problem.
[00:49:31]  So ultimately soon clients are running for sure to the state. Yes. Yeah. I mean, if you want one solution, you, if you don't care and you have
[00:49:38]  multiple solutions, you know, and you can be like, look, I have my marketing page app here or sort of site. And I have my interactive site here. Then
[00:49:47]  yeah, keep on doing what you're doing. But if you want to have a one single model, precision state is a must. big challenge. Super generally is lucky
[00:50:01] . Yeah. Yeah. Somehow we got completely off mark today on talking about compilers, but I'm glad you guys are like that. Right. Technically we have our
[00:50:13]  season. Okay. Yeah. I mean, I don't know enough about these other languages, but I have to imagine from a fundamentals point that the, there has to be
[00:50:22]  a language to capture the intention. It's not enough to be purely structural, to be able to make these kinds of decisions. You have to have some kind of,
[00:50:30]  yeah, anyway, but you know, I, I'm just speculating here. Keep in mind, like I've never learned old camel. So, you know, yeah
[00:50:41] , the, the Russian guy, he, he likes reminding everyone how he has the best reactive, uh, library framework or whatever. Um, he probably does. I,
[00:50:52]  I, I've been trying to follow his writing. There's tons of genius in it. I just can't get the whole conclusion. It's, it's tricky
[00:51:01] . I think it's just a language barrier, but he does show up on my articles sometimes and on Twitter at responding to stuff. And usually everything he posts is pretty spot
[00:51:12]  on. Okay. All right. All right. All right. I didn't realize people want to talk about compiler so much. I don't only honestly just chose this
[00:51:30]  cover, you know, topic in general, because it aligned a bit with what I've been doing in solid. I've been working a lot on, uh, reactivity
[00:51:39] , you know, signals 2.0, so to speak async and all that stuff. And I was like, the suspense topic seems like it's like right in
[00:51:48]  the same ballpark. Right. Um, but I think we need a little bit of like, uh, how should I put it? We need a little, uh,
[00:52:00]  introduction, a little bit fundamental. So we're talking the same language before we actually pour into it. I just want to quickly see if there's anything. Uh,
[00:52:09]  why am I talking about DX here, man? I'm so sick of syntax arguments on Twitter. I think I got on one the other day, like as bad as talking
[00:52:21]  about Celsius versus Fahrenheit. Okay. So yeah, I was gone. There's a gap. Okay. Before we go, I want to say one last thing about benchmark
[00:52:43] ing. Oh, Dan removed his post. No, Dan is gone. is Dan gone. What's going on here? Dan. It should just be Dan, but
[00:53:08]  there's a Dan three. Oh, it's a parody account. Dan two is gone. Oh man. So there's, there's nothing to show. This is
[00:53:31]  too bad. Dan was comparing the JS framework benchmark to, um, to like putting a car up on those rollers where you don't actually connect it to a power source and
[00:53:46]  you just run the engine as fast as it can to kind of test the characteristics of the engine. You guys are Dennis gone. Maybe permanently with the blue sky. Yeah
[00:54:04] . Oh, well. Um, and, and because he's basically saying, you know, most code is app code and all this. And I talked about this a
[00:54:11]  bit earlier, but I, because we talked about the compile, the compiler and we talked about this, I should take care of this right now before we, you know,
[00:54:17]  get too off track. Um, I took a little different, a benchmark is like taking a car to the racetrack and seeing which is the fastest. Um, but
[00:54:27]  if in reality you are just driving around town, what does it matter? Um, because the Dom is the load, you know what I mean? Right? Like the
[00:54:38]  Dom, the Dom is the thing that's, you know, is the load. It's, it's the road. And I said, I still want to build the
[00:54:46]  fastest, most efficient car. We, we know you like to, okay, where is this loose on the weekend, but blah, blah, blah. I'm just talking
[00:54:54]  car ads. The glue is disproportionately measured in benchmarks. It's stress test at weights that exceed normal usage. It doesn't test every possible scenario or even realistic ones,
[00:55:03]  but it tests all the basic functionalities in usable UI. It drives. Ultimately, we know every driver app code is different. The driver is more impactful than the car.
[00:55:12]  And when you move between cars, the part that part is going to stay the same, but what sort of car do you want to drive? Yeah. See, what I
[00:55:18]  was trying to say is like saying that the app code is the most expensive assumes that like it's like, yes, but then shouldn't every framework have the same app
[00:55:31]  code in these examples. Right. I guess the difference between render models, between reactor solid or something like that would make the app code run differently. But I don't see
[00:55:39]  that as something working negatively, you know, on to, to our disadvantage here. So I think it's still important to, to, you know, stress test the
[00:55:49] , the car itself without a driver, so to speak. I, anyway, just a small tangent. I guess the bigger learning here is that Dan is no longer on Twitter
[00:55:59] . So yeah. Okay. Let's, let's move on. You're saying the same things. Yeah. Yeah. Mostly. I just think like he, he
[00:56:22]  w he was saying that almost that like the, it wasn't real because there was no load on it. And I, like I'm electronics guy, right? Like
[00:56:36] , I'm, you know, it's like when you test something without hooking up to a speaker, you know, there's no sink, there's no, whatever
[00:56:43] . I don't think the benchmark is that there's no sink. It's more of like, you know, there's a huge sink. It's like putting the car
[00:56:51]  on like a track with a ton of resistance. Do you know what I mean? Like it's yeah. I don't know. It's maybe it's a subtle
[00:56:59]  difference. Yeah. Yeah. Yeah. I know. He's just, that's why there's a Dan too. Now, now there's no, there's no more
[00:57:10] , there's no more Dan. Oh, what? It's surprising. Sorry. I thought I was already following coding garden. You guys should too. It's the
[00:57:20]  random things I notice. Anyway. We're going to talk about syntax more later, but I don't want to, I want to get into the meat of the discussion today
[00:57:34] . Um, so let's, let's let's, let's get somewhere else. Let's go Excalibur maybe. Yeah. Um, let's find
[00:57:52]  some space. That seems like some space. I see. Yeah. Okay. That's fair. Yeah. Yeah. How much of that is a, of, of
[00:58:10] , or the most efficient car. Yeah. How much of that is like a personality thing? Like Yeah. Dan definitely doesn't drive a Lambo. Can you guys guess
[00:58:31]  what I drive? not a Lambo, but I, I, I, there is a weird personality alignment on this Honda. Not close. Not quite. Um,
[00:58:45]  it's actually not, I, I, I, I, I, I, I, I drove Japanese cars most of my life, but I now have a, an
[00:58:51]  American car, but actually it's German technically. I, I, I drive a Ford Focus RS before that. I, I drove an, uh, Evo Lan
[00:59:01] cer or, um, you know, um, I, I never owned a Subaru STI, but that's, that's, that's where I am. Right.
[00:59:11]  I actually did drive a Volkswagen Jetta for a while, but you, you, I, I think you guys get what I'm saying, right? Cars that look
[00:59:20]  basically like a consumer compact car, but have the, you know, the best technology, all wheel drive, you know, good horsepower. Yeah. You know, you,
[00:59:33]  you, you, you know, that kind of thing, you know, I, I, yeah, I loved my, uh, yeah, honestly, the, the,
[00:59:44]  that Evo was unreal unreal. There you go, drive. But yeah, so, but yeah, you know, not a Lambo guy, not a Porsche guy,
[01:00:05]  not a, not even like a boss Mustang kind of guy. I, I like cars that I like, and my, my RS, I guess it has a tiny
[01:00:18]  bit of a wing on it, but like, I don't need a huge wing. I'd rather the car look clean, but have a lot under the hood. I
[01:00:26]  love GTR GTRs. I, yeah. If I had a lot of money. Yeah. Yeah. Yeah. I, I, I, yeah. Right
[01:00:47] . Um, there you go. Does that say anything about leptos? I don't know. Um, no, I, I love GTR is so cool and
[01:00:58]  not, I mean, the art are obviously the, the R35 generation or whatever. Um, but I, you know, I still have a very big soft spot for
[01:01:07]  like the R34 and the R32. Um, anyway, all right, sorry, this, this, this, this went again on a tangent. I,
[01:01:30]  I did own because of my love of GTRs. I did own, uh, uh, an infinity G35 for awhile. Um, and it was the nicest car
[01:01:40]  I'd ever owned to that point. It had like nice seats and nice heating and a nice sound system. Uh, right. Cause that's a S that's technically what
[01:01:50] , what do they call those? Like they're like, um, um, they're called the Skyline GT 350, um, in J in Japan or whatnot.
[01:02:00]  It's Nissan Skyline GT 50, 350. But, um, yeah, I don't know. Anyways, car conversation is a little bit off point. Um, let
[01:02:15]  me get the, if I can get a playground up going to, from my, from what I want to do here. Um, no, until the last demo I
[01:02:24]  did, whenever I'm showing this, this is my like world beyond components talk. And I'm like, look at how you don't need a compiler. Um, let
[01:02:31] 's reset that. Need rice for JS. Oh man. Okay. I, I don't know the best way to do this, but I wanted to do some sort
[01:02:47]  of coloring because I feel like, I feel like one of the differences before we even get into suspense for a moment, but I w I want to like show something here,
[01:03:02]  which is that like, I'm going to do my classic example thing. Um, and we're going to, we're going to do one more. We're going
[01:03:24]  to create effect. Actually. Yeah. We're going to create effect and the create effect is going to, this is going to show double count. It's funny.
[01:03:38]  I want to start with the react and we will go there in a second. Um, and the create effect is going to console.log count. Okay. Everyone can
[01:04:07]  see this, right? So what I'm trying to do here is I don't actually care what, what this is very much. I just want to kind of show a
[01:04:28]  cycle. Let's, let's actually change this to react code. I wonder if I paste stuff in. Yeah, this is not going to work. Um, I
[01:04:38]  almost have to like take a screenshot and draw over it. It's probably going to be our best bet. Um, yeah. Okay. It's fine. Because I actually
[01:04:52]  don't care if this app actually works or not. I just need to let's make a react version of this. You state. Use memo. To. Count.
[01:05:13]  Use effect. Count. Yeah, count. Change text alignment. Yeah, but I like, I don't even get like, I don't even get like, uh
[01:05:37] , syntax highlighting or whatever. And I, what I want here is, um, what I really want to do here is just like, turn off the bell. Actually
[01:05:59] , let's, let's line align this so that executable parts run on or on different lines. So be useful. Yeah. Okay. There we go. Okay.
[01:06:21]  Now I have no clue if what I'm trying to do here is going to make any sense or if it's even a good thing to do, but we're going to
[01:06:28]  try and do this right now because we have some react code. And if we insert an image. Oh, I, I'm like dumb. I'm trying to remember
[01:06:44]  where did my screenshots last up? Put them somewhere. I can't remember. I put them on this computer. Found it. Let's just drop it right here.
[01:06:59]  Okay. Let's look at the statement by statement, but we're gonna do a little coloring here. I'm gonna define some swatches here for color code sake, but
[01:07:15]  we're gonna say that. I'm gonna make it solid. I'm gonna say. That this. Is pure. And then. This. Is render. Is
[01:08:01]  post render. Okay. I want to talk about scheduling essentially is what I'm doing right here. Okay. Everyone falling so far. Yeah. I, I did read
[01:08:15]  his articles translated to English and I still don't quite. Follow him a hundred percent of the time. Um, okay. So. If this is react. And we
[01:08:35] 're just going to kind of scribble along the side here. We're going to start. With pure. Right. When we, when we run our code. This runs
[01:08:49]  during the pure phase. The. this. This whole thing runs during the pure phase. This. Count. Runs during the pure phase. And then. This
[01:09:14]  GSX all runs during the pure phase. This is what it looks like in react. Okay. Right. And. If I. Switch now to red. Or sorry
[01:09:33] . I'm going to switch to blue. Now. The only other thing that we have here. Is this. Which runs. Post render. So what I'm trying to
[01:09:43]  show here. Is that. There is no. Render. Kind of exposed to you. As a react developer. Um. Pretty much the whole component runs pure.
[01:10:00]  Except it schedules. You use effect to run post render. Or people should like the stream. Is this. Is this where I remind people to like. And subscribe. Because
[01:10:11]  it makes. You know. A big difference. Right. The thing. The truth of the matter. Is outside of this. React. You know. We'll.
[01:10:25]  We'll do something like. Have. Like. You can picture your components. Being called. You know. During. Like. It's unfortunate. They call it the render
[01:10:33]  phase. But. You'd be like. Run components. And then there's. Patch. And diff. Right. Or diff and patch. Sorry. Diff. And
[01:10:46]  patch. That happens outside. Your. This happens outside here. And in this phase. This. Is green. And this. Is red. So. Essentially. At
[01:11:09]  all times. happens with react. When. The code. You write. As an end user. Is either going to be. Pure code. Or it's going to
[01:11:23]  be. Scheduled post. Render. The actual. Rendering. Or. Effectful. Part. Of the stuff. Of. The framework. Is actually. Completely
[01:11:31]  hidden. From you. At all times. And it's important to note. That even. Part of this use effect. Is run. During the pure phase. They
[01:11:41]  know that this use effect. Is related to count. That they can choose. Whether the schedule or not. Right. Okay. So then. All right. Let's
[01:12:05]  get out of here. So. Let's take our. Solid example. And. And do the same. Exercising. As this. Right. And I'm going to
[01:12:17]  talk about. Solid today. First. And then we'll. We can talk about. What some of the other. Frameworks are doing. Right. I actually don't
[01:12:26]  need to. Switch this to. A new line. Because there's no. There's no. Dependency array. This one. I. Do. You know
[01:12:37] . Whatever. I'll just do it. For fun. Okay. All right. Let's do this. Actually. I want to add. One more thing. To this
[01:12:54]  example. Do I. Do I. No. Not yet. We'll get there. Okay. Someone's. Asking if the Mac. Just copied it.
[01:13:21]  Just copied it. But no. I mean. Let's. Let's move. This over. To know. I'll first. Paste our image in. Okay.
[01:13:46]  I'm going to. I'm going to. Just because. So I can get it all on the screen. I'm going to. Just copy it over like this.
[01:13:55]  Okay. And then this is. Solid. Today. Let's just say. Solid. Okay. No. It doesn't run. Hope here. Let me. Let
[01:14:21]  me. Let me get. Get here. I mean. I think there's something. We have to look at here. Because. If we talking about. The initial
[01:14:35]  render. Then yeah. This runs pure. This runs pure. And. And this. Runs pure as well. Okay. And then obviously. This runs. Post render
[01:15:08] . Initially. And I want you to note something. Nothing about the effect. Including knowing the dependency of count. Runs pure. So we don't actually know. What
[01:15:20]  the effect runs. Depends on at this. At the pure. At the time. Because you'd run pure. Here than render. Than post-it render.
[01:15:26]  Like. And then. Solid. When it updates. Is a little bit more. Interesting. Because. Does react. Regardless of whether. It updates. Or. Sorry
[01:15:40] . Just kind of like. Move these around. So they're a little bit. more grouped together. React. Regardless of whether. It's first render. Or updates
[01:15:45] . It does. It looks the same. Whereas like in a fine grained render. Because React, regardless of whether it updates or just kind of like move these around
[01:15:56]  so they're a little bit more grouped together. React, regardless of whether it's first render or updates, it does, it looks the same. Whereas like in a fine
[01:16:05]  grained render like solid, what ends up happening is none of the stuff outside runs, runs again, obviously, because we don't rerender components. So when something
[01:16:18]  updates, focusing just on the expressions, this renders runs pure. This renders runs after. And this renders render now and you might be going okay, because essentially
[01:16:46] , our render effects render during the pure phase during our initial renders, we run them eagerly the same way create memo runs eagerly in solid. Then after
[01:17:00]  the fact, they get scheduled like this. Okay. Right. And the reason I'm highlighting that is because it's literally just this expression, right? We don't
[01:17:11]  recreate the rest of this stuff. No, no, no, no, no, no, no, no. Memos and effects are very, very, very, very
[01:17:21] , very different. I use that as a basic example. So people understand reactivity, but memos are the key to like the derivation and stuff is the
[01:17:32]  key to everything. Let me drop an article in, I guess this is like, should be like the next reading for anyone who reads my introductions series. Maybe I should tag
[01:17:44]  this one on as like part three, you know, the, I have the, you know, but derivations and reactivity is important. The reason I wanted to
[01:18:05]  show this is, is because I'm going to, I'm going to make one more example here. I'm going to add like, uh, in front of the effect
[01:18:15] , I'm going to hoist out a function. I'm going to call it const triple count, and I'm just going to make it a function, not a
[01:18:22]  memo. Okay. And it's going to be count times three. Okay. The reason I want to do this. I'm going to show you in a minute.
[01:18:47]  Oh, did I not? the, sorry, I need to do one more screenshot. I didn't actually update this to use triple count. Oh, that's annoying
[01:19:24] . It's fine. It auto formatted on me. It's fine. Auto formatting is a good thing. Um, just was trying to do something very specific. All
[01:19:37]  right, let's try this again. the reason I wanted to include the function here, because I want to make this at least aware, even, you know, with
[01:19:54]  solid today or whatnot, is that. Doing our same exercise again. On update pure. Red. Red. Blue. Red. Blue. Right. What, what,
[01:20:13]  what colors trip this triple count function? What colors trip this triple count function? I find it funny in virtualization and games, similar beats all competitors in terms of speed
[01:20:27] . engine. Yeah. I mean, if you cheat the benchmark, then you cheat the benchmark. every framework. Every framework can add virtualization. The point isn
[01:20:35] 't to, to reduce the DOM work. It's to show the overhead of the framework doing the same DOM work. So like this is, this is kind of part
[01:20:44]  of the, the problem with benchmarks in general, like. The point isn't to reduce the DOM work. It's to show the overhead of the framework doing the same
[01:20:57]  DOM work. So, like, this is kind of part of the problem with benchmarks in general. Like, everybody can virtualize. Everyone can, yeah. Yeah, so
[01:21:14]  how's the guessing going? Green, blue, green, blue, green, blue, none, red, green, okay, you guys, purple, ooh. No
[01:21:23] , the answer is blue. And the reason the answer is blue is because it's just a function. You called it at the time you're running this, so it is
[01:21:31]  just blue. There's nothing fancy about it. But what it does mean is there is definitely a difference scheduling-wise between using a memo and not using a memo. Right
[01:21:49] ? If I did the same thing in React, again, I mean, it's unsurprising that if I put it in effect, it would just call it a function
[01:21:58]  at that point. But I just want to, this is a bigger difference from a reactivity standpoint. So, as I said, this is just an aside, I
[01:22:09]  just want you to think about this in general, about the meaning of, you know, when something is part of the different parts of the graph, right? The thing
[01:22:19]  is in React, actually, you know what? The React example wouldn't be that. The React example would have to depend on triple count. Sorry. Yeah, I'm
[01:22:31]  wrong. Sorry. It would depend on triple count, which means that it would be green in React because you would have to get that dependency to feed into the use effect
[01:22:40] . So, yeah, it would be green in React. Yeah, but that was actually my whole point I was going to make. Sorry. I got lost there.
[01:22:48]  Right? In React, it's green. In solid, this is an inconsistency. You're beating me to it, Greg. Yeah. If you use both
[01:23:05]  effects, then it'd be purple. Yeah, yeah, yeah, yeah, yeah. No. React would be green. Is what I'm getting at. Because for it
[01:23:18]  to be a dependency of use effect here, you'd have to execute it out here. Like, it would have to be executed during the pure phase, and then the
[01:23:27]  effect would do that. So, React is all green except for just this thing in here. And what I was trying to get at is technically solid, these binding, like
[01:23:37]  the red here isn't, like, during initial render, I'm kind of lying. Because technically, the expression runs during the green here, and the creation of the
[01:23:52]  elements, but the actual insertion happens in the, like, red zone, so to speak. We, like, we, like, memo up, and then we
[01:24:04]  unwind back into insert, like, render effects. So, like, technically, there is, like, a little bit of green, like, a red, like,
[01:24:15]  right there, initially. But when it comes to updates, it's, like, the whole expression, right? So, I'm trying to show, actually, the
[01:24:26]  inconsistency between our model, right, compared to React, which is always the same in terms of execution scheduling, okay? I'd ask the answer to Svel
[01:24:43] te, yeah, I mean, Svelte, um, it's Svelte 5, it's going to be similar to what I'm about to show you,
[01:24:51]  which is the next thing. Older Svelte is kind of, like, I don't even really know. I think Older Svelte was so simple that
[01:25:02] , like, they didn't even really take scheduling into consideration that much. Like, like, everything would just kind of rerun, and then whatever the value was when
[01:25:11]  it reran, like, Oldsvelte was kind of similar to React. So, I wouldn't be surprised, like, if it was all green, or,
[01:25:21]  like, maybe like this. Oldsvelte was more like React. Like, there's no dependency array bit, but you know what I mean? Like, they
[01:25:33]  definitely didn't have this, or this update model part. They were just, like, this, more or less. They might not run all the code again, but,
[01:25:42]  like, so, like, you could skip the state part, but all the expressions, they would basically, like, check if they have to run them again. We
[01:25:53]  all want, okay, okay, so, you're already starting to see the inconsistencies, and the reason I wanted to do that is because I wanted to go,
[01:26:02]  this is what's solved today, right? That's what I was saying. Now, what if we look at the update, and I'm going to use this last example
[01:26:12]  again, because it's more interesting. So, let's label some stuff. Yeah, so, this one is solid update, and then we'll call this one solid
[01:26:32]  update number two. Okay, it's not even number two, it's like solid update with function, okay, doesn't matter. Okay, so, I'm going
[01:26:45]  to take this example again and present, like, solid, the reason this works this way in solid is because we eagerly evaluate all our memos. It's not
[01:26:53]  just initially, but after the fact, like, when we cue them, all the, our computed values onto a stack. So, they always run before the effects, before
[01:27:03]  the render effects, and we get that clear green that always happens. However, if you have a lazy system, right? If you have a lazy system, and so
[01:27:16] , now we're going to call this one lazy signals, and if you want to know frameworks that have implemented lazy signals, it's basically everyone, but who's not solid
[01:27:29]  or SJS at this point. This has been the new trend, when Preact added signals, Angular added signals, when Svelte's adding signals, they all
[01:27:39]  went lazy, because lazy means that you don't have to do the work for the memo unless someone listens to it. Now, in a lot of apps, that doesn't
[01:27:46]  actually matter very much, like you wire the graph, but there are situations where that actually is a benefit. I just never cared about it very much, but the big
[01:27:56]  win is that you don't have to run this, right? But if you naively take lazy signals on the update, and you come back here, let's, let
[01:28:05] 's try color coding again, shall we? Let's get our pen. Well, we know that this is always going to be render. And we know that this is
[01:28:22]  going to be blue, as will this always be blue. What color is this memo? Well, the answer is the memo is actually blue as well, because it's red
[01:28:35]  for the first time. Actually, no, actually, the memo isn't blue. Sorry, I got this wrong. You know what color the memo is? Okay.
[01:28:48]  It's red. Yeah, it's just because that's when you called it. Okay. So, this is a bit of a mind twist, because, from my perspective
[01:29:11] , I mean, you'll see what this has to do with suspense in a minute. But, like, yeah, because it's lazy. When, if you use
[01:29:21]  lazy signals, you don't compute something until you need it. And what I'm getting at is a memo that is right next to it, that is used in effect
[01:29:39]  will be blue. Basically, the order of the execution of this stuff depends on where it's consumed. And more interestingly is there's no, like, guarantees on execution
[01:29:57] . See, the funny thing about, the thing about this model is, if you did all the pure work, and then we're like, hey, I don't want
[01:30:11]  to continue. I'm waiting for something async. You could just stop and not run any of this blue or red stuff. And, you wouldn't care. And
[01:30:25] , if you went here, you know, like, yeah, you wouldn't run this function, but also you couldn't get it. You're just calling this function.
[01:30:32]  But, when you got here, it's already too late to say stop. Don't run any of the red or blue stuff. Because it got run for the first
[01:30:45]  time, and it's red. Not the first time. The very first time it's green. But, my point is, when something changes, count changes, or
[01:30:53]  something, it's not going to run this until it turns red. Yeah, yeah. Triple effect being the count would be blue, yeah. You mean the other way,
[01:31:12]  yeah. If triple count was called down here, it would be red. Yeah, it'd be wherever. The function was just to show, I wanted to show the
[01:31:22]  memo-like behavior before we got into it, so you can understand how it translates, right? So, this is the signal solution that everyone's been pushing, and it
[01:31:33] 's not actually very good from a, like, it's too late. You're already in the queue, sitting there, running, running, you know, these effects,
[01:31:45]  okay? So, okay, I just wanted to kind of establish this, and the reason I want to establish this is because if we go back to the beginning, no
[01:31:57]  matter what I do with React, it's always going to be pure, except for this thing. It's very easy to run everything, and then, and then,
[01:32:07]  you know, schedule this blue thing. React basically has this whole cycle kind of dialed in. Can we get that sort of predictability? Like, solid today is actually
[01:32:19]  very close with fine-grained updates, very close to having that sort of predictability, but it's not perfect. Well, what if you did this? Now
[01:32:36] , I know you guys, no one likes this, but what if we did this? And what if the render effects also did this, essentially? Like, so,
[01:32:59]  basically, there was two halves. So, like, this double count was like this. Right? Now, you're going to tell me that this looks a lot like
[01:33:16]  React. I'm sure. But if you separate the two halves let's, yeah, let's run it. Let's separate the two halves. What do we got
[01:33:40]  here? Well, we already know in all of these initially, we're going to be doing a lot of green, right? But I'm going to run the initial
[01:33:58]  run through, so we're going to call this one split initial, okay? we're going to split initial here. We're going to, what we're going to
[01:34:06]  see is, yeah, obviously green, green, obviously, but not, and this is still lazy. I should, I should emphasize this because this is not the order,
[01:34:21]  sorry, let's, let's actually do the order of how this, I mean, this could run eagerly, but it doesn't have to. It can call
[01:34:23]  this eagerly, and then, so it goes green, it could, yeah, I guess, I guess, yeah, you know, this is a year, otherwise the
[01:34:27]  graph can't be created, and then, it gets the effect, and technically, this is deferred, but it doesn't have to be, it doesn't have to
[01:34:32]  run eagerly, but it doesn't have to, it can call this eagerly, and then, so it goes green, it could, yeah, I guess, I
[01:34:39]  guess, yeah, you know, this is eager, otherwise the graph can't be created, and then, it gets the effect, and technically, this is deferred
[01:34:52] , still, we'll get to that in a second, but it's still queued, like the eager one is, so I'll get to that, during the pure
[01:35:02]  queue, so then we get here, and this is green, it reads, the double count, okay, and maybe we have those little red squigglies here, like
[01:35:13]  I showed before, and then, it reads this, still during the pure phase, which means it reads this, still during the pure phase, and then, finally,
[01:35:23]  we get our blue, after we've rendered everything, right, so, this looks, looks, similar, to, to, I never did this version of the diagram
[01:35:40] , I never did, like, for us, but, if this had been, sorry, this version, I never did this initially, but if this is initially, this
[01:35:48]  would have still been blue, even initially, so the difference between this, and split initially, is that it actually, actually, is the same as reacts behavior, and
[01:36:00]  after the fact, split, split, update, well, it knows the dependencies, so now, you update count, count, actually, queues up, this first
[01:36:19] , and then, that's what you need to do, and then, that's what you need to do, and then, that's what you need to do, and
[01:36:21]  then, that's what you need to do. And then, that's what you need to do, and then, that's what you need to do, and then
[01:36:28] , that's what you need to do, and then, that's what you need to do, and then, that's what you need to do, and then, that
[01:36:30] 's what you need to do. And then, that's what you need to do, and then, that's what you need to do, and then, that's
[01:36:40]  what you need to do, and then, that's what you need to do, and then, that's what you need to do. That's what you need to
[01:36:41]  do, and then, that's what you need to do, and then, that's what you need to do, which means this runs green, and sorry, I already
[01:36:51]  missed this one, this one means this one runs green as well, and then, this runs red, it does the insertion, you know, it's like the code
[01:37:00]  you don't see, and then, this runs blue. And as I said, effectively, this was always like that. So, we've basically, through this process
[01:37:17] , if you noticed, there are the, we're looking at the same picture between update and split. It's not quite the same. This one just does way less work
[01:37:28]  on update than initially, but the scheduling guarantees are actually the same, and they're the same as React, right? If you pass signal directly to DOM parts and had
[01:37:44]  a signal, then you don't need the split tracking from the effect. So you're saying if, like, every, only if it was compiler. The important part
[01:38:01]  isn't the auto-tracking. The important part is when the code actually runs from a scheduling thing. This has nothing to do with auto-tracking, right?
[01:38:09]  Like, it's, like, unless the compiler was, like, looking for it. The important part is that the front bit, this expression, runs separate from the
[01:38:20]  thing that actually does the thing. This isn't about tracking. Yes, this is tracking scope. This is a non-tracking scope, but that doesn't,
[01:38:27]  you don't split it because of tracking. You split it because you want one to render, one to execute during one point and the other stuff to execute afterwards. So
[01:38:43]  here's the thing. Dependency can be dynamic. There is one difference between this and React. You can put conditionals in our expressions, right? This is
[01:38:57]  not just a dependency array. Every time it ruts, it can actually change what it depends on. So any static analysis, it's a problem that Svelte had
[01:39:08]  and even Marco and why it went to runtime to a degree. Like, compiler-based is a good optimization, but it can't, it's not as dynamic. There
[01:39:15] 's a reason why, currently, runtime-based reactivity frameworks are faster than compiler-based. It's because they, like, they technically the compiler should be faster
[01:39:25] , but the handling of dynamicism, um, means that like whole categories of things over-execute where they don't need to. This is not, again,
[01:39:38]  this is one of those places where you don't know which path it's going to take ahead of time. It's kind of like the routing problem. To be sure,
[01:39:48]  this is an R-translator. You know, the thing is Solid, this is an, a reveal that Solid's design decisions, even though they weren't
[01:39:56]  as clean, always were like React when it comes to the thoughts on scheduling. And why lazy is actually at odds with that thinking. The reason Solid has concurrent rendering, the
[01:40:10]  reason Solid can do suspense and transitions decently was we ignored cases like this a little bit. You know, like where the, you know, like where the function and
[01:40:22]  we're like, eh, and you know, some loopholes around effects. Like if this was, you know, but otherwise we're like 95% React when it
[01:40:31]  came to scheduling standpoint. The difference between solid and React is that the dependency, like, or not even solid yet. But like this, this thing I'm talking about
[01:40:43]  with the split is the dependencies can be dynamic. It's like you have one more dimension. It's like, I don't know. You guys know calculus. It
[01:40:50] 's like, it's like, it's like React is this, like gives you like this one view of how things work. Like, uh, I don't know
[01:41:03] , like, uh, how do I put this? Like, it's like the relationship between velocity and acceleration. You know, like we are one step back where like
[01:41:22] , we can dinette, like signals are just like adding this, like, I don't know what to call it. You guys technical it's like, it's
[01:41:31]  like when you step through that kind of, um, difference. Like when you're going between like velocity and acceleration, like that kind of dimension, it's not a dimension
[01:41:41]  though, like a spatial dimension. It's like, we're basically approaching the problem by constructing reacts scheduler dynamically at runtime. It's like that extra level degree of
[01:41:59]  control. React to the projection salt. Maybe, maybe that's it. Yeah. Yeah. What's gained from a single generation from around the consistent schedule? Yes. Thank
[01:42:11]  you. Now see we're, we're following. This is, this, this is why I started here. Right. I'm a, I think react has the best
[01:42:19] , one of the best approaches, thoughts to like async model. Right. Right. Yeah. So like, in a sense, what makes solid feel so powerful compared
[01:42:32]  to react is that we have the ability to like have that extra bit of control. React is like when you have the equations because you know that, you know, how to
[01:42:43]  calculate acceleration or velocity, but you don't have the means to show that they're a projection of the other one that, you know, like it's just derived.
[01:42:52]  You know, our derivative of it, right? Like solid gives you the control, like the, gives you the syntax, gives you the means to, to basically create that
[01:43:03] , you know, derivation. So yeah. Yeah. Yeah. Why, why, why am I getting here? Um, and why do I care about scheduling?
[01:43:09]  Well, it depends on how you want to handle concurrency. right. And how do you want to handle async? Yeah. Yeah. Why, why am I
[01:43:12]  getting here? Um, and why do I care about scheduling? Well, it depends on how you want to handle concurrency. Right. And how do you want to
[01:43:27]  handle async? Because the, the reason for all of this stuff is kind of back down to an article I wrote a while ago. Um, I'll, I'll
[01:43:41]  share this one. I also have some new updated things, but it's like, what did I, what was this article? Um, why all the suspense? Yeah
[01:43:56] . Yeah. This one, I'm going to drop this one in here. Oh, weird. Sorry. Okay. That link won't work. Cause it has a
[01:44:14] , instead of hitting the enter key, I hit the, hit the, there's like an apostrophe or something at the end of it. Okay. Let's try that
[01:44:21]  again. Um, I don't know that concurrent rendering has helped them a ton, honestly, but there's, there's something nice about async models that makes sense.
[01:44:40]  And if you start kind of thinking in this sort of derived calculus sort of kind of way, you start seeing, and like, in terms of projections, you start seeing
[01:44:50]  like signals are like almost something very similar to the react mentality, but expressed as primitives that have nothing. Like it separates the cons, like it gets rid of like the
[01:45:01] , like a lot of the rendering aspects of it, you know, like component view, higher quote thing. It's just the guarantees. And in a sense, if
[01:45:10]  you could approach async as if signals were just a pro like that system was just a projection of, of, of the async model, then you, you know,
[01:45:23]  you could perhaps picture something where like all the pieces just fit seamlessly. Cause they think it's a hard topic. Right. Um, it's, it's way easier
[01:45:34]  to talk about consistency and user interfaces. This is where we always talk about stuff. You know, when you update something, it doesn't reflect properly in the other side.
[01:45:41]  the other side. And I, I talk a bit about, you know, this before, but what I wanted to get at is like, the, the, the
[01:46:00] , this classic problem of like having something fundamentally derived async. Do you know what I mean? Like you have a count. Let's pretend that you needed the fetch
[01:46:12]  to calculate the double count on the server. And then you update it. There's going to be that time period when you initially load it to the counts, the initial value
[01:46:20] , and you have not calculated the, the ace, the derived thing. And then it'll come in. And then there's a point where you update it. And
[01:46:28]  you'll see again, the updated value with the old value until finally the new value comes in. And it's very easy to do this in any framework. You just use
[01:46:38]  effect and feed it back into the state tree. But the question is, if you, what, if you could treat async as if it's part of the graph,
[01:46:50]  right? Like it's part of the derived graph, right? That that's, that's essentially the question here. Could we make other guarantees? Right? The problem
[01:47:00]  is that there's only really, you can't get the async stuff any sooner than you can get the async stuff. Right? So there's only three options here
[01:47:11] . When you're in one of these intermediate states, bail out, as I call it, like hide what's going on. They put it behind a fallback,
[01:47:20]  basically be like, I'm never going to show it when it's inconsistent. I'm just going to show, you know, it, when it settles, you could
[01:47:28]  stay in the past. You can be like, I'm going to keep on showing the previous, like the one and two all the way until 20 and 40 both come.
[01:47:37]  Um, or you can be like, do an approximation in the client. Let's say you knew that times two is such a bad example, but like, like you
[01:47:51] , if you could approximate it, maybe you can like show the thing before it actually loads. And then when it show the real thing, when it comes in, right?
[01:47:57]  Obviously with times two, it's pretty easy to approximate it. You just times it by two, but these are basically the only three options you have for async.
[01:48:07]  And this kind of brings us to our topic of suspense today because suspense is involved in all of these, but the key part about it is that everyone associates it with is the
[01:48:19]  bailout. right. But it's not the whole story. So, yeah, I, I mean, I talked about this article a while ago, but yeah,
[01:48:40]  don't work. I'm going to also grab some HackMDs while I'm at it just because I haven't for a while on the, just get myself
[01:48:49]  ready here. Cause I think it's, uh, got it. It showed you how long I've been in here, been here. Yeah. Let's get this.
[01:49:00]  Let, let, let, let, let, let me, uh, get my two factor authentication going here. Sorry guys for the delay. All right. All right
[01:49:12] . Eight. All right. All right. All right. All right. Let's continue on. I think the first thing we have to kind of acknowledge in this conversation
[01:49:36]  is brainworks don't need to handle this necessarily. There's always solutions outside of it, but it's pretty compelling to look at this from a a first principle standpoint
[01:49:49]  and then be like, how do I, you know, implement this in a way that's like nice or logical for people to use. Right. Cause the benefit from a
[01:50:00]  first principles, um, standpoint is that like in theory, you can present a completely consistent, perfect model in reality that might fall apart a bit. GitHub forgot who I
[01:50:16]  was. Yeah. Anyway. Um, I'll get to my hack MDS as relevant, uh, when we get there, but the, the, the, the thing
[01:50:28]  that I, it's funny cause I didn't actually write about this part and I probably should have. that. Um, let me see if I can. Is this
[01:50:42]  the, no, it's not this one. Sorry. I just need to find the right one. Um. Yeah. Okay. Okay. This is the right one
[01:50:54] . Okay. I'm going to drop this in here for anyone who cares to read, but we'll talk a bit to this while we continue on here. Okay.
[01:51:06]  Um, I'm trying to think of how I want to handle the next piece. Sorry. Just give me two seconds as I kind of noodle on that. It's
[01:51:26]  just, we've kind of talked about, we've danced around pieces of this before on the stream. So I'm trying to decide like how basic or like how far
[01:51:43]  back I want to pull this is like, I think, and it's one of the challenges that we've faced recently is like, people don't know why suspense or if
[01:51:56]  they do meant suspense in a lot of frameworks, it's like not particularly interesting. Right. Cause hiding stuff until it's ready. Isn't that hard of a mechanism to
[01:52:05]  make. Right. you basically have some way of detecting the asynchronous and react, they throw promises and other frameworks. They just like register that they got a promise, you
[01:52:19]  know, like view setup function and then, or like await components in like Svelte. And then when it finishes awaiting promise, then, then you show the, the
[01:52:34] , you know, while it's not, you know, visible. You show like a fallback. You show like a fallback. And then when it's finished
[01:52:38] , you show the updated rendered thing. But this whole topic is a lot harder than just hiding stuff because hiding stuff is pretty jarring. Right. Like, let me go
[01:52:52]  here. Go to the tutorial. Go to the tutorial. Right. I mean, it's fine. Let me see if. People are used to this, right?
[01:53:11]  When you've switched between pages, you see loading, you see loading, you see loading, but like picture if it was something that you want to update that like wasn't
[01:53:17]  so substantial. Like you were flipping through like a cart of like the same type of things, like a, you know, a bunch of, I don't know,
[01:53:28]  maybe user profiles. You're going one, two, three, like depending on where this is, it's a lot that always just fall back to loading indicators like this
[01:53:40] . I think a lot of people would be fine with it, but the tricky part with, with a lot of these mechanisms are the second you have something async in
[01:53:51]  flight, it's game on. Right. Like you, it has no choice, but to, you know, default to this kind of hiding loading indicator. And the
[01:54:05]  truth of the matter is I would argue that, and I did hear that all of these three options are equally viable, like things that you would be interested in potentially doing sometimes
[01:54:18] . Right. Sure. You want to bail out on initial load, but once you've loaded some content, maybe you want to stay in the past and just apply the updates
[01:54:26]  as they come in. You know, there's actually a fourth option that I don't actually have here, which is to not. Right. Sometimes you want to,
[01:54:37]  you want to tear. Maybe you have a type ahead where you have an input and you want to be able to have the input update pretty quickly, but then the search results
[01:54:45]  are async and they can come in, you know, as waterfall. Right. Right. These are, these are situations where we're essentially like, you know,
[01:55:04]  it's difficult to just have a single solution, handle all of these problems. And a lot of the design around things like suspense are trying to make it so that it is
[01:55:13]  possible to opt in and opt out of these behaviors. Okay. So like the simplest example I can think of here was I wrote post in this article, which is like
[01:55:24] , pretend you have two pieces of data that you show on the page, like a user name or in the street address. If you're able to edit either of these,
[01:55:31]  you, you know, independently, you wouldn't care. Like if you had two inputs and two pieces of data, you know, separate parts of the page doesn't
[01:55:40]  matter. And you were able to update one and have it update right away independently of, you know, somewhere else on the page updating, you know, obviously you don't
[01:55:50]  really care that these update independently. However, maybe if you had a process that involves say like a form where you updated both of them together, like this is a user
[01:56:00]  and the street they live on. You might not expect these to update separately. Like if you click save, you might expect the update for both of these to come in at
[01:56:10]  the same time. Now, keep in mind, I'm talking about sync right now, no async, just like a simple example. So because it's sync,
[01:56:18]  there's no delay anyway. So they would probably update at the same time. But like conceptually, I just want to kind of establish this idea that it's possible
[01:56:32]  that depending on the action you're taking, you might have different expectations on what updates come in together or not. Where we hit this and sync all the time is actually in
[01:56:49]  the reactive graph, right? So like if there was cross dependencies downstream, you don't want to do independent calculations multiple times because you process things in the wrong order.
[01:57:00]  It's the reason we have signals, right? It's to make sure that like, if, you know, something like, I don't know why, like if the
[01:57:07]  name, the way you displayed the name changed based on the person's address, you wouldn't want to like process the name first one way. And then realize that the address
[01:57:16]  is also changed and then have to process the name again. Sure, it's synchronous, so it's all going to kind of come up really quickly. But there is
[01:57:23]  a cost of processing and you want to make sure that every node executes once, right? So there is a consideration even synchronously about things that are conceptually connected versus
[01:57:36]  conceptually separate. All right, luckily for us on sync systems, it's not hard to solve because literally like that's why react exists. That's why solid exists
[01:57:46] . We have these rendering libraries to make sure that they're, you know, we're not going to get these weird mismatches where something, you know, see something
[01:57:54]  that's out of date mixed with something that's up, you know, updated. And then like either not get the final correct solution or, you know, run things
[01:58:04]  more times than they need to. Right. So the funny thing though, is if I took that same example and brought it back into async, you know, where
[01:58:21]  we have these two pieces of data. Right. Let's just pretend for the sake of this. Um, and I'm just using my article here as kind of the
[01:58:31]  basis here. Pretend that we had a stylized showing of like the, the person's username. Maybe we like made a graphic for their, for their, the first
[01:58:39]  letter of their name. That was like in some special stylized text. Right. So whenever we change their name, we actually have to go generate an image that, so
[01:58:49]  we can show it. Right. So again, if the address and the name have nothing to do with each other conceptually from a UI process standpoint, how like,
[01:59:05]  maybe it's not the user's address. Maybe it's a different address over here and a user thing over here. I don't know why your UI would be like that
[01:59:11] , but I'm just saying then you'd have no problem with these things updating separately. Right. But we do have to consider, you know, the case, I guess
[01:59:21] , even before we consider the case. Even before we consider the case of like them together. We have to consider the case of. If I update the name. Say
[01:59:30]  it starts as John and changes to Jacob. See, those both start with J. So maybe stylized. Let's pretend just a stylized version of their name as an
[01:59:40]  image. When we go and click save, we could show Jacob immediately. Right. Because we know what they've changed to Jacob, but there's no way we will
[01:59:50]  have that stylized image for Jacob right away. Right. So, you know, this is where our options are show Jacob's name immediately while still showing John's image
[02:00:00]  until the new one comes in. Show John in both places until the image for Jacob comes in. Show some kind of like loading placeholder for the image and show Jacob
[02:00:12] 's name right away. And then when it comes in, show, show the image for Jacob or approximate it, which is kind of like optimistic update. Show Jacob's
[02:00:24]  text and then show the don't show an image, but where the images maybe show like text of Jacob. That's sort of in the same style, but not fully rendered
[02:00:34] . But you can kind of see that there is really four options here. Yeah, I mean, that's why not show the old image with a loading indicator. That's
[02:00:46]  that's that's hold. That's option two. Right. I'm not saying you don't necessarily need an affordance, but that I mean, why not actually
[02:00:58]  showing that loading indicator may or may not be difficult. I'll get to that in a second, but that is a variation on hold essentially, right? Like you show both
[02:01:08]  John until then the image comes in, I guess. Oh, are you talking about tearing show the old image with a loading indicator? Yeah, I guess the other one is
[02:01:17] , I guess I see what you're saying. I see what you're saying. You're saying show Jacob, but then show the old image with the loading indicators.
[02:01:26]  Um, I would consider that then that's not hold. That's essentially placeholder or approximate. It's three or four. Yeah. Show the old thing. Show
[02:01:37]  the old thing. Yeah. So that, that that's basically three or four because you're not, I guess you're tearing. Yeah. So you're saying tearing plus
[02:01:47]  an additional loading indicator. Okay. Maybe that is just one. Yeah. Yeah. Yeah. I'm going to, I'm going to consider that one. That one
[02:02:00] 's not bad. There's a lot of places. That's a perfect example of where, where, you know, you might say tearing is acceptable. Right. Right.
[02:02:07]  Like places that I, sometimes when the loading affordance tearing is fine. Places that are really awkward for tearing are like, let's see if I can find it
[02:02:22] . Movies app. What was it? Taste movies app. I can't even, or is it taste JS? Was that it? This demo, the angular.
[02:02:51]  Of course it's down. Well, that was short lived. Sorry. I had this in my pocket as my example of tearing and it's in, I have,
[02:02:58]  but I haven't been here for a while. None of the other frameworks actually tear in here. I don't think. Um, but the, the angular. Okay.
[02:03:09]  There it is. See, when I change the categories here, I go from action. This is an example of tearing, right? I go to adventure. It's going
[02:03:17]  to show adventure and then it's going to load the data. Do comedy. It's funny. Cause it's already been preloaded. So I'm not going
[02:03:23]  to see it. Let's go to history. Right. Yeah. I mean, that's the thing. There isn't actually a problem with any of these is what I
[02:03:30] 'm getting at. You might actually want them for different types of situations. Right. You might say tearing is fine. You might say, I want to hold. Right
[02:03:35] . Um, I, I love hold with loading indicators. One of my favorite ones. Uh, like, uh, yeah. Uh, yeah. Yeah. I mean
[02:03:41] , that's the thing. There isn't actually a problem with any of these is what I'm getting at. You might actually want them for different types of situations. Right
[02:03:51] . You might say tearing is fine. You might say, I want to hold. Right. Um, I, I love hold with loading indicator. It's one of
[02:04:01]  my favorite ones. Uh, like, uh, yeah. Like, I think, I wonder if I can actually see holding with a, with a loading indicator in here.
[02:04:14]  I think knox does it too. If I go to here. No. Um, I'm trying to see, see if I, I don't think anyone actually
[02:04:34] , the other demos don't do the category thing the same way. that's hold with that's hold with the loading indicator. I think you see that. Yeah.
[02:04:57]  See that's holding with the loading indicator. The, as soon as I click on it, the loading indicator goes and then, um, then it comes in. Right.
[02:05:07]  You notice how there's no loading on the actual thing. Right. And it holds on the current page. Yeah. Yeah. That's a good example. Um,
[02:05:18]  Yeah. Yeah. Oh yeah. Holding by itself is completely unresponsive. Yeah. Yeah. Yeah. Yeah. Yeah. You want, you want, you want it
[02:05:37] . Holding needs to have a loading importance. Okay. Keep on going. Yeah. Yeah. See, this is this, this example shows holding with an affordance of
[02:05:56]  baiting out the current text while it's waiting. It's still on the same page, but then it fades out the current text while it's holding. If it
[02:06:04] 's too slow. If it's fast, it does it fast. But if it's slow, you'll see, you'll see it fade out the text while it,
[02:06:10]  while it holds. Anyways. Yeah. Um, So where was I going? Oh yeah. But yeah. What I was trying to say is there isn't a clear
[02:06:19]  answer for every situation. Like if there's a lot of input changing often quickly, you might want to tear like a live search box. If you're coordinating many parts
[02:06:28]  of large portions of UI, you probably want to hold dropping to placeholders. When you've already have content is jarring and having things flying over, over the place is
[02:06:36]  disorienting. Placeholders are great. You know, when it's like initial load, when you were like switching to something and you're like context switching, you know
[02:06:45] , or, you know, it's going to take a long time. And then approximating isn't always possible. It's good for mutations like optimistic mutations, but you
[02:06:53]  can't always do it. Right. So. It's kind of like this interesting question, right? Because where I'm getting at is most synchronous frameworks provide synchronous guarantees
[02:07:06] . But then the second you go in async, you tear and trying to actually make things behave in a different manner is actually hard. If you, if you're terror
[02:07:19]  by default, the way to implement holding involves is challenging, right? Um, placeholders is not too bad. We talked about that. Right. But like, you
[02:07:31]  can see this even in a situation like, um, like our movies app, but like our image example is good too. Right. Because like, if we, if
[02:07:47]  we, if we are changing the state, like, I mean, you can, I don't know if I should just draw this in Excalibur, or like
[02:07:54]  we, if we need a visual aid for this, but like, if you have text. Um, right. Right. Right. Right. And then you had.
[02:08:06]  I don't know, over here. John, you know, we'll call this our image. I'll make it. Red. I don't really care. You know
[02:08:15] . And. Um, actually, this isn't good to see visually. I'm like, I'm, it's, it's actually easier to see with code,
[02:08:27]  like, because you're like, how do you get this to hold for you? In this scenario? Because, I mean, let's see if I did actually put code
[02:08:44]  in here. Yeah. I'm just going to make up some syntax here, you guys don't have to worry about it too much. But. Yeah, I think
[02:09:01]  I'm done with this. Okay. Pretend. This is you rendering these things together. And then you have a signal, you know, some state for the name
[02:09:15] , some state for the address. And some state that generates, asyncly generates the image URL, where you're going to load the image from based on that name.
[02:09:26]  Okay. Right. How would you hold in this situation? Because if someone goes set name to Jacob, right? Right. The second you do that. Well, you
[02:09:44]  know, you know what ends up happening, you end up running this effect with the updated name, the name URL has not had a chance to think so it returns probably the
[02:09:53]  previous value. Like, how do you hold name so that it doesn't get up because you need name to trigger to generate the new image. But. Like, you
[02:10:06]  need you need name. Like, what if I have a second effect over here, that's just create effect console dot log name. Like, how could I ever stop
[02:10:23]  this from running. Do I even want to like. If I actually update name. the other thing? Like, what if I have a second effect? Like, what
[02:10:36]  if I have a second effect? Like, what if I have a second effect? Like, what if I have a second effect? Like, what if I have a second
[02:10:40]  effect? Like, what if I have a second effect? Like, what if I have a second effect? Like, what if I have a second effect? Like, what
[02:10:43]  if I have a second effect? Like, what if I have a second effect? Like, what if I have a second effect? Like, what if I have a second
[02:10:47]  effect? Like, what if I have a second effect? Like, what if I have a second effect? Like, what if I have a second effect? Like,
[02:10:50]  what if I have a second effect? Like, what if I have a second effect? Like, what if I have a second effect? Like, what if I have a
[02:10:53]  second effect? Like, what if I have a second effect? Like, what if I have a second effect? Like, what if I have a third effect? Like,
[02:10:57]  what if I have a second effect? Like, what if I have a second effect? Like, what if I have a second effect? Like, what if I have a
[02:11:00]  second effect? Like, what if I have a second effect? Like, what if I have a second effect? Like, what if I have a second effect? Like,
[02:11:05]  what if I have a second effect? Like, like, losing some viewers here, it's fine. But, like, just think about, you have to update something
[02:11:28]  to trigger something. But that trigger is going to affect other things. Now, you could say, don't run any of the effects as a way of holding. But
[02:11:38]  how do you show the loading indicator if you don't run any effects? Right. I mean, we can make excuses for ourselves, but these are also trivial examples. I
[02:11:57] 'm picturing examples where this is non-trivial, right? Like, there is, there is something very awkward here, right? Like, we can obviously
[02:12:06] , we can obviously, like, use suspense and be like, don't show it out of state. So update the name right away. This is tearing. But trying to
[02:12:18]  actually implement holding, do you know what the answer is? This is, this is how you implement holding. Essentially. I'm going to assume that this is fixed
[02:12:43] , right? I'm going to assume that this is fixed, right? I think, is this right? Yeah, yeah, yeah. This is, this is,
[02:13:07]  this is how you do it. Right? And then you set name to Jacob. And then maybe, I mean, let's do this. I'm trying to think
[02:13:28]  of like, I'm just making this up right now, because it's like, I'm picturing what the system would be like. But you'd almost have to
[02:13:38]  be like, whenever name, image URL changes that display name, to name, or something like, but you maybe like, on track name or something. Okay. Like
[02:14:02] , this is essentially what you'd have to do if you wanted to implement holding. Right? You, you, you essentially have to create a second signal to show that and
[02:14:16]  have that one update independently of the one that triggers the fork of the stuff. And then when it finishes, then update the, the state that you're displaying to,
[02:14:32]  to match it. Right. But I mean, it's not even enough to do that. Like, do you understand? Like this is such a simple case because it
[02:14:43] 's flat and you know exactly, but every possible signal or derivation along that path is going to basically, you're going to have to make your own copy of it.
[02:14:56]  I guess it's source state. So it's all the source states that could be impacted along the line into async data would have to be copied. Yeah. And
[02:15:04]  people do this all the time, to be fair. I mean, I would like to compute it, but it's hard. It needs to synchronize with, with this
[02:15:07] . Right. Which is the only reason I used an effect. Like technically. Yeah. Okay. Yeah. Yeah. Okay. Yeah. Yeah. Okay. Yeah.
[02:15:17]  Can we write this as an, as a memo? Um, it's like, like maybe something like this would work and then make this const display name. Yeah
[02:15:34] , I like that better. And then we just have to set the initial value to John. Or something like that. Something like this. And then this actually has to
[02:16:11]  get hoisted above here. So the reference works. Okay. Slightly better. Same problem though. Some parts they have might want the hell version. Some might want
[02:16:29]  the fresh data. Yeah. Yeah. Yeah. But like, this is, this is like literally dealing with one async thing. Picture if you had multiple async things
[02:16:43] . Picture if they were hierarchical, how much forking of state you would have to do. I mean, you could do nested create effect. Sure. But
[02:16:55]  like when I'm kind of like, does that simplify writing the logic at all here? Maybe, but it doesn't remove the need for the state. I don't
[02:17:08]  think, and like, like some things are nested. Sometimes they're two different places in the display. Like, like this, this, this is my fictional create render
[02:17:15]  effect of you displaying something on the screen. Right? Like these are, I use console logs here, but like, these are basically render effects. Like streams and r
[02:17:24] x.js solve this. Nope. I mean, but you still in the end have to deal with the synchronization of state, which rx.js does not solve
[02:17:35]  through, right? Like it's, it's good at handling transforms, but like at a certain point you're, if, if you want to, like, I just
[02:17:47]  wanted to kind of put it out there. What if you actually tried to, to get this holding behavior yourself? This is the most basic way of doing it. Right
[02:17:59] ? Um, if I didn't use create async, it actually might even be easier. Like that's why derivations look good. But if we use create effect,
[02:18:08]  we could also, like if we were using create effect, the generator image, we could set both, um, signals at the same time. Right? If we weren't
[02:18:16]  using derivation, like we could be like. We could be like, we could be like generate image URL and get get image URL. And then go set image that
[02:18:26]  set. Um, display name that that's, that's generally how you do it. They, you, you, I generally don't recommend doing rights inside something that is
[02:18:41]  quote pure. But if you were using effects to do the fetching, you would just have two signals that you'd set. Right. And choose a name. But
[02:18:53]  I'm saying this is like the simplest case. Right. Um, so to speak. Like, and I, I, I would, I was trying to suggest is
[02:19:03]  what if what I started with just work that way. Right. Without you having to manually duplicate the state. Right. Like this is, this is like one piece of
[02:19:23]  state that you'd have to deep duplicate. What if there was dozens? Like keeping display versions of everything. Like this, this, this is like a mechanical problem.
[02:19:35]  Like this is not your intention being displayed on the app. This is like mechanically solving for stuff, using signals as counters to keep track of references, like that level of
[02:19:44]  solution. What's great about signals and stuff is that creating these kinds of solutions allow is easier to do because it doesn't happen to the react render cycle, which is incredibly
[02:19:54]  inefficient. If you're just doing all these crazy little state rights, but it's not the ideal place you want to be ideally. You want to just be like,
[02:20:02]  look, here's my data that's derived from this. And this is what I want to display consistently. Right. Create transaction. Yeah, we're getting there.
[02:20:13]  Yeah. Yeah. Yeah. Yeah. So what do I have here return our example, which is already displaying the name John and an image of it. If we independently update
[02:20:38]  the name or address, it would be fine for those changes to come in independently. Yes. But we'd expect the case of the name to show John until we can
[02:20:45]  display Jacob. You know, if we're, if we're, if we're trying to hold, we can do that. We can show an affordance for loading you
[02:20:51] , which we talked about. If we change the name and change the address, we accept that the address change appeared before the name change. If they did not feel connected processes
[02:21:03] . Yeah. No more than a ticking clock. Yeah. I mean, I think you start seeing the problem here is because if you actually had to block all the effects
[02:21:20] , you know, like my previous example. Yeah. Okay. Sorry. I I've jumped around a bit. I'll help clarify. This is how you would manually
[02:21:28]  implement it. Right? What I originally wrote. about. Yeah. Okay. Sorry. I'm just going to continue here. All I was trying to suggest is
[02:21:45]  that in the, in this part here is that if the address was related to the name and you've clicked save at the same time, you might expect them all to come
[02:21:55]  in at the same time. again, I was trying to basically my assumption here is it's the process that defines the dependence between things, not necessarily the dependency graph or
[02:22:08] . Um, yeah, not necessarily the dependency graph because obviously like if you have multiple effects, obviously a single effect that's showing something inconsistent can't be allowed to show it
[02:22:21] . But if for any group of changes that you expect to come together, if any of the effects show, you're going to potentially have tearing, which is what I
[02:22:32]  was showing before. And if you didn't want tearing, then that grouping isn't, it isn't enough to only look at the dependencies or which effects put stuff together.
[02:22:42]  You, you basically would have to look at every downstream change from that single update process. I would be having to read a signal in an effects scope, just to tell
[02:22:56]  it the need to wait for it rather than duplicating states. Yeah, but it's not, you understand it's not, it's not without duplication. How
[02:23:07]  do you show, show something and be calculating the next thing at the same time? Right. I mean, that that's kind of what the problem is, right? Because
[02:23:21]  if you, if you don't. Yeah. Yeah. Right. Cause like, like consider. Yeah. Sorry. This is what I was trying to show this example
[02:23:40] . Consider if these two things are independent, like the name, the address had nothing to do each other with this code, this code example. Okay. Now, if
[02:23:46]  someone set name, we're back to only having a single thing. If someone set name and it's off, you know, generating the name and then someone sets address.
[02:23:56]  If these were two separate things, you'd be fine having the console log. Kind of go like this, like John with the updated address, still showing John's current
[02:24:12]  user URL. And then when Jacob comes in, show Jacob, new address and Jacob and Jacob's URL. So you still kind of want the address to update. Even though
[02:24:25]  you're waiting on the name. Right. And even though they're in the same effect. Like you, you might want that to happen. Cause actually I, I
[02:24:44]  I'm hoping people are following. I understand this is like complicated. I'm just trying to suggest that the grouping of effects might happen automatically because of where something is in the
[02:24:55]  JSX or, you know, some kind of other consequence. Consequence, but things that update together separately might not at all be related to how you actually want
[02:25:04]  to display or do side effects on them. And if we simply just block all the effects to get our holding. Then nothing updates. Right. Obviously it's in the same
[02:25:19]  effect. It's obvious that it doesn't update, but nothing updates. Nothing updates. If we block all effects. Yeah. I mean, I keep on going on
[02:25:40]  here. I don't know how deep I want to get into this, but like I started talking about hierarchical. Cause we've established that dependencies aren't sufficient.
[02:25:46]  It's process. I was thinking like, what about children? Like, you know, tab A and tab B. Right. It's it's, you have the same
[02:25:54]  problem. Again, you're showing tab A, you click on tab B. You got to still show tab A while B's loading if you want to, you know
[02:26:06] , hold. And the problem is if there's something updating on tab A, you can't just unmount it. Even if you, you can't shut it off.
[02:26:16]  And even in memory, do you know what I mean? Like if, if you've ever seen something like, uh, like, uh, solids, uh, create
[02:26:25]  memo or something. If you create something nested, like a nested effect, the second that the outer effect runs, the internal effect is going to get thrown away.
[02:26:33]  Maybe you haven't rendered the new thing in the Dom yet, but you've released the memory because now you're taking the other branch. You're taking the other condition
[02:26:45]  and, but in, in this world where we're trying to hold, it's quite possible that things need to still update, even though they're below the point at which
[02:26:57]  we've forked. Trying to do that manually this way is basically impossible. It's not, you, you have to hoist all the state data up to where
[02:27:10]  the decision point is, like where the route is, where the tab switches in order to do it. You maybe use context or something, but the problem is the second you
[02:27:19] , like it, the second you switch to the new page, you have to not any decision. Like you have to not release the current page. It's not enough
[02:27:32]  just not to show it, but you actually have to not release it, which means that it, it can't be running the same code path. Every control flow fork decision
[02:27:45]  has to keep both copies of it. If you want to, if you want to, if you want it to stay live. Right? Like, you know, I
[02:27:59]  trying to think of how to show this, but like create memo. the simplest version count bigger tab equals. A. A. Otherwise B. B. Okay.
[02:28:25]  Simple as I can, you know, we can make this example when tab changes. Between A and B. Like you could say visible tab, you know, we could play
[02:28:38]  that game, but you need to duplicate all the logic because the, what if the fetching happens or the async thing happens below the fold? Right? You have
[02:28:48]  to hoist it up, I guess, is the other possibility because it's not going to run tab B until you change this. And the second you change this, you
[02:29:00]  are releasing tab. A. Right? Because when you rerun the memo, this gets garbage collected. Right? A. Yes. Yes. This is where I'm
[02:29:20]  trying to get at here. So, because we talk, we always talk about suspense, but it's important to understand that suspense is only one of the three modes. Sus
[02:29:28] pense impacts the other stuff with the transitions. I think it's important to understand that like trying to, you basically have two options. You either hoist all the
[02:29:41]  state up, like when you have to deal with it hierarchically, or you come up with a means where every decision points aware of the fact that it can hold both decisions
[02:29:53] . This is, this is kind of beyond what I think, you know, between duplicating states and stuff that end users can do. You can build your architecture
[02:30:01]  that way. Um, definitely. But you start seeing that like, if you've ever been down this road. I mean, I think you just give up on holding being
[02:30:09]  an option. Generally speaking. Right? You, you accept a certain amount of tearing and maybe that is the wise thing to do. But like, it is not easy
[02:30:21]  to avoid, to do holding without having a framework known mechanism in place. Okay. Right. So all I'm trying to get to with, with this part of the discussion
[02:30:42]  here is that like, this is why there are transitions or transitions. Or whatever in, in, in, in the suspense frameworks is because once you commit to being consistent
[02:30:57] , while suspense is a great tool to hide stuff. It's too jarring. Most people want suspense initially to, so that they can like show some placeholders, but
[02:31:09]  they don't want it to keep on triggering over and over again when stuff changes. But if you want to keep that consistency, you're going to either have to have
[02:31:18]  controlled tearing or you're going to have to hold and holding is very hard to do hierarchically, which is a large part of the design decisions behind suspense. Okay. Anyways
[02:31:29] , let's continue here. Let's see what, what did I end on this? Yeah. I was just saying, yeah. I think my last point was
[02:31:55] , I don't even know if, is there any interest in this part of the topic? I was, it's just that this is a big ask. I'm
[02:32:05] , I'm recognizing from, for people because my, my last real, this understanding with this model kind of came in is that if transactions are essential as a way of doing
[02:32:16]  it, it's awkward that you'd have to wrap every setter with a transaction. If you didn't want it to fall back, you know, if you didn
[02:32:24] 't want it, if you wanted, so like, could, is there a way we can have implicit transactions, but because of the way that I was telling you, everything
[02:32:34] 's tied to process. It's hard to actually have implicit transaction. It's kind of like a decision you make by the actions that you do in your application, right
[02:32:43] ? Whether things are connected together or not defines whether it's a trans, a trans would need a transaction or transition. It's not the grouping of effects that decides that,
[02:32:53]  or the dependency graph. It's actually the processes you do in your app. So yeah, sorry. What was I, I, I just want to read my conclusion
[02:33:13] . It's nearly impossible to automate transactional boundaries. There's tension between responsiveness, especially if inputs and this desires to have everything apply at once. Yeah. That's
[02:33:20]  the other thing. If there's there, there's times you need tearing. So, you know, you want to be able to, you know, to not freeze
[02:33:30]  your input because it's has some async dependency downstream. What, what things go together goes beyond dependencies. It probably needs to be explicit. Concurrency seems unavoid
[02:33:39] able. It'd be great to keep things simple, but tearing is difficult to avoid and blocking is untenable. It's hard to avoid. in many situations because both
[02:33:45]  of those facts, it seems like we're stuck on explicit transaction model if we want it to have tools in this area. Okay, that was my conclusion here. And that
[02:33:55] 's essentially like where like React sits, right? How I got here from when I was talking about scheduling is that in order to do transactions, you need to be able to
[02:34:13]  pause or basically run the pure part of calculations multiple times without doing any side effects, right? If you gotta be able to like test it, you gotta be able to
[02:34:24]  run the data, hit the async, pause it, and be able to resolve all that stuff without the side effects impacting. And you can't do that if your rendering
[02:34:34]  is all freaking weaved together happening at certain, that's a good example, but like happening at random times in the cycle, you know, you get this far and
[02:34:46]  go, oh crap, that's where my async dependency is. I like you don't, you don't get to do that if the first time you understand that
[02:34:55]  you need something async is when you're already in the effects queue. I mean, I guess this is part of the challenge here because people, I get this over
[02:35:09]  and over again. People don't know how to use suspense or transactions. So when we like go to build stuff, everyone's like, oh, you know, I would
[02:35:17]  just do it this way. But like there's, you can accomplish, well, this is what this next article is. Well, not, not a real life example,
[02:35:29]  but I have better examples here. I was trying to get the heavy theoretical stuff here because I was like, okay. What if we tried to just do the different models
[02:35:44]  ourself? I sh I showed you how hard it is to do holding when you're in a current framework with that tears generally. But what if we started the other
[02:35:53]  way? What if we started where holding was the default behavior when you hit async and how would you make it do all three things? Placeholder tear, you know,
[02:36:03]  whatever. So that's, that's, that's here. So let's start with something simple. You get a post based on like, I don't know, the
[02:36:10]  route ID. And then you have a nav that shows the selected post and then you show the post title and the post body. Now, if you notice one little detail
[02:36:22] , there's no null check on the post here because I'm assuming a holding model. So with a holding model, it's possible to basically when we get here and
[02:36:36]  when we get here to just pause it, you, you get here and we can throw, I don't mean throw the component. This is solid. It's fine gra
[02:36:45] ined. We'll just throw this one little binding and we'll just throw this one little binding. And then when this finishes, we'll, we'll finish our rendering
[02:36:53] . Okay. So that's, that's the thing here, basically non-nullable async data, because you, because of being able to hold, essentially,
[02:37:05]  you never have to check if the data is there. It will always be there, right? This is what I've been talking about, um, a lot the last,
[02:37:12]  like in my singles 2.0 stream. I mean, my hack MDS I'm hoping eventually have the right content. I don't think this stuff is digestible
[02:37:24]  by people. Otherwise I'd be publishing this stuff on, on dev two or whatever. I think it's, I think it still needs more explanation for me to get this
[02:37:32]  to the, a dev two article would take me about a week's worth of work per, you know, I think both of these might be my sequel to derivations and
[02:37:41]  reactivity article. I just don't have time right now. And I, I know it's funny. I'm not wasting, but like spending time explaining this to people
[02:37:48]  on stream. I need, I, this also helps me talk it through. I feel like the first time you write something, you have an idea. The second time
[02:37:54]  when you try and teach someone, you learn the second stage. So you guys participate in chat is really great. Yes. Yes. I, I just, I don't
[02:38:05]  like the term transition it's overloaded. So I, when I talk about react, I'll, I'll call them transitions and we have them sold today, but I
[02:38:12] , I am, I am, I'm generalizing it as transactions as a term. But like, let's pretend this is what you could do. You could literally
[02:38:22]  just write some async data and it'd be non nullable because you know that it will just block fine grained where you need it. Okay. Okay. Now
[02:38:33] , if we were consistent by default upon running this page, we'd show nothing until the posts are available. If you think about it, if we were like truly consistent as
[02:38:43]  our default, we'd have a blank screen until the posts loaded because we wouldn't run any of the effects. Right. And this is kind of consistent with how react server
[02:38:52]  components handle. When you have no suspense on the server, it just waits until you render everything. And then it ships all the HTML, right. It's, this
[02:39:01]  is one of the challenges I actually had side note with solid was that our client model is tear by default. And so it's very difficult for us to like change our server
[02:39:11]  model to be hold by default. But I kind of liked that about how react server components actually hold our SSR now kind of holds by default just as a side note
[02:39:21] . But essentially, if this was a client app, I'm not talking about SSR right now. If this is your client app, you'd literally render nothing until the
[02:39:29]  data loaded. Um, now we, we could obviously show the nav earlier than that. Um, and the loading state. So that's what suspense is for, right
[02:39:42] ? So you just go in here and go, okay, I'm going to wrap this with suspense. And now I can show the net of the second I load the page
[02:39:48] , show the loading post. And then when the data comes in, it comes in, right? This is what suspense is for. Right? So I'm just saying
[02:39:55]  if we had a fictional framework where no suspense meant we don't render anything until async resolved. This is, this is kind of what my mental experiment is, right
[02:40:06] ? I think this would be confusing as hell. Cause people would come in, render stuff and they'd add something async and then like everything would hold up on them and
[02:40:14]  they'd be just like, what the it's going on here. But if you could change the norm of expectation, like th this would be, oh, this is what
[02:40:22]  this mental exercise is. Yeah, no, I, I, I see the argument for this. I, I don't know what that demo or example would be to
[02:40:36]  be fair. I haven't built a real world app in about four or five years, which sounds terrible, but it's true. I spent the first 20 years of my
[02:40:47]  career building apps or websites of dynamic nature. Um, I I'll call them apps, but then the last five years I haven't, I haven't done almost zero.
[02:40:58]  So it's like, it's yeah. Yes, exactly. That this is what I'm saying in terms of, uh, yeah. Um, yeah, yeah
[02:41:22] , yeah, the funniest thing is like, yeah, it, it, the challenge with that is, I honestly think for me to switch around, to get into that mode
[02:41:33] , it would take me a couple of weeks of effort. Um, that's like find the right example and then actually try and build it out. Um, I remember
[02:41:43]  I was making the real world demo, which isn't even real world. Um, and w a while ago with solid and I like using that, but even that's a
[02:41:52]  big demo. I like using different demos as a way of testing those kinds of ideas, but like, yeah, no, it's, it's interesting. Um,
[02:42:03]  I, I suspect that I, I won't, I just literally don't have the time to do it, but yeah, it's interesting unless like it was a real
[02:42:13]  long draw. Like I, I spent, like I did it during my stream time and I did it over the course of like a couple of months, like piece by
[02:42:19]  piece, because like it's, it's funny. Like when I'm working on solid, like I just got a solid release out today and I've been working on it
[02:42:26]  the last two days. I have a hard time even being able to like switch context and work on a specific library in the solid ecosystem or, you know, solid start or
[02:42:36]  whatever. And, and then like go to the next one, because like, if I drop anything too long, the bugs start stacking up and, you know, on
[02:42:44]  unhappy developers wanting, you know, help and whatever, you know, different situations. So it's like, it's very difficult to actually not just be jumping from specific narrow
[02:42:56]  focus thing to specific narrow focus thing. Like the reason I'm in here is I'm literally working on solid 2.0, uh, reactive system. Right. Whereas like
[02:43:06] . Yeah, I, I almost, yeah, all my work is like in these very focused little chunks. I, I am kind of hoping it's, it, it
[02:43:18] , it, it, it, it, it helped. I sometimes go on other people's streams and do stuff where they're building something real and maybe then I can help
[02:43:29]  them or something like that. It's very hard for me to. Have. Like something that I actually want to build to actually do, unless it's like, again
[02:43:37] , a technical demo and then it's very small. Right. Like, like, yeah. I, I, I'm not familiar with that issue. Support, uh
[02:44:02] , submit a bug. If there's a, if there's a bug, I, 1.8 is a really recent release. 1.8 has been out for like
[02:44:09]  six months. I, I'm not familiar with this. I, I, I guess so, but I mean, on the other hand, yeah, I mean,
[02:44:21]  it's just, it's pretty challenging to, to like, to do, to find time to do things more ambitious than like a hacker news or that kind of stuff.
[02:44:32]  Um, um, uh, uh, uh, yeah, it's, it's, it's easy. I'd rather help someone build a real project than that they
[02:44:43]  want and are able to do the challenge, obviously with that is, um, a lot of those are private and then the results don't get shared anywhere. I don
[02:44:58] 't know. I mean, it's interesting. I'm not sure if the stream is perfect for it. Would people want to see, I mean, I, it might
[02:45:05]  be worth putting up the polls. I'm fine. People want to see, like, see like several, like the problem is I actually use a stream for me too.
[02:45:14]  Like, that's like lost time. I mean, it's probably fine, but like, would people want to see an ongoing project over several weeks, um, being built
[02:45:24] ? Um, okay, anyway, um, getting back to where I was going here. If we were consistent with default. Writing page did not show anything. Okay.
[02:45:41]  Okay. So where I was getting at here is you show suspense. It does what you want, right? Be a place. The other way to show now right away
[02:45:49]  would be opting into tearing. Okay. And the way you'd opt into tearing, I don't have an exact syntax, but you can use, you've used this
[02:45:56]  in create resource dot latest or whatever. If you could basically put latest on it, then it should be possible to opt into tearing because then it's not going to trigger suspense
[02:46:08] . Um, presumably, and then you should be able to just get the latest value, but you notice that these null checks now are here because technically to get the latest
[02:46:18]  value includes undefined. I think, which means that there is a state, a period where it's not available and you'd be just showing empty H ones and
[02:46:26]  peas, but to be fair, I don't, I doubt anyone would try and show an empty header. When they're waiting for the data, if they want to
[02:46:33]  opt into tearing, um, I mean, obviously you can set default value on our create async, and then you don't have to null check. But I think more
[02:46:40]  than likely what you would do is you'd actually show a placeholder anyways. Right. And so it's not even real tearing, you know, you could just go show
[02:46:48]  latest post and then use the narrow type, narrowed version of this. And we're kind of back in business. But the thing I want to note here is the
[02:46:58]  similarity between show when latest posts fall back, this type narrowed and our suspense version, our suspense version, basically the same structure, just way cleaner. And you didn't
[02:47:13]  have to worry about the null checking and all that in this future framework, you know, kind of zone that I'm talking about. Okay. Also, side note,
[02:47:29]  I think I am probably the worst person to actually do this. I think, I think there's people on the solid team who built way, they've done like way better
[02:47:46]  sites and work on this, especially on the DX team, people who build the solid docs team. They're, they're, they're actually all better equipped to actually
[02:47:54]  show something, you know, I truthfully. People who are good at making videos. I'm not one of those. Solid to win. Well, we're getting there
[02:48:13] . Okay, so let's talk about this a little bit more. So. Okay, so this is just initial render. And showing how you could do tearing, how
[02:48:27]  you could do a placeholder, how you could maybe this would like what holding could look like, right? How about taking our same example and updating, right? Well
[02:48:38] , if it was a purely consistent model, then when we update, change the route, go to posts ID to. You know, we just wouldn't show the,
[02:48:50]  the nav, everything would basically, all the effects would basically be held. And then once the async finished, it would go and then they would update the nav, you
[02:49:00]  know, whatever the nav is. And then it showed the data, right? Each of H1P would be notified the post possible, also change, and they would hold
[02:49:07]  effects until the post is available. This would mean that nav would not be able to render basically it's almost like you have like an invisible suspense wrapping your whole app.
[02:49:16]  I think if you went like a consistent first kind of scenario, it's not quite the same as suspense, but essentially something collecting and holding the effects. Again, if we
[02:49:27]  have suspense, as we change the ID, we just unmount, render the new things. You know, it's the funny thing is with suspense here is it doesn
[02:49:38] 't even necessarily render new things. It just detaches these nodes. And then, and then when the text changes, it reattaches the nodes the way like we don
[02:49:51] 't actually do re-rendering and suspense on the client. Like it's, it's actually in this case, I think it would actually just, right. And
[02:49:58]  then our tearing solution would, would actually go the updated ID right away. And then it would show the old stuff until the new stuff loaded. Right. So you wouldn't
[02:50:14]  really like, obviously what I'm trying to, I was trying to get up, get with, with the tearing examples. If you, if you wanted a placeholder
[02:50:23] , you'd probably just use suspense and not bother with this. Where is it? I'm trying to find it show component that I showed here. Like you wouldn't bother
[02:50:30]  with this. If you actually wanted tearing, you would do this and then it would, it would, you know, just do its thing. I think latest as an
[02:50:41]  API is awkward. This is a whole other tangent, but I think, I think there's some challenges there. I don't think you guys care about those challenges just yet
[02:50:50] . If you're really interested in, you can read the article. Let's continue though. It was just kind of noting that in general, um, it's important to
[02:51:00]  notice note in this example. That if we had a downstream component that we were rendering here, um, like, let's say, let's say this was a post
[02:51:14]  page and then you, we, you know, rendered a post component in here. They wouldn't, they wouldn't expect post to ever be null. Right. You
[02:51:21]  could basically build components that are expecting synchronously expecting that the post data was there, right? Like post accepts post. And then if it was, um, where is it
[02:51:34]  where I scrolled too far? If you read the async thing directly, since it's non-nullable, there'd be a guarantee that post would be there
[02:51:45] . Or if you grab the latest using some latest API, it could be null, which means that you have to actually give it a default value. It's kind of
[02:51:52]  an interesting kind of thought that it might be possible with, you know, to have TypeScript help you in these situations where basically people can author. Simple components that aren't
[02:52:08]  aware of async that are non-nullable. And then at the point of passing them props, you can still pass them. That's something that will resolve
[02:52:18] , you know, like, like this, you know, async, um, resource, something that is non non-nullable because of the blocking nature of the
[02:52:27]  system or be able to grab the latest value. And because of it being nullable, you know, force it to default. And like, if you just tried the
[02:52:35]  past post out latest to it or latest wrap posts, I haven't decided on the API on it or whatever, then because it could be null, you get a TypeScript
[02:52:43]  error. Anyway. Yeah, I mean, the way solid start works right now is you have to put a suspense boundary in above the highest async. So everything in
[02:53:00]  the outside, the suspense boundary flushes immediately synchronously. If the fence boundary suspends, then we send that on the next stream thing and hierarchically any suspense boundary blow
[02:53:11] . We'll just either come in together or as it's data resolved, but our, our main mode right now, um, for solid start and all solid rendering generally
[02:53:21]  is that outside the first suspense boundary has to be synchronous. Um, and we'll send that response pretty much right away. Unless while rendering into the suspense boundary, we hit
[02:53:36]  resources that are like defer the stream and then we'll wait. from sending the stream until those ones have resolved. Because we, even when we walk into suspense boundary, it
[02:53:50] 's still like we do the whole first pass synchronously. So we do walk in and find all the, everything as far as we can. So we do know if we
[02:53:59]  hit resources that need to be deferred and that, that need to hold the stream. It's just our default. We need suspense in order to, to do that the
[02:54:08]  way we are today. Um, not really cause post dot latest or post that you almost kind of do it the other way around. Cause if you, I guess you
[02:54:21]  could, yeah, fair enough. You can, that way, that would be how you would do something that suspends only the first time. Right. Cause you would
[02:54:33] , you would essentially read the latest. It'd be undefined. Then you would read from posts, which would suspend. And then the next time around when it updates
[02:54:43] , post out latest will have a value and then it won't read posts and it won't suspend. So yeah, that, that would be the trick if you wanted
[02:54:49]  to have something that would, um, suspend the first time and then, uh, basically, um, tear after the fact. That's probably a really good pattern for a
[02:55:02]  lot of people. Actually, now that you mentioned it. Well, the reason, well, because if you solid today is as if almost as if latest was the default
[02:55:15] , it's not quite true, which I'll get to a bit later here, but it's the, we have to null check everything because we don't block, uh
[02:55:22] , even fine grain. Like if, if you hit, if you hit like post dot title and posted, no, like that's going to throw, it's going to
[02:55:30]  be error because post isn't there the way solid is today. We don't have like a throwing suspense mechanism. So generally you, you, you're going to have
[02:55:41]  to provide initial value when you intend to use latest because, or, you know, someone has to provide an initial value along the lines, because that the, that latest value
[02:55:57]  before any data has ever been resolved is going to be undefined. Right. There's, there's the time to get the first data. Right. Whereas if
[02:56:06]  you have a blocking system, like I'm talking about with create async here, where you're not opting out into the latest, you know, because the way it
[02:56:14]  runs that it will always have a value. Um, but it's, you know, it's one way or the other, right? Either you, you wait for there
[02:56:22]  to be a value and it's blocking or you grab the latest and it's not blocking, but it's possibly undefined. This or statement is clever because it
[02:56:33] 's essentially saying if there's a value, um, go with that. Otherwise wait for it. I, I, I, I was assuming this post was calling post
[02:56:46]  as a function. Um, maybe that's the wrong assumption. Yeah. And solid start does, we assume that you need suspense for async, which is one of the
[02:57:00]  hardest, which is where this conversation kind of comes in because it's hard not to have. The framework needs to know to wait, right? If we go render and
[02:57:11]  we don't hit any suspense and we hit and you've called some prompts, like, how do we know? How do we know to wait now we could, we
[02:57:20]  could wait on every resource, every async call that you make on the server to finish before we send any response back. But like, how would we possibly stream that?
[02:57:28]  Like we, we need a way of knowing what's ready, what things depend on. And as I said, I, I, I do like how react with RCs
[02:57:36]  have changed the default to like hold, but like classically with SSR, you try and render synchronously. And then like the client picks up the slack, so
[02:57:47]  you need mechanisms to be able to tell the server to wait. Suspense is that mechanism. I think if you unified the consistency first model, you could argue you wouldn
[02:57:58] 't need suspense, but we're not like, we're not there. Right. Cause when we added this stuff to solid, it was often like you can use create resource
[02:58:05]  without suspense and solid, right? You can just like go in, use it to load async data. Um, and the way we opted into like a tearing model
[02:58:15]  by default, because that's how all reactivity works. It didn't like, it wasn't like, it didn't like, if you have an effect that writes the
[02:58:23]  state, you know, that's how, that's basically how all async has worked. So I didn't think much of it, but now in hindsight, I kind
[02:58:28]  of realized that like, there might be better defaults. Right. That, that, and that's really what this conversation is about. Right. And yeah, I
[02:58:42]  mean, I think one of the hardest parts here is I have no idea. The problem with all these examples is we're kind of okay. If it holds the world
[02:58:52] , you know, you know, we're just like, we're looking at this and we're like, okay, well, I mean, that's not the example,
[02:58:59]  but it doesn't matter. Like we we're, we're kind of okay that, okay, this doesn't update, this doesn't update, this doesn't update.
[02:59:05]  But the problem is withholding the world is without transactions. like I was talking about before without transitions or something, nothing is responsive while it's holding the world. You
[02:59:17]  need to be able to fork it. If, if you're going to take that hold the world positioning as your default, because otherwise, um, you hit something async
[02:59:28]  and now nothing is responsive. And I think the problem is in today in react and so all you need, you need to wrap your stuff in a start transition. I
[02:59:40]  have an example here and here, but you go use transition and then you call start around your center. And that tells us that these things need to update together, that these
[02:59:48] , this is a process. It's a, it's a fine API. And the key part is it actually gives you back a signal where that you can use as a
[02:59:54]  loading state. And we built this into stuff like our router. So when you go is routing, it will give you a signal and you can actually show that, you
[03:00:02]  know, Hey, it is routing. You know, you can keep the stuff on the page and then here's a fade. You can do that some kind of other sign
[03:00:09] , but you can hold while showing something's going on. You can't show a loading indicator. If you walk the whole screen, that's why you need transitions or transactions
[03:00:18] . If you're, if you have a holding model, but. One, if, if, if, if everything's holding by default, I think it's confusing
[03:00:27] . People want, in fact, the second they add async that the whole app freezes, right? It was what Benton said earlier where he's like holding is
[03:00:36]  great as long as you show it, right? Otherwise it feels like it freezes up. So if your default is holding everything and then someone adds something async and then
[03:00:43]  you're like, why is my app so slow? It's going to reflect poorly. One way you can get around that is make transactions implicit. So, you know
[03:00:51] , you don't kill the stuff running on the, on the page while something else unrelated updates, but the challenge with that, as we already talked about, is it's
[03:00:59]  not clear what things are grouped together and set. And if you just treated everything as a separate transaction, which is fine, there's no clear way of getting the pending state
[03:01:09]  in right here. It's very obvious. You have like this return pending that you can use for your trans, your transaction. But here it's like, what does
[03:01:17]  every state setter have the ability to check if it's pending? Right. Cause it's not about the read it's about the right. Right. Latest, latest
[03:01:28]  is great because it like latest doesn't get you the next value. Latest gets you the past value. Do you know what I mean? Like if you look at
[03:01:38]  all these examples where I'm talking about the latest post, it's actually, it's not maybe latest to the poor name for it. It's, it's, it
[03:01:47] 's after we've changed to the next ID. We've gone from one to two. Latest actually means get one, ignore that two is in flight. So latest is
[03:01:59]  actually not like it gives you a way to read the past. There's no way to opt into reading the future. Right. And that's, I think it's
[03:02:11]  important to understand on transactional side, it's kind of intentional because those whole branches just need to live in the future. And the other branches need to stay in the past
[03:02:24] . You don't want that sort of tearing, but you need a way for the branches that are in the past to know that, Hey, there's something happening happening in
[03:02:33]  the future. And I have no clue of what kind of API surface we'd need for that. Explicit transactions are very nice because they let us group things
[03:02:41]  together the way we want to. And they, they give us a clear API fixture, right? You can't just like have set count return a signal because then it's
[03:02:53]  like, you don't get a chance to insert it into the graph. You know, like you could call set count in 10 different places, like in an event handler
[03:03:00] , you can't, there's no, you're not going to like assign a variable that you pre-declared, you know, at the top of your file
[03:03:08]  components or top of your component that only runs once and then have that somehow insert into the, the renderer, like that we're not re-rendering. Like
[03:03:17]  there's, you, you basically have to have the marker for whether something is listening to being pending to happen ahead of time. This is, it would be no different in
[03:03:26]  react either. Right? Because the, like the events happen outside of the render model, like where you actually do the set count happens outside. So you need to actually have
[03:03:35]  the fixture to track the transition already existing at render time. So like, yeah, the API is here get kind of challenging. I still understand forking. If you
[03:03:51]  hold, how's that different from just deferring the state update until the async tasks are complete? Well, what I'm talking about forking is if both sides could
[03:04:01]  exist at the same time, right? You're right. The naive, like simple approach is like when you get to go from A or B and you have that, you
[03:04:10]  know, switch happening here between these tabs, you release A and render B. And then A is basically dead. But what if instead of doing that, you had a
[03:04:22]  different copy of this memo essentially. So this one's doesn't rerun. It stays on a, and you have a different copy that evaluates now to B. So
[03:04:34]  both of them are live at the same time. And then you can like realize that these are connected in different time. And then eventually you stitch them back together. We
[03:04:46]  have a version of this in solid right now. But you have to basically fork the reactive graph is the thing, because really, as I've already kind of shown here with
[03:04:57]  a manual approach, you need to have different copies of the signal signal or different way of reading the signal that reads different values in order to make this work. And in
[03:05:09]  general, I mean, it's true with react too. Like you have to, they have hooks where they persist state. You have to have a different version of that
[03:05:17]  state on the concurrent branch for it to work and read from. Why create async as it today is not often using a mutate method, like create resource mostly because
[03:05:34]  directionality and single source of truth. It it's, it's hard to extend that right ability piece. Like if you want to have like create async store or something
[03:05:43]  like that, it's the reason why it's store create resource doesn't have like a, like has a weird experimental thing, trying to get stores to work. It's
[03:05:48]  because trying to write to a store is different than writing to a signal. So it's almost better on almost, I think it's better to treat async as derived
[03:06:00]  value and then have a way to write over it. Right. Like projected temporary. So we like, we had an idea in solid that I've showed before called create writ
[03:06:12] able, which is a writable memo. It's still fine for directionality. The biggest problem is like when you have like an effect, right to a signal, you
[03:06:18] 're like restarting the update loop again. You, when you have like, basically you can't have any guarantees because you can't backtrace through the right.
[03:06:29]  Like, like if you have a signal and you're like, if you have signal a and b, and you have an effect that writes to b, depends on a,
[03:06:40]  b doesn't know that a is its dependency. Because you've, you've decoupled it because essentially the effect listens to a, and then it writes to b,
[03:06:49]  but b doesn't know that it, that it kind of depends on the effect, which depends on a, you've broken that linkage. Whereas like, if you used
[03:06:58]  create memo and you directly see that b depends on a, and we can make sure not to execute things, you know, unnecessarily. And I think that if you treat
[03:07:08]  async like that, you, you, you have the same kind of benefit of directionality in the graph. And it's fine to derive something that also can be
[03:07:18]  overridden because you still keep the directionality of driving. Um, so like, I don't, I've shown this before. I don't have an example
[03:07:28]  with it right now, but like create writable could basically be used as a way of, it would have a, like create writable has a signal signature like this crate
[03:07:37] . So let's pretend it's like count that count. I know this is terrible. It's in all my examples, but if you had create writable, then
[03:07:46]  it could sync with like, say props.count, but also overwrite that value. And because of the directionality, you know, that it depends on props.count
[03:07:58] , even though it can be temporarily overwritten. If props.count ever updates, it will overwrite the value that you've set in count, but at least you
[03:08:05]  have, you keep this directionality, right? Um, which is very different than if you have a situation where you have, um, this. because with this,
[03:08:34]  you don't actually know that count depends on props.count. Like this, this is just the value. I mean, this could even be no, because the first time
[03:08:51]  it runs it, I mean, effects run later. I mean, you, you start getting into a place where you're like doing. Value rights during rendering. And it
[03:09:03] 's just a nasty place. You don't want to be with by changing everything to being derived. It cleans everything up. And similarly, my thinking is that why not just
[03:09:14]  put the async thing in here? So you create something async and then have essentially a writable projection on top. This way you keep the source of truth. When
[03:09:24]  the async data updates, it refreshes. the, your writable temporary version and you update this as you wish. And then you push the changes back. The
[03:09:35]  server async pulls through and you get the loop and you keep the directionality. Anyways, um, sorry, a little bit of tangent. I hope that kind of makes
[03:09:44]  sense. It's just create writable made create async less extension or so not create writable. Sorry. Um, having mutate on create resource made it less
[03:09:54]  extensible because you'd have to preserve that the, the right side as well. And they could have different rules. anyway, yeah, I mean, but the thing
[03:10:20]  is, as long as those, you know, see that we have this lovely thing in our systems where we execute everything synchronously. So like we are fine to have
[03:10:31]  these, yeah, you can say that the state tears, but like the, they can't see each other. They live in their own bubble of world. And by the
[03:10:40]  time they reconcile and everything comes together, that they will be consistent. Yeah, I mean, in a sense, but what I, what I'm getting at is if
[03:10:56]  you actually don't want to tear hierarchically, you can hoist, but it, it becomes like, it becomes the more complex the situation comes in terms of structural considerations
[03:11:07] , the harder it becomes like I demonstrated earlier. Right. Like, um, like the, the, the, you know, display name versus name, you know, I
[03:11:17]  mean, that, that one's simple, but like. Right, so, um, where am, where am I going here? Um, not that this. So
[03:11:37]  yeah, react has this position that new suspense boundaries create under a transition. Don't get added to the transit is action. Instead, go to fall back. But this,
[03:11:51]  you know, doesn't help with things already on the page. They need to stay in the past. The type head problem. Yeah. So you can, as I said
[03:11:59] , you kind of end up in this situation where like, if you go implicit transaction, even if we solve the API, you'd still need a way to be like,
[03:12:10]  no, I want this not to update, um, you know, transactionally. Like not be held up by async. I want this just to tear on its
[03:12:21]  own. I don't know. I, I, I, I kind of got that far in this thinking. And then I got here and I was like, well,
[03:12:30]  what about inconsistency first? Right. Let's, let's go back to where like, like now that I've gone way down this deep end, let's go
[03:12:40]  back to how frameworks are today. Like, what are the options we lock up all effects like proposed, basically treating the top level app as if it were a suspense of
[03:12:53]  sorts. This aligns to the idealized server rendering. probably we do inconsistent tearing based on how effects are grouped, we expect people to use the tools provided to get
[03:13:03]  the experience they want, or we default to dot latest instead of throwing, but we we're back to null checks, but tearing happens predictably, but yeah, there's
[03:13:15]  basically, we have three options here. Right. I guess to be fair, there, there might be a third option, which is like, not even trigger suspense,
[03:13:26]  unless you, uh, like if you, if you default to latest that suggests not turning suspense. So like right now, solid actually triggers suspense, but I think the problem
[03:13:37]  is, so instead of latest, you'd want to have weight. And if you set weight, it would throw and then resume when it came back to be fair.
[03:13:45]  Uh, like I was saying, like, what if you like swapped it around? So it's latest by default, but then if you want it to wait, you would
[03:13:50] , you know, wrap it. But what I realized is that wrapping something like to say, Hey, throw is the same as doing a null check. Like it's basically
[03:13:59]  pointless to have an implicit. Wait, so like from, you know, yeah, here was my conclusions. We may be eliminated some options, but unless we want to
[03:14:13]  give up colorless async, you know, like the null checking ability, we, you have to go by throwing by default, right? Because basically throwing by not like
[03:14:21] , not throwing by default, throwing by often makes no sense, which means that top level will never, never tear predictably. What I mean by that is if you
[03:14:30]  have a system that throws, you're going to at least have effects that share the same dependencies, which means it's possible to have like name update one place, but name
[03:14:38]  group with async thing, not updated in a different place. Right. Right. The one benefit of the current systems is that they tear, even though they tear, they
[03:14:46]  tear predictably, like name will be updated everywhere. You know, and but so like, this is, this is kind of the crux of the problem. So
[03:14:56]  you really, we, we really have to think hard whether we want to freeze, you know, like, as I said, like make sure everything's consistent before we show
[03:15:04]  anything by default above suspense or accept that top level. There is inconsistent tearing freezing top level is a lot nicer if we have implicit transactions as consistency first wouldn't have to
[03:15:14]  block the universe. However, without an API to track the state of the particular transaction, it's pretty difficult. The linking has to be on the right side and we can
[03:15:22] 't just inject signals into the graph. They need to already be there before. This could be an option worth exploring, but it seems awkward. So if we aren't implicit
[03:15:29] ly transacting, how do we feel about freezing top level? Most people should be using tool using the tools like suspense, but if they don't, they'll find themselves
[03:15:36]  unexpectedly watching. They'll think their app is slow. You know, to be fair, this only happens if they opt in to create async. If they just use
[03:15:43]  effects, they will still just everything will work as it does today. We see this all the time with the router when people don't realize there's a transaction on their hood
[03:15:51] . I don't think it's intuitive at the moment. However, having unpredictable tearing due to effect grouping is hardly better. I can see people trying to work around either behavior
[03:15:59] . At least with freezing, they have control by using latest. I see this on the router all the time where people start using dot latest to cheat out a suspense.
[03:16:05]  With arbitrary tearing, they would probably need to just move stuff into different components for no real explainable reason other than, hey, you should use suspense. If all roads lead
[03:16:14]  to the same place and freezing is more instructional, maybe it's better choice or maybe I should spend some time thinking about implicit transactions. In either case, it doesn't feel
[03:16:24]  like it does feel like pieces of solutions are aligning. By that I mean like if you make certain decisions, they lead to other decisions. Like there's clearly like
[03:16:35]  the paths aren't like a bunch of combinatorics. There's like one path or the other path. So basically either we leave things relatively solid 1.0 style and
[03:16:46]  null check or we have to go pretty deep along the rabbit hole. That's that's kind of where my thinking went through. So I was talking to some people
[03:17:02]  in the discord of after after this and I realized that like it's it's it's it's it is interesting that if you avoid certain primitives, you can basically avoid
[03:17:15]  this whole thing altogether. If you just like use effects to do data loading, then you never have to worry about this even with all these models in place. But it
[03:17:25] 's like it's not going to if you want it to be a consistent story with like SSR and like the whole pieces to work together. You almost have to like
[03:17:36]  go all in, which is challenging, right? Because it's it's like I don't know if the like I don't know people ecosystem are ready for this. Like
[03:17:46]  in a sense, this is the problem react has been facing because react might academically have worked it out. Like this is was this whole exercise with the scale draw where I
[03:17:55]  showed that reactive basically figured out how to make a consistent async model. And I basically figured out how to do the same fine grained in a reactive system. But it
[03:18:07] 's like it's a big ask when people are like, I'm just building my side. I don't understand any of this. Like think about how much language and
[03:18:18]  how much misunderstanding goes into this stuff. I'm happy with the null check. Yeah. But it's like, because of react, people aren't happy with a null check
[03:18:28] . It's the first thing I get every freaking time. It's weird to have a suspense component and a show component. You're like, what, what, what am
[03:18:35]  I doing? Right. And the second you get rid of the null check. Like stuff starts looking so, I mean, I've showed it in some of these examples
[03:18:45]  I'm showing, like this is way nicer or where's the suspense version. This is way nicer than what most frameworks and tools get to do today. The fact that you
[03:18:55]  can just like write that and just be like, look, SSR, everything taken care of. I don't even have to think about it. Async will just work
[03:19:01]  exactly, you know, the plan, you know, like. We were getting at the error of. Okay. Well, it's more of that. There's ways
[03:19:14]  that we can enforce this stuff. Like more strictly. Like there's ways that we can just like make rules that will make people very miserable, but will remove the foot guns
[03:19:26]  because there is a consistent model here. You just have to be aware of it. Like one example is don't let people write during the pure phase. They can't
[03:19:34]  write, like can't set state, can't set signals, can't do that during the pure phase. And if you look at my diagram here, you know, here
[03:19:44] , the pure phase is basically every fricking thing that they taught you. Except for here. So you're allowed to call set state here and you're allowed to call
[03:19:53]  in inside your event handlers. You can't call set state anywhere else. Right. And if, if we literally erred in that scenario, there's a whole bunch
[03:20:05]  of people who would be like throwing up their arms and couldn't figure out how to do stuff and, you know, be very confused and get very upset. But it wouldn
[03:20:13] 't be, there wouldn't be a foot gun. It just wouldn't work. Well, the, the, the problem is I'm saying it doesn't fork by
[03:20:31]  default. You have to opt in with the transaction. The problem is that the, the biggest challenge with suspense is that once you're in a suspense zone. There's
[03:20:47]  only two ways out there's dot latest, or, so make sure that you'd only suspends initially. So like opt into tearing or, and maybe, maybe like that
[03:21:01] 's such a common option that people should just use that all, like all the time. Or. Using transactions, which require people to wrap their actions and their setters
[03:21:14] . And I don't think they're thinking that way. You know, if I'm just creating. Creating some random app, am I going to do that? I
[03:21:20]  think, I think because otherwise the default suspense behavior has you dropping back to fallbacks really awkwardly. Like maybe if that part could be addressed in a consistent way, then
[03:21:35]  the rest of this falls together. Right. And, you know, I, I, I, I imagine that like. Like. I imagine that like. I
[03:21:51]  imagine that like. That's the catch. I think. I think that's ultimately going to be the catch. It's, it's, it's around this. The
[03:21:54]  fact that. Like. yeah i i i imagine that like i i imagine that like that's the catch i think i think that's ultimately going to be the catch it
[03:22:14] 's it's around this the fact that like there there isn't really much in between um and maybe it's just a matter of setting the right defaults that's why
[03:22:25]  i'm doing this exploration because like the the latest challenge is because yeah i mean the latest or post as we saw before actually keeps things non-null right yeah that's
[03:22:44]  that's interesting i think that's worth thinking through um okay that is an interesting thought but i i yes and yes yes to a certain degree but like sometimes that's the
[03:23:03]  best place for things to go otherwise you duplicate your whole view tree logic outside in like a separate state container and maybe you're fine with that you know like old mbc
[03:23:13]  but like there's a reason we got away from that model i think there is a certain amount of overlap i think we have to recognize that these aren't like they aren
[03:23:22] 't one-to-one i think like if you think all state belongs in the component you're wrong but on the other hand if you think all state belongs out you're
[03:23:29]  going to get a lot of duplication right yeah i mean that's generally it as well i think i i i i believe that if this model is adopted it will be
[03:23:46]  beautiful but i don't i think it's really hard to get people to actually adopt these kind of things well it's not about the async logic it's about getting
[03:23:59]  the async in and this is going to be really relevant when we talk about what happened with react 19 in a few minutes um yeah but i mean suspense has this weird
[03:24:13]  inversion of control where like it just goes up to the boundary that that's where it jerks and the reason you do that is because you you you want you want to be
[03:24:26]  able to like not have a billion spinners and just have one so like yeah maybe we should fundamentally look at the nature of that see for me a lot of this of
[03:24:36]  this stuff and sorry let me just get this here um one second i want to just i want to grab an example here one more example where is it two seconds too much
[03:24:59]  chat in the discord before i got here all right the reason that i'm getting the this point is because even before hitting suspense you start thinking about the power of of these as
[03:25:16] ync um primitives right and i'm not going to say this is optimal from a performance standpoint but i have implemented the non-blocking um or the blocking async
[03:25:31]  or like the fine-grained blocking async right for example count and then picture create async where it depends on count and then it uh i'm just returning it after
[03:25:48]  force 400 milliseconds and then there's a double count which is a memo that depends on data account notice no null null check here right even though data is async and it
[03:26:04] 's an object no null check here times two and then i created an effect on count and then i create an effect um this is with the split effect right which has a count
[03:26:14]  and double count and i console log that and then i set an interval where i update the count from one to ten at a very fast pace it's so fast that it
[03:26:23]  interrupts the async from running because this takes 400 milliseconds so this is already to two to three to four even before um this finishes resolving so what you actually end up seeing
[03:26:37]  here is this first effect that's tied to count just go one two three four five six seven eight nine ten and then the async log happened at the end with the
[03:26:48]  final final value so this is an example of what i call unpredictable tearing where it's partial it's based on the effect grouping this is like the easiest thing to do in the
[03:26:58]  world like it's already set up this way but you see it goes one two three four five five six seven and then the last one comes in afterwards now if i made
[03:27:06]  this interval slower than the fetch you'll see that each fetch comes in uh you know as as it as it goes right yeah well i mean but you still have this complexity
[03:27:34]  outside when you have you still the complexity outside when you have like multiple things that depend on that like i guess because i think in signals you you could pull the whole signal
[03:27:51]  graph out of your ui and still have to answer this question you know like should count update in this scenario when there's somewhere else that you know show that you know shows
[03:28:10]  count with double count you know what if without effective memo yeah okay yeah sorry so you do you want me just go like this okay i'm gonna do the effect first without
[03:28:31]  the memo the same thing happens the reason i want to show the memo for you guys is understand that it's actually transient which was not the case in in solid 1.0
[03:28:41]  that it actually propagates the async through through here like if i go back to the like obviously this is the same thing like the the async actually propagates through
[03:28:53]  the memo which is something that we don't have today which is freaking cool but yes you want to know what happens if i do this let's do this yeah there we go
[03:29:09]  it it it throws because it it throws here but you have to remember that yeah it throws but yeah like what i'm getting at is you have to remember when you're
[03:29:30]  doing initial render that you're part of a pure render phase so if it throws right coming back to here inside the component uh wherever this demo is if it's if if
[03:29:48]  i just access it at top level for some weird reason and it throws here technically speaking it's part of the memo above it that you know will do it i don't recommend
[03:29:59]  accessing async data top level in your components it's as bad as it's basically like putting an async await you get you end up with a react model basically yeah
[03:30:10]  people shouldn't do that that's an interesting question oh no i'm the function's fine sorry the function's fine so i missed the function wrapper i meant top level in the
[03:30:22]  corner but if i if i if i just if i just put this if i got rid of the memo here and just went uh and just went double count that's fine
[03:30:38]  too the i think the most interesting thing about this is if you try and read something you know like in an event right this is why suspense is pro probably important or not probably
[03:30:50]  it's definitely important because if you have an event on your dom that is reading this data you probably want you can obviously put latest around it but you more than likely you
[03:31:04]  want that whole section to be under suspense boundary because if you i mean what is a scenario where you've not loaded the data but you can run effects like run run um events
[03:31:21]  against it i'm not sure i think you should be grouping these things together based on like whether they've loaded or not like people shouldn't be clicking buttons for something that
[03:31:30]  on something that hasn't loaded yet but yes it throws i i i mean what do you do like rerun the event later like yeah like then you lose the synchronous time
[03:31:51]  of the event i mean more than likely the the button click is going to either be disabled until the thing loads or it's or it's going to be part of the suspense
[03:32:01]  boundary you know like you i don't think it makes sense to build something where you're trying to interact with something that hasn't loaded yet you know i don't know
[03:32:11]  maybe maybe that's a hole in this that's it's a it's a question i did think about this though you can also use latest to get to to get out
[03:32:26]  of the throwing so to speak i'm also talking about loading you can also ask if it's loading you know the loading and latest are like the two helpers are really important
[03:32:37]  here but in any case just kind of wanted to show that like it's kind of cool you know i mean i'm trying to think of like a scenario here that show
[03:32:50]  like really show this in action but like you could pretend like i don't know you could pretend like uh forget about this for a second i mean what what what could we do
[03:33:02]  that was fun we could make like a uh counter component and then like const uh what are we going to do make a div equals document dot create element and then return div
[03:33:25]  and then create an effect it's like um document i don't know actually just div dot text so let's make an h1 i mean you guys have all seen my
[03:33:57]  old solid demos right i guess this is a render effect um i guess to be fair i i could actually just do it right here just go and then let's get
[03:34:51]  rid of this and then let's get rid of this let's create yeah i'm like i'm just trying to think of like um yeah let's just move this in
[03:35:20]  here for now i'm trying to think of ways to like show format and i'm going to go to the document dot body and counter what am i doing funny here and
[03:35:51]  what am i doing funny here it's funny because it's funny because hmr is not going to work properly the way this is this is kind of what i want to
[03:36:25]  do is set count count plus one plus one um button dot text content yeah yeah yeah i mean this one's just holding but like it's i mean if i really
[03:37:01]  want to get fancy here i could probably hoist the the i could probably do something like but i don't have um i don't have um um i don't have
[03:37:28]  um i don't have the like a transaction so there's no there's no dis there's no loading indicator um i can separate the effects to get that effect but it's
[03:37:40]  not it's not it's not real um what i want to do i want to i want to want to move i want to move the h1 into everyone with the
[03:37:54]  h1 into here i'm just trying to picture a scenario where like essentially you could have a dumb component that that renders an h1 you know and props dot count
[03:38:31]  props dot double count let's say right and then have essentially would i call it display count count turn count get double count return double count and i'm basically just hand
[03:39:21]  compiling this um and then so h1 here and then what i could do is yeah let's pull async right out of the puzzle here right i could i
[03:40:01]  could author i can author my component here it's funny why does it and that's actually funny i wonder why it's not showing the the count initially that might be a
[03:40:26]  bug that might be a bug on my side i don't know what this is interesting okay so there's still some work to be done here but what if i change this to
[03:40:36]  one okay okay something is not happening as i'm expecting it to but in any case we see that we see this updating initially we created a component that essentially has no clue
[03:40:53]  about async it just takes two props in right and expects those props to always be defined and then essentially we can add async into the tree here and then like am
[03:41:16]  i doing wrong here and then and then like yeah anyway this is this is still very much a work in progress but i just kind of kind of like the thinking that's
[03:41:42]  going into that yeah yes this is equivalent of having async without colored functions yes that's what i'm trying to show here right does it work don't get me started
[03:41:59]  on that but yes this is this is the idea i am comparing it to coloration of async because the point here is that we were able to build a component that
[03:42:13]  was just able to render and then we were able to add async capabilities above it without impacting its functionality without having to go back into it if you use latest i don't
[03:42:27]  know if i've i haven't exposed latest yet this is very new but yeah i just this just kind of playing around here right but yeah this this is this is essentially
[03:42:44]  where the thinking is going to be able to support these models you need to have consistent scheduling as i as i was trying to show before and to do that you need to actually
[03:42:56]  separate the dependencies so that you can run in the purest part and only effects on the side part and yeah as i said i don't it's hard to tell how
[03:43:06]  worth it all these things are but seeing stuff come together like this it feels incredibly powerful so yeah i i'm this is going to take a little time to rough out the edges
[03:43:20]  but like this is like as i as i'm trying to say is i think it's like like it's like reacts model without a lot of the trade-offs of
[03:43:31]  the reacts model because it's it's not blocking like like we don't have like the reason this example works is because like if i had suspense which i don't have
[03:43:43]  it's actually this read that is triggering the throw it only throws right here because this is a getter which then tries to read the memo which tries to read the async
[03:44:00]  so if you put suspense here like obviously you'd probably in a situation like this put suspense around this whole section but my point is like the throw is pushed all the way
[03:44:10]  down which is the opposite where react the throw happens right here you generally will be like you when where you introduce the async data into the component is where the throw happens
[03:44:26]  which and and don't get me wrong you in they could try and push it down but if they pushed it down you have to rewrite display you there's a logical place to
[03:44:35]  introduce it you want to introduce it i'm not saying you have to fetch like i'm fetching in here you can hoist the fetching up but i'm saying
[03:44:45]  is you have to introduce it at the level you tend to want to introduce it at the level where you're aware of like suspense to a certain degree but i mean it could
[03:44:58]  still be a level in between these two but the important part is you we can push the read all the way down to the leaves without yeah i mean it's fine we
[03:45:29]  just don't don't do get make this make this count make this double count and then call this as a function and then call this as a function yeah the getters
[03:45:46]  aren't important same thing it i i just i'm just pointing out that like would the old current api still work for 2.0 i mean from this perspective create
[03:46:08]  resources just adding a bunch of stuff on top of create async right the tricky part is that it is is the implied behavior changes that would come with this in the way as
[03:46:21] ync is happening it's it's actually it's not a problem we could port old primitives across but i think this change might be significant enough that i don't know
[03:46:32]  if old code would run optimally i mean it's fine you i guess you just have extra null checks i don't know i i haven't figured that out if if if
[03:46:44]  we'd force it into a weird place where you'd have the null check still yeah is failing render silently better than getting an error about accessing blah and define is it gonna
[03:46:56]  is it gonna fail to render silently though like like like if it if it throws you're gonna catch it in an error boundary if it's delayed it's not that it
[03:47:09] 's gonna fail to render it's going to slow down silently like you're not gonna understand that why when i click this it took a second suddenly somebody entered async you're
[03:47:23]  like why isn't this snappy anymore that's the biggest fear here and the solution to that is what i'm dwelling on a lot because obviously if we change um if
[03:47:36]  we can separate the processes in terms of like trans transactions or transitions you won't be as impacted by it but that's the the challenge in this kind of async model
[03:47:48]  um consistency is guaranteed not speed right uh elaborate a bit more on nested objects i'm not quite following are you like generally speaking like react or whatever or like most of these
[03:48:13]  kind of most signals things like the entry point is here so like nested reactivity doesn't apply to async in the same way it's almost impossible because like usually
[03:48:26]  there's a source of the async it's ultimately the reactive systems themselves as they propagate data only really understand synchronous things all the async here is doing is breaking up that
[03:48:39]  synchronous things into patches so like there's no such thing as nested async so to speak i don't think um there's no such thing async you'd have
[03:48:48]  to be able to convert it back out into something that you can read anyway but yeah i mean this is this is very rough example of people as i said the code's not
[03:49:04]  finished people want to play with it maybe i can share this right here let me share that you catch errors in the error boundary it's where the read is so we don
[03:49:23] 't you don't it'll be the error boundary close to where like eight it's the same thing with our resources when resource errors it's not like this component errors it's
[03:49:33]  wherever the this is red errors the next closest error boundary is what clicks which might end up with multiple error boundaries showing up at the same time but it also makes sense because it
[03:49:43] 's like this part of the ui could render couldn't update here's here's that now the key part you have to understand is this propagation from create memo it means
[03:49:55]  now that because we can pass it through error boundaries are only tied to effects like if a memo errors it's only going to matter if an effect reads from it including a render
[03:50:08]  effect so like all propagation is based on effects and the effects create the hierarchy so like unlike solid today we actually get a very clear separation um which is i'm pretty stoked
[03:50:23]  about because it's there are clearly two graphs i'm still confused with the two callback you shouldn't set signals in the first one but what else is decided for what
[03:50:40]  goes where yeah basically the first one tracks in this this will help you a bit this side tracks this side does not track so if everything reactive should be here the part that gets
[03:50:53]  weird and this is the the part that i came to realize over time is creation isn't a side effect so when when we render like child components under conditional it all happens
[03:51:07]  on this side this is like where you finally insert it into the dom so like nested effects go in this side nested everything goes on the side you shouldn't be
[03:51:18]  creating reactivity on this side um and this is what this is what i'm getting at is it's why it's sort of like that react projection thing i was talking about
[03:51:31]  you want the creation all to happen on on the pure on the pure side all the creation and even our nesting is on the pure side right like like i'm saying
[03:51:43]  components are like nesting so like yeah it's it took me a moment to realize that but then i got it so yeah the the effect will catch but then the effect knows
[03:52:01]  its owning effect and it can trace trace up the error boundaries that way so it but it's it's actually the effect that does the catching so to speak right like it
[03:52:13] 's it's where the sync is the fact that an async or memo error is irrelevant if no one is listening right it's like if a tree falls in the woods you
[03:52:27]  know yeah i i think there's something here this is still very rough i just needed i did the signals 2.0 stream which you guys should check out if you haven
[03:52:44] 't already where this wasn't working at all and now we're a little bit further along as i said i don't my week was like spend a day two days on this
[03:52:54]  but i don't know just including those write-ups spend two days working on solid one day looking at solid start trying to get it on block like i don't i
[03:53:00]  have to time slice stuff you know plus whatever of um work and learning i've been doing um some onboarding stuff at uh netlify i like yeah i i basically have
[03:53:12]  to keep on juggling slices right now i guess i'm asking if an effect has a deep google and only updates the fields that need because yeah i mean i think there
[03:53:25] 's a gap in general uh of projecting like state and i stuff like signia has something called like incremental computations which can handle this our fork component or map array is an
[03:53:38]  example of this there everyone need we need data to get to get uh we need data to get um to be derived right oh i got a bunch of highs do i just get
[03:53:52]  rated uh oh wow yeah teach rating with a party of 158 wow that's awesome glad to see you guys here i was just wrapping up on showing off um a cool
[03:54:08]  new async model um that i was working on for solid 2.0 signals um um i was it's it's so funny because this is so rough that i'm
[03:54:21]  doing the dom apis by hand but the idea was i was showing that if you had like a a component that rendered two numbers let's say a count and a double count
[03:54:37]  in this new model that i've been working on if we i'm going to comment this out first if we say author that data in such a way that um you know
[03:54:52]  you have a count in a double count and then i have a button that updates the count sorry this is like raw dom apis and then display i'm just calling the child
[03:55:02]  component basically and i click it and updates right away yeah yeah yeah but it's possible with this new model that um that i'm working on here so that if we introduce
[03:55:14]  something async into the puzzle like maybe double count needs to go fetch something from the server um and just to really bring in my point i i'm returning an object so you
[03:55:26]  can see that like like this should theoretically be undefined at first it's possible with this new reactive model to see there's a delay now between when i click and
[03:55:37]  when it shows up um it's possible to without changing the the component underneath to basically have colorless async like no not needing to null check um and yeah it's it
[03:55:53] 's a cool little trick because essentially um because it's solid and reactivity we've we've actually pushed the read all the way down to the leaf node so like if
[03:56:06]  we had something like suspense here it would actually trigger all the way down the tree without actually having to rewrite your components now pretty technical topic obviously but um yeah this is colorless
[03:56:17]  non-blocking async um which is super relevant when we want to talk about blocking async because i was going to talk about the react 19 uh thing yeah so
[03:56:37]  i don't know i don't know if you guys heard about that that controversy at all with the with react 19 um but they did some funny stuff with their suspense that got
[03:56:47]  some people pretty upset and uh i guess it's i don't know if there's anything else on this topic i want to talk to but we we can kind of start
[03:56:54]  getting into their mindset well i've just spent the last hour showing people how you could create a completely non-blocking async model one where like literally you could have everything
[03:57:11]  render except for the async piece and then have the async piece fit fit in and instead of like throwing or waiting at your component boundary we push it right down to
[03:57:22]  the leaf nodes just like signals normally do so you update only the things that change only await the things that change react model is pretty much the opposite and it you know they
[03:57:41]  have awaits in their server components you know where they block even even i think promise all is a smell because at least on the client because the client you have things updating all the
[03:57:51]  time why would you try and block in the middle of your you know obviously they don't use a weight in in uh on the client components that you have used but i'm
[03:58:00]  just saying like promise all is already suggesting that you have to wait for both halves to come in together and i want all these things firing in independently right but this is this
[03:58:14]  is kind of yeah let's let's let's let's take a look at um that conversation a bit so the gist of it was and i think this is going to
[03:58:26]  get this is my understanding now that's going to be reversed i was actually there on the floor when they decided to make that change um everyone is talking about it reacts summit
[03:58:35]  in amsterdam but let's let's go back to the start of this now i definitely need to blog about react 19 changes around suspense and sibling pre-rendering i haven
[03:58:46] 't seen anyone so far from the react core team who thinks this is the right trade-off version 19 isn't out yet so maybe there's a slim chance to get them
[03:58:53]  to reconsider basically let me see if i actually still have it i remade uh sorry give me two seconds i haven't been in here for a while i actually made the
[03:59:08]  exact example that he's talking about um i thought i did it in code sandbox let me see if i did it give me two seconds here okay this is uh this
[03:59:43]  is not it i this is me helping someone debug maybe a stack what's give me two seconds it just it'll help with the uh with the explanation sorry i haven't been
[03:59:53]  on this computer for such a long time um because i was traveling react 19 suspense that sounds like it okay check us out i'll show you i'll show you i'll
[04:00:09]  show you the issue right now so picture you have a component i love how long this is taking to load anyways picture you have a component and in your component you have a suspense
[04:00:24]  fallback and inside your suspense fallback you have component a component b and component a has a component c in it and i i just want fun had fun with this b has
[04:00:34]  d and e it doesn't matter i just put a bunch of components i made a tree at the bottom i have c which listens uses fetches something and then i have
[04:00:43]  d which fetches something and i have e that fetches something right so if you look at this hierarchy i have a spence up here and then i have some nested
[04:00:52]  components all siblings of each other some in separate sibling tree like branches that are all fetching data and with react 19 what ends up happening is i took a time stamp here
[04:01:04]  and then i subtracted the time stamp so this is how many milliseconds between each of these components um rendering if you actually see here that i write a div with the count i
[04:01:20]  call it but the count is where's my fetch function is literally the id of the thing plus the current time minus the start time and i'm i'm faking a
[04:01:34]  two second delay so these all are siblings doing a fetch and if i refresh this thing you can see that it takes six seconds for this to load because there's clearly two second
[04:01:48]  interval between them two four six in react 18 it did not work this way um in solid it does not work this way um but this was the change in react 19.
[04:02:01]  anywhere in the tree that hits a use or hits something async it just stops rendering there which means the next thing that hits async waterfalls and then the next thing water
[04:02:13] falls and essentially something where you know someone writing it might think oh it would be you know if every request took two two seconds it'd be parallelized to take two seconds
[04:02:22]  it's now suddenly six seconds yeah you only cared because react.lazy which is fair and but oh and this has the canary version react 18 yeah see i couldn't
[04:02:39]  go back to react 18 because react 18 didn't have use and i started doing stuff and i was like okay i'm not even gonna do this yeah to be honest this
[04:02:47]  is crazy yes this is this is this is this is like bonkers crazy like but it's it is and it isn't um i'll give you the crazy argument first because
[04:03:01]  i heard it firsthand those the guys over at react 3 fiber were uh one of the guys was at at the conference and he was like like this he's like this is
[04:03:10]  untenable he's like with react 3d 3 we actually build essentially all these async um resources like building textures building models but you know building part of the 3d graph
[04:03:24]  and they rely on transitions as a way of like having it really smoothly come in you know while this background process is it is happening however if every async thing waterfalls all
[04:03:38]  the parallel stuff waterfalls like basically he's like we don't have like you know half a dozen data async data fetches on a page we have hundreds of these as
[04:03:51] ync calls spread throughout the components setting up or setting up these resources he's like like this is just like non-starter right like can you picture having to like wait for each
[04:04:03]  mesh to you know to actualize before moving on to the next one um obviously uh they hadn't considered this um but like there are some people who were who are pretty upset
[04:04:21]  about it do you have to understand in some ways i at first i thought people are overreacting because let's face it in react doing this yes it goes to siblings but
[04:04:32]  if if if if if comp a if c was inside d was inside d if if we had children hierarchy yes react would be water falling already anyways like if you fetch data
[04:04:42]  in one component and then the child component fetches data you would have a waterfall in react you don't in solid but in react you do so like i was like okay at
[04:04:52]  first i was like i didn't understand it completely i was like maybe this is a shallow thing or like like like but no it's literally they block anywhere in the tree
[04:05:00]  and it makes sense because it makes it consistent with server rendering because on the server they don't need the parallelization they can just async await render to that point then render
[04:05:08]  to the next point and render to the next point um whereas if you and that's pretty efficient because nothing else updates but in the client as we can see this is a
[04:05:19]  little bit awkward and but i let's let's let's read a little bit for farther they are overreacting yeah i mean when i saw this and i was in the
[04:05:34]  meeting i was like i was like you guys this there's no way this sticks like this this has to they have to do something about this right um because people were getting
[04:05:44]  kind of worried right this is a great response from sophie albert discussion at react core team meeting say a few notes this was not motivated by rc versell but actually
[04:05:54]  facebook site which is faster this way due to less cpu load the simplification enabled several newer changes that would need weeks of plus work to get back even if desired okay let
[04:06:03] 's keep on reading the proper fix is a major refactor to be able to track multiple in-progress components without re-executing unnecessarily so we have
[04:06:13]  our best of both worlds until then we're left with two suboptimal options recognize the old ways better for react query users with lazy fetches new ways better for teams that
[04:06:21]  have already structured the code to initiate earlier fetches people who hyper optimized performance have already done this and have a higher ceiling do you did you just listen to what they said
[04:06:36]  just hoisted yes just hoisted i think this will help you understand why this is such a big deal i mean i myself when i reposted this said hopefully this doesn
[04:06:54] 't come as a surprise to anyone that the answer is you know no determining factor was that those already optimizing for performance hoisted the thing is hoisting makes a hell
[04:07:07]  of a lot of a sense it's the reason we have loaders in remix it's the reason why like react is so easy to write it wrong i mean especially if you
[04:07:22] 're not hoisting i told you the difference of the depth can make all the changes like react server component change it move a component around suddenly you have a waterfall right
[04:07:31]  you know i i hoisting is the only foolproof way to do this whether through some fancy compiler like relay but generally speaking you hoist the data fetching up
[04:07:46]  i've been saying this for ages but there was often opposition to this statement and you know where that opposition came from react no local data fetching is fine blah blah blah blah
[04:07:57]  blah blah blah and i guess they were talking about server components to be fair you know server waterfalls aren't as bad as other waterfalls but this is like an acknowledgement here
[04:08:08]  that they do hoist i i this is the first i've i've actually seen that because i mean i i was in a conversation like multiple twitter spaces with dan ab
[04:08:20] ramoff going on and on and on about how like hoisting is not a good solution to this problem and it's like oh yeah but we hoist like like
[04:08:28]  like this is as i said it should be obvious but but like a lot of people purposely did not you know like if you talk to the alex from trpc is
[04:08:43]  a perfect example like he like obviously this is a surprise this change he said i i hoisted intentionally when i knew there'd be a waterfall that's fine but like the
[04:08:55]  the whole tan stack query side of the world there's a whole basically push to people be only just local data fetch and the thing is reality is it could never be the optimal
[04:09:08]  solution especially with the way react blocks as i say not as i do now i don't know i can't find anything where the core team like in writing pretty much said
[04:09:22]  this stuff but there was when when i was kicking a fuss about waterfalls there was so many conversations saying like oh no locals better you just do it and i'm like well
[04:09:32]  you had to hoist on the client anyway like no no we never hoist on the client blah blah i'm just like you know but it's like of course facebook
[04:09:43]  or meta hoist like yeah i i i think the only people who have an illusion about this are like a certain you know group maybe group of people like on twitter or something
[04:09:57]  like like yeah relay doesn't work on the hoisting yet relay is i mean and that's been the thing right internally they have relay to do the hoisting
[04:10:18]  for them right so like yeah i haven't seen the latest video video so probably i guess yeah i'm a little late on this i was i was away but like the
[04:10:32]  the thing is i get why they made this decision right i hope you guys can get too let's let's look back in this example think about what react has to do in
[04:10:44]  this example let's pretend it's abc react is a re-render based framework so if if you've already hoisted your data and you get here and you go
[04:10:57]  render you go component a you see the async thing and you're like okay i can't go any further then you go to component b so you go to component a you
[04:11:08]  go to component c and then you go okay i see the async thing and you can't go any further and then they go to component b and then they go to component
[04:11:16]  d and they go okay i can't go any further and then they go to component e and then they go i can't go any further and then guess what happens a
[04:11:26]  comes back and guess what so then they go to component a and they're like okay sweet i can render it and they finish component a and then like i don't know
[04:11:36]  how many times in the cycle they do it i it would be interesting to test um the test with um um react 18 or an older version that actually had this behavior but my
[04:11:51]  point is because they have to do a re-render model they end up re-rendering as the stuff comes in they have no choice to so they render everything initially
[04:12:00]  and then they have to render it everything again when suspense finishes so they were thinking well what if we got to a and we just stopped now we we're not rendering b and
[04:12:11]  we're not rendering d and e and the rest of the component tree and then we continue and then we get to d and then we and then we stop you know like like
[04:12:24]  basically with this model they only have to render everything component once through the course of suspense they might have like re-render the component itself like when they like stop and then
[04:12:33]  they continue but they don't have to render the whole component tree under the suspense again and with the old model the model people want they basically were completely re-rendering the
[04:12:42]  tree you know some amount of times i don't know if it was with every resolution or if it was a certain amount but they were doing a lot of re-rendering
[04:12:51]  for stuff that no one will ever see so you know meta some of that work is expensive i guess right i'm you know even even if it's you know performance optimized
[04:13:12]  that there there must be a cost to rendering react components that's the second takeaway from from this that i found interesting because this is a you wouldn't make this optimization if
[04:13:25]  you didn't recognize that there's an an overhead to rendering react components even without doing the side effects even without doing the dom diff or whatever rendering in react has a cost
[04:13:40]  we like to pretend that it doesn't have a cost oh it's not important but it was enough for them to make this optimization a meta just putting it out there so yeah
[04:13:52]  i mean this is i found this situation very illuminating because it both acknowledged the need for hoisting and that react components in a vacuum have a real render cost that needs
[04:14:08]  to be considered at scale just i'm just throwing out there right like that would have been my hunch but i can't speak to meta scale but i'm glad they've
[04:14:25]  been able to speak for us it could be but like think about it what what's if their code is well written maybe it has a compiler in there or something they're
[04:14:36]  going to memoize the code they're going to have create the hooks are going to be there yes the the initial creation it's there but if you render it again and nothing
[04:14:46] 's changed then you're just pulling from the same source i would think maybe like maybe there's a technical piece i'm missing here on that that made this exceptionally more expensive
[04:14:57]  but otherwise i would think that they wouldn't have to do all the work on re-renders here either right like they don't have to run most of the app code
[04:15:14]  because like that's why react renders are cheap because they don't have to render you do all the app code work every single time that's why you have hooks right
[04:15:23]  like that's what makes it comparable because if if yeah if react had to run all the app code like every time it rendered it would be incredibly slow right wouldn't it
[04:15:36]  they they try to only run what changes right but is it the first render every time if it's the first render every time then yeah that i think that's pretty legit like
[04:15:50]  if if both when they do the first render because like you could argue that that first render doesn't matter that much like i made this argument actually with solid suspense solution because
[04:16:01]  if you're waiting on the async anyways yes the rest of the work is going off in the space but no one's waiting on it you know what i mean like but
[04:16:08]  if the second render like when the stuff comes back or any subsequent render when stuff comes back is like the first render again when suspense finishes then yes i could see why the expense
[04:16:19]  would be more right because then it would treat it not as re-renders i don't know if i want to look at this i'm gonna was this an actual
[04:16:35]  meme i mean i love it but was this an actual meme yeah uh anyway thank you for that um yeah i mean i don't think they care about re-renders
[04:17:14]  though the optimization about showing the fallback as quickly as possible yeah okay yeah i'll i'll i'll i'll yeah i'll accept that right as we said all the
[04:17:25]  pure stage stuff could be a blocker and they can't show the fallback until they've until the yeah you can't show the fallback until until you get to the
[04:17:38]  get to the end so they're literally seeing it they're probably literally seeing a gap between like very small maybe in the fraction like tens to hundreds of milliseconds between showing the
[04:17:49]  fallback for exceptionally large things okay yeah that makes sense to me yeah i mean it's interesting because like to be fair if you were to parallelize this you would still
[04:18:18]  have this delay to show the fallback i guess i guess i guess this is an interesting scenario in react land at meta where the synchronous work is so much that it can
[04:18:31]  actually delay like delay synchronous work which is pretty challenging right to deal with like if you're like because like the only way to look ahead is to render ahead right like there
[04:18:44] 's no avoiding that whether you're solid whether you're react whatever you're going to render ahead to look ahead i've taken that for granted from the perspective of that if i
[04:18:57]  render ahead i get to save that work next time when the data updates i don't have to re-render anything it's solid we render once but i was assuming that
[04:19:06]  react didn't want to go that way because obviously you know they'd have to redo a bunch of work but the argument that the initial sync data render was slow enough to delay
[04:19:22]  the fallback is interesting that being said it's kind of true of anything right like if that stuff wasn't async it would also take just as long to render so
[04:19:37]  yeah maybe it's just like one of those like cheeky little optimizations i love them too right you do that and then you're like you know you you get to save
[04:19:47]  at a place you wouldn't usually get to save so anyway still very very illuminating conversation i have to admit um okay i i let's finish this i think our document
[04:20:03]  today around how to structure your fetches when to fetch if not your server isn't good enough that's true ultimately i recognize your frustration for ourselves too but also recognize it's
[04:20:12]  not an easy fix that's better for everyone i wish i had better news to report but yeah good news we met we care a lot about spas team misjudged how
[04:20:20]  many people reliant on this today still recommend pre-loading but recognize not always practical find the whole night to release until we get a good fix yeah it is yeah
[04:20:42]  yeah there isn't like an amazing fixed for this though i don't think because you still got to render to render right and in any case i'm glad that like a
[04:21:01]  good outcome came out of it this is a great example of community outcry leading to something so yeah i'm trying to remember did i have any more notes um yeah no not
[04:21:11]  really people are asking i don't get a react moved away from their loader like poc well the problem is this doesn't feel natural yeah i mean it's hard
[04:21:24]  to be too prescriptive around data fetching patterns people have to have some choice and at the core level i can understand why react wouldn't want to do that all
[04:21:36]  right um okay it's funny this is a mixed bag today so we're just going to wrap up on this weekend javascript then i'm just gonna i don't have
[04:21:47]  a header today we're just going to continue with some of the posts i put aside um so let's let's continue along that we talked about benchmarking we talked about the
[04:21:58]  compiler um yeah yeah everyone likes that demo my problem is i think everyone who likes that demo has no clue about rscs it's it's kind of unfortunate i i
[04:22:15]  i can understand why the react team was kind of hesitant here and then they're like okay well remix is at least adopting them you know maybe this will you know change the
[04:22:24]  narrative it's just it's like there's so much not yeah i i'm i'm it's it's it's it's kind of interesting because it's an example where
[04:22:35]  people are like yeah this is how they should have been and it's like actually no you know next has rscs mostly right there's some details but like there's a
[04:22:48]  reason they are the way they are and it's if they weren't that way then you'd probably want a different solution okay so let me let me open up a few
[04:23:04]  other things here just a second i want to make sure i got my stuff so i got let's let's go boom boom boom good we okay just give me a second i
[04:23:17]  got one on bookmarks one on my profile and then i'm going to put one on solidjs okay cool i mean it's it's one of those like i i
[04:23:38]  guess i'm just talking from a purist standpoint it like it's kind of think of a good analogy for this because it's like it remix is fine it's just
[04:23:56]  like there's a reacts trying to introduce a new architecture one that i would argue is as significant as moving to single page apps in the first place from rails and and like people
[04:24:08]  are just like not getting that point well i mean this is what i've been struggling with like don't think that like what remix is doing isn't like what remix did
[04:24:26]  is actually very similar to what nuxt did actually and some degree what waku tried to do initially um like this isn't new news to me i know it helped people
[04:24:37]  and ryan florence is a great speaker but like this lakes thing has been floating around even jamie kyle um you know when they were at the critter
[04:24:46]  babble or whatever he was on twitter saying like this is how i want server components to be and he was basically describing the this solution like two two years ago this is like
[04:24:56]  there's a reason they're not like that you know what i mean like so it's like it's it's it's backwards and the primary benefit like i was talking
[04:25:13]  earlier about pushing the interactivity to the leaves or thin layers this puts the interactivity at the root it's like it's it's just doesn't at least with their guarantees
[04:25:25]  in terms of loaders um like in terms of it being at the route level you don't have to worry about uh fetch cascades which is a problem when people
[04:25:33]  just let anyone interject server components anywhere but the challenge again is like the layouts become client components which makes no sense right i i i if they support use client as well then i
[04:25:46]  i mean it's fine i would just build my remix apps the same way that i build my next apps and just basically forget that there's a default export and just build
[04:25:56]  build everything from the loader right like that's that's essentially you want the root to be but then i'd be using use client in there as well like projecting server content
[04:26:09]  the client content having client content projects server being projected into the server content is is fine but it also like it's like the it's the wrong banding yeah i don
[04:26:24] 't it's fine um anyways okay let me just scroll up and see where what i want to talk about yeah let's get back to here where are we uh no the
[04:26:59]  their loaders return server components i i showed this a bit last stream but essentially you you have a remix loader it returns it can return server components and then basically when
[04:27:10]  you use your loader data when you go like use loader data you get server components back and then you can inject those into your client page yeah yeah it's it's
[04:27:20]  a migration path version but like i anyone's with falling stream i've been spending a year trying to figure out if there's a hybrid universal model um it that's not it
[04:27:35]  like i mean it's it's fine but it also it defeats the purpose of server components enough that i don't think it matters like that's the way i'd implement
[04:27:43]  server components if i want to be like hey guys i got server components okay okay like like it's novel but it's also kind of like uh who cares like i i mean
[04:27:57]  if that's their intention with that they are freaking geniuses because you don't really adopt the composability in the same way when you do that way i i mean i
[04:28:08]  already said that i don't think server components are actually composable so like that aligns i think me and ryan florence agree about a lot of things so i
[04:28:15]  don't know but like if i was being a pessimistic kind kind of sarcastic kind of person here i i might even take this approach as just a way of plac
[04:28:24] ating people when they don't actually really believe in them maybe like if you're not going to be a pessimistic kind of person you're not going to be a pessim
[04:28:37] istic kind of like you're not going to be a pessimistic kind of person you're not going to be a pessimistic kind of person you're not going to be a
[04:28:42]  pessimistic kind of person you're not going to be a pessimistic kind of person you're not going to be a pessimistic kind of person you're not going to be
[04:28:45]  a pessimistic kind of person but i think that's a problem for any react framework right now is that and this includes astro to a degree people go well i want
[04:28:54]  to choose a react framework because react tells me to choose a framework so i want to choose a framework that i know will support react into the future and if you don't support
[04:29:03]  rscs or you aren't fully react it's like a bad stigma like if you're you know where if you go oh i want to support react the best way
[04:29:13]  possible i have to use next.js because next.js supports blank if remix doesn't support the stuff coming from the react core team along those lines it looks like they're
[04:29:23]  not the the the blessed path so it's it's it's it's an interesting tension to walk right and as it affects astro because on a certain degree like astro
[04:29:35]  will never be the best way to create react apps from react's perspective they'll never vet it there's a reason it's not on the first page of the docs when
[04:29:43]  you go into how to they recommend gatsby remix and next astros on the other page you know what i mean like like nobody wants to be pushed off onto that other
[04:29:53]  page so like i i do think that like there's you know you can drag your feet for a while you can you know do whatever needs to be done but like i
[04:30:07]  i do get that sense yeah yeah i i definitely agree but on the other hand i don't know who it's not like you can blame one side either way react has been
[04:30:22]  building all this like at the same time remix was building all these apis react core was also building them it's not like i know react released them later but we all
[04:30:31]  knew they were coming right i knew this because react actually released documents showing you know what what's coming working groups all these kind of things so when i built a bunch of features
[04:30:46]  into solid i caught i kind of copied inspired by react whatever you want to take into adding transitions and stuff but then we released them and then we built our whole ecosystem including
[04:30:57]  the router on these primitives back in 2019 2020. so at the exact same time remix was building all their features i was sitting there building the exact same features or our versions
[04:31:06]  into solid into solid router except i had the primitives that were coming in react years later so you know stuff that hasn't even come completely now because we're seeing like
[04:31:17]  the gap on the client side data fetching story i had clients on data fetching story so like i watched this play out and the whole time it was like oh man all
[04:31:26]  these really cool things they do with action all that you literally would go like use transaction and you delete like three quarters of the code you know their transition loading states again suspense it
[04:31:36] 's like all these things were but they couldn't access them because they weren't ready so they're they were in a really hard place do you wait for react or do
[04:31:44]  you build different versions so while react team is very gracious in yeah and there were influences definitely like remix's direction helped shape i think optimistic updates from remix everyone copied everyone knew my
[04:31:58]  gut is everyone knew there was going to be something like actions right it was obvious to me in 2020 when i first added you know the rpc style versions to solid
[04:32:10]  start we had we had or was it you know 2021 we had a version of server actions they weren't compiled but they were uh proxy based like right from 2021 and like it
[04:32:22]  was i think people could kind of feel that that was the direction the react core team has got a good pulse on this but i think like the optimistic updates remix showed with
[04:32:31]  the progressive enhancement was genius and i think like i think stuff did back influence them but i think react was already on this thing they knew they needed nested routing they knew they
[04:32:39]  needed these pieces i knew i needed these pieces i think it was dead obvious but the problem is remix couldn't wait for react to deliver these pieces even though everyone knew that react
[04:32:48]  was building this stuff right so like this is yeah i don't know much about react actions how do they different from our actions i i didn't really catch the the difference
[04:33:12]  um i probably should look into that i saw the release and i was just like okay i saw that they had a way to like natively support stuff but i didn't look
[04:33:20]  too close into it right but the uh yeah yeah i mean it's a tricky place to be in when when talking about like the remix scenario um yeah to be okay sorry
[04:33:46]  i missed this part yeah taint is tricky in general because there's you can like we like we were playing with something with bling on a compiler side but you also
[04:33:53]  have to to handle references coming out you have to tell the serializer in our case and react case i think we own the serializer so like we have some power there i
[04:34:03] 've just talked to alexis to see if we can do something like taint right at the serializer level i think that's really the only way to go again
[04:34:16]  this is advantage of being dialed into the core team oh yeah yeah yeah oh yeah they added oh you're talking about the zod stuff right right right yeah yeah that makes sense
[04:34:34]  yeah yeah i mean the the protocol for server rpcs is framework agnostic you don't actually need that's why we were building bling you don't need
[04:34:43]  to be tied to a framework but actions are tied to routing right so if you have a react or solid framework they they have to be somewhat router aware so yeah i don't
[04:34:57]  i don't see how you do it in a framework agnostic way unless your framework is framework agnostic to begin with like astro is right like they can do
[04:35:06]  it because it's tied to aster's approach to routing yeah that makes sense but yeah the zod validations is clever it's tricky it's one of those things that
[04:35:17]  it's like i don't know sometimes adding like we we have a version with zod validations in our ecosystem i think it's called prpc which takes our server functions
[04:35:28]  adds on validations but it's like building that core is making a bigger something well first it assumes zod and to a certain degree i don't know they they i'm
[04:35:37]  sure they can make it extensible like for example big i'm big on the valibot uh on on this side you know it's extremely smaller and i think it's
[04:35:47]  faster too than zod like tying to specific libraries is a dangerous proposition um you have to consider about but anyway let's i'm i'm i'm i'm i'm just
[04:35:57]  diving down specific let's let's keep on moving on um uh anyways yeah so i got a few more let's let's get get a few more discussions see if there's
[04:36:12]  any more hot topics we want to talk about right okay so what when did i last stream let's keep on going um pitch solid at amazon that's cool um i
[04:36:37]  don't know why i grabbed this adam rakus post he complains about everything he's talking about how caching invalidation is really poor with rscs and uh it
[04:36:48] 's just because the render model everything needs to be cached i'm not worried about that we already talked about okay this is a good this is a good this is a good
[04:36:55]  tweet i think it's important because it's related to what we were talking about with suspense we never released official suspense board in the client because it leads to client waterfalls instead
[04:37:04]  we shift it to an rc strategy i'll let you read between the lines oh man tk dodo is great okay everyone you can use suspense for data fetching
[04:37:16]  now okay i get what he's saying on like seb working through rscs working through this stuff i i've heard this from dan too they were they they were not happy
[04:37:31]  with data fetching waterfalls which is why they've never made like a create resource api or like they never made like a you know like the like we had they
[04:37:38]  they showed a hypothetical one in one of their early experiments but they never released it so from that perspective even used didn't come out until react 19. so like from that perspective
[04:37:47]  i can see what he's saying here what's interesting though is that they did trying to support third-party libraries like react query be all like hey you guys you can
[04:38:00]  uh you know use suspense today simply by using lazy or use one of our partners and they push people to use if they want to use suspense to use react query use you know
[04:38:11]  a few of the other libraries out there and i remember that i remember them being like really excited like but look we support suspense and like it was the only way to use
[04:38:19]  suspense and react during the react 18 time period so while i get that they said it wasn't official there was definitely like messaging that was like you can use suspense today with these
[04:38:30]  solutions in the clients so yeah i can understand why it's awkward from the ecosystem standpoint but it's also like yeah i i think it's i think it's interesting i
[04:38:48]  i i i think perspectives have changed a lot over the last couple years and i think people probably need to kind of acknowledge that even the react team is learning right i'm
[04:39:07]  very thankful that react rolled back in 19 suspense gate we're willing to work with us i think the future is bright as ever now this is where i go next i'm increasingly
[04:39:17]  concerned how much react is pushing render as you fetch hoisting plus pre-loading as the blessed and last week almost required too soon approach for client-side data
[04:39:25]  fetching despite the current state of the ecosystem regardless of the library used to fetch client-side data if you're not using a framework ssr level route loader or
[04:39:33]  async trend arm your solution probably resembles some kind of hook i'm happy about the concern for blah blah relay is one of the few libraries you could argue uh co-loc
[04:39:42] ation on the hand feels natural blah blah blah you've got server components for film nicely my point is rcs are not the only answer to co-located data fetching
[04:39:48]  honestly still requires some kind of hoisting convention blah blah blah i'd like to see more attention going to retaining something awesome dx being of the co-locate data
[04:39:57]  requirements uses that's why i'm blah blah blah i'm sorry yeah this is a great post from tanner please don't kill co-location well i i will
[04:40:21]  say to him this much while they shouldn't kill it it's it's it's never going to be guaranteed to be optimal and usually the mental overhead of knowing that is probably
[04:40:32]  not worth it yeah i i we don't have to kill it but we have to be aware that it's probably not great i know everyone pushed this way but like i
[04:40:45]  think the rebix guys were some of the first in the react community to really be like we need loaders you know but it took them a while to even get them into
[04:40:53]  the router right whereas like svelte um solid other we already knew this and we'd already like knew that this was valuable even on the client side i think everyone knew this
[04:41:06]  or should have i don't know how the dialogue got so far where people thought they couldn't didn't need to hoist it's kind of crazy to me but it
[04:41:15]  is what it is uh we had aiden here earlier i should have asked him what this meant i i am i know what it means he's he was just saying he remember
[04:41:29]  i told you before earlier in the stream that i couldn't figure out how to look at react compiler and figure out what actually runs because i couldn't introspect because the
[04:41:39]  compiler would remove all my introspection it looks like aiden's found a way around it um where he's using his own compiler tricks probably and his own profiler to
[04:41:49]  actually be able to tell you what the hell's going on here which is actually just lovely because this is this is pretty cool obviously this is for his performance um tool that he
[04:41:59] 's building with million to help increase the performance of your react app to show you where those pitfalls are but um yes thank you aiden for i think if i i
[04:42:08]  should look at this a bit more so i can actually show the difference between reactive rendering and solids rendering i wonder if the way i could like use his tool on solid as well
[04:42:17]  and then we could compare straight up because my i think that might be the only way that i could barely show the difference between signals and that there is a difference i just
[04:42:28]  can't show it but this would show the difference no people co-locate for because if your tree gets bigger or large enough you start getting duplication when you split anyone
[04:42:44]  who's used large mvc applications especially stuff that we're doing around like 2010 on the client you get to a point where you're like recreating if you're
[04:42:55]  not careful you you're recreating like view state in this other tree if you don't co-locate there's definitely imbalance here the things aren't one for one like
[04:43:05]  there's overlap i don't think we kill all co-location but i think data fetching does need to be hoisted up to appropriate nodes that's my perspective
[04:43:14]  but otherwise if you if you pull out too much there's a lot of duplication that sounds like a lot of fun there's a certain chicken and the egg problem i'm
[04:43:38]  going to identify with react on this side dev tools might if they waited for everything to be ready no one would adopt like it would take forever like they need people to be
[04:43:48]  on board to help build these things part of this you saw with hooks too they rely on the community to propagate stuff in out there i rely on the community like sure react's
[04:44:01]  development manpower might be in the ballpark like the like actual paid people around meta and vercell working on react might be in the ballpark of you know let's
[04:44:11]  let's estimate about 50 times more resources than i have working on salt maybe 80 times more but even with that many resources you can't get everything perfect you need the community is
[04:44:27]  like a 10 10 000 x multiplier on this you know what i mean like so i think they released rscs at a fairly reasonable time that i think they have to
[04:44:38]  be careful around messaging and what was production ready but other than that they had to get them out there at that time to get to the adoption where they are now yeah next
[04:44:50]  as a product has to worry about that react as a core team i think tried to get stuff out at a reasonable rate right what else we got here i wonder yeah do we
[04:45:08]  want to talk about that yet yeah okay yeah let me look here some solid stuff more components i love the ecosystem just keeps on growing every time i look there's like a
[04:45:20]  new template okay official solid start template code sandbox lovely um i'm just doing some solid news um for a moment qtui solid rendering native c plus i i get it
[04:45:35]  giggles every time i see people do crazy stuff like this or like because like who would have thought a javascript framework was going to be running native code and you know i
[04:45:44]  know react does this but a lot of people also thought it was because react vdom well news it's not and it's just so cool to build something you know as a
[04:45:52]  javascript developer who you know just builds websites and then see people make like these native app applications and you're just like this is this is nuts anyway um i don't
[04:46:04]  even know what this means but maybe someone in chat can tell me i think solid js is the apex twins of frameworks real people get it is fired everyone's super underrated thanks
[04:46:15]  ben holmes i think that's really high praise i just don't know anything about it um yeah see primatic dropping drop all all these posts are people porting libraries i
[04:46:30] 'm i'm i'm stoked for our ecosystem our weakness on ecosystem obviously is jobs and training and teaching and that side of things but the libraries just keep on coming yeah i
[04:46:44]  have no clue absolutely no clue i uh it's a less known electronic band okay i i i i i listen to punk rock heavy metal and like death metal i i don
[04:47:04] 't and and some amount of pop but yeah i don't know electronic and i don't know hip-hop or rap or whatever um um yeah i don't know people could
[04:47:28]  there's there's okay i guess we're just caught up here oh one more shout out i uh which kind of cool i don't know the team of voxel
[04:47:36] op deployed vote compass for the upcoming election answer the number of questions to learn so the the uk election company software is built in solid that's that's a lot of users i
[04:47:47] 'm excited to see this in action anyway okay that's my solid news update let's uh let's go back to a couple more um let's talk about js survey came in
[04:48:02]  js i made a solid website for someone and he made me remake it because of a auth library like clerk okay but it wasn't clerk because i think we have good
[04:48:16]  solutions in the clerk space um are reasonable ones but yeah if they will it's interesting i guess very specific libraries makes things hard so like if there's like a specific requirement
[04:48:36]  yeah i i did i did that earlier we actually started the stream with that solid with quickify yeah i i'm actually interested the other way around it's funny before quick
[04:48:56] ify came out or anything that i showed i made a quote sandbox to show how it could be done with solid i wrote it like three years ago i'm just i getting
[04:49:04]  reacts ecosystem libraries is like mostly the last thing you want to do i understand in that case that's probably like where you want to be i guess you have no choice unfortunately but
[04:49:17]  like you don't want the preact thing to happen you don't want everyone just to like start using react libraries and not building libraries there because react libraries will never be
[04:49:25]  the good solution for you ever so it's like it's really awkward right like think about quick like small fast partial and then you get react and just like go like it's
[04:49:35]  like the antithesis like if someone has to use a react library like you're like okay i begrudgingly accept it but it's like like the last thing
[04:49:45]  a quick app wants on its page is anything react maybe hard to say uh i'm hoping it will have to be after beat six the reason solid start is the way that it
[04:50:01]  is is largely because um we needed multiple builds and environments and getting that in dev and nitro is difficult um so we can't have dev and nitro which means we
[04:50:11]  can't have full nitro and hence the whole thing beat six will is a big part of changing that like we needed what vinci does in order to power the stuff we
[04:50:20]  do which means that like yeah we need feet to upgrade to the nitro update i'm glad that vinci has influenced beat so that we can do it but until that happens
[04:50:29]  it's like just not possible it's probably a pumpkin nudity all right anyway uh we got a couple more before i'm done here uh js framework uh or js survey
[04:50:56]  came out again i see that rich harris likes my view of the chart it's funny back in the day they only had rank they did not have um value so it
[04:51:08]  was always these very defined differences and he's saying svelte is the most inter inter uh interesting framework um consistently since it came out which is pretty cool it means that of
[04:51:21]  people who have not used it people are interested in learning it um if you look for solid solid was third was second a couple years ago last year was third behind quick and
[04:51:37]  then is back to second again this year so it's the this is a really good metric to show that people like the uh onboarding uh part of your marketing is working like
[04:51:48]  that people who who who haven't used your framework before really are interested in it i mean um yeah is this interesting positivity yeah yeah and i i think it makes a lot
[04:52:04]  of sense i think svelte is one of the more interesting solutions out there um definitely from that perspective um i i i also did a did one of those uh ones
[04:52:18]  as well um this used to be the front page it used to be satisfaction um and this is so this is the metric we care about on the solid side felt interest i think
[04:52:29]  that salt so retention is based on of people who have used it who would use it again like who liked using it um and again when you have a smaller user base this makes
[04:52:39]  sense but um it means that solid for the third year in a row users of solid are the are the happiest um users felt is right behind like we're basically neck and
[04:52:50]  neck on interest and and uh on satisfaction so i'm not i'm like not surprised felt is more known to people so more people are interested in learning about it solid has smaller
[04:53:03]  user base that's felt so more people are happy using it so it's it's it's it's kind of here nor there um but it was fun looking at the
[04:53:12]  survey i don't have time to go too deep into it but um there are parts of the survey that have made me a little bit more pessimistic um it's about all
[04:53:25]  those people who who like jsi cells people that don't basically so is a great thing for wordpress folk that need more you guys are just okay in any case um i
[04:53:40]  don't know one thing that's alarming is something let's see if i can pull this up real quick js state of fred k scott tipped me off onto something
[04:53:56]  and i think this is really worth talking about in terms of libraries here there's this no where is it um i want to this chart if you've i want to just
[04:54:11]  talk about this for a moment fred pays a lot of attention to this because generally speaking you start down here and neutral in terms of negative opinions and then you you want to
[04:54:25]  get to positive opinions as your usage goes up right if you're really high up here it's natural that as your usage goes up things swing back it's a it's a
[04:54:34]  crescent so to speak and you know you can see some interesting frameworks like that kind of just go like this off the thing that concerns me and fred mentioned it too
[04:54:47]  is frameworks the sentiment is going more like we should be heading this way in this arc and if you look at it a perfect example is v test and i think this one
[04:55:00]  here is beat right where you see these things arcing up like this but that's not what's happened playwright's another one that's not what's happening right now what
[04:55:10]  we're seeing is a lot of frame a lot of tools are turning further left sooner than they should be what would like i don't know is that svelte um
[04:55:19]  turbo repo this lower corner used to be full of hope but look at this here's solid june we're already boomeranging back according to this slightly not much but it
[04:55:35] 's something that i'm looking at tori's okay look at remix remix is just going straight backwards um quick is just going straight backwards like i i think this sentiment down
[04:55:48]  here in this corner turbo pack straight backwards turbo repo less so i think people right now are less accepting of new things this year and i think this might look well svel
[04:56:04] te kit boomeranging too this last year was hopeful everything was kind of coming up curving up this year things with exception to a few things like look astro is still
[04:56:14]  positive but most of these early projects now are boomeranging back hard and or like as i said they're just like going straight backwards like remix or quick is and it's
[04:56:25]  like it's kind of concerning i'm going to put out there the huge one going back i mean webhack what else are mocha ones that are going back down
[04:56:35]  are like the worst parcel another one gatsby cordova but being here isn't even bad this is expected this is your end of life cycle if you're at the top
[04:56:51]  heading backwards you did a good job like you get the standing ovation on the way back it's very troubling when the this side can't keep going and then get pushed
[04:57:02]  over too soon it's very troubling yeah yeah i yeah yeah people yeah yeah i mean the ones that are most concerning obviously if you go straight back but like this is i
[04:57:25] 'm hoping things pull out of it but right now it looks like in general people are less open to new solutions as they were the last two years which is something that i keep
[04:57:34]  my eye on anyways that that's that's my takeaway here um so i don't know i'm i'm i'm i'm paying attention to this for all the good
[04:57:47]  stuff you know that's in here there is that okay um okay we talked about stated javascript we talked okay that's good on that let me look at my solid i
[04:58:00]  think i'm just on bookmarks now um oh no there's one more yeah so this was an interesting conversation i don't know how to get into it but it is about
[04:58:11]  this right where why do you think svelte is not more popular given these constantly positive results and then people like ecosystem is hard it's been five years this discount it's
[04:58:19]  been more than five years been like seven years with salt but five years since salt 3. this discount you pride at the start not a reason you would never hear someone say angular
[04:58:26]  has a huge vendor lock-in in a conversation people love salt why is it not adopted frequently people want to use felt but the business reality seems that cycle update new
[04:58:35]  frameworks for longer than a few years again historically this is not true but even greenfield projects are not rare and not subject to this limitation he's right people aren't choosing new
[04:58:44]  frameworks for greenfield which is crazy i talked about this before my naive assumption that it does not have to feature maturity for another place but i want more important no it's
[04:58:53]  not that but if you look the last eight years it's more than technology or features when you consider how quickly people adopted react back in 2014 compared to the maturity of the tools
[04:59:01]  right now and it isn't even close modern tools are miles ahead in that regard people job market wants stability there's a perception that js is constantly evolving because it is and it
[04:59:08]  isn't a fear about best practices react changes every few years they just want to go to the answer to go to answer to consolidate what's rich say here question of saturation
[04:59:18]  yeah i mean it's kind it is mind-boggling this changes sentiment right it's like people were pessimistic and then they were kind of hopeful but now they're
[04:59:31]  pessimistic again because the economy probably they're not trying new things and i think that like yeah this is just it's a tricky place to be in that people aren't
[04:59:41]  even choosing arguably better solutions for greenfield um we talked about the compiler tenor i don't have much to say this he's basically describing something we hadn't solved for years
[04:59:55]  which i already talked about um okay that just leaves one thing i think there's such a way to use reactions when they're packed for almost everything well the funny thing is
[05:00:09]  react set what those everythings were there wasn't a package for everything when people adopted react there wasn't even for the first three or four years it's just and the packages
[05:00:17]  that matter react actually do change rapidly over time you know like i always use shats the and as an example where it's like came out of nowhere and then everyone had to
[05:00:26]  use it so it's like i i i don't know no one got fired for selecting view in 2014 people got fired because they selected view 2 in 2020. yeah exactly
[05:00:42]  but yeah it is weird um what do i got i'm glad there type of syntax discussion now you know i've tried to explain why solid work the way it does for ages
[05:00:55]  and was met with developer has to write parentheses yeah that's because it's consistent was actually happening yeah this is just there's been some syntax conversations i'm glad that that
[05:01:05]  the that they're they're switching around this is my last little bit i don't really care about syntax that much like when someone goes which one of these seems more like h
[05:01:13] tml you know this or this like this is such a loaded question because obviously this is syntactic html but this v model is whatever the hell that is and then
[05:01:28]  this obviously is jsx so it isn't it isn't but it's like who cares like i i think when people ask this question they're sort of implying that
[05:01:38]  people actually care that it's like html where 99 of the cases it doesn't matter it's like html what's actually interesting is what v model is but
[05:01:46]  you know whatever you know like we all like ref in jsx what the hell is that like there's always some kind of special thing so i don't know i so
[05:01:57]  like this is an example of the type of syntax conversations that i get pulled into that really don't matter this is this is an interesting conversation because because there there's a conversation
[05:02:12]  where evan said something about low cognitive overhead of assignment base directory also compiler approach is too magical work against hand tissue works well for svelte's audience with blah blah blah
[05:02:22]  because they were talking about why viewed into the ref sugar like svelte style and then rich you know and evan's like composition api works exactly the same in
[05:02:31]  and outside of view components and then he showed this example which is kind of mind-boggling rich was like look if i render uppercase it works but if i
[05:02:42]  put message here it does object object and you're like but message is a computed why doesn't it automatically unwrap but you can but message lowercase is also ref and
[05:02:54]  yet i can call a function on it and treat it like it isn't actually like where's the dot value you know where's the function call like this is kind of bon
[05:03:05] kers that this works almost exactly the opposite way like they actually see the symbol and compile it but here they don't i don't even know how this works um to be
[05:03:15]  honest right when obviously he shows in svelte it's the same in both cases but it is an interesting thing that svelte is all magic all the time and it
[05:03:28]  comes with those limitations that they've classically had so i don't know i i'm glad this is where conversations have gone on syntax unless of this although to be fair
[05:03:47]  this has a thousand views at this point i probably aided in that where this conversation probably has 80 so i don't know i want more of this because i think syntax
[05:03:57]  for a reason is interesting i think this actually is completely pointless i actually responded to this just to be facetious just to be kind of annoying where i was just like seems
[05:04:09]  like html definitely is it desirable to have something seem like it's not because like let's face it this stuff all gets compiled to javascript in the end who
[05:04:16]  cares and some people brought up no build reasons and all this but like like sure you know and if if people but let's face it if you're using view you're
[05:04:27]  either if using no build you're probably not going to use jsx anyways you're going to use like htm by preact or whatever and if you're using view
[05:04:34]  you're going to use a build step and you're going to compile this stuff to crap anyways to get the performance and the bundle you want so it's like this is like
[05:04:42]  the most meaningless difference in the world b model is worth arguing over the fact that this is html does not matter but i think it's like it's like a
[05:04:52]  lot of people who like a think that alpine and b are a viable option yeah that's funny self is simple and complex solid is harder and simple view is the middle
[05:05:15]  yeah kind of salt five is going to be interesting because it's kind of like solid but like a tiny bit more magical i don't i that's going to put in
[05:05:23]  a really weird place for view because it's yeah i don't know i guess we're gonna have to see how that plays out anyways i gotta go it is after five we
[05:05:33] 've been going for five hours i've been going too long but you know it's been a while i missed you guys so clearly you know pretty clear at this point because
[05:05:46]  given how long i've been streaming here there was more content than i thought i sort of got lost in the weeds a little bit on some of the async stuff but you
[05:05:54]  know it happens um i'm hoping you got something out of it i've been exploring this stuff it's interesting to me i'm really excited about the future here but i
[05:06:04]  recognize that there's a lot of pitfalls potentially so i i appreciate brainstorming this stuff with everyone oh did sorry did rich ever respond to that um let me see i
[05:06:22] 'm to be precise i meant script section more he's saying that yeah what evan's argument is is that inside the template you're like in a different zone that has different
[05:06:36]  rules and i i can argue that there's a clear boundary here whereas just random javascript file kind of thing is not as clear of a boundary i guess dots felt is
[05:06:44]  a clear boundary but he's saying like you know templates can are allowed templates are allowed to have different rules and i'm going to generally agree with him this one doesn't
[05:06:53]  make sense to me because i don't do this as purely a template thing when like like i'm trying to work that out but in general i do agree that templates are allowed
[05:07:03]  to have different rules anyways um yeah sorry i realize i'm not sharing my screen right now you probably didn't see what i was saying but yeah uh all good you guys have
[05:07:14]  a great weekend um i will oh next weekend next week's a holiday so i won't have a stream next friday but hopefully you'll see me the week after okay
[05:07:25]  so until next time all right