---
showLink: "https://www.youtube.com/watch?v=dOgnQ9SuKYk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS: Past, Present, Future"
description: ""
publishDate: "2022-06-03"
coverImage: "https://i.ytimg.com/vi/dOgnQ9SuKYk/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 02:52:13, which means the transcript is two hours and fifty two minutes).
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

[00:00:00]  All right. Hello, everyone. Welcome to my stream today. This one's gonna be a little bit of a different stream than usual. I decided that it was about
[00:00:13]  time. Actually, I've been putting this one off for months now to kind of just like do this like deep, complete, holistic view of what Solid is, what Solid
[00:00:23] 's been doing, you know, the whole story. And gotta remember to turn off my notifications here. And Discord. Okay, sweet. And yeah, so we're
[00:00:36]  gonna change it up a little bit this week. I'm glad everyone can come and join me for this one. Because I'm gonna start like all the way at the beginning
[00:00:45] . Assuming everyone is joining in here. Yeah, yeah. Show us your shirt. Yeah. Well, I'll stand up for a moment. How did we
[00:01:04]  get that shirt? We're actually opening up a shop for this. So merch is coming pretty soon. I don't I don't think it's been officially released actually
[00:01:23]  was looking at the storefront. This morning. I just give everyone a chance to join in. Don't have my trademark drink with me tonight. All right. Because
[00:01:43]  it's during the day, right? What kind of example would I be setting if If I was drinking during the day? Sorry, just getting a couple things. Let
[00:02:00] ting people know that we're live. All right. So usually every stream I start with this week in JavaScript. I'm not going to do that this time off the
[00:02:12]  start. I know last one was kind of unorthodox. I covered like a month and I didn't cover everything. Because that this week in JavaScript will come in
[00:02:22]  when it comes in essentially because I'm telling you a story today. And this week in JavaScript is the present. And I think today we're going to start firmly in the
[00:02:33]  past. I love people still discussing about this time. Does the stream time work for people? I kind of like my end of the day thing, but I knew it
[00:02:45]  was like too late, but I can't do it any earlier than that if I go later. So I was like, oh, maybe like two hours later than right now
[00:02:53]  could be like as late as I could kind of pull this. But then I'm told that people, you know, actually like in Europe, like watching the stream.
[00:03:01]  So now I should make it even earlier if possible. Yeah. Yeah. People, people happy about this one. Good, good, good. Yeah. Yeah. We had
[00:03:15]  some fun last week when we had Brett on talking about react server components and whatnot. And that was my first time trying this time. But I think I think we'll make
[00:03:27]  a work of this. There's not too many people who stream in the afternoon. I think I think Theo is one of them where I usually catch a stream. But
[00:03:38]  today, yeah, we're going to we're going to talk some solid. We're going to we're going to go right back, back, back, back to the
[00:03:47]  to the beginning. So I'm going to throw up my banner here and just say past. I'm going to keep it that simple this time because there's so much
[00:03:53]  stuff that I want to cover. I'm probably going to forget half the things. But, you know, hopefully we can all kind of follow along and see what's going
[00:04:01]  on, because for me, solid kind of starts before solid. If I don't if I want to talk about it in earnest and that kind of goes all the way
[00:04:11]  back all the way back. Let's see what screen do you do we want? Yeah, let's go this way all the way back to me making a website for my
[00:04:18]  wedding. And I made it in Ember or something. But after I did that, I was like, no, I want to I want to make this easier to
[00:04:29]  make websites in the future. So I started making this template and I'm not going to get all into this. This is probably this doesn't even blow up. So we
[00:04:38] 're not going to spend much time in in my fork here. But essentially somewhere around June 2014, I started making something. nothing. I called it simple VM, simple
[00:04:51]  view model. And it was a framework around knockout JS, essentially kind of playing around with rendering and see what I could do differently with using knockout observables and doing
[00:05:04]  that and web components. And I wanted to basically make this very easy, structured way of using knockout JS because knockout, knockout JS was pretty much nothing but structured
[00:05:15]  if anyone's kind of familiar with it. Right. Of course, it things didn't stay like that. So I spent like, I love having this history and get
[00:05:28]  I spent like a year just like playing render work in progress. Like I just playing around with knockout JS. Um, all the way from through 2014, 2015.
[00:05:41]  Um, and then somewhere, you know, towards the end of March, 2016, I started to kind of going, you know, working on some rendering stuff. And
[00:05:48]  I kind of decided, yeah, changing binding. I was like, maybe I can make something myself. Yes. Yes. You, you, you noticing the coffee extension
[00:05:58] , we're gonna, we're gonna see the very first commit to solid JS here in a minute. And you better believe that it's like all coffee script. Um,
[00:06:05]  anyone knows me that I was, I was big on coffee script for the longest time. Um, so anyways, this, this repo was kind of where I ran my
[00:06:14]  tasks, but it stayed on knockout and I, I started a new repo called framework. And I don't know when I started it somewhere between March and August,
[00:06:22]  2016, but the first time I actually bothered committing it and saying like I had something was August 21st, 2016. I, I think I I'd been playing with some
[00:06:31]  stuff in JS fiddles and I was like, okay, fine. I'm which it was what I did in those days. I'm going to actually initialize this
[00:06:36] . So I'm gonna, I'm gonna pull this down. I think I have this pulled down already. Let's, let's see if I can open up VS code
[00:06:44]  here and you can see this in its glory. Yeah. Where are we? Yeah. Let's open this up and let's just solid component. I don't know
[00:06:55]  what that is. That's probably, oh no, this is just something else. Okay, cool. So it's because of the MPM modules. I was jumping around
[00:07:02]  through the different timelines here. Okay. So let's, let me blow this up a bit and you can, you guys can see what was in the very first solid JS
[00:07:10]  commit. If this is of any interest to anyone, because essentially it was four files. Um, I mean, there was a server that served some stuff and did some nom
[00:07:16] ad mon stuff. But essentially this is, this is August, 2016. I basically, the way it would work is you would write your component. Oh, gotta,
[00:07:26]  gotta love. Uh, let me make this a little bigger so everyone can see it. But essentially my, my app was a class in coffee script and I had something
[00:07:37]  called observable, which is in this other file create, which created this looks like store object. And then it's mutable. I can push to it apparently.
[00:07:50]  And then after some time I update the name. And basically I created div inner HTML. It parse it apparently from using this, this library and then append it to the dog
[00:08:05] . Okay. And then we have, uh, a handler for updating the name and for clicking. And you, and you might be going, okay, what's this
[00:08:14]  Dom we're parsing? Well, it's a, it's, it's a jade template. So, um, it looked kind of like this. Um
[00:08:21] , you can see these nice squiggly handlebars to indicate, um, stuff. And I was trying to show in this example, deep nested reactivity. I
[00:08:32] 'm pretty sure. Switch explorers to the, to the left. I don't actually like to the right. Her eyes will thank you. Can I just do that?
[00:08:43]  Then no. Okay. That was weird. Can I just do this? Okay. Nevermind. I'm clear. Um, so, okay. The coolest thing about
[00:08:57]  this is I can't actually get this stuff to run like super. Like I, I was, I was kind of terrible. Like, look how many stars I have here
[00:09:05]  on my, my dev dependencies on, um, package adjacent. I tried to actually install everything and have it like build and stuff, but I couldn't get gulp to
[00:09:15]  work in modern node. And I was trying to download old node and it didn't, didn't, didn't, it doesn't exist anymore. So what I ended up
[00:09:20]  doing, but luckily for me, I actually committed all my builds. All my builds in the repo. So I actually have the untouched JavaScript from, you know,
[00:09:31]  2016 or whatever. So I can just run the server, which still works. Um, uh, even with all this stuff and port 5,000 let's, let's
[00:09:40]  see if we can open that. Let's see new window. And we should have the first. Nope. This is not it. This is, this is, this
[00:09:53]  is later. Just a second. Sorry. What's going on here. Uh, give me a second. Got to make sure. Sometimes there are service workers. And
[00:10:07]  we're going to bypass the service worker for this network. Yeah. Sorry. This is okay. Here we go. Sorry about that. Service worker on local host.
[00:10:20]  Um, okay. And, and here is our very, very simple. First example, which, uh, is literally if I refresh it. No service worker. Damn it
[00:10:31] . Okay. I need to actually unregister it. This is also early service worker days through some of my work. Okay. So let's refresh again. Okay
[00:10:44] . So essentially it pushed it before we could even see it. And then after a second, it automatically updated the snake. And if we do this, the last name updates
[00:10:54]  in real time, you know, success. Okay. And this is kind of funny to me because yeah. I mean, basically the app was what I showed you before
[00:11:04] . And then there's basically two files. There's a Dom coffee. And here's my cheating thing. If you, if any of you watch the petite, um,
[00:11:12]  solid video where I showed how we could basically just build, um, something like petite view on the fly. That's exact. I use this library riot temple. That's
[00:11:20]  what I did. The very first version of solid was basically the same as that stream. So go check out that stream. If you want to kind of like understand how to
[00:11:26]  write something like that. Right. Something like this, but essentially the, I walked the Dom. This is, this is like how petite view or Alpine or view
[00:11:35]  one basically worked. And I switched on, you know, was an element. Is it text go through, remove the original attribute. Um, Oh God, using like
[00:11:47]  underscore and stuff everywhere. Um, and basically looking at, you know, different types of expressions and then, you know, doing the correct action for it and basically parsing
[00:12:03]  these out into a tree of expressions that then got, um, associated with that Dom node. That's, that's essentially how this worked. And, um, observ
[00:12:14] able coffee was, was an attempt at writing a reactive proxy type library. So I used a proxy basically what we call stores today. We're the, we're the basis
[00:12:25]  of where all solid, um, would, would come from. So I was using a proxy deep nested and I think, yeah, get wrap, unwrap,
[00:12:36]  get set. Um, I had some deep diffing abilities, which later became reconcile. Um, they had computed properties and some subscription things. And, and it looks
[00:12:49]  like an unimplemented dispose method. That sounds about right. So yeah, I, I w I wasn't cleaning up after myself yet, but this, this,
[00:12:58]  this is essentially the very start in this lovely 144 line coffee script file from, from, from, uh, 2016. How's chat doing thank God for reactive JSX
[00:13:12] . Yeah. Yeah. It took a little bit. Right. Oh, didn't know that. That's awesome. Yeah, no. Riot was great. And this templ
[00:13:21] ating thing was super small. And I mean, maybe not super solved by modern standards, but it was like, like a couple kilobytes or something. So this is
[00:13:27]  really easy. Um, so, you know, I, I was able to take the, parse the syntax, make a very simple reactive proxy library, then basically have
[00:13:39]  this terrible. Class component thing and use, um, riots templating and Jade for nice, concise syntax. Like I was, I was all on this. Right. But
[00:13:51]  yeah, let's fast forward a little bit. Um, that one's deserves a throw out here. Yeah. So yeah, I, I, I did a few
[00:14:01]  more stuff in August. I, the same day I added the if binding and then I had the each, the each or the loop binding. And then, um, no
[00:14:09]  longer broken version. And then within about a week, first thing I wanted to do was benchmark it. So we're gonna, we're gonna, we're gonna go
[00:14:17]  right to it, to it, uh, to see how our project has, has evolved a week later. I'm not gonna go this deep on like every change, but
[00:14:25]  this early stuff is amusing to me because basically, um, we observable got a little bit better. you know, now there's a path based system looking for deep
[00:14:39]  nesting and stuff changed a bit. Dom got more extensive. Now there's an each binding and old. I was comparing them for performance, um, parse bind expression,
[00:14:54]  add note, insert note. So stuff kind of grew out. And then I had my original, looks like my original demo index. Yeah. The made rows and remove
[00:15:09]  them. And then I had benchmark, which is one of my favorite benchmarks of all time. I don't know if people are familiar with this. Um, yeah, this
[00:15:18]  is, this is what authoring solid would have been like at that point. Right. Make, uh, make a class that extends observable. And then this is
[00:15:27]  basically, uh, store object, a proxy. So then you'd go this boxes and then create them. And then on loop, it would just update the boxes mutably
[00:15:36] . So each class was like a reactive proxy. Essentially I'd figured out a clever way to extend a proxy. Um, so yeah, I mean, let's see,
[00:15:46]  let's refresh the page and see what we get. Oh yeah. Um, anyone who remembers this, this is Jeremy Ashkanis, the circle test. Um,
[00:15:56]  yeah, the, the, the funny thing is the measuring for this. It's actually really poor. It's actually only measuring the time the framework spends in the framework loop
[00:16:03] , not the whole cycle. This is very common back, back back then. So it made frameworks performance look like really better than they actually were. But you know,
[00:16:12]  here it is circles test, so to speak. Um, I tune solid like crazy to, to, to, to work on this. And this is what we're looking
[00:16:20]  at here. Essentially this proxy loop. I actually have a repo, um, for this today where I compare all the frameworks. This is, this was essential to me
[00:16:29] . Cause I spent, I spent months. Like tuning the performance of making those circles spin fast. Right. I mean, knockout was so much faster than a lot
[00:16:41]  of the others here that it wasn't like that hard, um, to do well in this by, by, by a lot of standards. Like, um, so yeah
[00:16:48] , I just kind of kept on going with it. Let's, let's jump, let's jump a little further here. So we'll read Patrick subscriptions, we
[00:16:56] 'll find props, blah, blah, blah, blah, blah. Yeah. I mean. Yeah. What, where are we? This is all like within the first month
[00:17:02]  or so up to date to component router. This is the, I wrote a web component router. Um, essentially that did deep routing with parallels data, data fetching back
[00:17:13]  in 2014 that I brought in here. But, um, yeah, I'm just going to arbitrarily pick somewhere. Let's, let's just go to updates here and
[00:17:21]  see how things could. Had progressed in two months. So things have moved on a bit. Uh, we have now a bunch of stuff in here. We have a
[00:17:34]  to do MVC app. No, it's all still coffee and Jade. Uh, some test element row insert, which I believe is the JS framework benchmark, a homepage
[00:17:45]  and our circles benchmark. And the library itself is probably in a folder called like live or something. Yeah. Now, now there is a whole component concept here. Um
[00:17:57] , and dom coffee. I don't know. This is, this is just kind of growing the, the, that simple dom file. So more rules, more,
[00:18:11]  more things. Let's. I just. Yeah. And our observable system now has computed. The core. Which I believe is still using a proxy. Uh,
[00:18:26]  was I using a mutation? Yeah. I was using a mutation observer to, to, for backwards compatibility on platforms like IE that didn't, didn't support. Um
[00:18:37] , uh, promises, which is funny because they didn't support proxies either. So I don't know what I was doing here, but you know, anyways
[00:18:46] , let's, let's, let's run this for a moment and see where, where, where we are at. Let me see if I refresh this. Okay.
[00:18:54]  Um, yeah, this is just testing all the bindings and stuff. And my daughter's name's Raina. If you're wondering this, that I, I
[00:19:02] , I was doing a lot of this. My, she was born, uh, July of 2015, uh, July 20th. So, um, basically that first year
[00:19:12] , like I, I, I'd kind of started this when I was staying up. Um, you know, when she wasn't sleeping through the night and is basically how
[00:19:19]  I spent the stuff. Yeah. So this isn't quite the JS framework benchmark. Um, I didn't generate the data, but this was like me kind of testing
[00:19:25]  the stuff that's in it. This looks like I have remove role capability. Okay. Yeah. Still hadn't figured out the bad measurement. Apparently solid got slower here.
[00:19:35]  Um, is, does this to do MVC work? No, it doesn't. Okay. Whatever. Okay. So. Yeah. We're, we're kind of
[00:19:46]  moving forward here. cause at a certain point here. Um, yeah, let's, let's, let's jump a little bit because I started updating stuff. Like
[00:19:58]  not much happened in 2016. Uh, after the end of 2016 to 2017, I was, I, I did a lot of investigation into basically different types of proxies
[00:20:10] . Um, oh yeah, here's a good one update proxy observable remove two way binding. So sometime June 29, 2017, I decided that I was going
[00:20:18]  to remove two way binding from solid solid had two way binding initially. Um, and beautiful stuff as you, as you saw. So let's, let's, let
[00:20:27] 's actually see what that looks like for a minute. Cause. Okay. The observable core is still. Yeah. Start calling them stores. Cause I had two different versions
[00:20:37] . One with immutable internals and one with mutable internals, which, um, the mutable one was more performant, but it was bugging me that
[00:20:47]  it wasn't isolatable as much as I, as I wanted, because basically you could mutate it anywhere. It's basically, I had some, I basically create
[00:20:53]  mutable today and then something else that worked like immer essentially at basically two versions. And I liked the immer version better because the guarantees left outside the system, but the create
[00:21:04]  mutable version was more performant. So I was like really struggling there. And then I eventually just was like, screw it. Give our state a set function.
[00:21:14]  So now, you know, so yeah, let's look, let's look at the, let's look at the, I want to look at the row insert one.
[00:21:25]  No, why is that? That's not very interesting, but yeah, I mean, you can start seeing what a component would look like. It extends some component and then
[00:21:33]  you'd go, it's still a class and you go at state and then you'd set what you want. And then you'd read it how you want. So
[00:21:42]  essentially, although I believe this setter still supported paths at this point, but I'm not 100% sure I had. Let's take a look here to do. Doesn
[00:21:52] 't look like I'm doing any path setting yet. Okay, cool. So, but basically the API changed. I was showing you all I was on mutable before
[00:22:00] , but now we are basically, basically calling dot set on our proxies manually and reading them. So this is kind of the start of that. I mean, there
[00:22:11]  isn't, there isn't too much that changed here. I think this to do MVC actually works now, which, which is beneficial, but it's kind of,
[00:22:19]  it's kind of funny. Like what's this pug? Yeah. I don't know if I could ever go back to this. Like, look, look, look
[00:22:26]  at the if bindings. You, you'd put them right on the element. Like if state to do's each to do in filter list, this, some people love
[00:22:35]  this, you know, like you can definitely see. I guess it's view today that still has this kind of syntax, but, but yeah, this, this,
[00:22:48]  this whole time period all the way through 2017 was like this. So yeah, I mean, it's kind of, it's kind of fun to see these patterns.
[00:22:59]  Like I did very much start in the same kind of places you would expect. But over time, the patterns kind of shifted. I got rid of the two way binding here
[00:23:10]  and, you know, explicit state setters, but you notice there's no signals or anything here at all. Yeah. I mean, syntax highlighting would help. Right
[00:23:19] . But yeah, this, this, this is, this is just one of those things, right? Like styles. Oh man. Stylus file. I don't even
[00:23:27]  have stylus installed on this thing. That's old. Yeah. I think, I think, I think this to do MVC actually works now. Let's just
[00:23:43]  give this a shot. Nope. Why it's not working. I'm not quite sure. No. The other problem is I, okay, good. There is no
[00:24:01] , I'm like, it's a service worker secretly coming back on us. It doesn't really matter. That's the funniest thing about, oh, cool. You kind
[00:24:07]  of wonder like, why is this working? Doesn't work. Anyway, most of this just continued on. I just tested and tested and tested and tested, got to
[00:24:18]  mutable work. And at a certain point, we're fast forwarding very quickly to January, 2018. Return to observable. Yeah. Let's return to observable
[00:24:31] . Cause I was playing with RXJX. I was playing with a whole bunch of different stuff at this point. This is all before solid when open source. Right?
[00:24:39]  So. Wow. My examples just keep on getting more and more and more. Swoppy rest. I, I guess I was testing other frameworks as benchmarking them
[00:24:52] . Um, trying surplus, which you aren't familiar with from Adam Hale. Um, surplus in coffee script, but surplus was the first reactive framework. I'd,
[00:25:02]  I'd actually seen that used, uh, that used JSX with the reactive framework. It's a big influence. And I was testing stuff and I just couldn't
[00:25:16]  get things as fast as I wanted. I was, but I, I, I pulled in. Um, I look at my lib now. This, this, this has
[00:25:25]  kind of gone way crazier. We were parsing the Dom. Remember the Dom coffee. Um, I'm like, I'm like trying a whole bunch of stuff
[00:25:32] . I have Dom. I have Dom one, which is based on what we were doing before or Dom two. And then I started, I started doing these pre-comp
[00:25:40] iled things. Um, this way, instead of, instead of using the rendered HTML, I would actually look at the file ahead of time and try and like pull out the
[00:25:52]  stuff where I need the reactive bindings and be smart about it. And yeah, let's see what pre-processed coffee looks like. It looks actually a lot
[00:25:59]  like our tag template literal version of Dom expression where we're actually creating a string of, of, uh, stuff like create text node. You know, the insert array
[00:26:11] , insert before, insert condition, create element. Basically it's, it's generating this giant string of a program, um, ahead of time. And this, this is
[00:26:21]  like the early pro compiler stuff things. I, I'm, I am not using anything fancy here. How am I? How am I? How am I parsing this
[00:26:29] ? Parse. Parse. Component register live HTML parse. Yeah. I'm using my, my parser that I wrote, um, that we still actually
[00:26:39]  use for, uh, the tag template literal library, um, to just to parse this HTML. And I, I got to a certain point here where the, the riot
[00:26:48]  stuff was great, but I actually wanted to pull in like acorn or something. Cause I couldn't get good enough JavaScript expressions. Like stuff was like too, like
[00:26:57] , how should I put it? Like too. Like limited. I was trapped to what they had. So I had my own HTML parser and then I was like,
[00:27:05]  okay, I need a JavaScript parser. And. You know, the, the logic was getting more complicated here. Um, template render template. Yeah. I mean,
[00:27:16]  this still is fairly simplistic. It looks like looking through these, these examples, but this was kind of the beginning of, of writing the compiler project. And. Yeah
[00:27:29] . I, I, I was playing a lot with Redux. Some people are wondering like Rx store, Redux store. I was, I was trying to use
[00:27:39]  Redux to do something mutators to, to basically create, um, mutable Redux. I, I, but this actually looks like it's just plain Red
[00:27:48] ux. I was, I was trying all these different patterns to figure out how I want stores to work. Um, this is mostly what I was doing. I had,
[00:27:57]  I'd already extracted my, my reactive library into something called proxy observable and proxy immutable. So basically two versions and I was using them, um, to create
[00:28:11]  this pattern. And yeah, mutators can't dispatch actions if it's dispatching. I, I, I was, I liked Redux, but I had this problem
[00:28:19]  with Redux. I, I, I, and if anyone's seen X state, they, they know what the problem is. Redux is function of. So you
[00:28:26]  basically can you pass in the old state and you pass in the action and you get the new state back. Right. But I'm sorry, but I wanted to wait
[00:28:34]  or sort of the event. Sorry. You pass in the, the, like the event data, you pass in the old state and you get the new state back. I
[00:28:40]  wanted to like trigger future actions. So I, I came up with a system here, I think maybe to dues has it where you could actually like add actions in your
[00:28:49]  reducer that would happen after the fact. Um, so this still didn't break the synchronous consistency of re of like Redux, but it would allow you to schedule stuff
[00:28:59] . I think this is the Elm architecture essentially. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. And you're asking about the,
[00:29:12]  like the store and the mutable. The difference was they were store and mutable are still based on what today, what I call my mutable core. I had an
[00:29:20]  immutable core that was based on, um, like cloning the nodes internally, like the way immer works. Um, again, I mean, when was this 2018
[00:29:30] ? Like this was before immer was a thing. I just, I was already kind of experimenting in this, in this area. And, uh, it makes sense. Like
[00:29:38] , um, um, Michael West street would be as well, cause you're doing these reactive things and you're using proxies and you're like, well, I
[00:29:44]  can just do the opposite. You know, like why not? Um, but yeah, all solid stores derived from the one side, the mutable side, but I had
[00:29:51]  a completely different immutable side that where everything was stored independent. of the proxy and the proxy was just a proxy over the path. Um, so there's the path
[00:30:00]  that was important, but this was difficult for disposal because you'd always have to do a lookup, right? You couldn't just rely on the referential connection of stuff
[00:30:08] . Like the things are being children and things like it could just go away. Um, so I had to keep track of everything down to the root in the immutable version
[00:30:16]  and like do cleanup and stuff. It was, it had performance issues, but anyway. Um, yeah, I mean, this is, this, this was kind of
[00:30:27]  fun. I did a lot of stuff. That's why I want to talk about RX and stuff. I, I, I, I, yeah, what's this?
[00:30:35]  This is a RX based store, I guess using like map merge map RX. So I just, I was trying all this stuff and I was like, this isn't
[00:30:45]  easy or fun. Um, it was just like too much. Right. Um, what's the actions. Yeah. We already looked at actions store Apollo. I was
[00:30:55]  doing a whole bunch of Apollo stuff too. This is, this is what derived it. I was trying to, I was testing Apollo to use in my work as well in
[00:31:02]  this environment. I was, I have so many different versions of ideas, observable component, proxy component. Um, I, I probably can't even remember all of what
[00:31:14]  these things are now, but, um, you know, I was trying proxies with something. You know, I was trying proxies with surplus, which
[00:31:19]  is that other library. Does this fine work? Thank you to do MVC to do MVC finally works. Um, okay. And I'm probably finally measuring this properly
[00:31:29] . Yeah, there we go. This isn't bad to be fair. This version 5.58 loop on the circles benchmark. Let's let's let's actually look right
[00:31:38]  now. If you go circles benchmark today is right here, right? So where was it? Let's refresh and just run it. So five and a five and a
[00:31:50]  half, let's say. Okay. Let's look at something backbone. See, it's funny. Computers are so much better today. Like five, seven, it
[00:32:00] 's nothing solid. This isn't even up to date solid. It looks like. Okay. So it's funny. This is just be such a big gap on older
[00:32:10]  computers. Like we're like, we're, we're, we're looking at like, oh, these things are, you know, sub four, you know, you
[00:32:20]  know, something around five. Inferno is probably sub four as well. Knockout will be five and a half. Fish a little bigger. Lit probably. Five
[00:32:31]  and a third. Yeah. This is, this all kind of checks out. Right. Five. Vanilla. Four, seven ish. Yeah. So it's
[00:32:39]  funny that range used to be into, into like dozens of milliseconds, but now everything's five milliseconds. I, I, I could add like a dozen, you know,
[00:32:49]  like a couple hundred more circles, but it just doesn't matter the same way it used to. So. Yeah. You know, this, this is, this, this
[00:32:59]  simple list. Where's posts. I think this is querying graph graph QL. Yeah. That was a graph QL query. Swoppy API is dead
[00:33:08]  now, if I remember correctly. So I'm pretty sure that error is out. Row insert who this looks familiar. Doesn't it? It's the JS framework benchmark.
[00:33:19]  Um, swap rows. So. Yeah. And yeah. Having lots of fun playing with web components, using slotting, put this, this, this page has react and
[00:33:36]  solve. And hyper, like it has like four frameworks on this page, all rendering different stuff interweaved with web components. So I was really big on web components
[00:33:45]  at this point. Um, I, I don't know if I express that that much. I was focusing on that side, but if you look at what's happened here
[00:33:52] . Uh, for how these apps look like these components now are, are extending. This is what I thought a component should look like. They're class components. And
[00:34:04]  I believe they're extending web components. So I'd be like tag box benchmark. So that's, that's the, the HTML tag. And then I would be
[00:34:12]  like defining my props. And. Requiring template and styles and then constructor, which would add my state. And then I'd have the ability to set it. And
[00:34:24]  then we could. Yeah. Do you know what this is? Yeah. You're probably like, what the hell? Push apply boxes. Well, these, this is.
[00:34:34]  Um, the old, you know, how solids, uh, stores have the, the set state path syntax. This is what this is. I used to accept arrays
[00:34:43]  of arrays. So you could, and this is what I was doing with like the Redux thing. I was actually creating lists of mutations and running them all at the same
[00:34:50]  time. So this is solids path syntax, right? So the stores think boxes, I top value. Um, it's just being pushed as arrays. And if I,
[00:34:58]  if we look where this tick function is being called, you, we should see that we go set state set paths. So I had a set and set paths for deep
[00:35:07]  thing boxes. So essentially set would just do like the normal react style thing. And then set paths would do what we do today for those, the path syntax for stores.
[00:35:17]  Part of this is because I know that I'm moving to OBS and I know that I'm going to get a better setup. And I know that Theo is going to
[00:35:30]  help me with it. Um, and I, I just not willing to pay like the, the, that jump on stream yard. I'm like, oh man,
[00:35:37]  I just don't want to pay that extra money. I know this is so cheap, but I was just like, I could do 10 80. Um, if I pay
[00:35:43]  stream yard more money. Um, anyway, uh, you, but you can kind of just see it. Like this is, this isn't, it's funny.
[00:35:52]  Cause I get suggestions like all the time about how, you know, why don't you try this? Why don't you do this? Kind of trust me. I have
[00:35:59]  like, like, okay, let's keep on going. Um, so yeah, you can, the funny thing is that even though this is getting very close to when that
[00:36:11] , that click happens where I essentially realized that JSX is in my future. I, cause I start pulling in a corn and stuff and like, we're, we
[00:36:19] 're, we're getting there. I, I do some big mid refactor and yeah, this is my last commit to this repo before solid goes open source. Um
[00:36:32] , so the funny thing is you're gonna notice is it still looks the same. Um, I didn't really change very much here. Um, at this, at this
[00:36:43]  time. So let me see here. Let me look at my app components. Essentially. Yeah, I was playing with difference with different stuff here, but we're still basically
[00:36:56]  on coffee script components. See, I'm now using component register. Um, which, uh, which was my, uh, which is for my, um, web
[00:37:07]  components. And yeah, is there another example here? Let's look at row of insert. I don't call this coffee scripts to syntax doesn't highlight properly anyway.
[00:37:17]  Um, yeah, proxy component, like this, this is just terrible DX. It was just me keeping all the same stuff. I, I do end up improving this later
[00:37:31] , but essentially. Yeah. If anyone heard that on the back of stream. Um, yeah, so any, anyway, like you could see that the stuff's in
[00:37:45]  a pretty different place. Okay. So let's around this time. As I said, I made that realization about JSX and I was like, I didn't let me
[00:37:56]  see here. Do I JSX test? Yeah, here we go. I brought acorn JSX in the project and I started creating a compiler using acorn by
[00:38:09]  hand. Um, that transforms JSX into create element calls and create text node calls. Right. Um, which is, which is, which is kind of interesting.
[00:38:25]  Um, I don't, I'm trying to, where was I testing this? The funny thing is I don't actually see. I see the, the, the,
[00:38:34]  the lib code for it, but I don't actually see. Okay. If anyone's never seen coffee script for JSX, it's, it's, it's,
[00:38:43]  it's, it's wild. Um, but yeah, the very big on the things, the web components. So yeah. Um, around this time is actually when
[00:38:52]  solid 1.0 or the starting at 1.0 when I first actually open source the project. Um, and I actually don't update this project with the updates till much
[00:39:00]  later. What's kind of funny to me about, about this whole thing is, um, I'm just gonna show one more from this repo before we can move on.
[00:39:13]  But where was it? Maybe, maybe just jump all the way to the last time I updated it. I mean, this seems crazy that it's like a year later
[00:39:20]  and I'm jumping way into the future here. But the funniest thing about this is. Yes. JSX is now in here, but look at the patterns I'm
[00:39:34]  using here. I'm still using web components. Um, and I'm using them like with recompose style patterns. So if I go in here and find solid here
[00:39:48] , um, I'm still, yeah, actually the, the box benchmark was probably the better example. Is there another one like that? Yeah. Yeah. Here we
[00:40:02]  go. Compose list element. Set. Register my initial props. Dragable and with solid with events. So I was using this hawk pattern. I was very
[00:40:12]  happy with it. Cause you wouldn't actually, so far, if you've noticed, you don't actually go like create the primitives anywhere. There's no like create
[00:40:20]  signal or create state or anything anywhere. They're all wrapped up in these, these hawks essentially and using web components. And I was so sure this is, was
[00:40:28]  what the future of solid was going to be. Um, um, and I just wanted to show this because this is, this is like a year in the future, you
[00:40:41]  know, it goes much further out. And this, this, this, this, this is what my ex my experience was like picturing my ideal experience. Like I
[00:40:48]  was only starting to kind of get into, to these other patterns, but yeah, this, this is the, you can actually see the hook stuff here. I jumped too
[00:40:57]  far ahead. Anyways, let's, um, anyway, what made me open sources? Yeah. You're, you're wondering cause it around this time. I, I
[00:41:13] , I, I, I, you know, I, I showed some of this stuff and then like, I decided to open it. And then like, I decided
[00:41:17]  to open source it and, and we're gonna, we're gonna kind of jump across to that because there was one huge, huge reason I wanted to open source it.
[00:41:26]  And you might've seen this before. It's something called the JS frameworks benchmark. I'd been playing with my circles for, for like two years. And I wanted
[00:41:38]  to, and I wanted, I wanted to, I wanted to show off performance. Right. And the very first time solid, um, got in the comparison was actually round
[00:41:50]  eight. It was like one of the last of the classic JS benchmark, um, runs. And let me see if I can find it here. Yeah. I mean
[00:42:01] , it was pretty good. Um, this was September, 2018, uh, solids right here. Uh, with a one Oh five over the fastest library, um,
[00:42:16]  vanilla. Funny enough was not the fastest. Dom C and stage zero were. And, and, uh, that's, that's pretty, that's pretty, that
[00:42:29] 's pretty funny. Um, because Dom C and stage zero is we, I used what I learned from there to actually make a better version of vanilla and upgrade vanilla. And
[00:42:40]  then I actually made solid faster to eventually. And, but essentially this, this, this is, this is what's the exact dates on this. This is, this is
[00:42:49]  published September 27th, 2018. Um, so you can see that the, the, the, the, the players here, right? Here's solid, um,
[00:42:56]  surplus. I told you about Evie fastest feed on library. Here's vanilla hand optimized web components. Inferno knockout JSX. This is a library I made
[00:43:07]  using my same, uh, compiled technique with knockout. Uh, what do we got? Dom VVM. Oh, standard web. This was the fastest web assembly
[00:43:15] , uh, handwritten. It's basically the same as vanilla, but in web assembly. Um, right. Um, what do we got here? Angular optimized,
[00:43:24]  but one, two, four. Where are we? This is like a very different time period. If you can go back to it. Um, view, view 2.
[00:43:31] 5 at 1.4. Actually, I think I passed over preact. Yeah. Preact was faster than both view and Svelte. This is Svelte
[00:43:38]  two time period. This is before Svelte three. Um, right. Um, yeah. Angular Marco react. These two had been like tied forever. Angular Ivy
[00:43:43] . Redux. Mithril. Lit. Early version of lit HTML. Here in the back. And. Angular one. MobX. Ember. And knockout
[00:43:53]  always at the end of the pack. And something built on RXJS at the very end. This is the, this is the kind of scene when solid. This
[00:44:00]  is not when I, I first submitted back in, I think the summer before this, but this was the first time I got in the official results. the end of
[00:44:06]  the pack and something built on rxjs at the very end this is the this is the kind of scene one solid this is not when i i first submitted back in i
[00:44:14]  think the summer before this but this was the first time i got in the official results um back in september 2018 so yeah i guess that's almost five almost just under five
[00:44:27]  years ago um so yeah i mean this is why i open sourced i knew what i was doing was pretty fast and i actually had had some fun with this right because
[00:44:38]  i'm so fortunate to have those early commits to see like what it was like to author solid during that time period but like like the the js framework benchmark basically took over from
[00:44:53]  this time this is my first submission to the js framework benchmark solid point zero zero point eight that i've released and i i'd switched to javascript thankfully although i
[00:45:03]  think solid itself was still coffee script at this time but look what is this default class app with a static template on it like it's so it's it's it's funny
[00:45:13]  like i it's funny because i get a lot of flack about the class components and stuff but i i use class components and mutable structures and all this stuff for years
[00:45:21]  religiously there's a reason i built the opinion that i have today um so yeah what is this so we got some jsx and i i i love this because you
[00:45:33]  can see look i was trying to tell it not to wrap certain expressions to not make them expensive see look at this skip tell the compiler not to wrap this expression no i
[00:45:44]  i stopped using coffee script yeah i mean it might seem like i just came out of nowhere and just smashed it but i showed you this was two years of of like testing
[00:46:04]  and and and like like honestly the most of that testing was just making circles really fast but like like i i tuned it for years even before so that basically the second that solid
[00:46:18]  came up came out it was basically the fastest uh one of the fastest options for right but yeah i mean it's funny because when we talk about performance on the client you
[00:46:30]  know i can always be like you know not much has changed in five years solid was the fastest five years ago and it's now like performance doesn't matter you know we've
[00:46:40]  watched i've watched view and self close the gap you know you know significantly they've almost like cleared half the distance now over the last five years but like we we were basically
[00:46:50]  where we are today five years ago um but yeah i mean the ergonomics weren't as good like like what is this uh i had no i i had the trial and
[00:47:01]  error to figure out what patterns i liked right this is this is the first submission you know so solid and then state from solid so you just the state though where is it getting
[00:47:14]  yeah new state this state okay let's let's jump what i think my second submission was this one oh there's a memo uh and i i added some more stuff here
[00:47:32]  and this is getting close to um and what what do we do here so i'm now i've got a bunch of extra stuff here because i'm trying to make select row
[00:47:43]  good based on my select row benchmark sucked and always sucked and it sucked with knockout and it sucks in most frameworks and always bugged me how select row um in the
[00:47:52]  benchmark um let me see if i can get there this this one was kind of always quite poor um this you're not seeing it here because most frameworks are decent um for some
[00:48:03]  reason this is before they added the slowdown so like you can't see this over the variants but what you'll see as time goes on is that select row is one
[00:48:13]  of the most annoying benchmarks because it just has this extra overhead and i was trying to solve it so yeah again this is not great i came up with this like this is today
[00:48:27]  we'd call this a cheater method basically what i did was i came up with ways to create helper functions that set the dom stuff like directly in a certain way and
[00:48:38]  then i would i i i was using uh surplus's uh custom binding syntax which is function and then i would put that in here and then look i changed to static to say
[00:48:51]  that don't wrap this like this is very manual um from the dx point of view obviously we have our state setters and stuff but this is just the this is this
[00:49:01]  is this is this is all very manual right so let's let's let's let's keep on going um does it i had a lot of fun with this um uh let
[00:49:11] 's see one two i think very close we're going to get to around the time like when was this pr september 8th so this is probably the one that was in
[00:49:21]  that benchmark that i just saw you or just showed you um so i finally got rid of the stupid class um actually did i get rid of the class in this one yeah
[00:49:31]  i had gotten rid of the class on this one so this one's a bit better and but we're we're making progress here now oh yeah so i i cleaned up a
[00:49:41]  lot of that cruft i still needed something special for select um but you notice something here there's no for component in in in in these ones i have like memo which
[00:49:53]  is what i call my map function here i called it i did something weird here was using map s from sjs uh essentially i was you know and i was yeah like basically
[00:50:05]  there was no control flow in components and i was doing this kind of stuff all the time um and then this was fun do you see see this double parentheses this meant that
[00:50:17]  this data will never change so this you know how i had that static thing um before i tried to use parentheses to indicate that if things are static um so yeah i mean it
[00:50:31] 's so funny when you look at solids api now in hindsight you're like oh it's freaking obvious right like why would you just do anything different but i really tried
[00:50:41]  to do everything different that i could like trying to make things performant and i said this this this version was what we were looking at for for the table results where solid was
[00:50:52]  very close to the front of the list so yeah i mean what can i say i honestly this select thing like was the bane of my existence like it's funny people
[00:51:10]  think i did it for the benchmark but i was i had this problem with at our work with knockout and i was trying to solve this solution um i didn't the problem
[00:51:20]  is this you could put a select like in your model data you can go is selected but that that taints your model data and this is like the classic mbvm
[00:51:30]  problem um and it's really quite awkward because like you you might want to use in multiple places is selected doesn't make any sense out of those contexts you want to keep
[00:51:44]  the model separate from from the selection state so you have to use a projection and the projections are always expensive so it just it just it just really it's quite it's
[00:51:55]  quite awkward anyway so yeah i mean how many how many are we at three like i spent the most of the rest of 2018 yeah i got two more to show you um getting
[00:52:05]  getting here where were you this is november i added my mob x version of libraries now so i have ko jsx and mob x jsx and i actually later when view
[00:52:15]  releases their view version i came up with a view version basically which is kind of cool because it looks like evan's gonna basically make his own version of that pretty soon but
[00:52:22]  um um essentially yeah here we go uh how's this one different still each oh yeah this was a big one this is we actually kept this api for a while you
[00:52:36]  notice that the doubles are gone i changed this so that everything was static by default and solid which seems like dangerous but then if something had the parens the single the other
[00:52:45]  way that solid worked for a while you notice that was the way that solid worked for almost a year i think people a lot of the early community people like joe um who
[00:52:56]  was in the chat a bit earlier came on and they're just like they hated this but i to this day still love something about this and you might be going why use the
[00:53:06]  the friends why use the friends well do you know what the best thing about the friends were they didn't mess with typescript you know people were like oh how about you
[00:53:15]  use a dollar sign thing and that's like i was like instead of viewing it like a function call or something which it isn't i viewed it as a special symbol kind of
[00:53:24]  like the kind of special symbols you might see in uh in um what do you call it like uh angular or something i viewed it as a prens bracket thing you always
[00:53:33]  wrap the expression with it um and then that's how you knew it was dynamic um like that it needs a wrapper that you could have argued well you you could have just passed
[00:53:44]  in a function at this point but and there is some merit to that and in fact arrow function might be less code but i just liked it aesthetically um i don't know
[00:53:55]  it just like yeah i that i was trying to make this friendly for like if you notice the state object it was built for people coming from react to a degree i thought
[00:54:10]  no one would you know like by this time solids had signals already like um if i if i go back on github i'd signals right from the first release of solid
[00:54:20]  like it was just you know because i was using sjs under under the hood for a while too but it was just i thought no one would use solid that way so
[00:54:28]  i was actually like i could have had better benchmark scores in the beginning if i used the signals directly but i was so determined to show good developer experience that i used the slower
[00:54:38]  proxies and in the benchmarks just because i figured that no one would pick up a framework that used the function getter setters i thought they like they this is before
[00:54:45]  hooks i thought everyone just needed plain objects so that's a lot of where this came from even this kind of syntax it lets you feel like everything is plain objects it has
[00:54:56]  all the same rules destructuring that we know today but this is where it was coming from was this pre getter yes yes this is spectrum time period yeah yeah i
[00:55:09]  mean yeah exactly like it like it doesn't take much to make this actually quite nice yeah and and the thing is yeah i what i kind of glazed over here is the
[00:55:30]  the release of solid also meant the release of my babel uh jsx dom expressions plug-in i moved it from acorn it was just so much easier to move
[00:55:38]  to jsx um and i mean do i is it still around plugin i meant the original repo because obviously yeah see if you guys want to see a history lesson you can actually
[00:55:49]  find the original the original um one before i made it into a mono repo still intact here today and i literally did classic ryan one filed it this was also originally written
[00:56:04]  in coffee script but this this is this is a much simpler version i generalized it for ssr eventually i generalized it for a bunch of stuff but this is a much simpler
[00:56:15]  version of of it um it's still stupid like how did i find anything in in this in this 1200 line file don't ask me can it actually can i go back
[00:56:28]  let's older let's let's look older older can we get back to that like march 2018 look at look to have class list yeah classes has been with us from the beginning
[00:56:45]  first commit um let's see if i can find it because i'm pretty sure i had it all in one here we go index.copy that sounds right right can
[00:56:56]  i show file can i just just look at it okay whatever oh wow this is actually really short this probably didn't really do much of anything looking at it let's move
[00:57:16]  a little bit fragment and attribute mapping fix spreads custom elements add module name yeah this is this is all the stuff for the solid original release i've tried so many different things with
[00:57:31]  fragments at the beginning but i had settled at one point to use document frames so yeah sorry i'm just catching up on the chat here i don't think ryan does
[00:57:50]  does not not not initially i mean this is go coffee script go fast um kind of stuff i i was like i was still hold out in 2018 um but luckily for everyone
[00:58:02]  here i was writing my benchmarks and stuff in here uh still this so yeah this this this this this syntax i kind of liked quite for a while and the last commit from 2018
[00:58:14]  is this one and again think about timing react hooks were announced october 2018 and you saw you you you you you you've all seen um what like the the api
[00:58:33]  here new state and then the state has a setter on it this always bugged me because to hit that setter you had to go through the the freaking uh the
[00:58:42]  proxy trap can i actually address this for a second i was gonna we'll actually talk about this later in the stream um if people if people are interested in this because there's
[00:59:01]  a catch here and um it's kind of interesting but yeah we'll we'll talk about this a bit later right because you can actually see in a lot of ways i
[00:59:14]  did start in the same place as view and actually um ended up coming completely different conclusions and then five years later they're kind of realizing that maybe you know some of those conclusions
[00:59:27]  are actually good ideas so we'll we'll get to that in a minute um anyway moving on so um if you if you look at my last commit for 2018 i i
[00:59:42]  i react to solve my biggest problem and that was like that was like this use state thing because now i like i don't know i never thought of the tuple i i
[00:59:54]  just split split the setter from the thing and essentially solid i used use originally instead of create um but essentially our proxies now had the proper separation and the path
[01:00:07]  syntax and this is starting to look modern i i loved when i released this is i was like i thought i was so happy i'm like look at this implementation 69 lines of
[01:00:16]  code this implementation is actually smaller than this felt both in the amount of characters typed and um uh yeah not not actually in the outputted code but this one was one s
[01:00:26] velte um in terms of the number characters typed in the in the white space and everything like i measured it and i was just like very happy with myself and it was the
[01:00:35]  introduction of the control flow components because see this dollar sign i decided that the helpers sucked like you could see it they were fine but it was like this messy kind of
[01:00:47]  stuff as soon as i did this it just everything just fell in obviously we're still using our our friends at this point but like essentially like i had some other hooks on it
[01:01:10]  to do some stuff but this was like the beginning of what i considered the modern look i basically realized that things are just much tighter with control flow components and that um you
[01:01:23]  know we we had the setter get things so this takes that was the end of 2018 essentially so yeah i mean i told you i'd go through the beginnings and stuff and
[01:01:39]  this this this is really the beginning uh of where we went um obviously from 2018 stuff started to kind of take off here quite a bit for me because hooks kind of sh
[01:01:52] un light on my work and i'd open source the project and i'm looking here i'm kind of getting back to the beginning of the commits here yeah march 2019 is when
[01:02:03]  i actually started making a change log so there's some gaps you know obviously in in my documentation but for me one of my first big uh first big successes was uh in
[01:02:13]  february 2019 um literally actually on my birthday um uh or the day before my birthday uh the latest version of the js framework benchmark went off and for the the very
[01:02:28]  first time um solid was the fastest library and what i'd done was i was using document.create element and then i switched it to cloning uh dom nodes and that
[01:02:40]  was like the the moment we'd already kind of established um the api like you know like i'd shown in the previous one but i have refactored everything to
[01:02:51]  use clone node instead of document change element and at that point um like i don't know if i can actually find oh it's yeah i didn't link the one at the
[01:03:03]  time it's too bad um let's let's actually because this is right now let's actually let's just let's see if we can find it just for fun because
[01:03:15]  this was a this was a moment official results page uh i said it was chrome 72. oh there's a gap here that's it's before he started it's before he
[01:03:27]  started uh um that's too bad so we've lost it but it was it was it was before he started officially uh making the results but i was pretty happy i i
[01:03:39]  mean if you've been paying attention you should have already seen you should have seen that i mean we we're using jsx um with like like like with like uh like
[01:03:58]  very hook like primitives and then it was only hooks is what gave me the the idea to use the the tuple return so yeah i mean this this this article probably it
[01:04:16] 's funny you can kind of see it in time because i imagine yeah yeah no one was really paying attention to what i was doing at this point um but it it was
[01:04:26]  a moment for me at least um i started writing articles around this time because once hooks came out i was like i'm on to something i don't think anyone realizes it yet
[01:04:34]  but i felt like i was on to something um and i continued to play with stuff for a while and it wasn't i just kept on writing and playing and writing and playing
[01:04:46]  and a funny thing is i wasn't on social i wasn't boosting it i just kept on writing and learning stuff and i started realizing that i was on to something basically
[01:04:54]  and can i can i show you all what i'm talking about for a minute i'm gonna use escalator it makes it easier for me but essentially okay you know what screw
[01:05:03]  that let's make a line i i was starting to kind of view things on two axes i love these four quadrant grids everyone knows i love these four quadrant grids and
[01:05:18]  in my mind there there was a couple things going on the the one axis was about um like the the up and down axes was about um like values and the and and
[01:05:34]  for me the right to left axes like this one was about like technology like top down versus like events or whatever and and i've never given this this graph the best job
[01:05:52]  people will come to me and be like what do you mean by this graph just just just feel me on this for a second to understand where i'm coming from the web started
[01:06:04]  over here we had like backbone yeah change the color so that doesn't mix good stuff like yeah something naked we had like backbone and we had we had maybe angular over here
[01:06:23]  right and i'm i'm talking you know this we're looking at 2010 right now like let me put a year in here just so we people can kind of who view
[01:06:33]  this after the fact and kind of keep keep this in mind so i'm going to slowly fill in this table as as the time goes on here but essentially stuff was kind of
[01:06:45]  sitting over here and suddenly you know at some point uh during this time period we start people are like we can't do this kind of top-down inner html
[01:07:01]  kind of thing and they start kind of going over here and this is where my buddy knockout kind of comes in and essentially yeah isn't where it's starting the way i
[01:07:13] 'm talking about javascript frameworks history javascript frameworks right and and and and people are kind of like oh we got to go over here so suddenly like knockout
[01:07:24]  started getting some friends view and uh can yes and okay so knockout got a bunch of friends and then over suddenly someone showed up over here and they're like we're
[01:07:46]  called react and and and and and and if you look at this react is dying metrically as as opposite from these as possible okay like don't get me wrong the timing
[01:08:04]  view probably came after the original react but you like roughly i'm just like so our time scale has now jumped and we're in like 2014 let's say okay so okay
[01:08:19]  and reactive was much later in this game too that's felt uh riches harris library for it's felt and what ended up happening oh sorry i missed a big one that i
[01:08:29]  like um ember ember was kind of really close to line over here let's say but let's let's give ember some props or they're here okay and
[01:08:39]  then everyone was like holy crap look at what reacts doing and and they they what ended up happening is these guys started going they didn't they didn't cross the value line they
[01:08:53]  just changed they just changed the technology and these guys kind of went we'll we'll just tiptoe just over it and and everyone who stayed in this in this um
[01:09:10]  this this area here got turned became like no zone they like they all died and before long we had other libraries down here like uh i don't know react and another one
[01:09:41]  burn out okay and i'm not gonna lie i i loved being over here but this place was absolute chaos to be fair angular isn't actually that far to the left i
[01:10:00] 'm not i'm being kind of i'm i'm i'm the the exact position is a little bit you know off perhaps but it basically react showed that you could be
[01:10:13]  on this side of the hemisphere and still be performant and everyone was so happy to get rid of all the chaos of those here that they all kind of walk walked across the
[01:10:22]  line and i was just like sitting here and i'm like you know what damn you guys are right this this area is kind of a mess and and so we we fast
[01:10:36]  forward to 2016 and i'm like like these are like long dead at this point and i'm like why is there no one down here why is there no one over here why
[01:10:47]  is there no one over here and this was like for me this just made a lot of sense because when you look at react you can make two decisions you could go oh
[01:11:08]  they solved the problem with technology or you could go they solved the problem with values which is more important i really i felt that it was the value and the patterns not the
[01:11:22]  technology that was more important so i showed you i went through all the stuff i i i solid was here and here and playing around you know and it's funny what's happening
[01:11:36]  right now because like if you go let's get let's let's go into 2020 and let's let's fast forward a bit we have uh let's add svel
[01:11:53] te i'm putting spells here weird people might think svelte's actually kind of like like here maybe but do you do you understand when react came out it everyone was
[01:12:16]  over here and it was diametrically opposite and it basically killed everyone that wasn't who didn't come back you know into this side and what's happening right now no one
[01:12:32]  was really paying attention but react itself has been slowly slowly creeping this way slowly slowly slowly creeping this way well everyone was like busy like going oh this way that way this way
[01:12:45]  that way like what's going on now views like oh i i want to come back over here too like i can't make up my mind like like there's this like this
[01:12:56]  this is sort of why i feel like i realized i started realizing that i'd carved out a space with solid because it it was in a different zone yeah i told you
[01:13:11]  everyone at the beginning that this axes are really vague in a sense because they're like where i view like this is more of like this is part impression as it as it is
[01:13:25]  like exacts yeah i mean i i that's what i said at the very beginning that this the axes won't completely make sense to people um essentially on the technology side
[01:13:39]  it's roughly we're talking about coarse grain to fine grain roughly speaking and on the value side we're talking about mutable to immutable like roughly but it that that
[01:13:55] 's that's too over simplified uh it's the difference between like unidirectional flow and mutable and and and and and like two two-way binding and like two
[01:14:08] -way bindings up here and mutability and unidirectional flow and immutability is like over here if that makes sense like um it's it's it
[01:14:17] 's about the philosophy when i say that react and solid share philosophy it's it's also about things like the reason the focus on primitives versus the focus on frameworks like
[01:14:31]  it's this it's hard for me to give it a single axis um to tie all those concepts together but you actually see like right like this side tends to value frameworks and
[01:14:48]  tends to value mutability maybe object-oriented programming type stuff this decides the signs of value primitives functional programming immutability unidirectional flow right and so essentially
[01:15:06]  what i'm getting at is when you have certain values and certain kind of fine-grained technologies things become chaotic but react has had basically showed the prototype they solved both
[01:15:23]  problems perhaps the only qualm i've i've ever had with react was the technology choice i i'm like i'm saying from here we had two options we go this way
[01:15:34]  we go this way everyone went this way for some reason they saw the technology they saw the vdom and they're like that's what's important i was like no what's
[01:15:40]  important is the unidirectional flow control patterns you build a so i'm going to have a large app in these frameworks over here and the chaos isn't because you
[01:15:49] 're using a vdom or not using a vdom rather it's because of the patterns you use you maybe you could put library versus framework on this i'm just there
[01:16:07]  there is a certain split here a mentality um and that's why i'm being kind of vague here because i can make this access like six different things but funny enough frameworks do
[01:16:19]  tend to stay on the same side when i when i when i talk about them often to untrack and and not track is is actually that is on the technology side
[01:16:31]  right that's on this side right i guess more i mean but yes i i i i want to point this out maybe this graph makes no sense to anyone except for me but
[01:16:41]  this was my guiding star and this is when i started to realize that we've carved a space um and it really you know i this realization happened to for me in 2019
[01:16:54]  that solid was in its own space you know just because of the difference in philosophy and technology yeah i i'm i'm sorry maybe oh man i'm trying i'm trying
[01:17:15]  here okay let's let's let's let's move on from this yeah roughly yeah and he's muted yeah the the something along these kind of kind of lines right um it
[01:17:35] 's just interesting to me because um i've always felt that react picked a place and knew where it wanted to be and knew its direction angular never really moved and i respect
[01:17:51]  it for that it's it's more interesting to see certain frameworks that you know be influenced a bit more by like public opinion and like and that drive stuff because you can actually
[01:18:06]  it makes a lot of work because when you migrate from one thing to the other or updates like sometimes that even gets confused for innovation right like you might think oh because this
[01:18:17]  framework keeps on adding new things and like and you know changing the paradigm that they're innovating but they also in another perspective they could just be walking circles over this these axes
[01:18:29]  essentially um this is just this kind of where i was coming from where i was thinking yes yes yes knockout knockout i mean i have shown this other videos but we
[01:18:46]  i love know what i love about knockout you can come back to this website hasn't basically changed in 20 12 years and just like go straight and there's live examples they
[01:18:55]  were the first ones to have the good tutorials um you know interact tutorials but where am i uh knockout had three ideas they had um observables they had computeds and
[01:19:11]  they had yeah i mean mostly observables and computers but then they also had pure computers eventually but essentially they developed the the what i consider today's modern reactive language the same
[01:19:23]  thing that svelte has with dollar signs and lets same thing that view has with rest computers and watches knockout had this pattern and even hooks resemble them when you when you
[01:19:33]  squint um i've i've done some talks about that um but but yeah i mean we're we're kind of this is this is this is just where when i
[01:19:49]  started realizing that i was onto something you know kind of in porn here or push pull i mean i don't know i don't know if it was the first i mean the
[01:20:00]  last stuff happened in academia but like from a js framework standpoint standpoint i'd say knockout a standout um both rx and knockout came out of uh microsoft
[01:20:08]  in the late 2000s anyway sorry i i'm hoping this graphic sort of sinks in my final point here is solid sitting over here interestingly enough in the same way react sitting over
[01:20:29]  here i feel like solid challenges this side more people always wondered why um like you can kind of get why the dialogue about solid versus react is kind of funny like and how
[01:20:47]  i have such respect for react part of it is i see this arrow so like maybe solid sitting where reacts heading in a certain way not technology exactly like reaction ever going to cross
[01:20:56]  this line but like maybe there's a bit of that but i think it's more of like like the same thing here we're actually more opposite to the other reactive libraries
[01:21:06]  than we are to react it's the it's a difference in values um and the difference in like rendering technology meant things i mean it does sound like view is going to try
[01:21:20]  and introduce something over here maybe and we'll see if that catches but this is a dangerous place to be in um anyway okay so yeah let's let's let's let
[01:21:34] 's let's move on a little bit from there the this this this was big for me because it meant that i had a reason to continue when hooks came out i wasn't
[01:21:43]  like oh i guess you know i'm i'm done and but probably the most uh uh how should i put it i don't want to say fundamental but one my most
[01:21:56]  if there's like one article you read from me probably ever this is probably the one the one um this is the most influential article this is one i found out later probably ended
[01:22:08]  up getting me hired by marco um i i did i did a test that then no one really does i took the js framework benchmark and i took web components too actually
[01:22:17]  and at this point i you know i was trying to show that there's overhead to web components but that wasn't really my my goal i was i took the fastest libraries in
[01:22:25]  their own type of thing i took the fastest feed on library the fastest like lit library fastest you know reactive library solid and svelte fast compiler library library and i said
[01:22:37]  what the hell happens if instead of just testing how many we do 10 000 rows what if we scaled up the points what if we put 10 000 components on the page and the
[01:22:49]  funny thing is everyone talks about the update performance the vdoms and the re-renders but if you write optimal vdom code the cost of components are basically nothing
[01:23:01]  look the memory is nothing the performance is nothing like this is only going 0.04 from going from like one component or actually this is the minimum necessary for ev so probably one
[01:23:14]  per row because vdoms use components for change like they need components you can't get away from components in a vdom you actually want more components you get worse performance where
[01:23:22]  in a reactive system components are usually an extra boundary and they're actually expensive so i was like very impressed with the performance of the vdom on this side and then i
[01:23:31]  took lit and things didn't go so well and i took cells i'm gonna jump down and things didn't go so well either but solid wasn't quite as good as the
[01:23:44]  vdom but it was close enough and actually it is actually the same gap spread if you look at it the memory was actually almost flat because um the we're not making
[01:23:57]  nodes per like it's only solid scales with interactivity not with number of dom notes and and and this this this this this was this this kind of completely warped not more
[01:24:12]  but they changed my perspective on things because i was you saw that i was using web components at this time you saw my my examples uh you know a little while ago when
[01:24:21]  i was using web components and and essentially i i just like components aren't free they don't always scale in fact virtual dom libraries are incredible at scaling components where most other libraries
[01:24:36]  kind of aren't great and i was trying to say like even with being pre-compiled sol and svelte were completely different because svelte still relied on
[01:24:44]  components you know the reactive system still feeds into a component system the same is true with view and i was basically introduced this idea here conversely solids components are ephemeral in
[01:24:55]  this they disappear as soon as they are run the the whole disappearing component things so i i made a claim back in 2019 i said and this this is this is going to
[01:25:07]  be more relevant moving forward but basically that you know rich harris says frameworks aren't there to organize their code but to organize your mind you know like the whole disappearing framework thing
[01:25:16]  and i i basically feel the same way about components and i went as far as saying i'm going to make a bold claim for the non-virtual dom crowd i
[01:25:23]  think components should vanish the same way as frameworks if the new world is compilers we can do better we can optimize along bundled chunk lines instead of es modules if
[01:25:30]  components are throw away think about how much overhead we produce by inlining them the right scenarios if components aren't necessary mechanism for change like virtual dom libraries what is to stop a
[01:25:38]  two level two implementation from being compiled into the level zero equivalent i'm pretty sure this is why marco team hired me i wrote that and they're like okay this is what
[01:25:48]  we want to do um and i said this is a challenge statement coming from someone who believes in web components i'm ensure web components performance will continue to improve and they're attractive
[01:25:58]  as a common interface a bit like microservices but will they ever be more than an export format dedicated libraries will always have a leg up because they have no reason to take
[01:26:10]  on that overhead How are you guys doing in chat? So, yeah, actually, let me, two seconds, I'm just going to grab my charger, my computer
[01:26:40] , I forgot to plug it in, I was in a rush to get started here, so give me two seconds, you can check out this awesome SolidJS shirt
[01:26:51]  while I'm doing this. So, we've been focusing a lot on the past, right, which is good, because we're, you know, yes, V
[01:27:09] ue didn't have to go the way it did, Vue chose, Vue one was kind of like Solid, Vue chose to go VDOM, they chose
[01:27:14]  to make their system around components, you know. But yeah, this is fundamental, you know, to things. And this will come up more later, but I'm
[01:27:31]  hoping, I'm hoping this kind of thing. So, the funny thing is, yes, Solid was killing it at benchmarks, Solid was, I was running tons of
[01:27:44]  articles, I was making really good observations, I was doing a ton of benchmarks, this period, I actually wrote a ton of articles about web performance, fastest way to render
[01:27:51]  the DOM, all this stuff. So, I started, like, getting out there, right, I had a pretty good understanding of all the fastest techniques, right.
[01:27:59]  Svelte 3 came out sometime during this time period as well. So, yeah, a lot, you know, you know, it's kind of interesting because S
[01:28:06] velte came out November 2016, that's when Rich's first commit was, and it's funny, Solid started, I don't want to say August 2016, it's
[01:28:14]  like, they're almost the same age, just Svelte kind of got to V3 much quicker, I was very slow and meticulous to make sure that the approach
[01:28:22]  I had, like, I liked it, it was, it was a hard journey. But eventually, I'm here by myself shouting into the wind, so to speak
[01:28:31] , like, who cares. And and essentially, yeah, I mean, I joined Twitter. And Twitter was brutal, when I first joined. And some, some of
[01:28:55]  my first interactions were like this, where someone's like, Ryan says that solid's faster than Svelte. What do you say about that, Rich Harris? He's
[01:29:03]  like, I don't know. He's like, he's like, these are some things that we haven't looked at yet, we will get to them eventually. And
[01:29:12]  they're on the show on the list, we opened some issues on the GitHub. So that's great. I'm like, I'm like, look, honestly, I
[01:29:18] 'm just been focusing on performance for four years and react API parody. I only signed up for Twitter yesterday. Yeah, that's pretty much sums up the trade offs for
[01:29:26]  me. My whole joke here is like, I was so busy doing stuff, I didn't join Twitter. Essentially, that was the trade off. I saw it had no
[01:29:35]  community Svelte had like, grown huge, by this point. And even though they're created about the same time. But, you know, here I am. Right
[01:29:46] ? So, yeah, it was good, because this started a good relationship with people like Rich. Rich was really helpful early on for me. We had some disagreements
[01:29:57] . For example, like what JSX is. We still don't disagree to this day. He's basically, he's like, solid using a JSX like DSO
[01:30:08] , not JSX. And I'm like, no, that's what Hyperscript is. What do you call JSX is Hyperscript, basement composing
[01:30:16] ? So, but not all my interactions were this pleasant when I, when I got into this, because I realized that I had no community. I like, this is great
[01:30:24] . And I was fine with that, because I wasn't trying to win people over. I originally, I was just building a framework, doing good at benchmarks, react releases
[01:30:31]  hooks. And I'm suddenly like, I basically joined, you know, I basically did some more writing and did some more stuff and got solid in a really nice place after
[01:30:39]  that. But then, you know, I was like, okay, well, maybe, maybe I should give this a go. Maybe people will be interested in it.
[01:30:45]  And, you know, it was challenging at first, like, people didn't believe me. If you're claiming to be the first person to actually succeed at compiling
[01:30:57]  arbitrary JSX into low-level DOM manipulation, then that's really cool. But that's the question before I, but I'm like, JSX is compiled. True
[01:31:05]  ADM, like Dom Ganaway got a handful of times, people tapped Dom from Inferno on the shoulder because he was working on compiler for React at the time
[01:31:14] . And they're like, Ryan has claimed to have done ahead of time, compiled JSX that felt like DOM manipulation. I assume it only supports a subset of JS
[01:31:21] X. Given the massive resources, Facebook tried to put me on Prefax, but I've been surprised before. People, people just were not looking for this. They
[01:31:32] 're not expecting this. I, I, I, I had some people come on or tell me like, even like I was, I crafted thread for SWIX at one
[01:31:39]  point that he was like trying to explain the benefits of template DSLs over JSX. Right. I think I saw someone in chat mentioned something a while back.
[01:31:49]  Yeah. Yeah. And I mean, it's completely garbage, right? JSX is just a templating language. So any, any kind of like assumptions here is just
[01:32:01]  completely unfounded. And you know, it's template magic, JSX magic. No, they're all just templating languages. I always, I mean, JS
[01:32:11] X is that specification. Let's look at it up. JSX is an XML like syntax extension to ECMAScript without any defined semantics. I mean, that
[01:32:26] 's the first sentence. I mean, JSX is so powerful for other reasons. I didn't even realize how powerful. I chose JSX because it made it easier to
[01:32:39]  not have to deal with all these parsers and stuff like I was showing earlier, but JSX was, is just like, now that I'm there, I'm
[01:32:46]  like, yeah, there's places I wish it was better, but it is so much more fluid than dealing with most templating things. And it's still statically analy
[01:32:54] zable, which is huge. But yeah, I mean, we can, Adam's great now. And honestly, because of these kinds of interactions with, with these
[01:33:05]  people, uh, you know, like rich and, you know, and Adam and, and whatnot, I actually ended up meeting really great people. Dom's been a great
[01:33:17]  supporter. Rich has been a great supporter. When the fire ship video blew up and I was like in Vancouver, like with the family trying to do a vacation, which
[01:33:25]  was actually explaining to people on Twitter, how solids reactivity worked. I mean, class act that guy. Um, so yeah, I mean it, but yeah, there
[01:33:38]  was a lot of friction is, is a, is a light way of putting it. People, you know, saying really unfounded stuff about like, you know,
[01:33:45]  Oh, JSX is over here. Templates are over here. And it just, it didn't make any sense to me. Right. And like, yeah, I
[01:33:52]  mean, that's why I went, I sometimes get pulled into those syntax conversations because like, I can always find an example of something that is ugly in a templating language
[01:34:01]  or right. There's always exceptions. It's always different patterns they enable. It's a silly thing. I just people, some people go, Oh, these can be
[01:34:11]  compiled more performantly and all this stuff. Anytime anyone makes any of those, I just, I have to play devil's advocate because they generally don't know what they
[01:34:19] 're talking about. But moving on. Um, and yeah, is this, is it like stuff just kept them going on? Obviously JS framework benchmark didn't stay like this
[01:34:34] . Right. I mean, like it's funny cause stuff that's going to evident float. I'm trying to remember, was 99 a good one? Who knows?
[01:34:46]  Solid is still, what's this? 106 over vanilla solid still in the same zone. It was back then, you know, other things have moved or changed over time
[01:34:57] . Like, uh, um, preact is actually in the exact same relative place. View has gone faster over the time. Um, where's Svelte?
[01:35:08]  Svelte should be in here somewhere. Why can't I see Svelte? Svelte has gone a little, yeah, Svelte's here too.
[01:35:15]  Yeah. Svelte's gone faster. You know, now I could argue nowadays you're right. The performance difference is that maybe that 15, 20% on these giant
[01:35:24]  benchmarks. So it doesn't matter. It wasn't always that way. And, but as I said, it's cool to see that because solid hasn't really done
[01:35:31]  anything for performance in five years and everyone else has just kind of been catching up. So, um, you know, it, it makes sense, right? You, it
[01:35:42] 's hard to get much faster. There's a handful of libraries and techniques that are basically negligible performance gain difference. And it takes a while to get the DX good for
[01:35:52]  those. Right. So yeah, I mean, this, this is all great, but finally, like I was having a hard time at it. I felt by myself
[01:36:08]  on Twitter. I felt kind of alone a bit because I was writing these articles. People weren't getting it. People were suspect of what I was doing. Um, and
[01:36:19]  I actually, but community kind of was starting to kind of form here. Um, and actually I, I've pulled this up here because, um, this is actually
[01:36:27]  how solid ended up with his first, uh, or second core team member. We, I put a lookout for logos because I, I, I used a logo generator to
[01:36:35]  come with solid logo and it was like terrible. And that's not it, but people actually came in and tried to come up with new logos for it. And, uh
[01:36:45] , David ended up joining us through this because he, he, I actually still like this snake. He was playing on the snake thing, but, uh, yeah,
[01:36:55]  solid pizza box. Oh, right. This is, we kind of, we were on Gitter by this point. Oh, solid ducks. Yeah. Um, but
[01:37:14]  yeah, I mean, this, this, this was basically a start, a starting point for us, um, on community. Um, I'd been doing this all by
[01:37:27]  myself and I was, I finally decided to ask for help. I was like, I, I'm not a designer, please, please help me. And, um
[01:37:35] , David joined on as a community manager. We, we moved to discord. Um, and we started figuring out ways to actually engage the community, which is, which,
[01:37:45]  which Canadian keys, which, which is huge. Right. Um, so yeah, this is November 2019, but yeah, I'd say January, 2020, this kind of
[01:37:54]  started up and we start getting really important libraries, um, in the ecosystem, right? Like I think so. So April, we got solid router. I don't
[01:38:05]  know if anyone's seen the original one. This one eventually got merged into, uh, into, uh, solid app router, which I wrote, but the, the,
[01:38:14]  the original solid router, which is basically like react router for solid came around and, you know, we start building better examples, um, real world demo, all this kind
[01:38:25]  of stuff. Um, and yeah, we're, we're, we're getting, we're quickly catching up to the present, um, here. So, you
[01:38:32]  know, we got our first hacker. Oh, no, that's not what I want. Um, where is it? We got our first, uh, hacker news,
[01:38:40]  like front page. It's, it's, it's kind of funny here. People, people are so, some people are so nice. Like I see the author,
[01:38:47]  lots of typical negative comments being thrown at him, ignore them, keep up the good work. It wasn't, it wasn't the best debut. Um, you know
[01:38:55] , a lot of people were like, you can see whenever the faded out, you know, like there, there, there's like, there's, it wasn't actually
[01:39:03]  as bad in hindsight, but I remember there's people, there's like people like, why even write a library like this? You should just give up. Uh, you
[01:39:10]  know, JS devs like to reinvent the wheel. Um, there's a big threat here. If your library framework goal is to make it life slightly better, just
[01:39:21]  don't do it. Like give up. Oh man. Yeah. I, I mean, some got deleted. You have higher chances of starting a unicorn company than creating
[01:39:43]  a JS library that is widely adopted. Yeah. Thank you. Um, I mean, Reddit was like this too. I mean, it was, it was tricky to
[01:39:59]  navigate at the beginning. Cause like really no one at that point wanted a new JavaScript library, but we kept on going. Right. Solid playground was first created in September,
[01:40:08]  2020. Um, solid app router, um, that we use today. Um, yeah. When did I do first commit? Yeah. October 25th. Yeah.
[01:40:18]  So this nested routing, uh, paralyzed data, fetching loaders, all this stuff kind of built in back in, uh, in October, 2020, you know
[01:40:29] , um, you know, and we eventually merged it with solid router to actually become like our modern solid app router, um, which has both paradigms, but,
[01:40:40]  you know, things started kind of shaping up, um, uh, to this point, solid was only client side. So, um, we added, uh, we
[01:40:49]  had SSR. Um, and I, I, I, most of 2020 was me working on SSR. Yeah. I mean, you're right. Yes. Um
[01:40:59] , Alex joined on around the time he did, he did the, he did the, um, original playground. He did the VEAT plugin, which is going to
[01:41:07]  come up really, really, um, important. And, you know, Ryan ended up joining on with the router and the core team started forming piece by piece as the
[01:41:17]  library and the ecosystem filled out. If you want to see a good, I suggest anyone who wants to see about the whole react, forget thing, watch my talk at JS
[01:41:34]  nation coming up, uh, in, in a, in a bit. Um, I think it's June 20th. I'm talking a JS nation, um,
[01:41:43]  in Amsterdam and my talk is basically a huge part of it is about, um, the example from react forget. So, um, yeah, anyway. Yeah. So,
[01:41:54]  okay. Um, yeah, I mean, synchronous data, this is probably when I added the data functions that we use today. It doesn't really matter. Like like
[01:42:05]  solid solid from 2019 was kind of in the same, same form. We just kept on adding, growing the ecosystem, um, worked on server rendering. Um, and obviously
[01:42:18]  like, where were we at this point? Yeah. Same, same, same story. Right. This is what I talked about select row, how most frameworks had a
[01:42:25]  really hard time with it. Um, but I wanted to solve it with solid. Um, you know, server rendering was a different thing. I came into this boat
[01:42:39]  and I was like, Marco, holy crap, everyone else kind of, eh, you know, like Inferno actually has a bug where they're not escaping stuff.
[01:42:52]  Inferno should be more like around 10,000 in this, but it's Inferno was still pretty impressive. But generally speaking, I was just like,
[01:43:00]  what's going on here. And I tried to take solid JavaScript on the server with JS dom and even like link dom and all that, you know, stuff like Andrea's
[01:43:08]  work here. I was looking into his techniques, like web reflection and I couldn't get even as fast as like pre-act or react on server rendering. It was just
[01:43:16]  terrible. Um, it was when you come close. I was like 10 times slower. Yeah. I was like 10 times slower than react on server rendering. So I actually
[01:43:23]  had to come up with a whole different approach. Um, and that approach involved concatenating strings and removing reactivity. Um, which, which is kind of crazy
[01:43:35]  on, but that's what Marco was doing. And once I did that, it became very clear to me that I only needed to focus on the synchronous part of, of
[01:43:44]  rendering, essentially like on just the string and catting because reactivity wasn't everywhere. I, I needed special primitives to handle it and those special primitives were
[01:43:53]  resources, but luckily enough, I'd already implemented suspense. I just skipped that. I influenced suspense back in 2019. Um, yeah, sorry. I jumped over this.
[01:44:03]  Yeah. You see how I showed that, that first commit that I actually made a changelog for May 18th, 2019 add suspense control flow. Um, so
[01:44:16] , um, yeah, essentially, yeah, essentially we, we had the primitives we needed and this actually allowed me to add streaming right out the gate with, with,
[01:44:27]  with, with, um, with, sorry, where is it? With solid server side rendering. So we had streaming and suspense on the server, um, uh,
[01:44:36]  I guess a couple of years ago and essentially because I knew that I could just focus on the string stuff. I just, I worked and I worked and in the end solid
[01:44:47]  was about as fast as Inferno in this benchmark. And I thought that I, I tapped out essentially. And I was like, I'm pretty happy with that.
[01:44:58]  And then something funny happened and this, this forever influenced, influenced my, uh, my perspective and might even led to me joining Netlify and not like working for
[01:45:14]  a company that would own like, kind of like run solid. Like there, there's some options where I could actually like work at solid as a company and do it like
[01:45:20]  work for a company that want to use solid kind of the way like Marco used at eBay and I went for Netlify for one reason. And that was my belief
[01:45:29]  in the open source. And this is what happened. I, I, I was about to, I was about to kind of pat myself on the shoulder and been like,
[01:45:36]  okay, you know, not bad. And someone realized that the escape algorithm we're all using was slow. It was slower and he, he changed it and suddenly solid
[01:45:53]  just jumped ahead of, of everything on server rendering. Right. We're tweaking it and optimizing it. And this is really like a community effort here and, and
[01:46:05]  the results are astounding kind of where we sit today where like react SSR solid SSR. Um, and it just came down to careful work months and months of performance
[01:46:26]  profiling. And, and then, um, you know, working and relying on the community essentially. So I don't know, it was, uh, it was
[01:46:38] , it was a pretty big deal. Um, there and that's the, we, we, we don't talk about SSR as much. I mean, I talk
[01:46:45]  about it, but it doesn't really come up at what everyone like looks at the JS framework benchmark, but, um, the isomorphic, uh, UI benchmark,
[01:46:53]  um, you know, has some good performance stuff and essentially this kind of completed our story. Um, right. Soon after started working on solid start and solid was like
[01:47:04]  the first, uh, I believe the first framework to get streaming edge functions on every major platform, right? Cloudflare we did first back in March 9th, 2021
[01:47:14]  streaming suspense example. We did Vercel literally the day after they released it full solid startup working streaming on the edge and then same thing with Netlify. Um
[01:47:27] , basically having, having spent on the server concurrent parallelized fetching all this stuff like solid start isn't out yet. Um, and we're still working on it,
[01:47:38]  but essentially we've been refining, you know, spending that meticulous time working through details so it can get to where it gets. Um, I mean, that,
[01:47:47]  that isn't really the end of the story though, obviously, but we're getting very close to, to current day. Um, I had, I mean, I
[01:47:57]  told you I was having a hard time with Twitter and I was having a hard time, um, with, um, you know, hacker news and reddits people being
[01:48:07]  just really harsh. And, um, I, you know, I was having a hard time with JavaScript influencers. I wasn't too pushy. Like some, some
[01:48:15]  people would come on and be like, what do you think about solo? What do you think about solo? I like never did that. I would always try and be like
[01:48:20] , oh, someone says something. And then I'd be like, well, this is actually possible too. You know, try and like take an education angle and not mention
[01:48:26]  solid. And yeah, I mean, if there's a second article of mine, you should read, this is probably, this is one of my favorites. Um,
[01:48:36]  I had, I had, you know, run in with a JavaScript influencer and where they said that I was over self-promoting and I was like, what? Um
[01:48:44] , and I basically just went through the whole conflict that I'm kind of going through on stream in a different form and, and kind of talking about, you know,
[01:48:55]  the challenges of, of trying to walk into a place, a room where you're basically completely unwelcome and try and be like, look, there's a different way to
[01:49:07]  do things. You know, the, the framework authors are incredibly receptive to ideas and, you know, in terms of like, you know, thinking of ways they can
[01:49:17]  improve stuff, but the communities were very, very, very negative. You know, like I I'm, I'm even seeing some of this, some of this stuff in
[01:49:26]  chat a little bit right now, you know, where it's just like, like, do you think we don't know that inevitably when you start something new, you have
[01:49:35]  to create a community, you know, that it takes time to the ecosystem? Like, like this, this, this, this is all part of it. So it
[01:49:47] 's like, there's this, it's a constant chicken and the egg problem. And you constantly have this tension. And I was talking a bit about this when I was
[01:49:56]  showing the Excalibur here, where there is this, there is, there is actually some animosity sometimes, you know, not always from, not from the creators
[01:50:06]  or anything, but from the communities. It gets, it's challenging when they're like, I just learned and invested in this. I don't want to know about
[01:50:12]  this. Well, I don't care about 15% performance, you know, like it doesn't, it's not one thing, it's just everything. And,
[01:50:24]  you know, we were getting, basically, it didn't matter, right? DX could be good performance could be good, all those things didn't matter. We weren't
[01:50:36]  really hitting stride yet. I was so focused on the technology and making the best best server rendering, the best, you know, uh, you know, performance,
[01:50:48]  the, you know, best patterns, streaming, you know, and I couldn't really, uh, I couldn't, I couldn't really focus, you know, completing
[01:50:57]  community. We brought people on, we're kind of building it out, but it just was, it wasn't quite quite jiving. And then we released 1.
[01:51:11] 0 and for some reason that was the signal people needed, right? That the 1.0 release went out and yeah, I mean, I don't know. I
[01:51:25]  probably can't even find that. Where is it? Uh, chickens components, real cost, real cause Marco introduced tag, JavaScript native. Yeah. And it just like,
[01:51:39]  it was just a completely different ballpark. I just, I didn't do anything different than I'd ever done, but I, I, it was, it was
[01:51:49]  like, it was like, I guess it was like a signal to people that's maybe solid is, is a, is a thing. Um, and that, that,
[01:51:58]  I mean, uh, where, what did I want to show? Do I, do I have the article? Uh, maybe I should pull this up from that too.
[01:52:08]  Um, you know, it doesn't matter. That's, that's the past that, that this, this, this sort of catches up today, right? Like
[01:52:24] , like, a lot of you didn't know that whole story. So I hope you appreciated that, but let's, let's, let's, let's jump forward
[01:52:35]  a bit for a second and let's, let's let's talk. I'm gonna, I'm gonna go to the present right now because there's been so much
[01:52:42]  the last year and I, I, I, all I have, I could literally just go to Twitter for like two seconds and show you what I'm talking about. Right
[01:52:50] . Um, let's just go to, let's go to the solid profile on Twitter. I'm going to kind of sort of cut, cut in here, but yeah
[01:52:58] , we're, we're, I didn't cover as much stuff as I wanted to on the last couple streams, but we're kind of talking this week in JavaScript
[01:53:04]  for a second. Um, yeah, I mean, what do we got here? Yeah. I'm just going to kind of scroll back because this is just in the last
[01:53:13]  couple of weeks. Okay. So Fireship releases this video, right? And then suddenly like, like we start seeing, you know, the effects of, of
[01:53:32]  the community and stuff that's been going out here, even affecting people like Tanner Linsley for basically creating something that looks like solid inside react. Um, the response
[01:53:46] , our man, Adam, you know, this is ridiculous. Good. I'm angry. I didn't look at solid sooner. Right. Um, you know, it
[01:53:58] 's just a full reversal of where we were at the beginning. You, you saw me basically try and convince people that JSX was compilable and literally sharing solid and
[01:54:07]  being like, do you believe this is real? This is probably vaporware to, to, to, to this. Right. And no, no, no discredit
[01:54:15]  to Adam. Adam's actually one of the more reasonable people. Um, Ken Wheeler, like basically somehow nothing had changed in very little changed in two years, but
[01:54:31]  the whole perspective starts shifting. You know, I've been working on features and we've been pushing stuff forward and, but you know, here we go. Bun gets solid
[01:54:42]  JS JSX transform. Like, cause people talk about ecosystem, right? Building solid Astro dot build. How about F sharp Fable compiler with solid? Stack bl
[01:54:53] itz template. Yeah, this is a big one. Solid JS is doing docs, right? Props to Dan and the docs team, right? This Rachel big,
[01:55:05]  uh, power behind reacts, new docs, code mods, native script, financial backers, like, like labels, component libraries, fast five beat. I mean, tan
[01:55:27]  stack. It's all gets mentioned as a release adapter. Like things are solid meetup in New York city. Right. Yeah. Yeah. I mean, honestly
[01:55:52] , this, this, this stuff has just been, has just been, uh, has just been going, you know, like crazy. Um, and, you know
[01:56:15] , that that's kind of where we are today. People are starting to notice it. I've gone over the stream. Everyone talks about ecosystem, but the thing is,
[01:56:24]  and I think it's worth kind of pointing out is it's more than just internally within ourselves, right? If anyone saw this thing from view, right? They,
[01:56:39]  I mean, this should look kind of familiar to people who've seen solids compiled output. View is, is looking at, at adding, um, uh, a solid like
[01:56:49]  compiler, right? And if you've been following the stream, but it doesn't work with their V DOM. So essentially if you want, you can have a view app
[01:56:58]  and you put some, like some vapor they're called vapor components in it, but you, if you make a vapor app, you can't put V DOM components.
[01:57:07]  It's just like hustle and react don't have a compact. So that means if you want to use vapor, every component in view needs to be rewritten in vapor.
[01:57:15]  And this is not a syntax thing. This is actually an execution difference. This is actually, you know, it's not that hard. We've seen porting react to
[01:57:23]  solid isn't that hard, but it's the same effort to, to port view to view or view to vapor rather. So like starting from ground, ground zero,
[01:57:31]  again, to adopt this paradigm. Um, which is, is interesting. Right. Um, this, this, this is kind of where we are at today, you know
[01:57:45] , you know, looking at this solid over here, actually having impact on people over, you know, and frameworks over here. Svelte's looking also at solids
[01:57:55] , compiled output and cloning nodes. There's an open issue. I've, I've been guiding them that way. Um, you know, it's the, there
[01:58:03] , there, there is, there is some interesting stuff happening. And I think there's implications that aren't really understood. Right. Because like, if you, if you
[01:58:12] , if you view it in a certain way, you could have gone the way of the composition API back in view one, they didn't need to wait for react hooks
[01:58:19]  to release it. You could have gone this direction seven years ago and they didn't either. So like, I think it's, I think it's very interesting to see
[01:58:31]  how this shapes off. I think, I think it's like a different, it's a different place in a different kind of thinking to kind of be like the big player
[01:58:40]  and seeing what sticks versus being someone with something to prove. But what I love about this obviously is this is a clear nod. So obviously, um, inside the community
[01:58:53] , outside the community, we're doing, we're doing a lot of the right things. And, but the, the, the, the reason that I, I might
[01:59:03]  want to link linger on this for a moment when talking about the present is that after I made this comment about it, basically like, would they give up the view ecosystem
[01:59:14]  for this? Like if like, for me, people saw this as like a slight against view, but it's not, it's, it's more of like, if
[01:59:21]  people in the view community would be willing to give up the view ecosystem to use this vapor thing, that's, I feel like that's a good sign for solid. If
[01:59:31]  someone's willing to do start from ground up and do that again, they'll probably be willing to try a framework that does this, you know, and if I may
[01:59:40]  say quite well, you know, I'm not talking about people pulling people in from view, view already has a solution here. I just mean in general, this is,
[01:59:49]  this is interesting and react server components kind of same idea in the sense that the server components and the client components can't really share the same libraries or they need to be written
[01:59:59] . We're actually in an ecosystem reset. So when people come to me and they're like, and they're like, oh, solid doesn't have an ecosystem.
[02:00:05]  I'm like, does anyone. Right. That's more than the library side to be fair. Ecosystems more than libraries. Ecosystem is also jobs and
[02:00:14]  you know, all the other stuff. But I think it's actually kind of interesting that we're going through a reset right now and people haven't really clicked into it yet
[02:00:25] . And the reason for that is it's not just a syntax change, right? If you've been following what I've been showing through throughout the stream, we're
[02:00:35]  actually, see, this is what I was going to say. The benefits are farther reaching than performing components. It's architectural. Like the benefit was in that article that I
[02:00:43] , that I wrote a couple of years ago, right? The real cost of UI components. When I, when I made that whole claim, it's saying that components
[02:00:50]  as a unit of change of being the piece are the problem. So view for example, here can remove those components, but then you're just going to stick them inside an
[02:01:02]  app that has components. Like this, the way this works, the reason the scales is when you embrace it completely. And it's not about, you know, being
[02:01:13]  able to just use some vapor components. It's not about components. The whole idea is to get away from components, which is why I think people are missing the point here
[02:01:21] . This is, this is much more significant or interesting than it might appear at first. Yeah. Thank you. I appreciate you saying that. It wants to be an
[02:01:43]  almost so close. Yeah. Yeah. I mean, uh, I mean, yeah, I mean, and maybe, maybe that's good, but then like, it
[02:01:55] 's hard to focus. Maybe views ecosystem community is big enough to support being in all of them. Um, and a lot of people were supporting that. They're like,
[02:02:05]  yeah, it's the best of both worlds. You know, sometimes I think maybe people feel like this. Yay. One more mode for view that I do not understand.
[02:02:12]  Yeah. But I'm not here to be critical of you. I just want to say if, if we, if we're talking about the implications, this is,
[02:02:22]  this is the stuff, the reason, like, I think of this very holistically, I think about stuff like this, this, this drawing, I think about, you
[02:02:30]  know, how this plays out. Like we had that conversation where Dan and the React team were like, you know, very happy with what they're doing. They're like
[02:02:36] , if we thought Solid was doing, you know, what we needed to do, we, we, we do that. You know, it's understanding this React might
[02:02:45]  be moving a little bit in here, but React is very happy where they are. The people who aren't happy right now are, are, are some of the people further
[02:02:57]  in this quadrant. Um, you know, I'm really interested to see what, what Angular does. I gave a talk to them, uh, last, last month.
[02:03:05]  I went into, into, uh, you know, I did a talk for the Angular team to show them Solid.js. Um, because they, they are really
[02:03:12]  re-examining the foundations here, you know. Um, I, I, I think Evan and you are very savvy. He sees what's going on and he
[02:03:20] 's, he's, he's like, yeah, you know, we're kind of on the opposite side of things, you know, maybe we have to look at this
[02:03:25] , you know. So, like, like it's tricky, you know, I had the benefit of being kind of radio silent in the background, just doing my thing
[02:03:39] . Right. Because think about it, like it stuff is changing so fast. Like even in view, you're on view two and you're kind of like, oh,
[02:03:48]  yay. 2020 comes on view three. Okay. Composition, huge improvement, huge, huge, huge improvement. I mean, that's what I was waiting for,
[02:03:56]  for view for since the first time I saw view, I'm like, why aren't you doing this? I'm exaggerating a little bit, obviously, because you saw
[02:04:02]  how big as a web component, but let's say from 2018 onwards, you know, I mean, I was using web components, but if you read my earlier articles,
[02:04:10]  um, I, I liked the portability of reactivity, essentially. I was, I was like, okay, I think webcam was the best way to do it
[02:04:16]  today, but I wrote at length about how important it is to have the primitives, even back in my earlier stuff. Now, come 2021, now we have set up
[02:04:27]  ref sugar, right? A new syntax that's very svelte inspired. 2022, we have vapor components, which is a new mode, um, that is a very
[02:04:38] , um, solid inspired, right? So like, and then they released an MPA mode, I think in the summer, which was very Astro inspired and last
[02:04:50] , yeah, was it last summer? Yeah. So like, I, I, I can understand it's a challenge to, to, to, to thread everything together.
[02:04:59]  So, I mean, big props there for them figuring out how to do literally everything for everyone. I, that's, that's more than I can handle. Um,
[02:05:07]  but yeah, it's, it's interesting. But, um, this, this, this sort of brings us up to today today, because I, I did the
[02:05:21]  stream partially, I, I was finally pushed because I saw this and I was just like, people aren't going to get it. They're going to see this and be
[02:05:28]  like, oh, now view has it, I guess doesn't matter, you know, solid's kind of novel, but now view has it. I, I think the
[02:05:36]  people who say that they're completely missing the point. Right. Because it isn't about having some performance components or something. It's about a shift. And let's
[02:05:50] , let's, let's just, let's just get into it. Right. Let's go. You guys ready for the future? I need a little water before
[02:06:04]  I get to the future. Yeah. Yeah. Reactive script, right? No, not quite. That's goes beyond that. Okay. Now I have to
[02:06:36]  give a disclaimer. Thank you. I think of a disclaimer here a little bit, because when I talk about the future, I'm not talking about the far future.
[02:06:53]  I'm not making crystal ball predictions here too much. I'm talking about looking at what's happening now, look at the trends and looking at what the things that I personally
[02:07:03]  think are worth investing in and what I want to do and where, where things are going, conversations with communities, other framework authors, and pulling in that kind of insight.
[02:07:16]  And essentially, the first thing you might ask is five, seven years, how many years has it been? I don't know. I'm too tired to count.
[02:07:35]  Years later, am I still sold on the vision the same way the React guys are sold on their vision? Actually, you know what? Before we go there, just give
[02:07:43]  me a second. Let's see if I can find it. Jordan walk. Facts. Oh, man. I wish I had. Let me see if I can
[02:07:56]  find this. Not everyone knows Facts.js. Can I show you something? Because I like to tie the future to the past, always. And Solid, you
[02:08:15]  know, has strong ties to Knockout. I showed how Remix, basically Ryan Florence is describing in 2015 in his Hype.js talk. I've shown this before
[02:08:26] . It was all there. And, you know, but people, people, you know, people wonder about React and React's vision in the future. And I just
[02:08:37]  want to quickly show this. This is an old experimental project. React is much better in every way. And you should use that instead. I love the way he talks.
[02:08:44]  It's the way I talk too. When I talk about something, I'm like, don't ever use this. I want to show it to you, but never,
[02:08:48]  never, never use it. Because you almost have to like say that and people will still use it and then ask you like, why it doesn't work properly. Create
[02:08:56]  mutable. Okay. This, look at this framework. Have any of you guys seen Facts.js? Tell me in the chat if you've seen Facts
[02:09:11] .js before. I'm giving delay for the chat to catch up. I guess that's no one. Okay. Seamless client server rendering. Write once, render
[02:09:28]  anywhere, client or server. Reactive. Views are automatically updated on state changes. No bindings necessary. Okay. So they mean reactive, not like in the
[02:09:36]  react sense, not in like the way we talk about it. Performer. Fast running using string concatenation and small code size. But this is not React. No
[02:09:43]  VDOM. Structural. High level components. Functionally defined. Declare to views. Hmm. F componentize. Return div. And we have
[02:09:57]  some data here, I guess. And then some divs and class set. Basically, this is pre JSX. I don't even know if Jordan was working at
[02:10:11]  Facebook at the time when he did this. But essentially, this is a project that did all its diffing with strings. Kind of like reacted a bit of this in the
[02:10:22]  early days with reconciliation. And you could render it on the server, you could render it on the client, and it would just be able to diff it. So essentially
[02:10:30] , you could render something on the server and then have the client diff it. If that sounds like something familiar, you might've heard, you know, something like server components
[02:10:41] . Like there's elements of, you know, what is this? 11 years ago. There's elements of what React is working on today that stem from this project that
[02:10:56]  happened, yeah, like 11 years ago. Sorry, the chat just kind of went off. But yeah, so the guy who created React created this before React, if
[02:11:18]  I wasn't clear about this, essentially. Like this is kind of the roots of it. Like, and obviously, Sebastian has had a huge vision, you know, since
[02:11:30]  Jordan moved on from the React team around 2015, I think Seth took over and now he's at Vercel working on Next. But essentially, yeah, look at
[02:11:40]  this. It's Jamie, Kyle, and Jordan Walk here on the two contributors here. Though I think this is mostly Jordan's work. I just wanted to just put this
[02:11:49]  out there that it's never completely new ideas. Everything's existed before. You know, we had nested routing with data fetching back in Ember in 2012.
[02:12:01]  Right? There's a great discussion, quote, argument about nested routing a week or so back. And it was really funny because everyone's like, oh, I did
[02:12:11]  it first. No, Svelte did it first. Or Sapper did it first. No, Vue did it first. And so it's just like, no
[02:12:17] . People have been doing nested routing with data fetching for like 10 years. So like, you know, I think someone mentioned that Ruby had this pattern, which
[02:12:30]  I believe because there's a strong Ruby influence in the Ember work, right? Yahuda cats, you know, so on. So anyways, let's, let's
[02:12:38] , let's move more towards the future. I just wanted. Yeah, yeah, yeah, yeah, yeah. Yeah. I mean, sure. But I mean,
[02:12:52]  Svelte wasn't the first one to use a compiled JavaScript language with reactive syntax. It wasn't as clean as Svelte, but like Imba did
[02:13:02] . I don't think Marco's was like class components. So I don't count it. But Imba and Marco both were doing the whole compiler thing years before
[02:13:09]  Svelte was, right? So like, there's always something before, you know, Marco had streaming, which they got from PHP, from Facebook's big pipe,
[02:13:19]  but they were the first JavaScript framework to have the streaming that now has just come out in React, you know, like there's a whole, everything you go back back
[02:13:25]  to the past to find the future. So I preface it with this because I, our preface, whatever, because I just, I just want, understand kind of
[02:13:42]  where, you know, where, where this thinking is coming from. And okay. Big picture. Let me, let me spell it out. This progression that we've been
[02:13:53]  seeing, this whole thing that I've been talking about, the, the components, the reducing it's, it's already here. Solid might've shone the light
[02:14:03]  on it. And the big frameworks are like just realizing what's going on, but others understood this years before. And the, the, the, the first, um,
[02:14:15]  output of that is actually the other project I was working on at work, um, Marco and Marco realized that getting ready components, solve hydration, like literally just make things as
[02:14:30]  fine-grained as possible. And look at the reactive language, kind of like take that idea of a bit of idea of a Svelte, but then kind of
[02:14:37]  take solid and take it all the way. Hey, you know, it's in many ways, Marco is the most advanced JavaScript framework, not even close, but you know
[02:14:47] , being the most technologically advanced doesn't make you the most popular. Even, even the ergonomics are really good if people would accept it, but that's another
[02:14:56]  story. Um, and, and another, and the thing is they're, they're very compiler heavy strategy, very similar to Svelte. Although, um, you
[02:15:09]  know, it goes, they, they solve the composition problem, which Svelte hasn't solved. And I've shown Marco on stream, right? Obviously Marco six
[02:15:17]  is incredible, but it's not just Marco quick, quick started with a V Dom, very similar to their previous work like, uh, Ionic, um, from
[02:15:30]  Adam and, uh, uh, to be fair. Angular isn't a V Dom, but it's still very top down, but piece by piece they've been acting,
[02:15:39]  adding reactive primitives. I don't know if people have been paying attention to quick, they should, but quick has been slowly by slowly adding reactive primitives, adding
[02:15:52]  things that look like effects and memos, a lot of the kind of base stuff that we have in solid. And I think that, I mean, right now they're
[02:16:09] , they're splitting is still very component centric. They're like, okay, generally speaking, you have your events, you have your state and you have your view
[02:16:16] , but they will split more fine-grained like Marco. They quick, we'll get to a point where it has the same efficiency as Marco. I'm pretty sure
[02:16:25] . Right. Um, as I mentioned, obviously I'm a bit biased, but like Marco six is basically doing everything right. Um, and it's because it's taking
[02:16:37]  this fine-grained component list thing that I've been doing with solid and applying the compiler. But here's, here's the challenge quick. When I saw quick
[02:16:45]  starting going down this path, it gave me hope because remember this graph. You can make a whole bunch of these different graphs. You can make, you can make any number
[02:16:56]  of these, right. Um, you know, and you choose your axes and a different axes. It's not quite like on here as clearly, although, you know
[02:17:05] , is that template versus JSX or basically how heavy do you rely on compilation? I don't view solid as a compiler compiler solution. Everyone goes, oh, so it
[02:17:14] 's like svelte. It's like react, but salt. No solid is like the shirt. The JSX gets transformed a little bit different than react, but for
[02:17:22]  the most part, solid is not on the compiler side. It is a runtime thing. It is like, it is like react, you know, um, you know
[02:17:29] , it's, it's, it's, it's like, it's like view, you know, it's not, it's not svelte. And
[02:17:40]  I like it. I've, I've, I've demoed this before, but I like that story. You know, I've shown the, if you, if
[02:17:48]  you haven't seen the introduction video on, on solid JS homepage, if you, if you haven't seen this one advanced intro in 10 minutes, you should, of course
[02:17:58]  you shouldn't check out this ad because that's annoying, but you should check this out if you get the chance, because like this comp, this composes, this
[02:18:10] , this shows what I like about all it. Sorry. I'm trying to get to the key part here, but we, we take stuff that's basically vanilla JS and
[02:18:19]  that's what you would have written by hand is what solid basically compiles to. It's not obfugated. It's not like a bunch of crazy compiler
[02:18:30]  magic, like react, forget it's literally like, Oh, I'm going to go write something by hand using reactive system. And that's what you get. It's
[02:18:38]  portable each piecewise. You can just like take these elements. You can just make a div over here. There's no component life cycle ties. There's no compiler loc
[02:18:47] ality constraints. Um, and I think that is incredibly powerful. What gets solid a lot of its DX, you know, you know, ability gives you those escape hatch
[02:19:01] es. It lets you feel like you can do anything. Quick is interesting. Quick this, I told you quick gave me hope because quick is a runtime reactive system. They
[02:19:15]  use a compiler more heavily than I use in solid, but they are, they are there. They are using a runtime reactive system. It's not as tuned as solids
[02:19:24]  is yet. You know, they haven't done all the performance stuff, but they are, you know, and they still have a V Dom. So it's kind of
[02:19:31]  more like view today. But the it's there. Well, yeah. Well, the funny thing is react forget is it's pretty crazy looking compilation, right? People
[02:19:48]  saw that video. I mean, I don't even need to show it. You, you, you know, but Svelte is actually looks a lot like the react
[02:19:56]  forget craziness. It's, it's not quite as crazy because they at least separate the update from the create functions, but it, it, it, it does
[02:20:04]  move away from just like what you would have. This is an interesting question. Doesn't reactivity have to always be runtime. Well, reactivity in like the reactive library
[02:20:16]  sense. Yes. But reactivity as a language sense is interesting. Svelte already basically claimed that they had reactivity from a pure compiled solution. We're keeping
[02:20:25]  that moniker with Marco because there's a clear language pattern here. There's the, there's the signals or the lettables or whatever you want. There's the deriv
[02:20:35] ations and there's the side effects. This, these language primitives define reactivity to a point that you could argue that it's a different type of reactivity. There
[02:20:44]  are some downsides. Compiler can't be as dynamic. You can't have conditional dependencies the way like a pure compiled thing can't have that kind of conditional granular
[02:20:56] ity that solid has, which gets solid the last few points on the benchmarks. Honestly, I, I haven't actually been able to take a compiled solution as hand optimized as
[02:21:07]  I can and have it matched solid on performance, but I've gotten it so close that no one would care. Yeah. I mean, that's the whole thing,
[02:21:18]  right? Isn't it awesome how you can scale that down to jquery, essentially, or scale up to something that's like complicated? Like, and this is where
[02:21:29]  the power is. And this is something I want to maintain. And when I saw quick, the reason I got hope is because they aren't, they are using compilation tricks
[02:21:36] , but the reactivity isn't compiled. And the more I looked at quick, even though like they kind of, as I mentioned, they're using a beat on
[02:21:45] , they're kind of hobbling some stuff together to kind of show what they have, like, it's still super early days. They're version point 0.0 18
[02:21:54]  or 20 or something now. They are showing a different way to use a reactive system. And if you know me, I love reactive systems, runtime reactive systems. And,
[02:22:04]  you know, if quick can do it, we can do it. I don't know if I like everything quick's doing. I don't know if I like relying on
[02:22:14]  compilers as much. But that's where the start of this exploration is. Because the truth of the matter is, too much JavaScript has been a problem. Right?
[02:22:25]  And maybe not for Svelte or solid, we're already kind of small. So maybe we have some more leeway and more room to play. Right? You saw
[02:22:33]  my react server components demo last last week. We're still starting at 70K, you know, with basically no interactivity. And to be fair, 70K is
[02:22:43]  about the roof you want for e-commerce. I know some people like 100K or something. There's still slow devices. There's still slow networks in the world.
[02:22:52]  That may change. But I think for really performant stuff, you need to do better. I think, though, that, you know, the fact that something like
[02:23:05]  hydrogen, you know, can come in at 70K and basically stay there, maybe, scales way better. It's the first time React has actually been able to compete
[02:23:16]  in this zone. You don't get that with Remix. You know, you don't get that with Next. So back to the future in solid, right? I
[02:23:27]  do pay attention to these libraries. I work on the Marco team. You know, I worked with the quick guys and building some of the first demos they had. Kind
[02:23:41]  of being the guinea pig, finding all the bugs. You know, and basically going back and forth in Misco, bouncing ideas and being like, he's like,
[02:23:52]  okay, does this do what you're looking for? And I'm like, almost. What about this? And he's like, okay, no, I can do better
[02:23:57] . I can do this. And those kind of conversations and kind of promotion have just been, that's the thing. It looks like I haven't been spending very much time
[02:24:04]  on solid the last few months. And in a sense, you'd be right. I've been streaming and looking at other frameworks and I've been making demos for other
[02:24:12]  frameworks. And it's because I, I want to research. I want to understand what the options were. And the thing that came very clear to me is I started seeing
[02:24:22]  the influence solid had on everything else. When people started talking about quick, and I was just like, the thing that, or even Marko, the thing that enables
[02:24:32]  it was the research that I did on with solid to, to a large degree, you know, sometimes solid, you know, kind of gets tagged on as being the end
[02:24:42]  of the generation two frameworks. And I like to think of it as the beginning of generation three, that essentially the shift and all this partial hydration, all this stuff really
[02:24:56]  comes down to understanding our departure from components. right. I mean, it's, it's not about the HTML, the HTML first framework is kind of interesting. I
[02:25:10]  mean, all SSR is a little bit like this, but, but I think, I think the key is the, there's some important things here to understand res
[02:25:22] umability. Hydration. I did a stream on this specifically has three aspects. It has resumability. It has partiality and progressiveness. And they can all
[02:25:35]  work in tandem to create maybe an optimal solution. And the challenge is not everyone needs partial hydration, or rather, they're not willing to take any kind of DX hit
[02:25:47]  for it. Because let's face it, they're not building an MPA, they're building an interactive app. So we have to get fluid between these things. And
[02:25:56]  for me, what that means is understanding what the primitives are, fundamentally. HTMX, you might be thinking of. So what does that mean for us all
[02:26:15]  in the future here? Let's see if I can pull up something. Let me see. I'm going to talk to a couple of points here. I wasn't sure
[02:26:32]  if I was going to share this on screen, because this is just some of my notes and stuff I've been talking about. The high level of this is, we
[02:26:43]  have to create a new type of reactive system. I want to talk about the future solid. Like, there is SolidStart, which I'm very happy with. We're
[02:26:52]  very, very close to nailing those data primitive things, you know, to give that really nice API. And there's going be a stream coming up all about Solid
[02:27:06] Start. Because I think it's probably one of the best ways to build modern websites by today's standards. And it's got, we've basically taken the patterns from Rem
[02:27:16] ix to a certain degree. And I got to give them full credit on that. They're, what do they call it? They're optimistic updates. They're ref
[02:27:27] etch thinking. Parts of it. It simplifies and streamlines. When you have everything on the server, you remove a lot of duplication of the code. Like
[02:27:41] , essentially, if the server knows you're going to need to redirect, you don't need the client to have a special encoded thing to know the redirect. That
[02:27:49]  might be happening in the background. But you don't -- it's way easier to write your logic once. And the only issues or concerns I had with using Remix's
[02:28:00]  patterns was, I just didn't feel like I had enough control in all cases. So I basically made a cross between Remix and React Query. And I think
[02:28:15]  you guys will be really excited to see what that looks like. Basically, taking our primitive approach to loaders and actions so that pages aren't restricted to only having one.
[02:28:31]  Use some light keying if necessary, although that's completely optional. And then being able to just get those instant progressive enhanceable forms and get those instant redirects and logic
[02:28:43]  in the single place in the server. But I'm not going to talk about that too much today. And when I get back from my road trip, we're going
[02:28:53]  to have a nice stream about SolidStar because it's incredible. What I want to talk about today is really bigger pictures, like Solid 2.0. And as I said
[02:29:05] , it's about -- we need to design a new type of reactivity system. And that's what I've been looking at here because I'm very familiar with the
[02:29:15]  performance. I've rewritten the reactive system Solid two or three times now. I have a good idea of how to make a super performant reactive system. You know,
[02:29:24]  I tuned it for problems you face in the DOM, you know, not just in the abstract. That's why Solid -- I actually used other libraries as a benchmark.
[02:29:34]  You saw earlier had Knockout in the JS framework benchmark and MobX and Vue. I take their reactive systems, use Solid's renderer, you know, to keep
[02:29:43]  myself honest. Because I want every part of Solid to be, you know, better, faster than the competition. And, you know, using -- you know, so I
[02:29:56]  know where the bottlenecks are and I understand how to write that. But what we need to do is expand what it is. And the first expense that I did for
[02:30:05]  the reactive system was when I had a concurrent rendering. I'm not going to demo that again on stream because I know how chuggy and like it is. You won
[02:30:11] 't see how butter smooth it is. But we made the ability to fork the reactive system and do concurrent rendering. Something people said was going to be impossible without a VD
[02:30:19] OM. And that's just the start. I can -- I know we can do better than that. So I've come up with alternative algorithms to the reactive system that
[02:30:33]  I've been testing. I just haven't landed on the final ones I want to do. So I just want you to understand, high level, what we're talking about
[02:30:42]  here is changing the structure. It's not going to affect the end user API that much. But actually changing the mechanisms underneath the hood is a big part of 2.
[02:30:51] 0. It'll cause some maybe slight behavior differences. Like we're talking about letting memos evaluate lazily. They don't have side effects, so that shouldn't affect
[02:31:01]  you at all, right? But this can reduce some overhead. We're talking about ways to streamline performance on computers so that they don't over-execute. But
[02:31:13]  the big ones for me and the focus of solid 2.0 is just a little bit. We do use RPC kind of stuff. Like we have a mechanism where
[02:31:28]  you can just click call a function anywhere. And it's just like now it's an API call. It's like an RPC call. Sorry. I got distracted
[02:31:36]  for a moment. Two key things. We need to be able to serialize and deserialize through reactive graph in a way that's potentially globally accessible. And what
[02:31:46]  this is going to enable for us is resumable hydration. What's resumable hydration? People look at Qwik sometimes and they see the full package and they
[02:31:56]  don't understand the differences. Resumable is simply being able to start and stop. basically do something on the server, have it continue on the client. And it
[02:32:06]  requires a huge amount of serialization. I don't know where if it's like worth serializing everything. I don't even know if it's beneficial for everything. But
[02:32:14]  we want to be able to serialize and resume because most runtime reactive systems have to run everything once. Why can't that once be on the server? It's also key
[02:32:24]  for HMR. Solid's HMR is, you know, it reloads below the point. What if we could actually have really good hot model reloading where we
[02:32:33]  could just resume state? And dev tools. These are the three weakest. I mean, hydration isn't weak. We have one of the best performing hydrations that's not
[02:32:42]  like Marco or, you know, that kind of, you know, quick. But like these three areas are where I want to make improvement. And all three of them come
[02:32:52]  down to serialization, deserialization of the reactive graph. And our current structures don't lend to it. So this is big focus for 2.0 along
[02:32:59]  with, you know, some of the slight other optimizations. And the other thing is transitions, concurrency. Right now we support a single fork. I want to be
[02:33:08]  able to restructure it to support multiple forks. And this is very low level, obviously. But building a reactive system to these criteria is going to basically unlock the
[02:33:21]  next series of things. Because even if we haven't figured out, if we're using islands or whatnot, or, you know, what the high level architecture, server components
[02:33:34] , we make a reactive system like this. And we make it performant. You know, solid right now is the fastest on the server, fastest in the browser.
[02:33:46]  We make it the fastest at hydration. We'll figure it out. Because, you know, maybe you'll just use solid and astro. You know, maybe quick
[02:33:58]  adding support for other frame components. Maybe there'll be actually no potential downside of just using solid in your quick app, essentially, because they can handle the progressiveness. And
[02:34:13]  solid is resumable, small, and the fastest of what it does. So this is a key part of it. And this is enabled because of the fine range
[02:34:23]  activity and the component structure. We build strong primitives and foundations. And we can fit into what others are doing. Right? We've even seen, you know, our
[02:34:35]  universal translator for native and stuff. Like, this doesn't have to stay on the web platform. We're just building the best reactive primitives we can. And the
[02:34:43]  rest is just layers and abstractions. So that's solid starts, like, on one side where I'm showing the best way we can build apps today. That's what
[02:34:51]  the team's been working on. Nikhil's been doing amazing work. Sol 2.0 is about just, you know, redefining the baseline of what we can
[02:35:00]  expect out of our reactivity. But yeah, I mean, there's implications to this, obviously, right? Resumability is one. And I think we'll talk
[02:35:14]  about partial a bit more, too, when this comes up. What I'm thinking in terms of implementation strategy is that we're going to, we're going to basically
[02:35:27]  change the, I'm doing this as a hydration. I'm doing this in a few steps. First step, new reactive system. You know, second step, and there
[02:35:37] 'll be some overlap, is going to be changing Sol's hydration and SSR output. And so we can, we're basically viewing this as a hydration optimization. It's
[02:35:47]  not about partial hydration yet, or progressive. It's simply making the best possible hydration solution that basically resume because it doesn't hydrate, essentially. And then from there
[02:35:58] , we're going to, the third piece, the third wing of this is, is focusing on app architecture and routing. We figure out those bits, things like server components
[02:36:11] , partial islands will all kind of come into place. Because essentially, once you can subdivide the work, and once you, it's a two prong approach from
[02:36:22]  top down, or bottom up and top down, we can basically move towards you know, this, this, these future patterns. So if you did come here hoping that I
[02:36:35] 'd like spill the secrets on how the router works and whatnot, this is still, this is still a bit loose. I mean, the thinking right now, if you want
[02:36:36]  to know, is most big transitions probably should be rendered on the server. So that you don't need to send all the JavaScript. But since solid already scales based on
[02:36:45]  interactivity, and not based on number of DOM elements, we can actually keep things pretty small after the fact, and only ship the list as well. the very least
[02:36:49]  amount of JavaScript. And, and keep things like that. And, and keep things like that. So, this is going to take more exploration, I looked into routing solutions
[02:36:58] , I've looked into, I've looked into, I've looked into, I've looked into, I've looked into basically, RSCs, quick, Marco
[02:37:16] , astro, all the current, you know, techniques, top techniques in terms of doing partial hydration, and everyone there is looking for that router, you know,
[02:37:35]  next is working on it, right, for react server components. But here's my, my, my thinking proposal, anything that can be done, you know, can
[02:37:39]  also be not diffed. If there's a diff solution, there's always a more optimal non diff solution. And that's, that's, that's, that's
[02:37:55]  what we're looking for. And that's where it goes. So, basically, with this plan moving forward for solid 2.0, we'll be able to attack these
[02:38:03]  things as they come up by positioning ourselves in, in, in the the best place and have the capabilities available to us. There's so many ways we can, we
[02:38:13]  can attack, you know, all the topics that are happening right now. And I, for me, it has to come back down to the primitives. So, I
[02:38:23]  mean, that's the plan. Do you think a heavier compiler might be part of solid solution? A little bit heavier on the compilation, but I'm trying my best to
[02:38:35]  avoid it. I know what a heavy compiler looks like. So, as I said, Marco has the best compiler, not close cross template analysis, it can, it
[02:38:43]  can basically trace the stateful reactivity you have across your whole application, and then tree shake everything that's not changeable, and then bundle that up. Like, it
[02:38:54] 's going to be very difficult for any framework to be as performant in that range as Marco is, I'm just throwing that out there. I'm just throwing that
[02:39:03]  out there. But it's funny, because this, you might be going, okay, well, then why don't you just do that? Well, Marco's doing that
[02:39:15] . Now, what's attractive about what we're doing here is that story, like I showed on the video, where you just had that DOM element, and you just
[02:39:27]  had some JSX. It's not about compilation. Compilation is great. And maybe we can come to the perfect abstraction. So, it's about keeping the escape
[02:39:39]  hatches. It's about keeping the escape hatches, never feeling trapped. That's the DX win. It's about debunking the magic. It's about giving
[02:39:47]  people the tools they need to do whatever they want, whenever they want. That's, we'll see. That's, that's, that's, that's,
[02:40:03]  that's what I'm getting at. I, some people, I think there's, I think there's two worlds here. I think there's, there's, there
[02:40:13] 's, there is a split still. I, I backed Marco because I knew it was the very best at what it was doing. It's like the, I wrote
[02:40:20]  an article about that a little while ago, but like the best, the best felt conceptually, like that, that was what, why I was really into it. I
[02:40:28]  want to see what the best react is. And I left my work at Marco and don't get me wrong. I'm still very involved in that team, very involved with
[02:40:38] , you know, direction thinking and, you know, and whatnot. And whatnot. But I had to give solid a chance. I came to Netlify because I
[02:40:49]  had the opportunity to, to basically demonstrate, take what we've learned and show what a gen three framework looks like on the other side with the other philosophy, with the,
[02:41:01]  the other technology. That's, that's, that's what I'm thinking. I, I, if people didn't pick up on it, the reason solid is so
[02:41:07]  interesting and maybe they can't place a finger on it is because for a while react came out. And we're like, okay, this is great. And then we
[02:41:13]  saw Svelte. We saw view at first, but then we saw Svelte and we're like, oh, this is like finishing that story. So that's
[02:41:19]  what the future web dev looks like. It looks like Svelte. Solid kind of is challenging that. I don't know if there's a single future. I talk
[02:41:29]  about the merging of website and web app into a single thing. That, that can happen. But I don't think there is. I don't, I don't know
[02:41:37]  if, if it's as simple as saying compile everything. And that's never been, I've, I've, I've, I've used the compiler as least
[02:41:48]  as possible to get what I need. That's, that's basically been my philosophy. And the, I'm that my intention is to continue with that. Thank
[02:42:04]  you. Yeah. I mean, hopefully, I mean, there, there's a lot of questions and stuff, but I know the direction and that's all I ever had
[02:42:12] . Right. I've done the research. I have a great team of people working in solid community. The other part of Netlify was, you know, I
[02:42:22]  showed that PR, that PR where they, they did the escaping and it made, it was the final push that pushed solid performance. I I'm trusting in the community
[02:42:31]  here. I'm trusting on openness and visibility, which is why I'm talking about this right now, you know, directionally, you know, sure. Tell me
[02:42:39]  about cool experiments you're doing with islands or partial hydration. Like, I'm not worried about that yet. And we'll see where it goes. I feel like if we
[02:42:48]  build the best primitives people, it'll be a no brainer to use us in Astro. We're just like, but yeah, that's the best way
[02:42:54]  to use Astro for example. And I'm fine with that. And solid start is the best, best way to build modern apps today. You know, that's a
[02:43:03]  good story, but I got to move on to the next thing. You know, we, the first two, two, three years of solid was first was coming up with
[02:43:16]  the fastest way to render the dome and we succeeded. And now big frameworks, you know, five years later are like, Oh yeah, this is the fastest way to
[02:43:26]  render it at home. Okay, great. The next few years figured out the fastest way to render on the server streaming concatenation. You know, and solid start is
[02:43:38]  kind of like showing what the realization of that vision is in terms of the best isomorphic experience for a modern web app, but we're already moving on, right?
[02:43:49]  That that's today. That's already old news. Yeah, there's lots of work to do. I mean, but the, you know, I'm active on
[02:44:07]  the discord. I'm active thing. I've got, I've got Netlify, you know, on my back, you know, they're going to, they
[02:44:15] 're going to help push that server story further with the edge. And kind of technologies. Like there's so many places I'm focusing on the fundamentals. I I'm
[02:44:25]  just praying that the ecosystem steps up and I don't just mean they've already have, we have incredible component libraries. What do we have now? We have hope UI,
[02:44:35]  which is like shocker. We have material UI, carbon. What else? What else? What's another good one bootstrap. You know, we have new
[02:44:44]  libraries every day, component libraries. And, you know, we're getting all the tan stack stuff, you know, virtual table. And, you know, sorry.
[02:44:52]  I put them together, react virtual and react table, which are now tan stack virtual, tan stack table. Like that side. We just need to refine on top of that
[02:45:05] . We need to build better patterns around solid start. You know, we've got the good fundamentals, but you know, like show people what we can do with it.
[02:45:13]  Like, if I get to just leave that in all your capable hands and get to work on what the next generation thinks we're going to be in great shape because we
[02:45:23] 're already building to the right patterns. Fine grained, this component thing, you know, the shift, the break away from react, the reason that we don't
[02:45:31]  react compat, it's already happened. We already took the hit. We already got away from components. You know, cell has a compiler, so they'll probably be able
[02:45:41]  to break away pretty easily, but not everyone else will, you know, it's, you know, view, as I said, it's, they're starting from ground
[02:45:49]  zero here, you know, which is fine. It might not even be the direction they go. Maybe, maybe this is just use things here. We're here.
[02:45:57]  Everyone does different things. It's okay. Don't, don't have to be one, but this, this, this, this is, this is my plan here.
[02:46:03]  I'm what I, what I intend to do is put together a working group around this future direction of, of, of reactivity. We have some incredibly smart and talented
[02:46:12]  people in our community, especially around the topic of reactivity, people who write their own libraries. Solace seems to really attract people who write their own JavaScript libraries,
[02:46:19]  who, who basically spend a bunch of time trying to be eating the JS framework benchmark. And now they're, they're with us. You know? Um, so I
[02:46:28] , I, I'm gonna, I'm gonna tap on those people's shoulders, you know, get, you know, Fabio and Alexis and, um, I don
[02:46:36] 't know his name, X Lord, whatever. Like there's a whole bunch of people in our community that have incredible knowledge on this stuff. So we're, we
[02:46:43] 're stepping into different projects. Solid start. I've been just trying to focus on so that we can get it to beta, get the docs out and get people trying it
[02:46:51]  and refining it. That's, that's, that's been my first priority. But once we get it to that point, we have a team for solid start.
[02:46:58]  We have a team for docs. And, um, as I said, we're gonna have a nice working group working around the reactivity stuff. I think there's
[02:47:04]  just so many levels on layers here. And the way we push this forward is to get more organized. Yeah. Features on the server with the edge technology. Yeah
[02:47:16] . Well, then I'm working at the right place. So that this all makes me very hopeful for the future. And that's why I wanted to share this because I
[02:47:31] 've been wandering around, you know, checking out the different things. As I mentioned, and the picture and the direction has been just crystallizing for me, the way
[02:47:46]  that it's had a few times in the past. Now it's just the tough part, the part of just the brute force and working through it and benchmarking and understanding
[02:47:57]  and, and, and basically refining it. You know, I'm going to keep on focusing on primitives and, uh, you know, hopefully with the great
[02:48:08]  help of the docs team and everyone else. Um, you know, leave everything up to everyone else to do the rest. Yes, yes, yes, yes, yes
[02:48:16] . Come to the discord. Incredible community there. I think we have almost 4,000 members now. Um, the help channel. I'm so proud of the people there
[02:48:26] . We, we, we got that auto threading thing and it's, it's, it's like, it's like a, it's like a ticket line.
[02:48:31]  It's just like, you know, incredible amount of knowledge there. Um, so yeah, I mean, you saw from solid's humble coffee script beginnings to, to
[02:48:44] , you know, where we are today and where we're going in the future. Like this is very, very exciting. And what I love about this is because we
[02:48:53]  focused on the primitives, we focused on those building blocks and like things are malleable very easily. You don't have to worry about those like angular one, angular
[02:49:06]  two things very much. Right. And it's my hope, you know, as we can transition that we already have the right abstractions. That's that, that
[02:49:16] 's our advantage. I mean, salt's too new. It's funny. I was saying that from, you know, to say that for sure, but in a sense
[02:49:26]  for me, it hasn't changed very much in seven years. Well, other things very much have, so maybe it's just old fashioned, but, or maybe it's
[02:49:36]  just the right abstractions. So we won't know until we try. Yeah. Thanks David. Yeah. I feel like this is the part of the stream where I
[02:49:52]  put in the links and stuff, you know, start documenting stuff. Um, just for people's knowledge, I am going on a road trip for three weeks, um,
[02:50:03]  across the U S going to go visit my grandfather and, uh, he's in the other side of Canada. And so he can meet his great grandchildren, you know
[02:50:12] , COVID has been kind of a thing. So, um, I'm going to be doing some work in the evening stuff and I'm going to be driving and do a
[02:50:19]  lot of road stuff. So solid like, I'm, I'm, I'm, I'm, I did take a little break a week ago when I went to
[02:50:23]  Vancouver. I'm, I'm going to rest up and refocus here. Um, we're, we're just pushing the last little bits on solid start. We
[02:50:31]  should, the, the docs effort on solid start should kick into full swing while I'm away. Um, so that we can look at a beta release when I get back
[02:50:41]  and, um, I'm just going to recharge, refocus and get ready to work on 2.0. When I get back, that's, that's,
[02:50:47]  that's basically my plan. So, um, yeah, honestly, I'm not even concerned about that anymore because the community is so great. The thing kind of drives
[02:50:56]  itself amazing people. So yeah, get involved. Thank you. This is, this is core team member, uh, number three. Thank you. Yeah. Community meeting.
[02:51:13]  Yeah. With that, I, I mean, unless there's any more questions, I'm going to call that a stream, eh? Thank you all for joining me
[02:51:24]  on this, uh, journey, um, both today in the stream and in general, it's, it's been incredible. As a guy on Hacker News said,
[02:51:32]  uh, you know, you're, you're more likely to start a unicorn company than pick up a JavaScript framework that, uh, that catches on, but maybe, maybe
[02:51:43]  he's, maybe he's, maybe he's not wrong, but here we are. Thanks everyone. All right. I'm going to, I'm going to send
[02:51:51]  off now. Actually, you know what? Let's do it properly. Oh yeah. And when I come back, I'll be getting OBS. So people like Theo
[02:51:59] , you, you better, you better help me out here. Um, I, I really would appreciate the help. We need a better streaming setup. And now that
[02:52:06] , um, I just stream during the day, you know, with my whole setup, and that will find everything I'm, I'm good. We're going to make
[02:52:13]  these streams a lot better. So, um, be, be sure to stay tuned for the future. Okay. All right. See ya.