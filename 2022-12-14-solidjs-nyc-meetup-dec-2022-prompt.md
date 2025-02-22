---
showLink: "https://www.youtube.com/watch?v=yAUlw5GL7jw"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "SolidJS NYC Meetup Dec 2022"
description: ""
publishDate: "2022-12-14"
coverImage: "https://i.ytimg.com/vi/yAUlw5GL7jw/maxresdefault.jpg"
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

[00:00:00]  We're ready when you're ready. Sure. I'm ready to go. Yeah, we're good. I'm not seeing anything coming up. It should be live now
[00:00:17] . It says 15 seconds. So now I'm on a massive... All right. Oh, there it is. There we go. Oh, my God, this is weird
[00:00:25] . I can see myself on your screen. Yeah. All right. All right, folks, we're starting. Where's the... All right. Hey, folks.
[00:00:35]  We're going to get started now. So thanks, everybody, for coming. So, hey, Sergei, good to see you. It's been a while. So
[00:00:44]  good to see a lot of faces here, some familiar, some unfamiliar. I hope to get to know as many of you as possible tonight. I'm Eric Goldstein,
[00:00:55]  principal engineer here at Babbel. Very, very honored to have you all here. I'm obviously very honored to have the SLJS core team. Some of the
[00:01:06]  core members here, Brian, Dave, and Moshe. And I encourage you to, you know, get out there and talk to them if you have an opportunity to
[00:01:18] . And just, you know, we've got some interesting presentations planned. And I hope you guys find it as interesting as I do. And either way, again, glad
[00:01:28]  to have you here. And I guess you didn't come here to listen to me talk. So let's get it started. Awesome. Thank you. Hello. Thanks
[00:01:39]  so much for coming out, everybody. I'm in the right spot. Yeah, that's fine. Next, I should remove my name. Thank you, everyone,
[00:01:54]  for bearing with us. This was a bit to get set up. We decided to have the stream. So this is all being live streamed right now. We have three
[00:02:04]  presentations tonight. I'm going to give a brief intro on Solid. I'll try to keep it a bit shorter because we have a lot more content planned than I expected.
[00:02:14]  Ryan will then be going up and demoing some new material. I'm very excited to hear it. And then we have Moshe coming up and giving us a talk
[00:02:25]  on some advanced topics. So that being said, as soon as Ryan says we're good to go. I can't remove my name. Everyone's going to be Ryan C
[00:02:37] urniotto tonight. Oh, that's fine. All right. Don't worry about the marquee titles or anything like that. All right. And we are good
[00:02:45] . Cool. Can I use this? How do I switch the slides? Okay. Perfect. So my name is David DiBiase. I'm a community leader and
[00:02:57]  an ecosystem maintainer at Solid. Welcome to this evening's event. So this talk is mostly to go over what is Solid. And so I guess I'll start with the
[00:03:10]  first one. Good news. Yet another JavaScript framework. Yay. Yay. We get this a lot in the community. And it's just packed with a lot of motion
[00:03:23]  for us. Yes, there are a lot of JavaScript frameworks out there, but Solid is doing something unique. It's something different than everything else you've seen out there.
[00:03:31]  It looks very similar to something like React, but under the hood it is something very magical. Very, very different. And just some high level details, Solid is actually
[00:03:43]  a recipient of two awards this year. The first one was the OS Awards for Breakthrough of the Year. This is the same award won by, I think it was S
[00:03:53] velte and Vue in the past few years. So we're in good company. We're off to a good start with this project. These are the other projects
[00:04:03]  that we were up against. We also won the InfoWorld Bossy Award. They gave us a really fantastic review and talking about why Solid was up against some other
[00:04:16]  great competitors. Astro, Quick, Svelte were in the same category as well. Well, Svelte actually won last year. So who's behind Solid
[00:04:27] ? It's this guy right here. Ryan is a Marco.js core member, principal open source software engineer at Netlify. So we're in good company. This
[00:04:39]  is a guy who knows what he's talking about. Solid has six core members and eight major sponsors. So it's a well-supported project. It is not
[00:04:48]  at the scale of something like React, which has a full corporate sponsor, but we get a lot of support from a lot of really well-recognized firms, such
[00:04:56]  as Cloudflare, Netlify, Builder, Roussel, JetBrains. I think that's most of them. So Solid, I'm good about
[00:05:04]  it. Simple and poor-performant reactivity for building user interfaces. We have this splattered on our website. It's basically, the skinny of it is,
[00:05:17]  the reactive nature of Solid is both simplicity and performance. It's not either-or. You get the combination of both, and that is something special. Solid is a seven
[00:05:31]  kilobyte minified GZIPT. We have, actually, that's an incorrect stat. I think we're at 24,000, approaching 25,000 stars
[00:05:40] . It's five years in development, supports TypeScript, it's top-rate in performance, and it has Astro and Beach support. This is our star history
[00:05:49]  for the past little while. Well, it has a comparison to other projects beside it. Obviously, we're not quite in the realm of React and Vue, but,
[00:05:59]  you know, we're off to a good start. I guess the rest of the slides go into a bit more technical detail, but Ryan's here to explain it to
[00:06:10]  you directly. So at this point, now that I've introved the basics of the project, I'm just going to hand it right off to him, and we'll
[00:06:16]  take it from there. All right. All right. One thing that occurs to me is I do a lot of, like, live coding, and there's no mic stand
[00:06:25] , is there? Because I, okay, so one-handed live coding. All right. Let's see what we can do here. Okay. Give me a second
[00:06:33] . Because I've been working on a new presentation to see if I can get even more live coding into my demo. But, yeah, let's see if I can get
[00:06:42]  this going. One sec. You could use that pencil holder over there if you want. That's a good point. The blue thing. It's a good one.
[00:06:51]  Right there. You could stick it right in there. Seeking people's question is, will people still be able to hear me? Because at this distance, yeah, at
[00:06:59]  this distance, a dynamic microphone is not going to... I can turn that line up if you haven't. Yeah, we don't want to risk feedback either. It's
[00:07:08]  okay. Two seconds. Let me just adjust a couple things. All right. There we go. Kind of on-the-fly setup. All right. Well,
[00:07:28]  I guess to start, actually, how many of you are familiar with Solid.js? Like, okay. Yeah, I mean, this is something I probably should ask right
[00:07:41]  off the beginning, just because I've been giving some talks recently about Solid.js. And while you might have seen a lot of that content before or, you know
[00:07:50] , kind of trickles down, I was trying to change it up a little bit today. But depending on familiarity, you know, kind of gauge where we are in
[00:08:01]  this, because I still find the best way to introduce someone to Solid.js still is just seeing that transparency, seeing that ability for it to just, you know, come
[00:08:13]  up from just simple JavaScript. At this point, though, I feel like a lot of people have actually seen that demo. So that's why I was prepping something
[00:08:20]  a little bit different today. I want to talk a bit about Solid and Solid.js, which is the idea here. So let's keep on going. Right.
[00:08:34]  Logo pending. But Solid.js is solid equivalent to, like, a Solid kit or a Remix or a Next.js. It's a more opinionated framework
[00:08:45]  to make it a little easier to do server-side rendering, basically. But it's done in a very, I don't know how to call it, like,
[00:08:53]  solid flavor is the best way I can put it, which allows us to take things in, like, a slightly different direction. You might think that's a pretty bold statement
[00:09:02] , you know, taking things further along that path. But if you understand a little bit about Solid.js itself, it's not that surprising. So let's talk about
[00:09:10]  that for a minute. I'll try and go a little bit faster through this part if you're a bit familiar. But I started working on Solid back in 2016.
[00:09:17]  For context, it's about the same year Svelte was created. I actually have a private repo where the first commit was, I think, August 2016. But my
[00:09:29]  goal was to bring back fine-grained reactivity. I was a big, big fan of Knockout.js. Been using function components, building UIs, comp
[00:09:38] osing these things for quite some time. And I really liked those patterns. And React came along and said, hey, let's use classes. And I was like,
[00:09:46]  no, that's what I did in .NET. I did not want to go back there. It's funny how these things, like, go in cycles. But it
[00:09:52]  was actually, like, I had this very knee-jerk reaction to when I first saw it react. I actually like React a lot more today than I did back in
[00:09:59]  those early days. But, yeah, so I was kind of, like, on a mission to kind of prove things out, perhaps. To kind of show that maybe things
[00:10:06]  could be a little bit different than we thought they could be. You know, I kept hearing things like, oh, the virtual DOM is really fast or something. And
[00:10:16]  I was like, I don't know about that. You know, like, I want to see what's actually going on. So, yeah. I did that a
[00:10:26]  bunch. I came to this conclusion. You know, for all the good that we have in our component architecture, and, I mean, it's, like, everywhere.
[00:10:36]  We kind of conflated code organization with execution life cycles. And in pretty much every framework, components have this, like, runtime consideration. And, you know, they
[00:10:47] 're basically our primary state management. They're our renderer. They're really our everything. And this is not just, like, limited to the VDOM. This
[00:10:56]  is true of, like, I don't know, compiled solutions, non-compiled, template literals, you know, stuff like the web components you find. Single
[00:11:05]  file components. So, you know, the latest DSLs. Everything has this kind of, like, top-down structure where everything is done at this component granular
[00:11:13] ity. So, I get a, you know, a bit of it, like, who cares, you know. But the problem is, it's not just, like
[00:11:22] , a performance thing that's, like, you know, hits you. It's kind of, like, it informs every subsequent question, you know. It's, like
[00:11:31] , when do I memoize? What do I use for global state? How do I share reactivity between files, you know? When to use effect? What's
[00:11:39]  the difference between redux and context? And, you know, why does this log twice or re-render? Like, it basically affects everything that happens downstream of that decision
[00:11:50] . And the thing is, these topics have been dominating conversations for quite some time now. And I'd rather talk about pretty much anything else. Wait, how did this slide
[00:12:02]  get in here? No, in all seriousness, these two examples are more similar than most people realize. They've already painted a box around what a component is. You
[00:12:14]  know, you, basically, when you update this local state, you know, it triggers Komodo re-renders. And it doesn't really matter, like, the
[00:12:23]  syntax, you know, or whether the whole file is a component. It has this kind of thing in common. And so, like, whether it's a bunch of
[00:12:32]  hooks to tell us what to memoize, like, use callback, use memo, use ref, react memo, you know, all our dependency array fun. Or
[00:12:42]  a compiler to generate code that didn't come out. Is it just still loading? Yeah, there we go. Weird. A compiler to generate code like this. This is
[00:12:51]  actually from the React pseudo code from the React compiler they're working on. But it isn't really unlike Svelte, to be fair. You could, like,
[00:13:01]  write let to-dos and you end up with something like this. In either case, the user or the event updates the state, we mark the clone as dirty, and
[00:13:09]  then we rerun it. We check against memoize values to reduce work. It doesn't really matter if it's a set state or an assignment. It's all really
[00:13:17]  the same thing. And this is where I drop reactivity in. For anyone who's not familiar, just say, like, there is another option, perhaps. I
[00:13:29]  talk mostly about something called fine-grained reactivity, and I could go on and on about how it's declarative and composable, or how it's produced well
[00:13:37] -structured code that's reusable and independent of the component system. Even how, like, with a few basic primitives, you can do everything you ever wanted to,
[00:13:48]  including rendering. And with performance, you know, that is quite impressive. But it's generally easier to show this. So, you know, you might have seen this
[00:14:02]  example by now, but essentially, I'm going to go back to kind of the beginning here where we kind of got, like, a hello world type app. But this
[00:14:16]  time, there's a little special flavor in here with signals, essentially. So, if what I've got here is something called createSignal, friend, set
[00:14:25] Friend, it's a tupple. They're both functions. And the idea here is we could just read from a value to write it or, you know,
[00:14:35]  update it using our setFriend function and read it again. But the reason we care about reactivity is because we have this concept of effects, basically, which are
[00:14:49] , like, the other half of the story. And this way, we can compress the code a bit because now our effect reruns whenever the signal changes. Essentially,
[00:15:01]  we can start with a name like John, Septimary, and then it logs immediately without us having to worry about it. This is why we care about reactivity.
[00:15:08]  And even more so the fact that reactivity is transitive. By that, I mean we have this ability to transform it just using functions and still be able to benefit it
[00:15:20]  in the same kind of system. This is not a compiler doing it, it's runtime. And people, again, probably may have seen this before, but I still
[00:15:31]  love this thing. I looked at this straight off Dan Jutan's talk from Belgium. He's kind of mastered how to explain reactivity, and I love it because it
[00:15:44]  really can be done in only a few lines of code. I think, I usually say 50, but I think this example, which is kind of pseudo code, is
[00:15:53]  about 30 lines of code. So, just going to talk through it for a second, but essentially, a signal is a read-write tuple, right, where we
[00:16:04]  read from a value that we get passed in, and we write to it. But we need to have subscribers, essentially, if we wanted to update when our effects run.
[00:16:13]  So, from here, we add our subscribers, and we also add this idea of a global context. And this global context is a stack. We can ask what's
[00:16:26]  on top of the stack whenever we want. And that's basically the key to this mechanism, because as long as we have the stack, we can create our effect.
[00:16:35]  And this will do is, the end user provides an end user function, like my silly console log there. And every time we run it, we basically, and this is
[00:16:46]  including the first time we run it, we call that execute. What it does, is it pushes itself onto the stack, runs the user provided function, and then pops
[00:16:56]  itself off the stack. And this is important because any signal that is read under that context, while it's pushed onto the stack, can see it, and add it to
[00:17:06]  its list of subscribers, before returning the value. And then, you know, sometime later, like we set the name to Mary, like in that example. And set
[00:17:17]  the new value, go through the subscribers, call their execute function again, and that just restarts the whole cycle again. Tracking, pushing itself on the stack,
[00:17:31]  executing the function, adding it to the subscribers, and so on. So, no compiler magic, this is purely runtime. And, what's funny about it is, you
[00:17:44]  can start with this, and essentially, build a whole army of primitives on top of it. So, in solid skills, we have something called solid primitives,
[00:17:53]  but we also ship a few with the core library, things like create memo, which is for expensive stuff. Stores, which are for nested proxies. And
[00:18:01]  then, resources, which are for async, they basically turn promises into signals. And, yeah, I'm just thinking of time here. I've got to ask
[00:18:16]  you guys, how many of you have seen me turn vanilla JS to JSX at this point? Just out of curiosity. If it's only half, I'm going to
[00:18:26]  do it one more time, because I never get tired of doing this demo. But, okay. Let's do it. Give me a sec. Okay. All right.
[00:18:40]  I'm going to pull that out of that. Bang. Okay. This is what happens when you do a last minute. And one more, two more. And
[00:19:16]  this one. All right. One of them I opened twice. There we go. Hopefully, everyone can see this. All right. Why don't I just sit down
[00:19:32] ? That would make my life easier, wouldn't it? Yeah. But, yeah. The basic examples. People have seen reactivity before if they've used Vue.
[00:19:41]  Sure. Screw it. I'll sit down. People have seen reactivity before if they've used Vue or MobX or something. And every time we teach reactivity
[00:19:49] , we show this kind of thing where we're like, oh, let's console log something. And if you can see down here, if there's a count is
[00:19:54]  zero, the count is one. We're console logging. And I don't want to full screen, but I do a little better there. But, you know, we
[00:20:03]  probably want to do something. I want to show something a little bit more substantial because you can do more with effects than just console log. So I'm just going to
[00:20:13]  pick an H1 here because there's really nothing that stops us. And this is just vanilla DOM API that upsetting this text content of this H1 and then, you know
[00:20:30] , document body. Let's append this to the DOM count as one. So this we started at zero. But because this ran right away, like if I comment this
[00:20:45]  out, we might end up with two. Yeah. This is why I do this. Hot bottom reloading with our framework doesn't always work perfectly. Oh, wait.
[00:20:59]  This version of the playground. All right. It's all good. So if we have if we have one happens right away. So what I'm going to do is
[00:21:09]  I'm going to add a button and I've done this demo before. So the buttons already here makes life a little bit easier. So essentially what I've done is taking
[00:21:18]  our example there H1 and now added a button creating the button set some text content for the button and then add a click handler that says that, hey, make the count
[00:21:30]  count plus one every click the button. And this is just vanilla JS essentially just updating a signal and then this one effect updating this, you know, bit of text here
[00:21:38]  on the screen. And as you can see, we have a working counter here. So this is just our effect updating some text now instead of console logging and we just
[00:21:47]  connected a vanilla. But the thing that I want to show here is that no one really writes code like this. I mean, it'd be great like this could be
[00:21:56]  optimized. You could write like the most perfect vanilla code if you did this, but what it would be convenient. If instead we could just, you know, maybe write
[00:22:08]  JSX and have it compile into basically the same thing, right? Just some vanilla JavaScript. So if I take this, put this on here, click, bang,
[00:22:26]  get rid of this now. TypeScript has stopped complaining at me. You can see our counter still works because all this is is still just a DOM element. This button
[00:22:38]  here that we're pending to the DOM using vanilla API. We just happened to compile it to creating an element and adding a click handler to it. And we can do
[00:22:46]  the same trick with this H1 as well, because what we can do is we can just use JSX. And there's one little difference here. Solid's compiler knows
[00:22:59]  to look for function calls for signal calls, essentially, and knows, hey, that that could be reactive and knows to wrap that in an effect automatically. So what we
[00:23:12]  can do is do this, get rid of the dollar sign. And with that, we can get rid of this too. And it's still works because, again, we
[00:23:21] 're just creating H1 with an effect that just updates that one bit of text here that this one text note here. And and that's it. But I mean, truth
[00:23:32] fully, we still don't even really author like this. I mean, usually we want to kind of package up our stuff so we can reuse it. So I'm
[00:23:41]  just going to grab all this and stick it in here. And now the function, so we need to return and maybe an array with our H1 and our button. And
[00:23:54]  I'm just going to call our function because it's just a function. Call it once and then see a bunch of stuff. So you can spread it in and maybe format
[00:24:04]  it a little bit nicer. And OK, it's still working because, again, we just called a function that created some DOM elements and are appending them to the
[00:24:12]  DOM. And if I do a little bit more formatting, we could probably make our lives a little bit nicer. Like no one really does that. They kind of in
[00:24:21] line these. And instead of using arrays, maybe we can use like a GSX fragment and make it look more like a template. And if I format this all right
[00:24:39] . And actually, this is kind of a mess too. So why not just import render from solid JS web, which is very similar if you use reactive react on it
[00:24:54] . Basically, we only export all the web related stuff here. The core library solid is actually agnostic doesn't need to run with a DOM or the web.
[00:25:05]  It's basically run native or with WebGL. We can kind of clean up this a little bit too and make it render our counter into looks like there's an app in
[00:25:19]  here in this version of the playground. So you can go like that and this little thing refreshing to be sure our counter still works and it kind of looks like something some
[00:25:33]  people may have seen before in other frameworks. Although there's there is that huge, huge difference is that we're only calling this counter function once still. So you see
[00:25:44]  it's logging counter here when I click this, it's never going to log the counter again, because why should it because all we're doing is wrapping an effect around this
[00:25:53]  one thing. So you update the state the things that that change update just this one text node essentially. This seems like a cool trick. I've actually seen some other fram
[00:26:06] ers do this trick as well, even with a virtual DOM. But like this is also there's no virtual DOM. You just saw what we built without it. And
[00:26:14]  we can take this a little bit further because we can always add two counters to the page. Right. And as you see now, it logs twice. That's what that
[00:26:26]  two is. It's just telling you it repeated because now there are two counters. So now it logged twice. But each one has its own signal and its own state.
[00:26:34]  And when we click on it, they independently update. And again, we have used closures essentially to container our state. So we do get actual. I don't
[00:26:46]  want to call it like components in a classic sense, but we'd still get to basically encapsulate our code and make it modular. What's always interesting for this is if
[00:26:54]  you've been following along, it should be fairly obvious to know what will happen here. But it sometimes surprises people that if we pull the signal out again, this counter
[00:27:07]  is just a function that runs once. There's no lifecycle connection to it that now both instances just refer to the same signal. So we've effectively created global state just
[00:27:19]  purely by where the signal is created. Right. This is just using basically the rules of JavaScript. Right. If it's inside the function, then it gets enclosed with a
[00:27:27]  function. If you pull it out and it's referencing the same variable, it lives in that scope. And honestly, I could probably take this even further and show that
[00:27:39]  like we could actually put that state maybe in a parent component and pass it down through props. See this one's passing down as props children. So that's what this
[00:27:50]  is. And then we're passing down the click handler. And what I've done here intentionally is made each props children do something a little different. One's the value of
[00:27:58]  count and one's count times two. And the other one increments one and one increments two. Just kind of show how we can kind of mess with that.
[00:28:05]  And then we still have a counter console log and we still have our app. As you can see, it logs app and then counter counter. And as we update, we
[00:28:14] 're not logging anything because this mechanism of passing the reactivity through means that none of these components need to rerun for this. It's still just updating that one effect that
[00:28:30]  updates these text nodes. In this case, there's two now, one for each one. This one goes up by two. This one goes up by one. But
[00:28:38]  it never needs to rerun in the components. It doesn't matter how many components you add. You can add 10 layers of components of prop drilling. You can add context
[00:28:44] . None of that has any bearing on how this updates. And it's important to see, too, because we actually pass things down by value. Like this count times two
[00:28:54] , you might be thinking, well, you didn't pass the signal down. How is it still doing this? And there's a little trick to that. And it
[00:29:03] 's very similar to what we did with create effect. When we see the function call in the JSX, we wrap it in a getter, which means that accessing it
[00:29:13]  like props.name, that's the point at which it calls the function. Which is really handy because this means that the consumer doesn't need to worry about it.
[00:29:22]  The consumer can pass a string. They can use a signal. They can use store. They can use whatever they want. You author your component to how you want the react
[00:29:30] ivity to work. And then the consumer, like you don't have to write is signal a bunch of places. Like the consumer can just use it without having to worry
[00:29:39]  about like these kind of, you know, split APIs. It's a single API that just works optimally. But yeah, I mean, I talk about this a
[00:29:55]  lot. I call this the reactive advantage. And that's that components run once. There's no hook rules or stale closures. Templates compile to real DOM
[00:30:06]  nodes. And it's a, you know, like, it's a really super low abstraction over the DOM, right? Like, stay independent of components. And, you
[00:30:16]  know, you get to basically organize the code the way you want to, rather than to try and like, jimmy the framework into doing what you want. Funny
[00:30:25]  enough, though, I don't know how we are on time, but I'm not, I'm actually not here to talk about these primitives. I'm actually here
[00:30:31]  to talk about, I want to talk about some other primitives as well. And this has to do with the power of actually VEAT. I'm going to just
[00:30:40]  wax poetic about VEAT next, because I think VEAT is really quite cool. And their plugin system, which is actually inspired, I believe, by Jason Miller
[00:30:50] 's work on HMR, is, it's game changing. Because it really, it basically, I didn't want to make a meta framework, like Solid Start,
[00:31:01]  like a Next.js or Stock Connect. I had no interest in it. I pushed back for like years. I was like, yes, someone in the community will make
[00:31:08]  it. I don't want to make it. But about two years ago, I was like, okay, fine. Maybe there's something here. And the reason for
[00:31:17]  that was largely because of VEAT. And it starts kind of understanding what I wanted in terms of desired outcomes. I knew that SSR is where everything was heading.
[00:31:26]  That was a thing. Like, I created Solid not thinking about SSR. And then it was very obvious, even a couple years ago, that like SSR was going
[00:31:34]  to be the thing. Like, Next.js had already been taking off. At this point, people are like, don't even look at your framework if it doesn
[00:31:42] 't have like a meta framework. It's like expected. And a lot of the innovation in this space is finding how to better leverage the server client divide. So you
[00:31:54]  really needed SSR to be part of the package. At the same time, I didn't really want to throw single page apps under a bus, so to speak. I
[00:32:03] 'm trying to think of how to put this right. But like, moving between, you know, a client app and a server app doesn't mean you should like just make
[00:32:11]  all new libraries, right? And I didn't want it to feel like a chore. So it's good to have nice these like file system routing and all that stuff
[00:32:18] . But there's a lot more consideration when you get into SSR. And I knew that I wanted to make sure that we could actually make that kind of seamless. And
[00:32:32]  of course, this is the trickiest one. As you saw, Solid render is kind of like really different than pretty much everything else. So it needed to actually work with
[00:32:41]  that in a way that was optimal. It wasn't willing to just like be like, oh, yeah, let's just rerender our routes when data changes. That
[00:32:47]  would not work very well for us. So, you know, there's some challenges. And this is why I avoided it. Because like, to be at this, on
[00:32:56]  the other hand, I was like, oh, man, I didn't want to deal with this. Like, who wants to deal with that configuration stuff? You know
[00:33:02] , like that's basically what you spend most of your time with. Like, you know, when you're building stuff, you're like, oh, I've got to
[00:33:06]  do like a webpack, big classically. And also, hard not to be opinionated when you start like pulling all the tools together. And while opinions can be
[00:33:16]  good, I really wanted to try and make this project have wider use. Right? Because you want people to be able to adopt and use the framework. I wasn't just
[00:33:26]  going to like be like, no, this is the one way. Like, it's a different place when you have like six competing meta frameworks on the same framework.
[00:33:33]  You can be like, we're doing it the remix way. But for us, we couldn't have that, you know, like, we needed a meta framework that people
[00:33:41]  could use. And I'm not going to lie. I never bothered with this stuff myself. Like, create React app or Next, whatever. Like, never touched that stuff
[00:33:48]  before like a year or so before. I just had no use for it. When we built stuff, we built our own configs. We did all that. So,
[00:33:53]  like, it was like really strong arming me to actually go into the space. I was just like, I don't know if I'd use it myself. Like
[00:34:01] , there's a lot of considerations in this kind of zone. And, yeah, like another one. I didn't want to be exclusive. I didn't want to be
[00:34:12]  like, these are solve start only features. You know, I didn't want people to feel like they're missing out. You know, and this is about APIs and libraries
[00:34:21] . Ideally, you know, you just use everything that already existed and you'd be happy. You know, I didn't want to make a new router. I didn't
[00:34:27]  want to make a new, you know, like there's just so many considerations. There's suddenly, it's funny, the core library seems like something really small by
[00:34:34]  comparison. Like that can maintain. Now you're suddenly maintaining this huge thing. So, yeah, I'm giving a ton of reasons right now why I didn't want to
[00:34:42]  do this. You can kind of see why I wasn't too interested. But, like, I did find a way to get the upsides and combat the downsides
[00:34:53] . And as I mentioned before, this is largely a thing to beat. It's kind of based roughly on the role of the plug-in system. But the devil
[00:35:01] 's really in the details here. A lot of nuance. The key thing is that they did is that a single configuration for client and server allows you to build vertical plug-
[00:35:12] ins rather than, like, whatever that mess was we were doing before with, like, five different webpack configs or whatever. Like, you have SSR,
[00:35:21]  you have the dev, you have client build. These are, like, all with their own kind of configuration. And when you have to, like, build each configuration for
[00:35:30]  that special case, it becomes kind of tricky. Whereas what V allowed us to do was just go, like, slice it the other way where the same plug-in could
[00:35:37]  handle dev, SSR, and client all at the same time. And for that reason, you start slicing stuff differently. You start, like, slicing stuff by concern
[00:35:46] . You can be, like, okay, file system running is a concern. You start slicing it that way, and that opens things wide up. Because now we have these
[00:35:53]  building blocks. You know, it makes things kind of more effortless. And also, it just came with a bunch of really other cool stuff, like virtual files and building
[00:36:03]  blog imports. They made stuff really easy. And this is really important to me because, like, you know, if we could just point people to one direct place,
[00:36:16]  we could -- we didn't have to, like, do much work. It basically leveraged the whole existing ecosystem. You know, things like CSS, you know, built
[00:36:25]  in the bundler. Things, you know, like, we still have solid-specific features. But anything we built for solid-start would work with any solid project
[00:36:36] . Solid B project, I guess, at least. And more so, this could allow us to use solid-start for any solid project. Right? Today we have the
[00:36:47]  D-get templates. But this could replace that, you know, right now it's in beta. So I still recommend doing that from my side stuff. But this
[00:36:54]  had the ability to scale up and down. And it basically addressed, like, half the things on my list, you know, without having to worry about it. You know
[00:37:03] , stuff like file system routing. You know, there's no point making a solid-start router for this. You know, it's just a V plug-in.
[00:37:10]  And honestly, we've found since then it's even better than that. With such a modular approach, we've been able to test ideas really rapidly. It's just
[00:37:18]  a matter of writing another V plug-in. This sort of experimentation is really important to us. And I'm going to give you an example. And this is part
[00:37:27]  of the solid-start release announcement. But essentially, in solid-strouter, we've had for the last couple of years this idea of a route data function, essentially
[00:37:40] . Defined for a route, you essentially run this function when you navigate to it. And this works with nested routing as well. So it would work on the client
[00:37:50] . And it would parallelize the fetching. And it would work on client or server. We've kind of built this in. But one thing we found when we
[00:37:59]  went to a meta framework was people were like, where's git server-side props? Where is that, like, I always want to run on the server patterns, load
[00:38:06] ers, all that kind of stuff? So it became an interesting problem because you're like, you don't want to, like, alienate the existing client-side patterns
[00:38:14] . You want to kind of keep the flexibility there to kind of go between. And that's what led us to, like, one of these kind of experiments. Because
[00:38:22]  we're like, well, what if, you know, we could actually just introduce a primitive to do this? Sorry, did it go too far? Yeah. Server functions
[00:38:36] . And this is an idea that we could write any server, sorry, any function that we could run on the server. This isn't a new idea. We've
[00:38:44]  seen stuff like this using proxies kind of like with Blitz. But the idea is we could just write a plug-in for that, a very specific plug-
[00:38:51] in that would work through dev, work through SSR, work through client, and just package it up as a single thing and just try the idea out. And as
[00:39:02]  it turned out, we kind of really liked it because it was quite powerful. The first obvious thing was when you have the same function in your code, well, you could
[00:39:10] , you know, call something silly here, like read Hello World. And if you didn't give the right arguments, well, TypeScript will complain to you, right
[00:39:20] ? Because it's just defined in the same file. So, you know, we could basically type check. It's not, it's over the network boundaries. So
[00:39:29]  there's like, you know, considerations there. But you could kind of develop with a little bit more confidence that these server functions could work with your TypeScript on both sides
[00:39:40] . And, you know, nothing stops people from using it, you know, in a normal kind of setting because they did expose a URL. What was really cool here is
[00:39:50]  that it kind of encapsulated the whole API process. I was really big on this because I wanted to see if we could do stuff with our PCs instead of like API
[00:39:57]  routes because like if you control both sides, you can optimize for that case more. And as I said, this started a simple experiment because really what we wanted to do was
[00:40:06]  take this example of our route data and then be like, oh, what if when we fetch the story, we just servered it, right? Now, we could use
[00:40:15]  reactivity to refetch it, get all the benefits of the fine grained updates. This could be this great resource, but it could be like solid query or whatever
[00:40:23] , like pan stack. It doesn't matter what it is. We could just use the same prunas in our ecosystem and upgrade them to basically be like it's server
[00:40:31]  side props. And that was really cool. But, you know, you could, you see that from these building blocks, you start going, well, actually, I
[00:40:45]  want more patterns. Maybe I want to do stuff like remix or something. So we actually ended up kind of building in a primitive ourselves using server primitives just to kind of
[00:40:56]  streamline people who wanted like the, this is their base case scenario. Again, the primitives exist so that we can build upon them and this is part of that kind
[00:41:04]  of experimentation. But with something that gets server data, we could still keep things like, you know, having update keys and essentially still be able to fetch always on the server
[00:41:22] . But as I mentioned a moment ago, this is so that we can power the converse side, which is create server actions. And this is a way that we
[00:41:34]  were like, again, thinking very RPC instead of like API route. So we're like, we can put as many server functions we want in a single file.
[00:41:43]  We can spread it out. We don't, we don't have to be limited to the file system running to do this. You can kind of arrange the routes the way
[00:41:50]  you want. And then you can just arrange the data the way you want. Because these, this is just a way of designing your components. So we're like, what
[00:41:58]  you could make as many actions as you want. And what are actions? Well, it's important. They tie into, this is a mechanism for mutation that's a bit
[00:42:05]  opinionated, which allows us to kind of, do optimistic updates. So like, in this simple example, we're just toggling a to do. You can do
[00:42:15]  a picture, a to do example. You're just checking a box and switching it. What if we could, you know, know if it's pending and show the optimistic
[00:42:23]  UI along with it? And, you know, even furthermore, what if we could still invalidate it the way that, this is a very similar pattern to like,
[00:42:33]  can stack query or whatnot, but use the same kind of tools again. Again, you could just not use the system at all and use something can stack query. But
[00:42:42]  the point was, we needed to ship with something that made this really straightforward for people to kind of like, have the full solution. And while we're at it, I
[00:42:50]  mean, why not have it work with forms and form data and have progressively enhanced forms? Right? So you can see how these things all layer on top of each other
[00:43:00] . This is obviously more technical, but it reflects our design philosophy here. Because it's about being able to find the right pieces to kind of both empower the ecosystem and also
[00:43:13]  power experimentation. Because you can see from a straight path, we can basically, as long as we have the right primitives, we can accomplish very powerful things. All
[00:43:24]  right. My favorite part of the story is that it started from an experiment with that one primitive. And that's basically how we develop this solid. We create a primitive
[00:43:39]  and try and see how to use it to determine its place in the world. I mentioned solid primitives before. It's a great place. It's kind of like
[00:43:45]  React Use or View Use. And sometimes there is an obvious need that can only be handled by core and it ends up in the core. But other times, we test ideas
[00:43:56]  for months, if even years, in our solid primitive repo. You know, to kind of get an idea of how useful this could be for people. And I just like
[00:44:04]  it because this encourages community adoption and, like, being part of the conversations, RFCs, things like that. Kind of help decide where the future solid goes.
[00:44:17]  And the other cool thing about building primitives is a lot of the work we've seen with compilers. Things like people building stuff on top of solid with Babel
[00:44:25] . I've seen Svelte-like compilations because of how easy it is to build on top of it. And really, the second I saw V, for
[00:44:33]  example, I knew we were kind of more of the same, right? That's kind of where the thinking is. Yeah. Now, I got one more kind of
[00:44:42]  set of demos to do. How are we doing on time, David? I'm looking at my clock and it's still California here. I'd say, can you do
[00:44:52]  it in 15 minutes? Yeah, I think so. Yeah, because I tend to like Hacker News demos. I don't know if people have seen Hacker News
[00:45:02]  demos. But, I mean, this demo kind of lives up to what I was talking about here. I didn't actually put this together. Nikhil did. And
[00:45:14]  the truth of the matter is SolidStar is so volatile. I do not even know at this moment. And I don't mean volatile on APIs. I know that you're
[00:45:22]  like, why is he telling me that SolidStar is volatile? We've been -- this is an experimental feature. So, we've been moving faster on it than on the
[00:45:29]  core branch. So, we're going to see what the state of it is right now. But, essentially, I just wanted to kind of show that philosophy and practice
[00:45:39]  in two secs. So, I'm going down. I'm sorry. All right. Get off that screen. Nope. All right. All right. So,
[00:46:02]  I'm kind of already ahead of myself. That's what happens when you don't have time to undo your demo. All right. It's all good. What I want
[00:46:17]  to show here is that with SolidStar, I've got this Hacker News demo that I've kind of showed off before. And I can make sure the vconfig
[00:46:27]  is in reset. What's cool about SolidStar is we can do something -- we can start a SolidStar project and say SSR false. And, essentially,
[00:46:38]  if I -- PMPM -- I'm never -- All right. Sorry. I'm going to use builds instead of dev mode because that's the only way I can
[00:46:57]  actually show the actual JavaScript in dev mode. We kind of pull everything in. We kind of pull everything in. So, excuse my time here. But I'm going
[00:47:03]  to do build. And then I'm going to do start. I'm going to show off what I'm showing off here. Okay. Fort 3000. Luckily, nothing else
[00:47:13]  is on here. We'll go with Fort 3000. What goes well, we'll have a client-rendered Hacker News demo. And by client-rendered
[00:47:24] , I mean that when we look at the network tab and we look at the document that we fetched when I refresh this page, what we're going to see is
[00:47:34]  that this document, of course, yeah, SSR false is working wonderfully. Okay. This is exactly what I was talking about. Oh, did I not -- Okay.
[00:47:48]  Let's make sure I saved everything. Okay. Oh, and let's make sure we're in the right B config. That'll help. Sorry. Probably demoing
[00:48:18]  the to-do MVCs just the other day. All right. Cool. Proxing to -- oh, you can really feel it. Proxing through my
[00:48:33]  phone. Oh, it's because I'm in slow 3G. What you just saw there was streaming working, it looks like. But essentially, that's why there's
[00:48:43]  -- actually, in this case, it wasn't even streaming. It's actually -- what you're seeing is client-side rendering. Sorry. My bad. Yeah. So
[00:48:50]  what I want to show here was that you can actually see the loading because we don't -- in a client-side rendered app, you don't fetch the data until
[00:48:58]  you render the HTML. So you go, you send the HTML, load the JavaScript, then run the JavaScript, fetch the data and do it. And you're seeing suspense
[00:49:07]  kick in there. So just to show what I was talking about. You can see here that the body is empty. And then, essentially, what we're going to
[00:49:16]  see over the network is we're literally fetching to stories and grabbing the stories from this API endpoint for the client. As we navigate around, it kind of upgrades up.
[00:49:25]  So this is basically your Create React app of the world, your standard solid DGIT template version of it. But what's cool is you can build this with Solid
[00:49:34] Start and get the leveraged stuff like file system routing and our actions and, you know, and forms and all the cool features that I was just talking about. Except server
[00:49:43]  because server doesn't make any sense because it's client-only here. But you can kind of get started and use our nested routing and all that kind of stuff
[00:49:50] . But the difference between that code base, because, yeah, just to kind of show you the data fetching here is just this route data. It's funny.
[00:50:02]  It's get server data. It's funny that that, yeah. It's just, it's just, it's just like this kind of route data function more or less
[00:50:12] . And what we can do now is we can turn on SSR true. One thing that you might've just saw there and you might be going, what's going
[00:50:25]  on is our, in, in SSR false mode, our API routes can still work. So you can make it so that like just the client side isn't SSR
[00:50:33] . It's an interesting choice, but it is something one could do. But now I'm going to change it to SSR true. And when we do that,
[00:50:46]  you're not going to see that loading right now because we're actually doing an async render, not streaming. We could change it to streaming in the input, but it
[00:50:55]  doesn't really matter for the point of my example here. If I look at the network, um, and clear all the logs, you're going to, you're
[00:51:06]  going to see, uh, where are my docs? Okay. Part of me wonders if I've edited the wrong file again, or not. Okay. Let's make
[00:51:24]  sure that I actually built it. Because what we should see is now the HTML is the whole HTML. And what we should also see, but we're not seeing is
[00:51:40]  that the data fetching does not happen on the client, which is very strange. Sorry, not Discord. No question. Um. Okay. Something's up to
[00:52:09]  the server. Create server data. Give me just two seconds. Being too fancy here. This is what I get for playing with this exact same demo on stream before I
[00:52:19]  come here. Okay. Okay. Okay. Something's up to the server. Create server data. Give me just two seconds. Being too fancy here. This is what I
[00:52:30]  get for playing with this exact same demo on stream before I come here. Okay. Okay. Yeah. I don't know. Okay. That's a good question why
[00:52:56]  that was having create server data. But essentially what we now see here is that the, when we refresh this page now, we're not getting any fetch requests happening because
[00:53:16]  it is until we navigate. When we navigate, we're going to see the fetch request for the new data. But essentially on load, we now have rendered our page
[00:53:27]  into our document here. Uh, there we go. Let me see it all here. Okay. So this, this is pretty typical. This is like how an XDS
[00:53:39]  type app works. We get service side props. So this is like, uh, kind of like, um, one, one stage up. Right. But one of
[00:53:48]  the cool things we can do with experiments like this is we can actually look at different types of, of modes of how we can do rendering. And one of those kinds
[00:53:58]  of examples, um, is this one here is what if we can do here. Do something. I don't know if you've heard of Astro, but essentially if
[00:54:16]  we could not send all the JavaScript for this page, cause this page that we just loaded, it loaded. Um, sorry. Where is it? Sorry. This is
[00:54:28]  why you open the stuff in incognito and not in the thing. Cause it's inject script is from my, uh, is from my, uh, my Chrome add
[00:54:37]  ons page. Of course. Now let's load it. We'll see that for this particular page, we're looking at something surprisingly large, but whatever, we're
[00:54:53]  looking at something about 19 kilobytes here. Right. And the thing is, what if we didn't have to do that? What if we could only ship, um
[00:55:03] , less JavaScript and I'm going to build this again. Um, of course this is what happens. Oh, you know what it is. Sorry. I forgot part
[00:55:20]  of my demo. This is me being sloppy. We also have to, we also have to define. Change one piece of our code here where I'm going to say that
[00:55:30] . Okay. Now, so before we do this, sorry. I'm, I'm, I'm actually just going to put another one really quick here. It doesn
[00:55:45] 't really matter. What I didn't show you guys was the comments page. In the comments page, you actually need JavaScript, no matter what you do, because you want
[00:55:52]  to be able to collapse these comments. Right. And essentially this page needs JavaScript interact. It's the comments kind of toggle all the way down through the page. Like
[00:56:02]  they wrap recursively through the page. It's kind of hard to avoid putting JavaScript on the page to make this work. And what we can do here is we can
[00:56:10]  say that toggle, we can make it into an island now. So this kind of inverts the flow of it. And yeah, because what the compiler was telling me was
[00:56:20]  that the compiler was actually looking in the comment and actually seeing both versions of toggle. So, um, let's start here. I want to comment. Did I not
[00:56:33]  save it? Just delete this whole thing right out. It doesn't. I didn't import it. My bad. Sorry. Solid start. Port unstable island from solid start
[00:56:50]  server. I believe. No. Solid start. And there we go. If we do this now. There we go. What we ended up doing is sending significantly less
[00:57:16]  JavaScript. In this case, this was 19 kilobytes before. It's now seven kilobytes. And essentially our comments still work, even though it's smaller,
[00:57:25]  but at a cost. It's not that simple because when we switch pages, we're now actually doing a full page reload. Because this is how we save sending the
[00:57:31]  JavaScript. We don't need the JavaScript to render the parts of the page that don't change. So, again, all we did was change that one little import.
[00:57:40]  And now we can kind of define that. No, these things actually need to be on the client. And we significantly save the JavaScript payload. But what's cool about this
[00:57:51]  is we can continue to do this sort of experimentation. And one of the examples of that is we actually like, okay, what if we wanted to embrace this and actually
[00:58:04]  add a router to this mechanism. And that would allow us to keep our client side navigation. Well, again, just one piece building on top of one piece. And
[00:58:17]  the fact that the way the beat slices the plugins makes this a lot easier for us to kind of experiment with that. I'm not going to change any of the other code
[00:58:24] . I'm just going to say island rather true. And essentially, we got like a little bit more JavaScript here. I think it's now like 0.2 kil
[00:58:35] obytes. It's still doing this significantly larger than smaller than what would be otherwise. But now when we navigate, this thing isn't actually refreshing. This is a client
[00:58:46]  side navigation. And it does this by passing HTML, actually, of all things, over the wire on the API request. That way, the server still renders the
[00:59:02]  static parts and we can send the least amount of JavaScript. We can't get the benefits of the fast page load in small JavaScripts of partial hydrated frameworks like Astro.
[00:59:12]  But we can keep the client side interaction. And the way it actually does this is it uses nested routing still because we wrote as nested routing. And if I
[00:59:20]  expand this out, you'll see that this header never needs to change. I mean, obviously, it doesn't in that example. Let's go to let's find a
[00:59:30]  story with 700 comments. You'll see that it just swapped this out down here. It didn't even touch this because it's the same nested routing technique that you might
[00:59:39]  find in Remix, except it's applied to islands. So we can save the JavaScript and get the experience we've come to expect from a developer experience. And keep
[00:59:53]  that kind of like single page app feel and statefulness, you know. So this is really compelling. We actually got the community to help us. Addy Osmani
[01:00:03]  was working on the movies demo, taste movies demo app with a bunch of frameworks. And we were like, okay, well, let's see if we could take that new
[01:00:12]  tech, take that technology and apply it to an app that's a little bit more interesting than a hacker news demo. And so we did write this this app, you
[01:00:24]  can I did add a cheesy browser like reload. But if you see this, this isn't spinning on us. This is actually client side navigation here. And what you
[01:00:34]  will see is even though this page kind of behaves, you know, how you'd expect, we've still managed to send very little JavaScript over the wire here. This
[01:00:48]  this page is 13 kilobytes of JavaScript, and it doesn't matter if I'm navigating around because it didn't need like honestly, this is mostly just it's mostly
[01:01:00]  static page. This is an MPA, you probably wouldn't send almost any JavaScript, maybe a little bit for these posters, but essentially, it's just anchor and
[01:01:11]  error boundary in the router. It's very minimal. But what's cool is it just doesn't, it's scale, you know, this is the end, we don
[01:01:18] 't need more JavaScript unless okay, let's add a search feature. Okay, you know, and what's cool about this is, we can type in the search and have
[01:01:27]  it do stuff and our input not lose focus, even though we're refreshing. the page. So like, this kind of means to have the interactivity we expect from
[01:01:35]  a single page app is real. But we can with the savings you can have from a multi page app. I'm very excited about this technology. That's why I want
[01:01:44]  to show it off. Because, you know, 13 or 14 kilobytes of JavaScript is actually insane for this demo. Like, they made this demo in other meta frameworks
[01:01:57] . And like, the sole start regular would be about the same as felt kit. We're basically very similar. So it'd be like something like 34, 35 kil
[01:02:09] obytes of JavaScript. We're less than half with this demo. Right? And, you know, you start getting to stuff like next and angular. What I did
[01:02:19]  to get these numbers is this is not a single page load. This is like doing what I just did. Load a page, navigate to the next listing page and then clicking
[01:02:26]  into one. So I am counting some of that, you know, page navigation stuff going on. Because like the initial payload felt only 26 kilobytes, you know
[01:02:35] , which only doubles. So it's not a big deal. But I was pointing out here with these numbers is like, how it scales differently. We're changing the math
[01:02:44] , essentially. And that's interesting to me. So that's mostly what I wanted to show here. I just want to show how solid start is both our foray
[01:02:56]  into meta frameworks from being able to use what we're familiar with and build on top of these primitives. But I also want to show that like it's kind of
[01:03:05]  pushing forward how we look at experimentation and furthering the solid ecosystem and innovation, how we continue to stay at the front of innovation, how we continue to, you know,
[01:03:17]  push the boundaries. I was too lazy to make another slide, mostly because I just can't talk this one. This is like my favorite slide. This is from an AWS
[01:03:26]  conference from a couple of years ago. I just keep on coming back to it. I said, I would have told you be crazy to take this on before. Like
[01:03:36]  solid start is a lot of work. But honestly, now that I see what we can do with this and see what we've kind of started to accomplish here, I just
[01:03:43]  can't picture not, you know, going through this work to be able to show off this potential. It is in beta. So you can go and try it right now
[01:03:59] . The beta is largely less of a features and mostly about bugs like you saw tonight. You know, there's a big list. Could definitely use some help triaging
[01:04:10]  that stuff. That's something solid ecosystem definitely needs to find our balance on because we have a lot of trailblazers and maybe not. It is a split, but
[01:04:23]  when people go off and build, you know, crazy stuff, there also has to be, you know, people working with it every day and actually, you know, you
[01:04:33]  know, making sure things are stable. But yeah, it's there. But yeah, it's there. You can, you can try it. The docs are also
[01:04:39]  rough. Could use help. But it's out there. And that's an important part for where we're at right now. Yeah, I just dropped some social links
[01:04:48]  and stuff. But yeah, that's what I wanted to say today. And if you really like nerding out on this stuff, you've got my YouTube channel.
[01:04:55]  So thank you. Awesome. Thank you. Ryan actually streams every Friday around, what is it, two, three, three, four o'clock EST. So you can
[01:05:09]  check that out. They're usually about three hours, sometimes five hours. There are more five hours these days. More five hours. I'm going to welcome Moshe
[01:05:20]  up and he's going to be giving a talk on solid JSX transforms. Hello, everybody. My name is Moshe. If you're on, all right.
[01:05:48]  My, my talk today is about. My talk today here is about the JSX transform for components. That is Ryan's show before the whole reactivity intro, a little
[01:06:02]  bit about how the transform turns JSX into DOM elements. I'm going to concentrate specifically about how it transforms component calls in JSX. By the way, is the
[01:06:16] , uh, mic is good or is it? I think it's, I think it's kind of functuating. Uh, yeah. It's kind of spotty
[01:06:21] . It's tricky to work with. Yeah. Feel free to not use it. I think everyone can hear you. All right. Or use it. It's okay.
[01:06:29]  I think raising my voice will be better. Yeah. Yeah. Okay. So, um, Ryan actually covered this in his talk, but he did it in like half
[01:06:39]  a slide. So we're going to spend like 15 slides on it instead. Um, so let's begin. Okay. First of all about me. Um, my
[01:06:49]  name is Moshe Omener. I am on the ecosystem team for, at solid JS. Um, at work. I'm a software developer at mix.com.
[01:06:57]  The Dropbox for music. If anyone's interested in music, check it out. Um, on this score, you'll find me at fool's wisdom. Yes.
[01:07:05]  I have a lot of fool's wisdom to impart and get up finally there. Um, so this begins with Ryan showed before all components are just functions. That means we don
[01:07:20] 't, we run an entire function and then if the output or replace the output with the output or whatever, um, we just run it once and then every, and then
[01:07:32]  we update fine grained, um, whatever updated. So, um, is very important, right? Because since JSX transforms Dom JSX into real Dom nodes,
[01:07:44]  if we were to rerun our whole function, every time we updated count over here, we'd be recreating the button. In this case, it's well, just
[01:07:51]  the button. If it's something, another component, this might be half your application, which you're re-rendering. Um, which is okay if it's V
[01:07:58]  Dom, right? It's not that okay if you're doing it all the time, but because it's Dom nodes, Dom nodes are expensive to create. You don
[01:08:05] 't want to be constantly redoing that. Right? So, it's very important that we limit our re-renderings, which is why, um, for as
[01:08:13]  performance consideration, it's very important functions only run once. Um, so what happens is what happens when you only run your component once? How do you update your state
[01:08:25] ? How do you update Dom, right? So, um, in this case, I just took an example from create resource. Um, my point here is, is that
[01:08:34]  if you're passing a signal somewhere, um, you need to pass the signal, right? You need to pass by reference the signal, not the value. If you
[01:08:42]  pass the value, you just get the value. You have no way of listening for updates, subscribing, um, updates. Um, create resource actually accepts either one of these
[01:08:51] . Um, but if you pass the first case, then you're only passing the value. You can never update that. You might update item ID, but it's not
[01:08:59]  going to rerun because you only passed value. If you pass the signal itself, then every time you update the signal, um, then you get, you rerun
[01:09:08] , um, the fetcher. Um, this is pretty core, right? If, if you're, if you're looking at solid primitives library, then, um
[01:09:16] , you'll notice that a lot of the primitives there, they accept either, many, many oftentimes functions specifically in order that they should be listened to updates on signals.
[01:09:26]  Um, yeah. Um, so similar to how primitives work, you would think that, oh, well, components work the same way, right? If that's
[01:09:39]  how primitives work, then when I pass, um, if I want to, if I have this counter that I showed before, I split it here into two components,
[01:09:46]  right? So it's the child, the parent. Um, and the parent is just creating the state and passing it to the child and passing the updater, update function
[01:09:54]  to the child. Um, so you think, oh, it's literally the same thing. All I'm doing is, um, I'm just. accessing it on
[01:10:00]  prop, accessing it on the props object. Right? It's literally the same thing. Um, I have to pass, pass the signal and call the signal. Same experience
[01:10:09]  I would have if it was, um, all one component. Um, this is pass the reference, right? Pass the reference is the intuitive way, um, that you
[01:10:19]  would handle this. Um, so you can do the, you can write components this way. I think in, I imagine in like in Vobi, which is our
[01:10:28] , um, Fabio on the ecosystem team wrote a trim down version of solid. I believe there, that's how you would write something like that. That's how you
[01:10:35]  would write it. Um, you can do that. Um, you can do that. There's nothing wrong with that. Um, but we're gonna concentrate on the
[01:10:40] , here. This talk is about the feature of the transform that lets you actually pass by value or pretend you're passing by value and still had everything work. And we
[01:10:49] 'll see why also, why that's an advantage. Um, yeah, so what's the downside? What, why would you not want to author components like you do
[01:10:59]  in Vobi? So the problem here is that if I want to pat, like this is an abstraction over a span element, right? There's nothing special here. Um
[01:11:08] , but what happens if I want to write the text inside to be dynamic, in this case, I want to modify it. First, I want to make sure my text
[01:11:17]  is uppercase, right? So I need to know, am I being passed text or am I being passed a function that returns text? Am I passed the signal
[01:11:26]  or am I passed the string itself, right? Um, and which one should it be? Should it just be text to uppercase? It should, should we wrap
[01:11:34]  it, right? Like how, how do you manage that? Um, so obviously there are ways around this. Um, like most obvious of course, is that if you
[01:11:44] 're passing a string, never pass a string, always pass a function. That returns a string. Um, that's not great. Um, well, I mean,
[01:11:51]  you could, it just means you're wrapping things all the time. I mean, you could do that, right? Um, or second option is that you can use this
[01:12:00]  resolve function all the time. It just says, oh, it's a function. It's a signal. Let's resolve it. And then everywhere you're busy using
[01:12:09]  this resolve all over the place saying, oh shit, you're constantly checking. Are you, am I being passed the primitive value, a value or a function? Um,
[01:12:17]  it's not great. Um, I would say this is probably a worse option than wrapping, over wrapping things and functions. Um, but again, if, if you
[01:12:26]  want to do this, it works. Right. And, but again, we want to avoid this. Um, so Ryan showed here earlier about how we have transitive
[01:12:37]  dependencies, right? If you have, we have your signal, you create the signal. We have a function that literally is nothing, just returns the value of the signal
[01:12:48] . And we have the effect, which calls that function, right? Calls get count. It's not in the, we did, it's not the code doesn't
[01:12:56]  explicitly call count, right? Like spells compilation wouldn't really work here. Um, but this is resolved runtime dependency tracking. So the effect is tracking the count, right?
[01:13:07]  It's tracking the count signal. So since count is transitively accessed inside the effect, so the effect, it is now a dependency of the effect and the effect
[01:13:19]  will rerun whenever it changes. Um, right? Even though it's transitive, it's not directly accessed. And this is all a feature of solid using runtime tracking
[01:13:29] . And this is the trick that solid is going to use to allow us, um, to pass, to pass signals by value, um, or make it look like
[01:13:37]  we're passing a value instead of passing by reference. Um, so how does it work? So here's an example of passing things by value, by, by, by
[01:13:50] , by value. Yeah. So we're not calling the function. We're not calling props.count. We're just accessing it, um, here we're passing
[01:13:59] , passing it by value, right? We're passing the value of count. Um, so why can, this is what we want, this is our end goal. This
[01:14:07]  is what we want it to look like. We don't, um, and we want to pass the value not by reference, right? And the reason is, is that
[01:14:15]  this way we can, we can choose. We want to be able to choose, um, does this count, can, this can be a static value or it can
[01:14:22]  be coming from a signal. And it should be tracked if it's coming from a signal, if it's static value, whatever, just passes that value. So what can
[01:14:28]  we do to get that functionality? Um, yeah, so we had the parent function before or let's go back so we can all see it again. Yeah. The
[01:14:41]  parent function is literally just parent create signal and it's creating the child. What if instead of the way you would compile that code, um, would be to this, right
[01:14:52] ? You would say, oh, child is a props object count passing by value. So we pass and count and set count. The problem with this is obvious that there
[01:15:03] 's no way of tracking updates to count. Whatever the value of count was at the beginning, that's what you're left with, right? Um, there's no way
[01:15:09]  of tracking that. But the solution is actually pretty simple. We just wrap, instead of count being, um, a property, it's, um, it's a get
[01:15:19] ter, a getter function. And under the hood, right? you access props.count, you're actually accessing this getter. And this getter is just
[01:15:30]  calling this function. So because transitive dependencies are a thing, well, whenever you access props.count, it's actually a function call, even though it looks like a
[01:15:40]  static property access. And of course, the SolidCompiler, we'll see in a moment, SolidCompiler will, even if SolidCompiler did this
[01:15:50]  all the time, it would work the same way, right? It doesn't matter. Because the important thing for us is that we shouldn't have to wrap it ourselves
[01:15:57] . We shouldn't have to wrap it in functions ourselves. And we shouldn't have to be using a resolve function. This way, SolidCompiler is doing it for
[01:16:04]  us. You don't have to pay attention to that wrapping. SolidCompiler doesn't actually always do that, as I'll talk about in the intro at the end
[01:16:11] , but this is our solution as to how, as to how we can use props.count and we get tracking reactive, we pass that value and still get reactive updates
[01:16:26] . So yeah, this transit function, right? As I showed earlier, it's the same thing. Function getCount, returnCount, getCount,
[01:16:35]  returnCount, all the same thing. And it works, right? So this way, props.count is always up to date. How are we going to compile
[01:16:47]  it? Yeah, so, and as a matter of fact, I just showed what we would compile it to. SolidBasically compiles it to pretty much the same
[01:17:04]  thing. It's the original code. The only difference here is this createComponent call. I added in, this is what the compiler does. There are reasons
[01:17:10]  why we use createComponent and we don't directly call parent child directly. Something we don't want to get into here, but suffice it to say that solid
[01:17:20] 's whole run-once thing will fall apart. Pretty good. Due to the way that things are actually inside other effects and effects we run and we just create a mess.
[01:17:30]  So therefore we always use createComponent, but conceptually, it's just calling child with that object there. Yeah, okay, so that's like, that
[01:17:44] 's the body of my talk. Like we're not doing effects. We're not syncing props from the parent to the child. We do obviously use effects to update the
[01:17:53]  DOM, but there's only one effect at the bottom. Everything else is just in terms of transit dependencies that rerun that last effect, right? There would be a
[01:18:00]  great overhead if we were a lot of overhead, if we were trying to sync properties instead. Yeah, so which props are into getters? In this example, the compiler
[01:18:13] , right? Only compiled count, didn't compile setCount. The reason is simple, setCount is never going to update. It's just a plain variable.
[01:18:22]  Variables are not reactive, right? You have to either call a function, a signal or a property access. So the compiler knows that setCount is never going
[01:18:30]  to update, but count might update. So it goes ahead and wraps that. And of course, if it happens to be a static variable in there, like it's just
[01:18:39]  a function one-off that turns a string, who cares? The effects, well, at the bottom, we'll just call it never rerun. So, yeah.
[01:18:49]  So this explains our very, very common issue that we have in Solid, which is don't destructure your props. And the reason, I hope, after this explanation
[01:19:02]  of how component props work, it's pretty simple, right? Because the way we do it is that we use transitive dependencies. So that means we're tracking whatever
[01:19:14]  is called during the effect execution. If you destructure your props, you're calling that setter right when the function begins, instead of inside an effect. And that
[01:19:24]  means that your effect just gets a static value, the value of the signal. What we want is that we should have props.count should look like a value, just
[01:19:34]  pretty nice to alter components that way. But it should actually be a function call, should be a getter call. If you're destructuring your props, then you
[01:19:43] 're accessing the value of the points of destructuring, which again, if you destructure inside an effect, then you're actually tracking those properties inside the effect, which
[01:19:52]  is fine if that's what you want, right? But if you're destructuring in the definition of the component, then you're going to have a problem because
[01:19:59]  you're just getting a bunch of static values and the compiler's efforts to help you just can't help you because the compiler only touches the JSX. There are, of
[01:20:08]  course, some Babel plugins that have been built to extract this away and say, oh, you can destructure your props and the Babel plugin will bring you back into
[01:20:21]  one props object and then just access it in appropriate places. This is a thing, Babel on destructures plugin or something. There are, I think it's
[01:20:33]  one. There's another one in SolidLabel that supports this. There are a few Babel plugins that have been built in the community that allow you to destructure if
[01:20:43]  that's what you want. Finally, also, it's not covered here. I should have added it, but whatever. There's also the ref property. The ref
[01:20:52]  property is a special property. It's handled specially. Even though the ref property is up, if everyone's familiar with the definitions, the ref property on JSX can either
[01:21:03]  be a function or it can be just a static variable, and Solve will assign that variable. When you pass ref to a component, though, or really in general
[01:21:15] , it always gets passed as a function. So internally, inside the component, if you ever try doing props.ref equals whatever, that's not going to work. It
[01:21:27] 's props.ref, and then you call it with the element that you want. I would show an example of it, but whatever. It didn't make it in
[01:21:37] . Just something you should probably take a look with the compiler if you're interested. I think that's it, right? Yeah. Finito. And we're done.
[01:21:46]  Make it in time, yeah. Thank you. So I think we'll just go right into Q&A. Anyone who has questions, we'll do it on stream
[01:22:03] . Yeah. Actually, there's a question that came in from the stream. Let's start off with that. So SirMeowMeow says... The question is,
[01:22:19]  under what circumstances would Solid be more advantaged than Vanilla Astro, specifically for e-commerce? Yeah. The island stuff, sorry, Vanilla Solid, or
[01:22:35]  is that the question? Because... Under what circumstances would Solid be more advantaged than Vanilla Astro, specifically for e-commerce? Oh, okay. Yeah, yeah
[01:22:44] , okay. Yeah, so here's the thing. Like, if you're going to build islands, which you might want to do with pre-e-commerce, that
[01:22:53] 's what we did at eBay. I worked at eBay. Some of you might know Marco as one of the original partial hydration, basically as islands frameworks. For e-
[01:23:05] commerce performance, page load matters, SEO matters, search results, like getting that whole thing. You're probably going to want to do islands. I think that given that
[01:23:15]  islands and solids start are an experimental feature, in theory, the islands option gives you something comparable to Astro, except it's only works with solid. Then to use Ast
[01:23:27] ro as you can bring in any framework you want. So there's that. But I think it becomes a more interesting question when we get out of the experimental and into
[01:23:39]  the islands, router, or kind of zone, because then it's kind of interesting. There might be places where you want to keep that state around or do that client-
[01:23:46] side stuff. I think the potential of that in the future is very interesting. But generally speaking, I would say that given that these are both experimental features in solid,
[01:23:57]  I would just use Astro with solid right now and kind of, you know, do that. I also think one of the big benefits of Astro is actually it
[01:24:08]  depends on like, I think the authoring experience is really, really quite nice, especially scaling up from like the very basic cases up to a zone where we probably meet somewhere
[01:24:22]  in the middle on some of the e-commerce stuff. So I think that's kind of how I do my decision makers. If I was doing it today, I
[01:24:29]  would decide how much I cared about client-side navigation. I want to be clear here. Like eBay uses React in its checkout, just in case anyone cared about. It
[01:24:40]  seemed good. You got flows, you got forms, you got all that stuff. But eBay would not use React for its like buyer pages, like actual item listing pages,
[01:24:50]  different use cases, different scenarios. So like, yeah, if you're fine with using, like if you're going in for optimization, because like the MPA version
[01:25:00]  is ultimately going to be more optimized than even the client-side router thing. I'm showing that you can lose small percentages to get that client routing, you know, thing
[01:25:09]  with that kind of hybrid model, but you know, like I don't think it's there yet is what I say. So we'll see if that changes in the
[01:25:22]  future. But right now, as I said, I do solid with Astro. I think that's a really powerful combination, made some great sites. Just like recently
[01:25:31] , NordVPN went that way. It's pretty awesome. Sammy? I'm curious how the island stuff works. I mean, I'm sure it's a very complicated answer
[01:25:43] , but are you just swapping the HTML? Because you showed us that the island router call just gives you HTML. So you're just like yanking the HTML out
[01:25:54]  and replacing it. How does that work with like signals that the same signals being used in both routes maybe? Right. Yeah. Well, the nested routing, there's
[01:26:03]  two elements of it. The nested routing, which is quite nice, gives us the ability that we're swapping it onion style. So like if you do a
[01:26:11]  navigation on like a smaller section of the page, you don't unload the top level, so you keep all that. But yes, there was an example. I kind of
[01:26:22]  glossed over it a bit, but the search example is actually a good example of this. And with search, we're actually updating that panel. We sent HTML. Got
[01:26:33]  to thank the Astro guys for this too. Nate from Astro wrote something called Micromorph. And essentially, we are actually doing a DOM diff there. And
[01:26:43]  essentially, when we hit an existing island, we just keep and preserve the state in those client islands. So even though I didn't want to label it the same exactly,
[01:26:55]  the solution is basically equivalent of something like React server components. If you want to understand what React server components are, they use JSX to do it. But it's a
[01:27:04]  very similar kind of concept where we are actually able to diff the stuff outside of the islands, essentially. It's a great library. Nate offered to make it even smaller
[01:27:15]  for us. Right now, I think it's something like 1.3 kilobytes to get that DOM diff. He's like, oh yeah, I do a bunch
[01:27:21]  of head stuff. We could probably shave even more size off of it. But yeah, that's essentially the trick. We do a DOM diff for those cases. And
[01:27:33]  it's usually not that expensive consideration because it is when you're navigating. One of the guys from the Chrome team, after we posted the demo, I think the H
[01:27:43] acker News one, he was like, I kind of feel bad telling frameworks and telling people that they should get under 200 milliseconds on their P75 on IMP, that
[01:27:55] 's an interaction to next paint. It's a new metric that Google's using to kind of measure how fast future interactions like past paid load are. And he's like,
[01:28:05]  but after seeing that demo, I don't feel as bad anymore. I took that as high praise for the potential of this approach. He said he did a bunch of basic
[01:28:13]  tests with the Hacker News example, and he was able to keep within his range for IMP. We still have more work to do, but I think that's pretty
[01:28:24]  exciting. Small follow up on that. What are you sending to the server when you're asking for the next island? Do you sometimes have to send a lot of states?
[01:28:36]  If you have this full tree and you only want an island, you're only changing a small, small, small, small deep end of the thing, and it depends
[01:28:44]  on a ton of signals and stuff. Yeah. Do you have to send that to the server? Not, no. Right now, and this is a place, that problem
[01:28:53]  gets more pronounced, the more optimized you make the solution. But you're right, there is a challenge. This is why context is a challenge with this paradigm, if you
[01:29:01] 've seen it. Right now, we're completely re-rendering on the server from the head down. Okay. And then sending the pieces that we need.
[01:29:10]  React's gone the next step of optimization, where they're only re-rendering the portion, which is why it's much more obvious with the context breakage and whatnot
[01:29:22] . I think this is the biggest challenge on that, because this is why I'm talking about where things aren't ready yet, because I see that level of optimization of
[01:29:31]  completely being able to parallelize the nested routes and also the potential of not re-rendering client components on the server and filling in the holes. Right now,
[01:29:41]  we also, if the same client component exists on the server or in the client, we just render it on both sides and then go, oh, we'll keep the client
[01:29:50]  one, just update the props. But that rendering on the server is also unnecessary. I think those two optimizations will improve the performance, but also introduce new constraints. And
[01:30:00]  that's why I don't feel like the models were completely there yet. Same reason why React server components is a little bit rough right now, too. I think this
[01:30:06]  is a zone that requires more exploration. I think what's really exciting about this approach is with those two optimizations, you can eliminate the overhead of server components almost completely in
[01:30:18]  really client-heavy scenarios. Server components can basically transform into JSON APIs. If basically you're not sending a bunch of the HTML and only serializing the props, you're
[01:30:28]  essentially making a JSON API. I think this shows the potential for server components to actually scale or this kind of pattern scale all the way from like mostly static sites all the
[01:30:37]  way to like full single page apps. But I think we have some stuff to figure out still. Question, great, great staff, you know, for making seamless run time
[01:30:52]  with islands. Do you feel it's realistic to expect in the future to potentially get rid of run time on the server as well? And obviously for cases where it makes
[01:31:06]  sense and pre-render pieces of-- Okay, right. Yeah, so the question is, do you think it's possible to get rid of run time on the server and
[01:31:17]  pre-render? Yeah, it's an interesting question because I think the challenge is-- I don't know if we get rid of the server completely because we're talking
[01:31:30]  about sections now. We're talking about like nested sections. We're talking about partials. I think everyone's looking at this for cell, Netlify.
[01:31:40]  We're looking at how to use the edge and cache more stuff because going to the database is expensive. Like for every-- What do you call it? It's a D
[01:31:49] 1 or R2 or like Cloudflare. Like for every attempt at putting databases on the edge, there's going to be companies that can never do that ever.
[01:31:56]  Before I went to work at eBay, I worked in education, for example, and all day long dealing with GDPR and dealing with data security privacy because we stored photos of
[01:32:07]  children. So like there's certain things that will not go there, which means that caching static is the only way you're going to get a certain amount of performance benefit
[01:32:18] . So I can see more stuff running to run ahead time, compile time, more SSG. But I think it's interesting is that it feels like that range is
[01:32:29]  becoming more of a-- In the same way, we've been blurring the lines between client and server with like showing the islands and like the server functions. This is very
[01:32:39]  much blurring the lines. Blurring the lines between static and dynamic is what my expectation is. So while I don't know if we end up with fully static in
[01:32:50]  this thing, because I feel like we might need a service to stitch it together is the best way to put it. I expect most of the work in this area actually
[01:33:00]  to be about caching and static generation, which is like part of the reason why Next did that thing where they patch a global thatch or whatever. It's very important
[01:33:07]  for these models to be able to look at how we can still deliver on static. We're sort of betting on edge functions right now. I think that's kind of
[01:33:17]  where things are at. I mean, yeah. I mean, I've definitely been kind of following along with these trends. It might not be a coincidence that I work in
[01:33:25]  Netlify right now. So, like, I think that there probably will be solutions there, but my feeling is this. That generally speaking, caching is always
[01:33:43]  like the last stage optimization. There's a couple of things that fall into that. For that reason, right now we're at a point where we're doing a lot
[01:33:56]  of architectural pattern optimization. The caching is like the last thing. You don't necessarily want to choose your caching strategy first because then you might limit the optimizations
[01:34:10]  you make architecturally because caches always miss or always fail or whatever. And I think that's probably why SSG is taking a little bit of a back foot, but
[01:34:20]  we will get back there. I'm almost positive. It's like just the last piece once you figure everything else out. That's partially why I'm not saying that
[01:34:30]  you can generate rather than caches. Because it's a generation for number of places. Well, it depends. I mean, I don't know. To me, the
[01:34:42]  gray scale, like, because, like, generate is just like when you create the cache. Because, like, stuff can still get out of date. And I realize,
[01:34:50]  like, you can be, like, okay with that getting out of date. And you can preemptively do it, you know, like ISR and DSG,
[01:34:56]  you know, on the different platforms. But, like, yeah, it's interesting. I know, like, you can bet that Vercel and Netlify
[01:35:04]  are going to be working on these kind of solutions. So, I personally just where I'm with solid, I'm very much on the mechanism end of it. But
[01:35:14]  we'll get there. Yeah, I got a co-worker of mine. Nice. He's a remote right now and he just wants to ask a question. All
[01:35:22]  right. So, yeah, Lawrence. Yeah, Lawrence, go ahead. Nice. He's a remote right now. Hey, Lawrence. Hey, Lawrence. This was
[01:35:33]  so real, man. Thank you for the pleasure. Thank you for taking something. I'm sure you're really good. I'm sure you're really good. It's
[01:35:44]  not a way from the script. The work that you're doing, the part of the creation is amazing. On top of that, I've had to know how are the
[01:35:54]  components of self-like actual creation and software? So, you're wondering what the event handler, sorry, is this under the partial hydration scenario? Yeah, okay.
[01:36:22]  Yeah, I mean, all we're- So, you're wondering what the event handler, sorry, is this under the partial hydration scenario? Delay, yeah.
[01:36:28]  Yeah. So, essentially the scenario for this is the way our partial hydration works is actually very simple. There's been, if you guys have heard of QUIC, there
[01:36:39] 's been some very interesting work in towards like breaking stuff up at different levels. Sorry, Brian. Yeah. People on chat are asking to repeat what the question was that you
[01:36:49]  had. Yeah, yes. The question was about how we handle event handlers under this partial hydration scenario, like the island scenario. And the whole trick to this partial
[01:37:04]  hydration thing is actually picture multiple solid apps, essentially. So, everything actually works fairly naturally within its zone. So, anything where you actually want an event handler and interact
[01:37:21]  with it, that has to be in an island. Which is why like, obviously stuff like navigation, like there's a few exceptions. Like our router can handle,
[01:37:31]  we put a global, we do have a global delegate. And for like the anchor tags and the navigation in theory, you don't need it because we listen to all those
[01:37:40]  events and forms. We could do that in the future. But generally speaking, when you're writing your custom logic, you're going to write in the component and the component
[01:37:47] 's going to run event handler. And the first thing it's going to do with that event handler is probably set some state. Which immediately at that point, which it needs
[01:37:53]  to set state, you're in an island. Like, because that's essentially criteria. If you have state, it has to be within an island. So, from
[01:38:01]  that point of view, essentially, each of those islands work like their own kind of solid app. The key part is, and it's important here, is that it's
[01:38:12]  all still part of the same solid reactivity. It shares the same single solid instance, the same contact stack we showed before. And in fact, when nesting them
[01:38:25] , you can nest them. You can't import client components directly or server stuff only directly in a client thing. But you can kind of pass them through children. This is
[01:38:36]  a little trick. I didn't really highlight that on my Hacker News example. But you can take a client component like that toggle and pass server children to it. And
[01:38:44]  those server children could have client components in them. Like, you can nest it. We, as they execute on the client, we do reconstruct the client, the reactive
[01:38:55]  hierarchy and the ownership graph. So, they all get tied. They all get linked together, ultimately, the same way they work in another app. But essentially, once you
[01:39:05] 're there, they actually work pretty similar to, like, how they would work anyways. Because once you're in that zone, you have to be in some client code
[01:39:17]  anyways. So, right now, that's basically it. Like, once you opt into an island, you are in client zone. But as I said, and you
[01:39:30]  see this pattern a lot in React when we use a trick called hoisting state. You can use that trick to hoist state an island. I think this is under
[01:39:37] appreciated. A lot of people go, oh, you hit an island. Now, the rest of your app is under an island. So, you know, you
[01:39:42] 're done. Reality is you can, we saw this with eBay. Like, we could get 80% client code reduction using islands. Like, it can, you know
[01:39:52] , on pages. Because you can do the hoist state trick and essentially pass static children with islands in it. So, you can actually get fairly granular just using islands alone
[01:40:05] . And as I said, in actual real live cases at eBay, we saw between 65% and 85% code reduction using this technique over just using client components. So
[01:40:19] , yeah. So, when would you want to use the islands? What? When wouldn't you want to use islands? It's an, the biggest limitation right now is
[01:40:31]  state preservation between pages and reload. But the router can solve that. But today, the router means interesting stuff like figuring out what the hell's going on in context and
[01:40:42]  stuff like, like, we haven't solved all the problems. But in terms of an approach that potentially could give us that future, I think, you know, like,
[01:41:01]  there's a question here. And we're going to kind of think about this a bit. Like, do we actually want this single app? You know, like,
[01:41:10]  do we want, like, we've been on this path for a very long time with single page apps where we're like, there should be one app, right? That
[01:41:16]  was why we got moved away from rails and all that kind of stuff is we kind of had this really awkward thing in the past where you'd have like rails and ERB
[01:41:22]  and then you'd be layering your view.js code on top and like essentially having four loops in both languages sitting on top of each other. And they weren't hydrating
[01:41:30]  all that. We got to a point where like, okay, write everything as a single app. Then we got to a point where we can make it isomorphic and
[01:41:35]  hydrate it. I think understanding what that relationship works like is interesting. And I think that's where a lot of exploration is now because there's lots of different techniques
[01:41:45]  from it. I like things that I find personally interesting. And I know I've kind of tangent a little bit here, but like, it's why I, you know
[01:41:52] , been following a lot of island frameworks like fresh and astro and Marco and all that. And we see that working solid, but also even things like quick, like interesting
[01:42:00]  kind of thought experiment is they lazy load everything in a very, very, very fine grained level to the point that you could start with MPA and end up with
[01:42:09]  a single page app experience. Like you can literally piecewise it up as you interact with it. But that's not even the experience they necessarily want. They, I'm
[01:42:18]  pretty sure that with containers, they're going to be looking at routing solutions. Like I, like I showed off here at the islands router simply because it's unclear that
[01:42:27]  we actually, like, there's still an open question whether we want to load all that JavaScript in the browser ever. Does it ever make sense? And until we can answer
[01:42:35]  that question, figuring out the best patterns for authoring are kind of the challenge. I think this is, the answers aren't clear right now. I'm, I'm
[01:42:44]  interested in the next like year or two, if we get to a point where people like, Oh, that just makes sense. I think we're going to have like
[01:42:51]  several of those moments. Like when I saw Astro for the first time, I was like, Whoa, that makes sense. But you know, there's also like,
[01:42:58]  you know, the question of like, is that where things stop? How does this evolve Astro itself included? So like, um, I right now answering that question,
[01:43:09]  I'm just going to say, looking at the solutions we have right now, not counting this experimental stuff, which is, I said, only probably in react, next
[01:43:17]  13, the server component stuff, and really experimental solid start ignoring that stuff. You can, you still have a very clear single page app for some multi-page app trade
[01:43:25] -offs decide what you're going to do. I think when we get, figure out that experimental stuff, that new beta stuff, I think, and I'll throw a
[01:43:34]  quick in that category as well. I think, I think, I think this question becomes very different. It might take us another year or so to figure that out, or
[01:43:45]  at least see the first inklings, but that's why it feels a lot right now. Like early single page app days, um, like around 2010s,
[01:43:54]  like there's, there's a lot of really interesting innovation going on. And I expect this to be more of that before we actually kind of settle down to be like,
[01:44:03]  that is the way this is, this is, this is one of those like once a decade architectural shifts. I think this, what we're seeing right now is as
[01:44:12]  big as when we moved to single page apps in the first place. Got a question from the chat. Yeah. Jay Larky says. How are you doing, Par
[01:44:22] asocial? Ryan, wait. What are the downsides of using islands compared to more traditional next or SvelteKit architecture? Yeah. I mean, I did
[01:44:32] , it's almost the same question. Uh, the, I, I think, I, I think it's really mostly just the preservation of client state today. I think
[01:44:43]  in the future that might change, but right now it's like, you, you do have to make a choice, to go with a multi-page app. Yeah
[01:44:49] . So I'll, I'll just take that as the same as the last one. Other questions? I got one actually. Um, so like, yeah, we,
[01:44:58]  uh, quite a bit of the focus on my job is around, uh, like performance and SEO. And, um, so like, I really like what you're,
[01:45:08]  what you're doing with like out of order streaming. I'm curious what your thoughts are around like out of order streaming with SEO, which obviously there's caveats there
[01:45:16] . And then I guess what, what the blockers are behind enabling in order streaming for SEO. Okay. Yeah. Um, yeah. So out of order streaming, yeah
[01:45:28] . As you mentioned, the challenge is you need JavaScript to do it, which means that not all bots will do it. Like, and even bots that will do it might
[01:45:35]  like lower rank you, like Chrome can handle it. But Chrome also goes, like, if it gets to a certain point, it'll sometimes go, yeah, we can
[01:45:42]  tell this requires JS, we'll put you on the next round. And I don't like do it down. I, I think next was actually looking at this when
[01:45:49]  they did the react 18 release. They, at the same time, I, I actually didn't have, I wasn't sure what the right solution was. I know eBay
[01:45:56]  had their own infrastructure for that, but next actually, when they, when they released like for sale, released next middleware. Netlify has a two app obviously
[01:46:04]  say that as well, um, is that we can basically, I very much look for the bot agent. And the thing is streaming to async rendering is like on the
[01:46:15]  same spectrum. Um, the only difference is like when you flush. So like you can, what the lovely thing about streaming is if you write your code to be stream
[01:46:23] ed, like friendly, like work with streaming, having it not streamed just works seamlessly. It's just like when you flush at the end. So from that perspective
[01:46:30] , you can basically just like have a bot detect that it's one of those user agents that they use for the crawlers and literally send back it as async form.
[01:46:37]  And you're, you'll like, I think that's the solution that they suggested. And I think that makes a lot of sense. And eBay had its own custom
[01:46:46] , uh, infrastructure for that, essentially where they turn off streaming. eBay also uses a lot of in-order streaming, like a significant amount. Again, e-commerce
[01:46:53]  sites, if you know something, a lot of them do load very much top down. Out of order makes a ton of sense for apps, things like Facebook, where you
[01:47:00] 're like, you can see the shell and then like the pieces movement. And as, and if you're talking to like 15 different services or even less than that, out
[01:47:07]  of order streaming is a godsend because then you're not waiting for the whole page to load. Um, but yeah, in order streaming, uh, I, hopefully
[01:47:15]  that answers the first question. Um, in, in order streaming is, is a little bit tricky. I mean, I've seen some frameworks kind of pull it in,
[01:47:24]  um, on the JSX side, but they're kind of baking it. They're kind of just like, oh, I'm just yielding a stream, like one
[01:47:30]  at a time. That's not what it, like the point of in-order streaming is more of like, you want it baked in the same way that the out of
[01:47:36]  order and that it just works really nicely. Like, uh, I didn't show it in our example, but switching on like other than the header consideration and the metadata
[01:47:45]  stuff, switching on in-order and out of order streaming with react or solid is just natural. You just turn it on and suspense and everything just magically handles everything for you
[01:47:55] . It just works. You don't have to do anything special. You don't have to be like, here's the stream feed it through one at a time. Like
[01:48:00] , that's not how you do it. That's how you do even in-order in Marco. The challenge with in-order streaming for JSX frameworks specifically is
[01:48:10]  that they tend to compile JSX is like function calls. So you like, that's onion, onion, onion, onion. It's easy to get to a certain point
[01:48:18]  in the function and go, ignore this. And then just like, we'll come back to it and then continue on because it needs to close. Like it needs
[01:48:26]  to kind of onion in and onion back out. Out of order is hard because you're kind of saying like, uh, get this far and stop, but actually continue going
[01:48:35] . And you don't have the top part until it returns in JSX. That's the best way I can, I can put it because like, it actually needs to
[01:48:44]  fully execute to get it back to the parent. It's just because it returns things. Whereas traditional templating languages do not have this problem. And it's way easier to
[01:48:52]  actually do in-order. That's why Astro started with in-order. That's why Marco started with in-order because like, it's actually much,
[01:48:57]  much easier when they can basically compile their templates to being a bunch of like, right, right, right, right, right. Like kind of just like as a bunch of
[01:49:06]  series versus being these nested things that, um, feed into each other. React had come up with a solution for it using suspense list. I think that was kind of
[01:49:16]  their intention for it, but I don't know if that solves your SEO problem because suspense list, for example, is like kind of like sticking in-order inside out
[01:49:26]  of order instead of the other way around. Um, I think so with suspense list. So this is something that I've been thinking about because yeah, the, the benefit
[01:49:39] , the tricky thing is that within order, you don't need JavaScript because literally it'll come in. I think I, I do think it's possible. I just
[01:49:46]  haven't be, because you could always separate the rendering from how you output it, but it requires, um, it requires a different SSR, um, API. And
[01:50:00]  you're not going to find this from most JSX frameworks. Like solid has a custom compiler. So there's potential for us to like rethink of how we compile our
[01:50:08]  stuff to make it work for in-order, but it would take that level of a change. You're not going to find like a, like a pre-act or
[01:50:14]  react isn't going to do that. Cause like they basically keep the same JSX transform on both sides. So like, it's very hard with the nature of JSX
[01:50:23]  versus some of the templating stuff. So yeah, I don't have a, I don't, in-order is not, uh, out of the mechanics of
[01:50:34]  like doing suspense lists for like convenience, but outside of that, like for the actual SEO considerations, it's a little bit outside of what I probably thinking about too much right
[01:50:44]  now. Cause it requires a switch that being said, maybe server components give, give us a new way to get into it in order. Um, because then it,
[01:50:56]  and, and this comes to the philosophy kind of thing. There is a question of if you start, and we haven't made a decision here yet as a community, as
[01:51:05]  an ecosystem, but if you start viewing, how should I put this? If you start view, if you view, um, single page apps today as isomorphic components
[01:51:16] , they run on both sides. Um, and then, you know, we went through this phase where we like said, oh, let's annotate the server stuff
[01:51:22] , get server side props and all that server functions. And if we look at server components and we're kind of inverting the flow now, we're actually perhaps saying that
[01:51:30]  most, a lot of the code is server only. And that we have little isomorphic bubbles in it. And what that changes means is depending on how we want the
[01:51:40]  authoring experience to be. And I'm getting kind of a little bit out in the weeds. I apologize on that side, but we have to decide if we want
[01:51:49]  to write everything like it's isomorphic and just have it happen to run on the server, which is kind of the common knowledge today. Or if we recognize that a
[01:51:57]  lot of stuff is only going to run on the server, maybe we can author in a way that actually optimizes for the server. And if we do that, I
[01:52:03]  very much see in order being like in the, in the books, because just simply the way that you can approach that, because I think, I don't know, it
[01:52:13] 's, it's an interesting thing. If you automate the boundaries, you know, the way that Marco or quick does, um, and your developer experience is very client
[01:52:21]  sidey, it might be hard to ever split that out, you know, because you, because anything could become client essentially, like, because the way you author it,
[01:52:32]  you don't actually know. Um, but Marco's kind of interesting. I mentioned it because they actually have a server first mentality and have the isomorphism. And
[01:52:43]  that's why they're able to pull this stuff out. It'd be interesting to see if we actually start leaning more towards stuff like Astro, where we have a server
[01:52:53]  first mentality on this stuff. And, and maybe that leads us to a place where this makes more sense. Sorry. That was a really long winded answer, but
[01:53:00] , um, I think about this stuff a lot. I can tell. Go ahead. Uh, I just want to ask, like, what's your long-term mission
[01:53:11]  with stuff, with solid and stuff? Like, are you satisfied with it just being more experimental and just like kind of push the limits of frameworks and then, you know,
[01:53:22]  maybe some other frameworks borrow on it and whatever, or do you want it to be something more similar to what React is today? where it has a whole system. If
[01:53:29]  I want to go to that. Yeah. Um, yeah. And it's because the solid project in general has multiple facets. Solid start is at that experimental state. That
[01:53:39] 's why you keep on hearing me talk about islands. And a lot of people are very curious about solid start. That's what I talked about today. I knew this would
[01:53:44]  be a topic that is still very much in that zone. Even after we iron out the bugs in beta and get it to 1.0, it's, I, my
[01:53:54]  gut feeling is we're building right now at the, at the pinnacle of like one paradigm and the next one's coming at the same time. So there's
[01:54:03]  going to be a bit of, you know, like stuff going on, different patterns. We're seeing that happen right now. And that's kind of where, where
[01:54:10]  start is. I want to solidify it so that like today's paradigms are the best in it, but solid starts going to keep on evolving. But solid itself
[01:54:18]  is a framework made of primitives. I do continue, we do want to continue to work on those primitives and make them better and streamline them, but it changes
[01:54:29]  things a little bit because I, I feel very differently about solid compared to solid start in that sense, because solid itself being built on these primitives, things that we've
[01:54:37]  tested over the years, things that are slower to change things that are, I can see that piece, um, you know, going into that zone, like react is
[01:54:46]  like whether like the biggest thing for us now is that these, the way solid does stuff is actually quite different. I don't think people appreciate that enough today. Like
[01:54:57]  they go, oh, I've seen mob X and react. No, like it's not that it, it actually changes the way you'd approach. I don't know
[01:55:05] , a web GL renderer, or like, it's not just the stuff we've seen with the dom or, you know, native, like it actually is a different
[01:55:12]  pattern than react is. And that's why the stuff that's all, we've worked a long time with stuff that we're familiar with in the web. Sure. That
[01:55:21]  reactivity and stuff is pretty stable. And I can see it expanding out. It's just that when we get into newer areas, stuff like meta frameworks, stuff like
[01:55:30] , um, you know, even some of the things I just mentioned, like native, we're going to have to find out new things about it. And we're going
[01:55:38]  to get there first through experimentation. So I think the core solid web experience, things like single page apps, this is why I want solid start to kind of separate the beta
[01:55:49]  from like this experimental stuff. I think everything that we consider along the realm of like what react does today or view or Svelte solid is a great choice. It
[01:55:59] 's stable. It's good. And we're just going to keep on doing, you know, better there. We're going to just streamline things, performance size, just
[01:56:07]  keep it going. I think for the more extended stuff, I think it's a more interesting question. I think there's still a lot to learn. Um, and
[01:56:14]  hopefully with all of you, you know, and people at home, we will learn, you know, even more. I throw a question. Um, yeah, this is
[01:56:26]  asked a lot outside the community. And, um, there are lots of answers flying around, but it would be great to have like an actual answer from you on this
[01:56:35]  topic. A lot of people ask about the differences between Svelte and Solid's approach to compiler. And you always give lots of different opinions on this. It would
[01:56:48]  be great to have like, uh, a consistent response to it. Yeah. Consistent response between Svelte and Solid. I mean, the reason that it's a
[01:56:58]  hard topic is because both frameworks have slightly different goals. The compiler itself is, is a reflection of those goals where when I do that demo, when I convert reactivity into
[01:57:10]  JSX and you see that you're like, that shows Solid's value there. It's this kind of, um, transparency. We, I want you to walk
[01:57:19]  away from this and go, oh, I could have built that. Like, like that's, that's, that's the difference with the compilation. Um, I,
[01:57:26]  I, you know, that there's some kind of mechanism that's easy, that could be understood reactivity and there's some kind of compilation and you never lose that control
[01:57:38] . And that's kind of, you know, I don't know if that philosophy is something. Some people think that's a, it might be a philosophy at least
[01:57:44]  experimentation, or maybe it's the advanced user thing. This is just what I came to respect. I used Knockout this way for many years at a startup. And like
[01:57:52] , I, I, Knockout app in production for like eight years. I don't know too many people who had Knockout apps in production for eight years. Looking
[01:58:02]  at like the other Knockout dev in the room. Yeah. Um, like, so for me, like, that's just like part of the values. And Svel
[01:58:11] te kind of like, they, they, they care about the easiness, the developer experience in terms of like how they can like make it approachable to anyone and everyone
[01:58:22] . So like, Svelte's compiler does a whole lot more. It literally compiles everything. Like you, you write something, they write something that looks like
[01:58:31]  JavaScript and you get something completely else different back. And I think that is sort of like, you know, the, the difference there on philosophy, like mechanically, I
[01:58:42] 've talked about this a bit before. That's like some people, I think I do get this on Twitter. Sometimes people like saying that solid, like rip off S
[01:58:49] velte and uses JSX instead. And I get, I sometimes have been very rude to people who have said that admittedly. I'm usually trying to like, especially
[01:58:56]  if it's repeat, like usually I try and explain the difference, but like, like there's, there's a big difference between what I showed with like just some runtime
[01:59:06]  reactivity and a compiler that augments that for you. And like basically a compiler that is the whole world that compiles everything. Svelte does have runtime react
[01:59:16] ivity in stores, but it's core mechanism is they, they do literally compile away the components. Like they, they do there, they basically compile it to something. I
[01:59:25] 'm not gonna say the same, similar to react, but almost closer to react than to like solid, where there's like dependency arrays basically fixed into, to the code.
[01:59:35]  And then when you update state, it reruns a portion of the component. They, they are smart enough to split the component into life cycles, but essentially like there
[01:59:43] 's fixed dependencies, a life cycle, and that's what reruns. And it's, it's kind of hard to explain that because it means that both on philosophy and
[01:59:52]  mechanically, we're actually talking about two very different projects. I hope that someone covers that. I know it's a little bit vague and a little bit detailed. Sometimes
[02:00:01]  the combination doesn't really work. I don't know. Yeah. I mean, the focus on the, the approaches makes a lot of sense. We, we hear
[02:00:09]  that a lot. On the technical side, you know, just, I guess the, the compiler approach and the sizes are radically different. That's the major, one of
[02:00:19]  the major differences. Sorry, the, what is for a compiler size? It's like solid compiler is probably a lot smaller. It's a, it's a,
[02:00:26]  it's less complicated. Svelte does a lot of really cool stuff. They tech, they test accessibility. Like they built accessibility into the compiler. That's really cool
[02:00:32] . So yeah. I mean, different priorities with the project from that perspective. And it's funny. Cause sometimes me and Richard kind of like just completely miss each other,
[02:00:42]  which I think is hilarious. Cause like, like in the sense that, like he, he, someone will say something about solid. And he's like, yeah,
[02:00:48]  you know, he'll sometimes say, ah, they're similar. You know, if you like JSX use this, if you like templates, use that. It's
[02:00:52]  well, that's such a simple response. I, I kind of love it because like, for most people, that's actually what the, the, the difference is going
[02:01:01]  to, going to be, um, because it's like, it's actually really reflective of the philosophies, even though it's not accurate. So to speak,
[02:01:10]  right. A reflection on Rich's personality. Yeah. Yeah. So, yeah. There's another question from Jay Larkey on here. And I'm assuming this is triggered
[02:01:24]  by the Tanner Lindsay tweet today. I didn't see that. And he said, um, it's beginning to feel like solid. Like Christmas. Yeah. I mean,
[02:01:34]  he's, he's been having a lot of fun. Tanner has been rediscovering, uh, reactivity. Um, we've been talking for like a year
[02:01:41]  and a half, but he's finally got a chance to kind of play around with some solids reactivity and he's enjoying it a lot. I expect great things for solids
[02:01:48]  ecosystem to continue into the future. Um, but, uh, yeah, we're, we're, we're, we've been, we've, I think, I
[02:01:56]  think, I just think more and more people are seeing the power of that reactive model and understanding what it means. Especially people like Tanner who work, spend all their time
[02:02:04]  in tables and complete, um, you know, complete UIs where like re-rendering everything is very wasteful. Um, so like it makes a lot of sense
[02:02:14] . Um, and yeah, he's been doing a lot of very positive, solid tweets. That's because he's been right in there writing stuff with our reactivity.
[02:02:21]  So I expect some, uh, bigger announcements into the new year. So, well, the question and you answered the question, what should solid team do to support tan
[02:02:30]  stack router port to solid? Yeah. I mean, and we're already working on that right now. Um, it, it, the tan stack router port, it's
[02:02:37]  challenging obviously, because I mean, but Tanner has stepped up to kind of look at this. I mentioned before the solid needs specific tools, writing, taking a router that was
[02:02:47]  written for react and having it work for solid, ideally doesn't really work. Cause it's like, oh, let's just re-render stuff for immutable change
[02:02:53] . We, we need a different criteria. Um, but, uh, Tanner is investing in looking at this reactivity. So, uh, I think it'll be exciting
[02:03:03]  to see where that goes. I think it's, I think it's interesting too, because his stuff's very feature rich. Um, and our stuff's always been very
[02:03:11]  much on the size size side of things. So trying to figure out how to balance that and seeing if we can find even more optimal ways to do things in the future
[02:03:20]  I'm looking forward to. Um, you said a question actually about the last part about the getter, kind of like how you put solid compiles, the signal,
[02:03:33]  uh, calls to getters. Yeah. It got me wondering, it seems like you're compiling it down to getters everywhere. Have you considered, might be a
[02:03:41]  silly question, your obvious answer, like, why won't the create signal function from the beginning just to turn together, as you said, or is that straight the fundamental
[02:03:50]  way that signals work? Oh, yeah. I mean, they, they, I mean, they are a getter in a sense or a function getter. Like they
[02:03:57] 're like, if you mean like why I, why we don't do an object, like a single object. Um, I mean, cause then it just, it's
[02:04:06]  just heavier on the syntax, right? Um, like you could do it. The biggest thing with the getter is that the props is kind of throw away. Like
[02:04:14] , and I find it the same with a store. You can go like S dot what you actually care about. I guess with a signal, you could go S dot
[02:04:20]  what you care about. But it was like the shortest way to write something is just call a function. And it's transitive to like, uh, we keep on using
[02:04:29]  this term transitive, but it's like, if you have a value from props or a store or something like a function calls, the most primitive way of doing it.
[02:04:37]  Like you can always go function wrap count function times two or props dot count time two, it becomes a function stuff just keeps on becoming a function. So it seemed like
[02:04:46]  the more primitive way to do it. I think a lot of times we see APIs with like dot value. They have a read and a write that we get her and a
[02:04:53]  setter. And that has completely different implications on your application. If you're like passing that around, to be fair, if we're always accessing the value, you
[02:05:01]  aren't actually passing the setter around. But my suspicion is if you put the getter and setter together in the same object, people would be more tempted when they
[02:05:10]  wanted the setter to just pass the reference through instead of the value through. Whereas if you separate them, people are more likely to be like, okay, I'm doing
[02:05:18]  something specific. I'm going to pass the setter through. And quite often the pattern is you wrap that setter with a more specific action, like, like an encounter
[02:05:28] , an increment, you're actually passing increment through. You're not passing the generic setter through. So I find these patterns of read/write segregation, they encourage
[02:05:36]  better patterns. I know that didn't completely answer, but I think both the combination of the terseness of just a function and the way that everything is a function and
[02:05:48]  the fact that we want the read/write segregation kind of inform that API. Yeah, someone to move to the solid space. I really appreciate the rest of the new
[02:06:00]  documentation. Give a little bit of updates. Right. Yeah, yeah, yeah, yeah, for sure. Yeah. The docs next project we call it or docs.
[02:06:11] solidjs.com was an initiative started by Dan Jutan, who works also on Astro. Truth of the matter was he did a lot of effort to get that
[02:06:24]  going, talk to docs people, you know, rally that, bring people in to kind of work on it. But what happens sometimes when people go very successful, if
[02:06:38]  they do an open source and then they manage to get hired on open source, sometimes they don't have as much time to work on other projects and find ways to contribute
[02:06:46]  in the way that more lines. In Dan's case, what ended up happening was he's actually not working at docs on Astro. He's working on product and he
[02:06:55]  was working on educational content type stuff. And so he started doing more of that with solid because it aligned more with what he was doing. And he was working less on docs
[02:07:03] . Instead, he was making videos, conference talks and stuff like that. And admittedly, we haven't really had a docs lead for some time now. So that
[02:07:16]  project did kind of slow down. Luckily, in the last two or three months, we've had people in the community step up on the docs project, especially shout out to
[02:07:24]  Michael. And it is it is plotting around slower, albeit, but everything's basically done by volunteers. So it is it is a kind of slow progress, but at
[02:07:38]  least it's it's moving again, which is is is key. But yeah, I it's an ambitious project. I'm like, well, I like I wrote the
[02:07:46]  original solid docs in like six weeks. And the kind of obvious I wrote them for mostly worse, probably the better. But the new project is much better, much more inviting
[02:08:01] . We we have an outline, like a roadmap that Michael's been following the Dan actually laid out. When we I think that's going to be the key, right
[02:08:14] ? When we get to a certain point where we can swap over. That's probably and you're probably wondering when that is. I am not sure. Do you have any
[02:08:24]  ideas? Yeah, it's going to be a while. The reality of the situation is the docs projects. We've tried a couple initiatives kind of, you know,
[02:08:32]  give it an injection of life. We actually have a solid fellow. So we started a program called Solid Fellowship, where we are using the bulk of our open collective money
[02:08:42]  to bring people on board, give them a stipend per month and have them focus on different parts of the ecosystem. So we filled both those roles with two ecosystem members
[02:08:53] . And the third one is actually for docs. And so we had an application process open until I think it was October 31st. So we've been sitting on about 15
[02:09:04]  applications for people who want to work on docs and get that stipend per month. We have interviewed two people, two people so far. We have to interview the third
[02:09:12] . We're about to make a decision on it. And that person will lead the effort, not as a core team member, but as someone to help basically shepherd the project
[02:09:21]  as much as they can right now. That'll be a five month, a thousand dollar US per month stipend. We're hoping that person will transform into our docs lead
[02:09:32]  and come on as a core member. But at this point, we're still open to other people who have an interest and also experience in leadership on the docs level in
[02:09:41]  core. It's a really tricky problem to solve. There aren't many people who can write well and also understand solving. Yeah. Is it interesting? It's an intersection
[02:09:52]  of type of person that Dan was the only person. And that's why we brought him on board. We're like, you come in here, you're hired.
[02:10:00]  So, you know, his focus on to more DevRel stuff now has been amazing because the content he produces is amazing. You can check out the Solid.js YouTube channel
[02:10:12] . There's a lot of really good work there. He's responsible for all of it, almost all of it. But, you know, when a team member, especially
[02:10:20]  in open source, finds something that they're passionate about, they're just going to go ahead and do it. It's not like a job where you're like, no
[02:10:25] , you're doing docs. So we're suffering from this and we're getting a lot of flack for docs. I'm going to be brutally honest. We're
[02:10:31]  a very open, transparent community and we get a lot of flack for docs. I think it's been called tech pro a couple of times now, which is a very
[02:10:38]  painful word because I wouldn't, well, I don't think anyone in our community has that kind of essence. Like, can we define tech pro? But the language in
[02:10:49]  it does really come off as completely inaccessible. And so we're doing our best to like soften it, make it more accessible as much as we can, but
[02:10:57]  also trying to pour all that effort into the doc next separate. That's a really long way of saying we're struggling. We need people to come into the community and support
[02:11:06]  all this. So that's also a rally call. Please, if you have a passion for writing and if you want to learn more solid, we'll support the learning process
[02:11:14]  if you can bring the writing methodology. Methodology. Yeah. Docs are such a big part of this. Like the amount of work and effort that goes into docs
[02:11:25] , not even getting into stuff like translations and languages and stuff. Like solid's current docs are translating to something like what, 17 languages? Something like 15. Yeah.
[02:11:34]  Yeah. So like, like way more work than goes into frameworks or even solid start. And solid start has docs too that need, need attention. So it's like,
[02:11:43]  there's just like, that's where the work is. Like, it's actually the docs and the education, not the, not the actual framework writing. So it
[02:11:54] 's like, yeah, this is, that's a, that's a place where we need to figure out how to encourage the growth of most. So as I said,
[02:12:02]  Stuffly Fellowship Program is great. But like, it just, it is, it is, it is difficult by, by its very nature. Because like in the past
[02:12:12] , when we've had the right docs, people have had to like, stop almost all of what they're doing and just try and focus on docs for a bit.
[02:12:20]  But that's also doesn't always get you the best docs when, when, when you're in that zone. We're in a very interesting, weird spot as a community
[02:12:29] . We're not corporate backed. I mean, Brian's supported by Netlify and they're amazing that way. But we're not, yeah, we don't have
[02:12:37]  a team of paid individuals. I give my time as complete volunteer. The rest of the core pitches in as much as they can. We really depend completely on the community.
[02:12:48]  This is a fully open source effort. And that's a really hard thing to do. So we're leaning on the backs of a lot of people. And, you
[02:12:56]  know, we're not React. We don't have a whole boatload of money and a team to, to make it happen. But this is, this is our challenge
[02:13:03] . If we can get over this, we've got the engineering covered. We've got a genius behind us. Actually, we've got a couple of geniuses behind
[02:13:09]  us. And that's what I'm confident in. What I'm really, what we need, really need to turn around and make magic out of is how do we
[02:13:18]  rally the support to get the rest of it over to finish on. Yeah. I think, I think docs are, like I mentioned before being a big deal, but I
[02:13:25]  actually, I, I think a lot of the perceptions about solos and the like required advanced audience and all that stuff is because of the docs and because of the lack
[02:13:34]  of certain types of documentation. I think, I think it'll make a huge difference. There's no reason. And I've seen this when people have come on, on
[02:13:42]  the doc side. There's no reason for solos to be treated that way. Like perspective, like reactivity is a simple, like it's not, it's not
[02:13:51] , it's not easy necessarily, but it's a, it is a, it is a teachable concept that once you get it, the rest can fall into place
[02:13:58] . So I feel like if we approach it the right way, we can, we can definitely be much, much more approachable than we are today. Yeah. I think
[02:14:05]  solid has both a curse and a lesson. We're a very technical community. There's a lot of knowledge. You drop it in the discord and there's people talking about
[02:14:13]  incredible topics. Like they know their stuff. There's a handful of people that you have any sort of problem, they'll solve it in a heartbeat. The curse that
[02:14:24]  we have is also, they're all experts. Um, the people who know how to teach beginners aren't there. And so I think we have the opposite, um,
[02:14:33]  like issue from a regular framework, like a regular framework, like Svelte, let's say very easy to teach, very accessible. They've got a lot of people
[02:14:42]  willing to like go in and make, make that happen. Um, and you know, there's a good foundation for that, but it starts because a lot of those beginners
[02:14:51]  come in and they feel like they belong there. They feel like everything is accessible. That's the focus of the framework with us. It's kind of like, well
[02:14:59] , we're not easy. We're not an easy framework. We're a simple framework. There's a difference, massive difference between easy and simple. Um, so
[02:15:07] , and, and you'll have different levels. Like the, the chart for, uh, complexity over time is different. You start, you know, easy with Svel
[02:15:15] te, but I've heard, I'm just making, repeating things that I've heard, but you get progressively more, more complex as you build a larger application.
[02:15:24]  With Solid, you kind of start with a higher level of complexity, but it's pretty consistent or it gets even easier because it's the same building box and principles that you
[02:15:32]  work with. So just these two different models of, the mental models of how to use the framework make what we do at the onset, on the onset of the project
[02:15:42] , a lot harder. So we're, you know, that's our, that's our challenge. If we, if we can beat that challenge, we'll do very
[02:15:51]  well as a community. And we'll have an amazing solution for people. I'm done ranting. All right. Any other questions? First. I may completely understand
[02:16:10]  this, but I may understand it what you have. So, when it's wondering, like, in that requirement, you can't go on a major college, you can
[02:16:25] 't go on a major college, you can't go on a major college, you can't go on an ADI. Does that help from, like, the edge environment
[02:16:33] , like, capital, or, you can't go to the UACs? Okay. Yeah. The question is about, like, both the question about the R
[02:16:40] PC stuff with solid and about the isomorphic stuff and the edge functions and how that all plays together. Yeah. There's a few different levels there, right? Because
[02:16:50]  obviously, if you just don't use any of the server functions and you just do it isomorphically, the call will happen on initial server render, yes, from that
[02:16:59]  edge function. So, it'll call your API from, I don't know, Southeast Asia, if that's where you're accessing it from. And it'll call
[02:17:08]  that from that edge function. And then, in the future, from the client, you'll go directly from your browser, wherever you are, Singapore, and then call it
[02:17:18] . When you do the server function or the create server data or create server action, then what you're doing is pushing all those requests back to that edge function to the
[02:17:32]  third-party API. So, yes, the client will always request to your edge function. Then your edge function will then go out to that API from the edge.
[02:17:42]  So, yeah, there's latency there if your database is in Virginia East or whatever, AWS One. So, that is a real cost. That's why I was
[02:17:55]  talking about caching earlier. That's why streaming comes up a little bit, too. Streaming actually softens that a little bit because then you don't have to wait
[02:18:02]  for the full response. But if it's the core of your data, then streaming, it's better than client-side rendering because you get to start the request sooner
[02:18:14] . But it might feel kind of slower because you get the shell of the app and then you're still waiting some time for the app for the data to load from halfway across
[02:18:23]  the world. So, data fetching in edge functions is still a concern and why people look at so many cache solutions or why Cloudflare is looking at how they put
[02:18:34]  databases on the edge. But, yeah, the server function, it just moves it from the end-user's computer to that edge function, essentially. Does that answer
[02:18:45]  the question? Yeah, in which you can solve it as possible. Yeah. Yeah, yeah, exactly. There's the server versions with a dollar sign and then there
[02:19:03] 's like the route versions without the dollar sign that will be where, like, we'll render it, we'll do it from the client after the fact. So,
[02:19:11]  we have both versions and create resource, the default primitive will work from the edge on initial and then from the browser after the fact. So, you have to use the server
[02:19:21]  function if you want to push it all in. There's some advantages there for things like authentication. You can kind of push everything through a single funnel and just, like,
[02:19:28]  know that you can, like, get your OAuth tokens, you know, and all that kind of stuff, handshakes and all that happening from the back end
[02:19:36] . But, I mean, there's challenges there with the edge functions too because they don't, like, live forever. So, like, there are still considerations here and
[02:19:47]  that's why we need better best practices and guides and stuff there because definitely patterns like authentication, I know you didn't ask that, but definitely come into play when kind of
[02:19:57]  straddling that line because you're like, oh, who owns the access token or whatnot. So, it does somewhat simplify things. This is why Remix is
[02:20:07]  kind of popular is that it's pushing everything to the server because then you can just be like, that's the place, you know, and then you use some session cookies
[02:20:16]  and stuff and then don't worry about kind of doing this dance where you pass stuff to the client. But if you've done single page app development and stuff, you've
[02:20:24]  probably done this dance before as well, you know, so, yeah, we can do either. I guess this is a simple question, but there's repercussions of
[02:20:35]  those decisions. There's also some really cool technology that's been coming out. Like Cloudflare has Argo, if you've ever heard of that. It's actually
[02:20:45]  like a routing technology server that basically finds the most efficient path to the network that you're calling and then they charge like $5 a month for this and it's supposed
[02:20:54]  to increase your latency or decrease your latency by like, you know, something crazy like that. So, it's like cool technology to help with that, those long distance kind
[02:21:02]  of laden calls. Anyways, that's another fun thing that's happening on that side, but start to take advantage of that. Yeah, one of the cool things
[02:21:12]  Cloudflare that we haven't done with some of the other adapters yet is that our dev environment uses MiniFlare and then our deployment uses Cloudflare. So
[02:21:22] , you can actually like use versions of like KB and stuff like in development. This is what Nikhil was using when he was playing around with like durable objects and like
[02:21:30]  getting web sockets working on the edge and stuff with that. So, definitely cool stuff. Of course, it's not documented anywhere. So, I apologize. I
[02:21:42]  mean, it will come, but yeah. Common thread here, but we've talked about docs. Yeah. So, we have like four questions on chat, but let's
[02:21:54]  power through them and then we can all head home because I know it's a bit over our time. You got it. So, Nikhil just said I apologize too
[02:22:04] . For the docs I assume. He's in chat right now. Awesome. Okay. So, like some of these can be yes, no questions. Let's keep it
[02:22:12]  to like a couple sentences. Yeah. So, the first question is, if you were to create solid today, where would you start or would it be no different?
[02:22:21]  Yeah. I mean, pretty similar. I think the reactivity is the core. The primitives are the core. So, if I was going to do it again.
[02:22:27]  Obviously, we've learned stuff where we've kind of tagged stuff on. I do it differently. But, you know, generally speaking, I start from the same core to
[02:22:35]  that stuff. And in a sense, solid 2.0 is going to be that. Cool. So, Derek Farris, I'll just respond to your question
[02:22:44] , which was, do you need solid core docs most? Yes. The answer is yes. We need that as a top priority and then solid start should come after that.
[02:22:51]  Jay Larky, what is the ideal size of solid as a framework? Number three, like Svelte or number one, like React? I think he means
[02:23:04]  some, like, downloads or use. I mean, I don't know if anyone... Do you think Svelte intentionally sets out to be, like, where it is
[02:23:14] ? I don't know. Is it even number three? No. But, I mean, I just mean, like, I'm not sure. I don't see any
[02:23:21]  reason why this approach couldn't be mainstream. I'm sure Mitch doesn't see any reason why Svelte couldn't be mainstream. This isn't an expert's framework is
[02:23:31]  kind of my take. Yeah. Well, yes, experts. I have to put a bit of spin on that. An expert's focused framework, but still accessible to
[02:23:42]  beginners. The goal, I would say, and you can correct me if I'm wrong in this, we want to help beginners move into that realm of being experts. Yeah
[02:23:51] . I mean, that's the bar we want to lower yet. It depends on how you classify experts, but the desire of maintaining control is important more than anything else
[02:24:07] . So, I mean, I guess that's something that might appeal more to, you know, people with more expertise, but I don't think it's like,
[02:24:17]  I don't think it needs to, needs to. Derek Farris is suggesting powerful, but accessible. That's probably a better way to find it. Sure.
[02:24:26]  Yeah. Okay. Last question. What features in SolidStreet would say are new? It seems that seems like most concepts are tried and true, but with a
[02:24:37]  new look, would you agree? Yeah. I mean, yeah, it's interesting. The problem is for us to implement them, we couldn't just like grab them straight
[02:24:49] . Like there's a reason why we didn't do loaders like Remix. But yes, most of the stuff with SolidStreet was more about just having Solid
[02:24:57] Street exist for like the SSR stuff, like the streaming and all that stuff. Like remember, we added streaming to Solid in 2020, I guess, just
[02:25:07]  over two years ago. And like, like a lot of these things aren't the nested routing we've had since around, you know, earlier in 2020 as well.
[02:25:15]  Like I'm trying very hard not to introduce new stuff in SolidStreet. The reason it's only the experimental stuff that's new because it doesn't exist anywhere else
[02:25:24] . Most of the other stuff, it's just been a matter of trying to like offer the some missing primitives that are like we don't really have in the wider
[02:25:33]  ecosystems, particularly associated with SSR. But in general, I agree that the thing is to do it the solid way is unique. That's that's the challenge. Like
[02:25:43]  when when we do a Remix style invalidation thing, we can actually invalidate our keys. And more so when your resource refreshes, it doesn't re-
[02:25:51] render the whole page because it's not a React thing. We actually do a fine grained reconcile of the store with a data diff internally in that router action. So when
[02:26:01]  when you do something silly like, I don't know, update a to do list, I'm just using silly examples, and you just toggle it, we're still able
[02:26:09]  to go, oh, only that toggle on that one to do updated and not re-render the whole page, not even re-reconcile the list. Literally
[02:26:17]  go into that one to do and flip the toggle on it. So like that's not the same, but it's it's also like not new. So it like,
[02:26:29]  yeah, it's an interesting balance. Looks can be deceiving. But yes, for us to get to where we did with this stuff took some some some thought.
[02:26:40]  We couldn't just like pick up what others had done, even though it looks similar. That's that that's awesome. Yeah. Ben had his hand up. Did you
[02:26:54]  have a question earlier? I did. If it's fast, just throw it out there. But I was playing with like all the server stuff on the screen, and
[02:27:05]  I got two competing with how it should fetch stuff. Yeah. One was like the route data expert, and the other one was try the server function, use the dollar sign
[02:27:15] . And I realized, okay, well, one of them went to do some parallel fetching. Yeah, yeah, yeah. See, then this is this is the
[02:27:27]  thing he's talking about the server versus having these primitives and stuff. This is one of the debates I had on documentation. But like I did, I actually kind of
[02:27:36]  wanted to only introduce create server data and create server action and just like put the rest in an advanced section. That's what I actually wanted to do and show people like the
[02:27:45]  proper way. The problem is when you write docs just kind of flat. And the same problem, the main solid repo, we just give people a data overload. I
[02:27:51]  did it today, even when I was demoing it, where I showed all the stuff because I wanted to emphasize from a low level how we build up on stuff. But
[02:27:58]  the truth of the matter is the place you use server is basically if you want if you don't want to use our stuff and you want to use like solid query, you
[02:28:05]  know, 10 stacks version, and you want to port that in or you have some other primitive you want to do, like you want to use it for service and events or
[02:28:12]  web sockets or something. If you want to like build your own stuff, that's why you use it. The truth of the matter is we should really enforce with
[02:28:20]  guides like create server data, create server actions, and then people could come in and like basically be like, oh, yeah, it's like remix and just like like that
[02:28:26]  kind of like streamline everything just works. You know, you don't need to know any of this. It feels way less complicated. If you just go route data, create
[02:28:33]  route, you know, create my route data and just move on with your day like and that's that's the intention of the why I introduce those or we introduce those
[02:28:43]  higher level APIs. But the lower ones still exist because I mean, that's what we do. So yeah. Stuff in the lower one feels so simple. Yeah.
[02:28:54]  Right. But the thing is, you do that and then you go, oh, but then I need to do reinvalidation and like all that kind of stuff.
[02:29:01]  So we just don't teach stuff nearly as well as we could. And that's the theme here, I think, tonight. We need to do a lot better job
[02:29:09]  at this. Thank you. Yeah. That being said, we're going to wrap up. I want to thank Eric, our gracious host and babble.com. This
[02:29:20]  was amazing. We really appreciate the use of space. You're not like in the camera. Sorry. We really appreciate the use of space and the graciousness of the snacks
[02:29:32]  and the drinks that you provided. We'd like to give you this T-shirt from Solid DS. Oh, thank you. Thank you. So there you go.
[02:29:41]  Thank you very much. Do the same thing in reverse. Oh, awesome. Yeah. All right. We're kind of shunning this thing. It sucks. So anyways
[02:29:52] , yeah, for the same thing. First off, I'd like to thank all you, all y'all for, for showing up. It's a pleasure to have
[02:29:58]  you all here with us and hope you got as much out of it as I did. Thank you to the Solid Corps members. Got a little bit of swag here for
[02:30:08]  you guys. I forget which sizes we got here, right? We'll start that out. I got the, yeah, we can figure this out later. But got swag
[02:30:16]  for Moshe, Dave and Ryan. Yeah. So thank you all for putting so much work into these presentations. Really loves, you know, answering our questions, everything
[02:30:26]  like that. And yeah, again, thank you all for coming. And yeah, it's been great. Thank you. All right. I'm going to end this stream
[02:30:36]  now. Please end the stream. Thank you all for joining online. Thanks. Just a last note. There were a couple individuals that wanted to come and they kind of wanted
[02:30:47]  me to give a bit of extra information.