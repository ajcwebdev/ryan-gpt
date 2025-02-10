---
showLink: "https://www.youtube.com/watch?v=2zhYwg_nBqQ"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building Astro 3 w/ Matthew Phillips"
description: ""
publishDate: "2023-08-25"
coverImage: "https://i.ytimg.com/vi/2zhYwg_nBqQ/maxresdefault.jpg"
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

[00:00:00]  all right everyone and welcome to my stream today very excited about this one seems that whenever I have a Astro on we get to talk about exciting new things so this is
[00:00:15]  gonna be pretty cool everyone come and say hi in the chat while we get started up this is awesome hey thanks Greg that's my hope I used to I used to do this
[00:00:24]  like Friday night Pacific which as you can imagine is like the last possible time slot I guess I could have been streaming out of like Hawaii or something but like unfortunately it was
[00:00:37]  too that was pretty late in the day for it's like the next day for some people whereas this time period at least um catches a lot of people towards the end of their
[00:00:48]  days or evenings you know good way to end a week hi everyone hey awesome yeah honestly with Astro I'm I'm I'm pretty uh I'm pretty you know impressed
[00:01:07]  with the team in the fact that like obviously I experimented when it was in beta but very quickly you know I took a little bit for 1.0 but then 2.
[00:01:18] 0 wasn't short after that and 3.0 after that it's like it's going like clockwork so um they gotta be doing something right over there yeah yeah probably
[00:01:32]  I'm I'm I'm I'm I'm I'm interested to see um if the view transition API can help in some sort of way that I haven't seen yet and
[00:01:44]  I think understanding how Astro does it will will help on that side a bit the mechanism itself at least on the single page app side of things is very integratable with
[00:01:57]  I think most existing routers like it's it's funny the trend it's the transition is the thing that happens at the end of the scope like you basically don't want
[00:02:07]  to run the transition until like you want to block as least time as possible so you want you want to basically start the transition when you have everything ready to render the next
[00:02:19]  page and then end it so for that reason it fits into a very interesting slot it needs to tap into the rendering timing when we're talking about single page apps um for multi
[00:02:32] -page apps and when they get the multi-page app version of it I think it's interesting the browser will probably take care of a lot of this for you because they
[00:02:39]  already have a mechanism for that their paint holding mechanism where they wait to show the new page until they have enough content to show this is just the natural point at which to
[00:02:47]  do the transition so um yeah I'm I'm very interested in this alien how's everyone doing hey hey yeah I'm just going to go down here very quickly yeah CEO of
[00:02:58]  html I don't know I don't know who's the CEO these days right I always thought Fred was the CEO and then next thing I hear I mean Ben became
[00:03:06]  the CEO um he started replacing him at a live events and stuff so I don't know I'm not serious I'm just all right all right all right people are starting
[00:03:21]  the show up here which is good this is this is what we're going for here classic trash raid okay yeah let me see here see this is good tell me when when we
[00:03:29]  twitched okay yeah we got a raid from trash thank you very much how's everyone doing awesome awesome with a party of 362 okay well I'm just rambling here
[00:03:41]  because my stream's just starting but I feel like I'm feeling like we should uh we should get started yeah no like I literally just started the stream like two a minute ago
[00:03:54]  a couple minutes ago this is where I usually wait for people to patch their twitch re their their twitch pre-roll all right all right all right um let's let's
[00:04:06]  tell people we're live eh that might that might be good give me two seconds here while we get started we're gonna talk astro three today um astro three has not
[00:04:19]  come out yet um so this is a like a sneak preview of of what's happening um so you get to be here first to learn about astro three if this is
[00:04:30]  if this is what you're into okay let's do this uh quote tweet and we're live yeah I'm sure you guys love me just watching me uh post uh on
[00:04:48]  twitter this is I don't know people seem to like watching Theo do do that so you know all right let's go let's go indeed yeah so we we have with
[00:05:05]  us um here I'm going to introduce him one second um one of the core maintainers of astro and more than that he's actually co-creator um he was
[00:05:15]  there right at the beginning working on that original um islands uh approach that astro kind of popularized here and we have him with us today so it is not fred
[00:05:27]  with us this time um which people seem to know instead we're going to welcome matthew phillips onto the stream here hey matthew how are you doing oh
[00:05:39]  hey i'm here yes how's it going pretty good a little earlier than i was expected i was expecting to waste more time just to uh you know talking garbage while people came
[00:05:50]  and joined on but it looks like we just got rated with 362 people from trash most of them ended up leaving so you know there's that but you know for those
[00:06:02]  that chose to stay on you know good on you all right yeah no i love some of the comments coming in here way to rate a dead stream that was that was that was
[00:06:18]  that was one of my one of my favorites if only they had any idea anyway that's fine this is who's stream with this is trash history yeah okay i was on
[00:06:31]  his uh or i'm not his podcast i was on a podcast uh with him the other day oh yeah does he does so many of those things right yeah yeah no definitely
[00:06:44]  i love trash his content honestly and um his memes on twitter are top notch not that i'm a good judge of these things this is just what the young kids tell me that
[00:06:54] 's something we have in common we've been at this for uh a little while now um in web dev um matthew's been a guest on our show before um we
[00:07:04]  were talking about um one of his very um novel and unique approaches to uh building dsls around uh web with his framework corset did the name ever change or is
[00:07:15]  it still corset no i haven't changed it um yeah it's one i need to get back to uh it's been i've i've set it aside for a little
[00:07:23]  while but yeah it's something i want to get back to yeah but we're not here to talk about corset and we already got a good intro on on matthew
[00:07:30]  but matthew can still introduce himself so why don't you why don't you tell us a little bit about yourself right off the bat here yeah sure i'm uh
[00:07:36]  matthew phillips one of the co-creators of astro been with the company since the beginning um i'm the manager on platform team right now and i
[00:07:46]  am here to talk to you about astro 3 or or whatever well i am very interested in astro 3. um i'm very interested in what i saw the other
[00:07:58]  week i was just playing with some of the latest experimental features towards the tail end of astro 2. and i was you know thinking i knew what i expected and then i
[00:08:08]  looked at it and i was a little bit surprised but and that i'm talking about the view transition api um but beyond that um astro 3 has a a lot
[00:08:19]  of other things going on too right it's not just the view transition api yeah it's got it's got a lot of small things um but yeah view transition is obviously
[00:08:28]  the headline feature we've been we've done that for a while we also have images the image component is now stable so we have this for like very early adopter people people
[00:08:37]  are very in the know like we have this tendency to where we release things like very very early and just mark it as experimental and then uh by the time we actually release
[00:08:47]  them a stable they feel like old news to some people but they're actually uh you know this is the time when actually a lot of people are going to start using the image
[00:08:54]  component for real so that's probably one of the bigger ones we have actually i got a question right off the point off the bat which is oh shots fired what's the point
[00:09:03]  of the view transit shape you have only it works in one browser and other browsers aren't implementing it yet cool yeah do you think i answer that yeah let's go for
[00:09:14]  it well yeah well first off it's not true that only works in one browser i mean edge is a browser opera is a browser like fivaldi is a browser it works
[00:09:24]  in one browser engine okay that's true that's that's not false uh safari did recently express interest in the api i will say um so that's a thing uh
[00:09:38]  and then the other thing is that it is actually i would say well there's a couple things in our in our implementation we have fallback support so you can use the
[00:09:47]  same api it mostly works in safari now obviously the really cool parts don't quite work but actually i mean the real cool thing about is you know and we should talk
[00:09:56]  about this but like mpa navigation is not bad like mpa navigation is good so from that perspective this is purely a you know this is just uh what's the opposite
[00:10:09]  of graceful degradation uh uh progressive enhancement progressive enhancement yes exactly i mean there's some things like the video players that the video plays the video player example that's not progressive enhancement
[00:10:21]  like you kind of have to have that uh but again with our implementation we do have a fallback so that's what i would say i would say that this just just
[00:10:30]  makes sense better yeah i mean i haven't followed i guess as closely as you have or maybe others have but my understanding is that there there is an interest in this api
[00:10:40]  i mean chrome is as usual pushing it and they're going to put in their browsers before everyone else and maybe force everyone's hand but i feel like we've been trying
[00:10:49]  to find a solution for this for a while like even um mostly i like this this focuses on a single origin but like cross origin there's all stuff like portals and like
[00:10:59]  other mechanisms because let's face it the web at its base are web are websites that are served and you navigate between them so um this is you know it's a thing uh
[00:11:12]  it's the best way i can put it like like even if the browser i like didn't implement it you'd be implementing this at some point like i think in fact
[00:11:25]  there was an open issue even before really got on the view transition api where um nate i think was trying to implement something like this maybe a year or so ago so
[00:11:37]  like yeah like it's good it's one of those things where it's like nice that it's standardized or getting towards standardization because you like then you know right and
[00:11:46]  then you're like okay this is the api shape we can move forward with this but on the other hand i think we'd probably end up here anyway probably at some point
[00:11:54]  yeah i mean i don't know how we want to tackle this subject but like i can talk about our history and like how we got here um yeah there's also an interesting
[00:12:03]  thing to like define what view transition actually is because i think i mean for me i didn't realize like what it really was until pretty pretty recently actually yeah so i don
[00:12:16] 't know if you want to start there i think that is a great way to start because i we already got a really quick question another one i'm just gonna throw this out
[00:12:22]  here um and they're basically asking if this is like a replacement for turbo or flamethrower in your astro app uh i'm not familiar with flamethr
[00:12:33] ower but it's it's it's the same thing it's one of those like full page html swap out uh yeah there's like swap swap.js is a
[00:12:41]  is a popular one that does animations yeah i'd say pretty much a replacement for that yes yeah so that that's the that's the idea here the thing is and this
[00:12:52]  is the why it's a good lead up yeah swap is cool i'm getting from chat um this is why this lead up is actually a little bit important because people do actually
[00:13:00]  need to understand what it is and i think this is widely misunderstood um so i'm actually gonna i'm gonna i'm gonna pass that to you to to do so so go
[00:13:09]  ahead tell us a little bit about your history and like what view transitions actually even are and what they mean to you okay uh yeah let me start with the history i guess
[00:13:18]  i mean i think for us like people ask for client-side routing like very early in astro like you know like pr way pre 1.0 like from their early days
[00:13:28]  like hey i'd like to do this client-side routing uh so there's been like ideas of like oh spa mode and then like we'll just have like a boole
[00:13:36] an flag in the config and then if you do that then it's just all client-side routing and i think few transitions regions came i don't remember i mean i
[00:13:46]  mean if you want to talk about like the history of this of uh this use case as like a spec like this goes back quite a while as well like there was a spec
[00:13:57]  called portal i don't know if you remember that one um that was like kind of an iframe kind of thing but it was a new tag called portal and like you
[00:14:05]  could wait you could like promote an iframe essentially to be a full screen um and before that uh jake archibald had something called navigation transitions or something like
[00:14:15]  that uh which was another attempt at this um and maybe even go back further than that that's probably we're going back like five or six years so this problem's been explored
[00:14:26]  so when we heard about view transitions like i i knew of it personally just as like kind of the next evolutionary step of all those things in the same way that like portal
[00:14:35]  for a while was like oh this thing's gonna happen portal looks really cool and it didn't happen just the way you kind of have to be with these spec things to be
[00:14:44]  like all right well that's cool but like is it ever going to happen who knows uh so yeah i think that i was always personally like okay that's cool but like
[00:14:53]  that's for later you know what i mean and then you know you and i talked or i mean you were you have been aware of our exploration into uh client side running for
[00:15:05]  for a long time so yeah nate started on it like beginning of this year we explored several different ways to do it you know i don't know if if uh have you
[00:15:14]  started working on your your router stuff the uh the island routing yeah yeah we we we had a experimental release we actually did almost a year ago um but we kind of got
[00:15:26]  paused for a bit um and we've renewed research into that in the last month oh cool so your community is like aware of what that is and all that stuff yeah so like
[00:15:37]  we explored stuff like that and that's very different from what we landed on um and so yeah we were just like not sure if it was the right fit we were like
[00:15:47]  the island of routing approach is really cool because if you uh it didn't i didn't feel like it fit with astro very well because all of the data loading in ast
[00:16:00] ro tends to happen in the page level um and so without like changing how you do things it wasn't a great fit for us um yeah i mean the biggest thing was
[00:16:11]  like uh i was focusing very much on like okay what's the least amount i can do with each piece so it was a nested routing approach and astro nested routing
[00:16:21]  doesn't really it's like not part of the thing so to speak yeah not really so we i mean we still could wind up doing so i still think that's a great
[00:16:31]  idea i really like that a lot uh but we needed something you you know sooner than that and so yeah we did do like a micro morphing thing which is basically
[00:16:40]  just like turbo and i guess it was around that time probably like i don't know like four or five months ago we started seeing all these demos pop up with like you know
[00:16:51]  you know a lot of css people like adam argile uh maxi you see him on twitter people are like building these amazing view transition demos a lot of them were
[00:17:00]  using astro like adam maxi and adam both were and like we we weren't doing anything like we had nothing to do with that you know what i mean like you're
[00:17:09]  talking about the movies like they did a movies demo like yeah that's maxi's yeah yeah that's maxi's and so they're just using pure pure css
[00:17:18]  we're not involved whatsoever and so like that's when we really started to have the conversation like like why are we exploring these other things when people are already building these really cool
[00:17:30]  things like just by themselves like why don't we just like double down on this and like find ways to make this easier on everyone the most obvious way is like writing a router
[00:17:42]  sucks yourself so i don't i don't know what they were doing in these early demos but i'm sure it was probably i mean obviously the demos but like how can
[00:17:50]  we make something that's really like production ready so that's kind of what made us say shift to where we kind of landed on right okay yeah that that that makes sense yeah
[00:18:02]  i'm i'm pretty interested actually on the mechanical side of it um to the interesting but but before we go like two down that thing is uh i was uh i mean
[00:18:12]  i pulled up the spec i pulled up the spec on stream before actually um and i was looking at this and most of the spec talks about single page app like there's like
[00:18:23]  one little section where they're like single page slash mpa and then developers made it clear that it's important if they said it's even more important for mpas uh
[00:18:32]  which was this uh poll from jake archibald right where people are like yeah i want to see for mpas um which makes sense um i think and but the the
[00:18:44]  actual stuff for the mpas is fairly thin um so i i my understanding is and it's not it's not really important so my understanding is that you've implemented using
[00:18:55]  the single page app or they call it but the the client uh transition version of of the spec um how does does this whole thing fit into your law how does this fit into
[00:19:06]  your long-term plan here yeah so we you kind of see that code at the bottom there the document start view transition yeah that is that's that's the that's
[00:19:17]  the spa mode api yeah uh so there is a there is an mpa mode it's in chrome canary behind a flag only and it's a meta tag so instead
[00:19:27]  of writing in javascript at all you put this meta tag in your head and you've essentially enabled view transitions from that page and so if you click a link to the
[00:19:38]  next page that meta tag is going to do the routing for you essentially it you can think of it like it is a router and so our like how it fits into our
[00:19:46]  vision like we have that view transitions component um that you add to the page that's our router and so you can actually today you can use that meta tag you can still use
[00:19:57]  we have all these directives for like animation primitives you can use all those things with the meta tag you don't have to use our client-side router and so our
[00:20:06]  i just ask our vision like as that thing becomes you know continues to be developed there's things that's even even in canary form like it can't do back button
[00:20:15]  animations um it doesn't do dom persistence there's things that are missing um so i would assume like if this winds up being released like maybe you use it you know for simple
[00:20:28]  cases but for a lot of cases you'll still need the client-side javascript but i mean there are like issues for most of these things like these things are being
[00:20:36]  developed like back button there's an issue about it and so you know our hope is over time that you know eventually we can get rid of our router and you can just
[00:20:45]  use the meta tag and essentially you have everything so in a sense the the way and we haven't talked about the way of this yet but i i uh this was in
[00:20:54]  your guys's docs you obviously turned on by mode but you were like basically import view transitions and then in the head you just write this thing in your view this thing could eventually
[00:21:06]  just be that meta tag yeah yeah exactly yeah that is exactly right we actually had that in docs at one point we were like this is too confusing like no one's going to
[00:21:15]  use this for real let's let's remove it i got you okay yeah so we might want to like talk about like what view transitions actually are because okay uh just just
[00:21:26]  briefly like if you pull up the spec again and like look at the javascript api kind of you can kind of see what it really is yeah so this is the
[00:21:35]  way this way i've been thinking about it recently um thank you if you think about forget about the npa mode at all completely it's really a way to tell the
[00:21:46]  browser i want you this way to the browser i'm gonna modify the dom i want you to take a screenshot of the current state let me modify things and then i want you
[00:21:56]  to animate between those two states that's essentially all it is and so if you think about it that way like it's not really about navigation like that's the primary use case
[00:22:07]  but you can do you can do anything like you'll see demos out there of of like resorting a list or something like that you know like you know you have a
[00:22:16]  list of to-dos and you delete them you can use a view transition just to give a nice animation between that so it's kind of a replacement for um is it i
[00:22:25] 'm not i'm not super familiar with all these like animations but yeah yeah i mean in a sense uh it serves a similar role to a lot of like the like old
[00:22:35]  like react like transition group or you know solid has one but these it does it does like the flip almost i guess it doesn't quite do the flip animation but it's i
[00:22:44]  guess it's like a similar idea in that what it it does is it takes a snapshot of your current screw like when you say start view transition when you call the function internally
[00:22:56]  it's like it's almost like uh i'm just just like i mean the way they describe it they i'm pretty sure they call it a screenshot so that is the
[00:23:04]  way playground was like not loading for a second but yeah exactly like if like the what's what's the name of this api um documents start view yeah so like it's
[00:23:14]  you kind of function start view transition and then it takes a function right it's kind of like the procedure that happens here is it's like take snapshot of the screen yeah
[00:23:29]  then it's like call the user's function yeah and then it's like i guess it's more like like then you get the take snapshot like returns a snapshot object or something
[00:23:44]  yeah yeah yeah and then you like and you like if them or anything exactly and then it's like i'm just going to call it like this transition transition i'm just
[00:23:57]  not spelling today okay transition between from from snapshot to this res that i'm going to put here and to make things like a little bit yeah let's go like this this
[00:24:11]  is like the mentality it can actually be even async so technically it could be like you know if res dot then like i'm getting like a little ahead of myself you you
[00:24:21]  know like but basically you i mean i guess it's way simpler if i just write it more like this um not async await damn it i'm just not having good
[00:24:34]  today but you you can you can kind of uh yeah view it a little bit like like like this um so it's it literally this function could be anything this just looks at
[00:24:47]  the dom state i had a snap show um you you look at the you know it looks at it at the time you call this function then it does whatever work you give
[00:25:02]  it to do and then it tries to shift between those two modes that's that's what it does yeah yeah that's exactly what it is um there's more a little bit
[00:25:11]  i mean obviously there's a little bit more to it but um yeah that's essentially what it does yeah and the the so because of that you can see like it's not
[00:25:20]  really there's no there's no navigation in the logic you just wrote right so you you can use it for whatever you want yeah there is an important point here that's
[00:25:32]  not that this await doesn't capture properly is um between this and this they basically block all rendering in the browser like the browser's not blocked from like a event queue standpoint i
[00:25:48]  don't believe but like there is no they will not paint the page between between these two things which is important it means that you don't really ever want this to be
[00:25:58]  asynchronous like it can be if it has to be like even like an api that does promises and immediately but you do not want to load your data in this as i said
[00:26:10]  even in mpa mode it doesn't start the snapshot right when you click the link it actually does this in the background right before it's going to paint the new page
[00:26:23]  yeah so um yeah just small minor note anyway yeah so like the when you call a document start view transition it returns and transition object which that object has like a done promise on
[00:26:39]  it it has a couple other things um there's a really great web uh is it what is the yeah there's a great web.dev article i can send a link
[00:26:49]  that explains all of it yeah and this all makes sense if you actually look at it because like it's if you treat it as an asic function then the promise of it
[00:26:57]  like this actually almost works as the api that's interesting i'm i'm sure the actual internal implementation is a lot more complicated than this but yeah so i've learned
[00:27:07]  a lot about like how it works and there's the really coolest thing about um about view transitions is the way that like an element you can morph elements like you have like for
[00:27:19]  example think of like a blog uh a list of blog posts and you have like an image for a particular blog post right and then you click a link to go to the blog
[00:27:28]  post page you can animate that image like from where it is in the list up right you can morph anything right it's like you can have totally two totally separate elements and
[00:27:38]  it will morph morph them right yeah and for the longest time when i was working on this i was like that's some type of like magic stuff happening right i was like i
[00:27:47]  don't know what that is like but it's actually just regular css which is really cool which means you can actually we haven't done this yet but you can get
[00:27:56]  pretty close to simulating this in just regular css which means like in safari and stuff um yeah if you look at the actual spec like it tells you the animations that
[00:28:07]  it does yeah what it will do is like if you have a particular element we can dive into like the api but you mark what you do is you mark elements to be
[00:28:16]  like if you want to animate a specific element you you give them a view transition name in css um and that's how it's able to like animate between those but
[00:28:25]  what it does is it like gets the position of that element on the old page and it gets the position of that new page and it like uses that just to create a trans
[00:28:33]  like a like a transform animation for um so it's all right there css is i guess what i would say yeah right yeah that's what you're talking about yeah
[00:28:43]  yeah that's that's that that is definitely very cool how it can just like it basically treats them as the same element like they're not but it's like it's like
[00:28:55]  the this one has to go from a to b like this one becomes this one um okay and they can be like like i said totally two totally different elements yeah that's
[00:29:05]  that's very very very cool um and yeah i i think this api alone is very interesting in in itself um because you can make like really cool kind of animated demos and
[00:29:18]  stuff very easily with basically browser built-in stuff but you as we as we as you already said like to use this in astro um suddenly um well not something i
[00:29:31]  mean you could use it on its own whatever but you to actually do the the navigation routing part that people seem to care about um you you now need to do something for client
[00:29:41] -side routing right so yeah that that was that was part of your work here right like that you work on that specifically the the routing yeah yeah i mean that's like
[00:29:53]  most of the work i would say right there's other there's other parts of it we have those directives that's not really related to the router at all um i guess
[00:30:01]  transition persist is but uh the animation ones are not we wanted so i mean i can just talk about that briefly or not briefly we have forever don't we um transition so one
[00:30:13]  thing that's difficult in the spec is there's a view transition name which is marked to an element yeah but you can't you can't like you can't just well
[00:30:22]  i shouldn't say it you can't just use a class name to like do an animation like let's say you want to do a slide animation you can't just add a
[00:30:29]  slide to a particular to like a class to the element because you're really animating on the root on the html element using these pseudo selectors so that's what
[00:30:40]  i think yeah the view transition name has to be unique that's one thing which is kind of you know can be annoying so we will like auto generate a name for you
[00:30:49]  a hash name um if you you can provide you know a name yourself like if you're if it's the same exact element if like you you're using a common layout so
[00:30:58]  it's going to be the exact same element on both pages you don't really need to give it a name we'll just auto generate one but if you're doing something weird
[00:31:05]  which is like transitioning two different elements like we don't know that those are the same element obviously so you want to give that a name yourself right um yeah but even even that
[00:31:15]  like to you to do like an animation you always need to like have a name right and then you need to animate the root that's the the view transition old and new
[00:31:26]  uh pseudo selectors uh so like running the css is a little bit cumbersome yourself and there's stuff you really can't do i think um like if let's
[00:31:36]  say you have a list of like you're generating a list from like a list of blog posts or something dynamic well if you want to do an animation between the list to
[00:31:45]  like the the blog post page like you have to have a name right so like what do you like how are you gonna how are you gonna write a css you can't
[00:31:54]  like write css for a name for dynamic data um so we have a way to dynamically we will dynamically generate the css for you like you basically just give us the name
[00:32:06]  we'll generate the css the underlying css for you um what it's there's there's a mention did the has is the api the same that that's
[00:32:15]  in this experimental docs or have you guys updated the api here just so i know while i'm showing this stuff uh it's mostly the same the the rc version has
[00:32:24]  um like there's like one animation name that's changed and the the event names are different in the rc as well but otherwise it's the same yeah i might have
[00:32:33]  a link to the okay yeah because i was just looking here these are the these are directives you were talking about transition name directives um uh but you were mentioning you auto
[00:32:45]  generate them does that mean you have to auto generate it for every single element or like like how do you choose what to auto generate because i noticed when i turned this mode on
[00:32:55]  in my previous demo i didn't see any auto generated stuff i didn't think i saw at least um yeah so you don't have to so we only generate a name
[00:33:04]  when you like use the transition animate uh directive oh okay so like if if you don't if you just use view transitions you do nothing else you get like this fade effect on
[00:33:15]  the html element because there's always there's always a like there's a there's a route is like a built-in to the browser it's a built-
[00:33:24] in view transitioning right you always get this fade effect by default but if you want to like animate a specific element like you want to animate you know the main tag or something
[00:33:36]  you need to use transition animate slide and that's when we generate that's when we generate a name for i i understand now yeah so transition animate slide in this example presumably the
[00:33:46]  other page uh yeah i guess the other page will have well the same thing yeah yeah it'll main it'll have a main in the same location and i guess i guess
[00:33:57]  and yeah it's like location based um is the algorithm yeah it's not we're still you know working on that hashing algorithms are cool okay i probably can't post a
[00:34:10]  link here but i can probably update you frog's preview okay okay okay um how yeah sarah i don't know how you're going to provide that without uh without posting
[00:34:23]  it maybe she's sending it to me okay okay that that that is interesting yeah because um yeah i i i was playing with this on stream a couple weeks back and we
[00:34:40]  definitely uh um i i i was definitely have had the opportunity to try some of these things i did not try animate i was mostly focused on uh name and persist um but this
[00:34:57]  is yes i mean the animate the animates like our idea well it's difficult to share animations currently with view transitions because you have to like it's basically copy and paste
[00:35:10]  a block of css and like change the name right um they're working on an improvement to that but currently it's difficult so like one of the reasons to do that is
[00:35:17]  so you could like do something like this because what we wind up actually do is we inline the inline a style tag with the css when you do this um
[00:35:25]  so that that's kind of the motivation for this but but you know for a lot of the time you just want to get the default animation like the default animation is very nice
[00:35:35]  actually so yeah i i thought so myself actually i i yeah i i've got my hacker news demo where i got the play with this a little bit um so i and
[00:35:48]  i stumbled through but i think i i got i think we got there um by the end at least the only problem is the hacker news doesn't have any really cool persist uh
[00:35:57]  example i was just really happy that the header was still the header i would i think the problem was and actually i'll show i could probably show you here i think i
[00:36:07]  still have this here um let's see here actually i mean it might be interesting um i don't know if anyone else can is it possible for me to load the latest ast
[00:36:19] ro like is it the an rc got uh got released um today right yeah yeah we just did an rc yeah uh just just released like two hours ago so it's
[00:36:32]  it's uh oh right so this is like the kind of thing that'll be like perfectly broken to try live on stream probably for the first time yeah okay that's that
[00:36:39]  sounds that sounds amazing that's exactly what i'm looking for here i like i like i like getting stuff so hot off the press so to speak that it like doesn't work
[00:36:48]  quite properly and then we can talk about it okay sweet so there's actually a new reference docs and what i love about this one now is bye-bye experimental um yeah it
[00:36:59]  does not say experimental so you with 3.0 this is this is legit um like this is implied we're putting we're putting our weight behind this okay sweet so so
[00:37:09]  far this looks the same so my guess is i just need to change i might need to change the config actually yeah let's wait you wanna can we see what uh yeah how
[00:37:21]  do i find this rc should i just be rc 7 is what i'm looking for okay uh you can just npm install astro at rc okay yeah
[00:37:32]  right if you wanna if you wanna manually update you npm it's still yeah astro yeah astro but do do i feel like the other stuff will be fine uh
[00:37:44]  you probably need one for solid let me double check see if that tag works i mean we can yeah i'm pretty sure you want one for solid um all right i'm the
[00:37:58]  solid or solid is r is rc3 all right see if this does what i want it does what i wanted to do so there is a change to the the solid
[00:38:09]  js uh integration as well interesting yeah i wonder if uh do you want can we talk about that for a moment um just just yeah yeah well this installs um what what is
[00:38:22]  the new thing in the integration so all right so you know when astro first came out like it was it was pretty unusual to have multiple frameworks in the same project right
[00:38:33]  like the fact that you could have multiple framework components and then it was even more unusual that you could have multiple jsx and so at the time like and even now like it
[00:38:47] 's not great right like it's your types are going to be messed up like there's i mean uh uh maybe some of that stuff has been fixed but essentially what we had
[00:38:56]  to do is we had to write our own battle plugins and like make everything play nice together um and that you actually ran into that i remember a while back when you were
[00:39:05]  like trying to use um i can't remember what you were trying to use but you were you run into the problem where it didn't work so essentially what's new is like
[00:39:13]  we got rid of all that uh because the underlying v plugins are all like way way better now um and so like if you want to use multiple gss frameworks now is
[00:39:25]  like there's an include config you used to for each of the plugins and you say include and you give it a glob of like all my solid components are in this folder and
[00:39:34]  all of my graph components are in this folder gotcha and you and that like tells the it tells the compiler like which things to compile you know the solid versus react or whatever
[00:39:44]  else uh so yeah if you look at the integration now like it's it's it's pretty small it's not doing nearly as much as you used to so are we
[00:39:53]  are we are we are on branch uh means good yeah i mean it's good okay because i was like secretly trying to see uh what the version is because it did not our
[00:40:04]  at rc didn't help me i'm okay let's try let's try let's try this one let's see if i if i can find it uh the little
[00:40:12]  hat won't help me much here but okay i'm just gonna mpmi okay so maybe this hasn't been or no this is just conflicting stuff because i i it
[00:40:31] 's almost like i just need to tell it to shut up i think okay because it's now it's complaining about ask uh but netlify and and well we don't
[00:40:38]  need that and fly right now all right i can't uh these comments and package json node this is this is this okay so node is is six six zero zero r
[00:40:51] c one all right all right now install all right show me your config file i wonder if we'll have to update anything there yeah well uh you should be quiet in that i
[00:41:12]  think you're good yeah get rid of it's not experimental right yeah so is it just view transitions true no it just it just does it well you have to use use
[00:41:24]  the tag right right but you don't have to opt into it like that it's just like the default okay well that's nice yeah okay like using the using the router is
[00:41:34]  opting in right because if you don't do that then what is there to do yeah all i did was i went to my layout file and then i just was like
[00:41:42]  bam right this is actually i'll remove this first actually i mean that's a i don't know i don't know what your header looks like but yeah that's a decent
[00:41:50]  use case one use case it's like not really you know stateful really but i mean i guess it is stateful is like if you have like a sidebar with you
[00:41:57]  know a scroll bar like you want to keep your scroll state will persist like exactly yeah and and this this is the this was the thing the header is like the same on
[00:42:08]  all the pages i mean i i can just was uh uh what am i here it's funny i'm trying to remember if i'm using like npm or whatever okay it
[00:42:16]  doesn't really matter for when i run it what is it again uh astro uses veed style right serve dev yeah dev okay yep noticing is not supported it's fine it
[00:42:28] 's all good it's good i i keep on this is my fault i found out on stream the other day that i think it was on stream that my mbm
[00:42:35]  sucks um because i've updated like if i if i go mbm uh list or lists sorry we we have 18 here i maybe maybe i just i'm so out of
[00:42:49]  date with mbm that i don't even actually see look it's even telling me that default is 18 yet every time i open the window i'm on 16.
[00:42:57]  is it because is this is the uh the package json specifies 16 is that why no no no this is just this is just i'm i mean okay let's let
[00:43:10]  let's see if this is just me being an idiot and like i haven't opened a new terminal since that happened you know you know this can happen no i don't
[00:43:19]  know so use 18 whatever so so annoying anyways it's fine it's fine i'll figure it out one day um yeah let's do this uh mbm run dev
[00:43:33]  okay yeah use vault as well can i thank you pierce by devops it's like literally getting working how to use node yeah no i i've been hearing this a lot
[00:43:51]  uh the question is yeah yeah astro is rc7 someone was asking that it was just the different packages themselves have other ones all right okay cool now this has started
[00:44:13]  on point port four three whatever two one and i'm gonna swap here pull over our example which looks like i actually zoomed in i don't know why i zoomed
[00:44:24]  in i think i think i zoomed in to try and like show stuff off but you see this header it's persistent first of all i've made this hacker news demo a
[00:44:30]  bunch right oh man see see none of this stuff just doing nothing but literally putting the like i did do that one other thing you pointed out but if you look my changes in
[00:44:42]  this file i have that transition persist i don't actually even need this for like starting point here i literally just go into my project add view transitions put it in my layout
[00:44:51]  nothing else has changed and this is just the experience you suddenly get like suddenly when you're moving between pages it's it's like that right i mean not that the old thing
[00:45:03]  was bad at all i can comment this out and you'll see what i'm saying let's refresh i just i never trust now when i go this is what it was
[00:45:12]  before look like there's no animation but do you see any white flickering i i there yeah can you explain that because i was trying to explain that to someone uh like the
[00:45:23]  way that browsers have improved mpa nav like yeah i want to understand that better yeah i mean i i i've i've been caught calling it paint holding and i mentioned
[00:45:33]  it a few times during the stream and i never actually explained it they they do something again it's complicated on terms of heuristics but actually relatively simple to understand in that
[00:45:45]  they just hold the the current page there and then like when you go to render it happens in multiple phases right like the the there's the rendering and then there's like
[00:45:57]  um you know layout calculations of paint right if you if you've ever gone into like uh chrome dev tools damn it i'm on the wrong window selected sorry one second so when
[00:46:06]  you click a link it's not it's not screenshotting and like freezing on you is it no not to not to not to my my knowledge at all i'd sometimes
[00:46:15]  you should be able to click on another link while while it's you know in flight right yeah i i don't i try to remember if that actually makes a difference you have
[00:46:22]  to like slow down your network a lot to see if it actually will interrupt it or do something but yes you can definitely like the click happens it registers the click um and you
[00:46:32]  know you have all that classical before page unloading javascript but they they actually right before um yeah okay let's just profile this for a second um let me just
[00:46:44]  reload the page it's happened so fast you don't even see it um actually maybe maybe it didn't actually reload i'll do it this way yeah there we go reload the
[00:46:54]  page sweet now if you if you ever when people show this bottom-up stuff there's like you can see that there's a difference between loading scripting rendering and painting so
[00:47:07]  they have heuristics based on the rendering to know that hey the page has enough content that's been rendered that means that we feel that we can proceed with actually painting it
[00:47:23]  which means that for something like um header that like stays pretty static there or like you know html that's coming in all synchronously like it's unless like something
[00:47:35]  really slows it down for the most part the page is just going to be there when you go to the next link right like this is never this is hasn't been a concern
[00:47:44]  with the mpas because i click the link they're fetching the stuff page in the background and then they're like but you know in this case of an mpa i
[00:47:51]  mean you can see it over the network tab let's go doc and i click next like it's just some html some stuff like there's nothing fancy here they
[00:48:01]  just they just get it and they show it so that is very simple to understand it is tricky from you know like a heuristics like how do they know how much to
[00:48:10]  wait for paint and there's a whole bunch of discussions and best practices there i've watched some talks i am not expert on the topic of like the specific heuristics but
[00:48:19]  i've definitely seen some chrome team people do you know talks and get deep into those heuristics um for the most part they haven't really mattered to us i think
[00:48:28]  with the view transition api it reopens those uh conversations again so i think that that might be a time to like get more familiar with it but the the reason i always
[00:48:38]  loved this kind of thing was i mean i don't think i have it offhand um you know where i'm going i i can't do a whole stream without mentioning
[00:48:48]  marco um actually you know i i can just go to github and get it github um search marco hacker news um and this is not the marco
[00:49:01]  6 one this is like the marco 2017 one yeah okay let's see here um this page streams see that silly loading indicator see so it comes in this is an m
[00:49:13] pa but one of the show you is like lifting the ui sometimes can be more jarring obviously like showing the loading state you can pretend there's like a nicer loading indicator
[00:49:26]  but stuff like streaming has made it possible with mpas to because the the the thing with uh with a mpa is you're doing all the data fetching on the server
[00:49:38]  presumably so the the paint hold is pretty good but you don't get a loading indicator right like you like this isn't taking that long the load you can see the browser
[00:49:48]  is giving me a loading indicator see but like you know so visually not distracting but it does kind of pause for a moment one of the coolest things uh that was about streaming um
[00:50:00]  for example with an mpa because again watch the spinner is that because it can send the top of the document back like in the header or like stuff so immediately um essentially
[00:50:10]  you basically didn't wait got the html very fast and then you got a loading indicator for stuff coming in so it kind of feels like a single page app already this
[00:50:19]  is no view transition api this is this is literally just an mpa um is it it's out of order streaming yeah this this is out of order streaming in in
[00:50:29]  this case um but like uh yeah i don't think did i not make the story stream in no i didn't okay but my my point is that like mpa navigation has
[00:50:41]  actually been in a decently good place other than the ability to animate like to crossfades it's been in a good place for a long time like this like whether
[00:50:53]  it's like not basically not visual visibly noticeable and let's face it here even in single page apps um animations have never been like because of the declarative nature animations are
[00:51:05]  kind of uh often like transitions actually can be done declaratively and stuff like css but because of like you need an extra layer uh getting into declarative frameworks that i always
[00:51:16]  felt animate like back in the jquery days like in the early vanilla js everyone was like swapping stuff in and it was actually like pretty active when we moved to
[00:51:25]  you know the more uh common front end frameworks i feel i feel like transitions kind of got like a back seat part of it is fashion obviously but i think part of it is
[00:51:33]  just like um the declarative nature required special libraries and special uses to make it easier um so the funniest thing is for a long time period through i say the mid 2010
[00:51:44] s uh 2010s like unless the page load is really long and it streaming could mitigate this by giving you know like loading indicators and stuff while the content like this page is actually
[00:51:56]  like 90 content so this is like the worst case scenario picture if like you you know you had something that was like twitter uh or whatever like you know where you like i
[00:52:07] 'm on my home page and i'm just tabbing between these two tabs like this this is available this is available and then i stream in this you know like you can get
[00:52:18]  you could get pretty good experiences in mpas already um this on the animation side is just that like little thing you couldn't do before which is really nice obviously state yeah yeah
[00:52:31]  obviously there's other benefits it was just i i this is this is the power of paint holding like in this case it paint holds up until it realizes that like it's
[00:52:42]  rendered the shell of the app and then it shows it with the loading indicator and streams in the rest so there's the browser is pretty cool at how those heuristics make
[00:52:52]  you know different types of mpa experiences you know different like work quite nicely that you know you're not actually necessarily just on pure navigation standpoint yeah so i wonder wonder like
[00:53:05]  you i've heard a lot of people that have said like well i just i never want to go back to mpa navigation like i just want to do client side you know
[00:53:13]  routing always uh doesn't matter i like it i've heard so few people say this i wonder how how much of it is because they're remembering the ux and it
[00:53:22] 's ux based yeah remembering their own experience from you know 10 years back or whatever oh man and it was bad because navigation is one thing picture it's like interactivity like
[00:53:32]  picture every freaking drop down list when you went back to the server river and you like you do that like i mean that was the old experience you'd go try i i
[00:53:44]  use the same example every time but i mean you've been you've booked flights before everyone's done this or booked a hotel and you you know you're like they're always
[00:53:53]  like what country you're going to what city you're going to what's the dates all you know all this kind of stuff and it used to be because those data sets
[00:54:01]  are like too large or whatever like you basically have to select something to load the next set to fill the next the cascading drop down sit scenario and yeah it used to
[00:54:10]  be like choose white back and then like oh choose white like it was it was kind of brutal um so yeah i it's been a long time since that was the experience
[00:54:26]  but the that drop down scenario still presented a difficult challenge um because you wanted to persist the state of the other drop downs like like everything that the end users already filled out when
[00:54:42]  you were going back and forth on the page right so state persistence um in my opinion like they solved it back then but they solved them really quite often ugly ways where you're
[00:54:53]  serializing huge chunks of data back and forth like you like basically change the drop down then you have to tell the server you know the current state of the client so that
[00:55:00]  it could render it in the right way and then they'd have to send it back to the to the client with that information so you you weren't just sending pages you're
[00:55:08]  sending like the state of the application because neither side took ownership um so like i think i think state persistence might have actually been the tricky part um and we focus too much
[00:55:26]  on the animation or the navigation aspect um to be fair we've lost matthew it looks like um hmm i hope he will be back soon unless i'm the one who
[00:55:37] 's been disconnected people say something chat so i know i know i know i'm alive are we are we still live something thank you thank you all right okay well let's
[00:55:57]  let's hope we get matthew back here um let's let's let's look a bit more um after you transition we're getting to the really the the really
[00:56:08]  uh interesting part yeah thank you thank you chat for being live yourselves um getting to the very interesting part because what i was leading up to is if it's not the anime if
[00:56:26]  the animations are nice but not necessary let's say and if the um you know like as you're saying you there's different ways to address the the navigation i mean i
[00:56:41]  gotta i gotta say let me switch back to the to this this this this this feels a lot this feels a lot nicer right here is this a joke or is this uh
[00:57:03]  but yeah like this this feels and looks nicer the thing is you can actually combine both techniques in a sense like you could probably like in some cases stream in some cases transition
[00:57:16]  and like depends on what kind of experience you want the thing that we we haven't talked about yet today and i think is um probably um how should i put it there's
[00:57:32]  the persistent state which is an aspect here and then the other aspect obviously is that a lot of things that we hear a lot of complaints about uh being expensive to load aren
[00:57:43] 't the framework or the rendering but like analytics and uh stuff uh like there's a huge amount of analytics code that's actually blocking that's why there's things like party town
[00:57:53]  even exist um it's always interesting with ebay's case because like if you we benchmark the raw marco apps and get like incredible performance but then like when you put it
[00:58:05]  out to production like there's a certain reality at the face when like all the ads come in and ebay has tricks to defer the stuff kind of like party town maybe
[00:58:13]  like an older version of that maybe it's slightly less effective but like it's it's like a very different experience when you test the mpa with or without um analytics so
[00:58:24]  to speak that being said a lot of times for e-commerce the most important thing that matters that matters is that it's not the next page navigation it's how fast
[00:58:42]  this loads that that is actually what matters which means that you're going to have to hit that analytics hit the first time anyways um so like there's there's like the the
[00:59:00]  navigation after the fact is not nearly as important so to speak just just to throw that out there in perspective i've got a question for chad i don't get something
[00:59:10]  can you persist your whole html but update just one thing like client-side routing and i mean literally not updating anything except the one part of the html
[00:59:29]  the thing is the thing is client-side routing doesn't usually do that i have to talk about it like the client-side javascript framework might update one part of
[00:59:39]  the html client-side routing like let's pick an app with client-side routing if i'm routing yeah sure i'm not updating this but i am updating a
[00:59:48]  large chunk thing like of the ui like i think i i i think the thing here to consider is routing at least by what i'm talking about here is the big
[01:00:02]  changes like when you are moving page to page they're like nested routing is interesting and a great technique that we use in a lot of client-side libraries because we're
[01:00:11]  recognizing that we don't need to do the whole thing only the partial right and you could apply yeah it's interesting i i feel like the page uh this view transition ap
[01:00:24] i is kind of like the inverse i mean sorry i shouldn't say the wrong i said the wrong the view transition api itself has nothing to do with routing so in in
[01:00:33]  a sense you could do a partial change it's the mechanism of the routing like you could use this with um nested routing if the if the router only swapped the ht
[01:00:46] ml partial of the part of the page is is the way that i'm going to say it because the view transition is just between two states it has nothing to do with
[01:00:54]  the routing itself generally speaking the approach astro is doing i believe is page level um you know it keeps the mpa mentality a little cleaner and for a lot of pages as
[01:01:05]  i said if you need something smaller on the page just to update you're just going to use the client-side javascript that's why astro is such a
[01:01:12]  great uh platform target because you get to author your code in one sort of way right this is this is a astro component this is an astro component this is a solid
[01:01:24]  component it's a little bit different but you still see this like jsx and all of them so you keep this declarative model as you go about and build your app
[01:01:34]  and then like switching between javascript front-end only interactions like this toggle and the back-end stuff feels very natural it's not like something like i need a second
[01:01:46]  uh like framework you do but the declarative nature and the similarities of the like jsx and stuff make this feel a lot more natural i i would say than a situation where
[01:01:58]  you kind of have to change the paradigm the the clever thing about astro is that the shared parts the things that happen on both client and server are allowed to be your
[01:02:07]  javascript framework so that they keep the same language because javascript is the only thing that runs in the browser a different approach that um doesn't do that means that
[01:02:18]  when you have you know like a back-end centric approach maybe something like htmx it means that when you switch to doing the highly i want to keep
[01:02:28]  this only on the client type interactions you're in a different world anyway all right hopefully matt is on his yeah his internet dropped and he's working on it okay that's that
[01:02:44] 's that's perfectly fine um i i can still he sent me a message a few minutes ago i i'm going to uh i'm going to see if i can talk
[01:02:54]  we'll talk a little bit more uh i'm gonna ask a couple more questions and then um if we don't get mapped back right away there's a couple other things that
[01:03:03]  i want to talk about in the same vein um okay what are the downsides of astro with this release um can we do apps that work like spawn now for a new
[01:03:15]  transaction it depends on what this is where i was getting at it depends um what you consider a single page app i think the answer is and i hope that matt comes back
[01:03:27]  to to talk to us a little bit more about this is there's a lot of capability that comes with this api can i can i actually show you show you the the
[01:03:38]  thing that i didn't let let me do something here unfortunately we don't have a good example but what i what i had before on this page was transition persist what transition
[01:03:55]  persist means is when i go to this this page and i switch between these tabs right like this this header here is exactly the same dom element it did not use the new
[01:04:13]  one like astro itself i mean let's let's i wonder if we can see the request over the network let's let's take a look here let's let's
[01:04:23]  swap the pages okay so i'm seeing yeah i am seeing what looks like just straight up html request almost like a brand new page if you look here i am going
[01:04:40]  to see the header rendered again every time on the server right so new page so it's kind of like your mpa you see the header if i go to the next
[01:04:50]  one different one you're gonna see the header again right here where is it scroll down here is the header again it's it's it's in here however if i go to
[01:05:01]  the console and um actually you know we got matt back right now we can we can talk a bit about this together um about that yeah um where am i if if i
[01:05:16]  was just showing persist for a moment um i was i was showing that like when astro renders the new page it looks like like it looks almost like the initial page load
[01:05:25]  like if i go to the network here like you see basically the the page again but if i go to here and i inspect this element and i find the header here dollar
[01:05:40]  sign zero dollar sign zero um and i'm just gonna you know put something special on for the stream like astro is cool okay and let's make it let's just make
[01:05:55]  this true okay um when i swap between the next page even though we sent the whole page from the server if i go and look at this header element again now it's
[01:06:10]  right here and look in my uh console and dollar sign zero look astro is cool is here so we did not lose this and you might be thinking yourself okay yeah so
[01:06:25]  that's cool like video player between pages stays but um it also means dom references can persist um in in theory right which means that see a lot of client client side libraries like
[01:06:39]  uh what they do when they load up is they hydrate so they they uh they render um on server and then they they basically absorb these dom elements now some work on
[01:06:50]  diffing but they keep usually their own like like their there's like their own references to the dom elements so if you actually replace it with a new page and then like say
[01:07:02]  hey javascript framework do your work they're gonna get really confused it's not going to work properly however if you can persist the elements between the pages then the client
[01:07:12]  component goes yeah these are my elements like it never lost the references it's the same component it's sitting there in space so that means that if you had an island on both
[01:07:24]  of these pages not just a dom element but an island on both these pages it should be possible since it keeps its internal references that it will be able to be just pick
[01:07:33]  off where it left if you change the props coming in you know that's what the diff handles then you you literally will keep the same even though it could be nested somewhere
[01:07:44]  in the view re-rendered the whole page on the html you can keep that island being the exact same instance of the island between page navigations i got that
[01:07:51]  right right yeah like our an island in astros is is a custom element so it's it's it's basically the same mechanism it's just it's a different dom
[01:08:02]  note so that one just gets moved over what happens if you like open up the elements panel for like the the persistent one yeah uh there you see that data attribute that's like
[01:08:14]  that's what's getting matched between the different pages um and that's how the swap happens yeah um okay so so there's a question i don't know if this is
[01:08:28]  where you're going but like what happens to a new state from the new page for like uh for an island like does the does the new state come over or is it not
[01:08:37]  come over is that where you're heading well yeah i mean yeah exactly what i what i was suggesting here is that if you can persist the dom elements the and the page never
[01:08:48]  unloads then i mean there is the mpa one where this is probably more complicated you have to wait find a way of persisting it maybe something against the element but
[01:08:59]  if you're never unloading the javascript here as long as the the component has references to the exact same elements i think this just actually works unless there's some compl
[01:09:09] ication that i'm missing oh yeah in general yes in general it just kind of works yes yeah it's the exact same dom node all of your javascript references to
[01:09:20]  that or you know it's the same note so do you know do you know what the yeah so the tricky question sorry the trickier one that i was trying to get to
[01:09:28]  is when i'm looking at this and if i'm my i'm just gonna scroll down here somewhere let's prettify it so i can see some of this stuff okay
[01:09:39]  i'm gonna go into a page that has client components i'm gonna go here that might be too many let's do 56. um and i'm gonna go here and if
[01:09:54]  i if i go here now i have an astro island right this is what astro and i see that it's solid render id so it has an id beautiful i'm
[01:10:02]  glad you guys implemented that i've been wanting that okay um you have the source location of the code for it um where it's exported from so this is all the information
[01:10:13]  of how to pull the code in you have the information for the renderer so that where that code is you have the props this has no props very intentionally because i did not
[01:10:24]  want to serialize data there's no double data in this example for those who have never seen this demo you're gonna see that this i mean astro doesn't have
[01:10:35]  like next data but like when salt like it's it's possible that you need to serialize data for this page but because astro is the one who's rendering all of
[01:10:48]  these and we never pass the stories through as props this is a little trick here we actually if if i look at a comment component it's it wraps um this mapping that
[01:11:00]  happens in an astro component so it never the comment never gets any props which means that it never passes the data through which means astro never needs to serialize it we
[01:11:10]  solve the the the double data problem effectively in this demo because this like i'm not a kde user will only a pay appear on the page once as part of the
[01:11:20]  markup and never as a props um just my little note on the props being empty yeah which is incredible because it like halves the size of the output of the html
[01:11:29]  on a page that has like hundreds of comments and stuff like none this is this is this is sent only as markup there's no like as i said next json for
[01:11:38]  this stuff there just doesn't need to be um and then yeah there's some new stuff i don't see but basically the serialized the state the state here into into
[01:11:48]  this island um and this is what this is what you're getting at right it's like a web component so essentially like if you persist this island i i don't have an
[01:11:57]  example for that right now but if you persisted this island in theory then like you still have the island which means you still have all the capability you don't have to do
[01:12:07]  anything special i guess my interesting uh question here is is and is astro does like i understand the simple state persistence here i hope people are still following along um you know
[01:12:22]  like you it's possible to keep the same element on the same page but what about global state like how how does that work in after i know people use sometimes like the frameworks
[01:12:35]  all meant mechanisms like signals some people use nano stores right yeah i mean i don't know how much people are using those things to be honest but yeah uh so i mean
[01:12:47]  i'm gonna have to think through this this together probably but how would you set up a nano store or set up something like this uh you would have your component like let
[01:13:00] 's say it was signals yeah you have you'd have a common dependency between islands right yeah and that would have a signal that you both used or something like that right yeah yeah
[01:13:11]  exactly you would you would just kind of put it out there between the two islands another way you could you could do it is you could uh i'm trying to think of
[01:13:20]  like yeah you could put i guess you could put it between two islands as like a singleton that just gets imported um that's what i was saying it's just a simple
[01:13:29]  example so like javascript can't be unloaded right like once it's in memory it's in memory so like we don't do anything there's nothing we do
[01:13:38]  we can do about that right so yeah that makes that makes sense to me yeah and another another one you can do is um i've done this before in apps i've actually
[01:13:51]  just made a solid component even though like i could have just it's kind of silly but yeah i guess the component isn't really necessary i just made one so that like it
[01:14:00]  actually like i knew that it was always loaded first like i could make the other ones i like load idle but i made one that was eager and that one referenced the location
[01:14:09]  so to speak you know like little little little tricks like that um i've even done stuff similar to context uh here but let's go back to the simple case where we basically
[01:14:21]  inside our client component do something like uh import you know count or something um and this count is from some kind of file essentially account signal yeah exactly yeah and then that's
[01:14:36]  gonna that's gonna that's gonna be persistent even if you don't use persist right right exactly yeah yeah as soon as you have client-side routing so immediately you get that
[01:14:46]  kind of benefit i'm trying to think of where i can do it in a i'm trying to think of where i want to put it in a because i i don't
[01:14:52]  want to mess with the hacker news but i think i need to we need to show this uh i feel like maybe i just need to come up with like a new page
[01:15:00]  i'm gonna make a new file here and we're gonna just call it like test dot astro and this hopefully will override anything else that we're doing here um we don
[01:15:10] 't need the layout for test dot astro this is just like a i just don't feel like starting a new project now that we have all the depth set so um i
[01:15:17] 'm just going to do something very simple in in this project uh i forget do i need the the separator if it's there's nothing else in here i probably don
[01:15:28] 't know so i'm gonna put we're gonna make a counter component um yeah let's make a counter component and now i do need as soon as i say that it
[01:15:40] 's like oh yeah import um counter what i have to put the it's above two isn't it yeah it's been a while sorry uh it's on both sides okay sweet
[01:15:55]  um import counter from it's funny because i haven't like written yet from um components counter okay and or not just uh new file counter dot jsx see this is the
[01:16:19]  stuff you're supposed to prep ahead of time but i had no clue i was going to do this today so let's just you know what let's go i i'm like
[01:16:26]  so lazy i'm literally just going to go here and just be like all right all right all right there we go let's just move this over here so yeah is it
[01:16:41]  actually already and then we just need our yeah we need our important statements um it's actually literally just one okay let's just do that okay now assuming uh this is all
[01:16:59]  good yay okay not maybe not yay i got ahead of myself uh did you forget a client directive yes i did exactly yes um let's go back to test astro and do
[01:17:15]  client um load whatever should we get rid of that fred's always always wanted to get rid of that yeah um it it's hard to say i like that it's
[01:17:30]  opt-in philosophically okay now we've got our working counter right now let's take this to the next level let's add a new folder and call it um i don
[01:17:43] 't know lib i don't i'm like this is oh does it already exist i'm the worst okay we have api let's make a new file let's make
[01:17:53]  um count dot js okay and count count dot js is um or a signal yeah it's gonna we're just gonna do this yeah we're gonna put this in here um and
[01:18:09]  we're gonna go what export um how do i want to do this export const like i could just export an array people usually do stuff where they're like fine i'll
[01:18:23]  do i'll make i'll do something fine i'll just do like const count set count equals create signal and then we'll just go export actually can i probably yeah i
[01:18:41] 'm just gonna do it this way count set count right okay and then we're gonna go to counter and we're gonna import import count set count from our lib count count
[01:19:03]  okay sweet and yeah does astro's router have a refresh or will we be making test two probably um let's uh yeah i think it should refresh i'm trying to think
[01:19:25]  if there's a way to okay because i'm gonna do this and then okay so our counter still works right so yeah a link to navigate the page yeah exactly um because
[01:19:41]  uh yeah so i i guess yeah we got a few options here now that this is a global store i can literally i can literally i could probably just go anchor href
[01:19:57]  equals test two so whatever let's uh actually i'm just gonna copy this okay rename this is i'm just forcing this to be a separate page um this one can go
[01:20:24]  back to test one um um this two oh give it some text yeah i have so many of these like in my tests they're just like go to go to page two
[01:20:45]  go to page two with a hash okay okay so what's unsurprisingly without even uh all right it's not called test one it's just called test unsurprisingly
[01:21:04]  without even the view transition api let's go back to test yeah actually did i turn off the view transition api probably you're not oh yeah i'm not using
[01:21:18]  the layout yeah yeah but but okay let's let's uh let's get the let's i don't want to use the same layout so i'm going to a layout
[01:21:33]  two yeah i'm gonna make layout two um let's do this all right rename layout two i probably should have just started a new project i'm just like my laziness is
[01:21:45]  not paying paying off at all um because i'm just gonna just carry everything except the slot yeah yeah and then uh layout two and then our pages we'll need to use
[01:22:03]  layout two and actually i don't even care about the divots in all right yeah and then yeah let's save that and then layout two i'll just switch these ones
[01:22:35]  to use layout two okay sweet all right here we go okay so now i click it i go to my link um what is going on so i guess i guess because i
[01:22:53]  was like kind of thinking that this would well let's see here i was thinking oh do you know what it is ha ha ha this it's it's like a high it
[01:23:07] 's like a hydration error and some people might blame solid for this but it's it's it's this actually shows the thing look we're at 16 i'm gonna switch to
[01:23:16]  one when i click this it's gonna go to 17. okay why do you know because um it doesn't know the state of the counter on the server right right okay
[01:23:31]  wait what do you mean the state of the counter on the server right oh yes sorry yes okay gotcha right yeah so wait so look so like what you can do i
[01:23:44]  want to show this because um yeah okay let's let's what you can do here is like technically the server when it runs it recreates the stuff on the next page
[01:23:55]  so it doesn't know that you're on that you've up clicked the count before right um let's refresh yeah okay so we start full refresh we started again so now we
[01:24:07]  have state two i switch i click it it goes to three because the client still knows the state but the server when it goes and does that full page reload what we're
[01:24:15]  gonna see on the network tab here is we're gonna see when the javascript run shouldn't update the state though like you've got it's wrong coming from the h
[01:24:25] tml but i would expect it to see this this is oh okay okay this is arguable some frameworks correct the text but let's pretend now that i'm i think
[01:24:38]  preact doesn't either yeah yeah like well the reason is let's we're going to a world where we do less and less hydration so let's pretend like we're quick
[01:24:47]  or something and we're resumable we're not going to fix the text like we're not going to run it right so yeah so like and this uh we'll go
[01:24:57]  here in a second this is where where i was kind of getting at i was interested because this um button says one even though like we know that we had updated it to
[01:25:07]  three when i switch again it'll still say one every single time so what we can do is i i mean i don't know how this works exactly can i go into here
[01:25:18]  can i put can can can i put the transition stuff on the component so i can go transition persist right and um will it know it's the same one uh yes i
[01:25:35]  think so actually it might not let's see okay no okay no so uh so you can give it a name yeah that's the thing i actually don't need it the
[01:25:49]  do i need the persist as well um uh you do need to persist if you want to keep the state yeah okay so name counter yeah and you can also give you can also
[01:26:01]  put that the you could do transition transition persist equals counter uh but you could probably doing the name is good too it doesn't matter yes okay let's try this again okay
[01:26:15]  i want to see what it outputs just like curious if if we're doing something weird here and that work transition persist counter oh i see it does actually automatically go data transition persist
[01:26:32]  counter wait children okay so it does look like it's doing what you were saying where it it knows notice that it has persist and name so i guess this is what we
[01:26:45] 're supposed to actually do i'm going to do this to reduce the number of touch points because there's probably the way you what you would typically do is this right transition
[01:26:57]  persist counter transition persist counter we're trying this all for the first time here so it's all it's it's all good um okay yeah so yeah that looks like you didn
[01:27:12] 't save the file yeah oh let's make sure i save both of them okay save save save let's try this one two three four five yeah all right you scared me
[01:27:27]  there for a second yeah i probably i probably didn't so now yeah it should have worked with just a transition name uh you can put the name on the persist or on transition
[01:27:38]  names they're actually two different things like one's persistent in element one is like making it part of the view transition so you you might not want that to be part of the
[01:27:46]  view transition in which case you would use it do the way you did but it's kind of confusing making this yeah so this this is pretty pretty cool um i think i
[01:27:57]  i so we started with something where the server and the client didn't match and and and that even though the state was persisted this is kind of problematic so then we
[01:28:09]  persisted the islands and that was good now i want to try one more thing and the the this this is this is my biggest point of interest here is that um yeah i
[01:28:25]  wonder how i'm gonna do this um yeah this is i this is an interesting one i i haven't thought about it too much but it's like we're in a
[01:28:41]  scenario like this where we're going to going back and forth and then yeah actually i think okay okay this is this okay i'm i'm i'm this this is this is
[01:28:57]  this is this is this is not this is something that i'm just kind of thinking through on the fly but i think i got it i want the counter uh the first
[01:29:09]  okay i want the counter to take children from the astro component yeah okay and i want it to be like um i think i think this should be fine this isn't even
[01:29:27]  gonna do it yeah never mind this doesn't work i'm gonna have to think about this a bit more because what i'm what i'm wondering about more than anything is
[01:29:36]  okay right you want to swap the children you want the children from the new from the new one yeah but yeah you're right i'm sure you have a bunch of test cases
[01:29:48]  like this i what i'm trying to think of is there a scenario where we render a new component but in order to render that new component the state actually would have to
[01:30:02]  be on the server not in the client component so you like i think you have to do it through yeah actually this might this this this might actually be perfectly fine i'm gonna
[01:30:16]  think about this more um this the scenario i was trying to think of is is if the server is wrong is it possible to cause a hydration error essentially this is this is
[01:30:29]  this is a problem i've been trying to think of myself a lot where is the hydration in this this case right it's already hydrated right because it matched it matched to the
[01:30:38]  same component if a new component yeah yeah yeah yeah exactly i mean this is this is this is if if i yeah so this the pro basically yeah okay yeah there's a
[01:30:55]  you you saw you you see if if i if i did not have persist counter you can get back to this again like if you pretended that on each page you had a like
[01:31:06]  what i'm gonna just do this for fun i guess i don't know how much fun this is but if i made like other component dot jsx right and then
[01:31:17]  i went export um i went export default so this uh function function whatever i'm just i'm not gonna worry about naming it right and this one was like import um uh was
[01:31:38]  it count from uh what was it dot dot dot dot slash lib slash count and this one was like um something like this whereas like count bigger than five i want to
[01:32:07]  do something span count and then uh i don't know h1 count i i've never made this demo this is just me playing hypothetically i hope people uh can are
[01:32:44]  patient enough with it you know what i'm doing right i think i know what you're trying to do but i i it's it's it's it's an interesting idea
[01:32:51]  where if if essentially um one of these pages has some other what some other component or no it's other component other component import other component from do you want that one to
[01:33:21]  be uh hydrated because it's yes yeah i should do that other component and then yes i want to do this on client load as well simple all right sweet okay sweet so
[01:33:46]  yeah as you can see when i updated it that that you know it went between the two different things good no now what i'm wondering is if i make this bigger than
[01:33:59]  five first and then click what happens um so it's getting the same count right yeah yeah and then it's it's actually busted actually it's not that it's actually
[01:34:15]  um this is a solid error it's not your error but it's it's basically it can't hydrate it because the initial state um of the new component doesn't match
[01:34:28]  the global state on the on on the like the the thing right like essentially because like this component has never been rendered before and it reads from the the global the this global
[01:34:42]  state the component that gets rendered on the server gets a one here so it renders it as if it's one there's nothing to persist so it sees the the that tries
[01:34:54]  to hydrate it when it goes to hydrate it it gets the new higher value of count the html that it tries to walk to hydrate doesn't match
[01:35:02]  the html that's been server rendered and then you get a hydration mismatch error um essentially is what what happened here um this this i i don't spend too much
[01:35:15]  time here this is probably the hardest part about persisting state you'd have to you'd have to send the state to the server with you i guess is that is that
[01:35:25]  what rsc does no our rscs do is that they never render a client component on the server again after the initial render so that it's impossible to read from a
[01:35:39]  context that essentially like a global state like any any client component can only be server rendered once and then after the fact well this one was only server rendered once right but the
[01:35:49]  other component was only server right the second time right but yeah so it's only it's it's only on the initial page load that they server render client components any future navigation
[01:36:01]  client components can't be server rendered because they could read from state that might have changed uh which means that it could break hydration uh it's just turn off hydration well this would
[01:36:15]  break yeah resumability yeah yeah sorry god yeah you this could break you resumability as well i mean it's not it's not hydration it's the fact that
[01:36:24]  the the client framework thinks it knows how it works versus not as i said this i had to think really hard to find the scenario to actually break it i i think for
[01:36:36]  a lot of uh basically this only happens when you have global state um and conditionals based on global state and client components that can change the rendering such that hydration would break is
[01:36:50]  there a way to tilt solid to like update state anyways like is there a opt out of this well the problem is the server like the server would have to know like the client
[01:37:01]  has the updated state it's actually the server that's out of date yeah but it becomes a mismatch because well i guess it's just a mismatch because solids like
[01:37:13]  this is not the same right exactly right yeah and this would be actually true of every every uh client side library because they that's how they hydrate they have no clue they
[01:37:24]  have to like assume that the state is a certain way i think um or yeah it's it's it's it's it's an interesting one right because like even if
[01:37:35]  you're something that serializes all the server state then the client state and the server state would be in conflict with each other um i ran into something with this with pre-
[01:37:43] act one time i can't remember what the scenario was but i feel like they have a way to i don't know to tell it like during hydration just like use the
[01:37:52]  client state override what the server state was right right so like the essential idea is like at that point it's just like don't hydrate just client render it basically yeah yeah
[01:38:06]  yeah and i i i was kind of uh i was kind of wondering if like this is one of the things i was thinking in my head it like was if it was
[01:38:14]  a possible that every like yeah actually you know we can see how how how that would work in practice in a sense in a micro sense because we can go in here and we
[01:38:25]  can be like uh where am i uh test two we can if i do this we're not going to have a problem problem are you saying react does not serve a render on
[01:38:36]  subsequent navigations yes the client components yes so what what happens if what happens if there's content to be displayed the user won't see it until the js runs i guess
[01:38:48]  yes exactly but they assume that like since the page is already like yeah it it defaults back so if i go to test two now we could do that it works it works
[01:39:00]  right the only problem is now is when i render it initially we get the we get the the client render right so it's almost like a toggle mode in a sense where
[01:39:10]  it's like if it's a subsequent navigation like it would be because the beautiful thing here is if you think what if i client only the counter on the on on this one
[01:39:23]  let's pretend we always start on test test one like we always start here and if i do this it's still going to yeah like this one yeah i i the client
[01:39:37]  render timing is awkward but what i was trying to get at is it's still going to uh it's not going to work back though but whatever it like it could work right
[01:39:46]  i'm saying there is a possibility like this client only doesn't in fact i don't know if if it would it's possible to make this not affect its persistence because
[01:39:59]  you're not going to use this you're not going to use this anyway like like on the second navigation technically speaking this is already here so like if this was client only like
[01:40:11]  you're just in fact rendering on the server is almost a waste because you're going to only use it this the this the client version anyway um so yeah uh yeah sorry
[01:40:23]  the reason the reason this came up is this has been exactly the problem that i've been wrestling with for like the last like month um because i i i was like i
[01:40:34]  was like i yeah i when i got back into this thing i was like man what a well the context api is going to kill me but it's actually not specific to
[01:40:44]  the context api it's actually specific to to global state i i think there's ways to solve this it's just it was one of those things that uh um i i
[01:40:53]  kind of hit yeah i don't know if we should do this but i mean in theory like like we do a fetch request we could send a header so i don't
[01:41:02]  know how does i don't know how how react is doing it but like set a header or something that tells it don't render the don't render the uh framework components exactly
[01:41:11]  yeah yeah and that's that's what we've been talking about doing with um with with uh the work we've been doing with the islands around and solid start um yeah this
[01:41:21]  this is this is a topic on to itself in fact i've i've been this has uh even crazier implications that go beyond the astro case i just want to
[01:41:32]  see if like if this was a zone where you'd like maybe hit at all while testing this or whatever um yeah oh no nothing this complicated yet yeah yeah yeah um no i
[01:41:47] 've been thinking through the problems of like what i mean we don't we don't rerun props either like i i haven't like thought through all those things yet um
[01:41:55]  but i mean all that stuff's going to come up so okay children we don't really do it's really as stupid as you think it is it's like right right exactly
[01:42:06]  yeah i mean this is already such a big win for the persistent element aspect of it like because the thing is people who are building mpas today aren't expecting any of
[01:42:16]  the stuff i'm just talking about and what they get is just a uh you know that thing they couldn't do before which is the persist the elements the video players they can
[01:42:27]  you can take uh you can take that zone of what you would build an mpa with today and you've just expanded it you're just going okay before some people would be
[01:42:35]  like oh i need to use react or svelte or whatever view um for this app what you've done is you've you've moved that bar a little bit further
[01:42:45]  along here that thing be like no you know what we don't need to like use that for this we can we don't need to use a full client-side router we
[01:42:52]  can just persist you know any elements we need we can have video players we can have a lot of interactivity the transitions are smooth they look nice basically this is like a
[01:43:02]  free upgrade to any right off the bat to anyone who's already um who's already been using astro and it makes astro even more appealing um for the next zone uh
[01:43:15]  like just beyond where people are using astro today that's that's the way i'd i probably view it yeah that's a good one like you're talking about like like
[01:43:23]  theo you know theo's uh graph he has of like astro is good up until here it's like yeah yeah exactly exactly you just yeah you you kind of pushed it
[01:43:31]  just a little a little bit further right um exactly i think i think that's the the thing here i'm obviously like digging deep on is there a way to make server components
[01:43:41]  in a way that's actually optimal um and that's that's a much that's a different problem a little bit it does have you hit stuff like this but yeah i'm
[01:43:50]  also trying to think about like in terms of like what is like again the goal for us is like get rid of that that router eventually like yeah i don't know like
[01:44:00]  like i could see the mpa router doing dom persistence kind of like we're doing here yeah but yeah i don't know how far they're gonna go with us right yeah
[01:44:08]  especially if that's the goal i don't think that yeah i don't think it i'm not sure it ever gets to to to hear so to speak what i'm
[01:44:16]  like talking about um but yeah definitely interesting nonetheless i mean uh these are these are just the kind of these are the kind of as i said a zone that i was kind of
[01:44:28]  thinking of um uh what else do is there anything else i want to talk we want to talk about on view thing because you you mentioned i i think we got sidetracked
[01:44:36]  and then you disconnected you said there was new features for solid and astro 3 and i was i was curious about those uh well it's not new feature it's really
[01:44:44]  just that we're using v plug-in solid that's really right right right right right right right does does it have like a does you'll have like a um a fast
[01:44:53]  refresh yes yeah we have something called solid refresh so yeah so what you're saying is the each island framework now can use its own hmr mechanism so like react fast refresh and
[01:45:04]  right not yeah so like fast refresh we had to do a little bit to hook that up so we might need to do that for solid as well i'm not sure i
[01:45:13] 'll have to look into that but yeah basically we're just using the built-in plugins like if you want to uh if you want to use multiple jsx frameworks there's
[01:45:21]  like a glob you can you can provide it to tell it uh what um you know which files are for solid for example uh that's kind of how it works yeah yeah no
[01:45:31]  that's that's awesome and yeah getting closer to what we actually use and what we actually do just makes all the other pieces work nicer together like makes it easier to integrate
[01:45:42]  i mean we don't we had a lot of bugs over over time of like you know like oh this solid component doesn't work with us and it was all due to the
[01:45:51]  fact that we were like doing our own babble compilation stuff so now i would expect like full compatibility like if you look at your integration like it's pretty small it doesn
[01:45:59] 't do that much no no that's that's awesome yeah just i'm all about kind of lifting that out um i i i do know some of these features that are coming
[01:46:11]  in in astro 3 with the view transitions as i said it's the big highlight i i think this is going to be a game changer for a lot of people and
[01:46:18]  their uses of astro but uh i i got a note here about an image component what what's up what's up with that uh we've had an inch component for a
[01:46:27]  little while since 2.1 but it was an ex it was an experimental mode um that's been updated uh throughout let me look check my notes so we have a couple things
[01:46:39]  well first off it's stable that's the main thing like we switched over to squoosh now or not right uh sharp excuse me um sharp now runs basically everywhere like
[01:46:49]  sharp is running in um in stack blitz now so it does that uh image sorry good i'm sorry i just love having access to the like the new version of the docs
[01:47:02]  which means that i we have all the stuff all the experimental stuff you know yeah yeah here it is um like you can you can optimize remote image net images now um like
[01:47:15]  it has full support for like for sales image service so you can like do whatever you want if you're using that um so this ties in at even the adapter level uh yeah
[01:47:25]  yeah well yeah it does uh yeah you can use you can there's a there's an api to like use external image services so you can use like for sale and there
[01:47:35] 's a few others um what else here the astro image iteration will no longer actually sword in version three we suggest removing it okay so there was a old there was an
[01:47:46]  old integration we had from the 1.0 days that's just going away it's all built in now gotcha um we optimize like markdown images by default with that um
[01:47:55]  you can you can define like our content collections as a way to like where you it's like way to organize your markdown and stuff and you can define a uh part
[01:48:07]  of your front matter you can like define an image like in your front matter and like that will get optimized and like you can specify like what dimensions it should be like so if
[01:48:17]  you have like a social image that you have in your front ladder you have to have the right dimensions if you don't you'll get an error message at compile time like
[01:48:24]  it's type checked uh which is really cool uh so it's just really really you know updated and basically has you know it it's it's it's really nice now so
[01:48:36]  everything except for picture which is something we're going to work on soon but it's it's really good no that's that's awesome i i i think this is becoming very
[01:48:45]  very um standard like images like it's like it's like it's an expectation of like what makes a meta framework um pretty much at this point uh i'm still looking
[01:48:55]  at an old image so if i make the number smaller it's actually a newer one four one six six okay uh okay yeah that's that i i trust sarah she she
[01:49:07]  knows what she's doing yeah so yeah okay i was just looking at the upgrade uh this i guess is a good high level understanding what was going on here experimental flags removed
[01:49:19]  um some breaking changes um sounds like nothing major remove support for node 16 we already hit so everyone saw that um yeah we it's it's it's it is a good thing
[01:49:33]  i removed no support for node 16 myself recently just the the browse the node is coming along so quickly to catch up with the other platforms and if you get rid of 16
[01:49:45]  there's just so many like bad missing polyfill type scenarios that just go away like it's just like something like yeah we're so close to getting like almost the same uh
[01:49:56]  interface apis working on all the platforms yeah it's like i think all the fetch stuff was not on global and 16 when it is now so we can we got rid
[01:50:05]  of i think we got rid of our polyfill almost completely now um yeah this is all deprecations and stuff most of stuff like we tend to deprecate in one
[01:50:16]  major and then remove in the next so a lot of this stuff is like pretty old yeah astro image markdown removed because you guys have a whole other way of doing mark
[01:50:25] down i'm gathering yeah we used to have a markdown component so you could like write markdown in your um like just inside of an astro component right and which
[01:50:35]  was cool but it does not it's not compatible with ssr really like to like parse and and stuff markdown at runtime yeah so just import an md file yeah
[01:50:43]  this is great yeah i know i i i did run into this astro processing my md files while i was trying to do something else um turn it off yeah i i
[01:50:55]  did manage to um yeah so yeah okay yeah so i i'm yeah as you said a lot of deprecations and whatnot i think people probably kind of go through those one
[01:51:06]  by one but it sounds like most of them are actually removals of stuff that happened before um yeah i i'm trying to think there was there is a i have a note
[01:51:17]  here about supercharging rendering i think that could be a cool topic what what what what does it what what does it mean uh in terms of astro rendering performance got
[01:51:28]  even better is that possible yeah well actually our rating performance was like not it was like okay before like i don't know if you ever saw like when uh is it someone
[01:51:39]  from the quick team did like some comparisons right right yeah yeah yeah uh steve was was working on on that uh i i remember that he did a benchmark um there was a
[01:51:51]  lot of data all over the place on that one um but okay yeah ours ours was like okay but it was like kind of middle of the pack so yeah yes yeah mar
[01:52:00] co yeah um yeah i don't know if we'll if we'll win i don't know yeah and then done comparisons but uh so bjorn uh who's on the
[01:52:11]  v team he's really great uh he worked on this um so i think we have i think let me have some notes here so he says that in astro pages with
[01:52:22]  if you have 100 jsx jsx expressions and 50 components uh you get 75 improvement uh versus 2.9 do you have something do you have something to share or is that
[01:52:37]  just a number no it's just that's some notes that i have we're this will probably be in the article like in okay fair enough so but 50 that was 75
[01:52:47]  and like that that's a that's a high scenario so basically the low scenario he had was like 30 and like the high scenario is 75 so that's 100 jsx expressions
[01:52:59]  50 components uh so it's like it's like a linear it's like a linear improvement um yeah i mean essentially like we knew what the problem was like when we did
[01:53:09]  streaming like we used ac generators everywhere so um all of our like all of our core rendering stuff is you know to do streaming is just uses generators and you know as as people
[01:53:21]  know those are like not super performance so that's really all we did is we ripped those out um got rid of any async functions that didn't need async that kind
[01:53:31]  of thing just kind of tightened up the code and so yeah that's kind of where where it's at so yeah i'm interested in in like actually doing some comparisons now
[01:53:40]  doing some benchmarking because i'm not sure where we're gonna land but uh we should be in pretty good shape for rendering now yeah yeah no uh that that's that's
[01:53:49]  that's great i i've never had any problem with the astro rendering um to be fair um yeah because and you know that i've put it through some paces like
[01:54:01]  i just did some i mean it was a lot of the same components but like i i would like this page was pretty pretty large and this is 255 uh comments i
[01:54:11]  like to load pages that have like 1500 comments and astro never had any issue there before so i'm uh i'm excited to see even additional uh improvements there uh would
[01:54:23]  that be a single component with like how many components would be on a on a page that's kind of where the measurement is right if it's a low number then it probably
[01:54:31]  doesn't matter but is one of those a component yeah well it's it's recursive so like what you this is actually an island every one of these is an island that
[01:54:41]  like there's a comment component that draws itself and its children and then it has an island in it that it passes its children through the island so like uh we we actually
[01:54:53]  have this right so you actually you actually are probably getting close to this like high number actually then yeah because it's literally comment component toggle comments mac astro self like it's
[01:55:04]  it's a recursive um number so when i say 1500 comments that means there are uh probably about a thousand islands and uh it's like one degree back up you know
[01:55:21]  like basically there's one less because like they they fan out so to speak so like it's yes it's probably maybe like 66 of the number of components you know like
[01:55:33]  like it's a little bit less so if there's 13 other comments it's probably like a thousand components yeah so actually you could compare i don't know if you want to
[01:55:41]  do that right now but if you were to like compare the the load i i would i would think it's going to be better now yeah i'm i don't yeah i
[01:55:49] 'm not i think that's interesting i don't think it's going to show up on like the the this test specifically was designed to punish people for um uh what do you
[01:56:02]  call it uh heavy serialization costs astro's serialization in this case is actually really nice but like like like solid's version and like uh quick's version and mar
[01:56:12] co's version you don't do double data react server components double data that they get hit a bit but they even they save on hydration but they get hit on the double data
[01:56:22]  pretty hard single page apps double data plus hydration and it's just like death so um my gut is the the least on the test i was using the the although i mean
[01:56:35]  i will test it probably later the the variability on the the um like run to run will probably make a bigger difference than the speed increase i mean that's fair would you would
[01:56:49]  you mind flipping back over to your editor there there's one other improvement that is kind of cool yeah uh astro.self is type checked now i don't know if
[01:56:59]  you can tell that but um yeah are you using do you have a do you have a type for your props you don't have it yeah i did this one i did this
[01:57:07]  one in in jsx i mean i could no that's fine i mean that's okay that's that's a that's a pretty like not that many people use ast
[01:57:16] ro.self like i've hardly ever seen anyone using it and just i just happened to notice that you were so uh yeah so that should actually be type check so you should
[01:57:25]  you should get like error message the funny thing is like i wonder if i have to change my ts config to do something special now i never actually tried it maybe because it's
[01:57:34]  like complaining to me that i can't use jsx unless jsx flag is provided so like am i supposed to do something along the lines of like uh like top level
[01:57:42]  can i just put in like the typical jsx preserve uh js what is it jsx import source not react um like so you can extend ours is what you can do that
[01:58:01] 's one possibly okay and then oh it's funny because i have all the code for the types and like other versions of this um i look we can still show this because
[01:58:14]  we know that we are taking comments and uh actually there's a this is one of those things where there's um this is one basically i don't want to use the
[01:58:32]  function form i want to because the way freaking um you know i don't know if i can just do this um i don't think either of us are like ts experts
[01:58:44]  is what i'm what i'm getting yeah it's it's more like i what i have to do i think what i have to do is this and then export uh default
[01:58:56]  toggle and then i come on and then and then essentially um this type for this should be um let's say it's like component parent parent component parent component from solid js
[01:59:18]  with um okay that's the problem the what's the prop that oh actually you know what this this this this section this this this sucks anyways it's just you're you
[01:59:35] 're right i i i because the problem is self sorry i i was i was typing the wrong component now that i think about it because self is actually the astro component right
[01:59:44]  so how i would have to actually i know you can just add it now you can just add an interface here actually just do interface props um and it picks it up or
[01:59:54]  you get capital p props yeah okay yeah this this is this is my my learning here you see you're getting your so now now yeah now comment unfortunately is a is an object
[02:00:10]  with a bunch of properties on it but we can kind of figure it out let's go string sorry like yeah okay let's just whatever just string um what else do we
[02:00:22]  have here time ago which is a number i think and then we have content which is string of hml yeah yeah yeah exactly content which is string but yeah this is like eating
[02:00:37]  my vegetables and then comments is is that thing yeah exactly you gotta turn that into a type yeah yeah yeah i i'm this is people are like laughing probably in chat either
[02:00:55]  that or they're leaving right they're like what are we doing these idiots yeah uh yeah this is um okay uh comment array that may not be present and then comment is a
[02:01:13]  comment and then all right cool there we go okay and then okay you're saying is yeah exactly that is a comment yeah so if you omit that you should get a
[02:01:23]  type error if you want to try that yeah or misspell it or something hopefully did i say that it was let's try it's funny it did it did do completion for
[02:01:37]  me but it all right yeah okay maybe it's only completions maybe it's not diagnostics okay let me just uh do the classic here or is it was it uh
[02:01:50]  type script restart yeah restart type script servers yeah i do this a ton on on on my other computer but this computer i never really bother why am i even not seeing it restart
[02:02:05]  reload also works like reloading the editor uh reload window i think all right it's possible that it's possible that the editor had a change to make this work i'm
[02:02:29]  not sure okay well um anyways i mean i actually at least see the the stuff here um but yeah okay um very very cool to see um all right sorry about that i
[02:02:49]  think i got sucked into that one a little bit um but yeah no the rendering improvements obviously very very interesting um what else do we got here um i i'm gathering most
[02:03:00]  of the other stuff is a mixed bag of small features um i noticed that there's some talk about uh um adapter improvements and and whatnot yeah everything everything else is mostly uh small
[02:03:14]  um yeah a lot of a lot of i mean there's a lot of like small things so like html modification by default uh we have css inlining like
[02:03:23]  automatic css inlining like if it's below i can't remember what it is but uh v has like a inlining threshold like will actually inline your css
[02:03:32]  which is actually very useful because in astro the way it bundles css it's per page so if you have like a component that's used on several pages that becomes
[02:03:42]  like a chunk that's shared between the pages and so if you have a lot of them there's a potential that there could be like a whole bunch of shared chunks uh
[02:03:50]  but like for a particular page so when those are all links that's gonna you know block um quite a bit so but those could be very small chunks so now the default is
[02:04:02]  auto inlining so like if you have a large chunk like you have your tailwind or whatever that's gonna be in a link or if like you know your main your main
[02:04:10]  page chunk or main chair chunk that's gonna be in a link but everything else all those little small changes will be inline so that was really nice right yeah like i
[02:04:20]  said html is minified which is pretty nice for ssg anyways um we switched over to use like a hash for our scope styles they used to be a class
[02:04:32]  name makes things a little bit easier like to read uh yeah that that's kind of what that section was about yeah the big the big three things are definitely view transitions uh the
[02:04:44]  image component and then like fast refresh and like all of the uh um all those gsx framework uh integration improvements makes sense okay no i i mean that's enough the
[02:04:57]  view transition api i i is still i'm very i'm very stoked about that it's i i think it's i think it's a game changer the fact of how
[02:05:04]  easy it just as you said like progressively enhances the story is really quite noticeable um that's most of what i actually have today in terms of uh what we want to cover on
[02:05:17]  astro 3 i think um i give the audience a little chance to ask any more questions they haven't been but they've been pretty active in here asking as we've
[02:05:25]  been going so i'm going to scroll up so i can see if um uh i saw a few yeah i think there's some questions around the view state the view transition ap
[02:05:35] i like people like when you're away they're they're like is it possible to make it like re-render the page on the server and then have it only update
[02:05:45]  like a small portion of the page kind of like simulating something similar to their client-side routing that was like kind of the question but i think the thing is persistence once
[02:05:56]  you hit something that persists everything below that persists oh yeah yeah yeah yeah yeah right i mean like literally just grabbed the dom node and sticks it over that's how it
[02:06:07]  works now i think there's there's a lot of open questions or like stuff you brought up is like what should like what should we do if there's a difference between
[02:06:16]  them okay i okay you know what before i actually want to get into the view transition stuff i kind of got like sidetracked in our thinking because um we um how
[02:06:28]  should i put it uh you lost connection and then like it's kind of like rambling on but and i want and then i was like i want to test a case but
[02:06:34]  what i'm actually interested in doing it i i i showed this previously on stream actually let let me show what i'm i'm gonna go back to our simple you know hacker
[02:06:44]  news example here that we started with right so we got our nice transitions everything's nice and i had noticed when i went to the network tab that when i looked at the
[02:06:55]  js and i ignored my extensions i i opened a new incognito window and did this um that uh yeah sorry this is something i really wanted to do uh network sorry
[02:07:13]  javascript refresh that i had a new javascript file that i had not had before i i actually did a production build this is not production builds so that's probably
[02:07:25]  it but essentially this page in actually you know let's let's do a production build right now let's just do npm run build and then npm run preview okay
[02:07:39]  okay yeah see this page never had any javascript on it before because there's no islands on it but now it has this 5.5 kilobyte thing and when
[02:07:51]  i go into here then it obviously loads solid and uh you know like i don't think this is all g-zipped but um i imagine this is actually can i
[02:08:03]  see the what's it uh yeah i don't think it is it requests gzip but it doesn't respond gzip yeah yeah so it's not even five kilobytes
[02:08:11]  it's like literally it's probably like two kilobytes this two kilobytes i'm gathering here is the router right this is the new piece can we talk a little
[02:08:19]  bit about how this router works um all right sorry i i forgot the assets before and i was really curious because i asked i kind of hinted at it when we were talking
[02:08:29]  before stream i'm like does this use micromorph is it doing it a diffing like how does the persistence work because the browser support persistence or is this something you
[02:08:39]  implemented no we implemented that yeah i mean it's like it's it's as simple as you think it probably is it it fetches the next page yeah it parses it
[02:08:50]  with dom parser uh it diff it uh it it has to dip the head which at first like my first simple first implementation was like i literally just replaced the document element
[02:09:02]  and that was it and then i was like oh no this is not like this causes a bunch of problems so for like the head it leaves link tags that are on both pages
[02:09:11]  it leaves them in so you don't get a flash yeah um otherwise it replaces everything um and then the body it literally just flips the body if i remember recall correctly and
[02:09:22]  then it looks for those persistent nodes on the old page and moves them over onto the new page okay this explains something for me because i i you know how i persisted the
[02:09:33]  head i was like made a big deal about persisting the head and i was like i was like what i could tell it was the same element but then when i went into
[02:09:40]  here right and i went rendering paint flashing and i was switching i could see the head like paint flash yeah yeah like even though it was persisted i could see paint flash
[02:09:55]  and that's because it's parents or it's because i think it's it's because you swap the body and then you put the and you put the existing element in into
[02:10:05]  it yeah so then like even if it's the same element it's just it's getting trying to paint yeah it's re re painted again because like when i was doing
[02:10:15]  temporarily yeah yeah that explains a lot okay yeah because i was this this was my little demo because i was doing the the the persist our kind of routing one right and it was
[02:10:27]  doing this right uh yeah okay um with with the similar html diffs but okay so let's continue uh that helps me out so then you replace the body and
[02:10:39]  then you walk through element by element on both sides and then go is this the same thing and then you no we only well we only we don't care about if they're
[02:10:51]  the same unless they have that transition persist right so we can just find the ones that exist on on the new on the new page right and because they all have unique ident
[02:11:01] ifiers they'll match up exactly yeah yeah yeah so just like it's query selector all for data astro transition persist and then walks those is there does this exist on the
[02:11:17]  new page uh if it does swap it swap it in okay um so if we did a diff then like we don't want to do a diff because then like then all
[02:11:29]  the components would be the state would be retained and you didn't tell us that you wanted to do that okay yeah this is an interesting thing yeah because the implications of that are
[02:11:38]  pro are probably fine for the majority of things because anything that you'd want to be stateful you would mark as persist yourself i always i i this makes sense i always
[02:11:50]  thought that was kind of an interesting case because i'm back to our silly test uh test thing and i'm gonna i'll remove the other component for a minute um the the
[02:11:59]  the people picture this scenario right you know you know i'm talking about like uh like i'm just gonna put puts a silly what type equals text and and in their head
[02:12:12]  they're like oh yeah what if i have an input field on both of these right and if i do something here obviously and i go to test and then uh did i not
[02:12:24]  save one of them i did not okay so uh is it is it just is this just a styling thing where it's like here but i can't you didn't give
[02:12:36]  it all tight do you give it you know i'm not in i'm not in dev i'm not in dev mode anymore i w i was i was comparing the size on
[02:12:43]  the preview build so let's let's bring this up okay right so then you know people picture this where they're like what and then when i go to test two they
[02:12:52] 're like my text is gone you know we can turn off the paint flashing right um and you know like that's why you diff because well yeah like you you want to persist
[02:13:03]  that if you don't have a mechanism but i mean you can also just be like um yeah should i give it a name uh yeah i think you want to in this case
[02:13:16]  persist usually the same would be in like a common component in which case you don't need to because like the component is part of the hash right uh but if it's
[02:13:25]  not then you would do it this way yeah yeah okay so then we we just do this and then now when i do this and i do this and i go to test ta
[02:13:35] -da yeah see that this is an interesting topic to me because oh does the input loose oh okay what if okay yeah but if the input was going to have an event
[02:13:47]  on it which would cause it to lose focus like or sorry how should i put it it would be in a client component if if if we're listening to javascript events
[02:13:56]  on it you get what i'm saying like i i think this would lose focus on the input um i i think if you use javascript to handle the event to
[02:14:08]  do the navigation i think actually can we can we do something natively to just test that sorry no you're right you might lose focus because it gets repositioned but this
[02:14:17]  is kind of dumb anyways because it would be in a client component so like you wouldn't even you wouldn't even you wouldn't even do this um realistically that's why i
[02:14:26]  don't think this actually matters a ton because like um yeah i mean can i just see it i find this interesting because like it's the same thing that happened with islands
[02:14:38]  i think where uh you know with islands like partial hydration is like well how how are we going to do this and like the island solution is like well you just tell us like
[02:14:48]  tell us what you what's an island this is the same thing where it's like anytime you try do things automatically like you take on a lot of complexity of having to
[02:14:56]  figure out when to do them and if you have the developer tell you i want you to do this like it removes so much complexity and make things so much simpler to actually implement
[02:15:05]  yes we lost focus because i clicked the button i was trying that's why i was going back to see if i could like do something that was based on typing to cause this
[02:15:13]  to do the focus loss but i but then i was like if i was going to do that i'd use a i'd wrap it in a client side component which means
[02:15:21]  that i wouldn't like this one i just preserved the client side component i wouldn't like it wouldn't even be a question of opting into this i would be doing it
[02:15:29]  because i like that's my intention yeah right so like yeah exactly it's like if you know you're going to make an interactive input it's going to be a client component
[02:15:40]  so at which point you you i presume you'd be persisting it like it's not it's not this is the i'm always looking for ways that you can like
[02:15:48]  shortcut something a little bit to drastically simplify and this is the thing you're like look we know what all the points of interest are why do we diff we don't need the
[02:15:56]  diff and not diffing is very good thing i i i i think this is i think this is smart and it makes a lot of sense to me um i i like
[02:16:05]  it this is something i could i could steal definitely cool yeah you should um someone asked about post request uh earlier we don't we don't do we don't do we only
[02:16:19]  do navigation on on anchor links and like back and back and forth right now um so we we'll probably have some api soon to like where you can trigger navigation yourself
[02:16:32]  so like you could listen to a form submit and uh do like a post i think i'm not really sure what that will look like but yeah currently we only handle anchors
[02:16:43]  and like back and forth yeah that's a great that's a great question i i um i i did confirm that it works very well with things like query parameters um so like
[02:16:55]  even without the url changing in the hacker news example we were i don't know if it's it's it's it actually like page two page three it it handles
[02:17:04]  even the base url path not changing so yeah i guess there's always like more cases to look at with these things yeah yeah we've had like really great contributions on like
[02:17:15]  the router uh this one person named marty is like he's already submitted like a dozen pull request so stuff's getting a lot better is it possible to use your transition
[02:17:26]  without any state persistent throwing away all event listeners it feels nice i mean that's what the default is right yeah so scripts are kind of weird right like in a in a normal
[02:17:36]  apa navigation your scripts rerun you have a new window like everything's new but in a spa it's not so like we kind of followed the lead of all the uh
[02:17:47]  these other similar libraries where like scripts do not re-execute um so like there's if you want to like the common case is like dark mode if you're like
[02:17:57]  you're saving dark mode state in like local storage or something um we have an event called after swap so as soon as we do the swap we fire this up event so
[02:18:06]  you can listen to an event like restore dark mode as one example. Yeah, there's going to be more of these events coming along, but scripts are a little weird because
[02:18:17]  they don't rerun. I see. Any words on view transitions and web components? They're just another DOM element, so it's the same thing. Yeah,
[02:18:34]  that's what I was thinking, but you never know. Maybe the shadow DOM has some funny behavior. That seems to always be the thing. I imagine that's not the
[02:18:44]  case. I think a simple snapshot to snapshot should just work. Yeah, I mean, one thing that's interesting that I have not dug into is what is the implications of
[02:18:55]  streaming? Because in our case, we don't try to stream in the response because we need to wait to be able to swap in and everything. I'm not
[02:19:05]  sure how the MPA is going to do that, right? Because what if you try to animate something that's super far down in the page? Does the browser wait
[02:19:18]  for the full page to finish before it does a transition? Or when does it start doing that? No. And this is a question that came up when we were talking to
[02:19:27]  the Marco team a little bit. The thing is, you saw in the Marco example with streaming and stuff, the paint holding was only as far as the header. It
[02:19:38]  determined at that point that it should go ahead. So then we saw the streaming loading state. So that makes it a little bit interesting because then if the content hasn't loaded
[02:19:50]  in, you're not going to get a view transition. But it makes sense you wouldn't because the transition is the loading indicator. So it's like, yeah,
[02:20:00]  I mean, that's an interesting question in terms of configurability or timing of painting and stuff where that control falls in. It's interesting because having that indicator of the loading
[02:20:13]  and stuff with the streaming is kind of beneficial. But on the other hand, if you could hold it maybe a tiny bit longer, then you could get like a nicer transition
[02:20:21] . Maybe that's what you actually want. Like perfect example of this is actually the way suspense and transitions work in React. If you've ever seen any router example that
[02:20:32]  I've ever done with solid or solid start, we do the loading state on the initial page load. But when we go to the next page, I mean, it's
[02:20:41]  right in the solid tutorial on the site where we have the, if I go down to one of these later examples like transitions, our router bakes in what we call
[02:20:52]  transitions. And it's not transitions. I want to change the name of this, but it's not transitions in the normal sense. What happens is typically with suspense, you
[02:21:00]  get this, you get like the streaming feel, right? Like you change the page, you get the loading, right? But, but, but the actual like desired thing
[02:21:08] , at least according to Rails theory or all that, and what the React team was looking at and why they introduced stuff like transitions is that on the initial load, yeah,
[02:21:14]  you get that, you get that loading skeleton coming in. But then when you navigate, like maybe you keep the content there as long, like this is emulating the
[02:21:24]  browser, right? Keeping it there as long as possible. And then maybe showing a different like affordance for the loading, essentially maybe a loading. And what I was
[02:21:32]  getting at is in, in that case, like, yeah, maybe subsequent navigation, you don't actually want to show the stream coming in. You actually want to wait till
[02:21:41]  it's done. I don't, I don't, I don't know how, like how, uh, how we would, would tell the browser when to do that
[02:21:49] . So you're definitely interesting. Yeah. Uh, yeah, we do, we do prefetch. Yeah. Yeah. Yeah. And that's like, doesn't
[02:22:09]  like next link does prefetching as well. So it's kind of following that lead. Yeah. Yeah. And SvelteKit and a bunch of them do
[02:22:17]  that prefetching. It's interesting. Um, cause for Astro's case, it's almost simpler. I mean, it depends on how you, what cache
[02:22:28]  you're warming up, but like you can literally prefetch the, like what I'm getting here looks like a, like normal URL and I'm getting the HTML back.
[02:22:41]  There is nothing fancy about this. This is not a special serialized format. This is literally. So like the, the truth of the matter is if I hover and it
[02:22:50]  did the prefetch, although it actually, can I turn that on? Is that a thing? Like how, how do I do that? How do you get it
[02:22:57] ? You get it. It should happen. But this is a link that solid produced. Oh no. Yeah. So no, it should be, it should, it shouldn
[02:23:06] 't matter actually. Is it, is it snake or link? Uh, yeah, this is, this should be just like a straight up anchor. I've never seen this
[02:23:17]  behavior. That's why I'm actually interested. Are you sure that you're not filtering your. Your network or something. Okay. Network. I mean, I,
[02:23:29]  this is just fetch XHR. Oh, I'm, I mean, let's do all. Okay. Okay. There it is. Interesting. What, what it
[02:23:39]  doesn't show up under fetch XHR. It shows up as, uh, uh, doc. No, I wonder what other, it shows up as under other
[02:23:50] . Okay. Interesting. Okay. I'm not sure what it is. Yeah. Oh, that's why I've, that's why I've never noticed this. Um
[02:23:58] , I don't want the preview. This request has no data. Interesting. What about this one? Does this request have data? Did it get canceled? Cause you
[02:24:07]  hovered away that might cancel if you hover away or something. I'm not sure. Interesting. Okay. It's possible. There's, there's bugs with this.
[02:24:19]  I mean, yeah, that's interesting. I not seeing like, what kind of request is this? This is a, well, it's a pre, it's
[02:24:31]  a prefetch, right? It's link rail prefetch. So maybe that's not inspectable. That's right. This is not HR. Sorry. Yeah. Yeah
[02:24:37] . Yeah. Okay. This is link prefetch. Sorry. Yeah. That that's why I guess you can't, you can't like see the contents of those.
[02:24:44]  I don't know. Okay. Interesting. Okay. It just goes into the cash. Yeah. See, what I would expect here, what I like about this from
[02:24:50]  like a Astro standpoint is your next page is just an HTML page. So using the browser the way it was meant to should work because you're like, I'm pref
[02:24:57] etching this HTML page. Now I'm going to fetch this HTML page. It's no different. What's harder with client side libraries is like, sure. You could
[02:25:04]  fetch the, the HTML page and get like a server cache warmed up, but it's not the same thing you fetch after the fact. Like you, you, when,
[02:25:12]  when you're doing client side routing, you're not fetching the whole page again. You, so if you hit a separate page and hit, and just got the
[02:25:19]  full page rendered for you, that's not what you cache. What you can prefetch the data, you can prefetch the component. Um, you know, like most
[02:25:27] , like the lazy route could be preloaded. You can go, okay, I know I'm going to resolve to that route. So preload it. You can
[02:25:33]  go fetch the data, uh, separately, and then the client will render the rest. I think in the case of RSCs, they probably do something even,
[02:25:41]  um, uh, kind of middle ground because they, they, they, they also want to warm up the, uh, like the, the actual like RSC output
[02:25:49]  that they're going to send out. But it's, it's, it's kind of interesting that with Astro's case, this part is actually should be very simple
[02:25:56] . It's like literally the same HTML document. like whether you, whether you hit it like this or you hit it, like, you know, whatever, like,
[02:26:05]  let me click on it again, like this, the, the, the document that you get sent is basically the same, I think. Right. Yeah, it's exactly
[02:26:14]  the same. Yeah. So that means it can actually literally be just cached the way the browser caches it. Lloyd says that your filter icon is red and that
[02:26:27] 's why you can't see it, I don't know. But yeah, I know I was seeing that, but I think that it's the second you click any of
[02:26:34]  these that it goes red. So like, I was wondering what category, because it wasn't fetch XHR and it, oh, why is it, why do I
[02:26:44]  see it now? Oh, well, when you clicked on it, there is a fetch. Yeah, yeah, yeah. But the preload doesn't show up. Yeah
[02:26:51] , yeah. When I click on it, I get it. Yeah, yeah, yeah. Yeah. That was fun stuff. Are generators completely removed as part of Z
[02:26:59] astra's rendering mechanism? This is a question. Uh, there's, oh, well, I mean, I don't know if this person is asking like users can
[02:27:08]  still, you can still pass generators into like a template and stuff like that. Just part of like our internal logic, it's removed. There might be like a couple left
[02:27:17] , but for the most part, it's removed. Okay. So that was part of what you guys did before. Generators were always interesting to me because they,
[02:27:26]  there's a performance penalty for them, but they also seem like really good at pausing, pausing, starting like a much simpler API to do like a lot of the
[02:27:35]  streaming mechanisms. Yeah, that's, that's why we use them because it's like very easy to read and write that kind of code. I mean, I'm
[02:27:44]  going to ask it. Any thoughts on ours? Like, are you guys, is it something that's getting worked on or whatever? I know Ben was really, really stoked
[02:27:51] . But no, I mean, it's not being worked on. I mean, I'm not saying it can't be done, but I don't know. I
[02:28:00]  guess we need to see how the, how it plays out in the ecosystem. Like how essential is this? Like, what does it mean for us to have RSC
[02:28:08] ? Is it just like, do you just not use Astro anymore? You just use your RSC? I don't know. Use them together. I don't know
[02:28:17] . Yeah. It's interesting because then you have like server components inside server components. Yeah. I mean, I'm not opposed at all if that's what people want
[02:28:24] , but. All right. That's sort of. Um, how many more animations can be added to Astro? That's it. As many as we want. Yeah
[02:28:36] , that's fine. I think we're running good on questions. Um, any, uh, anything you want to shout out before we, uh, end our interview part
[02:28:45]  of the stream today? No, no. Thanks for having me. No, this, this is a lot of fun. I, I, I'm glad I got to
[02:28:52]  ask those questions about the diffing and stuff. I've been, I've been banging my head against the wall, which is actually something I want to talk about it in
[02:28:59]  a minute after we let Matthew, uh, go, but I, I definitely learned something and I'm pretty excited for Astro three. I think you saw how easy,
[02:29:07]  at least for my simple app to do the upgrade was. And then suddenly it's just like, win. So I think, I think people are going to be, have
[02:29:14]  a really good time with this. I think, as I mentioned earlier, I think that, um, existing users will just be like, Oh, that's nice.
[02:29:22]  Like it's like, like a little bit of an upgrade. And then I think for, uh, other people, people who really like can't get over the MPA
[02:29:30]  thing, maybe some old prejudice about the way the navigation works for, for a lot of their cases, this just is not going to be a concern. Yeah. I
[02:29:39] 'll say like one thing that was surprising to me that if you, if you're someone that's like, well, I'm not a designer. I'm not really good
[02:29:45]  at CSS. Like you get really nice animations without hardly any work at all. Like literally you just match DOM elements together and they like transitions. It's like beautiful. So
[02:29:55]  like, don't, don't be afraid of doing it. Yeah. Cause I'm not that person. And I, I just, it just turned it on here
[02:30:00] . And then something I was like, Oh, that's like, this is nice. You know, you know, it's very simple effect. And I enabled it with
[02:30:07]  one line of code. Yeah. Cool. All right. Thank you, Matt, for joining us. Um, we will probably have you or another one of your Ast
[02:30:15] ro companions, one of these, one of these, uh, days again, but, uh, I'm looking forward for the release announcements next week and you all should too
[02:30:24] . Um, have a good one. All right. So August 30th is release. Perfect. Awesome. See ya. That is not the end of our stream though.
[02:30:33]  We still have some amazing stuff to talk about. Um, we also have this week in JavaScript, which for me, for me, again, I, I've been
[02:30:45]  so heads down that it feels like a slow week again. I'm, I'm, we're going to actually see if there's very much to talk about for this week
[02:30:50]  in JavaScript. If you have stuff you think of, uh, that we should talk about, you should probably, uh, you should probably send it along. Um, you
[02:30:58]  know, in chat, I want to talk about something before then though. And I think it's really on topic for today. Um, it's a conversation and that
[02:31:09]  is, um, I'm gonna actually make a banner for this. Just going ahead. I've been known to talk a lot about how, you know, don't worry
[02:31:18]  about server components. They're basically islands, right? Um, and that's mostly true. I think that's a really easy way to explain to people stuff, but I
[02:31:29] , I think we touched on it a little bit today when we were kind of what someone said of breaking astro is that in a lot of the, there are cases
[02:31:38]  where server components and islands are not the same thing. And this is something, um, that I've kind of come to realize more and more recently. So yeah,
[02:31:51]  I'm gonna let's call this section how server components are not islands. Um, because I, I, I haven't been using the term server components a lot. Um
[02:32:01] , for my own work on solid, I, we, you know, we had islands and islands router and all this stuff, because I, um, how should I put
[02:32:09]  it? Uh, server components is kind of a funny name because it's, it's like, it's, it's like in a sense compared to what you're
[02:32:19]  used to, it's the new thing. So we talk about it, but it becomes the base of your application. So talking about the server components, most of the time
[02:32:25] , you're actually talking about the islands when you're talking about the server components. Like you're talking about the client components, not the server components. It's,
[02:32:31]  it's very odd that server components becomes, becomes the name of the thing. But, um, as I was, you know, been experimenting and going through this stuff,
[02:32:43]  I realized that more and more that there, there are a lot of places where, you know, the assumptions that you make with islands are not the, are not the same
[02:32:54]  as what you would do with server components. And I wanted to talk a little bit about that today. Um, let me see if I can get Excalindra
[02:33:01]  out. Cause I feel like, um, I feel like that's really, um, important to understand. And we saw a little bit about it as I said a bit
[02:33:11]  earlier. Um, let me share my screen. Let's go back here. If you remembered, um, my previous stream, uh, when we were in here, I
[02:33:23] , I basically was like trying to explain to people what the difference between server components, uh, single page app mentality, MPA turbo, you know, all these different
[02:33:37]  approaches were. And, uh, I'm, I'm talking about like even, um, server rendered MPAs, like, or SPAs. Like, uh
[02:33:47] , like when I say SPA, I don't just mean client only. I mean like SPAs that render like on next, like the initial load changes the math a
[02:33:58]  bit. But generally speaking, when we kind of look at it in a table form, when you'd perform any kind of navigation, you know, once the, you
[02:34:06]  know, you, you're in that initial state, you render on the client, the state is in the client and the routers on the client. And what's interesting
[02:34:16]  is that MPAs is pretty obvious, server, server, server, but a lot of people see stuff like turbo, right. And stuff like what, uh,
[02:34:26]  you know, this, uh, flamethrower and like, uh, the stuff we were just looking at Astro and they're like, okay, so Astro
[02:34:35] , if you took a client router that does a view diffs like, um, Astro and you took, um, you know, uh, you know, like islands
[02:34:48] . And then isn't that just the same thing as server components? And the answer to that is no. It, it, it, while it's the easiest way
[02:34:58]  to explain server components to people in a lot of, in a lot of cases, it is not the, there are some key differences. And I think you can actually see
[02:35:09]  it in this table actually pretty well. Um, uh, this is why I wanted to do this Astro stream too. So that I could like help fit in here
[02:35:18]  because in both cases, they render on the server. And in both cases, the routers on the client, right? Where you're doing the switch, but the state
[02:35:28]  where question is, is the question. Server components are like interact. Well, the, a server component solution, the client components are like the islands. That's why I
[02:35:42] 'm saying that the name of server components is terrible. but they, they fundamentally render differently and have different expectations. Right. Um, and I, we, we,
[02:35:53]  we, we showed one of them, uh, when we were talking, when we showed with the Astro that global state kind of completely messes up hydration when you're
[02:36:06]  doing this turbo kind of, uh, navigation. Like it's possible that you basically can cause hydration mismatches because the server is not aware. So global client state
[02:36:16]  either has to be sent back on the request on every time. And in a sense, when we used to do stuff on the ASP.net, that is exactly what
[02:36:23]  we did. But server components don't send it back and they don't have that problem because they assume they're just architected assuming that client components, um, can
[02:36:34]  always access that state. And it is the one who actually ends up owning the state after the initial render. Okay. So the other place where, uh, where this
[02:36:48]  kind of differs is actually very evident in, in my hacker news demos. Right. Because I, I, I, I showed this previously on stream, but I'm,
[02:36:59]  I'm, I'm going to do this again just for context. So people can see if you notice in here, if I pick a piece of text anywhere on this,
[02:37:07]  let's pick this 24 comment story, if I pick, uh, let's pick something unique reading summary of mixed judgment from November 22nd. Sounds good. Okay.
[02:37:16]  If I go in here and I look at the network tab and I go to the document and I go local host and I search it. Okay. Let me cut it down
[02:37:28]  a little bit more. Reading a summary. Sometimes formatting is going to be the thing that they, that, that gets me. Let me try this one. If,
[02:37:41]  if you give away free comments and expect ads, like it's like not working for me right now. Um, let me try and find, maybe I just need to find
[02:37:54]  some text from the actual, uh, HTML to show you what I'm talking about. Uh, do, do, do, do, do. Let's find a
[02:38:04]  real story in here. Oh, am I, it's cause I didn't load the page on this page. I'm looking at the wrong document. I'm, this
[02:38:13]  is, this is the fun with the client side router. I forgot. So let's try this again. Let's, let's do this. If you give away your
[02:38:20]  content for free and expect whatever. Okay. Okay. See how this is only serialized into the page once. If I, if I find any piece of data on
[02:38:30]  this page, it's only going to be serialized into the page once. If I instead, um, uh, let's, it's funny. I don't
[02:38:42]  have all the, the links off the top of my hand, hand anymore remix hacker news. Let's just search that. Maybe I should just search in my own repository.
[02:38:52]  Uh, no, it's right there. If I, if I pick like any client side framework, right. And then do the same thing. Let's go to
[02:39:04] , uh, uh, let's go to this, the same story stories, this one. Let's go here. And then, you know, I look at the payload
[02:39:21] . Um, how was I doing it here? Sorry. I was just, yeah. Okay. I was looking at the response from the document. Yeah. Okay.
[02:39:35]  Yeah. If, if, if I, if I, if I search in here for, you know, the same text string, we're going to find it once
[02:39:52]  in the HTML and once in this blob down here, uh, remix content, it could be next Jason. It could be whatever, any single page app. If I,
[02:40:02]  if I, if I go to solid starts example against solid, not the islands one, any, any other, and not the Astro one. Um, I think,
[02:40:11]  I think it's just hacker news. There we go. Perfect. If I go to this one, you know, streamed in all nice. See that? Um
[02:40:18] , it doesn't really matter. I'm going to go here and I'm going to look at. Sorry. I need to grab the same page again. Do,
[02:40:28]  do, do, do. And then I'm going to grab this text. I look for it. I'm going to find it twice again. So this, this is
[02:40:48]  common in all single page apps. And it's, but in Astro, it doesn't need to serialize it twice. It does not have the double data problem
[02:40:57]  because this content never gets hydrated. So it never gets needs to get sent to the browser. As it turns out, if I look at Marco, you'll see the same
[02:41:03]  thing. And if I look at pretty much any MPA implementation, like my quick one or whatnot, you will not see the double data. The double data will, will
[02:41:12]  problem is solved mostly by clever nesting of islands. Like that toggle component. We'd never need to send this. However, if I go next RC demo and I
[02:41:23]  make the same demo in react server components. And we go to the same page. And we open it. And we search. I'm trying to remember if I did
[02:41:44]  this already on stream, if this part's a surprise. But if I take the same text, how many times do you think it's going to show up? Well
[02:41:57] , it's twice. It's once in the markup and it's again. It's again in, in here. In this next push state. It's because
[02:42:13]  it's because RSCs is a spa and quick Marco are MPAs. Okay. Let's, let's try this with solid. Let's try this with a
[02:42:24] , what am I going to try it with? A solid islands example, solid HN islands. Is this an MPA or is this a, or is this a spa
[02:42:31] ? Because this one is doing client routing. And it's actually not, if I, if I expand this header here, it's actually not re-rendering it
[02:42:48]  when I navigate away. So I want you to guess how many, how many times does it show in the solid, the solid version here for, for not our normal stuff
[02:43:03] , but for our islands router mode. let's look at the network. Um, and then let's find that same string. Once in the HTML, not in the
[02:43:26]  JSON. Solved. Well, I, I wish it was, it was, it was a simple, what I was trying to get at. Is MPAs
[02:43:39]  can add, um, like what Astro did. They can add like, uh, uh, a simple replacement based, uh, router like turbo. They can do a
[02:43:54]  simple diff. It's not like it is still a diff, but it's very simple diff of using those persistent nodes. You know, like very cheap diff. Uh
[02:44:01] , it's, it's the best if you can think of it basically doesn't diff. Um, but you know, basically compare the two things, you know, find
[02:44:08]  the things that exist. They need to persist and they can do this client side kind of hybrid routing. Um, but there, there's a problem here, which
[02:44:21]  is the one that I showed with Matthew. The reason that we, there, there, there's a couple of things we have to understand here. Why would it need to
[02:44:32]  push the same data twice? Oh, it's because both the service unrendered and the CSS streamed. Yeah. But like they could just not send it.
[02:44:43]  You'd think. So I'm going to, I'm going to focus on this because I, I know the answer to this question now, and I did not know the
[02:44:49]  answer to this question before. So that alone makes me think this is probably internet, sorry, interesting content, at least to someone out there, because I know exactly why they
[02:45:00]  send it twice. And we're going to, we're going to look at that here. Okay. Let me get rid of that banner. So I'm less in the
[02:45:06]  way of things. Okay. I I'm, I'm actually going to switch to this view. Just whatever. Okay. So. Streaming is actually part of the reason
[02:45:16] , but not why people think probably. So like what I'm getting at is. Astro and solid starts version, which are actually pretty similar to each other. Don't
[02:45:29]  do the double data. They're actually very similar to MPAs today. Whereas reacts does the double data. And the reason for this is we keep on showing these
[02:45:42]  examples where the content is shown immediately. But what if the content wasn't shown immediately? Luckily, we have an Astro app open right now. So we could like
[02:45:57]  do a little bit of playing around this to show what I mean. I was showing the view transition API. I actually don't care to use this. I actually don't
[02:46:07]  need the view transition API to show off what I'm doing here. So I'm just going to pick one of these pages. I'm going to get rid of the
[02:46:15]  input because I don't need it. I'm going to get rid of, yeah. This isn't about navigation. This is just about initial page load. We have
[02:46:25]  a component. We have a counter, right? And the, well, actually we already have this example right here. Let's go to test two and bring this one back
[02:46:37] . Um, no, no, no, it's not this. It's slightly like this. It's a little bit different. I'm going to need another component.
[02:46:48]  I'm going to make a, we're going to just get rid of this counter for now too. And whatever, it doesn't really matter. I'm going to
[02:46:57]  make a new component and this component I'm going to call decision. Okay. And decision is going to pass in some kind of children. Let's say div. Hello.
[02:47:15]  Okay. Actually, let's make it h1. Make it really loud. Okay. And what is decision? Well, decision is going to be another component that I
[02:47:29] 'm going to make here. And it's going to be a simple client component. Um, I'm just going to copy the counter. Cause it's probably like 50%
[02:47:42]  the same rename decision. It's actually the, the funny thing is actually kind of the top. You know what? Can we just use this toggle component? Like does
[02:47:51]  it, it probably has too much information. It's actually, yeah, I'm just going to, I'm just going to, it's, I'm making something very
[02:47:58]  similar to the toggle component. I'm going to, I'm going to, uh, import create signal from solid JS. And then I'm going to go, um
[02:48:10] , we're going to use a Boolean for this. We're going to call it show set show equals create signal true. Okay. And then we're going to
[02:48:24]  say like toggle show, set show and simply like S is not S. Okay. And then toggle show. And then the important part here is we're going to pass
[02:48:44]  props dot children through to this. Okay. Um, and oh, I guess the really important part is this. This is the, okay. So basically I should just
[02:49:04]  move this out. I don't know why I'm doing this putting inside the button doesn't make any sense. I'm going to put click. We'll just do click
[02:49:12]  and then make this a fragment. And we will put this underneath just easier format. Okay. So following what I'm doing so far, this is just a simple toggle
[02:49:35]  that wraps and it shows and hides. Um, yeah. And that, you know, if I, yeah, it's, it's fine. I mean, if we
[02:49:44]  could also make this, like if show, um, hide. Otherwise show. Okay. And this will, I don't know. This will just be on test Astro
[02:50:02] , right? Okay. Let's go to test Astro, which is over here somewhere. I'm actually going to, I'm just going to open a new tab just
[02:50:14]  in case I want to compare this with the others again in a minute. Okay. Okay. So unsurprisingly, it says, hello. All right. I always
[02:50:27]  have to remember this client load, right? Okay. Unsurprisingly, when I click hide and show, it should do it. Okay. What's one of my,
[02:50:40]  is it because I, um, let's, let's, let's clean this up completely. Uh, we don't even need this link. Okay. Okay.
[02:50:48]  And then what do, okay. That's interesting. What am I, I'm doing something wrong here. Um, let's, let's make sure that, could it
[02:51:10]  be a hydration mismatch? That's a very weird hydration mismatch. I haven't played an Astro in a while. So it's possible that we're not
[02:51:18]  getting complaints here, which is interesting. Okay. I've got a theory why this is happening, but you're right. If the, if, if, if this
[02:51:32]  is the issue that I think it is, then top level fragment, hydration mismatch, annoying. I thought that was done with, okay. Fair enough. Um,
[02:51:43]  okay. So we were showing in hiding. Okay. Now, if I inspect this element, I see an Astro Island, solid zone, Astro slot, just gets
[02:51:58]  slotted in and out. Are updates fetched from the server. No, that's, I want, I want to make this very clear here. This behavior,
[02:52:10]  not all islands frameworks support this behavior. That's why a lot of times in my toggle is done with display none, but, um, but Astro actually solves this and
[02:52:22]  RSCs do this too. If something is part of that server tree initially, like, like, like even if it's not like being shown to see here,
[02:52:32]  it's shown. So it's like really easy. Like when we load the page, let's just load the page initially. You see this Astro slot. Hello.
[02:52:40]  They know when to hide it to remove it and then they can show it again. Right. If I change the default to false. Then it's like, how does
[02:52:54]  it do that? Because it still works. Right. Well, let's look at what it actually renders here. You're like, wait, where, where is it
[02:53:04] ? And then I click show and it's there. Well, let's find it, um, actually, because they've changed their mechanism here. I think, um,
[02:53:14]  let's look, let's look what comes over the, the, the wire on this page. And that might give us a little bit of a hint of where this is
[02:53:21] . Cause we know they, they don't do a request back to the server. See this, they send it as a, a template element. So when they load
[02:53:32]  the page, they see it, they consume the template element, and then they pass it in. And then when we toggle it, they can show it. So basically
[02:53:40]  what I'm getting at is even the path not taken is rendered with Astro. And it is with react server components as well, because you don't want to go back
[02:53:54]  to the server to show this, like this is part of the initial render. Okay. So this is, this is a clever way. I think what happens is by
[02:54:11]  the time we look at it, Astro has consumed it. They actually remove the template element to not mess with the, the, the component. Like if I look in
[02:54:18]  Astro Island, the template is gone. So if I, if I had a break point early enough on the flow, we would actually see that template element, um
[02:54:26] , you know, in the, in the Dom, but essentially every prop gets serialized, whether it's shown or not. So essentially either like if let's switch
[02:54:43]  back again, let's make it true by default. Do they send the template? I said they didn't because obviously we didn't see it show up in the Dom twice
[02:54:51] . Right. If I, if I go here and look now at this, sorry, expand it out and look down. It's just slotted. There's no template
[02:55:01] . Astro does either, or to make sure that they only serialize it once. that, that is the key here. They know if you used it as a
[02:55:13]  slot, if you use the slot, then they, they have it. And if you didn't use it, they throw it in the template element. That template element is
[02:55:21]  in a different format than this JSX stuff at the bottom, but it's the same idea. Next wants it so that when you, if this was initially not shown and
[02:55:35]  then you click next, click open, it's there. So it doesn't go back to the server. I said, not all MPA frameworks actually solve this case
[02:55:45] . Solid start islands today. Do not solve this case. Um, we, the, the thing that we put together only works with initial rendered stuff. So you have to
[02:55:56]  use display, not Marco four and five. Don't solve this case. I imagine a lot of island solutions do not solve this case, or at least they didn't
[02:56:05]  before, but now it's, it's a thing that people are aware of. The thing is you, we get the server render the page. So this is part
[02:56:24]  of the continuous tree. This is why when Dan Abramoff showed off his stuff, he was trying to show that, uh, in the case of, uh,
[02:56:32]  let's go to test two, uh, no, sorry. Test. This is rendered eagerly. Like they do two passes. They render the server components and then they
[02:56:41]  render the client components. This is a client component. Let's pretend. So when they render the server components, they render the prop that they're going to pass to
[02:56:49]  the client component at that point, it'll have, it can have its own client components inside of it. We can put like decision two in here, but, um,
[02:56:58]  but it still does it. In fact, you know, let's let, let's put decision two in here to show my, show my point. Um, okay.
[02:57:11]  And what we're going to do what h2, um, second. Just reading this. Probably not important, but if your solid component is not a client component,
[02:57:39]  will it be an astro slot or just an h1? Yeah. I mean, if it's not a con con client component, the whole thing will just get
[02:57:46] , wouldn't become an, uh, astro island, which means it wouldn't have a slot. The whole thing would just get compressed into a single HTML markup.
[02:57:51]  Um, like it's just part of that initial kind of run. What I want to show here, I put decision two inside decision one. So if we go back to
[02:58:00]  our test here, now I can hide this one and show it. I can hide them both and show it. I think if I hide this and then hide this and show
[02:58:08]  it. This actually tells you a lot about what astro does. Do you, do you see if it actually re-rendered the, the child component when it,
[02:58:20]  when it did it, um, or hydrated it again, it would actually always show open when we did this and get back to initial state. This means that when ast
[02:58:32] ro takes that template and removes it again, it only hydrates once after that point, when I'm detached here from the dom, I'm still live. And then,
[02:58:42]  so when I hide it and show it again and show it again, I'm still live. Like I didn't, I don't lose state. I bet you if
[02:58:47]  I actually put a console log right now inside a decision, uh, it's this decision. I should change the name decision. And I go console dot log decision. We
[02:59:02] 're only going to see this ever print twice in the client. Let's go to the console twice. If I hide this and show it, nope, nope, because
[02:59:14]  it just takes the dom nodes. And when it inserts it, it goes, oh, this island's been hydrated or not. If it hasn't been hydrated, it does
[02:59:21]  the hydration. If it has been hydrated or then it just goes, okay, I'm just inserting and uninserting this thing. This is, this is very powerful,
[02:59:30]  very simple way of approaching this. But there's a problem with this as well. If you have it, I mean, there was no problem with this actually from the
[02:59:42]  global state standpoint in that like, because it's the same state, hiding it or showing it like it only hydrates once. I guess what would be interesting is if it
[02:59:56]  started false, essentially. I mean, I guess this is where the problem comes in. If we start it as false, right? We're only going to, let
[03:00:05]  me see what it does. You only see decision once, right? So it's that first show that actually causes the hydration. And now this will be fine, right?
[03:00:21]  Do you follow me? So it's deferring the hydration here. So if we had our silly counter, if you, if you were showing this one, not showing
[03:00:30]  this one, and then you up the counter 10, that changed the some other component, then you showed it, there'd be a hydration mismatch at this point. Kind
[03:00:37]  of like what I was showing earlier, when I was talking about with Matthew about the page change. Basically global state changing after the fact, completely screws up hydration. So
[03:00:56]  deferring hydration with global state is very, very dangerous. Right? Like client idle is actually something that anyone who has any kind of expectation of communication between components has,
[03:01:20]  I mean, has to even be a little bit concerned with, but any of the lazy loading rules, if there's state involved, there's a good chance you're going
[03:01:28]  to break it. That's why most of the time I always just do client load because the, um, Astro, I think at least runs hierarchically. Um,
[03:01:36]  but this, this is like, I'm not picking on Mastro here. I'm just want to talk about island solutions that don't consider global state. Um
[03:01:47] , basically get in this scenario. Um, does it load all the comments eagerly? Yes. Does it affect the loading time parts that are, are visible? Um
[03:01:58] , when, what do you mean load all the comments eagerly? Um, it renders all the comments on the server. Um, yes. So like, uh,
[03:02:10]  but like, these are all HTML, right? Like that's what I'm saying. Like the page that gets sent down here, if, if I compressed some of these
[03:02:19] , you know, you just see them as templates in the, in the Astro component. Like when we sent it down in the first place is what is what I
[03:02:28] 'm saying. It's always going to render all the comments. Um, and this is a trade-off that comes with this approach. Cause you don't go back to
[03:02:37]  the server, but, uh, but it's like, I think there's still benefit here. I think that's better than like going back to like fetch each comment.
[03:02:49]  It depends on the size of things, obviously. Um, but like this. Yeah. I mean, this is an extreme case, but generally speaking, you're right
[03:02:56] . There are cases like this is too many comments. Let's just lazy load them anyways. Like there's other UX things you would do differently, but generally speaking, the
[03:03:03]  main mechanism between these islands and RCs, which do the same is they have to serialize all the props, which means they explore all the branches. I'm good
[03:03:21]  there unload. Yeah. Yeah. Yeah. I mean, I don't, if they're all idle, they probably will also work too. What I was trying to point
[03:03:27]  out is if you don't show something initially, then it lazy hydrates when it gets inserted, um, and that lazy hydration can break stuff. I'm, I
[03:03:40] 'm, I'm not sure people are doing this all the time, but I just, this is, this is, this is the, this is a problem. Um
[03:03:47] , perhaps, you know, so we've got two problems that are actually really, really similar here. We have server going back to the server on the page transition, not
[03:03:59]  knowing that client context and completely messing it up so that when it goes to render it and hybrid, it will screw it up. And similarly, any deferred context of things
[03:04:08]  that you hide, um, being kind of messed up. And the way RSC solve all, both of those problems is really simple. They don't ex render,
[03:04:19]  um, the islands in the, in the serialization. They don't, they basically, when you, when you're doing like the main HTML rendering, they'll render
[03:04:31]  the islands and insert everything and do all that. But when they're serializing the props, they stop at the islands and serialize those props and whatnot. And,
[03:04:39]  uh, this is where, um, things get a little, this is the difference, right? Astro always assumes that a new context is hydratable. React only
[03:04:51]  assumes that you hydrate in our, you know, like server points only assume that you hydrate in the first place and any after action has to be done client rendered because
[03:05:01]  the state could have changed. that's, that's essentially the, the, the critical difference. But it's, we, we aren't fully there yet to why
[03:05:14] , um, server components, uh, are double serializing. Um, so what, what I, what I'm trying to get, I'm sorry, I'm
[03:05:38]  reading a couple of comments here to see if I can like answer them on the way. Uh, um, but I, I don't think quite pertains to where I
[03:05:47] 'm getting at. Okay. So this, this is a fundamental difference because everything that server components do is to preserve the consistency of client side state without having to send it
[03:06:01]  back to the server. And it means that the, if, if I was doing this demo with server components, this would hydrate me clicking show would not hydrate
[03:06:15]  at this point. It would rendered decision, but it would actually client render the component, which is perfectly fine. It would insert the server markup around it, like,
[03:06:27]  you know, the hello, but then it would client render the client component. So where I'm getting at is there are two forms of serialization essentially. And you
[03:06:42]  might be like, okay, so react just being lazy. They're just like, okay, rendering the one side and then like serializing everything else out. And that's
[03:06:50]  that blob, right? Basically they don't hide the thing if it's showing. And there could be a couple of reasons for that. You might be like, like
[03:06:59]  Astro doesn't have to do anything. You can just take the elements that are already there and just hide and show them again. Right. Whereas if the hide and show
[03:07:08]  mechanism relies on client rendering, then you, the templates won't have the client rendered, shouldn't have the client rendered code in it because they should be like, they
[03:07:20]  shouldn't be hydrating. They should be like devoid of it. And we can actually show this. If we look at this Astro actually gives you some information here
[03:07:31] . Because when you're in it, you got Astro Island, which is the island. And then, um, like you can see the client renders this part.
[03:07:46]  And then Astro slot is where the server comes in again, hits an Island client renders this part. And then when I'm showing it here, and then again
[03:07:58] , there's a slot. So essentially it is possible by looking at this markup that if you basically grabbed, if, if, if you cared about like serializing for
[03:08:10]  Island one here, you could basically go, okay, grab this now skip everything until you get to the slot. And then this is that slots props. And then skip
[03:08:25]  everything until you get to slot. And that's this slot, this Island's props. What I'm basically saying is it's easy to act. It's very easy to
[03:08:34]  see server client server. Like you can actually see from the markup the split between client and server rendered portions. So you could potentially abstract, like pull out the client
[03:08:45]  components and take what's already rendered to, um, back into markup. Now, obviously react doesn't do that, but in theory, you could, you could
[03:08:58]  basically just with a simple walker reconstruct the template from anything that's inserted. And then you're like, ta-da, you've solved the double data problem. Because
[03:09:09]  essentially, um, those templates are now good to go for future rendering. And you don't need to send the template version. Um, but the, the problem is
[03:09:24]  it's not that simple. So I don't know. Are people still following me? I know this is a little complicated. The whole key to this from the Astro
[03:09:34]  side and the Island's side in general is if you don't have to worry about context, you're not going to worry about, um, uh, like the fact
[03:09:45]  that you'll just hydrate every time it makes a lot simpler. But you know, it's more complicated, but you should be able to still pull the templates out is
[03:09:56] , is what I was trying to get at. But the problem that comes in is something a little bit more complicated. And I actually have some sample code that I want to
[03:10:09]  show you all. So we, we can, we can talk about this for a second. I'm going to, I'm going to open up a, uh,
[03:10:14]  I'm going to just scroll down on this decision. And I'm going to, I'm going to show you some, some fictional code here that hopefully won't yell at
[03:10:20]  me too bad. Okay. This is solid code. In sense. And what I'm saying is pretend this is like the server file. Maybe I should reverse the order of
[03:10:35]  it, server file. And this is a client component. I mean, this is like react, but pretend this is like RSC is okay. Okay. And I
[03:10:50] 've, I've created a few scenarios here. I like this because I can show all four scenarios. Uh, let's get here. Hydration. It sounds like
[03:11:04]  hydration is extremely difficult to make. Right. Isn't quick a solution. Um, quick actually does, doesn't solve this problem in the same way. Marco six does this
[03:11:12]  too. Um, I, I, I, the, the best way I can put it is. Remember someone asked earlier and they're like, I thought that something state
[03:11:20] ful being in the decision. Uh, let me show this really quick. If they're thinking, they're like, if I'm go show and I go div actually
[03:11:30] , I mean, the, how should I, the, the problem is if, if something stateful is what drives the change here, quick won't include this initially
[03:11:51] , but this will make its way to the client bundle. There's no guarantee and it works because they're automatic that this is on the server because essentially quick doesn't
[03:12:12]  serialize all the paths ahead of time, but it also depends on the fact that it can lazy load stuff. So you don't have the same like guarantees that this is
[03:12:21]  only ever going to be on the server. Like, you know, in, in here that this is only ever going to be on the server in the quick case,
[03:12:30]  it could be either, or which, you know, impacts maybe the way you design or architect your app. Okay. I do want to point this out, like, and
[03:12:42]  resumability, which I talked about on a previous stream of, I think two or three streams about is a very complicated subject in itself. what I think the common
[03:12:49]  theme you should be seeing here is that none of these solutions are actually particularly simple, which is kind of alarming. Cause you're like, okay, if this, if we
[03:12:58] 're in a zone where everything is complicated, maybe we're like looking at this completely the wrong way. Um, which is very fair statement to make. So like,
[03:13:18]  just to get back to this example here is I've created two, two, two, two setups here. One with a, basically a server function that requests async data
[03:13:31]  and uses that async data in its child and an island that requests async data and uses that to decide whether to show the server, uh, the server, um
[03:13:47] , children. Now I'm going to make this, this was just me kind of brainstorming it. I'm actually going to remove this part of it. And I'm
[03:13:57]  just going to make this a lot simpler by just saying like, look, it's a spam. Okay. Cause this alone explains the problem here. Um, basically suspense
[03:14:14]  is a mechanism that we use to allow out of order streaming. Which is great. But it means that we can render the top of the page, the bottom of the page
[03:14:27] , the header, the footer, the navigation while basically holding on waiting for that main content to show. But the problem here is that that we're not doing
[03:14:46]  the span and we're not sending, we're not doing the span, right? We could be waiting on it and showing this fallback, which is showing, you know
[03:14:55] , this div loading. And we're not sending, we're not doing the span. And guess what? The rest of the page finishes and you send it to the client
[03:15:06] . And now you've got a bit of a problem because, well, you assume that this is, even if you're trying to be smart to kind of decide,
[03:15:16]  like, did I use it or not? Like, it's not too hard to use a proxy or something to decide, like when you render it, if you use it
[03:15:21]  or not. And then if you don't use it, then serialize it at the time that you flush the server rendering, like the shell of the app, the thing
[03:15:30]  that like the, where the component starts, you don't actually know if the props being used and it, and the easiest assumption, because you need to serialize props
[03:15:40]  for, for hydration of these islands is to say that, oh, I, it wasn't used. I'm going to serialize it, like make the template form,
[03:15:50]  so to speak. And the problem with that is when it finishes it, it now sends it as HTML and you're back to the double data. You did it twice
[03:16:02] . So you might be like, okay, well, what if we just serialize it first? No, that doesn't help us because we still don't know. Like
[03:16:12]  the whole way to avoid double data is the knowledge of if it's used. If otherwise it's going to be coming after some way, right? Like there's different
[03:16:30]  ways to send things after, you know, like you can load it async. Like we were talking about quick, you can fetch it on the server, you know,
[03:16:40]  like, you know, when you show it, but you can also try and push it through on the same stream. But the problem is you don't want to block hydration
[03:16:49]  and you have no reason to think you'd need to block hydration. In this case, it might be just that this component never needs to use it. It's not
[03:16:59]  like because of some suspense or async loading. It could literally just be that given the initial state, you just don't send it. And the reverse is actually awkward
[03:17:10] , too, because what if you decided to send this loading fallback? So you're like, good, I don't need to serialize it. I sent the loading
[03:17:20]  fallback. But by the time the client goes to hydrate, it's already been replaced with the server stuff, and there's no loading thing. So it's
[03:17:30]  actually missing. It works both ways. You both double serialize, potentially, if you're trying to be smart, and you miss serializing. So the easiest solution
[03:17:46]  is just do everything twice. Basically, when you combine the need for global state that's preserving the client, and you combine it with any kind of async streaming situation,
[03:18:03]  the double data problem finds itself not solved. This is assuming that this is a server component, and then that the island is the use client, like this is the client
[03:18:21]  component. So I'm showing a server component passing server children into an island in this example. Right. So this is a place between those constraints of not being able to hyd
[03:18:40] rate after the initial client load, because the client state, and the constraint of this kind of scenario of out-of-order streaming and whatnot. You're kind of
[03:18:53]  like between a rock and a hard place. But the problem is, this only solves half the problem. There's a reason why Astro, Quick, Marco, Solid
[03:19:11]  Islands example, whatever, all score 90s on that paged test. React server components score 60, and single-page apps score like 50. That test is a serial
[03:19:23] ization test. It's a serialization nightmare. But... The thing is, like, we can reverse the template and only get it once. But the challenge is,
[03:19:46]  how do you stop the serialization? Like, the way I'm looking at it, where I'm standing right now, server components only solve half the performance problem.
[03:19:56]  Like, I mean, people are talking about Quick a minute ago. It's a fair question, because it's like, if server components are only solving hydration, then there
[03:20:06] 's other ways to solve hydration, like resumability. Like, why don't we just all be resumable and not hydrate? The reason that server components
[03:20:16]  are compelling is because they provide way stronger guarantees. You're not worried about weird closure things going on and, you know, like dollar signs and, you know, hoist
[03:20:26] ing. And I said there's a way to do resumability without that, probably, like, hypothetically. But I'm still saying, like, even my
[03:20:34]  resumable model, you know, like, doesn't solve... Like, I assumed it would work with something like this or, like, something like islands. Because the
[03:20:44]  assumption is that there has to be some knowledge of, you know, what will never make it to the client. And you can make a Marco-level compiler to solve
[03:20:54]  that. You can rely really heavily on lazy loading like Quick does, which, as I said, like, just... It doesn't necessarily ideal. Or, you know,
[03:21:05]  you're kind of... Unfortunately, React server components as they are today only, as I say, solve half the problem. And this is why, you know, the
[03:21:21]  people aren't seeing the performance wins on their simple benchmarks. Because the code's bigger a bit, you know, as a baseline. Sure, you shrink the components afterwards.
[03:21:31]  But then, like, it makes things really hard, essentially. And this is why I wanted to point out that why server components are not islands. And most of our
[03:21:44]  exploration that people have been doing to kind of add client-side navigation to islands is missing this fundamental stuff. And now you can be like, okay, well, how can
[03:21:56]  I... Maybe some of that stuff's okay to be missing. I actually don't think so. I think that stuff needs to be there. And when you follow it to
[03:22:04]  its national conclusion, you end up, I think, with React server components or something similar. Which is, you know, as I said, from a performance standpoint,
[03:22:13]  kind of depressing. Yeah, again, it's not about skipping it through hydration. You have to handle the situation of what's not shown at the time. Otherwise,
[03:22:31]  like, if Astro or RSCs did not serialize span here or whatever, hello here, when we did the show and hide, you'd have to, like
[03:22:41] , when you press show, you'd have to do another request for it. And the thing is, how do you request the code for one specific component somewhere down the middle
[03:22:49]  of a tree? Like, you don't. You don't make an endpoint per component. Like, the hierarchy is important for the state of the instance. The template
[03:22:57]  that gets sent here, like, you know how you use to decision? I mean, you can actually see this really obvious here if I look at the network. This is
[03:23:06]  the same component twice, right? Let's expand it out. This is the same component twice. But each one has its own template because every instance is different. The
[03:23:22]  first one has hello and another island in it. The other one's template has a second in it, you know? In one way, the template works really nicely here in
[03:23:37]  Astro because they know they're only going to show one or the other. But Astro doesn't have out-of-order streaming and, in fact, blocks,
[03:23:43]  I believe, when you get into an async island situation. And, again, what makes this kind of tricky is if a template-based system ever wanted to render
[03:24:00]  both all the time, the output would be exponential because you'd have that component, then you'd have the template for it, and then let's pretend we're showing
[03:24:12]  it. You'd have this. You'd have the component. You'd be showing it here. Then you'd be also showing it in the template. And inside, like
[03:24:22] , basically, you'd have both components and their children in here and the template for the children in here and the component of the template of the children there. It just
[03:24:31]  basically marshmallows out by depth. It basically is, like, a factorial. So once you get to a point where you have to serialize both, like React does,
[03:24:42]  you have to pull this stuff out into a centralized prop store, which explains a lot what you're seeing here. They're just kind of, like, pushing in these things
[03:24:51] . And it's basically writing to a specific location in a global lookup so that they can dedupe based on an ID. So they're like, oh,
[03:24:59]  yeah, I have this thing, essentially. APIs like this are really smart, by the way, because it looks like an array or something. So when you push and the
[03:25:10]  page hasn't loaded yet, this is a trick that Marco, I think, was doing as well. It actually just makes a normal array that it can process. But then
[03:25:18]  you can actually, like, once the framework loads, you can actually change the -- I don't know if they do this, but you can override the push to do
[03:25:26] , like, your special logic. So, yeah, it's actually really smart kind of thing, if that's what they're doing. Anyway, that's sort of an
[03:25:37]  aside. But my point is, essentially, you start -- if you -- even if you started at something like Astro Islands, where -- and you started this template thing,
[03:25:48]  it's really simple, because everything's localized, and you can diff against it as you walk, you know, that whole thing, you end up basically back at,
[03:25:54]  oh, okay, now I need a global lookup and a prop serialization format. Like, you basically end up back at RSCs if you follow this path long
[03:26:05]  enough. But do you want to be on this path if you can't -- if you're only solving half the problem? It's interesting. That -- this is what
[03:26:27]  I wanted to talk about today. There is another way, maybe, to solve the double data. I want to put this out there, just in case people had their
[03:26:39]  own ideas. Yeah, yeah, I mean, the hide and showing thing is the same as the templates. Templates are always hidden. Like, it's not a mechanical
[03:27:00]  thing on the way we handle it and we serialize it. It's just fundamental to the fact of, like, what gets -- it's what can be rendered
[03:27:06]  when, essentially, and the way the hierarchy of the components work. Do you think choosing between resumability or double data loading should be a user-length choice?
[03:27:19]  No, I don't think these are problems you want to think about. I think resumability, in theory, should just be, like, a different way of doing
[03:27:34]  hydration, essentially. Like, it should just be, like, okay, I'm not actually running a bunch of code to hydrate. I can read from serialization.
[03:27:42]  So if the choice comes to the end user there, it's a choice of how aggressive you want to serialize and have that guide how much code runs when you load
[03:27:50] . That seems reasonable. I would love if it didn't affect the authoring experience. The double data problem is just something that, as I said, because MPAs
[03:28:03]  have been solving this for so long, like, almost a decade now with Marco, it's just something that I think should be part of the solution. Like, because
[03:28:12] , like, QUIC doesn't have the double data problem, right? It doesn't solve what I was talking about that RC solve in terms of client-side routing,
[03:28:24]  you know, like, with the server bits. But it doesn't have the double data problem. So, like, as long as we have this double data problem,
[03:28:33]  it's going to impact initial page load, which means that this will not be as good as what MPAs do. It just isn't actually a replacement for MPA
[03:28:47] s. Basically, we're still in a zone where you've got to choose one or the other. MPAs are a bit more capable now because they have this client
[03:28:55]  routing thing, but don't do anything too complicated with global state preservation because it's going to break or you have this stuff. It's just not going to be as
[03:29:04] , as, as fast or as small unless you can solve it. So there's a, and it occurred to me, there's a, and I, I, I
[03:29:19]  sat down with the keel and I, and I showed this to him and he was like, okay, "Sure, why don't we just, uh, serial
[03:29:30] ize props children, because we don't know it's used, but then on the server, don't send it." He's like, just use the, the pre-
[03:29:43] serialized template to, to render it. he's like, just solve it in reverse. Such an obvious answer, right? Let me explain a bit. Uh
[03:30:08] , it's a little bit more complicated than that, but I, I needed to build this up to, to get to that. First of all, the serialized
[03:30:16]  version isn't going to have the child islands rendered in it, which means that you're going to have to client render those child islands. Right? But think about what
[03:30:30] 's happening here. This only happens for chunks that come after the words in, during suspense, because, um, if anyone use solid streaming SSR before 1.3,
[03:30:44]  probably not many people you'd have to be incredibly brave. Solid start was like alpha, alpha, alpha at that point, almost no one was doing streaming rendering, but
[03:30:51]  solid's had streaming rendering since like 1.0, like pretty much. But it took to 1.3 to get our current HTML one. Well, the original version of
[03:31:01]  solid streaming rendering was really simple. We rendered the HTML of the outside of the page. And then when suspense completed, like we streamed the data, we just client rendered
[03:31:10]  the rest of the page. And on fast networks, it was incredibly fast. It's actually faster than what we do today. Because if the JavaScript package was already loaded
[03:31:21] , um, the client components could actually start pre-rendering parts of the page that like, cause the way our suspense works, that's not blocking, we could actually
[03:31:32]  like render the page except for like where the show component was that, you know, was like, show me the list or the for list, but we could actually render
[03:31:39]  the rest of the layout in the background. And then as the data came in, complete the rendering. So just stream the data, not the HTML. It was faster.
[03:31:49]  The problem is then I went on a slow network and I realized what my problem was because it couldn't actually show the stream content until the JavaScript bundle had loaded. Whereas
[03:32:06]  with rendered HTML, like the way we stream now, it slots everything into place with script tags pushed into the page before hydration. You could, your JavaScript bundle could load at
[03:32:18]  the very end and then hydrate the whole page, or it could hydrate in any state in between and hydrate as far as it could. So on a really slow
[03:32:25]  network, you know, or where the assets are like delayed or something, put this way, it is pretty uncommon. And your JS will usually load faster than any like
[03:32:35]  data API, perhaps. But if you're doing the request starting on the initial request from the server, that round trip, like you can see it. Then like it was
[03:32:44]  much faster and much better to server render the HTML. But this is kind of taking a page from that book. You're like, look, if you get in this
[03:32:59]  zone, then just don't push it into place until the JavaScript bundle is loaded in the client so that you can client render it and not get a layout shift. That
[03:33:09] 's, that's basically how you could solve this. And then you're not double serializing the data. You're only delaying till the JavaScript loads streaming in some of
[03:33:23]  that content. And I kind of hate that, you know, because it's not as clean and it's not as nice. And it's not and it's a
[03:33:31]  bit and it's more complicated. But I had, I started thinking about it for a moment. I'm like, how often do you do this? Can you guys actually
[03:33:41]  think of a real life situation where you fetch data above? It could be in the island, could be on the server. That part's the same, but where a
[03:33:53]  child component's suspense boundary depends on it to show server children. Because like, pretend this fetch stuff is fetch posts, right? Okay, now we're gonna, now we
[03:34:09] 're gonna, now we got a list of posts, okay? So we only want to show when posts, okay? Like just picture any kind of data you render.
[03:34:24]  What is going to go inside the show component? Maybe a for component? That's like, for each post, right? Do something. Basically, the way this occlusion
[03:34:45]  works across client server is you're, you're, I mean, you could probably come up with a way to serialize the render prop, but then that would have to
[03:34:55]  be part of the client bundle. What I'm, what I'm getting at is, this can never receive the information from the resource this way. Like, if,
[03:35:09]  if this was up here... Essentially, like, if you load the list here and then you render the list in here, then like, why are you even doing this?
[03:35:26]  Like, the, as this, this use case is actually probably very, very edge case, actually. Because if you're, as I said, if you're fetch
[03:35:38] ing in here, you're not going to put props.children in here. It can't receive the post. It can't render based on the information given. It
[03:35:47] 's no way to get the information into this thing. Basically, it's static layout pieces. Like, I can see you using it for a fallback. But,
[03:36:02]  like, it's, it's, it doesn't actually make a ton of sense. Like, basically, any situation in which you could, like, most situations in which
[03:36:14]  you could, like, put it in here, you could also probably pull it outside of the, of the suspense boundary. I'm not saying every situation, but I actually
[03:36:24]  think this situation is actually much, much rarer. Because for the most part, um, you're probably going to be fetching data on the server and susp
[03:36:36] ending on the server. Because there's no, the second you have to pass this through here, now you have to serialize it anyway, because now it's a prop
[03:36:51] , right? Like, yeah, anyway, just, just a, just a, a sort of thought here. So, I think even the least, the less desirable
[03:37:07]  solution in this zone is probably sufficient for the case. But, I just wanted to give you all a little bit of a peek into my head in terms of why islands
[03:37:19]  and our, and server components have very different considerations when it comes down to actually implementing with client-side routing involved. Um, well, they don't, they don't
[03:37:38]  actually have to be, um, a slot element. I think slot elements are almost useless. I mean, like, I use children here, but like, fallback
[03:37:50]  is another one of these, right? We have slots, they're, they're, they're named props. Like, if you think about it, this is also,
[03:37:58]  uh, like a server context being passed in. Um, so, like, I didn't even realize this, but, um, Nikhil, let me see,
[03:38:10]  let's see, do we have the latest solid start, um, solid start? What branch am I on? Um, I do not, let's check it out,
[03:38:23]  let's check it out. I want to, I want to, I want to show something, uh, remind me later. Let's, let's go, okay,
[03:38:28]  solid start. I am on the Astro branch. Let's go back to main. And pull, because I am 167 commits behind. I want to show something
[03:38:40] . I, I took another look at his notes demo. And I, I, I only thought children worked, but when I actually looked at his notes demo, I
[03:38:53]  want, what is it, the sidebar notes here, um, see, he's passing children and expanded children. Basically, any name, any, like, we called
[03:39:09]  it children here instead of passing it between the headers, but basically name props are, are any prop can be handled, treated as a slot. Right. You have to
[03:39:20]  serialize all the props essentially. That's, that's the, the, that's the thing. And we can tell when something is a, is, is an HTML
[03:39:28]  element. We have a special like object format. Um, yeah, the only thing I'm going to notice is I, I told, I mentioned before, we don't
[03:39:41]  actually, um, support, um, the show and hide thing currently. So he's actually showing extended, expanded props always and using display block or none as a way
[03:39:56]  of toggling it. Um, it, you know what, actually, let me, uh, let me, uh, let me open this for a second. Show you
[03:40:06]  what. NBM use 18. PM, PM install. Let's just get this going. Um, this is like the whole solid start repo. So it takes a
[03:40:27]  minute. Um, yeah, let's take a look at this. Um, PM, PM filter. Um, um, what is it? Example notes,
[03:40:52]  sample notes dev. Okay. This is on the latest 0.3 release. We changed to using react syntax for our islands. Um, you can play with it.
[03:41:12]  We have the notes and the movies demo now available as code. Everything's been merged in. I'm not happy with the layout and stuff. And that's part of what
[03:41:19]  I'm working on. It's still experimental, but, um, let's go locals 3000. Um, lovely. What happened here? Oh, do I, it's
[03:41:30]  funny. It's like, it's like, I have redwood open too. Don't I? What is this one? Huh? Interesting. I haven't like
[03:41:46]  updated or ran this on my computer recently. It's funny though, because I, this was working at the time of merge. I suppose I could go back like a
[03:41:58]  couple of versions on main. I must've broke something recently on the notes demo. Um, let's go back to where I actually did the merge. Let's go here
[03:42:09] . Let's go here. Yeah, sure. That's not a good sign. It's like everything's already up to date. So let's discard this change.
[03:42:29]  Yeah. This is interesting. It's like, give me a different lock file. Yeah. This is like a mini flare issue. Cause the notes demo uses cloud flare
[03:42:57]  locally. It works on my other computer. It doesn't work on this one for some reason. Probably something worth looking into. So I guess I can't show it right
[03:43:05]  now. Unless I can find that. You're using an old PM PM. Is that what's going on? Unless we can pull up that, uh, demo again.
[03:43:16]  And I keep on so funny. I never remember. This is also published somewhere. Um, this example, uh, let's, I'm going to stop the ast
[03:43:29] ro one as well right now. And if I, no, it's not even, is it running? Okay. Um, shrink that. It's just very
[03:43:46]  odd. Um, what's it like? NPM. So PM PM. At latest dash D. I don't. It's interesting. I probably. Okay.
[03:44:36]  Uh, this is too bad. Cause I like literally look at this exact example with, with Nick, Nick heel on the phone, like just build it with it like
[03:44:49]  yesterday. So it's like, it's like, it's not the, it's not, it's not the version of this. It's, there's just something
[03:45:01]  very odd going on. Just too bad. Cause. Oh, no, wrong one. Cause it is just not playing ball for me right now. Okay. Um,
[03:45:17]  and I don't have the link right now. It's on previous streams, but I don't actually remember. I mean, I could try it. Vinci.
[03:45:33]  notes. You see the local host. References, but not, not the actual deployed version. Okay. Um, to answer your question though. The, I believe he
[03:45:55]  just used a template element, very similar to what Astro did. I think he may, might've used a hidden div or something, but it was the same concept.
[03:46:03]  He just put a dom element in the, in the markup and then he's, he swapped it in. It was very similar to the Astro approach. Um
[03:46:11] , I, I believe he used, uh, array index as a way of like knowing which child to grab. You could also use the prop name, but essentially you
[03:46:23]  just need to identify the specific, uh, block, so to speak, um, associate with the prop. And then you can just consume it when it, when it starts
[03:46:33]  up. Uh, yeah, maybe restart the terminal. Yeah. That's fair. Just these kind of issues always, always get me. I mean, the funniest thing
[03:46:47]  is it, it feels like my NBM problem, right? Cause again, node version. No, this, this actually looks more promising. I doubt that
[03:47:14]  PMPM is the reason for this, but yeah, there's problems. I don't know if I like use client, but there's problems with the import. The
[03:47:28]  problem with doing the import was like people, it got really too specific. Like instead of being able to just be like, okay, I authored this component and you
[03:47:37]  can use it. It became like this whole, like, do I want to use it this way? Which is nice. Like Astro, you know, where you make
[03:47:44]  that decision on a per component basis, but it's a pain in the ass when your anchor tag, you're doing that like every freaking place. It's funny. It
[03:48:05] 's actually downgraded beat there. Okay. I'm not hopeful that this will actually work, but you know, whatever. Oh, damn it. It really was P
[03:48:21] MPM. Let's make a note. Alright, and let's edit that note and add some stuff to it. Okay. See how this note expands? Right?
[03:48:45]  Okay. Let's look at this before we expand it. Solid children. Header, whatever. And then he has div display, non solid children, some stuff.
[03:49:01]  And then when we swap it. Oh, that's funny. He's actually just, he just, yeah, he, he actually wrapped it in place, like where it
[03:49:17]  was used. That's interesting. Yeah. I guess that makes sense. Yeah. He, he's literally just. Yeah. He. Yeah. It, it,
[03:49:33]  it makes sense. He's just, he just renders it where it's used and then uses display none to toggle it. Yeah. Yeah. There's no sw
[03:49:41] apping or moving anything around because it's, it's just always there. If it, if this was like a show component, it wouldn't work, um, essentially in
[03:49:48] , in the version. This is, this is what tipped me off on all this stuff. Cause I was like, okay, next step, let's just show hidden
[03:49:54]  components. And I realized I'm like, it is really hard to know if something's been rendered or not. No, this version isn't double data because this version
[03:50:05]  literally, uh, doesn't serialize both paths. Like it, it only shows what's shown. If, if this was using a show and it was display none,
[03:50:15]  like if, if I go back into this example, this isn't double data. Cause it doesn't solve the problem, uh, is, is the best way I can
[03:50:21]  put it. Like if I go into this example, let's go notes, I'm going to go note sidebar here. And if instead of using, um,
[03:50:33]  display none like that, if I change this to like show is expanded. Yeah. Right. Yeah. Let's do that show when is expanded We just change it like
[03:50:53]  that. Now what's going to happen is page loads. And then I'm going to expand it and you're not going to see anything because it's just not there.
[03:51:03]  If I inspect, as you can see, there's this button, right? But there's, there's, there's just nothing here, essentially. Like the reason it
[03:51:13] 's, there's no double data is because it hasn't actually solved the problem. This is why I started looking into it. Cause I actually wanted to solve the problem,
[03:51:19]  um, so to speak. Yes. Yeah. Server components can do this. And that's why I was saying, I want to solve this. Astro can do
[03:51:35]  this as well. No, no, no, no, no, no, no, no, no. I, I, server components, they always send it.
[03:51:45]  Oh, I mean, oh, you're saying if you do the show inside the server portion, then you're not, it's only going to, it's going to
[03:51:54]  only send the resolved HTML back to the client. But my point is if the state is something that you toggle on the client, it can't know. Um, uh
[03:52:06] , it, it can't know that cause you pass the, you just pass the props in. It's going to send the whole thing, even in a server component scenario
[03:52:14] . I was playing with next doing similar experiments. I haven't solved it. I have an idea. That's what I was talking about earlier, but it is a
[03:52:25]  hard problem. I understand very much why react, uh, did it this way. I think the only actual solution that I can think of right now is don't send it
[03:52:36]  in the HTML when you hit this case, like basically choose one or the other. If you access the prop before serialization, you know, before flush, you know,
[03:52:48]  that's good. You know, you don't have to serialize it, you know, side, side, you know, keep a side of relief there. But
[03:52:54]  if you find yourself accessing, accessing a prop after serialization, after flush, then you're like, okay, I guess I can't send what I have here. I
[03:53:07] 'm going to get the client to do it. I'm going to get the client to do it. I'm going to get the client to do it. Well,
[03:53:24]  it's still not simple because like the, the, the Astro solution is way, or Astro's approach is way simpler. It doesn't solve the problem. But
[03:53:33]  like, I feel like the react way might be the simplest way, or maybe not the simplest, but like you start, you start understanding when you think about serialization.
[03:53:44]  Yeah, how should I put it? I'll get to that in a minute. The react way is, is, is very close to the, is, is a
[03:53:50] , it's as close as simple as you can get to solving all the constraints. I think that there's a lot of complexity here though, just to solve the problem
[03:54:03]  in general. What I was going to say is the problem, isn't just the serialization, but the server rendering, right? If you're not careful, you're
[03:54:09]  going to server render everything twice too, right? That's why react does the two passes because that way when they run the RSC part of the rendering, they know
[03:54:21]  they don't have to ever run it again. Like serialization and rendering, it's the same process. Whereas it's a little bit trickier to do that if everything
[03:54:36]  is already like entwined. So there's that as well. Of course, if you know what's used and what's not used, then you avoid that problem.
[03:54:50]  Unfortunately, knowing that is basically impossible in an ASIC streamed world. So like, I don't know. I think this is, this is, this is why
[03:55:12]  I'm interested in this problem space. Cause I think that we can do, we can do better. Like I think that if we don't solve the double data here
[03:55:24] , we're not really solving the problem. And if we don't have the functionality that react is giving with server components, we're not really solving the problem. I've
[03:55:40]  tried to reduce the scope of that, you know, but I keep on coming back to the same need. So maybe that's like a, um, television on my
[03:55:50]  part, but it's, it's, it's, it's why. Uh, yeah. DataHK is a hydration ID we use for picking out, um,
[03:56:04]  the templates because JSX can be created in any order. Um, and the code runs at that point. Um, and the code runs at that point. So the
[03:56:12]  order that stuff has created isn't necessarily the order it appears in the Dom. So we needed a, uh, ID system to match it up. Okay. Okay.
[03:56:21]  That's probably enough on this. I understand that was probably a bit of a lot, but I, I, I like time to time giving people updates on where the thinking
[03:56:32]  is and the research is because I, I got to feel others thinking about this problem or hitting this kind of stuff. Maybe it's only framework authors, but I wanted
[03:56:42]  to make it very clear to people. Um, from my perspective, where I'm at right now, react server components are a logical place to get to when following this path
[03:56:55]  of the way to follow the constraints. I'm not happy where that is, but I have to acknowledge that it's very sensible. You don't need the stuff to
[03:57:09]  do SSR. SSR story is great. Uh, it's just like, there's a desire. It feels like we can do better. Um, and that
[03:57:22] 's the, that's a challenging problem that basically all the solutions are kind of overly complicated. Yeah. I mean, I've thought of so many ways to do this.
[03:57:43]  Like, like what if the props themselves are resources and then like you just, wait until the end of the stream to, to like send any ones that like. Aren't
[03:57:59]  accessed right away. Because, okay, check it out. Anything needed for hydration. Any prop access for hydration is going to be accessed during server side rendering. Presumably
[03:58:13] . Right. So like when you're initially going over the page. hydrating or not. Resumable. It doesn't matter. What I'm getting at is
[03:58:23]  like. You know that anything needed for hydration for that part is going to be present. So you can kind of bank on that a little bit. But the problem is.
[03:58:33]  You, you want to be able to interact with the page while it's loading. Which, or you have effects that don't run on the server. Or, you
[03:58:44]  know, things like that. And obviously the effects that don't run on the server are probably not going to be rendering HTML like JSX. So like you, like you
[03:58:54] 're probably fine there. But I, again, you could be streaming stuff and toggling the visibility of the part that's streaming. So, um, to be fair
[03:59:04] , we bail out of streaming most of the time in those cases. But, I mean, I guess on the positive, you know, you know that it's there.
[03:59:21]  So, I, I think there's still room. Like I might still be able to find even a greater simplification by making another assumption. The biggest problem when doing
[03:59:28]  optimizations or architecture around optimization assumptions is that some point later you're going to realize like, oh, I do need that. And it's a gap. And then you
[03:59:37]  have to work to solve that gap. But I, I'm hoping that we can get to a point where the assumptions are relatively reasonable. Right. You're referencing Marco
[03:59:51]  pre very free. If it's so good, why isn't spread? Well, I mean, it's because developers are shallow. I mean, that's really going to
[04:00:01]  be it. I mean, there is some, some issues with like tooling historically because they have to build all their own stuff because they're so far ahead of the curve.
[04:00:11]  But mostly it's just like people, you could see like Twitter, like people will spend more time arguing about what syntax they haven't felt versus, you know, react
[04:00:21]  or whatever versus like, you know, talking about like something mechanically important, like composition. Like, are these things composable or whatnot? Like, I, I think
[04:00:30]  that in Marco's case, the language is so alien that people just kind of throw up in their mouth when they see it. And that's the end of it.
[04:00:37]  They could literally be the best framework ever made in, you know, and like that will be the, the, the result. If you're, if you're so smart
[04:00:51] , why are you so poor? Yeah. It's a bit like that. Yeah. Twitter has been lost to HTMX. That's funny. It's fine
[04:01:02] . This is one of those things where you just don't say anything. And then you, you get to just smile later. Greg, I'm trying to read what
[04:01:21]  you're saying. It's basically the inverse of only Sierra's props read in islands. Only Sierra's island render props, not read in islands. Yeah. Now we're
[04:01:34]  talking about open source. Um, yeah. I mean, yeah, the, the, these are not easy problems to solve. Um, I'm just going to get
[04:01:50]  set up here for this week in JavaScript. I don't think it's gonna be a long one. Um, I, I'm still optimistic that we can find optimal solutions
[04:02:04]  here. That's the research I'm doing. That's, that's what I care about. Um, I'm, I'm very excited about like, there's
[04:02:17]  like two levels here, right? There's like the baseline level of what, um, we're working towards in terms of solid start, trying to get it like out of
[04:02:27]  beta and what it's like, what it's capable of and what solid is capable of and like 2.0, like that, that whole level that gets me very excited
[04:02:35]  about how things are now. And how much better they can be. But I think it's important to look at these longer term things as well, because directionally,
[04:02:45]  these things never stay still. Um, and you know, I, I, I've got, I gotta give my props to, as I said, the continued innovation across
[04:02:57]  the frameworks, right? People give react a hard time about, uh, server components, but it is a very reasonable approach to these things. Um, okay. Yeah
[04:03:13] . All right. Yeah. We're going to see just how sure this is. Sure this is. Yeah. Okay. Okay. Perfect. Okay. Give me two
[04:03:25]  seconds. I'm just going to get the other stuff going. I'm wondering, did I actually bookmark anything this, this week? Oh yeah. I did book
[04:03:38] mark one thing. That's funny. I'm probably going to get in trouble for it too. Maybe I should be careful about it. Uh, let me see here
[04:03:52] . Yeah. Yeah. I don't have much in solid news this week, other than somebody found a bottle with the solid logo in it, but I, I don't
[04:04:05]  think we need to talk about that. Okay. All right. Let's, let's get ready for this week in JavaScript. Let's get our banner going. Um,
[04:04:14]  all right. Perfect. Perfect. This is going to be a short one. Unless anyone has anything else they want to say before we get started, but it looks like
[04:04:31]  you guys have all caught up with me. All right, let's go. So we're going to talk about this week in JavaScript and this week, like last week,
[04:04:41]  maybe I wasn't paying much attention. I don't have an Anthony here to, uh, prompt me on all the, the comings and goings. I've
[04:04:49]  mostly kept my head down working on these really hard problems. You know, catch a few Theo videos, make sure he's still making good thumbnails. But other than that,
[04:04:59]  you know, keep him pretty much to my own stuff. And, but funny enough, surprisingly, if we talk about this week in JavaScript, I actually don't have
[04:05:09]  much in the way of solid news. In fact, um, we're just continuing to work really hard, um, on stuff. Uh, this might be the most exciting
[04:05:19]  thing that I saw a solid this week. No, to be fair, actually, I was in Europe and I saw a similar thing. Apparently there is a water company whose
[04:05:26]  logo is very similar to our logo. Maybe I shouldn't be saying that publicly. I don't know. It's probably a bad thing, but I saw that.
[04:05:37]  The other thing that was actually interesting, um, for those who actually met, uh, is we did our first, um, office hours with, uh, this.med
[04:05:48] ia on Thursday. It, or sorry on Wednesday. It was an interesting event. There was only, you know, a couple dozen or not even a couple dozen,
[04:05:58]  like just over a dozen people. So it was a small cozy event where a lot of people got to ask the questions they wanted to ask, ask some of those tough questions
[04:06:05] . I think it's a cool format. Mind you, most of you just say whatever you want on the stream chat anyways. So I'm sure you get enough questions answered
[04:06:14] . At least the people stay around to the end. The people who ask for stuff right at the beginning of the stream, sometimes, sometimes, uh, get missed out
[04:06:20]  on that. So yeah, I don't know. Slow week on news, but not slow week on development. I'm very happy soon to share what I've been working
[04:06:30]  on solid start. And I've been preparing my talk for upcoming beat conference, um, that I'll be speaking at. So, uh, I'm looking forward to it
[04:06:38]  a lot. Um, in terms of things out in the ecosystem, I saw that I bookmarked. This is probably the one that gets me in trouble, but
[04:06:50]  Fred K. Scott decided. He's like, there's been zero commits to Gatsby repo in the last 24 days. Um, which got a lot of people's
[04:06:59]  attention. Zero merge pull requests. And he's, he was suggesting that it had to do with the Netlify layoffs a month ago. And kind of true
[04:07:13] . I mean, uh, a number of the, there, there, there aren't that many people being paid to actively work on Gatsby. They'll work on
[04:07:23]  frameworks. And we have a lot of Gatsby customers in Netlify, but, um, Ward Peters, who, one of the brilliant engineers at Gatsby
[04:07:33] , who's actually no longer at Netlify, um, basically straight up called it dead. The whole staff is going to step one. It still works well,
[04:07:42]  but don't expect major react 18 features to land. I can't speak for the truth of this. He was very close to the project, but if, if, if
[04:07:53]  someone was to say that Gatsby the framework was officially dead, um, it would be this. I'm glad Phil went in to actually clear this up. Fear
[04:08:04]  not. Gatsby is vital to a great many of our customers. Updates reacting in Gatsby diversity are the most imminent updates, but we're busy investing
[04:08:10]  in platform primitives for stronger Gatsby. Yeah. So yeah, this, this is, this is part of, um, Netlify is new. Well,
[04:08:18]  not new focus, but reinvested focus on looking at the primitives, the web, the basically help all frameworks. Um, I've been involved a little bit
[04:08:26]  in this process so far, and it's been exciting to see, um, such energy around the senior engineering staff around like kind of inventing and creating again. I work
[04:08:37]  on a great team at Netlify that does a lot of that creating. So I think there are improvements coming along the way. Um, you can definitely expect that
[04:08:46] . Ward obviously is a much more suspect, but I, I, I think, I think there's an important topic here because the react 18 changes are significant, um,
[04:09:00]  especially with server components and stuff. So it will be interesting. This is, it will be interesting to see, but, um, this, yeah, I mean,
[04:09:12]  this is kind of the whole, this is the picture of what's going on right now, I guess from both sides. I just wanted to kind of throw that out there
[04:09:19] . I don't know how many of you use Gatsby, but Gatsby does have a lot of users. If you look at their numbers, they're
[04:09:28]  still, you know, reasonably high, high for the react meta frameworks. All right. Yeah. Yeah. I, I only got a couple more things here. First one
[04:09:47]  is, um, response to the stream. And I, I think this is something that I talked about at the end of the last stream. And Aiden kind of
[04:09:57]  pointed out, he's, he's, he's like, he was tuning into the stream and he said, an interesting framing for million JS was proposed. Million may push
[04:10:06]  react to get better performance. React holds principles that make it relatively slow at updating. With million react, users start to question why that's the case. Devs will start
[04:10:14]  exploring alternative, faster frameworks, solids, felt, and the like. Users try first try million, get hooked on performance improvements. Next project they try out, pre-
[04:10:21] act maybe, then stealth, et cetera. Million becomes a gateway drug for faster frameworks. TLDR million makes us question the current state of UI performance and gets us to do
[04:10:29]  something about it. I mean, this is a bit of an idealistic take on, or take on Ryan's take, but take it as you will. No, he
[04:10:36] 's right. That, that was basically what I was suggesting, um, to a certain degree. And, um, I, I think there was, uh, I
[04:10:47] , I, there was some good discussion on this thread. I actually did quite enjoy seeing different people's perspectives here. That people talking about, like, well, we have
[04:11:01]  to change how react works, see react, forget. If devs choosing react, they probably don't care about performance anyways. I, the only reason I want to
[04:11:12]  bring up this discussion here is that. I, I, I do think that while react continues to innovate, they've explored one specific direction really far and done quite well
[04:11:33]  with it. There's going to be trade-offs from the, those fundamental architectural decisions that lock in certain types of solutions. So as long as people can be creative
[04:11:44]  on the other side and take that different directions, I think there's a lot of potentials for alternatives. And I think, I think seeing stuff like, uh, millions
[04:11:55]  really helps with that. I, I, um, yeah, I want to, yeah, to talk to this one. I don't know, but it seems to me
[04:12:01]  the contrary is true. I think it confirms that react is perfectly fine. And when you need to, you can pull out stuff like millions to solve particular performance issues. Yeah
[04:12:07] . I want to talk about this one particularly. Um, this isn't to be too harsh on million, but unless you believe performance problem is actually more fundamentally applied,
[04:12:18]  because the idea here is million can make, and I don't know if I emphasize this enough on the stream a few weeks back, it can make the leafs faster.
[04:12:26]  It can make the diffing faster. It can make the actual rendering sections faster, but it doesn't change the re-render architecture, the, the way that state drilling
[04:12:35] , props drilling caused tree re-renders. Right. So like if you have a benchmark where you show a bunch of leaf nodes changing, then millions improvements are drastically
[04:12:49]  overemphasized compared, um, you know, like in fact, you know, a fast VDOM in that scenario, it's as fast as even maybe slightly
[04:13:00]  faster than a reactive library. But the impact to be able to include that has an author authoring cost. Right. And this is, you know, fine. You
[04:13:15]  know, like you block things out. You have to be very conscious of the performance piece instead of authoring in a way that's like, how should I put it?
[04:13:22]  Like always authored for performance. Just the way you authored, you have to have to be like, go here blocks. Now it's interesting is millions working on
[04:13:29]  auto compiler to identify those blocks, but the improvements are still going to probably be in the same range unless they're swapping out control full. But even the control full mechanisms
[04:13:38]  here, if not reactive, still have, unless they can isolate the state updates at a sub component level, like signals do, you still have this problem fundamentally. So
[04:13:50]  it's like, I think there's a reason Svelte 5, you know, in those fast benchmarks we saw, you know, from Rich, where is that?
[04:14:01]  I think it was right here. He says, this is what happened when true ADM joins your team. This is also what happens when you use signals to render instead of
[04:14:11]  a VDOM. Right. Or even not instead of a VDOM, instead of whatever Svelte was doing before. Like this test is shallow. Mill
[04:14:23] ions is probably about the same score, but like, I think we're seeing a fundamental ship here, much bigger than people are giving it credit for. People think of signals
[04:14:35] . They think of state libraries. They think of, oh yeah, I can use the pattern react and I can get a, you know, a bit more performance or whatever
[04:14:40] . This is so much bigger than that. I never liked touting things as like a revolution. I'm always like, yeah, you know, I don't have
[04:14:48]  to come in and say this is way different, but it is. I think the reality is kind of setting in that the change of rendering style that solid introduced was not an
[04:14:59]  evolution to react. It was actually revolutionary and it's actually in fact, impacting every single framework in the JavaScript ecosystem. I probably marketed it wrong. You know, people
[04:15:13]  like, oh, you know, who wants incremental improvements? No, it's people who look, that take is, is kind of missing the point. And I think,
[04:15:24]  as I said a couple of years ago, I think this is only going to continue to be more obvious as time goes on. Yeah. Million plus Jota. Yeah
[04:15:44] . If you could combine some state atoms with some rendering thing. But like what I'm getting at here is. I think that's what you, every react developer,
[04:15:55]  maybe that's what they should do. But once you do that, like really, how far are you at just picking up solid? Because you basically replace reacts state solution with
[04:16:09]  a bunch of atoms. You're not using react state and you've now all the key rendering pieces are automated block. Like reacts, you know how like react really didn
[04:16:19] 't like signals and pre and react that preacted because they like they overrode the beat on thing. At some point, if million ever got popping up, react
[04:16:26]  would probably find a reason for not liking million because it messes with some underlying thing that they want to, you know, shift or change in the future. I think
[04:16:34]  react forget is actually the most obvious version of, of that it's it's react has a vision and a direction and adding stuff, you know, state libraries, all this
[04:16:45]  stuff. If react ever gets an interest in the zone that you are adding to it, it will just get displaced by their own thing. I think a perfect example of this
[04:16:58]  is anyone trying to do like use, make external or use external store type stuff after concurrent rendering and stuff. Like we can, we can make mob X work in react
[04:17:08]  still, you know, we can do it. But like things have gotten to a very different zone. If you ever hear Tanner Lindsley go off about how, you
[04:17:16]  know, trying to make this stuff work. Like that's what it feels like to fight against it. And at a certain point, you're just like, why am I
[04:17:22]  fighting against it? Why am I doing all these things to make it just work a different way? Not the way react should work, but just a different way. And it
[04:17:30]  is very different. I think we use bind. Yeah. I think that's bind to the function execution. Yeah. I think we use, I think we use bind
[04:17:47] . I figured faster. I think it was slightly indistinguishably faster from closure. The problem is like this, this is, you can also use classes prototype
[04:18:02] , which is a little bit, can be faster. I'd love to go back and revisit that. It hasn't made a huge difference really. Anyway, just something
[04:18:17]  to put out there. I feel like I've actually been underselling it. Like when you have something ex felt, which is a different language, people are always like,
[04:18:24]  wow, that's so revolutionary. You know, look how they changed the way we author stuff. And as I said, it comes down to like, why isn't Marco
[04:18:30]  more popular? It's like, it's, it's, that's the thing that catches the headlines. The truth of the matter is I saw some benchmarks. I
[04:18:39]  think it was. Let me see if I can find the tweet. Give me two seconds here. I, I think I posted it in a really findable place.
[04:18:50]  Yeah. Perfect. Yeah. I should have bookmarked this. Here we go. Let's, let's throw this one in here. Didn't anyone see this whole
[04:18:58] , uh, uh, this benchmark here, right? React Svelte view benchmark. Your eyes are not deceiving you. View three is currently performing better than Svel
[04:19:07] te and react. And it shows this table over time, right? Where it's like, you see react kind of going here, slowly going down. You see view
[04:19:14]  making incredible improvements. And you see Svelte kind of just toeing the line for the last three years. Right. And I, I, this is based on the
[04:19:24]  JS framework benchmark. And I, I was like, it's too bad they didn't put solid in here. This is clearly a view perspective one. But if you
[04:19:36]  go back five years, actually we can kind of guesstimate. Cause Aiden said, oh, let's add a million. It's so fast. You can
[04:19:46] 't see it. He like threw it on there. Solid would be like that line along the bottom here for the last five years. Like over time frameworks will shift down.
[04:19:58]  Like you, we're hitting a wall here. So things are not getting any faster. Um, really for this test, it's, it's, it's the
[04:20:08]  end of the line. But what I was trying to get at is that like, eventually Svelte five is going to come out and use rendering techniques, you know
[04:20:18] , similar to what Saul does and get in. It's also going to be on that line, so to speak. Right. So like I, what's the revolutionary thing
[04:20:31] . Is it the, is it the language or is it the mechanism? Well, maybe it's both. Right. So that I, I don't need to need to
[04:20:39]  dribble into that too much further. It's just, it's one of the things that I've kind of. frustrates me somewhat about the dialogue around these things
[04:20:50] , because it's kind of like. If you're in a position where you feel the need to defend the incumbent repeatedly, it usually means that you're going to, you
[04:21:01] 're going to miss the, the changing of the wave. Like it's not going to happen. You're not going to notice the thing until it's already happened, which
[04:21:07]  is fine. I think a lot of people should be there. I'm just saying like in general, it's not particularly valuable. Yeah. Anyway. Last thing for
[04:21:21]  this week. Although, let me see if this chat has anything to say. Um. Yeah. We used to be classes. I, I, I, I was having
[04:21:40]  problems with TypeScript at the time that it was just really ugly to write. The stuff without the TypeScript compiler changing the code in a way that was really nasty.
[04:21:49]  So like, I just, I got rid of classes. Purely for that. Solid 2.0 is actually written on classes. Like the new reactivity. I just
[04:21:58]  basically was so. Like. I forget what it was. But like it was, TypeScript was generating really ugly stuff back when, back in the day. I guess
[04:22:09]  I, like I had my target too low. And I like, it's because TypeScript kind of encourages you to put stuff on as like member properties. So you'd
[04:22:21]  be like class. And then you'd like, instead of putting initializing stuff in the constructor, like you'd put it. Like I didn't have to, I
[04:22:27]  could have initialized all the types in the class definition and then gone in the constructor and assigned all the initial values. But it made me write everything twice. Whereas like
[04:22:38] , if you try and initialize. the value without the constructor, then TypeScript, you know, would previously generate this really ugly code because they didn't support like
[04:22:51]  properties, whatever, you know, like initializers. Do you think there's still room from the different portions, including using WASM? The floor for swapping rows and
[04:23:08]  removing rows is very low. Leptos equals, it's the latest official. Well, that's interesting. Is, is RustBindGen down there too?
[04:23:15]  Fine. Let, let me look. JS framework. Funny thing I've been noticing is that the create. Yeah. Okay. So create's not bad. Let's look
[04:23:33]  here. Swap. Do. Do. Sledge. Let's see. What, what, what am I looking for here? Leptos. I think it
[04:23:48] 's around here. Swap rows and remove rows. These two. 25, 3, 39, 6. It's like in the same zone, I guess. Funny
[04:24:08]  thing is like. We're a bit slower here. Um, where's million right now? 26. Block DOM is fast. Yeah, maybe, maybe. Sometimes I
[04:24:23]  wonder how much of this at this point is run to time variance. Remove row has been a problem for us all, but I always assumed it was, um, memory.
[04:24:32]  Um, VDOMs do a little better. But like, we're getting so freaking tight here. Okay, look at, look at, look at this stuff
[04:24:39] . I love this because vanilla is 400. So you can see that we're like, for inserting 10,000 rows, we're like all within, like the fronts within
[04:24:52]  10 to 20 milliseconds of each other. It's pretty crazy. Yeah, I was, the reason I was asking about WASM bind gen was I was trying to see
[04:24:58]  if like, this was a consistent thing or. Yeah, I mean, it's, it's close. We're getting at a point where there's, the differences are
[04:25:09]  just so minute. I can't even, I don't know what's run variance. Yeah, I mean, WASM, yeah, is the gap between WASM
[04:25:26]  bind gen and vanilla getting smaller? Let's try that again. Let's go none. Vanilla, this is, this is what you want to be paying attention to.
[04:25:37]  WASM bind gen. How close are we getting? That's a very bad select row for vanilla. Yeah, the select row is hurting it, but it is getting
[04:25:58]  closer. I remember when it was more like 110. For the longest time, solid was faster than WASM bind gen. I think now we're at a point where WAS
[04:26:06] M, the gap is getting very, very, very close. All right, sounds good. Okay, last thing for today. Mark Grabonski, if you don
[04:26:26] 't know him, or Grabonski, I probably said his name. I'm probably, he's the guy behind Frontend Masters. I do have a course there
[04:26:33] , just to kind of give you a heads up, but he did a poll, essentially, where he's like, "Hey, let's, what do you guys want
[04:26:42]  me to talk about?" He likes doing vanilla JS. I remember this after the course. He was really happy with the first morning session on my course, because I took
[04:26:51]  really fundamentals vanilla JS teaching approach. And he was just like, "Yeah, you made it make sense to me." And he was like, "Okay, everyone wants
[04:26:59]  to hear about reactivity." I am literally going, he talks about 18 different ways people use the term reactivity. I mean, his idea was like to kind of be
[04:27:10]  a compendium. Like, I might not agree that all these are reactive in the same sense of the word, but if someone says reactivity, he basically is like
[04:27:19] , "Okay, I'm pulling that in." And it's, it's thorough. He talks about pub/sub patterns, obviously, observer pattern. He talks about
[04:27:29]  using proxies on objects. These are the basic ones, right? But, you know, then he starts talking about like, observables and Rx. Good description
[04:27:40]  there, signals. He uses my pseudocode from the, it's not pseudocode, it actually runs, from the, from the, from the course
[04:27:49] . And then again, more observable reactivity. This, it talks about a lot of rendering patterns, mutation observers. One thing he doesn't talk about here,
[04:28:03]  I guess, is the way solid does rendering. But it's kind of self-evident if you just run effects to update the DOM. You know, like,
[04:28:16]  this approach to reactive rendering and UIs, I think is based on simply the concept of, is this using proxies? Oh no, this is blowing away the other
[04:28:30]  DOM. Yeah, yeah, and he's talking about diffing. Yeah, I don't know. This, this, this is, this is, I read through
[04:28:39]  the whole article and I was very impressed that he pulled the kind of a classic sense of the stuff and got all the way down to like, different patterns people use in stuff
[04:28:50] , all implemented with vanilla JS. So this is a very good, like, wide look, if you're ever kind of interested in like, when someone says reactive,
[04:28:58]  what are they talking about? He kind of categorized and he, and he basically shows you how to implement a basic version of all the different forms of reactivity, which
[04:29:06]  is really cool. Yeah, I mean, Observer Pattern or Pub/Sub, these are, these are classic because they don't go away. Like, you know
[04:29:22] , we, we build other abstractions on top of these things. I think it's still kind of like core. I'm not, I'm not degrading any
[04:29:29]  of these things here, you know, everything from down to like event emitters. Um, right. The whole idea is how do you create systems of data that change?
[04:29:37]  I love this kind of definition. Right. Um, so yeah, I think a lot of people watch the stream probably know already a decent amount about a lot of these topics
[04:29:49] . But I think this article is like for the intended audience is really cool because it's like, you know, it just gives a little context. It can be kind of
[04:30:00] , you know, maybe a lot if you're getting into it. But it, these are kind of examples let, let you see like the different ways people mean. Like
[04:30:09]  for example, reactive scrolling, intersection vert, animation and game loop, request animation framework. It's like, these are all really good examples of how to do change detection.
[04:30:19]  Um, and some of these change detection examples, like there's even a few more basically play into like other uses. Um, so yeah, I, I think this
[04:30:33]  is good for a wide breadth kind of shallow look, but it's, it being all imprinted in vanilla JS just makes it really understandable. So very cool article,
[04:30:43]  um, worth checking out. Yeah. And honestly, that's about it. Um, unless anyone has any cool news they, they saw this week, I'm, I
[04:30:57] 'm probably going to wrap it up here because, uh, I got some, uh, poke bowl to eat, um, coming up here. Old school TypeScript.
[04:31:06]  I don't know what this is referring to, but I'm just going to put that up here. Is there TypeScript in the article? Maybe that's, I kind
[04:31:18]  of glazed over that part. I just, I guess I'm getting to a point where I don't even read TypeScript anymore. All right. Anyway, let
[04:31:27] 's see. Is anyone streaming that I know, uh, right now doing anything interesting? I don't know. I, okay. Curious. Will there ever be solid
[04:31:40]  native solid, but for iOS at Android? Um, not as an official effort. I think it takes way too much work, um, to do this. That being said
[04:31:51] , and I've talked about this a bunch last stream, uh, towards the end is because last stream, if I go like, you can, if I go to
[04:31:58]  solid account, there was a whole bunch of, uh, people sharing their, their stuff here. Like had to try revamp with solid and native script, try, uh
[04:32:08] , tor solid and Tori. I think what we're going to see is some of these like more agnostic general solutions, because this is like a hard problem.
[04:32:16]  Not everyone's going to build a react native. We actually have a wrapper of reacting, but then you kind of like lose the solidness of it. I think you
[04:32:22] 're going to see a lot more of this. And I think I'm excited in the future to see if I can nail down one of the, these, uh, native
[04:32:28]  script or Tori, um, you know, here, native script. We absolutely love solid and look forward to putting more production professionals abroad. Like I want to get someone
[04:32:36]  from that side or someone who's played with this stuff on stream and we can talk and look at it. I don't sing it's equivalent to react native, but
[04:32:42]  I, I think that, uh, this is a place where the community is going pretty hard because solid characteristics make it really good for performance, low memory, minimal rendering.
[04:32:54]  And we have universal renderers and stuff like, so it's completely doable. It's just a matter of like putting the time in. And, you know, if you
[04:33:00]  know anything about react native, they, they have, I think more people work on react native than work on react. Like it's just been a phenomenal effort over the
[04:33:09]  years. So when you consider cross company stuff like Microsoft, you know, I don't mean like work, like build application. I mean, building react native. I think
[04:33:17]  it's a giant effort, uh, to spend years. In fact, I was talking to some people who were working on it and they were saying that like the react native
[04:33:25]  that everyone uses is actually different than they've been rewriting it. Again, at Facebook, like we just had an update, I think a year or two ago,
[04:33:32]  where it was like kind of considered like a new version and update rewrite almost. They've been actually rewriting it longer than that and trying to feed stuff back of the public
[04:33:40]  community. Apparently like react native is internally in meta is even further. And then what we get it in the public and they've been trying to figure out how to kind of
[04:33:51]  bridge that gap over time. It's, it's an incredible amount of effort. Next, next week's astro announcements. Yeah. I mean, that's why
[04:34:04]  we had the Astro stream we earlier. So yeah, August 30th, um, is the release. I imagine if it's anything like after on the past, they
[04:34:12] 'll do several days of announcements and push. So I'm looking forward to it. That'll give us a little bit of excitement next week. Bun. Yeah. It's
[04:34:19]  coming up to another, what, two weeks, September 7th. They did a 0.8 release recently, which has support for some meta frameworks. Solid didn't
[04:34:28]  get in it, unfortunately. So I'll start, but, um, it'll, it'll come soon. Yeah. V1, I think it's what September 7
[04:34:38] th ish. So yeah, I, I think, uh, yeah, I, I, I, this is a good time for releases. And I think the
[04:34:48]  next couple of weeks we'll have more of these kind of announcements and stuff. Um, so lots and lots of fun. All right. I think with that, I am
[04:34:58]  going to call it a stream. Thank you everyone for, um, joining me today. Um, just, uh, sorry. I'm going to check Twitch one more
[04:35:12]  time to see what I want to do there. Um, so to speak, uh, if there's, uh, it's fine. You know what? You guys can
[04:35:25]  figure out your own streams. It's all good. Have a good weekend. I got some food to eat till, till, uh, oh, right. Before I
[04:35:35]  forget next week, there is no stream. Um, but the following week coming back, um, I, there will be a stream. Um, I'm still putting on
[04:35:47]  some details, but I believe I will be doing a stream on Nitro with special guest core maintainer of on JS. Talk about that kind of stuff. So September
[04:35:59]  7th or 8th, I got to double check the dates. Um, we'll be coming back with another stream like, and subscribe of course. All right.