---
showLink: "https://www.youtube.com/watch?v=S0a-1lriNl4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "First Look at LiveViewJS w/ Donnie Flood"
description: ""
publishDate: "2023-01-14"
coverImage: "https://i.ytimg.com/vi/S0a-1lriNl4/maxresdefault.jpg"
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

[00:00:00]  Hello, welcome everyone to my stream today. How's everyone doing? Today is going to be a little bit different. We're going to be looking at a different type
[00:00:16]  of JavaScript framework, which I'm pretty excited about because as you know, I've been looking at a lot of JavaScript frameworks over the last year as part of my exploration to
[00:00:26]  kind of understand where things should be. I'm going to talk more about that in a minute, but right now we're just rambling the pre-roll here for
[00:00:33]  a bit. Get you past those Twitch ads. So I'm, yeah, come say hi in the chat as you come in. I'm going to post on social to
[00:00:41]  let people know that we are live. Let me see if I can get a few things up. Yeah. But yeah, how's everyone's week been? I saw some
[00:00:53]  commentary about complexity in JavaScript. In JavaScript and frameworks, and we might talk about that a bit on this week in JavaScript, but it's been interesting to kind of,
[00:01:06]  you know, every time we get around this time of year, there's, there's a lot of time for reflection and. And I'm kind of, I'm
[00:01:14] , I'm interested to see how people feel about that. I feel maybe people in the stream are not the target of that sort of, uh, thinking because you're like
[00:01:24]  here, you're, you're trying to learn even more, um, than you already do today. But. Um, sorry, I'm just reading chat. Uh
[00:01:35] , but yeah, I, I think, I think that, uh, I think it's interesting because I, I think there is always a bit of attention there. Right
[00:01:44] . Yeah. Well, so we got some people here who are familiar with live. You see, I am not. So, um, straight up, like this is,
[00:01:52]  this is going to be all, all new to me today. But yeah, let's see here. Let's. Let me, I'm actually going to share my
[00:02:00]  screen, make sure that works as well. I don't actually need to share my screen right away, but I might as well do this. I actually had fun making this
[00:02:09]  graphic. I don't actually know. I, this is from, I think Harry Potter, but it was, there was a Phoenix kind of flying over to like the sun
[00:02:17]  peering over the, over the, over the, is that Hogsworths? Whatever. Um, I don't know. I thought it was cool imagery. Honestly
[00:02:25] , I haven't, we're going to, I'm going to find out how related these things are. But it was, it was fun making covers. Uh,
[00:02:30]  that's one of my favorite parts. Sometimes I have to be fair. This one, I kind of phoned in because I didn't like put a bunch of like extra
[00:02:39]  graphics and stuff on. You can always tell the difference when I make the cover and when like David makes the cover. Um, so when I make it, it's usually
[00:02:47]  just like a graphic and sometimes I put some text on it, but like David makes all these really nice ones, but it's kind of hit or miss when I get them
[00:02:53] . But yeah, uh, let's see here. Uh, we're, we're live. I guess I'll put my Twitch link. I added my Twitch.
[00:03:01]  Um, I added my Twitch, uh, link to my profile on Twitter now and YouTube because after the state of JS, um, on the video content creators, they actually
[00:03:15]  added a bunch of links to the people. And I realized that neither of mine were there, even though I somehow got the number one right in for video content creator,
[00:03:24]  not saying anyways, I'm glad you're all here. Glad you guys appreciate the content. Okay. All right. Let's do this. Uh, Twitch TV is
[00:03:32]  not Ryan solid. Is that right? I guess I'll find out in a minute. Uh, yeah, that looks right. Cool. All right. So how's everyone
[00:03:46]  doing today? Given this one a little bit of a preamble. I know that this is not our usual kind of topic place. A lot of people like hearing
[00:03:54]  talking about react and solid and those typical JavaScript frameworks, but, um, I've been, if you remember from my last room, I've been, I've been wrestling
[00:04:05]  a lot with the topic of complexity. Yeah. Yeah. Yeah. Right. And this, this is, this is why I'm, I'm very much open to
[00:04:12]  looking in different directions for where, uh, we can learn. Like the thing is, if you don't, sometimes you can look at something and appreciate parts of it without
[00:04:26]  actually completely going all in on it. If, if, you know, depending on what makes sense. And I think like, there's been plenty examples of, of
[00:04:33]  that where I've seen in the past where if I say had paid attention more, um, I might've saved myself a lot of pain or learning. For example, I
[00:04:43]  keep on bringing this one up, but like I wasn't ignoring angular, like just straight up ignoring it. And if I had hadn't, we probably would have gotten to
[00:04:55]  resume ability in Marco, like maybe six months to a year. earlier instead of like discovering it ourselves, we would have been able to kind of like look at it and
[00:05:02]  be like, Oh, that's an interesting idea. How can we apply it? You know, like this might be feasible. Um, I think, I think that we
[00:05:13]  see this all the time in web development. You see how frameworks borrow aspects. Um, here's another example once solid starts actions and server, um, um, so
[00:05:25]  our server actions and data mechanisms are very inspired by GraphQL, which is kind of weird to think about, you know, at a time when everyone was kind of going,
[00:05:35]  Oh, URL file system routing, let's tie them together. So I kind of had this revelation from my time with GraphQL that getters are kind of tree based
[00:05:46]  and hierarchical and they work nicely that way. But the way the GraphQL does mutations are RPC and putting those two together works in that way, but works really well
[00:05:54] . It kind of decouples some of the problems. Like if you ever try and do advanced mutation APIs and rest, you've hit it before. It's kind
[00:06:01]  of awkward. Like how do you do a move between two resources? Because it's multiple actions. It doesn't map as well. Whereas using a graph or a tree to
[00:06:10]  pull data makes a ton of sense. And understanding that these have differences and different semantics, um, helped actually design the APIs. And this came from looking in a zone
[00:06:19]  for a type of solution that might be like quite different than where you're, where you're at. And so I'm very interested to see what we can all learn
[00:06:27]  here because when you attack a problem from a different direction, you often can find, um, like different values and perspectives. So I, the biggest one example of this,
[00:06:38]  you know, I haven't even mentioned is the relationship between solid and react, right? Solid. Like I, I could, I kind of like at first was like,
[00:06:47]  who cares about react? Fine-grained reactivity. I'm going to keep on using my knockout JS, like whatever. And I, you know, they
[00:06:55]  can do their thing where they re-render a bunch and I can do my thing. And I didn't really care much about it. And then I started to feel the
[00:07:03]  same pain. Like I could see the trade-offs. Like instead of being kind of blind to them, I was looking at, I was like, react showed me how
[00:07:10]  unidirectional flow is a good pattern. Like how immutable interfaces are actually really valuable to stay sane in these apps, right? Like I was fine, but
[00:07:20]  then I was also kind of in denial of the actual issues. And it took kind of walking between very different paradigms to kind of find where we ended up with solid
[00:07:28] . So for me, I find you can find inspiration anywhere, as long as you can appreciate what the different solutions are doing to reach their goals and like what those goals
[00:07:39]  are. So that's, that's kind of what I'm, you know, where I'm coming from here, just to get my perspective. I think it's
[00:07:47]  very interesting that the backend technologies have evolved in a slightly different way than the front end technologies. I mean, it makes sense. It's a, you're, you're
[00:07:56]  starting from like a different starting point. And what's really interesting though, is if you have something like that and then it gets ported completely to JavaScript. Well,
[00:08:07]  now there's no excuse. Like the, the distance to check it out or look at it and possibly adopt it has shortened dramatically. You can't, you can't just
[00:08:19]  be like, oh, it's, it's, it's some odd language Elixir. What's, what's the hell's Elixir? This is JavaScript
[00:08:25] . So I think that's really interesting because it also might map easier to, you know, what we're used to, what we see in our mental, at least that
[00:08:34] 's where my, my thinking is. So I'm very, very, very much excited, you know, to be able to talk about live view today. And I
[00:08:41]  hope all of you are as, as well, because I would like to welcome Donnie onto the stream so we can, we can get started. Hey, hey, how
[00:08:56]  are you doing? Hey, thanks for having me Ryan. No, this is going to be fun. Everyone in chat, say hi. I don't know if you
[00:09:04]  can see it. Yeah. Yeah. Yeah. Let's, there's always a little bit of a delay, but yeah, we're, we're, we're going
[00:09:13]  to be talking live view JS and Donnie is the creator of live view JS. And, but yeah, look, before we get too far into live view JS, why
[00:09:23]  don't you just start to kind of introduce yourself. Tell us a little bit about yourself. Sure. Yeah. Yeah. Thanks again for having me. Yeah. My
[00:09:33]  name is Donnie flood. I let's see. I'm a, I'm a entrepreneur and engineering type person. I've been working as an engineer and entrepreneur for
[00:09:43]  about 20 years. I started a few companies. The latest one that just started about a year ago is a company called canopy climate. So it's a climate tech company.
[00:09:56]  Uh, we're trying to help companies decarbonize their employees, uh, emissions. Um, so check it out canopy climate.com. Um, for that
[00:10:05] , you know, I've been doing a bunch of other startups. Um, so worked at a company called homebound, which is the home, uh, tech startup
[00:10:13] , uh, before that. So basically I spent like 12 years out in the Bay area doing startups and ad tech, a bunch of different languages early on, mostly like Java
[00:10:23] , JVM languages. Um, I'm, I'm sharing canopy climate.com. Um, I hope this is the right website. That's it. Yeah
[00:10:31] . Yeah. Thanks. Um, so yeah, we're, you know, um, doing some awesome stuff there. I feel really good about that work. Uh, yeah
[00:10:39] , before that I spent a lot of time in, in ad tech, a lot of fun problems in ad tech, but kind of got a little, uh, uh,
[00:10:49]  technology wise, just to kind of paint the picture because you, you worked in, uh, just around a bunch of different startups, different projects, just kind of basis.
[00:10:57]  Like how did you get your start with programming or like, you know, personally or professionally, just how, like what languages, what, like, what were you doing
[00:11:04]  with it? Yeah. So I, uh, I learned how to program back in, you know, in college, actually back in early night or late nineties when I
[00:11:13]  went to college. Right. And started with Java. That was the first language I learned in, you know, intro to programming, uh, in college and really spent
[00:11:24]  most of the next 10 years writing JVM, you know, mostly Java. I did a ton of mobile stuff back in the day. So J2 and me,
[00:11:32]  if anybody remembers that. Um, uh, and, um, you know, WAP, WML, uh, did a little bit of rails here and there, but
[00:11:45]  mostly mostly not, um, right. So, yeah, a lot of that stuff bringing bells to me now is a mid 2000 kind of time period. It's around
[00:11:52]  when I went back to university. I remember we were doing a lot of Java stuff. Yeah. We did the bunch of Scala as well. Yeah. Scala
[00:12:01]  adopters at Vizzo, another company I started. So yeah. Nice. Nice. And then, uh, I guess more, more recently, where, where,
[00:12:09]  where, like, I'm trying to kind of get to where you would even consider creating live view. Like what, what were you doing? Well, so I,
[00:12:17]  uh, joined a company called Homebound in 2018, 2019, um, and, you know, after doing a ton of job, so maybe a little, take a step
[00:12:31]  back. Like, so the ad tech company, Vizzo, I co-founded, we sold that to LinkedIn. It was all JVM, Java, Sc
[00:12:38] ala. Um, and, you know, while we were doing that, I was hearing some noise about react, right. And sort of these JavaScript frameworks, uh,
[00:12:47]  and so after spending my time at LinkedIn, kind of took some time off and I was like, well, what's this react thing? Right. Let me, let me
[00:12:54]  go and poke around and do some, learn some JavaScript front end, uh, kind of frameworks, um, ended up, you know, spending the next, you know,
[00:13:02]  kind of five years building react companies. Right. Um, we're working in the react space, front end, doing a bunch of GraphQL on the back end.
[00:13:13]  Right. Um, and, you know, kind of cutting my teeth on building, um, you know, pretty big applications. I mean, I was, to be honest
[00:13:21] , I was mostly doing code reviews at the time we got pretty big. I was, you know, I'm a mostly pointy hair manager, right? Type, um
[00:13:29] , after spending a bunch of years coding, turned into a manager. Um, it happens. Yeah. Um, and so, you know, got, you know,
[00:13:37]  had some fun building react apps and I, you know, I think that was like the, uh, kind of theme over the last, maybe like five to eight years.
[00:13:48]  Right. Right. Right. Building front end framework, JavaScript framework apps and back end, you know, GraphQL, uh, rest APIs that they would connect to.
[00:13:57]  Right. Right. Yeah. And so go ahead. Yeah. I just, were those back ends in node or were they in different languages or? Yeah. No,
[00:14:06]  those are in node as well. So yeah. Okay. Back end JavaScript, right. And, you know, I would say heavy TypeScript user. Like I, I
[00:14:12] 'm, I'm a big fan. I know, you know, maybe not everyone is, but like, you know, growing up in the job in Java land with,
[00:14:19]  uh, you know, compiled language and, and, you know, type type systems. Uh, I just, you know, love that approach. And, uh, I
[00:14:27]  think TypeScript is actually really fascinating. You know, uh, you don't have to spend too much time on it, but like, fascinating, uh, place from
[00:14:35]  a, from a typing perspective, really powerful. Um, you know, that being said, I, you know, I think I, I, as much as it was
[00:14:46] , as much fun as it was to learn, react and sort of build these, you know, and build and learn on GraphQL and sort of build these applications. It
[00:14:53]  always, they always felt like there were, you know, some inefficiencies there. Right. Right. Um, and, you know, for me, one of
[00:15:01]  the things that it always felt like there was this impetus mismatch around state management, right? Like you've got state on your, on the backend and you got state
[00:15:10]  on the front end. And there's a lot of effort, right. To like facilitate that, the transfer of data from your backend to the front end and like synchronize
[00:15:21]  that state. And so, um, you know, I was, I was wanting, I was looking, you know, what else is there out there? Um,
[00:15:29]  I ended up, uh, actually about this time last year, I kind of wrapped up one of my, my last job and I was, um, I was basically
[00:15:37]  like looking, I was like, I have, I have a little bit of time. I want to hack on some projects. What, you know, what is interesting out
[00:15:44]  there? Um, and that's how I ran into Phoenix and Phoenix live view. Um, I'm happy to like, you know, talk a little bit about that
[00:15:53] . Yeah. Yeah. Yeah. Yeah. For sure. Yeah. No, that. So you're saying that it was, it was, it was, it was in
[00:16:01]  what 2020 when you kind of first came across that or. Uh, no, it was 2022. So the beginning of. Oh, really? Okay. So like literally just
[00:16:08]  this last year. Okay. Okay. Gotcha. I mean, I, I think maybe, I don't know, maybe this is not true, but I think I've
[00:16:16]  been hearing a few snippets here and there about, you know, Phoenix, like, I don't know, like a lot of people who you probably have like heard
[00:16:22]  about Phoenix or sort of like live view. And what is this, you know, what's this Phoenix thing. Right. Um, uh, and really what's, what
[00:16:30]  actually spurred me to take a better look was a front of mine, Larry O'Grodnik, um, sent me a message saying, Hey, I just,
[00:16:37]  you know, I'm doing these videos. I'm learning about, uh, Phoenix and Elixir. You should check it out. Um, and it's, it
[00:16:44] 's, uh, it's actually by this company. Um, I ended up buying the course, but it's company called pragmatic studio that does a whole course on,
[00:16:51]  uh, learning Phoenix. And I highly recommend it. Um, and I honestly, I had, I had no idea what Elixir was. I mean, I I
[00:16:58] 've heard of Elixir, right. Um, but I, I, I was really happy in type trip land and I, I love type trips. And so,
[00:17:05]  uh, you know, I started, I went through the course and I, you know, learned just enough like sort of sort of copied out what they were, you
[00:17:12]  know, what their code was. Um, and just was really fascinated by the live view approach. And so. Okay. Interesting. So yeah. So this is all
[00:17:24]  very interesting. Uh, reason you were doing react doing typescript and then you, out of suggestion, you went to go learn this and then you suddenly found out about,
[00:17:33]  I get what this whole other, other world. I'm trying to remember it. How long has, uh, Phoenix been around for, I don't, I'm
[00:17:40]  not even sure. I wonder if folks in chat now, um, I know it's been around for a number of years and my, you know, I'll just admit
[00:17:50]  right now, I am not a Phoenix expert, nor am I a Phoenix live view expert, nor am I a Elixir expert. So I'm sure there's
[00:17:58] , there's better people, um, to sort of speak to the, you know, deep details of Phoenix and Elixir and all those things. Um, I know
[00:18:06]  live view has Phoenix, maybe I'll try to explain it and, you know, chat folks, correct me if I'm wrong. But, uh, I think like
[00:18:13]  the good analogy from a, for Phoenix to me is like, it's sort of the rails to, uh, Elixir. Right. Um, so, you know
[00:18:21] , there's Ruby and rails is the framework to help you build, you know, web applications, uh, super popular. Obviously Phoenix is the, is that for, you
[00:18:29]  know, for the Elixir language. Uh, it is kind of the de facto, um, web framework. And it's not like live view is a part of
[00:18:38]  Phoenix. So live view, um, and we'll get into the details of it, but Phoenix started off really just as a classic NBC style framework is, is my
[00:18:45]  understanding. Um, and over time, uh, live view actually came out of some of the kind of qualities and opportunities that Chris McCord and other folks who built this,
[00:19:01]  um, saw with, uh, what's called the beam, which is the, uh, Elixir kind of runtime. It's actually the, um, um
[00:19:08] , I'm blanking now, but it's, it's Elixir built on top of another runtime. Um, the, what language is that? Um, Er
[00:19:16] lang. Erlang. Yeah. So, um, they start, yeah, basically they, and, and I, I would say that part of the motivation for live
[00:19:24]  view on the Phoenix side was, was kind of the opposite of what you were saying. Like it, and the opposite of like what my goals were, which is their goals
[00:19:33]  are really to have these really reactive high, you know, uh, experience interfaces, but without writing any JavaScript at all. Right. Right. They're trying to sort
[00:19:44]  of like make it so that Elixir folks didn't have to write JavaScript. Um, obviously, you know, my whole framework is, is JavaScript. That's,
[00:19:52]  that's, that's, that's a funny thing, but this is an example again, of kind of like what I was talking about earlier about walking that line and finding
[00:19:58]  like slightly like outside of the range of what it was maybe intended or what they saw doing. it almost, because it seems almost heretical, I imagine from that side
[00:20:08] , I was looking actually on GitHub and the initial commit for Phoenix was January 18th, 2014. Yeah. So yeah. Yeah. It's, it's been around for
[00:20:18]  awhile. I don't know if live view has been around nearly as long, but, uh, but yes, the first commit was 2014 for, uh, actually. Yeah
[00:20:28] . In, let, let me look for those who don't believe it. Uh, I'm on the wrong window. Here we are. Yeah. See initial commit
[00:20:39]  January 18th, 2014. There we go. Okay. Anyway. Um, yeah. So yeah, it's funny. Cause that goal, I, I, I was
[00:20:50]  a backend framework. I like all through the two thousands, same time period when you were talking about when you're doing Java and doing that, I feel like we like tried
[00:20:59]  to do that before, like in, in various ways, not good ways, but we definitely tried to do that. Where you didn't JavaScript. My experience through the
[00:21:06]  two thousands was kind of funny. Cause I, I was a JavaScript. I did JavaScript cause it was an HTML. Like I made websites in the late nineties. And
[00:21:13]  then like, I went professional, you know, you know, after my university first time when I was there, you know, getting my job. And I'm like
[00:21:20] , okay, it's, it was.net for me, but same, same, same crap. And then like, essentially it was like, no, no, we
[00:21:27]  don't write JavaScript. We have smart like controllers and containers and all these patterns. And we can put these, we can write our C sharp code. And then JavaScript
[00:21:40]  managed magically happens to, you know, run in the background. You know, so when back then it was kind of brutal. Cause you'd like drop a, drop a
[00:21:48]  select list. If you had cascading select like drop downs, you'd like refresh the whole page. Like you drop one down and get the new data for the
[00:21:57]  second one, you know, like a travel agency site. And what was interesting was back then the technique to try and solve this was to isolate. Like it was right around
[00:22:07]  the time Ajax came out. It was isolate what we called update panels. And then we would slice out and replace the markup in certain parts of, of the,
[00:22:18]  of the HTML. And, and then we would pass back and forth something called view state. And like app state, like there's different serialized data formats. And
[00:22:27]  we'd pass like partial state of the app back and forth between the client and server on these requests. And then they would like run part of their initials. Like the
[00:22:35]  initial server life cycle had like, I don't forget like eight steps. But when you're doing an update panel, it would only run like half of those life cycles.
[00:22:44]  And you'd end up co-locating that logic with your normal logic. And you, it was a bunch of switch matches. Suffice to say that was like the
[00:22:51]  worst experience I've ever had. in web development. Um, and, and like, yeah, it was, but that was the goal. It was, it was
[00:23:00]  no JavaScript. Um, did you remember, um, do you ever ever hear about, uh, GWT Google web toolkit? I, I don't, I didn
[00:23:07] 't do any.net, but I, I think it's sort of similar, but slightly different. But the idea was like, you're, you're writing Java,
[00:23:17]  but it compiles all your Java down to JavaScript. Yeah. And we actually, I mean, we, we actually built it. I, you know, built a
[00:23:23]  bunch of applications with, uh, GWT. Um, and like at one point, I think they ported, uh, Google ported the search interface, not search
[00:23:31]  interface, the search ads interface, um, over to GWT. But, you know, similar concept, right? You're, you're, you're, you
[00:23:37] 're, you know, people are comfortable writing a Java. So how do we get them to write a more dynamic experience? Right. Yeah. See this, this is
[00:23:46]  where my personal story kind of diverged because I, what ended up happening in those companies or that I was working for at the time. I, it was a one company
[00:23:53] , but there's multiple teams and there was like, you know, different products. So the active network, um, based on San Francisco and they had a satellite office of
[00:24:01]  Vancouver, um, was that, um, and I moved around a few teams towards my end of my tenure there. Um, what was interesting was we'd have all
[00:24:10]  these update panel, partial update.net apps. And then people were like, even with that, it was like, man, this is so slow and clunky. And
[00:24:19]  then they're like, come in, write JavaScript on top. So I got, I was like the resident jQuery developer who added the extensibility. And by the
[00:24:27]  time I was leaving, people were like, Oh, this is this new thing called knockout. Like we should, we should make it so that we only do our APIs
[00:24:35]  in, in. God soap. I think it was, uh, like Microsoft, like, like really like Microsoft XML, like world. And then let's see if
[00:24:46]  you can rewrite our clients from a razor or, you know, NBC four into knockout. And that's, that's how I got back into client side of all things
[00:24:53] . But it was like, at that point, the complexity. And like, we hit one of the things where the goal is to have a single language isomorphic.
[00:25:01]  I'm seeing these trends all over again. This is why I'm always like hesitant on this stuff. We'd gotten to such a like point that it was such a
[00:25:09]  mess that like, it was not delivering when it needed to. And the exit into single page app was like the most welcome thing imaginable at that point. We were
[00:25:19]  just like, Oh my God, like all the problems disappear. Just like, just, and it was kind of, uh, funny because like that introduced new problems, but
[00:25:30]  they weren't visible to people for several years. Yes. That's how, that's how I felt like my journey was with your actors. Like, Oh, this
[00:25:37]  is great. This is so complex. Well, and I think it was kind of interesting. Cause what would have happened is that, um, a certain type of complexity went
[00:25:50]  away. Like the, this, like trying to picture the state on both sides of the, like the thing, it was really crazy back then with like introspecting the
[00:25:59]  view state. And like, it was, it was not good in some of those older solutions, but like the problem is what ended up happening is that what was capable
[00:26:09]  at the time, practically when we moved to react, something became like, like that baseline was like, Oh, that's trivial. And then react, like what we ended
[00:26:16]  up doing with react was like so much more. But then we found our own complexities because we got to a point where like, suddenly like, Oh, this, you basically
[00:26:26]  it was just a size constraint. And we got to a point where like, we're on the internet network CPU of devices. Like we don't own those. And
[00:26:34]  like, this is actually like, sure. You could build everything as a single app and stick it in the browser. Um, and you could build on huge amounts, do
[00:26:43]  incredibly more dynamic things than you ever pictured you could do before. But unfortunately, um, you've pushed all the cost on the end user. And I think, I
[00:26:54]  think that's interesting. Cause as I said, I forked at that point, like I kind of split off. I did, I stopped following what was going on in
[00:27:02]  the backend. I, I, I did do like node backends at that point or whatever, but I never went back to follow. I, I missed the turbo
[00:27:09]  links. I missed like that, like, and to be fair as a web, as a JavaScript developer, when I saw turbo links, I was just like, like,
[00:27:19]  are you guys just doing update panels again? Like it just, it wasn't, it wasn't enough for me, for me to like, I was missing the,
[00:27:26]  the, like the, the magic piece or the thing. And I have to admit when I heard about live view and I was like, okay, these guys use web so
[00:27:34] ckets to update stuff. I was just like, like, I just never went there. And I feel like, but now, you know, a few more years later,
[00:27:44]  we were getting to a point where like all the efforts, all the challenges. that have come around to try and figure out how to reduce this cost in the client have
[00:27:56]  almost pointed us to only a couple possible outs. And most of those outs involve acknowledging that not everything that could go in the browser should go in the browser. That that's
[00:28:06]  like the fundamental thing, that piece of information is still up for debate, but it's very much why I'm interested. Sorry. This is my like long preamble
[00:28:14]  on my side to kind of get us to here as well. I'm curious, Ryan, like, you know, one, one issue that I've run into with
[00:28:21]  like these large, you know, true fun framework apps is, is that they, they start off small and like, you know, sort of keep them all in your head
[00:28:30] . Right. And then over time, like you, like the single page app, it means like literally everything is in the front, like in that app. Right.
[00:28:41]  And it was like, again, growing up in the world of sort of like classic, you know, HTTP based app, you know, applications where you have gets and posts
[00:28:50]  and different routes, right. that are handled by the server and different, you know, like different handlers, if you will, on the, on the end of
[00:28:58]  those different, you know, HTTP requests. Right. That sort of that complexity in an application where all your routing now is in the front end and you need to figure out
[00:29:10]  where, you know, what, like, where am I? Right. Like in this huge application, front end application, like, how do I hook up this next
[00:29:19]  page? And like, how do I get the state, you know, from obviously wherever it's managed, right, into that page in the, in the correct way.
[00:29:28]  And I, I think like one of the things that I, you know, again, growing up in the world where one, you know, slash whatever user slash ID is
[00:29:38] , is literally one, you know, request, right. Or one, like, like set of code that you're like, okay, I got a request. I
[00:29:45]  got these brands on my, on my, you know, incoming, you know, post or whatever it is, or my get. And I'm going to look up my
[00:29:52]  user and like send some data back. I think what ended up happening was we added this one layer of abstraction in between is the best way to put it, because the client
[00:30:00]  side routers have their definite place. And we, we've seen like a lot of systems like file system routing kind of come in to try and like bring back that
[00:30:07]  feel perhaps of like before when you're like, oh, I just organized it in this folder structure. But even, even outside of that, the biggest thing is data loading
[00:30:16]  patterns. Like we, we were, we pushed things to APIs, right. And the, and that's a big, like, we basically got rid of the mon
[00:30:26] oliths because we couldn't really have them because we weren't like, even if we had a JavaScript backend, the framework wasn't part of that. So it's
[00:30:33]  like, essentially when you're getting started out the gate, you're just like, okay, I need a front end web app and I need an API. And that was
[00:30:43]  just like the assumed pattern that had to do. And right off the bat, that meant that, you know, it's probably a rest API. You saw it with Graph
[00:30:51] QL, but essentially right off the bat, you needed something. And I think that is a lot to ask comparatively for like the, the smaller thing, the thing
[00:31:04]  just getting started up. The thing is like, I remember at the time when this came up and pointed this, I just like, whatever. And the reason I was like
[00:31:09] , whatever was like, oh, I need an API for my mobile app anyways. And like, it was kind of just expected that like, that was going to be the
[00:31:15]  piece, right. I was working at startup and it was like, okay, we have a web app, we have a mobile app. We'll set up the API and
[00:31:22]  we'll account server and everything. This is also the timing for all of this was just almost perfect from the sense that microservices were also the hype. So like everyone
[00:31:33] 's like, oh yeah, we need microservice architecture. So like, like these things all aligned. It's such a perfect timing that like the fact that the mobile app
[00:31:43]  would need, you know, have an API, you just like take for granted. And so like the, you walking in the gate, you're, you're already,
[00:31:49]  and it was also the rise of like more complicated web apps. So like people are like, yeah, we should build our app the same way that Facebook works. So
[00:31:58]  like, like all of the, or, or what's the one that create that wasn't, wasn't Netflix. One of them had like just the craziest microservice architecture
[00:32:07]  that they put it on a map and you'd, you'd awe at like the 500 different services that talk to each other in this crazy colorful grid. And I feel
[00:32:14]  like all of those factors lent to us kind of shrug off. Well, I guess that's the way it's going to be, right? Well, when we get
[00:32:20]  to scale, we're going to need that anyways. Totally. I was, I was, I was there. Right. And I think like, again, maybe this
[00:32:27]  is, this is a segue for me to live view. Yeah. Was I was just looking for something different. Right. And I've heard, I'd heard a bunch
[00:32:34]  about Phoenix and I finally sort of like, you know, took the red pill, I guess. And like, yes, learned a bit more about it. And I
[00:32:42]  just, I, I thought it was a really interesting, you know, and maybe I'll like, it's not for, it's not, shouldn't be used for
[00:32:49]  everything. Right. Just like reaction used for everything. Right. But I think it's a really interesting approach to building these sort of like user rich experiences with a totally different
[00:33:02]  paradigm around how you accomplish that. So. Nice. Yeah. So maybe we should talk a bit about what, like, what is a live viewer? What, what
[00:33:14]  is this? I think, I think we're, I think we're at a good point to kind of switch that over. Yeah. I mean, you said it earlier
[00:33:20] , I think, you know, the, the basic, so, you know, just so folks know there's, there's live vgs.com. If you want
[00:33:29]  to sort of write documentation, we'll, we'll look at some code as well. But at a high level, I think the most simple way to explain it is
[00:33:38] , you know, hopefully this works, but it's a server render page, right? So you're sending back HTML on the first request. And then when that page
[00:33:47]  loads on a, on someone's client, the client automatically connects, connects over a web socket to the server. Um, and then any subsequent user event that you want
[00:34:01]  to subscribe to. And there's, you know, there's sort of ways to, you know, hook up your, your, uh, HTML page for, to send
[00:34:09]  events. Any event gets sent over the socket, the server receives that event and, you know, runs your logic based on whatever that user event is, uh, generates
[00:34:21]  the sort of like new view. And then it handles sort of like diffing that view compared to what's on the current client, uh, screen. And it only
[00:34:29]  sends back the diffs and that's back over the web socket. Right. And then the client applies those diffs, uh, to your screen. Um, and you
[00:34:38]  know, you, you sort of like continue to use the app. So it's this initial HTML request, web socket connection, and then user events go, go to
[00:34:50]  the server and updates come back from the, from the server and are applied automatically. Interesting. So the, the, the, the first thing that I noted here, well
[00:34:59] , there's a couple of things I noted here, but the first thing you mentioned that caught my, my, my, my attention is mostly that the diffs happen on
[00:35:06]  the server. Um, which is, which is different than, um, than, uh, let's say what we've been talking with react server components where the diff
[00:35:17] s actually happen on the client. Um, so right off the bat, this is the sort of difference, but I'm going to want to understand that better in a minute
[00:35:26] , but before we go there, um, I think from that description, I think the, the actual kind of questions that kind of pop into maybe a JavaScript engineer's mind
[00:35:34]  is okay. I think it's okay. I think it's okay. Yeah. I think it's okay. I think it's okay. I think it's okay
[00:35:41] . Yeah. I think it's okay. I think it's okay. It's okay. I think it's okay. Yeah. Yeah. Um, it, it is
[00:35:49] , uh, yeah, it's a persistent connection for sure. Uh, and, you know, uh, depending on the, what, what I'm talking about, right
[00:35:55] . Right. Right. Right. Right. Uh, you know, they can obviously depends on your server and depends on lots of other things, but they can handle quite
[00:36:08]  a number of persistent connections. Right. Right. And obviously if you're in, you know, you have asked to write traffic application, you're gonna have to figure out
[00:36:16] , you know, how to run multiple servers and blah, blah, blah. Right. Right. Yeah. I mean, the WebSocket part is makes, you
[00:36:23]  know, I, I, I follow that. It's the statefulness, which is the interesting part from, from our side. Right. Cause like, here's the
[00:36:30]  thing you can make WebSockets with durable objects on a Cloudflare worker. So even on the edge, there can be solutions to WebSockets, but
[00:36:37]  I'm just like, we were just on our, a lot of the stuff we've been like looking on the job, like the other JavaScript framework side. We've
[00:36:44]  been like the edge stuff and really getting embraced and all this like serverless stuff where like basically the idea is the server can just be thrown away, which is, which is
[00:36:50]  why I'm trying to like understand like the different mentality here. Uh, in terms of, so when I say stateful, like it, user has a session. Yes
[00:36:59] . The server knows what the state of the UI is essentially. Yeah. So it's a little, it's interesting. So it knows the state of your live view
[00:37:11] . Right. And so there are certain parts. So I think this is maybe like getting to the, um, I think some of the interesting ideas, but, you know
[00:37:20] , so maybe to take a step back, this isn't a, this isn't a single page app. This is a single route, right? Like a live view
[00:37:27]  page, um, that has, you know, some defined, um, kind of state. Right. So maybe we'll, maybe I'll actually just like bring up like
[00:37:39]  a, a counter example. Yeah. Yeah. Yeah. Okay. Yeah. Maybe I'm digging too far into this. Let's let's let's. Yeah.
[00:37:49]  Okay. Yeah, sure. It was mostly that. Um, okay. If you let me, let me share just two seconds. Okay. Sure. Here's your counter
[00:37:56] . All right. So, you know, a counter, this is, this is not for, by the way, this is like a much better sort of thing to do
[00:38:02]  on a client side app, but like just to show you state, right? Right. So in this case, the state is just literally the count, right? It
[00:38:09] 's what is the number. And so that is the, like, you can imagine like that, the amount of state grows, um, you know, relatively small, right
[00:38:20] ? The size of the template. Right. Back and forth. Right. And so when you're, you know, hitting plus here, it's sending an event over the
[00:38:29]  web socket, the server saying, okay, I'm like going to increment the count by one. And then it's going to do the diff and it's going to send
[00:38:35]  you the back. Right. Right. So the state is, yes, it is stateful. Right. And theoretically, like any application of any, you know,
[00:38:43]  well, I guess this is sort of trade offs of like what you're thinking about what you're trying to accomplish. Like if you're looking to build a docs site,
[00:38:52]  right? You don't really have state. You're just like, you know, if you have an application, right? Applications need, they have user safe.
[00:39:01]  Right. And like, we need to store that state somewhere. Right. I guess what I'm like asking the simplest terms is the fact that count is one, that one
[00:39:09]  is on the server, right? That one is on the server. Gotcha. No, it's in the Dom, but it is on the server. And that will
[00:39:16] , and I could, I could show you, you know, sort of the request going back and forth that like, yeah, any state of any, like all live views
[00:39:25] , the states live on the server. And that's kind of the idea is like you're sending events, right? Okay. Like anything you're sending events up to
[00:39:32]  the server and those events can have, you know, other values that you're sending up. But then the, the new state is calculated on the server. And then,
[00:39:41]  you know, you kind of run this render loop there and send down a desk. I guess. Okay. So that's, that's like consideration one. Yes. The
[00:39:49]  second question then following up from that is like, does that mean that like, we always go to the server when we do anything? Kind of change that would manipulate the
[00:39:57]  Dom. So not necessarily. It depends on the, on the change. So there, there's actually this, I have a, I have a document in here. There
[00:40:08] 's this concept called JS commands. So JS commands have. Okay. Things you can add to, you know, to your page, right? That based on clicks or whatever
[00:40:20]  you want. Interesting. Right. You can manipulate the Dom without going back to the server. So these are. Yeah. Is this something you, you added with live
[00:40:29]  view JS or does live view have it? This is a live view. This is a Phoenix. Live you saying it. And maybe, maybe I should like. Give that
[00:40:36]  like credit again. Like this, like this entire concept, right? Is created by the Phoenix folks. I basically, you know, have just ported all of that
[00:40:46]  to, to TypeScript. Um, but yeah, this is, this is a relatively new thing that I think, um, the Phoenix folks added in the fall,
[00:40:56]  maybe, um, or in the summer. Um, so you can do things like add a class when you, like when somebody clicks on something, remove a class. You
[00:41:03]  can do trends, uh, transitions. You can send events. You can show high stuff. Yeah, for sure. Okay. Okay. Okay. Okay. Okay.
[00:41:12]  Okay. So yeah. Okay. That, that, that that's that. And this actually answer answers. And what I was thinking like my third thing in my head,
[00:41:18]  depending on the answer, because there, there, there, there is this concern. So the, their desire is that you'd never escape into JavaScript. That was kind
[00:41:25]  of the question. Cause the, the, one of the challenges in the past is this, that escape hatch, right? Because there's, there was like, um,
[00:41:33]  like classically with these solutions where you don't have to say these commands, you'd be like, okay, but like, yeah, I'm definitely doing this in the
[00:41:41]  client. So now I have two apps. I have like my micro, like whatever JavaScript app. Um, and then I have my server app. I mean, even
[00:41:50]  a perfect example of this in modern kind of rails kind of turbo thing is they still have, they still recommend using libraries like stimulus. Uh, or, you know, like
[00:41:58]  the, the kind of idea that there's these, like, some things just make sense in the client. So Phoenix's approach seems to be kind of like some kind of
[00:42:07] , I don't want to call it like imperative directive command commands. They call the command command. So that's actually the right term. Um, okay. Interesting. Okay
[00:42:17] . So, okay. Okay. That gives me a high level in terms of kind of like framing where, where we're at in terms of like, what, what
[00:42:25]  the like high level considerations are. We're talking stable servers. We're talking, um, we're talking, uh, uh, not always necessarily going to the server
[00:42:35] . Cause there's a way to also do some Java client side only stuff. And the mechanism for that, um, still keeps it very much in line with the philosophy
[00:42:46]  or approach of live view. Um, and finally, the thing that kind of came out, snuck out of this is this is like, this is very much a port
[00:42:53]  of live view. JS is like, do you, someone like I heard a lot of like things that I don't know are true, but like a lot of like
[00:43:03] , uh, like people made like assumptions or stuff. They're like, they're like, Oh, they just use the, the, the client side is actually just straight
[00:43:10]  up the same client side that live view uses. Is that true? It is exact. That's exactly true. That's a hundred percent true. So, so going
[00:43:16]  back to like, you know, how this came about, right? I was, I was thinking about the elixir or Phoenix elixir. Um, and you
[00:43:23]  know, I was, I was like, this is really cool, but I don't, I don't write elixir and I don't really want to learn el
[00:43:30] ixir. I'm happy in TypeScript land. So I started poking around and started, you know, um, looking, um, one of the cool things that maybe
[00:43:38]  this is like, I could show you this. Um, one of the cool things about the front end Phoenix stuff, um, is you can actually look at, uh
[00:43:46] , you can look at the web sockets, um, coming across. And so if we look at the, the messages here, a bunch of messages, but you can
[00:43:55] , so I can see, uh, what, you know, like, like imagine you're in elixir land. I'm running, you know, Phoenix live view
[00:44:03] . I can see the protocol essentially that is being spoken between the client and the server. And so I was like, well, there's a protocol here. The client
[00:44:13]  obviously knows how to send events to the server and they're in a specific, you know, kind of organization. Theoretically I can, I can create a server that
[00:44:24]  is in a different language that knows how to speak this protocol. Um, instead of me reinventing all the things that, you know, Phoenix had figured out, why
[00:44:35]  not just speak their protocol, um, and write a server that knows how to, you know, sort of send the updates back. Right. So this is a hundred
[00:44:43]  percent. Uh, like I, you know, if you look at the, um, uh, let's see, where's my, um, while you're grabbing that
[00:44:53] , just want to shout out right at the beginning of chat. I, I missed it. Um, cause I was busy getting set up and stuff. Big shout out to
[00:44:59] , uh, Adrian UI subscribed at tier three. Um, thank you so much. I, I just catching up on Twitch chat. Now. Um, I missed this at
[00:45:06]  the very beginning of the stream. Uh, very much appreciate that, that sub. Um, so just shout out there. And, uh, so just showing you some
[00:45:15]  code here that like this Phoenix, uh, this, like, this is the client code. That's, that's loaded. Um, this is, this is all loading
[00:45:23] , like the socket from Phoenix, Phoenix HTML, Phoenix live view. Like this, and this is like loaded on every page, right? Every live view page. This
[00:45:31]  is sort of like the, the thing that connects that manages the connection and automatically sets the connection between, uh, this, the server and the client and like speaks the protocol
[00:45:42] . Um, right. So, so yeah, that's, um, that's kind of how it came about. I was like, well, instead of me having to
[00:45:49]  reinvent the wheel, why not just reuse their client code and implement server? I mean, why not someone was actually just saying in chat that before those commands came out,
[00:46:00]  um, that Alpine JS had actually kind of, um, kind of was cause in, in there. So I, yeah, I can, I can see there probably
[00:46:09]  was a gap, but it sounds like that gap has been, uh, getting closed more recently. Cause yeah, that, that, that, that was what came to
[00:46:15]  my mind. I was like, Oh man, don't tell me I'm going to have to like do. Cause Alpine JS is, um, for those less familiar
[00:46:23] , it's a view. And people, it's views reactivity essentially. And it actually literally is with basically it works like old knockout used to, it's like
[00:46:34]  you render the bindings into the HTML and then there's a reactive system that kind of like drives it. but there's, you don't need like the, the
[00:46:42]  templating system is the rendered HTML. You don't need an extra templating system. So it's really easy for backend, uh, frameworks. And this is the way
[00:46:49]  I used to use knockout back when I was working at Microsoft to just kind of like render the Alpine into the, into the HTML. The only, the only challenge
[00:46:57]  or tricky part with that is if you've ever like seen these kinds of things is you might have like a for loop or something on your server render data. And then
[00:47:03]  cause the client can add it after the fact, you like have these like for loops, like sitting on top of each other, essentially like Alpine knowing that this was its
[00:47:13]  use cases made some nice ergonomic updates since like the 2010. But generally speaking, there's, there, there's this definite two app thing. sorry, I just
[00:47:21]  wanted to give that a quick shout out because I, that was my expectation come in. I'm kind of interested to put the commands in general, but we'll get there
[00:47:29] . Sorry. Just for the little aside. Okay. Um, but one question we, we just talked about the protocol, which I'm kind of interested in cause like
[00:47:38] , like half want to kind of understand what, how they serialize diffs. But I mean, that, that's, that's, that's another topic. You
[00:47:44]  talked about a live view being like a page, but like, if what's the navigation story, like that back button, do you load a new page or is it part
[00:47:56]  of all like, is it, is this like an MPA mentality or is this like, uh. Yes, I would say it's like an MPA mentality.
[00:48:03]  So like, you know, this is some other code, but these are kind of a bunch of routes that I have to set up for, you know, examples. Um
[00:48:09] , so this is sort of like how you think about a traditional MPA app, right? Where you have like, Hey, this route is going to this handler. Um
[00:48:16] , you can add, you know, here's an example where you can add, um, kind of path params as well. Um, so you can, so if
[00:48:23]  I, let's go to this one. Hi man. Um, I can, uh, so if I go, yeah. Yeah. Hi Ryan. You know,
[00:48:32]  you can, um, you can obviously like parse that route, um, path param out and through passing into the live view itself. Um, right. So yeah, like
[00:48:42]  if you think about, so there's a couple of things. One is sort of like, you can do whatever you want to do, right? It's a backup
[00:48:50] , um, you know, true, but it's, it's more like an MPA type approach. Like this view is, is, um, you know, this
[00:48:57]  live view, this view is that. Now there's, that means you're sort of like, you can, um, they also have this thing called a live component.
[00:49:06]  You can like load, you know, reusable components inside your, um, live view. Um, so you don't have to, and those components can have their own
[00:49:14]  state. So you have to, you can manage that. Got you. I guess my biggest question is, is it common to use something similar to turbo here? Like
[00:49:25]  where it does the next page server renders, and then it does the diff or the replace. Like, is that the. Good question. So there's two different types
[00:49:34]  of like, um, kind of like routing, um, or I don't know what the right term, I'm forgetting the term, but you can, um, click
[00:49:43]  on a link and there's. There's like traditional, like load an entire whole page, right? Yeah. Like, you know, classic anchor link. There's
[00:49:51]  also, um, specific links that you can make that will reload, um, the light, like use the same live view, essentially, um, connection, but reload a
[00:50:03] , a new instance of that live view. So let's say, um, you know, I, I don't have it on here, but there's a link to
[00:50:09]  like saying hi to Donnie on here. I could, I could use a link a lot. It's kind of like a live patch. Right. To like load
[00:50:17] , keep that same socket connection. I don't need to like reload the, you know, the full page. I could just say, I want to load a different state
[00:50:27]  of this, you know, live view and kind of like, um, run that, um, that, you know, there's still a life cycle that happens.
[00:50:34]  Like you have to run them out and then, you know, we can, we can talk about the different, uh, life cycle steps, but you know, you run
[00:50:41]  the basic life cycle steps, render a page and it's, um, still sending down to like that, um, smaller. Right. Right. Right. Okay.
[00:50:52]  That's cool. Um, I mean, just, I, I get, I'm still trying to ask the right questions to get the comparison. So like that's
[00:50:58]  turbo what you described, uh, has anyone, uh, I guess it's just all, I I'm more interested in, I guess, the conventions and the practices here
[00:51:06] . I guess people are often coming at this thinking page and then they go, okay, now we have live page or whatever, like the live link kind of approach.
[00:51:15]  If we want to do that and then like, like things do, I'm just trying to wonder if things like nested routing ever like come into consideration, like, or
[00:51:24]  is that just not architecturally where like people's heads are at? What I mean by nested routing is you look at Twitter's interface. Um, I mean, I
[00:51:31]  can just pop in my, my, my screen, but my, my classic example here of nested routing is when I go to my profile page and bar stayed here.
[00:51:44]  The new section came in. If I switch here, um, like, I don't know if this is actually true of Twitter, but like only this section swapped out
[00:51:54] . So see, I have this three level nesting, um, and the URL kind of reflects this, right? Cause initial page is Ryan Carniato. Yep.
[00:52:06]  This is Ryan Carniato with replies because it's like a nested section, you know, this is kind of the index. And then like, if I was
[00:52:13]  on home, there's no Ryan Carniato. So like it's the, this kind of concept of URL bar as related to, um, section of the UI.
[00:52:23]  I, I, I'm just in, I guess it's more of like a practices question, but I'm just curious if, if, if those kinds of things people
[00:52:31]  play around with in this architecture or just. Yeah, this, and this is maybe gets to like, uh, my experience with like live views and Phoenix and, and
[00:52:41]  JavaScript live view, uh, both. Like I haven't, I haven't written strict on huge Twitter level applications. Um, I know like I've used things like
[00:52:51]  fly.io, right. Which are, um, written in Phoenix. Um, right. And they have, uh, you know, sort of nested routes and message
[00:53:00]  views, um, and that type of thing. So, um, I guess I'm just more saying I'm, I'm really probably not the best person to answer
[00:53:08]  that question. Gotcha. Uh, but like, and, and maybe like what the best practice around, like how do you structure, you know, these, like your,
[00:53:17]  you keep this part of the page loaded and then you can reload this part of the page. I mean, I would probably implement it as like, you know, that
[00:53:24] 's where I think live components can come to play and there's some more, um, obviously I'm, I'm sort of like lagging behind, uh, the Phoenix
[00:53:34]  level of like, uh, uh, I don't know, like continuous, uh, like improvements. Um, so like when they come up with something, it takes
[00:53:44]  me a little while to sort of like port that over or figure out how I'm going to like represent that, um, in, um, you know, in, in
[00:53:50]  live.js. But I think like, to me, like, I guess the answer is like, my understanding is like, there's, you know, thousands of awesome
[00:53:57]  applications have been written in Phoenix. A lot of them are using, you know, live view as the sort of de facto way they built them. So like, I
[00:54:04]  would be surprised if there wasn't a way to sort of like, you know, um, obviously do the Twitter style navigation, um, in a, uh, you know
[00:54:15] , you know. Yeah. Yeah. Yeah. No, that makes sense. I, I mean, I, from the way you described, like, what was it called
[00:54:21]  the live components and like the different pieces I can see mechanically. I've just, yeah, it's fine. If you, if you're not the person to ask
[00:54:26]  on that side, it's fine. Sometimes I'm not the person to ask on those kinds of things. I did mention that before the stream, when we were talking,
[00:54:31]  I was like, I got to, you know. I was like, I go on streams. Everyone's like, wants to ask me like, how to like do
[00:54:36]  this specific thing. And I'm like, I, I, I, I'm, I'm, I know how to do a mechanic of the framework. I'm not
[00:54:41]  like how people use it. That's a little bit, you know, how people use it. Um, so, okay. So let's, let's kind of,
[00:54:47]  you, you've kind of covered and answered my, my questions here so far mechanically, we're going to hit more stuff as we go. But I feel like
[00:54:56] , um, it's probably a good time to, uh, to look at some examples or like, let's start, uh, let's, let's start looking at
[00:55:07]  the code. I'm actually going to make myself a little banner here. So let's, let's just. Yeah. I mean, maybe, maybe I should poke through
[00:55:14] , should I poke through like a few examples just to get people. Right, right. Cause I think that we need to, we'll hit stuff and questions, but
[00:55:21]  maybe like, what's, do you have like the, the basic hello world application? They'll just show someone how they would author it. Like what pieces are involved?
[00:55:31]  Like maybe just kind of start really basic of like what, what a live view project or looks like, like. Yeah. Yeah. I can talk about that. And I
[00:55:40] , I think, you know, one thing to keep in mind too, is, um, the way live view OJS is, you know, I, I sort
[00:55:46]  of like, wrote it in a way that it can be, it could run on both, um, sort of like the node JS runtime and, uh, the demo
[00:55:54]  runtime. Yeah. So there's some like, I don't know, abstractions, I guess, that take a little bit of like, uh, that you need to
[00:56:03]  set up that I need, I guess, need to build an instruction in certain ways that I could like run them on, on both runtimes. But basically, you
[00:56:09]  know, uh, just to show you like an express JS example, right? This is, this is sort of. Um, at first you like have a router of all
[00:56:19]  your live views, which we can, we can go look at these. Um, and then you're just setting up like a typical express, um, server, which I
[00:56:26]  don't know. Okay. I'll just give folks like, uh, with express, but, you know, back. Yeah. Serve the static folder, middleware
[00:56:34] , session middleware. Where I'm like adding some support for flash. And then I just have like a middleware that logs, you know, requests to all routes
[00:56:45] . Okay. Um, and so when it comes to like setting up live view, there's, uh, there's a couple of things that you need to do essentially.
[00:56:53]  Like one is your, your live view server. Um, in this case I have this, I have this kind of like abstraction, this, uh, node express live view
[00:57:02]  server abstraction. And so you need to pass in a few things like the path you need to pass the router to the live view service and those requests. Um, there
[00:57:10] 's, uh, like this page template, like wraps your live view. So your live views are really only care about rendering what is dynamic within the live view itself. Gotcha
[00:57:21] . If you want to wrap it in like your CSS and your, you know, whatever additional, you know, HTML you want. Um, that's kind of what that
[00:57:29]  template's for. Um, live view has this concept of, uh, it's called live title, um, where you can, uh, as you change a live
[00:57:37]  new route, you can like dynamically update the, um, HTML title right at your page. Yeah. There's some like initialization of that. And then, um,
[00:57:49]  the on error is more just like a debug thing. Like, um, I make it easy. So if you want to actually look at, you know, errors that are
[00:57:55]  happening on server potentially, like you can tap into that. That's optional actually. Um, you can also, like, you can add a debug, um, kind
[00:58:03]  of thing here too. Um, okay. And then one thing that's important to think about is like, okay, so you have, we're transitioning basically from an HTML
[00:58:14] , uh, or HTTP request to a server, a socket, um, you know, kind of connection. And, you know, depending on, depending on the socket
[00:58:22] , but like, sometimes you need, basically you need a way to get the state of your session, right? Like your user ID or your user user credentials or whatever
[00:58:33] , um, across the socket and into the live view. Um, and so there's this like serialization deserialization sort of step that, um, where you
[00:58:44]  basically can pull the data out of your session and like serialize it. I use JWT to serialize it up to the stock across the socket and then it's
[00:58:51]  decoded and made available to your, to your live food. So that's what this, this survey thing is. You're just, you know, deserializing
[00:58:58]  the session. Okay. And you know, we can, we can look at that as well. This wrapper template is just another, like you can wrap your, um,
[00:59:07]  so there's like the HTML page and then there's like, maybe I want to add a place where like flashes are or navigation and like all the common things. Uh
[00:59:14] , interesting. So that's the, the wrapper templates inside the HTML page template, but. Yes. Yes. Okay. And it's also part of this is like,
[00:59:25]  this is also like, like made available to the live view, um, uh, you know, kind of handler so it can. Okay. So that wrapper, um,
[00:59:33]  it doesn't differ outside HTML, but it does the wrapper. Right. Okay. So it's like responsible for saying like where to insert this or where to do that.
[00:59:40]  Okay. Yeah. Part of the dynamic template to update. Right. So then it's like cooking that. So we configure this live view. Now we got to hook
[00:59:48]  up the HTML middleware. So it handles, you know, intercepting again, things routed to one of these things and then just back, um, just the HTML
[00:59:59] . Right. Yep. Um, and then we also, uh, let's see down here where then we like hook up a lot, the actual, um, web
[01:00:10]  socket. Web socket. Right. Um, and so that's kind of the, you know, most of the stuff is just typical express configuration. These are, this is
[01:00:18]  like, okay, now, uh, this is the thing that makes it so that this, you can sort of like connect over a socket. And that socket knows how
[01:00:25]  to route, um, right. To the idea itself. I just noticed something. What's the index handler. Uh, this is the thing that just, um, loads
[01:00:34]  the sample. Just like. Okay. It's just, uh, it's, it's sending back HTML showing all the different, um, in this case, it's
[01:00:45]  just showing all of my. Right. So this, this actual index thing isn't actually using live view. It's just like, so you have an HTML page and
[01:00:51]  then the other pages are live views. Gotcha. Okay. Yep. Um, so, so yeah, that, that's basically it. You've got an express server.
[01:01:00]  You're, you know, configuring your, your live view server, and then you're kind of hooking from the middleware for both the HTTP. Okay. That
[01:01:10]  makes sense to me. So, I mean, and then that boilerplate is other than defining the routes is large and like feeding in the templates. Like the top level
[01:01:21]  templates is largely the same every time for express or for a given platform. Okay. Yeah. All right. So, so then, I mean, we could look at,
[01:01:32]  you know, whatever examples we want, but, you know, maybe just to take a look at the counter one real quick. Or can we talk routing for two seconds
[01:01:40]  just to, so you have your routes, you've imported your routes. How does this look like, I guess they're just imported, right? So you can just kind
[01:01:48]  of sit them anywhere. Oh yeah. Yeah. So the way I've, the way this, this is my like main and YBPS repo. So there's
[01:01:57]  actually like a bunch of different packages in here. This is actually importing from the example. So you could theoretically import, like, again, I, this is the express,
[01:02:06]  like example server. Right. A Dino example server that uses the exact same examples. Yeah. So that's why they're in a different package here. But theoretically
[01:02:17]  you can put them in your, you know, in your, your, your path, whatever you want. Gotcha. Okay. So yeah, let's pick, let's
[01:02:26]  pick a simple example. Like it could be as simple as the counter. It doesn't really matter. I just, I want to see what it's like to actually author
[01:02:33]  one of these things. This is like a volume control one. This one works with keys. Okay. There's, there's all kinds of different, I can show
[01:02:42]  you one with the four. I can, I want something very, very simple to get into something with one, like a point. The counter is actually almost perfect for just
[01:02:51]  something with one point of interaction. Can, can we look at the, we all saw how it worked a minute ago. Can we look at the code? Like the actual
[01:02:58]  counter. Okay. Yep. So there we go. So because you're importing directly, you got, you just, okay. Export cons counter live view, create live
[01:03:09]  view. And what does a live view take? What are we looking at here? So this is a really, this is, so maybe at a high level, there's
[01:03:19] , there's like six different live view state functions that you can define. Okay. Okay. Mount is sort of like the initialization step, right? You're kind
[01:03:29]  of like initializing your, your counter or whatever your state is. You also get, there's some optional things here. You can get session data. You also can get
[01:03:38] , um, the params. So like if there happened to be a, you know, on the route, like I can pull it out of the params.
[01:03:48]  Um, if there's session data, I want access to like a user ID or, you know, whatever user credentials that I want to validate. Right. That would be
[01:03:56]  passed in. What, what, what does socket assign do here? You're clearly initializing the state, but. Yep. So this is, this is sort of
[01:04:05]  like, maybe this is, um, kind of like the background here is like, this is a little bit of the Phoenix live view, um, kind of API, um
[01:04:17] , that I, that I sort of like ported over to, um, to JavaScript land. So socket is, you can think of socket as this sort of like
[01:04:26] , um, utility object that lets you do different things. It lets you assign new state to your live view. So that's what assign does it. You can pass in
[01:04:35] , you know, trip this, you know, state that you want to, you want to override the existing state to be. Um, you can also access, um,
[01:04:43]  the existing state. Um, so if you do, uh, context. Yep. That's the existing state. Um, and so there's, and there's various
[01:04:54]  other helper functions. Um, you can send messages from this live view to, you know, to itself, which I'll get into. You can, uh, push events
[01:05:05]  down to this, the, uh, the client, you can do all kinds of things, but, um, yeah, in this case, the sign is just like,
[01:05:13]  I'm initializing the state of this live view to. Right. This particular. Right. Right. And if I look at down at the, uh, event handler
[01:05:21] , um, I actually see, uh, more of it and it looks, it's, it's set state like count equals count plus one. Um, yep. Okay
[01:05:30] . Okay. And that's interesting. I know I'm jumping ahead a little bit, but handle event is handles all events. It's, it's delegated for
[01:05:37]  this live view. And then it's like, right? Like, so then you just. Increments. These are named. Okay, let's, let's keep on
[01:05:43]  going. Um, yeah. So yeah. Handle event is any outside events or from the client comes through handle event. So, um, and we'll show you
[01:05:51]  how to hook it up. I mean, this is, this is how you hook it up. Right. Um, so you're saying, uh, and sorry, this
[01:05:56]  is render render is responsible for like, what's the, you know, what is going to be displayed when this, when this live view is, um, you know,
[01:06:04]  shown on the page. Interesting. You're using tag template literals here. Uh, I guess in Phoenix, they have their own syntax for. Yes. Whatever JS
[01:06:13] X, like for view, like. Approach they use, but okay. So. Interesting. Yeah. Okay. The tag template literal is actually super important. Um,
[01:06:25]  and we can get into like JSX versus tag template literals and, um, the, the key here, and maybe this is too much information, but like.
[01:06:34]  What I, what I was trying to accomplish with tag template literals, and this goes back to like how the server diffs the template and what's dynamic versus what is
[01:06:44]  static. Um, and I never, I didn't really ever want to like parse anything. Right. And so what's great about tag template literals is as you know
[01:06:53] , you know, all of the, so anything inside of this dollar sign, you know, bracket, right. Right. Is, is quote unquote dynamic and everything else
[01:07:03]  is, is static. And so it lets me automatically get the structure of the template that Phoenix. Yeah. Like speaks. Yeah. This is, this makes complete sense to
[01:07:14]  me. My, the number one reason that I don't use tag template literals and solid is because, um, there's runtime. Uh, well, there's
[01:07:24]  two reasons. It's a little bit clunky when you nest stuff. And the other reason is, uh, runtime. Um, there's an expectation that works this way
[01:07:34]  at runtime. And because I wanted to do all the reactive wrappers for solid to do all the like reactivity. Um, and I didn't want you to have
[01:07:41]  to write it. This doesn't work. You'd have to add in a bunch of function wrappers. And I, and since it would need to be compiled, JS
[01:07:48] X wouldn't set up the wrong expectation. But what solids JSX does is it looks at the template the same way and generates a string. It actually like, it
[01:07:57]  basically doesn't do hyper script to that. It actually looks at the structure of the code and generates the static string and separates the static from the dynamic. Very similar. Yeah
[01:08:05] . I would love to maybe pull, you know, use your, I guess your version of JSX. Um, there's some, you know, I, I have
[01:08:12]  like a, I have a, uh, a branch in here somewhere. That's, you know, trying to compile JSX to tack to info literals. Um
[01:08:21] , because again, I just like that structure is like perfect for Phoenix, um, or for live use where it's just like, you know, I don't care about
[01:08:29]  anything that's static. I only care about the dynamic parts. And yeah, this is why I expect it also on the JSX side, why I'm, I want
[01:08:37]  a lot of the tooling to move forward. Cause this kind of optimization is the obvious optimization to make. And while solid is kind of famous for doing that now, like that
[01:08:47] 's its thing. Like the way that a lot of templating languages like Svelte or view approach this is very, very, very, very similar. And they
[01:08:57]  like this, like this is kind of just expectation, even Inferno, um, which is kind of react like they look at the structure and pull out the static V
[01:09:08] DOM nodes. So they don't have to recreate them every time. So like this sort of optimization is almost guaranteed in the future. Um, if, if you
[01:09:18] 're performance oriented. So I think it's, I think it's, uh, the, yeah, I mean, this is my little rant aside, but for, I
[01:09:27]  think things like TypeScript and like, and like different tooling, like that has to start expecting this kind of change. And this is the number number one reason I did
[01:09:37]  not want JSX in the browser. Um, because I think that thinking about it in terms of separate function calls is actually really, really awkward. Um, it has benefits
[01:09:49] , but from optimization standpoint, it's, it's, it's not great. Anyway. Yeah. I mean, I, I'm not an expert at JSX
[01:09:57] . One thing I was, again, trying to poke around this, like JSX to, you know, to tag tempo literal, like compiler thing, right. That's
[01:10:05]  looking at the AST of JSX and, you know, trying to turn it into this, this structure, which is, uh, it's really challenging, but,
[01:10:13]  um, yeah, like I, um, I don't know. I think it's like, yeah, I'm glad to hear that this is the direction that people are
[01:10:22]  moving. Cause like, I think, uh, it's exciting to like, I would love to support JSX, but, um, I just, you know,
[01:10:27]  looking at what is output from a compiled JSX. Like it's hard to know what, what parts are dynamic, which parts are static. Right. The other place you
[01:10:36] 're going to see this a lot with the tag template roles is stuff like Indino and stuff, because simply the fact, and this is like preact and stuff and using
[01:10:42] , like the, the, the desire to get away from build tools to be able to do a lot of this stuff is also very compelling. I'm kind of on
[01:10:50]  the other side of that, because I think that like, if you give me the option to have build tools, I'm already always going to be able to do something better
[01:10:57]  with it. Like when you have more. Are there for a reason, right? Right. Like if you have the ability to analyze something ahead of time, you can always
[01:11:04]  do better than what you can do at runtime. Some things aren't analyzable ahead of time. And we have to understand that there's those things, but if you
[01:11:09]  give me the means, I will be able to do better with it. So like, but yeah, no, this is, this makes a lot of sense to me
[01:11:17] . Yeah. So to, you know, just to like, finish out on this simple example, right? Yeah. These kind of built in Phoenix tags, attributes that
[01:11:26]  you can apply to your HTML, you know, elements. And basically what you're saying is like, Name of the event. Then I'm going to send this event up
[01:11:34]  to the server. And then, you know, going back to the handle event, right? Like you said, it's getting, you know, an event coming in
[01:11:42] . That event has a type, which, which corresponds to, you know, one of these two things. And then we're going to, you know, run our logic
[01:11:50]  based on that. Now, little kind of like, you know, maybe DX thing here is like, this works. If you don't, if you don't add type
[01:12:00]  attributes to this, but it doesn't know, you know, it doesn't know if like there's some other thing that you can, you can or cannot add to
[01:12:08]  the state. So having these like type annotations will help you, you know, just write safer code, right? So here you, you wouldn't be able to,
[01:12:18]  you know, add something else, right? Yeah, that makes sense. I mean, it's the, well, it's actually interesting, I guess, like with props
[01:12:27]  in modern function based components, it's the same thing, but the state is a little bit different, but again, it's because the state doesn't really feel like
[01:12:35]  it's attached itself to the components. So like someone added, like the act of adding foo is the act of what that X, like where that expectation is. But
[01:12:45]  I, it makes sense to me why you do it this way, because you, it's actually like the class components in the past where like with react, where you're
[01:12:52]  like, look, I'm defining like a shape. Like this is like the state is this and then versus the more hook primitive kind of approach. But okay. Yeah
[01:13:02] . This I'm, I'm following pretty well so far. Um, so that's, you know, the, I mean, obviously super simple example, but you know
[01:13:08] , that's the concept, right? It's like the, you know, HTTP request comes in. This is basically, you know, it goes through the same mount
[01:13:18]  process. So, um, whoops. Okay. While we're at this very simple example, cause when you get more complicated, we can't talk about stuff that's
[01:13:26]  quite as technical. Yeah. I want to talk about the diffing here right off the bat. Cause this is, this is, this is because as we all know
[01:13:34] , the only thing that needs to change here is the text in the one text node. Um, and the, this is kind of an interesting one to me because obviously leave
[01:13:47] , we keep the state on the server. I guess we keep the previous run of the, the, I'm going to call it a virtual non. Like let's
[01:13:55]  face it, this feels like a virtual dom on the, on the server. Is, is that correct? Um, I'm going to do this. Um, no,
[01:14:01]  it's, it's not. It's like, um, it's this tree structure actually that, um, let me open it up for you and correct. Um,
[01:14:17]  so, so this is, this is the tag template literal part. Um, right. Um, there's in here, there's this, there's basically this thing
[01:14:28]  called parts. Um, yep. Terrible name. But, uh, what, what I do is this tag to tag template literal gives me these stack, the static parts
[01:14:39] , right? All of them just, you know, text that will never change and all the dynamic parts, which are, I don't really know what they are. Right
[01:14:46] . And for those of you who don't know, the coolest thing about tag template literals is that the static parts on every execution don't change. It's like
[01:14:55]  they cash them in that location, which is like their superpower, which is just amazing. Yeah. Yeah. Um, so, you know, you're calling this
[01:15:04] , uh, you know, you're calling this tag template literal, um, that's giving me, you know, in the constructor, I'm getting all the statics
[01:15:11] , um, from that. Um, and then I'm getting all the dynamics and basically the, the, the way Phoenix works is, um, and maybe this is
[01:15:19]  a good time to, well, I don't know. So I, I end up essentially generating those with what I call this parts tree. Right. So, um,
[01:15:28]  I, I keep track of the different, um, you know, I have obviously keep track of different things. And then Phoenix has a protocol. Right. Um, that
[01:15:38]  allows me to, let's look this up here. Um, so it has a specific message protocol that looks very similar, um, to, um, to that structure
[01:15:55] . So essentially you send back. Right. Like a set of dynamic parts. Right. So there's, uh, anything with a, with a number, uh, folks
[01:16:04]  can see if I need to zoom in a little bit more here. Okay. Um, let me open this up bigger. Gosh, I haven't zoomed in this
[01:16:12]  far too. Uh, this is always fun part in here. The dev tools suck at zooming in. I, it's fine. If you need to go one more level
[01:16:20]  out, it's probably okay. Um, okay. Uh, okay. Anyway, but I, I guess like, is this from the initial render? Cause I actually
[01:16:30] , I saw, I saw the static HTML in there for a second. There is a, yeah, the static, the static render comes back just as HTML page. Right
[01:16:40] . Okay. So, right. And then you press up on the counter, right? Um, so this is the initial page load. And then it actually, as
[01:16:49]  soon as you load the page, it connects over the socket. So it's not waiting for you to hit like a button. It's like already connected, um, and
[01:16:56]  waiting for you to do stuff. So then, uh, the webs on the web socket side, um, yeah, sorry. There's a heartbeat that's running obviously
[01:17:08] . Um, okay. So we're sending back, uh, the important part is this, is this render tree. Um, I can tell you what the other parts are
[01:17:17] , but, um, yeah. Anything with a, a number is like a dynamic part of the, of the template. So these are actually like part of the wrapper that
[01:17:24]  shows a flash message if you want. So we can, we can ignore those. The dynamic part here is, is just this one, um, kind of it's,
[01:17:33]  it's actually tree. It's, it's actually tree as well, but it's the, the number of the counter. And then the static part of that,
[01:17:40]  of that, um, tag template literal. Um, so, and it's broken up into, you know, the, the order of, um, just the order of
[01:17:51]  it being rendered. So in this case, there's like, this is the beginning, right? Yeah. Count is, and then dynamic would be insert middle. And then
[01:17:59]  one is like the rest of that. Right. I'm yeah. This, uh, the data serialized format makes sense to me. And on the larger template,
[01:18:10]  we're actually seeing the slots or holes filling into the actual bigger thing. Like main role class container. That S is the static one for the. Exactly. So it's
[01:18:19]  a tree. Yeah. Right. Yeah. Okay. That makes sense to me. I think the question is what, why, why, why, why send the static
[01:18:27]  stuff? Like why sign this? Yeah. That's, that's the initial joint response. And so now your client has the cash of all the static parts. Okay.
[01:18:38]  Um, and like where they live in the tree, what they're associated to. And, and it, um, and now, so for subsequent updates, so let
[01:18:46] 's go up here and actually, uh, hit plus. Right. We've incremented where we're sending the increment event that whole, uh, loop, uh,
[01:18:56]  cycle, lifecycle runs, um, in the, in the live view. And then let's scroll down to the bottom here. Um, and we get a reply that,
[01:19:03]  and this is the, the, you know, the subsequent diff, right? So the diff here is literally just like, all right, this slot in the tree and this
[01:19:13] , you know, at this index in that, um, in that, uh, you know, that tree. Right. Right. So this is the cool part where
[01:19:22]  you're like, okay, it, it knew all the static parts, it knew all the dynamic parts. And obviously we're not changing a lot here, but you know
[01:19:29] , it only sent down, you know, the, this, you know, kind of, okay. Yeah. This part of the tree. Right. And because on that
[01:19:36]  first run, um, when it got like initialized, it actually, that's, that's when I, I'm, I'm, I'm, that's when
[01:19:42]  I did hydration, essentially, essentially, like, like at the point when you did that first connection thing. Yeah. Yeah. Okay. Yeah. Yeah. Yeah.
[01:19:52]  And then from there on, it just actually patches the holes. Um, which is, which is very, very cool approach. I'm trying to think of,
[01:20:00]  um, it's funny cause we, we, we've been talking about this kind of thing with Marco for a bit, but, um, uh, can we go back
[01:20:10]  to, I'm just, okay. We don't have to go back. It's like in my head, I'm just thinking about the process of what that hydration
[01:20:16]  looks like, because technically you don't need to recreate the dom nodes, but like, I'm trying to think of how it would use the static template to know which dom
[01:20:26]  elements are already there. Well, if you remember on this, like initial response, it doesn't send anything other than like raw. Right. So it's not
[01:20:34]  sending, it doesn't know any structure. Right. Of course. That's what I'm supposed this. Right. Um, at first. So I, I kinda,
[01:20:42]  I guess I think about it as like this, that initial mount response, um, which is a joint response, which is like, you know, when you actually connect to
[01:20:51]  the socket, it's just sending like, you know, here, here's the initial shape of that. Of like the entire render tree and obviously a really small heater
[01:20:58] . Right. It needs to, it needs all of it so that it can, you know, once you get the dynamic parts, it can zip, you know, the
[01:21:06]  static parts back up together. Um, around. Yeah. Yeah. Yeah. It's this part particularly is of interest to me, obviously. Cause I'm like thinking in
[01:21:17]  my head, how you go from the string to looking at the, I guess the HTML and then figure out where the, like, where to make those. Things once
[01:21:25]  it's wired up, the rest of it is fairly straightforward. That's probably like the most interesting thing to me. Maybe something for me to look at. Yeah. I
[01:21:34] 'm happy to like that because, cause that, that part is the, like the server rendering makes sense to me, the way the state updates. Um, and because like
[01:21:45] , it's, it's funny. Cause I have conversations quite often with, uh, Dominic Gannaway of creator of Inferno. And he's,
[01:21:52]  you know, very much a virtual dom guy. Um, and Inferno being like the fastest virtual dom libraries. But when we talk about it, he's, he
[01:22:00]  always talks about virtual dom being the holes, not being the static parts. Right. And I'm like, well, that's, that's what reactivity is. It
[01:22:07] 's, it's the holes, not the static parts. Right. Like, and I see the similarities here. So that part, like once you're wired up,
[01:22:13]  that part makes perfect sense to me. It's the, it's the, it's that hydration step or whatever that we call in the front end world that, that is
[01:22:22]  definitely of interest. Um, to me at least, but interesting. Do you like, do you know high level, like how that works? Like, does it,
[01:22:31]  does it like string compare, um, like the, like on the client side, how is it actually like, yeah. Um, my understanding is it uses morph dom actually
[01:22:40]  to like do things. I don't know exactly how more dumb. Um, like. Oh, okay. Like under, like far underneath this, you know, it
[01:22:50]  uses. Okay. Actually gotcha. I'm familiar with morph dom for people who aren't aware morph dom was created by the same person who created. Marco, um,
[01:22:57]  from, and it was created at eBay. Um, so I also, I used to work at eBay, um, on the Marco team. Marco five are basically all Marco
[01:23:07]  versions up until the upcoming Marco six are built on morph dom. Um, so yeah, morph dom does a dom diff. Um, and my guess is. Okay.
[01:23:16]  I'm not, I haven't written any of this. You know, this is like, this is part of why I'm like, yeah, I don't know.
[01:23:19]  I just like speak the protocol and you know, actually wrote the, my, my, my, my, my gut guess here is that they compile, they take those staff
[01:23:38]  templates cause they'll need it next time. They compile the new data with the static templates and use morph dom to do the diffs. That's, that's probably
[01:23:43]  the way they do it. So in a sense, what's cool though, is if that is true, they don't actually hydrate. Like you don't really need
[01:23:49]  to hydrate in this paradigm if I'm understanding it correctly. Cause they, you only need the static templates so that the next time you do it. Exactly. Which
[01:23:59]  means. Okay. Well the reason we, I might have to confirm this at some point is that's actually a client side diff, not a server side diff. If
[01:24:08]  that's the approach, like it's. It is. You're right. I mean, technically like, in order to apply the change right to the DOM, you've
[01:24:14]  got to like figure out what parts of it had changed. Right. Yeah. Right. What's cool is that I will say that the serialization format is, um
[01:24:31] , is definitely compact, which is really nice. You don't send the templates twice. Um, which is, which is really good. This is. This is one
[01:24:41]  of those like problems that we've had with, you know, when people talk about react server components. They're like, like you in your head, you're like,
[01:24:48]  man, like, why are we descending? Like, you know that you're sending that JSX multiple times. And the same problem with the stuff we've been doing,
[01:24:55]  uh, where we've been sending the HTML, um, instead of doing the diffs. Um, I don't think this saves on, if, if my understanding is
[01:25:02]  correct, I don't think this actually saves much on client work. compared to like the approach that's, uh, solid's been doing with our server component solution.
[01:25:10]  But I, it definitely saves on over the wire cost. Um, so that's, that's pretty cool. Okay. That was maybe another interest. I don't know
[01:25:20] . This is, I think this is kind of a fun demo. Okay. It was like getting into a little bit. Uh, I think that this will be cool here
[01:25:27]  too. Um, but this, this demo here is sort of like, you know, a, a post or like. Live updating, you know, dashboard. Uh
[01:25:38] , and I'll, I'll walk you through the code, but, um, you know, so obviously the only thing that's changing is sort of like, you know
[01:25:45] , these, these are random, right? Numbers. But like, you know, like the new order count, the sales amount. Um, and so we look
[01:25:54]  at, you know, the web socket messages, um, there as well. These will come by really fast. Um, I guess. It's hard to see.
[01:26:03]  Someone, someone was mentioning, sorry. Oh yeah. Someone that you need to hide it to add event handlers. That is true. But part of me wonders if they
[01:26:11] 're given the way that it works, if they're just, if you, they're just adding global event handlers. So like that could just, that could just
[01:26:19]  be something very, very simplistic. Like you don't have to walk the tree to add the event handlers. Um, is my guess because you get the element and then
[01:26:27]  all you do is you like, listen to click. Um, it bubbles up to wherever the delegate event handler, it goes, does this element have a Phoenix click on
[01:26:36]  it or whatever Phoenix thing, whatever that name is, dispatch that over the socket. Yep. Um, so it's kind of, I guess it's hard to see what
[01:26:44] , what the size here, but, um, you can see it a little better here, but like, you know, these messages are coming in, right? And you
[01:26:51] 're all you're, they're only, um, sending like, again, the diffs of what has changed, um, on the dom. So it's,
[01:26:58]  it's kind of fun. Right. Yeah, no, that, that, that makes, that makes sense to me. Um, yeah. So yeah. And this is
[01:27:05]  a, this is a good example of showing like how, because of the web socket solutions like built in, like this is just kind of like, I imagine probably very,
[01:27:14]  um, easy thing to do. So can we look at the code again, just so I can appreciate it. This is the dashboard example. Again, we've got,
[01:27:21]  you know, kind of the shape of our state. We've got kind of the external events. So you can, you can click refresh here and like, you know
[01:27:28] , update faster. Um, and then this live, this like internal event is a, is a slightly different, um, handler. So again, we've got the same
[01:27:37]  mount. We can check to see if the socket is connected. Um, and if so, we're going to like set up this, you know, just this, you
[01:27:43]  know, interval, right? That's going to, that's going to send this internal, uh, info event. So this is actually what's, what's doing
[01:27:51]  the like loop thing, if you will. Yeah. Um, and then. Yeah. So in terms of life cycles and where they live, does, does the Mount run
[01:28:00]  on both sides or only in the client? Like how does that work? Mount run on both sides. Um, so Mount and then there's, uh, we haven
[01:28:07] 't shown this one yet, but there's another, uh, method called handle params, which actually gives you access to the URL and like, you know, path par
[01:28:15] ams of the URL and, uh, inquiry params. It allows you to update state based on those programs before you render. Um, so Cal is Mount handle par
[01:28:25] ams and then render, uh, for both HTTP request and the initial web socket, uh, join. You, you understand the reason I'm asking this question is cause I
[01:28:34]  see a set interval in front of me and I'm going, who's calling set interval. Um, yeah. So who is calling set interval? So yeah. Well
[01:28:43] , in this case it's, it's the, you know, the live view, um, you know, itself is calling it. I'm, I'm storing that
[01:28:51]  the interval in like, but I mean like conceptually for me, sorry, is that set interval happening on the server or on the client? That's what this, that
[01:28:58] 's what this, this connected is. Oh, sorry. It's happening on the server. So there's running on the server in the background. Okay. Yeah. So
[01:29:06]  this is happening, uh, on the server, right? There's, you've got your live view instance. Oh, right. Right. Sorry. I'm,
[01:29:15]  I'm thinking about this wrong. All everything in here runs only on the server. Everything in here only runs on the server. Yeah. Cause the only thing on the outside
[01:29:24]  that you see is like the, the, like the name of the event or like, like we're talking about the mechanical stuff, but you, you couldn't.
[01:29:32]  Yeah. Cause all the states on the server, you couldn't possibly like run a set interval in the client. Like it's like, that's not the way this works
[01:29:38] . Right. Okay. Yeah. I'm sorry. My question was silly. I mean, it's fine question to me. Um, so the, the interesting thing
[01:29:48]  here is like this socket dot connected, that means it won't run when, during the HTTP request. So you're not going to like set up a interval to run on
[01:29:55]  the server when you're making. Yeah. Yeah. Or you're saying, okay, when the socket connects, I want you to set up this thing that, you
[01:30:03]  know, is going to run every second. Um, and you know, I'm just assigning, you know, random data to it. Um, the, the send info
[01:30:11] , um, again, this is the socket, one of the socket helpers, right? It, what it does is it, it sends, it sort of like handles
[01:30:19]  sending an internal message to this internal in terms of like internal to this live view. Um, and it's kind of a dumb one, but like, it's just
[01:30:29]  a, a good, um, I guess a good example of like what handle event is for. It's to receive these asynchronous events, events from like somewhere else that are
[01:30:40]  initiated. In this case, it's, you know, happens to be we're generating ourselves, but you can imagine. So this is one of the, I think,
[01:30:47]  strengths of the live view approach is like pub sub is an, is like a first class citizen here. Right. Um, and so you can imagine you're, you
[01:30:56]  know, I, I, there's, I've actually got like three different pub sub applications, like a, you know, super basic emit event emitter, like single
[01:31:04]  process pub sub, which is just for kind of like testing. And then I've got a, and then I've got a redis space pub sub and a,
[01:31:11]  um, so that's for node. And for Dino, I've got a, uh, broadcast channel base. So broadcast channel in Dino, especially Dino deploy
[01:31:19]  is actually like, you know, across every instance, right? So you can, um, publish messages on Dino, uh, broadcast channel, and you can subscribe
[01:31:30]  to those messages on any, in any process. Um, yep. But that, that's basically where these, where those, like, if you're subscribing to something,
[01:31:38]  imagine you've got it, you know, I've got an example here that we can talk about in a minute, but, you know, you've got these asynchronous events
[01:31:44] . You want to be able to push that data back to the, you know, client somehow. Right. Um, and so this is the way, this is sort
[01:31:51]  of like that handle event or handle info callback is the way you kind of process asynchronous events. And then again, update the context or the, you know, the state
[01:32:02]  of your, um, your live view. And then run it automatically, you know, runs the render loop for you again, and push that back down to the client,
[01:32:10]  runs the diff, push the, you know, all that stuff. Um, so that's, um, I don't know, just, uh, I think kind
[01:32:18]  of a fun, like example of like, Hey, you can create really dynamic live views. Um, order, obviously it's hard coded to like generate data, but we
[01:32:29]  can imagine that data coming from some other dynamic place. Yeah, no, it's cool. And it's like the opposite side of the, of the, the, the
[01:32:36]  coin, so to speak, because someone, uh, sorry. People say someone pair of social mentioned in chat, um, that this is DB Mon, which is kind
[01:32:45]  of the joke. It's the cl there's a client side benchmark where they literally spam like a kind of, uh, like stock ticker thing. And it,
[01:32:54]  it's kind of, it was popularized because it, like Brian Florence showed it at a talk back, I think in 2014 or 15. And it was like the thing
[01:33:02]  that showed that react was the fastest, um, because if it's diff engine, because they would just slam all the data at the page at breakneck speeds. Um
[01:33:12] , and, and it's for the chats, make me laugh about someone, but, um, thanks prime. Um, but that was like the, the test. But
[01:33:31]  the funny thing about that setup was right. Like you're on a client, you're pulling, like, you're just like, how fast can I pull that data
[01:33:38] ? Um, to, in order to show it. Whereas this is the opposite. This is like pushing, like, it's like, yes. So. Yeah. Yeah
[01:33:48] . There's a, there's a story. I, I'm not like to look forward. I heard it both. Um, one of the, one of,
[01:33:55]  this is an interesting sort of paradigm, but one thing that happened, I think it was like somebody wanted to build a like voting, uh, app in Europe somewhere. Um
[01:34:06] , and all of the, like everyone logged on and like voted at the same time, which were like, took down the server. Cause it was, you know, getting
[01:34:14]  all these events and trying to like send them to all the clients at the same time. Um, I think that there's better architectures for, you know, sort
[01:34:20]  of like, you know, uh, kind of collecting all those events. And you're like sending them and, you know, one fell swoop or like aggregating them
[01:34:26]  and sending them. But, um, yeah, that, I don't know. Interesting. Usually it reminded me of, of like early, you know, problems you'll
[01:34:36]  run into where you're like taking a straight, you know, um, data feed from kind of pub sub and like just blindly sending all the events without, you know,
[01:34:45]  aggregating them first. Yeah. Okay. Yeah. Okay. Um, where do we want to go next on examples? Cause is there, is there any other like
[01:34:54]  kind of cool feature or maybe show something like a little bit more involved? Yeah. So let's maybe we could talk about like forms. Okay. Yeah. Let's do
[01:35:04]  forms. Yeah. Let's do, let's do like a, I don't know, this is a stupid example. All these examples are, are, you know
[01:35:12] , pretty small, but, um, so I've got this, you know, I got this, this form here, uh, and I'm, you know, building
[01:35:20]  my library. Right. So I've got, you know, or something and I've got, uh, what's the name of the, uh, uh, you
[01:35:28]  know, author J R. So first of all, I got, you know, is it, I'm going to misspell it here. Um, is that right
[01:35:34] ? I, Ian. Anyway. Um, so then I'm going to add this book and now I can like check it out and return it. Gotcha. Yeah. So
[01:35:44]  couple of, of, I think interesting things here. Um, let's see, what is that one of the books? Um, so this may be interested, the,
[01:35:54]  the concept, which I, again, I sort of like stole imported from, uh, Uh, it's funny Zod was just mentioned in the chat. Um,
[01:36:04]  it was, it was like validation in live view is what TRC and Zod wishes it to be. And then like we get here and I, I'm like the
[01:36:09]  first thing I see is Zod. Um, well, what's this is the, so what I do, what, so take a step back Phoenix, again, all
[01:36:18]  credit to the Phoenix folks. Uh, they have a, uh, you know, this, this concept and it's really, uh, on top of their database, um
[01:36:26] , which I'm forgetting their database. Uh, library, but it's called a change that. Um, and so keep in mind what this, I don't know
[01:36:33]  if folks are familiar with Zod on the, on the, on the feed, but essentially Zod is like a way to describe a shape. Of, you know,
[01:36:40]  JavaScript object that you want to, um, you know, kind of build and you can add, uh, validations essentially to that object. Um, and so I
[01:36:49] , I, um, I use Zod to create this, uh, to implement the concept of change sets in, in Phoenix live view of bringing them over to TypeScript
[01:36:59]  land. And so, um, so I'll kind of take you through this real quick. Two, two, two seconds. I got to throw a, uh,
[01:37:07]  thanks up to, uh, Jetpack Joe who gifted, uh, the primogen, uh, gifts up. So thank you very much for doing that. Yeah. Sorry
[01:37:15] . Continue. Yeah. Um, okay. So we're just defining like what, you know, what the schema is for a book. We're going to say the
[01:37:25]  ID is blog by default, it's a nano ID. The name has to be between two and a hundred characters, author is four and a hundred characters and checked out as
[01:37:33]  a bullion. Right. And so just to, you know, shape of your object. You Zod has this thing where you can infer actually the, like the Type
[01:37:41] Script type from that schema. So that's what I'm doing here. And then I got this change set, which you'll see kind of how it works, but
[01:37:48] , um, it's basically this thing that keeps track of, or invalidate, um, data being passed in and tell you, uh, what parts of your object are
[01:37:59] , are valid or not valid. If that makes sense. Right. Yeah. And then as, you know, books DBs kind of, we'll get to pub stuff
[01:38:08] , but, um, so let's see. Um, okay. Okay. So can I, can I see the HTML first? Just, just, just, yeah
[01:38:16] . So we've got, you know, we've got the, the form here. Yeah. I've got this helper library. It basically skipped out a form with some
[01:38:25]  Phoenix, um, uh, attributes kind of, maybe we'll look at it, um, in code just so you can see, uh, what it looks like.
[01:38:33]  Um, so it's a straight up, uh, so, you know, classic forms got, it's a post. It doesn't matter. Um, so we've
[01:38:46]  got these two attributes for forms that there's only two. There's a PHX submit and a PHX change. And again, this is a Phoenix thing. The
[01:38:55]  change gets called anytime. One of your, uh, form, uh, elements, you know, uh, changes. And you can, you can sort of add a little
[01:39:04]  more on top of that. Gotcha. Yeah. Yeah. Yeah. The form validation has to happen on the server too. Yeah. Oh, that's interesting. I
[01:39:13]  think it's a feature, not a bug because you know, you can do the, the, the, all the classic problem of like, I'm going to do client
[01:39:20]  side validation. Duplication. Validate it on the server. You know, you stay there, right? Yeah. You have to do it. You have to
[01:39:26]  do it twice. Yeah. Yeah. It makes sense to me. Also, thank you. Uh, Wesley coders subscribe to tier one. Um, thank you very much
[01:39:32] . Okay. So, um, so we've got this form. It's got it. It's got a, you know, a change event named validate. Um
[01:39:41] , and then we've got, you know, two inputs here. One is, uh, the, the, uh, name and then one is the author. Right.
[01:39:50]  And we've got a couple of other Phoenix things here. This Phoenix debounce, um, just means it's not going to actually send the validate, uh, event unless
[01:39:57] , uh, you've not, you stopped typing for, you know, one second or whatever. Right. Right. So, uh, this, this cool. This
[01:40:06]  makes a ton of sense to me. Yeah. So let's start typing. It's been a second. Boom. It's, it, you know, wants to validate
[01:40:13]  that thing now, which tells me, well, it needs to be at least two characters. So I type again, and then it sends that event back up. Um,
[01:40:20]  nice. Okay. Sorry. So, uh, okay. Now that I see the view and I see all that, the valid, you're saying that it just, it
[01:40:27]  runs the same validation code, say like on submit as it does here. You just define what the validators are and it's like, yeah, this is odd.
[01:40:34]  And then here's, is there like a custom message? Sorry. Just sorry. Yeah. So that's the validate. Um, that's how, that's our valid
[01:40:41] ations essentially. But like the, the string for the, like where you said like, this is not something. Where is that coming from? Yeah. So that comes
[01:40:48]  from, um, so God has some built in validation error messages. So it's using the default error messages from, from Zod. I can, I'll show
[01:40:57]  it, it probably makes sense to show you the change that implementation. But before I do that, let's just connect the events. Right? So validate again, comes through
[01:41:06]  the handle event, the handle event handler. Right? Yeah. And what it's doing is it's, it's using this change set. In fact, this change that
[01:41:16]  basically that, um, I've built before to pass in like the data from the event. Right. And then it's going to get back. That change that is
[01:41:25]  going to have embedded in it. Like the set of errors by like the shape of the objects attribute. Right. That makes sense. Yeah. It makes a ton of sense
[01:41:35] . Oh, I, I gotta give a quick couple more shout outs. Sorry. Pay attention to the stream. Thank you. Parasocial for, uh, gifting
[01:41:42] , uh, sub to Maple. And also, uh, Adria UI for gifting sub to Jordan. The Jordan Lorenz. So I can't say anything. It
[01:41:50] 's all good. Thank you so much for, for those gift subs coming in. Oh, and, uh, Julian and GD gifting five tier one subs.
[01:41:58]  Um, thank you very much. Um, this, this is awesome. Apparently we're on a hype train. Sweet. So, yeah. Okay. Thank you. We
[01:42:07]  got the validate events. Those are called, um, every time you, you know, uh, kind of change something on the form. And also, um, we
[01:42:15] 've got the save event. And this one just kind of does the same thing, except it, it makes it, it checks if the change set is valid. And if
[01:42:24]  it does, then it, you know, saves that book for my, my, my, um, uh, my database. Right. Um, and, and that's
[01:42:31]  kind of the, so I think what's interesting, I guess, you know, to me, what's interesting about this. Again, let's look at the HTML
[01:42:39] , I'm trying to get, I, it feels like a really easy and rich form, like experience. Right. Out of the box. You don't, you don
[01:42:48] 't need to like figure out what react form library you're going to install. And then like, you only have these two events that you have to handle, which are
[01:42:56] . Yeah. Do you, do you know what question I'm going to ask next? Oh, I please. No, I don't want it. Does this work when
[01:43:02]  the JavaScript is not loaded? No, nothing works when the JavaScript's loaded. I mean, it may, it may work in Phoenix land. I, you know. Yeah
[01:43:11] . I, I, I had to ask, the funniest thing is the, I was playing around with your hacker news demo. Um, and because I, I wanted to
[01:43:19] , I didn't test with JavaScript off, but I tested because I, whatever. Um, I tested with, um, I tested with, uh, the network off
[01:43:26] . Uh, once, once I was inside a comment to see if I could compress the comments and I could, and I was like, okay, something more is going on
[01:43:34]  here than I thought. But we can go, we can get there in a, in a second. It's fine. I just, I, I was. Will you
[01:43:38]  like open and close the comments? Yeah. Yeah. That's a good example of the JS commands. That's. Yeah. But we, we can, we can go
[01:43:45]  back to that in a second. Let's. Is there anything else we should talk about forms? The reason I had to ask about progressive enhancement is because in JS land
[01:43:50] , that is like literally all everyone is talking about right now is progressive enhanced forms. It's so profoundly, uh, spanned out now that I had the creator of
[01:43:59]  Leptos on my stream, uh, Greg, and he actually showed progressive enhanced forms in WebAssembly. Um, so like, it was just, it's
[01:44:09] , it's, it's, it's such a silly thing. Cause like from a backend perspective, you're just like, yeah, form is a form. Um,
[01:44:16]  you know what I mean? Like, but it, it, it, it just, it's been like the, the, the cool buzz thing recently on JavaScript frameworks.
[01:44:24]  Like we just discovered that you can use HTML without JavaScript. Sorry. That's my, my funny comment here. That's awesome. Yeah. Well, that's where
[01:44:31]  I grew up in, you know, like, HTTP post-lamp, right? You're like, you are just like getting the data in and you've got to
[01:44:38]  do that. And the reason this kind of comes up in the question is because there's a certain amount of like the question around like, it's not about progressive enhancement.
[01:44:48]  It's about graceful degradation, as I've said before. It's about like what happens when things go wrong, right? This is one of the challenges with the
[01:44:57]  complexity of a lot of the abstractions we have. We lose the ability to just fall back to the way the stuff works. The fact that you're already using forms suggests
[01:45:06] , and it's a backend protocol, suggests to me that this probably actually would work. I haven't actually tested it, but like part of me suspects that the form,
[01:45:15]  oh, I guess, oh, I guess. It would be easier to make work, I think, because you still need a route, right? That's handling the
[01:45:23]  post at some, you know, at some path, right? Right now, my path is like nothing, but you would need something that is, you know, the path
[01:45:31]  where you want to post your books, right? Yeah, yeah, yeah. It's more about the handling on the server, right? Because right now, the forms
[01:45:42]  like got like probably some fancy Phoenix things, you know, like kind of in its, and that's how it knows how to wire up in the client. But like
[01:45:49] , the thing with Press of Enhanced Forms or Reason Remix and Stalk Kid and Solid Stardom, like kind of got all on that. Like the
[01:45:56]  big, all we had to do was just be able to handle like a redirect on the server, like, oh, this is coming from a form, you know, that
[01:46:04] 's not a JSON request, do the redirect. That was like the, the key piece of handling was the route was mirroring the routing on the server and the client
[01:46:13]  to handle both cases. So I don't, given that this is already kind of server oriented, I don't think it's actually that far of a stretch to figure out
[01:46:21]  how to make it handle the routing properly. Cool. Guys are talking about Rust again. Is there a live view Rust? This is, this is, Parasocial already
[01:46:31]  beat me to it. Well, I, I will say, I think that, I think that concept, right, is a valid one. So I don't know
[01:46:38]  if there's other, like, sort of like server compliant ports of, you know, of live view to other languages, you know, beyond live view JS. But like
[01:46:50] , this is a proof of concept that you could do a port of live view to Rust, if that makes sense. Yeah, yeah, no, that's, that's
[01:46:58] , that's cool. And the thing is, you're actually using the same client library. So the work, the work you have to do, is it actually was
[01:47:04]  your expertise in actually node, and like that side, rather than on the client's front end JavaScript is like, how can I port this Elixir Phoenix stuff over to
[01:47:13]  node? Exactly. That's, yeah. So maybe like, real quick, I'll show you the pub sub and we can, we can also look at the, the
[01:47:22]  hacker news one. Yeah. So I've got a pub sub just again, single process here. And you'll notice when, when I call save, if that,
[01:47:35]  if it's successful, then I'm going to, where did I do this? Oh, I'm going to broadcast that on this books. This is so pub sub
[01:47:44]  broadcast. It's just broadcasting an event on a pub sub, you know, topic, the topic is named books and then upgrade, you know, update the, or just
[01:47:55]  send this simple event. I could, I could pass whatever else I really wanted to. But what's interesting is if you, so I'll load a new tab here
[01:48:05]  and we'll, we'll open up a new session. And you can see I've already got, you know, obviously, let me break this over here so we can
[01:48:16]  see them both at the same time. So I've got, you know, the same data, which makes sense. It's already in the library or in the database
[01:48:22] . Right. And I'm like loading from the database, but if I hit checkout, you can see both sessions, right. Have get the same event. Yeah.
[01:48:34]  And this is kind of one of the interesting parts. I think also about live views. It makes, it makes it really easy to push events across session or across users or
[01:48:45]  whatever. It's just the model. It's the model. Yeah. So add another, you know, book, then it's automatically, you know, added to the
[01:48:55]  other, um, screen as well. Yeah, no, it's, I I've been playing with some web socket type examples recently, um, because, uh,
[01:49:03]  some, someone made, uh, a back, it was called convex. I saw it. Yeah. And then it's like a database that runs off like, uh,
[01:49:10]  streams and reactivity. Right. So like when you change one field in a database, they can communicate that API thing to the client, all in like, you know,
[01:49:18]  one thing. And they're like, this is really cool. Cause you know, database updates, push over web sockets and you get the client and you can re-
[01:49:24] render your components. But obviously when I saw that and, and when, and I went to speak at an event, uh, that was comment sponsored about solid and they
[01:49:30]  saw, and you could tell like the guy's eyes lit up. He's like, I gotta do this with solid because then the one database change could propagate the one change
[01:49:38]  to the client, which could propagate to the one reactive change that could go to the one node in the DOM with zero diffing. So they, they, they were
[01:49:44] , they were just like, you know, it was like their database field was connected directly to the one node in the DOM. And they were just like hyping about how
[01:49:52]  cool that was. But the thing is to do that took work. Like you had all these different pieces playing, you had to, you know, communicate that, connect that
[01:50:01]  to the solid, connect this to this, like, and do make the example. LiveU's data model is like, I mean, there's a small diff stage
[01:50:09]  in there, but like, it's, it's essentially just, that's just how it works. You just go in and be like, okay, I have some data
[01:50:16] . As long as someone else is connecting to the same source or whatever, they're going to see the same data. And because it's a web sock and it's all
[01:50:23]  wired by default, they're going to see those updates in real time too. It's interesting though, I guess, how do you, I guess there's gotta be
[01:50:30]  models about not showing those updates and like figuring out how to like do that kind of stuff. You know, like the classic example on Twitter, the, you don't want
[01:50:37]  your feed to keep on updating, like all the time. You kind of like, there's a certain user affordances to allow them to trigger the feed update and stuff.
[01:50:45]  I imagine there's, there's stuff like, and that's just a common socket thing. How you build your aggregation and your message, like, you know,
[01:50:52]  like your, the events that you're pushing and, you know, what you want to show. Right. Like if you're like in Twitter, you're right. Like
[01:50:58]  if you sit there, it's not just like pushing things down your feed, right? It's like, oh, you've got 44 messages. To me, that's
[01:51:05]  just the, you know, an aggregation problem. You're, you're, you know, still listening to the same stream. You're just counting the events instead of
[01:51:13] , uh, instead of like, you know, pushing the full object upload or updates down. Um, and then with refresh, right. Then that event is like fetch
[01:51:21] ing all the data. But yeah, like, again, this is like, it's super simple. Live view perspective. So again, making sure. Yeah. I think
[01:51:32] , I think that's the biggest takeaway from this sort of thing in this model is that like, once you've decided that the server being staple is okay. Then like a
[01:51:44]  whole bunch of stuff just opens up. Like it's just like, it's easy, right? Like you don't, the other thing I'll say is like live
[01:51:51]  VJS and Phoenix, like you don't have to manage. You don't have to figure out how to connect to a socket. You don't need to figure out
[01:51:57]  like what your protocol is to like, you know, send events down. You know, you're, you're sort of like, like, you're like from a
[01:52:05]  developer experience standpoint, you're implementing Mount handle event. You have a couple of, you know, these helper, you know, pockets. You can like listen to it
[01:52:14] . It's, it's funny. The chat's talking a lot about scale, right? And you start, you start thinking about this from that perspective. And I
[01:52:22] , I, I mean, the pieces add up because you start going, okay, well, stateful server that could be expensive. Um, that could be, you know
[01:52:30] , I guess if you were in your head going, I'm going to pick language framework technology to build the stateful server on that can handle tons of concurrent stuff.
[01:52:42]  errors area, uh, without any errors, be able to like handle memory. Well, be able to just have no problem having the state of thousands of things all at the
[01:52:52]  same time. What language would you choose or the technology you would choose? And now I would say a year ago, I, I, I would have been like, well
[01:53:00] , you probably want to use Elixir. And like after writing go for a year, I would say go. Okay. So that, and that's, that's
[01:53:07]  sort of the, the, the question, right? Like, cause Elixir obviously what I was getting to at will probably at the time would have been the obvious
[01:53:14]  choice. You, you always hear that stories about like WhatsApp and how they scale on, on, on, um, Erlang and like, like the, that, the
[01:53:23]  core base of that VM and being like how it's built. Um, there's no arguing. I, I like, there's always people who come up on Twitter and
[01:53:30]  like, yeah, but the theme is the best technology ever. I'm like, I don't disagree. It just so happens that, you know, you have to write
[01:53:37]  Elixir or Erlang. Right. Right. But this, describing this helps me at least understand where, where that, um, like thinking or why this like
[01:53:49]  alignment exists. Because I, I have to admit like node probably isn't my first choice, but the funniest for, for this scenario, but the funniest thing is it's
[01:53:58]  JavaScript. So like it's, it's, it's, it's, this is, I already like X amount more accessible to everyone. That's the thing.
[01:54:07]  Right. So if you look at the, the, I don't know, the stack overflow, like language, you know, usage numbers, right? Like the,
[01:54:13]  the number of people writing JavaScript, right? Is way is like, I forget the numbers, but it's like 60% of like developers and the number of people writing,
[01:54:23]  you know, Elixir. It was just a great language. There's no knock on Elixir. Right. Um, or anything about the Elixir
[01:54:29] , uh, you know, community. I think people are awesome there. Um, but it's just a, it's like in the single digit percentages. Right.
[01:54:38]  And so part of my goal here with live view was like, Hey, here's what, here's like a really interesting, you know, approach to building reactive applications with
[01:54:48]  a server based framework in a way that I think is like really easy to sort of make sense of. Um, and you know, am I claiming that it's more perform
[01:54:59] ant than beam or, you know, or like, or no, of course not, you know, like I also am just one person who hasn't optimized anything.
[01:55:06]  Right. Um, and so I think it'd be interesting to see, you know, where we go. And I think the last point is most applications don't have millions
[01:55:14]  of users. Right. Um, and so I think like, yes, WhatsApp used Erlang and they had, you know, I don't know, whatever building users.
[01:55:23]  Right. Um, but like most applications and, and, and even like getting started, right. Like you're just looking for productivity. Like how do I get this
[01:55:34]  idea from this concept to my users, you know, in the fastest way with, you know, the least complexity and whatever, you know, other goals you have.
[01:55:44]  So I think like, to me, I look at like, you know, again, part of my, my thought process is like, this is a framework. There's
[01:55:52]  an approach, a paradigm that I think makes a ton of sense. You know, is it, is it like Twitter scalable? You know, no. Right. Um
[01:56:00] , but like you would have to have a lot of success to be Twitter's, you know, to need to be Twitter scalable and you're going to need to connect to
[01:56:10]  everything. You know? Um, yeah. So anyway, that's my, yeah. Yeah. Just to attack, uh, just, I'm going to address a
[01:56:18]  few comments in chat. People are asking about wasm and stuff and like improving like bun and stuff. And yeah, I mean, there's potential here. I, someone
[01:56:26] , as a bun was mentioned earlier and then, um, I have, I have run, uh, this on fun, by the way, uh, live EJS
[01:56:33] . So it does work on, but I haven't done it in a while, but it's, it works. Right. Yeah. And, uh, yeah,
[01:56:40]  no, that's cool. Um, it's always cool to see, like when you do that first bun thing, some, uh, there was a tweet. Uh,
[01:56:46]  oh, it's pro I don't even know it's from this week. I probably lost it in the ether somewhere where someone took solids, uh, uh, start and
[01:56:56]  ran it on bun. And it was like, it could handle three times more requests or something. It was like three times. It was like, like significant improvement.
[01:57:05]  Um, that being said, if you talk to people talking about Leptos, um, I mean, we, we, we, we gotta do a bit better than
[01:57:12]  that. Like on the rust, the Leptos is like solid ported to rust. They, they were seeing that they had, um, uh, 30 X over
[01:57:21]  react with, with Leptos on the server. And I was like, okay. And then I was like trying to figure out the math there. Like if solid
[01:57:28]  is a close to 10 times react and, and bun is three times snowed. Do we almost get there? And the answer is probably no, because performance doesn't scale
[01:57:41]  linearly. Anyone will tell you this. You just hit the next bottleneck. But like, that's, that's the armchair math thinking if the answer is no
[01:57:50] , but like, can you get there? I don't know. Um, it's, it's funny. Yeah. Yeah. Yeah. Again, I guess my
[01:57:58] , like, just my, my goal. And again, I've only, I've only, you know, I just learned about Elixir. Like literally this time
[01:58:06]  last year, right now Phoenix. And you know, this is a one man show, right? Like no one else has committed to this, uh, to this library.
[01:58:14]  Um, and so my first goal is just like, how do I get this to be protocol compliant? How do I get this to be, you know, as implemented
[01:58:22] , um, or like, you know, as, as close to Phoenix, a live view as possible. Um, so. Yeah. This is, this was mentioned.
[01:58:32]  Someone can definitely start with live view. Yes. And if they hit scaling, she's potentially moved to Phoenix as Donnie did a nice job porting the model abstraction to
[01:58:39]  JavaScript. There you go. Compliments. Appreciate that. Yeah. All right. So, okay. You guys ready to look at hacker news? Everyone want to look at
[01:58:47]  hacker news? It's a hacker news time. As you can tell you, which demo do you grab the Astro or the quick demo? I can tell because of
[01:58:57]  the color of, because the color of the top bar, because I give every framework in my hacker news examples, um, uh, different colors. And I was like
[01:59:08] , that that's like the dead giveaway, which was a base. Yeah. I forget how I came across it. Someone was saying, you know, you did these,
[01:59:15]  you would like reimplement, you know, a hacker news demo in these different, you know, languages. Um, and I was like, well, that seems like
[01:59:23]  an interesting live UJ. I will, I will say like, it's not the perfect live UJS demo because of like, there's no forms. There's
[01:59:30]  no, like, I didn't show you image uploads. Can I show you image uploads real quick? Okay. Okay. Show me image uploads. Real quick. We'll
[01:59:38]  have to wait for hacker news. Um, okay. So this is another cool thing. So Phoenix also has, um, I think great support, uh, or,
[01:59:50]  you know, live UJS great support for photos. This is like directly out of the box. Um, so you've got, you know, uh, I probably
[02:00:00]  shouldn't do up. Let's see what I've got. Just, uh, that's, um, I've got some cats in there. Here we go. Um
[02:00:07] , all right. So, you know, I, I just, I just clicked on a cat, right? It shows me a preview of the image. You know
[02:00:16] , how much is uploaded. I can like delete it if I want. Yeah. Right. I can choose multiple cats. Um, and it'll show me previous for all
[02:00:24]  of them. And then, uh, I can also drag and drop. So let's, let's do that. Um, these cats are winning over the chat, by
[02:00:31]  the way. Yeah. Our cats always win over chats. Um, all right, let's do one more cat here. Uh, let's try another cat. All
[02:00:39]  right. Oh, too large. Okay. So, you know, automatically runs, uh, run some, some validation for me. Too many files. Uh, right.
[02:00:50]  So I've got too many cats. Oh, I've got to delete this dog. Um, so anyway, I, I wanted to show you sort of like out of
[02:00:56]  the box, like this for rich file, like image upload preview. And then I'll, I'll, um, fill out my cats, but a group name and
[02:01:05]  then hit upload. Um, and this was really fast cause it's local, but it also like updates the progress of your uploads automatically. And then what is this like
[02:01:20] , what are we showing here on the code side? Is this a, is this a specialized component or is this code? Um, so that's okay. All right.
[02:01:32]  So. All right. So here's the HTML for that. Right. Gotcha. Gotcha. There's some sub components in here too, but like, you know,
[02:01:42]  basically I've got this live image preview. Right. So, uh, I'm sorry, that's, that's actually a sub component. Let me show you the full
[02:01:50] , the full, uh, like form and stuff. So first of all, you got this form, uh, here, right. It's got like, again, the
[02:01:59]  same validate and save handler. Uh, we've got the name and then these are the image upload part. So. Oh, okay. You just add this Phoenix drop
[02:02:10]  target, um, attribute. Yeah. And you know, there's some setup here, which we can, we can talk about, but basically you're, let's,
[02:02:17]  let's talk about it. Um, so. Okay. So the input elements are wrapped in something too. I, I saw that earlier, like, cause these are imp
[02:02:25] . Yeah. Okay. So first, first step is like, we, we need to validate or, you know, sort of set up the constraint about what we want to
[02:02:32]  allow being uploaded. Right? So we can, we can say, all right, we want only allow Gs, JPEGs, blah, blah, blah,
[02:02:39]  blah. The number of entries, like the number of files that we can upload. Yeah. Three. And that's kind of file size maxes in this case five gig
[02:02:46] abyte. So you get these like really easy. So you're like, all right, configure what you want to allow and like name it, um, to be uploaded.
[02:02:53]  And then on the, when you're actually, um, yeah, here we go, like setting up the form itself. You're kind of referencing that photos, that
[02:03:04]  thing that you named before. And so you say, okay, here's my, here's my drag and drop target. It's this, the ref to this,
[02:03:10]  um, photo config that I set up this live file. I'm putting, it's just a tag that I created that, you know, um, it's just the
[02:03:18]  HTML that like sets the right attributes. Um, but you basically, again, just pass in the ref that you configured above. Um, and that gets passed into this
[02:03:27]  render function for you, which I can show, um, and reuse the like settings you already defined above. Like, oh, I, I only want to add up to
[02:03:35] , you know, what's my max entry. Oh, it's, it's three. And what's my, you know, um, kind of max upload size.
[02:03:43]  Right. I just references that again, I already set up. So like right away you have this, like, I mean, this is whatever. Um, whatever heat
[02:03:51]  lines or something of like this drag and drop, you know, um, image, uh, upload with constructs already applied to it. Okay. Um, and then this
[02:04:04]  is the, like the render the entries. So yeah. Map function. Sort of like choose. Yeah. Um, so I'm just gonna, I have just another function
[02:04:12]  to find, which gets an entry and then displays, um, you know, each row of image that you're uploading. It's a, it automatically has the live
[02:04:20]  image preview tag built in. Uh, this is the, like, as, as the file is uploaded, you know, again, it went, went by really fast,
[02:04:27]  but it'll actually, um, pass back. Okay. Here's my question. Yeah. Okay. Okay. Sorry. Okay. I got you. I got, never
[02:04:40] mind. The progress is an HTML element in the, the, okay. Yeah, that's fine. At first I was thinking, at first I was looking for a progress
[02:04:45]  component, but that would just be a function call with passing whatever the hell you wanted to. Okay. Yep. So I wanted to just show this because I think it
[02:04:51] 's like, you know, this is like a typical thing that you do in applications. Everybody uploads images. Yeah. And it's like, it can be hard, um
[02:05:01] , to, to deal with that. And, and I think again, one of the benefits of like, you're already on the server. Um, and Phoenix makes
[02:05:08]  it, you know, there's a bunch of like things that are built in, including live image preview, drag and drop, um, progress updates that you get for free
[02:05:19] . Like you don't have to re-implement this, um, or figure out how to implement this. Um, or figure out how to implement this. It
[02:05:23] 's like built into the framework. Right. So yeah. Yeah. Cause like the Phoenix drop target thing, that is like a Phoenix directive, like something that's built into
[02:05:31]  the framework. Exactly. That comes with the, you know, client side library itself. Yeah. Um, so anyway, I just wanted to show that real quick.
[02:05:40]  I thought that was, I don't know. I, I love the, I love the ease at which you can upload images in, in, uh, you know,
[02:05:47]  with the next slide view. Okay. So here's, yeah, here's hacking. Um, yeah. Just second. Give me two, give me two, two,
[02:05:56]  two seconds. I just need to do one thing. Um, I need to put a banner up. One thing we are going to do hacker news, which I'm
[02:06:08]  excited about. And I've drank all my orange juice. So less excited about that. Yeah. My, my kids are going to, um, probably come home in a
[02:06:18]  minute or two and make the dog bark. So I'll hit myself when that happens. All right. Um, yeah. So let's, let's look at hacker news
[02:06:27]  here. Cool. Um, okay. Um, okay. So this is your app. So I'm, I'm like, uh, you'd correct me, like
[02:06:36] , or tell me what, you know. Side side note. This came in, uh, creator of leptos. I was talking about before in the rust thing.
[02:06:43]  I've had multiple people ask me whether we have a live view equivalent of rust, but don't know the model. It's been great to learn some more. So
[02:06:49]  yeah, there you go. We might. Happy to talk more with folks. Like I, I'm probably the only one beyond the Phoenix folks who know the actual protocol.
[02:06:59]  Um, you know, like what goes back and forth over the wire. So happy to talk to folks about it. Um, in fact, like I think that that
[02:07:06]  would be really, really great. I think if there were other language implementations beyond, you know, TypeScript and beyond Elixir, I think that would actually be
[02:07:15]  great for the, the Phoenix folks as well. Um, okay. So, um, this, yeah, this is, uh, this is the thing. I,
[02:07:23]  you know, I, I took Ryan's, um, hacker news clone from whatever framework imported to live view. It's, uh, you know, it's sort of
[02:07:31]  obvious. There's like the hacker news, um, that's like home. There's like new, um, you know, stories that get submitted. There's different types
[02:07:40]  of stories. There's shows and asks. Yeah. Right. Um, you, you know what, let's, let's look at the code for a minute.
[02:07:46]  And then let me drive on the demo after that. So let's, let's talk the code and then I'll, then I'll do my usual look analysis through the
[02:07:55] , the actual in browser version. Cause I believe I have your deployed version here. Uh, live view. Just dash HN clone dot fly dot dev. Yeah. Um
[02:08:02] , and that one might be an old, uh, version. There's also, um, stacklets of this. So out there. Yeah. Uh, anyway,
[02:08:14]  happy to, yeah, happy to let you drive. Um, but yeah, let's, let's look at the code first. So what goes into creating our hacker news
[02:08:22] ? Uh, example. Okay. So first are the routers or the, or the routes, right? So we've got, um, the index live view,
[02:08:29]  right? Which is just like slash, uh, then we've got this, uh, the set of, um, you know, types of stories. You can see,
[02:08:40]  then you've got like a, a story with an ID and item ID, right? Like you can see the details. Yeah. When you click on like a comments
[02:08:48] , that's the story slash ID. Um, and this version have my collapsible comments. Okay. Oh, great. They're on the, yeah. Sorry. Yeah
[02:08:59] . They're on that side. Yeah. I moved them around. I liked them better. Okay. Makes sense. There's less layout shift sort of anyway. Yeah.
[02:09:08]  Cool. Yeah. And so, so that's it. I mean, I guess, um, we can look at. Can, can we just look at one page
[02:09:14] ? Like the stories page is usually the one that we, we implement on stream every, every time. Yeah. Oh yeah. Let's look at the stories. We can
[02:09:22]  actually look at the, it's the stories and the story, but let's start with the stories. So, okay. So like, like, what happened here? Something
[02:09:32]  happened. Um, I don't know what happened there. I'm not going to do that right now. Okay. Okay. Okay. Um, this is, is
[02:09:43]  this what you want to look at this one? Uh, page. Yeah. Yeah. Yeah. Sorry. Someone mentions that. I mentioned this is on stream previously, uh
[02:09:53] , Dioxys, which is the, uh, which is a virtual DOM ish framework for rust actually did make, uh, something that's live view ask. It
[02:10:03] 's not the full Phoenix implementation, but that, that was their kind of motivation. I believe because they, they were, they were building a virtual DOM in rust for
[02:10:11]  this, for this reason, I think. Anyway. Yeah. Great. Um, do you want the like, or the, um, usually I start with the stories because
[02:10:23]  it's just simpler page. Um, so yeah. Yeah. Yeah. Other than the data fetching, the data fetching is always a little bit more cause you
[02:10:31]  have to have the process of path params here. So that's why we start here. Okay. Yeah. So, um, it's a little hard to see.
[02:10:39]  So I've got, you know, the shape of my, you know, of this, like, you know, all the data that goes into this, right?
[02:10:45]  So it's a list of page and items. I've typed all this stuff, um, what page number on and the type of story. Yep. Um, and so
[02:10:53]  Mount is like very simple, right? It's like, okay, I'm going to pull, uh, in here I'm getting the params. Yep. Um
[02:11:03] , all right. I'm getting the params right from there. I'm going to pull the type out of the path params and then there's nothing. I'm
[02:11:11]  just going to default, um, to top. Yeah. To top. And then I'm going to set the, you know, items, um, unmount. I
[02:11:18]  ended up not loading the items here. I actually load them and handle params. So I mentioned this before. This is like. Right. another life cycle, um
[02:11:27] , uh, function. Right. And this is also where you handle the page parameters in terms of being able to do the pagination. Yeah. So, um, exactly
[02:11:38] . Cause like when you change like page N, it actually goes through handle params, not through amount. So that's what I need to like do that here. Um
[02:11:46] , so again, I'm just going to get like the story type. Um, if it's, you know, not there, I'm going to set it to top
[02:11:52] , which I set up here. Right. Uh, and then I'm going to query the items. Yeah. This is where I think implementation like this, I think
[02:12:02]  we were, I was, I remember like on Twitter chatting with somebody. Oh, right. Right. I really, I re implemented like this to go directly to the
[02:12:12]  Firebase database. Um, right, right, right. Yeah. I, I, I, I'd, I'd cut that piece out because it was absolutely stupid to do
[02:12:20]  it client side. Like in the SSR frameworks, uh, like solid started and SvelteKit and next or whatever. It was fine. But the problem was
[02:12:30]  like, I started this from a place of doing pure clients. So it's single page apps to comparing it to SSR, comparing it to all of them. And
[02:12:37]  the Firebase, uh, API to get the data on like one of these pages is like dozens of requests. It was just, it was just really dumb from like, you
[02:12:47] 'd never write that on a client side. You'd put that behind an API. Yeah. Yeah. And in my case, I'm already on the server, right
[02:12:54] ? So I actually wanted to take advantage of, so if we look at this, one of the things I wanted to take advantage of was, um, the subscriptions, um
[02:13:05] , to, where is it? Um, so, so actually, uh, we will see this in a minute, but like, I actually, you can subscribe to updates
[02:13:18] . Um, you know, items in Firebase and then it'll, you know, it'll just like flow them through this on, on value. Gotcha. And so
[02:13:29]  then basically what I ended up doing, and you might've seen like some of the numbers here, some of the comment, um, parts be highlighted. So basically like when
[02:13:37]  one of these number counts, the comment counts changes, I just actually send an event to the clients and it highlights, um, that, you know, you know,
[02:13:48]  whatever count, uh, score or count or comment count automatically. Yeah. That's why I ended up like implementing it. Um, part of where I wanted, cause I
[02:13:58]  wanted to show like, Hey, you can also just like broadcast updates really easily. Um, so anyway, I, I get all the items, um, for that page
[02:14:07]  and story type. Um, I subscribe to them here. Right. And, you know, set that on the socket. And then this is the render. Right.
[02:14:14]  So I've got like the navigation. Yeah. Right. That just floats that. Um, and then, um, this part is, um, I guess it's
[02:14:25]  this part too. Yeah. Interesting. Okay. Yeah. Cause like the nav could have gone in the HTML wrapper for this app probably, but. Yeah. You're
[02:14:37]  probably right. I, yeah. And I like part of this was like, I was implementing this as I was like learning the structure of the, you know, yeah.
[02:14:45]  Yeah. Yeah. It makes sense. This, this, this, and then items and then items. Okay. Yeah. This one makes sense to me. And the
[02:14:53]  interesting cool part was you mentioned you did the subscriptions. So this lets it update live, but otherwise structurally very similar kind of setup. The data loading is, this is
[02:15:02]  the interesting part for this one. Um, how about, uh, I guess, I guess all these, like, these are kind of like, you know, just render
[02:15:10]  components. Right. Yeah. Just like make it easier to render, you know, some of these things. Yep. Yeah. Yeah. These, these patch or redirect
[02:15:20]  end up being, um, live. Like you were talking about like not really. Right. Nice. Nice. So this is all doing all the, yeah, that's
[02:15:29]  what I noticed earlier that this was doing all the client style hybrid routing. I like to call it where it's client triggered and kind of managed, but the new contents rendered
[02:15:39]  on the server. Exactly. Yeah. Okay. Okay. That's cool. Yeah. Can we look at the, the, the, the comments page? Cause I
[02:15:50]  want to see how we do the, the compression of the comments, um, specifically. Oh, like the. Story. Yeah. The story slash ID page, whatever that
[02:16:00]  one is. Yeah. This is, so this is this, this is that page. Um, so, uh, let's close this again. And I think,
[02:16:08]  I think it's actually in a like sub component, but we'll, we'll do the list. So amount we're like, you know, getting the ID of the
[02:16:14]  item, right? So if we, uh, so if we click on comments, you, you know, this is the ID coming in on that, on that route
[02:16:22] . Yep. Params. Uh, and then we're changing the title. The title it's hard to see here, but you've got analog chess, like the
[02:16:29]  title. Right. Here. We're updating the title based on the title. Um, and then, you know, subscribing to updates. So these, these are actually
[02:16:41]  also like the store and the comments will, you know, will be highlighted if they change. Yep. Oh, there you go. Yeah. Yeah. So the points just
[02:16:51]  went up. Yeah. Yeah. So, um, and then that's where, that's what the handle info does. It's like getting subscription calls back and then it
[02:16:58] 's, uh, it's just updating, you know, it's like getting the item again. So the subscription just gives you the, the ID. Yeah. Um,
[02:17:05]  and so that needs to look it back up and then update the socket, you know, the context with the new item. Very nice. Okay. And that's,
[02:17:13]  that's kind of it. I think like, oh yeah, based on the type, there's different. Um, I have like different. Yeah. Yeah. Yeah.
[02:17:21]  There are slight differences on how they're handled. Um, and you, in this case, you just, you just, you just made a different component for each. Yeah
[02:17:31] . Yeah. Yeah. So this is the item component, right? Which is like rendering. This makes a lot of sense to me from that perspective. one of the
[02:17:37]  things that I did with a lot of my implications, cause I kind of copied them from my original. I, I ported view to solid and then the other ones from
[02:17:44]  solid back to react in that is that solid, you want to reuse the DOM elements as much as possible. So everything is like the, the, we push the decision
[02:17:53]  points as low down as possible because then we do the least amount of work. Um, but that w yeah, that'd be a bit of a difference there. And then
[02:18:01]  the comments on the map and then the toggle state stuff where. Right. So the toggle state stuff is named comment. Yeah. Yeah. And it's pretty straightforward.
[02:18:10]  Right. So, uh, we basically, this is sort of like, I guess this whole piece of the comment part. Oh, so we've got nice. So there
[02:18:22] 's. Yeah. Phoenix click parts, right. And we're just using these JS commands to like, you know, open and hide different, you know, kind of.
[02:18:30]  Right. But the thing is like, I was part, like when you showed the command before, I was like thinking in my head, I'm like, I picture
[02:18:34]  you putting like some kind of string and then I'm like, how are you encoding it? But you haven't, you have a cursor based API here where you can actually
[02:18:40]  describe a series or sequence of actions, um, by chaining them. Correct. It's chainable and yeah. Fluent API, whatever you want to call it.
[02:18:50]  So, and then because it runs on the server, whatever this outputs just gets serialized into the, to, to, to probably some kind of identifier or no,
[02:18:59]  no, actually the code needs to be generated. So, because it's client side, so this gets serialized into some kind of set of instructions that the client side thing
[02:19:07]  is able to like read and then go like, okay, when this happens, run the code that, that, that relates to the set of instructions. Exactly. So this
[02:19:16]  is it. So I'm not, you can set like optionally set like transition classes on, on some of these, um, you know, commands. So you
[02:19:24]  can see like a bunch of transition and D arrays. Yeah. But yeah, basically this, you know, remove class ends up compiling like here, like on the server
[02:19:36] , I turned into the, the client protocol that is, that, you know, they understand that the Phoenix client understands. Yeah. It's like on remove click or on
[02:19:46] , you know, click, remove this class on this element, right? Yeah. Yeah. Over 200 milliseconds. Yeah. And then, uh, then like hide this
[02:19:56]  block, right? Yeah. If you had transition, it would actually like, you know, do some cool stuff. But I didn't, I didn't have that.
[02:20:06]  Yeah. No, that, that makes sense to me. And what's cool about this, as I said, there, there, there is very little consideration in how
[02:20:13]  this, this just works. And then you just, you, you just gotta be like, okay. Um, I want this to like, there, there's consideration to
[02:20:21]  like, this is going to be on the client. I'm going to do a command, but structurally you just, you've created your one chunk of markup.
[02:20:28]  And now instead of calling an event handler, you, you kind of do this JS command. So while there is like two zones, they don't overlap, um,
[02:20:39]  which, which is key. Um, cause you, you could actually send, um, like theoretically you could actually send an event. Uh, what is it? I
[02:20:49]  think it's push. I want to say to, um, yeah. So this, the event to push up to the server. So you could actually send like, I
[02:20:57]  don't know, comments, you know, click or whatever you want. Right. Um, right. So what's interesting is you can like, now I've got like
[02:21:07] , or where to go. Right. Okay. Which is cool. And maybe this is like, what happens here? So this is actually a comment closed. Right.
[02:21:16]  So I could actually like, if I wanted to do something, you know, even though I'd like update, manipulate the client side dom, I could also send a server
[02:21:25]  event here that would, you know, could kick off some other thing that then could also apply changes. Right. Yeah. That makes sense. Yeah. It's closed the
[02:21:35]  loop. Um, so yeah, what I, what I meant though, is like the, the JS part in this, it lives within this binding. Yeah. And then
[02:21:41]  that's, that's about it. Like, it's like, you don't, you don't have to worry about zones. This is something that I think about
[02:21:46]  a lot of when I'm thinking about complexity of, of solutions. I actually think this is the way you showed the way they communicate the server is actually really, really quite
[02:21:53]  nice. Cause one of the challenges is I, and this one will not be obvious to people too much is like, I hit this with solid start a little bit because I
[02:22:03]  was looking at copying remixes, loader patterns. and the challenge there was the loaders always run on the server. That's like the pattern, but reactivity
[02:22:12]  is a client side and invalidation. Like if you want to choose whether or not to make the request in the first place, the client had to make that decision. Uh
[02:22:19] , with the way we're set up and the API just didn't really allow for it. And the options were to make a dedicated API now to like, do this
[02:22:28] , like, should it do this and make it like more complicated or, um, trying to find some other way so that you could indicate specific, you know, like,
[02:22:40]  Hey, this is server. Um, like within the same chain, this, this, this, this should be on the server. And this is the client part.
[02:22:46]  And that the, the, what I'm getting at here is like the, it involves kind of closing the loop going like, okay, client handles this much now back to
[02:22:54]  server. And that's, that's, that's, that's what we're seeing here actually very kind of similar, uh, because you have access to this thing at
[02:23:01]  any point can then send events back to the server. So yeah, no, that's, it's really nice. Somebody said in the comment, uh, Michael, um
[02:23:10] , I don't know, uh, something about, um, hooks. Right. And so this is, this is like a confusing, like cross, uh, language
[02:23:19]  kind of name, but there are things in Phoenix called hooks. Um, and Phoenix hooks actually are, they live, and I actually have one implemented in this. Uh,
[02:23:29]  they live in the client code. Um, and so this is actually how I'm highlighting, uh, uh, the, the change and like, they're, they're
[02:23:37]  they're nothing like forget anything about react hooks or any other. Yeah. Like they're called hooks, but that's where the, you know, that's where the
[02:23:46] , um, the name. That's funny. This, this actually reminds me of Marco widgets. Um, I, I, again, I've looked a lot of frameworks
[02:23:54] , Marco, before they went to the component model, they were server first, um, based on stream. It's what powers eBay, except you, you'd have
[02:24:02]  client widgets like that where they were classes with a couple of life cycle functions that, yeah. But generally you wouldn't be writing like declarative code in that part.
[02:24:11]  You'd be writing like this where it's like almost J query ask where you have like, yeah. This is my highlight. Yeah. Implementation. Right. So
[02:24:20]  I'm just like changing the background from yellow to transparent over two seconds. And this is like, and so the way hooks work and there's, you know, like we
[02:24:29] , I, I support hooks and you can push events to hooks and vice versa. Um, is that you, uh, you basically annotate your elements. So where
[02:24:39]  are we in comment? Um, where am I? Oh, it's not uncommon. It's an item, I think. So here's, here it is right here
[02:24:47] . Um, so the, the score, right. It, when it, when it's updated, the way it gets updated is I just annotated with this, with
[02:24:55]  this hook name, but how does the hook know to run? Sorry. That's the piece, right? Like before update of what? Update, update of element,
[02:25:04]  update of. Yeah. So, um, this, the way this part of it works is like when you're, when the Dom is being applied or when the change is
[02:25:13]  being applied to the element, there's, there's various, um, there's various other life cycle methods, but in this case, it's like, okay, I
[02:25:21]  know my, like Phoenix knows, or, you know, this front Phoenix front end knows that this element is going to change. So I want to run something before that
[02:25:30]  change happens. And I want to run something when that change happens. Okay. So it's, it's, it's, it's element granularity way. And so
[02:25:36]  like if, if the attributes on the element change, then that, uh, is there anything to listen to children or similar kind of. Um, I, I haven
[02:25:49] 't, I haven't explored this API. I would say significantly. Cause partly because like, I think it's a weird, I think you were saying before, like,
[02:25:56]  you, you end up having the context, you know, switch from. Pretty hard. Yeah. About like all the, everything in, in server, you know, land
[02:26:04]  to like, wait, I need to think about something in client land now and how those interact. Right. And declarative to very, very imperative like style. Yes
[02:26:13] . So I, I don't, I would say I'm like, you know, I, I've like played around with enough to be dangerous and like, I've
[02:26:20]  implemented a handful of hooks. Like, uh, I've got, uh, to do MVC implementation of, you know, live VJS. And like,
[02:26:28]  one of the things that to do MVC is like, you double click on a, to do to, to like edit it. Yeah. Double click. Isn't supported
[02:26:36]  as a Phoenix, like annotation or like event, uh, you know, um, out of the, out of the box. So I implemented a double click. Okay.
[02:26:44]  So that, you know, I can, um, you know, sort of, I, I could make it work, um, based on the MVC to do
[02:26:50]  MVC, you know, edit, edit, um, kind of requirements. Yeah. No, that, that makes sense to me. Okay. No, that that's
[02:26:58] , that's, that's definitely cool. Um, I'm thinking there's a ton else I want to see from the sample. Can I play around with the example?
[02:27:04]  Yeah. I'm just gonna, I'm just gonna swap this up. Sorry. So this, this is our hacker news demo, right? I guess the first thing I
[02:27:12]  always do every time. And I'll just say, this is like an old, I haven't, I've redeployed this probably since, I don't know
[02:27:18] , like the first time I was playing with it. So it's probably. Yeah. I mean, this is what I got right now. The reason on the, the
[02:27:25]  other thing is I like the stack blitz, like add stuff when you're in the preview window. Like I, I'd rather like, if possible, have a pre
[02:27:32]  like a clean preview. And that means that I need to not be here. I need to be in an incognito window. Cause so just so I can see
[02:27:41]  it. I like, yeah. So there we go. Okay. And what am I looking here? Is that the, that's the progress bar here? Is that the
[02:27:51] , is that the browsers? I'm not used to it being that color. Anyways, it's sticking out to me. It's it's in the client code. It
[02:27:57] 's actually, I think it's in progress or one of the other. Part of part of that, it shows you when the socket is fully loaded. So it's
[02:28:06]  sort of like a user, you know, element to like, I don't know, show you. One thing that I'm going to tell everyone right now, just in
[02:28:15]  case they're, they're interested. I'm not going to run page speed insights. I've been having a terrible time, especially on stream of getting consistent results and stuff
[02:28:23] , not timing out with me. Something's happened in the last year since I used to like do this all the time. Even since the summer, even in the summer
[02:28:31] , you could run it a few times and get consistent stores. I never seem to be able to do it on stream anymore. Um, I did run this on page speed
[02:28:39] , just out of curiosity. And the, I ran what we call the, the death page, the one with like a thousands of items in it. And I did the
[02:28:49]  whole thing and yeah, the performance here was good. It was the same as Marco quick, all the fast partial hydrated, like super advanced ones, you know, absolutely
[02:28:59]  decimating all the single page app frameworks. Um, and you know, like, you know, the, the remixes, the spout kits, um, solid
[02:29:07]  start normal mode, you know, like the, they were all getting their typical, you know, forties to fifties. Um, on the death, on
[02:29:16]  the death page, uh, this live view example was in the eighties up with Astro Marco, um, quick solid start islands. Like all the, like the partial
[02:29:27]  hydrated things, which as I said, I use this mostly for categorization. Um, it's not a good test to differentiate between like things that do well already.
[02:29:38]  Um, like someone once came to me and they're like, look, I found a story that had even more. Cause I think that one has like 1400 comments.
[02:29:45]  Someone found a story that had like 10,000 comments. And I was just like, okay, I mean, okay. Like we've, we've, we're,
[02:29:53]  we've kind of gone found it, but yes. But the interesting thing I want to point out to you knowing that is just a good indication on like how little or
[02:30:01]  what not the bundle size matters on that side. Uh, this, this one's a 40, 43 kilobytes. Um, gzipped, uh, I believe
[02:30:09] , uh, yeah. What do we got here? Get gzipped. Yeah. Um, gzipped and minified, hopefully. Yeah. Yeah. Okay.
[02:30:19]  Yeah. That looks good. Um, so just kind of like on the ballpark, the size of the code in this range didn't actually matter that much. Uh
[02:30:26] , just pointing out to anyone cause coincidentally react is 43 kilobytes. Um, just, just, just out of thing. Next is bigger. Next is like 70
[02:30:36]  kilobytes. It's only at a certain range that you start noticing that hit. Uh, I, I often say the thing at under a 20 kilobytes,
[02:30:43]  you're never going to notice a difference. I don't know if 40, you might know it's a little difference, but minor it's, it's, it's
[02:30:47] , it's, it's after that range that the bundle size stuff is going to matter. As I said, I'm not going to run that again, but, uh
[02:30:54] , in. Uh, in this, once you have this bundle here, you have everything you need. And yeah, we got the live pagination working. Um,
[02:31:01]  I'm kind of curious just, uh, just on, I, I do want to profile this for a minute. Cause I want to look at the JavaScript execution and like
[02:31:12]  how that runs just, just so that I can like see, um, what happens when I refresh this page. Um, and understand what's like where the work is
[02:31:22]  going. Just like what's a typical page load scenario look like this. And I'm going to run it one more time. Cause I always run it twice so that I
[02:31:32] , that's just what I do. Okay. Okay. So pretty quick response here. We're getting our first paint around two 31. I imagine this is full server
[02:31:42]  rendered. Um, there's no, uh, there's basically no overhead, uh, uh, in terms of that part of it. Okay. I guess I can
[02:31:55] 't see it. Uh, the responses are wait for response, right? Like there's the, the, we're not doing streaming if I'm correct. Let me look
[02:32:02]  at the network. Let's kind of look at the document. We'll get, we'll get shipped in that initial response. We have this, some page setup stuff,
[02:32:14]  header, header, bunch of main story, a bunch of comments, nothing special here. Yeah. Like, I mean, I can probably look at the response timing to
[02:32:25]  tell me this as well. Um, but yeah, I just, yeah. Right. So the reason I was asking is it's, it's, it's sometimes hard
[02:32:35]  to tell us what's in local networks, but the, you notice how this started fetching before the HTML finished processing. Sometimes that's a good indicator of streaming. Sometimes
[02:32:46]  it's not. That's why I was kind of asking the question, um, in terms of, uh, timing. Cause like it was streaming. You can,
[02:32:54]  the browser starts getting the information and before it waits, before the data gets matched. I mean, it could be a lie. It could be a fly. This could be
[02:33:01] , I could be a fly thing. Um, but then. Right. I don't know. Yeah. Looking at the response. I, I, I, at
[02:33:08]  minimum, I'm not seeing anything that suggests like out of order streaming. Um, this, this, if, if it was streamed, it would be in order,
[02:33:14]  which I don't think makes much sense, uh, given the type, the way the views are declaratively expressed via, uh, tag template literal. So I think
[02:33:22] , I think this is not a streaming consideration, which means the, the, the performance response here is actually, it's pretty good. Um, streaming sometimes can edge that
[02:33:31]  up a bit. So here we have a bit of, uh, event page hide. Interesting. I wonder if it does something for CSS purposes. I wonder what that
[02:33:42]  is. Hmm. Okay. Let's keep on going. Load our, load our JavaScript and our CSS. Then we have our paint events, layout task. And then this
[02:33:55]  is probably, I don't know what triggers this. I guess that's might be interesting to see, but this is our, um, cause we, we're all painted
[02:34:06]  at this point. So this is like our hydration, so to speak, um, which isn't a bad period. It's only, you guys have seen this.
[02:34:14]  It's five milliseconds. This is very similar locally to what I see when we, I do frameworks like quick. Um, uh, and then, yeah, to, to
[02:34:26] , to, to execute. So we've got a bunch of little chunks here, anonymous connect connect. So this is all the, probably the web socket set up communication piece
[02:34:36] . Initially. And then I had one more one at the end here. Not sure what that is. What is it? Compiled code. Yeah. And they never
[02:34:47]  tell you anything interesting. Um, because they're just, it's compiled code. And then this anonymous show loader show loader. So, so this is,
[02:35:00]  this is probably that, that progress bar that we were seeing across the top actually. Okay. Okay. And then out here is where there's a heartbeat, right?
[02:35:13]  Yep. So at some point after maybe starting about half a second later, we just can get into this regular heartbeat. Um, so to speak. Oh, you mean
[02:35:24]  from the, on the client side? Yeah. I don't know. Yeah. Yeah. Yeah. Show append child progress. Interesting. The rest of them were might
[02:35:35]  be the progress bar. Yeah. Interesting. And then, yeah, each of these is just, most of them are very small. They're just kind of little like
[02:35:45]  progress, progress. Oh, maybe, maybe this whole thing is the progress bar. Yeah. Exactly. That's what I think it is. It's like. Oh,
[02:35:54]  interesting. Yeah. As it's connecting to the socket. So that runs basically as the page, when the page loads, then when the, you know, connection is popping
[02:36:04]  to the socket. Yeah. You're right. Cause it just, it just finishes after that point. Cause if there was a heartbeat, it wouldn't be that frequent.
[02:36:10]  The heartbeat happens every 30 seconds. Like, yeah, yeah, yeah. Yeah. Okay. Yeah. Okay. So this, yeah, this is the, and this
[02:36:18]  is basically the end of our load here. So this, this progress bar, we can kind of ignore it. It was just for like, no, this is just for
[02:36:24]  visual thing, right? Like the. Yeah. Okay. Interesting. Okay. Yeah. This just gives me a helpful idea of like what actually happens, including the timing.
[02:36:36]  Um, I feel like this is when most of the work happens after the initial JavaScript code, this five seconds is, I like to call it kind of like the hydration
[02:36:45]  time, right? Cause you can take something kind of like, what is it? Let's, uh, what is it? Quick city, how can we use damage?
[02:36:53]  Let's do that. Take the same story just so we can kind of see what, you see the streaming there. Um, but just, just kind of get an
[02:37:09]  idea here of the load profile here. All right. Yeah. And the cool thing. Yeah. So actually do, do, do, do, do, do. Uh
[02:37:22] , where's the JavaScript finished loading event. So you can see, see the difference that, yeah. See, you can see the difference of streaming here, like where this
[02:37:31]  kind of comes in. Hmm. Yeah. Right. Yeah. Yeah. Um, but then, but interestingly enough, the page load actually took, um, I mean
[02:37:46]  this one, do you know what the problem is? We can't even compare these between the time that we loaded the page. It's gone from 27 comments to 123 comments
[02:37:54] . Whoa. So the story's apparently hot. Um, so that's not that that's, that's, uh, okay. So that might be like, remember
[02:38:08]  how there was like, this is where, let me load that on my, on my page. Oh yeah. Yeah. This is kind of. I count number.
[02:38:16]  And like, you're like, yeah, yeah, yeah. Yeah. Okay. So then maybe that's, but that, that explains a longer page render time, but
[02:38:23]  I wasn't actually that focused on that. I just wanted to show that the, the, the, the, the, the, the quick script to hydration time is
[02:38:35]  in this little block here. Um, wherever it is, it's, I think it's around here. I think it's this block in here. Um, pile of
[02:38:46]  code. It's, it's over a very short period of time. Okay. Anyways, not, not a, not a big deal. it's just kind of
[02:38:55]  a lot of kind of similar ones let's see do i have any other good ones start hn islands uh dot yeah just to confirm like my local again i think i haven
[02:39:08] 't deployed that one in a while but my local version loads 126 comments so i think it's it was probably i switched how the comment counting happened um oh right right right
[02:39:20]  right right right right this one actually has probably more than that many comments it was the comment counting on that thing and that that was that was what caused the confusion in the
[02:39:28]  conversation on twitter because everyone is like everyone's like you're not showing all the comments and i was like no i am like it's just not coming in correctly yeah yeah yeah
[02:39:37]  now i remember yeah yeah okay that's right all right okay yeah yeah yeah yeah yeah yeah you can see this solids islands demo here where i want to show this where we
[02:39:51]  split the it looks like there's so many comments that we split the hydration in two pieces but it's one 1.5 plus 1.7 so about three milliseconds like my
[02:39:59]  point is it has the same sort of characteristics um of these really fast loading time approaches like quick or salt start um islands and like like very there isn't really a hydration cost
[02:40:13]  it's very small in this kind of demo where is versus like if you took you you know um do i have any of these off remix hacker news no it's been
[02:40:23]  a while since i've i've i've ran any of these uh what's another good one next hacker news all of yeah let's let's let's grab next js
[02:40:35]  uh let's do this and just kind of look at the difference in the hydration profile here um right um 11 milliseconds 16 milliseconds i mean how long is this it's basically
[02:41:05]  this bar i don't trust i don't think this has anything to do with it but it's basically this bar so hydration happens over 11 16 something like the right number
[02:41:13]  here should be about 40 milliseconds um just to 40 50 milliseconds um let me see here yeah let me you go you gave me the the later stack blitz one i i just
[02:41:31]  the only reason i was like cautious with this and i guess we can see if i spin this into its own window open in a new tab how much stack blitz is
[02:41:41] ms are gonna sneak into here mostly i'm concerned i agree i think it's better testing directly through that link i was just wanting to try that yeah let me see because can
[02:41:53]  will this work for me incognito too i can't do it directly after that i think this is the first hint that this won't work because you literally have to
[02:42:01]  have like i can't just take this link and have it work i need to literally have the same thing yeah okay um i won't worry about that i i think i think
[02:42:10]  i think i think this serves the purpose of showing the hydration kind of mechanical cost thing and the the thing that as i as i said that i thought was really cool about this
[02:42:20]  that you know was my kind of okay you know something's going on moment was because i was sitting here writing sources and i was like okay so what i blow the page
[02:42:28]  this thing uses web sockets now and they dis disable or not disabled javascript is the other one i i did a network and i was like um offline right and and
[02:42:41]  and i was like let's let's see how you do now live view js i i took away your your your your web sockets are you still going to be able to
[02:42:50]  close these comments yeah and and obviously we we we we saw that that worked but it would it definitely was one of the things that um that i i was like okay i
[02:43:02]  want to pay attention here i'm glad i uh js commands tricked you into talking is it interesting but do you think you can you can't interact with the page at all
[02:43:12]  until the web sockets connect well uh i mean we won't we won't be able to run it fast enough but hold shift to scroll vertically oh thank you that's a
[02:43:21]  good point um yeah i think that's i mean that is a like a thing about lab use right is like i mean if you wanted to fill out a form and the socket
[02:43:33]  hasn't loaded yet which you know if your socket hasn't loaded there's some kind of connectivity issue that you're you know you're happy like that is happening um you
[02:43:41] 're not gonna be able to do it right like that is true that said like it loads you know if you have a connection it'll load relatively quickly also partly because it's
[02:43:53]  like it's really fast to connect to a web socket right um and the payload that you're connecting with is super small see what's happening is it noticed that it was
[02:44:02]  disconnected and it's running the bar here and then let's go back to the network tab and give it some internet back i i i believe it just it just it was just
[02:44:13]  fine after that point um but anyway or actually no oh no this one always that one always does a page refresh i clicked the wrong one it doesn't matter i it basically because
[02:44:24]  of the polling and all that like it it itself heals like if your internet drops out for a second or whatever so it's like not a problem yeah yeah yeah um yeah
[02:44:34]  it is interesting i don't know the timing of web socket connections it's from what you described though earlier it sounds like the the uh yeah the it sounds like most of the
[02:44:45]  interactivity parts happens at the join like that's when the quote hydration happens um which um from our timeline we looked at it a minute ago seems like it's relatively quick
[02:44:59]  um to happen like my understanding is it's it's it's right here like generally speaking the time for it to do that was about like and whatever hydration stuff it was
[02:45:11]  was probably about was probably pretty quick like i i i have to imagine at most it's this i mean i'm i'm not local yeah how fast can how fast is that
[02:45:22]  connection is it this progressive progress bar thing is that when it's happening that's like a good way to like um think about it because that progress bar basically hooks into events on
[02:45:35]  the on the client job interesting around like loading um like making that connection yeah do you know what's tricky about this means i mean and someone might someone probably would point this
[02:45:50]  out is it means that you guys kind of like this kind of cheats lighthouse i just just to put it out there like if there was actual work to be done it it
[02:46:00] 's it lighthouse stops measuring when you when at the point where you're like fire up that socket and then lighthouse is like okay your page is loaded that may be true i
[02:46:12]  mean i think it like comes down to like user experience right right that is more important it's just it's it's helpful for me from the from the like the from the
[02:46:20]  like measurement standpoint to understand what i'm looking at that's the that that that that is in that is interesting yeah you could look at um in the message in the web socket
[02:46:30]  um network tab if you look at the actual messages coming back and forth you can see you can actually see like when the socket is sent how long it takes to respond right
[02:46:39]  right which which one if i go is it all click on the web socket one there right uh yeah there you go and then messages so you can see all the messages and then
[02:46:50]  if you yeah move that over you can kind of see the length and uh yeah time so interesting sent up at you know whatever 29.661 and the response came back
[02:47:03]  in what is that 60 milliseconds 65 milliseconds okay yeah okay so that yeah i'm just when did the initial page come in yeah like response header is 22 44 29 web socket
[02:47:17]  what is it is it and while you're looking at that just to answer jetpack joe's question do you lose state if you go offline the website reconnects if not
[02:47:30]  how long does the state come up so it depends on how you're keeping the state right like theoretically you are you know like fate is changing you're putting into a database
[02:47:39]  somewhere right um and when the client reconnects you're setting back down you know a new your re like depends on how long the disconnection happens if you're if they're
[02:47:49]  disconnected for like let's say a minute right then it's going to rejoin um in a different section um and if you uh reconnect with it through like the time then
[02:48:02]  it'll it'll just reconnect to the same socket good yeah i did it i think did you did you just see what i did no let's try this again i i put
[02:48:13]  you on a slow 3g network oh there you go and you can actually see it all happening in slow-mo here no this is actually great this is this is the
[02:48:23]  best honestly this well it really helps understand what's going on i mean this i mean i yeah this this this is there's some smart stuff happening here know why because even i
[02:48:37]  interacted with it before it was ready and it still managed to do the navigation um i'm we'll i'm gonna speed it up a bit so that we can actually i don
[02:48:48] 't know why this is like i think it's getting not even fast 3d i think this is getting tripped up right now um let's go here okay cool and
[02:48:56]  i'm gonna go so slow 3G, I'm gonna do the initial page load, okay? And then I'm gonna paginate to more, okay? Watch this
[02:49:03] , slow 3G. At this point, it hasn't loaded yet. Now it's loaded, but... Okay, we see multiple stages. Initial load, the browser
[02:49:17]  hasn't responded. This, I don't know, is that WebSocket connecting? And then there's a third stage when the progress bar runs. But you saw
[02:49:27] , if I pressed it while the progress bar was running, it updated to the next page. If I reload, here, obviously, you can't interact with it. Here
[02:49:37] , if I press it, it's too early. But here, actually, I pressed it again, so that's not fair, 'cause now it'll go, okay
[02:49:48] , sorry. Let's do this one more time. This is our little fun experiment here. It's, okay, so let's try. So, reload. All
[02:49:59]  right, reload. Now I'm gonna try and press it in this middle stage. Okay. Nothing happens, okay. So the point at which it actually... When the
[02:50:14]  progress bar shows up, it's actually interactive at that point. Just, I don't know what the progress bar is doing exactly. But from that point on, we're
[02:50:23]  collecting the events. So, the interesting thing is I've never seen this double spinner. Let me grab something else. Let's, let's, let's, let
[02:50:36] 's, let's put this one also in, not CPU, sorry, no bad. Network. Let's put this one also in slow 3G mode, right?
[02:50:45]  So we refresh the page. Okay, so the, it does do the, okay, it's, okay, gotcha. My bad. The, what we're just
[02:50:55]  seeing here, I think, is that the fav icon is beating the page response in. So we're seeing the spinner, fav icon comes in, still spinning. Yeah
[02:51:04] , let me try this again. Oh, it's so hard when you're on the same page, do you know what, can I, uh, I don't know
[02:51:16]  if it's, okay, I guess we can do the same test. Second spinner, press more. Okay. Yeah. Interesting. So, yeah, I don't think
[02:51:28]  we're looking at the new page while the second spinner is going. It's only after. Yeah, okay. So, yeah, that all makes sense to me.
[02:51:36]  What, what I'm saying, what I'm getting at is, at the start of the progress bar, the page is interactive. That's, that's the key metric
[02:51:44]  here, um, to understand. All the spinner stuff we're seeing before here, um, is still loading. It's just, for some reason, what Chrome does is
[02:51:52]  once it's loaded the fav icon and the page hasn't loaded, it reverses the direction of the spinner. Um, it might be hard to see on stream, um
[02:51:59] , but it, it actually, it's, or maybe, yeah, it's going backwards and then when the fav icon goes, it switches to forwards. It,
[02:52:06]  that's what was throwing me off thinking. I'm just talking about the thing in the, up here. See? So that, that's, that's irrelevant.
[02:52:15]  I, I was getting psyched out by it because the X stays here and then progress goes. Okay. So yeah, um, this doesn't appear, it appears
[02:52:31]  that even when the WebSocket request is pending, that LiveView is collecting the, the DOM events and replays them. Does that make, you see, see what
[02:52:43]  I'm saying? So technically speaking when I'm on solid start here or whatever, whatever framework, when the spinner's done loading and I clicked the more, sorry,
[02:52:54]  I clicked it too fast. When the spinner's done loading. And I clicked the more, um, it, it, it, it fires, it takes a while
[02:53:06]  to get to that next page. That's the other thing you see. There's a delay because of the slow network to get to the next page and do the page request
[02:53:13] . So it's possible that it is fully interactive at that point. And what we're just seeing is that like, it takes a while to do that next page like
[02:53:21]  here. Right. I mean, it is naturally going to take a while to, to do that next page. So in either case, I guess we can't be conclus
[02:53:32] ively know what collects events during WebSockets, but my point is I don't want, I don't, it looks like you can interact with the page basically
[02:53:41]  as fast as you can in a different architecture because it takes a moment to load the page anyways. Right. So I just don't have any progress indicator there, which is
[02:53:53]  why, but yeah. So yeah, this, the sign of seeing that bar along the top tells us that the page is either interactive or it will replay and be interactive.
[02:54:05]  Okay. Okay. Okay. Okay. Yeah. Yeah. Yeah. I, I'm sure like anchor tags and stuff will work because, uh, um, because like
[02:54:19]  that's, yeah. I mean, sure. We're here testing stuff. Let's, let's do it. Sorry. Wrong. Command. Let's go back to
[02:54:29]  full speed. Let's go here and go disable JavaScript. This page is this site is a good example of where you can disable JavaScript. Cause it's literally just,
[02:54:42]  uh, like other than the comments compressing, it's just a typical thing. And yeah, I mean, anchor tags still work. If you don't intercept them with
[02:54:49]  JavaScript, they still work. Um, and pagination still works. Like, I mean, this is SSR standards. The only thing is that this will not work
[02:54:59] , but yeah. So yeah, I, the, this is just HTML, the Phoenix would have to mess up pretty bad to somehow mess this up. I, I
[02:55:11] , I suspected that this would work, but okay, there we go. JavaScript disabled, um, all right. Enable JavaScript. Okay. Cool. Yeah. I mean
[02:55:25] , as I said, I'm not gonna run this through page and speed stores. This gives us an idea of the, the, the initial loading, um, sort of
[02:55:31] , uh, qualities. Yeah. Yeah. Yeah. Yeah. Yeah. When you're, when, when you, when you're in, when you don't have the
[02:55:40]  JavaScript all you can do is the full page reload, but yeah. Yeah. Yep. Um, yeah, that progress bar is indicated that the JS listener for events is
[02:55:52]  ready. Yeah. Okay. Yeah. So yeah, sorry. Let's just do this one more time just to double check. I wasn't looking at it closely, but
[02:56:03]  in this scenario, when we clicked the, when we're in the middle of our thing and we load load progress bar visible and we click, I clicked the wrong click
[02:56:14] . I think. Oh, interesting. Okay. Yeah. Actually this, I missed this the first time. Sorry. There, there, there is something that I missed.
[02:56:26]  It's, it, it actually isn't interactive. Um, at that point checks out. Okay. Here's the, I think I figured it out. Check it
[02:56:39]  out. I was using an anchor click, which is dangerous. I'm going to wait for this to fully load, just to prove my point. Okay. Now it's
[02:56:45]  fully load. If I click more, you're going to see the, what we've already been to this page. So that maybe that was a pretty quick response for
[02:56:53]  that one. But you, you, if you watch when I navigate, it's a bar and there's no circle here. If I refresh. X, go and click
[02:57:04]  while the bar is going. It's actually a full page MP load, which means that it's actually the underlying anchor tag. that's navigating the page, not the
[02:57:14]  JavaScript that's handling it. So it is at the end of the progress bar. Um, I believe because the events aren't getting handled at that point. So, um
[02:57:23] , it's not the start. It is at the end. Um, which is, which is, which is a good point. Um, okay. Yeah. That's
[02:57:35]  what I was trying to say. Yeah. I, I, I, thanks for getting me there. I was a bit, I was a bit slow. Yeah.
[02:57:42]  So. Okay. Yeah. Okay. So that'll, that'll, that'll checks out and makes up, makes sense to me. Um, uh, I was thinking
[02:57:50]  they were replaying events, but what, in fact, what's happening is we were just seeing the progressive enhancement of the browser take over, which means it's, it
[02:57:57] 's your typical thing. we should, what's really cool here is your demo actually has a loading indicator for, for hydration, which is something that you don't actually
[02:58:07]  often find in, uh, examples. Cause a lot of frameworks are, don't have a way to show the cost of them, themselves loading, which is kind of funny
[02:58:16] . Um, yeah. Anyway. Yeah. I guess, is it hydration or is it, cause it's really just. No, no, it's. Connect to the
[02:58:23]  socket. Right. Like that. Yeah. It's depends on what you call hydration though, because what I'm getting at is, um, well, I mean,
[02:58:30]  we can do a similar thing here where we try and click on a comment and compress it before. Cause the anchor tags made it really obvious that like the browser was taking over
[02:58:44] . We're here. This won't work properly until the right time. So this is a better look. Cause this goes here. I'm going to go ahead and
[02:58:53]  click on a comment. I'm going to go ahead and click on a comment. I'm going to go ahead and click on a comment. I'm going to go ahead
[02:58:56]  and click on a comment. I'm going to go ahead and click on a comment. I'm going to go ahead and click on a comment. I'm going to go
[02:58:58]  ahead and click on a comment. I'm going to go ahead and click on a comment. I'm going to go ahead and click on a comment. I'm going to
[02:59:01]  go ahead and click on a comment. I'm going to go ahead and click on a comment. I'm going to go ahead and click on a comment. I'm going
[02:59:04]  to go ahead and click on a comment. I'm going to go ahead and click on a comment. I'm going to go ahead and click on a comment. Okay
[02:59:08] . Of course. Right. Think about it. Client commands will work immediately because they don't require, like the JavaScript has already loaded by that point. So I
[02:59:20]  see what you're getting at. Yes. Okay. Gotcha. Okay. You're right. Yeah. At the start of the progress bar, the JavaScript does do that event
[02:59:35]  hook handle in. It does get delegated. It just can't because it has to talk to the server. There's no possible way for it to be able to finish
[02:59:42]  processing the server stuff. It's interesting that the anchor tags end up falling back to the, it's almost like they know they're not handled and then they fall back
[02:59:54]  to the native browser behavior until the server is ready. But the thing that could be handled in this case was able to run immediately. Huh? Yeah. If you look at
[03:00:04]  the anchor tag there, they have their own tags. They have the additional attributes, I should say, that are Phoenix specific. Right. And then they have the,
[03:00:15]  you know, href that's, you know, traditional anchor tag. So if it, if the client is loaded and it'll intercept those events or if they're JavaScript
[03:00:28] , they'll intercept those events. If not, it'll just. Right. Right. So yeah, it's just, it's smart enough. And so it probably attaches
[03:00:35]  the click event as soon as it can. Right. It just knows when it can handle it. Um, yeah, no, that's the, and it makes sense
[03:00:43]  that it would work that way because you have to handle the case where the JavaScript doesn't load or where, or not doesn't load. Do you have to handle the
[03:00:52]  case when the site go, you have to handle this case when you lose. No, that, that doesn't make sense. Actually, I'm not sure. I was
[03:00:57]  trying to justify this, but the thing is if the page goes offline, then the anchor's not going to work properly anyways. So there's actually, I, I
[03:01:04] , it's, it's an interesting choice. Like if you couldn't, if you click it, whether you, yeah, I guess it's, I guess the mentality
[03:01:14]  is it's better that the click is handled in an expected way rather than to like, wait for the socket that may or like, may not like whenever it will be present
[03:01:23]  or not. Like they're, they're just like, okay, look, it hasn't loaded yet. We'll just handle it. We'll just handle it. We
[03:01:28] 'll let the browser handle it. Yeah. Well, and I think, I think parasocial is making a point about like, it's not about the socket necessarily
[03:01:35] . It's about the, it's JavaScript, right? Like if the JavaScript's off and you can still click an anchor and load the page, it'll, it'll
[03:01:43]  still try to do that. Yeah. Yeah. Yeah. Yeah. Jetpack.js about long polling. It's, it's not, it doesn't implement long polling
[03:01:52] . It's, it's yeah. It's just a, a web socket, like straight up web socket connection. Okay. I, I guess this was from a
[03:02:03]  Phoenix features thing. Okay. So live view, I guess someone is asking if live view can fall back to long polling. It sounds like live view can. Live view just
[03:02:15]  doesn't. Okay. All right. I, I, I think, I think, I think, I think we, Joe, I, I welcome any, any
[03:02:25]  PRs by the way. I, I think I've got a grasp of this. Sorry for being a little obtuse, kind of going through trying to understand it.
[03:02:31]  But I think, I think the timing and stuff, this is a very different model. So understanding the impact of, of the socket is definitely something that is important.
[03:02:44]  It does feel like that socket impact is significant enough that for like people trying to serve international e-commerce sites that might not be like the best choice, but I don
[03:02:57] 't think, I don't think it matters. And it probably won't matter as much in other cases, but yeah. Yeah. Yeah. Yeah. I mean,
[03:03:10]  I guess it doesn't really matter in that case. Cause I'm trying to pull it, pull out what the scenario would be. Would it actually make that much of a
[03:03:29]  difference? We'd have to measure it and see if how much the initial connectivity thing. I worked at eBay, which is my thing here. And so I like the
[03:03:39] , it was the hunt to the bottom. Cause every millisecond of page load or hydration time was money in the pocket. That's the, that was sort of the thing
[03:03:48] . I don't, I don't think that's why you use this. I was just trying to like, that's like basically the, the, the, the,
[03:03:58]  the big, the big thing there. But yeah. Okay. That's cool. I think I got, I think I got a good grasp here. I think it
[03:04:04] 's time to ask Donnie any questions while we still have them. Cause we're going to have, we've, we've already had them now for three hours. We
[03:04:09]  probably have to let them go pretty quick here. Um, but, uh, I think it's good time. Shoot, shoot, shoot over some questions. Any, any
[03:04:17] , anything you haven't had a chance to ask yet. Yeah. Yeah. I agree. Thanks Ryan for inviting me for sure. I'm super psyched to be
[03:04:24]  here. And, uh, it's fun to, uh, fun to show this off and welcome. Any, uh, any other questions like on, on Twitter or,
[03:04:28]  um, you know, yeah, you're, you're at flood FX on Twitter, right? Yeah. Yeah. Uh, also feel free to look at the code
[03:04:35] , send PRs, uh, rate open issues, any of that stuff. Great. Any pushback from live view folks about the name live view JS. Are they
[03:04:39]  all cool about it? I, I mean, I, I don't know. Um, I haven't heard from any of the, like, you know, like Phoenix
[03:04:44]  folks. Um, there's, uh, there's some other folks who, uh, there's, uh, there's some other folks who, um, I, I
[03:04:58] , I, I don't know, um, I haven't heard from any of the, like, you know, like Phoenix folks. Um, there's, uh,
[03:05:06]  there's some other folks who. Um, have asked me about it, but I don't, I don't think so. I mean, my view is, I
[03:05:11]  guess I think about it. Um, live view as like a, as a, a paradigm, right? Not a trait. It's definitely not a trademark name. So
[03:05:19] . Um, I think it's helpful to have it in the name personally. Yes. Yes. Also thank you, parasocial. That's how this whole thing actually
[03:05:29]  happened in the first place. Been hounding me to look at live view, um, in any form live view, live view JS. And, um, I,
[03:05:37]  I was like, yeah, yeah, yeah. But I'm, I'm not, I'm not interested in stateful servers. Not really. Um, like, uh
[03:05:44] , you know, and then I was like, I'm at a certain point, I was like, no, you know, I, I've covered a lot of different
[03:05:52]  frameworks. There are cases for stateful servers. Definitely. So we should, we should take a look at this and see what it's about and see what advantages or
[03:05:59]  what it unlocks. And I think we've definitely seen that today. Um, because like there, when we write these isomorphic libraries that kind of work on both
[03:06:10]  sides, um, or write like the, you know, the server code, like we already see like bits of this benefit. Like the way that you can like,
[03:06:18]  uh, remix redirect actually handle you right on the server and it actually handles a client router redirect. Like those kinds of patterns. This whole model is like that. Like
[03:06:27]  the, the whole, the whole thing, um, has that same ability to talk about the client and the server in the, with the same, uh, kind of like
[03:06:39]  the same single code path. Um, but yeah. Uh, cause someone, yeah. People. Yeah. Chris McCord. That's the guy behind Phoenix. Right.
[03:06:52]  Um, yeah, I, I, I can understand why we might not get Chris McCord here, but, um, definitely. Thanks for trying. Uh, that
[03:07:03] 's, that's cool. Um, let me just another drink of water and, uh, Hmm. Yeah. I thought about, I thought about building a little beats
[03:07:17]  app. I think it would be an interesting. Is it, is this like the demo that they show off? Yeah. It's a demo where they, I think it
[03:07:24] 's sort of like, um, a couple of your MP3s and you can like, you know, share, co-listen to, you know, people are
[03:07:32]  actually like play. It's like, you can play whatever music for other people and that kind of thing. Interesting. Yeah. It's, uh, supposed to be
[03:07:39]  like, they're one of the, I think, demo, you know, apps for Phoenix. Makes, makes sense. Cause it kind of leverages that, that,
[03:07:48]  that ability to have all the sessions all tied together. Yeah. I mean, cause that's what you need to degree. Like that's what you need. If, if
[03:07:56]  you're going to have that kind of application, you do need a stateful server. So, or yeah, so yeah, that, that makes a ton of sense.
[03:08:04]  It has a Pub/Sub demo on a single page app router. Cool. Yeah. I'm not going to like the link that keeps on getting shared here has sign
[03:08:12]  in, which means like, I'm not doing this right now, but maybe someone else will. So just put, put that out there. Um, yeah, I don
[03:08:19] 't know. I think we, the cool thing was we got to look at a lot of the code and get a really good understanding work there. I think it was
[03:08:27]  a lot for a lot of the people who, um, come from where my, my, my, my, uh, leg of the woods, so to speak, where
[03:08:34]  it's like, this is a very different model, um, to kind of wrap your head around. So I'm going to give them a, give them the time
[03:08:41]  to think about that. And, um, anything else you want to shout out Donnie before we let you go? Um, I just want to, yeah, say
[03:08:47]  thanks again. It's great to be on here. Um, we would love to come back, um, you know, chop any other updates. We'd love to hear
[03:08:56]  from the community. I think you have a awesome set of folks that you are talking to all the time and would love to hear more. And, um, if anyone
[03:09:04]  is using it and want to, you know, want some help or have some questions or anything like that would love, uh, you know, would love to, to help
[03:09:13] . Um, thanks for our social for setting us up and, um, yeah, thanks for everyone for hanging out with us for the last three hours and looking at some code
[03:09:22] . Really appreciate it. Awesome to have you here. It's been, I've learned a ton. It really been bending my brain. So, um, until next
[03:09:30]  time, we'll see you. All right. That was pretty awesome. Hey, I had a lot of fun with that. Um, I think there's a, it
[03:09:43] 's always like that where you have kind of like an idea of something, you know, you've got like a certain rough image in your head of what that, what that
[03:09:50]  looks like. And then you're kind of like, well there's details that I'm missing and don't get me wrong. I am still missing details about the diff
[03:09:59] ing. And someone shared it earlier in chat, uh, Phoenix live view engine. Sorry. Another someone, right? I like, I just like saying someone and I
[03:10:09]  was looking here and there's some code. I don't understand, but I'm gathering. It starts here. This, this, this description of how it works.
[03:10:16]  It's like, whenever you render a live template, it returns a Phoenix live render structure, blah, blah, blah. Static dynamic fingerprint. The stack fields, a
[03:10:23]  list of little string literals. This allows Elixir compiler to optimize this list and avoid allocating it strings on every render. Okay. Dynamic fields, blah, blah
[03:10:31] , blah. Okay. When you render a live view template, you convert the rendered structure to that. Okay. That makes sense. Kind of want to know what happens
[03:10:41]  on the client. This feels like it was written to kind of tell people more about what happens on the server. Um, here's the track. Okay. No, maybe
[03:10:58] , maybe I got this wrong. Returns. They're shared across all the points too. I guess the cool thing here is he didn't actually have to worry about
[03:11:12]  this. As long as he produced output in the right format, the existing live view client already could handle it. Sorry. I guess I should share my screen if I'm
[03:11:21]  like looking over this stuff. You guys are like, what are you, what are you looking at Ryan? Yeah. Thank you. Yeah. Yeah. Yeah. Yeah.
[03:11:30]  Yeah. Yeah. Yeah. I mean, you're not going to read this really well anyways. It's like gray on black. Um, I might have to just
[03:11:39]  dig into this more, uh, in, in more detail in the, in the future. The fact that you use morph Dom gives me some amount of hints here. Um
[03:11:48] , but I'm not seeing here at least what I was looking for seeing. I, I, yeah, it's interesting. It does talk about some optimizations.
[03:11:59]  Anyways. Okay. Let's, let's, let's keep on, let's keep on rolling. Oh, live view JS assets. Okay. Yeah. Let me dig
[03:12:12]  in. Yeah. I mean, I, I don't know if I'm going to, let me see here. I don't know if I'd like want to
[03:12:21]  actually spend a bunch of time looking at the source code right now, considering I don't know what I'm looking for. Let's look. We can take a moment here
[03:12:33] . Um, what do you got here? Dom, Dom patch. Um, Dom patch. Um, yeah. I mean, I'm not sure. Let's see
[03:12:40]  this. There's no imports, constants, utils. So this is abstracted. Even if this was, uh, just seeing if the, it, it, it
[03:12:59] , it. It's just seeing if the clone node template cloning. This makes sense to me. That's how they would be doing like, like solid and like
[03:13:15]  lit. They're using the string templates. It makes a ton of sense, but this is still not Dom patch. Probably morphed. Okay. Yeah. Yeah.
[03:13:27]  So this is straight up morph Dom, um, call here. So my guess is they do localized morph Dom diffs essentially. Yeah. Sorry. I got there. Um
[03:13:46] , and actually, cause I'm, let me change this because it's probably I'm in the way. constructor live socket. Yeah. I mean, I feel like
[03:13:59]  this is like, this is the, this is the key part right here. Like from element to element, children only false. Like the, the, the way morph
[03:14:14]  Dom works. This is like, you pick a point in the tree, you give it what you're going to change it to. And you just, you just do it
[03:14:21] . So like for this to work, you need those strings. It is kind of like what I was saying. Anyway, yeah, I don't, I don't
[03:14:41]  think, I don't think that, uh, that this is probably much more illustrative or instructive for us for our purposes. Um, no, I probably not
[03:14:59] . Cause I think that's the whole point. Like the, the, the, the reason you architect something like server components is specifically because you don't want to depend on
[03:15:08]  web sockets or staple servers. Like these are not trying to do the same thing at all. Um, so, because like the, I don't think you'd
[03:15:18]  architected in the same way if you were, um, it's interesting to see where the bridging of the gaps between the different approaches are hitting. And what I
[03:15:29]  mean by that is like, if you, if you, if you think about it for a second, like server components always, it's very easy to be in JavaScript land
[03:15:38] . Cause like any of the islands or whatever, they just live in JavaScript land, right? You can write very complex logic and handle that the way you've always done
[03:15:46]  in react or solid or whatever. But then outside of that, you, you, you, you basically use the server components when you do a big navigation. Like the
[03:15:56]  only time you talk to the server is like when you want to like change the page or navigate to a new section or refresh some query results. It's like you it
[03:16:05] 's recognizing that like a huge amount of data happens initially on any big load or any big change. And you just don't need the JavaScript to, to handle stuff on those
[03:16:18]  kinds of big changes, but all the interactivity, all those other details, you have it right there. So instead of kind of escaping into hooks or doing a bunch of
[03:16:30]  that stuff. Cause like the, here's the thing, obviously with the right set of commands, you can do all the simple stuff. You can do like this hacker
[03:16:43]  news example, you know, you can, but like the idea is like, you wouldn't want to do anything more advanced in Phoenix because like, then you, then you
[03:16:53] 're just giving up. Like if you want to like, if you want to do something as interactive or like kind of crazy as what you would do in a react app
[03:16:59] , you are going into the hooks land. Whereas, um, with, with, um, server component model, going into that is rather trivial. Um, and you only
[03:17:13]  actually go to the server for the big changes. Like that, that, that's kind of the idea. You go, do we pass the old route? Server components
[03:17:27]  don't diff on the server to my knowledge. I like, they literally statelessly. I mean, maybe I should look at that, but to my knowledge, they
[03:17:35]  don't pass that. They might tell you what URL you're on. Um, so like our version tells so that we can do the nested routing. Like,
[03:17:44]  so it's like, Oh, we only need to render these new sections. But like generally speaking, um, the, all the work happens on the client, on the
[03:17:53]  diffing side. So we don't actually send very much on the send. We send back more to the client. We send back more. It joins, sir.
[03:18:09]  Would you, can you let me why you would not be interested? I mean, all the reasons not to be interested in stateful servers. I mean, there are advantages
[03:18:14] , but you're making a decision at that point. Right. Um, stateful servers innately are more like expensive, right? Like you, you need more server
[03:18:24]  processing. You need to keep track of sessions. There's different kind of scaling considerations. Like it's like, if you are fine with that, then that's fine.
[03:18:36]  But there's like, at the same time, there's this whole movement towards server lists edge, all that, all that kind of stuff is kind of like, there's
[03:18:43]  probably gonna be stateful server solutions in that zone, but it's like, they're, they're giving you more and more reasons not to, to be on stateful
[03:18:49]  servers. It just never really, it just like, and this could be like old things that we need to get around there. There's a certain time period where everyone
[03:18:58] 's like, yeah, staple server is a really bad idea. Um, and this is probably during the microservice time, the 2010s. The thing I've learned over
[03:19:07]  time is that these things come in waves. It's never like, this is just a bad idea. It's like, no, there's considerations. What's the
[03:19:13]  trade off? Like, when does this make sense? Um, and I'm, I'm just pointing out there that like, I've never had any interest in that much
[03:19:20]  interest in stateful servers, just for the most part, like as a general paradigm for developing. And I think most of the modern web hasn't in terms of the JavaScript
[03:19:28]  side of things. So it just like, it's interesting because at one point I was like, the story of the web is like, who's left holding the bag
[03:19:37] , like on state. Like it's the story of how we push state around. And it was like, state was on the server back in the day. And we
[03:19:43]  decided that that was a terrible, terrible thing, but maybe we should reconsider that. So I think, I think it's interesting from that perspective, but like for the longest
[03:19:52]  time, that was like, and even from backend folks, like almost encouraged moving stuff to the client just for performance. Now that we have better tools, maybe that changes the
[03:20:01]  equation. But generally speaking, it's been in the, in the same way single page apps have been in the mindset that state on the stateful servers are not good.
[03:20:11]  That's, that's the, you know, the whole rise of rest and everything. It's just, don't, don't do that. Right, right.
[03:20:23]  If the technology enables it, then that changes, that changes things significantly. It just, it was never considered a good or viable option for the, on the wider, on
[03:20:34]  the wider range of things. Right. So it's like, it's one of those things too, that the, that message is not good. It's like the
[03:20:41]  rule, you know, and, and it's, it's, it's kind of a funny phenomenon because it's, it becomes like, everyone knows this, but that
[03:20:52]  thing that everyone knows might not actually be true. And saying like, like something, it's usually some catchy line that's very simple, but then like everyone just ends
[03:21:11]  up repeating it and repeating it and repeating it. And in this case stateful servers being bad is that kind of thing. It's just like the propagated for years
[03:21:19]  and years and years as this like assumption that you could always just like know to be true. So, but obviously it's more interesting than that. So anyway, yeah
[03:21:40] , I, I just, just kind of like on that thing. This is, this is just why server components come, come at it as such a different way or,
[03:21:49]  you know, quick or any of the front end framework stuff. The, the stateful servers is basically the, no, like right off the bat, like as an
[03:21:58]  assumption, you can have a stateful server. If you choose to opt into that, you can, you can set that up, you can do that, but the framework
[03:22:04]  is not going to assume that you have a stateful server. Right. I think, and that's maybe that's where the divide is has because even, even I
[03:22:14]  could be wrong, but don't like turbo and rails and that are not stateful servers, right? Like generally speaking, or have they added live view type stuff recently
[03:22:26] ? Like is, is that because like traditionally rails was also on that, that trend, like backend technologies were like stateful servers are not good. They're like,
[03:22:37]  we don't want to handle it. Right. Cause hotwire. There's a PHP live wire, but like, but HTML over the wire doesn't mean straight full servers
[03:22:46] , right? That's, that's still, you can, it's, it's like, that's still HTML as an API, right? That's like server
[03:22:53]  components, the same kind of idea. Like you, you render the page on the next page, you render the next page, you diff or you transfer them. That's
[03:23:02]  not stateful servers. Um, stateful servers is like, like what, like is more of that scenario, like where you're literally changing the data of your UI state
[03:23:11]  and the server's like, yeah, yeah. I already know what's up. I already, this was a one, um, I'm updating it to a two.
[03:23:17]  Rails is not like that. Hotwire is not like that. Um, to my knowledge. Yeah. Yeah. Yeah. That, that, that I'm, I
[03:23:31] 'm not, yeah, I, I'm, I'm, I'm not clear on, on, on that detail to be fair, but I'm just putting it out
[03:23:40]  there from what I've seen or understand to be true, that, um, that it is not, um, it is not like that. Um, so I think that
[03:23:51] , that's interesting and I think that helps kind of split. Um, yeah, yeah, exactly. Phoenix isn't Phoenix is like your typical thing. Live view is
[03:24:00]  like this new, newer trend probably where it's like, Hey, this is a stateful add on. Um, anyway, um, what do we, what do we
[03:24:10]  got to do? We were three 30. So we could go this state in JavaScript and, you know, be happy with me being able to eat sushi at a reasonable time
[03:24:19] . Um, I feel like with the audience, I feel like with the audience I have today, I'm where I'd go next. If I don't go that
[03:24:26]  way, might not be your typical place. Cause another thing that I could do, which probably I feel like I got a lot of Elixir people in here today.
[03:24:34]  And showing how I can make solid components work inside react probably isn't the right topic today. Um, so I, I think, I think we'll save that one
[03:24:44]  for another day. That's something that I've been working on a lot recently. Um, and maybe we'll, let's just get ready for this week in JavaScript.
[03:24:51]  Um, Uh, let me put a few things together here. Yeah. Yeah. This very much must is probably true. They should try and explain how different stable process
[03:25:11]  elixir are. Someone who has an experience is trying to explain how different fine green reactivity is all it is to somebody who hasn't experienced it. Yeah.
[03:25:16]  Yeah. I definitely see that. I, I, this is where we're talking about technology game changer, which just completely shifts what people think is possible. Um, I
[03:25:26] , I can definitely relate having been in that sort of situation in the past where you, you gotta go like, no, no, the, the game has changed. The
[03:25:35] , the math is different. You know, this is definitely something that, um, is not like what, what we've seen before. Um, Um, you know
[03:25:46] , and that, that takes, that takes a little bit, um, of, of adjustment. Okay. So where are we? Yeah. I did talk about my react
[03:25:56]  idea last week, but I didn't show how I made it, which is what I was hoping to do. But yeah, let's do that a different time. Cap
[03:26:04]  theorem broken. Not really, but I mean, it could be pretty profound. Um, let's see bookmarks. I'm just setting up my, setting up my
[03:26:15] , my feed here for, um, for, um, for, um, for talking about this week in JavaScript. Okay. And then the last one I need is solid
[03:26:25] . I have to admit, um, I have to admit, I may have not been paying as much attention to other stuff that's been going on this week because,
[03:26:39]  um, solids had a really big week. Um, and it looks, looking at this, it actually looks like my solid feed and my feed are almost identical. Um,
[03:26:49]  which is, which, yeah, I mean, I guess that shouldn't be terribly surprising. Um, all right. Yeah. Let's move that there. This actually
[03:27:03]  might be a short this week in JavaScript, but I mean, we can, we, we can always dig into a couple of the topics. Okay. Cool. Um
[03:27:12] , all right. All right. Cool. I think I'm set up. Everyone's still alive. Everyone's still there. How are we doing? I hope you
[03:27:25] , I hope you, I hope you all enjoyed that. For me, that was really interesting. Cause like, um, it's not every day that, you know,
[03:27:32]  I see something that, that I have not looked at at all. Like just like, usually there's like, I literally, I sit at the beginning that I like
[03:27:40]  kind of looked at it. I, I barely looked at it. I, I knew it had web sockets. That was about it. So this, this was
[03:27:47] , this was, this is kind of helpful to kind of position this. Cause I do see the benefits. I do see how, when you kind of make that jump,
[03:27:59]  um, you like certain things get a lot simpler. And I see analogies there. I'm not sure if anything I saw today at the moment gives me new ideas
[03:28:10]  on how to attack different, you know, projects more in my space of things, but it's, I feel like now having seen that better, um, will help kind
[03:28:22]  of give a different perspective on problems. I look at in the future. Thanks. Yeah. Yeah. I'm, yeah. Oh, I'm, I'm probably
[03:28:36]  look at that here in a minute. Um, yeah, let's, let's just, let's just get started here. Right. And let's, um, I
[03:28:41]  gotta, it's funny. I'm just clearing out banners out of this, um, thing. Cause I have like, welcome Minko and Malcolm, welcome Greg
[03:28:52] . And I haven't actually cleared anything out. Yeah, for sure. Have a good one. All right, let's do this. Okay. So now we're
[03:29:02]  going to talk about this week in JavaScript. Um, I have to admit this week in JavaScript for me got dominated by a specific, a couple of conversations. And, um
[03:29:16] , before we dig too deep into them, I'm going to get tag on a little bit of a solid update. Um, Um, and we can kind of go
[03:29:24]  in a bit from there. But so first thing I want to talk about is I am super stoked, um, that we've picked our third fellowship. Um, for those
[03:29:36]  who don't know, solid's been using its open collective money to give back into the community, help people working on really cool projects within the solid ecosystem. And in
[03:29:44]  this case, um, Michael's joined us to help with docs. To be fair, Michael's been working on docs, um, since August and, and really moving the
[03:29:46]  new solid docs forward. Um, but yeah, little background. Michael is studying electrical engineering at University of Abuja in Nigeria. And he's been, he's been,
[03:29:46]  he's been killing it for us on, on the doc side. And, um, I'm super stoked that we can do this. And in this case, Michael
[03:29:48] 's joined us to help with docks. To be fair, Michael's been working on docks since August and really moving the new solid docks forward. But yeah,
[03:30:00]  little background, Michael is studying electrical engineering at University of Abuja in Nigeria. And he's been killing it for us on the docks side. And I'm super
[03:30:12]  stoked that we can now put money into his efforts. He's been working. You can follow the progress of the docks milestones on GitHub. And yeah, no, he
[03:30:23] 's doing amazing work. For those who haven't seen it, docksisalljs.com. It's still a work in progress. But I think this is
[03:30:38]  going to be a much better foundation for people just getting started. We have cool things like asking what frameworks you're coming from or none to give you perspective. This changes what
[03:30:48]  the docks teach you. TypeScript or JavaScript settings. This is a billion times better than what I've done. And this isn't even finished yet. Graphics
[03:31:02] , examples, teaching materials, how-to guides, actual tutorials, not just like the very simple, that's cool even in here, not just the showcase that we have
[03:31:18]  on our current tutorials where you show the features. And this is going to be really, really quite cool once we get it going. So I'm really stoked about this
[03:31:30]  effort and what he's been contributing to it. While we're doing other solid type news, probably want to talk about some TanStack stuff. TanStack Qu
[03:31:47] ery 5 is coming out and I'm very happy if you missed this. This is really quite cool. What's really awesome about this is this is just TanStack Qu
[03:31:59] ery, which is React Query, and they've managed to get it work with hydration and server rendering, which is not that big of a deal. Perhaps you'd
[03:32:08]  think, okay, you can do that in React. But what was really cool is SolidStart is built on primitive pieces. So because TanStack Query uses resources,
[03:32:17]  solid resources under the hood, the data serialization, everything automatically happens in the background. So there's no setup, there's no wiring in how this hydration serialization
[03:32:30]  works. You literally just pull this in to your project and it just works out of the box. And more so, because of SolidServer functions, you can literally wrap
[03:32:39]  this query function in server and query your database directly. And this works with streaming, and this works with, like, it basically just works as if we'd written into
[03:32:49]  the framework. And this is something we're really proud of here because it kind of showcases off, like, compared to Git server-side props or compared to, like
[03:32:56] , remix loaders or those kind of patterns. This just, like, you don't have to do anything differently. This just works with the third-party libraries that already
[03:33:08]  exist in the ecosystem. Yeah, yeah, yeah, great to see you, Tanner. So I think this is just really cool how this just works. And honestly,
[03:33:24]  I'm going to give Tanner gets a little shout-out here, too, because he's been doing a lot of work recently with his agnostic stuff just using our
[03:33:34]  reactivity. So this is the core, not, like, the solid integration specifically. He's actually been working on the react integration for the router. And Solid.
[03:33:44] js is so cool. Even better, using it to build libraries that will work with other frameworks, too. Solid React, simply just wrapping that store with a use hook.
[03:33:51]  Yeah. We've seen that with Preact. But I think, in our case, our primitives are something that we use every day, and we've been building them
[03:33:58]  up for years to create good patterns. And I think Tanner's really going to need to leverage that. This is what I'd like to hear. Here, you came
[03:34:07]  here for this news for this week in JavaScript. So, yeah. This is going to be awesome. Honestly, I didn't realize Tanner was going to just show up
[03:34:22]  like this, but sweet, sweet stuff to see and big news coming, you know, in the future, it sounds like. So, yeah, I was so stoked about
[03:34:32]  this. I had to, like, gush about it more because I don't think people realize, like, this is when you see all the pieces come together.
[03:34:39]  This is what it must have felt like for the React team when Next 13 came out before anyone tried it, right? Like, this idea that, like, finally, all
[03:34:47]  the pieces have come together. Sorry, that was a bad joke. I'm terrible. But, yeah, you get, like, I legitimately, I, this,
[03:34:59]  this is the kind of thing that we've been building towards. And, like, this, this, this, seeing it all together, just, like, yeah. I
[03:35:15] 'm glad we got here so quickly because, like, it put a lot of pressure on the framework. I took a risk by doing it with primitives because if people
[03:35:22]  don't know how to use the primitives, it's more complicated than just saying loader. But I think the payoff will pay off, you know, like, the
[03:35:30] , the work will pay off. Yeah. Yeah, I, I think, I think some really cool stuff. I mean, Tanner's just giving it all today.
[03:35:44]  But, yeah, like, I, I, I, I do want to talk about some of the Solid stuff. Let's see if there's anything else I want to
[03:35:53] , to, to focus on before we talk about the bigger topics this week. Yeah, I guess the other one I want to mention is that my reactivity course on Solid
[03:36:02] .js is now available in Frontend Masters, which is pretty cool. I have to admit that, like, it is Frontend Masters, so there's a subscription
[03:36:16]  fee. It is expensive to, to a certain degree. Like, you get a lot of value for that subscription because there's so many amazing lessons in there. So I
[03:36:26] , but I understand why, like, that could be prohibitive to a certain degree. I'm just, it was, it was, it was a lot of work
[03:36:34] , it was a lot of fun, and, and I, I, I think I did finally get to sit down with enough time, you know, a good, like
[03:36:43] , hour and a half or so at the beginning of this, of this, to really just do, kind of stitch together all the topic, like, things I want to
[03:36:49]  talk about reactivity on the streams and in my talks into, like, one cohesive piece. To be fair, if you've been watching my streams, you've probably
[03:36:57]  seen, at one point or another, all the content in this course. But for people who haven't, it's all concentrated in one place, which is really, really
[03:37:08]  cool, you know. So people who don't have the, you know, let's see, I do five hours a week, you know, like people who don
[03:37:14] 't have hundreds and hundreds of hours to watch my stream content can get it condensed in about four hours. Obviously not all my hot takes, but you're going to, you
[03:37:23] , you, you get the idea. I'm, so it's very cool to see this kind of come together and how well their editing actually works. Cause I had a
[03:37:31]  hard time in a certain part where just nothing was working and they've, they smoothed it out. Lovely. Right. All right. So I think, I think
[03:37:42]  that's most of what I wanted to say about, about solid. Um, let's, let's continue here. I mean, that's not true. The, one
[03:37:49]  of the big topics today is going to talk a bit about solid, um, which is, um, which is a bit of the state of JS, but, uh,
[03:37:58]  let's move on to another story here. I don't know how many of you follow Dom. I mentioned I was, I was chatting with him a bunch recently.
[03:38:06]  Dominic Gannaway, creator of Inferno, lexical at, uh, um, he's moved to Bloomberg and he sounds like he's back in the
[03:38:12]  framework game. We've mentioned a few times, he's been putting up some interesting tweets, suggesting how we get things like reactivity into language or how we extend JSX
[03:38:20] . This was an interesting one about inlining statements. My understanding is he, he's hit a lot of, uh, a lot of pushback on these ideas.
[03:38:31]  So they haven't been getting anywhere, but I love that he's posting them and getting people to think about it. Um, people started like flagging Jared from bun
[03:38:38]  going like, Hey, here's your chance, Jared. Um, and I think that, I think there's potential there, but to be fair, it's hard to
[03:38:46]  go against the tide of tooling. I was very tempted to write an article about this because like people, there, there is a trade-off with tooling. Um,
[03:38:56]  you know, I was talking about how, like you give me the tools, I'll always be able to do something a little better than without the tools, but there is
[03:39:01]  a trade-off with tooling in that it tends to lock us into conventions when the opinions are high. So opinionated tools, um, definitely get in the way of
[03:39:09]  innovation sometimes instead of helping innovation. So yeah, yeah, there is the, the do statement seems like the logical approach to this one. Yeah, but I mean, it
[03:39:23]  is kind of, uh, here's the thing. This is why the syntax has to be nice because something like this, you're kind of like, you're like,
[03:39:32]  can we just not bother with this? Someone, someone actually mentioned this, right? And I, I think, uh, where was it? Uh, what do we
[03:39:42]  use? Marco SFCs. Um, I actually guess I jumped on this conversation more than I thought, but somewhere someone was like, can't solid just, uh,
[03:39:52]  just do this anyways, without, without doing anything, like just wraps a function. And, uh, the answer is yes. And I actually made, yeah, they
[03:40:01]  were like, oh yeah, you got to invoke, you can just do this in solid and get this, you, yeah. They get the same kind of thing where you
[03:40:09]  wrap it in a function and invoke the function. And because solid's lazy generally, like this works actually pretty well. It's just, it feels like first class citizen thing
[03:40:18]  might be worth considering. Um, but I think the challenge is JSX syntax and what's comfortable for people. Like, I don't like this. I don't
[03:40:28]  like this really. I mean, this is better, but like, yeah, I people, this is the, the influenced by Svelte kind of aspect. Like
[03:40:38] , it's, it's, it's complicated to come up with syntax. And the thing is Marco actually has a very beautiful, consistent syntax for this kind of stuff.
[03:40:47]  But again, beauty is in the eye of the beholder, so to speak. So this is a, this is, this is a challenging. I just like the fact
[03:40:54]  that this conversation has been happening. This is all signs about like people kind of trying to think outside of the box. Um, even deep in virtual Dom land or whatnot
[03:41:03] , you know, like everyone's, there's a sense of change. Right. And I think, I think this is really interesting to see these kinds of conversations happen.
[03:41:12]  Um, we'll get to state of JS. Actually. Yeah. Yeah. Actually, you know what? Let me see if there's something else. Yeah. Let's
[03:41:26]  complexity state of JS. Okay, cool. Yeah. Let's, let's actually, uh, I think, I think it might be time to talk state of JS
[03:41:34] . Yeah. Yeah. I think it is cool. Yeah. Let's talk to state of JS. There's no way we can talk this week without talking about state of
[03:41:41]  JS. To be fair. Um, I, a lot of people have been asked me to talk about the state of JS. Um, I put some stuff up on Twitter
[03:41:48] . I, I was on Theo stream with Fred. I think I'm going to do a space coming up, um, with Kelvin. Uh, state of JS, uh
[03:41:58] , is always a big event that happens every year. Um, so yeah, it's, it's, there, there, there is some cool stuff here and you have
[03:42:08]  to always take into a grain of salt that this is like a height meter check. It's not reality, but they've, they had twice as many people respond this year
[03:42:16]  than the previous year. Like there's, there's more respondents, more significant numbers. And I actually really got to appreciate this because I mean, there's a lot
[03:42:24]  of places in this results that I'm pretty happy about to, you know, talking about, like, obviously people have seen this solid has the highest, uh, retention or
[03:42:36]  satisfaction, whatever you want to call it now, two years in a row. Um, that's not hard to do for a small library, um, so much,
[03:42:47]  but like, uh, it, it, it's still nice to be, to be recognized on, on that. And, um, this is usually the chart that everyone
[03:42:55]  uses as the, as the, as the kind of main chart. And I think what happened was last year, when it's all came in the blip, there
[03:43:04]  was a sort of thinking, um, that like, oh, you know, how did they get on the pole? This just screws up all our numbers. Right. But
[03:43:12]  in a sense, Svelte has been taking, has been taking advantage of this the last few years too, because it's essentially the same idea of having small users and
[03:43:22]  all the people who use it chose to use it. So they're really happy about it. So, um, there is that kind of mentality. And since solid might
[03:43:33]  have had last year, or let me look at usage, the lowest usage that anyone had ever seen on this chart. Now Alpine had similar low usage, but they never
[03:43:43]  spiked. I'm just looking at like the lowest usage, generally speaking, a lot of frameworks never got on this chart until they, their usage was like 10% is
[03:43:51] h. Um, so it was eight, eight, you know, 10, like it's not, it was kind of, I bet, I guess the last few
[03:44:01]  years they've been adding ones on solid was 3%. Uh, when it was added quick was two is 2%. This is now the lowest usage we've ever seen a framework
[03:44:09]  get, get on here. Um, and that kind of caused a bit of a controversy if, if everyone remembers. Right. So it was kind of funny because I
[03:44:18]  witnessed a lot of this where people kind of just like ignored that solid existed when they talked about the results or they kind of like opened up solving, but what's this?
[03:44:26]  Oh, it's react and closed it and going, huh, of course it's number one. It's react. You know, like there was a lot of that kind
[03:44:33]  of response. And I mean, uh, I personally, like I get it. Right. And I talked about this last year and I released an article. Um,
[03:44:46]  but it happened again. Right. Uh, which makes it a little harder. No one seemed to get my reference here. Last year, the sample size was called in scrutiny
[03:44:55] , but at least you could cover the top corner with a well-placed logo. Um, this comment was based on the fact that I actually watched streamers.
[03:45:03]  In my case, my, my head's down at the bottom, but they had their head at the top and they've literally, I kid you not. I watched things
[03:45:10]  where they scrolled it in such a way that solid was like under their bubble. And then they'd be like, yeah, Svelte is having a really good year
[03:45:16] , blah, blah, blah, blah, blah. And like, just, you know, just use like skip over talking about the results there. Um, I,
[03:45:24]  I, I wrote a very long thread, um, about, about this whole thing. Uh, uh, not this whole thing, but my review of the re of the
[03:45:35]  results. And I, but just to that comment, just so you guys have the visual, um, this, this is another example of, of the kind of stuff
[03:45:45]  that, that, that I would see, like the picture would be posted like, like this, um, for, for last year. Um, yeah. And for a
[03:45:56]  lot of people, this is what their starting point, but it was, it was just funny that like, um, the thing was Svelte was Svelte was
[03:46:04]  supposed to be the future and Svelte is still the future. Don't get me wrong, but it was supposed to be like the future. Like we were supposed
[03:46:12]  to move away from react or react looking things and JSX and all that. And Svelte's compiled into the language thing was supposed to be the future. Um,
[03:46:19]  we hit a lot of resistance early days with solid, um, especially with Svelte and view side of things. Um, because it was like, it was suggested that
[03:46:30]  there was a path forward that had a lot of the same benefits, but didn't look like them and actually believed in the stuff that reacted. It was actually, it
[03:46:39] 's kind of like a philosophical argument to a certain degree. Um, so yeah. Yeah. Like, so yeah, I mean, there's nothing wrong with that, but
[03:46:57]  it's, it was just, it was just one of those kind of funny, funny things that was going on to the point that like, if you go look at
[03:47:11]  the last year, there was a few people like Fireship who actually were like, said like, Hey, what's this? Right. But there was surprising amount of
[03:47:18]  like, just like, look at our chart. We just Svelte react like, like, like, like this. And as I said, I love the fact
[03:47:26]  that this year, when you look at the chart, it's not just solid quicks here too. Right. And, and obviously Svelte, which is all like
[03:47:36]  nothing against Svelte here. Like last year, me and Rich did a bit of a virtual high five on the release announcement. I just wanted to point out that
[03:47:44]  we have all like this little block that's forming up here is maybe not substantial that much on usage yet. Um, but it's a kind of a sign of the times
[03:47:55]  because it's not just retention interest in this case Svelte has kept the highest interest, um, quick jumped in at a very nice interest level and solid actually jumped in
[03:48:06]  interest. I think this is actually pretty indicative I'm it's, it's hard to actually jump in interest. I think people were discounting solid, uh, even
[03:48:14]  coming into the results last year. And I'm, I'm actually probably most excited about the fact that solid's interest, um, has gone up to be more aligned with
[03:48:24]  Svelte and quick sentry than anything, because I think a year ago, even if solid was happy with the people that used it enough, more people were like
[03:48:34] , Oh, I could care less about this. That's, that's where the shift is, you know, and this is over a time period where awareness has completely shifted
[03:48:43]  to, right? Solid was at 38% awareness and now jumped up to 66% awareness, right? Quick has a good entry at 50% awareness. That's, that
[03:48:52] 's pretty impressive. They've definitely got the message out there, um, compared to last year where apparently not many people were aware of, of solid, but I think
[03:49:01]  it gets more interesting when you, when you can actually look at the numbers cause the numbers actually tell you a lot more. And I, we didn't really talk about this
[03:49:09]  on the previous stream, but you can actually see when we're talking about, um, sorry, talking about numbers for, um, uh, where was it? Did
[03:49:21]  I, did I choose the wrong group? That's interesting. I thought, why am I not seeing what I wanted to retention interest usage? This is rankings. I
[03:49:32]  don't want to see rankings. Can I, is it? Yeah. Okay. Percentages. Here we go. Yeah. It's more interesting to see, actually
[03:49:39] , I don't even want to see percentages. I want to see num, numbers. There, am I, is this this one? I'm trying to think of which
[03:49:53]  graph. Yeah. Yeah. Yeah. It's this one I wanted to look at. Um, cause it, it, it, it tells counts in it. Okay
[03:50:01] . So let's scroll down here. This, this is more illuminating, right? If you look at counts here, would use last year for solid was 340.
[03:50:09]  Um, this year it's 18, 80, 83. So it went from six or six or seven times more would use at the same time would not use went from 40
[03:50:23]  to one 90. So that's significant jump up, but interested went from 266 to 12,000. Like these are much bigger jumps, not interested did jump up
[03:50:33]  three X, but it's just compared to the, that even, even though never heard of went down so many more respondents are around this year that the never heard of numbers
[03:50:43]  actually, um, fact they went up is kind of incidental, um, comparatively. But like this is like, so when you look at the numbers, like
[03:50:52]  this is actually, it, even though the polls doubled, the, the would use like the usage tripled, you know what I mean? Like, and I think,
[03:51:02]  um, I, I, I think this is sort of like, it's looking at the numbers themselves makes this a little bit more interesting, especially for the smaller project for
[03:51:11]  larger projects. Um, it, it, it, it's not nearly like if we look at Svelte or something, which is kind of the mid tier,
[03:51:19]  um, there would, there would use, um, just over doubled. It went from 24 to 62 because, you know, which was aligns with the doubling of,
[03:51:32]  of people polling, you know, um, would not use, um, three X, um, interested three, uh, more than doubled. So their interest actually went
[03:51:46]  like went slightly up compared to the number of polls, this roughly doubled and never heard of tripled. Isn't that interesting or two and a half. So it's,
[03:51:58]  it's, I, I think the numbers actually can give us a little bit more insight. Um, every Angular dev heard of quick and that's a lot of people
[03:52:07] . Yeah. They're, they're, they're killing it on Angular side. I have to admit, I, I, I'm, I'm seeing, I saw
[03:52:14]  a tweet the other day, uh, today when I was looking where someone was like, I learned about Svelte, you know, cause it's cool. But then
[03:52:23]  they're like, I'm an Angular dev. So I learned about quick. And then they learned about solid after quick through Mishko talking about solid. Um,
[03:52:33]  it makes sense when the number of pollsters have doubled, right? Um, so, but yeah, the never heard being more than doubling actually is actually weird. I have
[03:52:44]  to admit that is weird, but yes, uh, I I've noticed that the, it's interesting. Cause I was at an ng-conf and to a certain degree
[03:52:56] , when they come in there with quick, um, there's a certain portion of the audience. It's a group who just don't understand the problems of quick solving
[03:53:04] . Cause Angular hasn't even got to those problems yet. And it's their server side stuff like the hydration stuff, you know, but like when the message clicks, I
[03:53:16]  can see, I can see it. Like really, really like clicking hard because it's for a lot of them, it's, it was the first time they've seen
[03:53:23]  a lot of stuff that other modern frameworks have had for like seven years. And it's just like, suddenly it's like, Oh wow. I could do this.
[03:53:29]  The interesting thing is other than the resumability part, most of those pieces actually work in, in, um, other frameworks, but like quick, quick is less.
[03:53:38]  Like it's like, like it's, it probably feels like, like you'd been using jQuery and then suddenly someone's like drops, like react on you and
[03:53:47]  like, look, like there's nothing between jQuery and react for six years. There's, you know, like if you ignored, you know, like if you
[03:53:55]  ignored Ember and knockout and can JS and, um, backbone and all that, and you just, and even Angular one and just went, here's jQuery.
[03:54:05]  Here's, um, here's quick, like, can you picture how powerful that would be anyway? Um, yeah, no, I've, I've been noticing
[03:54:15]  that a lot recently. Um, but it's good because now all those Angular guys are also talking about reactivity, talking about signals and it's, it's, it
[03:54:24] 's, it's, it's, it's really cool to see this progress forward. Um, yeah, I, I didn't, I didn't show this here
[03:54:31] , but both, uh, uh, Steve from Builder, um, and, uh, and Mishko wrote really complimenting, um, tweets, um, uh
[03:54:43] , to Solid this week. Um, anyway, let's get out of this data for a second. And I, I probably dug a little bit too deep, uh
[03:54:53] , on this and can I look, I love some of these charts. I'm only going to really focus on stuff in my kind of front end, back end or full
[03:55:02]  stack area of the world, but like the only thing I'd like to say here is Angular has been kind of making a comeback, even though they've been dropping down on
[03:55:12]  the rankings, you actually see their percentages have been going up since 2019. Okay. That's kind of flattened out now. So, um, that's worth noting
[03:55:19] . Everyone else has been on a slow down trend, you know, Alpine preact view react reacts actually stayed up really high until 2020 or even 2020 was high 2021 and
[03:55:33]  2022 is when react started actually jumping significantly down. Um, not sure the exact thing, maybe people waiting on suspense, server points, who knows what, but that's
[03:55:43]  when they started actually notching down more, um, which is interesting. Um, yeah, no, we're just doing this week in JavaScript. Um, this is my
[03:55:55]  favorite chart. I tell everyone this, I told everyone this on the stream, because this is, uh, this is when I walk away on Mindshare. This
[03:56:04]  is the one where I kind of decide this is the one where I kind of decide, um, like what the actual in people's heads, what the order of, of
[03:56:18]  frameworks are like if you were to choose your first framework and then you're like, Oh no, you can't use that. What's your second to third in a
[03:56:25]  completely like, you know, like what the, like popular, like what's the top framework you're like, if I'm making a top five list of JavaScript frameworks or
[03:56:34]  whatever topic, this is the thing that I use. Um, which is really cool for preact. Cause they have, or it's not preact, sorry, for
[03:56:43]  quick, cause they've jumped into the five slot. Solid is still number four. It was four last year. But what's really cool. If you look at this
[03:56:51]  chart and not, not everyone can read this chart really easily. Cause this is positivity versus negativity. And the dark is like more how fixed the thing is like would use again
[03:56:58] . And this is interest where this is like wouldn't use again. It's, I feel like the more dark colors, maybe, um, they, they have different dynamics
[03:57:07]  here, but this aligns on the, on the size of the green, um, versus the height, which is a total number of recipients. Uh, and where
[03:57:16]  we're sitting right now is that Svelte is clearly number two. It's kind of even more so than last year. It's kind of taking over the mindsh
[03:57:25] are of like where Vue used to sit, right? We all know angular is here for the most part, but mindshare while Svelte is, is
[03:57:33]  right up there. Um, Vue and Solid are almost tight. This almost flipped this year. Um, which is crazy to think Solid could slide into number three.
[03:57:44]  Quick has a very strong entry here. And then Preact, um, I think they had an okay, a decent year. They kind of pushed themselves a little bit further
[03:57:52] . Um, cause things had slowed with them. I think the release of signals brought awareness again, and then we get into Lit, Alpine, Angular, Stencil
[03:58:00] , whose first year on the charts wasn't the best year. And then Ember. Right. That, that, that, that's what, that's how I
[03:58:08]  read these kinds of charts when I see it. My favorite, one of my favorite things about this one, um, gotta love it. Um, is that they're,
[03:58:19]  they're, they're, they're, they're, the, the, the awareness affects the height of the bar. Um, but it's more like positive sentiment versus
[03:58:30]  negative sentiment. Yeah. Um, that normalized by the height of the bar. Yeah. No, I get it. Um, but what's what I, what I
[03:58:44]  really, um, what I really liked to thought was amusing is I think people didn't understand what rendering frameworks were. So when they're answering this question for front end,
[03:58:54]  the rest, almost all the entries into the front end, like right in field are actually, um, full stack. frameworks. How's Ember's awareness solo.
[03:59:07]  Um, we can, we can watch that actually. Let's look, look, let's see what's happened to Ember's awareness. Ember has gone so much
[03:59:14]  less popular over time that actually less people know about it. Um, uh, just to connect, to make sense. Ember was like 96%. Back in 2016,
[03:59:28]  everyone knew what Ember was pretty much, but watch 94, 93, 91. Okay. So still 2019, most people were Ember, but look at this 87,
[03:59:36]  77. this year. Ember is less known than Svelte. It's actually about as known as Preact now, which is, which is kind of crazy
[03:59:47] . Ember was the react of its time. Yep. I mean, for a couple of years, I know it's hard to say. Angular was pretty popular back then
[03:59:58]  too. Uh, what did you mix? You missed Phoenix, not Phoenix, you missed LiveVue.js. But yeah, I mean, if we're talking
[04:00:08] , if we're talking this, I, I, it's just hilarious that the freeform field is all like full stack frameworks. Like Elm is the only one
[04:00:15]  that probably, and, uh, jQuery that legitimately probably should be on this list, like in this zone. But I think people just didn't know that. Can we
[04:00:25]  see from, can we see what the other write-ins were? No, that's too bad. I feel like, I feel like, like the other frameworks that didn
[04:00:33] 't fit into this category kind of got robbed. I mean, stuff like who, I guess you're like, well, who, who's that? Like Aure
[04:00:43] lia or like, um, uh, this Riot.js or, um, Mithril or like the, there, there's a lot of semi known JavaScript frameworks,
[04:00:57]  um, that basically got pushed out by all these server rendering frameworks. Yeah, um, Marco should have probably got a vote in under rendering frameworks, uh, here,
[04:01:11]  and it showed up last year on this list, but it looks like it, there were not enough people who voted Marco this year, um, which is too bad. Um
[04:01:19] , I voted, I, I, I wrote in Marco here. To be fair, Redwood has 12 here. So, um, yeah, uh, we'll,
[04:01:25]  we'll talk about that one in a, in a second though. Um, but in general, people are pretty happy front end frameworks. Solid had a good year.
[04:01:36]  I, I, my, my prediction is people who cover these, the, this survey aren't going to talk very much about this one. Cause it's kind of like
[04:01:44]  one of those things where you like acknowledge, you're like, oh yeah, these guys are like, people want to use them, but so what? Like, it
[04:01:50] 's hard to say much about this because it's like, like, what does it mean? Well, it means that you're still using react. So yeah. So
[04:02:04]  let's talk rendering frameworks. Cause if solid had a good year, Astro is like literally the same. Like if you look at the numbers, it's like the mir
[04:02:16] rored there. Astro has even higher retention, which is crazy, but it went up a couple of cents. Same way. Solid wanted to present a retention interest.
[04:02:25]  Astro also went up a little bit, not as much a jump in interest usage. Same thing. They jumped even bigger. We went three to six. They went
[04:02:32]  three to nine. So very impressive usage. Same zone of thing and awareness thirties to sixties. That same doubling effect that we were, we were talking about
[04:02:40] . I think, I think like, I think Astro's rise here is very, is it's, it's, it's a big deal. Cause they've legitimately
[04:02:54]  found a use case and been able to, to translate that into usage. This, this, this three to 9% is really impressive in how fine green is. Cause
[04:03:04]  it's not like people dislike next JS. In fact, next JS is even from happiness standpoint, even makes react, not like look at this. 88, 91, 92
[04:03:14] , 91, like next JS hasn't dipped, even though the positions might suggest as much, it's like a strong nineties for five years. Like that is impressive.
[04:03:24]  Um, right. And I, I think, I think that's really kind of key here to understand is that, you know, you know, these guys are the
[04:03:35]  new players felt kid and Astro remix launched strong last year. It's an interesting chart with them because it's so I don't know what the make of this, but
[04:03:49]  it's definitely an interesting one. Cause when you look at this, it looks like they're green is actually completely flat. And everyone knew who heard more about remix decided
[04:03:57]  that they're not interested in it. That's not how these things work in reality. It's more likely as some people got uninterested and new people got interested in it
[04:04:04]  shift, but it's just like the graph looks like that. Um, you, you say that, but I actually don't think that's true. Like it would
[04:04:19]  look fine, but you'd see the percentage go down from 93 to 83. Um, like the, to be fair, these percentages probably wouldn't go down unless stuff
[04:04:31]  like Svelte or Solid or Quick existed. Right. So, but the, so I want to point out that like people still very, very much like next.
[04:04:45]  Yeah. So yeah. So yeah. So is this usage thing? Yeah. How's next on usage? Yeah. Ah, 10% to 50%. Steady growth
[04:04:52]  too. Like, honestly, what's there not to be impressed with? No, I mean, what's there not to be impressed with? No, I mean,
[04:05:14]  yep. It's still funny. Like these guys are still have a lot of awareness to catch up on compared to like Gatsby or next Gatsby is like the
[04:05:28]  Ember of render frameworks, right? Like it's, it, it, it, it just dropped right off the cliff. Um, in terms of retention, the funny
[04:05:41]  thing is like, it's big part of enterprise. It's big part of enterprise. People still use it a lot. People, but in terms of like, I
[04:05:46]  guess this sort of, um, segment that is on the survey, like this is, this is what you get. Yeah. Um, I don't know what's
[04:05:59]  up with Eleventy. Um, I feel like this, like, it's hard to tell from numbers. It's possible that the new pool of people query,
[04:06:14]  like, is, did Eleventy's awareness go down at the same time? No, it stayed about the same. A little bit up. Okay. So that
[04:06:22] 's not, that's not what it is. Huh? Yeah. I'm not, I'm not sure. The other thing though, could be something even simpler than that
[04:06:29] . It's just like usage went down though. It's possible that Astro does what Astro does so well that like, while I don't think it affected usage
[04:06:41]  of Eleventy, I wonder if it's, if it affected, uh, interest. Eleventy though, added a lot of really cool features this year.
[04:06:50]  We talked about like web C, the, the, the, the islands or whatever, and the, with the web components and like a lot of things that would give a
[04:06:58]  lot more power to JavaScript. So I don't know. It's, I can't really speak to that. It's, it's kind of similar trend line to actually
[04:07:06]  to, to remix here where it's about a 10% drop. Yeah. I don't know. Yeah. So yeah, this is a hype game. So I
[04:07:21]  think, I think Astro is just kind of digging into that and maybe hit Eleventy harder than other things. Being a hype game is tricky when you're a new
[04:07:29]  player too though. So like, I don't know, remix is going to do something that'll probably like blow our socks off or something next year and whatnot. But again
[04:07:39] , again, this is, this is the top three. And I think this is, I told you that the realistic thing, even if solid or remix or sorry,
[04:07:49]  solid or Astro kind of top the satisfaction retention thing. If you put it into this chart, which is the chart that I like to look at. Next is clearly number
[04:07:56]  one. Svelte kit and Astro are coming in closely in two and three, then drop off to remix and Nuxt and this. And part of this is
[04:08:04] , I, there's more react developers and view developers of this, but this is, this is essentially, as I said, my, my, my, my order here
[04:08:13] . This is what, this is in my head, how I rank the frameworks. Um, so big on Astro and Svelte kit in coming in here is
[04:08:25]  two and three. Right. You know, I love this. I think I, I, I pointed this out on Theo's stream. I think this might be something
[04:08:37]  I'm partially responsible for, but when I told everybody about the JS survey, I, the way I sold it was, oh, it worked so well this year.
[04:08:49]  I just, I spent so much time on it this time instead of being with bugs, but writing in everyone's name that I, that I, that I wanted to.
[04:08:56]  There's so many names. It took me like 20 minutes to fill in the survey. Well, um, anything related to our community did pretty well on write-ins and
[04:09:05]  solid start was the highest write-in for rendering servers. Um, I hope our GitHub stars and growth over this next year merit us to get in the shortlist next
[04:09:13]  year so we can come, come up with these people. Um, or these frameworks, but this is a pretty dominant display on the write-ins. Um, so hopefully
[04:09:23] , um, I don't know. This is really cool. Uh, yeah, I'm not going to talk about testing. I'm going to open the mono repo
[04:09:36]  tools only for a second to show that, um, because not everyone spent time here, but I did get a pick-in for, um, State of JS and my
[04:09:46]  choice for the year was Astro. Um, so I don't know if everyone saw that, that they've scrolled down in here enough after looking at Bun and D
[04:09:55] ino, but yeah, I don't even know what this category is. Like they only have three, whatever, where there's other tools. Hmm. Yeah. But
[04:10:05]  yeah. Astro awesome framework. People should check it out if they haven't, I'm pretty sure they have. Otherwise the results of the wouldn't be like this.
[04:10:15]  Um, other cool things less out of my focus, but clearly TypeScript is just like, sorry, let's do like, this is just absurdly bonkers, right
[04:10:28] ? Like it's only about, it's just like, what do we got here? 34, 28. It's like 60% of users use TypeScript at least
[04:10:46]  80% of the time. Um, so like, yeah, I mean, this, this is a sign of the times, right? Um, front end is still
[04:11:06]  leading or the back end or I guess full stack is catching up. Although I think this is on Theo stream. We realized that this correlates exactly to the number of people
[04:11:14]  who said they use express. So this is, this is node back ends, I suppose. So, you know, this is real, um, single page apps.
[04:11:25]  I don't believe this chart. I don't think half the people know what they're using or what, what these terms are. So I kind of move on from
[04:11:33]  there. Um, resources, um, yeah, it's everything that I put in didn't really get much, uh, like all my write-ins didn't really get
[04:11:50]  much representation here. So I think this is some interesting stats though. A lot of self-learn directed, which is, which is makes a lot of sense.
[04:11:58]  Some online course is free. Um, online courses paid in school and stuff on the job are much lower. It seems though videos are making a big cut into this.
[04:12:11]  Um, and if you look at the video screencast numbers and compare them to fire ships numbers, I think it's, it's like they, they match up almost,
[04:12:22]  uh, almost directly. I, yeah. Yeah. Yeah. Fire ship 15, three 64. Um, so just wanted to kind of give that, give that a shout
[04:12:33]  out, but yeah. Blogs, Magazine, Medium is still beating Dev2. That's too bad. Um, Stackflow, Stack Overflow, sorry. MD
[04:12:45] N. These are just websites you learn about stuff. This all makes sense to me. I love how Kent C. Dodds always kind of like manages to get so high
[04:12:54]  up on it. Kent is amazing. And this is, this is cool. Like testimony how you just like, it's like Kent C. Dodds versus like all these
[04:13:03]  like free code camp, web.dev, Udemy, you know, so scream back. West bosses up here too. So, but where are we going?
[04:13:12]  Video creators. Seriously. This got the, as a framework author, if fire ship like mentions you or shows an image of your stuff in a video, instantly you get like
[04:13:25]  a hundred stars on GitHub. Even if it just flickers for like 10 milliseconds. Um, if he does a video on you expect to get a thousand stars dumped on
[04:13:34]  you. Um, so. Yeah. I learned from this week in JavaScript. Thank you. Um, and actually to that event, we're actually pretty close here because
[04:13:55]  we've got a lot of amazing people who are on the list. People like prime. We saw, um, earlier people like Jack Harrington coding garden. Um
[04:14:03] , obviously, uh, where is it? A lot of, a lot of other really great, uh, video content creators. Um, you know, fire ship. Am
[04:14:14]  I forgetting anyone? Kent C. Dodds, Benny Wad. Yeah. No, I think I've talked about everyone here. No, I'm kidding. And
[04:14:21]  obviously Theo, um, nice debut here. Um, jumping right in, um, at number four. Uh, so really strong showing on the video content, especially when you
[04:14:33]  consider like Theo here, 5,391. That kind of, you could see the rise importance of videos. Cause when you go to podcasts, it's, it
[04:14:43] 's already like almost double syntax, the most popular podcast. So like, yeah, I mean, the reach of video is just amazing. And, um, thank you to
[04:14:55]  all of those people who said they learned from this week in JavaScript. Cause kind of like solid start, um, uh, in the other one, we, we got
[04:15:06]  number one on write-ins for video creators. So, um, that's, that's all things to, to you, to you all. Um, so yeah
[04:15:16] , I don't, it's funny though. A lot of the people here are actually here. Um, like McGill or like Jack Harrington or prime. I think
[04:15:30]  they were under the fold and people didn't see it. So they wrote them in. Not that adding these smaller numbers would have added to the other ones, but it actually
[04:15:37]  suggests that being under the fold might've had a significant impact on the results. Um, because usually you can take any of these and like, I don't know,
[04:15:47]  like 10 X them at least if they were shortlisted. So, yeah, I mean, very cool. And honestly, this is, this is super cool. So thank
[04:16:00]  you everyone who's watched the streams to kind of write in. And as I mentioned the, the, the, uh, some of my favorite, um, podcasts did
[04:16:13]  not get, um, that much of a showing here. Um, but yeah, JavaScript Jabber. I had a really good time with that with Dan. Um, um
[04:16:23] , I'm trying to think of any of the other ones that really quite enjoyed. Yeah. Not on here. Uh, pod rocket. Absolutely love pod rocket and FS
[04:16:35]  jam. Um, anyway, uh, this chart, this last chart of the show. Um, this was surprising to say the least shocking and surprising. Um, yeah
[04:16:52] , I, I, I don't know what else to say about this. I, I hoping the results up, it's funny. I saw that the JS, uh
[04:17:04] , that the survey results are up, but it was right at five o'clock, Rick, right. When it was time to eat dinner, you know, so to
[04:17:10]  speak, I'm pretty, try to be pretty religious about that. And, but I, I saw it happening and I posted it as soon as I could. I
[04:17:17]  think I was one, I think I was one of the first people to post the results up on Twitter. And I didn't get to actually look at them. I,
[04:17:25]  I flipped to the frameworks tool, saw solid was, was 91 in retention. I was just like, thank God. You have to understand there's a little pressure there for
[04:17:32]  expectation when you kind of spike it one year. And then like, who knows what's going to happen next year? Um, now I'm less concerned, whatever happens
[04:17:40]  from here on doesn't matter. We, we showed it. But last year I was just like, what if this was just some blip and, you know, kind
[04:17:47]  of double thinking stuff. I didn't see this until like a couple hours later. Um, and, uh, when Fred did his, uh, uh, chain of,
[04:17:58]  uh, reviewing the, the results. And yeah, I, I mean, I think this is just telling people to do write-ins. I don't, I
[04:18:09]  don't know what else to say, but incredibly awesome to see this, to be in the, it's funny. The top four are all framework authors, Dan, Rich
[04:18:18] , myself, and Evan, but to, to kind of see this kind of response to this. Um, this is good validation in terms of like, it's powerful
[04:18:32]  for people more outside of our community to kind of see, see this. So, which is really cool. Cause you have to understand like, in terms of impact and reach
[04:18:41] , um, compared to some of these other people, um, I am not that. Right. Like we just got to 20,000 followers this week on Twitter.
[04:18:53]  Um, which is really cool. Um, but if you click on any of these people, um, it's funny, that's not the right. That's not the
[04:19:02]  right Twitter. Oh, that's hilarious. Hilarious. Anyways, 300,000, uh, 72,000. Um, I mean, it doesn't really
[04:19:14]  like these people, Anthony is like the next closest. I think he's at 40 or something or 30, like these are all big names. people who've been,
[04:19:26]  been working, have big social presence and Tanner, man, Tanner at 13, you know, um, and to, you know, as I said, obviously these are really
[04:19:39]  small numbers for voting, but just to kind of have that kind of impact that people would write. Yeah. Name it. It's really cool. Yeah. No,
[04:19:48]  I, I, I, I, I know, I know Dan's Twitter. Um, so yeah, I dunno, it's obviously just a popularity contrast and we can
[04:19:56]  all point out that Sarah Drasner is way too low on this list. Um, but, um, well, so many people, Addy has money. Um
[04:20:12] , yeah, we'll say this, Zach is showing up here. So people are aware of like Eleventy enough to like write in his name, um, here.
[04:20:23]  So I, yeah, no, this is, oh, Mark Erickson, Jason Miller. Yeah. Like everyone on this list is, is amazing. Um, I
[04:20:34]  just like skipped over like half of them and then like, yeah, anyway. Um, so yeah, I mean, the funny thing is I didn't cover it,
[04:20:45]  but there, there was only one winner for this, uh, for the survey this year. And that was top level of weight. No, I'm kidding. It
[04:20:55]  was VEAT, VEAT, VEAT. Um, I do like this animation. It's cool. Most write-ins was Astro. So good
[04:21:07] , good on you guys. Good, good on you guys. And then I think this was React, no private fields and React. But yeah. Um, VE
[04:21:21] AT, VEAT is a game changer. We all know that. Everyone who follows the stream knows that. This is no, there's, there's no surprises there
[04:21:28] . All right. Um, but yeah, so that was a JavaScript survey. I, uh, it, it was, it was really awesome experience for me. Um
[04:21:41] , a little bit of an adrenaline rush realizing, you know, how things showed up. And honestly, I don't know how things got here. Um, there's
[04:21:50]  a lot of interesting discussions of the implications of these things. I think we can't read too much into any of this, but it always feels good to be recognized. So
[04:22:00] , um, I think that's really cool. Um, and the similar, we were talking about Quick and Builder. Mishko gave a very glowing thing about
[04:22:11]  solid. And as I said, this is, he, he has a big sway with the angular community. So I think, I think, I think he's kidding.
[04:22:19]  He said, I think all future frameworks will be fine-grained reactive. That is a statement. So, um, very cool. So very, very, very cool
[04:22:31] . Um, okay. But there was, there was, there was, there was another kind of couple little topics here that I wanted to cover before the end. And
[04:22:39] , um, oh, sorry. Like, seriously, like Lee Rob too. This is, this is, this is even before the results came up. I, I,
[04:22:46]  I don't, I, thank you. Thank you. I don't know. These, like, you understand how awesome these people are that are saying this stuff. That
[04:22:57] 's, anyway, we got a lot of work to do still. Um, and the truth of the matter is it's not all easy. Um, shout out to
[04:23:10]  Maple. I, I, I, I saw this and I was like, I was like, yeah, I guess it's time for this. Right. I wish solid
[04:23:19]  folks wouldn't be all like, they've seen the light to people who still prefer react aside from ecosystem tooling reasons. But I, I realized I'd probably like that
[04:23:28]  with remix. So, uh, this was, this is a good thread. If you want to check it out. Cause I think the conversation here is actually relevant.
[04:23:38]  Like I, I saw this and I didn't respond at first because I was like, I was like, you know what? Like this is a good conversation to have
[04:23:55] , especially out in the open. We, we've talked about this stuff in discord. We talked about it on the stream when we talked about the tech bros gatekeeping
[04:24:03]  kind of like being too pushy thing. And I've been really proud of the community and the way that they've generally, um, avoided that. You know,
[04:24:12]  I try to keep, you know, there's always going to be the comparison with react and stuff, but like generally trying not to be like, have you solid yet as
[04:24:21]  a response to like everything. Right. Um, the trick part is when you're not part of that community and you see that like after a few times, it starts to
[04:24:27]  become a little grating, like, like, like, don't do that. Like we, we, we, we would often comment that like, that's,
[04:24:33]  what's all Svelte ever did everywhere. You do something and be like, have you sell yet? You know, and I think we're getting to a point,
[04:24:39]  maybe a little burst in popularity and stuff there that solid is getting more of that as much as we try to keep this down. Right. Um, so I think it's
[04:24:49]  a good topic to talk through. Right. Um, and I actually mentioned that I'm a little bit guilty of this with Maple and myself specifically, I don't go around
[04:24:56]  telling everyone that they, that like, they necessarily. Um, need to, you know, see the light, but I definitely have a, a long-term optimistic
[04:25:06]  view for what we're doing with solid and fine-grained reactivity. So much to the point that when, you know, Maple's like, Oh, I still
[04:25:14]  like this model. I'm like, yep, that's good. Let's check. Let's chat in six months. Like I, I definitely put off that error.
[04:25:22]  Uh, so I, I do have to admit that I'm, I'm, I'm, I'm a bit guilty of this myself. Even if I don't
[04:25:27]  tell people that I, you know, I'm going to say we've got time. So I do have to remember that. The thing is, I actually liked the comparison
[04:25:36]  that I did in this, um, thread. Thank you, fuzzy. I, I, I go around and tell people that they need to use after all the time
[04:25:51]  too. Um, but like, this is, this might be the best of, I, I, you guys tell me if you like this framing. Okay. It
[04:26:08] 's, it's like the, it's not unlike the question between retained and immediate road modes and graphics for you, for people who aren't aware retained mode is when the
[04:26:19] , you, you, it's basically like what solid does or like HTML or the dom does where you like draw the thing and it sticks around and you describe how it
[04:26:29]  changes. Um, so like most UI, a lot of UI libraries work like that. Immediate mode is like a game engine where you just spit out the next frame,
[04:26:44]  every frame as fast as you can. You throw away the previous results. You directly access the video card. Instead of having, to be fair, this isn't a
[04:26:52]  fair analysis because react keeps something in memory and diffs it. So technically speaking, react is not like immediate mode. Like, but it, the, the idea generally speaking
[04:27:04]  is retained mode has better performance and immediate mode is easier to reason about because you just imperatively redraw the whole thing. So the, the, the, the,
[04:27:14]  there is a comparison to be made here. That's why I'm saying it's no secret that one approach is conceptually more performant. And one can be simpler
[04:27:26]  for people to reason about, um, because generally retained is always more performant than immediate. the problem. The problem we have now is we kind of got into this
[04:27:35]  hybrid zone where the lines aren't so clear. A react that always re-renders without consideration is an easier mental model. Definitely. Like the, when we had
[04:27:42]  class components and that was the approach, there's a render function as pure. You didn't expect state to persist. It was a very easy mental model to be like,
[04:27:49]  yeah, it just re-renders it. And most people didn't even think about the life cycles much. I actually think since hooks performance and react has probably gotten
[04:27:56]  better, people are probably writing better react code because they had to be aware of this, you know, of more of these things. And it's better for, there's
[04:28:05]  so many benefits that come with hooks for react, but the mental model is trickier. Um, and I said, now we care about renders and much more interesting comparison
[04:28:16]  because at the same time you could argue that, um, we're writing better react code, but its strength on model, um, kind of weakens like in terms
[04:28:29]  of simplicity. So with two completely competing philosophies, let's say like retained or immediate, we can only really contrast the best version themselves. And this is where my incredible
[04:28:40]  respect to the react team comes from because they are our immediate mode to our retained mode. This isn't a perfect comparison because I said they do retain stuff, but it
[04:28:47] 's like conceptually, it's that different when you talk about comparing react to solid, it's like two sides of an approach. And because of what is hard for them
[04:28:58]  is different from what's hard for us. We can attack problems in our own unique ways. So like, but what I was trying to get go to with this thread is
[04:29:07]  ultimately, if our paths continue to bring ourselves closer, it's fair to question the model suitability for the area. Like if react gets more retained modish, as I
[04:29:17]  was saying, like more aware of these updates, what renders like talking about things in terms of dependencies. Then there's a bit of a head to head. Cause then
[04:29:26]  you do have to ask if reactivity is a better model for this than what react is doing. And as I said, this goes beyond the particular implementation, but the model
[04:29:34] , and that's, that's, and even goes beyond the performance of what we're measuring in these libraries today. It's a question of like, what is the
[04:29:43]  better mental model for UI? So maybe there isn't a single one. Everyone has their own way of looking at things, but which is why I respect that there are these
[04:29:50]  differences, like what maple likes versus what I like, but I find it interesting that as react shifts their view and maybe in their model, maybe in their head, they
[04:30:03]  aren't shifting it. I think this is a fair question to compare and consider maybe if certain mental models fit better. I agree with this statement a hundred percent.
[04:30:21]  That's the thing I, people will always find ways around the framework. That's like, and that's why escape hatches are important to understand the distance. This is
[04:30:37]  my biggest concern. There's different ways to handle complexity. Everyone knows that abstraction makes things, not everyone, but generally what happens is abstraction makes things easier, not simple
[04:30:47] , simpler. Usually the abstraction is a tool to hide complexity for some case, but you generally a lot of, a lot of frameworks like react preferred low abstraction where possible,
[04:31:00]  because that keeps things simple. If you get to a certain point, there's no real other option except to add abstraction. If you want to keep things easy. And I
[04:31:11]  think that one of the challenges is those escape hatches still have to exist. And while sometimes we can look at the leakiness of an abstraction as a metric for how
[04:31:26]  successful a tool is at, you know, being consistent or being like, uh, complicated because if the abstractions don't leak that complication is never, uh,
[04:31:45]  put on the end user. They don't get to experience the complexity and that's a win. So if you go with the abstractions, hopefully they're not le
[04:31:54] aky ones. However, escape hatches are in themselves, uh, how should I put it? Like a intentional abstraction leak. And I think that if the further our
[04:32:10]  escape hatches, like get from the, our abstraction, like the deeper we have to go, the, it also is a reflection on complexity. Right. Some people
[04:32:24]  obviously had comments about some of these things. And I, I, there's just so much good discussion here. In react plus hooks, caring about what renders is almost
[04:32:33]  always a smell. This is a great comment. This is like, the thing is like, if you don't use use effect, I can get behind that except top
[04:32:38] -down model wise. Like at first I was thinking, oh cool, maybe dependency arrays are small. They're not, they're conditionals, right? You can picture
[04:32:47]  like when you're looking at React component, you see a dependency array. You're going to like, oh, if change, do this. If not change, do that
[04:32:53] . That's an, that's something easy to reason about in terms of top-down imperative thing. It's a conditional. However, because the code on the branch
[04:33:04]  you don't take sticks around, that requires to know, like that breaks the abstraction essentially. And having hooks like use callback and use ref kind of also make that more
[04:33:21]  obvious that you have to know when things stick around or when they render. So I, I, I think it's interesting. Actually, Benton here had great conversation
[04:33:33] . I've only talked to them recently a couple of times, but very intelligent, very thoughtful individual who's, who thinks about problems quite deeply. I was very impressed with
[04:33:46]  my conversations. We, I kind of go off about hooks and life cycles and ultimately the conclusion of this conversation is that all our efforts, at least from my perspective,
[04:33:58]  the conclusion is all our efforts are really around addressing gaps in the language. And we attack it a little differently, whether like Svelte's compiler, which might be too
[04:34:11]  simple of a solution for today. What React's doing React Forget? Because he, he asked basically, is like React Forget going to change this? And I said, if
[04:34:17]  anything, React Forget makes it harder to reason about the top-down model. And I think that, yeah, I tangented into here from the original tweet. Uh
[04:34:27] , but I think this, this conversation as an aside was very, very interesting to me. I think the more important conversation here is about, is where a lot of the
[04:34:38]  other people kind of framework people came, came in. Like you'll see the light eventually Maple. Um, but the Antonios are, uh, very involved with the
[04:34:51]  Svelte community. Right. You know, pushed Maple to say why, you know, and this is a great list. This is kind of, with React, I
[04:35:01]  like being able to describe my UI should be to talk better, depending purely on props and state. Like as a function. With solid concept, you describe what starts out
[04:35:09]  and how it changes over time. This is see immediate mode versus retain mode. Right. And I think this is really where the challenge comes in, right? So, I
[04:35:29] , as I said, I think, I think this is a good conversation there. But I also, I love stuff like, you know, a lot of people are
[04:35:38]  saying it doesn't solid have the good parts, but I think it's actually more interesting when we had stuff like, I saw some, Ryan Florence. I generally worry about
[04:35:44]  remix super fans acting like that. I love what we built, but nothing is perfect, right? I struggle with this sometimes myself. Can't see Dodds. Primogen
[04:35:58] . I'm like that with Rust. A whole bunch of people came up from the community to kind of talk about. Hit self-host before saying they haven't seen
[04:36:11]  the light. Points to be acting solid on the graph. This is a great, I'm just going to heart this right now. Solid is for most people definitely right
[04:36:25]  here. And this is where React is, at this point. one thing I will say is the way we teach solid is, and the way we talk about solid often
[04:36:51]  has considerations in terms of design points and in terms of like choices that are made by other frameworks, that's what I'm trying to do, which has actually been one
[04:37:01]  of the challenges here, actually. This is why I haven't learned TypeScript yet. Is that, I'll start doing the same for Astro. Is that like
[04:37:12] , it's hard when you, when you spend a lot of time in your own zone and your own bubble kind of working on stuff. In the case of solid, that
[04:37:19] 's reactivity. We've been working on signals. I mean, signals existed before solid. Um, signals existed, you know, in some form with MobX and
[04:37:30]  knockout and view and all this, but. Our little zone of where we built to this pure rendering, all the things that we needed in order to make a fine gra
[04:37:39] ined renderer, all the aspects and how we design it has been an area that people kind of. Who are experts in solid or spent time with solid for the last few
[04:37:48]  years. We've been harnessing in our own zone for like five, six years. We didn't have the quick spike up, you know, like when Svel
[04:37:55] te 3 came out originally. You know, to be fair, Svelte was around before Svelte 3, but that's when the compiler came in. Like an
[04:38:02]  immediate, like, oh, this is a new novel way, huge popular gain. Ours was a slow, slow buildup to the point that now when people are recognizing
[04:38:10]  signals in 2021. And it's, it's, I think it's particularly hard for some of the experts in our community to kind of reconcile that like some other people
[04:38:19] , like when they start adopting the patterns, don't get it or might like make their own versions that are slightly different. And it's like, there's this tendency to
[04:38:26]  want to be like, to educate and be like, look, look, look, that's really good. I'm so glad you're doing this. But the next step
[04:38:31] 's this and the next step's this and the next step's this. And then you'll get here and then like do this. And it's like, no,
[04:38:37]  no, no, like let them figure it out themselves, right? Like you got to contain that thing because like, it's, it's hard being the position. Cause
[04:38:54]  like they're, they're, they're Fabio. It's funny. We talk about him occasionally on stream. Cause he's very involved in our discord community.
[04:39:01]  He doesn't even use solid really, but he wrote Vobi, which is a very solid like framework. And he kind of gets into it with Ryan, who's involved
[04:39:10]  with some of the infrastructure side stuff at Preact. And they, I, at a certain point, I felt like I had to step into this conversation because Fabio holds
[04:39:21]  his opinions pretty strongly. And he didn't, he didn't come on here. Like he's, he's not the guy who goes on and goes, Hey,
[04:39:30]  you should be using solid, which is, I feel like what Maple's dealing with. He's just a very technical person who strongly believes that a lot, not all the
[04:39:39]  API to things. He's also written one of the best criticisms of solid today, but like the reactivity part, at least is something that, um, is like well
[04:39:50]  thought up through in designed. And when he looked at stuff like what Preact has been doing, um, and their approach, he was like, you know, like
[04:39:59] , this is fine, but it's not as good. Right. Like it's missing a bunch of stuff. And that's, that's a difficult conversation. Cause like
[04:40:07] , are you hating on other frameworks if you say that? Right. You know, like, is this a subjective opinion versus an objective opinion? And that, that,
[04:40:17]  that was the course of most of this conversation. Right. Like, and at certain point, they kind of get like a little heated with each other because, because at,
[04:40:27]  at a certain point, Fabio goes, yeah, yeah, I, I agree with you. I, I was being kind of subjective, but I am being objective about
[04:40:34]  this point, about the API design difference between Preact signals and, and say solid signals. Like, I think this is not even a subject. It is actually opinion
[04:40:43] ated fact. And this is, this is the kind of gray zone you get into where it's like, what, what, what, what, what's the,
[04:40:56]  what's the right response here. And I, I've learned over time, the right response is like, let people do their thing and not. Like if, if,
[04:41:04]  if there's a lesson to be learned and they've made their choice, then they will learn that lesson when it's due time and not to push it too much. Of
[04:41:13]  course, this debate kind of goes on and on and on. Um, and, uh, you know, it's, it's, it's unfortunate. I'm
[04:41:22]  trying to see where I stepped in at some point. I was just trying to be like, Hey, you guys, can you, can you guys like, it's okay
[04:41:28] . Because I guess average solid is basically Ryan says like, he'd use solid, even if the performance wasn't there. And Fabio was like, and you know,
[04:41:39]  average solid users chasing performance metrics. Like there's some stuff that's thrown around and honestly, this is kind of, this is the challenge of having these kinds of discussions
[04:41:50]  on Twitter. I don't think, I don't think if you, if you ever find yourself and I just, the reason I'm bringing this up with the community,
[04:41:56]  because I think it's important is if you find yourself in a discussion like this, where you're like this number of messages deep talking about some technical aspect, like this is
[04:42:06]  probably not the platform to have the argument on. This never, ever, ever goes well, um, for anyone, right? I mean, this, that's,
[04:42:20]  you know, like this, this just, it goes on and on. I'm trying to see if I can find where I finally came in. I see my heart's
[04:42:29]  in here. So I must've finally responded somewhere around here. Um, yeah, I mean, if you get here, it's, this is just not where the
[04:42:47]  discussion should happen. I, I, I'm, I'm, it's okay to make a comment about something you feel like what started this discussion. Um, but
[04:43:00]  like, yeah, I, this is just, yeah, I, I'm, I'm done digging through this one. Yeah, I mean, that's fair,
[04:43:21]  but I, I think this goes beyond, beyond the end of story. I think, I think, I think it goes beyond that. Like, there is this,
[04:43:31]  which is where this is important. But Preact is no slouch either from a performance standpoint. See, I didn't mean that Solid is objectively better than Preact.
[04:43:39]  I don't think it is. Preact is, this is maybe more using Solid. But I didn't, I did mean that Solid's interface for signals is obviously better
[04:43:46] . Like, those are strong statements. It's like, I used to play Magic the Gathering. People would say strictly better all the time. This is a, I
[04:43:53] , I, I think we need to avoid strictly better language. Um, uh, you, but I, I, I do want to bring this out because I think
[04:44:04]  this is the edge of the community. Um, I, I tried to mend things. There are mechanical reasons that are more obvious when building a Solid-like renderer,
[04:44:16]  and, and even more scenarios when building within that world. For me, this isn't a subjective thing either, but I appreciate that not everyone's trying to build the same
[04:44:21]  thing. That, that's trying to like end it. But this conversation just goes on and on. And, yeah, I mean, this is just, the,
[04:44:32]  at a certain point, you know, these, you know, I, talk about, I don't even know. Yeah, it, yeah, you know what,
[04:44:46]  we're done. Done with this one. This is, this is just, some of the discussion was really good. Some of the discussion offhand. I, I think
[04:44:54] , I think, I, I, I wanted to show this so that people can kind of think about how things look from the outside when you kind of get in these kind
[04:45:02]  of scenarios. if you've played, you know, yeah, I know. Strictly better happens with every new set. Of course. It's part of drafting
[04:45:14]  and like, yeah, man. Oh man, Stormcrow. Okay. So I'm, this, this was one of the, the, the kind of things that
[04:45:25]  I, I wanted to bring up on stream, because I think, I think it's important for us to, to kind of recognize as a community. Um, hopefully
[04:45:32]  this has some kind of impact on some people. I'm not just doing this to point out the, like, not to get into, like, I'm not just saying
[04:45:41] , don't be Fabio here. In my opinion, these guys are both responsible for where that conversation ended up. Um, it's, it's, it's essentially
[04:45:51]  like, do consider what the context of the conversation that's happening is. It's when someone goes, what framework to use? And you go solid, that's fine
[04:46:01] . If someone's telling you their thing and then you go solid out of nowhere, that's not as fine. And it's fine. I actually, I watched Twitter like
[04:46:09]  a hawk and we're actually pretty good about this. So I feel pretty good about this. It's just, um, I, I think as things grow, um
[04:46:16] , the, this will continue to be a challenge. I use Rust. Yeah. There we go. We're, we're done. Whole web dev space. You
[04:46:28]  just use Rust. Um, but yeah, no, I, that was one. The other kind of spicy topic this week that I wanted to talk about was this one.
[04:46:40]  Um, and this, this manifested in a lot of ways at the same time, when everyone reflects on the state of JavaScript, I think they like look at stuff and then
[04:46:47]  they go, they look at like the front ends thing and they're like, what the, his solid and quick and Svelte whatever. And they're like,
[04:46:56]  why are there so many frameworks? And, and this, this, this got like a lot of likes and quote tweets and attention. And I, yeah, this one
[04:47:08]  annoyed Theo a lot. If for some reason, this one doesn't annoy me as much. I'm used to hearing this and I can empathize on a certain thing.
[04:47:15]  What I don't like. And I think the thing that that's hard is I don't like that some people are lying to themselves. Everybody hates the current state of web
[04:47:25]  development. And I don't think that's true. I think the statement is like, I know it's a hot take. That's why it's prefix, but
[04:47:30]  it's just like, it's, it's, it's not, it's not, it's not true. Like web development has gone through so many stages and like
[04:47:42]  things are better now. Like at the same time that the complexities increased, so has, have our ambitions. Like these things go in tandem. You don't get to like
[04:47:52]  one than the other. It's not like, oh, we just need to return back to, you know, like make the web great again. Like that, that
[04:47:59] , that, that is not, that's not going to work. You can't like things have progressed forward. Yeah. Like Dreamweaver, there we go. Like
[04:48:08]  if every website was built on Dreamweaver again, um, would we be happier with web development? I don't use Twitter like at all. How'd you get into
[04:48:22]  fights about stuff? Um, yeah, I mean, I, I was guilty of this. I learned this lesson really early on in Twitter and I just didn't do
[04:48:31]  it. One of my earliest, uh, fights on Twitter was, and it was like the only one I was no, I had no followers. And I made a
[04:48:41]  comment going like, it wasn't my thread. They were talking about JSX and how you can, you know, analyze it or not analyze it. And how, um
[04:48:52] , you know, Svelte couldn't use JSX essentially to do what it does. You can see why that would be bait for me because I was just like
[04:49:01] , of course you could make Svelte with JSX. Of course. Like, like it's obvious from where I'm sitting, but no one knew about Solid.
[04:49:09]  It was 2020. No one knew about, um, you know, the work I'd done. And this was a highly, uh, thought thing. The experts all kind
[04:49:21]  of agreed. It was funny. It was like React stayed in their lanes. Svelte and Vue stayed in their lanes and everyone's kind of happy to do this
[04:49:26] . So when I saw that comment, I was like, no, no, you can completely do it. Like you just do this. And the JSX is just
[04:49:31]  syntax and all this. And the debate like got into people like, tell me like that. I didn't know what JSX was. And I'm like, well,
[04:49:37]  JSX is a spec. Like I'd linked, I'd be like, isn't JSX spec? Like this, this is JSX, right? And you know
[04:49:46] , I showed the spec and I'm like, what's the first line? JSX is an XML like syntax extension without any defined semantics. That's what JSX
[04:49:53]  is. No semantics. And you know, some people actually wrote a dev2 article about this after this effect. I guess I'll share it in here. And
[04:50:01]  this is kind of, sorry for this tangent, but it, it was one of my first dev2 articles because I was kind of testing dev2 at the time, but
[04:50:08]  where was it? Maybe web and codes aren't the future thinking granular JSX is not hyperscript. Let's drop this one in chat, but Yeah. I
[04:50:26]  mean, it was, it was definitely possible. And I remember this experience I'm being cause like, I actually got kind of visibly upset because like I was getting
[04:50:36]  like clown faces and stuff. And I'm like, no, like people were trying to tell me that JSX wasn't compiled. And I was like, well, of
[04:50:42]  course it's compiled. It's like runtime transpiler or something. And I'm like, no, no, it's freaking compiled. Like you, and like I
[04:50:51]  was, I was getting flustered and it was very difficult at the beginning. Cause like I had like no followers and it is, turns out the people who were in that
[04:51:00]  argument with me were Adam Rackus and Jamie Kyle's, uh, like Jamie builds ghosts. And like, like it was, yeah. I mean, you, when
[04:51:12]  you start seeing other people, like tweets, the other person makes it like, it starts heating up and next thing you know, like you feel like you have to say
[04:51:19]  something. Cause you like know that like, yeah, I got past that point. But I remember it was very difficult. Cause at a certain point I was like, I
[04:51:28]  wasn't even trying to bring up solid. I was like, at some point I was like, look, okay, here's this, like, look, here's my
[04:51:33]  library solid. I can prove to you that JSX can be analyzed like Svelte, look. And then like the response to that was like, Hey, um,
[04:51:40]  Dom Ganaway, like Inferno guy, we talked about earlier, this guy says he solved what you couldn't. And like, like people get kind of
[04:51:49]  nasty sometimes on Twitter. Um, and yeah, you wonder how you get into that, but like, it's, it's completely possible. Um, thank God, uh
[04:52:01] , Dominic Ganaway is such a standup guy. And he was like, no, this is legit. But like, that was, I, I got
[04:52:09]  into not as big as that, but I got into little tiffs like that for a while. Cause I was trying to find my ground into Twitter and I just wanted to
[04:52:20]  be part of the conversation. I didn't understand how it worked. I had no following. Um, and like, I was like, I'd see conversations of things that
[04:52:29]  I thought was like, no, that's clearly incorrect, you know, like, and I was like, we like, if thought leaders are saying that we should talk
[04:52:36]  about it because the, you know, and, um, it's a lot easier when you actually have your own base and people, you know, and stuff to get into
[04:52:48]  the conversation. But I don't know. I just didn't understand how Twitter worked. But yeah, I mean, I've learned a lot since then. I just
[04:52:58] , it was one of those kind of, one of those kind of scenarios that it, it is easy to get fighting with people on the internet. Um, anyway, that
[04:53:14]  was a bit of a derailment. let's, let's, let's, let's get back here. Um, but to the, the thing here is
[04:53:23]  where I was trying to go with this is that web, mobile teams run ahead. I've never experienced this in my whole life, but that's okay. Um,
[04:53:46]  yeah, they got a lot of flack from this because this is, this is, this is kind of, I, the thing is I can empathize with this,
[04:53:54]  but it did kind of cause a bit of a, of a feedback chain. And one of my favorite ones actually was, uh, was actually what Adam Rackets did
[04:54:01] . He was like, cause I, Ben, Ben did a video, Ben Holmes, uh, about the, you know, web and complexity. Uh, a whole
[04:54:08]  bunch of people started talking about this again. Um, uh, Zach Leatherman, um, um, 11 D his latest blog, I think was this, right
[04:54:21] . Um, kind of sets it up where he's talking about JavaScript community, 17 years. He embraced NPM, he embraced node. And then he talked, I
[04:54:31]  web packed across the great divide. The great divide really resonates with me. I keep coming back to it. I think it continues to be accurately described what two distinct and separate
[04:54:38]  camps of web developers. Right. And he's, he's talking about the difference between, um, web developers versus JavaScript developers, this, this article is probably worth
[04:54:49]  a read for someone. Um, but it's, it's all on this topic line because we always reflect at this time of year. We always think about like how things
[04:54:57]  could be better. Right. Um, or where things are at. Right. Cause like his point was like, he was reading the state of JavaScript results and was just like
[04:55:09] , this is hilarious. He's like, it's all the quicker suggesting that react might not have all the answers. Well, wait, when you're straddling
[04:55:15]  the divide, you pretty clearly recognize react never had all the answers. He literally links to all these articles over time that show that. And then he's like astro remix
[04:55:24]  and next among others are making us reconsider how much code we nearly shipped to the client. Well, wait, you're straddling the divide. You know, remixes
[04:55:30]  67.7 kilobytes next is 90 and have not meaningly reduced the bundle sizes at all. But the narrative doesn't suggest much measurements revealed that bundles are growing
[04:55:40] . Next JS was 72.2 kilobytes compressed in 2021. Yep. Then he mentioned some stuff about how reacts only on 3.2% of websites and j
[04:55:52] query is at 77 still talking about the different worlds. I want to be a web developer, not a JavaScript developer. I think the sentiment is rising and I think this
[04:56:00]  echoes what, what, what we're talking about here in here, you know, there's some parallels. The complexity is real. I wrote about that in, in
[04:56:12]  my coverage because we're trying to solve really hard problems. But I think one of the mistakes that we've been making, and not everyone's made this mistake, but
[04:56:23]  I think frontend frameworks have made is they look at React and they go, oh, well, we can match React's DX and we can match that model. And then
[04:56:34] , you know, we can improve on performance, improve on things. And that way we have the good UX and good DX. That's the argument. And the funniest
[04:56:42]  thing is some people might even accuse Solid of this to a certain degree, but like I never was trying to match React in any sort of way. It just like happened that
[04:56:50]  way. But I've, I've, I've, I've seen that kind of trend where like things are chosen maybe not because they make the most sense because people
[04:57:04]  like React. So I want to be like React and I make that kind of decision. Um, and I think that's the wrong bar because for a certain group with significant
[04:57:15]  group, React is already too far along that range. Like that's, that shouldn't be the target. That's like the, maybe the sweet spot, but that
[04:57:23] 's not like the, that's not like the, um, the goal, so to speak. And maybe we forget that when we were so in, so marked in our
[04:57:35]  community. Because if anything, if we can find more simplicity, that'd be even better. So like I can see the balance on, on this, on this sort
[04:57:52]  of thing, like that bit said, I, I don't think people are lying to them. There, there, there is a large group of people who are enthusiastic.
[04:58:02]  People like yourselves watching the stream, Theo's community, you know, like people, uh, you know, there's tons of us working on these problems actively. You
[04:58:11]  know, when I, the reason I look at stuff like this is because I want to get a temperature reading. I want to understand. And it's currently funny. One
[04:58:17]  error on a React component can render your whole screen white. GraphQL is great, but blah, blah, blah. Like a lot of people just jumping in on here.
[04:58:23]  This is very soon for the next one. Please consider it. Is Fernando really just dumpster fire right now? There's a lot of proud to fully endorse take.
[04:58:34]  This. The funniest thing is, I honestly believe they couldn't build the experiences they want to. Like there, no one's here is presenting solutions. But they don't
[04:58:53]  have to, for us to take feedback and consider the implications here. I take this very seriously. More seriously than I could. Should perhaps. Right. You know,
[04:59:07]  I'm looking at stuff like live view. Because I want to understand what the mentality or metric is complexity. Some people have been approaching this in different ways. Uh, I
[04:59:16]  told you I was talking to Benton a bunch and talking about Dino and NoBuild. Like on one side, I looked at that stuff and I played with it
[04:59:24]  and I thought of what I could do. And I thought, where is that? And I was like, no, this, this, this doesn't get us where
[04:59:29]  we need to get to. From a UX standpoint. The, the challenge is, is that the DX and UX are always pulling on each other. And we thought at a
[04:59:41]  certain point that the DX is really good because the tooling had caught up. But the tooling itself is providing, is causing a barrier here. Um, that isn't as
[04:59:50]  obvious for people who are already in, in the zone. I think that's where, what I'm getting here. This is more like a hate thread. Okay. So
[05:00:01]  something, it's doing a messy part, but it's great direction, especially with Pespa revolution. Um, yeah, but that doesn't really address, I
[05:00:10] 'm, it's, it doesn't really change anything. Um, I hated front-end web before it was cool. This is how full circle this is coming.
[05:00:20]  People have hated front-end web dev always. It only got cool. Like, this is, this is funny. I, I'm, I'm pulling up these comments
[05:00:31]  because I, I think it's important perspective. And it's a good reminder to, to people working in, in this space. Um, so maybe that's more reminder
[05:00:40]  for me. "In this crazy JS world, what should one use to get shit done or disregarding micro optimizations?" Whatever they want. Like, I think,
[05:00:56]  I think that's kind of the problem, right? You shouldn't be looking for one solution. Do you know why you shouldn't be looking for one solution? Because the
[05:01:07]  web itself is a, is a big place. It's, it's the work and efforts of many people, even the platform itself over time. Like this, this is
[05:01:17]  a non-single company-owned, your own project. It is something where it's the amalgamation of many. Like the web in its openness and the
[05:01:27]  way it works, it's the same openness that gets reflected in its develop, developer tools and tooling. That's the whole point. Like, it seems insane to me that
[05:01:37]  there'd be a one way of doing it any more than one company owning the destiny of the web. It's the interesting thing because we sometimes get pushed along the tool
[05:01:53]  lines before we're ready or what doesn't make sense to us. First time I switched to TS and comparing the app was a mess. I think it's still a
[05:01:57]  mess. Yeah. I mean, maybe use whatever makes sense for you to make the, the, they work. because I think, I think it's such a sad
[05:02:10]  problem. It's like, but it's like someone like being told how to develop on the web in a way that it's funny coming from me perhaps that you don
[05:02:20] 't feel comfortable with is the problem because then you don't like it. And then like, but it's going to be the United Nations. It's going to be a
[05:02:33]  bunch of different approaches and a bunch of different takes. Yeah, of course we got super pragmatic toys. If someone just asked me that question, I'd say, yeah
[05:02:46] , go learn react for today. Well, depending on what you're doing, are you building a site or building an app? If you're building a site, I'd
[05:02:53]  tell you to just go use Astro. As I told, as I told Fuzzy earlier, I tell people to go use Astro a whole lot. But even then
[05:03:00]  Astro has a certain tooling thing because you, you have to be aware of NPM and you have to like, we take for granted the overhead of getting like the,
[05:03:08]  how easy to get started is. It's funny because I remember getting started in like Maven with Java and like other things, mobile thing. I actually found moving to
[05:03:18]  Node and JavaScript easier than that, but I don't know if anyone else did. But like, then again, like, like this stuff has always had a level of complexity
[05:03:32]  and maybe there's an expectation that certain areas of it could be eliminated or that it would stop. But like, as I said, I think it's reflective of the
[05:03:41]  nature of the thing itself. Well, I can't believe you don't tell people to use Vue. Yeah, I mean, TypeScript is an interesting language.
[05:04:04]  It's like, I always use like the Dark Knight comparison about the like, not what the thing we need, you know, where Batman at the end kind of becomes a
[05:04:13]  villain, you know, like TypeScript's kind of like that. It's like what we need, but not what we deserve or whatever. Like, I don't
[05:04:22]  know. It is what it is. The thing is, if you've been at this for a while, like, it's hard to identify, like, because the tooling
[05:04:35]  and stuff keeps on getting better. But is it keeping up with the rate of the complexity of the of our ambitions? And I don't know if it is.
[05:04:44]  I think we constantly have probably needed this reminder. Yeah, I dream of simply return to pure vanilla JS, every everything in the browser. Yeah. I mean, yeah,
[05:04:55]  go for it. That's the other thing that's funny about this on the web, right? Because like, you can still build a website the way you did 20
[05:05:06]  years ago. Like nothing is stopping you. So it's, it's, it's, it's not that people want to return to pure vanilla JavaScript. I think this
[05:05:17]  is part of like Svelte's allure. They can go, oh, I'm just using Java, vanilla JavaScript. Not, but like, like the shared illusions
[05:05:29]  of conservative group think are defining characteristics as software workforce group identifies supersedes all other impulses, even to the point that rational and scientific. I don't, whatever.
[05:05:40]  I don't know where this comes from. I've been through internet explorer. Yeah. I mean, I don't need to read the rest of the comments and know where
[05:05:46]  this is coming from. And actually, I really liked that Adam Rackus encouraged people to talk about their path through web development here, you know, because we can all
[05:05:55]  say that stuff was worse back here compared to now, if you've gone through this progression. I have my own story. Um, I was building websites, um,
[05:06:04]  back for bands in the late nineties and I was using HTML with JS and I'd use Pearl like CGI bin to do the stuff like guest books. And then eventually that
[05:06:12]  turned into PHP. Um, and then I got hired working on ASP.net, web forms, NBC, Silverlight, uh, kind of stuff. And then
[05:06:20]  as we got client heavy, I was talking to this early in the stream, we're doing jQuery and Knockout. Um, like, don't get me wrong,
[05:06:28]  at different points, different things felt better relatively. I could say like in ultimately we're getting to a better place, but there were definitely points where things felt worse or better
[05:06:39]  because of the rate at which expectations rose because you got to understand from this side, no one had any expectations. And the fact that you could like do a guest book
[05:06:47]  was like sweet. So I have very fond memories of this time period. PHP muddled it a bit, but it didn't destroy it for me. Whereas the other hand
[05:06:55] , this time period with ASP.net, web forms and MVC and stuff, this is like, like the worst dark ages, but it's because at the time
[05:07:02]  the expectation of apps became real. We weren't just building simple websites. We wanted more. We saw mobile and we're like, geez, why can't we do
[05:07:09]  that? And then, you know, when I went back to university and was doing some Java and Ember, I was like, man, this is so much nicer than
[05:07:17]  .net. And I'm kind of cool to see like, like, you know, have a true front-end framework with JavaScript and stuff. And I was like,
[05:07:24]  yeah, no, this is, this is, this kind of feels better. We don't have all this garbage. Right. But then like when I went to this
[05:07:30]  startup here, this, this will forever be a high point for me getting on the node backend knockout thing. When we did this migration from Ruby and being all pure JavaScript
[05:07:41] , um, you know, and God that people think using NPM is bad. Now you you don't know what it was like back in the day. Like,
[05:07:50]  so like it goes in waves, but if I look at the whole progress line, can you picture building what you build now this way? No, not a chance. God
[05:08:05] . Oh yeah. Yeah. Yeah. Yeah. We're talking about table and CSS float. I can go back to, yeah, yeah, yeah, yeah. This
[05:08:12] , this, this, this, this was this, you know what I'm talking about, right? Or using table with all percentage widths. And like, it's
[05:08:18]  funny because in, in the late nineties, we had responsive designs because all the tables restrunk. Um, it was, it's, everything was like bad percentages
[05:08:27] . It was just, it was funny because you'd like try and figure out what's up with at a, at a weird break point, but we didn't have the
[05:08:33]  concept of break points. So it's like, it was like, it was like, no, if I make this 1% or 5% smaller, I'm sorry
[05:08:43] . It's, this stuff was bad. Right. But that, and that's talking from a modern thing. Bootstrap was awesome. Oh man. So like
[05:09:06] , yeah, like the thing is when people first get, here's the thing, here's my theory. And it's the same with anything. When people first get,
[05:09:14]  get introduced to web development, there is that like moment and it's like programming or anything. There's a moment, like, I remember when I first was interested in programming
[05:09:24] , I thought it was so cool that I was responsible for making that thing. And like, it was an extension of what I could think I could create. And web
[05:09:32]  dev has this aspect similar, except it's what you create actually goes out to everyone. Like it's not, it's the distribution model of the web that makes it exciting
[05:09:39]  because suddenly your simple thing that you put together or coded, you can put it up somewhere and then anyone in the world can see it. That is that adrenaline rush, that
[05:09:51]  ability to share and create and share that makes the web so powerful. So the first time you introduce, get introduced to this is going to always be like that golden period
[05:10:03] . You're going to associate any of the tools, any things you use with it, with having characteristics that, um, that generally are, um, you know, good
[05:10:11]  to a certain degree. I mean, I don't know if that a hundred percent, if I got introduced to the web by, from ASP.net, maybe
[05:10:18]  I would just like not be a web dev today. But like for me, this was amazing. This HTML and JS view source time period. And it made me really like
[05:10:29]  JavaScript, even though I spent the next year, no, sorry, next decade working for companies that hated JavaScript. Um, so much so that when I got back into
[05:10:41]  this startup and did all JavaScript, it was the happiest I felt about web dev then since the beginning. Since then, I have to admit my satisfaction has gone down again,
[05:10:53]  you know, and the complexity and stuff. But, um, I, I just, it was because of this, that this time period felt so good. And I
[05:11:03]  think it's sometimes I see that, you know, people who get started now with React are going to have this akin thing to the, the way React re-renders
[05:11:11] . I think like, that's going to be like maybe something that they remember in fondness and it'll bring back again in like another decade. Um, anyway, like
[05:11:25]  yeah, I mean, that's the thing. These things always go around in cycles, right? Good classic web reworking of the, the, the, the,
[05:11:35]  the important thing to understand though about this trend is like, we're not going backwards. Like the things that get borrowed in, in this case are, are, are,
[05:11:48]  are, are, are, they resemble it. They're like the 10% or 20%. They're not the 80%. It's not like like it's mostly the
[05:11:57]  things that we've done in the meanwhile with a little bit of an inspiration of the past. Even if it looks more like that, it's, we, we, we
[05:12:05]  haven't forgot what we've learned. And I, I think that's important to understand, right? Like the challenge is it never stops with learning the stuff in the past
[05:12:16] . I always, when I talk about the stuff in the past, I actually kind of talk about more of like one step backwards, two steps forward. It's a pivot
[05:12:23]  point, right? Right. So like, like this progressive enhancement trend we're going through right now is a trend. Like, don't get me wrong. Progressive
[05:12:30]  enhancement is important. But my opinion is that the solutions we see for progressive enhancement right now, aren't going to be the final version of this. This is just us going
[05:12:40] , Oh, they had this solved before. Can we incorporate this in a consistent way with how we do things today? We can, that's impressive. That works.
[05:12:48]  If you think about it, the web fundamentals for forum posts still work today. They've always worked progressive enhancement in that sense, because it's always worked. What's cool
[05:12:59]  about remix did was they realized, well, if our server side handlers can handle, can be written in such a way that they can handle both types of requests,
[05:13:08]  then the end user gets it for free. Great revelation. It's been copied everywhere now. That's good. But that, that's still following the form of what it
[05:13:18]  looked like back then. You still use a form and it feels like that. That's the pivot point. The next point is when we change how we do it using
[05:13:27]  that knowledge. And that's, that's what, that's what I'm looking at right now. The last couple of years have been a pivot point. 2020 and 2021
[05:13:36]  have been a pivot point. 2022 first started giving us a hint of what the next direction is. And we're going to see that continue into 2023. That's my opinion
[05:13:44]  on, on that kind of thing. But yes, it's important to examine other solutions in space and understand, you know, elements of our past. Because the thing
[05:13:53]  is you, this is what you do. You think you have an idea and you take it as far as you can and see if it fulfills the thing. And we
[05:13:59] 've done that with single page apps. Now we need a little bit of a course correction. Yeah. Then framework dies and we start. Yep. This is, this is
[05:14:13] , think about all the components we recreated in every frame every year. I mean, referring that comes along has to recreate stuff. Yeah. Yeah. Yeah. Yeah
[05:14:21] . That's great. That's awesome. I, this, this allows us to continue to, um, uh, tailor and affect our view of what good practices are.
[05:14:31]  This is why web components haven't succeeded to a certain degree. It's because that rewrite process is important. Um, like you don't want to do it every year
[05:14:44] , but in five to seven year spans, we, we should rewrite all the components. Um, I, I think, but you understand why this is like at odds with
[05:14:56]  like the, that kind of thinking about complexity, like, Oh, why do that? So much complexity. The web just had the right permanence. Well, if we
[05:15:03]  learn the right lessons, we will get the right permanence in the standards eventually, and things will get better. But, but the thing is the most important thing about the
[05:15:11]  web is how open it is and how we can standardize on it and how we can get there. And that takes the learnings, the combined knowledge and learnings
[05:15:19]  of, of everyone. So it's not just a single party driving it. So all those rewrites, all those lessons learned are all for a good cause. It
[05:15:29] 's like when you're you're training, um, an ML model. Um, like this is, this is, this is how it's messy. It's democracy
[05:15:40] . It's like how the web moves forward. That's the whole point. Yeah. Everyone's I love this because this kind of conversation is exactly like everyone's talking
[05:16:00]  about their own little things that they remember that were good at different points that made them excited about development and web development. I'm just watching the chat right now as a
[05:16:11]  scrolls. Um, and, uh, I, I, I think that, that this is exactly why we talk about this because the web is something that should be celebrated
[05:16:23] . And sometimes it takes the, the hot take critics for us to kind of reflect on the incredible things, you know, um, the solid have a spring race animation library
[05:16:34] . I'm not sure. I think motion one does cover that use case. Um, we do flip based, uh, transitions with, uh, with like solid transition
[05:16:44]  group, but spring specifically, like, I don't, I don't know. We'd have to look at those packages. There are a few animation packages, but yeah
[05:16:53] , the funny thing is I, you have to think, why has it taken so long for certain types of controls to get into the browser? It's because like the
[05:17:04]  stuff that's hard to get in is hard to get in for a reason. Some of, sometimes those reasons seem really stupid for backwards compatibility, but it's also that power
[05:17:13]  that lets Marco Rogers or whoever create a site the same way that I created a site back in 1997. Um, right. So this is all part of what makes the web
[05:17:28] . It's, it's kind of like, I feel this way about JavaScript too. It's, it's, it's, it's, this is, this is
[05:17:35]  what makes the web of like such a wonderful place is that like, it has these warts and things because it reflects, um, like where we are like it,
[05:17:48]  it's, it's, it's made by many people. It's not streamlined. It's not clean. Um, and it has to support everyone indefinitely.
[05:18:04]  So I, I, I, I, I, I, I love the web and I love developing in the web. And we just see the same evolutions over time
[05:18:15] . And I think it's fine. I, as I said, I'm not going to take this stuff too seriously, but I do like getting a read on where things
[05:18:22]  are at. And I, I think my read is pretty good on that. The complexity stuff is, is hitting it. But I mean, this isn't hard to
[05:18:28]  say innovation's happening right now. It's okay. Every time there's an innovation wave. Um, that's when the, this, this conversation happens. Um, and
[05:18:37]  we are, unfortunately, we're not at the beginning, but we're, we're at mid early curve of it. So, you know, that's where we're
[05:18:45]  at. God versioning would be a nightmare. Can you imagine that? Yeah. Oh man. What are my thoughts on quick? Um, I've talked about quick before
[05:19:00]  I talked about quick, several streams. Um, in general, I think, I think, I think it's very interesting, um, technology in terms of the way that
[05:19:06]  the lazy loading works, um, in terms of like what that means for what you can build on the web. Like I, I don't know if it's actually
[05:19:20]  important at all that aspect, but I think it's interesting choice. And, um, because it does impact, it does have an impact on what the types of ways you
[05:19:30]  can approach building things definitely. And it actually has trade-offs too. So it's like not a free thing. And I think that's the most interesting thing for me
[05:19:36]  about quick. Resumability is also interesting to me. Um, and I think it's a good thing. And I think that's an easy win when you get to
[05:19:44]  it. Um, we, we worked on resumability a lot with Marco as well. And I, I think, I think the tricky part right now is finding
[05:19:52] , figuring out the impact of that, um, resumability because, um, it is, it's, it's, it's a different take on hydration costs,
[05:20:02]  but the truth of the matter is other approaches to, to, to that like islands and whatnot, um, for a lot of sites, maybe not super complex ones,
[05:20:11]  um, aren't like, don't really change the math very much. Like it, like the, it's unclear how much the hydration costs, the bigger wins are on
[05:20:20]  the partiality that comes from serialization, like not serializing all the data. Cause you don't need it on the client, which you get from islands and, um
[05:20:26] , and just reducing that execution costs, but islands also have significant execution costs reductions. So it's, it's hard to say right now what impact something like resum
[05:20:40] ability actually has. Um, because like, like, it's funny, even in a lot of quicks, a few quicks demos that they've done where they like
[05:20:49]  showcase, like, like some lighthouse scores where they're, they're like winning out, it's actually their server rendering, uh, performance on those particular things that are
[05:20:56]  actually making the difference. It has nothing to do with the hydration costs. So it's like, um, it's, I mean, compared to single page app, yes
[05:21:04] , definitely better, but like compared to other approaches like server components, unclear. So I think, I think it's going to be interesting to kind of see the importance of
[05:21:14]  the impact is of those technologies and how they, if they impact how we build stuff and then kind of figure go there. I mean, I'm super stoked in the
[05:21:21]  fact that quicks, uh, promoting reactivity, um, which they need, it makes sense. Reactivity is a, and getting away from the component model is key
[05:21:28]  to being able to do what quick does, but it's, it's difficult. We still have to see like the, the impact of different sorts of approaches to the same
[05:21:38]  types of problems and everyone's working on these problems right now. So, um, that's going to be interesting in the next year. And I think, as I mentioned
[05:21:45] , the complexity thing is this other thing ringing around in my head. If we might not be, it might not be very clear trade off. If, if gains aren
[05:21:53] 't that big, but someone figures out how to reduce complexity, I'm almost guaranteeing you that the, the simple, the reduced complexity is going to make a bigger impact
[05:22:04]  because the performance wins, if they can be gone in other ways, even to 80%, we're in so much of a better place that it'll make it difficult.
[05:22:16]  So I think, I think this is kind of like a wait and see kind of situation. Um, I don't wait. I look at these frameworks and play with them
[05:22:23]  all the time. I love quick. Um, but like, I think this is one of those things where you go, try it, go play with it. See if
[05:22:31]  you like it. I think that's going to be the most important part of, of this, because I don't think that any, I don't think it's going
[05:22:38]  to be the performance that ultimately makes a difference there in the same way. it wasn't for solid. It was not solid's performance that made the difference. Um,
[05:22:46]  it's a nice one when people go and they look, Oh geez, why is solid so fast at rendering everything? You know? Um, but that, that isn't
[05:22:54]  going to be the deciding factor, as long as you like somewhat address the problem, you know, reasonably well, which I think a lot of frameworks are, um, not
[05:23:03]  single page apps today, but I'm talking about stuff that does partial hydration. Um, you'll be in a good place and quick is a great option there. Hopefully
[05:23:13]  that answers the question. Quick is clearly better than angular. I will, I will, it's hard. I will, I will agree with that statement from quick selling point
[05:23:29]  standpoint. I think angular has some interesting benefits from the way that they, they like I've built out a full framework that's mature and stable, but yes, I
[05:23:41]  mean, generally speaking in, in our realm of things, I can agree with that statement. Yeah, that's a good statement. If, if JavaScript would get DS
[05:23:59] Ls and we wouldn't need JSX. Yeah, I could go with that. So we have DSX and now JavaScript has a DSL. Did I say mis
[05:24:09] co from angular? Oops. It's fine. They're the same person. Yeah. Oh no. Someone shared this link. Yeah. Yeah. Yeah. Yeah.
[05:24:22]  Yeah. Yeah. Of course. Yeah. I mean, it's hard to judge the worth of resumability right now. The funny thing is like, I, I
[05:24:34] , I play in this game. I do get excited about new technology. I've covered quick probably more than anyone. And I was very early on that boat. Um
[05:24:44] , so like, um, I, I still get excited about this stuff. That's why we do the stream. It's for people who get excited about this stuff.
[05:24:54]  Um, I think it's awesome. I, I was so stoked to open those results. Not only see solid, obviously, at the top of the retention thing, but
[05:25:03]  see quick jump in there, you know, right, right near the top as well. Like that's, that is like, you can see like, like it's
[05:25:12]  signaling things like the really cool things are coming. Oh, where's the strictly better. Did I miss it? Somebody make a joke about strictly better. I'm sorry.
[05:25:27]  I'm just catching up with chat. Yeah. I mean, what quick needs more than anything right now. And that's what's I need as well is for Marco
[05:25:37]  six to come out. Um, we need to show a different version doing similar things like Marco independently came up with presumably to, I, we call it resume really because literally
[05:25:50]  Mishko coined the term, but we didn't even realize that we, Michael kind of come up and we kind of invented it even before even being aware of, uh
[05:25:59] , Mishko's talk. It was, it was before, I actually wrote about it on dev two before quick was even released. Um, and, uh,
[05:26:09]  we need a second opinion, essentially. I think that's, that's, that's, that's what quick needs right now. Um, so I I'm,
[05:26:18]  I'm, I'm hoping that it's, it's coming. Uh, so like, cause I think aspects of quick are definitely going to be wins to various degrees,
[05:26:31]  but being able to evaluate the whole package is tricky, which is good in the sense that this is really novel technology. This is stuff that is like different. I have
[05:26:42]  a lot of appreciation for different. I spent years working on solid different until it finally all lined up. It took me quite a long time. Obviously, uh, the people
[05:26:53]  working on Quicket builder, there's multiple of them and they are all seasoned veterans. So, you know, there's probably a lot more potential than me working by myself
[05:27:03] , but it took me years, you know, to figure out the right balance of things and borrowing from different projects. Like if you, I know before my work,
[05:27:12]  uh, Adam Hill, it took him years working on SJS to kind of figure out that balance of things as well. And it like, this just keeps on going.
[05:27:21]  So yeah, I, I, I think that's it. Uh, quick runs and server once RSCs run the server every navigation live. The thing is, yeah
[05:27:31] . And this is a more interesting architectural thing, but quick might run on the server every navigation. Um, actually quick doesn't run on the server once for the most
[05:27:41]  time, they actually prefer MPA things and approaches because while you can scale up to a single page app, it's like, there's so much unnecessary stuff that happens with
[05:27:58]  that approach. Um, so like, I do like that you're trying to like give them clear, clear things, but I actually don't think quick's path is
[05:28:10]  so obvious here. We could, we could replace that with like next or Svelte kit or something or remix runs on the server. Once RSCs on every navigation
[05:28:18]  and live view on every interaction. I think that's a better thing. What's interesting is how much play you have to move between these paradigms. Quick is a
[05:28:26]  solution that has a lot of play to move between these paradigms. Interesting. RSCs are actually a mechanism that could have a lot of play to move between
[05:28:35]  these paradigms. Also interesting. Live view to, I did not think so, but I saw today has at least some amount of play. I'm still not
[05:28:44]  going to lie. I think I'm definitely, this hasn't shifted my position in the world. I just have a newfound appreciation for what it means to have stateful
[05:28:53]  servers. I think, I think, I think this experience is streamlined. I do see the DX benefits. I do see why people like it. Like it is,
[05:29:01]  it seems very good. I don't know if I can live in that world, but it's good to see how it looks like when you get to that, that extreme
[05:29:11] . And it's interesting for me, for these other paradigms, which kind of sit in the middle, how we can take that knowledge and leverage it the best.
[05:29:19]  Because I do think still that these, these kind of approaches are better playing on both sides of the field. It just happens because of the way they are architected.
[05:29:28]  Yeah, though the problem is, then we'd have to agree on what it compiles to, I think. I don't want us ever to decide what JSX comp
[05:29:43] iles to. I think that's the power of it. But maybe I just don't know enough about how DSLs work in other languages to understand that. I
[05:29:52]  mean, it's hard. You pick something at the right time, write it for five to seven years, and then you're on the next thing, right? So if
[05:30:06]  you don't like React, and you won't use Angular, we use Next, but that's a small product. So React is Next. So unfortunately for you, React
[05:30:17]  is the big dog. And from what you're telling me here, you probably want to use View, maybe. But View, yeah, it's hard to say.
[05:30:31]  So, but the problem is because everything that I recommend after View might not be big enough, right? Because I'd love to say, yeah, well, obviously you
[05:30:45]  should use Solid or Svelte or whatever. But I can't recommend those compared to things that have the same level of usage. Talk to me in a year, maybe
[05:30:56]  that. I mean, Svelte, maybe I can recommend Svelte at this point, actually. I can. Let's maybe check out Svelte if that
[05:31:02] 's for you. If Svelte isn't for you, yeah, I don't know. I think Solid's great. But I think being a pragmatist
[05:31:11] , I think you probably, I think this is the year where pragmatists learn to come towards Solid. So if you're interested, we should chat. But I think
[05:31:24]  if you're trailing, we're not ready for you. We're at the front end of the pragmatists. That's where Solid is today. We've
[05:31:34] , we've captured the hearts and souls of the early adopters. And it's time to move into the, this next year's time to step up. Yeah.
[05:31:54]  I mean, this is a cool feature, but you also, I think there's a question of like, does this even matter? And I'm not actually not sure.
[05:32:01]  This is actually my least favorite part about Quick because it like, it has potential, but it also is kind of like, you're going to need a certain amount of the
[05:32:12]  JavaScript anyways. So it's like, there's a like, and code splitting. It depends on what you're doing. And because a lot of the stuff that gets
[05:32:23]  eliminated by the small bundles are things that could be statically shook out anyways from like other partial hydration things. So like even resumability, like it's not,
[05:32:31]  it's this, this is a trickier one for me to, to, to like it's, it's okay, but it's also the thing I'm maybe curious
[05:32:40]  about, but also like least optimistic about. Anyway, just create T3F. They didn't like react though. Oh, if you could go back to the first
[05:32:53]  year before solid went public, what would have you done definitely in terms of build? I think most of my regrets now at this point happen to do with things that I tried
[05:33:05]  to make more convenient for people. Those are all mistakes. classless create mutable. Um, basically anytime I kind of questioned myself and was like, uh, I
[05:33:17]  think this is hard, but you know, there's too much to do. Maybe I should try and like streamline it a bit or like add an extra API to cover the
[05:33:24]  gaps. You know, even certain degree when I'd look at solid start, I'm like, did I, did I go too far with create server data? Should I
[05:33:30]  just left it at server and route data and let people do it themselves? It's always generally the times that I've overshot on convenience that I've kind of regret
[05:33:39] ted. I don't, I, I, I think abstraction, easiness is generally like something that'll come and bite you in the end. Um, but I mean
[05:33:50] , some people are fine with that. Like you, that's like, they kind of love that. So it's like, yeah, that's just not, I,
[05:33:57]  I, it, it makes it harder for me to move, but yeah. Um, I think, I think those are the kind of things I, I, I
[05:34:07] 'm pretty happy with, with the progression of the reactive system and most of the other choices we made along the way. It was just most places where I tried to add convenience
[05:34:18]  features, even directives are biting me a bit because of TypeScript. It's like, every time I try and make something easier for people, the tooling's like
[05:34:25] , no. And like either, and then I, I'm just like, yeah, why did I try? She just kept things simple. Okay. Yeah. Okay.
[05:34:39]  Sure. Okay. I'll, I'll, I'll take that. Because there's not like, who cares, right? I mean, things don't change overnight
[05:35:08]  and there are benefits that if you watch my stream a little bit earlier, there are benefits of react model. Um, people, um, do like it, right?
[05:35:19]  Like maple, right? It's, it's not all about performance in places where performance matters like e-commerce. Yeah. I won't touch react, honestly, but
[05:35:30]  like, I mean, it's, there's so many aspects here. Just use Astro is going to be the default device. It kind of is in the sense
[05:35:43]  that most things are websites and not that many things are apps. And if you have a site and you got a bit more interactivity, you know, use Astro,
[05:35:52]  add some more solid, that, that, that is, that is kind of like really good standard stock advice. Just use Astro. I, this is why I'm
[05:36:00]  so hot on that project. Even with stuff like solid start, like, don't get me wrong. If you're building the next Twitter, hit me up, like
[05:36:05]  solid start. And what we're doing there is going to be in the coming years, like the best way to build applications, build social media platforms, like all that stuff
[05:36:16] , dashboards, data viz, anything on the application side, even things that are like kind of static, even e-commerce hit me up. Like, but
[05:36:29]  like, uh, that's not every, that's not everybody, you know, like sorry, not class less class list. Anyway, you know what you guys all
[05:36:48]  just reminded me that it's 5:37 and I've been talking way too long about this, but I'm glad to see the goodwill about, you know, technology
[05:36:57]  and about the web here in this chat, as we kind of talk, kind of talk from now to then and get excited about the new technologies. That's the point.
[05:37:06]  So like that, that makes me happy. You know, you know, I understand there's a lot of complexity out there and a lot of people dealing and suffering with
[05:37:17]  that, you know, waiting for us to get AIs that automate these things and whatnot, but, um, we can still be excited about what we're doing today.
[05:37:31]  Yes. Oh, check that out. The timing is almost perfect. Go eat sushi. You bet. That is exactly what's going to happen here. Thank you so
[05:37:38]  much. Not sure what I'm going to be streaming next week. Maybe I'll play around a bit more with, uh, yeah, I don't know. We'll
[05:37:45] , we'll figure it out. Um, as for you all, have a great weekend and, uh, see you next week.