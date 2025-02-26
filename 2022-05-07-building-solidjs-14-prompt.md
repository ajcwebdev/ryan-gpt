---
showLink: "https://www.youtube.com/watch?v=2UPX0HZxXEQ"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building SolidJS 1.4"
description: ""
publishDate: "2022-05-07"
coverImage: "https://i.ytimg.com/vi/2UPX0HZxXEQ/maxresdefault.jpg"
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

[00:00:00]  Hello everyone. Welcome to my stream tonight. I'm glad you can join me. I'm going to be talking about some new stuff going on with Solid. It seems
[00:00:14]  like chat's already been going on before I even got here. Just going to catch up a minute. Wow, there's a bunch of people here already. Ryan likes
[00:00:25]  anime because it's one of a kind of anime. It's supposed to be a unique unraveling on time travel. Yeah, people talking about the thumbnail. Yeah, big
[00:00:33]  fan of Steins Gate. But honestly, I was just looking for cool programming images and fans. So yeah, I don't know. I'm still looking for a cod
[00:00:46] ename for 1.4 release. So people have ideas. But yeah, I don't think it's a time travel one. I think we're going to be
[00:00:55]  looking we're going to be looking tonight at a few things, mainly updates resources, updates to stores, and updates to compilation. I'm going to kind of bucket it that
[00:01:09]  way. So yeah. Anyway, if you're here, come say hi in the chat. Glad to have you. Change up my drink tonight. All right. Yeah
[00:01:28] , how are you doing? Hi, thanks. Thanks for saying hi. Yeah, just give people a minute or two to join on. I'm actually pretty excited for
[00:01:45]  this week in JavaScript, too, because there's some conversations, some React ones. And yeah, actually, you know what, this week feels like vindication. So yeah
[00:01:56] , we're going to have some fun with it. Yeah. Hi. Oh, yeah. Steins Gate on in full effect tonight. Oh, yeah. Thanks for
[00:02:13]  joining. Hey, Oren. Oh, yeah. Okay, well, let's see here. Let me share my screen at least. Make sure it doesn't die like
[00:02:32]  it did the other time. All right. I think we're good. All right. Yeah, the dishwasher finished. Yeah. Thank you. That's what that notification
[00:02:43]  was. Yeah. Just in time to see my kitchen sort of blurred out in the background. Oh, I left the cupboard open. Give me one second. Otherwise, Michael
[00:02:56]  Rawlings from Marco's wife will make a comment. I'll be right back. Is Solid JSX and Solid template literally the same scene? Great. Very,
[00:03:21]  very close. As close as I could get it. It has most of the optimizations. It doesn't have the effect grouping optimization. And it's a little heavier on
[00:03:37]  load up. The biggest thing with the template literals is that the code side is bigger because you have to bring in like an HTML parser. The approach we did
[00:03:44]  to temporal literals isn't just like use HyperScript like most people do. We actually do a mini compiler. So it actually compiles sort of very similar to the JS
[00:03:52] X, which is why Solid's template literals are one of the possibly most performed template literal solutions that's out there, period. Hey, okay, good. Yeah,
[00:04:05]  I think we've got some people here now. That's great. So why don't we get started with this week in JavaScript? Okay, so let's get my
[00:04:16]  screen up here now. Okay, well, I'm going to start off with this little demo here. I saw this and I thought it was so cool. We talked about
[00:04:27]  this. I think we've even talked about it on stream when the Marco guys are here. But it might be hard to see here without zooming in a bit. But
[00:04:36]  essentially, someone took Astro and have it rendering in a service worker. But what's really cool about it is it's a partial service worker. So like, you go
[00:04:45]  to one page here, it loads it from the service worker without going to the server. Go to a different page, it goes to the server. And what they're doing
[00:04:53]  here is they're toggling offline mode to show you that when you go to that page, it actually is gone. Other pages, it's fine when you're offline
[00:04:59] . The reason this is interesting is, when I first saw this kind of stuff, I was just like, like, what gives like, who cares? I mean, a
[00:05:06]  single page app is probably simpler if you're going to render everything in the client, you know, single app view. But if we're moving to this world where we have
[00:05:14]  this kind of more multi page app partial hydration kind of mentality, putting the server in the service worker, let's keep a single app mentality, like, like not single
[00:05:27]  app, but rather like a single approach, you're not like going, okay, now I'm in spa mode. I was in MPA mode, now I'm in
[00:05:33]  spa mode, like, you get to keep the same paradigm. So I think we're gonna see more of this in the future. And you can see the layers, right
[00:05:39] ? It's like service worker, edge worker, something near the server, I think I wouldn't be surprised we get to a point in the future, in which you go
[00:05:47]  and click deploy to cloud flare or Netlify or whatever, and, and for cell, and you literally just spread it across the infrastructure, like, I have code
[00:05:55]  that runs close to the database, I have code that runs on the edge close to the end user, and then I have, you know, code that, you know,
[00:06:03]  maybe runs in the browser. And what's cool is if you use this paradigm, it is conceivable that you could have a single paradigm across it all. So I think
[00:06:12]  I think this is really cool. And it was kind of an inevitable progression, but this is the first I've actually had a chance to see this. So I think
[00:06:20]  I think I think that's awesome. Oh, what do we got here? I have more people talking off the main thread for the way. Yeah, I would I'd
[00:06:32]  like to I'd like to see more on this. Honestly, there are some discussions this week talking about that. And so far, it's been prohibitive from like a
[00:06:41]  framework perspective, like don't get me wrong, like things like Party Town do really cool things offloading the main thread, you know, you're fine if something
[00:06:47]  takes longer, if it's not important. But integrating it into the framework itself is interesting. And I think, I think we're gonna have to experiment and see where that
[00:06:58]  goes. Thus far, just like WebAssembly, it's just like not quite there yet. But I feel like we're getting closer and closer. I got a
[00:07:06]  web worker framework was actually shared with me this week, and that I kind of like, okay, I want to benchmark this, you know, it's been a few years
[00:07:13] , maybe we're, I don't expect it to do amazing. But like, maybe we'll get close to it. This might be a topic for another stream.
[00:07:20]  Okay, let's keep on going. What do we got here? Obviously, solid hack finished up. This was just the announcement for that I can kind of jump ahead to
[00:07:31]  talk about that for a second, because like, why not? But yes, more warning. Yeah, here we go. It's over now. Three great projects won
[00:07:42] . Honestly, there were so many amazing projects. I couldn't be happier with the results. We started this, you know, and thinking like, okay, well, maybe
[00:07:53]  some, you know, people will, like, try solid and, you know, have a reason finally to jump in and try it. And, you know, in the
[00:08:00]  process, maybe we can get some useful libraries, you know, out of like, and it exceeded my hopes, especially with stuff like Hope UI, SUID, I
[00:08:09]  think you pronounce it the material design port, we got solid table, which is react table port, and like, just so turbo query, which is like react query, like
[00:08:20]  so many really useful foundational libraries. We have one for forms, I think one for, yeah, like, there's just so many libraries and cool showcase apps. And
[00:08:33]  one thing that I think we found is, is like, a lot of this wouldn't have maybe happened if solid had react combat, it's kind of a funny way of
[00:08:43]  looking at it. But in hindsight, I think it's maybe kind of a blessing. Because like, yes, now, in order to make a library, someone has to
[00:08:52]  go through the effort to port it, that's, that's, that sucks, perhaps. But if someone wants to port it and goes to the effort, and now,
[00:08:59]  now it's their library, it's their thing. So in the end, the hackathon wasn't really just about get, you know, having more libraries in the
[00:09:08]  ecosystem, it actually brought us new, really talented, amazing people who built these libraries and projects. And I hope they stick around to see, to see, you know,
[00:09:19]  the outcome of what they built, because I think, I think we're starting on, you know, our own foundations, and it's amazing. It's happened way
[00:09:27]  quicker than, you know, I expected the hackathon was amazing from that perspective. The today, to be able to start on solid and be like, Yeah, I
[00:09:37]  feel like I want some material UI, or I want, I want to do something kind of like chakra or do like headless thing, and just have those pieces available to
[00:09:43]  you. It's like a game changer. And I mean, it's kind of proving the point in the vision like that, you know, this is a framework that
[00:09:53]  can do those things, right? So yeah, I'm pretty stoked about the hackathon all together. Okay, let's, let's scroll back a bit, because I
[00:10:02]  kind of jumped straight there, because I said, there's a lot of spicy ones this week. Yeah, am I there yet? Yeah, yeah. I want to talk
[00:10:10]  about this one. They haven't shown it to us yet. But Next.js has teased their router. And I've been sort of suggesting that this was going
[00:10:20]  to happen on stream for months now. In fact, I've been waiting for this, you know, every time there's a router conversation, I flag it in this week
[00:10:30]  in JavaScript so that everyone pays attention to it. This is this is very important. As I said, this isn't just about like nested routing. Nested routing has
[00:10:38]  been around forever. Like, for people who aren't clear on that, Ember router in 2012 brought nested routing to the client. React router one, in 2014
[00:10:50] , I think, had nested routing. My web component router you can check out from 2014 also had nested routing. At some point, you know, patterns changed,
[00:11:01]  we kind of got away from that. In React land, I think it was React router four. But like for certain types of frameworks like ours, you know, ones
[00:11:10]  that didn't use VDOM, you need to use nested routing. Otherwise, it's very wasteful. So it's like no surprise to me that we're
[00:11:16]  kind of coming around back to nested routing. It's just it's just a really good pattern for data paralyzed fetching and stuff. And even though like it's getting
[00:11:25]  a lot of attention now because of Remix and Next, I just want to kind of point out that we've had it. This isn't like a secret. We
[00:11:33] 've had that forever. However, this is a big deal. Because the read between the lines here is they're actually looking for a nested routing solution that works with server
[00:11:45]  components. That's why they think Next.js, you know, they've been fine with their patterns, what they do, they didn't need to make a nested
[00:11:51]  router. But the reason this is here is because server components essentially work off like a full page reload and diff and that's kind of heavy sometimes when you don't need
[00:12:01]  it. And I think, and I've been saying for a while that in the future of this transitional app type thing, that nested routing is going to be a key
[00:12:11]  part to reduce the pieces like the partialness of it. If you are interested on this topic, though, to get more into it, watch the stream I had with the
[00:12:19]  Marco core team and myself. We spend a lot of time talking about the routing and what the future of the web is. That's probably one of the best streams I
[00:12:26]  have on kind of like future facing what it looks like. But this is showing me that Next and React is well on its way. And the thing is, if they go
[00:12:39]  this way, Remix will probably begrudgingly harass me at first, but they'll adopt it too. We're starting to see the future of where things are happening
[00:12:49]  from the React ecosystem side. The rest of us have got to keep on pushing forward because we don't want to be playing catch up here. What stream? I was
[00:13:02]  just talking about, I did a stream you can find on my channel. I'm not going to pull it up right now, but with the Marco team where I talked a
[00:13:10]  lot about the routing. Next, it came up on my screen with Misko Hevery. I'm sorry for Next, to be honest. Auto imports, deploy on
[00:13:24]  the edge, along the Nitro engine seems promising. Yeah. Next is something I don't know a ton about, and I might actually cover it on another stream because they
[00:13:33] 've been really pushing innovation. I think more on the deployment side, make sure the whole system is robust. I focus a lot on the rendering and the core raw mechanics
[00:13:47] . This is an area where it inevitably gets you. When I was talking earlier about splitting your stuff along with your infrastructure, I feel like Nuxt is going to be there
[00:13:53]  before others, understanding how that works. I'm interested to see that too. One of the things is, right now, almost all the frameworks have the same story.
[00:14:06]  You have Vite under the hood and these deploy adapters. Literally, everyone is just like they all work on the cloud. They all work on the edge. They all
[00:14:20]  use request response. In a sense, you can look at Remix, Svelkit, SolidStar, Astro, and Marco actually is in that category now too
[00:14:31] . There's probably more. I'm gathering that Nuxt is on that train, and they're all kind of the same from that perspective, that capability thing. What's
[00:14:41]  interesting to me is where some libraries like perhaps Nuxt are building more on top of that. That's not really an area that I'm focusing on so much, but the
[00:14:48]  fact that the work is being done, I have a lot of respect for it. Probably something I'm going to want to dig into sometime in the future. Anyway,
[00:14:58]  next one I got here is, Mishko Hevery has been on a roll. We've been talking a lot about resumability and hydration. We talked about that
[00:15:08]  last stream. Not my most viewed stream, I have to say. Whenever I talk about hydration, those streams don't seem to do as well. Funny enough, it
[00:15:16] 's like, I don't know. Just for anyone who knows, my most viewed stream to date right now is the one that I did with Next.js. I think
[00:15:25]  that's kind of funny because for me, that stream was just kind of like a vanilla stream. You kind of just go in, try it, realize that Next and Rem
[00:15:33] ix are basically the same thing and then say, "Good stream, guys." Probably the highlight of that stream was realizing that Next had anchor tags inside their links and people
[00:15:43]  watching me refactor every single one, one at a time. If there was a silver lining out of it, it was that a week later, Next announced that they were
[00:15:52]  getting rid of the necessary anchor tag. That probably had nothing to do with us, but good timing. I think the stuff, especially like the Marco stream, the quick
[00:16:05]  stream and the hydration stream, you know, the last two I did, especially on like the breaking down the web, have a lot of really, really good content for people
[00:16:12]  who don't know much about these topics. Michiko has been digging deep though, like finding a specific topic and really getting down to the core of it because, I mean
[00:16:24] , you got to figure out where he's sitting right now. It feels a bit like a goldmine, like he's onto something with quick, you know,
[00:16:29]  and we feel the same way with Marco 6. And so this latest one, he's citing that it's not your fault your site's slow, it's the framework.
[00:16:40]  So you need a better framework. That's a pretty bold message. You can go read this article and see if you agree. I think, you know, it's
[00:16:53]  a complicated issue and whether you believe or, you know, that you should drop what you're doing and pick up quick right now or not. The clear thing from the article
[00:17:03]  that I think you should take away is that bundling is slowly creeping into the domain of the framework. And whether you do that from a meta framework standpoint, like,
[00:17:12]  you know, like the fact that like, it's all in like, like, you know, like, like remix or something where you're like, here's your solution
[00:17:18] , don't worry about it. Or next, same idea. But I mean, more specifically, even stuff like, you know, Marco, they actually built their own bund
[00:17:28] ler back in the day because of the need for it. And, you know, Quik and Astro, the way like partial hydration and, you know, Qu
[00:17:37] ik's progressive resumability are bundler tricks. So the framework has to be able to have control over it. And I think that's really should be the takeaway.
[00:17:47]  Basically, the framework's region of control has expanded. So to kind of combat this, you know, site getting slow as complexity grows thing. So yeah, whether you agree
[00:18:01]  that it's the framework's fault or not, there was actually really funny discussion a few weeks back that we covered, I guess it was a month back where Evan Yu
[00:18:08]  and Alex Russell were discussing this very topic. And, and Alex was like, it's the framework's fault. And Evan Yu was like, it's the frameworks don't
[00:18:16]  get to fix this. They're both kind of, you know, right, I think the frameworks can do better. But I think, I think there is a bit more
[00:18:27]  to it than that. But anyway, it's good article, you can check it out. Okay. So let's talk about use event. All right. If you
[00:18:43] 're involved in the solid community, you know, this one was a heyday for us, it was, it's always going to be a heyday for us when this
[00:18:54]  happens. And I don't want to, I didn't want to be like, too much on it. Because like, let's, let's face it here.
[00:19:02]  React has a different model. And we'll talk more about that in a minute. But it is a model that works that is consistent. They've had to kind of jump
[00:19:11]  through hoops a bit to kind of get it to where they want. But for them, it is a sound approach, you know, based on academic functional programming patterns
[00:19:22] , that they've kind of adapted or adopted into their world. So when I see use effect, or sorry, use event, I'm like, yeah, this solves a
[00:19:34]  real pain point. You know, there was that whole set interval example that everyone likes to show with solid. Use event is like, here is the, the way to
[00:19:43]  do it. Like, here's the solution. Don't play around with this other stuff. We're giving you the solution. And it's a solution that makes sense.
[00:19:50]  You can do it today. You can basically just use a ref in React, and use callback in combo, and pull this off. But they made a hook that
[00:20:02]  makes just makes it easy. And I don't know, does everyone understand what this hook does? Because essentially, I think it confused some people. But all it does is
[00:20:13] , it reruns every time, as if you didn't even have a hook there, except it keeps a stable reference. And by that, I mean, the thing that
[00:20:21]  it returns, doesn't change. So it doesn't trigger downstream changes. So you're kind of safe to have to get rid of the stale closure, like to
[00:20:31]  have it always update on every render, and not worry about the stuff below it, below it, below it rendering. So in a sense, yeah, I mean, it
[00:20:42] 's kind of like the their untrack, if it helps you from a reactive standpoint, it's like their version of untrack. I always find it funny,
[00:20:50]  because reacts versions are always like the opposite of ours. like, like, like, it works, like, exactly opposite something, how is something that always reruns unt
[00:20:59] rack? You're probably asking, but that that is actually the like the the way that you can look at these as like analogous. Now, the reason it was
[00:21:13]  interesting to me wasn't because of what it did, it was because it's called use event. And that's a very specific language. Why do you call it use
[00:21:23]  event? And the answer to that, for me was, you're trying to tell the developer how to use it, you're not saying this is what it does. You
[00:21:33] 're saying, use it for events. Or this indicates it's an event and event in a fairly general sense of the word, not just event handlers, like,
[00:21:45]  like, you know, you register the DOM. But any kind of like, thing where something would call you from the outside, like a set interval or something, and where
[00:21:54]  you're going to kind of like, enter into your reactive system, set some state, that's an event. And I saw that and I was like, compiler hook much
[00:22:03] ? Like, that is why they're doing this. This is a language thing. They're gearing up for compilation. Like, we saw react forget. I was
[00:22:11]  kind of skeptical. I'm like, is this for real? This is telling me 100% it's for real. They are serious about react forget. Because when you start
[00:22:18]  adding these kind of hooks, you start building up. This isn't just a, like a mechanical hook, like use effect. This is like use event. This is an
[00:22:25]  event. So like, yeah, this is this is very much like an intentional language thing. And then like four hours later, our compiler guy, Huxpro,
[00:22:44]  who's been working on the react forgets thing goes, this use event has a deeper meaning to react than yet another nice reviews callback. Otherwise, it wouldn't be
[00:22:53]  worth to introduce a new first class concept. It's a step towards our new automated world. So thank you. Thank you, you know, for confirming that this is
[00:23:03]  all about the compilation. I've actually I've been I've been following Huxpro here recently, and been really getting into the conversation like what's reactivity and stuff
[00:23:14] . I think they're really kind of opening up their mind to kind of look at what that whole problem space is. See, I have a theory here, and I don
[00:23:22] 't know if it's going to hold up, and we'll we'll have to see. But when you start getting into heavy memoize land, which is basically what
[00:23:31]  this react forget is, and kind of actually how svelte works, svelte is still kind of top down, but it's heavily memoized. So there's
[00:23:40]  a ton of similarities in svelte and react forget. So even though it's this kind of still top down run thing, things don't always run. And once
[00:23:54]  you get into a model where things don't always run, and you can say, well, hooks, things don't always run. But the thing is, once you kind
[00:24:00]  of bury that, and it's not the hooks, if you're actually naturally memorizing, the end user no longer has the indication of why or when things no longer run
[00:24:07] . The easiest explanation for that is it's declarative, that it's reactive. In fact, it isn't about, it doesn't matter that it isn't actually
[00:24:18]  using a reactive system like view or solid, like Marco six to degrees along this lines, it's that once you no longer are looking at a pure top down, or at
[00:24:28]  least augmented top down kind of like, you know, with data points to hint it mechanism, you no longer can make sense of it in that way. And it's
[00:24:39]  easier to view it like code that executes when things change, you invert it. It's kind of like the way reactivity works. In fact, Dan explained somewhere in
[00:24:52]  here, I'm probably going to find it find it again. But he was actually explaining effects to someone in here, the way I explain effects and solid, which is
[00:25:01]  not how they look and react. Someone pointed out to me and they're like, they're like, this isn't true. And I'm like, No, I mean
[00:25:07] , technically react doesn't work that way. But he's explaining it to them talking about dependencies of effects, you know, the same way that we talk about in react
[00:25:15] ivity. So I've been saying for a while now that reactivity is a language that it's, it transcends implementation. And the further react approaches memoization, the
[00:25:29]  closer they come to converging with a reactive type mentality. The thing is, it's not necessarily reactive in the classic sense. So they can kind of keep it like
[00:25:45]  that. It's their mentality that they've always had. But I think it's going to it's a bit of a stretch. We'll see. But that's my
[00:25:51]  hunch here. And honestly, that leads right to my next post here. And I think we should get into that. But I'm gonna check out what's going on with
[00:26:02]  chat for just a second. Why is it called use effect? The same thing they tried to ask you not to do is set state inside use effect? Sorry, it
[00:26:09] 's called use event. I said use effect by accident here. I saw solid docs and really press solid provide store ready photo. It's a definitely solve if you want a
[00:26:25]  huge pain point of react. So how do you learn? Yeah, I mean, honestly, the reason solid has a store and has this stuff is I had to like a
[00:26:32]  store before I had a renderer, if that makes sense. Like when I start solid, I wasn't like figuring out rendering techniques really well, I was actually working
[00:26:39]  with proxies, I was like, how can I do reactivity? With plain objects, you know, I knew I'd get into rendering and I did some like
[00:26:47]  string template kind of stuff, kind of really similar to you, actually. But I really focused on having these kind of primitives right from the start, you know, back
[00:26:58]  in, you know, 2000, I guess early 2016. So yeah, I mean, for me, this is just a logical thing. I actually pulled stores further out
[00:27:06]  to kind of help people differentiate them and realize that they're the point to get to, but we're going to cover stores a bit tonight more. And I think that it
[00:27:14] 'll make more sense. Yeah. Yeah. And Nick's talking about this. Yeah. Yeah. He, like, do you agree, Nick, that, that essentially he
[00:27:25]  described effects and react the same way we would describe effects and solid. It's not like actually the way react works. I think they're testing this communication mechanism because people,
[00:27:35]  are like, it makes sense. It's like, it's reactivity makes sense. Hooks are more complicated. They still make sense. I actually have appreciation for
[00:27:44]  hooks when you start thinking about it, like in terms of the patterns they have, but hooks obscured behind a memoizing compiler. I am concerned they stop making sense unless
[00:27:54]  you explain them like reactivity. We actually hit this one brainstorming with Marco because we had a bit of a split, you know, so I love being on a
[00:28:00]  team of three guys in that, in that sense. And because Dylan was like initially really on that, like, well, let's keep it top down mentality. You know
[00:28:07] , I like the V Dom. I like the way that executes. And I'm just like, what are you talking about? Like fine grade stuff all the way,
[00:28:14]  like just do this. Like we, we hit a problem like with a set timeout and we're like, should the inside of the set time out track or not track
[00:28:20] ? And I was like, not track. It's obvious. And Dylan was like, well, no, it should track. It's obvious. And poor Michael's
[00:28:27]  in the middle going, well, I think for this one, it should track, but you know, and he kept on putting him in the middle. And my, my
[00:28:39]  point is eventually realizing where we came to Dylan actually kind of revised and came around a little bit. Cause he was like, he was like, he was like, he was
[00:28:48]  like, and don't get me wrong. Dylan was ultimately the one who convinced me that on a two way binding for Marco. But the thing is we realized when we
[00:28:59]  ran it, like, no matter how much we tried to keep the top down V Dom model, once we added the level of optimization and memorization, it no longer made
[00:29:07]  sense as explanation. We couldn't explain it to someone that it worked that way anymore. And I suspect the React team will find the same. So they're going to start
[00:29:14]  explaining stuff. And it's going to the explanations might start sounding a bit more like solid, even if they don't actually execute that way. So I think that's
[00:29:21]  interesting. Yeah, yeah, yeah, yeah, yeah, yeah, exactly. It's a good way to explain things. That's all I gotta say. I mean
[00:29:39] , it makes my life easier. It makes our life easier because I've been trying to explain people's this stuff that ways and people come at me and they're like,
[00:29:44]  someone described solid as riding your bicycle with the handlebars turned backwards. And I'm like, how do you know you haven't been riding with the handlebars turned backwards this
[00:29:55]  whole time? And I just fixed it for you. If React and the messaging continues to turn this way, it's just going to make it look like that. I
[00:30:08]  think this is a tricky place to be in. But it's, you know, I think, on the other hand, the React team knows where they're going. And
[00:30:18]  I think they will figure out how to ease everyone into it. And that's what this is about. At some point in this thread, someone's like, hey,
[00:30:27]  Dan, you know, thanks for this whole thing. Seems like use event is expanding on the React to the language thing, you know, blah, blah, blah. This
[00:30:33]  is great. After playing with libraries like solid, however, it's nice not to have to worry about any of this stuff. I mean, I'm just paraphrasing
[00:30:38] , but he's basically saying, I've never scaled up solid, so I don't, you know, understand what the trade offs are. But basically, it seems really
[00:30:43]  super great. But that's essentially what they're doing. You know, and I'm going to look more at this. That's essentially what he says. And Dan
[00:30:51]  goes, I agree with you. It would be nice not to worry about it. And our hope is the compiler work will solve this. I think sometimes it comes off like
[00:30:58]  we're locked into our current approach, though. We generally like our program model. If we thought solid was better, we'd move to that. I like this quote for
[00:31:06]  so many reasons. Because not, I mean, some people saw this and they're like, is he kind of giving you guys like a backhanded thing, you know
[00:31:22] ? And I'm like, no, no, no. That's not what he's saying here. He's saying they believe in what they're doing. And if they
[00:31:29]  believe differently, they would have built something different. Like, they're not like second guessing themselves. This has been a long run trajectory. And they know their path.
[00:31:42]  And this is true. Even when they introduced React hooks, they gave zero kind of -- you know, they did a prior art thing for React hooks. You can still find
[00:31:50]  up the document, actually. You know, let's do this right now. I'll show you what I'm talking about. Let's see if I can find the React
[00:31:55]  hooks. What was it? Release announcement. Let's see if we can find it. Or maybe React hooks prior art. Is it prior? Hook synthesize ideas of
[00:32:16]  several different sources. Our old experience in React feature repository. React community experience with render props, including Rand Florence's. Dominic Ganaway's adopt keyword proposal.
[00:32:30]  State variables of the state cells in display script. Reducer components and reason. Secretions in Rx. And algebraic effects in multi-core OCaml.
[00:32:42]  Do you know something that's not on this list? Fine-grained reactivity. And I've been saying this for a while now. Fine-grained react
[00:32:55] ivity looks a hell of a lot like hooks and is what, you know, like what we use in Solid and it was in Knockout and View and Older Svel
[00:33:03] te and, you know, like, that did not influence hooks. While looking identical to it. And the reason is the React team very much believes in what they're
[00:33:20]  doing. They are not going to, like, MobX is in React and had similar things that look like hooks. And again, not even a nod here. They're
[00:33:32]  not going to go this way. They've never liked this way. They still don't like this way. You know, this isn't this. There is no risk
[00:33:42]  here of React absorbing solid space in the ecosystem. They legitimately dislike the approach and think that it's limited in some way. And maybe that's fair, but that's,
[00:34:00]  I mean, you know, I am kind of almost the opposite. I am so confident in this approach. it puts us a bit at odds, but this draws a
[00:34:11]  line here for people because people keep on seeing Solid and they go, oh, oh, React is just going to do that. You know, React is never going to do
[00:34:19]  it. Like this, this, this is, this is so, I, I've been waiting for someone on the React team to actually just say that. He says,
[00:34:27]  if we thought it was better, we'd just move to that. But that's not, that's not what he's saying. What he's saying, he's not
[00:34:32]  saying like, oh, if at a point Solid, you know, shows that it's models, you know, really good. We're going to move to it.
[00:34:37]  No, what he's saying is we're, we're not doing it. And, you know, that's good. I like that React is different and they are going
[00:34:47]  down that approach because they're showing, they're taking that paradigm and taking it as far as they can, as well as they can. And all we can do is,
[00:34:55]  you know, show respect to that, is take the other paradigm and take it as far as it can. Right. You know, I got into this because I kind
[00:35:03]  of felt that fine-grained reactivity was criminally underrepresented and I could blame React because React sort of killed it last time. Like React came out killing libraries like
[00:35:12]  Solid. That's what it came out of. Like the older versions of the predecessors, React basically was like, no, that's not how you do it. This
[00:35:19]  is how you do it. Yet when hooks came out, I was just like, whoa, you guys are, you guys are treading pretty close there. And,
[00:35:30]  you know, that's fine. Maybe they learned something. So, you know, I learned something from React and that's where Solid came out of. And, you know
[00:35:40] , regardless of how I feel about Dan's statement in terms of, and how the React core teams feels about reactivity, they know where they're going and they know what
[00:35:48]  they're doing. So don't bug React about, or don't bug React or Dan about, about Solid. Like they're not going to change. Like ever.
[00:35:57]  If you want to show Dan, as I said, how good this approach is, just let's, let's build some stuff. You know, that's, that's
[00:36:08] , that's my takeaway here. Like, like, it's, I think, I think that that's, that's really the thing here, right? Because this
[00:36:26] , this use event thing, obviously, let me get back here, kind of did trigger more conversations, right? Like, I didn't show this yet, but like
[00:36:36] , if I go back to this thread, you know, where, where they're talking, you know, some people are like, you know, kind of sarcastically
[00:36:43]  like, oh, seems like so much discussion thought time resources company employees money is important to an idea that doesn't even need to exist in libraries like Solid, you know,
[00:36:52]  patch to patches. And I was like, well, someone's going to make a meme out of this, like, use event is just, you know, it's
[00:37:01]  like, use callback and use ref, you know, and sure enough, like 500 likes to use it. This, this is like better than any post I've done
[00:37:11]  myself. This is, this is how you went on Twitter. Right? I mean, some people look at the joke, I think sometimes solid group makes jokes that are
[00:37:24]  kind of a bit too cerebral, like, someone was like down here, they're like Svelte version, you know, like, the joke is that this is nothing
[00:37:34] . It's just a function that returns itself, an identity function. Like, as I mentioned, some people went a little crazy. I'm surprised I didn't get
[00:37:45]  a PR for this one. But it really has no place in the reactive models, and it is invented for this purpose. But I think this, this actually did spawn an
[00:37:57]  interesting conversation. And I'm going to share that with you all here a bit, because it pulled out our man, Sebastian Marc Bage, who I have an incredible amount
[00:38:07]  of respect for. He's the guy who's been building that router over and next we talked about. He's been the visionary behind react for years now. And he
[00:38:17]  basically was curious, I guess, how to remake this using something like solid, right? He want, and he should, we use, he used one of the examples and
[00:38:29] , and, and what he was like, he was trying to show this kind of let create, use callback, create keys, crypto stuff and show like where you
[00:38:42]  have a case where you have, you know, a function that depends on one thing. And then when you call it, you somewhere else needs this. So it has two
[00:38:51]  dependencies, one that's kind of bundled with the function, and one that's like, where you locally use it, like in the, in the fact that use it
[00:38:59] . And he was trying to say, like, this is why we need this pattern. And he's like, I tried to do it and solve it. I think it
[00:39:04] 's something like this. I think you'd write like, signal and he does this whole thing. And he's wondering if there's a more idiomatic way. And
[00:39:15]  I love this thing because I think this is so illustrative here. If you see what he's done here is create a signal. And then he has a render effect that
[00:39:22]  listens to the public key. And then it sets a function. This isn't quite the right syntax. Solid doesn't know if solid has function centers, but he sets
[00:39:28]  a function. So that create keys is a function. And then somewhere else you'd call it like a function that calls function essentially, like you'd have like a double function
[00:39:36]  call. You'd like have a signal with a function in it. And he, he went on and he's like, I think in Svelte, it's like
[00:39:43]  this, which is a little bit better, right? He has it. And then in here, it tracks and it sets it to keys and this. And I looked
[00:39:54]  at this and I'm like, okay, well, we can do better than your example, right? So like if, if this is the equivalent Svelte and if
[00:40:00]  you know Svelte, like this is, this is a derivation. It's you assigning a function to key and it's under a dollar sign. I was like
[00:40:07] , the equivalent to that Svelte code in solid is this. So we've already shrunk it down a bit. It's just literally create keys, create memo,
[00:40:13]  public key, return the function, you know? But then I was like, you know what, Seth? In solid, you wouldn't do any of this. In
[00:40:21]  solid, you'd literally just write a function that calls a signal. And then where you use it, you just call your argument and it automatically can track both dependencies. You
[00:40:36]  don't need to, you don't need to like ever pretty much like memoize a function. Like why are you memoizing a function? You just have two,
[00:40:46]  two data dependencies. So literally have one wrap close over one data dependency, have the other close over the other dependency where you call it. Like you still, in all his
[00:40:56]  examples, he was only showing this part. He wasn't showing this part. You always need this part in these examples. You always need the effect that you call the
[00:41:02]  great keys on. So essentially our answer to his whole thing where he was showing the use callback and all that stuff is literally write a function. So I think there
[00:41:18] 's still parts that are missing in our model from their perspective. And I hope that these kinds of conversations continue because like, as I said, solid version, create keys,
[00:41:33]  pass. It's just literally a callback function. You don't need any create callback. Don't need any dependencies. don't need this. You just literally
[00:41:38]  have function calls a thing compared to the React version. No, sorry. That's the solid version, the React version. Use callback. Like it's the same thing
[00:41:47] , right? It should have been obvious at the beginning. You just erase the use callback and that's how solid works. Yeah, I do have a nice shirt.
[00:41:58]  Check this one out. You guys check that out? Yeah. So like when we joke about, um, Oh, you want to see what he said at the end
[00:42:16] ? It's a fair response. He was like, yeah, that's pretty neat. That only works if you call it inside something that tracks, which again, is what
[00:42:25]  you're doing here. Cause you're calling it in fact and not a sync callback. Sure. You almost want to tag it, especially in that case, which seems
[00:42:33]  like a reasonable answer from where he's sitting until you realize that like literally everything in solid works this way. Do you know what I mean? Like that is the model
[00:42:42] . I kind of joke about it. Cause people talk about like the hook rules and stuff and I'm like solids like fight club. Like we, we only have one rule
[00:42:52] . Um, it's not the same rule as fight club and admittedly, but we have like literally this one rule that will smack you in the face over and over again
[00:43:01]  until you listen to it. But it's not like a bunch of different rules. There's the, you just have to respect. Retaining reactivity. You have
[00:43:10]  to, you have to access values where they're track. That's, that's the rule. Don't destructure. Don't vote. Like it's literally just this
[00:43:17]  one rule. And maybe that's, and if you has that rule too, and Movax, and it just comes with this kind of reactivity and maybe that sucks
[00:43:24] . Maybe the user experiences to conference, but if you, if you're in this world, this kind of thing is a good point, but you like the whole app
[00:43:32] , you're already building this way. This is not even like a thought. It's, it's just literally the model. Um, it's, and it's kind
[00:43:38]  of funny. Cause when I started to Hux Pro about reactivity and he was asked, he asked us, he did this poll and he was like, is reactivity
[00:43:45]  the source of the reaction? And I'm like, no, it has to be both. Like it's a system. Reactivity is a declarative system living in
[00:43:54]  imperative world. So it's, it's kind of like to itself, it's the universe, but we live. It's like, it's like pretending you're on
[00:44:03]  a 2d plane and all you can see is in 2d and that is the world. Um, and that's our declarative reactive system. It has no sense of
[00:44:12]  time. Everything is synchronized. It only has its like its dimensions, which is like state always reflects what it is. Unfortunately, we live in a world, a
[00:44:21]  3d world where we can see that the reactive system is just like a piece of paper on our desk, but essentially in its zone, it has complete domain. It
[00:44:34] 's only when you look at it from an outside of influence that, um, you, you start talking about like these imperative things. Like it is, it is kind of
[00:44:42]  pure in itself. And I guess that's just like my kind of view on it, but I just like you, you enter this paradigm. That's how it works.
[00:44:52]  This kind of comment makes sense from the outside, but if you use solid for a bit, you're just like, yeah, well, I mean, of course it
[00:44:59] 's like, it's, it's akin to like, of course hooks go in a component. I mean, in our case, they don't, but you know what
[00:45:07]  I mean? Does anyone like question react why hooks are in components? So yeah, I mean, yeah, I mean, it's, this is, this is,
[00:45:21]  this is an easy thing to make when you're used to the other patterns, but it is just the one thing, right? Like, so yeah, I mean, that
[00:45:32] , that, that's the conversation here. I thought this was really, really great though, because this, this, you could see this development of this conversation because you
[00:45:43]  can see starting here, thinking reactivity like this, when really most of the time it isn't about creating all these extra signals and synchronization. The beauty of reactivity
[00:45:55]  is once you're in that world, you actually just delete stuff. You just go bye-bye, use callback, like, you know what I mean? You actually
[00:46:03]  subtract, it's not more, it's less. So anyway, okay. So yeah, let's, let's keep on going on unless anyone has any questions about
[00:46:18]  this. I thought this was a great conversation though. This, this whole react reactivity use event thing really kind of highlighted it and the way they changed their language to,
[00:46:28]  you know, talk about effects and stuff. I think it's just grand. I think, I think this is one of those situations where we're just sitting in a
[00:46:37]  really nice spot because the further react explorers this way, the better solid looks. And the, you know, they're kind of validating our approach while saying it's
[00:46:51]  completely different. Like, I think, I think this is just great. Honestly. Yeah. Yeah. I mean, where, where did that expectation come from though?
[00:47:09]  Right. It's, it's create something, right. The funny thing is like before hooks and I've talked about this before. I was sitting there and I was
[00:47:25]  sitting there and I was like, okay, I got my signal. And the most obvious one, I was like, knock out. I'd be like, signal. I
[00:47:34] 'd be like, let's just go like this. Right. And then be like, set read. Right. Let's just do this. Play this game for a
[00:47:51]  second. And be like, okay. So read is going to be like this. And then set is going to be like this. This is the most obvious starting point.
[00:48:06]  Like I didn't, I didn't like this. I use knockout for ages and the fact that it's the same function and like someone accidentally does, you know
[00:48:17] , something like, oh, let's set timeout. signal. Cause I'm like, really think, or how about promise dot resolve. You're like something stupid
[00:48:31]  like this. I mean, obviously like, this is obvious. Don't do this, but this, this bugged me. And I didn't like how it kind of
[00:48:40]  lended to this. Like anytime you pass this around, someone could read and write to it. Right. And then, and then like, I was like, okay
[00:48:55] , well, let's, let's look at what mob X does. And mob X was like, okay, well, this isn't built easy. We go signal dot
[00:49:00]  get and signal dot set. And I was like, okay, this isn't bad. And I was like, uh, well, it's kind of bulky. So
[00:49:13]  maybe what we could do here instead is be like, what if we just did get set. And. There kind of don't like this though very much. So instead I
[00:49:28] 'm going to, I was like, I mean, you could do some cool stuff here. You can go alias, like, and this would be called count. And
[00:49:35]  then. I mean, this isn't too bad, right? This is too much. Like, I'm never going to do that. I'm also just call it
[00:49:43]  like name the variable count and then go count dot get or set. Like, it just wasn't worth it. And then I was like, okay, okay. I'm
[00:49:50]  really clever here. This is where I got to before Hopeless came out. I was like, okay, I got it. I got it. We're going to keep
[00:49:55]  our create signal. Right. And instead, what I'm going to do is read like the first one, like here and write like the second one. do you follow
[00:50:07]  me? Like, uh, let me, let me show you, show the third one. I'm going to go signal, read like this, write like this. This
[00:50:14]  is, this is where I got to write it towards the end. And I was like, see a function is an object. So we can hang stuff off of it.
[00:50:24]  So we can make the read first class. And then we can kind of hide a setter on it with a dot set. And my stored proxy design at the time
[00:50:33] , it was kind of similar. You would read it normally. And then you'd have like a special set property that you could call on it. it. And I
[00:50:42]  was like, almost pulling the trigger, but I'm like, man, this is too, this is too clever. Like, I know that objects are function or sort of
[00:50:51]  functions or objects and people who we use JavaScript too, but trying to teach a beginner, the syntax, like, like this, I think this is really good. It's
[00:51:01]  probably one of the better options, but trying, trying to teach it, a beginner, the syntax. I was like, how do I explain to them? They can
[00:51:08]  do this. Why, why am I teaching them? Like what some people might consider quirks of JavaScript. So I'm sitting here playing with this for like two years.
[00:51:17]  I kid you not. And just being like, you know, like just being like, you know, like not getting anywhere. And then I see the react hook demo and
[00:51:25]  I'm just like, oh my God, the answer is so simple. It's so simple. You know, why, why go through all this pain? You can
[00:51:35]  just name it whatever you want and just go set count, like done. Like that's what I got from react hooks. This, I, we were already using these like
[00:51:48]  primitives and doing all this stuff, literally this, I was just like, this is such this, why didn't I think of this? I'm, I'm just
[00:51:54]  like, yeah. Like, so like, I think there's a bias that comes in from using react, but like, like, to me, at least this is
[00:52:05] , this is just like, it's, it's the obvious solution. If you want that read, write segregation, because even with this, I didn't like it because
[00:52:13]  you still always pass the setter around. And I really liked your directional flow. I used old knockout and old reactive libraries. It was like the butterfly effect. You
[00:52:21] 'd like have some, some data down somewhere and someone would write to it. Like mutable proxies are the worst. Like, because someone can be like, someone
[00:52:29]  can be like, okay, cool. I got a store here and then I'm going to pass it in through my, my div and be like, okay, here
[00:52:36] 's some prop. I'll call it like a, some user. Okay. And then I'm going to go store dot user. And now in my, like, let
[00:52:45] 's call this one user in my user component and then somewhere else further down the line, I'm going to be like, okay, well, actually I want an address
[00:52:55]  and in address, I'm gonna, I'm gonna actually pass in, um, let's call it address, but it doesn't matter, but it's going to be
[00:53:04]  props dot user dot address. And then in this component somewhere, someone's like, well, okay, I'm going to, um, I'm going to, uh
[00:53:16] , store the address locally somewhere. Cause I need to do some work on it. So I'm going to, let me do that. And then, um, and then
[00:53:27]  what, uh, you know, are actually maybe temp address and then, and then they're like, okay, well, temp address, um, street, um,
[00:53:41]  let's, let's, let's change street to, um, mulberry. Do you see what they've done here? They, they, they, they actually updated
[00:53:59]  our store. And I like, this is, this is bad. Like, it doesn't matter if your framework has two-way binding checks. Like if you have mut
[00:54:14] able things, there is no like two-way binding. There's, there's no two-way binding, uh, checks. Like, and sorry, further down here
[00:54:21] , it isn't user dot address. Sorry. We, we passed it here. It's actually crops dot address. You know, they, they, they, you
[00:54:33]  know, maybe they destructured it. Maybe it's actually, yeah, whatever. You, you get my point. Like, yeah, he would knock out in the functions
[00:54:42] . It was like, he was like terribly bad. Like you just, you, you're playing ping pong. Like someone changes something here and then like up five components,
[00:54:50]  three components down, like everything's firing. I, I, I, I was not playing this game. Um, that's fine. People in view seem to like
[00:54:59]  this, but I like Svelte guards against this, but this literally you can override two-way binding because you can always get past any read only level to get to
[00:55:08]  the next level, unless you go and then read only everything on purpose. Like you have to like, or make memos around them, like wrap them in, in like
[00:55:16] , you basically have to use other mechanisms to wrap things that are expensive and more computations. You know, like, cause if, if we wrap this in a crate
[00:55:25]  memo or compute it, then you can't edit it, you know, in the same way, but like, essentially like this just solves the whole thing. Like, like
[00:55:40]  I just really didn't want to do this. Right. And which is the same reason why we didn't talk about it, but there was a third option. Our signals
[00:55:50]  could have done something like, uh, const signal equals create signal zero. And we could have done something like signal dot value, signal dot value equals 10 or something like
[00:56:05]  this. This is just, I mean, beyond the obvious problem is you can't destruct your value. Sure. I mean, we have that problem anyway, you
[00:56:15] 're like, you're opting straight into, to like, I don't know. It just, it's a lot of, I mean, you can make the word
[00:56:22]  value shorter. It's just like, we, at the beginning, we were looking for stuff that was ergonomic. Like, like this is always going to be plus six
[00:56:29]  characters or whatever. Like, I don't know. Ended the mutation problem stuff. I just react hooks are a brilliant API. I've always loved their API.
[00:56:40]  So, um, that's that, that, that, that, that's enough of me probably spilling about that. Let me see if I can catch up with Chad
[00:56:46] . You guys have been going a mile a minute. Yeah, yeah, exactly. Or whatever. Yeah. Yeah. I mean, it's fine. If you want
[00:57:00]  to name it, get count, then go for it. I just, um, what's really cool is like, everything is a function, uh, on the accessor
[00:57:09]  side and solid. Like we did keep that bit of knockout in this. So, um, never got into the whole get thing because like every derived, you, you
[00:57:17] , you, every function would start, but that wasn't a setter would start be calling get like, what's cool is, I mean, I guess you could wrap
[00:57:23]  setters and do it. I feel like the set being really explicit is really a good thing, especially the naming, but like, you know, count, you know
[00:57:32] , count be getting double count, you know, cause like what, what's, what's, what's, what's, uh, what's double count, right?
[00:57:40]  Um, double count, for example, is just count it. Should this be it double count? Like, should we just keep on like, I mean, it's possible
[00:57:49] , you know, and if that works for you, I think people should try it and see if that works for you, but nothing, the beautiful thing of the tuples
[00:57:54]  is you can name stuff, however the hell you want. So like, as I said, just really brilliant API design. So yeah, I, essentially the, the
[00:58:11] , we, we, we tangented pretty hard here, but I, I, I don't even remember where we're, where, how we got here. Honestly,
[00:58:18]  it was just a comment in the chat. Um, I think React has taught us to be a certain way. I'm challenging that. That, that, that's
[00:58:28]  what, that's what we're doing here. We're challenging that. So. Right. That, that's, that's, that's essentially it. It might be
[00:58:37]  good in training materials. Yeah. Um, but yeah, that, that, that's, that's, that's what we're playing here. Okay. Let's keep
[00:58:42]  on going. This week in JavaScript is the longest week in JavaScript, but it's a good one, because I said, this, this is, this is stuff that
[00:58:48]  needs to be said. And to have this kind of acknowledgement, this is like the first time I think Dan's ever publicly used the word solid on Twitter. Um, this
[00:58:55] , this, this is, that was like a other hidden thing. Like, I mean, obviously I've talked to Dan before, you know, like I, we know
[00:59:03]  each other are, um, I had a nice chat with him, uh, a month and a half or so ago, but like the, the, in public,
[00:59:10]  this is a, this is a pretty big acknowledgement for my sense. So even if it sounds like he's like saying, like, we, if we thought this was good
[00:59:17] , we do it. Like, it sounds a bit like that. That's not what's going on here. As I said, um, it's just, it's
[00:59:22]  not, they're setting their ways and they're doing their thing, which is great because it challenges us to think of how we can do good things too. You know,
[00:59:31]  if it wasn't for react, um, I probably never would have thought of doing something like time slicing concurrent rendering. I still don't know if that's something worth
[00:59:40]  doing, but it's a lot of fun making those kinds of demos, you know? So, you know, like there's a lot for everyone to learn all around.
[00:59:49]  So I think, I think we're, I think we're getting, we're getting over that. All right. All right. Let's get into more react. I
[01:00:01]  don't think anyone got my joke. I see. I thought I was being funny here. Uh, Ryan Florence gave a great talk about streaming in remix. Um,
[01:00:11]  and he, and I, I made some joke about we're all on the same page. And like, I was trying to joke about the, like, like that in
[01:00:18]  like solid and Marco we've, we've been on this page the whole time, you know, and remix was on this page and now we're on the same page.
[01:00:26]  Yeah. Okay. Not, not really, not really funny, I suppose. Um, but, um, it's, um, get into streaming. I honestly thought
[01:00:39]  they were not going to, um, I had a bunch of conversations with Ryan Florence and, um, back in January, like he went as far as saying the more experiment
[01:00:49]  with streaming, the initial dog includes resource hints, the more it seems that's only useful when the user has a fast connection, the service flow and better investment can surface.
[01:00:57]  Basically, he said that's like, he didn't believe streaming was a thing. Um, four months later, that's his react thing. And he's explained to
[01:01:05]  people how like the benefits of streaming are. So, um, I'm, I'm glad we're on the same page because it's, it's a lot harder when
[01:01:12]  you like, this is something you kind of face. We talk a lot about performance. We look into these things on the stream and it's hard to kind of go out
[01:01:20]  there and like, talk about it. And then like, you know, remit guys are like, oh, it's not worth it. We have partial hydration,
[01:01:25]  same kind of thing. And then you're like, no, it is. We can show you. And it's like, you get person with 5,000 followers against
[01:01:31]  person with like a hundred, like three people with a hundred thousand followers. You get squashed. It doesn't matter what you say. Um, like the message that carries
[01:01:41]  is whatever they say. So now that we're on the same page and with the same message that makes, that makes me happy because now I don't have to fight like
[01:01:50]  reeducating everyone afterwards. They're like, but Ryan said, this is like, okay, I'll try and debunk it in the most politically nice way because
[01:02:00]  there, there is some big gaps here. And I, I, I, you know, I don't want to discredit anyone, but now we don't have to
[01:02:06]  worry about it. Remix is on board with streaming. Well, well, mostly, um, uh, to be fair, Ryan says he's like, not completely on
[01:02:15]  board. He's like, I still think it's better to use Redis and skip streaming. So, um, there it is. There's some skepticism there
[01:02:23] , but I mean, the talk was really great and I'm glad that's what people will hear. They won't hear him to this. It's the only 16 likes
[01:02:29] , not like 500. Um, but yeah, let's look at the talk. There we go. 736. This is what people will walk away with. This is
[01:02:38]  the important part. So yes, streaming is great. And, um, what, one thing that is buried here and the reason I want to bring this up, um
[01:02:46] , is that there's a secondary benefit here. If you're paying attention, streaming unblocks server rendering remix has like, maybe I should use a scale drop for a
[01:02:59]  second here, but the way remix has been working to date is pretend like you have a nested route. Right. And I hope you guys know what that that is
[01:03:10]  now, right? It's a nested route is like, it's like you have a page and then there's maybe a section there. And then there is a nest
[01:03:20] ed route one here, which is I'm going to do here, different color. And then we'll put nested route two in here, different color again. Okay.
[01:03:30]  One, two, three. And the thing is the way remix works is you get a request and essentially when you're, when you're serving that request, remix goes
[01:03:44] , okay, what's the route? So it figures out, say all three levels and goes, um, I'm going to run, uh, I mean, so the
[01:03:52]  first thing, let's get some black text here. The first thing is they go, like, get the request and go run loaders a, b, c.
[01:04:03]  Um, and they can run these in parallel, which is pretty sweet because they know the route information right at the beginning. And then they basically go like promise all. So
[01:04:13]  it's more like promise all. You know, run these loaders, right? Okay. And then after that, they're like, okay, render two string.
[01:04:36]  That's how this works in remix. But if you want to do streaming, you can't do this. This is blocking. You have to do all of this before you
[01:04:48]  do this. So the way to get streaming to work is a slightly different series of things. It starts the same. And again, this is how it works in solid
[01:04:58]  and how it works in Marco is you don't promise all it. You, I mean, I don't, I guess Marco doesn't have a nested router, but
[01:05:05]  like, you can do the same thing. Run loaders, a, b, c. So this is how it works in solid. But then while those are running,
[01:05:12]  you go, okay, render, render, a, and then we'll make it two, two, a, render, b. And let's make a three,
[01:05:31]  I know, a two, b, render, c. But they can't render everything because there's some suspense boundaries and stuff, you know, here. And then
[01:05:39]  maybe, you know, you're, you're in here. And there's actually, actually, yeah, now I regret my numbering. It should be three,
[01:05:55]  a, and four, a, sorry, um, just like two, a, okay. What, what actually happens in here is that there's secretly other, let
[01:06:10] 's say two, b, which is like suspense. In not all cases, sometimes suspense will block the child from coming in, but we're, we're just going to
[01:06:21]  pretend in this case that it doesn't. It's kind of like, like this. And this suspense and I guess I should add the fan to it. Okay,
[01:06:37]  cool. So what happens when, when you're working on, um, kind of like solid or like a streaming solution is you, you run the loaders, then you
[01:06:48]  render a hit the suspense. It's fine. You know, maybe that blocks you, but maybe that continues render B render C, but you can't resolve the suspenses
[01:06:56] . Right. But once you get to the end of the list here, once you get down to five here, like, so let's say these bees like are,
[01:07:04]  I'm going to maybe kind of make them a different color to show that they, they don't run yet. That's not a good enough color. Um, I need
[01:07:11]  something lighter. Um, let's make something up. Let's make a, uh, like, uh, a, no, I'm going to change the whole lot.
[01:07:19]  Damn it. I can't do it. Okay. No winning here. Um, essentially we skip all the suspenses the first time we get to five and then we
[01:07:30]  stream the response and stream the shell. So at this point, when we stream the shell, we actually have maybe the outside of this stuff and we just don't, we
[01:07:42]  don't have some, some content inside and then as a and B and C finish and they can finish independently, we then fulfill these suspenses and tag them on the
[01:07:55]  end. So you end up with an, you know, you might end up with, uh, sorry, let's get into this. You might end up with, um
[01:08:03] , six a, which is resolved since a, and you know, and so on. Um, I don't know why I called it six a, but like seven
[01:08:19]  resolves since C and eight. And the reason I'm showing you all this is not because, you know, the, the cool streaming effect and the fact that everything
[01:08:37]  loads early, it's not, it's not because of like this table here, it's because, um, look at all the work you did ahead of time while
[01:08:51]  you were waiting for the loaders here. In the end, you rendered most, maybe most of the page, who knows, maybe not, but you may have rendered most
[01:09:04]  of the page and you literally just have to fill in the gaps in some cases. Like sometimes, as I told you these wraps, so it's more complicated, but
[01:09:11]  it's in a sense, it is possible here that by unblocking the rendering on the server, you're actually not only because they're streaming soon, you're actually
[01:09:21]  improving, um, like the, what concurrency or whatever, like the ability to use the CPU on, on your server as well. Like ultimately, I guess maybe switching
[01:09:30]  context might be more expensive on the overall CPU, but you're actually shortening the, the whole, the total time of your response because like you're instead of like
[01:09:38] , wait for this rate to this, you're actually able to parallelize the rendering cost while the loaders are running and then finish the stuff that happens later. And like
[01:09:46] , if a finishes before B, then, you know, you can finish this one up. You're, you're, you're actually like shrinking the whole bar when you
[01:09:53]  go, when you go this way. So this is actually streaming, or at least it doesn't even have to be streaming. Even if you wait to send the whole page
[01:09:59]  at the end, you're actually improving your server rendering by using non-blocking patterns. So yeah, I mean, this, this is kind of my perspective on
[01:10:08]  here. So even if you want to be skeptical about streaming itself, it actually, I think makes a better server rendering performance story. Um, when you render this way and
[01:10:18]  obviously solids, async and streaming both work this way. Um, very concerned with this thing. So I think for me, the exciting part about it wasn't that Rem
[01:10:26] ix got streaming other than the fact that the social impact is good, you know, and people will actually like embrace it more, but that they are getting rid of this
[01:10:33]  like enforced waterfall in order to do it, they're actually going to improve their rendering. So I think, I think this is actually a really good thing for Remix as
[01:10:41]  well. So, um, yeah, uh, yeah, it's, it's kind of one of those kind of hidden things perhaps, but I, I, I,
[01:10:50]  I'm just, I'm just glad the conversation's here. No more fighting with people trying to explain the benefits. No, you know, it's, it's
[01:10:58]  now going to be pretty clear to everyone, I think. And this chapter is, is over for now. Okay. And I think that brings us up to the end of
[01:11:08]  this week in JavaScript. If you're still with me, you know, good on you. All right. Okay, cool. So time to switch gears, everyone.
[01:11:31]  And let's talk about some stuff of solid. I'm actually really excited about this. Um, I'm going to throw a banner up really quickly. Um, cause
[01:11:41]  I can, let's do, um, throw this one up here. So let's talk solid 1.4. Um, solid 1.4 is might be the longest
[01:11:54]  I've taken to release another minor version of solid. Um, since I started 1.3 came out like the beginning of January and it's been like, what, four
[01:12:04]  or five months, it feels like it's been, it's been a while. And part of it is I've been working on solid start. I've been trying
[01:12:10]  to find patterns. I've done a lot of experimentation over this time period. Um, and it's funny enough, usually what ends up leading to a release isn't that
[01:12:18]  it's actually, you know, recognizing that you need to like add some feature or thing that would be backwards breaking essentially. And you're like, okay, it's time
[01:12:27]  to kind of do all this stuff. Um, for us, it's often the compiler that did it and we got a bunch of issues that kind of came up on
[01:12:34]  the GitHub, um, a bunch of bugs, you know, and not a time, but I figured, you know, let's just, oh, actually this one's
[01:12:41] , this one's solving 1.4 too. It's at that milestone. Um, essentially 1.4 is going to solve every bug here. Um, and as I
[01:12:50]  mentioned before, there's basically three areas. Um, most of the stuff here is there, there's some actual legit bugs like this error handling one, which, you
[01:13:01]  know, is kind of interesting to fix, but we, we had a bunch of issues around inconsistent and handling, um, in the compiler and especially around things like classes,
[01:13:13]  um, and attributes. And yeah, I want to show you, show you all something. This, this, this first one, I, I, what I'm
[01:13:20]  excited most about 1.4 is I think it's an, a quality of life improvement. Um, this bug is very easy to reproduce. It's, if people set
[01:13:32]  class equals undefined and solid, your class name would literally be undefined because we would compile it for this. And I mean, if you don't know what
[01:13:41]  I'm talking about, um, you can kind of see this. If you, if you, if you create an element, um, like, uh, let's
[01:13:54]  make a div, okay. And then you go L dot class name equals, um, something doesn't matter. And let's, um, I think, let's see
[01:14:09]  if this works. Let's console L. I think we'll get a visual. Yeah. See, you see class something, right? Now, if you go L
[01:14:19]  dot class name equals empty string. This is kind of the fun part about the DOM. You get class with an empty string, unsurprising. If you go L dot
[01:14:32]  class name null, you get literally the string null. And if you go L dot class name, Undefined. Well, you get classical undefined. This
[01:14:49]  is, this is kind of, uh, I'm going to change my view here. So, so I'm not blocking the screen. This is kind of frustrating. Um
[01:14:59] , cause you're like, how do you get rid of the stupid class? Right. And the reason we use class name is class name is more performant. Right
[01:15:19] . That's why you use it. Even though this is a property, this, this just isn't helping us here. And for a lot of things, Undef
[01:15:31] ined is fine, but it's called using the platform. Thank you. Yeah. That's, that's exactly what it's called. It's called using the platform.
[01:15:37]  Well, I, I, I, I looked at, um, Inferno for, for some, for some sage advice, as I often do. Inferno
[01:15:45] , when I, when I want to know how to solve a problem in a performant way, I looked Inferno. Um, I feel like there are spiritual,
[01:15:52]  uh, Godfather, um, different approach, um, different kind of view of VDOM and stuff, but, you know, I have incredible respect for what
[01:16:03] , what, um, the work Dom and, um, God, why is his name? Sample, um, has have been doing, um, over the years.
[01:16:12]  And the, the answer to the solution is there's only one way to, to, to fix this problem, unfortunately. Only one way. L dot remove attribute class
[01:16:33] . So now class has to be special cased so that it sets with a class name and removes as a, so it sets the property and removes with the, um,
[01:16:45]  attribute. So it's, it's because I can't use the attribute helper for it because I, because I don't want to take the performance hit. Class getting
[01:16:52]  set is a, is a thing people animate with. So performance is important, but we're moving it. We have to switch it. So we actually, it works dual
[01:17:00]  mode, half prop, half attribute. So moving forward, solid is going to have a class name helper that does exactly that. Yeah. Yeah. Yeah. This is
[01:17:11]  great, isn't it? So, um, I'll show you, I'll show you the class name helper. I'll just pull up Dom expressions here for a second
[01:17:17] . Um, um, actually. Oh yeah. It's on main cause I already released it, but essentially this is, this is, this is our new, our
[01:17:30]  new thing, unfortunately. Class name value, double equal. So we course null or, or undefined because I'm false for class probably actually you don't want
[01:17:43] , but if someone did, yeah, that's an interesting question, isn't it? Hmm. Anyway, generally speaking, um, but yeah, for, for other things
[01:17:55]  like attributes, you actually need to support false, technically speaking, um, because there are, I don't get me, sorry, there's Boolean attributes and then there
[01:18:03] 's non Boolean Boolean attributes. Um, but yeah, node remove attribute, otherwise set the class name. So now our, we have to have one extra helper
[01:18:12] , unfortunately it's, it's, it's one that can get inlined, but just wanted to kind of show the kind of fun you have when you're working on
[01:18:17]  a framework. Right. But this isn't a JSX problem. This is like literally the Dom, right? We actually don't use class name in our syntax. We
[01:18:30]  use class, um, for people like if, if view is handling this properly, for example, they're doing exactly this, or they're just using the attribute and
[01:18:38]  not going for the performance. Like this is, this has nothing to do with the templating. It's, it's, it's literally how the Dom works. Um
[01:18:47] , like, yeah, yeah, like it's, as I said, like in solid, our actual syntax for, for doing this, um, is what div,
[01:19:04]  um, class equals something, right? You don't need to use the kind of silly JSX stuff, right? If I get rid of this, this, we'll
[01:19:15]  see if I get rid of this one, the first one will still log properly. Yeah. Just, you just do this side note for anyone's skeptical of JSX.
[01:19:22]  This is why I love JSX. Look what I just did. That's why JSX is sweet. You can literally just like, be like, oh, oh,
[01:19:30]  I need a div. I'm just gonna write some JSX. You're like, you don't need to know template or anything like it. Just like, here
[01:19:36] 's, here's a real Dom element. Bam. Right. Um, but okay. So yeah, this, this, this, this one was kind of, uh
[01:19:47] , this was kind of a pain. I mean, it is what it is. And I think I, I deduce when you fix something in solid, you gotta fix
[01:19:58]  it in three places. You gotta fix it in the compiler. Um, and, and obviously like the class, the, the, the, I need to fix it
[01:20:06] . Sorry. Like, so the compiler generates stuff and, and they have this helper. And then I also have to fix spreads and what it's called the sign. So
[01:20:15]  yeah, sorry. Assign prop. So spreads are suck. Cause this is like when you have to basically river back to V Dom. So yeah, this yeah.
[01:20:24]  Prop class or class name call the class name helper. Yeah. So yeah, this one's not too bad, but like we had to hit it a couple of places side
[01:20:34]  note on this release guys, big news deprecating class name. We're not removing it, but typescript will no longer have a class main type. I'm going
[01:20:43]  to having to merge the props, especially between spreads and not spreads and the complexity that comes with that. I do as much as I like giving people flexibility. One thing
[01:20:53]  that we're doing in 1.4, um, is gearing towards eventual removal. We need a single way to set a single attribute because we want to get the most
[01:21:01]  of our compiler. And if we have a runtime mechanism, like a spread and a compile timer thing, and they can't see each other having multiple ways to set the
[01:21:10]  same attribute creates a huge amount of complexity. Um, because they can trample each other without being known to each other. So, um, I, I, I did
[01:21:21]  originally to be flexible and be like, Oh, you can just take your react code. Um, in the future, you will have to change all those class names back to
[01:21:29]  class. Um, unfortunately, obviously 1.4, we're not removing it yet. Um, but we're going to, we're going to start gently guiding people
[01:21:37]  with TypeScript types and dele, uh, uh, what do you call it? Um, deprecation warnings and kind of things. Yeah. Yeah. Yeah. Yeah
[01:21:55] . Pretty much. And HTML4, both of those are like reactisms that don't need to exist. They're not JSX, they're react and, um
[01:22:02] , we just don't need them. Yeah. So, I mean, I know it sucks. You guys have seen me on stream renaming classes to class name and,
[01:22:12]  and like doing that whole dance, um, you know, back and forth, you know, going between react. It is a bit of pain. This is, this is
[01:22:21]  just worthwhile pain. We'll cut load from the framework and this lets us optimize things. It also might mean a future where class and classless become the same thing.
[01:22:29]  And we just have one super class, um, mechanism that makes sense. You know, I, I think, I think, I think I don't want to promise that
[01:22:37]  just yet, but essentially we just, we were just inviting edge cases when you, you have two ways to do the same thing and they can like be done simultaneously between a
[01:22:46]  compiler and runtime. We want to get the most out of our compiler. So, you know, yeah, I'm not going to lie. I like use Coffee Script
[01:22:58]  for years and like, I, I never use ESLint. This is something we need to improve. Um, uh, some people like make jokes that it's cause
[01:23:06]  I know what I'm doing. No, I've just, I've just never gone to tooling. Coffee Script had crap tooling. So I'm like the worst person people
[01:23:12]  like Evan, you makes the best tools in the world. Um, and like, that's just not me. I I'm sorry. Like he, he probably cat
[01:23:23] ers to the devs in a way that they understand. I'm like a mechanics guy. I've just never, that's never been the thing. You know?
[01:23:32]  Yeah. Know why react pollutes the global namespace. They're literally like global is us. Other JSX frameworks are a bit nicer. So you, you have to
[01:23:42]  make sure your TS config wire stuff for solid. Otherwise react just will come. You just like, where's it? You know, like, no react is behind every
[01:23:50]  corner. Anyway. Yeah. So I just want to mention some of this ones. I want to start with the bugs because these, I think this compiler stuff is important,
[01:24:04]  but it's also the least exciting stuff spread null or undefined props. It's another similar kind of issue. Um, did you guys know here things you learn
[01:24:14]  while working on a framework that you never thought of? Let's, let's, let's, let's, let's do this one. You can do this.
[01:24:27]  Why? You know what you can do? Can you do this? You can. Uh, why, why, why, why, why? But you can, so solids
[01:24:41] , uh, and these are the kind of weird edge cases. The reason why you want to kind of reduce and just get as close to the platform and sense it as you
[01:24:48]  can underneath. And when I say close to platform, I don't mean web components. Those, those are something else, but I just mean like, like, yeah
[01:24:56] , this, this, this, this is kind of fun. Can we do this one? Let's, let's see. Can we, can we do false too?
[01:25:02]  Can we like literally spread anything? Can I just write a number? I don't even know if this is working anymore. Yeah. Okay. Here you go. Here
[01:25:22] 's some JavaScript. Okay. I'm not worried about numbers because if people are spreading numbers, I mean, that's on them, but essentially, um, we, we
[01:25:31] , we wanted to be able to, uh, solve that problem. And I mean, on the surface, the, these ones were actually mostly fine. You just need a
[01:25:41]  null check when you iterate, but, um, the compiler actually, um, actually, um, and actually I'm going to go to solid now for this one,
[01:25:52]  the compiler for, uh, for components actually uses a helper that we have in solid, um, under solid source, render components, something called merge props. And let's
[01:26:11]  see if I can get to our next branch. Um, it wasn't too bad, but, um, yeah, uh, it's fine. We, we just
[01:26:27]  went in and do now like these hidden null checks inside that I, this one isn't actually that interesting. It's just, I, I, I thought the solution is
[01:26:36]  not interesting. I think the problem is a little bit interesting though. Like, um, in any case itself, I, I just wanted to show that one just because it
[01:26:43]  was like, uh, you know, these kind of things, you know, and the way they work with the compiler and it's like, made me want to finally
[01:26:51]  cut a release. Um, this last issue actually has to do with stores and we're going to talk about stores in a minute, but, um, I think before we
[01:26:58]  get to stores, I want to talk about the other big part part of this release and that is resources. A lot of thought because of my work console start has gone
[01:27:09]  into resources and I'm going to just go to the next branch here and see if I can pull up the change log. I got two really cool features. I want to
[01:27:16]  show you about resources tonight. And, um, the first one is something that I call resource deferred streaming. Um, essentially we, we've been hitting this problem
[01:27:30] . We introduced streaming in 1.3 and people have been playing with it and it's really cool, but sometimes the problem, the challenge of streaming is once you start the
[01:27:39]  response, you have to send the headers and the status code and you, you no longer get to say like, it's a four or four, it's an error
[01:27:46] . So sometimes there's some data fetching that you want to do before you start the stream. You're just like, okay, it's fine. You're like,
[01:27:53]  I'm streaming, you know, I mean, but like, I want to know the user's at least logged in first, right? I don't have to fetch all
[01:27:59]  the data maybe, but you know, but I need to at least do one thing. And there's a solution to that, right? You can always just do the request
[01:28:06]  before you call the render function. In fact, we saw it right here, right? This doesn't have to be rendered string. This can be rendered a stream here
[01:28:15] . We can just run some stuff. I'm not saying the loaders, but we can always like block it and then start as we mentioned before, maybe not the best
[01:28:22]  idea. Um, but it's something you can do. The thing is when you build a meta framework, like solid start, and you're trying to like wrap all these
[01:28:30]  things into like nicer bundles, you don't want people really like messing like they can, but you don't want like to be like, oh, the answer to your
[01:28:38]  problem for this very common thing is to just go in and change the root file, you know, where we pre-configured everything for you. No, you don
[01:28:46] 't want that to be the pattern. And, and like, essentially, I was like, I was like, how do I solve this? And, you know, I
[01:28:56]  was thinking, okay, maybe I can hold suspense boundaries and stuff. But the answer is actually, you know, much simpler. And I came up with this a couple months
[01:29:02]  ago, but like, it's been taking me forever to get here. Like, what if we just say, hey, I just want this resource to wait. So
[01:29:10]  I'm going to pull up an example here. And I use this example a lot previously, but you know, it's not hacker news. Um, I'm going to
[01:29:17]  pull up, I've got solid here in the repo. Um, let's, let's make it a little bigger so you guys can all see. And I've got
[01:29:23]  this, uh, this, this example that I like to use, and I'm going to, um, build the streaming version of this example. And it's the
[01:29:35] , it's the example, SSR example I have inside the solid repo. Um, and I think it serves on 8080, but I didn't start the server.
[01:29:42]  Sorry about that. You can run these learner commands. I know learner is dead, but whatever, or someone picked it up, but essentially the, the, these examples
[01:29:53]  show async streaming, all the different stuff. So, okay. I'm gonna go to the profile page. Okay. And the way this profile page works is it loads
[01:30:03]  a John profile and then it loads the information about John. So we actually, we have console logs, um, in this data fetch and I can show it here.
[01:30:14]  I'll pull up the code example. Let's, let's give myself a little bit more window room here. No, apparently not. This is why I hate pulling up
[01:30:22]  the window. Um, we have this kind of like data loading function where we create two resources and we console logging the first one load users. And then the other one,
[01:30:30]  we console log load info. And essentially they feed into each other. They're cascading. Like you could do this across loaders or whatever, but essentially there
[01:30:39] 's a user and that user is the source for the second resource. The first resource has no source and just loads and the second one feeds in. So initially when it runs
[01:30:46] , this is undefined, so it doesn't run it. So it actually cascades. It loads the user and then presumably, you know, uses that information
[01:30:52]  to load this more information about the user. That's essentially what we're simulating here in this example. And, um, what happens is when we load our page,
[01:31:03]  we see that there's this double loader cascade where it goes loading and then loading, right. And obviously if I had better placeholders and stuff, we could do
[01:31:08]  better things that don't cause layout shifts. But what I wanted to show is you can kind of see the first day of loads and the second, then the second later data
[01:31:15]  loads. In fact, you know what, let's make this more visual because we're on stream and you guys might not see that. Let's, uh, up this
[01:31:22]  to a second each, um, to make it less realistic per se, but let's, let's do, let's do this to be visual. Okay. So I
[01:31:33] 'm going to try it again. Loading, loading, loading. Okay. And what you'll see here is those two calls are called on the server and in our
[01:31:41]  console here, they're not called. Sure. If we leave and we come back, we're going to see one and two, you're seeing an async transition there
[01:31:50] , a suspense, um, which is why it held, but, um, essentially we'll talk about those more later. One, two. Okay. Now, what if
[01:32:01]  that first user information is important enough that you don't want to kind of like go through that loading state and you say like, there's no point showing the page, or
[01:32:08]  maybe you need to do off or something, right? All I'm saying is take your resource and just go defer stream and we, we, so just taking our existing
[01:32:24]  code, build it again. And now when we do it, we don't see that first load. It does take a longer to use the load because it takes a
[01:32:36]  second. But what you're seeing here is the page actually loads with the first section and then only streams the remainder. Um, and in fact, if we wanted to,
[01:32:48]  we could probably defer stream true whole thing. this was what we were into and essentially now this is, I mean, I'm going to see it loaded. This is
[01:33:09]  the same as async rendering in solid. It's streaming, but we, we have control at a resource level, um, essentially this loading behavior. So, and what
[01:33:20] 's cool about it is if I go back to the original version, cut back what you'll see if I, if we look at the, uh, network capital kind
[01:33:40]  of pull it up and view this, you'll see header content of the page. You see some scripts for hydration setting up. We'll see some initialization scripts.
[01:33:54]  This is how it knows to wait. Like if you don't have these scripts, solid will like client render, like it kind of falls back that way. And then you
[01:34:01] 'll see the initial part of the content of the page, the, which is the, um, nav right here. And then you'll see a placeholder loading for the
[01:34:09]  first one. And then if you go down further, you'll see this hidden section, which where we swap in the John's thing in this section could be about you with
[01:34:16]  the second loading indicator and then some scripts that actually set the data and move the, the, this hidden content into place. And then further down, we'll see the
[01:34:29] , the second section with all this information, the thing that passes the serialized data. And then this, the one that is calling the same function again, that moves
[01:34:41]  that hidden content into place so that we get our final results. And what's cool about this is if we add the, the first stream, you know, like I just
[01:34:55]  did, now we're just, now we're just, uh, we're, we're going to wait for the first one and not the second one. So we
[01:35:04]  do this one. So see now on that and stream out the second one, this is resource level two. The reason they're holding is each suspense boundary reads from a separate
[01:35:13]  resource. So like it goes ping, ping, but if they both listen to one or something like it, it's based on the resource, not on the suspense boundary.
[01:35:22]  Um, what you'll see here is now our initialization script has a bit more stuff in it. It actually has the first data. And if we look in here
[01:35:29] , the first flush actually has John's profile in with the loader. And now we only have a single section for doing the second replacement and, and moving it up.
[01:35:41]  And as you can imagine, if we go all the way and do this, and we reload the page, no, no loading indicator and everything is serialized in the
[01:36:02]  header. Everything renders in place and there's no additional script tags. So this is basically async rendering. It's all this, this work is kind of like,
[01:36:13]  um, getting us to a point where async and streaming are essentially the same thing um they already kind of were but um this work helped uh consolidate this um because when
[01:36:24]  i first made this improvement i wasn't actually compressing it back up you it would still move into place even though it would wait to flush it it would still move into place
[01:36:34]  but now we actually um put it in so it basically um you you don't do extra work in the browser if you don't need to essentially is the way this works
[01:36:46]  um so yeah question yeah the thing is this doesn't block anything it um it's it's kind of like like um mike's calendar the reason i showed you guys this whole
[01:37:01]  thing was these all run in parallel and they finish as they finish all we're doing here is instead of streaming the response shell here essentially instead of doing this we just took
[01:37:11]  this line number five and we moved it under six essentially like it's it's all non-blocking if we sell one resource to defer the stream it still loads and does
[01:37:25]  all its normal suspensing it doesn't affect the way the execution happens on the server it doesn't make it any more blocking um we're not using like async awaiting going
[01:37:34]  you can't pass um instead we're just we're just holding the queue at the front it's like the the bouncer who's like you know letting you in in
[01:37:44]  there's like okay now you go now you go we're just like okay we're gonna hold it a little longer if you wait until render string there'll be no parallel
[01:37:57]  request well well no i mean the thing is how should i how should i put it um none of this is blocking so like like if even if i move it all the
[01:38:21]  way to the bottom uh yes the server doesn't get or doesn't send it to the client but it it doesn't change the fact that we were preemptively running it
[01:38:34] 's like this is even if we render at the end here it is different than this because this literally didn't do any rendering until all the data was loading this was rendering
[01:38:44]  while we were loading it just chose not to send it to the end and the benefit of that obviously is if if you do need to know like you don't want this page
[01:38:52]  to stream like you do need to for some reason i said you're trying to avoid these patterns but if you do need to like load all the data um because you haven't
[01:38:59]  sent the response yet you do have the ability to do a redirect or a 404. see the way solid start handles this with streaming is if you've already flushed
[01:39:09]  the outer shell and you get an error or redirect well we just go okay server stops where it is sends it through the stream and the client actually handles the redirect or the error
[01:39:21]  um the way it would once it's hydrated and because it is hydrated because while you're streaming the outer like the layers that send in can start hydrating before the stream's
[01:39:29]  finished so you have an interactive page while the stream's coming in so so um yeah i mean it's kind of an interesting um scenario here because uh essentially if you embrace
[01:39:43]  streaming completely um the out of order streaming you can handle these cases in the client because like if if you it's it's kind of it is a hybrid like you can always
[01:39:52]  do a redirector or handle an error in the client um and the server can error and throw the errors across the network um so like that but in some cases you
[01:40:03]  know maybe just like the first request you just know like i always have to check if the person's logged in you can hold the stream for you know maybe it's in red
[01:40:13] is maybe it's like a six or ten millisecond hit you can you can you can hold the stream and not send it right away in fact you could hold rendering and not
[01:40:21]  send it right away but in our case you don't have to make that sacrifice you can literally just go out to redis async keep on rendering and then you know
[01:40:31]  when redis goes oh yeah yeah the person is logged in then you can just you know send whatever you have at that point so it is non-blocking there is a
[01:40:40]  huge there is a difference between these two is what i'm trying to get get at okay so so i think that's a really cool feature um again it's super easy
[01:40:50]  to use because essentially like all you have to do just go like the furthest you know just from the furthest stream i i still playing around with the names i don't
[01:40:58]  know i was saying wait before but it's not actually wait um so yeah i think that's wait i was trying to wait before we can you know bike shed api
[01:41:11]  is all we want but you kind of get get the gist of it here it's essentially you just mark any resource any suspense boundary that depends on that resource um obviously can
[01:41:21] 't flush and if if you wait for that resource and the suspense boundary happens to be able to flush at that time you can skip doing the um kind of load in um
[01:41:32]  fallback state in the client that's that's just it's a smooth transition from it momenting this was actually kind of fun because it wasn't too hard um i'm
[01:41:43]  gonna see if i can pull pull up um our our dom expressions again here because uh it's and did it to do maybe yeah okay because essentially um i'm just going
[01:42:00]  to show this here server.js we already have this mechanism for writing resources we have to serialize them we have to send those data you saw there's the initials call
[01:42:11]  and then when i set the data um so the the answer was actually really really really really stupidly simple as long as we keep track if we first flushed or not essentially
[01:42:22]  i made a variable for it up here first first flush as long as we keep track that we we've flushed um all we have to do is when we um where
[01:42:30]  is it here write a resource we check and go if it's set that you know to defer the stream or wait or whatever and it's not flushed yet push the promise
[01:42:41]  into an array see because generally we have to listen to this promise anyways because when it's completed we have to serialize the data or serialize the error so we already have
[01:42:49]  the promise every um resource registers itself while suspense is running so that we can serialize it so at that point i was just like okay if you know that it has the
[01:42:58]  defer stream option push into a list and then when you call pipe later on here when we pass back like the pipe apis we just go promise settle all blocking resources and basically
[01:43:08]  done um like this took me like 20 minutes to do the basic implementation of um because essentially you just you just hold it on those promises um and you know there you go
[01:43:23]  yeah i think this is a super powerful feature um it just and it's very easy api to use and it lets you kind of scale like there's always this concern you
[01:43:34]  streaming because the status that you can't do all the use cases and you have to like kind of fight with it with an api like this where you don't have
[01:43:40]  to think about it um the end user can just choose and um i think i'm really excited about this one the other really cool thing we did with resources was um another kind
[01:43:57]  of tricky pattern um that that i've that i've been seeing and that pattern is i'm actually going to pull up a code sandbox to show to show this demo i
[01:44:10]  think um and i think the demo that i want to show is called still resource yeah okay i'm going to fork this so that i don't mess with my copy of
[01:44:26]  it but we've we've been kind of um we've been kind of playing around a bit with suspense and resources here and yeah let me picture i mean i'm going to
[01:44:43]  strip everything out at first to kind of make it easier um but essentially picture you have a button where when you click on it it cycles through a bunch of users and i
[01:44:57] 'm actually going to pull out even these suspense boundaries and i'm going to i'll leave some of this stuff in but it probably won't make a ton of sense to everyone
[01:45:13]  okay i'm going to pull out these suspense boundaries and show the most basic basic case um i pulled up too much all right it's because i need to replace this with
[01:45:30]  a fragment my bad so let's do this okay so if you have solid and i'm just using a resource it could be signal whatever and essentially if you if you we
[01:45:46] 've got this cascading thing where we have a details and we have a uh profile timeline let's call it uh these two things and they listen one listens to the looks
[01:45:59]  the user and the other thing looks their list of posts okay and essentially um the po the the timeline the posts is just like a for loop now i've got like a
[01:46:12]  mock api here as well and it's it's just creating a few resources and a way of triggering them there's a set which changes the id so to speak which triggers
[01:46:23]  the next resource and this git id is just a matter of like saying what the next resource in is in is in this and let me see i don't actually even expose
[01:46:34]  the uh the the id um it's kind of wrapped in here it doesn't really matter a ton but what actually you know what it does matter i'm gonna i'm gonna
[01:46:45]  expose it here let's call it um id and we'll make s i'm doing wrong um oh it's an array oh okay yeah cool this is like not uh
[01:47:06]  maybe so essentially just made a small tweak to this and actually not even on the latest am i it doesn't really matter i guess this stuff is still good okay okay yep
[01:47:35]  this is actually probably a mistake trying to get the new version code sandbox is probably gonna be like i don't know what version this is okay okay so if you don't have
[01:47:48]  any suspense and you load this thing what ends up happening is you see this kind of you have no loading indicator and then this loads and then this loads right you kind of see
[01:47:57]  this thing and then um we're gonna actually grab resource dot s and i'm gonna stick it in here um just as like an extra indicator of where we're at i
[01:48:09] 'm gonna add like a span maybe and because the original example didn't have this let's let's let's go what is it uh resource dot id i think i called
[01:48:25]  it okay so id zero right and then when i click next you're gonna see id one actually let's let's do something like h three okay there we go this isn
[01:48:42] 't the prettiest but you should serve so you see zero i click next it immediately changes to one then this loads then this loads this is what happens when you have no suspense
[01:48:53]  or transitions or anything on a page so initially loads one two three waterfall this this this one two three okay now um the thing is some people you could handle loading state yourself
[01:49:14]  but one really nice cool thing you can do is add suspense so um it's funny i'm actually gonna i'm too lazy i'm actually gonna pull the the original um version
[01:49:29]  back so that i can just copy the suspense stuff over again so i don't have to worry about it um so let's let's grab it so a lot of people
[01:49:39]  get this far because they're they're working on on uh solid and they're like okay cool i i need suspense so they might add one suspense boundary around this thing and they
[01:49:49] 're like okay sweet so you get this like loading and then this happens and when you go to the next page you get loading and this happens but it's cool you see the
[01:49:59]  number and the loading happens the same time right here we go welcome to suspense our problems have been solved this this is this is what you get when you use suspense and pre
[01:50:09] act and when you use it in view okay sweet suspense is awesome no this is kind of garbage i mean it's okay but this is not great like the first thing and
[01:50:21]  you is you might be like well i don't actually care about these details i want to actually defer this a bit i mean this this loading states better now i know this stuff
[01:50:33] 's loading but you know maybe i don't need to wait for everything maybe i'm okay like getting the the top level stuff and this can load later so then you add
[01:50:45]  cool thing is you can just add a second suspense boundary so you can isolate it with suspense okay so let's i'm gonna shrink this so that we can get more visibility on
[01:50:58]  here on the code let's let's add our second suspense boundary around here and now we're cooking okay so sweet now that's a little better loads and loads i mean
[01:51:11]  you pretend it's not just a header pretend you have content so like you actually see the you don't have to wait and this is very much like we were talking about with
[01:51:19]  the streaming apis like maybe you actually this is so important that you actually wait on the server and only stream the second part or whatever right and when you click next well
[01:51:29]  the same thing happens as you get around and as it's really jarring because it's like what it is this might be slightly better but it's also kind of worse because
[01:51:44]  the other one at least you just loaded the whole thing at once so you're kind of like oh like maybe if this stuff's like below the fold or lower down you
[01:51:52]  don't mind this kind of thing like pretend this is a long post and these are the comments like it's okay but this is still really jarring navigation but it is improved
[01:52:02]  over our original nothing version because our nothing version was one two three like you saw this number update and then this then this updated and this updated so like this would show like
[01:52:15]  two um when it was still showing the old version you know i mean like you'd go next and you see three and then it would be showing two the thing from two and
[01:52:24]  then that will load and that look like it was this really awkward thing where you weren't seeing consistent state now at least since we had a suspense it's consistent we can see
[01:52:34]  that it's one and we're going to see the stuff for two or whatever it gets in but yeah jarring jarring so um we have we have a solution to
[01:52:44]  that problem and that solution is transitions and transitions are great because essentially um they allow us to not fall back to that skeleton state right so when you first load you don't have
[01:53:04]  anything so you're like okay cool i'm loading but then when you go to the next one it kind of tells you it's loading and like you can use gray out
[01:53:11]  or whatever and this the styling is bad because i i changed it in such a way that it's part of the layout shift like maybe maybe we should we actually want to move
[01:53:19]  this loading indicator into our header or something just so it doesn't do that as badly let let's do this so here we go so yeah now instead of showing the fall
[01:53:36] back when we press the button we still see zero but we see it's loading and then it's consistent so this we this isn't this is kind of like back to when
[01:53:49]  we had the single suspense boundary um where you know we waited then we showed and the thing is this is less jarring than falling back to the skeletons for most people okay
[01:54:02]  but this still might not be preferable because yeah sure initial loading we can handle placeholders but you might be like you know what this stuff just isn't very important i
[01:54:16]  don't want to to wait for it like i want this first we already that's where we split the suspense i don't really care about this stuff it can be out of
[01:54:28]  date i just need a way of indicating it so react to something called create deferred value but i was like i it was a weird api we had like compare like
[01:54:36]  stuff and i didn't like it so i was like what if you there was a way that you could listen to the latest value of of a route or sort of a resource
[01:54:49]  without it triggering suspense what could you do with that well there's a lot of things like there's a lot of things that the first time they load that's all you
[01:55:02]  care like you like if you if you're wiring observable into this into like a resource and it has like a bunch of like steps that shoot you don't you you only
[01:55:11]  really need the skeleton skits to state the first time you don't want to like fall back to it so even if we're like forgetting about transitions for a second using using
[01:55:21]  um something which doesn't trigger suspense might be valuable in fact latest actually when it realizes it's never had a value it does trigger suspense but if it if it's ever
[01:55:33]  had a value then it goes okay i'll just show you the latest value instead so when you load the page here with latest what you're seeing is still the double suspense
[01:55:44]  triggering but when you go to the next page i'm actually going to comment this out for a second because i'm going to explain that when you go to the next page watch
[01:55:55]  it it loads holding this and then as soon as george loads it actually updates the number and george but it keeps this in the past because we don't care about
[01:56:08]  that and then eventually shows it so let's watch it again loading see this so these two change together so it does wait to show the tab change until the data is loaded like
[01:56:19]  it finishes the outer suspense but in here it never tracks the inner suspense so it thinks it's done and then this updates when latest does and it's completely independent of suspense
[01:56:29]  bang so you're like uh but i mean the only problem with that is it's you don't know this is out of date like what if this takes a while like you
[01:56:38]  don't know it's out of dates but what this is actually really cool trick you know when the resource is loading and because it gets held under suspense the loading state won't
[01:56:48]  show until um or sorry under transition the loading state won't show until the transition is done so we can actually gray this out here as we navigate once it once it's
[01:56:57]  stale when it's consistent we're fine but the second that this loads and this is out of date will make this a different color slightly gray i don't know if you
[01:57:05]  guys can see this on stream but see so yeah maybe it took a bit to get get up to this example but what i'm trying to show off here and there's
[01:57:23]  a lot of applications of being able to grab this latest value um once you have it without turning suspense but essentially we have now a third mode essentially um i guess it's fourth
[01:57:32]  if you count no suspense but you have the ability to um you know not use suspense obviously and show everything kind of torn you have the ability to use suspense and force everything into
[01:57:44]  placeholder state you can use transitions to stop falling back to placeholders after the fact and now with the use of latest you have the ability to selectively opt things out
[01:57:57]  of um out of suspense so you can have partial tearing if it makes sense for your application and as this is probably a bit of an edge case but there's other cases where
[01:58:08]  you're just like i only care about suspense the first time and i don't want to worry about it like like like the thing about this is you can remove this transition
[01:58:16]  here now essentially with this this with this move i believe i mean we can find out and oh right yeah we can't see it because the outer resource okay let's pretend we
[01:58:30]  really didn't care let's this change this to latest now neither of them are tracking they initially have the loading state when i click next i mean i'm opting into
[01:58:43]  tearing for both of them we're not we we aren't falling back to suspense even though we don't have a transition i'm not saying this is the best ui um
[01:58:55]  like this you see what happens now when we click next this updates immediately again like the original example so there is this tearing um but my point is there is now a mechanism
[01:59:07]  for this well whether you you know this is probably one that you know only certain people are going to find a use for but the fact that it exists is a very powerful third
[01:59:18]  mode okay so that's sort of the conversation on reserves i think this stuff's super powerful both between the the streaming holding apis and yes i i think this is the
[01:59:32]  might be one of the first ssr specific ones on one of the like reactive primitives um we do have some specific uh components um assets and no hydration that have kind
[01:59:45]  of ssrware but in terms of uh uh like a specific um piece it's mostly because our primitives are actually fairly simplistic if you think about they don't have
[01:59:55]  very many options um create resource might have the most options um but it's super powerful because people wrap it when people make like our solid query wrapper they use resources under the
[02:00:05]  hood and they get the ability to opt into these these abilities themselves um quite easily um you know they can add their caching layer do all that kind of stuff and still have
[02:00:15]  the ability to kind of control it like some people are like oh we should have like a turn suspense on and off um kind of toggle on the resource and i'm like
[02:00:23]  no no it's not about the fetching it's about the reading you don't want to show inconsistency like like latest if you have never loaded a value latest will
[02:00:38]  still trigger suspense that first time if you really never ever want to trigger suspense well just give the resource initial value um resources have an initial value field if you set the initial
[02:00:49]  value then it'll then it'll go it'll satisfy that the resource will be like oh okay i have initial value um i know that i don't need to um you know
[02:01:00]  suspend that first time so um you know this is a very powerful versatile api okay hopefully that makes sense there hasn't been much questions or conversation about this this part of
[02:01:12]  the demonstration so um it's been pretty quiet the last few minutes but um let's move on to the to the next one here um and that next one is um we'll
[02:01:27]  talk about stores um i'm gonna go into here wait a second sorry i just like come to the company develop it to start joetai hmm that's that's jason
[02:01:42]  miller uh creator of preact i wonder what he's working on okay um let's go to next and look at our changelog again a couple things i've
[02:01:58]  been doing with stores i'm actually this might be the best feature of the whole release maybe i've been holding the thing you know what i almost don't want to ruin it
[02:02:08]  i'm going to go i want to go straight to code sandbox and and show you um how awesome it is sorry i actually know what i got ahead of myself i didn't
[02:02:18]  actually show you guys how i implemented that resource thing sorry it takes it take me two seconds because once i realized that i could use loading for the lazy state the implementation for
[02:02:28]  this is so simple um you know sometimes the hard problem is actually finding the like figuring out what the solution should be rather than the problem check this out latest is a get
[02:02:39] ter that if it's ever been if it hasn't been resolved before called read which is like our like our normal accessor like on the resource like the expensive one that triggers
[02:02:51]  suspense otherwise if there's an error throw an error otherwise just return the value and what value is is the underlying signal that's under the resource like at the basically there's
[02:03:04]  a signal that drives the resource it's internal storage i just expose expose the internal storage instead of wrapping it in our um like read thing that triggers suspense so like this this one
[02:03:16]  also was surprisingly simple it was just a matter of wrapping writing this getter um to to to get it to work anyway sorry um let's let's let's let's
[02:03:27]  let's talk stores um so i'm gonna i'm gonna pull up a demo you guys have probably seen before solid simple to do's and so i very forked it but
[02:03:38]  i'm going to do this again from scratch and we are going to fork it again i had like so many copies of these now okay solid simple to do's okay so
[02:03:50]  this is a simple to do example it's not even to do mvc although it's very similar it has like the local storage synchronization and we're going to uh
[02:04:00]  bump this up in fact i think we can bump this all the way up really matter okay so what is this example well we have our local storage store which it doesn't
[02:04:22]  really matter for the case of this but essentially it just creates a store and then it has a to-dos list and a title and we you know do some operations here
[02:04:34]  when we add a to do okay uh you can do some operations like change update the to-do remove the to-do from the list etc okay nothing too crazy here but
[02:04:50]  the thing is there's there's there's always this like big shift when you go between like the signal version and the the store version i mean if you've been to
[02:05:04]  solidjs.com and use the tutorials you know what i'm talking about there's there's that that tutorial where we introduce stores for the first time somewhere near the end and
[02:05:13]  we're like i i actually bother showing what nest reactivity but let's look at a great store because you start with a signal and your signal was to do's set to
[02:05:22]  do's here's the array and then you have to do like all these immutable operations to kind of do the operations so you know i mean this is basically the same
[02:05:32]  example right tada the point of this exercise if i remember correctly is every time you change this it's triggering and the reason it's triggering is because we're re-cl
[02:05:52] oning the whole item you can solve it see it's funny this tutorial a isn't telling you to use nested reactivity because it's like a a good thing that
[02:06:01]  because it's like a solution we provide it's just showing like the the natural way to solve this is by nesting signals so you don't recreate full objects but the the
[02:06:12]  problem is when you go okay screw this i want to use the built like the good solution and you switch it to go solve it and use a store suddenly it becomes store
[02:06:21]  set store which has a to do's object on it and everything's been kind of pushed down and now you your apis and all this stuff and now you have a store
[02:06:30]  thing so even though it works the same and it solves our problem you know you you kind of feel invested in it like yes this won't trigger again when you're using
[02:06:39]  the store because it's using nested reactivity now the thing is you know this this is all fine and it works and there's a good reason for it reactivity is
[02:06:51]  based on property access and you know if you don't track it you can't run it but this has been bugging me because what i really want to do here is
[02:07:03]  i kind of want to you know i'm going to pull create signal in in here but what what i want to do is i want to you know like sure this store is
[02:07:13]  kind of cool and i made everything distorting and for a while i thought this is how people would use solid you know what actually i'm going to get rid of this local
[02:07:20]  storage thing because it's just it's just noise what but what i kind of want to do here is i actually this pulling everything in store doesn't really feel like idiot
[02:07:37]  um idiomatic solid anymore it feels more like we should have like you know a new title and you know people using react um are are kind of more accustomed to you know making
[02:07:50]  everything these separate things when i created the original story api um i was it was during and signal api but but most important story api it was during when react
[02:08:04]  cell classes and i thought people would want to use plain objects the way they use um like state state and set state in react class components and that's why it used to be
[02:08:14]  called create state in fact which is even more confusing with it being different than you state but essentially um sorry i imported it from the wrong place that's essentially um i thought
[02:08:27]  people would just put everything in an object like i just did here but the truth matters that's not really what you want to do it feels like this should actually be its own
[02:08:35]  thing the only reason i put this in was because it kind of felt like well if i already had a store might as well just put everything in the store right because like
[02:08:46]  it didn't feel like it's natural upgrade but we can we can change new title to to to be like this right and and it's kind of more explicit too it's
[02:08:57]  a set state you can just go like set new title to this right like i'm actually this is this is actually reducing the code a little bit i mean sure this one this
[02:09:06]  one might not reduce the code but you remove that one line and okay well i'm i'm like the guy who's like cheating everything here but and replaces it with set
[02:09:19]  new title so i mean arguably this is a little bit worse but i think everywhere else is fine okay yeah so now this should work and now thank you code sandbox the only thing
[02:09:33]  i'm not using the playground is because i'm using experimental versions of experimental but beta versions of solid okay yeah i'm not doing this right because i'm not reading from
[02:09:42]  the store in the right place i missed this one um but essentially you know unsurprisingly like this but the the problem is this you know store to do's what i really
[02:09:59]  want is to just go create to do's right like think about how much nicer this would be if i could just go to use set to do's right um because then
[02:10:16]  all this garbage goes away you don't like set on the object you're just like okay i want to just set the new to do's you know i could just do that
[02:10:24]  maybe in fact no i mean that's not bad i mean maybe or even just do like you know me and my single letters but maybe just pass in the previous state like
[02:10:37]  this kind of deal like whatever suits your suture your your style and i'm sorry it's set to do's this this isn't any more readable for the matter and
[02:10:53]  instead of like bad i just kind of want to just do that and i don't want to like get rid of the string paths i just want to kind of just this
[02:11:06]  that's here we can use the t here and get all rid of all these we kind of just want to be able to oh that compresses a lot so nice um it
[02:11:21] 's kind of like it's nicer because you can say what this thing is you're like these are just to do's and you're setting the to do's there's no
[02:11:27]  like set state and dot this and having all this intervene stuff and you want to be able to type here and have it just work um and the thing is this has never
[02:11:38]  worked in solid before unfortunately because of this property access thing and i i had enough of it so um coming with solid 1.4 we finally have top level arrays um in stores
[02:11:53]  which i think is a huge um boon for teaching and explaining because remember that poor tutorial that we were looking at where you went from signal to store well now you literally
[02:12:07]  just change you keep the variables the same you just change this from create signal to create store and um like especially if you're using you were using the functional form um you you
[02:12:23]  might even be able to keep most of the same code yeah so this one's funny because i'm making a big deal out of it the reason this didn't work before was
[02:12:34]  because of this sucker right here and this isn't reactive and i i think i need to explain a bit about how stores work to understand the the problem here um but yeah
[02:12:57]  this one isn't reactive um and there is a solution to this problem but i didn't really want to um and it's a little bit tricky because there's this two
[02:13:11]  there's two problems like because you can conceptually look in this and go well if this is who cares if it's not reactive if this is a for loop it's going
[02:13:19]  to access each key um so shouldn't it just track the keys and it should track the length too so if the length changes or any of the keys change then it should update
[02:13:30]  so this is why i finally like conceptually made sense the only reason that it wasn't um working was because i'm uh i'm so big on performance it would be
[02:13:48]  incredibly think about it if you change an array you have to diff it or reconcile it there's no escaping that reality um because you need to like i mean there are some
[02:13:59]  ways but they're they're they're complicated but generally speaking it's the one place where diffing exists in svelte or solid or whatever right i mean i guess technically
[02:14:09]  there's a couple other smaller places i shouldn't include cells in that because still actually does this dirty check thing but okay like but generally like this is the guarantee place for
[02:14:18]  most frameworks where they still do diffing and the thing is if you know that any change array is always going to change the array you there's no point tracking every key separately
[02:14:29]  so if you ever look um at solid and look at the map array implementation well in fact we can look at it right now we have it in front of us map array
[02:14:40]  which is our underlying function underneath four it sets some stuff up and then returns a function which isn't that important uh which is our memo which is our thing where it reads the
[02:14:53]  list right and then the first thing it does is call on track and why does it call on track because i don't want to track every single index and and and you
[02:15:04]  know if your list is 10 000 items long i don't want to track 10 000 indexes and check all those each you change or move one item in the list i'm
[02:15:15]  going to reconcile the whole thing anyways like i mean i realize that might seem inefficient but the reconciliation code has to be there anyways because of like arbitrary list dumps like you
[02:15:28]  might think you think well if you just swap an item you could just swap it in the dom and like be fully reactive but it goes out the window when like people start like
[02:15:37]  like random sorting jumping stuff at you you know especially with batch weight like you could you could do a random sort as a series of individual moves but applying it in a batch where
[02:15:48]  order matters like the complexity there of keeping that in check and applying it simultaneously um is no less complicated than diffing okay so you know i i i work on benchmarks that
[02:16:05]  do crazy stuff like that spams like snapshots like dbmon or um uibench and yeah it was just like just diff right sometimes diffing is the is
[02:16:14]  the right solution you know people over critically are the vdom they shouldn't be like they're there there's a time and a place hey ryan some people catching in now
[02:16:28]  right so what so the the trick here is i untrack everything so it didn't work because i only want to track the list this one thing and you're like
[02:16:40]  well how does that work well it comes down to how the way the stores work and um well can we save this no i don't want to save image i'll just save
[02:16:49]  this to my computer export save to disk um what do i call this one um parallel okay cool let's save that okay now we're just going to clear this and start
[02:17:05]  over again it's because okay when you've got a proxy let's say and i'm going to draw proxy as a node okay you've got proxy you can pretend this is
[02:17:13]  like um i guess we want something that has a list so this is going to be our store and then our store is going to have a few users three users in our
[02:17:36]  list um it doesn't really matter what these are honestly and our users are going to have some properties do this i mean it looks like a reactive graph but it's actually
[02:17:57]  not exactly um so our user has some properties okay now the thing is the store itself doesn't track it's the property axis so um i let's make this index zero index
[02:18:14]  one index two first name and last name okay right but what i'm trying to get at here is is that essentially when when we have this kind of like setup you
[02:18:53]  can access the you can access the property obviously and each one of these will need a a signal underneath it somewhere and then you know assuming this is an object we wrap it in
[02:19:08]  another proxy and it's just ducks all the way down essentially um until well this one first name and last name are primitive values so you can't wrap them right um so
[02:19:21]  they're just strings but essentially each one of these holds the signals for its its children essentially right based on what key they're at so this top level store has three signals this
[02:19:37]  one each of these has two additional signals potentially in in solid we actually create the signals lazily only if you're listening but which which is an important fact here because
[02:19:52]  i was trying with proxies to figure out how i could have them be as super super performant essentially um and it was a tricky it was a tricky move and what
[02:20:07]  i realized with my little trick of only listening is it's possible to not have a signal um like only have the signal for the array and not for the others now as
[02:20:22]  you can understand there's a problem here for with with um generally speaking and so solid stores have always had this is how do you trigger yourself essentially right because i i told
[02:20:38]  you that this has three children on it and now we're saying that there's potentially another signal for for for yourself and what the what we did with solid is we did
[02:20:49]  it in two ways whenever you access um any property um so so let's let's call data access whenever you are yeah state access store access every access a property we would we
[02:21:07] 'd essentially you you have the the proxy and you have the key that's the way that it works so you would go track property and then what i would do is i
[02:21:20]  would actually walk into this and if this has a self which not everything did essentially um track properties self does that make sense that on the other hand when so when you write
[02:21:43]  when you write access or i guess write essentially usually you just essentially like you're you'd say i'm writing to this property so i'm like replacing index zero you generally would
[02:22:03]  just set property signal however i said that if it was an array i would also set itself but this this is basically how how how we did this um this this approach um
[02:22:17]  and we only basically only if it existed because we here when i say track property it's like it's actually and create if not existing and yeah this this this this is
[02:22:40]  basically was the the whole um i guess this one create yeah so essentially if you wrote to something and sort of set self i should say if array set self it was actually
[02:23:05]  two things it's actually if array and if you want to create a new property and for new property or new delete property essentially on objects two we would trigger it if it
[02:23:21]  was a new or um deleted property because if you iterate over objects you basically had no way of knowing um if if uh yeah you basically no way of knowing if if something
[02:23:38]  new was added because yeah you sure if it's an object you you track and walk over the keys but if someone adds a different key like let's say when added middle name
[02:23:46]  no there's you you never track middle name so you would never know and you never iterate so um i made it that whenever a new or delete happened we actually triggered the the
[02:23:55]  the self which if you saw during this the track when you accessed zero it actually tracks this one and the self of this one so essentially it would overlap um so as so
[02:24:08]  writing a new um writing to a new property to to this user would actually trigger this which would actually cause the the the like the array of the top level object to run
[02:24:25]  and this works pretty good and this is what we were doing in solid for the longest time but um the top level one could never play this game because it could there was no
[02:24:36]  way for it ever to trigger itself that that was basically the the whole problem because you just pass it in and there's no there's no self trigger um and i think i
[02:24:47]  kind of didn't want there to be because i was like oh that's weird because like sure i could expose it but then like someone like would have to know how to
[02:24:56]  do it and then i realized recently that i was just being really dumb because the truth of matters the only reason we hit a problem is because of the optimization if someone just goes
[02:25:05]  right so for loop they're going to hit all of these in the length and they're going to track them it's going to work the only reason you need to track
[02:25:13]  self here is because i untrack all these accesses so yeah i i realized i was being dumb so but there's a there's a problem here the top level arrays
[02:25:25]  are really cool but the the problem and you you may have seen this in solid before um so not many people have seen this before but if i go const uh store set
[02:25:38]  store and i go um create store um let's go to do this because that's that's the game today and put something in um title i um um what's what
[02:26:05] 's the other one um done so i'm going to import this if i went into this right and and then made effect essentially console.log um store and then we
[02:26:41] 're going to import that and then we're going to import 0.done let's say we just care that's time and then i import that import um you guys are like
[02:26:55]  where's the render in the reactive route um yeah sorry about that uh i actually probably should be adding that i should update it new thing in solid uh uh 1.4 is
[02:27:08]  create effects aren't i i i i batched them to the micro task queue top level because i thought it made sense but no longer they'll just run uh immediately like
[02:27:15]  a create root would it's more consistent so that's another changing coming in one from four but what i was getting at here is that um if if okay so why is this
[02:27:26]  not yeah let's just uh let's just grab our our example and pull it into like a new playground let's move this move this up here this is just my lazy
[02:27:52]  way of of um that was a prettier format document of um getting a route and i i didn't need to do this obviously okay so what am i doing wrong because this
[02:28:11]  is strangely weird that we're not getting it printing at least once is it is it is it not it's interesting i'm like this is like you've been going for a
[02:28:29]  while and you're just like oh see i'm already used to top level arrays i didn't even see what i was doing probably that might have been it no that's
[02:28:39]  not it what am i doing wrong you're right i forgot to import render oh man import render yes the funny thing is yeah thank you yeah thank you you guys in the
[02:29:02]  chat are quicker than me yes right but what i what i wanted to show everyone was that if i uh set because i didn't i guess i didn't need the component
[02:29:17]  because i need to set a time out for this anyways if i set time out um to a second and then set store and went to dues one um added something here title
[02:29:41]  two or something okay when i wanted to show is this kind of sucks it's we're only listening to one or sorry we're only listening to zero and when we
[02:30:00]  set one it's the new property rule so this this method works most of the time but i was kind of over subscribing and i was also didn't like the fact that i
[02:30:23]  i couldn't expose the stuff so i figured it's funny there was a discussion on discord and it realized and i realized there's actually really really really simple solution to all
[02:30:31]  my problems which is that we were already doing this double thing but what if we just change the rules a bit what if we we always set self okay but beamerican
[02:30:59]  only creates it here we put the condition here if if we're doing iteration um um if if something special essentially not you don't always track it and that's if something
[02:31:22]  special it turns out we we can basically only choose to track self or create the self if we're doing iteration okay so let me let me go into to to the store
[02:31:42]  implementation show you what i'm talking about essentially let's go here own keys tracks all um own keys essentially creates this let's see is tracks off called anywhere else where's tracks
[02:32:01]  off called flexi let me just want i think there might be a second place track self two places own keys which you trigger when you go like um object dot keys or
[02:32:16]  you know that kind of thing can contract self right and the other place that can track self um essentially is i added a new symbol um to the proxy that if you call
[02:32:31]  dollar sign track it calls track self and what this means is we now have this special property that and some people ask for this too i think it's kind of powerful is that
[02:32:42]  if you track it it it it changes whenever any properties on it shall change so essentially it triggers um basically if you track it if you change first name it triggers this or
[02:32:57]  if you change last name it triggers this and essentially what i what i what i did here was for normal iteration i don't have to worry about it because that people will either
[02:33:12]  hit the keys specifically they'll call length so if someone for loops are over um just like a normal for loop they're going to sure they hit the specific keys and you
[02:33:22] 'll be like well what if they add one they're not going to know if there's a new one but they listen to length so if length changes then it will trigger basically
[02:33:29]  all the normal iteration without my optimization will work for in um the thing i had to handle was objects so object dot keys has a special track self and the other thing i
[02:33:40]  had to do was in arrays helpers which purposely untrack i just had to add this one extra access here that goes oh just check if the array has a track property
[02:33:53]  if it does then we're going to track it that that and it's a small thing and it means that anyone else who does these kind of optimal like untracked
[02:34:03]  arrays which basically people who write for control loops which we have for an index and i think there's a keyed in solid permanence they just gotta do this and i think
[02:34:12]  there's lots of other applications perhaps for this kind of track um symbol but between these two now um essentially our example here in the playground if i took this example now and
[02:34:29]  copied it to an environment where we have the latest solid works it only console logs once we're smart enough to know that this is only listening to this key and we didn't
[02:34:52]  touch that key however if we do a for loop as you saw in my previous example um it still works so we're able to identify when you're doing iteration tracking versus
[02:35:05]  non-iteration tracking and keep perfectly fine-green updates when you're not tracking iteration so this is the hidden part which is really cool i don't know how to advertise
[02:35:17]  it so yes we get top level arrays um in solid but even you know it actually comes out of our ability to do even finer grain tracking um and be able to identify
[02:35:29]  the difference between iterating over reactive state or stores rather um compared to just accessing it no but splice will tr i actually splice might trigger length but even if it
[02:35:54]  doesn't treat relates you're you're hitting the the index as long as the index changes um you're you're you're still fine like we like obviously in my four
[02:36:05]  helper i'm purposely triggering the the the track so the it's going to work but in a normal situation where you're not doing that you splice is changing the the index
[02:36:16]  right so so so technically speaking splice isn't isn't going to be a problem um so yeah this is this is this is cool as i said this is an improvement
[02:36:29]  in a sense people like why didn't you do this already but what's really cool about solids proxy approach is it doesn't have specialized types for i'm someone asked if we
[02:36:37]  support weak maps and all that stuff no we don't honestly the problem with those are they're mutable um they're basically mutable apis and i wasn't like
[02:36:49]  our apis are uh read write segregated so like if someone puts a set in a store like now something set store needs to know like like what does it mean to set like
[02:37:02]  if you get to us if you've got to a store if you got to a map and you try like what what do you call it do you call add does putting an
[02:37:08]  index on it do something do you set a key like it would need special logic the way we're doing it doesn't make sense for those to go inside our um our imm
[02:37:16] utable version the mutable version is an interesting question but essentially um yeah i mean maybe solid should have always done this from the the get-go but um i think this
[02:37:26]  is a a really nice kind of addition and i mean to prove my point again let's just get rid of this um now because it works top level and we should oh
[02:37:40]  we should be able to do this if i change this to dues um did i miss one you know it's the same day it works top level too um yeah i mean maybe
[02:37:55]  obviously we should have always done it but this is still like just really nice improvement um okay so there's there is i'm often really critical on the mutable side but
[02:38:13]  um i am throwing mutable a bit of a bone so to speak in the next release um there's actually more store work going on here and um it's related to
[02:38:25]  the issue i pulled up on github earlier i although um let's see here we talked about we talked about deferred streaming talked about top level arrays talked about stale
[02:38:35]  resource reads um yeah so i've got a couple things up let's let's talk create mutable for a second um mutables need batching okay this is an oversight
[02:38:49]  of my point part because i never used create mutable um like ever ever i i don't see a reason for it for the most part i created it so that like you
[02:39:03]  know do you want to use create mutable for have you ever seen the xstate solid integration sometimes there are apis out there which don't let you get in there they
[02:39:14] 're just like we handle stuff ourselves and i'm like um i want to make you reactive so i'll sneak create mutable in there and be like what if i proxy your
[02:39:26]  internal state and then you don't even know you're dealing with a proxy and now i've i can intercept it and that's why i did it i i basically my
[02:39:34]  first xstate solid example was basically hijacking their internal state by wrapping it in create mutable and actually has no idea it's dealing with immutable and solids like basically able
[02:39:47]  to listen to it and then reconcile the changes or whatever and essentially ta-da we have fine-grained state machines something you haven't really seen ever anywhere um at
[02:40:00]  least in javascript but um i mean okay i don't know that for certain but if you look at all the other xstate stuff even the stuff with reactive libraries like
[02:40:08]  salt and view they don't do that um either the view could because create mutable is like they're uh reactive so i don't have to do that but we have
[02:40:17]  reconcile which is kind of our super power here um but what it meant was this this some weird stuff started happening because solo doesn't batch by default so like you'd like pop
[02:40:32]  and uh like what the hell's going on the list is getting bigger um like i mean is this one actually doing push nodes sorry this is push someone actually changed this example
[02:40:53]  okay my bad but um essentially we're having this problem i i'm i want to i want it one of the ones that actually is this pop yeah it doesn't work essentially
[02:41:07]  the the the the the problem was that solid doesn't batch and when you're doing mutable you're doing a bunch of like our set state function batches so like
[02:41:18]  if you do a bunch of changes in it it all kind of works together but create beautiful you're doing like line by line by line by line by line you can get in
[02:41:24]  a weird state where you're like halfway done moving something or and it would trigger the array and then like it would see the wrong thing and it would try and like insert the
[02:41:33]  same dom node in two locations or like weird stuff like that like it's keyed and then like essentially just terrible stuff would happen and we we i was kind of pressed
[02:41:45]  with this problem i'm like okay i have to fix this but the problem is i don't want to have like special array types because the the solution to the problem is when
[02:41:53]  you have um push or pop or these array methods you know if you had a weak set or something like if you if you have some sort of mutable array methods the
[02:42:05]  proxy doesn't know what to do with it do do i want to make custom wrappers for everything and bloat the library size i want to deal with all this stuff no
[02:42:12]  i i i like proxies because they're simple and i didn't want to deal with any of this stuff luckily we we actually figured out a really smart solution to this
[02:42:21]  problem um which is kind of cool um if you if you just i hope you understand the problem that the problem is like you can literally like be mid doing something you like
[02:42:31]  pop something off it was airing is essentially the thing i don't think we see the error here yeah here's the error yeah here's the error the reason it's not
[02:42:38]  working is it's telling you can't find reading name of undefined so what's happening is you it pops when when you when you run the pop operation against a proxy
[02:42:50]  what yeah let this this serves more um more explanation i'm sorry if you create a proxy you've ever created a proxy before you have const p equals new proxy let's
[02:43:02]  proxy an array and let's intercept gets and we target and whatever the property is okay so we're not going to do anything special here we're just going to return target property
[02:43:17]  as if we were never here you're supposed to use the reflection api but whatever this works too and but what we're going to do is we're going to console
[02:43:26]  log what property we hit okay so here we go we got a proxy okay now when you go key.pop you get two console logs you get the pop event and you get
[02:43:40]  the length okay and actually i think to be more explicit i'll show you what because the read isn't that important the the the set is more important so what's cool
[02:43:54]  about proxies is even though you're calling pop it's intercept everything so um so i think it's it's a return true to say that i handle it and then
[02:44:06]  console log set property is that right yeah get pop is not the best example um what's another operation we got to put some numbers in the array too let's see is
[02:44:30]  this better pop isn't bad because pop just reduces a list but let's try something like on let's start something like shift here we go shift is a good one look
[02:44:51]  at this is part of why i tell people that using mutable proxies is proxies have take you take a hit when you access them and if you sometimes people
[02:45:03]  people kind of talk about about like oh you're you're always cloning arrays that sucks right you know when you're using immutable stuff but look what happens when we
[02:45:11]  we shift how many times we hit the proxy now times this by like 10 000 you know like in a benchmark uh it's it's faster to not mutate um anyway uh
[02:45:25]  get shift so it needs to get it off the proxy first of all then get the length then get zero and get one one and then set zero presumably with the value from
[02:45:38]  one get two set one with the value from two you know it just shifts them all up you can see get set it's that gets okay get set and then finally set the
[02:45:49]  length at the end to shorten the array the problem was without batching this in solid what happens is you you get here and then you set it's actually these will all
[02:46:05]  work fine there might be some duplicates so maybe that's a problem when you get to the end you set two here so you you you basically move four into three yeah maybe
[02:46:15]  this isn't the one i'm missing oh do you know i'm missing sorry guys i keep on i keep on missing the uh the the the important part delete property sorry
[02:46:28]  this is what happens when you do things like impromptu you kind of like miss really obvious things delete target property true okay something like that okay here's here's
[02:46:50]  here's here's this is what i was missing pop was actually fine too probably if i do pop you'll see it too yeah exactly sorry pop shorter it calls delete before
[02:47:03]  it sets the length which is is nothing it's not that important you'd think except it means that you put a hole in the array so when you don't batch this update
[02:47:14]  solid sees the delete and go and and sees an array that looks like in this case one two three undefined right then it iterates it with the for loop and then
[02:47:28]  it hits undefined and it go and it tries to like read some property of undefined here uh that wasn't this example was it where where did i have
[02:47:37]  it um this one yeah see cannot read property undefined reading name so essentially it gets here does the for loop tries to read cat dot name but it's undefined
[02:47:51]  because we ran it immediately uh sorry which one is it yeah it's because we ran it here on the first mutation instead of waiting for all the mutations to happen right and
[02:48:12]  i mean there's an easy solution to this problem i'm not saying it's a good solution but there is an easy solution to this problem right yeah batch everything no that's
[02:48:24]  not that's not the solution but batch this right you can just go what if we just batch this as i said you never hit this when using the set state api
[02:48:39]  or using produce because they're wrapped in set state and set state batches if i do it now uh after i fix this um pop works because it waits till the applied
[02:48:52]  changes so anyways i didn't want to intercept everything and i was like oh man this is going to be a pain in the pain to solve but the solution actually ended up being
[02:48:59]  really really really quite simple here um luckily um once we figured it out if we figure if i mean this i only hacked it for arrays because this is all we have essentially if
[02:49:11]  if the value is a function that's on the array prototype instead of returning that function proxy it we already have a proxy so just replace that function with a with a batch
[02:49:25]  version of that and apply your arguments again against the um against the proxy itself if anyone knows the third argument to proxy is called the receiver is the proxy object you get the underlying
[02:49:35]  target get the property you get the proxy itself so you're you're able to basically apply it the batch against the proxy again so essentially with um solid um you know 1
[02:49:48] .4 we can take this example remove the batch again you never hit this problem in view probably because they batch everything all the time um but again performance right and if we
[02:50:06]  just drop this one in here pop works without batching because we inject batches automatically now on um these array methods and i didn't need to make a observable array like
[02:50:19]  if you look into the source code sometimes like view or mobx they have like special array types we have no special array types um this one liner basically saved us from a bunch
[02:50:30]  of pain and it's why proxies are so cool and now you don't have to uh worry um all the native array methods will automatically um um have this behavior
[02:50:44]  um and batch automatically for you and there was one additional example in here that um was a good point uh push reckon reckon reconcile which usually people use a set state but you know
[02:51:03]  you can use manually with this unwrap kind of thing and um essentially it was reconcile is doing a whole bunch of extra work here because it's it's triggering the
[02:51:16]  partial states what reconcile does is it takes an immutable kind of structured clone change and reduce it into fine-grained updates it's basically a differ for your data and
[02:51:26]  this this is really terrible whereas if you just change this call with a batch suddenly and this only happens with create mutable all our other apis don't have this problem so
[02:51:41]  i never i never you know saw it if you put in batch and do the same thing now it stops it does mount the original five of initially but then when you when
[02:51:54]  you do the reconcile to remove the one item it only removes the one item whereas before when we didn't batch here um essentially it was doing a bunch of moves it would like
[02:52:06]  yeah mouth original items but then after it remove three it would recreate four and five so this though isn't solved by my little proxy trick and i i don't want to
[02:52:20]  i i was like i could batch reconcile but instead i came up with actually a really simple solution i created came up with a new api for this um for mutables called
[02:52:30]  modify mutable and it's kind of like a set state kind of thing but it gives um mutables now a really easy way to to use modifiers the same way
[02:52:40]  set state does so in this case you could just pass the mutable in and um pass the uh the reconcile in and then it'll just work and it'll be batched
[02:52:51]  i mean it's a small helper function but it just makes our lives easier and sorry i forgot to mention this since create mutable is actually based on all the same um
[02:53:01]  internal state and all the the fun stuff we've been doing here um with the stores um you know all the all that stuff essentially um simple to do's create mutable now
[02:53:19]  also supports top level um i mean i kept local storage in here but this one's using create mutable but again you know essentially to do is dot push you can actually
[02:53:35]  see the batching in process in here so this this actually has both the batching and the top level arrays working with create mutable if that's your style so to speak
[02:53:47]  um that's weird why are there these yeah no that's fine yeah so essentially if i just do this we can push and everything works okay yeah yeah in my opinion that
[02:54:02] 's that's the main reason for this i mean i'm showing an example here i know where like you can do this kind of thing but yeah i mean i don't ever
[02:54:15]  i almost never recommend um create mutable um almost never i think there's some tree structures but most people who went that way end up using produce anyways so yeah i i
[02:54:25]  i think mutable proxies are super super dangerous um like they're about the biggest foot gun i could give someone um and the thing is like view gets away with
[02:54:39]  it because they have a beat on like the worst thing you can do is trigger a re-render and as we all know from react re-rendering over and over again
[02:54:47]  isn't really that bad right um so like in our case if you if you if you did that butterfly effect like earlier you could be recreating the actual dom right this
[02:55:01]  is this is the trade-off um there's less kids gloves with solid right that's how how you get the performance um so i i do my best to try and
[02:55:11]  encourage people away from awkward patterns um but you can do it you know and there are places as i said integrations are a big big part of it um i'm i actually
[02:55:25]  have more features not that many more to dig into on the code side um but i i actually have just a couple more notable mentions i think is the best way to call
[02:55:40]  it so yeah we talked about deferred streaming we talked about top level arrays and stores and like what that implication is we talked about still resource reads but we haven't talked about
[02:55:49]  this one combining multiple custom renders this one is kind of a little bit of left field about what we've been talking about but um and you've seen this demoed
[02:55:59]  on the stream before by nikhil and he his he he made solid three essentially but he was sitting there and he's like this really sucks i made solid three but i want
[02:56:09]  to have dom transformations in here and sure i can make a custom dom render if you guys saw that stream um it's pretty cool i benchmarked it in the js framework benchmark
[02:56:19]  and the custom dom renderer that was like just a i think we made it in code sandbox you know maybe we can actually find it here what was it uh custom dom
[02:56:28]  renderer this this custom dom renderer we made in solid um on stream that was where is it here all of 62 lines of code um i ran it in the js framework
[02:56:41]  benchmark and it actually uh came out almost the same performance as inferno like ahead of later i had a svelte i had a few um just for this like this
[02:56:50]  really simple implementation but he he he was like that's not good enough he's like i want solids like vanilla js level performance and i want my 3js too so you know
[02:57:04]  and like for some custom renders it doesn't matter if you're in the terminal you don't need the dom or whatever if you're solid native you probably don't
[02:57:12]  need the dom either right but he he was like no i i want the best of the best so he figured out a way that you can have multiple compilers working on
[02:57:24]  the same code you can actually have like template and have like three js like native elements and dom native elements next to each other in the template and they'll get broken up the
[02:57:37]  same way components get broken apart from the static like dom nodes and they'll be compiled they can be compiled with separate compilers within the same file and essentially stitched together
[02:57:47]  so with this little example he took his universal solid 3 render took the ultra efficient solid web um renderer stuck them together and he he's got the both the best renders
[02:57:58]  working together um and now that his little fork hack that he did himself is now an official part of our um babel plugin so now anyone who makes a custom renderer
[02:58:09]  can actually mix and match custom renders within the same project within the same template um so this this again might seem a little edge case to some people but it is super super
[02:58:21]  powerful um way of uh being able to um kind of like as i said make the you know maybe you have a canvas renderer and and still be able to leverage solids
[02:58:32]  um dom renderer um yeah so yeah we let's see if i talked about everything else uh class name hll4 deprecated uh experimental refetch resources has been removed
[02:58:44]  um this was something that we introduced in 1.3 um it was a bust we're still looking at other patterns here but refreshing all the resources just doesn't work um
[02:58:54]  talked about synchronous top level create effect a bunch of typescript improvements we've our current component type was like had this optional children like it was a good default but it was hard
[02:59:08]  to extend so now our component type makes no assumptions about children and we're going to have a new um parent component which is one that could have children or flow component which
[02:59:19]  means that it must have children and um and also avoid component which means no no children so we've improved the types around components now um which you know helps a lot um being
[02:59:30]  able to indicate whether children are necessary optional or not at all um some other small changes that i mentioned create resources sources are now memos so when you trigger them on refetch
[02:59:41]  they don't rerun the source again um we talked about create mutable so yeah that's that's that's most of the list um there's actually one more feature
[02:59:51]  that i'm working on right now that i hope to get in the release and it's um i'm not 100 happy with the solution which is why i didn't showcase it
[03:00:02]  off tonight um but um there is and you guys might view this more as a bug or or something but um i have a solution for it and i'm i'm going
[03:00:13]  to get to it but you you may have seen you may have seen this uh behavior before um essentially if you if you create i guess it doesn't really matter signal and
[03:00:35]  let's go const create signal and i guess it doesn't really matter what i put in the signal and let's go count sec now if down here somewhere actually i should have
[03:00:52]  kept this at time out i don't know why i've been getting rid of it i don't need it necessarily in these cases but it just it helps separate stuff a
[03:01:03]  little bit if i go in here and i go console dot log count and we're going to go read count in this in here and then i go set count count plus
[03:01:24]  or count plus one and console log it again did i like miss importing something again i guess i can check in the this is the one fun thing that happens sometimes when you
[03:01:51] 're in the playground there it is like what's with that delay okay yeah i broke something anyways so sorry count zero count count one unsurprisingly right you updated the cat now
[03:02:02]  if we use batch from solidjs it has this behavior of applying all the changes but it does more than just apply all the changes it ensures that you have consistency within the timing
[03:02:15]  of the batch so if someone reads like a memo or something it's going to be in the past because you haven't updated it which means that the count all has to
[03:02:22]  be in the past so this is basically opt-in to react um like behavior um i don't know what's going on the the playground is like there we go okay
[03:02:39]  so i have to open the debugger or something something's up okay so this is so weird we saw it a second ago i just want to refresh this showcase it off
[03:03:05]  and now it's like not doing it okay that's fun oh it's it's because i have 10 seconds i'm like blaming the playground thank you brendan everyone
[03:03:19] 's like yeah 10 seconds is a long time thank you dumb me yes 10 seconds is a long time okay see this is often to react mode let's call it right there's
[03:03:30]  a reason consistency is important some people criticize react about this but this this is legitimate um there's a reason for this okay but but so this is how batching works and
[03:03:38]  then it applies all the changes at the end now the you know as i said there's reasons for it however again um let's let's just change this to something else
[03:03:53]  for various reasons and nesting and whatnot um i'd suddenly change this to store dot count and then change this to um set store account one you do see the update even
[03:04:41]  though you're in a batch so this is kind of bad and kind of terrible i've known about this forever and unfortunately this is actually tricky to solve because of the nest
[03:04:52] ed nature of stores but i actually have a solution that works i'm just not sure i'm happy with it because it adds 200 bytes of code to the store implementation and requires
[03:05:04]  me to expose something internal from uh from signals um so i'm working through the details of it but in the next version of solid this will be fixed and this will ensure
[03:05:16]  consistency not just with batching but with transitions and stuff stores kind of leak leaking consistency usually doesn't have that detrimental of effects um but um we're fixing it finally so stores
[03:05:29]  you know they they are the most complicated reactive primitive have will now have proper um async and uh synchronous consistency through batching if you ask felt this is how it should
[03:05:44]  be yeah yeah i don't yeah yeah and even yeah even a bit of there's a bit of a view take too i mean if you've you've seen that old
[03:05:57]  tweet like the reason batching is important um and i i can kind of show this um with let me get rid of the stores because the store is clearly garbage now let's
[03:06:11]  let's just go backwards so we can see myself work the reason that the reason batching is important is because uh if you let's go const we'll count count
[03:06:38]  times two right we've all seen this before uh let's call it now the problem is the problem is this i'm going to get rid of our batch for a second
[03:07:04]  and as people know solid um and if we go console.log count times two equals double count okay all right there we go and we'll make this console log again uns
[03:07:43] urprisingly because solids like always update immediate kind of thing out in the wild we get consistent zero times two is zero one times two is two right and actually let's start
[03:07:57]  from one so okay thank you playground okay one times two is two two times two is four unsurprisingly now think about it this this this is this this is telling me
[03:08:19]  one times two is two and one times two is two and even though we set it up to two here once we get out of the batch you know once we get here and
[03:08:31]  we're like done you'll see you'll see you'll see you'll see the update but the reason we keep it inside is because when you're batching so double
[03:08:42]  count can't update while we're batching because we haven't notified it and if we let count increment without notifying double count we essentially create a glitch you would see
[03:09:01]  count two times two equals two and essentially like yeah i mean there's different opinions on on on how this should go but like the the old thing is um it's in
[03:09:26]  react it works like like what i just showed you like you you see the past all the time in solid you tend to by default you tend to you tend to by default
[03:09:35]  see the future right you you see you see you you are like you see it right away if you open up svelte and do this kind of i don't actually i
[03:09:48]  don't know if i want to do this right now it's fine if you open up svelte you'll see you'll see you'll see you'll see two
[03:09:56]  times two equals two and that's why we say it's on glitch free and if you open view you'll see the future too but i but they don't apply effects yet
[03:10:07]  so if you added like a a dom ref on the end here um you would see like two times two equals four but the dom still thinks it's two so like there
[03:10:21] 's a whole bunch of different opinions here but um um essentially i know i didn't need to get into this probably right now um batching like if you want consistency either
[03:10:32]  update everything right away or keep everything into the in the past until you can notify if you split it it's called it's called glitched um and um solid and react are
[03:10:43]  both glitch free because of this this thing and that's why the the batching is is important and right now solid stores break my contract so they are not good um but
[03:10:56]  we will be fixing this in 1.4 so again this is a small thing that you probably haven't noticed or kind of slip in the cracks maybe you don't use batch
[03:11:03]  very often um but now in 1.4 we're going to ensure we're glitch free um across the board even with stores so that's that's the last feature i
[03:11:13]  think that's going on before a lot of really cool stuff here i hope um you all enjoyed um looking into that and understanding that um yeah we did three hours on this stuff
[03:11:27]  it's amazing um i am not going to be around next week so there's no stream next week i hopefully will have streamed the following week but i'm actually traveling on
[03:11:38]  fridays two fridays in a row i'll be back in town but i'm not 100 sure i'll do that so we might have a little um silent radio silence
[03:11:48]  let's speak on the stream stuff at least um but uh when i come back um hopefully we'll be in a good place to pick up and uh start looking at some of
[03:12:00]  the progress we've been uh basically let's look at solid start and see what's going on with that um anyway uh yeah uh i wish everyone have a great weekend um
[03:12:16]  thanks for joining me today thank you and uh i will see you all probably you know i guess two weeks serves or so so uh until next time thank you see you