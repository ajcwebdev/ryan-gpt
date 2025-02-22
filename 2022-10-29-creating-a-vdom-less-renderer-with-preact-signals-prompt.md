---
showLink: "https://www.youtube.com/watch?v=Fp9duJd6Txc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Creating a VDOM-less Renderer with Preact Signals"
description: ""
publishDate: "2022-10-29"
coverImage: "https://i.ytimg.com/vi/Fp9duJd6Txc/maxresdefault.jpg"
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

[00:00:00]  Hello everyone. Welcome to my stream today. Just give me a second here. Still just get myself all set up. I had a long week with very little sleep. It
[00:00:14]  feels like I missed my connection coming back from Poland yesterday. So I came in a bit later, but I am looking forward to stream today because after the stream, my schedule
[00:00:26]  has me doing a whole bunch of stuff for the next three weeks. So I actually won't have a Friday stream again for, I'd like to say about, I
[00:00:35]  think three weeks, four weeks. Yeah. So, um, yeah, we're going to, we're going to see, uh, I felt it was important to stream
[00:00:45]  today for that reason. So get a chance to talk about this, uh, stuff that's happened this past week with next comp. Um, and since I didn't have
[00:00:54]  much time to do pretty much any preparation, um, I figured to just continue that conversation we're having a couple of weeks ago when I was testing preact. I
[00:01:04]  was like, can we do this? And it looked like 85% chance we can do this. So I haven't taken that any further. I have to admit. So
[00:01:13]  we're just going to try live and, you know, stumble through this and, uh, see if we can get this going. I'm just going to tell everyone
[00:01:22]  we're live. Uh, um, where are we not to remember to open up Twitch chat. Cause that's how I miss all the lovely subscribers that come along. Cause
[00:01:37]  stream yard does not forward that information through. So give me one second while I get Twitch chat open to size. cause we're just killing everyone's pre-rolls
[00:01:44] . Now that I'm an affiliate, I'm sure anyone watching is, uh, it's dealing with those pre-rolls. All right. All right. But yeah
[00:01:55] , how's everyone doing today? How would you say hi in chat? If you haven't yet a few of you in there already, we're just getting started. Ooh
[00:02:08] , sorry. Sometimes it feels like you gotta like build it up. I have to admit, I am pretty tired today. All right. I'm actually very excited to
[00:02:18]  talk about this week in JavaScript when, when we actually get to that. But I think this is going to be kind of fun because, um, we're going to reach
[00:02:28] , I I've done this a few times now where I've created libraries using solids, underlying renderer. And, uh, I think that, um, it helps people
[00:02:39]  understand kind of the requirements or what's involved in it. Yeah. Yes. I'm completely green screened into my room and I didn't spend the time today to
[00:02:49]  make sure that it was like all nice looking. You can actually see the flicker on my mic. Um, I just got to upgrade the background a little bit better.
[00:02:55]  See, do you know how this all happened? Actually, I'll tell you the truth. Um, I live in a place where my kind of office area is right next
[00:03:04]  to my kids' rooms. And it's really awkward cause certain times a day I can't stream. So what was happening was I was streaming at night and I couldn
[00:03:11] 't do that. So I'd have to like go to a different room. And then I was like, okay, well, how do I like have some semblance of
[00:03:16]  like consistency when I stream all over different locations? So I literally took a picture of my own office and use the backdrop. And then I was, I was like watching
[00:03:24] , um, Theo stream. And I'm like, I love the way that looks. And I was like, what is he doing? Well, it turns out he
[00:03:31]  has some special expensive camera or something. So what I actually did is I took the backdrop and then applied a slight blur to it with hopes that I would be able to
[00:03:38]  like produce something that looked, you know, um, semi decent. But when I don't spend the time and to get the lighting just right, as you can see,
[00:03:47]  there's probably like some, some flickering going on, but I'm not going to be in this big screen for that much longer. Yeah. Yeah. Um,
[00:03:55]  I said a little tired today, but I am, I'm going to, we're going to, we're going to do this one because I said, it's my
[00:04:02]  last chance for several weeks. Uh, although I will be on other people's streams and I'll be on other conferences and stuff in the coming weeks. It just turns out
[00:04:12]  that Friday is just not going to be a good day. That works. All right. Yeah. People joining in now. That's awesome. Um, yeah. Um,
[00:04:21]  see here. Okay. Let's get this set up. Cause honestly, all I've done so far was like took down my view, RxJRx.
[00:04:31]  Like I have a version of view that doesn't use view, just uses the reactivity to do a renderer. And I was like, pre-act looks kind of
[00:04:36]  like view. Maybe we just copy it down and start converting that project and see where we get to. And hopefully some insights that come along the way. Um, so this
[00:04:44]  may or may not work. Uh, we'll, we'll just, we'll just kind of go from there. Hello from Poland. Yes. Just saw you just
[00:04:53]  the other day. Um, uh, hello from Washington. Yeah. How's everyone going? Okay. Okay. Let's see here. Maybe I should pull up a VS
[00:05:06]  code window or something. Um, I don't even know what the name of this package. Does anyone have good ideas of what the name, this package? Um,
[00:05:14]  let me share my screen here. Um, basically I've been, I've been calling these libraries like dash JSX, but I'm sure there's already like a pre
[00:05:26] act JSX. Oh, okay. We've got people from all over. Huh? This is awesome. Um, but yeah, I mean, I guess that's
[00:05:41]  the first thing, right? Naming is always the fun part. I just went like following a convention. I went preact RX dash JSX, which is probably
[00:05:48]  like the longest and most non-descriptive name. But then I realized like if I went signals or something, it would be too long too. So if anyone has
[00:05:54]  a better name, preact JSX is available for now. Yeah. I almost feel like I want to namespace it. Cause like, this isn't actually pre
[00:06:03] act JSX. It's like preact reactivity plus JSX. Maybe preact RX dash JSX is fine. Brazil. Nice. All right. Portugal. Yes
[00:06:16] . The, the fully descriptive name that is an option. Uh, yeah, it sounds like I'm, my naming is a not terrible, terrible preactivity.
[00:06:31]  Yeah. Uh, Uruguay. Oh man, this is fun. All right. I feel like I almost need the juice or the energy. Maybe I should put a
[00:06:43]  little something in it. I don't know. Algeria, Dominican Republic, Germany. Wow. Romania. Okay. That's cool. That I love how global of
[00:06:59]  an audience and like community we have these days now because of just, you know, obviously internet, but like streaming videos, YouTube, we're, we're, we're
[00:07:09]  able to engage with people in such a wider range and all, you know, all places. So another Poland. Yeah. No, this, this, this is absolutely
[00:07:20]  awesome. But yeah, I mean, maybe I should give a little overview first of like what we're going to be doing today. Hungry people from every time zone.
[00:07:30]  Yeah, I know. So you start thinking, you're like, what time is it where you are at? Cause like, okay, it's 12 here, which means
[00:07:35]  I guess like in Poland, it's like 8 PM or something. Um, yeah, I, I am in California, California. Um, it's a Pacific coast
[00:07:48] . So, um, yeah. Uh, yeah, let's the, I guess the only, honestly, the only people who really suffer from this current time slot is
[00:08:00]  further East. I don't know if we're going to have anyone from Australia today or, uh, Southeast Asia. So, you know, we'll, we'll catch
[00:08:08]  up on, on the, on all of them later. Okay. So high level, I'm just going to pull this up again. I pulled it up in the past
[00:08:17] . I did my very first stream was actually about this topic. Uh, um, uh, I guess it was over a year ago. I was like trying to give
[00:08:26]  people an overview of my library dom expressions and for, you know, for people who don't know solid when I built it, I tried to make the core of it framework
[00:08:35]  agnostic. I know that seems kind of crazy, but I was like, I, I was very non-committal. I was kind of like, I
[00:08:43]  don't really want to decide what the best reactive system is. I don't want to decide what, you know, the best component system is or whatever. Like I
[00:08:53]  was just kind of like, I want to leave my options as open as possible until I figured out the best way to do something. Um, so I, Oh, awesome
[00:09:05] . The tests are failing. That's weird because the tests passed locally. Hmm. Anyway, um, I'll have to look on that, but, uh, essentially
[00:09:15]  I created a generic, as best I could generic render that worked off reactive systems that are similar to knockout or mob X or solid or view when they publish theirs. And
[00:09:29]  I, I even like, I've got a bunch of them here, uh, solid mob X JSX, view rx JSX, knockout JSX, um
[00:09:37] , s, which was from, um, uh, uh, SDSS JSX. I even have, believe it or not, I have an rx JS
[00:09:48]  version just for like, look, new behavior subject for your rx people out there. Here you go. It was using a library called, um, rx auto run
[00:10:00] . Uh, uh, probably can find it here. Auto run rx auto run. Uh, where is it? It's like, maybe I don't have it
[00:10:14]  right. Rx JS auto run. This is when you don't look at the, yeah, yeah. It was, it was this idea that you could take, excuse
[00:10:25]  me, rx JS primitives and get dependency tracking on them. So it kind of inverts the pattern. So like, this is still, you know, like
[00:10:36]  an observable from rx JS standpoint, but you can use this dollar sign to read from it. Um, I'm just showing stuff, but like my idea here was
[00:10:44]  that you could take basically any reactive system and build a renderer that didn't involve a V DOM, didn't involve, you know, a lot of the specific ceremony we
[00:10:54]  see and just build it purely off reactivity. Um, so that was the goal. Okay. And I think it's interesting because it allowed me very early on to
[00:11:11]  figure out what qualities I liked about reactive systems and like how to approach designing it. But it's one of those things where like over time, you're kind of like,
[00:11:18]  do I just roll this into solid and get more specific things? Like in theory, I can make solid slightly smaller and maybe even more optimal if I brought these pieces together
[00:11:29]  instead of making them generic. Um, it's, it hasn't been in a meaningful way, but, or that meaningful, but it's like one of those things that
[00:11:36]  I, you know, you always have it back in your head when you're doing performance stuff. Um, there's also the maintenance costs. Cause I, if you look
[00:11:42] , this is still under my name, like I keep this separate to safeguard the, the, like framework agnosticness of it or library agnosticness of
[00:11:53]  this, because I've done it intentionally so that we don't actually make, just make this solid. So there's potential here to take, I'd say almost any
[00:12:05]  reactive library and create the baselines of a solid like experience. Like you have to implement some of the features yourself. So I'm not talking like modern solid. See,
[00:12:14]  solid's kind of gone away from this. Solid has, um, you know, transitions and suspense and stuff. This only took stuff as far as like lazy components and
[00:12:24]  mostly client side render stuff. There's no like specialized server side rendering in the least of ways I've built it. Although technically dom expressions has all the SSR stuff.
[00:12:32]  So like someone could build all the features of solid from the same base. Um, but in any case, for the most part, I do this, um, for,
[00:12:43]  uh, for client side rendering mainly. And the, the cool thing that is any library that is built off dom expressions actually gets a few outputs. They get the ability
[00:12:55]  to use JSX the way solid uses JSX. They get the ability to use a hyperscript function and they get the ability to use a tag template literals.
[00:13:04]  So all the different, uh, templating forms also come part of this because basically you build a custom runtime for your framework that works with all the tooling that I built
[00:13:15]  for solid and the, and the thing, uh, that is important and why this has kind of an awkward build setup is I wanted the framework to be tree shakable
[00:13:27] . I wanted it so that the output, um, could easily be tree shakable. And this was a problem I had with just like importing stuff and calling a wrapper
[00:13:36]  function. Cause you need all the methods to wrap them. And then at that point, it's harder, you can't like, unless we wrapped each thing individually,
[00:13:44]  it'd be kind of tedious, like to actually like shift this in a way that the end user only imports what they import or the compiler only imports what it imports. So
[00:13:52]  I made this sort of into a build step. So you bring dom expressions into your project and then dom expressions doesn't get shipped out as a dependency. It's kind of
[00:14:01]  like bundling. We actually bundle a framework from this library. And then because we bundle it that way, any downstream bundler, when you import specific symbols, like
[00:14:11]  specific exports will only take those in because there's no like over arcing wrapper. What you get ultimately is just your framework. Okay. So that's like the technical thing
[00:14:23] . How's it going? I am a little bit tired, but we're going to, we're going to go full charge today. Whenever you have time, I
[00:14:34] 'd love you to take a look at my small library called sprinkle.js. Does it have a URL? Obviously I'm not going to go full thing here. But
[00:14:42]  is this like a reactive library? Hmm. Could be the same. Pablo, Paulo, maybe not. Give me a, give me a link and we can talk. All
[00:14:59]  right. Anyway, um, where are we going, right. I just wanted to show like that this is an agnostic solution. Um, and essentially what we
[00:15:14] 're going to be doing today is going to try and make preact work. The big thing is dom expression ex works because it does the wrapper itself. It expects you to
[00:15:24]  export a few core functions, um, to kind of build that runtime. It needs to know what an effect looks like in your library, um, et cetera. So
[00:15:34]  essentially it looks something like this, where you make a few functions that we need, like how to create a root, how to create an effect, how to create a computation
[00:15:44]  and drive value, how to create a component and some, a few other things. This might not be fully updated. And then it generates the framework for you. That's
[00:15:55] , that's the gist of it. So, um, this is actually just, I literally grabbed my view version of this and copied it across. Um, so
[00:16:06]  this is probably not going to be, let me see here. This probably like, this isn't going to run right off the bat here, but this can give you kind
[00:16:16]  of an anatomy of art. Is that the right word? Anatomy, autonomy, whatever, of, of, of, of a project that kind of looks like this.
[00:16:23]  And we're going to just port this over because the way I wrote it, a lot of the stuff is kind of generic. So I think we will only need to
[00:16:30]  implement one file here to actually get it working. But when I, when I build it, what I essentially do is I use rollup, as I mentioned, it's
[00:16:36]  bundled. And what rollup does is actually goes through and builds, kind of builds up our, our main export forever runtime, our HTML, which is our tag
[00:16:48]  template literal and our H function exports. And in our dist folder or whatever, we're going to essentially have, um, these builds that, um, with your package.
[00:17:01] json, uh, should be exported properly here though. What am I doing here? Am I even using export maps? This is probably just, yeah, this,
[00:17:11]  uh, yeah, I have not improved the DX on this one very much right now. It just says the main is in here, live and dist, but essentially this is
[00:17:21] , it's, it's a, it's a framework generator. Okay. So right now this is using like old style. So like it's, it's not using
[00:17:31]  exports. It's like literally just using nested package.jsons. There's nothing else in these folders except for a mapping back to the dist and lib folders that
[00:17:38]  the build setup is creates. It generates like two folders, one for CJS and one for ESM. So these won't get touched. And actually not let's,
[00:17:48]  let's, uh, let's, uh, sorry, someone mentioned, I need to blow up my text a little bit here so people can see it more like this.
[00:18:02]  Um, I hope that's not a Rick roll. Um, Oh, the live stream is not going good on YouTube. All right. Um, yeah, and I
[00:18:19] 'm just going to check how we doing in, uh, in Twitch land. Ooh, new subscriber. Thank you. Uh, adri. UI scrubbed at tier
[00:18:30]  two. You might be my first tier two, uh, sub. So big, big, big, big thanks. Okay. Um, okay. Yeah. I mean,
[00:18:41]  everyone's going to have mixed things. If you're having trouble with YouTube, go to Twitch, go back and forth, whatever makes sense. Um, I got started on
[00:18:49]  YouTube cause it was like dirt simple for me. Twitch actually makes me have to acknowledge that I'm actually a streamer who streams stuff. YouTube is just like press button
[00:18:56] , you know? Um, but yeah, whatever, whatever works for people go for it. Okay. So one thing I'm going to do right now before I forget is
[00:19:09]  rename these so that they're consistent, but I think most of the build stuff is actually gonna be the same. We're going to kind of trial and error this. I
[00:19:17]  don't have good tests in here. Cause literally I, this is something that I was like hacking together like three or four years ago before I even did when I used
[00:19:24]  to just do everything blind. Um, so what we're going to do is we're going to kind of mostly translate it, publish like a 0.01 version, see
[00:19:36]  if we one shot it. Otherwise we'll just update in the node modules while we try it in real time while we're building an actual app with it. I think that
[00:19:43] 's generally what I'm going to do it. So, um, if you see me make mistakes in chat, do tell me because it'll probably slow us down later
[00:19:50] . Um, otherwise like we're, we're doing this fully, fully blind pretty much, you know, the best way to code. All right. But yeah, I
[00:19:59]  wanted to get show, show everyone the anatomy of the project. The other thing is, um, there are pieces that get like copied in from the build step or don't
[00:20:09]  always get copied in from the build step. Um, that I have to remember to get it to, to actually bring in like, this is not a good set,
[00:20:17]  like a perfect setup. Like if someone comes in here and tries to build their own framework with it, they're probably gonna hit a bunch of bugs. This is not the
[00:20:21]  happy path. This is like what I use for experimentation, but we're going to go here anyways. Okay. So what do we got here? Babel core is fine
[00:20:28] . Babel preset. We do not need view reactivity. We need to replace that with some, I think that's the only thing we need. We need the
[00:20:36]  preact module and then dom expressions, hyper dom expressions, which is the tag template literals or sorry, which is hyper script and then lit dom expressions. So we're
[00:20:44]  going to use this version. There is a 0.35 out, but I've changed stuff again in 0.35, um, to handle spreads. And there's probably
[00:20:52]  still some issues there and I changed it's more complicated. So I'm not going to bother with that. We're going to build this, uh, to last month spec
[00:20:58] . Uh, so what I'm going to do, someone sharing a tool in chat, which probably would be useful. I am just terrible at learning new tools. So
[00:21:09]  that's my fear here. I feel I would probably like try and do something and then like gets, I get more stuck on tools and then I get doing stuff really hack
[00:21:17] y ways. Um, anyway, uh, yeah. So first things first, uh, let's see if we can find, uh, uh, let's go back
[00:21:30]  to preact. We were playing with preact signals the other day, right? And that's how we kind of vetted that this was going to work. Um,
[00:21:36]  I made something in code sandbox and it passed the test. Um, I just can't even remember the input. Maybe we can find it on code sandbox again. Um,
[00:21:45]  did I, did I delete my, uh, my, my, my, my thing? Testing preact signals, huh? Here we go. All right. So
[00:21:56]  this is what we want at preact signals core. Do they have new versions? Maybe I gotta, I gotta watch though. After my stream, I was talking to,
[00:22:05]  uh, I forget if it was Marvin or Jason and they were like, yeah, technically you just did the thing in here and it worked, but we're thinking of removing
[00:22:14]  that feature. And I'm like, oh, okay, well I better make this before you do, um, in my head. So maybe we'll just like lock
[00:22:22]  it at the version that, that worked just in case they start removing stuff. I imagine they wouldn't remove it on a patch version, but it's also kind of like
[00:22:28]  undocumented behavior, probably like it's kind of like hidden. So, um, you know, let's, let's just go one to one. Hey, Alexander. All
[00:22:40]  right. Let's see what we can do here. All right. So we want at preact. And yeah, I apologize a little bit for, uh, not
[00:22:54]  being more prepared, but I mean, it just, I was pretty much dead yesterday after like 17 hours on airplanes and stuff. Uh, what was it? at 1
[00:23:05] .2.1. All right. Let's get this, uh, let's get this going. Yeah. Don't worry about being late. It always takes me a
[00:23:16]  while to, to get, to get stuff rolling. Um, but, but yeah, actually, and talking about New Zealand, I was, I was saying, uh,
[00:23:29]  I, I wasn't sure if we're going to actually have people from farther, farther east. So yeah, I mean, that's out the window. I was
[00:23:38]  just like, yeah, I doubt we'll see anyone from Australia today. Well, um, New Zealand is not too far from there. So, okay. People from all
[00:23:45]  over the world. All right. All right. Okay, cool. Um, so we're installed and it looks like it actually was smart enough to build the package in
[00:24:04]  TypeScript. So we might actually be able to code blind reasonably well. Historically, I would just code blind in JavaScript and just like cross my fingers. Right. Yeah
[00:24:18] . I, I, I, I saw potential here for us to learn something along the way. Right. Um, that's, that's why I do this. Um
[00:24:26] , live coding is always kind of fun. You never know what you're going to end up with. Um, some people curse it. They're like, Oh,
[00:24:33]  every time I do it, it's just, you know, but yeah, this is not what you say before you start on a live coding thing where you're like,
[00:24:42]  I've had pretty good luck with this so far, you know, famous last words, but no, I, I think, I think even when stuff doesn't work,
[00:24:49]  you learn stuff. So as long as everyone's enjoying this and we, and you know, engaging the chat, having fun, I think, I think we'll have
[00:24:56]  a good time today. All right. Um, Ooh, thank you, hack Piro for prime sub. Yeah. I got to, I'm getting the hang of,
[00:25:07]  of switching back and forth because those, uh, the subs come in kind of ninja on the side. Okay. So yeah, we're, we're building frameworks.
[00:25:19]  I don't funny enough. I actually had a lot of fun. If, if, if you want to see me build a framework, like this is going to be like
[00:25:26]  a couple of little things to kind of massage it into like where a zone that I know like works. But, um, if you haven't seen it yet, I had
[00:25:36]  a stream a while ago on what I call petite solid, which was building like Alpine JS or like petite view on stream. And we, we actually successfully made the
[00:25:46]  framework. Um, like all the pieces we had, I was able to just drop that into JS framework benchmark after the stream and benchmark it. And it was actually like dec
[00:25:55] ently good. And we did this by like hand. I actually, if you really want to understand, like, Hey, I'm just going to build a framework today from
[00:26:03]  nothing with reactivity. I think it's a good stream because like we, we, we, we basically build the templating. We build like, we build every
[00:26:10]  piece we need in order to actually get it to work. You know, like what kind of logic goes into making a for loop and all this stuff today for that kind of
[00:26:17]  stuff, I'm going to be mostly copying and pasting and just swapping like view for preact kind of stuff. Whereas in that stream, we actually like built it
[00:26:24]  from like pure fundamentals. Um, also one of my least watched streams. So I mean, maybe that says something as well. Right. But I mean, who knows my
[00:26:34]  least watched streams seem to be about react server components. So, you know, I guess it varies. Right. Um, no, I read, I do a stream
[00:26:46]  about next where I spent the whole stream replacing, um, links with links with anchors in it. And the, the stream actually did really well. Uh, I did
[00:26:55]  a bunch of streams about react server components and like, no one cared like six months, a year ago. I wonder if that'll change now after the next announcement,
[00:27:02]  but it's, it's funny. Anyway, let's get back to it. Yes. Um, I do have Italian origins. Um, my grandfather, um, I
[00:27:13]  guess he was still born in Italy, um, uh, uh, from like, uh, from northern north, I guess, northeast side, I guess, like,
[00:27:26]  uh, outside of Venice, um, a little ways. So yeah, last name is Italian, but it's, it's been watered down for a couple generations.
[00:27:41]  Yeah. We have a few Italians in here. It looks like. All right. Um, yeah. Where to start? Yeah. So let's look at the anatomy
[00:27:52]  of the source folder. Okay. Whoa. Viewers just jumped up to something happened on Twitch. This is like the, no, nothing happened on Twitch. Okay.
[00:28:01]  Just people joining organically. It's the best kind of joining. Okay. So we're, we're, we're, where are we going here? Um, okay
[00:28:08] . So here's a letter of our project. Okay. Um, first of all, there's an index TS, which serves very little else than exporting a bunch of stuff
[00:28:17]  that we need. If you, if you look, um, most of the exports are from something called client and something called lib. Okay. And then we also have
[00:28:27]  the JSX export and the JSX export is basically the copy of whatever's latest from, uh, from DOM expressions library. And, uh, essentially we have an H
[00:28:45]  and an HTML. I'm going to start with these ones because they're very simple. These are also entry points, kind of like indexes, because all they do is
[00:28:53]  for the H version and the HTML version. I don't do the, the code splitting. You're not like I built these, not for people who are actually using
[00:29:01]  build tools, because in my opinion, the developer experience is just so much dramatically worse, but for people who like do no code and just want to like run this reactive library
[00:29:11]  and like a code pen off a CDN. So like code splitting is not happening for you anyway. Um, but you can see the, the, the underlying library,
[00:29:20]  hyper DOM expressions, and you'll see the same kind of entries and solid itself basically do like create hyperscript, pass in a bunch of helper functions that come in
[00:29:29]  from that are exported from index and then re-export it. HTML is the same thing. It just requires a lot more helpers. The hyperscript one is
[00:29:39]  almost simplistic is the best way I could put it. It's not very, uh, it's, it's, you do most of the stuff in the open. Like
[00:29:47]  you, you're the one responsible for making sure everything's reactive. So there's not as much helpers where the HTML one is basically like a crippled version of
[00:29:55]  solids JSX compiler, um, crippled in that it can't analyze the holes. It can only analyze the static parts, but it, it does do a lot more
[00:30:05]  like, you know, automate, um, some of these other things that, that need to happen. So this isn't too important, but I just want to show
[00:30:16]  like essentially how we create the other specialized runtimes. What you'll notice here though, is that essentially the core runtime is smaller. Like if you want to use hypers
[00:30:25] cript or HTML templating, you're actually making your bundle size larger. Um, not only because you're giving up tree shaking, but because we need more runtime to support
[00:30:37]  those where the compiler can just shortcut that and doesn't need like any runtime for that aspect. The compiler needs very little runtime. So it, you know, this is
[00:30:46]  one of the things I always struggle with with the H and HTML ones. It's like, yeah, sure. You can put it in a code pen, but like,
[00:30:51]  it's not going to be like, I don't know if it's going to be your main approach here. Cause it's just like harder to use, bigger, slower
[00:30:58] . It's just like worse than every possible way. So I, I'm one of the most, it's funny. Sometimes I ship stuff with solid and I,
[00:31:06]  or with my libraries and I like speak very negatively about it and people like, why do you ship it? It's like, there's going to be a use case.
[00:31:13]  And if someone tries to go do this themselves, they're probably going to have a much harder time than me doing it. And I still see value in these things. I
[00:31:23]  just, it's, if you have the option, use the build step, like unquestionably. Um, anyway, so that's these ones in the index
[00:31:33] . So these are kind of the entry of points. Um, and then this is the GSX. So that leaves us with client lib and core, and you might be
[00:31:49]  going, okay, well, what's cool. We saw from our index that there was this lib and client. Okay. So the, the reason that I broke it
[00:31:58]  up this way is that client is actually just a re-exported DOM expressions, which might be like, this is kind of weird the way that you're including the
[00:32:05]  project like this. But the reason we had to do it is because, uh, we're doing some fancy stuff where we're recompiling symbols, like doing aliasing of
[00:32:15]  symbols inside DOM expressions to replace your stuff, like the reactive framework you're using. And then we're just re-exporting it. This is how we get
[00:32:24]  the tree shaking. So I'm doing a wrapper function. We're actually compiling the library by replacing stuff in from the source code and DOM expressions, but I still needed
[00:32:32]  to kind of like have it in a place where I can reference it and same with the types. So these generally get copied in from the build process, but I copied from
[00:32:44]  view. So they were like already sitting there. Um, and that just leaves us with two, two files left. Do you ask me if there's any, um
[00:32:53] , um, questions so far, though? I, I really haven't shown much. It's still just technical stuff, you know, kind of as a preamble
[00:32:59] . Yeah. That's a good question. Um, good primer from the basics standpoint. Uh, cause I, I talk about a lot of my articles and even my
[00:33:14] , sometimes in my like intro to SSR articles, I talk about these, but I don't think they're talked about in, like, I still kind of don't
[00:33:23]  give them the most basic treatment. I give them the treatment in the, in the context that I'm talking about. I wouldn't be surprised if something like patterns.
[00:33:31] dev talk about this a lot for people here in the stream who just want to kind of get an idea. If you're not as familiar with these terms that I'm throwing
[00:33:39]  around, um, code splitting is the process of taking a single bundle and splitting into multiple, multiple bundles. And you're like, okay, well, it's,
[00:33:48]  it's a little bit more complicated than that, but like, what's the point? Well, sometimes you don't need to load all the JavaScript at once. So the
[00:33:54]  most common use of code splitting is splitting between pages. What makes things complicated is what if both pieces, or if you have like 10 pages, all use the same code
[00:34:05] , you don't want to duplicate that code and all 10 pages. Like, like there's some things do matter that they're singletons and whatnot. So, um
[00:34:14] , essentially what you end up with is, uh, shared chunks or vendor chunks. Um, right. I mean, this might be worth visualizing for two seconds here
[00:34:24] , but you know, this is the chart I didn't publish. Some, someone was suggesting that we merged Svelte and solid and, um, and maybe we'll
[00:34:33]  talk about that later. And I was going to like, I don't know. Um, I don't, I don't think solid and Svelte have a ton
[00:34:40]  in common actually. Uh, so anyway, that's why frameworks aren't all the same framework. Um, but yeah, so you start with bundle, you know,
[00:34:53]  this is your app right at the beginning and you're like, okay, and inside your app conceptually you have pieces, right? Like, um, how do I want
[00:35:04]  to draw this? Right. You have, you have a bunch of these ones. I mean, I'm just I'm just going to copy a few of these.
[00:35:16]  Let's pretend we have page one through four. These could be components. It could be whatever the hell we want. So let's just do this. Let's go one
[00:35:25] , two, three. And I'm sorry for anyone who's new to my stream. We get sidetracked all the freaking time because learning is important. Um,
[00:35:43]  so and the, the, the fun part is, um, there might also be some, I don't know, should I use different shapes? Uh, let's see
[00:35:55] , maybe some circles. Yeah, let's do some circles. We have some pieces like this CV. Right. And what ends up happening in our pool of our app
[00:36:11] , that's full of a bunch of stuff. You're going to, you let's, let's label these. Okay. A, B, C, and D
[00:36:22] . Okay, sweet. And then like, I mean, things get a little fun, because sometimes like your situations where one depends on A and B, and then two just
[00:36:36]  depends on B, and three depends on C, and four depends on D. But as it turns out, um, D also depends on C. And, um,
[00:36:54]  actually let's make this one all D also depend on B. Okay. This, these are real dependency graph kind of problems. So the problem is if I, if I
[00:37:08]  conceptually pull one out and two and three, four, so like we're in a new world where, we're essentially, uh, uh, this is always the
[00:37:18]  fun part with this, like, can I select these without the other ones? Yeah. Can I do this? Yeah. Sweet. So if we, if now like these
[00:37:32]  are the top level things and they're out here with code splitting, the whole thing is like you'd go, okay, A is like a bundle A over here.
[00:37:42]  And there's different ways you can do this, but okay. A, like you kind of look at the shared dependencies. It might be like, like depending on how many
[00:37:53]  things they're used on, you might like put a few things together and be like, okay, like since, um, like B is used by almost everyone. Um
[00:38:07] , I'm going to, I'm going to like, yeah, you might do like, you don't want too many chunks, but you might like, let's make
[00:38:15]  a few of these. One, two, three. Let's see what's going on here. Like since D relies on C, like you could see how there's different
[00:38:24]  combinations of things you might want to do. Like you might be like, like, you, you can't actually in this case, compress any of these into one,
[00:38:31]  two, three, four very easily because of, because of the fact that they're, they're needed in other things. Like because D depends on C, you can't
[00:38:38]  just pull C into three. Cause otherwise you'd load all of three and you end up with like this kind of terrible mess. Um, so like one strategy that you might
[00:38:49]  do, sorry, I'm going to change my thing is just literally look at everything that shared and just go like, like this, this, this sucker here is the
[00:38:58] , uh, the vendor chunk. You, this is, this is very common back in the day, which is the good old A, B, C, D, right
[00:39:06] ? Like you might, you might just do this, right? But alternatively you might just go, okay, I'm going to package C and D together. And then
[00:39:16]  I'm going to package B and then we package A. Um, so you might, you might, and because you might, yeah. So what did I say?
[00:39:27]  I went, I go A and under this actually, A isn't used by anyone else. So actually we don't need A, sorry. We're going to stick A
[00:39:39]  in here actually. Yeah. I, I, I did draw this, it this way for a reason. We're actually going to do this. I'm going to
[00:39:48]  go A. A is actually going to go inside one because we can, we can keep these together. We're going to make a B out here. All right. B
[00:40:06] . And then like there are different strategies. I'm not going to pretend like I know exactly what gets done for you in all cases, but like something like this is
[00:40:19]  not unreasonable where you would go. Okay. So you depend on this, you depend on this, you depend on this and you two get these two, right? Like
[00:40:36]  something like this. And essentially, even though you made four logical splits, you actually end up with six chunks. Okay. The, there, there is, you know
[00:40:49] , you, you might go, Oh no, I actually want them all together. So you'll only make five chunks, but then you'll be loading code. That's
[00:40:56]  not needed. If you only go to page four or something. Right. But essentially your bundler is doing this kind of stuff for you. That is code splitting in
[00:41:06]  a, in a nutshell. Does that make sense so far? Okay. We get, we, we get on code splitting. All right. I'm just catching up with
[00:41:16]  chat here. Um, okay. Uh, yeah. Anything else going on? Any new subs coming in? Thank you. Fisher zero, zero, five, five with
[00:41:29]  the tier one sub. And, uh, yeah. How are we doing? Also, I also, I'm reminded at this point to tell people to press like on the
[00:41:38]  YouTube video. Apparently this is something that one has to do to get views. I'm taking this straight out of other streamers playbooks, but if you haven't yet
[00:41:46]  press the like button, thank you. It helps me a lot. All right. So let's, uh, let's keep on going. Okay. So what do we
[00:41:52]  call this one? This one's called, uh, code splitting. All right. Code splitting. You're a machine. Awesome. Okay. And the other question was
[00:42:10]  tree shaking. Tree shaking, um, is not too bad, but I mean, I wonder if I need a scale draw for this one, because tree shaking is actually something
[00:42:23]  that's relatively visible to see when you look at a package. Um, cause all tree shaking does at its core is so you export a whole bunch of stuff here, you
[00:42:35]  know, like all of these, these, these things that's like our index file. Like we export like a whole bunch of symbols and you can export star, but you
[00:42:44]  export a whole bunch of things. All the core tree shaking is, is if your app only imports certain symbols and you've set your modules being side effect free, then
[00:42:54]  it knows that the code not related to those symbols just goes away. So like, for example, if, I mean, I don't know why this would happen, but
[00:43:04]  let's say I export create component in solid, but you don't use a component in your app. You literally just, um, top level pass in a function that
[00:43:13]  renders a div like a counter app and you never actually create a JSX component. Well then that, because the compiler won't actually import that statement, that function never
[00:43:25]  needs to be bundled with your code. Right. I don't think I need to visualize this one. Like it literally symbol not imported drops off the, the part
[00:43:32]  that gets really cool with tree shaking, um, which I showed way back in a long stream long ago, I'd, I'd have a hard time finding it myself is
[00:43:39]  that bundlers can do more than tree shaking. They can do something called dead code elimination. So if they can see stuff that can be statically analyzed that can actually
[00:43:48]  run like, um, like pretend you have, like, it doesn't matter, but like pretend you have, like, for some reason you have a constant, like is
[00:43:56]  server equals false somewhere. Right. Uh, uh, and then somewhere in your code, you have like, I don't know, some functions like do, do stuff.
[00:44:04]  Right. Okay. We're doing some stuff. And then in here, you're like, if is server, you know, return else, I'll make it if
[00:44:18]  else to make it really clear, but usually I write code differently than that, which actually funnily enough, Primogen noticed in his weird code analyzer thing, but
[00:44:28]  you know, it's like server stuff, client stuff. This is actually a really cool demo, the show on rollups, uh, repl, but I'm not going
[00:44:37]  to do that right now. Cause we're, I'll get too distracted. But what I want to say is like, if you have a constant and you, I mean
[00:44:44] , you can kind kind of tell this as like thing, you're like the bundler is smart enough to be like, okay, is server false. Okay. Like
[00:44:52]  it'll just like, even in the middle of one of your components, it will do that. Right. But what gets interesting is if you have tree shaking, like obviously
[00:45:08]  this can never change. Right. But, but like, there's no code here when you analyze the bundle to know this could ever change, but pretend you had something
[00:45:18]  like something like this, like enable server or something. Right. And then it's like, is server equals true. Okay. Because of how smart tree shaking is,
[00:45:32]  if you never import enable server, it's impossible for is server to ever become true. So the bundler still just goes, right. But if you do import enable server
[00:45:47] , then it ships, uh, both sets of code because both values are doing it. So based on tree shaking, it can actually be smart enough to rewrite your code
[00:45:55] . Um, um, based on like these feature checks, I use this inside solid all the time. This is why if you make hello world, you don't, and
[00:46:03]  you don't get transitions and suspense shipped, even though that stuff weaves through the core of solids, uh, stuff. The, that's why the bundle size is
[00:46:12]  way smaller than bundle phobia will tell you because the combination of using tree shaking with, um, dead code elimination is super powerful. And, um, obviously for is server
[00:46:23] , this is kind of a bad example. Cause what we do with solids, we have two different run times, um, like separate JS files that we send, and we
[00:46:29]  just set it to false and true in those. So then in your code, you get this thing. Cause basically is server is never going to change. Like when you're
[00:46:35]  running in the browser is server is false. If you're running the client or sorry, if you're running on the server, is server is true. That never changes
[00:46:43] . And the code splitting just works, but I wanted to show this like dynamic aspect of it too, that leverages tree shaking super powerful anyways. Anyway, um, yes
[00:46:54] , functional over imperative. Yes. OOP is traditionally very hard to treat, shake and dead code eliminate in the same way stuff like inheritance pretty much makes it like, uh
[00:47:03] , like not a thing. It's much, much harder. That's why frameworks like angular have actually done like a lot of really interesting optimizations and stuff on top
[00:47:11]  of the normal bundlers to try and get it there. Cause they, they know based on like the way, like say angular works with classes that it's safe to do
[00:47:18]  certain things and you can eliminate that code. But for the most part, um, when we're just like using raw bundler stuff like rollup or Tursor and
[00:47:27]  all these things, it's, it's those kinds of rules, um, which lend much more to functional programming patterns. Okay. Whirlwind there. We,
[00:47:37]  we got sidetracked. All right. I'm just catching up here. Oh, so many, so much chatting going on in the chat. See, luckily it's
[00:47:49]  not like too fast. I can actually scroll back and see what people haven't seen yet. Um, yeah. Okay. I want to understand this whole import chunking
[00:47:59]  caching. Yeah. I mean, there's incremental builds and like, there's lots of different ways, you know, you can break up this work and then get
[00:48:06]  better dev, um, stuff in certain situations. And I don't know. Caching is such a funny thing because caching is like the last layer. It's like
[00:48:16] , okay, we've made things as fast as possible and it's probably pretty good, but in a couple of cases, it's not good enough. We're going to
[00:48:24]  cache. That's the way I look at caching. Caching is not like a performance, like, winner thing. If, if, if you show, if
[00:48:30]  like showing performance wins off caching benefits is kind of like, uh, I don't know, like, it's, I mean, it's a thing, but it
[00:48:38] 's like also like, it's the, like, caching is tricky, but it's tricky in like a complex, like manual sense. So I guess if you make
[00:48:45]  that easier for the developer, it's worth pointing out, but it's also kind of like, um, like it's less interesting to me than the algorithmic sense of
[00:48:54]  it. Like, how do you make something actually faster? Um, caching is like a whole nother layer of problem. Uh, all right, here we go
[00:49:05] . Gotta have a command for your channel. Yeah. I don't know anything. People sharing links that I'm not going to click on Astro's favorite JSX framework
[00:49:16]  author. Are you guys talking about me? Thank you. Um, just catching up. All right. I tried to remove two bundles in solid in my last stream
[00:49:30]  and I failed. Um, I'm not sure what that is. Any link between TSC type checking of JSX return type and bundler dead code elimination? Um,
[00:49:39]  not in anything that I know of. I mean, I type script dead code eliminates their types, which gets us into trouble sometimes. Like with JSX, we're like
[00:49:49] , if we're using variables in a certain way that they don't recognize, that's why like solid's directives are problematic, but I don't think they do much
[00:49:55]  else beyond that. Oh, Astro's on YouTube. That's awesome. You guys should check that out. I'm not going to lie. I don't
[00:50:11]  even know what the title means. Okay. Okay. Uh, I did cover this a little bit earlier on, but high level is reactive systems are powerful enough change system in
[00:50:24]  themselves. Like Preact has released something called signals that it's possible to make a framework that doesn't use a virtual DOM purely off this reactivity. That's like
[00:50:34]  my, that's what solid does solid JS, the framework I wrote. And I was like, okay, well, can we take preact signals and make like a solid
[00:50:41]  JS out of it? That that's, that's the, that's the question here. But the tricky part is like, this takes a lot of prior knowledge to kind
[00:50:47]  of kind of get there. So, uh, you know, people ask questions along the way and we all learn together. So that's what's going on here.
[00:50:55]  Yeah. Pick a Rick demo. Yeah. Are we baiting Rick rolls now? You guys just want me to click on links and, and, and get some, uh
[00:51:06] , what is it? Sean Astin anyways. All right, here we go. Uh, yeah, where, where, where, where's everyone going here? Also,
[00:51:17]  thank you for tier one, uh, sub Eureka.dev. Um, hopefully I don't miss anyone. This is why like actual real streamers have like
[00:51:25]  dashboards and stuff. They'd like, they've set stuff up. I'm just like trying to backtrack through my own chat. Okay, cool. So we were
[00:51:33]  getting somewhere, weren't we? We were, we were getting to a point, sorry, just gonna slide this off, make sure I didn't like mess with anything.
[00:51:40]  Although I can tell by the beautiful green bar on the side, but this is how much I don't distrust tooling. Okay. So, um, we're showing the
[00:51:48]  exports talk about tree shaking, code splitting. Um, and we narrowed it down that this client I told you is basically what the DOM expression codes exports. And that
[00:51:59] 's why we export star, which leaves us only with lib and core and lib is probably where we're going to do most of our work today. Lib is where we actually
[00:52:11]  implement all the code. And it's about, I don't know, 300, some odd lines of code to get the specific implementation. And the key part is core
[00:52:20]  exports from lib, the specific stuff that DOM expression needs needs in order to, um, generate the specific like web package, like in solid solid JS dash web, the specific
[00:52:33]  package for the compiler, um, which I ended up just wrapping all into the same thing for these simple builds, uh, essentially is this extra export for core. Um
[00:52:45] , so yes, this is a very strange in convoluted setup, but this is what's going to allow us to really just focus on implementing these functions from lib in
[00:52:55]  order to create our custom renderer that that works like solid with preact. Am I allowed to Theo post in here? I'm not sure what that means, but
[00:53:08]  probably yes. Use solid astronauts. It's good for your health. Yes. Sorry. I didn't, I didn't highlight the right tweet. Probably. Yes. But
[00:53:18]  you know, we'll see. Um, yeah, a lot of, a lot of astro people around here. We got fuzzy and astro and I thought I
[00:53:27]  saw someone else a little earlier. Anyways. All right. Let's get started. This might actually be shorter than we think, but probably not. Probably we're going
[00:53:42]  to break stuff and then we're going to be like, Oh damn. Okay. So first thing is we need to get, get our reactive stuff in from preact that
[00:53:51]  we're going to need. Luckily for us, preact has so few exports that this is going to be actually probably a lot easier than we're what we're doing
[00:53:59]  here. So we will, I'm going to leave that for reference for a second, but what we need to import from, um, that preact signals core is we
[00:54:09]  need a few things we're going to need. It looks like we're going to need effect and we're going to do it as P effect, just not to confuse because
[00:54:18]  we're going to need to make our own effect. Um, we need computed stop is when is it computed? Yeah, that's fine. Don't worry about that
[00:54:28] . Stop is a views way of doing untrack and pause tracking. Where is that? No, stop is release. Let me look at, let's look back at
[00:54:37]  our reference, um, uh, testing, preact signals. They don't have anything specific to wrap. So they just call dispose. So that's going to be a
[00:54:46]  difference that we're going to have to, we're going to have to account for, okay. Let's get back here. Okay. So don't have stop shallow
[00:54:56]  ref. So we need signal is essentially that we're just going to call it. I think it's that's preacts equivalent. They call their signals shallow ref. And
[00:55:08]  then there's some type stuff here. Is there capital signal as a type? Oh, there is look, this is just straight for straight. Okay. So now we
[00:55:18]  need to do some stuff. Okay. So first thing I've got some types here for like the context API. We want, we want our reactive system still to have a
[00:55:29]  context API. I think we can keep this shape. This will teach you a bit about solid. What we go to, because the trick to these reactive renderers is they
[00:55:37]  actually use the reactive system as the contact system. They actually look up the owner of something that I call the ownership graph, um, free activity. Solid. Oh,
[00:55:49]  it's interesting. Solid is discussed a lot in love in the rest community. It is awesome. Yeah. I, I talked about this a bit last week. I'm
[00:55:59]  very stoked about what the rest community has been doing because do you know what happened? Rust community comes out and they're like, yeah, we're going to make some
[00:56:07]  wasm libraries and we're going to like, you know, make UI things and, you know, rust is fast. And we, we know it won't be as
[00:56:13]  fast as like the JS stuff to begin with, but you know, because of like the, the dom bridge and stuff, but you know, people started making libraries, but
[00:56:21]  what did they do? They, they went and they looked at like react and they're like, yeah, reacts, a good UI library. And they all made react clones
[00:56:26]  and rust. And then the performance was like, yeah. And everyone's like, okay, well, I guess wasm isn't just not good enough for rendering the
[00:56:35]  dom, but you guys found solid, you know, starting with Sycamore and then a few others, uh, you know, the last year or two, and we
[00:56:41] 're now talking about a very different story where, yeah, sure. Load time. Like maybe I don't want my, my, my, my e-commerce site,
[00:56:50]  um, you know, to use rust framework for like rendering to get my fastest page load times, but like for rendering and updates, like, you know, it's
[00:57:01] , it's, the performance is really up there. And I, I think a lot of that came from, there's a lot of, uh, communication overhead is what
[00:57:10]  kills wasm more than anything. And when we keep things nice and tight, so to speak, we can get better performance, um, today. So I don't know
[00:57:19] , maybe a wasm, uh, uh, uh, uh, VDOM library that's fast will be a thing in the, in the future. But right
[00:57:29]  now it looks like if you want to get speed out of your wasm, um, UI frameworks, you're going to build it basically like solid. And what's interesting
[00:57:37]  to me about that is wasm often gets compared to web workers. So I'm wondering if this means that some of the things that people have found prohibitive in the past
[00:57:45]  about web workers to do UI and those kinds of things are actually just because they all tried to use VDOMs. I don't know. That's not something
[00:57:53]  that I'm going to personally look into. I'm pushing the envelope in other places, but just food for thought. Maybe the problem is the starting with the wrong base assumption
[00:58:01] . A resumable Rust framework. I mean, that's, that's like, that's an interesting prospect Michael. Like, because the, one of the reasons
[00:58:19]  that we are, um, using JavaScript everywhere, um, is because you need in the browser. So in a sense, and we need, it's a purely compile time
[00:58:30]  approach. Can't get us a hundred percent of the way there. If we want to optimize for these cases, like hydration stuff, it's, it's way easier
[00:58:39]  to run both sides. If you're using JavaScript, which is why I've been saying for a while that like, I'm sorry, people who like other backend languages,
[00:58:46]  if you want the best performing site, you want to use JavaScript, which just seems kind of weird because you're like, well, we know it's slower on the server
[00:58:55] , but the impact of the network costs and the client costs, which are like not in your control are orders of magnitude more impactful than your server costs generally. And your
[00:59:08]  server costs often can be solved with scaling, uh, uh, sorry, horizontal scaling. And like, like basically there's, there's solutions to those problems, but
[00:59:22]  much harder solution to people having slow devices and networks. But if Wasm is possible and the pieces get small enough, it's interesting. I don't know. I guess
[00:59:32]  the load up time is still going to be the, the, the, the, the, the hit, but it is interesting, right? Cause like this is, this
[00:59:39]  is a, a thinking or a place where you might want to like think if the traditional thought trade-offs become less relevant anyway, that's awesome. Yeah. I
[00:59:54] , I'm people keep on trying to convince me to learn rust. Um, I I'm just like an old JavaScript old man. So like I do it, it might
[01:00:03]  not be able to teach dogs new tricks, so to speak. Yeah. Yeah. Yeah. Yeah. Like there's a huge bundling and yeah. Like that being
[01:00:29]  said, I think there's different ways to do resume ability. Um, and I think there's, I think things aren't, I, I hung out with Mich
[01:00:39] iko Hevery creator quick, like pretty much all week. Maybe we'll talk about that later, but, um, uh, a lot of idea bouncing back and forth.
[01:00:48]  Um, and as usual with me, when, when that happens, I usually see more opportunities rather than less. It's not about doors closing, about doors opening new ways
[01:00:58]  things are possible. And, um, yeah, we'll talk about that later. Okay. Okay. So where was I? Okay. So a couple types here,
[01:01:08]  it's important to know that context basically gets jumped onto it, but the biggest thing that you're going to see in a reactive render like this, that isn't in
[01:01:21]  almost any reactive libraries, except for like solid or SJS or like newer ones that have been learning from solid things like VOBY or whatnot, is that there's no
[01:01:33]  concept of ownership in the reactivity system. And some, some people who've come in more recently or have like, this has been like a surprise to them because like,
[01:01:42]  like, this is such a core part of how solid works and like how this kind of renders works, but most reactive systems don't actually have ownership. Vue
[01:01:51]  actually added something for kind of ownership, um, like effect. I can't remember. It's called the effect blocks or something like some kind of like root block type thing
[01:02:00] . But, um, even at the time that I made this review, they didn't have it. So it's, it's not very common pattern. So I
[01:02:12] 'm, I'm, I'm basically, uh, gonna have to make this system on top of the current reactive system for this, all the work. That's, that
[01:02:24] 's the crux of it. You should join in on prime teaching Theo Rust. Yeah. I mean, if they'll have me, I'm sure I'd, I
[01:02:32] 'd consider it. Um, but okay. So that's, that's the, that's the main thing we're going to accomplish here. We're going to like
[01:02:44]  fake the ownership system that solid has with the other reactive library. One thing that we learned in our investigation at Preact though, was that Preact doesn't have an unt
[01:02:55] rack function, doesn't have a way to do this on track other than like, uh, like a sample per observable. That is not going to work for
[01:03:02]  us conceptually. Like, like we're going to have to pray. Like this is the one piece that's missing. Um, and again, I, I understand why
[01:03:12]  it's missing people on track in a reactive library is like not putting the, like choosing not to include something in the dependency array in react. Like ES Lint is
[01:03:26]  going to shout at you, but sometimes it's exactly what you want to do. And it's very important when you have nesting and stuff like functional programming patterns, like
[01:03:35]  you have to think about something like if you make a map function, do you want any downstream subscriptions to actually trigger the whole map to calculate, or do you want to handle
[01:03:45]  independently? Untrack is very important when you start trying to like apply like low dash or RxJS patterns to signals. Like it's, it's,
[01:03:53]  it's, it's, it's essential, but even very well-versed, um, framework authors probably haven't gone down that path. Like I, someone was
[01:04:03]  trying to convince them to add on track to view reactivity. And Evan was just like, no, like straight up. No. And like they low lying primitives
[01:04:15] , which are error prone perhaps to allow me to do it at least. But like, there's a certain thinking, like it opens up a door for things that can like
[01:04:23]  not track and not be explainable to people. The problem is sometimes at the call point, you can't possibly know what needs to track or not on track. I,
[01:04:33]  you know, like on is not sufficient, you know, like watch is not sufficient. So yeah, me as a purist kind of just like, that's kind
[01:04:42]  of not acceptable, but you know what we're going to see how far we can go without on track today, because I think the only place that's going to bite us
[01:04:51]  is on array loops. So we're just going to do this. Untrack is just going to be a no op. Essentially. We're just going to go on
[01:04:59]  track, call the function you pass to it. If you aren't familiar with untrack anyone, essentially, it gets used like this, you go on track,
[01:05:05]  and then you go like, you know, like a signal in here, like, I mean, use pre access stuff. So let's say untrack. What am
[01:05:14]  I going to count dot? Don't count dot value. Plus plus, right. And now when you access count dot value, it's not going to track it.
[01:05:30]  Right. You can also do this, obviously, right? You can also go value dot or count dot peak or something in pre access syntax. But the problem is untr
[01:05:39] ack lets you like untrack the whole block, it acts as both a peak. And it acts like, like a, like a, like a, like a whole
[01:05:49]  block type thing. So peak is not sufficient replacement for untrack. Right. Right. The reason the dep array causes problems in React is because it's like the
[01:06:08]  default. Like you have to be like, I'm coming in and I need to think dep array. Whereas reactivity kind of reverses it where it's like, okay
[01:06:15] , you come in, don't worry about it. It'll work until you want to like go, okay, I want to do something a little fancier. So like
[01:06:21]  the need for considering dependencies and updates doesn't, it's like inverse. It's like an, it's analogous, like the way, uh, say mechanical and
[01:06:31]  electrical engineering or systems are like, they have the same kind of concepts, but like in a slightly different way, like there's like, there's a direct correspondence between how
[01:06:42]  something is React or how it is in a reactive library. But it's like, it's just a little bit different. And I think like, this is probably the
[01:06:49]  challenge with hooks, right? Because now suddenly people, everyone has to be aware of the dependencies and like, think like that. Where in reactivity, it's more like
[01:06:56]  lazy. You're like, okay, don't worry. Just like, as you write, know that it'll track and be dependent. But if you don't want it
[01:07:02]  to, you need a little bit of extra consideration. So I mean, that can trap you in a different way. There is considerations there. I actually think React's design
[01:07:08]  is right for React. I think it's very weird to remove the dependency arrays from React because React runs top-down. So when you get somewhere, you should be
[01:07:18]  asking the question, Hey, did something change? What, what is it like? It's a question you ask like this. It's different with a reactive library where like
[01:07:26]  the, the hooks change, like the function, like they're kind of self-contained there isn't like this top-down flow to it. So like, I
[01:07:32]  think, and this is the actual challenge with a React compiler. Like if you suddenly go, okay, yeah, we'll compile away the dependency rates. Just don't
[01:07:41]  worry about it. Like, well, you can't think about it top-down in the same way or not as easily. Like you're looking at the expressions and you
[01:07:50] 're like, does this run or does it not run? I don't know. Especially if you don't have primitives for state that make it clear that you're tracking
[01:07:59] , I think it becomes a messy zone. Like, I don't know. We'll have, we'll have to, we'll have to see about it. I mean
[01:08:05] , it works for Svelte, but Svelte teaches you conceptually a different model. You're not going dun, dun, dun, dun, dun,
[01:08:11]  running through this code top-down imperative style like you do in React. Maybe React will teach people a different model, but in actuality, it's not that model.
[01:08:19]  So I think that that's a bit of a mind warp. Well, I will say that reactive systems tend to over-memoize. People over-memoize
[01:08:34]  with the depo-ray, because yeah, like, they're like, okay, I'm just going to lazy, I'm just going to make sure I put
[01:08:39]  everything in it. Like, make me a, make me an ESLint rule that automatically adds all the dependencies. Like that, that kind of thing, or like a
[01:08:46]  compile thing. Like, if you got, if you got to the, that point, then you got to start questioning things. But I think actually reactive systems are more guilty
[01:08:55]  of over-memoization because they just do it automatically. I think this is one of the biggest things I've been trying to kill with solid is get people away
[01:09:03]  from over-memoization. I'm just like, yeah, just call it a function. Just do like, you don't have to get so ceremonious. This
[01:09:08]  is one of the problems I have with dot value, because then suddenly people are looking for dot values. Like, they're looking for computeds. Not everything, or like
[01:09:15] , say, like pre-act signal style, where you're like, if you want to make that expression still only fine-grained update, you have to pass the
[01:09:21]  signal all the way through. Like, not the value, but the signal. And then if there's an expression there, you actually have to wrap it in a computed
[01:09:26] , otherwise you don't get the advantage. And quicks like this too, actually, now that I think about it, but they don't have derivations yet. So
[01:09:33]  like, they just plain de-opt if you don't pass a straight signal through. Like, essentially, like, this is, this is awkward. I'm, in
[01:09:46]  my opinion, people will realize this. See, the reason Vue gets around this a little bit is because they're not trying to do these kind of like little micro
[01:09:55]  optimizations like pre-act or quick are doing here. They literally just like optimize their VDOM to kind of be like, I'm a VDOM that continues
[01:10:01] , continues, considers signals. And like, they do different sorts of optimizations, but like this, like very specific, like if I'm precisely signal optimization combined with the
[01:10:13]  mutable dot value thing creates this over-memorization problem. Anyway. Yeah, I thought about this. I could export my own signal and if I need to
[01:10:30]  do this, we will do this. But the problem is then you'll have to use this library signal, right? Essentially we, what we do here is we like put
[01:10:37]  a global on track and then a global track. And then every time we call our dot value getter from our signal, then we call peak instead. If we need to
[01:10:47]  go there, we'll go there. This is a very good suggestion though, Brendan. Oh yeah. Someone wants the link to the one where I actually kind of like
[01:10:57]  built, not, I built it from like solids reactivity, but let's see if we can find this on YouTube right now. It should be, uh, what is
[01:11:07]  it called? Petite solid, something like this. Here it is. Petite solid. Let's build a micro view library. This stream, um, is,
[01:11:16]  uh, let's get rid of that timestamp is just like purely like just thinking through the, the, oh, sorry. Let's just share. Actually. I was
[01:11:26]  like taking away the short URL. Let's post this in both places. All right. There we go. Okay. Cool. Cool. All right. Hopefully that came
[01:11:41]  in both places. You guys can all see this and I hopefully haven't missed any fiber. Oh, okay. Yeah. We Fisher over there. We already caught that sub
[01:11:49] . I'm hopefully haven't missed anything else in, in chat. All right, cool. All right. Let's keep on going. Okay. So, um,
[01:12:01]  why am I not seeing anything because I distracted myself? Okay. Let's, uh, let's do this. Okay. So yeah. Uh, anyways, as I was
[01:12:12]  saying with, uh, with, with Brendan, um, the, I think that's a good approach and we might need to go there if we need to for now,
[01:12:20]  let's focus on, we'll just leave on track as like a no op essentially, or what's it called? I depotent function, which like literally you
[01:12:28]  pass the function and calls the function and move forward. Okay. Global context, global context is, um, uh, what we got here. This is, this is going
[01:12:38]  to be our fake for our root. And the reason we have roots is in solid and render is like solid. You don't have to worry about nesting effect disposal.
[01:12:47]  We register them. So when you create an effect, it goes, Hey, is there a parent? If there's a parent register me with your parent so that when the
[01:12:54]  parent reruns, we unregister them, this gets rid of all the nastiness because in most, um, reactive libraries, if you need to dispose an effect
[01:13:02]  or like make them like on the fly, you're, you have to manage that. I, I, I did that for a very long time and SJS is what
[01:13:08]  opened up my mind to it. So we're going to create something called a root function. And what the root function does is it sets the global context, which is
[01:13:16]  a list of disposables and then whatever the owner is, is basically, um, the existing global context. That's the idea. And then you see, we're using
[01:13:28]  on track all over the place. So that's why I'm like trying to like, I'm hoping that we don't have to do too much here. This is making
[01:13:35]  sure that see, here's an example, right? It's possible that, um, someone calls a dispose in a tracking context and actually subscribes to the things.
[01:13:47]  Like if someone's like reading reactive values inside, um, a dispose function that could cause like re-renders and stuff. So, um, let's, let's
[01:13:56]  just be optimistic that this will work and keep on going. Okay. So what this return here is, is, is, is basically a function which, um, disp
[01:14:06] oses, uh, is basically, it takes the root function you pass in. This is the same syntax that solid has. It calls a function with a dispose function. So
[01:14:17]  it's actually the roots first argument is a function you call with dispose. So when you use root, it looks kind of like this. It's like root. Um
[01:14:24] , people don't use this API installed very often, but it's the core, like our render functions call it, you get this. So this, I know this seems
[01:14:34]  weird, but a little bit, but there's a reason for this. It's because root actually returns back the value, like, like div or whatever, like it returns
[01:14:43]  that back out. So use dispose to actually dispose the root. So that's what function you're actually seeing here. It's actually this function here goes to the list of
[01:14:52]  that of disposals that are on the global context and iterates and goes like, let's call them all. Right. And then free up the list. Okay.
[01:14:59]  Cleanup similarly is, is like on cleanup in solid, which is it registers a function, looks for the global context currently and pushes that function onto the cleanup. So this
[01:15:12]  is how you register like cleanups question in the chat. Do we have, um, yeah, I, I, I can't get into this right now. How
[01:15:27]  hard is the modifier of the past components across the worker boundary? Probably, probably hard. I haven't looked into it before. I haven't looked into it. Thought
[01:15:40] s on new devs, learning patterns in vanilla JS. I mean, I use vanilla, uh, sometimes as like a teaching tool. I think it's not a new
[01:15:48]  dev thing. I think it's like a, when I'm ready kind of thing. I think it's like learn the basic JavaScript, learn that the framework abstraction,
[01:15:56]  then, then learn what goes underneath the framework abstraction. That's when you come back to me, essentially. That's what I do. I, I, I, I
[01:16:03]  lift the, I lift the hood or so. Okay. So cleanups looks good. It looks like it should just work. What is effect? Well, effect,
[01:16:17]  if you look at it, it is actually creating another one of these contexts. And then it's also setting up a cleanup function and then stop C. So we don't
[01:16:25]  have stop in this. I think our C is just going to, from preact is just a function. So I know why did I call it C? I'm not
[01:16:34]  sure why I called it C. I called it because that it's the computation, but in our new thing, I'm just going to call this dispose. And we
[01:16:41] 're, we're going to go, if it's the final, we're going to call dispose. Okay. And what is dispose? Well, it's what we get
[01:16:48]  back from our effect or P effect. I'm going to call it dispose, which means I need to, where the hell did, uh, C come from anyways. Like
[01:17:04]  I was defining C somewhere. Wasn't I? Oh yeah. Sorry. Other thing you got to get used to. This is why Primogen, um, said my
[01:17:11]  code is really compact. I wrote this years ago, but I'm a coffee script dev. So you're probably going, what's on this is comma operator separated. So
[01:17:21]  what you're actually seeing is these are all declarations, const, this const cleanup function, const dispose. I apologize for people about clarity here. Um, I just
[01:17:32]  really hate declaring variables. Um, I don't mind anymore, but it used to bug me. So, um, this, this kind of thing, but what's interesting
[01:17:43]  is it leads to code that is more declarative. Like it's like, you kind of like see the declarations and then this is the only code that actually runs
[01:17:52]  when, um, when you create the effect essentially, um, which is funny. I mean, technically this runs too, right? So you create the preact effect,
[01:18:01]  which I'm going to explain in a second here, which calls our cleanup function, right? Which cleans up our, like, basically we need to mirror the normal process.
[01:18:12]  If you've seen a reactive library, every time it runs, it cleans out its dependencies, then it executes the code tracking the new dependencies, right? And it
[01:18:21]  kind of pushes itself on the stack and pops itself off at the end, so to speak. So what we have to, because we're creating our own owner tree, we
[01:18:29] 're creating a separate tree beside it. We actually have to do a similar thing where we clean up the previous, um, nested effects, push ourselves onto the stack
[01:18:41] , essentially become the global context, run our function, and then go back to the previous owner, right? So hopefully that makes sense if you've seen it in my intro
[01:18:51]  to reactive stuff, but essentially we're mirroring the reactive execution flow this time for not handling dependencies, but for handling, um, nested computations that we're tracking
[01:19:02] . I'm not sure what makes sense, but I'm hoping something makes sense. So then all we do also is we, because we created this thing and this dispose
[01:19:19]  handling, we actually have to register with our parents. So this cleanup is actually calling the parent cleanup and going, Hey, when you clean up, you have to clean me
[01:19:26]  up as well. So we've kind of wired up the whole, uh, the whole, like disposal things automatically. So like, although preact, you have to
[01:19:38]  manage your disposal yourself, we're kind of building it into this global system, right? So making progress. Okay. What's next. All right. And how's Twitch
[01:19:49]  doing? I guess that's the real question. Twitch is doing good. How's YouTube doing? It looks like most of you are still there in YouTube. It's
[01:20:01]  like, uh, it's like twice as many people watch on YouTube compared to what watch on Twitch. But if you're in YouTube, you know, always give the thumbs
[01:20:10]  up, but yeah, no, this is better. My recent streams have had more people on Twitch, which is cool. Okay. All right. So here we go
[01:20:19] . And so what else do we need? We need our, I call it a memo, but it's a computed. And luckily for us, um, this old signature
[01:20:28]  doesn't really matter that much in the future, but I'm going to keep it for now. Preacts, um, computers actually work exactly the way we want them to
[01:20:40] . Um, interestingly enough, like some systems don't, so I actually had to, but the problem is we need to use our effect. That's why, because
[01:20:49]  we need to use our effect. This gets a little bit fun. So actually what we're going to do is this is going to become a signal that untracks this
[01:20:57]  function, unfortunately, um, to get the initial value and then creates the, yeah, see this, this is an interesting choice here because the effect will run immediately.
[01:21:19]  Sometimes we need to do this because some systems defer their effects, which is why there's a song and dance. Like I would love to like, we can test this later
[01:21:27] . like, can we remove and just like run the effect immediately and then not have to run the, call the function twice. Cause sometimes this is a problem because some
[01:21:40]  systems effects are scheduled and if they're scheduled, then you can read an undefined before you get to it. So this, this is something we're going to
[01:21:49]  have to do. Actually, you know what? We're going to, we're going to assume that preact is synchronous. Cause it's not like view. And
[01:21:59]  I'm going to put a little note here. Do we need blank? Cause if we don't I'm going to like disforce it. Like it's because essentially what
[01:22:15] 's going to happen is we're going to create a signal and then immediately run the effect to get the first value. And it's unfortunate that we have to do it
[01:22:28]  this way. It's just because, um, we need to get our cleanup to work properly with our memos as well. But preact exactly. Well, this one
[01:22:41]  won't be lazy. Right. Cause we need it for the rendering. Yeah. Well, we need it for the memory. If the end user never uses this,
[01:22:56]  and this is just the compiler, you have to remember we're making these functions for the compiler. That's perfectly fine. Right. You can still use your lazy computed with
[01:23:05] , um, preact for your end user code. We just need this for the compiler. Okay. It looks like we can create a selector too. This will be
[01:23:14]  important for getting high scores on the JS framework benchmark. Um, but, okay. So we have a, let's see if we can just like, if, if
[01:23:25]  all the preact and, uh, and, uh, um, view are very similar as much as I think they are. Um, I think there's, it
[01:23:37] 's once undefined as you, um, then, then we're actually in like an, a pretty decent place here because you might be going, okay, what's
[01:23:51]  create selector, right? It's there's a lot of code here. This is probably one of the most complicated, not complicated, but like most like abstract pieces
[01:24:02]  here. It's essentially, it really bugged me that in reactive libraries, um, especially like if you've ever had this problem where you can't put the, you
[01:24:15]  don't want to put the UI state on the model. What I mean by that is pretend you have a list of, I don't know, users. And there's
[01:24:21]  like is selected. You don't want to put is selected on the user model. Cause you might use that user model in like 10 places in your app. So you
[01:24:29]  need a way of taking like a list of selected users and I'm sorry, a list of users and a list of like selected user IDs and like combine them. And the
[01:24:37]  problem is traditionally this effort always involves like full iteration because like, like if the selection changes, you don't know which rows change and like, it gets very, uh,
[01:24:46]  it's not granular. Like essentially have to rerun the list. I hate rewriting the list. So I came up with a mechanism for kind of reverse mapping.
[01:24:55]  It's to almost like create signals essentially on the model without the model actually getting dirty, dirty by it. It's like a temporary mapping of signals. And that's what
[01:25:06]  this thing is. It's kind of complicated because it can be subscribed to multiple places, but ultimately what you end up with is something kind of cool where you can go
[01:25:13]  like is selected, create selector from, you know, your selection. And this is single select. You can also do multi-select with an argument, but essentially
[01:25:24]  then you can go like, or create selector. Sorry. And then you can do stuff like is selected and then like pass in like, I don't know,
[01:25:33]  some ID. And what this does is it kind of like has this behind the scenes mapping to other signals so that it can pinpoint like whatever, wherever you call this expression,
[01:25:45]  you can pinpoint update that expression instead of rerunning the list. This is one of the tricks to how solid is so fast for the JS framework benchmark and all my libraries
[01:25:53]  are and whatnot. Um, it's just a, it's a very useful primitive and it has a lot in common with the problem with like Redux selectors, like
[01:26:03]  essentially like the reason why, um, not, not just Redux, but like the reason why like even recoil and stuff, a lot of these libraries have been trying to
[01:26:12]  find ways to get optimal notification of things when, when they're updating a list because the selectors generally need to like run against the whole list. This is a way of
[01:26:21]  like doing like optimized um, fine grain selection. It is not, I've wanted this since like my knockout days. I hit this problem all the time and it
[01:26:35] 's cool with reactivity. You can actually solve it better. I mean, if you think about it, it makes sense. Like if you had like, I mean,
[01:26:43]  I'm just speaking here, but like if you had like a data object, right, like, and you're like, you're like, okay, let's,
[01:26:48]  you know, like ID name, I'm just like putting some fields on like a list of users or whatever, um, address. Like, I don't really care.
[01:26:59]  If, if you think about it, if you have this kind of data object and you're like passing it in to something and like, let's pretend now there's
[01:27:10]  an is selected on it. I'm just going to like put the inverse in here. If you've got a V DOM library or something, let's just pretend and you
[01:27:22]  got your big mutable immutable data structure and then you go, okay. See, even with it on the item, what ends up happening is you like go and you
[01:27:30] 're like, okay, I need to select this one was selected to begin with. So let's make this true. And this one was false. And now I want
[01:27:37]  to swap these. What you're going to do is you're actually going to clone this object, clone this object and just change the value on them. Like them, when
[01:27:47]  you clone them, this, when it comes back to be like a clone version with selected, turn a clone version selected to false. And because these objects are not, you
[01:27:54]  know, different, you have this ID, thank God, because now you can key your, your map, you know, you know, use the key property in react,
[01:28:02]  but you still have to run the reconciler to like go each row, go, you know, is this the same item, you know, like with the ID
[01:28:10]  key. And that way we don't recreate like all the DOM nodes, but then you still have to dig deeper in and go, okay, is this selected true or false
[01:28:18] ? What's really cool with a reactive system is if this is a signal, essentially, you can just update the one place and not run the list reconciler.
[01:28:28]  So like, there's two stages of why this is kind of optimal for reactive libraries, both you can save on the reconciliation cost. And with this trick, you don't
[01:28:38]  even have to put on the model. So I think this is a real use case. I use this trick when I like more manually back when I used to build apps
[01:28:47] , I built like, I did a lot of data grids, not data grids, but I did a lot of image grids, sorry, rather, because I
[01:28:53]  worked on like private social media, kind of like a Instagram or yeah, Instagram, Facebook for for schools. And that's where I hit this the most. So I
[01:29:04]  actually, I think this is a general, the big reason I was happy to add it to solid was this is generalizable because you can do single select multi select, you
[01:29:16]  can provide your own, um, comparator function to kind of do this stuff. Once I hit that point, I was like, yeah, okay, this is not a
[01:29:22]  benchmark hack anymore. You can literally use this pattern to do like do whatever with it, right? It's completely generalizable. Like view or used to have a special
[01:29:39]  set. The big thing is, even if you has the granular updates, they like, they still, it's going to be challenging for them not to rerun their V
[01:29:49]  DOM. Like they've done actually a really good job optimizing. So I can't say like, in all cases, this is true, but generally speaking, view is
[01:29:56]  still going to like back away from that and go, oh, component updated. It's still very component model V DOM thinking. And that's what we're not building today
[01:30:05] . We're building a fine grained renderer that only updates what needs to be updated. Cool. It's a lot of rerender. Yeah. Like there, there
[01:30:21]  are other use cases here. Um, thank you. All right. So how are we doing Twitch? How are we doing YouTube? All right. We're, we
[01:30:33] 're, we're still going. Okay, cool. So checks up. So let's, let's keep on going. Okay. So this is create selector. I
[01:30:38] 'm not going to go too deep into what it's doing, but it's basically just like inverses the pattern because it adds the signals on and then like triggers them essentially
[01:30:46]  with this for loop. Um, subs dot get is there's like a map in here. And I think, I think this is all good. It's funny.
[01:30:57]  You don't see very much value, but here is dot value dot value. So there, it's doing the read. Okay. Let's keep on going. Create component
[01:31:02] . Another place we use on track. This protects us. See what I'm getting at is ultimately I might need to solve this, but I don't think I need
[01:31:13]  to solve this for like to make a benchmark, but you can see if you've ever wondered, this function is the same in solid create component in solid. Like when you
[01:31:22]  make a component and compile it, it literally just calls on track. Like that's, that's all there is to it because, uh, we, we, we,
[01:31:31]  we, if you get a JSX expression like this, right, like, uh, let's pretend it's like, I don't, I don't even care
[01:31:37]  what it is. Let's, let's do this. And, and someone's got like some logic, like, uh, I'm going to use pre-accent
[01:31:45]  attack since we're here, but like count dot value, um, bigger than five and whatever, like draw my component, right. The problem is if you don't
[01:31:59]  untrack and someone just top level in your component, um, access to some reactive variable, like maybe they accidentally destructure or something. It's actually like, I
[01:32:11]  had a choice of solid people, people talk about, oh man, I can't destructure. Well, I, I, I can make it. So your component re
[01:32:17] -renders on destructure, you know, like, it's just like not what you actually ever want ever pretty much. So that's why we put the unt
[01:32:26] rack in because look, this, my comp, as you see, this is a create component call. It's essentially just my comp. Like there, there's no
[01:32:35] , it's just like calling a function here. So if you think about it, this is still an accessor. Like this is essentially a signal from, from, from
[01:32:43]  our perspective. So it would track every access inside if we didn't untrack, um, untrack gives us like a stable starting ground again, which means
[01:32:53]  including if, if you, if, if, if you defined my comp as like something that's like this, like, uh, you know, let's destructure something
[01:33:04] , I don't know, uh, children or something like, and then this here solids compiler makes, makes it like get children. This is how we work for react
[01:33:17] ivity. We, we wrap it in a getter. So it's lazy. You, this destructure happening here would actually get tracked with the parent expression. So it
[01:33:29]  actually rerun this whole thing, re-render all the components internals, recreate everything, recreate the DOM nodes and do everything just because of this destructure. So
[01:33:39]  running without untrack is a little bit dangerous, but we will be smart enough in the examples we make today, not to get ourselves in that trouble. But untr
[01:33:50] ack is very, very, very, very important. Okay. Okay. So question is, is this pre-existing those core code you're modifying or solid core?
[01:34:03]  It's neither. Uh, solid is based on a framework agnostic library called DOM expressions, um, that I showed a little bit earlier in the stream. And I
[01:34:11] 'm just, what it does is it compile. It's this library here. Um, and it, it lets you basically make your own reactive render like solid. And I
[01:34:20] 'm taking pre-act core and try and working it into a project. I just ported the view version. I've done this before the view. Um, I
[01:34:28]  guess it's worth showing people, people might be interested, but like, uh, let me see here. Uh, which bench, come on, where are we here?
[01:34:45]  We are open. Many of my libraries are actually in the JS framework benchmark. You might've seen some of them. Um, you might've seen some of them.
[01:34:52]  And so like, this is, this is what we're doing today. Cause just kind of give you a little idea. What else is there? Knockout JSX.
[01:35:10]  Knockout JSX. Let's put solid in here too. Why not? Where is it? Solid, solid. Yes. Okay. What I, what I want
[01:35:23]  to kind of show is that, um, like these re these versions of the renderers that aren't using their actual framework are much faster than the framework. If I
[01:35:39]  just pull out the reactive system and build, build something like solids approach with it, we way outperform the original framework that are using like VDOMs and stuff.
[01:35:49]  Right. And this is very different than say, taking pre-act signals and putting it in pre-act that doesn't have nearly as meaningful of an improvement. It's
[01:35:59]  like very small where this, uh, my, my hunch is, and that's why we're doing pre-act is that if we do this with pre-act
[01:36:05] , it's actually going to get, we'll be way up here, essentially like somewhere around where view RX is. Um, so that's kind of why we're building
[01:36:15]  this out because basically you eliminate the VDOM, um, and you eliminate a whole kind of order of stuff. And it'd be interesting to see what the memory usage
[01:36:22]  is like. I'm just very curious about pre-act signals in general. Yeah. Yeah. Um, untrack does a lot of things. Untrack
[01:36:34]  is like super, super important. Uh, yeah. Okay. You want to understand why this is lazy? Uh, let's, let's good, good question.
[01:36:46]  This is solid fundamentals. So I think I want to show it just so that people understand here. Okay. If I make an object, there is something called, you can
[01:36:56]  have a property here, like, uh, I don't know what we can call it, prop, whatever equals five. Right. And if I do object dot prop
[01:37:08] , you know, whatever, we'll just console dot log, whatever. Okay. We get our four down here or whatever. Let's see my screen big enough. Good
[01:37:19] . Okay. But what the thing is, you can, on objects, you can also define getters and you can go like get count or something. Right. And
[01:37:28]  what's cool now is it's a function, right? And if we get count and we go console dot log, hello, return five. I don't really care what
[01:37:41]  it is essentially like, you're not going to see this. Hello right now. It doesn't happen until we actually access it. It basically, even though it looks like
[01:37:49]  you're accessing an object, you're actually app calling a function. See, look now it's four. Hello five. It actually calls this as a function. And
[01:37:58]  this is a secret for reactivity because reactivity, everything has to be a function. So we can use getters to make it lazy on axis. This, this is
[01:38:06]  how we make sure that we can like define an object here. That's like just an object, like whatever, pass it around. And it, and then you don't
[01:38:12] , you don't actually track reactivity until you like, you're in an effect, like down here, you're like, like pretend like pretend like in here,
[01:38:19]  this instead of five, it's like some like signal or something that you're, that you're like accessing. Now we can, we can pass the prop object around and
[01:38:29]  then here, you know, like pretend that's your component props. We can now call the function under the effects. So it auto tracks. So this is, this is
[01:38:40] , this is what I mean when I say lazy, right? It's essentially, you can turn any thing that looks like a property into a function. Essentially it's
[01:38:54] , you might be like, Oh, why, why do this? You know, why don't you just leave it a function? And there's reasons for that. Mostly
[01:39:01]  that it can fit seem like, like this is very fixed structure, right? Like if I access something that doesn't exist on this, well, then it's just
[01:39:10]  undefined, but proxies, you can actually mutate, like change what properties are available on the object kind of dynamically. Cause you'll just access it.
[01:39:19]  And the proxy will access any property on it. Like instead, if we had like const, we're going to cover this for a second, but instead if we had
[01:39:32]  new proxy for our object and, uh, we'll just make it whatever. And then we're going to, we'll put a get method on it. It gets the
[01:39:42] , was it, uh, the object and the property that you access. I could do something like this. Let's go, um, return, uh, let's just
[01:39:55]  return the property as a string. Like, let's just return the name of it. Right. And what I'm getting at here is if I do that, now
[01:40:04]  we're console logging prop and count. I didn't actually define anything, but this get method intercepts any possible thing on here. So now it's now we're just
[01:40:12]  like returning the name of the property back. And why this is powerful is between these two, essentially, um, you, you don't always need a proxy, but
[01:40:24] , um, proxies allow props for it to be dynamic changing over time, even though you don't rerun the function. So when we do need them, um
[01:40:33] , you need to use a proxy. So this allows us like this allows us to basically from the end user point of view, not no care, whether it's a get
[01:40:43] ter or a proxy and still have that ability. Cause if, if we made it a signal or something, like you always had the call as a function and you start
[01:40:51]  getting this weird zone with the proxy, cause you like, you go like, is, does it exist? And then should I call it? Um, it doesn't really
[01:40:58]  work. So yeah, just another reason why we don't pass signals generally. I mean, there's already a number of reasons, but it just kind of, this is
[01:41:06]  just another one to add to the list. Hopefully that explanation makes sense. Yeah. I mean, most of the time, that's exactly what we do. We don
[01:41:17] 't just return property. We'll, we'll like, you know, in our example here, you know, the, if it was prop and it had four, but
[01:41:25]  I like most of the time, what we would actually do is like reflected and be like object, um, property or something. Right. And now it's going to return
[01:41:37]  foreign undefined. Like this is just a straight pass through, but we can do stuff like this in here, almost like our original example. Hello. Right.
[01:41:45]  And then it's like, hello for hello undefined. So this gives us a lot of leeway and using this syntax, let's, let's unify this
[01:41:54]  world. Okay, cool. Yeah. Yeah. That's awesome. I, there's, there's a lot of cool stuff you can do with the language when you
[01:42:06]  know what to do and kind of like can leverage it. But like for us, if you've seen my reactive stuff, this is how you can track stuff. You can
[01:42:14]  be like, oh, intercept, get intercept set, perhaps. Usually I've reasons I don't like intercepting set and I don't use like the, the normal like
[01:42:23]  proxy kind of things like a, like a unidirectional flow, but you, you, you, you can see the power here. Okay. All right.
[01:42:32]  So let's continue on. Okay. So yeah, just showing you like the reason that we're doing this is I, I want to make a preact render signal render
[01:42:41]  that's, you know, getting close to where solid render is at. Um, I say getting close because you've seen that I have to do all this kind of specific
[01:42:49]  overheads and stuff. So even if preacts reactivity for this use case was this performative solid, and I don't believe it is, um, it's
[01:42:57]  not getting a fair shot here because I have to add a bunch of features that preact doesn't have. Um, so, uh, pre signals don't have, so
[01:43:05]  this is not like a fair shot, but so it's not about comparing preacts signals to solid. I don't expect them to be able to compete. Solid will just
[01:43:13]  be better here, but I, but just looking at what overhead like preacts VDOM brings to the game versus just using signals straight. That's more interesting.
[01:43:23]  All right. All right. So where are we going? Um, okay. So yeah, this is just our component for now. We'll keep on track how it is
[01:43:35] . Lazy. Um, yes. So we want dynamic imports. Um, this, I love reactivity for this reason, like versus VDOM. Um, I
[01:43:44]  feel like I should probably explain this again. Um, Um, undefined st, whatever. I'm just like hijacking typescript. It's not going to
[01:43:58] , uh, fine as yeah, this is probably cause my types are actually wrong. Cause it's whatever. I don't care. I make typescript shut up, but
[01:44:10] , but the, the thing that people don't always realize about reactivity and maybe this is another good thing. Sorry. I know it takes me forever to get anywhere
[01:44:20] , but like the beautiful thing about reactivities being able to start stop is that like, I probably don't make this demo enough for people to get it. Like why
[01:44:32] ? Like when I first saw suspense and stuff, I was like, yeah, who cares? Like, I mean, I got it eventually. Right. But what I wanted
[01:44:40]  to show is like, let's add show. Okay. So we got it. I'm going to keep the counter. It doesn't really matter. Um, we'll
[01:44:48]  keep that for a second, but we're not gonna use a button for this simple example, but what I'm going to do is I'm going to make a show
[01:44:54]  component and it doesn't really matter what it is. It could be, we could use a ternary or something, but the reason I'm going to use show is
[01:45:00]  I'm going to put something like success, right? Whatever. It doesn't really matter what it is. Show when count. Okay. Doesn't show up cause count zero
[01:45:15] . Okay. And then instead of doing increment, let's do something like set timeout. Call this count, count plus one after like two seconds or something. Um
[01:45:30] , what am I? Um, yeah, something like this. Okay. Tada. Like, I mean, it's not surprising, but the, the, what I want
[01:45:42]  to stress here is that we're going to console log like run, you know, and like, uh, what do I want to do here to like do an expression
[01:45:57]  or something. Can I do like a self calling function or something? Sometimes funny with JSX specifically, because we don't get the, we don't get to do stuff
[01:46:06] . Um, let's see if this works. Console log loaded. Yeah. Okay. Perfect. See run loaded. What, what, what I want to get emphasized
[01:46:23]  here is with the reactive system, you can literally pause and resume anywhere in the, in the program. You don't, because there's no like V dom render. That
[01:46:31] 's like taking you through the whole thing goes, Oh, I have to re-render this component and it's parents component and does, does this like whole thing. Like
[01:46:38]  writing a lazy import is like three lines of code. Like I, I, I, I made this, um, I made this, uh, you know, because
[01:46:50]  people like having APIs for this stuff, but like literally like lazy component is basically this, like you just like make this an important and go like, when it's done,
[01:46:59]  set a signal and then render the thing. And I, I just wanted to kind of emphasize here, like even this silly expression in here that I'm console logging,
[01:47:08]  like, which is like, if you look at it, this is a iffy, like I've made a function call that I'm calling myself. Um, it's
[01:47:16] , it's mostly because I mean, I, will this work? Like, I don't know if console log is not a function. Oh yeah. So that works
[01:47:31]  too. Okay. So it like, it, it doesn't really matter. Like, but you see it's run and then loaded. I never really play with this cause
[01:47:42]  this is not an expression technically, but I guess it just works. You can apparently just console log and solid wherever, but you see that delay here. Um, it
[01:47:50] 's because it literally stops here and then continues here. And like there's, this is just so directed that like the simplicity here is, you know, considerable. Um,
[01:48:05]  because if we want our framework to have lazy, we literally make a signal and then on the promise return, set the signal and like, there we go. Like we
[01:48:16]  just have a computed here essentially. And then I map it to, um, a function because just the way solid or dom expression works on them under the hood, but today
[01:48:28]  we've made a lazy component. Like literally it's, it's, it's like what you'd expect. It's just like a function then set single, you
[01:48:36]  know, and obviously like that's kind of seems obvious that it would be like that, but try implementing lazy in a VDOM library because the component reruns and you
[01:48:45]  have to know not to trigger lazy again. So there has to be like a caching mechanism or something like it's much more complicated, but just take, I guess you
[01:48:53] 're gonna have to take my word for it. And then we've got like split props and merge props. I think these will all be easy because they just use objects
[01:49:01] . We're not going to touch those contacts context. Um, I could explain about how context works in our, in a, one of these systems. Hmm. Okay.
[01:49:13]  So how's everyone doing? You guys are still with me. Sorry. I know this is heavy. Um, but let's, let's go here. Okay. So
[01:49:23]  we're going to create a symbol. Someone asked earlier what a symbol is. It's like an identifier. It's like, it could, you could think of it
[01:49:30]  kind of like a string, except the idea is that it's like unique, like, like symbol context, not equal symbol context. Like, like each it's yeah.
[01:49:42]  But so that's why it has some importance because if we can generate the symbol, like it doesn't matter what we call it in this case, it's context.
[01:49:52]  Each, every single one of these context symbols that gets created every time we can use context, it's still just context. Um, but it's, it's unique from
[01:50:02]  other ones with the same symbol, uh, which is just useful for patterns, like appending, like, like people use it, like the, it's used for like
[01:50:12]  iterators. Like if your thing is iterable, have a symbol for iteration. It gives a way of doing a lookup against a generic term, but still lets
[01:50:19]  it be like unique. Um, there's like symbol.4 and a few other things, not going to get into it too much, but I just, we create a
[01:50:27]  symbol and we create a provider and then the whole context trick actually, and this one looks like it doesn't have all the fixes I have in solid, unfortunately, but I
[01:50:35] 'm not going to worry about that right now. Is it, remember this global context we, we defined earlier that has like owner and stuff. And we, as we
[01:50:44]  create roots, we set the owner as the previous owner. As we create effects, we set the owner as the previous owner. We, we get this tree essentially. And
[01:50:53]  whenever we get to a node in the tree where we need to look up the context, we simply just walk up the tree. We just go, Oh, is there
[01:51:01]  owner, owner context? The owner context has this key. Otherwise, you know, go up to its owner and look up against its owner and key and just bubbles up.
[01:51:10]  That's all there is to it. It just looks up this, up that global context tree that we created earlier in the stream. Take my word for it. Could have
[01:51:19]  been the description of the stream. I'm trying my best to explain this stuff. I understand there's some magic here. Maybe, maybe this is like one of those
[01:51:33]  streams that like someone might not get on first pass, but then they come back to it a bit later and they're like, Oh, this actually makes sense for me now
[01:51:40]  where I'm at. But hopefully, hopefully there's some value here. All right. Just patch globals to add caching. I see what you did there.
[01:51:58]  But I don't think we're gonna have any need for the fetch primitive today. Okay, resolve children. This is for the children helper. You find it often in
[01:52:13]  react and in different frameworks. This looks like actually bigger than the one that I use these days and solid. But again, undefined. All right. Yeah,
[01:52:32]  someone fuzzy said that I'm your TypeScript shaman. Honestly, I think I just can't be bothered with it for certain stuff. As long as the interface is fine
[01:52:42] , then like, it will be okay for now. At least at this stage, I get I if I had to worry about TypeScript all the time, I'd never
[01:52:50]  get any code done, like ever. Okay, create provider. Again, this is injecting a custom context. So that and then on the context object. So here
[01:53:00]  we go. What this does, the effect actually creates a new context, because that's what effects do. Oh, crap. This is this is actually this is actually an
[01:53:10]  example of a place where we actually need untracked. Do you all see the problem? Because I create an effect for the pure purpose of injecting a new context
[01:53:26] . And why do I want to inject a new context, create a new owner, separate independent one is because you you want to have sibling context of the same type. If
[01:53:39]  you don't create a new nested level, your siblings will write over each other because it's just a key in an object. However, Okay, we're gonna
[01:54:03]  have to ditch the effect here. um, and create our own thing because the problem is if you put an effect and you literally render all the children under the effect.
[01:54:12]  Bad stuff is going to happen. um, because yeah, I'm always guaranteed this is going to be terribly terribly bad. So we're actually gonna have to change the
[01:54:30]  code here. What we're gonna do is we're gonna manually create the context ourselves and assume that the provider will be disposed by its parents anyways, which I think is
[01:54:41]  a safe bet. So let's, let's look at how we create, uh, let's just like look at the effect context creating code. This, I,
[01:54:50]  there might be a negative side effect here. Um, but I don't think we can get away with untrack here. I think this is going to be problematic.
[01:54:59]  So we want to context this disposal context context and in our new context, or sorry, it's funny, I call it context, but it's actually the global thing.
[01:55:11]  Um, we actually want, so let's see what else effect code we want to do here. Um, yeah, we're going to need code that looks like essentially
[01:55:32]  like this I don't know why everything got red all of a sudden, but yeah, whatever. We'll worry about that in a minute. Okay. So instead of
[01:55:58]  on track, we're gonna, We can't win, we can't win, can we? Because if someone imports this component reactively, it wouldn't be unt
[01:56:11] racked either. Huh. Okay. Screw it. We don't use context. We don't use providers in our example. So we're, we're going to leave
[01:56:23]  this as is, but this, this is not good. Um, probably less clear for everyone on the stream, but this is the danger. And I'm glad you
[01:56:37]  see it from my perspective and see maybe some of the, the thought that goes in here. This is a danger with fine grainy activity. Like it's too powerful,
[01:56:45]  like way too powerful. And this means like passing values around tracking stuff anywhere, two way binding, all that stuff is just like, you're just like asking to like
[01:56:57]  blow up your app. And that's what happened from 2010 to 2013. That's why when react came within the flux pattern, people were like so compelled by it. They
[01:57:05] 're just like, Oh my God, thank you for getting rid of two way binding. That's the worst thing ever. You fast forward like to now and people are
[01:57:12]  just like, what? I think I saw Adam rackets post something about like how, you know, unidirectional flows is a shitty religion. And I'm just
[01:57:19]  like, yeah, yeah. The, the problem is like, it's fine. You can find your constraints in other places. Like in like Svelte, for example
[01:57:28] , I think two way binding works pretty well in Svelte because you know, it's not fine grained, it's not composable, but like, or at
[01:57:35]  least with the primitives, like the core primitives, you can use like stores to do some form of composition, but like if you set like VDOM also
[01:57:44]  is another way of setting these constraints. But once you get rid of those like guardrails, which are actually what are slowing you down, then there's potential for chaos
[01:57:54] . So, um, a lot of work in solids and this kind of rendering was to figure out how to put the guard rails back without the performance overhead. So yeah
[01:58:06] , we're just going to leave this and worry about it later. But let's write a note. This might be terrible without untrack. Yeah. Yeah.
[01:58:29]  Yeah. Yeah. Like I don't expect you, this is why I don't like the Hyperscript or HTML versions of this all because it like puts too much on
[01:58:36]  the end user. You need, you need the compiler or the tooling to, to make, to kind of alleviate some of the like boiler plate. Cause it's easy to
[01:58:46]  mess up boiler plate, right? It's luckily we have tooling for it. See, in a sense, reactivity is too simple. That's why it's so
[01:58:53]  powerful. It's just like, it's like literally like here's an event that triggers when this changes. Like, but the thing is, if you're wiring this all
[01:59:00]  up yourself, like there's a lot, a lot of places go to, that could potentially go wrong. Luckily the framework and the compiler kind of eliminates like a good chunk
[01:59:12]  of it. And I think it's kind of interesting. Cause like think, think of something that's really, really simple. Yeah. People find really, really hard because
[01:59:19]  like the boiler plate, um, Redux, Redux is a perfect example. People familiar with Redux. Um, and with, with Redux, like Red
[01:59:31] ux is like really dirt simple in a sense. You're just like, like how hard is it to write state equals function of previous state and some action payload? It doesn
[01:59:42] 't matter. It's just like any object, like to, to implement Redux, like as a mechanism and then have reducers call reducers. Like is it
[01:59:53]  takes no code. There's a joke that in RxJS, you can implement Redux in like four in like, in like one line of code. But for
[02:00:00]  people trying to work in Redux classically, though, the problem was like, there's a lot of boiler plate. So there's reducers and actions and like all
[02:00:08]  these kind of awkward patterns because it's so simple that people are trying to like work around it with async and doing all this kind of stuff. And you know,
[02:00:15]  it didn't provide a prescribed way. They're just like, you know, it's functional composition, just add middleware or whatever. Like sometimes being too simple isn
[02:00:24] 't the best thing, even though it's really powerful. Like I appreciate simpleness rather over like complexity that, um, you know, is hard to explain. I'd
[02:00:36]  rather have like, I don't mind if something is involved or complicated, like, like there's a lot of boilerplate, like there's a lot of reducer code
[02:00:46]  to do, or there's a lot of reactive primitives that you have to define, you know, fine grained. It's when there's that like abstraction level
[02:00:56]  that hides how it works from you. That's where I have more of an issue. So it, it, it's very important to me to look at abstractions in
[02:01:05]  a sense of how they can maintain that transparency. So you never feel like you're too far from your skate patches because inevitably you will need to fall into your skate patches.
[02:01:14]  But sometimes, you know, a little tooling can solve the Redux problem, so to speak. And I, I haven't used Redux toolkit, but I wouldn
[02:01:22] 't be surprised if that's really what their findings are. I am excited about the X state Redux conversation as well. Oh yeah. That's cool. Teach Red
[02:01:41] ux by recreating it. Yeah. Yeah. Cause it is like very, very simple. But when I tell people that Redux is simple, they can like sometimes give
[02:01:48]  me a weird look. It's because like maybe Redux isn't easy and simple and easy are not the same thing. Okay. Well, let's, let's
[02:01:55]  keep on going. Um, okay. So we got crate provider. Okay. This is probably the last thing and probably the most important thing. This is solid's hyper-
[02:02:03] optimized reactive map operator. You might've seen this before. It's called the four component in solid or map array and solid, but not everyone likes that form
[02:02:15] . And because I'm making this for pre act, maybe we will keep this as just a map function where you have to pass in a function over it. See, there
[02:02:24] 's, there's some nice ergonomic gains you get by using components because we can recognize the expression and then you don't have to wrap it. But some people insist on
[02:02:32]  map and I think it'll feel more like pre act if we use a map function in their JSX. Cause then people, it won't feel like they're like
[02:02:39]  doing solids for loop components and stuff. So is there any problem here? Well, untrack. So how do we get around untrack? This one might actually
[02:02:53]  be okay because we need to track the list whenever the list changes, but top level, like basically all this does of not having untrack here because we don't
[02:03:05]  actually hit any of the other signals until we actually run the mapped function. So as long as someone's not like accessing stuff, top level, we're not going to run
[02:03:12]  into trouble. Basically, as long as you code in the perfect prescribed fine grained way, you're not going to get hit without the untrack. So I think
[02:03:19]  we're going to leave it, which means I don't know if this explanations worked for everyone, but we may have made our first pre act fine grained render.
[02:03:29]  I think, I think we can start trying this. One of my transition solid was not being adverse to show her four components. Yeah. They, it's funny that they
[02:03:43] , they do and they don't. It's funny. The react community is big on this because this, they needed to differentiate. They're like, we're not a
[02:03:49]  template DSL. We just use JavaScript, blah, blah, blah. But like the second you need complicated logic, we're also very composable and do this because like
[02:03:58] , yes, you can use map, but like the second you want to share pagination, you're going to make a paginated component and air boundaries and suspense are kind
[02:04:08]  of like if statements, like, don't get me wrong in react. They're probably much more complicated than that. Like if you saw the lazy component that we built here
[02:04:16] , um, you know, you can, you can definitely see that like, when I say something's just an if statement, I literally mean it's just an if
[02:04:23]  statement, but maybe that's a perspective that only comes from, uh, from doing, uh, react to programming where like, you can literally start and stop anywhere in the
[02:04:33]  middle of your tree. Cause you're just like, is it undefined or not, you know, like just rerun with it undefined or not just
[02:04:41]  the one expression. But yeah, it's interesting. The community kind of tells you not, but then they break their own rules sort of like it. It's,
[02:04:49]  it's like the value of that dot map is, uh, is, is kind of like a philosophy value. It's like, we are just JavaScript, but like there
[02:05:00]  is an easiness practicality aspect of it where it's like, yeah, but we have components for a reason. No, no. Well, that's the thing.
[02:05:13]  We don't need suspense to do lazy components, right? As I showed you, let's just like, like suspense, like you don't really in a reactive system
[02:05:20] , you don't really re-render. So like, you don't really need suspense for like in a pure sense. This is where it's called confusion. Cause I
[02:05:28]  like suspense because it gives us orchestration knowledge and I push people to use suspense, but you can do like all the async stuff in a reactive library efficiently without stuff like
[02:05:38]  suspense. But, but then again, you can do it with react too, to a certain degree, right? You can use effect and re-render that component or
[02:05:45]  whatever. It's more efficient in a reactive library, but that's not why people do it. It's for orchestration and other reasons. But yes, this did not
[02:05:50]  have suspense because I have not implemented suspense for these simple side libraries, but one could, but your reactive system would have to probably know about it. Yeah. But the
[02:06:08]  funny thing about like ternaries over show, and I'm just going to stop on this moment for a minute, is that like, I feel like you still build layout
[02:06:16]  components. And I know there's layouts in like the new next writer, but I don't mean like that. I mean that people build components that kind of like in
[02:06:27]  a way where like conditional rendering of children is, yeah, there's a ternary inside the component, but outside you can like lay out your layout and then like parts
[02:06:36]  of that layout to show or display based on different criteria inside. Like to me, it's like, it's like all the same thing, but like it's like
[02:06:47]  not the hill to die on. As I said, like, I think it's important to say like, we just use JavaScript, but it's, but it's like
[02:06:53]  the fact that you call a map function doesn't like, doesn't really like make it like a huge difference. Like when the map function stops being convenient, because you want
[02:07:04]  to make it more optimal, you stop using map function. I think it was Adobe that was talking about like how they had array components because the map was just inefficient. It
[02:07:13] 's like, why am I remapping all these DOM elements? They made their own kind of memoized loop. Like map is just like the baseline, but it's
[02:07:21]  never going to be the best line. Is that even a sentence? Whatever. Yeah. Yeah. TSX doesn't know how to handle conditional rendering children. I'll con
[02:07:35] cede to that, but doing anything for TypeScript's sake is a hard pill to swallow when you can, when it stops you from doing incredibly powerful things. Okay.
[02:07:46]  So where are we, where are we at? We're at a point now where we think this probably works. So let's make a few test apps and, and confirm
[02:07:54]  that. So I guess this is our last chance to change the name. Are we going with preactrx-jsx? Like, um, like, is this
[02:08:03] , is this what we're doing? I don't know. Any, any comments from, from the chat here? give you guys a moment to think, just
[02:08:15]  think about this. Ship it. Yeah. I mean, watch this already be taken on thing. Like someone, like someone beats us to it. Like, cause I'm
[02:08:30]  on stream and they're like, ha ha ha. Um, uh, yeah. And actually I probably should put a, push up a repo at some point too, but
[02:08:38] , uh, for now we're just going to get on MPM. Let's, let's, let's, I can't remember. Let's MPM run
[02:08:44]  build and see if this all builds. There's an error. No such folder as preactrss types. Why not? That's what we're building. Okay
[02:08:59] . So my script, okay, let's, let's, where is it? Where's this types folder? It wants it in, let's make a new folder and
[02:09:10]  call it types. Let's see if it just, like I told you, this is going to be a little bit rough. Ha ha. It's because my build process
[02:09:19]  is not smart enough to handle the types folder being missing. But this, this looks legit here. Yeah. I'm just going to keep with the consistent same. I,
[02:09:34]  I know I asked for name titles and I'm just like dismissing them all, but yeah, reactics, preactics. Uh, that's fun. P react
[02:09:47]  X. That's a, there's always like this X element to like reactive libraries. Like I, I, I mobs, mob, mob, mob X might
[02:09:57] 've done it first or, but there's also RX, but yeah, I don't know if anyone remembers mob X used to be called mob observable, like M
[02:10:06]  observable. I think, I think it was credited with at like Mendix or something. So it was like literally like M observable, mob observable. I
[02:10:17] 'm pretty sure this is already a library. React signals need on track. Yeah. Yeah. I, I, the JavaScript is just to get around a weird import type
[02:10:38]  thing. I'm, I, I'm, I'm not the best typescript developer. I think anyone who watches the stream understands that. Apparently I'm some people
[02:10:46] 's typescript hero, but probably because of how, like if typescript gets in my way at all, I just like, I'm just like, go away typescript
[02:10:53] . Anyway. Um, yeah, let's just ship this. Um, it looks like the build is good. Uh, I don't have any tests. Oh,
[02:11:08]  peer dependencies. Let's, let's get, let's get preact signals in there and make it, I don't know. Cause they might break stuff on us.
[02:11:20]  We're going to, we're going to squiggly it to, to this range, like in the 1.2s. I'm assuming that they're not going to
[02:11:27] , they're not going to break it in the 1.2 range. Okay. So let's just make sure all everything is happy. What do we get here?
[02:11:37]  Client. This, this looks believable. HD. Yeah, it looks good. Just looking at the types, just to make sure this is kind of like a sanity
[02:11:45]  check for me. Let's look at the disk folder. I don't even know what this is. I don't remember adding this hyper script symbols. I think someone
[02:12:01]  did this in a PR, probably Joe, Joe Pia, true skater. All right. Template literals looks good. See, look, this is all the
[02:12:09]  extra code that template literals needs on top of stuff to get it to working. You save all this by using JSX. Hyperscript isn't as bad.
[02:12:19]  Indexed. And this is our core runtime. Yeah. 800 lines of code. Nice. Okay. Actually, no, what? We have a problem. Actually,
[02:12:38]  you know what the problem is. First of all, this is a problem cycle detected. Okay. I think what we're missing is we have to tell our rollup
[02:12:46]  config to exclude, um, eternalized stuff from Preact, right? Preact signal core. We don't actually want it to get it to get pulled in. I
[02:12:59] 'm glad we, we inspected this because that would have been nasty. Preact signal core. Hopefully I got that right. We'll, we'll double check that in
[02:13:09]  a second, but we need to actually exclude this from the build. Cause even that those, those sizes seemed a little bit too big. Let's try the running this
[02:13:19]  again. All right. Is that better? What is this? Is this just something Preact does for fun? I've never, I've never seen this. This
[02:13:44]  is what is I, who calls I like, let's try it. Let's see if I is called from a function anywhere. It's like inside this code. This
[02:13:58]  is very interesting. Yeah. So these all import from index. So I'm not expecting them to be any difference on code size. They're like basically just straight ports
[02:14:13]  of our, of our TypeScript, but this one has some code getting added here that I am not sure where it is coming from because what I was expecting is the import
[02:14:26]  statements from Preact, but they're not getting externalized the way that I was hoping they were. Cause like there should be like an import import, let's look
[02:14:38] . There should be an import statement in here. Cause we said in our rollup, we're like Preact signal core. Did I spell it wrong? Should be external
[02:14:47]  and not part of our build. Preact signal core. Oh, it's signals core. Thank you. Thank you, chat. Thank you, chat. I'm
[02:14:59]  just gonna double check that. Yes. Signals core. Thank you. Thank you. This is rollup too. I'm not, I'm not updating my build tools
[02:15:10]  and take a chance of stuff going wrong. There we go. That is better. It's not signal course signals core. And just to sanity check. Let's make
[02:15:23]  sure I don't have signal core anywhere else. Okay. Okay, cool. Okay. Let's build this again. All right. Now let's look at our dist.
[02:15:36]  Beautiful. Import from Preact. And then our 800 or so lines of code to make this all work. All right. All right. So I think we are now
[02:15:53]  finally good to publish. Secretly help hoping that I debug rollup three on stream. Uh, yeah, no, I haven't got the chance to play with that.
[02:16:07]  I'm a huge fan of rollup in general. Um, it's, it's, it's, it's, it's, it's makes, it's
[02:16:11]  really smart and really fast. All that cool dead code elimination, tree shaking stuff. Um, to my knowledge and from my experience of trying different libraries, rollup does it
[02:16:18]  better than anyone else, better than he has built better than the reason beat still has rollup in the thing. It just produces the best bundles. Um, it's
[02:16:25]  just a really good library. Um, that's, it's, it's so funny. Cause like when these new build tools come out and everyone's like, it
[02:16:32] 's 10 times faster and all this stuff. And I'm like, yeah, but can it make it as small as rollup? I'd take a thousand times slower if
[02:16:37]  it can make, if it, if it, you know, you know, if it gets rollups output versus something else, like I don't ultimately, yeah, build
[02:16:47]  time matters to you as your devs or whatever, but end user rollup makes the difference anyway. but as you can tell, I'm kind of allergic to tools
[02:16:58] . So, which is kind of funny. All right. Let's, let's, uh, let's just give this the good old NPM publish. We'll get
[02:17:10]  there. Just not yet. Uh, let's give this the old NPM publish. All right. PreactRx-JSX version 0.01 has
[02:17:24]  been released. Let's try one of my, it's, it takes a slightly different config than solid. So we're going to, what we're going to do is
[02:17:32]  we're going to fork one of my code sandbox demos as our first test to see if like, that this works in like a hello world scenario. Um, all repositories
[02:17:44] . No, where am I? I want my drafts. No, I want my sandboxes. MobX demos. Let's, it doesn't, let's
[02:17:51]  use view. View is, view is probably the, the, the most similar. And this is an auto interval counter that counts up just like the classic one. And this
[02:18:04]  is a good example because as you know, components don't re-render. So this is like the classic, uh, the classic difference here. Um, so let
[02:18:14] 's fork this, uh, where is it? Fork sandbox and make a Preact JSX counter Get rid of the fork because it's no longer forked. It
[02:18:31] 's its own thing. And then we're going to get rid of of these two suckers and we're going to bring in at Preact slash, um, signals
[02:18:46]  core and we're going to bring in, um, Preact RxJSX. Oh, there is a Preact JSX something else, but let's
[02:19:00]  bring in this one. No, that is not right. You probably just don't have it because it's too new. Let's add it. It's Preact
[02:19:10]  RxJSX version 0.01 Hopefully it can resolve this. Let's see if Let's see if it's on NPM Preact RxJSX
[02:19:30]  Huh, I forgot to change the read me. Oh We'll get back to the read me. That's funny. I should at least change the title, right? But
[02:19:43]  then I have to publish it again. Yeah, we'll worry about this later Okay, so Yeah, okay. So it's published. So is code sandbox going to find
[02:19:55]  it? Let's Okay, let's remake our counter. So now we need from Preact we need a signal here, right? So it's like Preact signals
[02:20:13]  core, we need a signal And then we need render and cleanup from Preact RxJSX And then if we save all this and everything works Wait, okay
[02:20:37] , there's no ref, there's signal Code sandbox is dumb sometimes Could not find VueRxJSX Oh Babel Babel plug in GSX DOM expressions
[02:20:53] . You guys don't have to do this with solid But here we actually have to say where our module name is coming from And If everything worked well We have a working
[02:21:07]  counter And just to prove that this is Solid style awesomeness and not VDOM We're going to refresh this sucker Counter logs once Thing keeps updating All right
[02:21:30]  So That's cool All right, so it just worked first try Okay, well, thank you TypeScript I can see how TypeScript helps refactoring Especially when you
[02:21:45] 're allowed to ignore it It showed me all the places where I had to put like As unknown as any So that helped a lot Okay Okay, cool So What we're going
[02:22:06]  to do next Is Well, yeah, I don't know about break it But we're going to benchmark it, aren't we? Why would we do this if we
[02:22:14] 're not going to make the JS framework benchmark with it? Yeah, don't get me wrong I don't actually hate types And I've used types and languages for large portions
[02:22:30]  of my career I dislike TypeScript Largely And it's Don't get me wrong It's a good thing to exist I am glad That we can add That we
[02:22:42]  can have types in JavaScript And have a contract And have like I'm glad that What it allows people to do And it makes your life way easier And all that stuff The challenge
[02:22:55]  From where I sit Is TypeScript is not JavaScript It's not like a superset As much as people like to do it It's more like a subset Which is fine But
[02:23:04]  sometimes being a subset is awkward Just because there's like certain things that are like hard to express You want to do differently And then it's like Oh, but TypeScript
[02:23:14]  So as long as you can kind of like The fact that you can bail out Makes it actually a superset and not a subset But like strictly typed TypeScript Is a subset
[02:23:24]  of JavaScript Not a superset of JavaScript That's the best way to put it So it's like It's just I've used other type languages And been like perfectly fine
[02:23:34]  with them I just don't like Like you're taking something really dynamic And then like you're trying to force it And it just like doesn't always line up That's where
[02:23:42]  life gets hard So I guess that's That's That's Like If you want to do everything in TypeScript That's possible in JavaScript Then there's going to be places Where
[02:23:52]  you just have to bail out So it's just It's just It's It's just It's knowing when to do that And when to invest the time That I think
[02:24:03]  is a skill there I think the net positive TypeScript Is super positive So it's not like I Like hate hate it I just like I just like Poking fun at it
[02:24:12]  Because there's a lot of people who are like Really zealous about it And I'm just like You guys are so easy to poke fun at But the truth of the matter
[02:24:21]  Is like It is a very good thing Build your projects in TypeScript Do your projects in TypeScript Me as a library author It's like I feel the pain more often
[02:24:30]  But then I do the work And then you get good types And then everyone's happy So the only person who has to feel my pain is me And you guys can go do
[02:24:38]  great things with TypeScript Yeah Hacker News is mainly just like Like a data loading Kind of exercise Metaphering thing Right So like yeah I'm sure you all
[02:25:03]  appreciate the types That we put into Solid And how you can use them and stuff Like I don't Don't get me wrong It's just like Sometimes I'm just like Oh
[02:25:11]  man Especially like Also like when I'm coding or live streaming Like when stuff gets in my way It You know what I mean Like it's like Like that's not what
[02:25:20]  I want to deal with You know It's like Right place Right time Sort of thing So anyway Preact JSX counter works Let's do something more substantial Let's pull up
[02:25:31]  Let's see if we can get the JS framework benchmark going And this is kind of cool Because I just so happen to be on a branch That I also have Preact
[02:25:37]  Preact signals And whatever this will be So we'll be able to compare all three versions of Preact In the same benchmark so to speak And I think that is kind
[02:25:48]  of cool So let's see if I can Get a new window open And get some stuff going Sometimes I do have to watch Because like Chrome updates And then the benchmark doesn't
[02:26:01]  work And then I have to do like some stuff I'm probably a little out of date too Because I'm on a branch I made the Preact signal implementation But then it
[02:26:10]  got pulled Because it wasn't ready There was a memory leak And then I fixed it And then I was like Okay so we good to go And then Jason and Preact
[02:26:20]  team were like No we're going to do our own submission Pretty soon That was five weeks ago Which is fine So I just got this branch That I'm playing with I'm
[02:26:30]  sure it'll get submitted at some point So we'll just kind of play in here Because as I said I'm not in a place where I like Care to get into
[02:26:43]  that with anyone I'm just going to We'll just build our experiments here I got I've been playing with Quicken here as well I'm sure they will have a version
[02:26:53]  of this framework Benchmark eventually as well So Let's just I'm trying to think of what I want to start with I feel like I feel like the theme today Is
[02:27:04]  actually copy view Or the view version And then like port it across The only downside is this view version Probably hasn't been updated in a while Let's see what version is
[02:27:15]  on Is it on version 3? No it's on version 2 So that's fine Let's just copy this across No no I made the official thing But it got pulled
[02:27:30]  because of the memory Like it wasn't supposed to be merged I made a draft version And I was like Hey this is I think how we would do it Let's get that
[02:27:37]  bug fixed I think I found a bug And then we'll submit it But Stefan the maintainer was so eager He just saw the preact thing And he's like let's
[02:27:46]  bring it in And it wasn't ready yet So then we had to pull it And then You know I was kind of like I asked the team I was like So can
[02:27:55]  we go with this Now that the bug's fixed And they were like No no We'll do our own version So that's why I have it Still And it hasn't been
[02:28:06]  added officially Yeah I will definitely upload the code as well I have to update the readme Along with this So let's just copy this And let's see if we can
[02:28:20]  get A working GS framework benchmark GS framework benchmark I love it I mean I've built I've done so many implementations I did this about three When I did One of the
[02:28:28]  vanilla ones Like you can just kind of go in here And it's not very hard Oh you know To do this Let's see here Let's paste this in here And we
[02:28:38] 're just going to call this one What do we call this one Pre-name Pre-act The one thing I'm going to have to Watch out for is Untr
[02:28:51] ack type stuff Might catch us on the way Because I'm like If you've ever seen my code I write knowing to the optimizations So like untrack stuff Might actually
[02:29:02]  get us here So let's see what we need here Blah blah blah It actually looks like There's a bunch of weird There might be some weird Specific stuff that
[02:29:13]  we did with I don't really care It'll probably still be fine Let's switch this around So We need Um 34 Not 12 is a Let's just Let's just do
[02:29:29]  34 Hat And Let's do Let's do I don't care Roll up version Um This is probably fine But these are the ones that I want to update I want to
[02:29:46]  get Pre-act Signals Core Version 1 1.21 I think it is Actually let's Let's try it If 2.2 works We should run with 2.
[02:30:01] 2 And then Pre-act Rx 0.01 I don't know You guys are talking about something about Astro in the chat I'm not quite following CLI
[02:30:16]  kit Creating Astro This is This is of course Astro with the solid integration, right? All right Um Where are we? Okay And we're gonna get the version of
[02:30:33]  our package from Pre-act RxJSX So this is just some I'm just getting stuff out of the way So let's Let's go CD Frameworks
[02:30:43]  Keyed Pre-act Pre-act Rx JSX Let's NPM And install it Well While this is going Let's look at the source code I mean There's
[02:30:55]  It's not much of this is going And let's Let's take a look at what we're doing here With this benchmark If you've never looked at the JS framework benchmark
[02:31:04]  It is Relatively simple It's It's literally just one big table What are we doing here though? Huh? Huh? That's interesting Oh Interesting I actually don
[02:31:33] 't think this version is the best one to go off of Huh? There's something interesting Vue Has Refs But the refs turn into proxies if you go
[02:31:45]  deep So they actually like They have shallow refs Specifically to tell you like this is not a nested proxy But Vue Like kind of tried to auto merge them together
[02:31:54]  So like if you start with a ref It actually turns into a store Like in solid syntax As you nest data Which lets them write it fine grained In a certain way
[02:32:05]  In a certain way Because like We can actually Like let's look at the update I'm actually adding it And it actually works This will not work with Preact signals The same
[02:32:16]  way We actually need to do it A little bit more like the preact signals Implementation that I did Where we're going to actually Nest Signals To get that
[02:32:26]  Those fine grained updates Which is important So I'm going to Play around with this a little bit So we're going to pull this from here Into this one Change the build
[02:32:37]  data function Okay And then We're going to update our imports So this is Preact Signals core We're going to get a signal from it And From Preact R
[02:33:01] xdsx We're going to get Render Map And create selector That looks good Okay Cool All right So Now we're going to nest our signals So The reason is
[02:33:14]  Each label can be updated Independently to the list And we want to get those Fine grained updates I'm going to Do this Okay So Here the data is a ref
[02:33:25]  Or a signal Let's see here Sorry This is all in JS Not TypeScript It's pretty par for the course For this stuff So these are going to be signals And the
[02:33:34]  data is going to be Signaled with signal in it And then is selected This We're actually seeing the selector in action here See this is the stuff I've got
[02:33:43]  to watch out for Because Untrack Isn't Like if I do this This untrack Like if this was reactive This would track And that would mess with stuff But
[02:33:55]  The idea is not reactive Because we did not explicitly make it a signal So that is fine All right It's an interesting aesthetic I chose for this version Where I actually Create the
[02:34:11]  map out here And then inserted it here It's really just a matter of choice though And then I actually put the helper functions on the end It doesn't actually make any
[02:34:23]  difference It's just It's very interesting Why I chose this form Okay Let's Let's Let's Let's look at How we update Because Okay This is good This is good
[02:34:39]  The problem is Some of the more fine-grained updates Are going to be more challenging For run Run lots and add They are essentially going to be the same Run Run lots
[02:34:48]  Oh yeah This is an older time When I used to set selected To false We don't actually need To do this I'm kind of tempted To just like Wrap this back
[02:34:57]  around Into my My current best patterns It's not even Current best patterns It's just Typical Ryan code Right Just kind of like I think we can actually Take the Preact
[02:35:07]  Signals implementation And And actually just Copy it Across For the For the Mutation Because the The state management Between the Preact version And the solid Or the DOM expressions Like the
[02:35:20]  one we made today Should actually be the same It's just that the view rendering Should be way more efficient With what we did today Than using Preact speed on So technically
[02:35:29]  speaking I think It's just a matter Of just adding These in here Okay There's a couple Other differences That I'm seeing right now And we'll We'll look at
[02:35:41]  that Just a second So Run Run lots Okay So run Is just build data Run lots Is build more data Add Is Append Update Goes through and updates the nested signal
[02:35:59]  see how it goes label dot value like there's a it's like nested swap rows looks good clear looks good so our question is what's the difference between selecting and removing
[02:36:15]  a row if you guys haven't seen the benchmark yet this might not make a ton of sense but it will in a minute yeah yeah i i guess you wrote this before
[02:36:28]  i did copy copy and paste it um but yeah i yeah exactly like the state management part should actually be the same um so it's it's it's the per row stuff
[02:36:39]  that i'm mostly concerned with um so everything below here can just go away essentially but um missing a closing okay but okay so remove gets an id and that should be the
[02:37:00]  same idea here remove gets an id the same idea here slice slice okay select is handling different here because there is no select being called there is an is selected essentially set selected
[02:37:14]  but i think i can just call it select and i think the only reason it wasn't select before was because they selected so this is like a verb kind of thing so select
[02:37:27]  remove select sets the id to the selected id remove removes it and then yeah that's all that's doing and then we don't need any this and then our code looks
[02:37:40]  way cleaner this almost looks like um solids implantation it's like pretty tight right um let's let's uh get correct indentation for the rest of this and double check that
[02:37:54]  the pre-act signals version uses select the way that like i like that i got it right because in the gsx the uh it's just select the in the
[02:38:03]  pre-act signals version i'm using like function closures in the in this version i can use solids very smart um or it's not solid as dom expressions very smart
[02:38:14]  way of using array syntax on clicks as a binding method that doesn't create closures um which is a nice performance update um improvement okay so let's i think that's all
[02:38:27]  we need let's see if this actually builds right yeah so our arrays sorry i said array syntax um because it it's like a binding syntax it calls select with this row
[02:38:43]  id but it saves us from making a closure on every single list element uh okay so let's try this npm uh run build prod okay what's this missing global variable
[02:39:02]  name what is that missing global variable name view rx oh i keep on forgetting the important part we gotta update the babel plugin to use our our our our library there
[02:39:17]  we go no more globals okay dist looks relatively good okay all right let's uh let's just try running this so um yeah we got three windows open that's usually the
[02:39:34]  way i run these things this one will just run in okay actually i did it a little backwards let's get back out of here in the root we run npm start
[02:39:48]  and this will uh start up our our our our server this is where i was building stuff and then this is where we run the benchmark if we ever get to that point i
[02:40:01]  don't know if i want to run it on stream while streaming i'm sure it'll it'll cripple things a certain way but uh let's see here um let
[02:40:18] 's go to localhost 80 80 and see if our framework is there now so it's frameworks keyed not pre-act signals but pre-act rx j s
[02:40:30]  x okay gotta remember to change the title can we create a thousand rows yes we can can we select a row yes we can can we remove a row yes we can can we
[02:40:40]  swap rows yes we can update every tenth row isn't working okay let's try that again update every tenth row okay that one's broken can we append let's see let
[02:40:56] 's see yes we can can we create ten thousand rows i think we can that looks like ten thousand rows actually how many rows is that twelve thousand rows oh yeah oh it's
[02:41:06]  not it's just because we started from two thousand okay so update every tenth isn't working but everything else is working okay so that's good it's mostly working library okay
[02:41:19]  let's go back to our code and see what we got going on okay so a couple things here first of all let's go to index and change this to pre-act
[02:41:35]  rx jsx let's go inside our main and i think it shows up one more time once in the title and once in the rendered html i think yeah
[02:41:48]  pre-act rx jsx okay next thing we need to figure out is why our update function does not work and our update function is simply going through for each label app
[02:42:00] ending the plus equal value to it which looks like it should work okay let's see if we can figure that out um that's interesting because we did actually copy this code
[02:42:19]  straight from the previous pre-act signals version okay let's sanity check the actually you know what we can do let's go to the previous pre-act signals version and
[02:42:40]  go to let's update that to why is it oh okay it's interesting it's only 1.1.2 but let's update that to 1.1.2
[02:42:50]  and see if we if we blow out the package json like i just want to make sure that it still works with the latest for there uh okay actually sorry cd js
[02:43:04]  let's go dot dot dot to pre-act signals and let's npm and then npm build prod all right start our server up again and just sanity check
[02:43:25]  that the like nothing weird has changed with it itself um let's go to pre-act signals index html okay that one is updating okay so there's there's nothing
[02:43:41]  okay okay so this is something specific to our implementation okay sweet pre-act rx gsx index html still spinning up view but that's because i haven
[02:43:54] 't rebuilt it um okay and actually so that we can debug it i'm gonna i'm gonna run build in dev mode run build dev i think okay this way we will
[02:44:18]  actually be able to debug the code while it runs okay pre-act rx gsx sanity check okay cool so what's going on where where where are we losing stuff
[02:44:29]  here all right okay so first thing we've got to look for is the update function does the update function get called all right it does so what happens when i'm in
[02:44:54]  here and i set oh yeah this is this is actually one fun thing pre-act likes to um ship minified source all the time uh it's probably a way that
[02:45:08]  i can alias it out of it but their default is minified i i always rely on the bundler to do it but um yeah there's a comment about the this
[02:45:26]  i mean yeah i mean you could view it that way but i mean again it's very a lot of people just use it for convenience um it's it's just it
[02:45:34] 's a nice binding syntax for being able to pass arguments through vs code have it a read only yeah i'm actually not i'm actually not sure that's that's a good
[02:45:47]  question something i consider for the future my biggest problem is i don't trust being able to figure out stuff with tooling um at all so what is happening here the fact the
[02:45:55]  fact that we're getting into here um is interesting because they're actually leaving very quickly here um which is interesting because i would it looks like oh no they're not leaving okay
[02:46:12]  never mind this might actually be harder to debug than i thought okay anyways we're getting the value that's not the one i want i want to know what happens when you
[02:46:26]  click into this one i mean i guess one thing we could do is we could yeah yeah check this out it's returning the previous it's not okay it's returning the
[02:46:47]  previous value okay let's see what happens now we're going to set it it it does append it okay good good good okay let's keep on going i know i'm
[02:47:03]  trying to debug minified code here so it's setting some flags on it i'm gathering this is telling it now that it's like dirty or something and then finally called
[02:47:17]  t well what's t t is like all right yeah i mean i'm not making a ton of sense of whatever what i'm seeing anymore because we're in like super min
[02:47:32] ified zone yeah they definitely do because we actually intercepted the getter and the setter right so the the problem is if we're not seeing an update here um for
[02:47:52]  in like it's not on the setting side because we actually see it intercept the getter and setter like this is definitely happening the problem is that the tracking for it um
[02:48:07]  is not like this row dot label i mean i guess we could attack it from that side and see what's going on but this row dot label is not doing what what
[02:48:18]  i expect it to be doing um because it should be just uh you know it we should have a subscription at this point that should that should update um but it's going to
[02:48:31]  be hard to see that running through the minified code like i i am not like trying to map back to this is going to be tricky because what i'm expecting here
[02:48:42]  during the set is that it actually notifies some kind of subscribers um but like without knowing preacts internals it's going to be hard to actually figure out if it
[02:48:56]  like about that notification of subscribers right because right now it's just sending flags yeah i mean this is not going to do it so interestingly though it's it's it does
[02:49:14]  look like it's running our effect uh in fact it looks like it's calling a cleanup function right now so let's let's let's uh let's let's go up
[02:49:27]  a level where is this yeah okay okay okay okay we're into our code why is it running selected oh right it's it's it's grouped this is this is classic
[02:49:44]  okay this is actually good grabs it okay okay okay okay okay okay okay okay i see what's happening uh so uh dom expressions referential check is failing because it's the
[02:50:14]  same reference that has changed um the question is how does the old value still okay this is interesting okay i i i get what's wrong now i just need to figure out why
[02:50:28]  this is happening essentially it's already updated the previous value by the time it gets here but the previous value should be yeah this is the problem yeah someone actually wrote in chat
[02:50:50]  didn't they they found the problem that's exactly the problem i don't know why i didn't hit this on the view one because this would be the same problem in
[02:51:03]  in the view one as well um if you think about it this is exactly what the problem is this wrote out label like it should be wrote out label that value in the
[02:51:16]  in the view one like we didn't copy this over from unless we did yeah i don't know that is the problem though i'm almost positive that's the problem it
[02:51:39] 's it's the reference to the signal is the same but we don't want the signal we want the value right all right let's do this create a thousand thousand update every
[02:51:49]  tenth row works all right we got working benchmark thank you for whoever in chat figured that out um yeah i'm like really curious now about the view one because it's like
[02:52:07]  sorry i didn't mean to open discord quit discord okay like uh view rx gsx source main oh do you know why it's not in the view one it
[02:52:30] 's because we're only using a deep ref so you don't need to reference the dot value deeply when you're in view like if you start with the ref you dot
[02:52:37]  you go something dot value and then everything below that's a proxy that's why that's why and in the preact version we don't see it because preact actually wants
[02:52:49]  you to pass the signal which has a whole other load of concerns around that but there we go okay cool so then i think we're good then i think what we should do
[02:52:59]  is is let's let's just play this fair right um what we're going to do is we're going to build prod with this um and then what we're going
[02:53:16]  to do and okay let's double check that still works right um sanity checker our work is always a good idea um and then what we're going to do update every 10
[02:53:31] th row yeah okay i think what we're going to do here then is okay we're going to we're going to run vanilla preact and preact signals all in
[02:53:52]  a uh uh and and this all four versions in here and this is going to take a couple minutes so we're going to chat through some other stuff but let's just i
[02:54:02]  think the benchmark's in a good place so i think what what we can do is preact preact signals preact rx and i'll do a vanilla as a
[02:54:10]  thing so we got our builds good we're running on the port and then we're going to do uh come on npm i'm like so lazy run bench um not all
[02:54:23]  of these because that would take us forever we're going to do preact preact signals um i'm going to leave solid out we all know where solid sits these days
[02:54:35]  it's about like 109 108 there's there's a bad run on the recent one but we it's let's see here preact signals and then keyed preact
[02:54:47]  uh rx um gsx let's see if this will run beautiful okay so we're gonna let it do its thing for a moment um how's everyone doing um
[02:55:07]  it's fun all right let's see how twitch chat is doing no nothing new on twitch chat you still still you guys are all still there surprisingly good numbers staying up with
[02:55:32]  twitch it's actually the youtube people that are dropping off oh that's click crazy it actually switched the benchmark to my other window well because i'd focus on it that's
[02:55:45]  that's probably gonna screw stuff up oh man well good i know that uh yeah we can take a moment's breath here um yeah so is this a new preacts feature
[02:56:11]  signals are a new preacts feature um in september they added support for a reactive system kind of similar to what we have in solid and um they use it in a v
[02:56:23] dom in a a very interesting way they figured out a way to kind of like hyper optimize um certain types of operations by passing a signal all the way through to the v
[02:56:32] dom and then the vdom treats the signal almost like a micro component and like updates that um so i thought it would be interesting to see if we could just take preact
[02:56:41]  signal representation and just rip out the vdom and then just make it like uh like just like pure solid style when some xjs discussion coming is a good question soon um i
[02:56:54]  i this is the end of this piece and then we're going to switch into this week in javascript and and talk about um other stuff that's been going on
[02:57:01]  but um this is this is this is kind of like the highlight of us doing it we were successful um i'm going to push the code up it'll be a repo and
[02:57:11]  whatnot but for now um you know i got update the readme and whatnot but for now it looks like we have um a working version i love when you run stuff like
[02:57:21]  this like just check out how uh like fast it runs like even with like like 10 000 rows is no this is a thousand row one but like even with this number of rows
[02:57:34]  yeah yeah this week in javascript is going to be fun i'm actually i i i was tempted to just drop this whole preact signal thing and just spend the whole
[02:57:43]  time talking about um you know various stuff around this week in javascript but i yeah i i want to i decided i wanted to do something like i was pretty tired
[02:57:52]  and i was like maybe i'll do a shorter stream but no i i figured that i it'd be fun to actually build this out and admittedly this takes a few minutes
[02:57:59]  to run through everything so you know it is what it is but i i think it's worth it we're just kind of just see the results okay yeah great question sorry i
[02:58:08] 'm not i'm the only reason i'm not highlighting the questions on the on the channels because when i switch focus the benchmark gets messed up but um someone's asking what
[02:58:16] 's the difference between keyed and non-keyed and the the difference uh there is that it's the same reason why you include if you've ever used react and you
[02:58:28] 've included the key property it's for this reason there's two different ways to look at the dom when you're rendering in a framework and you're like managing lists one ver
[02:58:37]  one one way of thinking about it is um is that uh each like the the dom elements are tied to the data model like they own it and what's nice about that
[02:58:54]  approach is that if the dom actually persists any state like animations or anything like the dom knows live and die with that data model and that's why you key you go like
[02:59:07]  for this id these are the dom elements it owns if this you know model with this id goes away then get rid of those dom elements the other view is like if you
[02:59:16]  have a bunch of dom elements on the page and you're just changing like like you have a list and you're changing which items are at which location well instead of um like
[02:59:24]  moving the items physically around like i actually do a better explanation of keyed versus non-keyed um in a previous stream that i probably have to go dig out but
[02:59:34]  like the other view is you have to understand sorry i skipped ahead a bit but if if you if you tie the model to the dom elements that means if you move the elements
[02:59:45]  around in the list they actually need to move the dom elements around but the other view is like look i already have a bunch of lists like items list items in front of
[02:59:53]  me if i change the dom elements i can just replace the data and update like the the the data fields and not move the dom elements in in the on the page and that
[03:00:02] 's what non-keyed is you basically kind of like when new data comes in you just hijack the dom elements that are already present um this can be more performant
[03:00:10]  because you're not like doing uh as much sometimes layout calculation or css calculation type stuff but it means that like if one element was transitioning and now it's on new
[03:00:22]  data like it's still transitioning like you you don't have that guarantee there's also other interesting things that are kind of semi thing like focus and like like things that are related
[03:00:32]  to like the dom that keeps state that this app state doesn't represent web components are another fun one there's like a lot of edge cases here where essentially we generally recommend
[03:00:45]  that things should be always keyed because you don't want to like to get into this weird zone and for benchmarks keyed is definitely the one that like it's harder to
[03:00:55]  optimize for um because that's why there's like large list reconciliation functions if everything was non-keyed you could literally just like iterate over and and like update the values um
[03:01:05]  you know and then if the list's longer add a few at the end if the list is shorter you know drop off the ones on the end and um but the hard
[03:01:14]  part is actually you know doing keyed like if you actually swap items and keyed you actually have to like figure out you know the least amount of moves you don't want
[03:01:25]  to like bubble sort your dom when you sort you don't want like every element to move one at a time down the page you want to do the minimal amount of dom operations
[03:01:34]  so um that's what we benchmark here so in a sense like i pretty much ignore non-keyed even exists like when someone releases something and it's like only non
[03:01:43] -keyed i i i don't even register it because it's like it's a cool optimization but it's like not terribly practical but i mean different frameworks have different opinions
[03:01:53]  here obviously react always you know annoyingly goes you need that key um but the uh the uh the the on the other hand like frameworks like view or svelte need
[03:02:10]  the key just as much but they they don't actually uh like push you to it they're just like the like they they they their default is actually non-keyed and
[03:02:22]  then you have to actually opt into a key which to me seems like an insane default but like that's just like how they roll so it's it's interesting to me
[03:02:33]  um definitely um that kind of split but i think a lot of that actually has more to do with like the easy versus simple mentality versus like and like the progressive mentality less than
[03:02:44]  any technology thing i remember someone i forget a little while ago is like you my favorite thing about svelte is you don't need keys well and it's like sorry
[03:02:52]  sorry to break it to you that is not true you know like that's you know what i mean like it leads to misinformation which makes it harder to teach keyed is the
[03:03:04]  default for react and every vdom author that i've ever talked to as defaults to keyed for some weird reason svelte and view don't default to key
[03:03:16] ed for view oh does you scream about it too okay well then then i take that back sorry to my knowledge view didn't scream about keyed at least not originally at the
[03:03:24]  time of the benchmarks like this were originally made view was all like basically was like you know like everyone made the benchmark with view non-keyed because like that was just the
[03:03:35]  way they did it and then people saw the performance difference and then we had the standardized it was actually largely view is one of the first frameworks that actually was the one on
[03:03:43]  the non-keyed side and we had to learn to differentiate but that could have been just implementation if view screams then i'm fine then it's i guess it's just
[03:03:50]  svelte um but if you read the docs for svelte they actually like warn you a little bit they're like hey you probably should provide a key but you know
[03:03:59]  a lot of a lot of like misinformation kind of goes around um someone said don't want to talk about resumability you're right this is a good time to talk a
[03:04:09]  little bit about resumability um but to be fair um i don't know if it's gonna be in a context that everyone fully gets most of my revelations around
[03:04:22]  resumability are have been have been more about just looking at like how much or how little of it you can do um and for those who aren't familiar with res
[03:04:35] umability that's probably a hard topic to broach if i just kind of like jam right into it um but yeah i i for those who don't know uh resum
[03:04:48] ability is this idea that you can render on the server basically serialize the whole app state in turning the including the framework internals and then when it starts up again uh
[03:05:01]  you you don't actually have to run pretty much any code like there's no hydration and i think that's interesting and i think the tricky part is like that could be a
[03:05:14]  huge serialization cost so usually it's like combined with some ability to um sorry did i say hydration i mean serialization cost yeah it's usually combined with some ability to
[03:05:24]  like identify which parts the code would never need to to run on the browser and that way you can just remove the serialization for that code so i've i've been trying
[03:05:34]  to i've been trying to focus on this problem specifically because uh quick is very he has kind of popularized resumability talking a lot about lazy loading and i i
[03:05:44]  think that a lot of the constraints change um when you get rid of lazy loading but one of the challenges and things i've been you know kind of thinking on because of some
[03:05:53]  of my conversations is if you're going to serialize the internal app state like what like like reactivity it becomes kind of challenging if people in their primitives put um non
[03:06:08] -serializable values like in their signals or in their computers like um that that that's probably like like the the the problem is if you depend on a system where
[03:06:27]  it's kind of like all or nothing like you need to serialize everything then like you can't have exceptions the way something like quick gets around it is that um they
[03:06:38]  aren't actually fine-grained is the best way i can put it like essentially they are they are finer grain than components but they aren't like purely fine-grained
[03:06:47]  so essentially when you have something that's wrapped in a dollar sign in quick that's the boundary at which serialization happens it makes it an interesting challenge because composing primitives
[03:06:57]  and quick requires you to basically make your own dollar sign things like making your own hooks is actually a bit involved but it means that there's this clear boundary and i was
[03:07:05]  thinking there for a bit i was like oh man that's that that is kind of challenging because what if you know what if one thing can't be serialized do you throw
[03:07:15]  away the whole system right um and so i was mentioning michael's pretty proud amount of things quick and serialized yeah and there's definitely like i work on the mar
[03:07:26] co team which also does resumability um and we yeah there's a large list and there's there's hard there's hard ones and there's other ones require a little
[03:07:34]  cleverness the biggest thing is most of the tricky ones involve the the notion that you can't completely serialize everything like there are things that aren't serializable and even the
[03:07:45]  hard ones aren't serializable in the pure sense of serialization what you end up doing is you figure out the minimal amount of stuff you can serialize sorry and have
[03:07:56]  it reference to some piece of the code like when michael says he serializes a function or closure or whatever he means that they you look at a function look at all the
[03:08:08]  variables that are used in the scope that aren't defined inside that scope give them a location in the serialization tree and then also in that serialization tree record the location of
[03:08:19]  that function so that when you you can basically pull that data and and you know basically continue from where you left off when you're when you're in the client but it
[03:08:30] 's important to understand that like the function itself isn't serialized it's part of the code we actually have serialized data and code as part of the serialization like they
[03:08:40]  they reference each other and um yeah so i anyway i i was i was kind of like stumbling on this a bit at it because like we also hit this a bit
[03:08:49]  with marco marco was like well if we analyze the reactor graph most of the stuff doesn't have to be serialized and i started thinking a bit more on that i
[03:08:56]  think he he they're they're right a bit because here's the thing a lot of quicks necessity for uh serializing comes down to boundaries and because all these boundaries have
[03:09:07]  dollar signs everything at the dollar sign boundary has to serialize because they lazy load the code but if all the code is available to you from the scratch from the top and
[03:09:15]  i don't mean all the code because i'm you know if you've seen solid's recent demos with partial hydration server components and and and all of that you start realizing that
[03:09:27]  like maybe like if something isn't serialized it's actually okay it just means it needs to run it needs to run so essentially if something isn't serializable on the
[03:09:41]  client it or on the server it could just be a deopt rather than like a blocker and i think this is especially true for something like derived values and memos and
[03:09:53]  i know i'm speaking like super vaguely abstract um technical here well well this is going on you're probably not visualizing it but the thing is memos can generally
[03:10:04]  be lazy um and if you're working and while we do them eagerly as we saw for for the rendering here if everything's already rendered i don't think i think it
[03:10:15] 's okay to push off the memos until like later later when you have to run that effect for the first time so as long as you serialize stuff in such a way
[03:10:24]  that the signal can trigger the effects you i i think you can pull all the memos out like you we have a push-pull system pull and from that point
[03:10:34]  if it's if it's cached good if it's not cached well then you have to recalculate it and i think i i think because it's
[03:10:46]  lazy like that it should be possible with a combination of stuff like partial hydration not to ship all the code that needs to be there because like if something could never like if it
[03:11:00] 's never read in an effect then you it never needs to be there kind of kind of deal okay sorry i i know i'm talking i i'm talking a little bit
[03:11:10]  out there but yeah yeah it gave me a lot of time to kind of think through this kind of zone of problem um what's the impact of having high serialization costs it
[03:11:20] 's a good question it slows down server rendering like if you see my my crazy death demo it can slow down uh you know on the hacker news like when you have like
[03:11:33]  all those comments it can slow down server rendering significantly so it's not just a matter of shipping less javascript you also you want to save on serialization costs so yeah
[03:11:44]  i've been thinking about this a lot because um we've attacked this a little differently like we started with server components and i actually as soon as i get my mouse back
[03:11:56]  so to speak here and we we kind of sum up on this i i wouldn't mind showing you some of the latest stuff that nikila has been doing um because he literally
[03:12:06]  um literally have uh server components pretty much implemented now um like in completion um i mean there's there's still some like small gaps and like we need to get streaming and
[03:12:24]  like like that but like we we from like up here like here you make a demo i make a demo perspective we can we can do the same thing like we even have like
[03:12:32]  the the nested routing and all like like basically everything in next um 13 uh we we didn't do the cache thing they did you know where they patch global fetch um i
[03:12:41]  that's a whole other topic maybe we talk about a little bit later but um like the mechanics around doing partial uh replacement of server components around components and data refresh and single
[03:12:57]  post like a lot of really cool stuff and um yeah i mean it's still experimental and we're working the apis um and stuff so i'm not going to say like
[03:13:05]  go out today we have the react server components but if once we merge in the stuff on some of these experimental branches and kind of consolidate on the apis i'd say
[03:13:16]  we'd have an experimental version where any of you could build the exact same sort of apps that you could with react server components um with with solid start michael's writing
[03:13:30]  some stuff here let's see marco has a similar d opt in the current version v dom islands if a data is received through tag parameters from a stateful child that parent
[03:13:38]  becomes the island root rather than the child because today marco doesn't serialize the body content soon though yeah it doesn't serialize a function to render body content yeah that
[03:13:51] 's that's an interesting problem too i was talking to mishko a bit um and he like when you're like marco or quick where you can automatically make the
[03:14:02]  islands like are automatically know the boundaries it's very important that like when people do stuff like pass render props like functions that render that you have a way of like scaling it back
[03:14:14]  like de-opting back up the tree because you're like like you need to handle that case like um because when i was talking to mishko about him um
[03:14:22]  serializing functions and he's like yeah because you can pass render props um to something that's otherwise basically not going to be needed you know like and i was like but if
[03:14:32]  you pass a render prop like a function that renders to a component that render prop is going to run in the client you're shipping that javascript and he's like
[03:14:41]  yeah but like that's the expectation like essentially um like you you could be in into some code that's like server only and have like a component that basically needs to go
[03:14:51]  to the client and then if you don't pass a render prop then that child will be server only but if you do then it automatically becomes goes to the client and and like
[03:15:02]  that's kind of automation stuff like marco has like like michael was just saying and you need to do that because people aren't explicitly putting the islands in um okay
[03:15:11]  it looks like our benchmark finished but like um what you can hopefully it makes sense uh at least what what i was suggesting here is that um if you have explicit islands like uh
[03:15:32]  astro or like react server components then um you can kind of just say like no sorry at this boundary you can't do that right and it like it's not an
[03:15:43]  auto like it doesn't need to be an automatic doop um it's interesting though because i was talking to steve from builder and he was kind of concerned that with those
[03:15:51]  kind of patterns um uh okay okay i need to rerun one of the benchmarks just for preact looks like when we switch screens we lost it so just give me two
[03:16:03]  seconds we go benchmark oh three i only need it for preact okay sorry um yeah uh sorry where i was getting to is that like his concern was that you start with
[03:16:30]  server components and then because of these like boundary rules people will just start pulling more and more stuff into client components just so like they don't have to deal with these boundaries um
[03:16:41]  interesting it's not just running benchmark 3 but it's fine we'll stop this after benchmark 3 which is this is the second one um which is an interesting thought and interesting
[03:16:55]  reflection and i think that we'll have to see i feel like that's just education i feel like if you actually how should i put like if you actually um learn the principles
[03:17:10]  here and the rules and don't get me wrong there's gonna be when you have a resumable framework there's definitely rules um two then this is just less of
[03:17:18]  a concern so i guess we'll just have to see how this plays out but um interestingly enough solid has started from the well not that uninteresting we started from the partial hydration
[03:17:30]  side like islands like like most of these framers did but then we went straight to server components rather than going through resumability so i guess we'll have to kind of
[03:17:40]  see how that all ends up um ultimately for us all right so where are we all right let's um let's run our results npm run results now there's going
[03:17:57]  to be a few other things from previous runs that are going to skew it so i'm going to remove them from the results here because um like i'm running like
[03:18:10]  i expect the results for this run to be worse than my average set of results because of uh yeah you can see like the ones i didn't run are all up here um
[03:18:19]  except for react hooks so we're going to focus in on stuff we ran this time because uh i can't this i got to take this with a grain of salt but
[03:18:32]  um like i don't know if me trying to stream while doing this just completely um removes any value of this and i'll have to do this later but i just i'm
[03:18:43]  just curious if we can at least see something from all of this stuff okay yeah i think yep i think this is actually relative to the running conditions i think this is actually
[03:18:57]  exactly what we'd expect to see okay so let's look at this we obviously have the new library wrote we have preact with signals and then we have preact and then
[03:19:06]  we have vanilla js as our baseline okay so create rows is almost identical between the two non-vdom libraries vanilla and the preact jsx um the one with signals is
[03:19:17]  actually more expensive to create than the vdom one so you see it's like these ones are 42 this one's 51 and then signals actually updates it to 58 and then
[03:19:27]  when we replace rows um it looks like we are taking a bit of hit with our our version it's 47 versus the 41.8 from vanilla but then compared to preact
[03:19:39]  again preact signals is the slowest for replace rows again this is the extra memory of using reactivity um but it is still relatively close but this is where things the
[03:19:49]  table starts uh turning around a little bit preact vdom for that partial update 210 where the preact rx and the signals are almost identical basically this is like there's
[03:20:03]  almost no rendering overhead here this is like pure reactivity update the individual cells you see vanilla is a little bit faster but this is a big win over the vdom normally so
[03:20:13]  this is where preact signals actually is a real benefit over just using preact plane right is that you you get those fine grain updates at basically the same speed that you
[03:20:24]  get in like something like um then like a something that would be more similar to solid um select row again vanilla and our version are almost identical signals improve things but not by
[03:20:38]  much normal preact takes the full brunt of the vdom here swap rows looks like they're all comparable honestly i don't know why the signals version is a little bit
[03:20:50]  heavier but i i i don't know if that's statistical thing but relatively speaking they all swap rows because they're list diffing it's pretty similar vanilla is obviously faster remove
[03:21:02]  row this is where memory overhead comes to hit you it looks like there isn't that much difference between preact and preact signals um but obviously vanilla and our library are
[03:21:12]  much faster um similarly creating many rows again preact signals takes a hit here over preact but again our our approach approaches vanilla and speed pending same story and ultimately cleaning up
[03:21:31]  same story again so all in all this is pretty good run here i i we we we'd have to go in and check it out but my suspicion looking at these numbers is
[03:21:43]  this is very this is the closest one of my clones to solid i would i we didn't run it with solid we have to check it again but i'm i actually imagine
[03:21:52]  that this is probably 0.01 or 0.02 slower than solid because like when i run solid on my computer it's like it's different than the official results i
[03:22:04]  usually get a 105 or even maybe 106 but i it would be close enough that i need to actually run it to actually know the the difference they they might actually even be
[03:22:15]  pretty close to tide so i will say preact signal implementation is a looks to be other than missing untrack uh a fairly good core um for building a reactive render
[03:22:28] er um whereas um yeah but in terms of performance um yeah startup time hard to tell i mean preact's apparently this code size um preact our renderer made with
[03:22:46]  signals is smaller than the preact and the preact signals one the preact signals one makes it a little larger two kilobytes more than preact um and and uh
[03:22:56]  our version is five kilobytes smaller than preact so it's actually smaller than using preact uh and it looks like while this numbers aren't as low as solids
[03:23:09]  here from memory it's actually pretty close it looks like a lot of the cost is is brunted by the combination like preact react reactivity actually is pretty is dec
[03:23:21] ently i think we get 3.1s or 3.0s on some of these for solid um actually i can put solid back just for this one it's not gonna
[03:23:28]  be fair for the performance ones but we can actually see what the memory usage looks like okay no uh yeah yeah okay see so 3.1 yeah so the memory usage is
[03:23:40]  almost as good as solid actually see solid over here um so pretty good and it's actually the vdom ones that are critical and actually vdom plus signals looks like it's
[03:23:55]  yeah i think it's the it's the combination that's definitely makes things a bit more expensive you have to think about this because like there's a trade-off here i
[03:24:04]  think it's because i have nested computed because i wanted to get those fine-grained updates if i got rid of the nested computers then we wouldn't get
[03:24:11]  the fine-grained updates because you have to pass a signal all the way to the vdom um when when when actually doing this stuff right like and because of that if
[03:24:26]  you want to get the fine-grained updates you actually have to put an additional wrappers essentially which ups our memory usage but on the positive we get if we look
[03:24:39]  at the signals implementation here we get significantly i gotta remove solid off here because again this is misleading because solid was from a different run but you get significantly better update and select row
[03:24:54]  performance with with signals if so it's like it's it's this trade-off you either like add more memory affect your rendering speed and basically get almost no benefit over
[03:25:07]  over using normal preact other than ergonomics or you optimize for the updates but then you take a hit on memory and hit here so it's like it's an interesting trade
[03:25:19] -off i went i think this gets us the best results because the other one actually makes preact signals slower than preact overall where this one net positives just because of
[03:25:27]  how good those fine-grained updates are versus create but it's it's kind of like you don't get you get you gotta choose if that makes sense all right so
[03:25:35]  i think i think that's that's pretty much the thing i most interesting thing for me out of this though is preact's actual signal implementation is good it's like like
[03:25:48]  like that the actual memory usage and everything it doesn't carry those properties used with our renderer and with our performance is actually quite good it's the combination of using the
[03:25:58]  patterns with the signals with a vdom that's actually causing us the most pain to get these small gains in performance in these two markers so yeah it's it's it's
[03:26:13]  it's interesting does preact need on track no but it needs on track if it wants to build a renderer like solid but it doesn't need it for itself for
[03:26:23]  its own purposes it probably doesn't need it on track which is why they they didn't add it so yeah i i think i think that's uh i think that kind
[03:26:34]  of summarizes this this part of things um pretty well for this bench no we we didn't we didn't actually need it for this bench um because uh there's nothing like
[03:26:47]  it's called it's simple enough that i didn't do anything bad with it there's no context there's yeah for this bench mark we did not need on track so
[03:26:54]  you're going to be fine using preact rx jsx until you get into like weird states and then you're like why is my half of my app re-rend
[03:27:04] ering it's like because some weird thing is getting subscribed to you didn't expect because you didn't like you weren't as vigilant um i i i think i think context
[03:27:16]  might be one place where it's actually problematic but i think everything else this is actually uh this will actually work perfectly fine um for simple stuff so yeah yeah this is this is
[03:27:31]  this is this is illuminating i wasn't sure if the memory usage from preact was actually going to be the like like the signals was going to be the stopper no
[03:27:41]  the signals implementation is pretty good if i can say so myself it's it's actually the like it's like preacts are already pretty high in memory compared to some of
[03:27:53]  the other virtual dom libraries not like not react but i mean i'm talking like some of the more performance oriented ones right like uh if i grab like an inferno or something
[03:28:02]  in here maybe i don't have it locally if i haven't run it recently to have inferno um i have react hooks where's react hooks get ignore the results where
[03:28:13]  they show up because they're from a different run one different condition but let's do this if i look at um memory usage um okay yeah i don't inferno is down
[03:28:29]  here in in preact range with our in our range with our new library um even yeah whereas preact proper is kind of more like react range on memory usage but like
[03:28:43]  it's it's it's it's it's interesting to me because it's it feels almost like you took the this implementation and added it to this implementation to get those numbers
[03:28:52]  like it's a sign like memory implications for a benchmark like this which cares a lot about memory in real world you probably aren't going to be creating 10 000 items like
[03:29:02]  you get it it actually has like a it has an interesting scaling cost consideration anyway sorry i'm just gonna i think for context to break would require um it would require like
[03:29:23]  a certain situation where you have deeply nested control flow that talking to each other because what context does is it tries to resolve the children it does so recursively and if those
[03:29:34]  somehow all managed to get into the same thing you could do a lot of inefficient re-renders i'm not going to create the situation for it i think like a very
[03:29:42]  basic context thing where the children immediate children or dom nodes would not have a problem um it's it's just it's one of those edge cases i don't want to
[03:29:53]  try and account for um you know on on that i think if we really wanted to be safe we'd have to add an untrack mechanism um which basically snuck peek
[03:30:03]  in but then you'd have to import stuff from our library rather than from pre-act signals core which is usually like my not my pattern but maybe if we just like
[03:30:13]  treat it like a new framework that would be fine anyways this is just like playing like i'll put up the code so people can inspect it but you know i think i think
[03:30:22]  it's i think it's cool at least that um you know we were able to take a different reactive implementation and produce something pretty fast all right um let's i think
[03:30:38]  unless someone implemented untrack uh let me see here if i can grab that yeah i'm gonna pull this right over ultimately this is the way to go i think yeah
[03:30:58]  so what are we doing here untracking oh interesting an account for nesting very stay liquid yeah very very smart because nesting actually matters in some cases someone called it unt
[03:31:23] racking on track you could actually start tracking it unintentionally so you're right you have to keep a counter and then replace essentially their signal prototype implementation of value with with
[03:31:39]  with a peak versus a non a peak yeah now this looks good we can incorporate something like this thank you for for sharing this um i'm i'm i'm done with
[03:31:58]  this topic probably for today but i think that's cool um have i seen which tweet something's not i'm missing contacts oh yeah yeah yeah yeah yeah yeah yeah
[03:32:40]  the thing is as i went over earlier this was actually a super common case when i was doing like media grids like everyone has a need for selection or multi-selection
[03:32:59]  and the fact that you can optimize it with a generic api i think is a benefit it's kind of like you wouldn't if you're using redux and there
[03:33:05] 's like a create selector api you want to do it i think the problem is but it feels like justified cheating in short there's only one selected to be smart moving
[03:33:16]  the whole logic yeah and then dylan's mentioning here yeah i mean as i said i i spent years trying to figure this out um and salt if you look at solid
[03:33:40]  there's like source code from like 2018. i actually went through like five different iterations on this the i was happy with this one because it actually gets shipped as a primitive
[03:33:49]  that you can use in any situation um solids to do mvc i don't know if it's still i check it we use it for editing and stuff like we actually
[03:33:57]  use this mechanism in a in in normal like idiomatic demos not just in benchmarks so um i i get his concern but it like i feel like this is an important part of
[03:34:09]  a of the reactive solution he probably was like oh i don't want to implement it but when you think about it this sort of map utility makes a lot of sense anyway
[03:34:17]  um yeah yeah no the uh android has done amazing work um especially on stuff like he invented the as far as i know like the lit approach like the tag template literal lit approach
[03:34:34]  and he recently put out a blog post that i thought was that i thought was funny um which was um what what what what did he do uh let me see if i
[03:34:44]  can find it i i i follow him on medium so i'm for sure he's going to be in my like notifications or people i follow i kind of remember how this works
[03:34:55]  again on medium web reflection there he is he wrote a whole article um they published just yesterday about about making jsx more efficient and it's funny because i i read this
[03:35:17]  whole thing and he's like kind of recreating dom expressions but i was like i was reading this whole thing i was like man this reminds me of an article i wrote four
[03:35:25]  years ago like he's he's just discovering all the signal stuff and the reactive stuff it's funny because i was trying to tell him about this a couple years ago and
[03:35:31]  he like and he didn't quite i don't think quite followed what i was saying because he's like yeah we can add reactivity to lit i'm like yeah but you
[03:35:38] 're not you're never going to get the same performance because you're not doing the fine grain rendering he's he's he's now discovered fine grain rendering i guess after the
[03:35:44]  recent you know um like the recent thing because honestly um his library was actually an influence for solid because we were doing individual uh create element calls um when we originally did it
[03:35:59]  with the compiler and i didn't know and then i we i found out um through uh um i forget it was a stage zero or maybe it was like one of those
[03:36:12]  libraries um that was like kind of fast when the benchmark came out and i found out like from the tag template cloning stuff was actually like faster and i kind of reverse engineered
[03:36:24]  what they were doing in hyperdom and lit and then that's how solids stuff worked but it's just it's interesting to me because this this this article is like exactly
[03:36:33]  like the type of thing i would have been writing back in my old medium days um uh so it's kind of like a throwback um what if you ever said how i
[03:36:44]  wrote the fastest javascript framework how we wrote how i wrote how we wrote a framework again yeah same kind of yeah february 9th 2019 that's that's
[03:37:00]  my birthday anyway uh i call it the signal revolution yeah okay so we're kind of done on this stuff uh for now let's get set up for uh let's get
[03:37:19]  set up for um uh this week in javascript and other topics like i was tempted to pull it out of this week in javascript but i literally have been i
[03:37:32] 've literally been in poland like this this whole week so i have to admit i haven't been keeping track of stuff as much as i usually do so let's let's
[03:37:46]  see if we can get set up just give me a moment here let's close some extra windows we've we've we've taken in the speed of fine-grained
[03:37:54]  rendering with pre-act signals and we can acknowledge that pre-act signals are seem to be a pretty fast pretty memory efficient uh signal uh representation okay let's do this let
[03:38:06] 's just close some all right close this down uh close this down and get this set up in a second probably close this down too all right all right sorry just give me
[03:38:31]  a second to get all set up because yeah like this is a week ago yeah and i'm like pretty much straight poland right um i mean actually grab discord no not
[03:38:55]  there um i want to actually i want to do one more thing before this week in javascript i want to show off one quick thing um which is which is which
[03:39:11]  is which is which is um sorry there's so many messages on discord i want to actually get to the one that i wanted to get to um um i i've got
[03:39:26]  one more demo that i want to show that i thought was really quite cool um i've been having a hard time keeping up with stuff because i've been you know as you
[03:39:34]  can imagine um um working in uh different like polish hours and stuff but nikhil shared this with me and does anyone recognize and someone's asking in hacker news demo no
[03:39:50]  does anyone recognize have you has anyone seen this demo before i've seen this demo before um this this this this is a this is a pretty cool demo um and i remember
[03:40:03]  the first time i tried it and i tried it on stream and some of you might remember this demo but essentially in this demo you can kind of navigate around you can i
[03:40:15]  don't know what's wrong with this this one's empty i mean maybe edit some notes delete some notes i'm just i'm gonna clean this up again although some of these
[03:40:23]  look like they're they're around well but like essentially you can see a note on the side you can expand the text in it you know you can go in here you can
[03:40:31]  view it you can edit it you can do stuff like add funny characters on the end and you click done and then it shows up on the sidebar and you can do
[03:40:40]  it and we we've like this is a pretty typical kind of notes app um but what's interesting for me is i don't know i haven't actually looked at this demo
[03:40:54]  in thing this probably has more javascript in it than i would expect but let's let's see what let's see what our network tab gives us here when on a
[03:41:02]  page refresh yeah okay so this still has 20 kilobytes of javascript on this demo so i'm i'm interested in where this fits in but the cool part
[03:41:13]  about this demo and i think it loads more here yeah loaded a big chunk there 15 kilobytes is what this demo is actually doing because in a sense you know so
[03:41:28]  what you know it's just a dumb notes demo and it's 20 kilobytes doesn't seem that much out of range but when you consider the cost of stuff like the
[03:41:38]  editor and whatnot this demo actually is fully server component demo which is actually kind of cool because it means that stuff like the data serialization of these comments and stuff like you
[03:41:55]  know the double data problem just doesn't exist like you're not going to find this outside of the html here there's no like solid dot json or whatever with
[03:42:04]  all the data for this and what i always liked about this demo is that the editor is actually like like basically the preview is like you you have the ability to have something
[03:42:16]  that's like both client and server component in this demo but let's let's actually look at what happens here let's let's see if i if i get in here into
[03:42:24]  this link and then go into this display am i in the wrong one i want to get into this one why is this not showing me the right stuff header because this is
[03:42:34]  server rendered title is super long server rendered oh it's because i'm like i'm like i like the one i'm on okay let's go here open for preview this is
[03:42:45]  something very cool right let's see this something can we make it cooler can we make it cooler still and when i press done here what i expect to happen is you notice
[03:43:02]  the whole page didn't actually end up unloading it actually just ended up replacing the text here um this is actually showing off um dom level data diffing um and i believe
[03:43:15]  it's using a a library from from uh from nate from astro actually using micromorph here as the mechanism of doing not only partially switched switched routing which we
[03:43:27]  talked about but partially switched uh um partially switched uh updates so this code updated from a network request on this to to the server there we actually didn't ship this component like this
[03:43:42]  this this text component isn't actually shipped to the browser um what we have here actually is if we look at the fetch xhr request what you're going to actually see
[03:43:53]  is we're going to post the node id and the body here and it's going to respond with the updated partial page um that gets diffed so like you see some h
[03:44:07] tml here and stuff so like what's cool is this actually happens in a single post so you actually go post and responds with the next page um but we like as
[03:44:18]  i said we still have all the partial routing stuff we showed before so this this actually finishes the story technically this this basically does what server components does i can't speak too much
[03:44:32]  about size to be fair um if i remember the original react demo for this and you can see here like there is there is a cost that we are i think you'll
[03:44:46]  um there is a cost that comes with with this stuff because we've got a few different islands here we have like something for dark mode and we have a context and like there
[03:44:56] 's there is some like bundle things but what i want to draw your attention to is that these are the components that we need to be interactive on this page this is right
[03:45:06]  and there's and they're kind of all shipped here then there's basically entry client and web which are basically the framework entry client um and and and so basically like there's
[03:45:21]  some all all solid and all of this server component stuff is is is here so basically i i i think there's simpler demos you wouldn't actually bring all this code but
[03:45:34]  basically like 10 kilobytes of javascript and you ha is all you need to get started with with with our server component solution essentially it looks like it's like 10
[03:45:45] .9 in this case so basically for 10 kilobytes of javascript you have a full server component solution um with routing and with mutation i i i i actually kind
[03:45:56]  of almost want to like look at the source code because i haven't yet but because nikil told me he was playing he was actually using sorry not there so he was
[03:46:04]  using solid starts uh um uh what is he he was using solid starts uh um let's see i actually don't know what branch we're on this is my problem probably is
[03:46:18]  it notes yeah um using solid starts actions to actually be able to do posts right so like if we actually look at the source code here um he's got a few components
[03:46:31]  yeah we need to fix this up i agree but i don't know what this is that's interesting oh i mean i'm like in there i i'm like in i
[03:46:51] 'm i'm like in i need to actually go into the example and like i'm looking at i'm like in there i was looking at the wrong example i'm so sorry
[03:46:57]  okay let's look at what the end user actually writes okay here we go components here we go this this looks this looks i was looking at the docs um that's what i
[03:47:05]  had a table of contents and all that stuff i was looking it's all starts docs okay so we have a sidebar edit component what's our edit button yeah right because
[03:47:15]  we copied this example from facebook so proper copyrights good work nikhil um anchor tag okay what i want to know is i want to see the edit button notelist
[03:47:34]  search field sidebar cybernote text with markdown this is probably this is interesting what do we got here oh interesting i guess you're just kind of playing around with context
[03:47:46]  use client um all right what i was interested of seeing is this figures out from the location if the if it's active we're using transitions here sidebar note right right
[03:48:19]  so it the server component has the sidebar note component whose children are here are here and expanded children here which is kind of smart because these get server rendered and then they
[03:48:30]  get injected through um they get injected through as stale server and that's why we don't need to serialize any of this data right we get to skip the hydration of
[03:48:45]  these pieces even though they get passed into the client component here this is cool although this is not and all this code runs on the server but what i actually wanted to see
[03:48:54]  was how the was actually how all the not this one sorry um was actually how all the uh like we haven't finalized apis we're just playing with stuff right now
[03:49:11]  but i was kind of curious like if i got this page am i looking at the i'm looking at this i shouldn't be looking at the sidebar i actually want
[03:49:19]  to know not the note list search field go to routes you know you're right i need to look at the pages here notes note this is what i want yes and i'm
[03:49:32]  in edit notes note slash edit and i go into the note editor which is a client component which create a server action same pattern that we've been using is saving save note
[03:49:46]  then it's got some logic about this note id i guess this is for creation so when you create you've got to do a you've got to hit basically oh yeah are
[03:50:00]  you using cloudflare here so it's a creation you do this and redirect to the note otherwise you edit um the existing note so like this is just using posts and
[03:50:13]  like server actions like you're familiar with um delete note server action and then and then in here yeah where preview if not as draft delete do do do do do do do
[03:50:39]  body set body current target okay yeah i mean i'm gonna have to probably look in more detail here but like essentially we use our same mutation mechanism to handle posts and it just
[03:50:50]  updates using the server component mechanism so it's it's kind of funny it's like an old school mpa right like you you go to a page you press post but then
[03:50:59]  the page doesn't refresh and you get the you get the the part of the route that updates and then it it preserves the islands and diffs and diffs the uh
[03:51:09]  the outside of the serving phone stuff um we wanted to with this to i mean it's funny in this context but we we went with the dollar sign apis because we want
[03:51:23]  to make it very clear that this gets statically hoisted i.e closures don't behave like you expect you can reference global stuff but this is at a global scope
[03:51:32]  um we did take this convention to a certain degree from quick um as an indicator um but yeah so we're still working on apis for the server component stuff uh specifically
[03:51:45]  but um it's mostly because it's it's if you if you add a convention like this it's possible to make your own dollar sign functions that's what we're
[03:51:52]  thinking i see yeah so this is not using the actual form version like a progressive enhanced form but essentially like it's still using the action mechanism and yeah this is very cool
[03:52:12]  as i said this is hot off the presses i just wanted to kind of show kind of the work we've been doing we've been making incredible progress in getting um server
[03:52:19]  components um into solid start and um as i said they're mostly functional we just we need to figure out what patterns we want to for apis and i think one of the
[03:52:28]  hardest challenges and probably what's going to delay things because i dragged my feet is i don't want to like get into the data fetching api zone like talking about like
[03:52:36]  async components all the stuff that they've been talking about next until i figure out resumability because i think with resumability that changes um the rules for how
[03:52:47]  client fetching works and i think so i i to in order to bridge the gap i need to put more thought into that because ultimately what you want is this and then you
[03:52:59]  don't want to hydrate um when you when you get to the next um partial like it's i mean at this point you're already getting like 90 of the benefits
[03:53:10]  right because like when you if you preserve these islands then you don't need to hydrate them they're already live and then like a new navigation you're only going to hyd
[03:53:18] rate those little pieces but you can see that wouldn't it be cool if you could also just not hydrate um so like like it's the last stage optimization although it's
[03:53:27]  probably one of the harder ones to do whereas this already lets you shave a lot of code i i'd be interested i guess at some point to understand what the uh what
[03:53:35]  the single page app version of it because in solid it's not uncommon to create single page apps that are that are like less than 20 kilobytes like the hacker news example
[03:53:45]  but my suspicion is that this this demo in non in single page app mode would be um significantly larger maybe in the in the 30s probably maybe 35 kilobytes so
[03:54:00]  this example maybe isn't as code reducing as like some of the hacker news and stuff because it's a little less static but this example probably it has a lot of interaction points
[03:54:13]  so yeah it's interesting we'll see how the scales that's that's why we're doing this anyway yeah uh i thought this was cool i wanted to take a look
[03:54:29]  at it hmm looks like we have a bug somewhere uh okay so now that we've shown off server components um in solid um basically solid server components all in about 10 kil
[03:54:51] obytes um so you're not going to take any kind of hit um from like page load or whatever for this um let's let's move on to uh to this week
[03:55:04]  in javascript okay let's get everything all prepped out okay um side note before we get into this um got to thank j larky or parasocial
[03:55:22]  or whatever you want to go by today um found this great found the link to the art uh to what i was talking about in the last video with the interview between sean and
[03:55:34]  sunil and i love this whole interview um but he found the part where he's talking about like server components weren't about seo or ssr or whatever facebook
[03:55:43]  just really liked the user experience uh or like or the react team rather really like the user experience and like the sort of the idea of that we could simplify the the dev experience
[03:55:55]  i know people are kind of still wrapping their head around server components but i think ultimately what you should be thinking is if you liked what remix has been doing it's more in
[03:56:04]  that vein of things except they're trying to do it in a way that doesn't make it feel like you're losing anything from a single page app whether that's achieved is
[03:56:13]  a whole other thing but i just wanted to kind of um point out this article before we actually got started okay cool let me just open up a couple more tabs i honestly
[03:56:26]  i don't know if i have actually much solid news i've been so out of it um this did get announced but yeah let's i'm just gonna okay i've
[03:56:48]  got a couple things we'll just keep that there and then we got one more thing here actually no we don't have anything here i thought i bookmarked something okay cool
[03:57:09]  so then we're pretty much ready to go all right so yeah um let's let's see if we can get this going let me just zoom in one more one more
[03:57:28]  okay yeah get there all right okay i know how i'm gonna handle this and let's get ourselves ready here okay stream yard check in twitch everyone doing still good in twitch
[03:57:47]  sent me in sent you an intro for a sequence it's like 12 seconds long okay okay sorry fuzzy i'm just catching up on and stuff here um oh that's cool
[03:58:08]  i don't have audio playing through through the mic but let me see if i can like how to show this without without showing this oh wow that's cool um i'm
[03:58:46]  like too clumsy to be able to pull that off probably right now but that is definitely cool thank you fuzzy um i've actually been cutting out the video so maybe like when
[03:59:01]  i actually like um edit them in or something we could do something like that um i'm just so bad at this stuff but that's very cool yeah there's like music and
[03:59:13]  everything you're not hearing it but it's it's cool all right all right all right um all right all right good all right here we go let me take a
[03:59:31]  swig of water go ahead all right all right all right yeah i could upload it right into stream yard and make it part of my show yeah that's that's a
[03:59:52]  cool idea all right that's that's a cool idea let's set myself up here let's talk about this week in javascript there's been a few things
[04:00:16]  going on uh for this week in javascript but i have to admit i wasn't really near any of them um for me i actually was traveling um to a conference in
[04:00:33]  poland um so the only thing for me where this week started was right before i left um i saw the announcement from nordvpn that they launched a site powered
[04:00:42]  by astro and solid which is pretty cool as we know um those two are blazingly fast friends and that combination is is pretty powerful way to build a variety of sites
[04:00:53]  so i was pretty stoked to see that um definitely very cool but as i said i i spent most of my time uh essentially uh in in poland uh which means i
[04:01:07]  missed a lot of the really cool stuff that was going on um in the case of solid um we've just been seeing a lot of great work in libraries stuff like es l
[04:01:19] int uh plug-in which i'm sorry i didn't stop on it here but this is pretty big um it's been in the works and it's worked for a while
[04:01:26]  but really want to highlight that it's really progressed over the last couple months um so it's not part of our official solid community so um ensuring that it will be maintained
[04:01:37]  into the future it's it's very helpful because as i said it helps detecting when you might be breaking reactivity and whatnot um other thing was uh the some some big larger
[04:01:50]  apps are getting ported over to solid yeah i honestly don't know what this app is but someone who reported a 155 page app into solid um seems like a considerable
[04:02:04]  effort of lifting um and they still like us at the end so i'm pretty happy about that uh react finland also finally posted um up the individual shots for the my talk
[04:02:16]  that i gave last month but honestly i i'm just the the big news this week isn't my trip to poland or um i just see lots of shots from pol
[04:02:31] and um it's really the next thing actually you know what i can show this off i think this is kind of cool uh i did get a award in poland um which
[04:02:42]  was kind of cool um they actually had this like made a made out of glass so honestly it's awesome to be recognized for work in the community so pretty cool and uh
[04:03:01]  but yeah i mean who am i kidding uh a lot of next conference this week happening at the same time and um although i i'd already agreed to go to react pol
[04:03:12] and before um this all came up um so i ended up not going to next conf like i would have probably otherwise have but it's it was definitely been a kind of interesting
[04:03:27]  um conversation and i think that's probably what the focus of this week in javascript's going to be the most of the big features in next comp were um announced
[04:03:49]  during the keynote session which i recommend everyone check out essentially uh they they framed it that they focused on three areas right of improvement they focused on like the build tooling they focused on
[04:04:02]  the framework and then they focused on like the component um picture like uh i don't know what else to call it but like uh stuff like handling images and fonts and stuff
[04:04:14]  properly and in all three areas they announced some pretty incredible stuff admittedly um both uh on the build side um turbo pack which is um kind of seen as a potential successor
[04:04:31]  to webpack they basically got tobias from webpack working for sale a few months back and you're probably going oh what's going going on with that well now we know
[04:04:40]  um and it's posted some pretty impressive performance numbers uh there there is a decent amount of chatter about that actually uh which honestly it looks like i didn't actually clip for
[04:04:54]  for this um but uh let me see here if i can find it right off the bat i think evan you um has been talking about a bit because one of the comparisons
[04:05:07]  in this was to beat and the comments was like it's seven times faster than um than beat and that or sorry 70 700 times faster than the webpack and 10 times
[04:05:21]  faster than beat and the original response was just like okay well if it's really fast we should look into it um and evan did look into it so i don't know
[04:05:32]  how how let's i think this is probably worth bringing up because people see the headlines they don't always see like the aftermath so um yeah interesting essentially when you're comparing
[04:05:53]  compiling um the the the comparison they did at next conf compared um um next 13 next 12 beat and next 11. and one of the first observations on the comparison is
[04:06:08]  that next 13 actually uses server components so essentially um it's not quite comparing the same things someone's saying they got a new version of the tweet here let's see if i
[04:06:26]  can pull this one over I updated VeeT versus NextTurbo by using SFCC to transform refresh for VeeT to avoid confusion. I have deleted the
[04:06:38]  previous two tweets with outdated numbers. Okay, here we go. I see. Basically, there's an optimized transform for React, which isn't present in the others.
[04:06:57]  So, yeah, the numbers are much more comparable in this scale, and this is probably a fair thing. Basically, individual nodes that are isolated kind of test, you do
[04:07:12]  see some more benefits from Next approach. It's almost double, but for like a whole root kind of scenario, they're almost identical. It helps a lot in the
[04:07:25]  root component because the file is big. Previous cost is 300 milliseconds in Babel transform alone. This makes VeeT almost exactly the same speed for the Turbo Pack.
[04:07:31]  Interestingly, in the Leaf scenario, Turbo Pack is still 69% faster. This entails VeeT actually caught up with Turbo Pack as the file gets bigger, actually scaling better
[04:07:40]  in larger apps. Hard to say for sure, but there we go. There we go. Okay, so maybe not 10x. But I mean, that's kind
[04:07:52]  of beside the point. I think it's good to have, you know, different competition in this area. Obviously, Vercels needs to, like, Next uses
[04:08:08]  WebPack and they need to move from WebPack. And I think this might be like a reasonable path that they keep, you know, Turbo Pack similar to Web
[04:08:18] Pack. Then it's like a more natural flow than going to something like VeeT, which is a whole other ecosystem of bundling. I'm a big
[04:08:23]  fan of VeeT, but I can see why they invested in this. So anyways, I'm glad for this clarity. This helps a little bit and kind of making
[04:08:33]  sense of some of the stuff. Right. To be fair, with any of these benchmarks, you're supposed to picture things scaling up an incredibly large amount. And this is
[04:08:45]  for the developers. This doesn't affect end users at all, right? So, Turbo Pack is also new. I think, like, it's very low in versions
[04:08:55] . You know, there's still questions around plug-in system. There's, you know, like how that's going to work. Like, VeeT's strength
[04:09:01]  is the plug-in system. Like, I did a whole talk about how awesome that is. I'm sure this will all come in time. This is just kind of
[04:09:08]  get your mouth wet. And I think they succeeded at this. But this isn't really what I, like, it's not where I live, right? I'm
[04:09:19] , you can tell I'm not a build tools kind of person. So I was much more interested in the React side of things. Because we talked about this a bit last
[04:09:30]  week. It's hard to gauge, because so few people have used it, like, how much people are getting into server components. And how much, like, that
[04:09:40]  fits in their patterns and in their thinking. And that definitely, you know, is something that I'm very interested in. Quick question to answer. Solid uses Vee
[04:09:54] T, yes. Almost all our stuff is VeeT. I mean, we have a web pack, you know, set up and a few other ones. But pretty
[04:10:00]  much, our starter templates are in VeeT. Solid starter is in VeeT. We're pretty much full VeeT. And yes, if they want to
[04:10:07]  use Turbo Pack under the hood, they could. So yeah, I mean, VeeT is like a meta-bundler. I don't know what else to
[04:10:18]  call it. It might be interesting to see how these technologies align in terms of boundaries. This is a good question, because obviously, the question is like, how does
[04:10:25]  Turbo Pack play into Turbo Repo? And this actually came up during the Q&A session. And like today, like the story is still not like fully fleshed out
[04:10:34] . But you can tell there's thinking going into that, because it kind of changes the flow. And I'm wondering, with these build tools, there's like, there
[04:10:44] 's a theory a few years ago, I forget who said it, that like, they're all kind of like, I think it's probably Sean Swix, that
[04:10:49]  like, they're all kind of bundling together, you know, to try and like Voltron up to the ultimate platform. And that was like the goal of like
[04:10:56]  Rome, I don't know if anyone remembers Rome. But like, I think it's interesting that I've always had issue with these kind of approaches, because they always like
[04:11:07]  too specific. They're like, I build stuff the way React works. And this is a huge blocker, because then someone else has to build something else when like
[04:11:15] , it doesn't work for them. And I've had a terrible time with tools. But Vite started from a framework agnostic mentality right from the beginning,
[04:11:24]  they weren't like, okay, we're going to build for React and figure everyone else like that, that pattern has never worked well for solid. Someone build something for React
[04:11:31] , usually it never gets solid compatibility, or, you know, certain other frameworks, but Evan did not start, like, he might have started viewish, but like very
[04:11:39]  quickly went framework agnostic and Vite shows for that. So, for me, I think that's, if you want to look at the success of the meta
[04:11:47]  bundler, that's where I would think about on that side, because meta bundler can always consume any other bundler, if it makes sense. I mean, do
[04:11:59]  they compete? Maybe. I mean, it depends, like, they only compete if Turbo Pack actually. actually offers a plugin system, easy integrated for SSR for any
[04:12:17]  framework, like, yeah, we'll see. I'm interested, you know, if Turbo Pack becomes that meta bundler, as I'm calling it. Is there
[04:12:33]  a DOM emulator I'd recommend for SSR? Sorry, just a random question came in and it caught my attention. It depends on what you're looking for.
[04:12:46]  If you're looking for compatibility, you still probably want to use one of the bigger, slower ones. There's stuff like link DOM, which has better performance. But generally
[04:13:01]  speaking, if you're doing SSR, DOM emulation is not where you want to be at all. Yeah, so that's the thing. Turbo Pack brings in
[04:13:14]  too many other things and like it affects stuff like there's so many, there's so many different aspects of, of, you know, performance here. There's like
[04:13:24]  install performance, build performance, dev performance, and then like end user performance, which is the only one of the four that I actually care that much about, which is why
[04:13:36]  this subject I'm kind of like. I know, it's so funny, like, if the end user is going to suffer a couple hundred milliseconds, I'd like
[04:13:45]  go to war for them. But if the developer has to, I'm just like, I could care less, go away. Yeah, so there's a, there
[04:14:00] 's also, uh, um, let's see here. Yeah, YouTube likes to pull stuff out. I think Twitch doesn't, but. Interesting. Someone's trying incremental
[04:14:17]  stuff with V. Yeah, I mean, this is the best part about innovation, right? You, you, you start kind of like on one path and then someone
[04:14:23]  else is like, hey, we can take a bit of that, you know, um, let's see how we can play that in. As I said, Vita
[04:14:30]  already has such a great, uh, like DX story that like looking into the stuff's kind of interesting. And as I said, any product takes time to stabilize, um
[04:14:38] , you know, so yeah, I mean, as I said, I don't really, I'm sorry. Um, I, I, this kind of stuff doesn
[04:14:50] 't impact me as much, so I don't, I don't care as much. Um, but I, I think this is good news for those who, who care
[04:14:58] . All right. So let's see here. Continue the conversation though. Um, because it was, as I said, it wasn't, it wasn't this stuff
[04:15:21]  that I actually was interested in. Um, I think it's cool that we're seeing innovation on the build tool side. I think it's actually also really cool that we
[04:15:30] 're seeing innovation on, uh, the like fonts and images side. Like, uh, Vercel has been working a lot with the Chrome team on that. Um
[04:15:41] , but I want to, I want to, I want to talk about something else because, uh, essentially there's been, you know, conversations and it all kind of
[04:15:52]  comes down to this. Uh, let me see if I can find it. I've been just chaining conversations here. I want to get back to what I talked about
[04:15:57]  last week. I told everyone that I was trying to gauge react server components because as you saw a few minutes ago, we, we basically implemented fully implemented react server components
[04:16:09] , um, in solid. So solid server components, you know, um, and I'm like, I'm not sure about the APIs. I saw some of the
[04:16:18]  RCs and I was saying last week, I was like, okay, this RFC just dropped. So I was like, I, some people probably knew about the content
[04:16:26]  of it, but from like a general public standpoint, this is, this is just, just starting to kind of come together. And I'm like, I know next
[04:16:34]  conference next week. So like, and I know they probably want to release something around server components. So like, like it can't be this, right? Like that,
[04:16:43]  that's too quick. Like you drop an RFC and then you release the thing in a week later. Like that, that can't like that. Like I was like
[04:16:51] , I was, I was kind of curious, like, is that going to be the announcement? And then I was like, I didn't know the question answer.
[04:17:01]  I'm like, how closely are the other frameworks working with react? Um, you know, like if, if, if, if like, if, if basically you can
[04:17:11]  like, obviously next has been implementing this before the RFC ever got posted. So like, was everybody implementing this before the RFC got posted? Right. I wasn't
[04:17:22]  sure. So I was like, I really want to watch next comp to get a gauge. And then I was like, but we also should look at other server component
[04:17:27]  frameworks, things like hydrogen. Um, and maybe Gatsby is get a gauge on them because we haven't seen them talking, uh, about these kinds of APIs.
[04:17:37]  I've, I've had hydrogen on stream. And then finally, I'm like, okay, like I haven't heard anything from remix for a while. I said,
[04:17:44]  but except for strangely enough, whenever I talk about preact, the remix guys are like promoting it. So like, is there something going on there? And I took
[04:17:54]  all of those thinkings from last week and took them into this week. And kind of wanted to like, I wasn't sure what this meant. And, and this,
[04:18:10]  this is, this is generally of concern to me because both as a framework author that cares about these features and this technology, but also kind of like trying to get a gauge
[04:18:12]  of the overall. health of the ecosystem, the temperature, I like to call it, I'm always, I have a thermometer out pretty consistently because I want to understand
[04:18:30]  it's very vitally important for me to understand where things are at. Um, so when I found out what the announcement was for, for, for next conf,
[04:18:44]  I'm like, okay, so they did go with it. That's, that's, that's, that's, that's thing one. And funny enough,
[04:18:52]  Theo, uh, was watching live, I guess, and he was posting stuff up on this very great thread here. You can, he just, he, anyone who
[04:19:03]  wasn't there in real time, I had just come back for the evening from Poland. Like this was for my, like the day at the conference. Um, this
[04:19:11]  was a super informative thread seriously, just covers the whole keynote, essentially piece by piece before, you know, with commentary. And for me, this was like the perfect,
[04:19:25]  the perfect kind of scenario, but this, this Andrew Clark got asked this question and it was, you know, essentially like there's a lot of cool stuff coming here.
[04:19:36]  What does this mean for the, the, the ecosystem? And he responded that like next 13 is the real react 18 release. And to be fair, I actually said
[04:19:45]  that in my last stream that react eight, like, if you watch it, I was basically saying like react 18 was like basically released with no ceremony. There was no excitement
[04:19:54] . This RFC was like the first thing that got people excited. They've been waiting for this data fetching. And then like literally like basically a week later, you
[04:20:01]  know, this comes out. So like, it's, it's hard not to say that this is the case. Of course, some people took a little bit.
[04:20:10]  I don't know to call it a fence, but it started drumming up this concern and it was a similar concern. I was airing last week, but I
[04:20:20]  mean, any one factor isn't enough. I think, I think the problem is if you want to look at this thing and understand the situation, you have to look at
[04:20:27]  it systematically. I think the, I think the challenge here is that everyone's looking at individual parties and not painting out a whole spectrum. So let's, let's
[04:20:36]  paint out a whole spectrum. So let's, let's paint out a whole spectrum. Let's scale or draw this crap. Okay. From my perspective. Okay. Let
[04:20:42] 's, let's, for me, there's like a few zones here. Okay. And let's just, let's just zone these out. All right. All right
[04:20:50] . Okay. So I'm going to, I'm going to, let's start here. What's over here. We have like the library react. We have the
[04:21:11]  framework next. Come on, drag. Okay. What else? Like there's a few different parties here. Let's, let's, let's, let's keep
[04:21:29]  on, let's keep on going. What else do we have? We have deployment, say Vercel as an example. And then I'm going to add, I
[04:21:42] 'm going to even add one more thing here. We have the browser. Okay. Okay. Okay. Let's, let's say. Let's say Chrome. Let
[04:21:56] 's say Chrome. Maybe. I don't know, but like, let's, these brackets probably aren't that important. I just, let's see. People asking for
[04:22:07]  dark theme. I suppose I can make a dark theme. I'm just so not used to, I guess this is, this is why other people do this. I
[04:22:14] 'm just not like used to thinking in dark theme. I'm just not like used to thinking in dark theme. Okay. That's fine. I can adjust. Yeah.
[04:22:21]  That that's how Theo improved on my Excalibur thing. He, he took my terrible white theme and made them black. Um, and the problem is it
[04:22:30] 's not even a problem. I don't even know if the problem, but this is like, what I'm thinking about is every one of these has their own goal,
[04:22:40]  right? Like let's, let's, let's follow, let's follow this here. Like what's my goal if I'm a, if I'm, if
[04:22:52] , if I'm here demonstrate capability of my framework or I'm going to say library. I'm, I'm, it's easier to describe it in this way, even
[04:23:04]  though I am. Okay. And, right. And what's, what's my goal here? I mean, it's a lot of things, but like, obviously
[04:23:25] , um, give like best experience. Um, for my user, we'll go, we can probably go into what that means later. Um, is there more,
[04:23:49]  what, what, what else is there? Deployment, you know, get people to deploy on my platform. Um, and in this case, what, what
[04:24:11]  the value for the browser is, I'm going to argue the value for the browser here is improve, make a dent in web vitals or something. Essentially. It
[04:24:38] 's a statistic thing. Like the, the goal here of the browser is they, they want to generally improve the quality of the web in the, like improve the quality
[04:24:51] , like the quality of, of, of the web measured by some kind of stats. Okay. Like, maybe I should break it a little bit different points, but like
[04:25:09] , all of these pieces. Um, go into like the next 13 release. Right. Cause we, we talked, they, they, they, they talked about the
[04:25:25]  three pieces themselves. Um, right. Um, the part they didn't talk about was Vercel, the deployment, but I mean, it doesn't take much
[04:25:34]  to, you know, like know what their interests are. Right. So I'm just paraphrasing essentially the, the, uh, this, this kind of breakup of
[04:25:47]  these different parts that are kind of going into making next 13. Right. So I, I, like there, there is, there are multiple points. So, so
[04:26:01]  this has been mentioned the controversy about value neutral rendering that there are multiple points of, of contention or concern by people here. And that's why I wanted to like
[04:26:11] , just dig into this a bit because obviously this statement was spicy as hell and people got into it. But like, if, if you look at the discussion around this
[04:26:23] , what you won't be long before you find like different parties in each zone. Right. Cause obviously there's a react zone. Um, this is Matt Kane, um
[04:26:33] , from Netlify. Um, so now we're talking about the deployment zone. React is getting intrinsically linked to next. You have to wonder why any other
[04:26:41]  framework would feel safe tying themselves to it. A Vercel employee put out a react beta release yesterday to ensure enable features for next in time for next conf. Could any
[04:26:50]  other framework do this? If I, if I dig down the comments, you'll see the answers. No, you'll, you'll see people from Gatsby and
[04:26:58]  from remix and like actually respond to this. Um, this is remix for cell, trying to lay claim as a singular reactor. Or getting the reacting themselves to put their
[04:27:08]  weight behind their claim. Just irreversely react in my opinion. I expect to see dedicate time to projects like preact. Okay. Preact again. I don't
[04:27:19]  know. He doesn't speak for, he's not like, he's just an engineer on the team. He doesn't speak for like Ryan or Michael, but you know
[04:27:27] , I, I, I think this is, this is an interesting perspective to see. You know, again, preact is what I was talking about. And.
[04:27:40]  The reason like this chain kind of goes on a bit. Um, Matthew Phillips from Astro. Right. And talking about, he's like, Oh, if, if
[04:27:51]  they are tied together, you know, are getting closer, then this gives opportunities for other libraries and, you know, not to be so tied together. Right. Right
[04:27:59] . Right. And the people talking about like the fact that like the beta docs literally point you towards next and don't point you to towards other things. I want to
[04:28:09] , I want, there's a reason I'm, I'm building up this case. Cause I want to, I actually don't think. Like, I'm not
[04:28:20] , I'm not like fully behind that react team is doing anything terribly intentionally wrong here. Um, uh, this did lead to, uh, like discussions. I guess
[04:28:34]  I got to follow my, uh, Matthew Phillips discussion down a bit because, um, Jeff from first L kind of came in and, you know, reacts not tied to
[04:28:42]  next and blah, blah, blah. And then, you know, this kind of just continues down this chain where we, we, we even, it's a poorly phr
[04:28:51] ased soundbite and all this, but. Like, is it like, it's not that it's tied. Here's the thing. Put yourself in these guys
[04:29:01]  shoes. They have been like, what are the facts here? This is five years coming. I like this from that first demo or whatever in 2017 or whatever, when this
[04:29:14]  first came up to the data fetching. Now the, this is like completing the story. React 18 completed the story, like the basis, but we haven't seen it
[04:29:21]  delivered. This is, this is literally five years coming. I don't think. The react team. It's talking about favoritism. They would, they would
[04:29:30]  literally anyone who wants to work with them on this, you know, they would love it. If they would like help them realize their vision. Right. So. Like.
[04:29:45]  I think Dan actually has some tweets in here. He's like, I'm excited about this release because it's most comprehensive generalized attempted plant reactor architecture, blah, blah
[04:29:55] , blah, streaming. It has all the pieces that they want. You know, they've given them feedback. You know, this is all this data fetching. You
[04:30:03]  know, they have all the answers. We'll Facebook self react now. So it like. You know. He talked about how they worked through different versions with hydrogen and
[04:30:19]  with Gatsby. the, those got, those took a different road than where react like saw it going. So next, next is a sense because next wanted to
[04:30:35]  get as close to reacts vision compared to others like remix pretty much straight up said like we're not into server components. And that explains a lot why things are there.
[04:30:47]  Um, I was, I talked to Dan Abramoff a bunch actually. Oh, well, I was in Poland. We, it's funny. We'd like switch
[04:30:53]  time zones. Like usually he's in the UK and I'm here, but he was actually here at next conf and I was in Poland. So, uh, it was
[04:30:59]  kind of like a reverse time zone thing where it was me being super tired late at night instead of, instead of him. And yeah, I mean, I, I
[04:31:07]  don't, this is not next directing over cell directing reacts direction. This is what they've wanted to showcase for years. Right. So I think, I think that like
[04:31:27]  is this side of the equation here. it, Seb now working at next definitely incentivizes it a bit, you know, like, it's like, okay, well
[04:31:41] , let's make this happen. But my understanding is next to the most part, like this is a breaking change. Like they, they put themselves, not breaking, like
[04:31:50]  it's incremental, but like, this is a big change. They put themselves at risk a bit because they were like, look, here's a new API. We're
[04:31:54]  changing everything. You don't have to be breaking to scare people off on a migration story. So they're, they're taking a bet on the vision that react is
[04:32:01]  doing, and they've chosen to take that bet. So from that perspective. Um, that's super great. And you can, you can kind of see that the way
[04:32:16]  these two kind of link together. Um, but the, but the, it is as someone, if you're not in the loop next implemented things that were like before
[04:32:30]  our RFCs are available. Like they, they were definitely ahead of the game. And this is always hard to kind of put out, out there because obviously we're
[04:32:38]  not all working on frameworks that run on react. So if you're remix or hydrogen or, or next, you're probably going to have some kind of better tie in
[04:32:53]  than like V plugin SSR or whatever. You know what I mean? Like, like, I don't even know, like, has, I mean, maybe, uh
[04:33:03] , AJ can tell me, have you, uh, what, how's Redwood, um, you know, getting in here. Right. So, but like,
[04:33:12]  that's the thing is, is like, the thing is from the public standpoint perspective, they did not have access, even though this wasn't like working group discussions. So
[04:33:28]  for them, like, think about it. You, you release an RFC and then you release the full implementation, not even the full implementation, but like a partial implementation
[04:33:36] , like a week later. Like it, it, it, no one else, you know, had any chance to process or recover. And the biggest thing is that
[04:33:45]  our RFC was missing the cache API and stuff, which kind of gets us to the next thing, because I've talked about this relationship. Well, now here's
[04:33:53]  the next problem in order to give this user experience to, to my end users. And I don't have like the full story here. I need to work with my infrastructure
[04:34:01]  deployment, you know, for cell here in this case, in order to reach that goal. Right. So like, yeah, I mean, if I, I don
[04:34:13] 't have the react cache API, which hasn't even been RFC, I'm going to have to like come up with something. And I'm, if I'm
[04:34:22]  going to, you know, have async functions, which might lend to more waterfalls, I'm going to maybe rely more on caching and global fetch patching and
[04:34:30]  stuff. Like essentially there are pieces here that we need to complete the story. So now it's not, you have react library with its goal, the next that's
[04:34:41]  invested in this goal. And then the deployment infrastructure that has to support this goal. Right. So that's fine. Right. You have a bunch of engineers working on
[04:34:54]  this and you're, and you're going to build up, like build up this infrastructure to, to, to, to do this. Like, like, if you look
[04:35:08]  at it, actually, I love this, AJ, thanks for putting this. I think there's two levels. Next did have preferential treatment. That's true. Another
[04:35:14]  framework could have been more involved, but weren't. Both of these things can be true at the same time. So it's nuanced. Yeah. Right. It takes two
[04:35:20]  to tango. Exactly. And that's, that's this boundary we're talking about and this boundary. Well, it's obvious next is developed at Vercel
[04:35:29] . So, um, if, if next is working closely with react team, cause they know the features that are coming and then they need the infrastructure to support it. Well
[04:35:40]  then obviously the, they will work with their parent company or like their, their parent thing to actually build the specific features into the infrastructure. They need to support this.
[04:35:50]  Right. Right. So, I mean, this is, this is just a logical one. We've, we, we, we've seen this for years. This is
[04:35:56] , this is the big thing, right? Vercel next is a vehicle for adoption for Vercel. Right. Do they get people to deploy my platform?
[04:36:04]  Like there, like this, this, this kind of goes both ways. Like, like in a sense, largely this arrows this way, like it's actually react that needs
[04:36:13]  next, but, um, this arrow kind of goes this way, um, as well. Right. So like, but I mean, there's, there's also
[04:36:28]  a little arrow this way too, you know, but this, this is a very tight kind of scenario. And the only reason I wanted to bring the, uh,
[04:36:41]  the browser thing is, it's not even with Vercel. I just want to talk about the browser thing is these guys have basically huge metrics and, and they're
[04:36:52]  seeing, seeing stuff. I want to talk about the browser for a minute because they're seeing numbers increase year over year, over year in a year. And like,
[04:37:01]  how can I make the biggest impact? How can I actually change things? And, and the sad answer to it is it's not about the quantity of impact, like any
[04:37:16]  given technology. It's a like, or certain, I'm not phrasing this right. It's not about the quality of impact, right? Like, like how
[04:37:24]  well you do it on any particular technology. It's about the quantity. Like if there's a thousand sites, if I can improve 10% across a thousand sites, that
[04:37:33] 's better than proving 80% on, uh, 50 sites. So, I don't know if, I want to, I want to talk a bit about this because
[04:37:50]  I, I, I, this is all part of the story here from my perspective, because like for example, have you ever, has anyone ever seen patterns.dev?
[04:38:05]  It's, it's, it's a book and it's about general web patterns and all this stuff. And it kind of positions itself about like, learn about
[04:38:13]  the web and learn about the web and learn about programming, learn what kind of patterns you have. Right? So let's get started. Right? So let's get
[04:38:17]  started. Right? Oh, great. Design patterns, rendering patterns, performance patterns. This is really great. Design patterns, singleton proxy, blah, blah, blah,
[04:38:24]  provider, prototype, container presentation, observer. These are, these are great patterns, right? All right. Flyweight. I mean, this is, this is like
[04:38:32]  gang of four all over again. Hooks pattern. Okay. I mean, that's a react thing, but okay. Rendering patterns, overview of react, overview of
[04:38:39]  next.js, server-side static rendering, incremental static rendering. The, the rendering patterns part of this, of this is basically just next.js docs. And
[04:38:52]  that's fine because that has the biggest impact, but I, I just, I want to like islands architectures here, but essentially almost everything else in here is explained through
[04:39:05]  using react. Um, and I, I know this is a challenge because I was, I was working on, uh, some of my articles about patterns. And, uh
[04:39:12] , I, I, I actually talked about Taddy a bit about this and kind of doing this, but like, this is how you get the biggest impact.
[04:39:19]  You pick the tool that everyone's using and then you like focus that in terms of like fundamental web training. Cause then you can hit the most pieces. And, and another
[04:39:29]  thing, I don't know if anyone's ever heard of this is Google has a funding project called the Aurora project. Google Aurora operations. Or operations. No, this
[04:39:37]  is not it. Not operational or, uh, it's a collaboration between Chrome and the open source web frameworks and tools. Right. Um, I was actually really, really
[04:39:50]  excited about this, but at a certain point, Um, if you, if you look at this essentially, um, it's at first I saw this and I was
[04:40:12]  like, okay, sweet. Um, I know lots of projects that are improving the quality of the web by using great technology. Marco. They're, they're partial
[04:40:24]  hydration Island. Things were years ahead of the others. Um, Astro. Same kind of thing. How about all the builder stuff? Quick. Party town. Party
[04:40:37]  town. God. Everyone could use party town, but the challenges. I actually know these from these people in the projects. And I was like, do you hear about Aurora
[04:40:50] ? Like we should, we should all go in and like make submissions and see what we can do and do that. Cause we're doing great work. A lot of the
[04:40:55]  feedback. And I think it's changed a bit this year, but last year was that they were focusing on projects that had more. Some projects that had more impact,
[04:41:03]  like as in more people using them rather than the quality improvement of, of it. And I, I know because these projects that I kind of nodded towards basically ended up
[04:41:17]  maybe getting a little bit or not really getting the same kind of support as next or next or angular, just because of how big those impact are. Even if the technology
[04:41:29]  improvements that are coming out of these other projects are way more incentivizing or interesting. So it's kind of hard because basically I get it. If you want to make a
[04:41:41]  dent on those numbers and those statistics, focus on the big players. I, I, I, I, I just want to paint the scene here, right? People
[04:41:58]  are saying burn, but like, it's, it's, it's, it's, I don't think this is subjective is the best way I can, I can
[04:42:13]  put this. Right? Like there's a chicken and egg situation, right? Like by this, I mean, there might be developer experience considerations. There might be
[04:42:27]  like, you know, uh, popularity, teaching, training, all these other implications, things that are very important. And in the reality are more impactful, but no one
[04:42:37] 's going to tell me that building an XJS site is the most optimal way to build a site. Like, this, this, this is, this is factual
[04:42:46] . It's not, it's, it's not like hypothetical. It's like, this is, this is like just the technologies involved. So it's fine.
[04:42:58]  And the, like, we need more general tools. And I can't put this completely, like, I get the motivation, but I just want to point to you like
[04:43:07]  that, like, um, maybe this arrow goes a little bit like this. So maybe I put them in the wrong order, but I just, there's, there
[04:43:17] 's a lot of different people with different motivations and goals and projects all working around this with different investment and different considerations. So when I look at this problem, I don
[04:43:28] 't, and I'm again, I can't say problems, not quite the right word. When I look at the situation, I'm trying to determine if there is a
[04:43:37]  problem is the better way to put it. This, this is the, the mindset I'm coming at. Cause I'm looking at obviously very health, heartfelt tweets from Dan
[04:43:48]  about like achieving a goal that's been in mind for years and working and just finally getting there. I'm seeing, you know, people like Matthew Phillips are kind of
[04:44:00]  like, let's face it. He's not a big fan of single page apps. He doesn't really care what react or next are doing. He just like, look
[04:44:09] , if they're going to like all this kind of get in together, then maybe this is good for everyone because, you know, maybe the remix of the world are just
[04:44:16]  like, well, you know, maybe, maybe we're going to take things a different direction. Right. And you know, when you, when you, you know
[04:44:27] , and I don't say this for, for like, I got, I mean, I'm just probably a good point that I should, I should point out.
[04:44:35]  I, I work at Netlify. I work at Netlify. I work on solid JS. If, if you look at this drawing here, I'm competing
[04:44:46]  here. I'm competing here. I'm competing here. And maybe I'm competing here. I mean, I don't know. I, this, this part is actually
[04:44:54] , I don't, I wouldn't say I am competing here. Right. Because like, like most Netlify employees, I imagine don't rave about how
[04:45:09]  good features are on the, for sell platform or maybe have potentially reposted job postings, you know, for, for positions when I think that the, they're
[04:45:24]  offering some really cool roles and stuff. So, I mean, I am not, I'm not saying any of this out of any kind of like competitive bias, at
[04:45:39]  least not to the best of my knowledge, but I am concerned. Right. I talked about a bit about Matt, Matt Cain here. And I, you know
[04:45:52] , I talked about this. Let's, let's, let's look at this thread from Devin. Someone needs to build a legit non VC backed alternative to next JS
[04:46:02] . It should be community driven and funded by companies that use it and contribute to it. It should be also more flexible. And also you aren't locked into the underlying
[04:46:09]  tools of powers. I use the hosting providers. This is pretty close to on the head of where my thinking concerns come in because. Look at this. If I want
[04:46:24]  to use, I am a user. Now I'm not any of these parties. I'm, I'm just a person. If I want to use. Any. Of
[04:46:33]  the latest react stuff, because I am a reactive and I care about react and I care about their vision. I get, I got excited when hooks came out and this
[04:46:41]  is what I want to use. Well, apparently the way I do that is use next. Okay. That's, that's that in itself right now, you know,
[04:46:51]  might change. And the, the frameworks themselves might've done it. I mean, I'm sure react would have wanted more frameworks to adopt what they've been working on.
[04:46:57]  But in order to use next, I need to use the infrastructure. On Vercel to actually leverage it to, because like the, this, this server component stuff doesn
[04:47:06] 't really work properly without the caching level. It's like the missing part of the API and it's fine. Vercel invested a lot into it. So
[04:47:13]  I'm, I need to deploy on Vercel in order to use the latest react. And similarly, if I want to leverage the best pieces of the web platform,
[04:47:25]  you know, and have that like backing from, from, from Google in that sense, I probably also want to use next. So I probably should deploy to Verc
[04:47:39] el. I don't, I don't, I don't know if that's, I mean, every party has their reason and this is just win, win, win
[04:47:56]  for all of them. For all of them. But there's this alignment here. That. Is almost. You're somewhat. Surmountable by someone else. It
[04:48:13] 's not cahoots. They're like, it's not every piece of this puzzle is independent, but the net result doesn't feel much different to me than the
[04:48:30]  concerns people had with internet explorer being shipped with, with windows. Like all these teams are working together towards a common goal. It. It's all helping them reach that
[04:48:42]  goal. But. Does it help. Does it help. The common open web. Ultimately. Is cloud flare. And Netlify. And. Whoever else. Going
[04:49:01]  to go. Build their own react framework to showcase. Um. The newest react features. No, they're going to try and port next. And. They. They
[04:49:10]  can't port next until they play catch up on some stuff that obviously Vercel. Implemented because Vercel knew what was coming because they were talking to the
[04:49:20]  react team. Through. Through next. And. To accomplish the goals. Nothing. Insidious here. Just. The. The overall result. And. I mean
[04:49:38] . Let me see here. Uh. Someone. Zach wrote something a while ago. He was. He was looking and he's like. How much money is actually going into
[04:49:52] . Into frameworks. Um. In order to. You know. Get them going. And obviously like. Something like lit. Or Marco. You're not going to know
[04:50:04]  this. But like. When you get into the VC range. You start seeing. You know. How much money is potentially behind this stuff. Obviously like solids. I'm
[04:50:11]  working under Netlify. So there's some potential. So it's felt. But. There's. There's. I would say. There's a difference between.
[04:50:19]  Next.js's relationship to Vercel. Then say. Reacts relationship to. Meta. Is the best way. I can. I can. Put it
[04:50:28] . Like. Meta. Uses react. It's nice. That it helped train devs. But like. Essentially. That's why they open sourced it.
[04:50:37]  But they're. They're using it. Anyways. Like. This is something they use for their purposes. Whereas. Next. Next. Is part of Vercel
[04:50:45] 's funnel. Essentially. How they get sales. So. Even. You know. And. The only reason I want to show this chart with the money is because it made
[04:50:58]  me think about. Like. Like. The Google side of it too. Like. The bigger investment. Begets bigger investment. It's like banking. Right. Like
[04:51:09] . It's like. All the pieces are aligning. And it's. It should be a perfect and wonderful thing. But. Is this. I have to ask
[04:51:20] . Is this the open. Like. Is this. Is this. Is the open thing that we. We hope for. Like. It's hard because. We can't
[04:51:28]  look at this objectively anymore. Right. Every. Like. I don't know if Remix is in here. Like. Every. All the meta frameworks are. Our businesses
[04:51:37] . Like. They. They're incentivized for you to. Adopt them. Financially. It's not like. I. You know what I mean?
[04:51:44]  Like. I feel like. In case it's felt insolid. It's not so much the case. Even though they are funded that way. To a certain degree
[04:51:50] . But it's not like. It's not like the direct. Pipeline. And. You start putting. These pieces together. And you go. No one did anything
[04:52:02]  wrong. But. What. Is the net. Output. Result of this. Just catching up a bit on chat here. Because I've been talking. And
[04:52:20]  this is how Ryan got fired. Yeah. I know. This is. A little risque. I want to. I. What people value for me. Is that I
[04:52:40] . Generally. Speak my mind. In a relatively. Fair way. I'm not too. Business oriented. I'm. Technology oriented. And I'm a bit of
[04:52:49]  bleeding. Heart. For the open source. And the open web. And that. All solutions. Have a chance. You can determine. If. You can determine.
[04:52:59]  For yourself. Whether. How problematic. This is. Whether this is. Actually. Anything. Maybe. It'll. Shift your. Perceptive. Of what. Cho
[04:53:09] ices. You make. For. Certain. Options. Here. And you know. I. I think. I think. That's fine. I. I think.
[04:53:22]  I. You're going to. You're going to figure out. What you're going to do. So like. I just think that. What you're going to see
[04:53:41]  here is. It's funny. Because. Of. Different. Parties having. You know. Kind of aligning. And different. Kind of financial. Um.
[04:53:52]  Incentives. Especially. For Vercel. In this whole picture. That. This sort of. Reaction. Is not. Surprising. And shouldn't be
[04:54:04] . And I. I. As I said. Maybe. This isn't really a problem. This is just like. Different parties. Reshuffling. And figuring out
[04:54:13] . Where they go. But. I'm coming from a frame. Like. Library authors. Perspective. I think. I think. This is the last thing
[04:54:22] . That anyone. Working on the core. React. Wanted. So. I. I'm not. Putting this. On. On. On that side. People keep
[04:54:34] . On talking about. Reacts. And cahoots. And all this. Are. I think. The. These guys. Are probably. The most sensitive.
[04:54:44]  To it. Because. They're the furthest. Removed. And they're just. And they're just like. We're just trying to. Build the best.
[04:54:52]  Thing. You know. I think. We just have. An interesting. Scenario. Where. Like. I mean. We're. We're. Going to have
[04:55:04]  to see. What this. What this. Kind of. Alignment. Means. For the web. But maybe. Maybe. Other competitors. Are going to try.
[04:55:13]  And come out. Other than next. Just to. You know. Like. The reacting. Would love that. I mean. Dan told me. As much as like.
[04:55:23]  Oh yeah. Another meta framework. Other than next. That wanted to do. Our vision. I give them. You know. Any support. I could. You know.
[04:55:33]  Like. There's only so much. They can. They can do. You know. Of my. Library. Like. They just want to see. React. Go
[04:55:43]  out there. And do good things. But. I feel like. If you. Break. Apart. Any. One of these. Like. Places. Here. You
[04:55:59] 're. In a very. Different place. It's. It's really. Just the combination. Of things. Yeah. They. They worked. With. With.
[04:56:11]  Hydrogen. And I said. I'm paying. Close attention. To hydrogen. Because. I haven't. Heard much. Recently. And they definitely. Aren't
[04:56:21] . Launching. This new. Use. Get. On Shopify. On Shopify. And you're. Not using. Hydrogen. And there's. Money. Support
[04:56:32] ing. Existing. Codebases. For years. For sure. But. I'm. It's always. About. Mindshare. Like. I
[04:56:41]  don't know. Some people. Tell me. Gatsby's dead. I don't know. If that's true. Or not. But if Gatsby.
[04:56:49]  Were dead. What's the likelihood. That. Five years. Three. Five years. Down the line. I don't know. I'm. I'm just.
[04:56:59]  I'm just. I'm just. I'm just. I'm just throwing it out here. That. Intention. Isn't always enough. To assess a situation.
[04:57:09]  And. I think we need to be. Conscious. Of. The impact of these sort of things. On the future of the web. I don't know.
[04:57:29]  It's. It's. It's possible. That like. It's as simple as the fact that like. Hydrogen. And Gatsby. Just. Tried
[04:57:37]  to build off the server component demo. The stuff. And they worked with the react team. And then like. The thing keeps on evolving. And changing. And they don
[04:57:43] 't have the same kind of investment. And money to be able to pull it off. Like. Maybe it really does take a next. In order to deliver this. At
[04:57:48]  this point. And that kind of financial thing. But like. None of this changes. The fact. That. that, like, Next is funded to do so.
[04:58:00]  Like, I'm just like, you know, funded from, for selling, I mean, even indirectly for stuff like Aurora. So it's, it's, it
[04:58:24] 's, to me, this is a tricky situation because I can identify and empathize with every individual party here. But that doesn't leave me any less concerned. Yeah,
[04:58:38]  I honestly don't know what to do with this. You know, I, I, people are just joking in the chat and that's fine. Talking about the,
[04:58:56]  the takeover and stuff, but I don't know. You ever hear stuff like too big to fail and all that kind of stuff? I don't know. I,
[04:59:10]  I, I, there's, there's something about this The fact that React is changing, sorry, there's more, more comments in chat. People talking about how
[04:59:34]  React is changing from a library to a framework. And like, that change has been on the wall, like, for five years, and I guess it might not be obvious
[04:59:42] . But from the second that they started on this path, this was the inevitable conclusion. It's, it's, I like, do you, I think this
[04:59:52]  is part of the tricky situation. Like, cause if, who's going to build the framework? If meta built the framework, you know, like, like, look at
[05:00:05]  it. Svelte, Svelte kit, you know, view nuxt or whatever. Like, maybe view nuxt isn't the best example. But Svel
[05:00:14] te, Svelte kit and solid, solid start is, is a good example. Where the meta framework is basically the framework authors doing it. And an extension of
[05:00:21]  that. And like, in that sense, if you view React next like that, like, there isn't any, I actually don't think that's necessarily a bad thing
[05:00:29] . Some people do, but like that alone isn't a thing. And if that was being built a meta, they wouldn't because meta wouldn't probably wouldn't use
[05:00:37]  next. They have their own infrastructure. That's kind of like, the problem. Like they have their own setup, their own needs. But like, if that was happening
[05:00:45] , you wouldn't have this weird feel too much. It's like it's because it's like startups that are funding it. And then they need, they use it
[05:01:00]  for adoption essentially. And then, yeah, I mean, this, and they're the ones who need the funding and then Aurora project. And like, it's just a
[05:01:11]  combination of things. Yeah. Quick, quick, quick city. Yeah. That's another one. Thank you, AJ. Yeah, exactly. Sorry. Slip my
[05:01:19]  mind. No, it's, it's next to standing on React shoulders. The first one, definitely. This is, this is what React team wanted. I said
[05:01:41]  this already. Like this, this is what they wanted. Um, Seb working there probably was the last push to get this kind of expedited. Like people have been
[05:01:51]  waiting for this for so long to a certain point that I think React core, like the core incentives are actually concerned that they're losing ground without being able to actually demonstrate this
[05:02:02] . Other frameworks are coming up and going, look, it's so easy. Look, our data fetching, just, you know, whatever, create a resource,
[05:02:08]  whatever just works. And then they're like, okay, we need to actually get back, get some skin back in the game. Um, like, yeah, this is
[05:02:21]  not, I honestly don't think people should necessarily worry about that. It's, it's actually, the problem is this part, which is on its own. Fine
[05:02:22] , but ultimately the problem, that's why Devin's comment is the most on the nail. It's my strong belief that VC backed OSS creates perverse incentives that
[05:02:39]  are fundamentally at odds with open source ethos. It promotes competitive competition over collaboration, locked in over flexibility, marketing or innovation, eventually monetization. Look at the landscape right
[05:02:39]  now. Almost all major React frameworks are VC backed. At the same time, React itself is being designed to require a framework for more features. I think it's really
[05:02:44]  important for the future that these are not owned by a startup. If I were to build a new React app today for anything important, I would not do it on Next or
[05:02:50]  any other VC backed frameworks. It is too risky to make a bet. In five years, which ones will still exist? Which will start gating features? based on
[05:02:59]  their hosting. I mean, there's a counter argument. Rack is here, who would invest absolutely insane amount of money to make a product as polished as next.
[05:03:11]  Say nothing of the fact that they're going to do the same. If they're going to be able to build a new product, they're going to be able to build
[05:03:14]  a new product. They're going to be able to build a new product. They're going to be able to build a new product. They're going to be able to
[05:03:20]  build a new product. They're going to be able to build a new product. They're going to be able to build a new product. They're going to be able
[05:03:25]  to build a new product. They're going to be able to build a new product. They're going to be able to build a new product. They're going to be
[05:03:28]  able to build a new product. They're going to be able to build a new product. Who would invest absolutely insane amount of money to make a product as polished as
[05:03:33]  next. Say nothing of the fact that next is already open source as a ton of outside contributions, probably more than react, but you know, is VC funding really that scary
[05:03:41] ? It is when the alignments here produce like competitive edges, essentially, because like. Like access to the latest react features leads to access to the infrastructure. Like the
[05:04:05]  way the whole thing ties together. It's not about any individual piece. It's the fact that all of the information, all the pieces tie together in a way that basically
[05:04:17]  point to a single direction. No one's asking next to roll out away from Vercel. Vercel. But like that is a, that's because like
[05:04:30] , it's, it's their thing. It's their, it's their funnel, but that's kind of the, that's where the actual problem sits more than anything
[05:04:37] . I mean, I, that's, I was asking a red, would it like, seriously, any other react framework that like, but you can see like,
[05:04:50]  this is already the conversation. We're like looking for frameworks that would adopt reacts philosophy and not tie you to a single deployment partner or something. Right? Like there
[05:05:07]  are real business impacts of these kinds of decisions when you tie the whole thing together. I don't know. This is why I'm been retweeting this stuff.
[05:05:30]  And I'm going to continue as the stuff progresses, go to the same thread and chain it all together. Cause to me there, there's, there's a narrative being
[05:05:36]  stitched together, like a tapestry across the whole industry when considering how all these things are working. And you might just be like, Oh, the, the stars have
[05:05:45]  aligned for Vercel. They're the golden child. But I don't know. I'll, I'll leave the rest of this up to you. Yep. Rem
[05:06:04] ix has VC money. Yep. Yeah. I mean, people are going to have specific issues with stuff, but like everybody does stuff that fits it. Like, so
[05:06:18]  patching fetch people have done way worse. I know that's a contention part and people will talk about that. And, but like, this isn't new. I
[05:06:31]  mean, maybe, maybe like, but like, it's, it is part of the solution. So I guess it's fair. If you're coming up with a
[05:06:41]  different solution, at least react didn't tell anyone to patch fetch. That would be more awkward. But then if react did, then like, yeah, I mean, at
[05:06:50]  a certain point, it's, it's just, you take the biggest players and you tie them all together. Yeah. I mean, I don't, I don't
[05:07:01]  know what, what, what, what anyone expects any other kind of outcome. But the things like, if you read through the rest of Devon's stuff, like
[05:07:18] , like it's a Rackus, here's another one. VEat react, you know, yeah, I mean, it's, I don't think
[05:07:39]  it's a simple OSS has a funding problem fundamentally. And I don't think it's a simple just saying, yeah, we'll just have a bunch of companies work
[05:07:46]  towards it. Something has to drive the initiative. Um, and the, here's the problem. A project might start like Svelte or solid and with solid starting
[05:07:56]  cell kit. If it ever became successful enough, I wonder which companies wouldn't try and do it like a funnel. People have been approaching me about doing that for ages
[05:08:09] . They're like, yeah, I have a CMS. Let's, let's build the funnel. Like that's, that's how business works. It's just not
[05:08:15]  very OSS ethos as Devon put it. So like, it's funny, but large companies that actually use it for what they need to use it for actually don
[05:08:27] 't. I, like I said, if Meta made the meta framework, they wouldn't, but if they did, then we wouldn't have this problem. So
[05:08:34] , yeah, I don't know. It's, this is tricky. And obviously we're just circling around it now because it's five o'clock and we're
[05:08:41]  getting late in our day, but I just, I just wanted to, you know, put that out there. I don't know if anyone has any more comments. We
[05:08:52] 're probably gonna wrap up here soon. Yeah, no, I moved to Rackus instead. Huh? There you go. Yeah. It's interesting. Cause
[05:09:22]  we're at a point now because of that, that almost any kind of decision or conversation here is going to have some kind of blow, blow back. Um, so yeah
[05:09:34] , I mean, I, I, a week ago, I said that there was a few different trends I'd look at. This is only part of, this is
[05:09:44]  only really stage one. If, if, if, if, if, if other react, uh, meta frameworks do kind of pull away more dramatically and stuff like it,
[05:09:59]  I think it has interesting implications on react as well. I think, yeah, I don't know people who continue to build react the way they have for years, but
[05:10:07]  I think it's, I think it's, it's interesting. Um, all right, well, I think I'm about ready to call it a day. I
[05:10:31]  said it was tired to begin with. And sure enough, I streamed plenty long enough. This really was this week in JavaScript, the whole next thing in the, in
[05:10:42]  that. And that, and it would be a lot nicer, obviously the focus on the technology. Um, but we actually focused on a lot of that from the R
[05:10:50] FC. Um, the only piece that we didn't focus on is the new fetch caching stuff. And that's a bit controversial. And, you know, we can
[05:10:57]  talk about that at a later stream when I've had more time to process it, but maybe it'll be a month from now. Um, but, um, I
[05:11:06]  think, I think it was important today to talk about the kind of feeling in the parties and the, you know, in the ecosystem and where they kind of find themselves right
[05:11:22]  now. Um, all right, dinner is ready. So with that, I will go have a good one, everyone. Um, honestly, it's going to be
[05:11:38] , I don't know. It's going to be, it's good. It's probably going to be four weeks till I get to do another Friday stream. So yeah
[05:11:47] , hopefully at least got some time to catch up on my backlog. Right. All right. All right.