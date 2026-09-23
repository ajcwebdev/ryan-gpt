---
title: "dOgnQ9SuKYk"
slug: "dOgnQ9SuKYk"
duration: "2:52:23"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/dOgnQ9SuKYk.m4a"
---

This is a transcript with timestamps. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one-sentence description of the transcript.
  - The one-sentence description shouldn't exceed 180 characters (roughly 30 words).

- Write a one-paragraph summary.
  - The one-paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include only starting timestamps in exact HH:MM:SS format, always using two digits each for hours, minutes, and seconds.
  - Chapters should each cover approximately 3-6 minutes of content.
  - Write a two-paragraph description (75+ words) for each chapter.
  - Ensure chapters cover the entire content, clearly noting the last timestamp (HH:MM:SS), indicating total duration.
  - Descriptions should flow naturally from the content, avoiding formulaic language.

Example JSON output:

{
  "shortSummary": {
    "episodeDescription": "A concise one-sentence description of the transcript in 180 characters or fewer."
  },
  "longSummary": {
    "episodeSummary": "A single-paragraph summary of the transcript that explains the central topic, the main arguments or developments, the evidence or examples used to support them, and the broader takeaway for the audience. It should read as one cohesive paragraph rather than a list, staying informative without becoming exhaustive. The summary should mention the most important themes, clarify what changed or was learned over the course of the discussion, and note any conclusions, recommendations, or implications that would help someone understand the full conversation without reading the entire transcript. It should also preserve the flow of the discussion so the reader can follow how the ideas developed from beginning to end."
  },
  "longChapters": {
    "chapters": [
      {
        "timestamp": "00:00:00",
        "title": "Introduction and Overview",
        "description": "Introduces the episode's central themes, outlines the main questions guiding the discussion, and explains why the topic matters in practical terms. The chapter gives the audience enough context to follow the conversation, surfaces the core tension or opportunity, and establishes the language that will be revisited in later sections.\n\nIt also signals how the discussion will unfold, connecting the opening ideas to the examples, methods, or case studies that follow. By the end of the chapter, the listener understands the scope of the conversation and the stakes behind the next set of arguments."
      },
      {
        "timestamp": "00:04:30",
        "title": "Core Ideas and Implications",
        "description": "Introduces the episode's central themes, outlines the main questions guiding the discussion, and explains why the topic matters in practical terms. The chapter gives the audience enough context to follow the conversation, surfaces the core tension or opportunity, and establishes the language that will be revisited in later sections.\n\nIt also signals how the discussion will unfold, connecting the opening ideas to the examples, methods, or case studies that follow. By the end of the chapter, the listener understands the scope of the conversation and the stakes behind the next set of arguments."
      }
    ]
  }
}

Transcript:
[00:00:02] All right. Hello, everyone. Welcome to my stream today. This one's going to be a little bit of a different stream than usual.
[00:00:11] I decided that it was about time.  Actually, I've been putting this one off for months now to kind of just like do this like deep,
[00:00:19] complete holistic view of what Solid is, what Solid's been doing, the whole story. And I've got to remember to turn off my notifications here in Discord. Okay, sweet.
[00:00:35] And yeah, so we're gonna change it up a little bit this week. I'm glad everyone can come and join me for this one, because I'm going to start like all the way at the beginning.
[00:00:46] assuming everyone is joining in here.
[00:00:50] Yeah.
[00:00:51] Yeah.
[00:00:54] Show us your shirt. Yeah. I'll stand up for a moment.
[00:01:00] Thank you.
[00:01:01] Thank you.
[00:01:03] Yeah.
[00:01:10] How did we get that shirt?
[00:01:12] Yeah.
[00:01:13] We're actually opening up a shop for this. So merch is coming pretty soon. I don't think it's been officially released. I actually was looking at the storefront.
[00:01:27] this morning.
[00:01:29] I just give everyone a chance to join in.
[00:01:33] Okay.
[00:01:34] I don't have my trademark drink with me tonight.
[00:01:40] All right.
[00:01:44] Because it's during the day, right?  What kind of example would I be setting if...
[00:01:52] If I was drinking during the day.
[00:01:56] Thank you.
[00:01:58] Thank you.
[00:02:00] I'm just getting a couple things, letting people know that we're live.
[00:02:04] All right.  So usually, every stream I start with this week in JavaScript.  I'm not going to do that this time off the start.  I know last one was kind of unorthodox.  I covered like a month, and I didn't cover everything.  Because this week in JavaScript,
[00:02:23] will come in when it comes in, essentially.  Because I'm telling you a story today.  And this week in JavaScript is the present.  And I think today we're going to start firmly in the past.
[00:02:35] I love people still discussing about this time.  Does the stream time work for people?
[00:02:41] I kind of liked my end of the day thing,  but I knew it was like too late,  but I can't do it any earlier than that if I go later.  So I was like, oh, maybe like,
[00:02:51] two hours later than right now.  Could be as late as I could pull this.  But then I'm told that people actually in Europe
[00:03:00] watching the stream. So now I should make it even earlier, if possible.
[00:03:08] Yeah, yeah.  People happy about this one?  Good, good, good.  Yeah.
[00:03:14] Yeah, we had some fun last week when we had Brett on talking about React server components and whatnot.  And that was my first time trying...
[00:03:24] this time. But I think we'll make a work of this. There's not too many people who stream in the afternoon.
[00:03:33] I think
[00:03:35] Theo is one of them, who I usually catch a stream. But today, yeah, we're going to talk some solid. We're going to go right back, back, back, back to the beginning. So I'm going to throw up my banner here.
[00:03:50] and to say past. I'm going to keep it that simple this time because there's so much stuff that I  want to cover. I'm probably going to forget half the things. But, you know,
[00:03:59] So hopefully we can all kind of follow along and see what's going on.  Because for me, solid –
[00:04:06] kind of starts before solid, if I want to talk about it in earnest.  And that kind of goes all the way back
[00:04:12] all the way back. Let's see. What screen view do we want? Yeah, let's go this way. All the way back to
[00:04:17] Thank you.
[00:04:18] me making a website for my wedding.  And I made it in...
[00:04:23] Ember or something.
[00:04:25] But after I did that, I was like, no, I want to make this easier to make websites in the future.  So I started making this template.  And I'm not going to get all into this.  It's probably, this doesn't even blow up.  So we're not going to spend much time in my fork here.  But...
[00:04:43] Essentially, somewhere around June 2014, I started making...
[00:04:48] something.  I called it simple VM, simple view model.  And it was a framework.
[00:04:54] around Knockout.js, essentially, kind of playing around with rendering and see what I could do  differently with using Knockout observables and doing that and web components. And I wanted to  basically make this very easy structured way of using Knockout.js because Knockout.js was  pretty much nothing but structured, if anyone's kind of familiar with it.
[00:05:17] - Right.
[00:05:20] - Of course,
[00:05:21] It...
[00:05:22] Things didn't stay like that.  So I spent-- I love having this history in Git.  I spent a year just playing render work in progress.  Like I'm just playing around with Knockout.js.
[00:05:37] all the way from through 2014, 2015.  And then somewhere towards the end of March 2016,  I started kind of working on some rendering stuff.  And I kind of decided--
[00:05:50] Yeah, changing binding.  I was like, maybe I can make something myself.
[00:05:55] Yes, yes. You're noticing the coffee extension. We're going to see the very first commit to  Solid.js here in a minute. And you better believe that it's like all coffee script.
[00:06:05] Anyone knows me that I was big on CoffeeScript for the longest time.
[00:06:10] So, anyways, this repo was kind of where I ran my test, but it stayed on Knockout. And I started a new repo called Framework. And I don't know when I started it, somewhere between March and August 2016. But the first time I actually bothered committing it and saying like I had something was August 21st, 2016. I think I'd been playing with some stuff in JS Fiddles and I was like, okay, fine. Which was what I did in those days. I'm going to actually initialize this. So
[00:06:39] I'm going to pull this down.  I think I have this pulled down already.  Let's see if I can open up VS Code here.  And you can see this in its glory.  Yeah, where are we?  Yeah, let's open this up.  And let's just solid component.  I don't know what that is.  That's probably...  Oh, no, this is just something else.  Okay, cool.  So it's because of the NPM modules.  I was jumping around through the different timelines here.  Okay, so let me blow this up a bit.
[00:07:09] the very first SolidJS commit if this is of any interest to anyone. Because essentially,  it was four files. I mean, there was a server that served some stuff and did some nodemon  stuff. But essentially,
[00:07:19] This is August 2016.  I basically...
[00:07:23] The way it would work is you would write your component.  Oh, got to love.  Let me make this a little bigger so everyone can see it.  But essentially, my app was a class in CoffeeScript.  And.
[00:07:37] I had something called observable, which is in this other file, create, which created this
[00:07:44] looks like store object and then
[00:07:47] It's mutable.  I can push to it, apparently.  And then after some time--
[00:07:52] I update the name.
[00:07:54] And
[00:07:56] Basically, I created div in HTML.
[00:08:00] parse it, apparently, from using this library,  and then append it to the DOM.  OK.  And then we have a handler for updating the name  and for clicking.
[00:08:13] And you might be going, OK, what's this DOM we're parsing?  Well, it's a jade template.
[00:08:18] So it looked kind of like this.  You can see these nice squiggly handlebars to indicate
[00:08:27] stuff. And I was trying to show in this example, deep nested reactivity, I'm pretty sure.
[00:08:35] Switch explorers to the left.
[00:08:39] To the right, her eyes will thank you. Can I just do that?
[00:08:44] Then not
[00:08:45] OK, that was weird.
[00:08:48] Thank you.
[00:08:49] Can I just do this?
[00:08:50] Okay, nevermind, I'm clear.
[00:08:55] So, okay, the coolest thing about this is  I can't actually get this stuff to run like super,
[00:09:02] I was kind of terrible.  Like look how many stars I have here on my dev dependencies on package.json.  I tried to actually install everything and have it like build and stuff.
[00:09:14] But I couldn't get Gulp to work in modern Node, and I was trying to download old Node, and it doesn't exist anymore.  So what I ended up doing, but luckily for me, I actually committed all my builds in the repo.  So I actually have the untouched JavaScript from Node.
[00:09:31] you know, 2016 or whatever.  So I can just run the server, which still works.
[00:09:36] even with all this stuff. And
[00:09:39] Port 5000, let's see if we can open that.  See new window.
[00:09:45] Thank you.
[00:09:45] Thank you.
[00:09:47] And we should have the first-- no, this is not it.  This is later.  Just a second, sorry.
[00:09:56] What's going on here?
[00:09:59] Thank you.
[00:10:00] Give me a second.
[00:10:02] Yeah.
[00:10:04] Gotta make sure sometimes there are service workers,
[00:10:10] And
[00:10:11] We're going to bypass the service worker for this network.
[00:10:14] Yeah, sorry. This is, okay, here we go. Sorry about that. Service worker on local host. Okay. And here is our very, very simple first example, which is literally, if I refresh it.
[00:10:30] No, service worker. Damn it. Okay, I need to actually
[00:10:35] unregister it
[00:10:38] Bye.
[00:10:39] This is also early service worker days through some of my work.  OK, so let's refresh again.
[00:10:44] OK, so essentially it pushed it before we could even see it.  And then after a second, it automatically updated
[00:10:51] It's the snake.  And if we do this, the last name updates in real time.  Success.
[00:10:57] Okay. And
[00:10:58] Thank you.
[00:10:59] This is kind of funny to me because, yeah, I mean, basically the app was what I showed you before.  And then there's basically two files.  There's a DOM coffee.  And here's my cheating thing.  If any of you watch the Petite Solid video where I showed how we could basically just build something like Petite View on the fly, that's exact.  I use this library, Riot Temple.  That's what I did.  The very first version of Solid was basically the same as that stream.  So go check out that stream if you want to kind of like understand how to write something like this.
[00:11:29] Yeah.
[00:11:30] I walked the DOM. This is how Petit View or Alpine or View 1 basically worked.
[00:11:37] And I switched on, you know, was an element as a text, go through, remove the original attribute. Oh, God, using like underscore and stuff everywhere.
[00:11:51] And
[00:11:52] So basically looking at, you know, different types of expressions and then, you know, doing the correct action for it.
[00:12:01] and basically parsing these out into a tree of expressions  that then got associated with that DOM node.
[00:12:10] That's essentially how this worked.  And Observable Coffee was an attempt at writing a reactive proxy type library.  So I used a proxy.  Basically, what we call stores today were the basis of where all solid libraries
[00:12:26] Um,
[00:12:28] would come from. So I was using a proxy deep nested. And I think
[00:12:33] Yeah, get wrap, unwrap, get set.
[00:12:38] Um...
[00:12:39] I had some deep diffing abilities, which later became reconcile.
[00:12:44] They had computed properties and some subscription things,  and it looks like an unimplemented dispose method.  That sounds about right.
[00:12:55] Yeah, I wasn't cleaning up after myself yet.  But this is essentially the very start  in this lovely 144 line CoffeeScript file from 2016.  How's chat doing?
[00:13:10] Thank God for reacting to JSX. Yeah, yeah, it took a little bit, right?
[00:13:17] Oh.
[00:13:18] Didn't know that.  That's awesome.  Yeah, no.  Riot was great.  And this templating thing was super small.  And I mean, maybe not super small by modern standards,  but it was like a couple of kilobytes or something.  So this is really easy.
[00:13:29] So, you know, I was able to take the parse the syntax, make a very simple reactive proxy library, then basically have this terrible
[00:13:41] Thank you.
[00:13:42] class component thing and use Riot's templating in Jade for nice, concise syntax.  I was all on this, right?  But yeah, let's fast forward a little bit.
[00:13:58] That one deserves a throw out here.  Yeah, so yeah, I did a few more stuff in August.  Same day I added the if binding,  and then I had the each or the loop binding,  and then no longer broken version.  And then within about a week,  first thing I wanted to do was benchmark it.  So we're gonna go right to it, to see how our project  has evolved.
[00:14:21] A week later, I'm not going to go this deep on like every change, but this early stuff is amusing to me because basically...
[00:14:29] Um,
[00:14:30] Yeah.
[00:14:31] We--
[00:14:32] Observable got a little bit better.
[00:14:35] Now there's a path-based system looking for deep nesting.
[00:14:42] Stuff changed a bit.  DOM got more extensive.  Now there's an each binding.  And...
[00:14:48] old, I was comparing them for performance.  Parse, bind expression, add node, insert node.  So stuff kind of grew out.  And then--
[00:15:01] I had my original, looks like my original demo.
[00:15:05] Yeah.
[00:15:05] index
[00:15:07] Yeah, made rows and removed them.  And then I had benchmark, which is...
[00:15:14] One of my favorite benchmarks of all time.  I don't know if people are familiar with this.  Yeah, this is what authoring solid would have been like at that point, right?
[00:15:22] make a class that extends observable, and then this is basically a store object, a proxy. So then you'd go this boxes and then create them and then on loop, it would just update the boxes mutably. So each class was like a reactive proxy, essentially, I'd figured out a clever way to extend a proxy.
[00:15:45] Thank you.
[00:15:45] So, yeah, I mean, let's see. Let's refresh the page and see what we get. Oh, yeah.
[00:15:50] Anyone who remembers this, this is Jeremy Ashkandis' circle test.
[00:15:57] Yeah, the funny thing is the measuring for this is actually really poor. It's actually only measuring the time the framework spends in the framework loop, not the whole cycle. This is very common back then, so it made frameworks performance look like really better than they actually were. But, you know, here it is.
[00:16:13] circles test, so to speak. I tune solid like crazy to work on this. And this is what we're looking at here. Essentially, this proxy loop, I actually have a repo for this today where I compare all the frameworks. This is essential to me because I spent I spent months
[00:16:33] like tuning the performance of making those circles spin fast.
[00:16:38] I mean, Knockout was so much faster than a lot of the others here that it wasn't that hard
[00:16:44] to do well in this by a lot of standards.
[00:16:49] So yeah, I just kind of kept on going with it. Let's jump a little further here. Several reparture subscriptions, simplifying props, blah, blah, blah, blah, blah. Yeah, I mean...
[00:16:59] Yeah, where are we? This is all within the first month or so.
[00:17:03] update the component router,
[00:17:06] This is -- I wrote a web component router. Essentially, I did deep routing with parallels
[00:17:12] data fetching back in 2014 that I brought in here.
[00:17:17] Yeah, I'm just going to...
[00:17:19] arbitrarily pick somewhere. Let's just go to updates here and see how things had progressed in two months.
[00:17:26] Thank you.
[00:17:27] So things have moved on a bit.
[00:17:31] We have now a bunch of stuff in here.  We have a ToDo MVC app.
[00:17:36] no salt still coffee and jade uh some test element row insert which i believe is  the js framework benchmark a home page and our circles benchmark and the library itself
[00:17:50] It's probably in a folder called like lib or something. Yeah.
[00:17:53] Yeah.
[00:17:54] Now there is a whole component concept here.
[00:17:58] Um,
[00:17:59] And
[00:18:01] Dom.
[00:18:03] Coffee, I don't know.  This is just kind of growing that simple DOM file.
[00:18:10] So more rules, more things.  Let's-- I just-- yeah.  And our observable system now has--
[00:18:16] Computeds.
[00:18:18] The core...
[00:18:20] which I believe is still using a proxy.
[00:18:26] the
[00:18:27] Was I using a mutation? Yeah, I was using a mutation observer for backwards compatibility on platforms like IE that didn't support promises.
[00:18:40] Which is funny because they didn't support proxies either,  so I don't know what I was doing here, but you know.
[00:18:46] Anyways, let's run this for a moment and see where we are at. Let me see if I refresh this. Okay.
[00:18:55] Yeah, this is just testing all the bindings and stuff.  And my daughter's name is Raina, if you're wondering,
[00:19:02] I was doing a lot of this. She was born July of 2015, July 20th. So basically that first year, like I, I,
[00:19:14] I'd kind of started this when I was staying up, you know, when she wasn't sleeping through the night. And it's basically how I spent the stuff. Yeah. So this isn't quite the JS framework benchmark. I didn't generate the data, but this was like me kind of testing the stuff that's in it. This looks like I have remove role capability.
[00:19:29] Thank you.
[00:19:30] OK, yeah, still hadn't figured out the bad measurement.  Apparently, solid got slower here.
[00:19:37] Does this to do MVC work? No, it doesn't. Okay, whatever.
[00:19:43] Okay, so...
[00:19:45] Yeah, we're kind of moving forward here because
[00:19:49] At a certain point here, yeah, let's jump a little bit because I started updating stuff.  Like not much happened in 2016.  After the end of 2016, yeah.
[00:20:03] to 2017
[00:20:06] I did a lot of investigation into basically different types of proxies.
[00:20:12] Oh yeah, here's a good one.  Update proxy observable, remove two-way binding.
[00:20:16] So sometime June 29, 2017, I decided that I was going to remove two-way binding from Solid. Solid had two-way binding initially, and mutable stuff, as you saw. So let's actually see what that looks like for a minute, because
[00:20:31] Yeah.
[00:20:32] OK, the observable core is still--  yeah, I start calling them stores, because I had two different versions,  one with immutable internals and one with mutable internals, which--
[00:20:43] The mutable one was more performant, but it was bugging me that it wasn't isolatable as much as I wanted. Because basically, you could mutate it anywhere. I basically created mutable today and then something else that worked like immer, essentially. Basically, two versions.
[00:21:00] I liked the immer version better because the guarantees left outside the system, but the create mutable version was more performant.  So I was like really struggling there.  And then I eventually just was like, screw it.
[00:21:13] give our state a set function.  So now, you know, so yeah, let's look at the, let's look at the,
[00:21:23] I want to look at the row insert one.
[00:21:26] No, why is that? That's not very interesting. But yeah, I mean, you can start seeing what a component would look like. It extends some component, and then you'd go, it's still a class, and you go at state, and then you'd set what you want.
[00:21:40] and then you'd read it how you want. So essentially, although I believe this setter still supported
[00:21:46] paths at this point, but I'm not 100% sure. Let's take a look here.
[00:21:51] Do-do-do.
[00:21:52] Doesn't look like I'm doing any path setting yet.  Okay, cool.  So, but basically the API changed.  I'm showing you all how it was all mutable before.
[00:22:00] But now we are basically...
[00:22:03] Thank you.
[00:22:04] basically calling dot set on our proxies manually and reading them. So this is kind of the start of that. I mean, there isn't too much that changed here. I think this to do MVC actually works now, which
[00:22:17] which is
[00:22:18] beneficial, but it's kind of
[00:22:21] It's kind of funny.  Like, what's this pug?  Yeah.  I don't know if I could ever go back to this.  Like, look at the if bindings.
[00:22:28] you put them right on the element, like if state to do's,
[00:22:33] Yeah.
[00:22:33] Each to do in filter list this.  Some people love this.  You can definitely see--
[00:22:41] I guess it's view today that still has this kind of syntax. But, but yeah, this, this, this whole time period, all the way through 2017 was like this. So, yeah, I mean, it's, it's kind of fun to see these patterns, like,
[00:23:01] I did very much start
[00:23:03] in the same kind of places you would expect.  But over time, the patterns kind of shifted.  I got rid of the two-way binding here and explicit state setters.  But you notice there's no signals or anything here?
[00:23:16] at all.
[00:23:17] Thank you.
[00:23:21] Yeah, I mean, syntax highlighting would help, right? But yeah, this is just one of those things, right? Like styles.
[00:23:30] Oh, man. Stylus file. I don't even have stylus installed on this thing. That's old.
[00:23:37] Thank you.
[00:23:39] Thank you.
[00:23:39] Yeah, I think this ToDoMVC actually works now. Let's just give this a shot.
[00:23:46] Nope.
[00:23:48] Thank you.
[00:23:49] Why it's not working, I'm not quite sure.
[00:23:53] Thank you.
[00:23:54] Thank you.
[00:23:56] The other problem is, okay, good. There is no, I'm like, it's a service worker secretly coming back on us. It doesn't really matter. That's the funniest thing about, oh, cool. You kind of wonder like, why is this working? It doesn't work.
[00:24:10] Anyway, most of this is
[00:24:13] just continued on.  I just tested and tested and tested and tested,  got to immutable work.
[00:24:20] And at a certain point,
[00:24:21] We're fast forwarding very quickly to January 2018.  Return to observable.  Yeah, what's return to observable?  Because I was playing with RxJX.  I was playing with a whole bunch of different stuff at this point.  This is all before Solid One open source.
[00:24:38] Right?
[00:24:38] So, yeah.
[00:24:40] Wow. My examples just keep on getting more and more and more.
[00:24:45] Swappy rest.
[00:24:49] I guess I was testing other frameworks.  I was benchmarking them.
[00:24:54] trying surplus.
[00:24:55] which you aren't familiar with from Adam Hale, Surplus in CoffeeScript.  But Surplus was the first reactive framework I'd actually seen
[00:25:04] that used
[00:25:06] that used JSX
[00:25:08] with the reactive framework. It's a big influence.
[00:25:11] Thank you.
[00:25:13] and
[00:25:14] I was testing stuff and I just couldn't get things as fast as I wanted. I pulled in
[00:25:22] Um,
[00:25:23] I look at my lib now.
[00:25:25] This has kind of gone way crazier.  We were parsing the DOM.  Remember the DOM coffee?  Now I'm like trying a whole bunch of stuff.  I have DOM.
[00:25:33] I have Dom one, which is based on what we were doing before, or Dom two.  And then I started doing these pre-compiled things.  And this way, instead of--
[00:25:44] Instead of using...
[00:25:46] that rendered HTML, I would actually look at the file ahead of time and try and pull out the stuff where I need the reactive bindings and be smart about it. And yeah, let's see what preprocessor coffee looks like. It looks actually a lot like our tag template literal version of .mx version, where we're actually creating a string of, of, uh,
[00:26:08] of stuff, like create text node, insert array, insert before, insert condition, create element.
[00:26:16] It's generating this giant string of a program ahead of time.  And this is like the early progression
[00:26:23] compiler-style things.  I am not using anything fancy here.  How am I parsing this?  Parse.
[00:26:30] Parse.
[00:26:32] Component register lib HTML parse.  Yeah, I'm using my parser that I wrote that we still actually  use for the tag team literal library.
[00:26:44] To just to parse this HTML.  And I got to a certain point here where the Riot stuff was great,  but I actually wanted to pull in like Acorn or something  because I couldn't get good enough JavaScript expressions.  Like stuff was like too...
[00:26:58] like how should I put it, like two
[00:27:01] like limited. I was trapped to what they had. So I had my own HTML parser.  And then I was like, okay, I need a JavaScript parser. And I,
[00:27:09] You know, the logic is getting more complicated here.  Not template, render template.
[00:27:16] Yeah, I mean, this still is fairly simplistic. It looks like looking through these examples. But this was kind of the beginning of writing the compiler project.
[00:27:28] And
[00:27:29] Yeah, I was playing a lot with Redux.
[00:27:34] Some people are wondering like RxStore, ReduxStore.  I was trying to use Redux to do something, mutators, to basically create
[00:27:44] I was trying to get this mutable redux. But this actually looks like it's just plain redux. I was trying to
[00:27:51] all these different patterns to figure out how I want stores to work.
[00:27:56] This is mostly what I was doing.  I had already extracted my reactive library into something called...
[00:28:03] proxy observable and proxy immutable. So basically two versions. And I was using them
[00:28:12] to create this pattern.  And yeah, mutators can't dispatch actions  if it's dispatching.  I liked Redux, but I had this problem with Redux.  And if anyone's seen X state,  they know what the problem is.  Redux is function of...
[00:28:27] So you basically you pass in the old state and you pass in the action and you get the new state back. Right. But
[00:28:33] But I wanted to wait, or sorry, the event, sorry.  You pass in the event data, you pass in the old state and get the new state back.  I wanted to trigger future actions.  So I came up with a system here, I think maybe Todos has it, where you could actually add  actions in your reducer that would...
[00:28:52] happen after the fact.
[00:28:54] So this still didn't break the synchronous consistency of like Redux, but it would allow you to schedule stuff. I think this is the Elm architecture essentially.
[00:29:03] Okay.
[00:29:05] Thank you.
[00:29:05] Thank you.
[00:29:06] yeah yeah
[00:29:09] Thank you.
[00:29:10] And you're asking about the store and the mutable. The difference was they were
[00:29:16] Store and immutable are still based on what today, what I call my mutable core. I had an immutable core that was based on
[00:29:24] like cloning the nodes internally, like the way immer works.
[00:29:29] I mean, when was this? 2018. This was before Imer was a thing. I was already kind of experimenting in this area. And it makes sense. Like, Michael Westray would be as well, because you're doing these reactive things and you're using proxies and you're like, well, I can just do the opposite. You know, like, why not? But yeah, all solid stores derive from the one side, the mutable side. But I had a completely different immutable side where everything was stored independent of the proxy and the proxy was just a proxy over the path.
[00:30:00] So there's the path that was important, but this was difficult for disposal because you'd always have to do a lookup, right? You couldn't just rely on the referential connection of stuff like the things that are being children of things like it could just go away.
[00:30:13] So I had to keep track of everything down to the root in the immutable version and do cleanup and stuff. It had performance issues.
[00:30:22] But anyway,
[00:30:25] Yeah, I mean, this is kind of fun.  I did a lot of stuff.  That's why when I talk about Rx and stuff, I...
[00:30:33] I...
[00:30:34] Yeah, what's this?
[00:30:36] All right.
[00:30:37] This is a...
[00:30:38] Rx based store, I guess.
[00:30:40] using like map, merge map Rx. So I just I was trying all this stuff and I was like, this isn't easy or fun.  It was just like too much. Right. What's actions? Yeah, we already looked at actions. Store Apollo.  I was doing a whole bunch of Apollo stuff, too. This is this is what derived it. I was trying to I was testing Apollo to use in my work as well in this environment.
[00:31:04] I have so many different versions of ideas, observable component, proxy component.
[00:31:11] Um...
[00:31:12] I probably can't even remember all of what these things are now.
[00:31:16] But I was trying proxies with surplus, which is that other library.
[00:31:21] Does this finally work?
[00:31:22] Thank you. To do NBC finally works.
[00:31:26] Okay. And I'm probably finally measuring this properly. Yeah, there we go.
[00:31:31] This isn't bad.
[00:31:33] To be fair, this version 5.58 loop on the circles benchmark.  Let's actually look right now.
[00:31:40] Circle's benchmark today
[00:31:44] is right here, right?
[00:31:47] So where was I? Let's refresh and just run it.
[00:31:50] So five and a half, let's say, okay.  Let's look at something, backbone.
[00:31:58] See, it's funny, computers are so much better today.  Like 5.7, it's nothing solid.
[00:32:04] This isn't even up to date solid, it looks like.  Okay.  So it's funny, this used to be such a big gap  on older computers.  Like we're looking at like, oh,
[00:32:15] These things are, you know,
[00:32:16] sub four, you know,
[00:32:19] Thank you.
[00:32:20] You know, something around five.  Inferno is probably sub four as well.
[00:32:25] Knockout will be five and a half-ish, a little bigger. Lit.
[00:32:31] probably five and a third. Yeah, this all kind of checks out, right?
[00:32:35] but five.
[00:32:37] Manila.
[00:32:39] 4.7-ish. Yeah. So it's funny, that range used to be into the dozens of milliseconds, but now  everything's five milliseconds. I could add like a dozen, you know, like a couple hundred more
[00:32:51] circles, but it just doesn't matter the same way it used to.
[00:32:56] Yeah, you know.
[00:32:58] This simple list.
[00:33:02] Where's posts? I think this is querying GraphQL. Yeah, that was a GraphQL query. Swapy API?
[00:33:09] is dead now, if I remember correctly. So I'm pretty sure that error is out.
[00:33:14] Row insert. This looks familiar, doesn't it?
[00:33:18] So the JS framework benchmark.
[00:33:21] swap rows. So yeah.
[00:33:26] Yeah.
[00:33:27] -
[00:33:28] Having lots of fun playing with web components using slotting. This page has React and Solid and Hyper. It has like four frameworks on this page all rendering different stuff interweaved with web components.
[00:33:42] So I was really big on web components at this point.  I don't know if I expressed that much.  I was focusing on that side.  But if you look at what's happened here,
[00:33:54] for how these apps look like. These components now,
[00:33:58] are extending...
[00:34:01] This is what I thought a component should look like.  They're class components, and I believe  they're extending web components.  So I'd be like tag.
[00:34:08] box benchmark.
[00:34:10] So that's the HTML tag.  And then I would be like defining my props.
[00:34:15] And
[00:34:17] requiring template and styles and then constructor, which  would add my state.  And then I'd have the ability to set it and then
[00:34:26] we could...
[00:34:28] Yeah, do you know what this is? Yeah, you're probably like, what the hell? Push apply boxes? Well, these, this is...
[00:34:34] The old, you know how solids, uh,
[00:34:37] have the set state path syntax. This is what this is. I used to accept arrays of arrays. So you could, and this is what I was doing with like the Redux thing. I was actually creating lists of mutations and running them all at the same time. So this is solids path syntax, right? So the stores thing, boxes, I, top, value. It's just being pushed as arrays. And if we look where this tick function is being called, we should see that we go set state, set path syntax.
[00:35:05] So I had to set and set paths for deep thing boxes. So essentially set would just do like the normal react style thing and then set paths would do what we do today for the path syntax for stores.
[00:35:21] Part of this is because I know that I'm moving to OBS, and I know that I'm going to get a better setup, and I know that Theo is going to help me with it. And I'm just not willing to pay that jump on StreamYard.
[00:35:35] I'm like, oh man, I just don't want to pay that extra money. I know this is so cheap, but I was just like I could do 1080 if I pay StreamYard more money. Anyway.
[00:35:48] But you can kind of just see, like, this isn't-- it's funny, because I get suggestions, like, all the time about how, you know, why don't you try this? Why don't you do this?
[00:35:58] Kind of trust me. I have like, like,
[00:36:03] OK, let's keep on going.
[00:36:05] So yeah, the funny thing is that even though this is getting very close to when that click happens where I essentially realized that JSX is in my future,
[00:36:16] because I start pulling in acorn and stuff and like,
[00:36:19] We're getting there.
[00:36:22] I do some big mid refactor and
[00:36:27] Thank you.
[00:36:27] yeah this is my last commit to this repo before solid goes open source um so
[00:36:35] The funny thing is you're going to notice is it still looks the same.  I didn't really change very much here.  At this at this time, so let me see here. Let me look at my app components.
[00:36:49] Essentially,
[00:36:51] Yeah, I was playing with different stuff here, but we're still basically on...
[00:36:57] Coffee script.
[00:36:59] components. See, I'm now using component register.
[00:37:03] which--
[00:37:04] which is for my web components.
[00:37:08] And yeah, is there another example here?  Let's look at row of insert.
[00:37:12] I don't -- this CoffeeScripts to syntax doesn't highlight properly.
[00:37:19] Okay.
[00:37:20] Yeah, proxy component.  Like, this is just terrible DX.  It was just me trying.
[00:37:26] keeping all the same stuff.  I do...
[00:37:29] end up
[00:37:30] improving this later, but essentially
[00:37:35] Yeah.
[00:37:36] Yeah, if anyone heard that on the back of the stream.
[00:37:43] Yeah.
[00:37:45] - Yeah, so anyway, like you can see that the stuff's  in a pretty different place.  Okay, so let's...
[00:37:50] Around this time, as I said, I made that realization about JSX and I was like, let me see here. Do I...
[00:37:58] JSX test.
[00:38:00] Yeah, here we go.
[00:38:01] I brought Acorn JSX in the project and I started
[00:38:05] creating a compiler using Acorn by hand that transforms JSX into
[00:38:12] create element calls and create text node calls.
[00:38:17] Thank you.
[00:38:19] Right. Which is kind of interesting. I don't -- I'm trying to -- where was I testing this? The funny thing is I don't actually see -- I see --
[00:38:33] the
[00:38:35] the the lib code for it but i don't actually see oh yeah if anyone's never seen coffee script for  jsx it's it's it's it's wild um but yeah the very big on the the things the web components
[00:38:49] So yeah, around this time is actually when Solid 1.0, or the-- sorry, not 1.0, when I first actually open sourced the project.  And I actually don't update this project with the updates till much later. What's kind of funny to me about this whole thing is
[00:39:06] Yeah.
[00:39:07] Thank you.
[00:39:08] I'm just going to show one more from this repo before we can move on. But
[00:39:14] Where was it?
[00:39:15] Maybe just jump all the way to the last time I updated it.  I mean, this seems crazy that it's like a year later  and I'm jumping way into the future here.  But the funniest thing about this is,
[00:39:25] is...
[00:39:27] Thank you.
[00:39:28] Bye.
[00:39:29] Yes, JSX is now in here.
[00:39:32] But...
[00:39:34] Look at the patterns I'm using here.
[00:39:37] I'm still using web components.  And I'm using them with recomposed style patterns.  So if I go in here and find solid here,
[00:39:49] Um,
[00:39:50] Thank you.
[00:39:51] I'm still...  Yeah, actually, the box benchmark was probably...
[00:39:55] the
[00:39:56] Better example, is there another one like that?
[00:40:01] Yeah, here we go.  Compose, list element.
[00:40:04] register my initial props,  draggable, and with solid width events.  So I was using this Hawk pattern.  I was very happy with it because you wouldn't actually...
[00:40:14] So far, if you've noticed, you don't actually go like
[00:40:17] create the primitives anywhere. There's no like create signal or create state or anything anywhere. They're all wrapped up in these hawks, essentially, and using web components. And I was so sure this was what the future of solid was going to be.
[00:40:33] Um,
[00:40:34] And I just wanted to show this because this is like –
[00:40:39] a year in the future, you know, it goes much further out. And this, this, this, this is what my, my experience was, like, picturing my ideal experience. Like, I was only starting to kind of get into the
[00:40:54] to these other patterns.  But yeah, this is-- you can actually see the hook stuff here.  I jumped too far ahead.  Anyways, let's--
[00:41:02] Anyway.
[00:41:09] What made me open sources?  Yeah, you're wondering, 'cause around this time,
[00:41:13] I showed some of this stuff and then I decided to open source it. We're going to jump across to that because there was one huge, huge reason I wanted to open source it.
[00:41:26] And you might have seen this before.  It's something called the JS Frameworks Benchmark.  I'd been playing with my circles for like two years, and I wanted to –
[00:41:36] Thank you.
[00:41:37] Okay.
[00:41:38] Bye.
[00:41:40] and I wanted to show off performance, right?  And the very...
[00:41:45] First time Solid got in the comparison was actually round eight.  It was like one of the last of the classic GS...
[00:41:54] benchmark runs. And let me see if I can find it here.
[00:41:58] Thank you.
[00:41:59] Thank you.
[00:42:02] Thank you.
[00:42:03] Yeah.
[00:42:05] I mean, it was pretty good. This was September 2018.
[00:42:10] Solids right here with a 105 over the fastest library. Vanilla,
[00:42:18] funny enough, was not the fastest. Dom C and Stage Zero were.
[00:42:23] And
[00:42:24] Thank you.
[00:42:27] And, uh,
[00:42:28] That's pretty funny because Dom C in stage zero,
[00:42:34] is we-- I used what I learned from there to actually make a better version of Vanilla and upgrade Vanilla.  And then I actually made solid faster too, eventually. And-- but essentially, this is-- what's the exact dates on this? This is published September 27, 2018.
[00:42:52] So you can see the players here, right?  Here's solid.
[00:42:56] Surplus, I told you about EV, fastest VDOM library.  Here's vanilla hand-optimized web components.
[00:43:03] Inferno.
[00:43:05] Knockout JSX, this is the library I made using my same compile technique with Knockout.
[00:43:11] What do we got? Dom VVM. Oh, standard web. This was the fastest web assembly.
[00:43:16] It's basically the same as vanilla, but in WebAssembly.
[00:43:21] Look.
[00:43:22] What do we got here?  Angular optimized.  About 124.  Where are we?
[00:43:27] This is like a very different time period, if you can go back to it.  View.
[00:43:32] View 2.5 at 1.4.  Actually, I think I passed over Preact.  Yeah, Preact was faster than both View and Svelte.  This is Svelte 2 time period.  This is before Svelte 3.
[00:43:42] Right.
[00:43:45] Angular, Marco, React, these two had been tied forever.
[00:43:51] Angular Ivy, Redux, Mithril,
[00:43:55] Lit, early version of Lit HTML here in the back.  And Angular 1, MobX.
[00:44:03] Ember and Knockout always at the end of the pack and something built on RxJS at the very end. This is the kind of scene when solid. This is not when I first submitted back in, I think, the summer before this, but this was the first time I got in the official results back in September 2018. So yeah, I guess that's almost five years.
[00:44:24] almost just under five years ago. Um,
[00:44:29] So, yeah, I mean, this is why I open sourced. I knew what I was doing was pretty fast. And I actually had some fun with this, right? Because you...
[00:44:40] I'm so fortunate to have those early commits to see what it was like to author solid during that time period.
[00:44:46] Yeah.
[00:44:47] But like...
[00:44:49] Like,
[00:44:50] The JS framework benchmark basically took over from this time. This is my first submission to the JS framework benchmark, solid point zero, zero point eight that I've released. And I'd switched to JavaScript, thankfully, although I think solid itself was still CoffeeScript at this time. But look,
[00:45:07] What is this default class app with a static template on it? It's funny because I get a lot of flack about the class components and stuff, but I use class components and mutable structures and all this stuff for years religiously. There's a reason I built the opinion that I have today.
[00:45:25] Um,
[00:45:26] So,
[00:45:27] Yeah, what is this? So we got some JSX.
[00:45:31] I love this because you can see--  I was trying to tell it not to wrap certain expressions  to not make them expensive.  See?
[00:45:40] Look at this.  Skip.  Tell the compiler not to wrap this expression.
[00:45:45] Yeah.
[00:45:47] No, I stopped using CoffeeScript.
[00:45:52] Thank you.
[00:45:54] Thank you.
[00:45:54] Yeah, I mean, it might seem like I just came out of nowhere and just smashed it, but I showed you, this was two years.
[00:46:03] of
[00:46:04] of like testing and
[00:46:06] And honestly, the most of that testing was just making circles really fast. But like,
[00:46:12] I tuned it for years even before.  So basically, the second that Solid came out,  it was basically one of the fastest options for--
[00:46:24] All right.
[00:46:25] Thank you.
[00:46:27] But yeah, I mean, it's funny because when we talk about performance on the client, you know, I can always be like, you know,
[00:46:33] Not much has changed in five years. Solid was the fastest five years ago. Performance doesn't matter. I've watched Vue and Svelte close the gap significantly. They've almost cleared half the distance now.
[00:46:47] over the last five years.  But we were basically where we are today five years ago.
[00:46:52] um
[00:46:53] But yeah, I mean, the ergonomics weren't as good.  Like, what is this?
[00:46:59] I had the trial and error to figure out what patterns I liked, right?
[00:47:05] This is the first submission.
[00:47:08] So solid and then state from solid.
[00:47:11] So you just the state, though, where is it getting? Yeah, new state.
[00:47:16] This state, OK.
[00:47:18] Thank you.
[00:47:19] Let's jump. I think my second submission was this one.
[00:47:25] Oh, there's a memo.
[00:47:29] Yeah.
[00:47:30] - Yeah.
[00:47:32] And I added some more stuff here.  And this is getting close to-- and what do we do here?
[00:47:39] So now I've got a bunch of extra stuff here,  because I'm trying to make select row good.  Based on my select row, benchmark sucked.  It always sucked, and it sucked with Knockout,  and it sucks in most frameworks.  And it always bugged me how select row in the benchmark--  let me see if I can get there.  This one was kind of always--
[00:47:57] quite poor.
[00:47:59] You're not seeing it here because most frameworks are decent.
[00:48:03] for some reason-- this is before they added the slowdown.  So you can't see this over the variance.  But what you'll see as time goes on  is that select row is one of the most annoying
[00:48:15] benchmarks because it just has this extra overhead and,
[00:48:20] I was trying to solve it.
[00:48:22] So yeah.
[00:48:23] Again, this is not great.
[00:48:26] I came up with this, like this is today we'd call this a cheater method.  Basically what I did was I came up with ways to create helper functions that set the DOM stuff
[00:48:35] like directly in a certain way. And then,
[00:48:39] I would, I was using surpluses custom binding syntax, which is function.  And then I would put that in here.  And then look, I changed it.
[00:48:51] to static to say that don't wrap this.  Like this is very manual from the DX point of view.  Obviously we have our state setters and stuff,  but this is just,
[00:49:00] This is all very manual.
[00:49:04] All right, so let's keep on going.
[00:49:08] I had a lot of fun with this.
[00:49:11] Let's see, one, two.
[00:49:14] I think very close we're going to get to around the time--  like, when was this PR?
[00:49:19] September 8th. So this is probably the one that was in that benchmark that I just saw you or just showed you. So
[00:49:26] I finally got rid of the stupid class. Actually, did I get rid of the class in this one?
[00:49:32] Yeah, I had Garmin the class on this one.  So this one's a bit better.  But we're making progress here now.
[00:49:38] Oh, yeah. So...
[00:49:41] I cleaned up a lot of that cruft.  I still needed something special for select.
[00:49:45] But you notice something here? There's no for component in these ones. I have like memo, which is what I call my map function here. I called it...
[00:49:57] I did something weird here was using map s from SJS, essentially.  I was, you know, and as yeah, like basically.
[00:50:07] There was no control flow in components.  And I was doing this kind of stuff all the time.  And then this was fun.  Do you see this double parentheses?
[00:50:16] This meant that this data will never change.  So this, you know how I had that static?
[00:50:22] thing before, I tried to use parentheses to indicate that if things are static,
[00:50:29] So yeah, I mean,
[00:50:32] It's so funny when you look at Solids API now in hindsight, you're like, oh, it's freaking obvious, right? Like, why would you just do anything different? But I really tried to do everything different that I could like trying to make things performant. And I said this, this, this version was what
[00:50:49] we were looking at for the table results, where solid was very close to the front of the list.
[00:50:55] Thank you.
[00:50:57] So, yeah, I mean, what can I say?
[00:51:04] Honestly, this select thing, like,
[00:51:06] was the bane of my existence. Like, it's funny, people think I did it for the benchmark. But I was, I had this problem with at our work with knockout, and I was trying to solve the solution.
[00:51:18] The problem is this, you could put,
[00:51:22] a select
[00:51:24] Like,
[00:51:25] in your model data.  You can go is selected.  But that taints your model data.  And this is like the classic MBVM problem.  And it's really quite awkward because like--
[00:51:37] you might want to use it in multiple places. IsSelected doesn't make any sense out of those contexts. You want to keep the model separate from
[00:51:45] from the selection state. So you have to use a projection and the projections are always expensive. So it's just
[00:51:52] It just really, it's quite...
[00:51:54] It's quite awkward. Anyway, so yeah, I mean, how many, how many are we at three?  Like I spent the most of the rest of 2018. Yeah, I got two more to show you.
[00:52:04] getting it, where were you?  This is November.  I added my MobX version of library now.  So I have KO JSX and MobX JSX.  And I actually, later when Vue releases their Vue version,  I came up with a Vue version basically.
[00:52:19] which is kind of cool because it looks like Evan's going to,
[00:52:22] basically make his own version of that pretty soon.  But essentially, yeah, here we go.  How's this one different?
[00:52:31] Still each
[00:52:32] Oh, yeah, this is a big one. We actually kept this API for a while. You notice that the doubles are gone. I changed it so that everything was static by default in Solid, which seems like dangerous. But then if something had the parens, the single parens, that meant it as dynamic. And this was actually the way that Solid worked for Solid.
[00:52:52] almost a year, I think. A lot of the early community, people like Joe, who was in the chat a  bit earlier, came on and they're just like, they hated this. But I, to this day, still love something  about this. And you might be going, "Why use the parans?"
[00:53:08] Why use the prints?  Well, do you know what the best thing about the prints were?  They didn't mess with TypeScript.
[00:53:13] Thank you.
[00:53:14] You know, people were like, oh, how about you use a dollar sign thing? And I was like, I was like, instead of viewing it like a function call or something, which it isn't, I viewed it as a special symbol, kind of like the kind of special symbols you might see in a...
[00:53:27] in, um,
[00:53:28] What do you call it?  Like Angular or something.  I viewed it as a Prenz bracket thing.  You always wrap the expression with it.
[00:53:35] And then that's how you knew it was dynamic.
[00:53:38] Um,
[00:53:40] like that it needs a wrapper.  You could have argued, well, you could have just passed in  a function at this point.
[00:53:45] But...
[00:53:46] And
[00:53:48] There is some merit to that.
[00:53:50] And in fact, arrow function might be less code, but I just liked it aesthetically.  I don't know.  It just...
[00:53:57] Like,
[00:53:58] Yeah, I was trying to make this friendly.  Like, if you notice the state object,
[00:54:06] It was built for people coming from React to a degree.  I thought no one would, like by this time,  Solid had signals already.
[00:54:14] Like, um,
[00:54:16] If I go back on GitHub, I had signals right from the first release of Solid.
[00:54:22] you know, because I was using SJS under the hood for a while too.  But it was just, I thought no one would use solid that way.  So I was actually like, I could have had better benchmark scores in the beginning  if I used the signals directly, but I was so,
[00:54:34] determined to show good developer experience,  that I used the slower proxies in the benchmarks,  just because I figured that no one would pick up a framework that  used the function getter setters.
[00:54:45] This is before hooks. I thought everyone just needed plain objects. So,
[00:54:50] That's a lot of where this came from. Even this kind of syntax. It lets you feel like everything is plain objects. It has all the same rules, destructuring that we know today. But this is where it was coming from.
[00:55:02] was this pre-getter?
[00:55:04] Yes.
[00:55:05] Yes, this is spectrum time period.
[00:55:08] Thank you.
[00:55:14] Yeah, exactly. It doesn't take much to make this actually quite nice.
[00:55:24] Thank you.
[00:55:25] Yeah, and the thing is, yeah, what I kind of glazed over here is the release of Solid also meant the release of my Babel JSX DOM expressions plugin.  I moved it from Acorn. It was just so much easier to move to JSX.
[00:55:40] And I mean, do I, is it still around Babel plugin? I mean, the original repo.  Because obviously, yeah, see, if you guys want to see a history lesson, you can actually find the original plugin.
[00:55:51] the original one before I made it into a mono repo, still intact here today.
[00:55:59] I literally did classic Ryan one filed it. This was also originally written in CoffeeScript. But this is a much simpler version. I generalized it for SSR eventually I generalized it for a bunch of stuff but this is a much simpler version of
[00:56:16] of it. It's still stupid. Like, how did I find anything in this, in this,
[00:56:22] 1200 line file. Don't ask me.
[00:56:25] Thank you.
[00:56:27] Actually, can I go back?
[00:56:30] Older.
[00:56:32] Let's look older.
[00:56:34] Yeah.
[00:56:35] Well, they're
[00:56:37] Can we get back to that, like...
[00:56:39] March 2018 look at, look at, to have classless. Yeah. Classless has been with us from the beginning. First commit.
[00:56:47] Yeah.
[00:56:48] Let's see if I can find it, because I'm pretty sure I had it all in one. Here we go.
[00:56:53] index.coffee. That sounds right, right?
[00:56:56] Thank you.
[00:56:56] Thank you.
[00:56:58] Can I show a file?
[00:57:00] Can I just-- I just want to look at it.  OK, whatever.
[00:57:05] Thank you.
[00:57:07] -
[00:57:10] Oh, wow, this is actually really short.  This probably didn't really do much of anything.
[00:57:15] Looking at it, let's move a little bit.  Fragment and attribute mapping.
[00:57:21] Fixed spreads, custom elements, add module name,
[00:57:24] Yeah, this is all the stuff for the solid original...
[00:57:28] release.
[00:57:29] I tried so many different things with fragments at the beginning.
[00:57:34] But I had settled at one point to use document frames.
[00:57:40] Thank you.
[00:57:40] Thank you.
[00:57:41] Thank you.
[00:57:45] Thank you.
[00:57:47] So, sorry, I'm just catching up on the chat here. I don't think Ryan does. Not initially. I mean, this is CoffeeScript go fast.
[00:57:57] kind of stuff. I was still a holdout in 2018. But luckily for everyone here, I was writing my  benchmarks and stuff in here. So yeah, this syntax I kind of liked quite for a while. And the last
[00:58:12] commit from 2018.
[00:58:15] is this one.
[00:58:17] And
[00:58:18] Again, think about timing.
[00:58:20] React hooks were announced October 2018.
[00:58:24] And
[00:58:25] You saw, you've all seen...
[00:58:30] What?
[00:58:31] like the API here, new state, and then the state has a setter on it.
[00:58:37] This always bugged me because to hit that setter, you had to go through the freaking...
[00:58:41] the proxy trap.
[00:58:43] At...
[00:58:46] Thank you.
[00:58:47] Thank you.
[00:58:48] Thank you.
[00:58:53] Can I actually address this for a second?  We'll actually talk about this later in the stream.
[00:58:57] If people are interested in this, because there's a catch here.
[00:59:04] It's kind of interesting, but yeah, we'll talk about this a bit later.
[00:59:09] Thank you.
[00:59:10] Thank you.
[00:59:11] Thank you.
[00:59:12] Thank you.
[00:59:13] Thank you.
[00:59:14] Right, because you can actually see in a lot of ways I did start in the same place as Vue and actually ended up coming completely different conclusions. And then five years later, they're kind of realizing that maybe, you know, some of those conclusions are actually good ideas.
[00:59:30] So we'll get to that in a minute. Anyway, moving on. So if you look at my last commit for 2018, React has solved my biggest problem.
[00:59:45] And that was...
[00:59:46] Like...
[00:59:48] That was like this use state thing. Because now I don't know, I never thought of the tuple. I just split the setter from the thing. And essentially, solid, I used
[01:00:00] use originally instead of create. But essentially, our proxies now had the proper separation and the path syntax. And this is starting to look modern. I loved when I released this. I was like, I thought I was so happy. I'm like, look at this implementation. 69 lines of code. This implementation is actually smaller than the Svelte, both in the amount of characters typed and
[01:00:24] Yeah, not actually in the output of code.  But this was slow and svelte in terms of the number of characters  typed in the white space and everything.  I measured it, and I was just very happy with myself.
[01:00:34] And it was the introduction of the control flow components.
[01:00:37] Because see this dollar sign?
[01:00:39] I decided that the helpers sucked. You could see it. They were fine. But it was like this messy kind of stuff. As soon as I did this, everything just...
[01:00:50] fell in. Obviously, we're still using our
[01:00:52] are friends at this point.
[01:00:54] But...
[01:00:56] Thank you.
[01:00:59] Amen.
[01:01:01] Thank you.
[01:01:01] Thank you.
[01:01:03] Thank you.
[01:01:04] Like, essentially, like, I had some other hooks on it to do some stuff. But this was like the beginning of...
[01:01:14] what I consider the modern look.  I basically realized that things are just much tighter  with control flow components and that
[01:01:23] we had the setter get things. So this takes, that was the end of 2018, essentially.
[01:01:32] So,
[01:01:33] What are you doing?
[01:01:34] Yeah.
[01:01:36] Yeah, I mean, I told you I'd go through the beginnings and stuff.  And this this this is really the beginning of where we went, obviously.
[01:01:45] From 2018, stuff started to kind of take off here quite a bit for me because hooks kind of shone light on my work and I'd open source the project. And I'm looking here, I'm kind of getting back to the beginning of the commits here.
[01:02:01] Yeah, March 2019 is when I actually started making a change log. So there's some gaps, obviously, in my documentation. But for me, one of my first big
[01:02:10] first big successes was in February 2019, literally actually on my birthday,
[01:02:22] or the day before my birthday, the latest version of the JS framework  benchmark went off.  And for the very first time,
[01:02:29] Um,
[01:02:29] Solid was the fastest library.
[01:02:32] And what I'd done was I was using document.createElement.
[01:02:36] And then I switched it to cloning DOM nodes.
[01:02:40] And that was like the moment we'd already kind of established the API, like, you know, like I'd shown in the previous one.  But I refactored everything to use clone node instead of document change element.  And at that point, like, I don't know if I can actually find it.
[01:03:01] Oh, it's-- yeah, I didn't link the one at the time.  It's too bad.
[01:03:07] Let's actually -- because this is right now. Let's see if we can find it.
[01:03:14] for fun.
[01:03:16] Because this was a moment official results page.
[01:03:19] I said it was Chrome 72.
[01:03:23] Oh, there's a gap here.
[01:03:25] That's before he started--
[01:03:27] It's before he started...
[01:03:30] That's too bad. So we've lost it. But it was before he started officially making the results. But I was pretty happy.
[01:03:39] Thank you.
[01:03:41] Thank you.
[01:03:45] I mean, if you've been paying attention, you should have already seen that. We're using JSX with like,
[01:03:56] Like--
[01:03:58] with very hook-like primitives. And then it was only-- hooks is what gave me the idea to use the tupple return.
[01:04:09] Thank you.
[01:04:10] So, yeah, I mean, this article probably -- it's funny. You can kind of see it in time because I imagine --
[01:04:20] Yeah, yeah.
[01:04:21] Amen.
[01:04:22] No one was really paying attention to what I was doing at this point. But it was a moment for me, at least. I started writing articles around this time because once Hooks came out, I was like, I'm on to something. I don't think anyone realizes it yet, but I felt like I was on to something.
[01:04:37] And
[01:04:38] I continued to play with stuff for a while and it,
[01:04:42] It wasn't
[01:04:43] I just kept on writing and playing and writing and playing. And a funny thing is I wasn't on social. I wasn't boosting it. I just kept on writing and learning stuff. And
[01:04:51] I started realizing that I was onto something basically.
[01:04:55] Can I show you all what I'm talking about for a minute?  I'm going to use Excalibur.  It makes it easier for me.  But essentially...
[01:05:02] Okay, you know what? Screw that. Let's make a line.
[01:05:06] I was starting to kind of view
[01:05:08] things on two axes. I love these four quadrant grids. Everyone knows I love these four quadrant grids. And,
[01:05:16] Thank you.
[01:05:18] In my mind, there was a couple things going on.  The one axis was about...
[01:05:24] like the up and down axes,
[01:05:29] was about values.
[01:05:36] Thank you.
[01:05:37] And for me, the right to left axis, like this one, was about technology, like top down versus
[01:05:45] events or whatever.  And
[01:05:48] Thank you.
[01:05:49] And I've never given this graph the best job.  People will...
[01:05:54] come to me and be like, what do you mean by this graph? Just feel me on this for a second to understand where I'm coming from. The web started over here. We had like the backbone. Change the color so that it doesn't mix. It's stuff like
[01:06:12] Yeah, something.
[01:06:16] We like backbone.
[01:06:18] And we had
[01:06:21] We had maybe Angular over here, right?  And I'm talking, you know, we're looking at 2010 right now.  Like, let me put a year in here just so people can kind of view this after the fact can kind of keep going.
[01:06:36] this in mind. So I'm going to slowly fill in this table as the time goes on here. But essentially,
[01:06:45] Stuff was kind of sitting over here.
[01:06:47] And, you know,
[01:06:49] Suddenly...
[01:06:51] Thank you.
[01:06:52] you know, at some point,
[01:06:54] during this time period.
[01:06:57] We start, people are like,
[01:06:59] we can't do this kind of top-down inner HTML kind of thing.  And they start kind of going over here.
[01:07:05] And this is where buddy knockout comes in. And essentially,
[01:07:12] Yeah, isn't where it's starting the way. I'm talking about JavaScript frameworks, history of JavaScript frameworks.
[01:07:17] Right. And
[01:07:19] And people were kind of like, oh, we got to go over here.  So suddenly, like, Knockout started getting some friends.
[01:07:26] View.
[01:07:28] And--
[01:07:31] Can.js and reactive.
[01:07:37] Okay?  So now I've got a bunch of friends.
[01:07:41] And then...
[01:07:43] Suddenly, someone showed up over here, and they're like, we're called React.
[01:07:48] And--
[01:07:50] Thank you.
[01:07:53] And if you look at this, React is diametrically as opposite from these as possible.
[01:08:03] Okay.
[01:08:04] Don't get me wrong with the timing.  View probably came after the original React.  Roughly, I'm just...
[01:08:09] like so our time scale has now jumped and we're in like 2014 let's say okay so
[01:08:19] OK, and reactive was much later in this game, too.  That's Svelte's, Rich's, Harris's library for Svelte's.
[01:08:26] And what ended up happening-- oh, sorry.  I missed a big one that I like.
[01:08:30] Ember.
[01:08:33] Ember was really close to line over here, let's say.  But let's give Ember some props over here. OK.  And then everyone was like, holy crap.  Look at what React's doing.
[01:08:45] What ended up happening is these guys started going, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee, ee.
[01:08:51] They didn't cross the value line, they just changed the technology.
[01:08:56] And,
[01:08:58] these guys kind of went,  we'll just tiptoe just over it.  And
[01:09:04] Thank you.
[01:09:05] Thank you.
[01:09:06] And everyone who stayed in this area here,
[01:09:11] got turned, became like no zone.
[01:09:20] Go Bide.
[01:09:22] Thank you.
[01:09:23] And
[01:09:29] Before long, we had other libraries down here, like
[01:09:34] Thank you.
[01:09:35] I don't know, CREAC.
[01:09:39] Thank you.
[01:09:41] And another one, for now. Okay. And I'm not gonna lie, I loved being over here.
[01:09:50] But this place was absolute chaos.
[01:09:56] Okay.
[01:09:57] To be fair, Angular isn't actually that far to the left. I'm being kind of
[01:10:03] I'm, I'm, I'm, the exact position is a little bit, you know,
[01:10:08] off perhaps, but basically React showed that you could be on this side of the hemisphere
[01:10:15] and still be performant.  And everyone was so happy to get rid of all the chaos  of those here that they all kind of walked across the line.
[01:10:23] And I was just like sitting here and I'm like,
[01:10:26] You know what? Damn, you guys are right.
[01:10:29] This area is kind of a mess.
[01:10:33] And
[01:10:35] So we fast forward to 2016. And I'm like, like, these are like long dead at this point. And I'm like, why is there no one down here? Why is there no one over here?
[01:10:52] Thank you.
[01:10:53] Why is there no one over here? And this was
[01:10:58] Like for me, this just made a lot of sense because
[01:11:02] When you look at React, you can make two decisions.
[01:11:06] You could go, oh, they solved the problem with technology.
[01:11:11] Or you could go, they solved the problem with values.  Which is more important?
[01:11:17] Thank you.
[01:11:18] I felt that it was the value and the patterns, not the technology, that was more important.
[01:11:25] So I showed you, I went through all the stuff. Solid was here and here and playing around, you know, and...
[01:11:34] It's funny.
[01:11:36] what's happening right now.  Cause like if you go,  let's get,  let's,  let's go into 2000 and,
[01:11:43] 20. Let's fast forward a bit.
[01:11:46] Thank you.
[01:11:49] Thank you.
[01:11:51] We have-- that's felt.
[01:11:54] Bye.
[01:11:55] I'm putting spells here.  Weird, people might think.
[01:11:59] It's actually kind of like
[01:12:03] like here.
[01:12:07] Maybe.
[01:12:10] But...
[01:12:10] Do you understand?  When React came out,
[01:12:15] Everyone was over here and it was diametrically opposite and it basically killed everyone
[01:12:22] that wasn't
[01:12:24] who didn't come back, you know, into this side.
[01:12:28] And
[01:12:30] What's happening right now, no one was really paying attention, but React itself has been slowly, slowly creeping this way. Slowly, slowly, slowly creeping this way.  While everyone was busy going, oh, this way, that way, this way, that way. What's going on now? View's like, oh, I want to come back over here too. I can't make up my mind.
[01:12:50] Like...
[01:12:51] Like there's this...
[01:12:53] like...
[01:12:55] This is sort of why I feel like I realized, I started realizing that I'd carved out a space with solid.
[01:13:04] because it was in a different zone.
[01:13:10] Yeah, I told you everyone at the beginning that these axes are really...
[01:13:16] vague in a sense because they're like
[01:13:19] where I view...
[01:13:21] Like this is more of like this is part impression.
[01:13:24] as it is like exacts.
[01:13:28] Thank you.
[01:13:28] Thank you.
[01:13:29] Yeah, I mean, that's what I said at the very beginning, that the axes one completely makes sense to people. Essentially,
[01:13:38] On the technology side, it's roughly, we're talking about coarse-grained to fine-grained, roughly speaking.
[01:13:46] And on the value side, we're talking about mutable to immutable.
[01:13:52] like roughly, but that's, that's,
[01:13:56] too oversimplified.
[01:14:00] Thank you.
[01:14:00] It's the difference between unidirectional flow and like,
[01:14:07] Two-way binding and like two-way bindings up here and mutability and unidirectional flow and immutability is like over here.
[01:14:15] if that makes sense.  Like it's, it's, it's about the philosophy.  When I say that react and solid share philosophy, it's,  it's also about things like the reason the focus on primitives versus the
[01:14:27] the focus on frameworks. Like,
[01:14:32] it's
[01:14:33] It's hard for me to give it a single axis to tie all those concepts together, but you actually see like...
[01:14:44] Right, like this side tends to value frameworks and tends to value mutability.
[01:14:51] maybe object-oriented programming type stuff.  This tends to value primitives, functional programming,  immutability.
[01:14:57] unidirectional flow
[01:15:00] Thank you.
[01:15:01] Right.
[01:15:02] Thank you.
[01:15:03] And...
[01:15:08] Thank you.
[01:15:08] So essentially what I'm getting at is when you have certain values and certain kind of fine grained technologies, things become chaotic.
[01:15:18] Thank you.
[01:15:19] But React had basically showed the prototype.  They solved both problems.
[01:15:25] Perhaps. The only qualm I've ever had with React was the technology choice.
[01:15:30] I'm saying from here we had two options. We go this way, we go this way. Everyone went this way for some reason. They saw the technology, they saw the VDOM, and they're like, that's what's important.
[01:15:40] I was like, no, what's important is the unidirectional flow,  control patterns.  Build a large app in these frameworks over here.  And the chaos isn't because you're using
[01:15:51] a VDOM, or not using a VDOM, rather.  It's because of the patterns you use.
[01:15:57] Thank you.
[01:15:58] Yeah.
[01:15:59] Thank you.
[01:16:01] Maybe you could put library versus framework on this.  I'm just, there is...
[01:16:08] a certain...
[01:16:09] split here a mentality.
[01:16:12] And that's why I'm being kind of vague here.  Cause I can,  I can make this access like six different things,  but funny enough,
[01:16:19] Frameworks do tend to stay on the same side when I talk about them.
[01:16:25] opting to untrack and not track is actually on the technology side, right? That's on this side, right? I guess more.
[01:16:33] I mean, but yes, I wanted to point this out.  Maybe this graph makes no sense to anyone except for me.  But this was my guiding star.  And this is when I started to realize  that we'd carved a space.
[01:16:47] And it really, you know, this realization happened for me in 2019, that solid was in its own space, you know, just because of the difference in philosophy and technology.
[01:17:04] Ha.
[01:17:07] Yeah, I'm sorry.
[01:17:12] Oh, man. I'm trying here. Let's move on from this.
[01:17:23] Yeah.
[01:17:23] Thank you.
[01:17:25] Thank you.
[01:17:27] Yeah, roughly.  Yeah.
[01:17:30] Something along these kind of
[01:17:33] kind of lines, right?
[01:17:36] It's just interesting to me because
[01:17:39] Um,
[01:17:40] I've always felt that React picked a place and knew...
[01:17:44] where it wanted to be and knew its direction.
[01:17:48] Angular never really moved.
[01:17:50] And I respect it for that.
[01:17:54] It's more interesting to see certain frameworks that be influenced
[01:18:01] a bit more by public opinion and that drive stuff.  Because you can actually-- it makes a lot of work,  because when you migrate from one thing to the other or updates,
[01:18:12] Sometimes that even gets confused for innovation.
[01:18:15] Right?
[01:18:15] Like you might think, oh, because this framework keeps on adding new things and like and, you know, changing the paradigm that they're innovating.  But they also in another perspective, they could just be walking circles over this these axes, essentially.
[01:18:32] This is just kind of where I was coming from, where I was thinking.
[01:18:40] Yes.
[01:18:42] Yes, yes. Knockout, I mean, I have shown this in other videos, but you know what I love about Knockout?
[01:18:48] You can come back to this website.  Hasn't basically changed in 12 years.  And just go straight and there's live examples.  They were the first ones to have the good tutorials,  you know, interactive tutorials.  But where am I?  Uh...
[01:19:02] Knockout had three ideas.  They had observables...
[01:19:10] They had computeds.
[01:19:12] Peace.
[01:19:13] And they had
[01:19:15] Yeah, I mean, mostly observables and computeds, but then they also had pure computers eventually. But essentially, they developed what I consider today's modern reactive language. The same thing that Svelte has with dollar signs and lets, same thing that Vue has with refs, computeds and watches.
[01:19:29] Knockout had this pattern, and even hooks resemble them when you squint. I've done some talks about that.
[01:19:37] Thank you.
[01:19:39] Thank you.
[01:19:41] Yeah.
[01:19:42] But, yeah, I mean, we're kind of...
[01:19:47] This is just when I started realizing that I was onto something, you know,
[01:19:53] kind of in porn here.
[01:19:55] Thank you.
[01:19:55] -
[01:19:57] Mm-hmm.
[01:19:57] Or push-pull? I mean, I don't know. I don't know if it was a first. I mean, a lot of stuff happened in academia, but like from a JS framework standpoint, I'd say Knockout is standout. Both RX and Knockout came out of Microsoft in the late 2000s.
[01:20:12] Thank you.
[01:20:14] Anyway, sorry, I'm hoping this graphic sort of
[01:20:19] sinks in. My final point here is, Solids sitting over here, interestingly enough,
[01:20:28] In the same way React sitting over here,
[01:20:30] I feel like solid challenges this side more. People always wondered why
[01:20:37] Um,
[01:20:39] like you can kind of get why the dialogue about solid versus react is kind of
[01:20:46] funny, like how I have such respect for react. Part of it is I see this arrow. So like maybe  solid sitting where reacts heading in a certain way, not technology, exactly like reaction.  I'm going to cross this line, but like, maybe there's a bit of that, but I think it's more  of like, like the same thing here. We're,
[01:21:02] actually more opposite to the other reactive libraries than we are to React.
[01:21:10] It's a difference in values.
[01:21:14] And the difference in like rendering technology meant things.  I mean, it does sound like Vue is going to try and
[01:21:21] introduce something over here maybe, and we'll see if that catches. But this is a dangerous place to be in.
[01:21:30] Anyway, okay, so yeah, let's move on a little bit from there. This was big for me because it meant that I had a reason to continue. When hooks came out, I wasn't like, oh, I guess, you know, I'm done.
[01:21:45] And,
[01:21:47] But probably the most...
[01:21:52] How should I put it? I won't say fundamental, but one of my most
[01:21:56] If there's like one article you read from me, probably ever, this is probably the one.
[01:22:02] This is the most...
[01:22:04] influential article.  This is one I found out later probably ended up getting me  hired by Marco.
[01:22:10] I did a test that
[01:22:12] then no one really does.  I took the JS framework benchmark,  and I took Web Components too, actually.  And at this point, I was trying to show that there's overhead to Web Components,  but that wasn't really my goal.  I took the fastest libraries,
[01:22:26] in their own type of thing.  I took the fastest feed-on library,  the fastest lit library, fastest, you know,
[01:22:32] reactive library solid and Svelte fast compiler library.
[01:22:37] I...
[01:22:38] I said, what the hell happens if instead of just testing how many-- we do 10,000 rows, what if we scale up the components? What if we put 10,000 components on the page?
[01:22:48] And the funny thing is everyone talks about the update performance,  the VDOMs and the re-renders, but if you write optimal VDOM code,
[01:22:57] The cost of components,
[01:22:59] are basically nothing.
[01:23:02] Look, the memory is nothing.
[01:23:03] The performance is nothing.  This is only going 0.04, going from one component
[01:23:10] or actually this is the minimum necessary for EV, so probably one per row.
[01:23:15] Because VDOMs use components for change.  Like they need components.  You can't get away from components in a VDOM.  You actually want more components, you get worse performance.  Where in a reactive system, components are usually an extra boundary and they're actually expensive.  So I was like very impressed with the performance of the VDOM on this side.
[01:23:30] And then,
[01:23:31] I took lit and things didn't go so well.
[01:23:35] And I took...
[01:23:36] I'm going to jump down.
[01:23:40] Things didn't go so well either.
[01:23:43] But solid wasn't quite as good as the VDOM, but it was close enough.
[01:23:48] Thank you.
[01:23:49] And actually, it is actually the same gap spread if you look at it.
[01:23:52] The memory was actually almost flat because
[01:23:56] We're not making nodes per. It's only solid scales with interactivity, not with number of DOM nodes.
[01:24:06] in the chat.
[01:24:07] And this completely warped, not warped, but changed my perspective on things.  Because I was, you saw that.  I was using web components at this time.  You saw my examples, you know, a little while ago.
[01:24:21] when I was using Web Components.
[01:24:24] And essentially,
[01:24:27] I'm just like, components are free.
[01:24:29] They don't always scale.
[01:24:32] In fact, virtual DOM libraries are incredible at scaling  components where most other libraries kind of
[01:24:37] aren't great.
[01:24:39] And I was trying to say, even with being pre-compiled,  Svelte and Svelte were completely different, because Svelte still relied on components.
[01:24:46] the reactive system still feeds into a component system.  The same is true with Vue.
[01:24:52] And I basically introduced this idea here.  Conversely, solids components are ephemeral.  In this, they disappear as soon as they are run.
[01:24:58] the whole disappearing component things.
[01:25:01] So I made a claim back in 2019, I said, and this is going to be more relevant moving forward, but basically that, you know, Rich Harris says frameworks aren't there to organize their code, but to organize your mind, you know, like the whole disappearing framework thing. And I basically feel the same way about components.
[01:25:20] And I went as far as saying, I'm going to make a bold claim  for the non-virtual DOM crowd.  I think components should vanish the same way as frameworks.  If the new world is compilers, we can do better.  We can optimize along bundled chunk lines instead of ES modules.  If components are throwaway, think about how much overhead we  produce by inlining them in the right scenarios.  If components aren't necessary mechanisms for change,  like virtual DOM libraries--
[01:25:38] What is to stop a two-year-old
[01:25:40] a level two implementation from being compiled into a level zero equivalent.
[01:25:45] I'm pretty sure this is why Marco team hired me.  I wrote that and they're like, OK, this is what we want to do.
[01:25:49] Um,
[01:25:51] And I said this is a challenging statement coming from someone who believes in web components.
[01:25:55] I'm sure web components performance will continue to improve,  and they're attractive as a common interface.
[01:26:00] a bit like microservices,
[01:26:02] but will they ever be more than an export format?  Dedicated libraries will always have a leg up.
[01:26:08] because they have no reason to take on that overhead.
[01:26:11] Thank you.
[01:26:12] Thank you.
[01:26:13] Thank you.
[01:26:16] Yeah.
[01:26:18] How are you guys doing in chat?
[01:26:24] Thank you.
[01:26:25] Thank you.
[01:26:34] So, yeah, actually, let me, two seconds, I'm just going to grab my charger. My computer, I forgot to plug it in, I was in a rush to get started here, so give me two seconds. You can check out this awesome SolidJS shirt while I'm doing this.
[01:26:49] All right.
[01:26:54] So we've been focusing a lot on the past, right?
[01:27:00] Which is good because we're, you know...
[01:27:04] Yes.
[01:27:07] Thank you.
[01:27:07] Yeah.
[01:27:08] Yes, Vue didn't have to go the way it did. Vue chose-- Vue 1 was kind of like solid. Vue chose to go VDOM. They chose to make their system around components.
[01:27:18] Thank you.
[01:27:21] But yeah, this is fundamental to things. And this will come up more later, but I'm hoping
[01:27:29] I'm hoping this kind of thing
[01:27:34] So the funny thing is,
[01:27:39] Yes. Solid was killing it at benchmarks. Solid was -- I was writing tons of articles. I was  making really good observations. I was doing a ton of benchmarks. This period I actually wrote a ton  of articles about web performance, fastest way to render the DOM, all this stuff. So I started  like getting out there, right? I had a pretty good understanding of all the fastest techniques, right?  Svelte 3 came out sometime during this time period as well.
[01:28:03] Yeah, a lot, you know, it's kind of interesting because Svelte's,
[01:28:06] came out November 2016. That's when Rich's first commit was. And it's funny, Sol had started,  what is the August 2016? It's like they're almost the same age. It just felt kind of got to be three  much quicker. I was very slow and meticulous to make sure that the approach I had, like I liked  it. It was it was a hard journey. But eventually,
[01:28:28] I, I, I, I'm here by myself shouting into the wind, so to speak, like who cares?
[01:28:34] And
[01:28:36] Thank you.
[01:28:37] Thank you.
[01:28:38] Yeah.
[01:28:42] And essentially, yeah, I mean, I joined Twitter and Twitter was brutal when I first joined.
[01:28:53] Thank you.
[01:28:54] And some of my first interactions were like this, where someone's like, Ryan says that solid's faster than svelte.
[01:29:01] What do you say about that Rich Harris?
[01:29:06] He's like, I don't know.  He's like...
[01:29:08] Thanks.
[01:29:09] He's like, these are some things that we haven't looked at yet.  We will get to them eventually.
[01:29:12] And they're on the list.  We opened some issues on the GitHub.  So that's great.
[01:29:17] I'm like, look, honestly, I've just been focusing on performance for four years and React API parity.
[01:29:22] I only signed up for Twitter yesterday.
[01:29:24] That's pretty much sums up the trade-offs for me.
[01:29:28] My whole joke here is like, I was so busy doing stuff.  I didn't join Twitter.  Essentially that was the trade-off.  Svelte had no community.  Svelte had like,
[01:29:37] grown huge by this point. And even though they're created about the same time,
[01:29:43] But...
[01:29:43] you know, here I am.
[01:29:46] Right. So, yeah, it was good because this started a good relationship with people like Rich.  Rich was really helpful early on for me.  Yeah.
[01:29:56] We had some disagreements.  For example, like what JSX is.
[01:30:00] We still don't disagree to this day.
[01:30:05] He's basically-- he's like, solid is using a JSX like DSL, not JSX.  And I'm like, no, that's what hyperscript is.
[01:30:11] Cheers.
[01:30:13] What do you call JSX is Hyperscript, runtime-based composing.  But not all my interactions were this pleasant when I got into this.  Because I realized that I had no community.
[01:30:24] This is great.
[01:30:25] And I was fine with that because I wasn't trying to win people over.  I originally I was just building a framework, doing good at benchmarks.  React releases hooks and I'm suddenly like,
[01:30:33] I basically joined
[01:30:35] I basically did some more writing and did some more stuff and got sold in a really nice place after that. But then I was like, OK, well,
[01:30:42] Maybe I should give this a go. Maybe people will be interested in it. And
[01:30:46] Um,
[01:30:48] You know, it was challenging at first.  Like people didn't believe me.
[01:30:55] If you're claiming to be the first person to actually succeed  in complying arbitrary JSX into low-level DOM manipulation,  then that's really cool.  But that's the question you gave before.
[01:31:02] But I'm like, JSX is compiled.
[01:31:05] True ADM, like Dom Ganaway got a handful of times people tapped Dom from Inferno on the shoulder because he was working on compiler for React at the time. And they're like, Ryan has claimed to have done ahead of time compiled JSX that's felt like Dom manipulation. I assume it only supports a subset of JSX given the massive resources Facebook tried to put on Prevac, but I've been surprised before.
[01:31:26] Um,
[01:31:28] Thank you.
[01:31:28] People just were not--
[01:31:31] looking for this. They're not expecting this. I had some people come on and were telling me,  like, even like I was, I crafted thread for SWIX at one point that he was like trying to explain  the benefits of template DSLs over JSX, right? I think I saw someone in chat mentioned something.
[01:31:48] a while back.
[01:31:52] Yeah, yeah. I mean, it's completely garbage, right? JSX is just a templating language. Any kind of assumptions here is just completely unfounded.
[01:32:02] And, um,
[01:32:04] It's template magic, JSX magic, no, they're all just templating languages. I always -- I
[01:32:15] with specification.
[01:32:18] Let's look it up.
[01:32:19] JSX is an XML-like syntax extension to ECMAScript without any defined semantics.
[01:32:26] Thank you.
[01:32:27] I mean, that's the first sentence.
[01:32:29] I mean,
[01:32:32] be.
[01:32:33] JSX is so powerful for other reasons. I didn't even realize how powerful I chose JSX because it made it easier to not have to deal with all these parsers and stuff like I was showing earlier.
[01:32:43] But JSX is just like...
[01:32:45] Now that I'm there, I'm like, yeah, there's places I wish it was better, but it is so much more fluid than dealing with most templating things. And it's still statically analyzable, which is huge. But yeah, I mean...
[01:32:57] Adam's great now and honestly, because of these kind of interactions with these people like Rich and
[01:33:09] you know,
[01:33:10] and Adam and whatnot, I actually ended up meeting really great people. Dom's been a great supporter,  Rich has been a great supporter. When the Fireship video blew up and I was like in Vancouver,  like with the family trying to do a vacation, Rich was actually explaining to people on Twitter  how Solid's reactivity worked.
[01:33:29] I mean, class act, that guy. So
[01:33:33] Yeah, I mean,
[01:33:35] Thank you.
[01:33:35] It...
[01:33:36] But yeah, there was a lot of friction is a light way of putting it. People saying really unfounded stuff about like, oh, JSX is over here, templates are over here. And it just didn't make any sense to me, right? And
[01:33:51] Like, yeah, I mean, that's why I sometimes get pulled into those syntax conversations because like,
[01:33:57] I can always find an example of something that is ugly in a templating language. There's always exceptions. There's always different patterns they enable.
[01:34:06] It's a silly thing.  I just...
[01:34:09] Some people go, oh, these can be compiled more performantly and all this stuff.  Anytime anyone makes any of those, I have to play devil's advocate because they generally don't know what they're talking about.
[01:34:21] Moving on.
[01:34:23] And, yeah, it's like...
[01:34:28] stuff just kept on going on. Obviously JS framework benchmark didn't stay like this, right?
[01:34:35] I mean...
[01:34:38] I've like...
[01:34:41] it's funny because stuff is going to ebb and float.  I'm trying to remember, was 99 a good one?  Who knows?  Solid is still...
[01:34:48] What's this? 106 over vanilla. Solid's still in the same zone it was back then.
[01:34:54] Other things have moved or changed over time, like
[01:35:00] Um...
[01:35:02] Preact is actually in the exact same relative place.  View has gone faster over the time.  Where's Svelte? Svelte should be in here somewhere.
[01:35:12] Why can't I see Svelte? Svelte has gone a little, yeah, Svelte's here too. Yeah. Svelte's gone faster.  You know, now I could argue, nowadays, you're right. The performance difference is that maybe that
[01:35:23] 15, 20% on these giant benchmarks. It doesn't matter. It wasn't always that way. And but as I said,
[01:35:29] It's cool to see that because Solid hasn't really done anything for performance in five years and everyone else is just kind of in...
[01:35:35] catching up. So,
[01:35:37] Um,
[01:35:38] You know, it makes sense.
[01:35:41] It's hard to get much faster. There's a handful of libraries and techniques that are basically
[01:35:48] negligible performance gain difference.  And it takes a while to get the DX good for those.
[01:35:54] Right? So,
[01:35:56] Thank you.
[01:35:57] Yeah.
[01:35:57] Yeah, I mean, this is all great, but finally, like, I was having a hard time at it. I felt by myself on Twitter. I felt kind of...
[01:36:10] alone a bit because I was writing these articles.  People weren't getting it.  People were suspect of what I was doing.
[01:36:18] And I actually-- but community was starting to form here.  And actually, I pulled this up here because
[01:36:26] This is actually how Solid ended up with his first or second core team member.  I put a lookout for logos because I used a logo generator to come with Solid's logo, and it was like terrible.  And that's not it.  But people actually came in.
[01:36:42] and tried to come up with new logos for it.  And David ended up joining us through this because he
[01:36:49] I actually still like this snake. He was playing on the snake thing.
[01:36:53] But, uh...
[01:36:54] Yeah.
[01:36:56] Solid pizza box.
[01:36:59] - Oh, right.
[01:37:05] This is, we kind of, we were on Gitter by this point.
[01:37:09] Oh,
[01:37:10] Okay.
[01:37:10] Solid Ducks.
[01:37:12] Yeah.
[01:37:13] Um...
[01:37:16] But yeah, I mean, this was basically...
[01:37:22] a starting point for us on community. I'd been doing this all by myself and I finally decided to ask for help.
[01:37:31] I was like,
[01:37:31] I'm not a designer. Please, please help me.
[01:37:35] And David joined on as a community manager.  We moved to Discord.
[01:37:40] And we started figuring out ways to actually engage the community, which is huge. Right. So, yeah, this is November 2019. But yeah, I'd say January 2020, this kind of started up and we start getting really important libraries.
[01:37:57] Um,
[01:37:59] in the ecosystem, right? Like I think so April, we got Solid Router. I don't know if anyone's seen the original one. This one eventually got merged into Solid App Router, which I wrote. But the original Solid Router, which is basically like React Router for Solid,
[01:38:19] came around and we started building better examples, real world demo, all this kind of stuff.
[01:38:26] And, yeah, we're quickly catching up to the present here.  So, you know, we got our first hacker.  No, that's not what I want.  Where is it?
[01:38:37] We got our first Hacker News front page.  It's kind of funny here.  Some people are so nice.  I see the author, lots of typical negative comments  being thrown at him.  Ignore them.  Keep up the good work.  It wasn't the best debut.
[01:38:55] You know, a lot of people were like, you can see whenever they're faded out.
[01:39:00] You know, like there's like there's it wasn't actually as bad in hindsight.  But I remember there's people there's like people like why even write a library like this?  You should just give up.
[01:39:09] you know
[01:39:11] JS devs like to reinvent the wheel.
[01:39:16] there's a big threat here.  If your library framework's goal is to make it life  slightly better, just don't do it.
[01:39:22] yeah
[01:39:24] Thank you.
[01:39:25] Give up.  Oh, man.
[01:39:32] Yeah, I mean...
[01:39:38] Something got deleted.
[01:39:40] You have higher chances of starting a unicorn company than creating a JS library that is widely adopted.  Yeah, thank you.
[01:39:46] Um,
[01:39:48] Yeah.
[01:39:50] I mean...
[01:39:52] Thank you.
[01:39:53] Reddit was like this too. I mean...
[01:39:57] It was tricky to navigate at the beginning because really no one at that point wanted a new JavaScript library. But we kept on going, right? Solid Playground was first created in September 2020.
[01:40:09] Solid App Router,
[01:40:11] that we use today.
[01:40:13] Thank you.
[01:40:13] Um,
[01:40:15] Yeah, when did I do first commit? Yeah, October 25th. Yeah, so this nested routing, parallelized data fetching, loaders, all this stuff kind of built in back in...
[01:40:27] in October 2020, you know,
[01:40:30] And we eventually merged it with Solid Router to actually  become our modern Solid App Router, which has both paradigms.  But things started shaping up.
[01:40:42] Um,
[01:40:44] To this point, it was only client side. So we added SSR. And most of 2020 was me working on SSR.
[01:40:56] Thank you.
[01:40:57] Yeah, you're right, yes.
[01:41:00] Alex joined on around the time he did he did the he did the original playground. He did the VEAT plugin, which is going to come up really, really important. And, you know, Ryan ended up joining on with the router and the core team started forming piece by piece as the library and the ecosystem build out.
[01:41:27] If you want to see a good--  I suggest anyone who wants to see about the whole React Forget  thing, watch my talk at JS Nation coming up.
[01:41:36] in a bit.  I think it's June 20th.  I'm talking at JS Nation in Amsterdam.  And my talk is basically--
[01:41:47] A huge part of it is about the example from React for good.
[01:41:50] it
[01:41:51] So yeah, anyway.  Yeah, so okay.
[01:41:57] Yeah, I mean--
[01:41:59] Synchronous data.
[01:42:00] This is probably when I added the data functions that we use today.  It doesn't really matter.  Like, solid...
[01:42:07] from 2019 was kind of in the same form. We just kept on adding, growing the ecosystem.
[01:42:13] I
[01:42:15] Yeah.
[01:42:16] worked on server rendering. And obviously, like, where were we at this point? Yeah, same story, right?  This is what I'm talking about select row, how most frameworks had a really hard time with it.
[01:42:27] but I wanted to solve it with solid.
[01:42:30] Yeah.
[01:42:31] you know,
[01:42:33] Thank you.
[01:42:34] Thank you.
[01:42:36] Thank you.
[01:42:37] But server rendering was a different thing. I came into this boat and I was like,
[01:42:42] Marco.
[01:42:43] Holy crap.
[01:42:44] Everyone else kind of...
[01:42:47] you know,
[01:42:48] Like Inferno actually has a bug where they're not escaping stuff.  Inferno should be more like,
[01:42:53] around 10,000 in this, but it's, Inferno is still pretty impressive.  But generally speaking, I was just like, what's going on here?  And I tried to take Solid's JavaScript on the server with JS DOM,
[01:43:06] And even like Linkdom and all stuff like Andrea's work here.  I was looking into his techniques, like web reflection.
[01:43:12] I couldn't get even as fast as like pre-act or react on server rendering. It was just terrible.
[01:43:17] Um, it was.
[01:43:18] When you close, I was like 10 times slower.  Yeah, I was like 10 times slower than React and server rendering.  So I actually had to come up with a whole different approach.
[01:43:26] Um,
[01:43:27] And that approach involves concatenating strings and removing reactivity.
[01:43:33] which is kind of crazy, but that's what Marco was doing.  And once I did that,
[01:43:40] It became very clear to me that I only needed to focus on the synchronous part of rendering, essentially, like on just the string and catting, because reactivity wasn't everywhere. I needed special primitives to handle it. And those special primitives were resources. But luckily enough, I'd already implemented suspense. I skipped that. I implemented suspense back in 2019.
[01:44:00] Um,
[01:44:01] Yeah, sorry, I jumped over this.
[01:44:03] Yeah, see how I showed that first commit that I asked me to change log for May 18, 2019.
[01:44:11] Add suspense control flow.
[01:44:14] Um, so, yeah.
[01:44:17] Yeah, essentially...
[01:44:20] Yeah, we had the primitives we needed, and this actually allowed me to add streaming.
[01:44:25] right out the gate with--
[01:44:29] with
[01:44:30] Sorry, where is it?  With solid server-side rendering.  So we had streaming and suspense on the server.
[01:44:36] I guess a couple of years ago and essentially,
[01:44:41] Because I knew that I could just focus on the string stuff, I worked and I worked.  And in the end...
[01:44:47] Solid was about as fast as Inferno in this benchmark, and I thought that I tapped out, essentially.
[01:44:54] And I was like, I'm pretty happy with that.
[01:44:57] Thank you.
[01:44:58] And then something funny happened.
[01:45:00] Thank you.
[01:45:01] And this forever influenced my...
[01:45:09] my perspective and might even led to me joining Netlify and not like working for a company that would own like kind of like run solid.  Like there are some options where I could actually like work at solid as a company and do it like work for a company that want to use solid kind of way like Marco is used at eBay.  And I went for Netlify.
[01:45:26] for one reason, and that was my belief in the open source.  And this is what happened.
[01:45:32] I was about to kind of pat myself on the shoulder, been like, okay, not bad.
[01:45:37] And someone realized that the escape algorithm we're all using
[01:45:42] was slow.
[01:45:45] It was slower. And...
[01:45:48] He changed it and
[01:45:51] Suddenly,
[01:45:53] Solid just jumped ahead.
[01:45:56] of everything on server rendering.
[01:45:59] Right. We're tweaking it and optimizing it.  And this is really like a community effort here.
[01:46:04] And
[01:46:06] And
[01:46:08] the results were astounding, kind of where we sit today, where like,
[01:46:12] React SSR, solid SSR.
[01:46:16] Um--
[01:46:19] And it just came down to...
[01:46:22] careful
[01:46:23] work, months and months of performance
[01:46:26] profiling
[01:46:28] And
[01:46:29] And then working and relying on the community, essentially.
[01:46:35] So,
[01:46:36] I don't know. It was a pretty big deal there.  And we don't talk about SSR as much.  I mean, I talk about it, but it doesn't really come up at WOD.  Everyone looks at the JS framework benchmark.  But the isomorphic UI benchmark has some good performance stuff.  And essentially, this kind of completed our story, right?  Soon after, started working on Solid Start,
[01:47:03] And Soled was like the first
[01:47:05] I believe the first framework to get streaming edge functions on every major platform, right?  Cloudflare, we did first back in March 9th, 2021, streaming suspense example.  We did Vercel literally the day after they released it.
[01:47:20] full solid startup working streaming on the edge.
[01:47:23] And then same thing with Netlify.
[01:47:27] Basically,
[01:47:30] having Spence on the server concurrent, parallel switching, all this stuff. SolidStart isn't out yet, and we're still working on it. But essentially, we've been refining, spending that meticulous time working through details so it can get to where it gets.
[01:47:46] I mean, that isn't really the end of the story, though, obviously.
[01:47:50] But we're getting very close to current day.
[01:47:53] um
[01:47:54] I had...
[01:47:56] I mean, I told you I was having a hard time with Twitter and I was having a hard time
[01:48:01] with
[01:48:03] you know, Hacker News and Reddit's
[01:48:06] people being just really harsh and, um,
[01:48:10] I was having a hard time with JavaScript influencers. I wasn't too pushy. Some people would come on and be like, "What do you think about Solo? What do you think about Solo?" I never did that. I would always try and be like, "Oh,
[01:48:20] someone says something, then I'd be like, well, this is actually possible too. You know, try and like take an education angle and not mention solid. And
[01:48:29] E.
[01:48:30] Yeah, I mean,
[01:48:31] If there's a second article of mine you should read, this is probably one of my favorites.  I had run in with a JavaScript influencer where they said that I was over self-promoting, and I was like, what?  And I basically just went through the whole conflict that I'm kind of going through on stream in a different form.  And...
[01:48:53] and kind of talking about
[01:48:55] the challenges of trying to
[01:48:59] walk into a place, a room where you're basically completely unwelcome.
[01:49:04] And
[01:49:05] trying to be like, look, there's a different way to do things.
[01:49:09] you know,
[01:49:10] The framework authors are incredibly receptive to ideas and, you know, in terms of like,
[01:49:15] thinking of ways they can improve stuff.  But the communities were very...
[01:49:21] very, very negative. I'm even seeing some of this
[01:49:25] some of this stuff in chat a little bit right now, you know, where it's just like,
[01:49:29] Like,
[01:49:30] Do you think...
[01:49:31] We don't know.
[01:49:32] that inevitably when you start something new, you have to create a community.
[01:49:36] that it takes time.
[01:49:38] Thank you.
[01:49:39] the ecosystem like
[01:49:42] like this,  this,  this is all part of it.  So it's like,  there's this,  it's a constant chicken and the egg problem.  And,
[01:49:52] you constantly have this tension.  And I was talking a bit about this
[01:49:56] when I was showing the Excalibur here, where there is this, there is, there is actually some animosity, sometimes, you know, not always from not from the creators or anything, but from the communities, it gets, it's challenging when they're like, I just learned and invested in this, I don't want to know about this.
[01:50:13] I don't care about 15% performance, you know, like,
[01:50:18] -
[01:50:20] It's not one thing. It's just everything.
[01:50:23] And
[01:50:25] You know, we were getting basically...
[01:50:30] It didn't matter, right?  DX could be good.  Performance could be good.  All those things didn't matter.  We weren't really hitting...
[01:50:38] uh,
[01:50:39] stride yet. I was so  focused on the technology and making the best server  rendering, the best, you know,  you know,
[01:50:48] performance, the best patterns, streaming.
[01:50:54] I couldn't really focus completely in community.  We brought people on, we were kind of building out,  but it just wasn't quite jiving.
[01:51:06] And...
[01:51:12] Yeah.
[01:51:14] Then we released 1.0.
[01:51:16] And for some reason, that was the signal people needed
[01:51:19] Right. The 1.0 release went out and
[01:51:24] Yeah, I mean, I probably can't even find that-- where is it?
[01:51:29] uh chickens components real cost real cause marco introduced tag javascript minute
[01:51:37] Yeah, and it was just a completely different
[01:51:43] ballpark. I just-- I didn't do anything different than I'd ever done.
[01:51:47] But I guess it was like a signal to people that maybe solid is a thing.
[01:51:57] And that, I mean...
[01:52:01] Where did I want to show? Do I have the article? Maybe I should pull this up from dev too.
[01:52:10] You know, it doesn't matter.  That's the past.
[01:52:15] This sort of...
[01:52:19] This sort of catches up today.
[01:52:23] Right? Like...
[01:52:25] Like...
[01:52:29] A lot of you didn't know that whole story, so I hope you appreciated that. But
[01:52:34] Let's jump forward a bit for a second and let's talk. I'm gonna go to the present right now because
[01:52:41] there's been so much the last year.  And all I have, I could literally just go...
[01:52:47] to Twitter for like two seconds and show you what I'm talking about. Right.
[01:52:52] Let's just go to the Solids profile on Twitter. I'm going to kind of sort of cut in here. But yeah, I didn't cover as much stuff as I wanted to on the last couple streams, but we're kind of talking this week in JavaScript for a second.
[01:53:06] I mean...
[01:53:09] What do we got here? Yeah. I'm just going to kind of scroll back because this is just in the last couple of weeks.
[01:53:17] Okay, so Fireship releases this video, right?
[01:53:20] And then suddenly...
[01:53:24] Like...
[01:53:27] Thank you.
[01:53:27] Like, what?
[01:53:29] we start seeing
[01:53:31] you know, the effects of the community and stuff that's been going out here, even affecting people like Tanner Linsley for basically creating something that looks like solid inside React.
[01:53:42] Um...
[01:53:44] -
[01:53:47] The response, our man Adam, you know, this is ridiculous good. I'm angry. I didn't look at solid sooner.
[01:53:55] Right?
[01:53:56] um
[01:53:57] It's just a full reversal of where we were at the beginning.  You saw me basically try and convince people that JSX was compilable and
[01:54:06] literally sharing solid and being like,
[01:54:08] Do you believe this is real? This is probably vaporware.
[01:54:12] to this, right?  No discredit to Adam.  Adam's actually one of the more reasonable people.  Ken Wheeler.
[01:54:20] Basically, somehow...
[01:54:23] Nothing had changed.
[01:54:28] In very little changed in two years, but the whole perspective
[01:54:33] Start shifting.
[01:54:35] I've been working on features and we've been pushing stuff forward, but
[01:54:40] Here we go, bun gets solidjsjsx transform.
[01:54:44] Because people talk about ecosystem, right?
[01:54:47] Building solid astro.build.
[01:54:50] How about F#, Fable compiler with Solid?
[01:54:54] StackBlitz template.
[01:54:57] Yeah, this is a big one.  SolidJS is doing docs right.  Props to Dan and the docs team, right?  This Rachel, big power behind reacts to new docs.
[01:55:09] Thank you.
[01:55:09] Thank you.
[01:55:10] CodeMods.
[01:55:13] Native script.
[01:55:14] Thank you.
[01:55:16] Financial backers like
[01:55:19] Thank you.
[01:55:22] like labels, component libraries, FastifyBeat. I mean, TanStack. It's all it gets mentioned as a release adapter. Like,
[01:55:32] Things are...
[01:55:33] Solid meetup in New York City.
[01:55:37] Thank you.
[01:55:40] - Right.
[01:55:44] Thank you.
[01:55:47] Thank you.
[01:55:49] Thank you.
[01:55:52] ReScript.
[01:55:54] Thank you.
[01:55:55] Honestly, like,
[01:55:57] courses
[01:55:59] I mean, yeah, honestly, this stuff has just been...
[01:56:06] has just been going, you know, like crazy. And
[01:56:14] Thank you.
[01:56:15] you know,
[01:56:16] That's kind of where we are today.  People are starting to notice it.  I've gone over the stream.  Everyone talks about ecosystem.  But the thing is,
[01:56:25] And I think it's worth kind of pointing out is...
[01:56:29] It's more than just internally within ourselves, right?
[01:56:32] If anyone saw this thing from view, right?
[01:56:37] Thank you.
[01:56:38] Thank you.
[01:56:39] They...
[01:56:40] I mean, this should look kind of familiar to people who've seen solids compiled output. View is looking at adding
[01:56:46] Um,
[01:56:48] a solid like compiler, right?  And if you've been following the stream,
[01:56:54] But it doesn't work with their BDOM. So essentially, if you want
[01:56:57] You can have a view app and you put some like,
[01:57:00] some
[01:57:01] Vapor, they're called vapor components in it.
[01:57:03] But if you make a Vapor app, you can't put VDOM components. It's just like Hustle and React don't have Compat.
[01:57:10] So that means if you want to use Vapor, every component in Vue needs to be rewritten in Vapor.  And this is not a syntax thing.  This is actually an execution thing.
[01:57:18] difference. This is actually
[01:57:21] It's not that hard. We've seen porting React to Solid isn't that hard, but it's the same effort to port view to view.
[01:57:26] or view to vapor, rather.
[01:57:29] Starting from ground zero, again, to adopt this paradigm.
[01:57:34] Thank you.
[01:57:35] which is interesting.
[01:57:37] Right.
[01:57:38] Um...
[01:57:40] This is kind of...
[01:57:43] where we are at today, you know, looking at this solid over here, actually having impact on people over, you know, and frameworks over here.
[01:57:53] Svelte's looking also at solids compiled output and cloning nodes.  There's an open issue.  I've been guiding them that way.
[01:58:00] You know, there is...
[01:58:05] There is some interesting stuff happening.  I think there's implications that aren't
[01:58:09] really understood, right? Because like, if you view it in a certain way, you could have gone the way of the composition API back in Vue 1. They didn't need to wait for React hooks to release it.
[01:58:20] Vue could have gone this direction.
[01:58:23] seven years ago and they didn't either
[01:58:25] So, like...
[01:58:29] I think it's very interesting to see how this shapes off.  I think it's a different place and a different kind of thinking to kind of be...
[01:58:39] like the big player and seeing what sticks versus being someone with something to prove.
[01:58:46] But what I love about this, obviously, is this is a clear nod.
[01:58:51] Obviously, inside the community, outside the community, we're doing a lot of the right things.
[01:58:58] But...
[01:58:59] They were.
[01:59:01] The reason that I might want to linger on this for a moment when talking about the present is that
[01:59:10] After I made this comment about it basically, like, would they give up the Vue ecosystem for this?
[01:59:15] Like, for me, people saw this as, like, a slight against few, but it's not.  It's more of, like...
[01:59:21] If people in the Vue community would  be willing to give up the Vue ecosystem to use this vapor thing,
[01:59:29] I feel like that's a good sign for solid.  If someone's willing to start from ground up and do that again,  they'll probably be willing to try a framework that does this
[01:59:39] you know, and if I may say quite well,
[01:59:42] I'm not talking about pulling people in from Vue.  Vue already has a solution here.  I just mean in general,
[01:59:48] This is interesting.  In React Server Components,
[01:59:52] kind of same idea in the sense that the server components and the client components can't  really share the same libraries or they need to be written.
[02:00:00] an ecosystem reset. So when people come to me and they're like,
[02:00:03] And they're like,
[02:00:04] oh, Solid doesn't have an ecosystem. I'm like,
[02:00:06] Does anyone?
[02:00:08] Right.
[02:00:09] That's more on the library side. To be fair, ecosystem is more than libraries. Ecosystem is also jobs and, you know, all the other stuff. But I think it's actually...
[02:00:19] kind of interesting that we're going through a reset right now and people haven't really
[02:00:24] clicked into it yet.  And the reason for that is,
[02:00:27] It's not just a syntax change.
[02:00:29] If you've been following what I've been showing throughout the stream, we're actually
[02:00:37] See, this is what I was going to say.  The benefits are farther reaching than performing components.  It's architectural.  Like the benefit...
[02:00:42] was in that article that I wrote a couple of years ago, right?  The real cost of UI components, when I made that whole claim.
[02:00:49] It's saying that components
[02:00:52] as a unit of change, of being the piece, are the problem.
[02:00:55] View.
[02:00:56] for example, here, can remove those components.
[02:01:01] But then you're just going to stick them inside an app that  has components.  The way this works, the reason the scales  is when you embrace it completely.
[02:01:09] And it's not about...
[02:01:12] you know, being able to just use some vapor components. It's not about components. The whole idea is to get away from components, which is why I think people are missing the point here. This is this is much more
[02:01:23] significant or interesting than it might appear at first.
[02:01:27] Yeah.
[02:01:27] Thank you.
[02:01:28] Thank you.
[02:01:30] Thank you.
[02:01:35] Thank you.
[02:01:36] Thank you.
[02:01:39] Yeah, thank you. I appreciate you saying that.
[02:01:43] He wants to be in our  almost all college.  Yeah.  I mean...
[02:01:50] I mean, yeah, I mean, and
[02:01:53] Maybe, maybe that's good, but then like, it's hard to focus.  Maybe views ecosystem community is big enough to support being in all of them.
[02:02:00] Um,
[02:02:02] And a lot of people were supporting that.  They're like, yeah, it's the best of both worlds, you know.
[02:02:08] Sometimes I think maybe people feel like this, yay, one more mode for view that I do not understand.
[02:02:14] But I'm not here to be critical of you. I just want to say if we're talking about the implications
[02:02:21] This is the stuff, the reason.  I think of this very holistically.  I think about stuff like this drawing.  I think about...
[02:02:30] you know how this plays out like we had a conversation where Dan and the React team were like  you know very happy with what they're doing they're like if we thought Solid was doing  you know what we needed to do we'd we'd do that
[02:02:41] You know, it's understanding
[02:02:45] This, React might be moving a little bit in here, but React is very happy where they are.
[02:02:52] The people who aren't happy right now
[02:02:55] are some of the people further in this quadrant.  I'm really interested to see what Angular does.  I gave a talk to them last month.  I went into-- I did a talk for the Angular team  to show them Solid.js because they are really re-examining  the foundations here.
[02:03:14] I think Evan and you are very savvy. He sees what's going on and he's like, yeah, you know,  we're kind of on the opposite side of things, you know, maybe we have to look at this.
[02:03:26] You know, so
[02:03:27] Thank you.
[02:03:28] Thank you.
[02:03:29] So like...
[02:03:30] Like, it's tricky, you know?  I had the benefit of being kind of radio silent in the background, just doing my thing.
[02:03:39] Right. Because think about it.
[02:03:41] Like,
[02:03:41] It's stuff that's changing so fast.
[02:03:45] Like even in view, you're on view two and you're kind of like, oh, yay.  2020 comes on view three.  Okay.  Composition eight, right?  Huge improvement.  Huge, huge, huge improvement.
[02:03:54] I mean, that's what I was waiting for since the first time I saw Vue.  I'm like, why aren't you doing this?
[02:04:00] I'm exaggerating a little bit, obviously, because you saw how big it was a web component.  But let's say from 2018 onwards, you know, I mean...
[02:04:07] I was using web components, but if you read my earlier articles, I like the portability of reactivity, essentially. I was like, okay, I think WebCom was the best way to do it today, but I wrote at length about how important it is to have the permit, even back in my earlier stuff.
[02:04:22] Yeah.
[02:04:23] Now,
[02:04:24] Thank you.
[02:04:26] Come 2021, now we have set up RefSugar, right?  A new syntax that's very Svelte inspired.
[02:04:32] 2022, we have vapor components, which is a new mode that is very...
[02:04:40] Solid inspired, right?  So like...
[02:04:43] And then they released an MPA mode, I think in the summer, which was very Astro inspired. And
[02:04:49] - Yeah, it was last summer.  Yeah.
[02:04:52] I can understand. It's a challenge to thread everything together. So I mean, big props there for them figuring out how to do literally everything for everyone. That's more than I can handle.
[02:05:08] Yeah, it's interesting.
[02:05:12] But...
[02:05:14] Yeah.
[02:05:16] This sort of brings us up.
[02:05:19] to today today because I did the stream partially I was finally pushed because I saw this and I was  just like people aren't going to get it they're going to see this and be like oh
[02:05:30] Now Vue has it, I guess.
[02:05:32] Doesn't matter, you know, solid's kind of novel, but now Vue has it.
[02:05:36] I think the people who say that,
[02:05:38] completely missing the point, right?
[02:05:42] Because it isn't about having some performant components or something.  It's about a shift.  And...
[02:05:51] Let's just get into it, right? Let's go. You guys ready for the future?
[02:05:56] Thank you.
[02:05:58] Thank you.
[02:05:59] Thank you.
[02:06:01] .
[02:06:05] I need a little water before I get to the future.
[02:06:11] Thank you.
[02:06:12] Thank you.
[02:06:13] Okay.
[02:06:14] Okay.
[02:06:15] Thank you.
[02:06:16] Thank you.
[02:06:18] Thank you.
[02:06:24] Yeah, reactive script, right? No, not quite. That goes beyond that.
[02:06:34] Thank you.
[02:06:35] Now, I have to give a disclaimer.
[02:06:38] Thank you.
[02:06:40] Bravo.
[02:06:43] Thank you.
[02:06:43] Okay.
[02:06:46] Thank you.
[02:06:48] I think of a disclaimer here a little bit because when I talk about the future, I'm not talking about the far future.
[02:06:54] I'm not making crystal ball predictions here too much.  I'm talking about looking at what's happening now, look at the trends and looking at what the things that I personally think are worth investing in and what I want to do and where things are going.  Conversations with communities, other framework authors.
[02:07:11] and pulling in that kind of insight.
[02:07:15] Thank you.
[02:07:15] and...
[02:07:18] Thank you.
[02:07:20] for
[02:07:22] or something.
[02:07:23] And essentially...
[02:07:27] The first thing you might ask is five, seven years? How many years has it been? I don't know. I'm too tired to count. Years later, am I still sold on the vision the same way the React guys are sold on their vision?
[02:07:41] Actually, you know what? Before we go there, just give me a second. Let's see if I can find it. Jordan Walk.
[02:07:46] Thank you.
[02:07:48] Thank you.
[02:07:48] Facts.
[02:07:51] Oh, man. I wish I had
[02:07:53] Bye.
[02:07:55] Let me see if I can find this.
[02:08:00] Not everyone knows facts.js. Can I show you something?
[02:08:11] Because I like to tie the future to the past always.
[02:08:15] And solid has a strong ties to knockout.
[02:08:18] I showed...
[02:08:20] how Remix basically Ryan Florence is describing in 2015 in his Hype.js talk.
[02:08:26] I've shown this before.  It was all there and you know,
[02:08:30] But...
[02:08:32] People, people, you know, people wonder about React and React's vision in the future. And I just want to quickly show this. This is an old experimental project. React is much better in every way. And you should use that instead. I love the way he talks. That's the way I talk to you. When I talk about something, I'm like, don't ever use this. I want to show it to you, but never, never, never use it. Because you almost have to like say that and people will still use it and then ask you like why it doesn't work properly.
[02:08:57] Create mutable.
[02:09:01] This...
[02:09:04] Look at this framework.
[02:09:06] Have any of you guys seen Facts.js? Tell me in the chat if you've seen Facts.js before.
[02:09:15] Thank you.
[02:09:17] I'm giving delay for the chat to catch up.
[02:09:22] I guess that's no one, okay? Seamless client server rendering. Write once, render anywhere, client or server.
[02:09:29] Reactive, views are automatically updated on state changes, no bindings necessary. Okay. So they mean reactive, not like in the react sense, not in like the way we talk about it. Performer, fast running using string concatenation and small code size. What? This is not React, no VDOM?
[02:09:44] Structural high-level components functionally defined declarative views.
[02:09:49] Hmm.
[02:09:52] and then F componentize return div,
[02:09:57] And we have some
[02:09:58] some data here, I guess.
[02:10:02] And then
[02:10:03] Thank you.
[02:10:04] Some divs and class set. Basically, this is pre-JSX. I don't even know if Jordan was working at Facebook at the time when he did this.
[02:10:13] Thank you.
[02:10:14] But essentially,
[02:10:16] and
[02:10:17] This is a project that did all its diffing with strings.
[02:10:21] kind of like reacted a bit of this in the early days with reconciliation.  And you could render it on the server, you could render it on the client,
[02:10:28] And it would just be able to diff it.
[02:10:31] So essentially you could render something in the server,
[02:10:33] and then have the client diff it.
[02:10:36] If that sounds like something familiar, you might have heard something like circuit components.
[02:10:42] Like there's elements...
[02:10:45] of,
[02:10:46] Yeah, what is this? 11 years ago. There's elements
[02:10:49] of what
[02:10:51] Reacts working on today that stem from this project.
[02:10:55] that happened, yeah, like 11 years ago.
[02:11:05] Thank you.
[02:11:10] Thank you.
[02:11:10] Sorry, the chat just kind of went off.
[02:11:15] Yeah, so the guy who created React created this before React, if I wasn't clear about this.
[02:11:22] Essentially, like this, this is this is kind of the roots of it. Like, and obviously, Sebastian has had a huge vision, you know, since Jordan moved on from the React team around 2015, I think. Seth took over and now he's at Vercel working on Next. But essentially,
[02:11:40] Yeah, look at this.
[02:11:41] It's Jamie, Kyle, and Jordan Walk here on the two contributors here.  Though I think this is mostly Jordan's work.  I just wanted to just put this out there that it's never...
[02:11:54] completely new ideas.
[02:11:56] Everything's existed before.  We had nested routing with data fetching back in Ember in 2012.
[02:12:03] Right. There's a great discussion, quote, argument about nested routing a week or so back.  And it was really funny because everyone's like, oh,
[02:12:12] I did it first. No, Svelte did it first.  Or Sapper did it first. No, Vue did it first.  And so I was just like, no.
[02:12:19] People have been doing nested routing with data fetching for like 10 years.
[02:12:23] like,
[02:12:23] You know, I think someone mentioned that Ruby had this pattern, which I believe because there's a strong Ruby influence in the Ember work, right? Yahuda cats, you know, so on.
[02:12:38] Anyways, let's move more towards the future.  I just wanted...
[02:12:43] Yeah, yeah, yeah, yeah.
[02:12:47] Yeah, I mean, sure.
[02:12:51] But I mean...
[02:12:53] Svelte wasn't the first one to use a compiled JavaScript language with reactive syntax.
[02:12:58] It wasn't as clean as felt, but like Imba did.
[02:13:02] Um,
[02:13:03] .
[02:13:04] I don't think Marco's was like class components, so I don't count it, but Inba and Marco both were doing the whole compiler thing years before Svelte was, right?  So like there's always something before, you know, Marco had streaming, which they got from PHP, from Facebook's BigPipe, but they were the first JavaScript framework to have the streaming that now has just come out in React.  You know, like there's a whole, everything you go back to the past to find the future.
[02:13:31] So,
[02:13:34] I preface it with this because our preface, whatever, because
[02:13:39] I just want to understand where this thinking is coming from.
[02:13:48] Okay, big picture.  Let me spell it out.
[02:13:52] This progression that we've been seeing, this whole thing that I've been talking about, the components, the reducing,
[02:13:59] It's already here.
[02:14:02] Solid might have shone the light on it.
[02:14:05] And the big frameworks are like just realizing what's going on, but others,
[02:14:09] understood this
[02:14:11] years before.
[02:14:13] And the first output of that is actually the other project  that's working at work, Marco.
[02:14:21] Yeah.
[02:14:22] And Marco realized that
[02:14:24] Getting ready components solved hydration.
[02:14:27] Like literally just
[02:14:29] make things as fine-grained as possible and look at the reactive language, kind of like take that idea of a bit idea of a Svelte, but then kind of take solid and take it all the way.
[02:14:40] You know, it's
[02:14:42] In many ways, Marco is the most advanced JavaScript framework, not even close.
[02:14:46] But, you know, being the most technologically advanced doesn't make you the most popular.
[02:14:52] Even the ergonomics are really good if people would accept it,  but that's another story.
[02:14:58] Thank you.
[02:14:59] And the thing is, they're a very compiler-heavy strategy, very similar to Svelte, although
[02:15:09] you know, it goes, they solve the composition problem, which Svelte hasn't solved.
[02:15:13] Bye.
[02:15:14] And I've shown Marco on stream, right?  Obviously Marco six is incredible, but yeah,
[02:15:20] Yeah.
[02:15:21] It's not just Marco. Quick.
[02:15:23] Quick start with the VDOM, very similar to their previous work  like Ionic from Adam.  And to be fair--
[02:15:34] Angular isn't a V DOM, but it's still very top down. But piece by piece,
[02:15:39] They've been adding reactive preventives.  I don't know if people have been--
[02:15:43] paying attention to QUIC, they should.  But QUIC has been slowly by slowly adding reactive primitives
[02:15:51] Adding things that look like effects and memos.
[02:15:55] a lot of the kind of base stuff that we have in solid.
[02:16:03] And,  and,
[02:16:06] I think that...
[02:16:07] I mean, right now, their splitting is still very component-centric.  They're like, okay...
[02:16:12] Generally speaking, you have your events.
[02:16:14] you have your state
[02:16:15] and you have your view.
[02:16:17] Thank you.
[02:16:18] Thank you.
[02:16:18] But they will split more fine-grained like Marco.  Qwik will get to a point where it has the same efficiency  as Marco, I'm pretty sure.
[02:16:25] Right.
[02:16:26] As I mentioned, obviously I'm a bit biased, but like Marco 6 is basically doing everything right.
[02:16:35] And it's because it's taking this fine-grained componentless thing that I've been doing with Solid and applying the compiler. But here's the challenge. When I saw quick starting going down this path, it gave me hope. Because remember this graph?
[02:16:51] Yeah.
[02:16:51] Yeah.
[02:16:52] you can make a whole bunch of these different graphs.  You can make any number of these, right?  And you choose your axes.  And a different axes-- it's not quite on here as clearly--
[02:17:04] Although, you know, is that template versus...
[02:17:07] JSX, or basically how heavy do you rely on compilation?  I don't view solid as a compiler solution.  Everyone goes, oh, so it's like Svelte.  It's like React, but Svelte, no.
[02:17:17] Solid is...
[02:17:18] Sure, the JSX gets transformed a little bit different than React, but for the most part, Solid is not on the compiler side. It is a runtime thing. It is like React.
[02:17:28] You know, it's like view, you know, it's not svelte.
[02:17:35] And...
[02:17:37] Okay.
[02:17:39] I like it.  I've demoed this before, but I like...
[02:17:45] that story, you know, I've shown if you haven't seen the introduction video on SolidJS homepage, if you haven't seen this one, Advanced Intro in 10 Minutes,
[02:17:57] You should.
[02:17:58] Thank you.
[02:17:59] Of course, you shouldn't check out this ad because that's annoying.  But...
[02:18:03] Thank you.
[02:18:04] You should check this out if you get the chance, because like...
[02:18:07] Thank you.
[02:18:08] This composes-- this shows what I like about-- sorry,  I'm trying to get to the key part here.  But we take stuff that's basically vanilla JS,
[02:18:18] And,
[02:18:20] Thank you.
[02:18:21] What you would have written by hand is what...
[02:18:25] solid basically compiles to.  It's not obstrucated.  It's not like a bunch of crazy compiler magic like React forget.  It's literally like, oh, I'm going  to go write something by hand using reactive system.
[02:18:36] And that's what you get.
[02:18:38] It's portable, each piecewise.  You can just take these elements.  You can just make a div over here.  There's no component lifecycle ties.  There's no compiler locality constraints.
[02:18:49] Um,
[02:18:50] And
[02:18:52] I think...
[02:18:53] Thank you.
[02:18:54] That is incredibly powerful. What gets solid a lot of its DX, you know, ability gives you those escape hatches. It lets you feel like you can do anything.
[02:19:08] Quick is interesting. I told you Quick gave me hope because Quick is a runtime reactive system.
[02:19:15] They use a compiler more heavily than I use in Solid,  but they are using a runtime reactive system.
[02:19:23] it's not as tuned as solids is yet.  You know,  they haven't done all the performance stuff,  but they are,  you know,  and they still have a VDOM.  So it's kind of more like view today,  but yeah,
[02:19:34] the
[02:19:34] It's there.
[02:19:38] Thank you.
[02:19:41] Thank you.
[02:19:43] Well, yeah. Well, the funny thing is, React Forget is a pretty crazy looking compilation.
[02:19:48] Right. People saw that video. I mean,
[02:19:51] I don't even need to show it.  You don't.  But Svelte actually looks a lot like the React forget craziness.  It's not quite as crazy because they at least separate the update from the create functions.  But it does move away from just like what you would have handwritten.
[02:20:07] Thank you.
[02:20:09] Thank you.
[02:20:10] Yeah.
[02:20:11] This is an interesting question.  Doesn't reactivity have to always be runtime?  Well, reactivity in like the reactive library sense, yes.  But reactivity as a language sense is interesting.  Svelte already basically claimed that they had reactivity from a pure compiled solution.  We're keeping that moniker with React.
[02:20:27] Marco, because there's a clear language pattern here. There's the signals or the letables or whatever you want. There's the derivations and there's the side effects. These language primitives define reactivity to a point that you could argue that it's a different type of reactivity. There are some downsides. Compiler can't be as dynamic.
[02:20:48] You can't have conditional dependencies the way
[02:20:51] like a pure...
[02:20:52] compile thing can't have that conditional granularity that solid has.
[02:20:58] which gets solid the last few points on the benchmarks. Honestly, I haven't actually been able to take a compiled solution.
[02:21:06] as hand optimized as I can and have it match solid on performance,  but I've gotten it so close that no one would care.
[02:21:12] Thank you.
[02:21:14] Thank you.
[02:21:15] Thank you.
[02:21:16] Thank you.
[02:21:17] Yeah, I mean, that's the whole thing, right?  Isn't it awesome how you can scale down to jQuery, essentially,  or scale up to something that's like,
[02:21:24] complicated like and
[02:21:27] This is...
[02:21:29] where the power is.  And this is something I want to maintain.  And when I saw Qwik, the reason I got hope is because they are using compilation tricks,  but the reactivity isn't compiled.
[02:21:39] Yeah.
[02:21:40] And
[02:21:40] The more I looked at QUIC, even though they kind of
[02:21:44] As I mentioned, they're using a BDOM.  They're kind of hobbling some stuff together to kind of show what they have.  Like, it's still super early days.  They're version 0.0s.
[02:21:53] 18 or 20 or something now.
[02:21:56] they are showing a different way to use a reactive system.  And if you know me, I love reactive systems, runtime reactive systems. And
[02:22:05] You know, if Quick can do it, we can do it.
[02:22:09] I don't know if I like everything Quix doing.
[02:22:13] I don't know if I like relying on compilers as much.
[02:22:16] Thank you.
[02:22:17] But that's where the start of this exploration is, because the truth of the matter is,
[02:22:22] Too much JavaScript has been a problem.
[02:22:26] right and maybe not for svelte or solid we're already kind of small so maybe we have some more  leeway and more room to play
[02:22:33] Right.
[02:22:33] You saw my React server components demo last week.  We're still starting at 70k.
[02:22:38] you know?
[02:22:39] with basically no interactivity.  And to be fair, 70K,
[02:22:43] is about the roof you want for e-commerce.  I know some people are like,
[02:22:47] 100k or something.
[02:22:49] There's still slow devices, there's still slow networks in the world. That may change, but
[02:22:55] I think for really performant stuff, you need to do better.
[02:23:00] I think, though, that...
[02:23:03] you know,
[02:23:05] The fact that something like hydrogen...
[02:23:07] you know, can come in at 70k and basically stay there.  Maybe, you know, it scales way better.  It's the first time React has actually been able to compete in this zone.  You don't get that with Remix.  You know, you don't get that with Next.
[02:23:22] Thank you.
[02:23:22] So, back to the future in Solid, right?
[02:23:28] Thank you.
[02:23:31] I do pay attention to these libraries. I work on the Marco team. You know, I,
[02:23:36] I worked with the quick guys and building some of the first demos they had.
[02:23:39] Um,
[02:23:40] Kind of being the guinea pig, finding all the bugs.
[02:23:46] you know, and
[02:23:48] basically going back and forth, Miskio bouncing ideas and being like, he's like, okay,
[02:23:53] does this do what you're looking for? And I'm like, almost, what about this?  And he's like, okay, no, I can do better. I can do this.  And those kinds of conversations and kind of promotion have just been,
[02:24:01] That's the thing. It looks like I haven't been spending very much time on solid the last few months. And in a sense you'd be right. I've been streaming and looking at other frameworks and I've been making demos for other frameworks. And it's because I
[02:24:15] I want to research, I want to understand what the options were.
[02:24:19] And the thing that came very clear to me is
[02:24:22] I started seeing the influence Solid had on everything else.
[02:24:26] when people start talking about QUIC and I was just like,
[02:24:29] The thing that-- or even Marco, the thing that enables it was the research that I did with Solid.
[02:24:36] to a large degree.
[02:24:39] And sometimes solid kind of gets tagged on as being the end of the generation two frameworks.  And I like to think of it as the beginning of generation three.
[02:24:48] that
[02:24:49] Essentially,
[02:24:51] The shift.
[02:24:54] And all this partial hydration, all this stuff, really comes down to understanding
[02:24:58] our departure from components.
[02:25:01] Thank you.
[02:25:04] Right. It's not about the HTML. HTML first framework is kind of interesting. I mean,
[02:25:11] Thank you.
[02:25:11] All SSRs a little bit like this.
[02:25:15] But I think the key is...
[02:25:20] There's some important things here to understand.  Resumability.
[02:25:24] Hydration, I did a stream on this specifically, has three aspects. It has resumability,
[02:25:29] It has partiality.
[02:25:30] and progressiveness.
[02:25:32] and
[02:25:34] Bye.
[02:25:35] they can all work in tandem to create maybe an optimal solution.  And the challenge is not everyone needs
[02:25:42] partial hydration or rather they're not
[02:25:45] willing to take any kind of DX hit for it.
[02:25:49] Because let's face it, they're not building an MPA.  They're building an interactive app.  We have to get fluid.
[02:25:55] between these
[02:25:56] things. And for me, what that means is understanding
[02:26:00] what the primitives are fundamentally.
[02:26:04] Thank you.
[02:26:06] Thank you.
[02:26:08] - HTMX, you might be thinking of?
[02:26:11] Thank you.
[02:26:13] Thank you.
[02:26:14] Thank you.
[02:26:15] So what does that mean for Sol in the future here?
[02:26:20] See if I can pull up something.
[02:26:26] Thank you.
[02:26:28] Cut.
[02:26:29] I'm going to talk to a couple points here.
[02:26:34] I wasn't sure if I was going to share this on screen  because this is just some of my notes and stuff  I've been talking about.
[02:26:39] The high level of this is
[02:26:43] we have to create a new type of reactive system.
[02:26:46] When I talk about the future solid,  there is solid start, which I'm very happy with.  We're very, very close to nailing those data primitive things.
[02:26:57] things, you know, to give that really nice API. And there's going to be a stream coming up all about Solid Start, because I think it's probably one of the best ways to build modern websites by today's standards. And it's got, we basically taken the patterns from Remix,
[02:27:17] to a certain degree.
[02:27:18] And I give them full credit on that.
[02:27:22] What do they call it?
[02:27:24] Optimistic updates.
[02:27:25] their
[02:27:28] Thank you.
[02:27:30] their refetch thinking, parts of it, it simplifies and streamlines.  When you have everything on the server, you remove a lot of duplication of the code.
[02:27:42] Like essentially, if the server knows you're going to need the redirect,
[02:27:46] You don't need the client to have a special encoded thing to know the redirect.  That might be happening in the background, but you don't, it's way easier to write your logic once.
[02:27:55] And
[02:27:57] The only issues or concerns I had with using Remix's patterns was I just didn't feel like I had enough control in all cases.
[02:28:07] So,
[02:28:09] I basically made a cross between
[02:28:12] Remix.
[02:28:14] and React Query.
[02:28:17] And I think you guys will be really excited  to see what that looks like.
[02:28:21] basically
[02:28:24] taking our primitive approach to loaders and actions  so that pages aren't restricted to only having one.
[02:28:32] Use some light keying if necessary, although that's completely optional.
[02:28:36] And then being able to just get those instant progressive enhanceable forms and get those instant redirects and logic in the single place in the server.
[02:28:46] But...
[02:28:48] I'm not going to talk about that too much today. And when I get back from my road trip, we're going to have a nice...
[02:28:55] stream about solid star because it's incredible.  What I want to talk about today is really bigger pictures,  like solid 2.0.
[02:29:02] And
[02:29:04] And as I said, it's about...
[02:29:08] we need to design a new type of reactivity system.  And that's what I've been looking at here, because I'm very familiar with the performance.  I've rewritten the reactive system solid two or three times now.
[02:29:19] I have a good idea of how to make a super performant reactive system.
[02:29:23] Um,
[02:29:24] you know,
[02:29:25] I tuned it for problems you face in the DOM, you know, not just in the abstract.  That's why I saw it.
[02:29:31] I actually used other libraries as a benchmark.  You saw earlier had Knockout in the JS framework benchmark  and MobX and Vue.  I take their reactive systems, use Solids Renderer,
[02:29:42] to keep myself honest.
[02:29:45] Because I want every part of solid to be better, faster than the competition.
[02:29:55] So I know where the bottlenecks are and I understand how to write
[02:30:00] write that. But what we need to do
[02:30:01] is...
[02:30:02] And expand what it is. And the first expanse that I did for the reactive system was when I added concurrent rendering. I'm not going to demo that again on stream because I know how chuggy and light it is. You won't see how butter smooth it is. But we made the ability to fork the reactive system and do concurrent rendering, something people said was going to be impossible without a VDOM.
[02:30:21] And that's just the start.  I know we can do better than that.
[02:30:25] So,
[02:30:28] I've come up with alternative algorithms to the reactive system that I've been testing. I just haven't landed on the final ones I want to do. So I just want you to understand high level what we're talking about here is
[02:30:42] Changing the structure, it's not going to affect the end user API that much.
[02:30:48] But actually changing the mechanisms underneath the hood is a big part of 2.0.  It'll cause some maybe slight...
[02:30:53] behavior differences, like we're talking about letting memos evaluate lazily.
[02:30:58] They don't have side effects, so that shouldn't affect you at all.
[02:31:02] Right?
[02:31:03] But this can reduce some overhead.
[02:31:06] We're talking about ways to streamline
[02:31:10] performance on computeds so that they don't over-execute.
[02:31:14] But the big ones for me
[02:31:16] And the focus of Solid 2.0
[02:31:19] Thank you.
[02:31:21] Yeah.
[02:31:21] Yeah.
[02:31:23] Yeah, a little bit.  We do use RPC kind of stuff.  Like we have a mechanism where you can just  click call a function anywhere.  And it's just like now it's an API call.  It's like an RPC call.
[02:31:33] Sorry.
[02:31:34] But I got distracted for a moment.
[02:31:38] Two key things. We need to be able to serialize and deserialize through reactive graph in a way that's potentially globally accessible.
[02:31:45] And what this is going to enable for us is
[02:31:50] Resumable hydration.
[02:31:52] What's resumable hydration?  People look at quick sometimes and they see the full package and they don't understand the differences.  Resumable is simply being able to start and stop.
[02:32:00] basically do something on the server, have it continue
[02:32:03] on the client.
[02:32:05] And
[02:32:06] It requires a huge amount of serialization. I don't know where
[02:32:09] if it's worth serializing everything.
[02:32:11] I don't even know if it's beneficial for everything.  But we want to be able to serialize and resume,  because most runtime reactive systems have  to run everything once.
[02:32:20] Why can't that once be on the server?
[02:32:23] It's also key for HMR. Solids HMR is...
[02:32:27] You know?
[02:32:28] It reloads below the point.  What if we could actually have really good hot module  reloading where we could just resume state?
[02:32:35] And DevTools.
[02:32:36] These are the three weakest
[02:32:38] I mean hydration isn't weak we have one of the best performing hydrations that's not like
[02:32:42] Marco or, you know,
[02:32:44] that kind of quick.
[02:32:47] But like these three areas are where...
[02:32:50] I want to make improvement.  And all three of them come down to serialization,  deserialization of the reactive graph.  And our current structures don't lend to it.  So this is big focus for 2.0,  along with some of the slight other optimizations.  And the other thing is transitions, concurrency.  Right now we support a single fork,
[02:33:07] I want to be able to restructure it to support multiple forks.  And this is very low level, obviously, but...
[02:33:14] Building a reactive system to these criteria is going to basically unlock the next series of things.  Because even if we haven't...
[02:33:25] figured out.
[02:33:28] if we're using eye lens or whatnot, or, you know, what the,
[02:33:32] the high-level architecture, server components.
[02:33:35] Thank you.
[02:33:35] We make a reactive system like this,
[02:33:39] And we make it performant.
[02:33:42] Solid right now is the fastest on the server, fastest in the browser.  We make it the fastest at hydration.
[02:33:49] Thank you.
[02:33:51] We'll figure it out.
[02:33:52] Because, you know, maybe it was just you solid and astro.
[02:33:55] Thank you.
[02:33:56] You know, maybe quick adding support for other framework  components.
[02:34:01] Maybe there'll be actually no
[02:34:03] potential downside of just using solid in your quick
[02:34:08] app, essentially, because they can handle the progressiveness.  And Solid is resumable.
[02:34:14] small and the fastest of what it does.
[02:34:17] Thank you.
[02:34:18] So this is a key part of it.  And this is enabled because of the fine range activity and the component structure.  We build strong primitives and foundations, and we can fit into what would...
[02:34:31] Others are doing
[02:34:33] Right.
[02:34:34] We've even seen our universal translator for native and stuff.  This doesn't have to stay on the web platform.
[02:34:39] We're just building the best reactive primitives we can,  and the rest is just layers and abstractions.
[02:34:45] So that's, that's, that's,
[02:34:47] Sol starts like on one side where I'm showing the best way we can build apps today.  That's what the team's been working on.  Nikhil's been doing amazing work.
[02:34:55] SOLID 2.0 is about just
[02:34:58] you know, redefining the baseline of what we can expect out of our reactivity.
[02:35:04] Thank you.
[02:35:05] Thank you.
[02:35:06] Thank you.
[02:35:09] But yeah, I mean, there's implications to this, obviously, right?  Resumability is one.  And I think we'll talk about partial a bit more, too, when this comes up.  What I'm thinking...
[02:35:19] in terms of implementation strategy is
[02:35:24] That we're going to...
[02:35:26] We're going to basically change the I'm doing this as a hydration.
[02:35:31] I'm doing this in a few steps.  First step, new reactive system.
[02:35:35] you know, second step, and there'll be some overlap, is going to be changing Saul's hydration and SSR output.
[02:35:43] And so we can we're basically viewing this as a hydration optimization. It's not about partial hydration yet or progressive. It's simply making the best possible hydration solution that basically resume because it doesn't hydrate essentially.  And then
[02:35:57] From there,
[02:35:59] The third piece, the third wing of this is focusing on app architecture and routing.
[02:36:07] Thank you.
[02:36:08] We figure out those bits, things like server components, partial islands will all kind of come into place because essentially...
[02:36:16] Once you can subdivide the work and once you, it's a two prong approach from top down and
[02:36:23] or bottom up and top down, we can basically move towards
[02:36:28] Um,
[02:36:30] you know, these future patterns. So if you did come here hoping that I'd like spill the secrets on how the router works and whatnot, this is still
[02:36:39] This is still
[02:36:41] a bit loose. I mean, the thinking right now, if you want to know, is most big transitions probably  should be rendered on the server so that you don't need to send all the JavaScript.
[02:36:52] But
[02:36:54] Since Solidarity scales based on interactivity and not based on
[02:36:59] number of DOM elements, we can actually keep things pretty small after the fact and only ship the very least amount of JavaScript.
[02:37:09] And
[02:37:09] and keep things like that.  So this is going to take more exploration.  I've looked into routing solutions. I've looked into, um,
[02:37:18] Thank you.
[02:37:19] I've looked into basically RSCs quick.
[02:37:23] Marco,
[02:37:26] Astro, all the current, you know,
[02:37:28] techniques, top techniques in terms of doing partial hydration. And everyone there is looking for that router. You know, next is working on it, right, for React server components. But
[02:37:40] Here's my...
[02:37:42] my thinking or proposal.  Anything that can be diffed
[02:37:47] can also be not diffed.
[02:37:49] If there's a diff solution, there's always a more optimal non-diff solution.
[02:37:54] And that's what we're looking for.  And that's where it goes.  So...
[02:37:58] Basically,
[02:38:00] with this plan moving forward for Solar 2.0, we'll be able to attack these things as they come up by positioning ourselves in the best place and have the capabilities
[02:38:10] available to us. There's so many ways we can attack, you know,
[02:38:16] all the topics that are happening right now.
[02:38:18] And for me, it has to come back down to the perimeters.  So I mean, that's the plan.
[02:38:25] Thank you.
[02:38:27] Do you think a heavier compiler might be part of Solid's solution?
[02:38:32] a little bit heavier on the compilation, but I'm trying my best to avoid it.
[02:38:36] I know what a heavy compiler looks like.
[02:38:38] As I said, Marco has the best compiler
[02:38:40] not close.  Cross template analysis,  it can basically trace  the stateful reactivity you have  across your whole application  and then tree shake everything  that's not...
[02:38:50] changeable and then bundle that up.
[02:38:53] it's going to be
[02:38:55] very difficult for any framework to be as performant in that range as Marco is.
[02:39:01] I'm just throwing that out there.
[02:39:03] Um,
[02:39:04] Yeah.
[02:39:05] But...
[02:39:07] - Cool.
[02:39:08] It's funny because you might be like, well, then why don't you just do that?
[02:39:14] Marco's doing that.
[02:39:17] No, what's attractive about...
[02:39:20] what we're doing here is that story, like I showed on the video, where you just had that DOM element and you just had some JSX. It's not about compilation. Compilation is great and maybe we can come to the perfect abstraction.
[02:39:35] It's about...
[02:39:37] Okay.
[02:39:38] keeping the escape hatches, never feeling trapped,
[02:39:41] That's the DX win.
[02:39:42] It's about debunking the magic. It's about
[02:39:47] giving people the tools they need to do whatever they want, whenever they want.
[02:39:53] Thank you.
[02:39:58] Yeah.
[02:39:59] That's, that's when I'm, that's the, we'll see. That's, that's, that's, that's what I'm getting at. I,
[02:40:06] some people
[02:40:08] Thank you.
[02:40:09] I think there's two worlds here.  I think there is a split still.  I back Marco because I knew it was the very best game.
[02:40:19] at what it was doing.
[02:40:20] It's like the, I wrote an article about that a little while ago, but like the best, the best felt conceptually, like that, that was why I was really into it.
[02:40:29] I want to see what the best react is.
[02:40:31] And
[02:40:33] I left my work at Marco and don't get me wrong, I'm still very involved in that team, very involved with, you know, direction thinking and, you know,
[02:40:43] and whatnot. But
[02:40:46] I had to give Solid a chance. I came to Netlify because I had the opportunity
[02:40:51] to basically demonstrate, take what we've learned,
[02:40:55] and show what a Gen 3 framework looks like on the other side,  with the other philosophy, with the other technology.  That's what I'm thinking about.  If people didn't pick up on it, the reason--
[02:41:07] solo is so interesting and maybe they can't place a finger on it is because for a while
[02:41:12] React came out and we're like, okay, that's great.  And then we saw Svelte.
[02:41:15] We saw Vue at first, but then we saw Selden, and we're like, oh, this is like finishing that story.  So that's what the future of web dev looks like. It looks like Svelte.
[02:41:23] Solid kind of is challenging that.
[02:41:26] I don't know if there's a single future.
[02:41:28] I talk about the merging of
[02:41:30] website and web app into a single thing.
[02:41:33] That can happen, but I don't think there is
[02:41:36] I don't know if...
[02:41:39] if it's as simple as saying compile everything.
[02:41:43] That's never been...
[02:41:45] I've used the compiler as least as possible to get what I need. That's basically been my philosophy.
[02:41:54] And my intention is to continue
[02:41:57] with that.
[02:41:59] Thank you.
[02:42:01] Thank you.
[02:42:04] Thank you.
[02:42:05] Thank you. Yeah, I mean, hopefully, I mean, there's a lot of questions and stuff, but I know the direction and that's all I ever had. Right.  I've done the research. Right.
[02:42:16] I have a great team.
[02:42:17] of people working in solid community.  The other part of Netlify was, you know, I showed that PR where they did the escaping,  and it was the final push that pushed Solid's performance.  I'm trusting in the community here.  I'm trusting on openness and visibility, which is why I'm talking about this right now.
[02:42:36] directionally, sure.
[02:42:39] Tell me about cool experiments you're doing with islands or partial hydration.
[02:42:43] I'm not worried about that yet.
[02:42:46] And we'll see where it goes.
[02:42:47] I feel like if we build the best primitives, people, it'll be a no-brainer to use us in Astro.  We're just like, yeah, that's the best way to use Astro.
[02:42:54] for example, and I'm fine with that. And solid start is the best way to build modern apps today.
[02:43:01] you know,
[02:43:02] That's a good story.
[02:43:04] But I got to move on to the next thing, you know.
[02:43:08] The first...
[02:43:11] two
[02:43:12] two, three years of solid was coming up with the fastest way  to render the DOM.
[02:43:19] We succeeded.  And now big frameworks, you know,
[02:43:23] Thank you.
[02:43:23] five years later are like, oh, yeah, this is the fastest way they're in at all.
[02:43:27] Okay, great.
[02:43:29] The next few years,
[02:43:30] figured out the fastest way to render on the server.
[02:43:33] Streaming.
[02:43:34] Concatenation.
[02:43:36] And Solid Start is kind of like showing what the realization of that vision is in terms of the best isomorphic experience for a modern web app.
[02:43:47] But we're already moving on, right?
[02:43:50] That's today. That's already old news.
[02:43:55] Thank you.
[02:43:56] Thank you.
[02:44:00] Thank you.
[02:44:02] Yeah, there's lots of work to do. I mean,
[02:44:06] But I'm active on the Discord. I'm active thing. I've got Netlify on my back. They're going to help push that server story further with the edge and technologies. There's so many places. I'm focusing on the fundamentals.
[02:44:25] I'm just praying that the ecosystem steps up
[02:44:30] And I don't just mean they already have.  We have incredible component libraries.  What do we have now?  We have Hope UI, which is like Shocker.  We have Material UI, Carbon.  What else?  What's another good one?  Bootstrap.
[02:44:42] You know, we have new libraries every day, the component libraries and, you know, we're getting all the tan stack stuff, you know, virtual table and, you know,
[02:44:52] you know, sorry, I put them together. React virtual and React table, which are now TAN stack virtual and TAN stack table.
[02:45:01] that side
[02:45:03] We just need to refine on top of that.  We need to build better patterns around solid start.  We've got good fundamentals, but show people what we can do with it.
[02:45:15] If I get to just--
[02:45:16] Leave that in all your capable hands and get to work on what the next generation thinks.  We're going to be in great shape because we're already building to the right patterns.
[02:45:26] fine grained,
[02:45:27] this component thing, you know, the shift, the break away from React,  the reason that we don't have React Compat,
[02:45:33] It's already happened.  We already took the hit.  We already got away from components.
[02:45:38] You know?
[02:45:39] Svelte has a compiler, so they'll probably be able to break away
[02:45:42] pretty easily, but not everyone else will.
[02:45:45] You know, it's, you know, Vue, as I said, it's, they're starting from ground zero here.
[02:45:51] Which is fine. It might not even be the direction they go. Maybe this is just
[02:45:56] use things here, we're here, everyone does different things.  It's OK, don't have to be one.  But this is my plan here.  What I intend to do--
[02:46:05] has put together a working group around this future direction of reactivity. We have some incredibly smart and talented people in our community, especially on the topic of reactivity, people who write their own libraries. Solace seems to really attract people who write their own JavaScript libraries, who basically spend a bunch of time trying to be in the JS framework benchmark, and now they're with us.
[02:46:25] You know, so
[02:46:27] I'm going to tap on those people's shoulders.
[02:46:31] gets you know fabio and alexis and um i don't know his name x lord whatever like there's a  whole bunch of people in our community that have incredible knowledge on this stuff
[02:46:43] So we're separating it into different projects.  Solid Start, I've been just trying to focus on  so that we can get it to beta, get the docs out,  and get people trying it and refining it.  That's been my first priority.  But once we get it to that point,
[02:46:57] We have a team for SolidStart. We have a team for Docs.
[02:47:00] And as I said, we're going to have a nice working group  working around the reactivity stuff.  I think there's just so many levels and layers here.  And the way we push this forward is to get more organized.
[02:47:09] Thank you.
[02:47:10] Yeah.
[02:47:11] All right.
[02:47:13] Yeah.
[02:47:14] Features on the server with edge technology. Yeah, well, then I'm working at the right place.
[02:47:19] Thank you.
[02:47:19] Thank you.
[02:47:21] Thank you.
[02:47:24] Thank you.
[02:47:25] So,
[02:47:27] And this all makes me very hopeful for the future.  And that's why I wanted to share this because I've been –
[02:47:33] wandering around
[02:47:35] you know,
[02:47:36] checking out the different things, as I mentioned, and
[02:47:41] the picture is,
[02:47:42] And the direction has been just crystallizing for me, the way that it's had a few times in the past.  Now it's just the tough part, the part of just the brute force and working through it and working.
[02:47:55] benchmarking and understanding and basically refining it.
[02:48:01] I'm going to keep on focusing on primitives and--
[02:48:05] you know,
[02:48:06] Hopefully, with the great help of the docs team and everyone else,
[02:48:11] leave everything up to everyone else to do the rest.
[02:48:15] Bye.
[02:48:15] Yes, yes, yes, yes. Come to the Discord.
[02:48:19] incredible community there.  I think we have...
[02:48:22] Almost 4,000 members now.
[02:48:25] The Help Channel, I'm so proud of the people there.  We got that auto-threading thing, and it's like a ticket line.  It's just like...
[02:48:33] You know, incredible amount of knowledge there.
[02:48:36] So,
[02:48:39] Yeah, I mean...
[02:48:40] you saw from Solid's humble coffee script beginnings to where we are today  and where we're going in the future. Like, this is very, very exciting. And
[02:48:51] What I love about this is because we focused on the primitives, we focused on those building blocks and.  Like things are malleable very easily, you don't have to worry about those like.
[02:49:06] Angular 1, Angular 2 things.
[02:49:08] very much.
[02:49:09] Right. And it's my hope, you know, as we can transition that we already have the right abstractions.  That's that that's our advantage. I mean.
[02:49:19] Saul's too new. It's funny I was saying that, to say that for sure. But in a sense,
[02:49:26] For me,
[02:49:27] It hasn't changed very much.
[02:49:30] in seven years.
[02:49:31] Well,
[02:49:33] Other things.
[02:49:34] very much have.
[02:49:36] So maybe it's just old fashioned, but, or maybe it's just the right abstraction.  So,
[02:49:41] Thank you.
[02:49:43] We won't know until we try.
[02:49:47] Thank you.
[02:49:50] Thank you.
[02:49:51] Yeah, thanks, David. I feel like this is the part of the stream where I put in the links and stuff.
[02:49:55] you know, start documenting stuff. Just for people's knowledge, I am going on a road trip for three weeks across the US, going to go visit my grandfather and
[02:50:07] He's in the other side of Canada. And so he can meet his great grandchildren.  You know, COVID has been kind of a thing. So, um,
[02:50:17] I'm going to be doing some work in the evening stuff.  I'm going to be driving and do a lot of road stuff.  So solid, like I did take a little break a week ago  when I went to Vancouver.  I'm going to rest up and refocus here.  We're just pushing the last little bits on solid start.  We should, the docs effort on solid start should,
[02:50:35] kick into full swing while I'm away.
[02:50:36] so that we can look at a beta release when I get back.
[02:50:41] And I'm just going to recharge, refocus, and get ready to work on 2.0 when I get back. That's basically my plan. So yeah, honestly, I'm not even concerned about that anymore, because the community is so great. The thing
[02:50:55] It kind of drives itself with it. Amazing people. So yeah, get involved.
[02:51:00] Thank you.
[02:51:01] Bye.
[02:51:02] Thank you. This is core team member number three.
[02:51:08] Thank you.
[02:51:10] Yeah. Community meeting.
[02:51:14] Yeah, but that, I mean...
[02:51:17] Unless there's any more questions, I'm going to call that a stream.  Thank you all for joining me on this journey, both today in the stream and in general.  It's been incredible.  As a guy on Hacker News said, you know, you're more likely to start a unicorn company than  pick up a JavaScript framework that catches on.  Yeah.
[02:51:41] Thank you.
[02:51:42] Maybe he's not wrong.
[02:51:45] But here we are.
[02:51:47] Thank you.
[02:51:48] Thanks, everyone. All right. I'm going to sign off now.
[02:51:52] Actually, you know what?
[02:51:53] Let's do it properly.
[02:51:56] Oh, yeah. And when I come back, I'll be getting OBS. So people like Theo, you better help me out here. I really would appreciate the help. We need a better streaming setup. And now that I'm...
[02:52:07] I could stream during the day.
[02:52:09] with my whole setup, that will find everything.  We're going to make these streams a lot better.
[02:52:16] B.
[02:52:17] Be sure to stay tuned for the future.  Okay.  All right.  See ya.
[02:52:21] Thank you.