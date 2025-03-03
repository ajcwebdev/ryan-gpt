---
showLink: "https://www.youtube.com/watch?v=Yi_MJ8cVCCs"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS - Benchmarking and Custom Renderers"
description: ""
publishDate: "2021-10-23"
coverImage: "https://i.ytimg.com/vi/Yi_MJ8cVCCs/sddefault.jpg?v=6172edbd"
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

[00:00:00]  Hi. Welcome to my stream tonight. Today we are going to talk about benchmarking, JavaScript framework benchmarking specifically, and about some new features coming in solid 1.
[00:00:18] 2.0, which should be coming out pretty soon. Benchmarking is a topic that I'm pretty interested in. I'm going to echo 2.0
[00:00:27] , which should be coming out pretty soon. Benchmarking is a topic that I'm pretty interested in. I'm going to echo 2.0, which should be
[00:00:39]  coming out pretty soon. Anyways, if anyone has joined in the chat now, come in, say hi. What I was going to say is, benchmarking is a
[00:00:56]  topic pretty close to the heart, so to speak. It really is where solid started from. It also started from the idea of fine-grained reactivity, but I
[00:01:06]  knew that no one would be really interested in a framework, or at least it was my belief. I kind of maybe adjusted from that now, but it was my belief that
[00:01:13]  no one would be really interested in a framework unless it could prove itself along any kind of measurable metric. And for that reason, I started benchmarking. I didn't want
[00:01:22]  to even suggest that someone try something unless, you know, I was confident that it would, you know, do the job and do the job well. So, you
[00:01:32]  know, a lot of this today, if we're going to be looking at the kind of history of JavaScript framework benchmarking, it's going to be kind of like my
[00:01:40]  own narrative in terms of how that all relates. But yes, to get started, we'll kill some time while people are joining in on the stream. I'm going
[00:01:51]  to talk a little bit about this week in JavaScript. And for me, there's a couple conversations on Twitter, I guess, that that definitely caught my interest and were
[00:02:01]  largely, I guess, how I associate this week in JavaScript, at least. And let me just share my screen here to show you what I'm talking about. Yeah
[00:02:16] , here we go. The first one is, oh, it's funny. I don't actually have an open right now. Give me a second. The first one
[00:02:39]  here is Jason Miller, creator of Preact, has been working on compiling cell components to Preact. And I thought this was pretty interesting. Reactivity as a language
[00:02:58]  is super, super powerful. Basically, it gives us an easy way to describe most interactions, right, using basically a set vocabulary, let's say, you know,
[00:03:16]  I use the term signals, derivations, reactions a lot when I talk about reactivity, and as they have in my other videos. But what's cool about this is
[00:03:25] , it's also a very limited way of doing so. And by basically limiting the language to just these primitives, you can actually describe a number of things. We've
[00:03:37]  seen that like with hooks and, you know, solid reactive libraries view. But it's, it's, it's actually easy, easier to take that language and compile
[00:03:48]  it to other frameworks rather than vice versa, right? If you've seen JSX lite, or now it's called mitosis, they actually started by taking solid syntax and
[00:03:58]  using that to generate react, and view and Svelte and Swift and react native and a whole bunch of different frameworks. And it's because the power and the univers
[00:04:12] ality of reactivity as a language. So it doesn't come terribly surprising to me that Jason Miller was able to take the Svelte templates and compile them to Preact
[00:04:21] . Because with just the simple language of Svelte, the let's and the dollar sign operators that you can actually describe very, you know, complicated, very, you
[00:04:34]  know, sophisticated UIs. And you don't really need anything other than that. Going the other way is actually incredibly hard. If, if we could actually solve going
[00:04:45]  from Preact or react back to a reactive language, then you know, we'd have a solution for, you know, react compatible and solid. But the reason I love
[00:04:54]  this is because Rich is being a little tongue in cheek here in his thing. He said, Well, here you go. Step one, alias your react to Pre
[00:05:02] act, then install this Svelte to Preact compiler, then gradually rewrite everything in Svelte, and then eventually just install Svelte and then remove Preact
[00:05:13]  in this. He's being kind of tongue in cheek, obviously. But, but really, maybe this is the path to migration from these VDON libraries, because
[00:05:23]  basically because of like the use refs and all the other hooks and stuff, it, it's a lot harder to guess what someone's intent is because of all this kind
[00:05:32]  of imperative code considerations, like things that all these escape hatches to make the hooks work in the, in the VDON representations. Whereas it's much, much
[00:05:42]  easier just to take reactivity because regardless of whether you use a reactive library, like mob X to drive react, or that's the way view works basically, or you use
[00:05:53]  a compiler like this, it has everything you need, you know, without use refs and use callbacks. So as much as this was a joke, this is very
[00:06:02]  much in line with a lot of thinking that, that I've had in the past. And I found this, this little, um, interaction between Rich and Jason,
[00:06:12]  um, entertaining to say the least. Um, another, another thing that came up this week, um, which is actually the very next thing I tweeted. Um, and
[00:06:23]  I'm just gonna bring this up again, because this is not a new thing. This is, this has been going on for a while, but David K. Piano
[00:06:33]  here, uh, creator of X-State was basically giving people, you know, saying like a little pat on the back one, like, don't worry if
[00:06:41]  you find use effect and react difficult. Even senior reactive struggle with it. You know, large dependency arrays and complicated statements you have, it's typical. It's just an
[00:06:51]  awkward hook. Right. And again, it's because it's an escape hatch. His actual followup tweet was actually right on it too. In all seriousness, the natural
[00:07:00]  mental model for effects is execute this right now, but that's too imperative. So the declarative approach is this is to be executed when they're, these values change
[00:07:06] , but that's not always true. Hence the F statement, this breaks the mental model. So he's, he's basically saying because it's declarative, it's
[00:07:13]  just a rule. Like the way reactivity is a rule. Like if you have an equation, you know, a equals B plus C, your expectation would reactivity is
[00:07:21]  that if B or C updates, then a also is updated. You don't have to do the assignment again. And it's already a bit of a jump for people to
[00:07:29]  move from imperative to declarative approaches. Like it takes a bit of a mind shift. And the thing is making the, the dependency array explicit in a sense helps people
[00:07:39]  go, okay, this is when it updates, you know, they can kind of, you know, it's like a memo. They can kind of view that in a
[00:07:45]  way that's more familiar from their imperative thinking. But he says that basically the, um, abstraction falls apart because sometimes you only need to run this code based on,
[00:07:58]  you know, certain conditions changing. So you end up with all these if statements and stuff inside your effects. The answer to that is breaking the effects into multiple effects. And
[00:08:07]  if you're using a reactive system, that's exactly what you do. You, you break, you break these things apart. So you won't have this giant dependency array
[00:08:14]  for one effect. But the problem is the react, you have to worry about that communication isn't always staple and values and things that need to persist across effects. You
[00:08:23]  don't necessarily want them triggering re-renders. So you have to use ref and that's where all the complication comes because you have these mutable values that you
[00:08:29]  have to kind of persist across, um, different component runs and you're kind of stuck between a rock and a hard place. Either get very good of understanding reacts hook
[00:08:39]  model or you end up just jamming everything in a giant effect. And I think it's, I think this is interesting because a lot of people in the community have been
[00:08:49]  kind of calling recently for, how should I put it, for basically getting rid of those ESLint rules. Because in React, it's common to have like ESL
[00:09:02] int rules to check the dependency arrays and like, oh, hey, you missed a dependency and all this kind of thing. And they're like, well, why can
[00:09:09] 't you just make the compiler do that? And, you know, this is kind of along that mind, like maybe use effect would be easier if we didn't have to
[00:09:16]  make those dependency arrays. And I think the problem is, and it's kind of not as obvious from people coming from a VDOM perspective, is that there's always
[00:09:27]  an exception case, you know, like you have that hook that only runs the first time amount. Like the empty array case is real and you always have the ESLint
[00:09:35]  thing complaining at you. You won't want the default behavior for it to track everything inside. And similarly in reactive libraries, we have things like untrack. And
[00:09:44]  this is, this is a real consideration. So how, you know, how do we make exception cases? Obviously the React's whitelist is a very easy approach,
[00:09:56]  you know, and a lot of reactive systems like Vue has this in watch and we have like an on operator and it's all have this whitelist approach. But
[00:10:02]  how do you make the default like all in, it just, it doesn't make sense for React as much because it's a top-down renderer. Like mentally
[00:10:10]  it's better to think of these as memoized functions than it is to think that these is reactive reactivity. And that's why even as much as I try and always
[00:10:17]  conflate that, you know, use state is the same as use signal and whatnot. The difference is important and React solution very much suits React. So I don't
[00:10:28]  think we should be, you know, pushing necessarily so hard on trying to make React like Svelte or whatnot. I mean, this is kind of in direct contrast of
[00:10:37]  Jason Miller and Rich's interaction. But I think it's good that React is exploring this the whole way. Like if we didn't have people exploring, you know,
[00:10:49]  different, different approaches or philosophies, things would get stuck. We wouldn't have innovation. We wouldn't have things moving forward. And that's really actually quite close
[00:10:58]  to home with the topic that we'll be going over today, which is benchmarking. Honestly, I know this one is probably not the most interesting. This is more about
[00:11:13]  guts of the framework. Benchmarks, honestly, aren't typically that useful for the average developer. I think they're overrated, but they always seem to come at
[00:11:24]  a time that like it sways the momentum. When a solution comes out way in front, especially in new space, people kind of flock to it. Like ES build
[00:11:33]  is perfect. It's like, what, a thousand times faster than Webpack or something stupid like that. I mean, sure, the test is rigged for them.
[00:11:41]  They're the only ones have the minifier internally. So they don't have to go through like extra layers to do minification and their system has no plugins. So obviously
[00:11:50]  they don't have to be written in a way that's generalized. So yes, they can just, you know, take it. But the same kind of narrative happened
[00:12:03]  when React came on the scene. And this is largely why I got into benchmarking, honestly. You know, and it was because I had this love of this framework
[00:12:16]  called knockout.js. I'm not sure if everyone is familiar with it. I like showcasing this off occasionally. They actually were one of the first frameworks that had
[00:12:27]  like a really nice live tutorial section where you had the code editor. This, like their tutorial sections looked like this for like at least eight years. I mean, I first
[00:12:37]  started using knockout 11 years ago. But like, basically, perfectly set up to do that thing where they have like, here's the output. Here's,
[00:12:50]  here's your HTML view. And here's your code, right? And let's see if they, and they, they, they were also one of the first ones that
[00:12:58]  have the like, solve it for me option. Help, it's not working. Yeah, there it is. Yes, fix my code. Years and years before the S
[00:13:07] velte tutorials, they had this approach, right? Yes, fix my code. Let's go with the working version. Okay. So I don't know what this
[00:13:18]  example is showing. It's probably just showing how you can render some names on the, on the field or something. And then obviously this example is going to be like,
[00:13:26]  oh, turn this into observables, you know, you know, and here's the thing. I don't know if I love this style of tutorial, because usually you
[00:13:36]  don't even bother typing it. People are too lazy. Maybe if they really want to do it, they treat it like a tutorial. But for the most part,
[00:13:41]  I find people just click the solve button and then they go, oh, before and after they do the diff in their head. And then they go, now I understand what
[00:13:48]  changed. Now I understand how this works. And it's especially really valuable for, for people already kind of familiar with the concept. So you have this reading section, you
[00:13:56]  have this, as I said, this was prototyped years ago. And we've kind of since, you know, stolen that, but the fun, the thing I loved
[00:14:03]  about knockout is in some ways this should look, I mean, they have this, some people might argue horrid data binding syntax. But if you look at this
[00:14:12] , let's continue. We have computed values. Okay. Like, I'm just gonna, I'm just gonna continue a couple more. Let's, let's solve this
[00:14:21] . right here. This 2010 framework basically had all the pieces of what was to come with React Hooks eight years later. You know, KO observable is our use
[00:14:41]  state. KO computed is our use memo. And there's also a KO computed here if we wanted to do like side effects. But essentially, you used to use function
[00:14:50]  components to declare your state, and then there'd be a view where you do the, do this stuff. Honestly, view today is almost identical to this. This is the
[00:15:02]  setup function right here. And this is the, the, the view template. This is, this is view. So as I said, if I do have a soft spot
[00:15:11]  for view, which I don't say I particularly do, but if I did, it would be because it's basically like the modern imagining of knockout, but it
[00:15:21]  wasn't always. Which kind of, kind of takes us back to the beginning of the story here. Actually, view only became this way with view three composition API. They
[00:15:30]  could have been this way since whenever they came out, was it 2014, 2015, but they weren't. This, this is basically what I, I fell in love
[00:15:41]  with, so to speak. I wanted to see this come back, even though basically it was pretty much pushed under the heel of the heel of React. So kind of
[00:15:55]  going back in time now. React came out in 2013 and people were, actually, let's see. I got a banner for this. I'm going to, this helps
[00:16:11]  me edit the videos later, if anyone's wondering. I throw these banners up. All right. So basically, React came out in 2013. Before that, there
[00:16:25]  was a number of JavaScript frameworks that are kind of floating around that had a lot of these similar kind of declarative patterns. There's angular was one, knockout was another
[00:16:35] . There's a few others. These are kind of replaced things like backbone, which, I mean, by modern standards, most people would probably kind of be like,
[00:16:45]  oh, we really did that. But backbone, what it used to do was when you re-rendered a view, it would literally just replace everything, like just,
[00:16:54]  just wipe, wipe out the whole, the whole views. It was like inner HTML more or less. The libraries are a little smarter than that. They could enter HTML the
[00:17:04]  first time to draw it, and then they could basically collect the nodes. So next time they could just clone the nodes. But essentially, we had basically wholesale switching,
[00:17:15]  which is what led to more fine-grained stuff like Knockout and dirty checking in Angular. And Ember, which was also around at the time, was also kind
[00:17:26]  of similar to Knockout, where it was doing these kind of more granular updates. But React changed the thing because they're like, oh, don't worry about that.
[00:17:33]  Just re-render everything but use a virtual DOM instead. And guess what? The performance isn't that bad. They actually didn't say it like that. They actually
[00:17:41]  said the performance was better and the DOM is slow and whatnot. And it kind of got pushed way out of, you know, context. But that was my problem. I
[00:17:51]  like this. I thought this was a better pattern. And I was being told that the DOM was slower than the virtual DOM. And I was like, no way.
[00:18:00]  So the first online benchmarks were kind of funny. They were, how should I put it, they were online demos that you could try yourself on your own computer. And you
[00:18:16]  would just be basically at the mercy of your browser, so to speak. Which I think is kind of funny because, like, that's not a great way to test
[00:18:24]  stuff, honestly. But you'd have something like this JS Fiddle. And I don't know when this was made. It's so old now that it's broken
[00:18:31] . But this worked for years. Like, it probably came out in like 2011 or something. But essentially, eventually, I think around 2016 or 17 time period, it
[00:18:46]  broke, unfortunately. But what was this silly test? It was spinning a bunch of circles. And Jeremy Ashkenis, creator of Backbone, actually wrote it because he
[00:18:56]  was trying to point out that Backbone was faster than Ember. Because I guess Ember's approach, let's see here. Folks often ask about how the difference
[00:19:05]  between Backbone and Ember approaches to view model binding play out on the web apps. The script uses Backbone's latest and Ember's to animate 100 circles or more
[00:19:12] , change the end in the JavaScript. So you can always edit the code right here. So that you can see responsiveness after you click the button and visualize the speed difference
[00:19:20] . The Ember team is aware that in very performance sensitive situations, like this example, its binding implementation may be too much overhead. They've reviewed this example and are
[00:19:28]  hoping to be able to remove this difference in the future. No, this is just a simple benchmark. You won't be doing this in actual app. Unfortunately, this is
[00:19:36]  long dead, unfortunately, but this kind of spawned like dozens of forks of this fiddle where people just kept on adding other frameworks to the circles demo. And obviously
[00:19:48] , in the original one, Backbone was faster than Ember. And then I was like, okay, you know, I put Knockout in and it was faster
[00:19:56]  than both of them. And then someone added React. And this kind of kept on going on for a few years. And this was kind of very early stages. And I
[00:20:06]  actually was looking at it after a while. I'm like, this measures the wrong thing. It was measuring the framework overhead time, but not like considering painting or like updates
[00:20:18] . It wasn't, instead of like measuring tick to tick, like start to loop to start a loop. It was basically just measuring the time spent in the framework code
[00:20:26] , which is fine. But it was my first exposure of also understanding that all benchmarks aren't created equally or fair because basically someone had created a version of Ember that just
[00:20:39]  nuked this task compared to everyone else. Like most frameworks on my old computer would do this in like 20 milliseconds of a loop. And I'll show what I
[00:20:47] 'm talking about in a minute. I actually recreated this demo, but this one version of Ember did it in three milliseconds. And it was because they were deferring
[00:20:54]  all the rendering. So the time spent in the framework was like, was not, was, was different because it was just doing some calculations and wasn't really measuring any
[00:21:03]  of the DOM creation aspects. But I said, the whole test was kind of awkward anyways. So the funniest thing is, um, this, this for me is always going
[00:21:16]  to be the quintessential quintessential benchmark, because it was, it was, this is solid basically got started almost as me testing reactivity in a JS fiddle,
[00:21:30]  just like that, just, just, just doing it. And I just kept on tuning in and tuning in as I built templating languages and that I brought it down locally
[00:21:37]  in my computer. And I just went over and over again to figure out how I could do it. See, I even kept some of the original styling, right? I
[00:21:44] 've got backbone. I don't have Ember here, but this, this, this was the baseline. And it's kind of sad because now I've made this 300
[00:21:51]  circles and I think it's 300. I can't even count. It doesn't matter. I made it more circles and on my M one that might, let's
[00:22:02]  see if we can zoom this in a bit. You should see it's about seven, I don't know, 7.6 milliseconds. It's, it's interesting because
[00:22:12]  I'm streaming. So I'm probably going to get worse performance, but over time it averages. And as I said, this is just a silly spinning circle demo.
[00:22:26]  And the thing backbone's a 7.8. Okay. Inferno is a 5.4, much, much faster. How about vanilla JS? Also 5.
[00:22:39] 4. Basically over time benchmarks kind of stopped 5.4, 5.5. You know, these benchmarks stopped even mattering. Cause as I said, I tried to
[00:22:56]  scale it as best I could. Let's see solid state. I think this is, yeah, they're all, they're all basically the same on this M one.
[00:23:03]  I haven't actually tried this on the M one. I wrote, it's been a while since I've updated this demo. So it's a little, no,
[00:23:09]  basically the framework stopped kind of being the bottleneck maybe, you know, at a certain point, like which one am I doing right now? Preact. Maybe it's
[00:23:19]  a little bit slower. How about lit? Yeah. Lit's definitely a little bit slower, but like, what is this testing? Knockout? See, here we
[00:23:32]  go. Knockout's not as fast as the modern frameworks, but it's 6.4 is definitely better than backbone seven point, or I guess backbone. Yes. About
[00:23:43]  seven. And where's another how's react doing? No, reacts the same as everyone else. Yeah. But essentially this is, this is the kind of silliness
[00:23:54]  that was, was benchmarks back in the day. But yeah, I sat here and I tuned and I tuned and the truth of the matter is I don't even think,
[00:24:03]  even if I tried to do something like CPU throttling, yeah, let's, let's add the CPU throttling. I don't, I think it
[00:24:09] 'd be difficult for me to reproduce how, yeah, because CPU throttling is messing with my measuring mechanism. I don't, I don't think I'd be able
[00:24:21]  to even, well, actually CPU throttling actually shows the difference, eh? 40 for backbone versus nine for solid state, 10. Yeah. So maybe they're,
[00:24:34]  yeah, but yeah, they're all, yeah, basically you get to a point where these benchmarks no longer can show the, the granular difference is my point. Basically
[00:24:47]  time has moved on and this benchmark is basically useless now. But as I said, it was really instrumental because this is the first place where I realized that the approach that
[00:24:58]  I was doing could be, you know, could be relatively fast. Funny thing is, at this point, people weren't really talking about page load benchmarks as much. G
[00:25:11] atsby frameworks were all about these kinds of performance benchmarks. And then the next key one that I want to talk about, um, was, I think it was Ryan Florence
[00:25:21]  originally, you know, who works on react router and what he did, he did a conference to talk in 2014, 15, where he proved that react was really fast
[00:25:32] . And, um, this is, I'm going to introduce basically the second type of, um, the second type of benchmark is the first one. There's an animation
[00:25:44]  benchmark. And my, when I talk about runtime benchmarks, in my opinion, there's really three different types. There's animation, there's snapshot, and then there
[00:25:53] 's list benchmarks or to do NBC style benchmarks. They almost all fall into those three categories. Animation and benchmarks were the oldest ones because people, you know, didn't have
[00:26:01]  the means to test stuff as easily. Um, even the snapshot benchmarks are a bit like this, but what a snapshot benchmark is, is where that first benchmark, animating
[00:26:11]  the circles, you can imagine, is literally just having a view with, you know, a couple properties on it, on some DOM elements. There's no creation or
[00:26:21]  insertion or anything. You're literally just animating it. You're just going, okay, on a set interval or, you know, set time of zero, as
[00:26:28]  fast as it can run, essentially keep on changing the values, like go from zero to 250 over and over again. And, you know, basically shift the color over
[00:26:42]  that, shift the position over that, you know, that, that basically was just doing these really granular updates. It's an update test. The, the next type of
[00:26:51]  test, which are called snapshot benchmarks, are where they take a whole big blob of data from the server, let's say, and every, as fast as they can,
[00:27:00]  they just spam the whole view with as much, with this big blob of data. And I, I always found these ones funny because they didn't seem realistic. Well
[00:27:08] , on the one hand, the animation benchmarks are kind of silly because like, who's animating a thousand circles? At least if you were to animate something in JavaScript,
[00:27:17]  that is how it would happen. These benchmarks were like, I was like, who re-renders the whole page over and over and over again. Like, why
[00:27:24]  wouldn't you do patching? Like, why would you send the whole thing over and over again? But this benchmark was the one that proved the BDOM was faster
[00:27:34]  than the DOM. And see, yeah, see, Ryan Florence, right? A lot of, a lot of, a lot of big names in React basically did some really
[00:27:44]  key conference talks during that 2014-15 time period where they made their name. And it's kind of funny talking about now, but like back in the day, benchmarks
[00:27:53]  used to actually mean stuff. Now everyone just kind of ignores it. But it's funny, it was convenient enough when React was coming on the scene to talk about benchmarks
[00:28:00] . But nowadays everyone's like, oh, it's fine. They're all fast enough. But yeah, attitudes change a little bit over time, I guess. The truth
[00:28:07]  of the matter is the benchmarks never were really that important. But I want to show you this one. And if I can find, this, this stopped being updated a
[00:28:18]  couple years ago. But essentially, I ignored the optimized ones because they're people trying to do weird cheating things that don't matter. But let's go deep in on React
[00:28:28]  to give you an idea what this benchmark is. All it is, can I spam this page? And what you, this is nested for loops, but you get
[00:28:39]  a whole blob of data, like array and array that changes. And we just spam it as fast as we can. If you can see, it's pretty small in
[00:28:47]  the corner here. But let's see if I can zoom in a little bit. Essentially, we have, it tells us the repaint rate, and it tells us the
[00:29:01]  memory usage. And obviously, this is another one that's kind of got lost in time a bit, because on my M1, this is just flying. You can
[00:29:09]  also adjust from 50% mutation to like 100% mutation, or to like no mutation. Right? See how less rows are updating. And what's interesting about this is obviously
[00:29:25]  every firmware does better with low mutation. 161.70. This is started around 130. And at the top, about 110. But again, this used to make
[00:29:37]  a bigger difference than this. This was the go-to benchmark at the beginning of React. And I can show you why. Like, it's not actually hard. Remember
[00:29:48]  Knockout, my buddy, Knockout, here? We just saw React. 16, I think it was, at 120. Knockout, my buddy, knockout
[00:29:58]  is 40. And when you go to full mutation, it's 24. And when you go to, no mutation, it's still 24. Actually, no, I think
[00:30:16] , I think, I think the, I think it's possible that the mutation, no, there we go. Okay, it's 180, 190. So, did you
[00:30:24]  see how big a jump this was? The difference between no mutation and all mutation? Obviously, fine grain is built good for updates, granular updates. But if you're
[00:30:39]  wiping out the whole screen, you're not going to be able to benefit from it. And if you actually look at the implementation for Knockout here, it is incredibly naive
[00:30:46] . So naive that like, how should I put it? I I could see people implementing things this way, because it's complicated to actually make it work the right way
[00:30:57] . But this, this test was basically stacked against Knockout, like the implementation was basically like, Oh, I'm too lazy to make everything granular. So I'm going
[00:31:06]  to, I'm going to just like, stick everything in one signal and then hope for the best. That's essentially how, how this, this was attack for something
[00:31:15]  like Knockout. And obviously, there's frameworks that are faster than other frameworks. Right? This one's at like, Inferno's at like 160 or 70,
[00:31:25]  where React is at 120. And it keeps that here. And if you get into this zone, you know, actually, yeah, this bar must be broken, you
[00:31:36]  know, so when I go up, oh, it's because zero doesn't work, right? Yeah, it's because 0% doesn't work. Yeah, it's
[00:31:42] , it's about, it's about, it's about 200 or something to apply to attend. But basically, this is the test that came out that basically made the
[00:31:53]  VDOM kind of show its mastery. And I think it's, it's interesting, because all the VDOM libraries do better than like, than most of the
[00:32:03] , the fine grained libraries. The reactive seems actually doing okay in this one. Let's see. Yeah, not bad. But yeah, I think the most interesting thing
[00:32:15]  for me was, this is the one of the first places that I saw someone do canvas renders. This is obviously unfair, because it's not the exact same view
[00:32:23] . But when people talk about flutter in that, this is this, this is react canvas much faster than react. And even when you scale the mutations up, oh,
[00:32:31]  is it not going to let me? Yeah, okay, this is broken now. As I said, these things have been kind of left alone for much too long. But
[00:32:42]  this, this benchmark was basically the worst scenario for for reactive libraries. And it basically was kind of part of the death knell and the way of saying, like, oh
[00:32:54] , VDOM is the fastest. I did eventually make this one for solid. Maybe mod solid. And you can kind of, for these kind of benchmarks, what I
[00:33:08]  actually ended up doing a lot of, which you can kind of check out here, is using state or stores, basically, because then I could get granular reactivity.
[00:33:22]  As you can see this test, it's, it's a for loop, in a for loop. And essentially, all the test runner is, is like generate a
[00:33:33]  big blob of data, and set state on it, like set new states. So this is actually testing solids reconcile function. This is kind of why I came up with the
[00:33:42]  reconcile function in solid because you can't do something without diffing. And you notice I have this comment here, cheat like top libraries. Well, it turns out putting
[00:33:56]  stuff in a, in a micro task, actually separates the data generation and actually causes everything to run faster. Little tricks like this are super common in benchmarks, especially animation
[00:34:09]  benchmarks, kind of playing with the timing has a bigger difference sometimes in the framework. There's always a way to kind of cheat around things. But my point is, this
[00:34:20]  one I actually use, reconcile with merge true key null. So this, this is doing, this is basically doing key by index. And I wonder if I actually change this
[00:34:30]  to index, if it would actually be more performant now. But essentially, this is a way of forcing key by index, because basically, the other way people used
[00:34:39]  to cheat these benchmarks is not is using non keyed, because often, if in a benchmark that involves creation and removing a lot of elements with different data, if you use
[00:34:47]  key, you actually create them, but using non key, you can hijack, recycle the DOM nodes already there. This has tons of bad things that can happen in terms
[00:34:56]  of the fact that the DOM itself is stateful, things like animations, things like web components, things like forms, there's a lot of reasons why you don't
[00:35:05]  want to use non keyed, even though that's the default in some frameworks for some weird reason. But again, to kind of win a benchmarks, a good trick is
[00:35:14]  to go non keyed. But my point here was, this, this, this is such a silly benchmark, but this was like the thing that got reacts performance on the
[00:35:24]  map. And I made a version for solid, as I mentioned, it's pretty good. It's 190 here. So I guess that's comparable, maybe a little
[00:35:34]  bit faster than Inferno. And then we go to one, sorry, go to one. Yeah, it's about 220, 230. Yeah, so pretty fast,
[00:35:44]  I made sure that solids reconcile was as fast as the fastest VDOM libraries. It was, it was one of my goals, basically, as I said, I knew
[00:35:52] , even if I'd like knockout, I knew no one would take us seriously, unless I could show that, you know, reactivity was basically more performant
[00:36:03]  than VDOM. It's kind of funny, because I was doing this all before Rich Harris actually succeeded in delivering that message. But, so I guess it doesn't
[00:36:14] , now people aren't surprised by it. But if you go back in time to when I was working on this, most people believe the VDOM was actually faster
[00:36:22] . And I just, you know, for me, this is like my montage, like Rocky montage moment, I just kept on fighting through every single benchmark I could come across
[00:36:31] , just to show that this approach was the fastest at the mall. So yeah, like 100, yeah, still at 180, 190. So this, this is,
[00:36:42]  this is kind of the, you know, the deal there. There's a question here, request, explain benchmarks for react beats preact. Yeah, let's see if
[00:36:58]  I can get, I can get there. It's, it is an interesting question. Because there are a couple benchmarks where react does. Most of the time in micro
[00:37:09]  benchmarks, preact will take the win, but actually, vast majority, they are actually very similar, surprisingly similar. So yeah, let's see, we can get there
[00:37:21]  in a second. But, but I mean, actually, even in this DB Mon situation that we're looking at right now, let's see if we can, if
[00:37:30]  we can, we can do a little something here, because, okay, obviously, so it's really fast. But I know there's other frameworks that are pretty darn fast
[00:37:40]  here. There's a couple really weird ones, I don't even know how they work. But, you know, I try my best, I reverse engineer them. Obviously
[00:37:46] , stuff like stencils, not bad. Yeah, yeah, 160 170, slower than Inferno, but not bad. Vanilla. See, here's the
[00:37:55]  funny thing. Vanilla is faster than knockout JS here. Slower than react. And the vanilla is like doing something silly, like inner HTMLing. I want to
[00:38:05]  point this out, because this is just how biased these benchmarks were against fine grained reactivity. Like, you could basically do something really dumb in vanilla JavaScript and still have
[00:38:15]  it faster than them, because people obviously didn't take the time to learn how fine grained worked. And it was complicated to do it. Like this, this,
[00:38:22]  they, if they want to engineer a benchmark to show that the VDOM was faster, this was the one. Just kind of funny point, because I said knockout
[00:38:29]  is slower than vanilla JS here. And this vanilla JS implementation, I mean, I could probably pull it up here in a second, is literally like inner HTMLing it.
[00:38:37]  But I showed you where React was. Let's see how Preact does on this one. Yeah. It's better than React, but not as much as you'd
[00:38:48]  say. It's about 150. React was about 140. So, yeah. Inferno 180 jumps it again. But this might be also a little unfair because we're
[00:39:03]  comparing older versions of libraries. But as I said, benchmarking is funny. And these earlier ones were all like this. I said, you run this on different people
[00:39:12] 's computers, you get different results. Let's go back and just see how, oh, Ripple. Ripple is the one I wanted to show you. Ripple
[00:39:20]  is insane, if I remember correctly. Ripple, Ripple, Ripple. I tried to reverse engineer what it's doing at one point. Ripple, Ripple
[00:39:31] . Check this one out. 300. Ripple, Ripple, Ripple, Ripple, Ripple. Yeah, it's like 300. I don't even
[00:39:46]  know, like, is it cheating the measurement somehow? This one's always got me in, but you can never find the repo. I almost feel like this was built
[00:39:58]  by someone who is just trying to game this one specific benchmark. You can't find it anywhere. I tried to back source to look through the source and find it.
[00:40:07]  This framework doesn't actually exist. I am personally really curious how they did this because, as I said, you can see the typical progression where you have React, then
[00:40:21]  Preact is a little faster than that, and then Inferno is faster than that, and it's all a little bit faster than that. You can see the typical
[00:40:28]  progression here. This is just, like, doubling everyone else. I honestly have no clue how they did that. Another library that sometimes ends up doing that is a small
[00:40:38]  -- it's from the Russian library, but, no, in this case, they're only doing 60. They do fine -- semi-fine grain stuff, but it
[00:40:45] 's also -- they also use node recycling. So, anyway, little stuff. So, this is, like, 2014, 15. So, we got our circles.
[00:41:00]  We got our dbmon, you know, and -- what's ones? Oh, there's another -- there's another one of the 300 ones. Yeah, there's
[00:41:11]  clearly a couple libraries have figured out how to do it. Actually, if I remember, once and ripple are actually the same thing. But you can see -- you can see
[00:41:18]  some of the implementations here. I showed you solids. What's vanilla.js doing here? Elhori, critter mithril. It's creating a
[00:41:31]  HTML string every cycle and then running innerHTML on it. Like, that is your baseline, to be fair. Replacing everything with innerHTML should be
[00:41:50]  your baseline in a benchmark like this. So, this is the right baseline. The reason I'm just laughing, it's because Knockout is slower than this. Like
[00:41:56] , what are they doing in Knockout? The -- like, that is -- I bet you -- like, they basically have to be doing the worst possible thing for it to
[00:42:04]  be -- like, they could have just made Knockout do an innerHTML. Yeah, pretty freaking close. Look at the Knockout implementation. Make an observ
[00:42:19] able array. And then pass it to the view. It doesn't even do anything special. It's just literally one signal, essentially. It's an observable array,
[00:42:30]  so it's a little bit fancier than that. But it's, like, one signal. And then -- what's the view look like? For each databases.
[00:42:39]  For each. Yeah. Yeah. And also, if anyone's interested and you love this data bind syntax, like, this is the predecessor of -- to a sense of view
[00:42:53]  and Alpine. Like, the petite view. Like, the Knockout can -- has -- was basically done the same way. And this -- this is the way frameworks
[00:43:02]  used to work. Like, look at this one using the comment tag as a way of doing the for loop. But, yeah. Okay. Anyway. Basically, the
[00:43:14]  overhead of the framework is higher than just innerHTMLing, even though the implementation is just innerHTMLs, more or less. It's because there's
[00:43:25]  a simple -- if you look from the benchmark, there's the ones that were yellow and ones that are orange. The optimized ones were this orange one. And I guess you
[00:43:36]  can -- we can see what the optimized vanilla looks like by comparison. We can do a quick look here. What does it do? Okay. Oh, okay. This
[00:43:51]  one's not using innerHTML. It's great. It's creating all the elements one by one. And then it's inserting them. Oh, okay. Oh
[00:44:04] , actually, no. This one -- this one's actually smart. It's not just generating them that way. It's actually doing -- it's actually walking over the
[00:44:12]  DOM and then doing the different patching here. Is it doing this in a smart way, though? Patch row. NodeValue, nodeValue, class
[00:44:23]  name. Yeah, yeah, yeah. Yeah, yeah. Yeah, okay. Yeah, that checks out. Rows is a list of nodes. And the nodes is
[00:44:38]  an array. And when they build it, they are just pushing into this array and they're walking -- yeah, this should actually be much faster. what I want to
[00:44:55]  check is something people might not be aware of. And I got to thank Patrick Steele, creator of Marco.js, actually. He kind of -- he came up
[00:45:05]  with this library of morph DOM, which is also in that comparison. And he basically highlighted what everyone kind of guessed at but didn't know. But he made it really
[00:45:18]  clear in here where he explained that the secret to morph DOM was that -- how can I make morph DOM blaze through the DOM tree even faster? Okay, no,
[00:45:30]  not that. Isn't the DOM slow? Yeah. He's one of the first people -- he was one of the first people to actually show that the DOM didn't need
[00:45:40]  a virtual DOM. He was actually diffing real DOM nodes. And what he said was, look, if you don't access expensive properties, then the DOM is not
[00:45:54]  slow. So what does he say here? The DOM day structure is not slow. The DOM is a key part of the web browser, must be fast. Walking DOM tree
[00:46:01]  and reading the child's DOM is not slow. However, if you attempt to read a computer property in a DOM node that requires a re-layout on the page,
[00:46:07]  that will be slow. However, morph DOM only cares about the following properties. And basically, the big secret here is don't ever use child nodes. First child,
[00:46:16]  next sibling. If you've ever seen solids compiled output, you will see that we actually follow this list of safe attributes, so to speak. But basically, with -- originally
[00:46:37] , even though Marco has a VDOM, he originally built this library to show that you could diff and merge real DOM nodes without using a VDOM. And if
[00:46:45]  we go back to our JS Paint thing here for a second, we should be able to see some stuff. Yeah, let's go here. First of all, let
[00:46:57] 's see if we can find vanilla optimized. It's funny, because optimized means different things for different benchmarks. Clearly, vanilla optimized -- yeah, huh. See, vanilla optimized
[00:47:12]  is much nicer. It's very similar to Inferno or solid. Apparently, solid is a slightly bit faster than vanilla optimized. But it's almost the same as
[00:47:23]  Inferno here. So essentially, maybe there's a small DOM trick that I'm doing. We can look and maybe figure that out. But essentially, that's what
[00:47:34]  it should be doing versus just InferHTMLing it. So, you know, that's pretty nice there. But let's see how MorphDOM
[00:47:42]  does. I don't think MorphDOM actually does that great. Oh, yeah. Here it is, MorphDOM. Yeah. So it's like the
[00:47:49]  basic vanilla implementation in terms of speed. So it's kind of interesting how over time, even different approaches have gone up faster and slower. Like, everyone knew at a certain
[00:48:01]  point that, you know, if you want to be fast, you put everything in a document fragment first and then attach the fragment to the DOM. That's actually slower
[00:48:08]  now. And I'll show you some stuff a bit later about that. But essentially, this was a pretty big breakthrough, at least for me, of understanding. Like,
[00:48:25]  I just started replacing things I was doing with what he was saying. Like, don't use this probably use this property. And suddenly, I saw like significant performance improvements
[00:48:32] . So big, big shout out to MorphDOM. I can't believe I haven't started this to this point. Okay. This was like one of those corner
[00:48:42] stone libraries and one of the many libraries that kind of got pushed under the rug as things progressed. Technically, MorphDOM is still alive today. It is the core
[00:48:51]  of Marco's virtual DOM render. They mentioned here that they actually support doing virtual DOM diffs. Well, Marco still uses MorphDOM at its core. But
[00:49:00]  other than that, MorphDOM has probably kind of faded away to obscurity. But it was a fundamental library back in the day. Anyway, yeah. As I
[00:49:13]  said, this is a silly test. But it is pretty representative of these styles of Benfart. There's actually one that I saw people still make these kind of
[00:49:22]  tests. These ones are less common now. Just like out of all the types of benchmarks, runtime benchmarks, I would say that these, how should I call them, snapshot
[00:49:37]  benchmarks are much less common. The last one I saw was actually from the creator Imba. And actually, technically, the Mikado repo has a snapshot style one
[00:49:48]  as well. It's a really good way to show off when you recycle DOM nodes. And one of, even though we kind of prevented Mikado from using it in the
[00:49:56]  JS frameworks benchmark, actually, no, let's pull up Mikado. If you guys aren't familiar, Mikado is the fastest library in the JS frameworks benchmark.
[00:50:03]  And it has a really novel way of doing templating. So basically, it's just a layer over the DOM. It's not even concerned about data or being declarative
[00:50:15]  or data thing. It just literally like, it's just like an abstraction over DOM nodes. This doesn't really help you with advanced state and actually building applications, but it
[00:50:23]  is amazing at simple benchmarks. So what I was going to say is that he has a couple results here somewhere where he's using DOM node recycling or something. And yeah
[00:50:34] , he always like, he says, you know, out of the non-Mikado libraries, you know, he always give props to solid for being really fast.
[00:50:42]  I don't know why this is zero here, but essentially we score slightly above Inferno, which scores above mithril, redom, domc, and
[00:50:50]  then innerHTMLs here and then surplus, sinuous, jQuery, lit, reactive knockout are all down here. And this is always the sign of a
[00:50:59]  snapshot benchmark, because all the fine-grained libraries are like down at the bottom, slower than innerHTML. You should never be slower than HTML, but it
[00:51:09]  means the reason that fine-grained is slow. And there's a question here is like, so a better knockout implementation could do this diffing too. Yes
[00:51:16] , but it's tricky because essentially you would have to create all the observables and then make a thing that walks through the observables and then knows when to create them and
[00:51:26]  not create them. It's actually a lot of bookkeeping, having double nested arrays of nested observables. If you've ever used or checked out the solid tutorial
[00:51:35]  on nested reactivity, where I basically show how you can wire in. And I do this in the JS framework benchmark for solid signals as well. One layer isn
[00:51:43] 't too bad, but if you try and get multiple nested layers of putting signals and signals and signals, which is actually how it used to work in knockout, it
[00:51:50]  starts getting like a lot to maintain and iterate over and keep in sync. And actually, I developed a lot of methods similar to Solve's map array, which is the
[00:52:00]  for loop, just to kind of manage the stuff. Like we use it all the time in our view code, right, to kind of do loops efficiently. It was
[00:52:07]  common in those days to take a signal that just had the raw data, say from the server, and then use map array to map it to a bunch of signals. So
[00:52:17]  essentially, you maybe nested map arrays, like essentially you would use, because anytime that core data changed, you'd have to then map through, see what changed, and
[00:52:27]  then create the new nested stuff. And you'd want to do it granularly the same way we do our for loops. So essentially, you'd have source data
[00:52:36] , and then this kind of computation to derive the tree of signals, and then you would run over it again in the view. So you would map, you'd have core
[00:52:47]  signal, map to signals, map to view, three steps. Terribly, terribly inefficient. And I mean, it was fine. That's what you did. But
[00:53:00]  I started kind of loosening up and going, okay, maybe not everything needs to be a fine grained signal. Maybe it'll be okay if we just make the row
[00:53:06]  a signal, and then do some basic diffing. And that kind of influenced my approach with solid a lot, because like granularity is great, but you know, it
[00:53:15]  has an overhead memory and whatnot. And, but the other solution was proxies, because proxies can do it on the fly and doing a simple diff like
[00:53:24]  I do in reconcile, you know, on the like, the thing with the proxy is, you can just, in theory, you can just go to a path that doesn
[00:53:32] 't even exist, and subscribe to it before it exists. Like, it's kind of path based, obviously, we do restrict it to things where there's data until you
[00:53:40]  get to the leaf. But like diffing and stuff is a lot easier to do when you can just iterate over that data structure, and you kind of keeping the single
[00:53:48]  stuff separate. As I said, it is completely possible, but it is complicated. And no one who's just making up, oh, let's see how it works benchmarks
[00:53:56] , is going to do it. And they don't, as I said, this, this is just a textbook example of snapshot benchmarking. You might be going, oh
[00:54:03] , but solids right at the top here, right? Reconcile. I knew that if I was going to show that a library could be faster than a VD
[00:54:11] OM, that I needed to pack a diffing algorithm too. Honestly, I don't think you need it most of the time. This is my whole point. These benchmarks
[00:54:19]  are kind of silly. Of course, Mikado does this node recycling thing, which is, it's just, if you're recycling all the nodes, it's just,
[00:54:26]  it's just, it's insane. Like, this number might as well be infinity. Do you know what I mean? Like, like, you can see the progression of
[00:54:36]  the other frameworks, you can see the effect of some granularness, but then when you get here, it's just like, yeah, it might as well be infinity
[00:54:43] . So, yeah, this is an example snapshot. Yeah, like, benchmarks like this have no business. Like, no framework should be slower than innerHTML.
[00:54:55]  InnerHTML is the baseline. If you see a test where framework is slower than innerHTML, more than likely the implementation is bad. This is my
[00:55:10]  opposite advice though. Then if you have a benchmark where vanilla is not the fastest, I also say that's a garbage benchmark. Like, what are you testing against? You
[00:55:21]  always need a control. You always need like a baseline. And in my opinion, that baseline should be optimal vanilla on one side, innerHTML on the other
[00:55:34]  side. That's the range that all frameworks should live in. If you're slower than innerHTML, you're doing, like, you're wasting everyone's time
[00:55:41] . You're doing something wrong. If you're faster than optimized vanilla, then the vanilla implementation is flawed. And you should, you know, reexamine it.
[00:55:52]  So, yeah, there's this one that Mikado did. And then, like, the Imba one actually got kind of popular. Was it DOM reconcil
[00:56:04] er? Imba memoized DOM. Is that what they called it? Yeah. No, this is people trying to get Imba in the JS framework benchmark.
[00:56:23]  And then this framework was saying that it was 10 times faster than all the frameworks. And then we got it in the JS framework benchmark, which is the next one that
[00:56:32]  I'm going to talk about. And it was, you know, good performance, but it was kind of in the middle of the fast pack. And people were like,
[00:56:38]  I thought you said it was 10 times faster. Like, people being real jerks about it. I mean, honestly, this benchmarking almost was a bit of a scene
[00:56:47]  for a while where you had the common people, a lot of framework authors working on stuff. This is the Imba guy, DomVM. Like, I recognize
[00:56:56]  all these people because they literally are all writers of different various beat on ones. I'm trying to find this stupid benchmark. I should have looked it up earlier. But
[00:57:07]  essentially, you got some notoriety because Rich Harris used the benchmark in the rethinking, the rethinking reactivity talk. And this is another sort of snapshot benchmark in
[00:57:27]  the rethinking benchmark. Let's try this. I'm reconciler bench. And okay, we can run it here. See, you guys love benchmarks, you can
[00:57:38]  just run in the browser, right? So it has Imba react and view. Let's just do it. Let's run the benchmark. Got a couple seconds
[00:57:45] . Anyone got any questions so far? They can fire in. Yes. Yeah. Imba is kind of cool. It was -- the language thing has been going on
[00:58:01]  in JavaScript for a while now. And basically, Imba was -- what's the order? 2012 was Elm. 2014 was Marco. 2015 was Imba
[00:58:14] . 2016 was Svelte. But I won't even consider them a language really until 2019. So basically, this kind of look for JavaScript as a language is going
[00:58:27]  on. So I'm covering the results right now. So let me -- let me -- let me reveal them to you. They haven't changed in the last couple of years
[00:58:34] . Bam. I'm covering in the corner. But essentially, Imba is the baseline. View is 20 times slower. And React is 30 times slower. This
[00:58:47]  is -- this is my example of, like, a terrible benchmark. Because essentially, you have no baseline. You -- like, Imba can't be the baseline.
[00:58:58]  A good vanilla implementation should be the baseline. But still, you know me. I went to go implement this. Because I was like, okay, you know what? It
[00:59:05] 's a benchmark. I'm game. Right? And when I went in, I realized Ember had actually made a version in the benchmark. And I was like --
[00:59:21]  they were doing something really weird kind of using mutatable proxies. And I was like, would it be okay to bring your own store or store methods in? Because
[00:59:29]  they wrote this as a snapshot benchmark. And I wanted to try and get fine grained in here. Right? And they didn't really allow for it. Because it's
[00:59:35]  all based on these immutable data structures and whatnot. Right? And I basically pointed out to them what Ember was doing. Because Ember was, like, 5
[00:59:44] % faster than Imba here. And then everyone -- then he realized it's like, oh, Ember's not even being measured in the benchmark. Like, essentially
[00:59:53] , the way Ember's implementation worked, it just bypassed the whole benchmark. And it was getting a higher score that way because it was pulling it out. So after
[01:00:06]  they fixed it, Ember was actually a bit slower. But it didn't make sense. You had the right Ember in a way that made no sense. And
[01:00:12]  I kind of was like -- I'm like, so how do we do this? And basically, the author was like, you don't. You have to work this way
[01:00:22] . And I'm like, but the way this benchmark works makes no sense for any of these other libraries. It's basically a no-op. Like, it would
[01:00:30]  like, it would never run. Like, either our options are to completely cheat and completely destroy this benchmark or basically try and, like, make it work in a really weird
[01:00:42]  way. Essentially, this benchmark works on mutating data. It wasn't even structural -- structural cloning, you know, like immutable, where you could, like
[01:00:54] , diff where things change. It literally just mutated data and then went through and diffed everything. So what Ember was doing was like, okay, well, we
[01:01:00] 'll just take the changes and we'll just apply them in our own separate outside system. Essentially, this benchmark is useless. Like, it doesn't really show anything. And
[01:01:10]  even the author acknowledges that it's biased against the VDOM, and it's pretty much impossible, like, meaningless to a reactive library. It's basically only
[01:01:20]  made for these kind of dirty checking-style libraries or DOM reconcilers. And yeah, this is the benchmark that they chose to use for Svelte here, which
[01:01:32]  is too bad because I said it's basically, like, the worst benchmark ever. Because there are much better benchmarks. But I think Rich Harris liked this one because he
[01:01:49]  got to come in and go, look, Svelte is 50 times faster than React. The truth of the matter is, and this is -- if anyone ever tells you
[01:01:59]  that their stuff's faster than vanilla, they're, you know, they're not telling you something true or they're seriously misunderstanding something. You can be 50 times faster
[01:02:11]  than React. But if vanilla is a thousand times faster than you, if you normalize it on vanilla, then the difference between you and React might actually only be, like
[01:02:21] , 10%. Do you know what I mean? Like, without the third point of reference, the fixed point, the whole benchmark is kind of meaningless. Anyway, let
[01:02:35] 's keep on moving on. That's enough me ranting about this. This was -- honestly, it's such a silly thing. But because I'm such, like,
[01:02:46]  a benchmark hound, this is -- like, when Rich used this benchmark on Svelte, I immediately was like, oh, they must not take performance seriously. And
[01:02:55]  I know that's such a terrible thing to say. But, like, these comments and this discussion had already happened before that whole rethinking reactivity thing. And it
[01:03:07]  was, like, very clear reading it that this benchmark was basically useless. Moving on. So that's snapshots. As I said, in my opinion, these aren't
[01:03:19]  terribly useful. I actually wrote an article at one point about understanding JavaScript benchmarks that I'm kind of using here. And I mentioned animation benchmarks. And we're going to
[01:03:30]  come back. Spirsky triangle benchmark is probably the latest in animation. But actually, that's not completely true. Snapshots I just talked about. Dom reconcil
[01:03:38] er. Oh, UI bench. This one's actually pretty good. This is the best snapshot benchmark. If you're into -- if you're into the -- if you actually
[01:03:50]  want to see a good benchmark, this was created by the creator of EV, which is -- some of you may know -- that it's the fastest -- pretty much the
[01:04:02]  fastest VDOM library. I mean, now there's some different techniques. And we've seen stuff like BlockDOM and one more. But historically, it was the
[01:04:08]  fastest. Oh, there's so much benchmarked around that. I'm surprised they hear so much weight. Well, maybe that's why they don't carry almost any weight
[01:04:16]  anymore. But this, like, between 2013 and 2017, it was all about the benchmarks. Now that all -- that everyone -- like, everything's been established, no
[01:04:28]  one cares about the benchmarks anymore. But, like, the thing is, you know, it's like the old thing about, like, there's lies and damn lies,
[01:04:39]  you know, like the statistic thing. This kind of thing. I -- I actually think this is one of the best benchmarks that I've ever seen in term -- for
[01:04:47]  a library author. If you're writing your own framework, this is -- this is the benchmark. It is a snapshot benchmark. But you could tell this person's aware of
[01:04:56]  what's going on. They -- you can measure just the framework time versus -- you can measure the -- what do you call it? The paint time as well. I
[01:05:06]  generally always turn this on because I think it's useless to measure just the JavaScript time. You've got to see what the full picture is. You can disable should component update
[01:05:15] . This is basically the memoize feature. So this is for structural cloning. So I generally turn this on because, like, in a real app, you'd have
[01:05:22]  this. And then you can do some mobile tests and stuff. But he's got React, Bobrill, Preact, Imba. And you wanted to see
[01:05:29]  a test in which React and Preact actually kind of shift gears. This is -- this is the one. This one actually is a really good look at performance. It tests
[01:05:39]  simple list, table, and even tree. And I had a hard time with this one with Solid because the way he does the immutable data, it's, like
[01:05:49] , one step in. And I had to do some cloning. So there's a couple tests that are tests, like, no changes that Solid does really badly on.
[01:05:57]  Like, I could change them so they don't do really badly on it. But then that would cause a different test to do bad. So without me rewriting how he
[01:06:09]  does the test generator, I'm kind of trapped here. But, like, depending on the different settings -- like, it's funny, Inferno Optimize is
[01:06:19]  actually worse when you have, like, certain settings disabled and stuff. So it's kind of interesting. But Eevee is the winner of this benchmark because it is --
[01:06:30]  Eevee has the best diffing. But I do have Solid in here. And you can see how bad innerHTML is. So let's run this in
[01:06:38]  a couple frameworks just to get a feel for it. Let's just go React 16. It runs really fast. I can show you right now. Bang. What the --
[01:06:44]  oh, white list this site. Yeah. So let's try it again. It opens a window where it just does, like, incredible screen splat of stuff here
[01:06:52] . And it's doing tables. It's doing lists. It's doing tree nested view forms and stuff like that. And I like this. And then it automatically communic
[01:07:07] ates to the parent. And what the cool thing about this benchmark is, even though Solid is officially supported, you can literally put any implementation in this URL bar. So
[01:07:14]  you don't even have to -- you can test your local. You don't even have to submit to them to get into this. You know, this -- obviously that.
[01:07:23]  So let's -- yeah, I guess I should have given the seizure warning. Let's do Preact. I do love this topic of doing benchmarks, though, because
[01:07:36]  I get to show all the demos and stuff. Like, the -- and it's funny. I've spent so much time in these things, which I can talk about a
[01:07:47]  bit later when we get the JS framework benchmark because that's really the most important one. But -- and then let's do do solid. I wonder if the zoom is
[01:08:03]  different. Oh, yeah, that might affect my test scores. Because I zoomed in on my -- yeah, that might affect the test scores. Damn it. On
[01:08:23]  my -- when I was in the other demo, I zoomed in on my domain. Google remembers it based on the domain. And -- did I do Inferno yet
[01:08:32] ? I did Preact. Solid. React. Yeah. Let's -- yeah. Let's do Inferno for good measure. I think -- I think the --
[01:08:52]  I think the zooming in might actually hurt us. This is the last one I do, I promise. But the beautiful thing is you can run this yourself and see where
[01:09:10]  it is. Okay. Yeah. Okay. Yeah. This is pretty typical. You can see not every framework is good at everything. This line down here is actually what I
[01:09:25]  was talking about where solid should get really high. But anyway. if you look at the overall test score of the frameworks, adding up the average across the different tests,
[01:09:38]  Inferno is at 297 or 297,000. Solid is at about 300,000. So, Inferno slightly edges solid out overall. Preacts at
[01:09:48]  45 and -- and -- and -- and reacts at 339. So, my point here is, across all the different tests, React is actually faster than Preact here.
[01:09:57]  So, we can actually see where. This was the question earlier. Where is React and Preact actually different? And if you look at the table rendering, I don
[01:10:07] 't remember. He explains what the different things is. Like, 104 means render a table with 100 rows with four columns. 100 rows, four columns, render, remove all
[01:10:18] , sort. Like, he has all these different operations. So, you can actually see where different frameworks are different. So, solid is actually slower to sort than --
[01:10:30]  than, you know, slightly slower to sort than some of these frameworks here. Probably when I changed to UDOMDIF from EV algorithm. But, you know,
[01:10:38]  it's faster to remove -- like, if you look, Preact is really slow on removal here. And then, what do we got? Sorts. Oh,
[01:10:49]  actually, what am I -- sorry. Solid is actually -- sorry. Sort zero solid is slow. And this is what I was talking about -- actually, sorry, these sort
[01:10:59]  zeros are why. It's where it tries -- where it sorts but doesn't sort them. And this -- this -- these are kind of false negatives because of the way I
[01:11:06]  had to clone the data, which forces it. Where in a reactive library, you never actually do this. But actually, sorting when it's moving one, solid is
[01:11:14]  really fast. Filter, fast. Solid generally is really fast on tables. It's comparable to Inferno. And actually, React is pretty good on tables, too,
[01:11:22]  if you look at this. All the filtering and stuff. Preact, not so good at filtering on tables. Interesting. How about activating? What you might be asking
[01:11:30] , what's activate? Activate is -- I don't remember what activate is. Activate each row adds active class. So this is changing class on each row, okay
[01:11:41] ? I'll show the implementation in a few minutes here. But basically, adding a class to each row, React is actually really slow. Solid is -- except for activate a
[01:11:50]  few of these ones for some reason, which I'm not clear on, where Inferno is. But still, these are all pretty low numbers. Solid is really
[01:11:57]  good at activating on tables. And then, animation, solid is the best. Again, fine-grained reactivity. So we can kind of get an idea of
[01:12:07]  where different things are strong. Now, tree rendering. This one's actually usually pretty tricky for solid. There's places where reversing certain elements is actually slower. Preact
[01:12:23]  is actually faster. You can actually sort of see here the difference between the different reconcile algorithms, like whether they traverse backwards first or forwards or, you know, some work
[01:12:34]  fast reverse, some work fast forwards. And this is the sort of thing I love -- this benchmark is like the king benchmark for developers in terms of snapshot tests. I'm
[01:12:45]  not a big fan of snapshot tests, but they do test your diffing algorithm, your reconciler. I like putting paint in, as I said, because it has
[01:12:52]  real measure. But yeah, solid has always been very good on tables and very good with animations. Like this whole chunk here, solid is just like -- but trees,
[01:13:02]  it's a bit more varied and different frameworks take their turn on certain tree operations being really good. These no changes should be really good for solid, but as I mentioned
[01:13:15] , I have to force it. But he actually even has worse algorithms, like worst one for TV, worst for SnapDom. So Preact, want to bet that
[01:13:25]  it was based on SnapDom? Worse for React, which funny enough is also bad for Preact, but you can see that. And then this is for Virtual
[01:13:34] Dom, which is a different library. And in any case, my point is, this reconciler test actually showed that in a lot of scenarios, React is
[01:13:46]  actually faster than Preact when it comes to like complicated diffing, right? React actually should -- if you look for Inferno and Solidar, like around 300,
[01:14:02] 000, React is actually kind of not bad here, right? So like not all benchmarks are created equal here. And one of the the things that might be hurting Pre
[01:14:15] act here is, oh, this Preact implementation does DOM recycling according to this. This is one of my favorite things about this benchmark. And maybe that's hurting it in
[01:14:28]  some weird way. It shouldn't be doing it. So this benchmark actually, he tests the framework to tell their behavior. So even though you have these flags up here
[01:14:40] , which are like, hey, enable this, do this, reduce this. He actually does detection on the framework to see what kind of framework it is, which is absolutely
[01:14:49]  genius. Because he can tell if they recycle DOM nodes. He can tell if they have should component update optimizations, if they preserve state. Like if they recycle DOM
[01:15:03]  nodes, you don't want to recycle DOM nodes. But it's actually really -- he basically does tests to determine the nature. And these are the things that are actually important
[01:15:14]  from a benchmark standpoint. Because you know how people cheat. He wanted to make sure people can cheat. He basically goes, look, these are the frameworks that cheat.
[01:15:20]  Or like this is what they do. So yeah, UIBench is the best snapshot benchmark, period. If you want to test your VDOM or your diff
[01:15:40] ing algorithm, yeah, this is it. And Locavoid, the creator, is super knowledgeable. As I said, created the fastest VDOM library. This
[01:15:50]  is definitely the one. So we've talked a lot about these snapshot benchmarks. As I said, I knew these were the walls. See the animation benchmarks? Fine grains
[01:16:03]  got the nod there, right? We've always been able to do these granular updates. It's like animations. Snapshots have always been for the VDOM.
[01:16:12]  Like, so... Okay. Yeah, you -- yeah. Actually, you know what? Yeah, let's see. There's a couple things I can do here still
[01:16:24] . One thing I can do -- don't let me go backwards. Where is it? No. No. No. Okay. What is it? Local UIBench.
[01:16:42]  Let's just do -- let's just take a look at Solid's implementation of UIBench. Just in case you guys wanted to see. I'll explain what this
[01:16:54]  is. But DOM recycling is literally structurally looking at the tree and going, like, if there's a DOM node there, just hijack it for my purposes.
[01:17:07]  And Solid actually has a mode that does that. If you go merge true in reconcile with no key, it basically does that. It's, like, iterating over,
[01:17:16]  like, the data. And they -- instead of going, like -- referential equal check is, like, the first step. Or an ID check, which is the key
[01:17:24]  check. Like, basically, if you referentially check if something's the same, like structural cloning, then if -- if none of the items are the same,
[01:17:33]  you can remove it or add a new one. ID check is important also for things like structural cloning. Because if you update -- if you've ever done immutable data
[01:17:46]  structures, you know what I'm talking about. If you ever -- you have to clone right from the root when you're immutable. So if you have an object
[01:17:53]  that has a list on it, that has objects in it, if you -- so let's give a real example. If you have, like, state, like a new
[01:18:03]  component, and it has a list of users on it, and each user has a name and hair color on the user. In structural cloning, if you add an
[01:18:17]  item to the list, you have to clone the outside object, clone the array, but you can keep the references to the existing items, and then you have to add a
[01:18:26]  new item in the new array. And when it gets to the -- it'll -- it'll check the object and go, okay, this is new, so I have to
[01:18:32]  dig, get into the array, check -- see that it's new, dig, and then it'll check each item in the array, see that they're not new until
[01:18:38]  it hits the new one, and then does it. That's structural cloning. But if you change the person's hair color, you have to make a new object
[01:18:47] , new array, and the new top level object. And you go -- and what that means is if you don't have -- you can no longer use a reference check on
[01:18:58]  the user to know that it's the same thing. And because you can't use a reference check because you cloned it all the way up, you have to have
[01:19:07]  an ID or a key. So in our example, it would see the top-level object go, oh, it's changed, it's a different reference. It would
[01:19:16]  see the array and go, oh, it is changed, it's a different reference, and then iterate over each key in the array and go, okay, not unchanged,
[01:19:21]  until it gets to the one that's changed. Now, if we're just doing referential equality, at that point, it would go, oh, this one does not
[01:19:30]  belong here, or this is a new object. I know that I have to create new, you know, make new DOM nodes or something, whatever it's mapping.
[01:19:39]  But the way a key check does, it goes, oh, the ID is key. The key is the ID. I'll compare the old ID to the new ID.
[01:19:49]  Oh, they're the same. Now I know that I can keep using the same DOM nodes and just continue, diff all the properties on the DOM nodes. So I
[01:20:00] 'll see the new, what did I say, eye color, and update that appropriately. But I'll know that it's the same object. With recycling, it doesn't
[01:20:12]  really care what's there. It just goes, it basically goes, okay, funnily enough, with recycling, you do have to go all the way down the
[01:20:22]  tree, because it goes, oh, object, I'll check them all. Is there an array here? Okay, cool. I'll walk through the array, go through
[01:20:28]  each object. And if, and if it just, and then it'll go into each object and go to each key, and they'll check each key. It'll go
[01:20:35]  all the way to the, to the, all the way to the lease, and then check each individual value. And if they haven't changed, then it won't do
[01:20:42]  anything. But what it means is if you swap two items in a list, and I hope, I hope this makes sense. Maybe this is where I pull out Exc
[01:20:49] aladraw. Sorry. Excaladraw. Oh, this is still from the last time. We can check this out. My point is, if you have,
[01:21:02]  if you have your list, right? And we have a few items in our list. And essentially, if we now have, yeah, we'll make this one blue
[01:21:17]  and then I'll go back to black. The reason I'm making this one blue is because we're going to swap the blue and the red items. Okay. With
[01:21:36] , with, with recycling, what ends up happening is it gets, if you, if you just, if red was up here before, and then blue is there and like
[01:21:47]  they move position, when they get to the new item, they just don't care. They'll just be like, they'll get to the leaf, they'll get
[01:21:54]  to the user and be like, oh, before this was John's, the first name was John and the color, eye color was blue. And now it says that the
[01:22:05]  first name is Jacob and the eye color is green. It will just override that data, but you'll keep the same DOM nodes, keep the same references. Similarly, if
[01:22:16]  I remove this item from the list, it'll just essentially go, oh, you'll ship them all up. I, I showed this on a previous stream when I
[01:22:25]  was talking about, uh, about that, but it's basically key by index. Um, and some of the more aggressive versions of this will actually keep extra DOM nodes that
[01:22:38]  have been removed just in case you might need them later so that it can reuse them instead of creating them. It'll actually like make a pool of preused DOM nodes
[01:22:46] . Like if you shrunk the list, like originally had 50 items and then went down to 25, it'll hold on to the other 25 items in case you, so
[01:22:55]  it can use those and just update the data on those instead of, uh, recreating new DOM nodes, a couple of frameworks like famous, um, which kind of,
[01:23:04]  uh, did tricks like this to try and get like, you know, super performance. But as I said, the DOM is stateful inherently, so that it's not
[01:23:12]  always the best choice to go this way. Okay. So hopefully that makes sense. I don't, I don't know if it does completely, but, um,
[01:23:22]  the idea with DOM recycling is it, it always just keeps what it can keep. So anyway, let's, let's continue. So a little bit of a tangent
[01:23:38]  there. Um, I want to show what this test was is actually really quite simple. Um, uh, in that it just gets the data and I just call set stain
[01:23:51]  and reconcile it. Um, but essentially, um, it's just a bunch of different tests. Like here's a tree with tree nodes. You know, if no
[01:24:04]  container tree node, and then the animation one is a bunch of boxes and then tables for like, basically it's just a, this is what I love about this benchmark.
[01:24:14]  It's one of the easiest ones to put together. You just, it's basically three simple tests. Um, nothing really fancy here. And then at the top level,
[01:24:22]  uh, yeah, you can tell I haven't updated this in a while. Um, because it's using sample instead of on track, but essentially the core is all
[01:24:33] , it's very much the same as it's been. Um, so based on what location, essentially what test it's doing, it just renders the table and a
[01:24:42]  tree, not too much to this, but I want to move on. So the next framework or the next benchmark I want to talk about is, and the category benchmark is
[01:24:50]  one of my favorites, which is a JS framework benchmark, which I call the to do MVC style benchmarks. And the reason is, um, they basically just manage
[01:25:00]  lists, um, and do lists operations. Uh, again, this is a topic that I've, I've written quite a bit about. I have, uh, I
[01:25:08]  wrote an article in dev too, where it's like explaining how all the tests work in, in the JS framework benchmark, um, which kind of goes in more detail
[01:25:18]  here, but the reason the JS framework benchmark is also probably the most popular benchmark. Um, it's, it's the one that you always see, you know, people
[01:25:33] , you know, this, this, this table has been kind of, uh, uh, cemented in JavaScript framework tests. Uh, it it's, um,
[01:25:44]  the benchmark actually has three tables. Um, but what's beautiful is this, this benchmark actually tests a number of different things. It tests not only all the top typical row
[01:25:58]  operations, as you can say, you can tell the started from like a to do MVC cause it's create row, replace rows, partial update, um, which
[01:26:06]  updates every 10th row, select row, swap row, remove row, create many rows, append to a large row, clear rows. It also tests loading time. It
[01:26:18]  looks like weight. And it also looks at memory usage. Um, all which are really actually quite valuable to kind of figure out, um, performance characteristics of your, of
[01:26:30]  your, of your frameworks and this one takes a little bit more, uh, implementation to get into, but it it's definitely, uh, it's definitely not that
[01:26:41]  hard. I mean, we can look at one in a, in a few minutes, but essentially, um, it is just a big table. It is just a big
[01:26:50] , like almost like a to do MVC, um, kind of thing. And what makes this benchmark special is that every major framework has a version of in this benchmark,
[01:27:01]  pretty much, you will find pretty much everybody in this list. And most of the time, these are written by the maintainers or stuff. Like obviously React didn't come
[01:27:11]  in and make this benchmark. Um, but like when I, I, I made the React hook thing. And when I did that, you know, Dan Abramoff
[01:27:19]  was right there to be like, Hey, yeah, dude, this is the right way. You know, like he gave advice on the issue in terms of how to
[01:27:26]  do it properly. And like Rich Harris is involved in the Svelte implementation. I did do the label, the 3.0 upgrade, but other members of the community
[01:27:36]  have kind of taken that on further. Um, when Vue 3.2 just came out, Evan came in and did the PR himself. You might've seen that
[01:27:45] . Um, the only team that actually lit, uh, Justin was involved and with some of the community members, like, like literally every single, like all the authors
[01:27:58]  have been part of this kind of benchmark. Um, uh, what was I going to say? Um, there's a few that I, I had to add on my
[01:28:07]  own, like stencil. I added this one, uh, but you know, with the blessing of the, of the, of the creator stencil and then, um,
[01:28:18]  Alpine, where is it? Somewhere back here. Yeah. I, I did add this one. Um, I tried to get help from their community, uh, to
[01:28:27]  get some better performance. Uh, but, uh, essentially it's actually improved a lot over, uh, when I first had Alpine, it was the slowest,
[01:28:35]  but it was even slower than Blazer, which is definitely a challenging thing that you do um but uh yeah it's it's it's it's definitely moved up a
[01:28:45]  couple spots recently with the release of 3.0 they changed to using views reactivity which is a big boon um knockout my buddy dragging out the back here but essentially
[01:28:58]  the only community that has never really participated in this benchmark is angular um the original people who wrote it were familiar with angular and they've kept it rolling um recently after some
[01:29:09]  of my articles who got more attention some people came in and updated angular but honestly i'm only just a small player on this i make a lot of implementations because i love
[01:29:17]  benchmarking i love getting different libraries in here and kind of helping people make good implementations but uh stephen uh krauss the creator has been like working tirelessly on this
[01:29:27]  benchmark to make sure that it's like as accurate and fair as possible he's he's been trying to get puppeteer in because he's having some issues and like
[01:29:37]  if one framework degrades because of a change he makes he he will work tirelessly for weeks to figure out what's wrong like um he takes it really seriously and that could
[01:29:47]  commitment like this this was i remember the day that solid got more stars on github than uh this benchmark and i was almost kind of sad i'm like this this this
[01:29:56]  was the most important kind of piece for me as i said that solid started with that circles benchmark you know building the browser but this this is the benchmark of the reason that
[01:30:07]  i open source solid uh and it's so funny because let's go go look on some youtube comments on um on solid and you'll find uh you know some people going oh
[01:30:18]  someone else trying to grab some fame or something or you know tired of the board board at their work and they want to kind of prove out that they they can you know
[01:30:26]  build their own js framework benchmark i think it's like i really wasn't gonna i didn't think anyone was gonna like what i was doing i honestly thought like react one and
[01:30:37]  i just like it and you know and the only reason i open sourced uh solid was because uh i wanted to participate in this benchmark um and basically um kept on working
[01:30:51]  at it and proving the implementation and uh you know even that wasn't that big of a deal you know i got near the front i'm like okay whatever small fry it wasn
[01:31:02] 't until react hooks were released that i was like oh wow people might actually like this and i know i've said that multiple times but every time i see this benchmark i
[01:31:10]  actually kind of think of that um then yeah the truth of the matter is um this benchmark is probably getting towards the end of its use in this too it's not as bad
[01:31:25]  as the circles benchmark but it's done its job uh you know like it it's still the the gold standard right but like like computers getting faster different devices like we're
[01:31:42]  getting to a point now see views in here all the major frameworks except for react and angular have them and i think there's a new version of preact that's coming out
[01:31:50]  pretty soon that'll probably jump in about another few dots on here like everybody's all the new frameworks all the things are happening there they're they're all in the top
[01:31:57]  30 and once you get in that range like you're pretty you're pretty good like it's as i said the the benchmark's done its job um but you know for me
[01:32:08]  it was a tireless process to get up to the front you can see i'm not even it's all it's not even up up the front now like obviously there's
[01:32:19]  like i always love i mean the fastest possible web assembly uh version today now has snuck in front of solid but for the longest time and here's web components too they
[01:32:30]  kind of snuck into the side for the longest but be fair this is like like barely using web components um but like for the longest time solid was faster than both vanilla web
[01:32:41]  components and vanilla web assembly which was always kind of like good bragging rights um but over time you know these technologies will improve uh and you know we've been pretty fixed
[01:32:54]  at about seven percent slower than vanilla.js there's very little more that i can do to improve this and i realize these bench these frameworks are up here um in front but
[01:33:06]  the biggest bottleneck now for solid here is memory usage um and i don't think i can easily attack that uh truthfully um the the it's it's difficult with
[01:33:20]  this benchmark because the weighting like the difference between these geometric means come down a lot to the to the weighting of things so when select row is worth a lot or is
[01:33:32]  like like slower like and then like vdom libraries like block dom and like one more whatever push further up and when memory or so when clear rose is more emphasized that's
[01:33:53]  when we get hit and the the chrome 93 was in our favor chrome 94 is in their favorite like this kind of dances back and forth honestly that's why this whole range
[01:34:03]  is just all kind of the same and we see all the different technologies here as i said we see we see we see um dirty checking we see vdom we see reactive all
[01:34:16]  basically tied it here up front the only anonymous anomaly obviously is vanilla is the fastest at everything and mikado is the fastest at everything because it's basically vanilla um but essentially
[01:34:31]  um this is this this goes to show at the extreme like reactivity versus vdom versus whatever doesn't actually matter um i've been trying to say that forever i was waiting
[01:34:44]  for like a block dom to come around i kept on telling everyone i'm like vdom is not slow you know there are fast libraries and they're slow libraries so yeah
[01:34:53]  i'm i'm just being a little nostalgic here let's see if we can if we can we can look at stuff i i mean there was a time period sorry i'm
[01:35:00]  still going um where reactive libraries dominated the whole front of of this uh of this table here like um basically based on like even it's still a little bit here like solid compost
[01:35:14] ate um these ones are cheating a bit but cipher solid state which is the store implementation view rx jsx sinuous fn tags ko jsx these are all
[01:35:32]  basically based off the same dom expression code um there's also fidan surplus which have dropped off the benchmark because they haven't been maintained but they're all based off the same
[01:35:45]  kind of uh technique and many of them using actually ports of of my libraries so um definitely a repeatable approach to to getting performance here um but as i said this is
[01:35:58]  only one benchmark but tables are just always a good a good measure and the dedication that um that stefan puts in definitely makes this one of the you know uh more meaningful ones
[01:36:12]  even if as i said it's kind of outgrowing it's it's it's age of it so what does this benchmark look like well there's key to non
[01:36:20] -key i i forgot to mention there's a non-key table at the bottom it doesn't really matter no one looks at that anyway so that's got to do again
[01:36:25]  with like the recycling thing it's it's basically a waste of time so we don't need to look at that but um this benchmark is basically a giant list and let
[01:36:39] 's see i'm just going to scroll down to solid to show it show what a source looks like here main jsx essentially it takes a bunch of random strings see random says
[01:36:51]  random here and creates a data set and this is what i was talking about before about um nested reactivity in our case for the this is i'm actually creating a
[01:37:01]  signal per row to handle the label update um and then from there there's just a bunch of uh operations run which is you know credit 1000 add it's funny i do
[01:37:15]  stuff like spreads and stuff that you know might even not be considered the most performance but i this isn't where the bottleneck is the bottleneck is completing the dom operations in
[01:37:24]  this test and um essentially as long as you do smart stuff around the row creation you'll do pretty pretty fine and yeah that's it 80 80 lines of code here for
[01:37:37]  the solid implementation essentially that and then it's a bunch of buttons and a for loop and um the it has a class that gets toggled um and you know a few other
[01:37:49]  things but essentially that's it for this benchmark um i don't know if there's a ton to say about it i mean each test has its own little details and as
[01:38:05]  i mentioned before this article i cover it because i mentioned like um like partial updates are relatively fast in every framework these days so which is partly why that circles benchmark is no good
[01:38:19]  but um as you know select rows is probably yeah i'm going to talk about for a minute select rows is the critical um benchmark on this it it's it's it
[01:38:34] 's funny that out of the benchmarks only what's well it's not funny it's actually kind of clever each benchmark actually tests a very specific case or scenario if you think about
[01:38:45]  it they all put a different strain on the on the on the on the frameworks um involved and i'm gonna go back to to here to show what i'm talking about
[01:38:54]  um i could also probably just run this at some point locally just so you can see what the what the benchmark looks like but essentially each create the crate operations like create rows or
[01:39:09]  create many rows obviously test creation speeds so that's obvious but things like partial update test nested updates um and um things like select row test again you'd think test nest
[01:39:27]  updates but you gotta think about this with partial updates you have a fixed number row so you know that you go okay every 10th row updates so you can just traverse it select
[01:39:36]  row is interesting in that it needs to check every row because there's only one row that's selected so if you could select one row and then go to another row and select
[01:39:46]  another row you have to unselect one row and select the other row so while they they both check every row um you know could have to iterate over to check if
[01:39:58]  they've changed so select row has a very cheap dom operation it's just changing the class on one row versus partial update so basically the select row the worst case is partial update
[01:40:09]  right but the best case is much better and this is why there's such a discrepancy with fine grain like the more the the more we can shortcut that iteration the
[01:40:19]  cheaper that operation is um swap row is one of the only ones that actually tests like sorting so to speak like actually swapping the rows the actual reconciliation algorithm most of these
[01:40:29]  are doing nested updates or doing additions or removals technically additions and removals do test the reconciler but none of them actually test like moving rows around and making sure
[01:40:39]  like you know the the that you're not like necessarily recreating or whatnot so i mean these benchmarks aren't aren't perfect but they i essentially the each of them tests
[01:40:52]  a specific aspect and has a different way of kind of being attacked to be fair almost all the arguments and discussions though have been around select row most of these you don't really
[01:41:03]  cheat select row is interesting because it has so much room for optimization when i first entered solid in this benchmark um and i i basically just stashed the dom element so when
[01:41:17]  i selected row i could go like okay you know which row updated and then just remove the class on the old row that you'd stashed it turns out that's cheating we
[01:41:27] 've actually been pretty good on this benchmark to prevent any kind of cheating so i would say that if you're wondering about these numbers at the top they actually are categories of
[01:41:36]  how different approaches to how people approach this and we just start categorizing instead of worrying about calling people cheaters or not if people do manual dom manipulation like change the class on
[01:41:47]  a dom element directly we we we market for it if people put the view state on the model what i mean by that is instead of you're supposed to drive the the like
[01:41:52]  if you put is selected on each row that's considered view state on the model the idea here is this model is pure it's not aware of the selected state the the
[01:41:54]  selected state the selected state shouldn't exist in your app but obviously most libraries can be optimized if there's an it's selected on each row explicit request animation frame isn't very
[01:42:13]  common anymore but chrome has some weird things we found out what we're testing that that um if you call request animation frame before clearing rows it makes the clear row faster it
[01:42:26] 's it's now only about five milliseconds difference but i told you solid's worst benchmark is the clear rows if if if i could just do that suddenly we'll be we'd
[01:42:36]  be up there next to um next to micado so you know again and the manual event application this is using uh event delegation yourself uh essentially like putting the event handler on
[01:42:52]  the parent instead of on the per row um per row is expensive most vdom libraries do this anyways behind the scenes but it was seen as kind of a dirtiness to if
[01:43:04]  you if you had the implant yourself this one is the most contentious and honestly i don't really agree with it i think in some libraries event delegation is the way to
[01:43:13]  do it like you should be doing that so you know and it's kind of unfair to penalize libraries that force you to do it manually versus being built into library but everyone
[01:43:22]  has their own perspective on this um but you can see through this categorization um we know like the different types of approach and i i'm partially responsible for this i basically v
[01:43:33] etted every single library to see um manually to see if they which rules they did at some point i just went through them all and was like that so i have a pretty
[01:43:42]  good idea how all ad frameworks work um this is useful information for me anyways i basically dissected them to kind of understand uh pieces i've written a lot of these implementations
[01:43:54]  and stuff as i said i'm not the maintainer i don't i didn't do this i i honestly the even how some of the measurement works i'm not terribly
[01:44:02]  familiar with but i am very familiar with almost pretty much every framework that's submitted to this benchmark um but yeah for me most of the time i just click none here and that
[01:44:13] 's the real list as far as i'm concerned um honestly we can add this one back but there's almost almost no one here hyper html yeah andrea ge
[01:44:24] omarchie web reflection the original html basically um but yeah so yeah actually i got a few things to kind of show you all here because um before i move on
[01:44:41]  to the next thing the vanilla implementation which i'm responsible for one of them is is is kind of the perfect baseline over time we've been making the vanilla implementation better and
[01:44:52]  i think it's kind of interesting because if you want to understand the fastest way to operate on the dom this is it right and what i love about the vanilla implementation it should
[01:45:03]  still be here where is it oh did it get cleaned up yeah we used to he we used to measure different techniques and make comments about what's faster or what's slower
[01:45:18]  and i this reads almost like a like a textbook for someone wanting to understand how to do fast dom stuff because they're like okay remove all rows i mean i i kind of
[01:45:28]  i kind of i kind of maybe i revealed it there how do you think what do you all think the fastest way to to clear a table in javascript is i
[01:45:40]  know not everyone's with me on the stream anymore but anyone take want to take a guess what the fastest way to clear all the rows in a in a table is or in
[01:45:50]  any dom node really how to clear all the children out no takers okay fine um it's actually text content equals empty string why not sure sure but we we if you
[01:46:14]  read this there's six different approaches people took and measured to try and figure out what the best way was whether it was iterating over the rows and root child um what
[01:46:23] 's this one yeah people try to iterating backwards um cloning with no children and replacing that's actually pretty fast single node false um text content nothing uh what here making
[01:46:41]  a range object and then using a while loop finally the strange options like text content nothing we're cloning with no children or using the range are all faster than iterating over
[01:46:58]  the loop and removing the element so um you know that that just goes to show another another beautiful example of that and i don't know if they have the comments in here
[01:47:09]  yeah see this is the request animation hack um append rows using a document fragment is slower like over time through the vanilla implementation we've learned the fastest way to update the dom
[01:47:29]  so yeah it doesn't maybe not be interesting to everyone but this is kind of the the core piece of of you know how this how this works these days people don't care
[01:47:46]  as much about the performance of this benchmark you know and that's fine but the funny thing is benchmarks and demos are still happening we've had two in the last couple years
[01:47:58]  so i'm gonna and we've seen the return of animation benchmarks mostly because of react concurrent mode they've been trying to find a way of showing off non-blocking u
[01:48:07] i through using benchmarks and the most popular one for there and these are kind of demos too but serpinski's triangle so doing what i typically do i just gathered up
[01:48:20]  all the implementations that i could find um right so you know a lot of frameworks have done it the biggest thing is not all frameworks have actually understood this benchmark um essentially you
[01:48:40]  know i'll show it first just so people can see it if you've never seen this benchmark before it's a silly thing where the triangles expand out and expand in and
[01:48:51]  you can there's a hover state where it lights up and honestly this itself is not that hard to make performant you know you can render this easily on pretty much any device
[01:49:06]  but the whole trick to this this test the whole reason exists is that down you have a triangle of triangles it's kind of recursive so like if you see uh triangle
[01:49:17]  down so there's one triangle and then in this triangle we have multiple triangles so that have more triangles and eventually it just divides each time until it gets to a certain point where
[01:49:26]  it goes oh you're you've hit my target now i'm going to show the dots but the reason this benchmark exists is because we introduce at each level each triangle level
[01:49:38]  to its descendants a slowdown where we essentially wait for um 0.8 essentially we put this really long kind of performance cost on each circle and if you think about it
[01:49:55]  it's exponential because each circle feeds that slow down into its descendant which has its own slowdown and it just it just stacks up that's why they chose this triangle because
[01:50:07]  essentially by the time you get to the bottom level you have so many stacked ones and it doesn't matter if you're using fine green reactivity or if you're using
[01:50:16]  um our vdom in vdom there's no create memo here it's just a top level component that they're doing but i didn't using create memo because it's the
[01:50:24]  same idea even if we don't really resolve this until the end that takes the real hit like when we're doing the effect essentially we've just built up this mass of
[01:50:35]  debt and react on the show cases off obviously show off the new fiber renderer because in react 15 we have uh the step dance like it doesn't even highlight like i can
[01:50:49]  move my mouse you see like it like this this is this is pretty poor right this is this is what and then react went to fifth it's a fiber and this is
[01:51:03]  the first time that they actually showed um concurrent uh or sort of time slicing right solves the problem now the thing is every one of these frameworks does it but i i want to
[01:51:15]  call these out because these frameworks here don't actually implement the slowdown they're just let's look at a rally that's one of my favorite ones oh i don't
[01:51:27]  know what have fun is oh they're they're they're running through the numbers super fast and someone else did something too was a glimmer yeah increase the number of dots now
[01:51:40]  we got 8 000 dots look how much more we can do than react these demos completely missed the point because they're like they're they're basically showing how many more they
[01:51:56]  can do they can do than react ratty was another fine grain library yeah i mean you i'd have to open the profile to show you but they basically show that they they
[01:52:05]  could they could do better than react but they didn't put the slowdown and it basically completely missed the point um so yeah let's see stencil i i like the thing is
[01:52:19]  we're not really seeing too much of the pressure here so what i used to do was i used to come in here and i don't think it works on my on
[01:52:27]  my uh as well on my on my uh yeah six yeah this the slowdown doesn't really impact it here one of the the things is let's try fiber i don
[01:52:43] 't i don't think this the cpu slowdown really works yeah i can't show you all but essentially if you used to slow down your um device enough the numbers would
[01:52:56]  never update in the react fiber version in stencil it's still kind of got a little bit jittery um and like essentially you know the the there is a limit to
[01:53:10]  when you for the the tricky part here with time slicing is you're actually it's the computational cost that you're reducing you can't if something is expensive to render you still
[01:53:21]  can't make it any cheaper to render you can break it apart but then you can get glitches and that's kind of the the the problem here and i can't show
[01:53:28]  it because my m1 is just too fast um but essentially you could you could see tearing where part of the numbers are different than the other part of the numbers and that
[01:53:37] 's what react was solving with fiber they let the expensive computations kind of settle themselves off screen and then paint everything but if you use cpu throttling or you're
[01:53:47]  trying to draw something too advanced like even react time slicing isn't going to help you because you don't want to cause tearing essentially that's that's the goal here in
[01:53:58]  any case this is an animation demo right returning with animation demo um not too much here um but you know this this one even i didn't get at first um so this is
[01:54:14]  just kind of quick thing and the most recent animation demo i can think of was also concurrent mode um i don't know if any of you have ever seen uh this this
[01:54:24]  lovely beauty here the uh the 3d 3d boxes one right uh paul henschel created react 3 fiber created a demo that he's taking down since he very much
[01:54:35]  regrets this one we have discussions about how he regrets this one um but he was showing how you could use react concurrent rendering to kind of handle the creation of the new blocks
[01:54:48]  and i just didn't understand this demo because it was what i was saying before if you have too many blocks and it's too expensive then clearly you're gonna hit like a
[01:54:59]  bottleneck like you like you all you can do is only update some of the blocks or whatever like there's no way to get around that if you want it to be consistent
[01:55:09]  um but obviously if naively i i was just like so what let's just implement this and not worry about it right and in the end what it turned out was solid
[01:55:21] 's approach was much faster than the react concurrent one and this is partially why paul took that demo down i think was because he was like this doesn't show anything right he
[01:55:33] 's like if you just skip the framework all together 3d is faster anyways right so like what's the point of of even comparing these kind of things but i mean he
[01:55:45]  started it so as i said benchmarking for me i keep on saying come back to it being really kind of close to to to what i've done is i was chasing every
[01:55:57]  benchmark and that's how you know solid got to where it was but indirectly it encouraged me to kind of put myself out there and do stuff um i was not you know
[01:56:10]  back to that commenting about you know someone trying to reach for fame or trying to do stuff let's do stuff with the framework whatever i didn't join twitter until 2019 um or
[01:56:19]  getting a social um i was in a band back in the day and i was on myspace and stuff and when facebook came out i was like uh fine i'll sign
[01:56:25]  up for facebook but then i basically just didn't go on social media for about a decade when i was like working on this stuff i just didn't really care this wasn't
[01:56:33]  my thing and um the only reason in the same way the only reason i opened source solid was because the js framework benchmark the only reason i joined twitter was because of the stupid
[01:56:41]  cube i got pestered like over like a 24-hour period but like six people in the solid community like oh you have to go on twitter and show people how
[01:56:48]  solid could be the fastest and i'm like do i like no no it's a discussion all the authors are in there they're discussing in this and showing case you got to
[01:56:58]  go in there i'm like yeah but i don't know anything about 3d um luckily someone had already made a 3d demo in a insinuous like in a different
[01:57:05]  fine grain so i was able to just like port it lift it into solid do a few modifications and then got the fastest version of the demo but you know um yeah again bench
[01:57:16]  benchmarking let me join twitter which led me to getting my job at ebay which led to a lot of you people even um knowing about solid as well so yeah as
[01:57:27]  i owe a lot to benchmarking and and demos but so even if you can't find the original one you can find some of those spectrums that obviously i'm taking a
[01:57:37]  hit now because i'm streaming at the same time but to prove the point here yeah this is probably the fastest version you'll find this in the frameworks but then um buddy
[01:57:48]  uh joe pia he true skater um member of the solid community makes a loom element which does all the 3d stuff was like i think he was basically like
[01:57:57]  i could be wrong here but i just like decided to like just slightly refactor your example you know i hope it's okay maybe i'm not doing something off note from the
[01:58:04]  reactive side but you know um i decided to make it you know a hundred thousand blocks instead of ten thousand blocks and like it's actually yeah um or fifty thousand blocks
[01:58:25]  i mean this is still using solid but he basically just did it the way someone who knows 3d programming would actually do it basically he proved paul's point um a
[01:58:35]  3d render can do mil you know a hundred thousand or millions of blocks and the framework is just the slowdown um to be fair solid might be the fastest in that sense
[01:58:48]  but it's still you can't beat the going directly to the 3d render like he is but let's get be fair he is using create effects to synchronize and
[01:58:57]  this is solid driving this but for the most part he's letting 3gl do its do its thing and you know it's funny because the original demo that you know that everyone
[01:59:09] 's talking about only went up to 2000 and everyone's like oh you can get 60 frames at 2 000 squares you know that's amazing right like like like like yeah i
[01:59:21]  this this thing is kind of become sort of silly now by that perspective but what this demo did do that was really cool um was it was one of the first places where i
[01:59:38]  got to show off um using solid i mean i'm gonna go back here but using solid to render something that's something that's not the dom right and that ties into
[01:59:48]  um where i was gonna go here i know we are two hours into the stream and in my usual fashion but i want to talk about i want to talk about custom renderers
[01:59:58]  for a bit because that's let's talk some new stuff coming coming out in uh solid 1.2 and um i've been working on this a bit recently um and the
[02:00:09]  truth of matter is you can already do custom rendering stuff in solid there's a big discussion today um on twitter with paul again and some other people who are saying like
[02:00:23]  this is why solid's so cool because you don't like need a custom reconciler i built one anyways you know just in case you you're you're that's your
[02:00:31]  flavor but essentially let's let's take a look here at at um what what's going on in this example and i'm i i got rid of uh joe's
[02:00:43]  example i'm gonna just use use mine even though it's not as fast because it showcases more of what solid does um let's just zoom in a little bit and
[02:00:56]  hide this yeah okay so essentially the solid code in this in this example i made a solid three thing it's not really solid three but essentially it made a few components that represent
[02:01:12]  our scene and then the app is just some signals for the boxes and the count and then there's a method for creating boxes and a batch call around the updates for all
[02:01:26]  the dimensions and then essentially just you know some components a mesh component a directional light component perspective component basically what's cool about solids approach um to components is that they're just
[02:01:50]  functions right and there's no veto i'm here so we don't actually care what components return right if the parent gets them the parent can do whatever the hell it wants with
[02:02:00]  them there's no like reconciler needed so from that perspective you know let's look at our solid three thing here's a scene we get the props children and the
[02:02:11]  scene only needs to render once so like that's why it just gets that out but essentially we got some effects doing some stuff there's actually a nested effect here and you
[02:02:19]  know we create a 3d render and if you look at some of these other objects like the perspective camera it just creates the camera returns the camera this is a 3gl object
[02:02:27]  being returned the light is a 3d object return the materials is an array essentially as long as the parent knows how to handle what you're sending it and you have no
[02:02:41]  problem kind of wrapping your own reactivity you know write some effects you know to do stuff you you can have solid do whatever the hell you want like it it doesn't really
[02:02:52]  matter and uh this conversation on twitter was trying to explain that they're like like there's no need to diff or reconcile you just you just update what needs to be updated
[02:03:00]  right granularly obviously this isn't as convenient as jsx but for the consumer it is they can just build their stuff up this way and i actually uh i'm i i
[02:03:14]  kind of did this a while ago on the playground um i kind of illustrate what i want to one of the kind of show here is that you everyone's familiar with this way
[02:03:24]  of starting a solid app right you go render blah blah blah you know when you button this but if if if you just go create root and let's forget about this like
[02:03:33]  we're not gonna we're not gonna render anything here so let's just let's just import create create root solid right and let's get rid of web and instead of drawing
[02:03:48]  a button let let's let's make another button let's make a function button hopefully this is all big enough for everyone to see but let's just make a function button
[02:03:59]  all right and so this is going to be oh i forget who cares what the problems are okay whatever and let's make this button button and yeah i mean let's have
[02:04:18]  our button do something silly like let's just go create fact so it had the click handler okay let's not worry about the click handler i'm just just trying to think of
[02:04:33]  a good example like console dot log props dot count and let's what else we want to do let's uh let's have a click handler let's use my my always
[02:04:54]  favorite um set interval right um and have it count up right set count c c plus one on a one second interval so we should be hopefully whatever whatever return hopefully if
[02:05:25]  i did this all right undefined oh it's because it's not it's children all right yeah okay here we go so i mean no one's surprised that i made
[02:05:39]  a counter work yet again but the the the the point here and i think this is the thing to understand is we have some components and we're rendering them and we're
[02:05:52]  doing some stuff and we have an effect and we do all this stuff look at the output oh okay this is a big deal the real awe moment was when you realized that we
[02:06:02]  never imported from solid js web is it turns out create component in solid js web is being generated from the xml but it's just an alias for solid js's
[02:06:10]  create component my point i wanted to make here is we have not there's no template there's nothing we have not actually used a single dom api to do this so we
[02:06:24]  made our silly counter and you can picture this effect doing something like on the native console or and you can picture this being like an in an input from the native console so let
[02:06:34] 's say it was mobile you know someone clicks something and then someone sends that back over the bridge my point is there's no dom apis involved at all just using components
[02:06:47]  um and we react to them we can actually use the jsx and everything and this is completely independent of of being run in a browser now obviously if i put a lowercase
[02:07:04]  div in here somewhere it would try and pull in dom apis but my point is that the the core of of solid here like the the the component the this stuff is
[02:07:15]  all kind of platform agnostic um the control flows like other than like portal and dynamic um which are specific but like the for loops the shows all all everything here we
[02:07:27] 'll just we'll just work on whatever platform you you want and i don't have to do anything special however i did decide to do something special um react and uh and view
[02:07:47]  and a bunch of them had this idea of a custom renderer so i i i i i was like okay let's let's let's do it right um and the
[02:07:57]  way we can do that uh is okay and let's refresh and make this come back look it's a counter again no big deal so you're you're probably going okay so
[02:08:10]  this is just rendering the dom you've seen this you've seen these counters examples ad nauseum but this this counter is actually a little bit special because it's not importing
[02:08:20]  solid js web it's actually importing from dot renderer um and in fact babel rc here is actually set up to point the babel preset not to solid but to
[02:08:32]  dot renderer and it generates universal this is something new we have generated ssr we have generated dom we now have generate universal coming out in solid and what this does
[02:08:42]  is it allows us to define our own renderer that can be whatever you want so as a test i was like okay well what does it like what can i do basically you
[02:08:53]  have to define a create element create text node a replace text node set property insert node is text node remove node parent node first child next you basically implement enough stuff to to
[02:09:06]  do basic rendering diffing on the platform and as i mentioned honestly the components are enough i'm not even sure if you need to do diffing like if you're rendering to
[02:09:17]  a canvas do you care the order the children are in like do you need to like diff their position in in the dom i'm not sure um obviously you can just do what
[02:09:26]  i showed a minute ago with the components or with the 3d example you can just write all this stuff yourself but what's cool about this approach is by defining this and
[02:09:34]  i just took some simple stuff so i'm saying okay my create element is create a document create element so this is actually a dom renderer more more or less i created a
[02:09:43]  custom dom renderer and then my text node is create text node replace text is text node.data equals this and then i have a few properties i can make it style
[02:09:52]  it's obvious sign if it starts with on then i'm just gonna add it on using like the level one style event handlers if it's one of my defined properties
[02:10:02]  which i have class name and text content it'll set it on the node or otherwise i'll just call them no doubt set attribute i'm using insert node like the rest of
[02:10:12]  these are just like remove node remove node they're almost exactly parallel to um to the these are just the dom apis but this simple implementation no consideration of reactivity at
[02:10:23]  all um ta-da dom renderer right um and this dom renderer basically you know works the way you want and you're like okay well i'll prove that this is
[02:10:40]  actually mine what you know what can we do to prove that this is actually it so one thing we can do i mean besides causing an error is let's make it
[02:10:54]  that every element that every element that we draw is red that work sweet i guess the button can't be red but um essentially i would love to see some cool uses of
[02:11:22]  this as i said most of the stuff that i've looked at has been based around just using components but what's cool about this is you can basically define whatever you want here
[02:11:32]  like you could and you get full uses of solid because i mentioned stuff like suspense that's not connected to the dom you know stuff all the control flows all those pieces are
[02:11:45]  all universal anyways so you now have the ability to define you know what your elements are what your platform are and be able to leverage stuff this actually compiles very similar to the
[02:11:57]  way solid compiles right one thing that i was thinking that might be really cool and kind of in line and again obviously lost a few people on the stream i know this
[02:12:08]  is very technical kind of low level stuff but what and i honestly i don't think i could probably test this on stream and take too much setup but i i i'm i
[02:12:18] 'm kind of curious i don't know if anyone else is curious what if we just took this custom hacked together dom renderer and ran it through the js framework benchmark right
[02:12:34]  how much do we lose by opting out of solids like all its optimal dom operations because this is obviously clearly not cloning nodes it's creating them one at a time and
[02:12:44]  doing this how much we actually lose that way um comp you know for the universal renderer right i'm i'm i'm not actually sure but we could find out um
[02:12:57]  right like i i this this like for people not quite pulling all the piece together this is how solid native happens right like this this is this is this is how we get you
[02:13:11]  know the other stuff but honestly i don't know about native i don't know about 3d i'm a i'm a web developer i just first it's confusing to
[02:13:19]  me why wouldn't anyone we want to reconcile her here but we've got solids reconciler available now so you know what can we do with it right and do to do
[02:13:31]  to do file new window you know let's just do something here uh what am i looking for yes funny thing is in the js framework benchmark i am never equal i'm
[02:14:04]  always like testing stuff i was probably testing some version of solid here what is that solid js package json what version was i testing 1.12 last okay so what does
[02:14:20]  this take to do this not very much much actually all right yeah actually my version was at 1.12 yeah i don't really care about 1.12 okay let's
[02:14:42]  just yeah let's just clear out the node modules because they're this heavy and let's copy and then let's paste in here you've seen i've done this kind
[02:15:01]  of stuff before called it solid universal all right all right so first thing we need is let me get this a little bigger now so people can actually see what i'm doing
[02:15:24]  i hate developing like this i'm not gonna lie but hopefully it makes the code more readable it's cringing um let's go solid 2.0 dash beta beta beta
[02:15:42]  0 i think and same here what i'm doing is going while i do this couple things i know that aren't going to work right off the bat one thing is because
[02:16:06]  we're handling the stuff we're not going to have the benefit of well unless i implemented of uh event delegation like this we'll have to do this the old-fashioned way
[02:16:24]  which is row or like this right six selected row id you have to close over this this does actually have a performance hit but other than this i think this should work none
[02:16:49]  of the other ones use the binding syntax no yeah okay cool and what else can we do here um when you file we need a um make our render and then hopefully i
[02:17:17]  mean i i honestly don't know if this is just going to work at all but hopefully the render that i was making here is you know for the simple example has most
[02:17:29]  things we need so right um i think so right the way you do it is you import solid is now going to export us a slash universal and it really only has one method
[02:17:42]  right now making it off an object i'm not sure if i this is for future i guess extensibility but then you call create render with these options and it's important
[02:17:52]  that you export these separately um just because that's how uh dom expressions knows how to pull it in but okay let's do that and then let's okay so biggest difference
[02:18:08]  is this render is now going to be from our renderer and we have to tell roll up to use some different options on our babble plugin why am i not seeing
[02:18:29]  it oh it's because it's is it in a babble rc why am i it's been so long um oh pset solid it's like so compact you
[02:18:40]  don't even see it here right you want module name i think it's we can use like you would export your own module and actually have a node module name here but i
[02:18:55]  think relative path will work and then we want um generate universal okay okay that's good and okay mpm is installed again in our solid universal let's see if we can
[02:19:12]  run run build prod you have a bug ah yes control flow this is a good point i need i should change this is one of the awkward things and i'm glad i
[02:19:33] 'm doing this now because as i said i have not i haven't tried this yet what it is it's expecting us to export a few things from from solid js because
[02:19:45]  it automatically knows to import now to be fair if you i imported you know actually don't i don't need to do this solid has this ability to auto import certain uh control
[02:19:57]  flows typescript obviously hates us for this but i initially thought that you know you just have it automatically work um so you know i i didn't want i didn't i
[02:20:12]  didn't want to like obviously i can just do this and this works i can also import it in the file and that works um but let's just do this but uh okay
[02:20:24]  um yeah so this is something that's something i'm gonna have to consider i'm glad i'm glad we're trying this and learning stuff while we're going okay okay
[02:20:32]  so it built prod okay that's great so i'm gonna open a new window and i'm going to um i'm going to just start the server i can start okay and
[02:20:45]  if all is well okay we should have a localhost 8080 right and we should we should have a frameworks keyed solid universal how does it work uh solid universal let
[02:21:16] 's try this index dot html yeah that's the thing all of solid is available like i wrote solid to be platform agnostic right from the beginning i knew
[02:21:36]  we'd get here it just you know like it's a matter of you know time right so yeah for all the controls even suspense and error boundaries all the stuff just works you
[02:21:46]  just have to provide that like little bit so let's see if this works is is this going to work for us are we going to be able to do stuff like select row
[02:21:55]  and update every 10th row and swap rows and clear rows it looks like it okay there you go so it's a good test it looks like this actually works um
[02:22:15]  just with that simple um like how like obviously most of this is just prettier being our best friend but implement like 52 like 30 lines of code custom dom render right so you know
[02:22:32]  that's not enough for us for us though is it because i mean why are we here we're here because even though i know that we're gonna take a hit you
[02:22:42]  know let's let's let's let's let's even out the playing ground a little bit too um let's go cd dot dot solid proper and let's update
[02:22:54]  solid also to our 1.20 beta and obviously we could we could add event delegation if we really wanted to to our custom renderer it wouldn't be that hard um but
[02:23:09]  let's just npm install this one get it up to speed as well and then okay just a second i i keep yeah we're we're in the clear okay good
[02:23:24]  yeah whatever mpm run build god one thing i do okay it's like am i in the wrong folder did the node modules not install where am i solid universal obviously is
[02:24:07]  fine and i can clear out some of this stuff because it's just copies um see i keep multiple versions of of of runs for historical reasons um and i compare when i
[02:24:24]  when i benchmark solid i literally compare it against like every version i've done in the last like six months um but what's weird here is yeah it's like i mean
[02:24:50]  it's like i'm in a ghost folder or something let's let's see what's going on here yeah i i am i'm i am somewhere else yeah that that
[02:25:04]  that that that that was that was really weird um i was in like the solids project somehow okay let's let's just uh c dot dot um where was i oh yeah i
[02:25:20]  was like in solid actual project rather than in the js framework benchmark benchmark um okay so mpm install npm run prod all right and then what i'm going to do
[02:25:36]  here is i'm going to clear out the results from from previous runs i don't really care about those let's just delete them and then okay cd okay this one
[02:25:55]  should be just mpm start oh that's what i probably did i canceled the server and then this one is going to be a web driver ts and hopefully it's up to
[02:26:06]  date i think we're on chrome 94 last time i checked okay all right and then i'm going to close a bunch of other stuff down obviously i'm running a live
[02:26:19]  stream so i mean this is not going to be science here but if anyone's seen this before um mpm run bench now this isn't necessarily the most interesting thing ever but
[02:26:40]  usually i just run the solid v solid u vanilla js one and um we need an upper end and a lower end svelte that should be our i think this
[02:27:08]  fault is probably good choice let's see if i wonder if this is actually going to do what i want it to do i guess we'll find out soon yeah so i
[02:27:39]  have no guarantee so this is this is this is what happens when you run benchmarks um obviously this this will probably take us like five minutes so we can chat about some other stuff
[02:27:51]  here for a moment but i'm not really i'm sorry i should answer the question here properly not really um i still disable throttling um so yeah and you know
[02:28:12]  me probably doing these interactions are probably going to screw screw through results anyways a little bit i probably should be moving the mouse around the screen but you know whatever but it's
[02:28:21]  a good time for anyone to ask any questions um a couple cool things i was going to mention stream yard added this new layout i don't remember seeing before where it's full
[02:28:33]  screen with me in the corner i don't remember seeing that before it's much nicer we lose a lot less space um i'm pretty stoked about that just some small small additions
[02:28:45]  obviously um but yeah you can see all the tests happening in action right create 10 000 rows um then this one creates a thousand and it depends a thousand on the end and
[02:29:06]  then the last one here is just creating clear clear clear clear clear i'm not doing memory benchmarks let's take too much uh we should do memory benchmarks eventually but i'm
[02:29:16]  actually just i'm just kind of curious like where we end up here like it's quite possible that the universal renderer without event delegation ends up being a lot slower than um
[02:29:31]  than you know some other stuff and you we're we're we're obviously doing create element at a time like i haven't optimized this at all i'm probably gonna come
[02:29:40]  after the stream and go oh okay i got some work to do maybe but it it's definitely you know what what ballpark are we in um so yeah obviously this is
[02:30:00]  a bit of a time kill i knew this is the risk but this isn't as i said it will take about five minutes how does the bundle size compare with the dom render
[02:30:10]  created dom based universe yeah and that's a good question because generally speaking it should be larger however um you know because like we don't get the leverage code splitting in the
[02:30:26]  same way like if you don't add a certain type of event or don't use classless we don't bring it in right but for this that dom render is i i
[02:30:34]  compile it all out it's it's much smaller than solids right like because there's nothing to it and i basically only added the features we needed to do this benchmark or to
[02:30:45]  do basic stuff so we can find out um again i haven't we could we can run test 30 um on on on this to see too as i said i wasn't
[02:30:55]  my first move wasn't to just run all the tests because i figured you know that would take more time and i didn't want to uh do that but uh yeah bundle size
[02:31:07]  is is is great sorry and i i'm not putting the question up on the screen because i don't really want to mess with the mouse but um yeah damn it i
[02:31:17]  didn't build svelte okay it's fine we we have solid and we have the other one um who do it i haven't built salt in a while i mean we
[02:31:27]  can build salt right now let's just let's just build spelled um latest um run build broad let's let's continue we did the first two solid ones so let's
[02:31:49]  just do vanilla and svelte now it's possible that i've messed with things a bit but in the it's still around the same time so let's just do
[02:31:57]  let's just do bill and l and stuff okay yeah yeah only the real hardcores are are left here now but you know biggest things benchmarks have variations and stuff on runs
[02:32:15]  so i guess we're not gonna have anything conclusive here but i still think it's kind of cool to do the live reveal if if if we can do that yeah
[02:32:28]  for me i find this like super interesting because you get to basically see the difference between the reactive system optimizations and the dom based optimizations right because essentially um all the reactive
[02:32:42]  optimizations are still here we still are doing group effects right like one thing solid does is if you're updating a bunch of stuff on the same kind of like a template
[02:32:51]  area we don't individually wrap them all for creation costs purposes we separate inserts and things that require reconciliation like lists and stuff like for children but if you're just setting like 10
[02:33:04]  attributes all over the dom we we just group those together and let's do a simple diff check we're like okay did this one changes it doesn't change it's just not
[02:33:14]  worth making 10 effects for it like the sure update would be faster if there was only one and you didn't even have to check because you knew because the like the signal
[02:33:22]  already does the check for you but the cost i benchmarked this back in the day with jsperf the cost of like doing a simple diff of like the five properties every
[02:33:31]  time or 10 properties time yeah it's slower but it's not going to you know it's not going to sink the ship so to speak like it you're going to
[02:33:42]  do perfectly fine on on on most things but the creation speed makes a big difference which is classically the problem with these kind of libraries that's what i was fighting right we
[02:33:53]  we knew the animation demos are good um right what we didn't know and we knew the snapshots are bad although i wrote reconcile to deal with that but what we didn't
[02:34:04]  know was if the creation was going to be good and that was always a problem with this stuff um but it only matters in these kind of benchmarks i've been talking about
[02:34:14]  runtime benchmarks the whole time there are different ways people measure things a lot of people measure stuff based on size right like um or like initial load speed there's a like there's
[02:34:27]  the real world demo which is a perfect example and i haven't actually showcased that one off but that one's all about size and the same page load speed which is
[02:34:38]  useful but it's also sometimes not very informative because like uh an example of like solids example in the real world demo is completely client rendered where results use a sapper and that
[02:34:52] 's kind of maybe unfair because it made solids example smaller because i didn't need the hydration code um significantly smaller like isn't like 25 smaller and it's it renders
[02:35:05]  faster um just because the way that sapper doesn't use streaming or whatever you know svelte doesn't have the streaming ssr so they have to wait to do
[02:35:13]  the data load before sending the page and the client page getting in there and rendering like you you like i think in their example they still fetch on the client or something like
[02:35:23]  basically just it was easy for me to edge in advantages compared to the other implementations because the other implementations were so kind of like weren't doing optimal things that the client
[02:35:35]  side render was both smaller and faster than any other framework implementation for the real world demo but i don't i don't think that is really representative you know and i think i
[02:35:45]  think um it's sort of unfair because a lot of times those demos aren't made by the implementers of the frameworks and they're just people trying to support the community
[02:35:55]  right um so you know take that with the kind of grain of salt so to speak um yeah that's my rant about that the problem is like loading demos are becoming more and
[02:36:10]  more important again these days because you know people are worried about page scores okay we got there okay okay okay so mpm run results sweet what are we dealing with oh no
[02:36:34]  i closed the browser yeah i did close the browser completely this is funny sometimes there's artifacts from previous runs like it like it doesn't like it like it doesn't come
[02:36:46]  in the dock let's just let's just see how uh new window and this is going to open over here perfect okay let's uh let's look localhost 80 80
[02:37:01]  yeah okay not bad i'm sorry you guys probably you probably can't see the results because it's uh that's where i'm sitting but let's move them a little bit
[02:37:16]  over here obviously this is not a scientific run vanilla has is slower than some stuff um but if you if you look here um roughly speaking i guess svelte was too
[02:37:30]  big i should have put inferno in but roughly speaking solid universal here is about as fast as inferno it's faster than svelte might be even slightly faster than infer
[02:37:40] no um but this is without event delegation or anything just the core mechanisms of of the renderer um just doing something naive like i just did there um it's still really
[02:37:53]  really fast um that it shouldn't come as a surprise obviously it's slower than solid proper um right and like some of these don't have slowdown so there's a bit
[02:38:05]  more variety variability here like select row is slightly faster and universal than solid and um swap row was for some reason but you know cloning is faster than creating and appending
[02:38:19]  is faster create and yeah it makes sense to me right this is this is completely you know rough but you you can kind of get the the idea here so yeah i mean i
[02:38:33]  think this will do it right um honestly i'm pretty happy about this i hadn't i didn't checked it i'm sure if we did like a better more refined test
[02:38:42]  we can more narrow pinpoint it down i put svelte as the upper end because i was i i honestly thought that it might be that slow but um yeah i guess i
[02:38:52]  should have picked like inferno or something cool um i mean what's so fun about this kind of thing is you can already picture how you can make things faster right like
[02:39:08]  like that's just me like we could add event delegation knock off a few more points and you know you know what i mean like see if we could get our renderer almost
[02:39:17]  up to where solid is um proper we might be able to right like we might be able to get it pretty pretty darn close um but i'm not going to do that
[02:39:27]  on stream that would take too much time but yeah i think for for the universal renderer this is a good um first test run um i yeah i think i think this
[02:39:42]  is actually uh i think it's actually pretty good much better than what i was expecting well that's a relief i haven't been wasting my time which you might think is kind
[02:39:58]  of a funny comment but uh i spent most of september working on a different model for um transitions like in concurrent rendering and a different i was testing different reactive models i
[02:40:12]  spent almost four weeks if anyone's checked my github green thing it looks like i wasn't working on anything for weeks at a time you know maybe small things where i
[02:40:21]  was doing like merges or you know bug fix commits for people but like it looked like i was pretty much not doing anything i basically spent i basically created four different versions
[02:40:32]  of reactive systems and and a couple different transition models and i was trying to figure out the if i could like improve on things and it was a good learning experience but ultimately i
[02:40:42]  realized what we already had was actually probably the most suitable i think i think for transitions we can do better but um our i learned some stuff about reactivity that i hadn't
[02:40:52]  learned before through these different implementations and uh turned out what we're doing actually um while technically a little bit slower um is actually what we need to do stuff solid um
[02:41:06]  cues um it's it's stuff everything gets cute whenever this changes or updates or effects we just cue everything and then we run off this cue and with a depth first algorithm that
[02:41:17]  cue because we need to run it in order that cue is really big because you do a change and then we basically walk down the whole tree and just cue everything um essentially
[02:41:26]  underneath that point and uh i was thinking okay let's do something more optimal where we don't the cue thing we can actually walk through the reactor graphs linked list directly to do
[02:41:37]  updates and use some kind of like a notification system um where we like kept count of stale states and stuff and actually implemented and it was faster but the problem with that is
[02:41:48]  how do you interrupt a depth first algorithm i know this is kind of kind of out there and if you if you're into algorithmic stuff maybe you can kind of think
[02:41:55]  about that but it's actually really hard to interrupt it and i wanted to keep the interruptable transitions and stuff uh very similar to reacts time slicing which i added in solid 1
[02:42:05] .1 so ultimately even after doing all that stuff i realized that the key part of my optimization was not related to that queuing mechanism so i kept the queuing in
[02:42:18]  we still have a choice to make though we can add 200 bytes to solids uh runtime and make it like twice as fast in any reactive benchmark no you you will not see a
[02:42:30]  difference in the js framework benchmark i didn't actually show everyone some there are some reactive benchmarks and this is kind of still on the topic of benchmarking a bit but there there
[02:42:41]  are benchmarks like uh so i'll go to code sandbox i i realized i didn't i didn't show the last couple benchmarks that i actually hold really dear um one of
[02:42:51]  them is is i'm not dear i mean i showed all the benchmarks i actually care about but now i'm just talking about the ones that that are um i just do to
[02:43:03]  make sure that i haven't like destroyed anything uh where is it cell x maybe i can just sell x yeah here we go this is a this is the stupidest test
[02:43:24]  i've ever seen it literally just nests as many like layers of reactive things in each other like selects claim to be the fastest reactive library and um it kind of
[02:43:37]  cheats the fastest reactive library that i've seen is probably still sjs which was solid's original inspiration um kairos is also very fast um it is probably faster all
[02:43:53]  around if you consider all the different categories of different types of tests and stuff and they have a great benchmark um in the repo for you know for it but sjs is
[02:44:02]  fastest where it matters for dom rendering and it still is to this day um but essentially let me let me let me pull up the source code so you can see this for a
[02:44:14]  second this test is just dumb like it's let me see if i can pull up knockout um mob x solid okay so we create four signals and then for each layer
[02:44:32]  we create a memo that reads between certain signals and then create a computed which i don't see the point of these computers but whatever and then it just it just has memos
[02:44:43]  read from memos read from memos and like this crazy um tree you you you get like you you hit stack overflows in most reactive libraries after a certain point here
[02:44:55]  but the point is like at about 50 levels you're already at a point where okay so we have the cell x which um you know it's pretty fast about 20 solid isn
[02:45:08] 't quite as fast it's about you know it depends on the oh okay so it's doing fine but let's see but like mob backs you you'll notice the difference
[02:45:24]  you're like oh right or sinuous you're like seriously in the middle but uh i'm at 50 so let's go to 100. let's try knockout at
[02:45:36]  100 layers actually i'm not sure i probably went too far this probably will never come back my bad knockout yeah i i was 50 was probably where i should have stopped maybe
[02:45:52]  i can i probably killed i probably killed code sandbox code sandbox does this we just dies that's why this benchmark is dangerous i should know not to click on okay let's
[02:46:06]  try this again let's try something easier 50 knockout can you do 50. nope let's let's forget about knockout knockout can't do that many layers let's
[02:46:22]  uh let's try maybe mob x can do 50. oh yeah we already saw mob x can do 50. um my point is this test is really dumb no i don
[02:46:33] 't know any real world scenario where you're gonna have like like 10 000 nested computations all running into each other but essentially mob x can do 100 i think but okay
[02:46:49]  229 can it do a thousand okay good mob x is still good so at 15 basically knock on a vanilla get killed out there so mob x is about it's about
[02:47:00]  what eight solid is about two once it warms up there's this warm-up thing you'll see s is about yes a little bit faster selects a little bit faster
[02:47:15]  anyways silly test just wanted to show this i i was able to improve solid score on this test like these kind of benchmarks like 5000 we're at 10 okay actually this
[02:47:32]  is using the improved version of solid i think s maybe not 10 yeah yeah this is already okay it doesn't matter my i this baseline implementation i called it is actually like a
[02:47:45]  different reactive system version that i was playing with solid but my my point is like this is just this kind of test is really silly the one that i actually hold the most
[02:47:57]  they hold the most value with is the creator of sgs actually created a benchmark and i don't know if anyone's ever noticed this the solid repo has a bench in it
[02:48:07]  see this bench folder where i've kairos and lval and stuff and essentially um this it just tests mostly creation even though these are all created updates this test mostly
[02:48:23]  based around creation and it just runs in here anyone can download the repo run bench and there we go something new in v8 has actually improved the performance on this benchmark for everyone
[02:48:38]  see it's 388 now but my point is i look at this mostly for regressions and also in my new reactive system i was actually able to get the the
[02:48:47]  best score that i've ever seen in this benchmark but um i was able to actually duplicate it with the current re reactive system too with a with but i in order to do
[02:48:57]  that i have to add 200 bytes to solid's runtime and i wasn't sure if it was worth it that's that's what it came down to i i can make solid
[02:49:07]  really fast in the reactive benchmarks that i that i care about in terms of creation stuff but you won't see it pushing push even a millisecond on the js framework benchmark
[02:49:18]  which as i said you can't base everything off the js framework benchmark but at a certain quest point you have to ask yourself what level of optimization okay actually you know what we
[02:49:29] 're not actually done yet um i was just there's a couple more things that we should run those other tests on the js framework benchmark just to kind of wrap this this
[02:49:41]  thing up right we we ran um sorry let's uh we ran the uh how should i call it we we ran the performance test which i was happy with but we should look
[02:49:56]  at size and and we should look at memory right uh so let's let's just let's just do size and memory these are a lot faster um so 21 22 23
[02:50:08]  24 25 and 30. okay let's only take a moment again good time to ask any questions i'm pretty sure after this we'll be pretty close to wrapping up the
[02:50:31]  stream here i don't unless i don't know where other direction to it i can't think of what else to do with the custom renderer um at this point but uh
[02:50:39]  and i think i might have covered all the benchmarks um if that's possible what's going on oh it's running 30. these these use lighthouse you don't see them
[02:50:54]  they happen in the background anyway let's give it a moment i've done my drink it was a margarita tonight a little different yeah the the memory benchmarks are
[02:51:22]  actually mostly very similar to the normal benchmarks um they do like a create row um update row replace row clear row and append row i think um but it's good because you can
[02:51:38]  see memory leaks some some you can always tell like based on the memory profile like where the like if the libraries have memory leaks and where they are if the last two like clear
[02:51:49]  row has has memory issues like they definitely have a memory leak it's a very telltale sign um and i didn't really get into how i attacked getting to number
[02:52:01]  one or getting to the front of the ds framework benchmark um because a lot of people when they benchmark and that they use a lot of tools and i do use tools i
[02:52:09]  use chrome profiler a lot especially the memory profiler and that was actually how i got solid to where it was it's hard to know always what causes slowdowns
[02:52:20]  you can do things like uh like if you run the profiler enough it'll actually show you in milliseconds and with the circles benchmark i used to always do that it was really
[02:52:30]  obvious where they where the pinch points were because chrome's debugger would actually say you know you spend a lot of time in this area and then i'd adjust it but for
[02:52:40]  for the js framework benchmark i actually would just run different frameworks side by side and you can always tell the which nodes are related to the dom and i would just like basically
[02:52:51]  the most optimal frameworks the more often you got you start seeing that the memory profiles are similar no matter what the technology was there's always like this object and these objects and um
[02:53:01]  i just kept on working to reduce the you know the the objects you know in each category you know like whether they're objects or arrays or whatnot oh non-key we
[02:53:15] 're done see that was so fast did that actually yeah okay yeah that was it let's go mtm run results um to kind of do that okay let's check
[02:53:33]  where we ended up okay so okay yeah so there there's the answer um universal renderer is pretty big in this crowd it is a whole it ended up being about 800
[02:53:52]  bytes larger um compared to the solids normal renderer um which is interesting i didn't expect it to be that much larger but it is using the same version of rollup and
[02:54:06]  stuff i copied the package json exactly so yeah it's it is a little bit larger script loading times identical in all these yeah okay and memory and the memory profile here
[02:54:20]  is a little bit higher i'm gathering this is because uh no event delegation we are creating functions per row um and that's that's caused a slight increase in memory it
[02:54:35] 's actually funny it's the universal renderer almost has i guess a little bit lower here so it almost looks like svelte from a memory profile which makes sense because s
[02:54:45] velte for anyone who's not aware svelte uses the same they don't clone nodes they use a single per element create method okay yeah so that's where we say
[02:54:55]  it's a little bit larger um memory profile is you know a lot of this comes to my implementation that i did there not using event delegation but memory profile is pretty pretty
[02:55:08]  good and uh performance is i guess solid is also i don't know how many how many categories we are at this point but solid also i guess has the most performing custom
[02:55:22]  renderer you know what do you like obviously it depends on how you implement your custom renderer but like the core reconciler and stuff is clearly pretty fast here so i
[02:55:33]  guess it's another it's another i can i'll chalk this up as another win cool um i don't know if anyone else has any more questions otherwise you know as usual
[02:55:47]  we're hitting around the three hour mark and i think we should call it a night um thank you to all of you who stayed around through this stream um and uh i
[02:56:00]  hope to do some continue doing streams on these fridays to be fair i might have to skip one of the ones coming up uh just i have to find time to do prep
[02:56:10]  work for i've got two conference uh calls come our conference talks coming up i'm doing uh i'm doing holy js um in uh which russia russia conference i
[02:56:23] 'm it's remote but i'm doing that november 3rd and i'm also doing js comp india um november 15th and i need to pre record the video
[02:56:32]  so um we'll see as always if people have ideas for new topics or maybe even a guest that make sense from the results uh you know anyone from solid ecosystem maybe even
[02:56:42]  come in and kind of show off their library that's something we can consider doing in a stream coming up kind of change it up um i seem to keep on coming up with
[02:56:51]  topics every week miraculously so i guess this is a pretty deep space but um i imagine one day i won't so um you know come to the discord write something like
[02:57:02]  uh comments you know comment like subscribe uh see on youtube and uh yeah i'm gonna call it tonight thank you all till next time see you