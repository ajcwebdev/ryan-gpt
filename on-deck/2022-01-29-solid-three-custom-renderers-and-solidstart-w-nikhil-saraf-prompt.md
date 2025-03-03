---
showLink: "https://www.youtube.com/watch?v=lsWXyyEsw7E"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Solid Three, Custom Renderers, and SolidStart w/  Nikhil Saraf"
description: ""
publishDate: "2022-01-29"
coverImage: "https://i.ytimg.com/vi/lsWXyyEsw7E/sddefault.jpg?v=61f47ab6"
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

[00:00:00]  Hello, welcome to my stream tonight. I'm pretty excited to have a guest on today. We're trying this for the first time, but he's a big contributor
[00:00:14]  in the Solid.js community. He's been doing a lot of really great recent work, and I honestly am kind of excited to sort of take a break this week from
[00:00:23] , you know, teaching people stuff and learn a little bit something myself about how these things go. So, I'm pretty stoked to have him here. So, we
[00:00:30] 'll be getting with him in a little bit. Hey, anyone join the stream? Say hi in the chat. It's always good to say hi. But yeah, on
[00:00:43]  the other side of things, before we get started, I'm going to do a little bit of this week in JavaScript. I'm going to get right into it.
[00:00:57]  This week's been a lot about performance, kind of surprisingly so. Oh yeah, people are joining in. Hello? But yeah, a lot of performance talk this week
[00:01:16] , which is kind of interesting because, I mean, let's face it, performance isn't everything as much as, you know, when you find people like myself who spend
[00:01:26]  a lot of time in performance because we want to build the tools that are, like, we can't anticipate all the different things people will throw at our tools. So
[00:01:33] , we always want to try and tune them the best we can. It's not that often anymore that performance comes up as a topic, as kind of like from a consumer
[00:01:44]  standpoint. And I think that's really been a distinctive part about this past week in JavaScript. I'm going to share my screen here. Let's see here and show
[00:01:52]  you what I'm talking about a little bit, right? A couple things was this comparison came out, you probably saw this tweeted around the web, but it was this
[00:02:06]  article here from Line Engineering, where they went through and just looked at the state of things in JavaScript. And they covered everything from mobile device usage to average JavaScript size to
[00:02:16] , you know, just a bunch of different factors. And the thing is, they chose for the cover to use the JS framework benchmark, essentially converted into this table. And
[00:02:29]  I think it's kind of funny because the way it's presented kind of really skews the perception of reality, but it did cause a lot of conversation. Um,
[00:02:40]  this week because people were like, Oh, you know, like a couple of these comments, you'll see things like, like, don't be in the red. I
[00:02:48]  think I saw a comment like that where, where people are just like really commenting on this performance aspect. And as I said, the problem with this chart is from a lot
[00:02:57]  of frameworks, the only, or a number of frameworks, the only reason they're in the red is because of memory allocation. And, and it's not even that bad
[00:03:04] . Like they're saying like, this is like, yes, double vanilla JS, but like, we're talking about in this silly demo where we're putting in 10
[00:03:15] ,000 rows or whatever. We're talking about the difference, uh, between like, I dunno, I think it's like two megabytes and four megabytes.
[00:03:24]  Um, so this kind of really weirdly skews, um, the results in a sense, and we're having memory to take such a big part of this instead of focusing
[00:03:35]  on actual performance and startup. But, you know, for a lot of people, this was an eye opener. I saw some retweets or people like, I
[00:03:41]  didn't realize angular react were like so far down on the table. And, and, and I feel like maybe that should be obvious to people because popular solutions do tend to
[00:03:51]  tend to be, you know, not, you know, they're, they're maybe less hungry for the quick wins on performance and they have other, you know, elements
[00:04:00]  to consider. But in general, this is a really good, uh, push for solid because for a lot of people seeing solve for the first time. And the,
[00:04:08]  the, it's pretty obvious from the performance numbers, at least solid is very far away from the other frameworks. Um, so, you know, that was interesting. Another
[00:04:16]  interesting one that I think I want to pilot and bring up was, um, from this, this thing from amazon.com, uh, service side render everything. Amazon
[00:04:27] .com is a service side rendered. It has no client side rendering framework. The potential latency hit didn't justify it. We were stuck with jQuery 1.6.
[00:04:34] 4. SSR react wasn't fast enough for us. This blew my mind. And again, this is another one of those ones, but probably blew a lot of people
[00:04:43] 's minds. Um, I work at eBay, so I'm not surprised by this. eBay.com, um, is not built with re react as many, you
[00:04:53]  know, it's built with, with Marco. But like we, we built a framework specifically to handle this use case. I mean, the, the cold hard facts are
[00:05:02]  that like a react app with full hydration and that wouldn't really cut it for this use case. It's the reason why Marco exists the reason why quick has been getting
[00:05:12]  developed. And what's really cool. It's ready. They showed a bunch of things. They tried, talked about different approaches and basically like felt like they're kind of
[00:05:23]  stuck, you know? And, and, and that's, that's something I'd say I can relate to. I don't know if you guys would be aware
[00:05:28]  of this, but at eBay, every page has like, um, analytics metrics that we capture. And like when we release a new feature, if there's a pit to
[00:05:38]  page load, like someone's getting a review, you know, someone's going to come knock, knock on someone's door because essentially even a couple hundred milliseconds on a slow
[00:05:48]  device translates to sales. So it was really interesting to see on the Amazon side kind of cooperate this, uh, right. Because they aren't using react, right?
[00:05:59]  Like there, there is challenges to performance with our, our modern single page app frameworks. Right. So I think, I think it's, I think it's, it
[00:06:09] 's definitely interesting to see this focus on performance again. I mean, this has kind of been the conversation in the background, um, since last year, a lot of popular
[00:06:19] ized. of similar partial hydration techniques, things like Astro and quicker starting getting conversation. But it's interesting to see big companies like Amazon talk about this openly. Um
[00:06:27] , after seeing this, I kind of, kind of decided that it'd be really cool if maybe even talk to some people, eBay, um, about us kind of talking
[00:06:35]  about it openly in the same way. Cause I think people need to know like the realities of these things and like understand like why we built Marco and stuff. I think
[00:06:44]  it's kind of interesting, compelling story. Um, and then the, the third side that we've kind of seen this performance conversation a lot is remix, uh, run
[00:06:53] , you know, it's been getting a lot of attention. They've kind of built a lot of best practices of the web back into, brought it back into react
[00:07:01]  apps and people kind of unaccustomed to it. And they're also kind of responding well to it. Um, remix does for, for react app, um, set
[00:07:09]  up, have really good performance, you know, comparatively, maybe not compared to like other solutions, but like for something that's using react. It's actually quite
[00:07:19]  impressive and, um, I think because remix has been really pushing the performance angle, really, you know, trying to push it. And people are like, no, there
[00:07:27] 's, there's other things, you know, um, Ryan Florence, uh, critter reactor on a remix actually had this statement. Um, which was, I used
[00:07:35]  to have a better feel for the pulse when I was traveling and meeting with. Dev teams and local media, but dev Twitter trends and the real world don't always line up
[00:07:42] . And obviously that's, that's true. Like the difference between the kind of mind share that online communities have with just the people, you know, like hit the
[00:07:49] , hit the ground, people building this, the real, um, applications. That said, there's a papal feeling that folks are ready for a post react world.
[00:08:01]  Right. You know, and he, and he actually goes as far as mentioning felt quick, solid, and Marco about interesting qualities, right? Some freak me out, compile
[00:08:09]  your stuff, but they are all super interesting. I can't read the experiment on them. He's basically saying that remix wants to embrace these. And it's a
[00:08:16] , it, it's a position that I, that I can understand, right? Because it helps broaden the platform. And I think the thing is remix was really trying to
[00:08:22]  push a performance angle. And the thing that kept on hitting was react. Oh, right. I still have discord on. Give me two seconds. Um, so essentially
[00:08:36]  there, there is this shift, right? Like when Ryan Florence, Michael Jackson, and Kenzie Dodds are three of the, probably the most devout react people,
[00:08:49]  you know, um, out there. And when they're kind of putting this into perspective, it's really cool to see for, you know, the web ecosystem team
[00:08:58] , you know, in general. Right. So I, I'm, I think this is interesting. I mean, it's just, it's just showing kind of this
[00:09:05]  kind of potential openness to these ideas. Mike, Michael Jackson actually, uh, did a bit of a dive into, to solid. He actually posted something on Twitter and
[00:09:13]  he was like playing around the reactivity and it's cool. Cause he's really excited about it. He's like telling people about it. And truth of the matter is
[00:09:19]  like, he just got to the, like the surface level, you know, hasn't, hadn't gone deep enough to see maybe, you know, some of the trade
[00:09:27] -offs or seem like eat what actually makes solid really compelling. But it was enough to kind of under see the differences and see the, the kind of benefits immediately.
[00:09:35]  And I, I thought that was really cool because, you know, I've always found that the people in the react side have been really supportive of, of solid generally just
[00:09:43]  because maybe the shared philosophy, but it was really interesting to see these, like, as I said, known react supporters, like very much in that camp. Be like,
[00:09:52]  you know, this is kind of cool. Um, yeah, what was here? Not really the e-commerce, but Amazon lives built react. Yeah, definitely. Like
[00:10:01] , like, don't, don't get me wrong. And this is the same with eBay or any large company. You're going to have teams. You're going
[00:10:07]  to have specific purposes, um, to, to use different tools and frameworks. We have reacted eBay. Um, our checkout uses react, for example. Um, so like
[00:10:18]  there are places, and I think even if you go on Amazon's homepage, you'll probably find like embedded, lazy loaded react apps and stuff. There's just lots
[00:10:26]  of different widgets and ads and things that load on a big e-commerce site like that. But the, the, the key part is that for that critical page load for
[00:10:33]  that critical content, the thing that you need to like get in front of people immediately, not lazy loading. Um, you can't rely on like a typical spa framework
[00:10:43]  render and hydration as I've shown in previous streams. It's, it's just too expensive. Um, it doesn't scale. Um, that's why partial hydration,
[00:10:52]  like Mark was built with that in mind. Like you, you just can't do that with large pages. Even, I mean, maybe a preact solid or s
[00:10:59] velte, which on the smaller side could scale a bit better, but the hydration cost is a real thing, um, for time to interactive. Um, so yeah,
[00:11:08]  there's definitely places and like applications that you'll find on any large company on that. I just, amazon.com, like the actual, like where you buy the stuff
[00:11:16]  where they care about SEO. They haven't even gone into front end framework land because of the performance. Um, but yeah, yeah. Crazy. Like if you told
[00:11:29]  me this like six months ago, I, I wouldn't have believed you. Right. Like, I mean, you, you've seen what Ken C. Dodds posts
[00:11:38]  about reacts, like stuff, like, like peeps like along, like you will never need to learn another framework because by the time react, isn't the framework.
[00:11:47]  Computers will have taken over computer AI will have taken over, um, building websites. I think he said something like that once. So, I mean, this is,
[00:11:56]  this is, this is a ground. Like this is, this is a different, different, different take completely. So yeah, I mean, this has been interesting. I
[00:12:05]  mean, I've had a lot of discussions with the guys from remix. There's been a lot of, uh, performance benchmarks they've been posting some of them accurate,
[00:12:14]  some of them questionable. Like they had one where they're playing must comparing mustache to, uh, um, react render to string saying that react ready to string was faster
[00:12:24] . And like, it doesn't make any sense. It turns out they had turned off caching on mustache, but it, it kind of also doesn't make sense to
[00:12:32]  turn off caching on mustache because the static parts would be cached. So in any case, you know, we, we benchmarked stuff like this before and render
[00:12:40]  performance in react render to string is in no means fast. That being said, until you get to a very large site, we're talking milliseconds. Um, often architectural
[00:12:50]  decisions like how you lazy load or like, you know, don't block things, things like streaming make a bigger difference. but, um, that being said, it
[00:12:59]  is still a thing. So yeah, I just think it's interesting. The kind of consciousness that I've been kind of talking about, about these things this week. Right
[00:13:08] . Um, other than that, I've been doing a lot of podcasts, so I don't know if you check them out. I did JS party, um,
[00:13:16]  I did one with, uh, with, uh, where was it? The coder pad got a guy from coder pad. This is actually one of my favorite ones
[00:13:24] . If, if you do want to check one of my like random, like guest appearance streams, this is probably my favorite way I've introduced solid to date. So do
[00:13:32]  check that one out. I also did one with the coding design system guys. They, uh, did the over at the riots and they actually start sponsoring solid. So I
[00:13:40] 'm super stoked about that. It's really cool to kind of see, uh, you know, peripheral communities. Kind of come in and embrace this. Um, so
[00:13:47]  yeah, I mean, a lot of solid stuff this week, which made sense to do another solid stream. Mostly, um, uh, last week was all about react and
[00:13:56]  react SSR. And I did actually post an article, um, for, for, for those of you, um, interested in that whole thing, where I kind of
[00:14:04]  was taking all the conclusions from last week's stream, talking about how all the paradigms we were talking about all basically talk, talked about server side routing. I
[00:14:15]  would, is the best way I'd call it, where we basically like an MPA experience where you use a page. And when you navigate to the next page, it
[00:14:23] 's like a full page reload. It's not like react server components. You don't wipe out the whole page, but essentially this return to this, like, you know
[00:14:30] , full page post back, full page navigation, even if it's virtualized in the browser. And I think, I think it's interesting. I can't say
[00:14:39]  with certainty, this is going to be the future of the web, but it does seem that a lot of people are interested in trying it right now. And it is a
[00:14:46]  logical extension from what we've been seeing with patterns like react query, where people are kind of opting into like refetching the data rather than mutating caches.
[00:14:56]  This, this all kind of moves the caches out of the client and in so removes the heavy fetching APIs and libraries out of the client, which helps keep JavaScript
[00:15:07]  slim. We're going to see more of these trends. And I guess, you know, this, like maybe this shift is the next paradigm shift, you know, and
[00:15:16]  so that's what I threw out there and that's what this article is. So anyway, that that's, that's been most of this week. And for that
[00:15:24]  reason, um, I thought we, we, we do, we talk about some solid stuff this week. It's, it's been, it's been a while.
[00:15:30]  We've been talking about Marco. We've talked about react server components, you know, did some little coding exercises. And for that reason, I, I have our
[00:15:38]  guest tonight, um, author of solid three solid ink, solid MDX. And actually he's been a huge, huge, um, uh, helper recently working on a
[00:15:51]  solid starter, a new meta framework. So I'm going to, I'm going to actually add him to the stream right here. Uh, Nikhil, let's
[00:15:59]  see if I send your name properly. I feel terrible if I, if I did not, let's get, let's get you on here. All right. Sweet.
[00:16:08]  Welcome. Hey, hey, hey, hey, hey. Can you hear me? Yeah, we can hear you loud and clear. Welcome to the stream tonight. Um
[00:16:18] , I, I, I, I wanted to really look at some of the work you've been doing. Cause honestly, I think it's really cool and I haven't
[00:16:25]  had a chance to dig into it. And I, I, I honestly don't know much about this. It's kind of funny. We built a custom render for solid
[00:16:34] . Um, and I, I kind of looked at what reacted and I looked at view did and I was like, okay, we can kind of do this, but I
[00:16:41]  actually had nothing in mind when I built it. Um, this is just not an area that I have any experience with. So I, I, I just looked at
[00:16:46]  the others and I'm like, okay, let's just throw this up and see what people can do with it. And I mean, you did, you know, so
[00:16:52]  I I'm, I'm pretty stoked about this. Um, it's great. It's crazy. The timing, right? Like I think I was, uh, so
[00:17:01]  the story from my end coming to solid was that I was a react three fiber. So I was a react developer for the last three, four years. And I was started
[00:17:08]  doing the act three fiber stuff because I wanted to learn how to make games. Right. But as soon as I started making anything serious, all I had to keep doing
[00:17:17]  was adding memo everywhere in my react app. And so I was like, okay, I need something faster. And the problem with the react three fiber was that you purposely had
[00:17:26]  to like remove state from the react state model and keep it like in refs and stuff to do updates quickly. Like if you do, if you triggered react re rend
[00:17:34] ers, then you were like opting out of all the three performance. So then I started looking at Svelte and Svelte had tried to do something similar
[00:17:43] , actually very, very, uh, very recently. I think something called Svelte cubed that Rich put out. And, uh, I looked at that and I thought
[00:17:50]  maybe this could fix my problems, but there was a huge problem there where like they, they have basically done the bindings thing again. And this is like Paul has
[00:17:58]  talked about this, like with something like three, which is moving quickly, continuously keeps on improving. You necessarily don't want to do bindings because then you have to keep
[00:18:06]  changing the bindings as things change. And that's horrible. And so what, and so what's like a custom renderer allows you to do is to be almost
[00:18:13]  independent of the version of the library, because like as the, as the elements in the library change, the renderer doesn't need to worry about it. Like solid doesn
[00:18:20] 't worry about when, when the dorm adds new notes, right? Like that's, that's the kind of situation we wanted. And so then I somehow I was like
[00:18:28] , okay, I, I, but, but basically I couldn't hack the solid compiler to like start accepting three nodes. Like the, sorry, the Svelte
[00:18:37]  compiler, the Svelte compiler was like very alien to me and didn't, didn't understand the code very well. And like, just sort of splashing around, I
[00:18:45]  somehow find found solid. And you had very recently announced custom renderers, like just a month back, I think from, I think in November or something or something like that
[00:18:54] , you announced custom renderers. Yeah. I was like, oh wait, this is perfect. Like this was, it was such a good happenstance. And basically
[00:19:00]  I had a lot of experience with Babel. So I was like, this is, and it was amazing to see that the compiler is just a Babel player.
[00:19:05]  And the pilot is just a Babel plugin that I can hack around with. Yeah. Right. So just so I fully understand there's, there's two elements that made
[00:19:12]  it interesting for you and where you had trouble in other solutions. Um, reacts performance was awkward because like you basically, if I, if I understand correctly, you have to
[00:19:22]  kind of go around react in order to use like. Never re render basically. And like somehow set up all the state and it's like, what's all it does
[00:19:30] , right? You have to run your components once and then make sure all the reactivity set up so that it runs in the frame loop. Yeah. Which is really strange
[00:19:40]  for react, but I mean, it works like the base, like they, they, they have to create almost their own state library or something. They kind of like drive
[00:19:46]  it. Like, is that like the common pattern? I mean, yeah, like the frame loop runs on its own. So you just make sure you're not updating
[00:19:51] , like you're not doing any set states. You're just updating your refs so that you can keep accessing the new value in the next loop. Like. Right
[00:20:00] . Okay. And then on the other hand, you're like, okay, well, obviously a reactive library, like Svelte is going to have more performance, not
[00:20:06]  have to deal with that anyways. And, uh, but like, when you say that, like, just so I understand when you say that three is always moving, I
[00:20:16]  think I heard this from, um, uh, Joe who maintains a loom element. Yeah. Like a 3d element that, that three is like, not as
[00:20:25]  scared of just like breaking changes, like every, like minor version. They're just like, oh, we're going to break something today. Well, you saw what happened
[00:20:33]  at three standard loop today, right? Like when you were trying. Yeah. There's just stuff like that. Like just keep changing. And so, yeah, bindings
[00:20:40]  can't keep up at all. Right. You're right. Okay. So yeah. So three is just constantly evolving and it basically, they don't care about Semver
[00:20:48]  one bit. And the, the problem is, and this is, this, this is the thing I didn't understand. Cause like if anyone's seen how solid comp
[00:20:56] iles and actually I'm going to, I'm going to show. This just one second, just so that people can get a, an idea of what I mean by that
[00:21:02] . I'm going to open up the playground and take, take this. Everyone's seen this button example, but what they might have not seen is if I change this button
[00:21:12]  into capital B button, let's say, and I'm just going to make a function button here. It doesn't really matter what it is, but let's just
[00:21:19]  take this. And I'm going to make my text bigger. So other people can see it. Always have to remember to do that on stream. Okay. So I'm
[00:21:28]  not rendering anything. No biggie. But if you look at the output here, you're going to notice something right away. What you're going to notice is the
[00:21:35]  only thing that we're importing from solid is render, create component and create signal. There are, there is not a single piece of DOM anywhere to be found except for this
[00:21:46] , the mounting here, the render with create element. Yeah. But instead of render, we can use solids, create root, and we don't need to render or mount
[00:21:55]  it to an actual DOM element as many people who use solid know. So essentially our component system and our reactivity have no correlation at all, like at all with the
[00:22:06]  DOM. We don't even import the DOM unless you use the DOM. So for the longest time, I was thinking why even, even bother with this, right? Cause
[00:22:15]  can't someone just wrap their stuff, you know, just call some three JS stuff inside that button component, you know, instead of, instead of actually doing it.
[00:22:27]  And I think that's essentially what Svelte's approaches. They're like, yeah, you could just use components and just build the thing. But yeah, I,
[00:22:34]  I asked this on Twitter and Paul, you know, he was on top of it. And he, he was, he gave me some reasons why, because the thing is
[00:22:42] , if you think about it, this solution is also very simple that I showed you because you don't need any reconciliation. Right. You don't need to like know
[00:22:50]  what the order, the items are in a list or something. And I was, and I was thinking like, if this is a canvas or 3d, do I actually
[00:22:57]  care the order of the DOM elements? Do I need to like diff stuff and do all the DOM operations? Like once you just like add a mesh and like why have
[00:23:06]  a reconciler, you know? So for the longest time, my opinion was, uh, you don't need it. I don't know why react does this
[00:23:16] , but eventually, you know, there, I was given a couple cases where this actually matters where like order of like maybe applying plugins in an order, a couple edge cases
[00:23:27] . And I, you know what, I still wasn't really convinced, but maybe you can explain why having a custom reconciler render is so important here. I
[00:23:35]  mean, just like on, on top of like the first thing I want is the feeling that the, the platform I'm using is a little native, right? Like,
[00:23:42]  so the first thing is the API, like it, when it like talks like DOM elements and it almost behaves like DOM elements, then, uh, sort of like you can
[00:23:52] , you can get back into your mental models of, okay, this makes sense. But you're right. Like why not, uh, just have your own components?
[00:23:59]  Um, I'm not sure actually like one of the things is obviously like December thing is like, you don't want to keep adding new bindings for everything you want to
[00:24:07]  use as a component, right? Like for example, CGS is already a huge, huge like namespace. So I think like this, the swell solution right now also
[00:24:15]  like barely covers, like, I think 20 out of probably like a hundred, 150 classes. And like even just to get that set up is already a huge thing.
[00:24:25]  And then to keep, to maintain it with every version change, uh, sort of just from a dev, like I think for a, for a project that you're quickly
[00:24:32]  whipping up and you don't want to get into setting up a render, you can just like, yeah, do it all. Probably you can do the entire three app in
[00:24:39]  a solid component and try to like take parts out as you want. But, uh, I think like I'm trying to, I'm trying to build bigger games and I
[00:24:47]  want to like almost describe my whole scene graph as components. And then the other thing this allows you to do is, uh, add your own sort of you to three
[00:24:56]  as a tradition of you, you sort of, uh, you, yeah, you, uh, create classes to like encapsulate behavior. And then, uh, you can
[00:25:05]  like override the classes that three has given you and stuff like that. So, and as you build up custom behavior, now you want to use that within your app.
[00:25:13]  And what's, what like a custom reconciler would allow you to do is register those elements as native elements. And then you can like do the, uh, do
[00:25:22]  the lowercase thing to, um, to like use the same elements that you've registered as custom and gives your entire app or like very native, like feel like, okay
[00:25:31] . You're accessing things that the platform is giving you. And, uh, I, I think the biggest win is like the, the sort of the developer experience when
[00:25:40]  not, and, uh, just the win that you get with like being able to be compatible with all future versions, just out of the box. Like, uh,
[00:25:46]  like solid three, I think already it's been a month and three JS has come up with like seven new versions since then. And like, yeah, so I haven't
[00:25:54]  had to change anything and already they have broken a few things like in, in other cities that we ended up depending on. But yeah, that's cool. Yeah. Cause
[00:26:02]  I just, just, I'm going to show quickly the contrast, like the other side is, cause I think some, some people have seen this demo before this, this
[00:26:09] , this, this is how it got started on Twitter. And this is, this is, this is the, this is what it looks like when you're not using
[00:26:15]  solid three, when you're just kind of making the stuff yourself. Like, see, I got, yeah, I've got some components and I added a camera and directional
[00:26:23]  light and mesh into the scene. And I, if anyone's seen this demo, it's probably gonna lag cause I'm streaming, but we, you know, we can
[00:26:32] , we can put a lot of, uh, cubes on the screen. Cause solids, uh, signals like don't have the performance issue, um, that react did
[00:26:40] . I remember react was kind of choking on this around, uh, somewhere, which depends on the computer, I guess between the 2000 and 10,000. But in,
[00:26:49]  in any case, um, but if you look at how it's implemented in this example, Um, it's not, it's, it's kind of, it
[00:26:58] 's a, it's, it's a lot of code here. Like there's, there's like special kit getting the children and then special casing them. Okay. Well
[00:27:06] , this are, these are the renderer. Here's a renderer. Like, like someone had to write all of this sort of logic. That's very specific
[00:27:16]  in how to wire up. Okay. This is the camera. And then that gets passed in as the children. Yeah. You set up like every prop that you wanted to
[00:27:26]  be the active, right? Like in this. Yeah. Yeah. Like create effect. And then that's one of the big downsides. I think like the, like
[00:27:35]  the props could change anytime and you can't just spread them, right? Like you can't just do as object spread. Yeah. The, the, the one benefit
[00:27:42]  of this is you get complete control over the granularity in terms of like, but you basically have to do all this reactive work yourself. Cause there's no JSX doing
[00:27:49]  it for you. You make it an effect that updates these props for this part of the model and these for this part do. And it opens these questions. Like, do
[00:27:57]  I wrap each prop independently? Do I put them together with a slight diff? You know? And what I did with the solid universal renderer was actually copy the same pattern
[00:28:06]  that I did with the DOM mostly in which I do. I do stuff like group stuff together and kind of do this performance stuff. And then the person who actually imp
[00:28:14] lements it doesn't, um, need to worry about that. And I already showed this on stream. We, we made a very simple DOM render. Um, and we
[00:28:24]  put it through the DS framework benchmark, which was really fun because it actually, if I remember it was as fast as like basically inferno. Like it was still fast
[00:28:32] , like our, our handwritten dom reconciler was still ended up as being as fast as like the fastest JavaScript frameworks. So. Yeah. I, I, I
[00:28:41]  think once I saw that, I was like, okay, if someone wants to do something performant with this, they're not taking that much of a hit. Yeah
[00:28:49] . Over the, the handcrafted compile optimizations that I do with the regular DOM render. I mean, it's still a thing. And I know you hit that
[00:28:56]  and that was something that you had to play with, but we'll talk about that later. Let's let's maybe take a look at that example you made for,
[00:29:03]  for solid three. I want to actually kind of dig in. And if it, we actually showed this in our community meeting. Um, so, and I downloaded it this
[00:29:11]  afternoon. So let's take a look at this and before we get into the code and try and make some sense of what's going on, I'm going to, I
[00:29:20] 'm going to show you the demo just so you can kind of see what we're talking about. And then maybe we can work back from there. I'm just going
[00:29:25]  to start this as a built with VEAT I can tell just simple VEAT setup and we're in dev mode. And then if I open this in a window
[00:29:32] , it's going to open in the wrong window and let me bring this across here so we can look at it. Yeah. Yeah. Here we go. This is solid
[00:29:42] , solid three. We got a, we got a, a chess game. This is, this is pretty, this is pretty cool. You can see the shadow and stuff
[00:29:52] . When I first built solid, I didn't, I didn't know if anyone was ever going to do something like this. I, I, the first hint of
[00:29:58]  that I got was from Joe's examples of loom, but this is the first time that I've actually like dropped it in on my own computer. Um, this,
[00:30:06]  this, this is, this is pretty cool. Yeah. Um, and, and this is fully functional too, right? Like if I press new game here, like
[00:30:14]  this is, this is a game I can like select a piece, see if I can spin it around. Yeah. Like you can send me that link and I might be
[00:30:22]  able to play with you because that's, yeah, that's, yeah. Yeah. Even, even with the Vercel. Yeah. Let me see. Yeah
[00:30:30] . Because I, yeah, I think it's just one cloud press. Yeah. Cause I'm running this locally. Let's, let's, let's, let's
[00:30:34]  give that a shot. Let's see if this, this actually works. This is, this is pretty cool. I'm going to send it over private chat here. Yeah
[00:30:41] . Don't copy that link. It says click the copy. So let me see if this actually works. Yeah. Oh, let's see. No, that's
[00:30:50]  my local link. But I guess if you put solid. Uh, yeah. Okay. Okay. I think I just showed the solid chess link where it's actually just a
[00:31:00]  local link. Okay. Yeah. Yeah. Okay. But I want you to play against the, uh, the engine. So, um, do control and press the dot
[00:31:11]  control and full stop. Sorry control and full stop. No, that's not it. I'm on a Mac. What am I pressing? It's control and control
[00:31:24]  is, uh, not command control. Yeah. Control. And then what's, what's the point? Uh, the point, uh, full stop. I don't
[00:31:33]  know what's it called. Period. Period. The period. Repeater. Period. Period. Period. The, the dot. Dot. Yeah. Okay. Okay.
[00:31:46]  I got the debug tools here. Yeah. Yeah. Okay. I got the debug tools here. So, so go to game. Uh, yeah. And, uh
[00:31:53] , so this overlays also, is it rendered in three or is this. This is, uh, this is powered by solid, but it's called solid level. So
[00:32:03]  Levi is another one of these things that the, uh, like Paul Henschel's organization. They have another one of these tools, which is just a GUI for
[00:32:09]  your, for your sort of creative apps so that you can have quick controls there. So you just have a hook in your component, like use controls and you provide key
[00:32:18] , key values. And those become like controls here that you can tweak and they'll be active in your app. So yeah. Yeah. It looks slick. Um, so
[00:32:27]  the style is on all on those guys. I don't, I don't style anything. Yeah. But you can play around with like some of the design on these things
[00:32:33] , right? Like you can, uh, so for example, square piece, if you open some of these, these control, uh, how these things look, right
[00:32:40] ? Like, so where they are on the screen. So you can. Oh, okay. Yeah. I don't know if. Interesting. Is this actually noticed? No
[00:32:49] . Okay. But you were, you, you. Guys, you can click on engine. You can toggle engine. And now if you play a move with white, like
[00:32:57] , uh, yeah. Yeah. Yeah. Yeah. The engine should play. Oh yeah. This, I, I, I, I am not good at chess.
[00:33:06]  I don't think I even know how to play chess. So yeah. And like, like I said, this is like stock fish and it, it, it's no
[00:33:13]  mercy at all. She's not. Yeah. So I'm going to be dead in like three moves. Like, I don't, I don't even, I'm
[00:33:19]  like avoid trying to avoid getting. Yeah. Oh man. This is, this is lovely. Go for the check. Yeah. I honestly. Yeah. Keep it on
[00:33:42]  it. This is really cool. Um, I don't know if I'm going to play any more than this, but yeah. So what can we toggle here? We
[00:33:48]  can. Yeah. Yeah. So like, yeah, you can just take that pointer actually like next to offset. Yeah. Just drag it around. Uh, the point
[00:33:55] . Yeah. You will see the board move a bit. Okay. Okay. Yeah. And then, uh, in square and in peace, like the other toggles,
[00:34:04]  you can control, uh, that's the square size that might, uh, yeah, not make it look very nice. Like. Yeah. Just to play around with.
[00:34:13]  Yeah. Things. And then, yeah, you can change the colors of the, uh, the squares and, uh, and the pieces of the, uh, and
[00:34:22]  yeah, like one of these, one of the things that shows is that basically like, uh, yeah, I don't know if it all works properly, but yeah.
[00:34:29]  One of the things it shows is like normally in your, in the system that you were introducing, like where you have your own components, one thing you would miss out is
[00:34:36]  on a good eventing system. I'll use like react three fibers eventing system. Like where, when you hover on a thing and when you click on something,
[00:34:44]  like if you look at the code, it's simply like a on hover on click, like these event handlers that you can just provide to like hook up these events.
[00:34:52]  I think that's one of the big, big advantages of this. And that's, I think the, the, the, those guys have done it like on top of
[00:34:58] . Uh, I see. Yeah. Well, I think I'm gonna have to look at the code a bit to understand what's going on here. So let's
[00:35:04] , let's do a tour that I don't know if anyone has any more questions about the demo here, but this looks really quite cool. One of the things I want
[00:35:12]  to demo later is this theater thing on the, on the, this is the dev tools. I'm not like, they're not great, but yeah, this is just
[00:35:19]  something I was using. It looks like a component tree to me. Yeah. Are these solid components? Yeah. Yeah. They're all sort of components. That's better
[00:35:30]  than we've been playing with dev tools. So this is, this is cool. Oh, okay. Yeah. Okay. Yeah. I'm, I'm, I
[00:35:38] , I just sit here spinning it forever. Paul actually had a demo about four months ago, I want to say, where he had this car and, and I was playing
[00:35:47]  with it because he posted on YouTube and, or certain on YouTube, on Twitter. And then I was like, I was like, man, I just keep on trying to
[00:35:54]  drift it. And it's just not working. And he actually released it. It was difficult to control. It was difficult to control. I used to play that often too
[00:35:59] . And actually, yeah, that was one of the things that got me really excited about doing games in like this style. Because, yeah, looking at his code and
[00:36:09]  yeah, this stuff is pretty similar to like the kind of stuff he was doing. I'm trying to understand and maybe you speak to this more. It's like,
[00:36:17]  like, wouldn't you just use like unity or something? Like what's the advantage of using something like solid or, or react to, to build a game like this?
[00:36:28]  I guess I'm going to see in a minute, right? When we look at this code and get a better understanding of what's going on here. But, you
[00:36:33]  know, so yeah, I mean, just the top of the head, like top of my head, like code is what I'm comfortable with. Like that's, and
[00:36:40]  like mostly doing websites and also like unity is something I will have to learn. Um, scripting format, the scripting layer there is like more C sharp based, not
[00:36:51]  a fan of like the whole hugely object oriented style. Uh, and, uh, you know, I like JavaScript and when you're trying to do stuff for the web
[00:36:59] , I like the quick feedback though. Actually having used, uh, unity and like getting that ID for games. I do think like, like web based IDs for games is
[00:37:08]  one of the huge fields that is going to come up because people are going to want to make games more easily. And I think like the web is like with the stuff like
[00:37:16]  basm and all web can very easily handle even the game engine itself, like running on the browser. And I'm actually trying to get all the pieces going to work
[00:37:25]  on something like that. I want to build my own game engine in the browser. So I'm trying to figure out what are the pieces that will fit best. And so
[00:37:31]  like for this, for the scripting layer, like for describing your own scene, one way to do it is in the drag and drop editor, like in the ID,
[00:37:38]  the other way to do it is in JSX. And so this is like trying to do the JSX way too. Okay. So where, where should I start here
[00:37:46] ? This is a beat project. It looks a little bit different. There is an index HTML. Yeah. It's very standard. Just. Yeah. Get our,
[00:37:58]  right. And beat will do in the injection for us. But there's a, there's a lot of, it's a lot of stuff in here. Yeah. I
[00:38:05]  just do it all in the top level. That's why like most of this would be inside a components directory. But yeah, I would just go to index, like
[00:38:12]  just top level, nothing, nothing weird happening. Uh, this use controls is what I was telling you about, like the hook from lever. Yeah. So like, you
[00:38:20]  just add like, like sprinkle this anywhere in your app. Don't need to add any providers and stuff. And it just becomes a control like on the top. But did
[00:38:27]  you, so you put, yeah, but you had to port this to solid obviously because you can't use react hooks and solid. Yeah, and then this was.
[00:38:34]  So is it just like hidden in here? Is this. No, the implementation is separate. This was just a, this is just a. A wrap. A wrap.
[00:38:43]  Yeah. Yeah. Okay. So this is another library to add to your, your stack of libraries. Yeah. No, I had to get all this going just to get
[00:38:51]  the game working. Not like I really like want all these, but. I mean. Cool. I, I guess that's the whole thing, right? Um, react
[00:38:59]  three has really paved the way. Yeah. Yeah. I know the. I can, how to pronounce it P manders or whatever. I've been doing a lot
[00:39:07]  of stuff, both on the state side and on the 3d side. Um, I'm familiar with the state stuff, obviously like Joe tie. So Stan, and,
[00:39:14]  um, uh, the other one. Proxies, but. Valtio. Valtio or whatever. So mostly cause they, they, they, they,
[00:39:24]  they, they cover the main patterns that you find. And I, Jotai and Valtio especially look like reactive patterns, but like built for a react world
[00:39:32] . It's really interesting. Cause in some ways, um, they've reinvented prior art, but not realized it. So it's, it's, it's
[00:39:41] , it's, it's interesting because like, I don't think, um, Daishi or the, who creates them, uh, is actually super familiar with mob X
[00:39:51] , but like it is, it is mob X. So I'm always interested, but one of the things when solid first got came out, he actually created his own
[00:40:01] , uh, he was like, oh, maybe I can use. Jotai create a J with JSX and skip react too. So he's been playing with this
[00:40:08] . Oh, I, I do remember seeing that actually. Oh, there's also, he must have used DOM expressions, the library to do that. No, no,
[00:40:15]  no. He tried to write his own. That was. Oh, he wrote his own. I was, I was trying to help him a bit. Give him a few
[00:40:20]  pointers. Cause I mean, I've been down that path. Well, when you take a reactive library and then go kind of make a framework out of it, your first
[00:40:26]  thought. It was like, oh yeah, this would be easy. I have the update model. There's so many little things you have to consider. And he didn
[00:40:31] 't, I, he, what's cool is he's not going the same path. He actually is trying to do a beat on like pattern. He didn't want to
[00:40:38]  do granular, which is really hard. It's why the, the performance is not very good in what he's working on, but it's interesting. Cause like. He
[00:40:46]  did show it off. Like it, it doesn't work. It's just, it's like. Without all the fine grain and the memoization, like, like if
[00:40:54]  you use React. Like patterns, bad things are like, you're not going to get good performance, but he still did prove it out without react. Oh yeah.
[00:41:04]  Yeah. Did he, I wasn't aware of that. That's, that's, that's cool. Um. So yeah, I, yeah. Lexus has
[00:41:10]  been doing a really cool work with your activity around the different templating languages. So yeah, that's, that's, that's interesting. Are there, are there examples
[00:41:19]  of other people like before solid, like doing the custom transform of the JSX? Like not the general. Yes. That is. Okay. Okay. Yeah. Uh
[00:41:30] , the, the, the, well, I've, I guess people don't know this, but I'm going to give a little shout out. Cause I, I
[00:41:34]  don't give them enough shout out enough surplus JS came up on Twitter this week. I forgot to mention it. This, this is where I was doing template DSLs
[00:41:44] . We might have something like a Svelte review today. If it wasn't for the work this, this, this guy did. Um, cause solids transforms are
[00:41:54]  very like inspired by what surplus was doing. He had built his own custom compiler. Um, but he had shown that you can do fine and grain reactivity with JSX
[00:42:04] . There was some, for me rough edges and I was actually working with them, but then he was like, I don't have time to maintain this project anymore. I
[00:42:10] , I, my startup starting to get busy, but like, he doesn't do. Template cloning, but it's funny. Like the way that he teaches
[00:42:17]  it is kind of similar to the way that I teach solid. Right. It's the same idea of like creating the elements and then wrapping them in, in the, in
[00:42:24]  that's their signals and then wrapping them in the effects. Right. Like it's the, this, this was 2016, 17 surplus was the top of the JS framework benchmark
[00:42:35] . Um, so, so that's, that's how I found it. I was, I was doing my work and I'm like, I had. I had
[00:42:43]  a reactive library at fine green reactivity and I was like doing it. I was like, it's faster than react. Obviously. I mean, that, that isn't
[00:42:51]  hard, but, but like it wasn't fast enough, you know? So, uh, and I came across this and I was like, this is the secret, but
[00:42:57]  like, as you can see, this hasn't been updated in four years. So, um, I want it, as I said, I wasn't even gonna, when
[00:43:04]  I found this, I was ready to go. Okay. I'm a surplus dev. Let's do this. Uh, as things would happen. I, I just
[00:43:09]  want to, I pushed stuff further and I thought at one point maybe dom expressions would and surplus would kind of merge and we just never really happened. So, but yeah,
[00:43:18]  this, I owe a lot to this library and the other library that people might not know. this, this, this, this, this lovely library, um, their
[00:43:27]  JSX is not the standard JSX. You can use JSX, but any place where you're like, oh, wow. Inferno is so fast. Like
[00:43:35]  benchmarks and stuff. Inferno uses the custom JSX transform. That is not the standard one. And so the. That's not VDOM. It is V
[00:43:42] DOM, but they use a custom VDOM thing. Instead of compiling everything to functions, they actually create the, have the compiler generate the VDOM nodes
[00:43:52] . And. Directly. And by doing this, they can save all the function execution overhead. And it's easier for them to. The static parts. Exactly.
[00:44:02]  Isolate the static parts. Right? So. Inferno, uh, in a sense also proved that JSX could be done, but for some reason that like never
[00:44:15]  translated to the wider public. People were like, oh, JSX, you can't analyze. And part of this was the, as many people know, the In
[00:44:23] ferno author went on to go work at Facebook or meta as it's called now to work on a special compiler for react. Um, based on pre-back. And
[00:44:31] , and at a certain point, the project just kind of was abandoned. And he went to go work on, I think it's called lexical, like a
[00:44:38]  super powered, um, text editor. Oh, but most people were like, oh, react tried. It's impossible to analyze JSX and get performance. I know
[00:44:47]  Dom. I've talked to Dom. That's, that's not exactly what happened. He actually, he told me, he's like, I actually created some really powerful
[00:44:55]  performance stuff. He's like, you know, similar to solid and performance. Like, like in that range, you know, I, he, he probably, you
[00:45:03]  know, you seem blocked on. It's very similar to solid performance. You know, he, he's like, we basically got there and the problem was it wasn
[00:45:12] 't, it basically wouldn't be consistent with where react was going. You know, this whole concurrent rendering and whatnot. They had to make certain assumptions. They're doing the
[00:45:23]  combat. They're doing the react combat. Oh yeah. Uh, Inferno, uh, does have react. Okay. When he went to, to meta, he
[00:45:31]  actually was working specifically at bringing Inferno. Um, into react and he told me like, they actually sometimes, uh, used Inferno or Inferno
[00:45:41]  based engine for react and actually like AB tested it. And he's like, you would think maybe that Inferno was like way faster, but for a number of Facebook
[00:45:50]  pages, it, it wasn't like it was faster in some ways, but not fast in other ways. React was optimized for different types of usage patterns. Like Infer
[00:45:59] no like solid, you know, is a big benchmark winner, right. Yeah. On raw rendering speed. But I guess some of the apps and the way they were
[00:46:07]  developed in, uh, meta. Inferno wasn't leveraging it as much. And he said like in the end, yeah, Inferno might've been slightly faster
[00:46:14] . And this like, and he even got made it faster essentially when he made this new compiler. Um, it wasn't enough that the react team was like, you
[00:46:25]  know, because you don't have any static parts. Does Inferno help? Like if you have like a fully dynamic app. Well, and I mean, that
[00:46:34]  was part of it. And, and, and even to this date, that's part of the reason why Dom's like, he's like, he's like, he
[00:46:41] 's like solid has the right idea. You, you focus on the holes. That's what the reactive library does. But he's like, you can also do that with
[00:46:46]  a V Dom focus on the holes. Like conceptually when he, as I said, he's a V Dom guy. I'm on the reactive side. We look
[00:46:52]  at this stuff. It's not actually that different people. Like when they, people play out like the, like they're crazily different. Um, they did like it
[00:46:59] , the optimizations look a little bit different, but like they're like different sides of the same coin. It's, uh, I mean the patterns that come from using
[00:47:08]  it differ. There's a reason why like react memo, you know, and that re-render kind of gets there, but like, and that, that kind of happens
[00:47:17] . The user code, but like on the pure rendering side, either approach isn't that big of a difference. Um, it's more on the user code side,
[00:47:25]  but as I was getting at, essentially react wanted to do this concurrent time slicing stuff. And inferno was like kind of optimized itself out of that potential. And then when
[00:47:35]  it came, push came to shove, like they were like, we can make a bunch of these performance improvements, or we can like change the way people build apps or look
[00:47:44]  at like the concurrency model, use of rail models. Use the rail model, do all the suspense stuff. And they were like, we're going to go that
[00:47:49]  way. I don't know if people know this because a lot of people like, I saw some tweets on Twitter today. Like, Oh, we actually wasting their time with
[00:47:55]  suspense. You know, they can just, you know, improve the performance and things people act like they didn't like, of course they tried that. Like, like
[00:48:03] , you don't think they, that the, the, the react team could, could make a version of react that one, that one benchmarks. Like, come on.
[00:48:13]  So I, I, you know, they, they've had some of the best engineers in our field work, work on that project. Like that, that's not
[00:48:23]  about, they truly believe in this direction that they're like versus, you know, despite any like differences, I have an opinion. Like, I think fine grain is
[00:48:33]  viable. They do not like, you know, and I intend to continue to show that through the various projects that I'm working on, like beyond some like philosophical stuff like
[00:48:43]  that, or some kind of like high level, like, you know, this is better kind of opinion type stuff. The engineering is rock solid on the react side.
[00:48:53]  So like, like, yeah. Um, anyway, sorry. That was a bit of a tangent. No, no, no. I was very curious. Yeah. Like
[00:48:59]  this JSX transform stuff. Like, yeah, just that I had not seen it in the wild and when solid was doing it, it was, it seemed very, like
[00:49:09]  a very fresh idea. Like that makes so much sense. Like if you're putting JSX in our JavaScript files, why are we just compiling it down to just a
[00:49:16]  simple function call? Like it expresses so much more. Yeah. Probably reading and understanding what it is expressing and making use of that. Yeah, no, definitely. And
[00:49:27]  as I said, I wasn't the first one. And in my opinion, Vue is going to go there if they haven't already. This is the kind of twe
[00:49:33] aking that Evan Yu loves. You know, he likes having everything, right? He likes having every syntax and every different feature and everything pulled in. So you can, you
[00:49:45]  can, like, he's already optimized Vue templates in such a way. That they can, like, see the static parts and hoist them and do smart paths
[00:49:54]  and, like, do an incredible amount of optimization. If it suits him, I am sure he will do the same with JSX as well. So I think there
[00:50:02] 's going to be more of a trend in the future to see more with JSX other than less. And we, again, there's a Twitter thread this week that someone
[00:50:10] 's like, let's put JSX finally in the browser as a standard. You know, that's fine. But that's only going to appear, like, work
[00:50:17]  where that transform works. And I think we're going to a place where custom transforms are, like, the thing. I agree. Like, you're using a compiler
[00:50:26]  might as well, like, do everything, like, use it for everything it can do, right? You're using a compiler, right? That's the whole thing.
[00:50:34]  Someone, I remember reading an article a little while back where someone was like, so the difference between Svelte and React is, React is runtime compilation. Svel
[00:50:42] te is compile time or ahead of time compilation. I'm like, what are you talking about? Like, you're compiling the JSX. It's happening ahead of
[00:50:48]  time. There's no, like, there's, there's, there's no, there's no thing. God, what is it? CSS tricks article. Let's
[00:50:55]  see if I can find it. Adam Rakis, my, my, my favorite person. Svelte for the experience reactive. Let's, let's see here.
[00:51:05]  Spark, everyone likes using the word spark with Svelte. Ever since Richeris said that, they like, everyone likes going spark, spark some, something rather
[00:51:19] . Ahead. Oh, it's, you know, I don't need to prove it. It's fine. It's got to be that this article explains how S
[00:51:27] velte does ahead of time and React does runtime. I think this is just a funny assumption. When you have JSX, you have a compiler. Like, I don
[00:51:37] 't care if it's a simple compiler that just makes functions. Yeah. Exactly. Like, yeah. So. Okay. Let's, let's continue on. This
[00:51:46]  is a fun tangent, but let's, let's see. Going in chat. Are you still alive? We haven't had a comment in chat now for. Oh
[00:51:53] , three minutes. Okay. Fine. I mean. So yeah, I think, yeah. Okay. This is just importing an app. So maybe we can go to app
[00:52:02] . And then showing the controls. Okay. Yeah. Yeah. Those are just like when we enable them, then they show in a portal. Otherwise they don't.
[00:52:12]  Yeah. Okay. That makes sense. I want to do some improvements to portal in the future, but I actually kind of love how it's just so like snuck in
[00:52:20]  there. Yeah. Yeah. I don't use it very often. So when I see it, it's pretty cool. Mm hmm. No. Yeah. With 3
[00:52:28] D stuff, you need portals actually sometimes. Yeah. Because you want to overlay stuff on top. Makes sense. Interesting. So you use portals for overlays.
[00:52:35]  Oh, that's, that's, that's, that's, that's awesome. Yeah. Okay. Okay. I think let's go to app. Yeah. That
[00:52:42] 's where the entry point is. This is one of your libraries too. It's yeah. I've started working on it. I'm trying to see if we need client
[00:52:51]  side fetching. like the solid start by just getting rid of all client side, like all this. Right. Right. Yeah. Yeah. I mean, as I
[00:52:59]  said, this guy's a machine that he's, he's built a whole ecosystem stack right here in this, in this, in this demo. Um, so yeah.
[00:53:05]  Okay. So, uh, I got it. So we have, we have a query provider. So yeah. Yeah. We, we wrap that, get our query client
[00:53:12] . We have our router, which is our classic solid app router. I mean, yeah, this is one of the cool things that I think is like a little underrated
[00:53:20] . Like I can do all these declarations, like in my component scope. Like, I don't have to worry about if this constructor will run again or not.
[00:53:28]  Like it makes me actually like this local reasoning thing. I keep talking about, like when I have to take the constructor out, put it in a memo or something just to
[00:53:35]  make sure it doesn't run again. I hate it. I just love putting it right there in the, in the JS. I see you commented out some routes.
[00:53:44]  I don't know what those are. Uh, yeah, I don't think, or maybe it's inside scene. Actually, I think I put it inside scene. Okay
[00:53:49] . Yeah. Yeah. So this is just, you have the router. I just, you get it, this repo. So like, uh, this wasn't like a
[00:53:55]  published thing. I just like, just snatched it down probably in mid progress state. So yeah, it's, it's all good. All right. So we
[00:54:03]  have some, this is just, yeah, some buttons so that we can, I can open the, those different URLs. Yeah. Like the inspect thing. And, and
[00:54:12] . This is just docs for me. Like I was learning solid as I was doing this. So I needed. Yeah. You, you actually like, this was like your
[00:54:20]  first week or two using solid that you actually created this, right? Yeah. I was trying to learn solid and I need projects to learn things. Yeah. And so
[00:54:29]  this was my attempt to like learn solid. Okay. Yeah. Like, so react like, and then in its authoring style. So just out of curiosity, I'm
[00:54:39] , I'm gathering the scene is where our fun happens. So what's, what's a, these, these, this is a theater provider with no children and this is
[00:54:47]  a stock fish engine. What are these? Utilities that hook onto like a state machine. So if you go to stock fish engine, I think that's just a create
[00:54:55]  effect, uh, which, uh, I, I think I could have put it somewhere over here, but yeah, it's just a create effect that sees if it
[00:55:02] 's black stone and makes a chess move if it's black stone. Oh, okay. So this is the, this is, this is how you hook into our AI.
[00:55:10]  Yeah. Yeah. Yeah. Okay. Cool. Okay. The game itself is like a global sort of state thing. And I just subscribe to, okay. When the
[00:55:19]  turn is black and like after a 10 second delay, do the move. Okay. Yeah. Just like after a small detail. Gotcha. Okay. Yeah. That makes sense
[00:55:30] . Okay. So stock fish engine, create effect, make chess move. Okay. Yeah. So don't worry about this too much. Is from scene. Okay.
[00:55:38]  So scene is really where we want to go, right? Yeah. Scene is where the fun happens. Okay. So we've got a bunch of stuff that I don't
[00:55:46]  even know what it is. Solid three. Okay. Solid JS. Solid dry some like three JS utilities. Okay. So it's another port of one of these R
[00:55:58] 3F things. But it basically gives you stuff on top of three JS like so that you can use them as components directly. So this was this hard porting a bunch
[00:56:08]  of react components over like. Not, not really. So like the JSX almost remains the same, right? The one thing you have to do is always make sure the
[00:56:16]  props are like being wired properly because everybody destructures props. Like that's the time I was complaining to you about destructuring props and like how we should try to
[00:56:24]  avoid that. Like make that possible because that was the thing I was doing for it. Yeah. You just had to convert everything. Yeah. Yeah. Though for here I
[00:56:33]  do use now, like in this thing, I use like a babble plugin, which does the destructuring thing for me. That's why like perspective camera is allowed
[00:56:40]  to have like destructured props. Which, which, which babble plugin are you using? Yeah. It's, it's in a preset that I have, but
[00:56:48]  it's, it's the solid undestructured one. Like. Okay. Yeah. Gordon will love that, that you're using it. Okay, cool. Okay.
[00:56:57]  Okay. So yeah, you can go to scene. Yeah. So that, that actually works well in this scenario. That's great. Okay. So then. This pattern
[00:57:05]  also sometimes somewhere where I like make the component, like make the element object before returning it and use it and render effects. Yeah. This was my actually might have been
[00:57:15]  just an attempt to see if this works. I don't know if render effects are necessary here. Yeah. I mean, it's, it's fine. They come more
[00:57:22]  relevant when you have stuff like concurrent rendering and stuff. Okay. Anything that's kind of being created for the first time. It's, they're a good choice.
[00:57:32]  I wouldn't recommend them for most end user app stuff, but yeah. Okay. That's, that's interesting. You probably could have got away with crit effect, but
[00:57:38] . Yeah. Okay. So we set up some camera stuff. Okay. So let's, I'm going to focus on the JSX here. Cause honestly, I
[00:57:45] 'm not going to understand all the GL stuff, but I think I could structurally follow the app. Yeah. So you have a canvas element and then. Enable.
[00:57:56]  Yeah. These are, this is a component though. Just so, so that I follow. So this is not part of. This is from solid three though. Like it
[00:58:02] 's, it's the main sort of entry point of like an app. Right. So it, so it's like a replacement for your lowercase canvas. You have
[00:58:09] . Okay. This canvas is a three JS powered canvas element. Got you. Because there is like some stuff that's components like the, like this perspective camera. Yeah.
[00:58:20]  That's the one you had just defined up there because. Yeah, exactly. And then there's, and then there's like some native elements, right? Like it's
[00:58:28]  ref and stuff. Okay. Yeah. That's interesting. Cause you also, you know what these do better than I do, but I just kind of, there's a
[00:58:36]  camera, there's lighting. Yeah. Like the perspective. Yeah. Ambient light is just like, it doesn't really add shadows and all it's just to see
[00:58:43]  stuff. Like you can't, you can't see anything if you have zero light. So you have to have an ambient light and then spotlight is to create all the shadows
[00:58:48] . Right. Like, is this plane the, the, like. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. So like. This is the HMR
[00:58:58]  work. If I do this. I'm not sure. No, I have to refresh. I think. Uh, I, like, I couldn't figure out all the
[00:59:06]  disposal. What is happening. Did I break something terrible? No, no. Actually the, the one issue I was also having was in the HMR stuff because like
[00:59:17]  3JS like creates a lot of classes and all, and you have to make sure you dispose everything properly. Gotcha. Uh, and I have to figure that out
[00:59:26] . Yeah. Like that's, that's one of the things I haven't really, I haven't released this. Like, yeah, it's fine. I'll work
[00:59:31]  in progress. And then we have a room provider and then a chess room. Yeah. So the chess room is where the game is happening. Just move. Send and send
[00:59:42] . Uh, no, send is, send is down there only. Send is, uh, uh, okay. This, this is just another hack I'm doing.
[00:59:52]  Uh, but basically like I'm doing this web, sorry, Cloudflare workers room syncing thing, right? For multiplayer. Okay. Only if I have a room
[01:00:01]  is send assigned. And if I'm not playing in a room, then you can continue playing without it bothering. So like, I just. Yeah. Send. I guess
[01:00:10]  that's a whole other thing. How you set up the communication. Yeah. So do you have, is it like web sockets from. Yeah. It's, it
[01:00:16] 's web sockets. Uh, not sort of abstracted inside. Like just a few help zoom helper basically. So. And on the backend it's cloudflare
[01:00:24]  workers. Like an entire cloudflare stack actually. Durable objects. KV everything is involved actually. Yeah. You weren't kidding about the portals. Hey,
[01:00:33]  that's interesting. Yeah. So yeah, this is the overlay on the left where like I have the new game and all. So like, yeah, so this is
[01:00:39] , and, uh, this is guy, this is one of the files, which I will show off like the custom transformation for like, because this file has dom stuff also
[01:00:46] . And it had three JS stuff also. Right. When you say custom thing is because you have dom, normal dom elements in with your three JS stuff. So the simple
[01:00:56]  approach would be to do something like my very simple custom dom reconciler, but you were like, no, I want to use the most optimal solid with my three JS
[01:01:04] . So you went ahead and did something else, didn't you? Yes. Yeah. That was fun. That was fun. So what, what I, so basically
[01:01:13]  I did not want to do opt out of anything like the solid JS web compiler was doing. And I think not only that, I think there was correctness issues also because
[01:01:19]  I'd have to get SVGs working with the, with that. Then there's all these edge cases and then yeah, like it was just unoptimal. Then I
[01:01:29] , and, uh, then I do also figure out like the compiler was not totally complete, like class class list, all these things that people would expect to just work
[01:01:36] . All of those would not be working. So I wanted all that to work out of the box and, uh, and, but still allow like three JS page components on
[01:01:46]  the same page, but also transform them separately into like what is optimal for them. Yeah. I'm not going to lie. Like this was one of those things that like
[01:01:55] , I was like, Oh, are we going to need this? Cause it's pretty awkward. I'm not making solid native. Like who cares? Just use the
[01:02:01]  universal thing. Yeah. So you, I'm actually pretty stoked for the potential of us merging what you did back into DOM expressions at some point. Yeah. But if I
[01:02:09]  understood, is it, is this in the node? Like where is it? Is it in here somewhere that I can just. the, the code change? Like the
[01:02:17] , the way that this is actually using off my solid, um, the output or like where it's set up. Yeah. Where it's set up versus this that's
[01:02:29]  using three JS. Like how do you get this in the same? I mean, it's inside like your DOM expressions thing only. Like I forked that and basically
[01:02:36]  like wherever, uh, yeah, let's see. Actually we can, uh, so no, uh, you'll have to go to, uh, add Vinci on
[01:02:43]  top. Like it's all inside. Uh, V. Yeah. Okay. Gotcha. Yeah. I'm just curious. Like, as I said, I think we should
[01:02:52] , we should get this back in. Okay. Here we go. Okay. So you got your own version and then. Yeah. Uh, so I'll tell you.
[01:02:59]  Uh, yeah, yeah. I mean, this, yeah, we're not going to go through the whole transform. Yeah. But I can show you something. Um
[01:03:05] , uh, yeah, basically like on a, on a per every time we see an element, we have like, uh, during configuration, we have configured, uh,
[01:03:16]  like each element and which render it belongs to basically, right? Like, so the devs belong to this and meshes belong to this. And so like while doing.
[01:03:26]  Is that configuration hidden somewhere? Or do you have it like. Uh, oh, it might be hidden in, uh, in my preset. Uh, but, uh
[01:03:33] , so yeah, I can show you in. It's in when she slash white preset solid. Okay. Okay. Gotcha. Yeah. Uh, oh, it's a
[01:03:45]  minified. No, it's just. Uh, like this. Um, I, it must be all the way to the bottom. Yeah, all the way to
[01:03:53]  the bottom. Actually. Yeah. I'm just curious. I mean, it's fine. We probably don't need to go too far into it. There's lots of
[01:03:59]  stuff in here. 70. Oh God. Oh yeah. Okay. Right here. Right here. Cause this is our standard options object for Dom expression. So all you
[01:04:11]  had to do is add a renderer option and then go for the Dom. I want the list of all HTML and SVG elements. And then if it misses that
[01:04:20] , it's going to assume that it needs the universal render. Yeah. This is really cool. And something we should bring back into solid, um, essentially basically have fall
[01:04:28] back in this way based on what is it? The top most element in, is this happening at a per element level? Yeah. It's happening on per element level.
[01:04:38]  Yeah. You can have, because within the same component, within the same JSX, you can have both, right? Like so. Oh, that's crazy.
[01:04:44]  And it's smart enough to go, Oh, insert this template in this template. Okay. And it creates the insert stuff. Yeah. I'm going to have to check
[01:04:50]  this out. This is, I think, as I said, for like solid native, we don't need this. Yeah. Solid CLI or whatever. Solid. Doesn
[01:04:59] 't need this. Yeah. Yeah. But, but for, for other stuff, this way you can get stuff. Yeah. Like any Dom plus anything like music and all
[01:05:07]  this, like, I think. Yeah. Yeah. I didn't have expense, much, as I said, experience when I put this together. But the, the
[01:05:16]  fact that this kind of just slides in nicely. Yeah. Okay, cool. This is what I was looking for. Cause I, yeah, truthfully, we're not
[01:05:22]  going to get it into generate dynamics. So you have a special key, which tells it. Yeah. Yeah. Yeah. Basically I changed from universal to dynamics to do like
[01:05:29] . Yeah. Cool. Yeah. I, I want to see more of this in the future, but yeah, we won't get into the actual transform of how that
[01:05:36]  works very much. Yeah. On this side. Although I, I am interested in seeing what the reconciler looks like. Right. Let's, let's talk about
[01:05:44]  the app a little bit more, but then I actually want to look at what, what you actually did to write a reconciler for three JS. Yeah. Yeah
[01:05:51] . But yeah. This, this is, yeah. So we're jumping back in here. So this is just the. Yeah. This is just the overlay. Uh,
[01:05:58]  but yeah, the board is the interesting. So yeah. So this, this component itself is interesting, right? Like the chess room has the portal with the overlay. Yeah
[01:06:04] . But let's jump to the board, right? That's what people want to, that's, that's what we want to see. So go all the bot at
[01:06:11]  the bottom is the board. Uh, yeah. So the board is okay for each of the squares. Print out a square. Makes sense. Normal. Nothing fancy here
[01:06:20] . And then a square is, uh, it's, um, it's, uh, it's a square like on the, at the bottom. And then it's
[01:06:28]  a piece if there is a piece on top. So quite literally like show when there is a piece here, show the piece. Yeah. What square it is. What color
[01:06:36]  do you want to show? What position? And then. And there's a type, I presume, which is the different types of. Yeah. Type is like, yeah
[01:06:43] . Rook. Queen. Bishop. Either. And yeah, this is piece. So this, uh, this uses one of the tools again, from, uh,
[01:06:53]  uh, whatever Paul Henschnell's organization, what I'll keep calling it. But, uh. Andrew or something. I, I don't know. You don't
[01:07:00]  have any vowels. It's your own fault for people mispronounce your name. Yeah. But yeah, so they, they basically like, uh, uh,
[01:07:09]  uh, in 3d stuff on the web, the, uh, the format for like transforming assets is GLTF on GLP, which is like the binary format.
[01:07:17]  So what this does is, uh, there is a file, which is going to have all the, uh, all the data, but this JSX, uh, there
[01:07:23] 's a lot of commented out stuff, but yeah, this is putting, uh, the piece model itself within a group so that we can like control its rotation and stuff.
[01:07:33]  Uh, and then, yeah. Applying a material to the model. Uh, and then yeah, you can go to the model itself. The model itself is obviously
[01:07:42]  not designed. Uh, like I haven't designed the model. So this is, I use this pieces asset. Yeah. And you just have a pre preset mesh here that
[01:07:53]  you've. So, so what this is doing is, uh, so the, the, the mesh, the geometry for the mesh online one is coming from the asset itself
[01:08:02] . Yeah. Yeah. So the asset is getting passed into like a JSON geometry thing. Then we pass that and similar, but like what we can do is even though
[01:08:12]  the, the asset came with a specific geometry and a specific material, because like I can now compose this here. So I just use the geometry and I use my own material
[01:08:20]  so that now I can color it any way I want. I don't use their default material. So that's, that's, that's cool. Yeah. I mean
[01:08:28] , so are, are there file, I guess you. Yeah, so it's in public. It's in public. It's in public. Uh, yeah.
[01:08:35]  Yeah. Yeah. I mean, I'm not going to read them here. Yeah. So there's model data. Okay. That's fine. Yeah. Okay. So
[01:08:43]  that's cool. And then the board and the pieces and the board. Yeah. I mean, from that point, the logic's fairly simple, like straightforward. Like
[01:08:50]  if you've built, uh, a Sudoku or a Tetris game in the browser, if I actually, I strongly recommend you do that. It's super fun with
[01:08:58]  the reactive library to kind of build that, that kind of game. I did that a lot in there, like when I first found knockout. Um, this is
[01:09:06]  kind of a very similar idea. Um, often it's about a matter of having like some array representing the board and then just like having different state attached to it.
[01:09:15]  And then having the view be a projection of that. So yeah. Okay. That's, that's cool. I honestly, for the, I, I, there hasn
[01:09:21] 't been many questions here for the, for the board or the game itself, I think we kind of got an idea. It is cool. I am interested in how these
[01:09:29]  events wire in and stuff. I remember the piece model is in this, is in this example. The piece model was that, oh yeah, it was this. So like
[01:09:38]  how we, what was it on? Like how are the events, where's the events coming from? So the events are not on the piece, right? It's
[01:09:45]  on the group in the piece. Oh yeah. Oh, sorry. Yeah. They're just being passed right now. And these are sort of accepted natively because like I
[01:09:53]  use the event system, like I said, from what reactive fiber had done. And so they basically, yeah, they look at the canvas. They track your mouse and then
[01:10:00]  they do the casts into like. So I want to see the reconciler. I think that's. Solid three is it's going to be. Is it his own
[01:10:10]  library then? Yeah. Yeah. It's a separate solid three, not like not inside. Yeah. Okay. Yeah. Let's, let's see what it looks
[01:10:18]  like. Cause I showed everyone what, what a simple Dom one was and it was like a 60 line file and everyone was, and it, you know, was crushing the
[01:10:25]  benchmark. It's not going to be that simple. Like there is a lot of, I've used like a lot of the stuff that they had done. So,
[01:10:32]  and they themselves had created some abstractions like update instance. And let's see. This is all compiled. Am I better to go and get hub and look at the.
[01:10:41]  Then this. The ES one might be okay. Like, yeah, you know, you want to skip all this things on the top. These are. Yeah. Cause
[01:10:51]  it, but I'm, I'm looking for the, I'm looking for the, like, right. Like, yeah. So. Yeah. Yeah. So obviously
[01:11:00]  this has been built with like insert two, like built with rollup or something, but yeah. Okay. So. Insert expression. Right. Yeah. I mean, this
[01:11:15] , this looks a lot like other people won't know this, but unless maybe they watch my DOM expressions video where they look at the source, this looks a lot.
[01:11:30]  Oh, wait. This is, this looks like what I have written. Actually. Yeah. I'm like, wait, I wrote that. Didn't I? Yeah.
[01:11:39]  I was like, this looks a lot like what I wrote. And like, we know that is what I wrote. And it didn't look like what I did. Yeah
[01:11:46] . So you, your call is, and this is my wrapper. So what we actually are looking for is where you actually call create render. Just create solid render.
[01:11:55]  Yeah. Okay. Yeah. It's this one. Okay. Yeah. I was like, this is, this looks like solid internal. And I was like, that's
[01:12:05]  way more complicated than I remember it being. I have not written that smart code at all. Yeah. Yeah. That was, that was, that was what I wrote.
[01:12:12]  This is the compiled file. So it has both the, the source library stuff and the custom stuff that was written. Yeah. Okay. So yeah. I'm like
[01:12:22] , we, we, we exposed a really simple API. You only need to like override like six or eight things. So yeah. Okay. So create render here. So
[01:12:29]  create, create element. Yeah. So. Yeah. So. Yeah. Otherwise you just call create instance. Yeah. And then. Okay. Text node. Replace
[01:12:43]  text. The text is not handled properly. Like there's no default text to show in three.js. So I have to figure out what to do there. Yeah
[01:12:53] . I mean, that's, that's all fine. And then set property. So apply props to, I'm going to have to look at, see what that is
[01:12:59] . Insert node. If it's text, just bail out. Cause it's not a real thing. Otherwise insert before pen child. Yeah. A lot of these are
[01:13:11]  already abstractions that RTF guys had made. And I'm, I was able to use like the removing code. So, so you, this wasn't actually that hard
[01:13:20]  because these, these, uh, hooks into the reconciler that I gave were actually similar enough to react that you were able to just reuse them. Definitely. Definitely.
[01:13:29]  Yeah. A lot, quite similar. Like I was surprised to see, uh, if you go up, I think while appending, you have this third argument anchor and
[01:13:35]  I didn't know what it's for, like for some time. And then I saw that, uh, the RTF guys also accept this third argument. Then I
[01:13:41]  read about it and it was exactly the same thing. Yeah. Okay. So that's, that's cool. But like, like insert before. Okay. Yeah. Yeah
[01:13:52] . So this is in my code, but it's mostly like, yeah, just taken from what they're doing. Interesting. So it will pour this. Cause yeah,
[01:13:59]  this is a little bit more complicated, but yeah, basically there's some intermediate objects and then like, yeah, these instances is basically like, uh, so that we
[01:14:09]  recognize what objects we need. Indexed. We, we add some information. So make sure it ends up in the right place in the array. Yeah. Yeah. So
[01:14:19]  for example, for one thing, like for example, the children have to be managed separately. Like, uh, CJS has this, uh, scene composition, but
[01:14:25]  like, you can only, uh, compose scenes and 3d objects, but like, let's say you have a material as a child of a mesh. Then you keep
[01:14:32]  track of the children array separately. Like that's what some of this is doing because it's not by default, a child of a mesh and in 3.js land,
[01:14:41]  it's a property of a mesh, but we can, we allow you to pass it as a children. Right. Yeah. So, I mean, there's,
[01:14:47]  there's some specifics here, but you're, if you look at this, none of this code is really react specific. Like it's all just like, you know,
[01:14:56]  you have an array. Where do you insert the children? Find the index of the child, spread it in, or like call update function. And like, whatever this
[01:15:05]  update instances, I have no clue if this update instances, but I'm sure if I find it, it's, it's calling some kind of native underlying thing. So
[01:15:18]  that's cool from a porting standpoint, because you don't even have to. So, okay. I guess that's the other benefit. I was thinking about this today
[01:15:24] . Cause someone, someone was asking me or actually not asking. I had a support request on solid where they were trying to run a solid library. Solid library in next
[01:15:34] .js. And I was like, what are you doing? Um, but they weren't trying to make it isomorphic, but the problem is they needed to bring
[01:15:42]  the code in. So it'd run in the client and it kept on complaining at them because well, solid has, does dom operations. And it was like, no,
[01:15:50]  doesn't know about it. So it kept on clashing and they're kind of upset with solid. I'm like, well, what, why are you bringing a client
[01:15:56]  library? Like why are you bringing dom stuff into the, doesn't work. But, but the thing that occurs to me is like with react, you kind of can
[01:16:03] . Like if you're not, if you're not like running the code or like doing anything there, like react reconciler and all that abstracts that like even the
[01:16:13]  intermediate format. It's not until you get to the very end that it actually directly with the dom. So like all the reconciler stuff is, is rap is
[01:16:21]  pretty like agnostic until you get into like this. Essentially. Yeah. And I mean, on one hand, that's what, that's why solid has such great
[01:16:30]  performance because it goes just directly to the dom. But on the other hand, these sort of abstractions are pretty powerful in that. Like you're not thinking about like
[01:16:41]  reacts over here. Reconcilers over here. Like, you know what I mean? Like it's, this is the power. Like you saw my earlier code for
[01:16:48]  that 3d demo. There's create effects littered. Yeah. There's no create effects here. Like this, you can take a custom reconciler written for
[01:16:57]  react and a custom one written for solid. And you can almost just swap it straight in. Cause there's no actual. I literally did. That's what I did for
[01:17:04]  this. That's what I did for solid ink. Like solid ink is exactly that. Like I took ink, which is react for the CLI and just swapped out the
[01:17:12]  react renderer for a solid one. Like, and that also works. Like I'll demo that after this, but yeah, that also works pretty superb. We got a
[01:17:20]  question from Michael Rawlings. So with donut nesting three dom three, like does it, does it actually end up working that way? Like when you have dom elements
[01:17:35] , they like, they don't get inserted in the canvas. Like how. So they, yeah. So like in, in three JS code, uh, you can have
[01:17:44]  like an capital H HTML component in, inside your scene. And then whatever elements you put on that, they will be sort of, you can imagine it's in a
[01:17:53]  portal, but the portal it's, it's like the, it's really nice. Like it will, it will actually stick onto the 3d object in the canvas,
[01:18:01]  but it's, it's being overlaid on an HTML sort of overlay on top of the canvas. But like all the positioning is being handled, like via the
[01:18:09]  same mesh. Like if you put it inside a mesh and HTML thing, then like, if you move the mesh around the HTML also moves around and you can just sort of
[01:18:18]  have text on top of 3d stuff very easily that way. Like, because the text, you don't want to do it all in 3d. Like HTML is
[01:18:23]  perfect for text. And so if you want to coordinate these two things, um, but, uh, going dorm. So you have three, then you have inside that dorm
[01:18:31] . I mean, they create sort of separate trees, right? So like when you have a dorm tree and you create, you add a canvas in it. It's not
[01:18:39]  exactly that it's the same tree because like the canvas is a component and it actually creates like a separate tree for the, for the 3d stuff. And like whenever
[01:18:48]  this, the canvas component has to go away, it will dispose everything on the side. And then like, similarly, if you have on the side and HTML thing there,
[01:18:56]  then there it will create another sort of inner portal. It creates another tree, which is again on the side, which will again be disposed when the portal is disposed
[01:19:04] . Right. Okay. Yeah. So they are actually independent trees and it's just the portals that's doing on the layering and then they can handle their own disposal.
[01:19:12]  Okay, cool. I think that answers the question. That's pretty cool. Yeah. Yeah. I mean, that that's, I think that's as far as
[01:19:18]  I can take this demo. That's what I want to see. I want to see the reconciler. I want to see like how you structure your app and I
[01:19:22]  want to try the demo. Um, you said you had a couple other examples of show. Do you, do you want to share your screen? One thing I want to
[01:19:27]  show like in, in the chess game, and this is, uh, this is to give a shout out to, uh, the guys at theater JS, like they're
[01:19:35]  creating this tool, which is to make it very easy to do some very nice animation stuff. And like, I'll show you how easy it is. And like,
[01:19:42]  I'll show you how easy it is. Like if you can get the chess game, uh, like the browser, uh, it's in the browser. So sorry.
[01:19:50]  Do you want me to go back? Yeah. Yeah. It's right here. So like open the debug thing again with control and period. Yeah. Uh, and
[01:19:58]  it go to theater. So which theater. Okay. Yeah. The theater, uh, show, uh, on the right. Do show. Yeah. And then just do
[01:20:06]  control control period again to remove this, the debug thing. Like it might come in the way. Yeah. And then go here and, uh, do camera. So like
[01:20:14] , this is, uh, this is like a UI they give you. Uh, and the UI is actually the act base. Like, so it's, it's
[01:20:21]  like a react UI because it's just a dev time UI. We run it on top, but yeah, you can, you can go left, right on that. And
[01:20:28]  you'll see like, it, it controls the camera X, but, um, there's really interesting stuff. So like now, uh, let's, you can
[01:20:37]  right click on where it says X and do sequence. And so now it gives you this editor here and, uh, just, uh, so, uh, create a,
[01:20:49]  uh, yeah. Uh, uh, next to X on the left. No, sorry. On, uh, on the, yeah. Click that. So basically what that
[01:20:57]  does is creates a key frame at this time in the editor. Now shift that right. Yeah. Let's say, uh, one second and create another key frame.
[01:21:08]  Yeah. Uh, uh, actually no, create, click, click, click it again. Yeah. Maybe you have to start and now you can change the value to a
[01:21:17] , to a different one. Sure. Let's go here. Okay. Now, now you can take this, uh, the blue thing to the zero to zero and press
[01:21:27]  space. Okay. Yeah. Yeah. Yeah. Yeah. We see coordinate all of these X, Y, Z, like come up from the door and add more key
[01:21:39] frames. And then basically like they have all these systems of like saving, like you can, this, this animation is already saved. So now if you refresh, you should
[01:21:47]  have this animation, like already available and stuff like that. Yeah. And these guys awesome stuff, like getting this easy stuff to the web. That's, that's
[01:21:57]  really cool. Yeah. Someone mentioned Ryan used to make video games in your free time. Obviously free time is limited these days. Having many games using solid, uh, not
[01:22:04] , not beyond like the Sudoku kind of stuff. This 3d stuff is all pretty new. Um, he, yeah, Duncan I've known for, since I was
[01:22:11]  a kid. Um, and he's right. I, I actually was big into direct X programming. Um, I was never particularly good at 3d though. I
[01:22:21]  used to, I used to use like direct X to make 2d video games, um, platformers and like, I love pixel art. Um, but yeah, for
[01:22:27]  the longest time I wanted to be a game programmer. I, I, I, I tried to make like side scrollers and like super Mario style games and all that kind
[01:22:36]  of stuff. And like make like 2d physics engines and stuff. Um, and I got into, I, I, I also worked in the web, uh, because
[01:22:43]  like websites are easy money, but I ended up, what I want. I, I was playing the band and I left school and I was having like a, like
[01:22:51] , I wasn't going to get a job in tech as like a university dropout. It was kind of challenging. And I, I, I was like going to companies
[01:22:58]  and being like, Hey, you know, hire me, whatever. And I actually came to, I got my first job in, it was actually a QA position
[01:23:06]  as like a kind of co-op QA. And I, I brought in a bunch of like 3d or like 2d, 3d game demos that I'd
[01:23:13]  built. And I was like, Oh, you see, here's my programming stuff. And it was all these game demos. But my job was building like a,
[01:23:20]  like a, a portal admin portal on the web. So it was a web programming job, but like, all I had to show for my programming was like a bunch of
[01:23:28]  game demos. And that's, that's how, like I'd done stuff before a long time ago, as I said, like building like back in the space jam days
[01:23:36] , like websites like that for like bands and for local businesses. But, um, yeah, it was, it was pretty, pretty funny. Cause then once I was
[01:23:44]  in there, that's when I got to web dev. I was doing.net and then I got into knockout and everything else. But it was for the longest time
[01:23:51] . I thought I was going to be game developer. No, no, I, I still am like a wannabe game developer. And that's why I'm trying to
[01:23:58]  do all this to like make web developers into game developers. But actually my sort of origin story into programming or like where I got really interested is actually it's quite silly.
[01:24:08]  But like when I was in high school, I used to try to make like these games in the terminal. So like I made a Pokemon game, which like showed a
[01:24:16]  map and then basically every like you would, when you click the right, the person on the map, like we would move. Right. And how I did that was I
[01:24:24]  cleared the screen and was printing. And when I discovered that you could clear the screen and make it feel like it was moving. So I created a roulette, like in
[01:24:32] , like roulette is that game, like the casino game where the ball moves and then stops on. And so I made that by like clearing the screen again and again
[01:24:40]  and like making that spin around. And I was so happy thinking I discovered like invented graphics. And then I, when I started reading about it, I realized that's literally
[01:24:48]  how all graphics works. Nothing. But it was so cool when the first time I realized I can create motion by like clearing screens. Yeah. Yeah. Yeah, exactly
[01:24:58] . And honestly, that, that, that was my start to the reason I got into even programming was my father. He was, he he's like an iron worker by
[01:25:08]  trade. He's a construction guy. He actually literally built the house that we lived in for my childhood. Like him, my grandpa and my uncle, the engineer designed
[01:25:17]  it. And they like literally built the house that we lived in. Um, uh, he, um, he went back to school at some point to learn computers.
[01:25:27]  Um, and, and he was like, he, he, he, he pulled me over when I was 10 years old. And he's like, look, Brian,
[01:25:34]  I, I, I made, I made a spaceship and it was, it was literally like a black screen. And there was like a white arrow and the white arrow
[01:25:43]  went up the screen from the bottom. Wow. Repeat it. And you could see the flickering. Like there's like a little white line at the bottom, like as
[01:25:53]  this thing, I mean, the, the ship moved pretty smoothly, but you could, it was like semi-transparent because of the flickering. And this is like
[01:26:00]  DOS programming days. And, and it was so funny. Cause like, I got it. Like I was like 10 and I was like, I understood that he didn
[01:26:07] 't just use paint. Like he actually told the computer to do it. And he showed me this code and it was written in quick basic. And I was just like
[01:26:14] , wow. Like, and so I went and like, that was the first thing I did. I remade the demo. And within like six months, like I was
[01:26:21]  building, I was doing off screen buffering. And then I was building like 2d animations and I made like an asteroid game about, about a year in, or like
[01:26:29]  when I was around 11 or 12. But it was like, it was, it was, it was, it was a similar demo is that. Yeah. We could replace
[01:26:36]  the screen. You know, I, I, that flicker reminds me. That flicker reminds me so much of my game because it's so evident when you were
[01:26:42]  trying to do anything like fast on the terminal, like the flicker around it. Yeah. Where was this rendering? This was rendering. Like you're saying it was rendering
[01:26:52]  in the terminal or. Like it was, it was, it was, it was like quick basics. So like it run. Yeah. Essentially. Yeah. You'd
[01:26:59]  be in the ID, which was like DOS based and you read the program, then you run it and then it would take over the screen buffer. And like, you
[01:27:04] 'd have like a black screen. And like, it, it was in the ID, but like, let's like those IDs were basically built in DOS. Like
[01:27:12]  I'm, I'm revealing my age a bit, but like it was like 1990. Um, so yeah. Yeah. So what kind of computer was that on?
[01:27:24]  Like the DOS was. Oh yeah. Yeah. Yeah. Yeah. Three, three 86 SX. I think. Um, no idea what 33 megahertz. Ooh
[01:27:32] . Yeah. Um, yeah. Nice. Nice. Yeah. Yeah. I mean, yeah, I, I, I, I think yeah, he went, how
[01:27:41]  old was I? He has about 10. So yeah, maybe, maybe, maybe, maybe. Yeah. I guess it was like 92, 93, but yeah, it
[01:27:47]  was only a couple of years before I got into web programming and stuff like that. But that, that, that was definitely my start. But yeah. What was your first
[01:27:55]  computer? Well, it was that three 86. Um, that when they got the new computer, they let me have that. And I put it in my room and it
[01:28:03]  was that there was so limited space that I removed windows. Cause they, they had windows 3.1 or something on it. And I was like, windows is taking
[01:28:09]  up too much space. So I just got like a DOS shell and then I, um, installed quick basics so I can do programming. And that was it. Like
[01:28:17] , no. What? Was there any GUI? Like there's no. Yeah. Yeah. Like this DOS style GUI. I just like, I threw windows
[01:28:24]  was too big. I, I didn't want it to take up space. I wanted to install the games I wanted and I wanted to do the programming. I, it
[01:28:29]  was, it was pretty quick after that. Right. You gotta understand that computers in the mid to early nineties went so rapidly, like between 1990 and 2003, like
[01:28:40]  every year or two, the computers just doubled in speed. It was just like insane. Wow. So. Yeah. Holy shit. Yeah. Yeah. So. Yeah
[01:28:51] . Like, uh, I don't know how people would argue with me that max would never be as good as. It's because I was doing programming and playing games and
[01:29:05]  Duncan was like the studio guy. He did all the music. He did the recording and stuff. I think the gamers would still agree. Probably. Right. So he
[01:29:13] , you know, pro tools and all that. Like, obviously I got my hand in it myself, but like that, that was, that was, that was his thing
[01:29:18] . So he always had these max, um, to do this. And I, I would always have like these gaming PCs, but yeah, I started with windows till like
[01:29:27]  first year of college. And then I was, then I was done. I said I used the Mac and I, there was no going back. But, uh,
[01:29:33]  yeah, let's, let's, let's, let's, let's, let's go to the next thing. I think, I think this demo has shown its
[01:29:40] , its purpose. Can you share your screen? You can show, she can show off, uh, some other stuff here. I'm going to. Yeah. I think
[01:29:49] . Yeah. I'm just going to give you a chance to. Yeah. In. And also a question. Will we go? Orin did ask this a little
[01:29:59]  earlier, how did you make all of this in two weeks? But I think he already partially answered it. Part of it was that, um, that like he, he
[01:30:06]  was incredibly fast at porting stuff. And thanks to Orin, your plugin in terms of porting react stuff, it was a lot easier. But I think the other
[01:30:13]  part you already said is you were able to almost copy and paste directly a lot of the stuff. A lot of the board. Yeah. For the rec three fiber stuff.
[01:30:21]  Like it was the surprising amount of it was semi framework agnostic. Um, yeah. And, and yeah, I think, uh, I've just like started
[01:30:31]  talking to Paul Henschnell and he, when I tweeted about like, we have solid and three working together. And so I've just started discussing if like, if it
[01:30:38] 's possible, right? Like that we can start making our, like, if we can get the R3F core into a framework, you know, stuff, maybe we
[01:30:45]  can have a solid official integration with what those guys are doing. And then all of their like sort of ecosystem work hopefully can be used by the solid guys as well.
[01:30:56]  Like, because right now I have, I'll have to create like a port of everything they do. Like, because sort of everything is going parallelly. And so as
[01:31:01]  much as we can pull out into framework agnostic stuff, it's going to be awesome. So hopefully we can get somewhere there. Also, I had a lot
[01:31:14]  of free time, like New Year's and nowhere to be, nobody to be with. Like I'm alone here in Mountain View because I just come here for work.
[01:31:21]  So yeah, so I just had nothing to do. And I was, and got the raw, I like, I just met solid at the wrong time. And I had
[01:31:29]  all the time to like spend on it. Yeah. Your work is here has been great. Yeah. So how's the screen going? Are you, are you ready?
[01:31:38]  Do you see my screen on your screen? Yeah. I can add it. I just wanted to know if you're ready. No, no, everything's fine. Yeah
[01:31:43] . I can show. So, so yeah, you've shown solid three, what it was doing. Uh, just to take you like, just to, for you
[01:31:53]  to see a little bit of like, in, in a sort of cleaner way, what is happening is. Yeah. This is like where the solid render is being used.
[01:32:02]  Um, this. Yeah, actually it's not adding too much information to what you had already done. But yeah, it was like, like this core web, all of
[01:32:11]  this is almost directly from like R3F stuff. It was like inside here. I'll show you like actually where react was. And, uh, like this stuff
[01:32:21]  is, they are like the R3F guys export all this from their internal stuff. Yeah. And then like, uh, the, uh, the, the react render
[01:32:31]  was just using these utilities to like do it's sort of orchestration. And we are able to also use the same utilities almost. Yeah. Those methods look almost identical.
[01:32:41]  Yeah, exactly. Exactly. Um, nice. Um, the other, so yeah. So they taking this custom render thing far, just like the, like the solid
[01:32:50] , like the react guys have. So I tried the terminal use case. Right. And that's, that's solid ink here. Okay. Yeah. Cool. Yeah.
[01:32:57]  I w I wanted to see this. So he also made a custom render for the terminal called solid ink. So yeah, let's, let's, let's,
[01:33:04]  let's see this again, again, I'll not take sort of any credit here. This guy, uh, this guy has done some amazing, amazing work. Like
[01:33:16]  he actually, I don't know if it was foresight or something, but he like so much of his stuff was outside of like what react was doing. Like, I
[01:33:26]  think I had to change with this. I have removed completely, but, uh, this also solid ink. Yeah. Um, like literally this one file is, I think
[01:33:39]  all I had to add and, uh, to sort of support solid here, more, all of almost all of this is like framework agnostic. It basically is
[01:33:47]  like a dorm on the CLI. So he wrote like a custom dorm thing for the CLI. It uses yoga, which is, uh, which is Facebook's like
[01:33:56]  flex box layout engine to do flex box on the CLI. Yep. It's crazy. And, uh, I've never seen any of these. So I, I
[01:34:04]  want to see what it looks like here in a minute, but yeah, keep, keep on going. Yeah. Uh, basically it gives you like, uh, like
[01:34:11]  dom nodes, much like div and all. It gives you ink text in virtual text. Uh, but yeah, over here you can say we do a create element and based
[01:34:19]  on the element type, we know what to do. Create node and create node is given to me by these guys here. And ink boxes. The other is a third thing
[01:34:27] . I think it's basically just three. Ink box, ink text and in virtual text. Yeah. Uh, create text node is the same set property. Just some
[01:34:34] , like some internal stuff they do to eat things in order, but essentially it's just a set attribute call to like, what, what, from what they had already provided
[01:34:43] . Uh, get first child this, I don't know why I haven't implemented it yet. It wasn't needed, but yeah, again, like almost all of the
[01:34:51]  utilities were like, because it's very similar to how react was doing. And he had already made the renderer cater to like a react reconciler. So thankfully
[01:34:58]  I was able to use all this stuff. And then there are a few like sort of utility components. They provide like text box, uh, spacer, but like,
[01:35:08]  yeah, let's see how this plays. So I have, I have a playground here with a few examples. Uh, let's see. So this is like a simple
[01:35:17]  example. I just show some of the styling things possible. Right. So, uh, so yeah, what it looks like. So I have basically bundled all of it
[01:35:26]  together. Right. So it's like solid JS plus the renderer and box. I see. So he puts like CSS properties more or less on the element. So
[01:35:34]  you have like flex direction and padding. Okay. That's cool. Okay. And then you just do render like, and then this renders to CLI. And,
[01:35:42]  uh, let's see if we can run this. Solid, uh, and, uh, play. Playground. You might want to hide the little messages. I
[01:35:55]  just might block stuff too. Yeah. Just hide it. Okay. Oh, yeah. Yeah. Okay. Oh, I thought it would hide my screen. That's pretty
[01:36:03]  dumb. Okay. Uh, border. Yeah. Is it does like a compilation right now, but yeah. Okay. Yeah. So this, this is doing, yeah
[01:36:13] , flex box. So this flex text in column one in two rows. It has like this first row and then the second row of stuff and different borders. Yeah. So
[01:36:23]  this is styling stuff, which is awesome. But, uh, normally you need state, right? So you, so this is how the counter. Yeah. So you
[01:36:30]  have. You've all seen. Yeah. The counter on the playground. This is like almost exactly the same. Yeah. I love this example. Everyone knows. I love
[01:36:39]  this example because it's like the hardest thing to do in react, but really easy for us to do. Yeah. So let's see what this looks like. This
[01:36:48]  is it, you know, updating. You probably don't even need that crit effect, right? Yeah. Yeah. Exactly. Actually. This is, this is, looks
[01:36:59]  like it's like react code almost. Cause our effects don't even clean up on return. Oh yeah. This might have. Yeah. It doesn't, it doesn't
[01:37:07]  matter. It still works. Yeah. Yeah. Yeah. Okay. Yeah. But yeah, I just want to show you quickly, like some of the other things,
[01:37:15]  like, so this is, this is like a select input. Again, you can componentize all this and then you have like a select input going and this is select input
[01:37:24]  with items, like very, very reactive stuff. And again, you, you can have callbacks and you can like set state in these callbacks. So search is one
[01:37:33]  of these things that I think like is a, is a, is a, a little complicated one. So like, uh, you have your query here and then we
[01:37:40]  have a text input and this is really complicated. So you have a placeholder. This is, this is. Cause he has this library already. That's basically framework ag
[01:37:48] nostic that we, you wrap like this using the custom renderer. I see all big capital components here. Is this using the custom renderer? Because I think box
[01:37:56]  for some reason he had created a component. Let me see what this does apart from just rendering the ink box. Okay. I think it just does some like styling stuff
[01:38:04] . Okay. That's not a big deal. Okay. So it is a custom renderer. So, but essentially he basically has already created the component library for you.
[01:38:12]  Like, so you, you, I guess this is always a thing like. So text input is something I had to write here. Like, uh, and this is again
[01:38:19]  taken from him, but yeah. Text input is doing some state to like manage the. Um, yeah, I, I gotta say that's probably the coolest thing about
[01:38:28]  these custom renderers. Because essentially like, because it's a platform, because they like, they don't have native elements. They get to create their own native elements.
[01:38:36]  So generally when you opt into a custom renderer, you're basically opting into like a whole component library. Like you have like a whole, it's like a whole
[01:38:43]  new world where all the pieces are kind of there for you. Assuming that they're written in a generic way. You're like, okay, there's this inquiry that
[01:38:51]  already does stuff or whatever. And I'm just going to bring it in. And now I have a full set of components that work in the terminal. Yeah. Yeah
[01:39:00] . That's the, yeah, that's the point, but it's more like, it's the set of host components. Normally it's like, it's not trying
[01:39:06]  to be a component library. It's just like the host components. But yeah, like the, the idea is that yeah. Much like, like, uh, with 3
[01:39:12] .js, right? Like 3.js are also classes, but we just sort of give you a virtualized DOM kind of for your canvas stuff. And this is
[01:39:20]  again, just like, it's given you a DOM implementation similar to like whatever the DOM is doing. But yeah, you give these custom elements, you can register your own
[01:39:28] . And yeah, it's, it's like the rendering life cycle is what you care about. And then all around that you figure out, okay, how do you
[01:39:36]  want to render stuff? But yeah. This makes me like so happy. It's so funny. Cause I, it wasn't hard for me to add the custom render.
[01:39:45]  I like, I like the logic, the stuff that I needed to know was like, when I looked at the others, I'm like, oh, okay. So
[01:39:50]  this is just DOM manipulation. Like it's a tree. So I know how to write an optimal DOM reconciler. That's the, I've, I've done
[01:39:56]  that many times in the past. And it's a small port of what solid already does. But let's see what others can do. Like once I've taken that,
[01:40:04]  the hard problem, like the, I guess that's the hard problem off their hands. It seems like you like there's so much you can do here. Like you
[01:40:11] 're like, Hey, I don't like. Divs. I just want to make a new universe where this is, this is what you're dealing with. Like abstract
[01:40:21]  over the DOM. You're like, I have my button and I have my, like, you just create a whole bunch of new elements and go like, welcome to the
[01:40:29]  new DOM. You can just make it and test it out here and go, look here, people come install the new DOM. Like DOM 2.0. With the
[01:40:37]  universal renderer. Yeah. Something like that was already possible, right? Like with the universal renderer, you can, you can sort of make the backend a little dynamic
[01:40:44]  where you don't have a fixed set of DOM nodes. You can like allow people to register new kinds of DOM nodes. And then it would like, you have like a
[01:40:52]  DOM that you can extend sort of like web components, right? You get web components inside SolidJ. Yeah. Yeah. No, that's cool. Is there any
[01:41:02]  other cool CLI ones? Yeah. This one is a search one, which I, which I think is a pretty interesting one. So it, it, on text and
[01:41:08]  put it passes the value on change. We look at, uh, we, we like update our local state here. So that, so like for, and you can imagine
[01:41:16]  this local state being used to like compute search results. Right now I use like every letter as a search result. So as a type, you will see like, and
[01:41:24]  you can imagine like how you would attach this set to like some state results. Right? Like, like as I'm changing, everything is being rendering just in place and things
[01:41:34]  have been rendered below it, above it. Like these spinners are being rendered above it. Uh, and then yeah, as I change, uh, things are things
[01:41:41] . I mean, and when I'm completely out it, it renders a placeholder as well. Yeah. And then once I'm done and when I press enter,
[01:41:49]  it like console logs it here and then keeps making sure like the, the, the rest of the app is still running. Right? Like because this is, this is
[01:41:56]  really quite cool. Cause in this one, you don't actually have any real dom. It's, it's like I was saying, this is just pure universal renderer
[01:42:02] , but like the control flow works like that for. Yeah, exactly. Down below. This is, this is our, this is our standard for. Exactly. Yeah.
[01:42:12]  There's nothing different here. It's exactly the same. Yeah. Yeah. This is, this is the kind of stuff I found really cool. Yeah. And you
[01:42:18]  can use like margins to like add. Yeah. Just like normal styling to change how far this stuff is going to render. No, we don't have hot module replacement yet
[01:42:28] . Yeah. I guess that's always fun. Platform specific pieces. Yeah. Yeah. Uh, but yeah, so these are just components I use in these examples. So
[01:42:39]  spinner, text input, these are, then you can like start componentizing some of your CLI utilities. Um, oh man. Yeah. Like I could see once
[01:42:49]  you get started, you're just like, what else can I make with this? Yeah, exactly. No, no. Yeah. It takes you down, down a rabbit
[01:42:57]  hole. Uh, yeah, this was, this was solid ink. I guess like I have, uh, one more, which is like actually markdown. It's not
[01:43:07]  a custom renderer. It's just a transform we do so that we can like do markdown stuff. But I guess I can show like an example of that if
[01:43:15]  you're interested. Yeah. Yeah. Yeah. Sorry. Markdown is something that, that people have been, have been interested in, um, in solid and we haven
[01:43:24] 't had a good solution. I just said before you show the markdown, just like curiosity, like high level, how did you approach it? Cause we've had
[01:43:31]  a lot of challenges dealing with markdown and MDX and stuff like. Yeah. So, um, so essentially what react does, I looked at what react does is take
[01:43:40]  the markdown. Uh, there is MDX, JS, XTM. These two, uh, sort of compilers that take markdown into, uh, into
[01:43:49]  JSX essentially, right? It produces a JSX component for your markdown file. Uh, and what react is doing, the react version of this was doing,
[01:43:59]  was doing the JSX, including the transpilation and then you're getting like directly JavaScript code that you can run in your browser. Perfect. Uh, but with solid
[01:44:07] , we had a few more concerns, right? Like we need, uh, because so much is related to our JavaScript transform, our hot model replacement, uh, sort of
[01:44:15]  state updates, uh, dynamic stuff. So we needed, we needed, uh, the same compiler to not do too much. Right. We just needed it to give us
[01:44:24]  JSX and then we can take over, right? Like we know how to JSX. And so I think earlier solutions were trying to do the whole thing where they were
[01:44:33]  taking MDX and trying to do the MDX compilation, do the JSX compilation in a plugin and try to output that and make sure it still worked fine. Uh
[01:44:42] , the, the approach I took was that we already have a pipeline for, uh, compiling TSX, JSX stuff. The solid, the solid plugins already there
[01:44:49] . So, and the, the, uh, the likelihood is that the solid plugin can be configurable, right? Like you, for example, for something like custom render
[01:44:56] ers, you would have to customize it. And so you want all the MDX stuff to be able to, to be able to use all that. Because like,
[01:45:03]  for example, in my MDX stuff, if I start using three J like R3F, like solid three code, I wanted to work with my, uh, with
[01:45:10]  my sort of transformation. And so essentially what we eventually ended up landing on was this solution where, uh, we use XDM or MDX JS. There are two
[01:45:22]  solutions, uh, as a wide plugin, and we ask it to, uh, keep the JSX, use solid JS as the import source. And they have this culture
[01:45:31]  of providers to provide. And thankfully we have like context, right? So we can, it applies one-on-one to what the react concept was, but it is
[01:45:38]  a react concept where you're like, um, when you render this MDX, it is going to have H1, H2, P components in it. And
[01:45:46]  so like, what do you want to render if you don't want to just render like normal DOM elements? So this is a way for you to override it. So
[01:45:53]  we provide like default implementations for all the DOM nodes, just the, it just like makes the same DOM node essentially. But we have to do it with dynamic because it
[01:46:01] 's strings involved. Um, but yeah, then, but then you can like override it when you import, when you import a dot MDX file into your JSX
[01:46:11]  component. And when you, when you're about to render it, you can pass it, uh, um, a components sort of, uh, let me see if I
[01:46:20]  have an example here. Oh, I have an example here. Um, but essentially like you can, uh, when you make a component, you can like pass it components
[01:46:31]  as a prop. And that can just be a set of override. So you can be like for H1 render this component. And then you just give it a component
[01:46:38]  that you want to render for every H1. It will receive the same props. So it will receive children, text and all. And then you just like decide how you
[01:46:44]  want to render it. Um, um, and, uh, you just set up that and then you put your own solid, like whatever your version of the solid plugin you
[01:46:55] 're using to do your compilation. And you just give it the extensions that it should also support for like, for like transpilation. And now what you get is this
[01:47:04] , uh, for people who haven't seen this before, this is like what a solid startup is starting to come to look like. Uh, this pages is, you
[01:47:13]  can, you'll be familiar from next.js or whatever, but inside this, you will see like all of these are markdown files. Uh, just state markdown
[01:47:22]  files. this full disclaimer is like remixes documentation for it so that we can, yeah, do solid start documentation on top. But, um, but yeah, let
[01:47:32] 's see if we run this. Um, that's not good. Wait, am I in the wrong place? Oh yeah, sorry. This is with MDXDS.
[01:47:44]  So this is a different example. Let me, uh, let me open this example. God, what is happening? Uh, we changed pages to routes. Yeah.
[01:48:01]  Yeah. Sorry. No, no, no, no. We break solids. I break solids starting nightly. You know, I contribute a lot. Okay. Like,
[01:48:10]  okay. These are the, these are the sort of the endpoints that are produced just from these markdown files. So you can imagine like, and you can do
[01:48:16]  static generation on top of this and get a pretty fast, like markdown to documentation site going, but you open any of these. What happened? Oh, it opened somewhere
[01:48:27]  else. Uh, sorry. Let me bring that. Yeah. It's always the fun thing when you got stream yard going. Yeah. So there's CSS here, right
[01:48:36] ? But yeah. So, uh, there's some CSS have applied to like, make it look better in a pros. The headers are added, but yeah, like
[01:48:43]  all the styling around it, the navigation stuff. I haven't figured out. I added some code styling. Oh yeah. These are remixed docs. You can. Yeah
[01:48:51] . Yeah. These are, these are, yeah, these are remixed docs like. Remix tonight. Yeah. There are, there are plugins like which, which will
[01:48:58]  handle all this front matter and stuff. And I haven't set that up yet, but yeah, this was just to show an example of like markdown working. Yeah
[01:49:06] . I'm pretty stoked on it. It seems pretty essential for doc sites. A lot of websites, um, blog sites or whatnot. Like you, it's so much
[01:49:14]  easier just to write in a markdown. Um, and the fact that you can just kind of interchange it with the JSX. Um, yeah. Yeah. Yeah.
[01:49:24]  Hopefully like this stuff can become meta tags. I think that's what remix does. Like change these to meta tags or, uh, from here. So hopefully we can
[01:49:32]  do something like that. Um, no, that's definitely very cool. Um, and it's just a V plugin. So yeah. Yeah. For the most. By
[01:49:43]  us. That's even better. Yeah. That's the thing. We've been working on a lot of, uh, like V plugin pieces and, uh, and those
[01:49:52]  guys are awesome. Yeah. You, you, you went in and you split them all out. Like I had one mega V plugin doing like everything. Um, because
[01:49:59] , you know, I was just like, oh yeah, we need this. We need this. We need this. And, uh, thankfully you, you went in and
[01:50:04]  split them out now into like a bunch of separate plugins. Cause conceptually, since we've been building everything on beat, um, it's not hard to picture that solid
[01:50:13]  start is like that opinionated piece that has like some specific pieces that we've chosen that work well, that are a good set of defaults, but like the file
[01:50:22] -based routing or this MDX plugin, or, you know, any, because this MDX plugin is using the file-based routing. Um, essentially it's easy
[01:50:31]  to picture how, you know, our, our starter templates are also built on, on beat. Like the ones that you just like D get from our templates repo. It
[01:50:40] 's not hard to picture just adding these plugins to there. Um, like where they make sense. Sure. Yeah. I think it's a good example of like how
[01:50:47]  we have set it up, right? Like we have almost all these pieces as like separate components that you can like split out of. Yeah. Right now they're still all
[01:50:54]  in the same repo and same, same. But I imagine that we will split these out at some point as, as they start stabilizing. Yeah. Right now they're
[01:51:00]  still all in the same repo and same, same. But I imagine that we will split these out at some point as, as they start stabilizing. Yeah. Right now
[01:51:07]  they're still all in the same repo and same, same. But I imagine that we will split these out at some point as, as they start stabilizing. Um
[01:51:14] , because yeah, we're on beat, you know, and we doing that, it's a great platform and it makes things really plug and play. The amount of stuff
[01:51:24]  we get for free here is, is amazing. Yeah. And for the end users, it's, it's a pleasure to use. I think the hardest thing about feet
[01:51:31]  is that if you peel underneath, like lift up the, the, the, the, the, the, the curtains a little bit, you'll see that it's
[01:51:38]  a whole bunch of stuff hacked or a few things together in a very messy way. That is confusing and can be, you know, like you're just like, Oh,
[01:51:49]  okay. Like it can be hard at times, but from the outside perspective, Vita is amazing. So. Okay. Okay. Okay. That's a, that
[01:51:58] 's a, that's a, that's my take. Well, I'm just like, there's tricky things. You have to, you have to deal with the fact
[01:52:01]  that you have rollup plugins that aren't compatible with rollup necessarily. And he has built under the hood that, that does some stuff and not other stuff. There
[01:52:10] 's, there's tricky parts, but you, you know, it doesn't torture the user. Like at all. Right. It's, it may, it's a
[01:52:20]  pleasure to use. Yeah. And, and the plug, and once the plugins are all together, like these probably will never be transported. Like they're not transported to a
[01:52:26]  rollup. They're very specific. I don't see this like as a universal plugin. Yeah. Yeah. But if you're on Vita and your stuff's
[01:52:33]  all on Vita, like you're good to go. Yeah. Vita is crazy in the sense that it actually makes me want to leave the config there and keep it
[01:52:42] . Like, I know I can change it. I know it's like so usable that I actually want to keep the country for next.js. I was so glad that
[01:52:48]  I never have to see the webpack config that they have there. I don't even want to imagine what it looks like, but for the Vita stuff, I just
[01:52:55]  want to have my plugins there just in case I want to take them out. I want to add new ones or I want to reorder them. Yeah. It's
[01:53:01]  amazing. And I think like, yeah, it is again, like I think Rich Harris's taste coming down to us because like it's based on the rollup API.
[01:53:09]  Exactly. Yeah. And that is really ergonomic, the rollup API, like lower transform resolve. You have three things you do with the file. Figure out what you
[01:53:18]  want to change. But yeah. I know, I know you're a little, you don't want to jump the gun on this, but I wanted to discuss.
[01:53:27]  Okay. You can sure go for it. I, I've been a little hesitant showing people stuff on solid start because I've been, I know stuff's still changing,
[01:53:37]  but you know, we can always, we can always use some early feedback. Does it like I'm gathering people in the chat. You guys want to see some of
[01:53:44]  the latest stuff going on with solid start. See, see what we've been building. Yeah. I mean, say something in the chat. If, if, if,
[01:53:50]  if that's something that would interest you. I'll wait, I'll drink some water. And actually while that's going, there's actually a couple of questions you
[01:54:01]  can answer. Can you create animation on the CLI? Yeah. So you can control state just like you would. So like, let's say, uh, uh,
[01:54:10]  you just had like, let's say an X variable, right? Like you're constantly updating one, two, three, four, five, six. And then on
[01:54:16]  the screen, you can just have a letter appearing X margin rights away. And so the margin right would keep changing. The X would keep going away and then you can now
[01:54:26]  control, like you can tween how the X changes. So because it's like, it all flows down from state. If you can animate a JavaScript value with like pop
[01:54:36]  motion, pop motion is actually perfect for this. You just use pop motion. It will give you a subscribe method to the animation and you just set state with the return value
[01:54:45] . Cool. One more question. There's this one YouTuber who, who was doing some crazy math to like do game, a game on the CLI, but he
[01:55:01]  was doing all the math to make it have perspective. Like to sort of with camera and just like, so that, you know, he was rendering things a little diagonally
[01:55:10]  so that when you moved around, it seemed like you had perspective in the CLI. That was so spooky. No, I don't know. I don't know
[01:55:16] . I don't think I can do that yet. Okay. Yeah. So the, the, it seems like some people are interested in seeing some solid start stuff.
[01:55:27]  I think, I think, I think, I think, I think, I think that's, that's where we're going here. Yeah. Okay. So I guess
[01:55:35]  like one thing just to prompt off thing is like, one of the big things we were working on is the interaction with the server side that the client has. I think
[01:55:44]  the client side solid has figured out pretty well, uh, what to do, what to render, when to hydrate and stuff like that. But as, uh, like
[01:55:52]  Ryan also observed, it's, it's this interaction with the server, this piece that most of these meta-firmworks are like trying to put their spin on and
[01:56:00]  like trying to get opinionated about and give you out of the box. And, uh, we were trying to figure out what the best way to do this for solid
[01:56:07]  is. And a few of the current models are, you have something like API route. So if you're coming from next.js, you have like, you create a
[01:56:17]  new page in a slash API folder, and then you fetch from that file, from that route that you created, you do the parsing of the JSON, you send JSON
[01:56:27] , and then you basically use that data in your app. Then, uh, in the middle came something called Blitz.js. I don't know if everybody's
[01:56:34]  used to it, but Blitz.js used to have this concept of, let me, let me get an example here. So I have this example, but this just
[01:56:44]  used to have this example of, you could do import, uh, sorry. And, and for you, for people who were using solid start earlier, I had this concept
[01:56:53]  called actions. It was very similar to Blitz where you could basically use the imports. Um, and in my case, I use proxies, but as a
[01:57:03]  way of essentially having a specialized endpoint, like a function, like an RPC call. So you basically just import the file, uh, import the function. And if it
[01:57:14] 's on the server, it'll just call the function. But if it's on the client, it will actually make a request in the background and call the function on the
[01:57:20]  server. Um, yeah. Uh, yeah. So yeah, this, this is an example of like this get user. You would use somewhere in your, um,
[01:57:27]  in your function, in your, uh, you could just use it as an async function. And yeah, like, like, like Ryan said on the server is
[01:57:34]  just calling the function on the client is doing a fetch call. And this has this, I thought it was a very nice API because firstly, it lets you use TypeScript
[01:57:43]  out of the box. Like, so if you're using TypeScript to define get user in the other file, you get auto complete out of the box. No,
[01:57:49]  like extra gymnastics required. The compiler takes care of it. Um, the one issue. And, uh, yeah, obviously like all the benefits of an RPC,
[01:57:59]  like you can co-locate this code pretty close to your, pretty close to a component. It still has to be a separate file, but it can be pretty close
[01:58:06]  to your component. And, um, and you don't have to figure out, okay, what to stringify, what to parse. It's just JSON. Uh,
[01:58:14]  so it's easier to use. Yeah. I mean, it's funny because I never saw Blitz. Um, like I had never seen Blitz. I didn
[01:58:24] 't see TRC. And I, I forget where I got the idea from exactly, or like what influenced me, but I, I built it this, something very similar
[01:58:32]  into solid star. I was like, this looks very appealing. And I was really gung ho on that. And I was trying to force this on everyone. Cause everyone
[01:58:40] 's like, oh, I'm on API routes. And I'm like, no, you want this. Yeah. And then someone's finally like, it's Blitz
[01:58:44] . And I'm like, yes, it is Blitz. I think, I think this is very, very appealing. And Blitz, Blitz was getting very popular
[01:58:51]  with like the people started using Blitz. Like the people started using it. And it was really this, this part where like the API layer was really abstracted away
[01:58:57]  from you. Um, and, and yeah, actually looking at actions in your thing was, was what, what, what me excited and thinking that you would be okay with
[01:59:06]  like the model I'm going to propose or something like that. Right. Like this RPC heavy, like co-location heavy models. So this is, this
[01:59:14]  is, um, this is Blitz. The third model that came in this paradigm of like doing server interaction with the client. And this server interaction, like the server interaction
[01:59:21]  we're talking about is mostly like data for your components or actions from your components. Like for your UI specifically. So remix came up with this third model, which is
[01:59:29]  next to your components. You export one loader, export function loader. Uh, this, this takes a request and you return a response. And, uh, this
[01:59:39]  request is available when you do something like this use data call here, right? Like whatever this loader responded to responded with that would be available here. And like every
[01:59:49]  page would have also a default action and action is essentially the, the end point that's hit when you submit a form. Like on this page. So if you have a
[01:59:59]  default form on this page, you submit that form. This action is what will be hit. And then you can like get form data off this request, decide what to do
[02:00:07]  with it. Copilot trying to tell me what to do, but yeah, but yeah. So this is, this is remixes API of like, okay, every
[02:00:16]  page can have an accompanying loader accompanying action. The, um, this is really awesome. Again, like, I think it takes the co-location even further.
[02:00:24]  So like for the component you have, you have the loader right there. Um, you have the action right there. But I think the problem I found with this is
[02:00:31]  the first problem I had was this, like this loader. Um, the first was obviously I think a typescript problem was one for me, which is like, I
[02:00:41]  have to take the types out. Uh, declare them twice. The other was that we're not big fan of like name exporting stuff and like using that as the API
[02:00:51] . Right. And there was, and there was, and there was a third thing, and this is kind of a solid kind of detail. Solid runs on reactivity
[02:00:59]  and reactivity runs once. And like, that's how it tracks. So while we could kind of build things, we all, if it updates in the browser, we
[02:01:09]  need reactivity in the browser. And you know, we have create resource, which has the two halves. It has the query half and it has like where you generate
[02:01:15]  the query. And then it has the part that does the actual fetching. The one half is reactive. The other part is a promise factory. And the reason we do
[02:01:22]  that is because the reactive part always has to run and updates. It does the work. Um, but the fetcher, we can do interesting things like fetch on the
[02:01:32]  server, finishing the client or fetch on the client and fetch the client. And the separation allows us to basically do that isomorphic trick where we like, you know,
[02:01:42]  start a promise and have it resolve on in the client. And essentially, and you, you valued this too. It would be really cool if we could keep our client
[02:01:51]  side model. One of the. Exactly. Is those like data functions we had in the router and our approach to doing this parallelized fetching. It wasn't clock tied
[02:01:59]  to the server, like remix. It was like, I've been using this. I showed it in last stream. Was it where I showed a client side rendered solid app
[02:02:07] , like beating every, everybody in the benchmark. It was because we use these parallel applies fetching, uh, thing. And that's what I was doing for years
[02:02:16]  in client side. It was really performing. You don't need a special meta framework to do this. Um, I, I built the router that way. And, and
[02:02:24]  essentially I value the option to be able to do things both ways. Not like, not just be like, okay, no, this is the one way you fetch data.
[02:02:36]  If you want to fetch directly from the client, go for it. You know, maybe it's faster. Yeah. And, and using this create resource here inside this
[02:02:45]  over here is like where all your arbitrariness goes. You can fetch from the client, go back. Right. And the challenge of the remix model, uh, at
[02:02:55]  least for us was we, we, we had to have a different thing. We have the, like Svelte actually has the isomorphic, uh, loader
[02:03:02]  like we do, which we call the data function, but then we'd need another loader that only ran on the server and can connect the dots. So having all
[02:03:08]  these exports and stuff, it's kind of messy and doesn't fit with our patterns. So yeah, that's, that's my real. Continue. And another issue I
[02:03:17]  found with this action model was like, do you, is it really realistic that there's only one form per page and this sort of, because it pushes that model early.
[02:03:26]  And it's very realistic that there are more forms of it. I know like it's, you can hit different endpoints, but now you're priced into, I
[02:03:32]  mean, it's fine. If you like rest API type style, go make a file for every single endpoint that you're going to hit. You know, there there
[02:03:40] 's like a disconnect here conceptually, because when you make a rest API, you're making it it's model centric essentially. Right. Like, like if you use
[02:03:49]  rail and you're like make my rest API, you, you, you'll have a show, an index, a post, like it'll have all the verbs tied to
[02:03:57]  that model. And in a lot of cases you will have a page that maybe reflects that as well, but it's not necessarily one for one thing, just because you
[02:04:04]  have a post page doesn't mean it reflects the posts API necessarily. Um, so in one way, the, the action mechanism in a straightforward, the way it overlays
[02:04:14]  on itself and remix works really well. Like in like this kind of case, because from a progressive enhancement standpoint, like where you do load HTML pages, like it works.
[02:04:26]  Seamlessly, but the thing is the reason I liked the RPC stuff was because I could just like write some functions, just be like, this is my API
[02:04:35] . So whatever I feel like it, I don't need to put, make 10 different files to represent this. I just make one file and put, or two files and
[02:04:42]  make the functions that I care about like this here and the function that I care about this here. But the, the, that my problem with actions was they weren't co
[02:04:49] -located enough. Yeah. The reason you want to co-locate is, and it's kind of weird. It's an intuitive because it's less dry
[02:04:57] , but that's how you get specificity. Cause if you make a general API that you're going to use in a bunch of places, then eventually one of those places
[02:05:05]  is going to be like, no, I want to format the date differently. And heaven forbid, you don't want to bring moment into the browser. Right. So
[02:05:11]  like the whole react server components thing. And a lot of, and even remix, this is where it succeeds great. Well, is that you're like, for this location
[02:05:19] . The data is, it's, it's already formatted for me. It's per component thing. So there like, I wanted the flexibility in the sense to
[02:05:29]  both be able to just group things. However I wanted, like multiple functions and be able to aggressively co-locate. Um, and that, that, that those,
[02:05:39]  those things are kind of in conflict. I'm a fine of, I'm a fan of like aggressive co-location as well. Right. And I think why
[02:05:48]  aggressive co-location is a good model to sort of pursue is because like, if you can, if you allow people to aggressively co-locate, they can obviously
[02:05:56]  take it as far from the file as they want. But then they do that because it fits their mental model of how those pieces are fitting. Not because the tech makes you
[02:06:03]  put it in a separate file or makes you put it in the same file. It's then up to you for the men. Like it's like essentially for my app
[02:06:11] , I want to think of all my old app as one namespace. Right. And then I split things into files as they make sense to me when I want to go
[02:06:18]  back and edit them. When I want to refer to similar pieces together. And I think when the tech starts prescribing how you should also like, and like, this is
[02:06:26]  my thing with file based routing also. Like I, I think it's very, it gives you a lot of pros. And so I think I'll buy into it most
[02:06:32]  of the time, but yeah, I think like there's still some places where you're like, okay, I'm just starting off app. I don't want to
[02:06:38]  create four files and then figure out if I'm like, you know, import my components and all of them. Maybe I just want to start off at one file. And
[02:06:44]  if that's allowed and then you can split out into as many, you know, routes, folders as you want. You, it's up to you now to like organize
[02:06:50]  your code into like, what makes sense to you. The tech doesn't prescribe anything. Yeah, definitely. Yeah, definitely. So are we ready to show people what
[02:06:58]  you've been working on? Yeah. Okay. So this stuff. Bye bye loader. Bye bye action. Bye bye loader. Bye bye action. Actually. Maybe
[02:07:08]  make your window a little bit bigger. Cause we're not really demoing anything in the browser. Yeah. Yeah. Thank you. So this jokes example is where I
[02:07:15] 'll show some of the magic we've been working on. This jokes example is again, kudos to the remix guys. They're literally the three of the best teachers in
[02:07:22]  the world. So I take all teaching resources from them because, uh, yeah, they know what they're doing on that front. So you have your entry client,
[02:07:30]  your entry server, nothing, nothing weird here. Uh, these are, yeah, like, as you would guess entry points to when your server's running on the platform.
[02:07:38]  So now let's look at routes. Uh, although the one thing people might notice is, which is new, is those entries, um, actually do use the browser request
[02:07:49]  response object. Remix has had that influence on us. We are actually using standard request response, you know, cloud flare workers and stuff use it. We've,
[02:08:00]  we've made the aliases to node the it's, it's all universal on top of the adapters. And now you have access to the, this, and we
[02:08:07] 've, we've made sure that it's support streaming. Um, so yeah. That's also pretty cool here. We can show that, right? Like entry server is
[02:08:14]  now because it's modular. Like you got, you control the top level, like request to response pipeline. And so you want, you decide what to include. So
[02:08:23]  this, you can either render page to async string render to like stream, right? And then you, this is as simple as like changing. Okay. What renderer
[02:08:32]  you use in your handler. And so that was the main point I think behind exposing entry server, uh, and entry client to like, give real flexibility here. Um
[02:08:40] , but yeah, let's see how some of the data stuff is going. So this is an example of the jokes screen. And, um, if you look at the
[02:08:52]  joke screen here from remix, it is quite similar, right? Like it has uses this loader data and this loader is defined here and this loader runs on the
[02:09:02]  server. And we know that like, because we know what the loader is doing. And so we wanted to see, and I, this co-location is
[02:09:09]  almost as close as it could get. This could even be here, but yeah, but yeah, this is quite co-located and let's see what we can do
[02:09:16]  with our model. So we have this use data that you must be familiar with from solid app router, but essentially we now allow you to add this export. And you
[02:09:26] 'll see this export is, is decided is designed to be isomorphic. So the same route data, just like your dot data files from solid app router. They're
[02:09:36] , they're running the same on the, on the server and the client. So, and this is so that, you know, suspense works with resources, hydration works because
[02:09:44]  all of that is defined around resources. But inside, so you remember from create resource that you basically get a promise, right? Like a promise generator function. And so
[02:09:53]  the API we've thought of is like, what if you could just define your API generating function as this code inside runs on the server. And this by just by marking
[02:10:06]  it with a server sort of function call around it, you essentially turn this async function inside here into a sort of an API endpoint that calling this fun, like what this
[02:10:19]  returns you. If you call that you're essentially doing an RPC call to this function here inside that. And what this returns is what you would get returned as JSON
[02:10:29]  in your data here. If you don't have that server function, this just runs on the server that runs on the client. Like if you've ever seen any of the
[02:10:37]  hacker news demos, that's all we're doing in the data TS. We're just calling the data and then we call use data. But here just wrap that call
[02:10:46]  in a server call. Obviously this isn't going to work without server because you're hitting a database. Yeah. But yeah, but to support this, this point.
[02:10:56]  So for example, this, so we're doing a similar thing here. I like, and this is again to show you the flexibility. So this fetch API is just a
[02:11:02]  function we've defined somewhere else in a different, but we over here sort of just decide that, okay, maybe I want to do this all data fetching on the server
[02:11:11] . Right. And so now I can just over here, I can wrap this in a server call. It becomes an endpoint. This, the fetch API is never called
[02:11:20]  on the client. This file is not imported on the client. All of that is kept out. And then like yesterday, this is, this was funny, right? Like
[02:11:28]  yesterday I was showing you this example. You did this, you added the servers here, you ran it and you're like, wait, this is slower than running it on
[02:11:35]  the client. And we observed that the fetch API that we have is hitting these endpoints. And they, they turn out to be slower when we do it from the
[02:11:44]  server, when we, instead of when we do it from the client itself, like, because these are just external endpoints. And so it was such an awesome moment when
[02:11:51]  I could tell Ryan that all you have to do is just remove the server call. Right. And now this fetch API is happening on the client. And as long as
[02:11:58]  the fetch API itself, like this function is isomorphic, this works, right? You can just add and remove the server function to control what happens on the server,
[02:12:06]  what happens on the client. And the idea is that you really do think of what your server is doing just as an async function, right? Like you have to wrap
[02:12:15]  it in French. You have to, in a fetch call, you have to make a request, send a response, but it essentially is an async function. Yeah
[02:12:21] , because the, the function here isn't special, right? Like this is a create resource thing. The function there has the create resource signature. It passes in the source
[02:12:31]  and then it passes in the object with, is it refetching? And like all the stuff you, you just cross the boundary and suddenly the function that you call for
[02:12:39]  your resource, you provide the resource just happens to run on the server with all the same arguments. Yeah. And, uh, and this can be taken, I think
[02:12:47]  like this allows a crazy level of composability with this stuff. Right. So now, now you can imagine that, uh, for example, let's, let's look
[02:12:57]  at here. So like, because the, uh, sorry, this is the example, but yeah, because this server thing can be anywhere, right? Like for me,
[02:13:08]  like refactoring things is just taking that server along with me. Like even, or, or even if I don't do that, I can just take this out
[02:13:17] , take that out this server call. I can put in my component. Like if I want to not do prefetching and I want to subscribe, like I want to
[02:13:24]  do in, in component, like data fetching, right? Like it might be the opt, but, but this stays in here, right? Like this, this is
[02:13:32]  not a problem. And this, this is sort of as co-located as you could get with your data. Like right now, the reason we do it outside
[02:13:40]  and it's a very good reason is that because we want to do prefetching, right? When we come to this route, we want to get, start getting the
[02:13:45]  data before we can start, uh, rendering the screen. And it's, it's not for a technical reason, right? Like we're not splitting it out because we
[02:13:53]  need to run it on the server. We're splitting it out because we need to run it before we need to run this data function actually ends up in the, in
[02:14:01]  the main bundle and the component code ends up in the split chunk. So what essentially happens is when you hit a new route, the data function code is already there. And
[02:14:11]  it goes, okay, I'm going to fetch. And then I'm going to grab the code split code at the exact same time. So there, and it's not
[02:14:16]  just one level deep. We have nested routing. We have nested routing. So it's actually goes. Okay. Every data function along this route. Cause we
[02:14:22]  know what the route is go fetch at the same time. And every component nested level, go fetch those all at the same time. And then we, we just gotta
[02:14:31] , we got a race on our hands. When everyone comes in first, you know, if the data comes in first. then yeah I mean there's no component to
[02:14:38]  render so who cares right but if the component comes in first it starts rendering and waiting for the data and it triggers suspense like suspense is still running and the thing with if anyone
[02:14:48]  knows how solid suspense works is we don't throw stuff away we build real dom nodes during the suspense so essentially you're you actually get a head start you're actually building your
[02:15:00]  UI before the data comes in while suspending or doing the transition and then the data comes in and completes the story so this this this means for really efficient data loading as
[02:15:10]  I said we've been using this technique forever on the client side rendering and it was it was this this is just like a nice little addition we're like oh no I'm
[02:15:17]  just gonna fetch from the server and I didn't have to do anything special I didn't have to make an API or anything I just server yeah another thing we thought about was
[02:15:25]  like how like let's say you already have a client side app with like solid app router use and now you want to convert into SSR start using something like solid start
[02:15:34]  we don't want to have you change your mental model change how you're doing these things change where you're writing your async functions to figure out how to do server side
[02:15:42]  only work right that's what you want to do with SSR do a lot of work on the server side and just like opting into server side only functionality should be really
[02:15:50]  really really easy like and anywhere in the code so for example another so this was on the data fetching side right like so we have these server calls uh like sort of
[02:16:01]  almost all over the place for example this shows the server call being used slightly differently because over here we might want to catch the error and do different things based on what the
[02:16:13]  error was so now this server call can be composed even more inside my function and uh it will be sort of it will this will run but like from the consumer side you can
[02:16:25]  you can think of this through as catching this this sort of sort of this catch as catching this throw and this throw is running on the server right like since it's in the
[02:16:35]  server function this throw is happening on the server but what you catch here would be the same response um yeah and yeah go ahead what you're gonna say no that's cool
[02:16:46]  yeah yeah for the typescript stuff i don't know like this is now my ideal way of doing it like i just use the reference from route data over here and so now
[02:16:57]  like data is properly typed so like i don't need to establish write any new types anywhere like so i could comment out loader data and all the stuff they were doing
[02:17:06]  okay nice nice yeah i was going to ask you about the typescript side yeah uh no the type never want to write types like almost all the apis i try to come
[02:17:15]  up with have to be type a really simple solution for that you use a dot js extension and then you just don't have the right types so does it uh i've tried
[02:17:27]  that i've tried i tried to do like rich was saying that he has an amazing experience doing like js doc based type script i i i can't take it i i
[02:17:37]  i can't take it i i actually i don't know you have such a long history i think i have like only almost done type script like for me javascript is
[02:17:45]  like what do you what is happening it's not telling me what to do but um but i wanted to show you another thing we were working on is and this is like yeah
[02:17:55]  remix most of like how they do forms right and we wanted to figure out how we would do forms and so i wanted to show off how forms and sort of our server
[02:18:04]  side api fits very well right like so yeah because you you haven't mentioned it yet but you can have as many server functions on a like you know on the page
[02:18:13]  as many possible yeah like yeah uh yeah so like uh the server modules it doesn't matter like where you use them the probably the only rule is that don't use things inside
[02:18:24]  here that you declare outside here yeah they get hoisted top levels so that is a consideration here uh you can't like use closures in them but like yeah yeah so
[02:18:37]  yeah still figuring out how to communicate everything there and like uh probably the compiler should be able to help in like catching those bugs early if you do something like that but essentially what
[02:18:48]  we do is uh the helper we're trying to come up with there's something like a create form helper so what remix does is and you can see the example here uh
[02:18:55]  i want to show a different form because i want to show uh i want to make a point where so they have this joke id and they have this action here which is basically
[02:19:09]  action is what gets called like when a form is submitted and this action is for deleting uh um a joke but this action is not actually used like if you see the component
[02:19:22]  yeah this here so this action is not really used here it's being used in so this just renders joke display and now in joke display you have to do wait right because
[02:19:34]  because the the it's the joke end point so you have to co-locate it with the file but you're actually using it somewhere yeah so like in their example they
[02:19:43]  were doing cons to use action data and like doing the form here right and so like they were doing the form here but the the action that it would trigger was in like
[02:19:52]  they would need to know where joke display was embedded like which all routes and only then they could make sure that okay it's being it's calling the right action when i do
[02:20:02]  a form submission here and so that i thought was a slight issue and the api i could think of was that you should be declaring this right here right like you should be
[02:20:13]  declaring if there's a delete form here associated with a joke you should be declaring what the server side functionality for that is right here yeah because you can always abstract away the
[02:20:22]  the actual server function call if you like like want to make an api out of it yeah definitely definitely uh no yeah that that's definitely possible you can take things far away
[02:20:32]  as much as you want like i'm trying to think of how close you get them to like where you use them yeah um so yeah that that's my main intention so
[02:20:41]  so over here um yeah so like this this you can just like be like okay yeah yeah yeah you don't have to do it i think everyone gets yeah but yeah you could
[02:20:51]  just put it somewhere else if it made sense and so like what exactly happens here is you do a create form and create form just like create resource accepts a promise like promise
[02:21:00]  producing function but in this case it's a form it's a it's an async function that takes a form data as an argument and does processing and whatever it wants to
[02:21:10]  do with it and so just just like you would with let's say you want to do just a client-side form submission right you could do that with this also like
[02:21:17]  you just not put server here and you just do just the client-side form submission like this uh but let's say you want to do a server-side form submission
[02:21:26]  like which is what you want to do for like delete you want auth stuff so then you just just wrap it in server and this form data it's um like if if when
[02:21:34]  you look at the network tab maybe i'll get to demo it and the network tab we actually send like a proper form request like with content type as form data and all and
[02:21:44]  then that gets passed correctly when you receive it here and then you can use it uh like you would the form data api now the point of doing this is the same
[02:21:53]  story that remix had which is progressive hydration right like you want that if this page was rendered and javascript was not included this form the action that it had it would have
[02:22:04]  the same url as like the internal url we have for our server module so the action would be the same url and when you click that without javascript also
[02:22:13]  you would get an actual form data here like like what the browser does normally and so for the user it's the same thing and this was really this is all like remix
[02:22:23]  how they thought of this but yeah so the user looks at the same thing from the server side when it's either it's a js based submission or just a html
[02:22:33]  based form submission you do the same thing and this redirect also so this redirect is sort of isomorphic so if it's on if it's um if you're doing if
[02:22:42]  you're doing a client side login sorry if you're doing a client side delete the the delete will not make like a form post request like the browser normally does which is
[02:22:53]  like it it changes the entire page and then if it's the redirect then it will load the new page what we do is we just send a fetch call like like you can
[02:23:02]  do on the client right so to make the post submission instead of making like an actual form submission we do like okay do a fetch call get me the response if the response
[02:23:12]  is a redirect then i do the redirect client side right because like the the optimal after you're on the client is doing client side navigation so you want to do client side navigation
[02:23:22]  when you can and this is a funny thing that i'm seeing here and i guess we can wrap this with helpers because it might be confusing but our uh rp
[02:23:30] c functions generally just take json and return json but you you've created a mechanism here where you throw the response as a way of and other kinds of responses yeah if
[02:23:42]  you don't want to set my json you have an error you want to send a redirect response you want to send a no content response and unauthorized response so you
[02:23:50]  just throw that response yeah and then yeah an api i don't know it's kind of an interesting move i think it's i think it's kind of cool how
[02:23:59]  how you can like dual operate like have the simple function mentality but then you can always like use uh you can get out of it yeah so one thing to note here so like
[02:24:09]  we use this similar mechanism to do stuff like auth right like so um maybe i can show that example somewhere so for example you have index uh i mean there's an argument
[02:24:22]  that we'd wrap like remix has response and redirect helpers we might be worth hiding yeah well if if if they think it's like it might be confusing i know it's
[02:24:30]  very in vogue the throw stuff that aren't errors um you know uh promises we're throwing responses you know no but like actually the throw model is there for another reason that
[02:24:42]  it actually should behave the same on the client from my perspective so the client if it's expecting json it gets json but now if it's not getting json it
[02:24:50]  shouldn't get an http response right that http response is an unusual case right and it's being sent a raw response and so that's why we like do it as a
[02:24:59]  catch and throw thing but yeah we'll see if it's ergonomic enough but uh just to show like you can throw responses and you can also get access to the raw request
[02:25:09]  that was sent for this call uh so this this request would be the request for the page for this route data function right because like the the the page url was requested
[02:25:19]  that's why this function is run so you can get the headers off it over here you'll see that we're working on like a new session management api so get user
[02:25:27]  here um and like like you see right like now the server side code you organize in whatever files you want extensions don't matter and all all of that is just kept out of
[02:25:37]  your client side code um but yeah you you can get user here uh get user id let's see i just want to show yeah this get user session is we have just
[02:25:48]  this session model based on cookies so we have a session storage that you can save stuff to uh load stuff from and then basically serialize it by like uh doing the set cookie
[02:26:01]  thing and so it it all stays hidden this is again all from remix all of this code is literally from remix not even just the concepts so yeah just uh remix is awesome
[02:26:11]  we we are big big fans of remix yeah you know the craziest thing about this is i mean i haven't tried the form one but i i'm using just the server functions
[02:26:22]  i brought them into the project and you guys are going to love this this part adding server functions to the project was 200 bytes gzipped so like like like the size
[02:26:36]  impact of of adding this crazy powerful functionality is basically like nothing um like it it doesn't make your app really much bigger at all and um yeah yeah no this this i was
[02:26:54]  really excited about like actually more than the 3g stuff that i've been working on this stuff i've been putting my heart over and it's so exciting because it's it
[02:27:02] 's actually a new api i haven't seen it anywhere and i want to see i want to see how it plays out like i know there might be like corner cases
[02:27:10]  problems but yeah i want to see i want to see how i'm super stoked because the thrill thing was really clever because that was the problem i was having i was sitting there
[02:27:18]  looking at the rpc thing i had the actions and i was like okay this is like almost right but not quite right and i'm like i knew that we could write
[02:27:25]  a compiler to co-locate them like that was always like in the back of my head and and even like before you did the server thing i think at one point
[02:27:32]  i was like oh create api or something it was like a really rough version of it i didn't think of inlining it but you know but the the when you combine
[02:27:41]  the fact that you can just inline it like you did with the server and when you combine the fact that like the throw away let you kind of fall back into the normal
[02:27:49]  response response model yeah so you can get progressive enhancements you can make an uploader on the like a multi-part uploader with this api you you you can
[02:27:59]  you can you can literally scale from these like oh it's just a function that happens to be called on the server to actually expressing api routes because you you could just stick
[02:28:09]  them in a different file like you can go okay well i'm gonna make an api with this like go for it yeah and the thing is yeah it's all just
[02:28:17]  a middleware that you add so if you don't like any of this you can literally just like oh yeah yeah so this create handle i was showing all of this is handled
[02:28:28]  by this inline server modules if you don't want to use all this to remove all this you figure out your own way to like do if request dot url is
[02:28:38]  and that's the thing i i don't want to be i think this is awesome i i think having a base model where you have this primitive that's super powerful that's
[02:28:47]  adaptable into a billion different cases i mean i i you know i go for that but the what's really cool but the thing that came clear to me the last little while
[02:28:55]  because after remix came in and then i saw trpz and blitz and i i watched the stream uh uh theo was putting on with with the blitz guy and
[02:29:04]  there and the trpc guy was on there too and they're chatting and talking about the differences and you could tell you know the trpc guys like well i think
[02:29:12]  we have a lot of common ideas maybe we can work together and put it together and then you know uh was a little bit more skeptical and laid back he's like look it
[02:29:21] 's good that there's different apis it's good that things aren't like all fitted perfectly together that there's competition that like we don't all have the same opinions
[02:29:30]  need like agnostic solutions that all fit together and like i'm honestly i'm a big fan of that mentality because i think that gives more room to optimize but the thing
[02:29:39]  that came clear to me at that moment was that this whole data pipeline fetching api business is like the new state management you know how like in react like everyone's like
[02:29:51]  oh i like the stand i like joseph like i'm about reactivity mobx all the way and they have their opinion about how you plug it it's not
[02:29:59]  really like react is going to have its built-in mechanism because it needs to update the dom but it's always been kind of like outside what state management and it's a
[02:30:07]  matter of flavor use case all this kind of stuff for me this data fetching model on your back end is the same kind of thing i i want like a really powerful primitive
[02:30:17]  to use and i'm super stoked about this but the fact that you can just remove it and be like yeah you know we're tr pc house you know yeah exactly exactly
[02:30:25]  theo theo is big big fan of tr pc like and i i've been getting talks with the guy who created it let's see if we get tr pc in here too but
[02:30:35]  yeah this obviously is a great default and setup because it's very easy to just be like oh i don't know anything i don't know how to set up an api
[02:30:44]  i don't know what rest is i don't i don't even know how about the request response objects i don't i've never used express i've been building client
[02:30:52]  side javascript my whole life i all i ever did was generate a static page and then i put it up on netlify help and it's like oh no problem
[02:30:59]  you just you just write a function yeah exactly exactly this has been my thinking like i myself don't ever think in like rest terms right like i have not come from a rest
[02:31:10]  world initially i started using graphql directly almost all day this rest stuff like did not make right and that's that's the other side because our data fetters are
[02:31:21]  isomorphic and they're optimized for parallelized and they do all that stuff regardless of being part of the framework because i said this probably could be a b plugin that you
[02:31:28]  stick on your client side yeah um graphql like if you want apollo or urql or whatever in your browser and you want to use those patterns you want to
[02:31:37]  benefit from this um you know and do that game like go for it you don't have to make it run on the server you don't need it to be like an
[02:31:45]  action here like just go for it just stick it in the data function it's isomorphic you know uh create query is a lot or create resource a lot like create a
[02:31:55]  create query you can just you just run your your graphql that way but you know if you if if that's not your model if you have back end you have
[02:32:07]  real concerns hopefully i mean we're gonna have to see how this plays out but hopefully you'll be able to swap in the p like what you need here through this middleware
[02:32:15]  to be able to support the the back end that works for you yeah yeah yeah i mean this this is awesome you showed you showed us forms with progressive enhancement i mean we haven
[02:32:27] 't demoed it to show to prove you any guys that actually i think i can demo it if this is vaporware right i'm just like would you yeah uh yeah
[02:32:37]  this routes output is for you guys to know what routes are available i mean this is brand new this is like what we were working on like last night or a few nights before
[02:32:44]  but if you look at solid start there's been a lot of traffic here between um and the heels like new like models and stuff he's been putting together here like in and
[02:32:54]  me like going in going okay that's pretty good but i want to clean this up um and like you added too many bytes to javascript how can we shrink this
[02:33:02]  um so yeah so this is uh remix jokes so like uh just to show you like what is happening in the network tab so this is these are like sort of the endpoints
[02:33:11]  that are being created for every time you use so the zero is there because like a file can have multiple server modules so these are the these are the sort of endpoints
[02:33:20]  that are created so this joke right and i remember because i built this in this is for this is like it shows you the file path when you're in depth but when you
[02:33:28] 're in prod these get hashed and they become these super short like undecipherable one two three four five six like yeah which is perfectly funny it's just yeah it's
[02:33:37]  um yeah i just want to mention that these get shrunk and minified for prod yeah yeah that yeah since you started putting the size thing in my head i'm trying
[02:33:46]  to figure out whatever i can do to get the size down but yeah uh normal payload payload like uh these are probably the stuff that is coming from create resource like you can see
[02:33:55]  you can see right there it's it's true because it's it's it's a uh it's not a dynamic one there's no uh there's no source and then
[02:34:02]  refreshing false like this these are just the exact function arguments that you got and then the response you get here and um now let's see what happens uh so this delete uh
[02:34:12]  let's see if you can see this this should be a form right so form method is post action is this url that we have like for our actions this is from the
[02:34:22]  joke file and then these are just normal this is a submit form now let's do it we do delete nothing reloaded it happened all client inside yeah the the this this
[02:34:31]  refetched to get fresh data uh so if you see the network tab a few i think there's some double requesting happening but i have to figure that out but you'll
[02:34:41]  see like this is the post uh the response like we do the response we get for like redirects we have to do some hack here to do like a proper redirect but yeah
[02:34:52]  the response the payload if you see is actual form data uh like view source and this actually just happened client side so we built this sent it got the data got did the
[02:35:03]  redirect and this you can see like there's also uh if you can see cookies there's this rj session that remix is being is creating so if i do log out now
[02:35:13]  this should uh so there's a wait the response still has cookies oh no the value is gone right so now we're logged out uh now if i go back to this
[02:35:24]  page this is not logged in you log in codey password you do submit all of this again happens client side now you're authenticated now you have your name here now you
[02:35:34]  can start deleting stuff and okay before you delete everything can you turn off the javascript yeah i'm let's i have not tried since i made some changes but let's
[02:35:43]  see oh this this one isn't streaming right this one's async no no let's see if it's streaming this everything this will not work but if it's as
[02:35:52] ync i think we're fine okay i don't know if refresh will work but let's see ah see yeah the css is not loaded but we got like yeah i got
[02:36:01]  you yeah submission are we in dev mode right now yeah yeah so the css won't be loaded because yeah yeah but yeah okay yeah it did the full page refresh it
[02:36:12]  worked it did the delete yeah so yeah and then actually direct yeah nice yeah we're not showing you vaporware got this response the that joke is deleted yeah so we're still
[02:36:26]  we're still working on on this and i i think yeah with this i think it's the way the dev server works and stuff you don't get we don't have
[02:36:33]  the css when when we're when we have this is javascript based like white does it css based on like the javascript adds the css to the
[02:36:42]  page yeah so that actually probably makes sense like remix isn't on veed and they have their own like setup and yeah because if if anyone's used veed and they refresh
[02:36:52]  they'll see that there's always a flicker of unstyled content in dev mode always and it like drives people nuts it's it's it's it's an
[02:37:00]  extension of this basically they wait to load the javascript in the browser and it means that when we do these when we're trying to develop with javascript off to
[02:37:10]  kind of show this progressive enhancement we end up with no css but prod build world i mean the css is going to be written into the headers and everything's going
[02:37:22]  to work beautifully you all are really quiet i i i don't know i'm pretty excited about this some someone else here must be excited about this for some reason this stupid thing
[02:37:38]  doesn't allow me to re-enable javascript what just let's disable it this is a travel problem i'll figure that out later but yeah i was actually
[02:37:54]  very excited about showing this stuff and hopefully getting some feedback because uh yeah we're trying to figure out what would be best for solid start yeah yeah yeah for sure and i think
[02:38:04]  there was some contention about different ways you can handle the form like whether it should be just a create form i think that's pretty clean um or whether like we should
[02:38:12]  just have a form control that you pass the action in to or whatnot but i actually i actually think that uh i what i saw would seem pretty clean to me i i mean
[02:38:21]  i i i do want to kind of spend some time you know going over the trade-offs and kind of making there on that side because i hate having multiple ways to do
[02:38:30]  the same thing if i can avoid it ah i've been space can't make a very flexible uh meta framework doing that so yeah i think like stuff like next year some
[02:38:43]  of the things is like because it's like you know api routes you really can overlay anything on top any style you want i think yeah yeah we're gonna we're actually
[02:38:53]  gonna be working on some more improvements with the router too um i see ryan's here um we're we're we're looking at ways that we can um lower the
[02:39:03]  dependency on like custom component code and and have like obviously every anchor tag in it pretty much every framework progressively enhances but um we're looking at ways that we can um kind of
[02:39:16]  smooth out some of the rougher edges that we're starting to realize making these examples uh with the router and one of the cool things that looking at is like if there's
[02:39:25]  going to be potential where we can uh bring in partial hydration uh partially partial hydration strategies it's going to take a much longer time for us to get there because no one
[02:39:35]  has really ever successfully done partial hydration in a single page app outside of maybe if you consider conservative components but um you know between solid start and these kind of patterns that we're
[02:39:47]  kind of learning working through this um i think there's going to be a lot of uh innovation in this area in the next uh six to eight months i know that's
[02:39:55]  going to take a while solid start itself as you can already tell a lot of the pieces are coming together i said that we'd we'd have a beta of this quarter um
[02:40:03]  you can see that we're well on our way um we need to figure out some details we need to make things a little bit more quote solid but um like these are
[02:40:11]  a lot of the features we're going to have at the beginning of the beta to use yeah um what is it does solid support micro front ends i mean that's interesting i
[02:40:25]  honestly haven't thought of how that fits in like people have used solid in micro front ends jack harrington has a great series of how to set up uh micro front ends
[02:40:36]  with solid and the approach he was using was actually module federation which um i've had some qualms with but generally it's the simplest way of doing it so i
[02:40:46]  would go check out his videos on that um in terms of getting that in in terms of solid start itself i mean this is pretty much i mean you have power over the request
[02:40:55]  response objects i suppose you could figure out how to do something with v but generally speaking this is pretty much like keyed for like building a solid application um you know in
[02:41:07]  in vete uh and then deploying it to the edge essentially we we have cloud for flare worker support and uh we and our for sale uh integration actually is all on cloud flare
[02:41:20]  100 on the edge i didn't realize this until i stepped in that landmine a week or so ago but yeah um i guess solid i don't know about stealth kit
[02:41:29]  yet but solid might be the first um uh solid start might be the first framework that deploys completely to the edge over cell um so it's pretty cool stuff um yeah
[02:41:40]  i think i think they might have like size requirements and stuff and i think that's why they're worried about like deploying the js apps and all like size requires the next js
[02:41:48]  yeah i i can i can see where that would be yeah a concern what do we got here this framework is really okay yeah there you go right um i haven't i haven
[02:41:59] 't looked too closely at inertia but um i'm yeah have people saying good things like that uh yeah questions oh shell hydrate yeah i mean i i have said in the
[02:42:19]  past that evan you is probably taking the uh partial hydration in a spa as far as far as anyone has but um to be fair what he was describing with multiple files
[02:42:32]  and then different yeah i'm not sure i i i think there's i think there's i i think it's very i think the implementation he has right now is very specific
[02:42:42]  to my understanding it only works with like v press or view press like essentially he's using the fact that he's using like doc site and like he knows that it's shallow
[02:42:51]  like i i don't think it's i don't think it's an actual general purpose solution yet so i don't really count it although i do acknowledge that he is
[02:42:58]  the furthest along other than maybe server components in in this vein but i i don't think it's a general solution yet how do you import m bars um right now i
[02:43:10]  i believe the thing is we're using beats so i think all the standard beat stuff should just work um they have a whole they have a whole they have a whole thing
[02:43:18]  or meta m and essentially you i think you're supposed to put like a a v prefix on when you have custom ones we haven't really i haven't played much with that
[02:43:28]  but essentially this this this system is built completely off feet and i said it's not ready yet there's bugs i break it every day but um it is coming a lot sooner
[02:43:39]  now uh thankfully for the for the help here because by myself this was taking forever so i'm really excited i'm really excited any any anybody else got any questions this is
[02:43:51]  a good place for us to uh close off the stream here if uh if if people have you know any questions for us we can kind of kind of handle them but otherwise
[02:44:01]  we're we're getting at two hours and 44 minutes so so i think we are we are at a good time to call it a night um definitely thank you yeah no i
[02:44:11] 'm i'm glad it's coming along i i as i said stuff like this it's it's hard to just be doing on your own so i appreciate the help and the
[02:44:20]  ideas it's not just help like i he he he's constantly pinging me for with ideas he's like oh look check this out i just i just had this crazy
[02:44:29]  idea i'm like man that is a great idea um so um this is coming along as i said better than i even expected you know it's really cool to see um especially
[02:44:39]  like with the way this kind of rpc style thing expands and uh adapts to the use cases um you know like this is i didn't know what the solution
[02:44:50]  uh should look like i just kind of had like a rough thing in my head and this feels like what i was hoping for so i'm really excited to try it out and
[02:45:00]  actually see more of how how it works that's that's awesome to hear yeah i think i think i think i think we're good for the stream i we've given
[02:45:10]  everyone a couple minutes to say their piece so um let's let's call it a stream call tonight thank you so much for for being here i thank you for having me this
[02:45:18]  is literally i'm i'm like a youtube addict like literally an addict and this is my first time on youtube like on the other side of it and it's it's surreal
[02:45:27]  to me that all of it went fine but thankfully i didn't do anything stupid oh you're a natural yeah um i i think i think i think i think it i think
[02:45:35]  it went really well a lot of people here appreciate it so and i i obviously the community appreciates the work you've been doing between all the different libraries and stuff i
[02:45:44]  i think it looks really cool and i'm i'm looking forward to see each of them uh kind of develop out um this has been as i said a really good week for
[02:45:51]  solid whenever people are focused on performance it's it's a good week for solid um so uh yeah yeah and shout out the community because i think like it was it was amazing
[02:46:02]  when i like started introducing my things the kind of encouragement i got it really is what made me kept like okay what what else can i work on what is the new stuff
[02:46:11]  here and like yeah uh dave that is amazing uh people should join the discord it's it's it's it's it is and the community has been great and i'm
[02:46:21]  i'm so proud of the community on that side um i at one point i felt that i could handle everything myself control everything set the tone respond to everything handle it but
[02:46:36]  i can't i this week i'm gonna tell you guys for the first time ever i turned off i muted the solid discord server um i've never muted the solid discord
[02:46:45]  server sometimes i don't answer everyone and i have timing and it's just times when i'm busy and when i can respond but i i've i've made it my habit
[02:46:53]  to read every message that anyone has ever posted on the solid discord server and it's like you do that and it's crazy it's crazy that you're spending so much
[02:47:04]  time yeah right so and i had the i had the mute it this week because it was we've grown so much there's like 2500 people in there and there's so many
[02:47:14]  messages that i was getting i was losing other messages even if i wasn't gonna like check them later because i can always check later like i'm working i'm not going
[02:47:21]  to look at it so many notifications were coming in and over it that it was blocking out like notifications from work and and and and that no no it's great see now i
[02:47:32]  just check it periodically i'm just saying the community has grown and the fact that i feel confident enough that i can just leave and people will take care of stuff is amazing we
[02:47:41]  have great members of the community you know i've already highlighted some of the core core team members who've been doing contributions but a lot of the ecosystem people too have been
[02:47:50]  building libraries and like very active in the discord you know like like my man oran here so like like like like the the biggest thing and reason i say come check out the
[02:48:02]  discord is everyone seems to be there because they want to see the future of web development right we we have people come in and say stuff and talk about it and it's not
[02:48:16]  even necessarily solid related it's just simply because it's it's everything that's on the cutting edge like uh miss cohevery creator of quick um who uh um also
[02:48:26]  created angular he dropped by uh yesterday or the day before and he just dropped the quick video right on the demo he's like hey i don't know if this right place but
[02:48:36]  like we got a good relationship he knows he just drops in there people people will you know comment and see and they appreciate that and they appreciate that and similar um i work
[02:48:46]  out on the marco team those guys are are often around um dom uh from uh inferno i showed you likes to every every month or two come in and remind us that
[02:48:58]  we're almost doing the right thing i think i think i saw somebody say that uh they started using solid or they're like recommending solid at work because this is like the
[02:49:08]  solid discord is where they come to to get all their like all their questions answered even if it's not solid related because they find the smartest people there that's so true like
[02:49:17]  like nothing like leaves there unsolved that's the thing right it's about people who care or are passionate about web dev or cutting edge stuff and that's the kind of community
[02:49:29]  we put together here you know people want to talk transparently and realistically there are trade-offs not every technology is perfect and um you know like solid has catches and short
[02:49:39] comings and every and the thing i don't even have to answer it now someone comes in and goes you know people will tell them you know like i am so proud that we
[02:49:49]  we haven't gone the like religious fanaticism kind of route um that doesn't help anyone you know people people will be like yeah solid's really awesome and i love
[02:49:59]  it but and some of them oh what about this and like yeah it it isn't particularly good at that but i like it for this and there's there's no there's
[02:50:08]  no like there isn't that like religious mantra kind of thing so i am i'm super stoked and i think people i think you should get a lot of credit for this also
[02:50:18]  because i think you have been one of the loudest about like what solid is not good at right every time you appear publicly you you make sure to mention okay this is where
[02:50:26]  you can go wrong with solid this is where like the react model does not apply the same and i think like yeah that like that attitude sort of goes everywhere where people are
[02:50:34]  just okay being like okay this is not what it's good for this is what it is good for and so thank you thank you everybody uh you're saying that's an extension
[02:50:43]  of that that's all i could hope for right thank you everyone who's involved in the community and keeps on coming out and keeps on keeps on the discussion and keeps keeps things
[02:50:52]  moving forward because as i said we know the position we're in there's no illusions here like some people like oh yeah the react killer like come on reacts like yeah i
[02:51:03]  told you i'm i could just uh able to separate my fingers enough that i'm starting to see a white space yeah like on npm downloads like we are like they
[02:51:12]  are a diagonal line so like there's there's no there's no illusions here and and i didn't talk about this earlier earlier there was a there was a tweet and it
[02:51:23] 's kind of related see ryan florence made that tweet where he says you know people are starting to be maybe not ready but interested in a post react world um
[02:51:31]  dan abramoff made a tweet where he was going like look these things come in cycles um as you um you know go you can see the progress and he's like given
[02:51:43]  the timing in the scheme of things and how long react has been out front it's time like he's like there should be something new or interesting coming up here and i'm
[02:51:53]  again i'm not saying it's solid i'm saying there's a lot of stuff going on there's marco there's quick there's a lot of different technologies everyone
[02:51:59] 's attacking a piece of the puzzle but um like he he he's coming from a place where he's very pessimistic um and i think devon um from uh was a
[02:52:10]  parcel kind of also echoed this thing responding to what ryan was saying in that like they're like we're not seeing another react we're not like they're like the
[02:52:22]  whole paradigm has to shift before like you're going to have another react because react does what it does so well and and you know there's no room for like improvement dan
[02:52:34]  didn't quite say it like that dan was more like i i just haven't seen anything that excites me outside of what we're like outside of react he's like i
[02:52:45]  know there's lots of stuff going on but it just it just hasn't done it for me he did mention saying that right after he said i've been disconnecting from
[02:52:53]  twitter and and different places he's like it's what gives me my sanity is not to be in the middle of everything so i can appreciate that when you're coming from the
[02:53:04]  other side of things you know it's i i i was worried about turning off notifications and discord right picture picture where where where this guy's coming from right like but it
[02:53:17] 's also the nature of the beast because the truth of the matter is is it it shows a level of experiencements experience and almost jadedness in a sense because it's
[02:53:30]  difficult for he because he knows no his knowledge to be excited about this stuff anymore he sees new projects he sees elements he's like yeah this part works this part doesn't
[02:53:38]  work like he he's made judgments he's done that and it's kind of good that the people who are working on all these little projects maybe aren't as jaded or
[02:53:48]  don't don't know what he knows yeah do you know what i mean like yeah that's always good like you know the argument that when you're a startup or something you
[02:53:56]  got to be delusional you got to have a distorted sort of you know state of reality so that you can go for the moonshot or try something completely different right in
[02:54:05]  99 of them fail um so like or not maybe startups is less than 99 but you know what i mean like i yeah i get what you mean exactly right like most of
[02:54:14]  the ideas don't fail and i i i check out so many projects everyone people know i'm still avid in the benchmarking side every time a new library is added to
[02:54:22]  the js framework benchmark i i typically look at it and see what it's doing and then go okay this is this take and i categorize it and i go in and whenever
[02:54:31]  something fast comes out too i'm just like oh interesting like maybe there's another angle maybe something there's new to learn and it's not just the benchmarks if anyone's
[02:54:39]  ever seen it there's there's something called the prism compiler which is hard to find because a prisma and some other prism thing all i love this prism stuff
[02:54:48]  yeah and and but it's genius like i don't think it actually is at a place where anyone can really use it and but it's it's it's another it
[02:54:59] 's it's doing something different like marco's stuff is really smart in terms of partial hydration this this one really smart in terms of figuring out how to reduce code like it
[02:55:09]  take you know how svelte doesn't really have a runtime yeah it's a small runtime and and it does mostly cogen this guy came up with approach that was pure
[02:55:18]  cogen um and actually hydrated from the html so we actually got rid of the double data not through partial hydration but from reversing the html and generally
[02:55:27]  i know that doesn't work like i i know that there are cases that doesn't work and if you have a certain authoring experience you have derived values you can't just
[02:55:35]  reverse the data from the html okay that makes sense yeah but he built a whole system off this and the results for like a simple demo case are amazing like i've
[02:55:43]  never seen something so small so like this is like i want him to continue working on that yeah yeah even if he'll he'll discover where those pitfalls maybe he'll
[02:55:56]  drop the project maybe he won't maybe he'll go what you know this constraint is okay in a way when i look at quick quick is an is a framework that has a
[02:56:04]  kind of similar assumption where in order for it to work he had to completely break the modern model that's why he like they don't use like the standard system like the
[02:56:16]  no existing frameworks compatible with how they work they had to go no you you you can't pass children a certain way you have to direct dependency inject all the props like they have
[02:56:26]  he had to completely put a bunch of constraints in which i don't find perhaps particularly livable as like a thing and it was really ugly and nasty but then he's like
[02:56:35]  okay well let's keep on working on it well let's wrap it let's make the api more usable and that's what they did nicer working now and you keep
[02:56:42]  on working on it and you're like well maybe maybe this is acceptable like maybe like you never know what's going to catch but you just keep on pushing at it there's
[02:56:53]  a whole argument whether what quick does is is necessary or not and i'm intending to cover quick in a future stream to kind of really dig into it um and we
[02:57:03] 'll we'll see that but i'm happy that it exists i'm like there's a difference there's a difference between being like this is really good or you know this is
[02:57:15]  a direction but we already know this doesn't work i i'm uninterested like and that's coming from the outside when when you when you're in the encumbrance when
[02:57:23]  you're in reacts position when you you you are that thing everything's going to look like that they they as i said facebook if you if you've got an idea face
[02:57:30]  like the react team has probably already thought of it already right it maybe they threw away some stuff that that you know is more less or more viable than they realized right as you
[02:57:42]  if you ask those guys they are very not into fine grain which is my whole thing like like exactly okay even what we're doing marco we're saying fine grain is
[02:57:53]  better than diffing that's that's that's the that's that's the message that's the stance they're like fine grain has limits or is flawed or can't can
[02:58:01] 't can't do that their main thing is the memory concerns i think because they think you have to say like do a lot of creation time stuff yeah i mean this way you
[02:58:08]  can get around that i but yes it has to be on that side and it also has to be around the the mental model no matter what you do to hide it no
[02:58:15]  matter what compiler you use no matter what it doesn't actually execute the react people don't want to expose reactivity they want right like react is imperative like i know they have
[02:58:25]  a declarative api but their mental model is imperative it's this thing this and this and this and this doesn't matter what you do that's how react mental model works
[02:58:35]  so and we've seen this with marco when you go to declarative even if you make it look like react and like even like my reactive script kind of thing like
[02:58:44]  even if you'd like kind of use simple language or kind of make it look like it runs top to down like declarative stuff doesn't run top to bottom like there's
[02:58:52]  no hiding this fact that it doesn't run top to down yeah like as much as you kind of make it simple and all this stuff like so like since we can't hide
[02:59:02]  that and it's a reality that that's where the division is it's interesting because react forget is going to make it not run top to bottom from a from a perceptional
[02:59:13]  side so so for me react forget is the least react thing i've ever seen and if they're considering that like maybe they are pivoting in a bigger way than than
[02:59:22]  i i maybe maybe they see the constraints of vdom and they're like okay it comes down to this right and if we can solve this using memos and callbacks and
[02:59:30]  all this to prevent re-renders then like i guess like they're just uh sort of doubling down on their model like right right like they're going for the compiler
[02:59:41]  is not trying to fix the jsx is trying to fix the code still above the jsx like yeah like their whole philosophy is is i mean people think it's about like
[02:59:51]  the render render any platform thing and as we saw with the custom reconcilers it is very possible to completely separate that logic and have it work multiple places but i don't
[03:00:01]  think that's like a vdom trait like we just showed reactivity is incredibly portable whether you want to use it with components like i first showed and just have it right
[03:00:10]  to some underlying thing or use a reconciler that's that's there's no there's no limitation there it's more of that their mental model their whole thing is like
[03:00:18]  basically it's like the assumption like we can't take care of all the edge cases we don't want to expose that to the end user so we're going to give them
[03:00:27]  something that they can't do anything wrong with we're going to give them a pure model it's on rails nothing they do other than use effect gets out of that pure
[03:00:36]  model and essentially here's your whole developer experience everything lives in a vm and we'll just run it on the platform of your choice where as as i said when i demo
[03:00:47]  solid i'm like solid everything's a crate effect the whole thing is a use effect in the use effect so it's like the complete polar opposite when you go to like
[03:00:57]  fine grain and this kind of layering you're basically saying like only reactivity is pure everything in the world you lose that purity right effects yeah that's that's very uh that
[03:01:10] 's very interesting i think like what you said about like react is trying to make sure you don't do anything wrong i think that shows almost everywhere like where solid particularly is
[03:01:20]  not trying to do that like solid is like we expose the core of like the framework to you and you need to know what to do to make sure you don't fuck up
[03:01:29]  right but i think like react goes out of its way to like provide safety nets everywhere so that you screw up the app will still run fine now you can try to optimize it
[03:01:39]  i think like places like like where you could like let's say lose uh the activity somewhere in solid i think like those are things like solid react would be like okay let's
[03:01:48]  provide a safety net there but we want to we want people to understand the model and then use it and i guess like sometimes it makes it ignorant it makes it maybe like
[03:01:57]  a little bit but here's the thing i had the option like i am concerned with that because solid could be designed differently in that like we could just not like surplus the thing
[03:02:07]  i showed you earlier they don't untrack components like literally that was my addition the fact the reason you can lose reactivity is completely my fault um no but then
[03:02:20]  it allows me to safety nets because you understand what happens if you don't untrack the component if someone just accesses a variable destructures it somewhere it's not the
[03:02:32]  the binding that updates now it's the parent that updates so yes you will be re-rendering your components and you will be recreating dom nodes like like crazy so
[03:02:41]  i i i have gone to make sure that the model is consistent that you don't have terrible terrible foot guns it's just but you're right there is a i i solids
[03:02:52]  model does rely on giving a little bit more trust and and it's just funny because you could probably come up with like a two-dimensional cartesian plane where you like
[03:03:01]  put the frameworks on it and then be like where they value because on one side we've been talking about the difference between solid and react but i actually view solid and react almost
[03:03:11]  in the same quadrant like even if we have our differences if you actually look at the whole spectrum salt and react both value similar things we just disagree about implementation like we don
[03:03:25] 't agree what the execution model is but we agree on on philosophy you know directional flow explicitness modularity composability like all the elements are the same just that mental model of
[03:03:37]  like your component is like your fun uh ui is a function of state like when you look at your components that's what it does look like like it doesn't exactly implement
[03:03:45]  like that but it does look like that right like you can read your component top down and think of like your ui as a component of your state so that's sort
[03:03:54]  of the pure function model i think you can stick in your head still yeah yeah well once hooks came in because hooks have like some execution patterns but as i said like stuff like
[03:04:05]  svelte actually is actually much further away even though we're kind of siblings everyone's like oh the other compiler framework but like and we as i said i have intestines
[03:04:17]  id and i don't know if i talked about it much on the stream yet but essentially because someone's like i figured it was on twitter someone's like oh yeah solid versus
[03:04:23]  svelte is the new react versus angular and i think that's a fairly interesting take because in a lot of ways it's it's true um in that like it but
[03:04:37]  in a different way react versus angular was all about like library modularity best practices versus restrictive guide everything provided these are the pieces that i use it still has that everything provided
[03:04:50]  mentality they hide it behind a compiler so it doesn't hit the cost but they do like they do want to be responsible for your css they want to be responsible for this
[03:04:58]  they they would rather have a prescribed way but the the difference is the reason that they have a prescribed way it's it's funny it's not because just because they have
[03:05:08]  a bunch of libraries it's because they've restricted the syntax and the intention and like everything and using the api in such a way that it's just a language that it
[03:05:17] 's impossible they make it harder to express other ideas they give you yeah they give you the full functionality so you're not left for wanting but their idea is if we make this
[03:05:27]  abstraction perfect and we abstract enough you won't even have the ability to think of or want the things that we we we don't have like we'll just give you the
[03:05:37]  language for it and you'll be like go transition like and then it'll do the transition and that's better than being like oh do you want a blank blank thing and like
[03:05:48]  are using this library because you can just have the language for the transition so by limiting and creating the language for it you actually reduce the options and create a elegant and beautiful
[03:05:59]  solution and once the abstraction if the extraction doesn't leak you can just go like this is web dev and this is why a lot of people who are big fans of svel
[03:06:11] te are like oh it's just javascript and html because when you reduce the abstraction down to that level we know that's not what's happening it is
[03:06:21]  not javascript and html like it's crazy like there's a whole bunch of stuff going on but because you can't even express those ideas you you it's
[03:06:31]  like having a language and not having the words to speak like you don't have 12 words or you don't have 10 words to do the varying level of cold hot you just
[03:06:41]  have cold hot if you by restricting language yeah 1984 like this this this this this is this is sort of like people feel people know what they have to do right like
[03:06:56]  they know just the subset that they need to know they figure it out and you remove the pieces or don't provide the pieces to express the different ideas then you've just narrow
[03:07:06] ed down and and and then you never have to worry about it you just go you go okay so it's some javascript and i just tell it to go do this
[03:07:13]  and i describe it this and you have this perfectly consistent system that no one understands how it works right that is one issue like i would i can't imagine what the compiler
[03:07:24]  output exactly would look right right solid is on the opposite side and i showed that in that release in demo and that i did the one i showed earlier my favorite intro that i
[03:07:32] 've done i'm going to tighten that up that's going to be a talk we're going to use the same kind of stuff for training material i think it's an amazing
[03:07:40]  start solid is the opposite i show you that let statement i show you that first signal there's no component there's no nothing you console logs something you know alert pop-
[03:07:49] up whatever then that thing just changes into something that updates the dom and then those dom elements well you didn't want to type all that so you make that jsx and and
[03:07:59]  then and then you can just you're like well this logic's kind of messy so let's put it in a function and oh there's a component like when when you when
[03:08:06]  and then you're like oh i actually want to share that logic between two components you're just like okay well i'll just pull it out of the function and and read
[03:08:14]  in both places that kind of mental model when people see that and they look the compiled output of solid they're like i could have written this which is part of which which is
[03:08:23]  completely opposite philosophy because as i said salt it's felt is working really hard so you never understand how it works and solid's like hey come here because you could have written
[03:08:35]  this yourself yeah no that's very true because that's that's how i was able to do all this three js stuff right because i complete i completely understood what was happening in
[03:08:44]  these expressions and why they were there why they had to be in a reactive context that's how i was able to get all this done by inspecting this output and reminds me
[03:08:51]  of the c plus plus concept of like zero cost abstractions like you want to give people abstractions that they couldn't have written better by hand so like there's a
[03:09:00]  c plus example of like okay if you write a class the way it gets compiled down to like assembly code you couldn't have written a better like abstraction yourself i think i'm
[03:09:08]  like maybe that applies to the jsx right like the way our jsx compiles into like efficient like property level like fine grain like couldn't have written it better ourselves like
[03:09:19]  if we try to uh yeah yeah no that's that's an interesting point and i hadn't thought of it that way but basically like only abstract what's absolutely essential in
[03:09:30]  terms of of like uh like be for like because it's just it's unwieldy like it was like this was the c c plus founders like sort of principle for you
[03:09:40]  because principle for like deciding what feature to add to c plus plus and this was one of his core ones that zero cost principles that zero cost abstractions that you can't
[03:09:50]  add an extraction that people can be like okay like writing this makes my code a little worse than i would have done by hand like and it's it's a really strong principle
[03:09:58]  i think like that's why it's gone on for so long but yeah it's really interesting yeah and it's kind of interesting because i see react shares in that you
[03:10:07]  know i remember like dan writing uh like a year ago like composition is king or never bet against composition and you know like the old like javascript i agree completely because you
[03:10:16]  can always make another abstraction right this is why solid is such a popular target for compilers like everyone loves making their own s yeah your own svelte thing or s
[03:10:27]  s sorry s fc format thing one thing i want to try is like what if people can add like a dot svelte component and solid start and then we just
[03:10:35]  use a solid compiler for it like yeah look why not you want and just like yeah and the funny thing is because most of the work has been that we have people who really
[03:10:43]  want to move things toward i wrote that article about reactive script but like you know alexis and you know orin they're trying to build like the best thing like the
[03:10:52]  best solid thing like where they're like this is actually a pattern that's really good and even if ryan's like a little bit like yeah i don't i don
[03:11:01] 't like the magic they're like we're gonna make the best thing for solid that uses these things but what if you didn't want to make the best thing what if you
[03:11:09]  didn't care about composition what if you could just use like something more limited like spell like yeah like just be like yes you can use the svelte thing maybe people would
[03:11:17]  be interested even if it isn't as nearly as powerful or capable of what solid as well it does because you can always still use a solid component if you need something powerful but
[03:11:26]  if you want to be simple you can just use a svelte file and most people have taste about the syntax only like it's not that they have a huge taste
[03:11:34]  about the update model or the execution model they're mostly looking at syntax and developing a taste for these things and so if you can provide these syntaxes without like the compute model
[03:11:42]  is the same the execution model is the same they're all trying to be reactive on the reactive side it is absolutely difficult to make react work with the other way like if
[03:11:55]  like this is funny because react is the most popular framework and and and the problem is like if you're trying to run a mitosis or jsx light where you're like
[03:12:02]  let's take react code and compile it to other frameworks it is hard reacts execution model is not friendly to things that aren't react whereas if you took like this is why
[03:12:12]  jsx light started i don't know if people know this it started as a solid like like steve just went up you know steve from builder who made mitosis or
[03:12:21]  jsx light and you know quick and party time he just he just took solid syntax dropped it and it was like okay i'm gonna compile this to any framework okay i've
[03:12:30]  used that yeah yeah he he changed it over time now it uses react and with restrictive rules but essentially the language of reactivity is so powerful and portable because either you can
[03:12:43]  compile to something using that intent and it just works or you can have a very small reactive runtime shim to drive something like react like you can make yeah like react work kind
[03:12:55]  of on the surface like solid by using react solid state or using mob x or one of those things it's not hard to take reactive language something like svelte um
[03:13:07]  and and make it like run like make react run under it like basically take this language compile to react the other way though is almost impossible which is why there hasn't been the
[03:13:17]  react compiler because it is so hard to make uh something like react run without a v-dom it's just yeah like the react gorgeous model in essence is super inefficient like like
[03:13:29]  they don't care about the efficiency they only care about like how simple it is top down but like theoretically speaking when you just look at what what like react does from a
[03:13:38]  v-dom standpoint it is like super super inefficient it's just like yeah let's just re-render everything and then figure out what changed just to ask you why it's
[03:13:47]  not possible on the react side my intuition is because like in react there's no way to tell what could change right like everything is just a variable so like there's no way
[03:13:55]  to tell what could change like what is the reactor part in any of this the interesting thing is like the language they've created is analyzable if they want to change
[03:14:05]  the action machine model and that's maybe where react forget comes in but i'm saying it's not very react because here's the thing you have jsx which we've already
[03:14:12]  said is analyzable and you have all these hooks that you that use this nice syntax use use blank so they have if you think about it this like it's not
[03:14:24]  like i have a whole article about this about reactive language and stuff but the key part in normal javascript to actually make uh it known is not about decorating the identifiers
[03:14:37]  like it's not and it's and and labels aren't particularly good like like i know svelte does that but you can't compose that's why it's called
[03:14:45]  you can't make hooks like you can use stores but that's a runtime mechanism that's not part of the compiler you don't you know that was annoying that was annoying but
[03:14:54]  but like the thing is something like use uniformly informs that that pattern works uh uh view ref sugar did the same thing they put dollar sign they put the function call that's the
[03:15:08]  decorator that works for composability um marco made them tags again it's a clear it's a clear indicator because if if you decorate the function instead of the variable
[03:15:20]  you can rename the function whatever you want so it's composable like you can make it use local state or like whatever and whereas svelte's dollar sign can't be
[03:15:29]  renamed you can't take it out of the file you like it's incredibly restrictive but like um they they basically mark the left side for like the activity where you want to
[03:15:40]  mark the right side and the like yes which is the thing because if you think about it the more granular that you get you might even want to mark on the expression level and
[03:15:49]  that's where i got with react script because i was like what if we could just remove all the special syntax and just make the outer world reactive like what if the javas
[03:15:58] cript was reactive instead of imperative like what if you just reverse the whole model then you don't need the symbols because everything would would work every expression would be a reactive expression
[03:16:09]  and every letter it's like taking svelte's idea all the way to the completion because right now svelte's in this place where it can't compose it's
[03:16:19]  just it's it's it's stuck and maybe they'll never do it they don't they don't care like even their control flows use like candle bars like you you
[03:16:25]  if you go from their each or whatever control flow and then you're like oh i want a paginated list you you have to change the way you do it it's not
[03:16:34]  composable right this is why i love gsx like it's it's fine people value that different but this is what i was talking about the difference here because when you
[03:16:44] 're a language usually you don't have things like that you like if and for are language things they're analyzable and they're specific but they're not composable
[03:16:53]  or extensible and it so i i think this is a fine pattern to have i'm just saying like it's different goals and different kind of view like the the key is
[03:17:03]  maybe a little bit of both i don't know but essentially if if you want to be that restrictive and trust the compiler and go hard that way are you going to give
[03:17:16]  people the language the words so to speak to to do other stuff like are you going to put chinks in that armor because then you break your abstraction maybe so i don't
[03:17:27]  know what svelte's going to do in the future i'm sure they'll improve the performance i'm sure they're going to make it smoother they're going to add
[03:17:33]  more transitions and do that but i don't know how hard bent they're on their philosophical thing because it's and maybe maybe that's fine they'll stay like that and
[03:17:42]  they'll explore that and see how far they can go without composition like maybe there's like different patterns um you know and maybe that's i think that's really cool but
[03:17:53]  as i said for for me um i i'm on the react set i love composition so that's true oh yeah i know we were gonna we were gonna end the stream like
[03:18:07]  half an hour ago and we've just got some free form chat here which i love because honestly i love talking about this especially people who are passionate about it and people are still
[03:18:15]  with us on the stream and if you wouldn't believe it more people have even joined on the stream as we've been talking so um that that that is that is really
[03:18:23]  cool um so but but like sort of imagine so i'm imagining that like just like markdown you can think of as a as an sfc format for solid right like it
[03:18:33]  can i think like most of swell view yeah i wish like we can just use them as like sfc formats if if the taste matches you like somewhere in the middle of your
[03:18:45]  solid app and i think one thing that solid does really well because it's so small you can actually use it as like the underlying layer of like even if you want to
[03:18:53]  start using like i was telling you yesterday like i want to use a react component like because in my solid app and uh i feel like i'm okay like taking the bulk of
[03:19:02]  like the burden of react for a small component on a specific page because the rest of my app is solid is so small like the framework is so small i like i think
[03:19:12]  it plays well into like okay because it doesn't add bulk of its own you can't you're not saying okay how dare you have two frameworks on a page like it's
[03:19:18]  like two kb right like a react library is often more than that like yeah or something like that it's interesting because i i i think that's that's also the
[03:19:27]  other side uh you know as it's it's always hard to separate it and this is if there was one fault of our community um on that side is when you're so
[03:19:37]  used to like hunting for that size that last kilobyte or hunting for that last bit of performance you might not be as you might be like overly sensitive to it in a
[03:19:47]  certain way right i had to like catch myself because at a certain point i was getting like too too much into that on the performance size because people people would be like you
[03:19:55]  know like ask a question like is this less important than that and i i just like yeah technically it is and i like explain it but it's i'm like no just just
[03:20:03]  do it the other way because it's not worth like like those micro yeah we we do chase that a bit like like you know i'm really excited about partial hydration i hope
[03:20:13]  everyone in the community is excited about partial hydration but like if you're small there's certain like if i if i was choosing between a framework that had partial hydration and not
[03:20:25]  partial hydration and i'm just making something small for a blog site i'd be looking at the authoring experience more than i'd be looking at whether it had partial hydration or
[03:20:32]  not because it's not going to make the the impact that you that you might think it will like you know what i mean like yes your page is five kilobytes or
[03:20:41]  ten kilobytes smaller but the whole thing was 20 kilobytes anyways and maybe who cares like so we we have to always watch that on the solid side i use
[03:20:52]  partial hydration as an example but that's like it's not just that we're we're like that about like everything like like like like oh you know this library is one kil
[03:21:00] obyte smaller or whatever so yeah we have to check ourselves a little bit i think it's good because this is how you make sure you continuously have smaller libraries and anyone who
[03:21:09]  talks to me knows that i'll be nickeling and diming it just because my concern of how it has the impact but i think that i think this was something
[03:21:19]  i was like came up with like at ebay a bit is it's it's like a budget you depending on your use case you have a budget and where you want to
[03:21:26]  spend that budget um i i think it's i think you just look at it that you're like okay um i have so much size i'm i'm willing to pay
[03:21:34]  this for for this i i think i think that's probably the most realistic way to do it and if it's your blog site your budget is probably well above your means so
[03:21:45]  like yeah i guess unless your solution is i'm going to use next js because next js is like always gigantic um you're probably in good shape yeah i think i remember
[03:21:57]  you saying once that one of the reasons like you spend some effort making it performant is that once it becomes performant because it's not because of the performance but because it
[03:22:08]  is performant by default you can now start doing some like finicky things some crazy ideas on top and like rely on the fact that the baseline is performant not that
[03:22:18]  you have to make the default performance by adding taking the react case like adding memos and stuff you start with the default performance app and now you can add stuff that slows it
[03:22:28]  down somewhere like if you need it but yeah you're not like yeah exactly like it it's this idea of room right if you've yeah and capability it's the other the
[03:22:38]  like my i was much more concerned on the component side about the overhead of components not because i wanted to prove to everyone that solids components were faster than everyone else's it
[03:22:49]  was to prove that if component performance isn't an indicator isn't like the thing that makes you decide how to split it up and how to do that you have now freed yourself
[03:22:58]  you are free you like you can just go oh i want to write some code and i'm not worried about it like i'm not worried that oh in this list uh we
[03:23:08]  that state's going to trigger the outer component to re-render which causes the whole tree to render like the react memo example i i've been you know i love that
[03:23:16]  example because like in in i made it like four different ways in solid like put everything in one file separated them out and because it just didn't matter right right like because you
[03:23:27] 're not like the whole thing is the solution like they showed how they would do it with a compiler but you can also use other tricks like lift out state break things into components
[03:23:35]  and then like only certain things will update and use a memo and like you can do all these tricks to kind of make sure that that works and then make sure that that
[03:23:45] 's optimized and what if you just didn't have to think about it at all so that's so um like remember when i was saying like with aggressive colocation you put it
[03:23:56]  right there you have the option of taking it anywhere you can abstract it refactor it if you want i like that's what this reminds me of like your entire page can be
[03:24:03]  one component and the performance doesn't change right your entire app exactly but like you split it into components because it makes like mental model sense to you like it makes sense to
[03:24:14]  you about how you arrange your app and the thing is this is this i just said this is not new for me at least i i this is what i was doing in in
[03:24:22]  knockout and it's it's so funny because uh we have a revisionist history now and and this is what i was talking to people about on twitter twitter you know
[03:24:32]  the victor writes the history so to speak yeah the second reason why you know i mentioned like there probably won't be another react at least for a while like there is like
[03:24:40]  like the paradigm shift i was trying to say like you don't need that paradigm shift you don't need the big movements the thing is the react came up and tech twitter
[03:24:49]  and everyone who's involved in that community came up with react like like they they got their job they got their career they made their learning sessions their training materials that they came up
[03:25:01]  with react react is amazing but in so they've credited react to to like all the innovation that came out of this the first one who did this and this and i'm like
[03:25:13]  no i was there they were they actually weren't like like they weren't like declarative uis existed before react is it true that the component model was not exactly i
[03:25:25]  will give them credit for for being like that's the component model but here's the thing before we react there was something called mbvm mbm okay yeah because
[03:25:37]  there's mbc and mbc was a mess um like uh why what i mean is mbc is great because it's not a mess it's very
[03:25:45]  very restrictive you're like model view controller controller is a signalton models your data and your views of projection so then you just use the control and you wire it together and this
[03:25:54]  is the backbone of rest and server stuff and it's great because it's stateless it's tight it has clear separations of concerns and boundaries you understand where the logic goes
[03:26:05]  it fits a template and everything works well and then the problem is like what what if you have statefulness and then it's like uh stick a little here stick a little here
[03:26:13]  stick a little here oh okay because it's singleton so controller can't own the state right right the view shouldn't have the state because it should be a pure projection
[03:26:24]  and the model you don't want to store everything in the database so the only option was create the hidden the hidden state like like the state was like like a dirty smudge
[03:26:34]  that was hiding underneath the covers in angular they had like a dollar sign scope thing that you passed around you just those mbc and the browser frameworks didn't didn't
[03:26:45]  nobody wanted to put local state in the components or what right right i'm getting there but essentially there was there was there was no place to put local state and it made no
[03:26:54]  sense and it was really awkward and then they each one each way angular is like okay well we'll just make this special object that we pass through the controller kind of like
[03:27:03]  functional composition mbvm is one of these models or what's mbvm mbvm came a little bit later but it was like oh controllers suck you
[03:27:12]  need instance based uh stuff like so instead of being a controller in mbvm you actually create an instance a projection of the model essentially per your view and this is an
[03:27:25]  instance so every time you go to a new place instead of having a singleton controller that says okay here's your data i'm going to feed it to you it's
[03:27:32]  more of like i'm going to like instead of it being a controller you go okay make a new blank and have that work with the view so here here's your instance based
[03:27:41]  thing and the beautiful thing about that is it's instance based so it can it holds the state yeah right okay right and then if if you have this thing and back in
[03:27:53]  the day i was using knockout mbvm the model was not knockout's concern it just had a view model which was a function i was using coffee script so
[03:28:03]  it's just a function and in those functions you would have observables and computers um you'd have basically hooks in these functions so okay so you essentially and signals your function
[03:28:16]  would essentially instead of returning a view like jsx it would return an object with signals it actually if you've ever seen views setup function it was basically views setup function like because
[03:28:30]  you would create like you just send it back the stuff that you send to the view and you would you know pass like you create children and children kind of like so you
[03:28:39] 'd be like you'd be like okay well let's make a new you know and you'd pass it observables and it would create its own observables and you'd make
[03:28:46]  this tree and what would happen is at the top of the tree the the dot the view code and the and the view model code would would interact with each other and you'd
[03:28:59]  be like here's the data for the top of the tree here's the view for the top of the tree and then the the view would kind of be the child views would
[03:29:06]  be created driven off that state and essentially and that state might create a like list of states so it was two separate trees but essentially they were they were layered all over themselves
[03:29:20]  and i'm talking together already right and that model was okay but i was having this trouble with it because of like how you had to kind of walk up to the top so
[03:29:27]  what i started doing was figuring out ways i could make knockout initialize itself inside the file essentially so that you could like i could be like get to a control flow
[03:29:37]  and instead of doing the double mapping where i had to map the data then map the view i would just like create observables inside like the the template bindings which seems crazy
[03:29:49]  but essentially that way like while it was rendering the tree it would also be making the data at the same time and i mean the the the biggest shortcoming of mvv
[03:30:01] m was that you had this model over here and you had this view model and it wasn't clear and i i i kind of got ahead of myself there but it wasn
[03:30:10] 't clear what you should be wrapping like because it was this projection layer you're you'd either make you'd have a user model and you'd be like i'm going to
[03:30:17]  make a user's view model or i'm going to make a user view model that wraps this user view and because they're the reason like pretend you have a selected state
[03:30:30]  and you have a list okay that belongs with the view code yeah but think think about how programmers work and wanting things to be dry because view model and the is this thing in
[03:30:43]  the middle that can go either way it can either go closer to the view or closer to the model there's this tendency that you could make a view model for every view and
[03:30:52]  if you think about that if you make a view model for every view that's a component yeah that's what i was going to say that's a good point right or
[03:30:59]  you could go the other way and go i'm going to make a view model that wraps the model and then the views are going to share that view model and and and and
[03:31:06]  that's more dry because i'm not repeating business logic and and you know sure this view only uses part of the view model this view uses the other part of it but
[03:31:15]  the problem with that model was you were getting too much yeah like like mismatching state and that was the world and the problem with mvvm is it never clarified which
[03:31:25]  way you should go but at my company that i was i was like i was like this model wrapping pattern is bad like we realized that it i i went really hard that way
[03:31:35]  at one point and then i was like oh my god this is terrible and i reversed it and essentially we've decided that we should keep our view models with our views with
[03:31:43]  our knockout so in a sense what i'm getting at is components and react came in and clarified this piece they're just like no it just goes together and this is it
[03:31:55]  and you're done and you just slice it so it was a big innovation and people weren't like happy about it at first but on the other hand like the we were
[03:32:05]  already tiptoeing on it do you know what i mean like like mvvm already sounds like it's going towards that from mvc right it's an evolution
[03:32:15]  components were in my mind were just the index evolution mvvm so what like someone today was like oh it went jquery to react and that was the big
[03:32:23]  change i'm like there was like what between jquery coming out and react came out there's six years right and and and and in those six years at least three years
[03:32:37]  before react like in the right in the middle there were libraries already with like parts of it they didn't have the full picture they didn't put it together properly but so
[03:32:47]  we have this revisionist history now we react invented everything but like you might i i i downplay the innovation at the beginning there because yeah they came up with jsx and
[03:32:56]  the v-dom yes angular existed and was doing views and all this like it wasn't a v-dom but like they were doing like their own digest cycle and doing this
[03:33:05]  there's a third of views there was reactive models there was things that are basically components and yes react put it together right and made it popular and it spread out to the
[03:33:15]  world but my argument is probably would have happened anyways like at some point like the pattern would have just evolved into it it's funny because when i was in this conversation i realized
[03:33:26]  that at the same time i was discrediting reacts past and crediting its future because i'm a big fan of react and i like getting and i think and and the
[03:33:34]  people in the thread were doing the opposite they were like saying react was amazing it literally changed the world it came up with everything that's modern 100 them nothing else existed before
[03:33:46]  it but that was then and now they suck like that was their thing and i'm like whoa it's it's actually important stuff and all is is and especially the way you
[03:33:57]  portrayed it like where like they can virtualize the browser i think it's so interesting like where they want to like own everything but like i don't know if they're owning
[03:34:06]  too much of the stack like just being react but that's you're right like the future of react is probably so much more exciting than like that's that's that's
[03:34:15]  my opinion and maybe it's weird because i i all i can credit myself for this opinion is i wasn't a react fanboy back in the day like when it came out
[03:34:23]  i actually hated it so like my my perspective is is a little bit colored by that by that view view is also v dom right views view dom and components was it inspired
[03:34:34]  by the act like i don't know the exact history there but like was evan directly inspired by the act or was that component model developed independently uh view i don't
[03:34:45]  have the exact timeline but the way i look at view and if you kind of piece it back backwards view was inspired by like knockout and those reactive libraries like like solid is
[03:34:57]  yeah but then what they did which is a little bit more interesting is they saw the chaos they saw what react salt and then they're like quick and a lot of people did
[03:35:07]  this they looked at the technology of react and did a quick quick like a quick u-turn they were just like okay we were here so like you when evan made
[03:35:15]  petite view he was like man that was so much fun making it i showed you guys on stream how to make like a petite there's no veto on there right it's just
[03:35:24]  reactivity doing this stuff and he was like that was view one he's like i got the make view one again it felt so good like like because he was he you turn
[03:35:33]  on jsa on v dom and components like as soon as react yeah yeah i mean they yeah pretty much i mean they were probably com like component react was already out so
[03:35:45]  like they kind of probably were already sort of component like maybe like they as i said adapted mbvm they probably never called themselves mvm like i think i think
[03:35:53]  they were a component framework with reactivity but they they they weren't like as on the v dom at the beginning i think and then like maybe it wasn't component but they
[03:36:02]  had that the options api right like they had that the configuration object where you set all your your reactive values as a big blob and then you know something it was it
[03:36:12]  was like knockout it was just like you what was the templating layer used when you use knockout like you say you use knockout a lot so like knockout is
[03:36:20]  not templating right it's just data well it used html for templating knockout you use data binding and actually parse the real dom petite view and alpine and
[03:36:30]  all those that that knockout js is that essentially they went through the dom found all the bindings like walked the real tree and then applied them reactively like that's
[03:36:41]  what i was saying when i did that stream that like hey i'm this is a blast the past and it was for evan too as i said because that was like what
[03:36:47]  frameworks are like you could tell he had this nostalgic glow after he made petite view like it was it was probably so nice for him on two fronts because someone called him out
[03:36:58]  about view size and they're like oh alpine is so much smaller blah blah blah you don't need view you should you do alpine and i think evan was just
[03:37:06]  like whoa whoa hold on you does way more than alpine does and like this is why it takes and he and he was probably like he he looked at alpine and he
[03:37:14] 's probably like like i i could probably go home this weekend and write a better version of it so so so like so like he and and the funniest thing is when i
[03:37:27]  saw alpine i was thinking the same thing i was like i'm sure evan you could go home and write a better version of it because like it was it was it
[03:37:33]  was view like it was knockout it was like all those things and someone finally goaded him it was like literally he wrote petite view right after alpine 3 came out
[03:37:41]  like like a week after like like it was that weekend like seriously see like that conversation happened and then like on monday he came back with petite view love that don't piss
[03:37:51]  evan you off like he's mild mannered he's clark kent but like he loves that i love that i trust you like so um like yeah i mean he
[03:38:02] 's like an exceptional engineer like the stuff he's built everything he's built is an incredible quality and and i mean like that's the thing people always take away like from
[03:38:17]  the end user thing like i said beats kind of got some like frankenstein going on under the hood but the end user would never actually know like evan evan's
[03:38:25]  consideration to detail is incredible yeah but where i was getting with that obviously is that that like kind of stepping back again is that where these these technologies have been kind of evolving
[03:38:42]  over time like that i think that if you you you can step back from any particular group or movement like things swayed it but it gets kind of absorbed into this consciousness like
[03:38:54]  if you step back far enough it just looks like a natural progression you saw every bm you saw components and and while there are players and things that swayed it everything
[03:39:05]  actually follows along the line and sure that's looking in hindsight because we don't know where things will go exactly it's it's actually a very natural evolution where the pieces and
[03:39:16]  the evidence are already there a thing and i feel like right now we are back at one of those things there's a reason there's so many libraries the reason why there
[03:39:23] 's that temperature people are like people are looking for things other than react it's not because there's going to be another react it's not because anything is going to have that
[03:39:31]  kind of impact again i don't know like i i see like react came in at like perfect place perfect time but that's not that's the thing you people are conflicted
[03:39:42]  because they they look at reacts innovation and they look at reacts impact and they tie those they conflate them they they go that's the thing and the thing is we i
[03:39:52] 'm going to argue that reacts innovation isn't as innovative as people thought but it's impacted it hasn't even oh yeah i know that is come oh that makes so much sense
[03:40:02]  and if you take that scope of looking at it that it wasn't actually as innovative as you thought but incredibly impactful it means that the next thing maybe won't be as impactful
[03:40:14]  as react but it could be just it could take the same level of innovation do you know i mean it maybe it's just the natural progression of things maybe like if you
[03:40:24]  separate it like there is a as i said there's a reason there's so many libraries and people hungry for other stuff it's time it's not someone where dan abram
[03:40:33]  or abramoff is sitting isn't going to be able isn't going to see it because he's not in the weeds of it and he's he's been through
[03:40:39]  the full cycle the seven years you know every everything has its time and it's react could still be the best solution out there and i'm i'm i think everything react's
[03:40:51]  been doing has been in is is going to ensure that future but nothing it's still react it's going to still be the react that like has evolved over time it's it
[03:41:01] 's still going to be that thing they they have that legacy they're going to be attached to that time period they're going to have that impact it doesn't matter you
[03:41:08]  know the timing thing is very nice like somebody was saying i think last year or something like it has been just the same number of years as it was between jquery coming
[03:41:17]  out and react coming out like when i displays things between now like react coming out and like maybe now or like last year or something yeah i i like using that one because that
[03:41:27]  that's also like the number of years that marcos had streaming and partial hydration before anyone else came out with it just another fun fact can you picture if react came out
[03:41:36]  at the same time as jquery instead of when react came out that's how far marco is is on that technology than everyone else just signed out um yeah then mar
[03:41:46] co is doing everything on the server right right right it's just a different way everything on the client like the sliders right it just marco was just like like the
[03:41:55]  reality went this way and marco was like oh we went this way and everyone just it kind of dropped off and no one really realized but as i said to me it's
[03:42:04]  like it's like it's like now interesting stuff is happening right like like this component model you described from mvc to mvvm like they're basically pulling things
[03:42:12]  closer and closer to the ui like directly because that's what people want to see and reason about and so like now we see like the server itself is also like we
[03:42:20] 're bringing it closer to the component and that's what we're trying to do it's all let's start right like bring the server also inside like just like we did with
[03:42:26]  the controller your your your your edge worker your service worker is right in your client code next to your component like in the view like it's an interesting gamble because it's the
[03:42:38]  thing that makes sense in the sense that the problem is when you put stuff in a bunch of different places it's in a bunch of different places then you have to reason
[03:42:47]  about it and you have to find it again there's something so pure about going oh i have i don't know how everything else works but i have everything i need right in
[03:42:54]  front of me i used to love this about coffee script i've told you this because the code is so compressed i can literally like fit whole files and view and i never scroll
[03:43:04] ed but but that's an extreme but what i'm getting at is when you when you can just focus on that one piece and kind of let the rest shut out you
[03:43:13]  can be incredibly efficient and this efficiently scales like even an organization whether it's a micro frontends or whatever like you give them a piece that they can own independently their velocity increases
[03:43:25]  right and so you that that's like the mentality here the problem is that is innately inefficient so are like because you're going to duplicate stuff it's not going to be
[03:43:35]  dry so a lot of the work of the frameworks is is like essentially giving people and i think reacting this as its mission and i've been kind of interested in this too
[03:43:46]  with solid with aggressive co-location it's giving people that ability to to take the small thing the thing that they could just pick up in their hands so to speak and
[03:43:54]  deal with that and still have it part of the most the largest system possible be very effective on as a large system right and and there's different ways to distribute things i
[03:44:05]  think things like edge functions and the edge are super super interesting on that side because like now you have a whole network at your disposal like just just just beyond your fingertips like you
[03:44:15]  know the obvious thing is you just put everything you like you do a solid start you just deploy to a server there you go there's your function you you've now got
[03:44:23]  it on an edge worker let's just deploy it like done you know that's easy it's small about a code but you know like picture if you use more than one worker
[03:44:31]  like you could have a whole yeah that's what i'm imagining working for you next years does this right like they don't do one serverless function they do a serverless
[03:44:42]  function for every route you have every page you have so they can split stuff and right the thing is from a viewing perspective um each router page is an independent thing and a
[03:44:53]  single experience and i i it's good that they can scale separately because you have more than one user and all this is there a way that we can leverage this in a more
[03:45:04]  distributed way that it would actually impact even a single user like like i don't know it's yeah this is this is this is just crazy thinking but you you you don
[03:45:14] 't it's not just one computer you have like a bunch of computers just right right there what can we do with those so let's say like you have like a 10 level
[03:45:23]  down nested route and all of those data functions need to be called so like yeah what if you can like parallelize that or something like that or maybe there are a lot
[03:45:29]  of data operations that need to be done like data like database stuff you want to parallelize that i'm yeah okay yeah i mean we're just thinking out loud and the
[03:45:39]  chat's been going on here about this um yeah thank you yeah thank you for how do you know the best thing about coffee script was that you didn't have to declare variables
[03:45:54]  and you literally just like could code like a con unconscious stream like like you could like literally just be like there's this thing that does this and it does it it's
[03:46:04]  like writing pseudocode messy and i i used to just enjoy it because i'd like sit down with a junior dev and teach them and i didn't write a comments
[03:46:13]  i'd write the logic out as comments you know just be like okay we need to do this then we do this and we do this and we do this and then i'd
[03:46:19]  be like okay well let's let's do this so we just kind of write something here and then write something here and we're not like figuring out what the type is
[03:46:26]  of that thing or what the like you know not even declaring variables we're just like okay we have right so we have that user and then we have to do this and we
[03:46:35]  just kind of pseudocode it out and then like maybe maybe it's broken like the first time you run it it like you get like a undefined error because
[03:46:44]  you access something of undefined like javascript does that to you all the time but the funniest thing was usually what would happen is you'd hit that and then you
[03:46:51]  fix it and then you go oh god i forgot this one thing let's change that like you realize your logic error and then you can continue and then you do this and
[03:47:00]  because of how fast that experience was of just like kind of going spitting out the page and then going and then like going oh right this like this logic isn't right and
[03:47:10]  then rewriting it and then just going oh yeah maybe if we just do it like this and just kind of drop down that idea because it was so quick like that from a
[03:47:16]  prototyping perspective like it felt that's when i felt like i was a 10x developer as i said i probably broke things i probably like left a trail you know of
[03:47:27]  bad stuff in in in my wake but like when you came in and people talk about typescript and refactoring and they're like oh it's great because you just change
[03:47:34]  this thing and then you know all the places and you go and you fix them i'm like yes that's amazing because my refactor stories are probably nightmares to people because i
[03:47:42]  just go in and be like yep i'm good we're just gonna we're just gonna refactor everything and then just like go in like a storm and then you hit
[03:47:47]  something you're like yeah let's just rewrite it like it it was like the biggest messiest terribleness and when i'm saying this people are just like oh my god
[03:47:55]  that's scary right but on the other hand like the speed you felt while you were working in this language without the types without the very declarations you could split the ideas made
[03:48:04]  you feel like you could do anything in a short period of time like you could just like sit down and just like go okay i'm gonna rewrite the whole thing today like
[03:48:11]  like i've never felt that since i've left coffee script four hours and just like write 10 000 lines of code like the way you're describing it reminds me of like the
[03:48:25]  syntax especially reminds me of python obviously like as you talk so i'm imagining like what javascript and python would look like like dom stuff and python yeah i mean it
[03:48:35] 's fine i i type script is good i've used it in companies i made it yeah but the way i got my coffee script like type script has no place there like it
[03:48:43] 's just making you do more work yeah don't don't put types in my coffee script yeah i'm sorry that that was a perfect interruption to this because i honestly i
[03:48:54]  can i can keep on going on and on about my theories of it but all i wanted to say is like on the future side the outlook side because we talked a lot
[03:49:01]  about the past is that i think that even if people are getting tired with react and they want to try something new and you're seeing svelte and you know kind of
[03:49:11]  experiencing that and it's going to go through its cycle too or so it's going to go through its cycle like what's so cool about react and the react team is that
[03:49:19]  they keep on they're not they don't rest on their laurels and nobody feels like they're resting on their laurels don't get me wrong but they're not
[03:49:26]  like going for like the low hanging dx wins like going oh our users are complaining about this a lot let's let's fix this or add this i mean you think that'd
[03:49:34]  be a logical thing to do when you're the popular library instead they're like okay we could fix this but they're looking at the problem wrong like that that isn't the
[03:49:45]  problem of something else and you know what they're not wrong we screwed up in our design like we we did something here and which encouraged people to use stuff this way we
[03:49:56] 're not going to patch it because that's that's that doesn't fix the problem like like we just made something we compromised made something worse we're gonna change the model and
[03:50:06]  we're gonna and people aren't gonna like it because we've been telling them to do it this way but if we just make this slight adjustment these problems just eliminate like
[03:50:14]  they they aren't even a thing anymore and then they're not going to ask for that feature because they don't need that feature and they're going to be better off for
[03:50:23]  it but they're going to hate us for it for a while and and that's how i feel like react's been doing i've worked on product teams where that's exactly
[03:50:31]  the way to handle it yeah and i think i think that's exactly i that's what gives me hope for the future if react just was like okay yeah people care about
[03:50:40]  performance let's uh 18.2 let's add a performance thing where we do a smarter list diff so that it does a higher swap rows and now it scores better on the
[03:50:51]  benchmark and now we're tied with preact so that'll get people off our back they're not going to do that like like yeah it is crazy that he did that and
[03:51:00]  and and they're like oh people don't like doing those dependency arrays um let's just uh compile them in for people um because you know they're complaining about it not
[03:51:11]  because there's a fundamental reason for escape apps but let's just fix it like react went and did those kind of things i'd be like yeah they've jumped the shark like
[03:51:20]  they're at their height people love them for it and they will continue using it and they'll keep on growing but they're already dead in the water instead with what react
[03:51:33]  is actually doing i think they have a great future ahead of them right like on the client side stuff it seems like they're always still like the first to come out with the
[03:51:41]  cutting edge like the suspense api was so awesome right like like to make the data loading experience declarative like that yeah and that's the thing like but this is part
[03:51:53]  of what i was talking about group thinking and uh different technology and historical thing right i don't know if i ever shared this with you or but and dan abramoff even
[03:52:02]  credited it like showed i like was surprised himself when i showed it to him there's an article that patrick idioms steel the creator marco wrote in 2014 and and i
[03:52:12]  shared it with dan and dan was like yep he's like this is basically server-side suspense um we've been trying to add this to react since 2018 but uh mar
[03:52:24] co and he's like in 2020 we still don't have it no one has it pretty much and in this article from the guy who created marco back in 2014 describes how
[03:52:35]  it works yeah and the funniest thing is there is a common root here because patrick was inspired by a facebook technology called big pipe and big pipe was built at facebook on
[03:52:49]  their php setup to do the streaming and the weaving and and patrick was like yeah um this is a really cool technology i want to bring to javascript we need
[03:53:00]  it at ebay because seo is so important we need that performance whereas you know react side they were building client like trying to build apps they're like okay we need to
[03:53:07]  make our mobile experience good we need to make apps so they're building apps so they took this divergence face or react didn't care about this stuff when they went like back
[03:53:15]  in the day when they created that and now it's coming around because facebook.com is actually built on it right like with like facebook.com didn't move to like fully
[03:53:24]  they had react apps but they didn't become react yeah like 2019 or something like like so so like patrick went that way and using the same influence because i'm pretty
[03:53:37]  i don't know whether they're aware or not but like dan was like honestly i've never seen this article before but he's like he was like yeah big pipe that's
[03:53:46]  like everything he's talking about here is what influenced us that's how we decided how to decide suspense he's like we didn't do suspense i know we introduced suspense as a
[03:53:54]  way of doing lazy components he's like and we showed that and that's like the thing everyone thinks suspense is about spinners like that that's that's that's the thing
[03:54:02]  but he he told me he was like but no we created suspense because we were looking for a solution for uh server-side async out of order streaming he's like
[03:54:11]  basically we were trying to solve what this article from 2014 was describing um so much sense like they need those markers for where the async stuff is going to happen so that
[03:54:22] 's what's the sense yeah so all of this like stuff that react has been doing they've been feeding it to people in an order that people they feel they thought people could
[03:54:31]  consume it but when you start reversing the timeline and putting the pieces together you realize like this has all been part of this longer journey and every release every piece is makes sense
[03:54:41]  as part of this bigger picture but the and they've had they've had things not work or change the way they do like i'm gonna i'm i think i made
[03:54:50]  this call in a separate stream i don't think they saw i don't think server components were the end game when they started this i think server components might be the the end
[03:55:00]  game now but i think they had different ideas a couple years ago on how where they would be heading they knew that they'd be doing something like server components they knew they'd
[03:55:08]  be doing some client-side server interaction with the fetching and the paralyzed requests and the batching and all this stuff but i don't think they landed on certain components
[03:55:18]  at that point i think if you see that there's like a certain point where they're like like there was a change but that's cool because when they started this during 2016
[03:55:29]  or 17 they didn't know where they where they were going to get exactly yeah but but the the interesting part is the stuff that they did um introduce all make sense retro
[03:55:41] actively even if as they introduced it they were just pick you could tell they're picking things that were features that people would find useful like oh yeah i could use lazy loading and
[03:55:50]  codes i hate that that they did this like slow roll out of ideas just tell me what your plan is right right because they weren't 100 sure they weren't sure the planet
[03:56:01]  and the problem is now yeah they're paying for it this is part of the reason why there's this sense right now i even had to defend this today where someone was like
[03:56:07]  there's you know other frameworks for this is about the thing where react was revolutionary but since then other frameworks you know have improved on dx and react you know has been working
[03:56:18]  on suspense and i'm like you understand this is the dx thing like yeah it's it's not it's not it's not like it's not like um there's only
[03:56:27]  like suspense is just loading screen it's like and the problem is it's not just the people who don't know it's like everyone doesn't know like even the other
[03:56:39]  framework authors and stuff like like when when react and choose fiber pre-act was like yeah we're not we're not following suit because we we don't need this complicated thing
[03:56:48]  we don't care about time slicing and and like uh even view and and pre-act which have suspense they were just like yeah look we got suspense and then then the
[03:56:57]  react's like okay cool transitions and curve rendering and they're like yeah we're not doing that like like essentially and because of that and the way react introduced it now everyone thinks
[03:57:10]  suspense is just loaders you're like oh yeah view has suspense they don't know how to do loaders like it's like i think in view it's like an
[03:57:17]  async setup call where you can just like oh wait like do async stuff in your setup function that that's i guess suspense but that is not consistent async currency like
[03:57:29]  that is not suspense you know like and like i mean it mechanically has the loaders like it mechanically yeah but like you you you can understand that what react has
[03:57:44]  been doing and what they've been building towards is just on a completely different level so in a sense on one hand i can say it's in completely cutting edge and they still
[03:57:57]  lead the charge especially when others are just like they see the feature and they go oh yeah should i add this or not like i'm guilty of this myself i didn't
[03:58:04]  get server components at first but but on the other hand elements of it like this is a natural evolution if you can look hard enough to pick up the pieces like even server components
[03:58:19]  the reason i didn't get it is because i didn't understand that it follows the partial hydration rules yeah had already established eight years ago like like like they were more powerful
[03:58:31]  yeah i thought i thought certain components were like these super like like windowed things where you could just be like okay render this on the server or don't do this exactly like
[03:58:41]  you could just like trigger stuff and it was like a client-side rendered thing no server components is is an evolution of i mean it's a vdon mentality but it's
[03:58:49]  an evolution of partial hydration automatic partial hydration and islands like it's basically an evolution of of the same like they just took a different take on basically what marco did in
[03:58:59]  2014. like they were like we need they came to the same conclusion they're like we need streaming and we need partial hydration yeah like this and from that look what's and
[03:59:09]  the thing is and they came up with similar contracts they're like okay we need we need like a boundary that handles this async piece so that we can like insert it where
[03:59:19]  we need it you know marco called it fragments they're like okay we'll we'll call this suspense like and this is completely independently i do not believe that they were
[03:59:30]  looking at it in the same way that react claims and i mean we'll see that they did not look at reactivity when designing hooks like people find that very hard like myself
[03:59:41]  find that very hard to believe but if you look at the prior art there is like no zero mention of fine grain reactivity as the prior art for hooks and you look
[03:59:51]  at it you're like but like and but i'm willing to believe that's true because like i've even seen this this week when when when uh michael jackson was
[04:00:05]  kind of gushing a bit about how cool solids model was and people like yeah so you've used view before and he's like well no actually i've never looked at view
[04:00:13]  like like like like like solid does more than view which is really cool but the reactivity is actually like it's like you it's like the core thing like solids render
[04:00:24]  is way cooler than that yeah like the core thing that and the stuff he was talking about was just pure creativity so like from from that that perspective i think it's fair to
[04:00:36]  say that not everyone is trying to chase every new trend and all every different library and they kind of get in their their their their slots so hooks maybe were react realizing six
[04:00:50]  years after the jquery gap that the libraries that they inadvertently squashed with their big boot when they came in without even realizing like the react is very aware of angular
[04:01:01]  like they they were they were like okay maybe even ember because they were like hmm the problem here is is we want to re-render everything to simplify stuff but it
[04:01:14]  it sucks it's in like how can we do this and then they're like oh this virtual dom thing actually works and it's fast enough even react like early early days
[04:01:23]  where like it's fast enough that was like their message they're like pete hunt's like talk right like he does he compares it to angular and ember and he describes
[04:01:31]  how like observables are bad computers are bad but vdom is fast enough and it uses less memory like that was his essential yeah like but the thing is like the the really
[04:01:41]  like performant thing started coming out around 2014-15 it was like a couple years later that that that they really went hard on like showing like react is the most perform
[04:01:50] ant where like the dbmon and all that kind of stuff at the beginning they were just like we we they were almost comparing it to backbone they were like we want to
[04:02:01]  re-render everything like this but we don't want it to be expensive dom operations and people they they're aware they're like people are looking at doing these event systems you
[04:02:10]  know but like maybe they didn't look even that deep into it they just dislike the events that they're like but we want to keep the backbone model so we're going
[04:02:18]  to do this i'm not sure how much they looked into it back then but it doesn't matter the core team that created react is not even the core team that that like
[04:02:26]  there was a change of the guard around 2015-2016 but the thing is hooks came out a few years later and i understand why if you if you understand that react has to
[04:02:37]  orchestrate the data model they need they needed the explicit language like it all fits together they basically reinvented um fine-grained reactivity patterns and according to them completely
[04:02:49]  independently so so i mean it makes sense that like they were trying to fit this class update model into functions and so you can think of how the origin of hooks could come from
[04:03:00]  that instead of like from a reactivity first point of view yeah exactly but i mean people working reactivity like evan you and you and he he looked at it and
[04:03:09]  he was like wait okay yeah okay sweet this is sweet like he's i think they're probably actively excited even rich himself but actually rich looked at him he's like oh man
[04:03:18]  this is clunky like why would anyone do that and then he probably looked at his own library and he's like yeah we're pretty clunky too but i never expected react
[04:03:25]  to do this and then he's like okay i'm gonna build a compiler to get rid of the clunkiness but like like the people on the reactive side were almost
[04:03:32]  immediately saw that like the flaw they were like wait a second this this doesn't add up in the react community it took about two years to to fully understand where the like the
[04:03:44]  the gap is between reactivity and react like the hook rules and all that implication but but the react this is it just it's funny because i talk about innovation versus impact
[04:03:55]  right react hooks like like they were innovative from the stance of like applying that to a v-dom is absolutely genius yeah you take a pattern that doesn't fit in your model
[04:04:08]  and then model a complete opposite pattern and make it work i i think that kind of stuff is is is really smart and that's that's actually uh on on the other hand
[04:04:16]  that's also what solo does a lot it takes something from like e-dom mentality and brings under reactivity like i think that kind of thing is really clever to kind
[04:04:22]  of hedge weaknesses and like things but but like the funniest thing is when you talk about impact it's completely off it because on sure on the innovation side i might argue that while
[04:04:36]  innovative for react not very innovative in general patterns because like they already existed like yeah not going on reactivity did this kind of pattern composition but on impact side everybody changed like
[04:04:47]  view is like like okay we can expose our reactivity so it was like okay we're gonna be the language like it was a single catalyst point of everything changing um because because
[04:04:59]  of this move they made so react it was amazing that people liked the change and people like but like evan he wrote view one he knew about reactivity he knew about these
[04:05:10]  patterns he purposely chose not to use these patterns with view he like may he he hid them from people composition api has been under the hood of view since view one like
[04:05:22]  it's always that was a poor design choice or design choice yeah complete design choice because he wanted to make things simple and he was worried that you think it was a good design
[04:05:33]  choice to leave the reactivity out or view is the most popular library um in terms of github stars it's it's like i know svelte is more
[04:05:41]  love now because it's newer but if you just look at the history and look at the number of people and you actually add up the math view is the most loved javas
[04:05:48] cript library so i'm gonna say that whatever evan did is probably correct but solid wouldn't be here if you made the right the what i consider the right decisions oh they
[04:05:59]  would be okay they would be like me solid and view both sit in this kind of middle ground where they have the potential to like you know how we're talking earlier how
[04:06:07]  like everyone can compile and build anything they want on top of solid solid's mentality was like okay well that's great we have these primitives you can build them go make that
[04:06:15]  svelte thing it's really pluggable right view is like hmm well we have this incredible power to do everything we want but we're going to be the best
[04:06:25]  sdc format the best jsx format the best this we're just going to make everything and have it all be view like right like like it's i mean i'm
[04:06:37]  a star trek nerd but it's like the difference between the borg and the bio borg anyways like no okay moving on but like essentially like like assimilate like view is
[04:06:48]  view is like assimilate like be in the middle and they will absorb anything and because they they're in the they're they have they take an advantage point where they can literally
[04:06:59]  do anything ever anyone does but it also means that like i know you've said they have the activity and be wrong and like yeah they need both right like that's one
[04:07:10]  of the i i i'm not like solid came out of like basically disagreeing with every design choice that that was ever made like that's like like essentially i talk about this
[04:07:22]  it's funny because every this is why i feel like solid actually has a space because maybe that's like a diamond it's not like a line because i said that svel
[04:07:31] te and solid are on these polar opposites but view is more of like like if you were like siblings like you have the same dna and i just put a bit
[04:07:39]  you it becomes decisions with with what you did with your life where svelte is like somewhere over here and react is somewhere over here right right no that's that's very
[04:07:51]  interesting yeah like realizing very recently actually i'm not a view user so very recently i realized that view is doing like reactivity essentially but i don't know how it's
[04:08:00]  encapsulated or like every every little piece is different like i i told you when evan saw react and he's like okay this solves my problem he didn't go oh un
[04:08:09] idirectional flow and stuff it was like he was like vdom because now we have a safety net for our crazy reactive system because what i want more above anything else trying
[04:08:19]  to get in that mentality is that people can just really easily update stuff and reactivity it's really easy you know he they use proxies and getter setters
[04:08:28]  and all their states mutable and all automatically updates like it's stealth kind of carried that over but view like solid with a runtime reactivity actually is less it's more flexible
[04:08:39]  it's more freeing um like svelte has a compiler it's very restrictive it's actually hard to abuse the system because of how restrictive it is yeah we've talked
[04:08:46]  a lot about how restrictive self is but it's intentional it's part of the design and it's it's good it's good it's good design but view like solid
[04:08:57]  is incredibly powerful um but it makes that makes things messy depending how you do it where i've tried to you know focus more on primitives and essentials view focus on like
[04:09:09]  like everything so like he like he has the tools to literally do anything so like but that's interesting thinking of the vdom as a safety net for your reactivity like that
[04:09:24] 's like i've never thought about it like that like the point of meeting the vdom is so that the reactivity system doesn't touch the renderer directly and yes
[04:09:33]  and no matter how much crazy stuff when someone causes like an infinite loop or triggers a bunch of stuff the vdom will just take that in and reconcile the differences so that is
[04:09:44]  probably like in the most literal way we take away our safety net right like now you're yeah right it's funny when i saw react i was like i was like okay
[04:09:53]  i don't like it but then like move forward a couple years and i was like oh you know what two-way binding is bad yeah like like that like there's usage
[04:10:04]  and obviously locally two-way binding is good but once you like extend that principle out through your system it's bad and i'm like man they're right unidire
[04:10:13] ctional flow like all this stuff the apps they make sense i spent so much time teaching people in knockout to avoid foot guns that i started making microsystems and like uh
[04:10:22]  my own primitives on top of knockout primitives which is great this is why composition is king yeah right and i i basically built kind of a micro framework on top of
[04:10:33]  knockout i changed the view level they have pluggable templates i may introduce our own syntax so it's kind of like react i i made i've replaced i made
[04:10:40]  my own primitives on top of knockout and i told the team like in these use cases use this primitive because i wanted to stop the infinite loops and the weirdness so
[04:10:49]  i was like when you create effects your your dependencies always have to be explicit and anything that's not an effect has to be a pure computed no no side effects like i i
[04:11:01]  started enforcing those patterns and maybe our own primitives that like that did this 15 minutes right and and and and start that's where i got the ideas with solid in
[04:11:13]  terms of like learning about like how to safeguard against reactivity and over time as i built these mechanisms i'm like yep react is right like it just like over and over again
[04:11:23]  it was just like yeah that's why react does it this way yeah okay yeah like and eventually even if i didn't like react i like i didn't like the classes
[04:11:32]  i was absorbed by life cycle functions like the classes always bugged me because there's no composition pattern for it and i loved everything about knockout i'd be just like man
[04:11:41]  they're right like like and it's a different take because like view or in some you guys felt we're like no the the they have really cool technology like the component update
[04:11:53]  model but like they're not right we want to be easy but i was like no react is right because i want control so like i think you can't pay too much
[04:12:00]  attention to the features because i think what you've got with react is the men is a lot of the mental model like the unidirectional flow read write separation like top
[04:12:09] -down reasoning is still possible right like in a solid component like these things i think were were the things that react was really good at like right and dan i shared on previous
[04:12:19]  on the stream that dan abramoff shared this like one of his earliest articles on medium which he never finished was where he was like saying everyone doesn't get why react
[04:12:27]  popular it's like 2015 like he's like i figured it out he's like he's like there's something about react and he starts codifying it and explaining why react is
[04:12:36]  like so good in a way that people never explain it he's like it's not about the veto it's nothing to do with technology and i i came across that that
[04:12:45]  article years later and when i read it i was just like yeah like i just finished writing my own version of that article one of my old medium articles one of my ones i
[04:12:54] 'm most proud of them in my first like six months of writing articles was like what every framework can learn from react and and the funniest thing is those weren't the lessons that
[04:13:04]  view learned from react you just was like oh i have a technical solution for my problem and honestly it's good that's why people have different opinions but that's why also
[04:13:14]  when people ask me what i think about views designs decisions like every little aspect of it you'll see that i've made the opposite decision with solid and it wasn't intentional i
[04:13:22]  wasn't like trying to be anti-view i just strongly disagree with almost everything that you does and like yeah you learn the different lessons from react that's super interesting all
[04:13:34]  right so like when people say react impact again like like there's no denying that the impact you know what was about like i know the react the tech is different but like do
[04:13:47]  you have a reminder of like what the react branding experience was then like because react as a brand is also so huge like view has these many stars on github but
[04:13:56]  you would say like react is probably a much bigger brand like amongst developers i or maybe that's what it looks like to me being on twitter or something yeah i mean react is
[04:14:06]  react is like if you've seen the download stuff too react is like double view and angular like you put angular and view together and react still dwarfs them like react is just
[04:14:17]  so much more popular and had their model and stuff because they took it to mobile they took it to other things swift other interfaces other uis stuff outside the web started copying
[04:14:27]  their like adopting their patterns but it's it's a as it's like the impacts on different level view is just very light it's like github stars everyone more like
[04:14:38]  people who use view like a lot of people have always like loved you view is very well loved it satisfaction ratings over the years it wasn't until svelte that time period
[04:14:47]  that views love kind of started weight like getting into a middle ground you know middle life thing because svelte came in and was like yeah well that aspect of view we
[04:14:58]  we can we can do better and that's the thing view view was in the middle but they kind of stepped to the side of it and were like we do everything but we
[04:15:08] 're also really good at this and that's why she used it and then svelte came around the other side and was like actually we're we're out here and
[04:15:14]  in the end it left view in the middle dead smack in the middle and what's hard about being in the middle is yeah you can do everything but no one's gonna recognize
[04:15:26]  you for for the good you do because because they'll be like oh yeah views like almost as easy as felt and like kind of like react and it has a lot of
[04:15:37]  things like angular but like it's not the best at anything yeah maybe you get somebody into view and then it's difficult for them to leave because they feel like they can do
[04:15:46]  like oh yeah i mean like don't get me wrong like view is consistent it's well designed well built it's just like the the the the the the set of choices and
[04:15:55]  decisions have positioned them in a place where they are flanked on all sides that makes sense it's weird that i look at it like this but this is part of my
[04:16:04]  whole like yeah melody background i like like i played a lot of competitive magic the gathering when i was younger um and and it's a card collectible card game but the whole
[04:16:16]  thing was because of limits of the cards and stuff there's this concept of metagame in which um essentially you you can there they print certain cards at certain times like
[04:16:31]  there's a certain card pool and what it would mean is that there's different strategies that are available at different times and certain strategies beat other strategies like a game of rock paper
[04:16:41]  scissors yeah at any given tournament you might have more people playing rock than paper than scissors and you kind of look at the trends to decide what should you play but what you should
[04:16:52]  play that week and sometimes people come up with like stuff off the wall that maybe always loses against rock but it's really good against scissors and paper and there are a lot
[04:17:02]  of people going to be playing and then you hedge in and you just come you spike a tournament and and like the thing is over time the game mechanics were such that it evolved
[04:17:14]  to the point that people understood the trends not just from the week-to-week perspective but actually from the perspective of like archetype typically what things did good against what
[04:17:24]  things and how they compared and to the point that for me myself i found a strategy that i liked and no matter what cards they printed i'd play that same strategy i'd
[04:17:36]  force it i'd essentially figure out the the the mechanics in the in the meta game figure out what cards if they weren't individually strong figure out how i could use things
[04:17:48]  in a way that simulates the same tempo or gameplay um thing the game has this kind of idea of tempo like in terms of like how fast things ramp up and what like
[04:17:59]  like the way the the like the accelerate um and i would just force it and i just keep on doing it over and over again every single year every single season and i
[04:18:11]  kind of became a specialist everyone knew it was like oh if you're playing this type of deck go go talk to ryan because he you know if you think this is a
[04:18:19]  good way to spike the tournament he'll help you design it right and did it work did it work yeah i mean there was a few times that it was amazing and there
[04:18:29] 's other times that it was just okay but it consistently i was very good at tuning this style because i understood the timing and i understood i could take cards that you're like
[04:18:38]  this card's crap but i'm like but in this deck it makes sense because you need something like this the deck is the constant across the games because you have some constant you
[04:18:49]  can change the cards and you can sideboard and that's where the thing gets interesting because in that game the first game you'd play with the deck you prepared but then
[04:18:57]  you can switch up which is 60 cards and then you can switch up to 15 cards in the post game matches in this best to do it and your strategy holds or like the
[04:19:06]  thing is depending on it you do who you're against you change your strategy so there's a lot of consideration about which cards you you also bring based on what other strategies you
[04:19:15]  think what your weaknesses are and as i said i picked a strategy that fit my style which was in the middle essentially because you could be on one side where you're always
[04:19:26]  aggressive but then you lose if you hit this thing on one side right you can use that for the main game but for these playoffs you're not using like you have to use
[04:19:34]  like specific strategy for the playoffs like the second stage right like you're saying no no no i'm saying is you you you get to bring one deck and you don't get
[04:19:42]  to change it uh but you said this 15 card thing right like that's 15 cards let you change your strategy tweak it but the first game is always raw and then the
[04:19:52]  last two games you can hedge towards different strategies that you face because after game one you're like oh i'm playing against this i'm going to change these cards and yeah okay
[04:20:01]  you know what i'm doing the thing is because of this tempo thing i would choose strategies that were somewhat in the middle but basically often make the deck work like there's
[04:20:16]  different strategies to sideboarding and i'm getting kind of technical here on this game but essentially you could always make your deck better at what it does against decks that are like bad
[04:20:25]  against but you know and and then you could you could also try and like completely switch your strategy and like and like do something completely different in those 15 cards um but what
[04:20:37]  i what i specialized in was taking decks that were already somewhat in the middle of the range and tweaking them to almost mimic the deck that they were playing against but with a
[04:20:50]  slight tempo advantage just validate their strategy that was the thing just that my whole idea was that if you if you had cards that could work in a certain way and this is
[04:21:04]  hard to explain obviously obviously but if you have a bit of it though what do you mean that you could reuse purpose them in a different way you could you could put together like
[04:21:15]  you can mimic or you can think and i know this is completely off topic but i approach the design of solid this way um and because i i was looking for pieces to
[04:21:28]  solve my problem and i knew i like fine-grained reactivity i i'd already picked my archetype i knew like where i was sitting so i was like okay how
[04:21:37]  do i deal with the weaknesses how do i address um like how do i like when i'm in this scenario that's weak how do i change uh disadvantage to an advantage
[04:21:51]  by by kind of approaching it slightly different how do you change the problem how do you invalidate the the the question being asked instead of instead of trying to like beat it if
[04:22:02]  you can't beat it or dodge it is there a way that you can make the question being asked invalid like just change it so that the problem isn't even and you and
[04:22:11]  you also don't want to choose the change the archetype you started off with like you're not like just going to i'm i'm you're stuck with it right
[04:22:17]  you can't change your deck the whole time right right i'm stuck with fine-grained reactivity right but can you can you change the the aspects of it that you
[04:22:28]  can take a some attack an area or that is yeah should be unsolvable model can you tackle hydration can you tackle can you tackle something that should should be installed so
[04:22:39]  you go fine grain and you go like you mix it with jsx that's not the obvious thing for people but because you mix it with jsx you you actually innately
[04:22:48]  make it more like something else like and weaving threading this needle so to speak of these trade-offs in a way that i felt you could like hedge the weaknesses and
[04:23:03]  and kind of address like that was basically my whole strategy i'm saying uh you should write about this sometime because it's super interesting like i i tried to talk about a little
[04:23:16]  bit i wrote uh after the 1.0 release i wrote a solid and metagaming article but i don't think i got quite into this this this detail but i
[04:23:24]  did share one of my favorite videos of all time which is uh aaron foresight talking about game design he's like one of the lead designers magic and uh 20 lessons and
[04:23:33]  those 20 lessons that he learned um essentially they apply to game design but they could also apply to any kind of design philosophy where you where you have users that you use that
[04:23:47]  use your product and you you know like one of my favorite ones was he's like make something um like it's better to make something that like evokes strong emotion than make
[04:23:57]  something that's like everyone's like thinks it's like yeah he's like how people love it how people hate it but but the worst thing you can be is like like everyone
[04:24:07]  likes it like like like i i think i think it's really really cool um anyways sorry like we're gonna go on forever if we can do a great chat we have
[04:24:19]  going here i'm gonna i'm gonna pick up some of the comments but we're gonna end the stream here pretty quickly i can i can i gotta save some of the stuff
[04:24:27]  for another stream but it's been great having you on as i said you invoke very interesting conversation to me and gives me a chance to you know talk on some topics to talk
[04:24:35]  about this stuff yeah how come people say flutter desktop is slow i thought yeah i don't know the the canvas space thing is i think should be fast i mean in
[04:24:46]  theory canvas is super fast i have benchmarks with that but the interesting thing is um there is a flutter for web which doesn't use canvas and uses dom and that that thing
[04:24:57]  yeah i don't know what the term term is people use back when i was uh a sinister in vans we used to call the term hot garbage um that that that
[04:25:07] 's uh that that's that's the thing um cam i imagine flutter canvas should should be okay in theory i know there's accessibility concerns and all that stuff but some someone
[04:25:19]  rendering to canvas should be okay i don't know yeah yeah i know it uses but there's a there's a dom mode too which is which is garb which is
[04:25:27]  garbage they let you choose um at least the last time i checked like yeah i mean we've seen it in benchmarks but you're right if you trying to recreate the dom
[04:25:39]  you gotta recreate the dom yeah yeah to canvas yeah better runtime which is yeah i mean yeah so you guys are just talking about flutter i don't care about flutter sorry
[04:25:53]  guys i mean the interesting thing is we were talking about custom renderers today so you know something like react native for web is kind of interesting i already alluded to it a bit
[04:26:03]  or thing but what if we tried to take a custom renderer and just like said like have our hand at trying to design the new dom api yeah yeah i am
[04:26:13]  yeah down to do that for sure i mean that's one of those like what ifs it's like reactive script like maybe one day we'll we'll try it or do
[04:26:22]  it but there's there's a lot of things to get there but i said i know that concept excites people and there are people actively working on react native web so
[04:26:30]  like you know i guess we'll have to see yeah people working on solid native also like should have given a shout out or like found a link or something but yeah there are
[04:26:39]  people trying to make solid native working they're already demos up i think like small ones what i have no one's shared anything about me with me with solid native there's a
[04:26:48]  solid native thing that uses uh native script uh native script is just uh you write javascript but it's still like i'm familiar i'm familiar with native script and
[04:27:00]  i someone actually brought a surplus to native script previously which made me always feel like it was possible but i was not somebody did it somebody did i think fox fox pro or
[04:27:11]  one of these fox wisdom one of these names did it yeah yeah i know both of them um okay yeah i'm gonna look forward to just checking that out i yeah i didn
[04:27:23] 't realize anyone had started the effort this is this is really cool stuff it's so funny because i said i i put this together having like it was easy for me to do
[04:27:31]  but i had no clue if i was doing the right thing or if it actually worked and it seems like it does mostly work so i'm if you are working on custom
[04:27:39]  renderers do let me know come with the feedback everyone does kind of come with the same feedback though so i i haven't figured out how to solve it but we'll see
[04:27:47]  if we can like improve the creation so that you don't have to like defer the props but i i actually don't know yeah with the reactive system just the way they work
[04:27:56]  but yeah yeah for mine i did like i'm just taking one prop arcs like arcs i'm keeping for the creation everything else like happens at run like on in effects
[04:28:07]  i do like sometimes in 3js you need some props so like in my compiler i save one prop in the creation code and leave okay yeah yeah so yeah we can look at
[04:28:17]  that at some time and see if there's ways to optimize it um i i'm i'm pretty interested to see where this stuff goes in general it's cool that people have
[04:28:26]  picked this up without me having to do anything which is the the coolest part so i'm pretty happy about that okay yeah stream has to end i'm glad that so many
[04:28:34]  people stayed here to the end this has been one of the longest streams we've done and we've had a steady group but my throat is like getting course here and my my
[04:28:43]  bad on keeping you here so long yeah we're we're like after midnight this is uh this is this is a long one but thank you everyone for joining this has been a
[04:28:52]  lot of fun hopefully you got something from it i'm gonna try and edit this video but this is i don't know if i'm gonna be able to do it tonight
[04:29:00]  it's too late um so uh yeah till next time um see hopefully see you all next week all right see you tomorrow see you