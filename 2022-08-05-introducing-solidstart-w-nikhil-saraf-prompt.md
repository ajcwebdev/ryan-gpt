---
showLink: "https://www.youtube.com/watch?v=eAwuPvRXNdY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Introducing SolidStart w/ Nikhil Saraf"
description: ""
publishDate: "2022-08-05"
coverImage: "https://i.ytimg.com/vi/eAwuPvRXNdY/sddefault.jpg?v=62eaa4d2"
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

[00:00:00]  you all for waiting um and thank you all for joining my stream today uh i uh very happy to have nikhil on again as a guest um to talk about solid start
[00:00:11]  uh it's been really a long time in the making we've been working on this well i i started this project back in i want to say hmm february 2021
[00:00:25]  that was when beat 2 came out right basically at the beginning i never really wanted to start making a meta framework i was like really wanted to focus on core and not get distracted
[00:00:37]  but uh learned a lot along the way i'm really glad that we did and i think it's really important for the future of how people develop applications in solid just giving people
[00:00:49]  a minute to join in on the chat if you're here come and say hi you know the drill but yeah sorry for the delay i was actually i had this demo all
[00:00:59]  set up and then i realized that i was banking on something being written in uh javascript versus uh or being written in typescript and i actually did the demo such a
[00:01:12]  long time ago that it was written in javascript um which is a little bit awkward i tried to port it in five minutes um but even i can't pull that
[00:01:20]  off so we'll just see how that goes but um i'm gonna quickly give a shout out on on twitter let's get some people in here on the uh let's
[00:01:29]  uh let's let's do that uh but yeah how's everyone doing today just give me two seconds here as i get this all going through all right cool all right well
[00:02:03]  now that i've taken care of some some business let's see how you do in chat has youtube uh given us a bunch of uh spam already no no we're good hi
[00:02:16]  everyone all right okay let's let's let's get this this this show started all right um and we're going to do that by welcoming uh nikhil onto our
[00:02:32]  stream so hello nikhil how are you doing hello hello very nice i'm doing very well how are you doing pretty good it's a little hectic i was i was
[00:02:45]  i thought i had everything in place and as usual i'm just double checking my demos and sure enough missing little detail but in general i'm pretty happy we've we've
[00:02:55]  put a lot of effort over the last uh several months into this um and it's it's awesome to kind of start seeing all those pieces come together uh but yeah last time
[00:03:05]  we had to kill on the stream he was telling us all about how to do webgl and ink and uh what else mark markdown and pdfs he basically took
[00:03:16]  uh solid's custom renderers to the extreme and showed us all the different things we could do with it um but that was back in i guess november or december time
[00:03:25]  period since then january yeah since then you've been doing a lot of different uh different stuff uh with solid and focusing on solid start do you want to do you want to
[00:03:34]  do you want to tell us a little bit about that yeah i mean the story is kind of weird because basically if anybody's read my github um bio i say
[00:03:45]  that i'm a co-founder of a startup and that startup actually honestly is we already shut it down almost like we don't work on it anymore but the idea was that
[00:03:54]  it was uh next js built a web app that you also used as a mobile app and stuff and it it was during the process of building that over like two three years
[00:04:04]  that i built up a lot of opinions about how things uh how we would have preferred things to be in that space in the in the meta framework space and then i think since
[00:04:14]  then um even on working with react i had tried to build like next js equivalents using just wheat as a as a foundation of it so that you know i could play
[00:04:24]  with all the plugins and stuff like that and then um then i came into the solid world and started exploring all that custom render stuff and then i constantly saw discussions about you know
[00:04:37]  what's the meta framework story like what's the ssr story like and um i saw you responding didn't see a lot of activity around it but then um that's
[00:04:47]  when i just started proposing some of my ideas about like okay should we do should we do this style of rpc and you know try to simplify this um should we
[00:04:56]  put all in one file things bring things closer and i think uh you were very receptive to those ideas and so i was like let me see if i can just implement this so
[00:05:04]  i started making prs and you start accepting them and then the ball got rolling and then i really see solid start as a vessel for like my ideas around this space and trying
[00:05:15]  to see how far we can push um what the ideal uh developer experience could be like um around building web apps so that's that's mainly my motivation here uh you know
[00:05:29]  working on a project that hopefully a lot of people can use you already see excitement about people wanting to use it so it's a good um it was a good uh vessel for
[00:05:38]  me to put out my work that i want to do in the space and the the energy was also really nice around the ecosystem about uh they were all very willing to like
[00:05:48]  you know listen to the ideas and give them a try even though some of them are out there yeah you you so you you were using react then to try and do this
[00:05:57]  stuff originally um yeah yeah exactly okay no that makes a lot of sense um but yeah so i i honestly i've been super stoked to have you on because as i mentioned a
[00:06:13]  couple moments ago this was not an area that i'd intended to spend a lot of time on initially i i was i was pushing it off pushing it off um we finally
[00:06:22]  got a really good ssr story in fall of 2020 i guess it was almost two years ago we've added streaming we added async uh suspense on the server all that
[00:06:31]  kind of stuff a couple years ago and i was like okay well someone go build something with this and then you know obviously people are like well how do you do it i'm
[00:06:39]  like okay well you you do it like this i started making examples and then it's like oh okay and then and they start building stuff and i'm like oh no no
[00:06:46]  but you gotta handle routing like this you need to do like you gotta you here i i built a nested router or and yeah like and i just kept on being like oh
[00:06:54]  no no actually like i i couldn't help myself um and you know i i i'm actually glad to found nikil and be able to step back a little bit on on
[00:07:06]  that side um and that uh that's that's made this you know process so much easier to be able to focus on the core stuff and you know so it's the
[00:07:16]  work we now have a actually a number of contributors working on solid start but it's been a long time coming you you all may have seen some of those demos that we made
[00:07:24]  like the hacker news demos and uh you know on the various platforms um i guess the first one would have been we did the cloudflare demo march 2021 uh but yeah i
[00:07:36]  mean there's a long path to go from a simple demo like that to like a full generalized framework that everyone can do like we have the pieces there already because of beat
[00:07:47]  but there is so much devil in the details um yeah i mean so it is it is a lot of work people you know talk about that like how long it took svel
[00:07:57] te kit um you know to go through its cycle we're on a symbol similar cycle remix i i think i said it to someone the other day i estimate it takes about
[00:08:06]  18 months to really take uh like a meta framework from beginning to where like a a sort of usable place and we've been kind of conservative i'd say we we are not
[00:08:16]  um we're not at beta yet for anyone's wondering like uh like what nikil how do you feel about the current state of solid start where it is right now i
[00:08:26]  mean it's it's it's tricky i think because the funny part is i think it's been since march or um i think in march or april we started saying like
[00:08:36]  let's try to see if we can get the beta out at the end of this month or at the end of next month and i think uh the trickiest thing around
[00:08:45]  this meta framework space is that your a meta framework is really trying to be in the middle of the whole universe for you right so it's it's got to take care of
[00:08:54]  bundling so when it's when it's bundling then you got to worry about what dependencies you can support and what what what dependencies will fail so that's the whole ecosystem
[00:09:03]  then and you have routing then you have uh server-side rendering and you have the client side so there's just so much to worry about uh for for that meta framework
[00:09:12]  so i think like as the bugs kept on rolling okay you're like okay this doesn't work perfectly or this so things kept on rolling forward right now i think in terms of
[00:09:21]  an api where i think we're reaching a good spot like where everything feels very balanced and everything kind of makes sense um the stability around you know all the hmr
[00:09:33]  like hot model replacement working everywhere you know that's a little finicky um all the adapters they sometimes they break so you know we've got to figure out a way
[00:09:44]  to test those stably um but otherwise i think the core code base is really is coming along really nicely it's very clean it's uh it um i think it's dec
[00:09:55] ently simple for contributors to pick it up and start uh playing with it a bit start changing things um i think it's in a good place but yeah i mean uh this
[00:10:06]  is really my first project that i'm actually trying to bring to people to for them to use in terms of a software package so i'm not sure what kind of what are
[00:10:16]  the sort of the formal requirements for something like a beta you know how how sturdy does it need to be so i i do uh delegate that judgment to you really yeah no
[00:10:26]  i mean that's the whole thing here we're all learning stuff people who've been joining me on the stream for the last uh year have x or i guess eight months have
[00:10:35]  seen that i've been looking there's there's like the obviously like the how should i call it like the the build process production process in terms of the steps beta how to
[00:10:43]  launch a product documentation all that kind of side of thing but also from a technology side we've had to kind of adapt to things as they change and i've been using
[00:10:51]  the stream as an opportunity to actually learn about other frameworks and see what we like about it and explore because it's great you the audience get to learn about it i get to
[00:11:00]  see what ideas are coming out and it just it's just win-win and we i feel like we've been able to incorporate a lot of that into solid and what's
[00:11:08]  actually really really cool is while you're just talking i managed to finish converting the app over i i i knew that i could do it in about five minutes i just didn
[00:11:16] 't have five minutes before the stream so i'm actually pretty stoked on that too um so um we're we've been talking a bit about this stuff i don't know anyone
[00:11:25]  have uh any questions so far in the chat in the chat or should we just kind of get get into stuff uh you know like any let's let's let's let
[00:11:35] 's take a quick browse through this chat and see how see how everyone's doing um let's see here people talking about component libraries um yeah what do we got here yeah any
[00:11:49]  test coverage goals i mean that's that's all that's always an interesting thing test coverage is always like uh one of those things that's like forever out there like you
[00:11:59]  can always make it better yeah we're gonna get into what solid start is and isn't um people tell me i should i should update my my article um it was 2020 when
[00:12:13]  i did it i think but yes i need to update my article um and yeah yeah sure yeah these are all topics we're going to cover so um yeah i i think
[00:12:23]  i think we should probably just get into it um my my port and as you can imagine we're going to get into it by using my my favorite demo in the world i
[00:12:35] 'm we're going to use the hacker news demo my port is not perfect because um i literally just did it in five minutes um because i had to update it from javas
[00:12:45] cript to typescript and some of the types are missing so i'm going to get some help along the way but let's let me share my screen and nikil i
[00:12:53]  want you to kind of uh we're going to go through the process because this was actually a little this is actually important to to solid start and let me explain why because for
[00:13:01]  us we view solid start as more than just um how should i put it more than just an ssr framework and it for us it is actually um it's like
[00:13:14]  the potential of how you could start any solid projects because and i want to show you this this sorry like literally shrink it as i say that i was trying to enlarge it
[00:13:24]  i want to show you this project that uh this is kind of starting point of any project you've used on solid today this is this should look familiar to you if you've
[00:13:31]  used veet um and this is just literally the vd get template that we use and i very hastily um copied over um this template yeah yeah it's because
[00:13:48]  like it's not even fully typescript uh i very hastily copied over this template um that that i i'd done in an old roll-up thing this is like what
[00:13:58]  i've been doing forever essentially this is a client-side rendered single page app the typical thing that you would might build with solid uh the index ts you know has a
[00:14:07]  router in it and the nav the outlet you get the root element and you render and i i i i'm using solids router i was i was using the file uh the because
[00:14:19]  that's all being on the nested routing i was using the uh the version of the router where you just define everything not as jsx um this is old like before i
[00:14:29]  had to just update all the imports a minute ago because this demo predates the modern version of solid router it predates uh um solid start it's just what most people
[00:14:44]  do when they start a solid app today and um they get the router in they define some routes and then you'll see this funny pattern i was prepping this for a file
[00:14:54]  system based router when i made this demo a couple years ago but essentially i i wired it up myself in that routes file and it otherwise looks pretty much like you'll notice
[00:15:07]  that we have these two files we have this data file where we can do some isomorphic data and we have our page and this if you've ever been to the solid
[00:15:17]  solid router docs you will recognize this pattern this is pretty much how you build apps and solid before solid start um where you basically have this parallelized data fetching and nest
[00:15:28] ed routing this is not part of solid start this is just solid um we've been doing this for a few years now um and this is just like the hacker news example
[00:15:38]  done that way right i just wanted to show this example because maybe you've tried something in solid before and maybe you've kind of wired it up yourself i'm not sure everyone
[00:15:49]  even got to this pattern i tried to document it the reason we separate the dot data from the dot tsx here and actually i can probably rename these to dot tsx
[00:15:58]  and they'll probably complain a bunch because i'm missing some types but it probably will still work um the the key part and reason we do this is so that we can code
[00:16:09]  split it so we can use it in parallel you can fetch the data and fetch the routes and even nested do so in parallel and when we do that um we can put
[00:16:21]  them in different bundles so the data routes which have to do the data uh loading can go in the main bundle and the view code which is usually much much larger can
[00:16:34]  go in the the its own bundle yeah exactly and loaded as the route needs it so that way you can load the data and the and the route in parallel at the same time
[00:16:45]  and hopefully after i just do that change our our app still works and i i think i think it does so i apologize as i said this is very last minute for me
[00:16:55]  because i had to take very very old solid demo and move it and you all should have seen this this example before because it's just typical hacker news it's client routed
[00:17:04]  you see the nice flicker when i refresh which can happen sometimes in streaming too but my point is um this is the same old like if we view the network and we look
[00:17:16]  at what gets sent over the wire here although i'm in dev mode so you can ignore a bunch of other stuff you will see that it is literally a root element with
[00:17:24]  an id nothing is server rendered this is pretty typical now you might be thinking to yourself that's great i've got my old solid project that i've been hacking on for a
[00:17:35]  while what does solid start do for me what what what does it what how can i use it so that's where we're going to start so nikil um i guess
[00:17:46]  we're best to just start by making a a new uh solid start project right now um yeah yeah yeah let's do that yeah okay so i'm just gonna switch to uh
[00:17:57]  one of my many screens here and get let's just get started with this uh let's see here uh solid it's funny oh it's here it is there it is
[00:18:07]  yeah i'm just gonna close down this app and i'm going to go up a level and then i'm just gonna go uh npm init solid at next um and i
[00:18:20] 'm gonna call it solid hacker news okay proceed yes let's hope this all works yeah we we we're moving stuff piece by piece into the solid js npm org names
[00:18:38] pace um so meta and router are there so far but yeah this will keep things much more consistent okay so i'm gonna start you see there's actually a hacker news template
[00:18:47]  here but let's let's not do that i'm gonna start with a bear template here and it asks me if i want to do server-side rendering and honestly at this
[00:18:57]  point i don't i don't actually know um if i want to do server-side rendering i have a client-side app so i'm actually going to say no i
[00:19:02] 'm not going to do server-side rendering and i'm i'm yes i'm going to use types you're like i hope this works okay yeah yeah we're doing the
[00:19:10]  seat of your pants see your pants let's hope this works okay if not i have a backup but um the problem with these things is we were pushing development and working on
[00:19:18]  the stuff and examples right up to the wire that i haven't even tested these demos we'll learn we'll learn um as we go here so let's uh let's let
[00:19:28] 's open a new uh sorry let's open a new vs code window yeah and if i'll open and let's go example where were we development examples solid hacker news okay
[00:19:43]  cool and this right now is an empty solid start project built for client rendering let's hope it has everything we need interesting i think it does but i one interesting thing is it
[00:19:57]  looks like well let's look at this for a second yeah or let's let's i'm gonna use npm because i'm just more comfortable with this and install and
[00:20:09]  the first thing you're gonna notice is this is not your typical beat uh template right uh this is a little bit different um first of all it's gonna have this meta framework
[00:20:23]  type setup we have components folder we have a routes folder and we have an entry client and an entry server you're like thinking for a second entry server why do we have
[00:20:33]  entry server well um let's not worry about that too much at the moment because solid start does support server-side rendering and uh we decided that we it was easier to just
[00:20:46]  set up a universal approach to it and we got some css in here but our app really starts in this route um tsx and you can see right from the h
[00:20:55] tml tag down we have a few specialized tags coming from solid start html head body and then we set up some really basic suspense error boundaries uh this has got some
[00:21:06]  links in it um i i'm still on the fence here one of the things that we added for and we learned this from spell kit was that we actually made our anchors
[00:21:16]  completely progressive so you technically don't need to use a link component to get the full advantage of client-side routing which is really powerful if you don't want to hyd
[00:21:25] rate part of the ui and still have links work client-side routed but we'll get to that later we can use links here but i'm just seeing what this
[00:21:32]  looks like and then our entry point here is routes file routes um this routes component looks like it's just the standard routes component coming from solid router but this file routes thing is
[00:21:44]  new and i'm gathering it's for the file-based routing system but exactly we we did put client false so if i just go npm start here sorry i mean
[00:21:55]  mpm dev and run dev yeah sorry my bad uh if we just do mpm run dev here and we go back to our localhost 3000 we'll see that oh it
[00:22:05] 's already hot reloaded a very simple demo but if we look at the source here um i wonder is the does this actually how does this work uh do we send in
[00:22:19]  dev are we also client only i can't yes if you go if you go yeah look at the document okay yeah so we actually just send the body um with nothing else and
[00:22:30]  this is being client rendered so this is actually and and this is all client rendered so there's no hydration or anything right now and this is not found right so in theory
[00:22:39]  i could just let's let's move my hacker news demo that's completely client side over into into this new client-side solid start because so far we haven't actually added
[00:22:50]  much of anything so i just want to kind of i think it's one of our first things we should actually do is just get ourselves in a reasonable place for a starting
[00:23:01]  point and i guess the first difference is this index html um yeah some of this stuff should go inside root so our root.tsx file is mostly a replacement for
[00:23:15]  what your index.html would have been um and the idea is that we do it all in jsx and javascript so works with server-side rendering but
[00:23:24]  also works with client-side rendering whichever mode you want to select without changing your files right so it looks like for the most part it's just the standard stuff so i'm
[00:23:33]  going to keep the standard stuff and i guess this will be capital i guess you can do lower or uppercase but i'll just do capital just to be consistent and i
[00:23:41] 'm gathering there's a title tag here okay so let's just do that there's not much from root um i i'm going to keep the suspense and error boundaries but
[00:23:51]  what i need here and i'm i'm not going to worry about routes too much i hope if i delete this folder not everything will just die on me um it might okay
[00:24:00]  it does okay well that's fine we don't need we don't need file routes right now um let's just remove this for a second and let's hope that this
[00:24:09]  doesn't die on me no natural work oh right okay so so essentially we've kind of replaced our index we have our scripts injected here this is where our page scripts are and
[00:24:23]  i just want to move my old app that i haven't touched for years over to this um and yeah to do that i'm i'm just going to grab my pages
[00:24:33]  and my components and my lib direct i'm just going to grab this whole thing and just copy and paste it because i i don't i don't know i don't need
[00:24:41]  any of this i don't know what any of this is i'm just going to delete this and i'm just going to basically wholesale move my app except for the entry points
[00:24:48]  over because i know the entry points are going to be a little bit different but there we go um this is just my app uh and and the lib and components um oh
[00:25:01]  that's interesting it's funny i i didn't realize i'd implemented this the same way i'd implemented for partial hydration that's just that's actually funny but let's let
[00:25:16] 's not worry about that at the moment and uh so we've we've done that and the there's some we should move the types and the routes over because this is
[00:25:28]  how i define the types and routes in my in my project um but right now i am why did they go in there okay that's fine right now i'm not trying to
[00:25:37]  use anything from solid start i'm just trying to get my old app just working um so my hope is that if i do this um what does your routes export yeah okay perfect
[00:25:52]  right so i have my my thing so i just need maybe in this root tsx to actually import these routes exactly so so file routes is meant to be exactly what you think
[00:26:05]  so it's meant to be an analogous replacement to what you would have done by writing all your files all your routes in jsx or in that array style json config
[00:26:15]  right right because what i what i did in my old app here which is pretty simple is that i went router and then i passed in the routes um so you so what
[00:26:24]  you do on line number nine you can still do in in the app so you can do use routes get an outlet and put that in there okay yeah or call it i guess
[00:26:34]  i can call this whatever i want i'll call it routes maybe or i'll call it outlet it doesn't really matter so i can just do this and import routes from
[00:26:44]  this and in theory i can just go out outlet right there and that should be fine and as long as uh use routes would need to be defined i also have to import
[00:27:04]  use routes um probably from uh did do we did we put it through here um uh yeah i don't think okay and then and routes yeah you should import yeah yeah see from
[00:27:19]  from here so in theory um i mean this is just hacking it together i i should be able to mostly port stuff over i don't i don't know what's let
[00:27:29] 's okay i haven't pushed the styles over but this is actually working hack news demo uh let's let's just grab the styles uh uh from here so i don't know
[00:27:41]  if this is the best place to put them i can just throw them in root css uh why not yeah exactly exactly this is this is this is hacker news demo doesn
[00:27:49] 't isn't concerned with style scoping or anything so oh okay yeah we're just we're just missing the nav um right the root css here should instead of having this
[00:28:00]  should it should use the nav component and we can import nav from i guess we do some nicer stuff with solid start right because i can do like this yeah components and and
[00:28:16]  now i can import nav and again it's nav from this and if if everything went went right and our hot module reloading works i've just ported our old v template
[00:28:30]  over to to solid start without really doing anything right like yay okay still works all right and i mean that that this is part of i think one of the goals here right
[00:28:44]  um this this we just wanted this this is still the client side app that i've been using forever i didn't actually use like any of solid starts features practically um i just
[00:28:55]  literally picked up an app i already had and it still works because this is all just veat and it's a veat plugin that's just a little bit of a wrapper
[00:29:01]  over our standard veat plugins so this isn't a big exactly so the funny thing about this is in theory i think uh did i move the types over and i moved
[00:29:12]  the api over yeah i don't even need this demo anymore uh the old one i've already moved it we're done with it we are now all in on solid start
[00:29:20]  exactly so what what what what can we do next uh nikhil uh in terms of uh uh yeah this is an interesting this is an interesting place right so we're uh
[00:29:36]  we've been able to write an app just the way we would have written a single page app right uh and i think the whole sps story has been about like building a
[00:29:44]  developer experience that makes sense for most developers i think so you write one app you don't have to write two apps one that runs on your server one that runs on your
[00:29:52]  client and it all works seamlessly and so we wanted the same experience here where whether you're writing a single page app whether you're writing an ssrd app whether you're
[00:30:00]  writing a statically generated app the mental model of components of a certain kind of routing nested routing being involved um all this all this persists across all these different modes of
[00:30:12]  rendering your app or routing your app i mean we we feel like those are not such big different uh sort of uh mental models that they need to have completely different frameworks serving
[00:30:23]  them uh it's actually good to have one way of writing uis and uh the logic supporting them and then ideally for me i want like the computer to do the work right
[00:30:33]  so the computer should figure out what is the best way to render this and what is the best way to allow this but we don't have that yet but so what we
[00:30:41]  can do is we can have this very quick flag of like okay so ssr is all the rays right so the and there are reasons for that you know you get actual
[00:30:49]  html in your in your document instead in your first rendered page instead of just an empty body that we saw and so let's say the story we want is like let
[00:30:59] 's say you start an app you're not sure about ssr or spa right you start you start writing an spa and at one point you're like okay let's
[00:31:07]  you know suddenly i'm like okay i need seo or i want to see if it can be faster on the server do you have the toggles to just try that out
[00:31:14]  and so that was the idea right we did yeah go ahead yeah so i was gonna ask uh yeah so we're you're saying make it very easy to switch i guess my
[00:31:23]  first question is even before that is there anything that solid start can do for me right now if i just have a single page app and i don't care about ss
[00:31:31] r uh right now apart from like it obviously does optimal bundling for your assets it does uh um at oh actually the file system routing right so like yeah our server-side
[00:31:47]  solutions most meta frameworks have this file system routing thingy and i think that's it's a really good way to write your apps um split up your code in a natural
[00:31:56]  way that also should be in production split up like that because only one of those views is coming in in your page at the same time and even though you wired it all up
[00:32:06]  manually we can just remove a lot of this stuff that you had because we do that automatically so this line number 19 where you have to use routes you have to define your own
[00:32:14]  routes define your own outlet you don't need to do any of that okay so we can import your routes and list them in an array manually because this is exactly what the
[00:32:25]  file system router will do and yeah you don't need to use routes and this is where the file routes components comes in it basically replaces your outlet and it's uh gives you
[00:32:36]  an easier way of like just write your just use one component here and now every time you create a new file in pages um whether it be nested um i mean i
[00:32:46] 'm not going to go through the rules of the nested file system routing because most people are used to those patterns now but yeah any file you create uh will become a route
[00:32:55]  here without you having to add that route manually um and uh yeah go ahead yeah what i was gonna what i was gonna ask was the structure is a little bit heavier though because
[00:33:08]  instead of just passing in one component like file routes we do routes and file routes uh yeah why why is that yeah so so routes is is a component from our um our
[00:33:18]  solid router and the point of the routes component is that you pass in a a bunch of routes as children and then based based on what the current path is it decides to render
[00:33:30]  one of those children right or in a nested way uh render a few of those children so yeah if you open the solid route router code you'll see uh yeah right
[00:33:42]  here this route component is meant to be populated with like route jsx components or you can just pass in a bunch of json objects they it's mostly the same and uh
[00:33:55]  the idea is that every time you have a new route you add a component here and your router knows so these this routes component is kind of a decision point where based on
[00:34:03]  the current location one of these branches gets selected and so the idea was that okay let's say you choose file system routing that means you can replace a bunch of those routes with
[00:34:12]  things coming from your file system but but yeah exactly i could do this i could also add manual routes right beside it okay yes yes exactly so you can have file system routes and
[00:34:23]  manually defined routes side by side and since they all get flattened out into one routing config that should work and so this is mainly uh this is meant to serve two purposes
[00:34:35]  one is like you can actually opt out of file system routing just use the same routes component have your own routes declared like you would in older apps um and play with that or
[00:34:46]  put them both together have most of your routes in file system but let's say you want to have some 404s or some redirects that you don't want to create
[00:34:54]  new files for so you can just add those routes at the end of that of that jsx block or i think the third which is one of my favorites is like you
[00:35:03]  can start writing your whole app in just like root.tsx before you decide to split things into separate files i'm a big fan of like it's okay to have one
[00:35:10]  large file as long as like you can find things and uh you know keep things in your head so you just start one big file like don't have file routes just have
[00:35:19]  your routes there yeah just fun for me yeah and and to be fair this exact pattern uh we kind of stole from hydrogen um we saw i we i talked about learning and seeing
[00:35:31]  the stuff by doing stuff on stream uh i had hydrogen on and i was like oh like immediately we're like this this is gives that flexibility because we're all about using the
[00:35:39]  same libraries inside solid start that you'd use anyways for solid like the router so being able to just like have this easy switch is really nice um do i have to do
[00:35:48]  anything else here i guess the only thing is it's not pages it's right yeah yeah yeah yeah so um let's let's do that and some stuff like glob imports with
[00:36:02]  v don't reset nicely so you do have to start and stop again but if everything's right and because we already followed the conventions this should in theory work but it's
[00:36:15]  possible that some stuff has changed uh uh here since the last time we tested this um i think the imports have not completely changed because it's still importing from slash pages so vs
[00:36:30]  code fucked up oh yeah yeah oh yeah oh did i not save it no no no no i think um oh okay nice yeah yeah so presto file system file system routing
[00:36:48]  because we already structured our stuff that way um but essentially we were able to take our non-file system writing and obviously you'd have to probably rename files but the same
[00:36:57]  pattern of using the data files and the and the normal files or what we can have preserved here um which is a pattern that we've been promoting with solid anyways um but
[00:37:09]  but actually actually i want to show um so it is good that when you have these two files for some people it's helpful to have that split between the route data and the
[00:37:19]  route component itself but for me i'm a big fan of co-location right so because that doubt because that data is meant to be used here on line number five
[00:37:27]  if you see the use of our data yeah and over here i don't know where the user data is coming from i would rather have the data right in this file like if
[00:37:34]  you've seen patterns like get server-side props loaders load from swell kit all of them like the one of the big things i like about that is that it's in
[00:37:44]  the same file as your component so you can see the link between the two so let's let's try that what you can do is you can export a function called route
[00:37:52]  data which would be exactly the default export from your um from your um stories.data file so if you can just yeah take pick this up i'd say yeah just copy
[00:38:05]  the whole thing because you might need these i mean i'm gonna need this probably i'm gonna yeah i'm just gonna do a piecewise though just because it's like this
[00:38:15]  and i'm going to need um this and for anyone who's used solid before you should be familiar with some of these things that we're pulling in like create resource and
[00:38:28]  this lib api is the same one that i've been using on all my streams um and let me see here so now you should be good to delete this yeah so we
[00:38:38]  don't need this one anymore and then what we can do here is i think we can just go type of route uh yeah just data yeah yeah and in theory okay our
[00:38:54]  types are not very good here but this is my own fault because uh i didn't actually type any of this stuff um because i ported this over from a javascript
[00:39:05]  example um but if i want it to be like a little bit let's let's let's see if we can do something here uh let's pretend i have uh what
[00:39:13] 's it important you did you did you did put in the other types file yeah yeah if i import istory here and tell this resource yeah yeah that it's it's a
[00:39:24]  store istory and i guess it's a string probably a list probably a list of istories yeah um then in theory it should know that this is a resource of ist
[00:39:37] ory array and honestly as i said this is all just uh this is a bunch uh what is it route route data args without data yeah this is just yeah here we go
[00:39:50]  now all our typescript works from well i mean at this point i was gonna say server to client but at this point there is no server still this is actually still a
[00:40:01]  client routed app um this this pattern this is route data to component yeah uh i mean which is also important i think like part of the typescript story has to be that
[00:40:11]  your data and your uh the place where you use them those can be type safe and so normally when you split out any of this into another function you have to have to
[00:40:20]  have a way of like being able to reference it back and not having to declare a lot of types manually so yeah i think uh yeah like the fact that you can just do
[00:40:29]  type of route data there and get get type inference without having to define them manually is important yeah yeah yeah i think yeah you can just yeah yeah just uh export function route
[00:40:42]  this yeah remove the default yeah yeah yeah yeah so yeah i i can just this is my lazy port version of it but you know you all will forgive me because i did not
[00:40:53]  have the perfect prepped example even though i was trying very hard last minute to do so but we we can essentially just delete all of these and do this and these aren
[00:41:08] 't all perfectly typed because i didn't go through the effort of perfectly typing them um but we do know that this all still works um and yeah i mean this is this
[00:41:25]  is just to show i didn't import even the control flow components in this because in javascript we do auto imports so showing four aren't even in in here so yeah
[00:41:38]  okay whatever type script aside we do this and we still have our working client side demo that we've had exactly yeah um yeah so if you see um yeah i think if
[00:41:54]  you look at the document that came back i think that should still just be the body right oh yeah it still is yeah it's just the empty body still it's prettier or
[00:42:04]  pretty quiet yeah so this is this is just our client-side app that we've always had uh someone asked about customer routes outside of the file system working with sg
[00:42:12]  and code splitting uh yeah yeah because you do that right if you can just pass the uh component in or you can use a lazy component like if you remember and i did shrink
[00:42:21]  this down a moment to go uh where is it uh did i did i get rid i think this routes file that define the routes i was just passing lazy in manually into
[00:42:33]  the component argument and then passing the data function as a direct import into this so you can still go you can still basically use the component argument on a lazy component or whatever it
[00:42:45]  works exactly the same way you do all the code splitting and stuff that you do when you just use the router normally um okay but i i mean i i i we introduced
[00:42:56]  the solid start this way for a reason because we wanted to show that it is just a better version of our standard v template but i i don't think that's why most
[00:43:07]  people are looking for solid start that at least that's not my that's my suspicion um it is not because it is a um yeah i think if you're building if
[00:43:18]  you're building an spa what it does bring you is like this integrated sdk kind of a field right like we have integrated the router we've integrated the meta provider we
[00:43:29] 've integrated wheat we've integrated bundling code splitting and things like that and so you just write your app and hopefully we can give you a production ready experience with the app
[00:43:38]  but with ssr i mean there are even more parts and there's a server involved which has to render things and the client has to pick it up from there hydrate
[00:43:46]  it and make sure all of that works properly um so so i've got my app and i've taken advantage of some solid start niceties here so that you know i just
[00:43:57]  have the routing and metal built in and this just works nicely for my client-side app um as you know the data functions in solid run isomorphically they run on
[00:44:05]  the server and the client um so this pattern holds up about resources on the server and client suspense works on the server compliance all isomorphic how do i take this client-
[00:44:14] side app and now make it an ssr app so simple okay just go to wheat dot config yeah and just change this flag to true that's it yeah and i
[00:44:26]  don't think you should need to restart your server also manually just refresh this page oh yeah it's not it's not it's not flickering anymore because yeah because your document
[00:44:36]  oh yeah yeah here here's some inline styles i guess that's from dev mode and then you see all these lovely hydration ids um which g's up very well side
[00:44:49]  note but um yeah so we actually uh and here's the serialized resource data that that that we're sending across the wire for uh for print for boot up so exactly
[00:45:01]  so now all of a sudden we have uh an app that does ssr when we first load and then it picks up and the client routing and data loading happens for every
[00:45:11]  navigation afterwards basically um this is next js um exactly so so yeah uh yeah i mean it's all the same patterns right we just took the client router and we just did
[00:45:28]  true and in fact ssr true is the default i think i think if i just delete this out it it it is this is the experience yeah and i mean we've
[00:45:36]  already seen this on stream right with solid start um uh i think i i think i have like uh i deployed it to netlify or something or what were where did
[00:45:47]  i deploy it to uh no i deployed a long long time ago uh um to yeah i mean i deployed it everywhere what am i talking about solid hacker news edge netfi app
[00:45:59]  um this demo that you see is what we just created um and you can see it's just a simple page and yes uh we still ship some javascript i think
[00:46:09]  it's something like you know 12.5 kilobytes of javascript for this very very simple page so this isn't the maybe the smallest version of this you've
[00:46:17]  ever seen but uh we've got the routing we've got the this whole experience in very little code it's about uh 10 or 11 kilobytes to get the uh you
[00:46:27]  know the the the core of pieces that solid start and solid bring into the mix um and that's basically kind of like the baseline for for your apps which is pretty nice
[00:46:40]  compared to some solutions that are i don't know six seven times larger um but just just this is just the baseline there's also other things we'll look more at size and
[00:46:49]  javascript probably a bit later but um this is the pattern for for kind of doing basic data loading all right so how's everyone doing in the chat so far this
[00:47:02]  this makes sense sorry for the really long-winded intro here i just you know we thought it was really important to show this all right so some people are asking about s
[00:47:13] sg um i'm not going to cover sg too much today but there's there is a static adapter for that it's an output format the same way that deploying
[00:47:23]  to netlify or versell is an output format um we're going to look a lot at um apis and features and stuff um today so okay this is this is
[00:47:35]  like the baseline because you already had an app that could run in the client and it was no it wasn't hard to make it run on the server it just it was
[00:47:47]  a matter of switching a that that that toggle just switching that thing um and we didn't even have to i guess go to file system routing and could have done that we could
[00:47:55]  have just taken my original app and just did the switch back then it it's all kind of the the all the same but i mean people expect more out of the server side
[00:48:05]  rendering framework right like like if you have a server you know why not use it exactly yeah um so can you can you talk to us a little bit about the the uh
[00:48:20]  like what do you think the main way solid lever solid start specifically uh leverages the server right so um so think about okay so the ssr story is is is
[00:48:35]  in two parts right one is the rendering part where okay where where do where do the templates live and where do the templates get rendered and how does it come back but there's
[00:48:43]  also an important part of this whole story which is the data right so any app it's not just templates it's templates plus data um and the idea and the and the
[00:48:54]  question is like where should the data be fetched where should the data be rendered uh into the html um how do you keep it up to date and uh for example
[00:49:04]  how do you access things like your database things like that and uh other meta frameworks do give you um abilities to do this kind of stuff for example um next years and get server
[00:49:17]  side props you can you can write code that only runs on your server and so for example you can use prisma there you can use your database orms there you can
[00:49:27]  use your top secret environment variables and run things like that and so solid start needed a way to do some of these things right so what you want is a a way of spec
[00:49:42] ifying some some code that only needs to run on the server and then a way for your app to interact with that mechanism to do things like loading data for apps uh running
[00:49:55]  mutations or actions from your app so like let's say somebody increments a counter that you want to persist somebody signs up for your page you want to save that user's information
[00:50:06]  so there is there are two data flows that are needed one is the the get side the the loading side and the other is the right side and the and the action and
[00:50:15]  the mutating side right and uh traditionally i think uh meta frameworks have mostly dealt with the get side only uh they've mostly dealt with how to fetch data so get server side
[00:50:28]  props an example of that so it gets a load is an example of that um remixes loader is an example of that but i think starting from remix they also brought
[00:50:37]  into on the table the fact that these meta frameworks should also be taking more responsibility of the right side and i think uh we we did like that philosophy because it it ties up
[00:50:46]  the whole picture together right right and i guess the you we were we were we were spitballing ideas like this in the discord for weeks weeks and weeks and and we had
[00:50:58]  this really weird tension because i had something in mind at the very very very very beginning i didn't know what it looked like but i was like i was very influenced by
[00:51:08]  graphql and and and and and and the way that they naturally separate the query which is like a tree that you kind of pick and choose and pull stuff out of from
[00:51:20]  the mutations which are more of like rpc calls and and i really like that split i got accustomed to it i i you know i've done a lot of rest
[00:51:30]  apis and it was i was just like no this is what you want because like i worked a lot in like uh photo sharing and uh like private media and it was always
[00:51:42]  easy to make rest cross um like re uh resource boundaries and i mean like rest resources like you you could always be like okay this user has friends or whatever i mean there
[00:51:53]  wasn't standards for it but you always had a way of of doing that but it was always tricky to because you lack the verbs to express certain operations like move like let's
[00:52:03]  say i want to move a photo from one album to another album it's not a single atomic rest uh action you you know what i mean like it would be like it's
[00:52:12]  actually put this in this location and delete it from this location and and suddenly you're like you start coming up with really interesting things because it's not easily represented in the
[00:52:23]  verbs and i was what it's funny because i used to use like way back i'm dating myself like soap and stuff in in the microsoft thing and like rpcs
[00:52:31]  and i i they weren't rpcs but they were this kind of like call a function from the from the client thing and i didn't really i wasn't really stoked
[00:52:38]  about it after that because it's so complicated all these xml things to configure and i was just like oh i i don't want to do that but when i started
[00:52:46]  using these patterns um with graphql many many years later i was like no this is this is what i want right like sure we already have a mechanism for data fetching
[00:52:57]  right you saw the resources right i i just want to call a function and have it do something for me that but the problem was that was like around the same i would
[00:53:07]  say like month that we all found out like remix shared what they were doing and you know we'd already built the foundation on nested routing and parallelized data fetching we
[00:53:17]  had the good get story but it's like how do you do the mutation and trying to bridge this gap was felt really at odds each with each other and and you know i
[00:53:25]  had a bunch of ideas and i showed them off and people like and what you know or this and then what about this and we got into these long debates and nikhil
[00:53:34]  came on the chat and he's like what if we did what we did this and he i immediately latched onto it because it's very similar to the rpc stuff
[00:53:42]  i was talking about but he suggested we could use a compiler instead of a proxy okay yeah and and he introduced a new concept uh which uh i hope i want you to
[00:53:52]  talk me through a bit here nikhil right right so yeah there's this new thing that i thought about which is inspired by blitz js so if anybody's seen blitz
[00:54:02]  js they had this mechanism where uh you could write a file in a in a specific folder right so it was like a slash queries folder or something like that and then if you
[00:54:11]  imported that file the the thing that you imported on the on the server it would be the actual imported uh function from the other file um but on the client that imported function
[00:54:24]  would become uh an rpc call right so it would on the client that imported function would be compiled out into a fetch call to a url that mapped to kind of
[00:54:34]  the file path of the original import and you would be able to pass in arguments as serialized json props and the data would come back as serialized json to
[00:54:45]  you and the rpcs uh infrastructure would take care of parsing the json and then from the consumer side of the app whether it was on the server or on the
[00:54:54]  sorry from the consumer side of the code whether it was on the server on the client the experience would just be you import a function you call that function uh in your code or
[00:55:03]  you call it within your use query your react query fetcher and um it would work on while server-side running and it would work the same like obviously the mechanics of the
[00:55:14]  background different but the effect would be the same on the client and i was a really i was a huge fan of that so in my startup i built a variation of that
[00:55:22]  where uh it would not need to be in a specific folder it had an it had a specific endpoint it had a specific uh extension to the file right so something like um counter
[00:55:33] .api.ts or something and then anything you imported from that that would be given this treatment of like run it on the server if it's on the server but when you
[00:55:42] 're on the client make a fetch call to that piece of code um but as i started thinking about it more i was like i don't want it to be in a
[00:55:50]  separate file right like just like i have talked to you about route data i'm like i want it in the same file because that's where it that's what i need to
[00:55:56]  think about it that's where i need to reason this server-side code i need it i need to be able to reason it in the in the context of the ui
[00:56:04]  that's going to be using it so so we we built this thing called a server function which is produced by a compiler so what you do is you import server from um
[00:56:15]  this this endpoint we have this uh package we have called solid start slash server so server from solid start slash server yeah so i what i've done here actually is i just
[00:56:30]  made the bear template again i just got back to here so that we could actually play with this a bit and um yeah let's let's let's let's make a really
[00:56:39]  basic function here let's maybe like a greeting function something that like let's like let's do something where we can pass in a name and and greet them with a with a
[00:56:50]  hello or something exactly so yeah let's try to do that so the the the api for the server function is essentially you pass it any async function and it basically
[00:57:03]  wraps it up in in in in this rpc functionality where on your server calling this function greeting would basically just run this async function inside it inside the server function like
[00:57:15]  nothing really gets uh played around with whatever arguments you pass to your function uh they get um um yeah so and this this block like like like rand's mentioned this block
[00:57:28]  of code inside the server function will only ever run on the server that code will never even be shipped to the client even though it's in the same page as your component we
[00:57:38]  compile that code out uh and we basically give it an address right so you you the yesterday i was thinking about this the analogy for the server function is you take a piece of
[00:57:48]  code you put it in a location and you give it a url and then it you can add use that url to address it in your app right so whether it
[00:57:57]  be on the server on the client the compiler basically just assigns a piece of url to a function right yeah so i'm just going to keep the counter working but i
[00:58:06] 'm going to leverage this button click and maybe put in greeting here and uh exactly oh it's it's complaining at me what did i do wrong oh uh because typescript
[00:58:17]  works right like this was one of the big motivations behind this signature this way of doing things is that you get automatic type inference like whatever typescript was already doing for your general
[00:58:27]  functions it will do for your server-side functions as well all right right so i'm gonna say hello to nakil here because he's been doing such an amazing job
[00:58:37]  on this and if if everything works right um i should in my console here um when i click this okay so what did i not do right you just refresh yeah okay hm
[00:58:55] r right so my here's the thing i'm saying on the server i'm saying hello here but i'm not doing anything with this this information because i greeted nakil
[00:59:05]  but um we need to do something to actually see it so uh i'm gonna just then it um i'm gonna be yeah it's a normal it's a normal promise and
[00:59:15]  the the contract of the promise is that it will it will try to return to you exactly what your server function returned and it will also throw in the same manner if your server
[00:59:25]  function through right so if your server function throws with an error you can expect this promise to also throw on the client oh there we go see i'm seeing hello nakil
[00:59:34]  in the in the in the thing every time i click it it's saying yeah but you're not seeing me on the server yeah which which is which is happening here yeah exactly
[00:59:43]  and yeah so the the point of this mechanism is anywhere in your code you have the piece of you have some a block of a function that you never want to run on the
[00:59:54]  client you want to run on the server and you want to give it an address you want to give it a url that you can refer to later yeah because i can
[01:00:01]  add as many of these to a file as i want i can put them anywhere exactly and so if you if you go back to your browser i can i just want to show
[01:00:10]  one thing uh if you go back to the browser yeah if you scroll up when that error happened i just want to give a sneak peek of the url that's generated can
[01:00:19]  you scroll up in your console logs uh remember that error happened if you see what kind of url we generate it's like you take your file path that exports that uses
[01:00:28]  the server function we add an index so that we can if you have um if you have two functions and we can't give it an actual so if you see we gave it
[01:00:38]  the name greeting because while compiling we actually try to find the closest identifier that this server function has been assigned to and so we give it that name so that when you
[01:00:48] 're calling it you can actually see it in your network dev tools like what function you're probably calling so yeah if you if you create another one call it something else actually one
[01:00:58]  thing i thought would be fun is uh is just you can try this yeah just just show that this is actually like not like not a single thing like it's like this
[01:01:12]  is uh hmr sometimes with local stuff because the difference in the server and the client does actually get us a little bit here if you're messing with it but i'm
[01:01:22]  hoping that we'll see the nakil one two three increment uh here yeah yeah i just want just kind of showing that like this this this piece here the side effect coming from
[01:01:34]  here could be your database or could be exactly exactly what i was going to say like it can be a database it can be some external apis that you want to pass an
[01:01:43]  api key for so you want to do that only in your server things like that and this this actually the interesting thing is this greeting thing you can pick it up and
[01:01:51]  put it inside your component because what we do is we we hoist your server functions out into the top level scope so you can actually put them like like the the craziest version
[01:02:02]  of this is you just take this whole server part and you replace like greeting on line number 18 with it and just call it in line without even assigning it to a variable and
[01:02:12]  even that should still work right are you saying that i could literally just do this and yeah yeah yeah yeah yeah like like sneak it into here yes and this should also still
[01:02:26]  work um i guess the only gotcha is referencing variables inside have to be top level scope like imports and stuff you can't reference component instant variables and yeah i'm gonna i
[01:02:37] 'm gonna work on uh part of the babble plugin that basically just like prevent you from making that prop okay it's funny it calls it calls it counter now because it
[01:02:45]  doesn't know what to call it but it still works all the same yeah and the name is not important because because of the index it will always be split up yeah like it
[01:02:54]  two two functions won't get confused between each other but the name is important just for the developer to identify what is being called right yeah yeah so i mean that was fun
[01:03:06]  you would probably i mean me personally i mean you don't have to do that you like i like organizing i like to be at least be able to see my code where it
[01:03:12]  sits a bit but i mean this is all up to you preference wise no no yeah the point is do you do you know where that'd be useful you just gave me an
[01:03:20]  idea of where that would be useful um i'm going to close this demo for two seconds and reopen up where we just were remember we were in hacker news a minute ago and
[01:03:28]  i i think it would be actually useful if we went back to our now our hacker news demo that we just switched to ssr um right this was client side and
[01:03:38]  we're doing fetching isomorphically but if we actually wanted um this is just a function right so i could just go import server from uh solid js or solid start
[01:03:54]  slash server and now i could just go server this no so don't don't don't wrap the source sorry yeah right not the source wrap the fetcher yeah so i could
[01:04:05]  just go server this fetch api that i've already implemented in another place and now instead on future navigations it won't fetch from the client it will actually always fetch through
[01:04:15]  the through the server yeah so right now because your fetch api is also an external i think you're the wrong folder yeah yeah so because your fetch api is right
[01:04:25]  now also an external api server is just kind of acting like a proxy right like you call your api but it will only ever run through your server so if it wasn
[01:04:33] 't if it was a private authenticated api then you can use your api use your you can use your api keys right on the server so in theory what i
[01:04:41] 'm going to see here when i navigate on the network tab is i'm just i uh not refresh once uh what did i miss did i which which which page did i
[01:04:56]  did i do ah you did the user's page oh that's like the worst page to do it's fine it'll still work when i go into the user's page it
[01:05:04] 'll work yeah uh no it won't why no this is this is not a user's page this is a story page oh user's page it's like the only page
[01:05:11]  i don't use yeah exactly but yeah no we call it user because because right sorry okay i i picked like the wrong page to switch but you can see now that it's
[01:05:22]  actually using the slash zero slash user thing so instead of the other ones you saw this is going to directly to the hacker news api from the client and this one went to
[01:05:31]  our server which basically proxied it because we said run this on the server you're you missed it like literally five minutes before enjoying the stream we did a whole thing
[01:05:40]  on the type safety um but we can we can uh we can we can go back to that if you want um yeah uh because these yeah i mean the i think the
[01:05:52]  type safety story is yeah i think the point is that everything just works with typescript itself right like so because our compiler is trying to replicate the same thing as it as it
[01:06:03]  would have been as if you'd written your function right there right so so uh yeah what ended up happening was this app was a javascript app that i was like on
[01:06:12]  the fly converting to typescript as we were talking and i didn't do all the pages so i chose the non typescript page to uh to port to the server function
[01:06:24]  um but yeah what we were what we were doing a minute ago um if i go back to the demo that i was doing here is that um if you try and call this
[01:06:33]  server function with with something that isn't what it's expecting it's going to complain at you because it's like no this this takes an argument or you know if i
[01:06:45]  put in i don't know seven it's gonna be like no it's expecting a string not a number or whatever so um this greeting has a a signature which which tells it
[01:06:56]  what what it's what its types are um right so this is kind of the the baseline here of of like we this is a primitive this is very very powerful it's
[01:07:15]  very composable but um it's there there's some challenges here because um i'm worried we did this and then i was we were looking at it and we're like this
[01:07:30]  is still a lot of wiring if you're coming at this from a client navigation mentality like uh you know like a classic next js whatever you're like you'll just latch
[01:07:40]  on to this you'll split stuff how you want between server and client and you'll do what you need to do and you'll use your solid uh resources and a solid query
[01:07:49]  port when when that gets released and you'll be like yeah i'm i'm i'm you know i'm on board but we thought it would be cool to see if
[01:07:58]  we could take the best parts of remix and and react query and put them into a single solution exactly yeah that's a good way to put what right so this this somebody asked
[01:08:13]  about api calls earlier but uh we'll get the apis in a minute because for actually authoring solid apps i don't think you need um api or routes
[01:08:27]  that's that's that's that's essentially um like something that if you want to have an external api and we have considerations with mobile server has a server.fetch
[01:08:37]  which does like the svelte kit trick where you can have it fetch on uh the client and then against an api route and then does uh just calls the function
[01:08:48]  on the server so we have the ability to do that but we see um kind of as i said graphql was at least for me although nikil arrived at the same
[01:08:56]  conclusion from a different spot was my motivation here because that separation between the queries tree and the mutation thing i we we like having lots of mutations or you know wherever we need
[01:09:09]  it you know named mutations like this is a that's a specific action um and honestly we had a we had a lot of challenges though even on both sides because we like granular
[01:09:22]  updates and that that that's that was really a challenge here because how should i put it um loaders are really simple like really really freaking simple you just it's an
[01:09:38]  async function you can think about that but we wanted a couple things we wanted to be able to stream right we wanted to be able to uh um independently update things you know
[01:09:54]  like maybe not everything in it needs to update and every time we tried playing with it and we came with different abstractions it'd be like another abstraction and we wanted to
[01:10:04]  keep that story from client to server like we've been showing you the whole time so um i think maybe the best way to showcase this is i i just keep on jumping back
[01:10:15]  and forth but maybe we should go back to our hacker news example one more time before we go into one a different example and just talk about how we can take take um
[01:10:25]  i guess i'll just use this user's page again but how how we can take this and i mean this is fine you can compose this as as you as you would but
[01:10:39]  what we we realize is there are there are a few things that this will not do right yet so if people are used to their traditional create resources uh what they do is
[01:10:48]  like on navigation they should try to refetch i think if if params.id changes that resource would try to refetch right on on navigation um i think what what else
[01:11:01]  was needed was like we have a we have a mechanism of doing actions right or we have an action way of doing mutations in solid start and you you wanted your resources to coordinate
[01:11:11]  with your actions right so when your action updates when an action submits you want your resources to refetch and so you need a joint mechanism between your actions and your data
[01:11:21]  loading pattern and so create a resource that's why we thought was not sufficient to serve all our use cases especially on the server where we're taking more control of the data loading
[01:11:32]  patterns and the data mutation patterns and so it it's still possible to do all the wiring using this raw server function because you can just uh you can add add like some
[01:11:47]  helpers below this to like make it refetch because creator resource returns you a refetch function you can use a bunch of things to like actually refetch when your actions happen
[01:11:58]  but we wanted you to give you a simple way of doing uh the the the effect that wrapping things in server does right the effect that it only runs on the server it
[01:12:10]  refetches on actions it refetches on navigations and just package that all up in one helper still backed by the resource function primitive via compilation but so we created this
[01:12:20]  function called create server data right so route data can use either resources or it can use our server data functions or your server uh earlier our data functions and the idea is that
[01:12:32]  this instead of returning a tuple as a resource it returns just a single signal which is your data uh obviously dot loading and dot header do hang off it but mainly just represents
[01:12:45]  your data so you're loading action you're loading um ui should any baby be shown by uh uh this is all my fault for not having the types i in here
[01:13:02]  i i user i think i user should do it yeah do do we have a user i hope i have a user i think i don't have a user because i think ah
[01:13:11]  okay okay i i think it was in a different file uh do i do i still have maybe maybe the maybe this one has it sorry i this is this is just types
[01:13:22]  is no types is like on the top level i think this one was inlined which is why i don't have it sorry this just this should hopefully and then type of
[01:13:36]  type of route data yeah wrote data yeah sorry all right and then you could tell this is from uh it's again you could you could tell this is from from a javas
[01:13:49] cript version the app because i've not didn't even update the control okay so now all our types are working sorry about that um but yeah this is actually just equivalent to
[01:13:59]  what we just showed exactly because we didn't we didn't actually do anything special here this is still gonna just uh all right you're not gonna see it on the client because
[01:14:07]  it was from the server but if i go back and then i navigate to one of these then we're gonna see route data um but we're gonna see essentially our our
[01:14:18]  data now coming through um our internal our internal request right um through the server thing so this is just a shorthand but it it helps streamline it because for the the majority
[01:14:29]  case um people can just do this route data return server data now it's almost like a loader right yeah you can make multiple of these you make them all fine-gra
[01:14:40] ined that update off different parts of the route and all this stuff and have all the typical stuff you can use all the options you have on resources like defer stream like if
[01:14:48]  we were streaming like this this example isn't streaming right now but if i go back into our uh entry server and change this from render sync to render stream um essentially um what
[01:15:02] 's going on uh okay okay typescripts being weird that's fine i'm used to it yeah i mean you're not gonna maybe the home page can can see streaming
[01:15:18]  right yeah it's more visible but i i think you can actually see this from the actual document and the network like you can actually see response that we put in uh the header
[01:15:31]  and then i don't think this one has a loading state which is why you don't see it but not i think we do have a talk level suspense right yeah yeah
[01:15:38]  just can you just prettify it and i think the the html should be coming at the end right oh wait did we do defer stream or not oh did i defer
[01:15:50]  stream already oh no no okay you didn't right so all the stuff is coming in later right yeah okay never mind this i mean i'm getting into into the weeds a bit
[01:16:00]  here i'm sorry uh this is a feature that solid has it's not solid start specific you can like choose any resource to make the stream wait for it so like that
[01:16:07]  part loads ahead of time and then if you if you like the default is it lazy loads everything and it loads it in to the page as it loads but then when you put
[01:16:16]  the first stream it treats it it's like wait for this resource so you can do that at a fine-grained level um so it's fine we don't have to
[01:16:23]  showcase that right now uh it's interesting that render stream is being weird obviously but yeah i don't know why it's still it's still it's still rendering um let
[01:16:34]  me see where did what did i do here um yeah yeah oh you you did you didn't effort stream so yeah so yeah this is this is actually yeah we'll come back
[01:16:46]  to this yeah yeah i'll verify that yeah okay that's fine we've made plenty of streaming demos to showcase the difference there okay so let's let's move on from that
[01:16:56]  but yeah this this yeah i think the key part is that important yeah because on hydrated um not may not use that one but my the initial value you know all that kind
[01:17:09]  of stuff and it does still exist on this api is just a wrapper over create resource i think it was important like why exposing entry server is important i think you just showed
[01:17:20]  it right so that you can switch between the various rendering modes solid solid has right so you have on your server you can render async uh on on your server you can
[01:17:27]  render async which is wait for all your resources to resolve before you send back anything you can stream it which is wait only up to the first suspense boundary or any resources that
[01:17:39]  defer stream and the third is you can just render sync right and which is uh wait for nothing and uh do all your resources on the client so i think it's happening
[01:17:51]  very quickly right now yeah so quickly though yeah i'm not i'm not seeing it right now can you do slow 3g can you do slow 3g i think i think
[01:18:03]  there is throttling will not help um necessarily with uh with this because the way that the chrome dev tools handles the stuff i i yeah you're we're not seeing
[01:18:17]  it it's a whole page loading yeah it's it's it's weird um let's as i said we've showcased streaming like a billion times on the stream so yeah
[01:18:26]  i need to verify this okay anyway um but yeah the switch between these three rendering modes is going to be just changing the render helper you import and use here um everything else
[01:18:39]  to me is the same in your app right so the reason we showed this create server data um was kind of a uh prefix because we need to basically come back around i got
[01:18:49]  another example for you all um i made a hacker news or no to do mbc example yeah i'm just gonna pull this one up oh actually i already have it
[01:19:01]  open what do you know not too surprised and it's very simple um it's basically just a single component index route that is that that is our whole app okay good make sure
[01:19:16]  that's not done and there's there's actions are this new primitive we have here right and actions aren't that much different than the server function we showed earlier right uh
[01:19:30]  in that they they we call this a crate server action but essentially you get back this thing and it it has a submit function that calls whatever function you do so if if
[01:19:42]  i if i did something like const uh something equals create server action and in my server action i put name string like our greeting that we had a minute ago and return name or
[01:19:58]  something right if if if right async right async if if i do this something dot submit is going to expect a string um essentially so you can just you can just
[01:20:14]  always make actions and call them and the important part is that they link to the route by default actions invalidate the whole route but you can do something really cool here where you
[01:20:26]  can go invalidate uh invalidate and you can actually pass keys and if you saw in our create server um um data and resources in general there's that first argument the
[01:20:40]  reactive part well that reactive part can also serve as a key you can pass in arrays the same as react query style arrays and you can actually invalidate uh set what gets invalid
[01:20:52] ated so you can actually based on certain actions only invalidate certain keys uh of the resource so only refetch parts of the page it's basically very similar to it works
[01:21:01]  like react query so like for example on line 11 just to create an example if on line 11 if you made the first argument of create server data something like to do's or
[01:21:11]  something right like the string produce then you could invalidate um yeah something like that uh then then you could invalidate yeah that query syntax and yeah then you could invalidate
[01:21:26]  that using to do's and we do we do the sort of the hierarchical query thing too as well as that react query does where if you have two queries one is to
[01:21:35]  do's comma one and the other is to do's comma two just invalidating to do's should invalidate both of those things um right yeah and i think it's also
[01:21:47]  important to know that i think you said this so route data right now because it's just one create server data call in there we can just inline that whole function call
[01:21:55]  but you can also like let's say return an object where to do's is coming from this creates our data call but there's another thing called users which is coming from another
[01:22:06]  create server data call and if the and then you can invalidate only one of them when the when your route changes if you don't want to refetch both of them and
[01:22:15]  the source will work as general so if they're connected to some part of the of the route then when the route changes those those uh server functions anyway get recalled but i
[01:22:25]  think this is uh yeah this showing this react query style invalidation i think it's very it's very nice like just as a dx improvement on top of what we already had
[01:22:34]  right this this is what was missing some people talk about comparing react query to like uh swr and swr doesn't really have the full story on the mutation you can
[01:22:43]  do it manually within validate we want to just kind of tie our favorite parts of react query and remix and kind of stick them on top of each other and you might be pointing
[01:22:54]  out well this isn't quite remix still like obviously but but there is i'm we're gonna get there in two seconds though so don't worry about it so server function
[01:23:04]  and you can submit it and the thing is you can create as many of these server actions as you want because by decoupling the mutation from the url we're able
[01:23:15]  to just like define our mutations as i said this is like the graphql thing when you use the loader pattern um like you you end up like getting forcing things into
[01:23:26]  files and i mean i have a comment on that i don't know how much you guys want me to kind of like sidewind but rest and crud are not the
[01:23:33]  same thing like this is this is probably worth its own rant but like crud has create read update delete and probably should have list like a fourth one cruddle or what
[01:23:45]  do you want to what i do but verbs that you use for http like get post put patch delete are not the same right so like how do you like it's a
[01:23:57]  mapping when you go create a like a server a rest resource you're actually going to be mapping a bunch of these things so like list is git on slash to do's but
[01:24:12]  um kind of like the show or the read in crud is git on to do's slash id and this mapping when you force it to a file based system is weirdly
[01:24:27]  awkward like don't like you're going to abstract it anyways into your own models and stuff if you're doing server uh you know backend stuff but it is very weird to me
[01:24:37]  at least to kind of force this thing because as i said your pages and how you do the gets are different than your like it's a difference between like the conceptual model
[01:24:47]  and the implementation model and tying them together is very strange to me yeah yeah i think i think this is one of even my qualms with the remix model was having that one
[01:24:59]  action per route thing and then using a hidden form element with like something called intent and then doing a switch case thingy inside your action to figure out which of the actions you
[01:25:12]  actually want to do i wanted like if you have five actions on your page you just create five different actions and then you just call whichever one you want each of them has
[01:25:20]  their own tracking state of like virtual submissions are going on and things like that so you know trying to like fit an spa kind of like you you you obviously will always have multiple
[01:25:32]  actions per hour like it's it's so obvious like in a highly interactive thing you'll have multiple things changing based on different and this pushes you to co-location
[01:25:41]  which is something that i think is very valuable because like don't get me wrong if you're building an api that gets consumed then you want to have something structured for that
[01:25:49]  obviously that makes sense but when you're building a page you want to tailor it specifically to the page that's something like graphql handles for you because it lets you query
[01:25:57]  to a specific subset it's like the user query for that page versus the user query for a different page and you could one way approach it is make a generalized api
[01:26:05]  that everyone can use on all the pages and make a slash users but another way to approach it is like this kind of as i said more rpc kind of mentality
[01:26:14]  where you're like picking out exactly what you want and then making it as relevant i i think this to the area you're in i think this is important for scaling as you
[01:26:24]  can see we're we're covering over a db uh here i'm gonna get rid of our fake action for a sec i'll leave it here for a second but do
[01:26:31]  you want to see my db here i i apologize i don't have a real db i just made an array in memory put a fake delay on it um maybe
[01:26:40]  500 is too much we'll see um and then i just push to the array this is my database um we could put a real database in here but my point is you're
[01:26:48]  going to abstract stuff down to a model probably make the stuff in the page count like make it make it work as optimally as you can for your use case here right this
[01:27:01]  is a very front end on the back end kind of mentality but um this is this is essentially what we wanted to do here um i think yeah i think the i think
[01:27:09]  the way i think i frame it is i don't know where i read it where it's like the most one of the most important metrics around this code structure is like when
[01:27:18]  you're when you see a page of code it's like how much of like the actual functionality are you being able to fit into that and because a user a programmer like most
[01:27:27]  is being able to see okay maybe 100 lines or something like okay this is like 25 lines or 30 lines or something like how much can you fit into that and the things
[01:27:36]  that play well together can you fit it all in there so that the programmer can make sense of everything at one at one look right and the idea behind co-locating all
[01:27:45]  of this is exactly that so if so like in in remix you'd have to put your action outside your components but for us you put your create server actions inside your components where
[01:27:55]  you exactly where you want to use them so that uh like if you if you do you know go to definition kind of a thing you go exactly to your action right there
[01:28:04]  you see what you're doing with your code um just just very transparent in terms of okay exactly what's happening at any point but i mean we haven't really shown this in
[01:28:14]  in action sorry um and put this into context you can call submit you you wire up your event handlers but i think one of the coolest things that people like about uh the
[01:28:23]  remix solution is forms and handling this with progressive uh enhancement so what we actually go ahead yeah tell me how we do it yeah we have a story for that as well so
[01:28:38]  in general creates our actions are kind of your old school use mutation right so it's like you pass in any async function it takes in any arguments uh can return anything
[01:28:49]  and does uh can like you on on completion you do some kind of navigation or something like that but there is a special mode of create server action where specifically if you and this
[01:29:01]  is like typescript enable it's like if the first argument is of form data type right so if the first argument is going to be a form and it will return and
[01:29:10]  if it returns a redirect then that function we can consider compatible to be a progressively enhanced form right so then if if this signature matches then the functionality we can provide you is that
[01:29:25]  this form can work even without javascript so even when the load even when the page the javascript fails or an exception happens and for some reason the javas
[01:29:35] cript bust or the javascript is just not loaded yet you can you can use this add to do and it has a thing called add to do dot form capital f form
[01:29:44]  which which which is a form component that you can render that links to this specific create server action and um redirects are required i mean we can go into it later but we
[01:29:55]  are just the mechanism like traditional forms i've always had like you go to a page you go to a url the url does your processing of your post data and
[01:30:04]  then it redirects you to a different url or the same url back like based on whatever user experience uh the program wants to provide this is pretty cool though too because
[01:30:14]  all the invalidation rules still apply like like all we can still wire it all fine grain because this is just a resource but then let me take an example here just so we
[01:30:22]  can follow it we we have add to do add to do creates uh action takes form data and it gets the title from the form and it calls our database add to do
[01:30:29]  and then it redirects back to itself we're on page slash uh the client doesn't really care about it because it's redirecting to the same page it's not going
[01:30:35]  to do anything but on the when the javascript's off you're saying this will actually reload the current page page so let's let's see how we use this add
[01:30:43]  to do dot form so we just take our action which we can call submit on or we can we can take take a form and what have i done here um just to
[01:30:51]  remind myself i i'm doing a little client side validation we can prevent default um i still got some work to do on the types i was working on this like yesterday so but
[01:30:59]  so on submit is not required in in general if you're just rendering a form you just render inputs and buttons inside it and then oh yeah you just do yeah you just put
[01:31:10]  an input in there put a button in there when you click the button the the name assigned to the input that becomes a key in your form data the value is there so
[01:31:20]  you can access it using form data dot get something something something the name of the input yeah the way reason i did this is because on from mid i was like make sure that
[01:31:28]  the input actually has something in there and then i did a timeout so i could clear the input after you typed it it's a little bit different i had fun wiring this
[01:31:36]  one what's cool is this example is only 200 lines of code um so it's actually not i was worried that this would get really heavy i saw the remix to do uh
[01:31:44]  example which like 607 right but it does more it has more error handling in it but and it has all the database stuff but i was just like when i even when
[01:31:51]  i was looking at the code i was like okay can we do this in a way that it isn't too overwhelming and i hope we succeeded we'll have to we'll have
[01:31:59]  to rely on you guys yeah and and sort of this is the fable for progressive enhancement right so this on submit client side uh set timeout and prevent default and all this
[01:32:10]  only happens when javascript is there if javascript is not there this form works as usual like this on submit is not changing anything you're uh like you'll
[01:32:18]  see your page instantly refresh with your new to do like we'll probably show an example of that soon but yeah you'll see it in in action it it's it's it
[01:32:25] 's quite amazing like how it works quite similarly to an sp whatever and and like you see that this these different create server actions have all been rendered as different forms on the
[01:32:36]  page so toggle all dot form um yeah there's some there's some more stuff going that we're gonna have to show let's let's just let's just first before we
[01:32:48]  get actually can i show you one thing like which is just for for the type script lovers like if you change the type of any of these so if you go to add
[01:32:56]  to do dot form or add to do sorry just go to add to do where it's declared um and change the change the type of form to any or something like form form
[01:33:07]  data to any yeah if you go down uh i think it should complain ah okay basically it is it will not be able to render a form i i didn't think it
[01:33:22] 's working perfectly yet but the idea is that it should start giving you errors if you try to use add to do dot form okay because at your form will only work if your
[01:33:33]  if your server action actually accepts a form data as its course of argument and there's a reason for that right because your server action the function itself needs to work the same
[01:33:42]  whether a javascript based fetch request was made to it or a browser driven post like form submission was made to it like in the progressive enhancement case yeah i mean and let
[01:33:55] 's just do it let's say you'll only be getting a form data let's just let's just go straight to that part of the demo because people people like that right
[01:34:02]  what is it you go sources and then you command p and then go here and you go disable javascript right and then you refresh the page and then you go hello
[01:34:14]  and then it goes to the server there's a big delay that i put in artificial delay it's not usually that slow um i can remove that but you can see that you
[01:34:22]  can perform all the actions you know this this is this has got my artificial delay you can see if i make this but the good thing is but like the good thing is
[01:34:31]  you see the loader appear in the tab right like whenever you change one of these actions because that's the browser behavior for form submissions you do have some loading state yeah it
[01:34:40]  takes it takes a second right now because i it gets nailed on both sides both the the fetch and the request let's make sense let's let's let's delay this to
[01:34:48]  zero and i mean my database sometimes doesn't like hmr in this case because it's just a thing so i'm restarting so let's do this again we still
[01:34:56]  disable javascript but now this feels faster like it is actually doing the full server page refresh yeah it's loading a new page every yeah every every time you click something right
[01:35:09]  so this is this is there's no javascript here um and and this is just you know javascript's the user's disabled or whatever so the yeah this
[01:35:20]  has the progressive enhanced story um if if you want to go through and use the actions as forms instead of just submitting them directly but um that's not the whole story of course
[01:35:32]  this part is instead of the presentation is very remix in inspired so i'm gonna add the delay back and i had a lot of fun developing the this feature i'm not
[01:35:43]  gonna lie because in solid and in react's core we have a lot of really cool things to handle async things like uh um suspense and transitions and these are built into the
[01:35:56]  framework you don't have to build your own loader model or loading module into your your meta framework when the core framework already has the ability to handle this yeah there's
[01:36:07]  a sorry typequest question action form quote is typed as a form uh yes yes yeah definitely um so what what am i doing i'm enabling javascript um this is always
[01:36:23]  such a fun thing was it enable or let's try javascript enable javascript there it is okay so javascript is back uh okay and hopefully this still
[01:36:35]  works but it's now got a second delay but i'm going to show you something you're not going to okay let's actually reload the page and make sure that it's
[01:36:44]  actually the page okay yeah there we go okay so you're not going to see the second delay though because of something called optimistic updates so if i go yo here you're going
[01:36:56]  to see it drop immediately and then well it's purple until it finishes at the time that it goes and similarly here i'm just kind of playing this game it goes purple
[01:37:05]  and then it finishes going so this is this is and the thing is you can go like as crazy as you want yeah we get to show some pending state while while things are
[01:37:14]  in in flight right and this is this is you know we can be deleting them and we can you know this is this can all be going on at the same time and
[01:37:28]  it'll eventually balance off to where you where you're going to end up um and the reason for this as i said is suspense and transitions basically take care of this automatically
[01:37:39]  for us transitions ensure that there's no race conditions and everything ends up being the final version once you're into them and suspense is our mechanism for tracking the resource reads that make
[01:37:49]  this all all possible um so uh it's just a little bit of fun of queuing up uh the transitions and stuff that and the other piece is being able to do those
[01:38:00]  optimistic updates and and so i think part of what's what's probably uh not evident here is like anytime any of these actions are sub so when you click a button when
[01:38:11]  you click the checkbox your action gets submitted as your action finishes we have we have automatic invalidation for your route data stuff right so this creates server data gets invalidated and
[01:38:24]  your to-dos are refetched and that's how you actually see a fresh view of your data but all the and your server action is not doing anything to achieve that
[01:38:32]  just the fact that an action gets submitted means that something probably changed in your database something changed on your backend you can invalidate manually but by default we assume that any resources
[01:38:42]  that don't have a client-side source attached or like a reactive source attached we rely we think that it depends on the database state and your database state changes as your actions
[01:38:54]  get submitted so we we refetch your data just automatically for you because the main the main goal we need we have is consistency right so we want to be able to show
[01:39:04]  you as consistent a state as possible um whenever whenever we can right right and but this still follows the typical solid thing this component isn't going to rerun because it's still
[01:39:13]  solid it only runs once it's just the data getting updated um and but what one of the show is that the actual um actions themselves also have a state to tell you
[01:39:24]  if they're pending and they also have pending which is an array of all the in-flight things going on so to do the optimistic updates for for adding i just went add
[01:39:34]  to do pending and just added a for loop at the bottom with uh with essentially a limited api that's not interactive right uh this this is as i said all remix super
[01:39:47]  super smart i saw this approach to optimistic updates and i'm like this is brilliant like this is brilliant you don't need a client-side cache to do this mechanism you
[01:39:55]  can and you can rely on the browser cache if you really want to but the it's this way of using temporal state the feedback into the components for for optimistic updates it makes
[01:40:05]  things so easy so we we made a couple changes to the api and the way we're handling concurrency but essentially we have an array here so all of them can go
[01:40:12]  here and then like later on when we're looking at each item and deciding like is it removing we can just check you know like am i in the array you can also
[01:40:21]  make an action per iteration if you want but uh for this i just did something really easy uh you know i just i just was like okay if i'm in the pending array
[01:40:30]  for removing items don't show me you know if i'm in the pending rate for adding items show me if i'm uh you know if what's another one there's a
[01:40:40]  few other ones like if i'm pending state disable the button these calculations can be all made off of just looking at the current state of the of the actions and then the
[01:40:51]  second thing and when they complete they just clean themselves up and your state updates declarative optimistic ui is so much better than the thing i mean we i can't emphasize this
[01:41:01]  enough to me this people talk about a lot of the features of remix and stuff and a lot of frameworks are already playing a lot of those things there was already necessary routing parallels
[01:41:09]  data fetching there's already people using request and response model we haven't talked about that but we're based all on the request response model can deploy to anywhere all that
[01:41:17]  but this is all them this is genius because yeah have you used apollo graphql like uh urkel what ends up happening is you first start very naively right and
[01:41:28]  you're like okay let's uh load some data guys right well no but even simpler than that let's let's load some data and and and then you're like you
[01:41:38] 're like next thing you're like okay now we're gonna do a mutation and at that point you have two options refetch all the data for this page or or patch the
[01:41:46]  cache and the funny thing is even in things like react query we've already seen people start moving away from from patching the cache because it gets complicated and everyone's like oh
[01:41:54]  i don't want to patch cache i'll just refresh the the data here um and and essentially um you know like you start going okay i'm just gonna refresh instead of
[01:42:06]  doing the cache but then the second you go to optimistic updates you're like oh actually i need to pre-write the cache now and you're back to writing the cache again
[01:42:12]  what remix had solved is you never need to write the cache and that is what i i want to take i said this is if if nothing like this is the most incredible
[01:42:22]  innovation on this side yeah and it powers the whole thing someone's mentioning but in the case of remix you need to still fully under the whole route right this is part of the
[01:42:30]  fine-grained renderer versus not render this is why solids had a hard time integrated into tools like remix or other ssr solutions why i was kind of pushed into
[01:42:39]  uh building our own solution because we want those fine-grained updates we don't want to re-render anything except what needs to be re-rendered um this
[01:42:48]  isn't i'm going to talk about this maybe a bit more in the future right now these resources are still signals so they're a little bit clunky um we're going
[01:42:56]  to incorporate stores into our resources it's a feature coming in 1.5 so that we will diff down to the data points so that refresh if you choose to do it and
[01:43:05]  don't use the browser cache is only going to update the most pinpoint areas of your ui because they'll use store-based diffing um so this like we're going
[01:43:15]  to keep all the performance keep all the the cache not caching but key based invalidation and hopefully progressive enhancement and give you hopefully something that's close to i honestly i
[01:43:28]  don't think we can get there on simplicity remix is so simple i i mean again brilliant api design um something tiny bit like one level up you know on the abstraction level
[01:43:39]  or you know one little bit or i guess one layer less hopefully more powerful right hopefully but hopefully to give us the comp be able to leverage the full power of solid here
[01:43:49]  um yeah and i think i think the optimistic update story there's important thing to note about caches right so when you when you pre-write a cache for optimistic updates there
[01:43:58]  are two things right one you need to make sure you roll back properly otherwise things are in an unconsistent state and also it's almost impossible to show good pending ui
[01:44:06]  like we're showing right now right like so if you're pending ui if you're pending uh if your optimistic data merges with your real data then there's no
[01:44:15]  way for your rendering mechanism to differentiate between the two but right now because if you see like um when you add anything you'll see like like purple state before it turns gray or
[01:44:26]  when you add something it becomes uh it it stays gray for a while before it becomes active if if we had just merged into the to do's cache there's no way
[01:44:34]  we can show pending state for the ones which are actually pending right we'd have to do more logic to do something like that but yeah right now what we have is you have
[01:44:42]  your to do's real state you have your pending state while rendering you just merge them together like put them one after the other but you can have different mechanisms for so you can
[01:44:52]  actually have different components that render like a actual to do versus a in in flight to do or something like that so you can create like patterns like that around uh around optimistic
[01:45:03]  ui and then optimistic ui obviously gets added on top of any of your actions so when javascript is not there your optimistic updates they just don't play a role
[01:45:11]  because there's no javascript to do anything so you just see normal uis as you as you as you were seeing before this um yeah someone's saying so talking the
[01:45:21]  done or completed probably if you will change just a single class name in the dom including the optimistic update well it'd have to change the dom to do the optimistic update like
[01:45:29]  if if you're going to show the pending state and then it will have to change it again when it completes i guess if it's if unless the pending state and the completion
[01:45:39]  state are the same but essentially yes to your answer yes yeah okay so this i hope you're starting to see what we picture the development experience with solid start to look like
[01:45:54]  a bit like this is just kind of the data loading story you don't have to use forms you can just use actions and just call submit and use your usual patterns um i
[01:46:02]  wanted to show that using forms um isn't that much different and you can do all this pending state without using or sorry optimistic updates without using forms i just was hoping to kind
[01:46:13]  of just show that you know you you have to know a couple things right when you use a form you have to know like sometimes you have to if you want to pass data
[01:46:20]  through to be progressive enhanced you have to add an extra hidden input field this is all old html stuff you can do if that's your kick you can do the
[01:46:27]  old you know i you know it's just html forms thing if that's what you feel like but uh you get all the advantages of actions even if you don't
[01:46:36]  want to go the form way you can just continue to use stuff exactly the way that you've always done it yeah so uh i mean just as an example this um uh
[01:46:45]  this edit to do dot form thing it could have been let's say one uh input yeah right i i just i just we didn't show the edit to do's you can
[01:46:57] 't here's an interesting edit to do's um i it's funny because i did it as a form here but it doesn't actually work without javascript because you have
[01:47:05]  to switch from a it's a one functionality on this page doesn't work without javascript without javascript you can't click it to turn into an input so
[01:47:11]  this is uh i i didn't set this up i guess it might be possible to do it um but anyways i i didn't store the edit state on the server it seems
[01:47:19]  weird to store the edit state on the server because it's a client-side thing so without javascript i didn't implement this feature it's possible but then the server
[01:47:25]  need to persist that knowledge but essentially what i want to point out is on the happy case when i press enter and i submit the form um okay that that that update didn
[01:47:36] 't work properly but the optimistic update i'll have to look into that one i just put this demo together but my point is when when you do the change yeah okay there's
[01:47:44]  something wrong there but when you do the change you press enter it submits a form but how about if you click outside that isn't a normal form submission action right um yet
[01:47:56]  it should still work yeah okay that's funny i must have just broken that like very very recently i was testing this like yesterday what i wanted to point out is you can
[01:48:06]  always just click on the blur event get the form and call request submit and then you can actually submit the form manually programmatically as well um yeah the one thing we need to
[01:48:18]  figure out in this whole mechanism is how to make sure form data is typed properly there is there is like uh there is versions of like where you don't try to type
[01:48:28]  form data here but you just use something like zod to validate it on in the way on the way in inside your server actions but i'm i'm i'm thinking about this
[01:48:37]  i think we can have a way of like doing um doing like uh a typed form data thing so that those get calls in for like inside of server actions uh you should
[01:48:50]  get full type safety for like what kind of inputs you put here so um uh it's it's part of the story i'm trying to figure out here but i think yeah
[01:49:00]  the again here like edit to do dot form should generally work without javascript but this this mechanism of okay when you when you're blurring the input it still works that
[01:49:09] 's kind of a progressive enhancement right like it works with javascript without javascript your app will still work usually um uh yeah i think i think uh this this
[01:49:20]  demo is pretty sweet like yeah it's funny i just realized that yeah i know exactly what my mistake is um it's that i'm not using the optimistic state to show the
[01:49:30]  the title um i'm sure yeah it's just it's it's we probably yeah sorry i i can do that another time but you could we could just change it to
[01:49:39]  actually read off the the submitting uh pending state and show the title this is the pros and cons of the optimistic updates in the cache versus like uh temporary state kind of thing because
[01:49:50]  if it was a cache then we would have seen this optimistic update but like we wouldn't have been able to show pending state properly so there is this pro and con but i
[01:49:58]  think it's more important to be able to show what's not real yet right so like if you're showing things that are not real yet as real i think it loses
[01:50:06]  trust with the user a bit um uh when things just switch out in front of them like for example when twitter like when you try to like something and then the heart just disappears
[01:50:17]  after a second not not a great experience so i think it's important to show pending state when things are really temporary and have not been finalized yet um and i think it
[01:50:30] 's okay it does add a little bit of more complexity in your ui code right because you're trying to show slightly separate uis for your in flight things versus your
[01:50:40]  uh yeah so just an example of how you would do something like this so edit to root pending is a list of submissions and in this case the submissions would be that those form
[01:50:52]  data objects that we have sent to the server so you can actually get the fields of the input from that form data and just run confirmations on it if this is the
[01:51:03]  user i care about it this is the to do i care about uh yeah let's try this i mean i i'm just it was just bugging me what am i uh
[01:51:12]  is this just because uh it's because yeah yeah it's because of that yeah this is the this is the annoying part of the form data api i think and actually because
[01:51:23]  my database is just a file that might get affected by hmr i'm going to restart this again and see if that's all i needed to do this hopefully that is
[01:51:31]  all i needed to do this yeah that worked yeah so now i update and it shows it in the optimistic yeah so yeah it's uh this is this we added this uh because
[01:51:43]  it is super powerful most of the time i find optimistic updates are kind of buggy and tricky anyways the cache approach in it has a certain absolutism to it and you
[01:51:55]  can always plug it in your own cache approach into solid resources and do that if you want you know use apollo or whatever but as like a as a like a good default
[01:52:04]  and a way to get like small little tweaks you know you gotta you wire a bit of logic yourself i guess like in this case where you go you know if there is
[01:52:11]  an pending state uh you know get the title from that otherwise use the actual title you can you can do a lot of this part of me wonders if you can actually generalize
[01:52:20]  helpers for this um but as i said this is an area that probably still needs um you know more thought but generally i mean that's all it takes um to to
[01:52:29]  be able to now kind of edit this however we want and then have the optimistic updates show okay yeah uh okay so this as i said this is kind of the authoring experience
[01:52:44]  for solid start this is why we don't talk about api routes um type what type is type pending type pending is the type of the input to the action so type
[01:52:56]  pending is going to be an array of whatever the action input is so in this case it's an array of form data we we use the submission whether it's forms or whether
[01:53:05]  it's something you make a custom function yourself and pass whatever data you want to it because it's just our rpc mechanism under the hood whatever data you pass in that
[01:53:13] 's the type pending yeah yeah yeah for sure and uh nikil actually had that example uh on the solid start repo i forget it did it get removed because of the pr
[01:53:26] isma dependency you didn't want to yeah yeah yeah yeah because prisma doesn't work in half the deployment there but but i think um i mean we can show some of this
[01:53:37]  stuff so any any um any of the actions also has a dot error field attached to it so so normally we have error boundaries for errors but me and ryan are thinking
[01:53:49]  about it like when it's an action involved you specifically don't want it to go to an error boundary right because an error boundary essentially means remove this ui remove the u
[01:53:58] i that the action was served by and then replace it with an error message but when when it's an action that errors normally that means that an error happened but you might want
[01:54:07]  to redo the action because the error will probably tell you what you went what you did wrong so you want to show your error message next to your uh action next to your
[01:54:16]  forms next to your inputs so you we we don't want you to hit your error boundaries normally if an error happens like for example let's say you go can you go to
[01:54:25]  add to do and just throw an error from there sure yeah let's go here add to do um yeah what's the easiest way oh sorry yeah i can delay to do
[01:54:36]  is i can actually just throw could i just yeah i think throw it yeah so yeah this is um this is in your getter so this will oh yeah that's something this
[01:54:48]  will this will error immediately and hit your error boundary we can show that as well yeah but yeah in your in your add to do just uh yeah throw immediately or something like
[01:54:57]  that or throw later yeah just throw new error yeah whatever and i mean there's there's some nuance here as well but i'll uh let's just show this right so
[01:55:21]  this is this is a default error boundary but you can change the ui for your error boundaries uh uh fail to fail can you just refresh this once something okay yeah uh no
[01:55:40]  i i know what's happening i know what's happening yeah can you go back once um i think uh this i think the delay is probably not propagating the error up
[01:55:54]  all the way because this is editing on the server like in an unhandled promise rejection kind of a way okay yeah so do you want me to oh but then after we
[01:56:04]  get to get just no just throw new error without the delay i think the delay is not that important okay for now yeah um and you'll have to throw it all right
[01:56:18]  yeah so how our server functions work is anything you throw on the server should be uh um like i mean it should be propagated to the client in in in the exact
[01:56:31]  way we what is happening wait can you show uh what's happening on the console log why is it uncaught okay i need to this is this is what happens when you
[01:56:52]  go off the demo path sometimes production yeah i know what the error is i think they're saying why is it not coming okay no i think i think i'll edit about
[01:57:03]  did you add an error boundary oh you did right for some reason the error boundary is not getting uh hit yeah yeah you did it should be there yeah like you were seeing in
[01:57:15]  the previous example right when the failure was happening the error boundary was being hit normally only these errors should show up in the error boundary i don't know why this is not
[01:57:24]  working i need to confirm i the here this is if you want this is the hereby dragons yeah well and also the yeah we're we're moving towards beta mostly because of
[01:57:33]  the stabilization of api we're still uh there's still bugs you're going to find and honestly i did completely update the the the the action stuff two days ago so it
[01:57:46] 's possible that we hit a test case that we haven't hit um yet but yeah okay let's uh yeah but the idea is that let's say your server action throws
[01:57:55]  right yeah we will make it work but yeah let's say your server action throws um your error boundary will get hit and it will render like like you just saw your failed with
[01:58:04]  fetch error boundary it will it will render an error boundary like that with your error message but what you what you actually want to do with your action errors is you want to be
[01:58:13]  able to show ui next year forms with it and so that's why uh yeah i mean i i i mean you want this is why i didn't have this good
[01:58:24]  you you we we we'd have to make yeah okay let's uh yeah we can show just a quick example of okay fine let's let's hopefully this goes this goes through
[01:58:36]  because this one got to the error boundary i think uh okay i don't like i don't know if we can know about that and the boundary was yeah something else like
[01:58:45]  yeah i don't think we can demo this right now if if the errors aren't propagating it's well we can try uh what we can do is somewhere in our view
[01:58:54]  here um maybe still in the header um i'm i'm going to go show i'm going to make a show component essentially and i'm going to do when equals add
[01:59:09]  to do dot error and if we if we if you listen for the error um then i'll just this is yeah then you can just render it here error i guess it's
[01:59:24]  dot message yeah okay let's just do something like that i don't i don't think this is like this this is highly okay now i'm sure it yeah okay you
[01:59:35] 're so you're sure it's this is no good okay um but i already to not show the correct yeah yeah yeah okay so this is the same problem it's failing on
[01:59:45]  the server before we get to this point okay this is how you would do it um this is how you would do it this we have it's so funny because of the
[01:59:53]  changes we had a working version of this like for months like since march ish of this year um until yesterday and then yeah uh it's funny i got all the tests to
[02:00:04]  pass anyways let's uh let's let's move on from this particular example with the errors i actually we actually have i think in the repo a working example with errors that is
[02:00:13]  not oh yeah yeah yeah if you want to go to that i can show you that so yeah go to the hacker news sorry solid star repo yeah let's see if i
[02:00:22]  can do that uh so because i think yeah let's see here let's go to the solid star repo yeah and which of the examples here there's a there's a bunch
[02:00:33]  of examples so yeah if you go to the with auth example yeah yeah the the without yeah uh this has an error yeah so if you yeah open routes let's say let
[02:00:46] 's say the login page that's generally it's a good place to show errors so you have these validate functions that show errors when the username or password is not correct and if
[02:00:56]  you scroll it down this is your general route data function this is your login action inside it and if you see the this is throwing a specific type of error called form error
[02:01:04]  yeah it's it's a special class we created so that we can see the rise form errors properly but uh if you see the login action dot form exists it has a bunch
[02:01:13]  of inputs and then right under the username input you can see um like a specific field error for username if that exists then we show that field error okay and uh yeah maybe you
[02:01:25]  can run this once and show that yeah let's go see the uh no i don't think uh let's start examples oh it's because i'm on the yeah sorry
[02:01:39]  my bad i was on the i was like seeing to do mbc but it's because i'm on the branch um yeah uh it's fine i can just i can
[02:01:46]  go pm pm filter yeah although i don't ever run this on this computer apparently filter i think it's called example with auth examples with auth no example without dev yeah uh
[02:02:01]  no it's just example yeah yeah so if you open the login page right and i need to give me a second here let me pull that over it's kind of open on
[02:02:16]  my other oh it actually it's opened right here um yeah this is what i just this yeah if you just press login yeah you'll see all those error messages pop up
[02:02:25]  and and these error messages actually work like even without javascript like we propagate the errors in the non-javascript case through the url like to the to the
[02:02:34]  client side so that we can render it and if you actually put in the correct password like yeah or do it in part um only appropriate and twix like yeah rocks yeah
[02:02:50]  and then yeah yeah exactly okay um so yeah okay we prove that we just have a bug in that example errors and on actions work okay let's let's look at the uh
[02:03:03]  let's look at the chat here someone is asking why we're using arrays and this is this is something that um i liked and i thought about a lot when i was
[02:03:15]  designing this stuff um it's because it's hard to make assumptions um when you try and do multiple in-flight things so we just using an array by default it actually made
[02:03:27]  it really possible to make some of this optimistic ui really easy i mean to be fair if you if you you can always like restrict your ui so that you can only
[02:03:37]  do one at a time but um this lets you kind of uh be able to introspect what the pending requests are and all that keep in mind we do still uh uh
[02:03:48]  basically have considerations about race conditions so each action is still a cue so if stuff comes in that was that was from an earlier time after something that was started later comes in we
[02:04:01]  do cancel all that um it's just it it's just it lets us like see what's what's in flight um basically and and because it's important because of the
[02:04:12]  way fetching the refetch works too to get the consistent state we actually leverage transitions for that so if you have multiple in flight uh of the actions they'll they'll get
[02:04:23]  entangled in the transition and then they'll show when all the state gets consistent again um this is more technical but um yeah this this is this is this is kind of yeah
[02:04:33]  this is this is all all this stuff is just solid so to speak um yeah i think i think ian was asking so you put throw in the db code not
[02:04:42]  the action i i think like yeah the idea is that your server function just like any function any of the functions it calls can throw an error anywhere down the stack trace and then
[02:04:53]  we basically propagate those errors up serialize it in as as a http response uh with us with a 500 error code and then on the client we parse that error create a
[02:05:04]  new error object out of it assign the message assign the stack and all and then so to the client it looks like just your db actually feels like your db threw an
[02:05:13]  error and your client caught it and it still looks like a javascript error like that's that's the feel and we recently added something where like we don't show uh
[02:05:22]  like if you throw a normal error on your client it shows up as an internal server error so we actually hide the message because somebody showed me an example where prisma error
[02:05:32]  or something like included the url like the postgres connection url in the error message or something like that uh so we're like okay this is not safe so you we
[02:05:41]  have a we have a class called server error if you throw server errors those get those even the message sticks around up to the client but for normal javascript errors we
[02:05:52]  we hide the message because it could create proprietary server only information right when when when in production right because we do push them through in dev so you can debug what you're working
[02:06:04]  on yes exactly yeah so yeah exactly so we have built-in guards for for that um yeah so i i this this example i just wanted to kind of pull out just
[02:06:15]  because we're still talking about errors but we we're kind of uh this is the happy path but i think we should show off some of the extra features and powers uh of
[02:06:25]  of this approach here it's funny i've been so bad i haven't been using my headers i'm gonna have to do a lot of work editing to actually cut up stuff
[02:06:32]  the way we want to cut it up but um the first thing i want to ask about is what if we do want to do an external api so i'm going
[02:06:43]  to open up our bear project one more time the the just a simple solid example where i was doing all those server rpc calls and my question is what if i do
[02:06:53]  want to create an api route uh what what do i have to to do here so uh it's the same it's part of the same folder hierarchy it's all part
[02:07:02]  of routes okay so we're just going to call it api it doesn't have to go in api folder but we're just going to call an api
[02:07:31]  it doesn't have to yeah but just for a sense uh and then from here you can export uh a function with the same name as the http method so we do some kind
[02:07:39]  of like internal routing here so this is for the get is for get calls post is for post calls uh patch update for delete we have del del because delete is a proprietary word
[02:07:52]  do i have to do anything special here can i just go hello world no you can't so you have to you have to return an actual http response off it fair enough
[02:08:01]  so just new response all right fine this is i this isn't my rpcs anymore i'm out of rpcs thing yeah these are actually out so you get you
[02:08:12]  get a request here and you return a http response and if you run this and just go to slash api slash user you should get just that text okay mpm run
[02:08:23]  dev yeah and oh it even tells me this route exists here i love how the you've listed the routes oh right okay and i'm going to have to it opened on the
[02:08:34]  other window let me pull it across here yeah although that's kind of burying the lead a little bit when i do this sure enough our route is returning hello world and
[02:08:44]  uh i i we can we can do can we do something more interesting i guess we have to do we have to we have the json string if we're sending json
[02:08:52]  we have a json helper that you can call but otherwise yeah otherwise you can json yeah so how does how do i do that yeah like that from cell start server and
[02:09:00]  then i can be like id 999 first name something okay yeah i think the uh one big issue with api routes is obviously the type safety issue you can use something
[02:09:16]  like trpc but yeah i think uh type safety is still a concern here but yeah otherwise our main use case for api routes we think is for everything external from your
[02:09:26]  app right so if you want to have an externally exposed rest api or if you need web hooks that you want some service to like call back into your into your app or
[02:09:37]  for example you want to dynamically generate a um an seo og image or something like that then that image can just be i i think that's an um one interesting example to
[02:09:50]  show is like let's say you want to have an an endpoint that serves let's say robots.txt that's that's that's one of those files right but let
[02:09:59] 's say you want to make that dynamic right so you want to for some reason change that based on the request right so what you can do is you can do you can
[02:10:08]  have a file called robots.txt.ts uh so you're saying i can go robots or or we can do with it manifest also right so if the manifest is
[02:10:18]  one file that people worry about right manifest.xml file so you can have manifest.xml.ts and then you can basically have a get function here right and
[02:10:30]  then as part of it you return some string right or you return some xml text and that will be exposed as your manifest.xml return new response it can't be
[02:10:43]  just text it has to be new response yeah i know yeah i i i'm i yes i have i i've moved so far beyond api routes i just i'm
[02:10:52]  just not thinking about them these are it's funny because you can use a server as an escape hatch in one direction and this is the escape hatch in the other direction yeah that
[02:11:02] 's it essentially right just because yeah like for application concerns i mean but yeah you're saying that i i can actually request manifest.xml yeah and i think it will yeah
[02:11:15]  right exactly so you can have you can have dot pdfs if you want to dynamically generate pdfs you can have dot image dot img or dot png
[02:11:24]  if you want to dynamically generate something on the server and obviously your api routes are only running on the server so you can use things like sharp what's the it takes an
[02:11:36]  object with request okay that's its first argument yeah right so and then there's types for all this i just don't know them yeah yeah i think uh it's called
[02:11:46]  api fetch event the type okay okay so let me try export const get no no just uh just just the just the argument needs to be typed don't try to type the
[02:11:57]  whole thing i think i think that's bad design like when you try to type the whole function yeah just just just you think so it makes life way easier because then you then
[02:12:05]  you know what the arguments are forget yeah no just just do api fetch event uh is that the name of the argument the whole type api yeah that one uh right
[02:12:16]  now i don't i don't know if we export it properly or not but yeah then they should take they should have your request and it should have your uh parameters like right
[02:12:25]  if you have you because you can have dynamic segments in your api routes as well so then uh it'll have your parents right yeah so yeah and the request response object
[02:12:34]  we're using is the web request response object so obviously you can use it to uh it works on cloudflare or on netfly edge or on node or whatever everything uses
[02:12:46]  that we didn't show it but the server functions also have uh access to the request object and so do all the create run and server actions most of the time you're doing
[02:12:55]  the application code you're not going to need it for most of your logic where it comes in is when you want to pull off stuff like yeah the cookies show an example
[02:13:02]  of that we can show an example of that so if you go to with if you go to the with auth example oh it's not it's not no i still got it
[02:13:09]  i still got it yeah yeah i'm so i'm still here so if you go to the top of these uh yeah or index let's go to index yeah let's go
[02:13:16]  to the index one yeah so if you see this create server data this gets access to request in as part of the second argument uh of create server data and then you and
[02:13:27]  then if you go to get user you'll see that it's probably getting information from request.headers.cookies right uh if you go to get user yeah yeah
[02:13:42]  so get user id get user sessions yeah but so if you see gets to use a session uses the request or to get the cookie and then builds a storage session out of
[02:13:55]  it this is just our session api we have which uses cookies to store some session thank you remix again yeah exactly this this is actually complete credit to remix because i've literally
[02:14:05]  copy pasted the code yeah we even have we even have proper reference sources um so yeah uh and uh so one interesting part of this is that let's say you find that
[02:14:15]  the current user is not authenticated right uh what what will happen is if you scroll down uh oh actually it doesn't happen we don't show it here but um let
[02:14:27] 's say we we have this function called required user id right so any any server data or server action can decide that okay this is an authenticated one so at the top of
[02:14:37]  the function basically we'll call await require user id pass in the request and what this does is it throws in the case that uh it throws a redirect in the case that
[02:14:48]  that you don't uh the user is not actually there and what this allows you to do is it allows you to write all your code below that assuming there is a user and
[02:14:56]  this throw basically takes care of normally you'd have to return something right you'd have to return a new route for you to navigate but throw just by its nature is like it
[02:15:06]  interrupts your whole function right so if you're unauthentic You just throw and using this redirect helper, you can redirect somebody to the login page, right?
[02:15:16]  If they're not authenticated or to an error page if they're not needed to have access at all. Something like that. So this throwing thing works really well for us
[02:15:26] . You can throw errors or you can throw redirects, which just interrupt your app and make your client redirect. And you can also throw redirects from your API route.
[02:15:38]  So if you have an API route for webhooks, and normally I think those webhooks normally do need to redirect or something. So yeah, you
[02:15:45]  just redirect from here. From here also you can use the redirect helper and you can return it or throw it. Yeah. When you see these pieces together, they all make
[02:15:55]  sense. And it's kind of funny to me because I'm thinking back about what we presented today and about all the pieces coming together, which we'll show in a minute
[02:16:05] . But the funny thing is so much of this is just solid already. like the resources, the nested data routing, all the stuff, even the stuff with
[02:16:15]  the file-based routing. Yes, it's a Vite plugin, but it's just solid router. There's nothing extra there. And then this is a V
[02:16:21] ite plugin for a bit of the processing stuff for the handle, the compilation for the routes. There's basically the cookie session management stuff that we got from Remix, based
[02:16:37]  on topic, request response, and then there is basically our whole layer built on top of the server functions, which are also based on solid. So like solid start itself
[02:16:51]  is just a bunch of gluing or it's not even a solid. It's not even like a fixed glue because you can kind of choose what pieces you want,
[02:17:01]  but it's just kind of putting these pieces together in a way that's sensible. Actually, as I mentioned, there's a few little pieces that are new, like
[02:17:14]  modules you can bring in, like if you want to use the forms or whatnot, but in itself is just kind of a reflection of the same philosophy and pieces that make solid
[02:17:22]  like what it is today. Exactly. Exactly. I think that was why it was so much fun for me also because I got to work on the glue layer and on
[02:17:31]  the, what the whole picture looks like part, because I really enjoy that while I would always let you take care of the mechanical parts of like, how does the wiring work
[02:17:42]  with solid JS. And so like, yeah, I think that collaboration was really nice between us because you really cared about the performance and the mechanical parts of how everything worked.
[02:17:52]  I really cared about the API and the developer experience and like just how it feels like to author it. Like that's the, almost the only thing really I care about
[02:18:01]  and, and the user experience that comes out of it, like, like author your app in a certain way that makes sense to the developer. And then the tech should take
[02:18:09]  care of producing an optimal user experience for the user. So obviously that's idealistic, but, um, but yeah, I think that, that, that, uh,
[02:18:18]  split in our philosophies actually really helped us, uh, get some good pieces here. Yeah. I mean, you know, I, I, I don't like
[02:18:24]  spending time on those details. I'm like, is it fast is, does it work properly? I, I, I, I am sometimes the worst when it comes to
[02:18:33]  the, like, I care about developer experience from the perspective of like, do I have the control to do exactly what I want whenever I want to do it? That
[02:18:42] 's all that, that for me, that's ultimate DX. Like I don't care about tooling. I struggle with TypeScript. I trip over myself on automated processes.
[02:18:50]  I'm, I'm, I'm terrible. I'm glad you guys all moved me up to turbo repo and PNPM on, on these repos. I wouldn
[02:18:56] 't spend the time doing that, but it's like, it's something that could run at runtime that could affect the user and I can't control it. I'm,
[02:19:04]  I am not happy. Like, like, like I need to make sure that I, the code that runs is exactly the code that I want to run. Um,
[02:19:16]  that's developer experience for me. I don't think that's, it's true for everyone, but that, that's, that's why it takes someone else to step
[02:19:23]  back and go like, Oh, this would be so much more convenient if we could do this. And it's like, yeah. Okay. Yeah. I don't really
[02:19:28]  care about that. Um, I, I want to make sure that you produce, create the best possible apps. That's what I care about exactly, exactly. And
[02:19:36]  I can, and I'm like, I want to create the best popular best apps, but like, uh, but write code because I have to read it all the time
[02:19:44] . I have to play with the code all the time. So it's like, my life should also be nice. So, um, yeah, it's like, I
[02:19:50] , it's like, I want, and this is where I always, I'm like, the tech should take care of like making me write the app. I want
[02:19:57]  to write and adapting it to just make it work really nicely with the tech we have available. Okay. Let's, someone just asking just for fun, could this work with
[02:20:06]  any other framework? Um, interesting enough pieces of it could, cause they're just V plugins, but a lot of the stuff was solid specific, mostly fine grain specific.
[02:20:14]  And which means that you could, you could probably figure out ways to make those fine grained things less fine grained and call the cause them to do more work.
[02:20:23]  And then they would kind of work that, like kind of just make them like, just re-render the thing. I mean, but we, so I guess,
[02:20:30]  yeah, if we can step back, but most of the stuff was very fine grained reactive mentality, everything was piecewise. So it does, it is fairly solid specific
[02:20:39] . I would have to say. Yeah. I mean, the server function stuff and all I did write it in a way, like, um, like you can do react
[02:20:47]  use query and use server to wrap your fetcher of use query and that should work. Like that's how I designed it, that that should work. Uh, so
[02:20:57]  yeah, but yeah, I mean, I haven't tried it out, but, uh, yeah, I mean, yeah, the rendering layer is what's all it.
[02:21:03]  So what I want to do next, because we, we've been going a while and people are probably like, oh, wow, this is amazing. We learned a lot
[02:21:09]  of stuff. The thing is you haven't even seen the cool, all the cool stuff yet. This is just the preamble. We're actually gonna, I want
[02:21:15]  to talk about two things. First thing I want to do is I want to, Nikhil, can you share your screen and show us a, like we showed all the
[02:21:21]  pieces. Can you show some cool stuff to that comes together? I would love this. I was thinking about, no, I was thinking about showing it from my computer
[02:21:28] , but I saw you will have the solid start mono repo already open. Do you think? Okay. Yeah. I think it would be more fun to see you see it
[02:21:35] . I don't, I don't even know if you've seen that code. Right. So I want to see your reaction to going through. Yeah. Yeah. Cause
[02:21:40]  I, I actually haven't. So, uh, yeah, exactly. So hopefully it works on my computer. This is why you're taking, you're taking a risk
[02:21:47]  with me here. Um, because this is my new Netlify computer that probably doesn't even have Wrangler installed. If any of this depends on Cloudfl
[02:21:55] are, like I am. Uh, but, but I think Wrangler is a dependency wherever it's needed. Okay. Okay. Okay. That's fine.
[02:22:02]  So I'm going to close down our bear example and I'm going to go back to solid start and what are we showing off? What is, what should we do?
[02:22:11]  So, uh, there are a few things I want to show up. There's obviously I want to show the power of these server functions where like we, we use it
[02:22:18]  for create server data and create server actions where they're going to be used most, but they're also usable in different places. Because what a server function does is it
[02:22:27] , it basically, like, like I've been saying, like it creates, it, uh, it takes a function, uh, compiles it away and then assigns
[02:22:34]  it a URL that can be called, that can be, you know, addressed to that piece of code with, with arguments. Um, you know what, I might be
[02:22:43]  on the wrong branch too. Did you, do I have to be on the, it's all, no, it's all on to do, it's all in
[02:22:47]  your branch. No, it's all on your branch. Okay. It's all on to do is MVC. Just make sure you fetch the most recent stuff I've
[02:22:53]  pushed, I think. Uh, what is the last thing that pushed? Uh, clean up durable object. Okay. Yeah. At 4:00 AM last yesterday, this
[02:23:05]  morning. Okay. Uh, actually, uh, can you just do another pull? I just, yeah. Yeah. Oh, it's funny that I got that committed
[02:23:16] , not the other one. Does that mean I was up at 4:00 AM too? I don't think so actually. No, no, no. I just pushed
[02:23:22] . I just pushed. Okay. Okay. I'm like, I wasn't up at 4:00 AM yesterday. Yeah. Okay. Um, so, um, so
[02:23:30]  basically, uh, yeah, the, the demos I wanted to show was how can we start building even more powerful stuff? Like, so for one of the, one of
[02:23:37]  the things that I always like to do is start using web sockets for some of this interactive stuff. like, let's say you have a room, you want to
[02:23:43]  have a presence server between multiple people using the app, like, like some kind of multiplayer thing, or if you want your server to like continuously send you information, kind of
[02:23:54]  a stream of information, all these different features, they're normally difficult to develop with. personally in the serverless environments that we deploy to, um, most of them
[02:24:03]  don't run, don't support long running processes. Like they have to reply immediately and then, um, and then the abstractions are always very annoying because any of these
[02:24:14]  meta frameworks, they don't give you enough control over the server to like, uh, play with this stuff usually. And, um, the serverless platforms are just
[02:24:23]  not amazing, but very recently I saw cloud flare came up with this thing called durable objects, which is, uh, which is sort of this, this, this, uh
[02:24:32] , this like persistent JavaScript object that, that lives in one of their data centers. And then what you can do is it can actually represent a WebSocket server,
[02:24:41]  right? Because a WebSocket server is just a long running process that, that, uh, that, that there is only one of, so that if multiple people address
[02:24:50]  it, they each reach the same instance. And so I was like, okay, I want, I want a much easier path to developing cloud, uh, durable objects because
[02:24:58] , uh, right now I think what's needed is, um, I mean, Wrangler does provide you a pretty good thing, but if you're already using wheat
[02:25:05] , there wasn't already an, uh, existing harmony between them that you'd have to build your wheat app and then run it in Wrangler to get that dev
[02:25:13]  environment. So yeah, I think that's a good thing, but, um, so what I did yesterday was I integrated mini flare into our dev environments, right? So
[02:25:24]  what, what, what that means is like, if you, if you go to this durable objects example in wheat config TS, right? So if you see this uses our
[02:25:33] , um, our cloudflare workers adapter, right. And it allows you to, uh, buy into some of the cloudflare workers functionality. Um, I
[02:25:43] 'm thinking of how to make this web socket stuff even more cross adapter, but right now it works with our cloudflare example because it needs durable objects. This is a
[02:25:51]  good point actually. And one of the challenges here is because there, there might be possibility to generalize this stuff. Someone was asking about ISR in the chat a minute
[02:26:00]  ago, and I was going to talk about this more later on when we talk about the future and show some really cool demos of where we think things are heading. Um
[02:26:09] , but like every platform has their own version of, of ISR. Like it's, it's, it's like part of Vercel or part of Netl
[02:26:16] ify. They call it something, we call it something slightly different at Netlify. So, you know, when you get these infrastructure build stuff, even like the build
[02:26:24]  API, like technically we're built on top of Vercel's new build output API, but we're, we're going to get as a baseline generate the same
[02:26:31]  thing for every project. So like, how do we leverage Vercel more? Part of that is exposing it so you can use Vercel specific features, which is
[02:26:38]  one approach. The other one is trying to generalize across the whole thing. I think if there are some common things generalizing would be great, but I think that's
[02:26:45]  also a very tall order to, to try and like decide how to generalize across all these different infrastructures. Yeah. The idea was generalize what we can and then
[02:26:55]  allow you to access the platform specific features wherever possible. Right. So, uh, not, not take them away from you, but if you choose to use a certain
[02:27:04]  adapter, you, you, you can buy into all of the functions. Right. Right. So like if we had a Vercel adapter, we could perhaps have it
[02:27:13]  opt into ISR that way. Um, yeah, exactly. Exactly. So what, what this is basically doing is the, and we do have a Vercel adapter
[02:27:21] , just so everyone's clear on that. Yeah. Yeah. We support Vercel, Netlify, Deploy, Dino Deploy, Cloud Fire Workers
[02:27:29] , Cloud Fire Pages, Bun, Soon. I'm also working on this service worker thing that I think, uh, AWS Lambda. AWS Lambda. I think Daniel,
[02:27:40]  I think last he was talking about doing it in a service worker. I think I, I want to try that as well. And I think we can, um, but
[02:27:46]  yeah, you can see, yeah, you can see the, yeah. Lambda is still waiting. We have pages and workers for Cloudflare. Yeah. Node static
[02:27:53]  adapter for SSG. People were asking about SSG a minute ago. Yeah. Yeah. Okay. So, yeah. So this example basically shows you how you can use
[02:28:02]  things like durable objects, KV namespaces in your app and, uh, just declare them here. So like what this does is it creates one durable object called DO
[02:28:12]  web socket. And, uh, uh, one small nuance out of this is that web socket durable object needs to be exported from entry server because that's how Wrang
[02:28:20] ler works. Like you need to export your durable objects. But so right now I put it inside solid start slash web socket and we just export it from there. Oh,
[02:28:30]  I see. Because I, I think this is going to be a generalizable component. The web socket durable object itself is going to be generalizable enough, uh, that
[02:28:38]  I would want other adapters to implement it. Um, but yeah, the idea is you export this, but nobody, uh, normally the user doesn't need to
[02:28:45] , uh, the programmer doesn't need to worry about this. This is just a one line thing. The API for creating a web socket server, I think is the one
[02:28:52]  which is very interesting. So if you go to routes, um, um, uh, yeah, first go to index, right? So the login is the normal login page
[02:29:02] . And if you see at the, it was actually first scroll down, I don't want to show the server yet. Scroll down. So this is the route data function
[02:29:08] , uh, which, which just does the normal, like if the user's there, let go, if not like redirect to login, uh, we use our data
[02:29:18] . If you see this, I just put in another pattern here, which is putting create server data inside your components. This is generally not recommended because it, it creates water
[02:29:28] falls, right? So the, the main, main reason we have a route data function parallel to your home, to your component is so that when you navigate, we can
[02:29:38]  start calling your data functions immediately, even before your code loads and your code starts rendering. But if you do it inside your component, then we can't start fetching
[02:29:48]  early, right? So this is a anti pattern here, but what it was showing is that you get, as along with request in your second argument, you also get this
[02:29:58]  thing called env and this env is sort of like the Cloudflare env you would have got in your Cloudflare worker or like we plan to use this env as
[02:30:07]  exposing the platform specific features or platform specific environment stuff. And app and this dot app is, if you hover over dot app, um, it's a KV namespace
[02:30:18] , which is this Cloudflare worker thing. Um, uh, and it's KV namespace is just a simple cloudflare, um, key value store
[02:30:27] . Um, uh, let's, let's, let's start running this example and I'll then show you more as things happen. Yeah. So I don't know
[02:30:35]  what I've called the name of the example. You'll just have to go to packages on and see it. Yeah. Thank you for this nice long one. Yeah.
[02:30:44]  Yeah. Let's hope that works. All right. So if you go to index and not to manifest XML, no. So we need to log in. This is
[02:30:59]  none of the, this is not styled. So you've got to see old school HTML. Thank you. Okay. But yeah. So if you see, we have
[02:31:08]  this counter here, which is actually part of our, which is actually stored in our KV namespace, right? Yeah. Uh, it's, it's still
[02:31:15]  not deployed to Cloudflare. It'll be persisted locally, but it emulates that API. So if you, if you do increment, you'll see that,
[02:31:22]  uh, and if you have your network console, you will see that, that, that counter's actually coming from the, from, uh, that one. Oh yeah.
[02:31:35]  So end data is actually, you call increment and then, uh, you call and data again to get the most recent data and increment is just increment is just to create
[02:31:45] . So it's just, uh, it's just like a post, right? Yeah. It's a post. And then m data is what's the inside. And
[02:31:54] , and data is the counter data. I didn't name the variable then. Um, okay. Okay. It's from the environment. It's from end of the app
[02:32:03] . That's why I call it. end of data. So, so if you'll see the counter and now if you open this page again in a local post 3000
[02:32:11] , a different app, that should also show you four, right? Because it's, uh, it's persisted in the database kind of, and, uh, this
[02:32:19] , you'll have to refresh because we don't do cross tab the fetching yet. But so if you go back to the code, uh, I'll, I'll
[02:32:29]  tell you, uh, and if you see this in, in your folder, you'll see this dot MF file created, MF folder created in your example,
[02:32:38]  this is how mini flare does its persistence basically. Like, uh, it saves it in a file for file in dev and in prod, obviously it's, it's saved
[02:32:46]  up in cloud track. So this is just to show you the underbelly there. Now, now, now to the code, uh, now actually, can you go
[02:32:53]  back to the example? Uh, can you go back to the browser? You'll see, um, sorry, I'm just responding to chat. Sure. Yeah.
[02:33:03]  Can you go back to the browser? Yeah. I want to show another thing. Yeah. So if you'll see the other thing is this last ping thing, which is
[02:33:10]  constantly updating, right? Uh, the last ping number. And so that number is basically like, uh, we are, if you refresh this page and go make all
[02:33:22]  network, just show all network requests. Uh, you'll see, uh, there is this ping pong ID thing. This essentially is a web socket request. If you see
[02:33:33] . Yeah. But it uses, it uses our server functions as a backend for that. If you see the URL is very similar to our server functions URL. Yeah.
[02:33:42]  Um, and if you go to messages, uh, uh, on, on this tab only, uh, on, on the network tab, yeah, you'll see that
[02:33:52]  it's constantly sending pings and getting pongs back. All right. Right. So this is the general web socket. We, we connect to it. We get pong
[02:34:02] s back. And when we get a pong back, we take the timestamp and we update the UI with it. Right. Got a general use case for a web
[02:34:08]  socket. So let's see how this is implemented in, uh, in, in soil start. And I mean, the amazing thing for me still is that it's all
[02:34:16]  just in one file. Right. So if you go to index.tsx, uh, if you go down, uh, you'll see increment is just another create server
[02:34:25]  action. This invalidate stuff. I later found out it's not required, but. Okay. Ignore it for now. And then this is the create effect,
[02:34:32]  right. So normally when you have to, when you have to connect to a web socket, you want to do it in a, um, you have to do, you
[02:34:37]  want to do it in a create effect, right? Because you don't want to do it on the client, on the server. Yeah. So you will see what,
[02:34:45]  what we have is this ping pong variable. Let's you can imagine it being our web socket server. I have one question for you. Why did you use create effect
[02:34:57]  over on mount? Does this update? No reason, no reason. Okay. So this could be on mount. Actually. Yeah. This one, this one can be on
[02:35:05]  mount. Exactly. No, no reason. I, for some reason, never use on mount. I think it's the same thing, right? Yeah. I mean,
[02:35:12]  technically on mount adds a tiny bit more code because it has to actually do the work of making the effect inert, but yeah. Yeah. Then I'm good. I
[02:35:20] 'm good. I'm good with create effect care. So, so if you see ping pong is, um, uh, I want to show you ping pong, what ping
[02:35:27]  pong is after this, but the client side probably looks familiar to you, uh, uh, doing, uh, web socket is of type web socket, like on the,
[02:35:35]  on the, on the client, on the web, we have this web socket class that you just do new. Normally you do new web socket and you pass it a URL
[02:35:45]  to connect to. And then obviously you add event listeners for messages and then you can do web socket dot send. Uh, so if you see, we add a message
[02:35:53]  listener for message. And if we get a pong message, we set the list, set the last ping to that time. Right. And then every, if you see,
[02:36:02]  we've created an interval here where every one second, we're sending a new message to our web socket. Right. Which is through web socket dot send, just the normal
[02:36:12]  web socket client thing. And now let's see what ping pong is. Right. So if you go to ping pong, the function, so ping pong is declared on
[02:36:19]  the top and it basically is, is this function called create web socket server that accepts a server function. And the first argument of the server function is, is of type web
[02:36:30]  socket, but it represents the server side of the web socket. I see. So, so this is this ad event listener saying, if you had received a ping,
[02:36:39]  send a pong back. Right. Right. And, and, and then basically I give you access to the web socket so that you can call things like on close or like
[02:36:48]  on error or something like that. I don't know if what other event listeners you have, but you can basically do web socket dot add event listener. And I mean,
[02:36:57]  the cool part about this is that, um, actually I'll show you that in the rooms thing, but yeah, this is just now a general web socket server.
[02:37:06]  Any user can connect to it. Yeah. Um, it'll be long running and they'll keep getting pings, um, until they're on the page. And,
[02:37:14]  uh, when they go back to the login page or something like that, yeah, we had this web socket handlers thingy, uh, on the, also basically
[02:37:22]  again, like this function coordinates between the server and the client on the server, it basically saves it to a bunch of handlers. And we have the URL because any server
[02:37:30]  function, like I said, any server function is assigned a URL, right. Which you can use to address it. So that same URL can be used to address web so
[02:37:38] ckets also. Okay. Yeah. This is, this is less code than I was expecting. Yeah. And then, and create web socket is essentially new web socket.
[02:37:46]  We replace the HTTP part of the location with web sockets and we add an ID and I'll, I'll show you the significance of this ID, but basically when you
[02:37:55]  do web socket dot connect, you can pass in an ID and that's to show you how web sockets like durable objects are so special because you can actually create like this
[02:38:05]  multiplayer thing so easily with this, with this stuff, because normally one durable object is, can serve a bunch of web sockets at the same time. Yeah. And
[02:38:16] , and when you don't pass in an ID or every user will be connecting to the same durable object. So if there was no ID here, every user would be connecting
[02:38:27]  to the same instance of the durable object for one create web socket server instance. So for our ping pong server, every user is connecting the same durable object. They all have
[02:38:37]  individual web socket connections. So they don't actually intermingle that much unless we want them to. And so that's the second example we have, which is the
[02:38:45]  rooms example. So if you go back to our code. Okay. So this is just a normal single player ping pong server. Right now, let's say we want to
[02:38:53]  have something like multiplayer, right? So go to the room room thing. And this is ID by like some URL, right? Like, so the path is the ID of
[02:39:00]  the room. Yeah. And if you see, so can I just go there? So it was a room slash ABC or anything like that. Yeah, room, right
[02:39:11] ? Yeah. So if you see, just one second later, yeah, just one second later, you'll see that there's one user on this page, right?
[02:39:20]  Right. You'll see this is your user ID essentially. Now let's create another tab in this room. Yeah. Same room. Same room. Now you'll see we
[02:39:30]  have two users, right? Both of these people are in the same room talking the same web socket now. And if we go create a separate room with a separate ID,
[02:39:38]  ID, those two users will not like just to confirm that those two you will not be in the same room as these people. So yeah, reacts alone in their in
[02:39:47]  its own room, right? So this is how we got a rooms API. Now let's see how simple the code was for this. Like, I think I was surprised
[02:39:56]  myself. So let's go to the client section first. So that's in the create effect down here in the Yeah. So the client section is exactly the same except
[02:40:07]  we on line 116, we get the users of the of the page of the messages that we've received. So the our backend is constantly ponging us with the list
[02:40:18]  of users that are there. And if you scroll a little bit up, we assign and this create effect is significant because params dot ID, because it's reactive, right
[02:40:27] ? It can change. So the room will be a different room for a different ID of the of the route. And let's look at what the the room server is
[02:40:36]  like it's in the server function. It's slightly longer than the old one, but this shows you how. So when you have a bunch of users, a general thing
[02:40:48]  you'll need is a way to keep state, right? Like you need to keep track of who are the users in this room. Yeah. And then you want a separate
[02:40:56]  room for each of your IDs. So what connect ID make sure is that you get a new durable object for every room. Right? So every room will create a new
[02:41:07]  durable object with that ID. And then in and then the what the server handler does is when a new web socket connects, if you go to the top, what we're
[02:41:16]  doing is just like we were getting access to the request and we're getting access to N, the web socket server as part of second argument gets access to the durable object itself
[02:41:26] . And this durable object has this property of like any, anything you assign to it, those things just remain stateful, right? So like you can keep adding to
[02:41:36]  the map and across different requests, those things will stay. So we, what we just do here is like, if this durable object does not have a user's map,
[02:41:45]  right? Create that this is just an initializer, then you're like a new user got created. So add that to the bunch of users we have. Yeah.
[02:41:53]  And then basically add an event listener to the web socket that says, whenever you ping, send, send back the list of users we have. So if you see users is
[02:42:02]  just a, it's just iterating over the values that we have stored. This is just a map. Exactly. It's just a map. And then we just
[02:42:11]  send the list of users. And then obviously this, this, this logic can do whatever you want with new users. It can start accepting other kinds of messages, like join
[02:42:19] , kick out, anything like that, like have privileges, have admin users versus other kinds of users. All that stuff can just be programmed in JavaScript there. And then you
[02:42:29]  can have, like I said, you can have close handlers or error handlers on the web socket. And if, if you scroll down, um, when there
[02:42:36] 's an error handler on a close handler, we just delete the user from the, from the list of users we have. So if you actually go and close one of your
[02:42:44]  tabs, the, the solid, the other tab should, um, like, yeah, if you close this tab, this should like, yeah, remove the user from the
[02:42:52] , from the thing. Nice. So, so yeah. And again, if you see, and again, like, like we were doing earlier, you can have two
[02:43:00]  web socket servers on the same page on the, in the same file and you know, they won't be confused and they can each do their own logic, have separate connections
[02:43:09]  to them. Um, this is the web socket stuff. It, it also exposed to you how you can just use KV as a data store. Right? Like,
[02:43:16]  I think one of the things we've been worrying about is like what to show as the default way of like data stores. And normally every data store, you need to go
[02:43:25]  create a deployed, like instance of then connect to it and then you can start. But over here, if you see env.app and this app is from the,
[02:43:34]  um, in, in, in our wheat config, we had that KV namespaces thing, right? Uh, in our wheat config, if you go, um
[02:43:42] , yeah. Yeah. So KV namespaces has this app thing. That's how, that's where you get your new names. So you can have multiple names
[02:43:51] paces if you want, not normally required and then those just become key value stores for you and durable objects. Uh, I've already shown you, you can also
[02:43:59]  create your own durable objects. So if you, if you created a key here and another class name here, and then all you have to do is export that class from your
[02:44:10]  entry server. So just create a new class, go to the durable object documentation, create a new class and just export that from entry server. Yeah. Just export a new
[02:44:19]  class from here. And then just make sure you configure it in the, in the adapter code. Yeah. I have to admit, to be fair, I am not
[02:44:29]  familiar at all with the durable objects API. So this level of detail, I'm not quite following exactly. I hope some people in, in chat are following this, but
[02:44:38]  just so I can say back, so I can understand here, what you're saying is you can register as many of these as you want here in your config. And then
[02:44:46]  you will be able to just go in here. Like, is this what sectors. So if object is, is the name of the class that's, that's meant
[02:44:53]  to be exported. And then do, do underscore web socket is the binding that's created in N. Okay. So, so to use this durable object, you do N
[02:45:04]  dot do web socket dot. It has a bunch of functions to get the web socket or fetch from the web, uh, get the durable object or get, uh, fetch
[02:45:13]  from the durable object. Uh, yeah. So if you see web socket, your object is here and if you, if you want to go into it, you can
[02:45:19] , um, yeah, just, yeah, you'll see like it, it has a constructor and a fetch function. This fetch function is normally what, uh, your cloud
[02:45:30] flare worker will call and cloudflare has this API called web socket pair. You create a web socket pair. Whenever a new connection comes in the server side,
[02:45:40]  you save it in your durable object to be able to send the messages to, and the client side, you send it back to the client as part of the response. So
[02:45:48]  if you see line 31, a new response is being sent with status 101, which is the switching protocol status. And then you attach a web socket client to do it
[02:45:58] . So cloudflare takes care of some of this wiring for us right now, but I think it's a very nice API for other platforms to also, uh, so
[02:46:07] , and if you see handle web socket session, my audio might have just gone worse because my AirPods died, but if you see handle web socket session, you'll see this
[02:46:17]  is calling that web socket handlers, uh, list that we were pushing to when we had create web socket server, right? If you remember create web socket server online
[02:46:27]  42. Yeah. Um, right. So the, the, this handlers will have basically a bunch of web socket servers and, um, new instances of these durable objects
[02:46:39]  are created for different paths. So the, the ID is part of the path. So when a different ID comes in, a new instance of a durable object is created,
[02:46:49]  but that one is unique for that ID. So every time the same ID comes in, the same object will be used for all of them. So it's kind of
[02:46:57]  a way of having shared state and persistent and long running, but also having JavaScript code just merged with that state essentially, right? Like they kind of live together. Um,
[02:47:11]  and this, yeah, the idea was to create a general durable object that can be used by any web socket server, like to create. Normally you write your durable object
[02:47:21]  specific to your business logic. So you would create maybe a game room durable object that does some of this, but also does some of your game room stuff. But what I
[02:47:31]  wanted to create was create a durable object, remove it from the user's mindset if they don't need to think about it and just give them a web socket implementation, like
[02:47:39]  web socket server side implementation. It's interesting. It's cool how you had no problem here. It's just being able to like tap directly into the pieces you needed
[02:47:50]  to. Um, I guess, uh, Cloudflare offers a lot of these APIs and then everything else is just based around, uh, like being able to just modify
[02:48:00]  the request response objects. And it's interesting how you used a server function as the vehicle to actually make, uh, that as the URL for the web socket, right
[02:48:10] ? Yeah. So any web socket server will need a URL, right? And an address. And it's like, and on that address, some code needs to run.
[02:48:16]  I'm like, that's exactly what I designed server functions for. Like need a URL and need something to run on that URL. Okay. Um, did I, do
[02:48:25]  you still have a demo around server side events as well? Yeah. It's in the same example. Um, there's one thing I wanted to point out, which
[02:48:32]  is like, if you see our solid start repo and if you see when you install it also, uh, we ship directly with typescript sources, uh, and we also
[02:48:42]  ship more, everything is in, uh, ESM, everything and our solid start repo, uh, package does not have any build step. It has, we directly ship
[02:48:53]  with the source. And the idea is that VEAT will eventually build it, right? Whenever you want to build an app with solid start, VEAT will
[02:49:00]  build the parts it needs. It will code split everything. It will dead code eliminate whatever's not used. But I think an awesome experience that this provides you is now I
[02:49:10]  call this property being like very patch packageable, right? Like it's like when you install it and something's not going your way, normally with any other package, you
[02:49:19]  have to figure out the dist version of it, go there, change something, patch package it. It doesn't, it's not very ergonomic because you're like
[02:49:26]  this, the dist version is minified sometimes. Sometimes it's all obfuscated, but with solid start what you can do, you can install it in your packages
[02:49:34] . Some part of it doesn't work like you want. You go change it, you patch package it. And because it's in the typescript source, like it's
[02:49:42]  so easy to read and so easy to modify. Even once we ship it to you as a package, like, and I think that's a very, very important part
[02:49:49]  of this. It makes us go faster. When people have problems in their apps, they quickly change something, patch package it until we're able to release something. I think
[02:49:57]  this is something like, I think more packages, more tools should try to adopt this because it's really, really helpful. Like shipping with TypeScript directly is so helpful because
[02:50:08]  you just go directly to the implementation. When you go, when you right click and do go to definition, you're not going to empty TypeScript declaration. You're
[02:50:16]  going to the TypeScript implementation of it and that it allows you to see what is happening. Like, so when I use something like Eclipse for Java code, when I
[02:50:24]  right click on something, it shows me all the way down to like, okay, what does the Java standard library code for this look like sometimes? And like, that's
[02:50:31]  so helpful. Like that helps me with debugging. I'm like, it's so great that we can give you the same experience with solid start. Like, yeah, just
[02:50:37]  look at the source and see if it makes sense to you. I think we've got to thank VEAT for that one indirectly because we're betting on the fact
[02:50:45]  that we have the VEAT server running in the application, but yeah. Yeah. Yeah. Obviously it works with VEAT because VEAT will compile it for
[02:50:52]  us. Okay. Yeah. Let's do the server side event thing. So in the same, in the same durable objects thing. No, I didn't create a new
[02:50:59]  folder. It's in the same example. We were seeing SSE. Yeah. Yeah. Yeah. So, um, I was interested in this one. Cause I
[02:51:08]  mean, durable objects are great. I know nothing about them yet. This seems like something much simpler of an example for someone who gets to just see the stuff. Yeah.
[02:51:19]  So, so, um, um, an event stream is a type of HTTP response that your server can send. And the contract there is that the connection stays open or something
[02:51:28]  like that. And the stream can keep sending you data. It's not a two way thing. It's not like you can keep sending it. It's not a
[02:51:35]  web socket kind of two way communication. It's a one way thing from the server where the server can keep sending you events and then the client can decide what to do with
[02:51:42]  it. So, uh, I see you've packaged something here in solid start. Uh, I didn't realize if you, yeah, if you just go to it,
[02:51:48]  I think it's, I think it's helpful if you go to the definition there, because it does some of the wiring, um, for your server side event,
[02:51:56]  but, um, yeah, but the idea is that like, just like with a JSON helper and a redirect helper, this event stream helper just basically helps you build an event
[02:52:05]  stream response. And what you, what you can see it does is it creates a new readable stream. Yeah. And it makes that stream, uh, the, the type
[02:52:14]  of the response. Like if you see 94, we're passing that stream as the response and the, and pass the specific header text slash event stream. Okay. And
[02:52:24]  now what we can do is every time we push things into the readable stream, like we enqueue things into the readable stream, those are available on the client as new
[02:52:34]  server side events. So if you see what's, what we're doing here is create stream, create event stream is our client side helper, right? So it, it
[02:52:42]  actually create, it actually connects to your event source. So if you see that's, that's right there up, up, um, if you scroll up a bit
[02:52:49] , creates event stream is right there in line. Why does this create an effect? New event source, event source is not a proprietary API. It's a, it's
[02:52:57]  an actual web API that's meant to be connected to, uh, event streams specifically. The URL, if you see again. Yeah, we didn't, we didn't
[02:53:05]  talk about this at all. Uh, server functions while they are used to, and you can just call them with the arguments and be full types safe. They also export
[02:53:14]  their URL so you can feed their URL into us, into something where you just need to hit the server function without actually invoking it directly. So you can create the server
[02:53:25]  function just kind of reserves the, uh, and, and connects it to the function that gets executed. So in this case, he's using the fact that he's calling
[02:53:34]  server here and instead of calling it with the arguments, he's taking the URL to that, to that API essentially. And then calling event sources. So yeah, the
[02:53:44]  idea is that there are a lot of APIs that don't, that you don't control a lot. So like event stores or web socket, those depend on URLs, right
[02:53:53] ? So it's like, if you want to connect server functions to them, you need the function, you need the URL to a specific server function. And so what
[02:53:59]  we do is we just, uh, the, the thing that's a, this server called returns that has a dot URL property that gives you the URL for it. So
[02:54:07]  you see that we just destructure the URL from here and on the client, we pass it to new event source and we add an event listener and, um, on messages
[02:54:15]  just so that we can delegate what happens. So if you see our code, what we do on, on messages, we just set state to the most recent message we have
[02:54:23]  received. Yeah. And if you just, if you're done, if you go to your SSA, SSE page on your, uh, on your, uh
[02:54:32] , browser. Yeah. You see test data. Oh, can you refresh this? I don't know why this is not working. Does it not work? What? Wait
[02:54:49] , can you go back? Is this what happened? Did we change anything? No, right? I don't think so. Why is it sending like Jason? Oh
[02:55:03] , can you, can you return event stream? Where? Oh, okay. Okay. Yeah. Changes yesterday. Oh God. 20 online number 20. Yeah. You
[02:55:11]  have to, you have to return event stream. Oh, I, right. Cause it's, this was probably in there. Yeah. Yeah. Right now it's
[02:55:19]  getting like an empty JSON response probably. So hello world was the first message we said and goodbye was the, and you saw, you didn't have to do anything and this
[02:55:28]  updated. And if you see, um, yeah. And if you see the implementation for this, it's literally a set timeout inside your event stream. Right? So
[02:55:37]  you send chat, hello world, you set timeout and you send another message. And on your client, you get like two messages, one after the other, like after
[02:55:44]  a delay. This is, and literally you don't have to leave your component to like do any of this. Um, this is, this is really cool. Cause
[02:55:53] , uh, as you said, this is just such a simple mechanism and using server components, uh, or sorry, not server components, using server functions as a mechanism of
[02:56:03]  just wiring up a URL to feed into any other thing is, is something that, uh, we didn't cover yet, but it's actually really powerful because we get to
[02:56:11]  use these built-in mechanisms. Like event source is part of like the platform. So like you can just kind of wire up our very simple RPC functions and use
[02:56:25]  them, uh, uh, you know, with existing APIs. Um, yeah, no, I, yeah, I think the point of this is like, to be able
[02:56:34]  to express it right within your app. Right. So like, obviously you could make an API route in a separate file and do things like that. But the idea is
[02:56:42]  how close can we bring it to where you're using it? So that it makes sense for you. Yeah. This is, this is super powerful. I, I,
[02:56:49]  this example, I apologize for not knowing enough about durable objects. I was getting kind of, I like, I got the high level, but when you're talking about like
[02:56:55]  multiple and like when they merge and when they not, I was not really following it at all. You know, this example for me, uh, is very, very
[02:57:02]  clear what it, what it does. Um, I'm sure some people in the chat use cloudflare. So they're like, oh yeah, durable objects. Yeah
[02:57:08] . But I, that, that was not where I was at. This is, this is really quite cool. And like, we could, we could, we, we
[02:57:16] , we could do, you know, we can do something like set interval and then we could go, you know, you can have like, let's say you have
[02:57:23]  a counter or something like that. Yeah. You knew where I was going. I always, it's always a counter. Right. Um, and then we can go good
[02:57:31] , or I, instead of goodbye, um, we could just, yeah, we could just do whatever. Count, sorry. Still alive. And if this all works
[02:57:48]  properly. Every two seconds we should, oh, I didn't increment the count. This is my bad. We should do that. Let's make it one second. Cause
[02:58:00]  I'm impatient. Yeah. Do I have two instances working on the backend server? Okay. Yeah. The HMR, uh, with something we might have to play
[02:58:13]  with, but we're probably not cleaning some certain thing up, but yeah. Uh, yeah, there we go. This is cool. No, this is very cool.
[02:58:21]  I love how this is, is create event streams be something that could be generalized or just pass while back in event type. Um, yeah, I suppose this could be generalized
[02:58:37]  into primitive. One of the hardest things with solid is trying to choose where to draw the lines on your, on your primitives. Um, but what's, you
[02:58:45]  know, that's why we have the solid primitives package and stuff, because we can build a whole bunch of these things as a solid start, but we can also leave
[02:58:51]  a huge amount of the stuff into packages that are dedicated to the specific things like a solid event stream package or a solid start event stream package. So yeah, I mean,
[02:59:02]  I think that's really interesting just to show the composability of these primitives. Nikhil is muted. Sorry, sorry. Yeah. So most of these experiments were
[02:59:14]  done first completely in user land, like without changing any solid start code and then like whatever made sense to put inside solid start. So I think, and that was an exercise
[02:59:23]  for us to be like, you know, how much, how flexible is the user land for like these new kinds of features we would want. And, uh, so I
[02:59:31]  think, yeah, that was a very good exercise for us to like implement this in user land and push like the event stream helper back into the, into the report.
[02:59:38]  Um, yeah, so I guess I, I got a question here cause you're talking about how easy it was in doing stuff in user space and just hacking stuff together.
[02:59:48]  Um, can, can we, can we address the elephant in the room? Um, you know, people, people, people wonder about this stuff all the time and they
[02:59:58]  bug open source maintainers who work on, uh, you know, meta frameworks insistently about these features. And these are tricky problems to solve and they're, and
[03:00:14]  they're things, you know, heart hydration is a hard one and we don't know what the best patterns are yet. Um, but solid start has given us a platform
[03:00:21]  to experiment on with that and see, you know, test out ideas and see what they, if they, what they look like. I, I showed on stream a
[03:00:30]  while ago that, uh, Ryan, uh, turnquist to the co-creator of solid router had made like a nested server router and he just took solid
[03:00:36]  start and hacked around it. Um, and yeah, yeah, yeah, that was pretty cool. Yeah. I want to, I want to know what you've been hacking
[03:00:44]  around with, uh, in this regard, Nikhil. Yeah. Uh, so I mean, um, and this is, this came on the, on the backdrop
[03:00:52]  of like seeing fresh and seeing the Astro demos and how much people like them. And I was like, this seems like something really like simple to do, right? Because
[03:01:02]  what you want to do is you want to take, you want to take a, you say simple. Yeah. You say simple. And this is always my naivety
[03:01:10]  because I always think that things are way simpler than they are, but so I don't, I, that's why I don't think about the edge cases enough.
[03:01:17]  I feel like, but, uh, what, um, yeah, I was seeing the islands demo. I saw what fresh was doing and I was like, okay, fresh
[03:01:23]  you're doing with just JSX. Like I can do this. And I saw what Astro was doing to render solid inside those apps. And I was like, I
[03:01:31]  think we can do an islands mode for solid start. And I think, uh, it shouldn't be too complicated. And I think we can get my, my main
[03:01:38]  goal was like, try to get those same scores as Astro on those, on those paid speed insights thingy for what are the hacker news examples. And I was like
[03:01:47] , I was like, I need this partial hydration story. I think one important thing to talk about why things are flexible in user line is because our code, uh, we
[03:01:58]  don't bundle any code that you don't import in your app, right? So we only bundle, let's say your entry client and your entry server files. And
[03:02:08]  in your entry client, everything has to be imported by you or written by you and in entry, same in your entry server. So you can, at any point to be
[03:02:15]  like, I want my entry server to just not do anything solid start wants me to do, but just have like one HTML page. And at the same time, you
[03:02:25]  can have your entry client not run any hydration or any, uh, actual rendering and just do like, okay, I just want to do some small thing here and there.
[03:02:35]  Right. Right. So like what you're suggesting is kind of this, I guess this is a good time to look at whether partial hydration or this kind of solution would fit
[03:02:45]  with us when we were getting ready for gearing up for a beta release in terms of like what the top level API was. And I know we already showed when we
[03:02:53]  were doing hacker news earlier, the part of the reason that we ended up doing this layout for, uh, for our top level was that when we're in, um,
[03:03:04]  SSR mode, this is just like what you'd expect. It just, it just renders the page on the server and uses JSX. But when we're
[03:03:12]  in, um, uh, uh, what should you call, uh, uh, CSR mode, it just knows to basically render this to the static HTML once. And
[03:03:21]  then when you do, when you like, actually the JavaScript, uh, just basically no ops, this whole thing and just starts at the body tag. Um, and we
[03:03:30]  can do that because we control all the components along the path. Yeah. So if anybody has a question about like, why do we not use the lowercase HTML,
[03:03:39]  lowercase head and lowercase body tags? The reason is because we wanted to use these as control flow components for these different modes we had, right? For example, for
[03:03:48]  CSR, normally your app is like, you have an empty body and then you render into your body instead of hydrating. So in, when you disable SSR
[03:03:56] , what we do is when you are, when we are rendering your index.html file to be served, we basically make body render and empty children thing. We don
[03:04:06] 't, we don't make it pass through the children to render. So essentially you get HTML head, your populated head, a body tag, and then just nothing inside.
[03:04:15]  But when we are SSRing, then the body tag knows that it needs to render all its children also. Yeah. Um, yeah. And that's why we needed
[03:04:24]  those special components. Um, but do you, do you have, uh, anything to show us in terms of partial hydration? Yeah. Yeah. Yeah. So I
[03:04:32]  think I, we got, I got both Ryan Turnquist demo of like building this islands based router. Right. So, so if you, uh, if you run
[03:04:41] , start running the Hacker News example, I want to show you, uh, I want to show you these things first in action and then just talk about what's happening
[03:04:48] . Okay. So I guess my first question is, can I just use this exact Hacker News example that's sitting here on this branch? I don't have to
[03:04:56]  do anything special. Oh, nothing has to change. And I think that the idea has been, uh, that's why it's authored in the toggle separate from the
[03:05:05]  comment thing. This, that's the, I, I noted this earlier in the stream and the problem is because I was so quickly porting the stuff from JS to JS
[03:05:12] X. I copied this components folder from solid start repo instead of porting the other components. I knew the pages were different, but I figured, oh, I just grabbed
[03:05:20]  them. And then I was like, oh, this is funny. I authored this the way I would author it for partial hydration. So I could do recursive
[03:05:26]  partial hydration. Like I liked the demo on all of my streams. I'm like, that's funny. I authored it this way. It turns out I did not
[03:05:31]  author it this way. Nikhil authored it this way. And now I know why. Okay. So. Okay. Okay. Okay. Okay. Now I was on
[03:05:38]  this time. Yes. Because I was like, I was like, these components haven't changed in two years. Well, they changed like yesterday. So, um,
[03:05:45]  there, there we go. So I'm going to go PMP, PN, PM dashes filter. I don't know the name of the example. Example
[03:05:55]  hacker news. I know this one, cause this is one that I use all the time and I'm gonna go depth. Okay. So this is our SSR. We
[03:06:01] , we, we've seen this demo already. Like this is our, we've been doing this one since the beginning. And this is, this is our SSR
[03:06:08]  hacker news, um, async version of it. I can see the script tags serializing all our lovely data. And then I can see, um, okay. Well
[03:06:20] , I don't know what that is yet, but I can, I can see, I can see our, our typical hacker news demo here. And no, actually,
[03:06:27]  can you go, can you go, I think, I think this is slightly, can you go back to your, uh, beat config? I think this is,
[03:06:36]  you might've buried. Oh, oh, we're ahead of ourselves. Okay. Sorry. Let's just remove that for now. Yeah. Sorry. Okay. So that
[03:06:43] , because that's why, that's why we were seeing that island snippet that you just opened up. Right. Okay. So let's, uh, you know what
[03:06:51]  this, this isn't gonna, it's going to be hard to show this in dev. It occurred to me, I can't actually show this very well in dev
[03:06:58]  because I need to build it and then I need to start it, start it because the challenge here is that I want to actually see the final JavaScript here. Right. Um
[03:07:12] , and, and in this version here locally, every, every platform is a little different. It's 15 kilobytes. Okay. For slightly. Yeah. Um
[03:07:20] , so, and this is, this is our typical render SSR, uh, one. And yeah, as I was showing off it, we have our hydration script and
[03:07:32]  then we have our serialized data and then we have grammarly we have our, uh, we have our app in here. It's, uh, it's just
[03:07:45]  a traditional SSR rendered hydrated app. Right. Um, now let's, let's go and let's see how we can improve on this. Right. So one of
[03:07:55]  the, um, the first thing we did was, uh, introduced island and islands kind of experimental mode. And the idea is that in islands mode, your app runs
[03:08:09]  on the server like it did, but on the client, uh, almost nothing gets hydrated apart from your islands. So as opposed to the general mode, which is hydrate
[03:08:20]  everything, uh, everything that ran on the server just also runs on the client in islands mode, everything runs on the server, but your, but your client is like,
[03:08:29]  uh, I just want to hydrate very specific parts that the user said would be like, uh, right. So this, this, this isn't, this isn
[03:08:39] 't lazy, right? We don't, this isn't like, yeah, I wonder what I'm looking at here. This is your solid code probably. Yeah. Okay
[03:08:47] . So we haven't minified if you scroll all the way down. Yeah. Just this at the end is like our hydration code basically. Okay. So this is
[03:08:55]  the solid runtime and yeah, so we haven't, we haven't deferred the loading of the solid runtime here. So this is basically, yeah. So if I,
[03:09:03]  if I go to this comments page here, um, and I noticed that that was an MPA navigation. This is. Yeah. So now, okay. So yeah.
[03:09:11]  When we do islands, when we just do basic islands mode, basic islands mode is, does not include the whole client side router, right? It does not include all
[03:09:20]  your, does not work. Uh, don't. Yeah. It doesn't work. Can you just do it in dev? I think the build one might be broken.
[03:09:28]  Just do it in dev. I checked it in dev for sure. Yeah. This is, this is, you can still see the effect in dev. A lot of JavaScript
[03:09:35]  gets loaded unnecessarily. But if you, if you go to your console, all that JavaScript is unnecessary, it never executes. It doesn't work in dev either
[03:09:44] . It doesn't work. Oh, can you go to? This is why I told you, you've set it up on your computer before the stream. No, no
[03:09:49] , no. But I don't think this has anything to do with, uh, my computer. Uh, and we run dev again. Oh, oh, that's because
[03:10:00]  we didn't change. Okay. Okay. This, this is exactly what was supposed to happen. We turned islands mode into true. And because all of our, none of
[03:10:07]  our components are islands right now, everything gets rendered on the server and nothing gets hydrated. Right? Gotcha. That's why our plus button is not working because our plus
[03:10:16]  button. Sorry. Okay. Uh, so there is, there is a, there is a little bit more to this story. Cause yeah, I have not actually tried this
[03:10:30]  yet. That's why I was pretty stoked to see this. Yeah, no, no, this, this is exactly what's meant to happen. So when you turn islands
[03:10:35]  mode on, Right. The entire app is now just a static MPA and we haven't optimized, not shipping solid, um, uh, or some of the data
[03:10:43]  serialized stuff on the solid side. That's it. This is just an experiment at this point. But what you see is that it's just, islands true right now
[03:10:52]  is actually just MPA mode. If you don't change any of your code. Yeah. You, you, you get MPA mode. So what happens in MPA
[03:10:58]  mode is your router is not sent, none of your application code is sent. Your data is not meant to be sent. Your HTML gets sent and anything, any links
[03:11:07]  get clicked. You go, you do a full page navigation to a new page. Okay. And, uh, none of your JavaScript runs basically right now. Okay. Okay
[03:11:15] . So let's, yeah. What we can do is we can create one island. So if you've seen the Astro examples, if you've seen the other examples
[03:11:21] , what normally you want to do is you have these comments that you want to render a toggle, but you also want to render the nested comments on the server only
[03:11:31] . You don't want to send the nested comments as props to the, uh, to the toggle because otherwise you're ending up sending the data. The problem this is
[03:11:39]  trying to solve is commonly known as the double data problem or something, which is like the data is in the HTML and the data is in the JavaScript, right? So you
[03:11:47] 're sending all your data. What you can do here is basically on line four change import toggle from dash dash toggle to, to be, to use the lazy mechanism we
[03:11:58]  have, right? So you can do const toggle. Right. Is equal to, um, we, we export this function called unstable island right now. Unstable island
[03:12:10] . Okay. I like it. And it's like, it's like lazy. Right. So we just go import toggle. Okay. So this isn't a file
[03:12:21]  system kind of tricky. We're just testing. We're just testing this. So, okay. So you just, you just go, it's kind of like lazy.
[03:12:27]  You just go import a toggle. Yeah. This should do just do NPM run build again. Uh, yeah. I want to do building if possible. And I
[03:12:36]  want to do start. Okay. So now our toggle, and the reason we chose toggle here is because toggle is the only one that actually has any state on this page.
[03:12:46]  I've, if you've watched my stream previously, you, you know that I love this example for that reason. And now we do our NPM load and, uh
[03:12:54] , our toggle works and it looks like we are sitting on, uh, not bad 5.3 kilobytes of JavaScript, um, on this page and it's fully
[03:13:06]  interactive. So as you saw, we, we shaved 10 kilobytes of JavaScript, uh, because we only got the interactive parts here. Yeah. And I can,
[03:12:57]  uh, yeah. So this is, uh, islands mode basically, which is like you navigate any or anything we, uh, if you want to, do you want
[03:13:25]  to show what the HTML looks like for an island just to, yeah. It's part of the underlying technical thing, but yeah. So this is solid web. This is
[03:13:33]  solid web. Yeah. So, yeah. So yeah, this actually makes it really clear what's getting pulled in here. Cause we essentially have the three solids, 3.
[03:13:41] 6 kilobytes, like the whole solid runtime is 3.6 for this example, the toggle component is just this. And, and then the entry client is 90
[03:13:53] % V, CSS injection. Like I, I don't, I, this has always bugged me. I, I, I feel like we can do something about this
[03:14:01]  and then it's the code to hydrate the islands. So essentially, um, there's, there's basically, we, we even support the client colon idol thing
[03:14:14] y. Like if you do client colon idol, it will only hydrate once everything is ideal. Oh, you actually, you actually made that. Okay. That's cool
[03:14:23] . But yeah, I, I, I, I get what, I get what you're, what you're getting at in terms of, of, of this.
[03:14:30]  Yeah. So yeah, essentially the thing we, everyone talks, focuses on the zero kilobytes of JavaScript thing. Um, yeah, but the, the truth of the
[03:14:38]  matter is when you get to interaction, uh, you will load some amount of JavaScript. You will need to load the runtime of your framework and you'll need to load,
[03:14:48]  um, the components that are interactive. And, uh, and then you also need to load the stuff that beat packages in for some reason. So, uh, we
[03:14:58] 'll, we'll look into that more, but, uh, essentially, yeah, for about five kilobytes you have, you, you have, yeah, I think
[03:15:06]  you, and so right now we're still in MPA navigation. So if you click on a username and, um, you, you get, and then we should still
[03:15:14]  be hydrating. Can you confirm if we hydrate the islands properly after navigation? Yeah. Yeah. Yeah. Perfect. Um, so yeah, you navigate around,
[03:15:25]  uh, this got us to pretty okay scores, uh, like 70, 75, but yeah, I think we, there's still stuff to figure out. For example,
[03:15:33]  like we need some coordination from solid chairs where it doesn't write the resources that aren't going to the client and stuff like that. So things like that. Now, another
[03:15:43] , another experiment we did was something called islands router, uh, or I call it islands router. Nobody else calls it that yet. Yeah. So what's, what
[03:15:52] 's, what's, what's islands router so I can add that here? Let's enable islands router here. And what's, yeah, what is it? So what
[03:15:59]  islands routing is essentially what I think of it is. It's an, it's an MPA mode mechanism where what you want to do is, uh, because we have
[03:16:07]  nested routing, um, if you go home, uh, like you'll see that the browser tab is not refreshing. The spinner is not going around, but you
[03:16:20]  see that our JavaScript has not changed at all. Yeah. Yeah. Yeah. It's literally, we, we, we, uh, it's 0.8 kilob
[03:16:27] ytes, more JavaScript for the, for our small router that we have very tiny. So now we went from five kilobytes to six kilobytes, but we
[03:16:35] 're, we're, we're, we're server side rendering, but client routing. So exactly. So if you, if you go to the elements tab, I think
[03:16:44]  that's where it's most element, uh, on the elements thing in your, in your dev tools, if you, yeah. So you'll see, we have this
[03:16:51]  thing called outlet wrapper. So what we do is you have your nested routes, each of your nested portions of the route, we wrap it in a wrapper.
[03:17:00]  Yeah. And whenever a path changes on the server, we, we basically, uh, and we make sure that we also send in your previous URL when a path changes.
[03:17:10]  So on the server, what we do is we take your previous URL, take your next URL, do a kind of a diff between just the URLs about like what nested
[03:17:19]  sections changed. right. And just based on the sections that changed in your nested routing layout. So for example, when we're changing between hacker news and new and
[03:17:30]  show it's like in your, you're still on the index route, but you're probably changing between the nested part of the ID part or something like that. Right
[03:17:39] . This is, this is so insane. I, to actually be able to play in with this, sorry, like, cause this is client side routing. And I know
[03:17:45]  of others have been experimenting in this range too, that we, they talked about this a bit on quick, but this is like nested routing. Like I'm accustomed
[03:17:53]  to with solid router client side routing. I'm just like moving around, doing my thing. And, and the, my JavaScript, when I go to a new page,
[03:18:01]  my JavaScript is not changing here. I mean, I guess if I refresh, well, well, that's not quite true. Uh, if, if I'm on this
[03:18:08]  page and I go here, then I need to load the, we load the toggle, it's not necessary. Right. So we load the, the, the,
[03:18:16]  the toggle. So we load 700 bytes. So like, we, we just have this like, okay, so we started at our five kilobyte page, uh,
[03:18:22]  5.4 kilobyte page. We go to here, we're doing client side routing. We load our 700 bytes and now our, our stuff's fully interactive here
[03:18:31] . Like for a site like this, I, this is, this feels like the other demo that was 15 kilobytes. Uh, we didn't actually trade anything off
[03:18:39]  for going to islands here. This feels like that other demo. You click on the user name and it's just, it's, it's, it's like,
[03:18:44]  it's like six kilobytes. It's like 10 kilobytes smaller. So this, this is, this is yeah. And, and how we do this is
[03:18:53]  I think probably interesting, right? So if you, if on your network tab, you remove the JS part, you just keep all or something like just, uh, I
[03:19:00]  want to see. Oh, you want to see all? Yeah. Yeah. So if you just, uh, do a refresh or something. Yeah. Or actually let
[03:19:07] 's do navigation. Yeah. You scroll down. Yeah. No, the, the new one, the new, yeah. So this is the page you just requested. If
[03:19:17]  you see a response, basically what we do is we, we server render just a part of your page that needs to swap. Right. And basically we, we, we
[03:19:29]  send a response that's like outlet zero, outlet zero. What this means is like, take outlet zero, replace it with this new outlet zero. Uh, and when
[03:19:37]  you replace it, just inner HTML, all the HTML we've sent you. Yeah. And, uh, islands router also works with hydration. I think yet. I'm
[03:19:50]  not sure. I haven't checked that yet. Um, but it's kind of like, if you want to come from the MPA direction, uh, of apps,
[03:19:58]  like still want, not have a lot of JavaScript and go to pages between, uh, pages using links with reloads, but you just want it a little bit better
[03:20:08] , right? You want it a little bit better where you don't need the whole page. And if, if some part of your, like, for example, if the
[03:20:14]  navigation bar had an input and you had stuff typed into the search bar, that stuff would not be replaced. Right. When, when client side navigation happened like this,
[03:20:23]  you don't fetch any of the code, you don't fetch any of the data for your, for your pages. All that, all that's just server side rendered.
[03:20:31]  And even then you just send a chunk, right? Like with an MPA, you would have sent the whole page and have to do some different. Yeah. Sorry
[03:20:37] . It's just, it's just unreal to have this feeling. I mean, I, I know people talk about this and I, there's so much more work to
[03:20:43]  do to optimize this. I already know this, but to just navigate around on this app that I've played with a billion times before and just see the JavaScript, like basically
[03:20:51]  be six kilobytes and just, it's just, it's just, it's just the thing. Like to be fair. Yeah. I just, yeah, I
[03:20:57] , this is, this is my first foray into the, into this, but to have the client side routing. Sorry. I didn't mean to cut you off
[03:21:04] . I'm just, no, no, this is perfect. This is the reaction. Somebody actually said this. It's, it's not perfect yet. I want to
[03:21:12] , I want to, I want to highlight. Yes. It's mental and unstable. Yeah. So like this, this is, yeah, this, and yeah, different
[03:21:22] . Yeah. I mean, it's a thing is like, I just impressed at how small, I mean, we're going to probably have to tweak it and add a
[03:21:29]  little bit here and there and, and tailor it and optimize and stuff, but just how small this is to get this experience, like in JavaScript payload land, like this
[03:21:38] , this is really cool to be able to start like one of the challenges, right? Um, we have to do more work here, obviously, but one of the challenges
[03:21:45]  is to get the baseline, to be able to do this, you need more runtime than just an MPA. So trying to figure out how to scale it, like react
[03:21:53]  server components, solve this problem and do this basically. And they, once you load it, you won't be loading anything, but the toggle, it'll work,
[03:22:00]  it'll work exactly the same way, but you have to load 50 kilobytes of react before you get to do that. Um, and, uh, even stuff like
[03:22:09]  quick that I've been looking at, uh, I, my last time I checked, I mean, there must be something wrong with their zipping or something, but it
[03:22:16] 's at least 18 or 20 kilobytes. Uh, like, uh, what I really like about this is just like, this is, if you know, you
[03:22:24]  can do this at the baseline, you know, like this is the target to set. Like if, if you can make your hack, as long as you get your hacker
[03:22:30]  news demo, like the simplest demo, smaller than the equivalent client's side rendered spa, you know, that you're set up to scale because the only thing that happens after
[03:22:40]  this point is that you add more opportunities to cut that code out of your, like more static stuff and opportunities to scale the thing. Because with a spa, you add
[03:22:51]  more interactivity, it's going to get bigger anyways. But this, so this is just that level, except you have the opportunity to, um, to do, to
[03:23:01]  basically ship less. Uh, obviously there's trade-offs. The thing is, this mentality is a little different, I think, right? Because like, there is no
[03:23:10]  shared context state or something. You're like, we're gonna have to, you're gonna have to look, I mean, you can use signals to talk between islands
[03:23:13] . We've done that a lot with Astro. But you need to think about, uh, like how data management works, how state works. I, I don't
[03:23:21]  want to even go too far down, like talking about this right now, but there's a lot of considerations and things that are different. And that's why it's important
[03:23:32]  that we do experiments and actually play with this. Yeah. And I think, I think I would like to say something here, which is like that the entire point of
[03:23:42]  me experimenting with this was that I want a framework where it's possible that for some pages, this makes sense. For some pages, it doesn't. Right. For some
[03:23:53]  pages, SSR makes sense. For some pages, SPA makes sense. And what I want to be able to do is try all of these out without changing,
[03:24:01]  without changing my code. Right. So in my, in my app, I want to go to islands mode, see what my app feels like, see what doesn't work
[03:24:07] , what works, go to SSR mode, see what that feels like, go to SPA mode, see what that feels like. Um, uh, and it's
[03:24:14] , it's, it's the, the, the point of the tool is to give you a sort of an interactive feedback process, that process, even in choosing rendering
[03:24:23]  modes and choosing routing modes. Like, can you, can you, uh, quickly, like one of the, I think I saw Twitter on Twitter, somebody suggests like,
[03:24:33]  when is somebody going to ship with the universal adapter, which basically deploys my website on all the platforms, runs lighthouse cores on all of them, and then picks the best
[03:24:44]  one. It's like, and the, the main tool there is that you wrote your code once, and because it works cross adapter, cross deployment platform, you can
[03:24:53]  do something like that. And I think we might even try to do something like that. And it's the same with rendering modes and routing modes. Like if your app
[03:25:00]  can be written in one way that makes sense, you know, based on, uh, it being deployed in different ways, but the components make sense, the way the components
[03:25:10]  are wired to it makes sense. Then it can be like, okay, while in an evening, you can try SSR SPA islands mode in your app, and just
[03:25:17]  benchmark all three of them. See where hydration is hurting you. See if you don't want to do hydration. See if you can just trim the JavaScript down to just a
[03:25:26]  few components. Maybe do that on your blog, not do that in your apps. The idea is that like, because we haven't found a silver bullet necessarily for like
[03:25:36]  the rendering and the routing yet, you need to be able to play with, or like go across the spectrum. Like that spectrum of like, I think, um, Jason
[03:25:45]  Miller has that, like, you know, holotypes of apps or like that five, I think I've seen the table where there is five categories of apps from like
[03:25:55]  blogs, websites to like web apps. And I do want solid start to be, uh, something that's used for the entire spectrum. And, and to do that,
[03:26:04]  you need to be able to give people the opportunity to play with where the rendering happens, where the routing happens, where the, um, where the data fetching happens.
[03:26:13]  Uh, yes, no, definitely. And I, I love, I love this comment here. I mean, here's the thing. If we hadn't gone through
[03:26:22]  all the learning, look at all the other options, look at all the other frameworks, understood what they were doing. And we did it all together. All of us together
[03:26:29]  on the stream. We wouldn't be able to appreciate where we got into and where things are heading that that's, that's the thing, right? Uh, so
[03:26:37]  much learned from remix hydrogen, uh, even fresh fresh is what kickstarted this again. Cause we like, we, we knew we could do it. And I was
[03:26:45] , I was just like, you know, one day, like whatever. And Nikhil was like, no, no, no, get like, just, I'm like
[03:26:51] , we got to work on solid start. We got to get those docs out. We got to get the release on. He's like, give me an evening.
[03:26:55]  I'm just gonna, I'm just gonna go and come back. And, and at first I thought he was just gonna show me the islands demo, but then he was
[03:27:01]  like, oh, actually I also incorporated Ryan's router in as well. Um, so now, now we got both working. I was just like, that's crazy
[03:27:09] . But the thing is the, this isn't quite the Holy grail yet, but I'm hoping, uh, this will lend as Nikhil was saying to us,
[03:27:18]  figuring out what that is. I think, I think I love having that ambition and having that goal. Like you're talking about Nikhil about being able to try stuff,
[03:27:26]  switch it. I think that's the experimentation we need to figure out where things are heading. I think there's a lot of interesting challenges here. Like I actually like
[03:27:33]  my vision in the future might involve being able to make that choice and that selection, but it's, it's tricky. You don't, because of the mechanics of it
[03:27:41] . I don't believe you can actually switch from spa to, to this in the same app without losing a lot, because there's a whole questions of, or, or
[03:27:51]  this to spa, like data serialization requirements. And like, like there's a lot of complexity that comes into, to like certain components expecting certain data to be present
[03:28:03] . Like if we're not talking about just JavaScript, but actually data requirements. Um, but honestly, we won't know if this is the Holy grail until we try
[03:28:11]  it. Like until we, until we keep on playing around with it. Like my, my hope is that there is a merging point. And because I don't actually
[03:28:20]  think being like switching like between them being like, I don't know, transition. I don't know if that actually works. I think that we, we need to,
[03:28:31]  but we need to figure out what does. So, uh, this is kind of a launch for that. Yeah. Yeah, yeah, exactly. Like it's.
[03:28:37]  Yeah. Hopefully like I always tell you this, right? Like I just want the compiler to figure out what will provide the best user experience for this app and this, right
[03:28:47] ? Like, but, uh, it's, it's on the way to that you want to give, and I think Ryan Florence has talked about this. Like it
[03:28:53] 's the levels concept, right? Like how many levels can we give you to like play around with your app and, um, without you having to rewrite your code or switch
[03:29:02]  frameworks or like switch UI libraries and things like that. Um, which is a funny ask when, when choosing to adopt solid in the first place is probably involved you switching your
[03:29:14]  UI library. Um, but after that, after that, after that, after that, no, but there's a, like when I was working through this, like
[03:29:23]  I literally do NPM run dev and in dev mode. I go to my beat config and change these flags one by one, like switch islands, true islands, false,
[03:29:32]  SP, SSR, true, SSR, false. And like without, without skipping a beat without reloading the beat server or anything like that. I can just
[03:29:41]  try through all these modes and see like the kind of effect it has, how I see the page. And I think like, so I, I spent one semester in college
[03:29:48]  doing, working on this CAD tool where our idea was that if there are urban planners and they have to design streets and buildings, right? They have to design a street layout
[03:29:56]  network. And normally the street, normally the traffic simulation software or whatever simulation software you have that takes like the traditional production ready ones used to take like five hours or six hours
[03:30:08]  to run or sometimes 24 hours. And so people made one street change or some layout change. And they had to wait one hour to sort of five, six hours to
[03:30:16]  get feedback on like, if that change made sense. Right. I spent like so much work trying to figure out, we can give you, like, we obviously run based
[03:30:25]  on heuristics and we run based on approximations, but how quickly can you get feedback for a route change you made in your urban plan? And that really,
[03:30:35]  it, it set me into this mindset of like, it's really important to have interactive feedback from your tools about like how you're doing and how the thing you're developing
[03:30:45] , how that's going to perform. And I think part of the story here is that can like solid start, start reporting metrics on some of these pages in the console
[03:30:54]  logs, right? Like be like, okay, this took this much time to SSR, this, this much time to hydrate. And you try SPSPA
[03:31:01]  and SSR and you see, okay, sometimes like, for example, we've seen examples where in our hacker news demo, it doesn't make sense for the, for
[03:31:10]  us to go to the server, then fetch the, like for navigations. It doesn't make sense for us to go to the server, then fetch the data,
[03:31:17]  come back and come to, come to the client. That is a, that is a actual real thing. We were benchmarking the hacker news examples when we added the server
[03:31:24]  functions. And I was kind of stoked. Cause like if we add the server functions, then we can just like remove all the data fetching code from the client.
[03:31:33]  Like for an app that small, the trade-off for the extra like code to do the server functions versus in the client versus that is pretty much a wash. But I
[03:31:40]  was like, picture, you know, if we made like something more, then this is just a quick way of removing all the APIs calls from the client, but we actually
[03:31:49]  tested it. And for this particular API that we're using, it was faster to fetch from the browser than it was to fetch from the server. And so we just left
[03:31:57]  it the way it was. Yeah, exactly. And so the idea is like, and like, yeah, that goes along the lines of like, you know, there
[03:32:03]  are no silver bullets. It doesn't necessarily make sense to send everything, the, everything through your server. If your client is actually closer to those places, um, and
[03:32:13]  you know, you need a way to try it out. You need a way to measure it. That's why that being that, uh, that server function being just one
[03:32:19]  variable that you wrap around your function is so important because now you could try both modes, right? You could try the mode where your, all your data fetching is
[03:32:28]  on the server by wrapping it in a server function. And then you're like, Oh, this seems slower. Or like maybe your metrics told you it's slower. Then
[03:32:34]  you just remove that function. It's not like you have to move your code from being an API endpoint to being a, like, let's say inside your create query hook
[03:32:42]  or something like that. Something like that. Like you didn't have to move your code around. You just had to like wrap it in a bit or annotate it
[03:32:48]  a bit to be like, run this on the server, run this on the client. And it gave you enough feedback for you to be like this, the time on this
[03:32:55]  is slower. I shouldn't do this. And so you quickly made that, you know, reverted that and told me that, and I think that's the kind of
[03:33:02]  interactive feedback I'm talking about. So your tools have to be quick enough to make, make those changes to, for you to try other variations of what you're doing
[03:33:10] . And then you need to have a way of getting feedback and reverting those changes if they don't make sense. And so that's why it's important to have you
[03:33:18]  not rewrite your app or have to not shift between API routes and inline some JavaScript functions. Yeah. Yeah. Great. Like this is the same philosophy and stuff behind
[03:33:29]  solid itself and being the, on the, the powerful primitives, because if you, it's so critical from a refactoring modularity story, because if you,
[03:33:38]  if you kind of go, like, as you said, it's really awkward. If suddenly going from one way means, okay, now you need to create an API endpoint
[03:33:45]  where you didn't need to create an API endpoint before. Yeah. Yeah. Yeah. And yeah, that, as you know, the, I love how much that
[03:33:53]  philosophy reflects with what the, like the core philosophy of what we've been doing with solid in anyway. And what was this? Yeah. A couple of comments right now that
[03:34:02]  I think are kind of relevant. I like that there are tools for different methodologies. I don't think one size fits all, but this could be a sort of decision
[03:34:08]  tree. Um, the funniest thing is you mentioned something to me the other day, Nikhil, when you're like, we were talking about the CLI and you're
[03:34:15]  like, what was your idea you for like the ultimate, uh, solid start CLI. Oh yeah. I, I wanted to do something like you have that list
[03:34:24]  of hello types from Jason Miller. So when you say, you say go and PM in it solid, we make a list of like, we, we, we give you
[03:34:32]  all of those. Um, yeah. If you see this, so you have, you have like, yeah, social networking, social media applications, storefront. So
[03:34:40]  we give you a list of this and you select one of them. And then we basically set it up in the correct way. Uh, have some kind of baller plate
[03:34:48]  for them, have some kind of example for them and make this be sort of the guide for like, what are the, and our purpose is to try to see if we
[03:34:57]  can support all of these modes. Right. So they all have an ideal implementation case written there and the ideas can be support all of them. So most of them are
[03:35:05]  single page apps. Some of them are server side rendered. Some of them are partially rendered islands, architecture type thingies, like probably blogs and all. And the idea
[03:35:13]  is that can you go across the spectrum with one plug. And I think normally I do agree that, you know, trying to make one size fit all thing is, is
[03:35:22]  kindly sometimes worrying because you're like, you know, what are you focusing on? What do you really do well? And our main thing was that we allow you to write
[03:35:31]  code that, you know, UI code plus the code that runs on the server to serve your UI. That whole picture is the thing we're trying to optimize, right
[03:35:41] ? So once we know you, once we know you can write that code in an easy manner, in a way, in a manner that's easy to express. Then I
[03:35:48]  think the, the, the, the solution we're choosing is solid and the, and the backend infrastructure for it. And it's like how you deploy it, how that
[03:35:58] , when that gets rendered, how the routing happens. I think those are not like part of the solution. Those are part of the options you want to have when you
[03:36:05] 're working on your solution. Like we're not propagating server side, render everything, or we're not propagating SPA, everything or islands, everything. Like,
[03:36:15]  because it doesn't make sense. Right. Like it. And we want this ultimately, we want to help you develop what you want to build. This is the starting point
[03:36:24]  for all your solid, solid apps. You know, like I, I, I, people make fun of me because the name. Yeah. I mean, don't
[03:36:32] , don't Google solid start. Uh, I mean, solid start would be fine, but solid starts is like baby food or something. Um, but, uh, I
[03:36:40]  mean, we, we, we can, we can bike shed that as much as you want, but that's, that was like the, the target. That was
[03:36:46]  the, what are they called the North star essentially that this was the start. Um, and yeah, that essentially, as you, as you, as you have seen,
[03:36:56]  everything is piecewise. It's primitives, um, interchangeable, but you know, giving you that flexibility, but I'm hoping with the help of great doc writers
[03:37:07] , good guidelines and best practices. Um, because you already saw something like that to do MVC example, really nice way to get progressive enhancement, you know, forms
[03:37:17] , actions. We've, we've got enough tools that hopefully we select the, we've created the right primitives for you. Um, and then, you know,
[03:37:24]  as we learn more from the community, we can see what it makes sense to incorporate. Really. really this is just V plugins with, uh, with basically some solid
[03:37:34] , advanced solid primitives, essentially wrapped around solid, existing solid primitives. It's just, it's, it's all, it's all layers. Yeah. I
[03:37:42]  think I wanted to like, I know meta framework is the framing everybody's used to. So it's familiar, but, uh, for some reason I'm, I,
[03:37:50]  I want to, um, I think of it more as like an SDK for solid apps, right? Like it's just a bunch of tools that you can pull in
[03:37:57]  and it, it basically is like, uh, a, a compiler for your solid apps or a, or a builder for your solid apps. It's mainly do these two
[03:38:05]  things, a bunch of APIs that are helpful for you to write your apps properly and, and a builder for them. So, and that, that it's mainly a toolkit
[03:38:13]  for your solid apps. Yeah. It's not an opinionated framework. It's not trying to figure out the pieces for you. It's just a way to write your
[03:38:21]  apps. We, we didn't show it today cause it, it kind of worked at one point and then we've kind of put it on hold. We have like
[03:38:27]  one of those, like add on CLIs as well, where, you know, you could be like solid ad tailwind, uh, and then have like solid start basically
[03:38:35]  add in tailwind for you or, or different, different stuff like that. Honestly, um, that needs more work too, but you can, you can start seeing how
[03:38:43]  we can use this sort of piecewise piece, uh, as a foundation to build on top of. This is a hard design place. This is why this has taken
[03:38:52]  so long. Actually, if you think about it, because, um, it's hard to both be adaptable. I'm not gonna say flexible, flexible bugs me.
[03:39:00]  I don't like having options. I like having like interchangeable pieces. Um, it's a, it's a very subtle difference, uh, between having something that you
[03:39:08]  can use, like there's a difference between having something that you can use a number of ways and just shape it for your purpose. Cause it's like a Lego block
[03:39:16] , like a Lego blocking you use everywhere. And versus something that has a billion dials. I'm not a, I'm not a big fan of the billion dials
[03:39:22]  thing. I'd rather be like, okay, here's a Lego block for this. Here's a Lego block for that. But there is a balance there for streamlining
[03:39:27]  the experience. So we've taken a lot of time to figure out how we can present this in a way where you can still have the very straightforward, happy path.
[03:39:38]  Um, that's similar to other experiences you've had in the past, yet be able to walk outside of it and still support the, you know, the needs, keep
[03:39:48]  that control, you know? Um, and a lot of that, uh, builds on the, you know, the same principles we always have, you know, about
[03:39:54] , uh, low abstraction layers, uh, uh, and lots of simple primitives, um, that you can, and composition. It basically, it's one of
[03:40:03]  those funny things. If you build something with composition in mind, you just find that it extends naturally. Like you don't have to actually worry about that. As long as
[03:40:13]  you build a systems with composition in mind, they kind of naturally progress. And that's, I feel like what we've done here. Um, I've, I've
[03:40:20] , I've a question or I think I want to switch gears or wrap up this section because I still, we still have this week in JavaScript coming up here, but,
[03:40:29]  uh, I want to deal with, uh, kind of. Uh, look at some of the stuff that's in the chat. Um, so if anyone has any
[03:40:35]  more kind of questions, now's a good time to kind of throw them in, especially about maybe specific features of the future. Um, cause I, I, I'm
[03:40:43]  hoping we got our philosophy across. I, I think we've, we've iterated on it a few times, but someone asked if we considered copying, uh, remix
[03:40:51]  stack pattern. Are you familiar with that one, Nikhil? Yeah, no, I'm definitely familiar with all of them. Uh, I, I actually have considered it
[03:41:00] . I think it's a good, it's kind of our examples thing, right? Like, so their stacks are slightly more, uh, overloaded. So they
[03:41:06]  have more technologies opted in more things set up. And I think that, I think normally that's a good thing for having, like, and I think that's what I
[03:41:14]  meant by the hollow type, hollow type thingy was like to have some kind of stack set up for those different kinds of apps. So mostly it'll be like some
[03:41:23]  data store or, uh, some, uh, if you need some testing and things, but actually instead of the stacks, I think I'm still in, in favor of
[03:41:33]  the, um, the model that Astro has used with its integrations thing. or Nuxt uses with Nuxt modules, which is that those pieces, if they
[03:41:41]  can be things that you can add by a CLI, like something like, so let's a solid start, add tailwind. Solid start, add super base. Solid
[03:41:50]  start, add Prisma. Um, those, I think still end up being much, uh, more easy to use. Actually, I don't know if they're
[03:42:00]  easy to use, but I think they're more powerful because you can do that during the lifetime of your app, right? Like, so once you've started your app,
[03:42:06]  so stacks are like, you have to opt into a stack at the beginning, right? And then you live with it. What I want is, and I think this is
[03:42:14] , again, things I've talked to you about. It's like with any framework, with any technical decision, normally it's like, if the, if the decision is
[03:42:22]  open, like if the choice is opinionated, then you need to be way more careful at the beginning. While making that choice, right? Because then it's difficult
[03:42:30]  to move off it. Do you know what? I don't know if you watched Theo's stream this week where he talked to the guy from Redwood, but like the
[03:42:38]  sub tone of that whole stream was this, and I highly recommend anyone go check it out. Um, it's, I think it's still up on Twitch, but he
[03:42:44] 'll probably post the vids on YouTube, but he talks specifically about evaluating things on the cost of, of moving off it and figuring out how much you want to take on
[03:42:55]  upfront. Sorry to interrupt, continue. Yeah, yeah. No, exactly. And I think that's the kind of philosophy I'm thinking. Like if you know what
[03:43:01]  you, if you know what you need right at the beginning, that's great. But I think for most apps, for most of my experiences has been like, I don
[03:43:09] 't know what exactly I need at the beginning. I want to explore things as they go, add things as they go, remove things as they go. Right. And
[03:43:17]  still have those decision levers in my hand. Like, especially things like SSR SP. Like, don't make me decide at the beginning. Like, I can tell you
[03:43:25]  what I'm thinking, but you know, I'm probably going to change my mind sometimes. Sorry, this came in and I thought it was kind of funny. Not
[03:43:32]  this stream. Nikhil showed us how to render to the terminal with Solid on the last time he joined us. So you can actually go see that. He, he
[03:43:41]  ported, was it React Inc? Inc, yeah. Over to Solid Inc. So using our custom renderer. Yes, you can use Solid to render to the terminal
[03:43:50] . Sorry. Solid Inc is published as well. So some people can try it. Just a normal node library that you can import and just start writing JSX for the terminal
[03:44:01] . It's really cool. Yeah. Yeah. I'm just reading some comments. I guess some people have similar concerns. I just hope you didn't go to Rem
[03:44:08] ix for students, a specific set of tooling. Yeah. I mean, it's tricky balance, right? Because anything that we put out there is going, is going to
[03:44:17]  be something that people will depend on and then support. I'm very conscious of the maintenance burden, probably more than anyone. So, yeah, I think, I think,
[03:44:25]  I think there's a balance in there between how batteries include. I think you have to make these decisions as a framework designer upfront. Like we have to know what our
[03:44:34]  goal is and how we evaluate these choices. If we're going to include stuff. I tried my hardest not to include anything. I hate. I don't like opinionated
[03:44:44]  stuff, even though I have strong opinions. That's probably why I don't tend to like opinionated stuff. Yeah, I just don't want other people's opinions
[03:44:54] . Yeah. So, you know, yeah, we're trying, I'm trying my best, even though some examples do have examples because you need examples to show, we
[03:45:04]  need to figure out how to make that split. As I said, these are the kind of decisions that I want to figure out during beta. I think we lock up
[03:45:09]  the API and you kind of show people what they can do, figuring out how to best build the community ecosystem. That's something we're going to learn with you, like
[03:45:17]  you people coming in and helping us and stuff, right? The big thing for beta, as I mentioned before, solid 1.5 has some key features that I want.
[03:45:25]  So that'll fix some of the little niggly points and the documentation, both these efforts that are currently in process. So yeah, someone's asking, oh, state
[03:45:34]  across islands. I didn't cover it today, but if you watch my Astro stream, I accidentally stumble across it on my first Astro stream. Someone's like,
[03:45:43]  oh, how do you share state? And I'm like, I have no clue. And then I just was like, oh, I just put a signal in an island
[03:45:49]  and import it, like basically import it from other islands. Sharing state can be done because solids reactivity isn't tied to components. You can like basically, if you
[03:45:58]  can share a signal, you can do communication across islands. I think it is interesting architecturally when you think of stuff like stores and figuring out like who's responsible for initial
[03:46:08] izing it. If stuff is like all distributed, I think there's interesting patterns to be discovered there. But generally speaking from like a really simple dumb answer is use a signal
[03:46:17] . It'll just work. Can you show something in the code base really quick? A lot of comments here. I wish I wish I could talk on all of them
[03:46:29] . Just give me two seconds. I'm just giving these ones some light a day because I think I think these are really good comments. Right. People keep this chat going
[03:46:38] . But are we able to do deploy Dean of Lords or built way to do so? Yeah, yeah. And actually, I mean, this is out of date a
[03:46:48]  bit. But if I go to Vercel.com right now, and I go like new project, for example. And if you look here, and you just start
[03:46:57]  typing solid. Oh, no, these are important. Yeah. Yeah. Yeah. Where is it? Browse all templates. Yeah. We're we're we
[03:47:08] 're in here. Solid start like as we're still working on I'm working Netlify this month to get solid start as one of the official templates. Um,
[03:47:19]  but I point out is yeah, we these options are you can expect them to come in. Uh, do you know deploy flying Netlify deployments would be great.
[03:47:30]  Yeah, we haven't done fly. We we have both Netlify. I guess a lot of people are seeing this for the first time in the stream. I've
[03:47:34]  been sharing solid start demos for like a year now. If you've ever seen like when the first day someone goes, we've just added edge functions to our platform, you
[03:47:43]  know, Uh, and you and there's like solid demo that came out the same day. Those were all done with using solid start. Uh, the day that first
[03:47:52]  cell launched their edge functions, I had solid start running on an edge function. The day that Netlify did, did, um, we got Dino deploy. Um
[03:47:59] , these examples that I'm known for were all done with solid start. Um, fly is the only one on this list that we, we don't have. Uh,
[03:48:07]  um, yeah, legacy migration is painful. So much comments and people talking about stuff. Um, I, I want to show some, one thing very quickly. If
[03:48:16]  you go back to the solid start code base, uh, one, one API that, you know, if people can give us feedback, you know, that'd be awesome
[03:48:23]  on this. Um, yeah. Yeah. Just, just once, if you can go back to the code base. Yeah, sure. So if you go, if you
[03:48:32]  go to a, let's say a bear example, um, yeah. Uh, go to source. If you see that we have in, in routes, in,
[03:48:42]  in routes. Yeah. You, we have the 404 page. Right. And normally it's like, people want to have these missing pages and they want to send a
[03:48:50]  status code. Oh yeah. And we have, what we decided to do was keep all the things that are meant to represent your page. Part of the JSX.
[03:48:59]  Right. So your status code, just like your head, just like your HTTP headers and your JSX templates are part of representing the whole response. that's going to
[03:49:10]  get sent to the user. Right. And so the idea is that, and obviously we were thinking, right? Like it, um, where does this exactly belong? This
[03:49:18]  API. And for one day I was like, why don't we just put in the JSX, right? Like you can have an HTTP status code here. You can
[03:49:24]  also have another component called HTTP header. So if you add another component here, HTTP header. Yeah. And so this, you can give it a name and a value
[03:49:38] . And you will see that when you go to this page, these headers and this status code will be, uh, part of like the HTTP response that's sent. Uh
[03:49:48] , and obviously there are edge cases to think about when streaming is involved, but mostly without streaming. This is how you would set status codes for your page. Uh,
[03:49:58]  um, or how you would set specific HTTP headers for your page. And the status code is interesting because now what you can do is let's say you wanted to show status
[03:50:07]  400 or, uh, or some errors. Let's say you want to show status 400. Um, yeah, let's go to that page. I want to see if
[03:50:16]  we actually know what we're talking about. Yeah. So if you, yeah. So see page not, uh, no, not. Yeah. Yeah. No,
[03:50:24]  why is login? Oh yeah. Login is not a real page. Yeah. So login is not found. And hello world is part of the headers. Um, and
[03:50:32]  I think this is super interesting because now what you can do is let's say you had a server data function that could potentially throw an error. Right? Yeah. What you
[03:50:41]  would now normally be doing is you would be catching that in your error boundary. Right? Yeah. Now what you can do is as part of an error boundary fallback
[03:50:48] . So you can make an, make a, make a granular error boundary. Let's say in your index file, which is the error boundary for a certain server data function
[03:50:57] . Right? I'm not actually do this right now. I don't think. Yeah. But what, what we can do is based on that, based on if
[03:51:04]  that error, if the server data function errors, your server boundary will be hit. And if your server boundary will be hit, then we can make HTTP status code as
[03:51:13]  part of the fallback in the error boundary. Right. So what will happen is your server data fails. Your server data fails, your page is rendered, your navigation is
[03:51:22]  rendered, everything else is rendered. But the data, whether, uh, the part of the JSX that depends on the data doesn't render because the error boundary has been
[03:51:31]  hit. And what the error boundary renders has HTTP status code in it. So only when server data fails, you'll get that status code. And if server data
[03:51:39]  succeeds, then you'll not get that status code because error boundaries already do that control flow. Right. I mean, and you can choose how you want to handle it.
[03:51:45]  You can also just redirect to a different page. Yeah, exactly. You can do anything in the error boundary, but I'm saying like, if you want to send a
[03:51:51]  status code, just do that at the error boundary. And so if anything fails, you, uh, and in, in your status, in your error boundary, you can
[03:51:58]  check the error, right? So you can be like, if error.message is this, this, this, this, this, then send this status code.
[03:52:03]  If error.message is this, this, this, send a different status code. Yeah. Yeah. I, I really, yeah. It's funny.
[03:52:10]  Cause sometimes people critical of like, uh, JSX not being, uh, elements. But what I do like about this is it follows the rendering flow, um, quite
[03:52:17] , quite well, because it makes sense for like the, it lets you reuse the control flow of your app in order to leverage this. Um, so like being able
[03:52:28]  to basically use the control flow, um, is, is super powerful because we already, you already write your app to, to manage it based on control flow. You already
[03:52:39] , like we, once you start saying things like suspense and error boundaries, and you've made that decision, then it's all part of the rendering. And, uh
[03:52:45] , yeah, and what's really cool is because of this modularness of solid and the way that these pieces all kind of fit together. We like, this isn't a
[03:52:54]  hard construct to build on top of, or to build. We didn't need to like, now we export const metadata or something. Like we didn't have to,
[03:53:03]  like, we didn't have to come up with like more and more new, uh, ways of doing things. But exactly. We can keep it consistent with, with the
[03:53:13]  patterns that we're used to. So yeah, this is, this is a cool. And thanks for pointing that out. Yeah. Just, I mean, I mean,
[03:53:19]  this is another new API that we're trying out that other frameworks don't do it. So it's worth getting feedback on like, okay, does it make sense?
[03:53:26]  Right. Yeah. Um, and, and as I said, a beta is the baseline. Uh, this, we recognize that this is not as ready for production as every
[03:53:36]  other solutions. We just want to make it, you know, be able to get to a point now where you can join us on the conversation and that we can, we
[03:53:44]  can, we can, you know, we can make this happen. Um, people do use solid start on their, on their apps. And some people even taking the production
[03:53:51] , a few, a few of us, uh, already. Um, but yeah, I, I, I, I think at least now you'll be feel safe
[03:53:57]  enough to be on that journey to, to kind of figure it out, you know, like, and with us, uh, where things are heading. Exactly. Yeah
[03:54:07] . So, uh, I don't, I think that's good on the, on the questions here. Salt has boats to islands react and asked, doesn't have people
[03:54:14]  talking about the stuff. Sorry. I, I, I realized the state and islands thing is like, it just, it just has never been a hard problem. And
[03:54:21]  like, I, I, I like we just, I just, I just, I just said, I fell on it. I was like, Oh, how do you
[03:54:27]  do this? I wonder if I can just go window dot value equals create signal and sure enough that works. Um, but I, you can do better. You can use
[03:54:34]  a singleton patterns and use imports to do it. It just, yeah, it's, it's, it's, it's just people talking about that. I
[03:54:42]  mean, I, I don't think you should compare stuff on features generally, because a lot of times other frameworks or other tools will get those features if they're important enough
[03:54:51] . So it's like, it's all a matter of time. Um, I'm, I'm mostly cons for us. It's of, and why we've been
[03:54:58]  stressing so much is about the philosophy and about the approach that we can take. Um, because this is, this is what's important to us. Right. Um,
[03:55:07]  so yeah, I don't know. I, I feel like that is really what I wanted to get across here. And I, I feel like we need to wrap up
[03:55:15]  and, uh, get on to this week in, in, in JavaScript. Um, I, I, I, I, I, this is your last chance here to
[03:55:23]  ask Nikhil any specific questions. Cause I'm gonna, I'm gonna, I'm gonna swap over here and actually, um, this week in JavaScript isn't super long
[03:55:31] . I don't know. Do, did you want to join me for it this week, Nikhil? Or how do you feel? Yeah, no, no.
[03:55:36]  Okay. So, but I am not gonna be addressing solid start questions once we switch over. So, okay. It looks like everyone's good in the comments. Let's
[03:55:44] , uh, let's, let's, let's switch over and actually I'm gonna get everything ready here. I think Ian had this question called, and it will be
[03:55:52]  accessed from the response object, right? This is talking about the status code and stuff like that. Normally you wouldn't have a way of, uh, getting it before
[03:56:00]  it gets sent. But we have a context called start context and you can access these things from it. Like what is the currently set status code and things like that based on
[03:56:11]  the components. Um, right. Yeah. Yeah. And the thing, yeah, our con that, since we basically just use it like a solid context, it passes
[03:56:20]  through our whole tree, uh, essentially. So you, you, it's very easy to, to get going on this stuff. And, um, yeah, let
[03:56:29]  me see if I can get back. Sorry. Just I'm doing it all on screen while I'm talking here. Um, you know, maybe I'll just put the
[03:56:37]  talking heads up for two seconds while I, while I get myself ready here, but let me see if I can see any of the questions. Um, Nikhil,
[03:56:46]  what is your GitHub? My GitHub is, let me just type it in here. Oh, I can't type it, but it's NKS are off. If you
[03:56:53]  want, if you want. All right. Type it. Yeah. You can, you can put it right in the comments tab and it should go right in. I
[03:57:03]  don't see a way to, for me to write a comment. Oh, interesting. I guess I don't give you permissions for that. Sorry. Uh, if you
[03:57:09]  could send it to me in private chat, I'll drop it in. I'm just, I'm not, I'm not, I'm not one for typing right now
[03:57:15] . Let me get left in my drink. Yeah. All right. Um, yeah. How do I want to start? Yeah. Let me give me two seconds.
[03:57:33]  Uh, okay. Yeah. Perfect. I think I am all set up and I think we're good to go. So let me do a couple. Yeah. I sent
[03:57:42]  you the link to my GitHub on my private chat. Yeah. Everyone do come in and check, check out Nikhil's work on GitHub. He has done amazing stuff.
[03:57:52]  He's done like the solid three render ink, all that stuff, all the solid start stuff. Um, yeah. Incredible amount of work for a guy who's been involved
[03:58:00]  in the project who I, I guess, six, I guess it's been like seven, seven, eight months now. Now. Yeah. I must be approaching.
[03:58:09]  Yeah. Yeah. But just amazing work. Um, oh, did I get that? Oh, and your Twitter. Yeah. Let's, let's link your Twitter handle
[03:58:16]  as well. Yes. Let's get some followers going. Yeah. Get, get, get Nikhil some followers. And while you guys are at it, you can also
[03:58:21]  follow me on Twitch. My Twitch follower count is a lot lower than my YouTube. Um, definitely do take that moment to, to, to follow subscribe. Um,
[03:58:31]  yeah, let's, let's see here. Cause we're at almost four hours, but luckily this week in JavaScript shouldn't be that long. But I, I say
[03:58:38]  that and I'm, and I'm wrong a lot. So, um, let's, let's, let's get the, let's get the banners up
[03:58:46] . I don't need more followers. Oh man. Thank you. Uh, no, it's, it's, it's, it is funny. Some people mentioned
[03:58:56]  that with the new time and the more people watching it, the stream feels a little bit differently. It used to be like that thing that came on like late night, like
[03:59:04]  when they're trying to go to sleep, like on Friday nights, especially if they're not Pacific time, it was like the, like the, oh, you know,
[03:59:10]  like, especially like people at East coast central time, it'd be like coming on at like 10 o'clock at night and they'd just be like done for the evening
[03:59:17] . And, you know, join me for like a night, nightcap, so to speak. And now it's like, there's like way more people on stream
[03:59:25]  and, uh, you know, and whatnot. Um, so yeah, anyway, let's, uh, let's, let's, uh, let's switch modes here
[03:59:33] . Okay. So I'm going to go here and say, welcome to this week in JavaScript. Um, I've gotten to kill here, uh, continuing on, uh
[03:59:41] , from our great stream talking about solid start and I've got a, hopefully only a couple topics this week. Um, so let's, let's, let's
[03:59:51]  just get right into it. Shall we? Um, first thing I wanted to point out is something I think is absolutely amazing. When I see this happen to members of our
[04:00:01]  community, I am so stoked, but, um, Ryan Turnquist, the creator of solid app router or co-creator, depending on your look at it.
[04:00:08]  Cause I had a router, he had a router. They came together. Um, just started this week, um, at eBay working on Marco. Um, and some
[04:00:16]  of you might be thinking, wait, didn't you, yeah, I, I used to, uh, uh, work on Marco at eBay as well. Um, before
[04:00:23]  I moved on to Netlify recently, but Marco team, obviously been doing amazing work on the partial hydration, uh, islands type side of things, uh, resume ability
[04:00:33] . Um, I've covered it in other streams. You should check it out. Um, and honestly, I wouldn't be surprised if Ryan took some of his router
[04:00:40]  magic and brought it there because we were talking about that Holy grail for, for comparison right now, Marco six prototype that page that we were like, yeah, five kil
[04:00:52] obytes solid is 1.6 kilobytes in Marco. So if they can figure out a way to get the router in there, maybe that will be the Holy gra
[04:00:57] il. Um, so, you know, super excited to see this happen. More members of our community being able to get paid to work on open source full time.
[04:01:07]  Um, you know, and as I said, Marco is an amazing project. So, so proud of him. It's so awesome to see that. Um, yeah,
[04:01:16]  no. Um, and he's going to continue working on solid stuff. Don't worry about that. He's still got the router and you can already see the influence
[04:01:22]  that it's had on the stream. We did today. So no worries there about, about Ryan. Um, but yeah, just could be happier for him. I'm
[04:01:31]  so stoked to see this happen. Um, and next thing I wanted to point out was, uh, we published a state of solid. Um, you should check it out
[04:01:42] . Uh, a lot and the, I mean, a lot of stuff has happened the last few months. I have a hard time even keeping track of it all.
[04:01:50]  Honestly, between sponsorships, uh, we won a breakthrough of the year. Uh, it actually came in the mail, but unfortunately it came in a little bit cracked.
[04:01:59]  Uh, the, the, the, the award, I mean, I could, I could show this on stream. It's, it was actually, I was pretty stoked
[04:02:06]  to get it as like cool backlighting and stuff, but, uh, it sits on this light stand and lights up, but, uh, it ended up getting
[04:02:13]  damaged. Oh, well. Um, but yeah, just so much stuff. Honestly, I'm not going to cover that all because that stuff did not all happen in this
[04:02:21]  week in JavaScript, but just incredible growth, incredible, everything meetups. Yeah. Just check it out. Great videos, talks. Nikhil joining core. I forgot to
[04:02:31]  mention. He's newest core team member. Unsurprising to anyone watching the stream at this point. Um, joining Netlify. Just, just read the article
[04:02:41]  if you care at all about what's going on. It's all, let's, let's, let's, uh, let's move on. Um, uh,
[04:02:47]  the, the, the next big thing that happened, you know, I'm sure people in my stream are very conscious of stuff like performance. You might've seen this tweet
[04:02:56] , um, which you can't see right now because I'm on my screen. Yeah. But you might've seen this tweet. Um, which, uh, Oh
[04:03:07] , which means you didn't see me talking about the state of solid. I am so silly. Anyways, it's fine. I was actually scrolling through the article, um
[04:03:15] , for the state of solid, but, uh, yeah, that's hilarious. I think that's okay. Yeah. I mean, it's, it's fine.
[04:03:22]  Just lots, lots of stuff. Um, um, yeah. Uh, anyway, this probably caught a lot of your eyes because a lot of people here care about performance
[04:03:34]  and they saw this incredible benchmark, which, uh, to be fair, Preact is also working on something similar, although they're not doing a compiled route, which is
[04:03:42]  using, um, uh, basically the compiler to do smarter V DOM updates. And they're talking about how it made 11 times less scripting in this test. I
[04:03:53] 'm this, this kicked up some controversy a little bit, you know, maybe not a ton, but it definitely got a lot of attention. Um, so, you know
[04:04:01] , a few people, uh, you know, kind of looked into it and, uh, the benchmark, um, does show off something pretty amazing, but there was
[04:04:11]  some, some, there's a couple little things that affected its accuracy, um, so to speak. And we kind of, kind of gently, uh, nudged the
[04:04:20]  author who, by the way, it's 17 years old. This guy's incredible. I've talked to him a number of times, uh, uh, the past week
[04:04:26] , um, you know, like his thinking, he shared some, uh, like writing he had on the subject, um, in terms of where you can take the
[04:04:32]  V DOM is it's, it's, it's amazing. Um, uh, but, uh, basically we're going to get million in the JS framework benchmark, um
[04:04:42] , and kind of more standardized tests. Cause, and this, cause this, I mean, this is a good thing because this article actually ended up leading to, uh,
[04:04:49]  uh, partially to Marvin Hagmeister from Preact actually writing about how you can accidentally mess up benchmarks. And, and this is a topic very close to my,
[04:05:01]  my, my heart because I have done this a ton. Uh, and I was like talking about how I've pretty much done all of these and yeah, I mean this
[04:05:11] , this article is worth dissecting on its own. Um, using outdated versions. This is probably a bit of a nod to what happened the other week. Remember I was
[04:05:19]  using an outdated, uh, code from Preact, uh, in the SSR benchmark because I just kept on bumping the versions. I didn't update, I
[04:05:27]  tried to keep them up to date, but the way the code works is different. They use a new compiler. So, um, that didn't properly represent, uh,
[04:05:35]  the performance for Preact, right? People are like, oh, why is Preact, you know, slower on the SSR? Well, part of it was because
[04:05:42]  of outdated code. Um, but yeah, he goes into a bunch of stuff, batching. This happens sometimes you accidentally batch things that you don't realize. Accidental
[04:05:49]  overhead. Accidental overhead. This is actually what happened in the millions benchmark. He actually describes, uh, what, what happened and how, uh, essentially there was
[04:05:59]  this accidental, like, difference between the conversion that was getting measured for the other comparisons versus the millions one. And this is how it was 11X. It was,
[04:06:07]  it was largely this. And, um, you know, just so many great hints. Benchmarking is hard. So like, I, I, I very
[04:06:16]  much appreciate this article because it really kind of helped, uh, kind of lay out stuff. It's just so funny. I'm, I could see he was probably like
[04:06:26]  starting, had this idea in his head after the, what happened with the SSR benchmark I published the other day. And then these other millions when he was just like,
[04:06:33]  okay, I'm just going to write them all out. This is a great list. A great reference for anyone getting to benchmarks just to kind of remind themselves, you know
[04:06:39] , am I doing everything that I should be doing? Um, so yeah, really awesome article. Um, but yeah, I mean, all that being said, million
[04:06:51]  JS is, is pretty freaking cool. Uh, you know, what they're attempting to do with the compiler. I, I, I just want to take a second to
[04:06:59]  kind of look at this. I mean, for the most part, they've, they've trying to keep the same, uh, API as react. And, um,
[04:07:06]  there's obviously features that, um, they don't kind of look at this. They don't completely cover a lot of the stuff around fiber. They don't have
[04:07:14]  fiber or like, like the same suspense and stuff, but like, um, for doing like the core react stuff, actually, you know what? Can we, is it
[04:07:22]  possible? Can I, can I just fork this on stack woods? I hope no one minds. I'm just kind of curious what their compiler does. Like, sorry,
[04:07:30]  this is such a tangent, but you, you know, me like, okay. So this is this. Okay. It's a stack woods and it's not going
[04:07:37]  to die on me. Let me let's, let's see what we can do here. Let's. Uh, yeah. Uh, actually maybe, maybe I don't
[04:07:43]  need to reload the site. Aiden. This looks like it. This. Yeah. Okay. Yeah. It's a beat app. Okay. Okay. React million source
[04:07:55] . Oh, beautiful. Okay. This, we found that we found the money here. Okay. Cause we can actually see the compilation. If, if anyone has used
[04:08:04] , uh, VDOM libraries, they generally compile to something called hyperscript and hyperscript is like, uh, is like, uh, these H functions.
[04:08:13]  And I actually see hints of an H function. It's just for compat. See H and fragment. These are hyperscript functions. You see H image. This is
[04:08:20]  what VDOM compilation usually looks like. It looks like this like onion of function and function and function and function all calling each other. But there's like a problem
[04:08:28]  with this, right? Because if you have to rerun this over and over and over again, you're calling a bunch of functions to create temporary objects. And you do
[04:08:34]  it over and over again. Do you see what they've done here? He's flattened out the VDOM structure into static objects through compilation. I like this.
[04:08:44]  He's not the first to have done that though. Uh, Inferno actually works this way. Um, and, uh, and, and. And, and
[04:08:52]  views custom, uh, output, like not for JSX or other stuff works kind of similar. Because what's interesting is once these are objects, very little stops you from
[04:09:03]  being able to hoist those objects outside of your render function and actually reuse them instead of recreating them every time. But it's things to the function call. You can
[04:09:09] 't do that. So this kind of level of VDOM optimization, um, right off the start, um, is making good impression with me. Um, yeah,
[04:09:16]  sorry. I, I, I, I'm geeking out a bit. Uh, some people probably don't remember. I, I actually did a little work on
[04:09:23]  Marco five, um, playing around with optimizing the, the VDOM. I, I, I got my hands a little dirty in there and seeing different kinds of
[04:09:31] , it's not only reactive libraries that I, I have a decent understanding of, but I, I've also spent some time with VDOM structures. Um, yeah
[04:09:37] . So I, I, it's hard to tell like what the set count is without looking in the code. So we'd probably have to look at it. I just
[04:09:43] , I think right off the start though, this is an interesting point that the compilation is not standard JSX. This is immediately into custom compiler zone. So, um
[04:09:52] , it's, as I said, I think we're going to see more and more of this. I think that's what makes JSX so powerful. And actually,
[04:10:00]  um, that actually is a perfect segue, almost like it was planned, um, to talk about this tweet where a lot of discussion this week was actually about JSX.
[04:10:12]  So like react will one day fall, but will JSX go with it? Well, can only hope some people really hate JSX. I, I, I don
[04:10:24] 't know what, like, do you, do you have any feelings towards JSX, Nikhil? I don't get it. I don't get it. I,
[04:10:30]  I think I started loving all this, like react and solid and stuff because of the JSX. Like it just made so much sense to me. Yeah. Yeah.
[04:10:41]  That you write your components that way. I actually hate single file components. Like I hope those go away. Yeah. Yeah. Yeah. I, single file components. I
[04:10:51]  definitely dislike as well. Um, but there is a certain, it's interesting because when I think of things like Marco and Marco six, it doesn't feel like single file
[04:10:59]  components anymore. I'm so I'm okay with that, but that's because the problem with single file components and, but here's the thing, this is why this is
[04:11:05]  such a TV thing is single file components. We'll go code view CSS. Like they, they have three independent code blocks. So the people who like single file components
[04:11:17]  kind of are like the same people are like, I miss MVC. Like, follow me. Like they're. Right. Like essentially like the, that's the
[04:11:27]  argument though. Like I like separation of concerns. That's, that's, that's the kind of stuff that comes back in. So basically that age old argument that happened
[04:11:34]  way back, you know, 10 years ago is still going on and living in that. I just never realized that's what it was until more recently. But here's
[04:11:41]  the thing. By the time that happens, maybe I was saying because react is going to take forever. Like even if it, if no, every, if even if people
[04:11:49]  are like, no reacting solution today, it's going to be like a decade before it was gone. And that isn't the case. React is getting better and better
[04:11:55]  and keeps on improving. I said JSX is really good to point to a point, but then when you want more, it's like a cliff because JSX offers a
[04:12:04]  universal syntax that all tooling recognizes. But if someone, so if someone goes and creates a framework tomorrow, they can be up and running in a couple hours instead of years
[04:12:12] . And I mean years because think about how long it takes to get TypeScript and language service components and prettier and ESLint and VS code highlighting and all that stuff.
[04:12:22]  Like you can basically just take JSX and hit the ground running. But see, that alone is not good enough to justify its existence, but it makes it attractive.
[04:12:33]  But I, I also don't think that that's where the dislike comes from. I was mentioning because, cause even if JSX were the die, for me, I
[04:12:39]  would want to keep a lot of its strength and its successor. Yeah. Like just think of how much tooling we got for free because of JSX and you know, some
[04:12:48]  people, you know, might prefer some of the power you get from Svelte's templating. Like we brought, like one of the things that we did that we
[04:12:56]  kind of borrowed from Svelte or the technically from older frameworks too from the templating side is the use of directives. And like different kind of namespacing
[04:13:04]  hacks and stuff. I mean, so technically you could use JSX to do a lot of the stuff, you know, but there's some niceties like punning,
[04:13:11]  like the ability to just pass in a single argument to have it be the value instead of like, do you know what I mean? Like, uh, I can probably
[04:13:20]  pull up a VS code window to show what I'm talking about. But I'm talking about being able to go like this, right? Being able to go, uh,
[04:13:28]  div disabled. Disabled. And then that, I mean, disabled Boolean. So that sucks title. That's, that's, that's a better one.
[04:13:38]  Cause in Svelte, you can do this and it'll just take whatever value values title. There's things like that that are missing from JSX. And the second
[04:13:45]  you try and add them, suddenly you're off the happy path, but it's a good starting point. Cause you know, as much as like I was showing millions
[04:13:52] , which has a different JSX compilation, Saul has a different JSX compilation. I think stencil has a different JSX compilation. Inferno has a different JSX
[04:13:59]  compilation. Uh, Vue doesn't, but if you wanted their JSX to have the same ability as their templates, they would have a different JSX compilation. Um
[04:14:09] , like this, what the power JSX is that it's like, uh, a standard syntax, not that it has a specific output, like hyperscript.
[04:14:17]  That's why I never add it to the browser. Like, yeah, it's the templating part, right? Like, right. And, but the thing is,
[04:14:25]  I think what finally pushed it really is typescript. I think that was the final nail. Like, because if I'm going to start a new thing today, am,
[04:14:35]  am I going to want to implement typescript for it myself? Like Vue and Svelte did that effort, which is Herculean. Marco is doing
[04:14:43]  that effort that's right now too, for their template syntax. And they actually have a, like, they have a real reason for it. Because Marco's language actually informs
[04:14:51]  the partial hydration. It's, it's freaking genius, but it's been an incredible amount of work there. And in fact, we're going to get Dylan Piercy
[04:14:58]  to come on stream in a few weeks and actually show us how to build a language server for, uh, like a custom DSL here for, for, for that.
[04:15:05]  Uh, basically like how he could make it work, um, for Marco to have typescript support. But if I, if I'm just a poor guy that goes
[04:15:13] , I want to make a framework, I'm just going to pick up JSX. Like it's just so much easier. Like, even if you look at it,
[04:15:18]  there might be a couple of things you want to constrain from a little bit, but like, like even Astro is like so close to JSX. Like,
[04:15:25]  like it just, it's been, it's just been the, the, the easiest choice. Right. Um, so like, yeah, it, it, it's
[04:15:39]  one of those things, right. Um, like, I, I think, I think, I think, uh, this conversation carried on for a bit, you know,
[04:15:50]  and people are like talking about how they like or dislike JSX. You know, and I think it eventually wrapped around, I don't, I don't even remember
[04:15:59]  where it goes to, but I think, like, I think I, what I really liked about this was the original poster was fairly open-minded because he, he,
[04:16:09]  he, he, he actually rephrased the question after, after a bit. And I, I don't know where that came in maybe, yeah, here it
[04:16:19]  is for sure. I just feel more comfortable with HTML being the base of my components for multiple reasons. But as Ryan said in the other, it seems like the obvious choice
[04:16:26]  for new frameworks at the moment, especially is the author, author of JSX. And then there's a mention, I mean, this is a lot of Svel
[04:16:34] te community kind of people, uh, like, uh, you know, so just keep this in mind right now. You know, I basically said, are you going to
[04:16:42]  go build Volar, right? Um, he did bring up a good point that you could use Svelte language tools directly. And actually Marco has the same option
[04:16:52]  too. So, um, I think things like Molina have actually used Svelte's language processor and skipped the thing. So JSX isn't the only choice.
[04:16:59]  Someone has to build these tools in the first place, but it depends on where you want to spend your time and what hill you want to die on. I think like
[04:17:06]  Svelte said, Hey, we know we can make that experience more accessible. We can make it easier to build web apps and kind of make the language more reflect the
[04:17:17]  intent. So I have a lot of respect for that. But if, if that, but if that's not like your, your mission statement, you might not spend the
[04:17:26]  effort and just go, okay, I just want to make the fastest APIs or focus on architecture. Like quick, quick, quick uses some special compilation on top of JS
[04:17:35] X as well. Right. It's just an, it's just an easier path. So there's, I've, I've awakened the holy war in the chat.
[04:17:46]  I think, um, yeah, the single problem JSX is that it makes it difficult to use two different transforms at the same time. And you, you have need that
[04:17:56]  when migrating from library to another. Yeah. So yeah, that is one of the challenges, uh, because it's like this tooling isn't expecting multiple JSX
[04:18:07] . TypeScript is actually pretty good about it. And solids compiler, you can actually flip it to a mode that you can set the JSX. Like you need to use
[04:18:14]  your bundler and go like, let's put it in folders, like a solid folder and a react folder, but you can also, um, or use files convention like
[04:18:21]  dot solid dot react. But I mean, that's a bit of work, but you can also, um, use, uh, pregnant statements like solids compiler recognizes like
[04:18:29]  JSX import source. So if you say react, if you set the, like pay attention to pregnant setting, it will skip over react files. So there, there
[04:18:38]  are different options, uh, but around this. So I didn't put this comment on screen. I think, I think, I think this is the thing thing. And
[04:18:43]  this is one of the challenges that actually Astro hit early days. Cause they were trying to make a universal JSX and they had pre act and solid components and react components
[04:18:51]  all on the same page. And like, how the hell do we do this? So, um, those guys know the solution to this problem, but it's definitely
[04:18:57]  took some thinking. I know that much. Um, but yeah, I, I just, it's, it's just MDX love. There you go. Um,
[04:19:06]  yeah, Astro's, uh, recent MDX, uh, thing looks amazing. And I want to check that out more. Um, but again, it built on
[04:19:13]  this kind of foundation of JSX. Um, people, you guys are great coffee script trolling me. Yeah. CSS scoping. Yeah. So people talk about
[04:19:25]  the, yeah, I guess the thing is a lot of solutions don't have the CSS solution built in and single file components have kind of done a good job there. I
[04:19:32]  think if people, I think maybe that'll be the final bridge. If we can find a good templating solution for CSS that satisfies the people who like, like that kind
[04:19:42]  of scoped, uh, styling that you find in viewer or Svelte. I, I think that might be the, the, the last push to them at
[04:19:51]  least being like, eh, it's okay. I, I doubt they'll still like it. And, but you know, maybe. I mean, I'm not,
[04:19:57]  yeah. Okay. No, not selling people on JSX, but I think the scope styling side, uh, I'm not sure if that's still the best way to
[04:20:04]  even do styling. Right. Because I think, I think there've been a lot of approaches with scope styling. I think next used to have the style JSX thing
[04:20:11] . Uh, and I think you also implemented for solid, but I don't even know how many people really use that. I think feels like people just end up doing
[04:20:19]  either tailwind or. Yeah. CSS thing or SAS or module CSI so many things. Yeah. Style JSX was, was really close to the mark and we haven
[04:20:30] 't updated it recently. so we probably should, but yeah, I mean, that's a problem. I can't, I, if I mentioned CSS on my server
[04:20:38] , they'll continue going for three days about it. Like I, I just, I, I just like, it's, it's such a hot topic that making those
[04:20:46]  decisions is hard. I mean, it's fine. I can appreciate where people are like, look, this is ham for me. I don't have to worry about it
[04:20:52] . But when you're on the other side and you have the options, you getting people to agree is like, it's incredible hard. Um, yeah. Uh,
[04:21:02]  next move towards modules, CSS. Okay. So our CSS modules. Yeah. So, yeah, I mean, it's, it's funny. I mean, the thing
[04:21:11]  is the scope CSS like slots was modeled after web components. And a lot of us kind of hope that web components would be the future. Um, and that would be the
[04:21:21]  solution. So we've built our frameworks that way. And then the, hopefully the, the actual platform would take care of us. And then we wouldn't worry about
[04:21:28]  any of this before the platform would handle components and handle styling, handling all this stuff. Um, and w w we just haven't really gone there. And over time we
[04:21:38] 've realized we want different things out of our components. Like, and it's funny because components have gone on to do more stuff like HTTP status codes, for example.
[04:21:46]  But then they've also, um, we're kind of learning that we shouldn't restrict our runtime to our components. That, you know, like all the stuff that we
[04:21:54] 're doing with solid and what the, in a way, what quick is doing is saying that components aren't the right unit of re, of re rendering. So,
[04:22:00]  you know, from that perspective, we're getting a way farther and farther away from components in the, in the, in the kind of idea of what web components are.
[04:22:09]  And also, I don't, I'm not going to get into this too much, but you can check out my stream next week, August 9th, when we talk
[04:22:14]  about the state of web components. Um, a great, great, great set of people there. Uh, we're going to have, uh, I think Mish
[04:22:21] ko Hevery from quick on there, uh, Dylan from Marco, myself, Justin from lit. Um, like there's a lot of representation from people kind of around the
[04:22:29]  field. Um, so you definitely check that out, but yeah, I, this is a topic that I think, I think people are, I think, I think there
[04:22:40] 's sort of starting kind of recognition of, of, of why we're kind of getting to where, where we are with it. I think it's good that different
[04:22:47]  solutions innovate in different places. So and view innovating on templating is actually really good thing. And that's what, like, that's, what's important to them
[04:22:57] . You know, uh, quick probably doesn't care that much, uh, you know, and solid hasn't historically either. We've been working on how do we change
[04:23:05]  the model? How would you change the underlying architecture? That's, that's what we care about. So yeah, I, I think, I think, I think JS
[04:23:11] X is at least it's here to stay. I love to get punning in, you know, like that, you know, a couple features, but the specs
[04:23:18]  been kind of locked out. It feels like at Facebook, someone suggested that in JSX, there's an open issue since like 2013 or 14. It's just, yeah
[04:23:25] , I don't know if it'll ever happen. And the problem is if I go and add that to solid and everyone would be happy, something, none of the tooling
[04:23:30]  will support it. TypeScript will probably choke and all your things. And you, I just can't do that. I mean, I'm, I'm not ready
[04:23:38]  to take that leap into recreating a whole ecosystem of tooling plugins myself, just because I want that one feature. Exactly. Yeah. So yeah. And I mean,
[04:23:50]  I think even MDX, like adopting JSX, I think was quite powerful. Like if I want to do any single file templating, I think I would probably go
[04:23:58]  with something like MDX. Right. Yeah. So, yeah, let's, let's, I got one more one that came up. You can see this kind
[04:24:10]  of snuck in between. This tweet went pretty viral. And it's, it's, it's a bit of, I mean, this is the state of JavaScript in
[04:24:20]  general. Everything. Okay, babe. You've barely touched the newest JavaScript framework. Yeah. Yeah. I just wanted to bring this one up because it's, this
[04:24:33]  is obviously a joke, but I love how on point it is in terms of like where the mindset is. This is like, first impression might've been when I looked at
[04:24:44]  this, I might've been like, oh man, is this just like, are we begging on new JavaScript frameworks again? Like seriously, like it's, it's an
[04:24:51] , it's old, right? Like, like how many times do we have to point out? Oh, there's another JavaScript framework. It's because we're not
[04:24:58]  satisfied with the solution. Um, you know, and there's a lot of complexity there and that's why we keep on working to do better. And sometimes we need to
[04:25:06]  kind of shift things. And, uh, you know, this ties into the whole JavaScript fatigue angle. Cause you kind of like, like how much of JavaScript fatigue is
[04:25:14]  betting all in that there's a single solution and then finding out that there isn't like, and then feeling pressure versus just kind of being like, you know, I'm
[04:25:25]  going to take in little bits as I can. And I think the mindset here has actually changed, right? Because those like people are very angry about, you know,
[04:25:35]  new JavaScript frameworks a few years ago, especially around the time I started people like super angry. They would like almost get mad at me for suggesting that it could be a thing
[04:25:43] . I think the, and this, this tweet kind of, kind of reflects it is there's a certain acceptance. So it's like an irony, like, like
[04:25:53] , it's everything. Okay. Is everything okay, babe? You barely touched the newest job. Like, like, it's almost an expectation of, of, of
[04:26:02] , of where we are at now, which is, I don't, I'm, I don't think everyone has to go learn everything in, in detail, but it
[04:26:12] 's just kind of like, there's this kind of expectation, the kind of feeling right now that things are changing. And I think, I think, I think Madison
[04:26:21]  here definitely has like a good thumb on the pulse to make this kind of comment, as I said, because it's, it is, it is very clever joke in that
[04:26:30]  sense, because it's not saying that there shouldn't be new JavaScript frameworks. It's saying that, like, like, you know what I mean? Like, like
[04:26:43] , like, it's, it's almost like, like, like, we, we kind of gave up on JavaScript fatigue, even being a thing, because like, it
[04:26:51] 's just a reality. Um, yeah, I don't know, I, this one just caught my eye, because this, the subtle nuance, it's like a slight
[04:27:02] , ever slight shift in the message. Because, as you know, historically, I used to have, I didn't, I didn't have much success with Twitter influencers
[04:27:14] , like, like, the personal, no interest obviously is solid, which I understand, right? But what they say reaches their audience, why would they talk about something else
[04:27:21] ? And, you know, this is a job, it was a time of JavaScript fatigue, you know, where people were like, oh, you know, they don't
[04:27:27]  want to be told new stuff that they don't know about. But to see, as I said, just even a slight shift in the mindset is actually hopeful to me
[04:27:36] , because I'm probably reading way too much into this. But these are the kind of signs that I look for. Because this is, this is kind of taking the assumption
[04:27:47]  that you're already looking at other options other than React. And, and as I said, subtle, clever, and kind of where things are at. So, yeah
[04:27:58] , super clever tweet, even if that might have not been the tension. Fatigue to JavaScript fatigue. Yeah, you know, that's, I'm sorry, but if
[04:28:09]  you're in that boat, you're probably not in the stream, because like, yeah, I, everyone, everyone here is, is kind of chasing that cutting edge,
[04:28:19]  so to speak. But yeah, this one just stood out to me for some reason. Anyway, with that, I think, on that note, that's this week
[04:28:31]  in JavaScript. Thank you. Nice. All right. I think we're going to wrap up here. We're at like, four and a half hours. That's long
[04:28:40]  enough for a stream, right? The chat's still going strong. Just use React. Yeah. Yeah. Yeah. Yeah. Yeah. That's how you end your
[04:28:52]  stream. Yeah. I mean, people talk about Tailwind and stuff. Yeah. This is always going to be the case. Thank you, everybody, for joining us
[04:29:00] . Thank you, Nikhil, for joining us. This has been a great stream. A lot of fun. I am so happy to be able to start, you know
[04:29:06] , sharing the stuff about Solid Start. We've still got a lot of work to do. More news. Next week's stream, my plan is I'm going to
[04:29:15]  do another one of my building solid streams. We're going to do a building solid 1.5 stream, and I'm going to talk about how I implemented all the features
[04:29:25]  in the upcoming solid 1.5. That's the plan for next week. And look at a lot of the thought that went into that. And then I've got a
[04:29:33]  few other guests, as I said, coming up in the future. Hopefully, we'll get Dylan in. And I also am going to grab Zach from Eleventy
[04:29:43] . He's worked with him at Netlify. And he put out some interesting benchmark recently about the cost of generating MDX. And I didn't actually have it in
[04:29:55]  here, but we'll cover that on another stream. I want to learn about Eleventy because static generation is not something I know about. So if I can learn
[04:30:04]  something, we can make things better and we can better understand how to evaluate the stuff we do do. So thank you all and have a good evening. Night. Bye
[04:30:17] .