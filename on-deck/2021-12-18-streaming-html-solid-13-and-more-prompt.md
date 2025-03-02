---
showLink: "https://www.youtube.com/watch?v=8hlo9uPrpr4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming HTML, Solid 1.3, and More"
description: ""
publishDate: "2021-12-18"
coverImage: "https://i.ytimg.com/vi/8hlo9uPrpr4/hqdefault.jpg?v=61bce73e"
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

[00:00:00]  Hey, welcome to my stream today. Sorry if there's a little background noise, have my heater kick in just now, but today we are going to stream about streaming.
[00:00:15]  And this topic I've covered a little bit before. Hey, Daniel, how's it going? I've covered this topic a little bit before. But back then,
[00:00:28]  I did not have ScalaDraw. I probably did not a terribly great job of explaining it. And really, it's been what I've been focusing on like the
[00:00:38]  last couple weeks. And to be fair, a lot of focus has come in towards streaming recently because the recent React demos and it's shown up definitely on, you know,
[00:00:52]  like previous streams. So I thought it'd be good to actually approach this with a like, you know, explain it like I'm five kind of mentality. Yes,
[00:01:03]  like, honestly, that was the that was the whole change, right? I've, I've been trying to teach, teach, obviously, and being able to illustrate
[00:01:12]  is huge. Yeah, streaming about streaming. It's an interesting topic, because as, as many of you know, I've been pretty bullish on this one. But I
[00:01:26]  think, you know, maybe it's not as cut and dry as I've made it out to be too. So we're gonna we're gonna see some of the
[00:01:38]  trade offs gonna see what comes in with the territory and with when doing this kind of stuff. And yeah, but this is just me rambling right now, giving people a
[00:01:46]  chance to join on. I think we're gonna cut over to this week in JavaScript pretty quick here. It's, it's, it's been a it's been
[00:02:01]  a week. I'll say that. There's been there's been a few big things. First of all, obviously, like Bursell. Like, what have they been
[00:02:13]  what are they what have they been doing over there at Bursell? They've been hiring everybody up. I mean, if you've been on Twitter or check anything, this
[00:02:20]  is all everyone's been talking about making jokes, even pretending like they got hired by Vercel. Jared Palmer, who did the like the mono repo, I think
[00:02:29]  it's called turbo repo. It was recent hire, but the big one for me that I did not see completely out of left field, obviously was Sebastian Markovage.
[00:02:41]  I can never say his last name properly. But seriously, that's huge, right? For those of you who don't know, Sebastian is core team member of react
[00:02:54] , and not just a core team member of react. He's largely seen as kind of like the, maybe the kind of like the visionary behind it, things like suspense.
[00:03:06]  And, you know, the whole, you know, throw the promise things that largely been credited back to him, and even just the their whole vision in terms of concurrent
[00:03:15]  rendering. And it's really interesting to see someone so core to the react team not be working at meta. I don't know what that will mean for the future. But
[00:03:24]  it's interesting that, like such a vital member of that team is actually not working for meta. I know this from working at eBay, like, there's a lot of
[00:03:33]  poll that comes from, like, the company to in terms of what features you get to look at what you what you get to work on a little bit, you know
[00:03:41] , they're, they have real needs, too. So you don't always get to do exactly what you want when you think maybe it's best for the community. So
[00:03:49]  Vercel is like the opposite, though. Vercel's mission is make things easier for developers. So that's, that's a big shift and might even kind
[00:03:58]  of change the face of react. I think that's super exciting, even more than the fact that Vercel is picking everyone up. Yeah, yeah, I don
[00:04:15] 't know. Is it worrying about react? I mean, maybe this is a good thing. They started referring to themselves at the react org during react conf, I didn't
[00:04:22]  really click on me, but they already probably knew what was happening. I think they realized that they were going to be spreading out. I mean, reacts to good to the
[00:04:29]  one to one company. I don't know, maybe maybe that's the mentality. Yeah, I mean, they've, they've been, they've been picking people
[00:04:37]  up like crazy. The big thing, though, is Vercel clearly has a mission, and their mission is to make stuff easier. They've been focusing on tooling.
[00:04:49]  And they've, and like, even even with the pickup of Rich, and, and Svelte, I feel like what they're exploring is, is how to
[00:04:58]  create developer experiences that everyone would be enviable of, right? They kind of like, in a sense, like, a lot of investment into Rust, a lot of investment
[00:05:10]  into these build tools. And I think that's their aim. I don't, I don't know if they, I don't know if UX for them comes nearly
[00:05:21]  as important as DX. Obviously, you can't have one without the other. But I, that's, I think, in terms, if you look at who they'll
[00:05:27]  hire, that, that was the interesting thing about Seb, because as I said, he, he is like, largest in the core of React. And that he, he
[00:05:38]  less, lesser fits the mold than some of the other recent hires. So I think it's really interesting to see where that goes. But yeah, so I mean
[00:05:49] , that was probably the biggest thing. Then, then there's a lot of cool technology stuff that I saw. I don't know, did any of you see this demo
[00:05:59] ? I'm just going to throw this up on the screen here. But it's kind of related to the topics we're talking about today. But Jacob Ebay, who
[00:06:10]  works for Remix, was playing around with seeing how fast he could get assets fired over. And essentially, he's using something called preload headers, essentially, instead
[00:06:25]  of, quite often, you can put tags in the head of your document, which do preloads, but you can also set them in the headers, so they can
[00:06:35]  even get processed before any HTML goes over the wire. And this is pretty good, especially when it takes a while to render your document. Like, let's say,
[00:06:46]  you're doing a bunch of data fetching, and you don't have streaming, which we'll get into a minute, then it takes a while for you to respond with
[00:06:53]  HTML. It's possible to flush your headers early if you want to. And that way, start preloading your assets before you send any HTML. I actually was playing
[00:07:01]  with this feature myself. And unfortunately, I didn't see the same sort of gains. It was I was getting the same performance I was getting with streaming. But I
[00:07:12]  definitely perked my interest. It's possible that he's using this in combination with another feature, which is called early hints, which isn't they let you flush part of
[00:07:21]  the headers ahead of time. One of the biggest challenges is once you flush the headers, like, you're kind of done. And that's your that's your last
[00:07:29]  chance. So a lot of times, you want to wait till you know the status of your request before you flush the headers. But with one of with 103 response, which
[00:07:37]  is this early hints, it's possible to start flushing these asset headers before you're comfortable even setting the status. And I might be using this in combination to see these
[00:07:48]  kinds of games. That's really cool. One of the hardest parts, and one of the reasons that we even look at streaming is kind of the front load, the
[00:07:56]  asset loading. And I'll get more into that in a minute, we'll come back to this demo. But I thought it looked really cool. And it's definitely worth
[00:08:04]  checking out. If see it, I'm going to actually post this in chat right now, in case you didn't get to see this might be a little small on my
[00:08:12]  screen. But there you go. And what else was kind of cool on technology side? Yeah, some some stuff been going on in the MPA side of the world
[00:08:24] . Yeah, where was it? They've been, we talked a lot about multiple page apps and islands on the stream. And they've been both quick and another framework,
[00:08:40]  which is similar, which I haven't talked as much about. Isles, which is a it's kind of like Astro, but written with view templates. They
[00:08:50]  do have solid integration, by the way. So we'll be checking that out in a future stream. But both of those frameworks ended up using a turbo link style router as
[00:09:00]  a way to preserve their partial hydration, essentially. So basically, you can send the least amount of JavaScript to the page. And then when you navigate, without doing a
[00:09:14]  full page reload, we send an HTML partial, and then partially hydrate that. We talked about partial hydration previously on the stream. And one of the challenges is that once
[00:09:27]  you navigate somewhere else, either you have to reload the whole page, because you don't have the code to render the that part of the page, or you have to
[00:09:34]  basically load all the JavaScript, which defeats the purpose. This is a nice compromise. Because you want to compromise. This is a really nice solution for these, because they
[00:09:45]  get to basically go back to the server to re render, it's kind of like server components. And I think we're going to see more of this, I'm not
[00:09:53]  sure that this will be the final version of this. Because I think with the way hydration works and quick, and even Marco six coming out, we'll be able to
[00:10:03]  do some even more interesting stuff by being able to hydrate inside out. But it's really cool to kind of see these MPA technologies come here. And it's not
[00:10:12]  surprising, honestly, turbo is a technology created by the Rails people, they've been doing this for a while. I think one of the more interesting things, obviously, is
[00:10:21]  it is just keeping it all in JavaScript makes it feel like a little bit more together a little bit more native, but I think there's still a lot to go on
[00:10:28]  and user experience and the problems to solve. One of the challenges when you do this kind of routing with fragments is how do you handle assets, you already have like the header
[00:10:36]  of the page there. When you navigate, you need to load more CSS and whatnot. And you don't necessarily want to render it into the fragment, you need you
[00:10:44]  need to have ways to handle different assets, you know, CSS unloading and loading. It's there's some complexity there. So interested to see what they do and how
[00:10:53]  those experiments go. But as a as I was suggesting, you know, this drive towards maybe hash change, transitional apps is probably going to start on the MPA side,
[00:11:03]  we have some more work to do on the single page app side. Right? Let me see, actually, if I can just pull up one of these demos right now
[00:11:12]  to show you what I'm talking about, actually. Yeah, because where is this? Yeah. They remade the the the where is it? They remade part of
[00:11:29]  the view docs, I think with this. Oh, no, maybe this isn't the right one. You see, we can we can we can we can we can take
[00:11:37]  a look here pretty quickly to see if this is doing what I think it should be doing. But I don't think it is. No, that's a full page refresh
[00:11:44] . Okay, so it's not this one. I thought there was a link in this issue. Blah, blah, blah. Ha. Is this it? Let's
[00:11:55]  watch here. Let's read more. No, full page refresh. That's hmm. That's interesting. That's not doing what I thought. Maybe maybe the quick
[00:12:08]  one will. Let's I did test the quick one. I didn't look at the aisles one. The only thing is, I think this is actually their official builder
[00:12:19]  IO site. So they're experimenting on this all the time. So let's see. Yeah, I don't know. That looks like full page refresh to me.
[00:12:33]  Okay, well, maybe they were overselling it. It's it's I know at least they're working on it, which I think is really is is really cool.
[00:12:43]  So we're gonna see more of this nature in the future, obviously, because this is kind of where MBAs are likely heading. But on the spa side, on
[00:12:51]  that note, Evan, you actually posted something views probably the furthest along on the partial hydration story on the single page apps side, so to speak, like, there
[00:13:04] 's been a lot of partial hydration work going on, especially with islands. Obviously, we've seen we've seen astro, and we've seen quick and, you know
[00:13:15] , piles and whatnot. And we've seen like preact doing a lot of these early experiments even before that. But again, in a multi page setting, Evan's
[00:13:26]  been kind of playing around with these ideas, he's calling shell hydration. And it's not quite the same thing. You still hydrate the core of the dock, in
[00:13:37]  terms of you bring in the route, the client side router and the framework, but then he's looking at ways of lazy loading parts of the the document. And I think
[00:13:45]  I think I think that's really interesting. Looking at these numbers, he's still paying fairly steep hydration costs, like not super steep, but you'll see compared to some
[00:13:54]  of the the demos we'll be doing. There's there's still there, there's still a pretty big hydration cost here, but not enough to stop getting 100 on
[00:14:01]  Lighthouse. And I think this is interesting. I think this works really well for something like, I forgot what he uses, Vipress or whatever, because it's
[00:14:10]  like basically a dock site with MDX. So it's fairly shallow. So being able to lazy load the specific interactive parts on a docs page that's fairly shallow would work
[00:14:20]  pretty well with this technique. One of the challenges is our single page apps still need to hydrate top down, they still hydrate from root down to leaf. So
[00:14:31]  even if you try and like do some fancy lazy loading stuff, you end up just like just shelving off the cost. It works well if with a really flat structure,
[00:14:40]  but with nested structure, you basically just take the full brunt a few seconds later. So it's kind of not worth it. Still, this is the fur
[00:14:48] thest we've seen this approach go. So I like that Evan's really starting to explore it. He actually in this series of tweets actually mentions that he didn't actually see
[00:15:02]  much of the solution outside of quick and some of the thing we're going to we're working on with Marco of actually getting out of the fact that this top down nature
[00:15:10]  of rendering makes it really hard to break up hydration. When you have a single page app mentality, you every everything has to come from the root. And sure, you can
[00:15:19]  break it up with an MPA, but then client side routing becomes difficult, like, because there's no single orchestrating piece. So it's I mean, unless you
[00:15:27]  use something like turbo. So as I said, for a while now, for a while, I think we're going to see the separation where we're going to see
[00:15:33]  like, very MPA like approaches, and then you know, maybe a little longer in development on the single page apps side. So this is something I'm actually looking into
[00:15:42]  as well, coming up here pretty quick. But I think it's really cool to stride so that Evan's already done in this range. And it's clearly working for
[00:15:49]  him. I mean, he went as far as to say, if you can get 100 mobile per score is a single page app, why reload the page in every navigation
[00:15:59] ? That's a little baby. If you want the maximum performance on that initial load, you're not going to be loading the client side framework in the router and the libraries
[00:16:10]  like MPA still have you there. But for most of us who aren't doing, you know, large e commerce sites. Yeah, you know, and this is
[00:16:19]  true, the smaller your framework gets the you know, if you include techniques like he's working on here and combine them maybe with, you know, small frameworks like Svel
[00:16:29] te or Solid, like, maybe, maybe pretty good experience all around. It would be interesting. As I said, I don't think every kind of site can leverage this
[00:16:37]  kind of optimization. But that's why we're still looking into it, I actually dumped a huge blog on solids that GitHub essentially on the partial hydration thread. If you
[00:16:47]  do want to check out my current thoughts on that, I'll link that. But it's, it's, it's, it's, it's a bit of a
[00:16:54]  read, I basically was thinking single page app and this this this yeah, this big blob of text here that we're not going to get into today. No, from one
[00:17:04]  backpack, I'll just drop this here for anyone who cares this. This is my current thinking on partial hydration. All right. So yeah, that that was kind of
[00:17:16]  cool technology one. The other conversation that's been happening. And it's been happening a lot is this idea of framework versus library again, you know, when react came out
[00:17:30] , that was like the hot topic. Every everyone, everyone was like, building frameworks, JavaScript frameworks and reactors like no, no, no, no, no, we
[00:17:38] 're just a library. And some, some people commented in the last few years, react maybe has moved away from being a library. And, you know, some, I
[00:17:48]  saw that there's this tweet that I saw that's got a little bit of attention this week. That, that basically was like, back in 2017, angular is a framework
[00:18:00] , react is a library, use the library. And then 2021 react as a framework, solve as a library, use the library. This was kind of a funny comment
[00:18:09] , but it got people's attention. Because there is always this, this sort of conversation happening between frameworks and libraries. And I actually, there was a, there was actually
[00:18:21]  a state of the react ecosystem, uh, conversation going on, I think back in March. And I mean, this panel here was stacked. I'm just going to
[00:18:30]  pause it here, but it's Tanner, Lindsay, uh, who we got here. Um, uh, Guillermo, Lee Robinson, Hunter Miller, David Peake,
[00:18:40]  like Blitz, Redwood, Next.js. Plus you got, you know, Mark Erickson, Redux, Lizzie Ward, like you have a
[00:18:47]  whole bunch of big names in the react ecosystem here. Um, and, and, and essentially I asked them this question, this exact same question. Uh, and they actually
[00:19:02]  had a really good response. They were talking about this constant, we constantly bundle and unbundle things as a way to kind of, you know, make things
[00:19:09]  easier and then redefine the basis, make things easier, redefine the basis. And, um, we've seen this happen over and over again in the evolution of front
[00:19:17] -end frameworks. And, you know, it happens to varying degrees, right? Um, even Rich Harris kind of touched on this on, on his recent chat he had
[00:19:29]  with Vercel. Right. Like it's just, it's just kind of, it's just kind of funny because yeah, like, let's see, I
[00:19:40]  don't know if you, if you, if you haven't listened to this and this one's, this one's pretty great. Um, he, but his big thing
[00:19:47]  was like, why would a library not ship with CSS? Or why would a JavaScript framework these days not ship with CSS? And actually I'm going to play a little clip
[00:19:56]  from this if I can. The, the react way is, is kind of a blessing and a curse. Yeah. Uh, it's a blessing in the, it
[00:20:05]  means that you're sort of forced to create these very extensible primitives and you, um, instead of having like the ability to work on these things locked up inside the
[00:20:15]  contribute, like the, the team that contributes to the framework itself, like the entire community can, can solve problems like motion and so on. But at the same time,
[00:20:25]  um, some things are just really, really hard to do that way. Uh, and as, as a developer using react, like how, how do you, how
[00:20:37]  do you add styles to your, to your app? Like, yeah, it's true that you have all of these different options. It's true that by, um,
[00:20:44]  by leaving it to the community, we've had a lot of innovation in CSS and JS, but it's also the case that if you're starting, um, a
[00:20:55]  react app today, there is no one answer for this very simple question that every single developer has to answer every single time they build a web app. How do I add CSS
[00:21:04]  to my project? I mean, he goes on a little further, but I think that kind of captures that question, right? Clearly Svelte sees themselves more on the
[00:21:14]  framework side. I mean, they see themselves as a language and a compiler and a number of any things, but there's this philosophical divide here. And it's one
[00:21:22]  that I kind of got into a bit on, on our last stream, where I was talking about paradigm versus framework, but it's interesting things kind of go on both sides
[00:21:30] . And this distinction is so subtle. Like if you look through this thread that I was talking about here, like there's, there's people going, they're all
[00:21:40]  frameworks or they call themselves frameworks, like, like, or they call themselves a library or where someone made the same thing back joke about react, calling themselves a library and whatnot
[00:21:52] . Honestly, I usually don't try and get into that debate. It's, it's, it's, it's too nuanced, but I do think that the driving
[00:22:00]  philosophy is better than the definition. It's not about like setting some criteria on what makes something a framework or library. It's about the philosophy deriving the design from
[00:22:10]  that. Right. And like a similar thing is like, I would definitely consider remix more on the framework side of things. It's a meta framework, in fact, built
[00:22:18]  on top of react, but Kent C. Dodds was actually going, you know, kind of did this nice little thread here where he was saying, well, there's
[00:22:28]  something, you know, awesome about, wow, look what I can build in 10 minutes, but often that's followed by several months of, Oh, this is really hard
[00:22:34]  to change and customize for my ever changing use cases. Yeah. And that's part of the, the, the, the, the conflict, right. When you,
[00:22:42]  when you make things necessarily easy for the sake of easiest, not necessarily adaptable. And he goes, well, yeah, remix obviously strives for both speed and getting started
[00:22:53]  long-term changeability. But we prioritize the simplicity and changeability first. That's why we limit the magic and expose you directly to the platform. And, and
[00:23:01]  I love this part here. He goes, I merely knew we were onto something huge. It was because they were nailing a solid foundation of primitives. Once you get
[00:23:10]  that foundation of primitives, right. And the things that you can build on top of it are really powerful, you know, and that, that is the, that that
[00:23:19] 's the message, right. It's all about, you know, if you believe on the, you know, like the library side side versus the framework side, it
[00:23:27] 's all about building up those primitives, right. That's the basis of, of, you know, what we do with solid, even, you know, how many
[00:23:33]  times do we use the word primitives primitives on our homepage? You know, the, it's essentially this idea. And I think I'm going to do a
[00:23:42]  stream in the future where I actually really emphasize and get down into that. That was like a close tie to what, what I wanted to cover this week, but honestly,
[00:23:49]  streaming is timely now and we'll probably come back to this topic. But I think this library versus framework thing is going to be a continuing conversation, especially as react enters like
[00:24:00]  this phase. It's already happened. React is in that framework, you know, bundle phase. And once the, the key player enters that phase and things just kind
[00:24:09]  of grow that way, there's going to be new players that unbundle it's inevitable. And obviously solid is one of those, but even, you know,
[00:24:15]  some of the work in these MPA frameworks might classify into that, right. Changing the foundations, looking at the primitives again. And I think it's interesting how you
[00:24:21]  can even do this, you know, in a, you know, smaller way, like say in the way that remix is built on top of react, they, they
[00:24:29] , they can still kind of take things back to the primitives in a, in a different way. So I think, I think, you know, I'm definitely on
[00:24:35]  the side, mostly solid was built out of me working at a startup, maintaining the same app for almost a decade. That experience of looking at how things change over time was
[00:24:46]  the thing. Like, I know a lot of people like talk about, you know, you can tell felt was built in a newsroom. They make new apps every week
[00:24:53]  or so. And then they start again and they got a quick on, you know, make something, get it out there, you know, give it, you know
[00:25:01] , all the nice jazz and ship it. It's a, it's a different game when you, you know, working on a startup where we were under-resour
[00:25:09] ced, underfunded and, you know, one of those maybe startup for life companies, unfortunately. And essentially we never got to do, we didn't get to do
[00:25:23]  completely greenfield. We never got to build new stuff. We had to build on what we already had, but there's always a need for new features, always the need
[00:25:31]  to adapt. And for that reason, I value primitives above almost all else. But as I said, I'm going to cover that in another stream. I just thought
[00:25:37]  this was an interesting conversation that's going on right now. And it's kind of meta to, you know, what's, what's been, you know, like
[00:25:45]  the whole bigger picture of how the different players fit in, in the ecosystem. So I'm going to take a stop here for a second before we move on to streaming and
[00:25:55]  take a look at what's been going on in chat. Cause I've been just talking my head off. What are we going on here? All right. What do
[00:26:06]  we got here? I got downloaded a bunch on Reddit for saying React is a framework. Somebody said add me to LinkedIn so I can avoid you. It's funny how people
[00:26:19]  get angry about this. Maybe it's the philosophical thing, but it's like React is treading on framework water these days. And it's not necessarily because they're trying
[00:26:30]  to do concurrent mode and suspense or something. Although I think, I think that was one of the responses in here to this, because I wrote something along the line of
[00:26:39]  like, I love the thinking and then Michael. Yeah, I forget someone said that. Yeah, I forget it. But like, essentially that React is getting more framework like
[00:26:50] , and I don't know, it's probably not worth getting into those arguments. yeah, this, this was the earliest definition of a framework versus a library. And
[00:27:05]  there's a, I, I get, you know what? Every reactive library is a framework then, right? Cause like the, the, the whole idea is where the
[00:27:16]  reactive libraries, you set the rules, but it calls that code. I don't, I know that's why like, and since most UI programming is reactive, like maybe
[00:27:27]  we're all frameworks, right? This is the definition though, that I was always taught. And this is the definition though, that we like, I think this goes
[00:27:34]  back to like C days. Um, yeah. Primitive love. There's that great, uh, I'd probably have to go down in my, my feed, but
[00:27:43]  there's that really great, um, AWS talk that Brian, uh, that Brian LaRue, uh, okay. Yeah. Yeah. Look at this one.
[00:27:52]  Isn't that awesome. I'd love to be on a stage that, that big and have that behind me. Yeah. Yeah. No, I, I've been
[00:28:11]  talking to them. We'll see what we'll see what we can do. I, I think, I think there's potential here and Jacob does too. So we'll
[00:28:17]  see what we can do. Generally speaking, my experience is framework agnostic solutions have, are very difficult and they only work if there's complete isolation, which you can
[00:28:26]  get with something like Astro, which has islands. But when you try to do smarter things and pull it together, you know, like client side routing, it becomes
[00:28:32]  really, really hard. Um, so we'll, we'll see. Yeah. Yeah. I, I saw, I saw this. Um, I have to admit,
[00:28:43]  I, I think that's stretching it a little bit. I mean, if they want to go that way, they can the use in front, it could be used as
[00:28:53]  a, uh, compiler or hint. It's basically the same thing that I was talking about in my last stream where I was saying like a function decorator, like a
[00:29:01]  view ref sugar does dollar sign and Marco their tags, but essentially function, um, wrappers is an easy way for the, give the compiler a knowledge of, um
[00:29:11] , composable cross-file reactivity. So they could, they could, they could use, use as a mechanism for it. But I mean, react can take
[00:29:19]  that flight too. I think the challenge is I'd rather it be more clear cut, right? If it's, it's interesting. I mean, view is trying to
[00:29:26]  be everything to everyone. Svelte is like very clearly on the one side now, react was always clearly on the other side. I I'm, are they losing
[00:29:34]  their identity when making phrases like this? Maybe that's their long term vision. Maybe this is all like a, a migration strategy, maybe hooks and everything was a migration strategy
[00:29:44]  to go from one point to the other. I mean, there is some truth to the fact that certain problems are much easier to solve compilation if you have the right tools,
[00:29:52]  right? Especially if you want to minimize JavaScript, there's just, it's really hard for the end user to be able to hand optimize that. So there is value there
[00:30:00] , but I'm wondering if this is intentionally laying the groundwork for a change because react historically is not a language. So I think, I think, I mean,
[00:30:10]  I have considered how you could apply a compiler analysis and this and make, and I'm pretty sure the use of use was intentional for this as a way out. But I
[00:30:21]  think there's a lot of ways this can still go. Thank you. Yeah, I, I, I mean, I, I, I don't think maybe that
[00:30:35]  it's not a real definition. Like maybe, like maybe the framework library distinction doesn't matter, like the names you gave them, but maybe it's just like the
[00:30:43] , like the philosophy is the important part. Yeah, this is awesome. Yeah. I mean, and, and, and, and I guess that's the way that
[00:30:59]  I talk about reactivity to be fair. Um, kind of just jumping back to the Dan conversation, but the, and there are from, as I mentioned, there are
[00:31:10]  three kind of primitives to it. I mean, I guess the language similarities come in the fact that is if you folks let react, focus on, on primitives.
[00:31:18]  And when you focus on primitives and you try and keep the minimal set, it is very strict, similar to the tokens you could like find in a language, I
[00:31:28]  suppose. But I think, I think the, the option to compose and build makes that trickier because like, there's a difference between having defined syntax and having conventions.
[00:31:39]  So, I mean, conventions are fine. They become like a new syntax, I guess, but it's like react or sort of felt claimed to be a language kind
[00:31:51]  of in the same way. So I, I mean, it's, it's interesting. Um, if, if react really does want to become a language. Yeah,
[00:32:02]  actually, no, I mean, I'll, I'll hold off on that thought because like, I, I think, I think that the thing is like, these are
[00:32:09]  kind of very grandiose ideas, but it's weird because they're limited to the scope of their components or the things. And this is true as felt too, like the
[00:32:17] , the things that like, that are very part of the framework, it's not universalized. And that's sort of why I was looking at stuff like reactive script
[00:32:24]  or whatever, like in that blog post, um, because it is still very much, um, a library, so to speak, like it doesn't escape the boundaries.
[00:32:33]  And I, I, I wonder if it maybe it doesn't need to, but maybe this framing helps people kind of better understand it, you know? Yeah. Always
[00:32:47] . I enjoy doing this. Yeah. A lot, a lot of different opinions here on frameworks versus libraries. Yeah. It's interesting though. Like react historically was always
[00:33:02]  like about best practices. So, you know, and those patterns change. So I don't know. I, I, we could talk about this forever and maybe, maybe
[00:33:13]  the next stream or whatever, when we do get into this a bit more on the solid side, we will, but, um, it's, it's, uh
[00:33:20] , it's, this is just a wide open topic and can of worms and we probably should move on. Oh, this, this is a good tie in though. Um
[00:33:32] , I, I made major props to, to our community member, uh, Joe, Joe Pia, true skater. He, uh, he, he,
[00:33:40]  he just had, um, he's, he's, he's been having some friction with TypeScript because almost everything in TypeScript was made for react and VS code.
[00:33:48]  And everywhere you go, everything like JSX related is like clearly react. Right. Like, um, and basically, um, he, he was like, he's
[00:34:08]  trying, he's telling VS code. He's like, can you change it from TypeScript react to TypeScript to JSX? And honestly, if you haven't been
[00:34:15]  here, maybe do so, um, give this thing an upvote. It doesn't really need anymore. It's almost at 200, but why not? Um,
[00:34:23]  he's just saying like, there's a lot of frameworks that use JSX, obviously like the react clones, the pre acts and the, and the infernos and whatnot
[00:34:32] , um, that are becoming less react clones as the days go by, but you know, things like stencil solid, you know, others, maybe it's time to
[00:34:42]  move on from JSX or TSX, just being a react thing. Um, but yeah, he was immediately met with a little bit of, uh, you know,
[00:34:50]  pushback, but it seems like this is a fairly popular idea. Other than you could tell an idea is doing well when you, when you, when, when there's
[00:34:57]  like the one or two people downvoting it, it tells you that, that, that you're doing a good thing. If no one downvoted it,
[00:35:03]  then not enough people have seen this. So, you know, it's a good sign. This must be a good idea. Okay. Yeah. So yeah, it
[00:35:14] , it, it, it, it's funny to tie into the language thing. Yeah. I mean, this is true and this is painful. Um, react, um
[00:35:26] , uh, JSX pollutes the global namespace. Most other libraries don't, they, most other libraries now actually like use import source and have a mechanism,
[00:35:37]  but basically if you just put JSX somewhere, um, reacts around, like react will take it. So it's really a pain. Um, so yeah, I feel
[00:35:48]  that pain. Um, definitely, definitely struggled with that in the past. We, we were polluting the namespace before too, and it was a mess. Luckily the
[00:35:58]  one good thing that came out of the new, uh, react compilation that came with the react 17 and the new GSX transform was that they got rid of the prag
[00:36:07] mas and the files, which means suddenly that you didn't need that. And yet a different way to denote, uh, the import source, which finally worked for solid because
[00:36:14]  solid doesn't actually have a factory function. So until react made that change, we, we made issues and stuff, but we were largely ignored people like, you know,
[00:36:24]  like, like the other ones use factory functions. So pretty happy with the, when the progression, uh, kind of goes in your favor, even unintentionally. Sorry
[00:36:35] . I just said that. Yeah. There, there we go. Uh, I'm not, I'm not going to get started on the topic of testing and write types
[00:36:46]  of tests. We can also be here forever. So let's, let's turn this around. What, what, what else are we talking about? What is streaming?
[00:36:54]  Let's, let's, let's get to the topic at hand. We've been going now for 36 minutes. We can, I think everyone is here. Let
[00:36:59] 's, let's talk about streaming. Um, well, streaming is probably a really poor name for something that's been around forever. Uh, streaming started basically streaming is also
[00:37:18]  known as, um, HTTP, uh, chunked encoding. It's basically the ability to send the HTML back to the browser in pieces, like instead of just like
[00:37:30]  making a big thing and just setting it all at once, we can control sending it back in, in pieces or parts. And basically all HTML has the ability to be stream
[00:37:43] ed. But when we're talking about streaming, we're talking about, uh, techniques that leverage the effect and, and the thing is browsers are smart or resilient.
[00:37:52]  I forget what the term is, but essentially when you send back your, you know, your response, you know, you gets the, the head, the HV headers
[00:38:05]  first, and then it starts rendering the HL tag and the doc type and the head, and then the body, it can start working and rendering those pieces. Even before
[00:38:13]  it gets all the closing tags. You don't need to close the HTML, um, XML tag or whatever, um, before it can start rendering. And that's
[00:38:22]  really cool and something you can leverage. And you can tell that the platform was built initially with streaming in mind. Then somewhere along the way, we just stopped using it or
[00:38:33]  leveraging it. Um, some backend services used it through, as I said, it was 97. I think that trying to code it became a thing, but they used it
[00:38:41] , you know, through early, late nineties, early two thousands, you know, you can remember there's things like dial up modems, you know, getting
[00:38:50]  things in piecewise actually made a big difference. And then it kind of disappeared. And the funniest thing is if you go, if you, if you, if you,
[00:38:58]  if you go searching for it, it's, it's pretty funny. Cause you might come, come across streaming because of say, react, react, um, react
[00:39:06]  18. Right. Uh, and, and that's kind of publicized it. We also have the same feature in solid, but, uh, let me see if I
[00:39:16]  can find it just second here. Bookmarks might have to go down a little bit. Um, but essentially, uh, uh, this, this tweet from Dan kind
[00:39:31]  of thing. So you're looking at react and look at streaming. And then I, I, at one point I showed him this and he goes, I haven't looked
[00:39:38]  closely at Marco, but this 2014 article describes a mechanism that's ahead of what most mainstream solutions, including rack do in 2020. We've been trying to add this to react
[00:39:45]  since 2018, but it's particularly how this is almost lost art. So we have react working on this feature for fix it to give you kind of connotation. Sus
[00:39:55] pense is the streaming feature. Suspense does a lot of other stuff, but suspense is essentially the streaming feature. The reason we've been waiting for suspense is because
[00:40:05]  of, of streaming largely. Um, I did cover that in an article I wrote this week. Um, and, uh, where I talk a little bit about,
[00:40:16]  you know, what suspense is, but essentially if you go looking, you're like, okay, so streaming did not get. Did not show up in react 2021, you
[00:40:25]  know, out of nowhere, um, they started working in 2018. And if we go back another four years, um, Marco had it. So we can look here and
[00:40:33]  in, in this, we're talking all about screaming and already the Marco guys in 2014 are talking how they're rediscovering streaming HTML in 2014, they're red
[00:40:44] iscovering it because the truth of the matter is there was an article called the lost art of streaming back in 2005. If you go back, basically every decade, we decided
[00:40:56]  that we've, we've, we've, uh, essentially forgotten about streaming. It's been like 30 years now or something. Um, and, and, um
[00:41:06] , or I guess not that long. It's been like 25 years almost. And, and like every, every five years we realize that we've forgotten about streaming. Um
[00:41:15] , I, I just, I find it hilarious that in 2005, it was a lost art and it was rediscovered in 2014 and rediscovered in 2018.
[00:41:25]  And I I'll get a bit more into, into this, but essentially probably the biggest use is just streaming. And, um, that kind of got popularized in more
[00:41:37]  modern age. And this is, I'm saying modern, but this is back in 2008 or 2009 was Facebook. Facebook, uh, had an architecture called big pipe and
[00:41:47]  big pipe, um, was through PHP service, but it allowed them to kind of weave together all their assets, um, CSS, HTML, and serve them, uh,
[00:41:58]  you know, performantly by kind of streaming all the different pieces in. Yeah. Yeah. No, I, I was going there. I realized as I was speaking that
[00:42:08]  I was, that I sounded like an Eminem song. Um, anyway, but, um, essentially Facebook had solved this, you know, and the, and it
[00:42:24]  was in PHP, but they had a really good foundation. And when eBay came around to be like, oh, we need this too, when we design our new web,
[00:42:34]  uh, foundation, but we're going to build it on JavaScript this time. So, you know, and eBay built Marco, um, it's kind of started back
[00:42:43]  in 2012. They're like, okay, we need, we need to send the least amount of JavaScript. We need partial hydration and we need streaming. Streaming is super
[00:42:49] , super important right from, from the beginning. And that's because eBay is a company that values page loads because when you have SEO concerns, like loading content from, uh
[00:43:02] , you know, search results, let's say someone has a Google search and they see some, I don't know, some item of desire and they click on it
[00:43:11]  to go to your page, it better not take forever. And especially if the slower device and whatnot, you don't, you're going to lose sales that way. And
[00:43:19]  it is a measured thing. Like we, we have departments at eBay that, that, that basically are anal to the points of hundreds of milliseconds and correlating that to
[00:43:28]  sales losses. So, you know, um, I was, I had a, a great, you know, great talk on Theo's stream with Dan and we were talking
[00:43:36]  about how the metrics you use sometimes aren't related directly to performance. Um, but sometimes they provide different use in Dan's case of they were losing light counts. So
[00:43:45]  in eBay's case, it's like, are people buying it? It can be misleading obviously, but it essentially those metrics drove, um, Marco there react didn't go
[00:43:59]  through, uh, like Facebook didn't do a big rewrite to like, they, they had react in lots of places, but I believe they didn't do like the big
[00:44:06]  re react rewrite until, um, 2018 time period. So is there coincidence that Facebook and react got into streaming around that time period? I think not, I think suddenly
[00:44:19] , um, you know, performance at a large scale became a concern. I still love, uh, Sunil, uh, uh, who's the former react core team
[00:44:28]  member made, made some whole thing is like, oh, react doesn't give a F about, uh, um, about SEO. That's not what they, why
[00:44:37]  they did it. Um, and it was all about developer experience and kind of streamlining stuff at meta, um, which I thought it was funny because, you know,
[00:44:45]  in terms of talking about why server components is they started working on the streaming thing, but it is, it is interesting though. Um, streaming in my opinion has the potential
[00:44:54] , especially for large sites to be one of the biggest game changers in the, in terms of performance. Um, and we haven't, especially for single page apps,
[00:45:04]  which haven't got the leverage. It's big on multiple page apps too, because you get to keep on sending HTML even after the fact, which means you can still
[00:45:11]  partially hydrate stuff you stream in later. Always. Um, well, I mean, he's the one who said, said it, it's funny. Um, Matthew
[00:45:23]  Phillips, I, I didn't search the tweet. I'm not going to search it up right now, but Matthew Phillips said, um, in January, 2021, he
[00:45:31]  was like 2020, this year is the year of partial hydration. And in a sense, he wasn't, he wasn't wrong. Right. Um, he, I
[00:45:41]  mean, maybe there's more to go there, but Astro made a big splash and quick and a lot of new tech showed off what we could do with that.
[00:45:50]  And, um, Sonny, um, not that long ago, I retweeted it. It was actually funny. Uh, JetBrains guys said it was their
[00:45:58]  tweet in the month actually. Um, but I don't really need to search it up, but he basically said that next year is going to be the year of streaming and
[00:46:07]  that everyone should get prepared for it because, because yeah, here it is. 2022 is the year of streaming responses and streaming APIs, which means clients, your actual super
[00:46:15] -engineering platform will have to be rethought for that use in this case. Take note. I actually don't know how to do any of that stuff,
[00:46:37]  but I looks like I, it looks like I can. There we're done. Done. Thank you. Okay. Um, we, we can talk about the streaming set
[00:46:51]  setups, different type of stream set up at a different time, but I think you could help me a lot, Theo. Okay. So, um, moving on here
[00:47:02] . Uh, streaming's a big deal, but what is it? Okay. I, I, I've clearly, clearly got the history, um, going here. It
[00:47:17] 's, it's a long time coming, but the, the, the basic of it is hopefully simpler than this, this explanation is giving here. This is why I
[00:47:26]  got a skeletal draw. Let's do some drawing. Okay. I mean, it's not hard to picture sending your HTML document in pieces. That's kind of uninter
[00:47:37] esting, right? Um, I mean, you, I mean, consider, let's just draw a page to consider, uh, consider, you know, our scenario and
[00:47:47]  then we'll kind of get back to it. Right. Like, let's, let's, let's, let's, let's consider a page and let's
[00:47:56]  say our page has a top nav. Let's even say our page has a side nav. And I use this page all the time. You guys have seen this page
[00:48:13]  before. Here's our page, right? We're technically like, there's a, maybe a hero image and then some content. And the, the thing is, if
[00:48:24]  you were to lay this out as HTML, for the most part, I imagine the layout would something be like one. Not that. Maybe it's easier just to draw
[00:48:42]  it. Two. No, nevermind. I suck at drawing. Um, I'm going to type two, three, four. Like, even, even, even
[00:49:00]  though there's like a layout, generally it might flow out like this. Right. Right. And the thing is for this top nav, you probably don't need to
[00:49:12]  load very much information. You may need the load information for part two, but you most definitely need the load information for three and four and you, and three and four might
[00:49:21]  need separate different information. Right. You can see this in any kind of real site, you know, I mean, we're looking at it like profile page on Twitter
[00:49:28] . I mean, I shrunk it down, but you know, this nav and the header and tab bar and content, you, you, you, you've kind of
[00:49:37]  seen this before now. The problem is. And this is common in most frameworks and solutions. You just wait for the whole thing to render and then you send it.
[00:49:51]  But you know, that, that doesn't help you that much. Uh, if you want to get assets earlier, because you have to, you know, the process of
[00:50:02]  loading a page in a, in, in a browser involves, well, I mean, again, we've all seen it, but involves, you know, the, the
[00:50:08]  header section of your page, you have, you have like all the link tags and the JavaScript and all that stuff at the load. And if you're not sending the page
[00:50:15] , you're not requesting that JavaScript. You like you, you're, you're setting the whole thing back. So streaming immediately gets you that benefit. But you know
[00:50:26]  what? Marco probably has the easiest way to show this. I don't know if you've ever seen this. This, this little, this little, this little demo
[00:50:39]  thing, Michael put together, I think is, is, is, is a lovely example of what the difference between async and streaming rendering essentially. And I, I
[00:50:49] 'm, I'm going to use this example here because it, because it, it, it, it, it kind of highlights it. He's, he's not doing
[00:50:57] . Well, I guess he is doing out of order streaming here, but he's not showing placeholders or anything. But if you look at the way the one on the
[00:51:03]  right loads, you should notice something, the header comes in first. Right. And then he's able to load this content. And while he's on that combat in
[00:51:13]  images, the image loads in, and while that image is loading in, he's still waiting on. You know, the comments and stuff coming in. So this, this
[00:51:21]  is kind of a streamed page experience, right? Even though it's all server rendered, not client rendered, you can, you basically get, you could have loading states
[00:51:31]  and stuff coming in here. Now with an async render in theory, it should finish at the same time, but it doesn't. If you look at here,
[00:51:40]  this is showing stuff sooner, but when it's all done and the last bit of data comes in and this one draws, it's still waiting for the image because it didn
[00:51:52] 't get to load the image sooner because you were streaming. You were able to tell the browser to get that image sooner and load it in. But on this page, it
[00:52:01]  has to wait for everything. So it's not only that the first paint happens sooner. It's not only that you get to see stuff sooner. You actually, the
[00:52:10]  whole page loads faster thanks to it. And, and that's, that's essentially, this visual, I think helps explain this a lot. But the reason I want the
[00:52:22]  politics scale draw is, is we aren't really talking too much about how this happens, right? Because in Michael's images, he didn't put any placeholders.
[00:52:34]  The truth of the matter is, you can put placeholders in here if you want. You could say, essentially, draw initially the nav. And then, essentially,
[00:52:48]  let's, let's put green and give it a stroke. Maybe. And then draw, you know, some loading stuff over here, right? And you, you
[00:53:02] 've got maybe some loading placeholders. And then, essentially, when this loading placeholder gets lifted off, maybe the, this still hasn't loaded. So you, you
[00:53:19]  have a loading placeholder here. And then, finally, it loads in. Or, depending on how you set it up, maybe you want this whole section to,
[00:53:31]  to, to, to have the loading indicator. And then, you'll wait a little bit extra long. And then, when you remove it, the whole thing appears.
[00:53:39]  There's different ways you can break this down. But the thing is, with streaming, you can serve the initial results and then replace it in place. Can you manually
[00:53:55]  prioritize? It depends, right? It depends on the mechanism on the server, right? Because the server is just trying to spit out HTML strings as fast as it can,
[00:54:12]  right? Generally speaking, you would just serve everything as fast as you can. Like, we're not streaming because rendering is taking too long, generally. We're streaming
[00:54:24]  because there's blockages in IO that there's, like, how should I put it, that, that there's, like, you're waiting on some data. So
[00:54:36]  it's less, hydration is a prioritization question, and we'll get into that. But stream rendering itself is less so a prioritization question. It's, it's
[00:54:45] , it's, it's more just, like, do as much as possible as soon as you possibly could do it. It is possible, and I've seen this
[00:54:51]  in some of the more advanced React threads, that they can prioritize pieces in case certain pieces want to start rendering, and, like, multiple of them have queued up.
[00:55:03]  And then they can, like, make the choice and be like, oh, is it my turn yet? So I think the answer is yes. And React is looking
[00:55:14]  into that. And maybe that's something that's important, you know, at their scale. With Marco, we don't, we don't prioritize, we just split everything
[00:55:23]  into its own separate thread or task or whatever the term is in JavaScript. And essentially, we just fork at that point. And the main reality continues on, and the
[00:55:38]  side reality doesn't. So we just, we just parallelize everything. Marco solution is really quite cool. With Solid, I haven't done that. I haven't looked
[00:55:46]  at, looked at that yet. But, you know, it is a consideration if you have lots of these coming in. I think you can make async finish.
[00:56:02]  Yeah, I mean, there's different ways to coordinate that. Right. And, and your timing for flushing depends more, like, you can choose to go, I
[00:56:19]  want to send all this at the same time or not send this at the same time. Because, you know, once you send it, then the browser has to do
[00:56:24]  work. But, well, yeah, I, generally speaking, at least for anything relatively mid-sized, you're, you're, this is, that's probably not
[00:56:33]  going to be your blocker. Rendering is fast, like really fast. Like I've mentioned it before, you know, I, I got some benchmarks that show that
[00:56:41] 's like, Solid's very, very fast rendering, maybe 10 times faster than React. But in practice, like, no, no one cares, except for the people doing
[00:56:49]  the metering on your serverless functions. You know, that's, that's, that's, that's not what's going to do it. If the page
[00:56:57]  is big enough, and there's enough stuff, maybe, but generally, it's, it's going to be, it's the IO stuff. Um, HTML early fl
[00:57:08] ushing. I mean, that, that is what streaming is, if I wasn't clear. It's, it's, it's, it's just chunked encoding.
[00:57:17]  So, like, if you're using Express, or, you know, or node or whatever, you, you might have seen like res.write and versus res.
[00:57:24] send, when you call res.send, it sends the headers and does everything. So if you, if you, um, if you're doing like a typical
[00:57:32]  response in node, you'll do a bunch of stuff, and then you go res.send at the end, and then it's nodes to send everything. Whereas in
[00:57:40] , uh, res.write just sends a bit of it out. And at that point, the first time you call write, node will send out your headers at that point
[00:57:47] . Uh, and, and then it'll just continue from there until you call res.end yourself. You can't call send on a, on a, on
[00:57:54]  a stream essentially. But, uh, yeah, all streaming is, is just sending HTML in pieces. It's not like some new web socket technology or some, something fancy
[00:58:06] . It's just HTML chunk, or H3 chunk encoding. It's like just standard stuff that's been built in the platform for 25 years or whatever. Um,
[00:58:15]  so I, what I'm getting at is you have these placeholders essentially is the common thing. Marco actually has a version of streaming and we actually use it, um,
[00:58:29]  at eBay a fair bit for top level things, um, which is called in order streaming where essentially, even though it'll fork the processes and do stuff, if three
[00:58:38]  finishes before two, it will wait for two and, or four finishes before three, it'll, it'll wait for three to flush it. And the reason in order streaming
[00:58:48]  actually does layer the document from top to bottom. The one benefit of that approach is it, it requires zero JavaScript, um, like absolutely zero JavaScript. So it works
[00:58:58]  even with, um, um, like bots that can't run JavaScript out of order streaming, like you'd find in react and solid, um, and Marco, uh,
[00:59:07]  with these placeholders does require JavaScript, but it doesn't require the main bundle. It doesn't require very much JavaScript, but you need JavaScript to move stuff because the way
[00:59:17]  this works is let let's, let's pretend that three and four have data in our case. And let's look at the, let's, let's now instead
[00:59:28]  of this, look at our HTML document. Okay. Let's, let's, let's rethink this as an HTML document. So this is, this is our document kind
[00:59:38]  of coming in, right? Our first bit here is going to be our synchronous chunk, right? So we're going to send, we're going to send one.
[00:59:51]  And this is, this is the H pretend this is HTML, right? I'm going to send one and we're going to send two and I'll put the numbers on
[00:59:59]  it. Actually, you know what, to make this demo better, I'm going to change this example slightly. We're going to have a footer too. This will
[01:00:08]  just make it easier for me to illustrate. And the footer technically, I don't feel like the footer, I'm going to give it its own number too
[01:00:24] , but unfortunately I have to move all the numbers down. The footer really should be, the footer really should be, sorry, what did I just do?
[01:00:38]  like moved everything. This is, this is my awesome lack of scale address skills. Okay. Nope. I don't think I got everything still. Oh, there we go
[01:00:54] . Thank God. The, the footer should get a new number here. So let's, let's give it, let's make the footer three and then
[01:01:08]  up these update these appropriately. Four and five. So what, what, what, what this is going to do essentially is, and this is actually probably, I should
[01:01:32]  actually edit this example just a tiny bit more because in, in reality, the way this works, and you're probably familiar with this is four actually wraps five. It's
[01:01:42] , it's pretty standard for four to, for four to wrap five. Like it's the page and the page, like, it's usually more like this, right
[01:01:51] ? So one, two, three, four, that wraps five. That that's the more standard set up here. And essentially what it will do is we'll, we
[01:02:09] 'll make like a, make one more here. On the initial flush. The initial flush here, what we're going to do is we're, we're going to
[01:02:30]  render one. It's so weird that it resized. I have no clue why I decided to resize like that, but whatever. And again, two, sorry,
[01:02:56]  this is good. This is, this is messing with everything. Clearly not an Excalibur wizard. Maybe you have to draw a box. One. Two.
[01:03:16]  There we go. Three. And we're going to render. Four placeholders. Okay. That's essentially what happens on that initial render. Okay. So we,
[01:03:32]  it renders one, two, four placeholder three. So you actually render the, the, the, the, the footer in place. Then when four finishes,
[01:03:46]  I'm going to assume that four finishes before five, this is not always the case, but when four finishes, it just appends it below the footer here.
[01:03:56]  Maybe in a hidden field or something, but it depends below the, before the footer. And then. Get this. Four. And then. It'll also flush
[01:04:17]  with it a small script tag, essentially. And that script tag. We'll tell it to insert four with four, where four P is. So it'll actually do it
[01:04:28] . But in, in the case of four as well. We also have. Inside of four. Sorry. We have. I'm going to change the color. This
[01:04:46]  one again. Set of four. We have. Five placeholder as well. And this is also that later when five loads in. Five does the same thing again.
[01:05:19]  Five gets. Rendered on the, on the bottom. With its. Own script tag. Sorry. And then. With its own script tag. So we're going
[01:05:37]  to stick here. Okay. So this. This is. This is. This is essentially. Our setup. And let me just. Put the number five in here.
[01:05:47]  Cool. Okay. So you get this kind of weird onion going on. Right? So essentially. We first. We first. Draw one. Two. Four. Place
[01:06:00] holder. Three. Then. When it finishes later. We draw four. With the placeholder for five in it. And our script tag. It runs that script tag.
[01:06:09]  Which inserts it. So at that point. We've actually. We've actually moved. This up to here. Right? So now. You'll. You'll see
[01:06:25] . Four in place. Right? This doesn't. The framework might have not even. Loaded at this point. You might be still waiting. Hydration may or may
[01:06:32]  not have started at this point. And. Yeah. Next. Let's change this arrow. This arrow is the blue arrow. Right? And then. When five changes
[01:06:44] . Sometime later. This is up here. And now five inserts into. Into there. Essentially. So we have this kind of. I don't know what it's
[01:06:53]  called. Like those like. Russian dolls. Or whatever. Going on. Essentially. That it just inserts into each other. Using script tags. That get flushed. Syn
[01:07:01] chronously. That's. That's the trick. It does require. JavaScript. But it does not require. The main bundle. Does not require. It doesn't require
[01:07:10] . Very much. In fact. To do this. And. The hard part. For coordinating is. Is while this is happening. You're loading other assets. You're
[01:07:20]  loading your CSS. You're loading your. Your. Sorry. You're. Loading your. JavaScript. So it might start actually. Hydrating. That's the whole
[01:07:30]  key here. If. If you wait. Until the end. Like document ready. Or. Which is the default. I don't know. If you. If you all
[01:07:39]  are aware of it. By default. Scripts. Tags. Don't execute. For type. Module. Until the document. Right before the document. Load event
[01:07:47] . If you wait till the end. You're not hydrating. Or doing any work. Until this all finishes. But. If you. If you have the ability.
[01:07:56]  to. To. To. If you have the ability to. Use the async. Descript around the script tag. It will start. Reloading as soon
[01:08:04]  as possible. So that means that this whole process. While it's sort of outside of the framework. The framework. Has to be aware of the different states. In order
[01:08:12]  to handle it. So I'm going to show a quick demo. Now. Of what that. What that. What this actually looks like. Essentially. Let's see
[01:08:24]  here. Do I have a banner for that? No. We're still here. Okay. So essentially. I've written an app. And I've used this example
[01:08:33]  before. I'm going to. Don't worry. I'm going to. Blow up my screens. Screen. So you guys. Can all see it here. Let's
[01:08:43]  see here. Here. This is in the solid repo. Right in this. SSR examples. I actually have different versions. Of the same app. The app. I
[01:08:57] 've used this app before. On previous streams. But essentially. The gist of this whole thing. Is we have a simple app. It has a home page.
[01:09:08]  A settings panel. And a profile. And the profile. Basically does a little bit. Of data loading. It's kind of a mess. But it is. I've
[01:09:21]  made a couple resources. That are cascading. And then the profile. Essentially. shows the first. The information. Based off the first thing. And then.
[01:09:34]  And then uses a suspense. Boundary. For the second one. And that's the whole thing. So if you've been looking at all this data. Loading
[01:09:39]  stuff. When I showed the placeholders. And thought this looked like. Suspense. As I said before. It's because it is like suspense. Essentially.
[01:09:47]  What we've done here. Is our index route. Is wrapped. In the suspense. This is our. Quick makeshift router. And our page. Has a second
[01:09:59]  suspense. That relies on the cascading data. So having two suspense boundaries. Let's us not wait. For the whole thing. But do it in chunks.
[01:10:07]  As it comes in. Which is helpful. For the choice of this demo. And essentially. If I. If I can run this one. Let's build it first
[01:10:17] . Just in case. Build example stream. Just in case it's out of date. And then. I'm going to open this one up. Local AD. Okay.
[01:10:36]  So. This is. This is a simple demo. Where. We have. You know. Our pages navigating. Right. And there's. Just some stuff on it
[01:10:45] . Just garbage. This one's a counter. There's not the counter. It's to show concurrent rendering. Because when you go to profile. It's still rendering the
[01:10:51]  counter. While it's rendering this off. Page. And the reason it takes so long. To load. Is because. This is our cascading data. This is
[01:10:58]  what we're going to be looking at. When we refresh the page. You can see. Loading. John's profile. And then we load. The second section.
[01:11:06]  This is. 400 milliseconds. Cascading. It's kind of. A lot. But I just want to do it. Do this because it's easier. When
[01:11:14]  you have data latency. To show off streaming. So. Fairly simple example. Load load. Now. What does this look like. Is kind of the interesting thing
[01:11:30] . In a simple app. We. You know. Where this is client rendered. You would. You would expect to see requests. Happening in the client. And
[01:11:46]  it would use suspense. And look very similar. In fact. I do have that demo here. And maybe that's the. The easiest thing. Although you can. You
[01:11:53]  actually see here. Because the console logs. This is loading on the server. But. Let's. Let's. Very quickly. Show. So. Before we show
[01:12:00]  the streaming. Let's actually show. What the. Amstack version of this is. This is essentially. Rendering a synchronous shell. And then. All suspense and
[01:12:09]  data loading. Happens in the. Browser. In fact. Sorry. Let's refresh. It looks almost identical. To what we just did. Right. And
[01:12:18]  if you look here. I'm actually going to move this off. To another window. Because I have browser extensions. That are. But. If you look here. What
[01:12:30] 's going on. We just have a head tag. Solid has this little thing. For hydration. Called hydration script. Which does cool stuff. Like event playback. And some
[01:12:40]  other stuff. Support streaming. And all the other hydration stuff. But. Other than that. It is just our app. With our suspense. And. It just loads
[01:12:52]  in. There's nothing else. To this page. We just reload. Bang. Now. If you were using something. Like. This one. If you're using something
[01:13:02] . Like. Next. Yes. Or Gatsby. You. You might. Or. Stop kit. Or something. You. You might be used to. The.
[01:13:12]  The next. Mode. That I'm going to. That I'm going to. Show really quickly here. Just to kind of. Explain this. I'm building up
[01:13:18]  the streaming. Because I think it's important. To sort of. See the difference. And how. It kind of progresses. From one to the other. I have shown
[01:13:30]  this. A little bit before. But I think it is. Kind of illustrative. This is your typical. The first app I showed you. Was Jamstack.
[01:13:36]  Pre-rendered shell. Essentially. It could be SSG. It could be on demand. But then it. It does like. The requests. In the browser
[01:13:44] . And if. We looked at the console here. You see the load user. Load info. And it. As it cascades in. The Jamstack.
[01:13:51]  Or sort of the. The more typical. Like. Next. JS. Accessor cell kit page. Is more like this. And. As you saw. There's
[01:13:58]  no loading here. Right. It is reloading. You can see the counter reset. But you don't see the loading. Because the page comes in. Fully rendered
[01:14:07] . Like. Over the network. If we look at this. Let me format that. Shrink this window. What we get. Is our hydration script. And
[01:14:21]  then. Our fully formulated. HTML. And. The key part here. Is we. Write that data. Into the browser. here's the Jon Snow and here is
[01:14:32]  the list. Basically we serialize the data into the head and we render the full thing. And I mean, this example is a little bit trickier than I think some
[01:14:41]  of those frameworks support, mostly that this is lazy loading components, right? So Solid does support lazy loaded hydration, which is already a little bit complicated because it means that not
[01:14:55]  all the JavaScript is necessarily there when we go to hydrate. So we actually have to pause and resume hydration as the JavaScript loads in. But the important part here is
[01:15:06]  you never notice a loading state because it waits for it all. And we'll see the implications of that in a minute, but I just wanted to kind of show how this
[01:15:12]  builds up 'cause our first page, we didn't send the data. And as you see here on the console, there is no logs here. As you'll see,
[01:15:18]  we're doing all the work on the server. Streaming, and here's the data being written into the head right here. Streaming is basically the kind of combination
[01:15:41]  of in the middle. Build stream, or I already did build a stream. We'll build a stream again, and we'll start the stream. So the streaming example
[01:15:54]  is it looks a lot like the client case, but we have some, we have slightly different HTML. And I'm going to go back to the network tab here because it
[01:16:04] 's easier to see it in its original form than it is to see it in the final form. The final form is exactly what you expect, but in its original form is
[01:16:10]  a little bit more interesting. So we have our hydration scripts. And then we flush out all these initialized things. And I need to do this to basically tell the
[01:16:17]  browser that, hey, you're going to wait on this information that's going to be coming. These are our unique hydration keys. They're not the prettiest things
[01:16:28] , but they use it pretty well. But essentially, when we render the page, we render our nav, see, home profile settings, and then we render our tab component
[01:16:40]  and bang, placeholder, loading spinner in the span. And then we finish our body, branch through the rest of the page, render our async script tag into
[01:16:52]  the page, and there, the HTML closes. It's over. Well, no, it's not. As when the first async request finishes, we actually send it
[01:17:02]  along the stream, the data. We create a hidden div where we put in the content here of the panel, the John's profile, where we sort of rendered it
[01:17:14] , and then the section could be about you, and we actually render in this other spinner. It's exactly what I showed in Excalibur a minute ago, right
[01:17:22] ? We have another placeholder, see the PL at the front, for this one. And then we flash the script, and this very simple script here just replaces the nodes
[01:17:32] . It finds the element with the ID and replaces it with the child nodes, and then it triggers the suspense to say, hey, you can continue hydrating now.
[01:17:41]  And then the scenes, our hydration script basically uses promise resolution, where the server basically, when we call init, it sets up these inits. It sets up a promise
[01:17:53]  that if hydration gets to it first, it reads the promise. And when we set the data, it resolves the promise, which lets the client continue where it left
[01:18:03]  off if it's fast. And if it's fast, it's like this. You get to see that loading state. It feels like client-side rendering. But
[01:18:10]  if the JavaScript bundle hasn't loaded, it's still going to behave like this on the HTML. It just won't hydrate, and the data will be available right away
[01:18:18] . And then so we define our function, and then we call it. We also initialize another suspense boundary, right, the second one. Now some time passes again
[01:18:35] . And the second data chunk comes in, flushes the rest of the page, and then inserts into place, kind of finishing up the hydration story. So this
[01:18:47]  is exactly pretty much what I was showing in our ScalaDraw here, where we have two cascading ones, right? A lot of cases it's simpler.
[01:18:58]  There's a single one. But I wanted to kind of show how we do the insert and the insert, kind of chain up. What's really interesting, though, about
[01:19:06]  streaming is, yeah, on a fast network, this feels fast and you get this loading state. But on a slow network, I just went to fast 3D,
[01:19:17]  look what happens. You don't see any loading state. And the reason for this is there's no delay. By the time that it serves it, all the HTML is
[01:19:33]  here, and that's a huge difference. When you do client rendering, you always have to render that loading state. Because the client has to render it, right?
[01:19:42]  If the main bundle hasn't run or you don't have the data, you have to do it. But with streaming, because it's separate from that, you know,
[01:19:50]  it scales with the network. If you have a slow network, it looks just like normal async. If you have a fast network, it looks a client. And
[01:19:59]  the results are actually really cool here. Let's just do -- let's take a moment before -- I've got some better examples I want to show, but let's take
[01:20:10]  a moment here and kind of look at the performance profile of this stuff just to understand, as I said, this is a pretty contrived example. What's nice about
[01:20:20]  it is it's steady. These are exactly 400-millisecond delays, so we can see a fairly consistent result across the different approaches in terms of how performance changes
[01:20:29]  on fast and slow networks. And I think that would be interesting to kind of get an idea of the benefits of streaming versus other approaches. And so, let's set
[01:20:38]  it up. We've set the stage, right? There is a fourth mode in my demo, which is SSG. And SSG is just unfair because it has perfect
[01:20:48]  knowledge, because it fetched and pre-rendered it once. Obviously, nothing beats SSG. But it does give us a baseline. So maybe that's where we
[01:20:57] 'll start here, and we'll take a look and kind of understand that. So I'm going to build the SSG example. This is this -- but if you
[01:21:04]  see, load user, load info. This SSG is basically -- it's all about when you do the queries. SSG does the queries at build time. Our as
[01:21:16] ync and streaming SSR do the queries on the server, and our shell approach does the queries on the client. That's basically the difference between the approaches. So obviously
[01:21:29] , as a baseline, our SSG example is -- can't be beat. But we'll just run our SSG example, okay? So let's just do this.
[01:21:42]  And we're going to take most of the window up here. We're going to do a little bit of performance profiling here. So I'm going to give it
[01:21:51]  a quick reboot. You can't -- see, SSG, you can't even see the load. So I'm going to -- I'm going to -- I'm going
[01:21:59]  to start profiling, okay? So this is about as fast as things can possibly get, because it's all pre-rendered, okay? You clean the data
[01:22:08]  fetch. So on my system here, while I'm streaming with you guys, we get a first paint of about 39 milliseconds, and the full contentful paint at 39 milliseconds
[01:22:21] , and -- or -- I'm sorry, the first contentful paint, and then the largest contentful paint, which is basically around the time the header comes. And this
[01:22:26]  isn't when it's finished. For this example, it thinks this is the largest contentful paint. It's also at the 39, unsurprisingly. They all
[01:22:33]  come at the same time, because it's pre-rendered on the server. And then the onload event happens at about 54 milliseconds. And essentially, yeah, we
[01:22:44] 're all done around the 54-millisecond mark. Nothing beats SSG. So let's now run SSG on our fast 3G network. I love that
[01:23:04]  they call this one fast. And we'll use that for comparison. Okay. I think it's still done. Okay. On our fast 3G network, things are significantly
[01:23:16]  slower. But SSG comes in at about 1154 milliseconds. And everything comes at the same time. And you notice here that the -- this takes a little bit longer
[01:23:30] . And essentially, I guess hydration here is done at 1798. Okay. That's interesting. This doesn't -- this example doesn't have preloading. So
[01:23:49]  this might not be the best example for hydration time. But it's good to show off rendering time, at least. Okay. So let's move on. Let's
[01:24:02]  build our -- let's do async next. Or no. Let's do SSR next, which is our -- actually, we've already built these all. Let's
[01:24:13]  just go straight to the comparison. So let's refresh the page once. Okay. Okay. So I'm going to go back to no throttling fresh. And
[01:24:30]  we'll run the performance comparison. Okay. No throttling. We have a first contentful paint at 25 milliseconds. So this one was really fast, actually.
[01:24:45]  There's going to be some variety between our runs, but largest contentful paint comes much later because the first -- it's at 4:37 because it has to wait for
[01:24:55]  the first request to happen. And we're actually not all done because I told you there's two 400-millisecond requests. We're not all done until about over
[01:25:04]  here, about 8:50, essentially. So essentially, there's a slow -- it paints right away, but then there's, like, a slow -- there's
[01:25:17]  a slight overhead. It's basically offset the whole thing. Like, that 25 becomes 37 and becomes 50. There's a slight bit of offset, but essentially, you're
[01:25:25]  just seeing the length of the requests here. So now, if we add fast 3G throttling, the story gets a little bit different with client-side rendering
[01:25:37] . Okay. Sorry, I didn't hit this. Okay. Loading. Loading. Okay. Perfect. It's the same about 1170 for initial load,
[01:25:55]  but essentially, now, our largest contentful paint has moved to 2,000 milliseconds because of the speed of the network. It's taken longer than the data request to actually
[01:26:08]  draw it. By the time we're done and hydrated, we are actually sitting at about 2.243 milliseconds, right? Okay. Now, I'm going
[01:26:31]  to do async next. Back to throttling, refresh once, okay. No throttling, async waits the whole 800 milliseconds before it sends anything back to
[01:26:55]  the page. So, this one, that means first paint doesn't happen to 8.35 and that it's not done until about 8.46. So, I
[01:27:07]  mean, obviously, the first paint deficit isn't good, but even more than that, it's taken that much longer to kind of finish up. Okay. So,
[01:27:21]  let's do, sorry, slow 3G. However, when we have a slow network and we run this again with the async. First paint comes in, ooh,
[01:27:38]  that wasn't, that wasn't a good run. Sorry, let's run it one more time. Oh, maybe it's realistic here. Okay. First paint is
[01:27:48]  coming in at 14. First paint is coming in at 14 and then it's finishing also hydration around 22. Okay. Okay. And let's finally do streaming.
[01:28:03]  I think one of the interesting things about doing this live on stream, I realize, is that the network conditions are different when I'm streaming, live streaming, than when I
[01:28:12] 'm running it locally, which without streaming, which might be affecting the results here a little bit, which is unfortunate, let's run streaming one more time. Let's
[01:28:27]  run streaming. First thing you're going to notice on the fast network with streaming is 27N, 418, and 817. It's even in this silly example
[01:28:40]  here, the streaming example is, is faster than all the other ones at every single, it's the same first paint as client side, because it doesn't have to wait
[01:28:50]  to do anything or sort of like, like shell rendering, but every other marker, it's faster because it gets to preload stuff. And when we run it with
[01:29:03]  network throttling, funny, you don't see the reload in this case, it basically performs, huh, see, it came in faster than async at 1194
[01:29:22] . And it hydrated at two seconds. So this one isn't good because we're not preloading the profile. It's not loading till this point, which is
[01:29:32]  unfortunate. But again, streaming beat all the other mechanisms, even without preloading the profile, um, properly here, um, simply, simply from, from the fact
[01:29:42]  that it got to load stuff sooner at every point. The interesting thing is as, as this digresses, the client side rendering and the streaming, which were very beneficial on
[01:29:56]  the faster network situations. Um, the client side gets much, much worse. Um, because it takes that much longer to do real async requests. And,
[01:30:06]  and, and that's the thing that we're missing in this, in this comparison, because these are simulated. Okay. I know that that was a bit dry,
[01:30:18]  but I wanted to take a moment to kind of show the different, uh, characteristics. Obviously I care a lot about benchmarking more than other people, but, uh
[01:30:27] , essentially, you know, I, I do also, um, have examples where I, I, we can do the same thing with preloading and more variable data
[01:30:40] . But essentially streaming kind of has the ability to improve performance, uh, at every point, this is a, this is a nothing app. When you consider the
[01:30:50]  fact that there's basically nothing here, the, like it's, it's, it's, it's, it's, it's, it's no surprise. It
[01:30:59] 's surprising that you can even notice the difference, uh, between these, even up to a couple milliseconds on kind of like a kind of crappy network. Anyways, that
[01:31:08] , that is most of it, let's see, I'm going to switch back to chat and see if there's any questions here. Yeah, yeah. I, I
[01:31:16] , I think, I think that pretty much, I think that pretty much is, is, is the thing, because this is dictated essentially by challenges that I have within
[01:31:27] , in, within our own, like local network here, like, um, and with me streaming at the same time, it makes it kind of hard. harder to
[01:31:37]  see and probably harder to appreciate because like, like the fast 3g comparison, um, like here's one with some real data and it's a little bit heavier. The
[01:31:55] , the, the fast 3g comparison is significantly more different between streaming, um, with, with like real data. um, and say, like client side rendering,
[01:32:18]  like this is with real data fetching over the network, just to give like the, and with proper preloading in place. I probably should have used this example
[01:32:32]  at the beginning. I was trying to show the, the difference, um, you know, with a, like with, with, with, with a controlled, but when
[01:32:40]  you use real data loading first paint happens here at 1162. Um, and largest content at 1274 and we're basically done our work here, like hydration finishes,
[01:32:55]  like right over here, like at, we're around like 1.2 milliseconds for the stream version. And, and, and, and, and, and, but
[01:33:03]  when you do client rendering, like jam stack, you're not done, you're not done until. Oh, wow. Oh, wow. 2, 2.4
[01:33:16]  seconds. It's, it's over a whole second slower on fast 3g. Right. It's like, it's, it's like, right. Like it
[01:33:30] 's a, it's a, it's a whole second slower and async, you know, under these, under this condition. Um, is better than client side
[01:33:51]  rendering or client side fetching, but it's still, it's still, it's still worse. Like let's run this one more time to make sure that wasn't
[01:34:00] , you know, uh, yeah. Okay. There we go. That's better. Yeah. So async, async here is actually very similar to your standard
[01:34:11]  in a slow network, your standard next JS approach, or, you know, Svelte kit, it's going to be very similar, uh, in profile to,
[01:34:20]  to the streaming one, which are not that one. So it's streaming one, which is this one, um, where it kind of all finishes up around 1200 milliseconds.
[01:34:30]  The client side Jamstack version is like twice as slow. And, um, but as I said, the dynamic completely changes on the fast network where async is
[01:34:44]  much worse and the client side rendering actually beats it. This was, this is something that I, I kind of learned early on when I was working on solid. I was
[01:34:52] , I was doing a lot of client side rendering and I was like, why do I need SSR? It's much faster to client side render than SSR,
[01:34:57]  but it's just because the solutions weren't using streaming. We send data in both cases, both streaming and async. It's just, if you wait till the end
[01:35:11] , you're waiting to the end. You'd it's just, you're, you're hitting the bottleneck. Um, yeah, I mean, it depends,
[01:35:20]  right? Client side fetching on a slow network has to wait to process the JavaScript to start the fetch. So even a quote unquote, fast three G network on a
[01:35:32]  single request, no cascading, nothing fancy. We basically doubled our time. Um, streaming kind of lets you get the best of both worlds. It lets you
[01:35:41]  do all the work on the server, but doesn't kind of block you from loading their assets on the client, um, at the same time that that's really my whole
[01:35:48]  point here. Obviously I dwelled here on performance for quite a while. But I did, I think I do, I do, I do think like, I mean
[01:35:57] , I, I already showed you how much like client side is so much slower, but if you go the opposite direction, as I said, and I should have done this
[01:36:06]  example in the first place, I'm kind of sorry about that, but if I, if I go here and go, okay, now we're in a fast network
[01:36:16] , let's go. Client side first paint 55 largest content full 116 and the whole thing is done by like 140, right. Streaming. Streaming is
[01:36:43]  going to look really similar to this. Sorry, that was weird. Oh, I was testing different modes. Crap. Damn it. This is a stream. The
[01:36:58]  streaming example in a second. Die testing. A different mode. Sorry. Okay. Let's go. Let's go to the async. Streaming performs basically the
[01:37:20]  same as, as, um, as, um, as client on the fa on the fast network. But look, look, look at the difference here. Everything done,
[01:37:32]  but it had to wait for 286 essentially. So even on, on the fast network client side rendering. Which. Had basically done all of its work. So this
[01:37:50]  is not the fast network. I just showed it off a minute ago. Anyways, my, my, my point is that on the fast network client side rendering had already basically
[01:38:08]  done all its work before async even started essentially. So it's, it's a big difference. It's a big improvement. Like client and streaming are best on
[01:38:17]  fast networks. Async is, and streaming are best in slow networks. Only, only streaming is best on both. But that's essentially, that's, that's,
[01:38:27]  it's not like it's like way faster in a lot of cases. It just, it just covers the spectrum better. That's, that's essentially the, the g
[01:38:34] ist of it on the performance profiling. I, I might just move. Right. I, I did have a couple more things out. There's one more thing
[01:38:44]  I wanted to show. We're done, we're done talking performance now, um, on streaming. I, I, I think you kind of get the benefits of there
[01:38:50] . I wanted to kind of show. I wanted to show the, the streaming example again. Um, yeah. All right. The other one running. I'll show
[01:39:06]  the streaming example again, and I want to show. I'm going to, I'm going to, I'm going to throw up. Um. Uh. Let me refresh
[01:39:25]  the page. I have this one. I'm minified a bit on purpose because I want to, I want to show you. Here. Let's go in here
[01:39:43] . Let me put a break point here because you can kind of actually see at each point. how, how this resolves, right? First step. It was loading
[01:39:55] . Then when the first suspense resolves, we actually insert this in place, but it hasn't hydrated yet. Then when the second suspense resolves, we insert this in
[01:40:05]  place and then it finishes. And the reason I wanted to show this is what happens if there's an error while you're streaming. It's like, it's kind
[01:40:16]  of an interesting problem when you have the page split across multiple places. And this, this is one of the things that we've been working on. Because we didn't
[01:40:26]  have error boundaries on the server for, for, for solid. So I wanted to kind of, you know, play with this. And like, obviously the simplest thing you
[01:40:34]  could do is if you have a synchronous error. You know, this, this should be. Hopefully pretty easy, right? Throw new error. Right. And with a synchronous
[01:40:52]  error, it is kind of. It is kind of, it is kind of simple, right? We build our example. I use streaming for this mostly. Am I
[01:41:06]  missing? Oh, like an extra. Yeah, it's never gonna hit that, right? Okay, that's fine. Let's, let's start. I'm
[01:41:25]  going to throw. Okay. Not too interesting. And this one's always going to error. If I go to a different page and reset, it'll work fine. But
[01:41:35]  my point is, this load, this, this, this, this, in this example, because it happens during the synchronous rendering. Oh, interesting. Did I actually break
[01:41:49]  the error boundaries? That's fun. This is my fault for, for messing with this stuff. It does seem to mostly be working. Okay. This is, this
[01:42:02]  is pretty easy to handle because it's all rendering on the server and are rendered HTML, essentially. Yes. And, but I've got a solution for that. And
[01:42:17]  that's what I want to show off here, which is kind of cool. Because in the, the reason I'm trying to, the simple case here is because if we
[01:42:27]  look at what gets streamed out this here, we just stream out the error boundary, essentially, synchronously. There's, there's nothing fancy here because it happens synchron
[01:42:34] ously. Right? So, you know, we streamed out the error boundary. We hit it. But what's more interesting is what if, what if the error
[01:42:49]  doesn't happen synchronously? What if the error happens when we're loading information? What if, what if it happens down here in that second suspense boundary when the first
[01:43:05]  suspense boundary is already flush? What, what if, what if I make this res, reject, and instead of resolving it after 400 milliseconds, what if I reject it after
[01:43:15]  400 milliseconds? What if I go reject, right, what if I do this instead? Because you, you get the problem, right? It's, it's,
[01:43:31]  it's streamed out the, the, the first one. And there's, I didn't show you the structure of my app here, but error boundaries happen where read
[01:43:41]  is. So it's, it's going to, it's, this content's already going to be in the client. and this suspense boundary is going to trigger the
[01:43:49]  error when it reads this data the info down here and the air boundary is all the way up here outside at the top of our app already in the browser my luck is i
[01:44:00] 've probably broken this since since i was testing it because i've been working on some new stuff but let's let's let's uh let's let's let's let
[01:44:10] 's let's let's let's see if we can handle this let me show you that again what we're actually doing is we're throwing the error on the server and
[01:44:33]  if it hits the topmost suspense boundary without hitting an error boundary it actually throws the error across the network and the client catches the error and the client error boundary actually does the
[01:44:45]  error boundary in pretty crazy this this is what this is what i've been working on yeah yeah this this this this this is one of the this is one of the considerations
[01:45:12]  that's that that's coming in uh um solid 1.3 hopefully next week so synchronous ones still render on the server but our error boundaries can go across client server boundaries it
[01:45:25]  means that the error doesn't actually propagate until at hydration time but it is definitely a cool trick right um i i i'm still ironing out the pieces but essentially i
[01:45:40]  was sitting there and i was like how do i solve this right like there's a lot of talk we have stuff on marco um where we talk about it and you
[01:45:49]  can do redirects and like full page reloads because you know if the page is errored then maybe you should tell the browser or something but at a certain point if you
[01:45:59] 've already sent the page you already sent the status it's kind of on us it's like graphql graphql has the ability to error out completely but it
[01:46:08]  it also you know usually you just handle your errors fine-grained i think if you get past that initial shell render like you know you've you've determined the main stuff
[01:46:20]  person's authorized whatever you've kind of got to the main shell render and it errors at that point then you know it's kind of like what happens on the client you can
[01:46:28]  handle it piecewise you can gracefully recover and navigate out of the situation and that's and that's and that's kind of the idea here yeah i i'm glad
[01:46:37]  i'm glad you all like it this is as i said handle both the synchronous and asynchronous cases even with streaming it as if if i wonder if i can show this in slow
[01:46:47]  motion a little bit if like if i show it here can we see it better because first there then there then there yeah see how does reset work uh reset is something that
[01:47:05]  solves error boundaries have built in where it just tells it to try and re-render everything below the error boundary again it was just a it was like a technically you should fix
[01:47:16]  the state before you do it if it's reoccurring but you can pretend like if if if in our example here the let's pretend the error only happens on the
[01:47:23]  server i mean that's kind of silly but what if uh we were like is server reject else respond let's just pretend like this was our code um solid um has
[01:47:40]  like a is server that is exported from uh solid js web let's let's do this instead if if if we did that it fails on the server then when we click
[01:48:02]  reset it'll load in the client um essentially um this is client side suspense so just just to kind of show you usually you have to re if if it's always going to
[01:48:13]  error then it's always going to error when you click reset because it runs the same code again but because the code on the client's different than the code on the server
[01:48:20]  here we can kind of showcase this working um it's it's it's interesting it with the with the original streaming approach that was client rendered um this this wasn't a problem
[01:48:39]  at all the big change in solid 1.3 is we're doing html streaming originally we only streamed the data which means the client would render it um i
[01:48:48]  need to test how that works with style components uh again because the trick that we typically do is we flush the styles at um we flush the styles at uh the shell time
[01:49:04]  which means that the stuff that's lower down in the tree gets basically triggers the styles at hydration so i i need i need to see what that looks like in terms of doing
[01:49:16]  partial i think i think styling solutions are going to be the place where we're going to have to do the most work um solid is uh will be shipping with a data only
[01:49:25]  option which preserves the current streaming behavior so we can do that um but yes this is this is definitely a place where we're going to have to work on especially some
[01:49:34]  of the css libraries definitely this is this is an interesting one and i think generally speaking it should be fine we have we need to look at the fallbacks i think i
[01:49:51]  think the placeholders might be the one place that styling breaks i use marco's technique we might have to revisit this as i said that the html streaming is still
[01:50:01]  has some cases that we have to consider yeah i mean yes it is client-based for the retry because it's like the effects only run in the browser there's
[01:50:19]  really but like you have you have everything you need at that point do you know i mean like by the time you're there you've already loaded the javascript anyways
[01:50:27]  there's no point going back to the server like you already have the stuff like in general and i was kind of pointing at this streaming html is good because it's
[01:50:34]  safe round trips and stuff at the end generally speaking like doing stuff with json apis versus going to the server with html like there's there's not really a
[01:50:43]  huge amount of difference i like the the javascript json stuff might even be slightly faster in a lot of cases um if it's peddled properly but like if
[01:50:51]  it was a case where like it was a partial hydration consideration maybe and and i said a lot of a lot of people could do that but i mean you could also just in
[01:51:00]  your error boundary just go reload the page like like that could be what the error boundary does the stream component failed to send data yeah i mean basically that would be handled like
[01:51:17]  a client-side error because um it's resolving a promise in the client so then the client would like if it failed to send the data i guess i guess if it failed
[01:51:27]  to send the data um hydration would hang um unless it actually rejected if it just it'd be like a promise that never resolved essentially if if we failed to send the data
[01:51:39]  like if it failed like actually aired you'd be fine but if it if it actually like just didn't send it then it'd be like it yeah it'd be like
[01:51:51]  just not like if a request timed out and didn't send it that that's basically the the error boundary um functionality it does both synchronous and async error boundaries across um across
[01:52:12]  as it if it can handle on the server it'll handle it and send it like it like i showed you but like in this case we didn't look at the network
[01:52:20]  here but if we look at the rendered html what we're going to see here is that um it actually got as far as like the head it sent the first bed
[01:52:35]  and then where is it we should yeah and then placeholder and then it rendered the second bit and placeholder and then it just finished by sending our error through cr y
[01:52:53] olo um it just it just sent our error through in the last script and triggered the error boundary that's essentially what happened so there's there's some refinement here um but
[01:53:06]  i've got the core mechanisms working i'm mostly just working on testing and bug fixing at this point um and i think uh some of the more next piece and i've
[01:53:18]  been as i said testing um some of the css libraries is going to take a little bit of work here um but that's essentially there there's you can opt into the
[01:53:30]  current behavior with data only and obviously you can always just uh do async you know um to get suspense on the server still essentially so we have the three modes no suspense
[01:53:44]  on the server suspense on the server wait for everything to finish and then suspense on the server actually four modes streaming but just the data and then suspense on the server streaming h
[01:53:56] tml so um my hope is obviously that streaming html just becomes a de facto way but i understand that there's there's still some work especially with third-party
[01:54:05]  libraries that we're gonna have to kind of round out um while we're in this demo um there is actually i'm gonna sort of remove all the errors here for a
[01:54:18]  second there is one more cool feature thanks yeah i'm hoping this turns out to be a good pattern um there's one more cool feature that that i wanted to kind of
[01:54:35]  show show off here which is um this one doesn't matter so much for all projects but um some of you might be familiar with astro and and with astro um
[01:54:51]  you can have multiple routes and our problem with async is they can collide with each other so we've added a new feature in 1.3 where we can set a prefix
[01:55:02]  id um on both sides so when you hydrate we can use my favorite my favorite id we can do that and then when we server render i'll just do the streaming
[01:55:15]  example for example um where is it render to stream there's we can also add our render id and if it matches everything will highlight hydrate as expected which is here so
[01:55:41]  the window interesting it's like i accidentally closed the window or something because this isn't the right window this is this is hacker news example window just disappeared on me um okay there
[01:56:01]  it is yeah i must have just missed it build example stream start example stream okay beautiful okay and see and this this example hydrated perfectly fine right but if if i mismatch
[01:56:21]  the id essentially and you're like why would you do that i just want to show like you can have multiple hydration routes now um on the same page not conflicting with each other
[01:56:32]  perfectly namespace so now if i do this this won't hydrate properly see how it's not updating see how this counter doesn't work it's an error but essentially
[01:56:42]  my point is we'll be able to support async rendering in astro as soon as they give us the ability to um to provide unique ids from the renderer which
[01:56:54]  is something that i've been talking to them about so um i'm looking forward to that i don't know if that feature makes sense but it's basically just to support
[01:57:05]  islands better it's weird i don't know why it's not opening the right window up ever okay there it is okay and one other thing to mark over here is update to
[01:57:26]  the streaming api i don't know if you notice this it's rendered to stream options and then pipe and this gives us a lot of ability of when we send the
[01:57:34]  stream so we can wait to flush till the end or flush um immediately like i am here and i've set it up so that's the same api for both web streams
[01:57:43]  and for node streams for node you use dot pipe for web stream to use pipe to essentially and it pipes to a writable stream so in this case pipe is is just our
[01:57:52]  response like from express but on like a cloudflare worker you'd pipe to um one of the writable side of one of their transform streams or whatever so essentially um
[01:58:03]  kind of unified the api that's another big one here yeah how does streaming handle meta async page channels and assets um there's some great write-ups i i love
[01:58:12]  that are coming up from the react team on this generally speaking you've only got two options here you either figure it out on the synchronous part of render like before you pipe
[01:58:23]  it through so essentially on that first render collect all the async stuff so you know as you go through your routes or you know start your route loading you know what page you
[01:58:34]  are set on the meta tags or you're going to be setting it in the client when it hydrates that's basically the two options you have streaming there is no real
[01:58:41]  way to get around it like if you want the right stuff you basically have to do it up front you could you know if there's some stuff you could load you could but
[01:58:49]  the problem is the second you stop things to load data you're blocking the stream and you're back to async again you're basically missing the point so if all possible um
[01:58:58]  you you don't want to wait um before you start streaming back the content and obviously the head is what streams first so that's kind of the conflict either you kind of
[01:59:12]  got to pick whether you have a more performant page and and you know you stream the stuff um you know with the the headers that you have or you block the page and
[01:59:27]  wait till the end um i know unfortunately there isn't really a great answer here you think of offloading client-side render oh okay yeah that's interesting i see
[01:59:52]  what you're saying yeah i i mean here's the thing if you are already have the content in the browser like client-side rendering in the main thread is the fastest most
[02:00:14]  performant way to do stuff there's concerns about blocking for sure um but generally speaking like it's it's it's always faster web workers can't write to the dom directly
[02:00:29]  um you have to like go through a bit of a song and a dance and like encode it and send it back like essentially the only the main thread has access to
[02:00:37]  the dom so like they're doing cool stuff quick and stuff with like party town and like playing around with this but like performant rendering only happens on the main thread um manually
[02:00:47]  hydrating is another question uh which is interesting um as of right now we just we're still kind of just hydrating top down i've thought about patterns to hydrate
[02:00:58]  you know as you need it one of the you know as your project gets bigger um it definitely is a consideration the hydration costs and how lazy loading plays in i'm just going
[02:01:08]  to need to explore more right now you know on obviously the small demos where you can see quite notably like a 400 millisecond gap you know for hydration um when you using
[02:01:20]  react like with solid the it hydrates almost immediately our hydration costs are actually relatively cheap because of the way we render it's all fine grain and we just literally just almost we
[02:01:31]  hook up we we just run like some of the fine grain stuff we don't like build a whole beat on but that being said like obviously you always want to do less
[02:01:41]  with with server the thing with you can get better yeah i mean i suppose what it depends on the network speed as i was saying i was beating client server like server rendered stuff
[02:01:59]  with client-side rendering um for the most part um just because of like delay like where they have to actually wait to do this stuff before they start sending other assets and
[02:02:09]  then loading in and causing the waterfalls and stuff i'm just saying like how does the worker get the content like um like i guess i'm thinking mostly first page load and
[02:02:21]  then i'm and then i'm thinking like after the fact um like like it needs to load at some point maybe i'm just not quite following um i think it's interesting
[02:02:34]  and marco we were thinking about this is when you have a framework that's primarily set up for uh server-side rendering it might be interesting to just move that server
[02:02:44]  closer like put it in a worker um so you know that you know we're already moving closer on the edge why don't we just take it all the way to the worker
[02:02:51]  but on the other hand it's like it's only i feel like the benefit comes mostly if you can unify the paradigm like it's always works like that conceptually
[02:02:58]  um because i said client-side rendering is also can be very very fast um anyway okay so we've talked about the streaming apis we've talked about the uh what are
[02:03:13]  they called the render ids essentially the uh the new um ability to do async islands we talked about error boundaries um there's there's a couple one or two other
[02:03:28]  things that i want to talk about from solid 1.3 let's let's just look at the what's let's just look at it for a second here the com solid
[02:03:37]  i've got the change log i'm still working through bugs here as i mentioned but if we go to the next branch you can see what i've been doing and often
[02:03:49]  when i get close sorry when i get close to release i start putting oh i guess i didn't put it in the nest it's the top level package i start putting stuff
[02:04:00]  in the change log to give stuff so we talked about html streaming in the new streaming apis we talked about error boundaries we talked about isolated yes the next thing
[02:04:09]  i want to talk about actually is is a really cool thing um let's say here is universal reactivity um this is the last big feature most of the other stuff we've
[02:04:24]  been doing is like a lot of work on typescript support um and some improvements to source maps but um i think i think and there's a bunch of bug fixes but i
[02:04:33]  think this one's a really interesting one and i'm going to pull up a code sandbox to show you what i'm talking about i shared this on twitter and people were
[02:04:41]  kind of mind blown um the critter cairo shane he he was like i don't know if any of you have ever tried to use an external store um in a
[02:04:51]  framework right the the like if you've ever seen like mob x they have this ability to just like make classes reactive you just go make auto observable and then you can
[02:05:01]  essentially um like wrap um you know normal property access getters and stuff it's make them reactive it's it's kind of a cool thing but most of the time if you
[02:05:15]  were to go through the process of like taking a state library like mob x and using it in react or using it um yeah using it something react you'd usually have to
[02:05:27]  wrap your component in like a like an observer decorator kind of wrap it in effect because you they need something to trap and that generally causes them to render whole components um i
[02:05:39]  if if you're not familiar i apologize i don't have an example of that in front of me right now but essentially actually maybe i can see mob x react just pull it
[02:05:49]  up to kind of show you what i mean yeah here's the timer and then essentially you use this observer and you actually wrap your component in an observer and then it rer
[02:06:04] uns the whole component the problem with reactive libraries playing with other reactive libraries um is what if you don't want to re-render the whole component like often you have no
[02:06:17]  reason to use mob x in view or solid because we have our own state management we have our own reactivity why would you why would you do that but you know just like
[02:06:25]  mob x state tree there's some interesting applications like specific state patterns and the thing is with react you might just wrap the whole thing and re-render everything that's not going
[02:06:34]  to work in a more granular system and what you end up happening it's very similar to when you interact with mob x is you'll essentially have to map you know each
[02:06:46]  thing to a signal so you'll maybe like this this is a class which is nice it's like almost like a proxy it has like the whole thing but like quite often you
[02:06:59] 'll have to like you make like a use observable hook and inside that you'll subscribe to the mob x observable essentially and have it right to a signal like it
[02:07:12] 'll look something if your mob x program you might have seen this before uh auto run and then you'll be like never whenever you know timer got seconds past changes um set
[02:07:43]  the signal so what you what you'll do is you'll write a wrapper kind of like this and maybe it'll look like maybe it'll look like this use observable
[02:08:20]  okay let's pretend this is our use observable function okay let's say you'll use observable and you'll return it and you'll return it and you'll return
[02:08:45]  it and you'll return it and you'll return it and you'll return it and you'll return it and you'll return it and you'll return it and you'll return
[02:08:49]  it and you'll return it and you'll return it and you'll return it and you'll return it and you'll return it and you'll return it and so you let
[02:08:52] 's say you make your new timer and then you go use observable and then you go use observable timer timer dot seconds past and then you'll be like uh uh
[02:09:05]  uh let's call it seconds and then you'll return it and then you'll return it and then you'll return it and it works and you click and you're set
[02:09:34]  this is the typical way and uh let me give my screen a little bit bigger so you can see it a little better here but this is this is the typical way that
[02:09:44]  i'm going to comment this out the proof that i'm not doing any tricks this is the typical way that you would do this in in in most libraries um let me see
[02:09:55]  if i can save this so i probably don't want to save it because people are people who should fork this anyways you you make you make a special wrapper you use a
[02:10:10]  signal you set up an auto run and then everywhere you want to use a mob x variable in solid you wrap it in a use observable thing and then you get a new
[02:10:19]  signal and you use that in your template this is the standard process of that um and then if you want to use different things in mob x um you might use have a whole
[02:10:29]  set of wrappers like use computed use observable use auto run or whatever like you it's kind of this awkward process of wrappers and and to be fair it's
[02:10:41]  very similar um like it is similar in other libraries they kind of use a hook wrapper when it doesn't work when it doesn't fit the paradigm properly like even react you just
[02:10:54]  make a hook and then now it's in react state essentially but what's really cool about this thing that that that um that shane came up with here was he was
[02:11:05]  like what if we just registered it right at the beginning and and made it so that anytime solid makes a computation it can listen for non-native atoms atoms that come from
[02:11:18]  an external system essentially what if you could just provide a simple config where you return a track and dispose life cycle functions and when it tracks your only responsibility is to let set
[02:11:32]  up mob x's tracking and make sure that you return the the result of that function and then have this for tear down really simple api so whenever you make a new source
[02:11:45]  create a new reaction track and dispose and if you could do that well now when we get a mob x observable here we can actually read it straight inside the jsx
[02:12:01]  right because it's actually solids effects and computations are now aware of mob x permanence it doesn't matter what it is it could be it could be create effect right we
[02:12:14]  can console log it it too we wanted to solid now knows that mob x observables are trackable and obviously see here's console logging obviously but you can also use
[02:12:35]  because you're using mob x you can also use the mob x's ones too you can do like this uh i have to import it uh i have to import it from
[02:12:46]  mob x first but we can also go auto run there we go and it's still working essentially you can use you can basically write your whole app in mob x with the js
[02:13:03] x and not even think about it or use solids primitives and use them interchangeably because basically their atoms can be read by the others computations technically the mob x ones
[02:13:15]  won't be able to read the solid primitives but the solid primitives will be able to read all the mob x ones it's kind of it's kind of cool so
[02:13:27]  if you had an app written in mob x state tree now you can you know you could you could just pull it in and drive a solid app without even using any solids prim
[02:13:44] itives technically this is going to be a little bit less performant because um there's this like little overhead but if you're just using mob x's uh primitives here solids
[02:13:54]  subscriptions will be will just be the single signal yeah so i mean it's it's not really it's it is an overhead cost but if you don't actually read from
[02:14:05]  it it's it's it's not uh we don't create the subscription arrays which means that we don't actually it's not really as that expensive so i think this is
[02:14:15]  a good option we're still this is still considered experimental because we haven't figured out how this works with concurrent rendering completely but um we'll be experimenting with this and it's
[02:14:24]  it's it's really kind of a cool feature to be able to use any reactive library almost natively and solid all right um yeah i think i think that mostly covers
[02:14:48]  the 1.3 release and mostly covers the streaming topic that is most of actually what i what i wanted to cover today um i i i've been doing a lot of
[02:15:03]  streaming demos and stuff um i did want to show off uh here for a moment um i i've showed off enough timelines uh obviously um but uh what i wanted to show is
[02:15:19]  that react did update their streaming demo the next js streaming demo um from a little while back so i think if if you haven't seen it they've actually improved the performance
[02:15:35]  um considerably on on on this versell server component demo see see see the new placeholder they have they got rid of that cascading placeholder and it's much
[02:15:47]  nicer now the only problem is they seem to have some kind of http caching going on but when i refresh i don't see the streaming again um i'm pretty sure if
[02:15:56]  i wait like three or four seconds it'll show it or five like a little bit it'll show it but even with everything disabled they're doing and the um service worker
[02:16:08]  disabled they're doing something where the streaming doesn't um doesn't come through um it's quite possible that they're caching the html and as i said before when
[02:16:20]  you have um streaming like this if you have the data immediately you don't see the loading state so i'm pretty sure that's that's what's happening here but if you
[02:16:29]  look at react it is and what they're they're sending over the wire just in case you you're curious as well about what react streaming solution looks like um i'll
[02:16:40]  spit this out it's you're going to see a lot of the similar kind of stuff you're going to see see some css coming in they're inlining the styles
[02:16:49]  which is good for performance but the thing here is yeah where are we i'm at the bottom here we should see we should see this is their script um to for here
[02:17:11] 's their data the script to do the replacement call and this is this is how they do the element replace this code snippet here and then the i want to say here
[02:17:27]  is the majority of the content here should be coming in through let's get up to the top of the stories here they should have yeah this is interesting i don't see
[02:17:40]  it which is interesting uh there should be i'm trying to find the insertion point for yeah here it is div hidden so everything in here is the part that's streamed
[02:17:50]  in after the fact and then this is their this is their place this is this is their placeholder stuff here see template p1 is their placeholder and then div hidden
[02:18:01]  and they they probably insert this in very similar to what we're doing in solid marco works the same way too um there's some interesting stuff going on but um generally speaking
[02:18:13]  it's a very similar mechanism let's see if i refresh if we can see the placeholder again see there's a placeholder yeah so yeah um could something similar to
[02:18:32]  the last feature be used to seamlessly use solid components inside view with use primitives well i don't know if the the rendering difference is a challenge we we could probably natively
[02:18:45]  use view and solid because the reactivity um works like that um right um but like rendering is different like view has a v dom so we it's kind of like with
[02:19:01]  react we have the same problem with like uh what's it called transclusion like like inserting children and whatnot like it render even if i guess the interesting part is you you could
[02:19:12]  share state easier like if you had like but you wouldn't have context to use it so but you could probably use views um reactivity pretty natively to have solid components like
[02:19:25]  run off the same global store so i mean that's kind of cool how do you handle scope position with streaming i wonder about page refresh what's called that streaming as i said
[02:19:35]  is just pulling in the htl response so i imagine um if you're interacting with the page a bit it's like if you're if you're adding stuff to the
[02:19:45]  middle of the page it's going to jump much like client-side rendering when you answer the page hopefully you create your placeholders to roughly be the same size of your
[02:19:55]  content but it behaves a lot like client-side rendering in the sense that the con the hidden content is not going to affect too much because it's like removed out of the
[02:20:04]  flow but any content that you then insert is basically very like client-side rendering is kind of jumping into into view back and forward navigation um well it depends on how you
[02:20:16] 're handling right if the browser is handling it like generally speaking like all the examples i've shown same with react are single page apps so like if you move forward and back after
[02:20:32]  that fact you're doing everything in the client like it turns into a single page app um obviously it's the first page you're gonna get back you're gonna leave the
[02:20:39]  site but if generally speaking if you go into the site click onto another tab then click back you're not streaming again like everything's client-side the streaming is literally just the
[02:20:49]  serving of the initial html file so um it's not unlike the experience as i said of of client-side rendering um for the way that kind of pops in
[02:21:00]  and then it goes kind of full client-side after that point generally i mean it depends on the solution marco doesn't um right marco's multi-page app so
[02:21:09]  when it streams like you you stream again but i mean the cool thing as i mentioned before streaming is if the page is cached um it does have the ability ability to
[02:21:22]  like play pretty quickly so you don't even see the loading states but basically all html streamed in a sense it's the out of order stuff that is that mess
[02:21:34] es things up when you do the insertions so it has all the same characteristics of inserting html when you insert with javascript because it is javascript essentially
[02:21:45]  yeah so as i said big ups on them improving this demo um i did some page insights and stuff and the performance here is is much much much better than where we were
[02:21:56]  before right um for this for for this one um when i covered this two weeks ago they were hydrating in about 1.8 seconds on mobile and okay well i mean
[02:22:15]  the time to interactive is still kind of slow but the way better first content full paint way better large paint and um yeah uh i mean i guess it's still react but um
[02:22:28]  the the the this is this is where the benefit comes in streaming this the getting the content sooner sure what while i'm answering questions let's see any mac way to track
[02:22:43]  the previous value of a signal and solid um that's a good question it depends on where you want to use it um generally speaking solid's mostly concerned with synchronization so getting
[02:22:58]  the previous value requires a little bit of extra work things like memos and effects have this uh have the ability to um how should i put it they have the ability to
[02:23:10]  um pass the previous calculation value back in like they're all reducing but generally speaking previous values of signals are tricky like you'd have to store them somewhere or put them in a
[02:23:21]  different signal essentially you don't have to worry about signals like redrawing the page like it's not like react where like oh if it's stateful then you're going
[02:23:28]  to redraw that component signals can work in isolation it's only the things that subscribe to them that matter but for wiring the past you kind of have to do the specific
[02:23:38]  wiring right yeah i mean there aren't really refs and solid like they're just uh refs and solid are just a variable um so you can you because the thing doesn
[02:23:50] 't re-render like you don't have to store it in a special object you can literally just assign it to a a value and that's fine like we we don
[02:23:57] 't have use ref um the components don't rerun so it's just let whatever so you could always get the previous value you store the previous value like that things like concurrent
[02:24:10]  rendering could cause some tearing theoretically um um but yeah i'd have to understand the use case all right i think that's good oh i'd be interested in reading that one
[02:24:38]  of the things is like as i said we've been using streaming a lot in marco with mpas but i think part of our saving grace is because we use m
[02:24:45] pas um you know like full page refresh and stuff like you maybe the like the state of things doesn't get as convoluted but be be interested in that um but most
[02:24:56]  most of the there's there's a there's a threat right now going on and i think let me see here go to github some discussion that's going on
[02:25:05]  that i thought was interesting maybe i can't yeah maybe i'm not going to find it right now but there's like uh there's a whole thread about yeah i'm not
[02:25:16]  going to find it right now there's basically like a whole thread about us kind of deciding kind of talking about different error cases and different potential ways of handling changing them yeah
[02:25:36]  it's probably worth worth worth sharing definitely yeah the comments section definitely doesn't but do links work in chatter do they just get blocked anyway um you can always drop it on
[02:26:01]  our discord if possible but yeah i'd definitely be interested i think the thing is streaming um does have opens up a different set of questions because there's a whole bunch of different
[02:26:12]  constraints and as suniel was saying in terms of like the like different um like libraries have been considered because it's not it's not just the frameworks like i was working on
[02:26:25]  graphql for marco to support streaming and the problem was they assumed that all the hydrate hydrated data was there up front which made things really difficult because they were
[02:26:33]  like like they assumed that you gather all the hydrated data at the end of rendering async like you know everything and then it's there before you start any hydrating and like
[02:26:43]  that's not how streaming works i had to kind of create an incremental cache and stream the data as it completed and then restore the data for the cache as it as it finished
[02:26:53]  up on the client because um like it just tools like that just aren't built that way today um reacts working with them but i think that's like maybe that's why
[02:27:04]  i was like a little less concerned about some third-party libraries just because it's it's not just the changes that we do with the framework in terms of supporting them
[02:27:14]  it's just like they actually have to change to address this this is the streaming stuff is potentially a bigger change than even all the concurrent stuff people were worried about um obviously we
[02:27:25]  ease into it and take our time but essentially it does maybe this is largely why you know it keeps on becoming that forgotten art so to speak um there are you have to approach
[02:27:35]  things a little differently when you know everything's kind of concurrent non-blocking um so like libraries will have to change with it anyway um yeah i i this this is
[02:27:53]  good for today um unless we're going to try and drop that one article over to chat while it's still open um i'm gonna i'm gonna i'm gonna call
[02:28:05]  the stream and uh and uh we'll see if i i probably won't do one next week it's christmas eve um and then it's new year's eve so it
[02:28:16]  might be a couple weeks i'll see if i can stream uh midweek maybe a different day um so keep an eye out for it but um i i think um we
[02:28:24] 've we've covered streaming as far as we're going to cover it um today obviously a lot of looking at some of the performance stuff but um i i think i think it
[02:28:33] 's really cool and i think there's a lot of potential here um but yeah it's it's going to take a little time for it to go mainstream but um who knows
[02:28:43]  with react you know kind of leading the way i think there's a real potential here all right perfect you all have a great weekend uh until next time see ya