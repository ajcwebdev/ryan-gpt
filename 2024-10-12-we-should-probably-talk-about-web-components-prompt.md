---
showLink: "https://www.youtube.com/watch?v=0F9t_WeJ5p4"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "We Should Probably Talk about Web Components"
description: ""
publishDate: "2024-10-12"
coverImage: "https://i.ytimg.com/vi/0F9t_WeJ5p4/maxresdefault.jpg"
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
[00:00.00] That's good lemonade.
[00:30.00] Hey everyone how are you doing today um yeah yeah I probably should update that at some point uh I just realized as I was sitting here drinking my lemonade that it was kind of like that it's fine meme um uh so um it's not quite lemonade it's actually the suja organic uh
[01:00.00] stuff ginger love purified water lemon ginger and pineapple so in any case uh
[01:08.08] let's let's let's change the background back uh I'm sure I want to I want to talk seriously about
[01:14.80] web components today and uh I did make this so that I could do the stream cover but I am
[01:22.56] not here to simply piss people off so let's get this started
[01:27.68] all right
[01:30.80] where's the reddish coconut water well they didn't have it at Costco this week and I gotta
[01:38.16] I gotta save what we have left right now for the uh smoothies
[01:46.24] uh no it's great to see everyone coming here joining in um honestly I'm straight up I mean I knew that
[01:56.00] this article would get under some people's nerves it would spark some discussion but I wasn't expecting the
[02:02.72] like the type of discussion that ended up happening into like the extent of it um because I feel like I
[02:10.48] wrote the same article like four years ago I was a little bit stronger in the language but I was kind
[02:14.88] of trying to get at the the same sort of things and so you know it's it's one of those examples where like
[02:23.76] I'm working on some some stuff actually a lot of stuff related to uh solid 1.9 release and um
[02:35.12] uh new fellowship uh um I don't know say his name is it Tito um uh working a lot on dom expressions and
[02:43.60] a lot of that work was involved actually improving um our web component support um most of the features
[02:50.64] that drove the 1.9 release were in some way related to our handling web components like whether it was
[02:55.44] like you know a boolean um attribute indicator or like you know some some of the small little changes
[03:02.88] some event delegation updates and stuff like that and it's it's it's one of those funny things because
[03:09.12] um as soon as you do some work you go oh now there's a whole bunch of new issues you discover
[03:14.48] right it's just like peeling back the layers and uh um got in this kind of discussion with some of the
[03:19.92] more um pro web component uh folks in the solid discord um people in the ecosystem team and and you know
[03:29.04] involved i'd say like in the you know core you know 30 to 40 set of maintainers that are you know
[03:34.32] building a lot of the libraries a lot of the important pieces of uh of solid's ecosystem you
[03:40.56] know there's there's a certain uh contingent let's say of web component um forward people there and they
[03:47.20] were talking about some stuff and about like it was pushing a little bit hard in one direction i was like
[03:53.68] and i i kind of like which is like no no just stop you know that like it's not that cut and dry
[04:01.68] and that's debate honestly is what sparked me writing the article um it was primarily around
[04:11.04] this kind of like utopian future they were painting i i mean i pulled all the rest of the stuff in as i was
[04:17.68] writing but it like i think what i struggle with most with web components before we even get like
[04:22.72] deep into the discussion is that the fundamental promise of web components doesn't seem like one
[04:28.96] that like i don't even know if it's a real promise this is where it's like dangerously dangerous to say
[04:33.92] things because people like we're not claiming to be able to do that but then like the same paragraph
[04:39.12] like two sentences later they will so watch for it throughout the stream as we talk about this
[04:43.60] topic you'll see what i'm talking about there's this sort of weird holier than thou but then like
[04:51.28] backtrack on it like and it happens over and over and over again and i was just like
[04:55.04] let's talk about the reality of what it is for you know future proofing or maintaining software projects
[05:04.56] what does this actually look like and do web components actually have any impact on that at all
[05:10.72] and so i wrote wrote an article you know kind of tying in what i'd experienced working on
[05:16.56] solid 1.9 and like this discussion and i i literally woke wrote it in a morning i was like
[05:23.60] it's like i gotta i gotta you know drop my daughter off at school came home started thinking about it a
[05:28.96] bit like reading the bit of the discussion from the previous day um catching up on it because it kept on
[05:32.88] going overnight after i'd gone to bed and um i was like okay i'm just gonna write this down like i've already
[05:40.16] wasted enough stuff in this chat and then i kind of finished the article posted a draft around 11
[05:45.20] in the morning in the discord um in the ecosystem channel and like look guys what do you think right
[05:50.16] and then i published it it was a very just off the top of my head um kind of thing because like if i
[05:56.80] want to sit there and pick apart web components we could write like 10 articles way longer that's not
[06:01.36] really what i was trying to do there from like a technical aspect there's there's devil in the details
[06:06.40] we'll talk about some of it today but what i want to do is like step back high level to kind of look at
[06:15.36] you know what the overall impact is and how it influences what the web looks like um i often
[06:23.20] talk about you know when i'm doing like reactivity i'm often talking about like doing this demo doing
[06:28.88] this thing completely changed into the shape of how i think about reactivity like mutable reactivity it's
[06:36.80] not a thing that we talk about much right it's not a place that people have explored at all but after
[06:42.96] doing that trello demo i started thinking about that more and realized that there is a whole different
[06:47.20] avenue and then my whole rest of my world shifted around that once i understood that well the thing that
[06:52.88] thing that i took to be fundamental was not as fundamental as i thought it was and i feel like
[06:57.68] the web component conversation um has a lot of elements of that um which is hard to put in the
[07:04.24] form of a tweet it's hard to even write it effectively in a single article but i'm hoping that through
[07:11.36] discourse we can find ways to communicate these things in such a way that um it makes sense to people
[07:18.24] i think i think i think okay how are you doing chat sorry that was like my long-winded intro um
[07:23.52] hello hello a lot of hellos
[07:26.00] when do you say the green screen yeah
[07:31.28] awesome great to see you howdy david
[07:37.60] everyone knows 1.9 yeah thank you yeah there's still a ways to go i'm waiting for mr
[07:46.48] do you disagree i hope he does i mean i i saw the theo stream we'll talk about a couple things from
[07:52.16] that today don't get me wrong the biggest thing that we need here is education um i feel like
[08:00.24] on both sides of the argument a lot of untrue facts are made which really muddies it which makes it really
[08:09.28] difficult i i'm hoping that people you know on maybe more on the web component side of things actually
[08:19.76] understand that um while say framework authors aren't always like the most up-to-date always on you know
[08:30.64] where it you know web component specific spec is like to be fair um no more than we are of
[08:37.20] other frameworks you know like how aware of you know how solid works is uh i don't know uh
[08:46.32] just andrew clark i i don't know he's vaguely aware but like you don't know know that but you can
[08:55.92] kind of look you have a certain positional understanding um but it's not because
[09:02.00] very clear i think it'll be clear through the course of stream it's not because there's like
[09:06.64] lack of understanding of the platform some really funny replies where people people told me the google
[09:11.92] mutation observer and like google this and i'm like this this kind of attitude isn't really working right
[09:20.32] it's you know what why do i know about mutation observers and that they queue on a microtask well
[09:27.92] because i had to build a polyfill for promises back for ie11 back in you know 2012 or 13. i mean
[09:35.60] this microtask queue library it's still on npm you can go check it out um we know what we're talking about
[09:43.44] so i this isn't like i think i think it's really easy to divert the conversation and that's what we're
[09:51.20] going to be careful about today i think i'm actually going to keep like a hack md or maybe like an
[09:54.56] escala draw where we can click collect notes make sure we don't like overly circle back on topics because
[09:59.52] these these topics tend to get really circular they tend to go around and around and you'd be like
[10:04.16] it part of it is definitions and people talking past each other but the problem with only uh putting it
[10:11.76] there is the same problem you have with like oh right tool for the right job sure but you can also
[10:19.60] kind of do anything with anything so like sometimes the effective end result is actually what matters
[10:25.60] so just like sectioning it off that way isn't really interesting or true so just there will be
[10:34.16] comparisons between frameworks and what what a difference of the definition of a framework versus a library or
[10:40.00] a framework versus a framework or a component versus component this is all part of the conversation
[10:43.36] just saying it's different like a to b is insufficient in having this conversation because there is overlap
[10:50.32] you can't just say oh you're comparing two on comparable things that's that's not true
[10:54.00] they are very comparable you have to consider it holistically um you know both from um
[11:03.12] you know inputs and outputs sorry anyway
[11:05.84] awesome good to see nate
[11:10.16] yeah when theo was covering adding the context that people were trying to convince you of the utopia and
[11:18.88] disc in the discord yeah yeah exactly um
[11:30.24] the truth i there's gaps on the story so i don't actually know this i know that there was a strong
[11:36.64] contingent at google who really wanted to push it and they found not just google they found agreement
[11:42.64] in other major companies apple um i mean to be fair the first version might have been pushed by google and
[11:49.84] and then like almost had the backtrack you gotta think a bit about like because there's a v0 versus v1 apple
[11:56.48] for example didn't wanted things to be a little more locked up so to speak but this is
[12:01.84] web components as they are today regardless of the history of them
[12:05.36] are the union of several major companies to come up with a standard that appeals that works for them all so like this is a monumental effort
[12:16.24] word and it involves a lot of important players that are somehow finding consensus between each other
[12:23.28] right um each with their own use cases their own incentives their own like motivations so we do have
[12:30.32] to even if early days there's some kind of salacious story here i'm gonna try and focus on what web components
[12:38.24] are today because i feel like if we put all the history in it i mean we will talk a bit about history
[12:43.76] um we're not going to get a completely accurate take
[12:47.04] is this going to be a spicy stream probably
[13:05.84] yeah i mean there's probably probably a bit of this um it's hard because it's a very
[13:11.28] diversive topic and you kind of have to um think for a bit why it would be so
[13:18.00] diversive because you're like who should care and i think i'm hoping we actually
[13:22.16] get to the bottom of that because it's kind of like
[13:27.84] it's it's odd isn't it like why should it be such a a diversive topic um you know the platform we always
[13:38.32] we always you know we all use you know we all use you know but there's a lot of details here
[13:45.60] yeah we'll talk a bit about the nicole sullivan quote too when it comes in relevant i
[14:00.88] i think it there's truth to it but it also kind of miscues something um which is that
[14:07.28] web components are actually in use by a lot of large companies not just hobby js developers but they
[14:14.40] use them for reasons that i think are actually legitimate but but aren't are sometimes different
[14:21.76] than the use cases that that other like people think of like web components like it's the same
[14:28.72] reason you have micro friend ends that's why i keep on going back to micro front ends there is a big
[14:32.96] isolation organizational problem you have when you have large companies and large teams and large
[14:38.56] everything and web components actually fit in there quite well if you've already given up that you're
[14:46.88] that you can make the best possible thing so like
[14:50.40] when you're looking at it from like i'm just a joe smith developer trying to pick up a thing i think
[14:57.52] nicole's completely right but when you're actually bigger picture and this is something like web components
[15:07.20] are here what when i this is probably why some people think the you know the title of my article is a
[15:12.08] little bit inflammatory was because um you know i said they're not the future well and and the thing
[15:18.08] is like no web components are here today like when i say they're not the future i don't mean in like like
[15:25.20] they're like what people used to be like oh you know next year is the year of linux you know i've cracked
[15:29.84] that joke about web components myself you know um no they're very much here which is actually why
[15:37.36] you know maybe some of us were hoping that they they wouldn't get here you know you can't ignore
[15:43.36] the problem and it kind of goes away but it they are very much here i think not acknowledging that
[15:50.40] isn't fair or not very productive either
[16:02.64] divisive yeah okay thank you
[16:04.24] it's like the word diverse and diverse opinions device
[16:09.68] i thought no one considered building something with web components no see that's the thing people
[16:21.60] are actually considering it it's the they are real this is not some imagined thing i mean it's fine you
[16:27.20] can ignore them you don't need them your everyday thing to a certain degree but this is part of what
[16:33.76] i was trying to get at who do you think would know that web components are an uptick like you got to look
[16:41.76] at people like nicole sullivan has said are all using frameworks then the framework authors and the
[16:49.52] github issues are the ones that are going to notice the uptick in web components
[16:54.56] just just putting it out there when people ask about like you say oh bubba you don't get it the
[16:59.52] platform blah blah blah blah who do you think it's all the freaking github issues i mean obviously
[17:04.24] people building you know the actual spec and stuff but also like
[17:08.40] people who have to support them
[17:19.92] i also find that people who know web components as well are also deeply using them which usually
[17:26.72] means criticism is harder to take because it's interpreted as you're doing it wrong exactly like
[17:29.84] skill issue i got a few of those and it's like yeah okay like it's tricky
[17:35.04] so why call the article why puts them out the future
[17:40.24] because regardless of whether they're here to stay doesn't mean they're a good thing
[17:45.84] like like i i i don't take back my position i'm just saying that like it's unfortunate that we're here
[17:57.04] some people you know try to push against it i think the best thing we can do now is hold the line
[18:02.00] and make sure that like the spec doesn't get like stuff doesn't get over bloated in this it's it's
[18:10.24] not the web components itself or any individual spec it's the direction of the web heading this way we
[18:15.12] have to we need we need to be careful about and like it continuing on this path um
[18:23.84] i think i think that's the problem like it's perfectly fine for something to exist and then
[18:28.80] like no one use it and then it's not like there's a difference between being the future and existing
[18:32.64] like i i don't actually i'm not stepping back from my position i just mean that like
[18:38.72] it's it's not quite like most it's why when i read most responses i was i mentioned i went on vacation
[18:46.48] and i kind of came back to it i actually saw bit of theo's video like the day before i came back and
[18:50.00] i was just like oh no i'm gonna have to um it's it's it's one of those things where um that's why most
[18:59.60] responses sound really i understand ridiculous to me like it was just like like like you know i'd be
[19:07.52] like sure that's great but like what are you talking about it's part of that talking past each other and
[19:12.96] that's why it's really important to kind of come back to it
[19:18.48] right uh there's people got burned to changing frameworks and all that and i want to talk about
[19:29.28] that today too right because i think the whole idea that web components protect you from this is
[19:33.68] probably one of the biggest myths we have to like bust so to speak right like this is kind of like the
[19:40.80] fundamental problem why we kind of talk past each other i mean when i said i started this because
[19:45.28] solid 1.9 solid had one of the best web components support already so why are we doing all this more
[19:50.32] stuff in 1.9 it's because we've understood best practices about how to use them author them this
[19:55.28] has all changed and it continues to change in the last 10 years i had good ideas of how i thought we
[20:00.56] should do blank and then we're like okay actually you don't need to do that much at this level we should
[20:03.20] do it at this level so we moved it um polymer used to use you know template elements for control
[20:07.68] flows you know perfect example right like you know people don't really do that anymore you know right
[20:14.00] different type like the all the technology around web components changes you know it's still all
[20:20.56] backwards compatible because the old one works the same way that you know my react 13 component or
[20:26.24] whatever still works today whatever but like it's it's all like when we talk about frameworks and we
[20:34.88] talk about opinions these things exist beyond the code they in front of the code and that's why where
[20:40.56] the terms and technologies talk about when people talk about future proofing we gotta be like be ready to
[20:46.24] call bullshit sorry um on it you know like this is this is this is the fundamental problem if you sell people on
[20:54.00] this idea that this somehow solves this basically impossible very difficult problem to solve then
[21:01.52] people buy in and they buy in super hard and then it's too late when they realize it's not the case
[21:06.40] right i mean every brain work every trend everything does that you there's always this like hype cycle
[21:11.04] that kind of it does it you know like people feel that way about react the the difference is react
[21:17.12] isn't in the browser can you picture if react had gotten into the browser like this is this is this
[21:23.20] is where the concern comes from you know
[21:24.96] can we acknowledge that old school vanilla is just as viable as using next year blog seems like a lot of
[21:37.12] people care yeah of course sure yeah i mean there's this interesting tension there between like using
[21:45.76] state-of-art tools to kind of a universal solution that can serve everything and having one way of
[21:49.76] doing things it's funny because frameworks have a lot of that same tension like why do people want
[21:54.08] to use next because they know they can build their sites and their apps and everything with the same
[21:58.48] tool and they learn one thing and they get really proficient at it and it feels really good it's the
[22:01.92] same reason why people want that kind of thing built into the web platform but like on the other hand
[22:09.44] like i'm glad i can do something that's not next you know i mean like
[22:13.44] so do you think there's a web component spectrum in the primitives i think
[22:22.88] hard to say i maybe we'll explore that today i'm generally i think the concept's flawed but i i i think
[22:30.00] i i think we can explore that
[22:32.00] i i mean there's a lot of great comments in the chat i want to try to create a friend
[22:41.76] framework on web components create the component then it could be normally 12 and blah blah blah
[22:45.04] yeah i mean chat you guys will be able to drive me
[22:48.88] for ages here and we'll we'll get into that um to you know where we can
[22:53.92] but like
[23:02.48] i i think i probably need to move this forward a little bit i'm just sorry reading chat a little
[23:09.52] bit here what i got web components use monobaylor talk about not having to build a bundle yeah see
[23:14.40] this is the thing we get into these discussions that are like so peripheral that they all kind of tie in
[23:18.24] like build or not build and all this kind of stuff and it's like you choose to do builds
[23:23.44] because you want the benefit like well why do you use typescript right like you can obviously not but
[23:32.48] it's like if you can do something without a build and do something with a build you it's pretty obvious
[23:38.80] that the thing with the build ultimately has the potential to produce better results it's right
[23:43.92] because you can always do the non-build thing with the build so if you're using the build you're doing
[23:49.28] to make it better in some kind of thing there might be a trade-off in terms of like user flow or whatever
[23:53.68] but ultimately the output of a build thing is going to be better than i'll put in the thing it's just
[23:57.12] it's it's it's it's there's probably some kind of like
[24:01.52] logical law rule about that but like you can see where i'm going but um these things all get um tied
[24:12.08] together because they align on like a certain perspective on where the web should head and i i
[24:18.08] get it like single page apps have been detrimental they've been harsh and people like we've gone too far
[24:24.64] and all this stuff but on the other hand they solved a problem in a certain way maybe that way can be
[24:31.28] sold better that you you don't get to solve otherwise you can't you can be like okay i'm pretending this
[24:37.76] not exists but like you know and if you think about web components being primarily a client-based
[24:43.76] thing for javascript are also trying to like be in that space um so to speak so yeah i mean it's it's interesting
[24:54.64] i want to start somewhere um let me share my screen my screen for a sec here let's present share screen
[25:14.24] entire screen this screen all right here we go hope you can see this i'm gonna i'm gonna i'm gonna read
[25:21.68] an article here um some of you might have read it before but this is where i wanted to start today
[25:26.48] let me see if i can blow this up a little bit
[25:29.84] i've been tinkering around with related technologies for a few years now and i tried to reverse engineer
[25:38.64] many of the popular libraries but it wasn't until earlier this year that i decided to really pull this
[25:43.12] together into something things that sort of aligned modern browsers are pretty much here web components
[25:48.32] are actually finally arriving edge is the last and it's in dev but most importantly there's a clear
[25:53.20] gap now between people using this new technology sorry let me switch the view around a bit better so
[25:58.00] you can see it better where is it there we are
[26:01.92] um using this new technology and apply it to how they know how to do things letting the technology define
[26:12.16] what they can do right i didn't set out to write a framework in fact i don't think my work here is
[26:19.04] a framework in a classic sense the js framework of 2018 is a new type of framework that isn't necessarily
[26:24.48] new at all if you've worked in javascript in the past decade you've definitely seen the rate at which
[26:31.20] things have progressed outpace software's project's ability to stay current from angular's transformation
[26:35.60] to angular 2 to react community figure out monthly what the best way to do dependency injection is
[26:40.80] right do you guys remember that when there's like like not an official context api and there was like
[26:46.32] ways of like kind of backdooring into react for a couple years there we couldn't even agree on a good
[26:52.72] way to store our application state and don't get me started on which redex middleware is the least
[26:57.60] and that's not like compromising you know saga or thunk or whatever some people call that that that fatigue
[27:04.00] inducing i call a sign of a healthy community built on innovative ideas but it hasn't been without cost
[27:08.88] every time react deprecates life cycle functions or people have ptsd flashbacks when dan abramoff writes
[27:14.40] a blog on a new react feature he has to caution people not to get too excited it's hard to be a large
[27:19.12] framework and keep things simple while being cutting edge it's not a problem that just goes away
[27:24.96] the best you can do is not force everyone down a painful upgrade all things being fair react has
[27:30.00] done a pretty amazing job of not forcing people that way and while there are reasons for their
[27:34.72] success one simple thing sticks out react is a library that mostly does one thing and does the one thing
[27:39.60] well this article was written in 2018 so you can see that maybe times have changed it's the ecosystem
[27:46.56] around it that makes it a full-fledged framework this frees the developers to focus on what's important
[27:50.72] allows the community to do its experiments as much as maybe impossible to be cutting edge all the time
[27:56.00] you never need to do angular 2 level migration it happens one day and react and react as it has been
[28:02.16] incorporating more of these communities efforts internally risk this more and more yeah so this is
[28:05.92] i guess when um around the time react started pulling stuff in to state react wasn't the first
[28:13.60] just render library i attribute that honor to a much older library knockout js
[28:17.92] okay i mean it's given away who the author of this article is i think at this point um i wrote this
[28:25.92] article back in 2018 it was my first article i ever published um but it's it's it's important here i knew the
[28:36.40] the second that if if you guys didn't if you guys didn't clue into it the second time it mentioned
[28:41.20] knockout that you guys know it was me it didn't come with the same rhetoric and backing as react but
[28:47.04] it wears the mantle much better knockout didn't have a component but identified an application was built
[28:51.84] from three parts model view model and view and truly only cared about how you organize the ladder
[28:56.96] the view model was a revolutionary concept for client at the time as most libraries were mvc where the
[29:02.88] controllers are generally singletons and capable of representing state cleaning view models are
[29:06.08] instances much like components which set knockout apart without view models could be anything you
[29:09.76] wanted an object a function a class not in 2010 unless you were using coffee script coffee script
[29:15.92] mentioned there are no life cycle functions you could bring your own models organize your
[29:19.68] application fit and you had to do with declare your data and bind it without best practices it
[29:24.16] would just be a complete mess but it was truly just a render library
[29:32.80] the ceo for the company worked at back in 2013 was very tech-minded and facilitated moving our knockout
[29:37.44] single page app into web components it was a natural fit as knockout didn't care about the
[29:42.32] containerism and a few custom wrappers were able to come up with pretty powerful system in 2014 we
[29:48.24] migrated our backbone data models to flux stores in fact we successfully made several migrations as
[29:53.52] trends updated on system that was developed mostly in 2011 in fact it's still in production today the key
[29:58.48] to this was understanding the natural boundaries the most expensive part of refactoring something is that
[30:02.72] you have to change where one part ends and the next begins our cero was either a genius or pretty lucky
[30:07.60] what i learned from this experience between the boundaries haven't changed really over a decade
[30:11.12] there's been one constant as controllers transform to routers and models to stores and view models to views
[30:17.28] we and got wrapped together as components the anatomy of a component is still three main parts
[30:21.84] a container a change or local state manager and a renderer even a smaller library like react is
[30:27.28] responsible for all three but this natural separation that is is fine grade enough not to tie you to
[30:32.64] any specific solution or opinion more so by mixing matching these along with external storage routing
[30:39.20] you can have exactly the framework you're looking for without necessarily having to write it yourself
[30:44.16] that is as long as the container which serves as the interrupt point is something you can bank on
[30:47.60] web components are a good candidate for those containers as they're standardized and available
[30:51.76] the past few years has seen the rise of micro libraries for rendering Stefan uh uh Krause's JS framework
[30:58.64] benchmark is like a smorgasbord of possibility libraries vary from full-fledged like angular to
[31:02.56] super light dom wrappers that handle a little more than array reconciliation methods it's is run on
[31:08.24] an example that is like an overworked to do mpc that gives just enough dx ergonomics that you can
[31:13.44] make a surface judgment like all benchmarks it's not completely real world but in terms of benchmarks
[31:17.52] this is one of the best to understand performance characteristics of technology design services
[31:21.20] with that in mind i had a baseline for my journey in my next post i will take you through what it means to
[31:25.92] bring your own framework and build your own framework and uh further dig into the decisions and libraries
[31:32.80] i've written to realize this goal so on i want to share that with you all today because
[31:45.20] you can see how um
[31:51.20] i'm sorry it's bring your own framework not build your own framework how my perspective has changed
[31:55.60] a lot in the last six years um so i i i wanted the preface with this because i think it's a
[32:02.80] or preface or preface whatever sorry my english sucks sometimes
[32:05.44] you have to understand that my perspective did not come from because i don't know what the hell i'm
[32:15.52] talking about it came from understanding exactly what tools had available work at how to leverage them to
[32:29.84] the best of our ability and then realizing where things worked and where things didn't work
[32:45.52] Yeah.
[33:15.52] Yeah, I mean we can get there. I just, this is my starting point. Should we do a HackMD? I'm trying to think here. Oh, come on.
[33:37.08] Get up. Boo. Okay, maybe this will actually work. Because I was going to use Excalibur, but I feel like Excalibur sucks for typing stuff. Right. So maybe we should just like jot things out here.
[34:01.44] Web component. Because I actually, I actually, how should I put it? I actually tried writing a follow-up article and then I decided it was a waste of time and instead I just joined the Web Component Discord and just went in and talked with people there.
[34:18.74] It just saved me a lot of time. Because I couldn't figure out how to frame it. But maybe we can get there.
[34:26.74] Yeah. I mean, I don't see where WebCons are. Yeah. We have to, we have to get, we have to get there. This is, this is, I just wanted to show that, you know, where this started and where it ended up. Right.
[34:46.80] Honestly, let me, let's go back into dev. And let's look at
[34:54.04] this one. I wanted to see.
[34:58.80] Yeah, actually, I can get to it through here. This one, this one.
[35:11.20] Did I not even link it?
[35:12.24] Did I not even link it?
[35:12.40] I didn't even link it.
[35:16.48] I didn't even link it.
[35:17.20] I didn't even link it.
[35:41.20] Yeah. Yeah. That, that was a Discord.
[35:48.44] because, yeah, I mean, there's a lot of tax on how we can approach this whole, this whole thing. And there's a lot of articles and things going back and forth. So, like, I think.
[36:00.44] The reason I wanted to point out my original article series was because I was intending to build a framework around web components so that I wouldn't have to have component model.
[36:10.68] I could just, like, basically just have very simple renderer and some reactivity system, call it a day. And it's funny because you'll see this kind of mindset and mentality today still. Like, it's, it's, it's live and lit to a degree or, you know, a lot of other frameworks, you know, came out. I mean, it's funny how much little this stuff changes over time. Like, if I look at my web components containers article, which is a follow up here.
[36:36.68] I basically identified that there's web components to modularized framework X, right? So basically having like output modes, web components as the framework, I use polymer and stencils as an example, but these are basically made for authoring, I guess lit would fall into this category.
[36:54.68] And then I, and then web components as a container, which I, do you guys remember skate JS?
[37:00.68] Skate JS. It's just not, it's just not around anymore. I, we could probably Google it. Um, skate JS. Um, the idea was that you could basically bring whatever renderer you wanted, um, whether it was lit or whether it was preact or solid or whatever.
[37:22.68] Or whatever. And it would output a, like a web component for you. Right. Um, I, I basically created my own library, um, component register back in 2014, which was, uh, which was kind of like skate.
[37:46.68] Okay. Except instead of forcing people to author stuff with in a, in, in a way that would be in web component land. Cause some people don't like authoring the web component classes way.
[37:56.68] It's ironic that this actually has a react class in it. My, my, the way that my library worked was you would write the native code in your framework and then it would just be like a Hawk wrapper.
[38:04.68] So if your component's a class in react, then it's just a Hawk wrapper and solid, we just pass functions in. So it was like very simple way that you basically didn't have to be aware of the web component abstraction and you just get web components back.
[38:20.68] You, you might have to like define the types of the props so that, you know, the bright observed attributes would happen and whatnot, but you get, you get the idea.
[38:29.68] The idea was that you, and then when you, you basically had a regular framework component with the exception that the first argument was a props object.
[38:36.68] And then the second object was like some kind of web component context object.
[38:41.68] Uh, and I, I built the library back in 2014, um, because you know, this is where, um, I, I want things to, to go, so to speak.
[38:52.68] And the funniest thing is, I mean, I'm just going to show this really quickly here.
[38:56.68] Uh, let me see if I can pull this up, but if I go back to, um, my GitHub profile,
[39:04.68] I think it's here.
[39:06.68] And if I search for, let's go repository, um, hacker news.
[39:29.68] Solid hacker news app.
[39:32.68] Um, this was the first app demo for solid JS, um, I think five years ago.
[39:39.68] Um, and what you're going to see is the entry of the app.
[39:45.68] Uh, sorry, some service worker garbage.
[39:48.68] Um, basically these folders of, of, uh, I guess this is the app folder index.js.
[39:59.68] Um, there we go.
[40:01.68] So hacker news component, um, makes a new router.
[40:05.68] So this had a programmatic router, but basically it's JSX, um, with slots.
[40:11.68] And then I'd export a custom element that just X wrapped my solid component.
[40:16.68] This is essentially a solid component.
[40:18.68] And then the router was this router that I wrote ages ago, web component router still up on MPM.
[40:24.68] And it would, it's a nested router, um, with parallelization and async and handling and all this stuff.
[40:32.68] Um, and you know, so if we went to like the stories page, we've built a lot of hacker news demos on here.
[40:39.68] You should kind of get the idea.
[40:40.68] There's some store that we're using and we're getting our, using a computer to get the stories and setting state.
[40:46.68] This is like the use effect.
[40:47.68] Like this is really, really old.
[40:49.68] There's a four, but this is a solid component that just happens to have a little wrapper on the export.
[40:55.68] And, uh, anchor is yet native extensions.
[40:59.68] And then story item, all the child components are actually web components.
[41:03.68] Um, this is, this is like, this is like solid 2018.
[41:25.68] Um, yeah, I mean, solid element is this that's, that's, that's, that's, that's, that, that is what this was.
[41:37.68] Um, but I, it's important for me to at least get this perspective out there because like, I was completely on board until I, until I wasn't, um, so to speak.
[41:51.68] Um, okay, we'll, we'll get to, to that.
[41:58.68] I know there's a comment about not bringing up, let's not keep up riches article.
[42:02.68] Yeah.
[42:02.68] There, there is a, there's a, there's a, there's a lot of like, when I read this article, I w I like, I remember thinking about half of the stuff and being like, yeah, I don't know about that.
[42:14.68] Yeah.
[42:15.68] I don't know about that.
[42:16.68] Um, but I mean.
[42:20.68] I mean, he, his point on composition and a bit of this, like not his example necessarily, but there's still some merits of it because categorically we're, we're still coming into stuff.
[42:36.68] There is a lot in this article that is either outdated or like, I think this is one of the biggest challenges, right?
[42:42.68] Cause we, we have a bunch of touching things and they all kind of get conflated, um, together, uh, because like they're adjacent to each other.
[42:50.68] Like I saw a post about, um, being able to call the connected callback yourself, you know, and, and feel like, well, it's a class without a private member.
[42:57.68] Of course you can do that.
[42:58.68] And it's like, it's weird, but it's also like it's JavaScript.
[43:01.68] So like who cares, I don't, it's, this is what makes it hard to get like lost in the mud a little bit when we get too much on the, on the details here.
[43:11.68] I will say that this, this was one of the earliest examples that I remember where it actually talked about a few of the important, um, you know, pieces, so to speak.
[43:23.68] Um, I, I, I really doubled up on that whole, um, you know, basically it's the same thing, right?
[43:32.68] Dom life cycles, um, composition.
[43:37.68] Um, and the thing is, I'm, we've had a long discussions about this, about like what's solvable or not.
[43:44.68] I think, yeah, let's, how do we want to frame this conversation?
[43:46.68] This is why I brought this up here because I think there's, there's three primary use cases we talk about.
[43:51.68] We've talked about, um, consuming web components.
[43:55.68] We call about, we talk about authoring web, web components.
[44:00.68] We talk about, what else do we talk about?
[44:02.68] We talk about like, um, um,
[44:08.68] web components as framework components.
[44:17.68] Um, I feel like these are like the three headline things.
[44:25.68] I, I feel like if we're going to have this conversation today, it'd be like, um, maybe we should also talk about like, um, let's just go author mode.
[44:44.68] Okay.
[44:49.68] Right.
[44:50.68] Right.
[44:51.68] Uh, this is just me kind of roughly getting the head of where a lot of the contention is.
[44:56.68] Cause I started also realizing in myself that a lot of the difficulties with these arguments is that these things get conflated.
[45:03.68] Um, the return instance of check, I think is a fair criticism.
[45:21.68] I understand why it's like that, but it's, it is odd and not just in like a, that's just JavaScript.
[45:27.68] As in like, that's like happens nowhere else.
[45:30.68] And just here, very strange, but.
[45:32.68] Right.
[45:35.68] Framework supportive web components is, as I say, a combination of this.
[45:40.68] Right.
[45:40.68] Cause if you, if you, if, if, if I think the problem is almost every framework started here, I, I, I think this is really not like react or angular, the older ones, but the generation of frameworks that came out after 2014.
[45:55.68] So view Svelte.
[45:58.68] Um, you know, whatever, all the other SFC ones, like riot and like, you know, obviously stuff.
[46:07.68] Um, like lit.
[46:09.68] Um, like, uh, I'm going to put solid in this list.
[46:14.68] Um, we thought that we could do this.
[46:18.68] This is where the disillusionment started.
[46:20.68] And it's also the place where like, it's easy to like write some rough notes and just be like, okay.
[46:26.68] What do we like?
[46:27.68] Okay.
[46:27.68] Sorry.
[46:28.68] Do I have the tool to like adjust this sideways?
[46:32.68] Am I going to have to manually update the numbers?
[46:35.68] Can I get tab it over?
[46:36.68] Okay.
[46:37.68] Okay.
[46:38.68] Lovely.
[46:39.68] Um, I think it's worth pointing out.
[46:43.68] Um, composition here is one of those kind of contention topics.
[46:48.68] Web components as frameworks components, uh, composition.
[46:51.68] Um, the, well, custom elements are one of several specs, right?
[47:10.68] The funniest thing is, yeah, I mean, before we talk about this, what are web components?
[47:24.68] And I guess the thing is like, um, uh, bunch of specs, you know, I'm not going to give a formal
[47:36.68] thing, but just for, for sake of the stream here, a bunch of, uh, standards around being.
[47:45.68] Able to build modular.
[47:50.68] Dom element, custom modular, custom, whatever, but your DOM elements more or less like loosely.
[48:04.68] Loosely.
[48:05.68] So yeah, I, I, I can see where the naming thing comes out.
[48:09.68] Cause the, those specs, um, were like, what do we have?
[48:13.68] Uh, HTML imports, templates, custom elements, and, uh, shadow DOM and HTML imports.
[48:27.68] Um, does this work?
[48:33.68] Um, we do like this, I just, yeah, no, there we go.
[48:42.68] We can strike through.
[48:43.68] Cause I, that, that ended up, you know, at a certain point, it was like, why aren't you just
[48:48.68] using JS?
[48:49.68] Can I kind of convoluted?
[48:50.68] convoluted?
[48:51.68] I, I, I, I, the funniest thing is templates, until you start getting to the weirdness of like,
[48:59.68] around like what it means to be part of the document, part of the document or not.
[49:09.68] Um, everyone loves templates.
[49:17.68] Pretty much.
[49:18.68] You know, like everyone had a need for templates.
[49:22.68] The interesting thing is there's no actual templating language.
[49:31.68] So templates are, don't have the ability to interpolation unless you're like processing the attributes yourself.
[49:37.68] Um, which has some interesting implications, but generally speaking, um, quite often when people are talking about web components, even though templates are related for the most part, they're talking about custom elements and shadow DOM.
[49:54.68] Um, my point of compatibility, universally, but use them.
[50:10.68] Yeah.
[50:11.68] Yeah.
[50:12.68] Right.
[50:13.68] It's consuming web is 0.1.
[50:14.68] Yeah.
[50:15.68] I think, I think, and we should talk about this because, um, yeah, no other component technology claim this or even tries, of course.
[50:20.68] Cause like my response to this is like, yeah.
[50:22.68] So what, um, to be, to be frank.
[50:25.68] Um, but we will talk about consuming, um, web components, um, because it is.
[50:30.68] To do, to do, to do, to do.
[50:35.68] It's catching up with, um, thing.
[50:37.68] Okay.
[50:46.68] Uh, I'll bite.
[50:47.68] I think you're looking at web codes for framework classes.
[50:49.68] Um, that should not be the pro time opinion.
[50:52.68] What, what are framework glasses?
[50:54.68] I, I, I, I, I, I, I, this is why I started here because.
[51:05.68] Are, is this, you know, the article that I wrote framework glasses.
[51:12.68] It was literally, how do I not write a framework?
[51:15.68] I see value in shipping universal UI components libraries.
[51:29.68] Yeah.
[51:30.68] I, I can see value in that as well, but I, I, I have a question.
[51:34.68] Just, just kind of how many new UI component kits come out for react every year?
[51:40.68] Like widely adopted ones.
[51:43.68] The only reason I I'm, I'm, I'm, I'm kind of putting this out there is because.
[51:55.68] How should I put it?
[52:02.68] Like.
[52:03.68] Even within a single framework that's large enough, a single ecosystem, whatever.
[52:09.68] It's not like now that I have a web component library, people won't just continually reinvent the wheel and make more and more and more of these UI libraries.
[52:20.68] So they, we've seen it within a single framework itself.
[52:24.68] It's, it's obviously very nice.
[52:25.68] If you could be like, Oh, now I don't have to use react.
[52:27.68] I can use blank.
[52:28.68] I like, I get that argument, but it doesn't fundamentally change the fact that we're going to keep on rewriting crap over and over and over and over and over again.
[52:35.68] That's, that's a, that is a given.
[52:37.68] Like.
[52:38.68] Like it's just going to get written over and over and over again.
[52:42.68] There's no end to that.
[52:44.68] Don't fool yourself to think otherwise.
[52:48.68] So like.
[52:49.68] We'll talk about the implications of what it means to be universal UI component library too, as we continue.
[52:57.68] But yeah.
[52:58.68] I mean that webcodes are simply custom elements with isolate styles and JS logic.
[53:05.68] That's it.
[53:06.68] Yeah.
[53:06.68] But what does that mean?
[53:07.68] Right.
[53:08.68] Um, actually maybe I have the benefit of understanding what that means.
[53:13.68] Cause I think I recognize your name.
[53:15.68] You responded to my article.
[53:18.68] Hmm.
[53:29.68] I'm not convinced.
[53:30.68] I think you're trying to make web components more than what they are.
[53:32.68] Okay.
[53:33.68] Custom elements with sandbox styles and some JS logic.
[53:35.68] Okay.
[53:36.68] So yeah, this is, this is exactly what you're saying.
[53:37.68] Gotcha.
[53:38.68] I, for one, think frameworks might not be the future.
[53:42.68] Oh, okay.
[53:43.68] The statement I get more and more is that front end is a complete mess because frameworks are overwhelming abstractions.
[53:48.68] Okay.
[53:49.68] Keeping us away from web standards.
[53:51.68] Okay.
[53:52.68] Web standards are closing the gap and offer native solutions to challenges frameworks came to solve.
[53:56.68] What?
[53:57.68] I thought you just said that they're not, I think you're trying to make web components more than what they are.
[54:02.68] What?
[54:03.68] I told you guys about this at the beginning, right?
[54:13.68] This is very common kind of rhetoric.
[54:15.68] And if you are a web component supporter, be very careful not to do what I call the two sentence later thing.
[54:23.68] You guys do it like fricking clockwork.
[54:26.68] It's like pick, pick one or the other.
[54:32.68] You don't get to pick both, right?
[54:34.68] It, this, this is a contradiction.
[54:36.68] It's right.
[54:40.68] I can say it's time to consider going back to square one.
[54:43.68] But this was square one.
[54:47.68] Do you see how this just doesn't compute?
[55:13.68] I mean, this is, this is the, this is how it starts.
[55:19.68] Everybody needs a framework, but no one needs a general purpose framework.
[55:24.68] Right?
[55:25.68] Like that, that's, that's the, it's like the, I forget who said that first, but it's like, it's like the thing people.
[55:31.68] Like if you don't make a framework, if you like, don't go pick a framework, you'll end up making a framework at your company indirectly.
[55:37.68] It's the construct of the pieces coming together.
[55:40.68] It's just the natural thing.
[55:42.68] No matter how many standards you put into the browser, you will, someone will make a framework on top of it.
[55:47.68] If it's just the team, the company, someone thinking it's generalizable to pull it into open source.
[55:53.68] There's always layers of abstraction.
[55:56.68] You don't want too many because things get distracted from it.
[55:58.68] So you want to raise the floor.
[56:00.68] You want to keep the, you know, keep low to the ground, all this understandable.
[56:04.68] But like at a certain point, right?
[56:10.68] It's like what I talk about when I say that these things are discovered, not invented often is that you start seeing the commonalities.
[56:18.68] And these are the, this, this is the basis.
[56:20.68] I think we're, where things like standards can come from when you start hopefully seeing the flow of stuff come together and be like, okay, there is something abstractable here.
[56:30.68] That's, I should say solid enough, but it's my pun, but that, that you can like say like, okay, we can make a decision here.
[56:39.68] But like, I am incredibly skeptical of that.
[56:43.68] I mean, incredibly skeptical of that in, within our own stuff.
[56:46.68] Um, you know, uh, yeah.
[57:09.68] Um, they could won't work with less than the rewrite.
[57:12.68] They could, or they could not.
[57:13.68] Right.
[57:14.68] It depends on what you consider the evolution of things.
[57:16.68] Like sometimes there's new ideas.
[57:18.68] Like the way signals completely caused us to have to rewrite stuff.
[57:21.68] Like why you, you wouldn't even want the components to work the way react does in a signals.
[57:26.68] It just doesn't make sense.
[57:27.68] Right.
[57:28.68] Like, so maybe that's, that was an unavoidable one, but honestly, I can't tell you the difference between the different react UI libraries, but they've, they've gone headless.
[57:37.68] They've gone like someone knows better than me.
[57:40.68] Like that.
[57:41.68] I, I, I don't know the difference between radix and Mantine and king.
[57:47.68] What's what I'm just throwing names out here.
[57:49.68] Arc and, um, Chassien and things you caught tailwind components or like things tailwind UI, like things you copy and paste.
[58:03.68] Like my gut is actually, no, make maybe a little bit, but I mean, I'm, I'm, I don't know.
[58:16.68] Right.
[58:17.68] But yeah.
[58:18.68] Uh, that's not where we're going.
[58:19.68] It's a single firm.
[58:20.68] Right.
[58:21.68] The issues of any companies that have a heterogeneous friend and it's about multiple apps.
[58:35.68] I need to share.
[58:36.68] Yes, completely.
[58:37.68] And, and the thing is like every, these companies also have all their own design systems.
[58:43.68] They don't get to go, um, build, uh, they don't get to go pick up material UI off the shelf and use that.
[58:50.68] They, they, they, I remember working at the demo on the indirectly, like I was adjacent to the, uh, the UI team and the like design teams at eBay.
[58:59.68] Um, like you gotta remember like the eBay team was like, God, we like this picture that like web components made sense for us.
[59:08.68] Right.
[59:09.68] Um, it's why we, we, when the declarative shouted on, we had the meeting and we had the, the chat with the, the fine folks from, uh, kind of the, I guess then Google kind of web component teams met with, you know, Justin and gray and, and so on.
[59:22.68] And like, don't like there are use cases here.
[59:27.68] Like one of the most compelling ones, because once you get to this point where you, everyone wants to use different technologies and you have all these things and you have the single design system.
[59:35.68] They want to keep sync across mobile, across different web platforms.
[59:39.68] Like you've got, you know, say like the page view thing on eBay that hasn't updated in like a decade.
[59:46.68] And then you have like the new motors section launches and then you're like, okay, but we need to keep the design, the system.
[59:51.68] And then you're like, Oh, but mobile apps on different platforms.
[59:54.68] And uniquely there, I mean, the mobile thing actually makes things a little bit trickier.
[59:58.68] Um, but there, there is definitely a desire here when you get to a certain skill, same desire you have for having like, um, micro front ends.
[60:05.68] Right.
[60:06.68] Um, the, the challenge here is actually keeping accountable for the impact of this.
[60:11.68] This is actually one of the problems I had with like module federation.
[60:14.68] I mean, it's, it becomes kind of like a necessarily a necessary, um, uh, piece you need to organize the teams.
[60:22.68] But then you're like versioning and management of versioning becomes complicated.
[60:26.68] So you're like, let's bring in a tool to do it.
[60:27.68] But then you start going like, what is the ideal world here?
[60:32.68] Because once you have multiple versions of the same thing, you're duplicating code.
[60:38.68] Once you have to upgrade them in lockstep, you potentially break stuff.
[60:43.68] So like, it's a good start.
[60:46.68] And I think the initial venture into the zone will keep things standardized and let you move these things at a very slow rate.
[60:53.68] But then you get into this zone where it's like, it's like you, it's much harder to upgrade.
[61:00.68] Now, the, the, the idea, I, I think the way I would approach this is write new components to replace the old ones over time and phase them out.
[61:08.68] But again, it's tricky because in the meantime, like if half the teams get to V2 of components and half them V1, and then V3 comes out, are we talking about bringing like three different versions of the underlining tooling and frameworks and stuff that you needed to build it onto into your browser page?
[61:26.68] Like in libraries, like to be fair, this might not be a winnable problem, right?
[61:34.68] Like you just know that, that jQuery is never leaving your page, but like, it's very hard to be in that position at the beginning and be like, let's do this guys.
[61:45.68] Like, like it's, it's, it's almost like you're forced to the knife point.
[61:53.68] And then you're like, okay, this is, this is where we need to go.
[61:56.68] And you really need to, at that point, consider like the implications of this decision, not just for now, but for the next decade or so, you know, while you phase and go through, you know, these migrations, this is not a quick thing.
[62:13.68] This is something that you're going to live with forever.
[62:15.68] And if you view it in that timescale, I think you need to start going, okay, how many times rewrites or how many resectionings I'm going to do in that decade.
[62:24.68] Like you have to make, you should make the decision with the full knowledge of this is not just like, okay, now I don't have to worry about this because it's not the case.
[62:32.68] The, the future proofing comes to your decision points that you make at that point in time, 10 years ahead of time, not down to the technology choice.
[62:55.68] The, the future proofing comes to your decision points, 10 years ahead of time, 10 years ahead of time.
[63:06.68] So, I think that's a good point.
[63:07.68] I think that's a good point.
[63:07.68] I think that's a good point.
[63:08.68] I think that's a good point.
[63:09.68] I think that's a good point.
[63:10.68] I think that's a good point.
[63:11.68] I think that's a good point.
[63:12.68] I think that's a good point.
[63:13.68] I think that's a good point.
[63:14.68] I think that's a good point.
[63:15.68] I think that's a good point.
[63:16.68] I think that's a good point.
[63:17.68] I think that's a good point.
[63:18.68] I think that's a good point.
[63:19.68] I think that's a good point.
[63:20.68] I think that's a good point.
[63:21.68] I think that's a good point.
[63:22.68] I think that's a good point.
[63:23.68] I think that's a good point.
[63:24.68] I think that's a good point.
[63:25.68] I think that's a good point.
[63:26.68] Yeah, and this is something that's important.
[63:40.68] I didn't mention this earlier.
[63:42.68] The amount of people who came out after my article and told me about success cases was a lot, right?
[63:51.68] And yeah, you can definitely scale it at Microsoft.
[63:54.68] And you can definitely like I think a lot of times this is the only like this is kind of like the rock in the hard place.
[64:01.68] Like this is doing stuff with micro front like front ends or with these kind of things.
[64:06.68] It's like the only piece that actually it's like it might be the best way out for like a period of time.
[64:19.68] And maybe that's all you need, because if you if let's pretend you can buy five, six, seven years with this move.
[64:26.68] That might be enough that you can like, you know, get to the next thing.
[64:32.68] I think I think that over a matter of time, it's like that tax that keeps on growing, right?
[64:42.68] Like, as I said, versioning is still like when you have module federation versioning is still a concern.
[64:47.68] It doesn't go away when you have web components.
[64:51.68] You know, maybe it doesn't matter like you.
[64:56.68] I mean, this is like pretend you have, you know, three versions of your JavaScript framework, you know, on the page or three JavaScript frameworks, you know, like, what are we talking there?
[65:06.68] Like, not react, not something giant, this picture something a little smaller, maybe like 20K.
[65:12.68] So, like, what's 60 kilobytes?
[65:15.68] You know, it could have been 20 kilobytes.
[65:18.68] What's 60 kilobytes?
[65:19.68] The component code on your page is probably five, six, seven times that amount, right?
[65:27.68] So who cares at your scale and what you're doing?
[65:32.68] I mean, this is maybe arguably where the whole thing comes in, because you're like on the small scale, you don't care because it's nothing important on the large scale.
[65:42.68] You don't care because you can't really do any better anyway.
[65:46.68] But what's irksome to me is it's never the best choice.
[65:52.68] Do you know what I mean?
[65:53.68] Like from a technical standpoint, it's never the best choice.
[65:55.68] Like if you could just not have the web components, your site will be smaller.
[66:00.68] It'll be faster.
[66:02.68] So like, if we just accept, it's fine to recognize that you have a need, but, but, but, but it's, it shouldn't be something that we're excited about.
[66:11.68] Right.
[66:12.68] It's not like I'm going to start my new app and I'm going to build it with micro frontends.
[66:16.68] And you're like, do you need, like the first question should be, should, do you need micro frontends?
[66:22.68] And I feel like web components should be in that same category.
[66:25.68] You're like, I'm going to build my new app and I'm going to use a web components.
[66:27.68] Like, do you need web components?
[66:29.68] Like it should be in the same, the same kind of category.
[66:33.68] You could say, Oh, do you need a framework?
[66:35.68] But we've, I think I've already established that you're going to build a framework anyways.
[66:39.68] So that one at least is a, probably a resounding.
[66:42.68] Yes.
[66:43.68] These other ones, I'm not sure.
[66:46.68] Maybe not.
[66:56.68] Yeah.
[67:09.68] It depends.
[67:27.68] Do we agree?
[67:28.68] Do you agree that a well-crafted web component library would reduce the need for companies
[67:32.68] to rewrite the component lib for at least for a time period, because I would argue that generationally,
[67:42.68] you probably don't need a rewrite.
[67:44.68] I think that within a, within like a generation in JavaScript land or thing, it doesn't save you.
[67:57.68] It means that like today for the next three to five years, you could probably share it effectively across, um, your, um, your, your, all your stuff written in different frameworks.
[68:12.68] Why that stuff is all written in different frameworks.
[68:15.68] I understand.
[68:16.68] It's probably was because someone wanted to do something new and then someone new.
[68:21.68] And then it, you know, we get to a point where we get to like, you know, the, the ninth new language, you know, I, I, I, as much as we discredit, you know, I mean, no, I shouldn't use that as an example.
[68:33.68] Cause I know how much internal splitting there is there.
[68:35.68] No, nevermind.
[68:36.68] Yeah.
[68:37.68] I mean, I think in terms of an immediate need to support, it's easier to do that.
[68:46.68] Like, see the unfortunate thing is like, if you had, let's pretend you were using solid and react.
[68:50.68] If you came up, like if anyone's ever seen, I made a solid react kind of bridge that just has the frameworks talking together.
[68:56.68] That's going to be way more efficient than a web component layer is ever going to be because by removing the web components, you know, they can talk to each other directly through JavaScript without, you know, playing the song and dance.
[69:09.68] But am I going to write that for view and stealth and every different one?
[69:14.68] Maybe if I was working at a company where I took this seriously enough, maybe I would.
[69:21.68] Right.
[69:22.68] Like, like, you know, I, I worry that in a sense that maybe making it like boil down to the lowest common denominator actually just makes it too convenient to do less than great things.
[69:38.68] All right, all right, all right, sorry, it's really hard to keep up with chat with this.
[70:07.68] Yeah, people are talking about react not being, yeah, again, a lot of specific things that we always have to be careful to.
[70:36.68] I actually have to warn people about this when they choose solid, which is like the fallacy of the rewrite, so to speak.
[70:42.68] Like every time you rewrite something, generally you get better results.
[70:45.68] So like when people show me like, oh, check this out.
[70:49.68] We rewrote this a solid and show these better metrics.
[70:51.68] And I'm like, I'm glad, you know, that makes me happy to see it doing what it intended to do.
[70:58.68] But I'm also say like, I, it would be really interesting to see how good it would have been if you rewrote it in react.
[71:04.68] Because my suspicion is like, there are cases, especially performance sensitive ones where it can make a difference.
[71:09.68] But a lot of times our biggest wins are from when we realize how to do things better because we're writing it the next time or the second time.
[71:17.68] Yeah, okay, let's continue going because I'm never going to up with the chat here.
[71:36.68] No, I mean, the, the, it's interesting, the, the bridges are, they're actually kind of similar in complexity.
[71:50.68] I mean, some ways they require, they're more complex because you need to know more about the specific frameworks to work, but they're way more efficient.
[71:57.68] Right.
[71:58.68] And because they're denoted as specialized, there's, there's like limits to like, I think this does get into like what I was talking about on the list.
[72:08.68] Right.
[72:09.68] Because if you, I realized the other day that if I treated web components as non-native, I think frameworks would have a lot easier way of handling them.
[72:17.68] If they treated them almost like a custom renderer, like if they were like, okay, we have Dom and like Dom APIs, we have like SSR.
[72:24.68] And then we have like WebGL.
[72:26.68] If you treat web components, like they're not native, like they're WebGL or whatever, like in that kind of category and kept the isolation.
[72:33.68] Then the, the costs that I talk about wouldn't be as felt because by default, you'd be like, I handle normal stuff.
[72:40.68] And then web components are like this exception case that don't work like the rest of the platform and you need a custom renderer for it or something.
[72:47.68] I, there, there's reasons why that doesn't quite work, but conceptually, I think that gets us closer to where it needs to be.
[72:53.68] Cause even though working through the bridge, say, react for solid, it's difficult.
[72:57.68] Cause like react doesn't know what a Dom node is and solid doesn't know what a virtual Dom node is.
[73:01.68] So like, there's like funny thing when you're passing children through, um, trying to make either play nicely.
[73:08.68] Um, you know, in the way that I'd want to say they have them play nicely with, uh, web components.
[73:13.68] Isn't really much different, especially when you consider stuff like SSR and stuff like most of the challenge comes around, uh, build time kind of considerations.
[73:21.68] Um, yeah, I think that was actually one of the challenges or concerns I had with, when I was talking about this just now about between those custom thing is, um, this kind of, I think the best solution here might involve more build tooling.
[73:36.68] And I think that's a lot of people I know, at least in the solid community around web components, aren't really happy about having more build tooling.
[73:41.68] They're trying to use less build tooling.
[73:42.68] It's kind of ironic that like the compensate for the extension and trying to keep things clean and efficient, like the best way to maybe handle it is kind of at odds with like what the community wants to get out of it.
[73:59.68] It's, it's, it's very troublesome to say the least.
[74:02.68] Yeah.
[74:08.68] Purpose is not the only consideration.
[74:11.68] Team structure and size come to play.
[74:12.68] Yeah.
[74:13.68] Using technology to solve organizational issues.
[74:15.68] As I said, this is why this is very much a micro front ends kind of, kind of thing, right?
[74:19.68] It's not about what I'm a technologist.
[74:21.68] What's the best way this can, like, what's the best possible user experience I can give the person.
[74:26.68] What's the best possible, um, performance.
[74:29.68] What's the best possible, like everything.
[74:31.68] It's about like, how can I make my developers more efficient and able to continually deliver?
[74:37.68] Cause that will get me, my customers, the best thing that we can reasonably do.
[74:40.68] It might not be the best conceptual project product that we can make, but it's the best way to, to, to, you know, speed up releases speed up.
[74:47.68] You know, so I, I can get that.
[74:50.68] It's just, you know, me, I'm never going to get excited about something that isn't the best because it's the best, but it's the best because it's the best compromise you have.
[74:59.68] It's, it's, it's, it's a lot harder to get excited about that.
[75:08.68] It's, it's not, I, I, I want, I saw this mentioned a couple of times.
[75:24.68] I am not saying there's a problem with like people authoring web components.
[75:33.68] I, I, I, I, I, I saw this mentioned a couple of times.
[75:37.68] I am not saying there's a problem with like people authoring web components.
[75:45.68] I, I, I, well, there are, there are some problems from a framework standpoint.
[75:50.68] You know, you're right.
[75:51.68] I don't need the right code to actually show what I'm talking about though, because it's not, it's not like maybe I can find some examples.
[76:00.68] Okay.
[76:05.68] Yeah.
[76:05.68] Sorry.
[76:06.68] I'm going to get completely submerged by chat if I keep on going there.
[76:09.68] Um, I, I, I know I got here because I was talking about, um, what's a framework's perspective and largely, um,
[76:19.68] I, I wanted to challenge that kind of thinking because like, I mean, okay, let's go there next.
[76:27.68] I, I, I actually think this is fair.
[76:29.68] Um, uh, was it web components are not the future.
[76:38.68] I want to see if they can find the, they're the presence.
[76:43.68] Yeah, no, I don't want to do that one though.
[76:45.68] I want to, I want to find.
[76:48.68] this article on dev.
[76:50.68] Cause it is on dev.
[76:51.68] Um, Corey wrote, uh, this article.
[76:58.68] Okay.
[77:09.68] Yeah.
[77:10.68] No, I, I, and I, I completely follow with that.
[77:12.68] It just, maybe that is the framework mentality.
[77:15.68] Maybe we've defined the framework mentality.
[77:17.68] The framework mentality.
[77:19.68] is.
[77:20.68] That.
[77:21.68] Like.
[77:21.68] Like.
[77:22.68] We look at the platform as a tool and then we go, okay, what is the, I mean, everyone
[77:34.68] does this though.
[77:35.68] What is the best possible way to leverage this?
[77:37.68] You know, I mean, there's different targets.
[77:41.68] Yeah.
[77:42.68] I don't know.
[77:43.68] Like, obviously.
[77:44.68] Like there, there are good fits.
[77:49.68] It's just like, you know, maybe, maybe this, we need to add to the list, right?
[77:54.68] Like where are web these really good.
[78:00.68] So let's talk about that.
[78:04.68] This is like, uh, micro front ends, large, large companies, right?
[78:13.68] Companies.
[78:16.68] And then we also said environments where multiple frameworks, um, short-term
[78:31.68] sharing of design system.
[78:37.68] I think, I think we, we, we, we, I think we got that.
[78:52.68] Yeah.
[78:53.68] I like that.
[78:54.68] Okay.
[78:55.68] So a couple, we talked about both of those today.
[78:56.68] So that's good that we kind of get this down.
[78:57.68] Right.
[78:58.68] Um, so yeah.
[79:01.68] Um, micro friends ends ish, ish environments, multiple frameworks.
[79:07.68] Like, so if you, again, these are kind of the same place to be fair, right?
[79:11.68] They're the places where you have usually a fairly large, you have, you have a, you have a people problem.
[79:21.68] Right.
[79:22.68] Um, like an organize it's, it's not a problem, but like, you know what I mean?
[79:25.68] Like you, you're kind of coordinating at, at this sort of scale.
[79:28.68] The thing is like, you could argue that if everyone was on the same framework, then you wouldn't have that problem.
[79:34.68] But frameworks will change over time.
[79:39.68] UI.
[79:40.68] I mean, this will change over time.
[79:42.68] The only thing micro front ends, you can at least swap them out.
[79:46.68] And I think this is the key to this.
[79:48.68] Um, this part of the debate of where they're really good is I'm, I'm, I'm much stronger on this micro front end ish mentality because the, the challenge with like, is micro front ends usually have specific touch points.
[80:00.68] You go, okay, there's this app and then you can replace sit app.
[80:03.68] If you're, if your web components are everywhere.
[80:05.68] Like, I think the problem is why, what I'm saying isn't as obvious enough is because I don't think we've gotten to the point.
[80:12.68] Where you get to that first time where you're like, okay, crap, we need to replace all the web components across the site.
[80:21.68] It will happen.
[80:23.68] I am confident it will happen.
[80:26.68] And when we get to that point, I think, I think this is where that kind of comes up.
[80:34.68] Um, but until we get to that point, we, we do have the second case.
[80:40.68] See the, what's beautiful about the micro front end ish cases that there's less touch points.
[80:46.68] There's less boundaries.
[80:47.68] You can go like, okay, this page has eight micro front ends on it.
[80:50.68] Like not happy about it, but it has eight.
[80:52.68] And when this part gets, you know, out of date, we just swap it in.
[80:56.68] If, if you're an example, if it was like a different, like a complete opposite extreme where you're like, okay, we don't have the micro front ends.
[81:05.68] And, you know, we have, yeah, I guess, I guess in this, even in the case of the shared components, you probably have micro front ends as well.
[81:14.68] It's like micro front ends plus web components, because if you had everything in the same framework zone, like, or the same page without the micro front ends, then you probably wouldn't have the web components or you'd be using the web components as micro front ends.
[81:29.68] So, yeah, I guess, I guess this is really like your art.
[81:34.68] You're already in a zone where you're, it's not just being micro front ends ish.
[81:38.68] You actually have micro front ends or some kind of similar consideration, um, already in play.
[81:43.68] That's where web components are really good.
[81:48.68] Well, I'm just saying that with like, there's two different forms of this, either you need to update.
[82:12.68] Um, say underlying libraries you use to author said web components.
[82:18.68] Um, there's, you need to add new components that, um, or like update components to add new features, maybe some design changes and you want to use the latest features of the libraries that are using to author it.
[82:31.68] Um, it might simply be, um, the situation where, um, the UX consideration.
[82:41.68] Like I was talking about why we changed the stuff being a solid 1.9 change.
[82:43.68] You're like, yeah, we used to do stuff this way, kind of like a material thing, but now we're like much more into like a radix style or something.
[82:51.68] Right. And you're like, uh, you, the teams want to use like the, the V2 versions of the components that are done in like a different kind of approach.
[83:01.68] Um, you know, like what, what, what other sources of this sort of changes, obviously there's different pages and different teams that update the new design system earlier later.
[83:12.68] Um, they, but they could stay beyond the same versions of underlying libraries, right?
[83:19.68] Like, like you always have to consider the underlying library thing.
[83:21.68] Like obviously if you can write pure vanilla, that's fine.
[83:23.68] But then there's also a lot of duplication.
[83:25.68] Usually you're going to probably like maybe using lit or something and you're, you're like sharing the library across it.
[83:31.68] You, you do have to like consider that.
[83:34.68] Um, you, you, you, you only want a few versions, you know what I mean?
[83:42.68] You don't want to be like, guess what?
[83:44.68] Every component is its own Island.
[83:46.68] Go right picture.
[83:48.68] You got like 50 components on the page and 50 copies of the framework.
[83:52.68] Like you're going to be sharing code, you know, uh, under the hood.
[83:58.68] I'm hoping not every, like even, even our, you know, 15 kilobyte.
[84:03.68] 15 kilobyte framework or 20 kilobyte, whatever.
[84:06.68] Like, um, I forget the, I forget what lit was the last I checked.
[84:09.68] I think it's around 16 or 17 kilobytes to do.
[84:11.68] Um, do like a to do.
[84:12.68] So it's probably like four kilobytes likely, but maybe 12, 13 kilobytes, whatever.
[84:16.68] Let's say 15.
[84:17.68] Just for the sake of like, you don't want to go 15 times 40, like, and go like, go like, no, one's going to do that.
[84:24.68] Right.
[84:25.68] Um, you're not going to like add half a megabyte of JavaScript to your page, just to load the framework over again.
[84:31.68] That's an extreme.
[84:32.68] The more likely thing is you're going to share code between them.
[84:35.68] Cause like, if you, as I said, you could do that naively.
[84:37.68] This is in a sense, one of the problems with like earlier Svelte and it wasn't that extreme, but they, they had a lot of duplicate code on the per component, which has actually made Svelte scale way worse than other JavaScript frameworks because they were repeating so much of itself.
[84:52.68] Um, this, this is a concern you use libraries often.
[84:55.68] Uh, even though they have initial larger upfront costs to reduce the amount of duplicate code, right?
[85:01.68] Obviously the platform having features also reduce the amount of duplicate code, but you still have to be concerned with versioning here.
[85:11.68] Yeah.
[85:12.68] I'm talking min zipped and also next is initial page size, like 90 kilobytes.
[85:21.68] Yeah.
[85:22.68] We're not even talking SSR.
[85:24.68] If you want to add SSR on it.
[85:25.68] Yeah.
[85:26.68] Like don't.
[85:51.68] Would headless web components make them less likely to change?
[85:54.68] Um, probably.
[85:55.68] I don't know.
[85:56.68] Again, this is, this aspect is not my thing.
[85:59.68] How many did, did headless, um, UI libraries and react make it less likely for people to make
[86:04.68] new, um, react UI libraries?
[86:08.68] Maybe.
[86:12.68] I don't know.
[86:13.68] The, the, I can't comment on that.
[86:20.68] Yeah.
[86:21.68] What about build size though?
[86:22.68] Realistic web comp would want to use a UI for it.
[86:24.68] Yeah.
[86:25.68] I mean, this is what I'm getting at you and you want to share those things, right?
[86:29.68] Like, or not share them, but then like, it starts adding up.
[86:33.68] Like, I'm just saying like, you have to, you can't, you, I think everyone knows that in reality,
[86:38.68] you have to be aware of these things, no matter what tool you have.
[86:41.68] Right?
[86:42.68] Like, like the most isolated reusable you can make it is, is pick the problem.
[86:49.68] Is, is take the full cost in and every web component.
[86:52.68] Right?
[86:53.68] Be like, but like, that's not, that has a trade-off, right?
[86:59.68] You don't want like the bundle your lit with each component separately.
[87:02.68] You're going to share your version of lit between a few of them.
[87:04.68] I presume.
[87:05.68] Right?
[87:05.68] Like, so like the math doesn't really, hasn't really changed here.
[87:17.68] I mean, we could try and compare that, but I haven't even got to comparing that right now.
[87:33.68] I'm, I'm, I'm literally talking about like, uh, um, company dash button.
[87:46.68] I don't even know if they are failing what they came to solve.
[87:52.68] Like, I think they might have, initially we might've thought they came to solve something more than they did.
[87:58.68] And they didn't.
[87:59.68] So I'm, this isn't about the failed promise.
[88:01.68] That was a great article back in like 2018 of a web components.
[88:04.68] It's not about that.
[88:05.68] I haven't even really got to what I I'm about yet, which is unfortunate because you know, we're still going, but I it's, it's the idea here is that there is inherent cost to these decisions.
[88:22.68] So, um, yeah, I mean, maybe this is a, um, maybe this is something I can put in here.
[88:30.68] Why not the future inherent cost to implementations inherent cost to, or maybe opportunity cost to future design space.
[89:00.68] Yeah.
[89:05.68] Sorry.
[89:06.68] You're right.
[89:07.68] You're, you're, you're absolutely right.
[89:11.68] We are getting into Q and a again.
[89:13.68] Okay.
[89:14.68] Um, where was I going here?
[89:21.68] God, I got so sidetracked.
[89:23.68] Um, yeah, I was reading this one, right?
[89:27.68] Um, it's disappointing that most of our framework maintainers.
[89:32.68] Okay.
[89:33.68] Why is it disappointing?
[89:34.68] Let's find out.
[89:35.68] These individuals are after all in some of the best positions to provide valuable feedback.
[89:38.68] Hmm.
[89:39.68] I, I wonder if we've ever done that.
[89:43.68] They have lots of great ideas.
[89:44.68] Appreciate it.
[89:45.68] Less.
[89:46.68] The little incentive for them because standards evolve independently and don't align with framework opinions.
[89:50.68] Probably true.
[89:51.68] But I think we should ask why they don't.
[89:56.68] How could they opinions are the one thing that makes frameworks unique.
[89:59.68] With each other.
[90:00.68] Okay.
[90:01.68] With each other.
[90:02.68] Okay.
[90:03.68] I, I buy it.
[90:04.68] And therein lies the problem.
[90:05.68] If you're convinced that your way is the best and the only way it's natural to feel disenchanted
[90:08.68] when a decision is made that you don't fully agree with.
[90:14.68] Yes.
[90:15.68] Yes.
[90:16.68] I agree.
[90:17.68] If, if, if, if there's a decision that's made, that seems to, especially like a, like a,
[90:20.68] like a, like at the baseline that you're building on that doesn't align.
[90:23.68] Like I gave a bunch of those examples, like God, like if JSX had been made into the browser
[90:30.68] or if, if people try to make signals APIs, like directly wire into the DOM, like I would
[90:37.68] be very upset, uh, about that.
[90:40.68] Um, so like, yes, yes.
[90:44.68] The word component is loaded.
[90:49.68] I agree.
[90:50.68] I don't think many will agree with that.
[90:52.68] If I write a component in framework A, I would like to be able to use them B and C and D without
[90:56.68] rewriting and including the entire framework.
[90:57.68] I don't think we'd agree with that objective.
[90:59.68] Um, I don't know.
[91:01.68] I actually, I don't actually know if I agree with that.
[91:07.68] I mean, I could see it on one level, but it, the question is, is a com, is a framework,
[91:12.68] a single component or is it the interaction of components?
[91:15.68] Like react has a re-render cycle of solids, fine grained rendering.
[91:20.68] They work completely different.
[91:22.68] And like, I guess from a functional part, like I, I, I, okay.
[91:27.68] I can see that if I had an element on my page that was functional and I, you know, and I, I
[91:32.68] want to be able to kind of put in a different framework, but then again, I'm not sure because
[91:37.68] there's, there's features that the frameworks offer that can only be accessed.
[91:42.68] If you're kind of all in because the, the orchestration like async management, like with suspense, right?
[91:52.68] Like resumability, like, like there's actually quite a large list of things that I want as a feature.
[92:00.68] And I can't look at the component in isolation.
[92:05.68] Like what if, because a framework has resumability, I could basically load no JavaScript for it and only have the smallest partial thing.
[92:17.68] And it was super efficient.
[92:19.68] Would I want to grab this component from react and pull it over?
[92:23.68] I'd not have that property.
[92:25.68] No, I, I don't think I actually would.
[92:28.68] I think the framework gives me a lot more.
[92:30.68] So, okay.
[92:31.68] So, okay.
[92:32.68] So, if I write a component, I would like to be able to use in BCD.
[92:39.68] Yeah.
[92:40.68] Yeah.
[92:41.68] I actually, I don't know if that's a given.
[92:44.68] I think that that is, could be true of certain things, but I can't say that generally.
[92:54.68] Nope.
[92:55.68] Sorry.
[92:56.68] I, I, I started very specifically here.
[93:05.68] Um, I, a hundred percent disagree with this take.
[93:09.68] It's not based on opinions from six years ago.
[93:12.68] Always looking into it.
[93:14.68] DSD.
[93:15.68] As I told you, when we were at Marco, uh, at eBay, talking all about DSD.
[93:21.68] This is, yeah, let's, let's, let's remove this from the conversation.
[93:25.68] It's not because stuck in the past.
[93:27.68] Assume that we know as much as you, and we've also gone a different direction.
[93:32.68] Just, it works way easier that way.
[93:34.68] Let's, let's not go here.
[93:36.68] Yeah.
[93:44.68] I mean, it is kind of crazy.
[93:45.68] Like I, I think, but this is important cause it's kind of the fundamental thing because it's
[93:49.68] kind of like, what is a component?
[93:52.68] And it's like, is it an isolated, it's a, it's a modular piece.
[93:58.68] It is a reusable modular piece, replaceable arguably, but is it meant to act on its own?
[94:07.68] I don't know.
[94:08.68] I don't know.
[94:09.68] I don't think so.
[94:10.68] Not necessarily.
[94:11.68] I don't think so.
[94:12.68] I don't think so.
[94:13.68] Not necessarily.
[94:14.68] Confirmish do not decide the meaning or purpose of a component.
[94:31.68] No.
[94:32.68] I mean, I, I love one of my favorite things, you guys, if you, if you want to work with,
[94:42.68] uh, against arguments with the whole frameworks standard thing, like if you want to do one thing,
[94:47.68] one thing that's fun to do is take a statement made like this, that says frameworks blank when it's in this web component thing,
[94:53.68] and then replace it with, um, standards or web components and say the same sentence back.
[94:59.68] Sometimes the results are, are, are, are great.
[95:04.68] Standards do not decide the meaning or purpose of a component.
[95:07.68] Wow.
[95:08.68] Right.
[95:09.68] I think, I think I saw one today.
[95:14.68] Um, uh.
[95:16.68] Uh, there, there's another similar one I saw.
[95:20.68] Let me, uh, view post engagement.
[95:22.68] Was there a, was it this one?
[95:25.68] Frameworks is all we need.
[95:27.68] Just one more and it will all be solved.
[95:29.68] I promise.
[95:30.68] Let's try this again.
[95:32.68] Standards are all we need.
[95:33.68] Just one more and it will all be solved.
[95:35.68] I promise.
[95:36.68] It's remarkable how well that works.
[95:39.68] Is it?
[95:52.68] No, I, I, I don't, I don't, not necessarily.
[95:58.68] I, I could, I could say maybe that a good completely isolated element is oblivious to the framework using it, but component being aware of the framework using it is how you optimize the crap out of things.
[96:15.68] Yeah.
[96:16.68] I, I like just because it's a component doesn't mean it lives in complete isolation.
[96:23.68] Maybe this is the difference between components.
[96:25.68] Maybe the definition of components from the web components standpoint is it's something that can live in isolation.
[96:45.68] So the only reason that I'm mentioning this, like swap the word thing is because a lot of times, even though the scope is different standards and much, you know, standards and the web component stuff, it's much broader scope.
[97:03.68] They're kind of in their own realm, trying to facilitate users in the same sort of way.
[97:10.68] So maybe the piece of the pie that frameworks are working on is smaller.
[97:15.68] Like it's like a, it's not like as wide of a scope in terms of thinking let's argue.
[97:20.68] It is still fairly wide when you're trying to build a general purpose framework.
[97:23.68] So a lot of times the things that you could say that would be of this nature, like holistically could equally apply because they, they like, if you step back, they kind of look the same from a shape perspective.
[97:38.68] Like if you were to give everything kind of a shape.
[97:41.68] Um, yeah, it was just, it was just, it was just, it was just something that I can.
[97:46.68] A good component is oblivious to other components, not the platform it's running on.
[97:53.68] Yeah.
[97:53.68] I like that.
[97:54.68] Yeah.
[97:54.68] Right.
[97:55.68] You want the isolation between components in that, that they, in the sense that they have intimate dependent function.
[98:05.68] Um, in terms of like dependencies in terms of like, you don't.
[98:10.68] Well, I think it's hard to say what you don't have to worry about happening on the inside or outside could also be defined like reactivity or something could be defined from outside your scope.
[98:19.68] It's, it's, it's, it's literally just about being able to be able to compartmentalize your thinking at authoring time.
[98:27.68] I would argue that makes components valuable because if you can step into an area of code and be able to understand enough of what's going on in just a small scope, that is sort of the benefit of, of components.
[98:44.68] Because ultimately it's going to run in conjunction with a whole bunch of other components can be part of a wider system that all interact with each other.
[98:53.68] It's kind of like assembly.
[98:58.68] Like when you, when you boil assembly code down, it's the most imperative instructional based, you know, all these things, everything's, you know, like the final instructions, that's a big mess of stuff that you probably can't make any sense of.
[99:10.68] But you write stuff in like C or whatever, and breaking into functions and breaking all these structures so that you can make sense of it until you can actually like put it as part of the bigger system.
[99:21.68] So in a sense, components are kind of like that, right?
[99:25.68] They're like a concept, like it's funny, like frameworks are kind of a concept.
[99:30.68] All of these concepts are actually more mental, like they're more for you for authoring, they exist so that you can organize your code, organize your thoughts.
[99:43.68] Rich Harris had a great thing about disappearing frameworks.
[99:47.68] And I guess I, I followed it up with saying disappearing components.
[99:50.68] It's actually this incredible parallel here.
[99:53.68] When you think about it from that perspective, because they're there for you, not for the computer.
[100:04.68] Right?
[100:05.68] Like, why do we need boundaries?
[100:07.68] Like the, the ideal state of the world of things would be if the computer could have everything it needs to optimize in the most efficient possible way, but humans are not computers.
[100:17.68] So we need abstraction, but we shouldn't think because of our need for abstraction, that should actually dictate the shape of, of, of what the computer needs.
[100:29.68] I mean, there's always going to be layers and layers of abstraction, but like, I think this is, this is kind of like, maybe kind of critical.
[100:51.68] Standards are not opinionated.
[100:56.68] I think this is a good thing.
[100:57.68] I think this is a good thing.
[100:58.68] I think this is a good thing.
[100:59.68] I think this is a good thing.
[101:00.68] I think this is a good thing.
[101:01.68] I think this is a good thing.
[101:02.68] I think this is a good thing.
[101:03.68] I think this is a good thing.
[101:04.68] I think this is a good thing.
[101:05.68] I think this is a good thing.
[101:06.68] I think this is a good thing.
[101:07.68] I think this is a good thing.
[101:08.68] I think this is a good thing.
[101:09.68] I think this is a good thing.
[101:10.68] I think this is a good thing.
[101:11.68] I think this is a good thing.
[101:12.68] I think this is a good thing.
[101:13.68] I think this is a good thing.
[101:14.68] I think this is a good thing.
[101:15.68] I think this is a good thing.
[101:16.68] I think this is a good thing.
[101:17.68] I think this is a good thing.
[101:26.68] Okay, the way opinions work, at least from my perspective is as when you have some kind of defined, I mean, it's hard when you're dealing with like standards or like a base platform, because the opinions are baked in like the most basic, basic thing is going to basically like assembly.
[101:45.68] Like, you know what I mean?
[101:46.68] Like there's, it can do, it can move some stuff around a register.
[101:50.68] Once you start abstracting out concepts, like, you know, classes that have a hair and stuff, you start having opinions of stuff, but at a certain point, like that becomes your new baseline.
[102:00.68] That abstraction becomes a baseline.
[102:01.68] And you can say like, this is a set opinion and that, but so the, the challenge is the farther you get away from the baseline, the more opinions you have.
[102:08.68] It's just natural.
[102:09.68] So the more ambitious, the standard, the more opinions it has.
[102:11.68] Now you could argue that once it gets brought into the body, it's not opinionated because it is the baseline, but by it's like it, it, you can't say that the decision made port is not opinionated.
[102:24.68] Standards are not opinions.
[102:25.68] So you cannot switch the term lightly.
[102:26.68] No, that's the thing.
[102:27.68] They are opinionated, which is why you can switch the term so lightly.
[102:31.68] That that's, that's exactly it, right?
[102:41.68] Yeah.
[102:42.68] I'm this, this is why we do this because there's a lot of rhetoric here that I, I do feel is kind of like, man, what are people like?
[103:03.68] What are people talking about?
[103:04.68] And don't get me wrong.
[103:05.68] There's a lot of rhetoric here on this side.
[103:06.68] There's also stuff on the other side.
[103:07.68] I, I, I just told you, I, I was like, I was actually like panicking during Theo's stream a little bit.
[103:13.68] He kept on being like, Oh, go on vacation around.
[103:14.68] I'm like, no, man, you were, you're spouting some stuff that I'm going to have to like explain later.
[103:18.68] Isn't true.
[103:19.68] Like about slot composition and stuff like you can do composition, you know, basic composition.
[103:23.68] That's not the concern, you know?
[103:24.68] Um, so I'm sorry.
[103:25.68] That's coming hard.
[103:26.68] It's just like Q and A is kind of directed us this way.
[103:31.68] Cause I, you know,
[103:32.68] there's opinions you can't disagree with.
[103:38.68] But these opinions are not biased by business direction or different vendors.
[104:00.68] Oh, really?
[104:01.68] They're not.
[104:02.68] Should we talk about Apple's role and web components and about closed and open shadow DOM?
[104:17.68] I mean, you gotta give me some, this is, well, this is sort of my, my problem with the rhetoric.
[104:21.68] Like I was like, is there a single, like, it's very hard to weed through it and find anything at even like, even like fat, like fat checkers.
[104:30.68] Right?
[104:31.68] We need fat checkers.
[104:32.68] Right?
[104:33.68] We need fat checkers.
[104:34.68] Like.
[104:35.68] Yeah, we need fat checkers.
[104:40.68] Anyways.
[104:41.68] Okay.
[104:42.68] Ryan states the sheer number of JavaScript frameworks is any indicator we are nowhere near consensus on how one should author components on the web.
[104:51.68] And even if we were a bit close today, we are nowhere near there a decade ago.
[104:55.68] Thing is, we don't need to agree on how to write components.
[104:57.68] We just need to agree on the underlying implementation.
[105:02.68] Then you can use class.
[105:04.68] I don't think, I don't think it means underlying implementation.
[105:06.68] I think it means on the API surface.
[105:08.68] Turns out we have a few very well known ubiquitous technologies that we chose to do this with HTML.
[105:13.68] Okay.
[105:14.68] Good call.
[105:15.68] This is something we hear about.
[105:20.68] I mean, I could talk about this.
[105:21.68] Negative fact, right?
[105:22.68] Premature.
[105:23.68] If the external parameter is standardization, well, it's a bit late for that.
[105:25.68] True.
[105:26.68] So let's figure out how to get from where we are.
[105:28.68] Fair enough.
[105:29.68] Yeah.
[105:30.68] They're not a one for one replacement or frame components.
[105:39.68] They're a gentle related thing.
[105:41.68] And I think a lot of these systems that we should really fix the definition component.
[105:44.68] Right?
[105:45.68] And then you quote some articles.
[105:46.68] So fundamentally the problem with webcones is that they are built in custom elements, blah, blah, blah.
[105:48.68] More specific elements.
[105:49.68] Components.
[105:50.68] Blah, blah, blah.
[105:51.68] Okay.
[105:52.68] I hate the term web component.
[105:53.68] Every web component person says that.
[105:54.68] And I'm glad that because that was part of the initial thing.
[105:57.68] We moved past that.
[105:59.68] I say web component because it covers the whole set of specs.
[106:02.68] But yeah, we can, we could just start saying custom element.
[106:05.68] Right?
[106:07.68] Because it competes the concept of framework.
[106:10.68] But what's, and that's what caught on, but most people are familiar with.
[106:13.68] Right?
[106:14.68] Sure.
[106:15.68] Button text field can be components, but there are other types.
[106:17.68] For example, many frameworks support concepts or render list components that exist in your code.
[106:21.68] Exactly.
[106:22.68] Not in the final HTML.
[106:23.68] Yes.
[106:24.68] I agree.
[106:25.68] So there's differences as to why components don't do all the things framework components do.
[106:28.68] That's because they're low level implementation.
[106:30.68] So basically this is arguing that they are just elements.
[106:33.68] Okay.
[106:34.68] So frameworks should be able to consume them like any other element.
[106:38.68] Frameworks are shiny.
[106:40.68] Yeah.
[106:41.68] Right.
[106:42.68] CS comforters, spider, sass, tight templators are spider.jsx.
[106:45.68] Soon we're getting signals from Preact.
[106:50.68] Yeah.
[106:51.68] Yeah.
[106:52.68] That's funny.
[106:53.68] Do you think the author was just being inflammatory or do you think, or do you think the, do you
[107:02.68] think he actually thinks this?
[107:07.68] Oh, man.
[107:08.68] Hmm.
[107:09.68] Oh, man.
[107:10.68] I mean, I mean, this, this, this, this, this, this does kind of show where like different circles
[107:28.68] live.
[107:29.68] Oh, yeah.
[107:29.68] As far as you guys are talking about, it is.
[107:30.68] Yeah.
[107:31.68] So they simply highly got rid of a bit of web components.
[107:45.68] Um, sorry, I, I, you guys know why I'm, I'm laughing at this.
[107:51.68] I mean, I'm not even going to give necessarily solid complete credit here, but like we were
[107:58.68] pushing signals as far back as this article.
[108:03.68] In fact, solid was released or like for five years before Preact or anyone else added them.
[108:08.68] I, you could say view.
[108:09.68] Maybe that would be fair.
[108:10.68] If you had something like signals.
[108:12.68] Um, but yeah, anyways, let's continue.
[108:17.68] Um, from all the, no, no, no, I, I understand that is the thing.
[108:32.68] I, I, I, I'm not having a problem with how it ended up there.
[108:35.68] It just, there was the claim that, um, that standards don't have opinions and aren't driven
[108:42.68] by use cases from companies and all that kind of stuff.
[108:44.68] I, I just, I just wanted to clarify that, you know, it's like a fact check kind of thing.
[109:01.68] Okay.
[109:02.68] So you're saying the opposite.
[109:03.68] You're saying your concern is that like a single company is driving, um, frameworks or a, a given
[109:12.68] framework, right?
[109:13.68] So they're basically like the success of first cell relies on next.
[109:17.68] So, or meta on react or whatever.
[109:22.68] And then like, essentially they, they, the, it means that their standard thing that they put
[109:28.68] out their framework is tailored to one specific need.
[109:41.68] Right.
[109:42.68] Yeah.
[109:43.68] As far as I know.
[109:44.68] Yeah, yeah, exactly.
[109:45.68] Okay.
[109:46.68] That's, that's better.
[109:47.68] I mean, there are a lot of frameworks like that.
[109:49.68] There are frameworks that aren't like that.
[109:51.68] Um, view spelt solid or all not like that.
[110:00.68] Um, but okay.
[110:04.68] Test ideas.
[110:05.68] Okay.
[110:06.68] Especially aren't supposed to.
[110:07.68] We need to stop being salty.
[110:08.68] Our way isn't the way that makes it into the browser.
[110:10.68] Okay.
[110:11.68] There'll always be a better way to do something, but none of us have the foresight to know what
[110:15.68] the perfect solution looks like right now.
[110:17.68] Good.
[110:18.68] Okay.
[110:19.68] That's fine.
[110:20.68] But we, we, we can, we can have the foresight to go, Hey, this is probably an area that we
[110:28.68] don't know enough about.
[110:30.68] We should slow it down.
[110:32.68] I think, I think, I think we can identify how we don't know the future, but we can identify
[110:38.68] places that are like, yeah, probably shouldn't touch that with a 10 foot pole.
[110:45.68] Oh, but he's saying, okay, I'm sure Ford could have made the Model T way better if they had
[110:53.68] spent another decade working on it.
[110:54.68] But do you know what made the next version even better?
[110:56.68] 10 more years?
[110:57.68] The feedback they got from actual users who bought them and sat on the road.
[110:59.68] Yeah.
[111:00.68] Right, right, right.
[111:01.68] But the difference of the Model T is a product, right?
[111:05.68] Like I, you could argue that those frameworks that are driven by a specific company are
[111:10.68] a product that you can use as feedback.
[111:11.68] Using the platform this way is, I don't think you get like, you can do it a little bit, but
[111:20.68] like you, you, it takes, it needs to really work lockstep.
[111:25.68] You know, I think one of the weirdest things about the web component stuff was, is I don't
[111:30.68] know that any framework was really involved.
[111:33.68] Like other than like, like maybe like something made from Google, like a polymer or a lid or
[111:39.68] something like, like we're like, Hey, like we're like with signal spec.
[111:43.68] They like, we're like, Hey, you guys are using something like signals or reactivity.
[111:46.68] How do you guys think it should work?
[111:47.68] Let's test it.
[111:48.68] Let's do that.
[111:49.68] I don't think that ever happened with, with web components to be fair.
[111:52.68] Maybe the frameworks weren't, weren't the target, but I like, how do you not have that conversation
[112:02.68] with the set of users?
[112:07.68] Yeah.
[112:08.68] I don't know.
[112:08.68] Do we ever take feedback though?
[112:08.68] I mean, I I've seen the GitHub things.
[112:08.68] I'm this.
[112:08.68] I always appreciate the enthusiasm of when I talk with people who are into standards.
[112:09.68] they share my actual enthusiasm.
[112:10.68] They share my actual enthusiasm.
[112:10.68] I don't know.
[112:10.68] I don't know.
[112:11.68] I don't know.
[112:12.68] I don't know.
[112:13.68] Do we ever take feedback though?
[112:28.68] I mean, I I've seen the GitHub things.
[112:31.68] I, I always appreciate the enthusiasm of when I talk with people who are into standards,
[112:37.68] they share my actual enthusiasm, which is amazing.
[112:39.68] Like they, they, they are, they are always trying to find a solution to a problem.
[112:45.68] They are always open to talk about it.
[112:48.68] They're always open to be like, like, what can we do better?
[112:52.68] Like there is this dedication there and real desire to see the web get to a better place.
[112:59.68] So.
[113:08.68] Yeah.
[113:12.68] Web standards offer a promise of stability.
[113:14.68] Okay.
[113:15.68] And we need to move forward to improve them together.
[113:16.68] Yeah.
[113:17.68] Using one's influence to rally use against the very platform you built your success on is damaging
[113:20.68] both climate community.
[113:21.68] Well, is it, was the purpose to be damaging or was the purpose to be bringing awareness,
[113:29.68] educate.
[113:30.68] Okay.
[113:31.68] Let's be more collaborative.
[113:32.68] Well, okay.
[113:33.68] Sure.
[113:34.68] That's convenient to say now, but okay, let's, let's be more collaborative.
[113:39.68] Imagine if we applied the same arguments against HTML early on.
[113:43.68] What if we never standardized it at all?
[113:45.68] Do I be a better place?
[113:46.68] No.
[113:47.68] Okay.
[113:48.68] We're off and blah, blah, blah.
[113:49.68] Would it be better for every site was flash or Java?
[113:53.68] That's kind of interesting though.
[113:54.68] I like the flashes brought up because sometimes I wonder if, if, if like, if we built a framework
[114:03.68] into the browser, if it wouldn't be just like flash again, like we'd get to a point where
[114:09.68] that's like, you know what I mean?
[114:10.68] Yeah.
[114:11.68] The Palmer team, which became the lit teams was founded specifically to work with the Chrome
[114:20.68] browsers on this back.
[114:21.68] Right.
[114:22.68] Exactly.
[114:23.68] I, what I'm trying to get out is like, it's probably funny.
[114:27.68] Cause if they came to web components and then the, I'm like picturing react team, 2013 or
[114:32.68] 14 time period, they're probably wouldn't been like, yeah, we're not interested in that.
[114:35.68] And, and that's probably the kind of thing.
[114:37.68] And then like, yeah, maybe that that's kind of the thing that the, the, the web components
[114:44.68] really kind of started, you know, getting through spec around 2000, like getting around 2011,
[114:48.68] 2012, 2012 time period.
[114:50.68] And to be fair, modern frameworks.
[114:52.68] Weren't really there yet.
[114:53.68] The ones that were like, like angular and that were probably like, eh, you know, we don't need,
[114:59.68] like, it wasn't something of interest.
[115:00.68] And so I, I, to be fair, I imagine that, um, the, the, this, like, it's almost like there was
[115:10.68] no interest there.
[115:11.68] So like, they're like some party wanted to see this move forward.
[115:13.68] So they were like, okay, let's move on because the like frameworks clearly don't care about
[115:18.68] this.
[115:19.68] Like if they just waited on that, they would have never, the web components never would have
[115:22.68] gone here.
[115:23.68] Interestingly though, if, if, if things had waited only a couple of years, we would have had a
[115:30.68] very different perspective on things.
[115:32.68] It just, it's one of those things that's hard to tell.
[115:35.68] Um, so yeah, I don't know.
[115:38.68] It's interesting.
[115:39.68] Yeah.
[115:43.68] Okay.
[115:44.68] But what component simplification incompatible with existing burns and there lies the existential
[115:48.68] problem.
[115:48.68] problem.
[115:49.68] It's incompatible.
[115:54.68] I mean, maybe not completely, but I feel like other than react and angular, which predate.
[116:00.68] there's, there's, there's, there's a lot of this, right?
[116:10.68] Why does view and, uh, and, uh, sorry.
[116:11.68] Svelte have slots.
[116:12.68] Yeah.
[116:13.68] Sorry.
[116:14.68] Where, where, where is the composition?
[116:15.68] I'm speaking specifically about slots.
[116:16.68] maybe not completely, but I feel like other than React and Angular, which predate,
[116:22.12] there's a lot of this, right? Why does view and, sorry, Svelte have slots? Yeah, sorry,
[116:36.44] where is the composition? I'm speaking specifically about slots, right?
[116:46.60] They pictured a future where they were all in the line with web components. If you're interested,
[116:53.24] why slots kind of fell apart, like my point here, it's actually eager versus lazy.
[117:01.24] Web components, why I don't use web components? I'm going to bring up Rich Harris's thing,
[117:16.52] because this is actually one of the, this example is still relevant. Toggle, what he pointed out here
[117:22.84] was that even if this was not like, pretend this is a show component. Actually, you know what? I might
[117:32.92] actually, I might have actually written this one somewhere. Let me see. Web components are not the
[117:36.68] future part two. I wrote a really long article, then I decided not to publish it. Let me see if I can find
[117:44.52] the section on composition. Yeah, yeah, here we go. Picture we had a quote like this. Toggle x,
[117:52.76] when false, slot, fallback, hidden, my cool content, content, toggle x. I'm showing this in JSX,
[117:59.08] but it doesn't really matter the template. My point is, when this is false,
[118:06.12] this still gets rendered. To be fair, in React, the VDOM nodes for these are still created.
[118:17.00] but they don't go in and render this, because, well, I guess React, like, I guess it's an interesting
[118:28.28] one, their example, because then they become props.children, and then if they never get
[118:32.52] inserted. But my whole point is, it's like, essentially, using layouts like this, like components as control
[118:39.32] flow from a composition standpoint, it does not, like when I say composition, I mean like projection.
[118:44.60] I don't mean like, you can put web components and web components and web components, but using it as
[118:49.00] like a layout control flow mechanism, doesn't really work.
[118:59.80] Well, too early for eager versus lazy. Okay, fair enough.
[119:05.24] Right. I just, I just, this seemed like such a small side point, um, that it was just interesting.
[119:15.24] It's just like, it's very common when you abstract stuff away to like, you know, the collapsible
[119:21.96] card and all this kind of, kind of thing to have a situation like this, where you don't actually want
[119:26.92] to render the content inside here, but composition doesn't work. So it's funny, view and Svelte,
[119:33.32] especially Svelte, I think originally actually followed web component spec and eagerly rendered the
[119:37.24] children. And then it's felt, uh, they, they, they, they did like a breaking change release.
[119:42.92] They'd be like, look, we finally fixed this because this is really weird that you can,
[119:49.56] you know, basically pass children slots that are never rendered and have them render.
[119:54.36] It just doesn't make sense. It doesn't, it doesn't work with, with our model.
[119:59.64] Right. You can use a template today. Right. Um, right.
[120:04.76] Right. Which I actually get to here in the next section. Right. Um,
[120:08.04] it wouldn't be rendered unless there's a slot name content. Well, no, it would be because it'd be in
[120:17.16] the light dom and it would get rendered even without the slot name content being present there.
[120:23.40] Because when you pass this in, it doesn't care. Um, if it's slotted or not, the light dom always exists.
[120:33.80] Oh, you're supposed to use a template. Yeah. Okay. Let's, let's get the template. Okay. Why not?
[120:37.96] Um, yeah, I mean,
[120:42.04] I mean, because I was playing with this, like, how do you do like a map component? That's a good one.
[120:47.24] Right. Cause you could, you have like a render prop. Right. Where you could like do it like through
[120:51.96] there. Um, and I, I don't know, maybe this is how it suggests it these days. Like you can do like a map
[120:57.64] function. I'm not sure, but the other way, um, is a template element, but how do you do interpolation?
[121:04.76] Like how do you get this item here into this item here?
[121:11.16] It wouldn't be rendered if there's no slot. Daryl is correct.
[121:17.88] Okay. I mean, this is fair. Is this something that has changed? Because it used to be, because I,
[121:27.16] the, the reason that I was aware of this is for the same reason. So you're saying that
[121:34.76] Oh, I see. You're saying that the connected callback,
[121:36.92] it would never be considered connected. Can we actually verify that? Cause this,
[121:42.20] this doesn't actually sound, does that actually, you're saying that if it,
[121:46.44] it's connected callback wouldn't happen because it's in the light dom, right? Like,
[121:50.92] is this something that has changed is what I'm saying. Cause I have definitely agreed with it.
[122:02.92] Okay. Okay. Well, can we, can we do this? Let's do this.
[122:09.40] I mean, I mean, we would have to, I'm trying to think of how to the easiest way
[122:17.88] to actually, cause then I have to like write custom element code off my, okay.
[122:22.76] Yeah. So when I say render, I don't mean visible. I mean that the, that like, does the connected callback
[122:33.56] the light dom children of an element with a shadow dom root are not rendered in the component tree
[122:37.24] unless the slots are visible, but are they murdering the country unless the slots for them to go into?
[122:43.88] So, because I,
[122:49.88] okay. Yeah. It will not be painted. Sorry. I'm using react term. Like what I mean is I could go into the
[123:00.20] Chrome dev tools and see the light dom children that were not in slots in the Chrome dev tools,
[123:06.04] not inserted in it. They would not visibly be there, but the actual element would exist and,
[123:12.12] and it would actually like be an element, right?
[123:23.32] I just want to double check this because I understand it's not painted, but like would just,
[123:29.72] just to clarify here, would my cool content constructor run if the slot for content wasn't inserted?
[123:45.00] Okay. Then that's, that's exactly what I mean. Yeah. Yeah. It's like, yeah, sorry. This is my fault.
[123:57.32] React has messed with what rendered means. And I, I even have to be careful on the solid side of not
[124:02.28] messing with that. Um, I don't mean physically painting it. I mean that like the code runs to like,
[124:11.80] like, like react calls rendering when you execute your component.
[124:15.08] Yes. Yes. This is, this is, this is, yes, sir. So we're in agreement. I am not misunderstanding it.
[124:27.88] Well, I don't mean paint. I mean that it literally like runs the component. So yes, me and Rich are not
[124:36.20] mistaken here. Okay, good. Um, right. So yeah, back to that sidetrack effectively. What they're saying
[124:49.88] is it doesn't get painted, but it does like, it'd be like if I've went like show when
[125:01.32] false and solid for people who are familiar with solid syntax and yeah, let me show you. And then
[125:10.84] if I went in here and I went like my component and then I went over here, I went like somewhere else.
[125:19.24] I was like function. I just, I just want people to really understand what I'm getting at console log
[125:30.52] alive. This would console log alive in the, in the, in the web component world, because even though
[125:40.92] this was not inserted in the view, like you would not see return h1,
[125:46.92] you know, you wouldn't see like alive, you wouldn't see this dom element. This would get console log.
[125:59.80] You say it's drifting away, but I mean, this is an exact ex you wanted a concrete example of,
[126:05.48] of, of, for example, why, um, you know, as a component, I mean, this is a good example of why
[126:12.28] framework components and UI components are different. Right. Which is, which is to the point. I just,
[126:16.76] I just wanted to kind of like this I can talk about now and now we don't have to come back to it again,
[126:23.64] essentially. Right. So how do you handle this? You can pass as a function and use JS, like as a prop,
[126:29.88] kind of way of handling it. You can also pass in a template element, but if you pass in a template
[126:33.64] element, you have to figure out how to interpolate over the values.
[126:43.96] Yes. Because of eagerness. Yes.
[126:45.32] Right. Um, but yeah, I, I just, it is possible, but I mean, this suggests that maybe we need a
[127:00.92] different standard to handle templating that is different, or just don't use this pattern,
[127:05.96] but you understand what I'm getting at. If you have a list of items and you have to render the item into this
[127:09.72] item, you need a way of expressing that. And the template both needs JavaScript to like,
[127:14.84] because this getting inserted into the component won't work. You have to like, I forget what the API
[127:19.16] exactly. There's a slot inserted slot or some kind of API around slots. I built control flow components
[127:25.16] in web components before, and you grab the, when the slot came in, you'd look for it. And then I grabbed
[127:30.20] the template element. And then I would, um, then, uh, take the inner HTML and then I would parse it.
[127:39.16] And then I'd replace the interpolation with the key that was passed in from here, from with my own data
[127:44.44] item. And then I would, um, have that, um, to like update the template and then insert that into the DOM.
[127:54.20] Right. Yeah.
[127:56.44] So what does this mean? The show example is odd because most would do the one, the B.
[128:12.28] I don't understand what that means when the B.
[128:15.08] But yeah, I, I, I just like, there is, there is template elements are good. If you have a template,
[128:25.48] um, language. Oh, backend. Yeah. I mean, in a simple case, but, uh, I mean, God, do I have Hacker News up?
[128:36.12] Was it solid start Hacker News? I don't, I mean, I don't know.
[128:51.96] I don't know. I mean, no, I mean, there's, what if the items update?
[129:04.92] Yeah, I, I guess like,
[129:13.48] yeah, I mean, maybe this.
[129:17.24] Yeah. I'm just doing a server and then, yeah, but if, if it needs to update.
[129:41.56] It doesn't change anything.
[129:42.76] Yeah. Okay. Yeah. There's a native element for that, but I, yes, obviously the native element,
[129:52.12] but you understand why that's beside the point.
[129:53.72] I'm, I give a simple example and then you can use your imagination to think about how it extends.
[129:59.64] This is very common, right?
[130:02.84] Layout components, things that do, you know, have conditional thing. Like to be fair, maybe this is
[130:09.80] in that zone of stuff that is framework component only, but for this specific thing, I'm, I was actually
[130:15.96] saying web components for framework components. Um, this is, this is just one of the places, for example,
[130:22.36] where we realize that this is not a good fit, right? Just, just put it out there. Right.
[130:37.24] Yeah, of course. Right. But the whole point of making compositional API is so that you can make my dialogue
[130:47.16] or my details, right? Like, yeah, I, I call this the property of like, uh, what is it called?
[130:53.56] Like, uh, the adipotent property. Like it's the, it's the test I put through all my primitives when
[130:59.40] building stuff like it's solid. You should be able to, if there's a signal, there should be my signal.
[131:03.32] You should have a way that at least using the primitives, you can, if something's truly composable,
[131:08.84] it should be able to be able to make the same version of itself as the native version using the same
[131:14.44] basic syntax, right? Examples of things that aren't if statements are for loops in JavaScript,
[131:19.48] right? They are syntax specific or like the handlebars, helpers, and Svelte. But like solids for
[131:26.68] component can then become my for component and without changing the difference, you know, it could be
[131:33.96] paginated list. Uh, the idea of composition is that third party and first party, you know, like this
[131:40.92] property of composition is first party and third party look identical. So I, I don't think it's
[131:44.84] enough to be like, oh, but there's an element that does it. No, but you, you should be able to make
[131:49.80] my details. And that's the, that's, that's the key part.
[131:53.08] Yeah. Okay. Yeah. Right. Exactly. So this is why I'm separating the, the stuff apart. Web components as
[132:05.56] framework components. This is, this is a place where like, you know, there might not be that many
[132:11.88] grievances there, you know? Um, anyways, let's, let's continue here. Um, yeah, you can understand
[132:19.16] like, yeah, anyways, let's, let's continue on. I don't go all of threat. Okay. Uh, okay. So from,
[132:27.48] is it compatible with existing frameworks? There as lies essential probably. I only really brought this
[132:31.00] example was because I was saying there's a point at which we were compatible and we actually diverged
[132:35.16] because it didn't make sense. Okay. Um, just putting there web components are a threat to the peaceful
[132:42.20] priority. We have like frameworks that have mass families use the majority of web dollars because
[132:45.08] opinions are very so widely new standards of merge farmers can often adapt to them without breaking
[132:48.52] changes. Okay. That's, that's fair. Um, breaking changes can be detrimental to user base. Okay. Like
[132:55.48] to be fair, it's, it's less, I think a lot of the breaking changes, aren't there just like we're
[133:00.84] slowly develop understanding more and more over time, just where the gaps are. Uh, a lot of these
[133:05.80] haven't actually changed. They're just like, like interesting behaviors that we didn't recognize
[133:10.52] at first, like import versus clone node. You've probably, how about the champion web standard when
[133:16.60] you build a non-standard thing that will break if you align with emergency standards? Yeah. I don't
[133:19.64] think that's, but that's not, I don't think that was, I don't think this isn't, as I said,
[133:23.88] is it's not a fair incentive if you were trying to build on web components in the first place.
[133:30.04] So yeah, don't do anything still. They don't do everything a framework does. How can a platform
[133:34.60] possibly add all the features? Yeah. It's fair. And no platform moves as fast as your framework.
[133:37.96] That's also fair. As users, we need to go with this hurdle and start thinking about how
[133:41.08] frameworks can adapt to current standards and evolve the new ones. Yeah. So, so from the spec and
[133:45.56] work together. Okay. Banting the wheel isn't the answer. Lock-in isn't the answer. Okay. I don't know.
[133:49.48] This is why I don't believe that we'll converge on custom modes as a natural component model.
[133:53.40] Um, and that's the middle sprinkling. Okay. Right. Interestingly enough,
[133:57.08] it's not the next generation. It's actually the last generation that tried to converge on them.
[134:02.04] Maybe it was too early, you could argue, but I, I, I think the problem with this line of argument
[134:07.08] is it's assuming this hasn't actually already happened.
[134:18.76] the problem with this. Okay. Right. So in a sense, there's nothing wrong with web components as they
[134:33.88] are able to do, be what they are. It's a promise that they are something that they aren't that's so
[134:37.16] dangerous. The way their existence warps, everything around them, it puts the whole web at risk. It's the
[134:40.28] prices everyone has to pay. So I'm just, aren't the specific vision you had for the components. Okay.
[134:43.64] It's fine. That's how it is. They're not solid components in our reactor view or whatever they're
[134:46.92] web components. And they could work even better if all of the above were interested in advancing
[134:50.76] platforms, sort of blocking users and not interested in locking in users. Can, can, can we talk about
[134:56.68] that for a second? I think most framework authors understand that their framework will not be the last
[135:03.72] framework. Right. I, I, I was being a little bit with this, you know, flop, but let's hear it won't
[135:11.72] ever be solved. That's the point. Yeah. You know what I'm talking about here? Frameworks need one more
[135:15.48] to be solved. It, we understand innately that this is a hard problem that shifts over time. So I don't
[135:24.84] think that there might be some that are incentivized, but that's, I'd rather see a good solution come up
[135:33.40] than, you know, and be better than, than solid succeed ultimately. Right. Um, I, I think we've
[135:42.52] already had a positive impact. I think we can continue to have a positive impact, but ultimately
[135:47.48] I'm here to make, to basically see how we can make building on the web better. So we're, we're not that
[135:55.24] different in goals. I, I, I don't like this lock in suggestion. I think it's easiest think, take the position
[136:03.08] as lock in, because I want any solution on the web to be able to maximize its potential. Right. So like
[136:11.40] there is lock in, if you want things to be better.
[136:24.12] To be honest, since the beginning of last year is only really possible to probably build things with
[136:32.60] webcoms. Do you think so? I don't think so. I, I mean, I built shadow Dom, um, poly fills and they were a
[136:39.24] headache, um, early days and component wrappers and did all this stuff. But when I built that, that site
[136:45.00] back in 2013, 14, um, I actually. Got us to migrate from V zero to V one, um, through abstraction layer.
[136:53.16] And I built the whole thing up. Web components were fine. I mean, we hit some performance issues at the
[136:57.56] extreme when we're using them kind of like framework components to do like feed cards that like we got
[137:01.72] like to the point where we had hundreds of web components and nested in other hundreds of web
[137:05.64] components doing like complicated kind of calculations. And like, like, you know, like in any, and we hit
[137:11.80] like a little bit of overhead there, but I mean that some of that overhead was from using knockout itself,
[137:16.20] you know, um, the development experience was fine. Um, I, I don't think that you like, this is a new
[137:27.72] thing. I think people have been able to use web components for years, especially around 2018 when
[137:31.56] that kind of, kind of came around round. You have to understand like in the early days when you couldn't
[137:35.80] use web components as much poly fills and stuff missing in the browser, everyone was already used to
[137:40.36] having to deal with those gaps in the browser. Like I told you, I, you know, patching promises in IE11.
[137:46.44] So like we were used to a build process that involved a lot. So you could argue that people
[137:51.72] who start with web components today have a much easier job because they can be just like, kind of
[137:54.92] come in and just stick them in. But if you were willing to take the build tools on, take the runtime,
[138:00.28] kind of do the whole thing, you've been able to build quite nicely with web components for about a
[138:04.76] decade, um, you know, build good sites with them. It's definitely a choice or an option.
[138:11.08] Yeah, yeah, yeah, yeah, yeah. Oh, I, I know about that. Um, I, but, but they, they added batching by, uh,
[138:27.72] by 3.1, I think it was, which is like 2013. So like, by the time I'm talking about batching,
[138:34.20] I I'd already kind of got all the batching stuff taken up. Yeah. I, I mean, I'm performance nut on
[138:38.76] these things. Um, yeah, no, knockout definitely had its things. Um, yeah, let's HTML can work on it,
[138:51.16] but I'm talking about composability, uh, as like a component, as a, as a concept or composability,
[138:57.48] you can all, you can handle it in the templating. That's fine. Um, but like conceptually as a,
[139:01.80] that's like, these are my components and following that, uh, what do you call it? Um,
[139:05.96] id potent property that I talk about, um, it, it fails the test.
[139:20.36] Yes. I think there's a truth there. Or are concerned with perfection. Users somewhat less
[139:27.64] and more interested in stability because perfection in the domain in the app,
[139:29.80] they're building somewhat defensive stability.
[139:33.96] Yeah. I, I, I think I can, I, I can get behind this, right? We're always seeking to make things
[139:39.32] better. We are concerned with stability though, because that's how we lose users. So you can argue
[139:45.72] that there is a bit of a lock in factor, but the degree which frameworks are concerned with stability
[139:51.00] probably might tell you, you know, the degree to which the, the walk in theory is, has any merit.
[140:07.40] Yeah. Yeah. Yeah. 3x. Yeah, exactly. Yeah.
[140:09.48] Yeah. I mean, we, I'm not saying that they, you, I'm not saying they can't involve, but you're usually
[140:20.52] stuck with the principle. Like you kind of going like, this is a space that we think, for example,
[140:26.68] the shadow dom, so we could improve how the shadow dom can interact with this thing. But once you've kind of
[140:33.24] decided that this is the realm of solution, you are a little bit stuck. And, and, and then on the flip
[140:39.64] side, like if standards didn't evolve, then like, then other stuff wouldn't evolve along it. Like they,
[140:45.72] of course evolve, which means that libraries update, which means stuff updates, which means that like,
[140:50.92] while it's always backwards compatible, it's not the way you would always want to write it. This,
[140:55.80] as I said, sometimes these examples are the things that I think React developers can get
[140:59.80] instantly. And I, I feel like, I don't know why it's like missing sometimes when I talk to people
[141:03.16] on the web component side, cause it's like, like re you know, let's pretend react is completely
[141:08.68] backwards compatible, you know, back to 2013 or whatever. Right. You still wouldn't want to write
[141:14.84] an app today that way. And the same thing's going to happen with web components, even if the
[141:18.92] interfaces supports that are standard and stuff, people are going to be like, yeah, that's, that's,
[141:23.56] that's how I used to write web components back in 2018. You know, like this, this is human nature.
[141:29.40] This isn't something that you solve technically.
[141:32.12] Well, I mean, the interesting thing about this is why people are fighting for putting templating
[141:43.48] language in, but I think, I think, I think at least everyone can understand what putting templating
[141:47.96] language in is, is a loaded, like one of those like touchy places. It's an example of one of the
[141:53.08] places that JavaScript frameworks can't agree on. It's very opinionated. So this is very tricky. And
[141:58.28] some of it are for like aesthetic reasons. Other of it are mechanical reasons. Um, God,
[142:03.56] I saw someone share something other day. Sorry. I'm going to, I'm going to pull something up. Uh, it's
[142:08.52] just, I was in the web component discord and someone shared something and I, I almost threw, I, I, I was like,
[142:14.76] oh my God, not, not again. Where is it? Where is it? Where is it? Where is it? Where is it? Um, I'm not going to put the whole thing out here, but, um,
[142:21.16] um, where is it? I was just like, oh, this, yeah, I think I found it. Here we go. Just, just kind of
[142:32.20] an example. Templates, a declarative JavaScript templating API by Justin for those who aren't
[142:38.52] aware. Um, you know, I think the author of lit or whatnot. Um, I don't know if he's the original author,
[142:43.16] but he's like the lit guy. Okay. Talking about template parts and all this stuff. Right. You know,
[142:48.44] and basically what he suggested is that HTML elements should have HTML. So let's build lit
[142:54.20] into the framework, basically like into the browser. So now you have an HTML tag and you can do this
[142:58.60] interpolation. Obviously this doesn't help us with our template element problem. I think right off the
[143:03.72] bat, unless the, unless we could have the template. Oh no, I guess the template elements would create
[143:08.60] template parts and then we could like get there. So that's fair. Um, but the idea is basically HTML dot HTML
[143:15.96] tag and then talks about different bindings and fast essentials. Sounds great. Right. Okay.
[143:20.68] Let's keep on going. How does this integrate with signals? Thank you, Eisenberg effect for,
[143:25.08] for, for getting in there and asking about this. Um, fast work a bit differently, even though the
[143:30.76] tag template little part looks the same, the fast state is backed by signals and bindings are live.
[143:34.20] So there's no re-render stuff. That's what I like to hear. Right. Right. Which is completely different,
[143:41.08] I think then how lit does it, which is more like pre-act where they can maybe sometimes optimize
[143:45.56] certain things, but conceptually they do a re-render model. I was just about seeing those. I think it's
[143:49.40] a great place to start. You still buying that place to be bill without a full re-render. Okay. That's cool.
[143:53.96] But not every state in the pages ever be single size thing. One of the concerns I have here is like,
[143:58.36] how do you recognize a signal to signal? Um, I guess a compiler could get in there. I guess if you could
[144:04.28] just get the output, I mean, this is interesting. Um, things go on initial HPL, but I got here.
[144:09.72] I'm concerned, but I'm not sure where it belongs. Okay. Uh, null books involved a lot with a single
[144:14.52] spec also involved, uh, with Ember community. Um, blah, blah, blah. How do you try to react in here?
[144:23.64] Which is great, but this isn't my concern as always. So you have a situation like this. So I mean,
[144:27.24] the same rendering for the thing. We can't rely on consistently render reactive data unless we pass blah,
[144:30.92] blah, blah. Okay. So a lot of details here. I'm glad people are discussing
[144:33.96] about this. Um, computers are not sure when necessary. Maybe I just probably memorize expensive
[144:38.28] calculations. We require major change of JavaScript via TC9. Good. Okay. Got a lot of details.
[144:45.88] Detail part wrapping, render integration up. Yeah. Getting back. What if we could introduce
[144:53.64] idea of lazy evaluation and detect a couple of details? I like that. Okay. We value blah, blah, blah.
[144:58.44] Take advantage if we could change to blah, blah, blah. That's good.
[145:03.64] All right.
[145:06.36] Okay. Well, I'm glad the conversation is going. This is, this is like, the funny thing is if this
[145:14.04] conversation hadn't happened previously, um, in a different time period, I don't think,
[145:19.24] I don't think we would have kind of got here. Okay. Little Dan,
[145:23.48] singles champion, agree to others concerns that the signals template literals make a poor fit for current
[145:28.52] semantics because signals naturally want expression to be evaluated separately and potentially multiple times.
[145:33.32] I actually think that tag template literals are a great fit with signals because tag template literals
[145:40.28] are so cheap, they reevaluate. That's not the response. The handler of the template literal
[145:46.04] can literate through the values and also keeps checkpoints changed.
[145:48.04] No. No. No. No. No. No. No. No. No. No. The answer is do it like lit?
[146:04.44] Well, I mean, fastest way to render the DOM. Let's, let's, let's, let's, let's go here. Where does doing
[146:12.92] it like lit get us? I tested all the different rendering methods and compilers back in 2019.
[146:19.00] Fortunately, these things haven't changed very much. Vanilla JS, solid signals, Dom C, which is like this,
[146:25.24] like dirty checking, uh, string diff approach, which really fast solid with stores, which is proxies
[146:31.88] surplus. This is like solid, but instead uses create element as the clone node. Solid lit. This is solid
[146:38.12] using tag template literals with clone node and fine grained updates that doesn't re render the template.
[146:42.52] Eevee. This is a fastest virtual DOM library. Inferno, a very close virtual DOM library. Solid
[146:48.84] hyper script, which is like our, like use react style JSX and then lit. Okay. Um, you can read the article
[147:00.84] if you care, but my point is like, yeah, we, we need to be careful.
[147:18.84] It sounds like react 2015 because it's exact same mentality.
[147:30.04] It's react in the browser. We're getting there, but like this, this is, this is, you asked me about
[147:38.92] stuff being dangerous picture. If we couldn't, we couldn't pull the stops on it. Like, okay.
[147:48.84] Okay.
[147:49.24] I mean, I, I, I sometimes worry that there's like this hidden, maybe it's not hidden,
[148:04.92] but there's like this manifest destiny thing. And I don't want to get political here. Um,
[148:09.24] but have you ever heard like from this, from the like river to the sea or whatever? Um,
[148:15.00] I sometimes worry because the team, they said polymer and then later lit was basically built
[148:30.36] to work with Chrome spec teams to build web components. They basically built a framework
[148:34.92] and then are trying to get their framework in the browser to be the winning framework.
[148:40.12] They talk about walking, but like, it feels like, like, like there's this goal that like,
[148:49.72] you know what I mean? Like they don't care if it takes, you know, 10 years or a hundred years.
[148:59.08] Like the long-term goal here is that the chosen one, you know what I mean? Like
[149:17.16] yeah. Anyway. Okay. Sorry. I diverted way too far on this point. Let's
[149:36.20] web standards. Don't give a monetization. Okay. If you build an empire on top of something,
[149:43.96] there's absolutely zero incentive to tear down the betterment of humanity. That's not how capitalism works.
[149:47.96] This is so prime. I'm reading this out of context, but it's, it's like, it's so,
[149:55.00] it's so funny. Cause like you painting the frameworks as the big bad when like, like at least myself or
[150:05.08] stuff like a couple people doing open source. And then when you think about the drivers behind
[150:13.24] web standards and like, what I just, even what I just showed you in terms of like bringing our
[150:17.32] framework into the browser to lock it in. Yeah, this is so funny out of context. Anyway, sorry.
[150:24.44] Talk to the line here, webcodes policy pose the base of the future. Of course, this from the
[150:30.20] framework author, not that people usually shipping, maintaining software built with these frameworks,
[150:33.64] people actually shipping software are the majority, but not really as high follower,
[150:37.08] the people actually shipping software entire framework turn. They're tired of the
[150:39.80] they wrote last month being outdated already. Okay. They want stability. They want to know the stuff
[150:43.40] the building work tomorrow. Okay. As I mentioned already, they're tired of the they work last
[150:48.52] month being outdated already. That is the universal human tech condition has nothing to do with your
[150:54.76] choice of web components or not. Has it proven? No framework can promise that. No,
[150:59.56] nothing can promise that. Anyways, you know what framework I want to use? I want to use framework
[151:03.96] that aligns with the platform, not one that replaces it. I want a framework that values incremental
[151:08.68] innovation over user lock-in. I want a framework that's okay to break things if it means things,
[151:13.72] web is a better place for everyone. Yes, that comes to the cost, but almost every good investment,
[151:17.32] I would argue that the cost will be less expensive than learning new framework,
[151:19.72] revealing buttons umpteenth time. Should I send Corey my article? It sounds like it's the framework he's
[151:27.08] looking for. Let's keep on going. The web platform may not be perfect, but it continuously gets better.
[151:33.96] Good. I don't think frameworks are bad, but as a community, we need to recognize that the fundamental
[151:37.56] piece of the platform has changed and it's time to embrace the entropical component model the web
[151:40.76] components have given us. And even if that means breaking things, the component war is over.
[151:59.24] Yeah, I actually wrote all this.
[152:08.44] I'd say the churn got so extreme that it's severely affecting quality of end users.
[152:13.40] But who's driving the churn? Is the React team, like don't get me wrong, stuff like RSCs
[152:20.12] are a big change, you know, but they're like a once in a decade kind of change.
[152:26.20] All the React stuff up to this point... I mean, I guess hooks. You could argue...
[152:32.28] Yeah, I mean, five-year cycles. Sure. But like...
[152:37.96] I don't think anyone forced the churn. People have FOMO about stuff because of the way we push stuff.
[152:46.04] You could just stay on your old technology and be fine with it. Like you don't need to invent a
[152:53.24] mechanism to let you stay on your old technology.
[152:55.40] The compiler will help you. I mean...
[153:03.56] I really... We'll talk about this more, but I really don't want any assumed behavior from signals
[153:15.00] attaching to the DOM. In a sense, they are effects. And because of effects scheduling,
[153:20.92] and because of like async transactions, because of a whole bunch of technical details,
[153:25.40] in terms of... And these are things that framework authors haven't decided on. We haven't consolidated
[153:29.72] on. We're still exploring. I think it is incredibly dangerous if we assume any presumed behavior from
[153:35.80] signals directly tied into the DOM. I think we should... In the same way we avoid effects in the spec,
[153:42.60] we should avoid thinking about putting stuff into the DOM anytime soon.
[153:46.12] Security updates are a thing. Yes.
[153:59.96] It's so funny about these... This is the funniest thing... I feel bad coming to these meetings because I
[154:10.28] usually just like kick the stuff to crap and just be like... I don't have the solution yet and I don't
[154:16.36] think we all have the solution, but we're like way, way, way, way, way too early to try and like decide what
[154:21.88] that solution is. Like not even remotely close. We're still discovering the parts of it. Like slow
[154:28.20] down. You guys are 10 years too soon. And I know that's brutal because it doesn't get you to your goal,
[154:32.44] but like maybe not 10 years, maybe like seven, eight years. Signals are... The baseline of signals are
[154:39.88] finally getting to where... Yeah. This is... This is... Yes. Yeah. Just so I can provide feedback. Like...
[154:47.64] Yes. I... Yeah. This is... This is... This is what... It seems it's fun...
[154:55.56] Stay on old technically. Tell that to recruiters. Yeah. I mean, maybe the whole industry is pushing
[155:06.20] people this way. Right? But like... And don't get me wrong, but like the reason... There's a difference
[155:15.00] between React 20... Like the difference between React 2015 and 2018... I'm talking about like the area
[155:22.44] between when React went prime time and React right before hooks. The difference true in that time period
[155:28.52] was still extreme every single year, but it had nothing to do with what React was shipping. Or very
[155:34.52] tangentially. It was just literally driven by people and patterns and stuff. So like... I don't...
[155:39.32] This evolution is independent of setting the spec or framework. This will happen regardless of which way we go.
[155:46.20] Right? Like...
[155:50.36] Yes. He's saying... Exactly. He's saying recruiters in the industry, the problem, not the framework. Yes.
[156:01.40] That's... That's what he's saying.
[156:02.36] Okay.
[156:05.64] Sorry. That... That wasn't probably the best use of time. I... It just... I wanted to get a... Like a... A certain
[156:22.52] perspective. I'm going to go back to my... My original article here, because I think we need to fill in some of the
[156:27.80] blanks on our table. Because... I... A bunch of people read this and they were all like...
[156:33.88] You know, I'm hoping people who watched the stream have read the article. But a bunch of people read it and
[156:39.64] they were like... Right? He's not saying very much. And every section I say something very important,
[156:44.60] but it's not like... People were looking for something to argue against. Some kind of thing to pick at.
[156:49.48] And it was hard because every section would be like... You know, okay. Webcoms are the biggest
[156:54.04] risk of what I can see. Conclusion. This one.
[156:55.64] I... It says portal interrupt the web. One mitigated future need. One sets. Future. Right? Compelling. Right?
[157:01.32] This is exactly what the promise of webcoms are so alluring and so dangerous. Okay. So...
[157:04.36] Didn't say very much in the intro.
[157:05.56] But... A lot of these things, I just bring up some anecdotal story. Just so people can get in the right
[157:13.24] mindset. The only place that I actually talk about the actual technical costs in this article
[157:17.72] is in here. It's this one section. And I think there's like four points. Rich Harris,
[157:25.48] thankfully, went in great detail about them on Twitter, which is cool. I was away and it was very
[157:33.64] helpful for him to explain stuff. Because I said stuff like one-liner, like... Dom elements can be cloned,
[157:41.32] but custom elements have different behaviors, which means they should be imported instead.
[157:45.08] I didn't explain or show people code what I meant there. This is the whole clone node versus import node
[157:50.20] thing. Like, I'm very brief in my technical explanation of the whole realm of solutions and problems here.
[157:57.96] So...
[157:59.48] Yes, I am sorry. I am getting into that now.
[158:11.32] Did you ever charge with them? Yeah, I mean, we can't... I feel like this alone suggests why it's
[158:33.96] hard. If you're touching in this realm is really hard. If we can't do that, the platform is hopeless, too.
[158:39.64] I do appreciate people working on standards that they nudge us in the right way a little bit.
[158:44.68] And they're like, let me see. Is there something here, there? Like, is there something that we can
[158:48.92] agree on? That's what they do best. And sometimes they can find those pieces. But I mean, a large
[158:54.28] part of my working and stuff was solid. And on the personal side was I was trying to get framework authors
[159:01.56] together. I don't know if it worked. But a lot of stuff I did the stream, a lot of the stuff, I noticed
[159:06.76] that the different camps weren't talking to each other, and that they weren't sharing information. And
[159:11.56] there's a lot of misconceptions of, like, all the framers are kind of the same, which is why it's always hard.
[159:18.60] Like, there are differences and, like, nuanced pieces. But, like, high level, you can say stuff's
[159:25.64] kind of all the same. And I think it needed... I think we needed to kind of get to a place where we
[159:32.52] could have those kind of conversations. So in a sense, I appreciate the work being done to a lot of
[159:37.48] people in standards because they do try and facilitate those kind of conversations. Sometimes
[159:41.40] conversations are too early, and they keep on, like, pushing at it, and you're just, like,
[159:44.44] not the right time. But, like, I know the good intent is there.
[160:06.60] That's the proving point. Is most of them wanting one solution for all frameworks using
[160:09.72] a specific use case with heavy room and expect to use the pick framework to depend on the use case?
[160:12.76] No. It's not quite like that. Most of these frameworks are actually general purpose. They
[160:17.56] don't expect it for a specific use case. They might prioritize certain situations, but they actually
[160:22.04] aim to be very wide, almost like the platform itself. The difference comes in, as I said,
[160:28.20] people have different opinions of what should be prioritized. People have different
[160:32.68] visions of what it should look like. It's not that...
[160:35.72] In some cases, they're like, okay, we're slightly better at this and that, but no one goes out to
[160:41.24] a greater framework to not be good at everything. I know that seems weird. I mean, Astro said,
[160:46.84] hey, we're focusing on one thing, and it was kind of refreshing. But most of the render libraries are
[160:51.72] fairly general, and they do try and take on pretty much everything, which we can argue whether that's a
[160:59.56] good thing or not. But I think they are actually trying to appeal to the one solution for all. That is exactly
[161:07.40] what they're doing. They know that they can't succeed, but through their effort, they hope that they can
[161:15.08] you know, move things forward.
[161:18.60] Oh, I like this. It's not a webcam once. That's just a DOM. There are four types of attributes:
[161:29.48] IDL attributes, content attributes, Boolean attributes, and event handler attributes.
[161:36.28] Nice. There's nothing non-custom element firmware can do that a custom element cannot do.
[161:54.36] Hmm. I don't know. I 100% agree. It's interesting. I could take this argument.
[162:05.08] I could definitely take this argument, but the problem is sometimes the fact that something's a DOM element
[162:13.00] gets in the way. Now, you could already argue with a custom element frame. You don't have to make that
[162:17.72] thing a DOM element, but sometimes the boundary is not in the right place. So, yes, you could find
[162:27.48] solutions. It's just, we should get some examples and kind of look at this.
[162:42.84] I wish everyone went all in and trying to fix React and make it amazing. Oh, I love this argument.
[162:47.00] No other web framework offers a good universal app for web, mobile, and other platforms with one code base.
[162:53.16] I disagree with this, obviously. I think that you can do this in another framework.
[163:06.36] This is not unique to React, but React is a popular thing, so why don't we all just fix React?
[163:14.12] Do you see the parallels here? We should just fix React, but React is saying here, "I don't need to be fixed.
[163:23.64] I'm exactly the way I want to be."
[163:29.16] Sometimes there's just different solutions. You don't fix it. React innately believes in its virtual
[163:37.80] DOM re-render mentality. That is its philosophy. It's going to take it to the ends of the universe.
[163:42.44] I might disagree. I might go out and try and prove where it falls apart, where there's better solutions
[163:49.64] for it, but React is specifically React because of this.
[163:57.56] Now, let's do that same word swap. I wish everyone went all in trying to fix web components and make
[164:02.60] it amazing. I mean, like, okay, I can't do this all the thing. It's no other, you know, but like,
[164:07.80] it's not quite the same because web components are, you know, not great for same...
[164:13.56] Well, actually, but you can see a thing because like, there's a lot of web platforms out there.
[164:17.80] No other web framework offers good universal for all the web platforms with one code base or something.
[164:26.68] My point is, in the same way that with a straight face, I might be like,
[164:36.12] hard for me where I'm sitting to recommend the React approach for everything. How could I recommend
[164:44.76] web components under the same banner? Do you know what I mean? Like, I don't know. I keep on seeing
[164:48.36] parallels here between this. Thanks for writing this. As I said, I don't agree with this at all, but I think
[164:53.40] it's interesting to kind of like just shift around the variables bin.
[164:59.48] Well, I mean, which framework do you think can do that today? Sure, we have native script, but it's so far behind
[165:18.76] that there isn't any options. I mean... What? Okay, so you're basically saying that the quality of the
[165:27.40] solutions React ecosystem is so far ahead of the others that we should just like forget that there
[165:32.28] could be better things. What I meant is, yeah, sure. Yes, I've heard that React Native is much better than
[165:38.36] NativeScript or Tori Mobile or all this stuff. People tell me this. The NativeScript people get really mad when
[165:43.88] I repeat that people tell me this. But this, in my opinion, is not a fundamental nature of React kind
[165:51.32] of thing. So that's all I'm meaning by that. Yeah, Terso and Capacitor is another example. Sure.
[166:09.48] All right. So, yeah. I started writing... Where is it? Dev2. Let's get into this.
[166:18.68] To begin with, DOM elements have attributes and properties. This is so that they can be represented
[166:24.92] as HTML. Attributes accept only strings while properties being a JS interface can handle any
[166:28.92] value. Native DOM elements have many rules around specific attributes and properties like how booleans
[166:33.32] exist and means they apply while others are pseudo boolean and so on. Like, there's a lot of rules.
[166:36.84] Don't worry. The goal of templating languages is to solve this in a uniform way. We can make
[166:40.20] special rules around known elements and attributes, but with custom elements, we don't know this because
[166:43.48] they're user-defined. So this is why some templating languages have interesting prefixes. Like, lit has, like,
[166:49.88] dot, prop, at, event, question mark, boolean. Solid has, atra, prop, bool.
[166:57.00] Prefixes for this reason. And every runtime location and compiler hook needs to be worth this.
[167:03.64] You might think we need better templating as a standard, but, you know, JSX, that thing I just
[167:07.24] showed you with Justin from Lit, you know, there's implications of that decision. A few
[167:11.32] years ago, people probably agreed that the way Lit did templating was something that's a good approach.
[167:15.64] Other solutions could output it. However, in the interim, we realized that React rendering liquid solid
[167:19.48] does outperforms it. It does so by changing the semantics of templating. If we moved ahead,
[167:23.24] we'd have a standard that would not be the best way to do templating. Yeah, I think we actually just saw an
[167:27.64] example of that when I, when I looked at that spec. So let's, let's, let's look here to this. And let's
[167:38.92] go back to our list for a second. So what does this impact? Consuming web components. We need to think
[167:44.68] about that. So annoying how I have to like update the numbers. When I add the sub points, we should talk
[167:54.60] about actors versus props. Okay. Right. One, one actual interesting thing. Sorry, not the tangent too
[168:11.08] far here, but let me see if I can find it. There was one other response to my article that I thought was
[168:17.24] really good. Yeah, here we go. This is actually my favorite response. This is, this is the best,
[168:21.80] best response article to this, to this by far. Um, if you didn't read this, this, this is
[168:31.40] yeah, this is just great. And yes, I agree that signals are orthogonal completely. I'm just talking
[168:49.64] about the danger of templating languages built in, not about the, the, the signal prop handling thing
[168:59.64] is an interesting problem. Yeah. Um, yeah. Nolan's article is, is absolutely great. Um, web developer,
[169:13.88] Seattle working for Salesforce, you know, okay. He's written tons of great articles about web components,
[169:19.16] actually. I saw a few of them in the past. This is not the first time I've read Nolan's, uh, articles
[169:24.20] before, um, right. The great divide web codes are not the future. Corey's response, right. GS framework.
[169:33.24] Yeah. Blah, blah, blah, blah. So just kind of setting himself up.
[169:36.36] Yeah. Performance. This is completely true. If your goal is to build the absolute fastest framework,
[169:42.20] can then want to minimize the DOM results. Testament. That's a alien. Some of my friends in the web
[169:49.24] community by saying the performance isn't everything. Sure. There are other trade-offs. Sure. Yeah. We
[169:54.12] talked about those maintainability, security. Okay. Um, and we, we, we, we talked about a lot of these,
[170:00.12] right. Um, to make silly example, I can make DOM faster by doing this. Yeah. And this is the thing,
[170:04.68] it's always easy to gain benchmarks specifically. So we, we do have to take the greatest salt for versus for
[170:10.36] each. Yeah. Okay. Speed runners. He compares us to speed runners shaving seconds off, uh, a five minute
[170:17.00] run. Yeah. Yeah. Now the funny, the only thing that's funny about this comparison here is
[170:23.00] if your goal, all means jump backwards, log, jump across the entire stage instead of Mario run forward,
[170:29.32] I will continue to press for you doing that. It's just not for me. Yeah. I'm a huge fan of speed running.
[170:33.80] So this one talks to me, uh, completely. The funny thing though, I'm just going to put there from a
[170:39.96] framework standpoint, working with web components is the thing that has us doing the backward long
[170:45.24] jump. Do you know what I mean? Like we can, we can build stuff to optimize for speed with a DOM.
[170:51.32] It's tricky. We have to be aware of the DOM properties and we have to do all this stuff.
[170:54.28] And then we, once we do that, what we can offer to the developer is something that, you know,
[170:59.00] they don't have to worry about the long jumping, but when, as soon as web components come in and you
[171:05.72] start hitting all the exception cases and you're going to be like, okay, what are we doing? Right.
[171:09.56] It's the least surprising relation ever.
[171:15.88] Okay. So, um,
[171:24.84] minimizing the user DOM is a classic optimization, blah, blah, blah.
[171:29.16] That's something you can do with simpler approaches. Yeah. Using CSS is linked here. Yeah. Definitely.
[171:35.64] Um, funny thing is. Yeah. Blah, blah, blah, blah. Similar with the find customers use different
[171:42.12] frameworks. Sometimes you need frame B. Yeah. We talked about this. This is good. Okay. That's
[171:45.88] going. That's the matter. If you're dealing with resource constraint environment, where every
[171:48.60] millisecond grow, ditch of web components. Oh yeah. There's a reason solid is used so much on, uh,
[171:52.84] mobile television. This is where we've gotten our in into larger companies. Um, I, I want, I want to see more of it.
[171:59.96] That these companies won't talk about it, but I talked to developers working on there. I did like,
[172:04.60] you know, companies like Netflix companies like Comcast, we actually had the thing on, I've, I've
[172:10.12] recently heard some stuff happening on Apple. Like, so yeah, I mean, there is, there is truth to this,
[172:17.72] but I do want to point out that if it was actually harder to make things faster, it's like, it's,
[172:25.48] it's like harder to use web components than it is to make things faster. Like it's, that's which makes
[172:31.00] the speed running thing kind of not thing. Okay. And then cost standards. This is where I keep off the
[172:36.36] range train. As a framework author, I just don't find that much effort in support web components.
[172:39.48] Detecting crops versus asteries is a simple prop and element check. Outputting web components is indeed
[172:43.80] painful, but Hey, nobody said you have to do it. View to standby web component wrapper remount exists,
[172:48.20] et cetera. Okay. Which is important. He's, he's highlighting what I talked about, which I said,
[172:51.48] separating the idea of consuming versus outputting, right? Like the authoring versus consuming, right?
[172:56.44] You can freeze your code. Of course you can, but assuming I don't want to freeze your brain in
[173:01.72] Amber, then yes, you do need to account for new stuff like proxies. I love this argument
[173:05.40] because proxies are exactly like what web component, what proxies did to JavaScript or like what web
[173:11.08] components did to the DOM, right? Like people got really spooked by the fact, I'm just going to open
[173:18.44] like terminal here that with proxies, if you could go like object dot value equals five, some crazy code
[173:25.56] somewhere else to go. This is, this was the obstacle for signals, right? It wasn't proxies originally.
[173:30.04] We, and, but think about it. Solid exists because of proxies in a sense, because surplus didn't handle
[173:36.92] proxies properly because it didn't know that they were reactive expressions. It only knew how to handle
[173:41.72] functions and it basically ignored property access. So suddenly it went from just being functions being
[173:49.40] reactive to like any property access be reactive, right? Proxy can also mess up with the instance of,
[173:58.28] yeah, you could get in the way of it. Yeah. So I, I think this is fair, right? So like I just wanted to kind
[174:13.32] of like, I think proxies are a great example of this. Here's another funny one, right? What happens when I go div dot inner HTML
[174:23.88] it's like HTML equals some HTML string that now has my L in it, right? Suddenly
[174:32.36] some arbitrary JavaScript's going to run synchronously at the time of the DOM parsing. This is different
[174:39.24] than a mutation observer, which fires on the next Mac micro task queue. Remember that we were full circling
[174:45.24] here. Um, like suddenly you you're in this interesting zone where, where stuff actually runs in inadvertently
[174:58.44] because you did an inner HTML, right? Like it's not just because I'm listening to, uh, you know, a specific
[175:13.56] property or stuff. Like you get into a world where arbitrary JavaScript fronts. I got to, I got to,
[175:19.88] yeah, we'll, we'll, we'll, we'll, uh, uh, let me continue. Um, I won't, I'll get into this in a minute
[175:26.52] when we talk about ads and props. Okay. Um, as a framework author, you want to freeze it. That's
[175:31.48] if you want to freeze your thinking, you can do that, or you can, we, I don't think anyone wants to freeze
[175:35.56] their thinking. Most of these frameworks I'm talking about were developed after web components came out.
[175:39.08] So let's go kind of muscular, but as soon as you don't want to freeze your brain, yeah, blah, blah,
[175:42.60] blah. And then I get the person, the wide swath of web component community does not care about
[175:46.68] web components. That's probably true. That's a, I mean, he hasn't made an argument. He basically,
[175:52.76] his argument against my thing is a prop and element check. So that's the whole reason why he doesn't
[175:57.00] believe that it's hard to support. Let, let, I have more examples. So let's get into that in a minute.
[176:01.72] Plus standard, it's highly become the default mental, like slots, native slots, authors, their,
[176:06.92] their slots should work on native bots. Yeah. Yeah, exactly. Like some rich terrorists. True. But again,
[176:11.48] we could say that about new browsers to use intersections or as lazy. Yeah, that's fine.
[176:15.96] Just because some website doesn't mean you use it. Yeah, that's fine. But the fact that inner HTML changes
[176:24.92] is profoundly different than whether I choose not to use slots or not, I feel like. I mean,
[176:32.44] there's some fun with slots too, I can talk about. Said there's nothing wrong with comments. They're
[176:36.36] only used. The problems are dangerous. Here, I totally agree. As I said before, web components are
[176:39.40] bad at a lot of things. Service side rendering, accessibility, interrupt. In some cases, there are
[176:42.44] plenty of good things. Emily, reasonable point here. Blame social media. I find these beats tiresome.
[176:47.24] My own experience at Salesforce, we built stuff, marketplace,
[176:51.08] strict background compatibilities here. We intended to support for years, not decades. Is that you?
[176:54.92] Maybe you shouldn't build your entry out of web. Or maybe you should. I can't say.
[176:59.08] I mean, I'm glad about this. Me and Nolan will check in, hopefully, with each other in about
[177:07.80] seven or eight years and see how well that held up. What I find exciting about is the sheer number
[177:13.00] of people doing amazing, bizarre things, blah, blah, blah, blah, blah, blah, blah. Okay, that's great.
[177:16.28] And it ends with a nice positive note. Right.
[177:23.64] Yeah. One last one. I don't want to get into this. I think Theo might have talked about this
[177:29.64] one already, so I don't need to. This is kind of like this premise that there's different types
[177:36.04] of components. I'll bite there. I'll say that's okay. I will say that project specific, they're
[177:43.48] saying don't belong in it. These ones in general could. We've kind of already talked about where this
[177:48.76] falls apart, but there's something that was said framework. There's something
[177:53.64] that was sitting in the conclusion that I want to say.
[178:07.56] Uh, damn it. I can't, I'm not going to find the quote here, but it was something that suggested that
[178:12.04] that frameworks, uh, the, that web components were doing us a favor.
[178:18.36] Um, I, I'm going to get tied up in all these responses if I follow through them all. Um,
[178:28.60] I think the idea here though, is that like stuff that's, as I said, based on your
[178:34.12] application code, application logic doesn't necessarily need to be a web component. So,
[178:41.48] I mean, this is, this is a fair take. Um, I'm not going to find it right now, unfortunately. Okay.
[178:47.72] Sorry, I got to keep on moving. Yeah. At the bottom. Uh,
[179:00.12] Yeah, I'm, cause I see this line. So how we concluded that frameworks are useful,
[179:11.72] web components are also useful. Stop fighting and make awesome, whatever tools. Yeah, that's great.
[179:15.96] Um, but that's not what, no, there is a line that's basically suggested that that
[179:26.20] web components are helping frameworks. I don't know where it was. Anyways, it's fine. I'm
[179:45.96] sure. Okay. It's, it, it, it, it doesn't matter. Um, that much. Uh,
[179:52.20] Uh, I unfortunately probably reopened stuff. So we have this,
[180:00.28] and then I closed Nolan's article cause I was done with that. Okay. So let's, let's go to here.
[180:09.16] Yeah. Maybe it was the tweet. So I started writing an article and the, I wanted to summarize my
[180:15.88] response to all the responses kind of generally. Um, and I hope this helps people understand my
[180:22.12] perspective. Um, so I think we had, we had a point in our document here that was about why not the feature.
[180:32.76] Um, this, this, this chunk of text, I could probably just.
[180:36.92] It's not even the future. This is just my response. It's fine. Let's just go here.
[180:42.52] So point number one, web components are not, aren't new. This isn't coming from a position of
[180:47.24] changes bad or being stuck in the past, but rather they're being there, done that. And we should really
[180:51.40] reconsider. If a framework has slots that differ from the standards, it's because they started with
[180:55.00] the standards and realized it wasn't the right fit. Web components are not doing frameworks a favor.
[181:00.04] Some of the greatest criticisms come from the framework that support web components the best.
[181:04.44] Ones that have smaller market share that could arguably benefit from using them for adoption.
[181:08.28] Ones that could, would care about using more of the platform to reduce their footprint. And yet the
[181:12.60] authors are aligned on this. And then finding success with web components doesn't preclude them from
[181:17.24] scrutiny. Every decision has opportunity costs. My argument is that with overall cost of the platform is
[181:21.80] with the overall cost of the platform. It is great when people find success with a solution. As site
[181:25.72] application developers, our job is to create solutions, but platform and general tools like
[181:29.72] framers have to stand by a wider criteria for success. Okay. Okay. So let's, let's just jump right into
[181:38.76] attributes and properties. Okay. I talked a bit in my previous article, how potential custom attribute
[181:45.08] properties meant that the rules of how to best handle them suddenly open up. There've always been
[181:48.36] special cases. See, you know, number six and rich Harris's why don't use web components, right?
[181:54.68] Um, this example, um, he's just showing that like some attributes reflect weirdly, like,
[182:04.12] you know, has attribute disabled, doesn't have it, set a prop to true. Now it has it because it reflected,
[182:11.40] remove the attribute. Um, okay. So that, that makes sense. And then he goes,
[182:18.68] button type of button disabled boolean, get attribute object button disabled true.
[182:24.28] He was just, I mean, he's just, this is kind of like what Rich has been doing recently.
[182:28.84] As a framework author, you, you hit really interesting exception cases all the time,
[182:37.24] because you try and set properties and set attributes, and then you find these weird ones.
[182:42.44] What's this one? Div set class is one, div class name is one, div class name two, class two,
[182:47.56] that's six. And then we don't, he's basically just pointing at all these things. To be fair,
[182:52.12] none of these things actually have much to do with web components themselves. Um,
[182:57.08] but it's just important to understand that before we even get into stuff, there's, there's quirkiness in,
[183:05.40] in the DOM, um, that we all deal with. These are all exceptions for web components. Good.
[183:12.68] But now we need to account for any specific way over the customer elements might have.
[183:17.32] This I met seems pretty minimal consideration, but I want to show how much,
[183:19.80] even the smallest things open up a giant camera words. Something's clear.
[183:22.28] Attribute values can only be strings. Attribute names are case insensitive.
[183:26.84] Only HTML can be serialized for, um, SSR. There are a few ways to have,
[183:33.32] we can handle this from a component consumption standpoint, right? Runtime characteristics.
[183:37.32] As Nolan pointed on his article, as a framework author, I don't find it's much effort to support
[183:41.00] web components. Detecting props versus Attribute is simple prop and check. And yeah, that's a fairly
[183:45.88] common technique. One I believe is used by Svelte and in, in the future, React 19. The idea is that if
[183:52.04] templating, um, name is exact match for the property, like case and everything, like, so it looks on the
[183:57.96] DOM and sees if it's like on the element, it'll set it as that. Otherwise it will set the attribute.
[184:03.08] As a web component author, you need to make sure that everything is able to be set as a JS property
[184:07.80] as well as an attribute that I think is important. I think you should be doing this anyways. This works
[184:13.00] relatively fine. Assuming that elements is upgraded before any attributes of properties are set. We'll talk
[184:17.80] about this more later. There is some fun, uh, it's not like depending on upgrading time, as I said,
[184:25.16] this clone node makes it obvious, but there's, there's other times that I've hit this issue in the
[184:31.48] past where we'll actually like set a bunch of attributes on an element and then before it's like
[184:37.48] upgraded. So like before it's actually reactive, then it knows it changes. So that's the, basically like
[184:42.28] the code that we have to observe attribute changes hasn't set. So like in solid element,
[184:47.64] for example, our, our wrapper, uh, component register library, the underlying thing I wrote
[184:51.48] like 10 years ago, we actually like do this whole game of like also checking what's already there to
[184:56.60] make sure that, um, we don't just assume that's an, you know, like the default values.
[185:01.32] Anyways, that's a minor detail. I do have a question though, as a consumer of web components during SSR,
[185:08.60] I, not necessarily on a platform that supports expanding or rendering these components, but allows
[185:12.20] them in HTML output, like pretend like I'm HTMX, for example. I mean, maybe it doesn't make sense.
[185:18.28] What HTML output would you expect for, for, for this? I mean, this could even be solid. Forget HTMX for a
[185:27.00] second. If I wrote this, some property, you know, I'm react and I'm using camel case and this property,
[185:33.96] would you expect my element, some property high? Like, are you expecting it to reflect as an
[185:40.36] attribute or expecting it not to be there? Or are you expecting it to get transformed into like the
[185:46.36] attribute kind of name? Because, you know, this is case insensitive. So generally like attributes
[185:51.72] might use dash case or something. The only reason I'm asking this question, um, is because
[185:58.12] the heuristics at runtime, right? So if there's no DOM element on the server to ask the question
[186:03.80] of if the property exists, it's kind of undefined to decide what the behavior is.
[186:14.44] Right. But I'm just, I'm just assuming that you want, you want us to like someone wants to support,
[186:19.56] uh, if you pass, I mean, that, that is an answer only pass strings to web components. But if you want
[186:27.24] to have templating that can pass like a list, like, because you want to iterate over it or something
[186:32.44] more, you know, like you could always JSON stringify it. And I've, I've done that before, but then the cost on
[186:37.72] update is extreme because you're creating new references. Like good luck passing signals that way. I mean,
[186:42.36] it's fine. You don't pass the signals, but like no stores, no, like you, you serialize it to a string.
[186:47.48] It's like, it's like JSON string find JSON parsing data. Every time you pass it through a component,
[186:52.36] it's expensive. You don't want to do that.
[187:09.96] Well, yeah. So basically the argument here is that if you're, you're going to assume that there's no
[187:16.52] properties that you're only passing strings. And I, I, I think that's fair, right? Maybe this is part of
[187:22.76] the problem with the flexibility. Um, you might have a pro you know, but the, like, if you have a big set
[187:29.80] of data that you want to set, send into your component, you don't pass JSON to it. Um, that way you,
[187:38.12] you, you render the list, you know, like as HTML on the server and like the wrapper can do some wrapping.
[187:47.24] I mean, control flow is interesting, right? Like you're putting these custom elements on the page
[187:54.36] in the first place. I'm assuming because you want client interactivity. Otherwise you would just render
[187:58.52] the HTML. So if you want control over how the list renders with the custom element,
[188:04.04] um, you do have to consider this question, right? Um, you could choose not to include in the output,
[188:11.88] right? No, not to serialize a string, but if you don't have a runtime that's able to render the web
[188:16.36] components on the server, you actually don't know. Compiler can help automatically or without setting
[188:20.76] other conventions. You're probably better, or can't help without sending other bits. You're probably better to
[188:25.56] treat everything that can be an attribute as an attribute and then hope that hydration, the client
[188:30.20] sort of takes care of the rest. What I mean is if you are in a situation where you're trying to
[188:34.52] consume this in an environment that runs JavaScript on the outside of the web component,
[188:39.00] like you, you, you understand, like if I just remove some property on here and then this web component
[188:47.08] renders onto my page when it, it better not trigger the upgrade and render on the server on the client
[188:56.12] before it gets this prop. Otherwise it might not render the right thing. And then the prop comes in
[188:59.88] and you get like a double flicker on, on render, right? Like it, it renders my element without the app,
[189:04.76] without the property. And then it, then when the framework hydrates, it then renders it with the
[189:10.68] property. You get like a double render, like a flash kind of situation if you couldn't hold it.
[189:16.20] And I know web components specs are working on like a defer to hydration thing. I'm just,
[189:19.88] so maybe this is a solvable problem, but I just want to get you in the thinking of this realm here on,
[189:25.08] because see people like, oh, we got the declared a shadow DOM. Yeah. Like you can completely render
[189:29.16] web components on the server declares shadow DOM. That's, but like, I, before we even get into that,
[189:37.08] let's just talk about like, let's just put this element in our react component, right?
[189:45.40] By the respect you mean, yeah. Okay.
[189:54.44] Yeah. You use it through context, obviously. Right. But I mean, then it's not isolated. I mean,
[190:04.92] I'm just trying to, okay, let's keep on going. Oh, we got a raid. Sorry. I'm, I, I, I've been so
[190:11.08] into my, my stuff. I didn't even, uh, sign into, uh, to, to Twitch today to actually see what's going on.
[190:18.92] Um, yeah. Thank you. Do, do, do, where am I?
[190:25.32] Weird. My Twitch is way behind. Oh, whatever. Why am I not even seeing the raid?
[190:34.92] Oh, well.
[190:38.92] Okay. Anyways, let's continue on here. Okay. The other options, uh, explicit convention. I actually
[190:47.96] went to the, the web component, um, discord and they, they actually said that they like
[190:52.20] the explicit convention because it gives them more control, right?
[190:57.88] Another approach is what lit does, which is provide explicit templating prefixes to the developer to
[191:02.52] choose from. Async connected call. Interesting. So you're suggesting like basically wait on something
[191:07.48] from the, from the framework. I mean, or from like, like something that would tell it to
[191:13.64] the hydration was good, right?
[191:15.96] Right. Like, but, but like there is a timing, right? You have to wait for like the,
[191:25.40] two micro tasks or set timeout might work, but it's not guaranteed. It's like, it's like
[191:30.12] throwing a dart blindfolded. Like it'll like,
[191:35.64] I think, I think this is smart. If the, if the web components you're using are aware, it's a little
[191:41.56] bit awkward if they're like meant to be universal, like, like something like shoelace. No, I assume
[191:46.36] shoelace only takes string attributes and not properties for stuff, but I'm just, you kind of get
[191:51.24] where I'm just trying to think here from the space of things that consumed. I'm not necessarily writing
[191:56.36] these components in solid. So they're not aware of this or react. I'm just trying to use them. Right.
[192:04.04] Um, uh, so yeah, lit does this right. Dot name question for booleans, all this kind of stuff. So
[192:10.84] it's interesting that RV, the most prevalent weapon component for your chose this explicit style
[192:14.76] convention over any smart heuristic. There's obviously interesting choices still to be made.
[192:17.80] Like how do you handle static prop attributes and ones of value versus dynamic? I'm actually going to
[192:23.48] put a thread here. Um, uh, I think Joe's in chat, but he, he actually made a really long thread on the
[192:31.48] solid discord. I'm going to drop this like example here. He wanted to show all the cool different
[192:35.88] syntax that you can do in lit and how they output. See, he, he, foo, dot foo, foo two, dot foo two,
[192:43.80] how do you like this kind of stuff? And then you can see some of the logs and then just, just kind of
[192:52.12] get a idea of what's going on here. Let's go element. And actually, can I inspect this? This
[192:57.40] might be the best way to do it. Yeah. Yeah. Yeah. You can kind of get an idea of, of what you're
[193:02.20] dealing with, with your div. So we have foo. Hello. So the string attribute goes straight through
[193:07.32] dot foo height, uh, howdy means that it's should, it was, I thought it was high. Oh no, sorry.
[193:18.84] Okay. So this is static. Setting the property got ignored. I guess it doesn't flip because it's not,
[193:27.96] it's not, it's not, it's just a div. So it doesn't have a foo property. Foo two is set as a
[193:34.52] attribute, but then, oh yeah, this is funny. Um, which I see down here. Hey. And then dot foo, if it's
[193:47.56] static, not interpolated, it actually becomes dot foo in the dom. So yeah, that's interesting. So
[193:52.84] question mark bar static doesn't show up. That's true. Lauren falls. But if I do dough,
[194:01.32] it shows up or it doesn't show up. Right. So basically there is syntax here actually only
[194:07.24] applies to interpolated values, not to statically stringed values. It just interesting. I didn't know how
[194:13.88] this worked in solid. Our rules would always apply to either. We'd like from the compiler standpoint,
[194:20.12] look at this and be like, oh, okay, this, this is meant to be a Boolean. So we can't treat it just
[194:25.96] like a static, but yeah, I think this is interesting anyways. Um, foo bar yo.
[194:36.36] Yeah, foo bar yo is showing the casing. Boo bar sup. And then again, explicit. And then,
[194:43.24] and I'm sure if I went in here, we can see the console log similar. Anyways,
[194:48.52] this is just showing that there's a wide range of control and flexibility here.
[195:06.36] Oh, the, the link I sent didn't work. Is it like too long?
[195:13.56] I wonder if it got truncated.
[195:17.00] I mean, I, I could, I can try it one more time, but I honestly, you guys, it's not that interesting.
[195:31.08] I, I, I, I just, I, I, this was just an example there.
[195:34.84] I'll get split into two messages. Okay. Yeah, it's fine. Um, I just wanted to show the syntax.
[195:43.64] The reason this came up was that, uh,
[195:45.56] actually, do I link it here? I've started referencing stuff in here because it was taking
[195:51.64] too long to know. Yeah. Uh,
[196:00.44] there's a discussion going on in solid discord about, or sorry, solid GitHub about handling some
[196:11.00] of these conventions differently and whether like it's better to default to properties in some cases,
[196:16.04] because it's like the happy path. Cause right now, solid, when it sees a web component, always uses the
[196:19.48] property except for when you override. So we're like, what if we just made it attributes and then
[196:24.52] like basically aligned with the lit? Um, that's what we're thinking about right now. It's just an
[196:29.00] aside, but generous approach is powerful in that a compiler can know exactly how to optimize for each
[196:32.84] case and desire behavior is explicit, but it pushes it responsibly on the consumer. I need to know if
[196:36.44] the property I wish to set it first at true for SSR, we can be a bit smarter in terms of what gets
[196:40.04] rendered because it's like clear that it's the prop. It's not just like, oh, this might be a prop,
[196:44.28] but it doesn't change the fact that render HTML is potentially incomplete. Right?
[196:47.56] So yeah, I mean, I guess like, this is a lot in my mind for developers. Like usually don't have to
[196:56.28] think about this. I don't think I'm not sure that hiding it is as simple as, as just doing the in check.
[197:09.32] The SSR consideration is the time period when this component is rendered HTML in this client-side
[197:12.44] field. In this case, there isn't a full server-side rendering. It is blank space waiting to be filled.
[197:16.52] Timing is essential because you don't want the component to wake up and render itself before
[197:19.40] it receives the properties. The difference between this and typical SR framework is that SSR with HTML
[197:24.28] reps, it's a whole possible output. If no JavaScript is run in the client, then you seize what you get,
[197:27.96] whereas web components have the potential of being lossy in their encoding. We're mixing inputs and outputs in
[197:32.04] our markup. Now we could blame this on not supporting web components in a non-DOM environment,
[197:35.56] that's a bigger ask. It clearly isn't enough to prop an element here to check in the browser.
[197:40.44] Supporting them means we need to consider how they impact any environment one might choose to use them.
[197:43.96] If you're using web components, the solution is building framework, you're going to consider it
[197:48.76] a fundamental building block. Now the output is most, yeah, so basically you're going to render
[197:55.16] a declarative shadow DOM, essentially, is how you're going to solve this. Because
[198:00.04] even if the properties are missing and your framework is made of all web components,
[198:04.20] you have this benefit that connected callbacks happen from root down to leaves. So you know that
[198:12.36] the parent will hydrate before the child and so on. It just will trigger all the way down. Whereas like
[198:18.52] you don't have the same guarantee when you're just consuming web components, and if you use stuff like
[198:24.92] declarative shadow DOM, you don't have to worry about the lossy encoding as much because you will render the
[198:32.12] actual full realized stuff from the server in the first place. So yeah, if I'm using lit,
[198:42.12] the only actual problem, the SSR problem is not really a problem. It's if I'm like just trying to
[198:50.60] use it outside of it, this prop versus attribute thing is interesting. I don't have much new to add
[198:58.76] from what I said in the original thing. The fundamental mismatch here is that most frameworks
[199:03.72] view components as an input format and HTML DOM as possible output formats. Web components intertwine
[199:08.04] these in a way that is no longer separable. You need to buy in completely.
[199:11.72] Yeah, so I mean
[199:13.24] this is not a deal breaker. Adding this complexity is weird from a templating standpoint. Like it's an extra.
[199:27.00] If you don't want web components to be framework components, you should probably always use string
[199:37.96] attributes anyways. So I feel like this concern
[199:43.00] on the pure consumption side is probably
[199:48.60] workable. It adds complication to our templating and our JSX tools.
[199:56.76] but it's like like, how should I put it? This whole attribute prop bool thing we wouldn't even care about
[200:04.44] if we didn't have web components essentially. There would be no need to even look at this.
[200:12.20] Right? But like, but you get, you get my point? It's like if you build your whole site with web components all the way down,
[200:24.28] then you can control this thing. But if you don't and you have to enter JavaScript interface with the components
[200:32.12] and try and do it in a declarative way, there is a gap here. So maybe this is an addressable gap,
[200:37.56] But what I'm demonstrating here for this particular topic is that the consumer
[200:44.12] of your framework now has to be very concerned with attributes versus props versus like the
[200:50.36] different types of prop things where they wouldn't have not worried about before.
[200:53.32] The framework has to, you know, have logic to handle and process these separately.
[200:58.28] Um, and that, uh, as I said,
[201:02.84] timing mismatches need to be kind of worked out through and it's, it's, it's kind of fundamental
[201:09.72] because it's based on the fact that like we're encoding data into the HTML.
[201:17.08] Like if you, as I said, isomorphic, like render framework, the HTML you get out is the final HTML.
[201:23.56] And you could argue that with DSD that what you get out is the final HTML. But if you can't serialize
[201:29.08] some of the like properties or attributes coming in, you know, what you get is not what you get
[201:37.16] until it hydrates. And depending on hydration is awkward, right? Like what if your framework doesn't
[201:42.68] want to hydrate web components or incompletion, right? Like this is a constraint, like against
[201:48.68] say like something like resumability. Um, it's a, it's a, you could just say like,
[201:53.56] once you hit a web component, that's the end of the world.
[201:55.80] So that's a fair argument, but there is this question of like, should the same framework be able to
[202:04.68] live inside and outside of the web component? If you were starting from a perspective of, uh,
[202:10.28] of here, web comes the frameworks, and you kind of walked back from it, you kind of think that maybe
[202:16.52] you should be used for both consuming and authoring this disconnect can be awkward anyway.
[202:34.68] Yeah. I mean, this is, this is, this is the first point I'm, I'm hoping this makes sense in the
[202:41.56] context of both. Like, okay. Okay. Let's look at the next thing. It is interesting though, right? It is,
[202:55.96] I, I do think that like the fact that framers view DOM as one possible output, whereas like,
[203:02.28] um, because like on the server, we just output strings. Um, whereas, um, uh, like,
[203:11.08] like web components kind of like entwine both worlds. It makes it kind of tricky.
[203:19.08] Okay. Let's go next life cycles. DOM nodes can be created multiple ways, which makes this topic tougher.
[203:26.12] Um, they can be created on a per element basis or through the DOM parser, say as part of .innerHTML.
[203:32.20] And there's also a difference between creating elements inside of a template
[203:35.40] and putting that .HTML on a div per se. Template elements are inert. They don't even exist in the document
[203:43.32] until they're inserted. Right. Rich has been giving great examples of this, like all day,
[203:48.52] um, like the last couple of days, who cares, right? Like, well, it happens. This is something you have
[203:53.72] to be aware of when consuming web components because it impacts when they upgrade a web component that is
[203:57.56] not upgraded. Isn't seen as an unknown element. And while it's properties and attributes can be set,
[204:01.24] they are, uh, can be set. They are naked. No custom logic runs, no getter, setter traps set up,
[204:07.24] no behavior based on observed attributes will execute.
[204:12.20] Um, it means as a web component author, you need to be aware that you aren't always dealing with a
[204:15.24] clean slate coming in. Sometimes attributes and props have been set before you get to upgrade.
[204:19.64] Why is this hard for frameworks? We have a lot of mechanisms built off synchronous guarantees.
[204:24.44] This is the foundation for our consistency model. Even if we schedule differently,
[204:27.48] it's central in all frameworks that the UI at any point in time is completely consistent based on the
[204:31.16] state input being fed in. So like, uh, UI equals function of state, like the old React thing.
[204:35.88] The whole idea is that at any given point of time, given the state, the DOM should reflect it.
[204:41.08] Yeah. See, and to be fair, when I like solid element, when I was building those early demos,
[204:56.76] I didn't hit these problems because I was building all in web components. I'm actually hitting more
[205:01.88] issues now when I'm, when people are generally not building with web components and then they just try
[205:06.52] and pull stuff in. It's almost like the web components have been so focused on like proving
[205:14.12] out like the all in on web components thing that they, you know what I mean? I guess we're in like
[205:18.76] this weird third category. Cause there's like people who just use HTML, um, and then they just put the
[205:23.80] web code on the page and they have no expectations. Then there's people, then there's like places where
[205:28.76] frameworks are, you know, built completely with web components. And that kind of, you know,
[205:33.24] as I said, there's overhead, but it works. Um, or you can come up with mechanisms that work.
[205:37.40] And then like, but like when you're just trying to like, just consume them, there's this like
[205:41.08] interesting tension. Anyways. Um, web components can upgrade asyncly, which throws a few wrenches in.
[205:46.76] Okay. So yeah, we talked about clone node versus import node. The first one is that these
[205:50.44] similar methods have a huge difference. Import, imports elements into the document,
[205:53.80] whereas clone node does not. This means that web components are not upgraded until connected to the
[205:57.24] document, which means that all the attribute property settings happen too early. Again, not that hard to
[206:02.12] change if the method being used once discovered. The reason we hit this in solid was because
[206:07.56] we use reactive properties, um, generally speaking. So the, the, like when we clone the node,
[206:15.56] um, and then we like set the values read, uh, um, reactively the, the, um, underlining, uh, getters or
[206:26.12] setters, sort setters, uh, weren't there yet. So people who had custom elements also built with
[206:31.72] reactivity, depending on solids tracking would actually just not track because they weren't
[206:36.76] there. So the signal would go, Hey, I'm reading the value. And then the web component would be like,
[206:42.20] yeah, who cares? And then any future updates wouldn't happen because the signal triggering
[206:47.72] wouldn't be tracked. Do you know what I mean? Like, like, like, or wouldn't be like, it causes weird
[206:52.92] disconnect. Um, so, uh, people in the community noticed, and then as they figured out that this
[207:00.84] was the reason this was happening. One of the problems obviously that we've talked about is that
[207:06.28] clone node versus import node has a performance overhead. Um, some people like, at least in Chrome,
[207:11.88] some people claim that this is not a real thing. Just look at any benchmark. I, in, in, if, if,
[207:19.16] yeah, I, it's, it's fine. I mean, it was enough of a performance difference for us that we detect
[207:29.40] in solid. We look through your H like your JSX and go, Oh, there's a web component there. Let's use the
[207:35.00] other method. Um, we've been doing that since like 2019. I felt, I think it's adding this in Svelte 5 as
[207:41.64] well. Like it's just like, it is a thing. And obviously if the, if the platform updates it,
[207:49.88] um, that's fine, but we actually had another fun thing here. We actually not just clone nodes. We,
[207:54.52] we, we have to, um, we have to worry about our reactivity. Let me see if I can get here.
[207:59.96] Um, is that coming up? Yeah. Reactivity is next. Okay. I won't get there yet.
[208:03.96] Again, it's not hard to change the method once discovered, even if it's measure really slower,
[208:09.64] that it impacts everyone, not just web component users. Right. So, but it's mentioned we fixed this
[208:13.64] by making the compiler like aware of this design there assume top of document. Apparently isn't
[208:18.28] always safe. Check this out. Um, this was an issue that was opened up on GitHub a little while ago.
[208:22.84] People were like, uh, I currently work on an application based on micro frontends, blah, blah,
[208:26.04] blah. I have solid, solid basing include, assume that windows.document was the document that we're
[208:31.72] inserting. Um, but that, that is wrong here because the, you know, again, the custom elements need to
[208:40.12] work off a different document. And suddenly we get in this weird thing where you, you like, we're talking
[208:46.52] about figuring out how to make solids render function aware of what documents are done. This is like an API
[208:55.24] that is designed to be cross-platform, not Dom based, like not the render function, but the root
[209:01.32] function, like the reactive root. Basically we need a way to eject Dom API into a non-platform specific
[209:08.04] reactive core, um, to get this to work. Um, I think we can solve it probably, but like I haven't managed
[209:16.28] to merge this yet. Um, I have to think about this. The core reactor library is a platform agnostic, isn't
[209:20.36] aware of the Dom. So patching owner doesn't feel right, but I'm sure how else to get it right. Like
[209:24.60] this whole document ownership problem and upgrade problem has actually manifested into like, oh,
[209:33.48] we can't just do something reasonable. We have to actually like expose this out, you know, sorry, it's
[209:46.36] Yeah. I mean, that's, that's, that's fair. No, no one did. I mean, a lot of the times it makes sense
[209:52.68] to a certain perspective, why you think the performance would be worse. It's doing more work.
[209:56.20] Like, do I write a performance bug because inner HTML is slower than text content?
[210:01.56] I mean, generally what, I mean, this part of generally what frameworks do is they find the
[210:13.00] fastest way to do things and they do it the fastest possible way, right? Like if some, something is
[210:23.56] slower, we don't use it. It's why not? Well, because can you literally, are you suggesting that we
[210:34.92] literally open, like the Dom is slow, but like, like, like everything's slow.
[210:47.56] It was, I, I guess the thing is like
[210:53.24] until, uh, until we were being forced into it, we wouldn't have cared. Right. So
[211:02.84] Yeah. I mean, I guess, I guess that's fair. It's like, Hey, you guys want us to use this API slower
[211:08.84] than the other one. Can we do something about it?
[211:11.16] Yeah. Yeah. No, that's fair. I generally, generally speaking, um, when I see something do more work than
[211:22.04] something else, I, I have traditionally given on performance, I've traditionally given the benefit of
[211:26.92] the doubt that it's because it's doing more work. So we, you know, that's the cloud you're trying to
[211:34.76] get. Okay. Sure. Right. I mean, it's one of those ones that's kind of like a little bit weird. Cause
[211:41.48] it's like, do you know why node.data is faster than setting text content? Like there's certain
[211:51.24] properties that write faster on text nodes for, for app. Like we, we have like this long list of stuff
[211:58.60] that's all discovered through trial and error, um, that could conceivably change between versions.
[212:03.48] Um, and it's like, you don't lament the slow stuff. Usually you just do use the faster stuff.
[212:13.08] Yeah. Yeah. I mean, to be fair, um,
[212:24.52] I, I, I was as it being slower was like, like, I guess I just accepted it. I was just like, okay,
[212:35.32] right. Like I w w the reason, like when I wrote the article, I wanted to just collect a bunch of issues.
[212:41.56] It not, this stuff is just examples of a whole categorical thing. This is why I still stand by
[212:50.36] the original article because what I'm getting at is like, I'm, I can nitpick at these details,
[212:54.44] but it doesn't change like the, the overall perspective on it. It just is like supporting of
[213:01.80] where things, the complexity is added and someone that's going to ask, is it necessary? Like,
[213:12.60] because the argument I've got is like, complexity is not added. And like it says, no, complexity is added.
[213:20.36] I mean, standards do change. I mean, they evolve slowly. My, my, my biggest concern is it's like,
[213:30.20] what if I think you're fun, like you're fundamentally doing the wrong thing? Like,
[213:34.52] it's not a fixable problem. It's just like, just the, it's like the, the wrong abstraction, let's say.
[213:45.56] And because of that abstraction, now we all have to deal with it. Like, I think that's.
[213:52.76] Yes. Uh, that's the, that is, that is fair. Um, well, I mean, some of the complexity, I would still
[214:02.12] have to worry about whatever this, this problem is like, obviously I have to be realistic here. I can't
[214:08.04] go back to a place where I could ignore this whole document upgrade timing thing, but like, this is
[214:17.72] why I thought like an issue like this was kind of interesting because like in, it never ends, but I
[214:23.08] mean, it, it, I, I get it. It's hard because no, not everyone's gonna be happy about paying the cost
[214:30.12] and we all have to like deal with it within reason. Right. Um,
[214:35.56] yeah, but that, that's not a helpful thing either. We, we don't really have that choice realistically.
[214:47.80] This is, this is just like something is there. People will use it. Now we're, now we're stuck with it.
[214:58.36] You know, that, that, that's been most of my point here. Right. Web components are here there, but like,
[215:04.52] you know, I, I don't think we should go into like, oh, then blank shouldn't support it or
[215:12.28] doesn't need to support it. No. I mean, we're, you know,
[215:26.52] interesting. Just a note, the web component author can now set clonable to true for the shadow root
[215:34.36] and both clone node and import node will work. Interesting.
[215:37.00] That's interesting. To be fair, web components aren't the only import node problem. Lazy, image lazy also
[215:50.44] also has this. I think in general, this area is, is a little bit frustrating. Um,
[215:58.76] it's, it's always tricky. Cause you, you go to the browser and you report an issue.
[216:04.44] And then the browser's like, like I've re every issue I've ever reported against Mozilla or Chrome.
[216:11.32] They're just like the, they, they basically like kind of go like, it's not our problem. We're actually
[216:17.24] doing it right. The other browsers are not doing it right. And you're just like, it's very disheartening.
[216:22.28] I don't even know, like even like I, it's very rare that anything that actually like of this nature,
[216:31.32] they put out there actually ever gets anywhere. Um, so it's like, it's, it's funny. Do you go to the
[216:38.12] standards and see if those are wrong? Do you go to the browsers when they different implementations
[216:43.40] to see if they are wrong? Um, there's a bit of a awkwardness here. So yeah, I mean, I think you're
[216:50.92] fair. It's like when people use our framework and they shortcut features because they're like,
[216:54.68] uh, this didn't work for us. And then they just like cut it. And then they, they get annoyed at you
[216:58.44] for, you know, having these features. Like I don't like suspense. So I, I, I, I, I, I get what you're saying.
[217:05.40] Yeah. It's just, it's one of those things where like, I don't have the time to, and I think this is
[217:28.52] where you wanted to get on that conversation. Like I have found that talking standards, people have no
[217:35.16] shortage of, of like wanting to talk through the issue. So I, I, I'm not, I, I've mentioned multiple
[217:41.88] times on stream. It's just like, the problem is it's like, and we, we are stuck here because we let
[217:49.96] it pass. I think the best thing we can do really is get ahead of stuff in the future that would be
[217:56.04] terrible. Like we find catastrophic and make sure it doesn't happen and then focus, you know, on
[218:04.44] slowly managing expectations around this stuff.
[218:09.48] Yeah. I mean, I, I've, I've been involved with what was a community protocols thing. I like, I have,
[218:21.72] it's not like I haven't seen this stuff. It's just like
[218:30.28] there, there's, there's a degree to like the fact that this web components existence. And I know this
[218:39.32] is kind of like, oh, you're just whining kind of perspective. I get that. It's the fact that web
[218:43.24] components existence has. And like the way these interact with each other, all these APIs has just
[218:49.16] opened up this like can of worms that just didn't need to be opened up from our perspective. I understand
[218:54.20] that you're like, well, we also have to accomplish this in this where our scope is wider. Like I get,
[218:59.24] I get that. It's just like, it isn't, it's, it's really web codes, especially I think have been a
[219:05.72] frustration point on this stuff because it's just like, when we look at it, especially for framework
[219:11.08] authorization, it's like, who ever asked for this? Like, it's just, it's so, it feels so backwards. And it's just
[219:19.56] like, it's like, it's just like, it's just like, now, now it's your problem, you know? And it's,
[219:26.28] you're like, well, you didn't help, you know, which is fine. We want this feedback. We want people to help
[219:31.72] but it's just like, it's, we're already, you know, like, I get it. You're like, we're already here. Now we have
[219:42.20] to live with it. And it's like, it just, this effort to figure out how to make things work when it just like,
[219:52.68] arguably shouldn't even be there in the first place. It's, it's, it's, it's brutal.
[219:57.40] You know what I mean? Like, it's, it's like, yeah, I, I, I, I get what you're saying. Like,
[220:07.72] if we felt strongly enough about it, why don't we just not support it, then we don't have to worry
[220:11.56] about it. And then this goes away. Right. If you're committing to supporting a feature, you know,
[220:17.80] and I think this is the problem. I think, I think we're kind of getting to where it is.
[220:20.84] It wasn't that the frameworks didn't want to support web components. It's a lot of them actually tried to,
[220:25.96] and then like, it, it, we just like, like, it's this, you know what I mean? It's like,
[220:31.72] like, now it's just like this, this thing that's just from our perspective, offer almost zero value. And
[220:49.80] just, we have to spend time to make sure that they, it, it doesn't sabotage us in the future
[220:56.44] any further. Um, yeah, it's, it's, it's, it's, it's hard,
[221:01.80] you know, especially for frameworks with less resources, frameworks that, you know, only have,
[221:08.52] you know, a handful of full-time developers. It's just like, there's whole committees and stuff
[221:15.08] work who've worked on, I know they're volunteers and they're open source, but like who worked on,
[221:20.36] on, on these things compared to the, you know, the voice of, you know, yeah, it's just, it's,
[221:25.56] it's disproportional, which makes it pretty, pretty, pretty tricky.
[221:32.20] I, thank you for coming in on this, Michael, because you're, you're right. This is like a,
[221:37.56] like kind of the crux of the people part of the problem, right? Um, because it's like,
[221:46.04] it's a lot easier, like you find this with application development, like on a different
[221:53.40] scale, right? When someone's using your framework and something doesn't work and they find a bug,
[221:56.76] they just work around the bug. Um, they might not even report the bug and you're like, man,
[222:01.24] if you report the bug, you could have helped all the other people who use the framework. And,
[222:05.40] and instead you just like found a workaround and just continued on with your day.
[222:09.16] Sometimes JavaScript frameworks on top of the platform are a bit like that. They're just like,
[222:14.92] oh, that's weird. Okay, whatever. We'll do the next thing. But as I said, I got to the article,
[222:23.40] not because of any individual, one of these things, it's because it was like the, the, what I call like
[222:30.28] the lie, the myth about web components and future proofing and you know, that, that I was just like,
[222:35.40] Oh, just hold on a second. Like they aren't. And they have made things more complicated.
[222:46.04] There is a tax. So like, it's not just like I can ignore them, but it's also not like they're
[222:53.48] beneficial. So in, in like a certain sense, I understand some people find them beneficial,
[222:58.12] but that's the kind of thing. Right. People do continue. I, I, I, I just, I, I, I witnessed that,
[223:05.80] uh, when I joined on the, uh, web, uh, web, the, uh, the web, um, component thing, I, I was talking
[223:14.68] about something about resumability and serialization and someone like basically like drafted out an idea
[223:18.84] of like how this could work. And I was like, okay, well, like it's missing some details on what
[223:24.28] mechanically how this could work. Um, you know, like it's, it's sometimes I wonder like the eagerness
[223:34.76] to like find these solutions gets like way ahead of where, like we, we reasonably should, should be.
[223:43.88] Um, I don't know. That's just like the sense I get. I was just like, it's like so much context
[223:50.12] information being missing. And then just like, yeah, but I mean, maybe that's just part of like the,
[223:55.32] the attitude. I don't know. It's just something that I've noticed anyways. Sorry. I, I, we've kind
[223:59.88] of gone very deep in this specific, um, zone on, on, on this. I probably should get back to my,
[224:07.32] where I was going here. Um, uh, what do we got? Reactivity. Signals have been becoming a new norm
[224:14.44] at front end. Sure. Not only is frameworks, but also candidate for standardization. This has been
[224:18.76] an interesting interaction with life cycles because most cases top level, I don't believe you want to
[224:22.12] auto track reactivity, but because these events can sometimes fire synchronously, you might find
[224:26.68] yourself tracking things you never intended. One side effect of realizing that
[224:29.64] import node was preferred was that suddenly all reactive reads and constructor and connected
[224:33.08] callbacks are triggering unexpected re-renders of the whole web component.
[224:36.36] So when we detect web components, we also untrack the whole template,
[224:39.56] but that isn't always enough. So this was a fun one. I got this issue.
[224:47.56] Custom elements have numerous callbacks and these should untrack to avoid recursion. This is a bit
[224:54.76] tricky because a lot of the DOM methods for manipulation could be caused callbacks to fire. So
[224:59.40] it's just basically showing all the callbacks and saying that any of these could be reactive scope.
[225:05.00] Again, this problem, um, I feel like let's go back to our table and kind of organize stuff here again.
[225:12.28] So when we're authoring consuming, yeah, I mean, I don't know if there's a separate category for this,
[225:21.32] but I think one of the problems that we have to consider here is that if the same framework is on the outside and
[225:27.56] the inside, are we like, what are we doing? Right? Like, are we in a good spot? Um,
[225:33.16] we're in a good spot because attributes or props is mostly external thing like consuming, um, upgrade
[225:42.44] lifecycle is mostly a consuming concern. Um,
[225:51.64] I guess this is an authoring problem. This is still a consuming concern. It's only like, like,
[225:56.52] um, you know, you know, this was one for me, but like reactivity, um, when also when theme
[226:09.72] live inside outside. Right. All right. Kind of interesting.
[226:16.76] So, yeah, I, I, let me see here. Did you do back to our list here?
[226:40.68] Um, I mentioned that similar to ht inner HTML, but yeah, I mean, I'm sorry, similar to proxies,
[226:59.40] but inner HTML is interesting. Cause like, you don't always see the result of that. Okay. Context APIs.
[227:07.08] I put this under life cycle. That's interesting. It's funny. Cause I don't think
[227:10.84] I have a few notes on this.
[227:14.60] Well, a framework can take precautions. It can't protect against all uses.
[227:21.80] We can't guarantee with certainty. All cases won't come across a non upgraded element. If you can,
[227:27.80] can't guarantee that your children won't be upgraded at the time, the parent rendering,
[227:31.72] then it's pretty difficult to have a mechanism like context work in frame. Yeah, because context works
[227:36.60] um, synchronously in frameworks, this tends to be hierarchical mechanisms that live synchronously
[227:41.80] during the lifetime of rendering the framework injects it wherever it needs to run stuff and goes
[227:46.20] from there. So like basically like while it's executing, like react runs, it's read on like it's,
[227:51.16] it has a context when solid runs a, uh, a render effect or it has a context. And so we keep context in
[227:57.64] the reactive system. Whenever computation runs, we're able to look at through the computation and react
[228:01.24] it's basically dom. Yeah. That's what I just said. However, were an element to upgrade asynchronously,
[228:05.80] then the framework wouldn't be in control of the re-entry point. There would be no context there.
[228:10.12] Where would you possibly do a lookup? There is one thing you have the parent dom node, presumably
[228:15.48] that was rendered by a parent component. So the point of rendering. Yeah. I feel like,
[228:19.88] I don't know where this fits in my map, but both, both of these are the same thing where you have the
[228:27.48] same system on both sides. Cause I'm not suggesting that these are framework components. I'm, this is
[228:34.04] like a category maybe we need here. It's like, um, framework on both sides concerns. And in this place,
[228:46.12] we have, uh, what do we have? Uh, reactivity concerns, context concerns, they're very, they're very similar.
[229:08.04] Right. So where are we, do, do, do, do, do, do, do.
[229:12.44] Presumably this was rendered by a parent component. So the point of rendering, you have a context.
[229:16.20] This is exactly what we do in solid. When we detect a custom element, we compile an extra line
[229:19.88] to add the owning context to it. So what I, well, a trick that we did in solid is basically like,
[229:23.96] you'll see in our compiler, we add an, a dollar sign owner prop and we get the context so that we can
[229:29.32] write on the elements. So even if like, there's some scenario, like maybe you don't actually have the
[229:34.44] JavaScript loaded lazy loading of the element yet. So import node has the document, but it hasn't
[229:38.68] upgraded because you haven't laid like, haven't loaded the JavaScript for that component yet.
[229:42.60] Um, you have an owner on the DOM and that way, even though it will execute asynchronously,
[229:47.96] you won't actually, you can look up the DOM parent tree to find it instead of, uh, instead of having to
[229:56.84] rely on, um, a context that which can't be there. Of course, consume the web component. We need to
[230:02.04] know how to restore it inside like our solid element library, right? So like this only works because
[230:07.40] we control both sides, but if you have your own web component inflammation, you need to manage that
[230:11.24] yourself if you want to tap into solids context. Okay. Um, so web component frameworks have a solution.
[230:16.52] Um, so if, since it's given that no avoiding the promo sort of document important, it's funny,
[230:22.44] I stress that too much, but signals based, uh, reactivity is an interesting topic.
[230:26.20] Cravins don't look it, but context for web components can be solved. Back in 2014,
[230:30.04] when I was involved in a discussion, web component community group, uh, around events for context.
[230:33.88] I don't know if this approach has evolved, but it's sufficiently to see how one might approach
[230:36.76] web components in a web component framework. Just as you, what you do is you have elements,
[230:43.64] fire events, and they bubble up the tree to the parent. And then those events have a function on them
[230:50.60] that the parent basically calls the function with the arguments to get it back down. And that all
[230:57.08] happens synchronously. So you're able to basically use DOM events to manage context. I quite smart
[231:03.64] approach, I will say, um, because it works even with asynchronous upgrades, because at any point when the
[231:10.36] child web component like wakes up, um, then it can, you know, fire its event and get the parent.
[231:20.04] So it's kind of like a DOM lookup, but it's not manual. It's using the event system.
[231:23.24] Um, but it is very tight to the DOM, right? So I'm very interested to see, um, how an approach
[231:29.72] like this works with SSR. I wonder like the lit, I saw some, uh, lit.dev. I saw some conversation on
[231:38.28] Twitter suggesting that if I go to the docs and I, if I managing data, that context is actually right here.
[231:45.40] So they will let context context, the data needs assume blah, blah, blah. My understanding is that
[231:51.72] this uses this approach. I'm interested in how they handle, um, SSR, right? Because it would,
[232:01.16] it would suggest, I think that, um, that you don't only need to emulate rendering custom elements, but
[232:09.56] emulate the DOM event system on the server in order to make this work. One of the challenges with SSR has
[232:18.84] been that it's very performance sensitive. Unlike the, like a lot of the browser stuff where you're
[232:25.16] stuck with the overhead of the DOM, we can make SSR significantly faster by just using string templates.
[232:31.00] that's why when the, you know, the fast five benchmark came out, you know, a few weeks back,
[232:34.92] like the difference between frameworks was literally boiled down to like, like, like one extra attribute
[232:42.04] or whatever. It's, it's, it's, it's obviously very focused in on like something that, you know, repeats,
[232:49.64] you know, 10,000 times or something. Right. But my point is like performance on server rendering
[232:56.20] is like in a whole other dimension. Um, in terms of like, like, like it's, it's, it's, it's a order
[233:02.76] magnitude difference in terms of sensitivity to, to overhead, which is why when I started with solid,
[233:08.28] of course I use the DOM on my server rendering. Cause I was like, I already have this. I pulled out
[233:13.32] JS DOM and then I was like, okay, that's too heavy. I, what was the other one I tried after? I can't
[233:16.84] remember the early days. I was like, I already have this. Why do we want to do stuff? I realized that
[233:21.72] putting the DOM in the server was so, so expensive that I basically made a whole different compilation
[233:29.40] target, um, and changed how our reactivity works completely to, to make the performance difference
[233:35.64] change. Right. So it's, it's very difficult, you know, situation to be in when, you know,
[233:43.48] someone kind of comes in and is like, oh, now let's, let's, let's like render web components on
[233:51.64] the server. It's like, uh, uh, I, I know there's solutions that you don't need to emulate the full
[233:57.00] DOM, but the degree of DOM APIs is something I feel like we'd be sensitive to anyways. Um, it's also a
[234:02.20] bigger aspect considering non-web custom renders. This is what makes it hard to interface framework
[234:05.72] concept of context. It communicates along different channels. Context can exist outside of environments
[234:09.64] where you'd use web components or DOM elements at all. So using the DOM as a vehicle doesn't feel
[234:13.32] like a universal choice. Yeah. So yeah, I think, I think it's a, there's a good solution for web
[234:18.28] components, but it's not a universal solution outside of web components, which makes it a little bit
[234:22.20] tricky. Um, lifecycle takeaway. DOM before web components were something that would, we know,
[234:26.84] execute synchronously without hidden interceptable behavior. Now there's no such guarantees exist.
[234:32.36] There's solution with solvents specifically for web components, but when frameworks are considering more
[234:36.84] than just web platform relying on DOM mechanisms or things that come for free with frameworks on
[234:41.00] reactivity system, whether based on virtual DOM or signals is unnecessary. This makes web components
[234:44.92] no more compatible with frameworks and frameworks are with each other. Yeah. Okay. Cool. Uh, so that,
[234:54.84] that's mostly what I was trying to get on there. Um, yeah, so,
[235:02.28] so far we've been talking mostly on cons consumption and then these ones kind of tie on
[235:07.16] both consumption and authoring, but they're problems that only happen when you're trying to like straddle
[235:11.32] the line. It's not necessarily saying that web components should be framework components, which we
[235:15.00] talked about, which is the composition consideration. It's just saying that like, if you play on both sides,
[235:22.12] this is, this is where things get tricky. Um, reactivity generally works with singletons. So versioning,
[235:28.36] you know, considerations also are some, some fun pieces. Um, anyway, sorry about that. Uh,
[235:37.56] kind of got lost on my, my train of thought there. Let's, let's, uh, let's go into, I think my last,
[235:44.68] um, mechanical piece that I've talked about here, right? What did I do here? It doesn't end here.
[235:50.12] Dominic can clone custom different behaviors. Dom based life cycles can trigger signals asynchronously.
[235:54.76] This wreaks havoc with these like reactivity tracking context. How these details are important to
[235:58.44] interface with native dom papers and events. They are also all things that Jeff's converted doesn't
[236:02.28] have to worry about. Okay. Yeah. So I was just expanding on this one. And then the last one is
[236:06.20] there's other idiosyncrasies, like the way event targeting works in the shadow dom. Some events don't
[236:09.96] compose, don't bubble beyond the shadow dom boundaries. Some events don't bubble consistently
[236:13.32] because they don't work as different target, like in focus in, we should talk about these for days,
[236:17.24] but I wanted to divert attention. So this last, uh, concern here, um, when I talk about overhead,
[236:23.16] um, and, and don't get me on, this is not an exclusive list. This is what I came up with the,
[236:28.20] in that morning, based on like what I remember from the last, you know, few weeks, um, was this one,
[236:35.40] which is, um, event and event. And I, I, they understand why events are a tricky subject. You have to
[236:43.48] understand that, uh, event delegation is very, very, very important to JavaScript frameworks.
[236:51.24] Um, let me see here.
[236:56.20] The reason for that is like, it's not just because we want the performance of being able to delegate
[237:03.72] events, but they're, they're mechanically important for things like portals. They are important for
[237:09.48] things like, uh, selective or any kind of partial hydration. Um, right.
[237:15.96] Basically, if you're familiar with, uh, uh, partial hydration or selective hydration react,
[237:25.32] they basically look at where you interact with the page. Like we actually load stuff up like in the,
[237:32.04] like synchronous in line in the page when we render it before the framework loads to capture and replay
[237:39.00] events so that we can ensure to prioritize parts of the page you interact with or resumability,
[237:45.48] what parts of the code even need to load in the first place. Like if you have event delegation,
[237:50.92] you don't need to load all the code on the page. See, like there's this conflict. Like if you're
[237:54.52] building declarative UIs, you generally have to control the whole zone. If you, if you want to like,
[238:00.68] um, it would be declarative, right? You're like, here's what I'm writing. This is what I get. It's like,
[238:06.12] kind of like a whizzy wig kind of thinking. So it's awkward. It's, it's hard to write something that's
[238:13.40] like that and then have it not run all the code. That's why a lot of hydration concerns are, are,
[238:19.72] are so tricky. This is why single page apps and optimizing for them, even with SSR has not been
[238:25.40] an easy task. I talk about hydration being like the most difficult problem to solve in ages, but
[238:31.08] where the solutions come in are all based on event delegation.
[238:39.00] Right. Um, initially, um, let's see here. Yeah. See, I was saying, yeah, initially a lot of
[238:50.60] delegation was to handle inconsistencies between browser links, because they didn't all follow the
[238:54.84] specs the same, different events were different. We needed to kind of normalize. Um, but over time,
[238:59.40] these features need more benefit, propagating events through portals, mitigate cost of hydration,
[239:03.40] even capture and replay. It's gone to a point where event delegation non-negotiable feature for
[239:07.48] frameworks. Yeah. So it's interesting. Cause like, as I told you, when I went into the discord,
[239:11.32] people like, oh, let's work on a spec for event delegation. And I'm like, okay, like,
[239:15.64] yeah, I mean, I get where the intention is coming from, but this is where I was talking about before,
[239:22.60] where I wonder sometimes like, whether like just one more framework, it'll solve it. I'm sure, you know,
[239:28.76] sometimes, you know, on the spec side, I, I think, I think we're starting to see this to be enough,
[239:35.56] a trend that the conversation should probably start. React has event replay delegation solid does quick
[239:41.24] does. Um, I don't think everyone else does yet, but this is one of those things that I think, um,
[239:47.48] is going to be incredibly, um, common moving forward. And it, and what does this have to do
[239:54.36] with authoring? Well, it's, it's one of those things that if event delegation breaks stuff,
[240:02.68] it's weird. Um, I want to show you, uh, not this one. It's so funny. This is like my GitHub
[240:09.00] auto-complete issue. It's like the most, like the one that they always associate with me
[240:13.80] on GitHub when I put it, uh, dot com. And it's so funny cause this was actually, um,
[240:18.92] trying to figure out how to stream content to an HTML element, which is really important. And
[240:25.32] it's actually really pro appropriate for the stream because they like really, really wanted to have this
[240:33.64] feature in, but some, I forget, there's some reason in here why it doesn't really work. Um, and then it
[240:39.32] finally came back when they, when they added, um, streaming into the, the declarative shadow dom,
[240:44.52] unfortunately streaming to the declared shadow dom, um, you know, you know, isn't a generic enough
[240:52.60] solution for a lot of the things we have to solve mostly because the, uh, slots have to be at the same
[240:57.08] height, um, no nesting, but it was just kind of funny that this, this issue I've, I've been looking at
[241:03.88] this issue for a very, very long time. Um, anyway, uh, sorry, that's not what I was here for. It was
[241:10.12] just a, it's just kind of funny aside. Well, maybe what I'm getting at is we didn't, maybe this is our
[241:22.68] fault for thinking they're like framework component, but like, why, when shouldn't we author it? Like,
[241:26.52] look at lit, lit authors components and in components, it works basically the same as any
[241:33.16] JavaScript framework and you can put on both sides. I know a lot of people use solid to author their
[241:37.08] JavaScript frameworks, right? Um, it's interesting, like about how, you know, how to, if you want to
[241:45.56] benefit from resumability, you, you're going to need to potentially write that web component quick.
[241:52.92] I don't know if actually weapon one will allow you to do that. Maybe that's the problem. Like maybe,
[241:57.32] maybe like, maybe like we shouldn't expect to have resumable web components, um, you know,
[242:03.48] coordinated in the way, like I saw some, again, the spec was around HTML, but they're like,
[242:07.08] resumability is basically based off signals. It's a signals API. It's a very, very JavaScript based API.
[242:12.44] Um, anyways, uh, where was I going here? Uh, um, there was an issue, right? Sorry. I just getting
[242:22.92] myself sidetracked here a little bit. Um, I want to talk about events. So I want to talk about what
[242:29.00] event am I thinking about focus in? Yes. Focus. And I want to focus in.
[242:39.48] this, uh, this, this was a good one because it's like focus is not working shadow root. I,
[242:49.56] I have to use on focus, which is our non-delegated version. Okay. So I was given this issue where,
[242:56.36] where, uh, it's fine. I remade it in our playground so I can see it. So the idea here is
[243:06.60] when you click on a button to gain focus, right? So what's the console here? When you click
[243:09.88] first time, you see one. When I click the second time in the normal DOM, you see two first time,
[243:14.20] one, two, we switch back and we see it. But in the shadow root, when I click the first time,
[243:19.08] there's one. Then I click the second time. It doesn't work back to the first one. Still doesn't
[243:23.48] work. Doesn't work. Doesn't work. And when I go back here, okay, now it works. And now it'll work
[243:29.96] again too. Okay. But then when I switch again, still doesn't. So basically the focus, um,
[243:35.64] isn't noticing the focus difference between these two buttons when I, when I delegate. So you might be
[243:43.64] thinking, okay, maybe you need to like retarget it, but we actually already do retargeting. So what's
[243:47.80] going on here? Well, it turned out what I found out, what I didn't realize before. Um, but you know,
[243:54.04] it's part of the fun is that what if I, what I decided to do is I put non-delegated event,
[244:07.56] like I manually put the event above both the shadow root wrapper. So there's no custom element
[244:14.12] involved and above the normal DOM elements. And I did this exercise again. And again, when I'm doing it,
[244:20.68] one, two, this is still working, this one not working, same thing, not working. So
[244:26.92] it, I realized that it wasn't even something wrong with our targeting or expansion. It was literally
[244:34.20] the fact that because the target is the same from the outside, because what they do with, um,
[244:44.84] with the shadow DOM is that if the event bubbles past the shadow DOM, it treats like it's, it's opaque.
[244:54.76] It treats the whole thing as the same element, but it's not just enough that like impacts the retargeting.
[245:01.40] It actually doesn't bubble past that point. This event will never fire because it's the same target.
[245:13.80] So like it makes it pretty, pretty difficult. Like you understand why, right? Picture if this
[245:21.48] was like a hover event and you didn't want to differentiate between, between like, or like
[245:28.76] these things, or sorry, we're in the shadow DOM. Pretend this is a hover event. You you're hovering
[245:32.84] the whole web component conceptually. You're not hovering the separate buttons. So you wouldn't expect,
[245:37.64] you know, if I go here and then go here to fire off two different, two different things, I guess. Right.
[245:43.08] Or focus or whatever, like two different things. Like you expect the event to only happen once because
[245:48.28] I'm only focusing on this one complete shadow DOM element, but this is kind of broken for the
[245:57.64] perspective of, uh, of like trying to use event delegation for stuff. Um, and I mean, this has
[246:03.80] been kind of part of the problem. Let me show you something, DOM expressions. Let's go here.
[246:10.60] Um, packages, DOM expressions, source, client JS. Okay. Let's go. Let's go. Um,
[246:22.68] handle or event handler, event handler. Here we go. This, this, this is, this is what our logic looks
[246:33.16] like now for, uh, for, uh, um, event delegation. Um, it's so funny because it literally could be like a
[246:41.24] third of the size, but first of all, we have to make sure that we are, um, we keep the original targets
[246:49.40] because we have to like, basically we put, we, we do retargeting of the target and we have to do
[246:55.96] retargeting a kind of like a proxy over the current target. So as we walk up, it references the current
[247:02.20] node that we are walking up. And then now, um, because of the intricacies of walking up both
[247:10.60] web component trees and portal trees and stuff. Um, yeah, I mean, it's fine. Like this is internal
[247:20.68] framework code. I'm just, what I'm getting at is almost all the work we do is to undo retargeting.
[247:27.24] Like basically like retarget path zero, like almost everything we do as a framework author is to undo
[247:35.80] what the shadow dom does. And we can, where we can, there's other places, which we can't,
[247:41.96] like I showed with focus in another example, this would be like solid router. Let me see if there's,
[247:48.84] there's let's, let's go here. Um, someone was trying to use server actions from inside
[247:54.76] web components. So I was done with solar server actions. So, you know,
[248:00.92] so again, I was like, what's the vanilla behavior, right? Cause I realized that if I made a web
[248:07.48] component, the MIT events don't, um, don't, um, compose it's called, they don't leave the,
[248:20.28] they don't leave the form. Like they don't leave the web component that they're part of. There's
[248:25.40] probably some security reason for this. I don't know, whatever, but they don't compose,
[248:29.24] which means that event delegated submit events, uh, don't, don't work generally. So,
[248:35.40] um, there, there is a solution to this, right? But it's just like a perfect example of like,
[248:41.32] where like you, you're hoping you have reasonable behavior. The trick here of what I figured out
[248:46.12] was that if I just made a fake submit event, basically, and just like, you know, compose true,
[248:53.80] then we get past that boundary. So you can always manually fire the event yourself
[248:58.04] to make sure it goes up. But this is all like considerations as a component author,
[249:01.72] you'd have to consider because it's funny. It's the consumer that actually wants to make the decision
[249:07.00] here. Um, in our case, but like basically, um, there's just a lot of innate behaviors, even on
[249:17.16] native stuff that already exists, um, that now are impacted by this shadow, um, boundary. As I said,
[249:23.96] bubbles isn't the only thing you have to be concerned about. You have to also be concerned with composed,
[249:28.12] if you haven't heard of it. Yeah, yeah, I know. I'm just showing you the edge cases where this
[249:35.64] doesn't work. We're like, we do do this compose path, but there's like, there's a bunch of cases
[249:40.52] where following the compose path that doesn't actually even work. Right.
[249:46.44] I mean, you're suggesting this as an intended behavior.
[249:54.28] whether a form submit event is composed, I'm pretty sure is intended behavior.
[249:59.96] And as I showed you with the focus event, that seems very intentional. It's not, it's okay,
[250:06.84] you know, but like, it makes sense. Like if you're viewing this as a contained thing
[250:11.72] and it gets focused, why would you expect focusing somewhere else inside the same thing, not to be the
[250:16.84] same focus, so to speak. Right. Like there's going to be, whether some of this is a bug
[250:24.12] or not, there is going to be a split simply, perhaps because of the difference of expectations here.
[250:29.40] Right. Like,
[250:35.40] like, how do you fix correct behavior?
[250:49.08] Right. More APIs to express intent to say like, oh, actually I want to, because it's not on the
[250:56.52] firer's side. I don't think it's on, I mean, it could be on the firer's side. That's interesting.
[251:00.36] I'm not sure if it's on the firer's side or on the consumer's side.
[251:06.52] Because if it's on the consumer's side, it kind of maybe is fighting the intent. Like the same
[251:14.76] reason we have open and close exist on Shadow DOM, right? They want to close it off and the consumer
[251:20.52] can't go like, no, I actually want it open. But then on the author's side, then they'd have to actually
[251:27.40] account for the possibility of someone doing this with their components and other people not wanting
[251:31.64] them to do it either, because like whether I want to do it. So it's probably both sides, right? Because
[251:37.32] if it makes sense in that example, I showed you for like this, not to fire, um, from like a base
[251:44.28] standpoint, because like I designed my element, this is, it has focus, but like, it's almost like we just
[251:51.48] want to kind of like have like God mode and walk around it. But I understand like you don't give
[251:57.64] your users God mode, right? Like there's, there's like, I think this is a very interesting, interesting
[252:05.24] tension here, right? Between like intended behavior as a consumable thing that you're expected to use.
[252:13.72] And, and then like exploring that extensibility, we're having this problem with the signals, uh,
[252:18.84] proposal a little bit too. I mean, framework authors all finally agreed on stuff. But like,
[252:22.68] if you think about it, the funniest thing about the signals proposal is it's almost anonymous that no
[252:27.96] framework actually wants to expose the signals API to their end user. Isn't that funny? We come up with
[252:33.80] a spec to standardize it and you're like, okay, good. Everyone can use signals. But one thing that
[252:37.96] all the first, like they need the, the internals, they need the details. They need like, you know,
[252:42.60] be able to traverse the reactive tree, know about the shape, be able to serialize, do all this stuff.
[252:47.96] But they also don't want to give any of that to the end users because it could mess with their like
[252:53.80] ability. Like basically they could do stuff with it that would actually break the framework.
[252:57.72] So like there is this sort of tension here when you choose abstractions to, um, block certain things
[253:10.28] for the sake of, uh, like making the not leak, so to speak. Like it's, it's, it's, it's, it is an
[253:21.96] interesting tension for sure.
[253:27.40] Because like I often say like the problem with use effect, for example, in react is not
[253:31.24] that it's a terrible hook. It's that that's when you see the, the, the leak in the abstraction. That's
[253:37.56] like, that's the, uh, escape hatch. If, if sometimes it's better, like sometimes escape hatches tie your
[253:45.56] hands terribly, right? Sometimes things kind of work at cross purposes. Like sometimes you give people
[253:52.60] escape hatch and they realize, well, this means I'll never, ever be able to do this optimization.
[253:56.44] And I think sometimes like it makes sense that when the, uh, browser implementers get into specs,
[254:03.48] that's what they are defending. They're like, look guys, if you, if we do this,
[254:07.24] we, we can never optimize this thing. So I don't know, in this particular case, I'm just kind of,
[254:13.88] most of these examples are, are just kind of, they're not necessarily bugs. They're differences on
[254:23.96] perspective. Right. It should be a concern for the framework authors, but I'm saying it's
[254:37.16] the, the, I think the, the authors of the components might have a say in this.
[254:53.64] Web components are fine. They just have an MCOPSLog model that breaks many frameworks that
[255:05.72] are interested in controlling the render cycle. So like every framework.
[255:09.64] Well, I'm just saying like, if you look it up, I've looked at the stuff before I used to
[255:20.36] solid actually, like when I created the list of events that I, uh, put on the, um, that I delegate,
[255:27.40] I went against the compose list. I went through all the very familiar with going through MDN docs and stuff
[255:33.72] and trying to figure out, you know, uh, browser behaviors and stuff. So like there,
[255:38.92] the intention, a lot of these things are like specced somewhere.
[255:51.64] Yeah. Yeah. Yeah. Yeah. Okay. Yeah. I agree with that. Yeah. Well, I'm saying cops like farmers
[255:55.24] don't want that. No, because we, our ability, like it's, it's, it's what I was saying in the article
[256:01.56] about like, we're going to a place where components are just in your head, just like frameworks in your
[256:07.08] head. Like it's a construct for your mind and we compile them away. We get rid of them. We don't want
[256:13.96] anything in our way because it means that we can optimize it. Like I feel for quick. Sometimes
[256:20.04] they probably are going to have the hardest time with web components. And I, I think about future
[256:24.28] features. I want to go in solid. And every time I like, think about, I'm just like, man, this is just
[256:28.44] like, why, why are we fighting this thing that just doesn't, and you can be like, okay, well, this is just
[256:33.80] in your narrow view of things, you know, which is fine, but it's, if it's tricky when you go, like,
[256:40.60] it's not like we didn't consider web components. So it's like, it's just like not something of particular
[256:48.28] value to us. Yeah. I know. Um, yeah, I think that's good for those examples. Yeah. I mean,
[257:01.64] there, I got nitpicky on some of the stuff there's, there's other, you know, smaller things
[257:08.84] here and there. You look at this list and you're like, look, that isn't actually that bad. Right.
[257:13.80] You know, maybe these things are solvable, but like a lot of these things are like,
[257:17.80] the reason I'm not convinced is because a lot of the times it's not about that. I don't think people
[257:23.32] can fix problems. I think we're getting to, we're going to, we will hit a point where the problems don't
[257:28.28] make sense to fix because the thinking or alignment around this goes so far that you're like, well,
[257:34.36] that's how it should work. And then it's like, okay, well, what, what, what, what can I do with that?
[257:43.08] Right. Either like step aside, don't try to, you know, like it's either just like resolve this. Okay.
[257:51.08] It's almost easier. I think at times for frameworks to, I said, I think I said it earlier, pretend
[257:55.72] that web components are just non-native. Right. And then handle them, like section them off to a
[258:03.96] compiler, custom render to handle it. To be fair, the focus event, I don't know. I, I found out about that
[258:14.60] a, uh, a week ago or two, but to be fair, it makes a hundred percent for it to be spec'd out that way.
[258:36.44] that's why Apple killed the is equals it's, it's, it's interesting to look at the issues on react 19.
[258:54.44] People are already like picking apart issues with the implementation. This is the problem.
[258:58.20] Once react said that, like we're going there now, they're going to feel the full pain of it. This is
[259:02.28] just the start. Like it just, it never ends. And I know you like, you could say that about the dom
[259:08.92] or any like plot, like tool, like, it's like, you know, like everyone, the tool they use, they're never
[259:14.28] content with. Right. You know, like you talk to someone and they're like, Oh, react, I'm reacting
[259:18.28] all over, but react sucks. You know, you're next year. Like they, they get excited and they get the point
[259:23.08] there that they, you know, they're like, you know, it's true for framework authors, the tool that we use
[259:29.24] is the platform. It's so, which is why the rhetoric from the frame, like the, I don't know, maybe they
[259:35.08] need their own category, but there's like a web component frameworks, author kind of group when
[259:40.44] they, when, like, when people like make accuse, the accusation of frameworks, like not following the
[259:45.00] platform and all that, it's just, it's BS. Like, you know what I mean? Like this is the stuff we're
[259:50.60] dealing with every single day. Like that's why when like, as I said, so many responses, I'm just like,
[259:57.16] man, like, I don't, I don't even know how to respond sometimes. Cause it's like, what are you smoking?
[260:20.60] A lot of people who have broken into optical future. I'm glad we arrived there. It's too bad
[260:36.84] that that wasn't like the obvious thing in the beginning. Cause like, I feel like when web components
[260:41.40] came out, people really wanted only two things. I wrote about this in my first article a few years ago.
[260:46.04] They wanted like a on connected or an on mount event for the Dom and they wanted style isolation.
[260:52.36] It was like, you gave people those two things and just like walked away and like saw what they did
[260:57.64] with it. We would have, we would have been in like a million times better state. I, this is not a new
[261:03.32] thing. I think I, I might've said this the first time 10 years ago. Like it's, it's just so, it's so
[261:09.08] dreadfully like the problem. I mean, it's the same thing. It's when you're, there's a desire that when
[261:14.76] you look, I talk about the article, when I talk about suspense and stuff, when you see the pieces
[261:19.00] aligning, you're like, we need all these pieces to get where we need to get. So offering them
[261:23.48] individually gives us like a second way to do it. No, there should be a single way. And suddenly
[261:27.48] everything gets conflated. All the mechanisms become part of the singular solution. Um, so like I,
[261:34.76] I can, I can get how we can get there. It's just, I don't think it's, I'm hope I, I feel a lot better
[261:40.44] about standards these days. And I think that web components were like a learning experience for
[261:46.92] everyone of like what not to do. Um, so I mean, there, there, it's positive there, right? I'm not
[261:56.92] surprised by that. It just, it's, it's very dangerous to be over ambitious on stuff. And the problem is
[262:03.08] like, we're not stuck with it, but we are kind of also stuck with it. I don't know. Is this a state
[262:09.24] of things that just continues on and on and on like, Hmm. Sorry. I just read this comment.
[262:26.04] I think a lot of frames have made sounds that are either subtly flawed or if they pick some
[262:28.44] point in time where platform changes.
[262:29.88] Yes, because they, they, they did what I did. They went, Oh, uh, clone nodes faster than import node.
[262:38.44] And then they kind of just pursued on autofocus. I, this is, this is, this is something I think
[262:45.16] react has learned when it comes to the small stuff. Although I can't see this about back in time.
[262:50.36] Cause I needed to universalize. If you provide a new mechanism, don't name it the same thing on change
[262:57.96] in react is not the change event of the browser. So like I get why we're there, but it's very,
[263:06.68] you gotta be careful not to just like substitute yourself in for the native behavior and call
[263:11.08] yourself as being different. This is something that frameworks have learned over time. Right.
[263:14.28] Cause I think this is a problem we used to do before. We used to be like, look, the browser
[263:18.20] does it this way. We'll like copy the same API of the browser and then make it like better to fit our
[263:23.88] needs. No, we should call it out as being different. Um, you know, where, where as possible,
[263:29.48] right. If we add extra functionality, we shouldn't use the same attribute name, you know, so to speak.
[263:59.48] Attribute reflection is an example of a problem highlighted content attributes had some reflection
[264:03.40] rules, but there are exceptions. A lot of framers try to map content attributes to properties,
[264:06.68] but then these, but yeah. And the thing is, because we spend all our time dealing with this,
[264:11.96] we are aware of this and we have special case and we do all this stuff and it's kind of part,
[264:16.68] part of the game. And then sometimes our, our perspective on how to handle this stuff is wrong.
[264:22.12] Like it gets outdated, you know, you're kind of like, oh, actually we now, because of this,
[264:25.64] we don't need to handle stuff. Like I acknowledge the change, but I think the challenge also here is
[264:34.04] this, like, yes, there's always going to be those small details in the same way that when people like,
[264:38.52] Oh, web components do don't do blank. They suck. And then they're like, no, but it's coming or we can
[264:42.84] do it like this or that. Like there's a lot of misunderstanding there. And I think like,
[264:46.28] no, that's, that's not the case. Let's not, let's, you know, let's not go there. Um,
[264:51.72] but I, I do think some of it is actually still, uh, at a more fundamental level, but,
[265:00.04] and I think maybe it's not the whole community. Um, it's just, there's, there's this feeling
[265:05.80] of, as I mentioned before, like this sort of the, I, I, I, I, I, I'm sorry, not the pick on Maddie here,
[265:20.44] because it just, I've seen this so many times of that, like, like where you go, they're not the
[265:26.44] same thing. They don't do the same thing. They do the same thing. Like this, this, this sort of
[265:33.24] duality that makes it like, um, like some of the rhetoric really,
[265:45.72] I guess it just like really has this conflict. It's why the harmony doesn't exist.
[265:49.72] Anyway. Um, I, I, I, I, I think I'm just going to do at this point, just it's Twitter time. Um,
[266:05.24] kind of go over some of the stuff that I bookmarked. Some of it is web component related, so we should
[266:10.20] probably go with that, but I, I'm, I'm pretty much done with my prepared content. I think about this.
[266:16.60] I mean, we need to talk about this, don't we? Um, uh,
[266:21.48] maybe we just talk about this right away.
[266:26.84] Yeah. Let's, let's talk about this right now before I officially go this week in JavaScript.
[266:40.20] Let's talk about this.
[266:43.64] Lit is not a framework. The browser is the framework.
[266:47.40] What does this even mean?
[266:55.24] Well, let's, let's listen first. Lit is not a framework built around web components
[267:02.76] or framework that uses web components. Okay. Lit is a library that helps you build web components.
[267:09.56] Okay. It's an implementation detail standard web components that happen to use it. Okay.
[267:18.12] So I guess what he, what he's saying is the fact that like going back to our
[267:33.88] Yeah, I guess what he's saying, but that, that has nothing to do with being a framework, but I,
[267:37.16] I, I, I think I get what, what, what he's saying.
[267:39.40] Like he's saying that it's not,
[267:46.44] it's kind of funny because like lit HTML is a renderer that can render web components.
[267:55.40] Right. It's, it's, it's, it's lit HTML is, you know, on in here, it's on this, like,
[268:02.44] it can consume web components. It handles attributes, there's props and understands the upgrade life cycle,
[268:08.60] you know, so to speak.
[268:10.04] Um, probably doesn't do automatic event delegation.
[268:16.12] Um, doesn't worry about reactivity on both sides. Although it seems to be considered context.
[268:26.60] Context actually seems inconsistent with this positioning. Let's, let's continue here.
[268:32.12] Let's whole reason for existing is to make web component development easier. Okay.
[268:37.40] So it's authoring. We simply wouldn't have it if web components didn't exist.
[268:40.36] Filted if one. We have no interest in building another non-interruptible framework.
[268:44.60] Okay. I miss lit HTML. Misses you too. Okay. I mean, lit HTML is still used,
[268:56.04] right? It's just the underlying render that you tend to use with your lit elements.
[269:00.84] Um, right. And if we get higher level APS in the platform, it can shrink down to maybe to zero, right?
[269:08.68] Here, we're getting the kind of more on the goal vibes. In a sense,
[269:15.48] I think this, I think this is, yeah, this is good.
[269:19.72] It, it, it does sound like that. Like nothing he said is, does not make lit a framework.
[269:31.48] Right. Like, but it, it isn't exactly what I thought he was saying originally.
[269:38.20] Right. Like we simply wouldn't have built it if web components didn't exist.
[269:49.88] We have no interest in building a non-interruptible framework. Right.
[269:53.24] I mean, it's interesting.
[269:59.88] I mean, it is a framework though. Let, let, let me just look, let's look at the lit docs.
[270:18.04] Okay. Context, the way of making data go into the subcomponent tree, lit context.
[270:21.88] Context of all the context. I'm going to key provider, consumer, blah, blah, blah.
[270:26.04] Like maybe, I mean, to be fair, this is an extra package, but to me, you don't have context unless
[270:37.48] you expect web components to be used in web components, right? Like this is, this is because
[270:46.68] lit is creating a whole application. Like if, if, if you weren't going to just,
[270:57.08] um, you know, those guys who are the HTMX guys, you're like, yeah, all my attributes are strings.
[271:03.72] I do it on the server. You know, you got, you guys, I get, but the, the, the way lit, you know,
[271:13.00] HTML controls the props versus the attributes, context APIs, like what else do we have here?
[271:19.88] Composition, component composition, mix ins.
[271:28.84] Actually, state's probably good. So state management. So I think tasks, lit tasks.
[271:43.00] What do tasks do?
[271:55.48] Oh, okay. So it's like, it's reactive controller. Okay. The key part is that it kind of ties into their
[272:06.28] system. Yeah. Context is event-based. Yeah.
[272:10.92] I mean, I, I, if you could know, I, I think that the react argument that it's not a framework is,
[272:20.12] is kind of silly, right? Same, like solid is as much of a library as react is, as lit is. I mean,
[272:29.96] I could argue that react maybe these days is even is less and less of a library, but we're, we're,
[272:35.96] we're about all the same level of you. And I mean, at list task, at list context, at lit, like,
[272:46.84] yeah, I mean, yeah, you're right. This is just the, the, the reason, the reason, the, the set part of
[272:55.96] the sentiment that always gets me about this is there's like this, my, my crap doesn't smell
[273:00.52] sort of vibe that I've been getting here. And I don't know if it's intentional in this one. This
[273:07.16] one is just like the inane, like library versus framework thing.
[273:10.92] Right. Because I think the claim is that lit is not a framework that comes out of these extension
[273:19.80] over web components. It doesn't control rendering about what's possible web components. There's no
[273:22.52] additional scheduler. It doesn't attempt to cooperate with life cycles beyond what it doesn't seem.
[273:25.96] Right. But then you have context and tasks and signals and SSR and all of these things,
[273:35.32] right? Like I, it's, it's a modular framework. It's built on primitives. I respect that. I love
[273:42.68] primitives. Um, but it, it is right. Like, um, let's see if you post engagement, it was this the one.
[273:54.04] Um, um, I, I, I, I was getting like tons of responses in my, uh, I just need to, there's,
[274:05.96] there's this really long ongoing conversation in my, in my, in my, in my,
[274:15.40] Okay. Here it is. This conversation just kept on going. Yeah. So custom DSL, customers of hooks,
[274:25.00] directives, custom decorators, custom compilers, not a framework. Remember react calling itself a
[274:28.68] library too. So like, there's this like, Oh, decorate is a stretch. Okay. Whatever. Okay.
[274:41.32] And Dimitri's like hooks are optional, but I mean, forget react react hooks are optionally
[274:45.96] imported. I, I get what he's saying, blah, blah, blah. Okay. So where we go? It would be bizarre and
[274:51.08] impractical to do. Okay. So, okay. This, I, I like this part of the conversation.
[274:55.08] There's not a single react dev who hasn't used, um, higher order components either. So you're making
[275:03.24] my point for me. All these things are offered by lit features in the core docs and people are using
[275:07.56] them. We can keep pretending that lit is just a small library or something. I bet many experienced
[275:11.24] react devs haven't used a higher order components in years. I haven't for sure. And I expect new devs
[275:15.48] don't even know what they are. I do expect, do you expect separate set of docs? That'd be bizarre and
[275:21.32] impractical. Okay. If those are optional non-core things, what are they doing in the core docs often
[275:25.48] presented as a way of doing things? If they are part of its, of lit's philosophy and way of doing things,
[275:29.64] lit should own that and not pretend, Oh, this is optional and this is separate packets. That's why we're
[275:33.96] just a library, not a framework. When in reality, you go looking at what people build with lit,
[275:38.20] all these optional non-core things are everywhere. It'd be bizarre and impractical to document them
[275:42.28] elsewhere. Okay. Why would it be impractical if not part of the core? They should be documented in
[275:46.68] whatever packages there are, right? You can't pretend it's a separate package and have it permanently
[275:49.96] featured in your core docs, the default way of doing things. Okay. Framework versus library thing is a
[275:55.00] mindset. It's about the breadth of opinions. I always thought it was, I would, I always thought it was
[276:00.84] suspect with react where the code resides. It doesn't matter. It's when you cross the line from
[276:05.56] here it is, take it or leave it to this is how all the pieces go together. What did I say here?
[276:10.44] Once the tool has opinions, even if categorically about how to solve the problems adjacent to its
[276:15.64] purpose, it's extended its scope. Solid start does not ship with solid, a router, a metadata library.
[276:20.84] Like you could literally say it's just like a way of bundling, use server over a beat,
[276:25.24] but that doesn't make it not a meta framework.
[276:27.16] Right.
[276:37.96] Right. What is my definition?
[276:53.56] framework versus library is about the breadth of opinions, right? I think I said here,
[276:58.52] take it or leave it. Let's see if I define it better down here.
[277:01.40] Greg goes, this is a nuance, but Justin's talking about something different and very specific. When
[277:08.04] he says that lit is not a framework, his point is that lit doesn't define interface between
[277:11.08] components. It relies entirely on standard interface. Okay. Okay. To me, that has nothing
[277:15.40] to do with the identity of a framework versus a library versus whatever. A framework is something to
[277:19.32] organize our code slash thinking, not an output format, the ideological trade-off opportunity costs.
[277:25.48] I like maintenance or opinions, you know, like sometimes people frameworks are more opinionated.
[277:31.96] So you're like, okay, I have to be stuck with that opinion, like lock-in or like maintenance
[277:36.28] considerations. You know, when framework updates are tied to the framework,
[277:45.40] you know, so to speak, like these kinds of thoughts, you know, framework versus library, whatever,
[277:49.56] like they happen up to authoring time. They have nothing to do with the output.
[278:03.32] good. So exactly the same as solid and react that's um, yeah, right. Like my point isn't about the words.
[278:20.04] My point is he's intentionally
[278:31.48] he's intentionally trying to separate themselves on a distinction. That's like basically superstitial.
[278:41.48] This is part of that. Like, like
[278:43.88] it's so funny because like, I think Theo actually did a video a while back and he gave a pretty high
[278:51.88] tier rating to lit. And it's because people who like frameworks generally don't have a problem with lit
[278:57.08] because lit is just another framework, right? Like you understand that when
[279:01.40] you buy into a framework, all the, you know, cost of maintaining and future proofing, all of that
[279:07.40] is because you chose a framework lit like it. Look, if you built your web components completely
[279:15.08] vanilla, no external dependencies, try to keep the code small, kept it clean up to the usefulness goes
[279:22.84] because, you know, patterns, trends change, you know, for sure that that component's never going to change.
[279:29.48] But as soon as you introduce the framework, lit, whatever, it can change trends, patterns,
[279:36.20] things change. You might not update, you know, like you depend on something, right?
[279:41.40] You can always freeze a dependency forever, but you can do that without web components, right? Like
[279:48.52] we, we, we, we, we shouldn't, the impact of the interface being stand like standardized is important
[279:55.96] for interop between like, you know, the fact that like, I have in theory, if everyone supported the
[280:04.04] standard, you know, I could put this component in 10 different libraries, but it doesn't impact
[280:09.72] the future proofing of actually the solution itself or like the reality of how things move forward,
[280:20.92] not just, you know, standards update. People keep reminding the stream. I, I obviously know standards
[280:26.44] update. Like it doesn't actually, you know, version locking, all the stuff that we talked about at the
[280:31.24] beginning of this, of the stream and treating like it, like it's something different or special here
[280:36.92] is what's the term they always use disingenuous. Yes. I think this is one of my biggest pet peeves on
[280:44.68] this. It's not just specific though, to, to something like lit. It's just, um, it's, it's like,
[280:52.04] um, kind of like a problem in this whole space where there's like a certain like idealism that overrides
[281:00.28] like the, the, the certain reality of things.
[281:05.80] Right. It's all semantics. Don't like, don't, I'm not trying to argue about what the meaning of the
[281:17.80] specific word is just saying that w what things are in or not in the same category.
[281:22.28] That's how I see it when you, let's see, sorry. Yep. Different definition.
[281:31.48] If it's the only one that's representation in the standards process,
[281:38.04] I mean, for web components,
[281:46.84] you can, I mean, you can take that both ways. Right. Right. Like they said,
[281:51.32] they basically created lit to like align with the standards process. That was like the whole process.
[281:57.56] Like they're literally, they're literally trying to just pull it into the browser. You know,
[282:01.32] that's like the goal. It seems like.
[282:15.88] Like, why does lit have versions? If web components mean, you don't have to change.
[282:20.12] You guys are just being right now.
[282:22.36] I mean, do you know what else is standard of script tag?
[282:34.36] Like the funniest thing is like when I was talking about like the micro front end scenario, like,
[282:40.60] what did you do like widget before you had a web component there? Don't get me wrong. I like how
[282:47.96] it's just a declarative thing. It's ergonomic, but like you'd have a script tag that loaded the
[282:53.88] JavaScript code. And then you'd have a script tag. That's like window dot widget, call it with the
[283:01.80] arguments and pass it to the idea of the DOM element that you wanted to use. So like from a very like
[283:09.48] like base base level, we've been doing what web components do like on the surface for ages, just
[283:17.80] with like a simple script tag. Right. Obviously making it declarative has benefits for server rendering.
[283:23.64] That's like DSD game changer. Right. Um, but like from like a skeptic kind of standpoint here,
[283:33.40] that's independent script tag is,
[283:40.84] you know, it's, it's, it's, it's just as, as, as, you know, isolated as, as your web component.
[283:49.72] Right. Right. It just doesn't matter. My point is that these are, these things are more similar
[284:01.48] than they are different. So, but the, the fact that they will completely continue to try and remind you
[284:08.12] that it it's different is interesting.
[284:11.80] Yes, this is not. I mean, thank you.
[284:19.88] Why does any library ever, right? Because things change and no, no technology protects you from change.
[284:38.12] So, anyway.
[284:41.64] Did anything else interesting happen in JavaScript this week? I don't know.
[284:46.76] Let's get out of my notifications. Give me a second here. I'm going to switch
[284:52.92] views while I prep for this week in JavaScript. It's probably going to be more web component stuff.
[284:58.28] But, uh, but yeah, give, give me a second.
[285:05.00] Got to just open up a few tabs.
[285:19.88] I know this is kind of long meandering, but I hope that some people found some value in this.
[285:24.52] I feel like when I watch some of the content, this is like, it's hard. I, I obviously got directly
[285:32.60] into, um, um, I got directly into, um, you know, a lot of the more aggressive attacking stuff. I didn't
[285:44.92] really get to, you know, and answer questions, but I didn't really get into what I, something that I
[285:49.64] actually think, um, is pretty important here is that like web components can do a lot of things and they are very much under,
[285:58.60] like a lot of people assume that there's a lot of things that they don't do that they do do.
[286:07.56] So yeah, I hope I've made it clear throughout this, that that isn't my concern or that we can continue
[286:14.92] to find hacks and fixes to issues. It's just like, what, why I, at some point, it's just like, why,
[286:21.88] why am I, why am I still doing this?
[286:28.60] it's weak in web components, yeah.
[286:37.56] it's weak in web components, yeah.
[286:41.56] it's weak in web components, yeah.
[286:58.60] yeah, no, sorry. I wasn't suggesting that I was attacking. It's just like the, the attacking is
[287:07.56] like the, the more like non-supportive web component perspective per se is, is, is what I was trying to
[287:17.24] say. Like I didn't get to focus as much on a lot of the stuff that I do find very positive. Um, okay,
[287:24.20] let's, let's see here. I, what are we, October, when's, when was my last stream? Two weeks ago, 4th, um, 27th.
[287:42.20] something like that. I'm just trying to get my bearings here. It's profile.
[287:51.16] There we go.
[287:52.12] Oh, wow. It's been a while, hasn't it?
[288:00.12] Okay. Yeah. So I gotta go back to the, to, to the 20th.
[288:18.12] Okay. Cool.
[288:19.16] Okay. Let's just fire these off then.
[288:23.00] Okay. Cool.
[288:44.04] Oh, okay. Yeah. Okay. Let's do this. Yeah. It's been like three weeks,
[288:47.64] which means I don't have time to do everything. We've talked a lot about web components today. Um,
[288:53.72] I'm going to just, we're just going to fire through stuff. I'll get to prison or Breezer in a minute. Um,
[288:59.48] yeah, this was talking about is being killed and
[289:11.56] Jenna made a good point that a lot of the criticisms around the shadow dom. And I think that's true,
[289:15.88] especially because an authoring perspective, but, um, there's a new proposal, I guess, for custom attributes.
[289:21.48] Um,
[289:22.84] is it closed? I don't know.
[289:25.80] It's interesting to see all the people discussing in these things. A lot of people like,
[289:30.68] like web reflection. He was a big proponent of the is attribute. Um,
[289:38.60] I believe native extensions, but yeah, I also the original creator of, uh,
[289:45.24] the original thing that was like lit. I just can't remember the name of it right now.
[289:50.60] Um, the original tag template literal thing. Wow. Yeah.
[289:56.36] Anyway,
[290:02.76] not polymer, um, lighter HTML. Was that it? Yeah.
[290:07.16] Or something there's, I think there was one before that wasn't there. Like it was the original,
[290:16.68] like it was even before lit HTML. Um, basically within a couple months of each other,
[290:23.80] they'd come up with like the exact same solution. Um,
[290:29.88] anyway, the, not much to talk about here. Let's go.
[290:33.80] Rich Harris did a great job of defending the position. Um,
[290:41.88] if I could build something for the time spent working around web installer, be a rich man.
[290:48.04] That's funny.
[290:48.52] Web components, tweets, breeds, containment, expected videos.
[290:55.40] All right.
[290:55.88] Oh, I, I might need to cover this a different time. This is actually a great look at a presentation.
[291:02.44] It's talking about, uh, the tension in standards, helping developers be more productive, doing the
[291:06.92] right by users. We'll come back to that. If we have time, let's keep on going. Oh yeah. Lit.
[291:10.44] While we're talking about lit,
[291:12.04] lit lab signals brings new TCI and 30 proposal to, to, to lit, which is cool. Check out our blog release. Okay.
[291:22.76] Signals with lit. You have to do what are signals? Yeah.
[291:27.72] Shared up. So we'll say pinpoint updates and drop. We'll see target to be renders,
[291:31.56] potentially improving performance. We're excited about lit labs, sample share counter.
[291:35.00] Get. Yeah. So then, yeah, I mean, in this mode, I imagine the whole template re-renders because it's
[291:41.88] calling dot get pinpoint updates. Oh, okay. So add a syntax to say that, Hey, I want to watch it. So this is
[291:48.68] kind of like the pre-act solution. Um, future work because the pre-act solution doesn't solve
[291:58.44] structural reactivity eventually. Okay. Interesting. It doesn't say much more than that,
[292:07.88] but I get the idea. So explicit syntax, if you want to opt into fine grain, like it's basically like,
[292:17.00] I think this has, I wonder if the, I wonder if this, if it has to be a signal directly to do it.
[292:21.80] Yeah. This is one of the challenges I've been having a lot of these, uh, frameworks picking up
[292:26.44] signals, especially ones with a re-render mentality around them is that like, like they make the passing
[292:33.24] of the signal mean something I watch might be better here. Cause you could in theory, make it an arbitrary
[292:39.00] expression, not just a direct signal. See, one of the biggest concerns I have it obviously is over wrapping,
[292:43.40] which is like forcing things to be a signal or computed property directly instead of just being
[292:48.76] like use function expressions, because over time you end up like just making extra ones that these,
[292:54.76] like it's, if you need to wrap every expression in a computed, well, then you have N expressions.
[292:58.92] You know what I mean? Like sometimes you, you don't need that.
[293:07.48] Yeah. I'm just talking about the render approach, um, specifically like I I'm interested to see when
[293:13.24] people pick up fine grained rendering. Um,
[293:16.04] right. Cause if you seen our tag template literals and solid, um, you, you wrap, you, you pass in a
[293:25.64] function to the expression if you want it to be reactive, right? Like you just put function and then
[293:32.52] call count. In fact, what means if you just pass count, strike directly in without watch, it works
[293:36.76] for our, for our HTML thing, but we also don't have a rerender mechanism. So it doesn't make sense
[293:42.76] for us to work any other way. Whereas, um, these do. Yeah. I mean, it's, it's okay. This is brand new.
[293:49.72] It's in its infancy, but, um, it's, it's definitely interesting to see, see here, right? Oh, yeah.
[293:56.20] We previously released Preact signals, but now they're trying to do a standard version. Yeah. So
[293:59.48] yeah, that's, that's, that's cool. Oh, is this why the web component people think that Preact came
[294:06.28] up with signals because lit implemented Preact signals? That's hilarious. I get it now. So they,
[294:14.52] they didn't even hear about signals until like, uh, like 2023 when lit did that.
[294:23.48] Oh, that's, that's cute. That's fine. It makes sense though. That, that makes way more sense.
[294:29.00] I understand like this is, yeah.
[294:33.72] Yeah. There you go. That's all that. There you go. Since mob X, that's old school.
[294:41.48] Much respect.
[294:47.96] Okay. Well, that's cool. Um, I think reactivity like this built in at a low level is very attractive.
[294:57.32] And I think that lit combining it here is a good experiment for how, you know, to handle this
[295:03.48] stuff on a basic level. I think it's going to be interesting as we watch over the next couple of years,
[295:07.80] reactivity change, um, and signals implementations evolve from where they are today. Um,
[295:16.04] yeah, it's, it's, it's interesting to me just understanding the goals of both projects,
[295:22.92] um, and how they diverge. It, it will be interesting to see where this lands. Okay.
[295:27.96] All right. Uh, this is, if you didn't see this already, you probably have, this is,
[295:32.28] this is what Rich Harris's was talking about in terms of upgrade timing. Cause if you put something in a
[295:37.16] template, it doesn't upgrade. So X foo here, it like, he's showing that a span is a span and X foo
[295:45.00] is not X foo because it's just an unknown element at this point. But then once he appends it to the
[295:51.08] actual Dom, it becomes one. So under the hood, the actual like prototype, like changes. Um, this is weird.
[296:01.64] It's understandable, but, and it doesn't, I don't think this impacts frameworks all that much probably,
[296:09.32] but it's, it's kind of representative, you know, of like just
[296:17.40] the oddness that comes in because of the repercussions of these kinds of decisions.
[296:24.68] Okay. We talked about Leah's article. Okay. Yeah. Okay. All right.
[296:32.52] God, I have so many good, good things here. Yeah. Okay. That's fine. Let's I'm gonna, I'm gonna,
[296:43.16] I'm gonna go through my feed first and then we'll, we'll get there. Um, yeah. Astro store went live
[296:49.16] with Astro plus solid, uh, solid 1.9 is out. Um, just in time for solid hack, uh, solid hack. Um,
[296:57.72] is, has, has started, um, for those who might not be aware or offering $20,000 in prizes. There's a whole
[297:07.40] bunch of category. There's a couple of categories, but then we have these like short run, um, like, uh,
[297:12.52] bounties almost. So like we're going to be releasing more bounties over the courses. So you should check
[297:17.96] on, uh, on Mondays and, um, yeah, it's, it's, uh, it's running. If you want an excuse to try solid,
[297:25.00] maybe win some prizes. This is a good, good chance. Um, what are we doing?
[297:30.04] Uh, yeah. So yeah, solid 1.9 came out. This is the one I was talking about.
[297:38.60] A lot of these things we, we finally added proper support for is attribute and web components,
[297:44.84] even though it's basically been canceled. Um,
[297:48.52] uh, what do we have? Handle events syntax. This is cool for non-delegated events. We can now,
[297:58.52] I don't know if you guys know, you can pass objects to add event listener and they, they call it handle
[298:04.36] event function. That's like, it's, it's something that Dom does. Um, we decided to use that the
[298:09.72] piggyback options objects onto the event. So it's kind of cool. So you can set capture or passive or all
[298:17.64] the like bubble compose. You can now put that, you know, I guess it's not bubble composed because those
[298:26.52] are on the firing side. Sorry, but you, you know what I mean? Like you, you, you can, you can basically
[298:31.40] put the event handling like capture passive or whatever on, on the actual object. Um,
[298:38.44] we added, uh, bull bullion support. This is important for custom elements. As I said, a lot of
[298:46.84] little quality of life improvements to help people using custom elements and web components. Um, and
[298:52.92] one thing that'll make people happy, um, hydration mismatch errors now show you the part of the template,
[298:58.92] which, um, error got that feedback from the last stream when I did the thing about hydration IDs.
[299:06.44] So in 1.9 now, when we say, Hey, can't find ID blank, we'll actually show you the template, um, that it,
[299:12.92] that doesn't match. So yeah. Oh yeah. You guys want you, sorry, but you wanted to see the hackathon. Um,
[299:21.88] I think we linked it down. No, we, do we like not actually link. Okay. Sorry. My bad. It's that was the
[299:31.24] second tweet. It's this one hacked out solid JS.com. Sorry. Let's do this.
[299:46.04] It's a long running thing. You have 33 days till we close submissions. So you've got lots, you know?
[299:51.80] Yeah. All right.
[299:55.96] Nice clerk plus solid. Now in the docs. Very happy. These little things like that.
[300:11.48] Happy people helping in docs in general. We went from 70 to 43 issues this week in the docs report.
[300:16.36] Thanks to fantastic people making contributions. Big, big thanks. Shout out, um, you know, from this
[300:25.16] solid docs team. And obviously personally, big shout out to Sarah and the incredible work she, and you
[300:31.00] know, people work on docs do. So, um, just really cool to see this kind of help from the community.
[300:36.60] Docs are incredibly important. Uh, let's keep on going.
[300:40.92] Yeah. This month and solid, I'm just gonna do the solid stuff right now and get out of the way.
[300:47.56] Yeah. Again, a lot of, if, if, if you saw this release here, um,
[300:52.92] a lot of contributors from our community here, but the, the, if, if you actually go to the actual
[301:00.44] release notes and commits, you'll see that almost all of the work, like 90% of the work of this
[301:06.12] release was done by Tito, our new fellow, um, doing amazing work, uh, big web components, uh,
[301:14.44] the border. So very awesome. Officially has a fellowship, uh, position with us. So, um, we're
[301:20.76] putting our open source, um, collection, um, funding towards him working continuous development work on
[301:27.88] solid.
[301:28.28] Um, all right. Let's get back here. What else we got? V comp happened. A lot of fun. You should check it out.
[301:49.72] Oh yeah. Quantum decent overhaul. This is, this is exciting because, uh, Tori two, um,
[301:55.00] I believe is like full motion now. So this, this is using solid start to build
[302:00.60] with Ross to build non, like I would, it was the term native apps, like things that are like non-web.
[302:09.32] So like mobile and like desktop and stuff. Very, very cool. Um, full kind of framework for that.
[302:16.20] So you're talking about potentially like react native, letting you, you know, having this place
[302:21.64] where you have that code base and you can use all this stuff together, react, react native altogether.
[302:25.64] Maybe this is the future here for solid, solid start quantum solid start. I hope maybe we have
[302:32.20] something comparable, uh, demo for micro front ends. You guys all know how I feel about micro front ends, but,
[302:39.16] um, still credible work from the community. Again, Giorgio usually known for his work with quick.
[302:46.84] He's a core team member, but he went through the effort of actually, uh, making a solid start
[302:51.80] micro front ends, uh, demo. So, uh, big, big props here. Very, very appreciated because it's an area that
[302:57.96] I don't usually get to, um, looking at, and I think that's really cool. Um,
[303:02.44] Well, if we have clerk, now we have an article on how to use it. So thank you very much. Okay.
[303:09.08] Caught up on solid news. Let's keep on going.
[303:19.24] Oh, you're talking about the VTalk. Yeah. Yeah. It's good. Yeah. It talked about the effort we put
[303:23.64] for the, uh, Aurora project for funding from Chrome team and how we pushed zero serialization for
[303:29.72] forward. Um, it's, it's an, it is an interesting topic for those who care about that kind of bridging
[303:34.12] the bounds between client and server. All right. Um, okay. So done with that. Let's keep on going
[303:44.60] that talked about that. Okay. Be calm. Be calm. Sweet. Okay. Let's now we're up to date. Let's talk
[303:55.16] about other stuff on, on this list. Okay. Do, do, do, do, do, do. Okay. Okay. You probably noticed in the chat
[304:08.84] of, of, uh, even today. And if you've been around Twitter, you've been seeing these little things
[304:15.40] poking in, uh, about this framework. Um, I've been hearing about it for months now. Um,
[304:21.48] it has been released new JavaScript framework. Um,
[304:25.16] so, uh, let's take a quick look. I don't, we'll have time to go that deep here,
[304:37.08] but you know, whenever someone announces a new JavaScript framework, I'm, I'm interested to see
[304:41.48] what their angle is today. I'm excited to use a full stack framework that allows you to mix server
[304:45.00] components, server actions with web components and signals. Okay. So it is a server component or
[304:51.16] set up. It looks like SSR page entries are rendered on server and stream to the client,
[304:56.04] including SR web components who can declare a shadow DOM under the hood. Okay. Including SSR. Okay.
[305:01.40] Okay. So this is using web components fully as a protocol for the client components. And then it
[305:06.68] uses, okay. Interesting. Site generation. Sure. Prerendering. Sure. Makes sense. Reactivity
[305:13.80] prop attributes. Okay. So it's using web components with signals. Okay.
[305:17.88] The advantage is that props are optimized in build time. So you can write them as frameworks like react.
[305:27.08] Do great. I guess I'm going to, I'm, I'm interested to see how, how it sets this up. But my guess is because
[305:33.72] web components are components that it can identify that the props, like that a component is a component.
[305:40.20] One of the challenges with like solid or reacting, you even see this with HMR and stuff is we don't know
[305:45.88] what components are components. So if we wanted to like reverse destructuring or something, we actually
[305:51.00] have to, uh, like know where to do it. And when you say, Hey, here's a component, you can do that.
[305:57.56] Obviously I think reversing stuff like destructuring has other negatives, but let's keep on going.
[306:02.60] Type script, CSS API. And yeah, it's a lot of good features. Tori unified tooling,
[306:10.76] bond managed tooling, HL streaming over the wire. Okay. Yeah. Okay.
[306:26.28] Okay. Sounds cool. I, the server act or action signals thing is interesting where server action,
[306:31.80] you can make web current react without needing to re render in the server. Okay.
[306:36.68] Building little JavaScript. Okay. Component looks like,
[306:47.40] Okay. Looks like a typical JSX component. And then it's compiled without minify.
[306:53.56] Count on click, blah, blah, blah. On click. Okay. Okay. Okay. Where is count?
[307:02.76] Plus, plus is count red in this anywhere? And span name, count value. Where's the span?
[307:12.92] Aha. Count value. Okay. See this little function here. This tells me that this does fine grained rendering
[307:19.80] more than likely, which is good. So this is not this. Okay. So it's using compiler heuristics,
[307:26.60] similar to what we do in solid. He sees that there's a property access and wraps it. Whereas name
[307:31.48] I'm gathering is not wrapped.
[307:36.44] Or the actually named up value. Interesting. How did it know that it was a signal?
[307:40.68] Oh, I see. The prop. Oh, it's the reason they don't do destructuring is because they don't reverse
[307:47.88] destructuring. Every prop is a signal, so to speak. That's interesting. I wonder how they do in checks or
[307:56.84] handle. Huh. Yeah. Okay. Shape changing. Okay. Yeah. But I, I, I'm. Yeah. Do, do, do, do.
[308:11.56] Control signals clean. The web phone fits me. You also don't need extra client code to manage server
[308:17.32] actions. Just a small two kilobyte RPC that is added when using signals. Yeah. I mean, that makes sense.
[308:24.04] The code we're actually doing like use server or stuff doesn't take very much.
[308:28.44] With international data to world server client routing translations. Okay. Sounds all like good stuff.
[308:34.28] One thing that I'm interested in, although I wouldn't put it in a support blog,
[308:40.92] I'd be interested in the author about why they wanted to create another JavaScript framework.
[308:45.48] I do see one interesting feature here with the server actions potentially.
[308:53.56] Our function arrow functions are extended in the server. Once the user tries to the page,
[308:56.36] they can know. Okay. Sorry.
[308:59.00] Oh, do you know what they're doing? Because everything is a server component,
[309:06.44] any functions you pass to it, they automatically are just wrapping them. That's why they don't
[309:11.00] have to use server because, oh, that's clever.
[309:13.24] Child component. And then you're saying you can pass them through. Yeah. Okay. That makes sense.
[309:23.08] Parent component. Yeah. So I think I get it. The reason like, because their whole world exists on the
[309:29.24] server. They're assuming that the only touch point are those like, I guess, web components, then
[309:37.56] essentially. Oh, that's interesting. It's not that though, actually, because the touch,
[309:44.04] this is all on the server. So basically,
[309:48.92] yeah, I mean, if you want to talk about event delegation, I'm gathering this has to be using
[309:52.52] some form of event delegation because like, you're not going to go on and attach like submit events
[309:59.40] to things that you otherwise wouldn't. Okay. That's interesting. Anyways, um,
[310:07.80] probably not going to get into this too much right now, but it, we have another framework
[310:17.56] doing here. I think the unique features we need to point out is that it's a server component first
[310:23.08] architecture that uses, um, signals to do, um, fine grade updates. So anyways, it's good on that.
[310:35.80] Um, I, I should tell him what I do say to every framework author, although I don't know if this
[310:43.24] will be challenging for him, given the way it works. It'll be fine. He should enter Brisa in the JS
[310:47.40] framework benchmark. Anyway, um, do, do, do, do, do, do. Here's an interesting question. Okay. Another
[310:59.16] Justin tweet. Some people like to point out that TC39 pros with polyfill is slow, which I don't quite
[311:03.48] get polyfill may be slow right now, but polyfill isn't the proposal. We can have a different polyfill
[311:07.40] implementation with the same standard API. Yeah, no, that makes a lot of sense. Try to remember why,
[311:13.00] why I bookmarked this. Yeah, I agree. Shouldn't the polyfill be at least as fast as other market
[311:18.04] alternatives. Even if the signals are accepted at some point, people will need the polyfill for years.
[311:21.24] Our idea implanted better polyfill once it's accepted. I mean, it's a work in progress. I really
[311:26.68] know much about the polyfill. It's currently slow. That is based on anchor signals library. All I know,
[311:30.12] I hope the fast libraries could be used instead. It actually annoyed me that several folks have
[311:35.72] written new signals inflation since this proposal purely for speed versus PRing some work to make
[311:39.80] the polywheel fast. To me, that says, I don't care about OSS. Yeah, this is a terrible take. God,
[311:45.96] this is terrible. If someone wants to build something and they want to build it fast and
[311:56.12] they don't want to be involved, it's fine, right? How are we going to find out new ways to make signals
[312:06.52] faster? What if there's a problem with the design of the proposal right now?
[312:15.00] Yeah, I don't know. I don't get why people have this opinion.
[312:29.00] Evan, you tear them a new one.
[312:30.44] Ironically, it's more impactful than you ever did. It's just an unfortunate choice of name.
[312:43.72] It might have been nothing wrong when building the fast possible potential that fits one's use case
[312:46.84] of hand. Being free from polyfill constraints is what allows it to be fast and frustrating. Upstreaming
[312:49.88] is the only possible way of having to play this version first and you couldn't have to play.
[312:53.08] Okay. Yeah. Block. Wait, I'm so. Oh, he's saying blocking Evan you. I thought he, I thought he was
[313:13.64] just saying block, like blocking himself. Like, because his comment was so dumb. Oh, I'm just confused.
[313:22.28] Okay. I get it. So he said, he said, Evan use responses block worthy. Okay. Okay. Anyway.
[313:28.76] All right.
[313:42.76] It's just sad that we don't try to collaborate. No, I mean, it's you can collaborate, but then
[313:49.56] sometimes there's, sometimes you just got to make the thing that's faster. Like usually the, what this
[313:57.08] process involves is you usually find something that exists and you try it and you're like, this isn't
[314:01.88] working for me. And then you try something else and you're like, this doesn't work for me. And then you're
[314:04.04] like, okay, can I do it better? Right. Usually that's the process. And you, like, I remember when I was
[314:10.36] working on solid originally, I was looking at surpluses, like, can I make improvements to
[314:12.76] surplus and you're like, okay, does this fit within the goals of the project? And then you kind of go,
[314:16.20] okay. Like, I think there's more considerations until I don't think every like just goes out to
[314:22.36] build something, but even if they did, even if they didn't check the state of the art, if the result of
[314:28.12] that, and we see here from this guy who does impactful OSS stuff, apparently, if the result of
[314:33.08] that is something performant and something better than what's out there, how can that be anything but good?
[314:37.96] Like, collaboration is good, but making something new that's better than what's been seen before is
[314:46.04] even better. Like, sure, we should all collaborate. It's good that we can, you know, improve things, but
[314:54.20] being able to, like, expand the space that we have available for us, venture into new zones, like...
[315:05.48] It's super important.
[315:06.68] My process is for consummate appearance. Right, but like...
[315:18.68] Yeah, I don't know. I...
[315:23.56] I guess maybe I'm, like, ultimately, I'm, like, a little bit more on, like, the ultimate Darwinism side,
[315:33.00] right? I'm just, like, like, it's okay if not every new library that someone whips up on a weekend
[315:38.68] survives, you know, but it's good that people continue to push the boundaries.
[315:55.08] Most of the time, people are doing what they're doing intentionally, so they're, like,
[316:08.28] if you're saying, like, "Come and do this other way," like, some... it's worth putting out there if the
[316:12.92] project you use, the project you care about, but otherwise, it's kind of, like, you know,
[316:17.40] they're doing what they're doing.
[316:18.52] Yeah.
[316:21.88] Yeah, there's nothing wrong with people working towards their goals. Those,
[316:29.72] on their own single life, are likely happy to talk about it.
[316:32.04] It's probably a guy in front of anyone trying to improve polyfill or even competing signals.
[316:34.68] Like, a sub-platform had X, and I wanted to... X, so I built Y because I wanted to own X.
[316:53.24] I mean, sure, who cares? They can do that, and if they do better, then good on them, right? I don't know.
[317:01.16] I don't know. That's, like, the alternate extremism on this side of things.
[317:09.00] You don't want to discourage innovation or trying new things for the sake of, you know, standardization.
[317:17.08] Standardization is, like, eventually comes for us all, you know, kind of like that.
[317:23.72] But, like, you know, the opportunity to push boundaries, you know, we have to take it where we can.
[317:34.04] I think this tweet was less contentious than Fred's quote tweet. I know, I know.
[317:47.64] This is just showing that server rendering positively impacts Largest Contemplate Paint.
[317:55.88] I mean, it doesn't take a brain surgeon to understand why this is the case.
[317:59.40] Right? I don't even know what client-side Astro even is, so I don't completely understand what
[318:11.64] what this graph's showing, but this is pretty consistent with what we know, right?
[318:19.64] Even where these things go. I know Fred made some comment about Nuxt and all this stuff,
[318:25.16] and saying, like, you know, at a certain point you see enough of these, you should own it.
[318:28.12] That's probably fair to a certain degree. But on the other hand, like...
[318:38.92] Yeah, I don't know. Astro is in a position where the LCP is what they sell, so they can push hard on
[318:46.68] LCP because they know they're the winner, right?
[318:48.76] Right. I mean, it's fine.
[318:54.92] Yeah, here he says: "Perhaps you're building local at first and about it. It's good to have
[319:00.28] flexibility to build a spot, but you should be careful to choose the right tool for the job."
[319:03.08] Yeah. Yeah, so I said most things are general. Astro is a little bit more streamlined,
[319:08.68] like on VR server. We don't try and take out on the other side. So that's why, you know,
[319:13.00] like, sometimes you pick a tool and it has a clear win. In this case, SvelteKit does really well here,
[319:18.20] and it usually does. Solid start is usually relatively close. We're not on this graph.
[319:23.24] Quick is usually up here as well. It's just... Yeah, I mean, this is not particularly new. This looks like
[319:31.48] all the data that we see for this. I thought this was cool. "Migrate your Svelte 4 components of Svelte 5 syntax,
[319:37.40] so the single command is now available as the latest." Check this out.
[319:40.28] Just a side note in terms of, like, tools. Like, this is Svelte today, right? "Export let" is your prop
[319:47.16] coming in, and then you're setting count to initial value. It's funny because this is almost like the
[319:52.60] CreateWritable version, except it never syncs again. Anyways, "Migrate component Svelte syntax." Bam!
[320:01.80] "Defense props." Pull it out. "Value state" derived there. Look at that. Isn't that nice?
[320:08.68] I don't know. I thought that was pretty cool. Only a side point is, it's almost like they did their own
[320:16.44] meme against themselves. Remember the old, like, "let state" meme? And then it's like...
[320:21.48] So, I mean, I can understand why the Svelte community is kind of a bit torn here because, I mean...
[320:27.00] This looks a lot like other frameworks now. Like, Svelte before had a very distinctive look,
[320:35.88] and now this is a little bit more interesting.
[320:41.96] But, the tool to make this possible seems really helpful. That's cool. I think that's all I really
[320:47.72] have for this week. I mean, there's no way I have enough time to dive into this. I do...
[320:52.76] Man, I'm so torn on this because it's... it's... it's so on topic for today's stream.
[321:10.76] That's awesome, yeah.
[321:11.56] Oh, nice. Yeah, let me know if you have any issues. Just want to...
[321:20.60] Yeah, I know you've been putting stuff in the Discord, but yeah, we should talk about the specific
[321:28.12] stuff you've faced on there because I... we've been fixing bugs, but I know that the Vinci move has
[321:34.44] introduced some challenges, and I really want to get to the bottom of them.
[321:40.28] Yeah. Yeah.
[321:41.80] All right. Language evolution problems. What do we care about? Like, we talked this whole stream about
[321:49.00] standards, right? So, is this the right one?
[321:52.36] Stakeholders.
[322:04.12] We have all names to help developers. We want developers to be more productive,
[322:06.60] better management models, enabling blah, blah, blah. Let's see. How do we help developers? By
[322:11.96] structuring away complexity, by introducing new abilities, explicit coordination points.
[322:16.20] Structuring away complexity removes it, not removes it. This is a great point.
[322:20.60] Complexity moves from tooling and developer to language implementation. Application level complexity.
[322:24.28] Negative impacts. Limited to application... limited to applications users. Easier and faster approach.
[322:29.32] Implementation level complexity. Negative. Impacts are broad. Impact all implementation.
[322:33.00] Browsers, users. Harder, slow to patch. Yes.
[322:35.08] What about the users?
[322:38.20] I think this whole thing is about the tension. Because if you look at this original slide, this is
[322:43.96] DX versus UX, right? This is always the tension. And it's interesting when talking about standards
[322:51.56] that this, I think a lot of stuff is what do you like security things kind of causes to come out?
[322:57.72] What user impacted new language streets have? Almost always negatively impact security. Performance
[323:02.12] negatively or neutral. Stability sometimes negatively. App features positively. Yeah.
[323:06.76] Yeah. This is probably too detailed for me to get into right now. It's just interesting because
[323:17.40] Aren't the negatives a user opposite of the developer? No.
[323:20.04] This is the slow clap. I mean,
[323:25.72] I mean, it's clearly it's a polarity. I'm not saying wins for developers, wins for users, but yeah.
[323:36.12] I love the acknowledgement here of this because, yeah, I mean...
[323:47.40] I'm glad this is what the conversation is, right? The tension here.
[323:52.84] Interesting. So their concern is that we've focused on DX too much.
[324:01.32] I mean, I would say this is the case in the framework, but for JS, they hope that how do we get there?
[324:07.88] Interesting.
[324:17.40] I'm glad that this is the conversation that's being had here. This is great.
[324:40.76] It'd be interesting if frameworks could have this kind of conversation because this is...
[324:45.40] This is great. Rough guidance from the bars, new capabilities, simple understanding,
[324:48.44] high confidence use cases. If... I should just share this in chat.
[324:53.08] Yeah. Sorry, guys. Yeah. Let me just put it right in there.
[325:04.52] Engines being conservative, stop evolving the language. This is like all the same tensions we
[325:08.76] talked about on the website.
[325:10.04] Yeah. Intermediate tools. Interesting. Let's turn just as the ecosystem uses it. I see that there's
[325:27.00] JSO languages by engines. Yes. So they want to like have almost like a library, like a framework.
[325:34.68] Interesting. Like on top of JS so they could test proposals.
[325:38.04] Okay. Calling for more tooling. Yeah. So they want to get more people involved.
[325:48.68] I guess that's the common thing here.
[325:50.68] There's this tension, right? If everything keeps on going to user space, like how do you promote
[325:58.92] standardization? So how do you encourage people to be more involved? Because that's what standards need.
[326:03.08] They need more people involved. In some ways it is like the frameworks. You need more people involved
[326:07.96] to make sure the right things happen. Okay. I guess they're worried about standards not moving fast enough.
[326:22.92] This is an interesting proposal. I don't know how I feel about this yet. This is probably the biggest
[326:29.96] thing that I honestly, this is huge. I don't have, there's too much for me to think about right now.
[326:47.56] I honestly didn't read this too much in detail. I just saw the DX UX. I didn't see what the actual
[326:51.08] proposal was. This, I don't know how I feel about this yet. I'm not going to lie. I have no hot take
[326:58.44] for anyone right now. This is something. I'm glad this didn't slip under my radar. I think more people
[327:09.88] should look at this stuff. Let's create the dealer as we stop adding sugar to JS and start adding only
[327:23.88] any actual features that you can't get via tools.
[327:26.76] Yeah. That's interesting. Yeah.
[327:35.16] As does Theo. Yeah. I, I honestly haven't had a chance to, to, to look at this.
[327:44.84] It's not what it like the, the, the, the arguments leading up to it. You're all like, yeah,
[327:49.32] yeah, yeah, yeah, yeah. That makes sense. And then, then you go, huh?
[327:59.40] Okay. I'll see what I can do. It's going to be a week. So I might have to watch Theo's video before
[328:05.72] then, but yeah, I'll definitely get my opinion on this. Okay. I bookmarked it because I could tell that
[328:13.16] it seemed important, but I did not look at this. So that's on me anyway, it's late. It's been a good
[328:21.48] week. I hope there was some value in this conversation that we had today. Web components are, and standards
[328:27.56] are a tricky subject. Um, I hope you understand once we dug into the technical stuff, why I didn't spend as
[328:34.12] much time there it's nitpicky. It seems like they are all independently solvable problems and maybe
[328:41.72] they are, but like every solution involves like the next monkey patch, the next thing. And you know,
[328:47.80] I just, it's, it's, it's like, this isn't the starting line. This is just like what we're left
[328:55.48] with, which is good. Maybe the list whittles down, but at a certain point, when I look at our code,
[329:00.76] I look what we do. I wish I could just like rip a whole bunch of it out. Um,
[329:04.76] but maybe that's just wishful thinking anyway. Thank you everyone. Um, get you all next time.
[329:16.44] All right. Have a good weekend.
