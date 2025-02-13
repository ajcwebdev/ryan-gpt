---
showLink: "https://www.youtube.com/watch?v=-CWarVQDtEg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "First Look at Create T3 App w/ Christopher Ehrlich"
description: ""
publishDate: "2023-02-04"
coverImage: "https://i.ytimg.com/vi/-CWarVQDtEg/maxresdefault.jpg"
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

[00:00:00]  all right hello everyone welcome to my stream today as you know I don't have cool intro music this isn't a super prepared out stream but you get to hear me r
[00:00:15] ambling for a couple minutes while I make sure everyone joins in on twitch and on Twitter so how's how you all doing come say hi in the chat favorite time of the
[00:00:29]  week yeah I've got some some tea it's nice you know mmm definitely not doing any product placement or anything it's just just you know just chill in here sorry anyways yeah
[00:00:54]  no the I'm I cover a lot of topics on the stream and it kind of varies between like really in-depth framework topics and looking at you know other tools out
[00:01:09]  in the ecosystem usually I'm talking to other framework authors and I'm digging into the details of like how they do some kind of rendering technique or to understand as you know just
[00:01:19]  kind of get a fuller scope of like all the cool innovations going on in the ecosystem but you know sometimes I'm not even terribly familiar with all how the technology that
[00:01:31] 's going on and it's I think today is one of those cases right we kind of go between expert stream and learn with Jason this one's definitely on the learn with Jason
[00:01:43]  side of the spectrum so you know bear with me here I am talking through you know something or you're gonna learn about something that I don't know very much about and
[00:01:53]  I use a stream as a chance to actually learn about it so if if you're familiar with it you know maybe you you know still ask the questions we have an expert here
[00:02:04]  but you know you know bear with me a little bit because it's it's kind of funny I'm gonna explain that in a minute let me let me just tell people
[00:02:17]  you know out in the socials that were live let me see here to do to do where are we I'm pretty excited that in the sense that a lot of people seem
[00:02:29]  really interested in t3 and this is actually had for my on YouTube people can like it's like flag that they're you know they want to watch it like they're waiting
[00:02:39]  on it this one's had the highest weight a head count for any stream that I've done to date so other people are clearly very interested in this topic and as I
[00:02:47]  said it's interesting because it's one I know less about but you know we're gonna we're gonna learn about that so yeah what what do I mean by that exactly and
[00:02:58]  if you're wondering why I'm rambling here this is how I get wait for people to join the stream and how we get past those terrible twitch pre-rolls but
[00:03:06]  essentially I've been doing web dev for a long time I've been doing web dev since the late 90s I I lived through working with on-prem systems in fact
[00:03:17]  it's funny enough I got my earliest jobs in web because of my familiarity of tweaking servers you know like doing diagnostics I was kind of like the local I don't
[00:03:27]  know what they call them like I never worked for Best Buy or anything but like geek squad I'd go around fix people's computers diagnostic problems RAM you know hard drive failures
[00:03:37]  you know whatnot and I that actually got me into working they didn't hire me for my cool dot net 3d direct x demos that I was making and I watched the whole
[00:03:53]  evolution of us moving from you know on-prem systems that I kind of managed to cloud systems to which were fairly monolithic in the beginning to microservices through moving those
[00:04:09]  microservices to serverless something that was a project I was doing back in 2018 but that's that's like five years ago I have no clue what you know is the state
[00:04:21]  of the art for people these days and what the best practices are I've been kind of out of this probably now for I'd say about four years ago I've been kind
[00:04:25]  of out of this I've been kind of out of this probably now for I'd say about five years and I think there's an interesting tension between like what startups or
[00:04:35]  um and even larger companies uh are doing in terms of how they approach their infrastructure and you know some of that's got to legacy some of that has to do with um you
[00:04:49]  know resources like who's going to maintain this thing I need to move fast and I also think on a third tier there's a there's this level where you kind of
[00:04:59]  consider things like learning like how do I learn about the web today if if someone asked me how to learn about the web today there's a lot more at our disposal now than
[00:05:08]  we had back you know when I got started you know where you you you know I mean in some ways it's really easy you you literally open notepad put some
[00:05:17]  text in a file and up put it on an FTP server and you know there you go but on the other hand what we're capable of now is so much more um
[00:05:26]  and I think I think I think it's important to kind of understand how that fits into things on the on the broader scope uh or sorry that's the broader scope if I
[00:05:35]  want to narrow it down a bit I think it's interesting that we now look at the web space as a you know the series of layers and um you know like the
[00:05:46]  idea of like react the library and then we have like you know next js a layer on top of that and with something like create t3 app we have another or blitz
[00:05:58]  I think is another example um another layer on top of that right going from perhaps the least opinionated to the most opinionated how do we fit that all in our scope
[00:06:09]  of like how we approach building and learning on the web honestly I have opinions but I I don't know if anyone knows that the answer to that question completely I I think that
[00:06:20]  um this is an interesting debate and even the roles of things change over time as you've if you've been watching my recent streams there's been a lot of conversation about
[00:06:30]  react and about um you know its role of being a library and we're probably going to talk about that more today especially later in this week in javascript because it seems
[00:06:39]  like this conversation just keeps on propelling forward but how like how do you learn or get started or work with the web when it's when it's constantly changing when the
[00:06:53]  source of truth even is constantly changing I don't know those are the bigger questions that I than I ask I I don't I'm not I'm not expecting our guest here
[00:07:02]  today to have the answers to all of them but I I want to kind of expand our horizons here a little bit I and I'm going to learn a little bit myself
[00:07:12]  to go beyond my my usual just playing with what's the best way to partially hydrate a framework don't worry we can get to that later like um if I got a
[00:07:19]  chance today I kind of there's something I want to play with in next with server components to kind of validate a few theories I have I want to understand context and I
[00:07:27]  want to understand server components later so maybe a bit later in the stream we will kind of dissect um server components in greater detail but for now I'm actually very very happy um
[00:07:39]  to welcome one of the maintainers of create t3 app onto my stream um chris ehrlich let's see if I can get you in here did I say your name already
[00:07:49]  yeah yeah yeah you said it good awesome awesome thanks for joining us today um I'm pretty stoked about this I'm always stoked to have um people uh working on frameworks um
[00:08:02]  or meta frameworks I don't even know where to place t3 maybe you'll help me with that in a minute uh come on the stream and share their expertise um yeah
[00:08:09]  welcome chris yeah thanks for having me so uh yeah t3 app's an interesting one because like a lot of frameworks might start as like um let's say like you know
[00:08:23]  react like someone's trying to render something and then at some point the the meta framework comes on which is like someone's like okay we need the server render have more opinions
[00:08:34]  they built that t3 app to my knowledge it started because um theo brown which many of you know who's also in chat um uh decided that he was going to make
[00:08:49]  a video I think one of his first videos I think it was October of 2021 about what his stack was at his startup and he's just like this is what I use this
[00:08:59]  is what I you should use and then like correct me for around the details but essentially he himself just put that out in this into the void into the space and somehow uh
[00:09:11]  a group of maintainers um I guess you maybe get some more details on the origin from you decided to go like yeah this is really valuable we should build that and kind of
[00:09:21]  came together to do that and to my understanding Theo didn't even have to lift a finger um tell us a little bit pretty much what happened tell us a little bit about where
[00:09:31]  create t3 app came from and how you got involved with the project um so yeah t3 up it really came I think pretty much from that Theo video um where he
[00:09:40]  kind of showed his stack and then I think there was a second one later where he made this application where you can say which Pokemon is rounder than another um but like back
[00:09:52]  at that time all the pieces of that stack were really difficult to to put together and the documentation for it wasn't that great so Theo said that it would be kind of
[00:10:01]  nice to have like an init tool for that and then um Nexo this guy from uh Theo's community just made that that's crazy yeah like I I mean I guess to
[00:10:12]  a degree it's interesting because I don't know if you have any thoughts or opinions on this but like trying to start a render framework takes a decent amount of work because you
[00:10:23]  have to build all this stuff and then even a meta framework and pulling those pieces together is way more challenging than people realize and yeah I it's it's interesting to me
[00:10:33]  to that's you know a phenomenon basically like a youtuber twitch streamer had was able to come you know I guess I guess there's something magical in t3 that I'm
[00:10:46]  gonna learn about today this is my best way of saying it like what like how about can we talk a little about you about yourself like how did you find this project like
[00:10:56]  like what were you doing at the time and how did this come into your scope of radar uh yeah sure I think for me there's kind of two stories there's the technological
[00:11:04]  one and then there's one that's sort of not technological at all and the technological one is that um I only started getting into web dev like a year and a half ago
[00:11:13]  maybe two years ago and so I was figuring it out all myself like um I guess a long time before that I've done a bit of PHP I've done like a
[00:11:22]  bit of Django also like these I guess you could call them frameworks meta frameworks I don't know um but no one does um but so like this time around I was learning
[00:11:35]  you know I just googled like what's the biggest framework now and it was react so I learned like I learned express and how you make an API with that but I
[00:11:43]  didn't really like it and then I learned about next.js and like that has an API so I started working with that nice okay and then I realized like you have Type
[00:11:53] Script so you have types and you have a back end and you have a front end and you can share types of types between them yeah and I figured that out and then
[00:12:02]  um I realized like but you can still lie to the contract and then I learned about Zod in a video and so I realized like oh if you put like a current function
[00:12:13]  around um your route handler with the schema then you can validate there and you can also use the same scheme on the front end and so I started building like this little not really
[00:12:23]  library because I never made it a package but like a thing that lived inside of my projects and then one day I found out about TRPC and it was like this exact
[00:12:32]  thing but a hundred times better right and that was kind of the magic moment I think for me how did you do you remember how you first heard about TRPC um I heard
[00:12:44]  about it from Theo I was watching something in YouTube it was Theo's Pokemon video okay well there you go okay so yeah no Theo has been a huge advocate of TRPC
[00:12:54]  um which is a big part of this um stack yeah so basically you were on the the you're watching the YouTube the Twitch streams kind of using this as a learning tool to
[00:13:05]  get into web development trying to follow the path um yeah and I mean this is kind of a little bit of an aside I think that's really interesting to me how much stuff
[00:13:13]  has shifted over the last few years towards that direction when when I learned web dev I mean okay to be fair we were on dial-up um connections uh but you know
[00:13:23]  it was it was like static websites but even later on um you know like articles and stuff and the role of video I think is amazing uh in how it's changed the way
[00:13:35]  we learn about things I don't know do you have any thoughts about that I mean your your background you I think I looked up you're a teacher um um yeah so I
[00:13:42]  guess I I learned programming a few times kind of before this the first time around was C like 15 years ago 20 years ago and back then um there was like this big
[00:13:52]  book that you could learn from and then the second time around I wanted to make an iPhone app so like I learned objective C because that's how you made iPhone apps back then
[00:14:00]  and that was still from a book but then you by that time you also had like stack overflow and all of these things so it became a bit more sort of like a
[00:14:07]  hybrid approach of you you have the book where you learn the facts and then you have um the internet where you google stuff but this time around like learning web dev I I bought
[00:14:18]  some books I never opened them I just learned it all on the computer computer and like documentation is so good now it's so much better than it was um even five years
[00:14:26]  ago or 10 years ago all these like if you look at I don't know the documentations for for Postgres it's incredible or like I guess not the old React docs
[00:14:36]  but the new React docs are really really good and yeah yeah there's there's so many excellent ways to learn now yeah no that's that's very true and um um
[00:14:45]  interactive learning and stuff like just the the way things are up to like I gotta give uh Svelte a big uh on the framework side a big nod on that side um
[00:14:54]  all their stuff's interactive even Svelte kit has a new site uh I think it's called learn Svelte kit or something where you can actually it's kind of
[00:15:03]  like I guess it's like a web container but you can actually build the app interactively with tutorials in the browser while you're doing it it's like that's like obviously
[00:15:12]  like it's kind of the newest thing playing with but yeah I mean this is just not comparable to what we we had before and for for me the most awesome thing is
[00:15:21]  that it's less on rails than it was before kind of so like um I mean like I've worked as a teacher before but also I went to a school called Central Saint
[00:15:31]  Martins which is like an art school that's kind of known for barely teaching people anything instead it just brings together some people who are super motivated and then you have technicians that
[00:15:40]  kind of bridge the gap between your current knowledge and the thing you want to build right right so like yeah like almost kind of like like self-guided like there's
[00:15:50]  there's there's this choice now I mean I guess with a little bit of guardrails but generally you can you can take things in a different in different directions yeah and
[00:15:57]  there's this super interesting question of like how do you encode learning opportunities in like practical things that people do yeah no it's interesting and I mean I told you or
[00:16:09]  I mentioned earlier in the stream before you joined on that like I had been like making video game demos and it was actually my work you know tinkering with computers that got
[00:16:18]  me hired um a lot of this makes me think of stuff like game theory and like when you when you look at how people like like how video games teach people the mechanics of
[00:16:26]  the game in the early levels as a a teaching tool it's interesting to think that we could build that kind of thinking into uh you know web dev um if I'm
[00:16:34]  following you right that's just like where my mind went to almost immediately um yeah I I think it's something like that I'm I'm not quite sure yet what sort of
[00:16:44]  my complete theory on it is and maybe I'll never be um but yeah I think there's like one side of it sort of bridging the gap like getting people to the
[00:16:52]  point where they can build an app because that's what's fun right if you're a kid you want to build I don't know a game so it should be easy
[00:16:58]  to build a game and maybe if you're a bit older you want to build an app or like a business so that should be really easy and then you can go kind of
[00:17:06]  back and fill in like oh maybe I need a better auth system maybe my database is slow but like that stuff is really not important at the start and I think now you can
[00:17:15]  kind of get to the point where you have an app on the internet like a lot easier than it was at some points in the past definitely a lot easier you don't
[00:17:25]  want to know like two years a couple years into web dev I just said you you tinkered with some stuff before but there were some periods where like there's like a
[00:17:34]  boom and bust in in terms of like how much we like we pick a technology we build on it as much as we can and then we realize like we went a little bit
[00:17:42]  too far this way and it's too heavy and then we got to switch and if anyone who's been involved in that sort of ebb and flow we'll know that
[00:17:48]  there's been times where getting started in web dev have been horrendously complicated um i'm looking at you.net i'm looking at you late 2000s like when the single
[00:17:59]  page app came out like we the the first decade of web development went up to a pitch of complexity that like single page apps were like the savior and it's funny watching that
[00:18:12]  happen again right now now that's more my hot take because you know i'm i'm i'm always kind of looking for these trends but um on the other hand i
[00:18:20]  will say each time we get to be more ambitious and i feel like it's because of how we've you know i don't know what the term lowered the floor raised for
[00:18:30]  like made it easier for people to learn and get that much higher up on the rungs without you know the next time around you don't have to start with some of
[00:18:40]  the painful stuff you you no one here is ever going to have to build a guestbook in pearl um yeah and like i i think abstractions are kind of a difficult thing
[00:18:50]  where if you talk about it in a conceptual way like it's easy to say oh we should have fewer abstractions but like the first web server was written in c right and
[00:18:57]  it's terrible um and if you kind of take that further like people now don't have to know like what webpack is anymore at least to a certain point in their
[00:19:08]  um web development journey and so i think like with every kind of iteration of it we abstract away some of the most difficult most annoying stuff and you can you can still go back
[00:19:21]  down there it's still there but you you have the freedom to not care about it if you don't want to and i think that's really powerful i i think i
[00:19:29]  think it i think it is and i i i yeah give me two secs sorry everyone keeps it's funny someone actually mentioned to me last room that i was too interrupting but
[00:19:39]  i gotta i gotta give greg from leptos a quick shout out uh uh just i imagine it's great because the username is j uh gbj leptos
[00:19:48]  uh gifted a bunch of tears uh tier one subs out a few minutes ago and also thanks to uh wesley coder who subscribed at tier one i'm in stream yard
[00:19:57]  so everyone knows to kind of flag me when this stuff happens because i'm i'm like too busy you know uh you know interacting with this stream itself on the chat and yourself
[00:20:07]  that i have to go switch over to twitch so i just want to take a moment to give those twitch shout outs um but yeah sorry sorry about that uh chris kind of
[00:20:16]  getting back tying it around here on the on the on this whole learning and stuff so you learned about trpc from theo and you're like man this makes a lot
[00:20:24]  of sense this is kind of like what i was missing in my my like i i see some pieces they're like good but maybe not quite fitting together let's let's continue
[00:20:34]  from there like i guess it wasn't too long before you decided to look at uh like was the t3 stack around at that point like i think i got started on
[00:20:43]  trpc shortly before create t3 up came around and so the way i built it the first time um the trpc docs were really bad at the time they're
[00:20:51]  much better now um was i just went into theo's repo and like copy and pasted stuff until i had trpc working in my repo that was the only way i
[00:21:02]  could get it going that that that works it's funny sometimes you're sitting there and you're debugging a thing like there's two there's two different ways uh for me
[00:21:09]  personally when i approach problems not working because i i especially when you're kind of trying to come into like a you start from like one id and you want to like get like
[00:21:16]  the whole system running right there's like reductionist debugging and build up debugging but it's kind of like the same side of the same thing where you like you literally have the
[00:21:25]  working thing and the broken thing and then you're like okay how much can i got out of this to get to the broken thing to the working thing or how much can
[00:21:33]  i build build up um you know so yeah whatever works it's i've watched too many people kind of sit there and just like staring at the code and being like hmm i
[00:21:42]  think it's doing this uh okay i'll put a console on the firm i think it's doing there you might start there if you can do it quick but i find in
[00:21:50]  in in in my experience i end up just being like okay rip it all out let's let's put it back together again um it's a good exercise um you learn
[00:21:59]  a ton that way too uh sorry just i like exciting a lot yeah i agree one of the biggest things that i kind of believe in in learning is like treating things as a
[00:22:08]  black box first and just using them and then going back down a level later on like i didn't know anything about how trpc worked when i first started using it and
[00:22:17]  like how how the typescript magic works and like how the request flows through like from an api endpoint through all the stuff that trpc does yeah but i built
[00:22:28]  an app and then i ran into a problem and i debugged it and i learned a bit there and then you know another problem learned a bit more and i think that's
[00:22:36]  kind of the more interesting way for for me to to learn or even to to help other people learn well i interested to hear is he's caught pasting that yeah okay so
[00:22:45]  apparently this round this roundest app uh for those who don't know i imagine many of you do julius is also uh maintainer of uh create t3 app uh
[00:22:55]  yeah apparently that roundest demo is is the is the hottest thing um there you go well it's it's not it doesn't work anymore because it used tier pc 9 which
[00:23:06]  was kind of like tier pc one i guess or the last version of your pc one and the current tier pc 10 is like two um they're on a really high version number
[00:23:14]  because they were really serious about semantic versioning at the start but basically we're on like version two now that completely changed how the entire api works yeah i can respect
[00:23:24]  that but the no no the interesting thing is you can always start at version zero but i mean maybe maybe that's fine i i find that's usually the trade-off if
[00:23:34]  you if you go to 1.0 quickly so people actually use your thing um but like if you start version zero you can make like a whole bunch of changes and breaking
[00:23:44]  stuff and then you don't have to worry about semantic versioning at all um that's basically how i treat all my stuff but you know the flip side is i find uh
[00:23:51]  my stuff takes forever to get to 1.0 so maybe maybe maybe i'm one to talk out so that's probably like the most super cautious take but yes um maybe the
[00:24:00]  way to do it is the chrome way like you just get to version 200 within like a couple of years yeah yeah exactly just like yeah yeah and it's interesting yeah there
[00:24:09] 's a psychology behind that that probably goes beyond what we're gonna get into today but but yeah uh it's especially when you start considering competitors and stuff and they all start like
[00:24:19]  deciding like that they're gonna jump numbers like the funniest thing for me is watching graphics cards uh like watching nvidia and uh amd like go head to head and they're
[00:24:28]  they're numbering and then one will have a bigger number than the other one like in the generation then they'll be like okay it's time to switch so our number
[00:24:36]  is bigger um anyway well and the problem with the graphics card numbers was always that you get to nine at some point then you need to figure something else out this is gonna date
[00:24:45]  me but my first graphics card was the radeon 9500 it's a great card yeah and then after that they went to the i think the x series like after the
[00:24:54]  9800 came the x 800 and then they came up with the x 1800 yeah like terrible naming yeah yeah no it's it's funny because x is obviously better right um
[00:25:04]  yeah or or s or something like s means super x means extra i don't know yes extreme i but again yeah i i semver has its value and it's it's
[00:25:16]  very it's it's important to not introduce too many breaking changes and i i i i can respect the the progress there but yeah trpc 10 as far as i
[00:25:28]  know huge change updated stuff in a way that people are really excited about the funniest thing about all this and the reason i'm talking about this is i know all this at a
[00:25:37]  high level you talked about like taking the high level and then kind of digging down a deeper i've never used like shock most of the technology that's to my knowledge in
[00:25:47]  the t3 stack i that's why i get that big long intro about me winding down in terms of like the you know the the different technologies and my experience because like i
[00:25:57]  have never used trpc sorry alex i just haven't cut around to it yet i've never used i don't know i know tailwind's part of the package
[00:26:06]  but i never used tailwind i've never used uh what else have i never used prisma um i've never used next auth i've never used i basically have never
[00:26:16]  used anything in this so um wow yeah this is this is why i want to learn about this because uh you know kind of an aside is i think what's happened here with
[00:26:29]  t3 is incredible and i'm seeing the the uh i've seen that come into this solid zone community as well and people creating their own version like a shout out to
[00:26:40]  create jd app but i wanted to get to the source you know what i mean i wanted to understand the magic here because i have oh yeah sorry god yeah ati thank
[00:26:50]  you theo this sorry i just oh man i'm just did amd buy ati i can't even remember uh yeah they did i think like a couple years after that
[00:27:00]  generation of cards yeah yeah yeah yeah yeah yeah yeah i mean god see this is what i tell when i tell people i've forgotten more than i remember um anyway uh yeah but
[00:27:13]  it goes the other way as well like we met in london in i think it was november or something at that conference i said like right i'm gonna try out
[00:27:21]  nuxt i'm gonna try out solid i'm gonna try out remix finally and just none of that has happened because like the job gets in the way and like somebody opens
[00:27:29]  an issue on the project you're working on yeah yeah you just never get to the amount of stuff that you want to get to yeah so there's a there's a couple
[00:27:38]  of things with that first of all i love that you mentioned that conference right for all the it was for the it was that conference we don't the conference that shall not
[00:27:47]  be named i it from like on a certain angle that was the worst conference ever on another angle it was amazing conference to meet with the speakers the maintainers because we're literally
[00:27:58]  the only ones who were there so yeah exactly i had a blast there like i i understand that for um the sponsors it was terrible and for for many of the speakers it was
[00:28:07]  terrible um but i expected to go there and watch a few talks and go home and instead like there was nobody else there except for the speakers so those are the only people
[00:28:17]  you could talk to yeah yeah it was it was kind of awesome in a weird way but yeah and the second thing i wanted to say there was the solution to my to that
[00:28:27]  problem for me was actually really simple i started streaming this is my excuse to like set aside the time to learn about something um every week and at first you know you're
[00:28:39]  thinking okay i must start the stream to tell people about solomon like most my streams aren't about that like people would have questions and i can interface with people which is great
[00:28:46]  but most of the time i was like okay this is how i this is how i can like set aside time to learn about stuff and it turns out other people want to learn
[00:28:53]  about stuff so i think it's a pretty it's pretty nice uh i don't know it could be worth a shot i don't know you do some video contents i
[00:29:02] 've i've seen recently yeah i just got started on that and like i don't have the aspiration i think to become like uh i don't know a video producer or a
[00:29:11]  youtuber um i just want to make the videos that get linked when people ask a question on discord basically i mean that that's good too like it's it's kind of like
[00:29:20]  that thing where someone says like if you have to answer your question like for the third time you should just write an article that's like the the old sage device and that
[00:29:28] 's really that's not how i got started i got started on articles because i was like oh my god they just released hooks how is it possible that all the react code is
[00:29:35]  going to start looking like solid code that's just mind-blowing but very shortly later that's when i changed my perspective i found basically that's that's that's my tactic
[00:29:44]  now it's like basically if i have to go explain something on twitter i'm gonna just write an article for it and i think going back to what we were talking about
[00:29:52]  earlier these days it's more like i'm just gonna make a video for it yeah the the other nice part about making the video so far for me has been for each of
[00:30:00]  the videos i only knew like maybe half or two-thirds of the stuff in the video before i made it but like i have this crippling fear of releasing a video that
[00:30:09]  isn't correct in every possible way so like i have to go out and learn it yeah and um yeah and you come out knowing a bit more on the other side yeah
[00:30:18]  no and that makes that makes a lot of sense that's that's the same thing happened when you write the articles right it's that you actually like usually it just takes enough
[00:30:27]  to know that there's a topic here and i mean this is the whole learn in public phenomenon generally but um yeah sorry i love sidelining conversations don't it's
[00:30:37]  funny i go on other people's streams and do this but it's when it's on my stream i go out of control like so it's all good um but yeah okay
[00:30:46]  we should we should kind of loop this back and we were going to talk about t3 today i think if i remember correctly we don't have to yeah yeah no i
[00:30:54]  mean here's the thing because part of what makes t3 so special it's part of the reason why chris is sitting across from me here today um is like you're
[00:31:07]  right i could have had theo on at you know at some point and you know we could have probably boosted the the viewers right you know and been thing but t3 isn
[00:31:17] 't about theo do you know what i mean like yeah t3 is something that came up from his community so i'm not going to like steal all the credit from him
[00:31:28]  on that but it's it's something that like people saw the need maybe theo kind of guided them in the direction and they built it themselves like and it's it's people
[00:31:41]  you know learning web dev people um trying to find their place in the react ecosystem maybe they're starting a startup you know that's what t3 and t3 community is
[00:31:51]  and i think that is interesting and what i want to put on highlight today yeah one number that's really awesome to me is um i just looked this up we have 173
[00:32:01]  contributors eight months in and the last time i checked which was at like 140 or something i think over half of them made their first contribution on create t3 app that is an
[00:32:10]  amazing stat so like it's it's not just the thing that you learn from but it also becomes like this meta thing where you graduate to contribute to it that's and
[00:32:19]  obviously we're not the only project that has this but like it's one of the most awesome things to me yeah no and and that is what open source is like i the
[00:32:29]  thing is um i should have put it like there there's there's a couple things really working in t3's favor on that right in the sense that there are a
[00:32:41]  bunch of great existing tools that t3 gets to leverage in here that just make a lot of sense together there's this community you know fueled by you know you know at least
[00:32:54]  learning and which is you know what theo's been all about um and and then like once you get a little momentum momentum these things just like shoot you know like they just
[00:33:06]  they did it's like a rocket you know and i think i think i think that's incredible to have watched that growth because the funny the funny thing is i've been i
[00:33:14] 've been playing with uh you know surveys and like i always i'm very aware of all the key points when like annual things happen in web dev where you know like best
[00:33:25]  of js or what is it uh rising stars of github um js survey there used to be one every year for the real world demo like there's these key articles or
[00:33:35]  things where you got kind of a snapshot of where the ecosystem was t3 shot up so fast this year that it basically missed it like they didn't even account for it
[00:33:45]  because it came out of nowhere and i i like it's it's we talked about first contributors which is on one side but this is also a reflection of just how much this
[00:33:58]  project that started from these contributors has has come into our collective awareness uh it's the best way i want to put it well and i think having probably the biggest um web
[00:34:12]  dev youtuber talk about it a lot maybe also helped a bit right but the funniest thing is i mean theo was not the biggest web dev uh um youtuber or whatever you know yeah
[00:34:26]  at the time when he when he made the actual original video i mean we talked a bit about this when i was on his stream but i like he threw out that throughout that
[00:34:35]  video right and then i think he did the dan abramoff video right after it and then i i love this because one of my favorite one his third video was actually
[00:34:43]  how to convert your next app to solid um it was like it was like one two three i'll tell you two of those videos actually have done really well the third one no
[00:34:50]  one really cares about but but but like what i'm what i'm getting at is like yeah i mean there's a lot of factors into how this play plays out and
[00:35:04]  i i i you i think sometimes you just find that that alignment just happens like one thing i was really happy about is that t3 kind of retroactively got recognized on some
[00:35:17]  of these things even though they weren't like in it like can i can i i'm gonna show my screen for a second actually let me swap my view for a second show
[00:35:24]  you what i'm talking about i don't know if people saw the rising stars of github um but this this is the whole last year right and we we can
[00:35:32]  see the growth obviously bun was the biggest growth on github stars and again this is a vanity metric no one read too much into it but i want to i want to
[00:35:40]  show you like astro 1.0 release was last year huge boost t3 is in the top 20 for a completely new project like from zero to whatever and it only showed
[00:35:53]  up halfway through the year like i just i just want to i just want to throw that there so the point that like if if if it's like what look look look
[00:36:02]  it's coming out like i don't know why trpc is a is a is a back in full sec i guess it's a library but like if if you're
[00:36:09]  looking at frameworks it's next astro t3 remix and again it's a vanity thing don't don't like i just i just this is incredible um effort um and it
[00:36:21] 's something that i like to see because i i mean obviously the weight of of having like an influencer but this we're not even talking about like we're talking about a
[00:36:32]  newly made influencer like it is hard to get any kind of traction in in this space like i know this personally like you're clawing up from from nothing and this is
[00:36:44]  a sheer power of of what's going on here so you you guys all got my attention i'm just yeah i think one thing that we kind of got lucky with is that
[00:36:57]  nobody else before um like knew how to make jokes on twitter hmm yes that is true i i'm i'm actually very terrible it's so funny twitter twitch youtube people will
[00:37:09]  make jokes and and i think a lot of web devs are just kind of like missed it and it this was a lost opportunity i think i think really it's crazy to
[00:37:20]  see the change of brands and like frameworks joining in i do you know what i saw today i i i mean maybe not everybody's like i saw the quick account write a
[00:37:33]  poem and post it up i i kid you not it was like someone was talking about islands and lakes uh and it was kind of and it was just like you know like having
[00:37:43]  fun with it again to get out of this like it's so funny it's like it's like javascript was in this whole like javascript fatigue too much
[00:37:51]  blah blah blah it's so complicated and no one stopped to have fun with it for quite some time you know like having fun and learning go hand in hand uh so i i
[00:38:02]  i i think yeah go ahead it turns out valuable conversations happen at the water cooler yeah okay actually you know what i got i got i got i got it right here let me
[00:38:14]  just throw this in this i mean this this is just today but i just i mean obviously it's it's self-promoting and whatnot but i mean this this is
[00:38:27]  this is having fun but you're right the meme game is actually the real game that's been going on so thanks to thanks to people like uh like i don't know a
[00:38:36]  lot of cool people that probably got awards on theo's award show people like trash um and whatnot so anyway uh yeah this this is this is this this is the new the
[00:38:51]  new norm right yeah i think it's gonna stay that way like the new people coming in are mostly like from this side not from the side of how it was before like
[00:39:03]  i i think five years from now there's gonna be a lot more people like us than i don't know the the kind of image that the old frameworks were putting out yeah
[00:39:12]  and it's it's just it's it's just learning how to use these things different and as i said a shift so we've got all these elements just kind of
[00:39:23]  colliding together at the right moment for this for this stuff and which is really exciting because as you said new contributors a lot of interest and i i mean this is all the
[00:39:38]  inputs i'm hoping the outputs are also uh you know something that are equally compelling um so i i yeah like that's why i'm interested to see this stuff today but
[00:39:50]  let's let's continue on a bit with with with how you got actually in involved with the project because you said like did you did you you were already using tp tr
[00:40:00] pc working on the project uh uh work you know working on projects that were similar and then you i guess at a certain point uh yeah tell me a little bit more
[00:40:11]  like like what was your first contribution like how did how did you get there i don't remember um this is how it happens right like you open an issue and then you open
[00:40:20]  a pr and suddenly one day you wake up and you're one of the main contributors i think like that's that's how it goes for for everyone right yeah yeah no i
[00:40:28]  i imagine so unless you're the person who did the first thing in the first place and that's it yeah that's a slightly different journey um but yeah there's the people
[00:40:37]  who start it i think there's the people who come in and sort of stick with it and then of course in open source like a lot of people also come and go
[00:40:45]  yes yeah yeah i mean it's it's interesting right because we're building a foundation on volunteers right like that that's what we're doing like it's like this is a
[00:40:57]  common good kind of thing people don't make much money doing it generally unless they find themselves in a place where a company is going to hire them to work in open source
[00:41:05]  the few lucky people um and then other than that you know donations and like this is not a model that really has funding and it's always hard to sustain so it's
[00:41:18]  interesting our currency is almost interest or mind share which is is a very interesting place to be and i mean this is more of a self-reflection probably more than anything else
[00:41:27]  but you need you need that front of the funnel in terms of like excitement and stuff and so in a sense like i mean theo brings that to the project like that's that
[00:41:39] 's where that's why it's so essential i spend an incredible amount of time doing that myself on on my side uh which is funny because people like aren't you supposed
[00:41:47]  to be working on the new reactivity uh algorithm or fixing bugs and it's like yeah that too um so yeah but also you have a bunch of super talented people who come
[00:41:56]  into your project and they can also help with that sooner or later exactly right that's that's when you become the face of the project to some extent right and that's that
[00:42:05] 's the that's the powerful thing you you better believe and and i'm again talking solid for a moment the next version of the reactivity is not being written by me
[00:42:12]  it's already happening today you know i go in there and tweak some stuff but like like there's so many talented people um you know around these communities around around the these kind
[00:42:24]  of more earlier stage uh technologies and stuff that um they they have so much capability in them and they don't even might not even realize that that yet and i'm i'm
[00:42:35]  very stoked on as i said the whole t3 community at leveraging that up i think you guys do very well i think another community does really well as astro um so
[00:42:44]  it's something that's always conscious of that yeah i think we had it maybe a bit faster than some other communities but i also think it's like the universal open source story
[00:42:53]  like um the new react query isn't being written by tanner yeah yeah or um i think it's the same for for almost every project that's successful for any number
[00:43:05]  of years like if if you look at who contributes to react um it's a very different group of people now than it was when you react first got started oh i got i
[00:43:13]  got a question from the chat i want your answer i've answered this before on stream any advice how to get started with open source contribution to maintenance i would as somebody who
[00:43:22]  kind of fell into it i would say use stuff find problems and you know open issues for them or maybe even try to fix them i think this there's this really unfortunate idea
[00:43:34]  that like you go look for good first issues and then you fix them and you land an open source i don't really believe in that because like after that good first issues
[00:43:44]  close what do you do next right like maybe that's good for for learning how git branching works and all that and and i can respect that but um like software is solving
[00:43:55]  problems that either you have or that somebody else has and like if you hit your head against the wall often enough on a problem like sooner or later like you might bounce off of
[00:44:07]  open source a couple of times that definitely happened to me but at some point like if you keep learning you'll be using a library and you'll find a problem and you
[00:44:16] 'll be able to provide like a full solution either you can implement it or you can open the issue and i think that's really the only way to get in yeah yeah no
[00:44:25]  exactly and yeah i that's my thing i want i wanted some more takes on on this because as i said i get asked this question like every week and it's like on
[00:44:35]  one hand i feel like there's more that i could be doing to help people on their journey to that because if you if you do guide people or give them places that
[00:44:44]  you know need focus perhaps but honestly especially with open source this stuff has to be self-motivated you you you have to be looking like you there's a problem you
[00:44:55]  got to be solving like something that means something to you and it doesn't have to mean a lot don't get me wrong this isn't i'm not saying like everyone has
[00:45:01]  to be passionate about all that but you there's got to be like there's got to be a direction because otherwise if you end up doing something you don't care about
[00:45:09]  like you wouldn't do it and this is on your time and your thing so like i appreciate the question because it is hard from the sense that you're like i've never
[00:45:19]  done this before and and then it's like you know well it's okay it's okay if you've never done this before we're all learning at different stages of different things
[00:45:28]  it's just um build something come back build something come back and just that's how you that's how you're going to help yourself here because you're you're going
[00:45:37]  to you're going to you know read read some issues just get yourself in a place where you're you you know join the conversation you know come in discord you know just
[00:45:49]  get yourself in that place anyway yeah exactly and i think like if you're still quite at the start and like just the idea of forking a repo and making a change and
[00:45:56]  clicking on the pull request thing is like very scary then maybe like contributing to one of those things where you put your name in a markdown document is a good thing because then
[00:46:04]  you get that out of the way and the next time you can focus on like solving a technological problem the the other thing i'd say is contribute to to documentation um hang
[00:46:16]  out in in the discords like become like if if you have a problem solved like become the person who can help people with that problem the next time and and write about it
[00:46:29]  and because like by by figuring out how this problem gets solved like you're also learning about the code or maybe somebody opens an issue related to it and then you read the
[00:46:38]  pr that somebody else opened for it and it gets you into the code base yeah yeah you know yeah and i i love the docs comment i was going to be i was going
[00:46:46]  to like use it as a plug to come help us on docs as well you know i'm always awake but seriously i i actually it's funny some people go like aren't
[00:46:53]  some people think that it's like annoying when someone comes in um and like fixes like spelling errors in in stuff and like to a certain that's awesome yeah exactly like the
[00:47:04]  song it's like it's it's if someone's just like sometimes people might be getting like not agree with some semantic rewording of things and it's but for the
[00:47:12]  like if that's like the thing but generally like if there are like errors like clear like spelling commas whatever i don't i i will merge those all day long right like
[00:47:20]  like these kind of things like there's so many details and things you're juggling to just you know you helped like the i remember when solid hit its 100th commit
[00:47:33]  and it was one of those ones and and i made i made a big deal about like we have a hundred contributors to solid it was you know a couple years ago i think
[00:47:41]  or but whatever i i and and it was like people like oh what was the hundredth committed i was like oh someone like uh added a comma where i was like the
[00:47:49]  sentence didn't make sense and it's like yeah awesome like uh sorry yeah and like we're always behind on docs pretty much consistently both the translations and the actual docs themselves um
[00:48:04]  for example our docs on how to dockerize create 3 up we're just constantly behind um so like if if you're dockerizing it for example you run into
[00:48:14]  a problem like open an issue maybe figure out the problem maybe maybe somebody else figures it out but then you can write the docs for it like this i i've got an interesting
[00:48:22]  comment i want to pull this one up here i i do actually want to look at t3 app in a minute because i think we've actually gotten to the to the to
[00:48:30]  the present almost but they were mentioning that doing oss and prefer entries are completely opposite mindsets in my opinion and can't have both it's funny but is it is it
[00:48:38]  this this this is probably true seems true and might be true for some things but this is a reflection i feel of the interview process and less of the reflection on like open source
[00:48:48]  stuff because it's funny when i when i was hiring people to work on certain types of projects and it depends on what your zone or space is open source and their gith
[00:48:57] ub is like the first place i looked yeah like because like it's funny and maybe this is more of people with like less experience and stuff whether you're coming out of
[00:49:06]  the boot camps and stuff but it's like like i don't care about your leak code solving i never ever really cared about it like there are people who can solve problems in
[00:49:17]  clever ways and i think there's like some value in that but like like it's like a portfolio like i don't know i i do understand that there is this like
[00:49:28]  thing of like okay this is how you get the good job you do this and maybe i've been incredibly blessed to not have to have gone through that path but like i i
[00:49:36]  remember we we were trying to find people for for marco or something and give this a javascript framework like we didn't care if the person was junior in experience actually
[00:49:49]  surprisingly like it's easier sometimes to hire people on constrained teams with like lower you know you know years of experience we want to sure it i might test an algorithmic type
[00:50:01]  thing in a test but if i'm looking at you i'm way more interested to see like in those type of projects to see like the work you know and it's not
[00:50:11]  fair for obviously not everyone's going to go to open source and github and do the work and it's it's a time suck but like i think it's actually
[00:50:19]  an equally valuable thing from my perspective i think it's one way to distinguish yourself and and i also think it's going to become more and more relevant like i think companies
[00:50:31]  are maybe starting to catch on to the fact that the the people who work on the plumbing are probably good people to have on your team it makes sense because there's there's
[00:50:42]  application developers and that's great but um plumbing developers are equally important and maybe even more important yep yeah so yeah there's all different different kind of places on this and it
[00:50:55] 's it's interesting because we talked about layers before uh it there's there's different ways to take this and i'm hoping i i think we'll see you i'm hoping
[00:51:05]  there's been a shift at least in the hiring process the last couple years i know people who are on the hiring side or doing the interviews who've definitely shifted their focus
[00:51:14]  or and agree on that but it's like the industry at large it's it i do understand there's a challenge there um and it's something that's gonna probably be a
[00:51:24]  problem for for a long time admittedly i can see it from both sides like it's enormously difficult to find out if somebody's gonna be a good fit for what you
[00:51:36] 're doing in like what two hours three hours like how do you do that yeah yeah there's there's no guarantees here in software all right so we're gonna we're
[00:51:45]  gonna we're gonna we're gonna try and uh shift gears a little bit here uh where are we doing here i'm just catching up on twitch chat just because i should um
[00:51:57]  some more oh yeah thank you dread pirate roberts for gifting trash uh sub i know trash feels like they're left out quite often especially on them on the the award
[00:52:10]  show so there you go if you got a gift sub to my channel feel special sorry all right let's catch up let's catch up uh oh sorry i wasn't reading
[00:52:24]  chat um hey fuzzy what's up yeah oh man no this is a good topping itself and this is why i again community driven project community means real people maintaining it real real
[00:52:41]  perspectives and it i believe it shows up in the work that gets done and how it you know the actual product itself extends out to the community that's my belief so i'm
[00:52:51]  i'm super stoked to have you here to kind of help me here because we've been chatting now for almost like like i don't know almost an hour before which is
[00:52:58]  a little bit longer than i thought we would but this has been great conversation so let's keep let's keep things rolling i i want to i want to understand this t3
[00:53:05]  app thing um let me let me switch this my screen over here and get us actually kind of started on on the on on this all right and sorry for the stuttering
[00:53:17]  that's just me all right okay so t3 t3 docs maybe that's where i should start create t3 app see i love this like 14 000 github such
[00:53:30]  again vanity metric but like this project's been around it used to be hard to get 10 000 stars on github like what's what's up uh and maybe to
[00:53:38]  just quickly bring it back to the getting into the open source con uh conversation like you can make an awesome landing page for somebody like we had a not very good landing page and
[00:53:49]  then some people just came in and made it really nice yeah no this the site looks great um it looks you know this is this is what you expect from from most you know
[00:53:58]  it's professionally done it this is what you expect from most doc sites for most frames to get to um this yeah only the parts i need so let's see yeah this
[00:54:10]  this is what i was talking about how many of these technologies has has ryan used i've used typescript and you guys have probably seen almost all my next hours on this
[00:54:23]  stream so that that that's that's it it's i as you know i've i've i i've every time i've i've worked in react i've built
[00:54:32]  react projects but every time i've built i've done the configs and everything from scratch so i've never i've never used like a create react app or or next or
[00:54:40]  whatever so um the this this this is this is like the opposite side of the spectrum for me so this is i'm gonna have fun with this i think um i i
[00:54:52]  get to i know what these all are high level but i i think it's a different thing to actually see it oh i love i love got anthony in here oh god
[00:55:00]  our twitter api token is broken again i think it's three anthony tweets yeah there you go anthony redwood see this is this is how he's he's getting
[00:55:09]  redwood advertisement on your home page um so there you go you're gonna start charging us 30 cents per api um hit now right so yeah what is that you better
[00:55:19]  hard code those tweets i saw that tweet and i was like oh happy birthday to me you know um yeah it's my birthday when they make that change so yeah theo i think
[00:55:28]  we should hard code five good ones that seems like a better idea than just having the ids and paying a buck 50 every time um our cash is done yeah no that
[00:55:42] 's that's that's good okay yeah and then the essentials i am in the discord i have looked at the github and twitter you guys have twitter what is this just
[00:55:55]  theos yeah okay okay okay all right theo to be fair i think it's probably time for the t3 official twitter account i don't know you guys you guys make
[00:56:07]  the decision but i think the project has already shown that it has legs on on its own i i mean it's it's i know i know i know i know that's
[00:56:16]  what i'm getting at theo theo didn't have to actually do any of this this is the community but i i think like everybody wins right because um we get um the backing
[00:56:29]  of somebody who has very large reach and in turn theo gets like a project i don't know i i don't know do i do i have to give up my brand
[00:56:39]  i don't know no no i it's it's it's all good i just it's just a thought i also pay some of you sometimes oh man i'm having too
[00:56:48]  much fun with this this is what i get to do when this is what you get to do when you have theo in the chat and not on the stream oh no this
[00:57:01]  is great thank you chris um okay so yeah i love like this is the focus right here right like you jump in this docs get happen no this is the cli yeah
[00:57:11]  what i'd say is don't jump into the docs just run the cli and see what happens that's beautiful copy button right there see that click it means it copied all
[00:57:18]  right so i'm gonna open a project here no why does it always open x reactivity you guys aren't supposed to see that yet let me just open up with something
[00:57:27]  else you know your computer also is a terminal that's not the one in vs code ah probably okay yeah no i only know no vs code these days i'm the laziest
[00:57:43]  at yeah it's i don't i don't need to get into that how how lazy i am um okay so where were we yes uh this yeah so i think i
[00:57:54]  can just run that straight in the folder here right i don't need it'll prompt me everything i need to know i know this because julius went into solid start and was
[00:58:01]  like why does your cli cli suck and then he fixed some stuff for me so thank you julius yeah that's actually also been a cool side effect of create 3
[00:58:10]  app like we've i mean i think astro are number one now in terms of having an awesome cli but i think we've also had an effect on other projects
[00:58:18]  upping their cli my t3 app okay you know what sure this will be my t3 app can i show it off i know i know what happens yeah show it
[00:58:27]  off okay yeah honestly it's funny because i would have probably hit this the first time because a lot of times i don't like learning in typescript i feel like it's
[00:58:35]  an extra level for me so i probably would have hit this but i i'm too involved close to the community to know what happens let's pick javascript wrong answer
[00:58:43]  using typescript instead that's that's beautiful uh yeah all right so i'm stuck with typescript okay now i get to choose what i want um what do i want here
[00:58:54]  if i choose a bunch of these will i get like a like a pre-made project that we can look at or play with for a moment yeah so yeah let's let
[00:59:03] 's just choose a bunch of them next sure i'll take prism i don't know about that tailwind thing yeah whatever um and trpc okay i'll just
[00:59:12]  i'll just choose them all okay let's let's just let's full stack it well it's cool is that this is a choice i i guess the question i have
[00:59:21]  is if i don't choose any of these is like is it just a next app like is there anything on top of next here uh i uh how can i say this pol
[00:59:30] itely i think we make some better choices okay they've they've upped their game in the last month or two but um like i mean especially a couple months ago like this
[00:59:41]  really was the better create next up if you ran it without any of the other packages right right so like it's i mean the first obvious win is you the you don
[00:59:49] 't let people install javascript it's only typescript that's that's probably like the obvious one but i'm seeing something in the chat people talking about safe and via
[00:59:57]  safe ms so like better pre-configuration for environment variables if i'm understanding correctly we also put stuff into a source folder by default i think create next step didn
[01:00:06] 't even have that option until not so recently oh do you guys have the app directory uh sorry uh no we do not and i think it's the number one question we
[01:00:19]  get um the the thing like we we have these three uh things that we believe in one of them is bleed responsibly like we want to lead people to a thing that can
[01:00:30]  help them make i don't know a good app right now i think the app directory is going to be really awesome like a couple of months from now currently they don't really
[01:00:39]  have a good story about mutations um and there's a lot of other stuff still that has to be figured out i'm i'm i'm i'm completely bugging with
[01:00:47]  you guys yeah no no i i i agree and the interesting thing is i do want to look at the app directory if i have a few minutes after this although we're going
[01:00:54]  pretty good here um it's it's that like yeah it's gonna be really interesting to see how this all comes together or how stuff changes when the app director comes in because
[01:01:03]  like i have my own theories which maybe i'll talk about later but this is this is next today to to to the max so like we're gonna like take the ideas
[01:01:15]  we've taken a next project and we've added the pieces you need optionally but even then we just set you off with better defaults generally that's that's what we
[01:01:24]  got here yeah i mean one way i'd pitch create t3 up is that it's a good way to start an app today okay yeah i'm not really so concerned with
[01:01:31]  what's going on in like a year from now see this and knit.tips it's funny i i went to the site about uh i want to say like when
[01:01:41]  i did my first next stream because i had no clue about how to do next at all and i was like i'm gonna learn next today and see what it's all about
[01:01:48]  i've done remix i've done spell kit i've done all all these other guys honestly i've never looked at next i'm gonna just try it and then theo jumps
[01:01:55]  to the chat and he's like this is the best way to start next and he sends his website out and i was like okay cool cool cool so i go in and and
[01:02:02]  i and i do it and and i uh run the command and everything works good and i'm like okay sweet so now now i i know what i'm doing and then i
[01:02:10]  went to go do like another stream on next later i think it was the next 13s thing and i was like oh i remember that init.tips thing so i
[01:02:17]  went there and i went to go to and then there's like create t3 app and i'm like oh i i see i see what happened here but i to be fair
[01:02:23]  this is consistent right this is the best way to start an application today right that's that's the that's what's consistent about the site so let's let's let's
[01:02:33]  let's see what's let's see what's going on here okay just a little aside all right geez we just keep on having more people coming in onto the stream i
[01:02:42]  gotta check twitch here just to make sure that i like didn't miss any subs or anything and i think if i'm right i'm supposed to tell the like 60 or 70
[01:02:53]  people on youtube that they're supposed to hit the like button or something apparently there's way more people on twitch though so yeah like subscribe um what's the the other one
[01:03:04]  the bell yeah actually i don't even know what this one yeah honestly yeah like was it follow like subscribe no subscribe and follow the same thing i don't i don't even
[01:03:19]  know comment like subscribe comment comment show it to a friend okay yeah there you go i'll take that as the answer smash the button yeah sorry this i'm not good at
[01:03:31]  the self-promotion thing i apologize i'm i'm not made to be a streamer necessarily uh all right okay so where are we uh let's click enter initialize
[01:03:44]  a new git repository yeah will this try and connect what does this do okay yes it just makes a repo and stages everything that's in the initial app okay interesting you guys
[01:03:58]  make this a choice because i've seen a lot of repos that do this automatically my stuff doesn't but okay yeah i like it and then this um because you used n
[01:04:07] pm to start the cli we suggest npm here you can also do like a pnpm create t3 app or pnpm dlx i missed out i'm
[01:04:15]  i'm already here you can if you want to use pnpm you can say no here and then go in and do it yourself yeah we'll do it ourselves okay
[01:04:24]  okay okay cd install okay we give you a couple of next steps here okay perfect okay oh whoa what oh come on oh man well it's fine we're not going to
[01:04:36]  worry about the git thing honestly i've like every time my mac does an update like xcode just like decides to be like that's terrible what what happened your developer i forgot
[01:04:46]  about that in the last couple minutes okay we're not going to worry about that um okay this sounds good so what i'm actually going to do instead is open a new
[01:04:54]  window and open my t3 app because i said i use my vs code as a terminal always so now we'll open here um okay i'll trust the authors okay i
[01:05:08] 'll trust you right all right um and then we're gonna pmp install all right and now we get to load download all of next i will i will say this that
[01:05:25]  is next is definitely a thing okay cool and then we will do npx prisma db push i don't know what the pnpm command for that is but it
[01:05:40] 's fine i'll just do that one all right what does this do what what what what what does this i've never used prisma before so you're going to tell me
[01:05:49]  what this does so in your prisma folder you have um a schema file okay and um somewhere you also have now yeah a database dot sqlite file okay and
[01:06:02]  so yeah you're pushing the schema to the database basically got you so sqlite has some format where it actually stores its data or does its thing because it's like
[01:06:11]  a localized thing uh okay gotcha yeah i mean honestly i haven't i don't even know if i've used sqlite usually i just have like some post
[01:06:18] gres instance running in the background of my machine but yeah okay cool so this is all set up for me like i don't need to do anything else at least for local dev
[01:06:26]  here i have a sql flavored database for dev already just with that can i see the schema what is it okay so this is prisma has its own um language for
[01:06:37]  schema and actually this is making me think maybe we should suggest the prisma vs code add-on because yes you don't have syntax highlighting right now yeah yeah let's
[01:06:46]  let's let's do that uh where's extensions prisma yeah yeah i i'm like i'm is this it add syntax most popular 64. i i told you i've
[01:06:56]  never used this so okay sweet this will vs code make me restart anymore no i think it's smarter now oh beautiful there we go nice see again talking about laziness this is
[01:07:09]  the default dark theme for vs code you're not going to find anything fancy i haven't configured my terminal i'm not using vim i i i think i've used
[01:07:17]  vi before or nano or something honestly i don't even i don't even know what any of that stuff is i this is my fault i was i was i i literally went
[01:07:27]  from notepad plus to sublime to vs code straight line i've never done anything else i could care less about all the stuff that developers care about so all right
[01:07:38]  so what we ship with here is mostly just the schema for your authentication right okay so okay yeah i got it there's a user and then verification token session okay this looks all
[01:07:56]  good account yeah so yeah we're gonna keep the session in here works for me all right yeah okay this all makes sense uh and then okay so we have m variable ta
[01:08:10] -da next off is sending it back to ourselves i guess um for local development and some discord stuff okay okay cool okay we'll see what that's about in a minute
[01:08:24]  okay so what was the other command just before i forget it was it was it did i miss something oh just run yeah the last one yeah pnpm dev okay we
[01:08:33]  can close all now we can so i don't even like this okay sorry good drink my tea here for a second all right all right wow yeah geez and now you should have
[01:08:58]  an app running on localhost 3000 that has everything working except off beautiful beautiful okay so yeah nice i noticed the shared branding aesthetic that's very nice and so this hello from
[01:09:20]  tier pc is actually an api response from tier pc we can take a look at how that works in a second cool but um what i like the most about this is that
[01:09:29]  you have the first steps thing there and this kind of tells you how to get your database and your auth set up so you actually could get even to this point without having
[01:09:37]  a database running nice yeah yeah so we're just showing a page ah yeah yeah nice okay yeah this i just wanted to see there's a fallback in the ui
[01:09:52]  on the page response as a server rendered page that we're sending mac and okay next entry point and some serialized next data for page props and whatnot okay yeah so just the
[01:10:09]  next app okay just poking around okay cool let's continue uh okay so that's yeah cool so yeah the trpc part is is independent of the of the off part
[01:10:24]  because it just depends on how you want to wire it up okay so where to go next do you think um i'd say go on the first steps thing and maybe get off
[01:10:34]  set up okay sorry where was the first steps thing uh here it's it's one of those two um i don't know boxes okay and this will take me now see
[01:10:44]  this takes me to the docs smart okay um yeah so we have the full docs but we also have just this page for like how to get running with the minimum amount of
[01:10:58]  stuff got you okay so we did this and then authentication oh actually sorry i need two seconds i'll be back in like 30 seconds oh hey what's up dev um to
[01:11:26]  the person asking if cal started with the t3 cli i don't think so i think they were around um before we got started let's see what else is there
[01:11:40]  here uh non-trivial t3 apps in production yes check cal.com it's all on github um netflix is using it for dashboards there is
[01:11:52]  a couple more uh is nexo still a maintainer yes um he has high school exams right now sorry about that um answer some questions in the chat i appreciate that ch
[01:12:10] ris uh yeah no it's it's crazy you mentioned the nexo high school exams right now yeah uh there's some incredibly talented young people working um on on this project and
[01:12:20]  actually working open source projects as well uh the critter uh create jd app that are kind of t3 thing in solidland it's also created by high school students
[01:12:29]  so it's it's it's amazing and i when i was talking about the the people working on the next version of solids reactivity uh one of the key guys i don
[01:12:38] 't know if you read as anyone read his article on milo um he's first year university now uh he'd like he just started college uh incredible uh work being done
[01:12:48]  by young people in this space i i it's crazy yeah brandon's asking do we do good first issues um i do them occasionally when i find one where like i'd
[01:12:57]  be happy to walk someone through the solution because i think like you shouldn't open a good first issue if you're not willing to help somebody solve it if that makes sense because
[01:13:07]  like good first issue like for who often like i think people i don't know put like css stuff as good first issues or i don't know no that's that
[01:13:18] 's a really good point um yeah no that's that's interesting point i think i think sometimes when i hit a docs thing i might suggest it but like it depends on the
[01:13:28]  type of thing because even when you do docs you have to know something yeah your experience comes in all different forms um i guess that tag is probably less useful than people realize
[01:13:39]  yeah i mean i i opened one i think this week or maybe last week and it was uh closed by a first-time contributor i think first-time contributor in general not
[01:13:49]  just to us who found it on um twitter but yeah i only do it when i'd feel comfortable like getting somebody on a discord call and walking them through it yeah so
[01:14:00]  yeah no the great question okay so sorry about that slight distraction for a minute it's it's actually kind of crazy when i think about it like how many streams i do for
[01:14:12]  like five hours straight and never take a break um yeah anyway it was to the point it was a joke i had to go get a ups package and everyone was just like
[01:14:24]  yeah you know sometimes it happens you know i'm i'm lucky i i live in a i live a live in a house and whatnot and i don't have to worry about
[01:14:34]  my fire alarm um or fire testing happening you know in the middle of my streams you know at the worst possible times so sorry another shout out to theo awesome um anyway uh
[01:14:47]  let's let's let's uh let's let's look at this these docs for a second here okay so okay so we have database i guess yeah so we should set up
[01:15:00]  authentication i guess first i kind of also want to look at the code but let's let's let's do this kind of setup stuff first to make sure we have a working
[01:15:07]  app and then we'll like look at how it works and what's going on okay so next auth we use discord provider um this one is simplest next auth offers interesting i
[01:15:17]  haven't used this before either so it's it's kind of like a a lot like they verify your identity so it's kind of like a yeah type thing okay yeah okay
[01:15:25]  yeah and discord is really the simplest one like github has token expiry google makes you uh do a bunch of stuff on their website before you can do it and discord
[01:15:33]  is um the least amount of steps of any of them okay by far okay so go to the discord developer portal here and click new application let me just see here okay new
[01:15:45]  application once you've been you navigate settings a lot general um okay so i don't know how much of this i should be putting a stream but we'll just call it my
[01:15:54]  t3 app because i can name this this doesn't have to be unique like across the world this just has to be mine right yeah okay so i'm going to create
[01:16:02]  that and then okay here's a bunch of public keys that are probably not supposed to be i don't know whatever we'll worry about it later so you don't need these
[01:16:12]  actually what you need is the ones um in the left yeah is there anything that should be worried about from a security standpoint people like hiding yeah don't leak the private key
[01:16:24]  maybe okay okay good call good call i'm gonna i don't know what like the damage is that somebody can do on like if they have your private key and you're running
[01:16:32]  the app in localhost but you know it's fine you i clicked on the oauth2 thing and i see some stuff we don't it's fine so i'm gonna
[01:16:41]  copy the what the client id or the is it the client id that i copy yeah you need the id you need the secret and then uh the sixth bullet point is you
[01:16:49]  need to paste something back into the discord um oauth page the funny thing is i'm also going to be okay copy the client id and add it to your discord client id
[01:17:00]  okay so that's not that's not a that's not a that's not a tricky part so i can just add that to my end file in my project let me go
[01:17:08]  here so that one is this one like there's probably no way i'm gonna do this without like the secret coming out whatever click reset secret yes do it oh wow okay
[01:17:27]  this is fun sorry i i need to pull up my my two-factor authentication give me a second here while i open my authenticator app actually i'll use this
[01:17:38]  as a time to go grab another water yeah go for it yeah people people do need to take a break when on stream okay so all right all right okay now i get to
[01:17:57]  copy this and then what we're gonna do is we're gonna stick this in our m file here and then we'll never open the end file ever again on the stream
[01:18:07]  no i don't honestly let me i gotta switch screens here i i'm being overly safe i usually wouldn't care about this but apparently there's over 300 viewers watching the stream
[01:18:19]  which is a lot for me it's like at least 15 or 20 percent over my highest viewership before so let's do that okay sweet now we never open the m
[01:18:34]  file again okay we're back all right all right beautiful watch it like show up in the terminal or something i make sure all right there we go okay so now we can
[01:18:53]  close this down i think what does it say secret add redirect type and type in click add redirect okay there we go right we need the other part of the of the thing here
[01:19:10]  so i'm going to copy this over sorry i can't show this part on screen i probably could but whatever and then for the production to probably follow the previous steps and
[01:19:20]  add another application this time is replaced okay beautiful save changes save changes beautiful set next off secret oh i have to open the m file again so this actually works without the secret
[01:19:40]  i believe in development um it just adds one on its own okay yeah i'll trust you because i don't want to open the m file again okay okay let's let's
[01:19:53]  try let's try logging in um all right it's funny as i said i'm interested because if people don't know solid start supports uh next off like we actually have
[01:20:07]  solid off we're the third i believe after next and then after svelte kit so um we do have a solution here and it's part of our version of this i
[01:20:18]  just there's like i just haven't used any of this stuff yet so okay um i think what's really awesome about like next off and um the all all the tanks
[01:20:28]  like stuff and a bunch of other packages going um framework agnostic is that like five years for or i don't know one year two year from now maybe like using this
[01:20:38]  with solid using this with react like this stack is going to be almost the same yeah no and still at that point you can just switch to solid and save like 100 kilob
[01:20:47] ytes of javascript yeah yeah and we're already actually starting to see a little bit of that because even in some places i mean not something like the off library but
[01:20:57]  like even tan stack um and stuff we're doing some really cool things with uh with solid query uh which makes it like um almost which is the tan stack which makes it feel
[01:21:08]  almost native like with like our server functions and stuff it's you can basically have like um like tan stack libraries just querying the databases directly and stuff like a lot of
[01:21:19]  really cool ways of using these agnostic libraries on the primitives when you build with that in mind so yeah anyway uh that that's for another stream um okay so
[01:21:29]  good good good you should be able to log in okay so if i go to my app now and click sign in sign in with discord please work i will authorize yeah this
[01:21:42]  is typical authorized have ex an existential crisis all right thank you discord for your sense of humor yeah okay logged in you can now see the secret message it looks very secret no
[01:22:01]  no okay awesome okay okay so let me see first steps next steps this will include your random example okay this these are very informative steps it's like i almost don't even need
[01:22:13]  chris here let's let's let's take a look i i think like that's what we've done because not everybody has um like another person there when they're
[01:22:24]  getting started on it yeah no that makes sense um i i can just be like you know the day before stream i don't have a content please help me you know and i
[01:22:34]  can i can have someone show me how to create t3 app works but not everyone has that benefit so thank you chris so much for being here by the way um um
[01:22:42]  i've been wanting to i've been wanting to look at this and it's becoming more and more uh as i said something of relevant of relevance yeah and i love what
[01:22:51]  you guys do we did this in the marco as well where we highlight the contributors on each page i'm gathering so then if i go to a different page it might be
[01:23:01]  you know some of the same people obviously but but yeah no this this is this great little touch to really emphasize the work the community can do here yeah and this is so awesome
[01:23:11]  like i was the person who wrote the first version of this page but so many people went in and approved that i'm not even on the list of faces anymore are you
[01:23:19]  the one additional contributor uh all right yeah no that's that's that's awesome isn't it just to see how that things grow all right so let's let's continue
[01:23:34]  with our application here okay not opening the m file okay other than that what i'm okay let me look at this there's a bunch of config files that i think are probably
[01:23:46]  pretty common in a lot of things uh pretty try to stay as unopinionated as possible with this stuff like we believe that the the prettier plugin is pretty much like
[01:23:55]  yeah uh the the tailwind one like you can't use tailwind without having your classes sorted but we try this for example like not enforce so much on prettier not enforce
[01:24:06]  like we enforce a reasonable amount of of eslin stuff but we we kind of want people to to have their own opinions on a lot of these things no that's that's
[01:24:16]  that's great um and to be fair prettier already kind of like does guide things with the defaults pretty far anyway so like yeah i think that's the right level um next
[01:24:26]  config i never actually looked at this in the next project before um anything special here the internationalization is just um because otherwise you i think you don't get the um the
[01:24:39]  language attribute on your outer html okay okay fair enough okay i remember correctly yeah so okay but then we got our source folder public folder okay yeah and this is basically our
[01:24:50]  pages directory where we have our typical um next app server um we have an api folder routers okay i'm gonna this is a different this is a little different here
[01:25:02]  because there's a this i'm a pages api i think i'm more familiar with what what am i looking at and then i have utils api and then i
[01:25:10]  have to global styles okay so yeah now it's time for us to figure out what's going on here in the code so i could start at the root of the app where
[01:25:20] 's this the root of the app in the next step yeah what's the root of the app head main this is the main i guess like you could either start with the
[01:25:30]  like real root of what gets mounted but actually i think an interesting way to do it would be to start from this hello query and like look at your dev tools see where it
[01:25:38]  goes and then chase it around the code base kind of right right okay so yeah as you mentioned there's this hello from trpc right from the beginning um and it
[01:25:49]  gets consumed i'm gathering somewhere down here if hello has data show it otherwise show loading query so when we're server rendering initially um yeah i keep synchronous server rendering obviously this is
[01:26:04]  this is like i think it's only that's crazy i sometimes forget that they only added async stuff uh um around like app directory time like i i've been using
[01:26:14]  like async and streaming stuff for like three gosh four years now um it's just okay yes so synchronous call um and so you can actually configure tier pc to ssr
[01:26:27]  everything by default um we have that off because um we don't believe that that that sort of uh thing is like the strength of of crate t3 app right right um
[01:26:37]  our strength is uh highly interactive um and maybe you ssr stuff when you need it yeah and i i will point out that um yeah i yeah i guess it is an
[01:26:50]  interesting trade-off right because like on one hand you wait for it which gives you longer first paint times um and i'm not gonna lie i was like dicing up frameworks
[01:27:02]  that did that like even with client-side rendering on the other hand you don't get to start the fetch until you're in the client so there's like a there
[01:27:08] 's a trade-off but i'm not gonna that's not where we're here today i just want to understand what mechanically what's happening so trpc does have
[01:27:13]  a like wait for data option do all the fetching up front then render the page option for the synchronous rendering good to know it has one way to sort of just globally say
[01:27:22]  uh ssr everything and then it also has um a couple of different ways where you can get server-side props from next.js um you can make uh ss
[01:27:31] r or ssd g happen okay all right so but this makes sense to me this is like uh use query here like this makes me think of your typical query client
[01:27:41]  type thing what do we got here so it's like oh interesting we are we just fulfilling it with this text are we calling it with this text i guess we're calling it
[01:27:51]  with this one thing you could do is uh just make a hello to query and like see how um because like this is one of the the kind of things that's really
[01:28:04]  nice to show off is the autocomplete that you get on your api from the front end yeah yeah i'm just right now i don't know where any of
[01:28:12]  this is coming from api examples am i looking for sorry just this is this is me who doesn't can i okay okay where am i now i am in root server ap
[01:28:26] i root app router create trpc router example so we have nested routers understanding this correctly and this router is going to be our service side handling of the routes
[01:28:40]  um so example router is coming from routers example so kind of nested structure and then aha and this is all fully arbitrary of course so we can yeah and it is literally
[01:28:52]  another router call this is like ducks all the way down create router create router you could do it all in one big router you can go 100 deep um right okay so okay
[01:29:03]  so then example router create trpc hello public procedures procedures something defined by trpc okay so this is actually actual tprpc this is like another thing here this
[01:29:14]  is kind of the nasty file where we hide all of the trpc boilerplate okay cool so there's a slight wrapper on this um and off pre people appreciate that
[01:29:27]  that kind of helper but the thing that i was looking at was public oh is it is this is this because the auth reasons like is this is public procedure saying like hey this
[01:29:36]  is available without auth is that yes i think if you go to the very bottom of this file you can see where the public and private procedures are defined t procedure so yeah
[01:29:46]  this is literally just the basic trpc procedure and then we have um the next thing you see is a middleware like a trpc middleware okay okay that's
[01:29:56]  cool so trpc has its own middle one does next have its own middleware as well like next has in the um the page star create has middleware but um it
[01:30:06] 's global and um just in general the the next js api in the old or in the current pages directory uh could be better that's kind of i think why tr
[01:30:18] pc really became so compelling right okay that makes that makes sense to me like we all have like middleware built into our meta frameworks but it is generally global it's just
[01:30:27]  a request handler what's cool is it gives you the power to like literally just sidetrack a whole bunch of other crap but okay this is this let's this is like
[01:30:35]  you're defining an api here so you're like for these routes give me this middleware okay um next and this is a yeah okay so this is yeah this is
[01:30:44]  next like in the uh old reckless next thing i've built a plenty of yeah like express style you have a request response and an x function right so in this case here you
[01:30:54]  also have context which is like stuff that every procedure has basically right yeah okay that that makes sense to me okay so we go through here if if the if the person's not
[01:31:05]  logged in we throw our error um trpc defines its own error type or is this something that we defined no this comes from trpc beautiful okay and then then
[01:31:15]  otherwise we pass ourselves along and we say hey this is this is the session session use user it's a basic extent user onto the session and yeah we're good to go
[01:31:28]  okay and then protected procedure is just a procedure that uses this middleware yeah very readable love it okay all right yeah yeah the spoiler plate is not scary at all um i think
[01:31:43]  it's not scary if you're you yeah okay fair enough yeah okay it's it's it's it's fine you do and it's way better than it was before
[01:31:53]  we uh revised all of this i think like a month ago somewhere around that with um all of these comments and naming things a bit clearer yeah no yeah this this is all
[01:32:03]  really great i'm glad to see this and it's cool that you put in the project so sometimes like this kind of stuff will end up in like like that's an interesting
[01:32:12]  point like this there's the cli but does t3 have like a like a import something from t3 like is there's there's there's no t3 package is
[01:32:23]  there no um you run the cli you get some files and from then on out it's your app interesting okay yeah okay that's that's that's cool and makes
[01:32:32]  sense as i said like yeah okay okay that's that it helps actually position where it sits in the world of things because like i like obviously i always talk about how minimal solid
[01:32:43]  start is but like we still have an import from start just because we do but it's not actually that many things like literally you can import from the router directly you can do
[01:32:52]  meta directly you could do you could do everything except those server actions really that's interesting anyways it's just something i'm thinking about i like this though because if you keep
[01:33:01]  to that policy it means that the stuff you do add is like this util thing like it's like in user space you're like it puts the pressure on you to kind of
[01:33:09]  keep it simplistic and understandable but on the other hand it's just like here it is you can take it away like it's very obvious what's there there's always that kind
[01:33:19]  of choice yeah and this is why i'm still not sure if we're a meta framework or a meta meta framework or just a tool that spits out some files like
[01:33:26]  i i still don't know what to call this thing and i think maybe it's many different things to many different people okay but i'm following good okay so yeah public procedure
[01:33:35]  probably see your protected seizure oh secret message okay got you okay and then we are returning json it looks like here um generally we're returning something it looks like json
[01:33:47]  here it's actually um json rpc so okay the structure is a bit different what i'm getting at is like does trpc i guess it's probably
[01:33:55]  ways to worry about like headers and like response objects and any of that kind of stuff or yeah you can do all of that and if you're using it with i don't
[01:34:03]  know fastify or express or on edge workers then you need to start caring about that but the way we have it set up here um you basically just write functions that return
[01:34:13]  stuff okay cool so then that makes sense okay so starting with hello input text these are okay this is zod yeah i've i've never used zod either that that wasn't
[01:34:24]  on your guys's list but um zod is the best i think um either zod or trpc i don't know which one's the better library but okay yeah i mean
[01:34:36]  the beef zod is a little bit more general applicable like we we do have some trpc starters on the solid side but a lot of times people can just forego tr
[01:34:45] pc but zod is still always ominously present um like you know what i mean like if you go if you have a server function you're talking both ends like you
[01:34:54]  you need zod um especially if you're doing crazy stuff like form validation which is like has the worst like you can't it's typescript's not going to help you with
[01:35:04]  form validation i realize it's all that is real validation versus um like uh like suggested validation but what like like like compiler time suggested validation but what i'm getting at is like
[01:35:17]  the types don't even help you you have to like literally aliasing zod is your savior from that perspective so okay so procedure take the input pass in a zod schema i
[01:35:26] 'm gathering that is which is saying this is an object with text that contains the string i don't need to understand zod to understand what this is doing then my query at some
[01:35:36]  point gets that input and then i can use that input to return yeah i mean this seems very simple i can change this message um okay it's too uppercase i
[01:35:51]  mean i mean uh let me just see now we're in caps we're we're serious here okay cool okay and then okay let's keep on going okay so an actual okay
[01:36:07]  can we figure out where this is being used um where is this get all uh because this one thing this is the server side there's like an equivalent client side piece or
[01:36:18]  no no where are we i think you get all is currently not being used in the client where we're like we're thinking about adding like a i don't know like a
[01:36:26]  crud thing where you can click a thing and it makes um little i don't know objects or posts or okay so the client side thing is actually rather simplistic this is just
[01:36:37]  a create thing this is like create the trpc client next api handler like this this this isn't like the server has all the config the client just like make
[01:36:46]  me a client and then once you have the client then when you're in here or whatever you're just like get me that client or something like where's api utils
[01:36:53]  api utils api um okay yeah get me create trpc next okay interesting what is okay okay so this is from okay trpc client gets created there
[01:37:11]  then it gets exported as api this makes sense to me there's some links interesting this links this reminds me of urkel i want to say um uh i guess apollo
[01:37:24]  or is it apollo that has the links but yeah it's quite similar to that yeah maybe it's apollo that i'm thinking of so then you have something to
[01:37:32]  add uh logger for logging something for batching does this mean that multiple trpc requests like to happen in the same tick will like all get sent at the same time
[01:37:43]  and put together yes they get batched and most of the time you want that there's also a regular http link that you can use if you don't want to batch
[01:37:50]  but um i think the use cases for that are fairly rare well other tier vision we cruise there you go okay that's what we were talking about earlier okay um but transformer super
[01:38:03]  json cool i i got you there so that's how you handle serialization and then yeah okay and then we just get our api and then which means i don't
[01:38:12]  know what this is doing but i understand at least what this is doing so so maybe you can figure it out if you go back to um the web browser and you open
[01:38:21]  the network tab and you refresh the page and you see where this hello query goes all right all right and let's show hello xhr um all right hello and get secret
[01:38:38]  so we got them both here and what do we got here this is batch one input just that one okay so they're both patch one sorry i just trying to figure out what
[01:38:52]  we're doing here so then we get our results um so i mean the url itself is basically just the the path um of the like the object thing right even before
[01:39:12]  that the slash api slash trpc so next has file-based routing right oh okay got you okay so so you're looking at uh pages api trp
[01:39:25] c so this creates the handler for that which takes our instance that we already defined okay okay interesting so this is actually server side yeah this this takes the request um from like
[01:39:41]  the next js api and basically like puts it into trpc land so because trpc works in like next js um in fastify um i think there's adap
[01:39:52] ters for pretty much every big node framework now yeah um they they all deal with requests and responses a bit differently so this is like the glue that let's use trpc
[01:40:01]  the same way um wherever you're using it okay okay yeah so yeah that that that is great okay so then we got this we got wired in so that's easy so
[01:40:11]  that yeah this is just setting up an api endpoint that makes sense it's funny because i'm like this isn't i'm also not that familiar with next so it's
[01:40:19]  like i'm kind of taking on multiple of these things at the same time but this this is making sense so far so then the client side is just that um utils
[01:40:28]  api thing here which basically looks like it creates something almost like a proxy um essentially that that's actually exactly what it does yeah so under yeah this this was my original approach
[01:40:43]  before we went compiler based on server functions i was doing everything like this um like when i first introduced solid start like i guess a couple two two and a half years ago
[01:40:51]  but then like nikki was like oh we can just compile it but if you're a general solution just compiling it is kind of a bit more magic than it's worth
[01:41:00]  perhaps so let's see here so yeah api dot example so so then you're traveling through and it's like get the example get tell what's lovely about this approach is
[01:41:09]  on this on the server side you can kind of like know you know where the function is just because it's all defined on the client side you don't actually have to link
[01:41:18]  anything this is literally just a string builder essentially right like yeah queer it builds the query string so you can autocomplete on it and it's super fun yeah because the
[01:41:26]  typescript thing because you're actually using the path instead of using strings uh you can you can actually see this because text 2 doesn't exist here um so uh yeah and neither
[01:41:39]  does number seven yeah exactly this is like the the tier pc demo where um like people get it why it's amazing yeah so yeah and from my perspective i can see that
[01:41:54]  you can see this too i i need to play with zod in a solid start example so i can like see like just how clear like how much that adds but this part um
[01:42:04]  is a good way to get something global back into a local scope without co-locating so i like this um because you you are defining a global api in a
[01:42:15]  sense i mean you can protection middleware but then you from this client you can literally re you can get your path simply by just walking along it and you know what exists because
[01:42:24]  of auto completion and typescript you know the types thing what the types are and it just it just works okay yeah exactly and it's just http requests at the end of the
[01:42:32]  day but for the person using it it becomes really nice cool okay so let's let's look like this so we got head head okay so then yeah this is very simple
[01:42:41]  i see what happens server renders does this client hydrates client does fetch gets the data when it gets the data this updates good to go we see our greeting message um and
[01:42:54]  yeah it's interesting because the client is actually sending this input so yeah it's funny because when you control both sides you're kind of like it's it's a game
[01:43:05]  you play but yeah this could be specific to the route right we could be like sending back something like based on the route id or whatever um like what user you're on or
[01:43:16]  what like what pro what post you're looking at send them back through use query load it do it okay um i want to i want to i want to look at the off
[01:43:25]  i think is probably where i want to go next i think unless there's anything else trpc ish that we should do i i get i kind of get it
[01:43:32]  you know um yeah like as an app developer there's not that much to get to get started on trpc and that's what's so awesome about it that like you
[01:43:40]  don't need to know how cores works and you don't need to know like what dns is and and you don't need to yeah and for the most part you don
[01:43:47] 't really have to worry about the url i love the obscuring the euro i mean honestly this is why i like rpc stuff i think it's interesting because
[01:43:54]  like um yeah it's this like this is a good model in general just like kind of unify it i've been playing around about file based like i have this idea in
[01:44:05]  my head that like file based stuff is good for gits and less good for posts because like essentially like you see this in graphql right you have this tree and you
[01:44:14] 're like getting the graph and you're getting like the pieces you need and then when you want to do a mutation now you're basically back at rpc level um
[01:44:23]  so the thing is for the most part our gets in building web page are this like they are the content of our page um as a mutation pattern i love rpc from
[01:44:33]  this standpoint because it it kind of like there is that kind of split i mean i'm getting kind of into my zone of evaluating the whole solution space but i like this
[01:44:47]  okay yeah and i think you see one like if we if we have time to get to prisma and to maybe creating something in the database and then getting that onto the page
[01:44:55]  like the sort of patterns for invalidating data and stuff like that are also really nice with trpc oh yeah yeah okay i i guess here's my question here because i
[01:45:05]  always thought trpc got used with like react query or something um yes it uses react query under the hood lovely interesting so so everything you have in react query like um
[01:45:16]  the use query and use mutation are their hooks but um for example with the query function removed because trpc sticks that in um and you have like in in react i think
[01:45:28]  it's called use query client to your pc is the same as use context so you have like invalidation and refetching but you have it as objects with autocom
[01:45:37] plete yeah this is what i wanted to see because yeah the client stuff like these like middlewares that are coming out of the box these links like or whatever they i know
[01:45:44]  they're they're not quite the same the middleware we saw earlier or whatever like these come from the client this comes from next specifically so these are react bindings so you
[01:45:52]  don't need to use react to benefit like basically the next bindings have react uh tan stack or react query built in but trpc itself doesn't necessarily need to
[01:46:02]  do that right if i'm understanding this right this is like part of the react bindings yeah uh one other thing we could do is look inside of the underscore app dot ts
[01:46:11] x and there's a with trpc in there uh api dot with trpc if you command click into that and i think there's an underscore with tr
[01:46:24] pc inside of the with trpc function which i think is in that file yeah okay yeah you go into that with trpc and then you can see like
[01:46:39]  the providers that wraps your app in did i go the right way i think so yeah use git client use quick get query client okay okay i think if you go down a little
[01:46:54]  bit further you can see like the react components yeah here trpc provider and query client provider okay gotcha okay yeah we're digging into the thing but it's part
[01:47:02]  of the trpc next thing so it's like part of the specific bindings okay that's cool yeah so trpc itself is even a little bit lower level than
[01:47:10]  what we're dealing with here but from like i live in react land perspective you never have to worry about that okay it's good to know so yeah so they just wrap the
[01:47:18]  api interesting choice it does or with the next thing it does make it easier to use but it also okay that that is interesting um okay uh where was i back to
[01:47:29]  my my example yeah so this is basically is there any other arguments here options what am i yeah so if you add an object here and just see what you have yeah yeah that
[01:47:41] 's that's sort of what i was trying to get at but i mean i don't yeah i mean what is this ops 2 used to have for example it's in
[01:47:50]  text or is this just more arguments ops anyways it's fine i'm not gonna worry too much about it i was just trying to trying to figure out how much of the client
[01:48:00]  they actually expose but i don't that's this this will suffice for what i'm doing right here so trpc exposes basically every part of react query that makes
[01:48:12]  sense to expose like in the sense that it's not replaced by something that trpc itself does gotcha okay that makes sense that's that's awesome uh okay so
[01:48:22]  can we talk off how does the auth work um because essentially we got here and it says auth showcase auth showcase is down here and use session use session is coming from next
[01:48:34]  off and this is pulling out our session data which is what we wrote to earlier when we were looking at our um or actually it was what we were checking earlier when we were
[01:48:49]  when we were doing our uh middleware for protected routes but yes i think in this situation it's gonna make an api call um you can also get it server side
[01:48:58]  and um pass it down to the client and then you have it um while you're ssring or something right and okay sorry i i just gotta look a little further enable
[01:49:08]  this is this is react query coming out of the the hood right here the the enable yeah see get ahead of myself yeah so it's only enabled if it's undef
[01:49:19] ined so there's no input for this one and then gets a secret message uh session data yeah so it's like if you're logged in like so we're not even going
[01:49:29]  to try and make this request unless we know you're logged in the client um and then yeah you could make the request but it would just return um unauthorized exactly so
[01:49:39]  we're just going to skip that because we know that much using next off and then if there's session day then put it in and show our secret message otherwise we are
[01:49:51]  not there um yeah so this is just a couple inline things oh yeah and the sign out and sign on sign in toggle yeah i guess you don't really have to think
[01:50:03]  about this too much right because you're just like you can always just check like session dot user and that's that's that's as much as the person consuming it really needs
[01:50:12]  to worry about you can protect a route or protect a section of the ui by just doing that um and sign in and sign out are provided by next off so again
[01:50:21]  not something you're you're really worried worrying about here okay next off has other fancy stuff like you can make your own login page you can override basically any of the functions that
[01:50:33]  next off has but like the basic way to use it is you can get the session on the client you can get it on the server and you can log in you can log
[01:50:39]  out you don't really need to worry about it that's what's nice about it that is that is really nice okay so yeah yeah i see i'm pretty stoked we
[01:50:48]  have we just got the next auth integration kind of going so i'm looking forward to seeing how that kind of fits into stuff this is what i like about the example is really
[01:50:55]  simple like we're not talking about like protected you like ui routes which starts affecting the structure of your page we're just talking about like here's the here's the
[01:51:06]  mechanism like you can check this obviously when you start building up bigger apps you're going to like section off and be like this part is behind the protection this part isn't or
[01:51:16]  you know different types of author authentication checks that you need to do against this user based on what their admin permissions are or whatnot okay yeah what i like yeah what i like
[01:51:25]  about this is people don't remember how difficult auth used to be yeah you're talking to someone who wrote their own oauth 2 server yeah i was working uh in uh um
[01:51:38]  education and uh and the privacy was like a concern and we also were building like kind of like a social app kind of thing too we're doing photo sharing so yeah like
[01:51:50]  instead of just like sign in with facebook or whatever we had to have like special we had to own the identities uh at least initially so like literally created our own oauth provider
[01:52:00]  um so yeah i i i mean obviously obviously there's there's other things like oidc client and like other kind of off clients out here but this looks like especially when
[01:52:09]  you get to the point where you're like like next off reactor you're like getting into like the almost framework level specific hooks they can leverage that in ways that are probably
[01:52:19]  much much simpler to get started with because yeah this is this is nothing like all i needed to do was set a couple environment variables which i'd have to do anyways right so
[01:52:32]  yeah okay cool so yeah sorry let's go back here for a second uh not there here this is the last piece of this that i haven't actually looked at here that's
[01:52:46]  why i was asking about get all because this is string this is string and then this is actually um what looks like a database query so yes is what i i understand i
[01:52:56] 've used orms before i know what find many is and i'm gathering this is the table that i'm finding many from um in prisma how did prisma get on
[01:53:06]  the context object anyways in the first place just just out of curiosity let's go and find out yeah if you guys yeah so if you go back into the uh trp
[01:53:16] c.ts file that's two files down from the one you've got open yeah um we create the context in there somewhere okay i think it's a bit further up okay
[01:53:28]  okay prisma yeah yeah yeah okay create inner trpc context and then prisma is just prisma which reports from dbts okay here we go import our m
[01:53:42]  variables um it was fun i was highlighting it so i'm anyways it doesn't matter um so like for a second flickered all the m variables um and then um basically yeah
[01:54:02]  okay set up configure our prisma client based on node m this is the level of logging clearly this looks similar to other sql things i've used before and then
[01:54:13]  global for prisma this is basically so that you don't open like a million database connections in dev gotcha yeah makes sense i've i've i've done that before
[01:54:24]  especially trying to like especially trying to run local serverless functions like i think i was using serverless framework or something like like each one tries to keep itself yeah anyways yeah okay
[01:54:36]  it makes sense and then yeah okay so prisma client doesn't take much configuration yeah all these tools are really like out of the box like oh yeah like this just works like
[01:54:46]  this yeah and and the fact that you wired the environment variables and everything for people so they don't have to like worry about like setting up the m stuff in the first
[01:54:54]  place knowing that it's good pattern like this just this just removes that kind of headache like like i've done that before like i've i've been in that case where like
[01:55:02]  you start and you like hard code your your values and then you get like you know you get to m variables and like yeah and then you probably did the m variables wrong the
[01:55:13]  first time and someone or someone commits it to the github repo and yeah anyways um yeah and this this stuff is like you know maybe we're not a meta framework
[01:55:25]  maybe we're just like a way to set up all this stuff that would be really annoying to set up every time you have to initialize an app yeah that's also kind
[01:55:33]  of another perspective on what create 3 app is because like it took us a while to get to this point and we've had a lot of awesome people come in um like
[01:55:42]  daniel roe gave us esm support um yeah there's a lot of awesome people from the community came and like improve this step by step to the point where i think
[01:55:53]  it'd be difficult to roll this like to this quality yourself in a reasonable amount of time yeah no i mean we said 170 contributors already i i do like projects like this from
[01:56:06]  a contributing contributing standpoint i one thing i found is like even solid start it's so much easier to get contributors in it than it is for solid core because all the core
[01:56:16]  is like are you are you a genius on reactivity do you understand how like performance like thing it's all starts like that much easier to get into i have to imagine that
[01:56:26]  like on a certain level like you can you can like know an area or learn an area really specifically here and be able to contribute because of the wider range like it's
[01:56:37]  like i i've done some stuff with prisma you can do this a little bit better here or i i i've i've learned you know like how yeah no this is
[01:56:45]  this is great yeah exactly and for example this uh auth query that we had uh in the index file like for the longest time we were actually just firing it all the time and
[01:56:55]  getting 400s back right and then uh yeah someone set up that it doesn't fire if you don't have a session because why would it fire right yeah no exactly like
[01:57:06]  this kind of consideration and yeah just yeah no this is this is this is this is cool um yeah that's how we doing on time oh man it's getting really close to
[01:57:18]  to win wait like uh where where where are you joining us from again chris you're it's pretty late i'm in austria so it's 11 but i can
[01:57:26]  go for a while okay okay yeah i i don't i don't want to keep you too long though uh let's let's see here i'm trying to think of what
[01:57:33]  other questions i want to answer actually can we we should take a second and see how the chat's doing because i've been ignoring them for like half an hour um how
[01:57:40]  are you all there are you the chat alive you guys still live in the chat um yeah yeah i can read it and scroll up um so yeah where it's much chosen um
[01:57:53]  because it's awesome in terms of getting all your types out of the database basically type safety um that's the nicest thing it has and i guess like the apis are quite
[01:58:05]  nice downsides are it's kind of big it does kind of disgusting stuff to your node modules um it doesn't have the fastest cold starts but yeah like dx basically is
[01:58:16]  why we chose prisma if you want this like a similar thing but faster look at keysly which is like a query builder that's also quite type safe um yeah and just
[01:58:28]  looking through here gotta thank you jurash 98 for tier one sub and yeah yeah no just yeah the the type safety is the big thing right like i've used plenty of
[01:58:40]  orams i think that's almost like has to be the baseline now when you're doing it but people forget that that was not a thing like people would actually almost be like
[01:58:49]  depending on their like graphql level you know or some kind of manual type generation mechanism in their projects to get the types um so yeah no that's that's huge to
[01:59:02]  see that like this this just like i don't know how prisma does its types but i'm not concerned with it because it's not affecting me at all like it
[01:59:10]  just works uh what's the one thing i wish people understood better about t3 as a whole um i i don't know as a whole but um the the biggest like source
[01:59:22]  of i don't know i don't want to say misguided questions but like misunderstanding is people ask questions about trpc when they're actually asking questions about react
[01:59:31]  query interesting yeah how do you separate that like is it they wrapped it so yeah yeah they wrap so it's it's it's quite difficult and i think like trpc
[01:59:44]  has such a big api surface that like they don't want to replicate the entire react query docs um yeah that that's actually like one of the biggest things where i
[01:59:54]  think we need to think about how to communicate that because it just happens over and over and like it makes sense why people ask it that way because if you use trpc
[02:00:04]  like yeah you're importing like react query in your package.json but like when you're using it you don't if you're using the first time you don't know
[02:00:12]  like where react query begins yeah so i love sorry go ahead uh yeah uh yeah i just want to say like i think that's like the the biggest thing that people struggle
[02:00:24]  with currently and that where i'm not sure like how we can communicate it better uh is there a migration path from create react up to t3 um not really copy paste
[02:00:36]  your components into a next js app and if you're already using react query for data fetching and you have i don't know like an express or fastify api then
[02:00:47]  like both those and your pc are mostly just functions so you can get by on copy pasting a lot that makes sense yeah i guess the thing that we haven't talked about
[02:00:58]  and maybe i'm probably not going to be able to get into it in in like time to kind of build it all out but maybe we can pull up the docs and
[02:01:06]  just kind of look at it for a second is what is the mutation story around like trpc like i the prisma part's obvious to me just call the call the
[02:01:16]  the database you know do an update or set or whatever but like um what let me just pull pulls the docs or switch screen views here like if i go to like i guess
[02:01:31]  that's an interesting thing how is it like trying to write docs where a lot of the pieces are actually like other libraries i think and choosing how much to do because if i
[02:01:41]  go to trpc here there's link to like some guides um you know that's a conversation we have a lot like we don't want to duplicate um the docs of
[02:01:53]  the libraries we use but at the same time there's kind of a couple of questions that sort of relate to how we integrate stuff i would say and that's kind of
[02:02:02]  where we try to um add our own things right yeah this hands back react this is talking about the fact that it's react query and how that kind of fits into that use
[02:02:14]  query but yeah um okay yeah how does it work this this is your video i haven't watched it yet because i didn't want to like ruin the the surprise it doesn
[02:02:26] 't actually talk about mutations all this video is is following a query from the http request like to the back end and all the way back gotcha yeah just kind of okay so
[02:02:37]  does should i go should i go over to the trpc docs quickly and kind of see what's going on yeah okay but i guess the interesting thing is there's
[02:02:46]  like a the tan stack part and the the the react or sorry the tan stack query part and the trpc part are kind of like butting up against each other i
[02:02:59]  guess a little i mean the optimistic updates would be handled by tan stack because they have a mechanism with their cache but yeah okay actually i see a mutation right here right here
[02:03:08]  we go api post create use mutation and then okay so this is this is this is this is this is react query right here on mutate new post post list cancel so
[02:03:20]  this is how the it handles it on the client side they know how to update the cache yeah this is how the invalidation all that works right yeah yeah so i've seen
[02:03:27]  i've done this before on error and unsettled so this all makes and then it doesn't it it calls invalidate and i'm gathering this this is all just that
[02:03:40] 's interesting because this is this is uh how should i put it this is a like tan stack query right handling it but the and this invalidates tan stacks query saying do the
[02:03:53]  do the request again does does trpc have to be aware of this that much or is it is it just really concerned on the server i wonder not really so um
[02:04:02]  like trpc knows what the input and the output of your queries is it doesn't know like what actually happens in the query so you could call your query create and then
[02:04:12]  not create anything and just pass back an object or um yeah you basically just have an api handler in the back end that it knows its inputs and outputs yeah it's
[02:04:23]  interesting this this is the most interesting part to me because like this path syntax is still carrying on into here i think that's where the magic is because the the uh cache is
[02:04:38]  still path based essentially like this context is the api context for our joint query trpc you know provider that they wrap their contacts control it you can use the same path
[02:04:57]  you use to find your your queries or to set your your mutations to basically also invalidate the cache it looks like or get data from the cache like you you the cache reads
[02:05:12]  follow the same pattern this is this is really cool actually yeah so tan stack query like if you use it well um you're also going to use like an array of string
[02:05:23]  keys yeah so you get kind of a similar experience but without the autocomplete although they they also have like the query key factory and all that stuff but um yeah like having
[02:05:33]  this object syntax just lets you go really fast because you don't need to think about where your things are yeah no that's that's awesome yeah because yeah i mean i
[02:05:42] 've used that i've played with the keys this actually just like you find it naturally and in a lot of sense tan stack router is is like this um so this is kind
[02:05:52]  of it's interesting to see like you need multiple pieces to put together to actually be able to accomplish this each piece by itself has to be generic enough to handle different scenarios but
[02:06:02]  once you put a couple pieces together you have the ability to kind of you know like utilize both parts i i'm starting to understand better why they chose to build this in
[02:06:13]  this this this is this is this is the reason like i'm seeing it right now yeah and this is the big difference between tier pc version 9 and version 10 that basically before
[02:06:22]  they were using um syntax that's a bit closer to what tan stack does right but you still had autocomplete on strings but it was strings yeah and now this switch to
[02:06:33]  the object syntax um i did know how i felt about it at first because it makes it like more different from what tense deck does and so there's like a drift in
[02:06:41]  how the two apis work but i think once you start using it like it becomes very clear that it was worth it yeah no this is cool i've i and i have
[02:06:49]  to admit i've always like path based stuff this is my thing i i was really into i don't know if you ever saw um they've used strings but like falcore
[02:06:59]  um uh from netflix which which was like their graphql thing that was like very path based and like stuff um yeah i always thought that was really cool and actually
[02:07:08]  solid sets uh store api you know it's again using strings but the whole idea of the proxies and the paths i i actually look this is something i like
[02:07:16]  because then you're like not juggling with keys this is this is something i want to think about more i actually this is i'm glad we took a moment to look at
[02:07:23]  this because this is very much um kind of ergonomic things that that are interesting to me uh that's cool yeah okay that that tells me personally enough about mutation i'm not
[02:07:34]  sure if it tells everybody who's watching the stream enough about the mutation but i get it from here this is this is mostly like tan stack query like managing the mutation state
[02:07:44]  in the cache yeah but but but it's utilizing the path based apis uh proxy ones that that um trpc uses as a way to kind of shortcut this making into
[02:07:54]  a very um i don't know what to call it like cursor based type api where you're like tracing through these these values to kind of like string builder pattern kind of
[02:08:03]  thing in the background but again it's not actually trying to build one string i i just i i can see what's going on here and it makes sense to me so
[02:08:11]  if it if it doesn't make sense to you in the chat then you know ask a question now here's your chance uh someone in chat is asking if we have a guide
[02:08:25]  on how to add prisma and next off to an existing app um we don't like once you run the cli um it's it's kind of your app but
[02:08:33]  what i would recommend is initialize another app that has prisma and auth and like rip stuff from the new app to your existing one until it works that's also like a
[02:08:43]  really good learning experience cool yeah no that's that's awesome and i i think yeah i mean we could talk about that for a moment actually i i will because i'm
[02:08:56]  just thinking here this is about like the cra thing it's been a hot topic recently and it came up a few minutes ago but it's the same kind of thing as when
[02:09:04]  you built with cra you used to have to eject um or use some really weird apps that tried to patch it that never worked properly it's funny because i don't know
[02:09:16]  if you knew this i actually we have like solid start uses like create solid or whatever if you go back to the zero point versions like 0.0 versions i didn't even
[02:09:27]  give it a minor release you know i was talking about how i i'm like i follow semver but in the sense that i'm like in no rush i i'm i
[02:09:34]  i took a patch version like 0.0 x into the hundreds um on on our create solid thing because it was a fork of create react app that i had made in
[02:09:46]  solid and i changed some stuff but tried to keep it mostly the same but then and then what i realized really quickly was all those tools that were made to like specifically hack cra
[02:09:56]  was all like version locking like basically they never worked properly and i was like man this is just like the worst possible thing and if you're going to eject anyway way you don
[02:10:05] 't want to inject to whatever like you see those web hack and fix it's like it's nightmarish um so it's funny i never even made it like you
[02:10:14]  could if you see any solid packages out there just anyone in chat you know who's using solid and i created them urgently look at the number of zeros if it is 0.
[02:10:24] 0.x thing i have zero confidence in this thing so maybe look for a different library if it gets if it's 0.0 x like a minor release it's
[02:10:33]  probably pretty good i'm just too chicken to pull 1.0 on it um and if it's 1.0 that i i you know or in that side i back it
[02:10:41]  and i think it's like you should be using it like because i i vetted it myself probably for like way too many years so that's that's my scale but
[02:10:53]  yeah um sorry it was just an aside i was just thinking about how awkward it is to because that's the thing there's this balance once you eject it's your responsibility and
[02:11:04]  i think it's interesting that newer tools are like no no we're going to like start you ejected first but don't worry like the reason you'd have they there was
[02:11:12]  even that whole eject mech and create react app is in theory you installed the new version you got everything the new version brought with you as long as you didn't eject
[02:11:20]  you basically were always up to date with the latest and the best um but you couldn't do anything with it i mean literally couldn't do anything with it like like you want
[02:11:30]  to do something different processing css sorry you know like it's interesting to see kind of like on this side of things where it's like yeah like what what happens if you
[02:11:41]  don't choose the right pre-config or what happens when new libraries get added to the t3 stack i don't know it's something you've thought about at
[02:11:49]  all yeah it's it's a debate we've had a lot and we've played around with um code mods and stuff like that um but it's it's a really difficult
[02:11:57]  thing to build well um for for tier pc specifically satchin who's uh one of the the greatest geniuses i've ever seen built like a code mod to go from
[02:12:05]  version 9 to version 10. um but other than that we kind of settled on the like on this principle of you initialize and then it's your app so like we
[02:12:15]  we take care of um gluing all the stuff together for you but then you're fully responsible for your app and like it's it's it's a very conscious decision that
[02:12:24]  we made because i think if we went the other way like we wouldn't be doing it that well so we'd rather be good at this than like not that good at the
[02:12:34]  other thing if that makes sense yeah no i and i respect that in a lot i think that's a pragmatic choice and it's just like the reality of things like at
[02:12:44]  a certain point your app is your app and we're you're letting people get started in a really great way like a really amazing way where things are just out of the box
[02:12:55]  so simple i i said this is what i kind of wanted to see because like i i haven't looked too deeply at create jd app yet or the solid equivalent or whatever
[02:13:04]  i i just want to get it like you i want you mentioned you know that it takes a lot of effort to get um you know to get create t3 app where
[02:13:11]  it is today and you know um and this is true like these kind of finesse on the positive for people who follow in your footsteps it'll be that much easier for them
[02:13:20]  to do it but there's still a lot of like learning from this so to see this kind of where it sits and where it's mature one of the coolest things about this
[02:13:28]  that i think you mentioned earlier on is like because of the choice of technologies and stuff this is a mature solution this is not like bleeding edge i live on bleeding edge this
[02:13:37]  is not that this is like every piece is dependable every piece is ergonomic to use every piece makes sense frankly if i want us wanted to say it yeah and i i
[02:13:50]  think like we've kind of chosen what we want to be and what we don't want to be um like for example um at the conference that shall not be named like
[02:14:00]  um daniel roe gave this talk about nux and he showed like all the unjs stuff and you can add these modules and it's so awesome and like i came
[02:14:07]  home and i thought right we need this but then like i played around a bit and i thought about it like no maybe like we're good where we are and the same things
[02:14:16]  like the performance story like maybe we don't need to be like our baseline performance is always going to be marginally worse than vanilla and xjs right because that's what
[02:14:28]  we use which is like it's fairly heavy right um but i i think for many of the the things that we're being used for like that's very okay like on the
[02:14:40]  one hand like with real apps you know it's like long session um heavily interactive like i don't know theo's app ping like you're sending 1080p video back so
[02:14:48]  like what's 200 kilobytes of javascript or netflix is using tier pc for for dashboards um like you know they're being used by 10 people like again
[02:14:57]  like bundle size is not the biggest consideration and then if you look at it from the education angle like we're getting people from like having like done the react and express courses on
[02:15:07]  free code camp to like shipping an app and like not getting demotivated because they can't get their off set up and again in that case like yeah kent
[02:15:16]  had this talk where he said like dx is really good now so we can uh so we can focus on ux again and it's like dx is really good if you can
[02:15:27] 't see dodds and like you're a genius and you know how all of this stuff works and you can build anything dx can still get better for a lot of people yeah
[02:15:35]  and like that's what we're interested in pushing yeah no and it does it like that's the thing these things never actually stop to be fair like like they it's
[02:15:44]  so it's interesting because you you see this cycle but the the thing is every time the the ux thing pushes forward for it to actually push forward the the i always find
[02:15:58]  this kind of interesting from my perspective the innovation for when ux um moves forward is actually when you've got it to an acceptable level of dx because before you get it
[02:16:08]  to an acceptable level of developer experience like you can always go vanilla js it like you can build anything like like like like and it can be way faster it's all just j
[02:16:18] avascript man right the the unlock is always an actual dx thing it's when you go i think i've got this to a place where this is actually usable like like that
[02:16:28] 's when that's when it happens this is why when you talk about stuff you know with on the technology it's kind of like when new technology comes out and like like
[02:16:36]  you know because it usually starts at a place where like people like watch you know star trek the next generation see i'm really going to date myself here and they saw those like
[02:16:45]  picard or whatever walking around with his like touch screen tablet and they're like man i need one of those i need a touch screen tablet and then what ends up happening is
[02:16:56]  you know a decade later you know the newton or microsoft or someone ship something and they're like look we kind of got the technology like we think it's good
[02:17:04]  enough like we have a like a pen you know and you can tap on it and like nobody cares about it right yeah and that's the thing it's like it wasn't
[02:17:11]  quite where it needed to be to fulfill the vision but like if you think about it like from a mechanical standpoint they like maybe it was close enough like you could you could see
[02:17:21]  why they take the gamble because you like are you too early or too late you kind of go like i think we're kind of there but yeah it took the innovation of
[02:17:29]  capacitive touch screens where the like the usage experience um you know the stuff that came out of apple around 2005 2006 kind of time period for it to actually get to where it
[02:17:39]  needed to be so what i'm getting at is like almost all technology and even stuff on the innovation the front end is kind of like that like we will see the indicators
[02:17:49]  early on of the capability what will happen later we will have a really ugly way of doing it but it doesn't really like become interesting until we can figure out how to make
[02:17:59]  it like actually consumable um and sometimes that takes years that's why like if you're kind of aware of that side of things very little ends up surprising you funny enough anyway
[02:18:11]  that's a little yeah i don't think we're going to be around forever like the the best thing that could happen is that like a couple years from now you know
[02:18:19]  like the the ecosystem in i don't know solid or in some other framework that really improves performance like grows and that like the the things we do here and like i think create
[02:18:31]  jd app is already doing this at some point um but yeah that like the ecosystem gets to the point where like it doesn't make sense to use create t3 up anymore
[02:18:39]  because you can get the exact same dx but like higher performance yeah yeah so talking about the future um and i'm giving the ps people in the chat we're gonna i
[02:18:50] 'm giving this is your last chance to start getting more questions in for chris i'm gonna talk a bit here and then we'll do the last little question thing here um
[02:18:57]  uh have you guys like it's crazy thing about this is being so community driven being so like kind of um uh you know set up in such a way that um like
[02:19:09]  almost decentralized in a sense like there's like core group you know that that does this and have you guys thought about like road maps or the future like like has has this conversation
[02:19:22]  come in because like you kind of like you start building this thing and you're just like wow you know people are using this and then suddenly like a certain point you kind
[02:19:29]  of succeed and i feel this project has actually succeeded um and you know especially considering the short period of time um have have those conversations happening you have have you had thoughts yeah we
[02:19:40]  we talk about it a bit especially like i think we're fairly tied to next js like that's just how it is and i think like if somebody wants to make the same
[02:19:49]  thing on a different framework and they already have then like that's going to be the way forward there and you know they'll eat us instead of like us transitioning to doing
[02:19:58]  what they're doing but um yeah like we we we take it like as it comes because like our goal is to be a good way to create like a sound app with a
[02:20:10]  good dx now and so for example with like the the next js app directory like we're playing with stuff but we're only going to switch to it when we think that
[02:20:22]  like this is the correct thing to recommend at this exact moment and the same with everything else like right which means it actually might might actually be a little while to be fair um
[02:20:33]  because yeah exactly there's actually a lot to figure out on that side we haven't even seen the stuff and let alone vet it really right like yeah like the full story
[02:20:44]  isn't even there yet and the parts of the story that are there like i i think it's really awesome and i hope it succeeds but it's not what i would recommend
[02:20:52]  most people to build an app with today and so like that's the perspective that we look at it from like we're all i think like framework nerds and we we like
[02:21:00]  playing with the newest stuff but what would you recommend to somebody who's building an app today i think like that's that's the question we think about that makes a lot
[02:21:10]  of sense to me um uh what do we got here you know just looking and see if we have a couple questions here before metaframers everyone had to basically roll their
[02:21:18]  own which is no much work adding nice things yeah that makes sense yeah i actually when i saw this thing about accessibility what i was i was like thinking i was and someone was
[02:21:25]  asking about like where do you guys talk about what if there's like other possible add-ons or features because you already mentioned like switching the meta framework because someone else was
[02:21:37]  asking you know plans to make it swap is kind of outside of the range of what you like and i i agree with this full-heartedly because honestly so people don't
[02:21:46]  realize how different these things are and how much extra cost you take to being agnostic it can be worth it in some cases if that's your plan but that's not
[02:21:54]  what the plan here is this is not this is this is like theo's diagram for how to choose a framework like it's like there's a couple decisions directed um this
[02:22:04]  is not like like we like support like it would be compromising to support everything in my opinion but yeah we're never going to go framework agnostic like if next dies
[02:22:15]  then we'll die with it and that's okay but but in terms of features of the project um right in terms of features we like we think about it we discuss it
[02:22:23]  but at the same time like we have auth we have a database we have an api um we have css like we we kind of have like the the core package so
[02:22:33]  um any additional modular thing we add like increases the cost of maintaining it more than linear i would say like it becomes exponential at some point yeah because you need to consider like
[02:22:45]  every combination of everything right yeah yeah which is an interesting challenge because i remember when theo had the the the the sorry the guy from redwood on his stream i i have to
[02:22:57]  say i really enjoyed him kind of grilling him a little bit because to be fair um i'm very much more on the like open-ended side so like making those decisions for
[02:23:07]  me sat and he's like well how do you choose what goes in the framework and he's like he's like he's like do you have a do you have a
[02:23:13]  metric do you have like a thing and like you could tell like it wasn't the most comfortable line of questioning but something that did occur to me while i was watching that was
[02:23:20]  at a certain point any of these technology choices um will um deprecate so to speak yeah absolutely so like there is there is an interesting question that if prisma stops being
[02:23:33]  the de facto way um i like like you know what i mean like where does that kind of does that fit into thinking or we're just not worried about that yeah we
[02:23:44]  we've only been around for like eight months now so i think like i mean javascript land was fast but not that fast um i i could see us switching something out
[02:23:53]  at some point uh that that's my take on it um yeah we'll have like we we still need to discuss this a bit like is the t3 stack these exact
[02:24:03]  libraries or is the t3 stack what theo or the the create3 app team or whoever um like wants to recommend for starting an app right like yeah for now those overlap but
[02:24:16]  it it might not forever and um yeah it's still in the future and i i think i don't fully know that yet yeah no that's perfectly fair and definitely asking
[02:24:26]  the hard question there just because i it is it's the kind of thing that i that i consider about but yeah let's see do we have any more uh questions to chat
[02:24:34]  before we let chris go to bed it's getting on close to midnight in his time i'm making another thing i'm making the framework selectable i think people don't
[02:24:43]  understand how different um the different frameworks are like the the ux maybe of solid react is fairly similar but they're very different yeah yeah yeah yeah definitely yeah jdf is
[02:24:55]  great yes it is um what's the process to add new features to t3 um come into our discord channel or or open an issue um like none of us have ever met
[02:25:06]  each other and like new people are joining the project all the time and actually to you guys credit you're talking about being a new project but you could kind of already weathered
[02:25:15]  the migration from trpc 9 to trpc 10 if you think about it so like there there's there's some proof on the approach of like because that to
[02:25:24]  be fair that wasn't a new package but that change from my understanding was almost as big as as if it had been a new package yeah i guess that's kind of true
[02:25:32]  and um it it did make it kind of like it left people who initialized with uh trpc version 9 in kind of rough spot um it was mitigated a lot
[02:25:40]  by such an amazing code mod but even then like um it really comes back to that thing like you initialize and then it's your app and we're i think we
[02:25:49] 're never gonna go away from that because um like it just becomes so much harder to manage the project at this point and to make it a good experience for people yep uh do
[02:26:00]  we have a service worker offline story plan for t3 no and the reason is that what this is is kind of the stuff that we use in every app or in almost
[02:26:10]  every app um trpc has um an awesome service worker story and you can check that out um but i i think like we want to keep it fairly general all the time
[02:26:20]  um that's fair let's see I'll scroll back to the bottom here yeah if you want to use the next.js app directory use the next.js app directory
[02:26:37]  we're not going to be offering that for a while yeah and yeah we did it kind of already answer that question to be fair I know it's a funny thing if we
[02:26:47]  keep the chat going long enough they're just going to start answering asking the same questions again no that's good I thank you all for you know the work you guys been
[02:26:57]  doing on T3 I have Chris here today but I also want to you know give shout out to Nexel Julius and what whoever else has been involved in the project I
[02:27:06]  think it's amazing thank you Chris for joining me today I've learned a lot I've got a few more things I get to look into possibly in the future which always exc
[02:27:15] ites me um do you have any last shout outs or whatever you want to throw out there um yeah just shout outs to um the entire T3 team um shout outs to
[02:27:24]  everybody who's working on all the libraries that we use um so Balash from next auth the whole Prisma team um like everybody who works on next um everybody who works
[02:27:35]  on tier pc and yeah I think that's kind of all I have shout outs to to all the contributors and to everybody who's a part of it awesome awesome yeah this is
[02:27:46]  great stuff um we're going to continue on the stream after you let Chris go but um thank you for joining us Chris um until next time hopefully it won't be too
[02:27:54]  long yeah thanks for having me yeah catch you later all right that was awesome eh I I there was some concern that like you know we're not digging into the technical guts you
[02:28:05]  know kind of a little different from the stream but I think I think I think this is a whole other aspect you have to consider when you know taking these kind of projects to
[02:28:13]  the to the next level what it actually looks like what the where these pieces fit like how to actually build on it and yeah I didn't talk about tailwind at all
[02:28:24]  I'm sorry it's so funny like if you go you go on twitter and it's like you know one week it's tailwind next week it's typescript return types
[02:28:32]  I honestly don't care about this but maybe that's because I'm too far removed from like the the issues that matter you know but um you know I can I can see
[02:28:41]  I can a Canadian yes yeah I am Canadian I'm from Vancouver BC yeah it still comes out a little bit it's so funny there's like a scale of Canadian Canadian
[02:28:53] ism like East Coast is definitely more Canadian like in that sense uh West Coast not as not as strong but you know it it's still it's still it's still there and
[02:29:03]  even generationally my like my parents are definitely like more a so to speak uh yeah tailwind's just not special right tailwind is styling yeah pretty much and I think
[02:29:19]  I think the key part about this and I think you guys can all see this and why I want to focus on it is community driven like completely which is you think is pretty
[02:29:26]  common in open source but the funny thing is meta frameworks have kind of become all about like companies getting built around them and stuff like that's the story right it's the
[02:29:35]  money in it and like how how do you how do you how do you you know profit off it because it's funny the core libraries usually do start with an individual they start
[02:29:42]  with someone like myself or Greg you know uh creator of leptos you know but then when you start building out like bigger pieces it becomes a lot harder for one person and
[02:29:52]  if the community gets a certain critical mass you can do that and kind of take that on stuff like with spell kit a certain degree what we're doing a solid start but like
[02:29:59]  generally speaking where you see a lot of this interest comes in again practical application companies wanting to build something on it and historically it's there's been you know vcs g
[02:30:09] atsby you know like oh you know next like this kind of thing backing the meta framework side because of the type of effort it is and it's nice I understand next is
[02:30:19]  really the reason why this is all possible but it's next to see nice to see community driven thing and when we talk about education we talked all about like the the ve
[02:30:28] et uh you know use that as cra controversy last week like when you kind of put this in the scheme of things like this is kind of this is kind of a really nice
[02:30:40]  story about you know how to get started I think in general the higher up the stack you go the more opinionated you go the harder it is to weather change I think I
[02:30:50]  like that what we've seen here is being able to take a more piecewise approach things are swappable this is smart you should build your apps like this and this
[02:30:59]  just sets you up that way ultimately for the future of the project it's a more interesting question of what whether um that kind of dynamicism can keep up or if we're
[02:31:11]  really starting to see the beginning of a new phenomenon where you have these starter templates being more involved being more meta meta framework as I called it and we see create t3
[02:31:22]  app create jd app create s whatever you know you know s4 app I I honestly don't know like but it's an interesting idea because all the layers are important um
[02:31:36]  especially because if you're getting early on and having those decisions made for you it's probably pretty critical uh did you miss anything good I mean I learned about trpc
[02:31:50]  and uh I learned about uh the understand the a bit about the bridge there but mostly I learned we learned about a story about education and being pragmatic so I I I think I
[02:32:03]  think it's it was really great chat with chris I I enjoyed that thoroughly especially earlier a big tech company scoreboard tech was critical to make it yeah yeah I mean
[02:32:15]  that's that's the other thing too right like how much sway do the big companies have in terms of standardization and and whatnot we we we live in a kind of world
[02:32:24]  where we kind of take that for granted you know there are real people and businesses and livelihoods and all this kind of tied in it's kind of nice like what has been
[02:32:32]  built it's not always perfect it can be messy at times but um yeah yes this is a green screen but this is literally my office though like if you took down the
[02:32:48]  green screen it'd be like the same thing it's out of date though like you see my grogu in the background here um I I needed I've got a few
[02:32:57]  more lego sets that I could add uh great s3 app yeah not to be confused with the amazon service you guys are just baiting him now all right no I
[02:33:21]  last stream I already showed you my dungeon and dragons background um but yeah I'd have to like move the green screen and stuff I'm not gonna do that but I mean why
[02:33:30]  you want you guys want to see what it looks like when it's green sure I can I can do that I think I can do that actually don't no I
[02:33:44]  actually don't actually have it set up as a preset I can probably just hide the room it's me me and OBS no see now it's black that's no fun
[02:33:53]  it's because I it's because I have the filter on watch me OBS it see this is more fun what why don't we just hang out in here you guys
[02:34:04]  want to hang out in here we should just hang out in my my brick oven I don't know I use this when I when I do D&D but yeah I
[02:34:27]  don't this week in my dungeon thank you yeah I mean I it's I I told the story actually uh last stream of the stream before I was I was actually um
[02:34:45]  I I feel how I figure what the terminology is but he has special cameras that do that effect where like the foreground is really clean and you can see and then the background slightly
[02:34:56]  blurs and I was just like I was just like okay I I don't know how to do that I'm not gonna like buy something I'm just gonna use my so
[02:35:03]  I literally took a photo that I tried to get at a decent acid ratio you're not seeing it as nicely right now because what's happened is I got rid of my old
[02:35:11]  chair which sucks and my new chair hasn't arrived yet so I'm like using like a bad chair right now and I I kind of stepped to a decent aspect ratio to
[02:35:19]  take the photo and then or not aspect ratio like point of view perspective and then I ran it through like a cheap online blur filter um and then made that my background yeah yeah
[02:35:31]  aperture yeah yeah that's the term I was looking for yeah it's just a nice lens there you go yeah yeah I mean whatever it's not as good people could tell
[02:35:45]  when I'm like full screen right now obviously like this is clearly rippling the edge of the microphone or whatever yeah but I told you yeah in the sense that I said
[02:35:57]  I was lazy that I guess that's not being lazy but you know whatever this this this is quality streaming secrets here yes yeah this is actually my office to be fair like
[02:36:14]  this is like that that's my grogu if you look at my background oh man yeah so and you can see some router stuff in the background you know I this is
[02:36:27]  my network attached storage device and nas and back there as well yeah yeah all right um enough fun with that I actually before we do this week in javascript actually I want
[02:36:39]  to I want to I want to look at next js some more and the app directory people seem to be interested in the app directory I there's something I'm curious about with
[02:36:46]  server components and I want to understand it better because I've been theorizing I've been telling everyone how server components work but I've never actually confirmed it I'm just
[02:36:53]  like if I was designing this this is what I would do that's like a terrible way to do things right like be like be like yeah I'm gonna assume it works like
[02:37:02]  this and then pretend like it's fact so yeah yeah I'm I'm I'm let's let's actually look at something real here and prove that I'm not a liar
[02:37:13]  or if I am a liar I biggest thing I have to remember I got to open my terminal here which is called vs code um maybe I'll do it in this one
[02:37:22]  is uh let's go down okay so if I go up enough I'm probably create next app at latest ts experimental app done there we go um next app next test whatever okay
[02:37:42]  would you like to use eslint no would you like to use the source directory no um sure okay wow it's such a contrast compared to just using create t3
[02:37:58]  app just now don't you think anyways that's not all right yeah yeah exactly I'm supposed to like get like a nice like floating solid logo thing that looks like I
[02:38:12] 'm like at a press conference where like you know you've got like this wall background and like it was made just for solid I think David actually made something but I was like
[02:38:22]  I just like couldn't stomach it I was like I want it to look ghetto instead sorry I don't even like using the term ghetto I'm sorry I apologize I don
[02:38:32] 't know why I said that um are server quotes a core part of react js or just next js they're actually react core and this distinction is becoming less and less obvious to
[02:38:47]  people because like you need some pieces to make it work which means you basically need next js so this line of what's react and what's next js is becoming harder and
[02:39:01]  harder to to to to talk about and actually oh man you did I I wanted to look this up before we we went on this stream today but I let me see let me
[02:39:13]  see let me see I don't think I bookmarked it which is sad did I book yo this is this is the tweet that supports this here we go I was
[02:39:22]  we'll talk about it more a little later but this might be subjective but the one thing I like about next 13 after after is how it gets rid of a whole bunch of
[02:39:28]  next isms yeah it's still raw and it's still metaphorically io7 phase but it feels refreshing like who's who's who's who's supplanting who um
[02:39:38]  but dan abramoff is basically saying that the app directory makes next less next and more react i don't know i mean this is a topic to itself we can we can
[02:39:50]  talk about that later but i just isn't that perfect yeah and there's so much to dig in on this and we'll when we when we talk about the uh the
[02:40:07]  this week in javascript we're gonna go there but let's let's actually make something here for a second that's not this okay okay so where we are um next
[02:40:15]  test app so let's let's look at our next 13 app um i'm gonna open it in here why not so what are we pages development next test beautiful we we
[02:40:29]  made hacker news in rscs uh a few streams ago so we are no we are not unfamiliar with the app directory but i i got some questions here about server components because
[02:40:41]  i don't want to be just full of you know full of it basically and pretending like i know how this stuff works when i don't and the thing that i hit
[02:40:50]  i hit some really awkward stuff working on solid solution and i realized that there is a difference like i guess the question a lot of people might have is what's the difference between
[02:41:03]  islands and server components in the first place oh yeah catch catch you later greg thanks for joining today does solid have a equivalent of rsc component level data fetching that
[02:41:18]  is kind of production ready um no no i i it's on an experimental branch we do have something we have other than react i think we're the only ones who've actually
[02:41:29]  gone this direction yet we actually have but i would say i would say the react team is still their their their version's not ready ours is even less ready so um people
[02:41:43]  are going to use it because like play around with it because it's really cool like the difference of the solid react version is like you notice the difference because it's like suddenly
[02:41:53]  your apps like as small as an astro app and works like a single page app it's just like but i wouldn't say it's any more ready than the react
[02:42:01]  version is and this is why i want to look at this today because i i started going on this path where i'm just like okay yeah this is how i'm going to
[02:42:07]  solve it and then i'm like wait wait what what are they doing in react we should know right we should figure this out so let's let's figure out what they
[02:42:15] 're doing in react question would you say that nesting data sharing is the main difference to islands and rc's um no actually and and this this this is where i wanted
[02:42:30]  to get here the like the nesting um well i guess the nesting is only yeah okay fine i'll give you something on the nesting because yes you you do need
[02:42:39]  to you can only really nest when you're doing partial partial page swaps out and the data sharing is actually almost the funny thing the data sharing part is actually almost identical
[02:42:50]  between islands and not like like it doesn't have to work the way like like solid's island solution actually does context sharing so like technically speaking that part is not like obviously ast
[02:43:07] ro lets you put any island in so like that makes it tricky because different frameworks aren't going to be compatible but the data sharing part doesn't actually have to be different
[02:43:14]  i think that part's actually the same i think what's actually different is that islands are only really concerned with the first render and in a sense react server components probably work that
[02:43:26]  way the first render but actually let's find out this is this is this is actually where something i want to check out you would think this right there's a different end
[02:43:35]  of the spectrum don't really compete i think asking the rest of the site is absolutely but the funny thing is next is encrouching with this like you can tell with
[02:43:45]  the tweets and their egg kind of aggression toward from versell towards astro they astro's like we're fine we're over here but next is like no we want to
[02:43:54]  own this too and i think that's like the difference here astro it's like like clearly like we have our zone but server components is like potentially a solution that covers
[02:44:06]  the astro use case as well so that's why they're interested so okay let me think here what do i want to show i want to figure out how context works um
[02:44:17]  really is the first thing because i want to understand something can maybe should i escaladraw first so we can understand what what i'm talking about let's escaladraw
[02:44:26]  for a second okay move over here because what i'm wondering is this okay i've got an app right and i've got a component tree so somewhere up here i've got
[02:44:40]  so let's pretend my app has let's uh bold line it square corner it okay like let's pretend i have a nested layout okay so a section one and for
[02:44:53]  my purposes i'm only going to add a section two okay nested layout section two right and i mean the nesting probably isn't even that important for this visualization but what
[02:45:06]  i'm getting at is i want to put something like here like i'm going to put our counter provider it's going to be like a counter of course i'm going
[02:45:12]  to do the counter i'm going to put it here and then i have in here counter consumer and i know no one look it's fine let's just use counter okay you
[02:45:26]  guys know what i mean now when i initially render the page on the server this is gonna this is gonna work fine right because you're gonna you're gonna render the counter
[02:45:40]  provider and let's assume that there's server components in between this so this is a client component this is inside a client component so let you know my counter client component okay that
[02:45:53]  has a use counter and then i render the page so it's all fine we we initialize the counters provider let's do something like value equals one and then i put
[02:46:05]  my counter on the page and then i click the counter like a dozen times okay i click it like uh 50 times so now this value is 50 okay up here so we've
[02:46:22]  updated this this is now 50 okay now i navigate and i draw a counter on a new page but if i server rendered this counter how does it know the value of 50
[02:46:40]  here do you do you understand the problem like if even if i server rendered the whole freaking page again and just serve this back i'm still going to get a value of
[02:46:59]  one on my counter i'm not going to get a value i'm hoping i'm making this clear like this state only exists in the browser and i think this is like
[02:47:19]  if you're writing an island or an mpa like you don't care you're just going to rerun that page there's no expectation that this persists persists
[02:47:26]  but if you're doing something with server components there is an expectation that this persists so how do we do this because despite popular belief react server components are stateless um generally
[02:47:46]  speaking like they're not like they're not like a like a live view or something so it's like there's no there's no knowledge we do another request this is
[02:47:58]  value one again like there's there's i there's they're not i don't think they're going to serialize all this stuff down right so let's build it okay
[02:48:11]  let's build it uh let's make a i don't know if this is proper edit kit but i'm going to make a components folder and let's build it okay
[02:48:22]  new file um counter context let's call it dot tsx i'm going to import create context not from what the hell's vm from react and when const uh context
[02:48:47]  or i don't know it doesn't really matter it's counter sorry counter terrible counter context equals create context and we're gonna make this an object that has count zero or
[02:49:05]  did i make it one in my example it doesn't matter and then actually for the default we'll make it zero and then we'll just put like an increment here that we
[02:49:14] 'll have to we'll have to do and then what we're going to do is we're going to export function and i'm sorry about my type script i don't
[02:49:25]  care enough about it to figure this out um let's make this counter context and okay it's the same thing uh was a counter provider provider okay you have some props that's
[02:49:45]  lovely and we return counter context dot provider value equals something that we'll do in a minute and then we pass props children to it whatever format document okay and then we probably
[02:50:07]  need to have count set count equals use state and we'll start that one at one for my example and then what are we going to do here we're going to just going
[02:50:23]  inline it because i'm lazy we're going to make count count like don't use contacts this way and react it's funny in solid if you use context this way you
[02:50:30] 'll be like rewarded for it because it'll be like fine-grained if you're like animating something react you can do a lot of really unnecessary work if you do
[02:50:39]  if you use context this way this is not not what you want to be doing and then we can go what what was it set count equals count plus one okay something like
[02:50:52]  this counter provider hopefully i'm not completely off base okay and then what else do we need uh i'm going to do i'm just lazy so let's go what export function
[02:51:07]  use use counter and then we're going to return use context um counter context okay yay okay simple provider whatever thing typescript's complaining at me we don't care and then
[02:51:26]  i'm going to make our our counter component um okay oh you're right you're right you're right right before i forget we're missing something here thank you use client
[02:51:40]  we want to make sure we do that on both of these to mark that it is a client component in our new world okay and this one i'm going to export default
[02:51:54]  um function uh counter and it's just going to do something like um const um actually count increment equals what is it um use counter and then what do we want fragment or
[02:52:24]  something that where we show um the count i'm actually making a div for now just because it removes some other ambiguity that i don't like dealing with sometimes um increment and
[02:52:44]  then on click equals increment okay i think we're good right we have to repeat after me yes but this will hopefully help us understand something so let's first get this working
[02:53:05]  and then we'll figure out what to do here so if we go into our not pages sorry app directory on our page which is our specific page actually okay layout is where our
[02:53:14]  app starts injects body children page is a page with a bunch of crap in it that i don't care about let's let's just remove all of this all right
[02:53:33]  and then let's put a counter component oh no i guess yeah let's go counter provider do i want to do it here actually i want to do it in separate files so
[02:53:47]  i'm going to put the counter component here what did i okay what okay good all of this goes away okay that's funny why did i call a counter component i'm
[02:54:02]  like being really like okay okay then okay return counter and then i'm going to put the provider because i want i want there to be do i want there to be a
[02:54:22]  gap like it doesn't really matter um let's go back up to our layout and assume that the counter provider goes here counter provider there isn't really anything in between these
[02:54:39]  two components admittedly uh except then yeah i don't maybe the way the router works actually this is actually wrapping yeah it doesn't really matter the outlet okay so uh am i
[02:54:55]  installed yet okay okay how do we start a project is it dev yeah okay no dev okay so yeah all right so this let's make sure this all looks right okay let
[02:55:24] 's go back to our 3000 and success i mean this does not look nice but my the counter is updating maybe maybe i can do everyone a favor and like make it a
[02:55:38]  little bit larger there's some interesting styling going on in this page um let's let's h1 it um but we have working context in this in a react server component
[02:55:53]  world i think let's double check that but um you is there is there some style global css i don't know what you're doing but it's okay thank you okay
[02:56:06]  bang okay we we have a working counter and can i prove that this is server components that's an interesting thing um well i i mean we can look at the output of
[02:56:22]  when the page loads what the response looks like like what does this look like like we see our server rendered stuff you know what we're gonna we're gonna play the console
[02:56:33]  log game so let's go in here and say let's console log obviously in caps this shout provider counter and then we need something probably on the page itself let's call
[02:57:05]  it home because it's called home you see with hmr home's the only one that that that did it so okay let's let's start this over again start our
[02:57:17]  dev server reload the page okay home counter what did i not save the provider oh i didn't okay there we go you know the first thing i'm actually noticing i'm
[02:57:47]  gonna restart this to to check this out but this is like such a testimony to how react renders home provider counter does that order make sense let's think about that home is
[02:57:57]  rendered first then the provider is rendered then the counter is rendered i guess i guess that makes sense sort of but let's add layout here because isn't the provider above home
[02:58:14]  okay maybe i'm console.log root okay okay reload okay this is like that jsx stuff where things start kind of going backwards on you this is the that yeah this
[02:58:45]  is this is what i was talking about um in the thing and yeah layout and home could be rendered in parallel yes they can be um so this yeah that that is true too
[02:58:59]  so i don't know which which one is this but but yeah let's let's let's let's look at that okay i can be a little bit bigger here okay
[02:59:14]  so that's cool and then in the console i don't know what that is i don't know what that is oh it's hot reload complaining at me i see provider
[02:59:25]  provider provider counter counter like we expect because react does everything twice see again i might i might oh do you know what this is i might oh do you know what this is
[02:59:43]  i've probably got like an extension running or something let's let's make an incognito window and do this extensions ruin everything when it comes to hydration everything okay okay
[02:59:58]  let's see if that changes anything all right beautiful there we go provider provider counter counter okay strict mode and react logging everything twice i click something provider provider counter counter this is
[03:00:15]  this is this is this is a basically everything's re-rendering in our app every time we click it this is react don't worry about it and on our server
[03:00:26]  um obviously uh let's let's let's start with this again but on our server let's do it refresh home root provider counter seems pretty consistent funnily enough i think
[03:00:43]  it is just the jsx out of ordering i don't know if they can render in parallel i don't think they can render in parallel as easily on initial render like how
[03:00:50]  would you get yeah think about it how would you get context we saw that they draw the right context you i think this actually confirms that they can't be rendering in parallel
[03:01:01]  initially because if the layout has the provider yeah i mean i mean there's the out of order from the fact that way the jsx gets yeah man this is this is interesting
[03:01:16]  root okay yeah yeah sorry i i'm just i'm just like thinking out loud here um but i i my suspicion is that the parallelization wouldn't work in a in
[03:01:37]  a situation like this because you need the provider from the from the above to get in but my what the reason i restarted was we see home root provider counter we see provider
[03:01:48]  provider counter counter if i increment it this will just go up the page like we expect this doesn't render again so this is all client side state handling so that makes sense
[03:01:56]  to me so how do we get the page to reload partially because that's what we want to test here well the thing is the reason that yeah i think for server components it
[03:02:10]  can render in parallel yes but follow me here it's rendering the client components on the server here so there is that connectivity between uh context and provider so like on the initial
[03:02:25]  page i don't think i don't think you get the parallelize like isn't it because the entry point of the route but the layout is above the entry point for
[03:02:41]  the route i think i know it's written this way but if you think about the provider is above the page like this is one of those funny things you know when we
[03:02:50]  talk about file system routing and these conventions of using like layout head and stuff technically speaking from like a hierarchical standpoint the layout is outside of the thing it's like like when
[03:03:00]  you do nested routing the layout is at the parent scope like not at the nested scope so while co-locating this makes you think oh i have a layout for
[03:03:10]  my page the reality is that the layout is actually the parent it's actually above it i have my own opinions about file system routing and why i i like different reasons i
[03:03:20]  don't like this but like mechanically if you're gonna like use react router and construct this by hand the layout is actually the parent um so to speak this kind of like
[03:03:30]  co-located approach kind of masks that i think it makes it easier for people to think but it's not actually the reality of how it actually sits um so like
[03:03:45]  the thing is someone's asking you can i like toggle on and off it's you can't because a server component can't have state so like this counter uh like it
[03:04:01]  can't read from context and like this counter like use state can't exist so you can't just make us a client component a server component yeah i don't actually have
[03:04:22]  the react dev tools but i like it's funny because on this what on this on the client it's very clear that provider runs before uh server or like provider runs before encounter
[03:04:41]  my theory is that we're kind of both right i think what's actually happening here oh man this is interesting because part part of it must be that they treat the client
[03:04:49]  components almost like a separate render or something i wonder if something really complicated is happening here because like maybe they like they maybe they render the client components in the server trees separately huh
[03:04:59]  okay let's let's let's move on for a second and because what i want to do though is this we need to see a page refresh that keeps a six around um
[03:05:12]  i'm trying to think uh next is there a way like next is there like a reload thing because i might got wait a query parameter but think about it think about if
[03:05:23]  we need to reload the page i was like trying to think if like next would have a reload or something oh what oh i'm in incognito i'm like what's
[03:05:30]  that terrible not okay next reload router something next router reload current url user i i want to bet that this isn't for this doesn't seem right no you know what
[03:05:47]  i'm not gonna take any chances we're gonna use an anchor tag here we'll just put it somewhere maybe on our page here we're not the counter maybe on our page
[03:05:57]  we're going to we're going to we're going to redirect slightly because i i think i think that what is it link is how we do it in next link and
[03:06:14]  then it's going to be href let's because i'm pretty sure i mean we'll double check this but i'm pretty sure if i do this and go like
[03:06:27]  that next is gonna be like that's the same url like what are you doing you're already on this page okay okay reload the page kind of provider product printer reload
[03:06:51]  yeah next is doing nothing because yeah it only writers at once okay so let's add like a query parameter be like break cache or whatever okay now let's see if this does
[03:07:04]  what we want it to do this is probably really confusing question for a lot of people i mean it maybe it's more like use isomorphic right like it's kind
[03:07:21]  of like an island in astro when you make an island the island renders on the server and then hydrates in the client this is saying like ship this code to the
[03:07:30]  client we don't need the rest of it right so it isn't really just a client component in this case it's kind of like an isomorphic it's use is
[03:07:38] omorphic you have server components and isomorphic components if i'm understanding this but that doesn't explain how we solve context so let's keep on exploring here right yeah
[03:07:49]  okay makes sense to me okay so okay let's reload the page primary counter counter home home counter counter okay if we go in the network and we look at all we see
[03:08:09]  that there's been no request to the server either no xhr or anything and then let's try our reload oh the hovering they have that auto hovering there's our fetch
[03:08:22]  beautiful okay sends some some uninformative stuff um hmm but nothing changed here okay interesting what happens if i click on it oh interesting the preload didn't do anything like it
[03:08:45]  didn't actually preload it when i actually clicked on it it actually returned some more interesting stuff and we see home again okay okay okay okay okay okay okay let's let
[03:09:00] 's make sure this actually works but let's okay let's try this again load the page no xhr this is fine then let's increment some stuff okay this sorry i
[03:09:16]  i don't think this does anything though it didn't change anything okay let's increment it a bunch of times and then when we reload okay did it reload oh i was already
[03:09:27]  on break cache i ruined everything sorry okay let's try this one more time okay gotta get the setup right this is it's like when you when you're playing a speed run
[03:09:37]  and you gotta like bump yourself against the wall like 10 times in order to get to the right place okay we're getting the setup okay we're getting the setup okay okay
[03:09:44]  there there good write url console good increment server still the same oh i i have to sorry i gotta start again reload the page sorry i missed the first step reload the page
[03:10:07]  counter provider home provider okay nothing else on the server purely client-side update network tab no fetch has happened yet hit the reload state preserved did the fetch client console interesting
[03:10:31]  there's like two more counters here but the pro the so it re-rendered the counter when i hit reload here on the client on the server it rendered home that's
[03:10:42]  our answer isn't it huh so i wonder if we can inspect the network response here what we're getting here i mean this is kind of hard to see app client counter
[03:11:02]  counter tsx name it does it is aware of this component it's telling us about it in its chunks um and it's sending the sending some stuff along here in the
[03:11:24]  viewport generated by create next app what is all that stuff i'm not sure what that is some children okay sorry not to ruin it yeah preview tabs you'd think would be
[03:11:35]  useful here but i i see the pre there's no preview for this this is just this is just some custom format that they're using for communicating over the wire what okay
[03:11:46]  what i'm getting at here is this is what happens okay i think i think we answered our question though let's let's let let me go back to my drawing index
[03:11:57]  calendar go back to the beginning first pass full thing gets run on the server i don't know about the weird ordering thing but it clearly renders both pieces finds the context in
[03:12:13]  the child's scope does the thing we see our one then on the client we come in and we we we hit away at our stuff and this value goes up to where we
[03:12:24]  need it to nothing happens on the server then we click our anchor tag down here to reload okay here's our anchor it ends up because this layout is fixed they know it
[03:12:38]  never changes it it it changes this top level route so now now we're we're server rendering again and uh let me get green okay and then the second time when it
[03:12:56]  server renders it it actually um it's like not gonna work for me probably like i'm not gonna get negative space here yeah yeah this visualization is not working for me at
[03:13:15]  all sorry about that um it's fine i'm going to remove this background transparent what i was trying to get at is when it renders it again on the server it
[03:13:27]  doesn't render this the first time it did the first time it rendered the whole thing but the second time and this is what i would this is what i theorized would happen
[03:13:36]  i just wasn't 100 sure it doesn't render it again and that's good because then the server doesn't get stuck with the wrong value it just goes oh this is
[03:13:44]  the same component as last time and then it just it just handles itself technically on the client it renders again so i guess like um it recognizes that in each you know the
[03:13:55]  server could change some prop or something i'm not sure why the client re-renders but it it told the client to re-render but not the server to re-
[03:14:02] render essentially so it didn't replace it you didn't lose the local state the state was preserved so what i'm getting at is there is a difference between initial render which
[03:14:14]  is very much like islands and updates with this model right so yeah i talked about this before bmr is saying like this is how it worked this is what i want to
[03:14:26]  confirm the server just sends the new props right so this i i think i've talked about this before in stream but like if the island encompassed the whole thing you've
[03:14:35]  just recreated a json api like it's just a single page app so you can kind of see how instead we get this html again and we get the
[03:14:43]  json api but it doesn't render it again and that's how it preserves it it's not this way both sides are like separate trees that don't have to
[03:14:50]  worry about each other but they break that rule on initial render so i think actually the initial render for server components is probably the most interesting part and probably why they didn't
[03:14:59]  release it right away because they they actually had to like change the model just for ssr like from this model this is a client component it only runs on the client in
[03:15:10]  a sense it's like what our apps are today you render it once on the server and then after that point it becomes client only so this this is this is this looks to
[03:15:20]  be what's going on so yeah that's interesting so it actually the the server component actually or sorry the client component is only isomorphic on the initial page load but
[03:15:34]  this gives me another question huh if this doesn't oh wow if this doesn't if this doesn't render on the server after the first render how does the trigger suspense okay
[03:15:55]  check this out new diagram pretend it's zoomed into here okay let's draw something pretend it's kind of like zoomed into that section so out here we have server component
[03:16:14]  and now uh i almost want to steal this in here we have our client component okay client component okay now if the server fetches our data right so async as
[03:16:39] ync fetch or like if our server fetches the data i guess it has to like does it it could obviously await it but and then it would know that like it has to
[03:16:58]  wait but like how like pretend instead how like pretend instead in here somewhere uh this guy's around my like we put it in we have a use call like using that data
[03:17:12]  so like the suspense read what if this was in here across the server client boundary on initial load this would work fine because you could fetch the data not await it and then
[03:17:25]  like it could like be oh i do have to suspend or maybe you don't know maybe there's another suspense boundary under here right because i i'm just pretending like in here
[03:17:36]  there's like a suspense boundary sorry i should do like color code better but let's make this oh just something it's funny light mode escaladraw is so much nicer
[03:17:51]  for this yeah i'm i'm thinking about streaming here if you're understanding why i'm talking about this let's pretend this here is our suspense boundary right suspense right if
[03:18:06]  if in inside our client component now i kind of regret putting it there let's let's put client component make it white if our client component here has its own suspense boundary
[03:18:29]  it's very different than if it doesn't because if it does we don't really care um uh on the server we'll we'll we'll send the stuff as much as
[03:18:39]  we can and then the client will handle it but if it doesn't technically speaking you should be sending the fallback from the server to to actually like show it um and
[03:18:54]  it doesn't know if the client reads it it doesn't know if the client has a nested suspense boundary because it's not running it you can't use using client ones
[03:19:13]  but in child of a client one which is se i mean the the the i'm presuming somewhere down the tree it doesn't have to be the client component it's
[03:19:21]  it's itself or sorry sorry a child of a component which is in this no but like uses client side right like like uses is a mechanism inside the client component tree of these
[03:19:36]  things and async is the thing that's in the like you can inject like you can use projections to get stuff like we've shown with the hacker news comment collapse but what
[03:19:45]  i'm interested here is in theory if this has a suspense boundary and this is the one that uses it after the initial load they'd have no way of knowing if it
[03:19:58]  calls use or even if like there's a suspense boundary i guess what you could do is you could look at the at the boundary you can go like as i'm serializing
[03:20:07]  this promise i should wait for it okay let's let's see let's see let's see let's see if we can do that um so we can do component new
[03:20:15]  file async let's call it maybe async tss export default um um whatever it's not even it's the component itself isn't really async but let's let
[03:20:33] 's make let's just make it a function async and then props and then we'll do something like use or actually have to make this use client right i'm not
[03:20:44]  making an actual async component because those are only allowed on the server but what i'm saying is if i had cons data equals um use props dot i don't know
[03:21:02]  let's make something up rack let's call it and then when return div div and then data and then quick fix okay yeah i'm not typing this right now to worry
[03:21:35]  about it okay so client component gets a promise as as as a prop and then uses it to trigger suspense and then all we have to do here is go back to our
[03:21:49]  pay not pages page and then be like something like let's let's make something up something that we fetch on the server uh the thing that everyone does all the time uh function
[03:22:01]  uh delay something like this and then what return new promise red res reject we don't even care to reject it ever and then like set timeout yeah let's let's
[03:22:25]  give it a value here and then be like set timeout return the value after one second or something and then const rec equals delay um hello i mean we could i'm
[03:22:49]  pretty sure we could just await this and this would work like let's try that first right because we can make this an async function right and then we can go we
[03:22:59]  can go like async and then what do they call it rec equals rec and then all i have to do is await this delay like i'm sure this will work um but
[03:23:18]  let's let's find out let's go into async and get rid of the use because now it's just this okay and hopefully i didn't break everything did
[03:23:45]  i not save everything uh where did i where is there page page page interesting home root provider i think resolve is missing in the oh did i thank you sorry yeah
[03:24:42]  yeah yeah yeah yeah to do to do not just vault you actually have to resolve the value thank you oh my bad okay all right resolve the value remove the cash break yay
[03:25:03]  hello see it's there um and actually if we look over the network and we look at the dock response does it stream automatically no okay maybe not it maybe it just waits yeah
[03:25:22]  this this doesn't look like it's it's because it's because i it's because i because there's no suspense boundary maybe huh the suspense work in server components like
[03:25:34]  the way i think like maybe maybe i'm like inventing something that i'm not even that i'm not even like not even real oh right i have to put the suspense
[03:25:41]  above the i need to put the suspense above this whole thing um because he awaits here that's so that's so weird i'm so used to installing like the read being
[03:25:52]  where the thing is but it's because it's i need to i need to actually go up a level and put suspense in here i'll put it under the counter provider suspense
[03:26:06]  and then fallback equals something terribly descripting stripped of actually you know what let's make it something we can see too loading yes suspense streaming ssr responses okay
[03:26:41]  right so then now when we look at a response we're going to see something much cooler where we see the loading in the initial render and then later on we're going to
[03:26:50]  see a bunch of code to swap it in and then the actual body of it is going to be um down here somewhere hidden here it is ta-da so it's
[03:27:12]  actually here we go it's it's swapping it in okay beautiful so here's our element so that works and it works the way that i would expect it to work
[03:27:21]  now the real question that i have is sure that's fine but what if i you know like didn't read it here and there could there could be a reason not to
[03:27:38]  read it there many reasons but what if i got rid of this await and then and then in here it's changed to using use right now if this might work on initial
[03:27:59]  render but i don't see how this could work after initial render is where i'm getting at interesting it's not getting the promise only plain object can be passed from
[03:28:22]  server components promise objects are not supported well that simplifies things a lot i guess i'm worried about something that just can't happen okay well i mean that's an easy solution
[03:28:41]  basically the client server boundaries are absolute you don't have to worry about suspending on a client thing if you can't even pass a promise to it okay yeah but promises
[03:28:55]  are serializable if as as people have used solid or remix or quick know very well we can serialize promises parasol you got to tell me what gets server side props has
[03:29:12]  anything to do with this well the way you can serialize promises is you basically set it up so that you know that the promise is going to be there and you set
[03:29:27]  a location in the serialized space where you actually write out a promise and put it it's resolve and reject functions in a location that's known and then as it streams
[03:29:40]  and the content resolves it writes to that space that's how solid's resources work and i'm pretty sure that's how uh remix added uh defer recently um i i
[03:29:50]  think it could be generalizable even at a serializer level level um like like all promises could just work like that um but yeah this simplifies things a lot though right because
[03:30:02]  now you just don't have to worry about this problem because the next thing i was going to do is nest suspenses and see if i could like mess with it but
[03:30:11]  we can't even do that so like this is this this problem i guess isn't really a problem you just say like look if the data is fetched on the server you
[03:30:20]  have to wait for it on the server um right like it means that any suspense boundary um like it means that any suspense boundary could only exist on the server for data that's
[03:30:37]  fetched on the server oh man uh what's going on looks like looks like we just got a raid here um that's awesome how's everyone doing i was just learning
[03:31:01]  that you can't serialize promises between client and server components in the next.js app directory um it's funny solid is cool thank you i appreciate i appreciate i appreciate
[03:31:12]  you you saying that um funnily i'm actually spent all stream today working in react and next.js uh trash is oh man so is this trash coming in oh
[03:31:35]  thank you for the raid i appreciate it why would we everyone yeah i mean the i think the thing is they they probably will figure out how to serialize promises if it makes
[03:31:53]  sense to but i i it opens a more interesting question because if you allowed it then you'd be in a zone where you're like only you can only suspend server like
[03:32:02]  you don't you basically you client components would have to have their own suspense boundary and server components would have to have their own suspense boundary um like no like that it still doesn
[03:32:17] 't really work yeah you'd have to assume like if you passed it to the client then it's definitely handling it and you're not responsible that's basically i'm gonna
[03:32:27]  be interested if react actually solves this or whatnot uh this is gonna be just solid puns right is this what i can expect from from trash's um trash's stream yeah
[03:32:40]  uh let's get yeah thank you so much trash um yeah uh sorry just you guys came in right at like the point where i was like figuring figuring it out and trying
[03:32:56]  to like vocalize what i'm realizing uh the the the the big takeaways here are from my perspective looking at this is react server components work almost identical to something like ast
[03:33:24] ro or islands on the first render there's some difference on data serialization i realized when on a previous stream but generally speaking it renders the whole client components server components everything
[03:33:35]  all you know typical full page app render first time any future navigation it doesn't render the cl the client components on the client it only renders the server components and refresh
[03:33:47] es the client components on the client what this means is it you'd think it might have interesting um repercussions for suspense but because the you can't serialize promises um it
[03:33:59]  doesn't it's it's very simple if you need to fetch data on the server with server components you should await them there and if you need to fetch data in the
[03:34:10]  client you can you know use use or use react query or whatever else you want to use in the client and handle that separately because the server component size and client or so client
[03:34:21]  component size can scale to the size of your route section you can get a very client side feel to it because in with server rendering because you're just serializing the j
[03:34:34] son because the server will not bother re-rendering your client component it'll preserve that state like we saw and basically the only thing over the wire is the json um
[03:34:44]  and a little bit of other stuff that we looked at that we couldn't figure out what's going on to be fair uh sorry not this one i'm wrong place um i
[03:34:53]  broke the app yeah it's not working right now because i tried to use a promise all right okay that's that's i think that's the conclusion here yeah the the
[03:35:12]  it is but you you you need a promise on the client side in order to to make it work because what you'll do is you you'll render like you'll serialize
[03:35:21]  like new promise into the into the like json blob blob you're doing essentially and then when something reads from that location it'll get a real promise and it'll be
[03:35:32]  waiting on it because it'll be there you basically just have promises on both sides and then the resolver on the server calls the resolver on the client that's how promise you
[03:35:42] 're like maybe that's a better explanation of how promise serialization would work not rendering going on zero to you expectation next yeah anyway um anyway this this is this is kind of
[03:36:03]  like just craziness um i i learned something i don't know if like this was valuable to me i don't know if it's valuable to any of you but i
[03:36:13]  definitely learned a little bit about react server components and i think this is interesting do you know what's exciting about this like i don't know how much you want to double down
[03:36:22]  on not sending promises but if you think about it this way if you can't break that divide anyways and the suspense boundaries live in their own zone and they have their own mechanisms
[03:36:33]  this means that like the client react app and the server react app are like two completely different things like except for during ssr so like generally speaking it's like you
[03:36:43]  have like two frameworks you have like server framework client framework completely separate and then the only thing you have to solve is make them ssr together properly on that initial ss
[03:36:53] r so they both render so like just just think here for a moment what i what i mean that suggests to me that if you had a solution that knew how to stitch
[03:37:05]  together client and server you know from different frameworks you could literally do this with two different frameworks because the server rendering framework and the client rendering component framework are completely decoupled essentially
[03:37:18]  so in that world i mean hypothetically speaking something like like astro astro astro knows how to stitch two different frameworks for for ssr islands initially you would
[03:37:31]  be able to do server components with astro in an agnostic way because it's literally two different frameworks after that fact client stays there server does there so i actually don
[03:37:44] 't see any reason why server components couldn't just be framework agnostic potentially that's that's that's kind of crazy you you know i don't know if anyone
[03:37:54]  wants that but this doesn't have to be react specific in fact at all i mean i was already working on the specific stuff with solid so that's kind of obvious but this
[03:38:08]  revelation means it doesn't even need solid specific suspense mechanism to handle the server as long as long as you have a mechanism for handling async in the server portion and you
[03:38:25]  knew how to stitch them together then you could literally have two frameworks kind of doing their own thing you just the stitching together is the hard part you have to like build astro
[03:38:34]  first hmm i don't know right like it's more than astro and it's not what astro does today but like you can kind of see that these things are
[03:38:51]  actually independent enough i mean you start you start really going i don't know if this is what your your intention is is what if the server framework wasn't even like j
[03:39:06] avascript like like okay let's let's let's let's take that moment like is this possible right like because like i'm instantly going to a place that like look the
[03:39:19]  server code's only on the server could you optimize this to to like shit like just completely make it super optimal in the server portions so that actually scale you know i guess
[03:39:29]  the challenge is like how would you stitching the javascript in a different in a different language is harder huh like but you only need it on the initial page load it's
[03:39:43]  so funny like every subsequent navigation like every every change you make could be like in pure rust land or whatever like you you you you you you just need to be able to
[03:39:57]  render the client components the first time to be fair if people could do that we would have seen this already like easily we would have seen this already right like why haven't the
[03:40:11]  the rails folks made astro yet like i've seen people like i think i saw something a while ago and i was just like what the hell is this like terrible like
[03:40:21]  worst version of astro what was it was i think inertia js um build a single page app without bundle building an api it i think this is what this was it was
[03:40:33]  basically like you could use your like client stuff inside like a a typical like php laravel back end but like the weird part was the client sites islands weren't actually
[03:40:44]  server rendered and didn't hydrate it was just like you could do that there's another way to do this use web components right i never say use web components so that
[03:40:51]  tells you how much i think of this probably um but like if you like huh like sorry i'm just processing thoughts here in real time so if if you could yeah what's
[03:41:11]  what let's let's go back to escalator routes better but like if you could somehow stitch the client side javascript i guess the question is the authoring experience
[03:41:21]  would be different you're dealing with two languages two different apps you know like who wants to do that i just yeah i don't know like maybe you do keep stay all in
[03:41:37]  javascript when you do this but like i often talk about how jsx isn't as optimizable and like i want i wonder if like the whole perception changes on
[03:41:47]  what the authoring experience should be with server components like do we need to write stuff that looks like like this like do like do i have to do i have to go in
[03:41:55]  and like use client like the client component makes make sense but like do i would i want to go through and add use client to like every component in the my whole ecosystem
[03:42:06]  like whereas like i wonder like the server like do server components gain anything from being like this like these are just the templates like i could have just hoisted this into my layout
[03:42:24]  like i guess it's a different page so yeah you still need pages it's just part of me is kind of wondering if the ups like there's no state in these
[03:42:34]  components like how much of this is noise now sorry this is just a completely different space to consider when you realize that this decoupling can just be like the thing how
[03:42:48] 's chat doing sorry i can't wait to use view confirm well the thing is at that point it's like everyone's making another framework aren't they like they're like this
[03:43:06]  is the secret that the react team hasn't told us that they they've been brewing a different framework this whole time like this isn't like a migration this isn't like
[03:43:16]  like angular 2 they actually secretly just made another framework you might joke it's like that's called next.js but like kind of you know what i mean like i feel
[03:43:37]  like the best you could do in the end of the crappy version right well yeah yeah kind of yeah if you want to stay in javascript yeah yeah i guess so the
[03:43:44]  crappy version is what's debatable because like there are trade-offs with automatic serialization but you're right at a certain point you're kind of like like automatic boundary finding
[03:43:54]  at a certain point you're kind of like well we would get there eventually right like i don't know i think it's i do think the one thing about the shared
[03:44:03]  model challenge like i do actually see this because when i think of astro server stuff and i think of marcos or stuff like when i'm templating a page and i
[03:44:11]  just throw an html up it makes a lot of sense that's not how i generally want to like i wonder yeah this is i've been talking about this for a
[03:44:18]  while about that split between like client and server like mentalities for authoring and if it has a thing but this this actually at least the solution today really reinforces the
[03:44:29]  boundaries way harder than i was picturing so i don't know we have to kind of sit with this what about something so yeah i mean that maybe that's where the compromise
[03:44:43]  comes in like that or marco or whatever you're kind of doing that i actually like really like the react or you know jsx function component things when i'm doing staple
[03:44:52]  stuff because i like breaking my stuff up like i would i do not like single file components like it's just like you could do smart stuff like marco does or whatever
[03:45:01]  but like it's still like it's not like my natural place but again i remember using pug and like like literally when most your stuff is just markup and you're just
[03:45:11]  like slamming it down on the page like like like the astro experience is quite nice yeah yeah anyway sort of tangent sorry about that just i don't know if i
[03:45:29]  was astro maybe this is actually exciting news something to think about enough i don't know if i don't know if we got the fuzzies or the or the
[03:45:38]  ben homes around in the chat anymore so i'll leave you guys with that and we'll we'll figure out where we want to go from there um okay let's change
[03:45:47]  gears um unless there's any more comments coming in from the chat i'm just catching up i see some comments about like live view no not nothing like live view live view is
[03:46:08]  stateful like it's literally like the server knows the state the one thing i want to key here is this is not stateful you can like rip up the server down
[03:46:19]  on every request and it still works like great for edge serverless all that kind of stuff yeah this is not like live view um oh uh maybe maybe i haven't looked
[03:46:39]  too closely i there was a tweet where people were talking about it and it looked like it was basically the same as solid start um so i haven't i haven't actually i
[03:46:47]  think they're going to do a stream i think that's probably the best way to get to take a look at it i've covered quick city on stream before um and looked
[03:46:54]  at the resource primitive my understanding here is that the action or mutation primitive is a very based on remix or um actually closer to our server functions since all started um is my
[03:47:05]  understanding so we'll see if there's enough content for a stream there but my my suspicion is that there isn't um okay uh okay let's let's let's get geared
[03:47:17]  up for this week in javascript um kind of close this down and you know switch here just for a moment because last time i sorry not this view this view i was
[03:47:29]  i leaked a bunch of stuff because i was navigating twitter um out in the open you don't want to do that there's been some cool stuff this week in javas
[03:47:38] cript um there's always cool stuff this week in javascript so let's let's get this set up for that um what do we got here we got bookmarks
[03:47:55]  when when when was a week ago yeah okay yeah sorry i'm just like getting my bearings here um let's i'm like trying to think of like when the week started this
[03:48:04]  is my like exercise here all right chats doing good i hope you you can all handle my excitement when i get excited about something i get excited about something um i'm trying to
[03:48:19]  think if there's any solid news oh yeah there was yeah yeah yeah it happened right after my stream last time which is exciting nick to do although there's only one big
[03:48:36]  piece uh yeah i think sorry i'm just collecting all the the stuff that we're going to talk about in a minute that that and that all right i think we're
[03:48:50]  almost ready to go everyone's still feeling good i'm feeling a little pumped about that huh that's awesome this actually starts in a in a funny place i think uh yeah
[03:49:12]  oh someone talking no it's like litter what we're leveraging is the stream we actually write sorry i wasn't clear about this the way the serialization works is we're actually
[03:49:27]  leveraging streaming of html so i mean it's kind of funny but we the page starts loading and you stream streaming in your html and then uh you get
[03:49:38]  to a point where you're like okay i gotta serialize what i got like the the data you like make a marker you're like look i'm gonna make the space for
[03:49:45]  that first thing so you any data that you have serialized like your next data you put it in and then you serialize in that promise um essentially with and give give give
[03:49:55]  a slot in that space like p0 or something for resolving it and p1 for rejecting it just like in that data object give it like maybe or somewhere else whatever you
[03:50:04]  you allocate some space for the promises resolution and then as the page can like then some point later the page is still rendering and it resolves it sends the remaining html
[03:50:16]  through and what it actually does is it writes a script tag in that actually writes to the location of the promise that like p0 or p1 and since that's the
[03:50:26]  function from the promise you created on the client it will just call the resolve function and then the promise works as normal on the on the client like essentially so i'm it's
[03:50:37]  literally just writing a script tag into the page um yeah if the server side component reads the standardization yeah i mean it's interesting the funny thing is i it also kind
[03:50:55]  of doesn't make sense because you still have to like do like the server components are doing a render like they're still doing uh a client side render so like the way that
[03:51:08]  i've like been doing it when i was playing this all start is it's it's part of the router actually that's the hook and point so when you hit a
[03:51:16]  url the router is kind of aware and then since the the router is aware um then it will find the right part of the page to render and send it back like it
[03:51:29]  is very tight even though it's kind of you view it almost an api it is actually very much tied into the like general page rendering flow of a of an s
[03:51:40] sr app um but with you know a few exceptions you have to be aware that like to render or not render the client components right like we showed off there um which is
[03:51:53]  to be fair i haven't actually implemented in the version that's in solids app this is why i can tell reacts ahead people are talking about we literally just render the stuff again
[03:52:02]  on the client and our server right now and throw it away but i was just kind of really curious um like the context thing i i haven't actually solved the context thing
[03:52:15]  in our solid demos yet so now now we have an answer yeah because you control the stream on the thing you keep track of the the promises in a registry um that's
[03:52:34]  why the reads are important you could see the parallels with suspense like you you go oh this promise is being used that's i guess that whole thing i was doing when looking at
[03:52:43]  the serializing promises probably didn't make a ton of sense to people um it's like the read is actually that's why there's a use it's very important the the
[03:52:51]  way the await works if you think about it is they they have an async component so like they control when the components get called right so call component get a promise back
[03:53:00]  and like okay i care about this but if you're passing it through the component doesn't return a promise it returns more jsx so you have to like call use like on
[03:53:10]  the client const side to be like hey component i care about this promise yeah i mean that's how i've been approaching it with solid and honestly um are there benefits oh
[03:53:27]  yeah yeah yeah you you if you've ever seen the solid movie app demo i think you can see see it see it even in a simple case as good as mpas are
[03:53:37]  quick at reloading stuff at a certain point they they will not you will be sacrificing a bit here you literally get that the the single page app client transition feel in your app
[03:53:51]  with this approach you get the preserve state your youtube video or that's like it's the stay open like like or spotify soundbar like you get the full benefit except
[03:54:01]  i think from islands for like you can do this like islands you could basically get this code loading of something like astro like just this is really rough but uh sorry i don
[03:54:14] 't have my pitch screen sharing back let's get it back just go to solid-movies.app and click around for a moment this is not even like perfect
[03:54:23]  and this is not the browser bar this is the client side stuff the the scroll restoration is broken right now it's not perfect but i i like this is like the same as
[03:54:31]  the nuxt version of the app almost identical all this stuff add a javascript execution and bundle size um i'm not an incognito sorry if i can i
[03:54:45] 've yeah sorry let's go here solid movie it's up like at a javascript and bundle size here that's like what 13.2 kilobytes look i'm
[03:54:55]  going to the next page it's still 13.2 kilobytes it's a completely different page style and stuff go search we're going to load the search bar oh there
[03:55:02]  what it's 14 kilobytes now what i'm getting at is drag to dragon like i'm not i'm not losing my focus here like this is a single page
[03:55:13]  app style experience with javascript that it looks like an islands framework like this there is a huge benefit to this approach it's less obvious with react server components because you're
[03:55:27]  you've already got like a 90 kilobyte next app but you you apply this to smaller frameworks you apply this to to like to like other um with other technologies i
[03:55:41]  think this is going to be noticeable it's it's almost like it's too bad that it's react like that kind of got there first like i think almost anything else will
[03:55:49]  be able to utilize this in a way that's much more obvious to people like don't get me wrong react's approach has benefit as your app gets really large but people
[03:55:58]  right now are opening like the app directory and they're like why is my app larger like my hello world demo larger than when i just started next and it's like well it
[03:56:07] 's because it is larger we need the code to handle the server components and like if if you if you're building demo apps that are only like 30 kilobytes of component
[03:56:17]  code and you still need half of it anyways with server components then it's like you're like oh now my my my my code it's a hundred and maybe some components
[03:56:26]  cost 10 kilobytes you're like now my app is five kilobytes larger like or like you know what i mean like you have to get to a point where this
[03:56:34]  matters whereas if you apply this technology to svelte or solid or preact you're suddenly going to be like sitting there like i just made a an app that was you
[03:56:44]  you don't want to know how big this is in next like you you just this is the next like stream but okay see nux is here look look look do do
[03:56:53]  okay they added that animation i don't have that animation but you can see that this is the same as the nuxt app this one's actually pretty respectable but let's let
[03:57:00] 's look let's look at the next version it's a little bit different ui oh that's that's awesome let's let's get back here and let's just okay
[03:57:11]  next step 150 kilobytes first page load and everything okay and let's go into details we're at 187 now do they have a search is there a search on
[03:57:21]  this one maybe this one doesn't have a search okay so we're at 190 kilobytes like this is just not even comparable on the same scale um i think server
[03:57:33]  components are going to improve this but like for something stupid lit simple content site type thing like like it seems almost impossible that this could happen anyway yeah yeah yes and no see
[03:57:55]  here's here's the craziest part about this nothing stops you from combining these technologies like resumability is a hydration technique server components is is like uh partiality kind of thing
[03:58:12]  like islands you could have an island that's resumable quicks and what marco six are working on is they're like okay let's get rid of islands let's
[03:58:22]  get smaller which is really cool but it also makes the end developer much more aware of serialization like right now when you use islands you only have to be like the props
[03:58:32]  have to be serializable like i have an island here if i'm passing data through it's got to be serializable we can handle most stuff but that's like the mental
[03:58:39]  model when you get into stuff like quick and marco it's something you're kind of like every single event handler could be unwound and so every like in the middle of
[03:58:45]  my components i have to start thinking about what's serializable but that's independent of resumability to a certain degree resumability is what kind of breaks it down
[03:58:56]  at that level but but the concept of being resumable i don't know this is something i want to explore oh oh oh oh oh sorry this is this is uh
[03:59:17]  look i want to see this i know i was promising this week in javascript but i i want to see this to realize promises through flight okay yeah you pass promises
[03:59:29]  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah used we don't support oh so they tried something and it looks like he just edited it away
[03:59:42]  oh so they tried something and it looks like he just edited it away that it didn't work he didn't mean oh man i really want to know how they're going
[04:00:02]  to handle suspense i might not be familiar enough with react internals to actually be able to answer that question like this looks like the serialized handling that makes sense to me
[04:00:25]  promise component okay let's look an example no wait here where's client component oh that's cool like they for testing purposes they have like the shortcut like the use island
[04:00:49]  so to speak um i wish i could see what component looks like it looks like it already exists maybe it exists in this file can i view file is that the right one
[04:01:18]  like am i seeing the current version text use okay cool okay so it's just a component you text use okay oh man so this is this is interesting then because if i
[04:01:37]  understand this example oh it was literally in front of me and i was just blind yeah thank you i'm sorry um i'm like literally couldn't look a lineup um i don
[04:01:50] 't know why i didn't see it before it's always happens on stream but they have an outer suspense boundary so this is exactly what i was talking about i i wonder
[04:02:06]  what the behavior is like because you you see my concern initial render sure but like after the fact refresh get in a zone where oh man i want to i want to try
[04:02:29]  this more than anything um but yeah good to see that this is on the way i i don't think we'll get much further on this right now just because it's like
[04:02:44]  where it's at so we're just catching up on chat here maybe i missed the rest of the conversation i actually don't know how this actually changes anything that if
[04:03:12]  anything this suggests like that they could be competing for the same space yeah sorry is the valley interleaving them that large yeah because the the interleaving trick lets you
[04:03:34]  add statefulness to server side stuff that you don't need to serialize or hydrate so like you know the classic is my solid hacker news demo right where the server
[04:03:46]  this is the server component version essentially and you don't want to if you look at like the data here the script tags there's like nothing here like this is interactive right but
[04:04:00]  like you didn't send any of this stuff if you had to hydrate this page you would have to send like all the the json for all this stuff so interle
[04:04:09] aving is actually a pattern very much uh so because it can save on like this is one of the benefits it's not just the less hydration but it actually saves on data
[04:04:17]  serialization is it thinkable for zoomability diagnostic ui framework no resumability is a hydration technique so this is very much in the domain of the renderer so to
[04:04:31]  speak like solid could be resumable astro could not be so i'm just reading up on chat here here client side becomes a constant yeah there's only one problem
[04:04:58]  with sockets and we saw this on the live view stream you have to connect them right and you need a live like service that actually stays live the the thing is what
[04:05:12]  this allows you to do is literally have like a different server respond to every single response there's no session like it doesn't need to be session like this is actually like like
[04:05:23]  like any other kind of page it's not and sockets took time we were playing there and we turned down the network like sockets aren't are are are are basically
[04:05:35]  the same timeline as if you were doing client-side fetching like if you server rendered and then did client-side fetching um so it's like with like it really
[04:05:44]  is noticeable on slower networks and again maybe this will matter less as time moves on but like the server component or the islands approach is super fast for page load comparably like it
[04:05:57]  and when you add streaming it's actually like it's you basically lose the greatest weakness of like wait for the data problem you essentially get something that feels like a client fetch
[04:06:08] ed app essentially you get that experience you get loading states you get you get something that feels very similar to what you might expect from that kind of experience where it's responsive and
[04:06:17]  you see what's going on however it starts fetching the data way earlier in the cycle instead of going go to the server get the html get the ht
[04:06:25] ml get it back see the javascript header get the javascript come back start running the javascript go get the stuff or connect the socket come back render that
[04:06:37]  you know it's like going through that cycle it's literally like go to the server get the html start requesting right now okay send it back send the rest back like
[04:06:47]  it's just it's just not comparable um so you guys are great that that one might take longer than a weekend islands took a weekend but that one might take longer yeah
[04:07:11]  so yeah it there's different ways to tackle this i was actually really impressed with how live view simplified the model by keeping it on the server completely like you're like the
[04:07:22]  state was there and it's like wow this is actually it's the same feeling the first time i saw a single page app like that same feeling where you're just like wow
[04:07:28]  this is so simple um but interestingly in a sense live views approach has kind of the same problems the single page apps so yeah i know let's um let's um let
[04:07:44] 's get ready for this week in javascript i think i'm ready all right i'm gonna zoom back to my head for a moment yeah i mean use durable objects
[04:08:06]  i guess some kind of stateful persistence i mean there's solutions to this i'm just is it like with anything you start with something really simple and then like like there's
[04:08:24]  that question too is like do you want to go to the server for everything and i know live view has its own hybrid model with commands interesting this is kind of like another
[04:08:35]  approach a hybrid because you actually spend most of your time on the client with this server component model and you only do the big shifts like the navigations like you've always done
[04:08:44]  with websites with the server components so it's kind of like they are both kind of attacking it from the opposite sides yeah i mean yeah it's too bad the the that
[04:09:11] 's how the web works i mean i i i if if client-side javascript is the lock though that's why we are where we are so um okay just
[04:09:20]  a second all right all right anyway um let's get ready for this week in javascript all right i think i'm good everybody good twitch chat good let me check
[04:09:51]  make sure i didn't miss any new events only pain thank you for your tier one sub um i have to go back afterwards i'm i'm sorry if i miss anyone but
[04:10:02]  okay cool let's let's go to our let's go all right let me get my banner up all right now it's time to talk about this week in javas
[04:10:15] cript um this week uh had you know a few hot takes i would say and admittedly most of it was people talking about typescript it feels like but i'm not going
[04:10:26]  to cover that because that's kind of i don't really have an opinion on that instead i want to start here which really did start my week for me which is this
[04:10:39]  tweet from guillermo um ceo of versell where he said single page apps were a zero interest rate phenomenon and this you know zero interest rate phenomenon has kind of been
[04:10:52]  propagating um and as a kind of a meme and i think i think it's i think there's a lot of good hot takes here i saw another one about dev
[04:11:06]  rel which seems pretty accurate i have to admit that i mean this is this is true to a certain degree but what's amusing what was amusing to me and i i it's
[04:11:19]  probably less amusing to people who are less on the technical side is next.js is a single page app framework just i'm just going to put it out there uh i
[04:11:29]  i i i think i i i i get what he's saying he's talking about the benefits of ssr um but ssr alone doesn't solve it um i
[04:11:39]  gotta the this i mean this is pushing the drama but i i i found i thought i think that was the most interesting thing about about this tweet sadly um because it led me
[04:11:52]  down to this path where i had to kind of talk about definitions and understanding the different schemes because when you look at the full spectrum of web development like and the solution space
[04:12:06]  when you consider stateful stuff like live view and that and you know in this puzzle we're talking about such a like like only a certain portion a chunk of it so it
[04:12:16] 's it helps me from at least categorization stance to be very clear that you can have a single page app that server renders and that's not the same as a
[04:12:25]  multi-page app you know like these are not the same things and they have drastically different benefits and trade-offs so um i i said exactly that probably worth saying in the
[04:12:35]  same way that mpa multi-page app retroactively got applied to typical websites csr client-side rendering has been retroactively applied to single page apps that don't s
[04:12:43] sr because you know despite suggestions otherwise a single page app that ssr is still very much single page app and i think anyone who watches the stream can can understand
[04:12:52]  that because the mechanics of it are very different that being said server components are not a single page app mechanism i i feel like this discussion might be forming partially because of a desire
[04:13:06]  to kind of undershadow just how different server components are um i drew a little diagram that i hope makes sense to people and that's that statelet you know like this
[04:13:23]  is not even the whole spectrum i don't have like live view in here but like server components are in their own category here right on mpa side you have things you know
[04:13:34]  i call sprinkles you know people call sprinkles which is like when you add like some client-side javascript to an mpa that's been you know server
[04:13:43]  rendered things like alpine js petite petite view stimulus jquery even you have islands like astro and fresh and on the single page app you decide you have client fully client
[04:13:54]  rendered apps you have ssr apps you have ssg apps isg apps isr apps dpg dsr i i can't keep track of even even
[04:14:03]  i can't keep track of all the um thing but they're they're also kind of like under the ssr side single page apps that ssr what makes a
[04:14:10]  single page app well a paradigm where you have client routing and client rendering after initial page load like yes you can ssr but your app is constructed in such a way that
[04:14:26]  it navigates and it renders the page hybrid is this interesting place where it actually is has architectural differences here because you have to understand because you client render a page you
[04:14:37]  can't make the same assumptions that you can with islands you can't eliminate that dead code islands and single page apps are incompatible this is an attempt at trying to make
[04:14:49]  them kind of the same and there's other solutions that probably fit in this space this is an oversimplified diagram but where are transitional apps that term has no meaning
[04:15:02]  anymore it might be under hybrid um but when they released felt kit they decided that it was pre-rendering so transitional apps under the new svelte kit definition is a
[04:15:13]  sub-branch of single page app s ssr um there was the people in the mpa side initially when it when it was supposed to put out there thought
[04:15:22]  that basically transitional apps were single page apps essentially it was just a rebranding kind of like here i think there's some stigma with single page apps that you know frameworks that
[04:15:32]  do single page apps solid start included in non-experimental mode are trying to like separate them from it but like here's the truth we are single page apps mechan
[04:15:42] ically lighthouse will tell you that too it doesn't it does not lie you know what i mean like like this is this is the architecture um we can try and rebrand
[04:15:52]  it but i i've i have enough definitions i have enough three-letter acronyms that i need to know so that was a that was a that was a hot way
[04:16:06]  to start off the week right and honestly it the it just kept the hits just kept on coming um let's see where are we where are we next yeah um where do
[04:16:23]  i go here yeah actually god there's so many good ones here um ah yeah let's let's just get to it um this is a continuation of last week's discussion i
[04:16:36]  want to point this out here again you know and it's related to the stream again the whole library versus framework versus whatever right um and it's also you know the whole
[04:16:45]  single page app versus csr thing right um essentially devon creator of parcel this is important to understand the context was like look different tools different jobs don't try and conflate
[04:16:58]  them right like it's okay to have single page apps and csr and mpas and ssr we don't need to do it all the same and i think
[04:17:07]  this is a valid take i mean to be fair we we don't necessarily right like there's nothing that says that we have to do this and this is like we hit this
[04:17:19]  decision at every micro decision along the line right because i was even talking about server components a minute ago and i was kind of like what like what happens you know like when
[04:17:28]  we get to that point where we have to choose between like what quick does and astro does like it's that same decision again so like in in this kind of view of
[04:17:41]  the world we can optimize better for the specific case if we don't try and combine them together but what we end up usually happening actually i think is things just get sliced
[04:17:51]  up slightly slightly different into smaller pieces of each thing i love that we have chat here going on about what's the difference between jamstack and how does that fit in honestly
[04:18:05]  jamstack um if you you know we'll talk about jamstack later it's okay i'm not going to get tied into that i get what devin is
[04:18:17]  saying but you have an amount of devs who know react more than they know javascript says yes exactly this is the thing and and it's kind of from there you
[04:18:29] 're like i know react and this is the web why can't i build everything this is like the sites versus app conversation the funny thing is at every point this this has happened
[04:18:39]  multiple times in history where we get to that point where we're like it's time like we want to do more like i was talking about dot net at the beginning of
[04:18:47]  the stream it kind of tried to do the whole isomorphic full server like thing like it was a mess and then everything imploded and we ended up with single page apps
[04:18:56]  my take here is more often than not this marks an end of an error rather than the beginning when we get to this point curse from the knowledge that's just outside of reach
[04:19:04]  we pursue avenues that compromise too much and at a certain point leading to our inevitable reset but hey it might be different this time i want to do the meme there with the
[04:19:11]  picture you know but you know at some point it will be different do you know why because that baseline keeps on moving right we learn a little bit more each time when we res
[04:19:23] huffle i think with server components this is the closest that we've seen but i imagine that at some point we're gonna hit a level of complexity here that like this will
[04:19:34]  feel really uncomfortable but i do think we're watching the next big shift i don't know if server components are like the lead of it like are they the angular of the
[04:19:40]  spawn movement or the react not sure but it's happening right well i i i what's the end of it of the error well like what i mean is like i i was
[04:19:57]  doing razer mvc for templates um you know update panels i i love that throwback to asp.net but you know we got past update panels we had better
[04:20:07]  patterns you know even some of the stuff in rails and then a certain point we're just like screw it single page app like it just it we could even if we tried the
[04:20:15]  interactivity was not as good and then like it just we it got drastically simpler by just make an app in javascript done right that's what i mean because but
[04:20:28]  in a sense it was that push the desire to want to do more with it that kind of really showed the the weaknesses there's an inevitability but like in a sense reacts
[04:20:41]  realizes that the single page apps are what what was the term uh zero interest rate thing like that's where we are now it it it is a beginning as well as an
[04:20:52]  end every end is a beginning you know some song that probably says that but like um like usually the people who recognize that or the projects that recognize that are the aren't aren
[04:21:06] 't the ones that survive it okay so i i think the problem the thing is we innately over and over again want this goal as much as you say different tools different
[04:21:22]  things this is something that web dev community is not going to give up ever you know pull cue the xkcd comic or whatever like this this this is this this is
[04:21:35]  just how we work i don't know if it's a good thing like this might lead to the next cliff and then we reset but it's inevitable part of change i
[04:21:43]  saw something so cool about blazer i forget what tweet it was off of it i think it was off my mpa thing where people were trying to figure out where it fits
[04:21:56]  blazer has an automatic detection mode to switch between something that's like live view switch between their wasm and the client like blazer's got like server components and live
[04:22:08]  view and like um client like the whole thing all in one framework like working like with detection like there's something cool there that i think people like that like myself should check out
[04:22:20]  other people care that their site actually loads in a reasonable amount of time might not you know want to do that but like generally speaking like it's the these are these pieces
[04:22:32]  are are everywhere actually it's just funny you mentioned blazer because like literally i saw something really cool um there's a video linked off one of these discussions um okay so
[04:22:46]  what i want to show off next also big shout out to austin incredible amount of work um this came out that same day solid js xstate integration finally a reality um if
[04:23:01]  you watch my immutable stream uh you know about react and uh like solid and react stream you know how hard it is to make this stuff work well he's done an
[04:23:12]  amazing job um i think like this took months to to get going um is it it's a difficult challenge it i talked about like there might be some like super optimistic ideal in
[04:23:24]  the future and i would like to see this this is still like using reconcile kind of in a sense of what the best we can do today but this is still a huge
[04:23:33]  accomplishment and um yeah like picture xstate doing your state management and then when you update your context you update your state data it applies fine-grained not re-rendering
[04:23:46]  your components not doing immutable things like updates pinpoint this is a very cool project if you're into xstate super cool okay that's my that's my shout out there
[04:23:56]  sorry all right blazer stream uh not yet okay so another cool conversation that happened this week also react related this is a follow-up to the last conversation we talked a lot
[04:24:18]  about like veit and we're trying to figure out what the best starter is i actually think this is a pretty um really great response um in terms of their they they
[04:24:29]  want to they care about the beginner they want to give the the happy path so dan wrote a wall of text about how they can approach this and out of the options i think
[04:24:40]  this is pretty good i think there's a challenge here that like it's offering almost too much decision for someone getting started they won't know what to pick but it let
[04:24:49] 's react keep control and then they can suggest things because they're this is interesting like that's like the surface level thing and what i like about this right because then it's
[04:25:01]  like you're in this kind of zone where you're like okay this is very reasonable but this is this is also why you read the whole rest of this post is he
[04:25:11]  suggesting that while react is a library it's a library to build frameworks like i i know this i'm like kind of paraphrasing and it's not actually literally what he
[04:25:19] 's saying but this is my read between the lines right because even here like he there's this one part of this thing when talking about the rise of meta frameworks where where
[04:25:33]  the which kind of started its own debate um this week which is like kind of called astro out and islands out as like basically like fine you can use it but you're
[04:25:48]  not really embracing react by using it um and you know that's an interesting thing because like you are using react the library maybe not fully but it's like at what point
[04:26:03]  like you're already a framework when you've decided what like that you own the best practices is where where i'm getting at like you you try really hard to push them out
[04:26:15]  there on the world but if if if you control the piece do you know what i mean like you can say like look you should do stuff a certain way read write segregation
[04:26:24]  all that stuff but if you actually like not just this the suggester but the judge like you've it's kind of full circle then i think this is the part that was
[04:26:33]  the trickiest for me to navigate when looking through this post because i actually got in a discussion um that i don't think i linked here yeah um with dan about this kind
[04:26:44]  of going like look you're being a little hard on mpas like because he criticized them of having two different app experiences if you've been watching the stream today you saw
[04:26:52]  the the two different app experiences like even in react server components like this is this is one of those things where like it's tricky because they kind of want to be a
[04:27:07]  framework or you know like to support this this might be subjective but one of the things i like about next 13 the app is how it gets rid of a whole bunch of ne
[04:27:17] xus isms it's still raw blah blah blah but do you follow me like if you're getting rid of the the next isms what is next but react like so
[04:27:30]  like those opinions are coming in and it's fine like be opinionated own it and i i think they kind of are but i i think i think like where i'm sitting
[04:27:41]  this is like it's and i don't know how many people you make your own decision where how this fits or sits for you but i like for me this is a
[04:27:49]  departure and it's one that like i'm kind of excited about because it's like reacts owning it in a way perhaps that alex russell wish wish they did from day
[04:27:58]  one but it's also them stepping away from a place that i like to live they're not encroaching on me anymore they're they're if you want to do
[04:28:10]  that sort of stuff it won't be a question like oh yeah but react it's like no no reacts over there so you know this is pretty exciting yeah no exactly like all
[04:28:24]  those people who want react 2014 send me a message we should talk that's the thing like the hardest part about these conversations is that veet for example is miles better than
[04:28:43]  the webpack you're comparing it to the their thesis is you don't want to write your own framework i that to me i know it's different than saying you don't
[04:28:53]  want to write your own webpack config but i've always kind of wanted to write my own webcam pack config so i wanted to avoid what create react app ended up with
[04:29:05]  you know i like if you compare ejecting create react app and writing your own webpack config i definitely take writing my own webcam pack config like every day of the week so
[04:29:18]  yeah i want knockout to see uh so i know it's an interesting conversation and it's a shift going on i think it's something the ecosystem is really um starting to
[04:29:31]  adapt to at the same time like react is kind of like not afraid to push things forward and break things you know like on this i i like this is admirable when
[04:29:40]  you understand how big the project is and how risky this is for them like check this one out like seb's talking about like should should we use wrappers or should we patch
[04:29:51]  the platform right and i'm going to ignore matt cane for a second although he's completely correct um and and kind of focus on async functions are like you like this
[04:30:07]  one again his functions are but if they they're supposed to be useful you need async local storage okay don't care that's why you have so many big sites to
[04:30:15]  still have okay it's like he is only okay okay we should have listened to angular when they first presented zones like that's that's that's that that is like a a
[04:30:31]  revelation like we we talked a bit about it about it it's funny the angular team is like trying to escape zones like like crazy they're like zone is the worst thing that
[04:30:40]  we ever did but it's because they had to fight the platform so hard this is the thing you've you've that happens in javascript framework land you have an
[04:30:48]  you look at this something you know like how can i make this work well and you come up with a solution and you and you're like okay this simplifies things but then
[04:30:58]  you get to a blocker on the platform and then you spend the whole rest of your time fighting the platform um and essentially at a certain point maybe people don't like it
[04:31:08]  and then you just leave defeated angular that was zoned right they were like we want it for those who aren't familiar zone is basically async local search it's the
[04:31:18]  idea that you could start have some context on one side of the async await and resume it on the other side of the async await it's a reason that like like
[04:31:27]  we can't like we don't have async components in solid like you can't you have to use generators it's not easy to get the reactivity on both sides
[04:31:37]  like in the same thread so different systems work different ways but angular was like we don't want any fancy system we just want to use plain javascript essentially and know when
[04:31:51]  stuff finishes and then just run the code like really simple model probably the simplest model but they had to go crazy with zone to make it work another example of this is is
[04:32:02]  reacts mutation of semantics with hooks or even reactivity in solid you know and our use of functions and then you're like these are all different mindsets of how we
[04:32:14]  could revamp the language of javascript to work for frameworks um it's very interesting to see kind of the mental leadership of react kind of point at at angular here you
[04:32:34]  know what i mean like because we're talking about things where whole frameworks are built on top of those kind of philosophies anyway okay let's continue on there was another response
[04:32:58]  to this which i thought was actually pretty point because why is react patching all these native things to make it work and a lot of it actually is them trying to solve
[04:33:16]  caching issues or continuity some of it's async local storage type stuff but i i love that michael rawlings from marco decided to point out that like look you
[04:33:26]  if if your system was built in such a way that you didn't need to hydrate you wouldn't have to worry about this like basically the whole example just disappears when
[04:33:33]  you're resumable it's it's it's interesting but as i said it's different choices and trade-offs about fighting around it because like it we're circling
[04:33:44]  the javascript language in crazy ways to try and get it to do what we want um i mean this is the motivation behind builds and compilation like we're stuck i
[04:33:57]  i i think i think it's crazy because when you have really strong limitations you breed incredible innovation right it's just yeah yeah i mean yeah this this is just yeah more
[04:34:24]  of that okay okay there we go okay i think we're on the next item now um other big news this week netlify acquired gatsby and uh we should
[04:34:38]  talk about it for a minute because there's so many different levels to this and it's it's it's funny because like even i'm witnessing it internally and externally a lot
[04:34:52]  a lot of different opinions a lot of different thoughts about this and i mean honestly i i'm gonna i'm gonna throw this up here look i can understand where some people
[04:35:11]  are coming from uh was a state of js when this news came out you know a couple weeks after state of js people are like okay rendering frameworks they look at this graph
[04:35:30]  and they go what are you doing netlify i don't know this isn't the truth of reality for everyone but gatsby looks like the ember of rendering
[04:35:45]  frameworks like so much promise this is why people joke like welcome back to 2018 like so much promise here and then literally now no one wants to use it people who fill out the
[04:35:57]  survey are mostly i i don't know we talked about demographics we talked about this this is this is hardly representative and gatsby is still very popular in enterprise spaces because
[04:36:12]  because of the problem it solves but this is this is what people look at and then they they kind of go and they go okay well they start going okay let's let's
[04:36:27]  frame this as like now like i almost want to escaladraw this for a second but like i i've seen people like basically like basically write this so like for cell
[04:36:38]  okay let's go white they write stuff like this they go for cell next they go shopify remix and then they go netlify gatsby who uses that aside
[04:37:12]  yeah but this isn't the narrative first of all because if you look like from this perspective on the framer side but like there's some there's there's there's
[04:37:29]  some other like sure these are the react meta frameworks but putting them head to head doesn't make any sense uh we got a raid what's going on where is where is
[04:37:42]  our raid coming from all right sorry maybe maybe i just jumped on the wrong thing okay so oh no we did yeah we did get a raid see i suck at twitch i can
[04:38:02] 't even tell where the raid came from welcome we're talking about this week in javascript why do i suck at twitch someone's gonna that could be a stream someone
[04:38:16]  can teach me how to not yes here we go madeline of of ophirvia is raiding with party 42. awesome there we go thank you okay so yeah
[04:38:27]  we're talking about the netlify gatsby uh acquire here this is the diagram people like to draw and i mean then then they they go over to the charts and
[04:38:42]  they're like next remix gatsby but as i said it misses the it misses the story here because what gatsby's been working on for the last couple years
[04:39:01]  like they had a framework and they tried to make a company out of it everyone knows that is not an easy feat um they've been working on some incredible technology around their
[04:39:12]  data layer um which is very exciting um project known as valhalla and it's it's graphql but how does this grab here company has been working closely partners and
[04:39:25]  enterprise customers to deliver a new valhalla content hub which builds upon their data layer and delivers a hosted fault tolerant edge first graphql api basically this is the the
[04:39:34]  like the holy grail of api is it connects to everything basically you want data from somewhere and you want to get to your edge functions it's taken care of this
[04:39:46]  is very interesting um on that side and largely and big part of where this interest is that being said i think this is exciting on the gatsby framework side is as well
[04:40:01]  does the press release even mention gas for the framework that's the thing i was in it okay i i'm not gonna like give away company secrets but when i found out
[04:40:08]  about this news i was late to a meeting um it was like all hands and i was i was giving a talk and i uh i come in about 30 minutes in like i
[04:40:21]  just finished my presentation uh it was it was one of the ones i think the last week or whatever and i i and they're talking about valhalla and talking about
[04:40:29]  the stuff i'm in the meeting for 30 minutes i have no clue it has to do with gatsby like zero like like at the end it like came up and i
[04:40:37]  was like oh like it came up again like i missed the beginning when they actually talked about it i had like like no idea for like half an hour of watch like being
[04:40:46]  in the meeting um that being said i think this is actually also exciting a bit for gatsby the framework because like different things get prioritized when you have a company and
[04:41:03]  money and stuff and i think we have a real opportunity here to like re-open source gatsby so to speak this is this is what i've been talking about
[04:41:13]  a little bit here is that like there are other frameworks at these companies like this this is this is not this is not accurate right what else do we have salt salt kit react
[04:41:31]  i mean you can argue about that but let's pretend reacts there okay do you guys know shopify has preact uh but to them to the to the main maintainers
[04:41:41]  of preact work at shopify solid eleventy there i mean someone like like there there is a lot of open source frameworks and tooling that that that are in these different
[04:42:02]  you know these different companies and i i i think i think what's interesting here is just like the potential opportunity here like what was there there's a tweet here i love
[04:42:12]  this see this this is about framework camaraderie right daniel rowe big maintainer on nux project it warms my heart right now there are featured in gats
[04:42:22] by that were built to support gatsby cloud we don't want that i'm hoping that gatsby will be like svelte kit remix astro next solid
[04:42:28]  start blah blah blah platform agnostic again right and that is what's happening here and matt kane from netlify was like if this happens i think next yes okay
[04:42:39]  fine maybe this is less camaraderie will be the only framework remaining without support for adapters deployed to different patterns he is right though just to point it out there um
[04:42:55]  yeah did we just define what a meta meta framework is maybe yeah i mean i'm not i'm not suggesting that see you're i think this is an interesting question here because
[04:43:10]  i i didn't notice this before i was sitting there because like i'm not gonna lie when i found out like i i'm stoked right i found out that the oss team
[04:43:19]  at netlify is going to be more than me and zach like we're gonna have the expertise of people from gatsby people like like war peters you know
[04:43:28]  like really smart people who understand the framework space which is something that actually i'm good on the mechanics of the rendering framework is a place that i haven't spent as much time
[04:43:37]  on you know i'm i'm good at like the micro stuff i'm i don't know if i'm as familiar with like all the problems you hit when when you know
[04:43:44]  like i i've worked as a developer in application but i haven't built you know i guess like ebay kind of gives me some experience there but like i haven't
[04:43:53]  like look how widely used gatsby is it sure next.js is conquering that but it's still like it is still very widely used you know it that kind of
[04:44:04]  experience is invaluable i was i you know i i was kind of sitting there i'm like these guys are going to be on my team you know or like you know in
[04:44:12]  the same proximity like obviously gatsby has importance you know of customers and all that but like i've kind of failed if i haven't convinced them that that you know they
[04:44:22]  should they should give solid a try or you know give me some tips that stuff you know like and and i made that comment and someone pointed out to me uh i think
[04:44:32]  it's fred from astro he was like he's like if you if you ignore if you erase the meta frameworks from this diagram and i know i i know that uh
[04:44:43]  um that no one sees this as this competition you get you end up with this isn't that interesting i i like i find that interesting and i know some people who
[04:45:14]  say like for cell doesn't run react but i'm like semantics like whether it's react that runs or sell like it right angular oh yeah i mean i mean i
[04:45:32]  i was focusing on these ones obviously google has angular builder has quick but i i just i like do you notice that is oh yeah it's felt you're right i missed felt
[04:45:53]  you're right i missed felt svelte is here too okay yes thank you yes thank you sorry i missed felt that that is the more important thing that i'm amazed
[04:46:02]  this this was just this is just an interesting diagram i don't know if it means anything it was just it was just i i i we were looking so much at the meta
[04:46:12]  frameworks and all the like because that's what everyone talks about i i sort of missed i missed this shift it's i don't know if it means anything it was just
[04:46:23]  interesting alababa view maybe yeah i mean i wasn't i was just talking within this like specific graph and i apologize felt should definitely be here i i i it was just
[04:46:42]  like i was like you're looking at this and you're seeing all that and then you actually kind of melt away some stuff this sort of shift has kind of happened um
[04:46:51]  anyway yeah uh matt bellman echoed this sentiment anyways about framework agnostic front and community all that yeah but essentially i do like this trend in general i'm very
[04:47:10]  excited it's hard being in open source and being you know in this kind of zone um where like you try and find ways to fund your project and like either the the
[04:47:29]  company you find a company that is aligned and is building the something that uses your product and you go on that journey you just go to vcs you raise money and make a
[04:47:40]  company out of it and that then you realize that your business is something else so you have like a like a secondary objective that you have to fulfill or this kind of patronage
[04:47:50]  model that we're seeing now that lets myself or like rich harris work it for sale and be able to work on these frameworks you know kind of relatively freely and i
[04:48:02] 'm pretty stoked about that i i think i think this alleviates a lot of the pressure on gatsby yeah anyway um that mostly leaves us up to date to date
[04:48:23]  i think that was the other big news today and just as a leaving thought i thought this was kind of kind of cute um i i did a stream about how you don't
[04:48:35]  like solid just compiles without jsx um and the creator of the solid query kind of tan stack port um was like yeah i'm just going to use vanilla tan stack
[04:48:52]  using solids reactivity to update a counter through the query i thought this was cute to kind of see how this deconstructs even outside of my silly demos so very very nice
[04:49:06]  all right that's it this week in javascript anyone i i see that i i kind of uh maybe dropped a bomb some the chats kind of like still responding to
[04:49:19]  that whole thing on that diagram was that was that controversial i don't know uh when when when when i when i see when i see like um stuff like this like it
[04:49:38] 's funny i'm not actually suggesting that versell controls react i'm actually suggesting like it like the other way around like like like like in terms of next like like it
[04:49:54] 's not about not about versell i'm like i'm not trying to evil empire thing i'm just saying like next is like is the react framework um because they're embracing
[04:50:05]  it the the furthest so like but there is like you you can't ignore the fact that's like seb and you know on the next team is kind of been the
[04:50:18]  visionary for react for the last like seven years so like you can almost use the two interchangeably like next react you know so at least at least if on this side and
[04:50:34]  maybe like saying i'm saying this in bad faith or something like literally you you could just take a tweet thread of anything that dan or or andrew have said in the
[04:50:45]  last like several months and just like be like like it's yeah so like it's not it's i'm not i'm not trying to suggest some kind of weird collusion
[04:51:03]  like that i'm just saying like for all purposes that's where react lives now in its purest form from the like external outward community so when you know you also have
[04:51:16]  react to Shopify and yeah sure but like that's that's not that's not you know for for the purpose of what i'm i'm saying that's not that's not
[04:51:27]  where we're that's not what i'm saying uh anyways all right well it's ten to five i don't know it's nothing else i think we're good is there
[04:51:42]  anyone i can raid who's streaming right now i don't follow that many people uh so let me let me see here what do we got here cm griffing some slides
[04:52:02]  about mitosis yeah i don't know i don't know what else is going on the web dev on a on a friday night but let's just do that rocks
[04:52:23]  code okay theo's got us theo's got a suggestion i'll trust you theo let's do that all right all right all right thank you all for joining