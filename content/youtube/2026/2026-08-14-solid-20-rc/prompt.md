---
title: 'Solid 2.0 RC'
slug: '2026-08-14-solid-20-rc'
duration: '5:54:24'
channel: 'Ryan Carniato'
url: 'https://www.youtube.com/watch?v=sYvrPLcGznA'
publishDate: '2026-08-14'
thumbnail: 'https://i.ytimg.com/vi/sYvrPLcGznA/maxresdefault.jpg'
channelURL: 'https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw'
description: |-
  It's here. Let's talk about it.
  
  No AI Agents were harmed in producing this stream cover.
---

This is a transcript with timestamps. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Create chapter titles based on the topics discussed throughout the transcript.
  - Include only starting timestamps in exact HH:MM:SS format, always using two digits each for hours, minutes, and seconds.
  - Chapters should be roughly 10-20 minutes long.

Format the output like so:

    ## Chapters

    ### 00:00:00 - Introduction and Overview
    ### 00:03:12 - The History of Web Development
    ### 00:07:45 - The Rise of JavaScript Frameworks
    ### 00:12:30 - Server-Side Technologies
    ### 00:18:00 - The Future of Web Development

[00:00:01.16] Hello everyone and welcome to my stream today.

[00:00:08.13] Pretty excited about this one. I know I say that like every week, but we're going to do stuff a little differently today. I would love if you came and said hi in the chat. Oh, weird. My audio is coming through the wrong device.

[00:00:21.02] Give me 2 seconds. I don't know what happened.

[00:00:25.08] It's going through my speakers.

[00:00:29.27] Okay. Check.

[00:00:33.21] Okay. Check, check. Okay. That's better.

[00:00:37.23] Check. Yeah, I can— all right. All right. This one's going to be a little bit different. Mostly that— how should I put it?

[00:00:52.10] I mean, you can, you guys can decide if it's a problem, but I think I have a bit of a problem. And that problem basically comes down to the fact that I actually mentioned this on, on X earlier and Blue Sky or whatever earlier this week. And I'm going to start here and then we'll get into the content today, which is obviously very exciting stuff. Solid 2.0, but it's actually really, really relevant. And it's important that I address you guys who are on the stream first.

[00:01:22.21] Sorry, I should also— hey, Brandon, I should say hi to all the peeps in the chat for a second while I get this loaded up. But hey, Brantley. Hey, I wanted to address the stream regulars because you guys know how big of a release Solid 2.0 has been to get to RC. I know there's still a lot of work to go from going RC to stable, but a lot of the work that we focus on on the stream is reaching its end. We, you know, we did a good job, guys.

[00:01:55.03] But it also means that it's, it's a bit of a— hey, Gabriel— it's a bit of a switch in tone. Right.

[00:02:06.28] Hey, thanks, Paulo. He works for the Svelte team. Yeah.

[00:02:15.05] All right. Yeah.

[00:02:23.08] Thank you.

[00:02:26.01] I still versus Stable. Yeah. I mean, but if we were first to alpha too, it was kind of like a back and forth, but only people paying attention to the stream probably knew that.

[00:02:48.07] I guess, yeah, I guess it wasn't alpha, we called it experimental, whatever.

[00:02:55.26] But yeah. And this is actually very, very related to what I want to, want to talk about today.

[00:03:05.05] Just to address everyone before we get started. Because you all are so important in things actually forming the way they do. I don't know if you realize or appreciate that, but being on stream and being able to talk through these ideas and getting feedback early has actually drastically shaped the final solution. I'd always come back, and it's not just direct feedback, it's me explaining the concepts and then people going, this confuses me, or I don't get this, or Ryan, does it have to be this way? And that has been foundational.

[00:03:41.04] There's like, there's the stream tier, there's the Discord tier. And then obviously my feedback loop with the agents directly. But all three of these have contributed to what I believe, you know, our final stable design is here. And this is really, really powerful. And it's why I am So appreciative of all you guys and doing the stream.

[00:04:08.20] The tricky part, though, is, is, is something that I just want to pull out right here.

[00:04:17.05] And Paul is right, not that it really matters, lol. But maybe it does a little bit. And let me talk about this a bit. Give me a second. I'm going to pull up one of my tweets.

[00:04:31.29] Just to get this going.

[00:04:38.01] Share my screen. It's not shared.

[00:04:50.03] My worst habit as a framework author. I live far enough in the future that I'm never home when it arrives.

[00:04:56.24] And I felt this a lot when working on the Solid 2.0 release.

[00:05:08.06] Because from when I started the release, I mean, beta has only been 5 months in RC, but when I actually started the concrete work, it almost aligned exactly when I moved from Netlify to Sentry. Like the timing was almost identical. At Netlify, I worked a lot on Solid Start, the full deployable solution. And it's funny, it was where we wanted to be. It wasn't intentional.

[00:05:36.03] It was kind of coincidental that that's just what I was working on at Netlify, but it marked like my time at Netlify was like basically Solid Start. And my time at Sentry so far has basically been Solid 2.0, but the roots of Solid 2.0 started before that. There was a working group back in 2021, to, um, I just had to prioritize things and got kind of got derailed by trying to fill out the Solid Start story. And I think a lot changed over that time period. I kind of just went heads down, obviously not completely heads down, because I have all you great people here to talk through all this stuff.

[00:06:13.04] But we started designing stuff right away, like back in, as I said, probably mid-2024, we were talking about all this async stuff, right? Before anyone else was talking about this async stuff. And it's tricky because what happened since I started on Solid 2.0, I watched the other frameworks not only adopt signals, but adopt fine-grained rendering. We've suddenly had Svelte 5 come out in the middle of that and Vue Vapor on the way, you know, got announced and stuff.

[00:06:49.23] Server functions. This is another baby of ours. Ended up, I guess, a little bit earlier ended up showing up in Next.js back in, I think, was it, I think they got them in 2023. I think they're only about a year after.

[00:07:08.16] But again, remote functions in Svelte and Qwik version server functions too. I guess that was also back in like 2023, but single flight mutations. These are concepts that we built on stream, you know, 4 years ago. And we were already off to the next races that when everyone started delivering on these features and making big hype around them, it just kind of got forgotten, you know, like I never took pause on what we had accomplished because for me, the goal was further, right? The React teams had this trap in the past, right?

[00:07:47.25] Except they handled it differently. Remember they introduced Suspense back in 2017, I want to say, React Iceland and Lazy. And then they had the, honestly, the story didn't finish until Async React came out.

[00:08:06.06] Towards the end of last year, like fall 2025. And that's an 8-year gap.

[00:08:15.18] And they were kind of working on in the background and stuff. And honestly, they inspired work. So to be fair, the first framework to actually really think about async in the shape that we talked about today was React. So React, big props there. Right.

[00:08:33.05] But the challenge is that if you're always chasing the completion of that story, you're not here for, you know, like the stuff when it's actually happening, when the developers are actually adopting it. And a lot of times, a lot of the features of Solid get overlooked because we don't talk about them. I talk about them on the stream, but people don't understand what it practically means for them. They don't actually understand what's exciting about it. Um, you know, I, and we get in this awful loop where I'm talking about something and it seems so amazing that people are like, you know what?

[00:09:08.23] I'm not going to use Solid 1.0. I'm going to wait for Solid 2.0 to come out. And I'm not going to lie. I almost did that to Solid 2.0. I almost came up.

[00:09:17.14] I was very tempted. I figured out some really groundbreaking stuff the last couple of weeks. I mentioned it on Twitter. And I was really tempted to just go all in on it today, you know? And what would that do again?

[00:09:31.23] What we would do is we'd basically undermine what people can build today. And I know the stream has been all about that. It's all been about living 2 or 3 years in the future.

[00:09:45.13] Right? There's a reason that other framework authors watch the stream. You can see it in the chat. You can see it in the history. We're always plowing ahead, but it also leaves us behind.

[00:10:03.04] I, you know, like if you go talk to a Svelte developer about remote functions, they have no freaking clue that Solid shipped something almost identical 3 years earlier.

[00:10:20.00] ViewVapor, another one, beautiful, you know, 7 years earlier.

[00:10:26.17] And you could say poor marketing on our part, but it's actually my fault. I get people so hyped about the future that we never stop to take, I don't know what the term, take value in what we deliver today.

[00:10:43.08] I have this terrible tendency to just keep on moving.

[00:10:56.06] So yeah, I think it does matter.

[00:11:01.07] I want to be here this time to actually celebrate in what we've accomplished. Because maybe pieces of it are subtle, but the way it all comes together is in a way that I haven't felt so, like, so in the right place since when I first kind of came to Signals and fine-grained rendering back in 2018 or I guess it was 16 years before that, but 18, the moment it came into click was when React announced hooks. And then I was like, wow, people are actually gonna do this. But it hasn't felt like that exactly the same way since then. And I think we're at one of those moments.

[00:11:47.20] Now is our time. Solid isn't— Solid 2.0 represents not just, you know, another incremental adoption, you know, Evolution here. The ideas here as they come together is a complete game changer. And it's difficult to express that. It's difficult to actually explain that in a way.

[00:12:15.08] I, some people saw the announcement post and they're just like, yeah, that sounds cool, but why is it different? What does it do? Someone asked earlier this morning, I was responding. They're like, how's this different than Svelte Async? And the ways are subtle, but incredibly profound.

[00:12:33.23] We have the benefit here, at least of the fact that I told you we kept chasing the future. We are actually at one of those natural points where all the pieces align, which, which I think is really huge. And it, and it does come along a couple axes. So what does that mean for the stream today? What it means for the stream today is I want to talk about today, a bit more, less about what's next.

[00:13:05.01] What's next is very exciting. And we'll touch on it a little bit later. But I think I'm doing Solid 2.0 a disservice every time I get too far ahead of ourselves. And what we have is pretty incredible.

[00:13:22.26] Okay, that, that, like, that's, that's the intro.

[00:13:49.06] Just catching up with chat.

[00:13:57.13] I hope you still continue to build React killer. I build a Solid killer. Yeah, I mean, this is the natural order of things. Solid 2.0 also offers a real opportunity for Solid killers to come out. I say that in the nicest possible way.

[00:14:12.08] Because at a certain point you cross a threshold from being minimal to basically handling everything. And between 1 and 2, we crossed that threshold.

[00:14:25.27] React had kind of had this problem where if you look at Redact or VNext, they're actually cutting features in order to make it smaller and do less because people think they don't want those features. And sometimes that's a fair bet to make. Where you're pivoting, you know, you're kind of like changing the base thing. You're like, I don't need all that. But like, even though Solid 2 is incredibly tree-shakable, I couldn't make it as small as Solid 1 simply from the fact that, as you can imagine, um, it just does so much more.

[00:14:59.21] It's— and, and, and a lot of it's intrinsic, right? And I think that's really important to kind of understand, like, the guarantees that it provides touch every piece. This is why, like, I love the DataStar people around, you know, fat morphs are better than server functions, and so on. Because when you try and take the whole picture of the story, like when you try and get like the whole spectrum of what the solutions can look at, like, and also try and make them fairly generalizable or universal, you do end up with more. It's possible to streamline on particular vectors and be more efficient.

[00:15:41.09] So at the same time that we open ourselves up to specific solutions, being more niche, Solid 2.0 puts us in a position where we're not a React killer, so per se, in like, we're not trying to like, I spent 1.0, trying to prove a point. I was, I had like a chip on my shoulder. I'm like, we can do everything that React can do. I feel like we proved that point all the way down to universal rendering, mobile, all that stuff. But Solid 2.0 was different.

[00:16:11.11] It was like, I don't care what React's doing. I want to leverage our system. I want to do the most possible with our system. And for Solid, that means signals. Signals are the core of what we do.

[00:16:26.04] And I guess that's a bit of a bet, but Solid, the signals are more intrinsic to it than any other framework out there. It's funny. People were like, remember when all the Signal stuff was happening in 2022, everyone's like, oh, Preact Signals is Signals. What's the best Signals library? Brian, you should export your Signals library as a separate framework.

[00:16:47.08] And guess what? I listened to you guys. Solid 2.0 @solidjs/signals is a library you can install yourself, but it's not what you expect. @Solidjs/signals is the largest part of the whole framework. It has the most code out of it, more than Solid, more than DOM Expressions, more than anything.

[00:17:04.15] It is the largest part. It is an absolutely massive library. Let me look at— I haven't actually looked at what the— like it tree shakes really well, but I actually haven't looked at Bundlephobia. Maybe we should look at Bundlephobia for a second. Wait a second, do we have this?

[00:17:22.05] Bundle-phobia. This is like the not Tree Shake. It's the really Solid. What's it? @Solid/js/signals.

[00:17:32.27] My guess is this is gonna show up larger than Solid 1.0 on its own. Yeah, yeah. 21 kilobyte signals library min-zipped. 22.

[00:17:47.19] Sorry guys.

[00:17:52.11] I mean, I'm— go point your agent at it, you know, Fable Ultra Code Mode, and try and make it reduce the size. It can— I've done like 10— I've done like that round multiple times.

[00:18:11.17] The reality is this is the whole framework.

[00:18:18.11] You don't use all of this all the time.

[00:18:23.23] Actually, which version of beta was this? Okay, actually, you know what? I think there's a regression here. We should look at this. Sorry, actually looking at this, there's a regression.

[00:18:33.29] There's, there's, oh no, no, never mind. Beta is the same size. Yeah, no, no, my bad. Sorry, it was 13. Yeah.

[00:18:38.23] So yeah. Okay. Yeah. Never mind this. This gap from here to here when we went from 40 to 60 was basically the optimistic lane machinery, I think.

[00:18:48.26] Yeah. This version was fairly— yeah. And then all the tons of bug fixes and stuff. Yeah. So, okay.

[00:18:58.05] Yeah. How's the breakdown on this? Yeah. So yeah, sorry. Beta and RC are the same.

[00:19:10.25] But I want you to understand this because you're like, you might be like, damn.

[00:19:31.23] AI articles and talking about that, we'll talk about that in a minute as well. That's a whole other topic. Maybe I'll save it for this week in Jamstack.

[00:19:50.19] I like this. I would say Sol has made a massive leap in providing grammar we need to express async. UI as succinctly and intuitively as possible. Yeah, and we're gonna talk about the metaframework into the framework thing too. It's actually all part of the same direction.

[00:20:14.18] Yeah, I got 12.5 for 4.5, but I should have missed on the— yeah.

[00:20:19.25] So yeah, I mean, the actual size of your builds are like a baseline solid application, like the hello world is still under 10 kilobytes broadly or whatever. Right. It's, it was 5 before. Now it's 10. It doubled because I couldn't tree shake the thing.

[00:20:35.14] I'm a big fan of tree shaking. All those guys who are all like, you don't need bundlers and build tools and stuff. I mean, it's funny because they're always like the really web standards kind of people that are always like, it's like, you think they'd want their users to have the best user experience.

[00:20:52.17] Nuts to me. I'm definitely willing to throw the developer on a fire if it means that the end user gets a better user experience. But, but only in the term of the infrastructure piece, right? I think it's important that we structurally design frameworks in a way that makes sense and provide guarantees. That's why I'm big on signals.

[00:21:12.21] But what I actually, what I'm trying to say here is Signals are incredibly important to Solid. And I know React's like, oh, I want to remind you of something where React was like, VDOM is just an implementation detail, right?

[00:21:37.11] You know, we could change something later or whatever. That's kind of BS. I humor, like humor me a bit, but yes, their actual physical VDOM they have is an implementation detail, but any solution that React has that needs to follow that shape is going to be based on a re-render diff engine. It's the rules, the contract that they set semantically in the way that you author their code. They can't change that on you.

[00:22:06.20] This is why the compiler is so odd. I mean, it's beautiful, but it's also so odd because it's like, still has to pretend like components are parts of code are rerunning that aren't like, you know what I mean? Like when they see side effects that are nested, they hoist them. So they rerun again. Like it's because they are basically tied to their VDOM.

[00:22:28.13] They're tied to the concept that the component is the unit of change. So effectively VDOM, you know, we had Dominic Gannaway, creator of Inferno. Octane on stream when he's working on Svelte 5 and he's called Svelte 3 a BDOM basically. And it's because under that same notion of React, like, yeah, it's not physically a BDOM, but mechanically when you, when you think about, um, how these things rerun with the unit of changes, it's a thing. So like today there are basically only two architectures.

[00:23:02.05] There's hybrids and weirdness, but you have something like Solid on one side that is just all in on the components and are sort of all in on the signals. And you could say that Svelte and Vue are pretty much in the same line. Little small difference because where the compiler meets the components, they're a little bit more on the component side. And then Vue, you know, today with the VDOM, but Vapor puts them squarely on kind of the solid side. And then there's the VDOM side.

[00:23:31.24] Which like Octane falls under. It's not a beat DOM, but conceptually, like architecturally, you're kind of on that side. It's kind of almost, it's close to a block DOM and it's more granular, but it's still the idea that the component and the state are entwined. Like we always agree that they entangle, but that the unit is at least a subunit of the component and it doesn't live externally. That's the fundamental difference between these architectures.

[00:24:04.09] If you want to understand it. And both sides have to make bets because they're viable approaches. I think Octane probably represents the peak of where that other side is. I mean, I thought, I thought Ripple did, honestly. I don't— Octane with the React stuff, I don't know.

[00:24:23.26] Like, we'd have to talk to Dominic specifically about the details or differences to kind of see there. But on the Signal side, Solid has basically been the forerunner because like, that's what we're proving here. There's other ways to get around the same kind of ergonomics and different trade-offs, but this is the purest version of this. And 22 kilobyte Signals library. Isn't that wild?

[00:25:16.26] Yeah, as I said, I— I challenge people to try and rebuild the same system. I actually had AI at one point build the Signals library from scratch just from the tests. And it ended up larger, obviously. But I mean, are we surprised?

[00:25:42.01] We made a lot of— and slower. We made a lot of really key performance— like some of the size is based on performance stuff. We made a lot of key decisions and architecture stuff early. The Signals library and over the bug fixes has had a lot of AI impact on the actual writing of it. But the core structures were all handwritten.

[00:25:59.09] The architecture was handwritten, like the actual mechanics and the layout. Over time, you know, it's been shaped a little bit, but I'd be very surprised if we could knock— and there's probably one kilobyte of this is probably just the tree shaking guards. To, you know, they add like a little, maybe kilobytes, a bit of heavy amount, maybe, maybe 300 to 500 bytes of the tree shaking guards. So they do add a little bit overhead on the whole thing on top to get the tree shake ability. But I think you'd be hard pressed to like the most optimal Hamilton code to knock more than maybe 2 kilobytes off that.

[00:26:44.09] Hubbix Vue Signal Library. Well, yeah, it's just not comparable. That's the thing. This is the whole, like, this is the framework. And this has important repercussions though.

[00:26:57.09] And there's a reason why I'm starting here because it means that to teach Solid, I need to teach signals. And we're gonna talk about signals today, 'cause I wanna make this addressable and approachable to everyone. This might be content that longtime stream users are completely familiar with. And I apologize for you because You've been, you're the people that I respect a ton for being with me through this whole journey, but we have to learn how to talk about Solid 2.0 to the, to the current devs, the people who are building apps. This is a challenge for me.

[00:27:24.01] I don't know how to explain just how incredible this framework is, which you think it should be obvious. But if you talk to the people in Hacker News, apparently I'm completely unable to explain what the value is here. And we got to work on that. So I think that starts with saying, like, hey, you're new to Solid 2.0. Here's what's going on.

[00:27:45.14] So we're going to run through a bit of that today.

[00:27:55.17] I haven't specifically thought about integrating Effect, though. I think our Actions API is like a sweet spot because Effect has a lot of very good work with sequential things, and that's where it fits. We have a generator-based actions API. If there's a way to go from effects like this, then this, then this, then this, then this kind of wiring into an async generator, like we're a match made in heaven. But yeah.

[00:28:25.01] What do we got here? I love your articles. Maybe Svelte 2 came out right time when Renyu is increasingly aging. Old habits mental carry the same. Wait, maybe.

[00:28:34.02] Okay. Yeah. It's just duplicate post. Yeah. I'm hoping so.

[00:28:37.26] I mean, I think there's a lot of good things in alignment now. And I think a lot of these choices are going to make sense as we talk about like what directionally we want, why we believe in signals. Why do we think this is the future? I mean, I think we've all seen— well, maybe we haven't all seen. I want to pull up a— do I even have it anymore?

[00:29:13.12] Code Sandbox is like dead, right?

[00:29:19.11] Like, can I even get into my old Code Sandbox stuff?

[00:29:36.16] Oh, it's funny. I thought I would— sorry guys, give me a second.

[00:30:12.18] Alright, thank God. Okay, so I used to have these Solid examples when I released Solid 1.0.

[00:30:26.27] And there's this one example.

[00:30:41.01] It's such a silly example. I could probably just make it again from scratch. But, yeah, it's funny because I have all these, like, suspense things, dynamic component hydration. Basically, yeah, let's— I'll just make it really quick from scratch.

[00:31:11.15] Playground. I need to refresh the playground. There's a whole new playground that you can actually update to Solid 2.0 right here.

[00:31:23.01] And hopefully it all works. Yeah, there we go. Solid 2.0. Solid 2.0 is breaking, but the playground example is completely unchanged. It's breaking in a slightly different way.

[00:31:36.12] A lot of developers, like people who can make toy demos, aren't even going to notice the breaking nature of it.

[00:31:43.08] But yeah, does my counter still work? It does. Okay. But one of the oldest Solid demos that I did Thanks. Yeah, no water.

[00:32:09.08] One of the oldest Solid demos that I ever did was, okay, let's make function button.

[00:32:24.11] Let's just like put the button in here. I just, just, just, this is so obvious to everyone at this point, but maybe you've never used Solid before and you're not aware of this.

[00:32:43.17] And I should use TypeScript here, but I'm being lazy.

[00:32:52.20] I think you all know what I'm gonna be doing here. Button onClick, incrementButton, and we're, we're just gonna pass count through here. Okay. Sweet. Okay.

[00:33:11.28] So unsurprisingly, this should still work. If I actually wired it properly.

[00:33:22.16] What it's from here.

[00:33:26.15] Props type. Is it onClick? Yeah. This is why you use TypeScript. I'm being lazy here.

[00:33:34.21] Okay.

[00:33:37.22] But my point is, okay. And then I do something silly like this where I would do like, console.log counter.

[00:33:56.07] And then I do something like console.log button, right? And you see it console.log once and then you click the thing and neither log ever again. And what used to throw people off in this example is I used to do something like count plus 1. Let's just start at 2 for some stupid reason.

[00:34:22.11] It still never runs it again. Because the truth of the matter is, as you compose through the primitives, the whole— every expression basically becomes its own pipe. It's basically passes through without re-rendering any components. So this is, becomes a function that gets called in here. So we go straight from source through as many components you want without rerunning any of the components, right?

[00:34:56.05] And this decoupling of component from state is the fundamental piece that differentiates us from a model like React. No matter how big your app gets, no matter how you lay out the components, unrelated pieces are not going to update on you or cause, like, yeah, like cause unrelated updates. You know, React's compiler is designed to guard against this. Solid, it's literally just how it works. It's impossible.

[00:35:28.14] Like you can't, mess it up. You don't need a compiler. It's literally structurally encoded into the rules of the framework.

[00:35:38.08] So I don't think this is news to most people anymore. But this is— this decoupling is recognizing that state can be owned by a component, right? You know, we can stick it in there.

[00:35:57.01] I'm just putting a fragment down here and adding a second counter.

[00:36:05.28] Right, now we have two counters. See, each component owns its own state. Do do do do do do do. But if we want to, if we push the state out into a global, and I'm not telling you to do this, Fun. Hahaha.

[00:36:27.12] Oh, we're gonna have to play with that funny.

[00:36:30.27] We don't recover from reactivity right now. The playground's gonna have to account for that. I was, we're a little bit harsher now on terms of like telling you that you did something wrong. But the playground doesn't use the HMR, it does like its own kind of thing. It's gonna need, there's reset APIs, but it's gonna need to wire into them.

[00:36:52.07] Good to know. It actually makes it a little bit awkward.

[00:36:57.27] Cause how do I tell it to refresh? That's interesting. This is why we do this stuff. We learn this.

[00:37:08.03] Refresh the page. Beautiful. Okay. Yeah, that's all I need to do.

[00:37:16.12] See how these two counters now, I hoist the state and now they're shared state. So the state can be owned by the component, but it doesn't have to be owned by the component. And if you look at it, we're still not logging each one more than once.

[00:37:37.17] So yeah, I mean, that was the Solid 1.0 pitch.

[00:37:50.01] Yeah, I mean, looking at the chat, you guys are mostly Solid users, so I'm like speaking to the choir. I'm hoping— I was really hoping this announcement would get past Solid users because this is the moment in time when like we're at this rare place where I think I think, I think we've cracked it, you know, and I'm going to show you why today, as most of you guys might already know, but this same sort of superpower gives us so much information. Solid DevTools already highlights this a bit, but we actually know what updates tie to what updates in UI. It's a graph that can be traced. Which means that signals are incredible from an observability standpoint.

[00:38:43.07] They're incredible from a performance standpoint. This is why if your source is incremental or has very small changes, maybe like a sync engine, you know exactly what piece of data should change in your database. You should be using something granular on this side to tell a complete end-to-end granular story. But more than that, we have the linking. What you wire incidentally through creating this UI is a graph.

[00:39:16.17] You're basically telling when something goes wrong, you're basically telling the framework, you're telling the tooling what went wrong.

[00:39:27.24] A like, just go re-render it model doesn't know anything like that.

[00:39:35.11] So why does this matter in terms of like Solid 2.0? Why Solid 2.0 is such a big deal here? It's because by making async part of the graph, async is no longer a side effect. It's no longer some thing that happens outside the system that then gets like inflicted on you. You know, it's not like, you know, it's funny in the article, release article, I called it a condition, like a medical condition.

[00:40:01.13] And that completely went over people's heads. And I'm sorry, it just, I've been thinking so much from the perspective as the framework is a person, I'm way too close to this, you know, some people talk about how their AIs are people. For me, you know, the framework's like a person. And I see all the other framework is it's like, its little buddies, you know?

[00:40:22.17] And async was like getting chickenpox.

[00:40:28.17] It was just this thing that kind of happens. And then the framework's like, don't scratch.

[00:40:36.18] It's something that you're aware of, but you can't really explain where it came from, right? Like it just kind of shows up, you know? It's like, I've used this comparison before. It's like having like living in a 2D world. I think there was some Simpsons special from like 20 years ago that did this.

[00:40:53.15] And then suddenly there being a third dimension. Like you see when it kind of occludes into your, into your surface, but it's not logical. Like you're just like, what, what is this doing here? And in the case for us, what that's meant is async is an effect, which means async is a write. And that is completely the backwards way to think about async.

[00:41:16.06] Async is a read. It's always been a read. It's always like, is this ready yet? Is this stale? You know, it's questions about, can I show this UI?

[00:41:27.16] Async can be writes and mutations, but at its core piece, async is a read. And if async is a read, how better to represent it than with signals? Because it's, it's this problem all over again. That's the cell. If async is part of your components and you're re-rendering your components, like all it takes is having async in two components like this nested and guess what?

[00:42:02.11] You're blocking this one. You're blocking this one. You know, you're playing this game of waterfalls.

[00:42:11.01] Right?

[00:42:16.24] Like, humor me for a second. Like, maybe this is a little bit too out of the box here. But just kind of like close your eyes, maybe, you know, let's just do a mental exercise. I mean, or you could maybe use your current code base. But like, Picture one value in your code, just picture a section of code and then you see one value in it and today it's synchronous.

[00:42:43.06] It's like inside runtime memory on your client and now it has to go async.

[00:42:58.01] Without redesigning your whole application or changing a bunch of stuff, how many files do you need to touch to change that one value from being synchronously available to being async? Like, like that value could be like a list or a user or some kind of setting or something. It doesn't really matter. But like, picture you have the value and you're like, okay, I have it today, but now I have to calculate something from the server to get it. You know, I need this from the server.

[00:43:30.00] Technically, you can go in there surgically and you can do a fetch and do an await or whatever right in that one spot. And it will probably work. But suddenly you have to worry about two really, really important things. First of all, If you're waiting right there, that's where the loading spinner goes.

[00:43:56.04] Screw your designer. They don't matter anymore. Mechanically, I need to put the loading spinner right there because that's where I'm blocking. That's where I can't render thing. It's right smack in the middle of my component here.

[00:44:11.18] That's where the loading spinner goes or above, arguably, but it wasn't async before. So I'm assuming, you know, Maybe you already have Suspense there. So good for you. Now it's triggering the parent Suspense. Maybe that's what you want.

[00:44:24.02] Maybe that's not what you want.

[00:44:27.22] The second thing you have to be aware of is, is there any async below me? Did I just cause a waterfall? Right? Because, because if, if I'm fetching here, like, I mean, I mean, this is a stupid example, but if this was async button, don't ask me why this is async function, but then this doesn't really work. This, I'm gonna have to do something about this whole thing thing.

[00:44:50.05] But, and now I'm like, effectively await fetch something, right?

[00:45:00.16] And, and I also have async counter here.

[00:45:09.24] And I'm await fetch something here and counter renders button.

[00:45:19.12] I don't get to run through the button code before I get to, you know, like you stop right here. Button is not getting rendered, which means it doesn't fetch. Then it continues. Now you might be like, oh, that's why we don't have async in the client. We have Await and client.

[00:45:37.26] Well, you know, we have use.

[00:45:41.21] Use. There we go. Now we have use. Let's use fetch something. But guess what use does?

[00:45:47.28] It throws. So guess you're also not continuing past here.

[00:45:55.09] I mean, how do you solve this? You can be clever. You can be Svelte and you can like read the await and be like, hmm, if there's waits in my component, I can do some like smart things on how I, how I kind of wire this stuff together by looking for where those awaits are. I might still kind of group them and it's a block because I don't really know my user's intent. But, you know, because let's face it, if you have a component and it's like this, this, this.

[00:46:24.19] Is it 1, 2, 3? Is it all in parallel?

[00:46:30.16] If this was actual JavaScript semantics, it'd be 1, 2, 3. But I think we're pretty safe to say by looking at this, 1, 2, 3 is probably not what the user wants unless, you know, you have a situation where this belongs, depends on this, you know, a smart compiler can wire that through.

[00:46:52.04] Or you can just not do any of this. Doo doo doo doo doo doo doo.

[00:47:00.08] Yeah, let's undo all of this.

[00:47:04.05] This example has overworn its usage. I'm going to pull something up in StackBlitz.

[00:47:23.24] And you've probably seen this example before if you've been following the stream, but I think it's important for people who have never done it before. I already showed you that signals kind of granularly go through the tree. So the difference between fetch in 3 seconds being, I put it in here as the timeout, but screw this. Let's fetch immediately. Return, what does this return?

[00:47:57.04] Date.now minus offset divided by 1000.

[00:48:15.27] I am missing closing brackets. Okay. Whatever. Sweet. Let's refresh this.

[00:48:24.09] Uh, it looks like there's, there's a rounding error. It doesn't matter. My point is I'm in my app. I have synchronous data being worked at 3 separate points.

[00:48:38.04] Now it's async.

[00:48:42.10] And yeah, I'm sorry, it does take 3 seconds to load, but it's not a waterfall. It's parallel. And why is it parallel? Because it's not blocking. A is getting rendered into here.

[00:48:55.24] It has nothing to do with B, but even if it did and we're threading the B prop, like through the props, like I showed a moment ago, it wouldn't matter until where B actually used it. That's what blocks. This expression, not the whole render, not the component. Like we already have the read semantics that you want and we get them for free. You don't need, you don't need anything special here.

[00:49:26.05] This A here is an accessor string.

[00:49:36.21] And guess what?

[00:49:41.05] I guess this is a number. My bad.

[00:49:46.02] Yeah, it's a number, whatever. If I'd string cast it the same way I string cast— yeah, sorry. You know what I missed? I missed the to\_fixed\_to. This is what we're missing here.

[00:49:56.14] This is why my example was not equivalent.

[00:50:00.17] Okay. And this is, this is fake because there's no return. Okay. There we go. Better.

[00:50:06.16] So our sync version is accessor string as far as the application is concerned and our async version is also accessor string as far as the application is concerned. So what I'm getting at is, yes, async has a cost that's unavoidable.

[00:50:43.02] But signals gives us the perfect way to provide the guarantees of the graph without disrupting the way we author code.

[00:50:59.23] Yeah. So I'm catching up with chat now.

[00:51:03.25] Yeah. Solid DevTools. I mean, for one, we haven't updated them for 2.0 yet.

[00:51:27.25] And here's the thing. When people focus on the granularity, they focus on performance, which is good. You should. But it's the authoring experience.

[00:51:40.16] It's, yeah, only the dependence. Like any, it's basically this, this can't re— we can't avoid waterfalls, but we can avoid avoidable waterfalls. You know, I was once quoted at a talk saying like, children become siblings, because that made a lot of sense to React developers. But to a human, I think, you know, like someone who's not just a React developer, the logic here is a little bit more straightforward. It's just, we avoid avoidable waterfalls.

[00:52:15.12] Don't get me wrong, you can still definitely wire in waterfalls if you're, if you're trying to, but there's a certain shape consideration here. And this part, I think people get, and actually Svelte has a great version of this demo because they can use their compiler to do pretty genius things, but no framework has version of this demo.

[00:52:39.14] That's ergonomic. This is one of those, like, this is when you start seeing the payoff because the loading, sorry, I should go back to the other example for just a second. But the loading is is movable. Now, don't get me wrong. Where is it?

[00:53:10.07] It makes sense in this example that the loading wraps the topmost component because you're waiting on it. But this loading here is movable. First of all, we can remove it. The problem with removing it, you'll get a warning in dev on the client at least, but removing it It still works. You just got to wait 3 seconds because there's no loading fallback.

[00:53:32.28] We just hold the render. It's basically, you know, so like that's bad experience.

[00:53:40.21] If we have dev mode in here, async outside loading boundary, async value is read outside loading boundary, the root mount will be deferred until all pending state settles yet. So like be aware, but this is actually only a client-side thing because on server rendering, if there is a loading, if there's no topmost loading, we just wait to flush, which means that everything above the topmost loading, it's PPR, you know, everything above the topmost loading, uh, basically renders without the fallback, like it holds. And then that's the point in which we flush the stream and then the client can hydrate at that point. So it's like, there's no problem. This is a client-only concern.

[00:54:17.20] But the idea here is It's wherever you really want the affordance to be. So if we— like, these all fetch in the same amount of time. So it's pointless for me to put the loading boundary down here around B and C because what you're going to see, obviously, is it's going to be blank for 3 seconds and then it's just going to show up with no loading because they all load at the same time. But, but like if for some reason this used a different API method.

[00:55:03.19] I don't even want to make it. You guys get what I'm saying, right? Fine, I'll make it.

[00:55:10.09] Fetch in 2 seconds.

[00:55:18.19] And then this became fetching 2 seconds.

[00:55:25.11] Fetch time in 2 seconds.

[00:55:30.11] Fetch time in 2 seconds. Then what you're going to see is 2 seconds of blank and then the loading come in. And then, yeah, I mean, the affordance of the loading didn't get its own div. It's like sitting. Right here.

[00:55:42.11] But you get what I'm saying. It's— I mean, we could also keep the original loading around this.

[00:56:00.26] Sorry. Loading top, you know.

[00:56:21.19] You know, like, and then you're like, oh, you know what, we don't want it around B. We actually just want it around C. But Actually, then we'll have the same problem because B will then cause the outer one to wait the 3 seconds again. Like, I hope you understand what I'm, what I'm getting at is you can just kind of stick them wherever makes sense.

[00:56:47.00] It's like the async part is the data. The loading is the UI affordance. These are related, but decoupled. It's very similar to the component decoupling that I showed with the props. And I'll give you one more example here on that side.

[00:57:08.22] Because as I was saying before, you basically can't— let me share this one in chat.

[00:57:30.21] You basically can't make this example in any other framework today. Now, do you want to? I don't know. But this is just naturally falls out of this.

[00:57:42.20] This is like a stab at React having a state update in here at the top level component because it triggers re-renders. Obviously the compiler can handle it, but this is just— ignore it for a moment. It's just showing that the— it's showing that while this is updating, nothing else updates. The other thing that demo didn't show, didn't really— the last demo, I didn't really emphasize and I should have emphasized is they all said rendered 1 times beside them because even when we're trying to render a loading and then we realize that we fail, we bail out. We don't throw away the DOM nodes that you were already loading.

[00:58:15.19] You know how like React throws and then it's like, okay, we got to rerender the DOM. Render our tree again. Solid actually renders as eagerly as possible, actually rendering most of the UI that it can't show. Like it can basically render the pieces off screen and then it just attaches them. So even though this gets interrupted, we only still render the component once.

[00:58:33.24] Um, that's the same kind of mentality here. You don't like, that's why you see this one time, even though if you look at this, like outloading It's still 1x. There's a funny little thing that I'm using to kind of keep count of how many times each one loading. But why is this example important? We're fetching our number.

[00:58:59.24] And then ignore this counter for a second. This is just here. We pass our number through our components.

[00:59:14.01] And we're adding and like adding to them, kind of like what I was showing with the, in that previous Playground counter where I'm like adding to it, I'm actually morphing it. But because as you know, with signals, we're not evaluating it here. We're actually evaluating it, you know, down, actually not even here and out, we're evaluating it all the way down here.

[00:59:39.12] We get to compose naturally, right? Because here's the problem. Remember that mental exercise we were doing a few minutes ago where we made the one value async? If you actually wanted to solve the block, the loading spinner here problem and the blocking here problem, the right solution and like the async children solution, the right solution in most frameworks is to lift the fetching higher, you know, put it in your route preloader or loader function. That's the best place.

[01:00:05.10] Get that fetching as high as possible. Because now there's no waterfalls. Great. And then the affordance, get it as low as possible. Wrap just the thing that matters.

[01:00:16.18] Great. Now we have like more UI, less cascading spinners. Good. We solved it. But what happens to how I asked you earlier, how many files you touched when you made that one value async?

[01:00:28.06] And I said in Solid or in most framework, like I said, like your starting point is probably one component, right? But in reality, if you do the right thing, it's every single component between the fetch and where you use it. Because now it's promise of user. You, you, you, you have to go through and basically asyncify your whole component tree.

[01:00:54.04] This doesn't care if this is async or not. If it's async, yeah, we show an affordance, but otherwise this is ignored.

[01:01:05.29] And the reason I made this a diamond is because this is where it gets really fun because these are two separate paths of value evaluation. Think about it. If you're passing a promise, how do you plus one or plus two here? How do you tell double and triple or times two and times 3 here. How do you tell these that they get different values along the chain?

[01:01:32.18] I can't go into out and give it the good value. Cause your first thing thinking here is like, okay, I'll go into the lower component and just await here and do the times 2 or the times 3 down here, or do the math down here, right? Block load. That's good. I'll wait in here under my loading essentially.

[01:01:50.18] And then I'll do the transform. But if the component's shared, you have no choice. If you're using values in multiple places, it's the same reason you hoist high, right? It's because you need the value in more than one place. Generally, you know, that's another reason why you hoist high.

[01:02:05.23] Once you're mechanically building UIs where you need to share components, share values, it has to compose. And yes, I can compose this as promises. We just will pass the promise down and then we'll be like, uh, um, p.then, no, we'll put the v equals v plus 1. So we will go through and essentially tag thenables onto the end of each transformation. And then here we'll go, uh, props.num, which is now a promise, um, .then value v times 2.

[01:02:52.07] And actually, these are generic components. They might work with number or— so it's actually number or promise, promise of number, to be fair. So we can't just do this. We actually have to check now. We're gonna have to be like, okay, props.num Maybe, maybe we could, we could say instance of promise or maybe then in props.num.

[01:03:21.22] Num's a scalar though. Like, can we do in it on it? I forget if it fails or not because it's not an object. Whatever. I don't want to worry about that.

[01:03:30.28] I don't even know the answer. So I might know the answer, but instead.

[01:03:37.00] I'm just going to use component props the way I have always used it and not touch every single component in the tree just because I just, this has to now be async.

[01:03:56.09] Is this a good way to explain things? Like help me out here, audience.

[01:04:01.18] Are you starting to see why async in Solid 2.0 is more powerful than you've seen in any framework to date.

[01:04:19.22] I'm really relying on you guys in a completely new capacity because I'm having really hard— I think this is amazing, but I'm having a really hard time explaining it to people.

[01:04:35.29] Oh, what I said wouldn't even work in React?

[01:04:39.18] Oh.

[01:04:43.05] It's nice, but I think it'd be nice to, uh, let me solve this while like a real React example. That's, that's what I was trying to show. But I think this is kind of where the problem is.

[01:04:53.19] You can't create new promises during render. Right. Cause it could re-render and then you— referentially equality, like React's compiler can't fix that. I guess I could use, could I? Oh no.

[01:05:05.21] But I, oh God, that's annoying. You might be like, oh, useRef or use some kind of like stable thing. But React doesn't guarantee that stability stays over async. It's part of its concurrency thing. So like you can't, it won't, it won't like, it's the reason why you can't just use memo as a cache for React.

[01:05:28.28] What I showed should work for Svelte though, like with doing the promise chaining, they can do that fallback.

[01:05:46.21] Like, it's funny because I did a comparison on this computer where I got different frameworks to do to do MVCs. And this is the challenge I've been having because it's like the Solid code wasn't only shorter, it was more complete. Like what AI eventually started doing was just copying what I did in the Solid example back into the like other framework examples. And then like adding their own infrastructure to try and make it work the same way because their intuitive approach that they took the other frameworks was, had a bunch of bugs in it. Like I actually showed this on a previous stream.

[01:06:22.20] And I think that that might be a good talk when I want to compare to other frameworks. I'm hoping though that this in itself, this sort of example itself can showcase the power here without having to result to saying like none of these other frameworks do it. Cause who knows, maybe one day they do adopt this and do this. Like Svelte, it's close. I think they've already kind of made a bit of a bet against this.

[01:06:45.17] They'd like, they'd have to redo a lot of their async work from scratch if they were to actually follow suit. And I don't think they actually believe completely in where we landed. Like, high level, we agree. But, but I also think that's because they haven't seen where I'm taking this next.

[01:07:08.14] That's fine, though.

[01:07:18.01] Solitude, someone React prompts and React, Iceland, maybe. Yeah. I mean, that's the thing. You guys, somebody can do the exercise of trying to design it. This example, this example is a beautiful example to try and design because it shows the composition principle on the read side.

[01:07:36.24] I actually did a post and nobody— well, I suppose people on Reddit, but no one understood what the hell I was talking about. I did it on Twitter too, but Reddit's probably the quicker way for me to find it because I know exactly what I'm looking for. This.

[01:08:03.18] This makes a ton of sense to me. But does this make sense to you?

[01:08:14.01] Yes. Solid turns expressions to lazy thunks, making it possible to treat async values simply as sync ones. Yes, that's, that's, that's probably the narrow clean version of, but for people to understand it, I almost have to start with sync thunks like this and make my way to async ones. But the real problem is that there's 4 lifecycles that happen in async when it interacts with your framework. There's the create, like when you actually do the fetch, like create the promise.

[01:08:52.01] As Gabriel said, you can't do this in React during render. It's like, you're going to get wonky stuff. That's why they have cache solutions. Well, that's why you have to invent a cache solution for them.

[01:09:09.26] Then, but run-once frameworks like Vue or Svelte or Solid or Remix don't have this problem. But where that comes back in is the consume point like the await, the use, is coupled or has its interaction with the UI blocking part. You have to do this below where you do this. Boundary has to be above the await in Svelte. Above the— so that has to be above the use in React.

[01:09:44.04] It has to be above the whatever Vue does these days.

[01:09:49.19] And then the place that actually needs to be blocking is the read. And when you couple these things together, which is naturally what the JavaScript language does in a sense, right? Await async function. Do you see what I'm saying? Like this is, this is like the async function wrapper around the await.

[01:10:08.29] This is a natural pattern. But what it means is the easiest thing you can do in the world is do it at the same level, change one component. Like I said, that's what you do. You realize something's async. You just change the one component and the gap between where you should be fetching higher up, you know, prevent those waterfalls and where you should be blocking lower down, right around where you, you know, the actual widget is, you need to use it is a negative on both sides.

[01:10:37.27] And you can play that toggle up and down. It's a dial, you know, Remix loves talking about dials. But as long as these are tied together, you're going to be sacrificing DX or UX. You can move the dial up and remove the coloration so you don't have to pass promises through and do the composition. You can await or use really high.

[01:10:58.06] But then guess what? You're blocking the whole UI. So you made the user experience worse.

[01:11:04.24] You can pull that dial all the way down so that you're blocking just around the read, which is good for UX. That's exactly where you want, but you had to touch every component in the middle and lose that composition aspect because now you're talking in promises.

[01:11:21.29] This is just like one of those fundamental structure things. And in Solid 2.0, we just break the chain. We just separate the poles.

[01:11:34.08] It means that this choice, like how far you wanna move it. Yeah. Okay. Maybe blocking UX isn't good, but maybe it's a design aspect, right? Right.

[01:11:43.18] We're not actually blocking, you know, it's just a UI block, but the choice, this and these aren't necessarily fused together, but are kind of fused together. And this is wherever it makes sense for your designer. We, this is what I've always loved about Solid's design for granularity is it puts the power back in the UI designer's hands. You're not trapped because the framework makes you do something mechanically.

[01:12:12.12] It's like sometimes designers are like, I need this to be here. This is where the loading indicator goes. And the framework's like, yeah, that's not easy to do. And you're now the guy. Suffering the DX part of the async coloration.

[01:12:30.13] And for those who don't know what I mean by coloration, I mean the null checks or the passing the promises through. It's this kind of infection contagion that happens when, again, this is what I'm talking about, async inflicting or a condition or like an illness on the framework that infects the whole component tree between where you actually introduce the promise. And that's when you're like, oh, use context. And then you're not feeding it through the tree. Sure.

[01:12:55.14] Use context, but like at a certain point you're going to consume it. And at a certain point it's going to be shared and you don't always get to make the change at the leaf. Like sometimes the leaf is the shared part. Don't worry. Like you can kind of do well enough with the other solution.

[01:13:21.09] Functions, React, Svelte, Vue, or whatever, like, I'm sure you can make it work. I'm just saying that this just does it automatically in the same way that fine-grained has always just done it automatically. It's just a structural truth.

[01:13:49.01] Okay. So that is not even the full story, but that's like the first, that's like the first half of the async story.

[01:14:02.26] That's the part that I put in the release article.

[01:14:08.26] The second half, let's move on. The second half of the async story for 2.0. There's actually 3 parts. And they tell a beautiful story. But the second half is the right side, because reads are beautiful.

[01:14:25.05] I mean, I guess I'm missing one part of the read that we're not gonna— that we don't see in this example. And we'll— I'll just pull up a different example. I didn't modify this one at all, did I? Whatever.

[01:14:41.27] I'll bring up Ryan Florence's state demo. People have been watching this know that I've seen this demo before, but the last real part of the re-demo, and this is another one of those demos that I encourage you to remake in your framework. Svelte does a beautiful job of this one. React is okay with async React, but it's a little bit tricky.

[01:15:07.27] But essentially, this is a dropdown where when you change the state, we kind of, we have to load the specific cities in the state. And the key to this demo is while it's loading, we don't want Florida. We don't want to ever see like Los Angeles, Florida.

[01:15:32.13] You know, like when I switched to California or Miami, California, we don't want to see Miami, California here. We want it to actually apply the change together. So like, obviously we've been showing initial load, but what happens after initial load? Now the naive approach to async that we've seen in the past with like, I don't know how Vue Suspense works, but with React Suspense, you're always constantly snapping back like the default behavior is if someone triggers more async underneath you, we're snapping back to loading. Like I change this loading, change this loading, change this loading.

[01:16:09.16] And honestly, that drives developers kind of nuts. I think like those kind of pain points are almost what led to Remix 3. Just like simply on the basis of like the async features, like sometimes you're loading, but sometimes you're not loading. You know what I mean?

[01:16:29.26] And the key to Solid 2.0 is, yeah, loading states are kind of like a one-time suspense. There's a way that you can like trigger them again if you really need to. Like on a key, there's an on prop. On equals, like if you really want to make it that whenever the state changes, like on what have we got selected. State, selected state.

[01:17:00.07] I think if I change this, we'll jump back to loading. I mean, there we go. React preserved.

[01:17:08.23] But like, you don't really want to do this. The way the on prop works is essentially what I like about it is it's not inverted. It's not the way loading or Suspense works. It's like an inversion of control, which is beautiful. It lets the async be defined, not top level above you.

[01:17:23.04] It lets you define it by what actually happens below. And on doesn't actually cancel that capability. All it's saying is that when this changes, be perceptive of future downstream async changes. That's all it's saying. It's not like this is directly what triggers the fallback to happen again.

[01:17:47.02] It's what says, hey, you are allowed to show a fallback if something fallback worthy happens underneath here. That's the gist of it, but we don't want this. I just want to show that you could still do it if you want to. Now, the point is loading runs once, but you see when I click this, oh yeah, sorry. This is my pre— this is running on like an old version of— this is like one of the beta releases.

[01:18:14.27] I don't even have Vite in here. This is an old example. Okay. But my point is when I change this, See how this grays out.

[01:18:23.24] We still have an affordance. It's just not loading. We just grayed it out. And the way we did it was actually really simple. IsPending.

[01:18:30.12] IsPendingCities. If this was a reusable component, it would be IsPendingOptions because a component might not know what the data is that it's operating on, but it knows what it needs. Remember I said at the beginning, reads are about like Is something happening? Like, is this stale? Is it not ready?

[01:18:50.14] That's what, that's what reads are all about. And so when you build UI, even generic components, you can, if you want to show an affordance now, you can obviously not do the affordance. A lot of times the UI components are kind of dumb and then the app is responsible for the affordances. It gives more control to the app developer. But if you're building reusable components that have async in mind with async affordances, you can ask the question, you go, are my options not ready?

[01:19:17.26] If so, disable me. It's a generic question that can be generically answered. And because isPending is not really a value, but it's a query, you're asking a question. And that is super powerful because again, we have a data graph. We can answer that question.

[01:19:34.12] Async is part of that graph. We know we, We know this. No other framework has this capability today where you can ask a specific question on a piece of data in your graph like that, right?

[01:19:48.26] It's just useful because, you know, some things change. And this is the story, right? You set up a loading, you set up the main affordances, and then as you're interacting with it, yes, there is a second affordance for pending, and often there should be. Often you don't rip out the whole UI because something's updating. You just show like a little micro spinner here or gray out this little bit here temporarily.

[01:20:10.28] You don't go like, all right, you don't go on Twitter and just be like, I did a post, whole thing turned into a loading spinner again. Right? But that's the default behavior in a lot of frameworks. As I said, big props to Svelte for that not being the default behavior. And on a simple example like this, Svelte can use effect$pending to basically indicate that like the action's happening, they can give you the exact same UI.

[01:20:40.02] So again, it's doable, but this is the actual pure form of the thing. And what you don't see here, and this is like the killer feature is how did, how did the UI hold? What we didn't have like a visible city or whatnot. Our state graph's right here. Look, we load the states.

[01:20:58.25] In a memo. We set the selected state. And right now you're going to see one of the new features in Solid 2.0. We have a signal that takes a function. It is a derived signal.

[01:21:08.07] Someone earlier in chat asked if you could fetch data in a signal, you could. And then you could like overwrite the fetch data with a setState. I don't really recommend doing that. I think you should view the server in this case as your source of truth. So like a memo is the perfect thing.

[01:21:21.16] This is why like people like, if signals, can be memos derived like this. Why do you still have createMemo? Why don't you just delete that too? Just delete everything, right? CreateSingle, createStore, we're done.

[01:21:34.21] Maybe useEffect if you feel like punishing yourself for no reason.

[01:21:40.19] Like, why did I create memo? Because I think it's important to establish even just semantically here that like this is derived. And because this is derived, you cannot mutate it. This is important. The mutation is special.

[01:21:55.06] It's something new. It's a privilege. This is why we have separated tuples here. We didn't just give people like, they can just write the signal anywhere thing because it's a contract. It's an understanding.

[01:22:09.13] If you just make your state writable wherever, you're not giving the developer, like the person who writes the code isn't giving future developers or API any intention. You're not saying like, hey, I, it's like the const keyword. Const is important. I know it's not read-only, but it's important to understand what it means. And here it means that I trust the server to be the source of data.

[01:22:34.22] Server is the truth. Get states coming from the server. Then my signal is an ephemeral override. It derives from the state. So it defaults to whenever the states change, it loads the first the first one.

[01:22:48.08] Now in this app, we have no country selector. So this is kind of mute. But so this only runs once, but then similarly, our cities are another memo that are derived from the selected state. Again, these are async, right? Like promise of string array, promise of string array.

[01:23:07.09] But as far as selected state is concerned, this is an accessor of string and this is an accessor of string array. Right? Or sorry, these, these are both accessors to string array. I was hovering the wrong thing. And then our selected city again is the first city when it loads, but then obviously we can override it with our temporal one.

[01:23:25.17] Basically whenever this changes, it's the source of truth, but we have local overrides. This is like half of the freaking when not to use useEffect docs in React. This just happens naturally here. You don't like, we just killed between the fact that you can fetch directly in this, like that, that this is, there's no effect for fetching. This is just literally async function.

[01:23:50.02] And the fact that this is writable, we have just removed 90% of your useEffect just in this one little example. What is useEffect? Like, don't get me wrong. There are use cases for effects. They're just not for synchronizing state.

[01:24:07.18] At least not from, unless the source is coming from like the DOM or from some, something outside the system. This is why, you know, I remember Remix a couple of years ago being like, when I use Remix, I never need useEffect anymore. And this is like, when you set up your system, or I guess a better example, when I use React Query, I never need to use useEffect again. It's because when you set up your system to derive the data like this, useEffect just kind of disappears away. And the fact that async is just part of this graph is just a wonderful blessing.

[01:24:40.17] Um, because we get to know more. Whenever you have an effect, you leave the graph, right? Like if, if, if I make an effect here, it's kind of like the setCount, right? If I, if like, let me think here. Like if I go createEffect, And I go, I see I need another driver to do this.

[01:25:07.22] So this isn't the best example.

[01:25:11.16] But my point is, if, like, pretend, actually, button is a better example. Pretend for some reason, the button wanted its own override. So it does something like, const create— let's call it count again— equals createSignal props.count, right? We don't like doing this in Solid already because we know that this could be a reactive value. ESLint is telling us like, hey, be careful, right?

[01:25:48.08] Why is it telling us to be careful here? Because we have false positives here.

[01:25:56.22] That's funny. I didn't realize this was actually a warning.

[01:26:04.00] This is actually fair criticism. I honestly, I'm so used to this install that I never even think about this. But I guess this could trip people up. Good you ESLint people. Okay.

[01:26:13.04] Anyways, my point is, if I have a local version of count, let's say. And I use useEffect, say like, setCount to props.count whenever props.count changes.

[01:26:30.00] Right? If I do this, I basically broken the graph because I don't know, like this is not reactive. So this could literally be gone. Right there, I got rid of our warning. This should work roughly the same.

[01:26:47.14] I guess technically it'll render with nothing first. I haven't imported createEffect though, and we're not using it. So don't worry about this error here for a second. But what I'm trying to say is, and this isn't even the current, sorry, this isn't even the current Solid createEffect API. So props.count.

[01:27:10.05] Count. Let's do this. This is actually better. Actually, no, look, we can be even cleverer than this. We can actually say setCount.

[01:27:18.02] There's actually something like really symmetric about this. But my point is, we don't know what sets count. So count, we have no clue that props.count is associated with this value. If this ever went async, anything downstream of count here doesn't know that. We, because we broke the chain, like it's not derived graph.

[01:27:43.28] It's literally a write. This is why async is so important in the graph because it literally, all those places where we broke the graph before, where we lose our traceability or our observability is no longer the case. We literally can, like in the case of like maybe like a full stack, you know, fine-grained thing, we can, we could probably trace from database table update all the way to field in the UI, because it's all just async along the line and we create the graph out of it. This breaks the graph. This is why— sorry, I didn't spell it right.

[01:28:17.24] This is why we don't want createEffect. And it's not even good. Like the solution isn't good because it initially renders without any value. And then, and then you kind of do this and then you're like, okay, but then That's not good. The answer is like really easy.

[01:28:35.22] You just do this.

[01:28:38.24] Done. So I think, I think this is a super powerful piece. To be fair, I first proposed this back in the working group back in like 21, 22. And in between me proposing that, and us finally launching it here, it's shown up in Angular. It's shown up in Octane.

[01:29:04.01] They, I think they used LinkState, like this whole, the LinkState thing is this idea of derived state or derived signals. But when I was looking at the problem, I was like, and this is part of why we're less tree-shakable now. Cause, because instead of calling it LinkState, I just said, look, if you want a signal, you want a signal. This is a place where the API collapse makes a lot of sense. Like, are we going to have createMemo, createSignal, createWritableMemo?

[01:29:26.09] Like the problem you start getting these permutations because there's also store-based versions of them and optimistic versions of those. I was like, no, you know what? Screw it. I know it's not quite as tree-shakable, but it, there's a simple concept, which is memos are pure, signals can write. Signal can also be derived, sure.

[01:29:46.26] But the important part is the write. The important part is, is what sets it apart for a signal is that it can be mutated. That's what I was saying. And that's why the contract is important. That's why the difference between these is important because we're saying like, look, look, this is the source of truth.

[01:30:05.20] This is saying, yeah, I have a source of truth and I can override it.

[01:30:18.11] Yeah, you can, you can work around stuff with useTransition, useDeferredValue in React. Yeah. But guess what? If you're a React developer, you're going to find this amusing. Every single setState or setCity call in Solid is a useTransition implicitly.

[01:30:32.14] This is why composition works so wonderfully because when you write your component, like Ricky went around about a year ago and he was like, okay guys, we need to have actions, like click action. We need to go through and rewrite all our component libraries for async React. And Honestly, if everyone did that, I think React would be a lot more awesome than it is today. I think async React is actually pretty cool. The problem is who's going to do that?

[01:31:08.26] I mean, I was like right on board with Ricky. You can watch the stream about a year ago, like in the fall. And I was just like, but then when he demoed it to me, it was funny. It was him demoing it to me that made me go, crap, we are really falling into a trap. And then I looked over and saw what Rich was doing in Solid Async.

[01:31:26.02] And I was like, you know, I was skeptical of this before, but this OneDX piece is the release here, right? Like this is the thing that frees it up. And I was like, can we do this in Solid? Can we make a— because they get so many— their compiler makes things so easy. We don't have a compiler.

[01:31:48.17] I'm like, can we do this purely runtime? Can I come up with a transition system that works implicitly always on without taking a performance hit? And the answer is yes. And we did. And that's what we just shipped.

[01:32:04.23] It's funny because you go on a benchmark and you look at like when React turns on transition mode and it's like drops like 20, 30%. We've got to go to the RC of the JSFramer benchmark, but I I, as far as my understanding is where it is and the difference in Solid 1 and 2 is within the range of run difference. It's possible that Solid 2 is like 0.001 slower than Solid 1 on average in a benchmark like that. Like, but I've, but that's within run variance. So like by hunches, it's like the tiniest bit slower.

[01:32:43.28] But it's not provable by numbers. And we've improved, and that's in that specific benchmark. We've actually improved numbers across the board and reactivity speed, and a whole bunch of other benchmarks, store-based stuff and reconciliation way faster now. So it's basically not moved from like an average to mean perspective. It's not anything anyone ever will ever notice.

[01:33:12.15] But my point is without a compiler, this is just a property of the async system. I think this is really important. So that is— sorry, now I've completed the read part of the story. This is why this system is so powerful because you get that consistency. You get held updates with affordances that are queryable at a per-location basis.

[01:33:36.11] You get derived state that's async, that's overridable in a way that you don't need effects anymore, pretty much at all. You don't have to worry about your initial loading affordances hijacking your app in terrible ways. You literally just write what you think you would have to write. And it just works optimally.

[01:33:58.22] No early blocking, no waterfalls. It's just what you see is what you get. There's no solution out there that does this. I can, I can, I can straight up say that comfortably.

[01:34:18.03] Yeah, exactly. Link Signal. Yeah, that's what I was talking about.

[01:34:34.17] The override here is actually really quite simple. This isn't even the complicated override. We'll talk about those in a minute. The override here is simply the value, right? The, the drive, we have a computation here.

[01:34:50.02] There's basically like a memo inside. And then we just update the the, the memo's value with the state writes. And then whenever this re-triggers, it takes precedence and rewrites it back again.

[01:35:01.22] It's not terribly fancy. The only piece is there is a little bit more coordination because we have the async bit. We don't commit changes immediately. We wait until everything resolves.

[01:35:17.03] But in basic, that's what's going on.

[01:35:25.20] Uh, the Solid DevTools for 1.0 had them, um, where it literally lit up the whole tree and showed— like, you can actually like click a button and it would light up the changes along the DevTools. Um, I don't know if work has happened much recently there. Solid DevTools, the Tarn app. Yeah, great stuff. I actually showed this once on a talk thing, because he's showing the component tree and then he has a bunch of ID values.

[01:35:53.27] There's a Chrome extension for it.

[01:35:59.05] The truth of the matter is, yeah, this probably hasn't been updated in the last, like, yeah, 11 months ago was probably the last update. No, 7 months ago. Package versioning. Kind of been waiting on Assault RC 2.0 before we move here. That's like where a lot of the work's happening now, linting tools and like supporting tools.

[01:36:18.14] You saw the little bug I found in the playground. We're going to have to like figure out how to make like some of the, some of the tooling stuff is still kind of in flux.

[01:36:33.21] Oh yeah, sorry. In my example, let me just post this in here so you can, you can all look at it. My bad. I should have done this earlier. I, I, it's right now I'm just using an async function here.

[01:36:45.01] This is just literally simulated on the client, but you could pretend this is your backend. You could pretend this is a server function, which we'll get to in a minute. But essentially, this is just some fake backend with simulated response. I just had it in the, in the file lower down. But The idea is like, this is an API call.

[01:37:05.08] But like, from our perspective here, it doesn't really matter that's an API call.

[01:37:11.29] Without loading, what's flexible rendering? Well, you just wouldn't see it. I think I showed this a minute ago. Without loading, we wait. And you get a warning.

[01:37:21.03] See what? Nothing. Oh, there it is.

[01:37:25.26] We're always consistent.

[01:37:29.17] I don't mind this because I think you can kind of tell you're like, oh crap, there's no loading indicator. Like if you do the most basic thing where you insert async into your app, you might have HMR on and not notice at first. So like, let me show you. So let's say like you added, you're like working on it and you add the async. This example doesn't have HMR, but pretend HMR is on.

[01:37:54.04] And you don't even notice and you're sitting there and you're like, okay, yeah, this works great. This works great. I was going to do this for the Learn with Jason if I ever got a chance, like do some kind of thing and like be updating in real time and then be like, okay, yeah, so we made our app. That's sweet. We just add the async, easy.

[01:38:06.28] And then we'd refresh the page and we'd be like, oh, what's going on? Why is it blank? And then you're like, oh crap, I forgot the loading thing. And your hope is you're like, okay, where's my loading thing? You just go, the reason we rename this, side note, for human language because it's exactly what you're looking for.

[01:38:22.12] I don't know what a suspense is. I mean, I do know it's a technical term for holding the rendering while async is processing. We suspend it. But if I'm a user and I'm like, oh, I'm not showing loading. I do the same thing with error boundary, like making an error or whatever.

[01:38:39.03] Like there's error and there's loading. You know, I'm hoping this is human findable language. I know that's kind of more of a Vue move because they like, they're big on those kinds of ergonomics. But here, this is, This is, this is good. There's some debate to call placeholder, but placeholder already has meaning within like the specific elements in the DOM.

[01:38:54.11] So I'm, I'm happy calling this concept loading. We have no other concept in Solid that directly maps to it.

[01:39:06.26] Yeah. I mean, there's a reason I dragged my feet at the beginning. People always get on my case for making betas really, really long or doing like multiple betas. Like at Solid Start, we did beta 1 and beta 2.

[01:39:21.16] And they get, you know, they're like, God, why Ryan is so slow. He never pushes the button. And honestly, this is a fault of mine. Solid could have gone 1.0 in 2019 around the same time Svelte 3 did. But I waited 2 years because I want to solve— I want to solve SSR.

[01:39:38.15] I wanted to make sure SSR was good. And in a sense, we got there, but it meant that we came out 2 years later. Similarly, I wanted to make sure this async story was completely fleshed out for 2.0. So the truth is we've added a few extra APIs and a few options in the last month or so, but the actual core API, like I'm showing you today, you can go find a stream from me 6 months ago and it hasn't changed.

[01:40:06.16] Like it almost didn't even change during beta. I'm just very conservative because, because of that. You probably, like, there was behavior changes in beta that's enough that I wouldn't have said you do production on that. But we're good. This is, when I said it's RC, I mean it's RC.

[01:40:28.17] Do we get up and update the signal locally to refreshes? I mean, you, the problem is you can probably update it. You're just never going to see it.

[01:40:42.04] Do you know what I mean? Because reading it basically like suspends because it's uninitialized. So like, good.

[01:41:04.23] Excuse me, I understand the game-changing part. Cool. Yeah, because this is my problem with explaining it because this is game-changing part 1. And I feel like Solid 2.0 has about 5 or 6 game-changing things of this level. It's kind of unprecedented, honestly.

[01:41:21.29] And that makes it really hard for me to know how to approach it and talk about it.

[01:41:36.10] So we have to continue. Why my streams are long. I'm sorry. I'm trying to keep this short.

[01:41:43.11] Okay, maybe 5 or 6 is exaggerating. Maybe like 3 or 4.

[01:41:50.09] There is an LMM text on the Solid V2 docs right now that are at least temporarily right here. V2 docs. The RC. There, there, there should be an LMM text in this one.

[01:42:08.16] Yes. And we're going to get to this in 2 seconds because it's important that refetch has its own semantics because it has a different meaning. And that's what I'm saying. We're barely scratching the surface here. I could probably do like a frontend master's course, like just solely on async reactivity in Solid.

[01:42:28.15] Um, the unexpected part is that the blood of the framework is that you treat async data like normally, you just intuitively expect how it works. Yeah. Yeah. Well, or you can get it for free right now if you continue staying on stream with me. Um, this is just the rough version.

[01:42:48.03] I'm gonna have to practice it like a dozen more times before I can do the frontend masters version.

[01:42:55.22] So, okay, reads are great. What about writes? Because the refresh question only matters if you have writes. And there's one more read thing I want to do. I'm very, very, very sorry.

[01:43:13.01] I just have to show this one off.

[01:43:19.14] This is the demo I give people to prove that they have transitions in their app. And I think it's, it's still an important demo. IsPending is a transition-based affordance. It's not just about downstream async. Obviously if you ask async if it's pending, it's fucking pending.

[01:43:35.17] But there's a difference with React is that their useTransition has a pending. So how do you know that you're transitioning. You could look at the data, but what if the data is not on the page that you're showing right now? What if you're moving from page 1 to page 2? How do you know that you're pending?

[01:43:54.17] Well, part of it is, you know, another mechanism I can show you in a minute around actions, but I don't want to, or optimistic state, I don't want to go there right away because that's very process-based. It's very like effect or action thing. And right now we're just talking about reads. We're talking about navigation. Navigation should be pure.

[01:44:14.29] So what can we do here? And the answer is actually pretty simple. Because we know the graph, we know the change that triggered the transition. We can trace it all along. So it doesn't, we don't need to know the async data that's on the other page, the lazy component.

[01:44:36.17] We don't need to know that. We just need to know If the thing that you wrote to initiate the transition is pending, and this is where we're like very much like React, even though they don't have this API and where I think Svelte, you know, it's a little bit more global, kind of falls off the cliff a little bit. I mean, it's fine. Pending global works in this case specifically, but this nuance is beautiful. We just ask the tab, which is a normal signal if it's pending.

[01:45:05.02] Side note. New class syntax. We have cls-sex-at-home.

[01:45:12.29] Full credit to where it belongs. I saw Svelte do this and I was like, why? We had class— we had this in Kame. We had class list that was kind of like this. And then Svelte brought it into the native class.

[01:45:23.24] And then now I'm like, I saw Svelte and I was like, okay, let's bring it into our native class. I was worried too much about performance. This is technically a performance deopt at the most micro level because now the class binding has to be smarter and has a fork in its logic and it requires people need more code. This is an example of where like ergonomics beat like the micro benchmarkers. It's just so much freaking nicer to be able to just go class tab and then go pending is pending.

[01:45:47.13] But that, that, that's it. We set the tab, even though this is a switch match in Solid, you know, conditional. This child is, um, let's look at what child does. Child has an async memo in it. Where it, it some randomly takes some time to fetch its data.

[01:46:08.17] And then child with loading has scoped, has its async memo, but scopes it within its own loading boundary. So I, this lets us show both forms of, of our navigation because we can ask initially when we load the page, we see that we see our loading boundary like we expect. It's right here and it's using this loader thing.

[01:46:33.05] The only other loading boundary is on tab 3 right now, which also has a message to it that says specifically loading 3 or 3. So how does this example work? When I click onto tab 2, oh, that was too fast. If it's slower, yeah, we're gonna, we're gonna, we're gonna slow this down so we can see it. I'm gonna give it a, a, a floor ceiling of like 380 or something.

[01:47:02.14] Let's try this again.

[01:47:05.19] There we go. Kind of turns gray from that pending indicator. I have a delay on the CSS so it doesn't turn gray right away. So it's not too jarring. It only does it after about 200 milliseconds.

[01:47:15.06] But as we click between these, it knows to switch pending, even though the thing that's actually pending is downstream from that change on a separate offscreen tab. And more so, see how this counter keeps on counting? It's technically being rendered separately on each page. It's not like threaded through. It's just the props of count.

[01:47:37.01] But what it means is when this page unloads, like think about it, when you navigate to a new tab, what happens? You set tab to new tab. It ripples through the reactive system, right? It ripples through your rendering system. And now this switch switches to this switch.

[01:47:54.04] It literally unmounts, removes it, should free up and clean up everything that's underneath it. But our problem is because it's async, we don't want it. We're still showing it on the screen. We don't want— this is the transition or held behavior that we want. But at the same time, each page, there's a signal triggering here that gives me password.

[01:48:15.24] So each page is live updating while this is happening. You don't want the second you click on the tab, the whole page to go dead. Like, yes, in a lot of cases, you don't want people interacting with it anymore. That's part of the pending affordance. You might want to disable some buttons on it or whatever.

[01:48:29.13] But you also, let's say you're doing some kind of animation or I don't know, you're doing some kind of thing that you're triggering through.

[01:48:37.16] It shouldn't stop counting even though technically you're already on the separate page and thing. This is the transition behavior. And in Solid 2.0, it's implicit again, because you can just set the tab and ask if the tab is pending. And the rest falls out of it. And if you have a lower loading boundary, well, the navigation becomes instant.

[01:48:56.17] See, we went instantly to the page. We can see this right away. It just, it's the lower loading boundary that caught it. This is no longer pending, right? The async itself, if it's pending, will stay pending, but something upstream of the async, once it's allowed to show the value it's supposed to show, it's no longer pending.

[01:49:12.02] Pending is the gap between it being able to show what it's allowed to show. And when you have a loading boundary masking the downstream async, it's allowed to show what it can show. It can go, it doesn't have to worry about tearing. The reason that we, that we hold the values is simply because we don't want the UI to like show try up here while still showing the content for dos. That's why we hold it.

[01:49:35.23] We don't want the tab immediately go across unless we want to, unless that's the affordance you want. But in, our case, this is not the performance we're going for. We're going for the more like mobile app kind of smooth animation type performance. So the whole thing moves together in sweep. If you wanted that experience, well, you can do it by nesting a loading, like I'm showing here, but generally speaking, we're holding and doing the less jarring, keep on showing loading spinners on navigation.

[01:50:01.28] Some people consider this less jarring. Actually, it's not some people, studies have proven that this this kind of approach is less jarring than like always like having loading spinners, you know, coming in at you, you go navigate, navigate, navigate, content, rip, rip, rip, rip. It's the same problem, a similar problem to like the Suspense ripping. But obviously sometimes you want to show some stuff and not other stuff. So nested loading has its value.

[01:50:30.21] But the same system without having a transition wrapper actually gives you the same power. You just have to ask the right question.

[01:50:49.03] I believe so. I don't know what you're doing, but I think so. I don't know if we have tests for that, but the front half is just a computation. It runs at the same time as all the other computations. We, we, we, Yeah, it is crazy stuff.

[01:51:12.13] I don't think I can talk about it on stream though. I'm going to steal 2.0's thunder and I don't want to do that.

[01:51:25.20] But yeah, like, okay, I think I'm finally done the read part of the equation. You kind of— you can start seeing this. This full picture kind of formulate here where you have complete control over your affordances and the graph does the right thing. You choose where the pending is, you choose where the loading is. This is a design aspect and the framework just knows how to handle transitions or held consistent UI by default.

[01:51:58.00] Okay. Let's go back to our more realistic baseline number. Okay. Because like, it's funny, I'm like making these really big artificial delays so you can see it over the stream. But like in a real app, what this means is sometimes, it's an old demo.

[01:52:15.16] Sometimes when stuff is slow, you'll see that pending. But other times when it's fast, you won't even notice. That's why people, sorry, that was the wrong one going between these two. That's why people do this kind of affordance is that the idea is majority of time, if the response is under 200 milliseconds, the end user doesn't even really pick up a clue on the fact that there was any kind of affordance. It just looks like they just went to the next page.

[01:52:41.27] When it's slow, like this happens, you're like, okay, I should tell them because they need to know they clicked the button. But otherwise, you know, it can be fast. Now I'm getting all slow ones. Like what if, what if our response on average was actually 80 milliseconds plus a 220 thing. Let's do that.

[01:53:04.02] But if it was like that, so that was a slower one. We got a little bit of one, but these are relatively fast. That was a slower one. Fast.

[01:53:13.03] Like this is more like what a real app would see.

[01:53:19.20] Like this is the kind of thing you think about. When just so that when there's that rare occurrence that like something really bad happens and things go slow, you know, anyway.

[01:53:38.02] But in order to do this, you need the tools to do it. So it doesn't mean don't ship this. It just means have the flexibility to scale. All right.

[01:54:02.22] Let's see. Understand features. Maybe you can explain these same features. Yeah. I mean, is that, is that, is that our audience?

[01:54:08.16] I mean, might be. I don't know.

[01:54:12.02] Prefetch is a thing. Yeah. Sure. Prefetch is a thing. These all work in concert.

[01:54:19.09] I love prefetch, but, you know, and caching is a thing as well. But at your core mechanics, you want to be able to do the most because there's always the cold case.

[01:54:35.02] I think I do, I do think a lot of solutions basically said, oh, with prefetch, it's good enough. I honestly think that's how sometimes Next.js uses a way server waterfalls and stuff, you know. And like not using like route loaders or preload. I have always been big on structurally creating your app in the way that will lead to the most baseline performance and consider stuff like preloading and prefetching a last stage optimization, um, right before getting to compilers, right? You, you want your stuff to be fast by architecture.

[01:55:09.02] Like that's the thing. Like you have to. You have to look at the fundamentals first and then, you know, kind of go from there, right? Like, like a perfect example of a fundamental. If you, if you click something and it goes to the server and you wait until it comes back from the server to show anything to the user, it's going to appear to be slower than if you give them affordance immediately before going to the server.

[01:55:37.02] There's just no way to get around that fact. If one side you're measuring the gap from like click to show, which is instant, like however long it takes, like an animation frame. And the other side, there's no way for a network to be as fast as an animation frame. It's just physics. It's just the core baseline truth.

[01:55:59.05] It doesn't mean we shouldn't optimize the network path. It just means that we need to consider when looking at the full spectrum of solutions, how client-side affordances fit into the puzzle.

[01:56:18.29] Right? Like, there's no changing that fact, right? And I think everyone understands that there's no changing that fact. Okay. So that's Reed.

[01:56:34.22] What about write?

[01:56:41.19] Ever made to-do MVC?

[01:56:46.15] Yeah, I think we've all done it.

[01:56:51.07] This is a great thing. I made a very basic one. It doesn't have all the functionality. This one literally has 3 functions. You can go add a to-do.

[01:56:59.23] To-do, to-do, to-do, check a to-do off, completed, and delete them. There's no filtering. There's none of the other advanced stuff. I have an example of all the advanced stuff inside the Solid repo, but don't worry about it. Right now, this is really simple.

[01:57:09.20] There's 3 things we do. On input, we add a to-do, right? And then down here inside our each to-do, we have onToggle and onRemove, which just, again, I love that new class syntax. We just kind of wire it through to do completed and whatnot. This is a very simple todo app.

[01:57:32.21] This is, this is like todo MVC that you, that the Solid, like if you go into the official repo for 1.0, this is the same thing. What I did was I abstracted it. If you ever go into todo MVC, people like try and make, the reason it's called MVC was because it's model view controller originally. Right. So people were always trying to show like, it's so funny because when frontend came out and people were first making these demos, It was not very structured.

[01:57:54.13] Sorry, it was jQuery and all the spaghetti imperative code. Sorry.

[01:58:04.27] So the whole point of TodoMVC was to show that you could do structured, real programming in the front end for an application, even though this is like the most trivial application ever. So some of the earliest TodoMVC examples are the most convoluted things you have ever seen. And it's funny now with modern JavaScript, if you go in and make like a 2MVC with just vanilla, it's actually really simple and really clean and it looks great. I think the creator Frontend Masters actually went into that.

[01:58:33.21] And, but getting back to this declarative route, what it means is usually they, there's the model and the view and the controller. Well, we don't really have a controller here. We're more MVVM or whatever. So our view and our view model are kind of like the same thing. Here.

[01:58:49.12] Well, these are, we basically have components and models. So I extracted the model. So the model is here to do, right? And I also made a fake server. You can pretend these are server functions or whatever API endpoints, I don't care.

[01:59:02.20] But the gist of it here is that I have an app that I built that has some basic functionality and it just kind of works. And then inside, this is where all the work happens. So because I'm a client-side app, I have a store. And if anyone's seen stores in Solid, they're like granular signals. Each individual operation pushes separately.

[01:59:29.27] We don't have to rerender anything. If you update the one todo, we just, it's a signal straight to the todo, to the list. We don't have to rerun the whole, like to the item in the list. We don't have to rerun the whole list. We don't need like a memoizing compiler.

[01:59:42.01] If you understand that each property is its own separate signal created lazily, then it becomes really easy to understand that when, like, when we update a todo, we don't need to, like, it's not immutable. We don't need to rerun the list. We don't need to rerun all the components in the list. We, we don't need to have a key on here for memoization. It's referenced because we're not recreating new DOM nodes.

[02:00:03.03] We're literally just going in and being like, okay. Todo completed. Where is that? Oh yeah. Props todo completed.

[02:00:09.24] Yeah. Let's, let's trigger that thing or, you know, obviously deletion or addition is going to affect the list, but our list is optimal. So we only actually rerun the component for the new ones that are created. This is just base Solid 1.0 Solid mechanics. So what's the API for stores?

[02:00:31.28] Before we had a very Immutable.js thing, Falcor, I was very inspired by like those APIs. Solid 2.0, I just caved. I'm like, screw this. I didn't want to go MobX full mutable. As I mentioned, the ability to write, it's very, very important.

[02:00:46.17] You shouldn't just pass proxies around that can be written anywhere. It's a terrible, terrible, dangerous pattern because you lose that contract. You know, it's the classic immutable contract where you like call a function and pass some complex data in. What's that data on the next line of code? You don't know.

[02:01:02.14] Because you didn't, you didn't create a contract around the writes. And like earlier, when we were talking about createMemo and this, this is important when you consider like the server, the source, you need to be able to constrain it. But here, this is not a server. This is your everyday todo MVC. So all I'm doing here is literally pushing a todo on, filtering out a todo, and then finding the todo in the list and marking it as complete.

[02:01:23.10] This is the one write right there. You know, these are list operations. Done. It's pretty easy.

[02:01:32.10] So my question to you is, how do we make this async?

[02:01:49.13] To do— I'm saying it was under— I don't know what PHP demos you would— my memory of the early 2000s was that we did all these really long round trips. I mean, to be fair, I did a bit of PHP work. I was mostly stuck in ASP.NET and ASP Web Forms. And I don't remember anything about that era being even remotely good. Like even like it was the worst garbage that I like, I call it the dark ages.

[02:02:24.21] Like part of it, basically it was like a time where we tried to pretend that client interactivity didn't exist. And like, it was such a big lie that like, it was really awkward. Like, I remember like, we used to have something in ASP called like ViewState and we would just like, render the page and serialize all the data that we needed in the client across the wire. And then the client would edit it and then serialize it all back again. And then they're like, okay, well, let's make this more efficient.

[02:03:00.07] Let's make partials. Let's like, where we just swap part of the view and then we'll make the lifecycle on the client, on the server smarter. So it doesn't run the full lifecycle. And it just runs like the parts we need to do like an in-place update. And it kind of worked, but then like literally, like this is like a misplaced kind of situation.

[02:03:21.18] Like, cause there's a lot of situations where that did work. I made CRUD apps, you know, like admin, like very simple, like admin CRUD apps that, that was fine for, but like I was working on social media and we did Rails backend. And then we just like, we switched to JavaScript and just did the logic in the client. And it was like, The app was like 100 times faster. Like it was just all the machinery went away and it was just like so clear.

[02:03:46.22] Now, obviously we weren't measuring the load times of that app for like the initial load for the JavaScript and stuff. And our app wasn't that big, but like the simplicity that came from just simply having the data source in one place, like being able to mutate and like give all the affordances that we need, like we're doing drag and drop photos and we're tagging and we're doing all these like can interact with things.

[02:04:12.26] It made update panels look like a joke.

[02:04:20.07] I still maintain— don't get me wrong, technology on that side has improved drastically. And things like HTMX keeping really close to the core web level contract is really nice because it lets us rebuild on it in a fresher way. But I'm— so I'm not like necessarily discounting the whole, the whole approach fundamentally. It's just like the things as they were implemented 20, 30, 25 years ago or whatever were kind of terrible, like really terrible. And you can't blame it.

[02:04:56.12] It was 25 years ago. But yeah.

[02:05:02.21] At least that's from my perspective.

[02:05:09.23] Like, like, like, I'm coming from a time period, I remember like going to travel agency sites and like having those cascading dropdowns of like, and you could say this was bad, like developers just being dumb. And I agree on that. But I remember like switching the country to load the city, like, and these cascading dropdowns, which would cause, yes, partial updates, but you'd be like freaking waiting there. And yeah, the solution is do some preloading and like predictive stuff. It was just every interaction felt like you're submitting a whole form and like, it just, you could go like grab your coffee and come back.

[02:05:49.21] That was my memory of the web in 2000. And as I said, probably not doing great things. But that was like the, that's like the equivalent of dumb React developer today.

[02:06:02.19] You know, like where people like, it's like the baseline.

[02:06:10.25] Anyway, sorry, I got way off on a tangent. So, okay. Cement this into your memory. You see the R3 actions here. And now you've got this in your head.

[02:06:26.04] And you see our app. It's pretty straightforward. It's a for loop over some todos, we pass some actions through, we do our actions, we click destroy. Now, I wanna show you another app. I don't think I changed anything in this one.

[02:06:49.04] Sorry, I clicked on the wrong— I almost made the bad reveal there. Okay. Now, if you look at this app, it looks almost identical to the other app. Oh, there's a loading. I cheated.

[02:07:02.04] What's going on here? Oh, right. I haven't updated this one with the latest 2.0.

[02:07:10.29] Okay, that's fine. That one should— that should have happened. Okay. Okay. For went back to being keyedFor— or keyedFor went back to being a direct pass instead of an accessor.

[02:07:22.18] Better for performance and more literal to what's actually happening. Okay. There's a loading. I added a loading thing here. But we can delete this as we've already proven before.

[02:07:35.11] If we really want to, we can remove this. What I'm showing you here is the exact same app. It should look like the exact same app, except I made it async this time. You may be like, what? See, I removed the loading and it still works.

[02:07:49.26] I'm gonna leave the loading here just because let's face it, you don't want that wait time while you wait for the todos to come in. You know, okay, there are none. That's why it's blank here. But we can ignore that loading indicator for the most part. This app is identical to the one I just showed you.

[02:08:16.10] So I told you that this was async. And the problem, the thing is, you can see now because addTodos is a promise void, removeTodos is a promise void. And more importantly, I guess you can't really see it. Yeah, you can't really see it through the types. Okay.

[02:08:38.23] I'm going to tell you it's async, but I want you to watch this.

[02:08:44.29] Nothing you see here looks differently than what I just showed you before.

[02:08:57.12] What version of this is this on? I feel like we need to bump this up a little bit. I'll worry about it later.

[02:09:07.29] Okay. Right. So what does async about this?

[02:09:14.08] Well, let's go to API. Yes, because there was no API in the other one or it wasn't doing anything. There is a delay on these todos. You can see it, there's 400 milliseconds on saving the todos. And if I go to get todos, there is also a 400 millisecond delay.

[02:09:34.05] So technically speaking, between every click and save here, there should be 400 milliseconds, but stuff is happening immediately.

[02:09:58.11] Right? So what did I do? I'm, I'm there. There is this delay and the app hasn't changed. What did we do?

[02:10:04.22] Well, let's look at our new todos. First of all, it's no longer store. It's createOptimisticStore. What's createOptimisticStore? It's a store.

[02:10:12.20] That's saying that my writes are not the authoritative truth. The server is the authority of truth, but my writes are what I think the future will be. That's what an opt— what, that's what optimism is. It's basically saying, while this thing is happening, this is what I think it'll be. Because if you didn't have optimism, because we do consistency, you wouldn't see the updated right away, right?

[02:10:38.03] You would, add a todo and then you wait for it, maybe show an isPending or something to give an indicator. But then the todo would come back when it, when it did.

[02:10:47.29] Whereas an optimistic store is saying, hey, I think this is going to be the truth, but I don't know yet.

[02:10:58.06] And then we need something else for this because we need a way of tying our change to the eventual update. We need to make sure that it all happens together transactionally. We need to make sure that if we have multiple things in flight, they're not stomping on each other, they're not canceling each other out. There's no race conditions. We need a way of saying, look, if these things entangle, we can't accept the truth until we have the complete authoritative truth from the server.

[02:11:25.16] Right. We can predict as much as we want, but we shouldn't get ahead of ourselves. You know what I mean? Like in the sense of like, we can't say like this is true until the server verifies it. And if there's partial states coming back at the same time that could impact each other, we shouldn't consider it committed until we have the full story.

[02:11:47.29] So we needed a way to extend the transition because yes, transition, sync frame, anything that happens as part of that transition, all those writes, but The problem is when you have a mutation, there's no graph connection. You don't know that what addTodo does. It's something on the server and you don't know, you can't connect the dots. You don't know like when it comes back, you're part of the same operation. We needed a wrapper.

[02:12:12.16] And the problem is there's no such thing as async context in JavaScript. So if you use, if we made these async functions, you have this terrible, terrible problem. That when you come back, there's no connectivity. There's no way for us to say, yeah, this is the same thing.

[02:12:29.18] You have to call, you know, if you're React, call startTransition again, which is crazy. And in our case, because React kind of has like one global transition, we were doing granular parallel transitions. We actually had to thread the transition through the arguments, which is terrible because when you create like an action or something you want to use, You just want to have the argument, you know, like these signatures, other than the void promise part, which is useful for hooking into external stuff, is the same for these. This takes a todo. This takes an ID.

[02:13:01.03] This takes an ID and a completed thing. Like we don't want to change what our actions are doing. I did not touch this file at all. If you skip that loading indicator, all I did was wire this to a backend. So API.getTodos now is where our store derives from.

[02:13:16.23] And a Drive store, this not just optimistic store, but generally when you return something from the store API, store APIs are designed for mutation. But when you have a Drive store and you return something, it automatically does a reconcile diff in the background. In this case, the default is ID, but you can change that via configuration. So we're basically doing a diff of— and the reason why optimistic is important is because we're not just diffing the server state versus the previous server state. We're diffing the server state versus our optimistic prediction, which means that any nodes or things that we create during our optimistic phase, even though they are never the source of truth, they can be reused.

[02:13:53.10] So if we optimistically create a todo, it's not just like a second list, you know, like the old like Remix optimistic, like optimistic approach. It's actually, it's more like GraphQL, except there's no rollback. If you've ever used GraphQL stuff, you always had to write the forward motion and the rollback. We're handling the rollback automatically. Like if stuff goes wrong, or doesn't commit, well, the server becomes that authenticated source of truth and it, and it, and it corrects the diff.

[02:14:24.22] So what we have here is we have, we get our todos. And then we have an action. Now, the action here is yielding our, our actual like server save, and then it's calling refresh. Someone earlier asked, How can you do it without triggering? And the answer is we have a refresh API specifically, which is like invalidate me and let me try again.

[02:14:51.22] And if I change, I will notify everything downstream that changed. The default thinking of refresh is that it doesn't change. This isn't necessarily a direct pending thing. And it happens too late anyways. What I mean is if you need some kind of optimistic state, some kind of indicator, it needs to happen before you do the save, not after it comes back from the server, that's already too late.

[02:15:13.00] So refresh is not really designed for that. It's just saying like, hey, let's go trigger the invalidate, like from a TanStack perspective. But what is the optimistic state? Well, remember our old example, where I told you to burn into your brain what the mutations were? Well, we actually just kept them.

[02:15:31.19] Because it's still a store. Our predictions of what the Todo app will be are exactly the same as, as what our mutations were in the original Solid app. We just push a todo when we add a todo. We filter it or we mark it as completed. Then we go to the server and do the operation.

[02:15:52.18] And then we refresh the todos and get the latest and compare our optimistic state against our, our real state. If nothing changed, we do no additional work. Right? What's beautiful about this is this is a fine-grained change. This is classic Solid.

[02:16:04.01] You're just changing the one field that updated in the client. And then when it comes back and does the diff, if nothing has changed, we do no work. It collapses the whole mutation cycle into fine-grained updates again. This wire format might not be the most efficient, but we actually have a bit more of an answer about that as well, which we'll get to in a, which I'll get to in a minute. But from a strictly client-side standpoint.

[02:16:33.10] And this is built into the framework, just like Optimism. This is not a Solid Start feature. This is Solid. This is core because this is part of the Signals library. This is what I was trying to get at.

[02:16:47.29] These are fundamental pieces that you need in order to build on top of this stuff, right? This is why the Signals library is so large.

[02:16:56.10] And the end result is that we were able to completely move the source of truth from the client to the server without touching the UI and giving the exact same experience to the end user.

[02:17:22.15] Yeah, some people dislike options. Maybe you should cover this in just about guessing the future. It's about showing something while waiting. Whoever you choose on that. Yeah, yeah, yeah, exactly.

[02:17:29.14] And actually my next example will show that.

[02:17:33.11] It doesn't have to be a prediction. Predictions are useful when you're mostly right. So like when you're doing like a Trello board or like a to-do MVC, something like this, your predictions are mostly right. So it's okay. And if you're not right, the server being the authoritative source of truth, like if you look at this, there's, there's actually no way for the client to diverge.

[02:18:00.14] Like this setTodos being an optimistic store can't, it can't lie because the store, the optimism goes away with the transition. The server always has to be the source of truth. This write. If there's no async, this write does nothing. It's a noop.

[02:18:16.10] Like basically these run in separate lanes. There's no divergence here. This is only a best effort thing in terms of trying to get ahead of it.

[02:18:34.26] But yes, it doesn't only have to be a prediction, but I think it's important to understand that by the shape of the API, we're basically saying, like, the server is the truth here and we can't actually diverge from it. There's like, every write is tied to the transition lifecycle and is reverted if not substantiated. So there is no, like, client drift from server happening here. This is just structurally by design. This is what good— this is what the good design looks like.

[02:19:04.00] Okay. And what What Gabriel's getting from is the next version, which is, yeah, you guys couldn't even tell that this was a to-do app, right? Like that it was async. The optimism mirrored the client identical because the UI was different. So in a real app, you actually need affordances, right?

[02:19:29.14] You need to go, what happens if it errors? Like this is all good if everything's good, but what happens if it errors? And the answer to that is, well, what happens to your app when it errors? Well, the code's still mostly the same, but now you actually need affordances, right? You would need to add those anyways.

[02:19:45.22] So I added one more action, retry. Okay. And what else did I do here?

[02:19:55.22] Let's look at our todo.

[02:19:59.29] I did some funny color thing. The version in Solid's repo is better. But essentially what I'm saying is like, if it's errored, we're going to make it red. If it's pending, it's turquoise. And I'm actually using the optimistic state here to extend our schema to include pending and error because these can be layered on top.

[02:20:22.26] And this is a very clever thing, but I think it's a microcosm of the whole frontend ecosystem. There's server authoritative truth. There's client ephemeral state that lasts for the session or the life that you're inside of it. And then there's, um, in-flight transition pending state that only lasts the lifetime of whatever that action is. So we have 3 representations.

[02:20:45.25] The best way to make them all link together is to derive them. And I just pushed it into the schema itself. So basically, if there's an error, we'll show retry button. Like there's more logic now inside the todo because we need to handle it, but there would always be more logic. The, if the optimism, if your experience, sorry, mirrors exactly what the client's experience without async would be, you have no extra work.

[02:21:11.13] Your extra work always comes from the gap between the affordances that come with, you know, like at a baseline, If you're fully optimistic, then whether you're— you could just like in my last example, you could set that client delay to 5 seconds and you're not going to notice any difference. Like the network could go as slow as possible and you're basically just doing the same thing.

[02:21:37.09] The difference comes in when you actually go, hey, you know, when this is pending, I want to show it differently or when this is errored, I want to change this. When you actually have affordances to actually take into, but that's additive. That's not the baseline, right? That's something that you go, okay, I, I, I built this and it's smooth, but then it's like, I need to give people more affordances. And that's work that we didn't add to you, like give to you.

[02:21:58.04] You would have always had to do it. So yeah, what this means is I have this thing failing now 30% of the time. So when I say, hey, you see, you can see it's green when it's being added and we have a couple. And when you notice when there's a couple going, they actually stay highlighted until they both come in because they get entangled. There is, there is this entanglement thing, but see, this one failed and now there's an add todo retry.

[02:22:20.06] So when we try it, okay, it's good. And it comes in and you notice it didn't reorder when it came in. That's because the client in this example is responsible for the IDs. It's just kind of, so it actually kept them in place. This is like, if you had something Strello where you basically have to give it like a client UID, if you want to like keep identity across it, that's not necessary in all optimistic cases, but it fits well into this.

[02:22:43.13] So we've got some errors and this is not the best UX for errors. Cause my guess is if any of those error, yeah, it's going to pop back in. It's, you could, you can make it not disappear when it errors right away and show it in a different state. You can, you can use different affordances. My affordance for this is actually literally just undo the error or like undo the hiding and show it.

[02:23:05.29] But that's on me. Oh, this one failed again. That's a me design fail, not the system fail. So what does todos look like in our example? Well, I took our server todo and I extended its schema interface by giving it appending an error.

[02:23:20.01] And then what else did I do in this example? This is a little bit more complicated now, but with our actions here, yeah, add kind of does an ID lookup. But I think the actual most important part here is looking at what I did with the optimistic store. It gets its value from the server and then it layers the errors on top because these errors aren't lifecycle that transition, they're the client state. So we have server authoritative source, client state applied on top.

[02:23:48.07] This is your baseline. And then as you go apply optimistic updates, um, which most of them are actually identical. As before. The only difference is on the add, you get that cool thing where it didn't move. What we did is we actually do look and see if there's already an existing todo so we can match it up on an ID.

[02:24:09.22] But the key thing is on all these operations, we mark the todo as pending true. See, that's the difference. When we toggle them, I'm setting pending true. And then when we do our action, we we basically, if there's an error, we write to our errors with the information we need for the retry. And then our errors will then layer on to our thing and the whole thing just flows.

[02:24:38.09] And yeah, I mean, this is more code, though, in the end with all the affordances and all the types and everything. Our example now is like, I don't know, 170 lines of code. But I, here's the challenge. I doubt you can do this in any other framework in reasonable where we're not like trying to like trim the whitespaces or doing that in less than 240 lines of code. I think, I think we win by like 60 to 70 lines, just because of the simplicity of the structure.

[02:25:16.14] You know, I— client state driven ephemeral projection is how I think about it. It's the right way to think about it.

[02:25:34.17] Right. I just wanted to show like, this kind of completes the, the, the right story because we I know people are like, what the hell are generators? But async functions with trying to resume them is not good. The way you should view a generator for our actions is simply yield a promise instead of await. It's yield instead of await.

[02:25:56.20] And then it basically works the same way. You can even get the result from it and stuff. Just yield instead of await. And it just means that we can continue and keep all the pieces together. That's the key.

[02:26:10.14] It's that we connect the refresh to your original set. It's all one transaction. And that means we can entangle it and we can make sure that we can provide completely consistent UI while the optimistic states are running. This is all part of completing the puzzle. Okay.

[02:26:30.29] I don't know if this one is explained as well. Is this— does it— this doesn't feel as big, I guess, for people, the way I explain it, as the first, like, read side does. But this is, this is actually huge.

[02:26:50.26] Right, like, the implications of this at a systematic level means that you can actually build as a baseline, like very consistent UIs without much wiring. You, you just, to be fair, the action thing is like React's transition, you know, the, the, the core differences because we have those ambient transitions and they combine with the actions where you call it, you don't have to bury the actions in your reusable components. This is the biggest difference. You don't have to go make your component library suddenly be click action. If you have a button that has an affordance, it can go in there.

[02:27:37.17] Do I have an example for that?

[02:27:42.02] An example for that. You, you don't know if I have an official example for that.

[02:27:55.03] This is close. This isn't using Optics store. It's just using a projection. It's like kind of doing it manually. But what I think is important about this example is you can kind of see it is you could have a button somewhere deep in here, create its own optimistic state, that it inside its own, its own component, right?

[02:28:16.13] Basically go, oh, yeah, I want to track my own optimistic state. So like, this is just saying, basically, yeah, here's the remove one, actually, set it to true. So while this is, it starts as false, so it's always false. And then while this action is happening, set the true, there's no actual action here. Like, this is just like, it could be this optimistic state could be like, is my button doing work?

[02:28:38.28] For all, you know, and it could start as false. And then whenever you, someone clicks it, you can say true. And now if there's sync stuff on the other end, no one ever sees a true, it just does it. But if there's async on the other end, you know, hooks into someone else's action or something, then your loading affordance happens automatically. So you can design, it's kind of like isPending.

[02:28:57.11] It's the opposite side. IsPending is like, are my sources something that I need to wait on? And then you can use optimistic, like just a simple optimistic state triggered and not the full store. As I was saying like, hey. Am I, am I, do I need an affordance for some kind of process that I'm triggering?

[02:29:15.01] And because it composes this way, there's no start transition down here. What actually happens is we register our optimistic state change. We call props.onRemove, props.onRemove ends up calling removeTodo. And we go into removeTodo and we see removeTodo is an action. And it just, it just wires it up and it's go, okay, well, the lifecycle of that optimistic update is now tied to both it saving the change and to it refreshing the data.

[02:29:50.09] So these things compose really nicely without you rewriting all your component libraries.

[02:30:05.29] So what I'm getting at is, is like, it composes on reads and composes on writes in this wonderful way that gives component authors complete control over their, their own affordances that they want. And yet at the same time, lets you as the application developer be able to define very clearly in your scope what you need to happen. Okay.

[02:30:37.17] It doesn't need to be is what I'm saying. The optimistic update does not need to be in the action because there's ambient transitions. Whenever you're in a scope where you can write, it starts a transition and calling an action, action called in that transition gets just piggybacks on that transition. So you can literally, you can use optimistic without, without actions. The reason you need actions is you have some kind of change, like a mutation outside of the graph.

[02:31:07.17] Like you don't know what safe to do impacts. You might know, and there's an API specifically to call it out called Effects, which I'm not talking about right now. It's kind of more advanced API, but the graph doesn't know what some side effects, some mutation is going to do. So for that reason, that's why we have action so we can tie the cause to the effect, you know, like sort of like make sure that we know the mutation is tied to the refresh. That refresh doesn't have to be refresh.

[02:31:35.29] It could have been like, get the result back from that save and add it to some, you know, like add it to some source and then go like maybe you aren't using an optimistic store. Or maybe the OptiMix store derives from an actual store. Like you can layer it like that. And then you can actually update the authoritative source granularly instead of doing a full refresh from the server. Right.

[02:32:03.02] There's, there's simplicity in doing the full refresh like I'm showing here, but you could also take the result from the action and use that and save it. And that would also be fine. But the key is you have to understand is that these things, both the save and the graph update are related and related over async, which means why we need the action wrapper.

[02:32:25.29] I hope that makes sense.

[02:32:32.04] So that's number 2.

[02:32:42.25] Not there yet. We're not talking about server components. I can show you a very quick, like, poor man's Island example for 2 seconds, but I really don't want to get off topic too far.

[02:32:59.05] I made this example the other day just to— I made it on stream, but I kind of improved it since then. I wanted to show that I just made a very simple app, just using like straight Vite plugin, where I, from the server, I basically hijacked it. Like you don't need any of this wiring anymore, because we have start mode, which I'll talk about as piece number 4, 3, 4. But what this example does is it renders to stream, which renders our whole app, which has HTML and all our stuff from head, has our hydration script, all this stuff. But actually, I don't even know if, do we need the hydration script?

[02:33:42.14] Yeah, we probably do because the islands hydrate. And then, but it wrapped it in a no hydration, which means that the main part of the app doesn't hydrate. And then I made these counter components that have a prop passed to them. And then what I did was I import these as island components. Now you, now you might be like, okay, this seems like I'm showing a framework feature.

[02:34:08.27] No, I actually literally just wrote this from scratch in 2 seconds because we had all we needed. Like, how did I make an island? I used our lazy function to grab the component and then had it return a component that increments. It grabbed lazy components in Solid. Have a module URL.

[02:34:26.23] So we know where the, what, what the bundle is. This is something I added earlier on because I was kind of like trying to think of how the asset management works. If you actually notice on server, we pass the manifest in. This is important for streaming and asset preload. Solid handles that all automatically now.

[02:34:44.05] But what it means is in our really dumb example here that I created, we can make a fake web component or element, we can pass in some arbitrary ID for our client placement. We can pass in that URL and stringify the props. And when we render this on the server, we'll just output, um, a hydratable version of the component with those props passed in wrapped in this native element. And then the Entry client, which I haven't shown until now, instead of having one hydrate call, it does a query selector on all those native elements. It grabs the URL from them, lazy imports them, because it's the same URL that we, that we identified from the server, takes the props that we serialized with JSON serializer.

[02:35:28.27] Honestly, you'd want to use like, if you're doing this real, you use like Svelte or something real, but I just JSON parse the props coming in and then call hydrate on the, on the component that I grabbed from the lazy here, passing the props in. And then using that ID that we passed in, we match up the render ID, which is a scoped thing. This is like how we do it in Astro so that each island has its own scope, but it's still part of the same tree. It just means that the resources don't clash. And the end result is we render something on the server and we have hydratable islands, but this, this, this actually is, these are actually island buttons.

[02:36:05.17] Um, just manually wired. Solid has no islands feature. I literally just wrote it from scratch by using document.querySelector and then making a small wrapper around Lazy.

[02:36:23.24] These aren't actual web components. I just, I, like, do you want me to like make this like a div and with a special attribute on it, like data something just to and put like data things in front of these just to spite you guys.

[02:36:44.19] The Astro integration I got to work on, but generally the same mechanics are here. I just, I realized partway through doing Solid that literally making islands is super, super trivial. Like, like I'm not suggesting people go out and make an islands framework. I'm just, but as a proof of concept, this is literally like less than 100 lines of code. Like, it's— there you go, islands.

[02:37:09.03] Okay, back to the actual— what I actually want to talk about.

[02:37:16.13] You know, whatever, I'll share this so people can think what they want about it.

[02:37:24.26] Okay. So now I'm going to look at I'll play with actually one of our actual like up-to-date templates. That one actually had a semi like older template. Okay. So what we got, we got, should I use the SSR template?

[02:37:45.01] Yeah, I'll use the SSR template.

[02:37:48.19] This one, point 3 ties into point 4 and I haven't really decided how I want to break it out about. Much, but essentially home about— this is a very simple app where with terrible style that AI generated where there's two tabs. There's no router or anything. This is literally just, you know what, let's pop this in here.

[02:38:19.14] How does, uh, speaking of Astro, how does Solid 2? I, I, yeah, I think we're still well below, um, Yeah, sorry. We got bigger, but like, because of how tree-shakable, we're still smaller than Vue and Svelte. We're not smaller than Preact. That's where my gripe is.

[02:38:36.12] I'm always like, oh man, Preact, like plus Signal still comes in around like 5-ish kilobytes for like the dumb, simple, like I'm just doing a single, like little island thing where Solid now is like 10 kilobytes. But Vue, but Svelte in that case is like 14 kilobytes and Vue is like 23 kilobytes. So yeah, yeah, it was with Solid 1, but not with Solid 2.

[02:39:09.05] You need to— yeah, you might need to catch up a little further back on the stream. Solid 2 is larger. Yeah, 4 kilobytes is about the right core size. When you don't have to worry about hard problems.

[02:39:41.28] But back to this example. Oh, sorry, I didn't highlight this. Hey, Dom. Thank you. You guys know Dominic Galloway, creator of Inferno.

[02:39:52.03] Yeah, core team creator of Ripple and most recently Octane.

[02:40:05.06] I don't think in this chat are being answered only YouTube. It's possible the people on YouTube are just asking better questions.

[02:40:23.22] I actually, you know what? I'm— let me open up Twitch. I only see, like, a couple questions on Twitch. So maybe there is a gap here. Maybe not all of them are getting through.

[02:40:32.10] Maybe people are sharing stuff like URLs. It doesn't make its way through to me. Let me quickly open up Twitch to make sure I'm not missing anything.

[02:40:52.12] Yeah, I'm on Twitch right now and I don't, I don't see very much.

[02:41:19.16] Anyway, this, this, I'm just using like a switch component and buttons, like AI generated this one. I'm sorry. I just, I just needed a template to kind of show like when it's one way it's home, the other way it's about no router. Just, this demo is actually mostly to show off start mode. But what I wanted to— it comes into what I want to talk about is the third kind of piece of the async story, which is useServer.

[02:41:44.20] Because you guys are asking for what's getTodos or get whatever. And I've been writing all our demos purposely looking like this, right? Create memo, get something, right? We've seen this throughout all the demo code that I've showed today. And the reason is, right, in a lot of these demos, they were just client-side.

[02:42:06.12] So what does it take to move it to the server? Use server. And, um, yeah, I guess this really has to tie into the Vite thing. Yeah. Maybe, maybe this is actually only the third point.

[02:42:19.16] So yeah, maybe we only have 3, 4 headlines. Yeah. Maybe it's only 3 headlines. Um, I have to think about that. But because this one's a little bit thin, the point, I mean, this one's a big one though.

[02:42:35.12] If I combine it all, the big takeaway here is signals were super powerful and we own that. Server functions were also super powerful and we kind of let it be like a Solid Start thing. And it, and we should have launched it as a, it should have been a solid thing. We just weren't in the position of it, but I feel like we came up with a really powerful thing, originally server dollar sign, I got to give credit again. This is an example where after releasing something, a year later, adopting React's convention instead, because realizing that they are, I think this is sometimes where my gap is, for the actual syntactical things, like Svelte is amazing.

[02:43:24.26] At reducing the syntax, like in terms of like how much you write. And React is great at choosing the correct division from first principles in terms of like, like the tuples for the signals that, you know, some people gave us a hard time, like why did you do that? Why don't you just use one function? Why don't you use proxy and all that? React is right, completely from the contract standpoint, if you want to keep things structured.

[02:43:51.10] And similarly, useServer is right. Server$ was not right. And I know Tanner disagrees and I know other people, but this is, this to me, this is just fundamentals. This is not really a disagreeable fact. You want to, these aren't composable and you want to mark the function in its current location.

[02:44:08.12] Like you shouldn't fool people to think that like you can make wrappers or you can like, you can wrap a server function and that code is on the client. You can't compose the server behavior itself, except for within it. This is why we don't ship like validators and stuff. If you want validation, if you wrap it with a validator, well, guess what? Now it's on the client.

[02:44:34.15] If you put the validator inside, that's probably where it should go anyways. And now it's on the server. You know, the problem with trying to combine the APIs is something that Theo, T3GG, whatever, you know, pointed out to me. I came on a stream a few years ago and I was showing all server dollar sign functions, right? This is like 2022, like 3, 4 months after we released server functions.

[02:44:57.14] And I showed him the API and he was like, okay, so which of these functions is being called on the server and which ones are not? Cause we were passing like a couple of places where we had like some callbacks, like onSuccess or whatever and doing this. Like it was basically like TanStack Query on some of the APIs. And I was like, oh, we have a convention where it's generally just the first function. And like, he just It really bugged him.

[02:45:18.00] He couldn't get over the fact that when he was looking at it, he was like, I need to think about where my code is running. This is before React or Vue Server or anything. Like it was way before.

[02:45:30.11] And, and, and it stuck with me. Like it was really good impression. Cause I was like, you're right. And then we started seeing the ecosystem. We started seeing people come up with like wrapper, like prpc$ and all this kind of stuff, like their own compiler.

[02:45:42.13] Like they had to write a compiler to get the the API they wanted. And I was like, why are we fooling people? This, the directive thing is the most honest approach. It doesn't play nice with TypeScript, which is why I understand people have different incentives, but I have to be, my master is the physics, not the ergonomics. I'm obviously going to try for the best ergonomics possible, but the physics is more important.

[02:46:11.25] Yeah.

[02:46:36.03] Well, the thing is, who's responsible for passing the headers? Do you know how we pass headers?

[02:46:48.03] There's a few ways to do it. But let me think here. Like, first of all, what if you want to use a GET instead of a POST?

[02:47:01.21] From SolidJS.

[02:47:08.15] Am I using the wrong backtick?

[02:47:12.16] SolidJS web. Yeah. Okay. So if you want to make this a GET request instead of a POST request, we can wrap it because the client makes the decision, right? If you're similarly, we have with Meta, like where you can mark specific functions.

[02:47:28.17] We also have a middleware. So you can prepare server functions so you can inject if you need to put like all auth tokens on certain requests, you can basically mark them, like add some like admin route thing on your server function. And then the middleware on the client can basically apply those headers. Like there are ways to get to it. You just have to understand that those things are on the outside.

[02:47:49.25] So when I say GET, the way GET works is like this.

[02:47:56.14] Now it is a GET.

[02:48:01.04] What version of Solid Web are we on?

[02:48:05.08] I thought it was in, I thought it was in web. Is it in /server-functions? It's in server-functions. I'm still getting used to the new package directions. Guess what?

[02:48:18.05] It's still streamed in after the shell. So now if we look in our browser, I don't know where is the network fetch. Hoping StackBlitz will be able to see it. I don't know how StackBlitz works on this.

[02:48:39.02] Why am I not? Oh, right. That was the original render. I need to go back to it. Yeah.

[02:48:43.06] Sorry, my bad. Right. Because on original SSR, we're not gonna redo the request. This should be a GET request, I think. Yes.

[02:48:49.13] It's a GET request. Yeah, exactly. Sorry. Initial SSR, it's gonna stream in. It's not gonna make a separate request.

[02:48:54.21] So if I remove the GET, actually, I always refresh just because like, I'm always worried. Hit refresh. Good. No, no request. Go to about, come back.

[02:49:12.17] Now it is a POST. So my point is, there's ways to decorate on the client where it belongs. Right. You don't need to hijack the— like, we keep the fixture. Like, there's no lying about the fixture position here.

[02:49:38.14] How is user-defined other magic syntax? It's not. It is definitely compiled magic syntax. We need a protocol.

[02:49:50.03] The JSX is a magic syntax. The key part for magic syntaxes is having delineated boundaries. So you know where they start and end, right?

[02:50:01.21] JSX is really easy. You just look for this. JavaScript does not have this. This is not JavaScript. Guess what?

[02:50:09.09] This one's got an easy boundary too.

[02:50:13.28] Server$ is just a function. It doesn't have the same level of syntactical boundary. You could argue that this is just a directive, but I feel like there's more precedence.

[02:50:35.20] Do we need a query? Yeah. I mean, Sure. Yeah, I'll push this out here.

[02:51:03.24] I mean, yeah, I mean, you can still use API routes. It's just, you could, a lot of the times, there's something nice about it fitting into the function. Like the reason I originally invented or mean, like, it's me and Nikhil to be fair, I came up with a proxy version. He was the first person to come up with the compiled version.

[02:51:30.18] We invented server functions in the first place, was because I wanted to find something that I could take my isomorphic client's single page app and just slide it right into the current thing. You start seeing how the full pieces all start coming together on the side. Because the meat of this, of this third point I'm trying to make here is that useServer, just decorating a function means that Everything we just talked about the graph continues onwards. I showed you how we had that separate file where we kind of kept it like, this is a way of saying like, look, this is the same synchronous code you would have always written like we showed earlier. And now I showed you how adding async doesn't change your UI graph.

[02:52:16.06] And now I'm showing you the how moving something to the server doesn't change your AI, your, your, your graph because it's just async. And since we understand async, like you, you start to see how this layers on. It's like we have a UI framework that's synchronous. We have UI that's synchronous. We make async almost invisible to it except for choice, chosen affordances.

[02:52:41.13] So everything just works. Now the act of offloading stuff from the client to the server It's also just one use server away.

[02:52:56.10] Yeah, yeah. This is just a Vite plugin, which goes to a point someone was asking about the OXC. Everything started rolling really fast for me when we're doing this thing because I moved the JSX compiler to OXC. And then I was like, am I going to have separate OXC compilers? And then I was like talking to Adrian, they're like, no, no.

[02:53:13.25] So then we were like, we moved Solid Refresh transform. We moved the lazy manifest preloading mechanism that I built to be plugged into Oxy. And we moved server functions into Oxy. So basically, the Rust compiler is all the compilers. We actually moved all the compilers, which is supposed to be part of my point number 4, which is the exciting point.

[02:53:36.19] But point 3, is establishing a layering. And the last piece of point 3 before we talk about point 4, I think headline 3, sorry.

[02:53:55.15] It also works function level, but you have to— or sorry, it also works file level. You have to consider though, if it works file level, that your wrappers need to go outside. There's this like great example of the Svelte remote functions where they have use server or something like their equivalent server file. They don't have use server and then they have the query and everything inside. And that always confused the hell out of me because to me, the query is on the outside.

[02:54:19.14] So like when we use our router and this, sorry, this is coming into what I'm calling the end, the other part, point 3, about this composition part is Solid Router has some Query has like Query, which is like a very simple cache mechanism, like kind of like a very basic deduping cache mechanism. And the reason for this is we believe that How should I put this? If we control use server, we control the communication protocol here for the server interactions. And I already found this problem with Solid Router. We actually needed to control the request.

[02:55:14.18] If you're Clerk, if you're some third-party integration trying to do an image component for Solid, if you're like Sentry, if you're any of these people. This is why 3 and 4 kind of end up collapsing into each other. Every meta framework for React requires a different solution. You have like Clerk Remix, Clerk TanStack, Clerk Next, maybe even Clerk React. I don't know what that one looks like, but you have all these different adapters.

[02:55:45.14] There is a headline here, which is the fourth one. The reason we collapsed it all in was because not just because of the efficiency of the compiler, but because there's one source of truth on communication protocols. Query, for example, lives outside in the router because that's an application choice. Caching and stuff is your choice. But the communication protocols like signals, like server functions, even the web request to a certain degree, if you're handling server stuff, that those protocols have to be established by us.

[02:56:18.09] We have obviously a way if you integrate with H3 or Hono, you have like the, the native event that you can access and all this stuff. So you can always like tie in on our protocol to be able to use whatever backend you want. But we provide a common interface so that our ecosystem libraries can hop on and update or change the request and response. Right? This is the Solid's— let's see, does the v2 docs have this stuff in here?

[02:56:50.04] If I go into reference docs.

[02:56:57.15] Use head. Yeah. So we also have head management now built in. Technically Solid Meta wraps it as components to make it more usable, but use head is actually coming directly from Solid, fully stream capable, fully, uh, blocks on loading and like no flash on style content. We also fixed flash on style content in dev because of that.

[02:57:20.15] Automatically every Vite project benefits from it. File system routing. Did I not? This is the trickiest part now because, yeah, it's because we added new exports that didn't get mapped directly into here. So I don't actually have them here, but there's like there's some helper functions to set response.

[02:57:45.22] Response and status and headers built into Solid Web now. And Solid Router has always kind of tagged on the request event so that it could like hang stuff like single flight data. I was getting kind of really annoyed at like how everything was getting slotted into these pieces. And I was really afraid of fracturing. So yeah, I mean, I don't know how to split these points.

[02:58:17.27] I think this is kind of where the challenge comes in. Like, is it now, is it now time to talk about Solid Start?

[02:58:28.28] I mean, TanStack Router still has really good types, the best, it's the best TypeScript router ever to date. TanStack Query has caching protocol. We don't have caching protocol. Solid Router's cache is simple. It basically says when you're moving forward, use a cache to dedupe, make sure you're not overfetching.

[02:58:50.20] When you like, so when you're doing new navigation, when you're using the browser back and forth, we'll keep the cache a bit longer. So there's like a back cache, but it has no caching policy. It's not designed to be used as a cache. It's designed to be, to emulate native browser behavior.

[02:59:23.01] I don't get useServer needs to be framed for each one separate. Well, if, if you wanna control, here's the thing, server functions, uh, sorry, Server Components are why. Largely. It's kind of the hidden piece here, which we haven't talked about. And we're not really talking about today, though, if you look hard enough, you'll find them and you can actually already use them.

[02:59:40.26] And they're actually kind of crazier than any server component solution to date. And I'm— and we're not done yet. But that's a whole other thing.

[02:59:51.22] There's more to the protocol than just on the surface is what I'm getting at. And like, like single flight mutation. And I think this, I'm trying to get to the point where I can actually show this and maybe it would have been easier if I opened, I want to show you something, SolidJS templates. Maybe, maybe this is where I need to go.

[03:00:15.13] Cause I've been showing, okay, we have Solid V2 templates now and the headline from the announcement, I'm going to open this up right now, Solid 2.0 RC, just so that I can build it up to where I need to be. Okay. We talked about async. We're good on that. And I hope you guys understand, like in those 3 points, how this just composes.

[03:00:43.23] I didn't really do a good enough job of explaining it here. But if async is part of your graph, then you can keep your UI essentially synchronous in the way it writes. You can, you can extract it. And if you can extract it async, you can also just extract to the server. It's all one nice, beautiful flow.

[03:01:03.26] As you can see, there's way less API surface for things you need to know. It makes, even though technically I look, there are more primitives now because we're doing more, the basic tasks, there's less. We've, we've, it feels like there's half as many primitives. Solid feels way easier to learn. And way more powerful.

[03:01:20.26] We talked about Rust a little bit. It's fast. What can I say? And one of the cool things is I didn't talk about in these templates is we have a WASI version. This isn't actually using Babel in here.

[03:01:33.21] Inside StackBlitz, we're actually using the native compiler. It's just compiled to WASM. So you can actually see it when it starts up, it's going to complain about like Wasm support in this environment or something. Experimental warning, Wasm is an experimental feature, might change at any time. But this is actually using our native Rust compiler inside StackBlitz.

[03:01:56.18] Just aside.

[03:02:05.10] I mean, you don't have to look very far. I'm literally going to show you in 2 seconds how this all pieces together. We actually ship a built-in template that includes React or TanStack Router and Query.

[03:02:16.27] And the craziest thing about it is it's fully capable. This is the proof of my claim. If you watch my Vite conference talks from like 3 years ago, I was like, I hate writing metaframeworks, metaframeworks suck, blah, blah, blah. I never wanted to write a metaframework. Metaframeworks are for chumps, blah, blah, blah.

[03:02:34.04] You know, like I was very disgruntled even though I was building one. It's funny, no one really picked up on that. Like, just if you look back at my talks in hindsight, I sound like the biggest pessimist about about metaframeworks, because I just— the complexity is real. But it's kind of our fault for pushing it on to the end user that someone else has to feel— come in and shovel our shit, so to speak.

[03:03:07.26] I'm getting to this in a minute, but I think it's important to understand because Yes. I'm talking about this layering and filesystem routing. Vincy proved it was separate. The one takeaway from Vincy, which, you know, everyone's like, oh, Vincy was terrible, blah, blah, blah, you know, slow things down or we couldn't, we got stuck. It was, they built it on Vite 5 or Vite 4.

[03:03:28.27] Like Nikhil basically invented the environments API before Vite did and jammed it into Vite and was like, look guys. Vite isn't doing it. I need to invent this thing. And then we didn't play nicely with Nitro easily because Nitro wanted to own its environment. Everyone's like fighting each other.

[03:03:45.11] And then Vite was like, okay guys, we hear you. Cloudflare wants an environment. Nitro wants its environment. Vinti wants like 5 environments. And they delivered it, but like Nikhil's one guy and he had a company to, you know, work on and he kind of stepped back a bit.

[03:04:02.02] So then we got stuck without updates. But he was the catalyst, like one of the main catalysts for, for the environment API. Obviously RSCs were, but people might not know this. Nikhil wrote the first RSC in Vite plugin. No one accepted his obviously.

[03:04:20.14] And it went like through a more official route. And that was when that got accepted, but he had, you could use RSCs in Vite 2 years before the official plugin came in, thanks to Nikhil. He had it there right away and he went PR in the repo and everyone's like, that's not the right way to do it. We want to do this, but our infrastructure isn't there or that. So yeah, Nikhil was way ahead of his time.

[03:04:43.01] And one of the coolest things was this generic file system routing. Now, to be fair, you guys are going to love this full story thing is he didn't come up with the idea. He stole it from, he didn't steal it. He stole it from Jared Sumner, the creator of Bond.

[03:04:59.25] Jared was like, yeah, if I was to solve this, I would just kind of do this. And then he was like, yeah, but I got to release Bun 1.0. And he just kind of like, like he basically like, it was like a week or so before he released the original Bun thing. He just kind of like was just kind of spitballing. And then he just like left.

[03:05:17.22] He just like wrote something somewhere and he like went to do his thing. And then Nikhil was like, well, we could just do this in JavaScript. And he built Vincy. And essentially, a file system routing package is what's left of Vincy. I just gutted all the server stuff and was like, what if we just took the generic file system routing?

[03:05:41.11] This package requires very little hooking. This is SolidStart's routing package, but you can very simply Add as a Vite plugin and you can choose your router that you want to use. And we, this thing ships with 3 routers, API router for SolidStart conventions for Git, like, but you can create your own router, file system router with this. It's a programmatic way of creating file system routers. So the, like our SolidStart Git capital, whatever API routes are one of the built-in, the other built-ins our page system router, which is what Solid Start's current router is.

[03:06:21.17] And then for fun, I added Remix's router, like why not? Or v2 Flat Router. So you can use that too. That's the difference. When we did Solid Start, we were responsible for the convention.

[03:06:34.00] So like, because we had the document and stuff, we had to be like, this is how you do file system routes. So here's the how-to guide and this, But if we say that this is in user space, you, like, we don't have, you can choose what file system route thing. Nikhil once made like Next.js and Svelte, like he went in and almost made all the different routers, file system routing systems for all the other systems. You can also just not use this, which is a beautiful thing, right? It's the API routes, the convention, right?

[03:07:10.14] So this is completely generic, would work in any Vite framework and with any client-side router, as long as you kind of, you have to wire out the format, which is admittedly very Solid-esque, it uses component, whatever, but it is completely, there's nothing Solid, even though we were publishing it, there's nothing Solid specific about this implementation.

[03:07:35.04] Right. And why is this relevant? TanStack Router has its own file system router. So why don't we just use that instead? Guess what?

[03:07:45.06] We do in our template because it's, I'm hoping you're starting to see the picture here. We'll get to it a bit, right? SPA by default, you just put start: true. It's just the Vite config. If you normally, you have index.html and stuff.

[03:08:03.15] When you put start: true in your Solid thing, you're saying like, okay, Vite has incredible power. It does literally anything you want. You can configure it any way you want. When you say start: true, it's— people always caution me for making this comparison, but I'm on stream. I'm going to make it.

[03:08:18.24] Remember create-react-app? You just go in and there's your app.js and you just go and build your app and you're happy. Start: true is that. You just go in, you go in. We saw the SSR template.

[03:08:30.17] Where's entry server? This is, this is an SSR template. Sorry. I, yeah, sorry. I want to go back to the thing before I edited anything.

[03:08:43.11] Okay. Yeah. This is an SSR template. See? SSR true, start true, server functions true.

[03:08:50.06] I added all three functionalities. You don't need server functions are opt-in again, because they can add to your bundle size a little bit. There's Serval serialization, all that kind of stuff. So we're not gonna opt, you choose what you use, but as soon as you use start: true without the other ones, let's say, and technically you can use serverFunctions: true without SSR, just aside, it's like start. You get rid of index.html, client entry stuff, there's a convention for it.

[03:09:13.20] You can check in the docs, but essentially your app returns to, this is create-react-app, right? Like this is a fairly server-rendered app with server functions. But it is create-react-app. I did a talk like 2 years ago called The Shape of Frameworks to Come. I used Solid Start and I started with create-react-app with the spinning logo and got all the way to progressive enhancement in the latest frameworks and all the current patterns.

[03:09:38.04] And my whole joke or punchline was I forgot to turn SSR on the whole talk. So when we did progressive enhancement, refresh the page, it's white. And everyone's like, oh, did I break it? I was like, no, I forgot to turn SSR on. And then I turned SSR on and everything just worked with progressive enhancement because obviously progressive enhancement can't work if there's no server rendering.

[03:10:02.02] But the point was it was a SPA mentality through every age of modern frontend. And what we've done with Solid 2.0 is take that and instead of it being Solid Start, it's Solid. Literally this is create-react-app. Start mode true is create-react-app. In a good way.

[03:10:17.24] And you know how you used to have to eject from create-react-app? Well, you don't have to worry too much about ejecting here, because we only take responsibility for the parts that are ours. Vite plugin system handles the rest. But if you really want to eject, there are some config options that you can, you can get in here around start. I said true, but start is actually an object.

[03:10:36.27] And inside this object, TypeScript start options. Can I get into this? Whatever. There's a whole bunch of configuration. You can configure your server entries, your document, blah, blah, blah.

[03:10:51.20] Our actual templates come with document in so you can edit them by the convention. But basically it has a bunch of defaults. So ejecting is not hard. But for, I'm like, I don't know what I'm doing. I'm just creating an app.

[03:11:03.29] I want SSR. I want whatever. It is create-react-app anymore. This is This doesn't feel like a meta framework. This feels like I just started a plain simple Vite app, you know.

[03:11:26.02] I have a proposal for this. Sorry, Vue Transition. Action returning promise or whatever callback is not good enough. I evaluated it. Okay.

[03:11:35.09] Solid 2.0 in terms of view transitions, if you want to do, because we control the flush, if you want to do something like really naive, like very simple, you just go startViewTransition, wrap the thing and then call flush. That's like what 90% of frameworks, like their view transition is doing. Like Svelte's version of whatever is basically that. It's nothing fancy. I want to do better.

[03:12:01.03] I think React is right. In terms of how they're handling view transitions, in terms of it needs to tie into the scheduling system. And it's very awkward because you have to give up control. It's really weird that like we want to be the ones to call it and the view transition API is like, no, we call you. So you're calling our scheduler internals.

[03:12:19.26] That's, that's freaking scary, which is why it doesn't sit well as an external end user API. It's like just like start transition, like, or start view transition, like something we would export ourselves like that. As I said, other frameworks do that, but other frameworks aren't always right.

[03:12:37.12] So I think we can do better. And this is another place where React nails it. But I, you know, like conceptually nails it, but I think we can get the implementation to an even better place.

[03:12:56.24] You're gonna have to look at the proposal. I have it somewhere.

[03:13:03.10] Am I not signed into HackMD on here?

[03:13:07.03] Sign in with GitHub.

[03:13:10.05] It's been too long.

[03:13:13.17] Damn it. View transitions in Solid. Is this it? So AI wrote the proposal.

[03:13:23.24] Should I share this?

[03:13:27.13] Sure. Here you go. On stream first. We're not talking about this today though, because I, in terms of scope, I decided that activity type stuff like off screen and view transitions are outside of the scope of Solid 2. They, we need something to do after the release that But yeah.

[03:13:51.29] Okay. Where was I going with this? Okay. So SSR true, start true. Like this, this is just like easy mode and our templates, bare template is basically easy mode.

[03:14:02.18] Right? So source, we added the document, which is the convention, which you can see. And this is like, we, we, we strip this out, you know, like when it's CSR mode. Which Bear is, but essentially this is actually the create-react-app spinner. I've carried this through all the versions of Solid because that whole, like, if you use React, you should use a meta framework thing.

[03:14:27.26] I reject wholeheartedly. Everyone probably needs some sort of framework, some sort of agreement between people. I focus on the communication protocols. That's it. I think that the other opinions belong in your hands.

[03:14:45.19] And I think that, you know, it's universally everyone needs a framework, but not everyone needs a universal framework, you know, like that kind of thing. I think at this level, it's important because metaframeworks are just encode opinions, they don't encode features, like I have a question for you. SSR in React. Is that a React feature or a Next feature? Streaming, server functions, server components.

[03:15:18.16] Have I named a single Next.js feature yet?

[03:15:26.21] And when you start looking what we did with Solid 2 here, when you start looking at optimistic and where I was trying to get to here with the protocols here around Vue Server, single flight. If you want to do server components, you want to be able to do it like old HTML where you return the markup on the return. And we had single flight mutations in Solid Start, right? Single flight mutations and progressive enhancement are now built into the core of Solid.

[03:15:58.02] It's a part of the request-response model. Routers can opt in to those features to use them, but we have, core Solid has the protocols to handle, like Server Functions have to handle progressive enhancement. They have to. So once you kind of hoist the stuff up, you know, set the standards, then the ecosystem can play quite nicely. Like it used to.

[03:16:26.10] React was so good when it was just client-side and it wasn't— part of it is because server-side is hard or complicated, but it's all— we lost the ability to just build. And most of the solutions I've seen people doing this is they focus on the wrong thing. They're just like, we gotta make this less complex. I'm sorry, guys, you can't make it less complex. That's what you have to do is accept the complexity and with open arms and figure out how to realign the boundaries.

[03:17:05.04] So these things make sense again.

[03:17:09.19] And that's what we've done with Salt 2. This is, this is, it pains me how I can't it takes me 3 hours to explain this stuff right now and why it gets lost on a release article like this. Because yeah, SSR, just add true. Server functions, just add server functions or use server. You know, deployment, just add Cloudflare Nitro.

[03:17:31.20] I actually, I love this. If you go into the docs here, we, I remember when we used to make Netlify, like start Netlify, start thing. And when, and when we moved to Nitro, we're like, oh, thank God. But it was the right direction. I knew it from the start.

[03:17:49.09] Now Netlify owns it and this, their plugin works with all the frameworks. So technically we don't need a framework for this. Solid, you just go, yeah, this, and then you go Netlify. Bang. Now you can deploy to Netlify.

[03:18:01.04] That's it. I guess, sorry. Build pnpm pnpm. Okay. So you do need to set the Netlify config, but okay.

[03:18:07.20] Now we're done. Nitro, same thing. Cloudflare, I mean, they have their Wrangler config, but same thing.

[03:18:29.29] The challenge is your framework has to be bundler aware to a certain degree. And Qwik was the first framework to recognize this. You know, big, you know, pump to them on that.

[03:18:43.10] You don't necessarily need the protocols to be locked into Vite, but the problem with React was they kind of had to lock into Webpack from where they were sitting. And even if we might be a little locked into Vite, if you look at the stuff that's organized in a way that we're not locked into Vite, but if you try and use Solid right now outside of Vite, you're going to notice there's some stuff missing. Like you, The Vite does heavy lifting. Like we have all the pieces, but the wiring isn't there.

[03:19:13.27] Like, tell me why I need a meta framework at this point when I can literally just create an app, add the plugins I want, and have the communication protocol, right? Like I'm showing basic template here. This is create-react-app in a T. This is index, you know, this is your app to do with the spinner and there's some CSS, you know, okay. Basic. This is actually a pretty functional template.

[03:19:47.04] It has file system routes. So there's a little bit of wiring that we had to do.

[03:19:55.07] Oh, actually, is this generated? That's funny. There's a TypeScript. This must be output from the file system routing plugin in TypeScript. Yeah, do not edit.

[03:20:06.04] So yeah. So yeah, the file system router does need to, to, to, to do some TypeScript pieces. But a thing we haven't really highlighted much on Solid Router is It's Solid, where is it? Let me, do I have the docs up? I do, right?

[03:20:30.08] Solid Router is, it's not quite TanStack. It's not quite as ergonomic, but it has type paths, type parameters, type queries. That's most of what you're gonna need on the basic side. It's not as smooth. Per se, but we hoisted up the definition so that they could be static, so they could be analyzed.

[03:20:51.22] File system routing needs it because someone needs to generate those routes so that you can seed it all the way through. But essentially, um, that's why the— now when we create our router, we have like route definitions like this instead of using JSX for it. And then we can insert our router component and then it starts with children. That's the Again, this is server component forward thinking for transclusion that we use props.children. But the key thing is not route definitions, not that, navigation types path.

[03:21:29.28] I got this idea when I was, it's not the same as theirs. I got this idea when I was watching the Remix review. We have proxy-based paths. So if you, I don't, it's weird that they do it like this. You just import paths directly.

[03:21:40.02] I don't know why you would go router, whatever. It doesn't matter. If you import from your route definition, you can from your router, you can grab the paths off it, which means that you have like auto-completion, because it's like fully typed and the parameters are also typed. And it's not as good as string typing, obviously, but this is way less complicated. And you can type the queries.

[03:22:04.15] And these paths obviously work with all our, our components, technically even use them on redirects from the server and stuff in server functions. So it's kind of like a universal mechanism to taking the route definition. TanStack's much cleaner because they can feed it back through the use hooks and stuff. But the challenge with that obviously is that you have to backwire and it's very complicated from the types perspective. Tanner's a genius.

[03:22:38.17] I have no clue exactly how it works. What I like about this is I feel like we get like 80% of the way and this is still a small, like 6, 7 kilobyte package. It's, it's very, very capable. And as I said, if you need it, use Handstack Router completely. But as a baseline, this is not embarrassing by any means.

[03:23:11.04] Yeah, same mechanism we had before. Anything above the top level loading and then there's deferStreamOnAnyAsync where you can just basically, the trick is what we used to do, render to stream has a .then to make it, you like wait for the whole thing before shipping it. So the real trick is what you do is in middleware, you look for the crawler hints. And then you swap the render to stream. I don't know if start mode has that wiring yet.

[03:23:34.22] Same with nonce. There's a few gaps that we have to kind of iron out over the next little bit. But generally speaking, look, use middleware, look at the request, and then change— use .then on the render to stream and it will wait for the whole stream to complete before flush. So you will give it the full page.

[03:24:01.11] That's the thing. We don't have baked-in file-based routing. That was my whole point. I was showing it's universal. Not all the templates even ship with file system routing.

[03:24:10.23] It's just a Vite plugin. It's completely universal.

[03:24:17.24] It's just our blessed one, but let's— I'm getting there. So What's this example? This one has file system routes. So this is Solid's convention for file system routes. So that's fairly straightforward.

[03:24:31.20] Document, logo. The router.ts is probably a pretty common thing that you're gonna see a lot of projects and templates where it creates the router so that it can export the paths. And then this is wiring, this is like the glue. This 7-line file is the glue for the file system router. As I said, it's not Solid-specific.

[03:24:51.02] So to wire it together, we needed to create Solid's router using the file routes from the page routes that we got from the virtual module. See, file system router creates this virtual of routes. And then this file routes is the Solid router specific adapter to convert the generic plugin into Solid router understood. But you could write your own version in any router.

[03:25:27.01] Essentially. So yeah, this example is fairly straightforward.

[03:25:33.26] But yeah, this is the whole glue. And the reason it's not in the main app is because the router and the paths are going to be exported in different places. In AppTX, you're going to use router. To set up and here's SolidMeta with some meta tags. And then in, you can actually see it right here.

[03:25:57.17] This is home. This convention of just calling path without an argument is home. It's not always obvious, but you can see that we're using the type routes here to create our hrefs. Also, no capital A anymore. There's conventions on the router.

[03:26:10.03] This is important for a future in which you can mark, you can render inert markup.

[03:26:17.25] We automatically apply ARIA classes and we apply special data attributes for active as a convention so you can make your CSS work. But if you need to, you can wrap your own. But the challenge with Server Components is you don't really want every freaking anchor tag to be a Client Component. It's just nuts. You want your navigation to work even if It's some server-rendered markup, you know, with no client component.

[03:26:44.26] So I've, we've been work going this direction for a while now, but now in Solid 2.0, forms and anchors are, can be complete, like for form action stuff can be completely handled delegation by the router without actually having capital letter components, which is also good for composition because I don't know why, but if you needed a styled anchor from a third party, you're not fighting over the anchor tag with your router. This is just the base platform.

[03:27:16.01] So, okay.

[03:27:19.08] That this is just like a classic single page app. I don't think this one even server renders. You could turn on server rendering, but there's nothing to it. This is the most like, I just have a client-side SPA. This is, if you'd use this as your template, you're good to go.

[03:27:32.13] Like it has most of the stuff you need. It doesn't, it doesn't have server functions or any of the So you could add them on, but my understanding is this is, it has Solid and then types and it says, oh, you can add SSR true if you want streaming, but this is, this is your spot right here. You're good to ship with file system routing.

[03:27:57.07] Okay. So what's full stack?

[03:28:00.20] This is basically what happened to Solid Start. See, I, in the release announcement, where is the release announcement? Did I probably like hit it behind one of these?

[03:28:19.01] No. Oh, it was the deployment guide, wasn't it? Yeah. In the release announcement, I said Solid Start finished its job. Meta Framework exists only for the Gatsby framework.

[03:28:27.03] Solid Start was to provide the core over Solid 2, each capability, each move. Home server functions into core, which you talked about, serving layer into start mode. File system routing to router-neutral package, right? Solid's always, Solid Start was always like, we don't decide the router. This was meant for everyone.

[03:28:42.03] This was like, as I said, I've been trying to get back to Create React Apps developer experience for so long. Um, what remained at the end of the process was a wraparound things no longer needed. So it's like a Holo 3.0. We retiring it, start modes for Solid Start. We still support it.

[03:28:57.23] Some people were really confused. They're like, didn't you just release Solid Start 2 yesterday? Uh, like last week. And it's true. That release was originally slated to go out in April or May.

[03:29:08.15] It was supposed to be like 6 months ago. That release is super important too, because it's also what made what's possible possible. The Solid Start team basically wrote all that core mechanism that I pulled in. I just hoisted it out. Like, who do you think— like CSS handling, you know?

[03:29:25.04] Ketcha wrote that. And like the We already talked about the file system routing. That's Nikhil's work.

[03:29:35.00] The refresh HMR specific except for SSR, that's Alexis. Like every person on that team did a huge amount of work to make Solid Start go out. And that's what made Solid 2.0 possible in the form. I literally just stole all their code. Right.

[03:29:54.17] It's a big technology improvement for people using Solid Start 1. Like if you're on Solid 1.0 and you're using Solid Start, you should move to Solid Start 2.0. It is just so much better. When we released 1.0, it was on like these fractured pieces. It was like balancing on the tectonic edges of things.

[03:30:14.28] And we nailed the APIs. We had, like, as I said, you've seen our server function pattern get repeated in like like Svelte remote functions and stuff, you know, the whole granular optimistic updates. Like we nailed the patterns, right? Single part mutations, like, sorry, there's just so much stuff that was good in there. But when we shipped it, everyone's like, you know, this is a little bit buggy, right?

[03:30:38.26] And a lot of the hype went down. And the reason was we were teetering on all these pieces that were just getting wrapped together with duct tape. Which is kind of like how Vite started, to be fair. Early Vite was just as like that. And people were like, I want to use this for production.

[03:30:53.17] We're like, well, it is production stable because technically the APIs were on. We were right. We designed the right system. Just not all the support pieces fit together properly.

[03:31:04.21] And it's taken to Solid Start 2.0 to finally be like, okay, look, now, like the underlying pieces are actually representative of like what the API surface already promised. That's the way I look at it, at least. Like, we built the right product. It just never, it didn't catch on as much because essentially people hit these issues that were kind of caused by the intersection of all these different pieces smashing up against each other.

[03:31:42.18] The Solid Start team is now the Solid Core team, right? Like, that's the way I view it.

[03:31:48.28] Like, they built a third of the new Solid stuff in a way, you know?

[03:32:01.11] Yeah, if you want to see that this happened in real time, there's a branch. Brendan's branch on Solid Start. I haven't even finished gutting everything out because I kind of stopped at a certain point. Brendan's branch about the Solid 2 migration. It's just like commit after commit of deleting code.

[03:32:18.01] It's like one of the most like cathartic things you ever feel as a developer is you just start like going in and you're just like delete, delete, delete, delete, delete.

[03:32:30.06] So don't worry, Solid Start is going to be supported for quite a while, like the same way Solid 1.0 has to be supported. We actually put ourselves in a position where we can actually support it better because like we understand the underlying infrastructure there. Like, and the truth is, depending on how things go, that like, since they're the same pieces, we could even migrate some of those, like, like say the file system routing thing, we could possibly move the under— like keep the start wrapper for Solid 1.0 and move to the file system routing things. So like it is possible that some of those hoists that I did can be reflected back on the 1.0 branch so that they're maintained together or whatever. I think that's probably like smart planning.

[03:33:11.28] I went a little ahead of things with 2.0 to kind of get to the finish line. But this is a deconstruction that has been in the works for years. You literally— my second Vite conference talk was decomposing the meta framework. I was breaking it down into these pieces, but I chose the word decomposing intentionally because to me, I was murdering it. I like, I would, it wasn't just like categorizing the meta framework or whatever I was, I was picking pieces out of its remains.

[03:33:45.11] I do not like meta frameworks. I've never made that, you know, like, I think I have to be careful on my wording here. I think that they have a purpose. But I think it's, it's, they become too, too much.

[03:34:06.08] And they're possibly the primary reason that React has fractured.

[03:34:14.26] So what, where are we getting to here? Full stack Solid example. The Vite config is not much different. We have a middleware.ts. So we have the, so we can wire up our middleware convention.

[03:34:30.12] Sr: true, server functions. There's some extra configuration here for the server functions. What does it say here? Compile server functions into fetch calls. For a server endpoint, the configure module runs in the handler graph before any dispatching.

[03:34:45.04] Registers routes through a single flight collector. Yeah.

[03:34:51.15] Single flight mutations are now a protocol that can be configured. So essentially let's look at server.config.ts for a second, cause this is probably something you're probably not going to touch. We could probably, but because it's, where is it? Actually should look back there. What was the path to it?

[03:35:11.11] Source. Oh, it's interesting. It ended up in the source folder. Okay.

[03:35:17.22] Whatever. Oh yeah, here it is. Configure server functions server. As I mentioned, collect flight data, create flight data collector router, which is from Solid Router server. So we have a built-in thing because we're Solid Router's first party.

[03:35:32.05] So it's aware of this convention. What this means is in this example, when you do a mutation, like using Solid's query or action, or that whole cycle, you do one request, it sends the information and the invalidation happens on the server and it starts sending the partial stuff back for the next page you're redirecting to or the data of the mutation all in one flight. So when you do any action, you know how we were watching that code earlier in this, in the, sorry, it's not here. My bad. But in those examples where we're calling refresh and doing that whole thing on the client, that whole dance where we would do like yield this, then refresh, which would cause a refresh.

[03:36:13.05] And we're doing most things like query style, you do a mutation and then you do an invalidation. So you do two requests to the server for any change.

[03:36:21.24] Using Solid Router's cache query mechanism or the base one, we just, we just basically configured in here so that when you go to the next route, you call those preload functions and stream them through the same protocol that we, we manage. So So all of those mutations, using server functions into those actions become now like server actions, which means that they all happen in one request. Mutation goes out, data comes back. It's all part of the same flow. This is the action helper actually wraps that, like the router's action helper actually wraps the action I showed you earlier.

[03:36:59.13] Like it's just a, it's just like a wrapper. Action with a URL kind of concept, which means that we get to do all the Solid Start stuff built on top of the Solid primitives that we have already built in. So what does this mean in practice? If we look at this, well, there's middleware. What does middleware do?

[03:37:19.02] Middleware here is adding our API routes. That makes sense. So yeah, there's a little bit of wiring here, but it's not, it's not, it's not crazy. And then what have we got here? Server.

[03:37:31.15] Okay. This is our database and our sessions. This is a full auth example with login and everything.

[03:37:39.10] So like if I go into sessions, I think for this one, we're actually using Remix's sessions. Yeah. Remix run cookie. They have, they have a really good cookie library. I mean, we could, you could use your own session management, but I looked out in the ecosystem and I'm like, man, Remix's stuff is pretty good.

[03:37:59.12] You know, I know people are like, this heresy or something. Remix has, you know, it just hooks into, because Solid uses the platform, you know, like the request response headers, Remix stuff just fits into it naturally. Right. And then if I remember this example properly, there's going to be some like logged in routes and 404s and user, like what's What's this one? Is this a login page?

[03:38:29.23] This is our file system routing convention, you know.

[03:38:35.15] Create members async. We can do our form action. This is all progressive enhanced, right? It's the same thing. Where did login come from?

[03:38:48.11] Login. Yeah. Lib users. Okay.

[03:38:54.22] Is it here? Lib users. So this, what do we got here? This is where they set up, they chose to do like all our API wrappers, right? So this is where all the server functions are, right?

[03:39:08.14] Query invalidates on that query query. So this is kind of like an API thing where we have all our server functions. It's pretty common pattern in a lot of things where we wrap all our stuff. And then, uh, it ties into the session stuff. I don't know about this logical split between lib and server here.

[03:39:31.00] I guess the reason is, technically speaking, these are on the server, but this is technically out— like, the query wrapper is technically in the client. So You know, but what you end up with here when you get to the actual routes, obviously, is once we log in, um, preload params, route props. Yeah, it's funny, they're not using the shortcut. You, you can either do the route props through the type on the path, or what you can do is you can go like wrap this in a create route config thing and then You don't need satisfies route definition. Yeah, I should update this template.

[03:40:13.23] And then you can go type of route essentially instead of, instead of this small TypeScript things that AI missed when it was reworking these templates. I forgive it. This is showing like using actions with, with, if you're familiar with Solid, you've already seen this stuff before. It's like using actions with like arguments kind of like in so you don't have to put them in the form. This, this lets you like add like extra data from your component without having it like making a bunch of hidden fields in your form.

[03:40:48.01] Yeah, this, this basically just works like classic Solid Start with single flight mutations. This is like Solid Start today. Okay. I don't need to get any further than that here. So then what the hell is full stack, tan stack, you're wondering, right?

[03:41:09.00] Well, let's start with the Vite config. First of all, TanStack Router has a plugin because it has its own file system routing. Start, we need some middleware and we need to do a little extra setup for TanStack SSR true server functions still work. There are file routes. We're only going to use them for the API routes.

[03:41:29.16] Cause TanStack handles, TanStack handles their route convention. And then we added our route convention for API routes. Again, if you don't use API routes, you don't even need file routes in this. And then, what's all this stuff? Two projects that need different halves of the framework, component tests and DOM browser.

[03:41:49.17] Okay. Was this stuff in there before? I guess this is all testing stuff. Okay. Yeah.

[03:41:54.14] I didn't look at the other template, but I'm gathering. Yeah. This is all testing stuff. Okay. Not important.

[03:41:59.04] Okay. So what does this mean in practice in the source? Well, this is probably TanStack's generated routes. Yeah. So their file system router generation.

[03:42:12.11] Right.

[03:42:15.16] And then what else do we have in here? Server config. Guess what? This wires TanStack Query up to our single flight mutations. It's a little bit more code to be fair.

[03:42:32.26] So, you know, we had to do a little bit of work here. Obviously in Solid Router, we know about them. So we literally have an export and it's just a one-liner. Here in TanStack, we actually had to, you know, because you could use, you could actually also do this with the router. The router has its own caching mechanism, but for this example, I want to use TanStack Query.

[03:42:53.00] Instead of the router. So we're, we're wiring into our, our, um, yeah. And then everything else is going to be the same, which means that when I go into users.ts, uh, yeah, this is TanStack's convention for how they do file system routes. Right. And they have their loader prefetch, context query client, user client.

[03:43:16.18] And we leverage the loaders in the exact same way that do single flight mutations. So again, and the part that might not be obvious here is usersQuery, lib queries is query options, doo doo doo doo, query client. What am I looking for? Okay, so this is all using the query client.

[03:43:47.18] GetUsers, getUserId. Where are these coming from? Users. Okay.

[03:43:54.07] These are our server functions.

[03:43:57.17] So, and I think this is also using Remix's cookies again. So this template has Remix, CanStack, and Solid in it to some degree. But my point is third-party library, completely able to use single flight mutations, progressive enhancement, and server functions. And if we support server components, they get it for free because they just travel on our use server thing. Now, this is not TanStack Start Solid, but it might be 80% of the way there.

[03:44:41.24] You know, a couple plugins away. I just want to kind of put that by you. It's— there's probably in this case, maybe 100 lines of custom code. But we just built our TanStack meta framework.

[03:45:14.29] Yeah. Don't get me wrong.

[03:45:18.26] Some of this is a little bit— some of this stuff is a little bit extreme here. Like the way that the query client is going through the thing. The part that, that, that I feel like it's our fault for exposing obviously is this, this is specific custom code. It would be interesting. Like this could be folded into TanStack Router Solid if they're open to it.

[03:45:45.02] Right. Because it's playing with our standard protocol. This would work with all Solid projects. So there's no reason not to, unless, you know, You just wouldn't import it when you're using TanStack Start. That part's custom.

[03:46:04.25] This actually has nothing to do with TanStack. Yeah, honestly, everything else is stuff you would like, like setting up the query client, like stuff you would need to do in a TanStack app anyways. The, I honestly think the only difference is basically this, that's custom. And something in here is custom.

[03:46:35.09] The setup function's a little custom.

[03:46:42.27] Because they do this thing where they like router load everything like before they like they kind of block hydration.

[03:46:52.23] Um, I'm gonna need to talk to them. It's, it's, it's a, it's a, it's, I understand why it's like this and it's partially because of React. So it's kind of like, how do you find a happy middle ground where you can make things the efficient Solid way without not defaulting to React when you want everybody to be able to have the same experience? It's a little hard.

[03:47:23.07] But yeah, I mean, that's the, that's the gist here. I hope you can kind of see that with this approach, even though I know there's a lot just looking at like the example here, it's compared to like we almost, as I said, built a solid TanStack meta framework here in 100 lines of code. It's kind of like my Islands demo. This is kind of a proof of concept. I'm not saying it is a meta framework.

[03:47:49.14] I'm saying that when you have the right primitives, you like, these things are much more accessible to you. That's the key. And part of it, this is why we had the folded internally. Like this is, it made sense. We got it Solid start.

[03:48:11.12] And then we made the same protocols work with everything in the Solid ecosystem. So like, I think if I look at these templates here, there's even with TanStack Router, which is just a simple client-side app using TanStack Router.

[03:48:32.04] You know, these pieces all are already built to fit together like Lego. So I, I'm really struggling. Like the, the, the, if you guys want to understand the core trade-off is do you want Solid Start image or do you want Solid Image? Do you want Solid Start, Clerk and TanStacks? I mean, because TanStacks separate, it's started, it's going to already be a split, but like, The permutations of possibilities gets really prohibitive for third parties.

[03:49:05.06] So now when we have third-party plugins, they, you just target Solid and you're done. And guess what? If you're an AI and you want to know how to use Solid, you don't have to go, oh, uh, this is the Next project or this React project and then jump back and forth or whatever. Um, you just like, what's this building apps? This is how you build an app in Solid.

[03:49:31.07] You just layer on what you need. You go to one place, you know, like I didn't talk about meta and stuff. You know, so meta is actually, as I said, just a wrapper, our internal use head hook, which, but like essentially AI builds, like, if you need something custom, you start with a template. And if you need something custom, AI is going to build the metaframework for you. That's my opinion on metaframeworks.

[03:50:02.20] If metaframeworks are just an opinion, a collection of opinions, the people with the opinions are higher level. They're the agent or they're you. I don't want to be the one to enforce your opinions, you know. Everything that we focus on in Solid is communication-based and mechanical. So that leaves agents able to build whatever you want.

[03:50:25.29] I think Remix has this part kind of to a T. Like if you looked at them, they put all their repos in like one, like place, all their libraries, the whole server client, everything in one thing. And they're just like, look, agent, go build on that. There's no like metaframework framework tension. There's none. Like, there's no— they're just like, look, just pick the pieces you need.

[03:50:49.02] And I just think we built the right primitives here. So we're basically doubling down on that mentality.

[03:51:04.02] Oh yeah, typed in variables. I forgot about that. Yeah.

[03:51:08.26] Where is it? Environment right here. It's in the docs. Ooh. Well, this isn't right.

[03:51:16.09] We're gonna talk to the docs. We prefer using Valibot for examples instead of Sod. No offense to Sod, but Valibot's my boy.

[03:51:38.08] Okay.

[03:51:40.21] As a builder, I want to have the Laravel experience with Solid. Yeah. Yeah. You kind of want to just have all the pieces there ready for you. And do you hear that's what Remix is giving?

[03:51:49.04] They're giving it even more so because they're aligning with classic server backend mentalities. This is the frontend version as close as we're getting to it today. I think, right?

[03:52:03.04] We've got— we take enough of the opinions that— but while leaving enough of the, the like things you build on in your court.

[03:52:16.26] All right.

[03:52:21.12] So did I go through all the headlines?

[03:52:26.08] DOM model calls the thing, cleaner graph. Async model needs a deep dive. We talked about that today. I mean, I'm going to write some articles based on what we did today. Maybe I'll steal some parts.

[03:52:43.09] For those who noticed, server function components treated in config types. Yes, server components can return components or server function returns. React's diff server components are an experimental preview behind a flag. You'll get a full announcement Later. Yeah.

[03:52:55.22] I'm, I'm, that's still, it's because it's, it's still moving ground. We need to talk about it more. And we're not there yet. And it's very challenging because I have the DataStar people like literally like lighting up Twitter and chat all about this stuff. And I'm just like, guys, just, just hold off a moment because what you what you see here is that this model that we have on the client side fundamentally gets you into a place where you're, you have the whole server authoritative layered on optimism.

[03:53:33.24] Once you connect a backend to it, it pushes you towards having the right patterns. It, it gets away from weird race conditions and client divergences and all these things, because it's just The structure of the deriving it makes a lot of sense. But the question is, is there another part of the puzzle that can be handled with purely HTML over the wire? You know, everyone's had their partial solutions or their islands and stuff. And the problem is almost every one of those solutions is broken, just fundamentally broken from the perspective that they don't handle shared state tearing.

[03:54:11.22] Reactive Server Components are in a very rare error where that isn't a problem.

[03:54:17.28] And the— but they carry another cost. And I feel like we've solved that. But, but, but, but there's a lot of consideration here. And we need more time to flush through that.

[03:54:39.29] Okay, so what— where are we at right now? I've been streaming for almost 4 hours and we basically covered most of the stuff I wanted to talk about for Solid 2.0. So is there anything on the edges of what we've been working on? New features, something that I haven't covered on stream before? Oh yeah.

[03:54:59.17] Some of the last additions to Solid 2.0 might be worth looking at.

[03:55:06.18] I want to talk about SSR modes. For a moment here.

[03:55:12.15] And again, oh, side note before we do that. First of all, there's a TanStack Router guide in here, which actually explains how the whole full-stack TanStack Router template works. And about how, like, we use the query and do single-flight mutation. So if you are interested, there is actual information on how the Wiretans tech router. But I actually, you know, you know, that article that React says, like, you might not need effects.

[03:55:47.12] We have our own version of it. And I just love how short it reads.

[03:55:55.20] It's just If you get a chance, this is good reading. But what I wanted to talk about is our data modes. Because we added two new features last week. Okay, actually, let's go here for questions. Yeah.

[03:56:22.23] If you guys have any questions, this is a perfect time to ask about Solid 2.0 questions. I will engage. Chat here, because everything I'm doing now on this topic is now just like kind of extra. Because how do I know if a library is not compatible with Solid 2.0? Yeah, I mean, pure dApps, this, this is going to be a challenge right now.

[03:56:44.17] Everyone's using the next branch. But once that collapses, it's going to, it's going to be difficult. This one is unfortunately for most libraries, a major break. It's so funny because you as a developer coming in, just like trying Solid, using it, it's going to feel the same, but better. Like we didn't— it's such a funny thing.

[03:57:06.20] Solid has been so stable for so long.

[03:57:12.03] Arguably the most stable framework over the last 7 or 8 years, like in terms of API changes, like and conceptual changes where we've like, we haven't forced you to change how you do your thing at all. We haven't like, we haven't like been like, we didn't go from class components to hooks, or we didn't switch from, you know, like .get reactivity to compiled reactivity, then back to runtime reactivity. And we didn't go from an options API to, to a, like a more signals-based API. We didn't, we didn't introduce server components and completely flip your server rendering on its head and like enough to like force like there to be two versions of Next.js.

[03:57:58.19] Everything's been additive. It's been very subtle. This change, however, is breaking, but not in a way that impacts any of the conceptual pieces that you're working with. Which makes it really hard to identify because when people look at it, they, they're really— it's going to look like normal solid. So yeah, we're, we're going to have to be relying on pure depth ranges to a certain degree here.

[03:58:27.01] It's just unfortunate. Uh, hopefully everyone has, you know, locked Major 1 or whatever. Um, but I've mentioned this before and I mentioned again, no one is making any impact in the JS Framework Benchmark. Almost, if you look at all the benchmarks, they haven't changed.

[03:58:55.08] I would almost say since Inferno, but that's not quite true. There was a kind of a loop there. I would say fine-grained reactivity got to the front ahead of Inferno by a noticeable amount. And then the browser optimization changed over time. And then Inferno basically caught back up to where we are without them even changing the code very much.

[03:59:15.20] To the point that JS Framework Benchmark is just basically, if you're within the first, anywhere from part 0.6106 to about 0.14 or 15, You're within variance of run range, which means that like, you're not making any improvements anymore. And almost every existing benchmark that we have is in that category. There's some places where some frameworks will be faster, but slower than others doing deliberate trade-offs, but it's a wash. We're all like basically the same on performance now. It wasn't the case. It wasn't even the case a couple of years ago until like Vue and Svelte kind of adopted the same approach Solid took.

[03:59:58.13] But now the new frameworks, every new framework pretty much treats that as table stakes. You know, when you talk about Octane or Ripple or, you know, smaller ones you haven't heard of. Solid, Vue, Svelte, all spitting distance from performance.

[04:00:23.23] Everyone else kind of still off where they were before. So yeah, I basically, I just consider it basically unchanged.

[04:00:35.14] How do you handle time slicing? I did talk about this in detail on the stream. And I did show the example. The way we do it is we, we don't actually do, we don't actually do explicit time slicing, we don't interrupt. I have a demo in here.

[04:00:57.00] Where is it? Pierski. So let's just— Pierski.

[04:01:01.26] Which kind of shows like the old React time slicing demo where you're like doing this. And but the way that I actually implement this demo was just put a timeout in an async memo. We're already granular. So all I needed to do was go requestIdleCallback inside a memo and it's promise, make it async with a cleanup thing. And it's like, okay, ta-da, we have time slicing.

[04:01:24.20] The thing is, because a graph is guaranteed to not run effects until it's fully settled, time slicing, as React calls time slicing, is a scheduling thing. And it was never for performance for us. So we don't have time slicing, but we have concurrency. So we don't interrupt our heavy concurrent workloads. But part of that is we also don't throw away any of our concurrent work.

[04:01:53.05] As you saw, like we render the Suspense boundary. We don't throw it away when we go to render it again. So we just continue where we left off, like anything fine-grained. So it's a trade-off. If you need to schedule work, schedule it.

[04:02:08.21] You have the tools. But yeah, I consider time slicing a different thing than concurrency.

[04:02:20.27] It landed slightly slower simply because, yeah, hand-optimized JavaScript. Like, they can't— the compiler doesn't make React faster. It makes your code faster. So If someone's already written the best possible React code, the compiler does nothing for you. But most people don't write the best possible React code.

[04:02:51.27] This is your favorite Tuoh demo? It's just such a funny thing because this demo is broken in React now.

[04:02:59.06] Because they worry about starvation. Like, don't get me wrong, we can starve it. You guys want to starve it? Let's starve it. Let's go performance tab.

[04:03:10.14] Okay. CPU throttling. Let's go 4 times. Okay. Now it works fine.

[04:03:14.22] But when I hover over it, it might lock up on the numbers for a minute. Still doing good. Okay. Not slow enough. Let's go 6.

[04:03:22.13] Oh, okay. 6, 6, 6, 6. When I hover, it might stay, might skip some numbers. Yes, he's staying on 1 too long. Now when I let go, it jumped to 6, 7, 8, 9.

[04:03:33.29] So that was starvation. That's not great. I hope you fix your actual problem rather than relying on this at a certain level. But you notice the animation of the circle stayed smooth even though I froze the number. That's the point of the demo.

[04:03:48.23] Can we go worse? Let's go 20 times. Okay. Now the number's not changing at all, even when I'm not hovering on it. Oh, and when I hover, it starts doing the— okay.

[04:04:00.19] So we're finally getting to a point where we're causing the browser to— yeah, there we go. Causing the browser to overwork. Here's my opinion.

[04:04:17.28] If your app is getting to a delta where you actually need this, fix your app. This is just dumb. I'm sorry. We're simulating like an extreme slowdown and we're 20 times throttling it to get here. Like this is such an artificial problem to be solving.

[04:04:36.12] It's good in a, when you have specific things, you know, that are expensive, offload them, move them to a worker. That's a beautiful thing about AsyncAnywhere. I'm scheduling it here myself, but I know that the graph will be consistent. What if we move it to a worker? You can also do the same thing and have it process it or whatever.

[04:04:56.06] Like there's ways to offload this work.

[04:05:07.17] It's all artificial to load a page with 20,000 components. Yeah. I mean, that's, that's quite possible.

[04:05:15.12] I guess that's, that's the thing. Maybe at Facebook scale, this was the best way that they could, they could, they could solve a certain type of performance problem. I'm just, I'm just really hoping that they're like, if you start with the right structure and the right primitives, you can like, you can push that problem far enough that you don't have to resort to this.

[04:05:41.14] Yeah, I mean, you just return the todo you want. The trick is you return the todo you want from the, from the response of the, of the action you do, and then have the optimistic layer derive from like an async createMemo, and then mutate your authoritative source in this case, which is which is the async memo, and then have it feed back through the optimistic source. Right? Like you don't have to use refresh. You just like, you just have to essentially mutate the authoritative source and layer the optimism on top.

[04:06:24.08] Optimism doesn't give you a setter. So if you want to, to, you know, be able The funny thing is 20,000 components doesn't mean anything unless 20,000 components are updating at the same time. So like, does fine-grained already solve this problem? Like, I feel like, like, was there just some really, like, I wonder if the React compiler solved this problem for like even better than concurrent mode. Do you know what I mean?

[04:06:59.23] Like, did they just need some really aggressive memoization? Problem is memoization doesn't solve everything. Like sometimes when you go down the tree, things do need to propagate, right? And it's not granular that you then have to rely on lower level memoization. Yeah.

[04:07:15.02] I don't know. It's only, they know the truth to it. This, this, this isn't the type of performance problems that large companies come to me about with Solid, um, in terms of like number of components, it's usually historically been about oversubscriptions and stores. And a lot of that kind of stuff, um, is solved in 2.0, just better design. Milo really focused on the performance of the, of large reactivity.

[04:07:40.17] It's less about large UI. Okay. Any other questions? Any AI company buy Solid? Why, why are they buying us?

[04:07:50.09] I, this, maybe this is my problem. I have no vision on this side. I don't under— like, okay, actually why an AI company would buy Solid. Okay. Shoot.

[04:08:01.22] Solid has a superpower that no other UI framework has in that its signals, its graph. Graph are completely connected. Even some of the very close competitors like Vue or Svelte still kind of like rely a bit on the UI side of the components, even with async. Our graph is pure and we can trace it from end to end. We handle all sorts of data types, promises, streams, like async iterables.

[04:08:33.28] So essentially we're able to trace data through all portions of your app, through the data flow, because we own the primitive that does the communication, right? Any model that mirrors React is giving that away. Like sure, they can manually do granular updates of their components, but they're losing that traceability or observability. So first of all, this is very attractive for companies doing observability, like like Sentry, maybe, companies that care, you know, about debugging or production traceability. Why does this matter to you as an AI company?

[04:09:18.18] Well, if we can provide the telemetry during building of how everything works in your app, then you can build better apps with AI agents. It's that simple. Async in our system is not opaque. We can see the waterfalls.

[04:09:44.04] We know where people— we can heuristically know where people are using or agents are using poorer patterns than they could be. We can actually correct structural problems in your code partially by being so restrictive. Solid already lets you build the right code by default in terms of performance, but also diagnostically because of our knowledge of the graph. So this is a different take. We might not have the most token efficient language with JSX and maybe someone can build, you know, an adapter with something more like more descriptive, maybe something like TSRX or maybe even something even better.

[04:10:20.01] Maybe Marko is the future of client-side templating when AI, as far as AI is concerned.

[04:10:26.24] But that layer is still kind of up in the air what works with agents. But the truth is, like, we have to look at what we're building. And Signals and Sol's Graph is the best way to actually look at what you're actually building. It's, it's that simple. I don't know, does that pitch work?

[04:10:50.17] I don't know.

[04:11:09.26] Isn't Babel source transform still? But look, look what it actually builds. It just builds the Reactor graph. Everything is the signals.

[04:11:21.06] Like the final output that you get is just signals. Everything is just, is just our graph. Every piece of it is connected to our graph.

[04:11:35.19] Also, it's not Babel anymore. It's rusted with ORC-C, which is exciting. Okay.

[04:11:45.06] What, what, what, where was I? I wanted to look at the docs. I wonder if they talk about it at all. Probably not. But yeah, one of the latest features that we added, let me see if I can go into our, where is it?

[04:12:00.16] Solid SSR template.

[04:12:11.26] Is we can kind of choose where this stuff happens.

[04:12:23.25] We've had this for a while where like the default is server. I've showed this on stream before, especially with streaming. There's also hybrid. So like, and if we do client, for example, it doesn't fetch during initial SSR. It fetches on the client afterwards.

[04:12:39.07] Like if I think— console— this should show it. Yeah, see, it fetched on the client afterwards. Right? So what's new on this?

[04:12:59.01] Well, what's cool about this is it actually triggers the loading thing. I saw the other day React came up with something called useBrowser. This is our version of useBrowser essentially, because technically this component here, or I guess, I guess stuff we can, we can basically block off.

[04:13:22.20] Like I guess if it was gated, if you did something gated on greeting, it would only render on the client, not on the server. So it's like a, it's a cheap version of client-only. We have a client-only, which is like lazy, which is better. It does preload tags. Like when you just, when you hit a client-only component on the server, it, it actually triggers preloads while streaming and client-only separates into modules.

[04:13:44.11] So like leaky, like window references and stuff on the server aren't going to leak. Like basically if you're trying to use client APIs, like global scope, but if you don't need that, you can just. Do this and force it. The other interesting one is, is this one called loadingValue, which will let us go— which is kind of funny. It basically opts out of Suspense and loading.

[04:14:20.00] So if you don't wanna use like a fallback placeholder and you wanna use like data as your placeholder and rendering the real components, you don't wanna use loading, you have this way to kind of default on it. Now this one is greeting accessor string still 'cause it's string. I recognize this as a way to add nullable async back into Solid. Like this is essentially bringing back Solid 1.0 semantics, but there are use cases for this. As you can see, it doesn't actually go to the fallback anymore.

[04:14:48.29] And you could use this to kind of fake your own fallbacks. Like if you had a show component on this or something, you could basically not use loading. The difference is loading streams. Loading means that even if the JavaScript on the page hasn't loaded yet, we will stream in the contact as soon as the, like the content, as soon as we receive the HTML and we know that the CSS for it is loaded, right? We can like swap it in.

[04:15:12.04] Whereas this kind of mechanism can only swap in content at hydration time, because you're basically traveling along the data channel. It's not straight, like you have to wait for the framework to load and then it to hydrate to be able to swap in. What's interesting about this source client, it's fetching the client. I can also do source server for this. And in that case, it's actually using, it's not fetching on the client, it's using the data that was fetched on the server to replace our non-fallback.

[04:15:41.23] So you can still start the data fetching early on the server and stream it over the wire while providing loading value instead of using a loading boundary. Just keep in mind, boundaries are good because they support streaming. They support like before the framework loads. They're the most efficient way to do chunks of HTML. This is a cool trick.

[04:16:04.24] If you want to be able to manage inline placeholders and whatever.

[04:16:15.05] Oh, well, yeah, yeah. I'm not saying it. I'm saying this. Now TypeScript should complain or no. What does it say?

[04:16:24.21] String or null. Now greeting is nullable. I'm not like, That's sort of what I mean by this.

[04:16:36.01] Like it forces them to be the same. We're saying, we're acknowledging that it's nullable. The problem with some of my earlier designs here was that we weren't acknowledging that it was nullable. This is acknowledging that it's nullable. And if we do this, it's gonna show nothing and then show streamed in after the show.

[04:16:57.09] It's interesting. This is a kind of escape hatch. It's the last feature that snuck into 2.0 before the release. I was talking to some people with real apps and they were like, look, we don't really use Suspense boundaries. We preload our data all using our actual components.

[04:17:16.20] And these are some of the largest apps that I've ever seen built on Solid. They come from an era where they they used to be MobX React apps, and then they became Solid apps. Like they're, they're, they're on this like very long migration journey into the future. And this is a very interesting superpower to have. It's almost giving people too much power.

[04:17:38.01] But you just have to recognize the limitations here.

[04:17:45.08] Is it possible to use Solid One Component libraries in Solid Two? Projects? No, not really. I, I imagine something's going to break. Part of it is we changed all the imports.

[04:17:57.23] But talking to those component library authors, porting from Solid 1 to Solid 2 is fairly trivial. Cobalt is already available to be used today. So our, our most popular UI component library is already out there to be used.

[04:18:29.14] So yeah, I mean, it's an interesting feature. I don't, I, Store has something similar called seed loading value, which is just a Boolean. It tells, because Stores always take initial value because they're mutable. It's telling you to use that as a loading value. By default, any kind of initial value should never be visible because we consider the thing uninitialized.

[04:18:49.11] Some other considerations with the loading value is you really are opting out of the whole loading thing. It is not pending in this state. We don't know that it's loading. Future updates will know that it's pending, but we treat the initial creation similar to loading itself where it's not pending. And then, Essentially, it's just a different way to show loading.

[04:19:12.17] It's one that's deferred to hydration time instead of part of this data stream. Okay. I think that's really all I wanted to talk about on that.

[04:19:31.17] Thank you. Yeah, it's been an incredible amount of work and journey to get here. I think there's just so many, like I showed that Islands demo earlier, so many like nice little edges that just work really, really well. It just, I wasn't trying necessarily to improve quality of life in that way, but like, I guess that's why you do this work. Cause like, what I really wanted is to avoid waterfalls.

[04:19:57.26] I wanted apps that people built just to be efficient. By design. You know, I just want, I want, I want you to be able to write the code that comes to you in your head, or maybe an agent comes to head, like the most simple code, and then it do the right thing.

[04:20:17.26] But the end result is kind of crazy. There's very few features that are on that list of like what other libraries do and that Solid doesn't do. That I'm particularly, you know, like, like, I think we're at a good foundation now that we can just build those all out on 2.0's base. Like, there's like the kind of things that we're missing right now are like resumability, which I think would probably take more than 2.0's base to get there because of compiler changes.

[04:20:54.25] Arguably CSS management, but I mean, if I, if we were to go there, you know, I've been waiting, I, TSRX has an OXC parser. So, you know, I was kind of waiting on that. I can't, I think I kind of just, you know, rely on the templating language. That's not really, you know, minimal hooks on our side if necessary. So like, Yeah, you know what I mean?

[04:21:21.19] Like, this is all stuff that's additive server components.

[04:21:33.15] Yeah, you know, activity view transitions I talked about before, we have proposals for both of those, like, or off screen or whatever you want to call it.

[04:21:48.09] Yeah. This was kind of the problem I was facing when I was working on this release for a while. I was actually, what do I work on next? Because we kind of done everything. But there is a shortlist.

[04:21:58.06] So yeah. What will the next stream be about? Yeah, that's the question, eh?

[04:22:10.07] I've highlighted a few of them just now. I think the other big things directionally.

[04:22:17.02] Observability and sync engines are like two areas. I know I'm spoiling the plan, but yeah.

[04:22:25.29] Oh, Solid Primitives has already been updated. So it's, it's already, already 2.0.

[04:22:34.00] Yeah, I'm not ready to talk to Delaney until I'm, until I, I, until we're in the right place soon.

[04:22:54.05] Open code should buy Solid, obviously. Yeah. Sorry. That's the AI thing. Cause it's all built on Solid.

[04:22:58.13] Yeah. Okay. So, um, maybe we just switch around to like this week in JavaScript type stuff. Give me a second. Yeah, I'm trying to think if there was like anything particularly I wanted to talk about, but— Yeah.

[04:23:27.09] Sorry, just a lot of notifications, people. And it's been 3 weeks since your stream, so, um, I think I need to open some tabs here.

[04:23:49.05] Sorry, just give me 2 seconds while I'm getting things to where they need to be.

[04:23:57.28] I can't believe I've already been streaming for 4 and a half hours.

[04:24:03.22] This is, this is, this is going to be the challenge. You know what I mean? Like, how do we talk about Solid 2.0 in a way that's like easy for people to immediately get.

[04:24:27.18] Hours-long conversations on, on like mechanics is not it.

[04:24:38.17] God, I hate the new Twitter. Okay, we'll talk about that too. So I was like looking at what's happened this week. And It's like Solid's only posted, like we've only posted a couple things on our channel because a lot of the reposts are actually valuable and Twitter hides the repost now, which absolutely is, yeah, just, it's terrible.

[04:25:08.00] God, where's my bookmarks? I can't even find my bookmarks. Did they hide my bookmarks?

[04:25:20.13] What?

[04:25:26.20] Is it history? Oh, okay.

[04:25:30.27] Sorry. I— okay. Figured it out.

[04:25:48.29] Honestly, this is— RC is there mostly so that ecosystem libraries can catch up.

[04:25:56.26] I'm sure we will still find bug fixes, especially on newer features. But I mentioned this in the release notes. I went on paternity leave. And you could tell that some couple people just like grabbed Fable and just went like, find every bug possible in this feature. And they just spammed our repo, like hundreds of issues.

[04:26:20.23] I, and so like, I've watched the bug trickle slow and slow and slow and slow.

[04:26:35.02] So I'm not going to say there aren't going to be bugs, especially when we're using it in real application scenarios. But this is going to— our C period is going to rely completely on the ecosystem catching up and pushing it, which means all I can do right now is just be a spokesperson and really try and convince you that Solid 2.0 is super awesome. And you should upgrade to it.

[04:27:03.15] Yeah, yeah, pretty much. Like, it's good. Uh, this is part of the code size growing, you know. Uh, just handling all these edge cases. A few times I'm just like, why am I handling these edge cases?

[04:27:15.21] You know, this is just like, there's a lot of like, okay, no, we're gonna throw. Like, screw it, this is not supported, you know.

[04:27:26.15] Okay, so when was my last stream?

[04:27:31.16] July 27th? No, July 24th. Okay, this is so, this is so annoying because now I'm gonna have to use like, uh, okay.

[04:27:49.12] Sorry, I'm going back to sharing my screen now, but I'm going to have to go back to— I'm going to have to like go through the normal thread and the repost thread to talk about all the things I want to talk about. So, okay, let's, let's just switch. Let's go here. This Week in JavaScript. All right, let's get going.

[04:28:17.21] Okay. So this is what I was talking about, which is really unfortunate. Look at the, look at the solid. Like you can tell it's just our releases is our whole timeline now. Because of all the reposts of all the amazing projects.

[04:28:33.05] Because here's a, yeah, you know what? This is the first topic for today. I know I have other stuff on here, but This is just such an annoying, annoying thing. I'm not a fan of X's new repost tab, removing them from the main profile. Quote tweets, while they amplify, you are taking ownership.

[04:28:52.17] It's your take that is being put out there. You can steal their likes. Some people might like yours and not theirs. Sometimes you can take away someone's thunder. Like if they are saying something profound, you don't need to add your two cents.

[04:29:03.07] The other obvious place is external links. You're literally saying, check this this link out for like a release or something. It's great because you're stamping your approval, but for resources, it's an extra unnecessary interaction. It's like, click link, click the link, link, link. This is so annoying.

[04:29:19.02] I maybe I, no one else seems to be talking about this, but like I use Solid's account to promote people in the community who do good work. But the Solid account doesn't sit there and quote tweet eat all their stuff. It just shows off what they're doing. I don't need to, like Solid doesn't have an opinion on it. Solid doesn't, you know, need to like steal their likes.

[04:29:57.01] Oh yeah. So there's a great question in chat that I have to get to in 2 seconds, but I just wanted to put this out here. Because man, and you're going to see how negative it impacts the way that we're going to do the stream right here. Did anyone actually like, look, 34 heartbeats.

[04:30:14.22] Did I miss the conversation? Like, did this release a couple of days ago and people were outraged?

[04:30:20.25] No. Reposts are so freaking useful.

[04:30:25.27] Apparently everyone who responded to this blocked me.

[04:30:31.21] Like, seriously, there's only like 4, there's 4 and I've got 0 here, whatever. Anyway, but man, is this annoying because look, okay. What's, what's, I mean, we can, I guess we can pull up the headlines this way. Solid Start 2.0 released. As I mentioned before, big deal.

[04:30:53.15] Burke and co., Attila, everyone, they did such amazing job. On getting this where it needed to be.

[04:31:03.03] Doc's effort, like this is a very important release. This is incredibly important release for current Solid users. And it set all the foundations for Solid 2.0. Even if it looks like I've been kind of backhanded towards it, Solid Start really did what it set out to do.

[04:31:22.12] And this release is like the culmination. It's a celebration. Of everything that we ever envisioned for it.

[04:31:36.12] Solid 2.1 release, we talked about it all day. The StackBlitz templates, I showed them on stream. But yeah, great way to get started.

[04:31:46.01] Reposts. All right. What do we got here?

[04:31:54.17] Happy to announce Solid is now available out of the box with Canvas UI Dev. All components will be shipped for Solid as well. This is probably Solid 1.0, but that's great. Solid Start 2 has landed in Better Full Stack. So this is like a, like more opinionated wrapper, I'm gathering.

[04:32:13.15] This is kind of like create React app with everything built in. See, I think Solid 2 is the perfect fit for these kinds of projects. When I saw Create-T3-App, that was my first inkling that the metaframework kind of ecosystem was changing. Because look at all the opinions. And I looked at it and I was like, man, it's going to age so badly.

[04:32:36.17] Like, don't get me wrong. I think Theo's choices of technology there were spot on, but like, things change. And I'm like, but this is exactly what people need. So rather than pretend otherwise, let's just keep that layer, keep our layer, and just gut everything in between.

[04:32:59.16] Right? To be fair, maybe it's not a create-t3-app anymore. Maybe it's, uh, some agent set of guidelines or whatever. Like, it doesn't have to look like a metaframework today. But what we really need to do to reduce the complexity is get rid of all the random layers in between.

[04:33:27.24] What do we got here? Macro.com. Today we launched Macro, a new office suite for intelligence age. Macro is unified, built fully in Rust plus SolidJS. Isn't that awesome?

[04:33:35.27] I, I appreciate them giving us a shout out. Not everyone actually bothers mentioning when they're, they've built in Solid. It helps for momentum. It makes people excited about the project. There's a cost, you know, if, if they move off Solid in a couple of years, then, you know, people are like, whoa, what happened?

[04:33:56.11] You know, like the Netflix and React thing or so, you know, it's hard for small projects. So I can appreciate it. But I think we're at an okay place now. And people find out about the migration off anyways, right? Like, Cursor wasn't too sneaky with that.

[04:34:12.08] And they, they used Solid for many years.

[04:34:19.02] Yeah, Brenly, Innovation Solid 2.0, tried to— he probably did a better job than me in the stream trying to explain, like, why it's such a big deal. In a short form. I haven't figured out how to make it short. That's my problem.

[04:34:34.27] Oh, did this post get taken down? No, here it is. This is kind of cool. People playing with Solid 2 on other devices. Solid is already very popular in the TV space.

[04:34:46.08] Solid TV is actually a great little library we have. But it's cool that people just like try it. The, the, our classic approach with low memory just fits perfectly on there. But yeah, BetterTStack now supports Solid 2. Works with BetterAuth, OPC Dremel.

[04:35:04.29] Yeah. So yeah, I mean, BetterFullStack. Yeah. So this, this is, this is what I'm, this is sort of what I'm, what I'm getting at.

[04:35:25.26] Right. I don't know what better TStack is or the history on it, but Solid V1 supported SSR. This is the thing. These kind of questions are the thing that I, that need to be avoided.

[04:35:56.29] Oh, you work on TV? Yeah. Our big one was, there was two, our big one was NBCUniversal, Peacock and that. And one of the main architects of the Solid version of Lightning TV kind of forked it off into its own standalone thing for outside of NBC, Universal, called Solid TV.

[04:36:24.11] They're not affiliated now at all with that project. So, you know, it's an interesting choice. A lot of talks with Netflix too. Their problem was that they wanted to basically make it render like React, and that would have been kind of terrible for them. So.

[04:36:47.21] Yeah. Um, but you know what I mean? This is kind of like what I'm talking about. Like at a certain point, you're just kind of like, like what we now— Solid now slots in. It's not Solid Start.

[04:37:01.26] Solid slots into these kinds of things. So we've just removed all the complexity. They can go do whatever the hell they want. Oh, uh, Hono or Hanno, however you say it, Express, Alicia, Fastify. Yeah, great.

[04:37:15.01] Like my hands are clear. This layer was where a lot of bugs were and then we delegated them to Nitro to a certain degree. Like good on you.

[04:37:35.04] Oh, YouTube TV. Yeah. I mean, yeah, I've talked to the Google teams a bit. I mean, because they've been working on the web. They've been moving to Signals with Wiz.

[04:37:49.14] But like there was this like tension because they were trying to get like, the developers want something like JSX. It's very interesting though, the build at home kind of aspect of Google.

[04:38:02.23] Anyway. Okay. So I guess that's Solid news. We talked about Solid the whole stream. Let me look at what I got for history here.

[04:38:08.25] Okay. This was interesting. This was a benchmark.

[04:38:15.07] And it was funny because Solid did like really good at some of the benchmarks, but then like did really bad at others. And I put a fix in that fixed all the benchmarks except for these last ones. These last ones are very harsh on us in Svelte, particularly because we use microtask queuing and they're literally doing like await, set, await, set, await, set, await, set, await, set, which is something you'd like never do in an actual app. And the funniest thing is I made a text component just for fun and it actually caught up to like Angular. Even though it was updating 1,000 times when they were updating once.

[04:38:57.18] So yeah, this, this, this is, this is an interesting one.

[04:39:06.22] It's always interesting when new kind of benchmarks come out. Because like this, this shows like, us not doing particularly great. But It's part of it's the context of what the specific test is like. I don't recognize this test as a real thing, but it was amusing to come up with a solution where they update once, we update 1,000 times, and where our performance is basically identical.

[04:39:38.29] God, do I want to talk about this? I slot for v\_next. Into Nextane.

[04:39:46.09] Next.js Pages Router built entirely on Octane. Right, because Octane isn't complete compat with React.

[04:39:57.01] The biggest win is bundle size. Yeah, exactly. Down to 40 kilobytes. That makes sense.

[04:40:10.29] This is going to keep on happening. This is why the meta framework layer is fragile, why it doesn't— it's also like the— I don't even— do we care about this anymore? No, probably not. Let's keep on moving.

[04:40:41.13] Oh yeah, sorry, I haven't even looked at that. Let's look at that, sure. SvelteKit 3, SvelteKit v3 RC. Yeah, I was so busy, I didn't even, blah, blah, blah, migrate, blah, blah, blah. What's changed?

[04:40:58.05] Config lives in Vite config.

[04:41:02.22] That's a move in the right direction.

[04:41:06.17] Makes sense.

[04:41:23.01] Okay. Adding this thing, type preparation got easier. Okay. Service workers got a facelift.

[04:41:32.27] I don't know enough about this particular feature.

[04:41:38.18] Environment.

[04:41:44.03] Yeah, it's hard for me to— you can use also status keeper lives to validate your environment variables. Yeah, this is something we just added on Solid 2.0 as well for type safe environment variables with standard schema support. That's why I was like annoyed. I was like, should use the Valet example. It's going to support Svelte 4, which didn't have concepts like error boundaries.

[04:42:04.05] SvelteKit 3 requires Svelte 5. Yeah. Lift the base. That makes sense.

[04:42:10.12] But again, the Svelte features showing up through SvelteKit.

[04:42:21.02] Update. Yeah. This is like what we did with Solid Start. Yeah. Okay.

[04:42:25.21] So this is the move, eh? I want your opinion. Should we just say Solid 2 is on V8? It seems like everyone's saying V8 only because then you drop all the legacy stuff. I dropped from 6, below 6, because that's the environment API, but it seems like V8 is where we want to draw the line.

[04:42:41.12] So that's, we did this with Solid Start 2.0 and we did it and SvelteKit 3 just did it. I, maybe we should take the same line. That's actually interesting.

[04:43:00.05] Following SvelteKit, we'd like to include remote functions as long as async code that's originated from the client should be handled. We're unreasonably excited about remote functions. What the, they're not released yet?

[04:43:11.06] No, I thought we're Remote functions aren't released yet.

[04:43:19.05] Okay, sorry, my bad.

[04:43:34.12] Okay. Sorry, I keep on talking about them like they've been around for like 6 months or something, but maybe that was like the preview version of it. Okay.

[04:43:49.29] But yeah, this is just like the hint. See, I kind of learned— this is what I've been learning. This is why I hinted the server component stuff in the ad. This is smart. It lets people know that like there's more interesting stuff coming without like spilling the whole beans.

[04:44:05.29] I mean, these seem like all good incremental updates. I think the typed environment variables are nice. I don't know enough about their service worker thing. Pushing all the updates definitely makes— gets you to a place where you can like finally leverage stuff. This is all incremental stuff.

[04:44:23.05] I think, I think as a SvelteKit developer, I'd be pretty happy.

[04:44:30.08] Yeah, I don't know if there's anything else on that one.

[04:44:43.11] Yeah, I didn't realize that. Like, I guess there's like lots of details and they have to really make sure that it feels felt-like. Because the last time I looked at them, they looked a lot like our server functions, right?

[04:45:01.28] The, I guess not the 2022 version of them, but like the 2023 version of them. But yeah, I mean, I wonder like if I approached it from today, would I do much differently? Oh, you know, 3 years later. I don't know. Part of the biggest change I made was I pulled the mechanisms into core.

[04:45:25.26] Like, stuff like useSubmission and stuff that I can steal from Remix now uses our own optimisticUpdate hooks on the action. So like, but the server functions themselves still kind of unchanged for at least for the last 3 years. Yeah. I don't know. I'm curious what's holding them up.

[04:45:44.29] It's probably just the API surface around caching and stuff. It's a place where you gotta be really careful. Part of me wants to be like really like opinionated because you give people good defaults and they're happy. On the other part is like, you don't want to like, I mean, maybe Salt does, but I wonder if they're like building TanStack Query and like, do you know what I mean? Like, like they, I think, do you know what else it is?

[04:46:07.02] At the time that these things first came out, no one supported async iterables and streams. And now that's kind of like table stakes, like Solid 2, we talked about promises all day long, but literally async iterables. Kind of like async generators kind of flow through the graph in the exact same way. So like we stream data everywhere and this is very relevant for the async system, you know, it's relevant for initial render and it's actually super relevant for Server Components. So I can understand if you're trying to like piece out the whole solution space, you might, you might want to like hold a bit.

[04:46:45.12] It's kind of like why I've held a bit on server components in general, because there's a lot of places you could start from something like React, kind of basic using their own mechanics. You can try and go agnostic and use like async generator components and like design on something like Crank.js for the server or the old Dust templating. But that's, it's like a new framework. If you want the semantics.

[04:47:11.29] I've come up with an idea of how to make signals on the server actually make complete sense and be an amazing model. And that's actually what's shipped right now with Server Components right now. We actually have like fully permissive streaming signals from the server through Server Components. It's crazy doing both data streaming and markup streaming at the same time. But then like, you could take it a step further, you could be like, What if, what if this, the server markup could also be optimistic and play in the transition mechanism?

[04:47:49.25] Could you predict optimistic DOM nodes?

[04:47:57.17] Do you even need client-side components? I don't know. I have fully, I have designs for all of that. So, but where do you land? Like, what is the experience you want to give to the person?

[04:48:09.26] It took a long time to cater Solitude, like fine-tune it to the experience we want right now. So I can appreciate it at least.

[04:48:22.15] I think it comes from If you build to the end of the story all the time, you have to step back when you— every time you adjust the measure. And I complained or lamented at the beginning of the stream that I was never here when stuff arrived. Um, but it's because in a sense I just kept on going, which meant that I never had to step back. Which because I didn't have to fill out the story, you know, and that's kind of like the tradeoff on this. I, I just, I didn't, I couldn't draw the line earlier.

[04:49:05.05] And this is where we got now. And I, I, I think this was, yeah, this is probably a very pragmatic choice on them trying to figure out where they want to draw the line here because if, if new abstractions cause allows your existing abstractions to be like, kind of poked at a little bit, be like, then you have to rethink things like, Runes had this risk, right? Where, where originally they were like, look, you know, you just call a variable, but then you have to wrap it in a function when you take it out of the file, because it's like secretly actually calling an accessor function. Like it basically works like Solid, but we're going to pretend it doesn't. But then they, then they step back and they're like, okay, we can use classes and use a getter and make it implicit.

[04:49:46.08] And that API was much cleaner and served their purpose and didn't cause people to write stuff that made no sense.

[04:49:55.22] It could be something similar here.

[04:50:07.20] Async is mostly because compiler optimizations are mostly a syntactical sugar compilation. I don't think it gets in the way. I think their challenge is they handle some stuff so well because of the compiler that other stuff, maybe now they're like, oh, this doesn't feel as smooth because we can't handle the compiler in the same sort of way. Like, that's usually where the conflict is. You have stuff like you have this discongruency between stuff that's just like butter smooth because the compiler takes away like something you find yourself, oh, I have to actually teach new concepts.

[04:50:40.24] The compiler let people not learn right away. Like that's, that's, that's honestly the biggest risk of a lot of stuff. Like, do you know why I love, I love TSRX? If you want to destructure reactive props, you use a symbol. It's saying, hey, this is not normal destructuring.

[04:50:56.11] I am showing you that I am doing something special here. There's an sign. If you just go, oh, component props destructor and it works. You're, yeah, everyone gets happy. Like, yay, this is great DX, but you're just deferring necessary learning because then they go dot this or something inside their component without wrapping it in a derived or whatever.

[04:51:19.11] And it doesn't update. And they're just like, I don't understand. And it's like, well, that's not how you access matters for reactivity. It's all about reads.

[04:51:29.28] And, but you're like, But I was destructuring the props. It's like, yeah, well, we lied to you for your sake, but now, you know, you know, I don't like that.

[04:51:44.23] But if you make it explicit, you're like saying like, look, this isn't JavaScript. We know that you're doing something special. Then that's, that's kind of better. And I think that's the kind of friction that sometimes has to happen because your compiler is creating an experience and you want want it to be, have no holes. You want to, you want to cover the whole surface in a way that tells a really compelling story.

[04:52:06.09] And making sure that every point works is usually the challenge there, right? Like, because it was like, what about this edge case? On the runtime side, I don't have to worry about that quite as much. Because like, it runs how it runs. Don't get me wrong, there's, there's edges, listening to things after await with no async context.

[04:52:27.17] I can't— there's things I can't detect at runtime, which are unfortunate. But linting and compilers maybe, in a sense, can clear that gap.

[04:52:39.27] But yeah, I don't know. I can't really speak too much to it. I'm just, I'm just trying to like think out loud. This seems like this is— this release is in the same kind of category as Solid Start 2.0 release. It's like, like a much needed like modernization.

[04:52:55.05] I think it sounds good.

[04:53:03.10] Let's go on my thread for a bit before we finish up with bookmarks. Let's go back.

[04:53:14.21] Oh yeah. Okay. We're gonna have to talk about Octane because Octane came out after my last stream. So yeah, give me a second. We'll talk about Octane in a minute.

[04:53:28.16] Let's go over stuff. Okay. First thing, CanStack removed Server Components from their website. Interesting read.

[04:53:40.29] People should check this out. Because it's funny. The, the TanStack Server Component design, as you guys know, is roughly based on the Server Components design I proposed a couple of years ago. And I, it's still like, when I was working on the latest Solid Server Component stuff, I was like, how's this going for you guys? And they're like, oh, you know, pretty good.

[04:54:01.15] And I'm like, kind of had like kind of a debrief with them to kind of understand where things are at and actually help guide the design a bit, especially around like anchor tags and forms. But, um, The funny thing is they ended up removing the server components because essentially they just needed a smaller way to process Markdown. So when they, when they basically did the change, current S, old SSGs for current SSGs. Okay.

[04:54:38.15] Like it was a minimal change. They actually lost performance in a couple of places, but gained, made their site a little smaller. Current time to, but the actual time, TBT, what's that? Total, why am I, that's not like time difference. What's our TBT?

[04:55:00.20] Total blocking time. Okay, gotcha. Ah, so they ended up, because they spent less time in the Server Component reconciliation and they actually reduced the total blocking time, which is nice, but their overall score actually did dip a little bit or stayed even. So yeah, but they made their site smaller. Basically, they just weren't feeling the wins for the complexity of the architecture.

[04:55:29.11] Well, the problem isn't just the Flight protocol. You have this problem in general anyways, like any kind of partial, you're going to be sending way too much information. Like, uh, like, uh, in our server calls, we send HTML, you know, chunks of HTML, like keyed. It's almost, I think the React protocol is actually kind of smaller, but I, our HTML probably compresses pretty well because, you know, there's a lot of repetition in tags, open and close tags. And so like, whatever.

[04:55:54.01] Server components are going to come with that cost. It's kind of go with the territory. The problem on the React side is the, see, this is all initial load costs. It's React saving you initial load time with server components and they actually shrunk their bundle.

[04:56:12.11] I don't know if this is gzipped or anything. This seems large. This seems actually very large. This is probably minified, but not gzipped. I'm going to go with.

[04:56:24.05] I wouldn't be surprised if the gzip numbers are closer, but they actually shrunk this, the, the, the, the, their, their, their bundle size by getting rid of them. So like, because there's a certain overhead of just having Server Components in the first place.

[04:56:41.23] So like, I get it, you know, like you have to be doing, this is the, this is the tension of Server Components. If you're doing so much and little, so little in the client, why are you, why are you paying the extra cost to support Server Components in the first place? Do you know what I mean? Like it's actually sometimes more expensive, especially if your framework scales on interactivity instead of DOM size. Like it's actually more expensive to ship the Server Component solution than the number of components you show on your page.

[04:57:10.24] It can definitely happen. Obviously scale out is a whole different scenario, but it, it is, there is this like slight tension here. So it's funny because like, I get what they're getting at. 6 pages change the map. The first load, which is actually the least favorable way to look at the current architecture because the only time the browser pays for the, for the renderer, every page after that tilts the trade towards regular SSR.

[04:57:34.08] Yes. The RFC version, every new piece of the server-backed content with the rendered flight, payroll for the content. Kept the renderer itself out of the browser, but each navigation refresh, blah, blah, blah, would pay for Serialized Component again. Rails or Payloads, docs requests, blah, blah, blah. We aren't refreshing.

[04:57:52.25] Yeah. I see. So my question is, if you change the math on RC, do you change this? Like if you made RC significantly smaller, would this gap? Like, would that change the math here?

[04:58:08.17] I think this is the problem. I think with Server Component solution, this is where a lot of tension is. It has to be small enough to be worth doing.

[04:58:24.02] 10 seconds to go, PostCSS on dropdown. I mean, everyone's been waiting for Solid 2.0. I don't know what their plans are there. But Mm, that would be cool.

[04:58:45.27] But basically the gist of it is they just, they made their Markdown parser smaller. I think in general, Server Components probably have more value than what this blog post makes out, but I can understand why the details in terms of implementation actually matter here. So this is, this is a very good, like, where to set the bar when looking at Sarah Cohen solutions. Interesting stuff. Open-ended question, open-ended question.

[04:59:14.19] God, I just, I was on a weird self-reflective trip this time period, eh?

[04:59:31.09] Okay. Let me see if I can group this stuff in a way that I want to group it. Okay. Cool. Cool.

[04:59:35.08] Cause I want to talk about Octane. I want to talk about AI and I want to talk about, yeah, let's start with this one. This one, this one's small. Apparently React compiler was compiling Solid code. We never actually got a solution for this.

[04:59:51.06] Like they, they, The TanStack guys eventually came up with like some kind of hack around, but they got there. It was kind of interesting though, because back in the day we kind of had this problem where React JSX was just infectious everywhere. They polluted global types, they did all this, and the ecosystem had to kind of walk back from it. This is the biggest problem with these generic compilers. Svelte had this problem.

[05:00:11.25] That's why they have .svelte.ts. React compiler is just like, they assume they own the JSX extension and Maybe that's fair. But I feel like things have shifted from that since then.

[05:00:31.23] If it's React, I see it's very different often, which kind of verges towards HTML5. Yeah, exactly. Yeah, that's probably fair.

[05:00:48.00] Talked about Solid Start.

[05:00:51.17] Okay. It looks like most of my existing, the rest of the stuff is AI and Octane.

[05:01:01.04] I actually do, we talked about this a little bit. My research is into server components. Has suggested to me more than anything that DataStar is onto something. They are a framework that I am very much aware of. I think you guys should be aware of too, if you aren't.

[05:01:22.11] I put them in the same category now as Qwik, in the sense that they are a framework doing interesting things. And I think that right now, when I like, even when I'm mapping out new concepts, like I mentioned the other day, I had this kind of ground-shattering revelation on things.

[05:01:43.26] DataStar is mentioned in that article that, you know, as I wrote it down, because they cover a part of the spectrum that historically hasn't really had the solutions. And I think it's very clever.

[05:02:00.23] HN user wrote a script from scratch. I think we're going to see a bunch of this. I think the problem is HTMX is just not enough.

[05:02:10.19] Every person who takes HTMX and then goes, oh, but I need little bits of interactivity are going to come here. And because of HTMX's success, this is a very natural place to be. So yes, I definitely want to talk about DataStar. In the future.

[05:02:32.12] It's worth talking about.

[05:02:35.26] Just wanted to give a shout out.

[05:02:40.23] It's tricky because at different periods of time, different frameworks catch my attention. And then I basically like just drop off talking about other frameworks because like they're not in my field of view. DataStar is very much in my field of view right now.

[05:02:57.26] But whereas like vNext, I could care— I couldn't care less, honestly.

[05:03:06.04] I think I tagged that just to say that I couldn't care less.

[05:03:16.24] Oh, you're talking about affordances for like destructuring.

[05:03:21.23] Or are you talking about, I mean, TypeScript little source.js export. Yeah, yeah, just import source where it's a compiler.

[05:03:33.26] Yeah. Okay, so the rest of this is, before we get to Octane, the rest of this, I guess it's kind of related. Let's talk Octane first.

[05:03:47.09] We've all known about Octane on this stream for like over a month. Let's face it. When Octane finally was released, there was that reaction. There's like, what? It wasn't released yet?

[05:04:01.04] This was not a very well-kept secret. Dominic like told me not to talk about it or whatever. And I tried not to on the stream, but it's, it's in whenever Dominic Gannaway creates a framework, people are going to talk about it. So the chances of that, you know, not emerging, and let's face it, when he dropped Alpha, he already had like, like a pretty, like, he might be just reusing one of his existing templates. But he already had a pretty good setup, which reminds me, I need to probably should make a PR here.

[05:04:37.20] I should be able to get sold back down to the 1x area in his benchmark.

[05:04:48.08] But that aside, I think that like All right, actually, maybe this is his current one. He has us at 1.7 times.

[05:05:11.26] I wonder— yeah, these tables aren't lined up because here we're at 1.2 and then here we're at 1.7. That's interesting.

[05:05:30.02] It's not very nice. I think he's finding some really interesting holes in frameworks. For Svelte to end up like this far behind is definitely interesting. Basically, the JS framework benchmark.

[05:05:46.26] Yeah, I wonder, there's no, I wonder where this 1.7 is coming from because there's no way that the JS framework benchmark has this kind of, these kind of divisions.

[05:06:03.08] Do you know what I mean? Anyway, interesting benchmarks.

[05:06:12.04] Just as Octane is fast, and in his tests, even faster than what he was doing with Ripple.

[05:06:20.00] Right.

[05:06:22.12] So there is some performance here. My gut is if we just took the normal JS framework benchmark and put Octane in, you're not going to see this level of thing. It's the JS benchmark has run its course, which is why a new benchmark like this is quite welcome on its side.

[05:06:38.21] I actually did look at this and did make improvements to Solid 2's performance after running it through here. And then I also separately changed the benchmark implementation to make it more the way I would write it rather than the way Dominik had written, which also improved the benchmark scores. But which I did not commit against this repo as of yet. But generally speaking, there is a performance angle here, which is interesting. I don't think that should be the most interesting part about it.

[05:07:10.00] The interesting part about this is this sort of pseudo React compat bit where Because React's compiler was trying everything to restrict exactly the constraints of what React is today. Whereas Dominic is more looking at is, can we make something that works with the way React is today, but also break all the rules of React so you can do more with it? So it's like, it's not just React compat, it's just like, React compat plus.

[05:07:53.16] Compat plus is always a skeptical thing on my side. But you can start seeing how this could be attractive. This is using TSRX, which is, you can see the templating, it's kind of like, I think you need to use, probably need to use TSRX to actually Actually, maybe not to leverage the— yeah, maybe to actually leverage the— you could probably analyze the JSX if you wanted to leverage these rule breakthroughs. But the key part is, it's not just that there's this React compat bit, they're literally actively going through the ecosystem and basically converting Like if you go to the GitHub, this is actually kind of interesting. I went to the Discord.

[05:08:39.23] If you go to the GitHub and you look at what's in here, they're just going through the React ecosystem, throwing, gathering AI credits at it and just migrating every single library that's above a certain usage into using Octane.

[05:09:09.10] So like the compatibility story isn't exactly real compatibility, obviously, which means that it'll hit friction at some point because, you know, especially if React changes. If React doesn't change, it might not. And maybe we're at a point where React never changes again. It's like done, but they don't need React compat to stay forever, just long enough to migrate the whole React ecosystem and use AI to maintain the whole ecosystem. This is like MobX.

[05:09:38.26] This is wild. If you think about it.

[05:09:44.20] I call it Jotai. Absolutely wild.

[05:09:52.03] Now, this might be because Dominic works at OpenAI. OpenAI wants to support this. They want to, they want an angle to make building apps easier. They found their solution in Octane from that perspective. You guys asked me earlier about like how I would sell this, sell Solid to an AI company.

[05:10:15.19] My argument wouldn't be performance. My argument would be just better. Like it's structurally better, more observable. It just it has more power. It goes beyond the constraints that React or the BDOM has or any system that would tie state updates to components.

[05:10:35.22] But short term, man, this is very compelling.

[05:10:46.25] Like, I don't know what I think about this. Like if you're TanStack making agnostic project, you would welcome this because it's another adapter in your set and you are a maintainer of adapters.

[05:11:03.15] But if you're ShadCN, who has no interest in supporting anything directly other than React, here's the thing, is every single one of these packages basically a slot fork in a sense. You have the code, but you don't have the maintainer. This is a very fundamental philosophical question in this. And it doesn't matter if it's faster. It has more performance.

[05:11:33.13] Like, this is wild to me.

[05:11:38.26] If you work for an AI company and have all the credits, This is like buying the ecosystem.

[05:11:50.14] I mean, like, like, where was it?

[05:12:07.22] Dominic's— Octane is far more— yeah, this is, this is important. More than a faster version of React. Inferno tried to be that and it succeeded to some extent too. It powered Facebook's KaiOS, millions of users, blah, blah, blah, for low-end devices that need memory use and high performance. Exactly.

[05:12:21.03] However, Octane provides far better developer ergonomics. It changes the React in key areas that fall short, such as hook usage and even things on set state. Arguably, a lot of these ergonomic issues are the same benefits you get with Signals or compiled Signals, to be fair. More accurate thing, third argument thing, but little details improvements, but it's React compatible, unlike those, which is huge. Not only that, but Octane provides genuine API support escape hatches like useLinkState.

[05:12:45.21] Again, every single library ships with something like that. Octane is much better than others with the freedom, the innovation, and breaking changes in a world where humans no longer run the major code, the transition now easier than ever because of AI, which is true of basically any non-React framework.

[05:13:01.02] Is there an interop mode to run React packages in anything? Actually being ported to Octane is first-class support. All TanStack packages for sure will support Octane. I've already forged an Octane adapter and the rest are on the way. Is he involved in the Octane project or is he TanStack?

[05:13:16.03] Yeah, he's in TanStack, that's what I thought. So as I said, if you're TanStack, this is, this, you're, you're already like, this is your mode to mentality already. If you're the rest of the ecosystem, it's interesting because yeah, I find this aspect more interesting arguably than the framework stuff. We know where performance sits today and Dominic's pushing those benchmarks, which is great because it'll make us all faster.

[05:13:46.29] But this is the actual pushing point is what I'm talking about here with the ecosystem bit. I didn't notice it at first when I did it. This.

[05:14:02.23] And the other thing I realized was Octane doesn't have all the features, like kind of like Redact, they cut the features out of React that they didn't think were, were useful. Do you know what I mean?

[05:14:16.22] It's, it's, it's, it's not a full compat story either. So from a marketing standpoint, that doesn't matter, but it's, there's implications of this. And I, on the same day, cause I started thinking to myself, I'm like, I wonder if people think innovation is dead in frontend at this point. It's just incremental performance gains. If there isn't anything to gain architecturally by changing the formula, it would partially explain why there's resistance to move past old React and excitement around things like VNext or Redact, the lower excitement around things like Qwik's reusability.

[05:14:48.14] We're never going to move past React unless we move past React. Yeah. This is a gut reaction. Because when I saw Octane, I was like, this is cool, but you're just encouraging people to do the wrong thing in a sense. Dominic doesn't think it's the wrong thing, to be fair.

[05:15:03.20] Yeah. And he has the experience to kind of make that decision because he did work on Signals frameworks. And it's quite possible that in the seeking of pure performance, he is right. Like when you're looking, like he's optimized for that component layer to the point that it's possible that Octane will stay ahead of everyone else because of the way he's designed it. Like maybe, maybe those benchmarks are not reachable in, in, in the others.

[05:15:33.18] Like maybe we will never close that gap. Like this GeoMean shows that Vue Vapor is almost identical to Octane, but maybe this is out of date.

[05:15:46.16] Maybe it's very small, maybe it doesn't matter. But that's not really what I'm arguing. I actually think fundamentally that components and data flow are not the same thing. And I think that's a way more fundamental question.

[05:16:05.10] And I think it's okay to have both perspectives exist in the ecosystem. But we need— it's hard when React already has pushed out a lot of other thinking to be able to like, have another solution trying to like prolong this, because in a sense, this is just prolonging React in a way.

[05:16:39.18] I imagine Octane could support React Native.

[05:16:48.29] Yeah, I mean, this is, this is, this is my concern here. And I'll talk about React and PADD in a second.

[05:16:55.23] Because if performance wasn't enough to push the dial, I for humans, like, hopefully agents will, maybe OpenAI, like, maybe the angle is that you get to the, you get to the point where the agents decide which framework, and because of the alignment there, the agents will just start making stuff in Octane instead of React. Maybe, like, maybe that's the argument there, but they could also make that in a different framework too. But what I'm getting here is this, this had a whole open discussion. I don't, I don't ever be like, I wish I had a fast React. See, I think Dominic kind of probably saw this and responded to it a bit.

[05:17:29.26] I'm not just saying that Octane is just faster React. I, but I think a lot of the people who, it's kind of like when people saw Solid initially and they're like, they saw the JSX, they thought Solid was faster React. Every time that happens, people hype around it when that isn't the point. Right. Thanks to Preact Inferno.

[05:17:48.08] There's never a bottleneck. If teams are pushing boundaries in ways more than those, it'd be faster. We talked about on stream, React does a lot of things better than everyone else. Especially when it comes to design space. But I understand if a lot of people, when they see Solid, they see a lot of popular, probably came for that.

[05:18:01.23] They just missed the point and maybe still are. Sarah Drasner, bigwig now at Google, used to work on the Vue core team. I don't— and basically leads all like the Angular and framework platform side at Google. I don't know if she still does, but the last I talked, I don't think it's dead, but I think it'll evolve in ways to use LMs do have their defaults, which means being purposeful to guide them. Developer experience has finally changed now that people don't author code the same way.

[05:18:26.02] Performance, however, is still maybe even more critical. And what did I say? I still see places for architectural wins, not just speeding up existing processes by redefining the boundaries. Yes, primarily for performance, but also structurally and code guarantees. I do know people tend to bucket things as UX and DX, and DX has fundamentally changed.

[05:18:41.26] But that's just interface. There's still new capabilities to unlock, ways to fundamentally change the model, and sometimes just defaulting to what is there is in direct opposition of creating that change. Change. I'm also alluding to Solid 2.0 and all the stuff I showed on stream.

[05:19:02.22] This is an interesting one from Matthew Phillips. I think two things are happening in parallel. People are looking at code less and less, and this is especially true of newer developers, so they don't pull to try new things. Yeah, I'm feeling that. Framework decisions is made by fewer people than in the past.

[05:19:14.05] We're approaching a world where the people who build agents and work on right systems are the ones who are most influential I see. So framework authors should be working at AI companies. This is kind of foreshadowing what we talked about earlier. That's it. You know, no, people are saying you just need to get in the loop, which is fine.

[05:19:34.14] No, I talked about training here. I mean, tools like Lovable, Bolt. You need to get in the harnesses. Okay. Jared Palmer, another big name here.

[05:19:42.13] VP of Cognition, but you guys might know him for being VP of Engineering at Microsoft, VP of AI at Vercel. Creator of v0, founder of TurboRepo.

[05:19:54.10] React, Vue, Svelte, etc. Are being the last JavaScript used directly by humans.

[05:20:01.26] I can agree, but that's not what I'm talking about. There's still architectural wins we have. See, every time I talk about innovation in front space, people think I'm talking about DX. And it's kind of funny because a lot of frameworks basically tried to sell on DX for years. That was their thing.

[05:20:14.28] I've never tried to. I didn't My style on DX has always been a little more subtle. It's been like, let you build the right things most minimally. It's always about baseline. It has to be the right thing.

[05:20:29.20] Like, it's not about like, this takes less characters to write. It's like, like the simple case, it's like, the output of this is structurally correct. It updates less. It's kind of like the guarantees people get out of compilers, but I spend a lot of time building that into the runtime. So when I talk about innovation, everyone assumes that I'm talking about authoring, and I'm not really talking about authoring.

[05:20:52.17] I'm talking about structural.

[05:21:04.20] A lot of people see LMM compilers or frameworks in their mind as an implementation detail.

[05:21:11.05] Right, because they're deterministic or whatever. The funny thing is, I mean, LLMs aren't, but the funny thing is like, Spell had a compiler and then it adopted Runes.

[05:21:30.00] Like, sometimes, like the runtime matters.

[05:21:38.09] What can you— well, in a framework like React or like any kind of like VDOM re-render kind of mentality thing, the state is owned by the component, which means that on an update, it is the component that runs. It might be a portion of the component, it might be sliced, it might do anything, but it might be memoized, it might be all these things. But generally speaking, there is this tight coupling between the component and the state and how it travels through the tree. Whereas something like a signals framework, the location of that state or data flow is independent. The component's never rerun.

[05:22:12.20] So like, there's no, it's not a tight coupling. Like sure, it can live there and be released when that component goes away. But these things are not tied together.

[05:22:26.03] Imagine selling a code through the memory lines that takes like counter zero. I mean, I feel like we're micro kind of in that zone right now. Or are we going to go there? I think chasing compilers is one way and like improving the language. Like I spent a lot of time building these primitives.

[05:22:43.08] So arguably a compiled version of those language primitives into a language is a direction people go. My problem right now is when I talk to people about AI and stuff, it's all like hand-wavy stuff because it's like, AI is a great tool. And it's like handling that interface part. It's handling the IDE. It's the shift left, you know, it's that whole thing.

[05:23:02.29] But we should be talking about what we're actually building. Like architecturally, like, what are we building?

[05:23:11.01] Like, AI makes it easier to build. But what are you building?

[05:23:17.14] Has what we build Will not change? Is it fundamentally changing? It's always changed historically. People are picturing AI changing the way we interface. That's a more interesting question.

[05:23:29.16] Does that mean that we should value streaming more? Does that matter? The stateful server is a thing that we should go back to. Like, what's the interface? What are we building?

[05:23:39.27] Stuff like the language level or compiler level optimizations on that side. The LLM is in a sense almost like the compiler. Once we figure out what we're building, figure out architecturally what we're making, then we can optimize the compiler to fit the language and the intent, and we can go there. But it's a last stage optimization.

[05:24:05.16] Yeah, I'm not saying DX is irrelevant. I'm just trying to clarify a bit on the structure, the difference between, like, systematic structural considerations and, like, syntactical surface-level things.

[05:24:21.00] Framework author works at big company, big AI adopts framework as default, might be the only path forward to mass adoption available post-LLM, maybe.

[05:24:43.27] Yes, yes, this is what I've been trying to say. DX is about properly expressing intention in code and preventing unintended behavior. I think architecture is more relevant to the goal than syntax. Yes, yes. But syntax is relevant for things that read farther on the left side, things like AI and whatnot, and humans.

[05:25:01.15] To be fair. So there is a lot of research into this. So it's very natural for someone who's like already in that zone to actually optimize on that zone. That seems like an obvious place. As I said, that's not where I live.

[05:25:12.12] I want to know what we're building. Someone tell me what we're building and what problem I have to solve. I have some ideas on how to solve these, but it's what are we building?

[05:25:29.17] No one's going to use Angular. Oh man, Angular Shade.

[05:25:40.13] Uh, got Sarah on screen here. Nope. Okay. Um, uh, This is my love letter to Fable. You guys don't care.

[05:25:55.15] Fable is just better than everything else. Sorry, guys. Moving on. Okay. Similar.

[05:26:00.24] React compat has been a trap. No compat library is completely compatible. They usually fork because they don't want all the features, want to be something more performantly.

[05:26:10.15] A compat layer gets out of date or features diverge. A library adds features and React does something different afterwards. We saw this with like Remix, you know, and Suspense and all that stuff. At some point, a good percentage of those users revert back to React because of something they don't have, right? Classically, that's been missing libraries, or, you know, like some kind of weird bug because of like some Suspense behavior or something weird.

[05:26:32.03] Like I found that with Preact way back in the day. 4, migration ecosystem never happens, as in it just works. You don't get your own library version if React version is just more mature, right? No one makes their own like like, you don't get your own unique stamp on it. You get, you get the React version.

[05:26:50.25] Now, the funniest thing about this is what Dominic's doing with Octane bypasses like, it falls into a few of these, but actually bypasses a bunch of this. Like the migration ecosystem is happening because AI is funding it. And so it does just work. And in a sense, you do get your own library version.

[05:27:14.21] So, and will a good percent of those users revert back to React? It's something they don't have. I, I don't know if that's true anymore. Maybe, maybe not. It's, this takes React to look attractive, like new async React stuff that might, you know, not be fully represented in no one's, the problem is React has stalled, which means that anyone claiming this stuff might actually have a leg up.

[05:27:39.08] Historically, as I'm saying, this is a trap. But if we believe React has basically stalled, victim of its own success, this is true.

[05:27:49.29] I think the first two are actually still completely considerations with Octane.

[05:27:56.03] But, and maybe this is old-fashioned thinking. I think the real trap is you don't get the people. I remember when I did the first SolidJS hackathon, which reminds me, how would you do a hackathon in this day and age? Looking for ideas. The submissions are great, but that wasn't the win.

[05:28:10.24] It was the people that made stuff in Solid. They found their niche. The creators of Solid's most prominent component libraries came on at that point. It wasn't the thing they submitted, but they were there. And that's the bottom line.

[05:28:20.05] Ecosystem is not technology. It's people. It's not the libraries. It's the people. I want to have actual— the creator of Sagiyan working in my ecosystem.

[05:28:28.17] I know he's working in React, but like, it's his vision. That made that library appear. It's the people I want. Just replicating the output is shallow.

[05:28:40.23] Compat is always just playing catch up with something else, which is maybe arguably fine if it's pinging every hour, you know what I mean? If it gains its own ambition, it's no longer compat. That's what I meant about the short-term part. It's why I don't think forks of— in the age of AAR are really consequential. They are just another acknowledgement of the popular solution.

[05:28:59.23] So I mean, this is capping off what I was talking about with VNext and the last kind of post.

[05:29:09.01] Joe, Joe V works in Preact. You don't get the people. Preact has 27 million people, but you don't hear about us. People who talk about us are the ones who realize we've had as the feature original core, not the main cell. Yes.

[05:29:20.04] So what he's alluding to is when dot people, they still get the users. They, and usage, they just don't get the community aspect of the people shouting about it or moving it forward. And if you take it from that perspective, do we need people shouting about it more in an age of AI? Does anyone care to talk about this anyway? So like, maybe this just gets swept under the rug.

[05:29:40.03] Like, maybe you want to be Preact, you want to be used, 27 million weekly downloads. Like, maybe that's, that is the win, you know, being relatively quiet, but being used by all like, maybe that is actually, you know, technically that is the win, right? You're adopted. I find it uninteresting, but you're adopted. I think that, so I mean, this alone, let's, you can look at Preact's growth over time.

[05:30:15.09] NPM trends.

[05:30:22.05] React is one of the— my favorite version of this is actually Tanner's one where he compares about it. But React is one of— look at React's growth trend. Do AI.

[05:30:38.06] I just Let's look at React. AI.

[05:31:05.04] This the right one?

[05:31:20.25] I have a theory about this.

[05:31:30.07] Hmm. To be fair, these spikes are actually killing the graph.

[05:31:38.04] You know what, let's do 3 years. 2 years? Can't see it.

[05:31:51.16] This is the problem.

[05:31:57.05] AI. JSX frameworks.

[05:32:01.29] Tend to have— be having this curve right now.

[05:32:14.22] Yeah, you got— you guys got it.

[05:32:41.04] Communities might be shrinking. I haven't noticed it because Solid's been growing at a good clip so that we have like, we're small. When you're small, you don't shrink. You know what I mean? Like, I mean, you can shrink, but I guess, yeah, hard to say if they follow the JSX trend.

[05:33:15.01] I was just trying to, I was just trying to see if, okay.

[05:33:24.06] And here we are chatting about, there you go. Yeah. See, there's people who still want to talk about it. We're here.

[05:33:31.24] Yeah. Solid, the Hackathon Foundry, library apps, ecosystem is so cool. Yeah. I love this because it encouraged people to, people, because what happened was when the dust settled, we had new Solid users that were invested in the community. It's the best thing we ever did both times.

[05:33:52.17] I don't know.

[05:33:55.04] Ports get out of date.

[05:33:58.01] What do you think about Octane?

[05:34:02.08] I, so yes, I, my feelings about Octane are complicated because on one hand, it's like incredible piece of engineering. I think that it represents the, today at least, the epitome of the, that the other side of, of the approach from like a performance treatment line thing. I still have a lot of respect for React though, because of their work into async and their design and their vision there. And I worry that we lose that sometimes.

[05:34:35.10] But the more interesting thing is the thing that I don't know, which is like, how do I feel about this?

[05:34:44.17] Look, these were all updated 5 hours ago. Completely up to date.

[05:34:51.11] Like, man, you know what I mean? Like, this is, this is just a whole other thing. Because I said, I wrote this post historically intentionally. I don't know if it's a trap anymore. I might not be happy about aspects of it, but I actually don't know if it's a trap anymore, if the key pillars actually have changed.

[05:35:25.05] Well, I mean, the funny thing is I've been using LLMs like crazy to develop features that that like don't exist. Like, cause I have, I have an idea of where I want to go with things. Like I have, I have features, I have approaches, I have designs, completely new unbounded space. No one's ever done it before. LLMs have let me get there, realize that vision, but I'm targeting something that's, that, that's brand new.

[05:35:50.18] Using it to target something that's existing. It's just, it's, this is just so fascinating.

[05:36:02.29] Yeah, how do you— it could be the best technically, politically, visually, and still get dismissed. Even if you're an AI company, it's still new concepts. Yeah, I don't know, Jack Shelton, which if you closely look, if you're who I think you are, Sorry, I just opened it.

[05:36:30.21] Yeah, Quick. That's the— yes, exactly. I don't know. I didn't want to say it ahead of time. I'm like, this guy's evolved with Quick.

[05:36:39.21] I— it's hard.

[05:36:47.11] Like, because it's like, there's different approaches. Like the classic one for Qwik example, it's Qwik is better than every framework in certain ways. And Qwik is like, Qwik is the only framework that has proper deferred hydration. No other framework, Marko, but no other popular framework has proper deferred hydration. Everyone who offers that feature is a liar and it's broken and it's terrible.

[05:37:11.26] But like even, and Qwik has a niche story especially like Qwik's in general framework, but its niche story in terms of its loading story and stuff is incredibly compelling to like a certain class of users. So you could even have a niche market of people who want to use it, but it's like, people don't care about performance. People maybe don't even care. Like I keep on trying to paint a picture of like, how easy is to go from your head to what's on the page and get the optimal thing. That's what I always talk about.

[05:37:53.25] So I guess I do focus on DX a lot, don't I?

[05:38:01.10] It matters with AI writing the code. It definitely matters.

[05:38:05.26] But Oh, here. I got fine-grained code splitting in C2 without changing the API via semantic analysis, but still running into edge cases with Cobalt. Need to look at it more. Yeah, yeah, that's right. You're going to see where we can get on that topic.

[05:38:29.14] That's awesome. Specifically on the RT. Yeah, that's awesome. I want to review on that. Yeah.

[05:38:36.04] When we get a chance.

[05:38:44.17] Yeah, everything's new concepts. The things change.

[05:39:06.02] I don't know. It's— this is one of those lofty topics because we started with Octane and I knew we'd move into AI. Um, I try and keep optimistic about this stuff where I can, right?

[05:39:22.06] I mean, I'm kind of excited. I've lamented the death of cool web tech demos and the way AI has shrunk in the audience. I feel like I've got some new ones on the way that will have us imagining the limits of what's possible. It's been too long. To be fair, these tweets are related to each other.

[05:39:34.06] I had a crazy realization today, really foundation shifting. I'd write an article to share it, but I'm too busy working on implementing things.

[05:39:41.22] AI to draft it, but since everyone seems to hate AI pros, I won't share it. And then I got ratioed for the first time ever, like really ratioed on here. Where is it? Where is it? Thank you for not sharing it.

[05:39:55.26] 400. Yeah, I've never been ratioed on this platform before, like complete double ratioed. And the funny thing is they're agreeing with me as a ratio, which is hilarious. But you could tell with the tone here, I'm, I'm, I'm actually saying people are morons for not accepting AI, like, like judge stuff on the content, not on the writing. Part of my bias probably is because I like AI written stuff.

[05:40:21.15] Stuff. Maybe I talk to AI too much. I find it clear, articulate, to the point.

[05:40:30.06] Um, I, I, I lit— I don't like when I read garbage marketing AI stuff. It's not the writing that pisses me off. It's the content. It's like, you're like, these guys are saying things are factually incorrect. They're repeating, um, catchphrases and things that like, aren't actually making an interesting point.

[05:40:53.15] You've all seen that slop. And when I read it, I'm just like, you know, what framework is the best? Solid is for small performant apps. Svelte is good because it compiles away. Like it hasn't done that since Svelte 3, you know, like, like, like that bugs me.

[05:41:16.13] AI-isms in the writing don't bug me at all.

[05:41:21.04] I find it compelling. And I think I'm in a very small minority here. Which is the thought of me that someone would sacrifice content for, for, for that is insane. Which is why I got here, because I think everyone read that off my tone, right? That's why, because there's a bunch of people who are being like, being like, oh, you could share it with me, please share it, please share it, I want to know, you know, I'd love to take a look, right?

[05:41:52.11] But I knew that I would, I would get something like this. I was fishing for it, kind of like, like You know, see, look at this conversation.

[05:42:30.09] I think you can either clear your thoughts. Pretty sure that means you should delete your account.

[05:42:39.15] I, I, maybe some people just don't understand, like really just, it's just like this is at a different complete perceptual level that they just, yeah, I don't get it. Maybe this is my own misunderstanding, but It's fine. This was the smartest thing I ever did. Because I, if I posted this, I would have been, it would have been a mistake. I didn't post it for the wrong reasons.

[05:43:05.06] But I'm glad now that I didn't post for the right reasons.

[05:43:15.02] And let's face it, this RC article, sorry, I didn't mean to click that. This RC article was AI-assisted. I got— we got on Hacker News and everyone was talking about it. And when I say AI-assisted, I didn't— I don't mean AI wrote the article. I mean that I wrote an article, AI edited it.

[05:43:38.10] So it was like actually readable.

[05:43:43.03] Then I went through and re-edited and got all the like really bad kind of AI parts and then send it for feedback. More people said I should add these parts, added them. The writing was bad again, send it through AI again, did another edit pass, so on, right? And, um, the, the final article is, you can see that where AI touches it, like there's a few little, little things in, in there. It's mostly very heavy in bullet point sections where AI keeps it it short and to the point, these kind of sections.

[05:44:20.24] But then you can definitely see like, um, the human part come out, especially in the intro and especially in, in the ending. And, you know, like, there's definitely AI-isms in here, subtle compared to some, some stuff, definitely. But I I ultimately think the product of it is better. I'd argue with anyone. And I did on, on, on Hacker News.

[05:44:52.24] Just, I'm only bringing this up because it's just a noise to me. Anyways, how's chat doing?

[05:45:03.11] I think there, there is a compiler lowering the render model to data where you can see SSR is a good cool thing, I guess. Rust code and compiling native. Interesting.

[05:45:44.27] Anyway, I don't know.

[05:45:53.26] There's actually, I don't know how deep I want to go into it. But there was actually in the Hacker News, I actually showed a before and after response in one of the comments.

[05:46:10.14] I thought it was kind of funny because, yeah, the AI response wasn't great and it needed editing. Yeah, what I said before, the AI tone in the announcements line up to barely be noticeable, but it's there. Before, anyone who has spoken to me knows I talk in run-on sentences. I never complete a thought without interrupting myself and I always writes the way I talk. I used to heavily edit that out of my writing, but now AI uses proper punctuation and fills in where I miss words.

[05:46:36.16] It's like what I hear in my head, but better because it's grammatically sound. And then I have like AI version, which I don't 100% like, but I just did it. If you look, it's actually less characters, which is usually what happens. AI makes my writing shorter. Anyone who's spoken to me knows I talk in run-on sentences.

[05:46:54.21] So they just made it who's. I never complete a thought without interrupting myself, and I talk the way I write the way I talk. I used to spend whole editing passes beating that out of my drafts. Beating that out of my drafts is probably not my phrasing. And now AI handles punctuation, the punctuation and fills in the words I skip.

[05:47:15.18] It's what I hear in my head, but grammatically sound.

[05:47:20.27] Not much change, but I actually I like parts of this better. And it's shorter.

[05:47:29.11] I prefer the former word. It sounds human.

[05:47:34.21] I've heard them before. Whole editing passes be able. I hear my head ground. Might be the meaning it has honestly and load bearing, but there are phrases you'd expect a magazine article, not a forum comment. That kind of language is kind of just phallic AI.

[05:47:47.10] Yeah, that's true. And then someone's like, what's an editing pass? It's when you go top to bottom reworking parts of an article. Often later changes can impact earlier prose. So often I end up doing several editing, editing in several passes.

[05:47:57.25] That said, AI decided that term. It's more actually more accurate to the actual process than what I originally wrote. Um, and there's someone else like saying about condition and I, because I used it in a medical condition. This was something that I actually wrote in the original draft, but people look because it seemed esoteric, people assume that it was AI that came up with it.

[05:48:19.06] Is Claude really that bad though? The problem is never— every April Fools' treat is a condition that happens to it. Async as a condition, a condition that happens, and on grammar, its framework. I'd rather expect this as second-order output, writing of a brain rotted by AI.

[05:48:35.10] Maybe that's, maybe that's the correct thing because they're closer to correct than the people in the article. Right? Because condition as in like a cold, like I use a lot of— yeah, anyways, I can't gripe on this too long. I just, you know, technical writing with AI tends to lack empathy for people less acquainted with the specifics. Yeah.

[05:49:06.13] And my own writing already is like that.

[05:49:11.26] So like, for me, this is like a perfect match. I read it and I'm like, oh man, I wish I'd said it that way almost every time. Like there's a few things like beating out the past. I'm like, okay, that's not the phrasing. But like 90% of the time when I read AI, I'm like, oh man, that's, that's like so much better.

[05:49:27.22] When I get AI to write an article, I'm just like, what the fuck? You're, you don't get it. What the hell are you talking about? Like, if I wasn't there at the start to write the article, what AI writes is just usually terrible. Like, it usually, it doesn't get it.

[05:49:42.04] It kind of like focuses on the wrong things, doesn't have the flow. I mean, I guess it could be an article, but it's not the article I ever want to write. But on the, on the other side, and I think that's the thing, most people maybe use AI to like write the guts and like like the identifying, I write the guts of the thing, and then they go edit it heavily or rewrite it essentially to put in their own wording. Where I write an article and then decide that AI's wording or phrasing is better than mine, which drives people nuts, but the content is there. So like, whatever.

[05:50:25.17] Hank Green got canceled for, and I appreciate the pushback that he didn't even copy from here because these are real words in the English language. And if you talk to an agent as much as I do, or some people, you start just adopting the phrasing because it makes sense. You're like, this is actually a cleaner way to talk about things, you know, talking about constraints, talking about, um, in our case, the graph and the model are actually completely relevant. People say AI talks about graphs too much. I am literally dealing in a graph all the time.

[05:50:54.16] Yes.

[05:51:14.21] AI is impressive in any field where you're not a professional. Exactly.

[05:51:25.03] It's all good, Fuzzy. I'm wrapping up here anyways. It's been a long day. We're coming on 6 hours. People are gonna be like, what the hell did you talk about for 6 hours?

[05:51:32.26] Well, the first few hours were solid. The rest were garbage. No, we're caught up to date. It's just been so long. And yeah, I think we covered everything, didn't we?

[05:51:56.18] We covered the bookmarks. Yeah, we covered the content. We covered— I didn't highlight any of my reposts. But I'm pretty sure they're all the same stuff that you've seen it. Oh, yeah.

[05:52:11.18] Oxc for TSRX. Thank you, Jack.

[05:52:17.11] Very interesting. Marko is also building its own server component granular thing. The space of server components is a lot more wide open than we initially think, thought. A lot of people treat it like islands or like HTML partials. But I think there's a lot more dimension to it than what we, than what we realize today.

[05:52:44.01] Looking at something like DataStar actually helps you realize that and gives hints at how you can clear the whole spectrum. Anyway, I think That's all I got for today.

[05:53:05.03] You know, we got here, it's like we can't talk about techno merit, then about AI writing.

[05:53:17.09] See, really stream all day every Friday. Yeah. Yeah. Yeah.

[05:53:25.01] All right. Not every Friday. It's more like every 2 or 3 weeks now. It's gonna be another, probably a little while. I got some writing to do.

[05:53:34.05] I need to write some articles to explain all the stuff I explained at the beginning of this thing. Hopefully you guys found some clarity there. Every time I explain it, I feel like I find new ways to get the ideas out. I think, I think the structure and what we're doing with Salt 2.0 is really compelling, but But it's going to be interesting to figure out how to make that impact people's everyday life in a positive way. I think there's some good foundations to build on though, like really good foundations.

[05:54:09.03] And I think we're uniquely positioned to leverage them. So yeah, anyway.

[05:54:15.11] All right. You guys all have a great weekend, and, uh, until next time.

