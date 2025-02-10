---
showLink: "https://www.youtube.com/watch?v=-8UeTHXoySc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "A First Look at RedwoodJS w/ Anthony Campolo"
description: ""
publishDate: "2023-08-18"
coverImage: "https://i.ytimg.com/vi/-8UeTHXoySc/sddefault.jpg?v=64de7500"
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

[00:00:00]  Hello and welcome to my stream today. We are going to be talking with Anthony about Redwood.js today. That's the idea. Redwood for those who aren't
[00:00:18]  familiar is another React framework but it's it's a little bit different as we're gonna go over today. It's one of the React frameworks I haven't actually covered as
[00:00:28]  of yet but as you know right now is where I just kill some time while stuff gets going maybe advertise the stream here for a minute. I don't know I don
[00:00:43] 't have as much preamble as I usually have I think because truthfully this week's been kind of slow on the news front I mean I've been working I've
[00:00:52]  been head down working a lot of stuff but it it I don't know maybe maybe you all have some stuff that you've been doing come say hi in the chat
[00:01:05]  as you join on eh all right just let's see here just getting that up we're live all right I've known our guests today for quite some time Anthony's always
[00:01:39]  right at the front of the line when it comes to new technology So he was one of the early people to discover the work that we've been doing with Marco and with
[00:01:48]  SolidJS So I've had plenty of conversations with him over the years but this is the first time he's been on our stream so I'm looking forward to that.
[00:01:56]  Okay what is Redwood yeah Redwood well I mean I'm gonna have Anthony explain that probably better than I can explain that but I mean I definitely had some fun with
[00:02:11]  with this one you know in general just getting getting prepared you know every every week is a new is a new challenge to kind of decide on like how I'm going to you
[00:02:21]  know come up with a cover or stuff. And as it turned out I just happened to have these giant kind of like what do you call them pine cones sitting around in
[00:02:35]  my house and you know there we go you know I was very tempted to spend this whole stream you know I know with a nice redwood background but I think I think
[00:02:50]  we probably over doing it a little bit where are we all right now we've got some people coming in okay okay sip from the orange juice all right yeah yeah first time
[00:03:14]  we chatted FSJM yeah yeah so Anthony's already in the chat so probably no point delaying this much longer I just like you know taking as long I don't
[00:03:25]  have as I said before we need to get some of that you know cool intro music and make you wait for 15 minutes like the stream will start soon and it's like
[00:03:32]  now so the stream starts now yeah but yes we're not we're not here necessarily to talk about the trees although when I when I did google redwood.js let me
[00:03:49]  actually like share my screen again here yeah I did I did see that there's a lot of nice tree imagery their their logo oh this is the website sorry so like a
[00:04:02]  bigger version of the logo somewhere yeah um there we go yeah see so a lot of inspiration to be pulled from here but yeah enough enough of that I'm I'm just gonna
[00:04:13]  redwood.js and orange juice great combo yeah yeah no exactly that's what I thought anyway um let's let's just get how how am I doing here yeah it
[00:04:31] 's been four minutes see I usually wait at least five minutes because that's like the magic number for people to both see that join on and get past the stupid twitch pre-
[00:04:40] rolls how we doing on twitch let's see yeah our twitch audience is not here yet but um we probably need to get started because I'm I'm honestly I don
[00:04:51] 't have as much today um as I said so I say that and then like five hours later you guys are all like it's okay Ryan you can end the stream all right
[00:05:01]  so anyway uh yes I don't know did anything interesting happen to anyone else this week all right you know what one more sip of the orange juice yeah I guess I guess
[00:05:36]  this is just like the like the slow week even in javascript news I felt like that it's just like smack it's like getting towards like it's actually funny
[00:05:44]  my kids um went back to school this week but I feel for a lot of other people it's like the last two weeks of summer so like if you were like holding off
[00:05:52]  that summer vacation you're taking it now um I've definitely noticed the the downturn on traffic the last little bit yeah okay fine I'm I'm done wasting your all
[00:06:07]  your time here um let's let's just get this rolling okay and uh we're gonna welcome Anthony onto the show all right here we go and hey Anthony how you doing
[00:06:19]  what's up man as I said surprisingly very little um which is unfortunate because I you know I can talk about anything you know for hours at a time but right now I'm
[00:06:29]  actually have a surprisingly I think we'll still get probably a solid five hours in either way but um yeah I mean I think it's okay if there's no big news it
[00:06:40]  just means it gives you time to work on your own thing or make news well yeah that too but um part of obviously we're going to talk about Redwood.js
[00:06:49]  today and um part of that is that Redwood.js had a version 6 release not that long ago right yes and it's very exciting release it's something that we've
[00:07:00]  been working on for like multiple years now it's by far the biggest most consequential one since V1 which was the first time we're like this is production ready use this
[00:07:10]  in production but the the highline things are that we added VEAT and we're getting ready for react server components by implementing suspense awesome yeah so this is a good
[00:07:20]  one good time to have you on good time to talk about Redwood um but actually what I do with all of my first time guests before we even get into you know the
[00:07:29]  great technology that they bring with you I just want to know a little bit more about about you I think our audience would love to know a little bit more about you because you
[00:07:36] 're involved in a lot of projects right um you've done a lot everything from like uh you call yourself the bard of Redwood which I take to mean like some kind
[00:07:45]  of developer advocate kind of dev rel kind of person and storyteller and and I didn't give myself that name that was Peter Pistorius who created the framework with with Tom
[00:07:55]  it'd be a bit presumptuous for me I think to call myself that but that's what Peter Peter calls me okay okay well and where I was going with that
[00:08:03]  is um you you you're you've been involved with lots of projects and you've uh you've also do podcasts streaming and all these different forms of media um yeah let's
[00:08:13]  just get how did you even get here a little bit like what what was your entry into web development world yeah it's it's uh there are many there are many layers
[00:08:24]  and many chapters to it so I'll give the the condensed version up to when I got into web dev I had a music degree and this is one of the things you and
[00:08:33]  I really connect with I I toured I did classical music jazz I was a teacher like school teacher private teacher camp band rock band leader like I did almost every type of music
[00:08:46]  education and performance which you could possibly name and think of so I was really into it obviously and wanted to make a career out of it and that didn't end up happening
[00:08:54]  and I kind of got very disillusioned with it and then kind of transitioned into not necessarily web dev but wanting to learn to code I had this idea of like coding
[00:09:03]  is a thing that I will eventually enjoy once I learn how to do it and then I can get paid to do it because it's a valuable skill and all of that was
[00:09:10]  correct but it took many years to figure out what to actually do with it I tried actually to learn AI and neural nets back in 2017 2016 which was a very hard time
[00:09:22]  to do that if you were a brand new developer like mostly it was academics who were using Python to like create these kind of models and I didn't even know Python like I
[00:09:31]  knew nothing and so I tried that for a little bit I tried like even blockchain stuff a little bit and I was like I was way ahead of the curve of both those
[00:09:40]  but I didn't have the technical chops to really do anything so I just learned a code first and then I realized like all right well I guess I should just like I was
[00:09:47]  seeing all these tutorials I was watching YouTube videos and I saw there was like so much more material and so many more people doing react javascript it was just kind of obvious
[00:09:55]  just looking at what was available to me as options to learn to code as content that taught you how to code was focusing on so I'm like well I guess I'll just
[00:09:57]  learn react so I learned react I then did a boot camp I did an income share agreement I don't know if you've ever heard of lambda school they rebranded
[00:10:01]  to boom to bloom tech they're one of those schools where you don't pay anything when you start and then you give a certain you sign contract give me a certain percentage of
[00:10:18]  your income for the first two years which can be dicey some people have like criticisms with it for for me it was actually it was the right decision and it was the
[00:10:28]  right option you're gonna face like you know what I'm talking about no I I I've heard of this once but I'm like I never actually knew if anyone who
[00:10:37]  actually went through that process like I'm familiar with like typical boot camp model where people pay and the problem is they they get blasted through this thing it's and it's
[00:10:45]  one of those like you you only get as much as you put into it thing and they work you hard and then after 12 weeks you know I've interviewed countless dozens and dozens
[00:10:54]  of those people for job positions they come in they're like yep freshman boot camp okay I know and it's funny we'd get like people from the same like groups coming
[00:11:02]  in and you can tell they work on the same project right so I could see an argument being made for like they only win if you succeed in that market which I mean I
[00:11:14]  could like I could see that see that perspective but on the other hand like when I think about how much developers make and I wonder like like in my head what their percentage is
[00:11:25]  I mean this is a whole other topic I just that's why I was I was like huh because I guess it depends on the boot camp and the value value of the
[00:11:31]  boot camp and you as you said you felt like you got a lot of value from that but it's like it's challenging because like especially I mean maybe you have opinions on
[00:11:40]  this and stuff like a lot of times with stuff that's out in the open and with the web it's harder and it's harder to stay motivated it's harder to do
[00:11:47]  that but a lot of the materials and stuff are out there if you could somehow motivate yourself and spend the time and that's what I tried to do for a long time and
[00:11:56]  wasn't able to get anywhere so it wasn't that I wasn't motivated but it was the the path to get you from total beginning to actually having the skills to do
[00:12:05]  the job because that's the thing is you can like learn things you can make progress but you're not always making progress in the right direction so you're making progress like multiple
[00:12:12]  directions but you need to actually be pointed in a single direction that you can continue to make progress on and that's the thing that hopefully a boot camp can give you you know
[00:12:20]  I would say I got I said I would get I would say I got value out of my boot camp I wouldn't say I got a ton of value out of my boot
[00:12:25]  camp and an interesting twist here is that I dropped out of my boot camp to do Redwood instead this is something that you should you'd almost never want to actually give
[00:12:56]  this advice to your average boot camp student like they're nine tenths the way through the boot camp they're like you should quit now and then go do open source instead and
[00:12:56]  it's like well you should have done open source in the beginning and that's the thing I was actually I found a framework that I was passionate about that I had connections with
[00:12:56]  that I was actually getting exposure through by doing talks so this is where I was like okay my my coding chops can only get so good so good so fast but something I
[00:12:59]  do have is performance ability and education ability and the ability to get from a group of people and explain something for like multiple hours at a time which is a useful skill for Dev
[00:13:08] Rel so I assumed the role of the Redwood DevRel essentially and started doing like all these meetup talks in 2020 when the pandemic happened because at that point all the meet
[00:13:19] ups went digital and they hadn't given up like they did in 2021 2022 so everyone was doing online meetups and then I was just able to do that I met people
[00:13:28]  like Brian Douglas who gave me a lot of good advice connections yeah open source like all right open source was already a thing back then actually it wasn't a company yet but it
[00:13:38]  was a side project he was doing so he got me involved in that and that gave me a lot of exposure to open source in general and yeah so yeah so this that's
[00:13:45]  that's awesome so this did actually Redwood did come in very much near the beginning of of these things um how did you like how did you find this framework I'm just
[00:13:56]  saying Redwood is kind of not the most known react framework so to speak how did you end up there so something that I had a deep love for before I got into
[00:14:08]  tech was podcasts I used to have a music podcast I did with my professor called loose filter so I already created and hosted and edited podcasts like 50 of them like you know hour
[00:14:21]  long podcasts with yeah Stewart Stewart like a long long time ago so as I was getting into tech I was also looking for podcasts to listen to and there's there's a
[00:14:32]  ton of them like there's you know there's you've been on many of them yeah and Tom Tom Tom Preston Warner original CEO of GitHub creator of Jekyll
[00:14:43]  creator of Toml he created Redwood with Peter Pistorius and then they brought in David Price and Rob Cameron to work on it around 2019 and in 2020 he did
[00:14:55]  the podcast circuit so I actually heard him do like six podcasts back to back around March February or March April 2020 the the big ones were like he did uh software engineering daily
[00:15:10]  um front end first uh which other ones did he do I used to like used to have them all memorized JS party um yeah so I was listening to these podcasts and that
[00:15:22] 's how I kind of heard about all these open source frameworks that's originally where I like heard about solid because you're on pod rocket and so yeah once you kind of know
[00:15:30]  the right podcast to listen to and there's kind of like 10 to 20 that most of like people who are want to get stuff out in web dev go out and do and
[00:15:38]  I was just listening to all of them so I would hear certain frameworks pop up and I noticed I noticed how Blitz Redwood and Remix all popped up in a
[00:15:45]  three month span it was February Blitz dropped March Redwood dropped and then April Remix dropped I was like huh this is interesting there's something going on here with these react
[00:15:55]  frameworks like clearly it's people think there's a time to build a thing because three people just built almost the same thing all at the same time there's like lots of nuanced
[00:16:03]  differences between them but they're all trying to create a full stack react framework you know that makes sense um and you ended up uh I guess starting FS Jam was that around
[00:16:14]  that time period as well or yep so then we so I got involved in Redwood right like just a couple months after it came out so it dropped in March and then by
[00:16:25]  May I was already blogging about it because I looked at it I looked at it and Blitz and Remix and I'm just like I'm gonna go with Redwood
[00:16:33]  for reasons that can't really quite pinpoint because it was kind of a lot of different factors but by the summer um I started going to like contributor meetups and it was
[00:16:45]  like meeting people in the community and meeting the team and Christopher Burns was another person doing the same thing he has now one of the most like longest running biggest production Redwood apps
[00:16:58]  called Everfund which was it is a company now it's in the Jamstack Innovation Fund actually and and it's for setting up like non-profit websites with donation
[00:17:09]  links and what's the point of making we'll go there in a second yeah yeah but um so Chris Chris Burns he actually had a company he was like looking for tech to
[00:17:22]  build on he was looking for something to migrate his ridiculous bespoke full stack Gatsby app to and so he saw Redwood and he was like this is cool I'm
[00:17:32]  gonna use this and um and then started migrating his company to a redwood stack and then me and him just kind of started to get to know each other and we
[00:17:39]  were both interested in a lot of these other projects he was also looking at things like blitz and so both me and him realized there's like multiple projects out here trying to
[00:17:48]  do something like this and redwood was using the term full stack jam stack already that kind of they're saying their slogan was bringing full stack to the jam stack so like we
[00:17:58]  didn't invent that idea but what Christopher Burns Christopher Burns was like we should just make something called full stack jam stack like they haven't actually shortened it to just like full
[00:18:07]  stack jam stack yet they would always say bringing full stack to the jam stack and so he he always says he invented FS jam I'm like well kind of you know but um
[00:18:15]  so he had mentioned that he wanted to create like a community basically he started like a discord and I had already been talking to him about how we should do a podcast so
[00:18:24]  I'm like okay this should be our podcast like let's bring in people from Redwood and people in the community and then people other people doing interesting things and just kind of
[00:18:32]  grew out from there you know started with just Redwood people but then we brought on Brandon very very early up episode six to talk about blitz so we want to make
[00:18:40]  sure it wasn't just a Redwood podcast we were like very conscious about that then as this continued we've just done general web dev we started bringing on more front end focused
[00:18:49]  ones like Marco and solid and you know but it kind of spans the whole game to also have database people like we talked to Paul when Superbase first came out you know
[00:18:58]  right okay yeah I've listened to many episodes of FS jam and pod rocket as I've mentioned in the past those two were the first to find solid and also coincidentally became
[00:19:10]  my favorites because you were always looking at new technology and not just going with it I mean it's it's kind of obvious that this would happen like some of some maybe the
[00:19:21]  bigger more popular ones play a little safer which means they're kind of less interesting to me I'm so yeah I know no comment but that that was uh well it's
[00:19:31]  it's kind of like you know we some people have just different some people want to like you know they're they're working for a company and they want like stable tech and
[00:19:39]  they're like I don't need the most cutting edge thing I need some stable reliable or some people are like they're always they're they're more of a research mindset and
[00:19:48]  they know things are always going to be improving and changing and there's always things being worked on that aren't quite fully baked yet but will be fully baked one time down
[00:19:55]  the road so you and I just we just both naturally think that way and we find those naturally interesting problem sets so it's looking who are the people who are doing things that
[00:20:04]  are new and what are the consequences of those things down the line you know and not everyone thinks that way true and honestly like yeah there's just different spaces of where you're
[00:20:13]  at and what your needs are at those times okay so let's let's flip this back around uh we we've got a bit of background on Anthony as I said known
[00:20:22]  him for a few years now so it's you know it's been good times but I'm I'm gonna get back to Redwood here because uh I mean it does
[00:20:30]  come down to to this question right you know like a little bit because you mentioned at that time when you you know saw Redwood and want to get into it it was like
[00:20:41]  basically three meta frameworks built on React within three months it's like bang bang bang and you know I guess that was the time to build meta frameworks on React um you know
[00:20:52]  I guess they saw need uh like a you know some kind of want out there and Redwood has taken um compared to those two I think actually a kind of more interesting take
[00:21:04]  that's actually differentiates it from a lot of the others um I don't know let's let's just I'm just looking at the website right here I've got it
[00:21:11]  in front of me and it says like focus on building your startup not fighting your framework like those are those are fighting words like yeah exactly and this is so yeah it's
[00:21:21]  a good question my my first like counter response is the reducto ad absurdum of that argument is there would never be frameworks at all no one would ever build a framework
[00:21:31]  and so like obviously that's not what we want either so and I also think that despite the fact that Blitz Redwood and Remix all came out around the same
[00:21:41]  time what ones have come out since any so like actually I feel like at most there's usually one or two new frameworks a year so I don't think it's as hard
[00:21:53]  to keep up with as most people think the problem is people generally avoid new frameworks in favor of just sticking with the one they already know and then one day two years have
[00:22:03]  gone by and they're like well there's four new things I know nothing about what the heck so that's like you got if you're someone who can kind of keep up
[00:22:10]  with the pace every time a new one comes out okay I got six months to figure out how this new one works before I'm behind you know so that's how I would
[00:22:17]  recommend looking at it from a mindset point of view but to get back to like why why Redwood if someone asked you I want a full stack framework for JavaScript what would you
[00:22:25]  tell them to use first it's like what do you mean by full stack because I mean okay so then and then they would say I'm someone who's used Ruby on
[00:22:36]  Rails, Django, and Laravel that's what I mean by a full stack framework yeah okay yeah so in JavaScript we don't quite have that let me show you what
[00:22:44]  we mean by full stack that's the problem that's why we needed to create Redwood for that exact reason yes yeah I that's that's where this was going right
[00:22:53]  because the truth of the matter is um with this front going backwards approach um you know we don't we don't have the same we've never really taken the same focus there
[00:23:05] 's people who ported things like Laravel-esque stuff into JavaScript world things like Adonis or whatever but like it's not the same like you you want to
[00:23:14]  have React you know whether you know and be able to do this essentially you want your modern front-end framework and be able to do this so yeah what what does that mean
[00:23:23]  in terms of of Redwood yeah so the the other ones that I've tried to do a kind of full stack thing was also Blitz and then there's one called
[00:23:34]  Bison and now there's Wasplang which is kind of cool but the one most people now would know about is CreateT3 app so you've had um I think
[00:23:44]  Christopher on your CreateT3 app so I would say out right now I would say Redwood and CreateT3 app are the two full stack React frameworks right now and it
[00:23:52] 's very simple it means they give you Prisma and hopefully a way to do auth that's that's that's literally all it means you know it's really not actually
[00:23:59]  that complicated they just give you a database tool like people who say there's no full stack framework sometimes they mean there's no framework that has like emails and queue jobs and like
[00:24:11]  infrastructure code and like all that kind of stuff that's the way I think about is there's a back end like there's a server yeah I guess for me that was what
[00:24:20]  I was thinking of when you mentioned those other ones because I mean you're right no one else ships with Prisma other than the ones you look like like a Next.
[00:24:28] js doesn't and a Remix doesn't and whatnot but like you know since the evolution of services and stuff like Prisma um or you know like like stuff like like people
[00:24:39]  aren't actually you know and a lot of the like online stuff like you know uh when I think of stuff like uh you know like PlanetScale and all those like it
[00:24:47] 's not that hard to get these kind of things into your existing back-end framework compared to you know before that's why I was I guess we still have a gap
[00:24:56]  on the people who want the mail servers right like do you know any frameworks that are like I feel like I just heard of one the the other day I remember it stuck out
[00:25:05]  to me because I'm like oh that doesn't happen very often um I'm forgetting which one it was though but um okay fair enough but okay so basically the idea is
[00:25:16]  like most of the space doesn't actually offer all the tools to actually like even if you install say Next.js you still need to go somewhere else to actually get an app
[00:25:28]  going you're actually missing pieces how can you call yourself full stack if you can't deliver an application with the pieces that are available um and I guess that makes sense how
[00:25:40]  this whole startup kind of marketing like the framework for startups so that's where it comes back to that yes this is where the startup stuff is pretty important so for let's go
[00:25:49]  back to history Tom and Peter they were working on a startup called Chatterbug which was like one of those language learning type apps and so this yeah we have a so
[00:25:59]  we do have for things that are not built in the framework we will have Docs showing you exactly how to do it so that's that's pretty good because there's always
[00:26:06]  this question of like do you want to build something this opinionated into your framework or you just want give someone like the specific doc to do it with your framework sorry to interrupt
[00:26:14]  the history yeah yeah no it's all good so we so Tom and Peter they were building an app that was actually like a react front end querying a Ruby on Rails
[00:26:24]  GraphQL back end which is just like total nightmare like it's hard enough to do that with a node GraphQL back end you know so they were like wow this is like
[00:26:35]  so challenging but by the time you get set up it's like a pretty sweet dev experience so they wanted to create a framework and you know Tom built GitHub with Ruby on Rails
[00:26:45]  so he's already had a lot of experience seeing what the benefits you can get from having a monolithic framework to work with to build something substantial but there was like like
[00:26:55]  we've said there's not necessarily a good solution for doing that in JavaScript so they started building it for that and then at a certain point they decided to drop the Jamst
[00:27:04] ack branding which like Netlify has done and a lot of people are doing right now because they felt like it confused people and they felt like even though the pitch was it
[00:27:13]  lets you do more than you can normally do with Jamstack they would hear Jamstack they'd be like oh this has the limitations of the Jamstack like
[00:27:19]  no we just said it brings you beyond the limitations of the Jamstack that's the whole point it's like no Jamstack so yeah so they stopped using Jamst
[00:27:26] ack and then started saying it was the JS framework for apps because they wanted to say this is for building companies and applications and this is for people who want to ship stuff which
[00:27:36]  people had been shipping with it already they emphasize even more and then the real kicker is Tom because he's independently wealthy has been creating a fund to fund companies that are
[00:27:47]  using Redwood to build so if you're going to build your company with Redwood and you commit to using Redwood you can basically get a check for your fund for your
[00:27:57]  company gotcha okay well yeah so yeah the whole package kind of comes together um that make that that makes sense yeah it's it's always been a little bit tricky for
[00:28:10]  me when looking at this kind of stuff because I you know I live on the other side of things where I'm like don't be opinionated uh because I'm working on
[00:28:19]  primitives but someone has to be opinionated someone has to make those decisions right and it's so it's like the layer of where that decision gets made I think I
[00:28:27]  think it's very interesting um to see like those pieces come together as you mentioned I had Chris on and we talked to create t3 app and I it was it was the
[00:28:36]  same kind of uh question or like potential tension thing I'm thinking about here except Redwood's been around longer and you know stuff changes over time you know I think I have
[00:28:49]  to kind of address this because there's like two sides of when you're being opinionated at about like you know choosing those pieces one side is like how do you decide
[00:28:58]  what gets included like what criteria like makes it worth including versus not including makes you know like forget about the choice I can assume that it's you're able to make a good
[00:29:09]  choice once you're like I need a database technology I like I'm gonna look at the market and pick something reasonable for customers but like to know like this is a decision
[00:29:19]  point that should be part of the framework versus something that that isn't part you know these kind of decisions and then the implications of what that means I mean I'm this I
[00:29:28] 'm getting fully loaded on this but you know when you move to the future um let's not talk about the future just yet but I'm just wondering like do you have any
[00:29:36]  perspective on like on that I know that's more probably more of like the author's consideration originally but yeah well this is where it was useful for me to be someone fairly
[00:29:46]  new coming to like meetings and I was in like I was on the core team by December 2020 as they're kind of like devrel person and that was like one month before
[00:29:56]  I got hired for my first job so as I was actually like in real job situations I was also in a situation where I was getting to hear the core team basically discuss
[00:30:04]  like what to build into the framework and where to go next and what the roadmap should look like and it's you know it's one of those things where there's no like
[00:30:12]  simple answer it's like you have experienced people with years who've spent years building stuff coming together and discussing like what's the right solution you know so it's with everything it
[00:30:23] 's like okay the the main kind of guiding principle is how do we make this as most like rails as possible because they'd already had such a good experience with rails they
[00:30:31]  already understood the dev experience they could kind of get from it and but they wanted to like extract abstracts that experience and bring it to JavaScript so like we're not just going
[00:30:42]  to rebuild rails but we want to create the simplicity of what we're able to do with rails in this thing so usually we kind of start with what how what would the solution
[00:30:51]  look like the previous time we had a full stack framework that solved this and then how do we try and get that with JavaScript then as you're building it out you make
[00:30:58]  sure like actually works the way you think it does and it's kind of like an iterative process and then you have other people who are using the framework as you're building
[00:31:04]  it and then you get that kind of like you know yeah it's just tricky because like every place has its own custom setups to a certain degree and like it's like yeah
[00:31:16]  I don't know it's it seems so difficult like I mean one of the ones that I you know this because of the t3 back and forth criticism one thing was like
[00:31:23]  that I think redwood ships with storybook for example right is that still yeah yeah like how do you how do you do it actually a really important thing to ship with
[00:31:31]  because we feel like if you're designing a lot of components that's something that is useful for a team to have you know right yeah it's interesting because so basically this is
[00:31:41]  just like looking at setups they've had in the in the past and as like each time you know new project comes in and go and and you know even from the community and
[00:31:50]  stuff and being like look this is how we're set up and then like these are the tools we found useful and then at a certain point it's just like yeah like
[00:32:00]  yeah I I it's it's interesting I guess I guess this this is actually probably more in your lane as well with the bard and teaching and you know dev rel type stuff
[00:32:09]  is like it must be and it's actually a problem that I've been trying to figure out even for stuff like solid start every meta framework it's like when you start
[00:32:17]  putting all these tools together and they all have their own pieces just trying to figure out how do you approach teaching at docs do you refer people to the underlying thing do you take
[00:32:28]  responsibility on for yourself because you know these each piece is you know shifting slightly underneath you at all times and then you're like you know how how do you think about you
[00:32:37]  know maintaining that even from like a documentation teaching side I'm just I'm I'm always curious about this well this is this is such a good question I'm so glad you
[00:32:46]  asked this because this is one of the things that really drew me to Redwood was that they actually did something so the phrase read me driven development I'm sure you've heard
[00:32:56]  before that phrase was invented by Tom Tom Preston Moore he wrote a blog post about it and he said that you should always write your read me before you write a single
[00:33:04]  line of code right it will help you explain to yourself first and then to others what you're actually building and why they took it to a different tact and with Redwood they
[00:33:16]  did something called tutorial driven development so in this they wrote a tutorial of how you would teach the framework to someone and then they built the framework to make the tutorial work so
[00:33:28]  the tutorial has essentially stayed the same from the very beginning as the framework has been built out from 0.1 all the way up to now and yes let's just real quick
[00:33:40]  just go to and take a look at like what this is so you see on the left there's seven chapters with an intermission and this is I think there's there might
[00:33:50]  be two tutorials there might be one I can't remember if they got merged into one or not but the idea being that you start with initializing a project you then build
[00:34:00]  out your front end you build like pages and then you kind of create a layout and then you go into your back end you set up your API you figure out how to do
[00:34:10]  data fetching you then add your authentication and then you deploy so it's kind of like sequence of steps yes so that was so this is your first app and that was
[00:34:17]  originally tutorial one when the when the framework first came out there was no chapter five six seven there's only these chapters the idea being that would get you all the way to the
[00:34:28]  point of having a deployed app 567 is now testing and storybook stuff storybook so that's more of like when you're actually working with redwood how would you
[00:34:40]  design components in a way that is natural and let you like mock it and do that whole thing in like a very simple way so that's kind of more of like like
[00:34:49]  the the dx of actually building stuff they want also walking through that in the tutorial but chapter one two three four is basically just like explaining how the framework works and what I was
[00:35:00]  doing when I was my boot camp I was writing blog posts that basically so there's there's the written tutorial and then Rob created a video tutorial I watched the video tutorial and
[00:35:10]  then wrote blog posts based on that which basically brought me back to just writing this tutorial myself in a different in a slightly different kind of way and I was like the first
[00:35:18]  blog I was like the first blog post like the when I do the first look at x like I did a first look at solid start like the first time I ever did that
[00:35:24]  was for Redwood like three years ago right yeah okay yeah that makes sense yeah I mean getting from start to deployment and this is like the like now you have an app how
[00:35:34]  do you continue with it and yeah no I this is a lovely topic by the way I don't think I've ever seen a tutorial good to this point because this is
[00:35:48]  one of those things like I I I did a lot of this when I was working at the startup that I was doing um which was dealt in um uh kids photos um it
[00:35:57]  was at schools and like everything was role based to the extreme and we came up with we had the I mean that case it was very extreme and we had to come up
[00:36:06]  with crazy architected system but the surprising part is how little documentation there is out there for just setting up even a simple version of that let alone that as part of the tutorial
[00:36:17]  I actually that's sorry I did I just think this is actually very very cool because this is one of those everyone's like oh yeah how do you do auth but the
[00:36:26]  how do you do auth question for most people is like authentication it's like how do I get in this yeah exactly it's like well then what do you do with your user
[00:36:33]  you know so it's yeah so this this problem yeah created this entire thing himself because he was just like no firmware has ever done this and I'm gonna need this I'm
[00:36:41]  gonna have to do this anyway I might as well put it in the tutorial that's that that is very cool yeah because honestly like some there's all those conversations right now like
[00:36:50]  don't roll your own auth or whatever and I've rolled my own auth uh I've rolled my I've rolled both authentication and authorization and I'll tell you while the
[00:36:59]  authentication is complicated at first because of all you know the handshakes I made my own auth two system with uh what is it called uh the the the the the SSO
[00:37:09]  protocol uh protocol um yeah no I did it off too but I also did it with the um I can't remember the the other term like because some people concerned the OA
[00:37:22] uth 2 was wasn't as capable in the SSO case as SAML was so like there was there's also a spec for something built on top of OAuth 2 that
[00:37:32] 's more similar to SAML anyways I open ID connect yes I I did open ID connect I've interfaced with SAML I've written the whole thing but I'll tell
[00:37:41]  you that the authorization problem that I had at the startup was harder than that like like the role-based system and like figuring out the best patterns regarding every little piece uh
[00:37:54]  you know and so like yeah I think this is very cool like by comparison anyways um yeah just just just just an aside um this is not something you see every day okay
[00:38:08]  so yeah I can see when you control the pieces you get to be able to build this um narrative and you can actually go in and do this like because to be fair I
[00:38:18]  feel like Ruby on Rails got to this level where people were like oh yeah because you have your database schema you know set up your uh what do they call freaking active record
[00:38:29]  you know like do this and like but it's yeah and I think it's interesting because I wonder I don't know if all full stack frameworks actually go this far in their
[00:38:40]  thinking they're just like look these are the pieces I need and then they they go there I I think maybe this is the trade-off consideration here is if all the to
[00:38:51]  get to the the final like the you build up all the pieces on each other and you get to the final piece like something like this you kind of almost need to know
[00:38:58]  all the parts and know that they're not like that they're going to be present you can't just be like oh yeah you got five options for this five options this five
[00:39:05]  options this if you do that you it's a lot harder to to do to get to the last step so I'm going to say that's probably my favorite argument for this
[00:39:16]  kind of you know look if you have these pieces we know what you're working on we can basically just you know take you to that next level of like yeah this is
[00:39:26]  how you build a solution that looks like this the flip side and I think I want to talk about a little bit this before we dig in is you mentioned Redwood 6 is
[00:39:35]  kind of like coming in big changes and stuff and it's and and part of the thing is like I feel like changes like would be one of the hardest things for system
[00:39:45]  like like let's pretend you built your whole system on GraphQL and I mean we don't have to pretend but you know and then suddenly you know something comes out like reacts
[00:39:53]  every component and they're like oh well you don't really want to use GraphQL on the client anymore you know it doesn't make as much sense or you can like
[00:40:00]  we're not going to stop you but well this is the moment where it would be very nice to have a whole team of framework authors to solve that problem for you so your
[00:40:10]  app can stay exactly the same and it gets solved without you having to do anything yeah so I guess I guess I guess yeah this is this is sort of where where where
[00:40:21]  where I'm getting and that's always been the framework argument even angular to a degree kind of went with that I'm I'm very interested in so the like I guess you
[00:40:33]  already know so the high level is keep the authoring experience mostly the same change the underlying is is in my understanding or or or changes coming up so from the users for the
[00:40:43]  Redwood user perspective you don't really have to do anything at all there's a let's see there's an upgrade guide let me look at that so you will basically
[00:40:54]  have to change like one thing in your like configuration toml and run yarn Redwood upgrade and then there's like a couple things with like SVGs that are a little bit
[00:41:08]  weird so it's basically like you have to change a couple things with like how you use your like stat where you like put your static assets but for the most part there
[00:41:17] 's like very little stuff you're going to have to change yourself so that's pretty pretty sweet there's um let me drop the link yeah yeah this is this is this was
[00:41:29]  always my dread like at a certain point like it's really cool that like recently Prisma did did that release was a Prisma 5 that made everything 10x you know faster
[00:41:39]  that's one of the things that's also in Redwood 6 is we upgraded to the new Prisma as well but like it was looking there for a while that a
[00:41:49]  number of people were like maybe it's time to move off Prisma and get a you know a different you know i saw was a drizzle or m or something getting you know
[00:41:57]  the drizzle is the one is the the hype everyone's talking about right now i haven't tried yet it sounds sounds pretty sweet um i think it's gonna be probably a
[00:42:05]  while before they can reach anything near like feature parity though because Prisma's around for a while and right pretty pretty established but it's it's good that there's you know
[00:42:14]  other options now because for a while it's basically Prisma was the only or i'm in town right and where i was where i was getting with that was that um
[00:42:23]  because because of that scenario um uh like yeah it was locked in for a long time but on the other hand the the the consideration came in is like if Prisma hadn't
[00:42:38]  gone and done some of those performance updates or like for some reason like maybe they couldn't use architectural or whatever like they didn't address their biggest pain point from that audience
[00:42:47]  now you're kind of like in an interesting space so like i guess we might be able to see a bit when we build something with uh Redwood in a few minutes but
[00:42:56]  i'm just like does Redwood accomplish stuff through like abstraction layers like that's how he hopes to generalize the future or the way it works is that you have a very
[00:43:07]  specific way of interacting with your back end because your back end is a GraphQL server and then your front end is just going to make GraphQL queries to the server and then
[00:43:20]  get that data back so the most of the the Redwood specific stuff that allows us to kind of figure out the React server components under the hood is that the data fetching
[00:43:29]  itself uses something called cells and yeah and if you see here this is kind of showing like if you have like SVGs here's like a slight kind of change we need
[00:43:39]  to make Dom has has written out this upgrade guide it's just a couple couple points here and there of stuff we have to worry about and some of this stuff only applies to
[00:43:48]  certain apps like there's one thing here or it's like if you're using require statements you're going to have to change that but if you had built only ESM from
[00:43:55]  the start you wouldn't have to worry about that kind of thing and so yeah and then it mentions storybook V7 also and then the suspense router yeah yeah that part
[00:44:05]  right yeah so if I'm understanding this correctly what you're saying is the back end is actually like I was asking about abstraction but you're the back end is kind of already
[00:44:15]  a big abstraction to a degree because like this there's clean separation between the view portion and the data portion and that data portion is like a I mean I guess I'll
[00:44:27]  see in a minute but it's like a bunch of configuration I don't know if you get it's a middleware setup or whatever but essentially you build up the thing by
[00:44:33]  by putting pieces together that have kind of like an abstract API rather than like writing a bunch of imperative code it just gives you a GraphQL API from the start so it's
[00:44:45]  like you already have a completely configured GraphQL API in the very beginning when you initialize your project and then from there it's a question of what do you want your
[00:44:53]  what do you want your schema to be for your database so you got to write that obviously because we can't write that for you so there's a Prisma schema and that
[00:45:01] 's kind of like the main thing that you define what are your models and then once you've defined your models it generates a GraphQL schema based on that and then we also
[00:45:09]  then have our own auth package that will figure out how to manage the calls to the GraphQL server so that's basically what the back end is and the front end is
[00:45:18]  a React app that has a specific data fetching pattern called cells right okay yeah I'm just looking at this uh Apollo is used for the GraphQL in the in the client
[00:45:28]  it is you can switch it out for a react or tan stack career I suppose now they call that that was a couple years ago so that package might need some updating but if
[00:45:36]  you want you configure your client if you think Apollo is too heavy or whatever you know but that's the default yeah gotcha okay okay it used to be Apollo server as
[00:45:44]  well but then we switched to the guilds GraphQL yoga yeah and it's interesting like so like that that's a perfect example one of those migrations do you remember what
[00:45:54]  that involves switching from Apollo server to miner just yeah like you with that one you change you gotta change like a single line of code I think for like the the app users
[00:46:04]  you know so but it took months of people on the behind the scenes getting the framework to do that so that's why it was built in a way where there's kind of
[00:46:14]  like a contract for the for the developer which like you're going to develop your app like this you're going to have your pages your layouts your components with your data fetching
[00:46:22]  that you're going to have your back end with your schema and your models as long as you do all that correctly and that's all self-contained and correct and you
[00:46:29]  can test those parts too you shouldn't have to test anything else all the framework logic should figure out how we migrate to these new tools so things kind of get continually better
[00:46:37]  and better and better as new stuff comes out okay yeah yeah no that this is interesting I mean I'm going to be obviously very very interested in the React server component part it
[00:46:48] 's not as obvious here if it's is it out in the suspense thing is the main one so where it says so yeah so scroll down to the suspense part again yeah
[00:46:57]  because the router is so vital in making the certain component part we factored the router to suspense under the hood for most this reactor this refactor will allow to go unnot
[00:47:06] iced there's a subtle change okay so the thing here is that Redwood has its own router so this is makes it similar to your same deal with like remix has react
[00:47:20]  router and then um next has like their own next kind of router so I don't really know what it means to turn on suspense in the router all I know is now it
[00:47:30]  has suspense in the router turning on suspense in the router means that there's transitions baked into the router essentially like suspense um you probably could have used with Redwood I I mean
[00:47:41]  the SSR I guess I can't say yes because the problem is yeah never mind React had the ability to do stuff since 18 but like before 18 you couldn't do
[00:47:53]  it and then after 18 you could but no one really knew how to so it didn't really work so you didn't really do it but like technically speaking suspense should have kind
[00:48:02]  of worked already um if you wrap stuff but when the people talk about suspense in the router they're talking about baking transitions into the router so that um usually that's what
[00:48:12]  they mean um it's so that like you can do concurrent rendering between routes and stuff this is important especially when you get to certain components and whatnot but that's usually what the
[00:48:22]  suspense into the into the router means um it's interesting though because I know that's just a side note with teaching people this in solid most people don't understand what the proper
[00:48:33]  behavior is I ask I do like a lot of teaching on this subject and a lot there's a lot of confusion people like why do you do this and all this and
[00:48:38]  I'm like this is the one place where I don't get help being look at the React stuff I actually think because solids had this in out in the wild for you know
[00:48:47]  three or four years now like we actually have more people playing with it than actually in the React community playing with it it's only been like the last couple months um so it
[00:48:58] 's been kind of like tricky um but yeah I I think my guess is it means that there's transitions um that's that's usually the key the key piece here for
[00:49:08]  putting in the router but then again if you don't explain transition yeah I mean I guess I have to see like does does uh Redwood's router have any way of saying
[00:49:19]  like am I routing so to speak like is there like a hook that's like use is routing or something along that lines so let's go so go to the Redwood
[00:49:29]  router docs and let me just kind of show you yeah like how it works yeah I mean it's possible that I should we should just actually get a get a project going here
[00:49:38]  in a minute but uh let's first do this because I'm actually I'm realizing that is actually we have a specific repo that allows you to turn on the React server components
[00:49:46]  in their current iteration because so right now with v6 it like it like I said it turns on suspense but React server components are not fully implemented yet it's still a
[00:49:56]  canary thing so that is something that if we want to demo that I'm seeing want to make sure that we'll be able to do that we don't need to go
[00:50:03]  there yet but yeah yeah so with the router there's a single routing file that gives you like a flat routing structure where you have your routes yeah and you can wrap your
[00:50:13]  routes and sets for nested routing so so sorry this says so Redwood doesn't use a file system router no it does not there that's an interesting one okay good to
[00:50:26]  know yeah so it was more influenced by again the rails router okay cool so yeah there so I don't think you would do like an is router I I this basically you
[00:50:46]  have like you'll have link components so you like can link to right the reason the reason I was asking is because usually this is a telltale a telltale sign
[00:50:53]  that there's transitions built in because the problem with the transition is if you don't have a way of asking if it's happening somehow exposing it what ends up happening is now
[00:51:02]  instead of the page changing right away it like holds there like the browser and then shows the new page when it's ready and without any kind of loading indicator that's not
[00:51:09]  good so usually like there's some indicator so people can like put something on the current page even while it's still interactive before showing the page that was like my tip off if
[00:51:20]  they were using transitions in the router that's what I was looking for but I mean that's fine I uh I just said the the the future future stuff I'm more interested
[00:51:30]  in from a philosophical standpoint less from the implementation I'm sure Redwood will be getting there in the next little bit it's it's a tricky problem but um yeah okay
[00:51:40]  I I'm just like very quickly scrolling through this to to see um yeah so importing routes to generate routes with wild cards this stuff so it was kind of cool um yeah then
[00:51:55]  using match yeah there's a lot of different ways of doing this it's interesting to me because basically every meta framework has to end up creating their own router um this has
[00:52:04]  been Tanner's biggest blocker because he's like look I created a really cool router that's like has amazing TypeScript without even TypeScript generation it actually works without any kind
[00:52:17]  of generation just has perfect types most solutions have have have generation in the background but then he's like okay so let's go use it it's like no you need a meta
[00:52:25]  framework to use React and guess what um we all have our own router um so yeah this is this is definitely yeah I mean this reminds me a lot of React router just
[00:52:37]  looking at it like off the the base and it makes sense I'm gathering there's nested routing of some sort probably where the the sets are so go to set oh yeah
[00:52:48]  yeah yeah so that that set thing there was like I think I saw it up here higher up it was it was like yeah and I saw stuff that was looking like like
[00:52:57]  main layout theme route path set private on authentic yeah okay that's an interesting syntax um but again it probably comes from the perspective of like setting up this declaration around uh authentication type
[00:53:10]  stuff I always found these things really difficult to deal with with because you know I'm sure Redwood actually probably thought about this a lot but you know on on authentic like
[00:53:20]  like at a certain point dealing with authentication rather than authorization becomes very uh or sorry authorization rather than authentication the other way around becomes very difficult to to like wrap into a declarative
[00:53:34]  API which is actually the biggest fault of I'd say file system routing systems you know because like you start losing your expressiveness um so I can I can see where Red
[00:53:45] wood's here with with the with the file routing you're kind of going to have like there'll be certain parts of your app where it's like you need to log in
[00:53:52]  to get to the dashboard so if you want to have a front page you want to have a dashboard then you can like separate that pretty simply just in your router here by using
[00:54:01]  private routes and specifying it like yeah and also you can turn on pre-render as well by just getting putting a pre-render prop in each one redwood must be
[00:54:10]  doing some fancy compilation stuff too just I'm just throwing this out here because oh yeah this API doesn't lend to code splitting because you if you import blog content here I
[00:54:22]  mean unless unless what people do is wrap everything and lazy themselves if that is that the thing like like every single page you go like lazy lazy lazy lazy lazy and then put them
[00:54:33]  in no so if I'm gathering redwood does do code splitting so yeah so redwood's uses I was originally using webpack under the hood and then babble so
[00:54:44]  babble this is what Peter said who wrote most of the initial code of the framework that babble is the core of the framework actually so all sorts of weird babble magic
[00:54:53]  kind of happening going on and kind of move stuff and put stuff in in the right places and I imagine code splitting kind of falls out from yeah from that yeah like what
[00:55:03]  I mean uh is not tree shaking but like uh like lazy commodes because the thing is like when your app loads you don't want to load home page about page contact page
[00:55:11]  uh all of this stuff if you're on the home page you just want home page you don't want about page but like if you look at what the code is doing
[00:55:17]  directly by default the router will code split on every page creating a separate lazy load bundle for you so it's like and this is why I used to say like it's it
[00:55:25]  already does the mpa spa thing for you like you never even had to think about that I had from the very beginning this framework would already basically you could do an mpa
[00:55:34]  or an spa without even having to think about it yeah uh I'll revisit that in a minute um but yeah this is what I was getting at because syntactually this
[00:55:45]  doesn't code split but I'm gathering they're doing doing something special here then um okay cool cool uh let's hear if you like to override the default lazy loading behavior include
[00:55:59]  certain pages in the main bundle you can simply add the import statement to the rouch.js file right yeah exactly yeah so yeah they must redwood will detect your explicit import
[00:56:08]  and refrain from splitting that page into a separate bundle be careful with this feature as you can easily bloat the size of your main bundle there there you go okay oh so
[00:56:18]  where are you reading this from am i so this is all in the router docs so somewhere yeah maybe i should go to um code splitting there's a whole code splitting section yeah
[00:56:29]  yeah because this is what i saw in the example but if you look over and then include certain pages in the main value simply add importance in routes js file it's just
[00:56:41]  fun so do you understand i mean i can look at the project and we can confirm this it was just it was just interesting because import like the example that i was looking at
[00:56:50]  here seemed to like it imported all the routes wherever i was earlier you know up here somewhere so that's why i was like like it imported the route so how does it code
[00:57:01]  split does does does i was like is there some nuxt level stuff here where it's like auto detects components that you referenced without importing them or something um but i
[00:57:11]  i think a lot of these questions can be answered by actually looking at the project oh yeah home page home page is not there not imported there you go so yeah yeah yeah
[00:57:27]  yeah thank you must be like nux on import yeah okay so okay that's cool i i wonder if there's any other applications let's get to you let's let's
[00:57:36]  make sure you start cloning this in the song so you can kind of see this industry it will take like five minutes to install probably okay okay okay yeah um then i i
[00:57:44] 'm just gonna make a new example let's get out of this this branch let's make it actually i'm first gonna go back and go here and then see examples and
[00:57:56]  yeah actually what what's what how do i get started on a new redwood project let's if i go back to the read so let me drop this just here you i
[00:58:07] 'll i'll can't i can kind of like walk you through this here i need to necessarily have it on screen but you should just show it real quick to people are we
[00:58:15]  so opinionated that we want yarn is that is that how this works oh yes yarn is built in by default this is one of those like things because uh it's just
[00:58:24]  kind of like a legacy decision that we're kind of like really really baked in right now and the amount of work to make it work with like okay m and mpn
[00:58:31]  is gonna be pretty pretty massive unfortunately so we're on yarn three so it works just as well as any of the new stuff and it's like the big problem with yarn three
[00:58:40]  is getting it to actually work with your project so if you have issues with yarn it shouldn't show up when you're doing redwood stuff because we deal with yarn for
[00:58:48]  you so you don't have to okay okay so then i'm i'm gonna basically do this right um oh okay i'm actually yeah so do you want typescript or not
[00:59:04]  i don't know i'm not gonna do typescript this is an unpopular decision we i don't know if i i mentioned this on stream but and i'm fine
[00:59:14]  with it but um what we're not as opinion is create t3 app if you say no to typescript they're just like no you're getting typescript um it does
[00:59:21]  not do that you can actually write your app in javascript if you um i asked at some point wow i think it's nexel from create t3 app went
[00:59:30]  into solid start and changed the default to typescript um of course you did so i'm okay with that so like that's hilarious oh nexel so yeah um yeah
[00:59:43]  anyway yeah i'm gonna do javascript ah you know what actually never mind i'm gonna do typescript today no i'm gonna do typescript today because i feel like
[00:59:52]  this is like a batteries included thing the biggest reason i still use javascript stuff is because i'm in like the unknown and then i know some people use that for
[00:59:59]  discovery but then like i get incredibly frustrated when i can't deal with something that like doesn't work because it's in the unknown you're like oh yeah i pull this in
[01:00:05]  and why is this not working and you're like sitting there looking at the red squiggly and be like die and it's like never going away and you go like as any
[01:00:11]  and then it still doesn't go away and then you're like really cool things i will say about redwood with javascript is that because you have a fully typed
[01:00:20]  database orm and graphql server you still get autocomplete and red squiggly lines in your javascript as if you're using typescript but you can go
[01:00:30]  ahead and do typescript always make that one that one copy out all right so i'm gonna just go with my redwood project i think unless there's any reason to
[01:00:39]  call it something else oh whatever you want yeah let's just do that okay yarn okay so that's the start here i i installed yarn years ago but i'm probably not on
[01:00:50]  the same version of npm now so what have we got npm and yarn what dash g yeah will this give me yarn one or two or three or 50. just
[01:01:04]  okay do it yeah it'll be fine it should be fine because redwood uses yarn three but i think even if you're in like yarn one it will figure it out for
[01:01:13]  you this is hilarious npm is like you're i mean i install stuff all day long but they're like oh did you know there's a new version of uh npm
[01:01:20]  out like they maybe they did like you're installing yarn maybe maybe maybe you're not happy with npm use a node version manager if so which one use what what's
[01:01:33]  this garbage use dash dash location equals global i mean i understand they're trying to clean up the top level set of options but so do you use the version manager for node yeah
[01:01:46]  i've nvm nvm okay you should switch nvm's the worst i know um that's i'm a big fan of it but yeah i've
[01:01:55]  always had issues with nvm i mean i i've been using nvm since 2010 or something i just or 11 2011 yeah anyway um it's all good i'm
[01:02:05]  like the last person to update anything um anyway so now that we're talking about how you're on the cutting edge of deck not not not not stuff that involves like ide
[01:02:17] es or like like yeah i i don't care i could i could code in a notepad ooh yeah so you need to be on note 18. oh yeah this computer
[01:02:34]  isn't on note 18 yet okay let's let's get up there yeah that's one of the reasons why you know and then and then i mean i'm gonna install
[01:02:45]  a version manager at some point it's just like everyone's gonna have one and now you're in npm yeah but now my yarn command is gonna be gone right oh wait
[01:02:53]  no okay what did i just do i just you just ran yarn but try running the the redwood app command again actually actually you know what it's because i'm if i
[01:03:03]  go node v i'm gonna be stolen no okay you're right in this one but i i i do have to do one more thing uh uh what is it nv
[01:03:12] m alias default 18. i have to do this because otherwise the next window i open is going to be back on 16. i have to actually tell it to change the
[01:03:21]  deal right there that is why you should never ever ever use that that's the stupidest thing out what do i have here obviously when you switch a version of note you want
[01:03:32]  that to stay the same i would think i guess it makes sense if you like every project you want to think about what version oh weird i had 18 16 it looks like
[01:03:41]  and because i forgot to probably do this at some point we were still on 16 this whole time um anyways or yeah so yeah now we're on 18 and we're good okay
[01:03:50]  look at that you got a hydrogen in there okay let's let's uh let's yarn something hopefully this will work yep so yeah repo and yeah yes and then you're
[01:04:05]  still commits that's fine if you want to run yeah yes all right you should close out all your extra stuff because you're like in a project yeah yeah yeah it was
[01:04:21]  just because the folder didn't exist yet and then i will make a new i'll just like open the new window in the new location file open folder um development while you're
[01:04:33]  doing this i want to talk about redwood conf because this is a really important thing and multiple people on the team like don't forget to talk about redwood conf so red
[01:04:41] wood conf is the first ever redwood conference super exciting and if you are so inclined we actually have a code that you can use let me drop this um i'll drop
[01:04:55]  it to youtube one as well so you can get 35 off on this conference and it's going to be basically just about you know like redwood the community redwood the you
[01:05:08]  know people who are building companies on it and yeah it's called the conference for builders so it's going to be super exciting it's going to be in oregon so
[01:05:21]  if anyone wants to check that out am i gonna be able to drop this in the chat let's see i'm i'm like vs code is telling me i need a bunch
[01:05:29]  of new extensions apparently that i don't you don't necessarily need any of those extensions honestly i have prisma this was the main one i don't worry about any of
[01:05:40]  that stuff uh we'll get graphql too okay yay um okay that's fine whatever all right react prop types of telesense oh just like literally opened up every single one
[01:05:56]  okay yeah that's what i'm saying yeah you really i don't i ignore all those all right okay okay let's go full screen here um oh and also you can
[01:06:10]  win ten thousand dollars in cash by participating in our build competition which also includes tickets to the conference so check that out this is one of the other things i was saying how it
[01:06:23] 's when people ask me like who is funding redwood i always say redwood's the redwood's the passion project of an eccentric billionaire because that's exactly what it
[01:06:32]  is so if we can do things like pay people seven thousand dollars for winning a hackathon yeah let me let let me actually pull that up uh give me two seconds so go
[01:06:45]  to um build.redwoodjs.com okay so if there's a conference announcement that i got here first which is here and i just and do and sorry build.
[01:07:03] redwoodjs.com yeah this is for the build competition and then there'll be a link there to the conference as well all right four weeks to build three finalists ten
[01:07:15]  thousand in prizes okay yeah yeah so you guys are doing a hackathon nice cool and then it it completes on september you have until september 10th i see so
[01:07:34]  it's just this is all just this is happening like right now then yeah this is right now yeah so good time to be letting people no okay so yeah i mean you
[01:07:42]  still got what 25th second you still got three weeks yeah did it just when did it start uh probably two weeks ago i think something like that oh okay so actually you just
[01:07:52]  have one week left winner's announced tuesday 29th what okay any time about two days before this and oh no wait we i'm so oh this is a raffle
[01:08:07]  never mind i'm like okay so you have till september 10th okay okay yeah so about a month still yeah okay so plenty of time and then it's gonna wrap
[01:08:18]  up links disappear in the youtube so not sure how to get could you can you post things in the youtube chat yeah yeah um yeah yeah i can post it'll go in both
[01:08:31]  places yeah sorry give me two seconds sorry and i realized i wasn't actually on my screen so you guys don't see what i'm talking about here right i'm just
[01:08:38]  gonna roll this for a minute yeah until september 10th um 10 000 in prizes first second third runners up four runners up at 500 each judging usefulness solving real problems and
[01:08:52]  then delightfulness i love that as a criteria very cool um yeah okay let me re post those um it's actually which one you want me to repost it's easier
[01:09:05]  if you send it to me through private chat yeah yeah so um it'll be my camera just had an issue a second this one and then all right that's weird a second
[01:09:28]  i might have to like refresh my page or something in a minute but i'm gonna send it through i'm also hearing a tapping sound is that you yeah possibly because i
[01:09:40] 'm not moving and i'm still hearing it i'm i'm not moving at all anymore so it stopped oh weird it sounded like someone like tapping on a desk all right let
[01:09:50]  me put both links through here into the comments there's the build there's the build and then here is yeah it's tapping yeah it's coming through your side it
[01:10:24]  is completely i muted you and it went away what i don't like i'm totally silent right now is it no no no can you guys hear it on the stream i don
[01:10:41] 't know where it's coming from it's weird when i'm i mute myself but i think it's still gonna yeah still coming when i mute um anyway i gotta fix
[01:10:56]  my camera give me two seconds uh well let me try this i'm gonna refresh my window what about now can you still hear it no i don't hear now okay it
[01:11:11]  must have something to do with my microphone then sometimes radio wave interference goes into the microphone you can hear a radio station but it didn't sound like that's what was happening all
[01:11:25]  right there i am i'm back sorry i had to fix my camera for some reason it just lost connection weird so you don't hear the tapping anymore no tapping is good
[01:11:35]  so it was something to do with my microphone then because there's no sound coming from my room and there's no sound coming right now all i do is just change to my
[01:11:43]  macbook mic so yeah yeah it's weird yeah machine yeah okay so um we advertised the conference which is happening in 26 29th um and if you use the code r
[01:11:57] yan carneato you'll get 30 35 off there you go okay so thank you very much um use that code all right and we'll run the project now exactly so let me
[01:12:12]  share my screen again um share screen entire screen this one and let's go back over here okay so let's just start with yarn redwood dev or so yarn rw
[01:12:30]  dev is going to be the start command so everything's gonna start with yarn rw that's kind of like your you know alias and this is so because it lets you
[01:12:41]  do it without having yarn i think in your project or something i'm just like i'm just like i'm i was just looking for the there's two there's three
[01:12:50]  package dot json's there's one in the web and one in the api so look at the web one first yeah so sorry because i'm is it sorry rw
[01:12:58]  dev is one word or rw two words yeah so each one starts with yarn rw space and then there'll be a word okay gotcha so yeah so when i go
[01:13:09]  package json that's a top level one then there's this one okay yeah that's something so the this is just not yeah so the scripts you would need to you
[01:13:17]  if you look at the readme it'll tell you what to do because you know okay usually go the readme first yeah yeah yarn install uh was it already installed it right
[01:13:27]  yes yarn would and then i got you rw is short for redwood yeah exactly right okay and then you can do it to help to get to get the rest of
[01:13:38]  the commands okay so i click the command and now i'm getting something opening on localhost you should open a little more and also our faces are blocking a lot of the terminal
[01:13:49]  right now yeah okay i'm going to change the view this is my like this week in javascript this is a lot better this is my code view okay yeah so you
[01:13:57]  see here we're gonna have so scroll up just a little more yeah so where it says localhost 8910 yeah that's the front end and then there so you see
[01:14:10]  we got veet going now it is figuring out how to proxy to the graphql endpoint and then at 8911 forward slash graphql that's the api
[01:14:21]  gotcha okay well i'm going to try and open 8910 oh actually 8910 auto opened it in another window for me which is fine i'm gonna bring it across um
[01:14:40]  there we are so we have redwood js here um let me see just modded because i'm also a mod like i see spam wait i'm a mod yeah so
[01:14:52]  yeah just one second i closed a bunch of stuff when i was trying to get my camera back so this is the main splash page this is before you create any pages at all
[01:15:03]  so this is like not in your project really this is just something that shows up if there's no pages right and if you see here it'll say it'll give you
[01:15:11]  the way to generate your first page and then once you do that it'll replace this with your new page oh okay is that what we're gonna do yeah all right so i
[01:15:21]  usually just call it home h-o-m-e okay yeah okay it doesn't have to be my page that's called home okay all right and then after you
[01:15:32]  do a home add then a space and a forward slash so otherwise it'll create a route called home all right yes you want the route to be the main route yeah exactly yeah
[01:15:45]  because we haven't actually looked at the makeup of this project yet and okay there's just a fatal and not found page okay so if i go home it's like something
[01:15:56]  magically show up here now there it is home page all right cool and we have a home page okay so i guess a lot of what we're going to be looking at is
[01:16:10]  web and then there's api so this is like front end back end kind of mentality when you would approach this yeah and that's why there's a package.j
[01:16:18] son each because one is a react app that v is running and the other is a graphql server that just node is running okay okay cool all right now there's someone
[01:16:29]  asked the hard question um i said ask anthony about defer and stream graphical directives and where they fit in with the server first meta framework so once you throw in react
[01:16:41]  server components like i have absolutely no idea but just for people who aren't graphql nerds these are basically specific graphql directives that are meant that are meant
[01:16:53]  to enable basically streaming um getting streaming working with graphql is uh there's there's arguments over what is the best way to do it um this is another reason why
[01:17:07]  it would be good to have a framework like redwood to figure this stuff out for you because it's just the graphq world hasn't really decided like the best way to
[01:17:18]  do this so let me see where exactly we landed on this so david tierson has a post here actually let me give this to you so you can share with everybody
[01:17:30]  all right okay so we use what are called live queries so with that um use the live directive so this is slightly different from graphql stream and defer but i'm as
[01:17:52]  far as i know it solves the same problem so for people who want to know more about that and this is like a kind of super duper niche thing but this is
[01:18:01]  like we have thought about we have docs on it we have a whole explanation for it here okay yeah i it's interesting because yeah i guess if your data is large and large
[01:18:17]  enough for this because is a consideration most my consideration around streaming hasn't actually been around data size so much because like browser yeah it's it's interesting it's it's
[01:18:33]  just like it's the trade-off of gzip for so i guess the question is like but are you building things like you know uh video streaming app you know right
[01:18:44]  so but are they so they're using are they using graphql as the protocol i guess that's where this comes in right exactly because in general like the redwood is
[01:18:54]  originally set up as your graphql server is like a monolithic serverless lambda function and it just didn't make sense to do this stuff at all but then as
[01:19:03]  more people started using it it's become more important to have production ready server we made it possible to just run it in a node server or a container you don't have to
[01:19:14]  run it in a lambda because this would be totally infeasible with lambda function obviously yeah yeah yeah it's just one of those interesting things because like um when we talk
[01:19:23]  about i i mean i've hit this easily recently also with chat gpt because people are really worried about like chat gpt because of the latency of the time loading so
[01:19:30]  the streaming actually is beneficial whereas like most services respond fast enough that the only benefit of streaming is really about uh service failure decoupling not about the actual fact that it streams
[01:19:45]  um so it's interesting when like like it's funny because i'm out there going yeah streaming get streaming everywhere stream stream stream but it's actually has mostly to do with like
[01:19:56]  improving the speed of loading by reducing coupling rather than the fact streaming itself because i mean well because you're talking about html streaming though mostly yeah because h because because
[01:20:07]  html actually streams anyway like like if you send html a large chunk of html the browser will chunk it up and send it in like anyway so it
[01:20:16] 's like yeah exactly there's no latency there usually from the source but if the latency is from the source then this becomes a much bigger feature i was trying to think like
[01:20:25]  if you're someone who has a full stack app that they built by themselves and there's no backend team then this may come up yeah yeah i was trying to think of like
[01:20:31]  what scenario would you be running this through graphql but i guess if your whole backend was graphql then there you go yeah that's kind of the dream is that
[01:20:39]  ideally you shouldn't have to reach out of graphql because the whole dev experience and everything and the way the framework works the way the front end queries works all based around
[01:20:47]  graphql gotcha although we do also give you the ability to create rest endpoints if you want that's also something that exists so okay um okay yeah i was
[01:20:57]  just looking around here um this is new i've barely even seen this yeah so there's a redwood plugin for for beat look at that so simple enough just set up
[01:21:10]  your config ts config again stand i have big shoutouts to danny chowdhury and toby who are the ones who actually like made this this work over a
[01:21:23]  very very long period of time so this is not me i'm not the one who integrated vt just config most of the stuff comes in forms router web okay and then you
[01:21:33]  got react and react dom 18.2 okay um public folder i'm gathering to be like a fav icon okay robots text kukul and then immediately we meet components yeah
[01:21:46]  so you have no components and no layouts yet you can generate those just like you generated the page right now the home page that is the main thing that you generated so go to
[01:21:56]  home page under pages two seconds i want to see something first sure yeah so this is our entry route we have an error boundary wrapping the provider wrapping routes interesting i wonder if
[01:22:07]  the router has suspense built in that'd be an interesting choice yes so that's the thing this that's the router with suspense built in that we were talking about earlier right yeah
[01:22:14]  it's one of those things that yeah yeah yeah so we'll get to the routes file and then entry client is a hydrate if it has children already otherwise render that
[01:22:29]  makes sense where's okay is there an entry server or is that like is that yeah that'll be in the api right but but i'm not talking about that i'm
[01:22:41]  talking about okay okay redwood ssrs right um we should now like that's that's part of getting beat and we couldn't do ssr before before v
[01:22:54]  so it's like this is oh actually this is turned on i mean i mean we can if we we can this is what i was looking for there's no render to stream
[01:23:04]  or render to string that's what i was looking for like where maybe it's like an implied hidden thing i want to i mean so let's see what the default is
[01:23:11]  so you're gonna want let's look at the actually uh oh right because there's nothing in the home page i've already gone too far all good so there's the pre
[01:23:21] -render thing this is kind of what we were doing if you wanted to actually hold on sorry i'm really really important here render modes we have something called render modes this is
[01:23:32]  very very new so i forgot about this so this is what this is what you need right now okay yeah so now we have this new thing called render modes which is where you
[01:23:48]  can turn on things like ssr and streaming okay okay but okay so the why is this actually i'm kind of confused why this page didn't work look um is it
[01:23:50]  localhost 89 okay so basically what's going to happen is in your route stop tsx file you're going to have render mode equals and then you're going to pass
[01:24:12]  either static or server okay or stream okay um meta or client before we even getting there i just added a page is okay so this is the default page what it looks like right
[01:24:26]  yeah and then if i go to my network uh doc uh doc okay refresh let me look at you max out that thing on the bottom too yeah it's yeah i
[01:24:46] 'll just drink it down for the moment yeah um yeah okay so it is csr by default um right right please keep this div empty good job so we can we can change
[01:24:59]  this to to pre-rendering it right uh and that's index html that i'm looking at right here got you okay so this this this is like what
[01:25:09]  the reason i'm talking about i'm personally interested in this area because i've been having we tried this really cool thing where we made server rendering and csr have the exact
[01:25:19]  same entry point and you could just switch the mode like we're talking about right now yeah right except it's a freaking pain in the ass trying to generate the index of
[01:25:26]  the build and then like we're breaking on docker and all this stuff so then i got to a point where i'm like fine maybe i'll just do an index h
[01:25:33] tml and like like anyway you know like but yes i mean to be fair i want to get away from that again and still so i'm not sure it's just one
[01:25:42]  of the things like it just doesn't never work properly but there's an index html here because one thing i was thinking about is a single page app and like
[01:25:50]  sorry server rendered app and like a client rendered app have a very different usage of this so to speak because on us on a single page app or sorry a client-side rendered
[01:26:00]  app rather you might put something in really generic like our site because you don't know what any every index gets served for everything so you don't even know what page you're
[01:26:08]  dealing with but on a server rendered site when you have like the document you might like change it for every page that you hit for the first time because the meta tags will be
[01:26:16]  specific to the page it's something you can't do until that's it we thought that that's in our render modes rfc is that exactly specific thing about whether
[01:26:24]  you want to include the meta or not right so okay how do let's say i want to do ssr how do i switch my render mode well let's see if
[01:26:33]  render mode is turned on by default or if we have to do something else so go to go to your route and then go so routes.tsx and then go to the
[01:26:42]  route that got created with the green line and add another one that says render mode that's camel case like add it like it's a path page name like render mode okay
[01:26:53]  like oh you okay render yeah and then have it say let's try static first and see what happens i've got html and i got stream interesting let's try so
[01:27:07]  let's try static and see what happens okay that this should be basically the same as the pre-pre-render so let's see and maybe we have to turn on
[01:27:16]  like an experimental feature is probably what the case is okay okay no that one was in no dice what i'm just one of these other interesting render modes let's try and i
[01:27:33]  wonder if it's all the same in dev so there's also a possibility that in dev it doesn't do no i mean that would never fly what's the other one
[01:27:42]  stream let's see let me see danny's got an example repo here let me take a look at this yeah i forgot about this someone told me this a long time ago
[01:27:57]  that redwood didn't do ssr and it was so that was the actually most standout thing people talk about the opinions and i was like this is like i
[01:28:04]  i haven't seen a meta framework not do ssr but again yeah it makes sense pretty big yeah it's pretty big that everyone was complaining about yeah jump wow jumping to
[01:28:16]  server components is like like like like skipping us it's like you know like well yeah that's how we're kind of doing them in tandem to a certain extent but i think
[01:28:23]  we're going to have the render modes before react server components i think i'm not okay positive about that but what i'm thinking is what's interesting here and the first
[01:28:33]  thing that comes to me is this is a per route level config which is very very very cool um okay i think i actually know what's happening here render mode should be h
[01:28:43] tml actually the rfc is out of date okay sure so it's html is it because i'm in dev like that it never server renders um
[01:28:52]  so if you want to server render it let's try um that yeah i guess try stream see what happens i already tried stream all right neither of them server rendered okay um that
[01:29:08] 's fine we can get there again i just let me let me try this other repo let's let's have you clone this one down so this is danny's example
[01:29:22]  has render modes turned on for sure okay i didn't talk about render modes in the v6 release notes so this might not be okay fully baked yet so but if i
[01:29:38]  understood then if i'm understanding correctly pre-v6 you didn't do ssr in correct yeah it's we might still not do ssr so i'm trying
[01:29:48]  to figure out right now okay okay fair enough um yes so you want to just clone down this thing yeah yeah give this one a try this should already be pre-con
[01:29:59] figured for render modes all right um let's go over here another example okay let me see and this is on which redwood version yeah so this is on yeah
[01:30:38]  this is on experimental build of redwood right now okay so this is so six might not even okay i see so this is probably not yeah so that's why we said we
[01:30:50]  turned on suspense but not yet uh server-side rendering essentially okay i mean we don't have to i'm kind of curious i'm just i want to see just how far
[01:31:01]  we can go with this let's see you have to reinstall your dependencies though so do yarn again or you just yarn with yarn yeah thank you okay interesting yeah people have
[01:31:18]  general questions about redwood they want to ask in the chat if so hit us with it okay i've dropped a lot of links so far so try and collect as many
[01:31:33]  of those as possible for the show notes okay just second that one is off so just let me check here data map we might not have you know we might not be in
[01:31:57]  the right we might not be lucky today uh well this is probably because there's a there might be a back-end setup that we got that we're missing right right because
[01:32:08]  we don't have like something for prisma probably or no session secret okay we need to try by let me let me just real real quickly look at the if you also
[01:32:17]  grab the second secret environment that's used in your cryptor stack use yarn r wg secret okay it's never sequel light you should do yarn redwood migrate or prisma
[01:32:26]  migrate dev should work so yeah kick out of that entirely so yarn rw yeah so yarn rw prisma yep migrate yep dev yep try that so what this does this
[01:32:43]  sets up your sqlite tables boom now try it all right sqlite oh they still want my session secret try go do they do have a bunch of uh
[01:33:06]  instructions on how to do that yeah you're at yeah so you have to generate a secret it's pretty simple there's a command for it mind you this did load but
[01:33:16]  but but i can show you how to set the secret it doesn't it won't take very long okay this looks like it's server rendered killer yeah i see some comments with
[01:33:29]  dollar sign markers um and yeah it looks like it's server rendered all right redwood supports server side rendering i've been waiting three years for this moment there you go yeah
[01:33:50]  okay literally i think it was like the 16th issue ever written or something like that was like when's red we're going to support ssr so here we go
[01:34:00]  how to enable ssr by default issue number 18 first written january 8 2020 incredible yeah because okay so yeah this is the render mode thing you know that's ours
[01:34:16]  where is it let's let's look let's look let's look what they did here so when i look in the source here first of all there is uh huh there is
[01:34:23]  an entry server now yeah entry client that's funny they're using the solid star convention rather than the remix convention that's interesting hey look look at us go yeah but yes
[01:34:32]  because we wanted to rip off a different framework because you you wouldn't yell at us for ripping you off obviously because i've already ripped off everyone else okay um hydrate root
[01:34:44]  this so the entry client is basically the same entry server um now has um yeah okay location provider blah blah document component from document so the base setup here yeah see this is
[01:35:03]  the other way to do it so what's what's different between this and solid start oh well because this is actually a problem that i've been like revisiting here by
[01:35:19]  extracting the document here with the lowercase right and this is what like this is an option we can do as well then you can do something oh and there's an index h
[01:35:30] tml okay we'll we'll ignore the index html for a moment this is like all of the above okay now the thing is um that's probably to keep compatibility
[01:35:41]  with all previous redwood apps and i would like bare minimum we can't get rid of the index dot html at this point it's infeasible but
[01:35:49]  the thing is if if you have your main root entry or whatever you set up and you have the lowercase html you can't use a client side client side can
[01:35:58] 't handle you like going like it depends on how your framework renders but like in solid's case like it's it can't it can't like clone an html
[01:36:06]  document like it or like like it doesn't work but generally even with react like what were you going to do with this like it just this this doesn't work but on
[01:36:15]  server side you you want this right and this is what i'm talking about the dynamic injection points so the thing is what you can do here is the entry server and entry they
[01:36:24]  both import dock right and if as long as you put in a separate component it it should be oh actually this isn't even doing anything fancy but like it is possible to get
[01:36:35]  into a zone where you could like say if you're in a csr type mode just skip this what solid is doing right now which i'm not like super stoked on
[01:36:43]  is we made all of these capital imports from the framework and what that does is it no ops the essentially the like the stuff in between like it just like if we're for
[01:36:55]  the clients i build those components just return their children they do nothing and then if our server build we actually generate the html with it so you can have the same
[01:37:05]  entry point for even a csr build and we basically just skip it on the client on the server we generate the string um like at build time we just run it and similar
[01:37:17]  we have a body tag and on the server what we do is when we hit the body tag on this mode we just don't render the children and when we're in
[01:37:25]  csr mode so that we only render the index up to the body right you said that's a build time though so do you have a way at ssr at runtime
[01:37:32]  yeah so at dev in dev this is where this got kind of nasty we still have that behavior but the problem is uh veet would like still pull in a bunch of crap
[01:37:42]  and then people would complain they're like why is my client only module on the server and crashing so this is like part of why i've been having things so we end
[01:37:50]  up swapping out the root but then people didn't get their proper meta tags like it's been a mess on start this is one of those slow downs is getting csr
[01:37:58]  to work because most frameworks don't support both the only one that supports both that i know that works really well is svelte kit and the reason svelte kit works
[01:38:07]  well with both is they always just use index html so your app entry does not have like this but the trade-off of doing that is well i can show
[01:38:17]  you right now svelte kit or was it kit dot svelte yeah the trade-off of taking this sort of approach is that um oh what is it it's
[01:38:29]  not routing it's like project structure yeah the the trade-off of doing this sort of thing is you you you you you end up with like another dsl like i
[01:38:39]  wonder if there's like i'm not if i wonder if there's a place i can see it but they probably have somewhere in the docs where you can talk about app dot
[01:38:47]  html i want to say it's called did i not get that app dot html no i'm not finding it right at the moment but essentially their h
[01:39:03] tml has like not just one location like you know how the redwood app had like oh here's the root don't mess with it it's like you've got like
[01:39:10]  six different types of tags that you can pass it pass into the html file so you make sure that you you can insert all the stuff and have the controls um and
[01:39:18]  it has a completely different syntax and svelte syntax and it you know what i mean it's like it's like a new language just for this one file so trade
[01:39:27] -offs there um anyway i was curious to see what what was doing here next has another approach where but again nexus approach is basically server component forward like it like for the
[01:39:40]  page directory versus the app directory the app directory does something that would never work through csr so like not many people have gone almost no one has gone csr and ss
[01:39:51] r in the same app with just a toggleable config um we tried it seems like that's that's what we're aiming for and with how we have it set up
[01:40:00]  with the route file and our own router it should eventually be be possible with the render mode so if we get that into v7 it sounds like we'll be ahead of the
[01:40:09]  game yeah i mean that was our goal as well which is we have something that kind of works but not really that's why i'm like revisiting it right now um it
[01:40:18] 's probably like the source of like one of the biggest things because a lot of people come in and this is something at redwood people would hit too people building apps people
[01:40:28]  not building like their e-commerce sites come in solid start and they're like i they want to use all those really client-side libraries that no one's got ss
[01:40:36]  ssr support for like ag grid is a perfect example we had uh nile on stream but you know crazy graph interactive like table you know stuff and they there's no
[01:40:46]  ssr they're not going to ever support ssr but but it actually breaks ssr for us and then it's like they're like okay fine you
[01:40:53]  know what i don't actually need ssr for my app i'll just flip it off and then it's like yeah if you're doing that today in solid start you
[01:41:00]  might hit issues as well so it's like rocking a hard place until we solve it that's why i want to focus on it because you can go build this client-side
[01:41:07]  rendered app in solid using the templates like whenever you want not using solid start you can build a server rendered app in solid start pretty well it's people trying to build client
[01:41:15] -side rendered apps in solid start that have a little bit more of an issue so i want to fix that and it's so funny how you arrived at the thing solid was
[01:41:24]  created to do can no longer be done so yeah it's it's it's it this kind of back and forth play and like how does the index html fit
[01:41:34]  into it trying to come up with this there's like i've thought of several different options like they they start getting clunkier and clunkier as you go um so
[01:41:42]  it's like like as i said i was kind of saying here is like how many entry files do you do you need at this point to to get there it's like we
[01:41:51]  have all of them yeah yeah so um anyway this is the cool thing though about with the redwood project though is that once this is all worked out and you're generating
[01:41:58]  your project you'll never need to touch any of those files like they'll exist whichever ones end up existing you'll never think about them you'll only have to configure your stuff
[01:42:07]  within your different routes after you've actually created your pages and have an app so again this goes back to redwood is figuring all this stuff out for you it's taking us
[01:42:15]  a very very long time obviously it's complicated but it's going to get to the point where you basically just put a single word to say i want this to this route
[01:42:22]  to render this way and that's going to be the ultimate dev experience yeah okay i want i'm kind of interested here because this this app actually has more for me to look
[01:42:33]  at a little bit going on because like when i go put in the secret then then we can look at the dashboard okay yeah okay so let me finally listen to what they were
[01:42:43]  yelling at me about you just scroll down all the way to the bottom so it's got you a couple times yeah that's the main one yeah and don't worry about
[01:42:50]  like leaking x this is just local actually just tear this down you know this is all on a sqlite database this isn't in prod yeah but like so now you
[01:42:59] 're going to copy paste that put in your dot env file right but this is all local right now right like there's no database somewhere yeah so no one cares okay so you
[01:43:09]  wanted to you could put it on railway really easily so create an actual dot env don't use any of the example or defaults create a file called dot env and this
[01:43:20]  is top level yes and this is already in your git ignore all right and then it's session so you could just close your other project right now probably not going back to
[01:43:48]  it at this point okay if you want to yeah no it's it's fair i yeah well if this all works and is expectable then we should be able to all
[01:44:02]  right okay so this looks like it's not complaining at me anymore i am on locals um so try this go to localhost 8 9 11 forward slash graphql ah yeah
[01:44:12]  so you we have uh what do you call it inspector or whatever graphical type thing whatever whatever whatever it is call it yeah yeah yeah and then so so before you run this
[01:44:23]  query add current user under version you should bump up your font too yeah um and just i'm just gonna i love graphql a lot of people seem to not but i
[01:44:36] 'm a big fan sorry sorry what do you so so just add just out of yeah and then current user yep and then run run the hit the hit the plus all right
[01:44:45]  great so we do not have a user but that's probably okay and then that's the version we're on so that's why i say we're on like an experimental build
[01:44:55]  right now so let's see um hold on real quick let me just kind of look at what's going on in this repo you can go back to the front end now
[01:45:12]  because okay i mean what's cool it's kind of yeah i we actually get to see everything okay so use auth wraps the whole thing and then slash landing page but the landing
[01:45:26]  do you know what the problem is the landing page i mean maybe this is just because it's a demo right now okay so first of all let's look at the thing here
[01:45:37]  landing page landing page task landing page story the landing page route hooks okay so i don't just got a page i got i got lots of stuff um i'm not we
[01:45:48] 're proud hooks i'm gathering this is our like loader so for and then this is our meta yeah okay i understand yeah and then the stories is that's the storybook
[01:45:58]  file and the test the test files anytime you generate stuff it automatically generates a test for you so you're kind of getting tdd out of the box and then a storybook
[01:46:07]  file so you just run your storybook command and get storybook working without having to create an individual storybook file for each thing then yeah use server data so yeah this
[01:46:17]  is our loader pattern navigate hero nav link to blah blah blah route simple click to go simple okay so first nav layout i'm gonna go to the layouts for a second
[01:46:30]  so layouts nav layout because i think the now just wrap pages and then it accepts the page as the children's the layout yeah so layout of later later yeah this is an interesting
[01:46:40]  approach right so your your nested routing um isn't because you don't use a file system right you isn't actually nested uh it's interesting the guys in after i
[01:46:50]  was talking about nested routing there they're talking about a system like this yeah and you pass children through and children actually end up being the outlet that's actually a necessity
[01:46:59]  for server components side note something i've been thinking about also with solid router um and remix price i think about a bit because there's no context on the server in the server
[01:47:10]  component land for good reason don't want to explain that right now using props children from the from the route or layout components is really kind of the the way to do it okay
[01:47:22]  so i understand that but what was interesting here is based on whether you're authenticated or not the links change and my problem that i was having having was none of the
[01:47:33]  links seemed clickable um because i was i was like okay i'm on the landing page i'm not logged in right but then it was like why can't i sorry
[01:47:43]  80 89 10 yeah i was like okay i'm here these links are not clickable maybe these links are okay so this is just something else okay this might just be because this
[01:47:59]  is the demo we didn't set up those right okay correctly i mean all right i'm looking in there right now just to make sure okay okay so there is a sign
[01:48:07]  in and sign up so i can sign up you should be able to that was the point of creating the secrets that your auth would work all right all right this is very
[01:48:17]  much a demo so my username is going to be ryan and my password oh see that i found it um is going to be stream or something oh good it's hidden at
[01:48:32]  least and i'm going to sign up right now no i'm not going to save that password okay so now i'm logged in so we've got auth working and now
[01:48:45]  when i go to recipes they tell me empty and i can log out okay so i think you might be able to create a recipe if you go to um forward slash recipes so
[01:48:55]  i want to check something it's so weird i keep on seeing this weird flicker and it's like i think it's a layout shift because i think the page gets sent
[01:49:03]  with all the content it does okay okay so it's just a layout shift okay it's fine all right see all right did i did i sign myself out again i didn
[01:49:20] 't change any code oh no i'm locked in on this page just not on the other page okay that's fine refresh i'm in oh the about page just doesn't
[01:49:33]  know how to handle it's probably an unauthorized page like one that doesn't require authorization yeah it doesn't and then it has the render mode turned on and it and
[01:49:43]  it's like not realizing which mode i'm in it'd be interesting if this is just like a server client mismatch thing should i go to simple forward slash simple yeah
[01:49:55]  that's off the mage pane go to simple i don't know what this is supposed to do redirected page beautiful so they're showing like a page intercept redirect if i
[01:50:13]  understand because simple slash simple and then we end up on redirected symbol i think maybe just the current state of the project is someone playing with a with a feature like server
[01:50:26]  redirects oh yeah that's fine um i'm i'm getting i'm getting what this is putting out there because there's no file system routing this is just really actually just
[01:50:37]  convention it doesn't actually matter so what's cool about this kind of setup is that um your pages are mostly flat you just have well actually yeah i guess your pages are
[01:50:55]  flat it's interesting though because your layouts can get pretty hefty when you do this sort of approach um but they also go to if you go to four slash admin four slash
[01:51:05]  categories then you can see the the dashboard also i i'm i imagine that layouts can also have route hooks um so yeah that's a good question not sure okay so no
[01:51:22]  like just admin four slash categories like the word categories just like that yeah no category okay so this might be you might have to rerun yarn migrate prisma the the pr
[01:51:38] isma command because i i spun mine up and i'm able to see categories there so i think you have to run that once you already have the secret created i would guess
[01:51:49]  so rerun your migrate yeah that one and now see what happens okay that should be good interesting this page you can tell when the page is client-side rendered 8 9
[01:52:19]  10 4.4 slash admin 4.4 slash categories huh that's really weird because i cloned down the exact same thing it seems to be working all right i can add
[01:52:28]  a new category click this plus button no yeah new okay yeah so on mine i i can't add categories either so uh the mutations are probably not set up yet which does not
[01:52:45]  surprise me okay but i mean this is cool this is cooler than what i was expecting i was like okay i'm gonna come in good i mean to be fair we probably
[01:52:53]  should teach some people about like act like actually look and teach me actual redwood like but but this this is like this is like all the cool stuff that i want i like
[01:53:01]  looking at this is usually when like later on in the stream i'm like yeah i'm like your thoughts would be i'm sure valuable to the to the main team if you
[01:53:08]  ever like poke around and be like oh i have to think about this too you know yeah yeah yeah no um but yeah i mean i i i get what's going on
[01:53:17]  here um structurally um i mean we could just keep on trying routes right what like well so on your home page you don't see any recipes at all now right now right
[01:53:28]  yeah if so i should i should share mine because mine's actually working okay cool cool you share your screen and i'll put it up there yeah let me just make sure
[01:53:37]  all my stuff is in a good spot all right i mean the other thing that i'm obviously interested in everything we've been doing so far makes sense to me like the hooks
[01:53:55]  it's like dot server and svelte kit or whatever like different conventions we used to have dot data but you're gonna have to tell me what a cell is because
[01:54:03]  we haven't actually gotten to that point here and i think i saw it mentioned somewhere recipe cell recipe or maybe that's a ui thing like recipe card recipes only like
[01:54:16]  maybe not okay you good anthony you're muted right now yeah you can uh put mine up okay okay so now you see here so if i went back to admin categories
[01:54:39]  so these are we have these categories here and each one has their own specific page and this is the scaffold that gets set up for you automatically so you basically have a crud
[01:54:48]  interface for all your models like that's just a thing and then question did you change your mic when you went mute just just wondering it just got kind of in a different
[01:55:02]  crunchy okay actually oh wait hold on no you're right yes um okay there we go better i should all right yeah you're back it was it was giving me a little of
[01:55:19]  the harshness it went to my yeah it went to my my ear buds yeah okay cool so this is now this is like a recipe page all right let's see what
[01:55:29] 's going on here so we hit our so this is our endpoint with the graphql endpoint so what we're doing is we're sending a query usually yeah so let
[01:55:46]  me do check this out well we should be able to query this directly except not like that though um so this is find recipe query and that query will be here so let's
[01:56:10]  do that and that and then we need the id right here boom okay cool so this is the actual so the back end is this graphql api this is the query
[01:56:32]  so what a cell is and you said you wanted me to explain a cell so the cell it's a way to declaratively set up your your data fetching so when
[01:56:44]  it's loading we automatically handle the loading state when it's empty we automatically handle the empty state there's an error we automatically handle the error and whether it's success this is
[01:56:53]  the component you would actually like write so right now we're pulling in this recipe component so the recipe component then is what is that interesting recipe so the recipe is this that
[01:57:15] 's the recipe component and then we're using this react markdown thing to render it and it's basically just spitting out a bunch of content it looks like so and then
[01:57:28]  that what we're seeing here is the success is basically put into the page so then this page would be the recipe page so that's down here and then the recipe page
[01:57:44]  brings in the recipe cell yeah so you place the reference recipe cell where you want the data fetching to actually happen and then display so if there's an error it would display
[01:57:52]  the error here on the page that make sense yeah i guess yeah and it must be see i i obviously have mechanical questions but i mean it's i mean this this
[01:58:08]  this looks like it encourages nested data fetching right and so like i'm pretending i like pretend i'm in csr land which is what um redwood generally has been
[01:58:23]  to this point and i'm behind a code split route so i'm on one page and i go to the next page does that mean that i have to load the j
[01:58:36] avascript to get down to where i fetch that thing to make my api call like you know i mean like there's a it's it's a wall it's a
[01:58:43]  there's an implicit waterfall there like the the loader pattern for example in remix and it looks like it's these route data hooks in the in the new stuff will will
[01:58:52]  hoist the stuff up which means that it'll fetch at the same time as the route changes versus fetching after the route changes and i i guess that was my interest about
[01:59:01]  the cell architecture the cell architecture is like innately nested right like unless it's the compilers like hoisting out the fetching but yeah the idea is that
[01:59:10]  your your cell you're putting on a specific page so i guess if you wanted to have like the same cell on multiple pages then yeah i'm not sure exactly how that
[01:59:21]  would work and i figured out here your is you can save these and then go to your recipes let's see if that actually worked and saved it yeah see the funny thing is
[01:59:32]  the the the links when you've got it small don't work but if you click like move your dev tools over in the layout shifts the links will work the the top
[01:59:41]  level links are hidden work those ones work ah interesting okay yeah this is but okay yeah yeah sorry it's just it's just interesting from my perspective i wonder if there's anything
[01:59:53]  that gets done there because oh man this is yeah okay there we go and so when you save it and then it saves it here right so we do have actual functionality here where
[02:00:05]  stuff is being written to the database the thing is the cell architecture will work very well with server components not very well but like will work decently well with server components but
[02:00:16]  ironically i actually think unless there's like a special step that actually hoists them up it's actually detrimental for client rendering ironically um interesting he's like just mechanically because of
[02:00:26]  the the implicit waterfalls that would come from it you want to hoist data fetching server components are kind of like yeah you don't really need the hoist data
[02:00:33]  fetching you know like waterfalls are okay i i wonder i i kind of wonder about cells like like because it's a few years ago everyone did stuff like this and no
[02:00:44]  one cared and then like i mean i cared that's how i was killing the benchmarks but then like remix and they're like look we care but like even react router is like
[02:00:53]  that because i guess my my question is like yeah it would take a compiler right this is the relay trick to a degree right like your graphql queries if they like
[02:01:04]  use fragments could get around this but like i'm not sure how the cells play into that like maybe yeah maybe the cells just represent the loading state so as long as they hear
[02:01:16]  that the the cell is based like redwood knows the cell just because it's like has cell in the in the title and it just like moves stuff around with its you
[02:01:25]  know kind of right so what i'm i'm wondering is like i guess the queries can get hoisted and then the cells can be used just for the ui state um
[02:01:33]  so you do things called before query and after query i'm not sure if that's no what i'm talking about is like when a route changes does it wait for the j
[02:01:41] avascript to load before it's before it fetches anything which is an interesting question it is you'll see the cells request font oh yeah was there and if the page
[02:01:53]  has a cell you'll see the cells request points which may have contributed to there okay no yeah not much i'm not sure about how the router and the cells work together i
[02:02:02]  mean hmm could we confirm it very easily yeah whatever um yeah i mean i think it happens after the page loads that's just kind of how it works so right um yeah
[02:02:17]  okay yeah uh yeah there's it's it's interesting because i can see it's funny i it seems like the cleanest way i can picture react written in 2017. that
[02:02:30] 's that's that that's what i that's that's like what were my head that's really funny though because this is like written in like 2018 2019 so it's
[02:02:38]  right you're right on the money with that right right and then it's like what's interesting is that um yeah but the convention can help a lot because you're actually seeing
[02:02:49]  the convention return in next js because they have like dot placeholder and dot uh error so next 13 app directory so it's wrong with the circle ones actually have separate files for
[02:02:59]  the pieces of the cell yeah that seems a little obnoxious but like that like well because if your thing's handling it anyway and just moving stuff around compiling and
[02:03:08]  transplanting whatever then you want them all like one nice file where you just see them you know you don't want to change files to mess your loading and error states i think
[02:03:15]  this is like the you know everyone has their own comfort level i think we saw this with like some people like don't like the remix or i guess all-star style x
[02:03:24]  or really redwood it looks like probably was the first one style like using special exports right it's funny next next used to use special exports but now they now they've
[02:03:33]  decided special exports are maybe not good about special exports that would you mean with like the cell how it's like figuring out how to export all to make just one nice clean component
[02:03:41]  well like that yeah you have like each named export has a special behavior associated with like right and the same way with loader and action and remix and like that we've been
[02:03:49]  doing that since the beginning that's just how we've done it yeah right but then like uh what do you call it uh rem uh sorry sveltecan and next
[02:03:57]  js both recently kind of got away from that so that's what i was like they went to separate files so i was like it's kind of like there's like this interesting
[02:04:04]  play tension there because they're there i guess they're concerned do you know why nope it's because if you import stuff see their problem was for server stuff in this case of
[02:04:16]  redwood this is all client side so you're fine but the reason that they had those exports for like get static props or service i data which meant that yes in theory
[02:04:25]  if you import something and only use it and get service i props it does not end up in the client bundle the problem is if that thing you import has side effects it won
[02:04:34] 't let itself be tree shaken out um and that is why um you know like in those cases that they stopped doing it but it's also it it's you hit this
[02:04:45]  relatively quickly if your data format is imperative code but in the case here where it's graphql query i don't think you hit that right because you can you can just
[02:04:55]  describe that without importing any code but if you're like prisma dot get something then importing prisma is a perfect example of one of those things right yeah you would never
[02:05:05]  need to do that because we have the prisma is in the api specifically separated from the front end right yeah so yeah i i'm following that a little bit better now
[02:05:16]  i think with redwood you know we had a separation between the front and the back end that was clear and explicit and on purpose from the very beginning so i think that could
[02:05:24]  be like the one kind of meta point that helps us set up be set up like this new world where now everyone has to figure out how to do that yeah this is
[02:05:32]  very much been the like the concern here because like i i'm i'm like i'm getting ahead of myself but now i'm picturing like server components and you might say
[02:05:41]  this is why they put the render modes on the routes because you're gonna like there's probably gonna be like render mode rsc or whatever to tell you that this route is
[02:05:50]  a server component because then suddenly your page actually starts as a and your layouts will be like on the server and then you'll have client components uh so then you'll need
[02:06:01]  to be you yeah it's it's this isn't this is this is like man this is just gonna be interesting and i'm not pointing anything necessarily redwood it's just
[02:06:11]  like entering this world where like you have opinions and well structured code and then we ask like no no you should structure your code this other way like they're actually straight up
[02:06:22]  like doing it and then you're like okay well i can still use this thing with inside my thing but then like you get to this interesting place where like like the meaning of
[02:06:31]  stuff changes slightly and a perfect example of that is client components and rscs now are used client and then like yeah you know then you're like some of my pages
[02:06:42]  are server component pages and some of them are not yeah it's it's funny because i'm actually working through the exact same problem set it's just it is definitely one of
[02:06:50]  those things where it's like it's a lot we can have you pull up um the so toby has a another one we don't have to run this one because i
[02:07:01]  wasn't able to get to to work but you should just look at this real quick let me find that link again um yeah here we go okay okay actually so yes what
[02:07:25]  this is doing is he has you just generate a project so we could try doing that and then you'll be able to see what the project looks like once it's already
[02:07:37]  set up for react server components we won't be able to run it because it's still work in progress we can see what it looks like at least okay well i mean um
[02:07:46]  give me two seconds yeah i mean this is this is kind of the area that i'm redwood is actually like a very good example of like there's been concern about
[02:08:01]  how react rolls out server components and like remixes you know often the conversation but i feel like you almost should start with like like almost like something like redwood that's actually
[02:08:13]  the furthest on the opinionated side to actually vet whether this is actually something that can actually slip in so current functionality and expectations you can render one and one component inside the
[02:08:22]  main app server component css right now there's no router support okay yeah well i mean that's the freaking hardest that's that is the whole thing server points it's
[02:08:30]  a routing technique i mean it isn't but it is that's actually the whole thing they didn't work yeah i this might be positive nikil has actually made prs to
[02:08:44]  get v versions of server components work i don't know if it's been merged yet but um that's why i had them on stream of uh like a month or so
[02:08:54]  back because yeah when i when i cloned this down today and tried to run i was hitting some sort of error with v and got pointed to an open feet issue yeah um
[02:09:02]  there's no yarn rng yeah so no video okay we can we can look at the what you're saying is we can look at the project to see what they're yeah
[02:09:13]  exactly so if you do this if you just copy all this this will generate you a new redwood project then you'll run the redwood experimental commands and those will then
[02:09:22]  configure it for the rsc what is this he's just putting out he's creating like a temporary folder and sticking it in there you can ignore that thing at the end do
[02:09:32]  i need that yeah it's fine i can put anything there i guess yeah all right let's make another one of these you're in your redwood project or yeah yeah
[02:09:46]  um red red wood rsc yeah yeah so the way he has it set up is he's not using and like you said there's not using like pages or any kind
[02:10:04]  of stuff he just kind of has it all plopped in the src directory there's still an entry dot client entry dot server and then something called an entries dot
[02:10:14]  ts file a document file all right yeah so pretty similar to what we're looking at with danny's it's like i'm like why am i blind i positive i
[02:10:29]  put it inside examples is you are still on note 16. you need to go back to note 18. i swore i okay what the so yeah you're okay m
[02:10:52] vm alias default 18. now i understand why i told you to use volta okay so mvm use 18. okay just node dash version okay yeah okay whatever
[02:11:14]  this i i okay we're just gonna this explains why i was on what why i was on um 16 still on this one i think if you take out the engines thing
[02:11:28]  it might also work we shouldn't mess with that we should try and get you on 18. all right so where was i i was doing this that one yeah um maybe
[02:11:46]  i need to make a folder first we'll try take the y out actually of the command yeah and the y at the beginning too there's two of them that's why
[02:12:01]  there's the dash we got two dash y's in there all right whatever type script uh i won't bother on this one yeah that's fine i mean yeah max it
[02:12:14]  got generated before because you had it got confused because the flags and stuff try and just go into the project see if it if it was actually generated all right i'll trust
[02:12:31]  the authors okay all right cool and as i said you're not gonna be able to run this so let's just look at the files all right okay so you got his now
[02:12:40]  you gotta run the experimental commands next this is just because ryan wants to see the hot new new stuff what this will not be how this actually is and once we have r
[02:12:52] sc set up you don't have to do any of this stuff that there's two commands in there yeah i'm hoping that today they they run in succession no just just
[02:13:02]  copy the first one first fine yeah all right why why is it think i'm what am i in no okay this is i i like screwed something it thinks there's a
[02:13:30]  project in examples and see the part of the development examples see i'm i'm not sure what's supposed to go on here like did i oh yeah because you ran it
[02:13:44]  because you have a yarn in here like okay okay it's also possible that now that we we're where we i'm also realizing you are gonna have to run yarn to run
[02:13:59]  the experimental command i think so like install your dependencies first so just run yarn by itself yeah yeah okay all right if you can't get us to work i can just clone
[02:14:14]  what i have what i'm looking at right now good well we're we're we're almost there yeah we're exploring uh redwood 7 here um yeah right that hot new
[02:14:27]  new how's netlify by the way yeah it's going okay as you know there's there's a hard restructuring like about a month back but um the
[02:14:39]  team seems more focused than ever um on the goal which is it's kind of crazy after the lot like it's it's a very different netlify than i joined a
[02:14:48]  year ago but um there's a lot of really good energy about focusing on the the base of the platform focusing on the primitives um cool yeah the last like couple weeks even
[02:14:59]  like i just you know the the kind of you know every week we have like a start of the week kind of thing and it's been you know full of demos of
[02:15:08]  new features being developed by teams it's it's it's a different kind of energy i'm i'm pretty excited about that awesome i was looking forward to new new features yeah
[02:15:19]  um okay so not that okay so then now we try this all right and then we try the other one all right okay um document cool yeah so this is how it
[02:15:49]  would be set up entry server very similar to what we're looking at in the other example um index is still here um entries okay i don't know what this is but i
[02:16:04] 'm not going to worry about it too much document it's probably the the way of faking the router um counter user component and app tsx so i guess what we
[02:16:14] 're supposed to realize here is that this is actually a server entry this is a this is a server component and then yeah so interesting the document isn't actually here um but that
[02:16:34] 's the rc should be part of the router layer asset yeah okay sure yeah okay so i mean this is this is just this is just a server component entry file with
[02:16:46]  a client component in it and i'm gathering this was just testing to see what that would look like yeah we're super early here um but yeah presumably yeah i mean most of
[02:17:00]  the beginning is just getting the build to work okay yeah i don't know if there's actually a ton to see here just yet but i i because like it's the
[02:17:11]  downstream implications where things get interesting right because you know even even the ssr stuff is going to be really interesting from the impact it has on data fetching uh i mean
[02:17:22]  i'm assuming we didn't actually look at this when we were looking at your uh this example um i'm actually gonna go back here for a second i don't know
[02:17:32]  how many of the pages are are uh except me i can check from the routes how many pages are actually server rendered just the about page okay yeah because i was going to say
[02:17:45]  like i don't think about page has like graphql queries on it or something it'd be interesting to you like all the deduping type stuff that happens right
[02:17:57]  like when you have the server render suddenly you don't want to you fetch on the server and then you don't want to fetch on the client and then you have to free
[02:18:05]  uh pre the graphql cache has to be pre-populated um with that data so we can actually try writing this the graphical server does work and then it does
[02:18:17]  load some things on the the home page so let's kind of let's just see what happens oh you okay so but yeah the react server components one not this one okay react
[02:18:26]  server uh so can i do yarn dev or rw dev or whatever it is yeah all right okay that's good yep yeah so you see how your back end is working
[02:18:45]  uh we'll just keep 89 10. oh you gotta do a build first okay fair enough just a yarn red would build and actually it's not dev it's serve yeah
[02:19:02]  so yard red would so first build uh-huh yeah and then yard red would serve okay i'll see if this works apparently the serve might not be rw serve fe
[02:19:32]  interesting but that was like weird is like not like a space oh it's like you gotta run two commands actually did this actually tell us anything like oh no they yeah that
[02:19:48] 's what else to do did you run both both of the experimental commands yeah i did but did i run build with a dash v that's just verbose isn't it yeah
[02:20:00]  i don't think that matters build it's probably just the verbose command all right yeah okay serve i mean just just to make sure um they did this one try
[02:20:43]  running yarn redwood experimental setup dash rsc that's the second one that one yeah that one yeah they're just telling me they already exist yeah i'm not sure probably we
[02:20:58]  nuked something somewhere down the line as we were doing this okay that's someone's asking what bundlers redwood use so this was the exciting thing about redwood
[02:21:07]  6 that we added beat so we did not have beat before we were using webpack i think we were the last framework using webpack so it's dead no more webpack
[02:21:15]  everybody yeah no that's that that would be big faster h well yeah probably faster h mr faster um uh i mean webpack 5's caching wasn't actually bad for performance
[02:21:29]  um but yeah definitely i have big improvements in the dev environment um just just real quick just so we can close the loop on this let's um go back to the screen
[02:21:39]  sharing i'll show what i'm looking at here with okay sure share away and let me know if anything happens with my sound again okay all good um two seconds yeah let
[02:22:00] 's see here yeah your sound is fine okay do they see my screen yeah okay so this is where the error is coming in right now so something's happening here not really
[02:22:15]  sure what but you see here we are getting in data and that's pretty interesting and then here we can see so we're getting this main file it looks like it's
[02:22:30]  already been like minified yes jsx runtime file rsc file and then props yeah oh interesting oh that's interesting instead of serious instead of assets instead of serializing it into
[02:22:49]  the document it's a separate uh end point hit okay yeah this is something i've been playing with recently i mean i don't think i'll get into it right now
[02:23:02]  but um the rscs don't solve the double data problem um in what when we set out to do this partial hydration thing there's two things we were i mean at
[02:23:16]  least i was setting out to do one was to um reduce hydration costs you know uh not send that javascript but rscs actually don't solve the double data
[02:23:28]  problem every single piece of data that you show in your html gets sent again um in that jsx format in fact it's probably more bloated than the original j
[02:23:40] son so in a sense we save hydration execution time and we we have a slightly larger serialization time i don't think the serialization is that that that important but it
[02:23:51] 's just like it's like it's this is why rcs like i do silly benchmarks where i like uh um you know make a page a lot of data on it and
[02:24:01]  you know wrap it with client components so you can't cheat kind of speak and then even if you pass it through with rcs to be smart so that like it's server
[02:24:11]  rendered and not sent to the client rcs can't help but serialize everything in the same way so like in in the that simple test single page apps score about a
[02:24:23]  48 lighthouse score rcs score about a 60 um and then like astro and marco and quick i'll score about an 85 and it's it's it's it's
[02:24:37]  basically because rcs only solve half the half the problem on the initial page load the way they are today um interesting okay here's something really interesting you should look at check
[02:24:48]  out this link so this is just our like notion where we coordinate between the different teams so this will give you a lot of info on specifically how we're figuring out ss
[02:25:01] r plus react server components is this public like i can yes this is public yeah yeah that's yeah i mean redwood's totally open source we do everything public everything the
[02:25:13]  whole team's roadmap what we're working on is all always public yeah i've thought about notion being a good thing right now i just write long blobs and hack md
[02:25:22]  whenever i have something to think about but okay this is this is great yeah so suspense enabled cells that's probably a big one is the plan to go the main is sp
[02:25:31] encer editor okay so this is a progress oh yeah yeah thank you so this is just a progress thing on the scroll up to the very top but yeah i was i was just
[02:25:42]  like oh yeah it's just a bunch of questions i don't actually this is like to do right i was done i was like kind of interesting like what is being done
[02:25:52]  but this one well that was that was not the main page i sent to you though no no no i was i was actually just looking at this and the suspense router was the
[02:26:01]  first thing that came to mind gotcha render mode these will all be in different in different states of complete versus not and with information versus not so this is kind of like this
[02:26:10]  is a big dump of you know how we how we collaborate but just to kind of get an idea of what we're working on where some of the ideas we're playing
[02:26:17]  around with public notion is great actually you can't do this very easily on github i've also tried that and it kind of sucked so yeah we tried github
[02:26:23]  discussions i think yeah nice so yeah so if you want to jump in give some thoughts on any of these things welcome to okay yeah we won't go through this all right
[02:26:43]  now i just the one that i was mostly interested in actually was suspense router because this is something that's coming out right now in v6 what does that actually mean what is
[02:26:52]  a suspense router from redwood's perspective um and this one is not giving it to me because this is this is like the after the fact like everyone already knows what the suspense
[02:27:02]  router is how are we doing on it fetch from any data source cells first class i am streaming ssr did you click that one yet no i haven't tried that
[02:27:11]  one where's it click streaming sr it's down towards the bottom so i think this is what you're looking for right now just scroll a little bit more okay yeah i
[02:27:19] 'm going to use the ratio server full suppose cell ssr potential goal all right this is this is a this is yeah yeah this is like yeah this is out of order
[02:27:33]  streaming and i'm pretty sure what they mean by cell ssr because you could actually with with streaming ssr you can show the cell states like even though it
[02:27:42] 's happening on the server so you like start rendering the page the data's not there you're showing loading you stream that back and then as the cells complete they actually will update
[02:27:51]  from the server so so i'm gathering that's what they mean we're not doing when it was a part of this project blah blah blah yeah so as as people can
[02:28:01]  see right now you know there's there's render modes there's there's streaming there's server side rendering there's react server components it's like all this stuff is kind of
[02:28:09]  happening all at the same time and it's still being kind of worked out but um we were nowhere near this stage like a year ago so like this is all like even where
[02:28:17]  we are now it's like super super exciting to me and as you can see you know you're you're constantly saying oh this is the type of thing i'm thinking
[02:28:23]  about or working on or whatever so yeah in line with some of the other people who are at the cutting edge of this yeah no these these are all the topics right now um
[02:28:32]  yeah most mostly that uh recently with that uh chrome funding for solidstart we went back to our server component islands routing type solution because it was very simple it was basically like
[02:28:46]  what if we could take astro and a client-side rendering to it like it's actually probably really similar to what they did with the view transition api which we'll
[02:28:54]  find about next week when we get a sneak peek at astro 3 with matthew phillips um on the stream yeah i'm looking forward to that one so sneak
[02:29:04]  peek of astro 3 next week but um yeah i i i think this whole area there's a lot of questions still very much open and i think there's this this
[02:29:16]  is where it's it's fun because there's an added complexity that i think that comes with when you have opinions ahead of time that you have to like reconcile with but it
[02:29:27]  looks like that it looks like there there is like a lot of thought going into here so this is really cool um and even an idea of tasks and like how far along it
[02:29:38] 's going so i i like to see that i would love to get this kind of visibility um i think it's very cool to see yeah and then last last link you
[02:29:46]  should look at is um this would have been one going to look at a while ago but uh we have a kind of update doc that talks about how a lot this is coming
[02:29:56]  together the reactor composed roadmap is called big horn so big horn epoch yeah okay let me pull this one up that's a that's a forest so trees yeah yeah yeah
[02:30:07]  no that makes sense but i i i'm gathering the ideas this is so everyone can get involved and see that we see here specifically says targeting v7 for ssr capabilities
[02:30:17]  exactly yeah so as i told you we this was actually uh pre pre sneak peek at redwood seven not actually a redwood six stream i apologize this is this is really
[02:30:28]  interesting and um i think those will be good food for thought for the team as well because you're working out a lot of this similar stuff you know yeah yeah especially well and
[02:30:37]  i've been talking to a lot of people in the react ecosystem about this stuff because i i did independently look at the same space of problems and see if i could solve
[02:30:48]  it you know in in the way that made sense to me and i've gone to that point in the process where i've arrived at basically every conclusion the react teams arrived at
[02:30:57]  right so i'm like okay okay okay i i i get exactly why we're here you know like like i've gone through all the design trade-offs and like going this
[02:31:06]  and i'm just like okay yeah that probably makes the most sense that probably makes the whole sense so yeah now i'm now i'm at that point where i'm like
[02:31:13]  okay i can just do this probably makes sense but my problem right now is i'm not hitting my objective so i i i and then which because like my thinking right now and
[02:31:27]  it could change is that if we don't solve the double data problem here we haven't solved the problem like essentially there's two things set out to do we're only doing
[02:31:38]  half of it the solution is not going to suffice so um that's that that's why i'm you know casting the net a little bit wider on on that to
[02:31:48]  be fair this is not something redwood has to worry about because they'll get to use react and then they'll use whatever react uses and do the best you can with it
[02:31:57]  but um i i am definitely and i think a lot of thinking um it's been going with others post about this um no blog post about i feel like yeah i mean
[02:32:09]  yeah you're right i've been i haven't been publishing public vlogs as much about this stuff recently because you know i've been like i've been going like hack md
[02:32:18]  and then i've been like publishing like document after document of like my rough thoughts blogs always take a little bit more effort but but where are these getting posted the the i i
[02:32:29]  i publish most of them publicly but like then i'll throw them on a discord or maybe occasionally they'll make it to twitter but most people most people don't actually get
[02:32:38]  to see too many of these um but is this the stuff that just adds up on your dev account or is this something different um no no this is this is yeah this is
[02:32:47]  different this is when i'm like actually like this is like my my thinking when i'm like when i'm when i'm like on a topic kind of like what we're
[02:32:56]  talking about now i'm not i can't get it off my head i'll just go and write um like an article and then i'll share it with those parties like
[02:33:05]  what if marco was right yeah right it's just really like i want to read that so are these public or not most of them are public um okay so this is
[02:33:16]  like um hedge dock basically yeah these are these are just like these are very much like as i'm thinking through these problems you know i i just spitball stuff kind of you
[02:33:31]  know and then i go bug people and i'm like what do you think viable does this work you know so yeah i i it's been a while since i wrote a
[02:33:40]  dev tube article um so i i should get back to it i actually wrote an article that's basically ready to publish like four months ago i just haven't published it it was
[02:33:48]  about two-way binding and why it's terrible um i've got a couple of those yeah but yeah i i i could talk more about this experimental stuff the problem is like
[02:33:58]  it's hard it's harder you know that like you you have to get to that point where the realization hits and then the solution hits and then you can talk about it because
[02:34:07]  otherwise like if you just have a problem then like your perspective and your perspective will change all time right like um but yeah i could probably i've been doing a lot of
[02:34:18]  stuff and having a lot of conversations with people and yet so what i forget who said it first but if you have like the same conversation three times you probably should write an article
[02:34:26]  about it i've gotten to that point um to be fair i don't know who the audience of this is it seems like the people i have these conversations with are people
[02:34:33]  who write other frameworks yeah exactly so like basically that's kind of like my whole point though with fs jam though is that like you have those conversations that are like irrelevant to
[02:34:44]  99 of devs or the one percent of devs like need to need to know what the other people are thinking so they know like what they're doing actually makes sense or
[02:34:53]  not right yeah so it's it's yeah it's it's been funny though because yeah i i feel i i've been meeting with people repeatedly like i i actually i
[02:35:03]  guess i was going to talk about this a bit with this week in javascript and i'll tie into that in a few minutes but i on wednesday i literally talked
[02:35:11]  to some uh some people related to the signal spec thing that's coming around and then then i met with the people though the angular core team and the whiz core team
[02:35:22]  at google and then i met with mishko all in one day bang bang bang and we all ended up talking about the the the same topic that so like yeah maybe even
[02:35:35]  exist if whiz was actually open source though i i i i i think so i i think i i mean the way to put that is that there's there's hard
[02:35:45]  problems to solve right from mechanical standpoint and then you you can and it and you have to work through it and you can finally find that there's a way to mechanically do
[02:35:55]  it and that whiz is an example of like how to solve a very difficult problem right and coming up with that solution but it's like a whole other different type of
[02:36:03]  hard problem to take uh take something like that and make it into something that people would want to use yeah versus work for everyone else yeah right exactly and the thing is that was
[02:36:16]  what the goal with was with quick because even open source you know it wouldn't be enough necessarily the funny thing is whiz is actually looking at how to make it like you
[02:36:26]  know you have a ton of google developers working in this they want to they want to you know have a pleasant experience they want to pull in stuff that they're familiar with
[02:36:34]  and tools they can use in other frameworks so whiz itself is evolving probably more rapidly than most frameworks at this point because they they have to clear that whole dx gambit that
[02:36:43]  they haven't really been able to address right so it's really interesting to see those teams work together so closely because guess what everybody's that i'm talking about is on signals
[02:36:54]  and they they're they're like well if we can solve this in signals land then like we can all benefit from it so like the whiz and angular teams are actually
[02:37:03]  working really closely together um that's just must be so funny for you having like create a signal or not having been the ceo of signals for so long and then like all
[02:37:13]  of a sudden now the rest of the world catches up five years later and you're like yeah signals are great right yeah yeah it's it's it is interesting well actually we
[02:37:20]  should probably talk about that and maybe swap over do you have any place to go or do you want to stay around no actually um i'm totally down to um go into
[02:37:28]  this week in javascript i'll be down to hang out for that too if i could just yeah real quick yeah yeah sure to take a moment and we can switch gears
[02:37:36]  um but yeah i think i think we had a nice chat there about redwood i don't know if there isn't a ton more that i wanted to uh to go in
[02:37:45]  on that uh per se it is i think it's going to be an interesting challenge um to reconcile like heavily opinionated with um with like other opinions coming in but that
[02:37:59] 's always the challenge yeah no the thing is me anthony like myself has a very wide um range in terms of like he's familiar with most like all the framework solution
[02:38:17]  spaces they're working in um which uh really adds to conversation like this because you can see trends like micro trends have come across in different places and i mean that's part of
[02:38:28]  um why you know he's in the the podcast area and stuff because he's like he's like okay what's going on we should talk about that right so i i
[02:38:38]  i think that's like definitely very interesting point i'm gonna set off while we're off screen right now i'm gonna actually set up real quick talk about edgio and j
[02:38:50] avascript jam because um i have fs jam which i've been doing for a while as my own side thing but then javascript jam is now a weekly twitter
[02:38:58]  space that i do for my company edgio and we have all the same framework authors have all the same kind of conversations but instead if it's like you record something i put
[02:39:06]  out a couple months it's just like it's live people can listen to it immediately and then people can come in audience members can ask questions and join so really recommend people check
[02:39:16]  that out javascript jam.com nice nice uh yeah thanks for having me be able to show redwood stuff this is super exciting i feel like i wish i knew
[02:39:30]  more about a lot of what's happening in the internals as though as we have a constant struggle with me and and redwood is like i very much like using it building
[02:39:39]  stuff with it showing it to other people and then there's been like this whole core team building the thing kind of on the side there's a little bit disconnected from that
[02:39:46]  to a certain extent and i'll definitely acknowledge that but um you know for people who do want to contribute to open source like there's a whole team here willing to help you
[02:39:55]  get spun up and there's a lot of work to do so yeah i highly recommend people check it out if that's something they want to do yeah yeah no and yeah that
[02:40:03] 's that's the whole thing right if there's always these opportunities it's how often you get that question it's like how do i get involved in open source how do
[02:40:12]  i how do i get started and i love when i have a lot of guests in with different stories but for you actually is a great story because you said almost everything you did
[02:40:22]  actually come from open source you're doing the boot camp and then you went straight into open source before you even finished the boot camp yeah exactly uh-huh yeah so like so
[02:40:30]  so important for your journey in into the web um yeah i'm just gathering all my sources for for this week in javascript right now and putting it together and the
[02:40:40]  funniest thing is like i have like no bookmarks this week because um it was a pretty slow week yeah and it really because for me the whole week was kind of started by
[02:40:51]  by that the discussion around uh signal spec and i think i wanted to talk a bit about that yeah okay let's see do do do do okay yeah i am set up there
[02:41:00]  see if i'm just trusting very quickly if there's any like solid js kind of news i want to talk about to to start it off here but i don't know
[02:41:09]  that there is um that's august 9th that's august 9th it's funny it's just been yeah yeah yeah i think i think this is where we
[02:41:23]  start and then i did see something about lefto's query oh i did see that too that's funny maybe maybe maybe you're you're right and it's funny because g
[02:41:37] reg greg reached out to me and he showed me that he made i wonder if he's okay with me talking about this there's a blog post here you can talk
[02:41:44]  about regardless so yeah send me the private link for that but greg actually showed me something else that was actually really cool and i'm i'm i'm gonna actually gonna pull
[02:41:55]  it up here just because i can and because he's probably not gonna care that much if i do greg where are you there you are not you where's where's
[02:42:09]  what it's like i'm like search oh it's because he uses abbreviation okay yeah he sent this to me before the last stream but he never actually i i was
[02:42:24]  expecting some big announcement around it give me two seconds as i set this up um yeah yeah let's let's yeah okay perfect perfect yeah those are good and then the only other
[02:42:41]  thing i want to check is a few dates on something sorry this is like the setup time that i never get to do ahead of time that i should do ahead of time um
[02:42:50]  i think i already talked about solid starve 0.3 last week um because i put it out on i can't even see the timestamps like last week i'm like
[02:43:04]  that's so useful thank you for telling me it was last week can just like give me a day or something no last week um yeah your grand unifying theory yeah we talked
[02:43:15]  about yeah i think i talked about that one didn't i yeah i must i think i signed off before that yeah it's it's it's i'm pretty sure i
[02:43:23]  did that gigantic merge um there i mean i can really tell by commit history it's not that far long ago august 11th was 3.2 yeah i did it at
[02:43:33]  the beginning of the previous week yeah okay so we don't have ton there i'm making progress on some new stuff with solid start but i'm not ready to talk about
[02:43:43]  it yet so that is good that's good that's good okay all together perfect comments good everyone's still alive everyone's still awake chat you guys have been kind of slow
[02:43:56]  recently so maybe yeah yeah hey awesome awesome awesome okay good then um then we're gonna get started on this week in javascript um i've got anthony here to
[02:44:12]  join me um add a little bit topical uh actually write a weekly newsletter i imagine we do the twitter space on javascript.com but i also do a weekly newsletter
[02:44:20]  where i cover similar stuff to where you're covering but in a written format instead of a streaming format so yeah this is always fun for me this has been a slow week though
[02:44:28]  i i can imagine in the past other topics that would have gotten given us a little bit more material to go with but this has been a bit of a slow week but
[02:44:36]  talk about google's ai editor yeah that's an area that i don't know a ton about so maybe maybe if people want to bring that up they can talk and put in
[02:44:46]  the chat but um let's let's let's talk about what's been going on um in javascript this week so i'm going to just share my screen and actually
[02:44:53]  with this format we're going to do it this way because i don't want to block everything and this is actually not where we're starting where we're starting is i i
[02:45:02] 'm going to start with some solid stuff because then i can get out of the way because it's not really a huge topic as i said not much happened the only thing that
[02:45:14]  i've been really excited about is native seems to be happening okay we actually i forgot to ask you earlier anthony if uh there was a native story for redwood like you
[02:45:26]  know how people playing with like yeah like yep yeah pulling mobile into like mono repos and stuff like that i forgot to ask yeah so we yeah so this is something that
[02:45:35]  has been kind of in the the background something we've wanted to do for a very long time we've had people spike stuff out because with redwood you have the api
[02:45:43]  side of the website be very natural to add a mobile side in addition and then you just have a mobile side a website and then your api so that's something you can
[02:45:52]  do right now we've got how much stuff you just google react native redwood js you'll find a whole bunch of blog posts and stuff about it so yeah it's um
[02:46:01]  like orta has been someone who's actually worked on like orta's on the redwood team which almost no one knows but oh okay a lot yeah i imagine because
[02:46:09]  of the way the separation from back end and front end means that the api side like the back end is the same so like it would actually work really nicely using graphical queries
[02:46:18]  yeah it's pretty natural yeah the reason i was just talking about this is just this this has just been like the the narrative that i keep all the people who are working
[02:46:26]  on alternatives to react native uh like you know tori does a lot of desktop but they're moving into uh native mobile as well that's interesting i know that yeah um so
[02:46:37]  like we're seeing a lot of this uh native script we absolutely love so and look forward to putting production more professional like the we've been getting a lot of push from those
[02:46:46]  communities they like solid as a choice it's lightweight it's fast and it aligns with their because we're good with custom renderers it's like very easy it's
[02:46:55]  not like we're like full compiler that only compiles to dom like some other things so like we're just a nice choice where they're like very excited because it's like
[02:47:05]  we get to use like there's already react native in the in the native space so this it makes us you know you know a very lightweight small performant choice um and
[02:47:15]  then you have to build a whole solid native yeah exactly so i've been i've been exactly i've been seeing a lot of that stuff um yeah i've had the chart
[02:47:25]  like so i've been just seeing a lot of this kind of activity this had to try revamp with solid js and native script posted pr examples and you can learn more so
[02:47:33]  here's here's like an example of like this you know solid native app you know i think i you know people tell me what was the native store yeah we don't
[02:47:41]  have react native but i think a lot of these other solutions i want to kind of like do a react non-specific solution are putting a lot of time in and it might
[02:47:51]  take them ages to catch up but it's already we're we're in a much better state these days in general than like back when we're all using like cordova like
[02:47:59]  um so you know even capacitor is much better than like what they were doing before but when you're talking about these native solutions things like tori um it's really exciting
[02:48:11]  um to kind of see that i had adam probably on my podcast once or chris had a cordova experience he's like you should really try capacitor trust me it's much
[02:48:19]  better oh look actually here's you you this is this this is from a little while ago i missed this interview at the time but it was it was awesome to hear ryan
[02:48:28]  turnquest again talking about how he got open involved in open source working the solid project uh he he built solid router like one of the two solid routers and we merged
[02:48:37]  our effort and he did the majority of the initial work to actually merge it and make what the solid router everyone uses today in solid is all starting all the solid projects and then
[02:48:47]  uh through that experience and obviously connectivity because i was working at ebay and i left ebay and he joined ebay um so we kind of like just swapped spots so to
[02:48:56]  speak he got he got a job at ebay now through open source basically so really great story um yeah but it was a great community kind of push up um so that
[02:49:06] 's why i wanted to show that see not much news here we've been just plugging away at solid start but i'm really excited about the mobile stuff um uh yeah well while
[02:49:15]  talking about you know uh before we get into the big topic i'm gonna we're gonna get into in a minute um which is the signals stuff i just wanted to make
[02:49:25]  a shout out a bit to leptos which is for those who know is we've had greg on the stream one of our most popular stream actually um where he
[02:49:34]  taught me rust um but we they've been making incredible progress there and uh what so they port ported tan stack query to to leptos now in rust so they have
[02:49:48]  that pattern um the dark age of react i didn't even read this uh it's funny because like i talk about the dark age of dot net this is like the next
[02:49:59]  generation is gonna be talking like this that's hilarious redux flashbacks oh so in any case um what we're seeing in this ecosystem very quickly like if you remember when g
[02:50:12] reg came on i was legitimately surprised he had implemented server functions in leptos and he basically made solid start in leptos like the version at the time and i was
[02:50:21]  just like you didn't tell me this i knew he'd like ported something very similar to solid in in in rust but he actually makes it easier than javascript
[02:50:29]  or it's just because he just decided to figure it out he wanted a backend framework right like that like he well not back and he wanted like to be able to use was
[02:50:38] m right like like or use rust essentially and he you know there's been a lot of conversation about like is it fast enough can it be more performant and he what made
[02:50:47]  leptos kind of uh show up you know on the map was they were the first wasm framework to basically get within spitting distance of of the fastest javas
[02:50:56] cript frameworks i think leptos got got it within four percent to solid js on the js framework benchmark which is way ahead of you way ahead of svelte like you
[02:51:05]  know lit everyone else and people like whoa this could be legit and then he just kept them building out the thing and he's a big reactivity fan kept up you know and
[02:51:14]  now they're seeing a community actually building very similar to us building these pieces on top and the biggest downside and the reason he built something like solid start was the biggest downside
[02:51:27]  is that wasm's like bigger to load like i at one point he was telling me the component size and i made a funny face and someone screen capped it because it
[02:51:35]  was like it was like it was heavy you know and um so it brings back to the first part we have these giant javascript bundles right so as it turns out
[02:51:45]  the same solutions that we solve in javascript can apply to wasm and when like if you get into that zone you start getting into this interesting question because obviously you
[02:51:53]  can make better patterns like this like we're seeing with uh the queries but you know he he was like really stoked when he showed me uh his version of something similar salt start
[02:52:04]  because he had the progressive enhancement so he's like look my app is interactive before the wasm kicks up right wasm takes slower so he's making what i call the
[02:52:13]  remix argument like it's okay if my framework's slow to hydrate or slow to load or whatever i can just progressive enhance right that's how remix has been kind of saying
[02:52:21]  it for the last little while and and but and i was like you know that that's not a perfect argument but i mean honestly a couple years ago i wouldn't have
[02:52:31]  thought we would be here we're we're not concerned about update performance we're just concerned about load performance and it actually loads relatively fast and if it doesn't it's still
[02:52:41]  interactive do you guys because we actually care because google makes it count for seo right i mean that and then there's sort of how much things like that if you affect
[02:52:53]  the entire like what we what we work what we prioritize as web developers how much is it just based on what google decides to optimize for for seo right and and that is
[02:53:02]  true and that's guiding a lot of the r d that we're doing in the thing we're using imp as a measure of our success on the the work we're doing
[02:53:12]  we're using core web vitals wrong with that from like framework properties protectors users perspectives like it's it's totally makes sense it's just i don't know i
[02:53:20]  always wonder about things like that you know like why do we decide to optimize the things we actually optimize but guess what i got i got a hacker news demo built in lept
[02:53:29] os and now man i was thinking about trying to build this with redwood but then i realized it was just i didn't have the time next time i'll build hacker news
[02:53:37]  for redwood for you once but this he's actually enabled this this is a different leptos demo because he showed the progressive enhanced demo when he was on stream and
[02:53:47]  we were very excited about it but in this demo when i click you're going to notice the spins because unfortunately or maybe fortunately this is an mpa and you're like okay
[02:53:56]  well why the hell did he make a hacker news in an mpa now this is you know because it has such fast initial load it just works right right i mean part of
[02:54:05]  it is especially because does it in the problem with wasm how big that initial load is right um and the question is i forget what it shows up here um okay i
[02:54:17]  need to get into an incognito window give me two seconds so just what are we loading here wait what 4.5 let's let's put all on 4.
[02:54:36] 5 kilobytes of javascript and 49 kilobytes of wasm now let's go to the comment page you know the death tests kind of page and and do
[02:54:45]  this load will you see it again 49 and 4.5 okay so if you remember greg was telling us sometimes that like these apps would be just humongous like you
[02:54:56]  like 200 kilobytes or something even for something like hacker news probably wasn't perhaps someone just said okay uh we can yeah so there we go 49 but what i want
[02:55:09]  to point out here is the reason this is kind of small for wasm because if you think about just put it out there next js version of this page is 80 or uh
[02:55:21]  well actually you know what why why why why what is it next well let's do the rsc actually always always wonder about i wanted to talk to you specifically about is
[02:55:32]  like at what point does it become too big yeah okay so the rsc version of this okay yeah great let's go to js what is this okay 90 kilobytes
[02:55:43]  right i we yeah we we can we can go there in a minute but what i'm gonna say is it's 90 kilobytes so his rust version isn't any that
[02:55:53]  i'm showing you here isn't any bigger that it's actually half the size in the next version what's what's going on we can kind of tell by the islands here
[02:56:02]  or so the title here i just gave it up sorry he did islands in leptos yeah yeah so he's doing partial hydration in leptos so that same j
[02:56:11] avascript saving thing is yes it's obviously bigger than astros which is like you know solids versions which are like six kilobytes for the islands version it's like nothing
[02:56:21]  but when this is your competition you're actually never going to have islands is it just like impossible no no but the thing is react server components is islands for react it's it
[02:56:37] 's a type of islands yeah right yeah like the code reduction part is the same i was complaining that they didn't solve the double data right like if you go in here
[02:56:46]  you'll you'll see like every single same thing that you just saw in in here like or wherever it is we'll get in here eventually do do comments comments like if i
[02:56:58]  picked a piece of text in one of these stories like i am a northern us okay there we go and i go into the uh what the network and grab the what i
[02:57:08]  would say the document and look at the response and if i search in this response and go i am i'm from northern us you're going to see it in this p element
[02:57:18]  and if i click it again oh actually this one's not a good example apparently this exact phrase is in here multiple times um let's drop a bigger chunk yeah we are
[02:57:29]  okay let's try this one i make it a little smaller yeah it's like might i split it on like a line break or something yeah you're right there's probably like
[02:57:45]  a character okay fine let's let's just pick like a different one over the years i definitely insulted several southern guess by mostly ignoring them yeah this is probably like a great
[02:57:56]  story okay okay yeah yeah so let's go back to the first one right it's in a paragraph element in the html and then if we click it again it's
[02:58:08]  in this jsx blob thing we saw at the beginning where it's like self-push next whatever server component thing right um so yes there's that but the actual
[02:58:19]  code being sent there's no code being sent to render the comments only being sent to the tabs and it's hard to probably see this be but if i if i look here
[02:58:31]  this is the toggle component like what i was talking about like the thing that actually does the interactivity like this but the rest of this um is not like the other components aren
[02:58:44] 't in here and you've got to trust me but we won't find children colon probably in any of the other uh well i guess there's some internal stuff yeah this
[02:58:56]  is the next js internal components like baselink what my point is the rest of your app code doesn't have this is actually islands from a code perspective so the this is
[02:59:06]  just the size of react plus the size of next js after this point you get the benefit of islands you just you your starting line is 84 or 85 kilobytes and
[02:59:18]  then like you you get to use islands from there where other frameworks their starting point is like four kilobytes so like it makes a bigger impact on this but what i was
[02:59:27]  getting at is the starting point on wasm might be like 50 kilobytes so we're talking to aiden from millions about how when he first started millions he tried
[02:59:38]  to do it with wasm and then decided to find like these new kind of vdom solutions yeah yeah it's it's interesting i mean the the the the vdom stuff
[02:59:50]  there which is a little bit of a tangent is is largely been it's the block someone there's been block dom ask solutions in the js framework benchmark since 2018 ish
[03:00:04]  for about four years um and it was the same thing there were signals in the js framework benchmark from like 2015 16 doing this so like the technique always proceeds like the dx win
[03:00:16]  yeah totally um the problem is the js framework benchmark now has actually gone to the limits so now that we know that we can approach things both ways and get basically the same
[03:00:24]  score we almost need to find something that tests something more complicated structurally because the the problem right now is we've gone to a point where i think that the the techniques of
[03:00:34]  basically is like is the js framework fresh work a single page or is there routing involved in it it's a single page with uh uh it's a single table you can
[03:00:45]  picture it being like uh yeah it's able to like a thousand rows or something and you there's operations to add rows remove rows move rows yeah select update specific and just the
[03:00:57]  show and hide them and append row like like like it's all just table ops which are classically you know things that can be you know very common in apps um but
[03:01:08]  yeah because i feel like now that we're at the point where all these frameworks are trying to figure out this different render mode along with mpa versus spa like it doesn't
[03:01:16]  really make sense to have a benchmark that doesn't include that type of stuff or even if you use like view transitions like however the framework decides to do it you know yeah um
[03:01:24]  yeah i mean actually maybe we should talk about million i think that was from previous week but uh we can pull that off on twitter in two seconds i but i just want to
[03:01:34]  leave on this note is if wasm adopts the same techniques that we use to reduce javascript and they have the same care of attention maybe they won't beat
[03:01:47]  the fastest javascript frameworks but if they use the same techniques that the smallest and fastest javascript frameworks do they're probably going to outperform the average popular framework
[03:02:01]  um which is react exactly which is a very interesting place when like at a certain point but if someone's not going to move from react to sol they're certainly not going
[03:02:14]  to move to leptos right but it's like another thing where when people are looking and they're like yes it becomes yes react has a job market react has that but
[03:02:26]  if these other solutions just start coming out and they quantifiably feel more performance faster all this like the guys who were like i really want to use rust i don't want
[03:02:36]  to use a javascript framework you know like yeah they can they now they if they actually have a reason to they're getting very close to being able to to do
[03:02:45]  that so like and and and honestly with very little criticism because if we can shave the javascript we can shave the wasm and at that point they can even brag
[03:02:57]  that their site is more performant than a react site so they're also using rust lambdas instead of node lambdas well that's where the real win comes in i think
[03:03:08]  i think he the leptos guy was like our our our server side rendering is 30 times faster than react and i'm like okay that's pretty good because that means
[03:03:20]  that it's uh yeah like it's like even way fast that's faster than any javascript framework like not even yeah like a whole order of magnitude so because i think
[03:03:31]  we'd done a benchmark where we were like six to eight times faster than react but 30 times is like you know fast yeah anyway so yeah i mean i don't know
[03:03:43]  i i think there's still like a bit of a barrier here but i think this is a important piece a moment in time to see and i i'm sure greg will
[03:03:52]  talk about more of this in the future um when when we figure out um islands routing and like the real version and like server clones i'm sure leptos will also
[03:04:03]  have it almost immediately so i i think this is going to be i think it's gonna be interesting when when we're in that world uh anyway uh yeah actually yeah before we
[03:04:17]  we should actually do a quick search for a second here because i i i think it was the week before but um million js has been doing a lot of uh polls what
[03:04:28] 's wrong with this component i i i was having a little bit fun with this but um i think i think uh yeah aiden's been pushing this new thing where he got
[03:04:42]  funded for four months which we announced before um which is incredible for a project this age and i do you know why the proposal is attractive right like think about it like i
[03:04:54] 'm going to make your react app faster you don't have to adopt a new framework or do anything different i'm just going to automatically make it faster who doesn't want it
[03:05:03]  is the proposal and a web dev term is completely irrelevant because tyler count doesn't know the first thing about web development he's looking for smart young people who could do interesting
[03:05:11]  work that wouldn't be get that wouldn't be able to be funded through traditional academia that's what he's looking for right yeah so that makes sense but i'm saying
[03:05:20]  like for a wider thing why this is interesting i think the tricky part about this is this is a last level optimization kind of like caching like it's uh it only affects
[03:05:29]  leap nodes it doesn't it doesn't make a slowly architected app faster it makes the last tip of the interaction faster to be fair that's how most frameworks that use signals
[03:05:41]  use signals they they use it as a mechanism to get that last leaf node faster that last text node in the dom on a table faster but we had it on a few
[03:05:52]  weeks ago and we showed it sometimes in general making a problem solving a problem by making it faster is better than scheduling um we we did a demo where we compared our um our
[03:06:04]  rsc or concurrent rendering performance with with million and while both of them got to a point where they got really sloggy the the the difference was that because concurrent rendering makes
[03:06:18]  sure everything's consistent and good and doesn't like interrupt in the same way or tries to do it what was happening is on aiden's version he would do an action like
[03:06:28]  in million and it would take a fraction of a second and you'd see the the dip but it would be done and this is classic like solid kind of same kind of
[03:06:38]  improvement right but then you go in the react version and you click it and the thing would actually go just as much even maybe even more into the red except the action would get
[03:06:49]  delayed like two or three seconds because like it was doing the concurrent stuff in the background and making sure that like like like that it was like trying to make it smoother and
[03:07:00]  you could argue that it wasn't quite as red but like yeah i don't know we just did it over and over again for the visual and i think it was very interesting
[03:07:10]  it's basically like it depends on what's expensive in your app and in cases where the cost isn't in your end user code but like in the dom operations or like the
[03:07:20]  joint 3d or some kind of expensive thing then like concurrent rendering isn't going to save you it's only if the computational cost is expensive i think the challenge here is
[03:07:31]  block dom actually only solves the rendering stuff not the computational cost so maybe you put them both together and you'd be in a good place but it's it's uh yeah
[03:07:43]  i i i think this is this is a very attractive idea i think there's i i i think the value of it is more questionable but i think that people will have to
[03:07:55]  explore this route because they're stuck with react so um i hope this has benefit but if you think about it the true the at a certain point usually react gets incompat
[03:08:08] ible in a certain way like they had dominic ganaway the creator of inferno working on the react core team right like he he was there he could have made react
[03:08:17]  faster now yes he's unspelt now yeah they kind of felt five last week yeah yeah yeah yeah yeah so he could have made react faster but that wasn't the direction
[03:08:27]  because the compatibility with what they wanted to achieve and it's the same thing with like the way preact has that thing that compiles react and get signals under the hood and
[03:08:34]  all these like like small optimizations will always fly in the face like of what where react things are going like i think react forget is the one that makes million not make
[03:08:44]  sense anymore perhaps yeah yeah i had aiden on javascript jam and he has like this whole grid thing that compares like react with react forget with million and yeah so it
[03:08:54] 's it's a very it's it's the thing is react could do this optimization one of the reasons they don't for is for simplification philosophically they don't believe
[03:09:02]  that create should be different than update unfortunately for basically everything that exists in the real world that means you are saying that you were willing to make stuff slower it's it's
[03:09:13]  like but it's like very important for them um like from an idea standpoint but like it's literally the source of most of the performance gains of reactive frameworks and other stuff and
[03:09:24]  what aiden's been able to do really smartly here and market it well is take a bit of that performance that we do in these other frameworks and apply it back
[03:09:34]  into like a small part of react um yeah but yeah i i'm i'm excited this in that this kind of conversation gets people talking about this because you're like oh because
[03:09:48]  now when people go oh i i didn't actually try solid i just went to using the the blocked on million in react or i uh i tried react the first thing i
[03:09:57] 've heard about since you know solid kind of blew up and or quick probably yeah those two were so i was like oh this is this new thing that i can try to make
[03:10:05]  my thing faster without a lot of extra work you know yeah or uh what was the pre-act signals is another one i can just use pre-act signals in react and
[03:10:12]  now i don't need to use something like solid or whatever or like you know svelte or whatever and oh aiden's in the chat by the way i i
[03:10:19]  i love this conversation though because if that's what people are coming to tell me that means they're thinking about it and if they're going to go try this they're they
[03:10:33]  might be satisfied enough on their project but you know what it means their next project they're not going to do this their their next project they're going to be like okay
[03:10:44]  now i get to start from scratch and i just want it to be like this anyway yeah like donna kick the hedonic treadmill right because at a certain point you're just
[03:10:54]  like you see the benefit you use and you're like why isn't react like this why can't we just do this and then you're like then let's just do it
[03:11:03]  you know so yeah i'm i'm actually very i think this is a just a change in narrative because there's two outcomes of this react shapes up and does better and
[03:11:15]  works on this you know in ways or people start trying other things so i you know that that that's that's the bottom line from my perspective at least who needs signals right
[03:11:27]  yeah no completely right that's that's what i've been thinking a lot about recently right i actually changed my uh twitter thing um recently um signal signals everywhere uh because we
[03:11:38] 're we're just back on this conversation again and i think the latest which is kind of exciting um is every couple months you know or every couple years someone tries to bring some
[03:11:53]  kind of reactivity into the spec i think a few weeks ago we talked about observable events i don't know if if you if you saw that anthony there was
[03:12:00]  like dom event where it's like on click but it returned to like a rx observable basically yeah i mean that i never use rx that stuff just makes no sense
[03:12:10]  to me just like okay cool yeah so like when like in in in this kind of uh scenario the problem is there's people who really really want it and then there's
[03:12:25]  other people like i'm never going to use that so it's sometimes hard to find the users because it's like you have to convince people like this is the generic api
[03:12:32]  um the funny thing is rx kind of sits in this place where it has really good niche use cases and it's kind of like if you want to solve that and those
[03:12:41]  people like very much love it but it's harder to always push it into the standard there's so many operators there's complexities and all this stuff but one thing that is happening
[03:12:50]  the front-end world that everyone seems to agree on right now is signals like right yeah like if we did talk about svelte 5 we didn't go much detail
[03:12:57]  but dominic is basically suggesting it it the the reason for svelte 5's incredible performance gain is because guess what they switched to using signals under the hood right incredible yes
[03:13:08]  so like he's got a really compiler optimized thing see and there's a lot of ways you could go with a compiler spec and we could probably like talk about this for a
[03:13:18]  bit but essentially high level looking at this coming in is who what frameworks use signals at this point most of them yeah like well it's okay i'm solid view um pre
[03:13:38] act quick svelte 5 um actually you know what let's just go down the list best of js yeah yeah it's like uh where is it uh by total number
[03:13:53]  of stars ui frameworks okay angular did i miss that one so yes yes not not reactor skip reactor view angular svelte will be just view again preact solid not
[03:14:10]  um not you um not backbone alpine yes ember basically polymer no hyperap no quick yes htmx who cares relay no okay lots of people care about ht
[03:14:23] mx all of a sudden it seems like i know i'm just being i'm just being a jerk um but my my point is like um it's kind of it
[03:14:35] 's becoming more of like just the thing to do just having signals seems like table stakes at this point right right because if i i put virtual dom here let's do virtual dom
[03:14:44]  instead and um i mean that's a pretty good list too but actually i think the signals list is going to beat the virtual dom list um pretty quickly here um react view
[03:14:56]  preact inferno riot mithril million racks but yeah um this this this is the there is an interesting in customer for this so dominic was obviously working on the compiler
[03:15:11]  and as he he threw something out a few months ago and i think i mentioned i put this on the stream where brendan ike responded and said javascript
[03:15:19] 's not a data flow language um but we're back here again because more people are looking at other proposals proposals around like putting signals directly in the dom which basically makes it kind
[03:15:29]  of like solid and dominic kind of very vocally went out here and said i think signals are central front-end web if done right they solve so many problems i'm
[03:15:36]  looking forward to working with all these people to make this primitive reality and what that means is bringing signals to the browser to the actual javascript spec um do you think
[03:15:46]  that's going to happen i think there is motivation i think it's going to be tricky to balance some of the parties but not the way people think i think they're not
[03:16:02]  the biggest problem specs they try and do too much so like they and the reason they do too much is because there's a tough balance between who the consumer is there is
[03:16:11]  like the low-level primitive framework author guys who always get pissed off at the specs people after the fact and maybe weren't involved in the in the process and then um
[03:16:27]  and and then there's like the end user developer who's like i just want to use vanilla js i mean those people exist still but like the spec people have to look at
[03:16:40]  that and every range in between so what usually happens is if something starts from a land of like uh mechanical base kind of thing of like what i need by the time it
[03:16:50]  goes to try and get released it has to appeal to some user or something like i i'm gonna use web components as an example because web components are a great example of like
[03:17:01]  what not to do um because if you look at the uh if you look at like the framework author perspective or like the library maintainer author perspective like okay i want scope
[03:17:10]  css and i would like um some way to know when dom elements are attached or removed from the dom that would be nice so like you know i could like attach something and
[03:17:20]  like fire an event or and back then they didn't have mutation observers and they weren't like you know what i mean like the idea is like as long as you can like
[03:17:26]  picture you could just put an element on the page and run some javascript you know and when it's removed you can run some javascript like that's the that
[03:17:33] 's the basic ask and i want to be able to scope css somehow that and maybe i want to like make ranges of dom elements that can be removed and added you
[03:17:44]  know like fragments kind of a sense that were persistent those three things probably what every framework has wanted since 2010 but instead we ended up with web components because well if you take those
[03:17:54]  three things you realize they're kind of like a component system and if you put them all together you can make this like system and then end users not the framework authors end
[03:18:02]  users could just like build their own thing with them and they're usable by them because the those pieces by themselves might not be actually you know like people could use them wrong or
[03:18:13]  they could be you know like there's a billion types of considerations that come come with that and they're like maybe too clunky to deal with whereas if you tie up all
[03:18:20]  these ends you can like solve multiple problems from multiple parties and kind of weave that line perfectly and and get that right solution now the funny thing is as a framework author that
[03:18:30]  is exactly what i do i i'm always weaving walking the line between solutions picking the best parts but i don't think that's the job of the the browser um like so
[03:18:39]  like this is the challenge with something like like uh trying to come up with a spec because i think if you talk to the framework authors who have big interest in here most of
[03:18:50]  them will be like yeah honestly i just want some kind of like base ability to have like a signal and maybe like a computed or like memo like derived value system and i
[03:19:00]  think we all agree that they're poll based you know as long as we can have like a way of like doing that reactive propagation in the browser it's fine like i'm
[03:19:08]  going to talk to like we're going to talk more and see how far people want to go but a bunch of questions in the chat by the way yeah yeah um answer
[03:19:15]  those and i'll be right back yeah yeah gotcha um let's let's let's see what's going here what would the major benefit yeah okay i gotta scroll way back
[03:19:27]  here so last comment htmx who cares yeah okay that's that was that yeah and then where's it yes that's right i wonder if dash who's w
[03:19:34] aku who has signals i mean jotai is getting close to it i think they actually released a jotai signals library at some point um but yeah so crazy whatever i'd yeah
[03:19:47]  i don't know what that's referring to but if it's the signals thing i think that'd be fair but yeah okay major benefit of bringing being native i was just getting
[03:19:55]  to this um if we could all just have like there's an interop story here right if you could have the same base class to this then all the reactivity systems
[03:20:05]  could be uh compatible with each other because they'd have the same tracking system i think the challenge is that every framework has a different idea of how to handle side effects and scheduling
[03:20:14]  like when they run should they be on the micro task should they be synchronous and even then within them like it's all we have render effects and normal effects we'd have different
[03:20:23]  behaviors with transition suspense like all all of those kind of things so like you get into the zone where like you have zones of different flushing boundaries off screen like there is
[03:20:31]  a whole bunch of complexity that i don't think belongs here but if we all had the i think yeah i i'm actually gonna go into this a little bit um uh because
[03:20:53]  like this conversation with dominic continues a ton and like you you can read for hours in here um but what i wanted to to put is my initial point here is that
[03:21:04]  i think when it comes to pure portion signal drive values it occurs to me that most discussions these days around syntax and or like what's the most optimal algorithm but not so much
[03:21:13]  about behavior i think we all kind of arrived that we want poll-based reactivity for signals and derived values and what's cool about that is that there's like no
[03:21:21]  no scheduling consideration because when you have a library that just uses um like a pure pull-based library when you update a signal it doesn't do anything except tell any downstream derived
[03:21:35]  values that hey you're stale so when someone asks for them again um you need to recalculate like rerun the function but if they are not stale you
[03:21:43]  just return the last value it's kind of like they're memoized right um so you know it's really about um that we have different opinions around uh scheduling and side
[03:21:56]  effects um and i when i said this i realized most people don't actually probably get what i'm talking about but the the library that sort of took me off to this was
[03:22:08]  milo's work on um reactively and his library doesn't have effects like he uses the same thing for a signal as a computed like he just has a single primitive
[03:22:19]  but he's basically it's like okay i have a value here this counter and then you know i have like a computed value and then if you want to get the value of
[03:22:29]  the counter like i don't know about this equal like this right is weird but let's say if i want to get the value of the of the counter then you just
[03:22:40]  call dot get on it and um a render document what's render yeah okay his render i guess his render is his effect but essentially he's calling git on a on an on
[03:22:51]  what i'd consider something effectful my my point is his system is completely pull based there's no scheduling there's no like do this every time this changes it doesn't run
[03:23:01]  anything until he calls dot get at the end here so he can you you know set some new values but then he calls dot get and is the point of this just like
[03:23:10]  the benefits you get from functional programming in general well it's it's like a reverse memo system it's it's a pull based one instead of a like a put push i
[03:23:20]  mean it is like a memo benefit like why why would you want that is what i'm asking well uh how should i put it this is just it's i'm not saying
[03:23:29]  you want this api i'm saying that every signal solution starts with this and then they build a whole bunch of crap on top of it so if we actually just had
[03:23:37]  this then suddenly everyone's version the problem right now with the reactive system when we actually have something where we enable external source where we can have like molt like you can use mob
[03:23:46]  x variables inside solid it's imperfect but it's there and the idea is that every reactive system isn't compatible because they have a singleton that does tracking they have a
[03:23:56]  a way of being like when this affects running this is the current context listen to my things but they don't know how to listen to someone else's things well if they were
[03:24:03]  actually all the same base classes they would actually all be able to listen to each other and i'm getting to to the point of what the benefit of that is is it's
[03:24:12]  not just like oh yeah they're interruptible i i know a lot of people who probably don't care but picture what it means if that's native okay what if you could
[03:24:22]  get better stack traces for your errors instead of having a queue like the imperative running of signal propagation you could actually like when an error gets thrown it's not like where it
[03:24:32]  gets thrown in a queue it actually throws along the reactive graph so like you could understand that hey it's because this changed that this change or because this asks for this change you
[03:24:41]  could actually trace the graph which is different than tracing the execution queue um that replay is working on replay does like back and forward debugging and we we have people on the solid
[03:24:53]  dev tool side working with the replay guys to see if they can do reactive debugging which is cool but i'm saying it's like this could be kind of browser built-in
[03:25:00]  uh error handling debugging similar but it you wouldn't need like this whole extra product thing is basically it would just be there and do it automatically yeah i mean replay going back and
[03:25:08]  forth is the next level picture if you can go back and forth along the graph yeah yeah exactly but on the other hand what like if you just think about it this is
[03:25:19]  easy for people to imagine think about what async await did in in javascript and chrome tools you can actually walk the async tree right when you hit it doesn't
[03:25:30]  even though it's a completely different stack trace chrome like lets you walk through the async so you can actually continue and you can actually debug you can go up the stack through
[03:25:39]  the async awaits what if you could do that through the reactive graph like because this is native uh capability my big point of why i showed reactively is this is if
[03:25:50]  you keep it on the pull side there's no scheduling there's all the subscriptions are technically even auto um disposable because if no one's listening to reactive like then this doesn't
[03:26:06]  need to exist because it's all derived like it's like you can basically you can make it auto disposing you could make it um basically there's no concern or potentially
[03:26:17]  around cleanup or scheduling or like this is just a very simple primitive for being able to read um these kind of semi like they're they're basically memoized but they're
[03:26:32]  memoized with like automatic invalidation um like and it with this what i was trying to show is like uh uh uh that where is it yeah i'm gonna grab this one
[03:26:46]  milo went to bubble and he was trying to build this for bubble has their own reactive system and he's like but i'm working on solid 2.0 he's like
[03:26:54]  maybe we can use the same reactive system so he took though it's funny he reactively internally became like the prototype for solid uh 2.0 and we have a private
[03:27:04]  repo for that and then we started working with the guy from reactively created last summer like around august last summer about a year ago i don't know anything about it and
[03:27:14]  then like it was really uh interesting from the signal kind of thing because he basically found a very performant way of doing signals um and he he kept it really on the base
[03:27:25]  you know like primitive side he didn't worry about effects and then what was interesting to me is he took that base we we worked with the uh rahim from maver
[03:27:35] ick to kind of work on solid 2.0 base and then he took that that base again to bubble to try and integrate and then they they shifted it a bit more
[03:27:44]  and we've been kind of progressing this reactive uh core library and he took he made this effect ts and i always laugh about this because this effect ts is essentially just an implementation
[03:27:57]  of the effect in in this library but bubble does not use it because bubble has their own thing and they're not going to use this version and in fact solid is not going
[03:28:05]  to use this in fact this file can be deleted but right now for me it serves as an as an example because this is a system that doesn't need effects but what
[03:28:15]  if you wanted to add effects like you know create effect console log whatever well this is a great example of just like any exercise of like how would you add effects to a thing
[03:28:23]  and most people have never even thought about that they just use they they use the effect like oh yeah how do you do effect you use effect and yeah yeah and the example this
[03:28:31]  is over complicated because he has a few other things in here including like hierarchical stuff because solid does like hierarchical nested effects and stuff but like the base of it
[03:28:41]  here is that he has a computation class and then he has a few like enum variables for the state of the signal and then you can ignore the rest of this okay then
[03:28:52]  and use a code basically he called the scheduled effects but i'd say like yeah scheduled effects is fine then uh running effects uh yeah these are just flags to keep track of whether
[03:29:02]  you've already scheduled effects or if they're currently running and then he has an effects list but and then this is just so people can flush sync we can ignore that then
[03:29:12]  he basically has this flush function which probably should be called schedule which is like schedule set schedule to two cue micro tasks to run these effects later and you might be like okay what
[03:29:22] 's running effects well if there are effects say that you're running them now iterate through the through the queue and run them and then clear the queue and state at the end
[03:29:34]  okay like this run top is hard sure because of solid but we can ignore that for a second so it's basically just a for loop that runs through uh like a queue like
[03:29:41]  a like a like an array almost turing complete and then and then what's in effect well he just took the base computation class and overrode the notify method so instead
[03:29:53]  of just being notified and saying hey i'm dirty if if if when you go to say hey i'm dirty you just push it to the queue and if it hasn't
[03:30:01]  been scheduled schedule the effects like i i don't know if this like appeals to everyone to understand what i'm saying here because but it's basically all he had to do was
[03:30:10]  just very simply take an existing computation mechanism and then be like oh hey now when you get notified instead of just like saying that you're dirty also push something to a queue
[03:30:20]  to and all that queue does is basically call that get you know just go through the list so like we this example chose to use uh where is it micro task queue but you
[03:30:33]  you could do whatever you wanted you request animation frame and or you could not schedule them you could say hey no i actually i'm going to hold this until it gets attached to
[03:30:41]  the dom or i can like like you you could do any number of things and and basically we you'd still benefit from this being built into the browser um and but you
[03:30:53]  could as you can imagine this is not a very end user it's kind of like uh streams and node yeah implement your own one of these old jobs apis that we all
[03:31:02]  originally learned to code with you know yeah it's like it's like implement your own readable stream by overriding these methods on the stream class you know i'm i
[03:31:10] 'm not suggesting that this might be the final spec but i just want to point out that it would this is where that's easier to put in than most people would think about
[03:31:20]  and could just be there on hand right and without being too opinionated and the truth of the matter is in every reactive library under the hood there's these uh you know these
[03:31:30]  um where is it i'm gonna go into do do do not effects globals uh index probably the core core probably core yeah there's a lot more questions and comments also
[03:31:42]  as you've been talking yeah but which i'll get to a second but essentially this base class is kind of complicated there's a whole bunch of crap a whole bunch of properties
[03:31:50]  in it but like an actual signal or computation internally has like you know at least you know maybe maybe 10 or so of these properties and things that we keep track and owners and
[03:32:00]  setters and all that but that's not a good interface for the end user right because what are they going to do all this stuff but me as a framework developer actually
[03:32:09]  want access to a lot of this information so we always have internal nodes and the external api so like what i actually want the browser to do maybe is basically standardized on the
[03:32:19]  internal api like the nodes because we can always override them and add new behavior to them like this is the kind of mentality i'm coming from but i understand like from
[03:32:27]  a spec perspective like a browser object all right like a class give me a class but like from i can understand from like a spec perspective this is not like people can't just
[03:32:37]  pick up and use it they like this is actually kind of clunky so i think this is where like these kind of challenges come from right um yeah so what do we let
[03:32:46] 's get with chat chat here so i was talking about the benefit so then um okay signals can be implemented in different ways each with their own trade house the api also
[03:32:56]  somebody government that but how do you yes which parts like well that's the whole thing like i was trying to get low enough that i didn't care like if you use dot
[03:33:03]  value or a function i don't care right because the truth matters whatever the spec lands on i'm going to wrap it with the same api i use with solid today like
[03:33:09]  i'm not solid doesn't even have is signal like i don't actually care about the interop layer but if i was running a spec i probably would because i'd
[03:33:18]  be picturing these use cases i just personally have no use for any of it so it's kind of an interesting tension well it's like what we're talking about with red
[03:33:26] wood and how you could have the whole way you write your redwood stuff and then the internals which would actually do all the stuff and it's like this there's just
[03:33:33]  it makes sense to have that separation because otherwise everyone has to know everything like that's the way you specialize right the hospital like sort the browser deciding the right algorithm i'm actually
[03:33:44]  less worried about the algorithm thing to be fair there are a bunch of different algorithms that optimize to different um things like some are better fan out some are better creation some are better
[03:33:54]  at being deep versus whatever all of them are very fast i as long as creation is fast i don't really care about update the update performance is probably good i know people might
[03:33:49]  have specific needs but like the the difference there isn't what's killing people on performance the difference is like everything else like the the speed of the reactivity only matters as
[03:34:16]  far as the creation cost because that's the biggest overhead when you go and create a reactor graph versus just like rendering or whatever it's like creating a v-dom or whatever
[03:34:25]  you're creating you're making a bunch of memory and that that can be expensive so um you know there's a few different there's like the coloration algorithm we went through
[03:34:36]  a bunch of algorithms on my previous stream i i think as long as it i don't actually think that part matters as much um surprisingly but you know everything is like female
[03:34:49]  parts to get a value kind of like different yeah so everything is lazy yeah this is what i was trying to say yeah i'm catching up yeah i'm about 10 minutes
[03:34:58]  behind in the chat thank you anthony for pulling that out quick question does does milo have a twitter yes modern me um he he he joined finally after i posted his article
[03:35:09]  because he didn't post his own article um like next yeah he's yeah i mean this is we can he this is a typical stuff i he he's just about to
[03:35:22]  enter second year university so um he he was already he was yeah he was they're way too good right before the summer before university he created reactively and he he's been
[03:35:35]  on the solid core team now for since i think 2020 or 2019 so because he he came in and he wrote a different hyperscript version for solid that was as performance
[03:35:44]  as the jsx but it was too clunky to use it's in a lot of ways it reminds me of block dom um but it was like where he's trying to
[03:35:50]  make hyperscript make blocks for solid because that's what our jsx compiler did um yeah really smart kid obviously uh i need to get him on fs jam um
[03:35:59]  but uh where was i yeah uh sorry back to the the comments i see um yeah okay so much here that i probably won't get it all but proxy holds a reference people
[03:36:12]  are about proxies so what makes you stay in reactive bounce version making batching a state it's there's different places you can batch just so you understand and i i
[03:36:24]  guess there's an argument of whether you want to batch on right but actually none of the reactive frameworks batch on right they all batch on effect batch on right is what react
[03:36:33]  does batch on right and and solid actually did that in our batch mode in the early days where if you write you hold the values until you're like okay now i'm going
[03:36:42]  to propagate and i honestly that model is the least likely to be flawed it is actually a very smart model the only problem is literally everybody hates it except maybe people who've
[03:36:56]  used some different like smart functional programming stuff in the past almost every developer comes across it is just like why does react to this this is the stupidest thing ever i hate it
[03:37:07]  unless you're a closure developer maybe yeah like maybe look and and this is this is this is the sort of sort of thing where like i'm actually not worried that much
[03:37:19]  i mean and the the thing is you know why again if you want to batch the rights you can always wrap your signal primitive and have the ability to batch the rights like this
[03:37:28]  isn't this is not actually um that hard to to like do do that what most frameworks do is they batch the the reads they batch the effects essentially um and solid today
[03:37:44]  only does does that synchronously um and that's where you have to wrap everything i mean there's other reasons to wrap everything but that's that's that's why they do
[03:37:51]  that like all the crate routes um and a lot of the are so many of them use um micro task queues where they say you know at that point they pull all the
[03:38:00]  values but i think if we talk to everyone almost everyone will be okay with um well here's the beautiful thing if you don't care about batching rights generally and if
[03:38:10]  the batching only happens on effects which are not part of the spec and outside of the realm then we don't actually have to worry about batching at all for the spec
[03:38:19]  from my perspective so i like this simplifies things drastically um could give a default but the problem with the default is that you're like implying behavior and i think it
[03:38:34] 's dangerous because this is the the challenge i had with this is because and i i will talk about in a minute here is is that if you if you have having two different
[03:38:46]  effect systems run at different times might be okay if it's intentional but if it's not intentional it causes uh inconsistency so like the the an example actually i'm
[03:38:56]  going to get to this in two seconds um uh we'll go there in two seconds okay would that flash effect make ui not atomic um usual uh yeah the flush effect idea
[03:39:09]  is like everybody has an escape hatch too which is like flush everything right now um it does definitely change the behavior if you do that because it means that you're like i
[03:39:20] 'm ending whatever the cycle was right now and i'm gonna start a new one so um it depends on what you're flushing um but yes in terms of effects the here
[03:39:34] 's the thing though so when i say flush all any change that's already in will have already told which things what to change so it's just any further change won't
[03:39:45]  you know apply so like you can almost view flush effects as like when you're in a function and go like cue micro task and then go in you're basically pulling yourself out
[03:39:58]  of the flow like everything that was already scheduled will then run so actually i think it still stays consistent um sets the frameworks and end users yep good luck okay okay let's
[03:40:12]  let's let's go back here for a second that's why that good luck yeah it's literally impossible um it's because i i was talking about that but the reason this
[03:40:22]  came out i actually found out later was that this is where the conversation was i i forget if we covered it on stream but there's a talk of something called a dom parts
[03:40:31]  api and they're getting pretty deep into it where they had this idea of like building templating in and updates into the browser and some and someone's like well couldn
[03:40:39] 't we just do this which is like document create element button text content equals count wait count is a signal and then here append div well div is a signal as well and using
[03:40:48]  this as a as a way of just replacing elements essentially by by using reactivity um and then because once you wire it up if you change like like they're using uh
[03:41:01]  uh preact and view syntax but if you go div dot value because a different element well you've just replaced the section of the dom and if you you know update the count
[03:41:10]  on click well you just updated that text directly without re-rendering anything as you can tell like this is kind of what solid does right like super fine-grained updates
[03:41:20]  by basically wiring signals to portions of the dom but the channel and i when i saw this post i was like this is cool you know like because you can picture like a
[03:41:32]  library like basically compiling to this right and first all that would mean way less code um not way less but considerably less code in our output if these things are built in
[03:41:42]  but i i actually sat with it a bit longer and i came back to it and and this this is what i did is the the the thing that's not shown in this
[03:41:51]  picture is even though you're inserting signals and derived values these are creating effects these are there's implied scheduling in the dom here there's like like this is this is where
[03:42:05]  like i think the standards people and some people might like hit hit walls because like in in frameworks like solid we don't always run the effects we kind of like hold the effects
[03:42:16]  sometimes because of you know uh suspense or you know what if you want to do off screen and stuff and to be fair the dom could detect off screen but having competing scheduling methods
[03:42:27]  that aren't controlled with by the like aren't the framework can't control or be aware of is actually kind of could be problematic um do you subclass render effects um
[03:42:37]  you know we we we we do we have like these different mechanisms um to be fair i did get some responses from people who were you know where is it uh where are we
[03:42:50]  here i guess my hope would be that the dom inflation could determine the appropriate timing batching sync methods since it has the most awareness the tree render state it knows about occlusion
[03:42:59]  transitions about page life cycle an example the browser could defer tree updates within context visible auto containers without requiring bookkeeping or exposing render state to js it could also force you out
[03:43:08]  so it it's interesting i mean this is a different path but if we had i guess new css properties where we could basically control the section of the dom i guess
[03:43:27]  it would be possible where you can go like this range of the dom doesn't want to run its effects yet but i'm i think this is the the challenge with this i
[03:43:36]  i don't know if i've illustrated this enough i'm getting kind of into the weeds a little bit in the technical details but like if you could this very easily starts simple
[03:43:45]  and then gets really complex as soon as you start trying to do stuff with effects and like scheduling and actually integrating it with any existing api but i feel like for a
[03:43:56]  certain audience this won't have value unless it does something like this so that that that is definitely the the debate here so to speak all right i don't know chat was
[03:44:12]  talking a bunch there but then uh i i think we i lost them yeah i think um you're probably answering most of their questions and they're probably like cool yep there
[03:44:24] 's one other thing i saw some news um i'm not sure how good to dino you are but um fresh 1.4 pull that up this is two days old okay
[03:44:34]  yeah i'd love to see that i i i all right uh is this the one actually i'm going to do on this one yeah so sorry is it from dino
[03:44:45]  its main account just google fresh or this will get you to it yeah probably so fresh 1.4 right there yeah oh yeah yeah faster page loads layouts and more faster pages ahead
[03:44:54]  of time compilation custom hml layouts async wrapper quicker typing better organizing road groups and co-located islands okay okay cool cool cool yeah i i kept on breaking fresh on
[03:45:03]  stream when it was like still very new but now they have marvin heggmeister working on it you know what like the the the other preact guy we were
[03:45:14]  just talking about jason miller yeah yeah yeah yeah yeah i feel like also you have like a vested interest in dino just because of their integration with nullify you know
[03:45:22]  that is true and uh dino does have like this uh the if there was a force out there that could be like the equalized like it's it's kind of like
[03:45:33]  a sad state of things like when you have something like node at the top i mean dino succeeded in a certain way in this but like picture you had node at the time
[03:45:41]  right and you succeed by making something better but no one used it like that's right story of dino right exactly and they got pressured into adding node compat and like kind
[03:45:52]  of backpedaling on almost a bunch of those i've been following deals since 2020 so it's like i know this whole story i i think dino's great i wish
[03:46:00]  people made more the problem is just no one to make the argument for why people should use it they're always just like well it can't do the stuff no it can do
[03:46:06]  no one's gonna want to migrate other stuff so just don't use it i'm like but like that's not you could make that argument for anything yeah yeah yeah yeah
[03:46:17]  exactly um fresh one four you can set head directly on the server okay layouts okay i guess did they not have nested routing before or they just changed the style of nesting
[03:46:33]  routing i would guess they probably built what next built in dino and then as next has changed they've needed to change stuff to make it more like next if i had
[03:46:43]  to guess i have no idea if that's correct or not but i feel like oh so the async layouts and async wrapper functions okay so what the okay i see what
[03:46:53]  they're doing okay yeah yeah so they've added something similar to server components here in that like they already had server components because technically the server like it's like astro the
[03:47:01]  server side was already server components and these islands they allow async components on pages and layouts here so but they can fetch that this makes sense see one thing i like about
[03:47:14]  dino's because they have the separate folders there's no like concern here about like ambiguity um and so you like you can't put your islands in the like islands are over
[03:47:25]  here um yeah because the the whole thing with the async is it's async on the server is actually not a bad pattern i mean i you still want to fetch
[03:47:37]  above because otherwise you get waterfalls but like it's actually better than like re-rendering like the suspense model of like you know react style like you get there you throw
[03:47:46]  a promise re-render that if you can actually await an async function and handle at a component level you could actually like pause resume but you can't do that in a
[03:47:55]  client app because state can change and the component could render again and then like you get the weird like so like on the browser you actually don't really want async await
[03:48:05]  or you have to get a compiler and turn into a different thing like it's it's a lot trickier um but yeah this makes a lot of sense because it's a
[03:48:12]  lot easier now um yeah i'm not surprised this change because like it's the same thing like how astro is top level awaits so like they're getting in line with these
[03:48:21]  simpler server solutions that just have like oh you can just wait in the component because is this is this is a trend that i'm having a hard time with because it promotes
[03:48:32]  waterfalls the only thing that i think dino has really nicely going for it on this side or so fresh is that like people aren't like i don't think they're
[03:48:41]  intending to have like server components like libraries do you know what i mean and i think that that's that intention is what is the most waterfall inducing because now you
[03:48:50]  install package off npm put it way down in somewhere and it's happened to be fetching data below some conditional like presto waterfall and you didn't even realize where you
[03:49:00]  weren't thinking about it and it was just an npm package so i don't think they're going to say that if they could just solve it in the framework and it
[03:49:07]  stays in the framework then it could be useful yeah or in the app like don't put this in the npm packages but okay so now okay and this is the co-
[03:49:16] location okay i got it now people do kind of want to like when when you start dealing with larger apps keeping separate folders is kind of a pain in the ass so
[03:49:23]  now the component and islands folders can actually be um nested looks like they're adding support for view transitions yep next version and we're exploring how to add spa like client
[03:49:42]  navigation to fresh yeah so i mean this this is this is the i this is why i'm excited to have after on next week and why i was talking about it last week
[03:49:51]  is the baseline expectation of people going in here is going to be islands plus view transition sort of kind of thing i think nested routing makes it more interesting and i think
[03:50:04]  like i i mean i showed it i showed the our like html based server component type solution about a year ago and i i i kind of was calling the shot that
[03:50:15]  like within 12 months there'll be a bunch of these and that's what's going to go up against rscs and as i said when when it's pre-
[03:50:23] act or solid and you're like oh yeah my app's like eight kilobytes and then you're like oh but my net you know to be in reality it's not
[03:50:31]  that small it's more like my app's 30 kilobytes and my next app is 200 kilobytes um and at a certain point you're just gonna like you know
[03:50:41]  what i mean like maybe not but like it's i mean my my blog's built in astro i'm a big fan of the that approach and the islands stacks i
[03:50:50]  generate or bring in server stuff when you need it like have components when you need it when you don't bring in you know jsx when you need when you don't like
[03:50:58]  i think it's great yeah so it's it's it's awesome to see them continuing to work on fresh and have like full-time uh resource on it because it
[03:51:09]  this is really how you can get it makes it a lot easier pitch to get someone to use dino if you get them to use fresh for sure yeah and and like i
[03:51:18]  focus on the the features i cared about part of the stuff here and their big headline is actually the dino side which is they they do all this stuff um see they were
[03:51:28]  doing stuff not ahead of time so like it would they get hit the first time and now they're saying they can do ahead of time remember that was a whole thing no
[03:51:39]  compilation it just works because we lazily evaluate everything but compilation was still happening people do when dino was pitched people were like oh yeah it's the framework with no build step
[03:51:48]  or like it's no build well it has to is that was impossible though because it was built with typescript so you can't build a type script and not have a build
[03:51:54]  step that's literally that's like fundamentally impossible that's like cold fusion moment exactly right so now like i i was it was this was gonna happen yeah 45 to 60 times
[03:52:07]  faster for cold start yeah that's what actually matters um you know for for these like edge functions so i it's good there startups all about instant like how fast the first
[03:52:21]  hit go yeah yeah the small box what they're saying yeah so it's funny yeah because solid start docs are about 30 kb and it's all angolia like the ang
[03:52:32] olia yeah the search like page find this is the hot this is the hot new way to search without that apparently okay okay okay okay yeah uh okay so cool um let's
[03:52:49]  see how's chat doing here um did they can get requests from layouts next doesn't get requests from layouts oh man why would you need a request in a layout well okay i
[03:53:17] 'm gonna i mean i actually i hate this layout trend that's going on right now like i because it actually a nav bar like why would you need a request in your nav
[03:53:35]  bar like this is an this is an example of when you take two concepts and you put them together so that people can um like it makes it easier because now you have
[03:53:48]  less concepts because now you have like for example a component it takes care of everything life cycle re-renders whatever like that's the react thing right when it's like a
[03:53:56]  component is actually a lot of things and like or at least a couple of things it's a change management system it's a unit of code that you want to break up
[03:54:05]  like your ui it's it renders like it's a few things and the problem the challenge i have with layout is that like it's arbitrary that it's like it
[03:54:17] 's like that we call it layout like click the link i just sent you in private chat so this is how i've been thinking about layouts because this is how we define
[03:54:27]  in redwood a layout is something that wraps a page so when you find it like that like it's not just like and i don't know if this is necessarily entirely correct
[03:54:36]  like there may be people who use layouts in a way where they don't always do it this way but this is at least like you're always creating pages in redwood and
[03:54:44]  then your layout is always going to wrap an individual page so you'd never have a layout that would be like i'm just gonna have a layout for like this little spin
[03:54:52]  this like this uh carousel in my page there'd be a layout right in the middle of there like it's something that's gonna wrap the entire page right okay so
[03:55:01]  mechanically and this is where i'm coming from from like this the designer view is like i have layouts and page and there's elements you know kind of like a not i
[03:55:11] 'm not gonna say exactly atomic design but like there's this idea that you have parts of the page that are defined parts and then you could like it's part of the
[03:55:18]  designer right and the the the thing that i'm getting at is like from a mechanical view for the framework and this is something i'm very familiar with because i never had a
[03:55:27]  vdom um and ember didn't have a vdom back in the day and why ember invented nested routing you know is because the whole point of the layout has
[03:55:38]  had nothing to do with layout it had it had to do with not re-rendering part of the page so i'm on twitter um and i go should bring in
[03:55:48]  some of these comments here saying that request would be useful for things like current page indicators currently you have to hack around with client components yeah yeah well it's it's part of
[03:56:00]  the page is what i'm getting at like i mean this this is gonna roll scroll up on me because it does when i switch between posts and reply but my point is
[03:56:09]  like it's the it's the next it's the remix home page example section the page that the like whole page then section and then section right you you the page is an
[03:56:23]  onion and the whole point was not to re-render the outer parts see react didn't care so like we like in a lot of cases they were just like oh whatever like
[03:56:34]  we'll just re-render the page we'll just use we'll make our layout component and we'll put it under the route so when i switch page i'm just
[03:56:41]  gonna go to the next page and guess what i'm just gonna render the layout again even though it's a you know who cares right vdom diff oh it matched on the
[03:56:48]  same element even better now i don't have to re-render it like that was the mentality but when nested routing came out in other frameworks that don't have a v
[03:56:56] dom it was so that when i switched from post to reply none of this re-renders right but it means that like is this a layout is this a layout no
[03:57:04]  they're just parts of the page that equally have their own data requirements equally have their own reason for managing the request want the router they're just parts of it the fact that
[03:57:15]  it's called a layout is arbitrary because i could take something here and this is a page let's say and now i want the modal state when i click into something like let
[03:57:25] 's pretend this app when i clicked on something popped up a modal that gave me like a picture view like it might even do that somewhere like click this perfect pretend well look
[03:57:36]  this is actually part of the url right so i did this is routing here okay even though like conceptually maybe my old page is behind it now is this also a layout
[03:57:50]  like it's this distinction from a mechanical standpoint is like it's just a route section that doesn't have children like a layout is one that has children like this this is
[03:58:05]  kind of like the the mentality that i've had from day one and so it's like been very difficult to watch this layout thing happen because the biggest argument i see for layout
[03:58:16]  is the designer argument and i see that like a lot of file system routing used to nest the same way the mentality i talked about was where if you had a folder and a
[03:58:24]  file the same name that was a way of saying like hey this is the the the the like the folder would be the things that would go inside and the file would be
[03:58:33]  the page so you go here's the page and then if you have a folder now you're saying that you want to like drill in like like children's style and i understand
[03:58:41]  why that could be kind of clunky but the thing is like that's why layouts came out because then they could hoist the file inside and be like okay look now you
[03:58:48]  don't need to have a folder and file be the same name like a weird convention that's not very obvious i agree and now you can just call it layout but the
[03:58:54]  treating the layout as something different is very very very odd to me because you're saying redwood you took a very design oriented thing where you're like look the layout is the
[03:59:03]  the like whatever the shell of the page or whatever and yeah pages have these things but mechanically when this is why those frameworks have layouts in layouts in layouts in like layouts in
[03:59:13]  those other sections and the layouts and those is because really it's this whole layout thing is a fictional creation like it's it's it's like are you saying that layouts
[03:59:25]  are social construct like it's it's something that like made the file system router like flatter i guess or like less comp it doesn't even make it flatter actually it just makes
[03:59:36]  it like a little easier for better for file organization and like yeah i i you can kind of from a design standpoint like make an argument again like make it a thing but
[03:59:48]  it's not actually mechanically it's kind of not a thing i don't know that's why like the root layout in next is not like other layouts because like it's
[03:59:59]  actually i don't know for me man the layout is where you put the the logo the nav bar and the footer that is what a layout is to me right but then
[04:00:08]  it's like oh is this tab bar the layout for the section this is a component this is a timeline a timeline of the component within a page which has a layout right
[04:00:19]  but but the the argument for this is you don't when i switch these tabs i don't want to re-render this top section right so it can't be a component
[04:00:28]  because the component will re-render well if it's a component that doesn't re-render but like but i'm saying like like the the route changes yeah but
[04:00:38]  i'm saying that if the route changes like at if the point of the page entry point is up here and you navigate then you re-render the whole thing like that's
[04:00:47]  why it came for me from a mechanical standpoint i see gotcha right so yes layouts are kind of a navigation boundary or a wrapper around navigation boundaries from any perspective so like
[04:00:58]  like because like i did a refactor of of the movies app demo recently because nikil decided to put layouts in solid start and i had to make sure that i removed them
[04:01:12]  before i merged it um and and and and but but everything i could express for layouts i could express without layouts or vice versa it's just a different it was just a
[04:01:25]  like a different syntax for the same representation and the only difference was in a layout was if i put the the file like i'm trying to think if i have an example here
[04:01:36]  uh solid do i have do i have solid start open somewhere yeah i do like the difference between a the layout and uh um let's see if i have an example with
[04:01:48]  nested routing um to do not on this branch probably which is very unfortunate but like if you do nested routing in in routes the way you do it is by um putting
[04:02:05]  a file outside that has the same name as the thing inside so like if there was a uh none of these have an index page so it's like a terrible example here
[04:02:15]  that's one i wish i actually had a good example of nested routing in the base examples um but my point is the difference between the layout and the like old next js
[04:02:31]  or actually old next never had nested routing so it's i guess it's the next version of this stuff and remix like remix is you move the file that was outside
[04:02:41]  the folder into the folder that's the difference like it's the same mechanism of nesting i i actually think you know we actually have it here do do we have it still
[04:02:53]  open yes see this you like see how i guess this set wrap injects layouts right and this is this is the way that uh that you do it because you're actually
[04:03:08]  doing right but if you look um if what the way like solids router works and um remix react router works in these states and ember way back in the days this would just
[04:03:22]  be another route because we didn't need to call like do you know i mean like you you didn't need to call wrap you just be like route and then you take
[04:03:29]  the shared part of the path which is like admin categories and put that there so route admin categories page or component whatever the component is and then down here would be slash new the
[04:03:40]  specific components like i mean it's a different way of doing it but my my whole point here is you could just this nesting is something you see very obvious when you
[04:03:53] 're using the the um either the jsx space of the route or the json base of the route but it's not i like like layouts here sure you made a special
[04:04:05]  component to do it but you could pretend like you can already see the nesting like this could also just be a route with a shared path like it's it's just
[04:04:14]  the way the router actually operates so so to speak um so like the whole layout convention has generally been just mostly just so that you can move the file inside the folder but actually
[04:04:31]  in reality they are a navigation boundary because um if you i mean if if you're going between a page that starts with admin categories and a page that doesn't start with
[04:04:45]  admin categories like you could conceptually one model i guess would be that this whole thing gets unmounted when you switch like the the layout gets unmounted and this so
[04:04:56]  that layout has as much right potentially to the data especially if it's shared because do you want to re-render this layout when you switch between these two pages probably not like
[04:05:08]  you you it could fetch the data that you use in all these pages let's say um like if this was users or a user and then you have the settings like on
[04:05:18]  twitter you don't you might not need to fetch all the data again because you already have the the piece above it right um anyway layouts are like hawks but like if
[04:05:36]  i don't think how should i put it if you get a sufficiently nested page i don't think you can do it without layouts like it's the layouts that do the
[04:05:47]  nesting right maybe i'm wrong what do i think about remix flatstone i got really into this for a short period of time i think it's really cool um because
[04:06:02]  like you get rid of all the folders but then i got really tempted to mix folders and files and brought back all the same problems again it it it's it's a lot
[04:06:13]  for people to look at their app and then see like one pile pile of like these really long character things you know i keep on thinking back to when windows only had 25
[04:06:25] 5 characters in the path but on the other hand i think the routes are sort of in the right order so like i kind of go back and forth i i actually think
[04:06:37]  it's it is kind of really nice it's like i kind of okay like i understand the shortcomings of what we're doing right now um or like solid starters or remix
[04:06:47]  v1 and i'm okay with them enough that i'd say remix's flat systems like my second favorite system but yeah i mean file system routing all has trade-offs and
[04:06:58]  opinions right my least favorite system is any system that has layout in the file system like dot layout is our layout.tsx is my least favorite so yeah i i i
[04:07:10]  think the remix one's pretty cool all right that was a fun tangent uh uh what can i get out of here i've got so many open oh this one's not full
[04:07:26]  screen haha that's why um i can't even remember how we got there do you remember how we got there anthony i don't know uh we were talking about fresh
[04:07:36]  1.4 yes yes yes yes um yeah yeah we were talking about fresh 1.4 and the fun with layouts yeah i yeah i went on the tangent yeah so in any
[04:07:47]  way case i think layouts if i think the benefit layouts and it might help people i think a lot of people even when they come to solid router they're like how do i
[04:07:57]  do layouts i think it's a concept that's easy to understand so that's a win so when you say layout people kind of get a concept of what you're um
[04:08:04]  you're talking about which i think makes it easier to communicate and go like how you can do stuff the part that irks me about it is layouts are as i said are
[04:08:12]  fictional so like it's it's it's actually just a nested routing mechanism um and like it's convenient that these ideas kind of overlap and you know you can like
[04:08:27]  talk about it and have the right communication it's just also like a lie anyway so it's like cake i don't know if i have much more today actually this is this
[04:08:46]  was the the the challenging thing about this week i'm hoping next week we pick up with more stuff but it's been it's been kind of slow other than like like
[04:08:54]  like the number of meetings i've had about the signals proposal already um you can sign up for the announcement to bun 1.0 you do that dot sh forward slash 1.
[04:09:05] 0 that that's actually very cool it's coming up um and uh yeah maybe i can see if the oven is like is one of them may i just look at jared
[04:09:19]  yeah jared yeah uh oh yeah it's still moron does he have two r's two r's yeah anyway um there it is september 7th yeah coming very
[04:09:32]  soon yeah he we were working on a solid start integration to work on bun and it just missed 0.8 or whatever but uh it should be in the next version so i
[04:09:45]  got the pr to update this cli to show bun is one of the options so that that will be fun fast stuff with fast stuff um but yeah i i'm interested
[04:09:56]  to see what a 1.0 of bun is because by pers this is this is a lot some people tried bun right away understood a little bit like this isn't necessarily the
[04:10:07]  most stable thing in the world yeah no i tried but i thought it was super fun but i certainly would not put in production like yeah and yeah this is one of those
[04:10:17]  things where it's like i hope they're ready i i like back then playing with you you're like yeah we're not even close but it's been about a year and
[04:10:26]  um yeah 1.0 is big news i feel like people will go okay if you're saying it's 1.0 i'm going to trust you and i'm going to
[04:10:36]  do this for real and that's that will be the the the real test here so i hope he's ready oh yeah that was the same thing with redwood we put
[04:10:44]  off 1.0 for like well from when we first announced it to when it actually happened there was like about a year delay because we wanted to make sure that it was actually
[04:10:53]  going to be production ready i think the main thing is like it's never going to be ready for every single person's weird individual specific bespoke use case you just make sure
[04:11:02]  that your thing itself does not break that's the most important thing yeah yeah no and the yeah there's especially with what he's trying to do here there's going to
[04:11:15]  be tons of those like side issues he's gonna get swamped if he isn't already but i think the key thing is like the the he's got to prove that the
[04:11:23]  runtime can handle like i think he's already been very good with that on the react ecosystem but like you've got to be able to like someone's got to be able
[04:11:31]  to go in and be able to build an app and deploy it you know to like basically run it to production or whatever um to show that at least from my side i know
[04:11:40]  there's other uses for bun to you know just like all the other uses of node but i think like his story did start as a bundler i think he has to show
[04:11:48]  that that path is incredibly stable and compelling um that's probably what oven is for i was the deployment part so yeah so yeah no um hopefully that that all goes well i
[04:12:02] 'm i'm i'm excited uh he's got so many good ideas and um like little things that he's added he's like pushing the platform forward in kind of the same
[04:12:15]  way that the chrome team pushes the platform forward but that works for chrome because they're most popular whereas he's not so but i'm always he's the guy who's
[04:12:23]  like not afraid to break stuff to get like more performance and be like why are we doing stuff stupid ways um so it i feel like sometimes i will catch up with you and
[04:12:34]  but i it one thing for sure is it makes it exciting yeah totally and i think as long as you continue to lean into web standard apis you can more easily be
[04:12:45]  like all right i'm gonna break this i can break i can break node but i'm not gonna break the you know standards which we'll see how that kind of works actually
[04:12:54]  also apparently has no compatibility but it's like i don't really know how stuff like that works or it's like you can use the compatibility or you cannot so it's like
[04:13:01]  that mean having to build the compatibility slowed down the original one or is it just like a separate thing you know i feel like sometimes a separate thing it's like no streaming button
[04:13:08]  is pretty slow unfortunately we address this in the future but generally button's not saying yes so like he's basically encourages you not to use the node apis because he's
[04:13:17]  like we have compatibility but they all suck and i've heard it's like in other places i've heard him just complain per furiously about how slow stuff is and because he
[04:13:27] 's he's the same battle that dino tried to fight and lost and so he's i like this approach where it's like i'll support it but it's not gonna
[04:13:36]  be good it's just gonna work you know yeah i think this is where actually some of the pressure happened with dino because this is always the tricky part when you have the
[04:13:45]  the thing that's like wants to be different and actually change the game and before that happens no one assumes that you can do anything that it always takes that thing that wants to
[04:13:55]  be different enough to actually show that things could be different but then what ends up happening is after like fun comes out and instead it's like oh okay well we actually have
[04:14:05]  compat and then like we'll focus on like like in his case performance like something very niche and then suddenly dino's like i don't have compat and now like after we
[04:14:15]  consider performance you saw they they basically went really hard against bun on the performance thing like they they were for the few releases going back and forth on like who could do the fastest
[04:14:25]  stuff which is weird because in dino's position you wouldn't have expected them to get pulled into that because you know like well one of their pitches being better than no
[04:14:35]  was also to be faster that was like rotor rust so it's faster but like i guess what i've always wondered was like do you want to be the do you want to
[04:14:42]  be like the company that's like i'm i'm gonna chase performance down with like down what's what's that term when you like everybody like goes down together because they're
[04:14:51]  like they just keep on going like right yeah yeah and that's where you know i'm sure at a certain point they realize you know it's fast enough and yeah for
[04:14:58]  them they just want to make sure it's fast enough that they're not being embarrassed by a smaller competitor yeah but because it's one of those things where it's like j
[04:15:04] ared is not the person that i want to go on like one of those like games of chicken with right because like technical chicken i've used the term before technical chicken yeah this
[04:15:12]  is awesome i would have to introduce swc into their into their code bases give me a game of technical chicken so it wasn't going to work for anybody but then once everyone
[04:15:20]  had a broken swc integration they would have to all figure it out right yeah so yeah i i don't think the person you're going to play that game with because
[04:15:29]  he'll just keep on going so from that perspective um that's why bun's always been interesting 1.0 is a new stage in their evolution so this is going to be
[04:15:38]  it's going to be exciting um live streamed launch event september 7th so very cool to see and uh yeah sign up okay i think we're good honestly i'm
[04:15:52]  not going to try and stretch this out anymore i don't think we have any other news is there anything else you wanted to shut out before we head off uh anthony
[04:15:59]  oh let's just look at edgio real quick this is my actual actual company do you want to pull up our just home page and share that real quick sure of course um
[04:16:08]  let's go here so how is it just edge edg dot io dot io yeah so edgio the io is in the name yeah there you go yeah so we are
[04:16:20]  a deployment company you can kind of think of us like a little bit like netlify versell a little bit of like cloudflare aws we have our own network
[04:16:29]  um edge ready we got edge functions we got all that stuff um typical like logging we're very performance based so we have our own points of presence and that's like we
[04:16:41]  used to say we're like enterprise jam stack and but we also have servers so it's like another way each time you should put is that it's like um if the jam
[04:16:50]  stack was ssr first instead of static first you kind of arrive at something kind of like edgio so you can like sync your git repo and just get yourself spot
[04:16:59]  up really quickly but there is an actual like server edge server kind of running for you so yeah it's pretty cool stuff and we have like a whole security suite and all of
[04:17:09]  that and then if you want to go to javascriptjam.com this is like our kind of community function that i run right now and i run with scott sc
[04:17:18] ott steinlagge and this is both a weekly newsletter a weekly twitter space and video podcasts that we do and so if you look at like the archive newsletters
[04:17:33]  just click or yeah yeah newsletters and scroll down let's look at um there's probably one where i talked about solid or marco at some point there's so search
[04:17:44]  for marco i know there's at least one marco one in here yeah marco run release yeah yes like we talk about you know things that you know ryan
[04:17:56]  would talk about so if you're interested in the same stuff that ryan's interested in talking on this week in javascript that's type of stuff you'll hear about
[04:18:03]  on javascript jam and then our twitter is just the twitter.com forward slash javascript jam i think very very cool yeah i've i've dropped in a couple
[04:18:13]  of those spaces um yeah javascript yeah that's us yeah all right and if you want to come we do spaces every wednesday at 12 p.m pacific
[04:18:30]  and you can come up join the conversation you'll have to kind of participate in these types of conversations and if you're a total beginner totally welcome and yeah it's really fun
[04:18:41]  fun time awesome awesome all right well i think with that we're just gonna call it a stream um so thanks for joining me this week finally made it i want to get
[04:18:53]  in this stream for a very long time yeah no it's funny we've talked about this like yeah it's it's been at least eight or nine months since i was like
[04:19:00]  actively like oh maybe maybe in a few weeks it's like oh no i'm not like this is the perfect timing that we actually have like good stuff to look at so
[04:19:08]  i'm glad we waited yeah no it's good and maybe maybe some people try uh take a look at redwood uh another opinionated stack where all the pieces are there for
[04:19:17]  you another t3 has been getting popular recently so it's another alternative to that that sort of thing um so very very cool uh stuff to see all right so yep signing off
[04:19:29]  see y'all until next next week uh astro 3 um sneak peek