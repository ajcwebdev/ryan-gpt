---
showLink: "https://www.youtube.com/watch?v=Ywv8cGOVNMg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look At SolidHack Submissions"
description: ""
publishDate: "2022-04-02"
coverImage: "https://i.ytimg.com/vi/Ywv8cGOVNMg/maxresdefault.jpg"
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

[00:00:00]  Hello, everyone, and welcome to my stream tonight. Today, we're going to do kind of a solid focus stream. We're going to look at the Solid Hack
[00:00:14] athon. It's been going on since January 7th, but it ends next week. So this is kind of a last chance to showcase some of the cool projects before
[00:00:26]  it completes. Personally, I'm not actually involved in the organization or judging of this at all. I kind of opted not to kind of weigh my influence into it, although
[00:00:36]  I guess by streaming to show some of the stuff off, I might be considered to be doing that. But yeah, I honestly haven't looked at this stuff much, and
[00:00:47]  I thought it would be cool to kind of take a look and get an idea of what people have been working on. Because yeah, I've seen a few things posted
[00:00:58] , kind of done some retweets, and it looks like really cool stuff. So I'm looking forward to it. Yeah, if you're joining on, come say
[00:01:04]  hi in the chat. Hi, Ricardo. Just kind of getting started up here. Sorry, I don't have any cool music or nice graphic. While we sort of
[00:01:19]  get this going. But I've got my drink and that's all I need. Hi. Thank you all for joining on. I said we'll kick it back a little
[00:01:35]  easy this week. Because honestly, it's just kind of a in between week, I guess. Stuff's been, there's been actually some interesting progress this week in
[00:01:50]  JavaScript. And we'll talk about that in a minute. But I kind of, instead of having a week that I need to do a lot of prep work or kind of
[00:01:59]  looking into stuff, I'm just kind of, we'll just kind of go and see how things go. As I said, I haven't really looked at the projects
[00:02:08] , what's there. I'm hoping that, you know, we can go through things pretty quickly and might not get to everything. I'll just probably just go down the
[00:02:16]  list and just kind of check it out as we go. Hi. Yeah. Streaming time doesn't really work for everyone. But you know, I try my best.
[00:02:26]  It's always tricky after work and just kind of how it goes. But yeah, no, I'm looking forward to this. I think it'll be a lot of
[00:02:36]  fun. I think next week actually is going to be even more fun and kind of the complete opposite stream. I've been talking with Fred K. Scott, and I think
[00:02:50]  we're going to do a stream on the new Astro 1.0 release. So I'm going to dig right in and see what the, what that's all
[00:02:57]  about. Next, next week, I believe at the, I think Monday, they're going to release the, the Astro 1.0 beta, which introduces server rendering
[00:03:08] . But we'll talk about that in a minute. Let's talk about this week in JavaScript, shall we? Let's everyone ready to get started? Yeah, let's
[00:03:17]  do it. Well, for me, let's see here. I'm just going to share my screen. But for me this week in JavaScript started, actually, we
[00:03:30] 'll talk about that more in a minute. I had a few presentations. I did this really cool demo from, from Marco, kind of a two hour, it was an
[00:03:41]  hour and a half early, but it was a workshop where showed off like Marco's progressive enhancement and streaming and partial hydration. For people trying to get started with Marco,
[00:03:54]  this might be one of the best options for you because I do have like the other stream where I'm trying to introduce the concepts and it's very technical. This is the
[00:04:01]  opposite. This is like literally, let's just build a blog site. So we're just sitting there in the HTML, just building stuff, writing code, getting a feel
[00:04:08]  for what it's really like, which I think really lends to Marco. We always try and advertise and speak to like all its amazing technical benefits. But the truth
[00:04:19]  of the matter is what makes Marco really special is it feels like you're just running HTML. And I know every framework claims that, you know, they're like, oh
[00:04:27] , just JavaScript nature. But like, because of the lack of like the mentality around it, the multiple job mentality, it feels like you don't need JavaScript to do anything
[00:04:38] . So it's, you know, it's a very different experience. And it kind of combines all the benefits you see in things like remix where you have like the
[00:04:46]  progressive enhanced forms and, you know, that whole kind of thing. And, you know, with just this very nice, kind of easy to use thing. So yeah
[00:04:54] , if you're interested, check on Marco, check out this out. But yeah, let's get right to it. Big news this week. React 18 is now available
[00:05:03]  on NPM. And man, this, this one has been a long time coming. Sorry, I'm just catching up on a couple of these comments here. The stream
[00:05:17]  is turning, yeah. But, but yeah, sorry, I guess I should address this. Bart doesn't feel like each melody. It's super cool. But the
[00:05:31]  tiger definitely don't think Yeah, but the thing is, what I want to get at is, I don't know how much authoring you've done in Marco. And
[00:05:38]  this, this, the demo that I did was actually Marco five, it wasn't using the new tags API at all. The tags API are incredible, and they do
[00:05:49]  feel like their own thing. And they don't feel just like HTML. But the thing is, when you actually author a basic experience in Marco, 90% of it,
[00:05:56]  like, like for basic experience, 90% of it is just HTML. Like, you don't need the tags or the state or the JavaScript. And that's kind of
[00:06:03]  what, what the, what the, what the demo. That's what the, that's what the demo is kind of show showcasing. I, I, I
[00:06:13] , I basically build a site that doesn't require any JavaScript. Then I add a little bit of JavaScript, and it just, it just feels like you're just building a
[00:06:21]  site, but it's, you know, it's, it's very powerful, and it's super, super performance. So yes, the tags API is different. It
[00:06:28]  is special. It definitely has its own thing. The syntax definitely you go, oh, this is, this is a thing when you go to add it, but because
[00:06:35]  of the base conceptions, because you're not like thinking like a spa framework, you're not like in that mindset, like you just kind of just throw some forms up
[00:06:45]  on a page and it just kind of goes from there. You're like, oh, there's an event handler. Maybe I'll add a class here. Or maybe with
[00:06:51]  the tags API, you know, like a couple of designer tags, just, it's, it doesn't, it, it feels like you're just adding sprinkles
[00:06:58]  to JavaScript on the HTML in a sense. Um, yeah, yeah, that's the best way I can describe it. But let, let me, let me get back
[00:07:06]  here. React 18. Um, this is huge. And the reason I say this is huge is because, well, this might not be the final story. And when we
[00:07:17]  re, when I read through the release, I kind of realized that there, there's going to be several minor releases along the line of 18 for it to get to
[00:07:25]  where, where it is. Um, um, essentially they've, they've, uh, gotten to a point where, um, like this is the baseline. This is
[00:07:41]  the starting point where, you know, libraries can start adopting it and using its patterns. And and the reason this is huge is because everything in react 18 has been literally
[00:07:48]  coming for five years. Um, which, which is, which is amazing. Uh, because this is, this is kind of the culmination of so much work and so
[00:07:58]  much thinking, uh, Dan posted something. I remember the night after this was released. He's just like, I can't go to bed or I can't sleep.
[00:08:05]  Like I, I just, I, he was so more, like so much time and effort has gone into this and like years, you know, and it's like
[00:08:14] , how is the community going to respond? What are they going to do? What are they going to think? You know, there, there's definitely the sense that like
[00:08:22] , like this has been, this has been, this started from a dream or consideration and design something that, you know, probably dates back to 2015, 2016 time period.
[00:08:32]  And finally it's out there and it's not done, but people can finally use it and start really understanding where this vision is, why suspense has taken so many years
[00:08:43] . Like this is the release where suspense goes mainstream. Um, you know, concurrent rendering goes mainstream. And, uh, this is a huge, huge, huge deal
[00:08:56] . I like there's gonna be more things built on this and like, but like all the pieces here are game changers and having, you know, witness this through the
[00:09:11]  beta period, um, having gone in there and stolen all their features with solid and using them the last year or so I can tell you this, this is a huge
[00:09:19]  deal. Sorry. I had to throw that in, but, um, no, I'm, I'm, I'm serious. Um, this, this, this,
[00:09:27]  this, once you get the chance to use the transitions, use the streaming, use all the pieces, everything just makes sense. It's like part of this amazing picture that
[00:09:38] , um, React team has been painting and they've been giving us hints along the line. If we're paying attention, it's kind of putting it together and that
[00:09:45] 's why the libraries are ready. That's why React query supports it. And, you know, a bunch of the different fetch libraries, and you start seeing that the ecosystem
[00:09:54]  is kind of ready, but the interesting part for me, and I actually pointed this out was that the most interesting choice in React 18 is for going a data fetching primitive
[00:10:05] . This is this, we're going to talk about this for a minute because this one is this one surprised me a little bit. Like, okay, it makes sense
[00:10:17]  and I can appreciate why. And I mean, I'm sure people in the chat might have opinions on this whole thing, but almost all the headline features like streaming transitions,
[00:10:29]  even fully leveraging suspense, you know, in the client and server are, are based off data affecting lazy components is one use case. Um, maybe concurrent rendering, you know
[00:10:39] , you have something really, really expensive computationally, but not, not rendering concurrent rendering doesn't improve performance of like raw rendering. It improves performance of my raw rendering
[00:10:51] . I mean, updating the Dom or, you know, doing outside, it improves the performance overhead of like, um, things are computationally expensive, but essentially if,
[00:11:03]  if you're just like, it benefits you most when you're hitting the wall or hitting the limits. It basically, it makes sure that the worst case isn't the worst
[00:11:10] , but it doesn't really improve performance on the best case. But for like the main reasons you want it, right, is, is around data fetching, right
[00:11:20] ? Navigation, you click on the new tab, load that data in the background, show the fallback or do the transition, show the stale state, all,
[00:11:27]  all that kind of stuff is dependent on data fetching. And, um, React decided to not give the data fetching primitive and direct you to third party libraries,
[00:11:37]  which have been working with these APIs for like almost a year now with a working group. So like they're, they're ready, but it is, it is a,
[00:11:45]  it is an interesting one because I've been, I've been focusing on teaching. Right. I, I wrote an article about why the suspense, um, uh,
[00:11:52]  a few months ago where I tried to explain suspense, not in terms of lazy loading, but in terms of a consistency. Like the reason suspense is important is about consistency
[00:12:03]  of your UI. It's not just about showing placeholders. If you consider transitions and the whole thing, it boils down to making sure your UIs feel bulletproof.
[00:12:14]  And I think it's an interesting challenge to try and teach these concepts. when you provide the higher level features, like streaming and transitions, they're not high level,
[00:12:26]  they're low level, I guess, in a sense, but they're, they're like things that depend on these primitives or data fetching and then basically outsource
[00:12:35]  the data fetching somewhere else. So like there's kind of interesting challenge of going, like, you, you can't tell the whole story without pulling in a third party
[00:12:42]  library. So how do you explain to people what that story is? Um, I guess you just pull in the third party libraries when you go to teach it. I
[00:12:50] , I think it's, I think it's an interesting challenge and I, and I think there's some reasons about it that we probably should dig into. Do you think
[00:13:01] , do you think an element of that is not the only multiple library hours that's there? Maybe, right? Like if, if you provide primitives and you, you
[00:13:12]  basically telling people to rewrite their library's office, you saw what I got in early, right? I was like, okay, there's gonna be a resource permit of
[00:13:18]  anyone who's gonna make solid query is going to build it on top of that. We, we know that's the approach. I think, I think if they kind of
[00:13:25]  provided their own thing, people might be like, oh, you know, but here's the, here's the thing though. React is providing their own thing. Well,
[00:13:35]  let me explain in a second. I think this is the second piece, right? Um, react server components, as I mentioned, anyone who's following the stream is,
[00:13:44]  is paradigm shifting, right? Like it's actually changing the mental model. It's, it's almost like multi-page app. It's like, it's like
[00:13:52]  taking Marco and jamming Marco and, and react together. Like that, that's, that's, that's, that's sort of, that's sort of what it
[00:14:00]  is. And sure at E at, sorry, internally at meta, they, they use a relay, right? And the, yeah, sorry, what we got here
[00:14:11]  are some details. I think they have their own internal fetching live, some relay session. And yes. Right. So, and it's much harder to come up with
[00:14:20]  a generic primitive that supports things. Because there's so many considerations. Caching is one preloading, you know, like all these things where people are opinionated
[00:14:30]  and have special use cases and it's hard to generalize and just say, this is a solution. Dan said recently, they try not to add anything to React. This
[00:14:39]  is something better than what's possible in user land. Yeah. And this is probably a good approach to take, but you, my, my, my whole point here
[00:14:48]  isn't that it's like, how much harder does it become to actually teach these concepts in a sense? Async is a core concept now. Like it's, it
[00:14:58] 's, it's something we like transitions or suspense. It's something that we have to teach as a pattern, kind of like hooks. And then it's, it's
[00:15:05]  kind of like, I mean, this isn't even as strong of an example from my perspective, but it's kind of like, it's kind of like if React
[00:15:14]  was like, okay. You guys. We've invented, we've come up with this thing that hooks. It's super, super powerful. We'll give you this book
[00:15:22]  called use reducer. Don't worry. Other libraries will figure out how to build stuff on top of it. And they'll give you state primitives and other things.
[00:15:34]  But really with use reducer, you can build anything. So we'll provide you with use reducer. And this will, but like, this will enable it and
[00:15:45]  use those other libraries. And then, you know, you'll, you'll, you'll, you'll find, you know, what you need to do. Like,
[00:15:53]  I think it's, it's, it's much harder to teach concepts when you don't control the primitives. Like picture of use, if you had to download
[00:16:03]  use state from somewhere else. But I mean, I'm very primitive oriented. So that's probably where my bias comes from. And I think, I think they'll
[00:16:12]  probably get there. And I said, react server components are a big part of this because server components don't use hooks. They don't, they aren't stateful
[00:16:21]  yet. They still play with suspense. So you need a completely different sort of primitive to run in react server component land. You can't just make like a use resource
[00:16:33]  or whatever. And if you're betting that the future data fetching is on the server and the future routings on the server, which anyone who's been following the
[00:16:42]  stream knows, that's probably the bet to make. Then there's no point introducing a use resource. Like, let react query do that, you know, or whatnot
[00:16:54] , and work on the primitives for this new world order or approach you're working on and figure out what's needed there, you know. And, well, you know
[00:17:06] , people like you guys might think, well, that's kind of crazy. But look, look, look at the server components demo. There was what react progres in
[00:17:13]  there react. What else was there, they're giving examples of these react react fetch. I think they got these react specific libraries. And yeah, I mean, obviously
[00:17:25] , those have to play with suspense on the server or whatnot. So like, clearly, they are working on primitives to kind of finish off this part of the story.
[00:17:33]  And those primitives probably will be available. So I mean, where do you kind of place it? I mean, I think this could even partially just be like a
[00:17:46]  slow roll on this. Because it, like, these things are complicated. And you don't, you almost need maybe a meta framework to properly leverage some of the pieces on
[00:17:57] , you know, streaming, for example. You know, it's hard for someone to just pick up and go, okay, I'm going to make streaming work. Like
[00:18:03]  CSS and JS libraries and query fetching libraries don't just work with streaming. Like, like, I can use, uh, uh, what's that? What's
[00:18:12]  that one? Um, uh, Urkel as an example, but I'm sure Paul is the same. Essentially the expectation there is when you render on the server,
[00:18:24]  you collect all your data caches, serialize them out on the end. And then because those data caches are there, when you start hydrating, you have all
[00:18:33]  the data available and then you hydrate the page. Now, if you're streaming, you have the ability to start hydrating the page before the page is done on
[00:18:45]  the server. So now you have to incrementally create that cache and you can't depend on the cache completing on the server before you start any hydration of the client. And
[00:18:58]  if libraries just assumed that things work that way, like you're going to have some trouble. Same with CSS and JS, like basically anything that kind of wants to write to
[00:19:08]  the head in streaming doesn't get to do it in the same way. So it's a lot easier to facilitate this through something like a meta framework, like next JS
[00:19:18]  or whatever. So like, by giving this a little bit of time, you like, it's almost better, but it makes this almost feel like a soft release, right
[00:19:27] ? Like I was kind of like before this, uh, React 18 announced, I wasn't, I didn't realize it's gonna be this close, but I looked at
[00:19:33]  the RC and I'm like, are like, is this, are people just going to like start writing promise fetching or promise throwing libraries, right? Like to build
[00:19:43]  their own, their own resources. Like it's a little bit more complicated than that. You actually want to throw on read, not on fetch. But like, if you
[00:19:54] 're just a guy, I guess, go pick up React query. That's, that's the answer. You know, if you want to try these, these, these
[00:20:00]  features and there's nothing wrong with that. It's just, and as I said, I see a lot of reasoning in it. It takes a lot of work to find
[00:20:06]  those right primitives. Um, but like this, this is an example of one of those things where like, you can't just like go to, you know,
[00:20:19]  the REPL, so to speak, or, and just go, okay, I'm gonna, I'm gonna, I'm gonna, I'm gonna do some async
[00:20:26]  data fetching example. Like you need to pull in another library. I mean, you don't need to, as I said, you can write your own mechanism to
[00:20:35]  throw promises, but like, that's pretty low level. So we'll see how this goes, whether they introduce a primitive as this kind of goes. I mean, I
[00:20:51]  think the key part about this release is, and you can see it in the release announcement. Most of this was focused at like, Hey guys, don't worry about
[00:20:58]  this. This is targeted at library authors, because there's a lot of changes and a lot of things that they have to consider. I think all in all, they've
[00:21:05]  done a really good job of making this not breaking, considering like how big of a, like, conceptually, like the wiring and stuff, like, this is one of
[00:21:14]  those examples where like, I don't know if you've ever been in this, in this state, you're like, you've been working on a project for five
[00:21:19]  years and you're like, it just can't go where we want it to go. And, and you're like, and you're like, like, we need to
[00:21:29]  change slightly, but we have users and they like our current features. Like I, I mean, this takes me back from on startup. And you're like, well,
[00:21:37]  let's do a rewrite. And you're like, no, no, no, no, no, no one wants to do a rewrite. Like it's, it's
[00:21:42]  brutal. When you do a rewrite, you know, you always end up introducing new bugs and change the use cases and like, no one wants to invest the money on
[00:21:51]  it. It takes time. And it's always late. Like, but then you'll, but at some point you, you, you keep on kind of going, you
[00:21:56] 're like, no, we need to do a rewrite. Time is time. And to pull that off, you usually have a couple of approaches. You have the like rip
[00:22:05]  the bandaid off approach, which in my opinion often is better, but that's not something you can do when you have a real user base. Right. And we
[00:22:12] 've seen what happens with that. Angular 2 happens with that. The other option is spend several years incrementally adding it in pieces, shift the mindset, make small changes,
[00:22:27]  actually move the people to where you're going and ease them in along this path where eventually they don't even realize that you've convinced them on a complete rewrite and a complete
[00:22:38]  change, even though it takes multiple years to pull this off. The danger of that one is by the time you get there, because you have to move at that speed
[00:22:45] , maybe what, where you're trying to get to wasn't actually the goal. Like if you'd just done the fast way, you could have been way far there ahead
[00:22:52] , but because you've had to kind of go this roundabout way, maybe you're not where you need to be. I mean, you'll be second guessing yourself forever
[00:22:59]  when you take that path, but you'll keep your customers for the most part and you'll get there. And I feel like that's what's been happening in the
[00:23:06]  React team. I said 2015, so this is like seven years in the making. Maybe seven years ago was just the thinking, but the pieces started showing up as early as
[00:23:19]  2017, which was five years ago. So this has been a strategic, careful thing, careful thing. And there's been missteps and stuff, but generally speaking,
[00:23:29]  they're still here. So they've done a pretty good damn job, right? So I mean, for any criticism that I might, I might have here, I
[00:23:44]  mean, you got to put that in perspective. I'm inspired by the incredible engineering effort here to basically like, this is like, if you try and pull a tablecl
[00:23:58] oth off a table and you do it really fast, you know, maybe the dishes don't go flying. It's almost impossible to do that in a slow way and
[00:24:07]  React's doing it. So kudos. So yeah, just to put in perspective, a question here, does Solid have built-in state management like Redux or X
[00:24:18] A? I mean, I mean, those aren't built into React to be fair, if that's the question. But technically speaking, Solid is a reactivity language
[00:24:29]  or library, kind of similar to MobX, as Oren's saying. So like, essentially, it is kind of built-in because it is the framework that you
[00:24:42]  could view the framework as a state management framework. To be fair, the perimeters are really simple. So it lends well with other organizational patterns. We don't have
[00:24:49]  to be opinionated. Like, you can use Redux or you can use XState. But essentially, if you did nothing, there is some kind of state
[00:24:58]  management. And in React, for example, it's kind of the same. Their components are the state management. In Solid, that state management is innately separate from the
[00:25:06]  components. So as a baseline, we already have state management by the definition of modern front-end frameworks kind of built-in. Yeah, exactly. Like, just
[00:25:17]  literally take something you'd put in a component stick in another file and you have state management. Is everybody on the Hooks train? I'll react to what I've dealt
[00:25:29]  with in the last five years has been class-based. Yeah, no, I mean, they don't teach people. And I say they, I mean, the
[00:25:35]  ecosystem, talk to someone who started development even as late as 2018. Like, new devs, no one bothers teaching classes anymore. It's like, that tells you how
[00:25:47]  amazing, like, how do you do that? You have a change that's that fundamentally different. You completely change the API and somehow transition everyone to it without almost very
[00:26:01]  much of a fuss. Like, I mean, yes, some people have issues with hooks and there's trade-offs and stuff. But generally speaking, the ecosystem went there
[00:26:09]  willingly. They didn't, you didn't, they didn't have to force them. They didn't have to go like, do this, upgrade it. Like, people
[00:26:15]  just came there on their own. So, yes, I'd say class APIs in React are pretty much dead and probably have been for a couple of years. Yeah,
[00:26:28]  exactly. Right. Like, it's always tricky. I don't know if hooks as an abstract, like there's, I understand the reason for being, but it's
[00:26:42]  an interesting question of whether like React's model is the, is, makes the most sense for hook or primitive type things because it's essentially like a top-down functional
[00:26:57]  programming mentality, memorization, you know, composition. And now you're kind of introducing these kind of higher or like kind of higher order concepts like which functional programming has
[00:27:11]  been introducing, like, you know, some people tell me the algebraic effects or something, but I don't really understand algebraic effects, but like essentially these, these
[00:27:19]  sort of different concerns into the functional model and it works and there's a whole science behind this, you know, like an academic side to it. But for most people,
[00:27:34]  it's, it might be a bit on the complicated side, but for the simple use cases, you'll never hit the complication. A lot of closures,
[00:27:44]  you betcha. So, I mean, we're talking a lot about React here. I wonder if I actually bookmarked something kind of similar to that. Let's
[00:27:55]  see if I have it here. I found this one interesting because this is, this is a pretty know-it-all kind of take and I found it kind of
[00:28:10]  interesting because according to this guy, and this probably might help you, help you, Gray Restful, is, is like, according to this guy, solid is an obvious
[00:28:23]  evolution. And it's funny because when I talk about React, I always said it was an obvious evolution. So I, I, I found this thread a little interesting
[00:28:30] . SolidJS is for sure better than React. The consensus view will come around to this within 10 years. I mean, hopefully sooner than that, but, but it
[00:28:38] 's only 25% better. So React is still most of the way there, but it's fundamentally enough a step forward that I don't see how React's inferior model could
[00:28:46]  survive longer. That's, that's, that's tough. The way I can predict SolidJS with a mainstream solution is the same way I predicted something like React
[00:28:53]  would be ideal before React existed. And the same way I predicted something like SolidJS would be ideal for SolidJS. I mean, this guy has, has pretty
[00:29:01]  good insight. I mean, and to be fair, I would probably have said the same thing. So I'll take, I'll take that in, but essentially he,
[00:29:08]  he, he wrote his own reactive library that was similar to Solid and with GraphQL back in 2015 and, and, you know, whatnot. And, and, and
[00:29:25]  listen to this reply. This is not obvious to people because he goes, someone's like, well, what about Svelte? Right. And he goes, Svel
[00:29:31] te is a decently good React like framework that makes good use of pre-compilation to give some better, but haven't used it, but Svelte and,
[00:29:37]  and others don't cleanly nail the important primitive building blocks away. Solid does. So this, this is, this is an interesting one because I think someone else said
[00:29:44]  something along those lines too. Um, what did, where did he say? Cause check out Svelte. Yeah. It's, it's all right, but it
[00:29:52] 's no solid. It doesn't have the need of foundational building blocks to treat reactive state and reactive components as the same kind of thing. So it, it just, it
[00:29:59] 's just an interesting question, right? Because if you're going to buy into what Svelte does, you're buying into the idea that the model is fundamentally different
[00:30:09] . And I don't think that's obvious. People see something like, oh, it's React. Um, like I, I thought this was an interesting take. That
[00:30:18] 's why I bookmarked it because I didn't make the argument, but this, this, he's making the argument for me quite well. And I, I'm
[00:30:27]  like, it's because obviously he came to this conclusion himself a few years ago. So, but Only, so JS can express the set of all desired program behaviors by
[00:30:39]  elegantly composing a small set of fundamental building blocks. So it's going to find its way into your stack eventually, even if it just influences felt the same as how
[00:30:45]  React includes Angular's direction. I guess we'll see. Yes, JS has the truth of detail from the standpoint of analyzing expressive power composing fundamental building blocks. So
[00:30:57]  I would be fine using hyper script instead of JSX if I had to. Yeah, no, this guy gets it, but I just thought this was an interesting thing in
[00:31:04]  this whole heat talking about, you know, primitives and React and whatnot. Yeah. I mean, you guys are talking about algebraic effects in the chat. I,
[00:31:22]  I, I, I, I do actually get them. I just not enough that, I mean, I could probably draw something and explain it, but it's a
[00:31:31]  thing, right? Which is always more complicated than it not being a thing. And this is something I'm very conscious of on the reactivity side, because often we introduce
[00:31:39]  things and you kind of have to decide what the trade-offs and balance of those are. But in, in any case, um, uh, this was, uh,
[00:31:48]  this was an interesting discussion. Um, so yeah, this is, this is what we're talking about on react, right? Um, what let's anyone else have
[00:31:57]  any more thoughts on react before we, uh, move on to some other stuff for react 18 because I I'm, I'm willing to chat a little bit of right
[00:32:05]  here while, while we're, while we're here. Yeah. I mean, it's more than performance. Um, performance is nice and it's really cool how I
[00:32:24] 've managed to prove that in certain benchmarks, but it's actually stealth and solid are like not really actually that similar. Um, which is kind of crazy because everyone's
[00:32:35]  like, oh, that's a compile thing. Solid is, is like, it's, it's like react actually. It's, it's, it's big love
[00:32:44]  affair with react there in that every piece is composable and portable and transferable. Like it's, it's not, it's not like your entered compiler world.
[00:32:55]  And it's funny because Marco, um, is more, but Marco is actually trying to solve composition. So when I, when I, I, I wrote in a tweet
[00:33:03] , uh, this week too, I'm not going to chase on that thread. I said something along the lines of that I've seen Svelte's future. And
[00:33:09]  I don't mean to say that I know exactly what Svelte's going to look like, but I know the potential of where those compilers can go because
[00:33:16]  of the work I've done on Marco Marco has managed to control the world. You know, it is kind of less portable in that sense. It's not just JavaScript in
[00:33:24]  the way, you know, reactor solid is, but it has actually escaped the local file boundaries that you find with Svelte or, um, most of these compil
[00:33:37] ers. So in a way, if Marco can do it one day Svelte can do it. Essentially Svelte has all the capability and potential here. So it
[00:33:48] , the beautiful thing about the compiled approach is you can't, you can't, you can't bet against it. As long as they're smart about syntax and patterns,
[00:33:59]  like maybe they've tried, they kind of pigeon told themselves into a hole, the way that they've set up their syntax, that they can't get out of it.
[00:34:05]  And they're like, like it, and no one wants to move on to it. But the compiler has incredible capability within the zone that it has domain. And Marco
[00:34:11]  has shown that that domain can expand beyond what Svelte does today. So when I see Svelte add things like const tags and all that, I'm like,
[00:34:19]  yeah, you guys are getting it. Like it'll get there. Right. It's not saying that they won't go a different direction. I'm saying the potential
[00:34:26]  is there. Svelte is capable of incredible things, but it and solid are very much on the other side of, you know, you know, of the, of
[00:34:36]  the, of the spectrum. I kind of looking forward to this and it'd be really cool in a couple of years that, that, that the Svelte solid
[00:34:43]  rivalry and philosophy, you know, kind of plays out the same way, maybe Angular and reacted back in the day, because I feel like it's, it's, there
[00:34:53] 's a lot of similarities there. And I feel like, I feel like there's so much more each side can do. Right. Um, I mean, I'd
[00:35:01]  love if, if Marco was the one on the other side, but I mean, Svelte is, is, is popular. We'll see what happens in Marco six
[00:35:09] , if people really pick it up because Marco is really, really incredible, but you know, there is this kind of philosophical, um, place and difference in terms of what
[00:35:19]  role the compiler should play in all of this. And Svelte could pick up that torch, you know, like, it's definitely possible if Marco has proven that
[00:35:31] . So, um, yeah, it's gonna interesting to see where these things go. Uh, what do we got here? Yeah. I, I, I had an
[00:35:51]  old tweet about this and, um, yeah, it's, it's fun. I mean, the thing is, effects are everywhere. You need these kinds of escape
[00:36:02]  hatches. When you build your world as an ivory tower, where everything is pure, the thing that doesn't fit is hard. Um, do you know, it also
[00:36:11]  has these kind of issues. If you're trying to build a, something in pure reactivity, like pure RX JS, when it's breaking out of the system, that
[00:36:19] 's always kind of a little bit tricky. Cycle JS is kind of a genius in that they built the effect loop essentially into the, into the framework, but you
[00:36:28]  know, and they do it quite well. But when you build with such purity, um, real life happens. And, and the funniest thing is no react use effect is
[00:36:39]  kind of like, uh, it's an escape hatch that you shouldn't need and use as much as you want. Do you know why use effect is used so much?
[00:36:47]  Because reactive systems, including react, which people, you know, say not react generally are synchronous, um, because they, they, they need to ensure consistency. That
[00:36:56] 's that's super, super, super, super important. You need your UI to be consistent. And even if react is batching and stuff, essentially when you apply
[00:37:05]  the side effects, the rendering and stuff, it's gotta be consistent. So why use effect? Well, the number one thing is what is not synchronous that you need in
[00:37:16]  every freaking app data fetching, which brings me back to this data fetching primitive. I added that to solid. And then suddenly you don't need to use create
[00:37:27]  effect anywhere. Like a, and it, this isn't like rocket scientist science because react query does the same for react for remix does the same for react. It isn't
[00:37:39] , isn't, it isn't magic. It's you just abstract away the data fetching. You get rid of most of the issue around using use effect. You need
[00:37:49]  it because there's no native way to handle async suspense, all these tools of getting built into react 18 handle async. It's just that there's no,
[00:38:00]  we just don't have the primitive to make, to let you use it. Yeah. Sorry. I'm getting a little heated on it, I guess, but it's
[00:38:14] , it's kind of, it's kind of like, it's kind of very straightforward. Let's see what we got here. It's felt reactive. Am I
[00:38:30]  going to do it? Yeah, I'm going to do it. Health is truly reactive. Okay. What's the next question? Yeah. Yeah, exactly. And
[00:38:51]  Marco doesn't have directives yet and stuff too, but I think this is a natural place when, when you start controlling the world to be fair. I don't know
[00:38:59]  if Marco has decided completely philosophically where they are. Maybe they're in the middle because once you unlock the composition, you're kind of like, well, maybe we should
[00:39:06]  give a little back to the user. So I think there's a range here. Maybe Svelte is further on the batteries included side, but with a compiler,
[00:39:14]  that line gets very, very great gray. And yeah. I mean, what that means in the future is probably going to be different. So yeah. When I talk about
[00:39:27]  Marco, I'm talking about pure mechanics of rendering, server, like all the potential from performance patterns, you know, like architecture. The animations Svelte are amazing
[00:39:39]  and unmatched and, but actually I saw something really cool. Everyone just assumes that, you know, because this is actually related. There was a, there's a tweet
[00:39:48]  about animations by Adam Rackis this week. And I didn't bookmark it. I could try and find it, but essentially this, this started this whole batteries included
[00:39:59]  conversation. So it probably should have been on my list of things I bookmarked, but essentially I found out this Inferno JS. People know is one of
[00:40:08]  my favorites. They kind of inspired me to, to seek performance. This was a VDOM library based kind of on the same cause as a react, but just was
[00:40:17]  so much faster. And most of the techniques that we like owe performance to today, we owe to Inferno. Sure. Solid's core rendering is completely different.
[00:40:28]  And I got my influence in different places, but once I got past that and I was like, Oh, how do I handle styles or, you know, special properties and
[00:40:36]  attributes versus this and all the places where you, you can enter D optimizations really quick. Inferno is where I go. I go, okay, how did they
[00:40:45]  solve it? Cause they were there first. And they like, since Inferno in 2016, framework performance has maybe improved maybe, maybe not even 10%. Infer
[00:40:58] no made the 89, 90% traversal, but check out what Inferno has new in Inferno 8.0 built in animations. This gives me hope because
[00:41:13]  this suggests, and we should probably look and see what the API is on this, if we can find it, but essentially this suggests that you don't need to have this
[00:41:22]  kind of stuff built in. You just need a little consideration in your model. So I think, I think this is cool to see a super performant read on library
[00:41:30] . And when I say super performant, I mean, regularly outbench is Svelte. Inferno is usually faster than Svelte in most benchmarks and it
[00:41:40]  has the built in animation. So, you know, there, there is hope here. There is potential. So it isn't unique. Obviously compiler makes the composability
[00:41:50]  and feature inclusion easier, but for the most part, if you design your API a smart way, it can be tree shakable. So anyways, just thought I'd
[00:42:00]  point it in. Cause isn't it really cool that, that, um, that we have a super performant beat on library with animations. It's just like the other
[00:42:10]  side of things, you know, and there you go. I didn't really finish my thought here on Svelte being truly reactive. Um, it's, this
[00:42:21]  is a marketing page and I, I sometimes have fun with that, but yeah, I mean, this is the best way to market in the world, right? Even V
[00:42:30] ue says it's reactive. Well, I mean, Vue is reactive. Um, Vue and solid have basically the same core reactivity. You know, obviously
[00:42:39]  I wrote my own version and things a little bit different, but essentially they, they both work a fine grained. It's just, once you get into rendering, everything
[00:42:47] 's different. Vue, um, goes into a V Dom. Oh, until they don't. Right. Um, you saw the announcement they're working on a S
[00:42:54] velte like, or sorry, solid like compilation, which was really cool. Um, I mentioned that a lot last week, Evan, you announced that, which is
[00:43:02]  interesting. I, uh, they're thinking is it still kind of localized, but I mean, who knows, maybe they'll try it and like it too much. We
[00:43:09] 'll see. Because as I said, Evan once told me that, um, and I probably have this tweets. I think I bumped it up again because I was,
[00:43:18]  I added something somewhere. No, where was it? No, I'm not going to find it again. Fine. Um, I'd go back the other way back to
[00:43:29]  back, back, back, back, back, back. I'm just not going to find it now. It should be obvious. Cause it's like a giant. Okay
[00:43:37] . I give up. It doesn't matter. Um, I'm sure someone will point out that I scrolled right past it. Um, but as essentially. The
[00:43:46]  reason that you didn't do this before is because they didn't think that without a virtual DOM, they couldn't handle complicated logic. And I think solid has managed to prove
[00:43:58]  that that's not the case and that you can, uh, do complicated logic. So, um, yeah, I mean the, the whole argument on what's reactive
[00:44:07]  and what's not reactive is kind of so funny. I'm, I'm, I'm, I wrote an article on this too. You know, I love that I
[00:44:14]  now have articles on it and stuff, you know, I like to point out. And I, and what the, if you notice that the guy in that, those tweets
[00:44:20] , I was talking about a minute ago, that felt was a react like framework and people were probably like, what, but it's true. Um, it has a lot
[00:44:28]  of actually the same concepts of component rerunning. It just felt use the compiler, split update from create and it's reactivity is basically that when you assign something,
[00:44:39]  it tells a component to rerun. It's actually very, very much like react in the sense that your invalidate function or like your equal sign is basically turns into a
[00:44:47]  set state that makes a component rerun view, um, is, is actually has the same print as a solid, except it kind of wraps the whole render function in
[00:44:59]  a crate effect, you know, essentially. So it just reruns the VDOM on, on, on the change, but it actually separates the, the setup that
[00:45:09]  way. So it is almost like solid in that the setup function runs once. Um, so there's a lot of similarities on the, on the view side. I was
[00:45:16]  going to pull up the article, um, that I wrote a while ago, but what was it? Um, react react. Uh, it was, what was it
[00:45:25] ? It was something about react. Well, how react isn't reactive and why you shouldn't care. Um, maybe worth, you know, looking at at some point,
[00:45:37]  but essentially my whole argument here is that everything is reactive. And this whole reactive marketing thing is kind of silly because like if, if you're going to call svel
[00:45:46] te reactive, you have to call react reactive. If you don't, don't call those reactive, then maybe, maybe there there's a category where you view and solid
[00:45:56]  or reactive and those two aren't, but potatoes, potatoes, you know, Yeah. I mean, it's because the components aren't the thing that update, right
[00:46:17] ? It's, it's a granularity consideration. Um, it's so weird because everyone's used to the component model now that it just kind of expected to work that
[00:46:28]  way. But before react, things were more like solid. So react changed things in a, in a, in a interesting way, which was good. It's funny.
[00:46:38]  We're, we're sitting here and we're, we're making jokes about, about how, how, um, like actually I can just look at my notifications and
[00:46:48] , and pull something out here. We're, we're making jokes about how, how, how react, um, uh, re-renders essentially. Um, and
[00:46:57]  this is all April fools. So don't take this too seriously, but essentially the, the, the whole, the whole thing is like, go find an old Jordan
[00:47:11]  walk video. Um, and you, the re-rendering is seen as a blessing. Like they solve the problem by just re-rendering everything. It was considered
[00:47:23]  a revelation. And, you know, 10 years later, we're sitting here kind of going, ha, ha, ha. We don't care about re-rend
[00:47:32] ers. The VDOM is just virtual rendering. It's not real rendering. You know, like, I mean, this is all just people being sarcastic and I
[00:47:40]  don't, I hope it doesn't get too out of, uh, out of control. Obviously this is just, uh, this is just April fools kind of gone,
[00:47:48]  gone out and gone out. But I just, I just wanted to kind of put out there that like, there's good things about re-rendering too, right
[00:47:59] ? There's trade-offs here. It's just, it's, it's just funny because we've kind of come around full circle because when, when react came out
[00:48:05] , everyone's like, wow, you've somehow made re-rendering not completely suck for performance. That's what they solved. And now we're like, what do
[00:48:15]  you mean you're re-rendering? That's like, so un-performing. It's because the whole, everything else got way more performant. Now
[00:48:22]  when we look at the re-rendering, we're just like, ugh, you know, but it's, it's, it's just, it's a,
[00:48:26]  it's a mentality shift. Um, you know, and I don't, who knows, you know, maybe it'll come back around again. You know, there'll
[00:48:37]  be a reason for it. You know, these things always like, it's always some other factor that plays in that changes what is actually practical. It's so hard to
[00:48:44]  predict. I, I've told people this story before. I didn't expect solid to be where it is today because I honestly thought, you know, even though I
[00:48:55]  didn't feel that way, that people didn't like, you know, the, the, like, they liked this re-render mentality. And I'm like, it
[00:49:04]  just, it doesn't work for me because it's like, it didn't feel right. Like re-rendering always felt really imperative to me. Like, like we
[00:49:11] 're just like creating the scene. I used to do 3d, um, I, uh, you know, do graphics programming and I, it was mostly 2d
[00:49:17]  actually, but like, I tried to make video games and it felt like the render loop. And I was just like, I guess that's a model, but like,
[00:49:24]  I, I love the declarativeness of HTML and DOM and reactivity. So like when I, like, I never got into react early days, I got to react
[00:49:31]  later. Cause I came to respect it an incredible, incredible amount, but like it, it's funny. Like it's kind of like fashion, you know, and
[00:49:42]  it kind of goes back and forth and in, in season. So we shouldn't be too hard on any of our opinions because any moment they might actually like some, something
[00:49:50]  fundamental might change. Yeah. Um, solid reading state does more than just reading state. Yeah. It creates a subscription and actually view and view works the same way.
[00:50:08]  Right. Um, I thought about it at the time views direction now is actually one where I could probably jump on. Like let's, let's face it here. Like
[00:50:26]  they they're adding the features. They have all the stuff. I just wasn't convinced that view would actually move at this pace. And like, you gotta, maybe
[00:50:34]  this is like a little bit harsh on them, but they, they had everything there and then they hid it behind stuff like the option API. I found it frustrating as hell
[00:50:43] . And I mean, there's decisions for that and there's trade-offs and Evan is kind of a genius. Um, you know, view is the most popular or
[00:50:51]  most starred framework. It might not be the most used or whatever. Um, although it's still way like mountains above svelte or whatever, like, it's
[00:51:01]  like, it's funny when you actually look at usage, um, like react is like, like jquery, like up in the sky and then kind of halfway mark
[00:51:09]  is angular and view. And then svelte's like just getting off the ground and solid is literally like a flat line. Like you can't even see it's on
[00:51:16]  the grid. And most frameworks are actually down there by comparison. So like view is doing some, some, some of the, some good stuff to clearly doing the right
[00:51:25]  things. And I think everything they've done directionally, um, with version three is like what I wish they did years ago and they could have, it was, and
[00:51:33] , and that's where my whole thing is. I think views actually getting out of the shadow finally, like, yeah, we're taking ownership of ourselves. It took hooks
[00:51:41]  to kind of be that nudge, but I think views now going like, okay, we're not just that. Like some people might have a cute view of kind of
[00:51:48]  copying react, but I think it's just careful because the thing is when you have a reactive system, fine-grained reactions, and I said this before, you
[00:51:54]  can kind of model whatever the hell you feel like. So in a sense view has that same kind of superpower that solid has. I chose to just go hard and just go
[00:52:04]  like, what's the best possible thing I can do with this view is kind of taking more of a perspective of like, well, people like this, so we can add
[00:52:12]  that people like this. We can add that people like this. We can add that. Yeah. I mean, view can be everything to everyone. So, I mean
[00:52:20] , solid could be too, but philosophically, that's not just not where I'm sitting and I don't have the means. Like what kind of resources does it take
[00:52:28]  to make it? I think it's really cool in the solid ecosystem that people are doing that on their own. And I think that kind of attitude and embracing of experimentation,
[00:52:38]  it's like what makes it so exciting to be involved in the solid community. And hopefully when we go look at the kind of hackathon submissions, we'll see some
[00:52:46]  of that ingenuity, but view just brings it into the core. They're just like, oh yeah, that framework has something cool. Oh, they're showing a new
[00:52:55]  way to do performance. And that's the power of primitives and reactivity. I think view has a little bit of bulk that they have to get around because they have
[00:53:03]  the VDOM and all that, but give them a couple of years, we might be looking mighty similar. I mean, is that enough for me to drop using
[00:53:13]  solid right now or doing solid? I don't know. I'm keeping things moving. I hope my gut feeling is by the time that happens, solid will have new
[00:53:25]  features. We'll have proven it's how streamlined and effective it is. And view might be just everything to everyone, but that might make it nothing to someone. Do you
[00:53:38]  know what I mean? Like it just might be too much. So would I join up with you? Not where I am right now, because I think there's philosophical
[00:53:48]  differences, but I think it's a great framework and I think they have everything they need to be successful. Man, you're just having fun with it. I think O
[00:54:04] ren's been making the devil's advocate arguments all day long in replying to his parody tweet, and he's on it tonight. Oh, man. We shouldn't
[00:54:19]  be having too much fun with it. I mean, as I said, what React has done and has achieved is incredible. Yeah, I mean, I think there's potential
[00:54:32]  there, of course, I never have time to do this stuff myself. People contact me. They're like, oh, do you want to write a book or write
[00:54:39]  a course? And I'm like, yeah, that sounds great. And they're like, oh, and we'll pay you. And I'm like, I don't
[00:54:44]  care about the money. I don't need the money. I just need the time. If there are people interested, and some people have started on those projects, like if
[00:54:50]  you feel like you're good at writing and you want to like get into solid and, you know, do that and write a book, like there's people that you can
[00:54:57]  make, I mean, probably not a ton of money, but there are people that will help you develop, but pay you to develop a course or make money off this
[00:55:03]  stuff. I just don't personally have time to do this myself. And I just keep on getting DMS from people about how they'll pay me. Oh, here's
[00:55:09]  1200 bucks to do this. And I'm like, I just don't have time. Yeah. I mean, this, this comes with time and stuff. I think
[00:55:25] , I think the hackathon helped there. There's some, there's people doing series of videos. I want to like give shout outs to Andres Roth, who did
[00:55:33]  a five part series on making a grid component. And Travis, people have your last name off, who's been making videos about bedrock, which is kind of like a
[00:55:44]  layout system. People have been kind of getting into doing more deep stuff, but the truth of matters. YouTube videos are like a grifter kind of mentality. Like I
[00:55:55]  don't fit into the typical model. What you do is you make a 20 minute video, you focus on a topic, you do high production values and you do something shocking
[00:56:06] . And you, that that's the formula. You don't get deep content usually. So, you know, it, it is what it is. Why is loop
[00:56:16] ing done differently in Solids.jsx? Because it runs once. Essentially, let me, and it returns real dominant notes. The easiest way to think about this is
[00:56:26]  you can't interrupt a map function, right? Like, like, it's like a 4H, like the difference between using a 4 and a 4H. Like
[00:56:35]  when you, when you go array.4H, you can't interrupt it. And in the case of we're mapping to real DOM nodes. So if you just go
[00:56:44]  array.maps, you got data and outcomes DOM nodes, you change something, you need to map it and you need to recreate every single DOM node again. That's
[00:56:54]  not efficient. We, we need, we need to be smarter than that. So our control flow needs to use specialized helpers that basically memoize based on the data
[00:57:04]  changes. So because we use reactivity, the complexity is pushed into the data instead of into the view, the view is really dumb. The view is just HTML. It
[00:57:12] 's just, and the benefit of that is though, is that because the view is dumb and just HTML and just DOM and whatever, like it's very composable because like
[00:57:22]  the DOM is just composable. We don't have to worry about that. All the complexity is pulled into the data and our data model happens to be composable too
[00:57:31] . It just, it's, it's just kind of interesting how that win happens when you kind of try and push it into the, the rendering it, like the complexity
[00:57:39]  into the DOM, like react as it, you're innately not portable. So it's, it's, it's just a different kind of thing, but essentially it
[00:57:49] 's just a special map function. We don't use a compiler, which I think is really important for people to understand. Our control flow are not compiled hooks. They're
[00:57:56]  not like, like, like Svelte has a special syntax and, and, and, and whatnot. Like we aren't using the compiler to do anything special.
[00:58:04]  You could go, you can use a map function like react, or you can go use ours, or you could write your own thing that memoizes or doesn't memoize
[00:58:13] , or you can do anything else. Solid is like just JavaScript in that sense. I know people will point at the control flow and be like, that's not just JavaScript
[00:58:20] , but it's just a, it's a convenient container. Like you write a helper function and you put in the JSX, you're like, well, maybe this
[00:58:26]  should be a component. And when we do this in react all the time, like, uh, like how should I put it? Like reacts doing it in react,
[00:58:33]  like error boundary and suspense are if components, they're just ones with extra logic. So it's easier to wrap it up. Right? Like go build a virtual list or
[00:58:46]  pagination, or even just doing efficient rendering in react in general, where you don't want to bother mapping everything into new VDOM nodes. You can actually get
[00:58:56]  performance by not creating new VDOM nodes. You you're going to want a special helper function. And once you go that way, why not make a component? And
[00:59:05]  once you do that, why not that just be the pattern? Because everything composes from that point. It's just another primitive. It's another tool in your toolbox
[00:59:14] . And it, it, it kind of scales up really nicely because your four component might become your paginated component literally by just changing the name of the component. It could
[00:59:22]  have the same signature, essentially. Like it's just all apples all the way down or whatever this saying is. All ducks, ducks all the way down. Right? Like
[00:59:33] , I, I think this is incredibly powerful. And when anyone looks at solid and goes, oh, that's not, that's not just JS, the, the
[00:59:39] , the, they're completely missing the point, which is why I wanted to stop a moment and explain this. Probably not, but who knows? Yeah. See,
[01:00:04]  that's the problem. Like, do you, do you spread yourself too thin by trying to do everything for everyone? I think Vue should just keep their philosophy. They
[01:00:13]  are the progressive framework. They build in layers. They keep things easy, low floor, high capability. What they're, they're, their best approach right now is convince
[01:00:24]  people in a sense, by just doing what they do really well, that maybe Svelte isn't the future. I think the thing is people who get into Svel
[01:00:31] te now have kind of decided that Svelte is the future. Like things are just going to head that way. And maybe they're right to a certain degree,
[01:00:39]  at least on that side. But what I love about solid is I think we kind of showed that there's a future that's not like Svelte. Like we can
[01:00:45]  get performance, we can get power and not go all in on compilers in the same way. I think that, I think that's kind of why there's this
[01:00:55] , like why we're going to be like the, the, the, the kind of the opposite sides of things, because for a while there, you talk to someone
[01:01:02] , they're like, oh, the future is clearly Svelte. And there's, it's a pretty compelling argument, right? It's just HTML and JS and
[01:01:09] , and CSS, and it's all just there. And it feels kind of like, you're just doing the normal thing. And I don't have to get into like
[01:01:16] , how that's an illusion, but, but here's the, here's the thing. Even if that's like an incredible development experience, and I think it is
[01:01:26] , it's not like JavaScript is ever going to change the way, be that way. It's not like, it's not like if you take Svelte's JS
[01:01:35]  that one day when, when JavaScript gets reactivity natively, that it would work anything like Svelte. It couldn't, because, I mean, this is
[01:01:42]  more technical, but it's the lets that are special and you wouldn't change the behavior of all variables in JavaScript to get there. So like Svelte offers a really
[01:01:54]  nice abstraction that feels good, but it's a different language. It's not, it's not, it's not just JS, because JS will never be like that
[01:02:04] . Yeah. God, I could love, just give, give me more time in the day. I mean, I, that's what I, Jack is, Jack is
[01:02:22]  great, right? That's the, the secret. His, his 30 minute introduction to solid is one of the most practical down to earth ways of getting solid. He
[01:02:32]  built a real site. He made it, he made it real. He, he had the right balance of flair and real technical, like with all, I, I
[01:02:41]  think Jack's video is, is great. And, um, another great one was one Theo did, um, with, uh, with the TRPC, like building actual
[01:02:49]  things. I think a lot of the conversation I said on YouTube is a lot more shallow than that. So I, I, yeah, I, I think, I
[01:02:56]  think it's yeah. People. Yeah. Jack is amazing. Right. Turtles. Yes. It was turtles all the way down. Sorry. In the. Okay.
[01:03:16]  Is it though? And you might think this is funny coming from me. This is a comment about the V Dom and. I'm, I'm, I'm,
[01:03:32]  I'm, I'm going to, I'm going to, I'm going to, I'm going to provide a different perspective that you probably. People aren't going to
[01:03:44]  really get maybe. The V Dom is a construct. Okay. Look, what is a V Dom? You might be wondering, but V Dom is a construct. And
[01:04:00]  what that means though, is just that it is virtual. Okay. And most V Dom implementations right now basically virtualize the Dom that's called a virtual Dom.
[01:04:14]  But if you go ask like Dominic Ganaway, creator of Inferno, what the V Dom is, he'll tell you it's not the static structures.
[01:04:22]  Cause those can get hoisted out kind of the way we hoist out our templates. It's the holes. The V Dom to him is the holes. And if
[01:04:29]  you hear people talking about reactivity and what, what it is, it's also the holes. So what actually is the V Dom or the future of the V Dom,
[01:04:42]  if, if, if you can optimize in the same way and pull out the static pieces and it's just the holes, the difference between a reactive approach and a V
[01:04:51]  Dom approach is the difference of being top down memoized and being a subscription kind of event that, that is the diff the difference. And both of those approaches can get incredibly
[01:05:07]  optimized. Now, to be fair, if you leave the, because the events are very granular and piecewise, it's easier to write those in user land and it
[01:05:19] 's easier to have that control completely in your hands, which is solid's mentality, right? Like that, that is the thing that no V Dom is that we can give
[01:05:27]  the power to the users and, and, and they, they can control it. And that's the framework. However, if you, if you're talking to the top
[01:05:40]  down memoization and the dirty checks kind of deal, and it's just kind of driven top down by that definition, you could call Svelte a V Dom.
[01:05:50]  I don't, I don't, I know that's, that's crazy, but just, just bear with me. The further you go into compiler land, you're
[01:05:57]  going to go more that direction. You could call Marco six a V Dom by Dominic's thing. These use the language of reactivity is what I call it, which
[01:06:09]  is understanding that there are basic primitives, that there are signals or state or observables, that there are derived values, that there are side effects. There's a
[01:06:20]  reason why react converged with reactivity in terms of things like react didn't invent that language that hooks that use. We've been using that language since like forever in
[01:06:33]  reactivity with you or with knockout or mob X, but there's a reason they landed on the same way. It's a very good way of expressing intent and expressing
[01:06:41] , you know, what's pure and what's effective. And it, and the thing is, if you don't use a runtime reactive approach, like Svelte
[01:06:51]  and you compile it away, all you can do is memorize because you're not automatically dependency tracking. You're not, you, I mean, you could compile in an event
[01:07:02]  system, but at a certain point of optimization, you're just like, well, why even have the events if I already know what's going to happen? So what
[01:07:09]  I'm getting at is it might not be a V DOM, but that mentality that react represents, and if you've seen react forget, it's basically Svelte.
[01:07:22]  Like it's one mentality rendering and solid is a different one. And it just so happens that every framework pretty much after react came out, decided that they were just going
[01:07:35]  to go that direction. Solid like frameworks existed before react, but everyone kind of just jumped on this V DOM thing. But my point is there is still two fundamental approaches to
[01:07:49]  doing this and they both can be optimized to incredible amounts. And I think, you know, compilation can be used for both. And that's why there's a difference in
[01:08:02]  the approach and the difference in the compilation and the perspective here. And I, I think in a sense, the V DOM versus no V DOM battle continues for many years
[01:08:13]  to come, just in a different form. Hopefully that makes sense to some people here. I'm sorry, I might be kind of going off on a tangent here. We
[01:08:19] 've been talking already for an hour, but I think, I think, I think this is important to understand. Well, this is what I'm getting at. Like
[01:08:33] , we have a universal renderer. Is it a V DOM? No, it uses reactivity, but it's reactivity sort of a virtual representation of a hierarchy.
[01:08:42]  Maybe like we could do react native with solid. We don't necessarily need a V DOM, right? Because you can V DOM suggests that you need to do a bunch of
[01:08:52]  work and then you need to diff it, but you can also break the work up into small pieces and, and I'll only apply them like V DOM. You still
[01:08:58]  apply patch a bunch of things. Like in the end, once you do all the diffing, you have a set of a small set of discrete updates. A fine green
[01:09:06]  reactivity system gives you a small set of discrete updates. So it's kind of the same in the end. When you have like a third party system, even without the
[01:09:14]  DOM, you still have this ability to do granular updates. So I don't think you need a V DOM. I think that's kind of the illusion. And one of
[01:09:22]  the things I've been trying to disprove a lot with solid, but it's just like different sides to the same coin. Right. Yes. I'm not going
[01:09:39]  to get into that right now though, but yes. Yeah. And yeah, there's a lot of reason. Yeah. This was talking about Jordan walk, right?
[01:09:52]  Right. But we, we solved this different ways over time. MobX showed that how you can have predictable reactive updates. That was a huge thing and make it glitch free
[01:10:02] . And you know, that we've been pulling into that in solid. And I think, I just think that like both sides have kind of evolved since that time period
[01:10:10] . Oh, I'm sorry. I, I, I clearly, clearly offended someone. Yes. Yeah. He, there's a good clarification. Marco six is completely
[01:10:36]  granular. Um, like it doesn't use a component model. So in that sense, it's closer to solid in terms of execution. My, my point was in a
[01:10:47]  sense, it's not events. It's yeah. I mean, it gets into a gray area. I guess the, maybe the optimal place is somewhere in the middle
[01:10:56] . Um, maybe, but what I'm getting at is I think this top down versus event things is going to carry on for a while. Yeah. I don't
[01:11:08]  know enough about this. I know people have been integrating it with solid, but that's all I know. Okay. We're going to continue here because this week in JavaScript
[01:11:16]  has been going on for a while. And I know this is everyone's favorite segment of the show, but we do have other stuff to go onto and I have more points
[01:11:21] . We're not even done this week in JavaScript. This is just the react segment. I already talked about Marco. Check out the workshop. Um, solid community meeting,
[01:11:29]  um, went great. Um, we talked for like two hours. Check out the video for that. Okay. Okay. Let's, let's, I got a
[01:11:37] , I got a new topic here. Um, I wrote, I made this chart in August. Oh, come on. What happened there? I mean, I made this
[01:11:50]  chart in August last year, and I was trying to show people the difference between like Marco and quick and like everybody else. And some people got it. Other people didn
[01:12:02] 't it's yeah, this, this was an eventful week, right? Yeah, exactly. I love, I love this thing because if you're not familiar with this
[01:12:12] , this is elder JS. This is Astro. This is quick. This is Marco. This is view view, press Gatsby. And then these ones actually have
[01:12:18]  their name, but I wanted to show that like, if you kind of have the spectrum and this has helped me for years to model things, there's things on the multi
[01:12:24] -page app side, things on the single page app side, things that lie primarily static generation and things that are server rendered. And to be fair, some like next
[01:12:33]  was like, used to be kind of more over here and whatever. I arbitrarily kind of play stuff where it kind of mostly gets its usage and the positioning inside the quadrant
[01:12:43]  is like a little bit off, but you know, the logos are kind of big, you'll forgive me. But essentially this was pretty good start. Cause people are like
[01:12:51] , Oh, these are not like the others because Astro came out and people are like, Oh, so what, how's it different than next? And you like
[01:12:59]  some technical explanation and people are like, yeah. So it's like next. And you're like, no, I'm like, it felt really deflating to be
[01:13:06]  on this side and people not get that. Like, it's like, like it's polar opposite or it's like somewhere else. So I made this to kind of differentiate
[01:13:15]  the grid, but this one's been an old one. Astro has been kind of, yeah, sorry. It's a single page app and multi-page app
[01:13:22] . This has to do with routing to answer this question. And, and essentially single page apps are like the ones we know where that you react like client side routing. You
[01:13:34]  load up and it can be server rendered too, but essentially once you're like in the browser and you're looking at your app, when you click on the link, um
[01:13:40] , some JavaScript runs, re-renders some, or render some stuff in the client, maybe does some data fetching or whatnot. And essentially every time you move
[01:13:49]  around, you you're still on your page and it's going like Twitter here, I'm pretty sure is a single page app, right? See, no page reloads
[01:14:00] . If I opened up the elements on here on the page and I do this, what you're going to see is this some part of the body in the head maybe flick
[01:14:08] ered, but essentially this HTML did not flicker at all. Right. See some, like if I go to, if I go to, if I go to Google
[01:14:19]  search and I type something I'm, I'm, it's a fast page, but you see the whole thing like actually flickered, like that's multi-page,
[01:14:35]  single page. Okay. Now different frameworks are act like it's an architectural choice of how you do your routing and it's built in. Even when you can output multiple
[01:14:47]  pages, like some source generated stuff, like Gatsby, you might put 50 pages. Once you load it in the browser, the client takes over and that's what
[01:14:57]  a single page app is. Right. So essentially this, this really helped me kind of say like, you might be like, okay, well, isn't this bad
[01:15:06]  or whatever. There's benefits. You saw how fast that Google search page loaded. They, they use a framework called whiz I believe on Google search. It's internal
[01:15:15]  Google framework, but essentially like, um, this, this has the ability to have incredible loading. It's very good for e-commerce. It's very good for
[01:15:26]  things where low performance, SEO and stuff matters. Um, and the experience doesn't necessarily have to be bad. You just have to be smart about it and it can be
[01:15:33]  optimized to crazily. And anyone who's been on my stream for awhile knows this and go watch the Marco video. I'm not, uh, the first Marco video,
[01:15:41]  not the, if you want like a better idea about MPAs and like that, but essentially this has significant impact on how your site performs and what, what characteristics
[01:15:53]  it has. And, you know, uh, anything that can do SSR technically can do SSG because all server static generation is, is basically taking that, um,
[01:16:05]  server app and then rendering the HTML ahead of time, essentially. So on this side, it means just like, if you got like a bunch of pages, like getting to
[01:16:15]  static it's actually really easy at that point. Cause it just means that like, you just, you just render the page, you know, you already have a bunch
[01:16:22]  of pages conceptually, you just render them ahead of time. So like, like any dynamic content is already loaded into it on this side, it's a little bit more
[01:16:29]  interesting because there's a single entry point in a single page app. Like all the code goes through and then like it runs through a client side router on the server. So
[01:16:38] , but in the end, you end up with 50 pages that all load the same main JavaScript bundle and then code split the stuff that's specific to their page. So
[01:16:47] , but he's, but it still works out to be the kind of same thing. So generally speaking, every SSR framework can SSG. And so in a sense
[01:16:57] , SSG maybe isn't a real category forever. And yeah, the Astro guys are very excited that next release next week, they're actually releasing server rendering for
[01:17:07]  Astro and they showed this rocket. They took the Astro rocket and shot it into the hemisphere, which inspired me to actually update this graphic a little bit. And to
[01:17:16]  be fair, I'd already forgot this conversation here. Cause the other guys told me that they added a server side rendering, um, you know, uh, as response
[01:17:25]  to my first graphic and I, I had even forgotten that, but essentially, um, where am I going back here? Um, why am I just going? Okay.
[01:17:37]  Let's, let's go back to my profile. I think I went too far back. Um, I updated the graphic here and I added a whole bunch of new stuff
[01:17:47] . And sure enough, as soon as I did this, everybody was like, we support SSR. Eleventy was like, why are we down here? We
[01:18:02]  support SSR. Elder already mentioned supports SSR. Gatsby added SSR, um, like, and don't get me wrong. When I made the original chart
[01:18:12] , most of them didn't. But in the last like six months, eight months, they all added SSR. Like we support SSR. We support SSR
[01:18:20] . And I was like, oh, okay. Well, okay. Sorry. Basically this, this, this whole graph has actually collapsed. Um, so yeah, I do
[01:18:31] , this is a good distinction. No, it's not an MPA because it still has a single, it's a single app. Okay. Sure. Okay.
[01:18:42]  Sure. If the JavaScript is turned off, then yes, I suppose, because my definition for a single page app is single code entry point. Technically remix does have a single
[01:18:59]  code entry point, but if you never load that JavaScript, then technically you can classify it as an MPA. I would never classify remix as an MPA because architect
[01:19:12] urally it is not an MPA. But if you remove all the JavaScript, there is no code entry. So then technically it's, there's no difference between it being
[01:19:25]  an MPA. But as I said in the past, removing the JavaScript from a page is kind of uninteresting, right? Like no one actually wants to do that
[01:19:34] . It's cool that it works, but it's also kind of like you want the JavaScript. And that's like, there's a huge difference between a framework that is
[01:19:44]  all or nothing, like turn off the JavaScript. Oh, it's, it's, it's, it's gone. Or a framework that's like, we can add
[01:19:51]  just the JavaScript that's needed as we need it because the ones that just do this turn off trick, usually when they turn it back on, you have to load everything
[01:20:01] , right? And those frameworks are all the ones over here, right? Everyone over here has the ability to turn JavaScript on and off again. This is not a remix unique
[01:20:09]  trick. I mean, I don't know if Next.js has exploited this, but trust me, all you do is there's a, there's a tag that
[01:20:17]  goes on the page called script. You remove that and you can do the, you can do this trick. And these frameworks on this side all have the ability to add only
[01:20:29]  just the JavaScript that needed to be interactive. So instead of being like binary on off, these ones are like some little bit here, which is incredible because it means that you
[01:20:38]  don't actually have to sacrifice anything to get incredible page load performance. I mean, yeah, exactly. I mean, it's cool. And there's some big companies
[01:20:52]  that actually use this approach. Not PHP, but actually use React for this. Netflix, to my knowledge, actually server renders on with React, and then kind of does
[01:21:03]  their own hydration thing. They found the client side React to like hydration stuff just not good enough. So they actually like server render React, I believe, I don't
[01:21:13]  know if this is still true, and then do their own JavaScript interactivity on top. And there's actually a great, great little thread on the remix board. Some of
[01:21:23]  you have seen my previous stream that had showed how like that Marco example, like using partial hydration just completely dominated a remix example. Because again, all the JavaScript, just
[01:21:37]  what we need, you know, like mentality. And Jacob was like, well, I wish you'd just benchmark this one. And he actually made a version with remix that
[01:21:46]  was just as performant as Marco minus streaming. Like technically on the desktop, Marco was still ahead because of the streaming. But essentially, what he did was he turned
[01:21:56]  off the JavaScript and then he added his own script tag and hand by hand, hydrated it, you know, the points. And this one's very easy. It's compress
[01:22:05] ing comments like you've all seen this example like a billion times now by this point. But, you know, sorry, not that one. I didn't mean to click
[01:22:14]  that one. If you if you go here, you have this ability to press, compress comments, right? So he just looked for the class for these comments, add
[01:22:21]  a little custom JS, probably took him like 10 minutes, you know, like no time to just add some custom JS gets its functionality. And it was just as optimal for
[01:22:30]  this case, obviously, more complicated cases, it's hard, it's harder to scale. But essentially, I think this is really cool because it kind of showed like,
[01:22:40]  yes, you can turn off JavaScript and then just add what you need. What's really cool, though. You know, that's what's cool about the web, what
[01:22:48] 's really cool about these frameworks is, they can just do that for you automatically. Like, you don't have to go write some hand vanilla JS and stuff. You
[01:22:53]  just like write the declarative stuff. It's like, I'm writing my app, here's declarative code, and then just bang, you get that benefit. So
[01:22:59] , you know, what I really liked about that example was, it showed that like, yes, you can always do this. And, and these frameworks have incredible power
[01:23:10] . But there is real value to doing what partial hydration, right? Otherwise, you wouldn't even bother, like kind of making that kind of example, right? So,
[01:23:18]  I think I think it's really interesting, as we move towards this, because it's the same argument made with like, the Rails side, they're like, well,
[01:23:26]  we can just sprinkle JS on but now you're kind of managing two apps, right? You have your server rendered app and you have your JavaScript app. And so that
[01:23:35]  works for some people. And maybe that's the direction Remix will go on this. But I think it's really cool that the frameworks on this side, especially the SS
[01:23:44] R ones, basically give you that benefit while letting you maintain a single app, right? Well, the thing is, why would you want to be a good SSR
[01:23:56]  solution? Because it's easy. Like, if you're doing static, doing it on demand is not that big of a stretch. And now that you're good SSR
[01:24:05]  solution, well, you just open up a whole new category. And you know, the real kind of underlying benefit here is things like serverless functions and the edge are
[01:24:13]  kind of becoming the new CDN. Everybody wants to be the dynamic, like the new, the new, the new static is dynamic. Like, that's, that's
[01:24:22]  the mentality here. So everyone on the bottom is coming up. It's just, it's just, it's just how, it's just how these things are going to
[01:24:29]  go. The vertical thing here is collapsed. The horizontal thing is starting to collapse. That's what I'm interested in. Our whole focus this last year, you can tell
[01:24:38]  since January, I've been on a mission. It's looking at how we collapse the graph from left to right, not just up to down. I think we're
[01:24:47]  looking for a universal solution. I don't know if that solution is going to be good for everything, which is ironic, but we are definitely breaking down these walls and why
[01:24:56]  I don't think this graph is going to be useful. Like, I don't think there'll be a third version of this graph. I think it's served its purpose
[01:25:06] . Yeah. I mean, hydration is tough and we've covered that and yeah. Yeah. I mean, there, there are some costs on the server running side
[01:25:29] , but until you get something that's really expensive, like I can show you a benchmark where Marco or solid, like it is like 10 times faster at server rendering than,
[01:25:39]  uh, than react. Like it's, it's, it's not very hard to create that scenario, but like you're never going to see that on a hacker news
[01:25:47]  page or something. Right. And it's, and when frameworks block, that's another place where it's a, it's, it's, it's a bigger
[01:25:53]  impact blocking and not streaming than the, than that stuff. It's cause like, like, let's face it, small page, one millisecond, 10 milliseconds. Tell
[01:26:01]  me the difference. Like you spent, I don't know, 90, 110 milliseconds over the wire transferring it. But like, you're not going to notice that probably,
[01:26:10]  but when you go bigger, you know, eBay scale, 10 milliseconds, a hundred milliseconds, 20 milliseconds, 200 milliseconds, you know, that, that, that,
[01:26:25]  that, that, that makes a difference that adds up, you know, static renderings another place where it adds up when you have like, you're just generating a bunch
[01:26:32]  of stuff like that kind of bad, like for the most part, the end user is not going to feel this cost of reacts slow, slower rendering, but, but
[01:26:41]  you know, if, if you're being billed by the millisecond, maybe it'll matter. So I guess we'll see how things go. Okay. So yeah
[01:26:49] , essentially this, this, this graph was fun, caused a bunch of conversation again, as I mentioned, everyone in the SSG crowd told me that it's already collapsed
[01:26:58]  vertically. So let's, let's focus on it collapsing horizontally. Okay, cool. What else was fun this week? Oh yeah. Misko. We had him
[01:27:07]  on stream creator, quick creative angular wrote a new article. He kind of continues. If you, if you all remember, I wrote an article about, you know, how
[01:27:19]  we found the solution to hydration. Misko is now given the more technical explanation. So this is a good followup to my conquering hydration article. And he, he
[01:27:26]  gives an equation. And I think I, I, this one always speaks to me time to interactive equals hydration cost time page complexity plus size. He basically wrote a linear
[01:27:36]  equation here. And I think, I think this is, I mean, it's kind of obvious if you have an equation like this, like you could try all you
[01:27:47]  might, but the only, the only way to flatten the line is to, is to remove the, I forget what this is in algebra, but remove the multiplier, so
[01:27:56]  to speak. Right. I forget what the term is. It's been so long since I didn't, uh, high school math or, but essentially he's saying,
[01:28:05]  if you can remove the hydration cost, that's the only way you compensate for the fact that page complexity is inevitably getting larger size gets larger too, but, but like
[01:28:15]  size complexity ultimately isn't going to cost you as much as page complexity because of the multiplier. So this is, this is a good way to think about that. So miss
[01:28:24] , miss Misko's basically put his whole focus on zeroing this. And I think, I think that's pretty reason reasonable approach. And we're going to see more
[01:28:34]  frameworks, not just quick and Marco solve this in the future. Nope. I I'm pretty sure I could be wrong about this. I, I haven't used G
[01:28:47] atsby as much, but almost to my knowledge, almost everything that uses react is on the single page app side. Like even if it generates HTML, it's not actually
[01:28:57]  like the, the app has a single entry point. I could be wrong about Gatsby though. So maybe I am incorrect. Yeah. Yeah, exactly. Yes
[01:29:06] . So yes, that's the thing. This is why I made this chart. And it's because, where is it? It's because most people assume that like M
[01:29:16] PAs are just like, like most things are not doing MPAs or MPA like optimizations. There is a very, it's a much smaller group over
[01:29:25]  here, right? So, and there's trade-offs people like, but the thing is once MPAs figure out a hybrid model of routing, I think they're
[01:29:40]  going to look a lot more attractive. You can, you see the closest thing to the line on this side is this framework called hydrogen from Shopify. This is react server components
[01:29:48]  coming in. And this, as I've mentioned, react server components are kind of like react designing an MPA. And what you're going to see here is hydrogen
[01:29:57] 's kind of coming in from this side and Marco and Quick and Astro too. I know they're doing some research on this. I've been kind of helping and suggesting
[01:30:07]  the direction there. They, they, they're, they're coming this side. There, there is, there is a convergence here on this line. I ran out of
[01:30:13]  space here. So it makes hydrogen look like, and maybe hydrogen's the closest today to be fair, but this is converging this, this side. Svelte
[01:30:21] Kit has some hints that they have the potential to get there. I'm looking into this with solid. Remix probably has potential. I'm not sure if they, if
[01:30:32]  they've realized the value there yet, but they, they definitely have the potential. Next is going to go, is getting to server components. Like this is the new
[01:30:42] , everyone here is going up. Everyone here is trying to merge in the middle. So that's the new race. The only, the tricky secret to this for the end
[01:30:51]  user is the actual way to get to the middle involves actually almost crossing over and coming back at this side. Like MPAs are the secret, all the optimizations,
[01:31:02]  all the things we know are present today in multi-page apps. So that's why stuff like react server components are almost like a different framework around react. They aren
[01:31:13] 't actually react. You almost have to reinvent the framework to get there. And that's why all the react frameworks are kind of coming over and learning this stuff because, you
[01:31:23]  know, react server components gives them that, that ability, but it really takes a different type of architecture. You have to almost build it from the ground up like Marco
[01:31:31]  and QuickCap. Astro is a kind of an exception in that they wrap other frameworks, um, and get some of that, get, get a lot of that benefit
[01:31:39] , but, um, like building something for the agnostic target, kind of like web components is always a more challenge. So we'll see over time, um,
[01:31:51]  how that looks like and what patterns emerges, especially around the routing. Yeah. Yeah. But this is still all single page app. Like that's not what makes something
[01:32:06]  a multi-page app. I think this is a really important distinction to make. Um, like just because you load what's needed and code split doesn't like,
[01:32:17]  doesn't re it still means you need, you have an app with a conceptually single entry point and you still have all the code that needs to come into the browser.
[01:32:25]  Like the difference with, with these is when you navigate, they know that most of the page doesn't get rendered on the client. So they just don't send the JavaScript
[01:32:34]  for the stuff that doesn't get rent updated on the client. anything on the spa side, like basically partial hydration and single page apps are incompatible. Like it
[01:32:43] 's just not, it's not a real thing. I mean, there will be single page app frameworks that have features that are like partial hydration, like server components, but
[01:32:51]  it's because they actually changed their mentality to be like an MPA. Not that they're still architecturally like a single page app. Not today, but I'm
[01:33:03]  saying this will happen. Trust me. This, this is the new frontier. Um, I talk, we talk about a ton on the Marco stream where I have Michael and
[01:33:13]  Dylan on. If you really want to understand what the future of routing is, I wrote an article about the future of routing as well. Um, this is, this is
[01:33:19]  the next frontier. All right. Yeah. So yeah, a lot of really good discussions. We're at an hour and a half and we're still in this week in
[01:33:29]  JavaScript, um, which is good. Um, it does take some of the showcase time on this because as I said, only seven days left. Um, it's
[01:33:39]  gonna be really exciting, um, to see what people have built, right? Oh, here's, here's the Avenue thing. Sorry. Can, can we spend a
[01:33:49]  second here on the view? I already showed this last week, but I don't know if I actually took this quote. I asked him why he's still using the
[01:33:54]  virtual DOM after he made view three, which doesn't need a virtual DOM. It's just, you know, and this was the answer because view allows you to write manual
[01:34:01]  render functions and mix them with template based components. Giving up the virtual DOM is an important capability for advanced use cases where logic expression is more important than a bit of performance.
[01:34:11]  And yeah, you know me, I obviously disagree with the statement. I think you do everything without a virtual DOM. And I think at this point, maybe I hadn
[01:34:18] 't, I hadn't really proved it, you know, this is, this is like two years ago. So I'm glad that solid has at least shown people that with
[01:34:27]  a system like view, you don't need a virtual DOM to do the most advanced cases. Yeah. Yeah. And yes. Yeah. I think service workers are going
[01:34:45]  to be the thing, but it's still an MPA model, right? I, I, I never understood this because I, sorry, tangent here, but client side
[01:34:56]  rendering when it's already cached in the browser. And when you're just doing the data fetching, like the JS can be faster than trying to grab the HTML
[01:35:05]  too, right? Like the, the server rendering stuff I'm talking about isn't necessarily better, you know, like there are situations where a single page app, you know
[01:35:16] , is faster, actually just purely faster to the render in the client. Like a perfect example of this is like, I was, I was working on streaming and the current
[01:35:26]  version of streaming with solid actually streams HTML, but the original version streamed JavaScript data at the end. And then had the client render it. And on a slow network
[01:35:35] , this was actually really bad because what would happen is, um, you have to wait to hydration time to actually do the rendering. So you always showed the loading state,
[01:35:47]  you know, and everything was pushed back. It was just, sure you fetched it on the server. So it was better than JAMstack, but it was still
[01:35:53]  like, like clunky. Like you, you were so like when you stream HTML, if it takes a long time, everything just is there and it feels like it
[01:36:03]  paid and you get it sooner. I didn't really didn't like that. But the funny thing is when I replaced with HTML streaming and I looked on a fast network,
[01:36:11]  I was like, why is this like a little bit slower? I could see like, it was, it's minor, like 10 milliseconds, but I'm like, why
[01:36:16]  is it slower? And it finally, and I looked at the timeline and I'm like, how is this doing it? Well, if the JavaScript had already loaded in
[01:36:23]  the server, um, had already loaded in the client and I was just waiting on the data fetching versus the HTML, the client could get ahead on the work because think
[01:36:34]  pictures streaming in, have the shell waiting for the content under the suspense boundary. Okay. JavaScript gets there. Okay. It's waiting to go. It's all good.
[01:36:45]  We're all warmed up. HTML comes in, put it into place, hydrate everything like it was rendered the first time. Now picture a second scenario where you're
[01:36:54]  streaming the JSON instead. Load the page, draw the shell. JavaScript loads first. It renders it. It gets to the suspense boundary and it's like, well,
[01:37:05]  I'm just going to run it like normal. So it actually starts rendering the stuff inside the suspense boundary until it hits the point where it can't draw the data.
[01:37:14]  But essentially solids, uh, uh, rendering, uh, is not blocking. Right. And it keeps it like when suspense resumes, we just continue where we left off.
[01:37:23]  We don't get to me. We don't, we don't like throw away stuff. So like the stuff inside the suspense could partially render. And then when the data
[01:37:32]  came, we just continue where it left off. So technically we did more work ahead of time because the client could already render in the suspense boundary. Whereas the server rendered version
[01:37:42]  could not cause it was waiting for the HTML to come with the data. Minor, minor thing. And it only mattered on the fastest networks. It was definitely worth going
[01:37:50]  the other way because ultimately the HTML streams consistent, like streaming is consistent across all network speeds, but it was definitely interest and it can be optimized in the future to do partial
[01:38:02]  hydration and stuff. But it was interesting to me that like there are situations where the client can be faster and that, for that reason, I was like, why do
[01:38:09]  we need an MPA model? But once you actually understand, you need an MPA model to do the type of optimizations you need for MPAs, you can
[01:38:15]  always, as I said, move it to a service worker and basically get this, the single page app, um, performance there too. So yeah, I, I,
[01:38:26]  now that I understand that I can kind of justify how, why you'd want an MPA mentality everywhere. And the thing is, yeah, service worker, Cloudflare
[01:38:34]  worker, Dino worker. I don't know if that exists. I'm just saying like they all have the same API. So your code could be completely portable. I
[01:38:42]  think this is going to be really interesting as, as you know, this kind of heats up when we get more options here. some good comments. Yeah. Same
[01:39:09]  guys to me. Quick, um, builder. Yeah. Party town is genius and party town, party town is like, it's funny cause quick and on us on
[01:39:21]  the framework side, we're like, we're solving these incredible problems. We solve hydration on this stuff. Go where the biggest wins are. Party town is probably going to
[01:39:28]  make a bigger difference for any real heavy site compared to all this amazing stuff we're doing with quick and Marco and whatnot. Like the third party scripts are the killers. I
[01:39:39]  mean, don't get me wrong. There is another conversation here. here. And this perfect time because I think this might be our last conversation for this week in JavaScript
[01:39:49] . But Alex Russell essentially was like, look guys, single page apps. We haven't corrected the curve here. Year over year, this is the size of our apps.
[01:40:08]  This is JavaScript. Like frameworks are not making things better, even with things like Svelte and Solid that are super, super small. Like, I mean, maybe
[01:40:23]  no one's using us. That's why. But like, or Preact even. Like this, this is like, this is a thing. Yeah. I mean,
[01:40:31]  he was back here in 2011 complaining about it at that point. He was like, look, your JavaScript here is 20 kilobytes. But I mean, yeah.
[01:40:51]  So like, yeah, I mean, he has a point. You know, maybe this curve flattens pretty soon. This is why there's all this MPA
[01:41:02]  talk though, right? And it's an interesting conversation because I don't know. I can see Evan's point, but this is, this is, I feel like this
[01:41:13]  quote won't age well. Frameworks won't solve this. There I said it, even with something like Quick, people will find ways to mess it up. Bl
[01:41:19] aming frameworks for JSBloat is just barking on their own tree. Okay. Like, yes, it's, it's, there's a lot of reasons why sites
[01:41:27]  are slow, but like, it's funny. Like if there was a framework to solve this, it probably would be Quick, interestingly enough, because Quick doesn't use knowledge
[01:41:40] . Like most, most heuristics around doing smart partial hydration. And don't get me wrong. Partial hydration has a huge benefit over some of the things that
[01:41:49]  Quick is doing in that it's absolute. Like, you know, you don't have the JavaScript. You say one day to serialize it. It's the only way
[01:41:56] . It's not the only way, but it's like the way that kind of knowledge is the only way you don't need to use the same techniques to actually get the
[01:42:04]  sort of optimization that Marco has. The reason that, that like Hacker News demo is so performant, that being Quick on the other hand, basically protects people from
[01:42:13]  themselves, right? In the sense that you could write the most terrible spaghetti code app and Quick is able to actually load it progressively. To its merit, that's actually its
[01:42:23]  strength. But, but like, yeah, Dylan, you've seen him in the chat already. He's basically saying like, if you could shave huge amounts of bundle
[01:42:35]  size, like it's, it's going to make a difference, you know, and if other things, yeah, I mean, it depends. The third party scripts are
[01:42:43]  basically the thing. The reason I want to bring this up is basically a lot of this, the, like, there's discussions about whether this will actually change things.
[01:42:52]  But the hope is that if, if every framework is, and library being used is kind of changing to these mentalities, it will eventually impact those third party strips, scripts
[01:43:01]  as well. Um, so yeah, it's, it's, it's, it's interesting. I think, I think like partial hydration for things that are mostly static
[01:43:11] , like e-commerce are like no brainers, search results, things like that. I think though Quick does actually have the ability to scale up, um, in
[01:43:22]  a way that would help in even the most space, like terribly wired site that removes all the optimization. But yeah, I, it is an interesting conversation. Um, and
[01:43:38]  this, this one just goes on and on. You know, Alex is like, like it's good enough. You can see, he's just, he's just
[01:43:50]  tired of everyone telling him it's good enough. I'm glad there's been a mind shift, you know, Svelte. And as much as I've been,
[01:44:00]  you know, attacking, not attacking, but kind of been like skeptical on the whole transitional app thing that rich Harris put out because like it, I wasn't sure that
[01:44:11]  Svelte was really part of that group, so to speak. I do think that at least having that mindset is a positive power for change finally. And I think it
[01:44:22]  just starts with us kind of admitting that there's a problem. So yeah, I don't know. We'll see how this plays out. Um, this discussion just goes
[01:44:30]  on and on, you know, if we changed the way bundle size scales, the ones of interactivity instead of application size, they'll often inevitably impact third party code
[01:44:41]  since the hypothetical tool just be as useful to third party vendors. Yeah. So yeah. I mean, I think that's a good take. I think, I think we
[01:44:51]  just need to change our perceptive and hopefully, you know, it's, it's kind of like, uh, what is it called climate change? Right? Like
[01:44:59] , yes, maybe the small actions of an individual aren't going to tip the scale, but as long as we're aware of it and we, you know, try and
[01:45:07]  do better, hopefully it will have a real impact. Anyways, um, are we done this week in JavaScript? Does anyone else have anything else? I think, I
[01:45:26]  feel like this, sorry, that tweet today is just keep it keeps it keeps them given. Um, let's, let's, let's, let's, let's
[01:45:35]  maybe change our gears here. Let's, I'm, I think we've all kind of gotten a sense of what this week is. So let's, uh,
[01:45:50]  let's look at, um, some submissions here and see what we're doing. I honestly, I think what was really cool. I mean, if you haven't seen
[01:46:00]  it yet, um, yeah, we got five days left. So time is ticking, um, 12,000 in prizes. Um, after submissions close, we're going
[01:46:11]  to have a period for voting and finally the winners will be announced it's there is three prizes. Generally our biggest hope is that people just use it. So, um
[01:46:21] , let's, let's go to GitHub and see how stuff has been going, um, here. So let's go. I think it's in the solid JS org
[01:46:31] . Some of your solid hack submissions. So here we are 17 pull requests. So only 17 submissions so far. So, um, one closed. I wonder if that
[01:46:45] 's the test one. I don't know why it's closed. Um, actually, I guess we can look I don't know why it's closed. Okay.
[01:47:03]  Well, let's, let's, let's just go here. So number of libraries things people have tried. So let's, let's see. Hmm. There's
[01:47:11]  a testing one. That's funny. Okay. Let's, let's take a look as I, I, we might not have time to dig too deep into all of
[01:47:19]  these, but let's let's see what we can do. Uh, thanks. No, then I'll have nothing to talk about next week. Um, let
[01:47:32] 's see here. Yeah, no, yeah. Keep it going. I just wanted to do this to kind of remind people so they can see some of the cool stuff going
[01:47:43]  on. I, we probably will go through these pretty quickly now, given, given the time, but you know, let's, let's see what we're dealing with
[01:47:50] . I think it'll be fun. Submission for solid command palette. This is one of the first ones that I saw and it was, uh, it was,
[01:47:58]  it kind of came up, uh, on Twitter. Um, I think. Yeah. I mean, February 19th, this was, this was almost like right at the
[01:48:08]  submission date open, essentially it's a command palette. So it's like a full type of head kind of search with auto completions and keyboard shortcuts and looks really cool.
[01:48:20]  And what I love about the format we did here is that, um, awesome. Yeah. Um, is that we, we requested a repo and we requested a demo
[01:48:32]  so we can kind of look, hopefully, you know, everyone's good. And this gif is great. Cause you, you get the whole story here. Hopefully we
[01:48:39]  can look, play around a bit, maybe look at the code, get a feel for it. I know I said, I'm probably not gonna be pulling everything down here
[01:48:44] , but we can kind of just see what's, what's been going on. So this, this is cool. Bring it up by pressing command K. Nice.
[01:48:52]  Can I escape? Oh, yes. Okay. Click out of it. Okay. No. Increment a counter by one. Where is our counter? Oh, it's
[01:49:04]  down there. So we can click on it. Cool. Or we can command E. That works when I'm out of the menu. Yeah. Okay. Command E
[01:49:23] . Gotcha. Okay. This is cool. It's playing with all the keyboard binding and stuff. Set a personal profile. That's PP. Let's see. Sorry.
[01:49:34]  I'm, I'm just, uh, pulling a China shop here. Maybe, maybe, maybe not all the stuff is wired up. Conditional legal actions. Oh
[01:49:46] , or maybe it did something without me actually seeing off screen. That makes, that makes, this makes a lot of sense. Yeah, there you go. I know this
[01:49:57]  is, this is cool. Try pressing M. One, two, three, four, five, six. Hello there. Cool. This is cool. There's a
[01:50:18]  lot of stuff built into this, but might not be, might not be obvious to people. Oh, and is it, is this a documentation site? Oh, that,
[01:50:27]  this makes my life even easier. GitHub links. It's just, it's just nice. Ooh, solid transition group. That's cool. At least it's working
[01:50:39]  for you. Everyone tells me the solid transition group doesn't work. And since I've never used it, even though I wrote it, I tend to believe them, but
[01:50:47]  it seems to be working here. You can define actions, autocomplete suggestions. Okay, cool. Keywords, subtitles. Okay. Typical kind of stuff.
[01:50:59]  Root. Root components. It's like a provider. Passing your actions. Action contacts. Custom components for rendering the palette. And then the palette. Cool.
[01:51:15]  That looks like the API surface is incredibly minimal. You essentially configure it like, I guess, kind of like a provider. Then use the palette where you want it.
[01:51:26]  And see if I was, I guess, back to the kitchen sink demo. Try changing the active tab. Oh. Okay. Yeah. I'm probably just missing something
[01:52:06] , but it's all good. I think this is, as I said, I think, I think this brings incredible, a lot of power for something with, it
[01:52:15]  seems a very small surface area. I wonder, do I have the source? I want to look at the snippet here. Okay. These are the ones being used in
[01:52:29]  the, in the thing. Actually, what I want to actually look at is I want to look at, let's go back to the GitHub submissions and I want to see
[01:52:40] . Okay. Yeah. Okay. So this is the, yeah, I just went to the same place. Okay. Cool. Cool. Intent tests. Tests
[01:52:49]  are always cool. Cool. Yeah. Okay. Cool. Are these actually. Okay. Yeah. Yeah. Yeah. So simulating keyboard crits and all this stuff
[01:53:18] . Yeah. Testing in the place that I'm like, probably not the, the strongest in terms of all the patterns there, but that's cool. Like the full,
[01:53:27]  full set of UI tests in terms of simulating all the clicks and all the functionality. Awesome logo, by the way. Okay. Cool. As I said, probably
[01:53:36]  not spend, uh, yeah, here we are. Rooting command example in the increment. Yeah. Nice. Just to kind of see a little code thing to see the
[01:53:44] , what the usage looks like. Cool. As I said, probably going to be about that much depth on each of these. We, so we have time. Let me
[01:53:53]  read anything in the comments. Solid start has MDX support, um, and static generation. I don't know if it all works properly. In fact, I know
[01:54:12]  it doesn't work properly right now, but, um, yeah, we have some potential here. Okay. Let's move on to the next thing in the list here
[01:54:21] . Solid services. Uh, I'm familiar with Xlard. He's been making suggestions on DOM expressions forever. Um, let's take a look at this. As
[01:54:32]  I said, I might not. Oh, sweet. Yeah. Code sandbox. Here we go. Yeah. So service registry, what is this? Services are global objects
[01:54:44]  used for each of your car, shared stream, persistent connection. Okay. So maybe this is something kind of like what angular Ember has. So it's like a way
[01:54:51]  of extracting out, um, kind of like a data layer and it's looks like it's fully capable, like middleware and it basically wires the whole thing up. Okay
[01:55:00] . That's, that's cool. Um, so yeah, we have a, again, a provider to find the surface off service. Okay. Yeah. So it
[01:55:11] 's like a different looks kind of like a different it's, it's probably the service locator pattern. It's like a different dependency injection pattern here. Let's,
[01:55:23]  let's see what this looks like in action. All right. Yeah, no problem. So I'm here. Uh, okay. Please log in your name. You
[01:55:43]  can tell what, what I like entering in to these things, interrupting cow. Yes. Cool. Let's look at the code here for this. Some creative service you
[01:56:00]  service off service, which will be in the service director. We'll look at a second login. Nice gets the stuff off the form. Okay. Okay. Service login form
[01:56:16]  data. If logged in. So service abstraction kind of just handles the whole thing. So yeah, this code is fairly clean. It's It's completely kind of pulled
[01:56:30]  out and then you use it. So this looks a lot like context. Let's see. I mean, I'm sure like con let's see what the difference is here
[01:56:39] . All service. User. Login. So it's fine. Okay. So then. Okay. So what am I missing here is use service. Yeah. So
[01:56:55]  in a sense, my, my gut is, this is just like a nicer, like it's a nicer context wrapper because instead of you worrying about like create context and writing
[01:57:04]  your own thing, uh, this kind of just, yeah. Okay. So let's look at this service is logged in. Okay. Yeah. My understanding is this
[01:57:26] , this was kind of a, to get a pattern familiar and other frameworks into solid. So, um, yeah, that's cool. Okay. All right. What
[01:57:43]  is next on the list? Submit solid proxies. Also from xlord. Yeah. I, I think I see a pattern here. I think these are patterns
[01:57:58]  that you find in other frameworks that are kind of coming in here. Solid proxies. I like, I like this kind of layer. It's very much in
[01:58:05]  our style. This package provides signal version of JavaScript built in objects. Oh, okay, cool. This is cool. Check it out. Cause as you know, state is
[01:58:15]  like very, or stores are in solid or very simplistic. I wrote a very minimalist approach that basically said, we can handle everything in a basic way. In a consistent
[01:58:25]  way. This actually fills in what mob X does. Like we don't have observable maps or weak sets or weak maps. I mean, if you, a bunch of
[01:58:33]  these are coming soon, but even we don't even have a true reservable array. Um, sorry, I already showed this. It's just a contest where anyone can
[01:58:43]  enter and, and win a bunch of money. Uh, there there's a submission process here where people can, can basically share their GitHub repo and then it'll go
[01:58:56]  to a, a, a vote. It's just a, it's just a hackathon essentially. Um, yeah, so this is cool. I like the promise of
[01:59:07]  this. Cause this is something like I didn't want to include in core, especially when, uh, stores used to be part of core. I kind of moved them
[01:59:13]  out more. And there is some questions here because technically like array, most array methods are mute, mutative. So they don't really fit with the read only thing.
[01:59:24]  Like they, it was, it was kind of better to use read only patterns all the way down the tree. Um, you know, like if you, if you have
[01:59:31]  something like our state object, can you get to a nested path and you hit a map? Like what are you supposed to do? Call set on it. It's
[01:59:35] , it's inconsistent, but I'm glad to have these other primitives. Cause sometimes like a reactive map is all that you need. And I played around a few
[01:59:43]  versions of it. One of the challenges I found with this is like, you can make a reactive map, probably like three or four different ways, depending on what kind of
[01:59:50]  behavior you want it. So it's always hard for me to standardize on it, but I think it's really cool that, that we have this thing. So a
[01:59:56]  signaled object I'm gathering is probably a shallow proxy. We'll track all properties, changes automatically, setting new values, deleting or check keys, make, okay. Okay
[02:00:05] . Oh, actually no, no, no, no. I think this is like the opposite of store changing any key will cause user to trigger maybe. Oh no,
[02:00:20]  that that's the same. So no, this is just create mutable, I think. Yeah. So this, this looks like it's create mutable, but it
[02:00:30] 's not deep. It's a shallow one. Yeah. So it's a shallow create mutable. Okay. Signal array will track any change of the array automatically.
[02:00:40]  Okay. what's the difference between these examples? I'm not seeing it. Oh, it's just different APIs to fit like more solid, it's typical pattern,
[02:01:06]  but it's the same thing. Okay. So yeah, this, this, this, this, I think the potent, it looks like they only have the two so far
[02:01:14] . Let's play with the demo here. I think the potential of this approach is something like I'm great to see, it's really great to see people kind of
[02:01:21]  do these experiments and kind of come up with patterns like this. I'd be much more excited even to see like the map or the week map, because those are the tricky
[02:01:27]  ones. And ones that you can't do today really with stores, but there's a lot of value in this anyways. My name is Ryan. And implementation for this is
[02:01:39]  probably, yeah, it's just, it's an object. Okay. Yeah. Cool. Yeah. So just, so both of, uh, XLR's,
[02:01:50]  um, submission seems to add this kind of like nice, nice, nice layer on this. Um, yeah, no, no problem. Sorry. I, I, I
[02:02:01]  talked about it a bunch at the beginning of the stream too, and it's basically the, was intended to be the theme, the stream until we spent an hour and a
[02:02:07]  half talking about this week in JavaScript. Um, but yeah, the, this is all about solid hackathon. Um, and as I said, submission is still open.
[02:02:15]  You come up with something cool in the next week, you can, you can get in here only 17 entries so far. So yeah. Um, that's, that's
[02:02:24]  cool. I'm glad to see people making these primitives. Cause like, I know there's gaps here. I know solid primitives have some stuff too, but yeah
[02:02:31] . Okay. Submission for Studier. Oh, is this an app? Uh, nice. Jack, Jack has made us an app. Hackathon submission for Stud
[02:02:41] ier, an application that allows customers to create curated lists of YouTube and medium articles they want to read and then present them with nightly reading, viewing lists. The application is
[02:02:49]  not deployed. Okay. Fair enough. But a video demo will work. Welcome to a special video. It's a SolidJS hackathon release video. So a
[02:02:57]  couple of weeks back, I put out a video saying that I was going to participate in the SolidJS hackathon and here it is. It's an app called Stud
[02:03:05] ier. And the idea is that if you've got an hour a day to do some studying, it's a landing page. I've gone and set up two topics
[02:03:14]  for myself. One is this cool how to shoot manual in 10 minutes video, or I want to learn a little bit about the next date. It's up to me.
[02:03:21]  Or I can go and create a new topic by just clicking on the ad on YouTube. And I like this video. I can change the description on if I want. And
[02:03:29]  ideally at some point it'd be nice if we could actually go and trade these with other folks. So you could go and create your own learning list and trade with other
[02:03:38]  folks. But that's actually part of the reasons why I'm not going to make this into a commercially viable product is because one of my viewers actually talked to me during my
[02:03:49]  building of this on a totally unrelated topic about this really cool system called Alter class that allows you to go and set up essentially a learning class where you point at articles and YouTube
[02:04:02]  videos and you can go and set up a course and then people can go and learn off that course. So I'll be doing that with some of my stuff on YouTube
[02:04:11] . It's really fun. But I think it competes. So I'm not actually going to kind of go ahead with this really cool study here. But I have released
[02:04:22]  a bunch of code along the way, including this Chrome extension boilerplate for solid. That's what drives the extension. And I will be releasing the source code for study here
[02:04:32] . Once I clean it up a little bit, I was going to release a Firebase kind of hook library for solid that I used internally. It's actually a turbo repo
[02:04:41] , mono repo, and I've got a bunch of packages in there. But somebody else beat me to the punch on that one and actually came up with, I think,
[02:04:47]  a better library. So I'm not going to go ahead with that one. Oh, man. Jack is so humble. But yeah, no. Yeah, my videos
[02:04:58]  do not get 192 upvotes or the kind of views he gets. So yeah, I mean, Jack is awesome. And it's cool that he did submit this
[02:05:09]  after all. The app looks slick. It's too bad that it it didn't end up being something viable for him. But I still think that's was February 18
[02:05:23] th. The submissions opened like on that day. I think I think this might be the challenge of the hackathon, like trying to signal like like that you're working on
[02:05:33]  something, you know, in the other case, the other app is actually, I think, a react app. Um, so you know, it is what it is
[02:05:41] . But yeah, I think it's, uh, you could, yeah, no, it looks really slick looks really good. Um, I'm glad that he went through
[02:05:50]  and submitted it. So far, we've been looking at a lot of libraries and libraries are obviously a gap, but it's cool to see some of the apps. I
[02:05:57]  think, I think, I think apps are actually probably going to be kind of a hot topic here because I don't know how many apps we have versus libraries, although
[02:06:05]  the libraries have like incredible value for everyone. I think it's cool to see what people actually built. People always asking for examples of apps and stuff. And obviously like any
[02:06:14]  app I built for demos, like even the real world demo, you're like, there's like no way he wasn't thinking about performance here. Like he probably like
[02:06:24] , would you have written it that way? Like I tried to be honest, but let's face it here. I, every time I write something with solid, I want
[02:06:32]  people to be amazed at how incredibly performant it is. So, um, it's nice to see apps. Okay. So what do we got here? Um,
[02:06:39]  files changed. Okay, cool. Just need to find it. So let's, let's, let's, let's open this one up. Example app project.
[02:06:54]  Let me see. What's this? That's yeah. Yeah. Yeah. You're right. Okay. This is just us. Okay. So what is this?
[02:07:15]  Sudoku solver solves using backtracking algorithm. Okay, cool. Cool. Cool. Let's see this in action. Oh man. Okay. Reset. Do
[02:07:30]  I, do I get any numbers? Oh, I see. It's, I see. If you have a Sudoku, then you can enter it in here. Cause
[02:07:40]  I was like, it's like, where's my, yeah. Okay. Can it, can we find one? Oh, but then I have to enter it. Let
[02:07:50] 's see. If it's a hard one though, if it's a hard one though, there'll be less squares filled in. Right. I don't know.
[02:08:05]  Maybe people pay for this stuff and I won't be able to find like a, an example. I just, I don't even know where to find a Sudoku problem
[02:08:11] . I was, I was thinking I'd have to fill in a bunch of spaces, but, but. see. Can we make it harder? Well, that one
[02:08:26]  is hard. I'm just curious. Okay. Two. Let's, let's just do this for a second. two. Eight. Nine, five, three.
[02:08:42]  Nine. No. Oh, that's cool. It moves automatically. Even when you press backspace, nine, five, three. Four, seven, six. Four,
[02:08:59]  seven. Seven, eight, three, nine. Seven, eight. Three. Nine. Six. Three, six, one. Three, six, one. So
[02:09:33]  I'm doing something terribly wrong here. I think this is what this, this thing does. Five, four. Nine, one, eight, four. Nine, one,
[02:09:45]  eight, four. Okay, cool. Yeah. That would be a smart thing to do. Yes. All right. Solve. All right. I'm impressed.
[02:10:07]  New York Times hard. Sudoku solved very quickly. Okay, cool. Clear. What do I do with clear? Oh, okay. There you go. What if I
[02:10:28] , like, screw it up? Okay. Yeah, that's what I was wondering. Let's, can I, like, remove stuff from here? Just, like
[02:10:53] , take away some of the information? Okay. How much can we take away? Oh, I guess if we take, yeah, that's not enough. Because it
[02:11:17]  might just give it more possibilities of what, yeah, okay. Yeah, yeah. Just removing the numbers doesn't necessarily guarantee that it's actually limits. It might,
[02:11:33]  I'm sure as long as it finds a solution, if there's multiple solutions, it's, it's not gonna, Yeah, yeah, I don't know enough
[02:11:43]  about the theoretical nature of Sudoku. So, Sudoku, sorry, I'm just, like, saying it backwards. Okay, cool. All right, I think
[02:11:54]  that's pretty cool. Sorry. I got it in a state. It clearly uses some amount of local storage there. Okay. And you use the salt, the just
[02:12:18]  tailwind, comlink, and VEAT. I wonder what the web workers do. All right. What else do we have here? All right. SolidM
[02:12:44] apGL. Okay. I think I like the sounds of this. I like that everyone's been getting into the new assets we have. Makes all the libraries look really cool
[02:12:57] . MapGL.js. WebGL. Examples and Playground. Ooh, there's a Playground. Okay. No, it's. That's cool. It
[02:13:11] 's based on, looks like Solid's Playground. Okay. Yeah, I don't know enough about the Mapbox UIs. I guess you can change and center the
[02:13:22]  viewport. Output. Yeah. I mean, it's just, it's Solid's Playground here, essentially. But let's move the map a little bit.
[02:13:37]  What happens if I go minus 24? Okay, yeah. Okay. What if I go 38? Oh, man, it's. I'm probably going to blame
[02:14:01]  the Playground for this. More than anything. I'm just. I'm going up or down the coast here. Okay, so I'm going. I'm going
[02:14:21]  down. And then. And then can I go. Six. Okay. Two. Anyways. Okay, just plain. Probably drive this off state. I don't know
[02:14:53] . I guess if you had map controls and stuff, you can do some pretty cool stuff here. Looks good. Uses the Mapbox API. Obviously, me manually
[02:15:08]  doing the doing this isn't getting me too far. But okay. Very, very cool. All right. Static map interactive map. Rob map. Okay, cool,
[02:15:25]  cool. So like there's different types of. Of map representations and stuff. Okay. Yeah, so this gets pretty deep. Yeah, different terrains. Okay,
[02:15:41]  okay. Yeah, yeah. Layers. Geo size. Yeah, okay. Yeah. The example is very basic, but. Oh, tech GL. Okay. There
[02:15:53] 's a link to another repo. Okay. Yeah, I don't have time to get too deep in it. But it sounds like there's a lot of capability here.
[02:15:59]  That's cool to see. There's always a need for these kind of libraries. All right. Where I am right now, it's 10:00 PM. Oh
[02:16:15] , there is. Oh, damn it. Why don't I see anything? Drop down. Was it in the playground? What did I not? All right. Inter
[02:16:35] active map. There we go. I'm like sitting there trying to like move the static map around. But here we go. Cupertino. San Jose. Campbell
[02:16:48] . There's eBay over here. Yeah, right there. There's eBay. Okay. What else do we got here? Okay, so there's just tons of features
[02:17:06]  in this thing. Let's see. What do I want to see? Is there any? Yeah. Add terrain. This is fun. add fog. Add sky.
[02:17:36]  All right. My navigation isn't the best, but interesting. Quick mouse move around. There. Better. Now we at least got a chance to look at it a
[02:17:55]  bit better. Okay. Let's let's. What else we got here? Rehash one. A little credential manager based on password hash idea. He's generating each
[02:18:05]  site they signed to you. Okay. Okay. Okay. Yeah. I guess to really play with this, I'd probably have to. Is it is this is
[02:18:35]  the idea that this is an app? Okay. Gotcha. Yeah. So this is an app. Let's see what they do. Because I want to kind of look at
[02:18:53]  the. the GitHub. Actually. No. No. Because it's. It's just going to be the app. What's going on here? Okay. That was
[02:19:17]  weird. One. One, one, one, one. Okay. No. No repeated characters. Hey. Okay. One, two. The second I go one,
[02:19:32]  two. How about four or five? Oh, man. Solid is the best. Okay. Works for me. Let's create a new one. Okay. Okay.
[02:19:53]  So make URL display name. Okay. Yeah. So it's like a password manager. Last password settings. Switch theme. English. Dutch. Sports store. Okay. Let
[02:20:06] 's. Let's make at least one here. Oh, I don't. And it generates the password. And. We can. Copy to clipboard. Okay.
[02:20:35]  Yeah. Cool. Username and password. Copy to clipboard. Yeah. Seems cool. What about. Cool. Yeah, I'm sorry. Okay. Verc
[02:20:51] el. Yeah. Yeah. At least it's deployed to Vercel. I've been having some trouble with Vercel this week. This all start examples don't
[02:21:02]  deploy right now. I don't know what happened. Something broke. All right. Cool. I said something earlier about there'd be mostly libraries, but I've been
[02:21:13]  proven wrong almost immediately. There is a lot. This there's a decent amount of apps in here. Okay. Hope UI. We did showcase this off in the community meeting
[02:21:22] , but it looks. You've hoped for it. That's such clever. Looks like. This is a full-fledged headless component library. Something kind
[02:21:35]  of like chakra, I believe. And it uses transition groups. So if someone else uses transition group. Apparently this library works. Okay. Good. I feel validated.
[02:21:52]  Oh, well. Buttons, buttons, lots of buttons. Primary accent neutral. I'm not the best person to judge a design system. But given the amount of solid
[02:22:03]  component libraries, this makes me incredibly excited. This looks like it's like. We've got lots of features here. Different layouts. Different sizings. Icon buttons
[02:22:20] . Searches. Accessibility. Layouts. So we've got layout components. Components. Aspect ratio. Bet image. Bet a map. Box. Center
[02:22:46] . Flex. As components. CSS grid. Simple grid. Stack. Wow. This is deep. Badges. I mean, people can probably look at this themselves. I
[02:23:12] 'm just. There is. There's a lot of stuff here. Drawers. I love how everything's copy paste here. Modals. Cool. Tooltips
[02:23:48] . Why not? How are me? Yeah. I wonder. I wonder how this. The styling works. To my understanding. This is. This is headless. So
[02:23:58]  you can kind of. Do this. How you. Whatever you want. But there was. I saw some like easy mechanisms for getting theming in place. This was
[02:24:11]  actually demoed on the solid community meeting probably. So I probably don't need to spend a bunch more time here. But. You know. Still so cool to see.
[02:24:24]  Then the documentation looks like it's great. Yeah. Anyway. Let's. Let's head on back. That's cool. I mean. This probably took an incredible
[02:24:38]  amount of effort. To build a full. Component library. Yeah. Yeah. Yeah. Exactly. Between the MDX stuff that. That. That. Akil's
[02:24:51]  been doing. For solid start. And like the full. Thing in these component libraries. Like the pieces are coming together. Really. Quickly here. In terms of having
[02:25:01]  a compelling story. For the ecosystem. Because. Like. You only need a couple component libraries. For options. And like. You know. Handle some markdown.
[02:25:09]  Some static rendering. Server rendering. Be able to deploy to. Vercell. Netlify. Cloudflare. You know. Like. Solid becoming. Like. Like
[02:25:23]  a real. Thing. For people to use. To build real apps. You know. More than. I mean. You can do it today. But. You know
[02:25:29] . It's funny. I'm kind of like. Old school. I'm used to building this stuff. Myself. You know. You know. Like. My startup
[02:25:35] . We had our own design system. We had to do everything. You know. Like. To fit. Ourselves. Custom. But just thinking about. How easy it
[02:25:41] 's going to be. To just like. CLI. Generate a project. Pull in a couple depths. And just like. Get going. In a couple months.
[02:25:50]  This is. This is going to be. Completely different. Different. Ballgame. And it's really awesome. To see. These kind of libraries. Come in.
[02:25:57]  To the solid ecosystem. Because. Yeah. Revkit UI. Is this another one? It's funny. I did mostly media. So date pickers. Weren't
[02:26:10] . Actually. That big of a deal. I only ever. Got into that. Once. But. Did a lot of. Like. Grids. And like.
[02:26:21]  Like. Both. Twitter style. And masonary. Like masonary. Or sorry. Like masonary grids. And what I called. Like. Google
[02:26:28]  photo style. Justified grids. And like. Dynamic. Drag and drop. You know. Infinite scroll. Performance. You know. Selection state. Multi-page
[02:26:40]  selection state. I did a lot of mechanical stuff. Um. Yeah. These days. Uh. What is this? Design system. Okay. Okay. Okay. Okay
[02:26:56] . So you like. Okay. Yes. This is. Buttons. Tooltips. Okay. Cards. Okay. It's open the model. Okay.
[02:27:19]  Cool. Action. Nice. This is a good showcase. Of all the features. I want to see. Is. Yeah. I'd love to see. Is what it
[02:27:38] 's like to author it. But that's one cool thing about the docs in the last example. So you can kind of see. What it's like to author it
[02:27:45] . Although. I'm gathering. I'm just going to find the component source code. But good. Tests. Linting. Everything's kind of built in.
[02:27:51]  Avatar. Oh. Making use of solid style components. It's always cool to actually see these libraries being used. And so especially some of these kind of tertiary
[02:28:03]  ones and see how it fits and actually works. Because I'm not going to lie. I built a lot of the core libraries for solid because like, if I didn't
[02:28:12] , no one would originally. And stuff like solid style components and solid transition groups, I'm not even convinced sometimes that they actually work everywhere. But it's really cool
[02:28:22]  to see those building blocks that, you know, I kind of whipped together in a single evening actually be able to power things this powerful. You know, I knew if
[02:28:33]  I didn't build these things originally that, like, it would take a while and people might not see the vision. But it seems like now that we've got the base
[02:28:42]  primitives in a good place, like, people can achieve incredible things. This makes me so excited to see libraries like this, like, just being able to just pick
[02:28:52]  them up off the shelf and be able to do this. So, yeah, a couple more component libraries. What do we got here? Solid cache resources. Nice. It
[02:29:07] 's great. I recognize a lot of these people from the Discord. It seems like a lot of people in the community kind of came in and gave this a shot. Okay
[02:29:15] , so what do we got here? Solid cache. resources. We have Solid Bootstrap, too. It came in right before the hackathon. So, that was
[02:29:34]  the first one. And, like, yeah, like, by the end of this hackathon, how many component libraries is Solid going to have? Solid cache resource.
[02:29:46]  It's experimental. Okay. Okay, cool. So, it adds a cache capability using the cache key. Yeah. I love how straightforward some of this stuff can be to
[02:30:01]  build as long as you have the right primitives. And these are built on resources. And these are built on resource. So, they'll work with suspense and transitions
[02:30:08]  and stuff, right? Nice. Yeah. I mean, you can kind of see how it works just simply from this. I think one of the cool things, though
[02:30:20] , I can't -- yeah, I don't know if this is -- was this published to NPM at all, I wonder? I don't know if -- I
[02:30:27]  don't know if I could -- I don't know if I could add -- I mean -- I don't know if I can do this. I don't know if
[02:30:36]  I can do this. I don't know if I can do this. I don't know if I can do this. I don't know if I can do this.
[02:30:42]  But this is probably the way that the standard roll-up template we build works. Import dis, dis, dis, dis, dis, build, build. Do we
[02:30:52]  have an experts map? Yes, so import. Types, type module, dis, dis, okay. Yeah, okay. So, it's probably all straight. Is
[02:31:07]  it type module? I wonder if they have problems building those. Okay, yeah, this -- yeah, so this library probably doesn't work with SSR yet. But
[02:31:23]  -- well, actually, if it doesn't use GSX, it probably does work with SSR, actually, because it's just built on the components. Yeah, that
[02:31:32] 's one of the cool things about the library side. Yeah, there's no GSX here. So, yeah, this is probably fully isomorphic, probably work with
[02:31:40]  SSR, too. Okay, cool. Yeah, I'm glad to see this. I made create resource missing a cache, which is kind of, you know,
[02:31:48]  kind of -- it's missing. But on the positive, it makes it really easy for people to add their own opinion to cache layers and stuff, like make their solid
[02:31:57]  queries and stuff, like make their solid queries and still leverage all the stuff. All right, let's see what else we got here. That's cool. I think we
[02:32:08] 're going to have a couple of those. Student project. Hydrogen, yeah, social app. I saw this earlier. I wonder if I'm already going to be
[02:32:19]  signed in, because I think I did look at this one, because I was just like curious. Okay. User denied geolocation, I'm sorry. Looks like I
[02:32:32]  already have a safe password. Someone responded to my message, three light hearts. Yeah, no, this is really cool. It's like a little Facebook kind of thing
[02:32:45] . I think it's like a full single page app style. I have no friends apparently, but that would be okay. Yeah, what's this? Post likes. Nice
[02:32:57] . I don't know what that is. It suggests I have comments. Trending posts. Six days ago. Okay, gotcha. So when you click, it
[02:33:20]  tells you the comments. Then when you click on the comments, you can actually see the comments. Well, only a couple of people in here so far, but. Oh
[02:33:30] , there's a messenger too. Got dark mode, light mode switching. Create posts, groups, group posts. This is a student project. That's very cool.
[02:33:47]  Like, I remember my student project. I made something called friend time, which use Facebook's graph to show when your friends are available on a calendar and then you'd
[02:33:59]  like be able to schedule stuff. I feel like this, this, this is even slicker than that. That's, that's pretty cool. Yeah. Nice.
[02:34:15]  Do you have any friends, friend requests? No. Sad. Suggestions. Some people have already signed up. Ryan T. I wonder if this is Ryan Turn
[02:34:30] quest. Create a solid router. No, maybe not. He's friends with, maybe. Oh, man. Oh, Alex is in here. Let's, let
[02:34:48] 's, let's add Alex. People got profile photos. Honestly, this is, this is a student project. It's pretty cool. See now, do I have
[02:35:00]  friends now or was it just a friend's request? There we go. See if, we'll see later if Alex accepts my friend's friend request. Okay. Very
[02:35:17]  cool. Okay. Code image. That sounds like fun. Okay. Elegance code screenshots your source code. I, I need this all the time. I'm
[02:35:40]  always writing articles. Let's, this, this would be dog fooding, right? He's, he's our own stuff. Oh, oh, isn't this fun
[02:35:49] ? I think I did see this one before. I like night owl. Grab a code snippet, code image. Style. Nice. I mean, I don't know
[02:36:04]  why you do ever want to use that one, but. All right. All right. All right. All right. All right. All right. All right. All
[02:36:09]  right. All right. All right. Okay. Language. Ooh. Type script. Is it just for show? Thank you. Could I pick a different language,
[02:36:59]  PHP? Okay, yeah, okay, cool, cool. Yeah, so different syntax highlighting, font weights. Nice. Different fonts. They're all, I think they're
[02:37:16]  all mono. Makes sense, opacity. Okay, yeah, I've played here enough. That's cool. And then you can presumably export it. File name, P
[02:37:37] NG, SVG, KPEG. Are there other themes? Oh, there's a lot of themes. Yeah, it looks like that is the case. But yeah
[02:37:59] , I mean, that's still pretty cool. All right. Language selection. English, German, and Italian. Which I knew Italian. Let's say. Very cool.
[02:38:22]  My family's Italian, but my father was born here. Actually, my grandfather came over when he was a kid. So yeah, I never really learned any real Italian
[02:38:36] . Cool. I don't even know how to pronounce this. Lasso, you know, or make music here, Duncan. It's happened. I don't know
[02:38:48]  if you're still here, buddy, but a while back, drummer of my band kind of popped in here for a moment, I think. Where is he? Can't
[02:38:57]  find it. Yeah. We've made it. This sounds like fun. Nice. Okay, we got synth, we got MIDI, music editor. Is there anything?
[02:39:18]  Let's just get the synthesizer going. Don't want to be too loud. Okay. Okay. Stays pressed until. Yes. Single. Hmm. Right.
[02:39:50]  So everything's here. Decay. What can we do? Nice. Cool. Okay. Piano may sound loud. Warning. Featured plan. Inter
[02:40:30] active music tour that teaches editor more controls. Hmm. It's so hard to actually play anything to the keyboard. With the mouse. But this is still, this is
[02:40:49]  lots of, this is cool. The comments are coming in now. I'm sorry. I'm sorry. I, I turned my volume down. Oh, man.
[02:41:18]  And that was the end of the stream. I'm so, I'm so sorry. Yeah. Yeah. Yeah, yeah, yeah, yeah. Exactly. Let's
[02:41:29]  just, well, that's the thing. If they have MIDI support, then like we, we, we can plug in our external keyboard and the party, get the party
[02:41:40]  started, you know? It's a music editor. Okay. Four rests. Okay. Can we record? Or do we just, if we go. No,
[02:41:59]  let's go. Play, stop. So, do I, can I go? Okay. So, let's go forward. No. Tempo, 60 beats per second
[02:42:24] . And, in fact, you want to. Okay, I recorded it. Can I stop it? Cancel press? Okay. Go to start. Hmm.
[02:43:12]  I don't hear anything when I play it back. Anyway. Okay, yeah. Obviously, I'm, I need to actually figure out how this stuff all works.
[02:43:34]  But, I mean. Yeah, okay. So, there's, there's some placeholder stuff in here, but you can, you can, we did a music
[02:43:46]  editor and a, and a sound synthesizer. So, audio visualizer. Okay. That would be cool. Yeah. I, I probably have to actually learn how to
[02:43:56]  do some of this stuff. If a key stick, try pressing the piano key again. No. Yeah. Cool. Definitely get the idea. And sorry to everyone that
[02:44:09]  the audio blasted. Isn't this cool, though? That, like, people are building stuff like this? Oh, man, that's awesome. Solid G-
[02:44:28] State M. All right. What is this? Docs page. Oh, let's go there first. Storybook. All right. Interesting font choice. Okay
[02:44:47] , okay. So, this is, like, a, a state library pattern. People, because it's all reactivity, don't often go here. We saw the
[02:44:55]  proxy pattern earlier. But, this one looks like it's an atomic state library. This is basically, like, recoil or, what's the other one that people, like
[02:45:08] , is it Jotai? Maybe it's like Zestand, it's one of those ones. But essentially, you cost use count, and then you make
[02:45:25]  an instance of it here inside the component, and then you select. It looks like it's that sort of pattern though. Sorry, I've kept that, oh my
[02:45:45]  God, headphones on like the whole time. Ooh, DevTools, did I miss something? Where are the DevTools? Oh, the State Library has DevT
[02:46:04] ools. Yeah, I'm not even seeing here, it's small. Create a store, new DevTools, okay. Oh, this looks like Redux Dev
[02:46:18] Tools. This looks very much like Redux DevTools. This looks very much like Redux DevTools. That's fun, yeah, because it's probably
[02:46:27]  using immutable state patterns and then applying them through. I did some early experiments, like this is early on with Solid before I landed on stores, I was like, "
[02:46:34] Oh, what's a good pattern?" And even when I had the stores, I'm like, everyone, you have to understand, when I was working, first working
[02:46:39]  on Solid, I didn't think anyone would adapt signals. I didn't think people would like want to acknowledge the fine grainedness of it. So I made something
[02:46:47]  I called, what is it, MUDUX or MUTUX, which the idea was this like Redux, returning like the reducers returning like next
[02:46:57]  state, they basically returned path partials for create stores essentially. And then we basically merge all the partials and then apply them at the end essentially, as a way
[02:47:14]  of doing granular reactivity with a Redux-like structure. In the end, I decided that it like wasn't the best pattern for us. And I might as well
[02:47:26]  just, you know, do a reconcile diff kind of thing like we're doing with Redux now if you really wanted to use it, but it looks like this is all
[02:47:32]  built in. So we've got Redux.dev tools, multiple stores, create, use, select, and dispatch, two primitives, define your hooks, and
[02:47:45]  you're good to go, interesting. The biggest thing that I've always, I tried to make the JS framework benchmark once with recoil and the performance on use, like their
[02:47:56]  selector APIs weren't good enough because they like, they all drove each other essentially because they weren't fine-grained on updating and be interested to play with one
[02:48:04]  of these and kind of understand if it has that same kind of characteristic. Yeah, exactly. People who have patterns that they're familiar with, it's, this seems like
[02:48:17]  a really good way to kind of introduce people to, to, to this kind of stuff. Multistore. Thanks. Silent mode. What's silent mode? Silent
[02:48:43]  mode. I don't even know what silent mode is. Oh, it's, it's, it's, it's, it's, it's their untr
[02:49:05] ack. It's funny because this won't trigger component rerender, but my guess is that this is, oh, okay. What's solid counter. Okay. He
[02:49:33] 's passing the signal straight through. Okay. Yeah, that's fine. Yeah. I'm sure it's fine-grained. I'm, I'm sure I'm
[02:49:37] , I'm pretty sure they wouldn't be rerendering components. This example threw me off because usually our convention is actually the call to stuff on the outside. So
[02:49:48]  interesting and it supports react, solid and view. Cool. I wonder, I wonder how similar the API ends up looking. Yeah. It looks like there's like,
[02:50:15]  like the, this stuff's all different, but it looks like generally speaking, the same store, like verbatim just comes across. So that's, that's,
[02:50:26]  that's props on them on that. Cause it looks like you could write your view solid or react app using the exact same store implementation and just literally just swap it in
[02:50:34] . So this, this is a great equalizer basic usage for vanilla. Yeah. Cool. Fully featured pattern for, for state management. Love to play with it
[02:50:53]  to see how fine-grained updates work and stuff, but definitely, definitely very cool. Oh man, this, this, this, this is what I think it
[02:51:09]  is. Personally, this was always one of my list of our design system at my old startup. We've definitely borrowed a lot from material UI. Um, and then when
[02:51:19]  we went to do the redesign, we just took material UI. So to know that, oh, there's a playground too. Okay. So it's, it's
[02:51:31] , it's embedding stack stack what's here looks like. Yeah. Yeah. Yes. Yeah, definitely. I love, we've got more options. Hello world.
[02:51:45]  What do we got here? System button, button group. Oh, interesting. Okay. Yeah. Yeah. Yeah. Yeah. So the playground doesn't remove the side
[02:52:01] bar. So this is where you get the play. It's all set up for you. It's, it looks like it's in the background. So you can just
[02:52:06]  like literally go in here probably and be like, I want to try the button group example, and then probably be able to grab with some source code floating action buttons.
[02:52:19]  Badges, what do we got here alerts, where's our cards and standard stuff. Yeah. It's actually always more familiar looking in light mode. Hello, Google.
[02:52:35]  I wonder if material has it changed. It looks, it looks like it's slightly different now than when I first remember, remember it, I guess it's changed probably
[02:52:45]  very slight bits over time. I don't keep up on design stuff too much, but I remember like earlier on, like the, the paper feel of it, like
[02:52:54]  how, like the elevation on the shadows and stuff was like much more. I mean, there's obviously all settings for this, but just like the way it was presented
[02:53:03] , I guess it's gotten flatter over time. Grid stack. It's so funny. I understand this is the show the popper, but the fact that this button isn
[02:53:17] 't actually like the standard button here kind of took me for a second. Cause like everything else is like is all material style fade. So yeah, cool grid. Yeah
[02:53:44] . Use media query this. So we got headless. We got whatever the opposite of headless is here, like fully themed component libraries. I mean, there's
[02:54:00]  so many material UI components. I don't know if they're all here, but, um, this is definitely a good start if they aren't fun, fun, fun
[02:54:10]  groups. Breadcrumbs. Yeah. Here we go. Drawer. Yeah. Okay. Sorry. I'm just playing around here. There's just, it
[02:54:31] 's, it's, it's, it's so cool to see where, where, where, where, where, where's, where's our standard, uh, headers
[02:54:36] ? Like this one, this is, this is classic. I don't know what the name is for that. So I want to show the backdrop. Um, it
[02:54:54]  wasn't headless for some reason. I thought someone told me it was headless. Maybe I don't, I just don't know anything. App bar. Ah,
[02:55:14]  app bar, app bar, app bar. Um, yes, there we go with the hamburger, more examples, and then it takes you to the official docs. Okay
[02:55:26] . Okay. That works for me. Man. Actually. Yeah. So there's, it's probably a couple extra ones, maybe some react specific ones, pagination
[02:55:46]  and stuff. Oh yeah, pagination, but it looks like there's a good set here. Yeah. No pagination controls. Yeah. Yeah. No, I
[02:55:59]  mean. Switches. Disabled switches. Um, it's not just the fact that people make the libraries, the fact that they made the documentation sites so usable and
[02:56:23]  stuff. It's, it's really cool to see. Yeah. I, I, I got the feeling it could be used either way. Yeah. So I, yeah
[02:56:37] , I, I told you, I'm not the most, most familiar with all the UI libraries. I've used material before these bootstrap before, but that
[02:56:49]  just shows you how old I am. I've even used reach components before for accessibility. Okay. I, I, I, I, I, I, I think
[02:57:05]  I saw this one earlier in the discord, I think. I, I, I, I, I, I, I think I saw this one earlier in the discord
[02:57:23] , I think this is a 2d game engine. Yeah. Yeah. For you know, it's once we're making websites. We can find that together. We
[02:57:33]  can, we can keep some HTML syntax for super easy development. Yeah. Stuff like this is always really cool. because, okay, so it has a preset API.
[02:57:41]  You write your games like this and then this, it's yeah. So it's a declarative layer and since our components are just functions, we can just build it
[02:57:51]  this way. This is like, this is like, okay, well we got a few, we got a couple of minutes, this is, since this, since you
[02:58:05] 're the last one. Um, I, I, I, I'm, I'm willing to maybe clone something down, uh, no, and honestly, he's
[02:58:27]  been so busy. I don't know, like you, he built all that stuff in December before the hackathon, like the 3d stuff. And since then he
[02:58:36] 's been like, he's been doing incredible amount of work in solid start and the doc. So I don't, I don't think he has an entry. Um,
[02:58:43]  yeah, a lot of the ecosystem core people, uh, haven't actually, I mean, core people weren't really involved in doing this and a lot of them organizing it
[02:58:53] , but like, you know, even people like Alexis opted not in to, to, to, to join in as well, decide to give everyone else a chance.
[02:59:03]  Right. Um, yeah. Okay. So yeah, let's, let's, let's, let's look at this. I always love the game demos. Like,
[02:59:10]  uh, um, Joe, uh, gave a great loom demo at the last community meeting. Okay. So unload me, what do you want it? Yeah.
[02:59:20]  Okay. So I'm just trying to like map it here. Yeah. See, what I was going to say is that with custom renderers, these can be lowercase
[02:59:28] , but it's like a different sort of pattern. It's very easy to just take solid as it is today. And if you use components and you don't use any
[02:59:38]  lowercase DOM APIs, we don't pull in any DOM APIs. So like the components are super powerful as just being functions. We literally can tree shake the DOM out
[02:59:48] , out of our, our app. Like if you don't use a render, if you use like create root and like components like this, the DOM doesn't even play
[02:59:56]  in. Obviously I think something like this probably renders to canvas. So there is a DOM, but I just, I just wanted to kind of point out that this is
[03:00:02]  a perfectly valid way of credit, creating sort of custom renders without using the custom render API. Okay. So what's my, what's my best bet here of
[03:00:10]  getting, getting examples platformer. Probably, I guess I could just clone the whole repo down. Why not see what we can do here. Let's get a new
[03:00:31]  window open. Okay. Let's open a new window in here. So then I'm already like in my directory, let's see examples. I'm already like in
[03:00:59]  my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory.
[03:01:15]  I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm
[03:01:21]  already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in
[03:01:27]  my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory.
[03:01:32]  I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already
[03:01:36]  like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my
[03:01:41]  directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory.
[03:01:53]  I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already
[03:01:57]  like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my
[03:02:02]  directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I
[03:02:07] 'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like
[03:02:11]  in my directory. I'm already like in my directory. Okay. I'm already like in my directory. I'm already like in my directory. I'm already like
[03:02:16]  in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory
[03:02:21] . I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm
[03:02:25]  already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in
[03:02:29]  my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory.
[03:02:35]  I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm
[03:02:39]  already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in
[03:02:43]  my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory.
[03:02:48]  I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm
[03:02:52]  already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in
[03:02:56]  my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory.
[03:03:01]  I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm
[03:03:05]  already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in
[03:03:09]  my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory.
[03:03:14]  I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already
[03:03:18]  like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my
[03:03:23]  directory. I'm already like in my directory. I'm already like in my directory. I'm already like in my directory. I'm not like in my directory.
[03:03:35]  I'm not like in my directory. I'm already like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not
[03:03:39]  like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:03:43]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:03:48] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:03:52]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:04:04]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:04:09] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:04:13]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:04:18] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:04:22]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:04:26]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:04:31] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:04:35]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:04:39]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:04:44] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:04:48]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:04:52]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:04:57] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:05:02]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:05:06]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:05:11]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not
[03:05:15]  like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:05:26]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:05:31]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not
[03:05:35]  like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:05:39]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:05:44]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not
[03:05:48]  like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:05:52]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:05:57] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:06:01]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:06:13]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:06:18] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:06:22]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:06:26]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:06:31] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:06:35]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:06:40] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:06:44]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:06:56]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:07:01] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:07:05]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:07:09]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:07:30] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:07:35]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:07:39]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:07:44] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:07:48]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:07:52]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:07:57]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:08:01]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:08:05]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:08:10]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:08:14]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:08:18]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:08:23]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not
[03:08:27]  like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:08:32]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:08:44]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not
[03:08:48]  like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:08:52]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:08:57] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:09:01]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:09:13]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:09:18] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:09:22]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:09:26]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:09:31] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:09:35]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:09:40] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:09:44]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:09:56]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:10:01] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:10:05]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:10:09]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:10:14]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:10:26]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:10:31]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:10:36]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not
[03:10:40]  like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:10:44]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:10:49]  I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not
[03:10:53]  like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:10:57]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:11:02] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:11:06]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my
[03:11:18]  directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I
[03:11:23] 'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:11:27]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:11:32] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:11:36]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like
[03:11:40]  in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory
[03:11:45] . I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm
[03:11:49]  not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in
[03:11:53]  my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory. I'm not like in my directory.
[03:11:58]  I'm not like in my directory. I'm not like in my directory. I think it's I think it's really cool to kind of see all these different kind
[03:12:03]  of projects here. Take away from react code to make use of all this, I think. Yeah, I think I think one cool thing about the patterns we have is like
[03:12:12]  how. Oh, yeah, I'm sorry. I forgot the synthesizer thing. It's just something else is that, you know, like when you try and just make
[03:12:21]  wrappers and they run once like you're not kind of you're not fighting some like you don't feel like you're fighting two systems against each other. Everything on
[03:12:29]  solids base feels like it's additive. So like when you build these abstractions, they just feel like like they run the way they naturally do. They don't change the
[03:12:38]  they don't necessarily pull everything into the world. It is interesting because reactivity is does kind of it is pervasive. Like once you choose to do reactivity, you
[03:12:50]  kind of have to do reactivity everywhere. It like has spreads out like like a virus maybe. But on the other hand, the stuff that's outside of the react
[03:13:02] ivity isn't affected by it, so to speak. Right. You can you can have different systems and use reactivity is just like the communication piece, so to speak.
[03:13:11]  Yeah, I think it does definitely lend to that more. Can we submit or entries for more than one category like student and app? Yeah, I mean, I don
[03:13:21] 't know about the student one. I mean, technically, you're allowed to do more than one submission, but I don't think you can submit a single one to
[03:13:29]  more than one category. I could be wrong. I'm not familiar with the rules. I did not write the rules. I did not write the rules. But my
[03:13:35]  gut feeling is is is that but I'm not sure I could be completely wrong. So don't listen to me. Any questions? Any questions? Any questions? Like
[03:13:45] , so hack.solidjs.com has, I think, a bunch of rules. Where's the rules? Yeah, sorry. There you go. Subm
[03:13:59] issions. All projects must have working demo, blah, blah, blah, blah. Submissions posted after, blah, blah, blah. Submissions have started after
[03:14:17]  this date. Submissions changed. Submissions vetted. Submissions after licensing. Submissions treated, blah, blah, blah. All sorts of blah
[03:14:23] , blah, blah, blah. Yeah. Yeah, I actually don't know the answer to these questions. It's probably best to ask on the discord. Yeah,
[03:14:45]  as I said, I wasn't actually very involved with this. I just gave my blessing. And so that was a really cool idea. So I'm, it's
[03:14:56] , it's incredible how much solid has grown that there's like a whole group of people making this possible founding, found the funding for it. found the, you know
[03:15:08] , our great sponsors, you know, uh, builder, you know, you guys make quick and party town 402, um, uh, uh, Dan's on the
[03:15:19]  court team heading the docs and, uh, you know, clear spend. They, I think they, I think they made the biggest contribution and stitch, like found all
[03:15:27]  these, uh, companies to put money forward and to, uh, uh, basically make this whole thing possible. Um, and I honestly didn't even have to lift a
[03:15:37]  finger. Um, really cool to see this happen. I'm going to be so excited for next week when we can see the full list of submissions that come in.
[03:15:47]  And, um, I know that those, the, the team committee in charge are going to be pouring over all of them. And, uh, you know, we
[03:15:54] 've got the voting system and all that set up. So re really, uh, really quite, quite exciting stuff. Um, uh, this whole thing and the fact that
[03:16:05] , you know, the community has grown to the part, not only that this is possible to, but being able to fill backfill those kind of libraries and, you know
[03:16:13] , build out an ecosystem this way. It's really cool. Um, we're, we're looking at potential to do more of this stuff in the future, actually.
[03:16:21]  And, uh, we've been collecting the money, uh, from open collective, like all the donations. And we, we're, we're looking at different ways
[03:16:30]  we can, um, use that money to fund more efforts and put it back in the community. Cause, um, there, there, there's some legal fees and like
[03:16:38]  some administration stuff. But for the most part, uh, I mentioned before that my bottleneck is time. So I think there's a lot of ways to, you know
[03:16:47] , award, um, you know, contributors, people. put significant effort in and give up their, give their time to make solid better. So we're, we
[03:16:57] 're looking at different avenues, even beyond the hackathon in the future. But I, I'm just so glad that so many people have decided to kind of participate and,
[03:17:05]  uh, make the ecosystem that much better. Find in page multiple. Nothing. Okay. Anyway. Uh, I don't know. Anyone got any more questions? I
[03:17:16]  know the discussion at the beginning of the stream was like pretty, pretty good, pretty heavy, but I think we covered a lot of stuff. We got to leave some
[03:17:27]  stuff for next week as, as I said, and we got a chance to look at, um, all the salt, salt hack stuff. So, um, plan is
[03:17:37]  next week. Uh, we're going to look at Astro 1.0 beta and, uh, have Fred K. Scott, um, kind of leads the team
[03:17:49]  over, um, at Astro, uh, to join us and kind of look at how SSR changes the equation. Um, I've got, I've got
[03:17:57]  some great ideas for demos that I want to play around with. One of the ones I want to do is I want to remake that hacker news demo. Like I always do
[03:18:04] , but now that it's dynamic SSR, we should be able to see if we can take. Astro and solid together and re remake the, uh, the Marco
[03:18:14]  demo and, uh, do it perfectly declaratively like, like, like Marco in that example. Um, so I'm looking forward to giving that a shot. Yeah
[03:18:28] , it is really amazing. So, yeah, I, I think, I think, I think next week's gonna be a lot of fun too. Um, and then
[03:18:43]  probably by then the docs will be coming around for solid start and we can, uh, for, for after that, um, we can kind of look at where solid start
[03:18:53]  is. That's, that's, that's, that's kind of the high level plan, at least for the next few weeks. We'll, we'll see
[03:18:58]  how it goes when we get there, but thank you everyone for joining me this week. And, uh, it was a lot of fun looking at these submissions and a
[03:19:07]  lot of fun discussing this week in JavaScript. Um, so I think I am going to just sign off and, uh, have a good weekend. Have a good weekend
[03:19:21] . Have a good weekend. Have a good weekend.