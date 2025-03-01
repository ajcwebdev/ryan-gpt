---
showLink: "https://www.youtube.com/watch?v=BEWkLXU1Wlc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Let's look at Web Components"
description: ""
publishDate: "2022-03-26"
coverImage: "https://i.ytimg.com/vi/BEWkLXU1Wlc/maxresdefault.jpg"
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

    ### 00:00 - Introduction and Overview
      
    A comprehensive description of the content, serving as an overview for readers. It begins by introducing the main themes and concepts that will be explored throughout the chapter. The author outlines several key points, each of which is examined in detail. These points are discussed in terms of their significance and potential impact on various aspects of the subject matter. The text then explores how these core ideas are applied in practical contexts, highlighting their relevance to current issues and challenges. Throughout the chapter, connections are drawn between different concepts, demonstrating their interrelationships and broader implications within the field of study.


## Transcript

[00:00:00]  Hi, welcome to my stream tonight. We're kind of going out a bit out on a limb a little bit about our typical topics today because I wanted to talk about
[00:00:12]  web components. I actually have a fairly long history with web components and I mean a large part of why I haven't covered them in the stream is while they have very
[00:00:26]  good uses and whether I make a lot of sense for me at least they're kind of a lower level primitive and which doesn't always make it really relevant. I know some
[00:00:39]  people have different opinions and I think today's stream is actually going to be a little bit controversial for that reason but essentially there's a lot of ideas that go into building
[00:00:53]  something for the platform for everyone to use and it's really complicated to kind of balance those different aspects and in some ways web components have almost become how should I put it the
[00:01:07]  like pinnacle example or like the primary example of where you can see the sort of discrepancy between how things are used in the wild and maybe the intention
[00:01:21]  or who knows maybe the intention was never right in the first place. So I think it's going to be good to talk about this because while maybe it's not the
[00:01:33]  most interesting topic from like you know performance or cutting edge perspective there's a lot of people and companies and you know different parties involved in this conversation so I think I think a
[00:01:47]  lot of people have opinions and care about this so that you know I think I think it's an important topic for modern web dev. Yeah I see people joining into the stream
[00:01:58]  right now. I'll just give everyone a couple more minutes here come say hi in the chat if you're here you know you know the drill start getting my screen set
[00:02:12]  up here for sharing well that's interesting apparently chrome apparently chrome lost permission to uh to um share my screen which is pretty funny I don't know how that happened but
[00:02:45]  um let's go oh they're going to make me restart chrome oh that's that's that's that's garbage um I wonder if I can do that without losing the
[00:03:02]  broadcast sorry it's I do this every week as you know and for some reason chrome decided to act up on me maybe because I knew I was talking about web components just kidding
[00:03:14]  let's try this again oh man they're gonna they're gonna make me restart the browser I'm gonna see what I can do but I have a suspicion we're gonna
[00:03:39]  lose the broadcast which sucks which means I might have to send a link out again in a second um because for some reason chrome lost the permission um so give me a second
[00:03:50]  here I'm going to try and I'm going to try and rectify this sorry about that so it worked we're still live you guys still there all right let
[00:04:33] 's try again yeah you wish no that's not going to happen anytime soon sorry I'm responding to to the comment here oh okay let's uh let's get this show
[00:05:02]  on the road here sorry about that um sorry I need to get another browser window opening I've lost all I've lost all my open tabs and everything I had ready to
[00:05:22]  to talk about so just give me just a second there we go okay let's see if we can get this going oh there we go all right here we go all right
[00:05:35]  so um yeah let's let's let's change gears here and uh or get started and talk about this week in javascript um this has been a fun week for me
[00:05:51]  actually a lot of revelations a lot of discovery and a lot of like thinking about the future and I've been as you know on the stream exploring where things are
[00:06:03]  going and obviously there's my work um at ebay on marco but um a couple a couple weeks ago I was talking I was I was talking to miss miss miss go
[00:06:16]  uh hevery after uh after you know just kind of randomly stumbling upon some kind of getting stuck on something on marco and he he he he mentioned to to me
[00:06:27]  he's like I've decided quick doesn't do hydration and I was like what do you mean and he's like well hydration for for most frameworks involves like rerunning the the
[00:06:38]  tree you know like attaching event listeners and you know uh you know initializing state and you know running a bunch of code and doing that he's like but in quick like
[00:06:52]  we serialize all the event listeners like into into um the dom right and we just attach a couple event handlers top level so we just want to script this like add like
[00:07:04]  document add click handler essentially like we don't run any tree we don't run anything so no hydration I stopped thinking about it for a second I'm like I'm not sure
[00:07:15]  everyone's going to agree with you on that you know simply from the fact that like hydration is just adding interactivity so maybe saying no hydration but he he's kind of
[00:07:24]  right the the idealized resumable framework doesn't really hydrate in the traditional sense there isn't really this execution cost and kind of having recognized that um I want to
[00:07:39]  write about it so um the I started this week by releasing this uh conquering javascript hydration article which was um which is pretty fun um because I do feel the
[00:07:50]  more I work through it that we are kind of getting close to a point at which hydration is a problem of the past um which seems kind of surprising considering I was just talking
[00:08:00]  a couple weeks ago about how it was the hardest problem of front end dev and has been people have been working on this for for um for years but I feel like in the
[00:08:09]  last year or so and it kind of finally independently the marco team and quick basically stumbled on a way to to basically solve this and I've been looking at it and
[00:08:22]  I've been trying to evaluate um a lot of whether this can apply to other frameworks because really it's it's a hydration technique purely it's not about being partial or progressive
[00:08:32]  which both marco and quick have these other things but the pure resumability of stuff doesn't necessarily care about how much javascript you load so um I think this
[00:08:42]  is a really interesting thing for the future and if if uh I I'm going to talk about this more on in future streams but I I I felt like shouting it as
[00:08:50]  loud as I can that we were very close I feel to actually you know the cost of javascript loading in the browser not being as big of a thing as it's
[00:09:00]  been historically um um it's really cool stuff um and I I'm hoping to work more on in the future uh what else we got here I'm giving a talk on
[00:09:09]  marco um next tuesday if anyone's interested um uh the next day almost um we actually came across another really um interesting revelation was um there's been a lot of talk
[00:09:24]  and if you guys have been on my stream you've seen this where um you know there's been I've had some back and forth with ryan florence um
[00:09:34]  you know uh you know talking about the performance of of uh streaming and on my last stream I actually actually showed like very visibly with with you know graphs um how um the
[00:09:49]  basically the uh chrome dev tools weren't really properly representing things and that if you went and actually tried some services that tested devices in the world you could actually see the streaming
[00:10:03]  was still um beneficial so um essentially um michael you know at almost the same time because we're both staring at this and he he's he's you know on the mar
[00:10:14] co team you've seen him on stream before and we were just thinking like this can't be right and what he what he realized which is really kind of cool is that
[00:10:23]  um like he talks a bit about the benefits of uh performance server rendering of you know react server rendering is much slower than ones that do streams like because it makes it virtual dom
[00:10:35]  on the server where like uh marco or svelte or solid basically just can cast strings are much more performing and he's talking about the benefits of streaming but the
[00:10:45]  thing is that if you didn't really get this article when i posted i understand it wasn't really clear the the gist of it is chrome dev tools doesn't really account
[00:10:55]  for slowness in the server response they're only worried about slowing down the network so essentially if you have something that responds in 20 milliseconds and i don't know 200
[00:11:08]  milliseconds if the chrome dev tools set latency is um say 300 milliseconds you're not going to see a difference as long as the latency is higher than the server setting time they just
[00:11:23]  cap it off they don't care they just push it to that latency and they don't it's they don't actually show the slowdown so it completely masks any real costs
[00:11:31]  that happen on the server essentially um when you do the throttling and the problem is this is what you do when you're sitting there and you're like oh well
[00:11:39]  my my site work good on slow devices you you're gonna go okay i'm gonna toggle this to slow 3g or fast 3g and turn up the cpu thrott
[00:11:50] ling so it slows down and hoping that you get a representative look at um you know how how your site performs and the truth of the matter is this hides any server costs
[00:12:03]  it it's fairly it's a fine approach to to networking but it hides server costs so if you spend a bunch of time blocking rendering by you know waiting to fetch your data
[00:12:16]  well you're not going to see that when you slow it down and that's why um you know i think brian was um kind of saying a few posts that you
[00:12:25]  know when you have a slow network streaming is no uh faster than uh than waiting and yeah we saw last week that wasn't true but as i said it's not really his
[00:12:38]  fault the dev tools just hide this fact so i think i think this was a really interesting kind of revelation at least for me because i mean this is what we do right
[00:12:46]  we just open up the lighthouse tab check out our scores throttle some stuff and consider it a done deal but it is it's actually hiding um the benefits of certain techniques like streaming
[00:12:59]  or perhaps early hints and whatnot so i think this is a game changer and um we had a great conversation actually um with with him with ryan afterwards and i was on
[00:13:10]  twitter and he he he was like yeah you know what i feel like i'm being nerd sniped quoting him but um i'm going to look into this again because yeah maybe
[00:13:18]  maybe there's something here so i'm just happy to have made a positive um influence to have the remix guys at least reevaluate the benefit of these sort of approaches so
[00:13:31]  um yeah net positive i think from being able to figure this interesting behavior um and misconception around performance and what else we got here this week um so yeah we talked about conqu
[00:13:45] ering hydration we talked about dev tools are lying to you um other than that um there's there's a few odd interesting pieces um i thought this was cool um steve uh
[00:13:59]  from builder io and you know who's responsible for quick and party town all that stuff they're they're working on um trying to get some react components into quick which is
[00:14:09]  really interesting i think there's a kind of shift in their thinking because quick you know has been kind of presented a lot as like uh you know another framework and it does incredible
[00:14:18]  lazy loading but if they can extend those benefits almost like astro does to um to other um other frameworks maybe not like obviously you can't be as often move quick as
[00:14:29]  quick unless you break things down to that level we'd cover that on stream but it is interesting if they can actually solve this interrupt problem um they're suggesting as much so i
[00:14:38] 'm i want to see where this goes i don't know about you guys but this sounds this looks pretty cool um and uh yeah more more react talk and i i i
[00:14:48]  feel like this could probably even go into its own stream at some point but there's been there's been a lot of tension over the last few years between say the the core
[00:14:59]  team and the community and i mean that's that's even sometimes exemplified like what did what did i see that was kind of funny about this i saw this tweet from ten
[00:15:11] or um but i thought was kind of funny he was saying announcing react hooks users are like huh library authors celebrating and then announcing concurrent rendering transitions users are like wow and library
[00:15:21]  authors are like skull there's i don't think it's just concurrent rendering transitions and react core team's done a lot to improve the apis and the usage around it so
[00:15:30]  it's not just like opting into concurrent mode everywhere they've made it more granular i think i think they've done a great job on that but i think this is a
[00:15:40]  sign of a bigger shift right and and a bigger consideration um and you you might be like what i mean but i mean if you've been following the stream react server components
[00:15:56]  are kind of getting positioned as is as this future and the core team's caring about them a lot like one of the most interesting things to me is that they introduce suspense
[00:16:05]  with lazy components say back when was that 2018 uh maybe 17 even like it was quite a long time ago and then they make these experimental docs where they talk about this hypothetical resource
[00:16:19]  primitive it's funny because it's all that i actually did make a resource primitive but that would kind of handle data loading like they gave an idea of how data loading and
[00:16:29]  suspense would work but then even with react 18 around the corner and all the talk of streaming and stuff the mechanics are there for throwing promises and all that stuff but they they haven
[00:16:39] 't actually introduced a primitive for handling data loading and i find that odd libraries are know how how to tap into it and they're working on it but like you know like
[00:16:53]  things like react query have that capability and um some of the stuff the remix guys have been adding to uh react router which i'll talk about in a minute has that capability and
[00:17:03]  apollo and a few others but i think apollo actually maybe i spoke too soon but it's interesting that react hasn't provided that primitive so that just anyone who's like
[00:17:11]  hey i want to do a query you can do it you're still on like the use effect train and and i don't know i think a lot of this comes through
[00:17:20]  is they're kind of waiting to show everything for when it's when it's done and i think part of that puzzle we saw in the react server components demo if you saw
[00:17:29]  it is you know react adding a bunch of fetching libraries and stuff to work with server components i i'm i'm i'm getting the impression that we're seeing even
[00:17:37]  though it's going to be kind of how should i put it stuff will work along the whole path you know each piece works on its own we're seeing a new react a
[00:17:47]  new model for it and if you don't believe me on that although most of you following my stream probably do um the where is it here yeah where was i yeah seb
[00:18:01] astian who's now uh working at versell basically mentions here the main thing that i'm working on right now is what does the routing look like for server component world and what
[00:18:14]  are the implications which are deep once we understand it it becomes easier to see the overlap remains so when was the last time the react core team was working on routing ever like
[00:18:26]  we're this this is huge like like i mean i i mentioned on previous streams that routing is sort of the backbone of the web it's the thing that sets the paradigm right
[00:18:36]  it's it's it's the shift you know when when we started at the beginning um you know there's all server routed apps you know kind of what we call m
[00:18:45] pas these days and then we went to single page apps we had like hash routing because we we didn't have push stating the technology behind that and it kind of gave us
[00:18:53]  some semblance of routing in the client but the client can control and communicate it with the server then we got actual push state which let us use the real urls and then
[00:19:02]  that made modern ssr possible which sort of was the next stage where we were ssring single page apps when i hear that they're figuring out what routing is for
[00:19:11]  certain components like to me that's the that's the next thing this is a different type of router and we've talked about this like multiple streams and but here is seb
[00:19:20]  actually saying that they're working on it so like to me this is huge i i go off on the thread about talking about the implications and the challenges and whatever but like
[00:19:32]  regardless take notice of this right because then the other pieces all start fitting into place like this was triggered because remix is is like they they're claiming the router which is good for
[00:19:47]  them like they wrote it but like react router is the most popular router for react it's been the most popular router for years and they're backporting features from remix
[00:19:58]  into react router that makes sense a lot of those features were in had versions in the original react router before they cut them out in v4 and ember router had those features
[00:20:08]  and solid router has some of those features too and react location for some reason they cut them out in v4 because like popular patterns dictated them but they weren't necessarily good
[00:20:17]  patterns and i'm glad we're getting back to good patterns but think about it remix is the router like the meta framework is built off the router they're bringing that into
[00:20:30]  into into remix it's basically remix router now and essentially i i thought it was really smart actually they're they're actually making the react router repo the remix uh the remix repo
[00:20:42]  so now remix will have 46 000 stars instead of the 14 000 stars they have now like they're actually commandeering it and making it part of the same brand which
[00:20:50]  is something they can do which is very very smart because it just leapfrogs remix ahead um but essentially what i'm getting at is they've been skeptical about react server
[00:21:01]  components and some of these new technologies like streaming which react core team is pushing and their work and next and that core team are working together pretty closely you know with sebastian
[00:21:14]  over ever so so it's almost like i mean it's almost like there's a future that the react core team's seeing that next js is aligning with and essentially
[00:21:26]  it's like the official it's not but the official meta framework for react so where does that leave everyone else you know those same library authors they're sitting there with skull and
[00:21:37]  crossbones and tanner's tweet well i i don't know but remix is doubling down on their routing and their approach and their hope i'm gathering is to take everyone who
[00:21:48]  uses react router today and funnel them into remix so i i'm almost i'm almost seeing like a like this remix versus next js narrative might continue to grow and it's
[00:22:00]  funny you know how maybe fates are a bit tied because remix is very much centered on react as it is today and uh next is very much centered on the react the core
[00:22:10]  team sees in the future and i i'm very interested to see um if you know you know from some people's perspective react core team has kind of stumbled a bit you
[00:22:20]  know the last couple years trying to get suspense out and getting all these these elements and things out things that remix has been kind of like yeah we don't need suspense or you
[00:22:28]  know like things you know we'll make our own transitions if those deliveries still kind of stumble out and people not follow them this will just continue to push people you know into remix
[00:22:40]  essentially so i don't know maybe i'm reading too much into it but i can i can see a pattern here in terms of where remix is sitting what the opinions are
[00:22:49]  and where react core team and nexus sitting maybe i'm reading too much into it you you you you guys decide but when i know that the react member from react core teams
[00:22:59]  arguably the visionary behind react is working on routing take notice okay let's let's move on there's a couple more more interesting ones this week yeah i mean this one took
[00:23:12]  me off guard i don't know if you all saw this you know what i'm i'm just i'm just going to open it up because i was like let's just
[00:23:20]  let's just look at this alternative render mode for view so i don't i'm just teasing it a little bit here but the idea is it's it's an it
[00:23:29]  it's a non-virtual dom compile output format that has uh still similar code output size but drastically more efficient memory usage and performance um to think it's uh it
[00:23:44] 's inspired by solid which is another uh new interesting framework out there so um yeah so we were always learning from the the you know great ideas coming out of the community and
[00:23:59]  uh see how we can uh improve you on that front so uh so this view yeah any anyway um kind of interesting news um i guess they looked at our compiled output and view
[00:24:12]  and solid are some are very very similar frameworks for anyone who kind of knows how the underpinnings go probably people follow my stream so it makes sense to me that they're
[00:24:20]  kind of experimenting with this i actually sort of bugged evan a couple years ago i was like when they released uh view three or the show that he started writing about
[00:24:29]  it you know like before the view three release evan explained all the technology behind it i was like man why are you still using a virtual dom what's up and he he
[00:24:36]  had his reasons i don't actually agree with those reasons i as you've seen with solid you can solve this a lot of the complicated stuff without a virtual dom but regardless it
[00:24:46] 's fine for him to have that that belief but it's really cool to see some of that thinking coming around into view because views always been capable of taking this approach but
[00:24:55]  um as i said i it's it's a difference of coming up at a different time period i think if you go back to early 2010s reactivity was on the
[00:25:06]  outs view like reactivity they're they're basically the champions of reactivity um for for years in my perspective because they they basically operated um you know kind of in the open
[00:25:20]  but like under cloak so to speak right they kept the reactivity close hit it you know in their options api adopted a vdom as a way to kind of get
[00:25:30]  past some of the classic uh um executional issues that reactivity has um interestingly mob x came out around same time a little bit later slightly later and mob x actually solved most
[00:25:44]  of the issues with reactivity but it wasn't a framework so you know from my perspective i kind of went on the mob x thinking and that's where solid came from but
[00:25:54]  um view kind of went the other path and basically carried the torch in the shadows so i'm like so stoked to see view 3 come out and finally expose those reactive prim
[00:26:05] itives and you know you know start playing with ideas that hey maybe you you don't need that vdom i i think i think it's really cool um you know so as
[00:26:13]  a club evan's a very clever guy he's he's managed to make view sort of do what every other framework does and like i don't mean like copying in
[00:26:23]  that sense like like he literally does what every framework does it the view has like almost every feature of every framework every syntax every you can almost do anything with view and i always
[00:26:35]  say that's the power of solid um and view has the same primitive so view has that power and they've chosen to exercise it so you know it makes a lot of sense
[00:26:44]  to me um because yeah out of the the big players view is actually actually the one that has the most comparable comparable pieces to solid so um cool to see regardless and yeah
[00:26:57]  more taylor but that i was trying to think i think i think i think that's that's most of what i i i want i i this week in javas
[00:27:07] cript was for me it wasn't as eventful maybe externally um as some of the few weeks we didn't have there wasn't a huge twitter battle other than that one conversation
[00:27:19]  with ryan florence that actually ended up being a very nice civil place where everyone agreed that there is something there um so i i think it's probably time to
[00:27:29]  move on um to uh talk a little bit about web components everyone's still there right you you you you are you're all alive chat's been a little bit quiet no
[00:27:45]  all right sorry the stream is going to be a little bit less organized not that my stream is particularly organized but because of that restart i lost all my i had a bunch
[00:27:59]  of chrome windows open and i lost them all but luckily for me um luckily for me i did a little bit of prep and prepared a bunch of links here so it's sure
[00:28:12]  they're not all open but at least they should if i did everything right open up in these browsers and we can start talking about it so let's let's go on
[00:28:20]  to our next section here and and and get into web components okay for for you all who don't know what web components are and there might be some of you because while they
[00:28:31] 're getting more and more popular they're still a little bit obscure from the framework perspective um it's actually a collection of four different standards um to kind of wrap under this sort
[00:28:43]  of banner and i sometimes think the name web component is a little bit unfortunate but i understand it why why why we got here because it's a bit like java and
[00:28:53]  javascript i feel like essentially component was the term that was cool at the time and it still is cool um at the time web components are coming up and they're like
[00:29:05]  what do we call the spec where we're just getting all the pieces we need to you know build these powerful dom elements and they're like let's call them components you know
[00:29:14]  like i think that's a big part of it um components in uh framework sense and components in the uh um how should i call it in the um web component sense aren
[00:29:27] 't necessarily the same thing some people treat them the same way which is fine but they aren't they they they aren't necessarily the same thing and i think uh what we'll
[00:29:41]  see as we progress and get into the discussion uh about what that actually means but yeah one of the coolest things about web components today that was not true when i when i
[00:29:48]  got started is that they are supported everywhere across every browser stable stable stable stable stable um this happened around 2020 i think 2019 2020 um which was supposed to be the year of web
[00:30:05]  components we're in 2022 i don't know if we're there yet we are seeing some large companies adopt web components as a delivery and it makes a lot of sense for
[00:30:14]  them because uh there's some qualities of web components that make them very attractive there's other qualities of web components that make them very not attractive and we'll talk about both today
[00:30:22]  um interesting thing for me is actually this table has changed over time see there's each the the four pieces that i told you about were html templates custom elements shadow
[00:30:34]  dom and this used to be html imports but they've replaced it with esp modules because essentially for the longest time the web component spec actually had the ability to import h
[00:30:44] tml um directly from other html files kind of like javascript imports and that was probably the least popular spec of the whole bunch and over time it just
[00:30:55]  kind of got folded people like well if i'm importing javascript anyways why do i need html imports it's tried to come back on like at least two or
[00:31:01]  three more times i feel like it's kind of you know the the rsc or the spec that never that never dies but at least from web components.org's perspective um
[00:31:12]  every every browser supports them and es modules are the way forward wait what year is it uh yeah no so yeah i i i i if you search like you know how there
[00:31:29] 's like the in the year of linux or whatever the like you'll probably find like 21 is the year you know whatever right web components are kind of the same it's
[00:31:42]  like the thing that never comes right year of web components let's let's do a google search year of web components it's 2022 the year of web components yeah you get
[00:31:53]  the idea if you search you'll find pages of people suggesting that one year of web components will be relevant but um we we will see they are relevant they have special use cases
[00:32:03]  but um they're they're we'll kind of dig into this a bit it's and i think this is part of the challenge with this topic um is that there is
[00:32:14]  so many different perspectives on it but before we get into that let's just let's just talk about what they are and what they look like and what they do so i'm
[00:32:22]  just gonna grab one of the coolest thing about web components you gotta that i gotta say i love is you you can literally just open up um uh your your like a text editor
[00:32:32]  or whatever and you can just build a web component immediately like i'm just gonna take something vanilla from code sandbox right now and we're gonna we're gonna build a really
[00:32:42]  quick web component just to kind of get a feel for it or whatever because all we need here we can get rid of this stuff is we just need a class and we can
[00:32:53]  call it i don't know my i'm gonna start with custom elements i mentioned these four specs i don't know if i explained them very well html templates are the
[00:33:00]  template element you've probably seen them custom elements are what i'm going to show you right now which is actually like the custom element the names are pretty obvious the shadow dom
[00:33:10]  is how they do slotting and scope um or style scoping and then es modules how we do imports right so everyone should be familiar with es modules but i'm just gonna
[00:33:21]  just go my component or actually i'm gonna say my element and then all you do is you make it extend the element you want to extend and for the most part this
[00:33:31]  is just html element um some browsers safari look like you extend other elements and it's really really unfortunate because it really kills the progressive enhancement see and that's part
[00:33:44]  of the challenge here is basically web components started as a an idea of probably to solve a couple simple things like hey i want to know when my dom elements are connected or
[00:33:55]  removed from the dom you know this is this is you know there's mutation observers for that but i don't know which came first but essentially if you want to build functionality on
[00:34:06]  top of a dom element you need to have some life cycles and the the the second thing that people had problems were like how do i scope styles and somehow what's happened
[00:34:19]  is you could take these separate needs and they they they've all got wrapped into the same ball of yarn essentially and it feels like like every spec gets built into this almost
[00:34:31]  like trying to build a framework for the web which we talked about a bit last week i consider that hmm dangerous but let's let's let's continue for a second so we
[00:34:42]  we extend our our our html element and then we add a connected callback and this will kind of tell us if we're connected to the dom so for now we
[00:34:52] 're just going to go alive okay so this will tell us if connected to the dom and then we're going to register it so there's this custom elements registry where you
[00:35:03]  can define a component and give it a name like my element and let's pass it my element and now this is a fun thing because you can only run and define one element
[00:35:20]  once like if code sandbox does a hot reloading it's gonna it's gonna break because it's like you've already defined it um some libraries have tricks around it where
[00:35:31]  they actually like increment stuff and then convert it on the other side but this is just one of those funny things where tooling and web component spec don't really play nicely together okay
[00:35:42]  so let's uh let's just i defined it as my element let's just put my element in here now and if everything went right let's save this if everything goes right
[00:35:55]  here oh no maybe i gotta save this too we should be seeing a console law oh it's not connected it's connected i refresh it again there we go we're live
[00:36:08]  okay proof let's make the sorry let me make my code editor a little bit larger although we'll be dancing around a bit so this is this is the basic idea like you
[00:36:17]  can see how this is kind of powerful because you can just make whatever you want and then connect it like like like let's let's do something a little bit more visual
[00:36:27]  here because um essentially and if i remember this correctly this okay refresh it because hmr is not going to work yeah so we have active store element here so now we can do
[00:36:40]  something like this dot append child and we can do something like uh what document dot create element um we want to create we want to create um actually let's create let's
[00:36:56]  create um fine i'm gonna pull this out and just write some dom stuff const l equals whatever and then we can go l dot text content so much easier with gs
[00:37:18] x or sorry tech content equals hello and let's append our l and if everything goes right and we refresh this we now have our download so this is kind of cool so you
[00:37:30]  can you can start seeing how this resembles a component right um so and we we can do some other stuff in here like like what if we wanted um this this thing to
[00:37:43]  update right we could do something like um set interval so and we can do something like this and we can do something like this let's put it involved that um and
[00:38:13]  then what are we gonna do we do count plus plus plus plus plus plus plus yeah and now we have a simple counter so you know this is pretty easy if you look
[00:38:41]  at it it actually wasn't that much code um it acts you know like from from this perspective you know this connected callback at least only runs once but essentially this and you
[00:38:54]  might be like oh i need to clear this because if someone removes it so you might go like this uh handle whatever equals this and then you can make a this disconnected
[00:39:09]  callback and we can go this dot handle and go what was it clear interval so refresh we now have a a component and like any kind of component it's kind of cool
[00:39:32]  we can just make a couple of them why not and you know now now now and actually now and now we have working components so this isn't this isn't this is
[00:39:49]  actually kind of kind of nice to have a primitive that just lets you do this right like there's a few more features here and i'm probably not going to remember them all
[00:39:58]  exactly but uh one of the things that there is is there is um there's an attribute changed callback let me see after let's go look it up here sorry i
[00:40:08] 'm a little bit rusty i've yeah attribute change class did i get that right um so we can do something like this changed callback and actually i don't even care
[00:40:30]  about the attribute change callback right now i mean we can i'm getting ahead of myself um we we can also what i was trying to get at is we can also go
[00:40:38]  we can also basically use the dom apis to go like let's get an attribute let's call and let's just force it to a string and if this works properly
[00:40:54]  or zero let's make sure we do this right yeah i don't know if that's actually good okay and then let's go here and if i did this right i
[00:41:09]  should be able to initialize one of these to 20 or something no okay the probably the reason for that is twofold um essentially there's a timing for upgrades and you
[00:41:27]  also have to set certain attributes as um as um what do we call it all observed there's like an observed attribute array i'm i'm i'm like a little bit surprised
[00:41:40]  i'm not getting it here to be fair but we we can probably get around that i'm not too focused on this but the the the point is essentially you have the
[00:41:52]  dom element if people you know pass stuff to it yeah so i i i do actually have to observe it for for that for for that works like observe observe attribute because i know
[00:42:05]  i need it for the change but i thought that i wouldn't need it for for that but yeah observe attributes um constructor super observed okay let's add it to the list
[00:42:46]  um um count fresh yeah i i my gut feeling is it's upgrade time oh right of course thank you you're right this silly me i'm not used to using glasses
[00:43:08]  anymore there you go see now we have one that's 20. so it's the opposite one i was expecting i don't know okay um but we can see one is
[00:43:31]  set to 20 and one is not and basically we have full access the other one is set to the dom to do this okay oh man yeah i mean the the the the
[00:43:41]  authoring experience for the for these um does differ i i just wanted to show the basics of some of these the underlying technology i want to show that hopefully that it's actually
[00:43:53]  very easy to to actually author these things this is the custom elements spec right um obviously writing all these dom operations um can be a bit of a pain so there's
[00:44:07]  there's there's there's there's there's there's a few other things that you find very common um like template elements um template elements are great we use them in solid
[00:44:15]  all the time right you can either instantiate them right in here and originally it was very common for web component definitions to literally have like a template element in the dom because it
[00:44:25] 's inert but you can also just be like um you know const t equals what a document dot create template i think because is it element template no i some of these some
[00:44:43]  apis document some of these apis are elements and some of them are the thing i think template is i think template no maybe not maybe maybe it is element template then
[00:45:00]  you can do stuff like t dot um inner html equals some thing you know like div and we can we can build something really rich you know like put a bunch of
[00:45:17]  dips in inside each other i'm just trying to make some elements here um and if we take our t instead of doing what i'm doing here we could go we could
[00:45:30]  do something like um instead of creating our element like this we could go const well temp full template equals t dot content dot first child dot clone node um i mean i'm
[00:45:54]  not and um with a deep true yeah and then now we have our template and then i think what did i say was it's like template let's make the header to a
[00:46:06]  template dot first child i think is what i'm looking for um and let's see if that works do we have a l's not defined where am i using owl open
[00:46:17]  all right so yeah um uh temple let's do that is that done there you go so hi and then now the count comes in and we have our headers doing the thing so
[00:46:34]  uh yeah good question um this this this you're right there's there's probably i don't need to do it when i went to first child because i knew that um
[00:46:48]  it was just the first child and if i did clone the content to get a document fragment and it's fine but you know there's something really funny here that people don
[00:47:00] 't realize inserting document fragments um is slower than just inserting dom nodes so i do this in solid too i actually step in and grab the element and clone the element and insert it
[00:47:12]  because it's actually faster than using document fragments um it's a small performance thing i i i have a habit of doing this even even if it makes the explanation more complicated i
[00:47:22]  should have just done it the traditional way people do it but over time you learn these tricks of how to make things more performant um the this is this is sort of
[00:47:29]  the thing though right this is why you use frameworks because not everyone knows that right um the you know over time i've learned like dozens of little tricks to improve performance yeah yeah
[00:47:45]  and yeah do you know how i learned this it's funny because most people tell you use a document framework because at a certain time that was true i was in check it out
[00:47:54]  js framework benchmark that's the benchmark in the world right um they have the vanilla implementation um in here and you know people look at all the framework implementations but vanilla is
[00:48:07]  incredibly telling right and if i find the original vanilla one sorry you'll see which i love is you'll see a bunch of comments about all the different things that people have tried
[00:48:19]  at different points and and to test them and decide if this was faster like oh this is faster but because they're that cheating and one of the fun ones is all the
[00:48:29]  different ways to remove um content there's like a there's like so many different ways to remove content and we measured them all to see what's the fastest way to clear dom
[00:48:38]  notes but another one swapping append is using a document fragment is slower see and they actually they actually show the code they use to do the document fragment and showed how it
[00:48:53] 's slower so just kind of there's some the comments in here are incredibly useful when i was first starting on performance i've learned a few more tricks since then um and i
[00:49:03]  actually can i i helped this along because there was this vanilla one and then i actually vanilla js one here it was my implementation um it's funny sometimes vanilla is faster sometimes vanilla
[00:49:16]  js is faster because there's a difference between the way it handles memory but in ends code size but in any case um um this benchmark was really great at seeing all sorts
[00:49:27]  of basic table operations for performance okay so let's continue on um so okay this is great so now you've seen the template now now now you see this and if if
[00:49:40]  we were to look at this and we inspect it you're gonna see um we just have uh why does this look so weird you know do you know do you know what it
[00:49:53]  is why are the script tags inside the element and the elements inside the element i've got some crazy inception thing going on here did i do you know what it is i
[00:50:08]  don't i wonder if this is what it is i'm trying to remember if this was actually a thing anymore at one point i've been using jsx so long that i
[00:50:21]  can't even remember but i think i think i think you have to close it like this let me see no that's not what it is why why do we have crazy
[00:50:33]  inception going on my element inside my element this is this is kind of crazy isn't it this is why they're out of they're out of order but it's because the
[00:50:49]  elements inside the other element somehow um which is quite odd and unusual um i'm going to admit i i oh yeah that's that fixed it sorry it took a while though
[00:51:02]  yeah yeah yeah you have to actually close custom elements like this so see now it's now it's proper now it's in the right order i'm glad i fixed this at
[00:51:09]  this point so now you can see that the big ones first so yes remember that you can't like just use the the simple close you actually have to do this when you
[00:51:18] 're using custom elements oh yeah thanks but yeah um in any case that that is the problem and we have solved it so let's let's move on a bit more so
[00:51:42]  we i've shown off templates and i've shown off custom elements so you can start seeing how you have the tools you need right you can easily clone some html elements
[00:51:54]  and then you can easily do a bunch of manual dom manipulations and then the last piece was usually they don't just do this what you do is you the reason we
[00:52:06]  were looking at this is you could see that there are there's a div and there's stuff inside basically inside our um our element but if we wanted to say isolate something
[00:52:26]  like uh style wise there's a there's another concept called the shadow dom and the way the shadow dom works is i think it's shadow root append like let me let me
[00:52:36]  look at this shadow element dot shadow root yes element dot attach shadow yes okay okay let's do this so we will we'll add this and this dot element this dot attach
[00:52:57]  shadow and then this dot shadow root about append child let's see if this works i think i got that right oh okay what's the argument closed this this is this is
[00:53:17]  another one of those fun things that happen because it's people not agreeing on specs um there's open shadow roots and close shadow roots where's the argument for it attached shadow
[00:53:29]  yeah and depending i'm in it mode open close yes so is is it just straight give me an example is it just straight mode yeah it's an object that's what
[00:53:50]  i found okay mode attach there's our mode open there we go now this is still behaving the same and um sorry i'm just catching up with some comments the h1 isn
[00:54:15] 't closed either oh man i'm i'm just thank you okay so we have added a shadow a shadow root and you'll notice something a little different now see there is
[00:54:30]  a shadow root and it's open um and in this one too there's a shadow root so you might be saying what's the big deal about these shadow roots um well they
[00:54:40]  allow for style isolation and they allow for slotting and um what i mean by that i can probably show here in a second but um let's see sorry the hmr
[00:54:55]  not working is like is is lots of fun this is why you use a framework um with with with your web components so you don't have to deal with this stuff all right
[00:55:08]  uh where do i want to go next yes um so we have it we see our shadow roots and what's cool about shadow roots is they provide the slotting mechanism and
[00:55:20]  the let's see here let's add a slot here and when you add a slot there's name slots i'm not going to get too into this for the details but
[00:55:35]  know that what slot does is it tells it tells it where to kind of like drop in the children so if if if if our second element has like um you know this
[00:55:53]  if i did this right yeah um you'll you'll see that we now are displaying holla and it's going to be inside but it's going to be transcluded by
[00:56:05]  the slot so let's let's look at what's going on here in our in our in our element so this is the kind of cool thing that i like about about
[00:56:15]  the way this works is holla is out here and then which is actually it is literally the child of this element and then the shadow root is sort of this hidden thing and
[00:56:30]  then you see inside the shadow root you see the template and then inside you'll see a slot and the slot will be like point me to where what's getting injected here
[00:56:39]  and guess what it's hollow so when you click on that it tells you that hall is what's getting injected here so it ends up showing up in the in the kind of
[00:56:46]  combined dom view right here after the count that's going up in our h1 but from like the outside perspective it's just hollow and if we want to actually display this
[00:56:59]  in a way that you can kind of picture it um i'm going to change this to closed for a second um and enclosed oh is it because never mind i'm not gonna
[00:57:23]  it's because it i can't you know i never use clothes so i don't technically i guess you can't you can't act the the shadow root in the same
[00:57:33]  way when you use close let's not do it but my point is you the shadow root could be completely obscured from the end user's um view essentially like you you don
[00:57:44] 't actually see it when you look in into the dev tools and you just see my element holla so it would look like some native element that you've used before and
[00:57:51]  then even though it's actually getting wrapped with this nice wrapper and um the kind of superpower here is if we inside our um i'm just gonna put inside our div because it
[00:58:04]  makes my life easier you know not worrying about fragments and stuff um we we we can we can we can go we can add a style element and um let me be quiet
[00:58:18]  and we can do something like um whatever let's just just just do what does this work color um go ahead i'm trying to write it in a one-liner is so
[00:58:34]  awkward i guess i don't need to because i have template literals um what do we want to want to do um let's add a class what do we want to
[00:58:53]  do um can we just make all let's make all h1s let's make let's let's make h1 um color red or something css is probably terrible
[00:59:10]  okay what did i do oh i moved the let's put the style in a different location because it's affecting my walk see this let's just put it let's put
[00:59:25]  it here okay so now our h1s are red but what i wanted to show what's cool about this is that if this holla was also in an h1
[00:59:38]  coming in over here it's not red so what you you you have basically style isolation um and it's obviously it's kind of obvious if this was like out here which is
[00:59:58]  like if i was like an h1 here that was like my app it's kind of obvious that that would might not be affected here but even transcluded uh code sandbox
[01:00:10]  doesn't recognize html changes until okay but but essentially even even stuff that's passed into the chip into the child um like into the component is still considered part of
[01:00:26]  the parent scope you have to use special slotted styles in order to style that there's a whole song and dance you're going to play around this um but essentially you get
[01:00:35]  style isolation so your internal template can be styled and have it not actually affect anything else on the page okay so i'm going to catch up on the chat here for a
[01:00:45]  second because i haven't i haven't been listening to you guys much as i do my explanation let's see if there's any questions yeah so we did find out luckily
[01:00:55]  that was because of not doing explicit closing tags um yeah that's awesome um yeah sorry yeah the evan thing was really cool though okay okay yeah yeah that that would probably
[01:01:26]  be easier yeah so um and in any case my point is you guys can can see this the style isolation and working so these are the three pieces and you can see the slot
[01:01:40] ting too so slotting style isolation 20. you have a whole ability to to do some really powerful stuff here without bringing in any library or anything so like i mean you
[01:01:52]  can start to see where this doesn't scale either though because like like you got to know your dom operations you got to be pretty proficient with with vanilla js to do this
[01:02:04]  but for simple small components like we just authored you know my element and now we can just ship up this javascript file essentially and pass it to someone and they
[01:02:16]  can execute it from a cdn or script tag and you've now really ported up this kind of completely isolated bit of code um so it's really cool for like
[01:02:25]  widgets and stuff um i've seen web components use actually lots as a way of almost embedding iframes on like third party apps you know like the little like floating
[01:02:35]  discord widgets and stuff it fits really well for this but uh obviously it doesn't stop it doesn't stop here yes use stencil yes which is where i'm getting to um because
[01:02:46]  as cool as this is it's still not very practical right you still need a framework um generally speaking and like web components on there's there's a there's a spec
[01:03:00]  that you can actually do declarative shadow doms or shadow roots so you don't have to attach them this way you can actually put them in the html which is
[01:03:06]  really cool because now you can do um you can do ssr write them right because generally speaking if you ssr but there's still like some challenges there because if
[01:03:16]  you ssr this in an environment where you don't have the dom how does it know to render this stuff you need to be able to understand what these classes mean
[01:03:28]  and do that so you basically need the dom on the server unless you have like different ways to simulate the dom or some different component abstraction if you if you if you want to
[01:03:40]  do ssrs it's really tricky here because the dom on the server is like a really really slow way to do ssr like really really slow i started there
[01:03:48]  with solid because i was like oh sweet and then i was like god i'm like 10 times slower than react what am i doing wrong um so you know i worked on some
[01:03:59]  stuff but i could i i could i couldn't even get up to react server rendering speed which is pretty sad so um yeah i i don't recommend doing the dom on the
[01:04:08]  server and i'm pretty sure libraries like lit that are looking into ssr on the server aren't actually bringing the dom to the server they're just doing smart stuff
[01:04:16]  where they can take their component abstraction and know how to render it which again leads you to libraries because then there is no universal way to ssr web components if you actually
[01:04:24]  want to web uh render their their content not just like this like don't get me wrong this is super powerful the server render picture you got a rails app that's you know
[01:04:34]  mostly static and then you can kind of slide in these pieces suddenly you have this incredible ability to to add like islands more or less of client rendered code it works really easily
[01:04:47]  um from that side but hydration is a challenge um because if you want to actually render the internal on the servers you need basically a framework in javascript to do it for
[01:04:56]  you so in a sense it's no different than using any other framework except for the standard interrupt so yeah let's talk about some of those libraries i think i think this
[01:05:05]  is sort of an important point and to continue so we've done the basics let's let's look at a bunch of ways to to build what to to build this stuff and
[01:05:17]  um it really started back in the day um with a library called polymer it's now been deprecated but it came up from google and um well i i guess i
[01:05:30]  don't have a ton of nice things to say about polymer because it was like the most bloated verbose looking framework i've ever seen but it was very close to the
[01:05:38]  spec and um we we talked about mdv the the other day about like a spec in terms of like how to they want to bring model was it model display view or
[01:05:49]  something to the browser um polymer kind of took that spec seriously and actually made its template look like that so they just took classes except you extended their special polymer element and then
[01:06:02]  you you'd have like a template definition and then you define properties and then you you could still basically do the all the other callbacks with connected disconnected and attribute changes and they
[01:06:13]  introduced this kind of data binding language see like the double square braces there's a whole bunch of different ones you have like you can use parentheses for certain things and square braces
[01:06:21]  and one means one thing or two needs something they invented a whole binding language about one way two way up way down way red fish blue fish you know like but um essentially this
[01:06:33]  was kind of the start uh of it and you have to give some credit here at this point web components weren't in the browser so like they they worked on a ton of
[01:06:43]  poly fills to get the stuff working um just wanted to kind of mention this one for history's sake just because it's not really um used as much anymore um i use
[01:06:53]  something yeah i mean it's what we had right um i i got into web components around this time period too um really early like 2013 2004 2014 i wrote my first web component
[01:07:08]  library um i don't know if people know this web i was very pro web components for a long time maybe almost five years so um so anyways um so this this is
[01:07:23]  polymer and then for me what kind of got me excited about web components was this library called skate and skate um i don't know if it's used as much anymore but what
[01:07:34]  skate did was they're like you can bring any framework you already use because polymer was like inventing this new crazy verbose thing and i guess they were trying to make
[01:07:44]  it like the spec or whatever but like what if you just want to use preact or react or whatever templating language that was around and i i tried to make a render
[01:07:56]  with solid and i was like oh crap this does this isn't this isn't going to work for me because render function they assumed that their update model would call the render
[01:08:05]  function every time essentially and most frameworks at this time did they the thinking was like oh you know do trigger an update tell the element to re-render and as you guys know
[01:08:17]  um in reactive libraries they never they should like you you never re-render so this was really awkward which led me to creating my own um library called um uh component uh
[01:08:29]  component register um named actually after um my favorite library at the time um open source library document register which is a polyfill from uh andrea giamarchi which adds custom
[01:08:44]  elements to the browser so i i looked at document register and i made component register as sort of a um like a universal web framework and i made adapters for preact
[01:08:55]  react um uh knockout which i used up my work by previous company for like six or seven years and um and solid eventually which is what solid elements based off of so um
[01:09:08]  it was really cool though that the web components could serve as containers for any kind of renderer right and this was really important to me when i started working on solid because
[01:09:16]  i was like oh sweet i don't need components i i basically designed solid without components because i assumed that i would use custom elements and web components that was like a big part
[01:09:25]  of the early design i didn't really worry about having components i was just like we got reactivity we got jsx like this is pretty sweet um we we don't really
[01:09:34]  need components you know separation of um design concerns right we have the reactive library we have the jsx which is my in dom expressions which is my flavor of the day i
[01:09:49]  was thinking i wasn't even sure if i was gonna stay with jsx and our container is web components i basically decided that wrapping it all together it's the same thing was
[01:10:00]  was limiting for the long term i wanted to build for modularity at my company so that we could switch out whatever uh thing we want one new state wanted new containers wanted
[01:10:09]  new view rendering we could under the web component containers we could essentially just swap out our paradigm how we felt and it would all play together perfectly on this common interface that was my
[01:10:21]  dream there's several problems with that dream like humongous problems with that dream but i that was my dream yeah i i mean specifically knockout had this problem too i
[01:10:38]  just i i couldn't we don't like there's no like re-render call and all these frameworks were basically universal frameworks are built on this idea that you'd re-
[01:10:48] render yeah lit had kind of come out at this time too so tag template literals are starting to be a thing so between vdom libraries and tag template literal libraries which
[01:10:58]  are very common as you'll see in web components because they don't require build stuff um we basically uh like everyone just assumed that rendering worked a certain way and it was basically
[01:11:09]  it was a way that was incompatible with with knockout js or solid so i i did not have a good time with framework agnostic solutions i still don't
[01:11:17]  actually uh justin was working on this like universal spec for hooks and stuff and web components and i looked at it and i'm like yeah it won't work with solid
[01:11:27]  so sorry um these you know it's just kind of the way it goes or knockout or any other fine-grained things but yes yeah exactly the problem is the
[01:11:39]  top-down rendering these things all assume top-down rendering so anyways skate was really cool i made my own version this is just more historical stuff so you guys can get
[01:11:50]  a little bit more context of what i'm talking about um obviously the big ones came out later and i mentioned late lit ht um lit html which is kind of
[01:12:01]  became lit element and lit ultimately um we'll get back to that because it's a good place to look at code but also stencil is a huge one because stencil brought js
[01:12:11] x to it with a with a vdom and it's so it's it's about as close as you can get to um like react kind of but i mean we're
[01:12:22]  still talking class components and stuff right that was the other thing with with my approach um i didn't like class components even back in 2013 or 14 and again the even though
[01:12:38]  everyone's moving to classes at that point and this was actually really really simple um i'd been using classes in knockout js since 2010 essentially and the problem like we were having
[01:12:52]  was this is before we had like what it called public properties you know the thing where you can just like top level things and not put them in the constructor but essentially if
[01:13:00]  you're using fine grain reactivity in a class component the render function has no meaning because it doesn't get recalled so essentially all your code goes in the constructor because you're
[01:13:12]  only running it once so you have the constructor with like 90 your code and then you have a couple of entandlers that are attached that you have to bind yourself anyways once
[01:13:20]  you leave knockout knockout had a fat arrow that auto bind but essentially the only benefit of the classes i mean there was there just wasn't because all the code was
[01:13:32]  in the constructor and then you had to manually bind anything you chose not to be in the constructor so even sometimes you're like okay well let's not put them out there let
[01:13:40] 's just put them in the constructor and like literally we were looking at a class that was a single function so um yeah i i haven't been really hot on classes for
[01:13:50]  chicago it's been like eight or nine years now um but again it's biased because i was already using hook like patterns since 2010 so you can kind of see why but
[01:14:00]  that being said you know obviously it makes sense web component spec is off that but that's why my library that i built for universal custom elements was based off passing a function
[01:14:10]  and then all the life cycles would be handled behind the scenes and it and that function would pass in a couple hooks that you could essentially use and that's been my pattern for
[01:14:18]  web components since like for years but any in any case i just this is this is essentially like you can see how this experience is very much um like um react except with slots
[01:14:31]  and stuff so this is this has stencil is great tooling um it has pretty good performance i added it to the js framework benchmark at one point and it um and it has
[01:14:40]  yeah the tooling is really important because it's like great htmr good building and and it all compiles and it's great like it's they really thought about how
[01:14:50]  to package this up in a way that could be usable in many apps how to make sure you only have a single copy of the library and all that stuff stencil kind of takes
[01:14:57]  care of everything for you so it's really cool um yeah yeah yeah i would sometimes use class in react because i'm too annoyed with writing these callback and use memo
[01:15:13]  again and again yeah for sure you you know there is a solution for that where you you don't have to use use callback or use ref but it doesn't involve anything
[01:15:25]  that starts with an r so anyway um where was i okay so stencil's cool um definitely one of my favorite options here although honestly lit has really come into its own as
[01:15:41]  it is probably the de facto web component solution um they use classes with decorators which you know it's not my favorite pattern in the world but you've seen with stuff like
[01:15:54]  pro you can see where the specs are coming in it's like they all the class specs are really benefiting lit and they just make it look nicer you know like so um
[01:16:03]  i actually really like their playground um or and their tutorials they have a really great setup where you like they have these simple things you just click solve and reset and you can go
[01:16:16]  through step by step i've seen it a couple times before but um definitely a really good pattern um but what i actually like about their playground is they actually show you the
[01:16:28]  index html so you can see like the component you're building here so here's simple greeting they pass name world and then this is our example we made right a moment
[01:16:38]  ago essentially except the counter they they basically let you set the styles nicely here you can just expose the static styles and then you don't have to make put in your template
[01:16:50]  and then your template you just use this tag template literal and you can just put the name in you know like you can put you can interpolate it and then you can
[01:16:59]  set you know quote reactive properties by just putting them on a decorator and ta-da you know this is definitely a lot nicer than what i've shown you all a minute
[01:17:08]  ago you can see though that it still kind of looks like it but we we've come a long way um for building great experiences you guys are great yeah lit lit is
[01:17:22]  lit is really nice and yeah no i um i i've used lit a few times for some things i when when i honestly at my last company it was kind of before solid
[01:17:35]  was ready to go prime time we had the choice between our choice actually was between lit and um preact at the end we narrowed everything down and ultimately what pushed me
[01:17:49]  to preact was that they they got hooks and they were getting like suspense and stuff and i was like okay no that that that was the thing i i i just really liked
[01:17:59]  the the the model there and it was closer for our devs who are used to using knockout and ultimately it was a good move because we actually moved from preact to
[01:18:09]  react eventually because of issues we were hitting and it was a single page app so that behind the login so it didn't really matter very much like the react tax wasn't
[01:18:18]  as big but i still to this day um very much like lit for in in this kind of custom element space even you know if i can swallow this kind of stuff to be
[01:18:28]  fair let me see here uh component register my my my old library here that i use for solid element if i remember correctly um oh i thought i had a lit one here maybe
[01:18:44]  i didn't bother yeah knockout react preact solid okay maybe i didn't have a lit one i was pretty sure i made it made a lit specific renderer for
[01:18:52]  here too because um always like lit anyway um yeah this this is cool and in this tutorial here you can you can see better versions of what we were talking about but what i
[01:19:03]  love about the shadow dom kind of abstraction here where you can see like again you can see the stuff getting passed in but then it gets slotted inside the shadow root in
[01:19:16]  like a different location and it reveals one two and three like you can kind of see this this shadowing and mechanism um and learning about it it's funny it had a big
[01:19:30]  impact on on on my understanding of things later because this way of using projections and the fact that these projections belong to the parent like we showed previously is a big deal because
[01:19:42]  um they get rendered eagerly like you can't use this stuff for control flow do you know what i mean like like this always renders like if if you if you wrapped
[01:19:55]  an if statement around the slot even though you're not showing it like it will be hidden it will still be rendered already and um so for for lit and for these kind
[01:20:07]  of libraries you have to use template elements and like kind of play with them there polymer actually put data bindings on template elements and that was their way of doing those kind of
[01:20:16]  directives lit has some better patterns for this um but i just you can't use slots um for control flow essentially um which which is unfortunate because you can't you can
[01:20:32] 't basically control flow is not composable which everyone who knows me knows i'm big on composition but that that aside um this looking and thinking um actually got me pretty uh ex
[01:20:47]  uh made a lot easier to understand future topics like if you're familiar with islands from astro and partial hydration it works the same way as the shadow dom because essentially stuff
[01:21:00]  and same with quick actually stuff that is passed into the parent um doesn't belong to the uh oh i didn't turn off discord sorry guys um stuff you you pass into the
[01:21:15]  parent doesn't passing from the parent doesn't belong to the child in a sense like it can't actually control whether it's rendered or not and for that reason it can
[01:21:23]  still be considered static even though it's being in in the child so this is the way when you have server components i know i'm kind of pulling things or partial hydration that
[01:21:34]  you can have static content showing inside a child elements island and still not require um to hydrate it sorry probably an illusion that most of you aren't connecting the dots too
[01:21:46]  but just trust me when i say that partial hydration and the shadow dom actually follow the the exact same rules hey patrick um so yeah this is this is cool and i
[01:22:13]  i like that we can kind of play around and see this i i actually i actually had a lot of fun with this kind of aspect um one of the fun things that
[01:22:23]  i get to show when i show them web components is i all my earliest projects were based on web components i'm a huge huge fan and my my earliest this this is my
[01:22:35]  earliest nested router i made um nested routing is kind of as i've mentioned gotten really popular again because of remix but um i built this router back in 2014 built off
[01:22:45]  uh ember router and what what's what's kind of cool about it is you you set up all your routes and this dsl is ugly as hell but who cares
[01:22:54]  and um actually this one even has async transitions and hooks and stuff i copied a lot of stuff remember but it uses slots as the outlets so i i really like this from
[01:23:05]  a from a design spectrum spectrum because all the pages showed up top level because of the like the slot and slot kind of mechanism so you you literally you go see a component
[01:23:18]  look in its child and you'd see the child nested section and look at its child you see the child nested second it would get slotted in because of the shadow
[01:23:26]  dom but from the light dom perspective you just saw like when you looked and viewed the source you just saw all the nested sections like one in in like you like top
[01:23:38]  level you could cut all the crap out and just go straight to the the nested the nested route section because it was just it was just they were all direct descendants of
[01:23:47]  each other in the light dom so to speak so you could picture like if you had the you know the twitter example that i always use you know where you have the side
[01:23:55] bar and then you have this section and then you have the tabs it would actually be like app user tweets in the html hierarchically and all the other stuff would be
[01:24:06]  hidden behind different shadow roots but you could just jump straight to the tweets thing by just opening up the parent i i honestly really really like that about that router um no one uses
[01:24:18]  this router but i i did use on some of the earliest solid demos like i have a web component version of hacker news um and it makes use of this router so um
[01:24:28]  11 stars there you go only used at my company and only only used by me so um but yeah i've been one of my oldest projects yeah yeah okay so we've got
[01:24:42]  some stuff in the chat yeah already using light yeah that's great we talked about that if you're using web component framework and the end result is just some js and h
[01:24:51] tml what's the benefit over server rendered html and some lean js hydration coded well i i mean client rendering always is going to take a tax over not client rendering
[01:24:59]  my whole point is you can do you do the exact same stuff like lit is working on ssr and hydration because they have the tools now they have declarative shadow dom
[01:25:08]  the tricky part is that solution is going to be lit specific they're talking about how they can generalize it but the as we talked about earlier if they're not going to
[01:25:15]  bring the dom to the server which is incredibly slow they're going to basically build their own special way and other web component libraries might be able to leverage that and use it
[01:25:25]  too but essentially there's no the only standards exist in the browser there's no standards for server rendering like there's a gap here do you know what i mean like and that
[01:25:34]  alone besides the authoring experience at the beginning basically delegates web components to using frameworks which is we're going to talk about this more when we talk about the controversial part of
[01:25:44]  web components but you can you can kind of see that like using the platform doesn't escape you from using frameworks but it's just telling you perhaps to use different frameworks okay so
[01:26:00]  let's let's let's continue on um yeah so uh i i i i i definitely um super into like some of the the the the the mechanisms here right so um
[01:26:17]  yeah what lit has a cool a development experience i i solid also has our own custom element um thing so why don't we look at that for a moment um where is it
[01:26:33]  uh yeah solid counter element you know i love my counters right so in solid you can also make uh custom elements so let's uh let's uh let's let's look
[01:26:44]  at that and this is how custom elements work in solid um essentially oh this is typescript so there's like a bunch of ugly stuff in here sorry about that for people who
[01:26:57]  don't care about the typescript but essentially um what am i doing here oh this is a weird example it's like setting the count from the outside i don't know
[01:27:13]  what this example is doing that's weird because it's an interval that's setting the count oh okay yeah yeah it's synchronizing props whatever okay i don't think we
[01:27:29]  we we we this is so they can be dynamic from the outside i'm gonna for our fund here today i'm just gonna just gonna do this props account not an n why
[01:27:44]  is it not an n about the value why did i call it value okay who cares so anyway what you'll notice here for solid element is this is literally just a solid
[01:28:02]  component essentially see component for type script and all that stuff so you you just write a solid component our function component and then you pass it to our custom element thing where you define
[01:28:12]  it which define its uh set what the props are and the default crop values and then pass it and essentially that's how you do it so you can basically take any solid
[01:28:22]  component and literally pass it to this custom element um initializer and then you have a web component so you don't have to do anything really fancy with solid to use it as
[01:28:32]  a web component um it this is there's some tricks to like do no shadow dom and stuff like that but essentially this has shadow dom all built in see there's a shadow
[01:28:42]  root and our counter works and you just use gsx and stuff like you wanted to this this is honestly how i thought everyone would use solid when i first created it
[01:28:50]  um so you're catching up on chat here yeah yeah the thing is though it's also a matter of responsibility going back on the ssr topic is it the browser
[01:29:09]  are they responsible for standards on a back end like node or like they have no jurisdiction right there might be conventions there might be libraries and stuff they get popular but there's no
[01:29:25]  jurisdiction there on the browser they have complete jurisdiction on the server they do not yeah i know i i make jabs at typescript all the time because i always work in
[01:29:38]  typescript it's part of my fun um every time i look at it i i was a coffee script developer just so you know like every time i look at i'm just
[01:29:47]  like wow like i just see coffee script and then it was and it's like it's like how to get like reduce code by 80 um typescript is like the furthest
[01:29:57]  extreme on the other side i mean i mean i'm sure there's worse languages i fought typescript for you and it it has one with me i'm not going to
[01:30:05]  pretend like i like it but it the value is too high that's a whole other topic but yeah authoring components in solid element is super easy and lit my um sorry component
[01:30:19]  register all works like this essentially it's i mean if your thing has to use classes you do but i i just made it really easy to basically kind of do these kind
[01:30:31]  of wrappers as functions that was that was my whole goal i want to make a functional component um representation for for every framework as web components so that that's that was the
[01:30:43]  whole thing but yeah so i don't know if there's anything worth dwelling here yes but it doesn't solve ssr like it gives you a tool you can use
[01:30:55]  but the server still needs to know how to actually render it because like you like you like the the html can show declarative shadow things you can add them anywhere like
[01:31:08]  you can literally you don't need to use custom elements you can go like div declarative but the server needs to know what a component is right essentially like html
[01:31:18]  doesn't have components that the browser does with with custom elements but like an html template like when you use pug or some handlebars you kind of have a way of
[01:31:27]  modularizing stuff and they introduce their own kind of component thing when you use a javascript framework they have their own components but html doesn't like the dom
[01:31:35]  has custom elements that has components but html does not like declarative shadow roots thing and there's a declarative component thing they're working on too so maybe we'll
[01:31:44]  get there but it creates this kind of like split there like they have the tools you mean if you have lit and declared a shadow works you can do ssr and hydration
[01:31:53]  obviously right but like you you have lit like you still need a library of framework to do SSR. It's just the same thing, right? Um, but you
[01:32:07] , you get it. Like, I'm not saying there aren't SSR solutions that don't involve bringing the Dom onto the server. I'm just saying they're specific
[01:32:13] . They're not the standard. They're not the platform, right? Like they're, they're, they're lit or they're stencil or whatever. Right? Like
[01:32:22]  that, that's, that's essentially the, the kind of split there. So, um, yeah, I'm going to move on from solid element. Cause honestly
[01:32:31] , there isn't much here. Um, one thing, if you are interested in more libraries and understanding this stuff, there's this great thing, which is like, what
[01:32:38]  it's called, all the ways to build web, to build web components and they updated every few months and these guys are actually responsible web components.dev. If you've
[01:32:50]  never seen that, uh, let me open that up. Which is this great web component specific sandbox, essentially, where, um, you can just start a project in
[01:33:02] , in any library that you want. Right. They have like tons of templates. They have, um, let, you know, preact solids in here too, um
[01:33:11] , uh, somewhere there. Um, but yeah, you, you, you, you, you, you, you can basically just choose any number of libraries and there
[01:33:22] 's no shortage. Trust me that the biggest thing that web components did for the web, I think was make it easier to write frameworks. It's kind of what inspired me
[01:33:30]  to write a JavaScript framework. Right. Um, it's kind of funny how that works. The more you standardize things and get people's tools, the more opportunity you
[01:33:37]  have for fracturing. So like, like, I, I, I swear people complain about being too many JavaScript frameworks, web components are probably the biggest contributor to being
[01:33:45]  too many JavaScript frameworks. Um, it's like one gets born every day. Cause it's so easy. We already saw it. You can just like write a framework by
[01:33:52]  just making a nice wrapper around those DOM APIs. It makes it so easy. Um, so it, it, it, it's, it's kind of interesting. And
[01:34:00]  as I said, you, you need the library framework if you want the, the full experience. So, you know, it kind of all ties together and makes sense
[01:34:06] . So they, they are very kind of powerful in that. But what I love about this, um, sorry, where I was getting to is these guys produce regular comparisons
[01:34:14] . So if you want to understand the difference between syntax, you just switch through all the different libraries and they'll show you what a simple counter looks like. This is absolutely
[01:34:23]  great. And it's not just what the syntax is. They'll tell you about size, the bundle size, like a one component, like obviously HQ elements, the
[01:34:33]  smallest, but you stuff like prism, which is super small, svelte, super, super small. You know, you'll find solid somewhere around here in the
[01:34:40]  mid range. And then you'll, you, you know, which very similar, you know, where's the lit kind of preact with classes, skate, um,
[01:34:50]  haunted lit up here stencil, a little bit bigger than still there's yeah. Um, and then what do we got keep on going, um, you'll see other
[01:35:01]  ones, lightning, um, view, view three, you know, react hook one, which is huge. And then, you know, can do, yes, I don
[01:35:10] 't know, but you said size of one. And, but they also do cool things like size of 30. So you can see that some things don't, we saw
[01:35:17]  prism and svelte up here before, but they, they basically compile away most of the runtime. Um, which means that when you have 30 components and they
[01:35:25] 're, when I say compile away, I mean, they compile it into the components, you will find svelte and, uh, prism on this end of the
[01:35:32]  spectrum, because they're almost pure library. Um, like the component, if you add more, if you have lots of components, you're paying the library cost over and
[01:35:40]  over and over again. Yeah. So it's right here, um, lit. So solids up here and then, you know, some, some really cool, small
[01:35:48]  ones, like Atomico Swiss, um, um, Octavino, I don't know, like really small, but they don't even just do size. They
[01:35:56]  do performance. Um, so, you know, you can see a bunch of this prism compiler is genius. I've talked about prison before Ben has done some of them
[01:36:05] , his, his work with compilers. Everyone should pay attention to it's, it's brilliant. Um, he's, he's tried to tackle some really hard
[01:36:12]  problems in the past. They didn't always work out for him, but, uh, he's, he's, he's promised a new framework or a new thing
[01:36:17]  that he's working on. I can't wait to see it. Um, so this was just like, I think him just playing with like, well, what can I
[01:36:23]  do with web components? And he tops there, the rest of the stuff is all within the same range. Sol and Svelte are basically the same speed for web components
[01:36:30] . Um, we kind of play around, uh, in terms of load and performance. And then you have a bunch of other stuff as you come down lit and, and
[01:36:39] , you know, you don't like heresy and stencil down here somewhere in view. And yeah, anyway, so this, this is a great thing. You
[01:36:49]  can compare everything from performance, size, you know, all the pieces. So, um, yeah, uh, that's, that's sort of the, uh, the
[01:37:00] , like the talk about the different libraries. So how, how, how, where are we doing on time? Anyone got any questions or thoughts so far? Where,
[01:37:07]  where are we? About an hour and a half. Okay. That's good. Um, so I wanted, I, I wanted to kind of, uh, change gears
[01:37:19]  a bit because web components have been going around for awhile and, uh, we, we've been looking at, you know, how to build them, what they make
[01:37:31]  the, like how they make sense. And, and the, the challenge has been, there has been a lot of friction with the framework libraries. And, and,
[01:37:42]  and there's this sort of question that comes off up often is whether like, like, did they succeed at what they set out to and, and what not. And to
[01:37:52]  a certain degree, we push back this question over and over again, because we're like, well, we, we're just not there yet. It's still in development
[01:37:58] . Um, and yeah, it's been a decade, probably sometime this year or next year. So, you know, you, it does beg the question and I want
[01:38:08]  to give a little insight and have a bit of a discussion now. to talk, um, specifically about, you know, why we are kind of in this place and
[01:38:19]  why there's, there's sort of opinions. Cause there, web components have some incredible uses. Um, but there's, there's, there's certain trade-offs
[01:38:27]  and people don't always realize them and kind of understanding why we are where we are. Right. Um, I've, I've been, I've been kind of on
[01:38:37]  the software for a long time. I told you I was a big, big, um, proponent for web components for years. Um, as I said, for
[01:38:45]  me, I owe a lot of solids performance to web components in the sense that. the whole, like lightweight component thing that scales, like the whole, the whole approach
[01:39:00]  of fine grained, the whole, the whole, the whole thing that actually, the reason that solid is so performant came actually from me trying to build a system without
[01:39:11]  components. Because web components are going to carry the weight and at a certain point, um, in my journey, um, things kind of changed for me. I
[01:39:23] , I, I, I, it, it, it actually happened in real time. If anyone ever wants to understand when it happened to me, it wasn't even that
[01:39:31]  long ago, June 19th, 2019, I was writing an article for medium about the cost of UI components. Um, and midway writing this article, my,
[01:39:42]  I, I, I, I gave up on web components. Um, I, not for everything. They're great for interrupt. Um, like for widgets I talked about
[01:39:51] , they're great for, um, design systems. They, they have value. As long as you stay within a single framework, you don't want to mix and match
[01:39:58]  frameworks. that's, that's never good. You're just adding size. Um, but what finally got to me was I realized that web components were never going to
[01:40:09]  be the, have the best performance, which, I mean, that's sad, obviously. But like this, this, this comparison, the JS framework benchmark, like who
[01:40:16]  cares? Like it's only 14% and actually web components have closed that gap over the last couple of years. But essentially I started comparing, um, the different components
[01:40:30]  systems of different frameworks and, and essentially, you know, I, I, I, you can make the JS framework benchmark without really any components, but I, I tried
[01:40:42]  to add components. And for solid, these were just functions at the time and I didn't really have a lot of advanced features, like the same kind of prop handling I
[01:40:50]  have today. Um, I think I had had added them at the point of me doing this to the article, but essentially, as I scaled up these different frameworks on
[01:40:59]  components, they had different characteristics. The V dom. Was almost flat. I went from having. One component for the whole app to having one per row in this thousand or
[01:41:10]  10,000 table or whatever the benchmark is to having like one per, like every single wrapper in the table, like every cell. And evie, which is like
[01:41:20]  inferno or react like the fastest feed on library, essentially didn't slow down at all between all the different components. Like adding components had zero cost for a virtual bomb.
[01:41:35]  And it makes sense because they're just a bunch of function calls. Um, and essentially as I moved on. Oh, actually there's one question in the chat.
[01:41:54]  I'll just answer this right now. Uh, what about share state? How does solid element handle that? Well, the same way solid does. You can just create a
[01:42:00]  signal anywhere, right? Like just hoist it up. Um, it was solid element also supports solid context. I didn't talk about this, but I was,
[01:42:11]  I was so focused on web components that you'll find web component remnants in solid. Um, mostly that our context API actually works with web components. A lot of frameworks,
[01:42:21]  context APIs use different mechanisms. So they don't like lit has a context API that's built specifically for web components, but solids context API actually works. Both with,
[01:42:32]  with, and without web components and, um, our portals actually have the option to put portal into the shadow dom, which is really, really important. I was
[01:42:41]  having such a hard time with portal solutions for web components, um, because of the way, uh, styling works, you either like have to make the component have the shadow
[01:42:49] , but what if you want to style the component from the outside. So like you put a modal in a, in a portal, but then you want to style the outside
[01:42:55]  of the portal. Well, how do you get the styles into the outside of the portal? If they're, if the, if the parent is now like above, so
[01:43:03] , and it's a shadow route. So you like, so I came up with like some interesting approaches and solid actually has those. And I, for the longest time
[01:43:12]  I was really marketing how solid was like super web component friendly, like all the advanced features, even suspense works with web components. That doesn't really work anymore because I had
[01:43:21]  to change the approach I do to suspense to allow for time slicing. And it was, you know, much later and I'd kind of moved on from that. So,
[01:43:29]  um, I, so suspense, but I actually had a version of suspense originally that actually attached. components to, uh, another document so that I could trigger the connected call
[01:43:41] backs off screen and basically have web components capable, um, suspense and fallbacks and stuff. Um, Oh, as I said, over time, I moved away from that
[01:43:52] . And I, because I, I, I, I went to model as like all memory, which is better for performance, but I, it was just, it's
[01:43:59] , it's, it's, you will see remnants of solids, like dedication to web components in it. Um, so anyways, V dom, like basically no cost
[01:44:09] , even memory, memory scales a little bit, but essentially no cost. Right. And then I went to lit and I was just like, what, what's going on
[01:44:18]  here? Lit drastic changes. You added components. And this isn't even web components. This was just lit like templates and memory solid had an interesting thing. It's
[01:44:29]  scaled worse than the V dom slightly, but you'll see these all green, but what's crazy was the memory was the same. Like almost no extra memory for having more
[01:44:38]  components because solid scales on the amount of reactivity. So having more components didn't change the amount of reactivity, right? Because the, the thing is V dom
[01:44:48]  still the components are the boundaries for change. So even though the execution was cheap running functions, you're adding more components, like more instances where solid components are just a function
[01:44:59]  call. So essentially it, there was some more creation costs by breaking things up. So that's why I didn't scale quite as well as V dom, but the memory
[01:45:07]  was flat. And then finally Svelte was kind of in the middle, um, better than lit, but worse than the V dom and stuff. But, uh
[01:45:15] , but the thing is, it was, it significantly got worse with more components. And again, because component boundaries are expensive in, in Svelte because they, they
[01:45:24]  rerun components. That's like the mentality. So I, I, I kind of, and yeah, memory. Well, I, I kind of, while I was
[01:45:32]  writing this article, I realized components weren't free. They don't always scale and I basically said that, you know what, as much as we like to criticize virtual
[01:45:41]  dom libraries for being, you know, slower and ball game. We don't need to be dom and all that stuff. They scale with components really freaking well. And it
[01:45:51] 's, it turned out solid scaled really well with components because I tried not to make them because of, I thought we'd use web components. And at that point,
[01:45:59]  I just clicked to me on this, like, why am I still so attached to trying to use web components? They're different things. Do you need a component in the
[01:46:08]  modern sense to be a dom element? No, right. Like not all components need to be dom elements. Dom elements need to be dom elements. Like if you make like
[01:46:18]  a, a widget or something like a, like a button or something that that's a, that's a custom element. That's an element that deserves to be a
[01:46:25]  dom element, something that's a control flow or a suspense boundary or any other kind of hierarchical consideration. You know, that orchestrates does not need to be a dom
[01:46:35]  element. So like instantly I was like, what I was expecting out of components had changed. Um, and I basically made a cold shot here. I basically said,
[01:46:46]  anyone who's not a beat on, we got to do better. Our apps just don't scale at the same size. Like we just get worse felt was not great.
[01:46:54]  Um, web components are not great. Um, and you know, V dom actually eats our lunch on this kind of scaling. Um, so like this, except for
[01:47:06]  view, because view view, it's skills going on size, but view has a V dom and a reactive system. So it's like, in some ways the best of
[01:47:16]  both worlds, in some ways the worst of both worlds. And when I was doing these kind of comparisons, you know, it was obviously the worst of both worlds, but
[01:47:22]  it was, it wasn't any worse to say than spell. But I just wanted to kind of, kind of the, the, the, this is kind of the
[01:47:29] , the whole thing, which led to me to state at this point that frameworks aren't there. I, I wanted to kind of steal rich Harris's frameworks aren't there
[01:47:37]  to organize your code, but your mind, but the components are. And if you follow my work, this is basically the basis to the thesis of the whole thing about components
[01:47:44]  being pure overhead started because of. of me recognizing that in all my work to try to make web components work, um, I basically abstracted out the most useless part
[01:47:57]  of the framework. So, I mean, that's an opinion to have, right? Yes, exactly where you need isolation, you need isolation, but if you're
[01:48:07]  building, but if you're building an app and you're nesting components and like building it, the way you build react using web components is just an unnecessary overhead. Right
[01:48:20] . They're different things for different purposes. And, you know, I, I continued looking into this over the years. Like, um, I came back to this
[01:48:30]  again, um, last year and I, I was like, okay, I'm going to put web components straight up. And I, I did the same test again,
[01:48:39]  except I use Inferno instead of Evie because Evie's kind of dropped off. I used lit and I'm like this time I'm going to put vanilla JS
[01:48:45]  into the competition. You know, I'm going, I'm going to essentially say what happens when we have a single component versus one per row versus one per cell.
[01:48:58]  And, and essentially where we start here, um, in this is obviously solid has a performance benefit over the others to begin with anyways. So, but it's not
[01:49:09] , it's not, that's not the important part to, to watch it's the way that everything else ships along while we, while we do this. Right. Um
[01:49:19] , because as we add more components, suddenly it like VDOMs actually get better with more components in terms of performance because they can break up the work. So
[01:49:32]  if you looked in the previous diagram, sorry, I'll go back to it so you can see, and I can point out the important part. If you look at the
[01:49:39]  previous diagram here, Inferno was the slowest with one component. Cause it had to re-render the whole thing. Cause that's what VDOMs do
[01:49:44] , re-render, re-render, re-render. But, um, but the second you, you can see vanilla and solid are, you know, kind of
[01:49:51]  have a bit of a gap. The second that we go and we add a component per row, the VDOM is suddenly improving. Well, actually it's not
[01:50:01]  even, so it jumps ahead and now Svelte and Lit are kind of, kind of going back, you know, and if we keep on going along this trajectory,
[01:50:11]  actually. When we get to the end of the puzzle, you know, uh, sorry, this is, sorry, this I'm gonna pull up the wrong one.
[01:50:20]  Um, where is it here? This one solid has gone in front of vanilla, which is our web components, uh, pure web components and, and Lit has actually gone
[01:50:33]  to the end and Inferno is just still staying in the same place. So basically what, what has happened as we scaled up the components, Inferno is
[01:50:42]  slowly catching up to solid solid solid's kind of stayed the same. And Svelte has kind of moved the distance and the web component libraries are shifting. right to
[01:50:55]  the point that essentially a pure vanilla hand optimized web components solution is slower than a JavaScript framework. Like, like literally the most possible hand optimized version of web components is slower
[01:51:15]  than using a JavaScript framework. like, like, like, and obviously this is a crazy benchmark, but it's because not everything needs to be a DOM element that that
[01:51:36] 's, that's the gist of it. Um, from, from a performance angle, but performance isn't everything, right? I'm, I'm, I'm
[01:51:46] , I'll be the first person to tell you that. I just, you have to understand where I was sitting. I, I kind of, you know what I
[01:51:53]  mean? Like, I, I was very performance oriented at the time and I was just like, what, why am I putting so much work into this? If ultimately it
[01:52:03] 's like using the platform quote unquote is going to be slower than what you can do with a framework. And then the answer is really simple. Everybody uses the platform.
[01:52:20]  All the tuning and tinkering helped me learn how to use the platform the best. You know, you don't have to use every feature of the platform to use the
[01:52:29]  platform. Anyway. So, yeah, this is, I, I like this comparison cause this is one of those ones where the virtual dom actually. ends up eventually trump
[01:52:51] ing everything. Like we, we can't go far enough. Like this is absurdly big. I don't, people are going to get into 10 K rows or,
[01:52:58]  or whatever, you know, we, but like essentially over time, the virtual dom actually has the best scaling. I've tried to emulate that to a bit with solid
[01:53:16] , but when it comes to, to, to like optimally written virtual dom, like they scale the best on components. Now don't get me wrong. If it
[01:53:26] 's not optimally written and, and you're doing a bunch of re-renders, the virtual dom does not scale as well. It's way easier to screw
[01:53:34]  up the virtual dom and re-render it. But I mean, from, if, if I could pick the perfect developer to create the perfect project at a certain scale,
[01:53:47]  the virtual dom will outscale the vanilla web component solution. And sometimes it's similar to your point earlier, document fragments technically being overhead, any wrapper over the dom is
[01:54:05]  overhead, but a function calls overhead is much, much less than, than more dom. Exactly right. Right. Wrong abstraction for the problem. Right. So don't
[01:54:14]  like, I just want to kind of get, I think that's a very poignant point, like, and it's different between computers. This is my M1.
[01:54:22]  Right. And the M1 was like that with the Intel, the gap was actually cut when the Intel, my Intel processor, other computer. it's Inferno
[01:54:36]  and, and web components are tied on the last one. Like, like Inferno has actually already closed the gap. We see you have Lid and Svelte
[01:54:45]  out here, the same thing. Solid's ahead of vanilla. Solid was actually ahead of vanilla already by the second stage on my Intel. But, but essentially in vanilla hand
[01:54:54]  optimized web components, you can't make them any more hand optimized. It's the same speed as the fastest virtual dom library. So, and this isn't like a
[01:55:07]  single test. This is creation, replacing, partial, select, swap, like every kind of table exercise you can do. Obviously, as I said, this isn't your
[01:55:17]  app. People come hit all sorts of issues using virtual dom inefficiently. I just wanted to point out that a pure to the metal level with the most optimal approaches.
[01:55:32]  As you scale components. you, you, you like, you can basically do very well with a framework versus using vanilla web components. Okay. So now I'm not
[01:55:51]  done with the controversy. So I I've got a couple articles that I wanted to review. I think they're good for discussions. And there's some of my favorite
[01:56:01]  writings, because even if you put performance aside, I think there, I think this is a rich topic in terms of understanding why framework authors and the web component people haven't
[01:56:15]  seen eye to eye. Um, and I've got two articles here that I've got some great discussions. Um, this one was one of my favorites. Uh,
[01:56:22]  rich Harris wrote this article critters felt, and he goes, why don't use one components? And I think, I think this is something that I think people don't
[01:56:27]  realize. Have you ever looked at view or stealth APIs for children? They use slots. Now you might think they use slots a little bit because, you know, it
[01:56:39] 's just a good API. I actually, I'm not, I'm not a big fan of slots, but, but part of it was they thought when they built those
[01:56:47]  frameworks, that web components would be a thing. And they built it to be in line with web components. View even since a bit earlier, eagerly evaluated children in
[01:56:56]  their slots, the same way web components work almost identical over time. They switched to lazy and almost every framework now lazily evaluates slots. It's just more efficient,
[01:57:06]  but they actually built their framework with that in mind. So some, in some cases, not everyone was react at the beginning. React is like, you know, what components
[01:57:15]  are separate use cases. I think Seb had a very clear, you know, vision, you know, very early on about the role of web components versus react components.
[01:57:25]  But like on the other side, like the views and the Svelte's of the world, and we still, those libraries still produce web components pretty efficiently. As you
[01:57:34]  saw Svelte, you know, in the other ways, we kind of assumed that web components were going to be our future. Like kind of believing in the platform
[01:57:44] . I've already told you for myself, like solid was based on web components. In fact, our observables originally were like TC 39 or RX style observables because I
[01:57:52]  was like, okay, it's going to be part of the spec. Or I used object.observe. I was so positive. I could make the most platform friendly
[01:58:00]  framework and over time things divert. So I want, I think that's an important perspective to understand. This didn't, this opinion didn't come from initial bias.
[01:58:11]  It was actually from things just not living up over time. Okay. So yeah, so he doesn't use it. Okay. Why? I don't. Progressive
[01:58:24]  enhancement. Yeah. Okay. So he's got a bunch of points here. I think he was showing that progressive enhancement doesn't actually work. I don't know if
[01:58:37]  I completely agree with this, but he's basically saying that from a pure standpoint, and this part I do agree with. He's saying if you, if you change an
[01:58:46]  anchor into a custom element, if your JavaScript is turned off, you don't have progressive enhancement. There is a way to get progressive enhances web components, but Safari is
[01:58:55]  our, is our web kit or whatever, like that, that group is blocking it. Essentially. You have to use one of Andrea's or web reflections poly fills. If
[01:59:05]  you want to actually use like extend an anchor, but the basic pro the basic web component is not progressive enhancement. If you, if you go Twitter share and you don't
[01:59:16]  have JavaScript, well, guess what? It's not going to work. Okay. Number two, CSS in there. Yes. I think this point he's talking about
[01:59:30]  the shadow to them. Right. And he's saying the only practical way to do so without getting a flash of style content is to have the CS string in the JavaScript module
[01:59:42]  that it finds the custom elements. So basically what he's saying is you have to package the CSS in the JavaScript. If you don't want to have the flash,
[01:59:51]  um, you know, make the style and then part of your template. To be fair, this is probably, yeah, it's, he'd mentioned it here. This
[01:59:57]  is solvable. There's the CSS. Um, uh, there's this whole constructible style sheet that they've been moving with the spec. Um, this caused a
[02:00:05]  bit of controversy last year, because I think it didn't really solve certain problems for a certain class of users. But this is, this is a, this is,
[02:00:12]  there is, there are solutions on the horizon that are now being implemented to solve this. So I cannot, these things do change in time. So it's not, it
[02:00:20] 's not all bad, but I just think these are all good talking points when kind of talking about this subject. Platform, platform fatigue. Yeah. This is my pet
[02:00:30]  peeve of mine. We've been touting the stuff of the future for years, but in order to catch up with the present, we need to stop the platform to
[02:00:37]  the gills with all these new features, deepening the mode around existing browsers. Yeah. Yeah. This is, this is sort of an interesting question, right?
[02:00:43]  because our concepts and ideas of things constantly change, right? Standardization always follows innovation and it takes a while. So it is hard because as I said, I feel like
[02:00:51]  when web components first came out, our idea of what a component was, was very, very different. And this is always the danger of bringing in, you know, say
[02:01:00]  custom templating. I'm sure like if we managed to successfully get JSX into the browser, it would take like a couple of years. And then like, by
[02:01:07]  the time it finally got there, everyone would be like, what, you're still using JSX? Like that's the sort of, that's the sort of problem with
[02:01:15]  this kind of standardization. Every time we add new features to the platform, we increase the complexity, creating new surface areas for bugs, blah, blah, blah. Okay
[02:01:25] . Poly fills. I think we're, we're past that. We don't need as many, a lot of the, a lot of the poly fills are fine.
[02:01:30]  So I'm going to say that. Composition. It's useful for a component to be able to control when or whether it's a lot of content is rendered.
[02:01:35]  Yeah. So he's talking about, for me, this is actually one of the biggest concerns. The stuff inside always renders. There's no lazy evaluation. So even
[02:01:46]  if you control how it's slotted, like when to show it or not, technically like it's already connected. It's already triggered. All the life cycle events happen
[02:01:55] . There's, there's no way you, you end up writing, as I said, passing templates into content. And then doing some fun game with it. So
[02:02:02]  there's some bulky API pieces that don't work. And almost every framework has decided to go the other way over time. So I feel like this is one of those big
[02:02:11]  splits. You'll see. confusion between props and attributes. Um, we, we, we didn't, we didn't get into this too much, but Dom has
[02:02:19]  props and attributes and they don't always reflect on each other. And in my libraries, I actually have to do like some special, some special stuff to kind of get that
[02:02:27]  to work so that they reflect. And yeah, they have different rules. And I mean, this is just the fact that you have to deal with the Dom. Like
[02:02:34]  what do we have? Boolean attributes. What's this example? Button has attribute disabled. Okay. False. Set the prop. And now it has this attribute. Remove
[02:02:43]  the attribute. Yeah. Like that version works, but then he was showing that if like the, basically there's complexity between this gap. And to be fair, if
[02:02:55]  you're dealing with the Dom, you always deal with it and you accept it. But I think this is just one of those things. Like when these are your primary mechanisms
[02:03:01]  to deal and author components, you're adding this kind of layer of complexity. Um, leaky by design. At this point is a bit more nebulous.
[02:03:12]  Okay. So he admits it. It's weird to me that actually change colleagues, just a method on the element instance. You can literally. Yeah. Yeah. Neb
[02:03:24] ulous. The Dom is bad. Yeah. Yeah. He's showing how it's takes more code. than Svelte. I mean, I think this argument is
[02:03:42]  a little bit weak because we already agreed. You're going to use a framework if you're going to use, um, if you're going to use, um, web
[02:03:51]  components. So he's right. It is more verbose, but, um, use letter stencil and you, and it's not going to be more verbose.
[02:03:57]  Um, global namespace. We saw this. Our HMR had a lot of fun. Um, these are all solved problems. So yeah, his ultimate point was he
[02:04:02] 's like, frameworks have solved all these problems and components. And, and, and we're still learning about the basic problem. Keep the view in sync with state,
[02:04:19]  but if the bombing component has been solved for years. But we're adding new features to the platform just to bring web components to parity with what we already do in user land
[02:04:27] . Given finite resources, time spent on one task means time not spent on another task. Considerable energy has been expended on web components despite a largely indifferent developer population.
[02:04:35]  What would the web have achieved if the energy had been spelled, spent elsewhere? That's heavy. And a lot of people disagree with them. And this discussion goes crazy
[02:04:44] , but I think, I think these are interesting points and things we, we should kind of, you know, think about, you're right. Like some people like one
[02:04:51]  isn't true. Yeah. And, and they show how to use progressive enhancement and it's, and it's, and there are solutions, but there's, there's
[02:04:58]  a lot of awkwardness. He had, he missed a few other ones like forms, um, are very awkward with web components. The thing is there's, there
[02:05:06] 's things that will be fixed over time. Right. Like in a sense, you know, like where, where there's, where there's gaps on the, like,
[02:05:16]  uh, poly fills or, you know, hopefully we get progressive answers. Things will be fixed, you know, and improvements will be made and the platform will keep on moving
[02:05:31] . So I, I, it's not that I, I'm, I more can contend and wonder if, if essentially I wrote an article myself on this topic
[02:05:41]  about maybe web components are not the future. It's not quite as, um, harsh as rich ones on the points, but what I was getting at is I believe that
[02:05:51]  all the problems that recognize problems will be solved for web components in the future. But, but the, the, I think the challenge is web components aren't going to
[02:06:00]  change their nature. There's still DOM elements. So, you know, my whole argument this whole time, and I've been mentioning it's components are not web components.
[02:06:08]  Once you understand that difference, then you can, you can see a future where web components exist. You know, you can have frameworks that author them or that, as
[02:06:19]  long as you understand, like, it's, it's not the best way to build applications. It's a good, the good tools for wrapping up a widget or
[02:06:27]  providing a common set of elements, but like they're, they're a bulky interface for like doing application components. Like the, the way that like we're used to with
[02:06:38]  say, you know, modern JavaScript framework. Right. That, that never changes because they are DOM elements. Like they're designed for a different purpose. It's not
[02:06:48]  the right, necessarily the right restriction. Right. And is it a surprise of the friction with UI library frameworks, um, DOM life cycles. Yeah. The biggest problem
[02:07:01]  web components are hitting right now is just ecosystems grown up many cases. It's no longer just about progressive enhancement to create a user developer experience like that of the application requires looking
[02:07:12]  at things more holistically. The life cycle of modern JavaScript transcends DOM life cycles. Exactly. You do work in your components before they're even attached to the DOM.
[02:07:21]  Do you know what I mean? Like, and when they're not like suspense, like we're, we're getting to a point where we're building these things into the
[02:07:27]  front. Building these things into the frameworks to orchestrate that transcend the DOM. SSR. Like these are all things that transcend the DOM. And as I said,
[02:07:36]  web components are the DOM. So any place where there are, there, there is use for the DOM, then you can use that. But when you, when you think
[02:07:43]  about frameworks, looking at native and universal renders and all that stuff, it just, if you're going to need a library anyways, like people are going to probably grav
[02:07:53] itate to libraries that have more capability. Because as I said, the web component aspect is you don't need it for the app. You need it for portability and
[02:08:04]  interop. So. Yeah. It was that my only two points. Yeah. What a fun article. I only had two points. Yeah. And in the end,
[02:08:14]  that's what all I said, I think it's great for certain things and, but not necessarily great for other things. And it is kind of interesting because in my
[02:08:21]  mind, some people go web components are failure. I, I, my argument, you can't fail. If like, like web components, it's not that web components
[02:08:36]  are failing to be what they're meant to be. They're doing it. I think they're getting there. Like, I think, I think web components are actually
[02:08:43]  for the tasks that they can do for custom elements. I think they're actually, I think, I think we're, we're telling the story. We're getting there
[02:08:51] . We're getting there. It just web components weren't designed to be everything that we expect from the, from designing apps in modern web. That's, that's
[02:09:00]  basically what it is there. They are kind of a blueprint of our thoughts on components from 2013 that we're still have six or seven years later, or nine years later.
[02:09:11]  Like essentially they, they were very good at doing what they're meant to be. When you want a dom element, they are amazing and they're portable and they do
[02:09:20]  all you need, but it's very different to the way web dev is now and in the future, essentially. Right? So in a sense, they're, they're
[02:09:31]  a good bet if you want to, to future proof reusable chunks of code, but as a, like a framework to build your, your, your, your application in,
[02:09:43]  it's kind of, it's a different question, a different consideration. Right? Because it's funny because people on the website often go like, Oh, this is
[02:09:51]  how you future proof. But like future proofing, isn't just about the fact that technology still works. It's, it's, it's, it's a matter
[02:09:58]  of like, are the patterns relevant? Is it the way that people develop? I've watched over the years, the patterns change over time. So like, we, we
[02:10:05]  already kind of see web components being a mismatch with the current patterns. So like, do we expect in five years for that to change? What, what if,
[02:10:16]  what if things go a completely different direction? I don't, I don't see it possible to use standardization as a, as a method for future proofing.
[02:10:26]  It just doesn't make sense. Innovation always leads standardization. So even if something works, doesn't mean that it's the future. And that's really kind of the
[02:10:35]  point in the thought here. What, what do we got here? It's funny that the web promoted parameters aren't actually smaller than other frameworks. You think, you
[02:10:45]  hope that leveraging the platform would reduce the coding for the framework. Well, I think they can be like Prism has shown that they can be. I think the problem is
[02:10:54]  not the technology itself. Right now to get into the really kind of heavy consideration. I think, I think the concern and the thinking where this kind of comes in is
[02:11:08]  that, how should I put this? People and proponents of these technologies, especially a lot of the platform, use the platform kind of technologies are also happened to people who
[02:11:23] , who tend to be like, let's not use build tools. I've mentioned this before and I can, I can, I can, I'm old enough to
[02:11:31]  sort of at least appreciate their perspective. I remember I was taking, I mentioned this on stream before, but I'm going to mention it again. When I was taking the
[02:11:42] , I think it was the JS, was it the JS survey this year? You know, the, there was a question about like how you learned web dev. And
[02:11:50]  my option wasn't on the list, which was view source on other sites. That's how you used to learn web dev. Like, like people talk about it now.
[02:12:02]  And I think the younger people kind of like laugh. I'm like, what are you talking about? You, you, you look like this is the infancy of the
[02:12:08]  internet. You didn't like, there weren't like a ton of books. You like literally just went to a website when you saw something cool and you're like, view
[02:12:15]  source. Like, how are they doing that? And then you would like go and take it and copy it over. Um, that was, that was, that was
[02:12:24]  like 95, 97. Like I w I was a kid. I was like really young at that point, but, but like, that's, that's how I learned
[02:12:32] . Um, and I think there's a desire to get back to that kind of simplicity, right? A desire to be able to like, just write some JS,
[02:12:47]  have it just work. Don't need build tools, use, you know, some tag template literals, use, use those things. And just kind of go like
[02:12:55] , here's the experience, you know, and people can learn from it. And, you know, and just return to that web. You know, we have, we
[02:13:02]  have so many new tools we didn't have back then to make things better. Import maps, ESM modules, like all these things, these crazy CDNs that kind
[02:13:11]  of sort of pre bundles stuff for us to a sense. And like pre prep it and, and yeah, some other people who don't mind showing their age.
[02:13:32]  Right. And, and like the truth of the matter is we've, we've entered an age. We've entered an age of optimization and tooling that even with the
[02:13:49]  new features in the browser, they can't keep up. I, I, I pointed this out before. I think there's a thing about comparing minification and G z
[02:13:58] ipping of CSS to JavaScript and how that's like a terrible comparison, but it, they, they, they can't. Right. Like on the framework side, we
[02:14:11] 're sitting there going, you know, have we hit the limits of what we can do with HTML and JavaScript. Like we're, we're like literally sitting there going like
[02:14:22] , like felt like in, in Marco, let's compile in the reactivity into the language as a way of getting past some. You know, sources of problems in
[02:14:32]  solid. And solid. I'm even though I use compilation for like the modernization of things and performance. I've actually been trying to like the kind of secret to it
[02:14:40]  is I try and use compilation as the least amount as possible because I've been trying to keep things to JavaScript. as many, you know, solid has a lit render
[02:14:50] er. You can use solid without a compiler and you know, there there's, you can, I mean, I don't think it's a great experience, but I
[02:14:59]  mean, it's performant. It's, it's basically one of the most performant ways to use lit. It's, it's out benchmarks is like lit
[02:15:07]  HTML and all those kinds of tag template libraries because it leverages the, the reactivity, the fine grained stuff that solid does. So like, you know, I
[02:15:16] , it's probably one of the fastest ways to, to use tag template literals. I think one of the, I think there's a V DOM library that uses them
[02:15:23]  faster maybe, but, but essentially like, but knowing that you can always do better. Right. You use the JSX to get more performance. You can do better
[02:15:36]  tree shaking, you make smaller bundles. So it's kind of a weird thing because it isn't about performance. And, you know, cause people are thinking less is
[02:15:47]  more, but actually the tools make our stuff better. I don't know how much we want to trust in the tools. And, but essentially we've gone to a point
[02:15:54]  with JavaScript frameworks that they're smaller and they're faster than they're kind of naive. Naive native counterparts. And it's a weird juxtaposition because like
[02:16:08]  where I'm sitting, they've already lost, but like there is an incredible desire there to see this through and, you know, return to this sort of simplicity.
[02:16:26]  Yeah. Oh yeah. Yeah. Sure. I think I might've shown this before, but. what cool. This is, this is the reason. What I call
[02:16:33]  it. HTML. No. real. This is the whole reason that. That I get people to compile. JavaScript. Like solids. We, we, we ship
[02:16:41]  the JSX. Okay. Yeah. I think I might've shown this before, but. I think I might've shown this before, but. What cool. This is
[02:16:45] , this is the reason. Um, what'd I call it. Um, what'd I call it? HTML. No. No. This is the whole reason
[02:16:57]  that I get people to compile JavaScript. We ship the JSX code, but I tell everyone to make a client build. It's because I want people to be able to
[02:17:13]  use every solid library in the browser, essentially, without... without having to, you know, use a build step. So I get the libraries to make the client stuff
[02:17:26] , and then you can CD in it. But essentially, our lit renderer looks kind of like this, right? And I've got some custom components using dollar signs in
[02:17:39]  here, and some nested fallback. This is suspense. This is solids app router. This is all the libraries you're used to. Do we have transitions here?
[02:17:49]  Yeah, we do. See those dots? That's the transition stale state. So this is, like, you know, whatever you call it, concurrent rendering without
[02:18:00] , you know, without a compiler and using all the same solid libraries. And I made a little game in here, right? Let's just undo the moves. Let
[02:18:15] 's look at the tic-tac-toe example. I made a few components. You see, you have to kind of wrap stuff yourself, which is kind
[02:18:24]  of a pain. But, I mean, there's no compilation step here. This is just using our router and just using tag template literals. Yeah, yeah,
[02:18:40]  definitely, right? Vanilla is definitely faster. But, yeah, it's challenging to actually write that yourself. And what I was actually getting at is vanilla with web components
[02:18:54]  isn't necessarily faster because the overhead of the web components. But vanilla itself is definitely faster. So, yeah. So, yeah, I mean, I wrote, it
[02:19:07] 's funny because I did discuss, there was a discussion today on Twitter. And I was actually trying to, I think there was a little bit of misunderstanding here, but I
[02:19:18] 'm going to show it anyways. Justin, Justin, the creator of Lit, was like, the single best thing that React brought into the framework world is lack of react
[02:19:26] ivity. Trying to pass the world to observe changes to object and expression is expensive and a fool's errand, in many cases, not helpful or keep it simple. And to
[02:19:33]  clarify against Lit and say MobX's reactivity models, there's a huge important difference between global reactivity and local opt-in reactivity. Making a property the developer
[02:19:43]  owns reactive is fine, but attempting global reactivity is ownership and leaky. Justin, I was a little bit miffed. I was just like, wait a
[02:19:52]  second. Because I identify a lot with MobX. I actually get what he's saying now. He was actually talking about having proxies that just leak out everywhere.
[02:20:01]  And to be fair, Sola does have proxies like that. I was like, what's going on? And to be fair, Sola does have pro
[02:20:05] xies, although we tend to make them read only. And because we make them read only, we don't have the same concern, per se. But I was like
[02:20:14] , what, what, what, what, what, what's this? What's going on here? Like, not helpful, all this stuff. I'm just like,
[02:20:21]  expensive. What's that? It's cognitive? Because from a performance standpoint, this sort of react has incredible benefits, right? And I wrote an article a couple years
[02:20:30]  ago about this. This was probably one of my first articles to kind of... I actually liked this article a lot. I actually, what I did... Can I get
[02:20:42]  rid of the stupid sidebar? What I ended up doing was I took all the versions of solid, proxy, signals. These ones are actually still proxy, technically. So
[02:20:54]  they're a bit slower than you do. But then lit and hyperscript. Sorry, why did that open? And then I took the fastest libraries that... Yeah
[02:21:07] , yeah. Yeah, he was talking about zones and like object.observe. I realized that after the fact, but he used MobX in his first example. And
[02:21:22]  I was just instantly like... Solids like MobX, views like MobX, you know, like kind of on that. His point is well made. It just
[02:21:31] , it wasn't clear. But it did kind of bring back this old article from 2019. Because, and it's kind of to the point that I was talking about.
[02:21:42]  I was really interested in what makes performant rendering. You know, I kind of decided that there's three different types of templating languages and different runtimes behind them.
[02:21:53]  And is there actually a truth to that some are better than others? Right? Like, is there actually some kind of truth thing? So I took the fastest VD
[02:22:04] OM libraries. I took the fastest tag template string render libraries or whatever you're gonna call them. I took the fastest, you know, fine-grained libraries.
[02:22:19]  Solid was not the first fine-grained library to use JSX. The credit goes to surplus. I've improved things over time. But, you know, essentially,
[02:22:24]  I took that and was like, how, what is the fastest way to render the DOM? And the first thing I did was I took Hyperscript, which is what
[02:22:24]  JSX compiles to. So most of the time, not in Solid. And Solid has a version of Hyperscript. And I was like, let's take
[02:22:35]  the fastest VDOM libraries and see how it compares. And there you go. The fastest VDOM libraries using Hyperscript are faster than Solid using Hypers
[02:22:50] cript. And it makes sense because they just call the functions and produce their output and they're done. When Solid, we have to set up the subscriptions. And without
[02:22:59]  that knowledge of a head how to do that the best way, we have to do all the same object iteration and walks that the VDOM libraries do, except then we
[02:23:08] 're setting up more expensive subscriptions. So like this was for me, a very good evidence that mixing the VDOM with a reactive system generally is at a baseline,
[02:23:17]  unless you can optimize the templates, which Vue does do to a certain degree is just a really bad idea, but like older Vue didn't. And basically in benchmarks
[02:23:27]  of this was the worst of both worlds. So like, this is kind of an indicator of that overhead for this. There's a reason why VDOMs use Hy
[02:23:35] perscript. It makes sense. It's just function calls. It fits their model. So then I kind of moved on and, you know, obviously different memory characters
[02:23:44] , but nothing too big there, but whereas then I went to string templates and I took lit, solid lit and DOM C, which is, uh, kind of a just
[02:23:53]  in time string compiler. Um, and, uh, it was, this kind of showed that, that the fact that once you have a strings and you can kind of analyze
[02:24:06]  the HTML structure, you can make it optimal. Um, essentially. And the thing is that solid and DOM C actually did kind of just in time compilation. They'd
[02:24:15]  look at the string at runtime without a build step and kind of go, okay, this is what we need to clone. And these are the holes and they've analyzed what
[02:24:21]  it needed to, to optimize it. Lit took a much more simple approach. Um, and as you can see, essentially DOM C and solid solid kind of the middle,
[02:24:33]  but are significantly faster at lit than lit. Right. Um, because of, you know, being able to leverage sort of a just in time compiler approach. Um,
[02:24:42]  it was kind of interesting because this approach is very wide in terms of performance. and then, but then when you get into the JSX libraries, it's just like
[02:24:51] , I want to compare the difference between proxies and between signals, essentially, mostly. And I had surplus and, and sorry, and clone nodes, surplus creates
[02:25:03]  elements one at a time, solid clones nodes in both. And this is signals and proxies. And you can see that the cost roughly between cloning nodes and not
[02:25:13]  cloning nodes, because surplus uses signals, not proxies. And the cost between proxies and, and, um, signals are both almost equal. It
[02:25:22] 's basically, you know, it was 5% over the whole thing. And essentially, um, there's just a little bit of overhead for proxies and a little
[02:25:30]  bit for cloning. Um, but yeah, ultimately all this ended up showing is that in the end, you know, all of the fastest approaches, like the,
[02:25:42]  the hyperscript was a bit slower, but all the fastest approaches, you know, are still relatively fast. Like if you put it in a single table here,
[02:25:55]  um, where is it here, um, you can see that, um, essentially like it's a mixture. You have string, you have signal compiled. It's the
[02:26:11]  string one from dossiers even faster than solids proxies. And then you can get into solid lit, the virtual dom libraries, solid hyperscript. And finally
[02:26:21]  lit HTML is the slowest. And I mean, this is no jab at lit HTML. Um, I could, I actually took this opportunity to make a jab at S
[02:26:29] velte, which wasn't fair. I suppose that I said that Svelte wasn't fast enough to be in this table. Um, but, uh, essentially the
[02:26:38]  kind of, the, the kind of thing that, that this kind of showed is that. It isn't that simple to talk about performance because virtual dom doesn't mean
[02:26:50]  it's just slow and no build. Like there's different ways you can attack this stuff and people shouldn't like necessarily get kind of fixated on the approaches of libraries.
[02:27:02]  You can do take template literals with sort of a just in time analysis and fine grained reactivity and get even more performance than using like the, the template part
[02:27:13]  approach that, that they want to bring to the browser. Um, that the user lit, like there's always different ways to kind of maximize the tooling and change the paradigm
[02:27:26] . So, you know, it's very hard to make primitives that are higher level. I think, but I mean, it's not, it's not a
[02:27:38]  simple story. Because if you just focus on the little pieces and hope that they kind of Voltron up into something big, you're equally going to have problems because sometimes
[02:27:46]  those little pieces aren't useful pieces. And you're, you think you're steering the ship in a good direction and you start seeing how the pieces fit together. And
[02:27:53]  then something changes, the course corrects and suddenly those pieces look out of place where maybe if you had a complete thing, then at least it would be useful. So this
[02:28:06]  is a hard problem. Um, in terms of standardization and innovation, my, my, the biggest thing I've observed over the years is like, like never bet that
[02:28:16]  you can like predict the future. You, I mean, the future predictions are always within a year or two kind of out. You can usually do a pretty good job
[02:28:24]  of figuring out what the next couple of years look like, because technically they're usually already here. Like someone's already working on the problem. And I spend a lot
[02:28:32]  of time looking at wide into the ecosystem to understand what people are working on right now, because that's where the future is. It's, it's already now, but
[02:28:40]  beyond that and talk and talking about like future proofing and stuff, anyone like future proofing is garbage. And it doesn't matter whether you're using react the most popular
[02:28:51]  framework or whether you're using the platform or so like things always change. That's, that's the constant. Honestly, uh, I knew today wasn't gonna be
[02:29:04]  the longest stream. And I'm, I'm kind of nearing to the end here. We talked about web components. We talked about the platform. We talked about,
[02:29:13]  um, you know, just the kind of state of, of, you know, standardization. Um, I don't know if there's anything anyone else wants to
[02:29:24]  ask or if we're just gonna call it early tonight and, uh, get to our weekend sooner. I didn't even finish my drink. What do you know? It
[02:29:32] 's amazing, but we covered a lot of stuff today and I'm glad everyone was able to join me. So, um, just give me like a, another minute
[02:29:43]  here. As I said, I got some time to finish my drink, but otherwise I think, um, we just call, call this one a night and, uh,
[02:29:52]  move on. I hope that, um, I think my plan, I always kept plans for what I'm going to be like the next week, but I always change them
[02:30:00] , which means that anything that I say is, it's more like a prediction rather than a reality. But, um, what I'm hoping to do, I think
[02:30:10]  next week is, um, essentially some, some of the, um, submissions for the solid hack have started coming in. And, um, it's, you know,
[02:30:20]  there's still a couple of weeks to get them in. That's why I'm waiting to next week to cover. Cause then, you know, it'll kind of remind
[02:30:26]  people the week before, but, um, I think I want to just kind of look at a few of those. I understand technically speaking, since the voting system,
[02:30:34]  probably highlighting stuff on stream might be unfair. Perhaps. I, I, I just, I'm just honestly curious to what kind of libraries come in and maybe that's an
[02:30:45]  incentive for people who want to get their submissions in earlier to do so. I don't know, but I think it would be fun to kind of look because I,
[02:30:52]  I, people have been working on some amazing stuff. I already shared a little bit of it on Twitter or, you know, as people start posting it. Like if you
[02:30:59]  write an article in dev or on Twitter flag, you know, hashtag solid hack at, at solid it or whatever. And I'll try and promote it or put it
[02:31:06]  up there because I want to bring attention to the hack. And I think people work on really amazing things. Um, so, um, oh man, there's some good
[02:31:19]  comments coming in now. So that's all the browser. I, I actually didn't talk about that today. You know, how the Seb was kind of suggesting basically
[02:31:29]  adding react to the browser and people, someone, someone, someone made a comment. Uh, I saw a retweet or something that they're like, they said something along
[02:31:36]  the lines of like, you won't need to add your framework to the browser. If you know, you added more, you know, fundamental pieces to the platform and use
[02:31:43]  those. And I'm just thinking to myself, like, it's such a funny argument. Cause I think whoever was, it was like big on the web component side
[02:31:49] . And I was just thinking like, aren't you just adding your framework to the browser? Like, like, isn't, aren't you just trying to add light to
[02:31:55]  the browser? Like it's, it's, it's, it's, it's funny. It's, it's, it's like same stuff, different pile.
[02:32:01]  You know, like, uh, yeah, no, I, I hope, I hope we don't add libraries to the browser. They change. That's the whole point
[02:32:11] . Things get better, improve. You keep on moving, you know? Yeah. I don't always, but I can, I will link all this stuff. I
[02:32:22]  actually have a list of the links, you know, so I'm going to drop those in today. Um, design systems that you want to work across platform. Uh,
[02:32:36]  you know, maybe you don't control it. Maybe, maybe people build their own websites and whatever technology you want. Um, uh, widgets like things that you can
[02:32:45]  like embed. Interface is much, much, much, much nicer than using like, uh, what do you call it? like a jQuery style interface.
[02:33:01]  Um, um, um, micro front end type stuff. If you, if you're designing those kinds of interfaces might make sense. Um, it's a good interop
[02:33:09]  layer. You don't need it. But like if, if, if, if, if, if you wanted to make a nice, uh, you know, a
[02:33:16]  sort of micro front end type architecture, I consider it like astro. Can I, I don't know if they use actual web components, but like the way their islands
[02:33:24]  work, it kind of looks like web components. Um, it's just, it's a good boundary to, um, to like completely separate stuff, uh, essentially
[02:33:33] . Um, yeah, basically places where you really want to set up the walls, um, or places where you can't depend on where they're going to be used.
[02:33:45]  Um, if you control the application, like you're making the thing yourself, then, uh, then, um, and you control the whole universe or like, like
[02:33:53]  essentially like maybe you control all the apps. Then you, they're kind of just overhead. Uh, sorry. There's one more place. If you're trying to migrate
[02:34:02]  from one framework to another framework, um, they're a good temporary step. Um, they're a good way of like putting two things on the same page. I do
[02:34:09]  warn or caution against that because like in the meanwhile, you've completely killed the performance of your site. or whatever, a little bit, uh, it might be acceptable
[02:34:17]  on certain types of sites, but web components are really good for migrating from one thing to the other thing. So, I mean, sometimes you just said, you get
[02:34:25]  to a certain scale where you want to support a bunch of stuff. But as I always say, you know, just cause you can put any framework on the page doesn't
[02:34:34]  mean you should put every framework on the page. Um, this is kind of the trap you have with micro frontends or web components or Astro or whatever, because you
[02:34:42] 're, you're like, who lit, view, react. All on the same page. All on the same page. And, you know, what is it?
[02:34:49]  13 kilobytes, 20 kilobytes and 43 kilobytes. You know, like that's just pure overhead. 13 kilobytes. So, yeah,
[02:35:00]  I, there's, there are some places where they're useful, but yeah. How do you keep being productive? I noticed we suffer from the fact that we're easily
[02:35:14]  distracted by interesting tech, but unlike you gets the job. Well, that's the thing when it comes down to making the decision, you've got to make the decision
[02:35:23]  and you just live with it. You, if you keep on trying to redo things, you're going to get stuck, right? You make the decision to live with it
[02:35:31] . And that's what you do from work side. I have the benefit of working on framework. So I get to play with stuff and I prototype stuff and whatnot.
[02:35:39]  I think it's really important for anyone who works on frameworks to look at other frameworks, understand what's going on. That's like the basis of everything I do. I
[02:35:46]  just literally look at what everything everyone's doing and try and understand it. But from a business sense, don't worry about it. Pick a good solution. Do due diligence
[02:35:57] , do the work, and then just build the thing and recognize that in five to seven years, it's going to need to be rewritten. That's how the web
[02:36:05]  works. That's it. Don't worry about future proofing. You will rewrite it. I'm not sure things will always change. I do think we'll get
[02:36:22]  to a point where things will vary due to taste, but yeah, I mean, we just chase it in different places. Like DOM rendering, like the sake of this article
[02:36:31]  that I was looking at here, you know, I love this because it's such garbage. The only one, like that's been a debt. Like we, we
[02:36:41] , we haven't seen a movement in a DOM performance basically in, well, how long has it been around? Four years. I would argue before that, like surplus.
[02:36:51]  Since 2016, six years ago, we've known all the best ways to get performance in the DOM. It hasn't changed in six years. Like before Svel
[02:37:05] te came out or Svelte 3D or whatever, we already had faster ways to render the DOM. Like, you know, like we already, like this stuff has
[02:37:14]  been known for years, but hydration has been a harder problem and, and doing SSR. So we've shifted the way that way. Eventually, maybe eventually, eventually
[02:37:25]  there'll be something, but we're like, we're still changing the model right now. Right. So I think stuff's changing actually pretty drastically over the next few years
[02:37:34] . So I don't know, maybe in 2025, we'll be like, we finally did it. We finally solved the web. But my, my gut feeling is
[02:37:43]  what's going to happen is when we get to the limits of what we can do with SSR and with DOM rendering, which we've already hit those walls. We
[02:37:52] 're going to decide that our primitives aren't good enough, you know, like, like in a sense react server components, you know, conceptually is like the,
[02:38:01]  the next big thing or like whatever that kind of mentality is partial hydration mark or whatever is quick is going to be, is the next thing. But I think after that,
[02:38:10]  someone's going to be like flutter, but better or actually good or whatever is going to be the next thing after that. And then, yeah, maybe then around
[02:38:16]  that time, you know, so 25, we're pretty happy with react server components and like the partial hydration, hydration story. And then we decided to rewrite everything to be
[02:38:26]  like new things. So we accept civilities built in and we're going to 228 and then, oh, it's wasm time, right? That's about right
[02:38:32] . About five, six years from now. Um, people decide that they can do everything with web assembly and then our, the rest overlords will come. And then
[02:38:39]  like, I don't see this slowing down like anytime soon. I'm sorry for the people who are like kind of tired of the fatigue. It's fine. Just get
[02:38:49]  off at any step, build your app, choose suitable technology at a time. And just know that it's going to be rewritten in five to seven years. It's
[02:38:55]  that, it's that simple. Like this is, there's no signs of this slowing down anytime soon. Yeah. Okay. Yes. Okay. This is a big
[02:39:15]  one. I would love to see detachable document parameters. And the longest increasing sequence. Yeah. Whatever the diff algorithm that everyone uses on lists. Those two primitives would
[02:39:26]  be amazing to be built into the DOM. There are things that every JavaScript framework uses like fragments and list if it's more primitive than like, let's just write our
[02:39:39]  web component side of things. But if you wrote an optimized version of that, you like every single JavaScript framework uses this. I don't know if like, where the
[02:39:51] , like, it's not the same kind of end user facing thing, but like, and you know, it does have a nicely wrapped API. But like, if,
[02:39:58]  if you talk to framework developers about what they want, it would be it. Like, you know, do you know how much complexity it takes to, to make fragments work
[02:40:07] ? Like you can't use document fragments because once you insert them, they get removed. So you have no traceability. I used to use document fragments and solid.
[02:40:14]  And then there's a spec for proposing it from again, Android Giamachi. He's the biggest web component proponent out there, but he gets the limitations and he
[02:40:22] 's really trying to improve the web, but his specs haven't getting passed through. I don't know, I guess Google kind of drives the ship there and God,
[02:40:31]  it would be so nice to not every time you read a new framework, be like, how the hell am I going to solve fragments? You know, you can't select
[02:40:38]  ranges of elements in a performant way. It'd be great if you can just go like, here's the range. Just, you know, yeah. Thank you,
[02:40:47]  Dylan, for bringing those up. Those would be amazing. Every framework. Yes. Every framework. So, yeah, I mean, I've got a bit of a
[02:41:02]  rant here at the end of the stream, but yeah, I think, I think there's some common themes here. I think, I think things are still moving at a
[02:41:14]  good speed. There's going to be lulls. There's going to be things like the last few years. I think I saw a tweet this week where someone
[02:41:19]  was like, I think we're finally getting to the point where the paradigms aren't, you know, things are settled. And we're just, you know,
[02:41:25]  sitting in there and seeing gentle optimizations. And I'm like, oh man, you have no clue what's, what's coming. Because like, there was a l
[02:41:34] ull from 2016 to 2020. React kind of won and we were pretty happy with it. But it wasn't, it wasn't a complete lull because that's the
[02:41:44]  same time period. The React team had already moved on. They were like, okay, what's next? What comes after GraphQL? Like, they're, it's
[02:41:51]  obvious that there's room to improve. And I mean, even right now, the biggest obviousness on this is the bloat of single page apps. Everyone acknowledges
[02:42:06]  and understands that single page apps are freaking huge. There's a reason Rich gives a talk on transitional apps. There's a reason that, you know, people are exploring partial
[02:42:15]  hydration, Astro and stuff. Like everyone knows that there's an issue with the size of single page apps. And we're working, you know, there's lots
[02:42:25]  of ways to attack that problem. But this is, there is a problem, which means that there will be change. It's, it's that simple. And then there
[02:42:33]  will be the next problem. And I, I don't know, maybe some of this is inherent to the web platform. Some inherent to the client server model that will always
[02:42:42]  be unsatisfied until everything is completely instant. Maybe hardware will, you know, like the edge is the first step on the slide. We'll just make these things better
[02:42:50] . But I mean, you know, people are always working on improving this stuff. Oh, where are we? Yeah. I mean, there's a, the funniest things
[02:43:07]  about a lot of these wars is like new standard versus old standard, right? Like I understand both sides. A lot of things don't support ESM nicely, which
[02:43:17]  is really unfortunate because there's another contingent. And I have to admit, I'm part of that contingent, which are just like, just use ESM and just
[02:43:23]  force the web to improve and get there. But this is, these kind of growths are always going to be painful. And then there's going to be like,
[02:43:30]  almost like a traditionalists. I don't know what to call them. Like people who support the legacy option just out of like familiarity and like choosing sides. It's
[02:43:42]  kind of like the, the no bill kind of view the script tag kind of people like it. There, there's something there that they really loved. It made the web
[02:43:52] , the web for them. And over time, JavaScript, the language has gone away from like JavaScript, the machine or something. And to me, this is like a
[02:44:06]  long lost battle, but I mean, what do you, what do you say when there's something that you love, you keep to it? Like I can identify with that
[02:44:16] . I love fine grained reactivity when the industry almost completely killed it. And I kept on working on it. And who knows by pure chance, it came back
[02:44:29]  again. So sometimes the old comes back as a new, but other times the old is just old. So I don't know. It's, it's, it's
[02:44:40] , there's so many aspects to this. How much? Yeah. Yeah. That's the term, isn't it? Webmasters. Internet explorers. Web
[02:44:51] masters. You all are great. Oh man. Yeah. For sure. But it did make tree shaking for tooling easier. Right? Like, and it looks nicer
[02:45:19] . I do. I mean, part of the problem, let's face it. The browser didn't come up with a module system and no jazzes did. And you
[02:45:28] , there's always that kind of proprietary thing in the web doesn't want it. And the web, the web is built by people. And standards are built by people
[02:45:39] . And standards are built by people. And I feel like, I feel like sometimes the standards are almost spiteful. It's so funny for me because coffee script, as
[02:45:53]  many, you know, basically got absorbed into the browser. Right? Right. Like every feature has, is getting there. Eventually coffee script was so ahead of his time
[02:46:02] . Like, I mean, obviously there's obvious things like class, but like all the stuff they did about spreads and rest parameters and, you know, arrow functions.
[02:46:12]  And like, I know a lot of that came from Ruby and stuff too, but coffee script, uh, optional chaining, no coalescing, all those features are
[02:46:20]  in coffee script back in 2010. Like you felt like you're developing in the future and do expressions. Like the list is endless, but every one that gets brought into JavaScript
[02:46:30] , it's like they chose to, to, to like, it's like, they just chose to do it differently for the sake of doing it differently. My,
[02:46:37]  my favorite one, and maybe it's because of my lack of knowledge of languages, coffee script, put the dot, dot, dot for spreads and everything on the other side
[02:46:44]  of the variable. And it was, I was just, I, I just, maybe I need to look at other languages. It was just so weird to me. The
[02:46:50]  JavaScript was like, no, we're going to move the dot, dot, dots just to the other side. Like, I don't know why. And maybe there's
[02:46:58]  a good reason, but it's like every time there's just like a little bit when they borrow for something. To make it not the same as what they took from
[02:47:08]  maybe for originality or whatever, like the browser needed a module system. So yeah. And ESM is well designed, but I, I just, I mean, other
[02:47:17]  than like the, you could always do really cool stuff with requires, like in terms of like dynamic imports, top level and stuff. Like I, I, there's
[02:47:25]  places and cases that aren't covered by ESM, but maybe it's good for, but like from a design standpoint, I don't know. I'm not gonna have
[02:47:32]  a huge opinion about that, but. You know, I, I think, I think there is a bit of that. I think we have to acknowledge that the standards and
[02:47:39]  stuff are built by people. Yeah. Yeah. ESM is, it's been tricky. I mean, we had this problem with beat and Marco. Like once
[02:47:53]  ES build essentially is under the hood. And once you get into like a Marco file and then you try and get back into CJS, which is real for real companies,
[02:48:01]  companies like eBay. Um, for example, you, you suddenly are like, oh, ES bill doesn't know what to do with CJS. Yeah. Yeah,
[02:48:13]  for sure. There there's dead code elimination and stuff in CJS tools too. Yeah. Yes. Coffee script one. Honestly, man, he was a force. We
[02:48:23]  don't have this anymore. Like the, the, like, uh, the JavaScript. I mean, I'm hoping we get back to this point. Like the TJ
[02:48:34]  hollow hallway chucks and the Jeremy S. Kenneth is of the world. JavaScript. And even the, uh, resonate or whatever, like. Jake or JavaScript in those early
[02:48:46]  days. Had more than just frameworks. It had like superhero devs that created a whole ecosystem of libraries under, under their, their work. Um, and like back
[02:48:57] , but what was backbone underscore, um, coffee script. That's all Jeremy. Yeah. Skinness. Um, yeah. Like, don't ask me what TJ has
[02:49:09]  made. He, he made like everything. And there's, there's a few, there's a few others. Like, uh, like, like they're just,
[02:49:15]  the guy who broke everything by moving from CJS to ESM. I forget what his name is. Everyone knows him. He, he, he built half of,
[02:49:22]  he built the other half of the node libraries that TJ didn't write. Um, like, it's kind of, there's so much excitement and innovation at that time.
[02:49:32]  But I think a lot of those people kind of have moved on from JavaScript, which is fine. It's maybe it's a solid language in that sense. Maybe that
[02:49:38]  is a sign of maturity, but, um, yeah, things, things, things have kind of fallen into, into more stable patterns. So, yeah, I mean,
[02:49:48]  this stuff just takes time. I mean, we're all glad Internet Explorer is finally dead. So, you know, it won't be long before. Like it's
[02:49:56]  so much easier now than before in that sense. So maybe we have nothing to be complaining about. Yes. Yes. That's, that's the other one. Yeah.
[02:50:09]  Yeah. Yeah. No. Um, yeah, it's, it's, it's now I'm just being old and nostalgic. Right. So I, I have my
[02:50:19]  own, you know, tie to legacy. I can't really escape escape it. Um, so to speak, but, um, I still think, I think there
[02:50:27]  is a really interesting future that's unfolding right now. And, um, you know, don't worry about that. You don't have to worry about the FOMO
[02:50:36]  piece. You don't have to jump on every new framework. It's fine. It's going to take years of stuff to shift. As long as I hope when the
[02:50:46]  opportunity comes, you look at the options and you make the best decision at that time. That's all you got to do. I think, I think that like,
[02:50:55]  um, it's okay. You know, that's like this, this narrative that we have right now is probably the most unhealthy narrative on the web. There's like
[02:51:05] , there's really like, there's, there's just like part of the thinking right now is we're trying to actually unify websites and web apps. We're trying
[02:51:15]  to solve hydration and single page apps and everything into a single framework that can handle all that. can handle all that. And I appreciate that effort because having one tool to
[02:51:25]  handle the spectrum. It's important too, for companies so that they can share components. And so that they can like actually build and choose a tool. But does everyone have
[02:51:35]  to use the same framework? Like, does this all pile into us into the same bucket? Um, and I mean, in the back of the day, it didn
[02:51:49] 't. And it, I think the danger of like always, there's always something new that's going to be better than what's out there. So we have to
[02:51:59]  keep the things rolling. Otherwise we get stuck and it's fine. We can get stuck for a while, but in terms of when it's time to reevaluate,
[02:52:08]  we need to reevaluate reasonably and let things move on. And I think that's, that's the biggest danger right now. There's a singular, the more popular
[02:52:16]  something gets, you know, there's a singularity around react. And I don't get me wrong. I like what react does. And I think react is a good
[02:52:24]  choice. And I recommend people for a lot of projects right now, just because of where it is. But it's built on this whole, there can be only one
[02:52:32]  mentality. And this was not always the case in web dev. People just want stability. Companies want stability and that's fine, but I'm stuff keeps on moving. So
[02:52:46] , you know, oh, what do we got people talking about? People talking about wasm. Wasm will get there eventually. I don't know for like all
[02:53:02]  sites because there's like sort of heavy payload side. But yeah, this is solvable, right? Like eventually, I don't know how it's going to compare against
[02:53:12] , like, ultimately, I think wasm actually has a ton of interest. It might be ultimately the way JavaScript finally escapes into the server in a really powerful way.
[02:53:25]  Wouldn't it be great if our JavaScript actually could execute as efficiently as C code or something on the back end? Wasm is a double-edged sword. There
[02:53:34] 's all the Rust go people hoping that their language makes in the browser. But I think there's a race on the other side to see TypeScript make its way onto the
[02:53:43]  server in an ultra performant way. I don't necessarily think JavaScript and TypeScript for the best languages ever, but we sure have the numbers. And there's
[02:53:55]  benefits right now, like with SSR and stuff like the only way you can get certain types of optimizations realistically without like building multiple apps and a huge amount of complexity is
[02:54:05]  leveraging JavaScript on the server. Yeah, some people probably know more details about this than me, but the one thing that I've been pointing out to people is the gap
[02:54:23]  between the fastest WASM input, like the vanilla WASM and the vanilla and the framework WASM, like the fastest framework Rust thing, is bigger than the gap between the
[02:54:37]  fastest JavaScript library and vanilla JS. So even if WASM pushes forward, we'll see how much it pushes forward. It'd be interesting, like we've done so
[02:54:49]  much more, I don't want to call it micro-optimization, but we've done so much more optimization to get as close to the metal in JavaScript that I
[02:54:56]  wonder if, just the way we handle templating and all that stuff, I wonder if WASM doesn't actually necessarily, like maybe WASM's faster, but maybe the
[02:55:05]  WASM frameworks aren't. We'll have to see. At a certain point they probably will be, which is why I'm saying like, I'm giving it five
[02:55:13]  years or whatever, which means like it's just going to line up, as I said, almost perfectly. It's going to be like this change, then this change,
[02:55:19]  then this change, then this change. I just see this constant change for the next, say decade. Yeah, it sounds like some people know more about WASM and
[02:55:33]  details here. Yeah, AssemblyScript, the TypeScript thing. There's some good work going on. There's some good work going on. Some members of the solid
[02:55:41]  community are getting into this because we're looking at solids and TypeScript. If we can offer, we're kind of doing this as a two-fourth approach.
[02:55:50]  If we can make the types more sound, one of the guys who's close to solid ecosystem, he's been bringing kind of like some of the missing stuff to AssemblyScript
[02:56:03] , especially around the handling of DOM in AssemblyScript. So our thinking is that we can get solid with AssemblyScript to compile the WASM in, you know, not
[02:56:17]  right away, but in, you know, in the next little while, we can start looking at that and that maybe that's, that's our exit strategy. We'll
[02:56:24]  see either that or at least for the runtime side of things. So, I mean, it seems likely that I'll be in a place where I'm probably going to
[02:56:32]  have to like write the compiler and rust or something at some point, maybe use SWC. But on the runtime side, this seems like an interesting approach to kind of explore
[02:56:44] , but yeah. The biggest thing about this argument is, and I've seen this at large companies and stuff like Module Federation, I mean, is it's like things
[02:57:06]  like versioning and stuff. Like, not everyone uses the same version. I mean, I don't know. There's, there's so many details here that have,
[02:57:19]  that have me skeptical. Yeah. Yeah. Yeah. People talking about JS versus WASM in the chat. And yeah, it's a, it's a hot topic
[02:57:38] . But yeah, there, there, there's a lot of stuff that's going to happen before WASM becomes a player in this part. WASM is going to
[02:57:47]  continue to have more application. We're going to see it used in more different ways for specific processing. You know, I think what's going to be kind of a precurs
[02:57:57] or to that is people are using web workers more now and experimenting. We see stuff like party town from builder, but I expect to see more like offloading.
[02:58:06]  Like, like what if you have expensive computation, let's offload it to a web worker. And I think once people start building apps around those patterns of maybe offload
[02:58:15] ing to web workers, offloading to WASM starts looking more attractive for those computationally heavy things. And I think that's the natural way that it might start
[02:58:27]  seeing some player adoption on the framework side. Right. Because like with web work, you can't, you can't access a DOM already. Right. So you're already
[02:58:37]  kind of playing with patterns that create certain abstractions. I don't know. I guess we'll, I guess we'll have to see. Yeah. If there
[02:58:56] 's a will, there's a way, you know, it's funny how we entered this WASM conversation when we started here about web components. But I mean, I
[02:59:05]  think it's inevitable, right? Because web components always ask the question of the future. And as I mentioned for the future, it's kind of uncertain. So it's
[02:59:17]  kind of funny. I wonder, like, even if they're really good at something, I wonder if it's kind of like, as I said before, like Linux
[02:59:26] , like, is 2022 the year of web components? Will we be asking that question every year for the next decade? I don't know. Maybe. Yeah. Yeah.
[02:59:38]  I mean, that's the thing. When you bring up a specific technical problem, someone's going to solve it. Right. Like it's only I think when you
[02:59:48]  get to the base of the abstraction and realize like something being what it's supposed to be, because the thing that's going to kill something eventually is compromise where you lose consistency
[02:59:59] . Like if something is well designed and consistent, then at least it gets to be what it's meant to be. So at a certain point, if something is designed
[03:00:09]  and meant to be a certain way and there's limitations today, people will solve the problem to get it with enough effort or time to make it to get to where it needs
[03:00:21]  to get. But the thing you can't correct is if it's not what it's supposed to be like, if it's not like what it is, isn't
[03:00:29]  valuable. And I don't think that's the problem with, with WASM. It might be in a few years. You might see that, but I'm confident that
[03:00:36]  they'll solve any problems. See, and it was same with web components. I'm confident they solve any problems. My concern with web components is they're not what they
[03:00:43]  need to be necessarily for all the things that people think they should be. Like they are very good at specific things, but they're not everything to everyone or whatever.
[03:00:52]  So essentially the limits to web components are never changing. It's not a implementation bug. It's like literally they are what they are. But, you know, that makes
[03:01:05]  it a little bit different than, you know, what we're talking about here. Yeah, solid start stream should be coming soon-ish, maybe after the hack thing
[03:01:21] . My biggest problem is I haven't had a chance to work on docs and fill out the examples. There's a couple of API things that I really want to solidify
[03:01:26] . I told everyone that we'd be Q1 for solid start beta. And as you know, in a few days we're end of Q1, which means like
[03:01:36] , do I hit my deadline? We're, we're, we're close. Like it's usable right now. The core structures aren't changing much, but there's
[03:01:44]  still niceties, things I needed to edge out. Bugs in the core adapters that are unacceptable. Like two, two, like the two obvious of bugs.
[03:01:54]  Um, but like the pieces are all there. They're just not the way you might want to display them. So to speak, we've, we've handled parallelized
[03:02:04]  data, fetching nested routing middleware. Um, you know, stuff running only on the server versus server client, um, forms that are progressively enhanced. We
[03:02:18] 've covered, um, uh, like, you know, cookies sessions. Um, a lot of the core stuff you're going to need, right. You know, to
[03:02:33]  get started, it's just the, the, we're, we're missing some good examples, finesse docs, all those things. And while I can do that stream
[03:02:41]  and showcase on this stuff, I feel like I want to get at a place where when I showcase it, the, the, you know, the, you know,
[03:02:47]  right after the stream, I mean, maybe not right after the stream, cause it'll probably be super late wherever you are. You could just go pick it up and use
[03:02:53]  it and just be ready to go with the beta. And, um, we're just not there yet. Even if the, like the code is getting very close to
[03:03:00]  being there and the structure and, you know, you could easily use it today. I, I, I, I want that next level there. And I think this,
[03:03:09]  I'm, I just keep on pushing the stream back until I can do that, but I could demo it right away. I, I, I, I want it
[03:03:15]  to be in a place where, you know, you could just pick it up and use it. Okay. Um, okay. Yeah. I, I, I guess it
[03:03:22] 's time to, we, we, we, we, we got the chat for an extra 30 minutes. Right. I think I am going to, uh, call it
[03:03:30]  quits now. I think everyone got their word in and we've clearly digressed into a different thing. Just like the, that stream, not too long ago,
[03:03:38]  we were talking about, what is this? I can't remember what we were talking about. Was it like syntax and we started talking about edge functions for like a bunch at
[03:03:45]  the end. Um, so yeah, everyone have a good night, have a great weekend and, uh, look forward to seeing you all next week. Bye.