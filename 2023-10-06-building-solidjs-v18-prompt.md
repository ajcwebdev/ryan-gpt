---
showLink: "https://www.youtube.com/watch?v=87D15Gu1d6w"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Building SolidJS v1.8"
description: ""
publishDate: "2023-10-06"
coverImage: "https://i.ytimg.com/vi/87D15Gu1d6w/maxresdefault.jpg"
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

[00:00:00]  Hello everyone and welcome to my stream today, yeah yeah late I'll try something a little different this week I've been paying way too much money to StreamYard and
[00:00:13]  you know I've been having all these weird performance bugs recently with the chat and stuff. I want to try the scream at 720. I've been I've been paying the
[00:00:22]  extra for the 1080 full quality stream and I got a suspicion that except for in this view when you're seeing you know full screen my mug that you're not going to
[00:00:32]  really notice a huge difference. I have a way better setup than I did when I used to do 720 when I was like in my living room at night with a blur on
[00:00:40]  my camera. I think we're kind of past that and I think that 720 is probably fine. Yeah I go up a whole tier for 1080 and I don't know if
[00:00:54]  it's worth it so we're gonna we're gonna see if it's worth it today you guys can can tell me yeah come say hi yeah thank you hello once we
[00:01:03]  got ears I'll be coming quick um no I'll talk about this um but yes we get to find out what Alexis has been up to. I think the it's so
[00:01:15]  hard I don't call what quick does like the the part about quick that has to do with um resumability like to me like at least in my head I separate
[00:01:30]  the resumability aspects from like the way quick lazy loads code. I think the lazy loaded code is interesting because there are things like mini apps which do a lot of this
[00:01:39]  kind of downloading of applications in the background and if that was just built in to the to the experience authoring I think that is actually an interesting case and many apps have
[00:01:49]  been this kind of thing that if you aren't familiar they're like they're they like run inside a native mobile app essentially like you install a native mobile app initially and then
[00:02:01]  they're like sub-apps inside of it and they're popular in um Southeast Asia places with uh lower um internet connectivity um it's interesting because we spend a lot
[00:02:14]  of time especially on the e-commerce in the western world and all this to try and get those initial page speed scores faster but I had a gentleman come on my um one
[00:02:23]  of my articles and was like you know Brian you're talking about low-end devices you're talking about networks and like how to maximize this stuff uh our internet's so
[00:02:32]  bad we don't even care about this like it's just not even like page speed is not a thing we even care about um it was the author of the I think it
[00:02:41] 's what was the name of the uh the framework free f-r-e he was saying like like we're beyond having any hope of like seo and all the stuff
[00:02:52]  that gets promoted through like google page scores we just need stuff that loads you know in the background and that we can get a somewhat smooth experience and work mostly offline and he
[00:03:01] 's like that's like the completely opposite end of the spectrum of all these mpa type uh optimizations everyone's been working on so I think I do think it is interesting
[00:03:12]  from uh mini apps perspective uh that kind of lazy loading code resumability enables this so that is interesting but that is also not what we're talking about today I just wanted
[00:03:23]  to kind of put that out there all right more people come and sit high yeah all right yeah I'm not doing real-time games hey john yeah a lot of
[00:03:42]  highs coming in in french please uh all right all right all right yeah so we yeah we're gonna be talking about 1.8 today 1.8 and we I I can
[00:03:57]  we can talk about that a little bit yeah let's talk about 1.8 here in a second I'm just gonna tell people that we're live here I'm just taking
[00:04:04]  my sweet sweet sweet time here while the twitch pre-rolls run um did I ever tell you that I think it was a ben home someone made me a really nice like
[00:04:15]  streams about the start intro thing but like you know me I never figure anything out um I probably could spend some time and figure out how to get that in there but I never
[00:04:27]  did okay let's see twitch is alive too okay but yeah let's let's share that the stream has gone live this is a good prep because it makes sure that my
[00:04:39]  you ever use I use mac where like force you to restart everything if you um if you're not sharing but um sometimes yeah no we're good sometimes it forgets let
[00:04:54] 's get serialized yeah no serializations has been a topic that you keep on seeing in a lot of frameworks um for a while now and it's not like solid didn't
[00:05:04]  serialize promises and do all that for ages otherwise streaming wouldn't work it's just we've had to relook at this a little bit again um okay what am I
[00:05:13]  doing here I am reposting with a quote tweet yes um what is it twitch tv slash ryan solid yeah let's do this does it always leave that it usually
[00:05:38]  doesn't oh wait that why does this not let's try this again see did I lose the quote tweet sometimes this stuff gets kind of you can see how like incompetent
[00:05:50]  I am at this stuff let's try this again quote see huh twitch just or twitter sorry or x or whatever wants to be called it's glitching out on me all right
[00:06:05]  here we go I'm actually pretty excited um some content came across today that I want to talk about too because it's really interesting um but um we'll get to that
[00:06:20]  a bit later uh how we doing yeah I'm trying 720 right now just because I really am wondering if it's gonna make a huge difference here and it basically doubles my stream
[00:06:35]  yard cost at one point it's so funny like I did something kind of dumb and I haven't been uh I usually been charging some of these kind of fees to open
[00:06:45]  collective um just because I it's like part of supporting solid project and uh I I didn't switch to another year past I only did monthly for a little bit because I was
[00:06:55]  going to talk to Theo and see what was up with ping you know but he was like man you don't have a like OBS it was a while ago OBS hadn
[00:07:03] 't released uh um uh m1 or m2 based version yet so it was like clogging down so he's like no don't don't bother with that you know
[00:07:12]  we'll just stream yard does all the stuff you need it's gonna get a lot more complicated I mean he knows how adverse I am to complicated tooling um but I left it
[00:07:22]  for a bit because I was like oh he's like you know we'll see if we can work a deal for you then I never actually ended up doing it and I just
[00:07:29]  ended up paying the full stream yard cost for several months and now I'm like okay I'm done with this all right what are we talking about here just check in here
[00:07:46]  that's awesome yeah no I love hearing stories like this some of the work with the solid astro combination has been really nice like uh uh what's another good one example
[00:07:59]  I think nord bpn um is another one they redid their whole site with us and then another cool one was uh I don't know if this is out yet we
[00:08:09]  should see capital one is I think working on something under wraps even though I just put it on stream ryan has 1211 commits on solid the second most commits is 27
[00:08:20] . yeah and the second most is by um otanashi who's literally typescript wizard and the only reason any of the typescript works in my opinion um uh so uh
[00:08:31]  yeah I I think I I'm yes solid itself it's funny when you go into any of the other refos it's a very different story it just this is what I
[00:08:41] 've always liked about solid we'll talk about this a bit today I think because um the maintenance cost in the surface area solid is not undoable by one person or a
[00:08:52]  couple people whereas you know solid start is definitely not um so but yeah I'm it's interesting and some a lot of those commits some of them are like basically update from dom
[00:09:06]  expressions so you have to like go to another project to see the full history which is a complaint people have had that we wanted to talk about with solid 2.0 is
[00:09:14]  seeing how we get more visibility on this stuff and kind of bring it together it's just tricky because I built dom expressions to be agnostic so it's like weird when
[00:09:21]  it comes in under solid banner but it's you know one of the things being talked about all right people still coming and saying hi how we doing yeah I think I think we
[00:09:29] 're finally getting everyone coming in um nice see I love again stories like this medical app with 3d visualization building solid yeah we've been I think there's a lot of
[00:09:43]  really app-like situations where we just fit really really nice um so I am I'm pretty stoked to see kind of this progression happen and start seeing these apps in in um
[00:09:54]  out in the wild is the term you know all right well in fact how they affect solid start yeah I'll talk about it yeah let's get there yeah um I the
[00:10:06]  be fair 1.8 is not out yet today okay um just like it's close there's a couple things I want to look at and to be fair I probably might even
[00:10:19]  look at a thing or two on stream just because you know we're here do you see people migrating from solid angular signals here thank you for being part of our community
[00:10:35]  parasocial I love that yeah yeah but vconf was sweet and we'll talk about that too um uh yeah yeah so uh where do I want to start here not any
[00:10:52]  of this this is this week in javascript stuff let's switch over let me go to github maybe that'll be easier to see than in my stuff although
[00:11:00]  there is a next branch and on this next branch there is the stuff that I have been working on and I made a changelog which is kind of like a preview version
[00:11:11]  of what the release announcement looks like this is how I test it out this is not a huge amount of features have you seen any of like my you know usually I've got
[00:11:18]  like a lot more stuff going on if you you know let me let me throw a banner up right now so Jesse has a little bit to work with um yeah there we
[00:11:33]  go Jesse does amazing job I think my last stream was like six hours or something so yeah anyways let's let's go okay introducing solid 1.8 which means I I'm
[00:11:45]  just introducing you to the development of it this is we're talking about building and we're talking about what went into it um it is not quite out yet today but it
[00:11:52]  is in beta so you can like use like 1.80 beta 1 or beta dot 1 like you can try it right now um the thing is it does come with changes on
[00:12:02]  babel preset so like even when I installed start trying to get into work it was like a bit of a pain because of other dependencies if you can make sure all the dependencies
[00:12:09]  are forced to the right version um then you will see the updates coming in but we're going to talk about them mark mills angular signals jsx okay so this is
[00:12:24]  what you guys are talking about give me a second give me a second let's see what this is okay I see so someone made like yeah yeah okay so this see this
[00:12:35]  is why dom expressions is a is a open library right this this is this is like you know how I used to go and make take dom expressions and apply it to all the
[00:12:44]  libraries we even made the preact version on stream someone did it with the angular version yeah because I I made one for view I made one for mobax I made one
[00:12:54]  for everyone yeah there you go bam there you go now you can use angular signals and they're just as fast as solid yeah I mean this this is oh man this this is
[00:13:09]  almost like this week in javascript worthy can we talk about this later thank you for flagging this to me we'll talk about this later this is this is off
[00:13:18]  topic but I love it okay okay wrong all right all right um okay so choose a framework with signals yeah yeah yeah yeah the vtalk was great now anyways um okay so I
[00:13:39]  admit um I'm just reading a bit of this out loud but I admit this release is not the most exciting from a feature standpoint like if you remember 1.7 we
[00:13:47]  did a whole bunch of typescript stuff I love that stream honestly people should probably reference it now but I went in real depth about why signals and typescript are a pain in
[00:13:58]  the ass uh very relevant to the svelte conversation because you know a lot a lot of frameworks will be like hey you know we don't want to fight typescript too
[00:14:08]  much right and I don't want to fight typescript too much but like on the other hand I can't let typescript dictate what happens like I'm sorry they're
[00:14:17]  not in charge of us and there is no really good answer here so we spent a lot of time exploring that on 1.7 1.8 is kind of it's it
[00:14:29] 's it's making those preparatory steps towards 2.0 and understanding that multiple pieces are going to be coming in for 2.0 at the same time you know in different
[00:14:39]  channels and some things will come out before 2.0 and some stuff will be after but we have to make sure we can move forward and this one was really guided by
[00:14:47]  um i as many of you know alexis has been working on um the solid start uh with the group google chrome aurora funding there is a there is this whole you
[00:14:59]  know they give us a bunch of money to work on stuff and the thing is what they care about largely is core web vitals performance metrics and stuff like this so we
[00:15:09]  started measuring them and making a benchmark for it it's it's a little bit rough um and we still need more work but we started kind of you know putting stuff together and
[00:15:18]  and measuring stuff and we started working on what our future island solution would look like and if you've been following along the stream the last few weeks um or months really last
[00:15:29]  month or so you know that i've been struggling with server component design and i've been looking a lot at like what those fundamental building block pieces are and the thing that kept
[00:15:37]  on highlighting and this is why people in the chat are asking like hey when is create async or how is that like how's the um what it called request for comments
[00:15:48]  rfc yes um what when is that coming out what how's that coming along and the truth of the matter is we have to look at create resource and deconstruct it
[00:16:00]  to its uh its pieces and part of that is separating the mechanism for serialization and data propagation and even the streaming from the resource primitive itself right if we're going to simplify
[00:16:13]  create resource and simplify the async propagation we got to work on the reactive graph side which um milo's kind of started some work on he did some stuff with bubble i
[00:16:21]  think we need to do some optimization there still but for those interested solid signals i did make the repo public it's not ready yet i haven't done like a mpm release
[00:16:33]  um there's been some great people working on this project um uh tanner helped a lot early days with uh testing the store capability um rahim from maverick framework
[00:16:45]  worked a lot on the core reactivity as well along with milo and myself and there's there's still work to be done um one of the coolest things about this project
[00:16:54]  is you actually see this bubble reactivity which is it's like we've gone through three stages it started with um uh it started with reactively and then we put it
[00:17:06]  in this repo and then we updated with with some work with uh rahim and then we uh um then we moved it to then he used that same basis for at bubble um
[00:17:18]  milo did and added more stuff and then we brought that back in and the end result i think i talked about this before is a reactive core primitive that doesn't have
[00:17:27]  effects in it that is in theoretically universal right and this has kind of come up as a lot about the foundation of what could be a react signal primitive for the browser they're
[00:17:36]  still working on the official one but this is something that we'd already been doing for uh a couple months or a few months before this whole thing came up and that you
[00:17:45]  can kind of see the separation between what could be truly universal here and then like what is solid specific um in any case a lot of good work here some updates to things like
[00:17:57]  stores that we're kind of playing around with uh a very basic version of create async this is not the primitive that i was showing on stream but just the kind of
[00:18:06]  basic idea but the idea is we need to separate this stuff out okay and if we're going to separate this stuff out um we need to kind of build up all the different
[00:18:18]  pieces independently of each other and the thing is so we got one side of this reactive stuff but we need the serialization stuff because of this work that we're doing around the
[00:18:25]  performance optimization uh with the aurora funding so it made time it sends to do 1.8 release i know there's a lot of people who are like asking for features
[00:18:34]  or like you know adding stuff to solid i am very hesitant at this point in 1x to actually change stuff very much unless it's like a clear deprecation path and
[00:18:43]  even then we there's some questions that i think it leaves open so this is mostly about internals and setting us up better for the future okay so um it's busy
[00:18:59]  i mean that is right now but those don't have to be mutually exclusive in any case um it's interesting that you mentioned language agnostic not just um i mean that
[00:19:16] 's obviously much trickier but a lot of the work uh people been getting brought in the project it started a lot of framework authors like myself and rich harris and you
[00:19:25]  know dominic annaway um but recently like especially with milo and some of his kind of group of people uh shay from bubble um guys work behind starbeam
[00:19:36]  it's gone like they're having conversations about reactivity in other languages so looking at stuff like go camel and like um like different projects in in different languages and using that
[00:19:47]  as inspiration for the signal spec so there's a lot of work really going on that's really cool um so i am looking forward to how that progresses yeah the challenge here about
[00:19:59]  the language agnostic piece is like and this is something coming up a lot in this thing and i try not to detour too hard but with signals in the browser
[00:20:10]  you know there's a difference between there's people like the framework authors who care about the mechanical aspects and want to have control over it and then there's like the most people
[00:20:19]  in the rx side really care about the contract like about the api and it's very hard there because the api is kind of part of the point of cont
[00:20:28] ention like that's where we all differ right like svelte doesn't want to expose the signal as a thing but you know like you know what i mean like that's
[00:20:37]  the wrong wording they don't want you to ever hold an object that is type of signal but like you know in solid actually a very similar thing we don't we don
[00:20:49] 't want an is signal thing like like it's interesting that um the that the interface makes it like the does the challenge with the interface is really we want it as a language
[00:21:02]  level feature i think ultimately and it's going to take a bit to get there because i think it actually requires its own syntax so maybe javascript will never get there anyways
[00:21:15]  yes i should read the question before i answer it that is a good point um rather than just like in my head i'm like i'm putting on the screen so people
[00:21:23]  can read it but not i people view from different devices and you're right that is thing yeah so i mean that's what the question is what does this look like anyway
[00:21:40]  a lot of interesting work here but this this 1.8 release i said is kind of a tangent it's kind of like right now there's like myself and nikil which
[00:21:50]  you saw the v comp working on trying to get solid start stable myself and alexis working on trying to do future uh solid start uh research um like into like performance
[00:22:03]  and stuff which is largely what spawned 1.8 and then myself and milo and them working on the signals stuff uh for solid 2.0 so like we we are
[00:22:13]  there's there's multiple things going on right now 1.8 is a is actually about supporting mostly 2.0 future and the experimental stuff so the biggest feature and i
[00:22:26]  want to talk about this and maybe we can look at this is we changed the serialization in solid solid's had promised serialization this custom resource serialization thing forever but we
[00:22:37]  hit this interesting problem and that problem is that when you have islands well actually i can show you i i think i i think you can picture this i actually um astro
[00:22:54]  hacker news is it running right now like two streams ago no it's 3000 right yeah i know what does astro run on do they use the 5173 5173
[00:23:20]  four three two one there we go i i can just show this example right here yeah thank you chat all right um what i'm getting at is you everyone's seen my
[00:23:39]  the silly uh um nested comment thing and luckily for us us with this recursive islands pattern for this because we're only compressing because we're only compressing the
[00:23:53]  the comments we actually don't need to pass this through and this can be completely server rendered right so um let's see if i let's see if we can see it in
[00:24:02]  astro i mean it would be the same it's all start it would be the same basically the same thing but if we can see this in after it would be helpful
[00:24:09]  um yeah see props empty object okay and the reason props empty object is because essentially you know i got a lot of garbage here from when we were playing around um is because
[00:24:25]  our toggle component has no props we don't pass anything through so um it's able to server render the children and not serialize any data but in a situation where we actually
[00:24:38]  had props that we did have to pass through um because if you notice this is a recursive pattern let me see if i can find a story component i have a lot of
[00:24:46]  garbage in here from when we were playing but yeah or no the comment component what we do is we actually map over the comments and then like basically put another comment component in
[00:24:58]  and toggle it and do this thing but if the toggle actually had something like garbage like something we had to serialize uh now typescript's going to complain to me but i
[00:25:09] 'm hoping that astro will let me get past this if if i do this what i'm expecting to happen is where we had props empty object before we now have um
[00:25:23]  something else props equals quote garbage quote something something okay anyways what you're seeing is we're now serializing the props for the island because that's how islands work we have to
[00:25:35]  serialize the props to get them in and um uh sorry wrong wrong window um my what is interesting in that recursive case is pretend you did have to pass the comment
[00:25:50]  through like so you went comment i'm gonna let let's make this real let's let's pass the comment through and if you notice the comment has comments in it because it
[00:26:02] 's recursive right so if we refresh the page and now we look at our props we're gonna see the serialized version of the comment but my theory here is we
[00:26:20] 're also going to see the serialized version of all the children comments as well because you have to serialize not just the comment but the comments on the comment and if we
[00:26:31]  actually look through this we're gonna find well actually we can do our little we can look at the network and see if we can we can prove my my point um pick
[00:26:41]  something deep here what should be should terminate with an empty output right if we go to the network tab here and look at the rendered html where is it js
[00:26:57]  let's do doc and we look for this text it shows up four times and the reason it shows up four times is because it shows up for itself plus for each ancestor
[00:27:15]  and this um is kind of a problem when you don't have denormalized uh kind of like prop handling the with with islands it's more prevalent because if you think about
[00:27:28]  it if you make your whole app into a single um blob like a spa you're you basically you know you have to serialize all that data you have like no choice next
[00:27:39]  json but if you have islands you only need to serialize the props great benefit here is you don't have to uh you know serialize all the data that you
[00:27:49]  don't need on the client but the interesting part when you add the islands is is if you're sending that same data multiple times you might have an issue now if a lot
[00:27:58]  of systems like even solid before had this really simple shallow thing like if it gets the same object exactly we could do this kind of serialization trick because we have like a centralized
[00:28:09]  serialization i don't know if astro can do that maybe not but but but with um nested this becomes a whole new level of complication right is everyone following
[00:28:22]  along so far right this this is not just um like astro like solid start has this issue as well um and i think a lot of islands solutions um right so like
[00:28:44]  while yeah we can serialize promise has been doing it for years um deduping is interesting and deduping is actually tricky when you have streaming because like a simple
[00:29:00]  serializer you're you're like doing async stuff so like stuff's coming and going like you're you need to know like through the lifetime of the request if you've
[00:29:11]  already serialized something um so basically we wanted to come back here and not cause this kind of duplication all right it's reading some chat or just serialize it
[00:29:39]  at the rate and use contacts advice i heard for her sees we okay we're not we're ignoring these comments for now um yeah i know i know you're not yeah
[00:29:57]  i mean yeah it solves the issue but we're also kind of yeah so the the the there's probably there's probably some smart solutions to this um one of the challenges
[00:30:13]  i had was like solid actually uses fairly simple data so we were actually like it would be pretty easy to kind of encode the path that's what i used to use in
[00:30:23]  solid but um cerevale which is the serializer actually supports stuff like sets and maps and things that might need to be initially initialized over multiple like steps so we went
[00:30:34]  with the simplest solution for now which i'm going to show here and we'll kind of play with a bit so i have solid um i have solid repo with the latest and
[00:30:51]  we can kind of look at this let me actually where's astro we're going to stop this for a second you you hopefully it's clear what i'm getting at i
[00:30:59]  actually haven't run it on this computer yet sorry i just installed let's uh let's let's make sure the tests are passing um but uh let's also do the
[00:31:11]  build for me essentially we we just we came up with a way of just both keeping a weak map on the server for dedupling purposes and then keeping a reference array in
[00:31:24]  the the client that can use and that way if the same uh references come across we can point to the right thing combining that with a serializer that's based on key
[00:31:35]  value um and a system uh so we can go you know right to this key this this value and it we like instead of just serialize a value have a serializer
[00:31:44]  a user that's aware like you an instance that goes with the request we're able to handle deep nested deduping and um deep nested like promises which is something
[00:31:56]  i'm played with so i think we should actually play with it here but first what i'm gonna do is go pmpm um was it filter not example notes i think
[00:32:06]  it's solid ssr built yeah build example stream let's do that example stream this is how i often test ssr locally i have this really simple app um
[00:32:25]  and it's it's on localhost 8080 yeah it's it's a this example's shown up a few different places i think it might even be in the solid
[00:32:39]  tutorials um but let's what it there's three pages the page with a up counter i use this usually the show suspense see how it's still updating while the transition's happening
[00:32:51]  um simple update field and then this one has the the cascading uh data load okay so let's look at what we're getting now for this because it's a
[00:33:07]  little bit different now we have our startup hydration script um we have uh this this expands a lot deeper i i was talking to alexis about getting the function calls and using
[00:33:18]  arrow functions we don't have to worry about all the versions but this is some this is some data that this is some serializable of helpers but then yeah what it
[00:33:27]  does is it sets up um a registry and i said this this what i don't like about this is it uses a bit more space um in in the thing in the like
[00:33:37]  showing using the references but it does give us the ability to dedupe um stuff so basically what you're seeing here is these keys are getting set this is like a helper
[00:33:48]  for initializing a promise and then later on what you'll see is as the stuff streams in we get our finished template and then well it's not fully finished there's
[00:33:57]  a second stream template in here uh right here which is the loaded the first loading state but you'll see that it resolves this promise with this data switch streams out the code
[00:34:06]  to move the suspense boundary to place later on streams in the the last bit of template resolves that promise and resolves the suspense now suspense is actually just a the suspense boundary
[00:34:18]  is just a promise that resolves which is nice because we got rid of all like this the special stuff um what's really cool about this is that it's there's
[00:34:27]  an internal api that i still haven't figured out what i want to do in terms of exposing it but the the way this works is we just make a let me go
[00:34:37]  solid um source server rendering um it's yeah it's just the serialized call um basically and if i go into dom expressions where is it top level what you're gonna
[00:34:58]  see it's simplified the server code actually a lot i don't know if many of you spend a lot of time looking at the render to stream server code but um now it
[00:35:08] 's basically like create a serializer use the render id to scope on data push our tasks into the queue on done check that it's done and because this basically the serial
[00:35:22] izer now tells us when the stream is done right we'd say like hey we're done rendering and then the serializer goes okay i'm done serializing and this lets us
[00:35:31]  like have dangling resources and stuff resolve properly which is something that we've kind of missed in the past but it the serialized function what used to be a lot more
[00:35:40]  complicated now basically we we mark whether this promise is something that should hold the stream initial flush like this is the defer stream feature of the resource and then other than that it's
[00:35:54]  basically just serialize the promise or in this case if we're going to wait for the stream anyways just serialize the value when it when it resolves but that's
[00:36:03]  it like that that's what we we can do now which um if you're wanting this blocking promises are the ones we wait for before starting flush why this is important is because
[00:36:13]  if we we have to respond with the response headers at the beginning of the stream once we send back a response you can't do it so some promises or resources need to be
[00:36:23]  resolved before you send back the streaming response so this is just our way of you know marking it um but yeah this this i mean i probably let's list this like you
[00:36:38]  see the serialize function here if i if i go back to um this is solid but let's go dom expressions and go to main branch packages dom expressions source server um
[00:36:57]  besides having like a bunch of other helpers let me see here a lot of this is mostly same like we used to like do a bunch of weird encoding stuff in this this
[00:37:12]  right resource is the old version of this like you can see similarities but there's just i can't even explain how hacky i was playing around with the serialization we
[00:37:25]  used to use arrays and have the first element either be the data or um and yeah or uh the promise and then the second element be the resolve function like it was a type
[00:37:37]  of promise serialization but it wasn't nearly as neat as this so in any case what i'm getting at is this serialize thing is pretty powerful because like we can
[00:37:55]  do stuff that is kind of goofy like to be fair this isn't going to change this data too much but let's let's let's let's play with this uh
[00:38:08]  for a second let's go in and um look at um my solid ssr example right this is the example we're looking at it has a shared folder because this is
[00:38:21]  how i show ssg streaming async like all the different solid render methods inside here is a router which is not solid router it's just i made a router in
[00:38:30]  like one file very simply using switch or something am i using switch what am i using i don't even remember this is like the most basic router someone could make yeah i
[00:38:45]  mean let me look at home i think our app sorry link link link link link probably should update yeah it's just a switch match when matches and then i had the routers
[00:38:59]  expose the matches okay so anyways the profile page where we had all that data was doing this thing where it's like new promise um what's what's cool about this is
[00:39:11]  like we could add something on here now i mean i'm not saying we would but we could add something on here like um what do i want to do something okay and
[00:39:30]  then we could like inside the promise do new promise um what do we want to do resolve i'm like this is the problem with like when i'm screen is safe for
[00:39:49]  streaming it's just like too much stuff going on just just let's maybe we can format this maybe it's long enough that it goes to prettier being weird it's because i
[00:39:57]  have a it's because i uh have something that isn't proper anyways let's just go on a new line so i can see what i'm doing um new promise yeah
[00:40:11]  okay that's new promise something something okay object fine okay and then presumably um i'm just gonna do the same thing again but we'll put different data and we'll just make
[00:40:27]  it go set timeout which actually means i do want the it doesn't matter just do this do this make this into curly braces that into curly braces we'll just like
[00:40:48]  resolve with some something else i'm like just losing track of all my brackets right now it's fine this is this is a set timeout this is 400 or let's
[00:41:05]  make this longer let's make this 1200 and then this there's no comma here okay anyway prettier please work no okay but okay let's let's and instead of john let
[00:41:31] 's just resolve like okay now hopefully this works the way i think it's going to work but what we're doing is we're nesting a promise inside a promise um so
[00:41:49]  when the promise resolves it resolves with a data structure that has a promise in it and again you're like why are we doing this it probably isn't going to
[00:41:56]  affect the ui timing but what's cool is you can actually see um oh can i get in here fast enough okay i didn't get in we let's let's make
[00:42:10]  the last time out like much much longer sorry not astro um let's make it like uh like six seconds or something sorry so you can see oh right i have to
[00:42:27]  build it again sorry this is not like hmr this is like my simple tester thing okay so now you can see the thing switch into place and then wait for it
[00:42:40]  oh it's interesting what that did because nothing it didn't re-render but it like the that's interesting i wasn't expecting the body to do something that is interesting
[00:43:00]  what is going on there because the page doesn't reload huh yeah that's interesting it might it must be because of the way that we append the stuff to the end of the
[00:43:19]  body that it causes it to like have to recalculate that's interesting good to know anyway but what you can see here is like six seconds later the hey uh
[00:43:29]  gets serialized and comes in over over the wire so like you know this just makes the process generic which is pretty powerful because it means that like it you don't need create
[00:43:42]  resource for this in theory in fact um if you if you look on uh on the github alexis was like he knew he knows that i'm not necessarily just
[00:43:53]  going to like add a new feature right now but he's like what is a crate resource from a streaming serialization standpoint like we need the resource read to do special stuff
[00:44:03]  for suspense streaming so that like it it like triggers the view properly so there's like there is a need for an async reactive consideration but he was like what if you don
[00:44:15] 't care about that what if it's like you just want to grab a promise and you don't use it in the view it has nothing to do with anything you know
[00:44:25]  he like all all um create resources doing is using solids create unique id which is our like our our id generation that's stable on both sides and using the serialization so like
[00:44:40]  he he basically made a crate server value that's literally if there's a hydration context that has the ability to like load stuff um create a new id and there's actually
[00:44:51]  a shortcut for creating this id he just did it in line if we don't already have this id load it so this is the client side so yeah so this just increments
[00:45:02]  the id um he i guess he didn't even he could have used create unique id interestingly he did it manually um but then on the server side he just called serialize
[00:45:14]  with that id and the value um and his example here was that when you have math.random on the server or you know date now on the server it's gonna generate
[00:45:29]  a new value in the client when it runs the first time here by just making this server value um you know it'll be stable on both sides so this was his joke
[00:45:40]  about he called it baby resume ability um because he like he didn't use create unique id here but it's basically the same idea he could have just gone create unique id serial
[00:45:52] ize at that id create unique id read um from that load from that id and that's that's basically how easy this is at a low level to be able to send
[00:46:06]  the data across the wire um and have it stabilize so basically what he's getting at is like we could in theory just like serialize any value any part of the graph any
[00:46:16]  anything just very simply um as long as we have some kind of id mechanism it we can now just send it across the wire and have it you know be there so this
[00:46:26]  this isn't actually resumability in the true sense because you know but you could picture like if you had something expensive you you know like uh expensive calculation you can run on
[00:46:38]  the server and then it'll just be present so like a memo like pretend you just went through and serialized every memo for some reason i don't know why but like then
[00:46:45]  you would never run that code at hydration time so like it's it's it's it's it's that kind of scenario i mean obviously you have to serialize the
[00:46:56]  reactive graph if you want to actually like have it be reactive so this is a bit over simplistic but this this is basically what he was kind of playing around with right so he
[00:47:08]  he's very excited about this as i said this came across mostly because i have that problem uh with uh basically serializing islands props that i was talking about a moment ago
[00:47:22]  but uh you can see that by having a generic deduping streaming serializer you can do a lot of stuff um not just deduping uh resources and promises deeply nest
[00:47:33] ed obviously with serial valve support we get support for other types of data structures like if you want to serialize a readable stream for some reason or a blob or whatever like once
[00:47:43]  you get down this path you start trying to figure out how to serialize everything i think as i said quick is an example one of those frameworks which just tries you know
[00:47:50]  tries to figure out how to serialize everything but as i said we were able to incorporate this right into our out of order streaming setup um which is something that we already had
[00:48:00]  set up right um it's both pieces it's both being able to serialize the the these pieces in a reasonable way and having the the reactive graph that understands suspense and
[00:48:12]  inserts and inserts and all that stuff to do the out of order streaming um yeah anyway let me catch up with chat here how are you doing all right wait tom says it
[00:48:30] 's not streaming i don't know yeah it's built right into the core so yeah in in theory that ain't that angular uh angular signals project maybe like with a little bit
[00:48:40]  of work if they set up the share context and stuff properly they could have streaming out of order streaming angular jsx signals or whatever yeah all right um we use solid for
[00:48:55]  dental practice management yeah this is one of the things i want to work with in 2.0 simplifying um the difference between these crate computed is almost definitely getting deprecated
[00:49:08]  i almost every release every minor release is solid like 1.8 1.7 1.6 since 1.5 i've been like waiting to see if i want to
[00:49:16]  like introduce different primitives or give patterns and deprecate create computed create reaction is special and very low level that no one should basically use create deferred again no one should
[00:49:26]  really use um it's tricky when you offer these primitives um some of them now that we have a better structure i'm gonna probably just move out a core so they're
[00:49:35]  less confusing to people because like they don't need to be there like create deferred they don't need to be there but someone might have that use case and then i
[00:49:42] 'd like to show that there's a solution for it good question how streams are when the connection breaks well yeah i mean that's that's this is something that we have to
[00:49:55]  get better at i think we all have to get better at the browser does tell you when the stream fails so you can kind of recoup but it's hard because like
[00:50:06]  you you can't really read like what are you going to do you can in some of the cases you can say yeah re-render it on the client at this point but
[00:50:13]  you really should just request the page again realistically um you know we have error boundaries handling so if something throws we catch it then we can do it but i'm i'm basically
[00:50:26]  i i need to test more of the edge cases in this scenario um but it it is definitely it is part of that set of trade-offs where like you're extending the
[00:50:39]  original thing on the other hand without streaming you'd be waiting for that last thing to finish before you sent anything to the browser you know i wonder if that i wonder if we
[00:50:52]  can see that yeah i mean hmm i'm kind of curious where we sit on this now because in the past i only cared about resources that were finished in order to do
[00:51:05]  async rendering which makes sense because like i was i initially start with async and then add streaming on top this sort of is a streaming first mentality so my gut here is
[00:51:16]  if i start the non-streaming renderer it's going to have to wait that six seconds before it shows anything because now it's the same thing let me let
[00:51:25] 's see here one two three yeah see yeah because if you committed to serializing that data then you can't respond with the page until all the data is loaded loaded obviously
[00:51:42]  the six seconds is a bit extreme but i mean that is the situation you are when you pick up a non-out-of-order streaming framework today you next 13 support
[00:51:52]  streaming with their rcs but like if you weren't making rc like a spa next or um you know again remix support streaming now because react support streaming but like previously like
[00:52:00]  saltkit i can't remember where they are on streaming but like basically if you don't have streaming you would have to wait for you would have to wait for everything before
[00:52:07]  you could show anything right so like yeah i mean the request could also fail while that's happening yeah yeah i i often i show you everyone's stuff in incognito
[00:52:36]  yes this is accurate salt start needs more time solid is good it's pretty good i mean we are making some changes in solid 2.0 to async primitives but like
[00:52:46]  the core of solid is you know pretty good we are making there are some semantic changes anytime there's 2.0 like some stuff happens but solid 1.0 is definitely production
[00:52:55]  ready and good very stable been for years what about serializing component well i mean what is a component is it a function call i i was taught we i mean islands basically
[00:53:16]  have to serialize the jsx output or the html but i mean what does that put um you know this is this is the basis here when we have this
[00:53:25]  basis that now we can answer these questions another thing i had on my list here is like serializing the templates but like we can build that as a layer on top as well
[00:53:34]  right like so i i'm i'm okay with this for now it is part of the question and the part of the research that's happening yes yeah and that's what
[00:53:51]  i'm getting to like what is like it it's a little trickier because the way when you serialize signals the way you have to do it is you have to serial
[00:54:02] ize its dependencies and um you could do it like because we run it at runtime we can do it like um but basically as we collect the dependencies nodes we'd have to
[00:54:14]  like give them all a unique id and with the signal itself serialize the signal and its dep and its dependencies so that when um one of those like basically we have to be
[00:54:27]  able to like trace through the lookup so like when one of them wakes up we know the wake up the signal and whatnot i did talk about this during my like resum
[00:54:36] ability stream um earlier uh a bit of about an approach that could be done without causing you to have all the dollar signs like resumability without the dollar sign stream but
[00:54:49]  yes the the you're seeing the building blocks here we're good now right aws um is still it now finally supports streaming i think i think i think i think i
[00:55:14]  think that was the thing yeah it came up it happened in march remember there's like this big versell made this big announcement they're all like yes we now have streaming with
[00:55:21]  our thing and they did this crazy like i say it's crazy but it's ingenious way of doing this proxy setup where they could do streams through their aws server functions
[00:55:29]  and they've been working on it for like six months or at least four months like since the fall and they released it and they're like look here now you can actually
[00:55:37]  stream in our server list functions even though they're on aws and then one week later aws released it like they're just like oh yeah now we support streaming it's
[00:55:45]  like you know probably a little frustrating because like it took years it took like a decade like for aws to support it felt like forever okay there is actually already a port
[00:56:03]  for swc we haven't done the server side part but the client side um does exist my biggest um caution here is like i'm like we're still working on changing this
[00:56:14]  stuff but like milo who's behind like the reactivity 2.0 um started a project uh and there is an swc plugin the client like if you're just
[00:56:25]  using solid in the client you can use swc if you're not doing any ssr stuff um what is it like uh s i i i don't even know
[00:56:35]  what the what it's called let's try swc oh swc plugin jsx dom expressions here you go let's just drop that in chat do bam okay apparently the client
[00:56:49]  side stuff is is pretty much finished there's also been a lot of talk about bun this last week everyone's wondering what the bun stuff that and i don't know when
[00:56:58]  to address this exactly but i just throw this out here right now for those people wondering about bun bun supports like most tools the basic jsx compilation if you want to use solid
[00:57:11]  and bun sadly you either need a custom compiler which jared started one but kind of dropped um you know to be fair he was it was right before bun went open source he
[00:57:21]  literally the week before was like oh i'm just gonna build a solid compiler it's like sweet but like he didn't have time to kind of invest in that or you
[00:57:28]  basically have to run babble and bun if babble works in bun then you're fine or swc i guess for the client side stuff but essentially the scenario here is you
[00:57:38]  cannot just use the basic jsx transform and get the solid experience technically you can because we support it in this way but i'm never going to recommend that to anyone and while
[00:57:47]  that's been fine for like the fable and the reason people in other languages who kind of have to make do if you're in our ecosystem don't waste your time
[00:57:54]  you know i know there's some dino people like that too it's it's it's like this this can never be the full solution right it's it's it because
[00:58:05]  the jsx transform the standard one is a transform it is special it is not standard um it can't handle all the scenarios will never handle all the scenarios so pretending like
[00:58:19]  it's like the standard thing you know is is basically a pointless exercise because it's like uh you're gonna need a compiler they just happen to choose to implement this compiler because
[00:58:32]  react uses it you know what i mean like so i'm sorry basically we need a bun plugin or wave running babble like there's an example in an article that was written
[00:58:43]  with bun and svelte where they just put the compiler in a bun plugin and they called svelte compiler well if you can call babble like that then you
[00:58:51]  can do the same thing right at that point you're kind of exiting bun's performance zone and getting into like you know you know third-party compiler and that's the scenario
[00:59:02]  you obviously when people build their tools for react react's going to have an advantage but that's not the other tool's fault that's just the reality of things it's
[00:59:11]  not any more standards or any more you know less work or less you know like it's it's just like the popular solution was implemented all right yeah yeah yeah yeah if
[00:59:35]  that's the case i just i've been seeing a lot of conversations where people are trying to do stuff they're like how can i set up my jsx for uh um
[00:59:42]  what's the term pragma for solid and it's like no just don't don't go down that thing you know just don't go there i mean hopefully typescript
[01:00:09]  ignores um the jsx right like we can't just typescript again is another one that only compiles react or pre-act or you know that flavor of jsx
[01:00:20]  so if you say jsx preserve then you have to run it through solids compiler essentially yeah js preserve is the only way yeah okay yeah it's just it's just not
[01:00:34]  the same thing we use jsx because we like it not because um and because all the tooling other than the compilation is actually there for us like prettier and stuff but the compilation
[01:00:49]  is different we don't use jsx because we like the output of it we we're not big fans of hyperscript over here um you know i i mean and
[01:00:59]  the funniest thing is a testimony of this is when we see svelte 5's compiler and we see view vapor they're all going to be compiling to stuff very very
[01:01:08]  similar to solid not similar to to to um what uh jsx compiles do what even like inferno couldn't really use what jsx composite like you could but it's
[01:01:17]  super deopted so basically the jsx compilation is just not set up to do optimal stuff so as i said people barking down that path or like tag template literals
[01:01:29]  you know like as a standard without compilation they're just they're just missing the fact that that just can never be the optimal way in fact i mean lit 3 i mean
[01:01:44]  this is i i i was thinking about talking about this in this week in javascript new lit template compiler i and they're adding signals like i wonder what they're doing
[01:01:55]  here i'm why would you need a template compiler for lit if tag template literals were enough okay just throwing that out there okay like so i'm sorry for those people
[01:02:10]  who are like standards and like no build you guys aren't living in the real world um unfortunately uh just like not even remotely in there and because like the reality is it's
[01:02:22]  either built behind the scenes automatically with a pre thing like indino like you have typescript so you have the uh typescript jsx transform so you can like kind of
[01:02:29]  pretend it's standard but it's actually doing all the work or you're doing all the work in the open but in both cases you're doing all the work there's there
[01:02:37] 's a build right it's yeah yeah yeah yeah i'm yeah it's just yeah sorry it's because a lot of i can understand when these new platforms come out uh cloud
[01:02:53]  flare workers dino um bun they all want to like be able to just jump right into the ecosystem and i i feel and then they're like okay well how do i
[01:03:02]  do this where's the standards but the reality is the standards on this kind of stuff is not standard um so like pretending it is is is just it doesn't make any
[01:03:17]  sense so angular had this thing with their new templates as i said they talked why they didn't try to assess because it's runtime i had to laugh because they clearly know solid
[01:03:33]  compiles it yeah yeah yeah i mean it's there we're kind of fighting a little bit uphill but i mean quick um come come well actually quick we're gonna look
[01:03:44]  at something a little bit later when we talk about vconf manu said something about quick not using a vdom i don't think that's true and we're gonna prove
[01:03:51]  it on stream so let's let's find out i don't quick doesn't use the standard jsx transform though they they need to do special stuff there um because of what
[01:04:01]  they do yeah yeah but have you ever seen those like super light jsx to dom update libraries when they're on the client side like if you're on the server side
[01:04:13]  you're fine whatever like who cares although you know what on the server side it sucks too unless you're concatenating strings like but even then you have all the function wra
[01:04:25] ppers from performance standpoint the standard the stand like we we you've seen what solid compiles to on the server like i don't think jsx is good on the server i
[01:04:32]  think jsx standard transform is good nowhere like it's just not good um because even like one of the biggest things the vdom is because they're like they're calling
[01:04:42]  all these function trees and doing that would they could just flatten it out into string concats i mean calling the function call isn't that bad but yeah yeah right like doing
[01:04:54]  no builds up in prison is easy and fun not to worry but there's reasons not people don't start compiling for fun yeah yeah because yeah fresh is working very much in
[01:05:06]  the dino ecosystem but they still had to like go in there and do stuff it's not like jsx comes out in the browser and works you like something or types
[01:05:14] cript you have work to do yeah so like it's fine but yeah sorry how did this turn to like a jsx is but the funny thing is jsx the language is
[01:05:29]  pretty powerful it's funny because there's a whole group of people that don't like jsx the language and i'm just like you guys are crazy you i mean i get
[01:05:36]  it if you have a more restrictive dsl then you have more power to analyze and do more with it so there's benefit there but like the whole like my dsl
[01:05:45]  is an html is just html is also garbage so it's like at that point i'm like just give me the thing that gives me the most control you
[01:05:54]  know like because the all the perceptions around this stuff are just completely wrong when it comes to actually like technical merit so you know whatever i do think that um that like the
[01:06:11]  it would be nice to be easy right because like on the other side i think the reason that the no build stuff comes kind of out is because it's like man wouldn't
[01:06:20]  it be amazing if i could just do it like back in the day right i opened notepad plus plus throw in some html call it a day and with a
[01:06:29]  good enough compile behind the scenes build setup thing where you don't have to do much manual intervention it can feel like that again right i mean sometimes i feel like that when
[01:06:37]  i open astro um but like i don't know you know everyone knows me here i i i can't unsee what i've seen so like it's fine to do
[01:06:51]  that because it's convenient but there's the and it's probably a good thing you know it makes it easy it's sometimes why i just pull astro out a bunch
[01:07:00]  for like easy things i'm working on but it's also why i can never take those arguments actually seriously at all okay so um a little bit on the jsx stuff forget
[01:07:16]  how we got so off tangent there we're talking about compilers and that's thing yeah and the bun stuff yeah i'm looking forward to solid bun integration there's
[01:07:24]  some problems to start today um because of some features that i can't turn off that i don't know why nikki will turn them on in the first place but given that
[01:07:31]  we're like replacing that core i think things will get easier with solid 2.0 beta uh or solid beta 2 sorry getting all the numbers messed up not 2.0 beta
[01:07:42]  solid beta 2 um so i'll start beta 2 god um because of just the rebasing of the technology um i haven't worked on it as much the last week or
[01:07:50]  two because i've been traveling and doing some other stuff working on 1.8 but it's like the next thing i'm back to again uh so let's continue with some
[01:08:01]  stuff okay all right what else is coming out of 1.8 um actually i should check twitch sometimes people subscribe on twitch and i miss it oh wesley coder subscribed
[01:08:15]  tier one they subscribed for 13 months oh thank you wesley coder yes lucky number 13 indeed i i i i missed that comment earlier and i was like i i didn't
[01:08:27]  have the context for it but now now i understand what's what's going on i'm sure that was like ages ago um um but yeah um it's it's awesome
[01:08:38]  to see people being involved in the channel for so long and also um god i suck at this uh matt patch any sorry uh thank you for subscribing with prime as people know if
[01:08:52]  you have amazon prime you can give it basically doesn't cost you anything you can give your favorite streamer a sub and it goes towards us and you can just do that
[01:09:01]  every month um so makes it really easy um but yeah i don't usually spend that much time on twitch on this stuff but i do appreciate the support for the channel it does
[01:09:12]  help over over time um you know paying for the stream yard costs and stuff like that um stream yard's not cheap uh anyway let's continue on a bit here all right
[01:09:39]  all right so let's let's talk let's let's continue we cheap guys use obs i use obs as well but yeah this is why i'm trying 720 the stream
[01:09:49]  is fine right i can just like save half the money here um but yeah um it's it's very convenient to just have all the banners and everything built in i'm
[01:10:02]  sure there's like a a whole tool set 1080p what got me thinking about is a lot of the when i'm a guest on a lot of streams um and a
[01:10:10]  lot of things like my video comes in at 720 i gather the whole stream is 1080 but then like the individual cameras are are 720 but i like i don't know how big
[01:10:19]  of a difference this is going to make yeah but like yeah this handles all the dual streaming stuff for free i i would actually have to figure out how stuff works which is
[01:10:31]  sounds like laziness um to be fair it is a bit because i i'd rather be working on other stuff that's solid related um then do this but yeah i mean we
[01:10:41]  can look at this the chat feature though is makes very convenient okay hydration we got some hydration fixes coming in um had this recurring issue where people had like lazy components where like there
[01:10:57] 'd be like children beside lazy components and it would break hydration and um also top level fragments and people have been complaining about this in astro for a while so i actually
[01:11:08]  looked at it and looked and when astro 3.0 came out and i actually found out that it wasn't actually on solid side it was in this astro renderer
[01:11:16]  um doing weird stuff it wasn't even hydrating it was like breaking stuff it was like re-rendering stuff from the client um which scares me a little bit considering how
[01:11:25]  many people use astro in production with solid uh but maybe um they code in such a way that avoided the problem because they hit it and then they're just like oh
[01:11:36]  this is weird and they just like wrapped it in a div and called it a day but now it's actually fixed which is big um so this is good this happened at the
[01:11:46]  beginning of september i already talked about this a little bit it was actually a you know it took a little bit of element walking but this all had the same code that
[01:11:56]  i had to think about and work on when i did the islands for salt start so you know not too not too bad good practice so to speak but there's been some other
[01:12:07]  ones with lazy components and a lot of this comes down to the way that solid does something i call onioning um which i've talked about a bit before but it's
[01:12:16]  tricky when you can have components and components and components and components and like top level there's a fragment so basically you have a nested component tree but the final html
[01:12:30]  is mostly flat like i don't i don't know if this example actually shows it at all but like no it doesn't because there's nesting here but like it
[01:12:38] 's quite possible that you can have like if we didn't put this in a ul for example it's quite possible that like all the elements for this app could have been at
[01:12:48]  the top level even though the components are nested and there's things lazy loading in and out and solid doesn't create dom elements when it hydrates but what it does do
[01:12:59]  is try and reset up the reactive graph which means it executes and all the code coming down but then when it gets the part where it says create an element or sudden
[01:13:09]  that you know like that kind of thing it just basically skips it and for diff reconciliation it basically solves it basically goes through and collects everything um for all the uh like arrays
[01:13:21]  and arrays and arrays and arrays you know when you're returning all these fragments but then it like doesn't it matches up the elements and it doesn't try to uh um
[01:13:33]  insert them or something because like they're already inserted it basically skips a diff the challenge is the when you have streaming the state of the initial page that you see might have
[01:13:43]  like this loading thing like all right i turned off the server give me two seconds uh oh no it's because it's not streaming right now uh let's build no let
[01:13:55] 's start stream okay you'll see like the loading states and stuff like basically there's intermediate states that come in through the html before um before it's like all
[01:14:10]  done and for that reason um what you're looking at at the time that you start partially hydrating something um might not be the final state but you need to know what
[01:14:22]  the initial state is um so that when the next change happens uh that you can like diff it properly so if something runs once and sees you know the lazy component not there um
[01:14:36]  or sees a loading state or something and then like it picks up again like we have to make sure that we can get the state that's saved as like the previous value
[01:14:49]  in these effects essentially closed over to equal what it should be at the beginning of when you do the actual work which sounds kind of complicated and it is kind of complicated um the
[01:15:00]  i was using all these mechanisms uh of trying to like get the dom elements uh you know from the calculated array let's close that and i realized that none of them actually worked
[01:15:13]  and all i needed to do was actually grab the dom elements out of the range at the whenever it runs which is a little bit more expensive in theory but it means that
[01:15:24]  we're never out of sync which fixes a whole bunch of weird issues that i was facing with like portals and stuff i'm actually pretty stoked about this one it might even
[01:15:36]  fix this one right here that i haven't looked at yet but like if it fixes this is the oldest issue uh the open oldest open bug on solid repo we have 50
[01:15:46]  issues right now most of them are enhancement but the oldest open bug here um december 10th 2022 portal overriding lazy lotus sibling after hydration under specific conditions like these are
[01:15:58]  kind of weird edge cases but um and it also addresses um another one of these uh duplicate um components showing with lazy component or something anyway um more technical than you probably need
[01:16:19]  to see but it it's i'll show the code anyways just because that's what we do here but what i ended up doing is if we go dom expressions is do
[01:16:34]  do source client there's this block here after we when we realize the incoming values in array and the reason onioning matters is because we have to re there's two ways
[01:16:50]  to handle fragments um you can either put in a bunch of markers or you can keep track of the array of elements or like the range of elements and the problem with putting in
[01:16:59]  markers like we need it initially in hydration to gather them back together but the problem with markers in general is that when you have this nesting you can have markers next to markers
[01:17:08]  next to markers next to markers and you have to make sure that they match the front and the end bit and then old solid used to do this before where we we put
[01:17:16]  in all these markers and match them all in but the it was actually kind of expensive to do all the bookkeeping and remove them and if markers or like children changed like because
[01:17:25]  it's the adjacent thing like you keep on trying to optimize to remove markers or like reuse markers and it makes it really ugly and hard where we just keep track of the arrays
[01:17:34]  i i just went in here and this is like the check if you're hydrating if the new value coming in doesn't exist we're just going to keep it with
[01:17:42]  what we have but otherwise just grab what's in the dom right now and use that as the previous state um it's such a simple fix it's way simpler than anything i
[01:17:55]  was doing before i was avoiding it because i didn't want to read the dom this is not the funnest thing to do right here admittedly i'm going to
[01:18:04]  have to test that against the version i do with the markers it might be possible that it's not worth doing this and it's better to do this but essentially this ends up
[01:18:16]  fixing a whole bunch of hydration issues just random edge cases so just put it out there so i'm excited about that one i just i don't think i give the best
[01:18:28]  explanation there so let's let's continue on um okay this one's kind of fun i like that html i mean i don't love this but html is
[01:18:39]  just weird right like it's self-healing and sometimes like really gets in your way um because like people forget to put in table bodies and then suddenly it's like
[01:18:52]  oh can't like walk the thing properly and in the client it's not bad but let me show you what i'm talking about let's just open a console and have some
[01:19:03]  fun so if i for example if i uh make uh let's make it t document dot create element and we'll we'll make a template element and we'll call it
[01:19:15]  t okay so we have t and if we go t dot inner html equals you can tell i do this a lot um a table but let's forget the table body
[01:19:31]  let's just put in um tr and let's put a td in it slash td and then be like hi okay when we check what that inner html
[01:19:48]  is you might go oh i expect to be the same thing but the problem is that if we actually go t dot inner html to our horror or surprise maybe not to
[01:19:59]  everyone there's this extra element here that just snuck it's it snuck its way in right like why is it here now we have a whole thing at compile time to
[01:20:12]  check for some of these like when when they're inside the same template we can we can tell but when they're not inside the same template then it gets a little harder
[01:20:20]  because what if the this template has tr and the table somewhere separate because if i go in here and i go like this and remove the table okay sweet now unsurprisingly
[01:20:40]  we don't have the extra t body right and what's funny about in the browser is if i go uh let's make a table equals uh document dot create element table right
[01:20:58]  and i go table dot append our uh t dot inner html actually we're gonna go t dot content uh dot is a single child yeah so we'll do that
[01:21:15]  first child dot clone node why not okay right i'm just gonna clone it actually i should clone it deep sorry when i look at my table dot inner inner inner ht
[01:21:31] ml you're not gonna see the t body so because i did them separately the browser actually is fine so if you create the elements one at a time or you know don't
[01:21:43]  hit one of these rules within the parser then it actually doesn't add the extra element okay so that means a lot in a lot of cases where we don't actually
[01:21:52]  analyze um we we are fine because the browser can handle but you know the problem comes in ssr because when ssr we do append everything together and basically means that
[01:22:07]  if we authored it in two separate things where one components a table and the other one's the tr like in a for loop or something and then we output this to
[01:22:16]  the browser in the htmr like during certain ssr the browser does add the t body there so all those edge cases that are kind of forgiven by the browser
[01:22:27]  by manually appending across templates do happen during ssr so a good number of ssr errors and these ones are hard to track down would be cool if we
[01:22:38]  had like better tooling around this we figure this out but it would you'd have to do it in dev like you could never do this on prod because it'd be way too
[01:22:46]  expensive to be like parsing the strings after you've finished rendering them this is not an easy as you go kind of thing but basically all the benefit like that we get by
[01:22:56]  accident in the browser can i get around this issue kits us on ssr and as i said a bunch of ssr hydration issues are actually just this where people
[01:23:04]  have malformed their html but we can't really tell them like we don't actually know if that's the issue and yeah this was the negative side of it but
[01:23:16]  on the positive side there's like some weird things that can work for you like i mean we were looking at this in solid uh before where if i change if i go
[01:23:29]  to t inner html right and i got rid of these closing tags and just went tr td high guess what it adds the closing tags back in so you can actually
[01:23:44]  compress the template considerably by not doing the closing tags in fact anything on the last branch of it is pretty safe to do and what we do in solid since 1.7
[01:23:53]  of course we went through a headache in 1.7 because there are special rules where you can remove closing tags like in the middle nested and um the first few versions of
[01:24:03]  1.7 were painful for people because i missed a few cases and over time i think in the end we're actually in a really good place now but i still made it
[01:24:09]  an opt-in feature of the compiler instead of automatic where basic stuff like this example the compiler automatically does but more advanced stuff we don't so like if you go into
[01:24:19]  playground dot solid js um don't remember what i was doing here probably a talk looking at that um and if i go in here you what you're going to see for the
[01:24:34]  template is literally just a button that doesn't get closed and if i put another div around it to kind of prove my point you're going to see div button and doesn
[01:24:47] 't close so like easy stuff like that we actually build into the template but what's interesting is there are well let's just take this one there are more tricks you can do
[01:25:01]  with leveraging this like what another another one that i like that comes up is you can let's do this t dot inner html equals if you just go exclamation
[01:25:17]  mark here that's actually gets processed as a comment um if i go t dot content dot first child what you're gonna see is that this is a comment node um so
[01:25:33]  you can actually shortcut the extra dashes and stuff while we can technically do this from the server all these kind of optimizations i've been keeping away from them because people use
[01:25:45]  html validators on their ssr stuff so i don't i don't necessarily do this but for our internal templates we use for cloning in the client and
[01:25:52]  stuff there's really no reason not to leverage this to reduce the output of the strings right so this you know if you've ever seen um i guess it might even show
[01:26:02]  up in solids ssr client rendering hydration um we're not gonna see it here because there's no let's force it um count yeah see you can see these exc
[01:26:21] lamation mark markers kind of sneak their their way in um or even in client rendering it's probably there in that example exactly it's just an exclamation mark um this is just
[01:26:33]  another example where we can compress the the templates slice slightly um rather than doing full comments so we have one new trick in this vein for uh solid uh 1.8 and
[01:26:48]  that is let's see okay this will make a div with a button we just saw that right inner html there's our div with our type button but you actually don
[01:27:00] 't need the quotes here um if you look at what our inner html looks like the quotes come back as it turns out quotes are actually optional in many cases in
[01:27:12]  um in html marco actually uses this during server rendering because it actually drastically reduces the output of um of like these giant html files that get sent from e
[01:27:26] bay um some people find this you know questionable or whatnot because the validation thing i thought about adding this ability um behind an option but generally for our internal templates we don't
[01:27:41]  actually care so this is actually just pure um win essentially for our our templates to be able to to do this kind of kind of thing um it's a very simple thing
[01:27:52]  but again all in the name of reducing bytes might not make the biggest difference you know in your app but it's a cool thing that we can do where we can use h
[01:28:03] tml to our um benefit yeah sorry about earlier it's not just tables there's a lot of examples we actually have a if you in dom expressions um we go to
[01:28:18]  babble jsx dom expression there's actually a dependency here that i got from a different framework validate html nesting uh let's look at this package this was
[01:28:31]  added i think in solid 1.6 um but it's basically there there's a whole bunch of rules like you can't nest anchors and anchors and all this stuff
[01:28:46]  and this basically checks from our framework standpoint um um this is a good question and probably we need to do more benchmarking on i haven't seen this be impactful um but
[01:29:05]  that is that is a that is a fair question i think the thing is that the parser yeah this is a good question um i think that i think the timing of this
[01:29:19]  doesn't impact um uh it doesn't meaningfully at least impact uh like what happens afterwards because it happens so early in on in the chain in any case uh yeah this
[01:29:36]  is this is kind of the fun of of of of this uh whole approach and uh it's interesting to see other frameworks hit this now um obviously lit uses take uh uses
[01:29:50]  templates um but like svelte and view are probably gonna be hitting this these can issues for the first time now because they're moving to this approach stop crashing in template function
[01:30:04]  i've never i'm not sure what what you're talking about oh yeah yeah yeah yeah okay you're talking about it um yeah i don't i i didn't mind
[01:30:25]  this error because it's like the very easy error to for me to know that something went wrong um it's possible for us to probably make a more human readable error the only
[01:30:34]  i'm maybe in dev mode only the but you understand like the problem is like you need the code to check it but yeah template not being but then we'd have to
[01:30:46]  actually mock the template function i mean no no but it's getting the client version in the server so that's not it yeah yeah i don't know we could probably look at
[01:30:56]  it's not super high priority because it's like it's gonna it's a critical it's an unrecoverable error anyways if you hit this error so well it doesn
[01:31:09] 't well it doesn't it's been lazy since 1.7 um let me let me look at the function right now um sorry i'm in the wrong place on the compiler
[01:31:24]  it's been it's been lazy since 1.7 source um template there's some crap in here that i want to get rid of maybe i can do it i'd
[01:31:42]  be able to do in 2.0 but now what it does is it only when you call this is for backwards compatibility on the clone node but when you call the function return
[01:31:51]  from the template now it it at that point it calls create which is at which point it creates a template or if it already exists use the template and then it points it
[01:32:02]  so yeah we call it lazily now this was a nice little small improvement for hydration it doesn't make a big deal for most things but on hydration we actually can now skip
[01:32:12]  all the template initialization especially on templates you may never use in the browser so i mean this is you know little little small wins um yeah okay let's keep them going
[01:32:24]  um so that's a little explanation about template minimization okay yeah there's there's a couple things uh better guards on global scripts for micro front ends and things like astro
[01:32:43]  i think you actually might have already seen this in the output here we already did some stuff but um you know these kind of checks like if already defined don't run the
[01:32:54]  thing or like we had some before um but they didn't work completely this is just a small kind of bug fix situation it's in case people include this micro this thing multiple
[01:33:05]  times on the page like in their micro front ends um now they're not going to trample over each other so yeah i i think this will make some people happy uh
[01:33:18]  for for those global scripts why we have those global scripts that's how like if hydrate doesn't get called right away um we're able to uh like still insert the stuff
[01:33:32]  and do the streaming like we we inline that little bit of javascript and it takes care of everything before the framework or your components load another small one we're
[01:33:39]  using dollar signs instead of hashtags now because nginx server side includes comments are treated as special directives i didn't know about that a lot of fun um so it's
[01:33:49]  breaking on people's setups um so i looked at saw what react uses react uses some dollar sign things so i was like okay that should be fine like he again it's such
[01:33:59]  a it might even work better now because we have all these dollar signs um for compression i don't know if the javascript compression and the html compression for
[01:34:08]  inline scripts happen at the same time but where you'll see this is i don't even let me see if i can see it in here is it in here is there
[01:34:16]  an example i might not even have an example with the with these in here simply because oh no here it is yeah there's no dynamic inserts yeah see dollar sign it's minor
[01:34:28]  but yeah i this this is uh this is uh this is most of the pieces that that we've been working on for 1.8 but um sorry i just read this
[01:34:44]  comment about sloid i haven't heard about sloid in a while yeah the question the whole file yeah i mean there's a lot of little tricks that we
[01:34:53]  do here to help with compression even stuff like um getting these like we actually bundle some of these things at the same time because this data resolve on this promise here or this promise
[01:35:08]  here actually is what triggers the next promise for suspense to undo but those happen on two different micro tasks so we actually wait to serialize slightly so we have time to actually
[01:35:19]  get this in and we don't have to send extra script tags so we can send them in one flush so there's a lot of times where like little batch things like that
[01:35:26]  can improve compression um so uh yeah they're just small little tricks uh that we added into the the streaming uh approach here is zero zero three one really the best yeah yeah
[01:35:41]  um it's it's it's a funny one um it takes time to hash them up um ironically like it like it's more expensive um so it like slows things down and
[01:35:58]  then like they're actually like these are actually good for compression like because they're actually the same like a lot of repeated bites so it's like it'd be interesting to
[01:36:12]  see more detailed studies on this i know they're really ugly for people but as a naive approach they're not bad right so it's it yeah it if like i had a
[01:36:28]  clear win a different way i might have been like okay let's do that i mean we still talk about it because we're like can we come up with our own auto
[01:36:35]  compression while we do it to like reduce the numbers like there's a lot of zeros that's very holy we need to hire our cool uh ids because jsx can execute
[01:36:42]  out of order so it's not the order in the dom is not sufficient to actually know what the hydration is because we don't have a virtual doms everything happens immediately i
[01:36:53] 've looked at approaches that got us close to virtual dom but then there's overhead there so like i'm okay with this for now when we get more islands type stuff these
[01:37:02]  disappear when you're in like the server component land so like yeah we'll have to measure this more carefully um yeah they're literally like the depth of the component tree the more
[01:37:17]  component depth you have the longer these ids get um so yeah anyway um yeah i i it's one of those things okay sweet yeah putting the link out there um for
[01:37:36]  the http p203 video on it um that's where some i guess i'm gonna say former chrome dev people like are any of them working on chrome anymore but they
[01:37:48]  have a great um kind of video podcast thing where they talk about different performance aspects in the browsers um so all right but yeah i i this is mostly what i was putting in
[01:38:01]  i know one point it might not be the the most exciting it's just what it unlocks there's one other bug request though that's kind of bugging me um that
[01:38:10]  i think is the the that i i want to see if i can get in um and it's related again to those hydration the hydration script things this was reported to me
[01:38:19]  um and it it kind of bugs me a little bit um mark down this probably doesn't belong in the main repo um where is it uh it it's no there's
[01:38:41]  oh where is it sorry there is an issue about um this one there is an issue about we do something called event replaying um this this one isn't exactly i mean did
[01:39:01]  i classify this one as a bug i maybe i should have basically we got this that script that we load on the page also you're going to see this more and more
[01:39:11]  commonly which is kind of an interesting tension um quick does it react does it we do it we kept your events before the code is loaded so we can do stuff with them right
[01:39:22]  like on one hand you have this scenario where like you know remix is talking about progressive enhancement right and they're all like we don't need to worry about slow hydration you
[01:39:31]  can the link always works yeah but i mean we we can acknowledge that that's kind of it's good but it's also kind of terrible like it's terrible from the perspective
[01:39:41]  of like you know i can pull out some of those slides on hydration or whatever like so you've got the slow device slow network it takes set you see the page after three
[01:39:49]  and a half seconds and it takes another three and a half seconds to hydrate so it's like seven seconds on some slow device and you just happen to see it and then
[01:39:57]  it takes you you you know half a second to react and then you're like oh yeah i want to go there about a second later so at about the six second mark
[01:40:04]  before right before it finishes hydrating you click on something and in that remix um scenario it goes oh okay well i know javascript so i'm going to hit the link
[01:40:14]  or whatever and then it goes sends the whole request to the to this like the you know and it was something silly it was like i wanted to expand something and that thing
[01:40:23]  that you wanted to expand might have actually already been server rendered in the pages just hidden initially or something but like you click on it and then the the remix or progressive enhanced approach
[01:40:35]  i shouldn't single out remix like svelte kit does it very well as well goes okay well let's go back to the server and refetch the page with the
[01:40:44]  the thing open right so like you something that would have once the javascript loaded taken 20 milliseconds now takes another seven seconds which is kind of brutal so like there's this
[01:41:07]  question of like when is something interactive right like technically you can interact with it the second it shows up but everybody's been playing with these different approaches of how to manage the
[01:41:20]  events during this window uh react selective hydration um quicks do does this async thing and this is something that we added solid and i didn't realize this there's a little
[01:41:33]  bit of a tension here i haven't tried this um example exactly and i don't think they gave me a uh reproduction um but let's reproduce it right now why not
[01:41:48]  let's let's do this see i think we can reproduce this inside our our demo because we have i'm going to just get rid of the serializer stuff we have
[01:42:02]  essentially um actually no this is still not good i want is it back to normal can't even tell anymore okay um because we have one of our pages here that actually has
[01:42:30]  an input device where the value is initially set to text right so in theory we can go in here into solids source code and do something a little bit wrong to make this example
[01:42:45]  exaggerated so i think we can go in and go to web and i think we wrap the hydrate call in here because um we for code splitting i have this enable hydration
[01:42:58]  which means that if you never call hydrate it tree shakes out all the code related to hydration it's a little trick with roll up i've showed this a couple times on
[01:43:08]  stream but it also means that i can do something kind of stupid which does hydrate actually oh it does return something um synchronously but we're not going to use that
[01:43:17]  thing we return so like screw it we're just going to mess with stuff we're going to we're going to like wait um i don't know we can wait six seconds
[01:43:28]  or something to hydrate right let's see if this will and let's just let's build this whatever i'll just use test i'll build it so i'm i
[01:43:44] 'm kind of curious about this scenario okay what failed typescript yeah we don't care about you i think we'll see that it will be cached in the turbo pack cache
[01:43:59]  hopefully unless the test's failing actually oh why does typescript typescript ruins everything let me just see what it if it actually snuck it in here um actually i think we
[01:44:15] 're just using webjs i could probably just hack it in the output too but okay it's in here okay typescript be quiet all right now let's build our stream
[01:44:37]  example and start our stream example okay it doesn't really matter which example it is okay and then let's refresh the page and it works oh this is interesting do you see
[01:45:02]  the delay on that anyway yeah so we see the delayed hydration right so what i want to do here is i want to add some stuff and then and then what it disappeared
[01:45:24]  see with clicks you don't notice this stuff because you just do it and you're fine but someone pointed out and it's funny because we actually do delegate the input device uh
[01:45:34]  stuff so like this should work but it doesn't and the reason it doesn't work is because of hydration because we actually do a passover and i've been debating a
[01:45:47]  lot about this because the whole world scenario of hydration has been changing in the beginning we used to say whatever we can let's just make it the client get to a reasonable state
[01:46:03]  and you know that that was fine because then the client took over but recently and this is true with stuff like server components and quick and stuff we start saying like okay no
[01:46:16]  the server was right the server did the rendering initially the client shouldn't like update it like the classic question if you put a date time stamp inside um a component you know there
[01:46:29] 's the old thing well hydration mismatch right but like how do you handle this scenario right and let me let me look well let's do it right now and solid because
[01:46:41]  we can um and we can very very clearly see the effect of hydration because we have our six second timeout so let's go into the example here shared and we're on
[01:46:51]  what the settings page and let's just like put in something like date dot now okay and what's the best way to do this because we're not going to see it
[01:47:08]  i mean we can just console log it right like do i even need to stick it in here just to make my point i mean sure i will but let's let's
[01:47:25]  let's do this let's build and start so this is kind of related to what alexis was talking about right about this serializable value thing because my question for you
[01:47:40]  is what should we see when we load this page yeah i wish i had a poll to the chat what should we see when we load this page time on the server or
[01:47:55]  the time six seconds later i mean it's a trick question a little bit but i figure someone's got an opinion about this somewhere no no no opinions server time okay there
[01:48:21]  we go that's a good that's a good one but yeah server okay the thing is classically the answer was client time that was always the answer and solid i did
[01:48:34]  change this right but classically it was it was client time um that was the expectation okay okay so 947 okay okay it's hydrated now we see that when the console
[01:48:56]  log went in the client it's 203 and then here we see 947 so it never updates and this through has thrown a lot of people off because they expect it
[01:49:13]  now like don't get me wrong if it was a signal and then we did like a something like a creative factor we did an update and then we updated it and changed it
[01:49:20]  from that initial state yeah definitely you're going to see the new value if it keeps on updating but during hydration we did not change the time so this is kind of like
[01:49:37]  a mental switch that's been happening here because classically it would have been yeah the client tries to recover it and if it can't try to do the best with it but
[01:49:44]  now because of like resumable frameworks and stuff the expectation is that hydration should not change this because if we're optimizing away hydration how could we ever expect the client to change
[01:50:00]  like the server hap like if we're getting to a point we're doing less and less work during hydration we have to trust the server and not expect side effects from
[01:50:08]  from hydration to occur including that math.random or that date timestamp that you you put in here that's that's the trajectory of where things are heading it's so
[01:50:20]  funny when i joined the marco team i argued pretty strongly that it should be this client value that's the expectation but that's a dead end like you you you basically
[01:50:33]  don't get to move forward from there you don't get to optimize from there because you're you're saying i have to run this code on the client so this is this
[01:50:46]  is an interesting shift of base right because what we're suggesting here is the the reason that the high gets wiped out when it hydrates is because well let's look at
[01:51:01]  let me see if sources um javascript let's look at the compiled output settings.js here we go when we hydrate we create a render effect that sets the
[01:51:22]  value of the text node so it overrode it now here's the thing if you set an attribute or a property to the same value the browser like shortcuts that pretty quickly
[01:51:39]  it's not terribly expensive i never went in and added the code to do checks for this stuff because like if the browser goes oh you're setting the same value you know
[01:51:49]  like the same string or whatever it basically shortcuts right at the beginning and it's not terribly expensive well i mean what i'm getting yes this is kind of decided at the
[01:52:07]  compile step the reason is i told you we don't create elements um when we hydrate but we do set attributes and properties currently i wasn't quite ready to go the full
[01:52:21]  the full way but and there are exceptions right like there are some properties like anything that can be used as an attribute will work right when it when it shoots out it'll
[01:52:33]  work when it starts up but like there's some if you're on the server server rendering and there's a property that doesn't exist as an attribute then like you can't
[01:52:41]  possibly server render it in that initial state and you do have to set the property when when you get there but in case a solid on the server there are a few things
[01:52:51]  that get treated as attributes like value and boolean attributes but they get it treated as properties um in the client for performance reasons for managing reasons so so like this this
[01:53:06]  is kind of like an interesting tension because i mean this is we we can continue to do less during hydration we know when we're hydrating so we can like set attribute is
[01:53:23]  a perfect example this is a helper function if we we could have a code inside set attribute that's like if if hydrating don't do anything and it'll tree shake
[01:53:36]  out when you don't use it but we literally just have to go in and just add a line that's like if shared config dot context um return by this point like this
[01:53:47]  isn't a reactive id but by this point the like the reactive expression will have ran like if this was set property instead of l dot value if we had a set property helper
[01:53:58]  you know can make it eat more convenient we could just like go set property l dollar sign four um comma string value plus text at that point accessing the text making the reactive dependency
[01:54:11]  but then just not set the value because if we skip setting that value then this example here works we would be able to type it and instead of it erasing we're
[01:54:27]  going to see something else and actually you know what let's see if we can make it do that right can we actually maybe we can do it in the browser what what do
[01:54:39]  we want to do here um can we do this fully from the browser we might not be able to sometimes what we can do is we can go in into the sources sources
[01:54:53]  tab we can find the js we can find the settings and we can call put a break point like really high up see this this is why we won't be able to get
[01:55:00]  to it because we won't have shared config here because i don't think i can go here in time yeah and i won't be able to yeah i won't be
[01:55:14]  able to get it because it by the time i type it in okay let's let's not do this in the browser i was trying to think of a way i can like
[01:55:19]  inline um change it but we're going to actually we'll change the source code we'll change the compiled output so let's go stream lib perfect there's a couple
[01:55:30]  versions of settings here actually this is server side so public js yeah i'm going to clear this folder and then we're going to build it fresh again and then we're going
[01:55:40]  to inline what we're thinking here it's an accurate statement um okay so let's change this around let's go let's import um shared config like i and then
[01:56:13]  let's where we do this render effect let's do something like this let's go it's a little bit more verbose but let's we're going to change this
[01:56:29]  to basically like the helper i i said let's go const t equals text and then value equals t and then go if shared config dot context return okay that should work right
[01:56:55]  now let's see what happens oh okay what i have a javascript error it's probably because i did something wrong with shared config oh it's from index sorry my
[01:57:19]  bad it's not from index it's from let's look at index what does index do oh interesting shared config is in an index but it's not being exported okay like
[01:57:38]  which is weird because it doesn't think it needs to export it okay we're we're we're hacking it a little bit tree shaking is very powerful okay let's just
[01:57:58]  start it all right get in here see at hydration time the the ui actually updated properly and if i continue typing it'll be fine so i mean obviously this is really
[01:58:22]  exaggerated but it's cool you can you can see it actually pick up as it finishes so this this is the kind of challenging world we live in right now because it's
[01:58:40]  like the path we're on is one where the server has to be right and everything you do has to be able to apply after the fact so like i might fix this one
[01:58:58]  for this issue it's kind of cool obviously this is exaggerated case but um i don't know this is mostly 1.8 you know hydration is a funny thing like even
[01:59:19]  when we talk about resumability it's all a matter of like scale because we can reduce the work being done significantly without going all the way like this is not like
[01:59:27]  a on off switch kind of thing right so like i'm i'm it's tricky because i'm looking at this as both a combination you want to find the primitives that
[01:59:39]  make these things powerful and impossible and you also want to like not force everyone to world of crazy config you want to make make it rather automatic but you know yeah it's
[01:59:52]  it's it's it's interesting right this is like this is what i mean like is this app takes six seconds to hydrate when did it become interactive you know i
[02:00:09]  actually i don't i don't know this is when am i interactive this is what i wrote about in my article because i i don't even know anymore i'm someone mentioned
[02:00:26]  earlier that event replay back is actually kind of terrible and they're kind of right there's like other issues with it so it's like we keep on going further um but
[02:00:39]  like it's never just a clear path all right almost done my orange juice here okay so yeah i don't know if people have other things they want to see you know
[02:01:08]  come maybe buy the discords next channel and talk to me or you know mention stuff like be understanding that i'm not really interested in adding new features but rather setting us
[02:01:21]  up properly for like future essentially but yeah this is 1.8 and it's not about it hopefully this is just a lot of just little niceties improvements better hydration more predictable
[02:01:35]  behavior just small little things that will you know i couldn't do as a patch version for all of them um but will give us a lot more power um okay so what
[02:01:51]  do i want to talk about next after 1.8 there's this week in javascript and i can kind of go off on that obviously but um i think i think
[02:02:03]  that article that called out solid is probably worth um going over even before this week in javascript so we don't like hijack all of this week in javascript
[02:02:16]  talking about 1.9 yeah i i think that uh let me see here where am i this communities no i want profile i think this was this was a pretty cool article
[02:02:35]  you you don't see a lot of people like solid hasn't been big enough to see a lot of people write negative stuff about it or things that like aren't about
[02:02:47]  things that aren't the best like most of the complaints i've seen about solid legitimately like especially on twitter and stuff have been like stuff that's just like completely irrelevant it's
[02:02:57]  almost like frustrating to even talk about it because people are like like you know like all that react pushback and the two-way binding and all that stuff and you're just
[02:03:05]  like what the hell are you guys talking about you guys clearly have never looked at the library or it's just a react clone or just like like yeah the like the number
[02:03:16]  of people who have used solid more than two minutes who complain about destructuring is a very low number like you you you're aware of and then you're like you know
[02:03:23]  it will catch you a few times but then like it's not it's not like it's it's kind of like who cares but these are the things that we fight over
[02:03:32]  on syntax on twitter and like these are the things that you know you know people make a big deal out of like you know these like very very surface level things so like
[02:03:44]  when someone comes up with legit um complaints and stuff like i i appreciate that a lot i mean to be fair i feel like people like there's some responses here to this
[02:03:56]  you know because i said i love the article and it's kind of critical solid in some places and there's some people going you know about this whole thing you know you know
[02:04:11]  people you know setting example not taking it personal and all this stuff and i'm like i wonder if those people have been to our discord i sometimes we talk about the discord
[02:04:22]  not being the friendliest but one common thread on the discord is there's a lot of people who know what they're talking about or at least claim to know what they're
[02:04:30]  talking about that pick apart decisions in solid every day hourly all over the discord um because we attract a lot of people like that other framework authors people very critical and stuff about
[02:04:44]  performance because i made one decision to lean one way versus another way um even when i posted this article in the discord it started a whole bunch of you know other discussion on this
[02:04:54]  i'd we we see this all the time so it's like and that in that sense i don't think a lot of the framework authors are actually like we're kind of
[02:05:07]  all aware of this kind of stuff like we don't take it terribly personally because like you can't walk two steps without someone telling you that they could do it better and
[02:05:16]  it's like well okay you know um let's let's let's talk through that let's see what's going on and um yeah so like yeah i i think i think
[02:05:27]  this article has a lot of really good points which is why i wanted to actually uh talk about it um let's see here did i did i already close it down yeah
[02:05:35]  this is not it's only got 34 likes not enough people seen this yet um i had one knit with the article but which we'll talk about but let's let's go
[02:05:43]  through this you know solid js pain points and pitfalls yeah and actually i haven't clapped this one enough let's let's let's let's get them going one thing
[02:05:53]  support your medium art uh writers you can clap up to 50 times so just something to know okay there we go all right yeah we describe various non-obvious aspects of
[02:06:07]  working solid js as well communities i've encountered over the years of working solid js yeah i could tell immediately when i read this article this person's worked at solid js for um
[02:06:18]  a long time and i've worked on solid js a long time so like it's very obvious to me where these issues are are um of course api functioning faces all
[02:06:29]  this will be resigned with this new major versions of the library many of the points will lose their relevance it solves more problems that it creates i i i like that there's this
[02:06:39]  positive spin okay so let's let's let's look at the list and see how that fits in class list okay i'm gonna say right here class list was a mistake
[02:06:53]  i know that i've known that for years i i mean i even kind of knew it before 1.0 i was trying to find an easy way to get off it but
[02:07:02]  i was too worried about disappointing people like class list is that thing that you want in like every framework like uh like marco has probably the nicest class list thing of course
[02:07:16]  marco does right marco is the best at everything but like it's very awkward to have two props handling the same thing you could kind of merge them together but then
[02:07:31]  you're kind of like taking ownership for every single thing like class list is like if there's something that like on my list of like things that are such an obvious mistake that
[02:07:47]  i wish i could avoid it like class list should have been on that list it's just like it's it couldn't be clearer i i i went through a phase where i
[02:07:55]  was like okay i can i can merge them together and then class could handle all the stuff but the problem is it's not even nice for the developers because we start seeing
[02:08:06]  this actually in um the router because we have capital a anchor as soon as you start wrapping components like style components in this and you're spreading stuff through like there is some awkward
[02:08:19] ness because like how should i put this on one hand you have this problem of stuff inside the spreads and stuff outside the spreads not being aware of each other compiler can't
[02:08:36]  solve that problem but on the other hand you as a component author you decide to use the class property you go and now that it's merged together and class list isn't special
[02:08:47]  you don't know what you're getting are you getting an object are you getting a string are you getting all the stuff like if you support in that same way that it works
[02:08:55]  through spreads and whatnot like sure a direct spread will work but if you have to intercept it you have no clue what you're dealing with and now suddenly you have to handle
[02:09:04]  all these different edge cases as you try and you could be like okay like make a helper function that's like merge class wait wait you mean you make seal like you're you
[02:09:13] 're kind of in this weird zone where it works kind of well like a directive but the reason directives work is because they don't work through spreads i know that people
[02:09:27]  hate this and like they don't work through components it's like once you have to like have these special things coming through as props that have special meaning then everyone has to worry
[02:09:38]  about it it's not contained within your component it's like people start using this against whatever and then you as a poor component author now have to worry about all this crap
[02:09:49]  so like merging it doesn't really solve it keeping it separate has the reactivity ping pong problem right like who like problems classless sets individual class properties where class just sets
[02:10:08]  the class which overwrites so they actually blank each other out it's possible but dangerous to mix class and classes right therefore download clx and use it yeah like like
[02:10:31]  we're gonna have to i have a deprecation path here by turning it into a directive or something in my mind so people who use it locally but this is very high
[02:10:43]  on my list of like acts for 2.0 if there's a thing that would make us unpopular this is it but this is this is my one of my biggest
[02:10:52]  mistakes in designing solid class list is terrible like absolutely terrible um everybody wants it but it is terrible yeah yeah this is our angular 2 moment right here if a component gets a
[02:11:14]  complicated class product what's the use a case for intercepting instead of passing it through to something else well i guess my question is how do you add additional classes change additional classes
[02:11:26]  to it um i guess the idea is you would i guess it's like a flattened thing where you just like pass in a new array and then add your classes to
[02:11:39]  the end of the array and go like array props dot class colon my classes change it then in 1.8 i mean it's supported in solid so one so i can't
[02:12:04]  remove it and be like oh sorry guys yeah yeah yeah yeah yeah so yeah you you do this but yeah i mean is is this just yeah you basically make an array and
[02:12:20]  then you extend the array i is it i mean we could talk about this but is it really worth it the the whole reason i had a class list um the whole reason
[02:12:33]  i had a class list is because it does something really really powerful it does it does this um let's add something hello count it's able to toggle individual classes independently without
[02:13:01]  doing the merging and from a performance standpoint this is incredibly powerful um and it could it could even detects things that are static that can't change like and actually go okay
[02:13:19]  hello updates but world here is actually uh where is it am i not seeing it did i make a typo somewhere but it should be able to tell that world is static and
[02:13:34]  it should be able to hoist it out of this why am i not where is world oh it's it's so static it's freaking in the template sorry it's
[02:13:49]  it's right it's it's up here um no i let's let's let's do this is gonna be hard to do okay uh okay i think i can do
[02:13:58]  it const world equals function and then function function so the reason i'm doing this is because we're so smart we can hoist stuff in ways you wouldn't believe but
[02:14:17]  i can't put a function call in here because it would um let's see does that work okay i think i got it i fooled it yeah there we go class list in
[02:14:34]  effect class list not in effect yay the reason i did the stupid function thing is literally if i went here and went like stuff it's it would still hoist it into
[02:14:46]  the template um we do static analysis and we can tell what can be resolved uh at compile time so it can actually do further optimizations even for stuff that's not directly
[02:14:58]  in the jsx anyways the other reason that i love this also is do you notice that to make this work it's pure dom api there is no runtime like this completely
[02:15:16]  compiles away like there's there's basically no no like library um involved to to make class list work right before 1.0 i had this idea that i was like
[02:15:34]  okay screw this svelte knows what they're doing force it to be a compiler right right what what if we just do this because then this works the same create the effect
[02:15:47]  of the class list and there's no expectation that this uh this works elsewhere elsewhere right because you can't spread this it's a directive or whatever like and let me
[02:16:17]  let me let me let me double check this this this the world scenario here okay yeah so this scenario yeah sorry this scenario isn't smart enough to hoist up but i mean
[02:16:39]  i i think it's actually it could be but the problem with this one is there's no dynamic syntax and like there's no way like i can't illegal i'll
[02:16:53]  put something in here like you can't do this you could do some silly stuff like this you'd be like what happens if you add a dollar sign you know you can get
[02:17:02]  into a world of compiler thing and then say like this way you can say what property works and then like you know you know you get what i'm i'm getting at
[02:17:16]  here right like this world could replace this world or some crazy thing that probably won't work with typescript um but the class list is just really bad from a composability standpoint
[02:17:35]  what if you just remove class yeah so i mean this i this i i feel for you here classless sucks um it's very obvious to me that it sucks um because
[02:17:53]  basically the whole reason we did this this whole optimization basically largely goes out the window if we merge everything to class and then like you now you're dealing with these kind of
[02:18:08]  opaque objects you don't understand i mean i was even debating i was like what if you like make class a special property and then put it on a component and then you could
[02:18:19]  like compile it at like the component level like what what if the support for component directives wasn't actually so that it passed something through but that it actually did a pre
[02:18:32] -process on the component props as they come in you know then you could say like classless on the outside always ends up on a string when you access it on the inside
[02:18:41]  like stuff like that is more interesting but in either case classless as it is today is terrible to be fair these features i'm showing here like the fact that this works
[02:18:57]  we've had it since 1.0 i just haven't advertised it um it's been a couple years now um class name class name class name was not right all along
[02:19:09]  classic okay so yeah anyway um this is classless sucks i i don't 100 have a solution here we should talk about it but classless is not good let's keep
[02:19:34]  on going yeah it's it's the unfortunate thing and this is probably this is a place where i guess you could blame jsx because there is style jsx and we have
[02:19:46]  styled solid style jsx it's just the solutions don't feel nice because they have to be scoped to the template level the component level like but not like the
[02:19:56]  component level so like it's very different with sfc's how they work with scoping um it's interesting because solutions like remix and actually vinci from nakil handles uh
[02:20:09]  scoping in a really clever way that they can they actually reset it like on routes um which means that you can get pretty far with basic javascript because it actually removes
[02:20:21]  and adds javascript dynamically as stuff changes um but yeah i mean it's just that basically for the freedom of being able to use jsx everywhere like and make it
[02:20:32]  portable scoping kind of starts sucking like you could you could probably come up with some apis for it but it's it just it doesn't feel as nice um like compiler
[02:20:43]  macros are probably one way that you could do it like kind of like our server dollar sign you could be like style dollar or something but like even figuring out how that
[02:20:52]  applies and yeah it's it's sfc's definitely have an advantage on style scoping um but yeah i mean this is important css modules is actually the main reason
[02:21:09]  why i wanted this this scenario because i want like with class list you can just pass like the condition and then put like in the css module like i said world stuff but
[02:21:21]  this could be like world could be like you know whatever the thing you import from css modules okay so yeah i class list is yeah directives yes god another feature that
[02:21:44]  i'm they're not my favorite but yeah i they're so awkward that i have not met people who actually use them yeah which is probably there's a few form libraries
[02:21:58]  that use them it's probably um it's it's it's it's probably like a subconscious thing of why they ended up so awkward because this is the thing that people wanted
[02:22:15]  but they're they directives are kind of a little bit grading against the composability factor um like they kind of fight butt up against each other this and i i have
[02:22:28]  to admit this was an oversight on on my part and i want to talk about this because um they're saying that like typing them sucks and i agree but i mean you don
[02:22:43] 't have any choice with jsx like you you have to do some kind of typing for directives the main problem is i mean same problem with the web components too the
[02:22:52]  main problem is you can't put directives in one file and use them another because the bundler simply cut them out of the code can they be used will they work they
[02:22:59]  will the way it's written not really yeah and the thing is it's not the bundler that cuts them out this is again all typescripts fault um i mean
[02:23:12]  if you watch my stream enough you will understand why like i can blame typescript for almost everything it's not like bundlers have multiple phases if you go roll up and the
[02:23:29]  way the plugins work in the transform and they go through these these phases and then like the actual tree shaking doesn't happen till almost the end so if you have some cool
[02:23:41]  directive here and you use it here solid will transform this into something well let's look what salt what what does solid transform this cool code to let's let's look uh
[02:23:57]  where where is this article um the playground actually has a whole bunch of special processing the funny thing is i didn't realize this problem at first let's just uh whatever can i
[02:24:14]  get the output here without it oh right there we go yeah sweet the compiler turns it into use cool directive elements some signal or whatever and you import it and it's used
[02:24:33]  see like this this will work with tree shaking no problem right like it should not get tree shaking away right but typescript let's see here type script was it typescript
[02:24:55]  playground let's see if i can do this in the playground somewhere can i can i make multiple files in the playground um let's see um let's see you don't
[02:25:14]  see this import statement let me go create signal still not and then let me call create signal here and now the stuff comes in the the thing is the reason typescript itself
[02:25:36]  actually does tree shaking and it does it before any other transforms have happened and there's no way to as far as i know to actually get in front of typescripts transform
[02:25:48]  so basically it takes it out of your hands um essentially even though the javascript code that we generate will know not to not to tree shake typescript has already removed
[02:26:02]  it by this point because when it looks at the file it doesn't see it being used it will see like okay div you know and then you'll see what what am i
[02:26:19]  create signal all right so let's go um use create signal equals whatever like even if you this is obviously not on where's the config the ts config uh gsx
[02:26:36]  preserve close it will get rid of if rid of the import ahead of time and the the reason for this is because typescript has to worry about other bundlers so the
[02:26:55]  problem is if it doesn't remove its type imports like if you went like import type or something like this then typescript easily knows okay it's a type i should remove it
[02:27:07]  but because types weren't required like you didn't have to say import type and you can just import the thing even when it's a type they had to find a way
[02:27:16]  to remove the stuff that could be types so further downstream stuff didn't choke on it so like i think there's a setting that's like along the lines of uh preserve
[02:27:35]  value imports is this it um there is a there is a there is a setting that lets you typescript not tree shake it out but then you have to better make sure
[02:27:55]  that every single type you import actually actually puts type denoted in the right place because otherwise you're going to get a type show up in your final build output and it
[02:28:06] 's going to choke on and be like i don't know what type accessor is or what accessor is even though it should be gone so when i say it's types
[02:28:13] cript's fault it's not like they're trying to do their best with a crappy situation and the support of this on a language level didn't exist originally but it is
[02:28:25]  also completely their fault because there's nothing i can do about it so like this isn't how bundlers work this is completely typescript's doing so i should have we designed
[02:28:42]  an api that typescript screwed over so badly probably not the ironic part is i didn't add directives to right before 1.0 release because typescript couldn't
[02:28:52]  do this kind of typing and then this i was waiting for months and then they supported it in fact it was worse than them not being able to do this typing if you go
[02:29:00]  back to older versions of typescript um let's see if i can go back to playground 4.0 or something um and then let's they couldn't even look at this
[02:29:13]  what they output this is preserve they couldn't even output namespace attributes they'd actually make them into two different attributes a booling attribute another attribute in preserve mode like
[02:29:27]  they were completely broken um before this point so like yeah i mean at least they like they fix that and they add the ability to do string typing i was like okay we
[02:29:43]  have a path forward people have been asking for this feature and i was like i liked how easy svelte just import was and i was like i did a few simple tests
[02:29:51]  i mostly program in javascript not typescript and i was like okay this works we're good put it out and then find out like a month later that basically everyone getting
[02:30:02]  it to work had to do a bunch of hacks to get around around typescript so like yeah i mean this this this this this is definitely a pain point um i i
[02:30:18] 've looked at register patterns for for for them like kind of similar to what view does the problem is it like directives in themselves are challenging in that like having them work with
[02:30:34]  spreads like they're just they're really good on native elements but they're not again very composable and i think it makes them a bit awkward right when you want that
[02:30:47]  transparency when you want to just get a component and be able to use its props and stuff directives you know are kind of awkward the thing is even in svelte um
[02:30:56]  they only work on native elements not on components to my my understanding i don't know if they've changed that recently but like this has always been like a kind of non
[02:31:11] -composable feature so again you and you're fighting typescript basically at every point um i thought as i said so in a sense this is a failure on on
[02:31:24]  our side as a judgment call um it's usually not a good idea to fight typescript too hard um and this one was probably just trying a little bit too hard i
[02:31:34]  think there's some power to them i'm i i'm i'm not sure yet i i like the idea that like if class list were to die this is a natural place
[02:31:50]  for it to go um i know it's sad to make directives like a deprecation thing there are other like non-custom uh directives we do support
[02:32:03]  um it's tricky because dynamic dynamic needs certain things because it's just a component wrapper if dynamic can be made special i think a lot of the use cases um for directives
[02:32:18]  start like could probably be handled better but yeah most of the part like we use them for actors and prop indicators um which can help um you know for like interrupt with the
[02:32:31]  browser the fact like some things are attributes some things are properties especially the web components like there are there are things where we need to put this kind of extra metadata in so i
[02:32:40]  don't see us like custom directives give this sort of interesting zone i don't generally recommend them but like i could see where they might be valuable but it feels like
[02:32:52]  you just have to kind of accept them for what they are as not being composable um and kind of go from there or they really need more rethink and it's it's
[02:33:01]  pretty hard because every time i kind of go through those cycles yeah you know i like that yeah yeah no i can see it okay okay so let's look prop wrapping all
[02:33:32]  right okay yeah see almost all the examples where people like picking apart this stuff involves math.random like you basically this is probably why i never hit this case but there's
[02:33:49]  like there's actually it's not just math.random it's also like um things that read from the dom i think we need to better outline when certain life cycles
[02:34:02]  would happen prop wrapping is essential it's unavoidable whether you wrap it or the compiler wraps it you it has to happen right every time every time you click upon you
[02:34:17]  see different value why yeah because you're calling mathrandom so what this talks about is you can use once and once is kind of a hack at one point i really
[02:34:34]  want to be explicit and then we kind of loosened up on it and once was our replacement but once is is tricky i don't i i don't know if i could
[02:34:48]  could say that any solution that depended on once could be be considered canonical so to speak the problem here is that if you call a function inside jsx we we take
[02:35:03]  it to be lazy it's kind of fundamental like property structuring i'm interested in this one mostly in that i don't know how real world like i can see people
[02:35:18]  getting hit by this but i just don't know how actually important this one is because it's like it is an interesting it is an interesting one because like it's it's
[02:35:34]  kind of necessary to to auto for the for the automation but on the other hand it's like there were frameworks before that didn't do this kind of automated wrapping and they
[02:35:46]  like it's so funny that i'm taking this line when like you you you know you have view and felt very far on this like automated side and then like i'm kind
[02:35:55]  of more in this middle ground zone which means that i'm kind of combating it on both sides but like it's this is in my opinion largely what made solid usable in
[02:36:05]  the first place the prop wrapping so it's kind of like like it is consistent in that functions are evaluated lazily so yeah this is an interesting one i'd be interested
[02:36:19]  to know kind of scenarios where more people hit this one i i can i like i can see why this is maybe unexpected at first but it's also like how everything works
[02:36:32]  so i mean once is a solution the other solution is is to just hoist it up like this right another solution yeah i mean that that's basically yeah i don't
[02:36:58]  know any thoughts on this one thank you yeah i mean it's this one is pretty fundamental see these ones we can address because like mistake awkward design i'm not sure what
[02:37:21]  to do with this one this one i think is probably deserves to go in the list like there's always that list like where people you know that they complain about react and they
[02:37:29] 're like because of blank and the react team's like yeah but that's how that's the trade-off that's how it's supposed to work kind of like our
[02:37:34]  destructuring this kind of goes in that bucket i think like if you accept destructuring you kind of accept this the idea is for us create memo or computed or something
[02:37:50]  is a way of marking that hey this is something we want to store or that we want to uh like derive you know be calculated so like like this is this this is
[02:38:07]  even awkward from like a component authored standpoint because it requires knowledge on both sides like you as a component author have to decide that hey this prop always needs to be static so
[02:38:20]  like maybe you should be doing this anyways because if not there's like this accidental room of it ending up being dynamic when you didn't intend it to be dynamic but maybe
[02:38:34]  you want to be able to support both cases which in case you should treat it always as dynamic then it's really on the collar and i that's what i feel like this
[02:38:43]  is on the collar less than it's on the component author if the component author if the component author wants to expose something that could be dynamic or static then the they write
[02:38:54]  their stuff in the best way possible you user who decides that you're going to generate a random number like that's on you right like because like the problem is right here
[02:39:15]  that's that's the problem it's not even here not here the problem is here when you said like hey i'm going to pass a prop that could change and i it
[02:39:27] 's going to be lazy evaluated auto memoizing every prop would be terrible for performance you basically end up in like view territory um yeah like that's just not yeah and it's
[02:39:45]  impossible to tell yes like i mean you can do stuff where you can go like oh there's nothing reactive here so then i can just node recycle that might be worth testing
[02:39:57]  again but i generally yeah i mean that's interesting there are some techniques like node recycling where you can like basically go i don't like here's the thing if you detect nothing
[02:40:09]  reactive while you run a function then like you know it can never change like something has to be reactive on the first run for it actually to be an actual memo otherwise it can
[02:40:21]  be just a memo or just a function so what you can do or just a value so what you could do is basically just wrap that value in a function call as the
[02:40:28]  getter and then basically throw away the reactive internals and not even throw it away because that's bad for garbage you could just like keep it around and be like look next
[02:40:36]  time you need to react a node use this one instead of creating another one um this was something i experimented with early before i did the effect grouping so it is a viable
[02:40:45]  path um but i just kind of putting in there generally memorizing every prop would be excessive yeah i was not aware that the each that each prop axis is running this function
[02:41:07]  like the thing is it's very like like like this getter lazy evaluation of props whether they're jsx whether their functions like basically everything is lazy evaluated um yeah
[02:41:29]  it did as well i had to do some interesting stuff for for um uh for uh the like stores and stuff around understanding of stuff as getters um and the thing is props
[02:41:48]  and solids sometimes are getters and sometimes are proxies um the proxies do define a getter on them so like i guess there's like some maybe this
[02:41:57]  still works but essentially because the if the shape of the object could change we can't even use getters we have to use proxies here which is something that solid does
[02:42:06]  that i don't know all reactive libraries do because it's it's complicated but it actually is very powerful if you want to really remake all the patterns you find in a framework
[02:42:16]  like react with like dynamic objects being spread in and stuff like the proxies are the only way to actually do it anyway yeah i mean so this one goes on the
[02:42:30]  permanent list where i don't know if this one's actually solvable it's just like kind of innate and i think it's important that the people who pass like when you
[02:42:42]  pass props down to know what you're doing untrack reactive things you might have a situation we call back on a component directly inside to create a fact it looks quite
[02:42:54]  ordinary but do not underestimate the danger of such code yeah yeah this is a good one i think everyone should be aware of this one it's it's interesting sometimes people make an
[02:43:06]  argument for this for scope based reactivity what i mean by that is like reactivity can't leave the function scope like if you call props at event handler it can't
[02:43:14]  be tracking um svelte works this way um with svelte 5 to my knowledge the only challenge there is like a king composition gets really sacrificed under the scope base thing
[02:43:29]  and it like i it's funny because svelte 3 and 4 are like also have this kind of hoisting thing as like a secret way to untrack
[02:43:38]  by just hoisting out a function i've never gotten used to it i think for some people maybe it makes sense um but yeah this is this isn't an interesting one
[02:43:49]  like again calling an event handler inside an effect um is interesting right but this is why we have untrack and we don't do peek it's it's precisely for
[02:44:05]  these kind of scenarios where you're doing some kind of like if the if you're get if you're giving the end user an api like say a map function or something
[02:44:13]  where they can define the code coming in you want to untrack wrap that because it's up for them to decide like their reactivity not you so like you can
[02:44:23]  pass in reactive variables but they should be the ones subscribing it's the way that's the reason that directives work the way they do like we commonly keep this pattern of aggressively
[02:44:32]  untracking when passing scopes back to the end user because that's what we believe and i guess when it comes into your own user code it's something to consider but
[02:44:40]  yes this is something you could definitely get hit up on if you don't realize that your event handler is listening to stuff because if you think about it logically um if you
[02:44:54]  haven't some effect that depends on some condition that calls an event handler that also depends on some signal or condition um what the effect is trying to output or do could change right
[02:45:08]  like the fact that like the effect like the event handler console logs the count right and based on some condition we choose whether to you know run this thing if the count changes
[02:45:21]  then like like and it's you know an effect you know like should it update probably um like what is the event so yeah i mean i don't think there's a
[02:45:39]  solution to this one as well um but it is something i think people should be aware of so this is definitely like a pitfall for people so like when you're a library
[02:45:49]  author you definitely should think about where you when you when you program when you decide to track something and you want the end user to be able to you know run code they define
[02:46:03]  you probably should be untracking it yeah so i think this is just really good advice in general um like unless the expectation like the problem with this one is and it
[02:46:23] 's very obvious is you think this is an event you're not going to think that it's tracked um so like yeah for loops another example yeah on cleanup inside a resource
[02:46:37]  yeah yeah this is like this is this is a good one as well um if you don't know why this doesn't work it's because reactive scopes are synchronous so after
[02:46:53]  a wait it's impossible to track but it's also impossible to clean up or do anything along that side if if you put the on cleanup before the await you're fine
[02:47:03]  um but yeah this this is a good one i i think this will actually give you a warning or error um in dev so like you will be caught on this one we should
[02:47:16]  actually take that kind of uh heuristic when we actually look at these again in a moment this one will at least tell you you're doing something wrong but it's
[02:47:27]  tricky we have no way to resume the context in the end user code after an await it's not a generator there's no interception point literally this passes off to a
[02:47:40]  point where we do control things but then when it resumes we don't get control again until the whole thing's done this is not reactive there's nothing we can do about this
[02:47:50]  um this is the trade-off of the runtime synchronous stuff i think it is interesting like as a long time knockout user these these last three ones are something that i take
[02:48:03]  for granted but i understand like for some come from spelt it works like almost in a different way where it's compiler based so like um this might work but then like
[02:48:16]  the second you move this into a different like hoist it up and call the function here suddenly it doesn't work so it's like it's a very it's a it
[02:48:22] 's slightly like a different mental model um this one at least errors for you what about this one um this one will track so it might cause some extra um cycles i agree
[02:48:40]  that this is probably um the most like dangerous scenario this is why we untrack components because if if we ever let this kind of stuff sneak into our render tree you don
[02:48:55] 't know what could happen um so i'd say this one is probably this one's almost impossible to actually notify people about um but it is definitely something to look at props
[02:49:10]  wrapping yeah i don't know i don't there's nothing really to do about this we can't identify this case so yeah i guess this is the only one that we
[02:49:31]  can actually warn about and we do so i i think this one's okay i mean it's not great but at least we tell you you're doing something wrong resource mutation uh
[02:49:40]  i could tell i'm not gonna like this one right ah yes this one this one is a real issue and it's something that i definitely want to address with a solid
[02:49:55]  2.0 um the the problem here is that resources are just signals so when you try and do some kind of deep mutation you're basically like triggering everything right like for something
[02:50:08]  simple you can obviously just like change what's there but like create research present mutating method which we can update the data signal however we need to create a completely new object in
[02:50:18]  order to deploy the changes the thing is that the data in this case is a signal not a store so we cannot granularly change only one field a new object this results
[02:50:26]  in us needing to create a new object with updated url field to solve this problem external storage option was that installed 1.5 yes because we used to actually have create um
[02:50:34]  resource store which was weird and buggy and very specific um this has the right behavior but the api sucks because the fact that you can mutate that you can mut
[02:50:48] ate a store um is kind of awkward here because what you really want in this case is just to basically diff um the changes coming in and apply them out fine-grained
[02:51:03]  but the type script is not happy because i'm basically hacking around you know what the expectation is right right this this is kind of the the problem i think the mutation and
[02:51:22]  the data fetching need to be separate from each other because like we we we we we need a way of saying like hey when this new data comes in i want it
[02:51:32]  to be a store-like structure and i want it to diff and set the fine-grained things because in this case it's not about mutating a deep thing this
[02:51:42]  is actually about diffing what's come from the server if you mutate a specific piece then it doesn't need to try and play this game the complexity here completely comes
[02:51:52]  in the fact that resources and stores are all getting just wrapped together because the resource primitive does too much and we're forced into it if we can separate out the async data
[02:52:02]  fetcher from this ability to do the diffs or be able to basically out if there's a way to just go signal to store with automated diffing um i think this
[02:52:13]  actually solves a lot in this range and then things like being able to override specific um pieces uh things like a primitive we've been looking at called create writable really fit
[02:52:28]  in where we try and direct the graph the whole pattern of using effects to write to singles or write to stores is not a good pattern so we need to this is why create
[02:52:37]  computed is basically going to be deprecated because its whole reason for existing shouldn't exist and we need to convince we need to make good apis that are based on
[02:52:47]  deriving data rather than writing data to make this stuff work well um so like this this is why i always called this experimental because i knew how clunky it was because it
[02:52:58] 's just like we really had no choice with solids uh current stores to try and like push too much stuff into it right like technically speaking the the this what you they want
[02:53:16]  to fine-grained mutate option and like this one doesn't handle it because it's like reconciled like you could write this thing so that like you could
[02:53:30]  make your own interface and then it could like you know basically behave like stores do today or something like there's ways to hack around this to to do what you want but like
[02:53:43]  i knew like this couldn't be the final solution here um yeah um so yeah this this this one is one of the things that i think why i wanted to talk about
[02:54:00]  1.8 even is and why we talk about async primitive is if we can split apart these pieces then being able to access say the store directly or deriving data that
[02:54:10]  way will be a lot easier um so to speak okay what do so this one i think is solvable it's just we need to work on the api so that
[02:54:19] 's that's good resources and transitions if you work with solid js router you probably implemented data functions functions loaded blah blah resources and go to page imagine our data depends on some search
[02:54:28]  parameters blah blah blah okay yeah so we in this case we're creating a resource fetching some data based on it and then passing it through and then we're using it here
[02:54:39]  and doing suspense when we read it we click on the button we will not see the styles of refreshing class because the call set search parameters occurs in a transition like any router
[02:54:47]  navigation action which is why signals changes are ignored until the transition is finished to solve this problem you need to monitor the is routing signal and compare the old filter value the new one
[02:54:56]  yes yeah this one's actually kind of intentional but is it is unexpected i suppose but when working with transitions in react and uh with with solid in this case would have a very
[02:55:10]  similar thing you basically need to know the idea here is that you if you're aware of the state of the transition but the the gotcha here and i think this is
[02:55:21]  what they're talking about here is they put data state refreshing in here and they're like why is it not showing refreshing and the reason is the resource state isn't getting
[02:55:32]  updated in the transition and i will say this right now this was another one of my big mistakes this is one of those ones where you like you you you start asking people start
[02:55:49]  asking for features and you're like okay this seems reasonable and then they ask for another feature on and you're like yeah i guess this is still reasonable and then they get
[02:55:57]  to another one and you're like oh i don't know if this is reasonable anymore but like you've already gone too far and i feel like this is what happened with create
[02:56:06]  resource people like the state property of react query they like like being able to know like am i loading errored refreshing whatever all these state things so people celebrated it but it
[02:56:17]  was never the way you were supposed to use it and i added it kind of because people would typescript and they were very excited about narrowing even though realistically it was the
[02:56:29]  wrong pattern um really we should be depending on the state of the transitions we should be depending on the state of suspense error boundaries i know it's not as easy as having like
[02:56:42]  a data primitive that just has everything built into it but it's these concerns are not local they are like the state of the app moving so adding like data.state was
[02:56:58]  really you know even adding data.error was kind of a mistake people commonly go in and go why is it that like you know this why can't why is this throwing
[02:57:09]  or why can't i get this error all this stuff and the answer is people are using using these primitives wrong and we don't teach it enough this is largely a
[02:57:18]  documentation problem this is largely um like an expectations problem and i think like this one again is completely solvable but i we made and i blame myself largely for this a mistake on
[02:57:34]  the resource api um trying to make it like dual mode so it can work with or without suspense i was trying to like make it like this really convenient thing but then
[02:57:43]  it upgraded to like the more powerful thing and the reality is we probably should have just kept it to the specific purpose if we could and then essentially move all these kind of things
[02:57:57]  to keep them in user land like if you really want to know all this stuff use uh uh solid query with the caveat that cases like this won't necessarily work because it
[02:58:09] 's not actually the right pattern so yeah yeah seems like these are hard solutions yeah some some of them are completely doable um as i said all these async ones here are
[02:58:27]  solvable and these are this is largely my motivation some people i got asked earlier i was doing a podcast and like why why are we doing solid what are we doing for solid
[02:58:35]  2.0 what's the big feature and it it is actually i mean we can't do this on cleanup one per se but it is actually around this i think this is
[02:58:43]  the part that's like lacking i think resources can do everything you need them to do but it's not easy like on the easy side on the basic side they're incredibly
[02:58:55]  powerful so like you can do way more than you can do with a lot of solutions you pick up but the second you want want to do stuff more complicated that easiness hind
[02:59:07] ers and it basically goes against the philosophy of solid and solid designs where um it's not about being easy it's about keeping these things simple and resources are not simple so
[02:59:20]  um yeah i i i think these are just this is the they need an overhaul so yeah these last two really got to it and that's the end of the list well
[02:59:31]  that's that wasn't bad at all for me the weakest point of solid is the async stuff transitions are still buggy it's difficult to debug defense triggers many things we
[02:59:39]  fixed dress all two point and we have a created whether you're paying points it's sharing in the comments yeah yeah yeah okay so yeah this this is accurate basically if we
[02:59:51]  were to carve up this whole list again really quickly the first two are kind of design mistakes that can be addressed might make people unhappy but it's solvable it's just mistakes
[03:00:04]  that were made um the next three props wrapping untracked reactive bindings and on cleanup inside resources um they're all kind of fundamental uh there isn't a ton that
[03:00:16]  can be done like we warn you know error etc on this case the other ones this is just that is going to be the trade-off that's what people are going to
[03:00:24]  talk about for years when they're like use effect you know like it's it's going to be something like this i don't think these are terribly common cases when you try
[03:00:34]  and actually put them in you might trip up on them but they're not like the things you use every day and then the last ones are yeah create async data fetching
[03:00:43]  is hard we took a stab at it in 2019 when we introduced suspense we needed something this is this is why suspense took so long in react you need the other side you need
[03:00:53]  the data primitive and they basically just went through a whole bunch of different cycles and then finally we're like okay react server components that's where we're going to put it
[03:01:02]  and then it became really the only like blessed way of doing it where technically streaming all the other mechanisms built into react 18 that they use the server components could work without server components
[03:01:14]  you could do out-of-order streaming without server components but they didn't expose it that way because like trying to avoid this level of complexity i i i will grant them
[03:01:23]  that async components with async weight kind of looks and feels very nice on the surface that's not the solution we're gonna go with solid i've talked about that
[03:01:33]  at length i don't think that really works but i i do see why we've ended up here and i think this is one of the most important areas we can work on
[03:01:43]  it's it's very interesting to me because there's frameworks like react who you know took a long time took a couple swings and solid kind of got in there early and
[03:01:51]  doing that and then there's other frameworks that aren't even really concerned with this problem haven't got there so maybe i was just nerd sniped by react but maybe also um
[03:02:02]  this is just uh you know where things are heading and not everyone's realized it yet all right okay cool stream still going and i think we're ready for this week in
[03:02:16]  javascript um got to do a little prep so give me two seconds here um as i get there uh i strongly suggest checking out my v talk if you get a chance
[03:02:32]  it's all about solid start point 1.0 what's preventing it getting out of beta is like the 200 open bugs where most of them are actually open bugs like people
[03:02:40]  are using it in production uh companies with millions of users but i am not satisfied that it's maintainable in the current state and we have work to do so we are reb
[03:02:50] asing it on nitro um that was the big news but yeah let's let's uh let's get to that in this week in javascript i just wanted to kind
[03:02:58]  of put out there there yeah um give me a second um close down some of the extra stuff uh it's been two weeks so i actually get to go back a little
[03:03:24]  a little bit further which is kind of fun let me see if i actually have any bookmarks because i actually don't know that i actually bookmarked anything this this
[03:03:34]  time oh right i remember my bookmarks so what two weeks ago my last stream was what like on like the 23rd or something all right um let's get this going
[03:04:01]  when was my last stream okay yeah it was it was like the 22nd okay okay cool all right i think i think we're almost ready for for this week in j
[03:04:33] avascript um so just bear with me a second yeah yeah all right all right all right all right all right okay get it there i'd like to talk about um
[03:05:08]  this week in javascript this week in javascript or actually two weeks because um i was traveling involved me at a number of conferences while i was only physically in
[03:05:22]  person at one of them it seems that this great image of me wearing sunglasses appeared at a few of them so i someone asked me if i could wear these sunglasses on stream
[03:05:38]  and i decided to so let's let's let's look when i say someone actually i think it was uh our friend dave um yeah apparently these sunglasses look great so
[03:05:55]  yeah honestly i can't see the best out of them they have the emoticon white pieces on them but it does the trick but yeah there's a there's been a lot
[03:06:07]  of talk over the last couple weeks over um the fact that svelte moving to signals and finding more importantly fine-grained rendering is kind of this ecosystem shift where
[03:06:19]  everyone was kind of grouped around react and now everyone's kind of grouped around solid you know how it started how it's going um this graph actually started from a talk from mis
[03:06:30] co i don't actually agree with it completely i think people even though this is like kind of small i think view was more fine-grained than svelte before i
[03:06:40]  think people really misrepresent view view view did have the v dom but it always actually had fine-grained reactivity and even in the rendering it was doing stuff
[03:06:53]  based on the reactive graph whereas uh svelte was always component based even without their v dom so like i would in this image i would have switched view and and svel
[03:07:05] te similarly um i actually think where they're heading with view vapor and svelte 5 both of them are actually right beside solid on the other side of quick and ast
[03:07:18] ro um quick and astro or might actually be or it's not astro sorry angular my bad i just saw the a quick quick and angular might actually be um the least
[03:07:30]  granular where these things are going but i i don't know this for sure we're gonna actually check this in a little bit all right so are these the javascript
[03:07:42]  is easy glasses yeah i don't know but yeah this this this signal topic um has definitely been a hot one the last little bit um i i i've been what i was
[03:07:58]  like traveling but i just kept on getting like notifications on like on where this shows up um yeah where's where's the actual slide here we go um yeah this makes it
[03:08:11]  a little bit clearer what i was talking about with the positioning from what we saw svelte 5 and i did hear that this is not a it's not quite i i
[03:08:19]  saw an issue earlier i forget if i bookmarked it where this svelte 5 wasn't quite as fine-grained as solid but generally um these where these guys
[03:08:27]  are heading are actually very much in here and as i said i think view was always on the other side so anyway funny conversation but yeah apparently i missed a conference it react
[03:08:39]  alec i don't even know how to say this in spanish right um we're solid and signals and just kept on coming up over and over and over again there
[03:08:49]  are some silly pictures um where people are doing flexes i i i want to say tejus and a few others i i it's it looked like it was a fun conference
[03:09:02]  to to participate at um there i i haven't been on the conference circuit as much this fall trying to get work done but um yeah it's it's yeah i'm
[03:09:15]  trying to see if i if it was a response it's probably part of like some deep uh tweet thread it's all good if you were around you know what i'm talking
[03:09:25]  about um but yeah i just kept on seeing all these mentions and i was just like what what's what the hell's going on over there um eric gave his solid talk
[03:09:37]  um there's been there apparently this was a crazy react conference so all good we'll just kind of move on from this point um but yeah i mean a couple other things
[03:09:53]  caught caught my eyes and i i i think that after last week i i was probably a little harsh on svelte um on the marketing side of things but i think i
[03:10:07]  think it did open up some really good conversation um rich harris actually um went and released his first uh uh where is it here hit his first self-published
[03:10:22]  youtube video so there is now a rich harris channel i bet you if we look he has more followers than this channel does already let's let's let's i wouldn't
[03:10:32]  be surprised um rich rich is a force but yeah he you should check out this video if you get a chance uh he talks a lot about the idea of which we talked
[03:10:44]  about last stream with the idea that um what svelte provides naturally lends to people making wrappers over it um it's funny i have to see closed captioning
[03:11:00]  on right now i didn't intend to but like at a certain point in the video he actually re-implements uh both view and solids kind of wrapper apis because
[03:11:09]  while they they showed the getter as an example they're saying like there are different ways and because of the reactivity is kind of semi-compiled you can choose
[03:11:18]  how your wrappers and the community will land on it etc um which is interesting because like part of our reason for liking the functions is being very strict and specific on what you
[03:11:30]  know like making it kind of like consistent where this is kind of like let's see where this goes um i'm i'm definitely interested to uh to see where where it
[03:11:40]  does go um because i said it looks like svelte 5 is definitely very much on the same page of what we've been doing with solid similarly uh also kind of related
[03:11:57]  is uh i was talking about subs because the channel finally hit uh 10k subs which is pretty sweet given everything but um i i got to meet rich in um new y
[03:12:09] ork when i was at ijs um which is very cool we went to a pizzeria um where was it it's called juliana's um in brooklyn
[03:12:19]  where i was going to try some you know new york pizza i was told apparently by the pizza police when i was at ijs that the pizza i actually had was
[03:12:28]  not couldn't be considered official new york pizza because it had uh some broccoli on it um but regardless it was awesome meal first time i met rich in person we talked for
[03:12:42]  uh several hours really about you know where things are are um going really interesting um conversation honestly uh and i'm actually pretty excited because we're gonna um i'm gonna do
[03:12:59]  more svelte content next week when uh dominic ganaway joins us to talk about svelte 5 and the work he's been doing so yeah you can expect
[03:13:07]  that for next friday and uh yeah no i people the internet seem to like this picture uh considerably so uh that that that is pretty good i honestly just glad to finally
[03:13:24]  meet rich in in person uh yeah that was ijs what else do i want to talk about here yeah having too much fun with the idea that i don't know if anyone
[03:13:35]  actually got my bad joke but solid uses 3d um shapes for a lot of advertisement and this was me kind of poking fun of everyone adopting signals um but anyway it's
[03:13:48]  all good um uh yeah so it yeah this this has been uh definitely an interesting couple weeks for me um just traveling and seeing kind of this mass kind of understanding of like that
[03:14:07]  you know things are heading in a certain direction yeah i actually like this yes rich accepting embracing complexity being such a fun arc yeah i mean it's interesting i mean we knew
[03:14:19]  at some point that there would have to be uh like svelte would mature and that we would need more powerful patterns like what was lovely about svelte early on was
[03:14:31]  that it was like oh let's just use let right um and but then like there's so many things you couldn't do i've complained about in the past right but
[03:14:42]  you know ruins can do i mean before ruins you could do it but it wasn't like first it didn't feel first party now they've kind of kind of bridged this
[03:14:50]  gap but it does add a whole layer um to svelte which people might have not expected um i saw this uh thread from uh from j larky paraso
[03:15:02] cial whatever you want to call and um it is this i suggest you know people take maybe a quick look at it it it talks about this tension between the magic and the non
[03:15:14] -magic because for a while there i was just like i was actually on this almost just used store side i've said i really like the svelte knot in
[03:15:23]  the svelte files um and it's i like this kind of defense of it so like there there there is some interesting issues here because of the fact that you know
[03:15:46]  reactivity doesn't work in javascript but like i think we've kind of just gotten there to accept that there's this weakness in the language and that we need to
[03:15:56]  like i think we're all just getting there like we need to be able to do this to get the work done we want to get done so yeah all together yeah actually
[03:16:10]  this this thread was great i remember now why why i uh why i talked about this because you know comparisons to hooks again not there is there a way not to make it a
[03:16:20]  view three moment it sounds crazy but i think they want this to be their view three moment because view three was right felt five is right those were the steps in the right direction
[03:16:33]  i'm sorry i i suck i ruins there i just since i was a kid i've this this is one of the words that i always pronounced wrong and usually i got
[03:16:44]  away with it because when people talk about like looking at ancient ruins or ancient ruins like it's like that's like no one corrects you no one thinks it's a different
[03:16:53]  thing there are some languages um you know kind of like on an academic side but i don't nothing that's ever to my knowledge gone popular mainstream um yeah i mean this
[03:17:10]  whole thread was a lot of thinking out loud but i actually quite quite liked this exercise because the truth of the matter is um like this is a really good step forward for
[03:17:31]  svelte even if i might have not come across completely like that last week i think it is definitely um so i actually no i think i was pretty clear on uh thinking
[03:17:42]  it was good last week it was more just like i i i i i there there's certain positioning with svelte i guess where i've kind of pushed back a
[03:17:53]  little bit about like the them not being exposed um but i think that uh it doesn't matter we're kind of getting to this zone where like people just know that they want
[03:18:07]  these primitives probably want them in the language and they're just trying to figure out what the like how to actually get make up for the shortcoming of javascript
[03:18:17]  that we can't seem to like deal with um also i want to highlight this article i'm trying to remember why i didn't share it at first oh right because i'm
[03:18:26]  always self-conscious of my when i when i make myself into the meme um this is this is pretty harsh on react because it's they're saying like they're they
[03:18:37] 're kind of sitting in the corner and like not following the the beat wave or the signals wave while everyone else is doing it but um this is a cool article um it's
[03:18:45]  called react versus the world it has a lot of similar vibes to to my like react versus signals um article from several months ago but um the author's a great writer um so
[03:18:58]  yeah i i think this is a good one to check out i just put on the list um i i think the only reason i didn't retweet it at the time
[03:19:09]  was because i didn't want to get in the middle of uh of whatever that that is suggesting but the article is actually quite good yeah i think that's a pretty accurate way
[03:19:20]  to say it there's interesting question about composability in relation to runes because runes are not but signals they create are right which means at that point the signals aren
[03:19:32] 't actually hidden you kind of get them maybe i don't know maybe because the compiler on the other side you don't get them yeah actually that's fair yeah it is a
[03:19:41]  very interesting thing because the the in the signals discussion that's happening right now you know behind closed doors but will soon be public for building at the browser this whole scope based versus
[03:19:52]  stack based question is actually coming up a lot right because svelte works on something that looks scope based where say like more classically like solid uses stack based and they
[03:20:02]  both have these trade-offs which we talked about in that article you know so yeah i mean it's it's definitely uh a challenge um to kind of consolidate the funniest thing
[03:20:15]  is we both kind of agree that we don't really want people to be like thinking about them ultimately we want them to kind of be a language feature it's just that
[03:20:24]  like how you get there when you have these limitations now we kind of just you know aren't 100 aligned on yeah no these glasses are really cool there's a reason why this
[03:20:38]  ended up across um you know a certain portion of tech twitter this past week you know we already talked about this okay let's get let's get back to it um yeah
[03:20:53]  i think we already talked about wallet support yeah i'm trying to remember there's been just a lot of libraries i always i always try and uh remember what actually happened after the
[03:21:07]  fact um but another big one that i want to talk about was vconf um i'm i was traveling so i'm still catching up on videos um obviously i i have
[03:21:19]  gotten through the the framework talks um i haven't got to the testing or tooling talks yet so i haven't seen them completely um but yeah very much enjoyed all the talks in
[03:21:32]  the in both framework sections um right from you know nakil talking about vinci um and uh you know seeing angular you know i always talk i'm always excited when seeing
[03:21:44]  angular kind of uh adopt and the new tools and kind of like the change going on in angular it's just been amazing to see this kind of move forward um they they they
[03:21:54]  they don't i don't i shouldn't say they don't care because they do care a lot about existing users and the existing flows but they're very dedicated now to modern
[03:22:02] izing stuff and making angular more uh accessible to new developers again so it's very exciting to see um there's just there's a lot happening on on on beat side um
[03:22:16]  there's all there there is also i watched a a bunch of talks in the afternoon marco releasing marco run talking about their their meta framework which actually has something pretty cool
[03:22:29]  um their router is compiled which is i'm very curious about i think we're gonna have a chance to ask michael rawlings about that because in two weeks we're gonna
[03:22:39]  get the marco update we're gonna find out about marco 6 we're gonna find out about marco run and i'm pretty excited about that so the next couple
[03:22:48]  streams are going to be pretty cool um i think though the funniest thing that probably stood out to me uh while i was in the middle of watching that stream was that um
[03:23:02]  manu i believe said that quick doesn't use a virtual dom which if that is true that is a new development that i was not aware of i think he said something along
[03:23:12]  the lines is we use jsx but not a virtual dom and i am i am very interested by that by that claim um because that is i could see the path heading
[03:23:25]  there but i i wasn't sure they're there yet so i if you uh it's actually quicktopbuilder.io isn't it yeah i i i kind of
[03:23:33]  want to i haven't i haven't explored this on stream since since uh well it's been a while um yeah i mean for some updates but like i wonder what the
[03:23:54]  quickest way to to confirm this is because i want to what i want to do is i want to go in here and i i want to grab a what do they call it
[03:24:08]  use signal and how's the best way to do this um let's go const s equals use signal and then go s dot value i just i just want to do this
[03:24:29]  right here um actually the easiest way to do this actually this might actually just be this const r equals this return r okay so we got a few options here we're gonna sorry
[03:24:48]  we're gonna we're going to assign a signal top level to a value we'll we can put it in here too just for fun um what does it say here let
[03:25:07] 's make it five okay and then we're gonna we're gonna console log some stuff um i'm sorry i keep on pressing save i don't know why let's go j
[03:25:27] son oh right i we need one more thing we actually need to make this code come to the client so to come to the client okay so yeah okay i i've got
[03:25:45]  something that isn't recursive so this isn't fair but type p props object this is definitely a vdon node immutable props null children hello quick okay so this looks like
[03:25:54]  a vdon node but to actually make this code ship to the client because that's on the server maybe it's different on the client we would need to um add like
[03:26:04]  uh on click dollar sign and then we would need to sorry there's not on colon just we'd need to actually update the s dot value plus plus on click what's
[03:26:27]  it say 10 numbers and assignable the same one all right of course i need a function wrapper okay um this is the ssr side how do i see the browser side
[03:26:48]  oh here it is client type p yeah it's it's definitely a vdom okay cool just just wanted to double check that um unless the playground isn't updated um
[03:27:02]  it's possible that this is an older version but i'm pretty sure um i'm looking at a virtual dom here can i yeah and i mean thank god for that virtual dom
[03:27:20]  because if i click this 10 times 10 times see and the whole component re-ran i'd be recreating this paragraph element over and over and over and over and over
[03:27:33]  again um or whatever js like i put in here so without a virtual dom in this scenario if this works and it updates like it does this would be very inefficient so it's
[03:27:46]  a good thing for that since quick supports this that it is a virtual dom yeah i mean we've had manu and uh adam on the stream and misko on the
[03:28:07]  stream previously i just was thinking maybe that like we they haven't been on for a little while i haven't followed the latest i thought maybe i missed something new that had
[03:28:21]  changed that would be some intervention component it would be a vdom if they use vdom reconciler yeah i i guess so but i'm just saying it's like
[03:28:35]  when you render the jsx you like both on the client on the server you end up with an with a virtual dom representation where you can see the the like like the elements
[03:28:48]  as objects um like it's basically there's a render pass you're right it doesn't always reconcile um but yeah anyway good to know i i i it's possible this
[03:29:08]  isn't the latest but i just wanted to like quick sanity check that i haven't missed something here um at least within the last couple months if something came out in the last
[03:29:19]  couple weeks then maybe that'd be different but just like in general quick has been using a virtual dom as far as i know this whole time okay but yeah uh yeah no it
[03:29:33] 's um vconf is amazing i love the format i love the fact that everything's pre-recorded and then it just runs twice um i wonder if the live stream's
[03:29:45]  still up can we still get to it the good news is the process of making sauce map and yeah so they did a smart move this time where they like put the replay
[03:29:58]  on a second channel or like a second video so you can just get in here and watch any of the talks um at any at any point um and there's shortcut links now
[03:30:10]  if we go to if we view it on youtube i think you can actually um find the specific talk you're you're looking for right i love this feature on youtube but
[03:30:21]  you can actually find it and be like you know there's the vinci talk solid talk let me see if i can find it um further down the road you can tour
[03:30:30]  the ecosystem fred yeah there's a great astro talk to talking about view transitions um this helps me and i love this kent c dodds was present uh or was
[03:30:43]  one of the speakers and he talked about react router in beat and basically called it a framework i he said like obviously for more features you want to do something like remix but
[03:30:52]  i'm he he basically was suggesting it's enough and i love seeing prominent people from the react ecosystem you know kind of figure out how to frame the whole framework thing because like
[03:31:01]  his whole conversation was that uh basically his conclusion was that frameworks are a matter of are relative to the scope of the problem essentially so um yeah very very cool to see some
[03:31:13]  prominent people from the react community participate in vconf that has not happened in the past so um yeah no i still got a couple more talks to catch up on i have not
[03:31:26]  watched uh any of the mobile talks here i i interested to see what making a coli with beat is from theo um but uh it it looks this this conference is always
[03:31:40]  jam-packed so definitely cool that this is available for people to watch at their leisure all right i'm trying to see where i was at here what else do i
[03:32:00]  have here right yeah actually i'm i'm pretty excited to talk about this next one here um it's funny because i've been working at netlify now for over a
[03:32:19]  year and i have to admit i haven't talked about a lot of netlify features very much um and it's netlify has been going through a bit of
[03:32:29]  a transition we've talked about that a little bit on the stream so it's it hasn't been you know there's been you know the enterprise focus and all you know a
[03:32:38]  few other things and so it just hasn't really haven't crossed paths so to speak even though i work there um but this latest feature definitely is on my radar and the kind
[03:32:48]  of thing that i i care about and it kind of represents what i've been noticing recently in netlify this kind of re base kind of almost like back to basics
[03:33:00]  approach and stuff where you know you see the excitement on like working again on the platform from like you know rethinking it from a prunitives level and um largely representative even
[03:33:12]  like matt's been taking on a lot of this stuff himself personally um that's why he was very excited to share this but um i'm pretty excited about this is that
[03:33:25]  i think i just have to open the article to actually show you what i'm talking about this um new use of cash control headers and still will still while revalidate
[03:33:40]  um through header pattern is incredibly powerful and it's also um you know it adheres kind of to web standards see right now we're in the state and you know salt
[03:33:56]  start we've been waiting for you know people waiting for to come out and i keep on going okay need this feature for this platform this feature for this platform do you support d
[03:34:04] sg do you support isr you know and all these different platforms doing stuff and to be fair there is an element of this that is obviously netlify specific you
[03:34:12]  can see it right in here but what this allows um using basically just standard header configuration is control over that kind of isr like experience like without instead of going to something that
[03:34:28] 's very proprietary we almost are working towards something that's almost standard like like sure maybe instead of netlify you have versell here um but seeing this kind of shift off
[03:34:39]  of being able to give this kind of control to the end users and being able to you know like not feel like you're like in a very specific system um that was
[03:34:52]  built just for that platform is really quite powerful like i've never really wanted to work through how to get you know ideal isr you know for these different platforms and now
[03:35:06]  it might be just a matter of setting the right headers i see people are uh people like the sunglasses but um yeah no i this is this is a a very powerful thing
[03:35:37]  when combined with these edge functions there's some other great examples here um so i'm using e-tag for um you know invalidation um based on deployment like you have
[03:35:49]  the control of when these things work and you can just use these pieces i believe i was trying to look it up i think versell also has this very similar feature um so
[03:36:04]  i i do what was it uh let let me see if i can find it uh versell cache control let me caching on versell's edge network yeah okay
[03:36:22]  so this looks this looks similar um s max age i guess they have some special keys or whatever so it's like not quite the same but i i think this direction in general
[03:36:42]  will hopefully get us to a place where we're like we're not talking about isr anymore and we're just talking about like that's how we build our website um so
[03:36:50]  it does look like like there i don't there are some similar mechanisms here uh but yeah i i'm i'm stoked to see this happen in general um so yeah as
[03:37:04]  i said i don't always you know talk about the the company stuff but this this is very cool um especially you know being very close to standards and being really accessible to anyone
[03:37:19]  who who builds on these platforms so yeah good stuff i kind of wonder whether you worked on apply stuff day today or if they paid you to do things no i honestly it
[03:37:39]  i only really end up talking about stuff when they've been doing things that are relevant like like this recent refocus that's happened in the last you know few months um
[03:37:52]  seems to be something that i can get excited about because like this like looking at the primitives looking at the basis um you know giving that control to the to the you know
[03:38:02]  developers and the framework authors is really important and you know these kind of these kind of building blocks like you know netlify has a lot of a lot of pieces like
[03:38:13]  they have stuff kind of similar to the file system api or build output api um you know that say like for cell has but they never really they didn't push it
[03:38:22]  they didn't make make that a marketing thing that they pushed um and so we never really talk about it uh but like i'm happy to see uh netlify like return
[03:38:32]  to like this place where like these are the things we're talking about um you know so so get your fundamentals right everything falls into place yeah and that's largely what the
[03:38:49]  solid philosophy has been right so like i yeah this alignment you know feels quite nice and i'm excited to be able to talk about this yeah yeah yeah actually you know who
[03:39:04]  those guys are like the biggest supporters this look here's michael jackson in here you know nice work let you know like both ryan florence and michael came
[03:39:15]  in to to congratulate um matt on this let me see if i can see it here they they hid the quote tweets view post engagement yeah see retweets from michael
[03:39:26]  jackson use the platform i think i think there's something that just slightly yeah this is this is this is very good you know it's it's not the thing that
[03:39:40]  gets blown open but like for those who appreciate these kind of things um like this is the direction we want to see things going we don't want to try and figure out how
[03:39:50]  to use some proprietary isr thing you know so yeah this is the the the the thing is the remix guys are right fundamentally the thing is not all the tools are were
[03:40:04]  in place on all the platforms and this kind of closes the gap especially with edge functions so yeah this this this is this is very good um i say this as i'm kind
[03:40:16]  of exiting out of worrying about this layer as much and passing that on to nitro to a certain degree but i i just just seeing these kind of things i know will
[03:40:26]  make everyone's life a lot easier um we talked about vconf yeah let's give uh fevin another shout out um vote valibot he's done now with his um
[03:40:44]  paper uh helped edit a bit on that as well and he's just in i guess promotion mode now um but this library is impressive um it's a good it's good
[03:40:58]  quick read you know good promo article um i i love this jared uh palmer uh uh tweet that he quoted here about the fact that uh cursor based or chaining syntax
[03:41:11]  doesn't really work well for tree shaking um so yeah no his project's been on the up i'm very excited to see this since all start um others are excited too
[03:41:25]  um so yeah um i think this library has a lot of legs and um he keeps on working on the performance so yeah this this is this is what we've been waiting for
[03:41:39]  i think on the validation story you know it was fine on the server but now it's actually small enough to be usable in the client yeah and we already did that segment
[03:41:56]  about solid criticisms i think it was a great article um i guess that's all i really have this week um i just wanted to do a quick look at my bookmarks
[03:42:10]  again but uh oh right right there was a link early on and i might have accidentally closed it at one point um i just i wanted to i wanted to look at uh
[03:42:25]  uh see if i can find it it was angular signals jsx there we go star this for fun um i i just wanted to talk about this one briefly um this came across
[03:42:48]  my radar i've been building like different reactive libraries into dom expressions the same core as solid to demo its capability i never thought of doing angular yet i did preact on
[03:43:04]  stream but um this is kind of interesting right because it's just the signals api plus basically the same experience as solid and they're just showing that like it's basically the
[03:43:13]  same speed as solid here um and comparing it to um you know angular no zone of 15. and i think this kind of illustrates like how it's not just holding the
[03:43:35]  signals it's what what you do with them that actually make the the biggest difference here i i we keep on hearing the signal conversation and you know there's certain amount of
[03:43:45]  people who dismiss it like we've had signals before and then or on the other hand there's people who are like oh yeah now i don't know preact has signals or
[03:43:54]  something and you know it's the same no like there is there is a huge difference between say adding signals to angular today and using signals the way view vapor does uh i
[03:44:08]  presume we haven't seen it out there svelte 5 solid it's it's it's there there is you know a significant change using signals is the start um so
[03:44:23]  yeah i i think this is uh i think this is cool to see people playing around with this i don't i haven't seen much chatter about this but um you know it
[03:44:34] 's it's cool to see people understand the potential here of applying these patterns yeah that's that's all i gotta say about that all right i think that pretty much wraps
[03:44:51]  it up here for uh this week in javascript i don't know if we'll be seeing much more of the glasses after this but uh i definitely had fun so
[03:45:06]  you know until next week when we have dominic ganaway joining us um to talk about svelte 5 and then the following week we're gonna have michael raw
[03:45:23] ling to talk about marco and then i'm gonna see if i can uh line up a couple other guests but yeah i think we just call the stream for today and
[03:45:32]  uh thanks for joining see ya