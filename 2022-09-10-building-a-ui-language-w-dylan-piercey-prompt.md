---
showLink: "https://www.youtube.com/watch?v=W9wfkP21c80"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building a UI Language w/ Dylan Piercey"
description: ""
publishDate: "2022-09-10"
coverImage: "https://i.ytimg.com/vi/W9wfkP21c80/maxresdefault.jpg"
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

[00:00:00]  Hi everyone, sorry for the delay. Me and Dylan were just dealing with some technical issues right off the bat. It took a little longer than the usual five minutes to
[00:00:09]  figure it out. Apparently StreamYard has some fun with different browsers. Chrome works really well. Firefox, I think so far we had some issues with screen sharing and whatnot
[00:00:25] . But I think we're sorted now, so this will be all good. So yeah, welcome to my stream today. Everyone can I come in and say hi?
[00:00:33]  How you doing? This is my second stream in two days. So yeah, all good stuff on my way to be a Twitch affiliate. Apparently I have to stream seven times
[00:00:48]  in a month to do that. And yeah, I don't know. It's funny, I've got enough hours. I've been streaming, I stream at least
[00:00:59]  four hours every week. So that's like plenty of hours. But yeah. Alright, so let's give this a second for people to join on. I'm personally
[00:01:10]  very stoked about this one today. Because again, it's more technical topics. So I understand this is, you know, I'm not just like talking about some like interesting
[00:01:19]  react thing that everybody cares about. or whatnot, but or, you know, the hottest new framework. But the technology here required is something that you find in like many
[00:01:31]  frameworks. You find it like things from view to svelte. Anytime you stray off the the chosen path, you are in for a lot of work. But if
[00:01:43]  done properly, the benefits can be amazing, right? You can do whole new things. It changes the goalposts. Or not the goalposts. But yeah
[00:01:55] , it changes like the posts of what we can work on simply by, well, changing the language, right? It affects our ability to express intent and ideas. And
[00:02:07]  that's super, super, super powerful. So I'm pretty stoked about this. As I said, I have a suspicion this isn't going to be like the stream where
[00:02:17]  we get everybody kind of flying in here. But on the other hand, I think this is the type of content that you're not going to find anywhere else. This is
[00:02:26]  really amazing work. Yeah, Dylan's going to be on joining us just a minute. I just like talking to everyone while they join the stream. But yeah, no
[00:02:37] , super hot here. I checked when I finished the stream yesterday at the end of the stream. I went out and checked the thermostat. And we were at 89 degrees
[00:02:50]  Fahrenheit in the house. And yeah, I mean, which is not bad considering it was like 105 outside. So, you know, it is what it is. But
[00:03:05]  it was so hot that this morning we didn't get below 80. We're already on the way back up now. It's like 82 in here. So it's going
[00:03:15]  to be another hot one. Yeah, let's get that plug in there. FS Jam has some great coverage podcasts on a lot of these topics. They're very quick
[00:03:31]  to be on, you know, the hydration story islands and a lot of the technology around partial hydration and improving page load performance. The interesting thing here is just a little
[00:03:43]  bit more preamble while waiting. Is that Marco, which Dylan works on and which I was working on eBay on as well, is kind of like the predecessor of a
[00:03:59]  lot of ideas that we see really common today. They were doing it years and years ago. Things like islands that we've seen fresh in Astro. Marco was doing
[00:04:05]  it back in like 2014, 15. I think 15, I think for islands. Streaming, like out of order streaming that's getting popular in react and the remix guys
[00:04:16]  are all talking about all that. Marco was doing that back in 2014. They had these things called async fragments, which is basically suspense on the server back in 2014
[00:04:26] . Just kind of put this in perspective. And everyone's really hot on compilation and Svelte and all that kind of stuff. But Marco was also doing that back in
[00:04:36]  the early days, right? Svelte really jumped into the compilation with Svelte 3 in 2019. I got to say the compilation story probably goes all the way
[00:04:45]  back to Elm being really the first big one. But Marco was 2014, IMBA 2015. So there's a lot of really cool technology and years of experience at scale
[00:04:57]  at eBay behind the work and experience that Dylan has here. So it's an incredible thing. And I think there's so many secrets and like things we can learn for
[00:05:12]  the future by looking at this framework. It's a treasure trove, so to speak. But the reason I've got Dylan today is we're actually looking a bit more
[00:05:19]  at the future of Marco and kind of understanding all that goes in to the other portion. We've covered reactivity, we've covered runtimes, rendering, we've covered
[00:05:29]  all that stuff. And those are areas that, you know, Solid also has a lot of say in. But languages and DSLs is something that I've kind
[00:05:38]  of purposely stood out of the conversation. I'm just like, you know, I'm not going to take a stance on this. This, let's, let's,
[00:05:45]  I'll leave that to people who like arguing over those things. But sometimes, and just sometimes, and this is super important in the case of Marco, the DSL
[00:05:54]  doesn't just enable ergonomics, but completely allows paradigm shifting change. And I think that's incredible. And I don't know how much we're going to get into that
[00:06:04]  paradigm shifting change today. But I think it's really cool to understand just what we can do with this all. And with that, I'm going to invite Dylan onto
[00:06:14]  the stream. So let's, let's all welcome Dylan. Hello. Hello. Hi. I'm, I'm so glad you're here. It's been, it
[00:06:22] 's been a few months. I had you and Michael on here, I guess, last, last fall. I feel like, I guess it's almost been a year now
[00:06:27] , but. Yeah. It's been a long while. But, but no, last time you guys gave us an overview of like Marco six directionally, which I
[00:06:37]  think I did that stream shortly after I did like a Marco, the most underrated framework stream, which I think is pretty fair. But Dylan, how about you tell us
[00:06:46]  a little bit like high level what you've been working on the last few months or since you were last on the stream with us. Yeah, so one of the things
[00:06:54]  that's been my primary focus is bringing TypeScript support into the Marco language. And I think calling it a framework, like sometimes we don't even do that. We say
[00:07:04]  Marco is a language that compiles to different things and does, you know, stuff that you need a UI to do in whatever performant way we need it to happen.
[00:07:13]  But yeah, so I've been working on adding TypeScript support and that, you know, causes me to touch basically the whole gamut of technology that's involved in
[00:07:23]  actually making the code you write enjoyable to write like through the syntax highlighting through the editors through even the bundlers and stripping the types out and all that stuff. So that
[00:07:34] 's been a little bit of what I've been doing. And so I think and one of the reasons, you know, we're having this stream right now that the
[00:07:42]  actual language that you write in has such an impact, like some in some cases, it's superficial. You know, like you save a few characters, right? And that
[00:07:51] 's good. But in other cases, like you said, it's it's paradigm shifting, right? Like, could you imagine still writing the old style manual promises without the
[00:08:00]  awaits, right? Like it's paradigm shifting, you can completely change how you do the error handling, for example. So things like that are really powerful. And we
[00:08:12]  try and introduce those into Marco because, you know, we're looking at things really from a language of how do we represent common UI patterns in a declarative, you know
[00:08:22] , HTML markup language that allows us to represent these things in ways that can be composable and, you know, hook into other features. Because if you've got
[00:08:31]  a language that's cohesive, it's like, oh, this has this impact over here. Like, I can do the error handling over here, I can, you know
[00:08:38] , create a proxy to this in this way over here, I can intercept it here, like all these things when the language is cohesive, it allows you to do things that
[00:08:46]  are not even immediately clear. clear. And then the other thing that I find is language design can sometimes put you into the camp of like, if you have a language
[00:08:56]  that's poorly designed, it could push you into writing anti patterns in the language, you know, like even with I think of JavaScript, bar hoisting, right?
[00:09:07]  Like in the early days before ES6 essentially, it was like every JavaScript tutorial was, okay, yes, bar is going to be hoisted. What's the actual
[00:09:18]  log at the end of this thing with the set time out inside the fort. Right. And part of that comes down again to the language design. It's not necessarily
[00:09:26]  that bar hoisting was bad, but it doesn't lend itself well to the way that people write most JavaScript, especially with closures. Um, so I think
[00:09:34] , you know, them adding wet to the language was a good thing because it helps you avoid foot guns. So that's another thing that language can do. And I just
[00:09:43]  wanted to say that to point out, you know, there's a whole bunch of facets to language design beyond just, it looks a little bit shorter. Right, right,
[00:09:50]  right. And, and I think that's a good thing to call out and kind of understand in terms of the basis of all this. Before I say anything more, I
[00:09:56]  noticed we're wearing the same shirt. Um, that's pretty awesome. Right. Sporting. I've got the background though. I'm in the Marco office.
[00:10:05]  Yeah. I'm no longer at the Marco office. Um, but, uh, what, what I wanted to point out and kind of tie in on that cause you're
[00:10:13]  hinting at, and I think I want to spell it out for people in the crowd. How do you think that philosophy, do you see, do you see a difference
[00:10:19]  or a philosophy difference between something like Svelte, which is where most people are getting introduced to this concept of framework as a language? Yeah. So when I look
[00:10:28]  at Svelte, I really look at something that's like, okay, we've got HTML. We've got JavaScript. There's some parts that don't make sense
[00:10:35]  if we're trying to make them cohesive. So we'll add a little bit of syntax here, but generally we're going to try and leverage. This is what JavaScript looks
[00:10:40]  like. You know, export let X equals one. We're just going to say that means something else. Right. But the semantics of export let X equals one
[00:10:48]  isn't necessarily exactly what you want in a component system. It just happens to be something that's maybe similar enough. And so that abstraction can actually leak. So the way
[00:10:57]  that we look at things when we're designing the Marco language is, okay, we're building UIs. If there's syntax that doesn't have a corollary
[00:11:06]  in HTML or JavaScript or CSS or whatever, then maybe we need a new syntax for that. And what does that actually mean to build new syntax for that? How does that
[00:11:13]  fit cohesively into the system? And so that's why, you know, Marco, um, yes, you can embed JavaScript in Marco, but Marco exposes
[00:11:21]  a whole bunch of other things to make it easier to, um, write more performance code and also just like less code. Um, and then also be able to represent more
[00:11:30]  patterns and compiler analysis. Like all of these things come together. Um, but yeah, we're really looking at things from how do we design a language that is inspired by
[00:11:38]  HTML and JavaScript that does exactly what we need it to do. Right. Yeah. And I think that's an interesting point. Like his Svelte and they,
[00:11:48]  they, uh, Rich had this gist. Um, and I mean, maybe I can find it here in the background while I'm looking right now, but, um
[00:11:56] , he, he basically pointed at Marco as an influence and he pointed at Elm and a few others. And he said in his mind, the reason those, um,
[00:12:05]  never like didn't catch on at the time as much was because they tried to take over the universe because they, they tried to be the language. And he was like
[00:12:13] , what we tried to do was felt was do like the, the minimal essentially, which is interesting because it actually changes what JavaScript means. So it has profound impact where
[00:12:25]  I've, but I've noticed that even in templating language, even if you're not talking about, um, things like, uh, let blank being coerced
[00:12:33] , they'll like do using things like when they have, uh, projections, which like when you pass children through and do like things like that are, we call render props
[00:12:42]  and react land. Um, when you do like, what are they called? Um, when you do like, what are they called? Uh, scope slots is the
[00:12:46]  term. I think it's Svelte and view. They both chose to use existing HTML syntax for attributes, which attributes don't do that. So this is kind
[00:12:56]  of pattern of kind of morphing or changing the semantic meaning of existing things to serve their purposes, which is an interesting choice. Cause it lets you use a bit
[00:13:07]  more of the existing tooling. I guess Marco's had a much harder travel to, you know, in terms of that side. But on the other hand with Marco, it
[00:13:15] 's like you could approach this holistically. You're like, look, these are the things we need to do. What's the best possible way to do that. And
[00:13:23]  I think what I've seen so far, I mean, concise mode is a little like shortcut secret ninja hack on top of that. It's not a hack. Yeah,
[00:13:30]  Marco has both to be clear. Right. Right. Concise mode and that I've never seen because all the syntax is specific for the need, but still general purpose
[00:13:38] . And because it's, uh, um, because of silly stuff like concise mode, there's actually no, like, I've never seen a framework be able to write
[00:13:49]  less code from purely language thing. Someone actually brought up a framework called, uh, small or whatever. I think it's called, um, uh, by Jane nin nin
[00:13:58]  nin nin. I think nin nin nin nin. Uh, I guess I'm so sorry. I, he, he's a genius when it comes to reactivity.
[00:14:06]  Um, read any of his stuff about that. He has immense experience of understanding, um, uh, the reactivity. I've shared several of his articles on Twitter and
[00:14:15] , uh, small is actually really good at actually having small code. You need to actually implement things. implement things. But part of that is because they have a bunch
[00:14:23]  of like mechanics built in the framework for the abstraction. And I, I sometimes feel like this is like a slightly different, different thing. I mean, there is similarities cause
[00:14:32]  small does introduce some syntax, but, um, yeah, I mean, it, it's such a funny thing because we've somehow in, I've noticed in the recent
[00:14:41]  days, everyone's like this whole write less thing. And I, it's, it's kind of a weird, um, what do you call it? Like
[00:14:48]  meter to measure by because like writing less, isn't just about writing less characters. Right. Right. And I mean, obviously if you were to come at the async
[00:15:00] , async await in JavaScript, you wouldn't come at it and be like, wow, this lets me write less. I mean, it does, and that's
[00:15:07]  nice that it allows you to write less, but the power of it in my mind is you get to use like existing language semantics. Like you can throw an if around
[00:15:14]  an await, you can throw a try catch around an await. You can do it in a loop. Um, you know, it all just works with the rest of the
[00:15:21]  language. And so you don't have to have what would have been otherwise like helpers or a bunch of different patterns to worry about the orchestration. Like I'm
[00:15:29]  sure, um, many of the older node JS or people who have been in the node land for a while, remember like async the module where you would have like as
[00:15:38] ync dot each and there'd be like helpers for, you know, dealing with callbacks. And then obviously promises came in and there was different essentially helpers for,
[00:15:45]  for dealing with that. But, um, yeah, the language making it small, isn't the big win in my mind. Like as long as the length, basically
[00:15:52]  you want to get a language to the point where you can look at it. It makes sense. You don't want to condense it more than that necessarily. Um,
[00:16:00]  but condensing the language sometimes means you do less refactoring, right? Like if you have some code that otherwise would have been represented in like three different parts, it
[00:16:11] 's, it's a lot like, you know, moving to the reacts hooked models. Like how much do you have to reshuffle your code and actually, in order
[00:16:16]  to actually do some kind of refactoring. Um, so depending on, uh, the language constructs and, you know, the syntax and whatnot, that can
[00:16:24]  have a big impact there as well. And that just, you know, is allowing us in some sense to not just write less code, but also save time refactoring
[00:16:31] , which is, you know, the same argument people would make for TypeScript, right? TypeScript, you actually write more code so that you can refactor less,
[00:16:38]  um, or at least make the refactoring easier. Um, and a language design can do the exact same thing and it doesn't have to be proposed always. Right
[00:16:46] . That's really powerful. I actually found what I was looking for. Um, just for people who are unclear. I'm just going to read the beginning of this
[00:16:53] , just to kind of put in there. I've been deceiving you all. Um, I had, you believe that Svelte was a UI framework, unlike react
[00:17:01]  and view because it shifts work out of the client into a compiler, but a framework nonetheless. But that's not exactly accurate. In my defense, I didn't realize it
[00:17:07]  myself until recently, but Svelte three around the corner is time to come clean. what Svelte is. Svelte is a language. Specifically Svel
[00:17:12] te is an attempt to answer a question. Many people have asked and few have answered. What would it look like if we had a language for describing reactive user interfaces?
[00:17:20]  And he mentions Marco in this list here. Um, he says, these projects are all cool, but there's a reason they haven't hit mass adaption. They want
[00:17:26]  to control the entire world. You can't adopt Elm or Imba incrementally. You need dedicated tooling beyond the compiler itself. In some cases Elm sends
[00:17:33]  up the funniest thing about this is I can see where this perspective is coming from. But if you look at Svelte today, there's like an inevitable path they seem
[00:17:45]  to be on of adding more syntax. Like, I don't know if you saw the const tag. I had a little chuckle on the const tag. Cause that reminded
[00:17:51]  me of Marco, uh, tags, API const tag, something we introduced, uh, uh, like over a year ago. And I was, uh, I want to
[00:17:58]  say this is like somewhat of an unfair, like putting Marco in this bucket besides, you know, that it is a language. Um, it's a little bit unfair
[00:18:05] . Cause the point that I think Rich is making is like when you're in Elm, you're writing Elm. You're not writing JavaScript anymore. When you're
[00:18:11]  in Emba, you're writing Emba. You're not writing JavaScript anymore. In Marco, there is the Marco syntax. And then inside you write JavaScript expressions. Um
[00:18:18] , poor JavaScript statements in some cases, but we try and mix JavaScript together. With whatever syntax we need to semantically represent whatever we're trying to do. Um, so
[00:18:28]  it doesn't require you to change the whole world. In fact, like, you know, when you're importing stuff, it's not like a special import. You
[00:18:34]  import using, you know, ECMAScript imports. When you export, you're doing ECMAScript exports. And there's escape hatches for, I want
[00:18:40]  to write some static JavaScript here. I want to write some inline JavaScript here. Like it's JavaScript still. So it's very different in that way. But in,
[00:18:48]  yeah. Yeah, I think that's actually a really good point because Svelte has commandeered JavaScript. So that stuff sits kind of next to each other.
[00:18:57]  So you write some JavaScript and then where Svelte begins and JavaScript ends isn't always clear. A lot of people actually are really unclear on that. Um, because
[00:19:06]  they're like, oh, um, I'm just writing JavaScript. And then they think to themselves, oh, now I had the dollar sign. Now I'm doing some
[00:19:13]  Svelte stuff or whatever. The truth is let has already been commandeered. Uh, so like you, you've already made it a signal, so to
[00:19:20]  speak, like in like their version of it. So I think it's interesting because with Marco, it's very explicit where the boundaries are between the Marco language and JavaScript is
[00:19:31] , which someone asked a minute ago, like, is it inspired by JavaScript? Is it inspired by TypeScript? And I actually, I was, you mentioned inspired by JavaScript
[00:19:40] , but in a sense, I don't know if Marco, I guess some of the. No, all the expressions are JavaScript in Marco. So it's not even
[00:19:46]  that it's inspired. It's like inspired by HTML, but then you can just slot the language in and that language happens to be JavaScript. But it also can happen to
[00:19:55]  be TypeScript. It could really happen to be something else as well. Pretty much anything. Yeah. The way we kind of spec it out is we look at it and
[00:20:02]  we're like, okay, this is a templating DSL. What should be the first thing that you're writing? Probably the template, right? So it's HTML
[00:20:08]  first. We look at things from, um, you know, as if you're authoring an HTML document. But then there's things that HTML can't do.
[00:20:14]  HTML can't inject a variable. HTML can't run, uh, an import. There's no good way to do that. Um, HTML can't provide variables to the
[00:20:22]  body content. Like there's a whole bunch of things that you would use, um, either JavaScript to do in your, like, you know, maps, for example.
[00:20:30]  Um, like a map is, you know, basically saying, here's a function. I'm going to receive some stuff into this function. It's going to execute
[00:20:36]  more than one time. How do you get those variables in HTML? None of that makes any sense. But what HTML is good at and what it does do is it allows
[00:20:43]  you to say, here's a tree structure. And this tree structure can have metadata associated with it. And the stuff like the implementation of the tags that I call can
[00:20:52]  do essentially whatever. So if what you're trying to do is just passing data and forming a tree structure, that should be all HTML. And that's why, you know
[00:21:00] , even like from the beginning, we have an if tag. Cause if you think about if it's okay, I am going to pass some data that I want you
[00:21:09]  to evaluate as a, if it's a Boolean and then show the body. Right. And like a four tag, but the four tag is special because it needs to
[00:21:14]  inject variables into its body. So that's where we bring in the additional syntax to represent things that HTML could not otherwise represent. But one of the key things is that,
[00:21:22]  you know, when we find these places where you couldn't represent it, represent it in HTML, we look at, well, what if HTML was designed to be able to
[00:21:31]  support that instead of being like, okay. You know, double curlies, hashtag, if whatever, right? No, we're like, or for whatever we're
[00:21:36]  saying, where would this fit in HTML? If HTML was spec to be able to insert variables, if HTML was spec to be able to, you know, do all these
[00:21:47]  things. That's really how we look at the language. Yeah. Yeah. No. And that's an interesting, another interesting point. Cause there's been different perspectives of
[00:21:56]  this over the years, because like I was talking to Mishko recently again. And he was like, again, emphasizing, and this came up in that old react
[00:22:06]  talk that I showed a stream, a couple of streams ago. So only last week actually, but where they, like Angular saw themselves as extending HTML. That was their mission
[00:22:17] , but they didn't actually think of it as extending syntax. They just wanted to use existing syntax and make it a superset of HTML. This is different. It
[00:22:25] 's just funny. Cause there's a bunch of frameworks that call themselves HTML frameworks. It's like a new trendy thing. You know, they're like, we're HTML
[00:22:31] . And every one of them uses a template DSL. And so it always confused me cause I'm like, and it generates JavaScript. So like it's, it
[00:22:41] 's actually not HTML. Obviously in a sense, Marco, isn't much different than the, than those. It has its own DSL. That's on top of HTML
[00:22:48] , but it is really an interesting choice to view that the language design. Isn't just like trying to commandeer piece of HTML was like, what if we could
[00:23:00]  design a more powerful XML or HTML based language, like really embrace it for the semantic meaning that it put forth in the first place. Yeah. Yeah. That's, that
[00:23:14] 's basically our goal. How do we extend HTML? Um, so. Okay. So now hopefully people get an idea of what we're talking about. Of course they have
[00:23:21]  no clue what, what to do it. So, um, I guess I don't know where, how we want to best do this, but I have to ask
[00:23:27]  the question. I mean, we talked a lot about like trade-offs and all this stuff, but just like we, and you were talking about that there were some benefits
[00:23:36]  beyond writing less and ergonomic, but like, why are we designing a language here? Like why, why are we doing this? Yeah. So from our side, I
[00:23:44]  mean, largely it comes down to, you know, Marco has been around for a long time. And so we wanted to have a framework that could achieve our performance goals
[00:23:52] . Really that's how it kind of started. Right. So it's like, how do we build a framework that can achieve our performance goals? And in a lot of
[00:23:57]  ways, achieving those performance goals is aligning with the MPA architecture and sending as little JavaScript as possible, which is kind of being like server rendering first and templating first
[00:24:07] . And so that's kind of how Marco got his legs. Like it started out as really an HTML templating language that, um, eventually got, um, a
[00:24:16]  way to add JavaScript on top of it. Kind of jQuery style, but not really. Like you could do it declaratively and say, I'm going to attach some
[00:24:22]  behavior here. Um, so, I mean, you said that Marco, you know, didn't get islands until it was, you know, like 2015 or something like that
[00:24:29] . But actually from the beginning, Marco had the concept of you had to manually attach where the JavaScript behavior went. It just wasn't automated for you. So it was
[00:24:38]  automated for you at a later point. But so from the very beginning, Marco was like, Hey, let's build some HTML. Let's add as little JavaScript to it
[00:24:46]  as possible. That's what it was designed to do. Um, and so obviously like from starting with HTML and really with this like performance focus, we're trying to
[00:24:56] , um, think about, well, how else can we use the language to, um, improve performance? And so even with islands, there's like a whole bunch of
[00:25:04]  little cases where you could have a foot gun. Like if you want to have, say the very top of your page, be the island. Well, then it kind of
[00:25:10]  breaks down. And also what if things aren't granular enough? Like what if you've got, um, a giant SVG and a template that has like one little
[00:25:17]  bit of static stuff. And we see this, you know, across eBay where, you know, people try and put their, um, stateful logic as low in the
[00:25:25]  tree as possible. But inevitably it's like, you want to mix some stateful stuff with some static stuff. Like that's just the nature of it. Um, and
[00:25:31]  so we're really also looking at how can we use the language to basically just optimize that away. So you're not even thinking about it. Yeah. That, that,
[00:25:39]  that seems like super powerful stuff. And, and thanks for pointing that out again. It's funny cause the, the islands and like the, the, I'm gathering
[00:25:46]  where we got the, I got the 2015 date was because that's when things started looking like more like components and which is more similar to all people islands. But Marco's
[00:25:53]  had this thing called widgets, which were these kind of like, uh, opt in little JavaScript pieces. Mark. So we can clearly say Marco was probably, if you think
[00:26:04]  about it, it was not common thinking to write a JavaScript framework to be a zero JavaScript framework. Like everyone talks about, yeah, zero JS by default now, but
[00:26:12]  Marco was designed from ground up to be like, arguably it's probably the first zero JS framework back in 2014. Certainly. The only one I can think of that actually had
[00:26:23]  the semantics that looked like you're writing a modern framework. Like you still put your event handlers in line, right? Like you still could throw an if statement in
[00:26:31]  the template. You could still re-render like all of that stuff. You just had to say, this is where the JavaScript starts. This is where the JavaScript starts
[00:26:37] . This is where it starts. So that was the thing that we had as an ask, right? So that we could determine. Right. What to send to the browser
[00:26:44] . And it was more manual in the beginning, obviously, but. Right. By 2016 or 17, which I figured late Marco three or Marco four might've been Marco
[00:26:53]  four. If I, if I, if I got my history, right. Marco. Took those kinds of islands and automated it. So the end user didn't even
[00:27:02]  have to do anything. So basically being the first automated island solution. And again, this comes down to the compiler of being able to know enough to look at the components.
[00:27:12]  So you're just authoring components. You pretend like you're writing something like with an SFC style components. I don't like a view or Svelte. And
[00:27:20]  then you just build your app. And Marco's compiler is just like, there's the island. They're the island. There's the island. Don't worry about it
[00:27:26] . Super powerful stuff for like 2017. Like just put this in perspective of what was going on in 2017. I think next JS might've just come out. Um,
[00:27:36]  I think this is two years before Svelte three. Um, this is four years before Astro. Uh, yeah, it was very, very, very against the
[00:27:45]  grain. I mean, we've been fighting an uphill battle with the MPA architecture. And I mean, obviously we can see it like on our pages, you go and
[00:27:52]  measure any page to turn off partial hydration and the page balloons like 80% or more or whatever. So it's like obvious to us, but when you have a small
[00:27:59]  app or you're really trying to demo it, it can be hard. Um, and you know, I mean, all you need to do is get a hacker news demo
[00:28:05]  with 400 comments on it. Yeah, there you go. Now that you found that we're set. That's the benchmark. Yeah. Yeah. Oh man. Uh
[00:28:15] , that, that demo is, uh, what's awesome about it is frameworks have actually been making huge improvements in this area that that demo, I think is going to be
[00:28:20]  obsolete pretty soon. And the, um, by that, I mean, it's going to be really hard to, because like someone at some point, someone pulled out another
[00:28:28]  example. I wanted to test, uh, some web component thing. And they're like, Oh no, web components have a bunch of overhead. So that even the
[00:28:33]  hydration surface of web components was worse. And then they're like, okay, we figured out a way of hacking it, delaying the registration and doing this crazy thing,
[00:28:39]  not normal web components. And they got it faster than like some of my demos, but the problem is they couldn't show, like it wouldn't, like it didn
[00:28:46] 't show up being faster than Astro or Marco in my, my tent thing. So they went and found a store with 10,000 comments. And I was, I
[00:28:52]  was just like, yeah, okay. Like, like what do I, I don't know. Yeah. I mean, it's tricky. And I think it comes back
[00:29:00]  to obviously what you've been talking about that like components and Rich has been talking about components are just a way to organize. Um, and like the thing is, especially
[00:29:10]  with the hooks mentality now, like you're going to break things down, individual hooks. We're looking at behaviors as a encapsulate, like encapsulating behaviors. There's
[00:29:20]  going to be so many more components in your app in a modern app. Um, like before, you know, even, you know, when I was first using react,
[00:29:27]  it's like, Hey, I don't really know where I'm going to split this. I'm just going to like put it all in here until it's a big
[00:29:31]  mess. And then I'm going to refactor it out basically. Right. Right. Whereas now it's like with the hooks mentality, you're kind of thinking about
[00:29:39]  that more, I feel. And so you're going to be building more components. And so if you're, if your framework scales with the number of components that you have
[00:29:45] , like you've pretty much already lost. Right. If you're going to be, um, So you, you, you would, you would safely say that you're
[00:29:52]  in your, you agree with me that components are runtime overhead, generally speaking. Yeah. And Marco tries to pretend that those components don't exist. Yeah. And sorry
[00:30:02] , that was a leading question. This is actually how I ended up working on the Marco team. Um, the, the guys from Marco had actually read my article suggesting that
[00:30:08]  components as a runtime thing were, uh, pure overhead, you know, which has been my kind of message. And they saw the article and they, it's funny,
[00:30:15]  I didn't care about SSR. I was just like doing my stuff, trying to get like the fastest client updates. And they, and I think Michael or Dylan
[00:30:22] , like what they were just like, this, this is what we got to do. This is how we solve hydration. This is how, this is what we need to
[00:30:29]  do. So they brought me on and then they realized I wasn't actually that helpful. And then they just kind of went out on their own stuff anyway. No, um
[00:30:36] , but no, truthfully, we had a really, a lot of really good discussions. We dug really deep into what it meant to design a language, what it meant
[00:30:41]  to design reactivity in, in this sort of world. And, um, I, I, as I said, I am using this moment to kind of plug my
[00:30:49]  own vision of the world here, but the truth of the matter is, um, this, this is not a singular point. Uh, you, when you see stuff like
[00:30:57]  Marco and quick, um, and solid, um, we're, we're all learning this together. Um, so to speak. Yeah. And I mean, this is
[00:31:06]  maybe some people don't know this, but like Marco six has really been like conceptually in development for many years. Um, and one of the first things we set
[00:31:15]  out to actually do was solve this problem of, okay, there's a bunch of static stuff mixed in with your dynamic stuff. So how do we just like partial that even
[00:31:25]  further and split it up, um, super granularly. And we weren't even thinking necessarily about resent resumability at that point. So we had ideas on how
[00:31:33]  we were going to basically split things up in a fine grained ish way, um, without resumability. And then it's like, oh, but this,
[00:31:39]  this, this part doesn't really make sense. Like async and continuing it and like all that stuff. And it's like, we kind of just happened upon res
[00:31:46] umability. Cause it's like, okay, this is what we have. This is what needs to be sent to the browser. And like, you know, there's
[00:31:52]  multiple things that we're trying to tackle at once. Um, cause it's also, it's not just like how much JavaScript to be sent to the browser. It's
[00:31:59]  also how much JavaScript we execute in the browser deal is that it's zero and zero. Um, but what is the first step, you know, and I always come
[00:32:09]  back to this, like if I'm writing an HTML document and I throw a script in there and that script is like document get element by ID, um, on click equals
[00:32:17] , and then set some text content. It's like, you know, like 20 bytes of script that I sent for an interactive counter, for example, every framework, every
[00:32:26]  framework is going to give you two KB or more. Um, set Marco six, which gives you like one KB, but even that's like still quite a
[00:32:35]  lot more than you need. And most frameworks are going to give you 20 KB for that little, right? You're being, you are being generous. Yeah. I
[00:32:44] 'm being super generous. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. That's what I'm saying. Like solid and Svelte will give you around between
[00:32:53]  15 and let's say 15 KB with our full starters, but like a minimal one, we could probably turn that out about, uh, 11 or 12 KB or
[00:32:58]  whatever in that range. And, but then when you go on the other side and get to like react and, and like 60, 70 KB. Yeah. Yeah
[00:33:07] . Yeah. This is just like a super helpful benchmark. Cause it's always nice when you're trying to optimize anything to know what like the limit is. Right. And
[00:33:15]  the limit for this is very clear. If we had an AI that just built the most optimized app, it would probably send maybe 20 bytes of JavaScript for a counter, maybe
[00:33:23]  less. And, you know, here we are with our frameworks, even with, you know, compilers in front of them and all that stuff sending ridiculous amounts
[00:33:30] . And so, yeah, there's a lot of room for improvement there. Yeah. And I mean, there's balances to be had like, um, but there
[00:33:37] 's patterns to explore and all this stuff. And I don't know how much we want to get. Yeah. Yeah. It's fine. Yeah, no, that's
[00:33:43]  fine. We, we, we, we actually don't, but. It's kind of like, I kind of see it like the JS framework benchmark, right?
[00:33:47]  You've got native there so that you can see, okay, someone who tried really hard writing vanilla code. What, what could they accomplish? And the same way I see
[00:33:56]  hydration, like the vanilla is just ridiculously ahead of everything else right now. Yeah. Right. Yeah. Yeah, no, that's, that's, that's, that
[00:34:04] 's a good point. And actually I was trying to do the same thing on SSR rendering. Um, I actually went into the isomorphic benchmark and added a
[00:34:10]  vanilla implementation. And, uh, I mean, I probably haven't maxed it yet, but I'll tell you that much. Uh, we still got, we can
[00:34:19] , we can still double triple our current speeds for SSR on JavaScript on the server. And this is rostering rendering. So like, I mean, it just, there
[00:34:27] 's, there's, there's a lot still to be done here. So I guess it is interesting to see how much the impact of that is, but because you have
[00:34:34]  to look at it holistically, um, because like in these micro benchmarks, we can get really fixated on specific measurements. Um, yeah, but I mean,
[00:34:43]  yeah, we were kind of diverging off the topic here. Basically language was created to enable a new type of performance. Um, it's, it's, it's
[00:34:52]  an interesting thing because the way I look at it for people parallel, even though like quick has a compiler as well, it, it, it's kind of like it's
[00:35:00]  the, the, the, for some people who kind of coming at this at a 10,000 feet, the, the difference here is kind of a little bit like
[00:35:08]  the difference with Svelte and solid where like Marco's like, okay, let's lean into the language in the compiler, which is kind of like where Svelte
[00:35:17]  is thinking was for client stuff. And quick, it was like, let's try and maybe make everything like try and find a way to do less compilation and the end
[00:35:28]  result might end up actually being kind of similar, but I'm not sure where this lands yet. I'm just saying like, uh, it's an, it's very
[00:35:35]  interesting exploration that's going on to see the difference between what you can do with say, um, trying to keep things as APIs in JavaScript versus trying to embrace the language.
[00:35:47]  And I think we're going to see this conflict or not conflict, but this tension or kind of thing going on a lot, even with things like react, forget.
[00:35:55]  And like this whole idea, like react suggested that they were a language or someone the core team did a few months back. Um, you know, because the hooks being like
[00:36:04]  a language and they have a lot of language like properties. And when you look at things like views, a new syntax sugar effort, it's called like the ref sugar
[00:36:12]  or the new template thing. They they're trying to explore more in this area. And it's an interesting range because sometimes you find this when you're looking at these things
[00:36:20]  where you're trying to keep the best parts of each piece, but sometimes compromise just sacrifices the whole picture. And I actually really like Marco's very pure ish,
[00:36:33]  um, look at this because it keeps boundaries clear and it gives you the most, uh, like room in a sense to, to do what you need to do. Yeah
[00:36:45] . You want to pass JavaScript data around a tree structure and move that tree structure around in various ways. And you want it to work well on the server, in the
[00:36:56]  browser and send very little JavaScript. And that's what we are trying to design a language to do. Um, but like, you know, looking at it holistically takes
[00:37:04]  a lot of time. It's, it's hard work. Like one little change over here. It's like, well, that kind of looks nice or that kind of
[00:37:10]  works well for these cases. But it's like, you really have to dig down to the semantic meaning of everything and how it impacts everything else. And so, yeah,
[00:37:18]  um, it's a, it's a, it's a challenge for sure. Whereas, you know, even in something like Svelte, it's like,
[00:37:26]  okay, um, X equals X. It's like, well, no one who understands JavaScript is going to think that does anything. Right. Um, and so it's
[00:37:35]  like, maybe there should be a different way to do that. And I mean, that's kind of where we're a little bit out on the Marco side right now as
[00:37:40]  well. But it's like when you're adding additional meaning to JavaScript that either makes no sense or give different meaning to JavaScript that does make sense. Uh, you're
[00:37:48]  playing a little bit of a dangerous game. And I think partly, even if you consider hooks as a language, um, that's where a lot of the confusion comes from
[00:37:55] . Cause there, it's not only just like these hooks that you think is like giving you state. It's also rendering again and again and again, which I mean
[00:38:01] , solid's model is admittedly a lot simpler, um, and easier to reason about. But like, yeah, I think you can get into issues with that. Right
[00:38:09] . Yeah, no, that, that, that makes sense. And did someone say semantics? Yeah. Uh, Ben is very, he has his own stream stream and
[00:38:18]  they like the very big on, um, uh, accessibility. Um, and I think it's interesting cause when you mess with semantics, you potentially mess with accessibility
[00:38:28] . Um, not necessarily like you can kind of cater for it, but I, I actually think that there is, uh, there is, uh, there is like that
[00:38:38]  potential. So it is something we, because you never know what future thing you're going to like step on when you're trying, when you try and stay within like too
[00:38:47]  much in the lines in a sense when you're changing semantics. Like you can, you could, you can do some real damage. Yeah. I mean, I
[00:38:54]  don't know. I feel, you know, you bash, uh, TypeScript sometimes. I feel like there's so many times we're in TypeScript. I'm
[00:39:00]  like programming something and it's just like, oh, you can't actually do that in TypeScript. Like, and it's like, sometimes the semantics will be clear
[00:39:08] , but other times it's like, okay, they're never going to be able to do that in TypeScript. And yeah, anyways. It is funny though. You
[00:39:16]  bring up TypeScript because TypeScript is like a language and has a whole considerations there. But I don't think a lot of people experience TypeScript the same way we
[00:39:22]  necessarily experience TypeScript. The Theo, Theo was kind of talking about this because he was like, obviously very big TypeScript, um, enthusiast. He makes all
[00:39:33]  this stuff TypeScript. They even have like a joke on the CLI. Like if you, if you try and start a project and you don't select TypeScript,
[00:39:39]  they're like, yeah, you're wrong. And they just install TypeScript anyways. But, uh, from library maintainer language perspective, like all that stuff.
[00:39:47]  I mean, maybe we'll see some of it today. You, you hit, you see TypeScript in a very different light. Um, but I mean, if you
[00:39:54] 're someone who is a framework author, like I don't even care if you don't like TypeScript, obviously, you know, Rich Harris doesn't seem to like Type
[00:40:01] Script. A lot of framework authors don't seem to like TypeScript, but they love what it gives to their users. And so, you know, every one of
[00:40:06]  these tools is basically written in TypeScript or has types or has at least thought about that experience. And not just because it's like, wow, some people are using
[00:40:14]  TypeScript, um, with my stuff. And so I better, you know, allow this like niche to do it. It's like, no, cause it helps the
[00:40:19]  JavaScript people as well. It's like, do you care about your users being able to refactor things easier, get the IntelliSense? Like there's just,
[00:40:25]  yeah, on the user side, it's definitely a different story, but making that experience seamless, especially when you're building a new language, which hopefully we'll get to
[00:40:33] , um, is, uh, is a challenge and not really what TypeScript was designed to do. So, yeah. So, yeah, I mean, you,
[00:40:42]  you brought it up here. What, what, maybe we should just get into something. What do you, what, what do you want to show us today? Like what
[00:40:48] ? Yeah. So, I mean, going back a little bit, I wanted to, so there's probably a lot of people here who aren't super familiar with Marco's
[00:40:55]  language or like what additions we've made to the language. And I've also seen a lot of, um, conversation lately around people decks 2.0, right?
[00:41:06]  Like what, like if only JSX could represent this one thing in a, in a shorter way, or if, you know, so there's been a lot of that
[00:41:12] . And so what I've, uh, built and Ryan was talking about it, um, on Twitter is just a really simple, um, although it works pretty well.
[00:41:21]  Uh, tool that will basically take Marco's language directly from the parser, convert it into a Babel JSX AST. And so you can essentially see what
[00:41:32]  the equivalent JSX is to what Marco allows you to write. And so I wanted to go over some of this, um, and show you sort of what the,
[00:41:40]  uh, what it kind of looks like. And hopefully you'll see, um, cases where it's like, okay, yeah, that saves me a lot of code.
[00:41:47]  And then also like, oh yeah, this one would save me like a bug I might have introduced or something like that. Oh, that sounds cool. I mean,
[00:41:53]  I think that's how many people who want to see, um, Marco to JSX, I guess. Marco to solid. We'll say solid. It's a little
[00:42:01]  bit solid specific right now. Cause all it has great. Um, well, solid model works a lot closer to the way we want the language to work. Um, and
[00:42:10]  so it's easier as a target. Right. Like run things once and run things once, no components, uh, fine grained updates, all that kind of stuff.
[00:42:16]  Being on the nest state anywhere, which is funny. I'm excited about this because the, the, one of the things is JSX. I like, uh,
[00:42:23]  because it's portability, but there are certain things that solid can support that JSX does not support, but Marco's language actually has them first class. So yeah,
[00:42:32]  maybe, maybe we should just get into it and, uh, and see what we can do here. Let's see if the screen shares working this time. Um, what
[00:42:41]  do we got? Uh, tire screen. Okay. There we go. Cool. Give me a second. Marco to JSX. Can you all see? Not yet
[00:42:52] . I'm going to share it in two seconds. Okay. I'm going to make, throw up a banner here and let's check out what, what, oh,
[00:42:59]  sweet. It's like a little playground type thing. I guess you're in VS code, but this, this, this will make things really nice. I've got Marco
[00:43:04]  on the left side. Solid JSX. Yeah. I'm in VS code. So there's basically. Yeah. Yeah. That's all it is. And I just
[00:43:13]  have it running, um, in the background here to like live compile it. So you can see we've got a Marco template. And I guess before we start,
[00:43:20]  I really do think Marco's language has a whole bunch of benefits that could be used in something like solid or really any other, um, framework. And so even though
[00:43:29]  this is a dot Marco file, I'm definitely, um, open to the idea of maybe let's just make it like a dot JSX two file or something like that
[00:43:37] . Um, right. And so, but anyways, we're using the dot Marco extension for the, uh, syntax highlighting here, even though this isn't a Marco quote
[00:43:45]  unquote, uh, like language, we're not going to be using all, all the features of language. You're going to see solid here. So I love that
[00:43:51]  the empty file is an empty component export. Like right off the bat, this is such a good starting point. Sorry. Yeah. Cause it's, it's a single
[00:44:02]  file component, uh, format. So the output directly makes the component. Just having the file makes an empty component. I don't know. Sorry. It's yeah.
[00:44:12]  And so where do we start? Well, we start with, uh, HTML through a div. We've got a div over there. So like, you know,
[00:44:16]  this is the Marco template that you write. And in a lot of ways it's going to be similar to, or basically the same as what you would actually write in Marco
[00:44:24] , but you'll see some solid, um, specific pieces as well. So Marco, you know, Ryan was talking about that. We have like shorthands as well
[00:44:30] . So we have like a shorthand for like adding a class. Can I clarify something? Two seconds here. Someone's asking. Uh, so the outputs JSX
[00:44:38] , um, generally speaking, Marco actually outputs a super optimized like thing that does partial hydration at the sub component level on the reactive graph. And it does this crazy cross
[00:44:50] , uh, file reactivity. But what, what we're showing here is that Marco is a general purpose language that could output other frameworks syntax. Like you, we didn
[00:45:00] 't talk about this, but the process of getting TypeScript, we'll talk about a bit later into Marco involved generating, um, JSX to a certain degree. And
[00:45:07]  I think Dylan was just playing around with Babel and he was like, you know what? I can output solid. So let's put solid. Yeah. Like this
[00:45:13]  only took me like a day maybe to do. Um, and it's pretty feature complete. And I think hopefully some of you will appreciate, um, what's here,
[00:45:21]  but so, I mean, I'm showing like a pretty simple one here and a lot of people might not even like this, but we have a shorthand for,
[00:45:26]  you know, defining classes in line. So you could have, you know, A and B, you've got two classes there. There you go. You've got the
[00:45:32]  two classes. This reminds me of, uh, what was a pug or Jade? Yeah. Yeah. Yeah. And you know, Ryan said, and I'll just
[00:45:40]  get it out of the way. Um, Marco does support a, uh, concise mode. So this is also fine. We throw a span in there and now we've
[00:45:46]  got the spans nested. So we've got the concise mode and, and all that is there. I'm not going to focus on that. Cause this is one of
[00:45:51]  those places where it's like, yeah, you're writing less code, but I don't think it's that bad to have this additional stuff because there is some value
[00:45:59]  in knowing like, okay, here's where it ends beyond just like the indentation level. So we often usually will write it in, um, in the HTML format,
[00:46:08]  but the market language supports this and this is, so if you're someone who's like looking to write the least code possible, Marco will do that for you. Yeah.
[00:46:16]  I actually absolutely love, I mean, we're not probably get too much into the tags API here, but I love seeing the concise mode examples of Marco with the tags.
[00:46:23]  because someone's always like, look how much less code Svelte is. This runs circles around Svelte on less code. Um, yeah. I mean,
[00:46:29]  where like, where's your, where's your script tag and all that stuff. Well, at the minute, maybe that was what bugged me about that. Like let
[00:46:37]  count example with the react meme. You guys have all seen it where it's like the react state thing. And then Svelte's like let count. And I'm
[00:46:44]  like, where's the script tag. See in Marco, this would actually be true, but in Svelte, there's actually a whole bunch of other boiler plate that
[00:46:48]  they, they didn't actually show and conveniently didn't show in the example. So. Yeah. Yeah. So you write very little. This is a valid Marco file
[00:46:56] . This is a valid Marco file. Oh yeah. Actually very important. Very, very important question. Uh, because every, all my, uh, viewers very much care
[00:47:04]  about this question because I care about this question. What's your opinion about coffee script? What's my opinion about coffee script? Yes. Um, you know, I
[00:47:13]  actually love coffee script. Um, I used it, uh, quite a lot back when it first came out until, uh, you know, kind of went out of fashion
[00:47:22] , but there were some things that I didn't like about coffee script. I didn't actually like the optional parentheses in a lot of cases. Like there was times,
[00:47:29]  and this is where I think you have to look at the language holistically and just try and figure out what you're doing. There are times when the coffee script is so
[00:47:36]  terse at the point of like confusing you. You don't actually know what's going on. You have to mentally parse it more. Yeah. That could definitely happen in
[00:47:43]  coffee script, but there are other times where coffee script actually added additional keywords that made things make more sense. Like, I don't know who, and I'm sure
[00:47:52]  some people would argue, but like a ternary in JavaScript, no one really likes that. Right? Like it's not like if you're sure we're all used
[00:48:01]  to it now, but if it was just an if statement that you could write, wouldn't that be better? Like if you could just have, uh, you know,
[00:48:08]  inline, uh, I don't want to jump ahead. Cause then it'll show the output, but you know, if we could inline be like const x equals
[00:48:15]  if something, then this, like that's exactly what coffee script allowed you to do is very clear in some of those cases or even pretty much everything related to turning the
[00:48:24] , uh, um, everything into an expression. I love that idea. Um, and there's just a few things that they made a lot simpler. And so definitely enjoyed
[00:48:33]  that aspect of it. Uh, typescript is the exact opposite. And, um, That's why it was so hard for me, but yes. But yeah, uh
[00:48:42] , but, but I will say, um, it's way too easy to have flip guns and it's way too easy to write stuff. That's all in one
[00:48:48]  line that probably shouldn't have been or stuff that, um, like those kinds of things. I don't really like indentation based. Like, yeah, I think it
[00:48:55] 's okay, but that's not the selling point to me. There was other things in coffee script that I think they nailed. And thankfully a lot of that made it back
[00:49:01]  to JavaScript, but not all of it. Um, yeah, anyways, that's my opinion on coffee script. Cool. Yeah. We had to get that out of
[00:49:08]  the way is very important question. Yeah. Okay. So, um, so we're in this HTML. Um, obviously you can write, you know, you can write
[00:49:18]  regular HTML in here. I throw a class high, but one of the things that, um, we actually want to do when we're working with our custom tags,
[00:49:26]  like let's just pretend this is some tag. I haven't like imported there or anything yet. Yeah. Um, but you actually want to pass like complex data through
[00:49:35] , right? That's one of the first things you're going to do is pass. Like you want to pass the dates around. You want to pass regexes around
[00:49:40] . You want to pass functions around, like all this stuff. And so attributes are probably one of the first places that Marco actually differentiates, um, from something like JS
[00:49:49] X. Right. So JSX is really like, I see it as kind of a dated thing at this point, you know? So if we're in JSX and
[00:49:55]  this is going to cause this to error, um, you know, you would write something like this. If there was something dynamic in here. Right. Um, but
[00:50:04]  Marco is like, okay, we're writing HTML. We want to be able to pass JavaScript values. We already know that this is a valid JavaScript string. What if the
[00:50:14]  attributes could just be JavaScript values? And that's exactly what it is in Marco. So like, if we wanted to say like date equals new date here, then we're
[00:50:24]  good. And you can see on the right hand side, you you've got the, it wraps it. But Marco knows that this is a JavaScript expression. It'll
[00:50:32]  follow it using the same semantics. You would if you had like a const X equals new date or whatever. It knows when it terminates, which is basically when there
[00:50:38] 's, um, a space and a new attribute. And so it also supports all the things that HTML has like Boolean operators. So if you want to view check
[00:50:48] , like, uh, oh, did I not implement Boolean attributes in this? Okay. Apparently I didn't implement Boolean attributes in the, in this translation, but
[00:50:56]  in Marco proper, this would be like, you know, check equals true essentially. Um, and, but were you going to say something? Well, is there any
[00:51:04]  difference between the component, uh, translation in the native element translation? No, Boolean attributes is just like, we, you know, we're not trying to encro
[00:51:12] ach on HTML. It valid HTML that you can write for the most part should just, you copy paste it from MDN or whatever into a Marco file and it'll work
[00:51:21] . So even things like, you know, input, input doesn't need a closing tag. Right. Um, and so when we turn it into JSX, it
[00:51:29]  does, but, uh, it doesn't. So that's fine. We'll let you write HTML. Marco is very much HTML first. And then how can we extend
[00:51:35]  it? And so one of the things, big one, like I said, is you can write arbitrary JavaScript in here and, you know, you can throw parentheses in here
[00:51:42] . If it makes you, it makes you feel better. Cause that's part of a JavaScript expression as well, but you can get really as crazy as you want.
[00:51:47]  So you could be like, you know, date now plus 100 or something. Right. And that's it. So did you want to comment? Looks like you're going
[00:51:57]  to say something on that. No, no, it's cool. Yeah. No, the friends is actually a good thing. Cause like if you do feel like you're
[00:52:03]  putting a bunch of stuff on the line and you're worrying about losing readability, um, honestly, friends might've just been better than curly braces in the first place because
[00:52:15]  it is valid JavaScript. And it is a very clear indicator that you're going into a block. It has no extra, um, meaning to it. Um, and
[00:52:22]  yeah, you could, yeah. Especially cause. Yeah, honestly. Yeah. This is. Yeah. But it, you know, like simple things. It's like date
[00:52:30] . Yeah. You know, and that's what most of it's going to be like. We, we essentially leave it up to you. Like in a lot of ways
[00:52:37]  we draw inspiration from the object syntax in JavaScript, right? Like when you're constructing an object, it uses colons, but otherwise it follows kind of the same sem
[00:52:46] antics. And along that vein, one of the things that we, um, you know, often need to do when we're building components is, uh, add event hand
[00:52:56] lers. Right. So like if, if this, some tag that I have here, some, someone's pointing something out, you can't just write input type text
[00:53:03] . Exactly. Yeah. You can't cause that would be. Right. And so, and this, someone's probably going to point out that that's valid HTML because
[00:53:11]  you, and because Marco actually does this Marco actually removes this colons from strings to reduce SSR output. Right. Yeah. So that's the next comment. It's
[00:53:21]  not a strict superset, right? We're trying to build the most usable superset, um, that, that we can. And so there are, you know,
[00:53:28]  intentional deviations. You'll see more of them here, but by and large, you copy some valid HTML. That's not like super mangled via a minifier
[00:53:37]  or something like that and paste it into a Marco file. And it's going to. Yeah, actually we, we hit this problem. Um, because Marco generates, uh
[00:53:44] , the strings without the quotations and a bunch of people were like, can we opt out of this? All our HTML validators are failing. Um, it is valid
[00:53:52]  HTML, but all the tooling around HTML validation expects the, the colons, uh, or the quotations. Uh, are the quotes to be there. So yeah
[00:54:02] . Yeah. And that was a, you know, a decision we had to make. Cause when we were, um, optimizing for, uh, is actually the search page
[00:54:09] . Um, we realized we could shave. Uh, I want to say it was like four kilobytes of HTML compressed just by removing the comments in the output.
[00:54:20]  Um, and so that four kilobytes, I mean, it's not nothing. And beyond that, it actually meant we were using significantly less memory on the server as
[00:54:30]  well, just by not concatenating as many strings. Um, or building up as large strings. And so, yeah, we went with that. And generally that's
[00:54:37]  where we air. We want your Marco. Like, even if your Marco code didn't output HTML, I wouldn't really care as long as it was as fast as it
[00:54:43]  could possibly be. Yeah. I forgot to mention this. Marco's SSR is insanely fast. Um, is the best way to put it. I worked really hard
[00:54:52]  on solid in a benchmark to get like our string rendering faster. But if you look at the, the holistic serving story of like more than just creating the string, but
[00:55:01]  actually look at serving, compressing, serving like the thing. Marco's had years at eBay to optimize it. Anytime you get a benchmark and you're like, let's
[00:55:10]  do a throughput test or do whatever kind of test. You, you're, you have to double check the results. Cause you're like, like, you're like,
[00:55:16]  how is Marco serving like a hundred times the requests of other JavaScript frameworks? Um, it is, um, just incredibly fast performance. And that's cause we have people
[00:55:27]  like Dylan literally spending so much time just ensuring that performance. eBay has actually like a, a speed team. And if a team's like slips at you on their, like
[00:55:37]  on their numbers, um, you know, someone's going to get a talking to. And unfortunate part is then the team goes, Oh, I don't know.
[00:55:45]  Um, it must be Marco's fault. You know what I mean? Like, I mean, this is pretty customers. I'm not going to get onto anyone's case
[00:55:52]  on eBay. You just know you're working on a product team. You know, you, you look into his stuff and then you're like, Oh, maybe it's
[00:55:58]  the framework. So, uh, Dylan has so many years of experience of, of just dealing, working through that and actually figuring out at eBay production scale, how to serve
[00:56:09]  the fastest files in Java. Yeah. And I think that feeds a lot back into our language design and stuff as well. Cause we see all the places where people are
[00:56:17] , you know, writing anti patterns or things that would just generally be slow. And it's like, how can we make it so they can't do that? Or how
[00:56:23]  can we make it so that at least their default intuition would be not to do that. Um, or how can we just make it so the framework is just to the wall
[00:56:29]  as fast as it can possibly be. Um, and we're not there. Like we know that even you said, uh, earlier, what did you say? We've
[00:56:36]  got like three times faster. We could potentially get theoretically on just like string concatenation. If you're doing vanilla, um, uh, on the server side.
[00:56:45]  Right. And so even in Marco six, I suspect that our, um, new server side rendering engine will be a little bit faster. Cause there's no concept of
[00:56:53]  components, but we're not super concerned about that. Cause like, we're at least within the ballpark. Um, which is why I keep going back to the
[00:57:00]  like hydration story where it's not that we're three times slower than it could be. We're literally in many cases, thousands of times slower than it could be. Um
[00:57:09] , I think, I think of it like the ES build, like, you know, the ES build homepage where it's just like your bundler and it's like 40
[00:57:16]  seconds or two minutes or something like that. And it's like us like point something or whatever. It's like, it's kind of the same story around hydration.
[00:57:22]  And I, and I think that's why, I mean, I mean, to me, it's really awesome to be able to work on that. Cause there's so
[00:57:27]  much things you can do. And I mean, it's a big problem because it touches so many pieces, but super cool to see tools like quick and Astro and
[00:57:34]  other people actually like realizing, wow. Like there's low hanging fruit here and there's like crazy stuff beyond that. So anyways, that's obviously a side tangent thing.
[00:57:45]  Yeah. Yeah, no, there's a lot of side tangent options here. Looking at the discussions. I'm just like reading down. I'm like someone mentioned, uh
[00:57:52] , punning. Uh, we, we, we looked at the syntax for this. The problem is you want to keep Boolean attributes things. If you wanted to
[00:58:00]  go here, I think, yeah, that's an interesting, it's an interesting one. Yeah. So like, I mean, we want to keep Boolean attributes because
[00:58:07]  I mean, they are pretty common in any. Yeah, except you didn't exist. I didn't implement this for this. I'm sad now. Cause I went through
[00:58:13]  like our features and tried to implement all of them. And yeah, apparently we're missing this one. Oh, well it is actually there. Marco does support it. It
[00:58:21] 's just not showing up in the JSX. Yeah. Um, output. Um, but yeah, so I think there is other things that caused us to, uh
[00:58:28] , avoid stuff. Like we're trying actually surprisingly, maybe not to introduce tons of syntax. We want to make it so that you gravitate towards like a common set of
[00:58:37]  things. Like if it is just to save a few characters, we try not to actually do that kind of stuff. And so when I show you some other syntax that
[00:58:44]  we have, it'll maybe make it more obvious why we haven't decided to do that. Um, but maybe I should just keep going. Yeah. Let's keep on
[00:58:53]  going. We actually did look at this for a minute, but, uh, yeah, we, we, we, we actually, we played around like, yeah, you
[00:58:59] 'll see why we've actually played around with a few of these ideas, but yeah, let's keep on going Dylan. Yeah. So, you know, I'm
[00:59:04]  focusing on the attributes just to start. Cause it's like probably the first thing that you're going to want to do, but yeah. So I was saying that, you
[00:59:12]  know, you're going to want to be able to pass functions around. And so, you know, you can do on click, you do on click equals, and
[00:59:19]  you know, this is fine. Right. You pass a click handler through. It's an arrow function. Marco knows this is JavaScript. That's fine. You can have
[00:59:26]  other attributes down here. You know, that's fine. Um, did you not. Oh, did I not save? Yeah, I didn't save. So there it
[00:59:33]  is. You can see went through. Um, so, I mean, I'll just delete that, but so like, this is like super common and there is a little
[00:59:42]  bit of noise here. I mean, obviously this is probably what you would write in JSX. So it's, it's only saving you really two characters here,
[00:59:48]  but like, since it's so common and because there's precedence in JavaScript, we want this to be more like a JavaScript object. We borrow the JavaScript method shorth
[00:59:57] and. So you can just write your click hand players like this, right? So you can go in console log, um, m dot target or whatever. Right. And
[01:00:06]  you know, it's going to output that arrow function like you would have written, but you actually save like a decent amount of characters. And this is such a common
[01:00:12]  thing. Um, that you're doing that kind of made sense to, to add to the language, but it is a little bit superficial this one. Um, so the
[01:00:20]  other thing, um, just like finishing up kind of on the attributes or some that I might not get to. Did you do spread? Yes. That's what I'm
[01:00:29]  going to next. So the other thing is you'll want to, uh, spread. And so again, taking, uh, taking inspiration from JavaScript, you just do
[01:00:38]  dot dot dot in your attributes, right? Like there's no, there's no curlies around this. Um, likewise, and JSX can do this too. You
[01:00:46]  can throw comments, um, in there. That's fine. Um, and so there's a few other things that you can do in the attributes that I, I might
[01:00:54]  not get to, uh, just yet, but like in general, we wanted to make it so that, you know, this looks like HTML, but has the full
[01:01:01]  capability and niceness of writing these JavaScript, um, objects. We try and take inspiration from both sides. Um, yeah. So I could go into some of the
[01:01:12]  other, uh, things that you could represent here. This is still largely superficial, um, stuff at this point. Right. I will say, uh, so let's
[01:01:22]  like, um, close some tag here and throw some content in here. So, you know, we've got high, um, in there. Um, one of the
[01:01:32]  things that always bothered me in JSX, and you actually pointed out like with the attributes, maybe it should have been parentheses, right? Cause that kind of matches with
[01:01:42]  JavaScript. Um, but like, you know, you were talking, uh, data equals X or whatever that maybe they should have just been parentheses. Um, also JSX
[01:01:53]  uses the, this down here. And so from our perspective, and this is kind of around the same time that JSX was being built actually, um, but inspired
[01:02:06]  by, uh, HTML template elements, which there is precedent for interpolating in strings in JavaScript, right? So why don't we use that? So Marco has dollar,
[01:02:15]  um, dollar curly. And this, in this case, it's one more character, right? So, but the, the decision here is like, okay, what is
[01:02:23]  the JavaScript equivalent of interpolating into text content? It's, it's dollar curly. It's dollar curly. I mean, you could say that JSX is JavaScript
[01:02:30] . I'm not ready to make that. Uh, I mean, it kind of is de facto at this point, but if you were to look at the syntax outside of
[01:02:37]  JavaScript and try and make it more cohesive, if you're thinking of this as interpolating into strings, which it is, you're probably gonna lean towards dollar curly.
[01:02:46]  Cause that's, what's there. Yeah. This is template literals. Uh, yeah. Right. And so, but, but here's the thing, um,
[01:02:53]  this isn't just interpolating into strings, right? Like maybe you want to like, this is interpolating into an escaped string, right? Like you could think of this
[01:03:03]  as like an HTML tag template literal or something like that. Right. It's going to escape everything. What if you want to not escape everything? Well, obviously,
[01:03:12]  you know, in solid, um, you'd probably do like, what is it? Uh, oh, come on. Um, you know, inner HTML equals and then
[01:03:20]  that or whatever. So that, you know, that's still, that's still. Or in react dangerously. Dangerously. Yeah. It's super dangerous. I
[01:03:28]  mean, it is kind of, but it doesn't have to be a super ugly API. So we have, um, a shorthand in Marco to do just
[01:03:35]  that on escape HTML. It's like that. And, um, you know, here I have it outputting it wrapped, but I was talking with Ryan a little bit
[01:03:45] . Um, uh, and solid could easily support something like this where you could actually put inline HTML in existing text content so that you wouldn't have to like wrap it
[01:03:56] . Yeah. The big thing with us is cause we returned real dom nodes. Uh, we can make a component or a function that literally just returns whatever the hell we
[01:04:05]  want it to. So we could just like make it return the nodes that are unescaped and just pass them through. But the, the challenge here is JSX
[01:04:13]  actually doesn't have a syntax for this. Right. So like in solid, the best you could do as you're saying is basically create this new function or something that you
[01:04:23]  could use inline. That's the best way you could represent it. Right. But like we're designing this from the perspective of like a templating language that needs
[01:04:31]  this as a core piece of functionality. And so we have the dollar exclamation mark syntax, um, that does that. And so, you know, this is another one
[01:04:38]  of those things where it's like, yeah, JavaScript got us 99% of the way there, but we need something different to represent this other behavior that is similar.
[01:04:49]  And so we add, um, a new syntax. That's cool. Yeah. This is something, as I said, JSX does not have someone who's like,
[01:04:55]  how come JSX is not enough? Uh, we covered that already. And I think if you just keep on watching, you will see that there's a lot of other
[01:05:01]  stuff that, you know, it's not that JSX isn't enough in a lot of cases. It's just like, why stop there? We can do more.
[01:05:08]  So let's, yeah. Um, and so, uh, another thing, let's see. So, I mean, I haven't shown some of the JavaScript side
[01:05:16]  so far. I've just shown you like attributes can be JavaScript expressions. You can interpolate in text content. Um, but so one thing that, um, isn't
[01:05:26]  that common, but when you need it, it's very verbose and annoying to actually do is to have a tag that is dynamic. Right. And so if we
[01:05:37]  were to say, um, like, let's make this a, uh, yeah. You could say it is a dynamic tag. Yes. Right. So let's say
[01:05:46]  we have a tag and right here, we want to say that this, um, given some property, if this property matches, then it's, uh, input. If
[01:05:55]  this other property matches, then it's a text area or something like that. Okay. Right. So on the other end, we have props in, uh, in
[01:06:02]  Marco, you can actually interpolate into the tag name and return a dynamic tag name. Right. So you can go, uh, you know, in this case, maybe
[01:06:10]  go like props dot, um, what is it? Like is text area. Um, and then you could do, you know, text area or, uh, input or
[01:06:21]  whatever, something like that. Um, and you can see, you know, it outputs the solid equivalent of importing their dynamic component that swaps it in there and any
[01:06:28]  other attributes. You know, aria, uh, something labeled by equals whatever. Um, we'll just get forwarded through. But so if you look at this,
[01:06:40]  I mean, this is solid specific. You had to go in like import another component to do this. And the same, like, and the main reason you had to
[01:06:48]  do that is cause there's no way to represent this kind of thing. It's solid, even though, or sorry, not in solid in JSX, even though it
[01:06:55] 's something that is like relatively common, obviously solid had to implement it here. And the JSX version of this is even worse mind you. Cause you have to actually
[01:07:02]  like, like if I were to edit this, I'm in not in the right place, but you'd have to like const tag name equals and then do it up here
[01:07:09] . So now you could imagine this is like a giant text file with this interpolated thing somewhere down below. You've got to have a const way up at the top of
[01:07:17]  your file. And it's that same thing where now you've got to go to multiple places in order to extract this out. If you, if you needed to,
[01:07:23]  like, if I need to extract this out into another component, like, boom, I've got that. It's all there. We know that that's a common thing
[01:07:30]  you need to do. So Marco has a syntax for allowing you to swap, um, the tag name. And so another thing I'll get to, like I said,
[01:07:37]  Marco is, um, really tries to work with JavaScript. So there's a few things that we don't need to do on the market side, like imports and exports.
[01:07:47]  So imports are just regular, um, JavaScript imports. So you can just do like import my text area from, uh, you know, we'll just do somewhere,
[01:07:57]  somewhere. Um, and then, you know, if you see that import got there and, you know, with this, my text area, um, it's smart enough
[01:08:07]  to, to throw that in there. So you could do a dynamic tag importing the text area. Now this is one of the places where solid, um, is different than
[01:08:14]  Marco and it isn't, um, captured. Or we can't make it easily work the same here, but Marco automatically imports templates for you as well by default.
[01:08:23]  So you can in Marco go and do my text area, uh, just like you could install it and import it and all that stuff. But Marco will actually using like a
[01:08:33]  similar mechanism to node module discovery, walk up your components directories and find the closest in this case, my text area. So if you had your, my text area
[01:08:41]  in a folder that followed our rules, it would just automatically conceptually be imported for you and you would be able to use it without importing it. And that's another one
[01:08:49]  of those things where. You know, now you've got it imported and up here and you've got the code down here. And so if you want to extract this
[01:08:57]  thing out, you've got to go touch two places, right? And every time you have to go and touch two places during the refactoring is an opportunity for you
[01:09:04]  to mess up. Right. Yeah. I think that there's a lot of value there. Someone was mentioning how the interpolation syntax on the tag name was like harder
[01:09:11]  to read, but the things like you don't have to put the logic in there. You could put it above. The only difference is that the dollar sign is much more
[01:09:19]  explicit. When you get there, you can pull the logic out and do like, like we were, um, you know, like, like what you kind of do with
[01:09:26]  react. But the thing is react model re renders. So that's kind of implicit. This is what we're talking about here is a purely, um, declar
[01:09:34] ative approach. So it's not this like imperative re render, like reacts, like stuff very kind of like top down. So, um, you can spread it out if
[01:09:42]  you want to, but putting it together has a lot of benefits. Yeah. And so I want to be clear. Yes. Maybe this is, this is too much to
[01:09:50]  have here. Um, but if you had something that was like, maybe this is just a lookup, like my lookup name. Like, is this so bad
[01:09:57]  to be able to, to represent right in there? Um, but so maybe I'll get to it in just a second, but just real quick. Marco also allows you
[01:10:06]  to like export using regular JavaScript exports. Although maybe I like botched the translation of that. So it didn't seem to work. Um, let me just make sure I
[01:10:15]  didn't mess things up too bad here. Yeah, we're good. Um, so, but beyond that, so there's import export, you know, they work as
[01:10:24]  you would. As you'd expect, but we also have two, uh, top level things that you can do. So there's a static keyword and static basically just
[01:10:33]  says, I want to run some code when the module loads. So you think of this as like outside your render function. So you could do like static console log, uh
[01:10:40] , load it or something like that. I love the thought that went into this because even though this is a single file component system, you are still, you have the
[01:10:48]  means to place code inside and outside of the component. Mm-hmm. Yeah. So these are required to be at the top level. Like there's import export static are
[01:10:59]  required to be at the top level. You can't like mess them or anything. They're kind of just JavaScript module scope, specific things. Um, but the next one
[01:11:06]  is what if you want to run some arbitrary, arbitrary JavaScript. Uh, inside the render code. Right. And so we actually have a way to do that, which
[01:11:14]  is with dollar space. Um, so I could do like, what is it? So this is, um, let's just say like const tag name equals this or whatever
[01:11:24] . And then here I can either do this. Right. And that's gonna work. It does the dynamic thing. Um, and you can see it put this inside
[01:11:32]  the, the render function. Um, or, you know, the shorthand is if there's a variable in scope, um, you can just use that sort of
[01:11:40]  directly, although it's not quite, uh, plumbed up here. Um, so yeah, basically you can interpolate in directly there. Like that's where the
[01:11:48]  dynamic thing is. You have the flexibility to do that where it makes sense. Um, but even things like I can run this arbitrary, uh, create this arbitrary variable
[01:11:57]  at this point. And this doesn't have to be at the top of the file. Like this isn't hook rules or anything like that, right? Like I could have
[01:12:02]  another div, um, here that's like high and this is down here and related to this. And, um, I'm able to do that logic right where it makes
[01:12:11]  sense. Um, versus JSX where it kind of forces you to put a lot of this stuff at the top of the, um, template, which makes it,
[01:12:20]  or at the top of the function, which makes it harder when you go and refactor. Cause again, it's creating these like multiple touch points where you have to,
[01:12:26]  to go. And so we try and optimize for that. So essentially, you know, core things you can pass any type of, uh, JavaScript expression you want as attributes
[01:12:34] . And there's the shorthands for event handlers and stuff, but then you've got static to run module scope, JavaScript, and you've got dollar, um
[01:12:43] , to run inline JavaScript. And I guess just to be clear, like if I wanted to, uh, this dollar can go in here as well. And you
[01:12:52]  can see this is interesting. Cause now we've, um, actually created quite a lot more code on the output side. And that's because while solid supports what I'm
[01:13:01]  doing, there is no good way to represent it in JSX. Right. Um, so what's actually happening here is we need to run this expression when we're
[01:13:11]  inside the div. And so right now the transformation is that it just outputs an iffy that, you know, evaluates whatever expressions you have. You can have more than
[01:13:18]  one, obviously. Right. So you could have, you know, sure. Copilot. Thank you. Um, you'd have more than one. And so it just
[01:13:25]  puts them in there and then it renders, uh, your JSX. You also notice that you never have to worry about like writing these, um, fragments or
[01:13:33]  anything like that. Like it's just HTML as you go. And you can just say, here's where some JavaScript is. Here's where some module scope JavaScript is.
[01:13:40]  You can import things. There's the shorthands for common stuff. Um, yeah. So this is relevant because I mean, sure, putting JavaScript in is really
[01:13:50]  cool. So you don't like need like the const tag or whatever in Svelte. But actually what I really liked about that example is, um, solids reactivity
[01:13:59] , um, isn't tied to components. So you can nest. Right. Things. Yeah. Actually. Yeah. Maybe, maybe. Uh, boy, I'm
[01:14:13]  forgetting solid now. I usually. Create signal. Create signal. Why am I? Yeah. Create signal. Yeah. Create store. What's from solid. Yes. Web
[01:14:25] . Right. Or no, just solid. Yes. Yeah. Yeah. It's all just web is for the, yeah. Web specific stuff. So create signal. We
[01:14:34] 've imported it. Let's scroll down, but you can see we've imported it. So what if we wanted to like, you know, make this here and copilot
[01:14:38] 's actually helped me out here. I can just throw in a dollar, a variable. Oh, come on. Um, there we go. And, you know,
[01:14:44]  checked equals, well, I didn't really want count. I want like checked and, uh, but check and we'll say it's. It's because most solid developers
[01:14:54]  make counters. Yeah. And they put, then put them in set interval top level and then laugh about how the component doesn't re-render. Right. Um, so
[01:15:03]  anyways, you can see, like we can run this JavaScript and because it runs once, it's like, this is going to run when this component is created, the instance
[01:15:10]  of the component is created. So what's really cool and you can't represent this in JSX is what if this logic is actually lower in the tree somewhere? What
[01:15:20]  if it needs to be wrapped in this div? I can still co-locate this stuff. Right? Right. And if I want to have like two of these
[01:15:26] , sure. I can, I can do that too. Right. And these are independent states that are created, um, in line as you need them. Um, which
[01:15:32]  again, as you can, you know, see, I can refactor this like super easily out into another, um, component. Right. Yeah. And, and
[01:15:40]  the same thing goes with like, uh, you know, I feel like we need something that's more powerful. Like instead of a div, can we put it inside like
[01:15:48]  a show or something or like a conditional? Right. So that's the other thing. Um, so let's just like show from this or from solid web. I don
[01:15:55] 't remember. I think it's from this, right? It's in both. Yeah. Okay. All right. So what do we got? We've got show
[01:16:03] . Show when. And we've got when equals. And then you want to show when it's checked. Is that what we want to do? I don't know.
[01:16:10]  I want to, I want to, or we can use a for, I don't really care. I think we should just show something where, where you see that the
[01:16:15]  state actually, you know what I mean? Like is created. Yeah. Yeah. Okay. So let's, um, yeah, let's, let's say this is
[01:16:24]  defined from props. So like visible. So you have a visible prop that's coming in. You see props is like this magic. It's just available. Um,
[01:16:31]  here, but so when visible, then maybe you want to show, uh, this. Here we'll delete the other one. So we can create these states, even in
[01:16:42]  like nested context with other components, like just wherever it's necessary, you can actually go in and create state and even things like run effects, right? Like you can
[01:16:50]  go. I, I love this because technically this is valid solid and solid supports this from a reactive standpoint. We don't have hook rules. We can a hundred percent
[01:17:00]  do this, but JSX doesn't let us do this. React. Can't do this. And top down V dom libraries can't do this, but this is actually
[01:17:07]  something solid can do. Um, yeah. And I mean, this is one of those things where maybe it seems superficial, but there is a clear refactoring benefit here
[01:17:18]  when you have multiple states on the page. Cause if you imagine a normal react component, you're going to have multiple effects up here, multiple states up here. The
[01:17:27] , the, the, the templating lodges like sporadically all around the place. Right. And so. And now you need a component. You might be touching
[01:17:33]  a whole bunch of places and trying to follow it and miss something. And it's, you know, it's hard, but. And we'll go back, put
[01:17:39]  it back in for two seconds. I want to, no, like up top. Can you go back to where it is up top? Yeah. I want to point out
[01:17:47]  one important thing here. Once you hoisted it out of the conditional, now you have to apply that visible conditional to all your effects and stuff above. Like you're
[01:17:57]  probably going to break it into a different component to be fair. Right. But, but like you, this can happen organically because if you put it under a show in
[01:18:08]  solid, it can create the whole life cycle of it, creating that state and releasing that state happens under the show. And because it's all, it's not a component
[01:18:14]  boundary. Like it's super powerful. When you try and write stuff hoisted, you have to actually push the visible condition into all the stuff that you write above. And
[01:18:22]  it makes all the, uh, code a lot more complex. Right. So you end up like refactoring things out into other components, um, or functions just
[01:18:31]  so that you can have like that life cycle like behavior. But here it's like, we know that this part of the template is sort of created and initialized when this
[01:18:40]  value is true. And so that is when the state and the effects and all that stuff will be initialized as well. So you don't have to worry so much about
[01:18:46]  clean up or what's visible. And it makes it a lot easier to represent those kinds of things. Yeah. This is, this is like one of the places where,
[01:18:53]  uh, JSX. We have callback forms to handle these cases and some things, but the callbacks also have implications sometimes on whether things are keyed or non
[01:19:02] -keyed. So, but this is, yeah. So even stuff like, um, let, uh, let's, let's do input L. Um,
[01:19:16]  we'll just do this and we'll do like ref equals input L. I will say this is not how it works in Marco. And this is one of those things where
[01:19:25]  it's like solids doing some magic stuff where there's a variable that gets assigned to, even though it doesn't actually get assigned to. Um, but anyways, um
[01:19:31] , I think one common one, um, where you might find something like this useful is you've got this thing that's conditionally displayed. And what if you want to
[01:19:40]  run some like third party code on it? Like, you know, say that it's attaching some jQuery logic. It's probably not. I mean, for past j
[01:19:46] Query at this point, maybe it's attaching a Google maps or something like that. So you do like third party API and it input L or, uh, or I
[01:19:55]  guess, yeah, I guess you want to ref for this one. Cause I was going to say the classic example. A lot of people viewing is like setting up the chat
[01:20:02]  web sockets, but I guess we'll, we'll use an ref for this one. Sure. Um, so anyways, the thing that's interesting here is I'm
[01:20:09]  essentially saying, you know, make this input fancy. Some, some way some third party JS is gonna run on it. It's gonna attach event handlers. And
[01:20:17]  it's giving me something that I can use to clean it up. Like I'm sure you've all seen this kind of code, but what's really cool about this ability
[01:20:23]  to nest things, especially effects is now when this condition changes. And this is conceptually removed from the document solid, we'll go in and automatically clean up this effect.
[01:20:33]  Right. And so you don't have to worry about like, okay, this thing's shown conditionally. Um, like imagine this was up here somehow, obviously you'd
[01:20:42]  have to move all the code up here as well. But if this thing was shown conditionally, well, you don't really wanna have an effect. It's like
[01:20:48] , okay, if we toggle the check, then we'll also clean up the thing. Cause we know it's not there and we're gonna get a new reference and all
[01:20:53]  that stuff. Like it, it really simplifies it. And if you, um, if any of you have ever worked on this kind of thing where you've got either
[01:21:02]  repeated content or, um, dynamic content in any way that you want to like attach some additional behavior to, or hook into. Being able to do it declaratively within
[01:21:08]  the template that follows all the same rules and will clean up when you expect it to clean up and all that stuff can save you so much code. Yeah. I think the
[01:21:17]  interesting thing is, is in react, we often do have, and even solid with JSX, we do have a solution for this, but the solution is go make another
[01:21:23]  component. Right. This and the goal here, you gotta keep in mind is this is a single file component, um, format, so you can go and create another
[01:21:32]  component or whatever, but this lets the, the, it evolve. You can kind of start building stuff simply build it up, build it up, build it up and
[01:21:39]  go, Oh, that's too big. Well, this stuff's already co-located. I'm just going to cut and paste. Like you've already written the
[01:21:44]  component yourself in line almost. Yeah. And I think like one thing to note is like, yeah, sure. We're able to represent the same thing over on the JS
[01:21:54] X side. But the important thing is, okay. I removed that. Look how much of the code changed, right? Like I'm, I'm touching. Like I
[01:22:02]  had to, I had to put this in there. I had to, I had to put this in there. I had to put this in there. I had to
[01:22:05]  put this like return in there. I had to add these two things here. Like I would have had to touch myself like six different places just to do the refactor,
[01:22:13]  to allow me to create a state in line, or I would have had to move it all into another function, which is, you know, more places that I'm touching
[01:22:20]  as well. Right. So this is very much like, especially like this, um, the difference, this is what a purpose-built language can do for you.
[01:22:34]  Right. Like it knows what you're trying to do. Um, and JSX is really just designed to show like the tree structure. Like it's a really primitive DS
[01:22:41] L or not primitive, but like, you know, it's not really meant for this kind of stuff. Although I think it easily could have been anyways. Yeah.
[01:22:49]  I, I, I, I, there's a question in chat we could address now, or we could address later is asking about, uh, is there a way to
[01:22:55]  make another piece of HTML? Like, like the equivalent of. Equivalent to be. Yeah. So not in this example, but in Marco, uh, proper
[01:23:04] . Yes. Um, so we have a thing called the tag tag, um, where you can actually define new tags. And so one of the things that I haven
[01:23:14] 't gotten into, and it's really one of them. Okay. The thing is, if we're too ahead of it, we can address this after I, maybe we
[01:23:20]  should get there then. Cause that you're right. This is required. Yeah. Maybe, maybe pushing this off. Cause this is like getting into stuff that doesn't
[01:23:28]  really make sense in solid land, or at least I can't think of a way to reconcile it with way solid. Yeah. But yes, in Marco, you can say
[01:23:36] , I'm going to create like a conceptual component, um, in line that has all the same things. You can have state, you can have effects. You can have
[01:23:43]  whatever. You just want to have a thing that you can repeat. You can do that. Um, in Marco, but yeah, the tag tag. Um, I
[01:23:50]  don't know if that's the greatest name, but it's like, I'm defining a new tag is called this. So, so yeah. But, uh, what
[01:24:00] , what haven't we shown? Have we, I guess we haven't shown. Um, I, I did, I did remember, um, yeah, loops, loops
[01:24:07] . We should probably get to, but I just wanted to, since I remembered, you know, there was a question around, could you do like, what was it like
[01:24:17]  this kind of thing? Um, so if you think about it from the Marco side, remember, this is the, uh, like shorthand to be able to
[01:24:26]  say checked is this. I guess if I brought back, where's the, uh, let's bring back that, let's delete this. Um, okay. Um,
[01:24:36]  and if I wanted to just say check equals this checked variable. Um, someone's asking if there's memory leaks. No, this is the way solid works. Solid
[01:24:46]  doesn't have components. The whole reactive graph, uh, auto manages memory. Um, so like we, we actually do this where JSX let us, lets us,
[01:24:54]  we can sometimes have callback functions and people can create signals like in the middle of the component under for loops and stuff. This is a completely legitimate solid. We,
[01:25:04]  we handle all the memory. Um, yeah. Um, yeah. Yeah. And same thing on the Marco side, which is why I say like, yes, I
[01:25:11] 'm outputting JSX, but it's not really super react friendly. You'd probably want to change some things or use different APIs. I mean, you can still
[01:25:19]  use the same syntax, but it's not going to be as nice as it, um, is when you're writing with something that actually follows the same model as what we
[01:25:26]  want with Marco. Um, anyways, so the reason we didn't do this is because it is so close to this, right? Like, so we have a spread,
[01:25:34]  you can spread in objects. It already has the shorthand. Basically it was the question of, do we delete these three characters or something like that? Um,
[01:25:44]  right. What? So if this was a JSX, obviously you're a little bit further away cause you've got, I've got to add these additionals just to
[01:25:54] , um, do the spread, but in Marco, you don't have that. So you're really just saving three characters and that's partly why, um, so far
[01:25:59]  we haven't decided to do this like shorthand. I've got a variable named the attribute. Let's just use it. Right. Um, hopefully that answers that
[01:26:07]  question. Yeah. All right. So body content. Yeah. Yeah. Let's talk about body content or scoped or scoped slots and all that. It's
[01:26:17]  funny. Cause when you compare this to JSX, I think some people like on the react side might be like a little bit, eh, but when you compare it to
[01:26:23]  this, to what view or felt does, this is like so much better. Um, I I'm, I'm, I'm looking forward to this. All right,
[01:26:31]  cool. So, yeah. Um, obviously I've shown a few things, um, mostly around like that. You can embed JavaScript in places that makes sense. Like
[01:26:39]  we don't limit where you can, anywhere you'd want to embed JavaScript. It's very easy to do so. Um, and it is just JavaScript at those points as
[01:26:46]  well. Right? Like it's not like aim buyer. It's not, you know, you're not writing a different language at those points. Um, and then,
[01:26:51]  yeah. Yeah. So let's get to a four tag. Cause I think this is interesting. And the reason this is interesting is because with a four you have,
[01:26:59]  and I'm going to have to try and remember solid syntax. Um, again, we'll start with this. So we want to iterate over something. Let's just do
[01:27:07]  like, uh, you know, an inline. Um, let's, let's. Sure. We're going to do that. Um, and we want to iterate
[01:27:17]  over this data. So what does the HTML tag need to do? The HTML tag, like this is a four tag. Again, I guess I haven't made this
[01:27:25]  totally clear, but any tag that you've, that you see in Marco is designed to be able to be implemented in user land. Right. Um, so like you could
[01:27:33]  build your own four tag. Like that's one of the core things we want, um, for reasons that I'm not going to get into right now, but it is
[01:27:38]  super powerful. Composability. Composability. Composability. Yes. But, um, anyways, so how do we get essentially parameters out of this four
[01:27:49]  tag? How can it give us some data within the body? Right. Cause I don't want, I don't want like the items out here or anything like that.
[01:27:55]  I want the content in the, in the body. So Marco has a syntax. It borrows from like Ruby and rust and even actually handlebars, um, used
[01:28:04]  pipes as well. But essentially within these pipes, it is JavaScript parameters. So you can do, you know, item index, uh, all, I don't know.
[01:28:16]  It's all it actually gives. It's all it doesn't do all. We don't, we don't. Yeah. So anyways, you could do that and,
[01:28:21]  you know, say the item has a, you want to destructure out name, right? Like it's just, it's just JavaScript parameters. You have JavaScript parameters right
[01:28:26]  there. Um, but it's from the tag and it's made clear. So the other thing obviously in solid is you've got, uh, you've got to
[01:28:34]  say each. So we're going to say each data and we've got item index. And we'll just do like, um, item dot name and, uh, you
[01:28:42]  know, index, whatever. So Marco has a syntax for representing tag parameters or sorry, uh, render props basically. Like solid uses render props in several places because it
[01:28:55] 's such a common pattern. Even in JSX, you're going to use render props for a whole bunch of things. Whenever you have some JSX that you want to
[01:29:02]  render, but you want to allow the child component. To be able to provide you within the body. You will use render props. I mean, there's other ways to
[01:29:11]  do as well, but render props is really common pattern. And so we've adopted it first class in a way that's easy, um, to work with. So
[01:29:17]  essentially whenever you have a tag that has pipes after the name, those pipes are the arguments that it will receive. And it'll just automatically wrap its body content in, um
[01:29:26] , you know, this nifty. So again, it's just less code that you're going to have to write and worry about refactoring. And, you
[01:29:34]  know, there's more than just the four tag. That's going to, um, be leveraging this kind of syntax as well. Cause you could have like, you know
[01:29:42] , paginated, um, and say it's like per page equals five or something like that. Right. And so this syntax, it's not, it's not
[01:29:53]  like Svelte. It's not like Svelte where you're like, you know, curly braces, each whatever, like that syntax is Svelte only.
[01:30:00]  Only Svelte gets to use that syntax, not you. We open up that syntax to everyone so that it feels familiar when you build stuff on top of our primitives
[01:30:09] . A lot like solids kind of focuses, like we're going to build primitives around reactive, um, signals and stuff like that. We're looking at it from,
[01:30:15]  okay, what are the common things that you're going to do in the language? What things do we need to expose like as core features? How can people build things
[01:30:22]  that are like our core features? Cause they're going to want to wrap them. Right. And composability is king. So that's, uh, you know, how
[01:30:29]  we've kind of designed it. It's, it's, it's, it's like the baseline for as far as I'm concerned. If you're not composable
[01:30:35] , I don't know what you're doing. Um, but yeah. Yeah. And even, um, like with the, the show tag, uh, if I,
[01:30:43]  oh no, I don't have it still. Let's just add the show tag back. We've got show when equals, let's just say whatever. It doesn
[01:30:52] 't really matter what it is. Um, with the show tag, I don't know the full details of this, but I know that it's like, in some cases
[01:31:00]  you may want to have access to the current, whatever inside here, if that makes sense. It's like, yeah. Yeah. Yeah. Yeah. Yeah. Yeah
[01:31:11] . Uh, we use this for, it showed doubles as our keyed, um, component. Right. So you can, and there's a type script consideration too,
[01:31:18]  but yeah. Right. Yeah. Cause it's like the render body thing. We wouldn't have that types of consideration in Marco because everything is kind of lazy and like
[01:31:27]  semantically we can allow tags to either not render or render like in, um, in JSX it's the JSX executes. Right. Like it just does
[01:31:35] . Um, in Marco, that's not really how it works. All the bodies are lazy and stuff. Yeah. But what, what's cool about this, right.
[01:31:41]  Is, um, you know, here we've got show, let's just make this like some message. Hello. Let's just make this like person, uh,
[01:31:50]  I should have changed both person. I forgot when there's a person, hello person or whatever. But if we need to use this other API, like we just changed something
[01:32:01]  there and it like inserted a function for us. It, it, you know, automatically wraps it in this. Like there's just a lot less that you have to do
[01:32:08]  to actually make the refactoring or to do the refactor that you needed. Right. And that's kind of where we, um, where we try and be.
[01:32:17]  So there is another thing that I, I want to go into on the show tag, but, uh, did you have anything, Ryan, before I do that?
[01:32:24]  No, I'm, I mean, we, we showed nesting, we showed type parameters. Yeah. Yeah. So these are just, you know, we're looking
[01:32:32]  at, um, everything from the perspective of like, we know this is a pattern that you're going to need. We're going to implement some core tags, like even
[01:32:38]  solid implements core tags. You got the show tag, you got the four tag, like all of these things. We knew we needed these primitives, um, because
[01:32:43]  we need to understand the control flow of the program and all that stuff. So we know we need that. And obviously spelled has that every, every, um, every
[01:32:49]  language has that. And so we try and make it so that it uses a consistent syntax. So whether you're using our stuff or someone else's stuff, it looks
[01:32:57]  cohesive. Um, so another thing that you often want to do in JSX or any, um, templating language is named slots, basically. Right. Um, so
[01:33:09]  the idea that, and the show tag is actually a decent example of this. I'll just delete, um, this part. So the show tag has a fallback
[01:33:17] , right? And in, in solids API, that fallback is an attribute that you pass that can have some JSX in it, but like passing, um, JS
[01:33:29] X in as an attribute. I mean, it could, it is the way you do it in JSX. Marco has a specific way. People have opinions about it
[01:33:35] . Yes. People have opinions about this, but we also have a specific syntax to say, Hey, to the parent tag, I want to provide this named content.
[01:33:44]  So the way that you do that in Marco is we have what we call attribute tags. So in this case we can say fallback and it's just basically, uh,
[01:33:52]  oh yeah. Also, um, closing the closing tag name is optional and ever everywhere. So if, if you see that I'm omitting that, that's fine in
[01:34:00]  Marco. So basically this is saying, let me just like actually throw some content in there. Um, you know, you can define in what looks like HTML. Like this
[01:34:09]  looks a lot more like HTML than putting HTML inside the attributes. We're saying, Hey, show tag, I've got this fallback slot for you. And you
[01:34:17]  can see it transforms into that on the Marco side of things. We allow you to do fancy stuff like wrap these in, um, loops and conditionals and stuff to be
[01:34:29]  able to like conditionally pass a fallback and whatnot, but that's not represented. And, and the fallback, I mean, uh, our, our error boundary
[01:34:36]  has this, but this show tag doesn't, but the fallback can also take tag parameters itself too. It can also be a render prop, right? Yeah.
[01:34:45]  So like, let's say, I mean, obviously the show tag doesn't do this, but let's say that the show tag is like goes to the fallback.
[01:34:50]  If there was an error as well. Yeah. You could receive that as a render prop right here. And you know, now we've converted it and you can see on
[01:34:55]  the other side, it's, it's doing a fair amount of changes for you, but it's like, it's super common pattern, um, that you need to
[01:35:01]  do. Um, and so, yeah, it just makes it easy to represent that kind of stuff. Uh, yeah. So on the syntax side, let's see
[01:35:11] , was there anything else that I, um, wanted to talk about? So these are the things that are actually like, you can compile into solid. I'm curious
[01:35:19]  if there is questions around, like if anyone in the chat has questions around, well, what can't this do? Um, like how did I represent pattern X or
[01:35:29]  if this just looks somewhat intuitive, but yeah. So the other thing I want to get into eventually is like changes that we've made specifically to optimize. Um, and what
[01:35:43]  we're using, like with the tags API really in tag variables, which we'll, um, get to, which can't be really represented in solid unless someone has crazy
[01:35:52]  ideas. Yeah. Yeah. Yeah. This, this so far has been pretty, pretty illustrative. I think this is, this is the templating language side of
[01:36:00]  it. And as we've seen JSX, this, this addresses like, like I'm not a big syntax person. You guys, everyone knows that about me. I
[01:36:08]  don't like, I don't care if you put the fallback on the inside or the outside. I don't care if you type a few less characters. None of
[01:36:12]  that speaks to me, but mechanic stuff speaks to me. So like out of everything that Dylan showed, I'm most excited about the ability to nest state arbitrarily inside
[01:36:22]  the template because that is, uh, that, that co-location is a superpower. And, um, solid actually supports it, but we don't have a templ
[01:36:30] ating language that supports it. So I think that's that like that, that, that's super interesting to me, but they, I guess on the Marco side,
[01:36:37]  which kind of goes beyond this is that it's kind of like the Svelte question people asked with Svelte, right? It's like, okay, this
[01:36:45]  is cool, but what, like, what stops you from making, um, the, you know, what I guess reactivity part of the language? Is this where we
[01:36:54] 're going next or? Yeah, that's kind of where, um, yeah, what I haven't talked about definitely is the reactivity. Someone's asking about dynamic attributes
[01:37:04] . Ah, yeah. So, I mean, pretty similar to what I would probably do in JSX, which is just use like a spread and we can optimize it
[01:37:14]  in the compiler. But if you wanted to have like, um, He, he, yeah, sorry. Quick thing. I'm going to interrupt here. If, if
[01:37:23]  he already went into this a bit, but part of this happens to do with the time, this kind of decision was made back in like pre react new days. And
[01:37:32]  they decided to align with like template literals and like most interpolation rather than aligning with like JSX, which was basically brand new at the time and no one knew
[01:37:41]  that it was going to catch on. Right. Yeah. And so if you want to have dynamic attributes, I mean, you just spread in an object that has dynamic keys
[01:37:52]  on it. Right. So here, this key could be anything or, um, another thing I guess is, and this is pretty much common. And most frameworks when
[01:38:02]  you're talking about like the regular HTML elements, if you wanted to like conditionally have a class, you would probably do something like show class and the class or something like
[01:38:13]  that. Like if it's falsy, it'll just automatically remove it as part of like the runtime and solid is going to do the same thing here. I'm sure
[01:38:20] . Yeah. Um, yeah. Hopefully that answers that question. Um, okay. Yeah. Sorry. I didn't mean to interrupt you. You were going somewhere.
[01:38:30]  Uh, that's fine. So yeah, the, so this is like, a lot of this is superficial, but also like, hopefully you can see how much the code
[01:38:43]  was shifting around on the right hand side and how much you'd have to do to refactor between these common patterns that we see in practice, you do need to refactor
[01:38:51]  between. Um, but so like I kinda was saying, you know, at the beginning, obviously one of our design goals is to make it so that we can like
[01:38:58]  analyze the crap out of this language. Um, and so the first thing we've kind of already talked about is Marco has already had, um, control flow in the
[01:39:07]  language Marco. It's actually, um, an F tag, um, and the F can have a default actually with another shorthand that, um, your audio is
[01:39:18]  kind of dived off like you did before stream. Okay. Um, yeah. Um, yeah, so, so we have an if tag, we have a four
[01:39:25]  tag, they work actually pretty similarly to the show and four tag, um, in solid. But so Marco, the Marco compiler will actually go in and turn those into a
[01:39:36]  few different things, kind of similar to the way that solid would go in and see, like, if you have a ternary in your JSX and like turn it
[01:39:43]  into something that actually makes sense. Um, reactively. Yeah. And so we're, you know, we're analyzing stuff like that. That's one thing,
[01:39:51]  but the thing that's evaded us somewhat is like this side, how do we analyze this side? Right. We've got the signals and these are critically important for us
[01:40:03]  determining what to bundle, like what's actually reactive, um, what the code execution is going to be, what's static. Um, it, a lot of it
[01:40:11]  comes down to what are the signals in the application? What can actually change? And so we wanted to, within the language, have a way for us to see which variables
[01:40:22]  are reactive and which variables are just JavaScript. Cause we don't want to change JavaScript. You know, again, you know, we were comparing to Svelte sort of
[01:40:30]  at the beginning where they're like export let x equals something. And it's like, they make different meaning from JavaScript. We don't really want to do that.
[01:40:38]  And part of the reason is we want you to be able to put in JavaScript and have confidence that it's going to execute the way that you, um, expect. And
[01:40:45]  so we give you the right escape hatches to do that kind of code. Um, but this is not that like when we're talking reactivity, um, there's
[01:40:52]  more that you might want to do. And solid does a really good job of doing this, you know, at runtime. But the thing is hooking into and seeing
[01:41:02]  and optimizing this with a compiler is tricky because you have to go in and you either have to know that this is special. Um, maybe, you know, it ends up
[01:41:11]  looking like this or something. Um, like you could annotate it in some way that like, it's still JavaScript, but you're doing something tricky here. So
[01:41:21]  we didn't really want that. So we sought out to come up with a syntax that allows us to inject variables into the template that are reactive that we can track.
[01:41:32]  And so why would we want to track these variables? Well, the key thing that Marco tries to do, or one of the key things that Marco tries to do is send
[01:41:41]  as little JavaScript to the browser as possible. Um, and one of the things we need to know in order to do that is where either the component boundaries are, or ideally
[01:41:49]  where any individual piece of state is used in the template. If I've got something like this div, um, and you know, this div probably will have other attributes.
[01:41:59]  Maybe it has like a data attribute here as well. And it's static. Maybe there's like some analytic stuff here as well. Maybe there's some, uh,
[01:42:06]  you know, previous stuff after, like, you know, maybe there's some texts in there. Um, I broke this in text somewhere, but anyways, so much of
[01:42:14]  this is static. The div is static. This is static. This is static. This is static. This might even be static. Right? What is show class? Right
[01:42:24] ? Where to show, maybe this is like props.showclass, right? Is this static? Um, and when I say static, I mean like once it's
[01:42:32]  rendered, will it never change? Um, if you're in an MPA, uh, side of things. And so we really wanted to have the ability to look at
[01:42:40]  that and determine which identifiers, which variables are dynamic. Um, so that we could, in this case, like coming back to the, how do we send 20
[01:42:50]  kilo or 20 bytes of JavaScript? What do we need to send here for this template? We've got this giant file. Maybe there's a bunch of other semi-static
[01:42:58]  stuff going on down here. What do we actually need to send here? We've got a class. And if it was, let's say this is data for some reason
[01:43:05] , maybe it's just like data. Data. Oh my goodness. Data. Oh, um, I guess data can be doing, it doesn't really matter. We
[01:43:13] 've got this class. That's dynamic. Hopefully we could send some code. That's like, Hey, I have a reference to this div update this class when this signal
[01:43:23]  changes. Right? Yeah. We don't need the div. We don't need the data X. We don't need the function, the template, the scope for
[01:43:29]  everything here. We don't need its children necessarily. We don't need any of that stuff. In this case, we just need the ability to find this class and to
[01:43:39]  set it based off of some signals. So what does the syntax we have for, um, introducing these signals? So we thought quite a lot about this. And so we
[01:43:48]  were trying to think like, what characteristics do you need, uh, to be able to introduce a data. A variable from a, an HTML tag. Right? Cause
[01:44:00]  that's, we really want to come back to HTML. What would it look like if HTML could give you variables? And maybe we can distinguish between variables that HTML gave you
[01:44:07]  and variables that you had to find in JavaScript. Right? And maybe that could be our. Dylan. Yeah. Can you clean it up a little bit? Cause I think
[01:44:14]  there's a lot of noise on it right now. That's distracting from what you're trying to make. Yeah. Probably. Yeah. Okay. Cool. Yeah. So
[01:44:23]  let's make this like, um. Show class. Show class. Oh my goodness. Yeah. So false. Then this could be toggled somewhere. Set show class
[01:44:31] . Um, so my point with this was. There's a bunch of static stuff in here. Hopefully. Like if you were building this with a script tag, let me
[01:44:35]  show you the script tag for this. I want to hammer this point home. You would do like. Maybe data X is your selector. You'd have something to
[01:44:38]  select this. Maybe, you know what it is. Maybe you just do document body first child. Um, and so you need to know when this changes. So in
[01:44:45]  solid, we can't actually analyze whether or not this changed. So, I mean, there's that, but presumably there's something that's like, when this changes.
[01:44:50]  New value. Um, and so you need to know when this changes. So in solid, we can't actually analyze whether or not this changed. So, I
[01:44:55]  mean, there's that, but presumably there's something that's like, when this changes new value. Um, new value dot class name equals new value. Okay. Okay
[01:45:11] . Let's see. Okay. Okay. Okay. Let's see. Let's see. Let's see. Um, new value dot class name equals new value and
[01:45:26]  the class. I mean, in a sense that's create a fact, but yes, it basically is. Yeah. But like my point is this, even like the implementation
[01:45:36]  of when this changes should be pretty small here. We don't like realistically, this is going to be like on click set something. So hopefully you would send some code.
[01:45:45]  That's like register click handler on click update the class name. That's really all you should need. And yet, like I said, we're sending lots and lots
[01:45:51]  of JavaScript. So, so yeah, let's look at, uh, our syntax for this tag variables. So we wanted to again, say, how would it look to
[01:46:00]  get a variable from a tag? So let's make a tag. We'll call it let. And we'll make a variable in this case of a show class. Right
[01:46:08] . And, uh, so we have this concept of default attributes. So this here is the JavaScript identifier that's being introduced. And then here is the default attribute,
[01:46:19]  which I should have probably illustrated this first, but a default attribute is really just like, it's the equivalent of this. You can just have an unnamed attribute and it
[01:46:28] 'll just come through on the other side as default. So anyways, we've got this tag. And you actually did, you did show it a minute ago when you
[01:46:35]  were showing your if tag. Um, right. So our if tag is actually if equals condition. Right. Um, and this again, it's just default attribute shorth
[01:46:45] and. So you could have your own if tag, like you could have, you could implement a show tag. You could implement the when, I don't know if
[01:46:53]  when visible or something like, I don't know what you're doing, but you could implement your own tags. You know, obviously that's one of our core things.
[01:47:03]  So back to this, we've got a let tag, which is basically the only thing special about this let tag is it'll give you a state. It's a
[01:47:11]  lot like create signal, um, or, you know, use, uh, use state and stuff like that. Um, so, and we say what the initial value is
[01:47:20]  and this is top down rendering. So this is only going to get initialized, um, once. And so we've got this, uh, variable here and this variable
[01:47:29]  is basically analogous to, uh, okay. Go away. Uh, you know, analogous to this, like syntactically everything inside here. Um, it
[01:47:39] 's just a JavaScript variable. We're not creating like. It's let not const, right? Yeah. But I mean, kind of, I'm talking about like show
[01:47:48]  class specifically. So like, if I'm like destructuring it here, I can destructure it here. I just want to make that point. Right. It is
[01:47:55]  JavaScript here. It is a JavaScript variable after the slash. So we have this syntax to say, um, no, we're introducing a variable. Um, on the
[01:48:04]  Marco side, we know that this is a reactive variable. So we don't have to have this like mechanism of, okay. Well, reactive variables, you have to call
[01:48:12]  with functions and wrap with functions. Cause we know, um, we're all where they all are. So this is what the equivalent would be like in Marco. And obviously
[01:48:19]  everything would be auto imported. So you would shorten it to something like this. Um, so, and then what about like assigning to it? So let's actually add
[01:48:26]  like, you know, button on click and then, um, toggle. We'll call this toggle. And then we'll just do like show class equals not show class.
[01:48:40]  So now this might actually look familiar to like Svelte people, right? Like we introduced a variable and you can just change that variable. Right. Um, but we
[01:48:51]  know that this is not a JavaScript variable. So it's not like surprising that variables introduced through tags are going to have some side effects. If I come in here and
[01:48:59]  I'm like, you know, let something equals false. And then I'm like, something equals true. Like, I don't expect this code to do anything crazy in
[01:49:08]  the background. This is JavaScript, right? But when you work with a tag variable, um, that's where it does, um, work into our reactivity. So
[01:49:16] , so yeah, we have this. And so another thing, um, we were looking at is, okay, what are all the cases that you're going to want
[01:49:22]  to provide variables through tags and what other things, um, do you need from a variable that is provided from a tag? So one of the things that like immediately became obvious
[01:49:33]  is that you're going to want to be able to get references to things. So I, you know, I mentioned earlier on in solid, it's a little bit weird
[01:49:39]  how you get references. Like you're like, let ref colon or semi-colon. And then magically it just gets assigned to, right. And I'm sure
[01:49:47]  you could do like a function styles something as well if you wanted. But anyways, it's like kind of magic. What if the tag itself, the native tag could just
[01:49:56]  say, Hey, I'm this. And so that's what we have. So native tags give you a tag variable that allows you to access the, um, element reference
[01:50:08] . Right. So every native tag has this and let me just, uh, like, you know, get rid of this. But so a key thing, as soon
[01:50:15]  as you come down this path, you're gonna be like, okay, yeah, cool. I don't have to like, you know, do let L up here
[01:50:21]  and then later in the template do it. This is another one of those cases where now we don't have code that's coupled in multiple places. Right. It's all
[01:50:30]  here. It's all related to the L that's cool. But where, what is the scoping of this? Right. Um, because I might have, you know
[01:50:38] , for whatever reason, my layout requires that this is multiple levels deep. And maybe I want to run some logic down here that works with multiple things. And so we
[01:50:49]  have an effect tag. Again, notice the shorthand. It's the same method shorthand we had on the attributes. This is, this is so funny
[01:50:58]  because it's actually completely consistent because can, yeah, I almost want to show that transformation because this is actually, it's the default attribute starting. User equivalent. Yeah,
[01:51:11]  right. It starts as a default attribute assigning a function and then putting the method shorthand on the default attribute and then compressing the, the default attribute. This
[01:51:22]  is called the default method basically. Right. Um, and so, you know, this might look like funky syntax. Maybe it even looks like this is special. This is
[01:51:30]  Marco's effects. This is the equivalent of Svelte's like curly brace, but, but no, this is not specific. You could write at all. You could
[01:51:37]  write your own. So what if you wanted to have an effect that was like, again, you know, when visible. Yeah. Maybe use. The fact that runs
[01:51:46] . Yeah. What were you going to say? Well, your identifier having a dash in it doesn't feel very JavaScripty. So like when you said when visible, like
[01:51:53]  I feel like I almost want to camel case that. Oh, sure. Yeah. To be clear, you can, you can write whatever casing you want. Yeah, I
[01:52:01]  know. I just, I was just saying it just, you know what I mean? Yeah. Yeah. So like here we could have a tag that's like otherwise exactly
[01:52:07]  like an effect, but it only initializes when it's visible in the document. Like how cool is that? Right? Like you, and I mean, obviously you
[01:52:13]  can do that with create effect and, and all of that. But the nice thing here is again, obviously we make it super easy to nest this wherever, wherever you want
[01:52:23] . So the nesting's cool. Although you kind of got that with being able to put the dollars wherever you want in the solid side. But another thing that's really
[01:52:31]  cool is that since these are tags, right? You choose where they're rendered. They can actually have, um, side effects. Right? Even this when visible.
[01:52:41]  Okay. I'm going to create an effect. How would I create an effect that knows when it's visible? It's not tree aware. You can't do it.
[01:52:48]  Right? Unless you pass in a reference to the thing that should be visible. But here it's like, okay, I rendered inside this dip. There could be tons and
[01:52:53]  tons of content up here. Right? And it can know, okay, I render here. I'll put out an element that I can track. Cause I can actually
[01:53:00]  render stuff into the document besides just doing my effect or providing a variable or whatever. Um, and so it can be tree aware and do these kinds of cool things. And
[01:53:08]  you can have stuff like, maybe you don't want an effect that runs when it's visible. Maybe you want a tag that, uh, lets, you know, like
[01:53:15]  with a variable when it's visible. So you can have like when visible and it can give you a variable that lets you know when this section is visible and then you
[01:53:22]  can, you know, display that out if you want. So it's tree aware. So there's no hook rules. It's tree aware. You can do, you
[01:53:27]  know, a lot of stuff without having to pass around these refs. And again, it's all very easy to refactor this out into its own component if you want
[01:53:38]  it. Right? So, so yeah, basically, uh, you know, there's a composability win here. I think even though the syntax might be a little
[01:53:45]  bit confusing at first, essentially, it's just Marco gives you a way to provide variables. Um, and those variables we know are special. They're reactive, right?
[01:53:55]  It's the reactive script kind of mentality. We know that these are the special ones that cause things to re execute. Um, and then likewise, since we know, oh
[01:54:05] , show class is a special thing. We know its state. We know syntactically that it's something that can cause things to change. And so we can go
[01:54:13]  in and do those optimizations. Like I talked about where we know exactly what causes things to update. Um, and we can basically tree shake out and eliminate anything else.
[01:54:23]  Yeah. I mean, you're, this is a good visual so people can see it, but Marco does this cross module. So it actually knows the reactivity of
[01:54:32]  your whole app, then knows what to import. And then the funniest thing is because of the code gen. I mean, and we're not going to get into that today
[01:54:39] . I don't think. Uh, it's, it's, it, you get to use normal JavaScript, uh, tree shaking to actually dead code, eliminate the
[01:54:49]  code at the sub island sub component level. Yeah. Yeah. Yeah. And so we, yeah, we basically have to look at the whole tree and we determine which
[01:54:59]  inputs are stateful and like all this. People, people are starting to ask the question because they're like, this stopped compiling to solid once we got to tag variables
[01:55:07] . So they're like, how does this translate? Yeah. Well, here's a question for the audience. What's the equivalent of this in solid? I,
[01:55:16]  I think there just isn't one and maybe there can't be one, right? Because solid as good as it is, has coupled the reactive system to JavaScript. And so
[01:55:27]  it's just JavaScript. You don't know necessarily if it's part of the reactive system, unless you give it away to annotate it. And maybe you create like
[01:55:34]  a, you know, a react forget style thing where it like, hopefully knows that you're importing the right things. And sure. You can kind of pretend, um,
[01:55:41]  in some cases, but like, we have a way here of giving you variables that operate in ways that are different than JavaScript variables. Um, I mean, I could do
[01:55:53]  these element refs in solid pretty easily to be, to be fair. Right. Like I could automatically have an output code that's like let L and then hoist
[01:56:01]  it to the right level and all that stuff. Um, but yeah, I don't know. It's the other thing is you have to build primitives again. Like
[01:56:12]  you would have to build the effect tag in solid. And yeah, I, I think people are talking about this. No, you don't actually need render props or different
[01:56:19]  components here. That's not, that's, that's, that's not the thing solid. We already showed actually is pretty dynamic on the ability to do everything in
[01:56:26]  a single component. The challenge here is yeah. Hoisting context rules. Um, like, cause like you'd have to inject a bunch of variables up top where they
[01:56:35]  get hoisted. Um, the other challenge here is identifying, see, there's a convention here. See solid. We have our tuples, but you know,
[01:56:44]  from great signal. And we know that the first thing is an accessor and the second thing is a setter. But we don't, we didn't tell everyone that
[01:56:51]  every single reactive primitive they make has to follow that exact pattern and follow this exact naming convention. We're in Marco, this is like set in stone. So you can
[01:57:02]  trust that like the, that this show class is a reactive variable, but because it's been derived from let. And in fact, you can make your own custom composition.
[01:57:15]  You make your own custom hooks here. You can make my let or whatever, and it still follows the same pattern. So Marco knows how to analyze it and deal with it
[01:57:22] . Um, so it's not about components. Cause we've, we've gone way past components here. Like solid at the beginning had some components for some convenience here
[01:57:32] . Marco syntax was like, yeah, here, here, here you go. Solid. Don't even worry about components anymore. This is like, how do you transfer compiled
[01:57:42]  reactivity between files? No one has done this at all. Like view came up with a syntax for the ref sugar where there's like dollar signs and then double dollar signs
[01:57:53]  and like doing all this kind of stuff. Svelte can't reactivity, can't leave the file and they have no composition. You can't make custom hooks
[01:57:59] . Like you can, you, you suddenly you're into this runtime zone where you're like, okay, I'm now going to make a store, but like, there
[01:58:05] 's no way to natively use the language for it. Marco has actually taken fine grained systems, similar to solid applied to compilation like Svelte and kept all the
[01:58:15]  comp, composability. Yeah. So it's, there's a lot. Um, and again, maybe there is some way we could represent tag variables in solid.
[01:58:26]  I'm just not, we, we'd have to make a decision, like a convention decision. We'd have to be like, we'd have to be like every,
[01:58:31]  like, because Marco is the more restrictive subset. I think we could do it in the same way that solid can generate react and react can't generate solid solid can't
[01:58:39]  generate Marco, but Marco could generate solid. Yeah. Yeah. Yeah. And I mean, part of it is like, like I said, you'd have to build
[01:58:48]  like kind of rebuild or at least put wrappers around things like create effects that they could be tree aware. Um, and stuff like that. Although I guess maybe you could
[01:58:56]  do that just by manually creating multiple components in line. I don't know. Maybe there's some stuff, um, you could do there. I'd have to think more
[01:59:04]  on it, but so, I mean, one of the things is we see this as a DX win, even though it might look a little bit confusing at first.
[01:59:12]  Like I said, the refactor ability is there. The composability is there. It makes it a lot easier to represent some of these things. Like you can put the
[01:59:18]  local storage let behind a condition if you want. Um, and it'll behave kind of like you would hope. Um, but the other piece is, and this, the
[01:59:27]  users don't really care that much about, like, as far as when they're writing it is the performance side that we actually syntactically know these are Marco's reactive
[01:59:38]  variables. These are your JavaScript variables that can't do crazy stuff. Right? So we try and give you the places where you can put your JavaScript and then the places
[01:59:46]  where you want to define a reactive variable. We have syntax for, and that's why we're able to analyze the language in the way that we do. Yeah.
[01:59:54]  Yeah. And I was going to say plans for Marco 6. See, this stuff's all good. And we play it with Marco 6 language design is actually in a very
[02:00:00]  good place. We actually had settled on most of the decisions and got most where in the first six months, uh, shortly, like that first fall of 2020, we'd
[02:00:09]  actually figured out most of the language stuff. We're still tweaking things, but it set it and we actually released the tags API preview and you can use it with
[02:00:16]  Marco 5 on top of a V DOM. And, uh, there's some exceptions, things that we couldn't represent as easily, but what was, I thought it was
[02:00:23]  incredible because this was the first proof that this language could work. Like it literally works on top of a V DOM without doing re-rendering without like, like it
[02:00:32]  was, it was mind boggling because they're like, it basically. Had the benefits of fine grain, but every time we try and put fine grained on a
[02:00:42]  V DOM, watch my stream yesterday. There's, there's issues. This actually circumvented it. And I thought that was incredible. Um, but the language part
[02:00:49]  is actually pretty good. pretty good. Our challenge right now on Marco 6 is just finishing up all the other features with the compiler. A lot of the basic stuff works
[02:01:00]  we've made, like to do MVCs and hacker news demos and that, but like getting the async piece of the puzzle finished up. And, uh, Marco team
[02:01:08] 's fairly small team. Dylan's here talking to us today because he's been spending months on TypeScript and not Marco 6. Um, that that's how important TypeScript
[02:01:17]  is, um, especially for teams at eBay. Um, I think, I think this is giving us time to make sure all the pieces fit together. If that,
[02:01:26]  if that makes sense as an answer. I don't know. What do you got on that Dylan? Yeah. I mean, it's tricky when you compare it to pretty
[02:01:32]  much any other framework in that we're, I mean, obviously it's ambitious. We're trying to look at how do you optimize the, I mean, it's one
[02:01:42]  thing to optimize for the server. It's one thing to optimize for the browser. It's another thing to optimize the transition, the load transition, right? You have
[02:01:50]  to know so much about the application to optimize that. And obviously, you know, there's quick, which is doing, um, very different things, but have somewhat similar
[02:01:59] , uh, results potentially. And yeah, you need some beefy analysis in front of that to be able to, to figure out what needs to be sent to the
[02:02:07]  browser. Cause you don't want to have the user be the one that has to go in and be like, okay, we'll load this script and then this script.
[02:02:14]  And maybe I'll conditionally send this script and like all that stuff. Once you get, yeah. Once you get fine grained, you like doing things manual is
[02:02:22]  just not on the table anymore. Like it's. Yeah. And hopefully I've been able to show like, yes, we're designing a language that is in some ways
[02:02:32]  restrictive and easier to analyze, but also in pretty much every common case that I can think of anything you want to represent should be less Marco than it would be. Um
[02:02:43] , in something else. And certainly the, uh, co-location story I think is probably the best of any framework that I've ever seen. And the refact
[02:02:54] oring as well is, is very much at the, you know, the top of our minds. And I think it's probably the best refactoring story, but there
[02:03:00]  is an upfront cost. It's not quite IMBA. It's not quite, um, Elm again, it's not a totally different language. You get a Marco
[02:03:08]  tag variable. Um, but other for the most part, it works like a JavaScript variable and you still have your JavaScript variables that you can work with. And it's
[02:03:17]  still mostly HTML and you mostly got the JavaScript. So we're trying to find the right balance. Um, but anyways, as far as why it takes a long, you
[02:03:25]  know, designing language, one thing, like Ryan said, it's mostly kind of done, but then it's, yeah, there's just this whole cohesive story.
[02:03:32]  Like we're talking, the bundler has to be involved in this, the, uh, we have to basically have cross file analysis to figure out which inputs are actually dynamic
[02:03:43] . Um, yeah. And maybe we'll get more to that as we look at other pieces of, um, yeah. Yeah. I mean, it is insane.
[02:03:53]  I, Dylan was giving that like idealistic thing where he's talked about vanilla JavaScript being, you know, a few, a few, uh, sorry. Bytes
[02:04:01] . A few bytes. Yeah. A few hundred bytes or whatever. And, and then, uh, maybe even less. And then like frameworks coming in at like 70 kil
[02:04:10] obytes. Um, this story is kind of what drove this and this learning, but we've actually, you've seen it on stream. If you've been watching this
[02:04:18]  in action, I keep on pulling it. Like the Marco six hacker news demo with the interactive collapsing comments is 1.6 kilobytes. Um, and too large
[02:04:28]  1.6 kilobytes, 1.5 kilobytes too large. Right. Right. Cause well, because yeah, the, the vanilla JS version is 230 mil
[02:04:38] , uh, 230 bytes and Marco's 1.6 kilobytes. Um, and, and the Astro solid version is a 4.8 kilobytes. Yeah
[02:04:47] . I want to make a quick point, which is that it's like, oh, wow. It's like one point something kilobytes. It's like most
[02:04:53]  people, and I think this is how you should think about it. Oh, well it's like less than 20 kilobytes. 20 kilobytes is a good amount
[02:05:01] . Who even cares that it's one kilobyte, but it's a difference of how it scales. Right. That's, that's the key here. And that
[02:05:09] 's why, um, I think it was, yeah. Yeah. In your react stream where you're doing the chart where, you know, it's like, how
[02:05:14]  much does your, how much do your components contribute to the size of your application? Right. And with Marco, because we're literally looking at your template, trying to figure
[02:05:25]  out just the interactive pieces derived from state and just send that to the browser. It's not even just like an on off switch of, okay, here's your islands
[02:05:32] . Here's the components and everything under that gets sent out. That is the way it works in Marco five. And it works, you know, pretty good. We see
[02:05:37] , you know, 80% savings in some cases more. Um, but this is like a totally different story. Right. You could have, um, I mean, first
[02:05:46]  of all, with this, you can have, uh, dynamic logic in your top level component. Whereas in any islands based system, that's going to cause everything to
[02:05:54]  get sent to the browser. Right. Um, but another thing is just think of all the static stuff. Like we're writing markup language. So much of the structure
[02:06:04]  is static and so much of it has also already been evaluated on the server. Why do we send so much JavaScript to the browser? Yeah. Um, and that's what
[02:06:11]  we're trying to solve. Right. And, and, and to be fair in that example, with the collapsing comments, it's not even that 1.6 kilob
[02:06:20] ytes is. All in whole Marco framework. It's not like a lazy loading trick. You know, like we've been seeing, like, there's a few frameworks
[02:06:27]  that are like, look, our zero kilobytes. And then the whole framework loads and it's like 20 kilobytes. Um, that's everything all in for
[02:06:34]  the, and it's, as you mentioned the scale and it, it's because of the resumability thing. It actually doesn't, most of that JavaScript doesn't
[02:06:43]  even run. Uh, yeah. Initially loads. Yeah. So, so. And I think this is actually one of the big differentiators between. Marco six and quick
[02:06:51] . That is probably easily confused. Um, which is that like quick breaks things up. And this is, this is a key. Like if you're going to load less
[02:07:01]  stuff, you need to break it up into smaller pieces and figure out how to organize it. Like that's what quick is all about. But so one of the, the
[02:07:06]  way that quick does it is essentially they say, okay, here's the rendering code. Here's the event handlers, like here's the state and that part of
[02:07:14]  it. And so they break it into those pieces. Right. But the rendering code, at least for an individual template is still like one cohesive thing. Yeah. It's
[02:07:23]  a, it's a one file. It's a V Dom component. It's a V Dom component. And so they can send individual components, but you still get
[02:07:28]  the whole component. And if that whole, if that component's going to render, you're probably going to get its children. Even if it's lazy after the fact
[02:07:35]  with Marco, again, instead of looking at it from, okay, this component has some stateful stuff in it. It's, it's dynamic. We need to send
[02:07:43]  this to the browser. No, we look at it and be like, okay, there's a state up here. It interacts with this class. It interacts with this
[02:07:50]  if statement. And so we're only going to send those two things down. We're only going to bundle those two things. And yeah, so it's, it's
[02:07:56]  just a different way to, to look at it. So we're, you know, hyper-focused on how can we eliminate JavaScript entirely? Whereas quick is more like,
[02:08:04]  how can we lazy load stuff? Lazy loading is a story. That's like after the fact for us somewhat, because it's like, break it down as small as
[02:08:11]  possible, which I would say Marco breaks it down quite a bit more than quick even. Yeah. But then, okay, we've broken it down. Maybe, you
[02:08:20]  know, coming back to the 20 kilobytes is probably fine. If you see, you've got a 40, 40 kilobyte app or whatever, and you know
[02:08:27]  that half this below the fold stuff is, um, not necessarily needed right away. Maybe just wrap that in a thing that says lazy load this following the same rules where it
[02:08:35]  only loads what's absolutely necessary. Like, like Astro's client, uh, client load, uh, visible directive or whatever. So that's how we kind of
[02:08:42]  see it is like, by default, we're going to make sure that no unnecessary JavaScript makes it to the browser. And then you can go in and wrap certain sections to
[02:08:50]  say, okay, well, the JavaScript that is necessary for this part, load when it's idle or load when it's visible on the screen or like that kind of thing
[02:08:57] . So that's kind of how we see it. Kind of how we see it. So it is a difference in mentality from quick, which is let's make everything
[02:09:03]  async by default. Marco does not do that. Yeah. And people, I feel like conflate resumability with that to some degree. Um, cause just because
[02:09:12]  we load all of the code that's necessary, again, only the code that's necessary. We don't run any of that. Um, because we serialized the
[02:09:19]  information from the server to know, to get us back into the same state that we were when we rendered on this. Uh, yeah. Yeah. Yeah. Yeah.
[02:09:29]  So yeah, no, I, I think this is an important point because I, it's been tricky. This is what I've been trying to do with a lot of
[02:09:34]  my resumable articles is I, all the characteristics around hydration are important. Resumable, progressive loading, uh, kind of partial partiality here of like only loading
[02:09:43]  the code that's needed. And every framework, uh, in the, in this new zone weaves these pieces together and what makes sense for them. And any specific
[02:09:52]  configuration that has kind of been getting conflated, like that's resumability. No, that that's not resumability. Resumability is resumability.
[02:10:00]  It's just don't rerun stuff in the browser. That's already run. Like don't do the hydration. That's all it is. Right. When you load
[02:10:08]  the code, how much of the code you load has nothing to do with resumability. Um, yeah. And one of the things I love about this stuff is,
[02:10:18]  you know, people, you know, people think of it often. It seems like, Oh, Svelte is five KB or whatever. Solid is whatever it
[02:10:27]  is. I don't have seven. What is it? Yeah. I mean, when you're getting really small, like to do, like to do MVC world,
[02:10:33]  like smaller than Hacker News. Yeah. Let's let's, or, or actually Svelte is four KB solid. Um, it's funny. Cause
[02:10:41]  they look at bundle phobia. They'll say, they'll see it's six or seven KB. Okay. But our actual built apps, like our 2d MV
[02:10:47] C is actually smaller than that. Yeah. Yeah. But so my point, um, that hopefully I've hammered home is that size doesn't matter that much.
[02:10:56]  Actually Marco today is like 16 KB. And I mean, we would like it to be a lot smaller, but that isn't the necessarily the bottleneck that we were
[02:11:04]  trying to solve this like arbitrary 16 KB. We're worried about the hundreds and hundreds of kilobytes that are caused by sending components that aren't needed by the browser
[02:11:12] . Right. Like your code or the code that you import. Right. Like if you have, um, you know, if you're importing some GraphQL library or
[02:11:21]  some state management library and all that stuff, or, well, state management library is probably a bad example, but like a GraphQL library, fetching library, uh,
[02:11:28]  you're importing some utilities. If all that could happen on the server and is unnecessary in the browser, well, you've just saved that as well. Right. And that
[02:11:34]  could be 30 kilobytes right there. That's the whole framework. Right. Um, so looking at it differently from how do we avoid sending less of those.
[02:11:41]  How do we avoid sending less of your code and things that you import other than the framework side, I think is important because there's a lot of people out there that are
[02:11:50]  like the frameworks have no job doing this. You can go in and optimize it yourself. You can code split out this yourself. It's like, I don't think that
[02:11:56] 's the right way to look at it because it's hard to do that yourself is one thing. And in a lot of cases, frameworks that say that are ones that have
[02:12:03]  this like top down mental model that can't actually swap out, um, individual pieces or go in this direction. So I don't know. That's, that's
[02:12:10]  my view on it anyways. Yeah. No, that sounds good. Okay. We're going to answer a couple more questions. Then we're going to switch gears to the
[02:12:16]  second part of our stream. Uh, cause we actually didn't get into building. We just got into showing. So, um, okay. So someone's asking, let
[02:12:23] 's see here. Uh, some solid stuff that we had to kind of talked on about the components implication to SSR running the edge. Um, what's the deployment
[02:12:30]  story? I mean, uh, I mean, is there any update on that? I was making, that was what I was doing right before I left eBay. I was
[02:12:38]  making like these examples deployed to like cloud flare and to. Yeah. So, I mean, cloud flare still works and I think it makes it, um, even more
[02:12:46]  interesting. Cause one of the things is people are obviously, especially now comparing MPAs versus SPAs. Right. And so you try and look at the advantages of M
[02:12:56] PAs versus SPAs and the MPA really it's the server did some amount of work. So if you're smart about it, you can avoid causing that work
[02:13:01]  to rehab and in the browser or sending code related to that work. That's what islands is. That's what partial hydration as they're all taking advantage of that. Even
[02:13:08]  the like vanilla JS script that I was talking about, that's, that's the angle it's taking. But the downside is, um, if you've got client side
[02:13:15]  routing, you can instantly respond to those kinds of things. So how do you get past this point of, um, or how do you make it feel like you're instantly
[02:13:24]  responding to something? And probably the biggest bottleneck and why a lot of MPAs can be slow is they're doing the data fetching on the server. And
[02:13:31]  they send out all the content. Once all the data fetching is done data fetching, like on our side of things, it can take 800 milliseconds. Sometimes there's
[02:13:38]  a waterfall, which you really want to avoid, but you know, sometimes it's inevitable. So maybe you're like two seconds worth of data fetching. If you've
[02:13:45]  got really big models that you're looking through and that kind of stuff. And so if you're actually blocked during that time, the user sees nothing. And even though
[02:13:52]  their page and the JavaScript might load quickly, um, after you've sent it, it's like, they're looking at nothing for quite a while. And that's a
[02:13:59]  bad experience. Maybe a spa would be better, but streaming, especially out of order streaming really solves that problem. Cause you can basically send that initial frame. Hopefully what
[02:14:10]  you would have had if it was a spa immediately. Um, and you know, this, especially coupled with like edge base service workers, um, you know, doing all
[02:14:24]  this stuff on the edge just means that you get that shell to the user even quicker. Right. And so you kind of lose a lot of the downsides of an
[02:14:31]  MPA while also being able to keep these nice things. Like I'm not going to send, uh, you know, a meg of JavaScript to you. Yeah.
[02:14:40]  So yeah. Yeah. Edge definitely, uh, plays into it. I think edge is a great thing for any MPA framework. Um, but also just like in general
[02:14:48] . Yeah. Yeah. Yeah. Yeah. I think it's a great thing. I think it's a great thing. I think it's a great thing. I
[02:14:56]  think it's a great thing. I think it's a great thing. I think it's a great thing. I think it's a great thing. I think it's
[02:15:00]  a great thing. I think it's a great thing. I think it's a great thing. I think it's a great thing. I think it's a great thing
[02:15:04] . I think it's a great thing. I think it's a great thing. I think it's a great thing. I think it's a great thing. I think
[02:15:09]  it's a great thing. I think it's a great thing. I think it's a great thing. I think it's a great thing. I think it's a
[02:15:13]  great thing. I think it's a great thing. Speaking base story right now is just your typical routing. But as Dylan was saying, the edge story is really compelling
[02:15:29]  with streaming because you get that instant shell. I've shown this before you like navigate around and like the loading state of the streaming as you're going between MPA pages looks
[02:15:40]  like your typical like single page app Twitter experience where you like see the bird for a minute. And then, you know, like, yeah. Yeah. And I mean
[02:15:49] , this is exactly why, you know, at eBay, we've been doing streaming forever, basically. Because we have this like monolithic MPA. We want to serve
[02:15:58]  this shell like as quickly as possible to the user. Oh, this is all pre-compiled ahead of time. Sorry. Someone's like things. I'm trying to
[02:16:05]  see how the accomplished now, how your app can happen with the content. No, no. This is all a pre-compiler. This is like a build step where
[02:16:11]  the generated code is actually just broken apart in such a way that the bundler can just tree shake all the stuff like picture an app. You just know what could never
[02:16:23]  change. Yeah. That's why we've made it like super clear in the language. Essentially, this is something that's reactive. So the compiler can go and look at
[02:16:31]  it and be like, really, it's trying to figure out what are the static things so that we can eliminate them. And then how does Marco five to six transition look
[02:16:40]  like? So we definitely have that in the back of our mind. And the nice thing about Marco six and the tags API is that it is lower level primitives than
[02:16:50]  what we currently have in Marco five. And so usually going from higher level primitives to lower level primitives is, you know, pretty easy. And so we know
[02:16:59]  roughly what we're going to do in order to support the existing Marco five components in Marco six. The downside being it's not going to be able to be as aggressive with
[02:17:08]  the analysis. There's going to be cases where it just D ops and maybe we have like, you know, tooling that says, hey, this thing kind of D
[02:17:17]  opted over here. Maybe you should rewrite it as a tags API component or something like that. But generally, we want to make sure that all of it continues to work.
[02:17:27]  One other thing that I think is worth bringing up along the what if you use Marco as a spa is that there's no reason you can't use Marco as a spa.
[02:17:38]  Like today you could use Marco as a spa. This different differentiates it from Astro a little bit. And there are actually spas that are written in Marco.
[02:17:45]  But so Astro is basically, you know, a templating DSL for the server side and building islands and all that stuff. But Marco is a templating DSL
[02:17:53]  for server side rendering and client side rendering. So the same, like, it's the same thing. You can have Marco components that run in the browser. And one of
[02:18:01]  those Marco components could maybe implement a client side router. And you can, you know, go all in on that and have basically you render the shell of the page with
[02:18:09]  Marco. Then you have a Marco component. That's the router that does client side routing and all that stuff. There's no reason you can't do a client side router
[02:18:15]  with Marco. Everything's there. The thing is, if you're coming to Marco, knowing that our cell is server side streaming performance and all that. And also this
[02:18:23]  like partial hydration stuff. As soon as you add a client side router to that, all that benefit goes away. So it's like, at that point, you're using
[02:18:32]  Marco just because you like the syntax or something like that. Right? It's main selling points. The main reason it was built really kind of goes away. So like I
[02:18:40]  said, there are spas written in Marco, even at eBay and at eBay, it's, you know, we've got a bunch of components and existing infrastructure around Marco
[02:18:49] . And so it makes sense to even build potentially a spot if it makes sense for that experience because you can reuse stuff. But like in, you know, open source
[02:18:58]  or outside of eBay, you're probably going to be like, okay, react has a way bigger ecosystem and I'm not using eBay's internal components or whatever. Right.
[02:19:08]  So probably just doesn't make sense to use Marco as a spot. Some people have an open source as well. And I mean, they want to do that. That's
[02:19:14]  great. I like the language. Hopefully I've shown some of you like some of the features of Marco. If not all of them. And so, I mean,
[02:19:22]  we think that's compelling. We try and tackle the DX angle. But again, the main selling point that he differentiated from Marco from other frameworks is how it's optimized
[02:19:32]  and what it's what it was built for really. Yeah. No, that sounds good. That sounds good. Okay. Let's. Yeah. Yeah, I.
[02:19:41]  Yeah. I mean, these questions just keep on coming. I do need to move on. Let's see. Is there a negative concept of multiple routes under. Yeah.
[02:19:53]  That's all I'm going to have to do this and they're wondering if like, is it a problem if you have like 100 plus islands on the page or something?
[02:20:02]  Uh, no, I mean, technically you could probably like get yourself into a problem if you're doing something really weird. But I mean, obviously the design of our
[02:20:11]  everything we're designing is trying to make it so that you don't serialize too much. Cause this is a whole problem we haven't even gone into is like,
[02:20:18]  how do you serialize enough that you can be resumable without serializing everything? Cause that would be too much to send over the wire. It's a bit of
[02:20:23]  a tangent, but in general, it's like, okay, you're building a site. You're saying it's a button component. Tell me what is dynamic inside the
[02:20:31]  button component. Probably a lot of your button components don't have a lot of dynamic stuff, if any. And so we're just not going to send 100 button components
[02:20:40]  to the browser or render 100 button components at all. Um, sure. If you have a hundred things that are, um, interactive, they'll send that interactive piece,
[02:20:49]  but that's still less code. Like it's just going to send that interactive piece to the browser. Um, and again, if you're looking at things from a
[02:20:56]  spot perspective, you're still, I mean, you're not sending like a hundred pieces of code that have the button component, but you're sending a hundred rendered buttons.
[02:21:06]  You're hydrating a hundred rendered buttons and maintaining them in like the VDOM. Right. So yeah. Okay. Uh, okay. So we're, we're
[02:21:13]  going to switch gears here cause it's already two 20. And I want to talk about actually building this thing, like not playing around with the language. That looks cool.
[02:21:20]  But how, how do we end up with something so awesome? What, what, what goes into actually building this thing? Yeah. So there's so, so much
[02:21:27] , uh, so many pieces, um, that go into building a language. So I'm going to pull up, um, let's see. The first thing here I
[02:21:35] 'm going to pull up is actually our parser. Cause we have to be able to parse the language, um, to be able to make meaning of it and turn it
[02:21:43]  into an AST or convert it into something like, uh, JSX or what happens. So just give me two seconds to pull up the, uh, parser.
[02:21:51]  Uh, parser. Yeah. No problem. And I, I, I hope if any of you are interested in, um, Marco as a language and especially like
[02:22:00] , you know, things like compiling the Marco language to, uh, TypeScript. Hopefully this will give you an idea of how to do that. And also just how
[02:22:07]  flexible our parser is like, you know, Ryan was saying, um, you know, it's, it's JavaScript that you happen to use in these holes.
[02:22:13]  But the way we've built our parser is actually, uh, that the Marco doesn't know about that JavaScript, at least in the parse phase. Um, so we
[02:22:24]  actually make sense of the HTML and we're just like, okay, this part's going to be JavaScript. And we have rules to follow like JavaScript expressions. So this
[02:22:32]  is our parser. Um, the first thing you'll notice, like you can create a parser instance, it's called the HTML JS parser. Um, Marco
[02:22:39]  files used to be HTML JS files. Now maybe it's HTML TS files. I don't know cause you can put TypeScript in there. Um, maybe we need
[02:22:44]  a better name for this, but this is the generic thing. Nothing about this is actually Marco specific. So it's a parser and you give it these methods that get
[02:22:52]  called with these things called ranges, which are really just like start and end positions that have metadata about, um, the different syntax that we're seeing as we're parsing
[02:23:01] . So here you can see, like I've got an error, obviously whenever there's an error in the template, the parser will emit, um, an error code
[02:23:08] . Um, then we've got text and you can see in these examples, it's like, here's the Marco code. And then these errors, sorry, arrows
[02:23:16]  are pointing to what the range that you receive is going to, to have in it. So you can see, you know, you can handle whenever there's text content in
[02:23:24]  the template, uh, placeholders. And in this case, it's like, is it an escaped placeholder or not? I love the time you spent into making these
[02:23:31]  nice, like little, well, so this is actually really interesting, slight tangent. Um, our test suite is essentially take a Marco component here. It's like,
[02:23:41]  actually this one's supposed to be an error. So maybe I won't do that one. Uh, let's, let's just do like scriptlet. What is this
[02:23:48] ? Sure. Um, our tests are snapshots that basically show the Marco codes. Like here's the start of the scriptlet. Here's the rest of the code in
[02:23:58]  the scriptlet. And then there's, this is probably a bad example. Hold, let me find like one that's less lines. Um, so here's like
[02:24:05] , okay. An argument, which is something we hadn't talked about, but whatever. You can see it's like, here's the Marco code. Here's all the
[02:24:12]  things that the parser found. So, okay. So the tag started here, the tag name started here. There's an attribute that started here. It had arguments that
[02:24:19]  started here. The arguments had a value that started here. Like, so this is what our test suite looks like. We basically put in code and make sure that the
[02:24:26]  parser is outputting, um, events. And so I basically just reuse this as part of our documentation. And I think this is, uh, um, going through
[02:24:35]  this readme is actually a really interesting way to see what is all the syntax that Marco, uh, supports. It's like, you know, in here, it's
[02:24:41]  like, yeah, you can interpolate text or you can interpolate escape text and you can see how you, um, handle that. And then we've got comments.
[02:24:47]  Um, you can put JavaScript style comments or HTML style comments anywhere, um, in the Marco template basically. Um, and so, you know, you can handle those
[02:24:56]  here, uh, C data. I mean, you're probably not using C data, but this is an HTML parser. So has C data doc type. You can
[02:25:02]  pick up on as well. Uh, XML declarations, you know, not very important. Then you've got these scriptlets, which are the dollar space things. So
[02:25:10]  you can hook into those and see the ranges. Um, you can handle when the tag starts and this would be, uh, This is interesting architecture though in general, because
[02:25:17]  it emits event. Your parser just emits a bunch of events. It doesn't assume the tree structure at all so that you can make up your own meaning
[02:25:24] . Um, after the fact, cause there's tools built on top of this as well. Um, so this is more or less like you could think of it as like
[02:25:31]  tokens being. This is the, as you parse. And this is the starting point because everything starts from the syntax. When we get it out of this stage, you
[02:25:40]  basically just have a bunch of events that have broken apart what you've written into a bunch of these events essentially. Right. And so probably the next part we'll get to
[02:25:50]  is like how you take this and basically turn it into an AST or a CST or, um, other formats. Or, I mean, you could imagine cases
[02:25:59]  where, um, and maybe I'm getting a little bit ahead of myself, but for a lot of tooling, you want to basically take Marco code. And so this
[02:26:08]  is a little bit of our tag. I don't know. There's things in our tests that are kind of dated just because of older syntaxes and stuff as well.
[02:26:16]  But I mean, this is a tag called var with an attribute called foo equals whatever. This is not JavaScript. Um, anyways, uh, Oh, what was I
[02:26:25] , what was I getting at? Oh yeah. So you might have code that wants to like strip out all the JavaScript and just run that through ESLint or run
[02:26:31]  that through TypeScript or whatever. Right. So you might use our parser and hook into events that just emit in places where there would be JavaScript. And, you know
[02:26:38] , in this case, maybe you strip this out and pass it through some other tool or make different meaning of it. Right. So you can do that, like source to
[02:26:45]  source by the tokens transformation, or you can do it with the CST. Maybe that, I guess I should clarify, um, for people who don't know anything about
[02:26:53]  ASTs or CSTs. Yeah, I don't even, I'm not even clear what you mean by CST. I, I always use the term
[02:26:58]  AST. It's like a concrete, concrete syntax tree. It's like when no information is lost when you build the tree. Um, so like it maintains like all
[02:27:07]  of the spacing, all the comments, um, everything. Whereas AST is abstract. It tries to remove super, super fullest stuff or whatever. Um, so anyways,
[02:27:18]  you might, there's different pros and cons to both of those, um, types of trees. Anyway, so moving forward, it's like, okay, now we
[02:27:25]  get to an interesting one on open tag name. So this one, you get to the tag name. You can see like in this one, it's just a normal,
[02:27:32]  this is a div. But here you can see, like I was showing before, you can actually interpolate in things. We were doing it like with a single interpolation
[02:27:39] , but you can actually do like multiple interpolations. And you can see here, um, the parser will actually give you like, it's kind of like a
[02:27:46]  quasi literal, which is like a template, a literal in JavaScript. It's broken up into all these pieces. So you have a list of quasi, which are the static
[02:27:54]  parts of the string. And then the list of expressions. And then each expression actually has a value. So you can very easily from the parser get like just this
[02:28:00]  piece of JavaScript. And that's not highlighted here, but it would be in the actual thing. It just got too noisy. Yeah. Um, and so another interesting thing
[02:28:09]  here is in the, on open tag name, you can say what type of tag this is. So you can add your own meaning to HTML here. So one of
[02:28:16]  the things that you'll want to, or one of the cases where you'll want to enter into different parse states from HTML is handling things like void tags. So that is
[02:28:24]  tags that don't require like a slash or whatever. Right. So we've, you know, we saw, we looked at input, input is in here. So we
[02:28:31]  can say, Hey, Marco parser. If we see, um, an input tag, make sure that it's parsed as if it was a void tag. It
[02:28:37]  doesn't require body content basically. Um, and then there's a few tags that are. Um, special like script will only close. If you have slash script style
[02:28:47]  only close. If you have slash style text series, the same thing. So those are, you know, listed here. And this is just example code in Marco. You
[02:28:53]  can configure these. Maybe there's other tags that, um, you want to do. And then the other thing, the compiler or sorry, the parser allows you to
[02:29:00]  do is say, these are statement statements, top level statements. So we saw something, um, go to. Right. Go here. Like a Marco file. Um
[02:29:12] , you know, so if I have import, let's just do like static. X equals one. What is the difference between bits and the tag from Marco's parser
[02:29:21] ? Right? Like in concise mode, this would be a tag called static with X equals. So X being an attribute equals one. Yeah. You can actually tell the
[02:29:31]  parser, Hey, these are not tags at the top level. These are statements. And so here, these are the statements we have. Class is, you know,
[02:29:39]  from the Marco four and five style API. But so you can say, Hey, parser, parse these as statements. And that will just allow you to, to
[02:29:46]  do things like, um, you know, end it with stuff. Um, and do regular JavaScript stuff. It'll just parse it like a JavaScript expression, basically.
[02:29:56]  And follow any things. Right. So those are the things. And that's beyond that. Like that's the main, like configuration side. Um, but then you've
[02:30:04]  got all of these other events for the different states. So we've got like the shorthands. You can have shorthand IDs and those can actually have interpolations
[02:30:09] , which you're probably not going to do, but so, and then you've got the shorthand classes, which there can be multiple. Again. Yeah.
[02:30:17]  I mean, you've got, you've got all this, all the syntax here. Um, yeah. Um, attributes, attributes can have arguments. So, I mean
[02:30:25] , it's all here, all of those features. Now the thing that's interesting is this parser doesn't make, doesn't really care what's inside the JavaScript.
[02:30:33]  It just knows some simple rules to continue JavaScript expressions or really any sort of programming language expressions. Um, but you can come to this. It's not Marco specific at all
[02:30:41] . You can add your own statements, your own tags. Um, you can choose whether or not you want to support something like a spread or something like the attribute method
[02:30:50]  shorthand, but you can really use this to build sort of your own little language, um, that has a lot of the niceties of the Marco language. And
[02:30:59]  it's, uh, it's pretty fast as well. This, this little parser. Nice. Okay. So, yeah, uh, just kind of getting the context
[02:31:07]  of the whole thing. This is the starting point. We parse, um, the template. This will break apart all our expressions. It'll actually help us identify where
[02:31:14]  the JavaScript expressions are in here. And those, and it gives us our, our, it's actually events at this point. So if we want to make an AST
[02:31:23]  or CST out of it, we're actually going to have to write something our ourselves. So what's the next step? What's the next step? Yeah.
[02:31:31]  So, um, let's go here. Let me just pull up, um, something else here. Actually. Do I have it? It's kind of interesting. Like
[02:31:39] , I wonder, did Svelte write their own parser or did they use an existing one? I wonder. I'm pretty sure they started with, I don't
[02:31:45]  know for sure. So don't quote me on this, but I'm pretty sure they started with like an off the shelf handlebar style kind of parser.
[02:31:51]  And then they went and made their own. So I'm sure they have a parser in there as well. But obviously their parsers isn't quite doing, um,
[02:31:58]  what we're doing. Cause, um, a lot of what most other languages have, like, here is a block that constitutes JavaScript or something like that. Like basically
[02:32:10]  just do bracket matching and you'll be fine. Um, whereas we have this concept of, you can continue JavaScript expressions. Like you can put whatever you want as the attribute
[02:32:19]  value. You can have these statements that span multiple lines. And so there's a little bit. Okay. There, but yeah, I'm pretty sure they have their own
[02:32:26]  custom parser. Okay. Yeah. It's just a curiosity. Yeah. Um, so next kind of step, this, this is our, uh, server. So
[02:32:36]  this is what powers our VS code editor. It's kind of a work in progress right now. Cause we're adding TypeScript support and there's a couple things that
[02:32:44]  came up that made it a little bit trickier to implement it. So we're working through that. Um, but a lot of it's here. So next step from
[02:32:49]  the parser. Um, you know, I said, maybe we want to build a, uh, an AST or a CST. And for the language server,
[02:32:58]  we actually wanted a CST. Um, so we have a wrapper around the parser. Can we, can we even roll back a little further? Yeah. Yeah
[02:33:08] . The language server. Yeah. Oh, right. Yeah. Okay. So this is one of the things you'll, you'll have to build. Basically if people use
[02:33:15]  VS code, um, obviously there's VS code plugins that you can add things like syntax highlighting. Um, and I could actually maybe do syntax lighting first. It probably would
[02:33:23] 've been a, anyways, we'll, we'll get to that. So that's another piece of the puzzle. But so if you want to write a VS code
[02:33:28]  plugin, um, that adds a new language, you want to have the syntax highlighting, which will show maybe in a sec. And you also want to have a editor plugin
[02:33:37]  that gives you like the auto completes and the refactoring and like all that stuff related to, to your language. Um, and so what I'm looking at right
[02:33:46]  now is the language server, which is a abstraction that VS code recommends to basically have your, that kind of logic, the auto completions and stuff run in a different process
[02:33:59]  off thread. Um, and you basically say, Hey, VS code client connect to the server that has an agreed upon protocol that says. Like basically the VS code client
[02:34:06]  might say, Hey, I need a completion at this character in this document. And the language server is just like a RPC server essentially that says, Oh, Hey,
[02:34:16]  yeah, this location, here's some completions for that location. Right. So they've kind of decoupled it. So you have this server that is sort of
[02:34:24] , uh, editor agnostic. And you know, the language server protocol is actually used by some other editors as well, or at least you can plug it into
[02:34:31]  other editors. So hopefully that answers the question. I don't know if you had a better or anything to add to that Ryan, but. No, so this is,
[02:34:37]  this is, this is for all like, this is, this isn't necessarily syntax highlighting or formatting or anything. This is just for, this is completions essentially. Like
[02:34:45]  all the, like when you hover over something in TypeScript and you see the. Exactly. Stuff pop up. Yeah. Yeah. Yeah. Cause the syntax highlighting is
[02:34:54] , um, typically done through a, uh, either like a series of regexes or a grammar. That is something that needs to be like compiled. So it can
[02:35:02]  be really fast. So it can happen as a type and stuff like that. Whereas these like completions, you probably don't notice if it gives you the completion in like
[02:35:12]  a hundred milliseconds or something like that. So it's kind of a better candidate for, um, being off thread. So most of the editor functionality beyond syntax highlighting is
[02:35:19]  typically implemented in these language servers. Just so that, you know, they can run in a separate thread. They're not going to bog down the editor thread and that kind
[02:35:27]  of stuff. Okay. Um, that's just a detail about VS code. Um, so yeah. Um, the next piece I was going to show and I'm
[02:35:36]  maybe, I'm not going to show like a ton of this, but like here I'm creating, um, a CST basically. So I'm importing our parser
[02:35:44]  and I have basically the type definitions for all the types of, uh, nodes that we have that. And this is a structured format, right? So like you have a
[02:35:52]  tag, the tag can have, um, a parent and owner is a different thing. I won't go into is like in concise mode. Um, where's the
[02:35:58]  open tag? Where's the end tag? Um, several bar are, it's like, you know, all the stuff, but it's like an object structure in a
[02:36:05]  tree. Yeah. Um, so we've got all these like definitions for the different, uh, structures here. And then basically we start the parser, we start with
[02:36:13]  a program node. Um, and then basically we've got like helpers to say, okay, when we get text, we're going to push into the current body,
[02:36:20]  uh, a text node. And when we got C data, blah, blah, blah, like those are some. So a bunch of events, push them into a
[02:36:25]  tree structure. Yep. And then there's like some that are specially handled. Like the style tag has to do some additional. Right. You're defining the structure, which
[02:36:34]  you did with TypeScript, which makes things a lot easier and nicer. Right. But essentially you've kind of taking those original ranges and you're morphing them into
[02:36:42] , into useful tree structure. Okay. Right. Yeah. So like in, you know, um, in this program, you can see it's got a list of body
[02:36:50]  content and a list of static. Yeah. Content. So down, um, in the tag name, you can see this is a switch on the tag name. So
[02:36:56]  once we get the tag name, we're like, okay, we're starting, um, you know, an import, we're going to push a static node. That
[02:37:02]  is a type import and its boundaries are this location. Like we're not parsing any JavaScript at this point yet. Yeah. Right. We're just saying, here's
[02:37:10]  an import tag. Maybe we pass that import tag to somewhere else or make different meaning of it. Um, I guess my question is, okay. I, I,
[02:37:17]  I understand how we get the structure, but is the structure you chose arbitrary or is this something that the language server protocol is expecting? Um, here it's kind of arbitrary
[02:37:26] . I wanted to attach as much information as possible because I want to, you know, provide, um, rich IntelliSense on top of it. And the
[02:37:33]  tree structure is useful because like from a language server side of things, you're probably doing some kind of analysis on it. Um, and so having all that information available is
[02:37:44]  helpful. Um, to be able to do that kind of stuff. So, but yeah, so let me just quick, so we're building up a tree structure.
[02:37:52]  You know, it's just pushing tags as you go, setting metadata, building up the tree structure. This is our kind of CST in here, handling all of those
[02:37:58]  events as you would expect. Um, I mean, it's not too bad. 700 something lines of code. There's whatever. Um, so then what we do,
[02:38:08]  um, and so this is, uh, let's see. Yeah. I'm just trying to figure out how best to, to describe this. So this is the
[02:38:17]  language server, right? So this is actually starting a service that like I said, is an RPC like service that will be communicated. VS code will communicate with this.
[02:38:27]  And so it like starts this pro process. It calls, um, where is it? Uh, create connection from VS code. And then it says, Hey, this language
[02:38:37]  service supports all these different features, right? So that the VS code client knows. Um, Hey, you, can you do code, code actions? Can you do whatever
[02:38:45] ? Um, what character should I provide completions on? So you provide that. They have, they have a set set of features and you can just opt into you
[02:38:52] . Exactly. Because otherwise it would like spam your server with stuff even when it doesn't like implement. Yeah. Um, that, I mean, they could probably have done
[02:39:00]  this in different ways as well. But so anyways, then the other thing is they have on the connection. You can say when there's a completion, do something.
[02:39:08]  When there's a definition request, do something. When there's reference requests, when there's, so all these requests, um, you can handle and do something. And
[02:39:16]  so one of the things, and this is pretty common. We've made it so that, um, these like top, this top level connection calls this service thing, which
[02:39:27]  implements. all of the different APIs, but so stepping back for a second, because this is a critical thing when you're building a language server for any sort of
[02:39:37]  JavaScript framework, you probably have multiple languages embedded in your document, right? Like if I've got a Marco template again, and we've got div, like, yeah,
[02:39:49]  sure, this is Marco. And, you know, you can see that it out of the div and whatever. But it's like, now we're in JS,
[02:39:56]  right? So I want to maybe hopefully defer that to like TypeScript or something. And in Marco, you can also there's like a top level style block. Yeah,
[02:40:06]  so you have, you know, maybe body. And you can see actually, I'm getting like the completions that you would expect. But so we have this language server
[02:40:14]  that is responsible for returning all completions for a Marco file. So how did it handle, how is it handling these like CSS ones, right? And that's what
[02:40:23]  this kind of does here. This is a facade in front of the, all of the different features that VS Code can implement that says, hey, I'm going to defer
[02:40:33]  to multiple different plugins. So we've got like the base Marco plugin, we've got a script plugin, we've got a style sheet plugin. And then this code here
[02:40:41]  basically just executes all of them for different, for the different sets of functionalities and merges them together in a way that makes sense. So like if you do
[02:40:49]  a completion and say Marco wants to provide some completions and TypeScript wants to provide some completions, it'll just merge them together and give you what makes sense and remove
[02:40:58]  duplicates and stuff like that. So that's kind of roughly how it works. And then all of these functions are expected to return, you know, basically JSON data that
[02:41:08]  says, hey, here's all the completions or here's all the- Right, okay. So this is the standardized format. The language server is expecting something from these
[02:41:15]  returns Okay. Exactly. Yeah. And so now you see, we've got like three different things here. Script is like TypeScript, JavaScript, whatever. Style sheet
[02:41:23]  is what you expect. And then we've got the Marco piece of it as well. So again, this thing is like doling out to those individual things. So on
[02:41:31]  the Marco side, if we go to something like the completion handler, the Marco side, we're really looking at this like CST. Like we are, we care
[02:41:41]  about all the Marco specific information. We don't really care about parsing the CSS too much or the JS too much because we're going to defer to other tools for that
[02:41:49] . So we want, we want to work with the Marco AST. So we've got like this helper that's like, okay, given the document that they're asking
[02:41:57]  us to complete for, get the Marco file, it's cached, whatever. It doesn't really matter that much. So you get this file, this file has
[02:42:03]  the ability, um, to like, it has that parsed AST on it. And that parsed AST has a utility to say, get me the node at
[02:42:12]  this position. So it actually does like a binary search through the CST. I mean, it's not really a binary search, like a nested binary search through the
[02:42:19]  CST to get you the node at this position. So here, this is going to be like an attribute name, or this is going to be like the tag name
[02:42:25] , or this is going to be something like that. It's gonna be one of those nodes in the CST. And then what we do is we have this list of
[02:42:33]  handlers here. So we, you know, provide Marco provides completions for tag names, attribute names, and so on. And so like, if I go into what
[02:42:43] 's, what's a good one, maybe I'll do attribute name. So it just defers to this like attribute name completion helper that receives the nodes, this would
[02:42:53]  be the attribute name node. And then basically, it's trying to see if it has a modifier, like, you know, it's just building up this structure, it
[02:42:59] 's using Marco's taglib stuff, which is the way that we figure out what tags are on disk, to get you a definition, then ultimately, it figures out all
[02:43:06]  possible attributes that you could have and returns a list that has all of those as completions, right. So if you think about it, it's VS code says,
[02:43:15]  hey, language server, I have a completion at this position. Then we say, okay, I'm going to defer to my list of plugins, execute all of the plugins
[02:43:23] . In this case, maybe it's the Marco one that actually picks it up, you can return undefined if it doesn't want to pick it up. And then
[02:43:29]  it says, okay, parse it, where's the node that we're at? Okay, yeah, pass this node through this helper, I know how to complete attribute names
[02:43:36] . And you know, the attribute name, part of the niceness of it being this like, CST structures, I could say, well, if I want to
[02:43:45]  provide a completion, and it's an attribute name, and maybe the parent tag is style or something like that, maybe I want to do something special. On this node,
[02:43:55]  I have parent, right, and I could check to see if that was like a style tag or something like that. So you have access to all that information to provide that
[02:44:04]  kind of completions. So you know, on the Marco side, we implement all of these. You mentioned for CSS, and for what was the other for JavaScript,
[02:44:15]  we can basically defer to other ones. I guess HTML part completion wasn't too helpful for us as a baseline? Like, are you pulling anything? I was thinking, so
[02:44:25]  I could bring in HTML completion, I might do that, like Emmet style completions, there's no reason I couldn't defer to an HTML, the HTML language
[02:44:35]  service, to do the same ish thing. I just haven't done that yet. Because we already provide most of the completions that you'd want for Marco itself,
[02:44:43]  because that's the syntax we know. Okay. So then, the other thing is going to these other embedded documents and style sheets and scripts. And so one thing that
[02:44:55]  makes it very different from something that like Astro, well, I mean, to a degree, you have like, the tag variable is a JavaScript variable. It's not
[02:45:08]  some JavaScript that you can just paste somewhere with no meaning. It has meaning. So you have to build up a structure that makes sense there. Anyways, we'll start with
[02:45:15]  the CSS one, because I think it's a lot simpler, obviously. So for the CSS one, you can see we're like importing where is it? Oh,
[02:45:26]  yeah, VS code CSS language service, right? So this is basically VS code has implemented this language service, not a server, not a language server, language service, which
[02:45:36]  is basically just the APIs that you can call without starting a server, right? So it has methods like do complete, or do completion, and stuff like that. And
[02:45:46]  so now here's the tricky part. So what I actually want to do is I want to extract all the CSS from the Marco document, which is what's happening in this
[02:45:57]  process doc, basically this process doc, parses the Marco file, just like it was doing on the other side. And then it in a cache way, processes that
[02:46:08]  Marco file where the process in this case is extract, which basically, you can embed CSS or less or SCSS or whatever in Marco. And so it differs to the appropriate
[02:46:23]  language service. But essentially, it calls this extract style sheets thing, that walks over a whole CST builds up a, so let me get extractor. So you
[02:46:36]  can see how there's like this get extractor based off the extension, it calls write. These write calls are actually building up a CSS string that's source mapped. So
[02:46:49]  for the CSS side of things, it's like largely just one to one. So like all these write calls are just like straight up writing out. child. So like in
[02:46:55]  this case, it's like if we have a style tag, everybody, everything in the body is going to get written out to this source mapped thing. If we had a
[02:47:05]  placeholder, so like if you had, again, in a Marco document, if you have style, and then you have like, body color, and you interpolate in
[02:47:17]  some value here, we're actually experimenting with turning that into a CSS variable for you automatically or custom property. And so it actually in the extractor here just turns it
[02:47:30]  into a custom property as far as the CSS language server is concerned. So we're like making a mapping just just so I understand what you said you get a source mapped CSS
[02:47:39]  thing, what does the language server do with? Yeah, so that's the next part, essentially, the I mean, this is a lot of code that you don
[02:47:46] 't need to process but the core of this, the core of this is, we have a Marco file, or sorry, we have the CST of the Marco file,
[02:47:55]  build some CSS, build an entire CSS document, ignoring all the Marco stuff, just the CSS stuff, and make sure there's source maps, because obviously needs source maps for
[02:48:06]  the next part, which is, okay, let's just close bunch of stuff here. And we'll go back to the CSS one. So we extract that code,
[02:48:19]  which is just going to be a valid CSS document at this point without any of the Marco stuff in it. And we're going to say, we're going to create a
[02:48:27]  virtual text document using VS codes API, this text document thing is VS codes thing. So we create a virtual text document that has the extracted code. So extracted that generated
[02:48:36]  is that extracted code. And then, so we build up this list of extracted documents. Again, the reason we're doing that is because there can be multiple languages, CSS
[02:48:44]  less CSS. So we extract all these things. Let me go up to the top here. So this is the key part. And why it's not as simple as just
[02:48:53]  saying like, Hey, CSS language service, like, because we're trying to build up one cohesive CSS document to represent the whole file, because you might define like a
[02:49:05]  CSS variable up in one style, and then want to reference it down below. And if we can merge these in a way that makes sense, then you can actually do that
[02:49:13] . And the refactoring works across them. And obviously, it becomes even more important when you've got like scripts. So you can't just say like, I've
[02:49:19]  got this little bit of CSS, I'm going to give that to you. I've got this other little bit of CSS, I'll give that to you. It works
[02:49:23]  better if you can build it up into a document and then map it back. And so that's what all of these different methods do. We process all of it.
[02:49:31]  And then we defer to whatever language service makes sense with the virtual document and the virtual position of things. And then essentially, we just iterate over the results and source map this
[02:49:43]  like data back. So like in the case of completions, you know, this has a completion list and the completion list has a list of text edits and those text
[02:49:53]  edits have like document positions in them. But those document positions are actually to our generated code, right? And so we've got code that basically is like map this back to
[02:50:06]  the actual Marco file. And so the general process is get the Marco CST, generate a CSS file, a single CSS file. Yeah. Call the CSS language service
[02:50:19]  with our virtual file in the virtual position and then map it all back. And so you have to implement that for every one of these types of things. And so there's
[02:50:32]  a lot of code here, but it's, you know, fairly repetitive. So and this this process of basically mapping it to the thing, and then then giving it
[02:50:41]  to the language server and then mapping it back so you can get to the right locations. It's so when you say it's a lot of language, you don't just
[02:50:50]  mean CSS less than whatever, you mean, like, is this the general process for all of these to a certain degree, like JavaScript? Yeah, the JavaScript process is
[02:51:02]  very similar, except more complicated than this in some ways. Yeah, which I probably don't, unless it's important. I'm not sure I want to actually look at
[02:51:08]  that complication. Yeah, so I won't go into it in much detail. But like, just if anyone is interested in building this kind of thing, like this is
[02:51:16]  kind of a general process, like, yeah, draft the document, source map it back. And this is actually quite fast. Like I was trying to look at the
[02:51:26]  overhead that it adds and doing this, like mapping back and all that stuff over a normal call. And it's like two milliseconds overhead. So I mean, it's,
[02:51:34]  it's nice. But yeah, so on the on the JavaScript side, same thing, you know, it's processing the document in this case, instead of extracting CSS,
[02:51:43]  it's extracting and building up a TypeScript document, not unlike the JSX that you were seeing generated from the, you know, what we're doing in the demo
[02:51:54]  before. So it builds up this like fake JSX passes it to basically the TypeScript language service, which doesn't isn't as nice of an API as the CSS language
[02:52:04]  service, because it's interesting service. So you have to actually use TypeScript's APIs directly, which don't map one to one. So this one has a much
[02:52:12]  messier back and forth. So this is it. This is how you do the TypeScript. Well, I guess my question is if Marco has, sure, for the
[02:52:19]  embedded TypeScript, this makes a lot of sense. But Marco also has tags that have TypeScript considerations like the tag variables. Yeah. But I guess you're saying each
[02:52:31]  of those slashes when they come out of the tag variable, that's the thing. We turn it into something else. Like it doesn't, this isn't a
[02:52:38]  one to one. We aren't even trying to make a runnable TypeScript file. We're trying to make our TypeScript file that would give you these, the
[02:52:45]  same completions that we want. Like that would make sense given what you wrote in the Marco template. Right. So is there just like what, is there any way we
[02:52:56]  can like see what it currently outputs? Like something that outputs just to like to show people how crazy it is? Um, yes. Uh, I'm just trying to
[02:53:07]  put you on the spot way to do that right now. So I'm running. I'm just, I'm just curious because you, so like you take a Marco template
[02:53:16]  and then you get out like a TSX file, but it's probably not like a TSX file you've ever seen before. It's like, it's like
[02:53:24]  got TypeScript definitions, TSX elements and like, like a bunch of weird scoping. Right. If I, if I remember correctly. Yeah. It's doing a
[02:53:34]  bunch of magic. Um, and to be clear, like Svelte and view kind of have to do the same thing. I think our language is a little bit trick
[02:53:42] ier because we blend things a little bit more and have different semantics, like with the variable hoisting and stuff like that. Um, but yeah. Okay.
[02:53:50]  Let me try, but you're saying, okay. So you're saying when we have TypeScript in Svelte or TypeScript in view, they're, they're
[02:53:58]  actually compiling their templates down to some kind of TSX or JSX variant, and then doing TypeScript against, uh, TSX files and then mapping it all back
[02:54:06] . Yeah. That's so it's a huge mess. Like if TypeScript supported source maps, input source maps specifically, this could be made a lot simpler. Like
[02:54:17] , so sure it's one thing to like generate this fake TypeScript. Right. But I have to generate some fake TypeScript, give it to the actual TypeScript compiler
[02:54:28]  into response, map it all back, like do all that myself. Um, whereas like a lot of tools like Babel, you could say, Hey Babel, here
[02:54:38] 's some code. Here's an input source map. Just merge the input source map with your output source map and we're good. Right. Like everything will map back
[02:54:45]  to the original source code, even though it's like a generated thing you're passing to Babel. TypeScript doesn't support that. So it makes it a lot more
[02:54:51]  annoying to work with. Um, okay. Let me see. Uh, it might be kind of tricky for me to get this generated code right now. Cause I'd
[02:55:07]  have to like scaffold out another project. I mean, I can maybe do it if you have something to distract the audience with for. Okay. Yeah. Yeah. That's
[02:55:16] , that's fine. Yeah, no. And we still got an audience here. I mean, honestly, uh, that's awesome. I'm, I'm, this
[02:55:22]  is a technical deep dive. You're getting content. You're probably not going to find elsewhere. Um, so I'm hoping everyone's getting some value. The chat
[02:55:31]  got like really quiet, like around the time we switched over here, it's either. Yeah. This is the stuff that you don't want to deal with or ever know
[02:55:39]  about, but it's like super important if you're building a new language. Um, well, yeah, yeah. And this, and this is, this is, this
[02:55:46]  is important because I, yeah, I really want to emphasize this cause I think there's a lot of people who are just like, ah, whatever, you know,
[02:55:53]  go build a new language. It's like even adding the stupid punting operator to JSX. Like if my, if I had a mission that I was just going to
[02:56:01]  add the thing, use that syntax, I've suddenly decided like I I'm, I'm going off the rails and we're going to, we're going to, this
[02:56:07]  is only the first tool. You've got like six or seven tools. You you're, you're suddenly accountable to. Yep. Um, because obviously there's like any
[02:56:16]  bundler that's going to parse and like basically anywhere that code would have been parsed. You now need to account for it, which I mean, Marco, obviously
[02:56:22]  anywhere it's going to be parsed and to some extent, anywhere, uh, solid would be parsed. You have like the Babel plugin in front of it.
[02:56:28]  Um, so I mean, you have that. So anywhere it's parsed, then you have anywhere it's formatted anywhere it's like, um, highlighted. Um
[02:56:36] , so like there's various different types of highlighters out there, syntax highlighters. Um, yeah, there's a, there's a lot of stuff that goes into
[02:56:46]  it. Right. Right. And this is just language server. You said you were like, Oh, I should have showed something else with the language server is actually maybe one
[02:56:54]  of the most core pieces to the developer experience. The completions are the thing that we all like take for granted now and other pieces fill in like getting the reason you want
[02:57:05]  TypeScript support, um, is largely for these completions. Um, there's also obviously the TS compiler itself being able to complain, but I know a lot of people
[02:57:15]  who just use TypeScript with Babel and never actually adhere to the actual caring about having TSC running on it. And they're just like, yeah, or even
[02:57:24]  you're writing JavaScript, you're writing. Yeah. You get the benefit, like even without using TypeScript. Yeah, exactly. So yeah, this is, this is
[02:57:32]  huge. So I want to like touch on two other things just because like, I'm annoyed by this experience. Like it's a lot of, uh, stuff, especially
[02:57:39]  working with the TypeScript compiler specifically. Cause like I said, they don't have this like nice API that you're working with for, it's just saying, Hey
[02:57:46] , do completion or do whatever. Like it's all you're interacting with the TypeScript API directly for this piece. Um, but so that's only one side. Um
[02:57:54] , cause with TypeScript, it's not just that we want to provide TypeScript completions for within the Marco template. What about other TypeScript files? Right? So
[02:58:03]  you import a Marco file from a TypeScript file. What happens then TypeScript doesn't know about Marco by default. And so basically we have this whole other thing,
[02:58:14]  which is the TS plugin. Um, and basically through the, uh, through the VS code, um, plugin that we have, we can say, Hey, TypeScript
[02:58:24]  will automatically include this plugin all the time. So you don't have to actually go and include it, which is how that works in every other framework. But, um
[02:58:31] , this TS plugin is like an entirely different API, um, where you have to kind of do the same thing and map it all back. Like I have to say,
[02:58:39]  Hey, TypeScript, you support Marco files now. Hey, TypeScript, I'm going to monkey patch your file change so that I can clear my caches. And
[02:58:46]  like TypeScript plugins are monkey patch. Like that is how you do it is literally monkey patches. So it's like, I'm going to go back to the actual
[02:58:55]  location in that Marco file. Right? So there's this ridiculous amount of mapping there. So it seems like conceptually, like if you just say, we just go through
[02:59:09]  the Marco template and extract out these scripts and build something meaningful and then pass it off to other tools. It's not like that. It's that plus we have to
[02:59:19]  pass it to the tools and map it all back and make those tools not even know that Marco is there. Right. Um, or any other tool. Yeah. And like
[02:59:29] , this isn't Marco specific. I think some of the things that I've done here, make it a little bit seamless, more seamless in some ways, because, uh
[02:59:37] , there's people have some crazy hacks around the TypeScript compiler. And I've been digging a lot into the TypeScript source code to make it so that that's not
[02:59:44]  necessary. Well, I mean the, the thing is this people forget how recent Vue and Svelte got TypeScript support. I, I think Vue came
[02:59:53]  around, was it May, 2020? I want to say like it, it's been, it's been like two years now, I think it is essentially before up until
[03:00:04] , before 2020, you weren't getting TypeScript and Vue. And then Svelte came about six months after that or four, four, four months after that,
[03:00:11]  I think. Yeah. Cause they, they saw each other and they're like, eh, you know, but yeah. So like, just to kind of put in
[03:00:17]  perspective, somebody went through this the first time before anyone else had tried it and, and kind of figured it out. And now doing a lot of research to kind of improve
[03:00:26]  on that and figure that out. But like, I wonder how long these tools are around in the language service before someone was like, like, yeah, I'm going
[03:00:33]  to make TypeScript work in Vue. Like. Yeah. Uh, it's, it's an undertaking. And I mean, because of how many hacks I've seen
[03:00:42] , um, and how much code is required to do this. Like, as I've been doing it, I've been like, surely something has improved by this point
[03:00:49]  and there's different patterns that I can use to hook into these same things. Surely TypeScript has thought about this a little bit and it's, it, it hasn't
[03:00:56]  really, there's some things that have improved minutely and I've, uh, leveraged that, but yeah, generally it's just a little bit of a mess,
[03:01:02]  uh, getting this going, but once it all works together, it's like, um, pretty nice. And I mean, the pattern of it isn't, um
[03:01:09] , that bad when you think about it, it's like, I'm building a custom language. I want to, uh, defer to other tools that don't understand my
[03:01:16]  language. Okay. I'm going to output something the tool understands and map it back. Um, just it's a chunk of work to, to do that. Um,
[03:01:24]  yeah. We just, we just got rated. It looks like, um, code coding garden. Um, just for anyone new who just kind of jumped in, uh
[03:01:33] , we're talking about how to build, it's pretty deep technical topic, but we're actually looking at how to build, um, uh, a language as a framework
[03:01:43] , kind of like what Svelte does. We're talking specifically about Marco framework. I have a, a core, um, maintainer of Marco here, but it
[03:01:49] 's basically showing like, like we're talking about right now, how you add TypeScript to like something like view or Svelte, um, from a implementator standpoint
[03:01:58] . Yeah. Um, I think there's comment from Fabio. I could, it's almost easier. This one. Yeah. Um, almost easier to rewrite Type
[03:02:11] Script with. Um, I mean, ask, so the thing is, it depends what you mean by rewrite TypeScript. Like, are you going to rebuild everything from scratch
[03:02:19] ? Cause that would obviously be a ridiculous amount of work, but even like making a change to TypeScript, adding new features to it. Like that's not the simplest
[03:02:28]  thing either. Like the VS code team, the people that maintain the TypeScript language service and like all that stuff, they have to go and touch all these same things,
[03:02:35]  the syntax highlighter, which we have to talk about. Um, so it's a huge undertaking and even tools like, uh, you know, bun, it strips the Type
[03:02:43] Script for you. If they add new syntax to TypeScript, you'll hope that they strip it out. So they're going to be involved as well. So like any
[03:02:49]  of these changes impact so many tools, um, which is why we don't see that much innovation, uh, in my mind to the actual core language itself. Um
[03:03:00] , I think there was a big push, like, especially on JavaScript, when we were in like ES5, it's like, yes, let's get the language,
[03:03:06]  right. Let's add some stuff to it. I feel like that's really slowed down here, but there's still a lot of room for, um, improvement.
[03:03:13]  TypeScript does still add stuff. Don't get me wrong, but they try and add it within like a sane syntax space. So there's a whole bunch of considerations
[03:03:20]  there, but yeah, no, it's, oh yeah, no, it's, it's, it's, it's, it's pretty, it's pretty crazy
[03:03:27] . Uh, the amount of effort, like the thing is, I forget who is the, uh, what's the name? Katie, uh, Donnie from, uh
[03:03:35] , uh, SWC has been trying to rewrite TypeScript in Rust and it's... What a task that would be. Um, I did not envy that task. Uh
[03:03:45] , but I mean, if it's achieves the same thing, and it's much faster than that would be great. Um, and hopefully we could use similar mechanisms
[03:03:53]  to leverage that, you know, on the Marco side as well, but yeah, it is a task. There's so much TypeScript is such a huge project. It
[03:04:00] 's probably like mind blowing to people, especially when you consider it's like broader ecosystem. Um, but yeah, so I just wanted to show real quick, like I mentioned
[03:04:10]  that there's like the language server and then there's the actual VS code plugin. I want to show what the VS code plugin, um, actually looks like this is
[03:04:17]  our, this is our VS code plugin. Oh, I mean, that doesn't look too bad. Right. So, so there's nothing here really. Um, all
[03:04:25]  it does is say, Hey, I'm gonna listen to a language server. Um, like start listening to the language server and deferring events to it. Right. So
[03:04:34]  this is like our VS code plugin. There is other stuff in here, like the documentation for the VS code plugin and build tooling and stuff like that. Um, and
[03:04:42]  then also the other critical piece is the actual, uh, grammar for syntax highlighting, um, which is a whole nother beast. Uh, but this, this all gets
[03:04:54]  pulled in under the VS code plugin then. Yeah. VS code Marco is basically Marco VS code is essentially the language server with all those other language servers, like the CSS one
[03:05:02]  and TypeScript and all that stuff bundled together. Plus it comes with the, um, the text make grammar, which is basically the syntax highlighting. And it also
[03:05:12]  comes with like this configuration thing to say like what the brackets are and a few other things in here. That's the core of the actual, this is crazy. So you
[03:05:21] 're saying to, to this is syntax highlighting that we're looking at now. So we jumped gears cause I was sort of waiting on seeing that TypeScript output. I don
[03:05:28] 't know if you figured out, it's too hard to do it when I'm talking. Okay. Yeah. Cause I started talking and then, and then, and
[03:05:35]  then, and then we kind of went here. I bailed. Are you, is there any way we can get that later? I, I'm just, I'm
[03:05:44]  just curious. We can talk about syntax highlighting right now, but I won't. Okay. Yeah. We'll get it. We'll get it. Um, yeah,
[03:05:50]  it's gnarly TypeScript that outputs. I know. I, I, that's why I think it's so cool because people probably like, oh yeah, TS
[03:05:56] X. And they're like picturing what you did earlier in the stream. And they're like, here's a Marco. Here's the solid, you know,
[03:06:01]  here's the JSX transform. That's probably what they're thinking. Yeah, no, it's not at all like that. Um, sadly. Cause people are like
[03:06:10] , oh yeah. Converting Svelte into TypeScript or converting, uh, view into like, for people who aren't, weren't following the conversation and missed
[03:06:17]  the beginning here. The way view and Svelte get TypeScript support, um, in VS code and completions and all that, is they actually compile their templates
[03:06:25]  down to TSX. So they're actually generating like TSX, like JSX, like react does. And then TypeScript works well on that. And that's,
[03:06:33]  and then they're basically taking all of those locations in your code that like the completions comes through and they're mapping it back again to the template. So they have to
[03:06:42]  like convert it, map all the, like basic source map it. VS code goes, yeah, yeah, we need the completion for this, then map it back to
[03:06:50]  the code. And then that's how they do everything. But it's this weird indirection through JSX of, of all things. So if you're using view
[03:06:58]  or Svelte, um, with their templates and you're in VS code, you're secretly using JSX, um. Technically this doesn't use, uh,
[03:07:07]  um, JSX it's outputting TS directly, but otherwise, yes. Oh, so you didn't go the, the TSX way. Cause I think, no
[03:07:16] , Svelte does do, um, TSX. It was easier for me to just output TypeScript directly, um, and get the completions that I wanted.
[03:07:25]  Uh, so dang it. Where is this? Yeah. I'm still just talking, giving you plenty of time. Yes. No, yes. Cause people, people
[03:07:34] , people came in and I guess they were, they were trying Preact signals today on that other channel. Um, which, um, I talked a little bit about yesterday
[03:07:43] . Um, it's really cool to see this reactivity, um, coming into other frameworks. And, um, Marco's kind of an interesting framework. The one that
[03:07:50]  we're talking about today is in it, it uses compiled signals basically under the hood. So think of something like Svelte, which is automatically compiled, but it
[03:08:01] , um, it actually does it fine grain the same way that solid does, or that Preact added, where you can just like update one point and have an update one
[03:08:11]  point in the, in your view code. Marco compiles that way, which is very different than Svelte. Svelte actually reruns components similar to React.
[03:08:19]  So it's like, uh, it's, it's, it's like a, it's a very different kind of paradigm, but it's interesting because if you
[03:08:25]  go this way and you build your own language, well, this is where you end up. Um, you end up taking your beautiful language and converting it into maybe JSX
[03:08:36]  or, or TypeScript files so that people can get the completion and the tooling they want, you end up building plugins for, uh, code completion, plugins for,
[03:08:47]  um, syntax highlighting, code formatting, linting. This is, this is just like a stack full of, of, of tooling. Someone asked about rewriting this
[03:08:59]  in Rust. I wonder, I mean, some people are probably doing some stuff in Rust, but I, I, a lot of these, like the, a lot
[03:09:05]  of these things look like there's existing JavaScript APIs. I wonder how the, the story is on Rust interrupt. Uh, yeah, I think it would be a bit of
[03:09:15]  a challenge. Um, since like you said, most of it is JavaScript APIs, like TypeScript's JavaScript API. So you're going to be, you're not like
[03:09:24]  basically all the advantage you get from going to a, um, different language evaporates when you have to communicate back and forth between JavaScript a million times. So, okay
[03:09:35] , here I have something. I just want to show you the input template. Yeah. Yeah. For this. Okay. It's like this. Um, okay. So
[03:09:42]  it's like a div and this hopefully gives you an idea. So we have people, for people who aren't aware, Marco, um, this is an old convention.
[03:09:49]  Marco was around even like before reactor is being developed in parallel at the same time. So they didn't follow the same conventions. Input in Marco is the same as
[03:09:56]  props. Yeah. Um, just so you understand. So they called it input instead of props. Yeah. So, I mean, this is like it at its simplest,
[03:10:03]  but you can see like, there's actually two ways to define input in Marco. Cause with the tags API, there's an attributes tag. And so it's trying to
[03:10:10]  see like, if you have input defined and trying to figure out what the type of it is, because here by default, so down, down there, this, this simple
[03:10:19]  thing that's just a div that's showing some prop like name to pass down, this is the type script that we generate here. Yeah. Um, and so primarily
[03:10:28]  the only thing that can be auto completed here is this input dot name too. Right. And I'm not actually getting the auto completions of the hovering because I'm debug
[03:10:35] gered here so that you can see the, uh, thing, but, but yeah. So if I, I mean, if I, okay. I mean,
[03:10:42]  I'm just trying to, I'm trying to look at what I'm seeing here. Can we drop it into another file just so we can look at it with syntax highlighting
[03:10:49] ? Yeah. Yeah, yeah, exactly. So we've got this like function that's in a block because, so this is kind of unnecessary that we output this, but
[03:11:02]  technically every tag that you have creates its own like scope because you can enter like have new variables. Like in here might've been let X equals one or something like that.
[03:11:09]  So we're just like unconditionally outputting those scopes. And then, so we've got that div, which has that attribute in it. Like here's the
[03:11:17]  attribute. Um, and in this case, it should be just looking at the syntax here. I there's, there's actually two, like, because you can just put
[03:11:24]  curly braces wherever you want in JavaScript and it creates a block expression. We have a block where we have the function and then we have, we have two blocks adjacent to each
[03:11:34]  other. Yes. Okay. That's what's happening. I mean, it pretty much comes down to, I need a scope. I'm going to output a block
[03:11:40] . Uh, I need to interpolate some JavaScript that, you know, it ultimately, all I want here is for this to be completed. And if you look at this
[03:11:49] , it's like just text content types, it doesn't care that it's text content or anything like that. Um, and it's to a native tag. So it
[03:11:57]  doesn't need to like create a render body or anything like that. But this is like it at its simplest is we need to complete this expression and we need this context
[03:12:04]  and technically if there is a component, it would need to import that and do all sorts of other things. Cause those things are automated for you. And the, the reason
[03:12:11]  it's exporting a function because it's, it's exporting a component. Cause if you like import this component somewhere, it needs to know what the, like it needs to
[03:12:19]  map that to props somehow, or what, what, what's going on here? Why is it exporting default? Yes. That's so like, um, if you import
[03:12:27]  another tag or use another tag, it will actually write out an import for it in TypeScript. So you can get those types from that other thing and just, you
[03:12:35]  just call that function basically, and it's going to have its input types. Um, and so the way that you actually type the input is kind of special, but you
[03:12:43]  do export interface input and there's like a capital special input. So you can do like name string here and then it's going to know, well, in this case,
[03:12:51]  if it wasn't paused, it would error saying name two doesn't exist. But by default, um, it just assumes that all input is a record string, uh
[03:13:00] , any. So, because you know, that kind of is what it is until you type it. So, yeah. Okay. Okay. I, I mean, this
[03:13:09] , this is the simplest example and you're already kind of going into this very interesting zone of generated types. Yeah. It's nothing like the solid to, or sorry,
[03:13:20]  the Marco to solid. Cause like, I'm trying to build a runnable program there here. I'm just trying to output all the stuff in the Marco template
[03:13:28]  in a way that when I map it back, it will give you the right completions or the right renames and like all that stuff. So another thing, um,
[03:13:37]  that you'll see in this is there's a whole bunch of stuff you didn't write in your template. Um, obviously. And so the other thing is like when we
[03:13:44] 're mapping it back, we're also like, okay, oh, there's an error here. Like state isn't used or something like that. Okay. Well,
[03:13:51]  if there's an error in the part of the typescript that you didn't write, then we ignore it. So there's stuff like that as well. Like it filters
[03:13:58]  out things that are, um, irrelevant essentially. So there's, yeah, there's a bit, bit to it. Yeah. I mean, this, this is really
[03:14:05]  interesting cause how did you even come up like designing what the typescript should look like for this? Like, how did you figure this out? Do you literally go to
[03:14:14]  the top of the mountain with the textbook on advanced typescript? And then like, cause like there's even a generic getting slotted in here. Yeah. I, this
[03:14:22]  is, yeah. Yeah. It's, uh, I mean, like I said, I basically went from the parser. I'm like, this is all the
[03:14:30]  syntax that we have. What does that syntax mean if I turned it into typescript and how could I represent that using the least typescript possible? And I also don't
[03:14:40]  have the same constraint that it needs to be able to run. This language server protocol that we're using here, is it just VS code or do others use it or?
[03:14:49]  Yeah. So that's a good question. So this language server, like I said, is a adheres to the language server protocol. So technically any editor that works
[03:14:58]  with the language server protocol can use this. So there's, um, a number of editors that actually support that I'll pull up. Let's see, Marco. Um
[03:15:09] , uh, I'll be able to bring it over. It's interesting. Yeah. No. So like these editors all support, these editors all support language server in
[03:15:26]  some capacity, right? So who else am I seeing? Yeah. So in theory you could get, um, it's not perfect in all of these, like far and
[03:15:35]  away VS codes language server support is the best. Um, but in principle, you could use the same thing for a whole bunch of different tools. And so one of the
[03:15:46]  things that we want to do is actually take this language service and bring it into the browser. Right. Right. Um, and so, because it's just like this
[03:15:54]  standardized format, that's easier to do as well. Right. Okay. No, I mean that that's cool. I, I, I'm glad to see this.
[03:16:01]  Okay. So yeah, this is, this is what I wanted to see. I hope some people valued just, I wanted to show you that that TypeScript that he's
[03:16:07]  generating is not like TypeScript. It's like craziness. It gets messy. There's a whole bunch of as is and a whole bunch of, uh, yeah
[03:16:15] , crazy stuff to, to figure things out. And like the hoisting is something that we're still, um, trying to figure out exactly what it looks like that
[03:16:23]  the hoisting semantics for tag variables to automatically put it at the right point where TypeScript is happy with it. Um, but yeah, so pretty much is this
[03:16:32] , what's it? This language server thing, who made it first? Was this a VS code thing or did others do this before? Do you know? VS code
[03:16:39]  was the one that started this protocol, which is actually what made it so much faster than its predecessor really like Adam, because Adam had all of these editor plugins running in one
[03:16:51]  thread. Right. Like you could, it's the same as a browser. If you have all this stuff running in one thread, some plugin does something expensive. There's
[03:16:58]  a lot of expensive stuff that can happen, especially in TypeScript. Um, like while they're figuring stuff out, if something expensive happens and your editor freezes,
[03:17:06]  that's bad. Right. And so VS code kind of looked at this and was like, okay, we need all this stuff to run off thread. Let's make this
[03:17:13]  protocol for communicating between the threads. And then basically they made a stack around that protocol and editors can also, and it's, it's cool that they've actually consolidated
[03:17:23]  it so much, but what's crazy to me still going through this process is there's so many different tools. They all have their own needs and things like you start from
[03:17:31]  that parsing we showed earlier and you build your tree. And then suddenly you're in this zone where like every tool wants something different out of you. Cause we shot,
[03:17:39]  we showed that crazy TypeScript you had to generate. We talked about how you pulled together the CSS. Um, you were about to show Yeah. And you were about
[03:17:48]  to show actually how syntax highlighting works. Yeah. So this is like entirely separate. So syntax highlighting, there's multiple different ways you can define the syntax highlighting grammar, but
[03:17:58]  the main one that VS code recommends is what's called the text made grammar, which comes or started from the text made editor for Mac OS. And then basically, uh,
[03:18:07]  I think sublime picked it up, but then they've dropped it. And some other tools have picked up. Adam used it. VS code uses it. So basically
[03:18:14]  text made grammars are, um, really, really finicky and hard to, to get right. But essentially the core of it is you've got this list. It
[03:18:25] 's just a JSON file. Like, are you telling me this whole thing? Like you just, how big is this JSON file? Just, can you tell me how many
[03:18:31]  lines it is? It's just a thousand lines, I guess. Okay. Not too bad. It's a thousand lines of pretty ridiculous regexes. Um,
[03:18:38]  like where's the most ridiculous regex? Yeah. Right there. Um, Do anyone here enjoy regex? Like making them like, and this is, uh
[03:18:46] , this is Anigurima regexes. So it's like Ruby style regexes. It's not JavaScript regexes, which is a whole nother
[03:18:52]  thing. And it comes back to the fact that it was text maintenance. Yeah. So, so how, how do you even approach this? Like, how do the rules
[03:18:58]  apply? Like, what is this? Yeah. So it's not too complicated and it's somewhat limiting, which is why you'll see even in languages like TypeScript
[03:19:07] , there'll be things you can write that don't syntax highlight the way you hoped they did. Um, although they tried their best. Um, essentially you have this list
[03:19:16]  of patterns and it's going to go through and hit either a begin or a match. So like here you can see, we're trying to match that style block. So
[03:19:25]  like start of a line style. Um, maybe it has an extension. Um, I guess this one's specifically trying to match the CSS style block. Cause you can have
[03:19:32]  a less style block or whatever. So it's like, okay, we match that and it's got a, um, open brace. And we say like, basically
[03:19:40]  what these think of these like CSS classes that you can apply. So it's like support type built-in marker. And you can see it highlights blue. That's with
[03:19:49]  the editor plugin I have. It's like saying, this is what it would highlight in, in DS code. So this is saying capture one, which is the style.
[03:19:57]  So if I have the style tag, it is going to highlight this blue. Um, and then there's like a punctuation. So this was the third one's
[03:20:03]  the punctuation. It's going to highlight black. Um, and then the end capture. But you're saying this, this is a plugin you have that shows you the
[03:20:10]  highlighting. Yeah. And also, and also the highlights, the regex cause doing this in actual JSON without the regex being highlighted, I think would drive you
[03:20:18]  insane. Um, it's so bad, but anyways, so, you know, here, this is pretty simple. Essentially, we're saying start the style block. Do
[03:20:27]  the patterns just apply top down? Is that just, it's like the first pattern that runs, runs these top to bottom. Um, so it'll run the first
[03:20:35] , first pattern that matches. That's where we're at. And so here, let's say we match the style. Um, so begin, and then, so there
[03:20:42] 's this nested patterns, so you can have nested patterns here. And I'm saying include, and I'm referencing an external thing. So I'm saying include CSS
[03:20:50]  here. So essentially I'm saying start the, the CSS, um, grammar is going to look the same as this. It's going to have its own rules.
[03:20:58]  It's going to have its own pattern. I'm basically just saying, copy those CSS patterns into here and end it when I match the closing bracket. So, you know
[03:21:06] , in this case we're matching, I'll just show it real quick. That's style, um, body, you know, whatever, you know, this is
[03:21:14]  highlighted as CSS. Yeah. Right. And so this one is actually much more straightforward besides that the regexes get kind of gnarly. Um, because I actually
[03:21:23]  get to say like, okay, this is the part Marco controls. This is where the Marco ends CSS in there, just whatever CSS. So this is much, um
[03:21:32] , easier. Although like, you know, I have to basically re-implement that style tag in multiple ways. Yeah. There's less. Like less. Cause you
[03:21:40]  can do in Marco like style.less. Um, and so this of course refers to, uh, um, you know, basically it's the same thing repeated, except
[03:21:49]  it's got source.css.less, which is the comment. Right. And then we, we got TypeScript blocks. Yeah. So static block, you
[03:21:56]  can see basically it includes source.ts and says that it ends on a new line, um, kind of, and again, like begin capture. So it's saying if
[03:22:04]  the static keyword is going to highlight this in my editor, it's going to highlight this pink. Um, and then we, this is the big one for Marco. It
[03:22:13] 's like begin concise mode. So we have these like top level things and then it's like begin. Marco is insane. Most, most like the, I, I haven
[03:22:23] 't seen this mixture. I, I don't, I guess the thing is because pug or Jade, if anyone's used that is all concise mode, right? It
[03:22:29] 's all white space matters. Marco has the ability to write like half the template as HTML and half the template as like white space matters and just interchange them for the most part
[03:22:39] , which is the craziest, like, yeah. Like you can go div span, um, text here and then go div hi. And that's fine. Um,
[03:22:51]  basically once you're in HTML land, you're in HTML land, right? But outside of HTML land, it's concise. I will say that the syntax highlighting doesn't
[03:23:01]  seem to be like as much like you were mentioning earlier with the TS and the generation stuff and the completions. It's okay if it takes like a couple, some milliseconds
[03:23:08]  to generate this stuff and it's, and it's pretty fast and who cares, but the, the syntax highlight happens practically immediately. Is there any performance considerations when creating
[03:23:18]  all these really crazy regexs? Yeah. I mean, you can make it slow, but generally they use a fast regex engine and they like, it
[03:23:25] 's a pretty limiting, um, like you can't represent all languages using this kind of grammar. Uh, and like backtracking is hard and multi-line things is
[03:23:36]  hard. Like they make you look at things at one line. So it's basically just like a really restricted, um, set of regexes you can run in
[03:23:43]  a certain order. And because of those restrictions, it always ends up being fast. This is, this is the relevant question. I asked that when I joined the team,
[03:23:50]  this is, this was like my, my question too. I was like, what's up guys? Uh, by do everything you mean like the concise mode and the
[03:23:58] , and all that stuff. I mean, you know, concise mode, we keep thinking about it. Like I don't write in concise mode. I think it looks nice
[03:24:07] . I don't, I don't write in concise mode, but I mean, you got, you got to win the Twitter battles on who writes the least code. You
[03:24:12]  can't let felt. Yeah. But so it's actually been pretty easy for us to maintain concise mode because we're saying like, this is HTML and HTML. Like
[03:24:24]  since we're starting from HTML, HTML is a very like syntax duplication language. You can just delete stuff and it kind of just works and concise mode is just like removing
[03:24:33]  the ambiguous part of the HTML syntax. So unless we add additional things that wouldn't work in HTML, then it's fairly easy for us to just be like, this is
[03:24:44]  concise mode. This is not. And even from the level of the parser, it, it tells you whether or not it parsed a concise mode tag, but
[03:24:51]  you just get like on tag name, on attribute. Like you don't actually, when you're building up the CST and stuff like that, you don't usually care
[03:24:58]  whether or not it's concise mode. It's usually handled at an earlier point. All right. This is, but yeah. So generally you, you enter concise mode and
[03:25:05]  then, uh, you know, there's all these different rules for the different states that it can be in and what it can match. Okay. I mean, this just
[03:25:12]  seems like a lot of tedious work. Is that the pattern here? It's not necessarily hard, just really tedious. This one feels like you can get messed up though
[03:25:19] . Cause you go like, Oh, do I have to change the order of the patterns? And like, did I not realize that this nested grammar messes with something
[03:25:25]  else? Exactly. Cause sometimes nested grammars can do more than you thought they were going to do. And so you have to exit them earlier and it gets kind of
[03:25:32]  messy there. But like, yeah, here's the content concise mode. This is where it kind of starts. It's like, we'll match a script lit, which
[03:25:37]  is the dollar space. We'll match JavaScript comments, see data, like all this stuff, or we'll match an HTML tag, um, which goes down another,
[03:25:43]  um, thing. And then we're matching. Does this get this, like, uh, does this get to a point where it like can point back up? Like,
[03:25:51]  cause like these things get recursive. You hit like a, you hit like a HTML tag and now you you're jumping to a different part of the grammar, right?
[03:25:59]  Like, Yeah. So basically like if we, if we hit like tag HTML, let's find, uh, okay. Right. If we hit tag HTML, so
[03:26:09]  this is the implementation of tag HTML. So there's different types of HTML. So I just saw it. It's the include directive or whatever. It's essentially, yeah
[03:26:17] . Yeah. Yeah. So like here I'm saying in tag HTML, when we match like this part, we can say this is open tag content so that we can consistently
[03:26:26]  highlight the open tag content, even though we're going to reference it in multiple different places, um, and stuff like that. Um, but yeah, this is,
[03:26:34]  it just ends up being kind of tedious, especially when you have a language as a dynamic dynamic as this. Um, so yeah. Okay. Yeah. I will say
[03:26:46]  on the TypeScript side of things, it's like, it's a bit more technically challenging because you're working with this tool that makes so many assumptions about the TypeScript
[03:26:56]  that it's working on. Um, and it doesn't care at all about Vue or Svelte or Marco or anything like that. Right. It's totally
[03:27:04]  outside of it. So it's very easy to like, do something that would TypeScript might want to show you an error that doesn't make sense or, um, something
[03:27:14]  like that. Or, you know, like I said, their APIs aren't really designed to be like, here's an input that's source mapped back. You have to
[03:27:22]  do all that yourself. They add a new feature. You have to go in. I, I mean, who is the genius? Like, honestly, the, the
[03:27:28] , the person who first realized they could do this end to end in Vue, I, I, they, they probably deserve something. Um, like, yeah,
[03:27:35]  I agree. And there's two actually projects in Vue. Like there's, uh, what Volar, Volar and Vitor or Vitor. I don't
[03:27:44]  know how to say it, but anyways, yeah, there's two in Vue and, uh, yeah, they're very interesting code bases and very much a product of
[03:27:54]  like, how can we hack this to make it as nice of an editing experience as possible? Like some other tools, but, uh, yeah. So someone asked,
[03:28:03]  uh, uh, ask a good question. They're asking like, for, for, I guess, HTML is very forgiving. Um, I guess we have, we have
[03:28:11]  to be a little bit stricter here. Yeah. Yeah. So we do, um, Marco does not allow like a missing closing tag. It doesn't allow those
[03:28:21]  kinds of things that you would probably think of as errors. So you can't copy paste what usually a, like, um, HTML validator. If it says that
[03:28:30]  it's invalid, probably Marco is also going to say that it's invalid, like in your editor or when it's compiling. Right. Okay. Yeah. That makes
[03:28:38]  sense. So you don't make those kinds of mistakes and that's, you know, yeah, we want to be like HTML, but we also don't really like the
[03:28:43]  fact that you can write invalidation and not catch it until you execute it in the, like, we're not that extreme. Right. So try and strike the balance and
[03:28:51]  it's not a clear super set of HTML. It doesn't follow all the exact rules, but we think it's a good balance. That makes sense. And we
[03:28:58] , okay. We, we talked about syntax highlighting. We've talked about TypeScript. Um, we talked about the language server. Um, I get, what do we
[03:29:06]  got here? Prettier. How do you do code formatting? Is that part of this? Yeah. Um, so Prettier is kind of an interesting one. I think
[03:29:15]  it's a really cool, uh, project. Let me pull up, um, Marco Prettier. So yeah, man, every time you go into this stuff,
[03:29:25]  I just think like, how much did you have to learn to just like get started? You're like, I just, I said, I, I started with JSX
[03:29:32] . I wanted to add punning. I wanted the ability to pass something in without repeating it. I don't want to go text equals text. Yeah. You just have
[03:29:38]  to learn, um, all of TypeScript's internals and, uh, how VS code works and, uh, you know, the legacy, uh, grammars
[03:29:46]  for text mate. And, um, you've got to go and like Prettier, you've got to know their APIs. I mean, it's like anything, like
[03:29:53]  if you're going to plug into a system, you've got to basically know the system, how to do it. Like if you're writing a beat plugin, you got
[03:29:58]  to know how beat works. Um, if you're plugging in the battle, you got to know how it works, all these tools, but there is a lot, a
[03:30:03]  lot of tools that you have to integrate with. So the Marco Prettier, um, you know, isn't that crazy? This is, uh, Prettier's
[03:30:12]  config options. So I'm going to ignore that cause that's not, this is basically like how Prettier knows what a Marco language is, has like a specific ID and
[03:30:21]  some information about it. Like, Hey, it uses this grammar if you're going to highlight it and stuff. Um, but generally the Prettier one is just, this
[03:30:30]  actually uses our compiler currently. So it gets back the AST and not the CST. So this is a different thing. We have a compiler. We haven't
[03:30:36]  even talked about the compiler really. We're just talking about like these editor tooling things, but, um, basically it uses our AST. And so, uh, Pret
[03:30:47] tier has this thing called printers. And so you implement a printer for like any sort of type of AST Marco registers a Marco AST type and it calls print, um
[03:30:58] , and embed on every node. So embedded actually calls first. So this is walking the whole AST and it calls embed first. And basically in here you can defer
[03:31:10]  to other things. So we say like, if we have a tag variable, we'll defer to whatever, like TS or JS with this code. Right. And then we
[03:31:21]  strip out the bar stuff. So this is if you have like, you know, let slash X, we're going to pass bar X equals underscore to the TypeScript
[03:31:31]  printer. So it's the same kind of like mapping back and forth stuff for embedded things there. So this is all the embedded stuff like tag variables, tag parameters, how
[03:31:37]  you map it back. Um, if you have inline scripts, inline styles, that's all the mapping back. But then the other piece and the different piece
[03:31:44]  here is this print side. So you basically have to, um, map our AST. So these are all the different types of nodes in our AST. So like
[03:31:54]  starts with the file, then the program. Um, and then there's these maybe familiar ish looking names. So you've got like Marco tags, the C data
[03:32:02] . Um, you've got like import script, like all those kinds of things. Um, and so what's, what Prettier wants you to do is basically return arrays
[03:32:13]  of these things they call doc objects. And so these are really interesting. And I think the way they've done is, is quite neat, but, um, so essentially
[03:32:22]  you can return an array that has static stuff in it. So that is just going to be in the output code. Right. Um, but you can also include these
[03:32:31] , uh, let me try and find one. I usually abstract it. So this one's interesting. So these B see this B there's all these helpers from Pret
[03:32:42] tier. Okay. So if I look, if I look for B, yeah, you can put stuff in that array. That's like in this case, if this,
[03:32:49]  if any of these break, they break together or like it breaks as a one piece. This needs to be be together, but it's not related to the rest.
[03:32:58]  So this is like a builder API, like using the builder pattern where, yeah. And, and, and you're building the, the S like you get the symbols and
[03:33:06]  and then you're building like the spacing and the, exactly. Yeah. Yeah. So then here, like you've got helpers like this one join. So it's
[03:33:13]  saying take everything in here. And if we need to break it, make sure it's broken by hard lines. That's like an actual new line, but you could do
[03:33:19]  the same thing, like comma, hard line, if you wanted it to be like an array that you're printing or something like that. Um, and so, I
[03:33:25]  mean, that's the gist. You have like a whole bunch of these, uh, helpers and you ultimately return this like giant nested array. I'm,
[03:33:32]  what I'm trying to get here is the, the, the emits, like the cases are per grammar piece, but the, the, the final decision of how it
[03:33:41]  fits together involves multiple. Are you introspecting siblings or how are you, how is this fitting? Yeah. So there is some stuff and I mostly have that like
[03:33:49]  in these like utilities that are going to like dig into stuff to look at its children to see if maybe something special needs to happen. Like if I should wrap it in parentheses
[03:33:58]  or not. So there is some introspection there, but generally the way it works is you're writing out stuff and you're just saying, Hey prettier, if you
[03:34:07]  need to break at this point, it's okay. Just break using a hard line, break using a comma, break using whatever. Or if you're going to break
[03:34:14]  this group of things, make sure they break together. And then there's also things like B and they have good documentation around this as well. But so like this one is
[03:34:23]  saying, um, if this is going to break, or if this doesn't break, then use this. And maybe I had it backwards. I think this might be,
[03:34:32]  if it breaks, use this, if it doesn't break, use this. So there's things like that. Like basically if we're going to put it on a new
[03:34:40]  line or for it in something that's going to be put on a new line, then I also want this to break. Yeah. So then prettier basically goes through this
[03:34:47]  array and tries to figure out the fewest amount of breaks it can make while maintaining the like column width that you want. Um, so, and that's how it's
[03:34:57]  able to, you know, output basically the same program, no matter what you throw at it. People, people, people asking chat, do you enjoy Prettier's
[03:35:07]  API? It's not bad. It's definitely, uh, I guess the thing is you, you've got like a, like when you, you look at all the
[03:35:14]  tools, like you've got a whole spectrum here. Prettier's like actually on the nicer side compared to some of the other stuff you have to deal with. Yes
[03:35:20] . Yeah. I like Prettier. I think it's a good way, um, to do formatting for sure. Otherwise it's like, we actually had a Marco pretty
[03:35:29]  print CLI that we did manually. And there's just always cases where it didn't look right. And I think this model that they have of like, not necessarily trying
[03:35:38]  to build up the perfect string as you go, but like building up where all these potential breakpoints are and then doing that as a second step makes things a lot easier
[03:35:46] . Um, surprisingly. Yeah. Well, I mean, it seems to work and I mean, these are all things that people expect. Like you need syntax highlighting, you
[03:35:54]  need completions, you need code formatting, um, you need TypeScript, um, if anything's been clear in the last couple of years. So this all fits into
[03:36:02]  the language server. Um, there's a couple of things I think are still in the works like linting, like, uh, which, yeah. So we want
[03:36:09]  to do, uh, an ES lint thing. So you do get like some level of not quite linting, but you know, Marco will surface some errors
[03:36:18]  like directly from its compiler. If you nest things weird, or if things can't be inspected, even like Babel will give you some level of linting.
[03:36:26]  Like, oh, you used a const twice or something like that. Right. Or you have a conflicting variable names and like, it'll pick up those kinds of small things
[03:36:35] . But yeah, generally we want to take the same approach, um, as we've done with like TypeScript and everything else and output a TypeScript or JavaScript program
[03:36:44]  that we, some like basically pass to ES lint and map it all back and do the same thing all over. Right. It's the same, that same sort of
[03:36:51]  pattern. Yeah. Yeah. Huh. And then like, just put in perspective, we started, we had a parser that did our Marco tags. Then we feed this
[03:36:58] , we didn't talk about this. We feed this into actually like Babel. So we actually do like a JavaScript parser thing to handle anything you want, right?
[03:37:07]  Technically on the language server side, we were not doing that because Babel's parser is a lot slower than our parser. Okay. So on the language
[03:37:14]  server side, we built up the CST and basically, yeah, I mean, that's the thing we haven't even talked about because all of this is all for the
[03:37:19]  tooling specifically. Mark, you also, you know, obviously building a framework language here. So you're also actually building the framework. So you actually have the actual transform that
[03:37:29]  makes the actual running code. So this is a whole set of things that are separate from the actual frameworks, own compilation, own building stuff. You get to basically reuse
[03:37:38]  the parser. Okay. Yeah. So am I forgetting something? Is there anything else that's important when you have to serve your own like bundler, like VE
[03:37:47] AT? How does VEAT know what to do with dot Marco files? Yeah. So let me pull up Marco VEAT. So this is, I don't
[03:37:55]  know how much of a tangent we want to get. I don't, but I'm just wondering, it doesn't have to be too specific. I just, I
[03:38:01] 'm just curious. VEAT is probably the trickiest plugin to do. Yeah. So then we don't have to do VEAT. I just was curious.
[03:38:08]  You do all the stuff. Bundlers is like another thing. Like there's so many touch points when you think about it. Yeah. So let me, let's look
[03:38:19]  at the VEAT one real quick. So basically you've got the Marco VEAT plugin, right? Yeah. So most plugins, let's get to the actual
[03:38:27]  API. You usually return some like object that has a whole bunch of things that you can hook into. This is, it's not quite this way in web pack,
[03:38:34]  but in rollup and VEAT, this is the way it is. So they give you all these like hooks to say when the build's about to start this,
[03:38:40]  when we're resolving a file, this, when we're trying to load file this, like generally that's how it kind of, um, works. And so we say
[03:38:48]  when we're loading a Marco file, okay, well actually this is getting into, um, maybe a little bit much. So when we're trying to transform a Marco file
[03:38:56] , so that's like, we've got the Marco source we've loaded from disk. We want to turn it into JavaScript here. We're actually using the Marco compiler
[03:39:04] , um, that actually gives back a source map and the output code, right? You have to go and do something like this in every single bundler, like web pack
[03:39:13] , do this rollup, do this VEAT. Okay. Yeah. And for a lot of things, this is like the simple piece. Like even for solid,
[03:39:19]  you'll have to go in the, you know, or I mean, you can leverage Babel basically, as long as there's a Babel plugin for whatever you
[03:39:25] 're working with, you can leverage Babel and there's going to be a Babel plugin for whatever, um, bundler that does essentially this. I guess that's
[03:39:32]  fair. Solid's JSX is not normal JSX. So in this aspect, solid's actually managed to skip every single thing we've talked about to this point.
[03:39:41]  No language, custom language server, no, uh, pretty custom prettier or syntax highlighting or, you know, uh, TypeScript, uh, we didn't have to do
[03:39:50]  all that, but we did have to come in here and make a VEAT plugin. So I guess that's not too much, you know? Yeah. It's
[03:39:56]  like, I mean, that's definitely a trade-off and I mean, hopefully, you know, we have all this tooling, um, and you're not even
[03:40:05]  thinking about it. Like how many developers are actually going in and writing this kind of tooling, right? Like if it's there, you're happy more or less, but
[03:40:11]  it is ridiculous how much, um, goes into JavaScript tooling. Like, yeah. It's why I wanted to shine a light on this because I mean, people get this
[03:40:19]  idea that it's a lot of work, but like, like looking at the showcase you showed earlier of the capabilities, this incredible power that you have going, but then
[03:40:29]  you kind of get into this zone of actually building it. And it's like, we didn't even talk about what it takes to actually build the language and the framework and
[03:40:36]  the compiler, you know, like this is, that's, that's a huge effort. And then it's like, here's all the other stuff that you have to
[03:40:41]  be building as well. So. Right. Yeah. Um, trying to see if I can find something quick, but one thing I will point out here is Marco has
[03:40:52]  had a unique challenge, um, in every single bundler integration that we do. And the reason for that is if you think about Astro or quick or any of these
[03:41:04]  like MPA based frameworks, they're tied to a bundler. They're coupled to a bundler, right? Like they're both coupled to beat. Um, really
[03:41:10]  is Astro or sorry, is quick couple to beat? Is that true? I believe so. I mean, they have their optimizer that handles a lot of the bund
[03:41:17] lers. I'm sure they could abstract it, but like either way, they're going to have to have a plugin. And so the tricky thing with, um,
[03:41:22]  this is there's two tricky things you'll see when you're building these kinds of, um, uh, bundler plugins. One is that there's always this concept of
[03:41:32]  like virtual files. Like if you have some CSS and so your Svelte, your view, your Marco, anything that allows you to put CSS in with the template
[03:41:41] . Well, you don't actually want like, basically what you want to do is say, Hey, Viet or Hey, Webpack or Hey, whatever, here's
[03:41:48]  the CSS that I had. And so what you do is you create like a virtual CSS file. So that's one thing you're going to have to figure out right,
[03:41:53]  right away. And there is a way to do that in every bundler, but it's different in every bundler. So that's lovely. Um, but another
[03:42:00]  thing here is like I said, Marco is an MPA framework that has automated islands and it works in Webpack, Rollup, Viet and Lasso. Right.
[03:42:11]  And so how do we tell all of those bundlers? Like, here's all of these entry points that, uh, that you need to actually load. And so part
[03:42:21]  of that is in our compiler. We like scan the Marco templates and figure out what needs to be sent to the browser. But even that requires like another virtual file.
[03:42:27]  So there's a whole bunch of stuff in here to say like, is this the top level template? Um, should we inject the assets here? Like we take care of
[03:42:35]  so much for you in every single one of our bundler plugins that, you know, basically the experience writing Marco is whatever bundler plugin you're using, import a Marco
[03:42:45]  template on the server. It gets bundled. The assets get put in the place where you expect them to be. And that's it. Right. Like it's actually
[03:42:53]  a very similar experience to something like Astro, but yeah, you know, it does make all of these bundler plugins, uh, a little bit more of a
[03:43:02]  challenge. I mean, I talked to Fred a bunch and he said like, he, you know, there's a lot of times where they had to like work with V
[03:43:08] iet is the nicest way to put it, to make sure that they could do the bundling. And even, even when I talk to Michiko, same thing. I
[03:43:14]  think everyone on that side has a real challenge on the bundling side. Um, and it takes a lot of very specific effort to make it work. I think it
[03:43:23] 's really cool. The approach Marco has done to abstract that into a cross bond. Yeah. Yeah. Since we've done this so many times, we've put as much
[03:43:30]  into our compiler as possible. Um, so like one of the things you'll see here is basically there's like, we're compiling, if we're in a browser
[03:43:40]  entry file, we'll use this like hydrate config that basically says, Hey, Marco, get me everything that's needed to hydrate this, which is not like
[03:43:47]  that dissimilar from, um, like Svelte or something like that. They'll say like, Hey, give me a hydrate compile template. But this is
[03:43:53]  not that this is saying, this is the top level template. Get me everything, like the islands that I would need to hydrate this page. Right? So we have
[03:44:03]  that actually built into our compiler. And in our compiler as well, we have this like thing that'll automatically allow us to resolve the virtual dependencies and stuff like that.
[03:44:10]  Cause that's a common thing you need to do. So we've kind of, you know, thought around that kind of stuff, but yeah, they still end up being
[03:44:17]  pretty large, um, little plugins. Like there's, uh, 600 lines here, but then, so with VEAT, it's not just a, uh,
[03:44:25]  like VEAT is four bundlers in one is what I like to say. So VEAT also uses ES build. So I've got a, an ES build
[03:44:33]  plugin just over here. Um, it doesn't do the like top level component stuff. Cause that's probably not where you're, um, like your top level components
[03:44:40]  probably aren't going to be in your node modules, but yeah, so there's another plugin here and then there's this whole thing I won't go into, but like
[03:44:47]  we pretend that the Marco files are like HTML files so that it, the experience is a lot like if you had, um, you know, basically you just import a Marco
[03:44:57]  file or sorry, you SSR load module, your app and any Marco file automatically says, Hey, I'm an HTML file. Give me the assets for me. Um
[03:45:05] , so you just don't have to wire up any of that sort of stuff, which is nice. Um, anyway, so there's that one thing I could show
[03:45:12]  really quick. We were talking about the, um, this, this is from some random slides. Um, I remember, but, but yeah, so like we've talked
[03:45:23]  about this, but then our compiler has a pipeline as well. Yeah. This is, this is the generate the actual code you use. Everything we've been talking about
[03:45:31]  now is just to make the tooling work, but the actual code, um, the actual compiler looks like this. And I think it's really cool. Marco has these stages
[03:45:38] , right? Like that, that are predefined. Yeah. So like we have basically parse, we looked at part of parse, but we didn't look at parsing
[03:45:47]  the JavaScript. So in our AST, the way that it works is basically as we're getting those events from the HTML JS parser, we're also saying, Hey
[03:45:55]  Babel, parse this bit of script. Um, and so we build up a AST that's actually got parse JavaScript and parse Marco. And then after that stage
[03:46:03]  of all the parsing being complete, then we basically walk the tree and we go through this like migrate stage. So any Marco component can actually hook into our compiler. Like
[03:46:12]  our compiler actually has a public API. You can hook into it and run migrations at compile time. So like if you rename an attribute or something like that, you can
[03:46:20]  actually write a compile time migration for that, for that. And what will happen is every time that component is loaded, that migration will run behind the scenes and give you
[03:46:28]  a warning saying, Hey, you're using some migrated feature. Did you want to write that back out to disk? By default, it'll just happen behind the scenes for
[03:46:34]  you. So it's like, uh, basically automated migrations as you're refactoring your API. And then we also have like our general compiler hooks. So this
[03:46:44]  is like, if you want to turn Marco code into different Marco code that has different meaning, um, you can hook into there and then finally, that's, yeah
[03:46:51] , that's almost like a bit of a preprocessor. Like if someone wanted to like mess with the, like, yeah, like if you wanted to like embed mark
[03:46:58] down in a Marco file, you could write a transform that takes like the text content and turn it into something else that Marco understands. Right. Um, so you could do
[03:47:05]  that. And then finally we take the final Marco AST, turn it into a JavaScript AST and write it to disk. So that's like the general, um,
[03:47:15]  flow of it. And so most of the tooling, we don't want to go through all of this stuff, right. Cause we want it to be like as fast
[03:47:22]  as possible. And usually the tooling is either we're like stripping out stuff and deferring to another tool or just working on the Marco stuff. Um, and so that
[03:47:32] 's why we have this, like, we're kind of parsing it into a CST that doesn't completely parse everything else. Anyways, it's like, yeah,
[03:47:40]  no, I mean, it's, it's, it's an incredible thing. Um, yeah, this is pretty cool. I think, I think we're ne
[03:47:46] aring the end here of, of, of all this technical stuff. I think we've gone over all the key topics. If anyone else has some topic, uh, questions
[03:47:54]  for Dylan, they should shoot them over. Cause, uh, we, we, we, we got him here for now, but then after that, we're going to
[03:48:00]  jump into this week in JavaScript. So, um, just, yeah, I'll give you guys a couple seconds. This has been a lot. Um, and,
[03:48:08]  and admittedly I wanted people to respect how much a lot is, um, because like the thing is, if you put the work in and you get there, you,
[03:48:17]  you can achieve incredible things, which we've shown both from an ergonomics and technical standpoint, but then like you're, you're, you're in, in it,
[03:48:26]  you know, this is, this is, this is the maintenance burden, but like it's the cost of DX, right? Everyone wants an amazing developer experience and it
[03:48:35]  takes more code or effort. Uh, you know? Yeah. And I would say like the, like the fundamental idea of Marco is deliver good DX and like the performance
[03:48:48]  that we required essentially at eBay. Right. So DX is always at the front of our mind, even if it involves making all these tools and whatever, as long as we
[03:48:56]  can also achieve our performance goals. And so that's why, um, you know, so much has been put into this project. Yeah. So someone's asking, uh
[03:49:04] , what's, how's Marco native coming along? Yeah. So we don't have a Marco native just because, uh, we haven't, like, we don
[03:49:10] 't have any ask for that really at eBay or even an open source. Like we're really optimizing web applications. Like that's a lot of what Marco is designed for,
[03:49:18]  but there's no reason you couldn't make something that use Marco's parser or even Marco's AST and converted it into something that would make sense for, um,
[03:49:26]  native. Like we're, we've got a pretty pluggable API, just not something we've, um, prioritized in any way. Yeah. You're
[03:49:34]  like, you could even take Marco's parser and say embed PHP in there or embed like rust in there or whatever. Right. If you really wanted to, it wouldn
[03:49:44] 't be that hard, but now you're building. Um, yeah, this is the question made me laugh. Cause like Marco has been around since 2014 and has had people
[03:49:54]  working on it for years and years. I don't even think someone could estimate this. like, yeah, I don't know. Uh, it's taken. Yeah
[03:50:03] . Yeah. It's taken a while. Yeah. No, this is hilarious. Someone's asking. Yeah. Yeah. When, when will solid get its own language?
[03:50:11]  I, I, I, I wrote an article about reactive script cause I wanted to like challenge people to think about where they could take the language, like what they could do
[03:50:20]  with it. And, um, the truth of the matter was that it was also me kind of copping out and going, okay, I'm just going to dump
[03:50:27]  out all my thoughts. And if someone wants to go in, cause while I think it'd be really cool to design a language and go through this process again, as I
[03:50:33]  did when I was working with the Marco team on it, I don't like, I don't want to take on the maintenance burden at this point of doing all the tooling
[03:50:41]  that Dylan just showed you. Um, it's, it's, it's a lot of work. And once you're there, you're there, like you're,
[03:50:48]  you're in it, you know, and been lucky solid kind of came out at a time where there was all the stuff was already built for me in a lot of
[03:50:55]  places and I could kind of just mix and match and there was actually good choices. It's a very different story from Marco where they had the pioneer in a time when none
[03:51:03]  of, none of this stuff existed and then build stuff themselves. As you mentioned, Marco already had a pretty print. Like, like, and every tool we talked about didn
[03:51:11] 't exist when Marco, I mean, besides the text make grammars. Marco made its own bundler at one point because like you think, you think web pack,
[03:51:19]  even before web pack, do you think web pack was going to do the bundling that Marco does? No, I don't know. Like, so it's like web
[03:51:23]  pack one, like, yeah, like the fact that we got it to work with web pack at all, it's kind of amazing, but you know, like, so
[03:51:30]  this, this is, this is a huge, huge, huge effort. I think there's always this like thing I, I, from on my side on solid and priorities
[03:51:40] , I got technical things to solve first. I enjoy when people make like, and some people have made single file component stuff. They've made it like on top of
[03:51:48]  JSX. I, what Dylan showed us at the beginning of the stream. If you guys like that, I mean, let's talk about it. Cause I think Marco
[03:51:55]  has one of the best single file component, uh, um, formats. So I think we could do something with that. I think Marco already has all the tooling. Uh
[03:52:05] , like with slight tweaks to this tooling, like I said, we need a new extension. Um, JSX2 isn't going to cut it properly, but you
[03:52:11]  know, um, so we could like our parser is kind of set up to be able to target other things. We could have the formatter be made generic. Like
[03:52:19]  it wouldn't actually be that much work to make a lot of this, um, tooling more generic to support things like what I showed you with, uh, um, to
[03:52:29]  compiling it to solid. And so, yes, it's a lot of work, but like once it's there, it's there and there are like legitimate benefits
[03:52:38]  to it. Um, but we, like I said, in my view, we don't see enough innovation in this area probably because of how hard it is, but that
[03:52:46]  doesn't mean that there isn't value in that, uh, And so it was like, it's a Marco core team small because they have to be employed at eBay
[03:52:55] . And the answer to that is no, I'm going to just straight up go there. They don't have to be employed with eBay at all. Um, and Marco
[03:53:00]  community is kind of growing again. And that I think the problem, uh, I think, I just think that there was a time period where, uh, there's a
[03:53:08]  combination of people just not being interested in it. And I showed this on the underappreciated Marco thing. Like you don't understand how hard in 2016 it was
[03:53:16]  to show people value. Everyone now is like, Oh yeah, zero KB, JavaScript, partial hydration, out of order streaming. They're like, these are all cool
[03:53:22]  things. Marco was like trying to say that in like 2015, 16, and people are just like, what, where's the client side router? Like it was like,
[03:53:30]  like, like, I showed it before, like tweets and the thought leaders being like, Oh yeah, SSR isn't necessary. Like, like, like literally, I
[03:53:39]  mean, I hate to bring it up again, but that, that Michael Jackson tweet where like from 2016 perfectly preserved, where it's like, Oh, SSR isn
[03:53:48] 't necessary. And then Dylan's sitting there, like arguing back. He's like, Oh, you could do this. And it does this and this, like people were
[03:53:56]  not there at all. And the, at the time, I guess, uh, the founder Patrick moved on to, uh, to, uh, Amazon, was it?
[03:54:07]  Um, and, and there was just kind of a bit of a lull where basically eBay had, it came out at eBay. So it was eBay people and employees
[03:54:16]  and it was kind of expectation and it was supporting eBay. And then suddenly you're, you're in a zone where you have two developers supporting all of eBay, that this
[03:54:25]  is the reality and migrating to the newest version and doing all this. And basically that no time was spent on outreach or, uh, kind of like doing the, the
[03:54:35]  socials and the doing, doing the conference talks or like you guys did a few, but you know what I mean? Like you just, yeah, I mean, it
[03:54:42] 's a, it was a big lift, like you said, because there wasn't a lot of people who are actually interested in this technology, at least right now is
[03:54:48]  that there's competitors to us. Like for a long time there really wasn't, but now that there's competitors, there's more people trying to be like, Whoa,
[03:54:55]  yeah, look, this is just objectively better. Like, look, this is 10 KB when it could have been 200 KB or whatever, right? Like it's
[03:55:01] , it's obvious. And we were making those kinds of points before and even, yeah. So it's, it's tricky. Yeah. It's, it's
[03:55:08]  tricky. And as I said, even, even when I joined on the team and talked to Dylan and Michael the first time, I just, I didn't, didn't
[03:55:15]  believe this could exist. I know that sounds weird. I always look into technology. I always, that's how solid got to be where it was. I looked at all
[03:55:22]  the client side frameworks, analyzed, understood, matched it with my own experience of building applications, you know, did all that. And then I was talking to them and I
[03:55:31]  was just like, what, holy, like, how does this possibly exist? And I not know about it. And like, that's been the mission ever since.
[03:55:39]  And it just happened that around the time that we started talking about it and looking at it, others just showed up in the scene. Like it was, it was kind of
[03:55:47]  crazy. Cause like, I mean, big moment for all of us was when Jason Miller released that Islands article. It's kind of funny because I think a couple of months
[03:55:56]  earlier, Michael Rawlings actually released like the same article, but, or maybe he didn't call it islands though. Right. He didn't have that term. And
[03:56:04]  you know, no one had noticed, you know, what's, what's a guy with 300 followers on Twitter, you know, working on this stuff. No one cares
[03:56:09] . Suddenly Jason Miller, bam. And everyone's like islands. And then people started building this stuff, but it was just such a weird thing because this came out of,
[03:56:17]  it was disconnected, you know, timeline where Marco in a lot of ways, even ignoring Marco six, Marco four, even like in 2017 is like a more advanced version
[03:56:29] . I mean, it's not as modern as on the tooling, but more advanced version of what these new frameworks that are coming out like now, like they, they,
[03:56:37]  they, like, like those new frameworks will get there, but it's like what Marco was doing five, seven years ago, in a lot of ways is still quite ahead
[03:56:45]  of what's coming out today. So it's like, yeah. And I mean, we didn't even like refer to it in super crazy buzzwordy ways back
[03:56:53]  then. Cause it's like, yeah, it's automated that it sends just the right amount of JavaScript, depending on where you put these classes or you say where like things
[03:57:02]  to load. It's like, we called it partial hydration. Um, but obviously that didn't really catch on. Yeah. You need, you need, you need a
[03:57:11]  catchy name. Yeah. It's so funny. It comes out and it's like, you see it and it's like, Oh, we've just automatically do that
[03:57:17] . That's what Marco. Yeah. It's like, we didn't even know where the islands are in most apps. You don't even think about it, but I
[03:57:23]  mean, you do when you want to. Right. It was just, it was just such a funny thing. Cause it's like, Oh yeah, yeah. I guess
[03:57:29]  we do that. Like it was just, it was like such a, it was like already like 10 steps ahead of that when that came out and just like, Oh yeah
[03:57:35] . Oh that. But it's, it is kind of interesting. Cause there's just a lack of awareness. And that's what I've, I've really strove
[03:57:42]  for. It was actually important for me personally, because I started looking into this, realizing that, and I had, I felt very akin to one of my struggles with
[03:57:51]  reactivity. I, I, I spent, it's funny view has reactivity. And I, I mean, it's, I couldn't, maybe this is more
[03:57:59]  for this week in JavaScript, but like, like with the preact announcement, a bunch of people are coming in there just, Oh, crazy. The signal thing seems so
[03:58:08]  cool. And blah, blah, blah. And like, like Evan's probably like, this literally this whole time, like, and, and like, um, for
[03:58:19]  me with reactivity, like, do you always hit it? Cause they were like, they're kind of political. They're kind of like, yeah, we're fat
[03:58:25] . They're kind of fashionable almost. Right. Like they're like, this is what people think is good or ergonomic at the time. We'll do, we
[03:58:32] 'll match that. Or we'll do that. Or we'll push that forward. And, and for me, when I was coming with reactivity, nobody wanted to hear
[03:58:40]  it. And like, no one believed it. And I spent so much time kind of going, look, there's benefits to like come in to 2017, 18 and
[03:58:48]  tell people that components are not good. Like people are like, what, what the hell are you talking about? And I think when I saw Marco, I had that same
[03:58:57]  immediate, uh, relation relation, where I was just like, these guys, I think there's also like one other struggle we were fighting is that people got this really bad
[03:59:06]  connotation of templating languages in general as well. Right. Like when JSX came out, people are like, it's just JavaScript. You can do like,
[03:59:13]  nothing is impossible inside here. And we're also coming from these like fairly limited templating languages, like pug and like dust and all that stuff. Like if you're in
[03:59:22]  the server side, templating language, you know, there's not like, you can't do everything with those and there's issues with that. And so I think we
[03:59:27]  were also fighting that struggle because we were also a templating language. Um, anyways, yeah, yeah, yeah. Right. And that's the kind of thing with the
[03:59:33]  connotations. Like, I wonder if an, I mean, V dom still considered pretty good and react is good, but can you picture a world where people have decided
[03:59:42]  that V dom isn't cool, but someone comes up with like a new version. That's not the same as the V dom, but like everyone's like, oh,
[03:59:48]  so it's a V dom and you're like, no, no, it's not. But everyone's just like decided. And they're like, like, I can
[03:59:53] 't think of another example of that in our modern day and age, but reactivity was like that. Everyone like, Oh, that's, that's the reactivity
[04:00:00]  is no good that, you know, react, react, killed reactivity, reactivity is not good. So if someone comes up, they're like, no, I
[04:00:06] 'm doing it differently. Like, no, no, reactivity is not good. Yeah. And just like that people, I think hear HTML first and I think like super
[04:00:13]  limiting. Um, so hopefully I've been able to show a little bit here that it's like, well, it's not limiting. We give you all the escape patches
[04:00:20] . Um, and then also it makes it actually more powerful in some other areas. So anyways, yeah. And, and this is why the, the competitor angle things
[04:00:29]  Svelte has now shown that too. And others have shown the kind of HT like closer to the basis thing. I mean, uh, to be fair, Marco takes
[04:00:37]  it even further, but I like they, it, it took having competitors and having other people acknowledge it to actually do it. It's really hard to come up in the
[04:00:46]  space by yourself. And to be fair, I'm, I'm glad these things are sort of coming across, but it's still a large uphill battle for these kind
[04:00:52]  of frameworks. I, and I think some of the stuff more on the fringe is even having even harder times. Still Marco's islands today now get an instant like recognition of
[04:01:02]  like the, the, this is a thing that's good, but like even Marco six, what it's doing in resumability is now the new thing where people aren
[04:01:09] 't sure whether it is like, I know quick is having a hard time, you know, expressing to people the, the, the value there. So like, um,
[04:01:16]  this is an ongoing thing when you're first to the area, you know, it takes some kind of, you know, it's unfortunate, it's not a technology
[04:01:24]  thing anymore. It becomes like, it's not just a marketing thing. It's about personally. I feel it's about being able to explain it and demonstrate it. And
[04:01:33]  that's what I've, I've been working on here and giving people the opportunity who were working on amazing projects to be able to showcase it. Yeah. And I like
[04:01:40] , you know, quick is a perfect example of something where it's like, like, if you take the model and you implement it, like, yes, it has
[04:01:48]  great implications, but if you do it naively, you have a button that you click that takes three seconds or something to actually do something. And so now they have to
[04:01:56]  answer more questions and like, you know, they can, they can answer that and do it better and like get the advantages that they want. But it's like the first
[04:02:03]  draft of something may not take care of all of those pieces. Like they didn't have partial hydration. Yeah. So it's easy to come up with an example where they
[04:02:09] 're super slow server side running. It's like, obviously it could tackle that, but their idea of breaking things up and loading it async, like that is a
[04:02:16]  good one. So we shouldn't discard that idea just because some aspects of their implementation are slower and reactivity, I think is exactly what you've proven to be in that
[04:02:24]  same vein. Yeah. I'm loving this because you get some classic back end people, you need to convince me, like you can use note on the server. And it
[04:02:32] 's funny, the reason Marco exists was actually for this reason, right? Like the eBay was like, we want to consolidate our web front end platform side of things.
[04:02:41]  And they're like, we got a Java backend and you know, that's fine. But we want, we want to be able to do everything full stack JavaScript. So
[04:02:48]  Marco actually came out of being like, let's take what, what was it called? Raptor in JavaScript or, or sorry, Java. Yeah. But the original was
[04:02:57]  Raptor. Raptor JS, then there's Raptor Java. Yeah. Yeah, exactly. Right. Yeah. And it was, it was like, let's
[04:03:04] , let's see if we can make a full stack solution. And here's the thing. If you want to believe on this side, I will, here's, here
[04:03:10] 's the thing. I told you about the speed police at eBay, right? Like the, the, the, the regression people, when Marco had to come on the
[04:03:19]  scene, they needed to put their app back to back with the Java app that it was replacing. So Marco couldn't replace the, the existing eBay without being at least as
[04:03:33]  performant as the preexisting Java app. That was the criteria. That's why they worked so hard on these techniques and stuff right at the beginning. Cause there was
[04:03:41]  like, okay, is this viable? Can we make a JavaScript backend that can serve, um, uh, all our customers and be able to leverage this as this kind of
[04:03:50]  isomorphic universal experience without losing those milliseconds that eBay, you know, bottom line is going to come after you for, um, Yeah. And keep in mind it was
[04:03:59]  Java plus a sprinkling of JavaScript. So we are talking like in some cases, those 20 kilobytes, I mean, it's, you know, they were probably
[04:04:05]  in jQuery as well. So there was a little bit of a disadvantage there, but in general it was not this spa application. So we were competing with that as
[04:04:12]  well. Yeah. Like this, this is the, you know, to date, Amazon doesn't use a framework because of how hard it is. Like they, they,
[04:04:20]  they have their own kind of custom JavaScript thing they run and they use their server rendering and they don't have like, they don't use a spa framework to do this.
[04:04:26]  They don't even use a partial hydration thing. eBay needed to hit that level of performance and, and, and numbers to even make Marco viable. So if you've
[04:04:35] , I mean, yeah, some people aren't going to like note on the server and honestly, eBay, uh, the API is like the service, what is it called
[04:04:42] ? The service experience or the service? Yeah. Sorry. That's still Java. Like, like there's, we use backend languages like eBay to do API stuff, but
[04:04:50]  the web platform at eBay is enlarge all JavaScript. Yeah. Yeah. Was it faster than a static spa? What do you mean a static spa? I mean,
[04:05:05]  a spa is going to send all the JavaScript required for that spa. So at least as far as the JavaScript bundle goes, like it's not even comparable longer, but then
[04:05:12]  the big problem is if you have a static spa that like, assuming it's going to communicate with some database or something like that through a service or a fetch call or whatever
[04:05:20] , well, now you've created a waterfall. You're downloading the JavaScript, executing the JavaScript, calling some API, waiting for that API to come back. And so
[04:05:28]  you're, you're creating this unnecessary waterfall. Whereas if you do server side rendering, essentially you immediately start rendering hopefully, and, um, do these requests as soon as
[04:05:39]  the user connects with your server, right? So you basically user connects with your server, you've kicked off the, um, request to get the data and started building up
[04:05:48]  the HTML. And so, you know, it, it ends up being faster if you have any sort of, um, data that you're trying to load at the
[04:05:55]  same time. And then the other piece is if you're doing streaming, especially out of order streaming, that initial chunk of HTML, you can send to the browser pretty much
[04:06:04]  instantly. Like Marco will take like six milliseconds to render something like that. So, I mean, sure it's going to be slightly slower than serving some cache static thing.
[04:06:13]  And obviously there's the downside that you can't actually cache it, but as far as the initial load goes, it's like six milliseconds overhead for, um, a
[04:06:22]  dynamic page without this waterfall. So it is going to load objectively faster. And so, yeah, anyways, there's a whole bunch of things to consider there. Yeah
[04:06:30] . And I think the, I think that was just toying with the MJ comment actually. Now that I see it's all hard to get emotion like conveyed through, there
[04:06:36] 's some smiley faces and stuff through here. Anyways, I think we're good. I'm thinking we're going to wrap up here with Dylan and I think I'm
[04:06:42]  going to go into this week in JavaScript and talk about all the cool stuff from the, from this week. So, um, let's thank Dylan for having on the stream
[04:06:49]  and, uh, hopefully we'll have him again soon. Uh, maybe with the Marco six release, our beta release or whatever. So, um, thank, thank,
[04:06:57]  thanks for joining us today. Um, all right. Thanks for having me. See ya. Yeah. Yeah. All right, guys, we have one more segment and I
[04:07:04] 've been streaming now for a bit. So give me a second. I just got to drink some water. Everyone's still alive out there. It's so hot today
[04:07:16] . Still. Um, this has been, uh, been quite a long stream, but I'm so awesome to have Dylan on. Yeah. Yeah. I mean, that
[04:07:25] 's what's been happening recently. I've been like, at one point I tried to cut stuff shorter, but now I'm just like, screw it. We're just
[04:07:30]  going to keep going. We're going to dig deep where we need to dig deep. Cause like what, when, when, when are we going to get the opportunity again
[04:07:36]  to pick Dylan's brain on this stuff? You know, it might be another six months or seven months, you know? Um, I, I'm, I'm
[04:07:43]  sure AC working now. I mean, it works, but it's the same problem as yesterday. We need to like, we got to keep the power levels into consideration here
[04:07:53] . Um, but yeah, I mean, to be fair, it's, I, in this place, I think it's not that there is a central AC, but
[04:07:59]  I think the problem was like, it was kind of retrofitted afterwards and the ventilation isn't really set up good for it. So essentially like, it's not super
[04:08:06]  effective. Um, so as it's, it said, we, we, we only got to, we only got as low as 80 and then we started climbing back
[04:08:14]  up again. So that like, it's, it's, it's hot. Yeah. You can see like my, my, I have like glistening skin here
[04:08:22] . Like it's like shining. Um, so it's all good, but I'm glad some people are still here. I think that was super awesome. All the stuff
[04:08:30]  right from the content around the, uh, the, the like compilation. I loved how we used JSX, but that was all Dylan's idea. The show the solid
[04:08:39]  compilation. I think that really helped visualize the features all the way to like getting into really deep into those, uh, those, uh, um, tools, you know
[04:08:47] , I was trying to like figure out the right balance. Cause you know, obviously you can get a lot, like there's a lot of details there, but at the
[04:08:56]  same time, I think it's important to understand the process behind it. Even if you don't know like how the code works, but understand like, this is what they
[04:09:04]  do, like how, like you start with this and you have to to transform it and do this and check this and do this all to kind of somehow magically, I
[04:09:13] 'm not saying magically, but it feels like that. Cause some, I think there's a joke in the comments that are like, I like how it's kind of amazing
[04:09:20] . This all works. Like it feels like a hack on a hack. So yeah, 60 Fahrenheit outside yesterday. It got to one Oh seven. I was actually,
[04:09:31]  I was going to a, uh, like a barbecue. I went to Mishko Hevery's house from Quick and I was hanging out there. I grabbed Nikhil
[04:09:38] . Um, he's in the area and I went there and, um, Powell, uh, was in from Europe. He's an angular guy. So there's a
[04:09:45]  few of the angular guys and me and Mishko, we all met up yesterday for dinner and it's like, it's like one Oh seven. I'm just,
[04:09:51]  I'm, I'm from Canada. Like this, I am not used to this kind of heat at all. Like in, you know, like Vancouver, like,
[04:09:58]  like a hot day in Vancouver in the summer. It's like, Oh, it got over 30. Um, like I, I, I still not perfect on my back
[04:10:06]  and forth translations. I actually think more in Celsius, but, um, generally speaking, all the numbers reported here, I've gotten Fahrenheit. So yeah. Yeah. Today
[04:10:17]  was showing how hard is the supported language in 2022, but, but, but was mostly straightforward yesterday was much more brain melting. Yeah. Fair enough. But the thing
[04:10:27]  is, can you imagine like trying to support a language in 2014, like eight years ago, like the tooling wasn't there. You had to build everything yourself. Like this
[04:10:36]  is, this is the, it's funny. This is so much easier now than it was before. And like, it's still not easy. Yeah. Yeah.
[04:10:49]  Oh, I love this. Yeah. Vancouver is the hot part of Canada. This is actually my cousin. So he, he, he's not, he was not from
[04:10:57]  the hot part of Canada. Um, but yeah, it's so funny. Yeah. Yeah. No, it's, it's hot. I know there's lots
[04:11:09]  of places that are hot. I'm just, I'm not used to this, but you know, I guess I've come accustomed to the fact that it's literally sunny
[04:11:17]  every day. It's funny, San Francisco. Sometimes I go into the town and there's like this mist that kind of comes in and you're like, Oh, that
[04:11:23] 's kind of cool. But like San Jose, um, is like, and most South Bay, it's like this bubble where it's the weather is identical. Like
[04:11:32]  every day, it like never rains. It is just like the sunny day every single day. It's kind of crazy. Um, some ways I like it, but other
[04:11:41]  ways I like it. I don't know if I like it. I'm like, I could use a little bit more rain, but I mean, I grew up in
[04:11:46]  Vancouver, Vancouver is like Seattle. It's like rain city. So, you know, I know it's funny. I'm talking about weather, but I needed a moment
[04:11:53]  to kind of stretch it out. You know, it's, we've been kind of going straight for a while and we still got more to do. Although I'm
[04:11:59]  hoping this week in JavaScript's a little bit shorter, but I still got to get on. And if I want to wrap up by five, which is my hard stop Pacific
[04:12:06]  time. So yeah, I'm designing a new language too. Tooling is a huge part of the work. Yeah. I mean, anyone who works on tools, you
[04:12:13]  know, has my sympathy, you know, uh, this is not like, even when I was working on Marco, uh, doing a lot more of those work on
[04:12:22]  Marco, I did some compiler stuff, but I did a lot of runtime stuff and design. So design, runtime, and then like some of the, um, uh,
[04:12:31]  some of the compiler stuff, like kind of original stuff. And we're trying to spread out the work, but what ended up happening is Dylan's a freaking genius. So
[04:12:39]  I'd like start on something like we'd work through design, then figure out the runtime, then start working on them. I started working on like a feature with the runtime
[04:12:46] , the compiler and like start kind of proving out a compiler thing while Dylan's off doing something working on these tools in fact, cause he's basically an expert of these
[04:12:53] . And then Dylan would come back and be like, yeah, that's really good, Ryan, but I think we can do it like this. And then it's like
[04:12:58]  rewrite. And it's like, okay, that happened like three or four times while I was working. Like the thing is there, it's a whole other layer of optimization
[04:13:06]  on the tooling side. And, and like the, when you have something as complicated as Marco, this like, it takes a long time to understand the implications across the
[04:13:15]  system. You can like go and develop features easily enough and you have the right hooks and all the tools, but like there's a way of doing it and there's the
[04:13:23]  best way of doing it. And that just scales up there. Like on, on, on solid side, I have this Babel plugin that I maintain and it's like
[04:13:29] , okay, well, I mean, I, I, it used to be one file. I split into a few files. Most people have a hard time even wrap
[04:13:36]  their head around that, but I'm okay with it. I'm like, okay, I've got like SSR universal browser and I've like split it up and I
[04:13:43] , I've got my system and you know, it's a few hundred, uh, you know, line files and I can work with that, but getting into Marco,
[04:13:51]  you understand that like all those stages in the transform, you have the transform, the translate, the migrate, the parser, you have all these pieces and they're not
[04:13:58]  all in the same repo and they like, they all tie together in this whole thing. And you, when you hit a problem, you can go, oh, I can
[04:14:04]  solve it at transformer. I can solve it at translate and like what's best. And like, there's a lot of complexity in, in finding the best ways.
[04:14:13]  And, but to be fair, when I worked with them, I learned a ton. A lot of those tricks that end up coming in that are more compiler optimizable,
[04:14:20]  like inlining static strings. And even the ternary operator was a big part in working with the Marco team and learning from the way they use Babel because Babel
[04:14:27] , a lot of people don't know has like pre-pack like ability. It can, you can feed an expression and it can see if it can evaluate it.
[04:14:35]  And if it can evaluate it, well, you know, that's, that's some work you can do ahead of time at compilation instead of at runtime in certain cases.
[04:14:42]  Like I, I mentioned the inlining string thing. It was really cool because you'd have style tags and people working on web components. And sometimes they have those strings like
[04:14:48]  outside of the file, maybe like const style. And they make them do a strict static string. I could make it so that if you just made it equal a constant
[04:14:55] , let's say you want to hoist constants out. If you put those constants in the JSX and they're actually constant, solid will actually inline the constants for
[04:15:02]  you. So like, and by inlining the constants in the template, it's actually really beneficial because then they get extracted out into the part that gets cloned instead of
[04:15:11]  the part that gets updated, which actually improves performance. So like, yeah, I mean, there's a lot of stuff here. I guess Marco being part of you
[04:15:21] , you have huge performance implications that you don't really have to worry about elsewhere. Anywhere else you would be fast enough potentially. Right. But I think, I think
[04:15:29]  this is where things are heading right now. Why there's these conversations, you know, because people want better, like at a certain point, fast enough is, you know
[04:15:40] , everything gets slower in time, I guess. And there's new ways and new techniques. So if you want inspiration, where to find the next things, like look
[04:15:48]  for that. I mean, maybe we're worried that we follow the big companies too much, you know, but, um, yeah, anyways. Okay. I think,
[04:15:55]  I think, I think I've chatted enough. I think we need to get started on this week in JavaScript. So I am going to get the banner up here and
[04:16:04]  feel free to keep on engaging in chat. I think there's always some good discussions and good things. I don't, I might not always like completely, you know,
[04:16:13]  gear into it, but let's, let's keep things going. I do depend on you all to keep things lively here. It's always hard after about four hours
[04:16:20] . Right. Um, yeah, but I mean, yeah, maybe, but maybe they also just don't realize, I think, I think people are in for a rude
[04:16:35]  awakening sometimes. Yeah. Yeah. Yeah. No. I mean, this is where I start because of this app. It's funny this week in JavaScript won't be
[04:16:43]  the longest. Um, but I just wanted to, to kind of, uh, I talked a lot of the detailed nitty gritty yesterday on stream, but I
[04:16:55]  just want to provide a nice wrap up for the week here for everyone. Okay. So let's, let's go. All right. And it's time now to talk
[04:17:02]  about this week in JavaScript. Um, honestly, um, I, I, I have to admit, I wasn't too much on a lot of the news, although
[04:17:12]  there was some big news for me and maybe that's why I got kind of sucked into this black hole. But for me, this week in JavaScript really started again from where
[04:17:20]  last week left off. I did that, uh, react stream and, um, it's, it's kind of interesting. This was actually, uh, a tweet that
[04:17:29]  someone, uh, put up here and it, it was kind of funny cause it's, it's, it's, it's listed like a bait tweet, like
[04:17:35]  some kind of grifter thing, but it, all it was is a tweet of me saying really nice stuff about react. And yeah, I mean, this, this tweet
[04:17:43]  went pretty widespread and people were, were pretty, uh, pretty, you know, stoked, I guess about another framework author complimenting a different framework. Right. There's
[04:17:53]  a lot of like retweets and being like, use what you love and all this stuff. And it, I guess there's a goodwill thing. I didn
[04:17:58] 't expect much out of it. I don't even think the poster expected all that much out of it, but it's kind of funny where we ended up. Um,
[04:18:05]  and it's, it, yeah, I like the feel goodness of this. I did make apparently one mistake on this tweet. I made the cardinal sin because I'm
[04:18:16]  sitting here saying really nice stuff. You know what I say, a whole bunch of other factors go beyond the technology and react checks all the boxes basically. Like it's really
[04:18:25]  amazing framework. Well, I called reactive framework and that, that was the source of contention. If you actually go down the chat here, you know, I can
[04:18:33] 't believe Ryan, I know people are joking, but I'm just saying, apparently that was the hottest piece of here. Other than people suggesting that that was a deep fake
[04:18:43]  that, that I did not do a five hour stream of all about how awesome react is, but honestly, that stream was so much fun. And, um, I'm
[04:18:51]  glad people enjoyed it. It's one of my best charting videos for like live concurrent viewers and stuff. We had like 170, some odd people, you know,
[04:18:59]  it was a really good time. And I enjoyed showing people, um, basically react through my eyes. I mean, the takeaway for anyone who didn't see the stream is
[04:19:12]  simply as I didn't try to fix react. I, I started from a very different place. I started from a reactivity library and I saw react as my solution.
[04:19:21]  So if anything, I tried everything possible to make solid more like react because I felt like we could learn things from reactive land. There's a reason why these libraries had
[04:19:31]  fallen out of popularity and react got a lot of things, right? It's that simple. All right. But it's kind of funny because in my mind, that's
[04:19:41]  a complete juxtaposition from the, the, the, the, the, what is arguably the big news this week, which is preact, um, released
[04:19:50]  signals. And you, anyone who's watched my stream is probably familiar what signals are. It's the reactive state primitive. Um, and preact was like, yep,
[04:20:01]  cure, get all the benefits of this. And honestly, this is a very compelling, um, story around it. It's, it's funny because a lot of
[04:20:11]  you might realize like, well, um, well, actually I'm surprised how many people aren't familiar with this stuff. This, uh, which is, I live in
[04:20:18]  reactivity land, so I have the scope, but it's been a few years, I guess, since mob X was the popular state management in react. Um, and
[04:20:28]  I, and I think also like a lot of react developers clearly have never really looked, looked at view in earnest. They might have like, saw some syntax and been
[04:20:39]  like, Oh, what's this ugly V4 stuff. But they, they didn't actually look at view. And it, I realized this was solid too. Um,
[04:20:48]  actually using JSX with reactivity is something people like, wow, what is this thing? But like view didn't have the primitives that are exportable, which
[04:20:57]  is like the new trend. And that's something, uh, trend that in a sense started with, um, react hooks. Although in solid's case, we had it
[04:21:05]  before react hooks, but like, but essentially view has been this the whole time. And the signals in preact are basically the equivalent to something in view called shallow refs
[04:21:17] . Um, it's exact same syntax works because basically the exact same way where a signal returns an object with a getter and setter on it under the value.
[04:21:28]  So you go count dot value plus plus, or, you know, or equals a new value, or you go count out value to read it. That's all it is
[04:21:35] . It's just a value container. It's like solid signals. Um, and whenever the key part is whenever the signal changes value, the thing that subscribes to it
[04:21:44]  can run. And because you know that it has nothing to do with the component, you can do some ability to perhaps do some pinpoint updates. Cause in a lot of systems
[04:21:53]  like react, the updates are actually tied to the component. When you call set state or use the equal sign in Svelte, you're just saying component update.
[04:22:03]  It's not like reactivity in the, in certain sense. It's I, I, somebody in, people on the Svelte side will argue with me that S
[04:22:11] velte is truly reactive. And I'm not going to argue that Svelte or reactor are not reactive. So like, I'm not going down that path,
[04:22:19]  but if you, if you're going to call Svelte reactive, you're going to call react reactive. Like they, they, they, they, neither of
[04:22:25]  them have better claim to the, to, to the term. Um, and it's really kind of quite interesting to see this VDOM mix because preact is still
[04:22:35]  a VDOM to be fair. View is a VDOM with reactivity. So this is not new at all, but for people on the react side of the
[04:22:42]  spectrum, um, this is huge. And there is a takeaway here, right? Um, yeah, someone's mentioning chat preact. Did it maybe react to support
[04:22:55]  signals too? I don't think that, um, I don't react core team has suggested as much that they're not going to be interested in that, but what's
[04:23:06]  cool about this and the kind of takeaway, I don't know if people saw it is they actually have signals react. I don't know if this got buried, but
[04:23:15]  the, the, the, it works the same way. You can actually use this in react. This is like the perfect Trojan horse. I'm, I'm like
[04:23:23]  so stoked on this, like people are going to start using these patterns and going to maybe realize that the ergonomic benefits here understand some of the power of it. Like
[04:23:34]  this is, this is, this is pretty crazy. Right? Yeah. I thought felt was reactive, not fine grade. Yeah. Yeah. But, but I'm saying
[04:23:44]  it's like calling react reactive where all the UI libraries are reactive. They, you set some state and you synchronize it. Um, the thing that react and Svel
[04:23:51] te having common is that when you update a value, it's actually tied to a component, it's a component that reruns with signals. Um, it has nothing
[04:24:00]  to do. And that could be the definition of fine grain that it's not tied to the component, but that's why I'm saying, that's why I put S
[04:24:07] velte and react in the same bucket. And especially when react builds that compiler, they're like very much in the same bucket. Um, whereas this is, this is
[04:24:15]  the other side now, preact and view are kind of in the same bucket. Um, so yeah, this, this is, this is, well, I mean
[04:24:28] , think of this, people are going to come in and they're going to try it with preact. They could try react and they're going to be like, wow
[04:24:33] , no dependency arrays and all this stuff, all this really nice ergonomic stuff. And I think that's like the biggest takeaway we should get from here to be fair.
[04:24:41]  There was a lot of talk about performance and Jason was showing these like demos, uh, which I think actually show up in the release announcement blog somewhere in here where,
[04:24:50]  um, he was like showing, like, look at this V dom and then optimized. There is an optimization in here that affects like probably things like animations, like things that
[04:25:00]  are very, very, um, focused. It's not an architectural optimization. It's a leaf node optimization. It's one where you can go this one text node or
[04:25:09]  this one attribute. We can speed it up a whole bunch for updates. Um, it does come in a trade-off with reactivity generally, and view knows this
[04:25:17]  all too well. When you mix V dom with reactivity, you get, you suddenly get reactivities, uh, update performance, but you're taking double the hit on
[04:25:25]  creation. So it actually some, it's usually a trade-off where you actually slow one thing down to speed up the other thing. And while I'm not done benchmark
[04:25:32] ing this, there's a memory leak I found while it's benchmarking, uh, preact. Um, I haven't seen anything to indicate that this is going
[04:25:39]  to be any different. Um, which means that ultimately, while this will be a nice boost on performance for preact, hopefully if everything levels out the way that I hope
[04:25:48]  it does, um, we're not talking it drastically changing where it sits in benchmarks, so to speak. I mean, maybe an animation benchmark, like where you're spinning
[04:25:56]  a circle or something, but it's not, it's not actually going to change like crud operation type benchmarks, things where you're, you know, working with
[04:26:05]  lists or doing normal, uh, kind of operations, um, you know, to do MVCs, all those kind of things. It's not going to, it's
[04:26:10]  not really going to impact that very much. Um, but you know, it's very ergonomic. I think people are going to love it. You know, they're
[04:26:17]  going to play with it and go like, Oh, that's really cool. I think that, I think that there are some ergonomic challenges here because once you go like
[04:26:23] , this is one of those things, like once you go reactive, you know, the, the, someone wrote a post I saw earlier about like technologies, I think
[04:26:30]  it was fire ship wrote a post. He's like, once you start using these technologies, you can't go back to the way you were using it before. You just
[04:26:36]  think any tailwind was on the list and Svelte was on the list. Um, uh, but I, and for me, it's not, I didn't
[04:26:41]  really focus on the Svelte part particularly, but it's the way of doing these reactive primitives. Once you kind of go there, it's really hard to go
[04:26:47]  back. And what's interesting in something like preact is you start finding when you start using them that there's gaps and then you're like, Oh, I need
[04:26:55]  to do, I need to make this reactive. You have to actually consciously go through and go, Oh, actually I want, because I haven't talked about it much,
[04:27:03]  but there's an, a little optimization that this preact signals does to get that performance. And what it does is when it, instead of doing count, uh, un
[04:27:13] click is not a good example, but here, if you put count dot value here in this text node, it just reads the value. And whenever you access the value
[04:27:22]  while you execute your component, uh, preact basically wraps the whole thing in an effect. So what, uh, so when count, when count up value changes, it
[04:27:32] 'll rerun the component and that's nothing special, but if you actually pass this through and don't put the value on the end, suddenly the, the V Dom
[04:27:41]  now has an observable in it and it's smart enough to go, Oh, um, this is something that updates separately. And it can basically make a pseudo component inside
[04:27:51]  the, this component. And it's only that pseudo component that updates, which is really cool. I said, it's not an architectural thing, but they were able to
[04:27:57]  extend this even to react because they just hijack the, the react has a create element call. If preact signals kind of gets in the middle of there, they can
[04:28:05]  look for the observables before passing it through to react and then they can give it the same behavior. So it's a really cool way to get this kind of micro
[04:28:12]  optimization. As I said, it doesn't like, if you have a list, that's not going to help you. And I think it introduces, as I said,
[04:28:17]  really interesting things. Cause like, if you have a component, do you pass the signal from props or do you pass the value? And the answer probably is pass the signal
[04:28:27]  signal because you benefit from it. You have to ultimately get it in the DOM, but that means you're changing component API, right? Like, like if you,
[04:28:36]  if you're passing a plane value, it's not a signal. And if you pass, um, a signal, like if you're expecting a signal and it's not
[04:28:44]  a signal, you have to do a little bit of work of wrapping or unwrapping it and going like, is it signal do this? Otherwise don't do this
[04:28:50] . And I mean, these are real challenges when you're going to go half and half. If you go all in, then it's fine. You pass a signal through
[04:28:57]  everything's a signal, you know, but what if it's not a signal? Well, it's an object with dot value. How do you turn a string that you
[04:29:04]  pass to the prop into an object without value? I mean, you can make a getter, you can make it a constant, but you're now kind of introducing this
[04:29:11]  question of like, what's a signal? What's not a signal? This is something we funnily enough, completely avoid in solid because we always get people to
[04:29:18]  pass value and do the wrapping automatically under the hood and you access it the same way. And you never have to ask this question. So I think there's like a lot
[04:29:25]  of lessons to be learned here, um, in terms of ergonomics and how this plays out. But like as people in chat are saying, like, so once we're
[04:29:38]  so apt, this solid should look like even more appealing. Yeah. Yeah. This is what I was talking about the Trojan horse. I think I mean, maybe this
[04:29:44]  is my bias. I've spent so much time in this reactivity zone that I think people coming through here and trying it, if they, if they get hooked and they
[04:29:52]  like it, they're going to use it so far. And then once they hit those friction points I mentioned, it's all, it's only going to look like a
[04:30:00]  geniusly designed API. Um, like just because this is what we, we considered right from the beginning. And with the JSX, it was really easy. I don
[04:30:09] 't know if I told you, going back and forth was really easy. I actually took, um, uh, the solid JS framework benchmark and it was easier to port
[04:30:18]  that to Preact than it was to port, uh, the existing Preact version. I just copied it across, switched some signals around and I was like, bam,
[04:30:24]  this just works. So, I mean, this is an ergonomic, like API and in the simple sense, until you start thinking of the structural stuff, it's
[04:30:33]  super powerful. And for global state solution, it's lovely. I think the in component state stuff is actually a little bit trickier because of the things I mentioned, things
[04:30:43]  like prop drilling, you start having to be aware and conscious things like list reconciliation, where there's a difference between a referential list diff and a key list diff.
[04:30:52]  I mean, these are all details that come with it. And these are details that solids work through. These are details that Vue's worked through. Vue has years
[04:30:58]  of experience. And I think if I was on Preact, that's what I'd look. I look at Vue, actually. Vue supports JSX funn
[04:31:04] ily enough. And that's probably the closest solution here. I think, I think Vue probably has a lot of this, a lot of the secrets. Um, but
[04:31:12]  yeah, I mean, how could I not be stoked about how awesome this is? Like, I mean, there's, there's, there's so much cool stuff
[04:31:19]  in here. I mean, if they, they, they explain like the waterfalls and context, like this is you, people don't realize this from react. Once you
[04:31:27]  go to reactivity context kind of becomes free. Like you don't have to worry about re-renders. You can use context to do the most expensive every frame updates
[04:31:35] . You, you don't even need to use context, you use global stores. So this is just, it's just super, super powerful stuff. And it's
[04:31:43]  very obvious to people on the solid side, but like, they've done a really good job of bridging the gap. You know, you can do these global things like
[04:31:50]  signal computed, and then you can use it inside your components. You can define inside your components. You can do stuff like use signal and use computed. Like it just,
[04:32:01]  there's just so many niceties that come with this. And I think people are really going to enjoy this. Right. So yeah, I, this, this is
[04:32:10]  awesome stuff. I'm seeing if anyone in the chat has any ideas. Yeah. I mean, yes, this is, this is the danger, but I think this is
[04:32:23]  an important point. When you look at the code, do you know that just that's going to re-render or the whole component is going to re-render, but
[04:32:29]  most people aren't concerned with re-rendering. Only if you re-render too much. So I think if Preact magically updates something without re-rendering
[04:32:37] , um, it's going to happen in a way that makes sense, because if something else did depend on that value, it would re-render. So people aren't
[04:32:44]  going to observe it unless, but you're right. Somebody's going to be confused. Someone's going to go in here and they're going to look at this and they
[04:32:52] 're going to be like console log, hello counter. And then every time the count updates, they're going to be like, why is my counter component not re-running
[04:33:00] ? So you're right. In a split world, this is an interesting challenge. This opens up the Preact to be a compiler target? Um, maybe. Yeah
[04:33:19] . I mean, it is interesting, uh, because once you separate state, it does open that up. I, I, I, the thing is like, you can
[04:33:26]  do lots of stuff with compilers to be fair. But I mean, one thing that I kind of interested in, I don't know if any of you are
[04:33:32]  interested in is I have DOM expressions. Do we want to see how much faster, uh, Preact signals are if you don't use Preact? Like, well,
[04:33:41]  I could probably make the JS framework benchmark. And if, if they're, if their reactivity is reasonably performant, then there's a good chance that we can
[04:33:49]  be like, we can get it right up there with like the fastest VDOM libraries, um, without using Preact, like to use their signals without Preact.
[04:33:56]  It might be interesting. I don't know. Right. But I said, they're not, they're concerned about under re-rendering. They're only considered about
[04:34:07]  over re-rendering. Like most, for the most part, if something just updates, they're like, fine. It's only like, why did this happen
[04:34:16]  twice? But I do agree. And as, uh, the be fair reacts compiler is going to have the same friction. I think we need to start. I mean,
[04:34:23]  I just, it's crazy how long it's taken us to get to this point because I keep on pointing out, you know, Dan's, uh, thing where he
[04:34:32]  describes effects as being reactive and like react as being reactive. Like this is all part of that, that shift. And there's different solutions. Like react isn't going
[04:34:41]  to get reactivity like this, but react is reactive in its own sense. And what's crazy is it took us so long to get here where, um, we're
[04:34:52]  now looking at things now in the language of reactivity. And it's so clear to me, especially because I was writing stuff for so many years and trying to promote these
[04:35:02]  ideas that even if you're react, even if you're like on the opposite side of the spectrum, you're seeing value in being able to use this sort of language
[04:35:11] . And I mean, that's, that's super, super powerful because like, regardless of the implementation behind the scenes, we're going to have to start describing the mental
[04:35:22]  model with the mental model of reactivity, because things are going to start updating less and they're going to start updating less in a non-obvious way. That
[04:35:30] 's just where things are heading. I'm actually really stoked about solid in this world because in solid, it's actually still an obvious way. Like we, we managed to
[04:35:40]  actually align with the new mental model. That's kind of going to be prevalent everywhere better than a lot of other solutions because that mental model is our model. So yeah
[04:35:53] , I mean, this, this is, this is huge, right? I mean, I mean, I don't have to even go that far. Like look at 14
[04:36:01] 6 quote tweets. Let's read some of them. Nice work development team brother, really something of similar track for angular. So now angular is going to get these signals.
[04:36:08]  You feel like we're in a great time. Preact to preview. Good. People recognizing the view connection. Right. But this is like a statement. I told you
[04:36:18]  solid was trying to be like react to and learn from them. Preact is almost trying to get away from react. So this is, this is really interesting because you
[04:36:28]  know, yeah. Great spreading awareness of fine grain. Exactly. Solid JS view. Preact using mobile. So yeah, exactly. Finally, something that feels view. Good
[04:36:40] . I'm glad the view people caught on because the, at first, like the react people, like the early comments didn't see this, um, you know,
[04:36:50]  but yeah, signals look amazing. Evan, congrats on the launch. Glad to see Preact moving more towards view than react. Exactly. Um, the funniest thing is
[04:37:05]  I, I don't think view is what triggered this. They chose views API to get away from react, but I'm almost positive view is not the motivator for
[04:37:16]  this change. Um, right. I, one thing that I love is fine grained reactive is a term people are using. I, I don't know where I first
[04:37:30]  heard that term or it was in a conversation, but, um, it's cool. I think I've been very, uh, vital in actually turning that into the
[04:37:38]  official term. Um, I don't know. It wasn't used as widely as, as the thing, um, uh, you know, five years ago. So yeah
[04:37:46] , this is, this is super cool. What is spelt cooking? It's funny. This has nothing to do with spelt. Um, yeah, but yeah,
[04:37:53]  just overwhelming happiness here. Right. Um, people talking about signals and Elm. Yeah. Elm had signals. Um, yeah, it's, it's interesting
[04:38:04] . Um, view solid preact team. Yeah. I mean, there's just so much stuff very close to solid. Yes. Um, yeah, people are going
[04:38:17]  to love this, you know, anyways, I just wanted to kind of point this out. Like this is, this is, it's funny because the reason it feels like
[04:38:27]  a win is because preact has been so fall solidly, um, react like, so it's almost to the point that a lot of the people who are talking about
[04:38:36]  this stuff, aren't even, as I said, aware of, of solid, which is, um, kind of amusing to me because I would be very surprised if
[04:38:45]  the move to do this wasn't inspired by solid, um, significantly. So, um, yeah, I think this is interesting. Uh, we're going to see how
[04:38:58]  this evolves, but I, for one, this is super exciting news. Uh, I mean, this is, this, this just keeps on rolling. I, I,
[04:39:09]  I just can't believe a few years ago. It's so funny because I was just making a comment like, why did it take us so long? But a few
[04:39:17]  years ago, I didn't even think that we'd end up here. I was doing stuff and I think no one would ever, ever like it. Now, this is
[04:39:23]  where we are, right? But if you want to know about the history and the thoughts and the reason why I just made that comment, do check out my stream yesterday.
[04:39:31]  I did a bonus stream, um, uh, all about the costing components and the evolution of reactivity. Um, and I think it's actually really great kind of
[04:39:43] , it took two and a half hours to get to my discussion of preact and performance, but I, I think it gives a lot of, uh, context for the
[04:39:50] , the conversation here. Right. Yeah. Yeah. When Jason Rosen, yeah. I think so. Cause mob X has been doing this forever. Knockout exists a
[04:40:02]  long time ago. I feel what happened was solid pushed it, like triggered it. They're like, Oh, like this is because of the way we use JSX.
[04:40:09]  It came very visual. They saw that and they're like, Oh, we could do this. And then they're like, what should it look like? And then they
[04:40:14]  looked at view. I think that's what the thing it was like, we kickstarted it and then view was the one like where they got the API inspiration.
[04:40:22]  Right. Yeah. Pretty much. What's the next evolution of this? Um, I don't know. See the problem is this is not a new thing. People have
[04:40:36]  been using reactivity state libraries and other frameworks for ages. I think, I mean, this is such a weird stance, but like, I mean, I, most
[04:40:45]  of the time I'm trying to be like level headed and kind of think about this, but there's only one direction here. This and all arrows point to solid, like
[04:40:53] , like in my opinion, I know that's like more pushy on my own stuff than I usually am, but like, it's the natural evolution of this. I
[04:41:03]  mean, you could stop at view and views done a good job, but even view isn't stopping at view views, looking at view vapor, which is basically solid.
[04:41:10]  So like it, like, I think we're just going to see more of this and then people are going to get thing. I am concerned that people aren't understanding the
[04:41:22]  trade-offs enough and they'll get into traps, but as long as solid is doing the right stuff and sitting right next to them. And they'll see that as maybe
[04:41:31]  a direction. I'm hopeful that people won't like get too frustrated with reactivity before going, okay, you know what? I've been using react. I switched
[04:41:40]  to preact. I'm doing these singles. It's really cool. And then they're just like, you know what, why the hell am I not using solid yet
[04:41:45] ? I know that's, that's, that's the thing, but like this, the V Dom, like for preact where this goes, the best they can hope
[04:41:55]  for is basically emulate what view is doing. View has changed their V Dom to be signal aware, not just like that, but like very smart, static hoisting
[04:42:04] , all this stuff views V Dom is incredible piece of engineering. And the way that they mix reactivity with V Dom to get the benefits of V Dom, which is the
[04:42:14]  safety net and to get like, uh, the ergonomics of reactivity is incredible. All they had to do was probably give up a little performance for that, but it
[04:42:23] 's like a beautiful marriage. And they did so much work that the perform, they don't even really give up performance view has jumped ahead of Svelte and benchmarks
[04:42:31] . Like view view is really quite impressive. Um, so like that's probably the direction where, where preact could go, but preact is not going to introduce probably
[04:42:43]  control flow unless like they start, like, that's the thing. Are they going to, they're not going to add V four and like architectural things. So unless they
[04:42:49]  start adding four components and if they start going down that road, it's a very close road to solid. And then at a certain point you do ask the, have
[04:42:55]  to ask the question, what are, why is the V Dom even there anymore? And maybe this is a migration strategy, but at that point, are you differentiating between
[04:43:03]  view and solid? I don't know. preact before this would have been about react capacity and providing other nice news to convince people just to move just right. And
[04:43:19]  this sounds like that's what they're doing at first people like, oh yeah, it's react compact, but then I get these signals. Once you mix this stuff together
[04:43:25]  and you get deep into it, you're going to, you're going to start feeling tension between that react compact. What's cool is they're the only solution that actually
[04:43:33]  has react compact with reactivity in this sort of way and get some optimizations. And like, don't get me wrong. You can use mob x with react or
[04:43:40]  solid with react. We have react solid state. So you can get these ergonomics and react, but you've been able to do that for seven years. No one cares
[04:43:47] . Like you like that isn't enough to push the dials. You can get rid of the dependency arrays and use react. Like that's not a hard thing. I
[04:43:55] 'm Tanner did it even with using react itself, which is crazy. Um, he had a tweet a little while ago, but to actually benefit to get there, you
[04:44:04] , you got to embrace it like view and as a starter, and you gotta, you gotta, I'd say you gotta keep on going. I mean, even views is
[04:44:13]  the potential there, which is why they're basically working on something that looks identical to solid. Yeah. Um, to be fair, yes and no, I think they needed
[04:44:25]  this because of server components react is going to be very big on this partial hydration thing too. When this all lands with next and stuff, we're going to see everybody
[04:44:33]  with islands. Server components are basically islands. So I actually don't think the steps out. I don't think fresh was enough to step out. Honestly. Um, fresh
[04:44:41]  is interesting because of the way it showcases Dino, but otherwise it's not particularly standout. Um, right. Like in terms of islands solutions and whatnot.
[04:44:52]  So I think, I think, I think signals are a good time because how do you do inter island communication signals are a great way. Uh, there's a reason why
[04:45:00]  solid astro has been like the, the dynamic duo. We basically have the, like the, the beautiful island solution here and making it all in preact. That is
[04:45:11]  a compelling story. And I think signals complete that story. So there is that going for fresh, I suppose, but yeah, I mean, yeah, but convince me
[04:45:24]  that now to go preact signals versus full-time reactor library. Oh yeah, definitely. People, people aren't, I don't, I, here's the thing
[04:45:33] . I I'm patient. I've been very patient. If people think that preact signals equals solid, they're, I, they're going to, I'm pretty
[04:45:44]  confident. They'll realize that's not the case relatively quickly. Um, I think this is, I think you use preact or react with these signals thing just because
[04:45:54]  it's nice. It's like, it's like a nice state management library. It's like, it's like Joe tie or whatever. People are just going to love
[04:46:00]  it and they're going to do it, but there's no illusion that this is at all even close to the same sort of thing. So yeah, I mean,
[04:46:20]  I, I, someone's saying here, it's not just a react to state management. Like to me, it is though, like this, that, that is really
[04:46:26]  all this is. Um, it like the little trick with the updating one text node is not, it it's, it's like a little, whatever. Yeah.
[04:46:37]  Joe tie vibes. Exactly. Like that's, that's what's going on. I, but the thing is preacts, like it's official. Like I think this
[04:46:43]  is a, because it's an official state library. It's like preacts official solution. That's going to carry it way more than anything in the react ecosystem in terms
[04:46:51]  of that kind of thing. Like gamer redux react, like was almost official. Cause like Dan moved on the core team and people are like, that's the solution
[04:46:59] . That's, that's the kind of officialness that I think this, these signals have the potential to carry with preact. Yeah. Yeah. Yeah. Yeah.
[04:47:17]  I think so too. I, I, I don't think, I don't think the, the thing that's going to catch them are those ergonomic differences where like
[04:47:25]  they fall into traps or like little things where it's not obvious. I think that's, that's where this gets interesting, but I mean more people using reactivity
[04:47:34]  is a huge win in my book. Um, I don't know how else to phrase it. It's just amazing. Um, yeah, I was just looking at the
[04:47:44]  rest of my feed. Sorry, you guys, I was kind of un, unproductive for the rest of the week. I, I think this is actually true
[04:47:52] . Ryan Florence gives a ton of, uh, advice on how to do good docs and how to get traction in your project. The, this is, I didn't do
[04:48:01]  it intentionally, but three out of the four, um, was, was kind of where we started with solid docs. We just, we still don't have the good
[04:48:12]  guides to be fair, but being able to get a quick start, realistic, uh, copy and paste contextualized code samples for every API. That's what the tutorials do
[04:48:20] , right? Like these pieces all are such a big part and docs. He's talks about how docs are like 10 times more work than the code. He is so right
[04:48:30]  in a certain sense. Like obviously I worked on solid for years and tweaked and tweaked to get to that point. But like you could, you could do, you
[04:48:38]  could basically do everything that I did today, like there today, you know, over a, maybe like I'm talking about the solid core, maybe in a week or
[04:48:47]  so, like there's a lot of tuning, but if you knew exactly what you were doing, you could put it together in, you know, a few days, maybe
[04:48:52]  a week or something, but writing the docs or V1 a solid took me six weeks. So like, like this is, this is, this is, this is,
[04:49:00]  this is a great thread if you're into this kind of thing. Yeah. Um, um, yeah, it's just fun. This, this thread is actually kind
[04:49:10]  of funny because they're talking about this kind of cycle on building stuff. Popular thing is too complex. So pretend that we're talking maybe about react or something. Someone said
[04:49:20] , small thing fixes annoying part of the popular thing. Now the small thing is the popular thing. New popular thing adds features to address growing use cases. Go to one.
[04:49:29]  How do you break out of this pattern essentially is a thing that we see this over and over again. And Luke Edwards' responses. Yes, but the solution is not
[04:49:36]  the build features instead build doorways. So small things is extensible and can play with other small things. Then repeating one is additive, not circular. I love this because
[04:49:44]  this is the whole philosophy, uh, behind solid. This is the primitives, not frameworks kind of thing. Luke Edwards is awesome. Uh, he works closely. Um
[04:49:54] , I, I believe he's at Cloudflare and he works closely with like the Svelte team and stuff. He builds some of the best stuff. He
[04:49:59]  builds some of the best small libraries, so he's definitely one to speak. I think this is just a great sentiment. Just ask. Yeah. Let's get AI to
[04:50:10] , to write the docs. Oh man. Good times. Okay. We got a couple more for us this week before we sign off. Not a ton of time, but
[04:50:19]  yeah. I just said Preact signals are the big news, but very awesome. But what else do I got here? Well, let's talk a little bit more about
[04:50:27]  react. before we get off this, uh, our, our, our bandwagon here. I think there's two things that came out for me for react.
[04:50:34]  Actually, let's start here first. Uh, next JS, uh, did release a bunch of new stuff with 12.3. And they are in on that router conversation
[04:50:44] . Svelte kit has been kind of getting dragged under the bus because of all their API stuff. And I think it's a little bit unfair. But, um
[04:50:55] , yeah, I mean, I think there's a lot of interesting stuff. Why isn't there not a reactive system that's not tied to a framework? Oh, there
[04:51:01] 's tons of them. Uh, I think this is the part of the thing. People don't realize reactivity, not tied to the framework has existed forever. Like,
[04:51:07]  and like, like mob X, it was the, was, is, is a popular one, but like there, there's, there's a bunch of state libraries where
[04:51:08]  people like, they're kind of maybe obscure. They never got popular because the thing, here's the reason. The thing that works best with the framework. is going
[04:51:09]  to be give the best experience in that framework. Um, so, but like, that's why most reactive libraries are like, Oh, you can use this without the framework
[04:51:15] . You can use view reactivity of the framework. Use preactivity of the framework. You solid reactivity of the framework. Uh, and libraries like, like
[04:51:25]  Bobi have a separate OB like, which is for observable short, I guess. Right? Like, like there is a ton of reactive libraries. If you go looking
[04:51:35]  for them. Um, and there has been fun. for years. Just what are you doing with them? If you're not doing stuff with JavaScript per se. And
[04:51:42]  I mean, fine-grained too, like there's also the RXJS, which is an independent of a framework and, and that stuff. But like this,
[04:51:56]  like a lot of times that's like the best use because the single, uh, fine-grained reactivity is all about synchronization. And, and, and that
[04:51:58]  stuff, but like this, like a lot of times that's like the best use because the single, uh, fine-grained reactivity is all about synchronization.
[04:52:07]  And UI is like the biggest place to do synchronization. Right. And yes, this is ultimately the thing. If you want to use the native change management if possible
[04:52:20] . Right. Anyway, I, I don't, I'm not going to dig too far into this, uh, this, uh, this, this release, but there
[04:52:31]  is some hot stuff in here, error routes, loading routes, layout route groups. I, I like some of the stuff. I, I think I like their suggestion
[04:52:39]  more than some of this felt kit stuff. We're probably going to borrow a couple of things, some solid start, but there's some stuff in here. Uh, where
[04:52:47]  is it intercepting routes? I think that's the one where people are going to be like, what did you do? What did you do? Like prefixing routes with
[04:52:58]  colon or parrens dot dot parrens or parrens dot dot slash. Like the file system routing is in a whole new way. Is in a whole
[04:53:06] , it's here's language design. Here we go. Like this at audience. Yeah. There's a lot of stuff in here. You're going to have to review
[04:53:15]  it. I actually see the reason for a lot of this stuff. I actually kind of like what next is doing, except for, I hate named layout components and named
[04:53:23]  error things. I don't like, I don't like tying suspense boundaries and error boundaries to routing things. It takes away too much control. And I, I'm so
[04:53:32]  not a big fan of the convention, but I think some of these things like the groupings and the at symbol for the layout. Like, I think these things are probably
[04:53:39]  valuable. Um, and if you've ever experienced them and not be able to do them file system routing, you're going to want this. So yeah, I think
[04:53:44]  there's going to be a little feedback and a little pushback initially here. But I think, I think there's a lot of good work happening here. And I,
[04:53:53]  I look forward to see where this goes. So I think nested routing is a kind of, it's not explored as far as it would be. It's been
[04:54:01]  around forever. Nested routing has existed like in JavaScript framers since Ember in 2012. And a lot of firms do do nested routing, but like, we're
[04:54:09]  kind of questioning stuff again, because in a lot of ways, nested routing has changed very little over the years. Um, so yeah, I think, I think
[04:54:19]  it's good to look at the file system aspect again. Although, as I said, I'm not a huge fan of all the changes, but I think there's some
[04:54:26]  really nice features here, things that I've missed with the file system routing. And I think they've got the solution. So definitely worth checking out. And yeah,
[04:54:33]  some people are just not going to like file system routing. The thing is, where stuff is now in the meta framers and going, you can go configure it with a
[04:54:43]  plain JS thing, but it's not what you think it is. The file system routing starts doing so much more when you think about the way different pieces hook in thing,
[04:54:51]  like, especially if they're going to hook in error boundaries, and loading states, and split data loading and all this stuff. And like, in solid, you can
[04:55:01]  still completely wire it up and do and do that because if we're just using our router, and it's not completely compiler based. But what you're going to find is
[04:55:10]  managing routes by by the file system or by the by the JSON object or JavaScript object is going to start getting to be really painful. There's like a reason there's so
[04:55:19]  much emphasize, emphasis on this is because just how much goes in to, to where these meta frameworks are going. Yeah, yeah, yeah. And as I mentioned,
[04:55:30]  Svelte kits, proposal has gotten a lot of heat, I think, I think, while I like the next one preference personal taste a little bit better, I think
[04:55:40]  Svelte kits actually handling some other cases, the next one doesn't do. But there's a huge question of like, what's important to you. Right,
[04:55:46]  so yeah, I think, I think there's a few really powerful things. And I think that it's very hard to, I think the I get a harder over time
[04:56:03] , even though solid, for example, is going to keep that stuff up, because we use the same router, all the features are going to expose, I think people are
[04:56:09]  going to, it's going to get tedious over time. I'd like to choose a configure process here, and I can see the content. Yeah, yeah, and
[04:56:16]  solid start does both, which is really cool. We actually use solids router, and it has a routes component, like the switch where you define your routes. And then you
[04:56:23]  can just put the routes there. Or you can import a component called file routes, and it's just a routes component. So like, essentially, you can actually have custom
[04:56:32]  routes and file system routes, like all in the same definition, and you can do only cut file system, or only non file system, like custom routes or whatever,
[04:56:42]  or do mix and match, I think you can even embed the file system routing in a custom routing route. So you can like actually nest it. I got double check
[04:56:51]  that. But like, essentially, the file system routes have been boiled down to just a component of a route definition. Yeah, we're right at the end here. But
[04:57:04]  yeah, I think there's some cool features. The thing someone's like, please don't add these like dot dot dot backs and all these at times. The thing is
[04:57:11] , you're not going to use them 99% of the time. But when you do, this is this is going to be a great boon. Like, this
[04:57:18]  is different. The spell kit thing, they impose it on everyone. Most of the time, like with this next thing, you're just doing the normal stuff. But yes
[04:57:26] , I don't like dot error dot thing, we're going to we're going to keep all starts routing mostly the same. So like, we're not going to do
[04:57:33]  all this next stuff. But I think a couple of the features are worth bringing in the ones that are often and very, very rare. So yeah, I think this
[04:57:41]  is pretty sweet. And one last story for us all today. Sorry, not this one. Opinion react is focused on the problems that matter more and any other framework
[04:57:57]  that supports time slicing. I'm glad you put that put in because this is graphic that came in. And they're showing like how faster frameworks don't worry about it
[04:58:05] . But once you get into time slicing, you're in a whole different zone. And it's an interesting one because solid is included on this everyone else side in terms of
[04:58:12]  being fast in the react. But I actually loved this post because a bunch of solid people are like, what are you talking about solid time slicing? Like, why not
[04:58:21]  both? And the author was just like, yeah, I just don't like solid. They had nothing really to say. But, you know, it's fine. Everyone
[04:58:29] 's open to their own opinions. But I enjoyed that interaction because it was kind of like, it was kind of like, why not both, but a lot of firms aren
[04:58:40] 't taking the why not both perspective. They're like, they don't see the value. And to be fair, I am on the edge. I implemented time slicing
[04:58:49]  because I trust what react is saying. But it's an opt in for us because I've actually had a really hard time finding anything where I could actually, like, make
[04:58:59]  a tangible case for it. Right. I actually like concurrent rendering, but current rendering is actually two features in one, in my opinion. I mean, or they're
[04:59:14]  incremental features that are built on top of each other. The first feature is being able to render two versions of the same tree, like parallel rendering. That doesn't require
[04:59:23]  time slicing. You could just build a tree, and then build another tree. And yes, while you're building the second tree that's off screen, and someone interacts with
[04:59:32]  the tree in the front of you, you're like, geez, that sucks. It's like, it's blocking or something, right? So that's why time
[04:59:40]  slicing comes in. But the truth of the matter is, for things like navigation, you know, where you really want this kind of parallel tree where you're like, I
[04:59:49] 'm switching tabs. You're used to taking the load at that point. So if you click on the next tab, like you clicked on the next tab, you're
[04:59:56]  doing the work. So like you don't need time slicing to benefit from the fact that Solid or React starts rendering the next page off screen, loading the data in the background
[05:00:06] , and while you can interact in the foreground, and you're like, well, if it's blocking, then you can't interact in the foreground. But the thing
[05:00:14]  is, like, how expensive is a page navigation, you know, on an app, like, like, what's, you're blocked by IO, essentially, is what
[05:00:25]  I'm getting at, like, you're blocked by the data fetching. So you click on it, Solid can't render most of it anyways, it can only render
[05:00:31]  like the shell of the next page, and maybe like a placeholder type thing, like it's just rendering the off screen part. It won't actually do the place
[05:00:38] holder in this case, probably, unless it's like a new suspense boundary, but like, it starts rendering, realizes it can't complete. So it does very little work
[05:00:46] , and you're still interacting on the main page, and who cares, like, it's no different than doing any other kind of action on the page. Time slicing helps
[05:00:53]  when you have something that's CPU intensive, but concurrent rendering on its own is valuable, it's how you get that cool, you know, hold the UI API that I
[05:01:04] 've shown before. So I mean, it's right in Solid's tutorials, if you've ever been to our tutorials, you can go in here and use suspense,
[05:01:16]  and not that one, where is it, transitions is the one, right? We got tabs, you know, if we solve this one, now, it's actually loading
[05:01:26]  in the background, you don't see the fallback to the skeleton, and you can actually make a placeholder. This is concurrent rendering without time slicing, and it
[05:01:36] 's lovely user experience. It's, it does this inversion of control with suspense. It's just a nice thing all around, but it has nothing to do with time slicing
[05:01:44] . So I'm a, I, I see value in concurrent rendering. Time slicing is more interesting, right? Right? Because time slicing lets you break up that work
[05:02:00] , but they can only break it as small as you can. Like if you, if your calculation is one giant memo or one giant component and you switch, well,
[05:02:08]  time slicing is not helping you. It's gotta be. So like, look, I'm going to Excalodraw this really quick, and I'm just going to
[05:02:15]  list stuff that time slicing does not help you with, because people don't know this. Time slicing doesn't help with, um, okay. And can I, I
[05:02:25]  never get the text font size right. I think I'm just zooming in the whole thing. Okay. Time slicing doesn't help with. One. Expensive DOM updates
[05:02:34] . So if something's expensive, like you're doing like really expensive rendering, too many elements on the page, time slicing doesn't help with this because you need to render
[05:02:50]  everything consistently. So you have to render and update all the DOM at the same time. So time slicing has nothing to do with side effects. If it's a side
[05:03:02]  effect, it has to, everything has to be, have already been calculated in the pure part before you do it. So time slicing does not help with expensive DOM updates.
[05:03:10]  This is a, people see the 3d demos and they think that it helps with that. Time slicing doesn't help with singularly large, uh, calculations. So like
[05:03:23] , if you have like one big calculation, that's really expensive, it doesn't split that over time. It's like time slicing doesn't help you with this.
[05:03:31]  And what, what else does time slicing not help you with? Um, let's, let's see if, if, if I've got a list. So it doesn
[05:03:45] 't help you with expensive DOM updates. Doesn't help you with singularly large calculations. I think, I think maybe this is a short list. Um, so what
[05:03:51]  does time slicing actually help us with? Uh, yes and no, because you still have to wait till the end worker could, because now you're not blocking the thread,
[05:04:05]  but you, it'd be like an async call. Like Google, like Google, like it's, it becomes the IO problem. Right. Um, and actually
[05:04:13]  that's a good point. It's not, that doesn't help you, but like navigation, like IO, it's like, it's neutral. Like I don
[05:04:24] 't think that it actually does. It doesn't really harm or hurt. Right. So this, this, this is time slicing is great, but this is, this is
[05:04:39]  like, or sorry, concurrent rendering is great, but time slicing doesn't help with this. So what does time slicing help with time slicing helps with large distributed, distributed
[05:04:59]  work. Um, so like if a change would cause a huge amount of work across that's, that's broke. That's already broken into small pieces. So like
[05:05:12]  if you do something and then it has to update a thousand locations that are all expensive. Um, that's, that's what time slicing helps with, but not Dom.
[05:05:22]  It has to be distributed, pure calculations. So like, uh, things like, uh, like calculating some kind of math, maybe in a layout calculation that is independent.
[05:05:38]  Of other layout calculations. I'm not sure. Like I'm trying to think of something that's distributed. So maybe, maybe end user code is an example of this
[05:05:44]  where you have like a whole bunch of badly, like unoptimal stuff spread all over the place. Right. So, um, I guess some people, people are newer
[05:05:57]  to our stream. Haha. I've been doing Excalibur for like over a year for like a year now, I guess, almost, I guess, geez
[05:06:04] , it's been over a year since I started, uh, started, started, started streaming. Um, yeah. Yeah. Sorry. But I, I mean,
[05:06:15]  the second you start bringing up time slicing, um, it's, uh, you can get me in here because I think it's interesting. And I implemented it in solid
[05:06:24]  because you can see the benefit because here, I find the argument for time slicing. SunnyL is why haven't I liked this yet? It's the same argument that you
[05:06:30]  have for generators. They're extremely specific use cases that just can't be expressed well enough. Otherwise the benefit of react model is that you don't need to anything special
[05:06:37]  to take advantage of it. It's just easy. You just go start transition or, you know, and react just does it automatically. So, but it's like the
[05:06:43]  thing that no one's asking for. So that's a hard sell. Like I, in the back of my head, I'm like, there's going to be a
[05:06:48]  use case. The problem is the demos you see, we have to artificially add slow down in a distributed way to actually show it. So I was actually using a comparison
[05:06:58]  to like a microphone, um, peaking because, because the problem is. The problem is if you want to show off time slicing, like basically pretend like there is
[05:07:11] , I'm just going to make a red line. Pretend there's like a limit where you don't want to go over this. Like the, at that point,
[05:07:19]  the, the computer stalls to, to, to, uh, slow draw. Like there's nothing you can do with it, with it. And the problem is a lot
[05:07:27]  of apps, you do a bunch of work and you're kind of just like, let's get black, black, black. Um, um, let's just delete
[05:07:38]  this one. Let's go back here again. Stroke width wider than, but you're doing a bunch of work and it's like a wave form. Like you're
[05:07:49]  just kind of going along in time, whatever. I'm, I'm sorry. I'm terrible at drawing, but then what ends up happening in all the demos we do
[05:07:56]  the show time slicing. Um, you know what, sorry, I got to draw a better wave form. I just suck at drawing. Let's try this again.
[05:08:04]  This, this, this is what we do with C because essentially. Okay. Okay. So let's start again. We're just drawing a wave form and there's
[05:08:15]  peaks and there's bounds and there's other ones. And this one and maybe this one. Okay, cool. And then what ends up happening with the time slice demos
[05:08:26]  is we like, we artificially make stuff. And then we go like this, we like bring it up. And then we're like, we're like, look
[05:08:34]  at, at this example. Now it, it is, it's peaking all over the place. And, and this is terrible because it freezes at every one of
[05:08:47]  these points. And then someone's like, okay, let's time slice. And what time slice ends up doing. And I don't know if I'll be able
[05:08:54]  to do this with a Scala draw very easily. Is it like, yeah, I'm not going to be able to do this very easily. It like, let's
[05:09:00]  get another pen and just kind of do it. Time slicing. We'll be like, okay, well we can, we can come in here and kind of curve off this
[05:09:08]  a little bit. You know, like if, if things like we can, we can stem the bleeding a bit. And, you know, when we, when we
[05:09:20]  get it off to the stone, but what, what's funny about it to me, at least is this isn't actually accurate. It's more like we can take the
[05:09:28]  top 10% off the, off, off of it. And, and, and then like, maybe I got to move my line a little bit, but we, we
[05:09:35]  kind of look at, we kind of look at what we've done. And we're like, look, it's so much smoother. Like all these points no longer
[05:09:43]  go over, but someone's like, yeah, but what about these other three? Well, it's, it degraded gracefully, right? Like, like essentially,
[05:09:52]  like we kind of clip stuff. It's like, it's like this clip screen on my microphone. Um, right. It's, it's a good guard, but
[05:10:00]  like the, the demos have this problem of like putting us way into hope hyperdrive and then pointing out. And then pointing out that they peak slightly less when like,
[05:10:10]  you're like, you're still on fire. And I think this has been the challenge to find a good example for time slicing. Cause it's almost like you want something
[05:10:19]  that barely peaks. And then when it peaks, like it protects you, you know, but the, like the demos, like, it's really hard. Cause to get
[05:10:27]  it to this point, you have to really push it hard. You got to be like, okay, let's, let's say for every second we, we make
[05:10:34] , we waste 800 milliseconds of time or, or, you know what I mean? Like you, you basically have to like, like really push hard on the, on the
[05:10:44]  loop. Um, like even more than that, like to, in order to get the benefit. And this is not the typical expensive operations, like the side effects.
[05:10:52]  This is the calculations you have in your code. So my, I imagine a code base, like the funny thing is I've used react native. So I've felt
[05:11:00]  the pain of blocking UIs and how native feels smoother. Like I understand where this is coming from, but like, there's a reason why a lot of libraries are kind
[05:11:11]  of like, they're trying to figure out what these large distributed pure calculations are. Can I give you an example of some large distributed pure calculations are a large virtual DOM
[05:11:21]  tree. That's, that's, that's one. Um, like this is why some people are saying like reacted this to solve their own problems. Yeah. I feel
[05:11:30]  like it's, it's in this zone, right? Like, cause it does make things smoother. Like, you know, I, I know this isn't going to
[05:11:41]  work in code sandbox because, uh, cause, uh, yeah. Um, cause, um, streaming is not that butter smooth. I try, I did a stream
[05:11:55]  on this before, but let's, let's just do schedule scheduling. Right. The thing is if I, you know, turn off, like to make an example,
[05:12:07]  to even show off time slicing, what you have to do, which is actually really kind of frustrating or tricky is you have to actually. Find something that's not expensive
[05:12:16]  to begin with so that the rendering isn't expensive. Like spinning some circles is not expensive. Then you have to artificially add in like some huge delay. Um, you
[05:12:24]  know, add in some like artificial delay on like, this is like on every circle created, every circle updated, every frame. We're, we're wasting a bunch of
[05:12:33]  time. And then essentially even then it's hard to get it to the level because, okay, I'm going to turn off enable scheduling. So now there's no
[05:12:42]  time slicing. This is just a normal solid. So with a stupid amount of delay, if there's no delay, we'd, we'd render this easily. So you
[05:12:51]  saw when I added, you might like, I hoping you can see this, but when you add them, it kind of pauses for a second. Like when I
[05:12:57]  add, go to 300, it's like, oh, and there they are. And then even when it's turning, it's like, like it, it stops every
[05:13:04]  once in a while because it blocks. And this means on this computer, I need to add even more delay to make this impressive. Right. So. Yeah. I
[05:13:16]  mean, the best way to simulate it is make a huge number of memos like for each component and add a bunch of artificial slowdown. So you could picture in a
[05:13:26]  large app. Maybe this would be possible if they were all updating at the same time. Right. But again, fine grained and solid. Are you updating these all at
[05:13:32]  the same time? I don't know. Maybe if you're making a 3d game, I'm not sure. I'm not sure, but let's enable scheduling
[05:13:38]  now and see what the difference is. So time slicing is nicer because now when I go up to 300, it's going to keep on spinning, even though it still takes
[05:13:45]  a second for it to come in. I don't know if you can actually see this on stream, but when, when we do it, you see, it looks like
[05:13:52]  it freezes on stream, but it doesn't actually freeze on my, I can see it. It doesn't actually freeze on my computer. Yeah. It's unfortunate.
[05:13:58]  It looks like it freezes on stream. So I can't actually show you what I'm, what I'm showing you guys can come check out this example for yourself.
[05:14:05]  Right. But it's spinning here, you know, and like, yeah, I mean, it's, yeah, this is, this is, this is just one
[05:14:19]  of those things, right? Like the thing is it's not perfect too, right? Cause you might still even see a slight slow down, but the key is when
[05:14:26]  you do time slicing, it waits till everything's updated and then shows all the items. So it can do all these calculations piecewise, interrupt them as it goes to
[05:14:35]  do the animation. And then once everything's settled, it drops them in. So, which also means if you're thinking about time slice can, can starve because it's
[05:14:43]  kind of like a debouncing because you can be in a scenario where essentially like too many updates come in while it's going. Right. So you have to set
[05:14:51]  a deadlock timeout and then it's going to choke anyway. So there's this like very small space where it's relevant and it generally requires you to be like
[05:15:00]  pushing things to limit, at least in every demo. Like this demo was inspired by Paul Henschel's like 3d demo. It's not 3d, but
[05:15:07]  it's the same concept behind it. And I've, this is why I've had such a hard time finding it. I find concurrent demos that are hot. That makes
[05:15:16]  sense. No problem. Concurrent rendering is awesome. Cause you can obviously see the impact when you do these nice navigations and you can like do predictive stuff. It's
[05:15:26]  super powerful time slicing. I'm having a hard time with. All right. Yeah, I, I'm, I'm sweating here. I could go for some food
[05:15:36] . It seems like every demo for time slicing, there's always another better, but maybe more time consuming way to fix the slowdown that doesn't require time slicing. Yeah
[05:15:45] , probably. And, but that's the problem when you're on a huge scale, can you go around and fix every memo? This is like the, this is like
[05:15:52] , I mean, you got to give them credit. This is like this. You can write something really inefficient and it scales big and reacts like, look, now we don
[05:15:59] 't have to worry about it. Just click the magic button. You know, your problems are solved. It does. It does slow down things overall. I think this
[05:16:08]  area of research is interesting. Like the rails model and prioritization. I want to do more research here. Maybe react has nailed it, but I feel like there's still
[05:16:16]  work to be done here. But the one thing that I want to say is that this is why this is a hard sell. I'm going to keep on exploring here
[05:16:25] . I am interested innately in finding an example or a place where this is useful. I've just never seen it. So like it's, it's, it
[05:16:32] 's actually, I think, I think when we look hard enough, we might find it. This is, I think people are sleeping on concurrent rendering, but I think part
[05:16:40]  of it is because they assume that it means time slicing and time slicing. You know, maybe, maybe not. Right. But I guess the question in the juxt
[05:16:50] aposition is, is time slicing great for the average dev or should the, I guess here's the joke, or should the average dev change the framework? The truth
[05:17:00]  of the matter is changing the framework might not be enough, right? Because it's, it's end user code that we're trying to solve. What, what, what
[05:17:09]  the react guys said, like at Facebook scale, they're like, look, the DOM makes up, I think we measure like 10 or 12% of our expense. When
[05:17:16]  they do stuff in react, they said the DOM was actually not the expensive part. And that the, the framework was also a very small portion of it. And I can
[05:17:24]  believe that honestly, virtual DOM frameworks are fast from a raw rendering standpoint. I have a harder time believing the DOM is such a small part of it, but they were
[05:17:34]  trying to suggest that it was the end user stuff and the calculations that were the huge slowdown. And I'm not sure about that. I mean, I've hit this
[05:17:42]  before in the past. I've, I've developed knockout apps and definitely had really slow computation, but mostly it was screw ups. Like we're, we've created
[05:17:50]  bad loops or bad patterns. Most of the time when we did stuff efficiently with fine grained reactivity, we never had performance problems. So I think, I think
[05:17:59]  this is, I think this is, I think this is, you know, the challenge here. Anyway, thank you all for joining me tonight. Um, my son
[05:18:10]  has decided to invite me to dinner. Um, my son has decided to invite me to dinner. How many others, favorite authors are continuing streaming when sushi arrives? There
[05:18:30]  you go. I'm dedicated. And I'm dedicated to get to the bottom of what's up with concurrent rendering and time slicing. But, uh, thank you all
[05:18:38]  for, uh, joining me today on this week in JavaScript. I think there's a lot of really interesting stuff going on right now. And, um, thank you all
[05:18:47]  for joining me on the stream. .