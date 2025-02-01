---
showLink: "https://www.youtube.com/watch?v=D1XN8j77Ntk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "JavaScript Frameworks - Heading into 2025"
description: ""
publishDate: "2025-01-11"
coverImage: "https://i.ytimg.com/vi/D1XN8j77Ntk/sddefault.jpg?v=67806e8f"
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

[by:whisper.cpp]
[00:00.00] all right sorry for the delay had some technical problems the last couple days um how are you all
[00:11.30] doing give you a few moments to catch on i hope everyone had a good uh good winter break
[00:23.44] i did i actually stepped away from the work for long enough to just
[00:32.58] yeah i don't know it's been a while i i always feel that temptation you know i just can't leave
[00:38.48] get alone but um it's good i came back refreshed i've been doing a lot of work on solid 2.0
[00:44.38] come say hi in the chat if you're here i'm sorry i started late
[00:49.24] all right
[00:55.54] hello hello
[01:03.82] yeah so literally the day um before i was set to you know get back into things sunday night
[01:16.44] my computer just dies just like i was doing like i think the 15.2 sierra or whatever
[01:24.70] os it's on these days update and it just completely died went in did the disk fix or sort of the disk
[01:34.96] um storage fix um this utility that's what's called and this and it didn't find anything
[01:45.98] at first and then i realized you have to like show the volumes and if the volume is corrupted or
[01:51.82] something anyways i fixed it and then it lost my user and then i had to wipe all my hard drives and
[01:56.54] basically i lost all my benchmarks and my prototypes um yeah
[02:04.68] which which which it sounds worse than it necessarily is because like i was committing
[02:13.92] regularly to like the signals repo is just like the places where i was like putting stuff together
[02:18.02] and trying it so um it's actually not the worst thing it just meant that like now i have to do
[02:23.74] that all again which means that i decided to just do things for real and i've actually started if
[02:27.82] you're following on the solid repos if you look in the next branch you'll see the beginnings of solid
[02:34.00] 2.0 um yeah sequoia yeah sequoia yeah i mean i should know that i've been looking at these trees yeah
[02:41.92] yeah the funniest thing is one of our saving graces on the store benchmarks i talked about a bunch last
[02:49.98] time is that a bunch of people in community wanted to try it to see if they could optimize things do
[02:55.22] their own results so i actually pushed up a branch where i didn't only have my um the like the
[03:03.84] benchmark but i was luckily i had like 20 different snapshots of different versions of the reactivity
[03:09.66] that i was like comparing head to head so i actually have that still so yeah as i said not bad
[03:16.16] but it finally incentivized me i felt like i was like starting with a clean slate but that's that's
[03:21.22] that's uh that's not why we're here today today um let's see i'm gonna get into twitch too
[03:26.76] i probably should tell people that i'm streaming um make sure that my twitch category is in the
[03:32.42] for some reason stream yard always puts me in like talk shows or something which is
[03:37.38] infinitely annoying um just on an aside let me see if i can fix that yeah talk shows and podcasts
[03:44.80] um
[03:46.24] yeah let me see if i can actually fix that but yeah in in general um
[03:57.70] i'm very excited to talk about javascript frameworks um i i'm i always am obviously but
[04:05.48] this it's always this time of year um we feel like get a chance to like actually like
[04:13.92] dig into um
[04:16.24] you know where things have been going you get all those surveys coming in at the end of the year
[04:22.66] which i haven't talked about really much on stream either so um yeah i want to talk about the survey i
[04:29.56] want to talk about my article i want to talk about the state of things as i see it um so
[04:37.00] i'm pretty excited about that because it's funny some people are saying that my article is spicy i
[04:42.60] didn't think my article was that spicy i'd leave that for the stream i leave that for you guys i'll leave
[04:45.80] that for chat um so i'm i'm yeah i'm i think this will be a good one
[04:52.40] i want dry stories like yesterday yeah
[04:56.18] is there a new framework that never happens
[04:59.68] yeah yeah well it's funniest thing is you know every time you know i'm kind of thinking like okay
[05:07.30] what am i going to stream now as a year ago i came on the stream and told everyone that i was not going
[05:11.24] to stream as often right and i this year i didn't i did not stream every single week
[05:15.50] um i cut it down between work and a lot of the streams i'd admit
[05:19.40] might not been that interesting for everyone because i was like very deep into doing research about
[05:27.20] specific problems we'd have people raid that raid us and it'd be like what the like what are you
[05:32.84] talking about it's like oh the subtle differences between reconciling um nested reactivity blah blah
[05:39.42] like no one had any clue what the hell we were talking about
[05:41.70] today's stream much more general we're gonna get that escalator out
[05:45.66] we're going to talk about different frameworks to talk about different tools we're not going to be
[05:51.48] completely down the solid um rabbit hole i'm glad people are hyped for 2.0 um
[05:58.12] yeah yeah yeah i i i i i finally got my eyes tested i probably should have got glasses like 10 years ago
[06:08.62] um i have no clue how i passed my uh license um the last couple times but uh here we are so
[06:18.92] yeah i i have two prescriptions i went from zero prescriptions to two prescriptions i i i basically
[06:25.72] can't see it all um anyway yeah so the glasses are new
[06:32.72] okay okay let's make sure that people know we're live um let me present my screen
[06:47.28] which one are we on yeah this one can you like see my benchmark notes
[06:58.66] this is like this is like the long journey to solve the the store stuff i actually don't have
[07:07.40] very much in the way of uh
[07:10.96] of um notes for the stream it's gonna be very off the cuff just way i like it
[07:19.46] so that's good yeah see they already know i'm live on on twitter because i'm streaming to twitter
[07:24.72] in fact i can see myself um but let's look at uh blue sky
[07:30.50] all right
[07:34.44] yeah sorry running a bit so there's been there's been some interesting stuff the last couple days i want
[07:41.08] i'm talking about too when we get a chance but um
[07:43.52] twitch tv slash ryan solid
[07:53.18] yeah
[07:55.54] all right
[07:58.56] okay cool
[08:04.70] conspiracy theory intensifies
[08:14.50] okay so yeah like the video people yeah youtube definitely helps twitter helps basically anywhere you are it
[08:21.24] it helps um let's see here uh let's go to dev because i'm going to pull up my article
[08:27.10] um theo covered this act my article on um
[08:31.10] on
[08:33.18] uh
[08:35.46] pull up a scaladras too i suppose
[08:37.78] yeah yeah fun stuff um
[08:41.42] on his last stream on wednesday
[08:44.08] um
[08:45.10] 100
[08:47.76] whatever your percentage is
[08:50.72] um
[08:51.56] and i had a few thoughts because he ended up going on a tangent
[08:56.02] i mean it's funny i guess i guess it's just the content that i try and tackle like
[09:00.02] he he's like okay let's do ryan's article and then it took him like three hours
[09:04.04] you know last time it was with the web component when it also took him like
[09:06.54] three or four hours to get through the whole article
[09:09.20] um
[09:10.06] so to be fair
[09:11.90] that's why all my streams are like five hours because
[09:15.00] the topics require i guess a decent amount of establishment
[09:19.94] but the the biggest takeaway that i i got when i was watching the stream was
[09:24.28] i'm kind of sick and tired of react
[09:27.80] i know that's like a weird conclusion it has nothing to do like i don't have any problem
[09:31.46] like i'm just like
[09:33.84] there was a sort of react
[09:36.76] hinge on the whole content and it's fine i mean that's theo's zone
[09:40.70] but i was like looking at it and i was just like man like
[09:44.72] i think the perspective like as i said i don't blame theo for this
[09:50.80] just the perspective of web dev has shifted in such a way
[09:53.58] that
[09:54.66] the react lens on what i'm saying is
[09:59.38] is like annoying and frustrating to actually deal with
[10:02.56] um
[10:03.12] so like again nothing to do necessarily with the framework
[10:06.60] you know but like
[10:10.64] it muddles the message a lot and
[10:16.02] i
[10:17.14] i yeah i've got i probably got quite a bit to say about react today
[10:22.24] um in general because
[10:23.72] it's been
[10:26.02] it's
[10:27.10] i think i think there's a sentiment that's kind of been rising up
[10:32.44] and i i i want to kind of take it head on at a certain point because as most
[10:38.12] people know
[10:38.52] i am a pretty big uh supporter i've always been a big supporter of react like
[10:42.82] comparatively like
[10:43.86] obviously people who write react every day and are diehards you know are more
[10:49.00] supporters of react than i am but like generally speaking most people are
[10:52.28] surprised of how positive i generally am towards react and
[10:55.70] i think that's actually a very pragmatic position to be
[10:58.74] but i i think that
[11:02.04] um you know talking about surveys talking about heading into 2025
[11:06.88] um talking about where frameworks are today
[11:09.36] we got to put where react sits in perspective
[11:12.68] and my perspective
[11:13.86] um might be a position that doesn't get me any friends
[11:18.06] right
[11:22.10] yeah yeah exactly
[11:27.48] reactive jsx i like jsx i know people don't like jsx but like
[11:38.66] if you view jsx as a
[11:42.40] templating language which can be
[11:45.42] piecewise chopped up
[11:47.92] then like
[11:49.84] like that's what jsx is to me right like it's not
[11:53.84] it's not like it's not like like some people are like
[11:56.54] like strings are things that you can chop up
[12:00.22] you know like when you are putting together a string of html on the server
[12:05.02] um
[12:06.52] very arbitrarily
[12:08.18] components in a lot of template dsls and the
[12:11.82] the markup in them
[12:12.80] less so
[12:13.94] and i i think
[12:15.48] i think that's why i like jsx but that's a different
[12:19.02] comment completely from where i'm on react
[12:21.26] oh would i still like react if there's no jsx
[12:26.70] i mean tag template literals
[12:30.16] oh
[12:31.82] no this statement can't be true
[12:33.78] like not absolutely
[12:35.08] tag template literals
[12:36.44] on one hand you can be like
[12:37.70] yeah you know
[12:40.00] they're native they're strings
[12:41.78] you don't have this
[12:42.94] i mean and if we ignore the fact
[12:44.98] yeah i mean it's funny
[12:46.52] you can actually a lot of really interesting typing with strings these days
[12:49.50] but the problem with tag template literals is there is an expectation
[12:53.60] that
[12:54.84] they run a certain way
[12:56.94] they have a set semantic at runtime
[12:59.28] where jsx has no set semantics
[13:02.16] so like the challenge with template literals is
[13:04.36] like
[13:04.96] there's no way to say like
[13:07.36] i want to defer the execution of this expression
[13:09.94] or i want to do like schedule this here
[13:12.26] you
[13:12.72] when the template literal runs
[13:14.60] that's what you get
[13:15.70] you can defer it yourself
[13:16.62] you can pass functions in
[13:17.64] you can do all that
[13:18.30] but then the templating dsl becomes this big clunky mess
[13:21.52] so like
[13:22.52] it's good
[13:23.84] and you could compile tag template literals
[13:26.00] to be the same as j
[13:27.62] the jsx or to do these things that i'm talking about
[13:30.24] but that would be breaking the established runtime semantics
[13:34.04] of them
[13:34.86] so from that pure perspective
[13:36.78] tag template literals are more limited
[13:40.18] it's it's just by design
[13:42.10] it's not it's not like
[13:43.26] that they're a bad solution
[13:44.70] it's just that
[13:45.20] they're incapable of having different semantics
[13:47.74] than the ones presented
[13:50.22] by how they're in the spec
[13:52.92] the same reason i did not want jsx
[13:54.54] to get into the browser
[13:55.90] really
[13:56.52] jsx is incredibly powerful
[13:58.58] because it's portable
[14:00.02] and doesn't have defined semantics
[14:02.08] yeah the troll arrived
[14:04.54] almost all my web dev news content students and context writers
[14:12.88] i've never done
[14:13.26] there's a difference
[14:14.26] when i say context and react
[14:15.74] there's a difference of being in a world where you're aware of react
[14:18.02] and being in a world
[14:19.36] where like react
[14:22.42] how should i put it
[14:25.48] like
[14:25.68] it is the web synonymous
[14:28.54] right
[14:29.16] i feel like when you live in that world
[14:32.98] you can't like
[14:34.20] perfect example
[14:35.12] someone's talking about out of order streaming
[14:36.68] right
[14:37.10] a technology that's been present since 1997 in some form
[14:40.26] people were playing around in 2000
[14:41.62] big companies
[14:42.98] big pipe facebook
[14:43.94] you know
[14:44.80] their old
[14:45.50] xmp whatever stuff
[14:48.04] it has nothing to do with server components
[14:50.64] but in a react world
[14:52.00] since that's the only way you can do
[14:53.58] out of order streaming
[14:55.00] and that's not even true in react world
[14:57.50] because actually remix did out of order streaming
[14:59.16] without it
[14:59.90] um
[15:00.74] people sort of
[15:02.78] like when they talk about it
[15:04.08] they start equivocating it
[15:05.44] like basically saying
[15:06.04] oh yeah
[15:06.34] you know
[15:07.10] rsc is out of order streaming
[15:08.86] and it's like
[15:09.32] no
[15:10.32] you know
[15:11.46] that's the problem
[15:12.56] it's like
[15:12.92] when you allow it
[15:14.02] to
[15:14.56] narrow the scope
[15:16.14] of how you view the whole universe
[15:17.94] of the whole web
[15:18.54] that
[15:18.86] that's the problem
[15:19.78] with react
[15:21.10] and
[15:21.24] it's funny
[15:21.98] any popular solution
[15:22.84] is going to have this problem
[15:23.78] especially when it's what you get
[15:25.12] coming out of boot camps
[15:25.96] but
[15:26.82] you know
[15:27.84] i would love if the
[15:31.34] intelligent narrative around the stuff
[15:32.76] went beyond that
[15:33.88] oh yeah
[15:36.54] we'll talk about angular today
[15:37.50] i
[15:37.72] i think angular is doing great
[15:39.96] hey tanner
[15:42.28] you haven't missed anything yet
[15:51.24] i was just talking about
[15:52.16] how react is
[15:53.00] kind of like
[15:53.44] central focus of conversation
[15:54.94] on web dev
[15:55.48] but we have to make sure
[15:56.38] that it's not
[15:56.94] our whole world
[15:57.94] has anyone considered leaving react
[16:03.06] for ethical reasons
[16:03.66] with meta being this horrible company
[16:04.92] and all
[16:05.20] oh man
[16:06.66] like
[16:06.92] it's funny
[16:07.58] because
[16:07.86] there
[16:08.72] i bet you there are
[16:09.60] i see this stuff on blue sky
[16:10.82] all the time
[16:11.44] you know
[16:11.88] compelling reasons
[16:14.26] but for
[16:15.90] at least for
[16:16.86] the content of the stream
[16:17.82] and a lot of the stuff
[16:18.66] that we talk about here
[16:19.52] it's
[16:20.46] i i
[16:22.24] for me
[16:22.82] it's
[16:23.08] it's on
[16:23.62] it's on
[16:23.96] it's on
[16:24.26] it's on the mechanical
[16:25.18] okay
[16:27.82] tanner wants me to share some news
[16:29.20] i'll bite
[16:30.14] what's up tanner
[16:31.66] let's see here
[16:38.98] what's tanner got for us
[16:40.62] three build environments
[16:43.88] four beat plugins
[16:45.04] dev rod
[16:45.86] two frameworks
[16:46.30] the crap ton of work to make dev life
[16:47.50] and i love it
[16:47.88] it's close to finishing
[16:48.46] okay so he's talking about
[16:49.40] framework agnostic
[16:50.88] work with start
[16:52.36] depending where you stand
[16:55.70] it seems
[16:56.00] impractical
[16:56.70] or get excited
[16:57.84] but for the benefits
[16:59.12] fields more inward
[17:00.02] i feel like constraint helps me produce better results overall
[17:02.18] and more resilient to change
[17:03.04] even within a single framework's evolution
[17:04.64] yeah okay
[17:05.86] when people like tanner
[17:09.40] are viewing the options
[17:11.44] he's right
[17:12.00] i'm usually the person who's like
[17:13.80] the most
[17:14.42] not
[17:15.20] into
[17:15.92] agnosticism anymore
[17:17.96] like i started
[17:18.54] don't get me wrong
[17:19.44] at the beginning of my journey
[17:20.78] i was like
[17:21.30] let's make everything agnostic
[17:22.70] you know
[17:23.32] dom expression
[17:23.92] solids built on an agnostic renderer for signals
[17:26.16] you know
[17:26.50] like
[17:27.32] but like
[17:28.94] man
[17:29.86] when you want to get to optimize
[17:30.96] you want to get to deliver
[17:32.52] you want to get to maintenance
[17:33.40] it's a lot of work
[17:34.26] the key thing is
[17:35.56] you got to have an incentive
[17:36.38] right
[17:36.70] and the best
[17:37.24] incentive
[17:38.26] to
[17:39.06] i'm not going to put this in tenor's mouth so much
[17:41.76] but like
[17:42.40] what did i say the best use of web components were
[17:44.52] for migrating
[17:45.76] agnostic solutions look a lot more attractive
[17:50.66] when you're starting from point a
[17:52.28] and you want to get to point
[17:53.12] point b
[17:54.16] just putting that out there
[17:56.78] you know
[17:57.28] and the interesting thing is
[17:58.34] how little difference
[18:00.78] for some of these higher level abstractions
[18:02.60] that the underlying tool needs to be
[18:04.86] in terms of like
[18:06.06] producing the same results
[18:07.78] there's huge differences in implementing it
[18:09.66] like
[18:10.22] you can ask the people who made
[18:11.52] react query
[18:12.72] versus made solid query
[18:13.90] there have been bugs on the solid query side
[18:16.58] i'm not going to say it's like without fault
[18:18.04] but mechanically
[18:19.08] what solid query does for you out of the box
[18:21.46] you know
[18:22.56] using solids underlying primitives
[18:24.20] it's incredibly more
[18:25.04] it makes it way easier to be like
[18:26.24] oh yeah
[18:26.54] i just want this thing to work with out of order streaming
[18:29.08] no rc's involved
[18:30.32] i want this thing to auto serialize
[18:31.96] i want this thing to do that
[18:32.90] that's a billion times easier to do with
[18:35.02] say solid than it is to do with react
[18:37.50] so
[18:37.80] it's an interesting
[18:39.88] journey
[18:41.06] to watch
[18:42.06] you know
[18:42.70] people kind of step back from that
[18:45.04] single world view
[18:46.28] so i think that's probably where
[18:47.88] where tenor is getting to here
[18:49.22] react will die eventually
[18:51.34] just
[18:53.24] let's see if i can actually
[18:54.98] highlight this
[18:56.36] i'm happy to support
[19:00.34] frameworks in their heat
[19:01.68] but i've used to bank on them for success
[19:03.12] cool
[19:03.62] right now it's still in dom expressions
[19:15.54] we'll make a call at some point
[19:17.34] i don't know
[19:21.48] i'm just trying to get stuff done
[19:23.58] most of the stuff is
[19:26.08] portable
[19:27.18] okay so
[19:27.70] let
[19:28.60] let me continue on here
[19:30.28] right
[19:30.52] just keeping this in mind
[19:34.08] over the
[19:34.98] this whole
[19:36.52] stream
[19:37.58] as we talk about
[19:39.74] the different topics
[19:40.92] i think will help
[19:41.70] thanks for saying that
[19:48.08] i appreciate it
[19:49.34] okay so
[19:51.44] i i i was
[19:56.28] i'm serious
[19:56.74] i wasn't going to write this article
[19:58.00] i wasn't sure if i was going to do this stream
[20:00.44] i ended 2024
[20:04.74] it's so funny because right now i feel like really energized about the new stuff i'm doing
[20:10.02] you know
[20:10.82] but i ended 2024 kind of on a low note
[20:12.80] right because like
[20:13.88] we've been
[20:16.32] and it was kind of evident halfway through the years because we've been working on all this new stuff
[20:22.12] since about 2020
[20:23.80] like there's been a ton
[20:25.32] of innovation in the space for the last four to five years tons
[20:29.28] lots of new ideas new architectures new approaches new like people are trying
[20:34.58] like
[20:35.86] it's that in itself initially was refreshing compared to how it'd been before
[20:41.78] if you go back to 2016 to 2020 like the four years before that
[20:46.30] you had the whole like
[20:47.62] i mean i don't have to look up the article you guys all see the javascript fatigue thing
[20:51.16] don't get me wrong the fatigue's still there but people
[20:53.38] people were like
[20:54.62] being all like meh meh meh meh meh right
[20:57.12] and then it was like okay well i don't want to deal with this
[20:59.28] just like give me create react app
[21:00.88] there was it was like people got angry at you for creating a new framework
[21:04.84] there was like legitimate i've talked about this before
[21:08.04] like there was hostility
[21:09.66] um
[21:10.42] where during 2020 um there was less hostility um in the last few years
[21:15.64] but the funny thing is um as theo actually put on stream is
[21:19.28] how many new front-end frameworks have come out during this time period
[21:22.78] i don't mean like meta frameworks i mean like front-end frameworks
[21:25.98] ones that are specifically um front-end
[21:28.84] and the ant because you you know the answer i think is not many
[21:35.44] in fact um out of ones that are like gone to a certain stage of popularity
[21:41.60] i i mean let's have this chat
[21:44.88] what was the last front front-end framework
[21:50.44] right okay yeah quick enhancements yeah you guys
[21:54.50] this is this is the thing the but i'm gonna ask you
[21:58.26] popular zero um where i was gonna ask you though is
[22:04.66] i mean enhance actually maybe legit has a legit claim on
[22:09.48] what i'm saying but most of these frameworks came out
[22:12.12] out the gates with the back end in mind like they weren't a meta framework
[22:17.44] but you don't need a meta framework for quick like like quick city
[22:22.26] like i know like start is solid starts you know starter and you can do quick
[22:26.72] as csr only but generally speaking like basically quick city was
[22:31.40] like our quick was like a meta framework out of the door like that's what it was building
[22:36.22] it was like we are building a isomorphic thing
[22:38.86] quick's technology doesn't make sense if you're not server rendering it like you're if you're not
[22:42.38] like you know brisa um kind of similar thing i mean doing really cool stuff with like this client server stuff with the with the signals um but
[22:53.86] like we haven't had the traditional front end framework for a while but yes um
[23:01.32] popularity i have a whole theory on that i think because of the saturation the year you
[23:08.02] come out is like your ceiling is is almost like um inverse um exponentially inverse to the time the front end framework came out in terms of popularity
[23:19.72] like if you released in 2010 or 12 or 13 the ceiling is that much higher
[23:26.36] 2016
[23:27.70] 20
[23:29.18] you know 18
[23:31.66] 2021 you know by the time you you go down the scale
[23:36.10] it gets harder and harder because like sure solid was released in 2021 but
[23:39.80] effectively existed kind of as a thing
[23:43.36] since 2018 that people could actually use people were using solid and prod before 1.0
[23:49.88] um definitely and like
[23:53.18] svelte was 2016 but let's say like realistically let's say solid was 2020
[23:57.90] and svelte was 2019
[23:59.94] 2018 let's say 2019 like as we get further in time the less likely the frameworks get get a foothold
[24:10.10] um
[24:10.74] yeah
[24:14.78] i i'm i'm hoping they improved it honos jsx solution
[24:18.38] um
[24:19.68] some people had some fun and put in the js framework benchmark
[24:22.52] and it lost a blazer
[24:24.44] i mean
[24:25.06] that pretty much covers it for anyone who watches my stream
[24:28.02] regularly but
[24:29.32] yeah
[24:30.18] yeah okay but this is this
[24:31.80] you know we might go as far as saying that the last front end framework
[24:36.34] right now
[24:37.12] this might change the future
[24:38.14] um
[24:39.10] might have been solid
[24:40.12] someone was like well svelte 5
[24:42.28] feels like it's new enough that it's a new front end framework
[24:45.62] um
[24:46.78] maybe view vapor will feel different enough
[24:48.82] but it's it's it's it's an interesting
[24:51.88] i'll come back to this point but it's an interesting
[24:54.80] thing that
[24:56.56] that part hasn't
[24:59.50] progressed nearly as much
[25:01.54] yeah
[25:02.54] or inferno
[25:03.18] yeah
[25:03.58] so like
[25:18.06] how fast did react spread
[25:20.18] i mean react
[25:20.92] react got popular
[25:22.52] they're pretty quickly
[25:23.86] like there's a there's a bit of a pushback the first couple years but by 2015 they'd spread
[25:29.16] pretty wide
[25:29.70] it only took them two years
[25:31.18] to get numbers that
[25:33.24] new tools do not even get today
[25:36.16] anyway
[25:39.94] where where i was getting to this is like
[25:45.44] last year
[25:46.90] was i feel like maybe it's this is just me self-projecting
[25:50.76] was a year of coming to terms with the fact that like all these experiments we did
[25:54.72] didn't quite work
[25:56.60] they didn't quite solve the problem
[25:58.80] they weren't
[26:00.08] they're improvements here and there but like we didn't get that
[26:03.06] you know that we'd been promising or that we'd been wanting right
[26:06.86] it's it's actually kind of funny because this is a time period that i haven't actually been
[26:11.38] promising that much
[26:13.06] um because i've been like exploring a lot
[26:15.66] but i think i feel like in general the sentiment
[26:19.56] um is is like
[26:22.54] there are these things
[26:24.90] some of them good
[26:26.98] but
[26:28.04] like we haven't solved it
[26:30.18] and
[26:30.96] i think that
[26:32.68] with the
[26:33.76] you know
[26:34.32] the state of the world
[26:35.96] right now
[26:36.62] um
[26:37.76] you know
[26:39.96] stuff with the economy
[26:41.68] jobs
[26:42.56] you know
[26:43.02] difficult issues
[26:43.92] i don't think
[26:45.46] we're in a position right now
[26:47.02] where
[26:48.08] anyone is going to solve it
[26:50.06] short term
[26:50.80] even like
[26:53.08] frameworks have never been an area where
[26:55.78] there's like a lot of funding
[26:56.86] but even the ones that
[26:58.28] have it
[26:59.16] you know
[26:59.64] things feel like they've
[27:00.96] kind of slowed down again
[27:02.14] and i think the big thing is
[27:04.52] in kind of fighting against this
[27:06.70] trend of complexity
[27:08.22] we
[27:09.24] we tried to start over
[27:10.82] with simpler tools
[27:11.86] and the result
[27:13.96] was
[27:14.82] simpler at first
[27:17.10] and everyone got excited
[27:17.82] and then when they tried to build the thing with it
[27:20.38] they realized
[27:20.80] oh this actually isn't really simpler
[27:22.88] and
[27:24.48] i think
[27:27.26] i mean this
[27:28.62] this continues to give voice
[27:30.20] to the you know
[27:30.92] no build
[27:31.50] people of the world
[27:32.50] like go back to my
[27:33.66] my
[27:34.56] you know whatever
[27:35.88] laravel servers or whatever
[27:37.32] but like
[27:38.12] we'll get into it
[27:40.50] i i'm just saying that clearly
[27:42.18] while things have come easier
[27:43.86] um
[27:44.82] i think we've kind of
[27:47.88] recognized
[27:48.92] or started to recognize
[27:49.96] that like
[27:50.32] sometimes you know
[27:51.56] things that are difficult to solve
[27:52.60] are difficult to solve
[27:53.42] right
[27:53.92] tools are complicated
[27:55.84] but so the problems are
[27:56.88] um
[27:58.14] it was important for me
[28:00.56] because like
[28:01.10] it set me free
[28:02.10] i felt all this pressure
[28:03.10] like
[28:03.34] i had to solve this problem
[28:04.90] the last couple years
[28:06.58] and now i'm like
[28:07.38] you know
[28:08.36] somewhere mid-year
[28:08.92] i was just like
[28:09.36] maybe
[28:10.06] maybe don't
[28:10.96] you know
[28:11.30] um
[28:12.18] right
[28:12.80] so
[28:14.98] yeah
[28:19.30] being backed
[28:19.94] by a fan company
[28:21.18] is huge for adoption
[28:22.04] right
[28:22.30] um
[28:23.38] but like
[28:28.86] it's an interesting thing
[28:30.58] because
[28:30.78] it also means that
[28:32.82] you're
[28:33.34] subject to what
[28:34.38] the company is
[28:35.38] like
[28:35.86] what their goals are
[28:36.90] so like
[28:37.52] there's
[28:39.08] there's trade-offs here
[28:40.00] and no resume
[28:41.70] building a solid
[28:42.50] got it
[28:43.02] uh
[28:44.82] i mean
[28:45.62] we'll
[28:48.52] we'll get there
[28:49.08] in a minute
[28:49.40] um
[28:50.36] anyways
[28:51.56] i already was talking
[28:52.38] about this
[28:52.74] we've been all
[28:53.62] server-centric
[28:54.62] the last few years
[28:55.50] um
[28:56.58] and
[28:58.32] people came to me
[28:59.54] and they're like
[28:59.86] why are we talking
[29:01.22] about this stuff now
[29:02.58] right
[29:02.96] like there's a whole bunch
[29:03.74] of people who are
[29:04.26] building single-page apps
[29:05.50] and they're like
[29:05.88] why are we
[29:07.62] on the server
[29:09.00] why are we
[29:10.34] talking about
[29:11.22] server rendering
[29:11.92] like
[29:12.34] why why am i
[29:13.70] hearing about
[29:14.20] light host scores
[29:14.96] and everyone
[29:15.30] complaining about
[29:15.76] hydration
[29:16.18] i don't need
[29:16.92] hydration
[29:17.26] i just render
[29:17.84] on the client
[29:18.34] and
[29:20.06] it is interesting
[29:21.52] to see
[29:22.62] how much the world
[29:23.64] changed in a very
[29:24.30] short order
[29:25.04] like everything
[29:25.98] just flipped
[29:26.50] whereas like
[29:27.20] something like
[29:27.56] oh that's bad
[29:28.18] this is good
[29:28.96] um
[29:29.78] and
[29:31.16] i i've
[29:32.24] multiple times
[29:33.02] i tried to explain
[29:33.56] to people
[29:33.90] and be like
[29:34.36] like what the
[29:35.36] benefits are
[29:35.84] but like
[29:36.14] let's face it
[29:37.08] when you're talking
[29:37.46] about technical
[29:37.96] benefits
[29:38.58] i mean especially
[29:40.34] to someone who's
[29:41.12] a react dev
[29:41.72] it's like
[29:42.40] we don't care
[29:44.62] good enough is
[29:45.48] good enough right
[29:46.14] like why do i care
[29:47.00] about this stuff
[29:47.60] right
[29:48.30] does react let me
[29:49.66] build my project
[29:50.44] i'm done
[29:51.26] i think what
[29:53.32] happened
[29:53.92] and i think
[29:54.78] it's pretty obvious
[29:55.32] at this point
[29:55.84] is we had two
[29:56.72] we had two
[29:57.10] factors right
[29:57.60] we had
[29:58.00] covid pushing
[29:59.68] online shopping
[30:00.60] pushing e-commerce
[30:01.66] really hard
[30:02.26] and then we got
[30:03.56] all the like
[30:04.18] low interest rates
[30:04.94] you know
[30:05.66] happening to
[30:06.54] you know
[30:07.82] push the economy
[30:08.74] basically pushing
[30:10.30] into the investment
[30:11.20] into areas that
[30:12.06] could support
[30:12.60] e-commerce
[30:13.24] essentially
[30:13.82] i think
[30:14.96] this is
[30:16.06] what led
[30:16.58] to a lot
[30:16.90] of meta
[30:17.30] frameworks
[30:17.68] you know
[30:18.20] they're all
[30:19.60] vc backed
[30:20.76] in some sort
[30:21.52] of way
[30:21.82] except maybe
[30:22.32] analog
[30:22.86] you know
[30:23.84] i mean
[30:24.38] i don't really
[30:25.14] consider solid start
[30:25.90] i may not
[30:26.40] consider svelte kit
[30:27.14] but like astro
[30:27.84] is a company
[30:28.26] remix was a company
[30:29.16] quick was built
[30:30.00] through builder
[30:30.58] fresh is with dino
[30:32.02] like um
[30:33.12] you know
[30:36.22] like
[30:36.50] there was an
[30:38.14] incentive here
[30:39.10] right
[30:39.52] yeah and we also
[30:42.76] got 10 years
[30:43.16] in the media
[30:43.48] and android phonia
[30:44.18] i did a whole
[30:44.90] talk on it
[30:45.38] i linked it
[30:46.04] in here
[30:46.66] yeah
[30:50.76] but like
[30:58.60] if you've been
[31:02.98] watching my stream
[31:03.78] the last couple
[31:05.40] years when i do
[31:06.18] this yearly kind
[31:07.24] of recap
[31:07.90] i've talked about
[31:09.98] this tension
[31:10.94] between frameworks
[31:11.88] and i pulled this
[31:13.12] up every year
[31:13.88] i've been i've been
[31:15.02] talking about on the
[31:15.94] server this tension
[31:17.40] and i i drew
[31:18.62] people on a graph
[31:19.48] before i probably
[31:20.56] don't have it on
[31:21.04] this scala draw
[31:21.86] because i think
[31:22.38] i've i've since
[31:23.72] this is like
[31:24.56] this is a newer
[31:26.46] one than the time
[31:27.58] period where i was
[31:28.32] doing this
[31:28.90] yeah yeah this
[31:29.54] one's not
[31:30.04] i've i've
[31:31.50] i've but like
[31:33.34] i've talked about
[31:34.54] this idea of
[31:35.98] the
[31:36.66] basically two
[31:39.36] extremes
[31:39.90] like
[31:40.40] the
[31:42.66] oh why am i
[31:45.30] dotted
[31:45.54] like on one
[31:47.72] side
[31:48.10] they're being
[31:50.44] isomorphic
[31:53.28] or basically
[31:53.98] like same code
[31:54.90] runs on both
[31:55.46] sides but maybe
[31:56.06] runs a little
[31:56.46] different
[31:56.82] and then
[31:57.86] what i'm calling
[31:59.16] split execution
[32:00.10] right
[32:00.40] um
[32:01.38] and
[32:04.02] it's funny
[32:06.24] theo went and
[32:07.22] did a video
[32:07.74] um
[32:08.44] because he
[32:08.88] tangented for
[32:09.80] like an hour
[32:10.60] and a bit
[32:11.40] on like what i
[32:13.02] meant in this one
[32:13.82] sentence where i
[32:14.56] said the last
[32:15.22] couple years i've
[32:15.68] seen spawn
[32:16.14] fluence isomorphic
[32:17.20] same code runs
[32:17.96] differently on
[32:18.38] client server
[32:18.86] approaches up
[32:19.46] against mpa
[32:20.12] influence split
[32:20.86] execution
[32:21.68] islands to
[32:22.36] server code
[32:22.84] component approaches
[32:24.50] and starts finding
[32:25.24] universal solution
[32:26.18] for all
[32:26.52] what i'm trying
[32:27.78] to say is
[32:28.24] we've been trying
[32:29.44] to decide
[32:30.10] and this isn't
[32:31.14] just in javascript
[32:32.06] i mean i think
[32:33.10] everyone who's not
[32:34.90] in javascript is
[32:35.58] firmly on this
[32:36.64] side over here
[32:37.32] but the whether
[32:38.84] like we should
[32:40.66] like like
[32:41.56] single single
[32:44.62] app single
[32:46.10] code base
[32:47.08] single mental
[32:50.60] model
[32:51.06] or or whether
[32:54.44] we should have
[32:55.24] like clear
[32:57.06] client server
[32:59.14] separation
[33:00.76] maybe
[33:04.92] different
[33:06.04] languages
[33:07.04] maybe
[33:17.44] multiple
[33:19.02] templating
[33:20.08] approaches
[33:21.04] i mean i have a
[33:24.22] hard time saying
[33:25.12] great things
[33:26.78] about the
[33:28.30] split execution
[33:28.88] side
[33:29.30] i'm don't
[33:30.26] get me wrong
[33:30.58] there are there
[33:31.00] are benefits to
[33:32.22] both sides but
[33:32.82] we've been seeing
[33:33.38] these two
[33:34.10] mentalities
[33:35.30] head to head
[33:36.76] and every tool
[33:37.78] seems to kind
[33:39.22] of pick a side
[33:40.08] because they're
[33:41.42] making advances
[33:42.38] to get the benefits
[33:43.50] of the other
[33:44.02] side
[33:44.42] you know like
[33:45.92] these were
[33:46.90] classically
[33:47.50] you know mpas
[33:48.66] these classically
[33:50.10] had
[33:50.60] you know
[33:52.46] stuff that
[33:54.00] didn't render
[33:54.84] until you go
[33:55.16] into clients
[33:55.50] so you have
[33:55.82] white spaces
[33:56.46] you know
[33:57.36] these kind
[33:57.88] of things
[33:58.24] these two
[33:59.02] classically
[33:59.30] didn't have
[33:59.72] you know
[34:00.24] client-side
[34:00.66] routing
[34:00.94] these
[34:01.84] you know
[34:03.10] classically
[34:03.74] did a lot
[34:04.44] of
[34:05.08] bad
[34:07.54] waterfall
[34:08.42] data
[34:08.72] fetching
[34:09.12] mechanisms
[34:09.66] the
[34:10.64] ice
[34:11.54] marker
[34:11.76] apps
[34:12.10] tended to
[34:13.34] you know
[34:15.22] have
[34:15.90] issues
[34:16.98] with
[34:17.50] you know
[34:19.56] i'm trying
[34:20.54] to think
[34:20.84] like
[34:22.12] overfetching
[34:22.98] you know
[34:23.30] like there's
[34:23.98] lots of
[34:24.54] problems
[34:25.40] that
[34:26.28] you know
[34:27.30] too many
[34:28.38] back and
[34:29.76] forths
[34:30.34] you know
[34:30.68] yeah
[34:31.28] waterfalls
[34:31.70] is definitely
[34:32.02] a big
[34:32.28] problem
[34:32.54] on this
[34:32.80] side
[34:32.98] so
[34:33.90] like
[34:34.14] yeah
[34:35.64] i mean
[34:35.84] i guess
[34:36.24] i could
[34:36.40] write
[34:36.58] that
[34:37.02] down
[34:37.36] you know
[34:37.72] issues
[34:39.76] like
[34:40.42] waterfalls
[34:42.36] overfetching
[34:44.88] issues
[34:49.00] like
[34:49.66] client
[34:52.12] routing
[34:53.26] um
[34:59.02] like
[35:07.02] optimistic
[35:08.82] ui
[35:09.86] a lot
[35:13.28] of the
[35:13.48] points
[35:13.84] around
[35:14.12] like
[35:14.38] interactivity
[35:15.22] you know
[35:15.66] or state
[35:19.68] preservation
[35:20.18] state
[35:20.62] preservation
[35:21.08] okay
[35:22.64] anyways
[35:23.36] yeah
[35:26.30] oh yeah
[35:26.82] yeah
[35:26.98] sorry
[35:27.20] hydration
[35:29.44] errors
[35:30.18] thank you
[35:31.34] right
[35:34.10] you guys
[35:35.34] are helpful
[35:35.90] here
[35:36.16] duplicate
[35:36.64] logic
[35:37.40] thank you
[35:40.46] chat
[35:40.80] what
[35:44.22] yeah
[35:47.96] i i
[35:49.18] the chat
[35:49.62] is super
[35:50.08] helpful
[35:50.30] here
[35:50.58] yeah
[35:59.68] yeah
[36:00.06] yeah
[36:00.22] yeah
[36:01.02] definitely
[36:01.46] bundle
[36:03.42] size
[36:04.88] um
[36:07.62] execution
[36:09.04] yeah
[36:10.20] beautiful
[36:11.10] yeah
[36:11.40] see
[36:11.88] and
[36:12.28] and people
[36:12.82] have been
[36:13.36] the funny
[36:15.06] thing is
[36:15.48] double data
[36:16.02] problem
[36:16.50] yeah
[36:19.06] i'm gonna
[36:19.66] yeah
[36:20.62] let's put
[36:21.46] it on
[36:21.66] here
[36:21.86] because
[36:22.04] it
[36:22.24] belongs
[36:22.66] over
[36:22.86] here
[36:23.14] but
[36:23.68] the funny
[36:24.24] thing
[36:24.48] is
[36:24.80] the
[36:28.60] funny
[36:29.00] thing
[36:29.30] about
[36:29.56] this
[36:29.80] is
[36:29.94] as
[36:30.34] the
[36:31.12] approaches
[36:31.66] kind of
[36:33.18] started
[36:33.54] approaching
[36:34.18] each
[36:34.42] other
[36:35.18] really
[36:39.94] funny
[36:40.32] observation
[36:41.02] is
[36:41.30] they
[36:42.20] didn't
[36:42.58] exactly
[36:43.30] they
[36:45.24] would
[36:45.66] kind of
[36:46.40] solve
[36:46.84] their
[36:47.38] issues
[36:47.72] but
[36:47.90] they
[36:48.18] at
[36:48.60] the
[36:48.74] cost
[36:49.10] of
[36:49.28] basically
[36:50.06] getting
[36:51.64] the
[36:51.88] issues
[36:52.38] of
[36:53.52] the
[36:53.62] other
[36:53.76] side
[36:54.10] you
[36:56.30] know
[36:56.40] what i
[36:56.52] mean
[36:56.66] like
[36:56.92] like
[36:57.68] they
[36:58.12] they
[37:00.68] basically
[37:02.68] were just
[37:03.62] trading
[37:03.98] one type
[37:04.90] of issue
[37:05.18] for another
[37:05.52] type of
[37:05.84] issue
[37:06.08] you get
[37:06.88] all the
[37:07.22] issues
[37:07.50] yes
[37:07.82] you get
[37:09.16] all the
[37:09.42] issues
[37:09.78] and
[37:10.68] how's it
[37:11.16] going
[37:11.36] so
[37:13.34] like
[37:13.62] this
[37:16.68] is what
[37:17.24] i was
[37:17.50] trying
[37:17.90] do you
[37:20.14] want
[37:20.30] your
[37:20.44] split
[37:20.66] applications
[37:21.30] to have
[37:22.04] hydration
[37:22.34] errors
[37:22.72] well guess
[37:23.54] what
[37:23.78] you can
[37:24.44] with
[37:24.66] react
[37:24.90] server
[37:25.14] components
[37:25.78] though
[37:26.10] you know
[37:26.78] like
[37:27.32] like
[37:29.10] just
[37:29.52] like in
[37:30.12] the
[37:30.24] JS
[37:30.52] space
[37:30.88] just so
[37:31.22] you can
[37:31.44] understand
[37:31.68] what i'm
[37:31.90] talking
[37:32.18] about
[37:32.40] when i
[37:32.64] talk
[37:32.76] about
[37:32.92] solutions
[37:33.22] just
[37:33.42] to
[37:33.52] kind
[37:33.62] of
[37:33.68] give
[37:33.82] you
[37:33.92] like
[37:34.12] a
[37:34.74] kind
[37:35.34] of
[37:35.42] an
[37:35.50] idea
[37:35.76] here
[37:36.12] of
[37:36.34] like
[37:36.50] this
[37:36.70] zone
[37:37.10] here
[37:37.30] is
[37:37.42] like
[37:37.54] over
[37:37.82] here
[37:38.30] isomorphic
[37:39.58] this
[37:40.66] is
[37:40.84] like
[37:41.16] stuff
[37:41.48] like
[37:41.82] solid
[37:42.94] JS
[37:43.94] solid
[37:45.26] start
[37:45.78] belt
[37:47.20] kit
[37:47.58] remix
[37:51.62] noxt
[37:56.44] next
[37:58.58] pages
[37:59.80] directory
[38:01.16] i'll just
[38:04.38] call it
[38:04.60] next pages
[38:05.06] for short
[38:05.52] right
[38:06.56] and then
[38:07.74] this
[38:10.38] over
[38:10.70] here
[38:11.12] is
[38:11.38] like
[38:11.82] astro
[38:14.68] next
[38:17.04] app
[38:17.70] directory
[38:18.32] fresh
[38:21.08] oh
[38:23.50] sorry
[38:23.68] i missed
[38:24.02] an important
[38:24.38] one over
[38:24.72] here
[38:24.94] quick
[38:25.86] the
[38:30.98] reason
[38:31.16] quick
[38:31.46] is
[38:32.50] over
[38:34.08] here
[38:34.40] and
[38:35.10] it's
[38:35.26] important
[38:35.48] to
[38:35.60] understand
[38:35.80] it's
[38:35.98] because
[38:36.32] they
[38:36.64] actually
[38:37.02] came up
[38:37.50] with
[38:37.70] novel
[38:38.06] ways
[38:38.38] to
[38:38.58] attack
[38:39.00] these
[38:39.34] issues
[38:39.72] right
[38:40.36] right
[38:43.14] but
[38:44.50] they're
[38:44.98] firmly
[38:45.70] in the
[38:46.02] isomorphic
[38:46.64] group
[38:47.16] right
[38:47.42] you don't
[38:47.84] there's
[38:48.16] no
[38:48.28] use
[38:48.52] client
[38:48.90] there's
[38:49.14] no
[38:49.32] is
[38:49.80] island
[38:50.16] or
[38:50.34] whatever
[38:50.58] you
[38:50.88] know
[38:51.64] but
[38:54.04] right
[38:54.58] now
[38:54.78] there
[38:54.96] are
[38:55.54] two
[38:55.92] different
[38:56.94] architectures
[38:57.50] these
[38:57.72] are
[38:58.06] different
[38:58.80] architectures
[38:59.50] these
[38:59.66] are
[38:59.78] not
[39:00.04] the
[39:00.26] same
[39:00.50] thing
[39:00.84] they're
[39:01.64] capable
[39:02.06] of a
[39:02.60] lot
[39:02.72] of the
[39:02.88] same
[39:03.02] capabilities
[39:03.54] both
[39:03.90] of
[39:04.00] these
[39:04.12] can
[39:04.36] stream
[39:04.72] both
[39:05.02] of
[39:05.14] these
[39:05.36] you
[39:05.68] know
[39:05.86] you
[39:07.16] know
[39:07.40] right
[39:09.28] right
[39:10.78] it's
[39:13.36] sometimes
[39:13.62] hard
[39:13.98] to talk
[39:14.54] about
[39:14.66] these
[39:14.80] without
[39:14.98] like
[39:15.44] the
[39:15.70] full
[39:16.10] picture
[39:17.06] because
[39:17.34] like
[39:18.24] rails
[39:21.06] is
[39:21.56] obviously
[39:21.98] over
[39:22.86] here
[39:23.54] but
[39:24.04] they're
[39:24.32] like
[39:24.46] further
[39:24.78] over
[39:25.02] because
[39:25.26] they're
[39:25.62] not
[39:26.02] prescribing
[39:27.00] a client
[39:27.82] side
[39:28.06] solution
[39:28.58] Laravel
[39:30.14] and
[39:30.30] them
[39:30.48] you know
[39:30.78] like
[39:31.04] they sit
[39:31.38] over
[39:31.56] here
[39:31.82] somewhere
[39:32.18] right
[39:32.58] so
[39:33.24] in
[39:33.46] one
[39:33.60] way
[39:33.74] you
[39:33.82] can
[39:33.94] view
[39:34.06] these
[39:34.24] split
[39:34.46] execution
[39:34.86] things
[39:35.24] like
[39:35.66] a
[39:35.92] better
[39:36.20] middle
[39:36.62] ground
[39:36.98] between
[39:37.56] you know
[39:39.08] rails
[39:39.78] and like
[39:40.46] where
[39:41.14] we've
[39:41.46] been
[39:41.76] the
[39:43.04] one
[39:47.14] and a
[39:47.38] half
[39:47.58] data
[39:47.82] problem
[39:48.16] yes
[39:50.78] in the
[39:52.20] case
[39:52.38] of
[39:52.50] react
[39:52.70] actually
[39:53.42] has
[39:53.90] the
[39:54.50] double
[39:54.78] data
[39:55.02] problem
[39:55.44] though
[39:55.74] like
[39:57.66] RSCs
[39:58.04] actually
[39:58.28] have
[39:58.50] the
[39:58.60] double
[39:58.80] data
[39:59.00] problem
[39:59.44] the
[40:00.70] one
[40:00.86] and a
[40:01.06] half
[40:01.28] data
[40:01.50] problem
[40:01.84] I get
[40:02.04] what
[40:02.14] you're
[40:02.24] saying
[40:02.44] you're
[40:02.56] saying
[40:02.70] the
[40:02.80] isomorphic
[40:03.30] parts
[40:03.58] need
[40:03.74] the
[40:03.84] data
[40:04.10] and
[40:04.84] the
[40:05.06] non
[40:05.26] isomorphic
[40:05.80] parts
[40:06.14] don't
[40:07.60] but the
[40:08.58] problem
[40:08.86] is
[40:09.12] react
[40:09.80] the
[40:10.12] parts
[40:10.62] that are
[40:11.04] server only
[40:11.46] still
[40:11.86] actually
[40:12.30] double
[40:12.84] serialized
[40:13.80] both as
[40:15.16] HTML
[40:15.54] and as
[40:16.58] diffable
[40:17.46] JSX on
[40:18.42] or whatever
[40:18.72] you want
[40:19.28] to call
[40:19.52] it
[40:19.66] so
[40:19.90] RSC
[40:21.02] is actually
[40:21.44] funnily
[40:22.16] enough
[40:22.46] fix this
[40:25.42] issue
[40:25.78] but
[40:26.58] introduced
[40:27.34] this
[40:28.02] issue
[40:28.54] no
[40:30.76] silver
[40:31.06] bullet
[40:31.34] yeah
[40:33.08] yes
[40:33.48] yes
[40:33.80] we're also
[40:34.20] stimulus
[40:34.64] to
[40:34.80] split
[40:35.00] execution
[40:35.40] yeah
[40:35.64] fair
[40:36.08] fair
[40:36.36] enough
[40:36.54] yeah
[40:36.94] it's
[40:39.14] like
[40:39.34] yeah
[40:39.94] RSCs has
[40:46.18] a 2.5
[40:47.14] data
[40:47.44] problem
[40:47.96] it might
[40:50.60] actually
[40:51.10] to be
[40:51.56] fair
[40:51.84] when you
[40:52.32] consider
[40:53.00] the
[40:53.38] size
[40:53.78] of
[40:53.98] the
[40:54.22] sterilization
[40:54.88] considerations
[40:56.00] oh
[40:57.16] but this
[40:57.58] this is
[40:57.94] this is
[40:58.30] the
[40:58.46] problem
[40:58.84] right
[40:59.08] you start
[40:59.42] looking at
[40:59.82] these issues
[41:00.24] and what
[41:00.46] you want
[41:00.66] to solve
[41:01.04] and you're
[41:01.38] like okay
[41:01.72] I can solve
[41:03.54] waterfalls
[41:04.06] I can solve
[41:04.74] overfetching
[41:05.54] reasonably enough
[41:06.46] at least
[41:07.64] compared to
[41:08.06] like these
[41:08.62] guys have
[41:09.54] a different
[41:10.12] version of
[41:10.62] overfetching
[41:11.30] it's like
[41:11.92] overrendering
[41:15.42] that's
[41:18.26] that's
[41:18.26] that's
[41:18.26] why you
[41:18.44] need
[41:18.62] server
[41:19.58] caches
[41:20.14] but
[41:25.58] like
[41:25.94] if you
[41:27.76] consider
[41:28.08] these
[41:28.32] kind of
[41:28.56] equivalent
[41:28.98] you can
[41:29.48] solve
[41:29.82] these
[41:30.40] as soon
[41:32.68] as you
[41:32.88] add
[41:33.10] anything
[41:33.48] meaningful
[41:34.22] in the
[41:34.42] client
[41:34.62] this size
[41:35.00] you get
[41:35.22] the
[41:35.34] hydration
[41:35.66] errors
[41:36.10] you know
[41:37.08] it becomes
[41:38.36] a question
[41:39.06] of what's
[41:39.78] more important
[41:40.34] bundle size
[41:41.04] execution
[41:41.52] or double
[41:41.98] data
[41:42.32] or duplicate
[41:43.80] logic
[41:44.22] these are
[41:44.76] the things
[41:45.70] that
[41:46.08] end up
[41:48.84] being
[41:49.30] like as
[41:50.46] the rest
[41:51.02] of these
[41:51.28] kind of
[41:51.58] melt away
[41:52.20] as people
[41:52.96] solve them
[41:53.62] you know
[41:54.66] it comes
[41:59.18] down to
[41:59.52] duplicate
[41:59.86] logic
[42:00.44] bundle
[42:01.34] size
[42:01.86] and double
[42:02.50] data
[42:02.88] would you
[42:06.56] put
[42:06.68] tanstack
[42:07.00] start
[42:07.18] oh yeah
[42:07.62] right here
[42:10.30] tanstack
[42:13.10] start
[42:13.32] and solid
[42:13.66] start
[42:13.98] are
[42:15.08] incredibly
[42:16.00] like
[42:16.76] there's
[42:17.32] differences
[42:17.84] mechanically
[42:19.28] in some
[42:19.58] of the
[42:19.76] stuff
[42:19.96] that
[42:20.16] Tanner
[42:20.78] has
[42:20.88] been
[42:21.00] working
[42:21.28] on
[42:21.56] but
[42:21.96] philosophically
[42:22.66] they are
[42:23.08] in the
[42:23.98] exact
[42:24.42] same
[42:24.70] place
[42:25.56] on
[42:25.78] this
[42:26.00] grid
[42:26.60] we are
[42:27.14] we are
[42:28.00] more aligned
[42:29.20] than pretty
[42:29.54] much any
[42:30.00] of the
[42:30.56] projects
[42:30.98] you know
[42:31.32] where we
[42:31.70] where we're
[42:32.08] sitting
[42:32.38] hey
[42:35.04] Mabel
[42:35.32] yeah
[42:37.04] so like
[42:38.00] yeah
[42:41.04] I think
[42:42.36] that
[42:42.70] while
[42:44.74] I'm not
[42:45.24] giving
[42:45.60] a super
[42:46.88] technical
[42:47.30] like
[42:48.84] example
[42:49.78] example
[42:49.78] of like
[42:50.16] what
[42:50.32] these
[42:50.50] things
[42:50.68] are
[42:50.82] I hope
[42:51.16] through
[42:51.48] me
[42:52.02] listing
[42:52.30] the
[42:52.48] solutions
[42:52.82] like
[42:53.10] it's
[42:53.26] for me
[42:53.78] it's
[42:53.94] a pretty
[42:54.46] clear
[42:55.14] divide
[42:56.26] I can
[42:56.74] just go
[42:57.14] yeah
[42:57.30] you're
[42:57.60] here
[42:57.78] you're
[42:58.00] here
[42:58.18] I don't
[42:59.54] I think
[42:59.92] it's
[43:00.08] enough
[43:00.32] to
[43:00.46] like
[43:00.74] if you're
[43:01.04] familiar
[43:01.28] with some
[43:01.82] of these
[43:02.04] solutions
[43:02.40] you can
[43:02.74] understand
[43:03.02] the
[43:03.16] categorization
[43:03.66] this
[43:03.86] is
[43:03.96] something
[43:04.14] you
[43:04.30] could
[43:04.40] tell
[43:04.58] at a
[43:04.78] glance
[43:05.14] there's
[43:05.90] mechanical
[43:06.38] aspects
[43:06.82] of it
[43:07.28] but
[43:07.78] these
[43:08.26] this
[43:08.66] division
[43:09.14] is
[43:09.38] actually
[43:09.94] fairly
[43:10.54] absolute
[43:11.14] it makes
[43:12.18] a huge
[43:12.50] difference
[43:18.84] physics
[43:19.20] to
[43:19.94] this
[43:20.28] separation
[43:20.72] like
[43:20.96] a
[43:21.10] certain
[43:21.32] consequence
[43:22.10] yes
[43:22.38] the
[43:22.70] lines
[43:23.00] are
[43:23.16] blurring
[43:23.52] and
[43:23.64] muddying
[43:23.96] but
[43:24.66] the
[43:24.88] core
[43:25.20] architecture
[43:25.78] defines
[43:26.58] this
[43:27.36] right
[43:27.64] the
[43:28.12] funny
[43:28.52] thing
[43:28.70] is
[43:28.84] like
[43:29.06] there's
[43:29.66] like
[43:29.92] another
[43:30.16] example
[43:30.46] where
[43:30.72] this
[43:31.10] side
[43:31.26] is
[43:31.32] trying
[43:31.44] to
[43:31.56] meet
[43:32.18] with
[43:32.34] the
[43:32.48] sizes
[43:32.72] like
[43:33.06] lakes
[43:33.48] I
[43:33.62] call
[43:33.78] them
[43:34.02] like
[43:34.30] the
[43:34.52] opposite
[43:35.04] of
[43:35.18] islands
[43:35.44] when
[43:35.58] you're
[43:35.68] trying
[43:35.78] to
[43:35.84] have
[43:35.96] these
[43:36.22] server
[43:36.44] functions
[43:36.78] but
[43:36.96] lakes
[43:37.30] have
[43:37.48] huge
[43:37.84] problems
[43:38.18] because
[43:38.38] they're
[43:38.50] waterfall
[43:39.12] prone
[43:39.80] so
[43:40.64] there's
[43:42.00] a lot
[43:42.20] of
[43:42.28] technologies
[43:42.76] that
[43:43.00] try and
[43:43.28] play around
[43:44.68] in the
[43:44.90] middle
[43:45.18] single
[43:46.66] flight
[43:47.02] mutations
[43:47.64] split
[43:49.26] execution
[43:49.70] is
[43:49.84] very
[43:49.98] classic
[43:50.38] for
[43:50.78] the
[43:51.24] whole
[43:51.46] web
[43:52.02] server
[43:52.26] approach
[43:52.60] where
[43:52.74] you're
[43:52.86] like
[43:53.04] next
[43:53.64] page
[43:54.06] get
[43:55.38] the
[43:55.50] next
[43:55.70] page
[43:56.00] post
[43:56.54] something
[43:56.88] post
[43:57.12] a
[43:57.26] form
[43:57.46] return
[43:57.96] the
[43:58.08] page
[43:58.50] versus
[43:59.10] our
[43:59.28] isomorphic
[43:59.88] ones
[44:03.48] check
[44:03.76] you're
[44:03.98] good
[44:04.22] then
[44:04.82] the
[44:05.42] client
[44:05.72] navigates
[44:06.14] to the
[44:06.32] next
[44:06.46] page
[44:06.70] and
[44:06.80] then
[44:06.90] it
[44:07.06] pulls
[44:07.28] the
[44:07.38] data
[44:07.50] you
[44:07.68] get
[44:07.94] a
[44:08.04] waterfall
[44:08.32] there
[44:08.58] we can
[44:09.10] solve
[44:09.44] the
[44:09.62] waterfalls
[44:10.18] right
[44:10.54] we can
[44:10.94] come up
[44:11.56] with
[44:11.70] smart
[44:11.98] solutions
[44:12.56] to
[44:13.20] these
[44:13.44] things
[44:13.80] right
[44:14.10] right
[44:15.70] like
[44:16.02] how do
[44:17.20] I put
[44:17.46] it up
[44:17.62] here
[44:17.78] it's
[44:18.92] an
[44:19.02] exercise
[44:19.26] of
[44:19.42] two
[44:19.58] opposite
[44:19.80] trying
[44:20.06] to
[44:20.16] approach
[44:20.38] each other
[44:20.58] in the
[44:20.72] middle
[44:20.86] this
[44:21.22] has
[44:21.36] resulted
[44:21.54] in
[44:21.66] amazing
[44:21.90] developments
[44:22.22] in
[44:22.46] routing
[44:23.00] like
[44:23.20] next
[44:23.40] app
[44:23.60] router
[44:23.80] review
[44:24.08] transitions
[44:24.60] routing
[44:24.88] like
[44:33.48] than
[44:33.66] anyone
[44:33.88] imagined
[44:34.26] this
[44:34.64] is
[44:34.78] what
[44:34.94] I'm
[44:35.06] trying
[44:35.20] to
[44:35.28] say
[44:35.42] here
[44:35.64] I've
[44:36.22] been
[44:36.34] talking
[44:36.86] to
[44:37.08] you
[44:37.20] guys
[44:37.42] for
[44:37.56] the
[44:37.64] last
[44:37.80] couple
[44:38.06] years
[44:38.32] like
[44:38.54] going
[44:38.76] like
[44:38.94] we're
[44:39.38] getting
[44:39.56] there
[44:39.88] the
[44:40.32] you know
[44:40.82] like
[44:41.12] the
[44:41.30] holy
[44:41.64] grail
[44:41.90] I think
[44:42.16] once
[44:42.86] on
[44:43.12] here
[44:43.30] I
[44:43.42] was
[45:03.48] black
[45:04.20] rails
[45:06.56] and
[45:07.38] they're
[45:07.54] like
[45:07.70] standing
[45:07.90] over
[45:08.10] here
[45:08.50] dot
[45:09.72] net
[45:10.04] and
[45:11.40] they're
[45:11.60] looking
[45:12.32] at us
[45:12.60] over
[45:12.76] here
[45:12.92] and
[45:13.02] they're
[45:13.12] like
[45:13.28] what
[45:14.28] kind
[45:14.48] of
[45:14.60] crack
[45:14.96] are
[45:15.10] you
[45:15.22] guys
[45:15.46] smoking
[45:15.84] like
[45:16.20] why
[45:16.74] are
[45:17.14] you
[45:17.30] you
[45:17.56] guys
[45:17.68] are
[45:17.76] like
[45:17.94] focusing
[45:19.14] in
[45:19.36] this
[45:19.52] golden
[45:20.10] area
[45:20.46] over
[45:20.66] here
[45:20.82] you're
[45:21.02] looking
[45:21.24] it's
[45:21.42] like
[45:21.52] people
[45:21.82] chasing
[45:22.26] after
[45:22.52] treasure
[45:22.84] and
[45:23.00] they're
[45:23.34] here
[45:23.92] going
[45:24.16] like
[45:24.36] you
[45:26.00] guys
[45:26.24] are
[45:26.40] nuts
[45:27.00] right
[45:27.88] but
[45:28.88] this
[45:29.60] kind
[45:29.78] of
[45:29.88] puts
[45:30.14] the
[45:30.92] whole
[45:31.46] perspective
[45:32.56] there's
[45:32.76] a lot
[45:33.16] of
[45:33.26] conversations
[45:33.80] in
[45:34.64] the
[45:34.92] space
[45:35.18] right
[45:35.30] now
[45:35.40] that
[45:35.54] look
[45:35.84] like
[45:36.12] this
[45:36.30] there's
[45:36.64] probably
[45:36.84] like
[45:37.00] a
[45:37.10] really
[45:37.22] good
[45:37.42] chart
[45:37.74] where
[45:38.06] it
[45:38.20] shows
[45:38.42] this
[45:38.58] kind
[45:38.72] of
[45:38.82] thing
[45:39.02] but
[45:39.34] like
[45:39.48] another
[45:39.70] example
[45:40.18] you know
[45:41.18] like
[45:41.42] in the
[45:41.96] front
[45:42.24] end
[45:42.38] space
[45:42.66] is
[45:43.02] you'd
[45:43.22] have
[45:43.36] like
[45:43.50] certain
[45:43.74] libraries
[45:44.08] here
[45:44.36] certain
[45:44.82] libraries
[45:45.16] here
[45:45.42] and
[45:45.60] then
[45:45.72] like
[45:45.86] web
[45:46.08] components
[45:46.48] over
[45:46.68] here
[45:46.94] like
[45:48.08] it's
[45:48.38] that
[45:49.38] kind
[45:49.80] of
[45:49.86] thing
[45:49.96] it's
[45:50.08] like
[45:50.58] VDOM
[45:52.04] or
[45:53.04] signals
[45:53.86] and
[45:54.86] then
[45:54.98] like
[45:55.22] web
[45:55.54] components
[45:55.98] you
[45:56.74] know
[45:56.90] like
[45:57.22] there's
[45:59.36] this
[45:59.54] like
[45:59.74] place
[46:00.36] where
[46:00.68] the
[46:02.36] two
[46:02.60] parties
[46:02.92] that
[46:03.16] are
[46:03.26] fairly
[46:03.54] invested
[46:03.88] are
[46:04.08] trying
[46:04.34] to
[46:05.08] navigate
[46:05.54] to
[46:05.92] and
[46:06.64] then
[46:06.78] there's
[46:07.10] going to be
[46:07.44] like
[46:07.62] this
[46:07.78] zone
[46:08.08] where
[46:08.28] there's
[46:08.48] like
[46:08.66] people
[46:08.86] are
[46:09.00] just
[46:09.16] like
[46:09.42] miss
[46:10.94] the
[46:11.12] boat
[46:11.30] so
[46:11.48] to
[46:11.60] speak
[46:11.88] and
[46:13.56] I
[46:13.72] think
[46:13.98] it's
[46:14.90] fine
[46:15.30] because
[46:15.76] not
[46:16.00] everyone
[46:16.36] needs
[46:16.78] solutions
[46:17.30] here
[46:17.60] these
[46:17.98] solutions
[46:18.42] probably
[46:18.72] fit in
[46:19.06] a very
[46:19.28] specific
[46:19.68] case
[46:20.18] but
[46:20.34] if
[46:20.82] there
[46:21.86] was
[46:22.02] some
[46:22.20] idea
[46:22.70] of
[46:22.94] where
[46:23.18] see
[46:23.38] I
[46:23.54] think
[46:23.72] the
[46:23.90] thing
[46:24.08] is
[46:24.24] there's
[46:25.10] a
[46:25.22] center
[46:25.54] that
[46:26.12] people
[46:26.42] can
[46:26.64] picture
[46:27.64] in
[46:27.76] the
[46:27.86] head
[46:28.00] for
[46:28.20] them
[46:28.44] they're
[46:28.78] like
[46:28.96] I
[46:29.80] picture
[46:30.10] all
[46:30.32] the
[46:30.44] things
[46:30.60] I
[46:30.72] could
[46:30.84] build
[46:31.04] on
[46:31.16] the
[46:31.28] web
[46:31.48] and
[46:31.96] the
[46:32.08] tools
[46:32.52] I
[46:32.64] need
[46:32.82] for
[46:32.98] it
[46:33.08] and
[46:33.20] for
[46:33.34] me
[46:33.58] there
[46:34.20] is
[46:34.30] a
[46:34.44] point
[46:34.68] where
[46:34.88] I
[46:35.00] just
[46:35.22] strike
[46:35.68] the
[46:35.88] right
[46:36.14] balances
[46:36.98] and
[46:38.10] collectively
[46:38.88] the
[46:39.12] community
[46:39.50] has
[46:40.78] been
[46:40.94] kind
[46:41.12] of
[46:41.90] you
[46:42.08] know
[46:42.22] wavering
[46:42.90] to
[46:43.02] where
[46:43.14] they
[46:43.26] can
[46:43.44] find
[46:43.86] that
[46:45.02] center
[46:45.36] and
[46:46.50] I
[46:47.84] think
[46:48.00] it's
[46:48.24] very
[46:48.68] far
[46:48.94] left
[46:49.22] or
[46:49.34] very
[46:49.50] far
[46:49.70] right
[46:49.96] than
[46:50.16] a
[46:50.30] certain
[46:50.54] group
[46:51.60] you
[46:52.26] know
[46:52.44] and
[46:53.20] because
[46:53.78] like
[46:54.02] at
[46:54.18] a
[46:54.40] certain
[46:54.52] point
[46:54.70] you
[46:54.94] know
[46:55.02] I
[46:55.18] said
[46:55.34] I
[46:55.42] was
[46:55.54] tired
[46:55.76] of
[46:56.22] reacting
[46:56.58] to
[46:56.72] stream
[46:57.08] how
[46:57.26] many
[46:57.40] people
[46:57.60] are
[46:58.02] tired
[46:58.32] of
[46:58.50] this
[46:58.72] whole
[46:59.04] conversation
[46:59.82] got
[47:00.86] any
[47:01.10] got
[47:01.88] any
[47:02.56] you
[47:02.86] guys
[47:03.06] in
[47:03.24] chat
[47:03.46] yeah
[47:03.72] you
[47:04.50] know
[47:04.66] what
[47:04.72] I
[47:04.74] mean
[47:04.88] like
[47:05.18] yes
[47:09.90] right
[47:10.50] yeah
[47:17.34] and
[47:17.72] these
[47:18.24] people
[47:18.78] too
[47:18.94] I
[47:19.06] didn't
[47:19.16] put
[47:19.48] them
[47:19.68] there's
[47:20.02] there's
[47:20.42] the
[47:20.52] whole
[47:20.66] people
[47:20.96] in
[47:21.64] this
[47:21.82] graph
[47:22.18] that
[47:22.80] are
[47:22.94] out
[47:23.34] on
[47:23.76] this
[47:23.98] side
[47:24.22] because
[47:24.48] if
[47:25.08] this
[47:25.26] is
[47:25.38] where
[47:25.52] the
[47:25.62] isomorphic
[47:26.22] is
[47:26.50] then
[47:27.30] Vite
[47:30.32] React
[47:31.76] starter
[47:32.16] is
[47:33.08] over
[47:33.32] here
[47:33.84] you
[47:34.62] know
[47:34.84] so
[47:35.48] to
[47:35.62] speak
[47:35.92] right
[47:36.18] like
[47:36.42] there's
[47:36.66] there's
[47:36.90] all
[47:37.02] these
[47:37.22] people
[47:37.48] over
[47:37.72] here
[47:38.10] you
[47:42.28] know
[47:42.48] why
[47:43.12] am I
[47:43.64] even
[47:43.84] getting
[47:44.06] pulled
[47:44.38] into
[47:44.56] this
[47:44.76] conversation
[47:45.26] you
[47:45.48] know
[47:45.60] like
[47:45.88] who's
[47:46.76] out
[47:46.94] who's
[47:47.42] out
[47:47.54] with
[47:47.70] Vite
[47:48.06] React
[47:48.48] starter
[47:48.84] I
[47:50.78] mean
[47:50.94] it's
[47:51.12] Vite
[47:51.36] basically
[47:51.96] any
[47:52.34] framework
[47:52.84] starter
[47:53.20] right
[47:53.76] yeah
[47:57.22] it's
[47:58.04] like
[47:58.74] Vite
[48:00.26] plus
[48:00.66] front
[48:02.74] end
[48:03.06] of
[48:05.82] your
[48:06.02] choice
[48:06.50] this
[48:07.84] is
[48:08.22] a
[48:08.94] category
[48:09.32] now
[48:09.80] yes
[48:15.86] do you
[48:16.12] know
[48:16.20] who
[48:16.34] else
[48:16.52] is
[48:16.62] over
[48:16.78] here
[48:17.04] yes
[48:17.64] thank
[48:17.96] you
[48:18.40] PWA
[48:19.08] local
[48:19.40] first
[48:19.72] yes
[48:20.20] they're
[48:21.70] also
[48:21.92] over
[48:22.12] here
[48:22.36] thank
[48:22.96] you
[48:23.48] PWA
[48:25.22] local
[48:25.78] first
[48:26.22] so
[48:33.86] these
[48:34.06] frameworks
[48:34.42] just don't
[48:34.82] make sense
[48:35.32] a real
[48:35.56] problem
[48:35.76] it depends
[48:36.60] what the
[48:36.84] problem
[48:37.14] was
[48:37.46] the
[48:40.48] thing
[48:41.16] is
[48:41.46] this is
[48:43.14] kind of
[48:43.44] right now
[48:43.82] an inverse
[48:44.56] of how I
[48:45.24] usually draw
[48:45.68] this
[48:45.88] I usually
[48:46.28] call the
[48:47.06] left-hand
[48:47.46] side
[48:47.86] the
[48:48.38] MPA
[48:48.76] Laravel
[48:49.12] side
[48:49.46] or
[48:50.02] even
[48:50.32] like
[48:50.50] static
[48:50.74] web
[48:50.94] server
[48:51.16] if you
[48:51.34] go
[48:51.46] even
[48:51.58] further
[48:51.78] over
[48:52.04] and
[48:52.58] then
[48:52.68] I
[48:52.76] usually
[48:52.96] call
[48:53.30] this
[48:53.60] side
[48:53.88] like
[48:54.08] the
[48:54.24] app
[48:54.44] side
[48:55.24] the
[48:55.40] right
[48:55.58] side
[48:55.78] so
[48:55.92] right
[48:56.04] now
[48:56.16] this
[48:56.36] is
[48:56.46] inverted
[48:56.76] to my
[48:57.12] usual
[48:57.52] scale
[48:58.04] but
[48:58.90] if you
[48:59.80] look at
[49:00.06] this
[49:00.26] the
[49:00.60] types
[49:00.84] of
[49:00.96] apps
[49:01.22] you're
[49:01.38] building
[49:01.68] this
[49:03.20] chant
[49:03.82] for the
[49:04.18] middle
[49:04.38] is
[49:04.74] if you
[49:05.10] look
[49:05.26] at
[49:05.36] the
[49:05.48] scale
[49:05.82] I've
[49:06.66] shown
[49:06.82] this
[49:07.02] on
[49:07.38] talk
[49:07.72] I
[49:07.84] think
[49:07.94] it
[49:08.02] was
[49:08.08] in
[49:08.20] my
[49:08.36] let
[49:08.54] me
[49:08.62] see
[49:08.86] if
[49:09.02] I
[49:09.12] have
[49:09.36] my
[49:09.68] drive
[49:10.50] front
[49:14.68] end
[49:14.84] existential
[49:15.16] crisis
[49:15.50] I
[49:16.32] stole
[49:16.52] this
[49:16.82] from
[49:17.46] Fred K
[49:19.80] Scott
[49:20.04] who was
[49:20.28] trying to
[49:20.50] put the
[49:20.74] frameworks
[49:21.14] under a
[49:21.74] specific
[49:22.04] thing
[49:22.34] I
[49:22.94] just
[49:23.14] did
[49:23.36] that
[49:23.64] but
[49:23.86] I'm
[49:23.98] not
[49:24.14] going
[49:24.38] to
[49:24.68] do
[49:26.00] that
[49:26.36] right
[49:26.62] now
[49:27.28] where
[49:27.76] is
[49:28.10] it
[49:28.54] the
[49:29.14] spectrum
[49:29.52] spectrum
[49:31.28] yeah
[49:32.14] spectrum
[49:32.74] right
[49:33.46] left
[49:33.92] side
[49:34.12] right
[49:34.30] side
[49:34.58] do
[49:35.20] you
[49:35.26] know
[49:35.40] what's
[49:35.82] right
[49:36.22] smack
[49:36.68] in the
[49:37.00] middle
[49:37.18] of
[49:37.32] the
[49:37.44] spectrum
[49:37.78] e-commerce
[49:42.04] the
[49:53.74] amount
[49:54.14] of
[49:54.24] apps
[49:54.52] that
[49:54.70] don't
[49:55.08] need
[49:55.28] a
[49:55.38] server
[49:55.56] at
[49:55.66] some
[49:55.78] point
[49:55.92] is
[49:56.02] a
[49:56.12] mission
[49:56.30] elder
[49:56.54] in
[49:56.76] my
[49:56.88] opinion
[49:57.10] or
[49:57.50] it's
[49:58.72] yeah
[50:02.40] yeah
[50:04.62] I
[50:04.94] basically
[50:05.62] was
[50:05.98] gonna
[50:06.68] agree
[50:06.96] with
[50:07.12] you
[50:07.20] on
[50:07.32] that
[50:07.46] like
[50:07.66] it's
[50:07.86] it's
[50:08.06] more
[50:08.20] of
[50:08.30] that
[50:08.42] like
[50:08.64] that
[50:09.12] don't
[50:09.68] benefit
[50:10.18] from
[50:10.48] a
[50:10.62] server
[50:10.86] in
[50:11.10] some
[50:11.30] sort
[50:11.50] of
[50:11.60] way
[50:11.82] is
[50:12.14] an
[50:12.38] outlier
[50:12.84] like
[50:13.08] there
[50:13.22] are
[50:13.50] they
[50:16.50] can
[50:16.70] continue
[50:17.06] to
[50:17.22] do
[50:17.44] what
[50:17.98] they
[50:18.10] do
[50:18.30] but
[50:18.52] there
[50:18.90] are
[50:19.12] benefits
[50:20.00] to
[50:20.28] offloading
[50:21.06] it
[50:21.72] the
[50:22.60] web
[50:22.84] is
[50:23.32] in
[50:24.44] its
[50:24.62] nature
[50:25.02] started
[50:25.68] on
[50:25.88] the
[50:26.00] server
[50:26.28] right
[50:30.82] if
[50:31.12] people
[50:31.36] are
[50:31.62] trying
[50:32.56] to
[50:32.84] like
[50:33.14] expand
[50:33.86] their
[50:34.08] range
[50:34.50] here
[50:34.70] a
[50:34.84] little
[50:34.94] bit
[50:35.08] but
[50:35.20] my
[50:35.40] point
[50:35.66] is
[50:35.88] react
[50:36.74] and
[50:36.98] all
[50:37.18] our
[50:37.34] frameworks
[50:37.70] all
[50:37.98] started
[50:38.24] over
[50:38.42] here
[50:38.68] right
[50:40.22] the
[50:41.16] web
[50:41.44] started
[50:41.90] over
[50:42.12] here
[50:42.40] this
[50:44.78] middle
[50:45.88] zone
[50:46.30] is
[50:47.60] roughly
[50:48.16] this
[50:50.18] middle
[50:50.44] zone
[50:50.76] the
[50:51.66] problem
[50:51.92] is
[50:52.12] when
[50:52.38] you
[50:52.48] take
[50:52.68] people
[50:53.00] who
[50:54.24] are
[50:54.54] used
[50:54.84] to
[50:55.00] this
[50:55.26] and you
[50:55.56] try and
[50:55.88] retch
[50:56.20] them
[50:56.38] this
[50:56.60] way
[50:56.90] well
[51:00.42] like
[51:00.68] not
[51:00.96] producing
[51:01.66] a
[51:01.88] gap
[51:02.14] like
[51:02.30] trying
[51:02.42] to
[51:02.54] cover
[51:02.76] the
[51:02.92] whole
[51:03.06] range
[51:03.40] you
[51:03.84] end
[51:04.08] up
[51:04.28] with
[51:04.58] needing
[51:04.82] to
[51:05.02] fill
[51:05.18] this
[51:05.40] middle
[51:05.60] space
[51:05.98] and
[51:06.32] that
[51:07.26] is
[51:07.42] a
[51:07.62] tough
[51:08.10] ask
[51:08.56] but
[51:10.54] it's
[51:10.88] in
[51:11.70] the
[51:11.86] middle
[51:12.08] because
[51:13.94] e-commerce
[51:14.58] is in
[51:14.94] the
[51:15.04] middle
[51:15.24] mine's
[51:33.46] not
[51:33.72] oh
[51:35.00] fuzzy
[51:35.36] yes
[51:42.46] yes
[51:43.36] yeah
[51:45.78] and
[51:46.00] yeah
[51:46.68] I mean
[51:46.96] there are
[51:47.32] like
[51:47.54] local
[51:47.80] first
[51:48.10] is
[51:48.28] in
[51:48.68] that
[51:48.88] zone
[51:49.12] right
[51:49.36] so
[51:52.32] yeah
[51:52.50] it's
[51:52.98] interesting
[51:53.46] also
[51:54.96] often
[51:55.18] if you
[51:55.36] can
[51:55.46] live
[51:55.68] or
[51:55.80] sink
[51:56.02] yeah
[51:56.26] yes
[51:57.22] exactly
[51:58.08] so
[51:58.48] like
[51:58.72] is this
[51:59.74] an
[51:59.86] example
[52:00.26] I mean
[52:00.70] it's
[52:00.82] like
[52:00.94] the
[52:01.04] whole
[52:01.16] politics
[52:01.54] thing
[52:01.82] when
[52:02.04] communism
[52:02.90] becomes
[52:03.30] fascism
[52:04.34] like
[52:04.84] you
[52:05.00] loop
[52:05.52] around
[52:05.76] on
[52:05.92] the
[52:06.02] other
[52:06.16] side
[52:06.48] maybe
[52:07.34] this
[52:19.32] is
[52:19.50] true
[52:19.78] but
[52:21.18] if
[52:21.92] you
[52:22.18] look
[52:22.38] over
[52:22.58] time
[52:23.12] interactive
[52:25.46] in
[52:25.68] websites
[52:26.00] is
[52:26.28] something
[52:26.48] that
[52:26.68] will
[52:26.90] increase
[52:27.40] over
[52:27.60] time
[52:27.86] it's
[52:28.14] just
[52:28.32] like
[52:28.54] it's
[52:29.02] one
[52:29.18] of
[52:29.26] those
[52:29.36] things
[52:29.52] the
[52:29.74] expectations
[52:30.26] always
[52:30.78] are
[52:31.04] increasing
[52:31.50] so
[52:31.70] while
[52:32.36] the
[52:33.08] tools
[52:33.36] that
[52:33.48] were
[52:33.58] built
[52:33.84] over
[52:34.32] farther
[52:34.68] on
[52:34.84] the
[52:34.98] side
[52:35.28] are
[52:35.72] definitely
[52:35.98] situated
[52:36.48] better
[52:36.76] place
[52:37.18] where
[52:37.36] they
[52:37.54] could
[52:37.86] be
[52:38.96] the
[52:39.18] target
[52:39.52] for
[52:39.72] the
[52:39.84] next
[52:40.04] thing
[52:40.32] they
[52:40.78] they're
[52:41.66] trying
[52:41.86] to
[52:41.96] come
[52:42.12] back
[52:42.40] this
[52:42.64] way
[52:42.82] to
[52:42.98] meet
[52:43.18] in
[52:43.28] the
[52:43.42] middle
[52:43.64] and
[52:44.28] they
[52:44.38] know
[52:44.52] they
[52:44.64] need
[52:44.76] to
[52:44.86] improve
[52:45.26] like
[52:45.94] let's
[52:47.50] face
[52:47.72] it
[52:47.92] I
[52:48.58] said
[52:48.82] this
[52:48.96] ages
[52:49.14] ago
[52:49.34] especially
[52:49.54] when I
[52:49.70] went to
[52:49.86] eBay
[52:50.08] React
[52:51.30] would
[52:51.52] you
[52:51.94] know
[52:52.06] as
[52:52.32] it
[52:52.48] was
[52:52.80] would
[52:52.98] been
[52:53.30] a
[52:53.48] terrible
[52:53.96] solution
[52:54.52] for
[52:54.84] eBay
[52:55.16] React
[52:56.30] server
[52:56.62] components
[52:57.26] in
[52:58.78] principle
[52:59.38] could
[53:04.32] for
[53:04.84] something
[53:05.20] like
[53:05.54] that
[53:05.84] server
[53:06.40] components
[53:06.90] let's
[53:07.96] React
[53:09.50] go from
[53:10.02] this
[53:10.80] to
[53:11.50] to
[53:12.26] basically
[53:13.30] here
[53:14.50] in a
[53:14.92] reasonable
[53:15.20] way
[53:15.46] don't get
[53:15.90] me wrong
[53:16.22] there are
[53:17.30] tons of
[53:17.76] e-commerce
[53:18.20] sites
[53:18.60] built in
[53:19.00] React
[53:19.38] but probably
[53:20.36] would have
[53:20.72] better not
[53:21.20] been
[53:21.42] I think
[53:22.22] React
[53:22.62] was really
[53:23.40] bugged
[53:24.48] especially when
[53:24.92] e-commerce
[53:25.24] is the focus
[53:25.68] that they
[53:26.00] realistically
[53:27.00] should be
[53:28.20] sitting over
[53:28.66] here
[53:28.94] and they
[53:29.46] wanted to
[53:29.82] extend
[53:30.08] this
[53:30.34] way
[53:30.56] I
[53:31.92] mean
[53:32.40] it's
[53:33.00] not
[53:33.16] lost
[53:33.46] on me
[53:33.76] that
[53:33.96] Remix
[53:34.38] is on
[53:35.52] Shopify
[53:35.90] and
[53:36.96] whatnot
[53:37.60] so like
[53:39.48] there is a
[53:40.54] trade-off
[53:40.96] there when
[53:41.36] you want
[53:41.66] to make
[53:42.40] it easy
[53:42.74] for your
[53:43.10] developers
[53:43.50] to be
[53:43.94] able to
[53:44.14] build
[53:44.32] their
[53:44.48] storefronts
[53:45.52] but from
[53:46.22] like a
[53:46.56] pure
[53:46.92] technical
[53:47.92] standpoint
[53:48.60] Shopify
[53:49.46] should be
[53:49.82] Astro
[53:50.16] like
[53:50.58] just
[53:50.98] like
[53:51.30] Astro
[53:55.94] funnily
[53:56.50] enough
[53:56.78] didn't
[53:57.62] quite get
[53:58.14] to the
[53:58.40] e-commerce
[53:58.82] level
[53:59.34] either
[53:59.62] they had
[54:00.12] to stretch
[54:00.44] up a
[54:00.74] little bit
[54:01.14] because when
[54:01.60] you're a
[54:02.00] static
[54:02.26] site
[54:02.56] generator
[54:02.94] you can't
[54:04.18] get there
[54:04.42] this is
[54:05.02] like this
[54:05.36] place
[54:05.88] that people
[54:06.38] have been
[54:06.58] trying to
[54:07.22] get to
[54:07.88] the last
[54:08.28] couple
[54:08.50] years
[54:08.68] it's all
[54:09.58] about
[54:09.76] e-commerce
[54:10.22] hey
[54:20.26] how's it
[54:20.60] going
[54:20.82] hey
[54:21.94] great
[54:22.64] we got
[54:22.86] showing
[54:23.26] from other
[54:23.72] frameworks
[54:24.18] Apollo
[54:25.52] works on
[54:26.02] Svelte
[54:26.44] shy with
[54:27.34] quick
[54:28.70] oh
[54:31.94] there you
[54:33.82] go
[54:33.96] yeah
[54:34.18] glasses
[54:34.68] thing
[54:35.00] is
[54:35.14] all
[54:35.34] completely
[54:35.66] new
[54:35.86] to
[54:36.00] me
[54:36.20] I
[54:38.90] mean
[54:39.08] yes
[54:40.48] I mean
[54:40.90] Marco
[54:41.40] did start
[54:42.60] here
[54:42.88] this is why
[54:43.36] Marco
[54:43.66] was sitting
[54:44.08] alone
[54:44.34] for like
[54:44.70] a decade
[54:45.14] right
[54:46.92] Marco
[54:47.62] built
[54:49.38] that
[54:50.52] in the middle
[54:51.66] dynamic
[54:52.36] e-commerce
[54:52.92] thing
[54:53.06] the problem
[54:53.30] with Marco
[54:53.62] is
[54:53.92] its slice
[54:54.94] was
[54:55.18] pretty
[54:56.26] thin
[54:56.72] right
[54:57.76] right
[55:01.34] yeah
[55:01.68] I mean
[55:01.98] the same
[55:03.06] reason I'd
[55:03.34] say the
[55:03.60] Astro
[55:03.96] is the
[55:04.20] solution
[55:04.50] for
[55:04.78] is the
[55:05.78] same
[55:05.92] reason
[55:06.18] Marco
[55:06.68] like
[55:06.92] just
[55:07.12] that
[55:07.52] that is
[55:08.06] but it
[55:09.24] is
[55:09.40] interesting
[55:09.90] because that
[55:10.30] has been
[55:10.62] what's
[55:10.94] pushing it
[55:11.36] if you
[55:11.56] want to
[55:11.72] make sense
[55:12.24] of the
[55:12.58] web
[55:12.80] the last
[55:13.44] few years
[55:13.86] that's
[55:14.16] what's
[55:14.34] been
[55:14.46] pushing
[55:14.72] it
[55:14.90] that
[55:15.06] was my
[55:15.96] point
[55:16.22] with what
[55:16.54] I was
[55:16.76] saying
[55:17.04] there is
[55:19.48] a tension
[55:20.16] here
[55:20.66] there are
[55:21.26] sides
[55:22.00] of this
[55:23.26] discussion
[55:23.82] this isn't
[55:25.08] like
[55:25.50] sorry
[55:27.10] bug on
[55:28.26] Theo
[55:28.44] but he
[55:28.98] somehow
[55:29.26] made this
[55:29.90] whole
[55:30.08] conversation
[55:30.52] about
[55:30.76] Next.js
[55:31.22] and
[55:31.74] I
[55:33.66] couldn't
[55:34.80] I couldn't
[55:35.86] yeah
[55:39.60] I've
[55:43.80] tried some
[55:44.14] fresh-time
[55:44.46] paper in
[55:44.80] the spot
[55:45.06] does it
[55:45.28] occupy
[55:45.50] some
[55:45.66] space
[55:45.92] yes
[55:46.70] yes
[55:47.72] fresh
[55:48.44] is the
[55:48.86] same
[55:49.00] as
[55:49.12] astro
[55:49.46] yes
[55:50.18] oh man
[56:01.56] I
[56:01.88] I'm like
[56:03.50] the worst
[56:03.86] person to
[56:04.32] bring this
[56:04.66] kind of
[56:04.82] stuff
[56:04.96] every
[56:05.42] framework
[56:05.78] has like
[56:06.18] this
[56:06.34] angle
[56:06.90] for
[56:07.22] marketing
[56:07.62] and
[56:08.70] I
[56:09.12] find
[56:09.58] most
[56:09.88] marketing
[56:10.28] BS
[56:11.16] like
[56:13.56] spelt
[56:14.66] noteworthy
[56:16.38] here
[56:16.62] I
[56:16.92] mean
[56:17.12] there
[56:17.40] was
[56:17.66] much
[56:17.88] better
[56:18.08] place
[56:18.30] here
[56:18.40] but
[56:18.50] when
[56:18.64] spelt
[56:18.78] 3
[56:18.94] came
[56:19.14] out
[56:19.32] I
[56:20.16] just
[56:21.14] couldn't
[56:21.58] take
[56:21.94] it
[56:22.06] like
[56:22.36] the
[56:22.52] disappearing
[56:23.12] framework
[56:23.74] you know
[56:24.22] like
[56:24.52] there is
[56:25.28] stuff
[56:26.18] about
[56:26.56] spelt
[56:27.32] 3
[56:27.66] like
[56:28.10] I
[56:28.12] like
[56:28.12] I
[56:28.18] love
[56:28.42] spelt
[56:29.06] 5
[56:29.32] I
[56:29.44] love
[56:29.68] how
[56:30.02] spelt
[56:30.18] has
[56:30.30] grown
[56:30.48] over the
[56:30.78] years
[56:30.94] but
[56:31.12] spelt
[56:31.36] 3
[56:31.52] when
[56:31.66] it
[56:31.74] came out
[56:32.00] that
[56:32.60] I
[56:32.74] was
[56:32.86] just like
[56:33.22] man
[56:33.92] this is
[56:34.48] like
[56:34.74] I guess
[56:35.14] compelling
[56:35.50] marketing
[56:35.92] but
[56:36.22] like
[56:37.20] there's
[56:41.20] two sides
[56:41.66] to this
[56:42.04] kind of
[56:42.28] thing
[56:42.48] on one
[56:43.84] hand
[56:44.24] this is
[56:46.14] a good
[56:46.40] shout out
[56:46.76] that
[56:46.94] meta
[56:47.18] frameworks
[56:47.66] essentially
[56:48.60] can be
[56:50.20] agnostic
[56:50.62] like
[56:50.86] Tanner
[56:51.06] Lindsley
[56:51.40] wishes
[56:51.66] because
[56:52.08] most
[56:53.64] of the
[56:54.62] upper
[56:55.04] abstractions
[56:55.64] don't
[56:56.06] need to
[56:56.50] be that
[56:56.80] tied to
[56:57.14] the
[56:57.24] render
[56:57.44] so
[56:59.12] like
[57:01.26] basically
[57:02.74] what you're
[57:03.08] describing
[57:03.50] here
[57:03.78] with
[57:03.92] Remix
[57:04.22] is
[57:04.42] literally
[57:05.30] how
[57:06.12] every
[57:06.46] meta
[57:06.70] framework
[57:06.98] works
[57:07.82] essentially
[57:08.40] right
[57:08.90] like
[57:10.12] all
[57:10.56] of
[57:11.28] these
[57:11.60] here
[57:11.92] in a
[57:12.20] sense
[57:12.46] right
[57:13.64] people
[57:15.04] who
[57:15.24] use
[57:15.46] next
[57:15.80] even
[57:16.10] the
[57:16.26] pages
[57:16.48] directory
[57:16.80] before
[57:17.16] even
[57:17.62] though
[57:17.74] it
[57:17.80] had
[57:17.94] funny
[57:18.42] stuff
[57:18.86] like
[57:19.28] get
[57:20.42] server
[57:20.74] side
[57:21.06] props
[57:21.52] and
[57:21.66] all
[57:21.78] this
[57:21.94] kind
[57:22.08] of
[57:22.16] garbage
[57:22.54] you
[57:25.80] didn't
[57:26.10] need
[57:26.80] to
[57:27.28] use
[57:27.50] effect
[57:27.82] you
[57:28.08] could
[57:28.18] do
[57:28.30] the
[57:28.44] data
[57:28.64] fetching
[57:29.08] in
[57:29.40] those
[57:29.72] places
[57:30.54] it
[57:31.08] was
[57:31.28] the
[57:31.48] same
[57:31.68] thing
[57:32.00] I
[57:32.26] think
[57:32.50] you
[57:34.02] know
[57:34.20] what
[57:34.68] was
[57:34.86] nice
[57:35.08] about
[57:35.26] Remix
[57:35.58] is
[57:35.74] that
[57:35.86] they
[57:36.00] chose
[57:36.32] to
[57:36.54] use
[57:36.98] web
[57:38.22] standards
[57:38.56] but
[57:38.78] like
[57:39.08] again
[57:39.30] this
[57:39.50] is
[57:39.62] one
[57:39.78] of
[57:39.86] those
[57:40.14] things
[57:41.10] where
[57:41.30] actually
[57:41.60] almost
[57:41.86] all
[57:42.02] the
[57:42.14] modern
[57:42.34] tools
[57:42.62] use
[57:42.78] web
[57:42.96] standards
[57:43.24] you
[57:43.40] could
[57:43.50] say
[57:43.62] it's
[57:43.74] because
[57:43.88] of
[57:43.98] Remix
[57:44.26] but
[57:44.42] it's
[57:44.78] more
[57:45.04] likely
[57:45.48] due
[57:46.60] to
[57:46.86] the
[57:47.04] fact
[57:47.36] that
[57:47.92] when
[57:49.08] a new
[57:50.40] baseline
[57:50.80] does
[57:51.08] appear
[57:51.38] and
[57:51.54] is
[57:51.74] useful
[57:52.42] to
[57:52.62] use
[57:52.84] people
[57:53.14] will
[57:53.38] use
[57:53.64] it
[57:53.78] the
[57:53.94] problem
[57:54.16] is
[57:54.28] the
[57:54.42] first
[57:54.72] movers
[57:55.54] in
[57:55.90] any
[57:56.08] kind
[57:56.24] of
[57:56.40] range
[57:56.90] don't
[57:57.30] have
[57:57.50] those
[57:57.66] tools
[57:57.86] available
[57:58.20] for
[57:58.44] them
[57:58.52] at
[57:58.62] the
[57:58.70] time
[57:58.84] so
[57:58.94] they
[57:59.04] have
[57:59.14] to
[57:59.22] make
[57:59.36] the
[57:59.48] thing
[57:59.62] themselves
[58:00.04] what
[58:00.82] we've
[58:01.04] learned
[58:01.22] over
[58:01.40] time
[58:01.66] and I
[58:01.82] think
[58:01.94] this
[58:02.10] is
[58:02.24] the
[58:02.42] real
[58:02.60] lesson
[58:02.88] for
[58:03.06] people
[58:03.40] building
[58:04.24] frameworks
[58:04.58] is
[58:04.92] it's
[58:05.62] usually
[58:06.18] better
[58:06.46] to
[58:06.64] err
[58:06.84] on
[58:06.96] the
[58:07.08] platform
[58:07.86] in
[58:08.32] hoping
[58:08.66] that
[58:09.48] in
[58:09.62] the
[58:09.76] future
[58:10.12] those
[58:12.28] simplifications
[58:13.12] align
[58:13.52] the
[58:13.70] problem
[58:13.98] is
[58:14.14] you
[58:14.26] can't
[58:14.52] always
[58:14.74] do
[58:14.92] that
[58:15.14] because
[58:15.30] the
[58:15.46] platform
[58:15.76] versions
[58:16.24] sometimes
[58:16.72] are
[58:16.90] kind
[58:17.04] of
[58:17.14] dumb
[58:17.40] and
[58:17.78] they
[58:17.90] don't
[58:18.08] do
[58:18.24] what
[58:18.38] needs
[58:18.58] to
[58:18.68] be
[58:18.78] done
[58:19.04] and
[58:20.70] you're
[58:20.94] kind
[58:21.02] of
[58:21.08] stuck
[58:21.26] with
[58:21.40] it
[58:22.04] right
[58:22.32] so
[58:22.58] we
[58:24.72] try
[58:25.16] and
[58:25.30] say
[58:25.42] okay
[58:25.78] well
[58:26.12] if
[58:26.44] this
[58:26.62] is
[58:26.74] how
[58:26.90] it
[58:27.06] works
[58:27.38] let's
[58:28.54] not
[58:28.72] mess
[58:28.98] with
[58:29.12] it
[58:29.22] too
[58:29.38] much
[58:29.62] that's
[58:29.98] safer
[58:30.30] and
[58:31.18] that's
[58:31.36] what
[58:31.50] a lot
[58:32.10] of
[58:32.14] has
[58:32.34] been
[58:32.42] doing
[58:32.50] the
[58:32.64] last
[58:32.82] few
[58:33.00] years
[58:33.26] but
[58:33.74] early
[58:35.02] 2010
[58:36.22] to
[58:36.42] 2015
[58:36.86] or
[58:37.04] even
[58:37.18] a little
[58:37.38] earlier
[58:37.66] like
[58:37.84] 2017
[58:38.26] 2015
[58:38.66] so
[58:38.96] it's
[58:39.06] like
[58:39.20] time
[58:39.40] like
[58:39.56] react
[58:39.90] and
[58:40.14] angular
[58:40.58] one
[58:40.80] came
[58:40.98] out
[58:41.14] we
[58:41.72] were
[58:41.88] kind
[58:42.04] of
[58:42.12] in
[58:42.24] a
[58:42.34] very
[58:42.48] different
[58:42.68] mindset
[58:42.92] we're
[58:43.12] like
[58:43.32] browsers
[58:43.82] suck
[58:44.46] they're
[58:45.02] all
[58:45.20] different
[58:45.52] they're
[58:45.76] not
[58:45.94] things
[58:46.22] we're
[58:46.62] just
[58:46.74] going
[58:46.84] to
[58:46.90] standardize
[58:47.36] our
[58:47.48] way
[58:47.62] for
[58:47.80] us
[58:48.14] and
[58:48.54] not
[58:48.72] worry
[58:48.98] about
[58:49.20] whatever
[58:49.46] crap
[58:49.74] they're
[58:49.90] doing
[58:50.06] because
[58:50.20] it's
[58:50.30] going
[58:50.40] to
[58:50.44] take
[58:50.58] forever
[58:50.86] this
[58:51.74] is
[58:51.90] part
[58:52.16] of
[58:52.26] the
[58:52.34] reason
[58:52.56] why
[58:52.76] I
[58:52.88] think
[58:53.00] the
[58:53.18] original
[58:53.56] divide
[58:54.00] with
[58:54.20] web
[58:54.42] components
[58:54.84] people
[58:55.22] and
[58:55.38] stuff
[58:55.56] happened
[58:55.84] in the
[58:56.04] first
[58:56.20] place
[58:56.44] was
[58:56.64] because
[58:57.12] they
[58:59.58] need a
[59:01.40] solution
[59:01.64] now
[59:01.98] and
[59:02.14] they're
[59:02.26] like
[59:02.38] I'm
[59:02.52] not
[59:02.68] going
[59:02.80] to
[59:02.96] wait
[59:03.52] for
[59:03.72] it
[59:03.94] over
[59:06.76] time
[59:07.42] we've
[59:08.58] kind
[59:08.72] of
[59:08.80] gone
[59:08.98] to
[59:09.14] a
[59:09.28] place
[59:09.50] where
[59:09.72] we've
[59:10.34] kind
[59:10.44] of
[59:10.54] shifted
[59:10.92] our
[59:11.14] perspective
[59:11.64] but
[59:11.96] still
[59:13.06] it's
[59:13.66] kind
[59:13.80] of
[59:13.86] hard
[59:14.00] to
[59:14.10] work
[59:14.24] on
[59:14.32] a
[59:14.40] platform
[59:14.68] that
[59:14.86] never
[59:15.14] decays
[59:15.94] or
[59:16.04] goes
[59:16.38] away
[59:16.60] like
[59:16.84] even
[59:17.84] on
[59:18.04] the
[59:18.20] server
[59:18.50] which
[59:18.88] isn't
[59:19.20] like
[59:19.42] you
[59:19.78] know
[59:19.88] w3c
[59:20.58] it's
[59:20.76] not
[59:20.90] the
[59:21.06] web
[59:21.34] you
[59:21.72] have
[59:21.92] people
[59:22.16] like
[59:22.32] jared
[59:22.50] sumner
[59:22.78] being
[59:22.98] like
[59:23.26] man
[59:23.88] streams
[59:24.90] and
[59:25.16] nodes
[59:25.40] suck
[59:25.84] you
[59:26.46] know
[59:26.68] he
[59:27.86] re-implemented
[59:29.04] streams
[59:29.32] completely
[59:29.70] different
[59:30.10] because
[59:30.98] like
[59:32.42] basically
[59:33.06] the
[59:33.26] api
[59:33.86] for
[59:34.58] node
[59:34.84] for
[59:35.04] streams
[59:35.46] was
[59:36.64] too
[59:36.90] introspectable
[59:37.70] which
[59:38.08] wouldn't
[59:38.64] allow
[59:39.04] to do
[59:39.32] the
[59:39.42] sort
[59:39.58] of
[59:40.06] performance
[59:40.80] optimizations
[59:41.32] that he
[59:41.58] wanted
[59:41.74] to do
[59:41.92] they
[59:42.08] were
[59:42.22] too
[59:42.58] flexible
[59:43.78] they
[59:45.30] let
[59:45.48] the
[59:45.64] user
[59:45.88] get
[59:46.08] in
[59:46.30] the
[59:46.42] middle
[59:46.58] of
[59:46.76] something
[59:47.08] that
[59:47.84] prevented
[59:48.74] performance
[59:49.32] optimization
[59:49.84] basically
[59:50.52] it was
[59:50.92] a dead
[59:51.20] end
[59:51.46] so he
[59:52.30] was
[59:52.40] like
[59:52.52] no
[59:52.64] I'm
[59:52.74] not
[59:52.82] going
[59:52.92] to
[59:52.96] do
[59:53.06] it
[59:53.20] but
[59:53.98] it's
[59:55.94] a gutsy
[59:56.48] move
[59:56.76] to take
[59:57.38] when
[59:58.56] those
[59:58.98] kind
[59:59.12] of
[59:59.20] bodies
[59:59.42] will
[59:59.58] continue
[59:59.86] to
[60:00.04] move
[60:00.26] and
[60:00.38] people
[60:00.56] continue
[60:00.90] to
[60:01.10] use
[60:01.30] them
[60:01.46] I'm
[60:01.76] just
[60:01.96] throwing
[60:02.28] the
[60:02.42] sorry
[60:02.54] I
[60:02.72] know
[60:03.12] I
[60:03.20] went
[60:03.28] on
[60:03.38] a
[60:03.48] completely
[60:03.82] different
[60:04.62] side
[60:04.88] Remix
[60:05.18] is a
[60:05.32] great
[60:05.42] solution
[60:05.68] I
[60:05.82] just
[60:05.94] want
[60:06.08] to
[60:06.18] point
[60:06.74] out
[60:06.90] that
[60:07.08] a
[60:07.20] lot
[60:07.32] of
[60:07.42] times
[60:07.72] the
[60:08.62] like
[60:12.52] a lot
[60:13.00] of
[60:13.08] the
[60:13.18] core
[60:13.40] pieces
[60:13.76] are
[60:14.08] like
[60:14.50] it's
[60:18.06] a
[60:18.14] perception
[60:18.48] thing
[60:18.82] right
[60:19.10] like
[60:19.52] Remix
[60:20.60] actually
[60:20.84] depends
[60:21.22] a lot
[60:21.52] of
[60:21.62] its
[60:21.74] behavior
[60:22.10] on
[60:22.32] React
[60:22.56] it
[60:22.76] wouldn't
[60:22.94] be
[60:23.14] able
[60:23.38] to
[60:23.72] do
[60:23.98] the
[60:24.18] streaming
[60:24.48] and
[60:24.78] deferred
[60:25.18] if
[60:25.30] it
[60:25.40] didn't
[60:25.52] have
[60:25.72] React
[60:26.02] under
[60:26.22] the
[60:26.36] hood
[60:26.48] but
[60:26.62] on
[60:26.72] the
[60:26.84] other
[60:26.96] hand
[60:27.28] yeah
[60:31.80] I
[60:32.08] don't
[60:32.18] know
[60:32.40] you
[60:37.24] can
[60:37.40] build
[60:37.70] an
[60:38.24] entire
[60:38.46] Remix
[60:38.82] app
[60:39.04] without
[60:39.24] a
[60:39.38] single
[60:39.54] use
[60:39.70] date
[60:39.86] that
[60:40.68] is
[60:41.16] true
[60:42.24] you
[60:42.78] could
[60:43.02] build
[60:43.42] an
[60:43.56] entire
[60:43.86] GraphQL
[60:44.46] app
[60:45.44] without
[60:45.86] use
[60:46.18] date
[60:46.38] too
[60:46.62] right
[60:46.88] or
[60:47.26] actually
[60:47.76] I
[60:48.84] think
[60:49.02] you
[60:49.10] can
[60:49.20] build
[60:49.36] an
[60:49.52] entire
[60:50.18] tan
[60:50.62] stack
[60:50.94] without
[60:51.46] use
[60:51.66] date
[60:51.78] right
[60:51.90] you
[60:52.00] just
[60:52.18] use
[60:52.38] query
[60:52.68] right
[60:54.10] I
[60:55.58] think
[60:55.70] it's
[60:55.80] fair
[60:55.90] I
[60:56.14] think
[60:56.50] what
[60:56.98] I'm
[60:57.18] trying
[60:57.36] to
[60:57.42] get
[60:57.52] at
[60:57.64] is
[60:57.80] the
[60:58.26] solutions
[60:58.64] are
[61:00.14] more
[61:01.66] similar
[61:01.92] than
[61:02.08] people
[61:02.26] realize
[61:02.66] and
[61:03.64] we
[61:04.42] tend
[61:04.70] to
[61:04.82] get
[61:04.98] focused
[61:05.56] on
[61:05.76] the
[61:05.88] wrong
[61:06.08] things
[61:06.48] sorry
[61:09.44] I
[61:09.74] took
[61:10.18] that
[61:10.30] off
[61:10.52] tangently
[61:11.18] too far
[61:11.50] I
[61:13.26] appreciate
[61:14.12] the
[61:14.32] cybernically
[61:14.96] enhanced
[61:15.42] framework
[61:15.68] because at
[61:16.02] least it
[61:16.20] doesn't
[61:16.38] mean
[61:16.54] anything
[61:16.94] it
[61:27.88] still
[61:28.12] impacts
[61:28.76] measurable
[61:29.76] page
[61:30.16] scores
[61:30.50] I
[61:32.24] think
[61:32.46] there's
[61:32.60] a
[61:32.72] difference
[61:32.98] but
[61:33.20] it's
[61:33.78] just
[61:34.26] because
[61:34.54] it's
[61:34.74] duplicated
[61:35.24] doesn't
[61:35.56] mean
[61:35.70] it's
[61:35.86] encoded
[61:36.16] the
[61:36.36] same
[61:36.52] way
[61:36.74] like
[61:37.24] one's
[61:37.68] encoded
[61:37.96] in
[61:38.12] JSON
[61:38.36] and
[61:38.54] one's
[61:38.78] encoded
[61:39.18] in
[61:39.36] HTML
[61:39.78] and
[61:40.46] how
[61:40.72] it
[61:40.88] manifests
[61:42.04] itself
[61:42.40] is
[61:42.56] different
[61:42.86] yeah
[61:55.52] I
[61:56.14] like
[61:56.56] this
[61:57.04] point
[61:57.30] Tony
[61:57.58] just
[61:57.82] catching
[61:58.08] up
[61:58.24] with
[61:58.36] chat
[61:58.58] here
[61:58.78] is
[61:59.22] that
[61:59.40] while
[61:59.92] it
[62:00.04] has
[62:00.18] a
[62:00.32] single
[62:00.54] mental
[62:00.86] model
[62:01.14] the
[62:01.30] fact
[62:01.46] that
[62:01.60] runs
[62:01.78] on
[62:01.88] both
[62:02.02] sides
[62:02.22] means
[62:02.54] that
[62:02.84] no
[62:03.80] one
[62:03.98] quite
[62:04.46] knows
[62:04.88] how
[62:05.12] it
[62:05.26] runs
[62:05.44] there
[62:05.60] is
[62:05.74] something
[62:06.08] clearer
[62:07.14] about
[62:07.98] that's
[62:08.74] like
[62:08.92] the
[62:09.08] clearer
[62:09.52] separation
[62:10.18] because
[62:10.90] you're
[62:11.04] like
[62:11.24] this
[62:11.66] code
[62:11.94] does
[62:12.46] this
[62:12.78] this
[62:13.14] code
[62:13.46] does
[62:14.28] this
[62:14.46] what's
[62:14.68] funny
[62:14.92] is
[62:15.16] when
[62:16.04] you
[62:16.22] try
[62:16.98] and
[62:17.08] meet
[62:17.16] in
[62:17.26] the
[62:17.34] middle
[62:17.56] you
[62:18.90] end
[62:19.14] up
[62:19.32] inheriting
[62:19.84] both
[62:20.14] problems
[62:20.56] because
[62:20.86] the
[62:21.22] islands
[62:21.60] themselves
[62:22.10] have
[62:23.98] a
[62:24.90] different
[62:25.16] mental
[62:25.40] model
[62:25.66] than
[62:25.82] the
[62:25.96] server
[62:26.14] part
[62:26.46] yet
[62:26.94] have
[62:27.44] the
[62:27.62] same
[62:27.96] fuzzy
[62:28.32] execution
[62:28.90] model
[62:29.26] I
[62:35.40] I
[62:35.40] don't
[62:36.36] know
[62:36.52] I
[62:36.70] don't
[62:37.10] think
[62:38.08] remix
[62:39.22] yes
[62:40.34] I
[62:40.70] think
[62:40.88] they
[62:41.02] will
[62:41.20] support
[62:41.78] the
[62:42.02] ability
[62:42.32] to
[62:42.56] do
[62:42.72] stuff
[62:42.90] with
[62:43.02] server
[62:43.24] components
[62:43.60] I
[62:43.84] wrote
[62:44.08] a while
[62:44.38] ago
[62:44.70] about
[62:46.26] universe
[62:46.60] router
[62:46.78] a lot
[62:47.34] of the
[62:47.48] moves
[62:47.70] that
[62:47.88] remix
[62:48.46] have been
[62:48.72] making
[62:49.18] or react
[62:49.70] router
[62:49.92] people
[62:50.24] use
[62:50.54] are
[62:51.92] I
[62:52.62] like to
[62:52.94] say
[62:53.06] myself
[62:53.40] and Ryan
[62:53.62] Florence
[62:53.86] are often
[62:54.30] actually
[62:54.62] fairly
[62:55.18] on the
[62:55.66] same
[62:55.82] page
[62:56.12] because
[62:56.40] I'm
[62:58.12] working
[62:58.34] on a
[62:58.54] framework
[62:58.76] that
[62:58.94] does
[62:59.06] not
[62:59.22] react
[62:59.54] he's
[62:59.84] working
[63:00.06] on
[63:00.22] a
[63:00.34] framework
[63:00.64] where
[63:00.94] he
[63:01.08] can't
[63:01.32] wait
[63:01.44] for
[63:01.58] react
[63:01.82] it's
[63:02.02] the
[63:02.18] same
[63:02.38] kind
[63:02.64] of
[63:02.80] mental
[63:03.14] thing
[63:03.44] he's
[63:03.74] generally
[63:04.84] speaking
[63:05.26] he's
[63:05.52] trying
[63:05.68] to find
[63:05.92] solutions
[63:06.32] to
[63:06.50] problems
[63:06.80] that
[63:06.94] are
[63:07.04] real
[63:07.28] we
[63:07.76] end
[63:08.02] up
[63:08.14] hitting
[63:08.28] the
[63:08.46] same
[63:08.60] problems
[63:08.96] and
[63:09.16] kind
[63:09.50] of
[63:09.62] solving
[63:10.12] them
[63:10.32] actually
[63:10.56] relatively
[63:11.02] similarly
[63:11.52] so in a
[63:12.20] sense
[63:12.40] if anyone's
[63:13.56] familiar with the work
[63:14.12] with solid start
[63:14.64] it was to make
[63:15.30] it
[63:15.46] router
[63:16.00] agnostic
[63:16.50] I developed
[63:17.78] solid start
[63:18.32] right from the
[63:18.72] beginning
[63:18.94] knowing that
[63:19.48] all the
[63:19.74] functionality
[63:20.20] was going
[63:20.58] to be
[63:20.70] in the
[63:20.88] router
[63:21.12] right
[63:21.92] which is
[63:22.48] basically
[63:22.80] what they're
[63:23.12] doing
[63:23.32] with
[63:23.62] react
[63:24.40] router
[63:24.66] 7
[63:26.68] and pulling
[63:27.44] the stuff
[63:27.74] of remix
[63:28.12] back out
[63:28.54] I think
[63:29.26] once you
[63:29.56] look at
[63:29.84] that
[63:30.00] and then
[63:30.24] you
[63:30.36] kind of
[63:30.66] view
[63:30.80] server
[63:31.10] components
[63:31.44] a slightly
[63:31.78] different
[63:32.04] way
[63:32.30] you start
[63:33.22] seeing
[63:33.50] that
[63:33.72] there
[63:33.90] are
[63:34.20] patterns
[63:34.74] where you
[63:35.06] can
[63:35.20] bridge
[63:35.40] this
[63:35.56] gap
[63:35.74] the
[63:35.96] challenge
[63:36.52] though
[63:36.76] is
[63:37.04] Ryan
[63:41.58] Florence is
[63:42.00] over here
[63:42.32] with us
[63:42.72] in
[63:43.02] isomorphic
[63:43.56] land
[63:43.76] he doesn't
[63:44.26] actually
[63:44.46] like the
[63:44.86] split
[63:45.04] execution
[63:45.52] you can
[63:45.82] tell
[63:46.04] he likes
[63:46.48] elements
[63:47.08] of it
[63:47.40] he wants
[63:47.98] to embrace
[63:48.38] it
[63:48.50] but like
[63:48.76] the way
[63:49.00] that they
[63:49.30] showed
[63:49.60] that demo
[63:50.04] where they're
[63:50.36] using server
[63:50.88] components
[63:51.28] and loaders
[63:51.76] that is
[63:52.42] not here
[63:53.28] that is
[63:53.68] here
[63:54.20] architecturally
[63:55.08] that is
[63:56.04] still over
[63:56.56] here
[63:56.78] that's
[63:57.06] lakes
[63:57.38] is what
[63:57.78] I call
[63:58.10] that
[63:58.30] thing
[63:58.94] it takes
[64:00.00] a
[64:00.18] there's
[64:00.98] a very
[64:01.24] different
[64:01.96] mentality
[64:03.84] that comes
[64:05.04] being
[64:05.56] on this
[64:06.42] side
[64:06.72] so in a
[64:07.68] sense
[64:07.88] yes and
[64:08.98] no
[64:09.20] we will
[64:09.90] see if
[64:10.28] they go
[64:10.52] all the
[64:10.72] way
[64:10.84] over
[64:11.00] but my
[64:11.32] suspicion
[64:12.08] is
[64:12.48] that
[64:12.72] as I
[64:13.82] said
[64:13.94] me and
[64:14.58] Tanner
[64:14.76] on
[64:14.94] almost
[64:15.18] identical
[64:15.62] same
[64:15.92] page
[64:16.18] I think
[64:16.52] Ryan Florence
[64:16.96] is going
[64:17.22] to get
[64:17.38] to the
[64:17.68] almost
[64:18.04] same
[64:18.36] place
[64:18.80] in the
[64:20.56] coming
[64:20.98] months
[64:21.56] I could
[64:21.78] be wrong
[64:22.10] but my
[64:23.30] suspicion
[64:23.60] is they
[64:23.94] will not
[64:24.24] be moving
[64:24.58] all the
[64:24.84] way
[64:24.94] over to
[64:25.20] here
[64:25.42] yeah
[64:33.28] yeah I
[64:33.48] mean
[64:33.64] I think
[64:35.56] when I
[64:36.10] talk
[64:36.42] about
[64:36.76] Astro
[64:37.84] here
[64:38.04] I am
[64:38.36] talking
[64:38.64] about
[64:38.80] view
[64:39.06] transitions
[64:39.52] otherwise
[64:39.84] they're
[64:40.28] they're
[64:40.80] kind of
[64:41.32] more
[64:41.60] on this
[64:42.06] level
[64:42.32] of
[64:42.46] rail
[64:42.58] sides
[64:42.88] when you
[64:43.10] add
[64:43.24] view
[64:43.40] transitions
[64:43.76] the
[64:43.94] problem
[64:44.18] is
[64:44.36] when you
[64:44.88] add
[64:45.04] view
[64:45.22] transitions
[64:45.68] state
[64:46.38] preservation
[64:46.80] becomes
[64:47.48] a
[64:47.64] challenge
[64:47.98] because
[64:48.36] hydration
[64:49.04] timing
[64:49.38] becomes
[64:49.68] awkward
[64:49.92] you
[64:50.10] actually
[64:50.32] need
[64:50.56] to
[64:50.70] re-implement
[64:51.14] the rules
[64:51.52] of
[64:51.66] server
[64:51.84] components
[64:52.24] i.e.
[64:52.52] client
[64:52.74] components
[64:53.08] can only
[64:53.38] run
[64:53.50] on the
[64:53.68] server
[64:53.86] initially
[64:54.20] if you
[64:54.86] don't
[64:55.14] want
[64:55.32] your
[64:55.44] whole
[64:55.56] app
[64:55.76] to
[64:55.88] blow
[64:56.04] up
[64:56.28] either
[64:57.22] that
[64:57.42] or
[64:57.52] they
[64:57.62] have
[64:57.74] to
[64:57.78] be
[64:57.86] isolated
[64:58.58] so
[64:58.80] from
[64:58.98] in a
[64:59.28] sense
[64:59.56] it's
[65:00.96] the same
[65:01.34] set
[65:01.52] of
[65:01.62] trade-offs
[65:01.92] that's
[65:02.08] why
[65:02.18] for
[65:02.38] me
[65:02.62] when I
[65:03.10] talk
[65:03.22] about
[65:03.34] Astro
[65:03.72] and
[65:03.98] Next
[65:04.28] it's
[65:04.58] they're
[65:04.84] basically
[65:05.16] the same
[65:05.52] thing
[65:05.82] one
[65:07.02] yeah
[65:08.18] just
[65:08.46] different
[65:08.92] flavor
[65:21.52] yeah
[65:24.10] just
[65:24.30] catching
[65:24.60] up
[65:24.80] you
[65:24.92] guys
[65:25.18] okay
[65:26.06] I
[65:27.78] actually
[65:27.94] they
[65:28.50] should
[65:28.66] be
[65:28.76] contained
[65:29.00] very
[65:29.26] often
[65:29.62] boundaries
[65:29.92] like
[65:30.08] that's
[65:30.44] what I
[65:30.58] think
[65:30.66] lakes
[65:31.18] kind
[65:31.48] of
[65:31.56] mentality
[65:31.80] I
[65:31.98] think
[65:32.12] there's
[65:32.34] a
[65:32.96] middle
[65:33.16] ground
[65:33.52] I
[65:33.80] think
[65:34.04] that
[65:34.26] I
[65:34.38] can
[65:34.52] show
[65:34.90] you
[65:35.18] guys
[65:35.40] how
[65:35.68] to
[65:36.48] get
[65:36.74] closer
[65:37.46] to
[65:38.48] this
[65:38.94] without
[65:39.42] the
[65:39.88] trade-offs
[65:40.32] of
[65:40.50] lakes
[65:40.80] but
[65:41.68] that's
[65:42.02] it's
[65:42.94] I
[65:44.90] we're yet
[65:45.46] to see
[65:45.72] if the
[65:45.92] value's
[65:46.34] there
[65:46.44] and
[65:46.60] I
[65:46.70] think
[65:46.82] this
[65:46.98] has
[65:47.08] really
[65:47.26] been
[65:47.40] the
[65:47.54] problem
[65:47.80] here
[65:48.06] right
[65:49.18] yeah
[65:50.12] working
[65:50.54] solid
[65:50.80] heavily
[65:51.28] especially
[65:51.96] now that
[65:52.30] I'm not
[65:52.48] working on
[65:52.80] solid
[65:52.96] start
[65:53.16] as much
[65:53.56] I have
[65:54.12] the
[65:54.24] start
[65:54.44] team
[65:54.68] to
[65:54.82] thank
[65:55.00] for
[65:55.14] that
[65:55.40] FYI
[65:56.46] Tanner's
[65:56.88] very
[65:57.18] active
[65:57.52] in
[65:57.64] chat
[65:57.84] here
[65:58.02] but
[65:58.22] most
[65:59.42] recent
[65:59.74] news
[66:00.08] is
[66:00.68] that
[66:00.96] there's
[66:01.14] been
[66:01.28] kind
[66:01.44] of
[66:01.52] a
[66:01.62] merging
[66:01.92] of
[66:02.10] efforts
[66:02.36] between
[66:02.74] solid
[66:03.16] start
[66:03.50] and
[66:04.44] we've
[66:05.62] always
[66:05.80] been
[66:05.92] on the
[66:06.12] same
[66:06.30] page
[66:06.72] and
[66:06.94] since
[66:07.28] the
[66:07.42] naming
[66:07.66] and
[66:07.84] stuff
[66:08.02] and
[66:08.10] we
[66:08.18] always
[66:08.38] knew
[66:08.52] that
[66:08.64] we
[66:08.76] can
[66:08.90] align
[66:09.18] but
[66:09.34] now
[66:09.50] that
[66:09.66] Tanstack
[66:10.10] start
[66:19.18] not
[66:20.20] officially
[66:20.72] officially
[66:21.14] but
[66:21.50] officially
[66:22.04] enough
[66:22.44] that
[66:22.88] I
[66:23.08] expect
[66:23.52] in
[66:23.70] the
[66:23.84] coming
[66:24.08] months
[66:24.54] that
[66:25.12] we're
[66:25.30] going
[66:25.42] to
[66:25.58] end
[66:25.82] up
[66:25.94] in
[66:26.02] a
[66:26.16] zone
[66:26.38] where
[66:26.68] you know
[66:27.56] it might
[66:28.44] take a
[66:28.70] little
[66:28.78] longer
[66:29.06] but
[66:29.16] I'm
[66:29.30] hoping
[66:29.42] to get
[66:29.56] to
[66:29.64] a
[66:29.66] point
[66:30.74] where
[66:31.04] potentially
[66:32.70] we could
[66:33.38] have a
[66:33.60] single
[66:33.80] CLI
[66:34.28] and be
[66:34.52] like
[66:34.66] do you
[66:34.84] want to
[66:35.02] build
[66:35.14] your
[66:35.28] app
[66:35.46] in
[66:35.56] React
[66:35.86] or
[66:36.00] solid
[66:36.28] that
[66:37.64] that's
[66:37.90] long
[66:38.16] term
[66:38.38] but
[66:38.56] you
[66:39.04] know
[66:39.16] the
[66:39.42] router
[66:39.66] is
[66:39.82] going
[66:39.94] to
[66:39.98] come
[66:40.10] along
[66:40.32] but
[66:40.46] what
[66:40.70] I'm
[66:41.06] getting
[66:41.22] at
[66:41.46] is
[66:41.70] we
[66:45.70] are
[66:45.98] very
[66:46.30] very
[66:46.52] much
[66:47.02] aligned
[66:47.34] I'm
[66:47.68] going
[66:47.76] to
[66:47.78] have
[66:47.90] Tanner
[66:48.12] on
[66:48.30] the
[66:48.56] stream
[66:48.78] again
[66:49.12] soon
[66:49.32] he
[66:49.44] wanted
[66:49.56] to
[66:49.62] come
[66:49.72] on
[66:49.84] today
[66:50.00] but
[66:50.18] we
[66:50.44] didn't
[66:50.62] want
[66:50.72] to
[66:50.80] hijack
[66:51.24] this
[66:52.18] topic
[66:52.62] I
[66:56.32] mean
[66:56.48] we're
[66:56.92] already
[66:57.22] on
[66:58.22] technology
[66:58.68] side
[66:59.12] there
[66:59.70] right
[66:59.90] we
[67:00.02] were
[67:00.14] building
[67:00.40] on
[67:00.56] the
[67:00.66] same
[67:00.80] basis
[67:01.22] yeah
[67:02.34] everyone's
[67:03.20] excited
[67:03.46] about
[67:03.68] that
[67:03.88] yeah
[67:04.14] power
[67:07.24] beat
[67:07.62] actually
[67:08.16] and
[67:08.68] the
[67:08.76] environment
[67:09.08] API
[67:09.60] and
[67:09.80] beat
[67:10.02] 6
[67:10.34] and
[67:12.20] power
[67:12.46] of
[67:12.58] nitro
[67:12.92] right
[67:15.78] but
[67:16.44] yes
[67:16.72] mostly
[67:17.12] power
[67:17.38] of
[67:17.52] beat
[67:17.68] right
[67:19.34] like
[67:20.38] I
[67:20.60] it's
[67:21.28] funny
[67:21.42] you guys
[67:22.36] never
[67:22.66] noticed
[67:23.08] that
[67:23.38] they
[67:23.68] were
[67:23.80] both
[67:24.02] start
[67:24.40] like
[67:24.78] this
[67:25.80] is
[67:25.96] this
[67:26.96] this
[67:27.28] has
[67:27.46] always
[67:27.84] been
[67:28.54] like
[67:28.90] the
[67:29.12] long
[67:30.14] long
[67:30.42] long
[67:30.74] term
[67:30.96] plan
[67:31.38] it
[67:33.56] just
[67:33.76] like
[67:34.00] it's
[67:34.26] how
[67:34.44] long
[67:34.76] and
[67:34.98] I've
[67:35.20] got
[67:35.30] other
[67:35.46] stuff
[67:35.60] to
[67:35.68] focus
[67:35.86] on
[67:36.00] because
[67:36.14] solid
[67:36.30] 2.0
[67:36.72] is
[67:36.86] going
[67:36.98] to
[67:37.00] be
[67:37.10] hot
[67:37.36] anyways
[67:37.98] keep
[67:39.04] on
[67:39.16] going
[67:39.36] what
[67:40.72] I'm
[67:41.14] trying
[67:41.54] to
[67:42.30] say
[67:42.52] here
[67:42.88] is
[67:43.46] that
[67:43.78] the
[67:47.00] gap
[67:47.44] is
[67:47.70] still
[67:47.94] there
[67:48.28] like
[67:48.74] nothing's
[67:49.60] fully
[67:49.86] covering
[67:50.26] it
[67:50.42] in a
[67:50.74] completely
[67:51.06] cohesive
[67:51.42] way
[67:51.72] and
[67:51.90] more
[67:52.06] importantly
[67:52.32] when you
[67:52.54] assemble
[67:52.76] these
[67:52.94] things
[67:53.10] together
[67:53.38] things are
[67:53.92] not so
[67:54.24] simple
[67:54.48] anymore
[67:54.82] anymore
[67:54.82] anymore
[67:54.82] it's
[67:56.14] like
[67:56.38] and
[67:56.76] I
[67:57.14] would
[67:57.90] argue
[67:58.24] if
[67:58.48] we're
[67:58.60] actually
[67:58.86] solving
[67:59.20] the
[67:59.38] problems
[67:59.82] I
[68:09.64] know
[68:09.78] there's
[68:09.84] something else
[68:10.20] I should
[68:10.42] say
[68:10.58] yeah
[68:11.14] not
[68:12.42] I can
[68:20.44] solve
[68:20.60] the
[68:20.80] center
[68:21.00] center
[68:21.24] problems
[68:21.62] yet
[68:21.74] probably
[68:22.12] I did
[68:23.02] a talk
[68:23.40] if you
[68:24.36] guys
[68:24.52] know
[68:24.68] me
[68:24.84] you've
[68:25.10] seen
[68:25.20] it
[68:25.32] I'll
[68:25.64] drop
[68:25.96] the
[68:26.12] talk
[68:26.38] in
[68:26.88] chat
[68:27.22] so
[68:27.88] that
[68:28.18] you
[68:28.60] guys
[68:28.88] can
[68:29.20] check
[68:29.50] it
[68:29.60] out
[68:29.72] at
[68:29.84] your
[68:29.96] own
[68:30.12] leisure
[68:30.36] not
[68:30.68] right
[68:30.88] now
[68:31.20] let's
[68:32.84] go
[68:33.04] to
[68:33.20] YouTube
[68:33.66] there
[68:35.32] we
[68:35.42] go
[68:35.72] no
[68:40.38] not
[68:40.68] double
[68:40.98] how did
[68:41.42] I end
[68:41.60] up
[68:41.68] with
[68:41.78] double
[68:42.00] your
[68:42.18] speed
[68:42.44] with
[68:42.60] single
[68:42.80] flight
[68:43.00] mutations
[68:43.38] that's
[68:43.68] not
[68:43.80] what
[68:43.90] I
[68:44.00] clicked
[68:44.22] on
[68:44.50] that's
[68:49.16] funny
[68:49.38] they're
[68:49.64] trying to
[68:49.94] market it
[68:50.22] this was
[68:50.46] a good
[68:50.76] podcast
[68:51.66] too
[68:51.92] but
[68:52.12] people
[68:52.62] haven't
[68:52.96] been
[68:53.18] people
[68:54.98] haven't
[68:55.30] been
[68:55.50] like
[68:56.04] viewing
[68:56.56] this
[68:56.78] video
[68:57.08] or
[68:57.46] nearly
[68:57.96] enough
[68:58.38] I
[68:59.66] talk
[68:59.90] all
[69:00.04] about
[69:00.16] the
[69:00.28] technology
[69:00.64] behind
[69:00.88] single
[69:01.06] flight
[69:01.32] mutations
[69:01.78] and
[69:02.08] the
[69:02.58] development
[69:03.58] there
[69:03.86] whatever
[69:04.34] people
[69:04.64] get
[69:05.46] lost
[69:05.72] on
[69:05.86] the
[69:05.96] technology
[69:06.30] I
[69:06.44] don't
[69:06.54] care
[69:06.68] let's
[69:06.88] go
[69:06.98] here
[69:07.14] okay
[69:07.60] okay
[69:09.06] so
[69:09.48] this
[69:10.20] talk
[69:10.62] this
[69:16.82] talk
[69:17.16] I
[69:19.78] go
[69:20.02] on a
[69:20.38] very
[69:20.54] long
[69:20.80] mission
[69:21.16] trying
[69:22.84] all the
[69:23.96] different
[69:24.10] frameworks
[69:24.38] and this
[69:24.66] is a
[69:24.86] mission
[69:25.20] I
[69:25.34] went
[69:25.46] on
[69:25.56] stream
[69:25.76] so
[69:25.90] I
[69:25.96] don't
[69:26.02] have
[69:26.12] to
[69:26.20] tell
[69:26.32] you
[69:26.42] guys
[69:26.64] and
[69:26.86] we
[69:27.10] already
[69:27.24] did
[69:27.38] a
[69:27.48] live
[69:27.64] stream
[69:27.82] for
[69:27.96] this
[69:28.12] talk
[69:28.38] essentially
[69:28.72] but
[69:29.34] this
[69:29.66] is
[69:29.78] the
[69:29.90] condensed
[69:30.22] version
[69:30.62] at
[69:31.42] the
[69:31.58] end
[69:31.90] I
[69:32.66] built
[69:32.86] a
[69:33.06] site
[69:33.84] with
[69:34.32] quick
[69:34.76] with
[69:35.66] RSCs
[69:36.28] and
[69:36.36] with
[69:36.48] solid
[69:36.66] start
[69:36.94] and
[69:37.88] I
[69:38.06] got
[69:38.22] the
[69:38.52] same
[69:38.70] result
[69:39.02] for
[69:39.40] all
[69:39.58] of
[69:39.70] them
[69:39.88] because
[69:40.30] they
[69:40.64] all
[69:40.82] had
[69:41.00] the
[69:41.14] same
[69:41.32] like
[69:42.44] not
[69:42.68] detail
[69:44.08] features
[69:44.60] but
[69:45.12] they
[69:45.24] all
[69:45.38] had
[69:45.58] similar
[69:46.02] qualities
[69:46.46] they
[69:46.84] were
[69:46.98] all
[69:47.24] small
[69:47.76] they
[69:48.88] were
[69:49.06] all
[69:49.56] quickly
[69:51.44] rendered
[69:51.80] they
[69:52.00] all
[69:52.20] streamed
[69:53.04] I
[69:53.18] believe
[69:53.46] they
[69:54.12] all
[69:54.68] they
[69:56.06] all
[69:56.26] had
[69:56.50] double
[69:56.72] data
[69:57.00] so
[69:58.12] you
[69:58.70] know
[69:58.82] they
[69:58.96] all
[69:59.08] had
[69:59.20] client
[69:59.42] side
[69:59.58] routing
[69:59.92] they
[70:00.58] all
[70:00.78] had
[70:01.00] like
[70:01.24] basically
[70:02.02] even
[70:02.96] though
[70:03.14] the
[70:03.34] ways
[70:03.84] they
[70:04.02] got
[70:04.84] to
[70:05.36] where
[70:05.52] they
[70:05.68] wanted
[70:05.88] to
[70:06.06] be
[70:06.48] was
[70:06.94] different
[70:07.30] they
[70:08.00] all
[70:08.62] and
[70:09.64] you
[70:09.74] know
[70:09.90] they
[70:10.22] all
[70:10.42] attack
[70:11.26] the
[70:11.56] problem
[70:11.88] different
[70:12.20] I
[70:12.68] ended up
[70:12.96] with
[70:13.04] the
[70:13.14] same
[70:13.30] result
[70:13.66] because
[70:14.34] ultimately
[70:14.88] the
[70:15.12] double
[70:15.32] data
[70:15.66] made
[70:16.78] all the
[70:17.26] difference
[70:17.56] and
[70:17.96] that
[70:18.94] was
[70:19.20] inherent
[70:19.52] to
[70:19.68] the
[70:19.76] client
[70:19.94] side
[70:20.12] routing
[70:20.44] basically
[70:22.14] I
[70:23.54] know
[70:23.68] it
[70:23.82] sounds
[70:24.00] dumb
[70:24.22] but
[70:24.42] like
[70:24.66] after
[70:25.30] working
[70:25.68] so
[70:25.96] hard
[70:26.16] the
[70:26.28] last
[70:26.50] few
[70:26.62] years
[70:26.90] to
[70:27.22] just
[70:27.42] look
[70:27.68] at
[70:27.78] and
[70:27.90] be
[70:28.02] like
[70:28.20] yeah
[70:28.84] none
[70:29.22] of
[70:29.36] this
[70:29.70] is
[70:30.44] making
[70:30.84] pushing
[70:31.82] the
[70:32.02] dial
[70:32.30] for
[70:32.54] a lot
[70:32.78] of
[70:32.86] stuff
[70:33.00] like
[70:33.14] don't
[70:33.26] get me
[70:33.42] wrong
[70:33.62] like
[70:37.20] if
[70:37.98] I
[70:38.62] want
[70:39.60] a
[70:39.94] static
[70:40.26] site
[70:40.50] and
[70:40.68] I
[70:40.84] don't
[70:41.18] need
[70:41.32] a
[70:41.40] client
[70:41.56] side
[70:41.70] router
[70:41.96] and
[70:42.76] I'm
[70:42.92] going
[70:43.00] to
[70:43.06] use
[70:43.24] Astro
[70:43.66] or
[70:44.96] even
[70:45.14] quick
[70:45.42] as
[70:45.72] an
[70:45.84] MPA
[70:46.24] of
[70:46.42] something
[70:46.60] much
[70:46.96] more
[70:47.12] interactive
[70:47.52] and
[70:47.70] powerful
[70:48.36] I'm
[70:49.20] going
[70:49.26] to
[70:49.28] get
[70:49.38] great
[70:49.62] results
[70:49.98] for
[70:50.14] it
[70:50.46] but
[70:50.76] the
[70:50.92] second
[70:51.18] that
[70:51.40] I
[70:51.54] try
[70:51.84] and
[70:52.02] cross
[70:52.52] this
[70:52.82] gap
[70:53.26] over
[70:53.52] here
[70:53.80] everybody
[70:54.74] just
[70:55.08] craps
[70:55.40] out
[70:55.54] the
[70:55.70] same
[70:55.94] and
[70:57.32] the
[70:57.80] quick
[70:57.98] guys
[70:58.14] are
[70:58.26] mad
[70:58.42] at
[70:58.50] me
[70:58.60] for
[70:58.76] saying
[70:58.96] this
[70:59.12] they're
[70:59.22] like
[70:59.34] oh
[70:59.50] we're
[70:59.66] getting
[70:59.84] there
[70:59.98] we're
[71:00.10] getting
[71:00.24] there
[71:00.40] and
[71:00.48] I'm
[71:00.56] like
[71:00.66] okay
[71:00.84] sure
[71:01.06] good
[71:02.42] but
[71:03.38] like
[71:03.54] for
[71:03.66] me
[71:03.80] there's
[71:04.02] actually
[71:04.30] I
[71:04.52] started
[71:04.78] realizing
[71:05.06] that
[71:05.22] this
[71:05.36] was
[71:05.48] kind
[71:05.60] of
[71:05.64] a
[71:05.88] fundamental
[71:06.24] problem
[71:06.60] like
[71:06.76] I
[71:07.12] figured
[71:07.46] out
[71:07.64] ways
[71:07.90] to
[71:08.18] solve
[71:08.76] this
[71:09.06] problem
[71:09.48] and
[71:10.24] there's
[71:11.52] ways
[71:11.78] that
[71:11.90] I've
[71:12.06] heard
[71:12.20] from
[71:12.38] MISCO
[71:12.76] on how
[71:13.48] to
[71:13.62] solve
[71:13.80] this
[71:13.94] problem
[71:14.18] but
[71:14.58] the
[71:14.68] truth
[71:14.84] of
[71:14.96] matter
[71:15.14] is
[71:15.38] they're
[71:16.60] they're
[71:17.22] not
[71:17.42] simple
[71:18.28] and
[71:18.64] they're
[71:18.98] not
[71:19.32] I
[71:21.70] don't
[71:22.04] know
[71:22.18] how
[71:22.32] realistic
[71:22.76] they
[71:23.00] are
[71:23.34] yeah
[71:27.22] do you
[71:27.46] want to
[71:27.58] know
[71:27.62] what
[71:27.72] double
[71:27.86] data
[71:28.00] is
[71:28.22] sure
[71:28.42] this
[71:29.04] is
[71:29.14] important
[71:29.50] and
[71:33.78] I
[71:33.92] actually
[71:34.36] have
[71:34.54] it
[71:34.62] in
[71:34.72] this
[71:34.84] talk
[71:35.14] I
[71:37.04] can
[71:37.18] actually
[71:37.32] show
[71:37.52] it
[71:37.70] pretty
[71:39.44] easily
[71:39.70] too
[71:39.90] but
[71:40.04] if
[71:40.54] you've
[71:41.04] ever
[71:41.28] had
[71:41.68] a
[71:41.90] client
[71:42.64] side
[71:42.84] framework
[71:43.18] and
[71:43.62] you
[71:43.74] render
[71:43.98] the
[71:44.14] page
[71:44.46] and
[71:45.20] you
[71:45.36] notice
[71:45.60] this
[71:45.86] like
[71:46.08] next
[71:46.42] data
[71:46.80] tag
[71:47.38] or
[71:47.68] whatever
[71:48.18] Svelte
[71:48.62] kit
[71:48.80] data
[71:49.12] or
[71:49.30] whatever
[71:49.52] tag
[71:49.86] there's
[71:50.64] all
[71:51.16] the
[71:51.34] data
[71:51.54] gets
[71:51.78] sent
[71:51.94] down
[71:52.14] as
[71:52.36] both
[71:52.62] JSON
[71:53.10] and
[71:53.62] on
[71:53.72] the
[71:53.80] page
[71:53.94] like
[71:54.10] if
[71:54.20] I
[71:54.30] go
[71:54.42] to
[71:54.70] like
[71:55.02] do
[71:55.32] I
[71:55.38] have
[71:55.48] a
[71:55.58] solid
[71:55.86] start
[71:56.80] hacker
[71:57.26] news
[71:57.48] perfect
[71:57.92] and
[71:59.04] I
[71:59.28] go
[71:59.48] here
[71:59.72] and
[72:05.14] spot
[72:05.26] the
[72:05.44] differences
[72:05.80] colon
[72:06.58] and
[72:07.22] then
[72:07.34] I
[72:07.46] go
[72:07.68] to
[72:08.42] the
[72:12.30] network
[72:12.74] and
[72:13.22] I
[72:13.34] look at
[72:13.66] the
[72:14.04] document
[72:14.92] let's
[72:15.66] refresh
[72:15.98] the
[72:16.14] page
[72:16.46] and
[72:17.86] I
[72:18.30] look at
[72:19.18] the
[72:19.28] response
[72:19.86] and
[72:22.64] I
[72:22.84] search
[72:23.26] in
[72:23.40] this
[72:23.56] response
[72:24.06] for
[72:24.32] this
[72:24.58] text
[72:25.06] I
[72:26.10] should
[72:26.40] find
[72:26.64] it
[72:26.74] in
[72:26.84] two
[72:26.94] different
[72:27.12] places
[72:27.56] if
[72:28.58] if
[72:29.62] if
[72:30.26] I
[72:30.62] did
[72:30.92] everything
[72:31.46] right
[72:31.80] of course
[72:33.36] I'm not
[72:33.56] finding it
[72:33.94] in both
[72:34.22] places
[72:34.56] right now
[72:35.14] am I
[72:36.42] even
[72:36.56] looking
[72:36.80] the
[72:36.96] right
[72:37.12] thing
[72:37.34] how
[72:37.52] about
[72:37.64] spot
[72:38.08] the
[72:39.90] oh
[72:40.18] it's
[72:40.32] probably
[72:40.52] because
[72:40.74] the
[72:40.90] quotes
[72:41.22] are
[72:41.40] escaped
[72:41.94] dumb
[72:42.34] me
[72:42.54] see
[72:42.72] spot
[72:43.54] the
[72:44.62] what was
[72:46.46] it
[72:46.58] spot
[72:46.98] the
[72:47.50] differences
[72:49.06] is this
[72:49.80] too
[72:50.30] it's
[72:56.74] because
[72:56.86] someone uses
[72:57.30] the same
[72:57.76] thing
[72:58.02] in
[72:58.18] in
[72:58.74] multiple
[72:58.98] places
[72:59.36] let's
[73:02.04] try
[73:02.20] an
[73:02.38] ever
[73:02.62] increasing
[73:04.36] timer
[73:04.80] let's
[73:05.10] try
[73:05.24] this
[73:05.52] I
[73:06.00] just
[73:06.16] we
[73:06.36] just
[73:06.50] got
[73:06.62] to
[73:06.72] find
[73:06.86] a
[73:07.00] phrase
[73:07.24] that
[73:07.46] there
[73:08.38] we
[73:08.46] go
[73:08.62] twice
[73:09.02] one
[73:09.66] time
[73:09.94] in
[73:10.18] this
[73:10.34] blob
[73:10.64] content
[73:11.08] see
[73:11.28] this
[73:11.42] JSON
[73:11.68] and
[73:12.52] then
[73:12.62] if
[73:12.72] I
[73:12.82] go
[73:12.96] up
[73:13.18] to
[73:13.30] the
[73:13.42] other
[73:13.56] place
[73:13.88] you're
[73:14.38] going
[73:14.40] to
[73:14.46] see
[73:14.58] it
[73:14.74] actually
[73:15.20] in
[73:15.32] the
[73:15.40] markup
[73:15.70] in
[73:15.80] the
[73:15.88] HTML
[73:16.24] div
[73:17.14] text
[73:17.60] one
[73:17.92] of
[73:18.02] the
[73:18.22] things
[73:18.72] it
[73:19.58] does
[73:19.82] not
[73:20.10] matter
[73:20.40] the
[73:20.58] technology
[73:21.10] you
[73:21.50] use
[73:21.84] if
[73:22.46] you
[73:22.56] have
[73:22.72] client
[73:23.02] side
[73:23.26] routing
[73:23.58] this
[73:24.32] will
[73:24.50] happen
[73:24.94] pretty
[73:29.74] much
[73:30.04] or
[73:31.10] if
[73:31.22] it
[73:31.34] doesn't
[73:31.68] happen
[73:32.10] you
[73:33.10] potentially
[73:33.70] have
[73:34.44] tearing
[73:35.92] hydration
[73:36.40] issues
[73:36.86] but
[73:37.78] this
[73:38.76] is
[73:38.86] what
[73:38.96] I'm
[73:39.06] talking
[73:39.26] about
[73:39.46] there
[73:40.80] are
[73:41.16] MPA
[73:41.58] frameworks
[73:41.94] like
[73:42.12] quick
[73:42.40] and
[73:43.48] like
[73:44.46] when
[73:44.58] it's
[73:44.70] an
[73:44.80] MPA
[73:45.02] not
[73:45.22] when
[73:45.38] it's
[73:45.54] a
[73:45.66] client
[73:45.86] routed
[73:46.20] and
[73:46.76] Astro
[73:47.34] that
[73:47.54] solve
[73:47.80] this
[73:48.06] because
[73:48.24] there
[73:48.36] are
[73:48.44] ways
[73:48.66] to
[73:48.82] solve
[73:49.02] this
[73:49.36] but
[73:51.60] RSCs
[73:53.46] do
[73:53.60] do
[73:53.60] do
[73:53.60] not
[73:53.76] solve
[73:53.98] this
[73:54.30] yeah
[73:58.68] yeah
[73:59.08] they
[73:59.26] count as
[73:59.68] client
[73:59.96] side
[74:00.10] routing
[74:00.34] but
[74:00.52] like
[74:00.72] I
[74:01.16] think
[74:01.44] that
[74:01.72] if
[74:01.92] you
[74:02.06] just
[74:02.28] take
[74:02.94] something
[74:03.20] that
[74:03.46] would
[74:04.00] be
[74:04.22] an
[74:04.34] MPA
[74:04.72] and
[74:05.46] add
[74:05.98] view
[74:08.16] transition
[74:08.68] API
[74:09.26] like
[74:14.36] it
[74:16.12] is
[74:16.30] client
[74:16.60] side
[74:16.82] routing
[74:17.14] but
[74:17.46] like
[74:17.76] it's
[74:18.88] not
[74:19.16] achieving
[74:20.14] the
[74:20.34] same
[74:20.50] thing
[74:20.68] it's
[74:20.92] it's
[74:21.16] the
[74:21.32] fact
[74:21.60] that
[74:21.84] you
[74:22.18] need
[74:22.50] to
[74:22.88] hydrate
[74:23.24] that
[74:23.42] there
[74:23.64] is
[74:24.00] state
[74:24.74] preservation
[74:25.28] like
[74:26.20] it's
[74:30.84] funny
[74:31.06] because
[74:31.28] like
[74:31.48] if
[74:32.00] I
[74:32.10] took
[74:32.30] HTMX
[74:32.84] or
[74:33.26] took
[74:33.46] Astro
[74:33.88] with
[74:34.72] shared
[74:35.76] preserved
[74:36.08] state
[74:36.44] I
[74:37.20] can
[74:37.42] break
[74:37.68] those
[74:37.98] frameworks
[74:38.32] in
[74:38.56] two
[74:38.82] seconds
[74:39.26] like
[74:41.50] there's
[74:42.44] no
[74:42.64] guard
[74:43.16] rails
[74:43.46] against
[74:43.76] it
[74:44.04] if
[74:46.54] you
[74:46.72] are
[74:46.86] server
[74:47.10] rendering
[74:47.36] and
[74:47.52] expecting
[74:47.82] to
[74:47.98] hydrate
[74:48.30] if
[74:49.32] you
[74:49.60] are
[74:50.04] always
[74:50.44] client
[74:50.76] rendering
[74:51.08] then
[74:51.56] you're
[74:51.72] fine
[74:51.98] but
[74:52.18] like
[74:52.50] essentially
[74:53.30] there
[74:55.04] are
[74:55.26] people
[74:55.82] who
[74:56.06] will
[74:56.24] not
[74:56.50] hit
[74:56.86] the
[74:57.06] problem
[74:57.36] but
[74:57.54] if
[74:57.68] you're
[74:57.78] being
[74:58.00] earnest
[74:58.32] about
[74:58.58] it
[74:58.70] and
[74:58.82] actually
[74:59.14] trying
[74:59.72] to
[74:59.88] solve
[75:00.10] it
[75:00.20] in
[75:00.30] a
[75:00.42] real
[75:00.62] way
[75:00.96] then
[75:01.90] yeah
[75:02.16] I
[75:02.88] guess
[75:03.08] I
[75:03.18] should
[75:03.30] say
[75:03.44] client
[75:03.72] side
[75:03.96] routing
[75:04.24] with
[75:04.48] state
[75:04.74] preservation
[75:05.72] or
[75:06.38] with
[75:06.66] shared
[75:07.28] state
[75:07.64] the
[75:19.32] one
[75:19.70] that's
[75:19.96] slow
[75:20.14] to
[75:20.30] load
[75:20.54] because
[75:25.16] no
[75:25.38] no
[75:25.40] one
[75:25.64] has
[75:25.98] solved
[75:26.26] it
[75:26.56] yeah
[75:34.50] yeah
[75:34.86] and
[75:35.32] if
[75:36.14] you
[75:37.06] take
[75:37.42] a
[75:37.54] page
[75:37.78] like
[75:37.96] this
[75:38.12] hack
[75:38.30] review
[75:38.46] where
[75:38.64] we
[75:38.78] have
[75:38.90] like
[75:39.02] 300
[75:39.30] comments
[75:39.82] or
[75:39.98] 500
[75:40.26] comments
[75:40.78] and
[75:41.18] they're
[75:41.38] nested
[75:41.90] so
[75:42.00] they're
[75:42.20] kind
[75:42.44] of
[75:42.52] a
[75:42.62] pain
[75:42.80] in
[75:42.88] the
[75:42.98] ass
[75:43.20] to
[75:43.42] paginate
[75:44.14] I
[75:45.14] mean
[75:45.26] this
[75:45.44] is
[75:45.54] a
[75:45.64] good
[75:45.76] example
[75:46.08] because
[75:46.30] it
[75:46.42] makes
[75:46.66] it
[75:46.78] hard
[75:46.90] for
[75:47.04] people
[75:47.20] to
[75:47.38] cheat
[75:47.66] but
[75:49.76] it's
[75:50.46] showing
[75:50.78] more
[75:51.18] extreme
[75:51.54] but
[75:51.78] like
[75:52.06] this
[75:52.40] is
[75:52.52] a
[75:52.64] real
[75:52.82] thing
[75:53.12] generally
[75:56.80] yes
[75:57.18] but
[75:57.34] it
[75:57.42] doesn't
[75:57.62] have
[75:57.82] to
[75:58.02] I
[76:07.62] mean
[76:07.82] watch
[76:08.78] my
[76:09.04] talk
[76:09.50] I
[76:10.02] mean
[76:10.16] it's
[76:10.30] right
[76:10.44] here
[76:10.74] but
[76:11.36] the
[76:11.62] short
[76:12.10] of
[76:12.28] it
[76:12.40] was
[76:12.76] every
[76:14.00] framework
[76:14.56] that
[76:14.80] I
[76:14.90] did
[76:15.04] this
[76:15.24] one
[76:15.54] not
[76:16.32] every
[76:16.54] framework
[76:16.76] some
[76:17.02] of
[76:17.10] the
[76:17.18] frameworks
[76:17.48] did
[76:17.70] a
[76:17.94] lot
[76:18.10] worse
[76:18.50] but
[76:20.14] this
[76:21.80] was
[76:21.98] solid
[76:22.22] start
[76:22.58] in
[76:22.98] this
[76:23.12] example
[76:23.48] I
[76:25.36] did
[76:25.92] load
[76:26.08] a
[76:26.20] large
[76:26.42] page
[76:26.66] with
[76:26.80] a
[76:26.92] thousand
[76:27.12] comments
[76:27.52] to be
[76:27.76] fair
[76:27.94] this
[76:28.26] was
[76:28.40] next
[76:28.72] page
[76:29.30] directory
[76:30.78] these
[76:33.10] are
[76:33.26] some
[76:33.48] other
[76:33.68] frameworks
[76:34.06] you
[76:34.22] guys
[76:34.38] may
[76:34.52] know
[76:34.80] this
[76:37.62] is
[76:37.78] astro
[76:38.30] this
[76:41.98] is
[76:42.14] react
[76:42.40] server
[76:42.66] components
[76:43.24] this
[76:44.58] is
[76:44.74] quick
[76:45.08] this
[76:46.08] is
[76:46.24] quick
[76:46.52] when
[76:46.82] I
[76:46.92] add
[76:47.08] the
[76:47.20] client
[76:47.44] side
[76:47.66] routing
[76:47.92] back
[76:48.24] in
[76:48.48] like
[76:49.68] I'm
[76:49.82] not
[76:49.94] going
[76:50.04] to
[76:50.12] squabble
[76:50.48] over
[76:50.68] a
[76:50.86] couple
[76:51.06] ones
[76:51.46] and
[76:51.64] twos
[76:52.02] and
[76:52.20] threes
[76:52.54] like
[76:52.74] within
[76:52.94] plus
[76:53.28] or
[76:53.40] minus
[76:53.56] five
[76:53.80] we're
[76:53.92] not
[76:54.02] going
[76:54.10] to
[76:54.12] make
[76:54.22] a
[76:54.28] big
[76:54.38] deal
[76:54.54] over
[76:54.72] but
[76:55.22] my
[76:55.38] point
[76:55.68] is
[76:56.12] what
[77:03.10] I'm
[77:03.18] getting at
[77:03.42] is
[77:03.50] these
[77:03.72] are
[77:03.90] partial
[77:04.28] hydrated
[77:04.66] solutions
[77:05.34] the
[77:07.32] cost
[77:08.00] isn't
[77:08.44] necessarily
[77:09.28] the
[77:09.96] execution
[77:10.52] this
[77:11.12] quick
[77:11.92] was
[77:12.10] actually
[77:12.32] the
[77:12.52] one
[77:12.68] that
[77:12.82] helped
[77:12.96] me
[77:13.06] here
[77:13.18] because
[77:13.36] quick
[77:13.70] does
[77:13.90] not
[77:14.12] execute
[77:14.60] any
[77:14.92] code
[77:15.24] it
[77:15.38] does
[77:15.50] not
[77:16.20] hydrate
[77:16.70] so
[77:18.48] to
[77:18.86] make
[77:19.16] this
[77:19.54] much
[77:19.88] of
[77:20.08] a
[77:20.22] difference
[77:20.62] is
[77:21.56] basically
[77:23.28] saying
[77:23.66] that
[77:23.94] yeah
[77:24.80] this
[77:25.00] is
[77:25.10] a
[77:25.16] simple
[77:25.32] page
[77:25.60] bigger
[77:26.14] page
[77:26.42] this
[77:26.62] is
[77:26.80] a
[77:27.04] bigger
[77:27.52] concern
[77:27.80] but
[77:27.94] quick
[77:28.72] hydration
[77:29.46] cost
[77:29.86] is
[77:30.08] not
[77:30.74] like
[77:30.96] it
[77:31.82] doesn't
[77:32.52] scale
[77:32.86] it
[77:33.06] is
[77:33.20] zero
[77:33.62] you
[77:34.40] you
[77:34.42] know
[77:34.52] what
[77:34.62] I
[77:34.66] mean
[77:34.82] like
[77:35.08] anyways
[77:44.40] yeah
[77:47.76] I'll
[77:48.22] keep
[77:48.36] this
[77:48.52] open
[77:48.74] because
[77:48.96] it's
[77:49.08] a good
[77:49.26] reference
[77:49.58] for the
[77:49.86] rest
[77:50.04] of
[77:50.16] the
[77:50.36] stuff
[77:50.60] I'm
[77:50.96] talking
[77:51.28] about
[77:51.54] here
[77:51.72] but
[77:51.90] what
[77:52.66] I'm
[77:52.80] trying
[77:53.08] to
[77:53.20] get
[77:53.34] at
[77:53.54] is
[77:53.82] we
[77:55.34] I've
[77:56.34] talked
[77:56.48] about
[77:56.62] this
[77:56.76] part
[77:57.16] where
[77:57.26] the
[77:57.38] year
[77:57.78] we
[77:57.98] were
[77:58.34] having
[77:58.56] a
[77:58.76] really
[77:58.98] hard
[77:59.34] time
[77:59.80] measuring
[78:00.88] the
[78:01.08] impact
[78:01.48] of
[78:01.62] any
[78:01.82] of
[78:02.12] these
[78:03.28] updates
[78:03.76] or
[78:04.16] changes
[78:04.46] like
[78:04.72] making
[78:05.30] heads
[78:05.56] or
[78:05.70] tails
[78:05.92] of
[78:06.08] them
[78:06.30] right
[78:09.18] it's
[78:11.66] all
[78:11.74] good
[78:11.90] dev
[78:12.14] no
[78:20.34] no
[78:20.78] quick
[78:21.34] as an
[78:21.74] MPA
[78:22.14] solved
[78:22.72] it
[78:22.92] but
[78:23.50] once
[78:23.80] you
[78:24.08] like
[78:24.44] like
[78:25.32] Astro
[78:25.72] as an
[78:25.94] MPA
[78:26.20] solved
[78:26.54] it
[78:26.68] but
[78:26.80] once
[78:27.02] you
[78:27.46] add
[78:27.62] client
[78:27.86] side
[78:28.08] routing
[78:28.38] you're
[78:29.52] back
[78:30.00] again
[78:30.30] because
[78:30.80] there's
[78:31.90] the
[78:32.02] potential
[78:32.52] of
[78:33.42] something
[78:33.70] in
[78:33.86] the
[78:33.98] future
[78:34.36] needing
[78:36.72] that
[78:36.98] data
[78:37.28] and
[78:37.50] you
[78:37.62] can't
[78:37.82] be
[78:37.94] so
[78:38.14] restrictive
[78:38.58] on
[78:38.80] it
[78:38.92] watch
[78:39.40] my
[78:39.58] talk
[78:39.82] honestly
[78:40.14] it's
[78:40.42] I'm
[78:40.94] not
[78:41.08] going
[78:41.16] to
[78:41.22] do
[78:41.30] the
[78:41.40] whole
[78:41.52] talk
[78:41.78] content
[78:42.08] again
[78:42.40] it's
[78:43.70] but
[78:45.30] yeah
[78:45.66] yes
[78:51.78] there's
[78:52.02] a
[78:52.12] pattern
[78:52.32] next
[78:52.56] yeah
[78:52.68] that's
[78:53.02] called
[78:53.20] that's
[78:53.78] like
[78:53.92] a
[78:54.04] form
[78:54.20] of
[78:54.32] streaming
[78:54.60] but
[78:55.44] the
[78:55.58] thing
[78:55.72] is
[78:55.92] that's
[78:57.40] sending
[78:57.84] the
[78:58.22] data
[78:58.82] over
[78:59.12] the
[78:59.30] wire
[78:59.52] too
[78:59.98] right
[79:00.34] like
[79:00.80] that's
[79:00.96] what
[79:01.04] streaming
[79:01.26] does
[79:01.58] right
[79:02.34] you can
[79:02.68] do it
[79:02.88] without
[79:03.08] server
[79:03.34] components
[79:03.68] too
[79:03.88] by the
[79:04.14] way
[79:04.30] just
[79:04.60] in case
[79:04.92] anyone's
[79:05.28] wondering
[79:05.50] and in fact
[79:06.50] you can do it
[79:06.94] in most
[79:07.24] frameworks
[79:07.56] now
[79:07.86] not through
[79:09.64] server components
[79:10.36] but you can
[79:10.82] send the
[79:11.28] data
[79:11.56] yeah
[79:13.24] I was trying
[79:26.20] a little bit
[79:26.76] a while ago
[79:27.72] we had a
[79:28.12] whole stream
[79:28.48] where I was
[79:28.88] talking about
[79:29.26] this
[79:29.46] probably the
[79:30.20] original
[79:30.50] facing
[79:31.00] existential
[79:31.36] crisis
[79:31.68] where I
[79:32.16] started
[79:32.32] trying to
[79:32.82] hack
[79:33.08] stuff
[79:33.36] into
[79:33.70] data
[79:34.04] urls
[79:34.70] and
[79:35.18] trying
[79:35.62] to
[79:35.82] I
[79:36.38] did
[79:36.66] one
[79:37.06] thing
[79:37.22] where I
[79:37.44] used
[79:37.64] HTTP
[79:37.96] push
[79:39.94] to
[79:40.50] sideload
[79:41.38] it
[79:41.48] and I
[79:41.72] actually
[79:41.90] got a
[79:42.20] performance
[79:42.56] gain
[79:42.80] it was
[79:42.98] pretty
[79:43.18] cool
[79:43.34] I got
[79:43.54] into
[79:43.66] the
[79:43.84] 70s
[79:44.32] but it
[79:45.64] wasn't
[79:45.84] very
[79:46.06] practical
[79:46.64] like
[79:47.16] I
[79:52.14] think
[79:52.60] I'm
[79:56.12] not
[79:56.32] taking
[79:56.66] this
[79:56.92] as
[79:57.12] like
[79:58.26] I'm
[79:59.54] not
[79:59.66] taking
[79:59.82] this
[79:59.96] like
[80:00.12] oh
[80:00.22] we
[80:00.36] have
[80:00.52] to
[80:00.64] sell
[80:00.74] the
[80:00.82] problem
[80:00.92] I
[80:01.04] think
[80:01.24] we
[80:01.58] have
[80:01.74] to
[80:01.84] put
[80:01.96] in
[80:02.06] merit
[80:02.24] not
[80:02.58] all
[80:02.96] pages
[80:03.42] are
[80:03.56] as
[80:03.72] data
[80:04.18] heavy
[80:04.48] and
[80:05.34] I
[80:05.46] think
[80:05.70] that
[80:06.40] but I
[80:07.24] do
[80:07.36] think
[80:07.64] that
[80:07.88] it's
[80:08.10] kind
[80:08.24] of
[80:08.30] like
[80:08.44] when
[80:08.58] people
[80:08.92] benchmark
[80:09.30] reactivity
[80:09.84] like
[80:10.20] signals
[80:10.72] benchmarks
[80:11.18] they're
[80:11.98] great
[80:12.20] for
[80:12.46] library
[80:13.18] authors
[80:13.44] being
[80:13.58] like
[80:13.72] oh
[80:13.94] yeah
[80:14.14] I
[80:14.22] got
[80:14.36] this
[80:14.54] like
[80:14.72] graph
[80:15.16] shape
[80:15.40] faster
[80:15.88] but
[80:16.50] they
[80:16.74] don't
[80:16.96] translate
[80:17.40] to your
[80:17.80] real
[80:17.96] app
[80:18.20] basically
[80:18.72] at all
[80:19.04] people
[80:19.28] who
[80:19.46] like
[80:19.64] to
[80:19.74] push
[80:20.18] signals
[80:20.86] benchmark
[80:21.16] it's
[80:21.42] like
[80:21.58] put
[80:22.00] some
[80:22.62] load
[80:22.84] on
[80:22.96] the
[80:23.06] end
[80:23.16] of
[80:23.26] it
[80:23.34] it's
[80:23.46] funny
[80:23.62] because
[80:23.80] Dan
[80:24.64] Abramoff
[80:25.10] made
[80:25.34] the
[80:25.50] same
[80:25.92] comment
[80:26.32] about
[80:26.80] JS
[80:27.52] framework
[80:27.76] benchmark
[80:28.10] and
[80:28.34] I'm
[80:28.42] like
[80:28.54] no
[80:28.68] it's
[80:28.96] not
[80:29.06] the
[80:29.20] same
[80:29.32] because
[80:29.52] there
[80:29.64] is
[80:29.76] a
[80:29.84] load
[80:29.96] you
[80:30.10] are
[80:41.18] so
[80:42.36] if
[80:43.16] they're
[80:43.38] going
[80:43.52] to
[80:43.58] be
[80:43.70] and
[80:44.04] there
[80:44.18] are
[80:44.36] places
[80:44.76] where
[80:44.96] you
[80:45.10] can
[80:45.24] make
[80:45.52] improvements
[80:45.88] around
[80:46.14] those
[80:46.32] expensive
[80:46.62] things
[80:46.86] and
[80:46.98] improve
[80:47.18] performance
[80:47.60] but
[80:48.04] what I'm
[80:48.48] getting at
[80:48.88] is a
[80:49.10] diminishing
[80:49.54] return
[80:50.32] when
[80:51.22] the
[80:52.14] expensive
[80:52.56] thing
[80:52.80] isn't
[80:53.00] addressed
[80:53.30] so
[80:53.76] like
[80:54.08] from
[80:54.54] my
[80:55.02] perspective
[80:55.54] I
[80:57.68] just
[80:57.90] stepped
[80:58.10] back
[80:58.44] and
[80:58.88] I
[80:58.98] was
[80:59.10] like
[80:59.26] okay
[80:59.48] we're
[81:00.42] not
[81:00.56] solving
[81:00.82] this
[81:01.00] right
[81:01.16] now
[81:01.36] so
[81:02.40] what
[81:04.14] should
[81:04.34] we
[81:04.44] be
[81:04.62] focusing
[81:04.92] on
[81:05.30] right
[81:07.00] like
[81:08.40] that's
[81:09.28] that's
[81:09.54] the
[81:09.68] question
[81:10.14] because
[81:10.44] like
[81:10.84] as I
[81:11.06] said
[81:11.20] we've
[81:11.68] been
[81:11.78] having
[81:12.00] a
[81:12.18] really
[81:12.30] hard
[81:12.58] time
[81:13.00] right
[81:13.64] that
[81:13.88] was
[81:14.10] this
[81:14.32] I
[81:15.26] don't
[81:15.40] know
[81:15.50] if
[81:15.58] you
[81:15.64] guys
[81:15.74] saw
[81:15.86] that
[81:16.02] SSR
[81:16.90] benchmark
[81:17.24] from
[81:17.44] Fastify
[81:17.86] like
[81:19.76] people
[81:20.98] have been
[81:21.16] trying to
[81:21.38] like
[81:21.50] show
[81:21.82] off
[81:22.06] the
[81:22.14] different
[81:22.32] server
[81:22.54] things
[81:22.90] and
[81:23.10] trying
[81:23.76] to
[81:23.88] come
[81:24.04] up
[81:24.20] with
[81:24.46] a
[81:24.66] comparison
[81:25.12] has
[81:25.34] been
[81:25.48] kind
[81:25.68] of
[81:25.76] a
[81:25.92] mess
[81:26.22] you
[81:28.30] know
[81:28.50] like
[81:29.14] the
[81:32.66] Fastify
[81:33.12] one
[81:33.32] was
[81:33.48] actually
[81:33.76] pretty
[81:34.08] funny
[81:34.62] because
[81:35.02] literally
[81:35.68] every
[81:36.12] framework
[81:36.62] went
[81:37.26] a few
[81:37.68] days
[81:37.92] where
[81:38.06] they
[81:38.16] were
[81:38.28] the
[81:38.42] fastest
[81:38.74] and
[81:39.76] then
[81:39.96] something
[81:40.36] got
[81:40.52] changed
[81:40.88] and
[81:41.12] then
[81:41.26] the
[81:41.66] other
[81:41.80] one
[81:41.92] got
[81:42.02] the
[81:42.12] fastest
[81:42.40] except
[81:44.66] React
[81:45.06] obviously
[81:45.42] React
[81:45.68] was
[81:45.80] never
[81:45.94] the
[81:46.08] fastest
[81:46.36] but
[81:46.66] like
[81:47.36] every
[81:47.90] other
[81:48.08] framework
[81:48.36] literally
[81:48.66] went
[81:48.86] through
[81:49.00] cycle
[81:49.28] it
[81:49.46] was
[81:49.60] solid
[81:49.94] and
[81:50.26] then
[81:50.36] it
[81:50.44] was
[81:50.56] felt
[81:50.80] and
[81:51.26] then
[81:51.36] it
[81:51.42] was
[81:51.54] view
[81:51.74] and
[81:52.70] I
[81:53.44] did
[81:54.24] a
[81:54.36] stream
[81:54.50] about
[81:54.72] this
[81:54.92] a
[81:55.08] while
[81:55.24] back
[81:55.46] I'm
[81:55.60] going
[81:55.66] to
[81:55.70] take
[81:55.86] a
[81:55.96] look
[81:56.10] at
[81:56.26] it
[81:56.72] I
[81:58.64] don't
[81:58.98] remember
[81:59.20] which
[81:59.38] one
[81:59.52] exactly
[81:59.86] maybe
[82:00.26] I
[82:00.40] should
[82:00.78] find
[82:01.08] it
[82:01.22] for
[82:01.44] someone
[82:01.68] but
[82:02.22] where
[82:02.66] I
[82:02.76] actually
[82:02.98] went
[82:03.14] in
[82:03.26] detail
[82:03.62] about
[82:03.90] the
[82:04.04] differences
[82:04.30] between
[82:04.54] the
[82:04.64] different
[82:04.84] versions
[82:05.12] of
[82:05.22] the
[82:05.28] implementation
[82:05.60] and
[82:06.06] the
[82:06.32] tricks
[82:06.86] and
[82:07.14] different
[82:07.44] approaches
[82:08.22] they
[82:08.42] did
[82:08.60] to
[82:09.00] try
[82:09.18] and
[82:09.28] find
[82:09.50] the
[82:09.66] fairness
[82:09.96] but
[82:11.16] the
[82:11.32] initial
[82:11.60] results
[82:12.04] were
[82:12.20] all
[82:12.40] over
[82:12.58] the
[82:12.72] map
[82:13.00] and
[82:15.16] yeah
[82:16.12] this
[82:16.42] is
[82:16.64] we're
[82:17.10] going
[82:17.22] to
[82:17.32] a
[82:17.42] part
[82:17.58] where
[82:17.76] there
[82:17.88] isn't
[82:18.10] like
[82:18.28] it's
[82:18.70] not
[82:18.88] that
[82:19.10] clear
[82:19.50] I
[82:19.84] base
[82:21.42] my
[82:21.76] work
[82:22.16] off
[82:22.34] empirical
[82:22.82] stuff
[82:23.76] so
[82:24.20] it's
[82:24.34] really
[82:24.52] hard
[82:24.86] when
[82:25.06] you
[82:25.32] can't
[82:26.84] focus
[82:28.04] in
[82:28.36] on
[82:28.54] what
[82:28.98] you're
[82:29.28] actually
[82:29.90] improving
[82:30.90] yeah
[82:44.30] I'm
[82:44.40] just
[82:44.52] reading
[82:44.68] chat
[82:44.92] here
[82:45.08] a bit
[82:45.30] can
[82:46.14] we
[82:46.38] not
[82:46.66] just
[82:47.14] send
[82:47.56] the
[82:47.70] data
[82:47.90] for
[82:48.06] that
[82:48.18] aren't
[82:48.34] going
[82:48.46] to
[82:48.46] be
[82:48.56] hydrated
[82:48.86] as
[82:49.06] long
[82:49.24] as
[82:49.34] we
[82:49.44] integrate
[82:49.68] the
[82:49.80] fit
[82:49.94] room
[82:50.02] okay
[82:50.46] I
[82:51.08] don't
[82:51.80] know
[82:51.90] if
[82:51.96] I
[82:52.00] want
[82:52.10] to
[82:52.14] get
[82:52.24] into
[82:52.38] this
[82:52.56] the
[82:52.88] problem
[82:53.14] that
[82:53.32] RSCs
[82:54.00] have
[82:54.26] is
[82:54.46] you
[82:55.40] have
[82:55.54] to
[82:55.68] serialize
[82:56.32] the
[82:56.88] props
[82:57.32] so
[82:58.16] because
[82:59.50] there's
[83:00.06] the
[83:00.44] you're
[83:00.84] on
[83:01.02] the
[83:01.16] server
[83:01.36] right
[83:01.86] and
[83:03.00] you
[83:04.62] could
[83:05.38] not
[83:06.50] render
[83:06.84] something
[83:07.26] initially
[83:07.62] on
[83:07.84] the
[83:07.96] server
[83:08.24] or
[83:09.68] you
[83:09.80] could
[83:09.92] render
[83:10.12] something
[83:10.36] on
[83:10.48] the
[83:10.56] server
[83:10.78] but
[83:11.18] you
[83:11.32] could
[83:11.50] conditionally
[83:12.16] not
[83:12.42] render
[83:12.70] it
[83:12.90] initially
[83:13.26] on
[83:13.44] the
[83:13.54] client
[83:13.92] is
[83:14.58] the
[83:14.66] way
[83:14.74] to
[83:14.82] put
[83:14.94] it
[83:15.04] so
[83:15.16] like
[83:15.34] picture
[83:15.60] your
[83:15.78] server
[83:16.00] component
[83:16.40] has
[83:17.20] a
[83:17.30] bunch
[83:17.46] of
[83:17.68] markup
[83:18.92] or
[83:19.06] something
[83:19.36] right
[83:19.58] like
[83:20.14] solid
[83:21.52] here
[83:23.72] let's
[83:24.48] pick
[83:24.74] something
[83:24.96] here
[83:25.18] see
[83:25.36] how
[83:25.50] I
[83:25.96] can
[83:26.08] toggle
[83:26.32] the
[83:26.46] visibility
[83:26.78] right
[83:27.14] you
[83:27.82] could
[83:27.94] pretend
[83:28.38] that
[83:28.78] this
[83:28.92] toggles
[83:29.28] a
[83:29.40] client
[83:29.62] component
[83:29.98] that
[83:30.24] does
[83:30.38] the
[83:30.48] toggling
[83:30.84] but
[83:31.96] inside
[83:32.56] here
[83:32.86] is
[83:33.12] server
[83:33.38] rendered
[83:33.60] markup
[83:33.98] okay
[83:34.30] now
[83:35.22] if
[83:37.24] this is
[83:39.10] closed
[83:39.54] and I
[83:40.88] send it
[83:41.78] to the
[83:43.22] client
[83:43.60] I'm still
[83:44.64] sending
[83:45.12] this
[83:45.70] because
[83:46.52] if the
[83:47.70] page rendered
[83:48.22] like this
[83:48.76] and then
[83:49.34] I open
[83:49.84] it
[83:49.94] I'm not
[83:50.18] going to
[83:50.30] go back
[83:50.54] to the
[83:50.76] server
[83:50.94] and
[83:51.10] fetch
[83:51.28] it
[83:51.38] again
[83:51.58] so
[83:52.94] I
[83:53.62] still
[83:53.94] render
[83:54.44] everything
[83:55.12] with
[83:55.60] the
[83:55.72] server
[83:55.88] components
[83:56.30] you
[83:56.82] know
[83:57.02] if
[83:57.82] the
[83:58.26] server
[83:58.48] component
[83:58.80] decision
[83:59.12] points
[83:59.54] point
[84:00.20] me
[84:00.32] a
[84:00.40] certain
[84:00.48] way
[84:00.70] even
[84:01.10] if
[84:01.20] the
[84:01.30] client
[84:01.64] could
[84:02.16] or
[84:02.30] couldn't
[84:02.50] show
[84:02.66] and I'm
[84:02.84] still
[84:02.96] going to
[84:03.10] render
[84:03.26] it
[84:03.46] now
[84:04.22] that
[84:04.90] means
[84:05.14] that
[84:05.34] coming
[84:05.74] into
[84:05.90] the
[84:06.02] client
[84:06.20] components
[84:06.50] I
[84:06.70] have
[84:06.88] to
[84:06.98] render
[84:07.18] the
[84:07.34] prop
[84:07.58] which
[84:07.84] means
[84:07.98] that
[84:09.00] if
[84:09.22] it's
[84:09.40] visible
[84:09.94] on
[84:10.96] the
[84:11.08] page
[84:11.40] like
[84:11.70] this
[84:11.96] I
[84:12.34] am
[84:12.46] rendering
[84:12.68] as
[84:12.84] HTML
[84:13.18] and
[84:13.92] as
[84:14.32] JSX
[84:14.82] JSX
[84:15.32] on
[84:21.58] DIFF
[84:21.90] when
[84:22.38] different
[84:22.92] stuff
[84:23.34] comes
[84:23.54] in
[84:23.64] the
[84:23.70] client
[84:23.84] server
[84:23.98] they
[84:24.14] actually
[84:24.38] want
[84:24.70] the
[84:24.90] whole
[84:25.34] data
[84:25.78] tree
[84:26.04] in
[84:27.18] the
[84:27.34] client
[84:27.66] so
[84:27.80] they
[84:27.94] literally
[84:28.40] just
[84:28.62] send
[84:28.78] everything
[84:29.02] twice
[84:29.38] and
[84:30.74] some
[84:31.22] as
[84:31.66] a
[84:32.52] God
[84:35.74] parasocial
[84:37.34] mentioned
[84:38.68] earlier
[84:39.02] JLARC
[84:39.42] I forget
[84:39.66] what account
[84:40.16] you're
[84:40.34] working
[84:40.56] under
[84:40.76] today
[84:41.08] I
[84:44.28] hope
[84:44.66] that
[84:44.80] explanation
[84:45.28] explains
[84:45.76] it
[84:46.24] I
[84:52.70] mean
[84:52.92] I'm
[84:54.04] okay
[84:54.38] if
[84:54.60] we're
[84:54.74] talking
[84:55.06] about
[84:55.36] a
[84:55.50] specific
[84:55.90] technology
[84:56.66] that's
[84:57.34] React
[84:57.66] focused
[84:57.98] my
[84:58.22] problem
[84:58.66] is
[84:59.30] not
[85:01.50] looking
[85:02.80] at
[85:03.16] it
[85:03.64] that
[85:04.00] React
[85:04.74] server
[85:04.98] components
[85:05.50] and
[85:06.02] Astro
[85:06.32] Islands
[85:06.58] are the
[85:06.86] same
[85:07.02] thing
[85:07.24] we
[85:08.56] have
[85:08.76] to
[85:08.92] look
[85:09.14] at
[85:09.24] it
[85:09.34] in
[85:09.52] that
[85:09.74] kind
[85:10.04] of
[85:10.34] scope
[85:11.78] there
[85:12.46] there's
[85:12.78] difference
[85:13.06] in
[85:13.16] implementation
[85:13.68] but
[85:14.54] fundamentally
[85:15.36] what
[85:15.60] they're
[85:15.70] trying
[85:15.82] accomplished
[85:16.28] principle
[85:16.72] wise
[85:17.16] is
[85:17.28] very
[85:17.46] similar
[85:17.78] I
[85:18.38] think
[85:18.64] implementation
[85:19.50] matters
[85:20.24] this
[85:21.42] is
[85:21.58] an
[85:22.38] important
[85:23.02] thing
[85:23.34] that
[85:23.84] I
[85:23.94] think
[85:24.06] people
[85:24.32] have
[85:24.54] to
[85:24.66] understand
[85:25.18] though
[85:26.00] is
[85:26.32] because
[85:26.66] there's
[85:28.36] quotes
[85:28.94] you know
[85:30.32] I'm going
[85:31.48] to switch
[85:32.28] to
[85:32.66] this view
[85:35.12] for a
[85:35.36] minute
[85:35.48] there are
[85:36.66] quotes
[85:37.16] of me
[85:37.68] on the
[85:37.94] web
[85:38.80] you know
[85:39.82] like on
[85:40.24] Twitter
[85:40.48] and stuff
[85:40.92] saying
[85:41.20] things
[85:41.50] along the
[85:41.70] lines
[85:41.86] like
[85:42.00] the
[85:42.70] future
[85:43.02] React
[85:43.46] is
[85:43.64] bright
[85:43.96] or
[85:44.14] something
[85:44.46] a couple
[85:45.20] years
[85:45.42] ago
[85:45.66] and
[85:46.38] I
[85:46.62] believe
[85:47.10] that
[85:47.36] because
[85:47.62] I'm
[85:47.86] a
[85:48.08] pragmatist
[85:48.62] right
[85:48.90] React
[85:49.72] is
[85:52.34] a
[85:52.92] framework
[85:53.16] that is
[85:53.42] popular
[85:53.82] it's a
[85:54.68] framework
[85:54.96] where
[85:55.28] its
[85:55.94] maintainers
[85:56.42] are doing
[85:56.88] the right
[85:57.90] things
[85:58.26] they are
[85:59.14] improving
[85:59.98] it in
[86:00.36] meaningful
[86:00.66] ways
[86:01.12] they're
[86:02.38] making it
[86:02.88] easier
[86:03.08] to use
[86:03.60] so how
[86:05.96] and it's
[86:06.72] the most
[86:06.90] popular
[86:07.12] solution
[86:07.42] out there
[86:07.68] so how
[86:08.08] can the
[86:08.44] future
[86:08.62] of React
[86:09.00] be
[86:09.24] anything
[86:09.52] but
[86:09.70] bright
[86:09.92] but
[86:12.32] if I
[86:16.30] close
[86:16.50] my
[86:16.66] eyes
[86:17.00] and
[86:17.74] think
[86:17.94] about
[86:18.12] the
[86:18.30] best
[86:18.52] possible
[86:18.96] solution
[86:19.32] for the
[86:19.60] future
[86:19.82] of the
[86:20.00] web
[86:20.24] it's
[86:20.74] not
[86:20.92] React
[86:21.32] I think
[86:23.18] that's
[86:23.38] kind of
[86:23.62] understood
[86:24.02] now
[86:24.44] there's
[86:26.66] a reason
[86:27.02] why
[86:27.24] no
[86:27.50] new
[86:27.82] frameworks
[86:28.16] look
[86:28.48] like
[86:28.74] React
[86:29.14] there's
[86:30.88] you know
[86:31.60] there's
[86:32.38] like
[86:32.68] yes
[86:33.44] when we're
[86:33.94] talking
[86:34.12] about
[86:34.30] people
[86:34.60] we're
[86:34.82] talking
[86:35.06] about
[86:35.34] training
[86:36.24] and
[86:36.64] education
[86:37.22] and
[86:37.78] ecosystem
[86:38.56] and
[86:39.22] people
[86:40.28] and
[86:40.82] jobs
[86:41.34] and
[86:41.52] hiring
[86:41.90] React
[86:42.62] is a
[86:42.82] no-brainer
[86:43.22] it has
[86:43.92] a very
[86:44.22] bright
[86:44.50] future
[86:44.86] but
[86:46.56] if I'm
[86:47.04] thinking
[86:47.34] empirically
[86:48.04] of the
[86:48.46] best
[86:48.84] possible
[86:49.24] solution
[86:49.68] that I
[86:50.38] could
[86:50.48] have
[86:50.58] for
[86:50.68] the
[86:50.74] web
[86:50.94] something
[86:53.94] like
[86:54.16] React
[86:54.42] is
[86:54.58] not
[86:54.92] part
[86:55.48] of
[86:55.58] it
[86:55.78] so
[87:03.14] yeah
[87:04.34] I mean
[87:04.78] if anyone
[87:05.46] wanted to
[87:05.78] know what I
[87:06.10] actually think
[87:07.04] about React
[87:07.44] that's it
[87:07.84] it's
[87:08.86] it's funny
[87:09.90] because Dan
[87:10.26] Abramoff
[87:10.64] often talks
[87:11.40] about evolutionary
[87:12.22] dead ends
[87:13.04] he like
[87:13.42] he
[87:13.70] I don't have
[87:14.70] those tweets
[87:15.00] anymore
[87:15.26] because he
[87:15.56] deleted them
[87:16.02] off Twitter
[87:16.42] but for a while
[87:17.44] there he
[87:17.80] was Kevin
[87:18.30] like saying
[87:18.80] oh I don't
[87:19.12] see anything
[87:19.46] interesting
[87:19.82] it's an
[87:20.10] evolutionary
[87:20.46] dead end
[87:20.86] it's
[87:21.06] dead end
[87:21.46] blah blah
[87:21.76] blah
[87:21.88] and it's
[87:22.70] like
[87:22.94] You can say that all you want, you can be the loudest voice saying that, but look what people who create are building. They're not building React.
[87:35.94] Like, don't be wrong, the people who are working on React are building React, and the people who work on React are brilliant.
[87:42.94] It's just, it's this funny situation we find ourselves in, where people are, like, React for a very long time has been in this boat where the next thing will be the fix, right?
[88:00.94] People are like, well, what's up with the performance? And it's like, oh, don't worry, there's server components coming. There's a compiler coming.
[88:09.94] Sure. These are great technologies. Honestly, not enough people are talking about the React compiler.
[88:18.94] Maybe too much discourse about server components, but it doesn't change the, you know, this kind of fundamental fact from where I'm sitting.
[88:31.94] We knew the compiler wasn't going to make React faster. Like, it's fundamental. I think everyone should have understood that, but the takeaway, and I don't even know if the people who said it were actually, like, trying to mislead people.
[88:46.94] I don't think they were, but the takeaway from the community was like, okay, don't worry, we'll wait. React will get there.
[88:53.94] The reality is React is never getting there. It's fine. That, that is perfectly fine. React is exactly what it's meant to be.
[89:08.94] But, you know, this is why it's funny. More over time, I just started not caring as much. I was at NextConf, which is very interesting because they had a bunch of really, there's a couple of really cool innovations that came there.
[89:21.94] I think some of you guys saw that trick with the timeout in terms of canceling promises. The funny thing that when you're working in the space or not working directly in the space, like on the framework, you don't realize it's people come up with tricks like that all the time to solve problems that they create, because you're like, okay, I want to have an abstraction like this.
[89:39.94] The abstraction kind of leaks. How do I pack up the leak in a reasonable way? If you've ever seen how solid to create async does hydration on the client, you know exactly what I'm talking about.
[89:50.94] But the reality is I sat there and I was like, okay, this is cool. Ben is like, does it apply to me? No, because I didn't create that problem in the first place. So I don't have that problem. Like it's hard to get excited about problems you create yourself.
[90:08.94] It's, it's hard to get excited about fixing or improving on a paradigm that already doesn't accomplish what I want it to, to accomplish in the first place.
[90:19.94] So like viewing react on a hole like that is, is kind of where, where I'm sitting.
[90:28.94] Anyway, sorry for that little tangent, had to get off my head. It's going to come back again in a minute. Probably. Um, especially when we talk about the future in AI, which we'll get to in a bit.
[90:46.94] the reacting of the web with the composable pattern. Yeah. I think, I think I've learned a lot from react. And I mean, it's one of those things where like react has changed the way everyone views the web.
[90:51.94] The react has changed the way everyone views the web in a way that is, like, I can't emphasize.
[90:56.94] I mean, it's one of those things where like, react has changed the way everyone views the web in a way that is, like, I can't emphasize.
[91:14.94] It's legacy and can't emphasize like the, the impact. In fact, I did a whole stream on this. Um, it's funny. It's been a couple of years now. Uh, YouTube.
[91:23.94] Uh, where's my, I think it was, I'll see if I can grab it, but it was like the, uh, do, do, do, do, do, not talks past live streams.
[91:32.94] Am I just not seeing it here live. It was, it was, it was basically on, um, react the most prolific JavaScript framework or something along those lines.
[91:44.94] Probably not. Yeah. React. Yeah. React. This one did this two years ago.
[91:53.94] Why is the time so big on there? Sorry. Let's get rid of that.
[91:59.94] Let's get rid of that.
[92:04.94] Let's get rid of that.
[92:07.94] There we go, but it's like, that's great.
[92:25.94] But where do we go to next? Cause we can't just like stay in the same place.
[92:29.94] Uh, what do you got, Dev?
[92:34.94] Is this what you said to Dan Abramoff?
[92:38.94] Oh yeah.
[92:43.94] We found one of his evolutionary dead ends.
[92:45.94] He brought them over to blue sky. I guess it's so commonly in his vocabulary.
[92:50.94] Any solution that doesn't earnestly take advantage of two world split and evolutionary dead end because the two world split is fundamentally the shape of the problem.
[92:58.94] It's a very interesting cause I would say the exact same thing about statefulness being a fundamental shape of the client.
[93:03.94] Any solution that doesn't use signals to be a similar solution dead end.
[93:08.94] Yeah. It's funny, but yeah, it's funny.
[93:11.94] I don't like talking in absolutes like this, generally speaking.
[93:14.94] It's just, um, it's, it's just one of those things and some of it is cause I, I often view the mentality react as a subset of what we do with reactivity.
[93:27.94] Cause in react components are reactive and in signals, like the whole world gets to be reactive.
[93:39.94] Like essentially, like you can view, you know, you can view reacts render is like, um, um, like a memo in effect.
[93:48.94] Anyway.
[93:49.94] I find comforting the fact that react is Java. Okay. Where it is. It's all in front of a crit is often logically.
[94:01.94] So effectively I'm writing react every day. Yeah.
[94:03.94] That's the thing.
[94:05.94] React is a very bright future cause people use react and will continue to use react.
[94:09.94] It's, it's funny cause on this blog post when at the end, the first comment is react is dead.
[94:17.94] That was like someone like the first top comment on this.
[94:20.94] Let me scroll down here.
[94:21.94] It's something along the lines of like, thanks to the article.
[94:25.94] It was interesting.
[94:26.94] I understand that you're somewhat of a public figure and you probably wouldn't mind.
[94:28.94] You wouldn't what you say and how you do it, but I don't have a problem saying as I see it.
[94:32.94] React is dead.
[94:33.94] No, react is not dead.
[94:34.94] Um, and I, I, they go on to say the millions of Africans written in react and those requirements,
[94:40.94] but that was beyond my confidence is starting a new project react.
[94:42.94] No, people will still start new projects and react.
[94:45.94] It's, it's, it's the obvious choice, right?
[94:47.94] There's, there's a bit of like, no one, no one got blamed for what was that stupid thing?
[94:53.94] I can't even remember the saying now.
[94:55.94] I'm just, no one gets fired for choosing.
[94:58.94] I can't even remember the saying now.
[95:04.94] I'm just like blanking IBM.
[95:06.94] Yeah.
[95:07.94] IBM.
[95:08.94] Yeah.
[95:09.94] But the reason that saying is even a saying is because everyone jokes about like Apple coming
[95:13.94] in.
[95:14.94] Right.
[95:15.94] Like that.
[95:28.94] I, I think it's both.
[95:34.94] I think.
[95:35.94] I wasn't going to get into this until we talked about AI though.
[95:38.94] So let me go a little bit further.
[95:39.94] I know I launched into that a bit.
[95:42.94] Um, but I, I think it's both because I think it comes down to language.
[95:47.94] I talked about this.
[95:48.94] If you've ever seen my world beyond components talk from a couple of years ago.
[95:51.94] Um, it's not just the performance I'd sit about react being kind of like this, like subset
[95:58.94] of like the zone of which we can design in, but it, and don't get me wrong.
[96:02.94] Sometimes adhering to limitation is the greatest form of like innovation, but it's like, um, being
[96:12.94] able to describe a problem.
[96:13.94] Svelte 3 on an extreme had a lot less language to the design problem.
[96:20.94] Yeah.
[96:21.94] I'm going to talk about this when we get to compilers.
[96:22.94] Yeah.
[96:23.94] Let, let's continue on.
[96:24.94] Um, we'll let, I, let's finish the server stuff first.
[96:28.94] Only the Sith deal in absolutes.
[96:30.94] Yeah.
[96:31.94] All these evolution, et cetera, sound like growing scope ambition to me.
[96:46.94] If you seek to cover more, of course, you need to take more to count.
[96:49.94] Otherwise you're faced with a dead end.
[96:50.94] Yeah.
[96:51.94] Maybe, maybe, yeah.
[96:52.94] Maybe this is just Dan Abramoff projecting, like where can react go from here?
[96:57.94] Anyways, uh, the, I was saying how this was very difficult to tell what the impact of any
[97:09.94] of these technologies.
[97:10.94] Benchmarks suck.
[97:11.94] Marketing.
[97:12.94] God, don't get me started on marketing.
[97:15.94] Um, one of the biggest ones for me that, that everyone knows me knows.
[97:19.94] One thing is this is, again, this is part of this react world mind view.
[97:24.94] PPR.
[97:25.94] PPR is a real thing.
[97:27.94] Um, and you can technically see why there could be benefits to it, but it's also one
[97:32.94] of those things that is probably like way, like not like kind of overhyped in a sense,
[97:40.94] because like, it's about how fast you can get the static stuff.
[97:44.94] That's already static out there.
[97:45.94] So like, do you serve the static part from a CDN or do you serve it?
[97:50.94] Or do you send a static string to your user from an edge server?
[97:56.94] Don't get me wrong.
[97:57.94] The CDN in theory should be faster, but like, how much are you willing to go through to get
[98:03.94] there?
[98:04.94] The problem is in something like react PPR.
[98:08.94] I saw someone claim that PPR removed loading spinners.
[98:10.94] And I was like, and then it occurred to me that react had no way to say, hold the stream.
[98:15.94] You know how like remixers defer and a solid, we have similar defer stream and react.
[98:21.94] They were basically, they didn't realize they could defer the stream.
[98:23.94] So they use PPR essentially as a way of, you know, it was not deferred because it was all,
[98:29.94] this part was pre-rendered, but essentially it got rid of the loading splinters because
[98:32.94] it deferred the stream, right?
[98:34.94] Like it said, don't send the stream until this content's ready.
[98:37.94] And I, you know, I was annoyed enough one day that I was like, screw it.
[98:44.94] I'm going to take a PPR site and I'm going to take a Netlify edge site and edge stream and
[98:51.94] show that there's basically no difference between them.
[98:54.94] Right?
[98:55.94] I mean, I, Vercel didn't lie.
[98:58.94] Their PPR is faster than their edge.
[99:01.94] Um, it has to do with network hops.
[99:03.94] It has nothing.
[99:04.94] It doesn't necessarily have to do like by using PPR, they circumvented their own infrastructure.
[99:09.94] Um, so yes, it's, it's faster.
[99:13.94] Um, Netlify edge actually has to do a similar kind of hop thing, but they're on the same
[99:17.94] hub.
[99:18.94] Like, um, Dino has it so that their edge and they're like routing things in the same place.
[99:25.94] They're not like jumping back to cloudflare or something, but like cloudflare itself has
[99:30.94] a very fast edge, right?
[99:32.94] Cause they're not going to going through these like AWS or through these, uh, they're not reseller.
[99:37.94] So like, it's not a fundamental issue that of the technology edge streaming is fast.
[99:42.94] It's that, um, it's unfortunately that the infrastructure basically invented a technology to make it faster,
[99:53.94] so to speak.
[99:54.94] Right?
[99:55.94] And there's other reasons too, right?
[99:56.94] Obviously if you keep your server farther from your database, the waterfalls on the server
[100:01.94] suddenly matter.
[100:02.94] And as we know, react server components are, don't really protect you against server waterfalls.
[100:08.94] And if you pretend server waterfalls don't exist, you're going to hit them.
[100:12.94] So the best way to mitigate that is to put your database next to your web server.
[100:16.94] But if you treat it like a client app, like if you're isomorphic, you're already guarding
[100:20.94] against waterfalls.
[100:21.94] So the perceptual difference between rendering it on the edge or rendering in the client and
[100:25.94] the waterfall attribution basically means that it doesn't actually make a difference.
[100:29.94] And I took Vercel's own example and remade it.
[100:32.94] And sure enough, actually the, in this case, solid on the edge was slightly faster, but I'm
[100:38.94] not like, I'm not, I'm comparing salt to react there.
[100:41.94] That's not what I'm trying to do.
[100:42.94] I was just trying to show that PPR for a simple static site.
[100:47.94] Um, didn't really matter.
[100:48.94] Obviously there's also Astro, um, server islands, which if your content primary content is not
[100:55.94] dynamic, is a brilliant solution.
[100:58.94] It's the new Jamstack.
[100:59.94] As far as I'm concerned, you know, Jamstack, dead, long lived Jamstack.
[101:03.94] Cause you guys are saying Astro islands, instead of using the edge, get the thing from the CDN
[101:08.94] and then start the request from the client.
[101:09.94] It's like old CSR, except with static pieces.
[101:12.94] It's a brilliant solution.
[101:14.94] It, I don't know if I showed an example here.
[101:16.94] It was slower.
[101:18.94] Um, it was fast on this example.
[101:21.94] Cause the main content was mostly static.
[101:23.94] But like, if I tried to do like a hacker news or like any actual app, like example,
[101:28.94] um, it's the same pro it's like CSR all over again.
[101:32.94] Like you'd be better just like waiting for the response to like old SSR from five, 10 years ago or whatever.
[101:39.94] But if you're mostly, your primary content is mostly static.
[101:43.94] Astro server islands are the perfect technology and way simpler than PPR or setting up edge streaming.
[101:51.94] So there's that kind of thing.
[101:53.94] But like in terms of complexity, PPR is the most complicated.
[101:57.94] Um, and it basically has almost no benefits over efficient edge streaming.
[102:03.94] Yet I don't know if you can get the capabilities in react land without it.
[102:07.94] Like, because it's a next and the react has only been building features so far as into seems to cater towards the next solution.
[102:16.94] So like, we're, we're kind of like on this path.
[102:19.94] I would have, I probably should have made an example on remix and showed edge streaming from remix.
[102:23.94] I think that would have maybe been more effective way of proving my point, but like essentially.
[102:30.94] It bugs me a little bit that like, yeah, it's tricky.
[102:37.94] We need, this is, this is the whole conversation.
[102:40.94] Why we're just kind of spinning our wheels.
[102:42.94] Cause it looks like we're not really accomplishing much of anything.
[102:49.94] I feel like react is too complicated for what it does when you don't have very super parents or performance.
[102:53.94] It's just so much more work to get something to work.
[102:54.94] I mean, I don't know.
[102:57.94] I, I, yes and no.
[102:59.94] And I think complexity is going to be the driver of our conversation today.
[103:03.94] Right?
[103:05.94] Like there's a bunch of people I mentioned here, not wanting to wait to the mess.
[103:13.94] I don't know.
[103:14.94] They basically are looking at Laravel and they're looking at traditional servers.
[103:18.94] You know, this is a great choice when your solution falls in a place where that makes sense.
[103:26.94] Like, you know, if I bring back our diagram here, if you're over here, even up to e-commerce, maybe, you know, you're fine.
[103:34.94] But if you live over here, it's don't kid yourself.
[103:40.94] HTMX is not going to save you, but most people are over here.
[103:43.94] So it's like, why the hell am I trying to put react on my marketing site?
[103:47.94] I mean, I'm with you.
[103:48.94] It's just like, we have good solutions over here, especially when you consider stuff like Astro as well.
[103:56.94] But Astro is a complexity jump for people, right?
[103:59.94] It's like, now you have beat and bundlers and build steps.
[104:03.94] It's funny because classic languages have compilers too.
[104:07.94] But in JavaScript, it's such a like, it's, you know, most people doesn't mean most money yet.
[104:20.94] Yeah, okay, and I should, I should be careful of, of interchanging the words.
[104:27.94] And I might have in my article.
[104:29.94] Complicate and complex are two very different things.
[104:32.94] The solutions that we are getting to are definitely more complex.
[104:40.94] There's a lot of, it's not just moving parts, but emergent behaviors caused from the different pieces working together.
[104:46.94] So, yeah, I should be care, I should be careful with the use of the word.
[104:51.94] With the use of the word, I agree.
[104:52.94] So like, I don't know if the lot, all I wanted to kind of wrap up on this point is that like, we went back to the basics, you know, everyone's like, you know, 21, 22, we were like, you know, like when all these meta frames came up, we're like server rendering, you know, just HTML, you know, like the remix mentality that, you know, we were talking about earlier.
[105:20.94] But I think we're starting to realize as people are building bigger and realer projects on these technologies that like, you need, like, it's not, it's not that simple, right?
[105:33.94] You end up kind of getting back there.
[105:36.94] I think the classic one is you start your app on RSCs and then end up making everything into a client component.
[105:41.94] I've seen it happen.
[105:43.94] like, it's, we're in an intro, you know, we're in this kind of weird zone where we haven't really solved it.
[105:52.94] And at least there's different solutions to attack the problems.
[105:56.94] But, you know, there's varying degrees of complexity.
[106:00.94] Most people who follow the stream probably are doing okay at following along with this, but I don't know how anyone else does.
[106:08.94] Right.
[106:14.94] Okay.
[106:15.94] This is a good one.
[106:16.94] Java and the most public build system can work in the special IDE.
[106:19.94] So I don't, I don't know.
[106:21.94] It's, it is kind of funny.
[106:22.94] Cause I sometimes feel like the no build people are also like the, the like .NET Java people.
[106:34.94] It's like, it's a weird place.
[106:35.94] It's like, you could take the people who are like no build web components and like classic backend.
[106:43.94] And it's like, there's a certain alignment they have there.
[106:48.94] You know, maybe it's like an anti react kind of sentiment.
[106:50.94] I don't mean react.
[106:51.94] I mean, anti front end framework in general kind of sentiment.
[106:54.94] And it's like, I don't know if you put the whole picture together.
[107:03.94] I'm not sure.
[107:04.94] I'm not sure that it like, I think you're just like moving where the pieces fit.
[107:08.94] And there's a reason that the focus has been in a different place the last few years or last while, because part of it initially was because we all want a nice, more experience.
[107:19.94] It made, you know, everyone want to develop apps, but I think it's also because they accomplish.
[107:27.94] There's, I think it's hard, like both sides.
[107:31.94] It's hard to approach this, this middle zone.
[107:33.94] Anyway.
[107:38.94] Aren't no build people rails people like Ruby and.
[107:45.94] Okay.
[107:46.94] I mean, yeah.
[107:47.94] I mean, DHH is often talked about, about no build.
[107:50.94] So I guess there's them too.
[107:52.94] What I'm.
[107:53.94] It's, it's just, it's, it's interesting to me because the, if you follow down the conclusion of what they're hoping to accomplish.
[108:06.94] It's funny.
[108:08.94] I call it uninteresting.
[108:09.94] I don't know how else to call it.
[108:10.94] It's just like, it doesn't do the thing.
[108:13.94] There, there's a reason why I kind of put them over here in the diagram.
[108:16.94] Like it's just like.
[108:18.94] Yeah.
[108:19.94] I don't know.
[108:25.94] No build is a myth.
[108:26.94] Right.
[108:27.94] I mean, people are worried about, I'm a build, but it's funny.
[108:36.94] I used to use like visual studios.
[108:38.94] And I remember like, I used to build games.
[108:40.94] I had like a game engine.
[108:41.94] I built in C sharp.
[108:42.94] We're just waiting forever.
[108:43.94] I mean, this is why JavaScript is so freeing when I returned it.
[108:45.94] I was a JavaScript developer.
[108:46.94] And then I'd spend a, I mean, I'm not a JavaScript controller.
[108:49.94] I was a kid, but then I spent a bunch of years in the .NET ecosystem over a decade.
[108:53.94] I was doing everything from web to trying to make video games.
[108:57.94] And, and then I went back to JavaScript and I was just like, pooh, you know, but like, I mean, this leads us right up to the next topic where I want to talk about, which is compile a compilation.
[109:08.94] Right.
[109:09.94] Right.
[109:10.94] I, I, I made this joke to Rich Harris a couple of years ago, but like, um, I, I think we can't deny that compilation is ever present aspect of JavaScript development.
[109:22.94] You know, we, we hit something we can't do.
[109:25.94] We, you know, maybe it's a browser feature or, you know, like, isn't in this thing, you know, Internet Explorer doesn't have blank clunky syntax.
[109:34.94] You know, we don't like calling our signals as functions.
[109:37.94] Um, the ability to address language shortcomings, you know, doesn't have types.
[109:42.94] We build a compiler pretty much, you know, it's so ubiquitous at the point that if you guys saw that whole, like, what's like, I can't remember what it's called.
[109:49.94] Like, it's not like, is it not standards thing?
[109:51.94] From CC 39.
[109:52.94] I can, I can never remember what it's called.
[109:53.94] It's like, uh, they, they're, they're talking about having a compiler track basically.
[109:55.94] Um, right.
[109:56.94] Like, like, it's an interesting proposition.
[109:57.94] I don't know if it's a great idea, but we were kind of like acknowledging that the compilation is basically a huge part of JavaScript.
[110:02.94] Um, because like, and I, and bundling through extension.
[110:06.94] Right.
[110:07.94] Because like, like, like, let's list some of the benefits here.
[110:11.94] I mentioned some of the article, but I feel like there's more types.
[110:13.94] linting, linting, tree shaking, code splitting, minification.
[110:16.94] I have morphism, you know, convert the code to work differently on the client server.
[110:18.94] We do that in solid a bunch.
[110:19.94] Um, macros, um, you know, use server, uh, server dollar sign.
[110:21.94] Um, DSLs, you know, different templating languages, uh, like, you know, JSX.
[110:26.94] Um, and, and, and, and bundling through extension.
[110:28.94] Right.
[110:29.94] Cause like.
[110:30.94] Like let's list some of the benefits here.
[110:31.94] I mentioned some of the article, but I feel like there's more types.
[110:33.94] Linting, tree shaking, code splitting, minification.
[110:36.94] I have morphism, you know, convert the code to work differently on the client server.
[110:40.94] We do that in solid a bunch.
[110:41.94] Um, macros, um, you know, use server, uh, server dollar sign.
[110:46.94] Um, DSLs, you know, different templating languages.
[110:49.94] Like, you know, JSX, for example, monolithic authoring, distributed deployment.
[110:53.94] This is something seen a lot of now meta frameworks.
[110:55.94] You like write your code in one way.
[110:56.94] And then, um, it shows up, you know, this, this, this can deploy to cloud flare.
[111:02.94] This could deploy to AWS, you know, and even the same project could be split
[111:06.94] across multiple workers or whatnot.
[111:08.94] These are things, you know, that you can do in other languages as well.
[111:16.94] I'm just saying like, this is, this is the kind of power that you have with, with, with build.
[111:24.94] Yeah.
[111:25.94] Um, HMR is probably a good extension of this.
[111:28.94] I'm talking about.
[111:29.94] Yeah.
[111:37.94] Yeah.
[111:38.94] I mean, tree shaking is incredible.
[111:39.94] Uh, I I've shown this on stream before, but like in solid.
[111:42.94] If you don't use transactions or if, sorry, my favorite one is if you don't use suspense,
[111:47.94] but the router has transactions, we actually tree shake the transaction code completely out
[111:52.94] of the solid thing.
[111:53.94] Like if you're using, even if the library uses transactions, but you don't have like the
[111:57.94] suspense to trigger it or something like basically like, although I don't know if that's the right
[112:01.94] mentality for that feature at this point, but a whole different thing.
[112:04.94] But like, basically you can tree shake code paths within like a function.
[112:13.94] You can have a function with conditions like bullying conditions.
[112:16.94] And if you never, if you set them to false by default and you never import a function that
[112:21.94] could set it to true, it literally changes the makeup of your code.
[112:27.94] Like it, you, it drops out chunks of code.
[112:31.94] Like, as I said, if you just use, it's so funny because people go and they go, Oh, solid seven
[112:36.94] kilobytes.
[112:37.94] But in reality, solids smaller than preact.
[112:40.94] Like if, unless you use the features, because if you only import certain things, the other
[112:46.94] things drop out all the scheduling stuff, all the suspense that that's like all the.
[112:50.94] transactional stuff, like the, this is such a powerful thing when you consider the extent
[112:57.94] it is there.
[112:58.94] There's no comparing.
[112:59.94] It's funny.
[113:00.94] Cause when I was at eBay and we were talking micro front ends and people were trying to bring
[113:04.94] in what was it module confederation with web pack.
[113:06.94] And we were like, there was actually like a debate between the framework maintainers and some
[113:12.94] of the project teams, because a bunch of them were like, like it's sometimes better depending
[113:21.94] on the type of library.
[113:22.94] It is, especially if it's like large utility library to compile in the specific tools for
[113:27.94] the specific page.
[113:29.94] page, even if there's potential duplication, then it is to pull in the whole library with
[113:34.94] stuff that no one would possibly use.
[113:36.94] And especially multiple versions of the SID library with functions that no one would use.
[113:41.94] the, the, the, the giving up the tree shaking was huge.
[113:44.94] Um, like.
[113:46.94] Yeah.
[113:47.94] Yeah.
[113:48.94] I mean, all these technologies, like we've been talking about, like with partial hydration,
[113:56.94] resumability, how do you, how the hell do you do that without compilation?
[114:00.94] Right.
[114:01.94] I would say every advancement in the past 15 years in this field has been built on this
[114:08.94] foundation.
[114:09.94] There's no alternative that could even remotely be considered adequate by comparison.
[114:12.94] Call it unfortunate, call it limitation of the JavaScript language, call it necessary complexity,
[114:16.94] but to deny it is future futile, right?
[114:19.94] Like you guys all know what I feel about the no build topic.
[114:22.94] I think, I think like people aren't even on the same planet at that point.
[114:28.94] However, I do think we should be critical of it.
[114:33.94] I think we have to understand where this complexity comes from.
[114:39.94] I don't see how people can build stuff switching to the bathroom.
[114:42.94] Who cares?
[114:43.94] Well, there's like a whole, uh, where do I, do I talk about the shift left here?
[114:50.94] Um, maybe later, but there's like a whole, like even stuff that happens in your ID
[114:58.94] Um, like I had a whole stream with, uh, Dylan from Marco.
[115:03.94] And we were talking about all the tools you need to make your own custom, like, uh, language,
[115:07.94] like Marco.
[115:08.94] Um, and like a lot of the tools run in your ID or they run pre-build time as well.
[115:14.94] There's build time, authoring time, you know, like there's, there's different steps and different
[115:21.94] points at which they run, but they're all the same kind of mechanics and they're all compilers in a sense.
[115:34.94] Um, I'm, uh, for the end of start to the front, I've started for the basic web.
[115:38.94] Well, I mean, this comes mostly from the fact that they, they, they can approach developing on the web like an application.
[115:45.94] Like the learning, um, react as a client dev kind of perspective is very similar to learning how to develop for iOS.
[115:55.94] Like you're like, okay, I can make an app and put it in the app store.
[115:58.94] They don't need to know that it's a client server architecture.
[116:02.94] Really?
[116:03.94] They can literally just build something like it's a single application.
[116:06.94] That's one of the main points.
[116:08.94] So that's why they aren't familiar with basic web because they are taught how to build applications.
[116:22.94] Well, I mean, it's just where I left the only interaction site is, is server driven.
[116:50.94] In this dream, we care about interacting with any of the, well, I mean both, right?
[116:54.94] There there's an argument that like all interactions should be both.
[116:59.94] You need to give the, if you want your stuff to be responsive, you should be giving affordances to the user immediately.
[117:05.94] And don't get me wrong.
[117:05.94] I'm sure HTMX is a way to do like placeholders and of some sort.
[117:09.94] I don't know how much it has to escape the model to do optimistic updates, but I'm not going to contend on that.
[117:14.94] I think the challenge is actually shared state.
[117:17.94] And I think that's where things get tricky when you have state that persists in the client and can change.
[117:23.94] Because you have to communicate that back to the server to have the server put in the right, render the same stuff, or you have to wait until it comes back and get on the client to actually do the thing.
[117:32.94] Because the complaint, the problem is it starts, if the state and the client and the way that interaction, the pieces on the server, like if it gets complicated enough, it becomes very prohibitive.
[117:43.94] And you start getting like ASP.net, like old school, where you like view state, where you start like serializing the whole page.
[117:48.94] What's lovely about HTMX is it's not opinionated about the state management aspect.
[117:52.94] So you can literally use it for anything, but on the same side, the trade-off is that it's like not a complete solution.
[117:57.94] It's like not a whole thing.
[117:58.94] It's like, this is a good tool, but it's not like, like, I can't put it on the same scale of comparison to like the stuff I talk about.
[118:06.94] Cause it just like, it, it isn't intended to actually solve the problem.
[118:11.94] This is one of those things though.
[118:19.94] It's like one of those things.
[118:20.94] What if you can make the servers super fast and do things in your server that the problem is a server can never be as fast.
[118:25.94] Like it's, it's, it's like, it's like, like, don't get me wrong.
[118:31.94] Things can be, things can be made faster over time, but it's like, every piece can be made faster over time.
[118:37.94] It's like when you're talking about like internals of a computer and you're talking about the CPU versus like the level one, two, three caches and the RAM.
[118:44.94] And then you're talking about the hard drive.
[118:46.94] And then you talk about the network, you know, that each step down the ladder is exponentially slower.
[118:51.94] So like the closest you can be to the source is the interesting.
[119:00.94] The question is sometimes the source isn't what you think it is.
[119:03.94] The source is the user.
[119:04.94] I.e. it's interactive.
[119:05.94] Then you want to be as close to them.
[119:08.94] Sometimes the source rarely is the, but it can be, is the, is the server.
[119:12.94] It's the database.
[119:13.94] It's the thing driving it.
[119:14.94] And the user's not, is not really a participant.
[119:16.94] In that case, there's a good argument for, you know, the opposite side, which is like something like live view or whatnot.
[119:22.94] But yeah, it's, it's interesting.
[119:29.94] Yeah.
[119:30.94] And there's a little bit of that, but I think we need to at least understand it.
[119:35.94] Yeah, exactly.
[119:37.94] The, the worst part is the complexity.
[119:40.94] This, the, the, we have to understand the complexity.
[119:43.94] I agree with you here, Daryl.
[119:45.94] Like it, I, I, what we disagree is I think that you have to understand that like the benefits are important.
[119:52.94] Like me as a developer would trade my happiness for end user happiness.
[119:58.94] You know, theoretically, like I would pay extra seconds of build time on my side, you know, to ensure that the end user gets the best possible experience.
[120:07.94] I, I will, I don't want to do anything to sacrifice the end users experience.
[120:11.94] Their experience is way more important than the, the, like the costs that I have generally speaking.
[120:17.94] So, but I, my problem is I, I don't like when people hide the complexity, you know, marketing, when they pretend like it's not a real thing.
[120:27.94] The, the worst of this category is just JS.
[120:30.94] When people go, it's just JS because man, like nothing is just JS or everything's just JS.
[120:38.94] Right.
[120:39.94] In a sense, compilation is just JS.
[120:41.94] Now at this point, Babel changing your code, you know, to support ES 25 or whatever is just JS.
[120:47.94] But like, I don't know.
[120:49.94] It's I had big arguments with people who were like Svelte three is just JS.
[120:54.94] It's like, no, JavaScript does not act that way.
[120:56.94] And I think this is one of those kind of funny bits is I've had the same conversations now with people who were on the react compiler who were like, it's just JavaScript now.
[121:06.94] And it's like, but it's not, you know, like that.
[121:11.94] That isn't what just JS is.
[121:14.94] Um, all that react, arguably, they were also just JS quote, because they were load level, right?
[121:20.94] JSX was just calling function calls.
[121:22.94] I agree more with that definition of just JS, but you can't have them both be just JS.
[121:27.94] This is why the talk about compilers in the, like the last year has been kind of one of those like muddy topics because I've literally, literally have both sides telling me it's just JS.
[121:39.94] And the funniest part about this, it's a swap that's happened.
[121:43.94] React has gone to with their compiler to be something more like Svelte three.
[121:48.94] It's not the same, but they've simplified their syntax significantly so that, so you don't express things in terms of performance optimization, which probably makes sense.
[121:58.94] Because hooks, especially memoizing hooks were there specifically for performance.
[122:03.94] They, they had nothing to do with execution.
[122:08.94] Like they did in the fact that you didn't recalculate values and you had to go manually do it, but it's, they are different than computed in reactivity.
[122:17.94] I didn't always understand this, but Danny Abramoff, like for them, I, you could tell in their head that those extra hooks, like use callback, use memo, react.memo.
[122:26.94] We're just kind of like temporary placeholders for an idea of how they thought things should work in the future, which is a very different role than like computed things have in reactivity.
[122:37.94] But that being said, you, you can't observe the render anymore.
[122:45.94] If you put a console log, it's not going to necessarily run where you wrote it.
[122:49.94] Um, they, they, they, they've changed the mechanics of how your code runs under the hood.
[122:57.94] So in a sense, it's basically all to auto memoize, like all the prevent certain code pass from rerunning too much.
[123:07.94] And that's actually what the Svelte three compilers.
[123:09.94] People wondered how Svelte three worked without a VDOM.
[123:12.94] You know, it wasn't signals old Svelte.
[123:17.94] Um, Dominic Gannaway went as far as saying that it was basically a VDOM, but it, it wasn't so much a VDOM.
[123:23.94] It was more like, um, a dirty checker kind of similar to angular, but it had an auto memoizing compiler, essentially that that's, that's what Svelte three is.
[123:34.94] It's an auto memoizing compiler over angular style, dirty checking.
[123:38.94] Uh, and what the React compiler is, is an auto memoizing compiler over VDOM.
[123:46.94] There, there's a huge amount of similarities between those, but ironically at the exact same time Svelte changed from that to Svelte five, which is basically a compiler.
[124:00.94] That is a syntax sugar over fine grained signals rendering similar to something like solid.
[124:06.94] So like it's, it's a, it's a very interesting switch of positions, right?
[124:15.94] Okay.
[124:20.94] I'm catching up with chat here.
[124:23.94] Why hasn't React stopped using VDOM DOM?
[124:26.94] Well, it's because the VDOM is not an implementation detail in React.
[124:36.94] That's one of the biggest lies we've probably ever been sold.
[124:40.94] It is in a sense, but let me explain what I mean.
[124:44.94] React's mental model is one that requires re-rendering.
[124:48.94] That is when you look at the code, your expectation, even without the compiler, even with the compiler, removing the hooks and stuff.
[124:56.94] It's you see the code, you update it.
[124:58.94] It reruns.
[124:59.94] That is the React mental model.
[125:01.94] If, if something reruns and the expectation is that it runs over and over again, you need a virtual representation.
[125:12.94] It's, um, immediate mode, not retained mode, right?
[125:15.94] You can do smart optimizations under the hood.
[125:17.94] But conceptually you are recreating everything every time, even if you aren't.
[125:28.94] And that alone is why React is a VDOM in my mind.
[125:32.94] Like it doesn't get to escape that because it doesn't get to change what makes it react.
[125:38.94] Dominic is such a legend.
[125:40.94] Yeah.
[125:41.94] there we go.
[125:42.94] Svelte became solid.
[125:43.94] React became svelte.
[125:44.94] And all we need is solid to become React to complete the cycle.
[125:48.94] And that is kind of what's happening.
[125:52.94] actually, ironically, that is actually what's, I, I, it's funny.
[125:57.94] I w I didn't think about it this way.
[125:59.94] Um, but solid is the last bastion right now.
[126:07.94] not last.
[126:08.94] There's a few others like preact, I suppose.
[126:09.94] And, uh, you know, some of the other frameworks, I guess, uh, let me think here, but we're, we're
[126:14.94] kind of like the just JavaScript in the original react sense of just JavaScript.
[126:18.94] JavaScript.
[126:19.94] But like, yeah, that's funny.
[126:30.94] Is it?
[126:31.94] I mean, it's, it's interesting.
[126:33.94] It's.
[126:35.94] VDOM is usually the, I, I wonder if the hyperscript runtime is simpler.
[126:43.94] Um, then I know what you mean though.
[126:47.94] It's we take a lot of complexity of compilation time, but like with signals, but like the runtime
[126:54.94] is actually pretty simple.
[126:55.94] It's why when people look at solid compilation, they're always like, Oh, this is fairly straightforward.
[126:58.94] In fact, in the last couple streams, when I'm showing solid 2.0 on, I've literally just
[127:01.94] been hand compiling the stuff because it's like, it's like, it's very basic.
[127:07.94] Um, but yeah, I guess it is simple in the fact that you don't have multiple moving pieces.
[127:12.94] It's like if your whole app was a single signal and single in effect.
[127:15.94] Right?
[127:16.94] So yeah, I'll take that.
[127:17.94] Yeah.
[127:18.94] React VDOM was better than digest cycle, but now worse than real reactivity.
[127:25.94] Yeah.
[127:26.94] It exists until you, so you don't have to care until you have to care.
[127:33.94] Who gets this chair?
[127:34.94] Yeah.
[127:35.94] I mean, there's a bit of that too.
[127:36.94] Hyper script mentioned yet.
[127:38.94] Yeah.
[127:39.94] No, react with signals is not, you know, I, this is another one of those things.
[127:54.94] It's fine.
[127:55.94] I don't get too much into it, but when people talk about state libraries and react, it's,
[127:59.94] they're not doing the same things.
[128:01.94] React with signals is view.
[128:03.94] It's not, it's not, uh, yeah.
[128:16.94] Yeah.
[128:17.94] But I, I, as I said, it's, it's a funny conversation when the, everyone claims to be just JavaScript
[128:22.94] and it's kind of flipped.
[128:23.94] Um, but yeah, I, I summarized it here.
[128:26.94] React is kind of acknowledging that re-renders do matter enough to optimize around, which is.
[128:31.94] Interesting.
[128:32.94] I mean, the, they acknowledged that earlier, probably with hooks to be fair, but like, this
[128:37.94] is the full cycle of that, which is funny because if anyone remembers the original talk
[128:42.94] of react, like Jordan walks talk back in 2013, the whole point with you don't have to worry
[128:46.94] about re-renders and they're basically showing how they spent the last five years worrying
[128:51.94] about nothing but re-renders.
[128:53.94] Just, just putting that out there.
[128:54.94] Svelte trade away its minimal syntax for more expressive language.
[128:58.94] Which were a good trade off because now they have way more capability and a better fundamental
[129:03.94] basis performance.
[129:04.94] But again, it's, it's like opposite the original selling point.
[129:07.94] I, I, this is an old one, but I saw this and I kind of laughed a bit.
[129:10.94] It's because the original Svelte one didn't have the script tag either, which always bugged
[129:13.94] me.
[129:14.94] At least someone added the script tag in.
[129:15.94] This is probably why this caught my attention more than any, because the missing script tag really
[129:19.94] irked me in the example.
[129:21.94] I don't know why, but you know, the, it was basically saying that like some people in the
[129:27.94] Svelte community have been saying that it's becoming React.
[129:30.94] It's such a funny concept to me because the idea of denoting state as state is maybe a react
[129:37.94] thing.
[129:38.94] For me, it was a knockout thing.
[129:39.94] It's wherever you saw it first.
[129:40.94] Um, it's, it's, it, it, it, the thing is Svelte 5 is nothing like React.
[129:46.94] Svelte 5 is like solid, not like React.
[129:50.94] But it, it, I get why there's tension there.
[129:53.94] Um, it's mostly misguided in my opinion, but it's interesting when you build a community
[130:00.94] on a set of beliefs and then you've kind of basically say, no, you know, this is, we, we've
[130:07.94] changed our minds.
[130:08.94] Um, you know, like at such a fundamental level when it was the selling point.
[130:13.94] I don't think he ever made that blog post.
[130:23.94] Yeah.
[130:24.94] Yeah.
[130:25.94] It's becoming React.
[130:26.94] Yeah.
[130:27.94] It's not that simple.
[130:32.94] The problem we we've been kind of playing around with this a bit.
[130:37.94] React has, um, semantics around component rerunning that go beyond this.
[130:42.94] This is one of those, uh, mitosis from builder IO.
[130:45.94] It's a perfect example of it.
[130:47.94] They wanted a universal JSX renderer so they can basically convert react into other frameworks,
[130:54.94] but react wasn't the right basis for it because react semantics were weird because of the rerun
[131:00.94] cycle.
[131:01.94] It was like different than other ones.
[131:02.94] The ironic part was if we took solid as the basis was what we did, we ended up compiling
[131:08.94] like dot map into basically the same as solids four or whatever.
[131:11.94] But so we looked for syntax things and they were more aggressive with mitosis, but before
[131:16.94] like early mitosis days when it was JSX light or whatever, I I've spent a lot of time with
[131:21.94] Steve Stuhl, the, the, the CEO of builder.
[131:24.94] And we talked through these solutions and basically we realized that if we took something like solids
[131:31.94] execution semantics, we could put it on react.
[131:33.94] We've already seen mob X kind of do that.
[131:35.94] like sure it's not as efficient, but you can, you can force the, like the meaning to those
[131:40.94] things, but reacts meaning to their hooks was not equivalent.
[131:43.94] You could always put a reactive system to kind of drive a VDOM library the same way or get
[131:49.94] rid of the VDOM, but the opposite wasn't true.
[131:52.94] Anyway.
[131:53.94] It's like windows.
[132:08.94] Yeah.
[132:09.94] Yeah.
[132:10.94] That's funny.
[132:11.94] We'll see how the communities react to this over time.
[132:16.94] In general.
[132:17.94] I think the compiler stuff is interesting.
[132:20.94] At least.
[132:21.94] Um, it's probably where I'm most interested in work on the, on the react side of these days,
[132:26.94] because there is a world in which there is a convergence to a certain degree between signals
[132:31.94] and non-signals stuff from the perspective that is, if you can mask all side effects, it's impossible for the developer to tell the difference.
[132:39.94] That's the theory.
[132:40.94] So there might be a future where react has signals under the hood.
[132:43.94] If it's funny, they, they could use their compiler as a migration tool.
[132:50.94] In a sense, if, if they could figure out like you basically the stricter and stricter, they make it the more possible it is to.
[132:59.94] For no one to understand how it operates to the point that you could actually completely switch what's under the hood.
[133:04.94] So maybe that is the plan.
[133:05.94] Maybe I just revealed reacts big plan moving forward.
[133:07.94] We'll see.
[133:13.94] Yeah.
[133:18.94] I mean, except it doesn't do the same thing.
[133:21.94] This is something, again, I said a few minutes ago, people have to understand like signals or state in react doesn't make react.
[133:27.94] It doesn't make it remotely like solid or Svelte five.
[133:30.94] Like it just, the biggest thing.
[133:33.94] And I mean, this is a little tangent on its own is, and I talked about them in my last stream.
[133:38.94] What were the two streams ago is that compilers don't know how to do nested reactivity and mutable reactivity.
[133:47.94] We, we worked on this problem pretty hard actually on the Marco team.
[133:51.94] And we ended up going with a partially runtime solution.
[133:55.94] That was the one that that's the piece that like eventually swaps people over.
[133:59.94] Um, it's because it's very hard to do that kind of granular tracking updates from a compiler perspective.
[134:05.94] And that's something that react can't duplicate like solid stores.
[134:08.94] Like it's, it's something that allows granular, um, notification.
[134:13.94] Like you can have a list of to-dos update the checkbox on one to do and go in and just update that one place without rerunning the list or in the component of the middle.
[134:22.94] Memorization can't save you from that.
[134:23.94] And in fact, Misko Hevery from the quick, um, called it like two years ago.
[134:29.94] Cause we knew like something along react compiler won't be able to solve this problem.
[134:33.94] And he was right.
[134:34.94] Um, upcoming react file only posts out of the problem.
[134:36.94] Oh, political title here.
[134:38.94] Here you go.
[134:39.94] But give this a read.
[134:42.94] If you're, if you're wondering about the fundamental shortcomings of the, of the approach of the react compiler, you know, why it was not going to make react faster.
[134:51.94] Anyway.
[135:03.94] Yeah.
[135:04.94] Yeah.
[135:05.94] Yeah.
[135:06.94] Yeah.
[135:07.94] The thing is the problem, that is a fine solution, but in my opinion, it doesn't solve deeply nested state.
[135:13.94] Like I just talked about, like, especially like stores.
[135:15.94] And secondly, the, the challenge with this is if you don't give yourself the language to describe the problem, you don't have, you don't have as much control over it.
[135:25.94] Um, that might be fine.
[135:27.94] And if you're targeting humans and being simple, you know, maybe that is a good tradeoff.
[135:33.94] Svelte three was very well loved.
[135:35.94] Maybe the react compiler would be well loved, but you know where I said, I'm looking at like the best possible solution.
[135:42.94] So it's, it's, it's interesting.
[135:46.94] It's, it's interesting where you sit on that scale of things.
[135:49.94] It doesn't help with the JS framework benchmark.
[135:53.94] I mean, I don't want to spoil the end of it, but I did the compiler in the JS framework benchmark and react hooks without the compiler react without the compiler, but written the same way that I wrote the compiler code.
[136:10.94] And as you can see here, um, the optimized hand optimized one that I originally wrote back in the day with a little suggested help from Dan Abramoff on the best patterns is still faster than react with the compiler.
[136:22.94] Cause the hand optimized memorization was more precise.
[136:25.94] I had the language.
[136:26.94] I had the ability to describe exactly what I want it to happen.
[136:28.94] The compiler does a pretty good job though, almost indistinguishable.
[136:31.94] So it's a good chance that the compiler make you better.
[136:33.94] And if you write the code like a, like an idiot and don't do any checks, the compiler makes a more significant improvement.
[136:40.94] Um, but essentially it doesn't make react faster.
[137:01.94] Yeah.
[137:02.94] Yeah.
[137:03.94] Which is a great improvement.
[137:04.94] Like, don't get me wrong.
[137:05.94] I'm just saying like, you know, solving the problems that you create.
[137:06.94] Right.
[137:07.94] Okay.
[137:08.94] So where were we?
[137:23.94] Um, I think we're, it's time to talk about AI and dev tools.
[137:29.94] So this is when we talk about bundlers, I'm talking about all this stuff, um, productivity.
[137:39.94] Yeah.
[137:40.94] Velocity.
[137:41.94] I remember that on eBay.
[137:42.94] Everything was about how can we improve developer velocity?
[137:51.94] You, you would though.
[137:52.94] Right.
[137:53.94] Think you hide too much.
[137:54.94] Yeah.
[137:55.94] I mean, this is, this, this is an important topic because you know how I,
[137:59.94] I said a few minutes ago that react, um, likes to kind of sit there and be like, don't worry.
[138:07.94] We'll solve this, you know, come up with the right idea.
[138:10.94] And then the performance and the other stuff will happen later.
[138:13.94] You know, kind of like an ivory tower tower kind of approach.
[138:16.94] And I'm like, absolutely backwards from what I do it.
[138:20.94] I try and bet if something's worth doing.
[138:21.94] And then if it's worth doing, you know, or at least shows potential, then I go after it.
[138:26.94] Otherwise if I can't get the performance or I can't get it to where it is, then it's the wrong idea.
[138:31.94] Um, or at least it's not the right time.
[138:34.94] And I think that, um, where was I going with that?
[138:45.94] Um, yes.
[138:46.94] AI is like going to be the next thing.
[138:48.94] This is my call shot here.
[138:49.94] It's not in the article, but I, I, my, my gut is now that the compilers out and you can't
[138:53.94] say that that's going to fix everything or react server components or whatever.
[138:56.94] The next thing is, and we already saw the SWIX kind of led the charge for this a few years ago.
[139:01.94] And I've seen some other people where they're like, you know, they're like, well, I'm just
[139:05.94] gonna keep on using react until I'm replaced by AI.
[139:07.94] Right.
[139:09.94] And it's like, they just assuming that because react has the largest is the most popular.
[139:15.94] It has the best training set that react would be the choice, the tool of choice for AI in
[139:19.94] the future, because it AI is most capable of writing react code.
[139:24.94] These are true statements.
[139:28.94] Don't get me wrong.
[139:29.94] It's just, it's a funny, it, you have to look at where you want things to go.
[139:35.94] Right.
[139:36.94] Do you want to take something that like, is your goal to get react out of the AI or is your goal
[139:50.94] goal to get the best possible app widget component out of the AI?
[139:55.94] Like, don't get me wrong.
[139:59.94] I think AI will be turning out a lot of crap for many years to come.
[140:03.94] But conceptually, if you could remove your human aspect of it, close your eyes and be like, okay, what do I want this thing to come out of AI to be or what it to do?
[140:15.94] Is this where you want to be?
[140:25.94] It's not where I want to be.
[140:27.94] AI keeps you stuck in what has been done before.
[140:29.94] Exactly.
[140:30.94] It's bad for innovation.
[140:32.94] Tony, you're on fire today.
[140:33.94] Like, I mean, it's a good investment.
[140:44.94] I think one of, I did have a good conversation the other day.
[140:47.94] I was actually talking to Theo after stream a bit about AI because we were talking about some topics and he said it made him a more faster, more capable developer, which is different.
[140:59.94] I was talking about low code and no code because the problem with like local to no code was it didn't really get there.
[141:04.94] You know, when people talk about AI, they're like, it's not here yet.
[141:06.94] It's, you know, it's going to take a while, whatever.
[141:09.94] It's kind of like no code or low code.
[141:10.94] I've been visual coding tools.
[141:13.94] I've been seeing those for years.
[141:15.94] I, I, my first experience with them was probably, and visual coding was Delphi, um, back in 94, 95.
[141:23.94] It's like based on Pascal.
[141:25.94] It was like a visual Pascal kind of thing, I think.
[141:27.94] And then, uh, visual basic and .NET in like around 97.
[141:32.94] And, you know, like the tools have obviously evolved over time, but like, it's been 30 years now.
[141:38.94] We're, we're not really there.
[141:39.94] Some people feel AI is like that, but then I've used co-pilot and co-pilot.
[141:44.94] And co-pilot has made me faster.
[141:47.94] Very helpful.
[141:48.94] But as, uh, Tony said, do you know where it's made me really fast?
[141:54.94] I've been refactoring all the tests from solid 1.0 to solid 2.0.
[141:59.94] Co-pilot is a genius there.
[142:02.94] It can see me change store syntax from path to, um, produce syntax essentially, and just automatically know how to change it after a couple tries.
[142:12.94] You know, part of it is a pattern matching on the same page and whatever, but like nothing too smart, but it drastically improved.
[142:19.94] I've accomplished stuff over the last day or so that it would take me way longer before because of AI.
[142:26.94] But it's repetitive tasks, you know, sometimes it'll suggest like an algorithm and I'll look at them and be like, oh, that's probably fine.
[142:33.94] I'll just optimize it a bit here.
[142:34.94] So there are benefits, but, and in that sense, being popular is really important.
[142:41.94] Like I had some people on discord, not ours.
[142:45.94] I think it was Theo's discord who were like, I really like solid, but I'm not getting as good enough suggestions.
[142:48.94] It keeps on giving me react code.
[142:50.94] So, you know, they're like, I don't really want to use solid cause I don't get code suggestions, you know, or accurate code suggestions from it.
[142:56.94] Yeah.
[142:57.94] I mean, that's pretty tough, but it's like, again, what do you do about it?
[143:06.94] Do you just sit back and go, okay, well, I'm just going to keep on doing the same things again?
[143:10.94] Maybe, but like at some point, something has to move forward.
[143:17.94] Otherwise everything stagnates.
[143:19.94] And so my look towards AI is exactly the same as my look towards everything, which is let's figure out what we should be doing and then make it our best attempt at getting there.
[143:36.94] AI average intelligence.
[143:40.94] Oh yeah.
[143:41.94] Love that too.
[143:42.94] Yeah.
[143:43.94] Yeah.
[143:48.94] Now you make me want to look up what Delphi was.
[143:56.94] I like barely remember it.
[144:06.94] Tanner's just going off to see.
[144:09.94] I knew I was like half and tempted to invite him on.
[144:12.94] I knew he'd have great stuff to say.
[144:14.94] If you have to basically really want to do that on.
[144:20.94] Yeah.
[144:20.94] That's a good question.
[144:21.94] This is, this is an interesting concept, like actively trying to train AI purposely.
[144:30.94] I don't know.
[144:31.94] I feel like with docs, if I know Astro has been doing some stuff to kind of push stuff through, they have like their AI, I forgot what the name of it is.
[144:39.94] I'm sure Fuzzy, if he's around with, but yeah, it's, it's interesting.
[144:43.94] Like the other kind of considerations we have to do in this kind of modern world, like could training AI with examples be more beneficial than like even standard docs.
[144:58.94] Oh, okay.
[144:59.94] It was a specific one of Object Pascal.
[145:01.94] I was like.
[145:02.94] 11 or 12.
[145:03.94] So like.
[145:04.94] Forgive me a little bit of my memories foggy.
[145:07.94] You guys are doing now just more trolls are coming out, but should you say how to teach you how to write web components.
[145:21.94] Houston.
[145:22.94] Yeah.
[145:23.94] Perfect.
[145:24.94] Thank you.
[145:25.94] Yeah.
[145:26.94] I mean, any tool can be a crutch.
[145:27.94] I don't know.
[145:28.94] I, I, people are always looking for the next excuse.
[145:43.94] I'm not going to hold that against them.
[145:44.94] It's just at a certain point.
[145:46.94] I just, I bring it back again.
[145:47.94] You know, I'm tired of react a little bit, you know, some point every people get to get tired.
[145:53.94] But yeah, I mean, here we go.
[145:55.94] Here's Devin.
[145:56.94] Decide to build a CSR to do app in about 30.
[145:58.94] And it is funny because my boss at the time, Matt Bellman from Netlify showed Devin, it was a cool technical thing deployed and he showed how easy it was to get the whole thing done.
[146:06.94] I, of course, did the thing I always do, which is take something that was kind of like a marketing, cool, technical show hawk and pick it to crap.
[146:13.94] And I was just like, anyone knows a 2d MVC app should be a hundred light house score.
[146:22.94] Everyone, if you, if you go make it like, even in react, it might be 99 or something react sometimes for some reason, doesn't get the hundred quite often.
[146:31.94] It gets like 99.
[146:32.94] I don't, I don't know why, but I think a 2d MVC, everybody's going to be like a hundred, um, um, on mobile.
[146:39.94] And, but it was like this example, he's, it's like the prompt build me, uh, to do MVC and it brought in 130 kilobytes of JavaScript because I did some reverse engineering at the time.
[146:52.94] I think it brought in like, uh, one of the big style libraries and what, what did it do?
[146:57.94] Chakra UI with framer motion bundled with web pack.
[147:02.94] No, no tree shaking.
[147:05.94] Chakra UI shaking.
[147:10.94] It, but it was just kind of funny because like, my point is like, is this is, is this what we're going to come to expect?
[147:16.94] Like, are, are we going to say, build me blank and just end up with this giant thing?
[147:22.94] Because this is like, it's kind of indicative, you know, I'm pretty sure.
[147:27.94] Someone goes out and is like, okay, I'm, I'm want to build a, to do app, you know, as an example, you know, for example, or my very basic blog site, my homepage in, and they'll be like, okay, what do I have to use?
[147:38.94] I should use next to us.
[147:39.94] And what should I use?
[147:40.94] Oh, I should use framer motion.
[147:41.94] And it should, and they, they take their like static blog site and they basically do this to it.
[147:47.94] So it's not surprising that AI would do exactly the same thing.
[147:51.94] It's just, it's like, maybe the no code side of things is just not where we should be focusing.
[147:59.94] Vercel's V0 actually has been doing pretty good.
[148:02.94] I've here at creating prototypes.
[148:04.94] I've heard people actually create solid prototypes of V0 or basically take the V0 code and very easily convert it to solid.
[148:12.94] So, you know, maybe that's where we're sitting right now, but as Tanner said a minute ago, like is react really where we want the base forever?
[148:19.94] I don't know.
[148:20.94] So the problem is change is going to have to start with people and it, no one's incentivized to do anything right now.
[148:27.94] So it's just kind of like, it's fun.
[148:30.94] It's funny.
[148:30.94] This is kind of like a side tangent and not really what the core of my articles about, but it's just, I don't know.
[148:38.94] I, it would be very depressing if AI was the thing that bridged the gap for react to be used indefinitely.
[148:56.94] AI is to no code as set CN is to component dependencies.
[149:00.94] I don't know, but that probably makes sense to people.
[149:02.94] That's why I'm highlighting it.
[149:03.94] See, no, there, there might be other ways to, to, to, to win.
[149:15.94] I'm going to talk about that in a minute.
[149:16.94] Let's finish with the dev tools.
[149:18.94] React scan.
[149:19.94] Everyone gets a chuckle over this, right?
[149:23.94] I don't know if re-rendering is important, but Aiden is funny.
[149:27.94] Follow his stuff.
[149:29.94] He's, he's, he created million, which makes your react code actually faster.
[149:36.94] Unlike the compiler, like the compiler will make your rat code, but Aiden actually, Aiden's approach actually makes the rendering faster.
[149:42.94] So like the JS framework benchmark, if you took react and then put like his approach in jumps to the, to the front, but it doesn't solve the re-render.
[149:54.94] It doesn't solve the memoization.
[149:55.94] It doesn't solve the other half.
[149:56.94] It doesn't solve the other half.
[149:57.94] So in theory, if you took millions blocked on and the react compiler and put them together, you would have a framework performance wise.
[150:10.94] That would be very in the same realm as solid or svelte or whatever.
[150:16.94] So like maybe, maybe, maybe, maybe that is something people might be interested in if they care about that mental model, but.
[150:24.94] Because react developers are the wrong audience.
[150:30.94] Cause they don't care about performance.
[150:31.94] You know, it's, it's probably hard to get an adoption.
[150:34.94] So Aiden's been almost on a quest to show people how slow the react apps are react lint, all these different things to kind of help them with performance problems, but also kind of be like, look, Hey, this is, this is what's going on.
[150:49.94] And react scans the latest in this series because it shows you re-renders visually.
[150:54.94] Like when you type in this field and like to, to, to, to, to, to, to, to, to, to, to, um, so like, I don't know the, I think the more interesting thing to me is dev tools are getting a lot smarter and capable.
[151:16.94] And I think we're actually getting to a point where, I mean, this is not old news, but we're going to, the expectation of them both in the browser and in the IDE, especially is going to skyrocket.
[151:29.94] That's when I'm obviously that's an obvious prediction, but I expect more growth over the next little while in that area than in the frameworks themselves for the most part, which is kind of interesting and kind of funny.
[151:42.94] I guess that's why people are creating companies around it, you know, void zero got out, you know, view and V creator Avenue, um, start a company around, uh, those tech, uh, technologies like V and V test and the kind of like roll down and the whole thing.
[152:02.94] So I think, I think, I think, I think it's very, I think it's interesting.
[152:05.94] Like that, that is a place where, you know, a company can be formed.
[152:08.94] Um, I dunno, I, these, these are just kind of movements that you should pay, pay attention to, to, I don't think things have completely come to fruition, but it gives you a good idea of where things are heading.
[152:26.94] Um, it, see, the thing is, I always thought that, and I'd be okay.
[152:30.94] If those who care will use something better.
[152:32.94] The problem is those who care, aren't using something better, which is the, we're, we're getting to, which is tricky.
[152:38.94] No, not, not as easily.
[152:50.94] I mean, in a sense, I mean, view right now, there could be a view scan for current view view right now.
[152:58.94] It doesn't work like solid or Svelte.
[152:59.94] It has signals, but it's more like, like mob X plus react.
[153:03.94] Like you could look at component or template re-renders in view and be able to get something like react scan.
[153:10.94] You could not get that in Svelte five.
[153:12.94] You could get in Svelte three, but you couldn't get that in Svelte five or solid.
[153:16.94] Um, but because of the way that our frameworks work for rendering, you already have a react scan.
[153:26.94] Actually.
[153:27.94] Um, I can show it to you for solid.
[153:30.94] Um, um, it's, it's, it's, it's really cool.
[153:36.94] It's built into the browser actually.
[153:38.94] So like when I click this button, you can see the, this number here updating.
[153:45.94] So I know that's kind of like the facetious answer, but, um, because we don't do anything beyond what's necessary when it comes to rendering the paint flashing or updates in the browser already do it for us.
[154:03.94] Do you know what I mean?
[154:04.94] Like it's, it's, it's not equivalent.
[154:09.94] It's just.
[154:10.94] Yeah.
[154:11.94] It's hard to see what's causing me render.
[154:28.94] Exactly.
[154:29.94] I think we have solid dev tools shows the signal graph and lights it up in a similar way, but there isn't much attachment to the UI.
[154:42.94] Um, like it will show you all the different signals and then show you how the updates propagate through the graph.
[154:51.94] It's pretty cool actually.
[154:53.94] And using that information is pretty valuable, but probably we need to put a little more investment in it to get it to a place where it's super round people.
[155:03.94] When it came out a couple of years ago, people were like, Whoa, that's cool.
[155:05.94] Like you can, you can see how you could take that technology and apply it in the IDE and then start like getting to a point where you could be like, Hey.
[155:14.94] Hey, when I call this set signal color, all the places that are impacted by this.
[155:23.94] Like w we have enough information conceptually that with the right type of analysis, we know exactly what updates in your app or potentially could update.
[155:33.94] What do you got here?
[155:37.94] Right now there are few if any bridges between frameworks continents, but these aren't built via migration guides.
[155:41.94] They're built via common extraction ideas and tools, which is why I'm so bullish and solid when I'm attempting to build.
[155:46.94] Very cool.
[155:49.94] It is definitely getting easier to switch between JS frameworks, but no one got fired for choosing React.
[156:02.94] Yeah.
[156:03.94] Yeah.
[156:04.94] God, the meaning of render is fun.
[156:06.94] Anyway.
[156:11.94] Do to do.
[156:12.94] Okay.
[156:13.94] Tanner, we got to your part.
[156:14.94] Yeah, no.
[156:15.94] Um, there's a couple of things that I think we're, it's so funny to say this because people are only just starting to catch up to the fact that we've kind of pendulum swinged over to,
[156:24.94] um, uh, you know, like being so server-centric, but this movement has been going for a very long time, like five years longer.
[156:31.94] Actually, I'd say, even though it went into full speed around COVID in 2020, uh, I'd say from 2017 or 18 onwards was really like led by like next JS.
[156:43.94] It was really the start of this kind of progression.
[156:45.94] So in a sense, we're getting on 10 years along this path, which is funny.
[156:49.94] I mean, spas had their, you know, 10 years and then like the last couple of years overlap, you know, like we're, we're kind of already starting to see people push back against that movement.
[157:02.94] Part of it obviously is if you notice that the newer, you know, meta frameworks all have spa modes.
[157:11.94] I think Svelkit was actually the first there.
[157:13.94] Solid office start was obviously built with that in mind from the beginning, but we took forever to come out.
[157:17.94] So I don't think we get any points.
[157:19.94] Remix is a recently added, uh, spa mode this year.
[157:23.94] Um, I'm Nuxt might've had it there.
[157:28.94] I'm not sure.
[157:29.94] I can't remember.
[157:30.94] I remember talking to them and it was, it was unclear whether they did, but the point is that most frameworks now that are traditionally SSR actually have a way to do one client only.
[157:41.94] Um, Remix is importing all their non-server functionality back to React router on a common base.
[157:47.94] I don't think it's because of server second.
[157:49.94] I think it's because of the conceptual router is the core of the universe mentality.
[157:55.94] And I think Remix, you know, probably already always should have been that way.
[158:01.94] Um, but it took a while to kind of get there.
[158:04.94] Um, but I, I think when you kind of combine these kind of factors together, when you consider, um, the approach that we saw start, we took to server functions, you know, this is a couple of years ago.
[158:14.94] Um, but we showed off this year, we introduced single flight mutations.
[158:18.94] kind of gives us kind of foundation, um, or things that developing in a way that's like spa centric or single page app centric, and then just having nice server add ons.
[158:30.94] Like I love the server function, single flight mutation mentality, because like, you don't need to server render the page to benefit from that.
[158:39.94] Right.
[158:40.94] You can use the same API as you've always used, you know, you can use like a query, you know, and then be like, Oh, I just want to, instead I hit an API endpoint.
[158:47.94] I'm going to, I have a monolithic set up, you know, I'm going to use server function, but it's part of that isomorphism.
[158:54.94] I think, I think basically the last few years have been very strong.
[159:01.94] Like you should be over here, even though like these solutions were kind of dragging, you could argue, um, on this side, I think we're actually seeing a bit of a pendulum swing back on onto the side.
[159:15.94] I know kind of short, but it's funny.
[159:19.94] Uh, maybe this is why you don't follow the hype, but I definitely went through a cycle where I was very concerned about the side of things.
[159:27.94] And I think a lot of people have been, and I think we're starting to see a bit of this, you know, part of it is like, obviously choose the right solution, but there was a hope that there'd be a singular solution.
[159:38.94] For me, it's very clear. Now it's just like, if you want to do this, use Astra, if you want to do this, use solid starter, you know, but like, um, I think that we're kind of starting to see that pushback and a big part of that also, besides the fact that, you know, we got the, the 10 stack start, um, which is, you know, pretty big on the react ecosystem kind of showing those mentalities, you know, um, we've also seen increase in like local first and sync engine technology.
[160:07.94] I'd like five startups reach out to me over the fall about their technology, because as I said, solid reactivity is a natural fit with this stuff.
[160:16.94] Um, I don't know what it's going to look like. A lot of these companies and things are kind of new, but, um, there's an interest there.
[160:28.94] I don't know where this interest is coming from because it's not e-commerce, but there is an interest there. So I'm calling it out right now.
[160:36.94] Um, you're going to see more and more of this kind of pushback. I don't, I don't, again, I don't know who's using local first or sync engines.
[160:44.94] I don't know what they're building, but there is an interest.
[160:52.94] I think they will potentially, but the problem is what do they do?
[161:00.94] Like, it's kind of, it's not an architecture. It's a different encoding for your UI. You could have always done this. Do you know what I mean?
[161:10.94] The benefits come from the architecture change. So it's like, I don't know. I, I think, I'm not sure if they will be more popular than RSCs.
[161:25.94] I just, I think that some people will see that they're a viable alternative and then, then realize that they don't even need them at all. Potentially.
[161:37.94] The islands mode is not in a state that I can recommend it to anyone. I, the islands mode is an example of me getting sucked pretty far into this and then being like, let's, let's pause for a moment and rethink.
[162:01.94] As I said, I went from being a hundred percent here to kind of being like, I should spend a little more time looking at quick again, but to be fair, since neither side is solving my problem, I've got other fish to fry right now.
[162:31.94] Okay.
[162:33.94] Server functions are really the, that, that was the thing. And what the, that was, that was the thing when I was first building solid start and I've made my first, what I, it's funny.
[162:45.94] I call them actions and then I changed it to server functions, but I called them actions back in 2021 and they didn't use a compiler.
[162:51.94] They used proxy where, because I had big on proxy where with state where you went up the property name, like dot, this, dot, this, dot, this to create a URL on the client.
[163:04.94] And on the server, the, you would just, it, it would register an endpoint when it hit the call essentially.
[163:16.94] Um, and the second I did that and I started plugging them into create resource solids, like data fetching primitive and the serialization, everything just worked.
[163:28.94] I was just like, man, this is, it's funny.
[163:31.94] Cause I I'm a guy who came up during the micro microservices age, like a bunch of nano machines on AWS pre-server lists.
[163:39.94] You know, I, I mean, I was building stuff on servers before that, but when I, you know, like .NET and garbage, but I didn't really manage the servers back when I was doing a lot of .NET stuff.
[163:49.94] When I like was far enough in my career where I was, you know, director of technology at a startup or whatever, like when I was building the stuff and I was the one responsible, it was during the like, uh, late 2000s, early 2010s.
[164:04.94] And the kind of rise of like the microservice architecture and the thought of going back monolithic scared me.
[164:10.94] I was like, yeah, like I did convert my company to serverless back in 2017, 2018, um, like AWS Lambda.
[164:19.94] But like, I did not think that monolithic was going to go.
[164:23.94] I use soap RPCs in .NET.
[164:26.94] Like I was not that, but then when I had that moment and I was playing around with it, I think it was Brillout.
[164:35.94] Um, who's behind, uh, um, uh, God, I can't remember the plugin SSR.
[164:44.94] I think he's rebranded it recently, but he, I was talking to him about it.
[164:47.94] Cause he's working on solid adapter and I was like trying to solve this problem.
[164:50.94] And he sits, he pointed me to one of his libraries wildcard.
[164:52.94] And I, when I saw that, like it was an RPC thing.
[164:56.94] Right.
[164:56.94] And, and, and then I put it together with the implications for a client centric thing.
[165:00.94] I was just like, this is it.
[165:02.94] Um, right from that moment, I was like, I realized I could invest heavily on solid's own router on its own ecosystem and not build a meta framework.
[165:09.94] And that's really what made solid start possible.
[165:11.94] I'd already kind of started on it, but that's when I knew that the, it was going to be a thing.
[165:17.94] Obviously eight months later, Nikhil Saroff came and showed us how server functions should really be done.
[165:23.94] Um, and then we pulled Tanner in and we tried to generalize it with bling.
[165:30.94] And then, um, you know, other people thought this was a good idea.
[165:35.94] Um, they added server functions to quick.
[165:37.94] Um, they added server functions to, or that they call them server actions either to next.
[165:42.94] Like it went through a whole cycle, but like, that was the moment definitely.
[165:47.94] Um, when like, like it clicked for me in terms of like what I'm isomorphic meta framework could look like.
[165:59.94] Right.
[166:00.94] So it's an overcorrection.
[166:01.94] Good to know.
[166:02.94] Thanks, Christopher.
[166:03.94] I, I, I, I don't know why it just, it's like on the, it's like the thing that's just fringing off the VC side that I keep on seeing.
[166:10.94] I I'm, I'm omnipresent of it.
[166:12.94] Cause I'm always talking to people, new customers, new, you know, people can use solid, but I like, I don't visualize it yet.
[166:18.94] It's, it's, it's a bit like, uh, people working on like the socket stuff, like the live view stuff.
[166:24.94] I don't know what they're building.
[166:25.94] Um, but I'm curious.
[166:35.94] Okay.
[166:40.94] Yeah.
[166:41.94] Yeah.
[166:42.94] Yeah.
[166:43.94] Yeah.
[166:44.94] Yeah.
[166:45.94] Yeah.
[166:46.94] Yeah.
[166:47.94] Well, I mean the, the beautiful thing about the offline, uh, the offline or the local first approach is that you don't have to worry about the async anymore.
[166:57.94] That part's been like, the thing is I kind of joked about this a little, a couple of streams ago, but with all these like technologies that we're working on here for server client thing, are we just building our own sync engines?
[167:08.94] Like this is when I was with dev on my last stream.
[167:11.94] I was kind of asking them like, this is really powerful, but like, do I want to build my own sync engine or would I rather just have someone else offload that and me just treat everything like it's a client app again, pushing very hard on this side of the, of the graph.
[167:24.94] So to speak, I don't know, but it's definitely not over here where the conversation is on that.
[167:30.94] So yeah.
[167:31.94] Yeah.
[167:32.94] Yeah.
[167:33.94] You're right here to have the conversations right here.
[167:36.94] Yeah.
[167:37.94] So maybe that's the forward, the path word for isomorphism is, uh, abstract the weird parts.
[167:45.94] You know, maybe there is a viable model.
[167:48.94] That's not split execution.
[167:49.94] I mean, it is, but it's hidden from you.
[167:54.94] Okay.
[167:55.94] So instead of your wins ways, I want to talk about the JS survey for a bit.
[168:01.94] We haven't talked about on the stream.
[168:03.94] And, um, as you guys know, I don't care about any of the results except for the front end framework section.
[168:07.94] So I can do, I don't need to do a full thing, but let's, let's look at state of JS 2024.
[168:18.94] And other people have covered this obviously.
[168:20.94] So you probably are familiar with everything you, you know, that.
[168:32.94] Syntax is still the most popular podcast followed by primogen.
[168:35.94] I didn't realize he had a podcast.
[168:38.94] Um, Theo has crept the second, the second most popular streamer.
[168:45.94] And most people building frameworks are generally in the top 15, 20 people on this list.
[168:58.94] Um, but libraries and front end frameworks are an area that is interesting to me.
[169:08.94] Um, because I, I, I know real numbers matter, but the ranking gives me a good comparison aspect here.
[169:19.94] And, uh, the biggest winner of front end JavaScript frameworks in 2024, at least according to the survey is Vue.
[169:29.94] I'm just going to put it right out there.
[169:31.94] Vue went up in usage.
[169:34.94] It passed angular, I guess last year, but they like not just on survey request.
[169:41.94] If you actually look at NPM, um, view is past angular.
[169:45.94] Um, as far as I've checked last time I checked, that's fine.
[169:50.94] They've always been close.
[169:51.94] Um, awareness seems to be about the same.
[169:56.94] It's interesting to me that reacts awareness is lower.
[170:00.94] I in this might say a difference between the type of people participating in the survey this year.
[170:11.94] Generally interest always goes to Svelte and solid smaller frameworks, right?
[170:17.94] These are things that you're haven't used, but you're interested in trying.
[170:22.94] But again, look at Vue most frameworks over time go down, right?
[170:28.94] What's this one quick?
[170:29.94] Sorry.
[170:30.94] Uh, HTMX, but Vue is up.
[170:35.94] Um, who else is this?
[170:39.94] Alpine slightly up.
[170:41.94] Interesting.
[170:42.94] I wouldn't expect that.
[170:45.94] But generally speaking, over time, frameworks go down.
[170:50.94] New tools come in and solutions come up.
[170:52.94] Sol and Svelte, as I said, have been pretty much the top for the last, um, the last few years, but, um, view.
[171:06.94] And I'm going to skip her attention for a minute.
[171:08.94] I'm going to go into positivity.
[171:10.94] Again, this is another thing.
[171:11.94] This is people who have used, or this is everyone, I guess.
[171:14.94] Positivity is people who have used and people who haven't used.
[171:18.94] This is just any kind of sentiment to your, towards your framework.
[171:22.94] And again, over time, sentiment tends to go, go down.
[171:36.94] Yeah.
[171:37.94] No, I, I definitely believe, believe this.
[171:39.94] I'm just thinking in the public space and largely that's where a lot of this voting happens.
[171:47.94] It's interesting though, right?
[171:49.94] Positivity, general, positive vibes.
[171:52.94] Like solid's been flatlined, which isn't good for a new project.
[171:56.94] It's like, we're, we're, we're like solidly number four, things come, things go.
[172:01.94] We're just like constant.
[172:02.94] Um, what's this one here?
[172:05.94] That's quick.
[172:06.94] This is HTMX.
[172:08.94] I'm gathering.
[172:09.94] Uh, but view, view went below us and then view went above us again.
[172:15.94] View in the last couple of years went from fifth back up to second.
[172:19.94] Svelte is still very, is number one on positivity.
[172:23.94] And if you look here, react has been going down.
[172:27.94] In fact, other than who's this red one?
[172:30.94] Preact.
[172:34.94] And who's this yellow one?
[172:36.94] Um, Alpine.
[172:37.94] Interesting.
[172:38.94] How Alpine can go off an interest, but down in positivity.
[172:41.94] Um, Alp react, Alpine, preact.
[172:49.94] And who's this lit?
[172:55.94] Like most things are heading downwards.
[172:58.94] View is going up and angular swung way up this year.
[173:03.94] Like if it was, it's doing a cup here.
[173:06.94] So you have flat lined here.
[173:07.94] I mean, it's to be fair.
[173:08.94] It's so far on the bottom that either there wasn't anywhere else for it to go.
[173:13.94] But look at this general positivity for both view and angular over the last two years is, is considerable.
[173:23.94] This caught my eye.
[173:24.94] Views of trips should be massively, massively, massively back in the whole reason, not afraid to innovate on their own ways.
[173:40.94] Right.
[173:41.94] This caught my eye because as I said, interest, it favors the small libraries.
[173:50.94] They're ones that like, Hey, I wish I could use this one day.
[173:53.94] Retention satisfaction also favors the small libraries.
[173:58.94] Because retention is, I am a user.
[174:01.94] Would I use it again?
[174:02.94] This is the one that when you have a product is satisfied score, you know, like your SAT score.
[174:06.94] Like everyone's considers the most valuable one when you're like a startup.
[174:09.94] So from that perspective, I'm happy.
[174:11.94] Solid has been the highest satisfaction of frameworks for the last four years.
[174:16.94] Edging out Svelte slightly.
[174:17.94] So solid users really love solid.
[174:20.94] But look again, view.
[174:23.94] Correct that.
[174:24.94] And actually Alpine.
[174:26.94] So if Alpine's positivity is down, it's because not abusers of Alpine.
[174:31.94] It's because everyone else doesn't care about Alpine as much.
[174:34.94] But this is good.
[174:35.94] But look at this one.
[174:36.94] Preact.
[174:37.94] It's interesting.
[174:39.94] So right now, the top five for satisfaction are solids, felt, view, preact, Alpine.
[174:48.94] Look at React on this.
[174:51.94] This is expected over time that your framework goes down.
[174:56.94] But what's weird is many of the other frameworks have actually gone up.
[175:04.94] not all of them.
[175:10.94] Angular, again, it was at the bottom.
[175:14.94] But in general, if positivity is kind of like how everyone sees you and this is how your own users see you, putting both of these stories together means that view and Angular, at least from a reputation standpoint.
[175:33.94] Are very impressive.
[175:39.94] And both are large enough ecosystems based on usage to actually make a difference here.
[175:46.94] So yes, if people are leaving React, usage doesn't seem to be impacted.
[175:53.94] If you look at the actual values, React, you know, well at the top.
[175:59.94] But if you look at it like generally in terms of where people are sitting, in terms of like how they feel about these things, React's general positivity has been on the way down.
[176:12.94] And its users are, you know, I mean, again, this is this is Angular's original line.
[176:18.94] Like, it's kind of expected.
[176:19.94] If you're at the top, you have to go somewhere.
[176:21.94] But it's, it's interesting.
[176:24.94] So what do I have to say here?
[176:27.94] Yeah.
[176:28.94] One thing that caught me with the results this year was a growing dysfunction with our tools.
[176:38.94] Some have shown more positivity than others.
[176:41.94] This differs from Satisfaction, which is focused on the current user's tools and caters to smaller players like Solid.
[176:48.94] And so, yeah, it's less about like, yes, I know we're biased.
[176:54.94] It's funny because they used to make the SAT score like the front page one.
[176:57.94] But I think after Solid won the first year or came first, they stopped doing that because a bunch of people complained because it wasn't popular.
[177:06.94] And then they made usage the front page.
[177:09.94] But what I've said here is these aren't the tools that I talk about as much.
[177:16.94] But when the economy is tight, maintenance is a concern.
[177:19.94] They tend to shine.
[177:20.94] Both Vue and Angular frameworks, I've had, I'd have my eye on this next year.
[177:23.94] Not because I expect to be blown away by some innovation, but because these tools go the extra mile to make developers happy.
[177:30.94] I did make one snipey little comment.
[177:33.94] Sometimes the best tool isn't the best tool.
[177:34.94] I think this is a little misunderstood.
[177:36.94] I mean, like, you know, I'm always thinking in terms of like, mechanically, like the best possible solution that gives you the best possible solution.
[177:45.94] It gives you the best possible results.
[177:48.94] That best that I'm putting in quotes isn't always the best solution for you.
[177:52.94] So, yeah, I do think this is a difference the last two years compared to like the almost the whole decade before.
[178:04.94] Reacts slipping from perception basis.
[178:07.94] As I said, positivity is about perception, not about actual users.
[178:11.94] Like you expect people to be dissatisfied, but perception basis, it's slipping.
[178:17.94] So I think it's a very interesting time, especially for Vue.
[178:22.94] But Angular, you know, because of where it's sitting generally, but even Angular is showing like it's here to stay.
[178:29.94] I mean, it's much lower, but like, I think this is a good time to, you know, if you're still worried about job market and worried about maintenance, to look at both frameworks seriously.
[178:43.94] Angular has done amazing stuff for the last couple of years in terms of modernizing the framework.
[178:50.94] And Vue, sorry, maybe I don't have much to say about Vue, but people like it.
[178:59.94] Vue Vapor was going to be interesting, but I don't think that's like a driving force here.
[179:11.94] I'm obviously a big fan of Vue Vapor, but maybe it's just people are sick of React leaving, but enough are coming to web and have to balance it out.
[179:19.94] Yeah. I mean, there is obviously that too.
[179:22.94] I often say that the winner or the incumbent has to give up their position.
[179:26.94] They can't just be beat, so to speak.
[179:31.94] Like when React came out between Angular 1 and Angular 2, it was because of Angular 1, Angular 2.
[179:37.94] Angular had the top slot. They had to lose it. It's not that React had to win it.
[179:42.94] And I feel like that's kind of what's happening a bit of right now.
[179:46.94] It's interesting. As I said, Vue is probably, it's a funny thing for me to say, because I don't have much to say about Vue.
[179:53.94] Maybe that's part of its appeal, but Vue is the framework I'd be definitely watching most over the next 12 months.
[179:59.94] I think Angular is also very, very interesting.
[180:10.94] Join our Discord. I mean, there's not many postings, but usually a couple come up a month.
[180:15.94] You know, there's waves of them.
[180:18.94] Maybe not as much to last a little while.
[180:22.94] It's interesting because as I said, there was a lot of startups doing stuff with Solid.
[180:27.94] Solid's getting more popular, so there's like a balance where we're getting more of that.
[180:30.94] But I also think that things are a little tighter now than they've been, you know, a couple of years ago.
[180:35.94] I'm getting that sense.
[180:37.94] All right.
[180:38.94] I'm sorry. Let's go back here.
[180:41.94] Okay. Let's talk about signals a bit.
[180:46.94] Yep.
[180:47.94] And it's funny, Vue clicked with Angular devs because it actually had a similar syntax.
[180:51.94] Where, like, sometimes it's that surface level syntax stuff that, like, wins people over, right?
[180:56.94] There's some people who will never accept JSX, even if they're wrong.
[181:00.94] So...
[181:01.94] The trickiest part about it is...
[181:11.94] Vue going to Vapor is even a bigger change than React, than Svelte going to Svelte 5, I think.
[181:18.94] Like, especially because it's like, they almost have to pace themselves because the move...
[181:25.94] I mean, they succeeded with the move to Vue 3, I guess, now, for the last couple years showing the Switch.
[181:29.94] It took, you know, a bit, like two years.
[181:32.94] It's just like, how much do you change so rapidly?
[181:35.94] I mean, I'm impressed from the fact that they can go from Options API to exposing their signals to finally Vapor.
[181:47.94] Like, that's a very well-executed plan if they can pull it off over, like, a six-year period, right?
[181:53.94] It's kind of crazy to think about it now when I think back to it.
[181:56.94] Like, Solid's approach, you know, and I mean, let's say SJS or Surplus, like before, it goes back to 2016.
[182:06.94] And it's taken web dev 10 years to catch up, right?
[182:10.94] Like I said, I didn't completely invent this approach, might have popularized it, you know, but like, it took...
[182:17.94] You could have picked up Solid in 2018 or 2019 and have almost the same experience as today and, like, been there like eight years ago.
[182:26.94] Like, it's kind of crazy.
[182:28.94] Yeah.
[182:30.94] I don't feel like Solid's as far ahead of the others now.
[182:34.94] They've definitely caught up over the eight years.
[182:36.94] I'd say we're only a couple years ahead now, but it's kind of, it's just kind of crazy to watch that whole cycle play out.
[182:47.94] You know, and everyone's on their own journey point along the signals journey.
[182:52.94] Yeah.
[182:53.94] Yeah, it's going to increase the gap, but by how much?
[182:57.94] Svelte will have those same features, I bet, within two years.
[183:02.94] Year and a half, probably.
[183:04.94] Svelte is right on our heels.
[183:10.94] There's some syntactical things and conceptual things that might be hard for their ecosystem to follow, because I don't know if Svelte 5 ruins got everything perfectly right, but they, like, compared to where Svelte 3 is, they jump leaps and bounds.
[183:21.94] That's just from my perspective.
[183:22.94] I'm not saying this to sound like I know it all.
[183:24.94] I'm just saying, like, my perspective on, like, where frameworks are and their understandings of how signals play into their roles.
[183:31.94] Do you think Vapor's just came off all the people who choose Svelte 4's main finish rather than just wanting to cut edge?
[183:40.94] Oh, yeah, I mean, no, I'm fine with it.
[183:43.94] I think some of our community was actually more threatened by Svelte 5.
[183:46.94] I don't think anyone's too worried about Vue Vapor specifically.
[183:50.94] I mean, Vue is more popular than Svelte, so there's that.
[183:53.94] But there's, like, you know what, all three solutions are very philosophically different, which is kind of a big piece.
[184:02.94] Me and Evan share a certain pragmatism on mechanics that I think might bring Vue and Svelte closer together.
[184:11.94] But then both of them are very far off in, like, Syntax Sugar Land, which is why Sol has always appealed more to React devs or would-be React devs, just simply because we're about just JavaScript or about fundamentals, just about making, you know, the mechanics work in a way that's consistent.
[184:29.94] So, yeah, I mean, no.
[184:33.94] And as I said, Svelte's actually closer on the scale to where we're at.
[184:39.94] I think anything we're doing in solid right now might take another five years to show up in Vue.
[184:44.94] So I'm not too worried or concerned about that.
[184:47.94] Like, people who want to continue pushing this stuff forward know exactly where to go.
[184:57.94] Anyway.
[184:58.94] Where were you here?
[185:02.94] "It is no secret that pretty much all non-React frameworks run off signals now, but some time has passed and developers are starting to understand the depth of the trade-off's presence.
[185:09.94] While this author's biased opinion that these are minor issues, I do expect people to come to a new appreciation for React."
[185:15.94] This is why I was careful what I wanted to say about it.
[185:17.94] It's funny, this whole stream we've been talking about React negativity, I am just starting to see that pushback now again.
[185:24.94] Like, I saw the pushback before where people are like, you know, I like React.
[185:27.94] Maple's a classic example of this.
[185:29.94] Who is like, I like React principles better.
[185:32.94] I'm not, you know, a big fan of solid.
[185:33.94] I'm like, I'll convince you one day, you know.
[185:35.94] But, like, there's some of that.
[185:40.94] But mostly it's people who didn't try it.
[185:42.94] Then people try it and they're like, "Oh."
[185:46.94] People are finally getting past the "Oh" standpoint now.
[185:51.94] I think, I think, I think people, a lot of people outside.
[185:56.94] Like, solid ecosystem, we've been using signals everywhere now.
[185:59.94] So, I say most of solid ecosystem now is like over here.
[186:05.94] But I think the people who picked up signals in the last couple years are kind of here.
[186:11.94] like, Angular's journey might be here right now.
[186:18.94] But like, yeah, I mean, we're gonna see.
[186:22.94] I think, I think, I think we're definitely getting over this peak that's happened the last couple years.
[186:29.94] Um, and I, I'm starting to see people go like, "No, I just like React's, you know, simplicity quote unquote."
[186:38.94] Um, I expect more of that to happen now legitimately.
[186:43.94] Because before people said that stuff and they actually had no clue what they're talking about.
[186:48.94] I, I think a lot of people underestimate what makes React good.
[186:59.94] So funny, as I said, this is, this is why syntax and stuff wins framework battles or whatever.
[187:11.94] Because this is, I'm sorry, it's the dumbest thing.
[187:16.94] It like really doesn't matter, doesn't impact anything.
[187:21.94] It actually makes your code less clear what it's doing.
[187:24.94] But like, if you're used to doing it, it trips you up.
[187:30.94] Like every time it's just like, I'm supposed to do it this way.
[187:33.94] There are, yeah, someone mentioned, yeah, Dev mentioned there's Babel plugins, Svelte compiler does it.
[187:39.94] There's, there's different solutions to this problem.
[187:41.94] But I think those solutions are actually bad because they, they hide what's happening.
[187:46.94] Um, yeah, I mean, if, if, if I, if I wanted to be disingenuous, I could say that I'd be like, yeah, we'll just fix it with our compiler.
[187:58.94] You know, be solid.
[188:00.94] I just, I don't think that's, that's good.
[188:05.94] My, what I'm getting at is, I think people should have appreciated react more.
[188:15.94] Everyone's like really swingy on this stuff.
[188:17.94] Even if I, from an implementation standpoint, you know, aren't completely stoked with react.
[188:26.94] I think that we should appreciate react.
[188:29.94] You know, you, you have to understand both sides.
[188:32.94] If you want to understand the trade-offs.
[188:34.94] Um, that being said, signals are still evolving.
[188:36.94] The collective experience in this area has grown immensely.
[188:38.94] That's the biggest benefit here.
[188:40.94] That's what I was asked if I cared about ViewVapor.
[188:42.94] The fact that everyone's using signals is a bigger validation of what we're doing than anything.
[188:48.94] The fact that it's not just signals, they're going to fine-grained reactive rendering approaches.
[188:53.94] Like the, like Svelte 5 and, and, uh, ViewVapor.
[188:58.94] When you look at the compile code and you take solids compile code and you just like put them next to each other.
[189:02.94] You're like, this is the same thing.
[189:03.94] Like this, this, this is way more powerful.
[189:08.94] You know, we talked, you know, when someone would talk about say react being the last framework, it isn't because that's not what frameworks are doing.
[189:17.94] Like it's not, you know, and having so many new eyes on it is going to change things.
[189:29.94] The funny thing is we had like a decade with the VDOM to understand it and understand what we could do within all the applications.
[189:35.94] And so many react developers trying it and doing stuff and expanding the capability to show what's capable of signals.
[189:43.94] Haven't even got a fraction of that attention.
[189:45.94] People have no idea of what we're like, where this is going and how much more we'll be able to do.
[189:50.94] This is a fundamentally more powerful technology makes it more dangerous potentially, but it has the ability and capability of doing so much more.
[190:02.94] You can think of stuff today, you know, give guys a quick, you know, another shout out.
[190:07.94] Um, resumability is driven by signals.
[190:10.94] You don't get that granular ability without signals.
[190:14.94] And that that's like only one way that you could like leverage them.
[190:19.94] I don't expect necessarily like a huge thing this year.
[190:22.94] I know you guys are all hyped for solid 2.0.
[190:24.94] I think it's going to be like a lot of little small improvements and innovations, but they're going to show the unique value proposition.
[190:30.94] People don't get it yet still.
[190:32.94] But I think that we're starting to have a collective base that the benefits are people could start to understand.
[190:38.94] This is way more than about performance.
[190:40.94] All right.
[190:41.94] Yeah, I, um, this has been years, honestly.
[190:48.94] This is like, yeah, uh, alien signals.
[190:54.94] I have heard of this whenever a new benchmark comes around, you believe me, I get flagged on it.
[191:00.94] Um, I have not looked at the implementation details.
[191:02.94] I'm my stage of where I am right now working on the solid signals implementation is I'm still, we're based on reactively.
[191:08.94] Still, you know, if you look at X reactivity in those benchmarks, that's actually solid 2.0.
[191:12.94] Um, funnily enough, uh, people already, they don't realize that they're already testing solid 2.0 in that, in that, uh, in that benchmark.
[191:21.94] Um, so it's, it's, it's, it's significantly ahead of where solid is.
[191:25.94] It's not as fast as alien, not as fast as felt five either.
[191:29.94] I have not looked at it.
[191:30.94] My, as I said, I've been working on mechanical things for features mostly.
[191:34.94] Like I, I've implemented suspense again in the signal graph, which is really cool.
[191:39.94] Cause when I, it's really cool when you go over to like the, the render library and you make this suspense component and it's like create suspense.
[191:44.94] Like, like, you know what I mean?
[191:46.94] Like it's, it's, it's even though there's no Dom, um, expectation there, um, in the core API, the fact that it's something that can be represented through base primitives is really powerful.
[191:59.94] And for me, I've been working on that.
[192:02.94] The idea of react, like original reactivity, uh, dependency graph.
[192:09.94] And then the innovation that came from surplus or an SJS and that we brought to solid.
[192:15.94] Um, and now most fine grain renders do this, um, is the ownership graph.
[192:20.94] The idea almost like components, but that signals can own signals and you can basically build the whole world out of signals.
[192:27.94] When I was working on suspense and transactions in solid 1.0, I started seeing commonality patterns around scheduling.
[192:34.94] And I, and we had a single scheduler and I did a bunch of hacks around it with 2.0.
[192:38.94] What I did was I rewrote the scheduler to be able to be multi queued and hierarchical as a mechanism to be able to control things like suspense off screen and all this stuff in a direct mechanical way that you can actually.
[192:50.94] As a primitive itself that you can build.
[192:53.94] And I think that's going to be the groundbreaking change, but that.
[192:56.94] With the obviously non-nullable async and whatnot, but like basically the capability of these primitives will let us model much more powerful things, much simpler, which I think is going to be really exciting.
[193:10.94] I do hope to look at the performance basics.
[193:13.94] Uh, Milo is going to look at alien signals and see if we can get like the raw updates a bit faster.
[193:17.94] That being said, as I said, early in the stream signals performance itself is not that important.
[193:22.94] Um, because it's not the load bearing part.
[193:24.94] The rendering is, um, you can double the speed of your signal library in those benchmarks and make no dent on the JS framework benchmark, um, or minimal.
[193:35.94] So I, I do, I obviously want to make stuff faster, but it's not a priority as of yet, but I am definitely very interested to check, check out alien signals.
[193:45.94] There probably should be, but as I said, it's similar to looking at the alien signals stuff.
[193:52.94] I want to.
[193:56.94] The problem is when we get into the transactional piece, it's going to be hard to break it out.
[194:01.94] It's going to get weaved into the, to all the little aspects of it.
[194:05.94] I don't know how swappable the underlying implementation is going to be.
[194:07.94] I guess we'll see.
[194:07.94] I'm trying to keep things really separate this time.
[194:08.94] That was the problem.
[194:09.94] It's all 1.0.
[194:10.94] The reason we got stuck.
[194:11.94] We, people are like, Ryan, why is solid signals eager and why all this and all the, like all these questions.
[194:17.94] And it's like, because the second I added transactions, you know, transitions, you know, like the concurrent rendering and solid back in 2019.
[194:23.94] Uh, God, it was five, six years ago.
[194:26.94] Um, it's been very hard to update this core signals, this library.
[194:30.94] Like the constraints, there were two, like, I just wove everything through.
[194:34.94] I told you it was all tree shakable, but it's, it's very entwined.
[194:38.94] Uh, right after the 1.0 release around the 1.2 time period, I tried to actually pull it out and like read design transactions.
[194:44.94] I'm, I, I don't like going into that code right now.
[194:48.94] Um, we have a, as I said, 2.0 is a complete signals rewrite.
[194:51.94] Cause that's what, that's what needed to be the, uh, addressed.
[194:54.94] Our core approach has aged, right?
[194:57.94] We, we had signals right back from the beginning, you know, and this is the same signals and it was faster.
[195:04.94] It's time.
[195:05.94] It's not fast now, but you know, seven years later, but, um, I haven't been able to really touch it in five or six years.
[195:13.94] No, no, the, the, the, the solid talk is only came up recently because it's one section on signals.
[195:23.94] We've been talking about react actually most of the time.
[195:26.94] One signals topic topic.
[195:31.94] Um, but yeah, I, I think, I think the space.
[195:42.94] Um, I think the spec is interesting, but like anything, um, I want to explore, uh, what's possible rather than be constrained by like how to like standardize it.
[195:59.94] There, there's actually a really good comparison here.
[196:01.94] I, I, uh, I don't know if I can find it.
[196:03.94] I don't know if I can find it.
[196:04.94] HTMX 2.0.
[196:05.94] Um, is it, was this an old blog?
[196:11.94] No, I don't know.
[196:13.94] Maybe, maybe I'm wrong.
[196:14.94] Maybe it was a different release.
[196:15.94] There's something that Theo recently covered on a stream.
[196:18.94] And it was basically where Carson was saying that his goal was that HTMX be like jQuery.
[196:24.94] And it's funny because if you watch this stream, maybe a year ago, or was it the first time I changed it or two?
[196:30.94] I basically said that HTMX didn't interest me.
[196:33.94] It's the new jQuery.
[196:34.94] Well, he's gone and owned it.
[196:37.94] And one of the things he's saying is like, we don't expect our major releases from now to have any changes, like breaking changes.
[196:46.94] We won't change the defaults.
[196:47.94] We won't do anything.
[196:48.94] We just, you know, small implementation improvements and all this stuff.
[196:50.94] I'm like, is that even a major release then?
[196:52.94] Cause you're not actually like, why even release anything, you know?
[196:57.94] But basically his goal, he was like, like jQuery, I want to melt into the browser.
[197:02.94] Right.
[197:03.94] And it's so funny because when I'm, I'm thinking about stuff, I'm like, it's like on the opposite end of the spectrum.
[197:10.94] Right.
[197:11.94] Cause in a sense, signals getting in the browser, is that like, have we won?
[197:14.94] Have we become jQuery?
[197:15.94] Like, is our approach going to be the one that's adopted?
[197:19.94] But like, there's, there's two sides of that coin, right?
[197:22.94] Like one side, you can measure success by the fact that like, it becomes a standard, you know, in the sense, like Jamstack became the standard.
[197:28.94] That's how people build modern serverless websites.
[197:31.94] But on the other hand, like, um, what happens to jQuery itself, right?
[197:40.94] jQuery is on a lot of pages that wishes it was not there.
[197:43.94] I've never tried to get jQuery out of eBay.
[197:45.94] Right.
[197:46.94] Um, it's, it's kind of funny.
[197:49.94] Um, because, uh, I could go on a whole separate tangent about that, but it was just one of those, those, those kind of weird things.
[198:01.94] Like everyone aspires to be the disappearing framework.
[198:04.94] You know, I, you know, now that I use web components or something, I, I don't need a framework, but then it's like, like what happens to the thing that was there?
[198:12.94] Okay.
[198:13.94] Okay.
[198:14.94] Is this a HTMX?
[198:15.94] HTMX dot org.
[198:16.94] I'm just like typing it in here.
[198:17.94] Essays.
[198:18.94] Future.
[198:19.94] Yeah.
[198:20.94] Yeah.
[198:21.94] Yeah.
[198:22.94] Is it the new guarantee query?
[198:23.94] I don't think it's arrogant as I said, this is exactly my original take of HTMX.
[198:38.94] building the hundred year web service.
[198:45.94] This is how it's a video.
[198:51.94] I don't want to watch that.
[198:54.94] Yeah.
[198:55.94] I mean, his goal is for his thing to become a standard.
[199:01.94] No new features as a feature.
[199:06.94] People shouldn't be pressured to upgrade HTMX over time unless there are specific bugs they
[199:12.94] want fixed.
[199:13.94] They should feel comfortable that HTMX that they write in 2025 will look similar to HTMX they
[199:18.94] write in 2035 and beyond.
[199:20.94] Intercooler is right.
[199:24.94] Many JavaScript problems are updated and dizzying pace.
[199:26.94] Intercooler is not.
[199:27.94] It's not because it's dead, but rather because it's mostly right.
[199:30.94] Basic idea is right in the politician.
[199:31.94] This is such an interesting idea, right?
[199:33.94] The idea that you think that you've solved everything.
[199:36.94] I think that statement's more arrogant than calling yourself the new jQuery.
[199:43.94] To think that nothing needs to change because you got it right.
[199:48.94] The documentation will improve, tests will be updated, blah, blah, blah, but there will
[199:55.94] be no massive rewriting, constant updating.
[199:57.94] This is a constant software industry in general in the front of the world, which is a complicated
[200:01.94] levels of churn.
[200:03.94] yeah, I, I, what, what this is actually a bigger sign to those being not ambitious.
[200:12.94] I think, I think it's good that he understands exactly what his intention is for the project.
[200:17.94] It's just funny because like, I don't know what version are they on right now?
[200:22.94] Like two, like some of them should expect things to continue working as before.
[200:28.94] Right?
[200:29.94] Yeah, it's funny.
[200:36.94] I mean, that's what the web platform is for.
[200:38.94] And I know that he's probably working with the web platform.
[200:40.94] Yeah.
[200:46.94] I think they said try triptych project into the standard stuff.
[200:51.94] See, that makes sense to me because libraries exist so that you can do what the platform
[200:55.94] can't do.
[200:56.94] So writing a library that doesn't update ever is the most uninteresting thing possible because
[201:01.94] like then it's in the wrong place.
[201:03.94] It should be, if it's a pattern is right and it's never going to change, it should be part
[201:06.94] of the platform.
[201:07.94] Otherwise, yeah.
[201:08.94] Yeah.
[201:09.94] I have him because of his philosophy.
[201:12.94] I should figure out how to codify that, I guess.
[201:14.94] Yeah.
[201:15.94] I think that's the gist of it.
[201:16.94] Let's see here.
[201:17.94] I think he wants to support different age.
[201:18.94] Yeah.
[201:19.94] Put patch delete.
[201:20.94] Yeah.
[201:21.94] I mean, sure.
[201:22.94] Why not?
[201:23.94] We should have that.
[201:24.94] Funny thing is forms aren't.
[201:26.94] It's funny.
[201:27.94] We try and model stuff off forms because of declarative, but like this is one of the funniest tensions
[201:34.94] when you look at stuff like remix and all that stuff.
[201:35.94] People like look at and they're like, in some ways it like gets rid of a whole bunch of code.
[201:39.94] Like I have a talk that I did last, like for, I think it was for the dev world last February.
[201:43.94] And I go through this evolution of like the history of single page apps, all in solid start.
[201:48.94] I started a client side app and then I do this and I had a feature and I basically go through the full history of, of how we developed different client side apps and then make a joke at the end when I realized like, Oh, I forgot to turn on SSR.
[202:01.94] People assumed it was on because of all the features I was using.
[202:04.94] But in that.
[202:05.94] Talk, um, the code did disappear when I did the smarter forms and the, you know, the actions and the query cache and all this kind of stuff.
[202:23.94] Like it did.
[202:24.94] It was just kind of funny because.
[202:26.94] One of my first pushbacks against it is it's, it's a lot less capable, um, in, in a certain way.
[202:38.94] To represent things that way, like you really kind of got to go out of your way.
[202:42.94] But again, if all the logic is on the server for the most part, um, kind of works except for as a, the, the, the, the, the, the model comes into a shared space.
[202:55.94] The model comes into a shared state and preservation, but yes, there is nothing wrong with doing this.
[203:01.94] I guess that's the key thing, different verbs.
[203:04.94] Cause yeah.
[203:05.94] Post and get.
[203:08.94] Yeah, no.
[203:12.94] That's good.
[203:25.94] Yeah.
[203:26.94] Yeah.
[203:27.94] Yes.
[203:32.94] Yes.
[203:33.94] Couldn't say this.
[203:34.94] We couldn't agree more.
[203:35.94] Honestly, this scares me.
[203:36.94] I hope we don't get here for a while.
[203:40.94] This whole like standards and the way signals bind to the Dom.
[203:43.94] It's, it's tricky.
[203:44.94] Even the web platform.
[203:53.94] Yeah.
[203:54.94] It could deserve to.
[203:55.94] A little bit of the way there.
[204:00.94] We will never get past fully past in text reality.
[204:02.94] Come terms with.
[204:03.94] Yeah, I know.
[204:04.94] Yeah, no, I, I'm, I, I think this is app.
[204:15.94] If this is his goal and he's put it out this way, I think this is great.
[204:18.94] I mean, honestly, it's very difficult as a single maintainer.
[204:21.94] You have to make that choice of whether you're going to continue being the, that guy, or if you're going to try and influence and bring in other people and expand out your world.
[204:32.94] And, and, you know, almost it's like the classic, like anytime someone is good at something, do they just do it themselves or they make a company out of it?
[204:43.94] Like it's at a smaller scale.
[204:45.94] So like, I have respect for this in that he knows exactly his outcome.
[204:52.94] What's very different, as I said, from where with solid, because solid, I don't know where this goes.
[204:56.94] I just know that we can do better.
[204:58.94] So it's like, it's like a very different place, but I wanted to bring this article up because it's like the, it's a different perspective of looking at how a library or framework we get towards standardization.
[205:14.94] Right.
[205:16.94] Very cool.
[205:17.94] Very interesting.
[205:18.94] Uh, what else?
[205:20.94] So what section we're in here?
[205:21.94] Uh, looking forward.
[205:23.94] Yes.
[205:24.94] What's the next topic?
[205:25.94] Web components.
[205:26.94] No, I, I don't really have anything more to say about web components.
[205:31.94] I had to include it because I knew people were, would, would expect it.
[205:37.94] So I obviously linked to my article.
[205:39.94] I, I just don't really have anything to say about web components either way.
[205:44.94] I talk about some things not being interesting.
[205:47.94] Web components are definitely in that pile.
[205:51.94] Okay.
[205:52.94] Um, so yeah, overall, where I think in here, I'm not predicting some big technology jump to be fair.
[206:01.94] There wasn't a big technology jump this past year either.
[206:04.94] Um, but what I've noticed is that people aren't in that place where they want it again.
[206:10.94] I think no one's creating a new JavaScript framework anymore.
[206:13.94] We're not going through that buzz.
[206:14.94] So we're, we're not getting pushed back.
[206:15.94] If someone does, you know, like Brizza or something, people are actually pretty supportive because it's a rarer thing.
[206:21.94] Um, but yeah, it's just, there's a different sense here.
[206:26.94] It's funny.
[206:27.94] I wrote this, I swear before the whole Jordan walk templating view GSX thing, because I've, this has been going on for months, but I said, I've watched the conversation to devolve from whether presumably makes sense versus partial hydration to the, who has the best templating syntax.
[206:42.94] Again, this has been going on for months now.
[206:45.94] I know that one last week blew up, but, um, it's just like a sign of where people are at.
[206:52.94] People have ever kind of accepted the fact that, you know, I'm using react, you know, and they're not, or they decided, Hey, I'm going to try a new tool, but it, you know, which is why people are like doing these kind of subtle battles.
[207:07.94] Cause no one's talking about the technology.
[207:12.94] It's like, it's like, did you know our four component has a fallback?
[207:14.94] No.
[207:15.94] This is okay.
[207:21.94] Cause I think it's kind of a reflection thing where people are almost.
[207:25.94] Yeah.
[207:26.94] I dunno.
[207:26.94] Like it's, it's, it's, it's, it's pushed out to far enough along the line.
[207:30.94] Um, so I don't, I don't, I think it's a good time for us to kind of like reflect where we are.
[207:36.94] I think I felt 2024 was kind of coming to terms of where things are at.
[207:41.94] Um, so, you know, maybe there isn't a lot of innovation around the corner, you know, it's on the horizon, but like not right now.
[207:51.94] That's okay.
[207:52.94] I say that literally as I'm working on some of the most exciting stuff ever in solid 2.0, but I mean, in general sense, I don't actually think that most of the community is actually, you know, they, they're kind of hitting the end of their line from that 2020 stuff.
[208:03.94] The server stuff's kind of drawn drawn out, you know, all the big changes and movements have happened.
[208:08.94] Yeah.
[208:09.94] Next month, they're going back to CS versus tailwind completely.
[208:15.94] Yes.
[208:16.94] The, the truth is it's just cause I think there's a lot of complexity.
[208:28.94] Nobody really wants to think.
[208:29.94] I think after the whole push, like, Oh, PPR, this RSC's this, you know, resume ability, even islands.
[208:38.94] This people are just like, I'm just building a react app, you know?
[208:41.94] Um, or maybe a view app, you know, or angular really actually, you know, it's, it's hard to make decisions on what technology worth investing in.
[208:55.94] So I think people kind of aren't, I think there's a lot of the raw capabilities of the next generation here.
[209:00.94] The fact, like every time I look at quick and I mentioned them again, I just see this potential technology just sitting there, you know, um, like the pieces are there, but I'm not sure the right.
[209:13.94] They've come together in a super consumable piece, not just quick, like in other places too.
[209:18.94] Like you look at maybe stuff that Aiden's doing a million or like, like, or like these, like these snippets of it all over the place.
[209:25.94] But I think we're at least acknowledging that in our quest for simplicity, we set our self on a path that adds complexity back.
[209:33.94] A single solution hasn't shown itself.
[209:36.94] HTMX is not going to take over the world.
[209:38.94] Right.
[209:38.94] A couple of years ago, that was kind of the thing.
[209:40.94] I know maybe it was partially memed, but you know, it's a great option.
[209:42.94] You know, it's a great option to have react isn't necessarily any more complex at doing things in other solutions.
[209:47.94] Right.
[209:47.94] What I'm getting at is like that, you know, some people for them, they say, you know, react seems simpler.
[209:52.94] You know, I know that confuses the hell out of people, but like, there is a certain mentality that's there, especially if you've, you know, just don't want to think about things and good enough is good enough.
[210:08.94] Async and async and async and client server interactions by extension are complex.
[210:17.94] Right.
[210:18.94] We've seen that.
[210:19.94] Like, there's a reason waterfalls, all these things, like, all these pieces are really tough.
[210:26.94] And compilers can't solve issues, but they can.
[210:30.94] Oh, I'm getting rated like right in the middle of my, my, uh, my, uh, my, my, my, my conclusion here.
[210:37.94] Oh, raider from Theo.
[210:42.94] Did Theo rate us?
[210:43.94] Did he finish his announcement?
[210:44.94] 424.
[210:45.94] Whew.
[210:46.94] Bam.
[210:49.94] Yeah.
[210:50.94] Today's been pretty good stream.
[210:53.94] I don't, I don't know what Theo launched.
[210:55.94] I w I was curious, but I, it being Friday, I stream every Friday.
[210:59.94] And today is actually one of my more generally more interesting annual streams where I talk about the state of JavaScript frameworks, um, at a very holistic level across the whole ecosystem.
[211:11.94] So, yeah, uh, I was literally just getting to the conclusion of my article that I wrote.
[211:19.94] Yeah.
[211:20.94] We were talking a little bit creating with the HTMX right now.
[211:24.94] Well, there you go.
[211:25.94] Yeah.
[211:26.94] Um, talking a bit about a local first, talking about compilers, talking about AI.
[211:30.94] Keep, ignore me.
[211:41.94] Keep ranting.
[211:42.94] It's 2025.
[211:43.94] The release of Marco six.
[211:45.94] We're not talking about Marco six.
[211:47.94] I see that 2024 wasn't.
[211:50.94] And I told them if they didn't get it out in 2023, I had to stop talking about it.
[211:54.94] So yeah, I was wondering who is building local first stuff.
[212:01.94] Honestly, very, very interested.
[212:05.94] I see.
[212:10.94] Cause this one time.
[212:12.94] Well, cause the technology is present there.
[212:15.94] And I, and I see a lot of startups and people trying to innovate in the space.
[212:20.94] And I've been bunch of them keep on reaching out to me because the potential assaults granular
[212:25.94] propagation.
[212:26.94] But I just, I was like, I don't know what you're doing.
[212:28.94] Yeah.
[212:32.94] I mean, I suspected as much, maybe there's enough room for improvement.
[212:36.94] That's why, uh, why, yeah, there you go.
[212:47.94] Anyway, um, what I was trying to get to here.
[212:52.94] It's funny.
[212:53.94] Cause I'm like literally at the tail end of my conclusion on this stuff with just that,
[212:56.94] like, it's okay.
[213:00.94] That stuff's complex.
[213:01.94] I think, I think we're at a phase right now because of where innovation is that you can
[213:05.94] probably ignore most of this complexity and just go build stuff because it's not going away.
[213:12.94] None of these solutions quite cut it.
[213:14.94] Pick something that makes sense with you.
[213:15.94] I know this is like the generic, like senior software.
[213:18.94] It depends answer, but I actually mean it this time.
[213:20.94] Cause I'm usually the guy that's like, go try this new thing.
[213:23.94] It's really cool.
[213:24.94] Um, I actually do think right now we're in a like, get it done time period.
[213:28.94] And because of that, I think people who do seek to innovate you're under the radar in a way that you haven't been in for the last couple of years, which means.
[213:38.94] I really want to see what you're going to build because I know I'm building really cool stuff.
[213:41.94] Um, solid 2.0 is already in progress.
[213:45.94] Now.
[213:46.94] If you go in the next branches on our repos, you will see movement.
[213:50.94] Um, I've done most of the work on the signals, updated signals library.
[213:54.94] So it's, it's got a lot of cool stuff coming.
[214:05.94] I guess, I guess my, my question for people doing local first stuff is like, what are you actually building?
[214:11.94] Like, like what aspect of local first?
[214:17.94] Is it just like, it's a, it's like an app that you've kind of always have open, like, yes.
[214:28.94] Yeah.
[214:29.94] Sorry.
[214:30.94] If it didn't interest, I am the creator of solid JS.
[214:32.94] Um.
[214:41.94] Interesting.
[214:42.94] So it's like a physical thing.
[214:45.94] It's like, you, you always hear the joke when someone's like, okay, let's go in the, you know, I'm, I'm, I'm on the subway in New York, you know, as an example, but you literally were going in and out of, uh, locations where you'd lose signal.
[214:59.94] Okay.
[215:05.94] Yeah.
[215:05.94] Okay.
[215:06.94] And then you talk about like, uh, collaborative piano role.
[215:10.94] Okay.
[215:11.94] Um, so yeah, it's kind of funny.
[215:13.94] Like in some ways you'd think that like, say persistent connections, like a web sockets and local first are on the opposite end of the spectrum.
[215:20.94] Cause one, you know, perceivably, um, you, you know, you need a server that's always live, you know, like live view or something where like it's constant web socket kind of scenario.
[215:32.94] Probably should be using something like Elixir.
[215:34.94] And then on the other hand, you have stuff where it's like, no, we're not actually connected to the, the network all the time.
[215:40.94] And we should work regardless, but from the client perspective, both of those look almost identical.
[215:47.94] Right.
[215:48.94] Like the, the, essentially you're representing something locally, almost like a database, almost like a, some kind of data store and you, the communication aspect is obscured from you.
[216:01.94] Yeah.
[216:02.94] It's a, it's a very interesting to see those two extremes, uh, line up.
[216:06.94] Hmm.
[216:07.94] Hmm.
[216:08.94] So this, it doesn't for, for local first, but none of them are perfect.
[216:13.94] It seems to be a new trend.
[216:14.94] The, some mobile apps worked all the way.
[216:15.94] Yeah.
[216:16.94] See, the, the thing that makes me most excited about local first is one of the, one of the most difficult challenges with our typical API setups when we have like, uh, you know, rest APIs or whatever.
[216:29.94] And I mean, GraphQL kind of solved this to a certain degree, but is that we fetch all this data down.
[216:34.94] Right.
[216:35.94] And sometimes it's too much, but let's say we have some control over it, but generally when we're like, okay, I need new data.
[216:40.94] We go and we fetch large amounts of data.
[216:43.94] So I guess it is mostly an overfetching thing, but the problem is once it gets to the client, it's fresh and we don't know the difference between this larger data fetch more than we needed and what we already have.
[216:57.94] So we have to diff it.
[216:58.94] Now, classically you use a framework like React and you would, um, just push all the data in, re-render the whole thing, react diffs it for you, solves it.
[217:11.94] But it's like, I couldn't picture a more inefficient way of doing things because it's basically assuming you can't know anything.
[217:19.94] But when you get fresh data from the server in large portions, what, what better can you do?
[217:25.94] Right.
[217:26.94] Like, cause it's like when you have something that's client interactive, when you're only on the client and you're just updating the things that you need, react re-render model is horrendous.
[217:38.94] Like, it's just like, you're, you're just doing all this stuff that's completely unnecessary.
[217:42.94] Right.
[217:43.94] You could just be like, okay, I changed this, change the thing.
[217:45.94] You don't need to, you know, I have a list.
[217:47.94] I checked it off.
[217:48.94] I don't need to re-render the list to figure out which items in the list change to update the one thing.
[217:53.94] It's just like, I checked the box, check the box, you know, and it's, it, it's kind of funny that, um, we take that kind of mentality.
[218:03.94] Right.
[218:04.94] Um, those two kinds of extremes.
[218:06.94] And they're not actually like, I'd say like the granular side benefits something like signals on the client only, but then the second you add server data, it's kind of like, you know, now we have to deal with these fresh data.
[218:20.94] We've solved this in signals libraries to a certain degree.
[218:24.94] Um, although X maybe solid is the only one that's really does this readily is we dip the data before we feed into the UI.
[218:30.94] That way, whenever fresh data comes in from the server, we actually dip the data and then just do the same pinpoint updates.
[218:35.94] But what if the mechanism for pushing the data was aware of the diffs itself instead of us overfetching it.
[218:45.94] That is a game changer because it means suddenly that that granular knowledge of exactly what updates propagates from the backend or from the sync engine or whatever, which means that this classical diff problem becomes a granular problem.
[219:03.94] So I'm excited because local first or these kinds of technologies might be single best place to use solid in the future.
[219:13.94] It actually bridges up that gap.
[219:14.94] Like I don't get me wrong.
[219:15.94] Diffing of data is really cool.
[219:18.94] And it's an approach that I've optimized to the point that even at being our worst case, we're as fast as the fastest VDOM libraries like Inferno in that zone.
[219:27.94] But if you don't have to diff at all, it's a no brainer.
[219:32.94] Right?
[219:33.94] Like it just makes a ton of sense.
[219:36.94] So I'm very excited by this technology because I think it actually unlocks the potential of fine grained libraries because it's, it's more accurate to what you're doing.
[219:46.94] It's like, you don't have to think about stuff as this like classic client server model, like refreshing the page.
[219:54.94] That's coarse grained and inefficient by default.
[219:57.94] Like it makes sense why react has been on server components.
[220:00.94] They're good at diffing.
[220:02.94] So they don't care if they re-render the whole page again, but think of what you can do.
[220:06.94] If you don't have to, there's no way that ever is the best way to ultimately solve the problem.
[220:13.94] Anyway, sorry.
[220:14.94] It's kind of attended, but it made me, it's definitely something that I think about often.
[220:19.94] A lot of the work actually I've been doing in Solid 2.0 is around improved performance of these kind of diffs I was talking about, but also granular propagation.
[220:29.94] A lot of times, and maybe I can show this with almost react code, but I may probably show it with solid code, but a lot of times what you'll do is you'll,
[220:42.94] you'll like, how should I put it?
[220:45.94] You'll have multiple data sources.
[220:47.94] So let's say you have like A, B, C, and then when you render it, they'll come together, right?
[220:58.94] You'll have D, which is a function of A and B, and maybe you'll have E, which has C in it directly, or it's a function of C.
[221:11.94] Or maybe you have F, which is A and C.
[221:15.94] But my point is, you lose the benefits of granularity, because sure, yes, if A changes, you know, only the update D and F.
[221:23.94] And if C changes, you know, they'll only update these.
[221:26.94] But overall, as things rise in complexity, things reconverge anyways.
[221:31.94] And once they're converged, it's difficult to unconverge them.
[221:33.94] This is kind of like the basic truth of most systems and why React can get away as far as it can when solving a lot of these problems.
[221:41.94] But if you can refork the data back apart so that you could know, instead of it all combining, that you could actually split it and go like, no, when this change, it's only when C changes that F.
[221:59.94] But like if you, I'm not describing this very well, but if you, if you have this potential of projecting, the problem is, sorry, I guess I know how to say it.
[222:08.94] The problem is that you're not always dealing with simple values.
[222:11.94] A doesn't always equal five and B equal six and C equal seven.
[222:19.94] Sometimes these are models.
[222:21.94] You have multiple property fields on them.
[222:24.94] And because you change the name of A, maybe that doesn't impact the calculation here because it's actually the address of A, like a different value that actually impacts it.
[222:38.94] But because of you kind of combining this logic together, it all gets entangled.
[222:46.94] If we have a way of re beating out the pieces that we need granularly, we can break this cycle.
[222:54.94] And I think ultimately that will allow us to achieve, basically escape the, how should I put it?
[223:04.94] Escape the destiny that's kind of been set forth with us in current modern frameworks.
[223:09.94] I have other streams about that.
[223:11.94] I've been working on a new primitive called create projection, which is a drive mutable reactivity.
[223:16.94] It's pretty complicated.
[223:17.94] I'll present it at a point when I think people will actually understand what I'm talking about.
[223:22.94] Because I'm getting a little ahead of myself here.
[223:24.94] What do we got here?
[223:26.94] Chat.
[223:27.94] I'm local media track for early track, but we enjoying in the orange.
[223:32.94] Okay.
[223:33.94] Yeah.
[223:34.94] I've been, I've just, I guess there's, look, there's a really bad term.
[223:40.94] Chat is a really bad term.
[223:43.94] Okay.
[223:44.94] Dev I'll bite.
[223:45.94] What do you, what do you, what do you, what are you saying here?
[224:03.94] Okay.
[224:08.94] Okay.
[224:09.94] Yeah.
[224:10.94] I'm trying to, I'm trying to think of concrete solutions of it.
[224:23.94] My problem is I've probably gotten too far away from my experience.
[224:27.94] When I was last building products and wasn't a framework dev, I was building social media
[224:33.94] apps, things like Instagram.
[224:36.94] And I'm just trying to like, I'm trying to put it back into my perspective of what's, what's
[224:43.94] in this blue area.
[224:44.94] Cause I can definitely think of what's in this purple area.
[224:47.94] Because there's like definitely things that are very hardcore on that side.
[224:51.94] It's, it's, it's, it's understanding where this blue area is and you're, you're suggesting
[224:55.94] that the blue area is actually a larger piece of the pie, which is actually interesting.
[225:00.94] I want to, I want to be able to work.
[225:10.94] Yeah, exactly.
[225:11.94] Yeah.
[225:12.94] So it's like, it's a, like collaborative apps.
[225:15.94] Yeah.
[225:16.94] I mean, I probably use one every day.
[225:17.94] If you guys see, I write tons of notes and hack MD, hack MD works perfectly fine.
[225:26.94] When you lose connection, I'm sitting there and I'm, I'm writing down my crazy idea of how
[225:32.94] the future of the web should look like.
[225:33.94] And then I lose internet connection.
[225:35.94] I still type and then I come back and it's still going.
[225:37.94] Yeah.
[225:38.94] Okay.
[225:39.94] But again, yeah, I guess this is a class of application.
[225:43.94] Once again, pointing the importance of some local first peer interaction without networking
[225:52.94] offline first.
[226:02.94] Yeah.
[226:03.94] It's so funny.
[226:05.94] We were on this path for a long time where PWAs were the future.
[226:10.94] It was so funny.
[226:11.94] There was like this whole thing around Google around 2017 and then it just died out.
[226:17.94] And I think they came to the realization that Apple was just never going to let it in.
[226:21.94] I think Apple did like in 2022 or 2023, it took like an additional six years or something.
[226:26.94] Um, or have they even still, I don't even know.
[226:28.94] Maybe that's something else that Apple allowed through, but it's just, it, it, it was.
[226:31.94] Maybe it was the shift towards e-commerce, um, you know, and the push, you know, around COVID,
[226:38.94] uh, you know, where online shopping was, but local first went from being where we were heading
[226:46.94] to being like, almost like a joke afterthought for almost four, four years there.
[226:52.94] So I'm very interested to kind of see this swing back.
[226:55.94] Yeah.
[226:56.94] I'm like 10 minutes behind chat.
[226:58.94] I should catch up.
[226:59.94] It's a long comment to me.
[226:59.94] And this kind of look versus.
[227:00.94] It means you have to handle local person.
[227:01.94] And then you have to really work.
[227:02.94] And generally, it's traffic.
[227:03.94] Yeah.
[227:04.94] Okay.
[227:05.94] It's all good.
[227:06.94] I followed what you're saying.
[227:06.94] at least local first.
[227:07.94] 10 minutes behind chat i should catch up it's a long comment to me and this kind of look versus
[227:17.86] means you have applications to handle local person
[227:19.78] did you have to really work in general traffic yeah okay
[227:27.54] it's all good i followed what you're saying at least local first purple is where the
[227:37.78] is authoritative blue is more traditional architecture purple is a very specific
[227:42.10] use case yeah and i think maybe a better known use case
[228:06.26] yeah i mean there are some articles i don't have them off the tip of my i think if you
[228:11.86] i know this sounds sad but it's like uh react solid or react devs
[228:18.74] no
[228:21.94] no then you get the solid let's try solid js you get the
[228:30.98] there was one there's a couple that i remember that was actually really well not about converting
[228:36.74] components i don't have it off the i don't have it off the top of my head i know the problem is
[228:42.90] there's enough kind of garbage out there too
[228:52.50] yeah
[228:56.74] what made me want to make solid um i mean we gotta go way back uh i first started coming up with the ideas
[229:08.74] recruiting solid about 10 years ago uh in 2015 i was a knockout js dev i was doing observables or
[229:15.54] the signals essentially um and react started getting popular and i like didn't get it see
[229:24.66] i'm like that old man kind of thing i mean that's not true i did get the axe thing i had to
[229:29.46] grudgingly admit that react you know made sense for a lot of things but i basically watched signals libraries die
[229:37.54] um because everyone there were two magic people don't understand how they update they weren't very
[229:43.14] predictable back then they didn't have guarantees and they're inefficient and but like i i saw talks
[229:51.14] like if you've ever seen ryan florence's ryan florence uh florence hype 2014 um or 2015. i saw ryan
[230:06.02] florence's hype talk in 2015 and uh there's this demo
[230:13.30] love love love love love ads or i know you guys can't hear it which is fine but i don't need you
[230:21.14] don't need to hear it to see it um he makes like a ssr app in this thing which is crazy ahead of its time but
[230:29.94] what i was looking for is at a certain point in the app he makes he does this talk he does this demo and
[230:37.70] maybe it's earlier on in the talk not this one
[230:46.34] i wish like anyways he does this demo of database uh it's called it's now common benchmark it's called
[230:54.50] dbmon oh yeah this one here it is and he and he put um i think it's ember angular and react next to
[231:05.94] each other basically spitting this is what i was talking about earlier you know what i consider this is
[231:11.54] like the worst case scenario he was spinning full pages of data to the from the server in real time
[231:18.02] he's basically just going like here get me the snapshot for the data all the data like you never
[231:22.58] want to do this in real life but he's like how fast can they each framework process it
[231:33.22] see at first he does it with like a reasonable refresh rate and shows that ember has some hard
[231:43.30] time showing the mouse over but then he goes a bit further and unhooks it and just lets them go at full
[231:51.14] speed and at full speed you can see that react absolutely demolishes the other ones because it's
[232:02.98] a diffing problem right and i looked at this and everyone's like yeah reacts fast and signals are slow
[232:11.22] and kv were slow and i was like i know because the pinpoint updates in theory we should be way faster than react
[232:20.42] can we make our worst case fast and um i realized that using proxies we could so
[232:30.98] um i remade that demo with with with proxies essentially this is i haven't updated in like five
[232:39.14] years um and i could i showed that signals could be as fast or faster than most vdom libraries the other
[232:49.46] problem was signals are expensive for creation so i basically went through a series of benchmarks to
[232:55.54] kind of prove that this approach i liked and you know why i like this approach it's because
[233:00.26] you know how some people like react hooks better than class components how you could just define
[233:04.90] exactly what your logic was and have it all laid out i really found that comfortable react did not have
[233:09.30] hooks back in 2015 so i i was like i need to build a framework that has basically these like knockout like
[233:18.10] these granular instructions and i wanted that back i didn't even think of hooks honestly i i just didn't
[233:25.62] like react classes i liked having these granular things and i wanted to prove that as viable i know
[233:31.46] you know that's kind of like a long-winded um answer but i tried to learn where knockout failed
[233:38.90] and essentially apply react's philosophy of top-down unidirectional flow to signals and then show that
[233:47.62] it could outperform it was clear mental model and outperform it in every type of benchmark possible and once i had accomplished that um i kid you not a couple weeks or months later react were
[233:53.54] released hooks and then both frameworks ended up looking identical because i'd already swapped to jsx and then it was like i was like oh okay well i guess other people might like it i didn't even though i did all this work i just did it for myself as like that old guy who likes his old things that no one cares about anymore i didn't think anyone would actually switch over to signals or over to
[234:21.06] like hook like things i thought people like plain data you know um and react basically opened the door for us
[234:31.06] because once they did that floodgates came on and people were like oh
[234:35.30] like this is a pattern i think deal first found us because because of that but essentially react changed
[234:41.86] itself to look like solid of course they don't list any reactive libraries or influence for hooks because they
[234:48.10] weren't they were thinking about some functional programming thing but the ironic thing is when
[234:52.26] most people look at hooks they think reactive programming um it's kind of funny anyway that's a very long-winded
[234:59.30] that's a very long-winded answer but essentially i made it for myself just because i really enjoyed um
[235:05.30] this kind of mentality of defining state and dependencies and whatnot
[235:19.78] yeah i'm i i i i i i i saved myself money which you is what you're noticing now because i'm what am i
[235:27.22] streaming at am i am i at 720 right now yeah i'm at 720
[235:31.22] yeah
[235:33.78] i saved myself some money it's because i'm using stream yard it's funny i'm feeding obs through stream yard i just
[235:42.42] never set up obs on its own or whatnot yes em both ryan's used to be ember devs i was an ember dev
[235:50.90] uh as well i i mentioned knockout but i also did a lot of ember but i know i know ryan florence
[235:55.14] is an ember dev too i think this is what sold them like right before that this is when ryan florence
[235:59.38] like flipped over and he's like i'm gonna be reactive and he's been there ever since
[236:04.42] yeah
[236:14.66] i mean
[236:17.38] how many people are on stream right now 150 okay from twitch just seeing how many of the raiders are left
[236:25.62] because i mean i
[236:27.54] i love questions and answering questions um
[236:34.42] but
[236:36.18] i also i'm a bit conscious of people like some some stuff like the basics like how signals work
[236:46.58] there is a lot of good content on the on the web for that um
[236:50.18] i will link one of my own articles if i can where is it uh um
[236:59.06] building it's like so long ago it's not even my building
[237:04.58] no
[237:07.46] probably faster than google it than look my own article list building
[237:12.98] signals from scratch
[237:19.78] god it's not even the top match anymore thank you angular stealing my thunder
[237:23.70] uh
[237:25.30] introduction
[237:28.50] to
[237:29.78] fine
[237:31.46] grained
[237:32.82] yeah this and build building a reactive library center is because i didn't call them signals in this
[237:40.02] thing that's why
[237:41.38] this article series both what they are and how to build a basic one these two parters
[237:48.66] basically
[237:50.18] are a good introduction i solid also has like a like a five minute explainer um that goes into detail
[238:03.70] yeah yeah yeah it it's been a few years february 9th
[238:07.38] i published this article on my birthday that's kind of funny
[238:10.82] i i've my best articles have been published on my birthday actually
[238:17.30] i think if i think how i wrote the fastest javascript framework
[238:30.74] february 9th 2019 yeah also on my birthday
[238:32.98] yeah
[238:35.14] uh i've been at this a while now
[238:39.46] if i've been honest i'm a bit concerned about ergonomics to split effects and async first reactivity
[238:51.06] and do or can you minute why those changes will be necessary well
[238:53.54] okay
[239:01.54] i i get why there are concerns here
[239:04.42] split effects for those who don't know um is this idea that i've been playing around with
[239:17.94] which it's not a new idea by far it's the idea that
[239:20.82] create effect
[239:25.94] react devs are going to find this familiar is the idea that you you actually
[239:31.70] then like console log v oh it's for fun i'll do it like this the idea that create effect takes two
[239:42.82] arguments instead of just being a single argument with the reactive tracking you put the tracking in
[239:47.38] one half and then you put the effect in the second half so it's almost like the dependency array coming
[239:52.74] back only for effects not for computers or stuff but only for things with side effects
[240:03.38] and we were joking earlier that react turned into svelte and svelte turned into solid and solids
[240:09.70] turning into react and i kind of um you know because like react compiler makes it actually more like
[240:16.82] like svelte 3 svelte 5 ruins is almost identical to solid and that this is part of my joke of you know solid becoming like old react is that
[240:31.78] it's it's it's it's it's the emphasize the difference between the pure and side effect part of of of
[240:36.50] of rendering and i know that might not be obvious to what i mean to people it's just when you re run a react component
[240:45.14] it's all pure i know there's jsx but if you ignore that you just set up it's up it's not pure pure like it's not like
[240:55.54] it's not like um like you are creating things like the hooks are actually being created on the hood
[241:02.26] but essentially
[241:03.54] you are nothing you do impacts the outside world and more importantly at the time that the pure execution runs
[241:18.74] like react component react knows all the dependencies because it has all the dependency rays before it ever
[241:23.94] runs any effects like side effects at the at the initial time that it runs it knows all the things
[241:31.62] that it depends on now in react's case it goes has this change and then it cues this on and in solid's case
[241:39.22] it now knows if we split effects like this it now knows without running the effect that hey
[241:47.94] if count changes i will need to run this effect in the future and in a sense
[241:54.34] this model that i'm talking about is like reacts model except instead of the components being the
[242:02.90] conduit it's the reactive graph being the conduit it's the link between count and and this count being
[242:10.66] the conduit the component only runs once but you're actually building a pipe that's almost identical
[242:17.06] philosophically to react where the pure parts are pulled through to these effects instead of
[242:24.02] it being components that rerun it's a bunch of effect sinks pulling down granularly like streams through
[242:34.66] your app your data so when one piece updates and it goes hey we know all the way through to the thing
[242:43.14] to like the effect here which in solid rendering like this count in the button here that's an effect
[242:51.54] it's the same principle right it's just an effect that says update the text of this dom element
[242:56.58] it knows to pull all that through but it doesn't do the work right away so the the reason this is
[243:05.46] important is if you have async work things that you want to be interrupted you know ahead of time
[243:19.30] before you run the effect what could be impacted the problem with solid today without split effects
[243:25.62] is that it's too late if you read an async value for the first time in an effect you've already ran
[243:31.54] the effect now this is an argument that we could just split render effects like things for rendering
[243:35.54] but it if like i don't know why i don't know why you do this but if you want to fetch
[243:40.66] something and console log it
[243:44.66] right like if we wanted to i should just pull in the solid 2.0 runtime so i could show this off better
[243:52.90] but if you want the console and this count isn't used anywhere else
[244:00.34] we it's too late by the time we run the effect right the whole point of these like async and suspense
[244:07.14] models is to basically know what the dependencies are so that we can you know halt stuff without
[244:19.22] getting in weird torn states where like some of the effects are run and some of the effects haven't run
[244:23.30] and as i said in solid um being granular like this is super powerful right because
[244:30.18] stuff like suspense and whatnot can actually build up parts of the app behind the suspense boundary
[244:37.70] and then complete pieces granularly instead of like doing full re-renders when things are done right
[244:45.70] it's non-blocking but it still has to have this property i don't know if i'm doing uh a very good job
[244:54.18] but like i guess it's part of your same question because this is an async
[245:00.02] first thing we would not care about this if we weren't caring about async async interruption
[245:06.82] is why we want to separate pure from side effects that being said my a secondary goal of solid is so
[245:14.82] that you don't have to write create effect very much anymore right think think of you know when do you
[245:22.66] actually use create effect
[245:25.78] people who say svelte turned into react have no clue what they're talking about f side note
[245:39.62] some people already used on but this isn't a syntax or stylish point of view
[245:44.98] it's not it's not about performance it's about the concept that um it's about predictability
[245:58.34] um it's about and it's about consistency it's that you want
[246:03.94] you don't want to show things torn or ripped or in half and half states you don't want the ui to break
[246:13.22] apart over async there are other benefits um because if you can pause or interrupt the pure part
[246:23.06] async becomes non-nullable is what i call it see in in react when you
[246:29.14] suspend use a fetch or use something um and it throws a promise it interrupts interrupt uh execution so
[246:39.30] you don't have to null check the value of that promise coming back anywhere in your code
[246:46.34] right it's like
[246:47.70] um i i really should pull the runtime out of somewhere i just don't know if i have it at the
[246:57.22] moment on this computer um an example i i could dig through the discord to find example but let's
[247:03.62] say we have an async value let's call it user okay i'm gonna create async and as i said this this
[247:10.82] is not functioning code i'm just doing it for illustrative purposes um and inside create async we fetch
[247:15.78] user which is some maybe props.id whatever which is like some like returns a promise right in this
[247:25.70] model user can always exist it will never be undefined right like in create resource there's a time period
[247:38.42] where you have to null check it you have to go even with suspense we were like hey does this user exist
[247:45.06] but what what what this can if because in solids current implementation suspense uses context
[247:50.26] but it doesn't null check because if user has name
[247:53.38] and it's undefined like you have to do this or it throws um because it's potential that it doesn't exist
[248:07.30] where with with kind of this blocking interruptible async you can actually write the code in such a way
[248:16.58] that you don't have to null check it um so it's it's mostly for it's mostly for this like desire to
[248:26.90] propagate async see what's interesting is in a granular system like with signals unlike react react you you
[248:34.10] will wait in the component or use in the component it blocks the component but in something like solid
[248:38.34] you could have a child component here called user
[248:46.74] you know and then pass user to it and this user like nothing's blocked here like this we could we
[248:55.78] could put we can put i don't know we could put something else here i don't know like header or
[249:04.50] something doesn't matter header is going to get rendered immediately um because we we can hide the
[249:11.70] suspense component inside the user if we want sorry i'm not using proper solid syntax i should do this
[249:19.38] even though this looks like we're calling it here we're not actually blocking until we finally use
[249:24.18] the user somewhere down the chain which means every derived value through the chain doesn't matter it's
[249:28.66] only when you get to a side effect that syncs it like for rendering that we actually look up the tree to
[249:34.82] find the suspense boundary um which is cool because it means that you can have multiple of these
[249:42.26] like and multiple of these whatever user one user two whatever and then
[249:49.86] these are not siblings aren't blocking children aren't blocking unless you like you do a condition around
[249:59.94] them that way like we could we could pass
[250:02.34] that i this is gonna be so cool when i actually finish the work that i'm doing literally right now
[250:09.94] to to do a release with the jsx compiler and to showcase this it's gonna be an upcoming stream but
[250:15.78] essentially we'll be able to control the placeholders with suspense based on your ui completely independent
[250:24.66] of where you declare the data fetching or where the blocking actually happens the blocking where it
[250:29.78] happens will be the farthest level down in the tree where you want and the async will propagate through
[250:35.38] the graph like if someone has a computed like you know something like create const uh like i don't know
[250:41.54] upper name equals create memo let's say it's user dot name or something this calculation here won't cause this
[250:57.78] component to this component that's suspend it's wherever upper name gets used way down the tree the closest
[251:02.34] suspense boundary to that we basically there's no uh component hierarchy has nothing to to do to do with the
[251:12.98] final resolution and as i said because it's granular like notice there's no null check here it's because
[251:18.42] this async concept of not being ready will propagate through the whole graph if user isn't ready then upper name
[251:25.78] isn't ready everything potentially um becomes async and suspense works along the same principle
[251:32.50] again i don't know if i'm doing a good job here i'm gonna talk about this next week i'll record and put
[251:39.30] it up on youtube yeah yeah yeah yeah i mean this is how solid already kind of works right it's just
[251:54.74] now if you go the extra distance of splitting the pure part from the side effect part you can freely do this
[252:04.02] and coordinate the effects um accordingly because
[252:08.50] technically and i have demos of this right now where the current reactive you don't need suspense
[252:14.58] but weird stuff happens if like certain value fields um wait on async and others don't like you
[252:23.06] can render a ui and then if the class for some reason depends on the users you picked it based on the the
[252:29.62] the first letter of the user's name that you haven't loaded yet you'll like render the user but not
[252:33.94] apply the css or something um so like there's this level of granularity that it still makes sense that you
[252:40.98] have stuff like suspense um to make sure that you coordinate it so all the effects in that block
[252:46.42] like all the rendering and user effects are scheduled once you know all the async in that block resolves
[252:53.30] so like but what's interesting is while it mechanically looks the same as something like react
[253:01.78] technically the stuff that isn't blocked can be rendered ahead of time because we're non-blocking
[253:07.22] like behind the hood in terms of our component renders we block on the data graph but not on the component tree
[253:12.82] so it basically is the most efficient way i think we've seen today to avoid waterfalls
[253:20.02] naturally um obviously i'm still big proponent of fetching in the loaders or isomorphic loaders and
[253:28.02] stuff because of code splitting but if code splitting were not a thing this approach
[253:33.54] almost completely eliminates client-side waterfalls
[253:48.02] yeah i mean we yeah we could do something like function user prop
[254:01.78] you know we could we could put the suspense boundary in here obviously return events
[254:14.66] thing with solid too is like you could put the suspense boundary if you want
[254:18.74] inside the same component um whatever like h1
[254:26.66] props dot user dot name whatever like and then suspense fallback
[254:39.46] equals equals loading user whatever
[254:44.10] it's it's it's it's basically it's kind of cool because like
[254:51.14] the reason that this is really powerful isn't when the suspense is in here it's like when the suspense
[254:57.78] is out here right i think this is the most powerful part of this approach because if i put the suspense out
[255:05.86] here now i'm not going to render anything until all the users are loaded when i do this so i can wrap
[255:10.90] each one individually but the important part about here is picture what your user component looked like
[255:16.74] before you added suspense before it was aware of async picture what your user component looked like
[255:21.78] why it looked like this it had props dot user and you passed me the user and you got the name
[255:26.98] the fact that you added the async data loading and the suspense does not change the api of your user component
[255:37.94] at all one of the challenges that they've been facing in react is like sure they have a great pattern on
[255:45.38] how to um you know use and use suspensive stuff but like where do you fetch how do you set up a cache like
[255:54.10] how do you make sure that it doesn't like refetch on reload right and one of the things is we'll fetch
[255:59.54] high and pass the promise through but now you're passing promises through you actually change the api
[256:04.10] of your code where this approach is seamless in fact you know synchronously you always knew you had a user
[256:12.74] now async doesn't change the fact you can literally add async to your program without changing your child
[256:16.90] components
[256:26.50] yeah i i mean the thing is if you've been watching my stream and i've been talking about this stuff i i
[256:36.42] do probably have the tendency to scare you because i i
[256:39.06] i get into the details i find every edge case so when you watch my stream i'm like sitting here
[256:47.30] picking stuff apart and it's like oh my god this is this is scary because i'm literally thinking of
[256:52.50] every possible thing i could think of go wrong and you know that if i'm thinking of it there's probably
[256:56.50] things that i haven't thought of yeah yeah i mean if you really here's the way i look at it async does
[257:07.06] add color but so do signals so why add like another color signals are already a coloration through your
[257:14.82] components and if you're in solid you're using signals so why not just make everything signals
[257:21.06] yeah syntactically we're close enough to react that people who use react like they'll have that gotcha
[257:35.22] moment where they're like why doesn't this work but once they get past it like we speak the same language
[257:41.14] so yeah i mean it's it yeah it's it's interesting i i i devs getting ahead of me like i'm barely
[257:58.10] scraping together these examples and getting the code to work and he's trying to do a talk on it
[258:03.46] elements assaults solution today already work like this but 2.0's new foundation um
[258:10.26] with the especially the non-nullable async and the split effects is it just right now it feels
[258:14.74] like it's an inconsistency like there's a gap in our solution that doesn't work the way it is
[258:18.74] for me solid 2.0 is a lot like react 16. like react up to 16 had an idea like what it was doing but
[258:30.58] only sort of and it started making a bunch of stuff and it was like okay this is cool this is cool and it
[258:36.74] kept on going forward and adding stuff and slightly tweaking stuff and then they got to around react
[258:43.30] 15 and they're like oh crap we need to change something i people talk about react with not
[258:48.82] breaking changes but if you remember back to the difference in 14 15 they the whole idea that like
[258:53.38] when you set state it's it doesn't update the state that wasn't always true in react like it was like
[258:58.26] sometimes it would update the state and other times it wasn't it was kind of like unpredict predictable
[259:02.58] behavior around 15 they're like okay we definitely should be keeping the state in the past until
[259:08.58] after the flush like they kind of started working out what the scheduler should look like and then
[259:15.06] with 16 they came in and they're like okay this is a scheduler this is the consistent model and
[259:19.86] reacts basically been on that path since then once 16 came out that's modern react hooks didn't come out to
[259:25.30] 16.8 which actually came out i believe over a year maybe two years later like 16 was the the big marker
[259:33.22] and i feel like for us solid is kind of that's the tipping point i had a lot of good ideas but there was
[259:40.90] like gaps or inconsistencies or little pieces that you know didn't quite fit uh one one last thing i want
[259:52.02] to show here just on this topic because people worried about effects one i i think one of the most common
[259:59.70] reason people make effects is because they're they're creating like in a form right and they'll get like
[260:07.54] some default data from the form and they'll be like but the problem is they have to have a local copy of
[260:15.54] the form like ephemeral state so you'll be in the situation where you have like a name so name set name
[260:22.58] right and you go you know we'll create a signal here but you also have a name coming in for the props
[260:29.70] and a lot of people do i'll use solid syntax but they do create effect set name props dot name right
[260:39.46] this look familiar to all you guys this react even themselves says that this is a terrible pattern
[260:45.54] right and this is probably one of the most common places where people use effect but the problem is
[260:53.54] delays it it renders the first thing blank because the name isn't present and then schedules this effect
[260:58.82] later in solid we came up with something called create computed which is like a synchronous render but
[261:02.98] i i don't like this solution um reacts equivalent was they were like you you should do something like
[261:11.94] if props dot name not equal name set name props dot name or something that you can either key it on the
[261:24.74] outside or you can they actually tell you that it's like there's a whole doc on when not to use effect
[261:29.38] where they basically tell you can inline set it and then like use it like this stuff is bonkers to me
[261:35.78] the solution for this install 2.0 is really really simple and you're going to love it done um
[261:44.18] basically
[261:50.50] basically the the the concept here is that signals can also be derived um and what this means is that you
[262:02.98] you can update the local copy using this mechanism but when the fresh props come in it will override it
[262:07.94] right this is this is the signals and stores we're going to do this way it's just
[262:13.86] it's it's just kind of the scenario where um it's yeah i i don't know it it's funny when you look at
[262:24.42] react code and you state it's like the only thing if you do this you guys all know this doesn't update when
[262:31.46] the props update right it's the only thing that's top level that doesn't update right i i
[262:37.70] anyways i i i anticipate that effects will be used way less um in solid 2.0 anyways
[262:48.42] still early um i've been working so hard recently because of
[262:59.86] um because of dev um and uh him doing the thing but i still need to put the rfcs out to get
[263:08.58] official support yeah how does username work with gel yes it throws that's exactly what it does we're
[263:14.02] it's but the difference is in solid all these expressions get wrapped so when we throw it doesn't
[263:20.82] get caught by the component tree it gets caught by the thing you know everyone hates all those function
[263:25.78] wrappers and solid but they have a positive benefit that we don't have to throw away the whole render
[263:31.14] tree when we throw we literally can just throw away that one computation which means it gets to keep
[263:36.90] rendering i this is the part that i probably didn't didn't explain well enough like if you have
[263:45.46] sorry let's go back here i can go back to this example here
[263:48.18] going back time yeah if if if this throws because it's not there we've caught it
[264:04.02] ta-da it's caught which means we can continue to the next line and continue rendering
[264:11.54] the rest of this page it's only when like upper name or in this case user gets called but even
[264:19.94] here it's it's not here it's only when it gets called here when you're like in the effect that it's
[264:24.98] like crap i don't have the value and at that point this under the hood if you've ever seen the output of
[264:29.86] solid um i guess i'm going to comment some stuff out so that it actually compiles it's also wrapped
[264:38.90] in a function it's this is insert it's just an effect of a sort so again this insert just catches it
[264:45.70] so it can continue rendering the rest of the dom beside it as well and just go two things it renders
[264:51.30] nothing which wouldn't be acceptable from a ui standpoint but it also informs the suspense context
[264:57.22] it doesn't throw up to the suspense context it's it's it's a context provider it just tells
[265:01.22] the suspense context it's like hey don't actually attach your children so it goes and renders all this
[265:07.54] stuff but then it's just holding these dom nodes in space and it renders the fallback and then when it
[265:15.94] resolves it notifies this thing and finishes the render and at that point the h1 didn't get re-rendered
[265:25.54] again the whole tree didn't get rendered again it literally just set the text on the h1 but at the
[265:29.94] same time it informs the suspense context it's like hey we're good and the suspense goes am i waiting for
[265:34.34] anything else no and then it just swaps these children back into place and removes this but
[265:43.54] doesn't re-render it it literally just updated the text node and then swap the content the content in so
[265:49.78] um yeah that's how it works under the hood
[266:04.02] yes what is going to happen when you do that let's let's let's let's go console.log user
[266:19.38] no where is it it's like it's not doing what i want it to do
[266:25.38] no i was i was looking for the linter to to like yell at you um
[266:37.70] it's not it's not because there's other errors on this page basically
[266:44.66] the reactive variable count should be used within jsx attract scope like create a factor inside of
[266:57.94] and handler function or else it changes will be ignored
[267:00.58] yeah sorry it was the other errors on the page my my my point is that um
[267:10.82] i'm tempted we talked about this with a solid strict mode i'm tempted to just yell in general um in the
[267:18.02] the dev tools at or at least warn at runtime but the the linter already tells you not to do this because
[267:24.82] no one should ever run a console log outside of views effect because it literally doesn't do anything
[267:32.26] now what actually happens it's going to throw the whole component and the the next decision point up on
[267:40.98] the tree is the one that's going to catch it or an error boundary or something so in that case yes you're
[267:45.62] quite a bit less efficient um because now if this was async or whatever it's actually the parent suspense
[267:54.10] that's going to find it and it's going to it's it's not it's not particularly good but it it will work
[268:04.98] it's just not great um but yes tooling should tell you that you shouldn't do this because it's already
[268:12.50] not a good thing to do
[268:13.38] yeah by throwing essentially yeah it's not this is fine-grained async we should really embrace
[268:25.94] this term amplify the marketing yeah
[268:36.26] yeah solid only emulates react behavior when you're doing the worst possible thing with it
[268:51.22] like the thing you don't want to happen
[268:52.98] yeah anyway
[268:59.06] oh funny um yeah we should do some this week in javascript to wrap up here i also think
[269:07.46] um i saw something that i actually wanted to to look at here which is um
[269:18.02] i had a question for you guys based on some work that i've been doing recently
[269:23.14] maybe it's too detailed question
[269:31.30] i i was working on um on reconcile um which is our diffing um approach and i realized that my immutable
[269:44.82] diffing swap works really well has a problem though because it only
[269:49.14] you can immutably diff something from the point of the diff downwards but if you're nested immutable
[269:57.62] diff so like if you have a an object that has an array of users and you're just diffing one of the users in that array
[270:06.82] um with some like new copy from the server let's say the the problem is while you can merge not merge but like swap the object into the other object you can't
[270:16.98] the way the api for reconcile is you can't replace it like it doesn't know that the parent
[270:26.26] um is a different user so i've been kind of like debating whether whether this would be acceptable
[270:34.74] um of course it's too long for the the page but like trying to decide if it would be fine if the
[270:42.42] reconcile function in this case if you're trying to like do a nested reconcile see the beautiful thing
[270:47.14] about our reconcile function is when we go set store you can just pass reconcile right into it and be like
[270:54.42] passing you know some fresh data let's pretend your store is a user and you're like here let's reconcile
[270:59.86] this user and then it'll like basically update the data in the store and do the fine grain updates but if
[271:07.78] let's say the store has a dot user field and you reconcile it this even though it swaps internals of
[271:14.82] the object it can't because you're passing in the user and you're passing the data it can't change the
[271:21.14] reference to the user on the store itself so i'm kind of i i'm thinking the solution is you have to
[271:27.06] actually assign it to the user when you diff i don't know if this makes any sense to anyone to have an api
[271:32.34] like this but that you would diff you basically like apply this change to that property and then
[271:42.58] also have to assign it for it to actually work i don't know it's i i'm trying to get some comments on this but
[271:53.38] okay you you it's fine i will i will look at the preact signals thing
[271:58.02] you send it on twitch
[272:06.02] well it it depends because if the diff finds that the top of the object's the same um
[272:22.82] it's not going to act this this set isn't actually going to trigger anything i i know it's it's weird
[272:31.14] all right this one okay let me grab it
[272:52.26] oh
[272:55.06] preact signals got a huge performance boost signals rendered as text prop effects only pull
[273:04.74] as fast as needed for rendering since computers didn't run as needed they now only run as often
[273:08.90] as a downstream dom output can be painted okay so this is a scheduling trick i was saying before
[273:17.62] the rendering the rendering rather than reactivity performance is actually what makes a big difference
[273:23.22] here i'm gathering what they're doing is they're
[273:35.14] throttling the reactive updates based on the frame rate like the paint rate
[273:42.26] because you it's in your control when you can pull it and in so
[273:48.10] they're wasting less frames which is increasing the fps
[273:52.66] that that's that's what my guess is anyways it's funny jason miller always likes these kind of like
[274:05.46] update timing type demos like he had another visual one
[274:09.78] but yeah i mean this is considerable difference here
[274:23.94] yeah okay so basically
[274:27.30] the scheduler is isn't being throttled by q micro task it's being throttled by um
[274:39.70] what do you call it um the other one uh request animation frame
[274:45.30] i mean yes this is possible because pre-examines use a two-phase design
[274:58.26] basically all signals use two-phase design
[275:04.82] yeah the funny thing is this is a very i if it's what i think it is it's a very easy
[275:09.62] implementation but this is what a thing to implement but what i'm what i'm getting at
[275:14.34] it this is what i was talking about before when i was saying that the first piece was
[275:18.42] um the dependency graph and then the ownership graph and then the next pieces are all around
[275:23.78] scheduling you control when stuff pulls so in a sense like suspense it's not just even full
[275:33.46] scheduling like this you can you control like it's suspense holding the effects as an example
[275:39.22] where the split effects is you you actually you know you pull the pure part first and then schedule
[275:45.86] the effectful part off screen is an example of again zoning out a section of the of the of the um
[275:52.90] ui and saying don't pull this but like nothing stops you from saying pull this every five seconds or
[276:00.02] on animation frame or whatever like this kind of base primitive when exposed to primitive is
[276:06.02] is incredibly powerful because you only need this is basically the the realization i feel like milo
[276:13.46] kind of pioneered when he came out with reactive reactively because reactively doesn't have effects
[276:18.42] um it was one of the first reactive libraries i ever saw that did not have effects
[276:22.90] and and essentially because his use case was polling on his thing so he didn't need to schedule effects
[276:30.82] he just had a regular polling interval and i i think that's i think that's an important piece of it um
[276:37.94] this kind of mentality of like controlling the poll um
[276:45.38] marco actually i think does the same request thing i wasn't really sure if i was confident that
[276:51.54] paint is where i wanted to do this i mean don't don't get me wrong scheduling on paint seems reasonable
[276:59.14] when you're primarily rendering the dom but there might be scenarios where you don't want this behavior
[277:04.26] in general because reactivity is lossy for it's on events like you're you're it's about current values
[277:11.14] it doesn't matter when you pull as long as you pull consistently like you get all the data you do
[277:19.14] all the effects in one go you won't have tearing whether that's every five seconds or whether that's
[277:24.66] a billion times a second so yeah the salt
[277:29.62] yeah i mean the the his explanation of why they can do this is why is how every reactive
[277:39.38] library print or signals library works that's what i'm saying like if you want to see what i'm talking
[277:43.94] about look um solid js signals
[277:50.18] source um core scheduler okay so
[278:02.66] see how schedule it's like if schedule return otherwise schedule true cue microtest flash sync
[278:09.70] if i change this one line to say run animations request animation frame i think that's what we we get
[278:17.46] i'm not 100 sure but i'm pretty like roughly speaking it's changing this one this one thing
[278:37.38] okay i mean if it's not request animation frame then it's probably some other mechanism but like
[278:44.26] fundamentally it's the same idea because what ends up happening is
[278:48.26] um
[278:50.82] memos notify down through the whole graph we have a whole stream where milo joined us and explained it
[278:58.90] and then at a certain point effects when they get notified
[279:05.22] if their state is currently clean they queue on our queue essentially themselves and then
[279:11.78] this queue function that i that i show here the scheduler is literally push it
[279:19.70] into the right queues and then schedule which we just saw above so like
[279:28.58] it's just a matter of finding the right pattern um what we did with marco was
[279:36.18] we ran as much as we could immediately and then if we would queue so we do like a post message
[279:44.42] to do a set timeout essentially for the next we do what was it request animation frame and then post
[279:49.86] message we basically have to use a combination of two timers to get on the next paint frame in this case
[279:55.86] so they want to they want to uh paint um
[280:01.14] they want to paint before the frame so like i'm gathering it would be just request animation frame
[280:08.42] it says it's rendering faster but what are they mentioned what are they measuring on the fps do you
[280:14.18] understand what i'm what i'm getting at uh like uh where did i lose it already this is devs
[280:25.62] this is this one funny i didn't think i closed it down doesn't really matter um
[280:35.86] like this kind of optimization you're right if you're seeing numbers above 60 frames per second
[280:45.46] it means that they're not they're measuring
[280:47.54] they're not they're just measuring like the total time like it's not corresponding to
[280:58.58] to the actual like framing of their actual work being done
[281:03.22] i i mean in this case preact does the same thing as solid when it comes to text nodes
[281:20.90] like they they they have this one optimization where if it's a granular i think fine i have to pull it
[281:28.50] up again um
[281:30.02] oh no it's right there it's blue sky that's why i'm like not looking at the right one
[281:36.82] he said since component yeah what does he say here blah blah blah
[281:47.06] yeah i don't know if he's mentioning here signals rendered as text props
[281:50.18] effects only pull is fascinated for rendering yet because basically
[281:54.74] preact has a split mode where if you like bind directly in a very specific place it works like
[282:01.94] solid fine-grained but then when it's structural or as you read something at a component level it goes
[282:05.78] defaults back to the the dom so basically in this example here i imagine
[282:14.74] they're leveraging a place where they don't have to do the v dom and they're just doing the granular
[282:19.22] update um it's not there they don't have that capability with everything but i imagine that's
[282:28.82] what they're showcasing here
[282:29.78] yeah yeah yeah yeah but it's it's more like fine-grained off it's it's they call it fine-grained
[282:40.82] opt out but it's more because they actually don't have the granular control flow mechanisms right so
[282:46.42] it's like it calling an opt out is one way of looking at it but like on the other hand it's more
[282:53.70] like they have a couple optimizations over a system that's generally a v dom library
[283:05.86] yeah opt out of v dom maybe yeah yeah yeah yeah that that that that's what it feels like
[283:11.38] more to me it's like in these specific cases yeah anyway let's let's talk a few things this week in
[283:18.90] javascript um before i get too ahead of myself give me a second to get myself good here we'll talk about
[283:26.74] what's been going on um i didn't do as much diagramming as i thought i would in the stream
[283:37.86] it's all just all just um
[283:44.50] all just talking crap i guess
[283:46.66] we did some diagramming so there's that but
[284:01.54] all right solid that
[284:04.10] all right
[284:13.62] that's so funny
[284:24.82] okay there we go
[284:25.94] i guess it's been a while since i've i've done one of these so um i probably have a decent amount
[284:36.90] to catch up on
[284:37.94] yeah december 13th
[284:41.38] yeah it's literally right after i stream that they did the state of js survey okay
[284:48.82] all right well let's talk about this week in javascript
[284:51.30] i'm smart i have my banner bam okay there we go this week in javascript um but it's been more like
[285:01.14] a month almost had a good time off i hope you all did as well this year in javascript
[285:16.90] all right um first of all
[285:20.18] i think we already talked about this on stream but js survey came out we we went in detail i was happy
[285:27.62] that solid again was the the the highest on satisfaction obviously it's not the only metric
[285:35.86] and maybe not even important metric but it's an important metric for us because it's all we can
[285:39.86] really hope for um we're not the biggest solution we don't have the most usage but if
[285:46.02] our developers are happy well that makes me happy so very stoked on that um dev joined the solidjs core
[285:53.30] team the work he's been doing on uh web sockets and uh server signals and a lot of different
[286:03.54] experimental technology is really interesting we want to throw down on the support on that
[286:07.54] plus he's just a great guy so um very very cool stuff yeah um what else yeah a lot of me stuff
[286:17.06] coming out coming out here um this podcast i go into detail about um the stuff that we did in solid
[286:25.62] start it's so funny because i don't think most people know about it it's fine when tanner releases the same
[286:31.62] stuff you know in the coming months it'll be headline news but um very very cool um stuff
[286:40.34] dev leaked all my all the secrets too of what's coming in 2.0 um a lot of solid news
[286:49.94] funnily i guess been solid on the brain uh it's maybe it's been a slow month um but yeah we talked
[287:00.42] about this already fine-grained async currently when someone reads from an async single everything
[287:03.78] being rendered under suspense it's thrown away well actually that's not true in solid 1.0 but you have
[287:08.98] to null check fallback is shown then after async finished everything suspense rendered solid to you okay
[287:13.06] so actually solid 1.0 does actually work this way but you have to null check which kind of
[287:17.94] makes it much more awkward
[287:21.14] mutable derivation yep this is new create projection uh this is the ability to actually have stores and
[287:30.10] things be derived split effects and flush boundaries because no way no render effects depend on without
[287:36.02] running it no way to prevent side effects split effects in v2 let effects run pure reactive
[287:39.94] logic and effect will launch separately flash brownies allowed effects and trees to compete
[287:43.38] all reactive logic without committing any side effects underlying capability that enables suspense
[287:46.82] off screen other features good drive signals that's what i showed before where you can literally just
[287:51.14] pass a function into uh create signal creating a signal that's both settable and derivable yeah lazy
[287:57.38] memos yeah our memos are going to be lazy most systems already are but um i just did our reactive
[288:04.98] systems like eight years old and then yeah um we're this is kind of contentious so i need rfcs but i've
[288:11.86] been working uh with automatic batching and which means that when you set a signal it doesn't immediately
[288:20.34] propagate everywhere you it's queued on the next microtasks and you would have to actually call flush
[288:25.38] sync if you want to read the value on the next line um this is a controversial one and then
[288:33.22] yeah i'm still working on transactions but yes i i'm very excited as well dev
[288:37.30] already it's funny i i talked about most of this stuff so it's not that interesting i talked about
[288:42.98] how i lost all the stuff on my computer my article okay this one this one's good um before we get to
[288:50.02] that one let's see if there's any actually solid news
[288:56.66] i love when people make animation libraries in solid makes me very happy because this is an
[289:01.30] this is the type of library that i will never make myself so seeing someone make something like
[289:06.34] frame or motion and solid i know we already have animation libraries but every time i see a new one
[289:11.86] gets me very excited
[289:18.66] yeah i mean this is an interesting one some of the imports change which i think will be easily be able
[289:27.54] to handle i the apis for core stuff like create signal is fine i think create effect is going to be the
[289:37.30] hardest one and i don't know how to auto migrate that one um yeah it's an interesting question and
[289:45.30] it's something that i want to open up as part of the discussion of what this is going to look like
[289:47.94] because i mean it's one of the pieces that definitely is going to delay stuff on the release it's just
[289:52.02] yeah this this is going to be this can be a little bit to think about
[289:59.62] i'm i'm i have a list that i haven't published um of course i'm not signed in
[290:12.58] um starting with github yeah um god i'm just
[290:30.18] this is a rough outline of what i'm going to be talking about in a bunch of upcoming rcs but i have
[290:38.82] mostly laid out
[290:40.10] the changes and stuff for 2.0 and i think each one of these will require its own strategy in terms of
[290:47.06] migration
[290:47.62] yeah
[290:52.34] simple effects are easy but like i found this even with myself it's a little bit tricky
[291:03.70] um
[291:04.02] because like what you end up doing is having a bunch of effect like signals right in multiple
[291:11.70] places and then you end up turning them almost into an array of signals and then you know what i
[291:16.50] mean like the code change on i know this because i had to rewrite the compiler right um for these parts
[291:22.82] the code change on the like the effect itself and what it's doing is identical that part's easy
[291:29.38] yeah i guess you're right it's actually not that hard you go through and you look for all the
[291:35.06] function calls or property accesses and then you put them into the front half in an array
[291:42.82] and then you you keep your like you keep the effect code on in the second effect and then you just pass
[291:48.66] that in as the first argument in reference to the change variables yeah okay it's doable thanks yeah
[292:01.78] i don't think you can rely from sync effects to micro task effects how do you detect if something needs
[292:07.46] to be sync sync across boundaries well yeah and then this is kind of what you're you're kind of
[292:14.74] you kind of get to because it's like people relied on that behavior even though
[292:24.18] they shouldn't like from a principle standpoint they shouldn't have been doing that so to speak
[292:30.66] but people did you know like we always say don't care about the order of effects don't you know like
[292:38.98] it's our effects were still scheduled they just weren't async so i think we might be okay like
[292:48.18] we did run our effects all at the end so like it but yeah there there there will be timing differences
[293:00.66] i i don't think so i i we i have a legacy thing already set up in the repo for stuff like create resource
[293:19.46] and like old store apis and stuff like that but i
[293:25.30] because like yes the flushing happens later now but it always happened later do you know what i mean
[293:32.74] like we actually we used to always flush synchronously at the end and now we flush
[293:39.94] on the micro test the only place this is going to hit you is places where you would have called batch
[293:44.82] um batch code can be code that already uses batch can be easily converted but the problem is
[293:55.06] code where you didn't use batch will be batch now so it's not bad for sync like memos because if you
[294:05.86] can access like if you write a signal and read the memo you get the updated value it's the problem is if
[294:10.42] you try to like set a signal and then read from the dom there's no way we can migrate that unless
[294:17.46] like we could determine that was your intention
[294:27.22] but anyways i i have i have uh yeah i wonder how lazy we're looking to see so far lazy looks the same i
[294:38.26] just replaced create resource with create async we'll see if it actually works but um anyway
[294:49.14] yeah let's get back to
[294:50.74] this one
[294:53.62] not this one sorry this one
[295:02.26] what was i even talking about
[295:06.26] uh
[295:11.62] some other solid stuff where i'm going
[295:12.90] basically aria kit being
[295:20.10] being pushed into solid uh or being sort of ported into solid so it's a project that definitely has
[295:30.82] interest it's come up a few times in the past um
[295:35.94] danny's heading the cause here so like hopefully people come help check it out i don't know um
[295:41.54] he he's right we probably will need
[295:44.98] we probably will need to uh
[295:56.10] have some core intervention here because there are patterns that are in react that are really awkward
[296:00.98] like as is really an awkward as hell pattern um as as a component might be fine but like
[296:08.18] stuff that requires introspection often component libraries is really odd and it's a very big reactism
[296:25.78] we'll create async be able to return a store um right now we have create async store in the router
[296:32.58] we might still need to do that like basically the answer is yes um it's it's it's but it's actually
[296:40.66] the combination of two primitives it's actually taking a crate async and then deriving um
[296:45.06] deriving uh
[296:48.42] a projection from it i'll show people how to do that in the future basically now that we have derived stores
[296:55.46] it's it's like you can take something that's like a memo and then drive it out to a store
[297:02.74] like you can take something that's like an async signal and then turn it into a store
[297:07.30] um introspection is sometimes a problem i'm not saying this one it's just like react has this weird
[297:19.54] pattern where you render the vdom and then you clone the vdom and then you add more properties
[297:25.14] properties to it as as might be fine but there's like a lot of these component patterns that involve
[297:29.46] introspecting the rendered vdom and then copying it and then changing it and then rendering it and in
[297:34.98] solid you get a real dom node back and then cloning it makes no sense like it just doesn't
[297:39.70] it's just not a pattern that makes sense with that there's other ways to do accomplish similar things but
[297:44.42] some api surfaces are just like it's funny when you talk to the react core team like seb that they
[297:49.22] actually hate those patterns a couple points he was like lamenting that he couldn't do any
[297:54.50] optimizations because of children introspection we're like in a slightly better boat but it's still like
[298:00.02] kind of unfortunate
[298:01.22] yeah yeah this is this can this is also doable yeah yeah you basically the saying that every time
[298:14.42] i'm this isn't quite right but conceptually it's the right thing it's like every time create the async
[298:20.66] data updates diff it with the current data in the place and then fine-grained push it out so if your data
[298:28.02] data updates you automatically get fine-grained updates yeah that's that's conceptually it okay um
[298:32.98] yeah there's a few patterns anything that uses
[298:39.30] like reacts clone element is one that doesn't make sense in solid
[298:58.02] um yeah it is an interesting problem i'm looking forward to seeing work in this area
[299:09.06] um yeah we talked about this
[299:13.46] this is a cool little demo i saw which is i mean it's not quite correct solid people who are like why
[299:21.78] aren't you using create resource but it shows how quickly you can just get set up on hono hono and um
[299:26.82] dino anyways uh yeah there's been a discussion recently about um typescript
[299:36.18] um why am i not seeing the original thing i posted
[299:45.06] maybe this is the original one about typescript and signals for anyone who doesn't know the problem
[299:50.50] i'm gonna just put it out there so you know signals are pretty sweet typescript the signals has
[299:56.82] this one really freaking awkward thing which is it count can be zero right or maybe if i make count null
[300:08.58] let's make it null and then say that it's like
[300:12.26] make undefined and then i'd be like number
[300:16.34] yeah i'm trying to think of the best way to to show this
[300:32.58] um
[300:40.50] let's do what i want
[300:44.50] object could possibly be undefined right the the this is this this is fine this this suits my case
[300:53.70] let me put this in a function so that it stops yelling at us
[301:02.58] there we go we're in a function format
[301:08.34] count is possibly undefined basically the problem is even though we checked if count existed it's
[301:16.74] telling us it could be possibly undefined that's because each invocation of count
[301:23.30] um these it's a fresh thing there's no type narrowing and i did a whole stream about this a while ago uh
[301:30.66] uh about signals and typescript i think it was about a year and a half ago
[301:35.14] so people are finally because angular also chose functions for their signals we're finally talking
[301:41.14] about like don't get me wrong see you can if you had count dot value as your api
[301:48.34] i don't i don't uh i this doesn't exist so it's not going to work here but generally speaking like
[301:56.26] this doesn't have the same problem even though it's a getter and it could return a random number
[302:03.38] count up value like you find in view and preact will treat the narrowing properly
[302:14.58] probably
[302:15.14] yeah i mean one one of the reasons
[302:22.18] the problem is that like getters is the wrong solution like it's fine this felt went with classes
[302:34.58] but that's like bringing a machine gun to it like the problem is that like it doesn't matter the shape
[302:42.18] your reactivity whether you use dot count whether you have ruins whatever eventually someone can do this
[302:48.02] and reactivity will still work const d equals whatever this will be reactive regardless of this
[302:59.06] and you will have the same problem functions are the fundamental piece of composition if you force
[303:05.86] people into wrappers you force people to computers you're just creating extra nodes this has different
[303:10.34] implications the worst thing is if you had apis that expect signals and now you're like oh i don't
[303:14.74] have a signal i need to wrap it in something just to make it play along of course you could then have
[303:20.90] the choice with your api to go take a signal or not a signal but you see where you're going you lose this
[303:25.94] like everything i built in solid was to try and make this part transparent so you treated everything
[303:30.98] as reactive as reactive on the inside you don't want to get into is signal land you don't want to get it
[303:35.06] i'm it is my opinion that in javascript functions are the right way it's almost non-negotiable
[303:44.50] i we've had whole streams about this and it's it's very unfortunate that it doesn't work with typescript
[303:56.26] yeah i mean and this is people ask the problem is we use it in templating so here's a here's a
[304:01.62] beautiful one ever i ever have like now that we have non-null things um this is a lot nicer but
[304:09.70] sometimes some people i've joked that my whole point of of of uh async of non-nullable async is so
[304:16.98] that i could solve this stupid problem because like what i'm getting at is picture if you had to do this
[304:23.86] user then user dot name like you don't always everything in jsx or any templating language
[304:31.78] for that matter generally is an expression which means that it's very awkward to try and pull out
[304:37.14] the the the thing like you could hoist it but you could do this in any scope you start writing code
[304:43.46] this becomes awkward because everything has to be like obviously you can wrap it in a function
[304:47.62] when you wrap stuff in a function you can like declare it but like a lot of places you don't get to
[304:53.86] yes right and that's that's been the whole problem here i mean i'm not sure you don't get to do this
[304:59.30] but i'm not sure you don't get to do this but i'm not sure you don't get to do this but i'm not sure you don't get to do this
[304:59.86] but i'm not sure you don't get to do this but i'm not sure you don't get to do this but i'm not sure you don't get to do it
[305:01.86] yes right and that's that's been the whole problem here i mean i'm i'm even okay if i can make our accessor type have that annotation
[305:13.86] yes right and that's that's been the whole problem here i mean i'm i'm even okay if i can make our accessor type have that annotation
[305:29.86] yeah i'm not i'm not worried about show see the problem is show we already do that kind of like a certain amount of narrowing
[305:41.86] um because like we pass the function form out right you can go like show you know show when and then pass a function callback
[305:49.86] the problem is like even if you try and be clever for any type of narrowing like is it a string is it a value like it just doesn't
[305:56.86] even within the show condition you can't do it like it's it's it's actually really frustrating
[306:03.86] don't get me wrong people you saw it all the time and the tools you give them are clearly adequate on a type of time it just this is this thing just bugs me like it just really really bugs me the the like
[306:21.86] because there's a lot of people that will never do this it bugs me that the show component even has to have a function form
[306:33.86] it's actually a weird complication because once i i added the function form we had to actually consider what happened if someone access the function outside the life cycle like if they put it in a set timeout
[306:45.86] these are things that wouldn't have had like wouldn't have been worrying about
[306:51.86] the problem is if you provide the variable that way you're kind of guaranteeing that it's true
[306:57.86] because it like it would only call it if it was truthy
[307:07.86] anyway
[307:11.86] well people angular decided that functions were the right correct way to go as well
[307:17.86] so people in the angular community started talking about this allowed type narrative such as always on or always off that's pretty extreme
[307:25.86] um this triggered a whole bunch of conversation
[307:29.86] i added that like
[307:31.86] api matching is a pain in the butt
[307:37.86] i added that every function is there so like you're gonna get there
[307:41.86] but i think
[307:43.86] what was interesting the most important thing to me was that um
[307:47.86] josh goldberg who also wrote our es limp plugins very good at typescript
[307:51.86] finally got him to or someone good at typescript to talk about it
[307:55.86] and he understood
[307:57.86] with our conversation
[307:59.86] what we're asking for
[308:01.86] because it's not about purity
[308:03.86] it's not about
[308:03.86] idipotency
[308:05.86] it's like a specific other characteristic
[308:07.86] so what he did
[308:09.86] was he
[308:11.86] opened up
[308:13.86] we have a
[308:15.86] a
[308:15.86] different type script issue
[308:17.86] that apparently
[308:19.86] is
[308:19.86] it's still an annotation
[308:21.86] but at least it's
[308:23.86] it's basically trying to
[308:25.86] yeah what do you call it
[308:27.86] identity
[308:27.86] so maybe it's like
[308:27.86] potency
[308:29.86] it's basically
[308:31.86] it's basically
[308:31.86] trying to come up with a way
[308:33.86] that we can
[308:33.86] classify
[308:35.86] um
[308:37.86] this kind of thing
[308:37.86] so it acts like propped up value
[308:39.86] i don't know if this will go anywhere
[308:41.86] there's a whole bunch of descriptions
[308:43.86] um
[308:47.86] but
[308:49.86] at least the right people are talking about
[308:51.86] we have alex from angular here
[308:53.86] um
[308:55.86] brian cavanaugh
[308:56.86] obviously
[308:57.86] typescript
[308:58.86] maintainer
[308:59.86] you know like
[309:00.86] andrew
[309:02.86] we we have people actually
[309:03.86] in the conversation
[309:04.86] i'm hoping this one
[309:05.86] goes a little further
[309:06.86] so at least we can talk about it
[309:08.86] yeah
[309:13.86] fabio
[309:14.86] yeah
[309:15.86] so like
[309:16.86] yeah
[309:17.86] i
[309:18.86] this is in the works at least
[309:19.86] that's that's my
[309:20.86] that's my
[309:21.86] that's my hope
[309:22.86] thank you
[309:37.86] thanks for joining
[309:39.86] yeah and i would be okay with this as well
[309:50.86] but
[309:52.86] it
[309:53.86] they aren't pure right
[309:54.86] like
[309:55.86] we just need
[309:56.86] it'd be nice to have something because the workarounds are horrendous
[309:59.86] so
[310:03.86] anyway
[310:04.86] just wanted to bring this issue to people's attention
[310:07.86] i'd love more opinions on this honestly
[310:11.86] all right
[310:13.86] what
[310:20.86] okay
[310:21.86] so
[310:21.86] what do i got left
[310:22.86] view
[310:23.86] it's so funny when i saw this i was literally thinking about how to do view transitions and solid
[310:30.86] it's cool if they're thinking about how to use view transitions and solid it's cool that they're thinking about how to use view transitions in a sense i wonder if this api design is almost similar to the old um this is for react
[310:41.86] oh they already merged it
[310:42.86] oh they already merged it huh that's cool similar to the old like they used to have like uh uh react transition group it's like the idea of using this wrapping component once you have something like suspense
[310:54.86] and you have like this ability to denote when things are coming in and out see what i was thinking uh playing around with the timing of in our transitions like you could await a transition and then have the await after the await like have that moment before actually render does the effects but when it's knows that it's fine from a pure standpoint it's like it's like it's like the
[311:01.86] that you could take your snapshot at that point like and basically give end users a hook so they can set up view transitions when things are coming in and out so i was thinking uh playing around with the timing of in our transitions like you could await a transition and then have the await after the await like have that moment before actually render does the effects but when it's knows that it's fine from a pure standpoint that you could take your snapshot at that point like in basically give end users a hook
[311:30.86] um so they could set up view transitions however they want um based on transitions there's a few different api ideas i'm going to check this one on more detail i do think it's it's i think it's interesting that we're finally getting to a point because view transitions in these kind of schedule frameworks are something you have to play with because you don't want to just wrap the whole async things because the view transitions can be blocking what you want to do is have the framework do the async work be ready to render because it knows like suspense is done or transition is done
[311:59.86] and at that point in time take your snapshot render the page and then do the transition
[312:06.86] but you want to wait until all the async work is done and the only way you can do that is if you can actually hook into the internals of the framework or they expose a hook to it so cool api i'm going to i'm going to definitely double look at this but it's good that this is where we're getting to because if we can get native solutions like this it saves us from needing to do much in user space
[312:28.86] yeah i'm going to need to spend more time to actually look at this but this one caught my eye what else is interesting i think we already talked about this he's talking about um the fact that react context ends up re-rendering the whole app tree when the value changes
[312:57.86] when the value changes and everyone's like this is why i use signals
[313:00.86] okay
[313:04.86] maybe my last topic of today
[313:06.86] yeah having an api where you call the get and set the only problem is you have to get the get and set from somewhere which i think with something like jotai isn't bad because you're using like react so like you're defining them
[313:26.86] generally my understanding is you're defining them at the top of the component like almost like hooks
[313:33.86] i mean the set is fine set always works but the get is is the key one whereas i mean it's fine there are some reactive libraries that have that api with the get but picture like literally littering it all over your template and like every single spot because you where you access it matters because if you're inside this expression well then only that expression runs it gets a lot clunkier
[313:55.86] there are frameworks that do that though like they'll have just like a dollar sign or something
[314:02.86] you define them after outside but they get doesn't they get happen like top level like in the component like you're saying hey component subscribe basically to this value
[314:17.86] whereas like
[314:24.86] whereas like
[314:24.86] well i mean you see when you use signals you end up like putting the it'd be like your template would be like 50% gets
[314:32.86] or use atom okay
[314:35.86] or use atom okay
[314:37.86] proxies are fine but
[314:39.86] you
[314:41.86] not for primitive values
[314:47.86] not for primitive values
[314:48.86] oh okay it's it's for derived values yeah yeah i mean
[314:59.86] that's
[315:01.86] that's
[315:02.86] that's that's fine i i i'm mostly thinking about like templating concerns
[315:06.86] yeah
[315:07.86] pretty much it's funny when i originally designed solid i thought everyone would only not use primitive values and then signals became the hot thing
[315:17.86] um
[315:19.86] um
[315:20.86] okay what do we got here
[315:23.86] i don't even know if this is something worth ending on
[315:26.86] this is javascript developers are the least knowledgeable when it comes to back-end concepts and ideas
[315:30.86] i mean
[315:36.86] front-end developers are probably the least knowledgeable when it comes to back-end concepts and ideas in general
[315:42.86] but are back-end developers the least knowledgeable when it comes to front-end concepts and ideas
[315:47.86] i don't know
[315:49.86] this is bait people get mad but spyra really did hamper knowledge of a lot of traditional web dev and that's relevant again
[315:54.86] we just find the spyra is awesome education we'll catch up conference talk on this very topic
[315:58.86] oh there you go
[316:00.86] i don't know
[316:01.86] what's it
[316:03.86] it's kind of interesting because it's also like
[316:11.86] i guess they're talking about like javascript like
[316:16.86] node developers or whatever
[316:19.86] that's because you have step school schools junior and many people's first stretch of work
[316:22.86] sure
[316:24.86] that that impacts things
[316:26.86] but it's also just because they're
[316:29.86] it's not the place where their problem exists
[316:32.86] like
[316:34.86] a lot of people building
[316:36.86] if you're building an app
[316:37.86] conceptually
[316:39.86] like a mobile app
[316:40.86] you don't care
[316:41.86] but you need it to run on a server just because you don't care where that server is
[316:43.86] you go get it
[316:45.86] you go to
[316:46.86] Netlify or Vercel
[316:47.86] you get a serverless function
[316:49.86] and you just run your app
[316:52.86] the server isn't even a thing
[316:54.86] so would they know less about server?
[316:55.86] yes
[316:56.86] because they literally don't care
[316:58.86] um
[317:00.86] yeah
[317:04.86] i changed my mind on this one
[317:05.86] i
[317:05.86] i actually don't think this is an interesting topic at all
[317:08.86] never mind
[317:10.86] yeah exactly
[317:13.86] let me see
[317:15.86] did i have anything else on blue sky that was worth
[317:18.86] that was worth talking about
[317:20.86] yes
[317:21.86] yes
[317:22.86] good
[317:23.86] good
[317:23.86] we actually have something good to talk about
[317:25.86] okay
[317:27.86] last topic of the day
[317:31.86] i got some spaghetti or
[317:32.86] yeah
[317:33.86] egglie olio olio
[317:34.86] waiting
[317:35.86] um
[317:37.86] i have seen this issue
[317:39.86] i didn't even look at it to know what exactly what issue this is
[317:42.86] google translates uses a font for text replacement breaks react
[317:47.86] this issue has been open since like 2014 if i remember
[317:50.86] oh no this is 2018
[317:52.86] and everyone discovers it for the first time
[317:55.86] later
[317:57.86] i looked this up myself because people were complaining about this with solid
[318:00.86] and i was like
[318:01.86] i don't think anyone could possibly solve this
[318:04.86] and i looked it up and sure enough there's a react issue
[318:06.86] so i just said
[318:06.86] this i'm able to reproduce this bugs
[318:08.86] it's like
[318:10.86] it's funny because this topic is one of those
[318:13.86] this is this topic is one of those topics where like
[318:19.86] where
[318:21.86] they're like it pulls out those same guys that i showed on my escalator earlier
[318:26.86] whereas like they're just kind of like off to the side and have no clue what's going on
[318:29.86] they're like this is why javascript frameworks are terrible or whatever and it's like
[318:33.86] you guys understand that this would literally break anything like dan goes
[318:40.86] as each next
[318:43.86] unfortunate soul describes issue at some point it seems like there may be a plan to get fixed on the translate side using shadow DOM or something
[318:50.86] is this still on the radar
[318:51.86] he asked addy as money
[318:53.86] there may be no official word yet
[318:54.86] i think large sense of library spaces because all of the guests the component libraries are expected to have control of the DOM they produce and no it's not expected to do random things to your page or to replace a single node
[319:03.86] yeah
[319:04.86] this is this is just one of those things my response was it breaks more than react this issue isn't some weird reactism it's a
[319:13.86] any declarative UI that manages elements needs to know where they are at all times it owns that part of the DOM if something outside the library moves them around or inserts things in between things will go wrong
[319:23.86] and so eric's like doesn't literally any extension that also the DOM do this i'm like yep
[319:29.86] right
[319:31.86] a lot of them mess with the head so it's outside of you know our responsibility some add stuff to the end of the page so that can go unnoticed but things that in line starts to change HTML are going to be a problem
[319:42.86] sometimes things get by but the cases that don't
[319:45.86] google translate search highlight are probably the more content sites where hydration doesn't make much sense
[319:51.86] and i think this is a common misconception that's why i want to talk about this this isn't an SSR problem
[319:56.86] i think this is has to be actually on the extensions and i think the platform needs to give them better tools
[320:06.86] this is not fixable from a framework or library standpoint
[320:10.86] uh from my opinion
[320:13.86] yeah like i don't know if browsers can fix it directly but they need to give them the tools for it
[320:28.86] um see this is everyone is so this these kind of issues break SSR because they completely kill hydration in every framework
[320:35.86] because they literally expect the DOM one way and they crawl it but you can be on a client side website and the same thing happened
[320:42.86] you can go client side you can hit translate and it changes the DOM and then the framework's screwed
[320:46.86] um sometimes non-vdom libraries get a little bit more leeway like people like
[320:51.86] uh or like we granular stuff like things like quick and solid sometimes get away but we can still get screwed up by it
[320:58.86] even if we keep references um solids walks break it even if we aren't diffing we still like have to walk to nodes
[321:07.86] so if stuff gets changed before we can like find it
[321:11.86] sometimes we will clear stuff if we think we own all the nodes in the parent or parent instead of working in a range
[321:18.86] sometimes stuff will work fine though so i i just think that we like i think it's important to understand that even if stuff can sometimes work in a non-vdom libraries
[321:29.86] that doesn't mean that they should work um and i have an example here
[321:32.86] this isn't even completely limited declared frames jquery could hit this if you don't grab every single element by selector
[321:37.86] or make some assumptions
[321:44.86] like if you assume your sibling elements you like if you assume some sibling element that you inserted is what you think it is
[321:50.86] or maybe your element is a direct parent of some text and now it isn't these sort of things recap it in general
[321:56.86] like the truth of the matter is like if you were using jquery and you selected an element
[322:00.86] and you expect that whenever a user does something you put some text in it and then google
[322:08.86] puts a like a font element in it it's like it's not you know what i mean like it's not the same
[322:15.86] thing you can't it breaks your walks it doesn't matter how small the scale is if you're controlling an element
[322:20.86] and google goes and changes on you you're not going to know about it
[322:23.86] or like or sort of translate does i'm i shouldn't say google specifically
[322:28.86] obviously content sites have less dynamicism and interactive so they don't hit this as much
[322:33.86] yeah
[322:38.86] anyway
[322:40.86] it was just funny because yeah what i was talking about happened here
[322:43.86] to me this is a strong condemnation of the whole pattern of web development
[322:46.86] we aren't lowly apps we can't control over the ux the user it's in the hml team can respect that
[322:50.86] this is for the end users it shouldn't be up to extensions to use the shadow down and make some secret non-tree
[322:55.86] so frameworks are the broken they're rarely up obstruct
[322:59.86] um extensions
[323:03.86] i mean that's an opinion to have i suppose
[323:07.86] why do i feel like this person probably likes web components
[323:11.86] i feel like it should be able to change the page but it'd be nice if there was a web able to report each change to the framework rather can be defensive
[323:28.86] i mean yeah that's that's that's interesting that's another alternative approach
[323:33.86] a little bit tricky though
[323:36.86] because frameworks often don't have a complete view like the technically altogether they have a complete view of the page but they might not have at any specific part of complete view you know like whether they're using components or whether you know
[323:52.86] i don't know i guess like if you have a full vdom tree and then you can link it maybe this is more of a signals problem like i i literally don't have a complete view of the dom i everything is granular and isolated so like if some element got notified that it changed
[324:08.86] yeah
[324:10.86] it'd be kind of hard we don't really link back that way we rely on closures i don't know tricky
[324:19.86] but this person doesn't do js at all yeah that's actually more fair
[324:25.86] mutation of their
[324:32.86] uh yeah anyway
[324:35.86] that's all i got for today
[324:37.86] today's stream got into some of the topics i wanted to
[324:40.86] i have to admit it didn't quite go exactly where i wanted to i thought i would
[324:46.86] break into some more interesting diagramming
[324:49.86] um
[324:50.86] but i had a good time i hope
[324:52.86] all of you did
[324:54.86] my plan i'm still working on 2.0 stuff enough so that i might be able to actually
[324:58.86] stream some of it
[325:00.86] next next week or the week after
[325:02.86] depending where i are i got a lot of work ahead of myself
[325:04.86] but
[325:05.86] um
[325:06.86] yeah
[325:08.86] thank you all for joining obviously i would love the like or the follow helps a lot
[325:15.86] um just getting the word out there
[325:17.86] so
[325:18.86] thank you all and uh
[325:20.86] yeah i don't know if there's anyone to uh
[325:23.86] raid right now
[325:25.86] don't follow enough people
[325:27.86] oh well i'm gonna end the stream now
[325:30.86] Catch you next time.
