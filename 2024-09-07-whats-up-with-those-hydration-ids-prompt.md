---
showLink: "https://www.youtube.com/watch?v=776vUMP16Fo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "What's up with those Hydration IDs?"
description: ""
publishDate: "2024-09-07"
coverImage: "https://i.ytimg.com/vi/776vUMP16Fo/maxresdefault.jpg"
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

[00:00:00]  All right, how's everyone doing today? I am rushing to get set up here because I have a new computer. A little secret, I do my streaming not on my
[00:00:18]  personal computer, but generally on my work computer so that I can leverage the more powerful CPU. My personal computer is still like a first-gen M1 MacBook Air.
[00:00:32]  Those things are just honestly amazing. But I think my latest work computer is like an M3 Max Pro or something, so much, much, much more powerful, which is
[00:00:51]  good for the video content stuff, things not dying out on me. Sorry, just pouring my coconut water here. How are you all doing today? Yeah, I
[00:01:02]  don't have the splash screen set up on this computer, so that's why I was late. All right, let's see if I can... Hmm. Ah,
[00:01:20]  there we go. Audio's a bit quiet. Let's see if I can adjust my mic up. Oh, yeah, it was one setting lower than I usually do
[00:01:42]  it. How's it going? Is that better? All right, what do we got here? About the change to hydration, can I confirm the backwards compatible with solid start
[00:01:54] ? Yeah, this change is just in the internal generation that solid produces, but we'll talk about it a bit. It's actually kind of peripheral to what we're
[00:02:08]  talking about here. Like, I didn't really change anything fundamental. All right, yeah, people coming in, people saying hi? Yeah. Sounds good? Okay,
[00:02:22]  that's good to know. Let me see if I can get my Twitch channel up, just in case anyone watches on there. With the product teams, which I think
[00:02:32]  is also such a valuable way to balance out. I've never actually... There we go. I have not signed into Twitch on this computer before, so... Authentic
[00:02:45] ator app? Oh, guys, sorry. Just give me a moment. It's kind of like this, you know. I'll give you guys a moment to join
[00:03:00]  the stream. You know, I didn't have that splash screen today, so I think fair is fair. But, yeah, let me... Let me see if I can
[00:03:09]  get in here. All right. All right. I'm in Twitch now. Let's see people on the channel. There we go. Let's see people on the
[00:03:31]  channel. All right. Audio is good. Okay. I am good. Are you guys good? How are you doing? All right. So, yeah. Mixed
[00:03:52]  bag of things. Great. Pumped. It looks like there's actually a border on my OBS window. I know I shouldn't be too picky on this stuff,
[00:04:04]  but it's like, why is it there? It's like the tiniest little smidgen of... It's like the tiniest little smidgen
[00:04:13]  of... It's like the tiniest little smidgen of... It's like the tiniest little smidgen of... It's like the tiniest
[00:04:15]  little smidgen of... It's like the tiniest little smidgen of... It's like the tiniest little smidgen of... It's like
[00:04:16]  the tiniest little smidgen of... It's like the tiniest little smidgen of... I was doing OBS for this before. That's
[00:04:32]  how... I literally... I'm still using StreamYard, but I'm literally using OBS just for the virtual cameras to do my green screen. Right. I got
[00:04:40]  a haircut. Not a real room called it. Yeah, exactly. Yeah. I mean, technically it is my real room, but it's from a different angle.
[00:04:54]  My desk sits at the window, and this picture is taken from like the corner where you can see the window. Like, it looks like the window is to my side,
[00:05:01]  where the window is actually in front of me. So, this way I can show off my awesome Lego collection. Yeah. Okay. So, basically, there's a few
[00:05:16]  things that I want to cover, talk about today. Hydration ID seemed like the thing to draw, you know, like, to talk about. But this actually
[00:05:24]  came to head because of... a benchmark. And, you know, I love benchmarks. So, we're actually going to look at this benchmark in more detail than pretty
[00:05:44]  much anyone else, even the article that covered it did. Just to kind of get an idea of what was going on. Because, honestly, if you were trying to
[00:05:53] , like, follow this benchmark, and I'll show you which benchmark. Oh, do you know what's going to happen to me? Oh, I feel so embarrassed.
[00:06:00]  I'm going to try and present my screen right now, and then it's going to tell me that I need to restart Chrome. I'm predicting it right now.
[00:06:08]  Let's see what happens. I'm going to share my entire screen. Oh, no. We're good. How did that happen? Isn't that amazing? Okay.
[00:06:21]  Well, first for everything. Anyway, I'm trying to think of the quickest way to get to the actual benchmark. And I think it was... I think we rep
[00:06:37] osted it initially, but then it got deleted. That's the thing. I'm probably not going to be able to find the initial article because they recanted it.
[00:06:52]  Yeah, I mean, I'm not... It just doesn't exist anymore, so... But, essentially, the guys from Fastify did an SSR benchmark, and
[00:07:02]  the... Yeah, I mean, it was... Don't get me wrong. The benchmark was, like, a little bit annoying. I was, like, working on some
[00:07:14]  stuff with Solid Start, or not Solid Start, but Solid 2.0, and then it was like, oh, here's a stupid benchmark. I'm like,
[00:07:19]  oh, man, I'm just trying to get stuff put together for, you know, I was, like, I was already busy enough. I was trying to, like
[00:07:26] , secure funding for the hackathon and, like, all this other stuff, and then it's, like, benchmark. But, to be fair, I've done this
[00:07:34]  sort of benchmark a lot. Marco had a very similar benchmark called the isomorphic.js benchmark or something, and I was pretty confident when I saw the benchmark.
[00:07:51]  I was, like, okay, the results I saw made sense, but the problem was I didn't look at the benchmark very closely at all. And that was probably
[00:08:01]  to my detriment a bit here, because, let me see, what did I post when, let me see if I can get back to this original posting. Because if
[00:08:14]  I'm correct, the benchmark... Yeah, yeah, yeah. Yeah, I didn't really... I didn't really end up talking about this benchmark until Rich went in and
[00:08:35]  fixed the Svelte versions, right? And then, once Rich went in and fixed Svelte, because you could see some of the original numbers, roughly.
[00:08:45]  Like, originally, it looked like Fastify here, Solid here, and then it was, like, React, Svelte, View. Like, the lower part of
[00:08:52]  Rich's table was how they presented the original benchmark. As it would turn out, this benchmark had problems with every single implementation. It wasn't just, like, Svel
[00:09:04] te that wasn't good, Solid wasn't good. Solid had, like, a whole bunch of extra style bindings. In fact, I mean, we can actually
[00:09:11]  go back and recreate this benchmark and watch it in slow motion, because we have Git. So, I'm going to do that today, actually. Let's just do that
[00:09:18] . Yeah, Dave had that message, which is a clip that he took from the article, I think. Yeah, and this is how, like, without looking at
[00:09:34]  the benchmark, this is how I imagine some people in the Solid community thought of it. Because, honestly, this was unsurprising to us. Solid's always done quite
[00:09:44]  well in SSR benchmarks. So, we're like, okay, so we were the best. We were just kind of moved on, right? And, okay,
[00:09:53]  what do we got here? This one? Yeah, and this is where it landed in the end. But the funniest thing is, before it got to this point, it
[00:10:09]  bounced around, like, a bunch. And you can see how small little changes completely change the order of how frameworks appeared in the benchmark. And the reason I want to
[00:10:18]  talk about this is because I think it's important to understand what these things are actually measuring. And actually go step by step by the, you know, mistakes or corrections or
[00:10:29] , you know, where things went. I think there's value here, and it actually draws attention to our main topic today, which is the hydration IDs in Solid.
[00:10:40]  Because, in the end, all of these generate the exact same HTML, except Solid. Solid, for good reason, we'll talk about that later, is the only one
[00:10:49]  being penalized in this benchmark. I mean, Solid does okay, even despite this penalization. But I wanted to kind of get into this a bit. So,
[00:11:02]  yeah, I managed to get Git set up on this computer. So, I actually have the benchmark. And I'm just going to, we're going to go back in
[00:11:14]  time a little bit. For those interested in how this benchmark works, essentially, there's a folder of, let's see if I can blow this up a bit so you
[00:11:22]  can all see. There's a folder of implementations. And then you're supposed to just literally run the code and then, in another tab, run an app called
[00:11:35]  AutoCannon against it to see how many requests that shoot against it. And that's how the scores were. There's no automated test run or anything. You literally just
[00:11:43]  throw up a site. So, for example, if I went to the Solid implementation and built it and then went pmpm start, it'll open up something on
[00:11:54]  localhost 3000, which looks like this. It renders this swirl pattern. Yeah, and honestly, this was my biggest takeaway. They said they generated it by AI
[00:12:10] , right? And I mean, I've seen stuff generated by mitosis I wouldn't trust. But at least there's developers trying to build equivalent things. What's AI
[00:12:23]  going to give us, right? Well, we can see what AI can give us because, just a second. Why is, just sorry, I'm just going to
[00:12:35] , I don't, I'm going to do this off screen for a second. I don't know what's, I, I, this is all my, this
[00:12:46]  is my problem with, with installing new software. But I imagine a number of you already know my email address. So it's not like that secret anyways. So I'm
[00:12:58]  probably on my git commits. Okay, sweet. So here's the history of the mentor, which is easy to follow. So we can literally go back to, I
[00:13:09]  think, all examples and see what we were looking at. And I, I do this not to pick apart the guys at Fastify necessarily. I just want to show you
[00:13:19]  what can go wrong. Um, yeah. So I, I, I, I have to admit I, I dropped this quality thing down because I wasn't noticing huge difference
[00:13:35]  on my video. videos and it was like costing me 10 X more. I could probably pay for it. I could take it out of the open collective. It just
[00:13:43] , I don't know. It's like the difference right now of paying like $20 a month or paying like $60 a month or something. It's just, I
[00:13:55]  guess that's only 3 X, but you, anyway. Instead, I will blow up all my code examples. Anyways. So we're going to go, we're
[00:14:10]  going to go back here. I'm going to look at this benchmark and this is what we had. And for people to understand, I don't know. I'll start
[00:14:17]  maybe with react because react is what people understand generally. This benchmark involved a single component that loops and creates that spiral design we saw a moment ago. And it does so
[00:14:31]  by making a div wrapper and then mapping over it a div. And then it has a class and it has a style attribute and in this case it's a key because
[00:14:43]  it's react, right? Because you want to have keyed updates generally speaking, right? So, yeah, I mean, can I make this one size bigger maybe
[00:14:59] ? Okay. That's about as big as I can handle in here. Okay. Now, you think, okay, so what would this look like in a different framework?
[00:15:10]  Well, I don't know how, well, this is what they did with Fastify HTML. What is it? Fastify HTML, they made a, okay,
[00:15:23]  no, that's not it. That's the, yeah, Fastify HTML. Okay. They just directly did it without, well, without showing the wrapper. So they
[00:15:36]  have their, like, express equivalent, you know, get the request. Then they did all the same code to calculate it and then they mapped over it and div class
[00:15:46]  and put a data key on it and then interpolated the string, right? Seems similar to React, right? If you look, most of these push, right? For
[00:15:58]  some reason, the same one in Svelte, no one knows why, decides to do a spread. And this is a spread in a while loop. Oh, great
[00:16:10] . I need to install my Svelte syntax highlighter, don't I? Svelte, okay. All right. Probably going to need one for Vue as
[00:16:24]  well, right? So let's see which one they recommend when I switch over to the Vue file here. All right. Anyway, let's go back to Svel
[00:16:43] te. So for some reason, the Svelte version had this spread, which is bad because it basically, you're making thousands of items in every iteration of this
[00:17:10]  loop, you're recloning the whole array way over and over and over and over again, where everyone else is just adding one to the list. So, I
[00:17:16]  mean, this was the first problem. But there's also like scope styles. React and then have scope styles. Now, don't get me wrong. If I was
[00:17:28]  writing a Svelte component, I would probably be using scope styles because that's the default. But this is an example of where like, I'm willing to bet that
[00:17:38]  there's overhead in the processing of these scope styles instead of just sticking in the HTML document. I mean, we have to go a little further and look at this to
[00:17:50]  understand what it's actually trying to test. You always have to ask this question. It's not just reading the headline. You have to actually like look at it and be
[00:18:00]  like, what is this trying to test? Right? So, we're going to come to that answer in a minute. Right? So, but yeah. And then
[00:18:08]  they have data key just like the HTML one. But if anyone knows anything, this isn't how you key arrays in Svelte. You key arrays in Svel
[00:18:18] te by making this each tile.id and then I'd have to do that tile.id. You get what I'm saying? You key in Svelte by putting
[00:18:33]  this thing in parentheses, not by adding an attribute. Right? So, you could already see some differences. Let's look at view. This is how you do key
[00:18:49]  in view. So, at least that's fine. They did not do the push. So, but they have the scope styles again. Right? So, a little bit
[00:18:59]  unfair, arguably. I mean, don't get me wrong. On one hand, you could argue this is how an actual view developer would develop stuff. But I think
[00:19:06]  no one cares about profiling the cost of scope styles. To be fair, though, we don't know what the intention of the benchmark is at this point. We're
[00:19:17]  just speculating. That's why we're looking at the different... I'll look at the solid implementation. Solid implementation of base.jsx. Looks a bit like React
[00:19:25] . Okay. Goes through. It adds a key like React, which we don't have keys. So, that's weird. Uses class name like React. And
[00:19:36]  then it adds like a whole bunch of style stuff in this... Like a whole bunch of style bindings in here. There's cell size, which I think is constant,
[00:19:48]  but instead is put in here. So, there's like all these extra style bindings and stuff. Again, you might not think this stuff is expensive, but what is
[00:19:59]  this test? But literally mapping over, I don't know, thousands of items in a list. So, like, yes, cloning everything every time. Adding
[00:20:12]  extra attributes are not here. Because if you add a key to solid, it's a key attribute in the DOM. Right? So, the only implementation that actually looks
[00:20:21]  proper here is actually React. Because React... I think you guys probably know this. If you put key on React, this does not get serialized into the DOM.
[00:20:33]  Every other implementation has an extra attribute that says key being serialized into the HTML for basically no reason. Right? Everyone following along so far? And you think that wouldn
[00:20:46] 't make a difference. But adding or removing that key prop changed the test scores by about 200 requests per second. Which is, if you saw the scale of the results here
[00:20:57] , like looking at this, 200 requests per second is the difference between, like, fifth place and first place. Oh, yeah, there's way more coming, right
[00:21:14] ? Yeah, I mean, the thing is, I actually pointed this out to them. What ended up happening is, every framework went in and fixed their implementation, right
[00:21:35] ? And then, we got into this funny state where Fastify was slower than Svelte and Solid. Preact had now been added to the list. So, it
[00:21:48]  went, the order of the results was Svelte Solid. And they were literally, there was a version of the article where they scored identical. Svelte was
[00:21:57]  ahead by four requests per second. It was, like, 1187 to 1183. That was the article that was going to go out the door. They said, okay
[00:22:08] , tomorrow we'll release the article. Guys, I'll check on it. Give your stamp off. This is the version that's going to go out. And I was
[00:22:14]  like, yeah, that makes sense to me, knowing how these frameworks work. And that was what was going to be released. But then, I made an issue on
[00:22:29]  their GitHub. Let me see if I can show this. Let's go back here. Yeah. It's because. Let me, let me go to the GitHub.
[00:22:45]  I, issue closed. Inconsistency keyed list. There's more inconsistency here. And I want to, if anyone has an opinion on it. It
[00:22:55]  is important because the cost of serialization in row ID is substantially central in this benchmark. I'm not saying for solid sake either, since we encode the hydration ID
[00:23:03]  that no one else does here, blah, blah, blah. But sake of consistency, right? I think all frameworks should use their keyed list, if applicable. Currently
[00:23:09] , all implementations except Svelte do, unless Svelte works like solid, and Rich confirmed that it doesn't, should have their keyed version. And
[00:23:18]  you should remove this data key from the Fastify implementation. So, when I got them to remove the data key from the Fastify implementation, it actually made Fastify the
[00:23:28]  fastest again. Because they were the only one serializing that extra key. So, like, essentially, if we go to, where was it? Let's fast forward in
[00:23:41]  time. Rich removes the weird push from Svelte code. I remove the extra value bindings. Dan Abramoff changes the app to work in production mode because
[00:23:52] , literally, it was using dev mode for React. So, I told you the React code was the only one generated right, but, unfortunately, the React code was in
[00:24:01]  dev mode. Jovi added Preact. Svelte was updated to Svelte 5, and they removed the extra attribute that wasn't needed. Fixed up views
[00:24:11] , like, inline styles, and removed the, for some reason, yeah, I didn't look at this. Let's look at our base version here. None
[00:24:22]  of these use the reactivity of the system, like, signals or whatever. But the view version uses ref, for some reason. It was the only one that actually used
[00:24:33]  a signal. All the other tests have nothing reactive in them. Like, if I go to base react, there's no use state, right? Sorry, I missed
[00:24:43]  that on the view one. So, sorry, where was I? I was looking at the commit history. So, we got here, and at this point, the
[00:25:00]  only difference, really, was that key suggestion that I made. But they decided to do a few other final revisions. Instead of making it non-keyed,
[00:25:17]  they, what they ended up doing was they, sorry, instead of making it keyed for everyone, they made it non-keyed for everyone. Which is fine
[00:25:30] . I looked into it. But they did one other thing. And I know this sounds really silly, but actually, I'm going to show you the difference here. We
[00:25:39] 're going to check out what the final revision, this is where the final article was released on, okay? This is the final version. They did one other change,
[00:25:47]  and you'll see right here. They put this 2 fixed 2 on the end of this. Because if you, the original version of the benchmark just had like X here and
[00:26:06]  Y, and it was causing, it was making these really, I mean, I can show it to you. Let me just remove this from, from there. Let
[00:26:16]  me go here and go PM, PM. I'll just make sure I'm up to date. Good, PM, PM build, PM, PM start, okay? All
[00:26:29]  right. Let's go to local host. Inspect. Actually, you probably won't be able to see it, because the browser display truncates it down to
[00:26:46]  two or three digits. But, um, network. Sorry, I didn't save my change. Sorry. Build. Start. All right. Now, let me try
[00:27:14]  it again. Okay. So, let's, let's look at this. See, you can see that these are all very long. And if you actually look at the
[00:27:21]  network data, um, let me look at the, uh, doc. The doc. Yeah, let's look at the doc. Response. These numbers are actually significantly longer
[00:27:31]  on all the implementations. They get truncated at, like, 12 digits or something. 1, 2, 3, 4, 5, 6, 7
[00:27:38] , 8, 9, 10, 11, 12, 13, 14. 14 digits, okay? So, um, they, they added a two fixed thing. Um,
[00:27:49]  but I want to show you something kind of funny about this. Because this, this just shows you how minor of a thing. Okay. So, I'm going to
[00:28:00]  get rid of the two fixed, okay? For a second. Actually, you know, let's, let's actually, let's, let's add it back in.
[00:28:14]  And actually, I'm, I didn't change this because, um, it wasn't worth it. It didn't make any meaningful thing. But Solid actually is really
[00:28:24]  good at optimizing the object form. Um, because we can tell things from the interpolation that we can't tell from the interpolated form. Um, and, I
[00:28:37] , it's not, it was so minor that I didn't even bother really worrying about this that much when I was, like, uh, what am I missing? I
[00:28:46] 'm missing the close of the div, aren't I? Div. Or it's, yeah, it's just this. No, what am I missing? It's on
[00:28:54]  this side. All right. I'll, I'll do it like this. Okay. So. And let's open up a couple windows here. Well, let's
[00:29:07]  open up another one. Let's open up, um, let's go CD. Let's do spelt. Why not? PMPM in. PMPM build
[00:29:21] . Okay, cool. Right. Now. Let me do, okay. So I got the solid version. Let's make sure that I'm on the right version of
[00:29:40]  solid. So build with the thing. And, okay. What we're going to see here, sorry, build. What we're going to see here is the results are
[00:29:48]  going to resemble the final results on the benchmark, pretty much. So I'm going to start solid. So if we auto cannon here, local host, give it a
[00:29:55]  sec. And what we're going to see is that the average requests per second, this is the only problem with, I got to view out one level so I can
[00:30:22]  see the full table in one go. What you'll see here is the svelte version sends about, the average about 1048, 186 MB bytes per second
[00:30:32] , right? Or, sorry, this is the solid version, right? 1048, um, go down. Sorry. It's, this is the one fun part
[00:30:49]  about why I hate zooming in. It's just hard to see. Um, but yeah, 1048, 186 MB per second. And if I stop this for a
[00:30:58]  second and run the svelte version, start, and auto cannon it, you should see a result that's slightly better. Probably about 11 something. I've never
[00:31:15]  tested on this computer. I'm just, yeah, 1132. But notice the svelte version actually sends less MB of, um, payload over, over this.
[00:31:29]  Um, it sends 172 where solid's sending 186 because solid's HTML that it generates is larger because, I mean, we can see it right here. Um
[00:31:40] , data HK1B171 on the solid version, right? It has this extra attribute. And if I go on the svelte version, you're not going
[00:31:51]  to see that extra attribute. In fact, solid is the only framework that is now has the extra attribute. And I'm going to show why it has the extra attribute in
[00:32:01]  a bit, but it, it actually makes a difference, right? I, it wasn't really noticeable in the benchmark initially because of two things. Can I, because
[00:32:09]  you got to remember what auto cannon does auto cannon, I do a lot of benchmarking where I test, like how long does it take for this process to run a node
[00:32:17] ? Start to end. Like how fast things render. This is testing how long it takes to not just render, but send the data across. So the bandwidth actually has
[00:32:29]  implications here. So the funny thing about something like adding two fixed is you can think about it. This extra processing to truncate the skin, uh, the,
[00:32:37]  the strings actually makes things more expensive. It's actually takes longer to render and you're like, why, but two extra calls per loop iteration actually visibly adds up
[00:32:49]  to the point that if I remove this two fixed, all the benchmark frameworks would perform better. Even though they're, um, shipping more bandwidth, the overhead of action from
[00:33:00]  a rendering perspective of doing more data processing, um, doesn't always balance out with the, with the bandwidth. However, there is a cost to bandwidth, um,
[00:33:11]  when the differential is changes. Cause what the, the other thing that getting rid of this two fixed does here is it means that all the frameworks have larger attributes, which means
[00:33:22]  each row is larger. So on average, the impact of having the extra attribute between frameworks has diminished as well. So if I remove this from the solid version, right,
[00:33:31]  let's stop, stop this felt here. And I remove this from the cell version. Let me show you something as silly as this, right? If I remove it
[00:33:44]  from both versions, right? And PMPM build. All right. And PMPM build. Okay. Start. So I'm going to start the solid version.
[00:33:58]  Let's auto can in it. Solid got what? 1048 last time. And it sent like 186. Now it's sending 345 way more because the H
[00:34:14]  output, but it's doing averaging 1487, right? And if I go to the Svelte one. It's not a cannon. 1536 and averaging 3
[00:34:41] 70. You can still see that the differential is significant, but the gap is actually closed considerably. And when they ran their tests on their machine, originally these were about
[00:34:54]  parity. But my point is the whole, the scores went up almost 30% by not running too fixed. Just to give you an idea, like how much difference adding an
[00:35:08]  attribute or making an attribute longer makes. Or like doing, not even longer, but doing data processing, like one extra thing that the other implementations do. This has
[00:35:19]  gone to such a micro level on the benchmark that like doing something like that. Like let's bring, let's bring view in. See, do you know why view was
[00:35:28]  slower until the very last version? It was the object form. View has the opposite problem. View wants to be a string. If you use the object form for view
[00:35:37] , it actually slows it down. So if we remove this too, and it can join the party. Right. Let's stop Svelte. Let's make a new
[00:35:49]  window here. Is that it? Yeah. CD view. PM PMI. PM PM build. All right. PM PM start. And view came in at 15
[00:36:40] 70. So again, the, the, when we change this and ban, like this, this actually closed the gaps compared to the result, but we still see, seeing
[00:36:55]  a spread here. But generally speaking, this is, is as someone who mentioned earlier, how fast can you jam out a string? So every little extra calculation,
[00:37:05]  every extra little attribute thing makes such a significant difference. So in a real example, a real app, you probably don't have a single div that you spam 2000 things
[00:37:19] . You usually have larger chunks, sections of a template. You probably have, you know, layouts and stuff. You're not just like spamming one div, um
[00:37:29] , one individual, uh, JSX element. Be, and this is something that I realized, like, this is kind of the worst possible case for our hydration mechanism.
[00:37:39]  Because as I mentioned before, solid has that one extra attribute, does that one extra attribute make a difference? I wonder. Um, let's turn it off. Uh
[00:37:47] , let's go into beat config, I think. SSR true. And then I believe if I go in here, I can, in beat, I can go solid
[00:37:58] , um, hydrateable, false. I think that's right. And then I go PM, PM build. Because think about it. None of these implementations
[00:38:15]  use state. They don't have signals in them. They don't have anything that could ever possibly update. Okay, so what's going on here? Oh, is it
[00:38:22] , I just did a, sorry. It's just a syntax error here. Okay, let's go. Right, let's just not generate the ID. As I
[00:38:36]  told you, every little, too fixed, every little thing gets exaggerated here. So what happens if we, we don't do that? Um, because if we saw our
[00:38:46]  last autocannon, yeah, Svelte, uh, view averaged 320, Svelte averaged 317 on their output, and solid averaged 345.
[00:38:57]  Close the gap directly corresponding to the request per second, the byte second. See, there's a correlation here, just in degree. Obviously, if you do more requests
[00:39:04] , you can get more bytes. But if you're doing less requests and getting more bytes, it means that the, the, you're kind of getting, you know,
[00:39:11]  stumped by the actual payload size. So let's see what happens here. So I build it with hydration off. Let's just confirm the solid version has hydration off
[00:39:20] . Just, just for, for, for the sake of it. And refresh here. And if we look at our code, there are no data age case. Good
[00:39:30] . Sweet. Now let's autocannon that. And see if we can get something like closer bandwidth to the others. Oh, yeah. Actually, no, the bandwidth
[00:39:50] 's higher because we're doing 2,000 requests per, per. In fact, let's bring Fastify into this, just for fun, too. So basically,
[00:40:03]  the overhead cost of literally adding that extra attribute for solid and, like, calculating the hydration ID added another additional 33% overhead compared to the other implementations. So let's
[00:40:17] , let's, let's, let's pull Fastify in just because we can. Yeah, it's all string allocations. Solid's incredibly optimized. Like,
[00:40:28]  I, I spent a lot of time making sure that our, our, our, our server rendering was fast, right? Um, the reason that we haven't really hit
[00:40:37]  this bottleneck till, or this, like, noticeable till now is because solid was so much faster than the other solutions that the overhead of the extra attribute wasn't adding up
[00:40:49]  enough. Right? So let's, let's, let's, let's, let's, let's, like, so it's like, people are like,
[00:41:00]  oh, don't give Fastify a hard time because they're just the baseline. Well, is the baseline even fast? Let's find out. So CD Fastify HTML
[00:41:17] . Uh, do we have to install something? Good. PMP start. They don't need to build. Let's go. Oh, right. It's not
[00:41:44]  fair. Sorry. Sorry. Do you know why they're there? Because we, sorry, excuse me. All the other ones have removed the two fixed. Sorry.
[00:41:53]  So let's remove the two fixed again to make this all even, all things equal. And let's start this again. As I said, I don't even know
[00:42:15]  the results of these. I'm just, this is just, I can predict this based on pure experience. Yeah. 1700. So solids output trying to do the same thing
[00:42:28]  as the, even the Fastify implementation is still, you know, I don't know, 20% faster. So, now, I agree that hydration IDs are here
[00:42:42] . And I said that in the issue. If you remember when I, when I was suggesting that they remove the keyed list thing, I was like, look, I
[00:42:48] 'm okay with solid taking the hit where no one else does. I think, I think it's fair. We need that ID to hydrate. So, you know
[00:42:56] , you basically generated the worst possible situation where like every single element needs a hydration ID. It's okay if, you know, we don't show the fastest on this benchmark
[00:43:09] . But, yeah, it, it, it is interesting when the baseline is not even the baseline. So, what, back to our question, what is,
[00:43:28]  what are we showing here? What are we actually testing? I don't know. He wanted, when I was talking to the guys, Jonas and the working on the bench
[00:43:39] , right, they wanted to initially show that there's an overhead to, to, to rendering with a client side framework templating. Compared to like server side one,
[00:43:50]  and I think this, you know, you can even see this in the final results here, isn't really the case. Um, I can picture if Svelte or
[00:44:01]  Vue was as optimized as server rendering as a solid is, that they would be just trouncing Fastify, um, in this, in this example, you know
[00:44:12] , so, you know, it's one of those things where it's like, Everybody in this zone, in an artificial benchmark is actually in a fairly good place.
[00:44:27]  Preact is even fairly decent. It is interesting to note that React is about half compared to the others. And I think that you'll find that pretty consistently. I mean
[00:44:37] , I see the same results in these kind of benchmarks across the board. They all waver a little bit, but like this, like, so this is not a
[00:44:47]  bad benchmark in terms of the process towards measuring. And once all the implementations are fixed, um, you know, we can kind of look at it and be like,
[00:45:01]  um, This is for what it shows is fair, right? But it's like, it's much harder to place that's value back to people, you know,
[00:45:13]  when they're trying to say like, oh, this is how I know which SSR framework is fast or whatnot, because it's like, what, what are we trying
[00:45:21]  to show? Anyway, um, yeah, I was trying to remember if I had additional thoughts on this. Uh, cause this, this is where I eventually showed the
[00:45:37]  without hydration thing, but it's not even that it's not because hydration's on or off. It's because we have a very different approach to hydration, right?
[00:45:48]  Um, see, this is when I called it to say that the results are going to be the same because they were the same at that point. Um, Do, do
[00:45:56] , do, do, do. Yeah. I don't know if I actually, yeah, I think it was in this thread that I actually, where is it?
[00:46:12]  The article hasn't been released, but I have to eat my words a bit on this one. The benchmark was changed in a way that specifically acts and solves hydration trade-
[00:46:18] off. It shifted the results from where they were yesterday. You can see the PR in my comments. I know it erodes trust in benchmarks because changing little things suddenly moves
[00:46:25]  around who, quote, wins. We've already seen a few versions of this one, all with wildly different results. People are quick to point out how it suggests they can
[00:46:33]  be gamed. However, that missed the point. As long as method, methodology is sound, a benchmark could value. Usefulness can be a different debate. I
[00:46:41]  no longer see any issues with any of the implementation. So while my interpretation might differ, I commend, um, Jonas and, um, and Mateo for taking the time
[00:46:51]  to rectify this. Right. Are you baseline now? Is that what you, is that what you want? The, the, the, the, the true secret here
[00:47:04]  is Marco wins all pretty much. Uh, this is, this is just a consistent fact. I'm a, let's, let's, let's go. Let
[00:47:11] 's pull Marco in. And I'm, I'm, I'm, I'm, but I'm going to make the same changes to Marco as the others. Do,
[00:47:20]  do, do, do, do, do, do. Too fixed. Too fixed. Solid may win without the hydrate key. You know, you, you,
[00:47:43]  it might be close. Yeah. People, every, I, I, I think Michael and Dylan know this too. When I was working on solid initial render, I
[00:47:57]  spent an incredible amount of time optimizing string concatenation approaches to the point that like that I, I, I did it originally cause I was just trying to be fast,
[00:48:07]  but then I, I let that kind of guide my approach to SSR in general. Because I was like, God, if, if we can be this fast,
[00:48:14]  this can simplify the way we approach rendering dramatically. Brian doesn't have Marco. Brian doesn't have Marco. No, this, as I, if you're watching earlier
[00:48:28] , I, I, I had to install all the extensions today. I just did view. Um, I did Svelte. If this is a brand new computer,
[00:48:36]  I just switched jobs. Um, Marco VS code. Is this verified owner? Okay. Sure. Yes. Now, now you can see the beautiful Marco templating language
[00:48:54]  in its entirety, although this looks, yeah, so this is like Marco, Marco three, Marco four, certain Marco four style syntax. Okay. Okay. It doesn't
[00:49:05]  need to be anything else cause there's no actual state in this. Um, okay. Okay. So good, good, good, good. And then this is fast
[00:49:17] ify just getting all my windows sorted. Let's put in the Marco window CD Marco PMPM I PMPM build PMP start. There is a different benchmark
[00:49:43]  that the Marco team maintained and that's how I honed solid's render speed. Um, my experience generally has been that Marco's overhead for just like starting the render and
[00:50:00]  ending the render process is basically unmatched. Yeah, check this out. Okay. It didn't quite match solid's, uh, no hydration score, but this is
[00:50:13]  just Marco as is. Do you know what I mean? So without turning off the hydration, it came in at 1900, which beats fastify beats pretty much anyone who
[00:50:26] 's operating in their normal operating parameters. Um, so there you go. All right. Okay. Okay. So those hydration IDs seem to be the bane of our
[00:50:36]  existence in, in a simple benchmark like this. say. Right. Why are, why do we even have them? Right? Like you're probably like, no one
[00:50:46]  else seems to have them. And I have to admit there's a good reason for it. It's a relatively unavoidable reason. I think. It's a
[00:50:49]  relatively unavoidable reason. I think. I mean, if you guys have ideas I'm talking about today, I'm not going to be the same thing. I
[00:50:52] 'm not going to be the same thing. I'm not going to be the same thing. I'm not going to be the same thing. I'm not going to be
[00:50:55]  the same thing. I'm not going to be the same thing. I'm not going to be the same thing. I'm not going to be the same thing. I
[00:50:59] 'm not going to be the same thing. I'm not going to be the same thing. I'm not going to be the same thing. I'm not going to be
[00:51:02]  the same thing. I'm not going to be the same thing. I'm not going to be the same thing. I'm not going to be the same thing. I
[00:51:06] 'm not going to be the same thing. I'm not going to be the same thing. I have to admit, there's a good reason for it. It's
[00:51:14]  a relatively unavoidable reason, I think. I mean, if you guys have ideas I'm talking about today, maybe you can help me out. But the thing is
[00:51:25] , we first have to understand this benchmark and what it's doing to understand how relevant it is. We almost basically buried the render difference of those attributes. Once we added
[00:51:43] , like got rid of the two fixed, or once we added anything to the HTML, we made the HTML even the tiniest bit larger. The difference ended up not
[00:51:53]  being that relevant from a render standpoint. Even with the kind of worst case scenario, like with laid out here, it's not in bad company, but it's not
[00:52:03] , it's not, it's not a Marco, obviously. To be fair, Marco with two fixed is probably sitting around like here, like slightly above Fastify, but
[00:52:12]  like, it's like, we're talking about the absolute extreme. Someone earlier asked, how long does it take for SSR's request? And the answer is like
[00:52:27] , yes, depends on how big the page is. But usually SSR render times for, you know, might be like, I don't know, two milliseconds, five
[00:52:36]  milliseconds, you know, in, like in, in some of these, you know, I don't know how big your page is, but maybe 10 milliseconds. Maybe
[00:52:44]  10 milliseconds. So like the difference between choosing solid or react to render your page from a pure synchronous rendering standpoint is like, Oh, guess what? Solid was 10 milliseconds and
[00:52:54]  react was 20 milliseconds. Don't get me wrong. You pay your server costs. This adds up over time. Having something twice as fast as something else, you know,
[00:53:03]  can make a difference. Right. But like, but like we're, we're talking the render is almost never the bottleneck. This is what I showed on a
[00:53:14]  previous stream. When I was talking about PPR, I said PPR is kind of a waste of time. It was like, if you have streaming versus PPR,
[00:53:21]  like it, it's not like that different. Look, and that I did a whole stream a little while back showing how the bigger overhead seem to be for sales own
[00:53:33]  infrastructure and PPR solve that. Whereas if I just took streaming to Netlify, I got basically the same results as PPR without having PPR. So like
[00:53:45] , this is generally not a bottleneck. Whereas hydration on the other hand, or data fetching waterfalls, um, are things that are closer to your client and you
[00:53:58] 're doing the network, um, can actually be more significant. Uh, I, this is why I'm, I'm always very critical of people who come in on the
[00:54:06]  server side things. And, and I talk about, we need JS on the server and they're like, blah, blah, blah. We're 10 times faster rendering.
[00:54:12]  I'm like, I don't care. Like, so what, you know, now, yes, instead of 10 milliseconds, you were able to render in one millise
[00:54:23] cond, which is significant from a cost standpoint. And it's even significant, you know, it will add up on your bandwidth, how many servers you have to spin up
[00:54:33] , but compared to 200 millisecond plus differences on the client side hydration thing, like it just doesn't matter. Right. Like we can't emphasize that enough. So
[00:54:50]  yeah. Astro isn't because they purposely only chose the raw rendering frameworks. See if they brought Astro's HTML in, it'd be like putting Fastify in there
[00:54:59]  again. Right. It's just like another thing that generates HTML. It doesn't, there's no like extra client side framework hydration consideration overhead. The turn, oh
[00:55:09] , we're only five times faster. There you go. So your Rust backend, you know, it takes two milliseconds. Your solid backend takes 10 milliseconds. And your
[00:55:24] , your React backend takes 20 milliseconds or something like that. So I think, I think this is less important than it gets made out to be. This is probably the
[00:55:43]  least important part of the whole, like, is my SSR efficient question. But what, you know, this still doesn't change the fact that there is a thing
[00:55:54] , you know, and if we're going to be sitting there going, how can we come up with the, you know, the best solutions for problems, the most efficient
[00:56:04]  approaches overall, we have to question everything and look into everything. Right. That's just how this goes. So, um, let's, let's talk hydration ideas
[00:56:14] . See, I'm going to share. Oh God. I don't even know what account I signed into dev with. Did I get it right? I did. Yay
[00:56:29] . A while ago I wrote, solid, uh, five things solid is not, no, not, no, next page. I guess this was a long time ago
[00:56:54] . Five places solid JS is not the best. Okay. Rails does 15,000 a second on six. Okay. So is that, is that what the, their
[00:57:14]  measure is? Yeah. I don't know what they're rendering. You have to see what they're rendering, but I mean, I mean, that, that still holds
[00:57:22]  up, right. With what we were, we're seeing here on the autocannon results. Right. Cause we're, we're, we're sitting here, you
[00:57:30]  know, around a 2000 and they're what? Seven times faster. Yeah. I, that, that's still, that's sort of what I'm, I'm,
[00:57:40]  I'm, I'm kind of getting at it. I don't think that actually matters. It matters for your bottom line costs. It doesn't matter for your end users
[00:57:47] . Okay. Okay. I wrote this article and it's sometimes forgotten about, but the reason I wrote this article is because these are true things, right? I can
[00:58:05] , you can always think of a way to make things smaller, but less efficient. This was the case with Svelte four, right? Or Svelte three
[00:58:12] , right? Solid will never be the smallest because the approach is there than that. Now that there's Svelte five, Svelte five is probably about the same
[00:58:19]  size of solid. Um, so, you know, this, this, this ended up disappearing component life cycles. Yeah. A lot of these points were actually pointing out
[00:58:32]  where solid was better. Our Svelte was better than, uh, things than solid actually. Um, well life cycles, their animation hooks really good. It's also
[00:58:39]  why they've had such a hard time with async though. So there's like a trade off here with like concurrent rendering and stuff. It's very hard. I think
[00:58:45]  this might be the number one reason why Svelte five hasn't come out yet. Um, deep view diffing. Yep. Not a diff engine react. It
[00:58:53] 's got us there. You have to diff data debugging signals need way more tooling. That's solvable. But I wrote this, right? Cause this was the old Marco
[00:59:01]  benchmark, right? And this one, instead of doing benchmark, it didn't care about the hydration IDs. I literally just measure how long it took to spit out the strings
[00:59:09]  on the server. Um, and as I said, this, but I said, we weren't the best at server. Rendering for a couple of reasons. Solid
[00:59:21]  curts out the fastest raw SSR speeds and GFs informer with exceptional marker, which is peripheral forms often orders a magnitude faster. But that alone doesn't make
[00:59:28]  much difference to end users. It will save your compute time on service launch events and not much else. See, yeah, I mean, I even admitted that years ago,
[00:59:35]  progressive rendering streaming and partial hydration make bigger impact cause the impact of the end user. Anyways, solid has a form of progressive rendering. Blah, blah, blah,
[00:59:44]  blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah. Libraries like Mark with Svelte have the ability
[00:59:50]  to identify statefulness and track how it's used throughout your whole application. So I started kind of predicting that Svelte one day would employ the optimizations that they
[00:59:59] 're starting to look with in Svelte 5. Obviously, I didn't know that they would get to Svelte 5 back in April 2021. But it's
[01:00:08]  kind of, you could kind of tell where things are going to head, right? If I assume that signals were the future and I like, you could kind of like
[01:00:17] , I could kind of predict Svelte was going to go this direction before they knew they were going to go this direction. You can kind of just, it made sense
[01:00:23] . And I think, I think understanding directionally these kind of trade offs is important here because I knew from the second that I touched SSR and hydration that we were at
[01:00:35]  a severe disadvantage in terms of performance. Not severe, but relatively big disadvantage in performance. So all I could do is just make sure that things are fast enough. And
[01:00:45]  if I was content with them being fast enough, then that would be good enough to move forward with. If it wasn't, then, you know, I'd have to
[01:00:53]  rethink things. This is part of what delayed solid 1.0. I wasn't going to cement solid API where it was unless I knew that it could be fast enough,
[01:01:02]  right? So we did the work when we got there. But while we haven't seen any firms that's closed off yet nor architects grand enough to leverage it, it
[01:01:11]  will happen. For now, solid will have to be satisfied with being the fastest for our render in the server and browser with the knowledge that it's theoretically possible that other frameworks
[01:01:22]  will outperform it on the server one day, right? And we're kind of starting to get here, right? This gap is definitely closed. But why? Why
[01:01:37] , why, why, why, why, why? Well, let's see, let me pull some notes up to help me explain this. God, every, every
[01:01:46] , every, every service is, is going to be like this today. I'm sorry. All right. God, this light mode thing is just really jarring.
[01:02:04]  I don't know why everything is light. Anyway, we'll worry about that later. Yeah, yeah. Don't, don't get me wrong. If, if
[01:02:20]  it matters for bottom line cost, it matters. But if, if anyone knows anything about my philosophy or approach to building UI frameworks, there's only one person who matters,
[01:02:35]  the user. Right. You, you can, you can spin up more servers, resources, whatever you need. Obviously you want efficiency for cost perspective, but I,
[01:02:47]  I care about efficiency for the person who's actually using the app. I don't care about the developers as much. I don't care about the company's money as much
[01:02:56] . I care about the end user. End of story. Um, so yes, if you are getting to a point where certain piece of technology is being restricted from a
[01:03:08]  cost perspective, you should swap it out. Definitely. But ultimately, I don't know. Look at your data layer. Look at stuff. I think the most critical area
[01:03:18]  for your end user is the UI layer. That's like where you can make the biggest impact on your, on your users. You found, you found that funny.
[01:03:39]  I mean, we just keep on plugging away. Yeah. I do have a plugin for dark mode, but I don't think that's, that's funny. It's
[01:03:51]  not even. Yeah. I don't think that's, it's not working on this page. Okay. So let's, let's talk about hydration IDs and hopefully
[01:04:00]  you can gain a better, uh, a better, uh, appreciation for this. Okay. Honestly, I'm gonna say right now, this has been pretty tricky for me
[01:04:13] . I'm I'll drop this article in here so you can, can look at it. Right. If you need to, but essentially before solid came up with this
[01:04:28]  approach, fine grained hydration didn't exist. It did. It just didn't like the predecessors in this zone were always focused on client side. Like knockout
[01:04:39]  JS was from a time before SSR. Once SSR became a thing, no one was doing this kind of rendering approach anymore. So, you know, and like things
[01:04:47]  like surplus SJS, whatever, you know, all these kind of like client, like everyone chose reactivity just because of how incredibly powerful is at, at rendering on the
[01:04:57]  client. You know, there's, there's a reason every frameworks picked up signals at this point, pretty much. So like no one cared about SSR or all
[01:05:04]  this kind of stuff. It was literally just like the superpower on the client. So when I was presented with the problem of SSR, I had basically nothing to look at
[01:05:12]  from a fine grained perspective. Cause like even Svelte, you know, Dom, Dominic Ganaway's own words was a V Dom until self five
[01:05:20] . It's like, he still calls it a V Dom today, basically until the new version comes out. And I had to come up with an approach that would do fine
[01:05:30]  grained hydration. Like I could picture frameworks like angular, maybe being ones that would do something like fine grained hydration, but they didn't have that. They had
[01:05:42]  destructive hydration. They just re-render the page and then blow out, you know, what was there. Like this just didn't exist back in 2019 when I was working
[01:05:51]  on this problem. And I, I was kind of stuck because there was a second problem that I hit because there's a difference. And I mean, I got to give
[01:06:03]  credit where credit's due, you know, in terms of like decision implications. Like sometimes when you're dealt restrictions, you have no choice, but to think out the
[01:06:13]  box to solve the solution. And I'd made a decision to use JSX instead of like these template, you know, like string based template forms because the tooling was better
[01:06:23] . And we showed that like, you didn't have to do that context. And there's all these performance benefits and stuff. And it was, you know, it just
[01:06:28]  made my life easier. But JSX was not a good choice for server rendering per se. I mean, it's okay for server rendering, but it wasn't a
[01:06:42]  good choice for hydration because the way we handled JSX. So, and it's because most frameworks that use JSX, you use a virtual DOM. So you use
[01:06:58]  JSX to create this abstract object. And then you do a bunch of processing on it. This is part of why SSR and virtual DOM libraries is just slower generally.
[01:07:07]  So, see what Svelte and Vue do is they leverage the fact that they're a template to kind of like not bring the virtual DOM on the server.
[01:07:16]  But like when you're React, you're virtual DOM everywhere. You're virtual DOM on the client, you're virtual DOM on the server, you know. Preact does
[01:07:21]  some great optimizations there, but they're still kind of hitting this thing. There's actually some great articles by the guy who created EV, one of the fastest V
[01:07:30] DOM libraries about like tricks to like improving performance in VDOM libraries in terms of node caching and like just really clever ways of trying to get SSR faster.
[01:07:42]  But generally speaking, there's this trade off here where it requires more memory because you got to like get this abstraction. But it also means that when you go to process
[01:07:55]  the render or the hydration, you have a representation of what the whole UI looks like and you can make decisions based on that. You know where everything's inserted. And my
[01:08:05]  problem was in Solid, what's the most fundamental thing that you do? You know that when you make div, it's my div is a div. This is like
[01:08:17] , this is one of the most basic fundamental things that we have in Solid where you know that if you grab this div, it is an HTML div element. And then you
[01:08:26]  can just go insert it in another div and it works just like native, like you just like, here you go. These are native elements. Right. There we go
[01:08:42] . The way I've done it in my framework is to give every element an ID. Even if not user assigned and record all the state mutation replay them in a particular framework
[01:08:55] . Right. Give every element an ID. You guys kind of following on here? Well, you're right. In SSR, it's not a div. In
[01:09:05]  SSR, it's a string of a div, basically. We're just putting the strings together. So, but my point is you can't do this. There's
[01:09:18]  no language to my knowledge to do this in view or Svelte or whatever. You can't just go like, here's a template piece, insert. This is why
[01:09:28]  JSX is like so powerful because it's just like, oh yeah, I just grabbed this, grabbed this, go. You just constructed. You get like the builder
[01:09:34]  pattern. Like you can just do this. Nat, like this is part of why people say, oh, templates feel magical or restrictive because you can't just like toss them
[01:09:44]  around and be like, okay, I've just built this and then I put this together. This gives that intrinsic, just JavaScript. We'll talk about that a bit later
[01:09:52]  feel to, to these systems, right? But there's, there's this awkward problem, right? If we are hydrating this, you know, it'll look
[01:10:04]  like div, div sucker, div. So my question is if we're going to rerun this code on the client to hydrate it, how are we ever going to
[01:10:13]  get the right div? Right? Like you have to assume that when you hydrate that this div gets assigned to this variable, like it might not only be used here
[01:10:28] . So it's insufficient. Like at the time that this code runs, you need to be able to grab this element, right? And when this runs, you have to
[01:10:40]  grab this element. Like you're creating the inside before the outside. It's because in these languages or in JSX, you don't need to know where it's
[01:10:50]  inserted to create it. You don't have the parent. Like most templating languages at the, like at the place that you create it, you, you know what the
[01:11:00]  parent's going to be. You're like, okay, this is where it's going to get inserted. I have no clue. This could have been created in a separate
[01:11:05]  file. So I can have a really simple solution at a counter. So it creates the first div sets it to zero Chris, the next div sets it to one.
[01:11:15]  There you go. And then when you render it, you get data one data zero. And then when we create it, we go, okay, getting a div.
[01:11:25]  Oh, it's zero. Grab this div. Oh, it's one. Grab this div. And tada, we've aligned the stuff. Pretty easy, right?
[01:11:41]  We start up our program. We grab all the elements of the data HK, put them in a map by ID. Then when we go create, as long as stuff
[01:11:50]  gets created in the exact same order, then we can just grab the right element, right? Do we need the, the hydrate stateless elements? We do not
[01:12:06] . No. Yeah. This is this, there's a funny thing in solid. There's something called server only. Um, I don't show this too often, but
[01:12:17]  like, I could have cheated this benchmark in other ways. Um, like I could have like, see, see if I go here and go to the output and see the
[01:12:27]  service, the, see this, the client hydrating version, you'll see this, there's this button element, right? Like it's in the template, right
[01:12:34] ? If I go dollar sign server only, this template is suddenly gone. And instead of saying, it goes get next element, instead of passing the template to it, see
[01:12:46] , watch, watch, watch that again. See, pass the template to it. We just remove the template there, which basically tree shakes it out, and it's
[01:12:57]  gone. Now what I realized, I haven't done this implementation piece, but if you actually remove all, it's theoretically possible that if you remove all the data bindings
[01:13:15]  see, and then let's make, instead of this account, this can be component it's possible. I would count. You have to actually bind it into an element
[01:13:29] , but if, if, if it's, it's, it is possible here that if you remove. Yeah. I mean, it should be possible that with a server
[01:13:41]  only template that we could actually remove this code to get the element and basically start at only the components that they're here, because you never have to insert it. And
[01:13:53]  as long as the components here created their own IDs, like the divs inside here, they would match up. So because you never need to, you could basically,
[01:14:04]  we could make it that server only templates are re that didn't have any other interactivity basically got erased to the point. Like obviously, if they didn't have other interact
[01:14:15] ivity, this wouldn't be here either. Right. So we, we, we basically, this counter would just be a call to create component essentially. And the rest of
[01:14:24]  this code would disappear. And you know, like this could be my point is this could have as much rich, you know, HTML layout stuff that we wanted, right
[01:14:37] ? We could do this, we can put nav, nav element, we could have some, I don't know, whatever it is, nav even an element, I don
[01:14:48] 't even know, anchor tags, you know, we could do whatever the hell we want and the code for our counter is literally a way of just continuing hydration right so
[01:15:06]  no i mean yeah i mean the the thing is i i i i haven't hyper optimized this but yeah i mean there are there there are optimizations where someone could just
[01:15:27]  not turn off hydration altogether and we could we could get there this is what i see what i was talking about at one point with this uh with this approach was that um it
[01:15:39] 's fine i was that if we ever had like use client entries we could basically look at the default export component or whatever look at the component and basically um auto implement server
[01:15:55]  only annotations on the top level so that not only server components could not ship code but the client components like this or you know partials could also drop out all the extra
[01:16:06]  code um not really my point on getting here today but like it is possible that we can drop things the problem is if i go back on this example and go go to
[01:16:24]  here you know back to when i was doing this stuff and i had this count here i mean you could even picture passing like passing the count to the component and not rendering it
[01:16:35]  directly and here would be fine too like because you could just keep that code that creates a signal and stuff like you're kind of partially hydrating at a sub-comp
[01:16:42] onent level but but the problem is here is this needs to do the insert which means like put some other stuff in between um it's not just always l you can you
[01:16:57]  need to walk to l right which means that the second you have interactivity you actually need the walks i'm what i realized is that on a server-only template you could
[01:17:06]  erase the walks if if there was no direct interactivity like you could actually create signals and pass them through to child components but as long as the binding wasn't in there
[01:17:18]  you could actually erase the the template and the javascript like walks anyways so anyway the data hks are basically ids but it's a little bit trickier than
[01:17:43]  that i'd say this works if they're all in the same order um sorry one second all right um what if things aren't in the same order yeah yeah dom bind
[01:18:13] ings would have to be the differentiator because they um they get inserted and change see something i mean i guess you know what maybe what i said isn't completely true because if
[01:18:30]  the component was like a show or something dynamic it would need to change its insert point so maybe that doesn't work actually maybe that's why i've never done this optimization
[01:18:37]  um yeah yeah maybe maybe that's why um hmm yeah that's that's that is that is tricky but it's also a little bit beside the point um sorry i'm gonna
[01:19:00]  be right back i need to grab some more water sorry i i came a little ill prepared give me one sec you you you you you you you you you you you
[01:19:25]  you you you you you you you you you you you you you you you you you you you you you you you you you you you you you you
[01:20:12]  you you you you you you you you you you you you you you you you you you you you you you you you you
[01:21:33]  you you you you you you you it's still you you you what if what if this one results first and it's two it doesn't matter then inside in here
[01:22:21]  it goes three four five and then six seven eight in one and then on this client this one results first and it goes three four five like it's not enough to have you
[01:22:34]  be able to synchronously put the IDs what I realized is that I needed hierarchical IDs essentially once you're inside lazy component it's not just one it's now one
[01:22:48]  one one two and when I created solid I I basically are created the hydration IDs you know I think you guys used to see this add zero dash zero zero dash one one two
[01:23:00]  you know and we just keep on adding these layers yes yes every async thing needs to create a new unique ID but it's worse than that if I could just stop
[01:23:17]  there we would you know I honestly I'm hoping to get back to a point where this can be the case we can never get rid of as long as we have this approach
[01:23:27]  we can't get rid of of the hydration IDs but we can hopefully make them slow smaller but see I you saw like on the screenshot and when we were looking at the
[01:23:44]  benchmark do I still have it open no I don't they don't look like that anymore let me get one solid start agent let's inspect one of these you'll notice
[01:24:01]  actually that these IDs don't have the dashes in anymore and in fact you see stuff like A100 A110 A120 let me see if I can get something with lots
[01:24:11]  of comments alright I have to refresh on the page to get the hydration IDs yeah we're probably never going to get high enough within a short range to see B's or
[01:24:27]  C's but we came up with a slightly more it doesn't need a unique ID for every state it can be in well here's the thing you assume that when you're
[01:24:44]  hydrating that you hydrate the finished version that it matches on the client and the server because of that assumption you don't need every possible state you just need the resolved
[01:24:56]  state so you don't send something from the server to the client until it's resolved and then when the client doesn't hydrate until that part is resolved so we don't
[01:25:07]  need all the states we just need the final resolved state now on the server there's a reason for having branching and I'll get to that in a second but for
[01:25:16]  hydration we don't actually need the branching but it's also why can I make the ID's bigger you mean like the sorry like this here so you can like see what
[01:25:29]  they look like these days yeah like this here you go they used to be 0-0-0-0-0 they used to be like twice as long looking we
[01:25:39]  came up with a compression it's not actual compression but we came up with a with a with a format that was a little bit shorter by saying we removed the dash and instead
[01:25:49]  of using characters if the ID extends more than a single digit we add a character so if lazy had 12 templates under it the third would be 0-2 so 0 is the
[01:25:58]  first component and then its child is the third one is the two and the twelfth would have the idea of 0-A-11 so we added a prefix like
[01:26:08]  the dash back in only if there's more than a certain number of siblings on the templates and then if you have three digits it's a B and if you have four digits
[01:26:24]  it's a C we just go up the character codes and honestly this didn't make any barely any difference because these actually compressed really well from Vengizip but it
[01:26:34]  does make it infinitely more readable but it does have a cost remember when we were looking at benchmark two fixed made a significant performance cost so hashing these IDs is not worth it
[01:26:50]  from an SSR performance standpoint because it's better to actually have larger IDs than to have the performance overhead of actually hashing them to be smaller it's not worth has
[01:27:01] hing on both sides to do it both from the generation side of that so I came up with a mechanism where the compression only needed to be handled up to the last digit essentially
[01:27:12]  so we could just keep it's it's always two counters there's like a prefix and a counter and as we go to each level we add the current counter to the
[01:27:22]  prefix and it's only at that point that we have to do an extra slight processing after that we're just you know it's only the last end of it we don't
[01:27:31]  have to rethink about it if you had a hash every single time you generated these IDs every single call would have to hash the whole length of the string over and over again
[01:27:40]  aren't the network bytes generally worth clock cycles actually not was my finding these the IDs tended to compress really really well because most of the numbers were small zeros like so generally no
[01:28:04]  actually as I said the worst case scenario is if every individual element needs one but if you look at like an actual application yeah all these list items have a data HK but
[01:28:20]  like this is the sub list so it has more but what I'm getting at is that not every element needs a data HK only the top level only the top level ones
[01:28:38]  yeah HK standard for hydrogen ID some people were suggesting and see I was trying to be at one point I was like what should I call this and I went with data because people
[01:28:51]  were bugging me about passing their HTML validators and stuff honestly this attribute could literally be like underscore dollar sign or something much shorter help a little bit whatever right the problem
[01:29:20]  is we need the hierarchical because of the async and we need so it's not enough to just have a single counter and let's keep on going on here because
[01:29:31]  it's a little bit more complicated see because once I had these IDs I was trying to solve a second problem that no framework could solve and maybe this was a bit too ambitious
[01:29:41]  and this is what locked us in our path but I wanted our data to be serializable automatically I wanted if someone was like create resource I wanted it just to do the fetch
[01:29:50] ing on the client and then or sorry on the server and then automatically have it there to be serialized from the client without the developer having to do anything you literally just
[01:29:57]  go like create resource fetch my users and then when you're on the client we would just have that data there you know like the next JSON thing but I didn't want to
[01:30:08]  do it like you know get server-side props I just want you to be able to just use basically a hook to do that not have to give it a key not have
[01:30:18]  to do anything and have it just work across the wire can't it be hired why repeat the idea of the parent on the children because they can be inserted out of order
[01:30:35]  right like just because you're the parent in the DOM doesn't mean you're the parent in the in the creation you can you can have a prop that comes from a
[01:30:53]  parent that is passed to a lazy component that then is realized in the lazy component after it rendered like I don't know it's I don't think I can trust that
[01:31:07]  yes yes basically hashing keys or compression through GZip is cheaper than compression rolling compressor yeah yes yes so like like this has been kind of a pain because because of the
[01:31:30]  async resource problem and conditionals because I wanted them to be stable over like suspense on the server I actually need the IDs to actually happen at a component level it wasn
[01:31:42] 't enough to just only do async boundaries and there are ways you can exploit this and screw up resource serialization but they're pretty edge case but essentially if if I found
[01:31:56]  a different means for serializing the resource part of the reactive graph automatically then I could probably reduce the depth of these IDs but right now since I don't the component IDs
[01:32:06]  actually help because the resources also get IDs like create resource calls so that they automatically serialize and deserialize this this this is one of those like super power people
[01:32:15]  don't realize this about like solid why people created solid query or so hot on it like I don't know if you remember if you guys saw the tweet from Tanner where he
[01:32:29]  was like solid query bigger than react query part of it was like literally when the query guys came over and they were like sorry let's blow this up too and they were
[01:32:39]  like hey what would look like do it they just took create resource and they wrapped it yes there were some challenges to figure out how to make it work but once they made it
[01:32:46]  work solid query third party suddenly had automatic data serialization just work with streaming SSR you literally didn't have to do anything because they used create resource they literally were like okay
[01:32:57]  stick this on the page now just works with streaming just works with automatic data serialization everything just automatically works which is what I was going for I wanted it so that if
[01:33:05]  someone came and had a great library like Tanner's they literally could just like make a small wrapper around it and then call it a day and have everything magically work this is not
[01:33:15]  the case in pretty much any other query implementation what if you assume not then your idea is not because like the nesting has to happen because of async and then you
[01:33:44] 're saying what if you assume that all the siblings are are in order except for the ones that aren't like I don't know if I can tell the difference what I
[01:34:06]  mean by that is I mean it's kind of the nature of JSX like let's look at the the solid base JSX here this div inside this for map component is
[01:34:25]  completely isolated from this div do you know what I mean like this is why it has its own ID because it's it's a top level it's a top level thing
[01:34:35]  right so like this div is being created without knowing how it's going to ultimately be inserted like the difference between this div and you know in my write-up this div is
[01:34:54]  very little if that makes any sense like they can just be created anywhere and inserted however the hell you want like yeah and if we know anything compiler cleverness clever
[01:35:18] ness is probably a mistake how do you create a second div for the for loop when you created just one I mean the for loop at that point is just a for loop
[01:35:47]  so there's going to be a div for each one and each one is going to go up each time you go through it one two three four the I mean maybe it
[01:36:16]  helps to see the output code for server rendering but if I go const let's say like create div let's make it a function this is what you mean what you're
[01:36:35]  going to see here is template let's give it an attribute title let's give it a dynamic attribute what you're going to see is template string like this is very similar
[01:36:58]  to tag template literals thing other than using tag template literals as performance overhead probably because the way it caches but basically it's the template is the array so you see
[01:37:09]  here div space div like there's a comma here and then it inserts in the holes in the hole SSR hydration key plus this so this method has a counter in it
[01:37:23]  that basically reads the counter and every time it's instantiated it's going to up the counter yes that's it SSR hydration key let me look at DOM expressions packages
[01:37:42]  DOM expressions source client ssr ssr ssr high oh sorry that's the server side of it the client side is different sorry the client side just grabs
[01:38:02]  them ssr hydration key get hydration key if key data hk is this otherwise this and get hydration key is can I just jump to it is basically it looks the
[01:38:21]  shared config which is this thing that we can keep track of while we're going and if we're not in a no hydrate zone we get the next id which is
[01:38:30]  a method that solid provides on its shared configuration thing which is how we increment it so it matches up anyway but I mean what's cool about this is this is also how we
[01:38:52]  create unique id in solid like we have the stable id across client and server as well so you can like literally anywhere in the tree create an id and know that it will
[01:39:01]  be the same there's other there's other benefits too like our islands solution that we created when we were doing was really easy because you could literally just like turn off hydration which
[01:39:18]  stopped generating the ids and then or writing them out and then it would put the ids in the dom and then you can just continue you can call hydrate and
[01:39:26]  give it a prefix and if you just give it the same id as the prefix you can just continue hydrating on the page from anywhere in the page so like we were able
[01:39:33]  to implement stuff like islands really easily because you could literally because of these markers you could literally start hydrating a solid app from any point you know as long as you had
[01:39:44]  you had you had the code to run and the and the id context to to kind of run from no it's created from render or from hydrate it's not from create
[01:40:00]  root it's not part of the reactivity system it started from each individual render or hydrate call or each yeah how robust is the we don't need the key children
[01:40:16]  against the annoying chrome extension that is your DOM elements it doesn't work at all that stuff breaks us as well as it breaks literally everyone those kind of extensions break every javas
[01:40:26] cript framework it's just if you there are cases where things will like kind of work sometimes but like a VDOM that diffs with the key is still expecting stuff
[01:40:43]  to be in a certain place if you sure you can append extra elements and no one cares but like if you wrap an element with another element there's a mismatch pretty much
[01:40:54]  the chrome extensions break everyone equally right we have walks the hydration IDs help in that stuff that's not in your hydrateable ignored but once you find that you know and
[01:41:07]  you're like okay this is my node and then you still within that template you have to walk and get the elements and do the stuff so like I wouldn't say like we
[01:41:15] 're particularly resilient there yeah yeah I I mean that's good for them I I pretty sure most frameworks ignore any elements inserted after but wrappers break and nodes before would definitely
[01:41:34]  break too yeah I didn't realize they advertised that was that a thing for React 19 solids always work like that that's not a concern right there's a chance that if
[01:41:47]  it's it's siblings are a array or so it has some optimizations where we might delete that element on you we won't fail but we will delete it because like we
[01:42:01]  do single if we if we can tell that there's only a single expression within an element we can we can make shortcut optimizations instead of iterating over every element and removing
[01:42:13]  them we can like just clear all the children and so those kind of optimizations would be a problem as I said this doesn't mess with hydration or rendering it just means
[01:42:23]  that your stuff might not be safe yeah yeah the empty div trick yeah yeah yeah yeah I don't mean the empty div trick I meant any any elements after what we're
[01:42:45]  dealing with we don't care about I but as I said there's so many places where that doesn't actually like so it's so it's too easy to break that for
[01:42:56]  that to be considered like a feature is the is the idea is the idea that like there'd be an event and then the third party stuff could start up like I if
[01:43:15]  the third party wanted stuff wanted to play ball that would be great the problem isn't even just hydration there's no guarantee that the client framework wouldn't just like blow it
[01:43:27]  out when it goes to render again like it's very very awkward if you change this like you have a declarative framework that expects stuff to to like be mapped where you're
[01:43:43]  like this isn't and the funny thing is even if you're using jquery the browser doing this stuff would be a nightmare like if it stayed in its own lane
[01:43:50]  it's fine but like if it's like literally messing with how the elements you're dealing with are inserted and you're like rewriting those things and they like this is just
[01:44:01]  a recipe for just not good in general yeah like I know they're useful but this is I think I don't think this can be solved on the framework side like even
[01:44:24]  end user code side it's incredibly awkward like I say declarative it makes sense because you literally write your code to be describing a description of what the page looks like and if
[01:44:32]  the browser like something changes what the page looks like under the hood even after hydration stuff is not going to go well but like if that's true of literally anything anyway so
[01:44:49]  why did I bring this up again I'm hoping you can kind of appreciate the challenges here because this is incredibly powerful feature the way we handle resources unique IDs handle hydration it
[01:45:06] 's handled on the framework stuff by just putting third party stuff into use effects so you show it runs after hydration and you insert it into its own piece of the DOM that you
[01:45:17]  don't care about there's two parts of it right the problem with those things like a translator is it literally just goes I'm just going to mess with everything across your whole
[01:45:31]  page right in the middle of your rendering like even if it happened after hydration the second that like I don't know react updated or whatever framework updated and replaced it it would
[01:45:44]  blow out the old stuff and put the new stuff in would the translator like detect that change and then update it again maybe no I mean literally they break every framework and basically
[01:46:02]  every JS library and it's like not a solvable problem as far as I'm concerned you'll see issues going back over a decade related to react on this and it's
[01:46:15]  not really react's fault these tools just don't play nice with developer code okay so why bring this up can you guys think of any way we could get rid of hydration
[01:46:27]  IDs because this this is this I kind of went on a little of a mind journey because like as I said I want to push yeah yeah right the key to this is order
[01:46:48]  so what if order didn't matter anymore could we do something right could we get order back to being consistent right I have an idea of how to solve this I don't
[01:47:04]  think it's worth it but you know we should explore it while we're here right what if a div wasn't a div anymore what if a div was a function that
[01:47:22]  created an hml element what if instead of div returning a div element it was just like a function that could call that return a div element then if you think about it it
[01:47:38]  wouldn't be until like you could even pretend like you passed the parent to this element to insert it or something like basically then when you put my div in here it wouldn't
[01:47:49]  actually create this development until it was inserted right so the order would be back to like zero than one the order would actually be the order of insertion rather than the order
[01:48:07]  of wherever wherever people are making these JSX elements and if you made something like this and I'm not saying you would make this function callable I actually think that would
[01:48:23]  be a mistake I think because you kind of want to make sure there's a parent to insert into so you can't just like go resolve this thing but let's explore
[01:48:33]  what this would look like right first of all you wouldn't need a wrapping function on our render function right because like nothing would run until render actually did whatever it wanted in
[01:48:44]  this so your entry point your app would look a lot like react right and you wouldn't need to wrap things in functions like if you using solid you actually shouldn't be ever
[01:49:00]  really doing my div equals div like I've been showing in these examples this is like not a good pattern in general anyways because if you tried div twice you'd find out
[01:49:12]  very quickly that an HTML DOM element can only be inserted in the DOM in one location you can't go like I think I bring it up here but you can't go like
[01:49:20]  my div my div like this does not work in solid because this is literally a DOM element you can't insert it in two locations whereas so what you actually do is you make
[01:49:39]  JSX output you could just do this and it would just work right it can also help avoiding early rendering in props right people do stuff like this if you know you pass
[01:49:55]  a custom icon through and you go props custom icon then use it otherwise use a default icon problem if you do this today in solid is you render the icon twice you render
[01:50:04]  it here and then you render it here my point about for was that each in the case of the for loop component like the native elements would each run but it's because the
[01:50:29]  for loop has a closure you have a function right like the for loop already does this right you just pass in the item and you render it right right I switch off but
[01:50:51]  my point is you don't want to access props or custom icon twice some people usually this is the solution like if it's in the props object do it otherwise don't
[01:51:02]  this will not render it but this doesn't work if if someone I think this example shows you if you pass props icon and it could be undefined this will always be
[01:51:17]  in this I think like this will always be in this which means this will always not show the default so like the only solution to this is using the children helper where you resolve
[01:51:28]  it once and then make the decision but that means you're always rendering the custom icon if it exists even if you don't need to which again this whole thing can lead
[01:51:38]  to fun in in SSR because well if you render something on the server and never insert it we can't find it during hydration we give it an ID and then on
[01:51:51]  the client it tries to create it again and the client goes okay where is it and it's like oh we never inserted this I mean that's kind of a hydration mismatch
[01:51:59]  we don't know if it was intended to be inserted or you just messed something else up no these aren't virtual nodes and this is why we have the trade-off
[01:52:17]  because literally it could be a div I mean when you think about a div you're like oh I can pretend it's a div but what if it's like I'm not
[01:52:24]  suggesting making a function for every single element I'm and you don't get the thing that you hold on until you actually execute it I'm saying that whole template chunk is
[01:52:36]  a function right because when you call my div you're actually creating it and all its children and everything right the last possible upside about it not wrapping is it makes it easier for
[01:52:50]  server functions to return JSX to thing because it's a type thing if you think about it even though I'm showing as a function you could pretend that this is JS
[01:52:58] X node or something effectively so similar to how you can go render app you could also do server function JSON send this right now you have to send the output of the stuff
[01:53:15]  so you need a reactive context to render the thing to actually send it as JSON back yes that's what I'm saying I'm I have seven points here I'm going to
[01:53:39]  get to the whole premise here is that a div isn't a div right that's that's that's I don't think that is subtle I don't you know I
[01:53:48]  just want to kind of throw this out here yes this will only render it once but it will always render it right like it'll render it once but no more than once
[01:54:10]  I if I'm if I'm understanding what you're saying here oh it depends on how you pass it if you're it looks like you're passing it you can always pass
[01:54:26]  the component instantiator you can always like you can always pass like if I just passed icon this would be fine because then we basically put the square brackets here which is
[01:54:43]  what you're doing what I'm showing here is actually instantiating icon here with props coming from here and then trying to use it here the difference with your code example
[01:54:53]  here is you're passing here custom icon and then rendering it here I'm saying is if you rendered it here like the reason this works with prop custom icon is like capital icon
[01:55:04]  here it's not the component instance it's like if you say custom icon you just pass icon but you can't pass props in that way see another way of looking at this
[01:55:12]  method is not just wrapping in a function you're actually binding it it's like a bind call yeah and a div is not a div in SSR we did just talk
[01:55:39]  about that you can view this as a bind call even though I show it like this if this div had attributes on it from props they this like it would also it would
[01:55:57]  also like be bound to it right that's the that's the difference okay so what are the trade-offs what happens what happens if you I mean that would never update
[01:56:20]  anyway unless the V was a signal right you're setting a value then oh actually you're right it it would be yes at the time of rendering that's so that's
[01:56:37]  so funny sorry I realize what you're saying yes that would be yes it wouldn't update like after it's been rendered but it initially it would render with yes I'm
[01:56:47]  assuming because you wherever you insert my div would happen after V equals yes that's that's funny yeah yeah I mean I'm basically saying it's a function right okay so
[01:57:03]  let's let's let's let's think of the trade-off here essentially the only way you could ever get a reference from an element would be ref right because you can
[01:57:12] 't just you know you this my div here isn't an html div so how do you get an access to like the attributes on that div you'd have to
[01:57:21]  like render it and I don't think people should call the function themselves because they call the function themselves right here we have the same order problem the only way to enforce order is
[01:57:30]  them not to call it themselves which means it has to be a rep in a lot of ways this brings things more in line with html and h functions that they can
[01:57:41] 't return rot emlens either because they push development to even more function wrappers all over the place in a sense they've already gone this way the only way to
[01:57:47]  get resolve nodes is to insert them or call render on them essentially so like yeah I mean if if you made that a signal then that would update too so making it a
[01:58:05]  proxy would update if it was treated as reactive otherwise like the second that it inserts it's going to resolve everything well no the difference is it's not it's more like
[01:58:22]  a block dom if you think about it but it's a little bit different because there's no not every node needs to be a separate thing it's only the top level JS
[01:58:30] X like the blocks and deferred creation isn't introspectable a vdom is introspectable because you create a bunch of objects here we're literally just creating a function
[01:58:41]  wrapper and there might be functions and functions so there what about children helper unlike a vdom our JSX isn't introspectable it isn't a representation to you I
[01:58:59]  have a deferred set of instructions so L isn't a bunch of nested objects it's basically a function that knows how to create DOM elements you can picture compiling to
[01:59:07]  this right this is what I'm saying if you had this this would compile to basically template blah blah blah blah and then JSX wrapper this so this would make the function
[01:59:17]  the special I'm picturing something with a special symbol on it or something you know what I mean so and I made this a function column function so you could see it but
[01:59:24]  I think you can shorthand it to just temple so you be JSX temple I invented our children help with the solve context because it was getting executed out of order
[01:59:32]  but with this things wouldn't get executed out of order so it kind of solves the children problem automatically but it means there's no way to mutate things before they are inserted
[01:59:41]  that aren't part of the declarative bindings that already exist template languages like svelte are used to having this limitation and of the line approach I think I think
[02:00:00]  I depend on children for things like solid transition group there are places where animations where you want to get the elements and mess with them it should be possible ref but it probably requires
[02:00:07]  exploration I heard some react people talking yeah yeah yeah this is the react considers this the I think Sebastian Mark said this was one of his biggest regrets about react is how int
[02:00:22] rospective all the children are all those like as hacks and stuff that component libraries use people on the react core team hate them just straight up and all those patterns are actually like
[02:00:36]  that use like clone element in react are terrible like just they are terrible I I'm not just saying it because it doesn't make sense to do these patterns in solid so we
[02:00:47]  don't have them but like literally the react team thinks they're terrible too they just can't work with them it really ties their hands and I mean I'm going farther
[02:01:00]  when I say no children inspection I really mean it components like switch and match or like route in the router become harder with this approach well they don't render anything any object return
[02:01:09]  is basically no way to get the object ahead of time like how do you just have a component return an object if it's now not introspectable so how do you
[02:01:17]  do these nested component APIs to be fair they could just be functions but there's something ergonomic about making them all nested JSX this is very important pre-univers
[02:01:28] al rendering for making solid components work in non-vdom environments since components are just functions they don't know about the DOM now they aren't if we were to have the
[02:01:36]  ability to execute these early the user would need to be careful not to render native elements or risk hydration issues which gave me a funny idea maybe children could still exist but stop
[02:01:45]  in native elements then at least these sort of components could still exist so the idea is if you use the children helper it would never we can tell the difference between a native and
[02:01:53]  non-native element component so it's possible that we could just stop when we hit a div or template or something like that and children can resolve all the non-n
[02:02:05] ative elements like run all the components down until you got like a collection or array of native elements that would be enough that stuff like switch match and route would work I mean
[02:02:31]  maybe it's also I mean it's an argument maybe why they don't auto-memoize props because they could diff the props and know what the child would need
[02:02:41]  to change and their default position is that we just re-render everything they said it was a performance thing but yeah maybe but yeah there's a couple other trade-offs here
[02:03:00]  JSX would no longer be a criteria for wrappers it's kind of interesting if you if you know that in solid we use getters you wouldn't need to use
[02:03:07]  a getter on fallback because if we just saw placeholder here we'd just be like okay fallback equals placeholder we wouldn't need to wrap it in a get
[02:03:14] ter this is more of a technical thing you'd still need this though for conditionals because you still want to defer this logic you wouldn't want every time like you wouldn
[02:03:25] 't want every time the count went one two three four to return a different one of these you know so most of the optimization this doesn't actually change much on the JSX
[02:03:38]  optimization side and then I my final point is I can no longer do the solid intro demo you know the one where I transform DOM commands into JSX I mean I could
[02:03:56]  still sort of do it but it required changing the append call to render right away a div would not be a div I think this would be a significant impact on the simplicity of
[02:04:04]  the framework the other last thing that I actually didn't put out here is that I mean maybe I mentioned the conclusion this is just an idea that I want to put out there
[02:04:15]  so we can explore it does have potential making things better for hydration server action server components I haven't even explored the space because it hasn't really been open to us but
[02:04:25]  it comes at a cost you notice that server seems to benefit most from this but it would also lend to consistency between H and HTML solutions aren't levered a compiler okay
[02:04:34]  I don't know I don't know why I said it comes at a cost okay I think that was supposed to go here not to there's a performance overhead here more things
[02:04:42]  in memory I haven't tested enough so maybe it's worth exploring but performance aside it's a cost to grade because my gut is this solution would actually be slower to server render
[02:04:51]  because of the extra wrappers it'd be slower to client render basically the whole reason that I was exploring this was to solve the hydration ID problem and my gut feeling is
[02:05:01]  I mean it has to be tested is that in the end we add a whole bunch of extra stuff like more memory more wrappers all this stuff and it would actually be more
[02:05:10]  expensive than what we're already doing so I can't say this conclusively without actually doing more benchmarks or testing but you know it's a question you don't know the
[02:05:38]  order of insertion until you insert and the problem with hydration in general is you need to create the stuff before you insert it it always happens in JSX you create the thing
[02:05:47]  before you insert it so you don't know the parent at the time of insertion that's like the whole problem here what I'm saying is if we're with this
[02:05:53]  approach because you don't realize the nodes until you're literally doing the insert you actually have the parent at the time means that you don't need you would still have like component
[02:06:05]  level maybe hydration IDs like you need some kind of marker to be like you need some kind of like way of being like okay I'm starting this zone but once you're within
[02:06:13]  that area you can literally just trace the walks and expect the nodes to be sequentially there as they're created so when you're like ah give me the next node it
[02:06:23]  will be the next node in the DOM so to speak so I think this this isn't this doesn't like there's still new problems to solve with hydration if you go this
[02:06:38]  approach and I think the performance overhead would be significantly I think it would be challenging I'm just throwing this out here because there's I thought it was interesting there's like
[02:06:49]  other trade-offs when you kind of go into this zone when you consider it like stuff like this looks attractive you know like the whole first section here about not needing wrapping JS
[02:06:59] X has benefits trying to work around children introspection is challenging some parts of me likes the fact that like when people go oh how do you do this pattern you do
[02:07:11]  in React you're just like nope this is a terrible pattern and you get this like just double down on that like I would let me see if I can pull something up
[02:07:22]  let me give me two seconds I'm going to pull up on Discord first I was doing some work and I was doing a bunch of benchmarks a couple weeks back after I was
[02:07:36]  doing the SSG benchmark and I was trying to see if Solid's new reactivity system for Solid 2.0 that I'd been working on essentially you know that I
[02:07:57] 've been sharing on the stream that I've been talking with all you about would not hit performance walls and of course I got my old friend the JS framework benchmark and yeah there
[02:08:10] 's no way in hell you guys can see that see if I can view it in the browser open the browser let's get in there my 2.0 experimental branch what
[02:08:21]  was cool is there was there was some hit on select row but generally speaking we're in the same ballpark park as Solid today and I actually implemented a whole bunch of features
[02:08:33]  that I've been talking about I implemented the trackable signals all of a sudden I made create selector into create projection the mutable thing I basically did all the stuff
[02:08:49]  that I thought oh no this would have bad performance and it didn't which is really good sign which means we can move a lot further because I fixed a memory leak create
[02:09:02]  selector yeah here's another one I basically was working through this I'll explain how this is related in a minute but you can kind of see that there's actually better memory
[02:09:15]  there's the memory is actually worse but there's better removal characteristics on the new system which seems to be good the memory actually ended up being higher slightly memory usage not a
[02:09:36]  huge deal let's see if I can find something else the code size here is a little bit larger too when I switched create projection because then I was using stores in the
[02:09:48]  base implementation to be able to handle the selected rows I don't know if you guys are familiar with the JS framework benchmark but essentially I was working through all of these things and
[02:10:02]  at a certain point I got to a part of the conversation where I was like can we just let's see if I can blow this up discord let me do it can we
[02:10:17]  just get rid of for an index right like can we combine for an index and the way to do this when you make it is that both index and row were accessors
[02:10:29]  and by doing this we wouldn't need different like control flow because if you do the normal by reference approach sure row would never change but you could access a function if you
[02:10:45]  decide to make it like key false it'd be by index if you decided to make it by a specific key you could basically so I was like but you know there's probably
[02:10:59]  a big D op here so I re-implemented it in my experiments and actually again didn't really take a hit on the benchmark it's not like it's basically
[02:11:10]  just I could use the same code for both I just need and add the key there's basically three components for in solid right now there's four which is like keyed
[02:11:21]  by reference there's index which is by index like what you like and then there's like key in solid primitives which lets you do it like react keys where specific like ID
[02:11:36]  key and I realized I can basically combine them all use exact same code and take no performance hit for the for loop version if I change the signature of course changing the signature
[02:11:47]  is awkward because now row is an accessor which will always trigger the reactive heuristic right although most of the time when people use rows they have row dot something so they
[02:11:59] 're triggering it as a property access anyway so it's not actually that big of deal and but the interesting thing is sometimes the API change can basically dictate the way people use
[02:12:18]  stuff even though it has no other significant impact right obviously this simplifies stuff for us because now we don't have to explain there's an index component we can just give people
[02:12:28]  four and they're like okay why does this work you just say set it to keyed false or whatever like it simplifies the surface area a little bit for something as
[02:12:37]  simple as loop iteration but I was kind of like thinking along these lines back to this problem because like if you got rid of the children helper or whatever like you kind of
[02:12:58]  have already given people a golden path forward and like I was thinking okay what other kind of problems can I solve like that right like you know I know this is going to sound
[02:13:11]  silly to people but you know how much people get frustrated about destructuring props and solid what if what if props was a function instead of an object like it's a function
[02:13:25]  that returned an object what if like you always had to go props function dot name to get the props and I'm not suggesting that we do this but when I was playing
[02:13:35]  with four it got me thinking about this because um because like it's people couldn't destructure they would know the second they tried to destructure props it wouldn't work
[02:13:52]  because it's a function and I think people would be more likely because they know the rules are solid of calling functions inside other functions that they wouldn't just like first line go
[02:14:04]  call the function and destructure the props off the function yeah I mean there's benefits to not doing it but it just it's this is one of those funny things where
[02:14:20]  like it probably has almost no implication other than making people type more I know type more but instantly gets them not having the wrong expectation if people are like oh yeah props it
[02:14:36] 's like react except props are a function no one's going to try destructuring them like people come to me with proposals where they're like okay what if we made each
[02:14:49]  prop a function you know and I'm like that doesn't really work well with dynamic props and existence like in checks are really awkward you know in dynamic shapes I'm not saying
[02:14:58]  doing that in fact I'm saying you put getters inside the function you just make it a function so people don't think they can destructure right they will though yeah
[02:15:12]  so it seems like I'm honestly not suggesting this because because like there's still a problem here the real problem but is that this still doesn't work well if you understand
[02:15:29]  reactivity you understand why because when you destructure something or merge something like this you're copying the values not the object descriptors like what I mean is like you're
[02:15:43]  resolving every single thing here and you're not copying the getters across that's why we have special merge props and get props secondly even though this could work you are literally accessing
[02:15:57]  every property so if any property of default values which is probably just a constant or any prop changes you're recreating this whole object again which means any downstream thing that depends on
[02:16:09]  any of these props one prop triggers you re-merge the whole world together the reason we have the fine grain reactivity is so that each thing keeps its own lane
[02:16:19]  and we emerge props so that we can preserve the getters across the cloning essentially so this actually doesn't solve this problem which means this is probably not worth it at
[02:16:29]  all but I find that this sort of funny thinking sometimes doing things like this has way more impact than than trying to in changing people's behavior than trying to like hack fix a
[02:16:52]  problem you know trying to make the compiler smarter or something because trying to make the compiler smarter will always fail eventually there's an edge case there's always some kind of caveat
[02:17:03]  but doing something stupid like this just takes makes something just awkward enough that people probably won't do it right right like the funny thing is what I love about something like this
[02:17:35]  is if you just say props or function you don't have to explain literally anything else to anyone else right like if you start coming up with systems of this and trying to
[02:17:47]  explain like you're kind of like complicating the concepts right so like yeah it's just a funny thing oh see this is why I need to watch twitch see subscriptions I
[02:18:13]  don't get notifications on here on on streamyard so I don't see the messages with it Theo thank you for subscribing for 23 months 23 months streak that's about as long
[02:18:28]  of streak as we have here so thank you very much you actually have me beat I feel bad I only subscribed for 19 months yesterday I haven't been on the streams as
[02:18:40]  much recently but thank you so and the reason I'm talking about this is because you know I saw this after I did this exploration view just released 3.5 and guess
[02:19:04]  what they added reactive prop destructure and maybe this is self-influenced but see svelte all their reactive state is a single variable there's no like dot value
[02:19:27]  or anything on it with this feature now enabled by default values destructed from divine props called and are now reactive nobly this feature significantly simplifies declaring props of things
[02:19:34]  because before you had to do like this define prop thing and now after you can destructure it out and set default values access destructure count is automatically compiled to props.count
[02:19:44]  by the compiler so we are tracked on access similar to props.count watch destructure props variable by passing the proposal away okay similar to props.count watching the destructure
[02:19:53]  prop variable or passing the proposal while retaining reactive requires wrapping it in a getter okay so for those who prefer the things destructure props normal props there's some language tools to
[02:20:03]  do it okay so you get what they're saying they're saying it still needs to work the same way and you still have to wrap it in a function but now you can
[02:20:12]  write it and pretend like you don't have to but then later on you do have to so just remember that when you do it this way you also do it this way
[02:20:19]  and if that bugs you then add this extra tool that will warn you this is sort of what I mean about being on the opposite end of the spectrum of here this is not
[02:20:41]  the kind of thing I'm interested in even remotely see I I know this is not a good solution but I'm I'm way more I would be more willing to entertain
[02:20:52]  something like this because literally this doesn't break the rules and it basically tells you what to do instead of like instead of like let's like make it work magically and then because
[02:21:06]  of that you have to make sure that you have to do it this way over here and then if that doesn't work make you happy then add this other thing like like
[02:21:17]  why why why it was so that you could save writing that extra code here I I'm not yeah what you're suggesting is it's not as big big enough of a
[02:21:38]  deterrent my suspicion is simply getting that out of the construct like so that you couldn't do it in the in the in the function would be enough like I could be wrong
[02:21:50]  but the once you people realize that they can't do you know whatever or sorry whatever count whatever it doesn't matter what it is once people realize they can't do this
[02:22:01]  the number of people who are going to then go okay fine I will do this like once you get to that zone and you you learn the rules of solid you're not going
[02:22:17]  to make that mistake again you know what I mean like I'm not suggesting we actually do this I actually think that silly little deterrents like this are way more effective
[02:22:27]  than trying to come up with some kind of magic that doesn't work consistently across the board and then trying to add more tools to make up for that magic right people learn already
[02:22:40]  like they don't need this to to to like I don't even think this is that big of a deal once you start using solid but it's just funny that like
[02:22:48]  the tiniest little push could could completely change the perspective if if if you basically tell them that destructuring is not good and then you don't make it easy to
[02:23:12]  destructure I'm not saying that if someone comes across solid for their first time doesn't realize that they shouldn't destructure that they're not gonna like try and do
[02:23:19]  that I'm just saying that like yeah I mean you guys are saying you guys are saying that so maybe maybe I'm wrong about this but like as I said I
[02:23:44]  wasn't seriously taking that into consideration but like I find it's often the simplest things that people do like yeah okay so that's what you're saying if someone sees something
[02:24:04]  like that they'll be like oh it's execute as a function I should I should run the function once yeah it is easier to remember because it's different enough to introduce
[02:24:20]  just enough friction to remind you the first time this is in React yeah I mean that's that's sort of what I'm getting at anyway I'm not suggesting this is a
[02:24:33]  good solution I'm just saying that like conceptually if you're if someone came to me with these two proposals I would probably I'd 100% be more likely to listen
[02:24:45]  and work through this with them than than this sort of approach that's just philosophically where I sit here anyway yeah alright so we talked hydration ID we talked about my benchmark
[02:25:09] ing we talked about that SSR Fastify benchmark we talked about what it would look like if we lazily deferred element creation I got I mean I got a few more
[02:25:24]  topics to go along on these lines I don't know if I have anything to add on here I think this is a minor note no one else is following this as carefully
[02:25:45]  as I am so I'm probably going to skip over this one really fast I'll share this in the chat for people who are interested but I've been we didn't
[02:25:58]  talk about how to debug how solid hydroscope okay sure let's talk about that because honestly it's not easy because you know how react shows that like recently very very recently
[02:26:10]  they show you like here's what we got here's what we see it doesn't match that isn't easy for us to do because again it's the same kind of
[02:26:18]  problem we don't know what we got or what like we hydrate as we go so like we don't have a vdom like react creates a vdom and then goes
[02:26:30]  okay I have this vdom I have this real dom they're not matching we are matching on creation instead of matching on diff so we're like I'm trying to grab these
[02:26:40]  things to create the thing and it's not there that's basically all our hydration issues are so you always end up in the same function essentially it's in dom expressions let
[02:26:50]  me let me show you really quickly but you always end up in the exact same place which is you get to this one call it's in solid web when it finally gets compiled
[02:27:03]  all the way down but you end up in this exact one function and it's called get next element and you'll see this call where it goes it goes get the hydration
[02:27:16]  EI key which is basically our counter and it will look for it in here and then if it can't find it it errors that's that is basically it so usually when
[02:27:29]  you find when you have a hydration issue and you get there where you get this error I look and see what the key is and then see if there's any similar looking keys
[02:27:39]  maybe one off or you know and then and they start with the first error because usually these happen hierarchically like first they happen in order find the first error find the key
[02:27:51]  see if something's like one off and what's missing technically if there's a template function there isn't always call the template function and you can sometimes tell what the HTML
[02:28:05]  it thinks it should be producing is but the challenge here is we don't know where it is in the DOM to compare it against so we can't show what you have the
[02:28:16]  diff because we don't we don't we don't actually know so if you can identify what this used to be easier when we had a clone element but if you can
[02:28:24]  identify what template this is like where in your code the template is this will tell you where the hydration error is essentially so I mean maybe a tricky way we could do this in
[02:28:38]  dev is get the template to render and enter HTML it and then basically like look we couldn't find the thing to match this thing yeah that's the thing in order to
[02:29:01]  like we pass in the hydration key but you understand the problem we don't just because we have the key we don't know what the key should find the closest thing we can
[02:29:12]  do is re-render the rest re-render that template or on the client and say like it should kind of look like this what if in dev so you basically render
[02:29:34]  the whole page twice like it will just hydrate error again right but or you're saying just like if it fails then client render the whole page and then yeah I
[02:29:48]  don't know we could we could we could we could on error render this one template but I don't know and put that in here I don't know how helpful it is
[02:30:01]  because it you're basically saying like the template looks kind of like this is that the default I I would think it just hit an error boundary and just be like something went
[02:30:15]  wrong but yeah this is the challenge because all we know is there's a sequence of IDs and we can't find the expected ID in the DOM so there's like
[02:30:39]  basically no connectivity this is this is a kind of a classic comp site problem in a sense in terms of optimization we've optimized all the unnecessary intermediate data stuff out of the tree
[02:30:51]  so we essentially can't even point you back to what your abstraction is this is something that I think about a lot I've been working with the Sentry guys and talking
[02:31:02]  to David Kramer a bit and about debugging reactivity and he wants to add all this instrumentation I'm like you know and I was talking to him like in a dev
[02:31:10]  mode we have extra context we add components back in so we can see it visually all this stuff and in prod you would never want to add these extra layers in and what solid
[02:31:22]  kind of does is flatten your whole graph and then only update what needs to be updated so like you're in this weird zone where you write in an abstraction and we compile
[02:31:32]  it all away essentially into the most optimal code we've lost in dev we can do stuff in prod it's very hard we've lost the abstraction because it's just overhead
[02:31:41]  right not really solid has no idea of components components aren't real so it's like the dev tools have the ability but like DOM expressions has no idea of components like this
[02:32:07]  is this is this is sort of the problem you optimize away all the like abstraction pieces and now you're like saying like uh you know I don't know it's it
[02:32:27] 's an interesting problem and something that as I said talking a lot with with David recently it's kind of got me thinking about more and more because as you know debugging and trace
[02:32:38] ability and monitoring is very important to everyone at Sentry so like it's like how do we make and what he told me and I haven't had this time to I
[02:32:49]  want to maybe tap Armin on the on the shoulder or whatever like a guy works on Flask and Python and I guess this is even more system level coding issue it's
[02:33:01]  like is it there's got to be places where you have a compiler in like C or some kind of language and you've optimized away the abstraction how do you get back to
[02:33:14]  that I mean we have source maps but like that isn't even enough yeah anyway yeah I mean besides including the code to do all the other diffs I don't even
[02:33:34]  yeah I yeah this yeah I don't even know how useful that is going to be because like even if this fails hydrating here then like part of the other parts might
[02:34:06]  be different just because this failed at hydrating like you need to localize on this bug and not like like usually these things happen like waterfalls you one thing errors and
[02:34:17]  a whole bunch of other stuff errors and like client render actually outputs different than server render because there's no hydration ids and all this kind of stuff so it's like
[02:34:25]  I guess you could ignore that in the diff it seems a very it seems a fairly complicated solution right like it it's almost like the solution to this is more complicated than the
[02:34:48]  problem it's solving and I think that's often what happens in dev modes that's why having good debug building is so important because like usually the creating the performance solution is
[02:35:00]  not as hard it is a lot easier than creating like the like debuggable solution I just I think it has to have value and the problem I'm seeing is what you
[02:35:12]  guys are describing doesn't seem particular like it's you need you really what you really want is to be able to somehow hone in on this specific template and where you think
[02:35:28]  it should be in the DOM and we don't know that even after a client render I think it would be hard like even how to match up both sides it's it
[02:35:51] 's almost like the HMR problem actually yeah I'm not sure that seems really hard yeah it's kind of funny because our hydration approach and we've shown this before is incredibly
[02:36:12]  performant because of the granularity the way it just like snaps out elements to hydrate I think this is part of the reason why in a lot of those tests and
[02:36:21]  benchmarks I showed solids hydration is as good as partial hydrated solutions generally speaking it's very efficient compared to other single page hydration even when we're doing full page hydration but it's
[02:36:36]  like I don't know this is something that's like important in terms of solid moving forward it's one of my biggest challenges these days like my only intent when I first
[02:36:47]  created solid was how do I make the fastest possible thing that is ergonomic to write right like how can we make it so that people write idiomatic code and that's the
[02:36:58]  go fast mode the performant mode small you know efficient and even now when I'm looking at 2.0 stuff I'm still been mostly honing on how do we
[02:37:12]  address bad patterns so people more effectively do that it's like a whole other science to figure out how to make like this is why I'm very appreciative people have been working on
[02:37:22]  the dev tools and stuff and people like Damien and you know because like and Alexis actually too when I think about it like we you know with the HMR stuff you know
[02:37:33]  it takes a lot to build out these abstractions to make it like more useful for people in dev when like the actual core mechanics are so minimalist you have to like actually
[02:37:48]  do some work right I mean I'm interested to see how we can explore this problem um but it's like it's almost like designing a whole different system to run
[02:38:21]  in dev is what I'm hearing here I mean and we already do that to a certain degree this has been one of the challenges and then you're gonna kind of get in
[02:38:27]  this new problem it's like if dev and prod are like miles apart what are you actually testing I think it's doable right because if you get to that point where you
[02:38:39]  can keep the consistency and you do that that's exactly the point dev isn't about testing stuff as it is in prod dev is about accelerating people to create the right code during
[02:38:48]  development time and then if they have the ability to do that and it transfers well to the prod code then they get the best of both worlds it's just recognizing that you're
[02:38:58]  basically creating like additional frameworks right because yeah like it's it's like another I guess a lot of stuff I've done with solid it's been like okay it's fairly
[02:39:20]  minimalist it's fairly easy to create you know so I just created the thing and then it's like now to do the dev version we actually have to create like a whole
[02:39:31]  new thing that's actually more complicated and bigger than the initial thing probably worth it but it also drastically changes the the like maintainability concept in terms of like the surface area in
[02:39:49]  terms of figuring out how to how to best do that I think it definitely gets beyond I mean that's why we've built been building out core team ecosystem team and stuff
[02:40:01]  to kind of build out these things this one's a tricky one though hydration is a hard problem and it's a moving target which is I think one of the biggest challenges here
[02:40:09]  if we change how we hydrate we change how we like if this is still moving it's hard for outer layers to consolidate around tooling you know because the internals can switch
[02:40:20]  so I'm still thinking there's wins that can be made purely on the way we approach hydration at a core level like before we talk about how debuggable or how
[02:40:34]  you know but like actually what is hydration and how we should approach it sorry yeah this yeah this is an interesting tangent the gist of it though is I think the best
[02:40:49]  thing I could do see this actually requires a little bit more work because this template won't actually render properly while it's hydrating I think what we could do is on hydration
[02:41:02]  error we could render the template and edit the error message I think that's the best short term thing then you could at least see the HTML for the template that didn't match
[02:41:13]  and hopefully that can narrow it down to which component or area a little easier because that's that's the first thing I do when I debug so if I can save that
[02:41:22]  step for you that seems like something reasonable this was actually one of the side effects of us changing the template function where is it the template function used to return an element and then
[02:41:37]  we changed it from returning an element a little while back because it used to return element and then we clone node it but the reason we changed the return element is so that
[02:41:49]  it could be lazy this means that if you have a template call and it's not used during initial rendering or whatever we don't create the extra DOM notes which speeds up hydration
[02:42:02]  no because JSX is created out of order so it's the same problem again I mean you could find a DOM element if it one exists that lies above it right like
[02:42:28]  although we we remove stuff from the from the hydration registry as we consume it but in theory let's say you could find something above it but it wouldn't necessarily tell you
[02:42:41]  it's a direct parent or anything like that but generally speaking hydration keys have nothing to do with parents for the same problem none of this has to do with parents because JSX
[02:42:51]  is created out of order yeah that's what I'm saying like you could search for the key but there's what does that even mean it means hierarchically in the component structure
[02:43:03]  this template fell somewhere above it it doesn't even have to be a direct parent I mean I guess technically speaking it has to be a parent of that component if we're
[02:43:21]  doing it from opponent ID level so you could you could you could you could get ballpark of what component no but components have no instances so you could only really you could
[02:43:32]  tell yeah like it and a sibling might share the same parent component which means that they would ultimately share the same parent but that parent wouldn't know yeah yeah not really okay
[02:43:55]  let's let's I think probably need to to move on definitely dragged on this topic a little bit I know people I appreciate people making suggestions to try to think about how
[02:44:18]  to solve this problem it's I mean maybe that whole thing that I was talking about in the in that HackMD write-up here suddenly looks more attractive to you
[02:44:34]  when you understand the understand this I don't know but like it's very difficult because the system doesn't know what it doesn't know and by not knowing stuff means it needs
[02:44:50]  less information to operate which makes it more efficient you know what I mean like it's it's it's kind of all goes hand in hand um okay anyways before we're
[02:45:08]  going to talk about that I wanted to talk a bit about um run throw once suspense um I did another write-up on it that I was going to drop in the chat
[02:45:17]  I don't need to talk about this one too much to be fair um because I only really came up with one more realization when working through this um and it's a
[02:45:29]  minor one I wrote a whole article a little while back about how async needed to be scheduled which because if you throw you get the diamond problem um let me see if I
[02:45:42]  can pull up that article again um scheduling thing yeah it's this article and essentially what I go through this whole thing that we've covered it on the stream before about the
[02:46:06]  phasing of stuff but when I get down to the end of driving async I talked about the fact that like it's possible to create places like this where you have
[02:46:17]  two async pieces of data and if you were lazily fetching these based on read if you hit a and you threw then you wouldn't fetch b until after a came
[02:46:28]  back and you create a waterfall and in a sense this is my gripe with react um generally like all their blocking throwing stuff generally is makes it so that like async
[02:46:40]  waterfalls just happen and um one way to solve this I said was scheduling but something that seems really obvious to me now and should have been obvious to me before is if you
[02:46:58]  have that throw once approach that went on stream where once you have a value you don't throw you resolve it but then but the first time when you don't have the
[02:47:10]  value you throw then all you need to do is on initialization of this async state run it immediately and then you don't need scheduling because in theory if you run it
[02:47:24]  immediately you're not if even if this throws b is still going to fetch and then at any point in the future after which a is resolved once even if a has gone
[02:47:35]  async again then b is still going to fetch which means that you don't have to worry about the laziness so you can actually use lazy memos in create async
[02:47:48]  as long as they run immediately on initial creation the chances of waterfalls basically uh goes away. There's a few exceptions to this, but since most of the time,
[02:48:06]  if you have something with shared dependencies, you define them above, you know, like I'm showing here, any argument is generally going to be initialized before you get to
[02:48:21]  the thing that depends on it. So like, this is very unlikely to cause waterfalls. So it's a good middle ground trade-off that I imagine might solve
[02:48:32]  our problem. It means that you'll need to, we need to propagate whether something is lazy without throwing or async without throwing, but you could do this with a flag
[02:48:41] . So I kind of was playing, I was basically saying that in a system like the suspense would be independent of throwing. We, and I know this works because we
[02:48:53]  don't throw today in solid, right? We, we just read from something and say, oh, that's async trigger suspense. So there's nothing to stop us
[02:49:00]  from really have both mechanisms, right? We could have something that when you do something like with create async and you fetch to-dos, you know, and there
[02:49:09] 's no default value. If you read this to-do somewhere, it's going to throw. But if you provide a default value, even though it can read that while
[02:49:19]  this is going and doesn't throw, it could still trigger suspense, right? And in both these cases, these are non-nullable. It doesn't matter whether
[02:49:29]  you have the default or not, that just changes whether it throws or not. But because it throws, it's not nullable because it's a default, it's
[02:49:36]  not nullable. The only place would be nullable is if there's some kind of condition and it could, you know, you know, return undefined. But
[02:49:46]  if this was the case, like you had like turn on fetching or something because it's like based on some UI thing or something, then you'd expect it to be
[02:49:54]  undefined at some point. So that's perfectly legit. That's, that's your expectation. This can be undefined. So separating the concept of throwing
[02:50:04]  from suspense becomes a really powerful tool because now we don't need scheduling, which means that it is possible to create a system that avoids diamond problems. And essentially could
[02:50:23]  work with off screen and not be fetching when things are off screen or auto disposal, you open up all the things that come from not scheduling, I believe it with an
[02:50:32]  approach like this. So I kind of went back and I was like, okay, if these things are decoupled, how should suspends act? And I came
[02:50:51]  up with a few rules. That which throws must suspend. Okay. This is, this is, this is, this is a, this is the truth. If something
[02:51:04]  does throw, you can't show broken UI, so you need to have it suspend. Detaching UI update from user action erodes trust. So things like visible SWR
[02:51:17] . What I mean by that is if, if, if, if you change to a page and you already have the previous data there, and then you're fetching at
[02:51:25]  the same time. And then like a second later, the new data flashes in over the old data automatically. I consider that trust eroding because when someone goes to a
[02:51:35]  new page, they're never sure if the data is just going to update in front of them. Right. So then they don't trust what they see. It'd be
[02:51:42]  different if there was like a affordance that was like, oh, your data is out of date, click and update it. But if you're automatically showing people old stuff
[02:51:49]  and then flickering it in, that's a terrible user experience. Fallbacks when you have content already is jarring. If you are on a page and you navigate
[02:52:04]  to the next page and you just keep on like drop, like your page is full and then you drop to just like a giant spinner and then bring, it's much more
[02:52:13]  jarring than if you'd somehow kept content in front of the person and showed some kind of loading affordance in moving the page. They use this on mobile all the
[02:52:23]  time. Carrying can be acceptable when there's adequate affordances. That is, it's okay to show stuff that's out of date with like, like different things,
[02:52:32]  like show the updated tab name, but the content's out of date, as long as you can clearly see that it's in a state of loading. But I think
[02:52:40]  with, so these are kind of the four rules that I set aside for myself in terms of like how I define a suspense system. But I realize this leaves the design pretty
[02:52:51]  open. Interesting things like lazy components don't need to throw. So they don't need suspense to work. This could still be true. We might still want to force it
[02:53:00] , but you know, just food for thought. It also suggests, I think that a minimum, we should suspend on any newly created suspense boundary that detects an as
[02:53:09] ync pending rate, even if that async value has been resolved previously. It doesn't need to throw. You don't really want like, while stuff's loading and you
[02:53:17]  navigate to a new place to show the new stuff right away. You're okay showing the suspense fallback if you know that, Hey, it's this data is loading
[02:53:27] , even though it's loaded before. Right? Nothing is quite as jarring as loading a page and seeing the old data that see the new page sweep a moment later,
[02:53:36]  you start anticipating when I talked about it. Right? But the problem is putting new suspense boundaries probably isn't adequate enough to guard against this, right? People could try and
[02:53:48]  do this above the suspense boundary. So I think there's a still strong argument for transitions or transactions. In fact, I think really, the only way to guard two
[02:54:03]  and three is through transactions. So, um, I guess long story short is, um, I tried to picture what it would be like to live in a world without
[02:54:15]  transactions or transitions or whatever, and what the writing the code would be like. And this is, this is what I landed at, which might seem like a lot to some
[02:54:27]  people, but the idea is if you had two data sources, one data one that is important, important, like you need to show all the time. And then you had
[02:54:36]  data two that you can load slower. You don't care about showing right away. You, you know, and this is like a page a, there's also a
[02:54:42]  page B you can navigate between pages. You might author it like this and you might be going, why is there all these, you know, pending states and stuff. But
[02:54:54]  the reason is that the idea is the, the concepts that I put above, if you forget about transactions for a moment, what this suggests is that when you go to
[02:55:06]  the page the first time, um, I guess not even the first time, but when you navigate to this page, this data here hasn't been fetched. And this
[02:55:21]  one hasn't been fetched. So when you hit data one for the first time, it's going to do a check if it's pending and decide that it's showing
[02:55:27]  loading spinner, but it doesn't matter because when it gets here and reads and it does a check here as well, but when it reads this data one, it's
[02:55:35]  going to be like throw. And when it throws, it's going to show the fallback of the parent suspense around this whole page. So you're going to see that
[02:55:43]  the page is loading. And then if this resolves before the secondary data resolves, then you're going to see like some of the content showing data one and then the
[02:55:54]  suspense boundary kind of coming in for the second, for the, for the slower data, you know, it'll fall back and then it'll show up. Now,
[02:56:01]  if someone goes in here and updates data one or data two, I added a class here, which kind of grays it out and goes, Hey, data two is loading
[02:56:12]  or data one is loading. Again, it doesn't throw. So you're going to see the old data here until this resolves. And they don't have this
[02:56:21]  new loading class, which will maybe gray it out. And if either data one or data two is loading, we're going to show a loading spinner in addition. So you
[02:56:28]  can picture like a loading spinner beside the header, and then like part of the code kind of slightly old values graying out while they're loading and then it kind of
[02:56:39]  coming in. It doesn't go back to the suspense boundary essentially is what, you know, I would do if I was doing like a, doing this kind of approach
[02:56:51] . And the reason that I'm bringing this up is that if I didn't do all this pending state and we've relied purely on suspense boundaries, what would happen is the
[02:57:01]  second that data one loaded, the whole page would get yanked out, including this header. And you'd see the, the spinner for the page section. If
[02:57:10]  data two, yes, it would just do the loading less important data thing for you. But essentially the, I, this is very jarring if you're on a page
[02:57:19]  and you update some data and some of the whole page unmounts, essentially, obviously I could make this like a second suspense boundary and kind of in, but it occurs
[02:57:27]  to me that I think for most UX and you're used to doing these kind of patterns, yourself when you're tracking your own loading states, maybe you're using T
[02:57:36] AN stack query or whatever, like it's pretty common to have additional loading affordances that are different than the suspense fallback. I don't know if this is unreasonable,
[02:57:46]  but this is just how I think I would approach all the loading states for this if I wasn't thinking about transactions. I don't know if, if anyone's still with
[02:57:54]  me and I know this is a heavy concept, but I hope you understand the, the idea is you have a page with primary content and then secondary content under, and
[02:58:02]  I want to show the life cycle of when it initially loads and then when either data source updates. Right now, a lot of people might just use suspense boundaries and
[02:58:28]  just like have stuff shark away, but I think that's kind of the problem with suspense. It's designed people, it's too aggressive in terms of like unmounting
[02:58:36]  everything. That's why people don't use it. I took the same example again. I was like, okay, what happens if the data one isn't fetched
[02:58:46]  new on the page and instead comes from a context? Now, it wouldn't trigger suspense in this scenario for the top level data. When it hit here, it would see
[02:59:02]  that already had the data. I'm assuming that's why like it wasn't just created here. It was coming from context. But if that upper context had started data
[02:59:11]  fetching again, it is still possible for this pending to be true. So what you would see is the old data potentially grayed out with a loading spinner when you go
[02:59:24]  to the page until the new data popped in. I would say this is less than ideal on initial page load, but it might be better than yanking it out.
[02:59:39]  This is just, I think, where you end up in this scenario. I didn't change the UI stuff that I wrote here at all. I just kind of like kept
[02:59:48]  the exact same code. I just want to kind of play with the idea of what if data was hoisted instead of being, you know, fetched new in each
[02:59:57]  page. This isn't bad UX, but you can always move the suspense boundary, but it's a bit onerous on DX. A lot of additional loading checks.
[03:00:06]  That being said, if you were to build that UI described, you need all this. Otherwise, you'd find yourself jumping back to fallbacks like crazy, which is,
[03:00:12]  I don't think what anyone wants. It'd be brutal if the whole page went back to loading fallback every time something updated. I can't think of an example
[03:00:24]  or any scenario here where I'd ever want that to actually happen. So in any case, this kind of leads me back to I think transactions or transitions are kind of necessary
[03:00:42] , but I want to observe, I did kind of observe one thing about this pattern with transitions. I didn't show the transition here, but something that observed is we
[03:00:52]  ask is pending for these things based on things that are on the page. You can ask if something's loading or whatever, like this is a new helper that I was,
[03:00:59]  you know, playing around with is loading is pending. But when you're doing a transition, it's not always what's on the page that matters because let's say you
[03:01:07] 're routing and you're going to the next page. This becomes pending when you know that, hey, we're going to the next page and this page won't be
[03:01:13]  around anymore. So nothing that you as a developer can ask about this page will actually tell you if it's pending a transition from the router. That has to be passed in
[03:01:23]  from above. The more I thought about it, the more less conflicting I feel about pushing people into managing their loading states like this, because I don't think transitions or
[03:01:38]  transactions, whatever you want to call them, and the question of whether resources or loading are all the same question. Sometimes you need to know, hey, is the data in
[03:01:49]  front of me updating? And that's when you ask this question. Sometimes you need to know, hey, is the whole app moving? Is the router navigating? Is
[03:01:58]  routing or whatever? And these are very different questions that give very different affordances. I don't think suspense fallbacks are sufficient to handle that first case of, you know
[03:02:13] , is this loading. I think all three scenarios actually need to be handled, unfortunately, as it is with different bindings, like with different, with different, like
[03:02:27] , you have to write them differently. You can't, these don't get combined. They're three different cases. Because you, they ask different questions. Right?
[03:02:40]  The first question suspense asks you is, can I render this? It's like an error boundary. It's like, can I, do I have the data I need to
[03:02:47]  render this? The second question, which is, is pending that I was proposing here is, is this thing currently loading or not? And then the third question is,
[03:02:57]  is my application in a state of flux such that, um, I'm like navigating away or like changing, um, something that's like in the background? These, these
[03:03:17]  are three distinct questions that have to be represented in three distinct ways. Anyways, that, I don't know if that's much of a conclusion for anyone. Um,
[03:03:27]  I don't know. I don't think this, today's thought experiment yielded as much as, you know, the previous ones. It's interesting not to schedule as
[03:03:37] ync. It simplifies things. So yeah, I'm not sure this actually changed my opinion on one run once. It feels like, it seems like the right balance.
[03:03:49]  It still has issues where people don't like it unless we were only to suspend when things are thrown, but that doesn't really help with streaming or better DX when author
[03:03:56] ing. You still have to work in your placeholders while they could double up loading indicators. It's the same problem again. There are two classes of pending states, place
[03:04:05] holder auxiliary loading affordance, and often you need to mix and match both to have an ideal UI. And as I said, with transactions, there's actually a third question
[03:04:11] . So yeah, these are just different things that we don't think of them differently today. And I think that's really the key to it. Okay. Yeah.
[03:04:21]  Sorry. I understand. It's, yeah. Oh, did I get a raid while I was in the middle of my, my, my rant? I'm sorry about
[03:04:28]  that. How's everyone doing? Oh, thank you. Uh, 11 rating with a party of 30. That's awesome. Um, I was very deep in new
[03:04:43]  suspense designs, but I'm, I, I, I'm, I'm going to move on from there. I, I, uh, I think I put people to
[03:04:51]  sleep. Well, we talked about SSR benchmark. Uh, we talked about, uh, how hydration, hydration IDs work in solid JS, um, talked about designing
[03:05:05]  different hydration approach and, uh, lazy JSX evaluation. We talked about, uh, some new suspense stuff. Um, I'm going to next, I, I think
[03:05:17]  the next topic I want to talk about is, um, some new reactivity work that I've been doing in solid, uh, two for solid 2.0.
[03:05:25]  I want to show one more demo and then we're going to get into this week in JavaScript and talk about what's been going on in the JavaScript ecosystem. And just talk
[03:05:31]  about the random stuff, you know, the Twitter discussion, so to speak. So that that's, that's where we're at right now. Um, let me
[03:05:38]  quickly pull out, um, what, what I've been working on here. Sorry, two seconds. I'll grab this off screen and then I'll bring it back.
[03:05:50]  I've got an example, um, that I've been, that I've been working on, um, small update, but I've been, I've been having
[03:05:58]  some fun, um, playing around with the async primitives and I managed to push things forward a little bit further. Uh, sorry, just give me two seconds to
[03:06:08]  pull this up. Um, it's funny. I'm like, jump to the present and I'm still not the present. All right. All right, here we
[03:06:30]  go. All right. No, that's still coming up. That'll be in this week in JavaScript. Yeah. Um, we should, I mean, it's
[03:06:56]  just asking the question of is like, can these, this reactive graph resolve? That's all it's asking. It's like, it's just like, it's going
[03:07:07]  to try and resolve it. It's like, are we currently waiting on something? That's all it's asking below in this section of this function, kind of like
[03:07:14]  untracking this scope whenever you ask about these things is something below it loading. That's what it's asking. Okay. So I've been playing, I've been
[03:07:24]  playing a bit with, let's, let's blow this up. Um, I've been playing a bit with, um, with create async and I, I
[03:07:38]  managed to add support for a new feature, um, which is kind of cool. Uh, let's, let's do this, turn this off, which, so to
[03:07:51]  understand this example, I create, I create a signal here that has a value of 10 and then create async is calling this, um, generator, async,
[03:08:03]  uh, async generator function. And then it returns, um, signal and then render effect, console logs that into effect V and let's go back to console. Yeah
[03:08:17] , here we go. One, two, three, four, five, six. Anyways, it goes to 10, right? So what this does is every second it yields
[03:08:30]  a value. And if you wire an async generator function to, um, create async, it kind of comes in, what's cool about this approach is that
[03:08:40] , yes, this is a generator function, but it could also be an RxJS observable. It could be a readable stream from the server, you know,
[03:08:48]  something like, um, use server, you know, how we have crazy serialization, um, where we can basically just on the server side, create a generator function.
[03:08:59]  And essentially, uh, if we make a use server generator function, we can basically stream stuff from the server to the client. Now, if you took that server function
[03:09:09]  and passed it to create async, you, you basically streaming it straight into a signal, right? Um, and I had to play a bit because I was like
[03:09:19] , oh, can I do cancellation? Like, here's an idea. If you set a new signal while it's in the middle of going, well, this would the
[03:09:26]  generator exit, right? And I managed to get that working, which is a little bit of fun. It wasn't actually that hard. Basically on cleanup, you just return
[03:09:35]  from the generator function that leaves. So yeah, I mean, it's see here after two seconds, it actually resets and starts a new generator where the max is
[03:09:43]  five. So, um, yeah, uh, race condition type stuff seems to be handled. Okay. Here, but people, people had asked me some questions, uh,
[03:09:52]  previously when I was kind of thinking about these ideas and they're like, well, what if like, does it just, sorry, does it just replace the value, right
[03:10:00] ? This is what we're doing. Whatever we generate, we're just yielding I replaces the value, right? But it occurred to me, like, how would
[03:10:09]  we make it so that this doesn't replace the value? Like, what if you wanted to like append the value? Like, so instead of it being a signal that,
[03:10:18]  um, that is effectively, uh, just replaces its own value, could we make it so that it, you know, it's like a stream from chat GPT and
[03:10:29]  you just keep on appending the values to the end or whatever. And the answer to that is, is true too, because if you pretend this is coming from the
[03:10:37]  server, you could just go async function here, right? And then if we, if we put this in here, my syntax might not be perfectly right, but
[03:10:53]  I think I can do for await const v of this, and then I can do like, what is it like, sorry, this has got to be this.
[03:11:23]  I should be able to like, what maybe something like, what if I did something like let value equal zero, and then be like value, let's append it, like
[03:11:38]  add it value plus v, and then yield plus equals v, and then yield v, no sorry, yield value, sorry, just give me a sec, did I
[03:11:50]  get this right? Now one, three, six factorial, so like, you know, not factorial, but you, you, you, you, you, you, you
[03:12:02]  can basically take a generator function or, um, an async iterable, and you can iterate over it, and then still have this thing, and I, I
[03:12:14] 'm pretty sure this will still work well with my interruption, my reactivity, if I start here, and then reset it. Yeah, so like, yeah, no
[03:12:26] , I, this, this seems to, to, to check out as far as I can tell. Right. Um, So like, I don't know if you
[03:12:50] 're following, but like, I'm suggesting that this source generate sequence could be something like on the server, like a readable stream, or like, or like, uh,
[03:12:59]  you know, just any kind of like serialized observable or stream interface. So like, yeah, I don't know, it, maybe this is more interesting to
[03:13:11]  some people than other people, but I think supporting both async iterables and promises here, because obviously create async works with promises, gives us this kind of, um
[03:13:22] , maximum flexibility to be able to handle whatever kind of data serialization that comes from the server. Um, I think this is going to be one of those things that
[03:13:33]  is like much more impressive when put together with all the pieces, you know, I'm, I'm looking at this from a primitive standpoint, but like, I'm really
[03:13:40]  picturing that it, that this is like, this call is literally like a server function or, you know, maybe something with web sockets. And then like,
[03:13:49]  you know, we're, we're using reactivity to drive, you know, some kind of sequence or, you know, like, as I said, this could be
[03:13:59]  like fetched chat GPT, essentially. And then this would stream out the, the data, um, you know, and automatically handle it. Um, you could
[03:14:10]  like literally on the server side, just, you know, use the API, you know, use server call, and then it basically would come out to the client all in
[03:14:23]  a single go without API endpoints or like any, anything else. And it would just, you know, GPT to signal. What if I want to stop earlier
[03:14:45]  without resetting from one? Is it possible? I mean, the reason it resets from one is because it's hard coded to one here, right? Like,
[03:14:53]  like, um, like, I just, yeah, I mean, I don't, I don't know, like, it's whatever when create async will run again
[03:15:10] , whenever the reactivity updates, right? So like, you know, we could do something like this. Sorry. And then like, like, if I only change
[03:15:27]  min, it's going to reset as well, right? The, essentially this, this is, you get what you get, right? Like, if this is a stream
[03:15:37] , then the stream starts from here, do you know what I mean? Like, so, um, it's, it's, it's basically, whenever something reactive
[03:15:52]  changes, you can, you can hook up a new stream to the, to the thing. Obviously, if using promises, your sequence is a lot less fixed, right?
[03:16:00]  A stream is going to have a fixed sequence of things that it sends to you, where a promise only resolves a single value. So there's like slight differences here
[03:16:08]  to consider, but what's kind of cool is, I'm using it as a generator functions, but there's a whole bunch of primitives and probably more primitives in
[03:16:16]  the future that it will be async iterables naturally, and they'll just get this behavior and just work out of the box, right? As I mentioned, Rx
[03:16:23]  observables are one, readable streams are another. Let's say the array has a complex object. When you yield the whole array, if you were using those complex as
[03:16:34]  you would still be fine green only to update the last one, right? Same reference, yeah. Yeah, I mean, the, the, the answer to this is the
[03:16:40]  same as the, the generic answer. I mean, it's the same problem when you get any data from the server or whatever. The answer to this is create, um
[03:16:47] , projection, right? We have a primitive in solid. I, I've been, I haven't written the article about this yet, but we, we have,
[03:16:55]  we have, we've been working on derived mutable primitives, which are designed to handle, um, these sort of cases where it goes back to being, um,
[03:17:05]  granular essentially, right? We have stores, which is our granular primitive. And we also basically, I, I haven't written the article yet, but I've,
[03:17:14]  I've written the hack MD to it. I've realized that there is like a certain symmetry between, uh, let me see if I can find the hack MD I'm
[03:17:23]  looking for, but there's a certain symmetry between, um, what is it? This is going to become an actual dev two published article soon. Um, when I
[03:17:34]  finish writing it, um, page two, maybe derivations of the first principle, I, I kind of noticed that we have signals and it's all this more obvious that
[03:17:46]  our setter function of a signal is the same as our computed or memo function essentially. And in the same sense, our setter function for a store could be the
[03:18:03]  same as a different store based projectable, uh, primitive, like immutable derived thing. And the problem I've been having in a lot of reactive systems is everyone assumes
[03:18:13]  everything's immutable once you start driving, which means you always infer diffing back, which means that you all, and once you start diffing, you end up just
[03:18:20]  transmitting the diff all the way down, which means work, work, work, work, work. If we can keep things fine grained, we avoid diffing.
[03:18:26]  And obviously when we have stores and we just write to them, that's fine. But how do you derive a store? And I've been working on this problem essentially
[03:18:34] . And essentially I came up with this idea of this projection thing where like a memo, which is immutable, would say if it wanted to add some properties to a to
[03:18:48] -do that it got, it would, you know, it could spread them and then add those properties. Whereas a projection would just write to the existing thing. Uh
[03:18:56] , conceptually the important part about writing, creating it in this kind of way is to connect the sources to the output. Um, I haven't leveraged that in our
[03:19:08]  implementation yet, but that's the kind of mentality about it. So it's, it's, what's powerful about this is you could take async values and run
[03:19:16]  them through a diff because you, I mean, let's feel basically you don't have the reference and then out through a projection, output them back into a store essentially,
[03:19:23]  like have them be fine grained updates. So you do the diff at the data level at the top if necessary. And then, um, and then if you have
[03:19:35]  that granular information, push it through the rest of the system granularly so so like what I think getting back to our, our, our, uh, playground example here,
[03:19:57]  it's hard to not do some kind of diff here. If you don't like, in the case of a pending, you could picture how you could avoid doing the
[03:20:14]  diff essentially. But the challenge is that like, eventually somewhere down the line at the very end of the dom, you're probably gonna do a diff on a raise. So
[03:20:22]  like if your goal is to project it outwards, yeah, I'd use create projection and feed the create async to create projection. This, this is going to
[03:20:35]  be fair. We have create async store today in solid, but this is going to be probably a fairly common pattern, I think where, um, essentially, yes,
[03:20:44]  this comes in, um, see, in that case, I'd be tempted to keep the sequence, not do the combination here, keep the sequence coming in as a
[03:20:55]  value. And then basically in the projection, do the, the, like, instead of making this an async generator function, I would keep the original sequence going and then
[03:21:05]  add a projection afterwards. Um, yeah, like let's, let's think about how we would do this. Yeah. Okay. Yeah. I've got it. I
[03:21:15]  think we can implement what you want right now. Um, let's, let's, I'm talking theoretically, but like, maybe we can actually just do this right
[03:21:24]  now. Um, all right, uh, what am I missing? Function. Okay. So we, we, we have this going and then const, um,
[03:21:41]  projected. I don't know what we call it. Create projection. And it's going to be, what did we say? It's going to be an array. And
[03:21:52]  I, I honestly haven't tested this. This is very, this is very new. Let's make our projection P and then what we're going to do is
[03:22:04]  every time we get a value from Jen, we're going to P dot push this into here. Okay. And then, and then how are we going to do this?
[03:22:29]  I mean, if we're listening to the whole thing, then I imagine, yeah, this probably won't even trigger. Yeah. This won't even trigger because it
[03:22:48] 's see if, if we only cared about what happened to projected, projected zero, it's never going to run again, but I can make, I can make effects
[03:22:59] . I mean, it's easier to do this with a for loop, but I can make an effect that only cared about. Okay. Let me see how, how does
[03:23:08]  this work? Okay. Okay. Okay. Okay. Okay. I, as I said, I, I don't, the behavior here might not be correct. I
[03:23:21] 'm just trying to see what's going to happen. Huh. Okay. Interesting. Yeah. But I mean, this doesn't quite show what I wanted to show, but
[03:23:35]  maybe it's good enough, but you see what happened? effect one ran and these two were both undefined, but then only two and only three ran. So
[03:23:46]  you're seeing the granular update as we're adding the stuff to the list. It's not rerunning all the effects. It's only rerunning the, the, it
[03:23:54] 's only running like, let me make it seem clear effect zero. So it does run them once, but then it only runs each independent effect after the fact. Does
[03:24:08]  that make sense? So like, essentially we're, we're taking something from, from, yeah. Yeah. Okay. I think that makes sense. Right. And
[03:24:27]  I was actually thinking about this from a Dom perspective the other day, because I, I talked earlier about merging four and, uh, and index, right? Now do a
[03:24:40]  set max. Okay. Let's, let's, let's really do this. Interesting. Yeah. I don't know. We're going to have to look into
[03:25:05]  that one. Maybe there might be a plug here still. Uh, let me try that one more time. Yeah. I don't, I, I'm, I'm
[03:25:14] , I'm missing something here. I don't know how two ended up being. Yeah. Okay. Yeah. So as I said, I'm, this is still
[03:25:29]  pretty new, but oh yeah. Equality check. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. I think
[03:25:37]  that, I think this is something I'm missing. Create async. Can't use the equality check internally while using, uh, maybe, maybe that's what the
[03:25:46]  problem is. Yeah. Okay. I'll, I'll look into it, but, um, something, something was interesting is that like, um, mixing foreign index,
[03:26:03]  you know, makes things simpler for people and adding keyed things for like, these are all keyed approaches. See, the thing is if, if you, okay
[03:26:14] , maybe, maybe this is easiest. I'm not going to actually have running code here, but I can, I just need to type it so you can see it.
[03:26:23]  Um, so I'm just gonna use for, for, for the purposes here. If, if you have pretend you're for, you know, for each something,
[03:26:37]  I don't really care what it is. Something. Okay. And then if you get in here and you have your row and your item, okay. Or sorry,
[03:26:50]  in your index. Right. Um, and then I'm gonna, I, yeah, you know, I actually don't need index for the, for the sake of this
[03:27:02] . I'm just gonna do, I'm just gonna do row. Okay. So then you have a div and you're gonna put some text in it, like row
[03:27:11]  dot, I don't know, some value. I don't really care. Now if, sorry, it's funny because I have this, all this other code running in
[03:27:27]  the background. Let's just do this. Okay. And turn off TypeScript. Okay. So the, what I'm getting at here is if you, if you had
[03:27:37]  something like this, right. And in solid, and if you updated the value, let's pretend that something is a signal at first, right? Let's pretend something
[03:27:51]  is a signal. So the whole value is immutable, right? So you, when you update it, um, you, you're replacing all the objects, right?
[03:28:00]  If the way for works goes, like it goes, okay, is this object the same? I'm not going to rerun this row essentially. So it's only
[03:28:13]  the row that you changed, you know, maybe just to be immutable, like spread the row, you know, like, you know, find the row by ID and
[03:28:23]  then spread something in. It's going to rerun this one specific row, which isn't great because you don't need to recreate this development. So generally in solid
[03:28:37] , what we're going to do is we're going to make this value also observable. You might use a store, you can make it a sub signal, whatever you
[03:28:45]  want, but you'll make this also observable. So, um, let's pretend now that, that this is a store. Okay. Okay. And if this
[03:28:54]  is a store now, instead of, okay, so before, I guess I'll make this more visual because before we had something right and set something and originally, you
[03:29:09]  know, create signal it's an array with, I don't know, ID one uh, text high. So I'm going to change this to text now. Okay
[03:29:25] . There we go. Now if, if we were to update this immutably, we would do something like this. We go to get the current value and we would
[03:29:38] , we would spread the current store. I know there's only one item. So this is kind of pointless, but then we would find actually the, what we would
[03:29:49]  actually usually do immutably would we take s.map and then you would take, um, whatever I'll call this list or I guess technically it'd be item.
[03:30:03]  And then we'd go like something along the lines of like, if item equals some ID then, or if it doesn't equal the ID, this is pretty common kind
[03:30:17]  of approach. If it doesn't equal ID, return item, otherwise return item with our new text. Right. This is, this is pretty common how you handle immutable
[03:30:40]  changes when you have, um, when you have immutable data, you take the current list, map over it, return the current items, so you keep references, and
[03:30:50]  then you get the new thing. The problem is with a new reference, this re-renders, right? People don't like that, um, if you're doing
[03:30:59]  reference-based. So most frameworks, by default operate what I call keyed equals false, which means if, if the, if the row, um, is
[03:31:18]  the same essentially, like for, for solid's perspective, what would happen is if we, if we detect that the object is different in that position, in that index
[03:31:33] , we would just set the signal with the new value and it'd only update this text. This, this isn't how solid normally works, but this is how index works
[03:31:45] , essentially. Right. And this is how we do index here. Uh, when you use react, they tell you essentially, add a key prop. And in,
[03:31:54]  in our version, what that would be, would be like, okay, row id. So now we know it's the same thing if it has the same row id.
[03:32:03]  So then we can check, hey, if the, if this object with the row id has changed, you know, like we, we don't, we know it's
[03:32:10]  the same thing or it hasn't the same thing. And then we know whether to rerun the function or to just pass the updated row text through, right? This
[03:32:19]  is generally how, um, a lot of frameworks work, right? So both the keyed false, like index and the keyed values are geared towards having this immutable
[03:32:31]  data structure. Now, when we use solid, we tell people generally, you don't need a key because instead of doing this, we, if you're dealing a
[03:32:40]  rage, you should create a store. And if you create a store, then you don't do this. If you want to update, if you want to update your,
[03:32:50]  your thing, what, sorry, before I got it, it was new text and id. You like, if you want to update the thing, um, what you should
[03:33:06]  do is arguably something along the lines of like s dot find, um, item or item dot id equals id. So you can get your item there. And then you
[03:33:28] 'd be like item dot text equals new text or something, right? That's, that's, that's essentially, um, that's essentially how you would, would
[03:33:42]  do this with a store. And the difference is because this never updated the array, it literally only updated the text on this item. The array for loop doesn't even run
[03:33:54]  again. It literally just updates this text directly because it goes, okay, you access the text. So all the previous signal versions needed to rerun the for loop in
[03:34:03]  order to, um, to actually update some text, whether it was to inject the new state through here and or not. And then every JavaScript framework works this way, even
[03:34:15]  Svelte. This is part of the reason, um, why solid has been so performant over, over the years is that we're just like, look,
[03:34:23]  we, we, we have stores and we can just not, if you update this text, we don't need to rerun the list. Right? Um, I think
[03:34:32]  Svelte 5 probably changes this, but this, this, this is, this is essentially why it's, it's, once you're in the zone, it's
[03:34:40]  pointless to have keys because you don't even want to run the list reconciliation. if like, if the reference changes, then like you lose the ability to do fine gra
[03:34:51] ined. So you have to recreate all the sub nested reactivity. So like reference is sufficient enough for a key. So you don't need specific, you know,
[03:34:58]  index key or, or, um, or specific, you know, ID key or whatever anyways, but someone, um, suggested something really clever to me the other day.
[03:35:11]  And I've actually built this component before I built it for, um, the, that's crazy spinning 3d cube demo from like four years ago. So anything that
[03:35:32]  iterates over every property to store has re brought them together under the same reactive scope. So any update triggers all updates. Um, so like if you're iterating over
[03:35:48]  the stuff, so some, someone suggested something I thought really clever, which, as I said, I've built this before. What if we go repeat count equals something
[03:35:59] , this something dot length, if you have nested signals, you can have the same behavior, like you put signals inside signals. Right. As long as like,
[03:36:22]  if text is a signal in here, then you can, you can do it. It just manually nesting requires usually an another mapping layer. So you like get your data
[03:36:31]  and then you map it all to signals and then you map it again to do the rendering. Whereas if you use a store, you kind of get to do it all in
[03:36:37]  one go. Um, and, but if you have only a single atom to represent the whole data collection, then the best you can do is run the reconciler
[03:36:48]  and then only like maybe update this one accessor and pass it through. But it's still before that's driving it rather than the specific binding or like signal that's driving
[03:36:59]  it. Okay. So someone suggested this component and I it's, it's like index, but for for essentially stores, because four is kind of for stores. And
[03:37:13]  then when you add keys, when you don't have, when you have signals, what if you wanted index for stores? And the answer is you don't pass the value
[03:37:22]  through. See, check this out. Uh, I'm going to put this through and then I'm going to say something index dot text. Okay. So there,
[03:37:35]  and then I'm going to close this div. Okay. Now if this something was a signal, okay, every single row when you updated it would rerun its text binding
[03:37:53]  to check if it updated. You would never use this. If this was a signal, you'd be better to use this because then if, if this was a signal
[03:38:04] , um, you could at least minimize the, the, the damage essentially, like when in your indexed version, when you're not doing it by a key to just
[03:38:15]  the specific, you could just be like, oh yeah, this is a new data. And you could just say update this text. You'd run the for loop, but
[03:38:23]  you would, you would just pass it through here, like basically update that row signal. And then it would just update this text without recreating the div. But so
[03:38:32]  if you did this with a signal, this would be bad because yes, it wouldn't create the div, but it would literally update every row or this with its keen checking
[03:38:41]  with the value, because it has a value compare the old would know only to update certain rows. This would literally update every row. But if this is a store,
[03:38:52]  this is kind of genius because, sorry, this index should be a function. Assuming like index doesn't change, if you made any change to the store, it would
[03:39:05]  only impact exactly where this binding is and wouldn't run repeat. It's like an even more hyper version of four, like we talked about, like, because it doesn't
[03:39:14]  even have the value. The value changing would never cause this to update only the length changing or the index changing. Like, you know, and if this was, uh
[03:39:25] , if this actually, this doesn't index, sorry, doesn't even need to be a function. If you think about it, because if you can't swap, like
[03:39:31]  it's by key by index, this index will never change. Like you can only update the data on the row that you're on. So in a sense, this
[03:39:40]  doesn't even need any internal signals. Um, all that needs to happen is that when new rows are created or added, it runs the function and appends them on
[03:39:52]  the end because nothing can move like technically because it's keyed by index. So like if data changes, it will be that individual change to something kind of like what I
[03:40:04] 'm showing here with the render effect, like the specific index changing that would cause this one piece of text to move. But if you plugged this repeat into this thing that
[03:40:16]  I was showing here where the generator, where the data was coming in one by one, the value never gets in the count, something length increases. So technically speaking, our
[03:40:26]  projection length increases with the push, but then when it gets to here, it skips, it just goes, Oh, I have one more row or two more rows.
[03:40:35]  It never reruns. This never re diffs this, never passes anything through here. These values can change, but that's independent of this. It only just adds
[03:40:44]  the new rows. So from a, like a renderer standpoint, we actually don't even need to diff the whole array to, to do the whole rows. If we
[03:40:53]  have like an independent store. So, um, yeah, I, the guy who suggested this, this is absolutely genius because we could take, sorry, this is store.
[03:41:02]  We could take this example, get an, a generator function, some kind of stream sequence from the server, project it through into, into a, a projection into a
[03:41:12]  store essentially, and then run it through repeat. Um, because I'm assuming this chat DPD, we don't care. It's not like each chunk has its own
[03:41:20]  model. It's not like a key data. This is like just an order serialized thing, basically append it to the end without re triggering the whole reconciliation or diffing
[03:41:28]  of the arrays. So this effect instead of manually writing all these create effects can be handled automatically by a control flow. So, um, yeah, like this is the
[03:41:39]  perfect thing for live chats or whatever, because you, you can just keep on appending stuff without ever worrying about diffing the rest of the list. So it's funny
[03:41:48] , get rid of index, make it part of four consume it, but I still end up with one more control flow. Um, but I hope you can see that
[03:41:58]  like, so yeah, I mean, I'm still playing around with this. The thing with four is it's really easy to combine this logic together into being all the same
[03:42:06]  control flow. This is a little bit different. There is no value. It's a, it's a valueless, but it gives you, if you have a
[03:42:13]  store, it's like the compliment to four. This is like four with value because you want, this has to be keyed by index. If you have keys,
[03:42:22]  you want to use four, this is the right thing. Basically, the reason I'm doing this is in a sense, if you're, if you have your, your
[03:42:35] , your scenarios are, if you have signals and you're not doing stores use four and use one of the keyed options, but you're probably an optimal if you
[03:42:43]  have to kind of deep data, if you have simple primitives, like an array of strings here, whatever. Now, if you're have more deep data, more like
[03:42:49]  brand new stuff where you have a store use four without, if you need it to be keyed, which is the default, again, use four. And then if you
[03:42:57]  don't need it to be keyed, like it's just some like chunk out, like large thing, use repeat. Yeah. Yeah. I know what you mean
[03:43:08] , right? It's, it feels like you just removed the whole iteration out of it. And like, it's just like, just like, yeah, I know what
[03:43:15]  you mean. You're not like tracking like let I or whatever. It's, it's yeah. It's like the version without the iterator. Funnily enough
[03:43:22] , it's the version without the value, but yeah. Yeah. It's got that same kind of feel anyways. Yeah. So I'm pretty stoked because you start seeing
[03:43:32]  the individual primitives come together. So you have the ability to have async values that are promises or async intervals. You have the ability to project out derived stores
[03:43:46] . And then you have the ability to have hyper optimized control flow. All right. All right. That's what I'm on the show there. Let's get to this
[03:44:02]  week in JavaScript. Hopefully you guys are all still alive. I know the stream was a lot. My recent streams have been, I'm very deep in solid 2.
[03:44:12] 0 design, but, um, yeah, let's, let's get going. Okay. Give me two seconds. I'm just going to get my, my stuff ready
[03:44:28] . Uh, sorry. This is like one of those situations where, uh, my monitor, like this is a new computer. I haven't set up the, the
[03:44:38] , like technically my screen's over here, but I have to drag it off the opposite side and I haven't rearranged my monitors yet. So yeah, just give me
[03:44:47]  a second. So yeah, you guys still awake. I know it's pretty late for some of you, especially folks who are in Europe. It's probably like midnight
[03:44:57] . I mean, you said we get salt too appropriate around here. It's 1.0. Yeah. Makes sense to me. Routing is like the, I
[03:45:10]  talk about layers. Routing is one of the most difficult problems and the most fundamental problems in terms of like architecture. I need the base, the good primitives to get
[03:45:20]  there. All right. Great demos. Thanks. Yeah. It's after midnight. Nevermind. Already getting a little bit later, even in Brazil. All right.
[03:45:35]  1 PM here. Yeah. Yeah. It's 2 AM trooper. Yeah. But yeah, no, to this point. Routing is, it's, it
[03:45:48] 's, it's, we learn a lot and we have to reexamine the core primitives. Routing is one of the hardest. It's just meta frameworks are
[03:45:56]  lay, I guess, on another level above routing. Right. But I think we're still learning a lot here. I mean, I think we're learning a lot,
[03:46:05]  even on the core reactive level, like the changes in 2.0, I think are going to be just, there are a bunch of subtle changes, but they're
[03:46:12]  so powerful to change the way you actually view the way you can build applications. I'm very excited about this. All right. Okay. Let's, sorry. I'm
[03:46:31]  just getting my, my stuff set up. Now we, we need mine. We need solid and we need my bookmarks. Bookmarks tab. When was the last
[03:46:48]  time I streamed? Barely remember. It's like sometime in August. I did like a learn with Jason since then. We talked about some of the stuff already today
[03:46:59] , but okay. August 5th, 16th. I think I, yeah, there we go. Yeah. All right. And then there, let's get back
[03:47:17]  to August 16th. All right. I'm good to go. Are you guys good to go? Yeah. You all, how, how, how have you been
[03:47:45] ? Sorry. I know I, I already asked that. Thanks for, for talking in chat. Show me you're still awake. So I had a funny idea
[03:48:01]  of making a spell video, like a parody on an interview with Rich Harrison. It has all the takes from Freddie Mercury. Is there a classic Freddie Mercury interview that you're
[03:48:11]  like thinking of? I don't know. I might be partially missing reference. I would say I know who Freddie Mercury is and Queen. I just, I can't
[03:48:22]  remember if I watched many of his interviews. I mean, I watched the movie Bohemian Rhapsody, but that wasn't, that was like a fictionalization or
[03:48:30]  was it dramatization? Is that the term? That benchmark? Um, I think I, I talked about that already. That was like the first half of the stream
[03:48:40] . I mean, I'll have some summarizations here, but let's, let's go. Right. It's time for this week in JavaScript. Ooh. Okay.
[03:48:48]  And here we go. All right. And actually this is not where I'm going to start. I just want to get this queued up. Um, I'm
[03:48:57]  going to start with a bit of solid news because there has been solid news, which is a lot of fun. Um, first of all, oldest one chronologically, Nit
[03:49:06] ro Pages, um, pre-release of Nitro Pages 0 of 9, Solid Start 1.0, Nitro Vinci, focal point, image cro
[03:49:14] pping, markdown support, tubular response, and much more. This is a very cool, um, project. I don't know a ton about it, but
[03:49:23]  I think I'm, given that this is one of the cooler projects in, uh, Solid Ecosystem, I think I may invite the author on to talk about it
[03:49:31] , um, some point in the future. She's been very helpful on Salt Start, um, and Vinci getting bugs fixed. Um, so very, very cool.
[03:49:41]  Um, I believe it's like a, I don't want to butcher it, but it's, I know it's related to like, um, yeah, I
[03:49:50]  can't, I can't even butcher it. I know it's related to like CMS style, like page design thing. I, I know nothing. I, I,
[03:49:58]  hopefully we'll learn more about this in a future stream. So let's, uh, I'll, uh, I'll just say that it's very cool to see projects
[03:50:06]  like this out in the ecosystem, especially built on Salt Start. Um, so very, very cool. Um, What else do we got here? Um, Activity
[03:50:23] , Solid JS. I love seeing all those media pieces, pragmatic drag and drop, the solid transition group. I, animations are not a thing I am strong at, so
[03:50:29]  it's really cool to see when people make demos using the solid libraries. Like the funny thing is, I didn't make the drag and drop, but I made solid transition
[03:50:30]  group. The fact that this actually works, is, I shouldn't say surprising to me, but it makes me feel a little bit more confident. Hopefully, um,
[03:50:35]  stuff like this is easy for people to make. Um, Um, again, solid JS with party kits. These two sound like a marriage made in heaven when you consider
[03:50:53]  real time systems in solid JS, but very cool to see talks coming out in the wild. About this stuff. Um, so yeah. Are we learning with Jason?
[03:50:59]  That was a lot of fun. If you want to learn about solid start, um, it's basically like the talk I gave at dev world, but spread out over 90
[03:51:12]  years. Jason asks great questions, makes a lot easier for people to follow along. I get a little technical, but I show off single flight mutations, which is,
[03:51:18]  you know, cool. And all the like, high level features. Solid start. You've probably all seen it on my streams in the past, but Jason just has a
[03:51:37]  way of getting out, getting it out of you. He was the first person that I, that he's the one who can, where I accidentally fell on the hole
[03:51:44] , pull the signal out of the component thing. It was during his stream. He was just like asking a question. He's like, Oh yeah, this is very cool
[03:51:50] . So how do you handle global state? And I was like global state. I don't know. And then I was just like, I pulled the signal out of the
[03:51:55]  thing and it happened the first time on a stream. So yeah. Thank you. Yeah, no, it was, it was great. Yeah. Um, what else
[03:52:07]  is here? Yeah. Uh, I joined century, um, which was really cool. Also really sad. I have a bit, a little bit torn about this. Um
[03:52:19] , it made a lot of sense of where I'm at and what we're doing with solid. I love Netlify. I, Netlify has been there
[03:52:27]  this whole time. They are very supportive of the work in solid and solid start. The great people working there, passionate people, you know, especially when I worked a lot
[03:52:38]  with, uh, devil, the dev rel or developer experience team. And also with the frameworks team at various times and actually in the recent couple months, the frameworks team
[03:52:48]  and the like runtime team got merged. So like they got the compare notes on primitives, which is really cool. Um, uh, Netlify is still our home
[03:52:58] , you know, even with me moving on to this role, uh, with century. Um, so I'm still very, very, very into that. They, they
[03:53:07]  still are biggest open collective, uh, donations. They help sponsor hackathon, which is really cool thing coming up. Uh, if you guys haven't seen it,
[03:53:17]  um, we did the announcement here, but there is the website, which has way more information. I don't hope I ever see it. It starts in 24 days,
[03:53:24]  five hours and four minutes. We have a countdown, but essentially bigger prize pool this time, $15,000, um, between our two sponsors. I think we
[03:53:36]  were actually looking at getting a couple more sponsors on, but century and netlify both have, uh, stepped up here to, to make this possible. That's in
[03:53:43]  much love for, for both companies. Um, it's kind of cool that they, they aren't competitors to each other. They're kind of tangential, like where
[03:53:50]  they kind of are complimentary is a better term. So it's very cool to have, have this, uh, working. I, I, I actually had the privilege
[03:53:57]  today for the, I just started century and I got into netlify shared century, a channel, um, on the slack. So like already, you know, back
[03:54:06]  in communication with my old team. So very, very, very cool. Um, so yeah, basic idea. It's a month and a half long hackathon.
[03:54:14]  We'll give you the categories on October 1st. That's when things kick off. Um, you be able to start submitting October 31st and then voting will start and
[03:54:24]  then winners and announcement. The idea is it's not one drop except 15,000. We're going to split it across multiple categories and price placements. I believe
[03:54:34] , um, the full rules and regulations are here. Um, more details will come, but we haven't seen one of these in a while. I don't think,
[03:54:41]  uh, we, we did the, I feel like the first one in our kind of group of community and then Astro did one and then Svelte did one and
[03:54:48]  we just haven't seen it. I know that economies have been on a down. It's been harder. I, I, I think it's good to, you know
[03:54:54] , have fun and get out there and just build stuff. I know it's, it's a hard time to ask that, but it's what I've been missing
[03:55:00] . I, we were waiting on solid start and then it got pushed back for various reasons. And then, you know, came around and it's this summertime, not a
[03:55:07]  good time there. And I'm just like, I talked to David and I was just like, man, now's the time we just got to do it. I know
[03:55:12]  we could push it to next year. Maybe that's a better time of year, but ultimately it just has to happen. I want to see people building again. It's
[03:55:20]  a lot of fun. Um, so yeah. Yeah. Quick did one. Yeah. I, when, when was that? It feels like it's been like a
[03:55:32]  year or two since. Yeah. You haven't done one since. Yeah. So like, yeah, you know, let's, let's do it. That's
[03:55:48]  I'm, I, the hackathon announcement got a little overshadowed by the, uh, by the century position, obviously big news, but I don't know
[03:55:59] . A lot of love all around for both companies. It just, it's, it's amazing to be able to do what I do and have people invested in this,
[03:56:00]  you know, like, I don't know. I think they all, everyone understands like the challenge and difficulty in that position, trying to build this framework, you know
[03:56:14] , reacts place in the ecosystem, you know, just all these elements of people want to feel part of, you know, continuing innovation. Even if things don't end
[03:56:24]  up, you know, taking down the big guy, we got to keep on striving to make the web a better place. And I'm, I'm hoping, I mean
[03:56:33] , I hope I, I mean, I have the incredible opportunity to continue doing so. So I'm, I'm very thankful. I'm very excited about this.
[03:56:39]  All right. I mean, honestly, it's, it's, it's amazing to have worked with the people I've worked with and like the bosses and the communication,
[03:56:56]  um, of Netlify and even like, I'm very blessed. I, I'm, I'm, I'm, I'm working on, um, the
[03:57:01]  team directly with, uh, the CPO now, the original founder, David Kramer, which puts me right next to adjacent to like the syntax guys, you know,
[03:57:11]  Wes Boss, Scott Talinsky. They're all part of the, our, our same part of the org. So like, I don't know. I think it's
[03:57:17]  going to be really awesome. Um, for solid, uh, I think, I think beyond some of the technical aspects that I like about century positioning, I think this is
[03:57:26] , will be a good place to push more on the market. to push more on the marketing side and get the word out more. Um, uh, they, I
[03:57:33] , I feel like I'm in the right realm to do that. So yeah, it's very good. Yeah. Talk about solid hack. Daniel doing great work getting newsletter
[03:57:46]  out. If you're interested in solid, definitely do check it out. He's been doing it every month. It's great. Um, yeah, learn with Jason
[03:57:55]  again. He does such high quality stuff. It looks like my video quality wasn't the best, but, um, I, but yeah, I don't know. Good
[03:58:06]  times. Okay. That's solid news. Let's keep on moving. Um, go back on some tech. Yeah. It's been a little while. I'll
[03:58:14]  talk to them. We definitely got some, some, some interesting stuff. Um, Okay. I should have started here, but we'll go here. Be aware of
[03:58:26]  that stream where I spent the first 15 minutes complaining about how YouTube didn't work and went in detail and like showed the bug and us debugging it. And you guys are all
[03:58:35]  giving great suggestions. Awesome time. Um, I kid you not, two days later, the bug was fixed in YouTube. It's been broken for me for like, uh
[03:58:38] , let me see. Since, yeah, since the beginning of the summer, I want to say since like June. Two days later, bug fixed. So I don
[03:58:39] 't know if someone talked to someone, someone working on the stream. I actually had one guy from Google reach out and be like, Hey Ryan, help with the thing.
[03:58:56]  You know? So I think the word got out and the bug got fixed. So I'm very happy. Um, uh, that, that it, that it ended up
[03:58:56]  happening. So just side note, everyone who saw it knows what I'm talking about. Okay. What else we got here? Pre alpha testing tan stack. Yeah.
[03:59:12]  Tanner's getting the word out. Tan stack started starting to get going. Um, some of the AP, he, he, he, he, he, he got the
[03:59:18]  word out. Um, we're kind of getting starting to get to point where consolidating. I met with him once this week, want to meet again, kind of
[03:59:28]  start consolidating more of the stuff between solid start and 10 stack start there. You start seeing the same problems and I'm not going to say those problems are Vinci.
[03:59:40]  Um, we're working through stuff. Um, I, I think the next time bit of time period is critical. So the problem with solid start is we couldn't
[03:59:52]  wait. We needed to keep on pushing and getting stuff where it needs to be having the right API is the right design. Um, that's what that was key for us
[04:00:00]  for getting to 1.0. We needed to make sure that, you know, because otherwise people don't even try it. Honestly, this is kind of the problem.
[04:00:07]  You, at least our APIs are locked in and we've been finding, you know, bugs we didn't find because even in the beta phases, people just weren't
[04:00:14]  trying as much as there is. A lot of new issues have come up. But the key part is Vite 6 is a game changer that it has a profound impact because
[04:00:22]  it took a while the best parts of Vinci and brought it back into Vite. And we need to do the refactor. And I think things are going to clean
[04:00:29]  up significantly when we can do that, which should be coming up in the coming months. Um, so yeah, I, I, I'm glad that this is getting
[04:00:48]  attention. I've been seeing a lot of people talking about it and trying it. It's, it's, it's one of those kinds of experiences that I'm like
[04:00:55] , I, I'm kind of like, when Tanner says something, it gets more attention. Do you know what I mean? So sometimes I'm like, man,
[04:01:03]  this is what Solid's been doing for like three, four years now. You, you know, we're built this way, but it's like, Tanner's like,
[04:01:12]  yeah, I think we should do this. And everyone's like, yes. And I'm like, oh, because it's React. I know. But it's,
[04:01:18]  it's just like, it's, it's been like, it's, it's been very satisfying to see React folk come around on this way of thinking. Um
[04:01:26] , but it's, it's still a bit of a gap to close it to get all the way to solid. So Tanner does great work. I, it's just
[04:01:35]  like, it's like, can I connect the dots all the way across the board? You know what I mean? Um, Let's see here. Now we get
[04:01:50]  to start talking about some of the discussion topics. Um, let me do a quick scan of my bookmarks, see if there's anything I want to say. Okay.
[04:02:00]  Here's a quick one. Daily reminder that just because something advertising itself is lightweight and looks lightweight does not actually mean that it is. You can fit five solid JS or
[04:02:13]  Preact in your app for the price of one Alpine JS. Yeah. Thank you. Yeah. Yeah. Core developer in Astroville. That's what I
[04:02:25]  thought. That's what, that's who I thought this was. Um, so I should probably follow. Um, although probably a Mastodon. Um,
[04:02:32]  They would know to working on, uh, on, uh, um, Astro, you see this stuff. It's, it's, it's funny. There's
[04:02:47]  like, there's perception that like, uh, like, like stimulus or like some of these server things, you know, are small, but they're like, not.
[04:02:56]  It's funny how crazily optimized client side frameworks are. I know people look at react and go, that's fake. But The amount of effort that goes into pre
[04:03:05] act or Svelte or solid, like, like to, to like, we spend so much time worrying about the network and size almost a stupid amount that I don't
[04:03:13]  think it's kind of funny that like the bar is just in a completely different place. Right. Hey, Shai, it's been a while. Um, but
[04:03:34]  yeah, uh, sorry, fuzzy. I might be missing the reference here, but, um, never argue with the fuzzy. Okay. I'll take it. Um,
[04:03:54]  but yeah, no, uh, I, I, you have to, it's worth double checking. You know, uh, I thought this was funny. Interesting.
[04:04:10]  Someone pointed this out to me. Thinking of doing a talk in the way we built Midjourney's website, which is rather unique in some ways. For now, reply
[04:04:15]  to this with questions you've got and I'll try to answer them. Okay. I was, I was, I was, I was, I was trying to see
[04:04:27] , there, there was, there was, there was a whole, I don't think I'm going to, I'm not finding it. There was like a whole thread
[04:04:43] . I don't think it's just an article. Let's get started by, no, it's a video. Um, there, there's a whole thread on
[04:04:49]  like the approach they took, but the way they were talking about how they approached, um, um, designing it. It was really interesting. It, they were talking
[04:05:06]  about how they like designed it in a way to flattened out the trees. It was, it was like, they, they used React, but they almost like they
[04:05:16]  worked around React and the way they were describing it was, was almost exactly the way I described the benefits of Sol.js. The site re-renders well at
[04:05:25]  120FPS so we could have arbitrary CPU driven animation developed extra complexity for various reasons. We had to remove them. I wish we could show these somewhere, blah, blah
[04:05:32] , blah. Modern component hierarchy over couples way too many trees into one. Most tasteful UX have global nature and don't fit. Okay. So they're talking about pulling
[04:05:40]  it out. Like in the modern apps, the shame we fight against is the tree structure every time we want to do something fancy. So we decided to kind of flatten everything
[04:05:46]  to go through other methods. Basically we need to component hierarchy to be late bound, writing time, runtime, weather, plenty of interesting explorations here. Yeah, it
[04:05:55] 's, it's, it's, it's, it's interesting. So we decided to flatten everything. Yeah. It's, I, I would be interested to see
[04:06:11]  more. This caught my attention. I, I, I think that people have been building stuff in the React way so long that, um, it's not, it
[04:06:23] 's not like obvious anymore how you can approach things in a different way. Anyway, talked about the benchmark. Okay. This is a cool little one. Let's do this
[04:06:38] . I saw this. Some people told me about it and it's, it's, it's, it's very interesting. I got flagged on this. So
[04:06:47]  the idea here is that with Preact, you can stick a signal in the server, in the server, front matter and Astro, pass it to two components and then
[04:07:01]  ta-da global state. Cause so basically some, and some people asked me how this worked. Cause like, oh, you're putting signals. Is this server signals
[04:07:13] ? And it's like, no, no, this is not server signals. This is a smart way of deduping serialization, right? Because what they,
[04:07:23]  what they managed to do is serialize. When you pass, the only thing that's serialized in an Astro app are the props you pass to the client components.
[04:07:32]  So if there's a format that you can serialize a signal, then you could, if you had a way of like de-referencing it, like unique
[04:07:45]  ID or some kind of serialization format where you like knew that they were the same signal. When you, every adapter in Astro has the access to the data coming
[04:07:55]  in on the, on the client and the server. And I guess on the serialization side. So my, my guess is that Preact specifically serializes in a kind
[04:08:05]  of deduped manner for signals, um, inside their Astro adapter. And then on the client side, when it picks it up, it creates one and it
[04:08:13]  goes, okay, when it goes to deserialize, like it finds the same instance. So basically these signals aren't actually on the server. They're just kind
[04:08:22]  of like passed in as serialized code on the client. So the signal doesn't really get created on the server. It doesn't do anything. It doesn't update,
[04:08:32]  but on the client, you, and if you updated on the server, you wouldn't get that. Like it wouldn't pass to the client, but it basically initial
[04:08:40] izes on the client as the same reference is, is how this works. And, um, it's, it's, it's a, it's a brilliant way of
[04:08:48]  sharing state. Cause if you try and share state right now, um, in Astro with most signals implementation, what you have to do is you have to make a separate
[04:08:55]  file and then you have to import it in both places. That works, but, um, this saves the need for a separate file. Um, there are some,
[04:09:07]  so there are some like, uh, let's see if I can, can pause at the right moment here. Some things you have to consider about it. Create state on
[04:09:16]  the server. You're not actually creating it on the server. It's just a shortcut for creating in the client. And then here, you can see it. So
[04:09:26]  they bring the, the, they bring it out in their props. And then because signals in preact are read, write you, and they're being instantiated on
[04:09:37]  the client, you have the ability to update it, right? Like if, if signals. weren't read, write this feature would be basically useless, right? Someone
[04:09:48]  asked me if I'm going to implement this in solid. I'm like, no, it's, it's useless because it's not actually updating. The, like
[04:09:56] , first of all, you have to pass a signal instead of the value, which is counter to how we work, but it's also because you have the ability to update
[04:10:04]  it. Right. Um, so it's like, it's, it's kind of, it's, it's kind of an interesting thing because it works well in
[04:10:13]  this situation as a shortcut, but it like also, it doesn't, it doesn't provide any new functionality that you couldn't do before. It's just like, it
[04:10:23]  saves you from creating extra file. Right. Please do the same solid. Yeah. Yeah. No, not, not happening. Like we would never encourage people to pass
[04:10:35]  signals directly because it, it kind of lies about what is reactive here. Like, okay, let's pretend I thought this was a good idea. Right. And let's
[04:10:47]  play this out. Right. How, what if now my state isn't just a signal here? Now I have a computed value because I derive some stuff. I might
[04:10:59]  think that that would work, but I'm like, like, I'd say it'd be interesting how much of the graph they serialize. I wonder, is it possible
[04:11:12] ? Maybe you can ask me, can you pass a signal to one component, pass a computed that drives off that signal from a different component and then update the signal in the
[04:11:18]  one component and have it update the computed in the other component? That works. That works. That's like a little bit more interesting. It might work. If they
[04:11:25]  know to serialize the whole reactive graph. It's just interesting. Cause like, basically you're not actually making something on the server. You're just expanding the component definition
[04:11:37]  to outside of the component is the best way I could put it. Yeah. I suspect that this approach has limits, but even if it doesn't, I think that
[04:11:52]  like, um, idiomatically, we'd never really support this simply for the same reason that like, we have set state separate from like, we don't use dot
[04:12:04]  value. You know, um, as I said, I don't, I don't know if it's like, I think one of the interesting things that I haven
[04:12:13] 't added to the asteroid after I should consider is we could add context really easily so that if people put islands inside islands, they could read the solid context. And then
[04:12:22]  they could like basically provide signals that way. Again, that's a much more our way of doing things. Um, cause this is kind of like implicit global state. It
[04:12:32] 's fine. Cause it's pre-wired and people will probably like contract it. It's interesting. I see, I do see the convenience here. Um, if
[04:12:42]  you get what's going on, I think the problem is when people see demos like that, they don't get what's going on. They think that like, these are
[04:12:47]  server signals or something, which they are not. Anyways, it's, it's interesting. I think it's interesting. I think it's very clever. Um,
[04:12:52]  especially because of this one easiest way to share state between islands. It definitely is because you don't have to create an extra file, which is huge. Although yeah, actually
[04:13:07] , I think that is actually pretty huge. Cause I was going to say like, if that state needed to be shared across different points, you might create extra file anyway.
[04:13:15]  But if, if, if, if it's like a prop drilling problem, like where you create the signal in one place and then you pass it to different. in
[04:13:19]  one place and then you pass it to two components, then I think then this solves it pretty cleanly. Okay. Okay. Okay. We'll talk about that. And
[04:13:29]  we'll talk about that. Okay. Um, that, okay, cool. So we'll get to those two, but let's switch back to this before that. Okay
[04:13:43] . Okay. One reason off is so controversial in this community is that almost none of the full stack JS web frameworks fried and built in off provided to handle the most common
[04:13:55]  use cases. We're too focused on the wrong DX improvements, blurring the lines between client server, reinventing the wheel, adding foot guns, and focusing on useless metrics
[04:14:02]  while leaving actual DX improvements on the table. Third party services. Imagine how much less a problem off would be if your MPs create command had built an off provider for
[04:14:11]  the average use case. I've been seeing a lot of this sentiment recently. Um, not just about auth, just in general where people are like, JavaScript frameworks aren
[04:14:23] 't full stack enough. like they aren't doing the same thing. We're getting like more criticism from like the Laravel side of the world or the rail side of
[04:14:29]  the world. And I think it's fair, especially because we're sitting there to compete in the same realms as them. But it's also like, the, the
[04:14:48] , the, the solutions that are trying to do this are the, or get further in this direction are the same ones that are getting the most criticism here because they're trying
[04:14:57]  to consolidate on literally shaky ground. And they keep on changing stuff and people are getting pissed off at them. Like it's almost like it's premature to make this level
[04:15:07]  of, of, of optimization. I think the problem is sometimes like understandably, uh, backend ecosystem is out of touch with what's going on the front end.
[04:15:16]  Same way that we've been out of touch with what's been going on the back end. And I feel like the move towards live wire type architectures, like web so
[04:15:24] ckets, persistent connections, um, client side folks haven't really, they've been sleeping on it. You know, they haven't really been, um, you know,
[04:15:33]  recognizing that this is a game changer in the same way that a lot of the technologies that have been getting built, um, on the client side in these isomorphic frameworks
[04:15:44]  are, are brand new essentially. The last couple of years, like a complete shift or shakeup. So like, I agree, this would be nice, but like
[04:15:52] , if someone tried to do this, I think next off is almost a perfect example. Like they've had, they would have had to just keep on changing what they're
[04:15:59]  doing over and over again. You know, um, we're focused on the wrong DX improvements. Um, I'm not sure about that. I mean, that's
[04:16:10]  easy to say, but like, I think the problem is it's, it's, I think a lot of the work right now isn't DX inspired. It was
[04:16:27]  for quite some time. Like the whole rise of next JS was kind of DX inspired. Like that whole period of 2018, 19, but when 2020 came around, it was
[04:16:35]  UX inspired and then DX had to catch up again. It was like one of those flip overs that happens, you know, constantly, you know, in the history, you
[04:16:41]  know, every few years you go through these cycles. In 2020, everything was new again. And then we had to find our DX again. So I don't think
[04:16:47]  it's about DX improvements. It's about like shearing in the gap as stuff is moving. Um, what was my response here? This is a matter of time.
[04:16:53]  All the focus has been on cleaning up around my smartphone models because people coming from a client standpoint is a non-starter otherwise. There've been attempts at JS frameworks that resemble
[04:17:00]  other backends, but they've been a complete miss. Yeah. Like stuff like Adonis or, um, inertia or whatever. Like they're, they're fine
[04:17:07] , but like actually, and they're much better than their historical predecessors. It's in the zone, but it's like the nature of client side frameworks has changed
[04:17:18]  such that like people kind of treating it like the thing that they stick in their rails app, you know, and the client and they do this like that kind of split,
[04:17:25]  even though it's like essential. Some cases is not leveraging the power of what these things are doing. Like the problem is like, in order to deliver these hydration stories,
[04:17:36]  do things that matter from a UX standpoint in the client, you need JavaScript on the server. I know people feel that's controversial, but it's literally, and as
[04:17:44]  we talked about earlier in the stream about like the difference between my two millisecond and 10 millisecond rendering times, like we're talking about from a user experience standpoint, way
[04:17:55]  bigger upside on the JavaScript stuff and what you can get from that. Um, so like the problem is these are difficult problems people are trying to solve in a zone that
[04:18:07]  has greater impact on the end user. So they're going to like, there's nothing that can be said from a back end standpoint, that's going to compel
[04:18:16]  or change the narrative here of front end frameworks right now. People don't like the complexity. They don't like all the shifting that's going on, but people are going
[04:18:24]  to look for an answer because the potential to change things up is so drastic. But so like I said, there's no point talking about off if the ground rules for
[04:18:34]  communication aren't even set reinventing the wheelchair and it's been painful, but meeting in the middle involves respecting client renders ability to leverage both sides of the network.
[04:18:41]  It's non starter. It's non starter. Otherwise, see, the leverage in both sides are the key. It's the same thing you find something like live view,
[04:18:48]  right where you have the persistent connection, but then the client is doing stuff as well to kind of keep keep that going, right? The classic models of just client or just
[04:18:56]  server are kind of falling apart. They're hitting their limits, let's say. And I think that like, yeah, this is like still relatively new ground and that
[04:19:14]  like RCs and all these kind of like other patterns are getting developed out that it's hard to actually like staple down, but it will happen. That's, that's
[04:19:22]  kind of, I don't know why there's no responses. It looks like there was one, whatever. It doesn't really matter. That's, that's,
[04:19:32]  this is actually kind of related to some of these other topics. I just, it was, I think, I said something the other day came to me and like, oh
[04:19:40] , you know, what, why isn't there like a Laravel JS or, you know, like, what, why can't I just do that? And it
[04:19:50] 's like, like there is, but that solution as is would JS community would probably reject it because it wouldn't be good. It wouldn't integrate with react well enough.
[04:19:59]  There's a reason why, like, these things are the way that they are developing out to. It is client centric. So maybe we're ignoring or not focusing
[04:20:10]  on some of the classic server dilemmas, but it's because it's not for DX considerations. It's literally trying to redefine the management over the network. I
[04:20:21]  think this is the whole focus right now. People are trying lots of different stuff right now. So it's funny because we have, we're going to have people trying
[04:20:31]  to push new ideas. We're going to have people trying to bring back old ideas, and there's going to be a lot of this kind of overlap over this cycle.
[04:20:36]  Definitely. Let's continue on. We already talked about that benchmark and rich Harris and all that stuff. Right. So we did all the tests here. All of this
[04:20:53]  ended up showing was that Solid has hydration IDs. Those are, unlike the others, are expensive. It's a trade-off. We have fast hydration because of it,
[04:21:03]  but we have slightly slower server rendering. Solid makes up for that by being the fastest at rendering on the server, like from a raw standpoint, which compensates for the overhead
[04:21:13]  pretty well. But, you know, one day other frameworks potentially will get a bit faster there if they catch up to the speed that Solid renders at. Let's
[04:21:26]  see here. All right. Okay. Let's go over to the bookmarks then. Okay. Okay. Speaking of that, I'm going to switch my view. Give
[04:21:39]  me two seconds. We're going to look at this video here that came from Jose. Let me share how I'm sharing my screen. Sorry. Two seconds. And
[04:21:53]  then present. Share screen. Bookmarks. Yeah. Sorry. I'm going to share audio. Now you guys should be able to hear this video while I talk over it
[04:22:01] . I wrote an article about it. Have you got the chance to see this video? Hi, everyone. So a couple of months ago, there was a discussion online
[04:22:12]  about client side frameworks versus server side frameworks. And a lot of the underlying current in that discussion was that client side frameworks, they are intrinsically better or that there is
[04:22:29]  a whole class of bugs that can only happen in server side frameworks or that server side frameworks are somehow intrinsically limited, that they have a ceiling that they can't break through
[04:22:43] . And of course, I disagree with that. I do. I don't think it's that the framers have a ceiling. I think that, I mean,
[04:22:54]  there are inherent trade-offs for where you do the processing of any kind of work, right? Like, it's kind of like the old, you know, do
[04:23:05]  you do it in the level one cache? Do you do it in the level three cache? Do you do it in memory? Do you do it on the hard drive?
[04:23:13]  Do you do it across the network? So. So, yeah. I wrote an article about it. But what I wanted to do today is to show like in practice
[04:23:27]  that a lot of those bugs that people were saying it only happened in server side frameworks can actually happen with client side frameworks as well. And I'm going to show this through
[04:23:39]  ChatGPT, through the ChatGPT UI. So I heard that yesterday ChatGPT got a new UI and I know it uses a client side
[04:23:49]  framework now. I don't know how it, what it did in the past. I never checked, but now I am certain that it is. And then this is not
[04:23:56]  a dig on the ChatGPT team, right? It's quite the opposite here. They are going to happen, right? They are going to happen because there is
[04:24:04]  a distance between a client and a server, right? There's the latency there. Okay. There's a distance between a client and a server. There's a latency
[04:24:11]  there. Okay. Yes. Nobody can make that disappear, right? So those bugs will exist and you should not let anybody mislead you into thinking that there is a
[04:24:27]  magic tool, a silver bullet that is going to solve all those problems transparently for you. All right. So let's get started. So the first thing I want
[04:24:37]  to show is like the latency when using ChatGPT UI. So for example, if I come here and say, look, I want to delete this conversation.
[04:24:45]  When I click delete, you can see there is some latency until the thing, look, until the thing is removed. I do. So there's no optimistic UI here
[04:24:59]  then, because if you optimistically delete something, the client can delete it immediately before anything else even gets sent off to the server. So no optimistic UI here. I
[04:25:10]  think I know what he's going to say though. Right. It gives the impression that you clicking on the button or confirming the deletion that nothing happened. Right.
[04:25:21]  So there is a latency here because the client has to go to the server to delete that. Right. And get the confirmation that it was deleted. But you could use
[04:25:29]  optimistic API here to delete it immediately before the client gets the server, which I think is an interesting one because I don't know if server based frameworks can actually delete it in
[04:25:43]  the client before it gets to the server. I don't know what it requires in something like remix. This is rather trivial. Yeah, exactly. This is remixed
[04:25:52] . You'd think that this would be something very easy to do. It's the old, you literally just filter the list based on the optimistic update. It's trivial.
[04:26:03]  And in this example app in particular, not example app, sorry, habit of my videos. But in this app, right, this happens in particular because for some reason
[04:26:16] , whenever you delete something, let me reload the page. Whenever you delete something, it actually does two round trips to the server. So let me delete something. You can
[04:26:27]  see here, it does two round trips. Yeah. You guys are saying that's so funny because through my headphones, like I sound really loud. I mean, I can
[04:26:36]  up my mic definitely, but yeah, I don't know. Maybe the video is loud, but I don't think I can control that as well. One to delete
[04:26:46] . And then another round trip to load the sidebar items again. So we are paying the latency cost-wise, right? And look, I am in Poland, right
[04:26:57] ? Yeah. What he's mentioned is this is very common. If you use loaders, generally speaking, or query or basically any pattern on client side, that it
[04:27:07] 's very common that we do the double flick, which is you do the mutation and then the client goes, hey, get me the data. Okay. This, I
[04:27:16]  don't know if, has Remix added single flight mutations yet? This is solid start. We added a few, we created this feature. I think I saw them,
[04:27:25]  Remix, looking at some single flight stuff after we, we, we did it, but I, I, I don't know where it ever landed. But like
[04:27:32]  if you use solid start today, one of the cool things that I'm looking very for forward to our Trello demo coming out. You got, literally we, if you
[04:27:42]  send a request, we know what keys to invalidate, which means we can literally respond with the data, even though we're using like the loader pattern all within the
[04:27:51]  same request. Yeah. Yeah. I mean this, this basically, if you write using the idiomatic solid start loader pattern, I, I've done this demo
[04:28:01]  on stream before with, uh, our notes app. You literally, you can be on a different page. Even you can literally like add a note and it'll fetch the
[04:28:08]  data for the next page. Um, all within, in the same set, obviously server has this benefit and RSCs have this benefit, um, because like they send
[04:28:19]  HTML and they diff it. Um, right. Um, but, um, we actually do this in solid, um, where we, we automatically, when you use
[04:28:31]  server functions, uh, essentially in, with the preload function, we can automatically get rid of this double trip. Um, so yeah, I, I think that's
[04:28:41]  fine. It's not that quite far away. Right. If you are somewhere farther away and I'm not using throttling either. Right. So if you are
[04:28:51]  somewhere further away, I can see it feeling way, uh, slugger than what we saw here in the video. And that's not only for deletion
[04:28:58] . See what happens if I rename something, I added three exclamation marks. I'm going to press enter. You see that they disappear. Right. And then just later
[04:29:08] , um, they come on the page. And again, there are two events happening here for that thing to trigger. Right. Yeah. A lot of the times people say
[04:29:18] , oh, we do it with two requests to the server because we want the application to work when JavaScript is disabled. But Hey, here's the thing chat GPT
[04:29:29]  doesn't work. No, no, no, no, no, no, no. That's not, that's not what we do to requests. I mean, we
[04:29:34]  do need to get requests, uh, like a mutation request model because of, of, of the node JS on the server approach. But I don't think that actually would
[04:29:43]  define this. Like, um, you could send back the HTML for the next page. Like that's classically how it would work. So, um, yeah, I
[04:29:52] , I don't think this has any. I don't think this has anything to do with it working with the, like, it doesn't have to work this way
[04:30:01] . Yeah. With JavaScript. Yeah. This is, this is a good point. Could, could, could, could this site work without JavaScript? I mean, it
[04:30:18]  wouldn't be good though. I guess it would be hard because it'd like refresh way more than it wanted to. Like you'd have to wait for the whole chat
[04:30:26]  GPT response. Okay. It just doesn't work. It's our argument. But anyway, we can bring chat GPT back, right? Uh, bring our,
[04:30:41]  uh, any of our conversations and well, this will stay here for now. So, so yeah, so we saw that there's a lot of latency on the del
[04:30:51] etion. So how would we solve this or how we could solve this in Phoenix live? Well, the first way you would solve this, let's forget about Phoenix
[04:31:00]  live view is use optimistic updates, right? Um, the second way to solve this is simply return the data. Like, don't get me wrong. The loader
[04:31:11]  pattern, unless the system is built to do single flight mutations is not going to return the data with a request either as tan stack. I do agree with his summary here that
[04:31:22]  like, um, that like we've gotten kind of complacent. We hate writing to caches so much in client side frameworks these days that we often don't.
[04:31:31]  And we like literally do the invalidate double flash that he's saying here. I'm gathering. That's what's happening. Um, but as I said, built in
[04:31:40]  as a pattern, this makes a lot of sense, you know, like, like, like, I feel like with remix, you would probably like the, the thing
[04:31:54]  is do optic updates take a little work. You actually have to like code the code to, to, to do the representation. Single flight mutations could happen automatically. Um,
[04:32:04]  but what's interesting to me here is. Okay. Let's continue. Well, the easiest way to solve this would be let's do an optimistic update or an optimistic del
[04:32:14] etion. So in live view, you could say, I want to push the event to delete and then immediately hide this item, right? We could easily do that
[04:32:22] . But I also want to call out that in live view, even if you don't do the optimistic thing, the user experience is going to be much better by default because
[04:32:32]  we don't do two round trips. All right. It's just going to be one round trip and the round trip happens over web sockets, which means that we
[04:32:41]  don't have to do a request, parse cookies or validate API keys, right? The web socket connection is already established. So we just say, Hey, delete this and
[04:32:50]  the server is going to. He's probably not going to notice the latency over a single request or a single web socket. Um, that's, I do agree that getting
[04:32:59]  rid of the waterfall would definitely make it feel faster. I am interested though, in live view optimistic updates. How does that, does it have to go to the server
[04:33:08]  to do the optimistic update? Okay, cool. Cool. Yeah. Because what I'm getting at is if you have single flight mutations, this just works automatically, the
[04:33:29]  same way that he's saying with live view. And then like, like, so the single request goes away, like the web socket thing is neither here or there.
[04:33:36]  I was, I was actually kind of playing with it. Like you could just make use server web socket and then like get the same thing. But there's, there's
[04:33:43]  like a initial connection cost. And I'm always worried about with web sockets. Like I haven't really quite figured it out. Maybe it's addressable. When I
[04:33:50]  played with live view GIS, the initial loading time was significant enough that I like for whole class of apps, I just basically was like, okay, I don't need
[04:33:56]  to worry about this. Right. But optimistic updates in live view, do you go to the server? Or like, because how would you render in JavaScript before going to the
[04:34:05]  server? Because like, I would expect in live view, and I could be wrong, that while an optimistic update could be faster than waiting for the database to do the del
[04:34:15] etion, it would still be delayed by the trip to the server. Right. Like, like if you have a client side framework that uses JavaScript, the second you
[04:34:30]  click that button, you can show the optimistic update instantly. You don't have to go to the server. You don't have to do anything. And then if you do
[04:34:38]  a single flight mutation, then you get the data back as soon as possible. So you kind of get like both benefits. If you, because again, you're,
[04:34:48]  this is about that, you know, level one cache memory, hard drive, network, whatever, you know, kind of thing. You're, you're already where the
[04:34:56]  client is. You don't have to go to the network and come back. Okay. But writing JS in it doesn't count for like, sure. I can write
[04:35:06]  JS in anything. I mean, like, can you use the same declarative live view code that you use to render your views to do the optimistic update without going to the
[04:35:16]  server? And if the answer to that is no, I would say that there is kind of a ceiling here. I mean, it's, it's like,
[04:35:33]  because you, it's like going into a benchmark and then not using the framework and writing it in vanilla JS and being like, look guys, like, like, it just
[04:35:42]  doesn't like, it's like, why use a framework versus just use vanilla JS? Like there's a certain point where like the scalability of the pattern depends on
[04:35:52] , you know, Right. So like, unless like there's like literally the framework provides a tool to do it, then that's legit. But like, if it
[04:36:09] 's like, like, I mean, it's, I don't even have to be the judge of this. If you look at the way it optimist update looks,
[04:36:17]  works in solid or remix, and you look at the code and you go, Oh yeah, this feels really natural. I have the data. I render it in my JS
[04:36:24] X, like everything else and everything just works. Then if live views like that, then I think that's, that's perfectly fine. JS is inevitable. Right.
[04:36:37]  So how do you get a single model then? Right. Like, I think, I mean, yeah, I mean, maybe we don't care about a single model,
[04:36:47]  but technically speaking, I feel there's a difference between having a framework where you can add some JS to accomplish something. Like I could probably add some JS to HTMX
[04:36:57]  as well and do something that can happen. So I think, personally having a framework literally just could handle it. like, don't get me wrong. It's not
[04:37:03]  handling it. So him pointing this out, it's completely legitimate. But it's, yeah. React is not a single model. I think it's, I think it
[04:37:21] 's, it's, eh, I'm, I'm, I disagree. I, I like you, if you use refs to do some stuff is an escape
[04:37:35]  hatch. That's fine. But, and you could say that like, I, if you use rest to do stuff in a benchmark, I'd say, yeah, you
[04:37:41] 're using vanilla JS that I, I, you know, I look at me like you're cheating. Right. But if, if you know, and use effect, like
[04:37:47]  you have these escape hatches, I'm not saying they shouldn't exist. I'm just saying like, if, if your answer is I can do optimistic updates via
[04:37:55]  refs, like by escape hatch, then that's not a feature of the framework. Right. That, that, that's, that's all I'm, I
[04:38:08] 'm saying here. I mean, sure. And then it becomes a framework component and then you can, okay. So then it's like, so someone can package that up
[04:38:20]  at the library. So you're, I guess the interesting question is, is there a way to interface with the composability of the, of the live view views to
[04:38:31]  get the same effect through composition like this? Could someone take that raw JavaScript and wire it in such a way that you could write your live view templates or however you're doing
[04:38:42]  it in a consistent way that can provide this experience for, as a third party? I mean, I think there's a huge difference between that. Like I. Okay
[04:39:02] . Yeah. So you can make optimistic checkbox. Okay. That's fair. So the author and the authoring of the optimistic checkbox would be a combination of like
[04:39:15]  standard live view code plus JavaScript. Okay. I think that, no, that's, if that's the case, then I think that's perfectly legit because then someone
[04:39:27]  could ship a live view framework that has optimistic like primitives that people could use to build with, and they could just stick it in. I think from that perspective, then
[04:39:39]  that's probably fine. I said, it wouldn't hold the benchmark test, but that holds from the, because that's a core library thing. But that holds from
[04:39:45]  the percentage that someone could build something, an extension that works in a consistent, generic, uniform way. my whole thing about the JS thing is, it's not the
[04:39:55]  escape hatch that's sufficient enough to consider the criteria. It's the fact of it being able to be packaged. Reply back to us. And it's also very
[04:40:05]  easy to ask live view to say, look, whenever something on the sidebar changes, don't send me all the items again, just send me like the particular item that
[04:40:17]  changed or the particular position that was removed. So it's very easy for you to provide like a really good user experience by default without doing optimistic updates. Well, I
[04:40:34]  mean, the latency of a single request is still going to get you. I mean, if you're being nitpicking about the time it takes to do a request response
[04:40:44] , then I think, yeah, okay. So we can move forward. Something else that we have here in this UI that I want to show you is that we can
[04:40:55]  go to settings. And one of the things that is actually quite tricky, and I love talking about this, it's inputs. When you have latency and synchronizing inputs between
[04:41:05]  client and server, there can be a lot of subtle bugs. And there is actually one here. Let me see if I can reproduce it. So here I have a toggle
[04:41:14]  button and I'm going to click it twice. Click it twice. Okay. Click. Click. Click. Did you see? I clicked twice and the thing shuffled
[04:41:25]  four times. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice
[04:41:28] . I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm
[04:41:33]  going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click
[04:41:37]  it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice.
[04:41:41]  I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm
[04:41:46]  going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to
[04:41:51]  click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice
[04:41:55] . I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm
[04:42:00]  going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click
[04:42:04]  it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice. I'm going to click it twice.
[04:42:08]  I'm going to click it twice. Once you're in flight in these zones and doing multiple things, it should all wait to consolidate just because of the way the synchron
[04:42:25] ization works. A good UI would have a temporary disable on the button click, but even without that, maybe it doesn't have a temporary disable. Transitions should handle the
[04:42:44]  state. I mean, I guess it's possible to get here if you don't handle the optimistic state properly when being fed back into the mutation. I guess it is
[04:42:52]  conceivably possible. Like if you don't like the one of the challenges of the remix style and salt start and whatever style optimistic updates is if you want them to be
[04:43:00]  consistent, you actually have to do it everywhere. Like if you look at the to do app in the solid started people, you'll see like all of these like common tor
[04:43:07] ques of submission states in order to show the proper pending state. If you do mess that up, it is possible that you could send the wrong mutation. What's happening
[04:43:15]  here is like the wrong thing is getting center shown. I think because the synchronization of the system should prevent. Should prevent this kind of weird like. Out of state
[04:43:29]  thing. Yeah, that's why I was wondering if this was using remixes like actions or whatever, because I don't feel like this should be possible and I don
[04:43:39] 't anything using transitions or transaction type stuff and in reaction to be able to do this either. Right. Click click. Yeah. Look at that now three times. Right
[04:43:50] . And the reason why this happens is because the the client changes and sends a request to the server. And while the server is computing the result of that change. Okay.
[04:44:04]  The client changes again. So when the server sends a response, they are out of sync. And now we are. Remix handles this automatically. It's most reactions
[04:44:12] . I something is a little bit weird with this one. Seeing like the UI toggle several times because of that. If I come here to to chat GPT data controls and
[04:44:22]  I say improve the model for everyone here, they have another button. So let's see how this one works. So I click it and look at the latency of that
[04:44:32] . I click it. Look how long it takes and everything is doing two round trips. Yeah. See how long it takes for us. I have to admit, I love
[04:44:40]  how much attention he's putting on this. This has been the problem with single page apps for a little while now. Single flight mutations. People, not enough people are
[04:44:48]  talking about them. Just, just putting it out there. The feedback that we clicked. So basically we have two toggle buttons. What? The be fair requests being canceled.
[04:44:57]  Don't. I mean, I guess sometimes it's already too late. Um, yeah, I feel like this is not using the remix. Remix has a cancellation.
[04:45:05]  You can, you can solve this without cancellation as well. I feel like there's just like, I feel like there's just something implemented wrong. I know at the
[04:45:12]  beginning he's like, I don't want to blame the people at chat GPT, blah, blah, blah. You can make these errors, blah, blah. I
[04:45:17] , this does feel like, like there's like, there's something wrong here. One has optimistic update and that does not quite work. Right. And the other does not
[04:45:28]  have an optimistic update and it suffers from latency. Right. So it's kind of like them. If you do them, if you don't sit away, I,
[04:45:37]  I mean, I don't think react queries single fiber default react query. You have mutation and you have query. So you could take the result of a mutation and update the
[04:45:47]  cache yourself. But a lot of people, what they do, because they don't want to deal with it, it's using multiple points as they just go invalidate query
[04:45:54] . And it does two goes because the client gets the response back and then it does it. So I'd say react query might be, even though remix cemented that
[04:46:05]  behavior, essentially, in their pattern, react query, people had already moved to that pattern in react query. Even though they have the ability to update cache, people rarely did
[04:46:15] . It was kind of like this. I talked about the stories, like the slow decline from like Apollo and GraphQL, GraphQL, everyone was doing like this patching
[04:46:22]  of the cache and pagination. And people were like, oh my God, this is such a freaking headache. Um, right. And then remix was like, um
[04:46:31] , you know, I'm sorry. React query was like, okay, well, you, you can just revalidate it, you know, and, or you
[04:46:42]  can do the cache. So people want to performance of the cache and did a single kind of single flight, but the, the more like, I don't want to
[04:46:48]  worry about this. I think there are way to, this is like the new version of the, of the waterfalls thing. Like before, for a while there,
[04:46:56]  like, and this is due to react router, react router four was amazing, made things easier than ever. But everyone who built apps to react router four and started adding code
[04:47:05]  splitting added, uh, data fetching waterfalls. It's like why remix exists. React router guys are like, no, you just do this, but no one got
[04:47:11]  in there. Like, okay, let me show you how to build an app because people were just doing these stupid waterfalls because the way react router four was built.
[04:47:17]  They actually had the redesign react router six to bring back older functionality to get out of the water ball hell. And I think, um, this is like a version, a
[04:47:27]  slightly different version of that problem. Yes. Yes, exactly. Yeah. I talked about a lot in that stream. So yeah. Okay. Let's keep on going.
[04:47:42]  So he's really basically he's hitting on two points repeatedly in each examination. And just as an example. And it's, uh, the double flight. I have
[04:47:53]  live book running here. It's running on fly in Asia. Okay. So quite far away. So you are potentially waiting on the response from the server to change the thing
[04:48:04] . So if you click it again, while you are waiting for the response, live view is like, oh, I can see now that you're waiting for two things.
[04:48:11]  Right. And what, and then you can click several times live view is going to track. That is going to kill all the updates queue putting the queue, right?
[04:48:21]  Uh, all the updates and only when there are no pending requests from the server live view is going to apply that. That's he's describing exactly how react works.
[04:48:35]  Transitions. So these systems are the same. I do. I think this is just people not using the feature. So, you know, it's working out of the
[04:48:44]  box and live view is resolving the conflicts for us. Yeah. This is, as I said, basically how remix works out of the box. I think like, I
[04:48:55]  feel like someone went out of their way and it was probably cause of the migration or something to do things the, like the, not the right way. I know that
[04:49:03] 's, it's, it's weird. And I don't know if Jose's ever going to see my response to this talk, but this, this feels like I'm
[04:49:12]  not what he thinks. This feels like someone just did something or some people did something like just not like using the, the, the prescribed patterns. First, not take
[04:49:21]  care about this. And I actually wrote this article that goes in detail at exactly how we are doing, how we are solving those problems. What is the source of state?
[04:49:32]  So you can dig deeper if you're interested. All right. Going back to chat GPT, I just want to show you something else. If we go to shared
[04:49:41]  link, so chat GPT has this really nice feature where you can share a link to a conversation. And let's see what happens if I click delete on a shared link
[04:49:48] . So pay attention here. Okay. When I click delete, you see that it faded, right? So there was the optimistic update there, which is good, right?
[04:49:57]  That's what we want. But before deletion, the optimistic update style disappeared and the thing flashes again. Yeah, that's all right. So I'm going
[04:50:11]  to click this one. You can see it fades, comes back and it's deleted, right? So again, it's trying to conciliate, I believe. It
[04:50:21] 's trying to conciliate the state between the client and the server. Things get out of sync. Yeah. No, it's not that. Either the implementation of
[04:50:32]  the developer did here is just very weird or there's a bug in the library being used. This isn't anything like fundamental around the state of the server or whatever.
[04:50:46]  This is, this is like, this is just shouldn't, it shouldn't behave like that. Isles are lost. Toggle buttons, they start toggling and
[04:50:56]  things not work as expected. So look, at this point, I could be angry at the ChatGPT team, right? It's like, ah, Chat
[04:51:04] GPT UI is full of jink, right? Or I could pretend that I am the only person in the whole world that cares about UI and UX, right?
[04:51:12]  But I don't think that is productive, right? I actually think it's quite the opposite. Like those bugs, they are common. And one of the reasons why
[04:51:21]  they are common. And one of the reasons why they are hard is because we often don't see them during development. Yeah. This is one of those kind of interesting ones
[04:51:31]  because literally the work that's gone into client frameworks the last two years is to, has been to basically make these kind of bugs not exist anymore. So there was a failing
[04:51:43]  here somewhere. He's saying how they're common in that. And they were, but I wouldn't say that's a representative state of the current state of stuff.
[04:51:54]  Yeah, yeah, yeah. I think, yeah, he's, it's because the, even though the audio is coming through the stuff, it's also coming through my
[04:52:01]  mic. But I can't mute it. I need to change the Chrome import source because I actually don't see, hear the audio through my headphones. Yeah, it's
[04:52:10]  just my new computer setup. I'll get it for next time. Because in development, the server is usually running in our machine, right? Or some are close to
[04:52:20]  us. So anything that comes from the latency, from the distance between client and server, we are not going to spot. Even our QA team, right? They may
[04:52:32]  be testing a server closer to us. So unless if you are... Funny thing is if I turn on the mic audio, or like the its audio, I can't
[04:52:40]  actually hear it as much because it's not coming through my headphones. Specifically looking for these kinds of bugs, you're not going to find them, right? And that's
[04:52:49]  why I really appreciate Live View's approach to this problem because it tries to solve a lot of those bugs, a lot of those problems for us out of the box.
[04:53:00]  Yeah, this is, I think, like a classic example of two sides talking past each other as you're saying, Jaylarky. Like, this is literally
[04:53:13]  what Remix solves out of the box. So I think there's just like a misunderstanding here. He keeps on defending the developer team here, which is fine because he doesn
[04:53:26] 't want to pick at them and he's trying to point at the tools. But I actually think in this case pointing at the tools is actually incorrect. So, um
[04:53:34] , yeah, uh, yeah, I don't know if I, I think, I think, I think we're going on it. All right. Let's, let
[04:53:42] 's continue on. Um, yeah. I'm going to change how I'm presenting my screen. Second. All right. Let's can, let's go back.
[04:53:52]  Yeah. I, I, I, I get where he's going, but the, the, I think the conclusion here, I understand he's coming from because people were
[04:54:09]  pointing at him that server frameworks don't handle these problems. Blah, blah, blah. You know, this is why you don't want it because optimistic updates.
[04:54:15]  And the reality is that the only argument that I can make against that would be that if there isn't a native way to handle optimistic updates, because optimistic updates do have to
[04:54:27]  come from rendering JavaScript from the client. If they don't, they are not as good as client side optimistic updates. It's, it's just science. It's like
[04:54:36] , I don't know how else to explain it. Like, like you're closer. You can do it immediately. You don't have to go to the server.
[04:54:41]  Like this is not even up remotely up to debate debate. If there's a mechanism that makes that easy to do. Um, that's kind of like built into the frameworks
[04:54:51]  and stuff in live view. Then yeah, I, I think the only actual difference between these solutions is whether you need a persistent, um, socket or whatever. And if
[04:55:01]  you do, well, that's a pretty significant ask, you know? Um, if you don't, you know, like some people can't, they have serverless
[04:55:10] . If they have serverless, they can't do this, but you know, otherwise I think it's perfectly adequate, you know? No, there, there
[04:55:24] , there, there isn't. You can't, you can't, you can't get rid of the distance. But acknowledging that the only solution is actually to do
[04:55:35]  stuff on both sides. Yeah, you guys keep saying live view is bug, but you see dude bugs too, yeah. I, yeah, I mean, I feel
[04:55:51]  like, I feel like, yeah, I don't know. No one tests for optimistic updates, as you said, because of the speed of your local computer, you
[04:56:04]  don't see it. I, I, I, I think they just didn't care to implement those features or if they did in one place, they missed it.
[04:56:17]  I, I feel maybe, maybe, maybe, maybe it is harder than I'm giving it credit for because I, I remember when I made the to-do MV
[04:56:26] C app, I just kept on coming back for a little while and finding bugs every time I demoed it. Optimistic updates with ephemeral state are really nice
[04:56:38]  from a cleanliness standpoint because you don't have to like, like it's all declarative, but maybe getting the rules right is complicated. There's a lot of wiring
[04:56:55] , you know, you have to make sure all the state aligns. Like if you think about it, it's all logical, but it's a place where there
[04:57:02] 's complication. It's easy to get wrong to go like, I mean, if you want to, if you know what I'm talking about, like, look,
[04:57:07]  if I go, sorry, let, let me go. Let me pick an example. Let's go, sorry, not packages. If I go into examples here and
[04:57:21]  go to to-do MVC, which is our one, look at how complicated it is to, to remaining count. This is just for to-do app. To
[04:57:33] -do's.length plus adding to-do length minus to-do's filter, which ones are completed length minus removing to-do length. If you don't
[04:57:41]  go through the work of figuring out this sort of thing, like, you're, you're going to get the wrong count. That, that's, I think that's
[04:57:54]  the tricky part here. Let me see. Is there, do I have some more examples in here? Yeah. Completed. Toggling all pending, then it
[04:58:02] 's not toggling all input coming back in from the submission. Toggling to-do pending, then it's not complete, then this. Like, this is calculating
[04:58:11]  which state the toggle button should be like on the checkbox. So yeah, if someone gets this wrong, then, then it's very easy to get screwed up UI state
[04:58:23]  with optimistic updates. I think, I think this is where the problem is because this is completely logical. And once I write the statement down, you're just like,
[04:58:33]  of course. Yeah. If this is set, then do you care about that one? If this set, like once you understand what the logic is for the pending UIs
[04:58:40] , it's seamless. It's declarative. It works in line. It's smooth. It's just great. But I had to figure out what the logic was here
[04:58:49] . I'm not gonna lie, I didn't get it blind on my first go. You know? So like, there is a thing here. So, I think
[04:59:05]  it's fair from that perspective. I think most of the stuff, bring up the dual opt-ins of the interest by default. I feel, I don't know
[04:59:15]  if it's optimistic by default. I feel like they just do single flight by default. I feel like the experience that he experienced between him and live view would be drastically better
[04:59:27]  with simply single flight mutations and transitions. That alone, in place, without the optimistic updates, I think is equivalent to what you get in live view. I think the
[04:59:39] , I think the, um, like, the problem was that it didn't have either. But again, Ron, compete with Remix on that. Yeah, I mean
[04:59:50] , it's, it's like literally what they give out. So it's like, yeah. Yeah, yeah. The secret project, you just say it's Tre
[05:00:06] llo demo. I'm, I'm very excited about this Trello demo. I'm just telling people right now because it has single flight mutations. It has optimistic updates
[05:00:13] . It has granular application and mutation. It's, it's, it's basically mechanically, almost mechanically optimal version of that demo. More optimal than any version that
[05:00:27]  we've seen to date. Um, because it doesn't need to re-render components and it can apply mutations one by one. You know, like it's, it
[05:00:34]  doesn't need to diff everything. It's incredible. Um, I'm, I'm looking forward to when it gets released. Nice. Yeah. Yeah. At a
[05:00:43]  certain point, the complication of this stuff does point to sync engine, right? Cause then you don't have to do the, you bring the database to the client.
[05:00:50]  Then you don't have to do all this stuff. Yeah. No, the fact that you got, you implemented a version without the 2.0 primitives is very
[05:01:15]  impressive. Okay. Enough patting ourselves on the back for doing awesome work and solid. Let's, I, I, I, I think this is a fair question
[05:01:24] , right? I was very entranced by the remix approach. I love, I think this is better than cash writing. Cause you, you don't have to think
[05:01:32]  about a time. You can think of declarative. The same reason I like declarative. I like this. I do think this is easy for people to get wrong.
[05:01:37]  I mean, I mean, you can literally see right here. If I missed a condition, my checkbox is going to be wrong. Right? So optimist updates
[05:01:46]  should be handled, should be approached, uh, carefully. Right? Okay. So we got this one. We already talked about destructuring. Seriously. The first
[05:02:13]  thing David said when he tried solid was he, he, he hit the destructuring thing and he was just like secretly thought my, secretly though my agenda is to convince
[05:02:20]  Ryan destructuring is the best. I think it's never going to happen. Um, okay. All right. Cool. We're, we're almost caught up
[05:02:28] . There's only a couple more topics left. Um, first one, um, actually I'm going to leave this topic for last. Um, let's talk about
[05:02:53] , um, yeah, let's talk about this one. I don't, I miss the context of this conversation, but I read something by, by Jason Miller and I
[05:03:02]  was just like, what the hell are they talking about? Every discussion involving web quotes demoralized me for a new reason. Anyway, if you think the primary benefit of
[05:03:09]  SSR is SEO, you've lost the plot and whoever you've been learning from has failed you horribly. I don't know how I feel about that. I,
[05:03:20]  I mean, SEO is important, but you can also get SEO without, but yeah, from a pure, like, I want the best of everything perspective. I agree with
[05:03:29]  that. So what's the primary benefit? Not waiting until the code reached your end user to execute in the browser for requesting data. Okay. I mean, that is huge
[05:03:37] , huge, huge, huge. I can't understate how important that is. This is a painful false dichromany. Only the amount of code matters. The
[05:03:46]  status quo for shipping one megabyte of UI code has to run and render before kicking off data loading is terrible. Yes. Shipping less than 50 cables have a network business
[05:03:53]  that kicks off data in parallel while loading UI is actually close to ideal. Okay. I'm sorry. I'm surprised I'm actually disagreeing with Jason Miller here,
[05:04:05]  but like, this sounds like what I used to say when, when I like, I'd make solid demos, pure client side and then go up against, you know
[05:04:16] , like real-world demo and go up against like Sapper and like next and next and next and be like, look how fast my app is. And it's because
[05:04:25]  I get the page immediately without waiting. It's because I have no JavaScript and I render as fast as possible. I parallelized all the data fetching and, you
[05:04:36]  know, it's incredibly, you know, powerful, you know, you know, and I did this. I can even show it out loud, light housing in some,
[05:04:45]  in a lot of cases. And the, do you know what the biggest problem was back then? All those server functions or frameworks used to wait for the data before sending things
[05:04:52]  back. So the fact that I could get the code and get the JavaScript back and start doing the fetching and like even start rendering stuff before the data came back on
[05:05:02]  the client, you know? Yeah. I mean, clearly, but what I missed was first, I didn't turn the network to be slower. The second I did that
[05:05:13] , I realized I was dreadfully wrong. This, I mean, his argument, I think here is that like, you ever seen of site being different on mobile than web
[05:05:20] ? You need different components, right? We, we played with this with quick a little while ago, right? Because they were very lazy on what they were loading early
[05:05:28]  days. So like you load them the main thing and then you resize the window and trigger mobile and have like the lazy loading. And we'd use that to detect the speed
[05:05:36]  at which quick, you know, loaded JavaScript and stuff. I can see this argument, but like, you can't make up, no, no, like load a website
[05:05:47] . Like, I don't care what it is. Look at how long and how optimized the asset pipeline is versus like say the data you fetch from it for server.
[05:05:55]  Like I, I, I, it doesn't matter what I, what I pick, but if I'm hitting an API endpoint from some service, I have my API.
[05:06:02] com, whatever. It's probably going to be about too close to 200 milliseconds. Maybe I got really fast service. I can get somewhere around like 120 or whatever.
[05:06:08]  But you, if you look at the time it takes to get the assets on the page, like the JavaScript, you know, and I'm assuming you're in a,
[05:06:16]  this reasonable 50 kilobyte range or whatever. It's, it's like 30, 40 kilobytes, you know, or milliseconds. Right? So when you
[05:06:25]  get these fast time to first bite, you get the HTML right away. And then you're doing that and you cascade the eight, you cascade it on top of each other
[05:06:30] . And you're like, okay, so it takes 35 to get the page. Actually, I find the initial page usually takes a little longer. So let's say
[05:06:37]  70 to get the page 35 to get the JavaScript assets. And then I start data fetching, you know, and rendering and stuff like, sure, you know, we
[05:06:46]  do good parallelization. We do smart stuff. We're good. But if you do that exact same parallelization on the server, you just, by the time the client
[05:06:58]  even gets the JavaScript to start data fetching, the servers already got the data and is already sending it back to you. Like this is like, I can't see
[05:07:09]  how this could ever be close to ideal. Like generally the bottleneck is usually the data, the asset pipeline, the CDNs. These things are fast. People cash
[05:07:19]  them at varying degrees. It's your unique data that is expensive. It's almost always becomes the bottleneck. So like, see the other thing that like this,
[05:07:51]  this is the thing, you know, how I used to win those benchmarks too? I cheated a little bit, not a huge cheat. Once you have a client side
[05:08:03]  app, which means you have code splitting, you have different pages. Like, do you know what I did? I preloaded in my spa app, the code
[05:08:16]  for the, if you have a multi, like a nested router or whatever, like multi, like a spa app with multiple pages, you're going to have code that
[05:08:24]  you don't run. And then when you have an SSR framework, you actually know what page you're rendering. So you can put the preload tags in the
[05:08:30]  header to grab the JavaScript for your specific page. So you have, you go, I need the main bundle and I need this pages bundle. So you send both pieces
[05:08:36]  preload and get them both at the same time. But if you are not SSRing and you have just like index HTML or whatever, you don't know that.
[05:08:45]  So when I told you about that hop, you know, 35 milliseconds to get the optimized JS. You usually use, get that and then get another JS file. Sometimes even
[05:08:55]  before you do the, the, all the data fetching. Now, don't get me wrong. Parallelizing the data fetching here means you, you ho
[05:09:01] ist that up to the first package level. But I just want to point out that in like, and that was what I live by with solid. Like literally the,
[05:09:12]  the, the JS, but, and how should I put it? I mean, this only actually enforces. My point is that second cascade of JavaScript still usually got there
[05:09:23]  before the data, um, with this delay, right? So like you, you get the main package, fetch the next package for the page and the data at the same
[05:09:32]  time in parallel. Almost always the, the second package of JS came faster than the data. So like it's, yeah, you, you could probably fetch the page
[05:09:43]  three times over faster than getting the data. So you starting that data request 70 milliseconds earlier is like worlds of difference. Um, and that's only like a vast network
[05:09:54] . Well, let's pretend it's not actually a vast network. Like, I don't know how anyone can actually say this with a straight face. Like, I,
[05:10:03]  I, no one's going to, going to like argue with Jason Miller cause he's an expert. It would be both faster and better to have the client request that
[05:10:13]  data as doing so often a subset of contextual benefits, the response to single RG. Yeah. So like, this is like, as I told you, the mobile versus
[05:10:19]  whatever thing. Did anyone ever respond to me? Like, let's see. I just don't get it. I just don't get it. Thank you. This
[05:10:25]  was going insane. If you truly don't know what data you need to request from the client that that's a rare time. Yeah. Yeah. Exactly. Blah,
[05:10:31]  blah, blah. Yes. Here you go, Adam. You were not going crazy. That's to be fair. I was in a situation with Adam once a while ago
[05:10:38]  where like when I first got on Twitter, where people were telling me that JSX wasn't compiled and I was like, what's going on? I feel like if
[05:10:46]  I was Adam and this was a response, I would be similar to that. I'd be like, you're telling me that JSX is not compiled. Like this,
[05:10:54]  this seems as out of left field. I almost wonder if there's like a motivation behind people getting behind the sentiment. It's like people are so frustrated with Next.js
[05:11:04]  or something like this just doesn't make sense to me. I mean, I don't, I don't. Client side doesn't mean old indexed HTML.
[05:11:18]  Okay. Sure. Yes. If you, but, okay. So what you're saying is pre-rendered server pages. But like, I guess a spa is essentially
[05:11:35] , even if it's not indexed HTML or not, it's like, how should I put it? Like, I guess like the app shell thing. The problem
[05:11:45]  is I consider it server rendering once you have to hydrate. I don't care if it's pre-rendered. Maybe that distinction is where people are drawing the line
[05:11:52] . But if you have to hydrate, then it's server rendering. I like, I don't care when you did that server rendering. Like, and then like having
[05:12:02]  to fetch it from the, like, I, I, if, okay. Okay. So like, if the majority of your content, I'm going to apply the
[05:12:16]  same thing to after Island Island or server islands here. Right. Because it's like, if the majority of your content can exist outside of whatever we are talking about here,
[05:12:25]  like if, if you could load your page and the stuff you're data fetching here is not your primary content, then yeah. I mean, you could get that
[05:12:35]  in front of the people faster and then like fetch from the client. That seems like a reasonable place to fetch from the client. Cause it's like not important. But
[05:12:43]  if your primary content depends on that data, like there's nothing here that made me think about pre-rendering in this, in this thing. Like, when I
[05:12:58] 'm here, you never to find, no, no. The biggest thing I've ever had to load on the page was the AWS. Well, I know I,
[05:13:13]  we did like a custom uploader and stuff, but we do that lazily. Like anything big can always be done later. That was always the thing. Um,
[05:13:23]  and yeah, sometimes the data loading there, but yes, most of the time AWS SDK was like the biggest thing I was dealing with sites over one megabyte or, or
[05:13:33] , um, GZIP was kind of like, or midified was kind of, it's outside of my range. Yeah. Shell pages with preload. Yeah.
[05:13:46]  So like if you, you, you, if you preload a bunch of, yeah, like, I guess like roughly empty pages, then you get rid of the
[05:14:01] , the cascade Javascript problem. As I said, that's not as big of a deal though. Like if it's your primary content that you're data fetching
[05:14:09] , there's, there is no replacement for SSR. Like it's like the, the, the, the lion, like there's like, it's not even
[05:14:24]  SSR. You don't have to, you might not have the server render it, but you, I, and we used to do this in Bitigami back in
[05:14:30]  the pay in the day. You would just render the data into the page, right? You could send a blank page and start fetching on the server and stream the
[05:14:39]  data into the page and have a client's paw render it. That's, that's fine with me too. You don't, you don't need the server render the
[05:14:47]  HTML, but you starting the request at the time of the request coming in is like, it's significant. Like even, okay, CDNs are fast, but
[05:14:58]  it's, it's like the difference. I don't, I don't even have a skeleton on here. Probably not long. It's like, it's like,
[05:15:08]  it's like, ding, right? Right? I mean, how should I do this? Like, let's put our server over here. Um, sorry. Like
[05:15:21] , it's, it's the difference between like, Thank you. Okay, next we're going to do one more. This, the arrow length is not too
[05:16:20]  important here, it should be at the same, it's fine, it needs to go to the database. This is like, there's a server in between here,
[05:16:29]  but I'm going to negate that for a second. I'm just going to, don't worry about the height of these things, I'm going to put the database
[05:16:41]  here. You can pretend there's a server in the middle, I'm not going to compute that cost in. It's the difference between doing this here versus doing this
[05:16:55]  here. Like, you change the length, change this left and right. Telling me that generally this is better than this, I just, I can't,
[05:17:20]  like, there's just, as short as you try and this, like, it would be awesome if this were true, but like, there's, like, I
[05:17:30]  just can't, with good consciousness, like, say that. I don't know. Like, if you don't need to do this extra trip, this is a lot
[05:17:50]  shorter. Like, the Astros River Island story, like, can sometimes start, stop right here. Right? At which point, the difference between this and this is
[05:18:00]  basically indistinguishable. Right? Because this, this doesn't actually happen like this. This happens more like, you know, take a little bit of time to
[05:18:08] , right? But, like, if we're talking, like, yeah. Right. This is, like, I think there's a mentality shift. I think people
[05:18:27]  are so sick of the complexity and all these other things that they just want to, like, say something, you know, that simplifies and just be like, yeah,
[05:18:33]  this is true. Let's go with it. But it's, it's not. I'm sorry, guys. I would have been on the, it just,
[05:18:39]  it's not. This is just not true. Right? You can change, like, the lengths and move the mats. But, like, generally speaking, yeah, I
[05:18:54]  don't know. I, I just, yeah. There's, there's times that I've streamed the data instead of HTML. And that's been better.
[05:19:09]  Like, there's, there's exceptions of every kind of rule. I can pick two systems that are different that have these characteristics. And one that is this way could be
[05:19:18]  faster than one that's this way. But generally, even for even, right? So, like, this is, this is, like, yeah, I don't
[05:19:27]  know. I, I must be missing something here. I think I must, what I'm, Jason works at Shopify these days too, right? Yeah. I,
[05:19:37]  I feel like I'm just, like, I feel like this is just, like, a really specific e-commerce type spin where you're, like, not thinking of
[05:19:45]  your core data as being dynamic. And, like, like, you, you kind of, like, you can take a very, you know, like, MPA
[05:19:55]  first mentality, load the stuff in. Like, I feel like that's where we're sitting here. But, like, from a holistic general standpoint, I, I
[05:20:04]  can't say that I think. I thought about the SSR as a code for having too much JavaScript. Um, short waterfalls can be no waterfalls, no water
[05:20:14] falls, all these assets. Yeah, I mean, this is, this is true. This is how we used to win before streaming was a thing. But once you have
[05:20:22]  streaming, it's just, like, take most of the benefits and just, yeah, it kind of washes it out. It's hard to compensate for silver. I
[05:20:41]  mean, it probably does. I mean, there's a bit of fixing its own problem going on here. Like, definitely. But, like, I, I'm,
[05:20:51]  I'm, I'm, I'm, I'm, like, maybe I'm just, like, way too, like, picture the best possible. situation. And
[05:20:58]  I think this is where Jason got me. It wasn't this. I mean, he can say this to the cows come home. And, you know, he can say
[05:21:05]  this too. It was somewhere down here where he said something that it was, like, idealized. Maybe it's here. Maybe it's here. No, no
[05:21:13] , no, no, no, no, no. Let's see how this is. Yeah, predict the client will lead. Okay, blah, blah, blah. There
[05:21:19] 's something about, like, the idealized. Maybe it's higher up. But then I was just like, what? He was saying something about the idealized would
[05:21:31]  be, like, fetching from the client. It would be both faster and better to have the client request that data. Okay, fair. For the specific contextual stuff
[05:21:40] . But in general, like, it's got to be a mix of both, right? Yeah. I don't know. Yeah. It's interesting, though.
[05:21:52]  I think the message is less than, like, people retweeted this, right? View post engagement. Okay. Yeah, it's more complicated than this. This
[05:22:13]  is spot on. No. Depends on what you're measuring. But for initial code size, there's three factors. The amount of code that loads, the amount of
[05:22:23]  code that executes, and the data serialization. There's basically three things. So only the amount of code that matters isn't the whole story. I don't
[05:22:37]  know why people are... I feel like there's... People are ready. Like, this is a better read of, like... Most of us haven't thought of deep administrative
[05:22:47] , SSR, and despair, whatever. Yeah, it's like, people are just, like, SSR by default. And I think that's probably why we're
[05:22:53]  here. Yeah, yeah. He says it's actually close to the ideal in the first one. Yeah. Yeah. I... I don't... Yeah. It's
[05:23:09]  tricky. I... I need to know more about it. Like, my first take at this is just... It's just... It's odd. Anyway. Enough of that
[05:23:22] . That, that, that. I think I'm done with my bookmarks. Let's just finish up here, okay? Um... That one. So, I
[05:23:33]  haven't talked about this. And I haven't talked about... Yeah, I know which one I'm saving for last. Okay. Let's talk about this for a
[05:23:43]  minute. This one's gonna be trivial. Um... I think most frameworks dedicate... Yeah. But... So... I've been really impressed recently by a couple... This is
[05:23:53]  actually just a user talking about, like, some cool feature in Svelte. Basically, each having an else block, you know? But, um... I... I
[05:24:03] ... I didn't mention this earlier. I've been really impressed with Astro's, like, posts, like the one I highlighted earlier. Where they're, like
[05:24:12] , showing a feature in Astro. And me as a, like, you know, where I am in the world and my stuff, I'm just like, "Oh
[05:24:16] , yeah, that's obvious." But, like, people really going, "Wow!" And, like, not realizing it. Like, picking out something very obvious about how
[05:24:23]  the framework works, and then showcasing it in a really powerful way to get engagement. I've been very impressed with Astro doing that. Like, just reminding people about
[05:24:31]  features they've had for, like, three years. And then people are like, "Wow, that's incredible." And I... Um... When I saw this,
[05:24:39]  it actually reminded me of that a little bit. Because it's just, like, an example of, like, you know, adding an else to an each block. You
[05:24:47]  know? I think Ember had this back in the day. Because, you know, the old handlebar syntax. Um... And I looked and I was like, "
[05:24:54] I think a lot of frameworks actually have this." It turns out Vue doesn't. I was wrong. But Ember has it. And, obviously, solid.
[05:25:01]  I don't know if Angular has it. If Vue doesn't, Angular probably doesn't. But, the funny thing is, sometimes, these things demo better than they
[05:25:11]  actually happen. I love how this example shows the UL on the outside. Because, a lot of times, people want to remove the whole heading or the whole section
[05:25:22] . Rather than just else... Um... This. Like, this is... There are times like this where you have to add a to-do and you keep the list in
[05:25:32] . But, this actually ends up happening a lot less often than in practice than I've witnessed. Um... But, yeah. It was just interesting. Because, a
[05:25:44]  lot of times, a lot of frameworks actually have a lot of cool features like this. But, we never really talk about it. I hate to out you, David.
[05:25:51]  But, David, you know, Community Manager Solid. He saw this tweet and he said, "Solid should do this." And, I'm like, "
[05:25:57] What do you mean? We do do this." He's like, "I had no idea." And, he's like, "Oh, yeah. It's even documented
[05:26:03] ." And, I'm like, you know, there's a lot of these kind of things. I mean, it happens to anyone. Sometimes, I forget what's in
[05:26:09]  Solid. Um... It is... It is interesting. Um... Because... Ryan Florence actually had an interesting kind of thing where he's like, "Do you handle nulls
[05:26:20]  and undefines?" And, I can't speak to them all. "Solid we do." We basically say that, like, that's not a thing
[05:26:26] . But, Spelt, for example, doesn't and complains it's not an interval. And, then, Ryan was like, "Well, how do you know
[05:26:31]  if something is..." He started to ask me about loading states. And, I was very careful to say that this is a place to handle error loading states. But, it
[05:26:38]  occurs to me that in a lot of front-end apps, especially, like, historically, we have handled this by saying null if it's loading empty and normal by that
[05:26:48] . Whereas, a lot of the patterns that we've been developing recently have been codifying that into things like suspense or error boundaries. So... Um... Yeah, I
[05:26:55]  don't know. Interesting observation, um... In general. Uh... Just, just, kind of, an aside, uh, but, uh, one of the,
[05:27:09]  one of the, kind of, interesting things here is that, like, I feel like, in some ways, because of, it was kind of unintentional, but
[05:27:18] , because of the timeline, once all it adopted things, like, suspense or data fetching five years ago, we've grown more apart from React, or at least,
[05:27:26]  not from React, the theory, like, the core team, but from React, the, in practice, than I really realized, like, it causes a pretty big
[05:27:33]  fork in the road when you get, like, something that's kind of like React, query, suspense-aware, first party, five years ago, and you build your
[05:27:42]  whole ecosystem on that, compared to, to, um, like, a scenario where, like, you get suspense, and then you don't get, like, data
[05:27:52]  fetching until RSCs come out, and people are like, "No, you should use RSCs for data fetching with suspense in it." Like, it
[05:27:57] 's caused, you know, over that whole, I mean, this is classic, like, way back to, like, 2010 when we were doing our old Ember apps
[05:28:04] , or whatever, but, like, it's interesting, like, I hadn't even thought about this in such a long time, um, you know, codifying special
[05:28:13]  values into null like this. We do, do this internally in the framer for some stuff, but I hadn't thought about it for loading states. Um, anyway
[05:28:20] , just an aside. Oh, the, the, the AstroTweets for Ben Holmes, they're brilliant Ben, um, just an aside. I, they
[05:28:29]  do so well, and people, like, they're just, it's hard to come up with good examples, I know that. I, I, I do that a
[05:28:35]  lot when I prepare for my streams to come up with examples for teaching purposes on complicated projects, but it's also hard to come up with them from a marketing standpoint.
[05:28:43]  They come up with just the right kind of thing that people instantly get with seeing it without explanation. That's the key to it, and you're doing a great job.
[05:28:49]  Oh, sorry, I missed this earlier. Yeah, I'm glad I missed this. I don't want to argue with Web Component people anymore. It's really
[05:29:02]  a waste of time. Like, some, some branches of web dev are just so detached from, like, yeah, I don't know. It's just, it's
[05:29:16]  probably better just to kind of ignore them. Um, anyway, um, last topic today. Last one. Where is it? Do, do, do, do
[05:29:32] , do. Can we all agree that just JavaScript is the most ridiculous statement one can make about JavaScript framework? Everything is just JavaScript, and everything is a whole lot more.
[05:29:40]  You pick these tools for abstraction, meaning the ship has already sailed. When one can swear that React 13 and Svelte 3 are just JavaScript referred to ops things,
[05:29:50]  you know it's meaningless. You don't criticize the libraries' use of proxies that are native and then defend hooks in the same breath, or praise syntax that looks
[05:29:55]  native but compiles to behave completely differently, or overload semantics of existing things and pretend it's close to standards. Every framework is guilty of this, though, from
[05:30:05]  all the angles. We've all messed with semantics, compiled things that look simpler than they are, you know, invented constructs that are simple, you know. That
[05:30:21] 's what frameworks are for. It's their job. But let's not pretend there's purity there. Just happy alignments and familiarity. Yeah. I saw this one
[05:30:31] , and it was because they were talking about equality of proxies. And don't get me wrong. This has been a pain in the ass. Solid, we
[05:30:41]  keep a weak map or reference where we can keep the same proxy for the same object so that we can do comparisons to make it easier. But I think there's an equal
[05:30:50]  operator in Svelte. This has been a thing for us. It doesn't come up very often because usually you match by ID. Like, it's just...
[05:30:58]  No? But then the comment was fine-grained reactivity sounds nice but I like that React is just JavaScript. And... Yeah, I mean... I mean, that
[05:31:13] ... I was like, fine. People like just JavaScript and then, you know, great comment from Dev. But none of those are language features. Those are things you can
[05:31:21]  build. Yeah. That doesn't even make... I just don't even know. Proxies are language features. Yeah, I guess I'm missing the argument.
[05:31:34]  I know a bunch of people came out... Yeah. How often are you checking arrays and objects by reference equality? Yeah, basically never. This is... This is very
[05:31:49]  odd. I guess if you're like literally building a spreadsheet. The funniest thing is if I'm building a spreadsheet, I want fine-grained reactivity. It
[05:32:00] 's literally the right tool for the job. If... That's actually kind of funny. He's right though. That's a place where you wouldn't be using IDs.
[05:32:09]  But that's a place where you would use the proxy within itself and keep the referential equality between the proxy and its own. Proxy would be incredibly efficient for a spreadsheet
[05:32:21] . I don't know. There's a lot of people talking about this. And this topic has come off before. You know. It's just... It's funny
[05:32:35]  that... Like, on one hand you can say that, you know, react is very simple. It just calls these functions over and over again. And you return some
[05:32:43]  stuff and then it diffs it. But you don't worry about that. You construct stuff with functions. They run again. You know. It does some stuff. Obviously
[05:32:50]  hooks make that a little bit weirder. Because now you have persistent state that doesn't... That gets persisted between function calls, but doesn't look like it should
[05:32:58] . But I mean, whatever. You can get over that. But like, on the other hand, we've had people say that Svelte 3 is, you
[05:33:05]  know, just JavaScript. Because it looks like JavaScript, right? Like literally you could just let X and then put it in there. But we know that's not how JavaScript
[05:33:13]  behaves. So, I've heard both sides literally say just JavaScript. And I mean, it's just kind of crazy. And it's funny. React now is like S
[05:33:25] velte 3. Basically that's what they did. React compiler makes React into something more similar to Svelte 3. And it's like... It's like now
[05:33:34]  React is the other type of just JavaScript too. Because you don't have to write all these memos or as many dependency arrays. So now it's... Where you write
[05:33:41]  isn't what actually happens. So it's like... This is so dumb. I'm sorry. Just JavaScript. Just JavaScript. Just JavaScript. Just JavaScript. And JavaScript
[05:33:54] 's never been just JavaScript side. The ref stuff is actually... We're glad it's removing 19. Like the forward ref stuff. It's all zeros and ones,
[05:34:11]  right? It's just... The third party that likes to say just JavaScript are like the standards people. Like on the web components side. And they're like, we're
[05:34:20]  just standards. And it's like... Like everything that uses JavaScript is also using JavaScript standards. Because they're using JavaScript. Because they're using JavaScript. So it's
[05:34:29]  like... I don't know. It's just funny. Sometimes that's a different argument you might have with them. Because you're like, guess what guys? They're
[05:34:41]  like, we use web components. Like, well, we don't use web components. But we still use JavaScript features. We just don't use all of those features.
[05:34:48]  And we make a different abstraction on top of other features. Because we use the JavaScript features we choose to use. That doesn't make anything any more or less JavaScript.
[05:34:55]  But... Anyway. I am way over time. So I am getting off the stream. It's been a while. So I'm glad to have you all here. I
[05:35:06] 'm glad to continue my work with Solid at Sentry. I am glad for a lot of things right now. So... I hope you all have a great weekend.
[05:35:24]  We'll continue, you know, exploring... Where things are heading in JavaScript in coming weeks. I don't know what my next stream is. I said I've been doing
[05:35:34]  streams a little less often recently. But... I'm glad to still be able to do what I do. Anyway. Thank you. Let's all have a good one
[05:35:50] .