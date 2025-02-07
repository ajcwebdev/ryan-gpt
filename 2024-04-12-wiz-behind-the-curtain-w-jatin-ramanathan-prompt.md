---
showLink: "https://www.youtube.com/watch?v=qzOzyUA9kbg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Wiz: Behind the Curtain w/ Jatin Ramanathan"
description: ""
publishDate: "2024-04-12"
coverImage: "https://i.ytimg.com/vi/qzOzyUA9kbg/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 10-15 minutes long.
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

[00:00:00]  all right and we are live yeah how's everyone doing today it's gonna be a good one i think come in the chat and say hi as you arrive i have another
[00:00:16]  drink today pinkish in color but it is not coconut water it is blood orange italian soda it's good yeah no i'm not coconut water this time it's the
[00:00:33]  delay getting you how's it going greg uh yeah interesting last couple days a on the on the twitter people discovering what benchmarks are without discovering what benchmarks shouldn't be we'll
[00:00:49]  talk about that a bit later um hey hey hey david uh yeah sorry yeah we're gonna give people a couple minutes actually i'm gonna go on twitter right now and
[00:00:59]  tell people that we are we are live now because i think people will want to tune in and check this out because this is not information you can get anywhere i mean technically um
[00:01:11]  you can go use this framework every day when you you know open up your chrome browser and go to your google search or actually i guess suppose any browser but um i i
[00:01:22]  think it's very interesting to kind of get a peek at you know the difference between what we do sometimes it's hobbyist devs that we do in enterprise situations or you
[00:01:34]  know what happens at you know arguably one of the biggest web companies in the world so this is this is pretty cool let me see if i get sorry i should share my
[00:01:44]  screen here for a second just gonna put that up um where are we um yeah streams back that's why people can get past their twitch preloads we're live live
[00:02:09]  um yeah i'm gonna do the i'm gonna give the the twitch link because i think it's more interactive there maybe why do i never remember my twitch link you guys probably
[00:02:20]  can correct me in the chat ryan solid yeah twitch tv brands on yeah all right let's get this going cool but yeah okay hi from canada hey i reach out
[00:02:33]  to you about being an invited expert i don't know what that means but i guess not oh the tc39 proposal yeah yeah i we'll talk a bit about that today
[00:02:50]  i don't know if i want to talk too much of the details of the proposal itself um but we've been involved right from basically the beginning yeah um i heard solid
[00:03:05]  is slower than react yeah yeah twitch people are people do no i actually use the stream yard chat so i see both sides the only thing that i miss in this situation is
[00:03:25]  i don't get to see um the subs so i always have to come over so when people here are so gracious enough to sub to the channel sometimes you know or gift subs
[00:03:38]  in large numbers you know if you're in the twitch chat and i haven't like shut it out do let me know um because i i don't actually see the sub announcements
[00:03:47]  right so that's the only thing sometimes i switch back and forth just so i can see the sub announcements but yeah we're starting to get rolling but we're still a
[00:03:57]  little bit slow here so let's let's let's get some more people coming in here i don't yeah yeah there there is a public uh yeah sorry there's here it
[00:04:09]  is there is a public discord chat more about the tc39 proposal there's also a private discord too which is another thing i only just joined the public one um hey
[00:04:18]  johnny uh there's actually a signals discord um i don't know if i could just i think everyone's in is everyone invited to that one there's a there's like
[00:04:36]  a hundred and some odd people in there right now which is different than the other discord that only has 23 people in it we could talk we'll talk about the signals thing
[00:04:47]  in a bit because it's part i think it ties into the narrative of what we're going to talk about today right signals one use the platform uh i'll hold judgments on
[00:04:58]  that you know i mean does that mean web components one um so yeah and i i you know yeah yeah don't yeah similarly yes let's get this out here right now
[00:05:14]  in the first little bit likes help the videos viewership immensely the more people who like the video the more it gets shown to people like the there's there's completely a correlation
[00:05:28]  here like considerable difference in viewership from the number of likes i'll you know i'd say even more than comments you know all right all right all right there we go
[00:05:45]  okay so we got about 80 people here now so we're now we can actually get started i i wasn't going to start until we we got over that that threshold all right
[00:05:53]  all right um good you know i didn't want to waste jadden's time um not that there isn't going to be a live video that you can check out for
[00:06:03]  you know months to come but let's let's let's make let's make this fun because we have a live guest here today um and we should make the most of
[00:06:13]  it especially with his expertise um working on whiz which is i mean he'll explain it better but is a framework internal framework to google that's been used to build some of
[00:06:26]  the biggest um projects um that you you've probably used things like google search google photos and uh you know i know this always been a little confusing to me because you're
[00:06:38]  like oh angular the google framework well angular is a google framework um but it doesn't necessarily build some of the heaviest traffic sites at least traditionally but for a lot of you
[00:06:50]  out there and people who are familiar with angular the first you might have even heard of wiz was when the angular team announced that um their efforts were merging which is huge news
[00:07:02]  um especially if you know what wiz is so i feel like we we all gotta like catch up a little bit um and who better to catch us up than a core maintainer
[00:07:13]  jadden um i'm gonna invite him on the stream now and actually see this i'm i'm so disagree i i'm sorry see it while i'm talking i
[00:07:25] 'm supposed to put up this banner and i was just like being really slow sorry john welcome hey yeah how are you doing today i'm good how are you right i'm okay
[00:07:38]  but yeah i think the big question um i just want to get just right out right out of the gate is like so people know why we're here can you just tell
[00:07:48]  me really briefly we'll get into more detail later like what is wiz i just tried my best here but tell me what is wiz and why should we care sure um so wiz
[00:07:57]  is a web framework that's been used to build a lot of google products um it's a pretty old framework it's been around for about 10 years now um and i think
[00:08:09]  it's interesting because unlike other web frameworks wiz actually took ssr extremely seriously right from the start and so the reason for that was because we wanted extremely fast response times
[00:08:22]  so when you go to a page you should immediately be able to see some content in the first round trip and so that makes wiz interesting and uh slightly different from how other frameworks
[00:08:34]  have approached this and and now of course there's like really good support for ssr in other frameworks as well but there are still like a few nuances that are different
[00:08:43]  and i think they're interesting to like talk about definitely definitely yeah no that's that that's that's very cool yeah because you said about 10 years ago yeah so i guess
[00:08:52]  just like putting in my timeline of frameworks wiz probably came up about around the same time uh like marco at ebay came out you got i i'm not surprised that some
[00:09:03]  larger companies at that time were looking at solutions for this problem as the interactivity scaled up do you know just out of curiosity do you know what google was using before wiz
[00:09:14]  to kind of solve these problems uh so there are a lot of uh ways can organically emerge from a lot of internal kind of libraries and technologies that existed at google like one
[00:09:26]  of the interesting technologies that has been written about publicly is called mss or module set software that's serving right um you could actually find some information about it on gith
[00:09:37] ub uh from like five years ago um maybe i can like actually share a link do you want me to kind of grab that yeah if you want if you if you want to
[00:09:45]  take a minute to grab that that's cool i think people might be might be might be a little bit at least interested gonna get the framing for this just because like i understand
[00:09:53]  like a lot of these systems and it's still to this day like even if parts of the stuff go public there's a whole private specific infrastructure at these larger companies like
[00:10:02]  the way you use react audience is different than the way meta uses react and the build step and all the pieces same thing with ebay there's a whole bunch of other infrastructure
[00:10:13]  little pieces to kind of serve stuff up at that scale yeah but okay uh i dropped the link um can you just share it the best way yeah yeah and i'm gonna
[00:10:22]  actually pop it up on the screen for a moment as i said we probably don't have a ton of uh of of these things to show off but yeah okay what what am
[00:10:34]  i looking at so this is like from like a while back right and it starts talking about like dynamic bundling and like it actually tries to introduce like you know what and you
[00:10:45]  have to remember this is from five years ago right like you know i know that state of the art kind of keeps advancing really fast uh and so some of this stuff might
[00:10:52]  like already make sense um in other ways maybe uh but uh but yeah so you asked me like what was google using before wiz and like i guess this this is used by wiz
[00:11:03]  but this existed before wiz as well and this wasn't created just for wiz uh it's essentially this system by which you can chop up your javascript files into many many
[00:11:12]  small pieces and some large google products can have thousands of entry points uh we're not talking about just route level code splitting and like you know i have five chunks in my
[00:11:24]  application we're talking about thousands sometimes tens of thousands of these chunks and it's very individual components are like different entry points and when you load an entry point it doesn't automatically
[00:11:36]  mean that you just loaded that entire like a giant sub tree behind it you actually loaded like whatever is required for interactivity for just that one component i like this term fine
[00:11:46] -grained chunk splitting yeah we we really played a lot with terms like we we kept using module for a long time and then that caused all kinds of confusion and then
[00:11:59]  like we kind of settled on chunks now right yeah so basically the goal here is mostly figuring out how to limit the javascript that was delivered until either you needed it or
[00:12:12]  what was used on the page or whatever this is this is very advanced code splitting and lazy loading uh it's not just about limiting it it's also about controlling when you
[00:12:22]  actually load it right and so if you go to like google.com you you and then you search for something you will see a lot of javascript being loaded but what
[00:12:30]  we are very very intentional about is like when we load it and some of the javascript is actually being loaded after the rendering is already happening and some javascript is
[00:12:41]  not loaded unless you actually interact with that particular component because it's like super lazy loaded um so as you can imagine right like see these these components they show up on screen
[00:12:51]  uh depending on your query so there's like hundreds of these different things we couldn't possibly just load all of them that would be too much javascript right yeah i'm
[00:13:00]  familiar with all these little widgets like food widgets plane flight widgets yeah reviews yeah yeah yeah all right i'm just like literally showing my my address on screen yeah all good uh
[00:13:15]  but yeah yeah that makes a lot of sense i was trying to um but this this um thing is this was this actually like uh was this an approach or was this actually um
[00:13:29]  specific like software so this is us trying to about five years ago was when um the wiz and the angular teams kind of organizationally got really close to each other and the
[00:13:43]  first kind of attempts were made to try to merge the two frameworks this was back when gosh mishko was also kind of working on angular full-time and he was at
[00:13:56]  google full-time and uh mishko and a few other folks uh some wistels from back then they got together and they tried to like really study both frameworks
[00:14:04]  and this is like five years ago right so like a lot of stuff that has happened since did not exist uh and back then they concluded that technically the frameworks are like really different
[00:14:15]  from each other but um you know some of this may have turned into quick later like some of the seeds of those ideas are now available to everybody as quick right so i guess
[00:14:26]  yeah so i guess what what i'm talking about here is like the quick loader and possibly parts of the quick optimizer okay that makes sense okay so this we just
[00:14:37]  kind of got an idea here about wiz but we're gonna dig into that more in a minute i'm i'm interested i think interest a little bit about about you when
[00:14:45]  when did you uh when did you start at google how long you've been involved in this project i started google i think about 12 12 years ago now um i i joined google
[00:14:57]  2000 and gosh 11 uh and i initially joined google uh to work on on g plus um and google plus was uh incredibly large front end uh and one of the largest apps
[00:15:12]  i think that google's ever built uh we just kept adding features like you if you recall like we had this pan pan like left hand side tab where you had games and photos
[00:15:21]  and stream and like it just kept going right like yeah um it's supposed to be like fully dynamic interactive like kind of next generation social media i remember uh getting the early
[00:15:31]  demos into not demos but like early i'm probably not an early but i remember signing up for like the preview version and thinking was like the coolest thing and then well actually i
[00:15:41]  can't remember was there google wave as well around that time period or was that right wave was a little bit before or right yeah yeah like it was like yeah it's separate
[00:15:52]  uh but you know um definitely the idea is kind of fed into it like google was kind of aware there was also this thing called orcut for a while and of a
[00:16:00]  lot of people super popular um in my circles um and circles like yeah circles was another feature plus um and so um we just kept writing javascript right like we're all
[00:16:12]  addicted to javascript and like it's like this or 2011 right like you know that the community in general hadn't like yeah i don't know like big javascript
[00:16:21]  hadn't taken off yet and yeah i mean backbone angular and knockout were all released the second half of 2010 so like how like i know there's like jquery
[00:16:35]  and there's probably people working on internal tools that were you know maybe more advanced but like just for timeline period like it's fit it's like okay we've had backbone for
[00:16:44]  six months or angular for six months i mean how far could anyone take it right um and so a lot of this code is written using closure closure not the one with the
[00:16:55]  j but the closure compiler closure right and so we're still in this world where like you know the different browsers are kind of hard to uh wrestle and so you really want some
[00:17:05]  kind of abstraction that like you know lets you write the javascript once and it works like seamlessly in all the browsers and so closure provided a lot of that um and um
[00:17:14]  and then we needed this foundation for like you know how do i do code splitting right because when you have so many features and so many views if you just rely on like
[00:17:23]  an army of a thousand developers to remember to code split and somehow organize themselves um it's challenging especially when they're moving like really really fast right like if your app is not
[00:17:36]  changing very fast like maybe you can kind of impose some restrictions and like you know control it but yeah because these are this was like were these largely single page app like i
[00:17:46]  just like architecturally i keep trying to remember these things like were there a lot of full page navigations or were there was a lot of client stuff at that point i i
[00:17:54]  don't actually know d plus was almost entirely like you know you you the initial render is on the server and then it's all like client side okay yeah yeah okay because that
[00:18:03]  kind of scale because the thing you get people got to understand honestly we're all aware of this now having built large client-side apps but at that point you know you
[00:18:12]  didn't even if you had interactivity you didn't notice the same kind of scale problems like stuff like uh i talked about ebay ebay was e-commerce they didn
[00:18:19] 't really do client-side writing they just loaded pages they just want to get that shop page up as fast as possible the teams are able to work independently largely because they each
[00:18:28]  have their own page i mean the teams are huge and then the ads and like there's a whole bunch of cross-cutting but generally speaking i always considered like if you
[00:18:35]  had to do client-side or had to treat it as like a single app like how much harder does that get to in terms of managing all the people and all the
[00:18:42]  like deployment all the infrastructure around that just because there's like so many people kind of maybe touching on same places yeah so so the way that it becomes very visceral is um
[00:18:53]  you know you're trying to if you're also trying to do like daily pushes right so like you want a new version of your application because you're like you know moving so
[00:19:02]  fast you want to compete and like and what happens is is you do you try to get your you make a build right you do a release cut you try to get it
[00:19:09]  to production it's a staging environment and uh oh something's wrong uh and so you got to like now go and cherry pick a fix or like you know the whole build gets
[00:19:19]  rolled back because uh one particular feature was wrong because you're deploying it as a monolith and so you have a shared fate and uh you do this back and forth a
[00:19:28]  few times and then now suddenly you missed your schedule you're not you're no longer like doing daily pushes right yeah um and so i remember we had like a core team that
[00:19:38]  would actually like you know try to push a new version every day and like back then they were also like manually like trying to stare at all these graphs trying to figure out
[00:19:47]  like is something throwing more errors or not uh and then uh trying to decide if you want to like just roll out to 100 and the shared fate problem was pretty severe a lot
[00:19:58]  of teams could not actually just finally come together and every everybody gets everything right because that's what it takes to like just push a new version of your server out there and
[00:20:08]  and roll it up to 100 of your fleet yeah no that seems challenging i know like obviously micro front-end-esque solutions kind of come into play but i i feel like
[00:20:18]  when micro front-ends at least were introduced to me a lot of the solutions out there i look at them and i'm like there's no way that's like efficient like
[00:20:26]  there's got to be like the performance seems like you'd be you know a concern so i'm gathering like you you got it's had to take that on head on
[00:20:38]  pretty pretty early here yeah um so one of the first things we kind of did was we said that you know there should be like this clear separation between like your rendering layer and
[00:20:49]  your data layer and and and 2010 2011 like we also kind of i mean i guess uh phones that existed for like two or three years but like it wasn't as ubiqu
[00:21:02] itous as it is right now so um what had happened is we had a whole bunch of these like http endpoints api routes i guess you would call them and they're
[00:21:10]  all in the same server like this is one server that's serving all your html and like you know your your web traffic and the same server has all these ap
[00:21:17] i routes that's getting unmanageable right right and so we said no we should go split it up and then the api routes should somehow be shared right like for
[00:21:25]  by by your android ios and web right right okay yeah and that's interesting too because each of them will also have their own uis right or i don't know the
[00:21:36]  only reason i'm mentioning this is because i i and again i don't know how much this is like google hush hush or not but i just know like at meta
[00:21:44]  and i know on ebay they've created these services that would almost like try and describe um the ui through an api level so that they could like have the
[00:21:53]  api return the dynamic a like ui based on like the device but can they like unify it somehow i don't know i'm glad that you guys probably just played
[00:22:02]  around with some stuff like that as well i don't know just yeah uh of course we did and we continue to uh but i think that's like kind of outside the scope
[00:22:11]  here we want to talk about just like web we want to talk about we like html right we want we want we want to write html and right so
[00:22:19]  uh that kind of like server-driven ui approaches is interesting but um you know if you're passionate about a platform you want to natively build on it right because that
[00:22:30] 's how you can be most efficient for that specific platform right which i guess gets us a little bit back to wiz now because that's obviously what came out of it um
[00:22:41]  yeah can you talk a bit about the the beginnings of wiz so i wasn't like on the framework team so like you know you put it perfectly i'm the wiz maintainer
[00:22:49]  i wasn't actually part of the core team when the framework was first created um i kind of started joining i joined wiz about like five years ago um and so um before
[00:23:00]  that right like so wiz kind of emerged from like okay so now we've separated our api routes and like we need this system by which you know we can kind of fetch
[00:23:09]  the data and then use it to render something on the server side and then on the client side and this is where it gets like super interesting we don't want uh a
[00:23:19]  full page hydration pass because this is key right like when you are trying to do hydration um you end up loading the the rendering code for components that may not have actually rendered on
[00:23:34]  the page because on the server side when you fetch the data from this api route you ran some control flow and you decided oh because the user made this query i'm going
[00:23:43]  to show like this uh so you can imagine it's like this giant switch statement and you decide which component to render based on like you know the query that the user sent
[00:23:50]  in and you cannot load like you know you have like 500 components you rendered one of them you don't want to load you don't want to load like 499 components just
[00:23:58]  because you got to hydrate the page um and so you have this need to like load only what's actually rendered and so that's where wiz comes in um wiz says that
[00:24:08]  every component is an entry point and then when the user interacts with the page we're going to uh have this like event delegation system that will uh decide what component to load
[00:24:20]  based on the part of the page that the user uh interacted with now of course like actually late loading it that much is not super great for the ux because sometimes some things
[00:24:32]  are important so like as soon as you know that it's rendered you want to like preload it right right and so at that point this event delegation system isn't actually
[00:24:40]  loading it but it is instantiating like a component only when the user interacts with it so you don't really instantiate and attach event listeners you just have this delegation library
[00:24:50]  that's waiting um right i guess the act of like natively attaching an event listener is is deferred till the user actually interacts with that component well okay i mean i
[00:25:01]  i obviously have questions um i don't know whether i should ask those questions now or if we can go a little bit further mostly you said the the it was that last statement
[00:25:11]  about the event handler's not like there must have been some kind of like global event handler right like it's like because if someone goes to do something like you know goes to
[00:25:20]  click you at that point you have to be like okay someone's clicked over here yeah i know i need to do something so something had to be listening um yes and so
[00:25:29]  there's just this one kind of global event listener and it's listening at the root and that the the javascript for that is literally inlined into the page right right
[00:25:40]  yeah so that way there's like you know just like you would like inline css to prevent a flash of unstyled content you just inline the javascript
[00:25:47]  before you know you start like at the very top so that way as your page is streaming technically if you're on a really bad connection your page hasn't finished streaming and
[00:25:55]  you have like half a page hanging out there you could interact with that as well if you wanted to right yeah i imagine streaming has been part of the solution here right from the
[00:26:04]  beginning like streaming consideration um yeah you you just don't have a page with that talks to dozens of services without streaming otherwise you know stuff would get really bottlenecked um okay so
[00:26:18]  um yeah let's see see here i there's a question from chat that was like do you have to mark your components with use client i i think people want to understand
[00:26:30]  a little bit more i mean i know wiz has been evolving on the on the dx side but maybe we can talk about like the the the kind of principles but towards how you
[00:26:41]  approach um you already said like high level what it does but like what principles how do you approach like say authoring or how you approach like actually uh like breaking these responsibilities
[00:26:54]  apart because it's it's it seems kind of tricky you know like use client is a perfect example of you know uh islands architecture type thing i know service components but the same
[00:27:04]  conceptually this is a little bit different um it kind of is um and and this is actually like one of the dx challenges of of really embracing this philosophy of like you
[00:27:15]  know you you don't want to load any javascript that's not actually required um so funny enough i mean i i guess it's fine you you don't have to
[00:27:26]  mark your components in ways with use client instead you have to mark them with something called at pintom audio it's like maybe the googlers who are listening will get it
[00:27:34]  but the point is like you have to tell the the bundler essentially that hey this is an entry point uh and and this entry point contains a collection of event listeners and all
[00:27:45]  these event listener event handlers and all these event handlers should be attached to this html element when the user interacts with them and and these are the events that i
[00:27:55]  care about right so one of the so these event handlers are super fiddly because right away one of the big problems that you have is you somehow need to know what
[00:28:06]  are the event handlers in that component right so our components for classes uh and they still are and so you have like all these methods in your class and like you need to
[00:28:16]  know which of them like what are the events that that you care about and then you need to actually say in the i guess template right that you're rendering on the server side
[00:28:24]  oh uh here's a list of events so we can actually look at some of this if you like bring up google.com or something yeah yeah that's yeah that's
[00:28:33]  we had it already up let me let me see if i can get back to sharing my screen yeah let's do it right so just like this first page is this fine should
[00:28:43]  i uh no like yeah me this is like the new tab page maybe again i know search for kittens or something yeah all right now you start seeing js action right there um
[00:28:59]  body js model js controller and js action so js controller is component right like js controller just think it's js component right that's a component uh and that that string there right
[00:29:10]  that string is like a reference like js controller equals what is that exo 390. that is an obfuscated name of a component right and that is a
[00:29:20]  also a reference to the entry point that you should load because that entry point contains you know a number of those uh js actions that are there right after it so it's not
[00:29:31]  like i'm gonna find an ex whatever js file am i i i don't think so no okay just okay a little bit too optimistic okay let's keep going um and
[00:29:42]  so some of these js actions will actually be um handled by that controller and any js action that's not handled by that controller is likely handled oh this is on the body so
[00:29:53]  this should all be handled by the body controller there right if you like scroll down it like maybe dig into something um so like on the page if we can get into let's
[00:30:05]  see okay so you see there right there um that's like another example of a js controller that's like the component right and then the js action if the js action is
[00:30:16]  not handled by that controller uh then that even dispatch library is going to keep traveling up the dom till it finds a js controller that'll actually handle the js action and and so
[00:30:27]  you can see there's like many js controllers at different levels of the dom yeah yeah and they could handle js actions either on the same element or something that's below them
[00:30:37]  gotcha okay okay interesting so basically you kind of encode the concept of um component or i guess controller like and the concept of is the action like the event like yeah yeah
[00:30:53]  uh of the event onto it i also see some other fun ones like js name and i don't know that's just model and and so wiz initially was mvc
[00:31:04]  like this is again 2011 mvc i think was all the rage i don't even think we had mvvc or any of those more advanced things yet um and
[00:31:13]  so wiz is an mvc architecture and um it's kind of working for us but you know it's it's not like the world's kind of moved on a little
[00:31:21]  bit so it can be a little unfamiliar at times but a model is supposed to be like heavier than a controller it's supposed to be like super lightweight and then a controller
[00:31:32]  just kind of handles the ui right it's it's just trying to change the view and then like for state management it's supposed to go up top of the model right
[00:31:39]  okay okay yeah so yeah that's yeah controller action model yeah i'm i'm kind of getting getting a picture here um and yeah i'm like this is this is basically
[00:31:50]  the output side right so like this is oh i okay i guess my question is okay let's say we we have an action we perform let's say uh this is this is
[00:32:05]  the link isn't a good example here because it'll just navigate me to um there should be accordions if you scroll down a little bit yeah or things that expand out
[00:32:12]  yeah accordions yeah the expo yeah or view all actually is a new page too isn't it yeah there you go people also ask people also ask this is an interesting one
[00:32:23]  because when you click that right and now collapse it again you notice there's more items at the list at the bottom yeah so what's interesting is you're interacting with a component
[00:32:34]  and that component needs to go back up and tell something above it hey by the way load more things at the bottom huh and so a lot of stuff needs to be orchest
[00:32:43] rated it's not just opening that one thing i i guess what i was kind of curious about is assuming that this doesn't do you know eager hydration i load the page i
[00:32:55]  scroll a bit when i click on this and i'm gonna assume the js is pre-loaded or you know when i scroll through some triggers i'm sure you guys optimize
[00:33:03]  for that kind of stuff i'm just curious like what the execution actually looks like um when when this happens like because does does it hydrate then like like like you get
[00:33:17]  what i'm getting at like does it then go okay what did i render i mean this is a bad example because it's showing new stuff but like did it does it like
[00:33:25]  i it's hard because it's only a click event i'm kind of like you know what i mean like there's a situation where you have a data table um and
[00:33:33]  you then scroll and you you know there's a calculator in here i i've seen it before yeah you know one plus one yeah yeah right and like assuming like when you then
[00:33:44]  go press the button to do an addition or change a number or something and it will load the code like how does the rendering happen i'm just kind of curious yeah so
[00:33:55]  um so this is this is maybe you know i want to tie this back to like you know why we have two frameworks in angular right like for for very very interactive uh like
[00:34:06]  things like you know a map or like you know um like a calculator the internals of account even a calculator actually fairly declarative uh but anything that's like super interactive
[00:34:17]  it having your event handlers always use this js action thing can get a little tedious and so to answer your question right in the strictest by the strictest definition with never
[00:34:30]  hydrates what that means is even after the first time the js action has triggered we're not attaching an event listener directly to that element we're always going through js action right
[00:34:41]  so you delegate it and what what you're saying is like wiz i guess we didn't clarify this early is wiz a rendering framework or just like the controlling mechanism here because
[00:34:50]  like like do you guys render these pages in javascript on the server or in something else oh interesting so um i guess wiz is this uh part that we've discussed so
[00:35:02]  uh we've discussed earlier so far but it does have a first class like templating language um it's called closure templates uh and we use closure templates because probably one of
[00:35:14]  the biggest reasons is because it also compiles to java and we render in java servers not in javascript servers and in that way we are very very different from
[00:35:23]  uh you know most of the community out there gotcha okay so templating renders to uh compiles to java render everything in java on the server then wiz
[00:35:36]  doesn't hydrate per se but like when it you you get where i'm getting at like yeah so when a change happens do you just blow it up and replace it do
[00:35:50]  you so those js names you were asking about the js names yeah one thing that you could do is you could look up an element using the js name and then go change
[00:36:00]  it imperatively right jquit right um to be fair marco in version one two and three like pre-2015 was like this as well that's why i'm kind
[00:36:10]  of they called it like marco widgets this is why i'm just i'm kind of picking classically it as i said the i'm getting the impression this is like
[00:36:19]  a controlling mechanism so that like it handles all the loading make sure the right events handle but then like the rendering stuff is something you guys have been working on developing more over time
[00:36:31]  right yeah so so the very initial version it's like you know here's here's a js action if you care about just changing an attribute look it up go do it and
[00:36:42]  then if you want to render something more complicated closure templates also compile to javascript and so what you can do is you can actually say okay this part of the dom
[00:36:53]  i want to just blow it away and replace it with something else right and then that something else doesn't need to be hydrated because you have js action right right this this is
[00:37:02]  sort of where i where i was kind of getting at right because if you do granular enough destruction then you don't actually need to hydrate but you know component level granular
[00:37:12]  might be acceptable for some things um i i was kind of critical of quick at first when he first introduced it because i think it was actually closer to wiz originally because i was
[00:37:21]  like i was like i don't know if i'm if i if i if i if i'm i get you don't hydrate but i'm not sure if i fully
[00:37:27]  buy into this resumable thing when you just you know blow away the components and then like vdom diff them or whatever but even that is still more granular in the
[00:37:35]  end on the update side than say blowing it away but yes i i'm wiz's concern was primarily how fast can we load this in terms of like making sure we don't
[00:37:46]  load extra stuff can load just what we need when we need it and like honestly in the scale of things that's way bigger of a problem than then you know as you said
[00:37:56]  if you have something really interactive then you will bring in something that can handle doing something very interactive so yeah and so like around the time when i joined the wiz team we
[00:38:06]  had started working on that right and i think that would be a really interesting thing to get into as well at some point okay we started working on something that would actually hydrate
[00:38:17]  and and we called it progressive hydration so this is like circa 2016 ish 2017 and like the idea there was that instead of hydrating event handlers we hydrate state
[00:38:31]  so hydration is still not attaching event handlers because js action is taking care of that right but to make uh declarative ui updates possible the hydration process will like leave
[00:38:45]  some data structures and different dom nodes and then if you ever want to change something instead of going and looking up something using js name and changing it you just change something in that
[00:38:56]  data and then the framework will come and like diff the html uh and then just apply the new data sorry what you're describing me to me i i get it's
[00:39:06]  different uh let me see if i can find this it reminds me of this silly i know it's not the same it just reminds me of this framework that i that i
[00:39:15]  saw about five years ago where they i mean you guys don't do this because your stuff has to be but what they basically did was he's an h function but he would
[00:39:24]  do stuff like write stuff into his templating and then you would just have a class essentially and then you'd update the data and then it was like i i called this
[00:39:37]  like reverse jquery i i it was it was basically just like a bunch of declarative labels um and then you could basically if you updated the data it would know where
[00:39:48]  to replace the specific stuff so we didn't have the fine-grained updates the first time when we started trying to do this the library that we were using is idom
[00:39:56]  i actually was on your i commented on your stream sometime last year oh so yeah so you guys did something almost oh uh sorry incremental um incremental dom on github yeah
[00:40:06]  right right incremental dom for is that's what some people call it a v dom library it's technically a single pass v dom library right like it's it it's it's
[00:40:16]  basically like i i'm still confused with the difference between something like this and say like dirty checking um because uh we're there's there used to be really great diagrams it was
[00:40:27]  like incremental dom versus v dom um uh one of them diff like when you have react it diffs the previous version of the v dom with the next version of the v
[00:40:41]  dom and then figures out what the difference is and then patches it and my understanding is that incremental dom patch the the virtual representation with the real dom there's instead of having an
[00:40:52]  extra intermediary um yeah idom will actually go through the dom nodes themselves and if the tag name is the same it will try to then start patching like updating the
[00:41:03]  attributes and and you can control that behavior using like keys just like you could like if you have a repeated like if you have a repeated list you could control it with keys in
[00:41:15]  react um so it's just the difference is that you you don't you don't have a separate data structure but then in practice because like the dom isn't that fast
[00:41:25]  you end up having a lot of the you end up like mirroring the attributes on uh on the dom itself on the edge on the node itself yeah sorry this was the article
[00:41:36]  i was looking for where they compared react virtual dom embers glimmer and incremental dom i'm just gonna share this in case i didn't realize auth zero publishers it's
[00:41:46]  probably marketing crap but i'm just gonna put this in here in case people interested i don't know how terribly important it is the key part of this though of having incremental dom
[00:41:54]  for you meant is you could basically set stuff up with the declaratively and not like from your perspective okay i was in your htmling before now i'm doing a
[00:42:02]  much more efficient thing with the diff and and more importantly sometimes it really helps like you preserve focus because every time you know html you're blowing everything yeah yeah this
[00:42:12]  is this is this is yeah this is what i actually we found when we were doing our like uh route level stuff when we're doing those page partials like we're doing
[00:42:21]  like a react server component type thing the very first version and i guess it's also what astro does um it just we just blow stuff away right and it's like yeah
[00:42:31]  if you can preserve um you know i mean you can technically like do hack around it but if yeah diffing means it just should just work for the most part and i
[00:42:42]  guess with something this if you focus and lists can still be tricky but i guess you can key them so yeah okay thanks a lot yeah you can key them you can key them
[00:42:52]  so that way uh you don't you just reorder them you know you don't have to like blow it away and um so this was this was good it was it
[00:43:01]  actually solved one of the biggest devx issues with wiz right the devx issue being i don't want to use a js name and query something and then you know oh okay
[00:43:12]  yeah because people have asked this and i've been kind of ignoring them until you're ready to talk about this but basically until we got to this these kind of like declarative
[00:43:21]  diffing template type things for the most part people were going in and adding labels basically and doing imperative dom updates on the stuff i mean you you people might be cringing
[00:43:34]  a bit in horror even when they're thinking 2016 time period but if you if you remember that post uh that i've shared on the stream a couple years ago someone was doing
[00:43:42]  a review of uh amazon.com and the people were there was like we couldn't use react it just was too slow um we tried to bring it in it's too slow
[00:43:51]  for server rendering it's too slow for hydration basically we just could not use react um and this surprised me this the person said that and this was like around 2020 time period
[00:44:00]  um and they said yeah so we were still using jquery um at amazon uh like on like amazon.com and you know people like in disbelief around this but i
[00:44:10]  mean people who've been working on these big sites that care about page speed load have known this for over a decade like they've known this for a very long time that
[00:44:20]  like that the base table stakes were so um it's not it's not an option you don't just get to be like okay um yeah we'll you know the developers like
[00:44:30]  this so we're going to use that no it's like you need to at minimum be able to hit these performance targets and try and make your stay a little bit more
[00:44:39]  pleasant um yeah um and uh and the thing with imperative dom updates is that it's really fast right because you're handwriting what you want to do right right it's it
[00:44:58] 's it's column number one vanilla js in exactly benchmarks um and so it's hard to beat that and when the and when you're trying to look at like production numbers and
[00:45:11]  like you know oh how often are people interacting with this component that i really care about like opening an email or something and and that number is like trending down you're like
[00:45:21]  no i don't i don't it's fine we'll keep doing this um and so that's kind of what happened right like we introduced this incremental dom based story and it
[00:45:30]  was actually really good we got excellent feedback about it right because as you can see it's actually like helping developers significantly right however when some of the larger applications tried to migrate
[00:45:45]  to it they started noticing performance issues right yeah and um and some of it was because just migrations of these scales are really hard and like you know you have to uh you
[00:45:59]  you have to be very careful about how you set them up uh but there were like benchmarks that were telling us that that idom is actually slower than just you know ht
[00:46:10] mling a bunch of stuff um because we're not even looking at like update performance we are we're even initial render performance is is not that great yeah yeah it's
[00:46:21]  slower compared to like you know just you know htmling stuff yeah i mean yes and and and inner htmling stuff was actually an option for us because we
[00:46:31]  didn't need to manually walk the dom to attach event listeners you just do js action something and like hey my inner html is interactive right right yeah yeah yeah yeah
[00:46:40]  no exactly just yeah so inner html has a lot of mileage when you don't hydrate and you can resume yeah yeah no exactly and uh yeah i mean just hmm
[00:46:53]  yeah no that's interesting yeah because like yeah the fastest way to create the elements i mean it's the reason why all the frameworks like clone templates now right is is you just
[00:47:04]  you just blast you just parse it put it in there you know you don't want to you know in bulk that's even faster than going through and like creating each element individually
[00:47:13]  and attaching them and doing all that so it's like makes a lot of sense right especially as i said if you're not sitting there like playing a video game and as i
[00:47:21]  said you you're not you're not expecting wiz to like you'll load something for that video game you're not gonna like yeah right okay no yeah um and so yeah
[00:47:32]  so that's kind of so we're caught up to like 2016 we're kind of going into 2018 2019 now right because historically and you said around the time that you that documents
[00:47:43]  proposed you guys basically concluded that angular and wiz were kind of in two completely separate worlds so to speak like yeah that's been interesting too because i mean not to throw any
[00:47:57]  shaded angular but i mean there's probably temptation that like you get to this really interactive part of the page you're like we should load angular here to do this interactive part of
[00:48:06]  the page and that probably would be fine in a lot of cases maybe it comes in lazily who cares but angular was also not a very small framework like you like you
[00:48:17]  were pulling in quite a bit to even do that so i could i could picture there being tension there between like these performance guys that are like yeah we shaved you know 100 milliseconds
[00:48:28]  whatever you know you know and then people developers and other people being like you know why can't we have nice things um so i don't know uh yeah where does it go
[00:48:40]  from there um so it becomes clear increasingly that like you know wiz alone is not enough and there are many different types of applications and does angular is and also by this time
[00:48:55]  2019 i think there are like i i don't know but there's definitely hundreds if not over a thousand angular applications as well and you know people are happy productive using it and
[00:49:06]  so the two teams trying to you know organizationally they move in together and they're like okay we're gonna you know we're gonna learn from each other and we're
[00:49:13]  gonna work together sarah drasner joined google about that time uh no this was the first this was like nine 2019 right okay so she joined in like 2019 is five years
[00:49:24]  ago yeah oh crap yeah yeah yeah yeah i'm like my time's getting old she joined what 2021 uh possibly yeah yeah okay yeah i don't know yeah but okay so you
[00:49:34]  guys are at least under the same org at this point okay yeah we're at least in the same org and we're like and one of the first challenges is like oh
[00:49:42]  the build systems are all different and like you know we're trying to figure out how to use like you know basil and stuff and and that's that's happening uh but then
[00:49:53]  sorry i've only heard of basil because of angular and i have no clue it's funny because when misco started quick he was really um stoked about bringing basil over and i
[00:50:05] 've heard his team uh got him uh got him off that very quickly um anyway um well that's not what this stream is about uh okay yeah we we i love i
[00:50:14]  love the version of basil we use it's actually great uh but i can understand that okay it's not easy yeah um you need you need a certain level of scale for that
[00:50:25]  to start like really making sense um otherwise it's like micro services right like you have a you have 100 users and 200 micro services of course you're gonna have a bad
[00:50:37]  time um so yeah um so yeah so so we we the team start trying to converge trying to change ideas but then things are like really kind of very far away from each
[00:50:47]  other and we're we're kind of you know trying to make things better where each one's executing angular's executing on iv right and this is executing on idom um iv
[00:50:57]  and idom are are you know kind of happening at the same time the same time okay yeah right um and then uh youtube is kind of you know on polymer and everyone
[00:51:13] 's looking at youtube and going like yeah what should happen and like you know there was a talk in ng-con recently about it um so you know you should you should check
[00:51:21]  out that keynote because like youtube was actually like you know on stage and they were talking about uh their experience and so on um and and this kind of need emerges of you
[00:51:31]  know um can we can we do even better than idom right like what if what if somebody is like can we sorry sorry can we do even better than closure templates because closure
[00:51:41]  templates like like someone on chat mentioned right like the big issue is like java like you're trying to also render in java servers and so that's putting like severe restrictions
[00:51:50]  on what you can write in your template right because anything you write there has to work in java and javascript um and so uh if someone's not server-
[00:51:58] side rendering and if you go to youtube.com you can tell right like what you see is the form and the ghost cards uh everything else yeah bring it up yeah let's
[00:52:08]  let's bring it up because i i'm not gonna lie i don't know how much i want to entertain this person but um i don't know if you already went back
[00:52:17]  and forth with him on youtube but the second i said i was having you on the stream he was like making a big thing about youtube's performance and whatnot and i was
[00:52:24]  like uh let's let's just let's just i'll see if we get there but let's let's look at it let's look at it i i i don't
[00:52:32]  mind having like a good faith discussion i i just i i initially thought the person was trolling but then you know they're making some good points and so oh sorry did that
[00:52:42]  happen too fast um maybe like shift refresh okay so what do i want to kind of show you the ghost cards um really like you want to see oh look at that that
[00:52:53] 's that's what i'm talking about yeah and so it's it's client-side rendered you can you can see that right okay yeah there's like two levels ghost ghost
[00:53:00]  ghost or no ghost then placeholder while the images load in yeah right okay yeah um and so reasonably right like why why deal with closure templates if you're not actually benefiting
[00:53:14]  from them where one of the core foundational benefits is you can like you know render in our you know java servers um so wiz has started developing it finally uh a templ
[00:53:29] ating language for wiz uh because so far we had been using closure templates and closure templates actually kind of ex came into existing independent of wiz like earlier this stream you were asking me
[00:53:41]  right like what is wiz right like because i could spend time talking about like the the event dispatch and everything and like you know you were like okay but how do you render like
[00:53:49]  wiz will work with any rendering system uh and so we're like okay what if wiz had its own rendering system and and that's that's what we start working on yeah
[00:53:59]  so i was trying to see if i like i've always looked at youtubes and everyone's always seen the the web components like it's very synonymous that people think
[00:54:07]  about because i remember on youtube it was like how many different frames this is when it started clicking like just how many different frameworks at google right because there's obviously angular i didn
[00:54:16] 't know about wiz but i could tell like google search was not angular and not whatever youtube uses and you know which is polymer which the newest web component framework um i guess
[00:54:26]  a lot of the efforts have been now to kind of bring them all together um but yeah sorry i was look i was actually looking here for js controller yeah oh there's no
[00:54:35]  dash in between and there isn't any yet no yeah because again like i said right if you're not actually server-side rendering and if you're not using if you don
[00:54:43] 't want to use inner html on the client you you could just hydrate as you render yeah yeah yeah no code splitting yeah so this so youtube it does like
[00:54:53]  the approach of rendering the shell and then basically client renders it after the fact interesting yeah i guess so i mean like first thing goes to me so you could like stream it
[00:55:05]  in or whatever but yeah i guess who cares yeah okay i mean that that is exactly what you should think about right like what does youtube care about and what does search care
[00:55:13]  about search cares about actually showing you the results and getting you off of search right ideally that's a happy user i search for something i found it yay i'm done and youtube
[00:55:22]  cares about the video right like that's why you come to youtube uh honestly all the rendering is getting in the way if youtube could just be like a television a magic television that
[00:55:32]  could just like start showing you the exact video you wanted as soon as you got to it like that would be the perfect right right thing okay so okay so what you're
[00:55:40]  saying is i'm not going to find js controller here um uh yeah because i i mean i saw the presentation and it was more about uh uh a collaboration i because i there
[00:55:52] 's there was something that was released on wiz related on youtube right because youtube started as polymer as you said yes um but then they wanted to change what they were using or
[00:56:04]  so uh polymer is like uh heavily deprecated obviously right like right i guess it's lit still yeah yeah yeah you use lit and um youtube um runs on many many different
[00:56:18]  devices right like like was shared in the ng-con talk right like there's the mobile website and there is also youtube on televisions um and these different kind of extremely
[00:56:30]  wide variety of devices don't all support web components like some of them even today do not and thus you would have to ship inexpensive polyfill and that certainly wasn't helping lit
[00:56:43]  right um yeah yeah i know it's funny though like it's because i mean things have gone better over time i can only imagine what this was like like 10 years ago
[00:56:53]  when they made the choice to go to polymer that's that's interesting that's that's that's brave um yeah anyway and um and so we're like okay let's try
[00:57:04]  to figure this out can we somehow have a web like so wiz actually spent a couple years exploring tag template literals uh as the authoring so now wiz is looking for an
[00:57:14]  authoring format right we're like okay fine we cannot do closure templates uh because we have you know a lot of developers who just want to author something and like that that
[00:57:23] 's that's you know web web friendly and so we spend a couple of years looking at tag template literals um and then we find tsx um and tsx ended up
[00:57:36]  checking a lot of boxes that that we were looking for like developer experience wise interesting i i mean i'd love to know why because it's so funny that like js
[00:57:49] x or tsx has kind of recently become default like new frameworks like yeah we use tsx yeah but there was a time period where it was only react or react clones and
[00:58:01]  then like i i fell on to tsx because i was really really lazy um on that part i i like legitimately did not care about inventing a new syntax everyone seems so
[00:58:13]  obsessed i'm like i want i want things to mechanically work how did you guys like what what were some deciding factors for you guys if i were to severely oversim
[00:58:23] plify it i i would agree with you right like i mean we don't want to invent new syntax i mean new syntax is how we got closure templates uh we just invented
[00:58:34]  all new syntax and so what if we just kind of went close you know i don't know i guess what if this were a library not a framework you just wrote typescript
[00:58:42]  and it worked right and so we got it's a lot more i'm oversimplifying it and i i don't think a lot of it is actually that relevant
[00:58:51]  um for reasons right we kind of got there right and and so that was the main thing so we said okay we'll have a first class templating system and i think i
[00:58:59]  guess the most innovative thing is if you write that tsx you can actually render in java servers um through some compilation steps and so that's kind kind of where we
[00:59:10]  are now because you so you got like because the expressions you know the inside the jsx are javascript so you guys definitely have a like javascript to java
[00:59:19]  expression thing right like effectively yes yeah okay yeah um and so so that's kind of where we are and um this when you're rendering the tsx only on the client
[00:59:35]  inside it actually lets you attach event handlers like just synchronously like it lets you finally wiz will just let you do that and and that is just to make sure that like
[00:59:46]  you know a migration from polymer to wiz is possible right otherwise it's just not possible because your event handlers are running synchronously and like participating in like the browser native bubbling
[00:59:57]  is suddenly like all delegated and like you know not firing in the same order anymore that's not that's not going to work i can only imagine trying to migrate apps
[01:00:06]  of this at this size see i i was really lucky when i joined the ebay team they had just finished the giant marco uh three to four migration so i came in
[01:00:16]  on like greenfield's new new development i missed i when when you have you know hundreds or thousands of apps depending on your stuff and you're just like making something that seems
[01:00:26]  like a very small change you know it'll make things better and it's like nope everything just works now in a way that's like slightly different even if it makes more
[01:00:33]  sense we depended on these things firing and you're like why would you ever depend on the never mind like yeah what's that thing that they say right like if you have
[01:00:41]  enough users like essentially every aspect of your system is now just your api like i forget uh anyway yeah um so so yeah so we're kind of allowing synchronous event handlers
[01:00:53]  except we're like designing syntax that somehow will eventually you know also work when your server side rendering and so that's kind of where this is right now we're we're
[01:01:03]  trying to uh reconcile the the first and the second largest websites in the world and giving them the same programming model right uh and that's yeah interesting that's that's that
[01:01:18] 's very cool but i mean you say that's where wiz is today but i mean i guess then the natural question is there's because a couple things we we haven't talked
[01:01:31]  about um terms wise and then we'll tie it into you know where things are heading first thing is um let's let's i'm just going to try throwing this term
[01:01:40]  at you and you can explain it's the best uh resume ability i'm just going to use this term quick has popularized it though he uh mishko does give all
[01:01:49]  the credit to wiz when he ever speaks about it um what how would you describe resume ability um and you know i know you're described how wiz works but like what what does
[01:02:00]  that term mean to you like did you guys use a term like this before or are we giving the or does he or does misco get coining rights here so to
[01:02:09]  speak um he does he has coined to the best of my knowledge uh he coined the term resume ability and i'm actually glad because that gives us a vocabulary to talk about wiz
[01:02:19]  because um before that like trying to explain like we would explain it as deferred event handlers and then you know start talking about js action and js controller and like you
[01:02:30]  know it's not making any sense and but resume ability captures an important piece that we haven't spoken about yet which i think is kind of a very like irritating thing but then
[01:02:40]  a very important thing and that's data when you server-side render you have all your template props right that are flowing down deciding what html is getting rendered the
[01:02:51]  event handlers especially when you do like single file authoring they want to close over those same props and use them yeah so when you server-side render you actually need to
[01:03:02]  capture the state of the system and and i think quick calls it like closure extraction but then like even that's not getting to the heart of it which is that you somehow need
[01:03:11]  to serialize that data and then you've spent a lot of time talking about like the double data problem and so on right um and and resumability i think captures
[01:03:20]  that nuance also very well it's not just about like hydrating event listeners it's actually also about making sure once hydrated those event listeners have the data that they need right right
[01:03:29]  yeah i i've tried to show this on stream before um be fresh but like the first closure thing is it's people i mean it's really obvious when you inline the
[01:03:41]  events but it's you know i'm just put it in here people picture themselves just like having these references to these global event handlers but the question is like how do
[01:03:50]  you get set count in like how do you get the count inside these things if you never ran the component in the first place or like this could come from props or something like
[01:04:01]  there's a whole tree of data running through your app and then you have these basically i mean whether it's the component or the event handler as these entry points you you
[01:04:10]  suddenly have this problem where the the data is coming from outside that scope right um i'm trying to make it more visual i don't know that that succeeds but if you want
[01:04:22]  to maybe see this in code um let me see are you can you pull up google photos or something or if you don't want to do photos uh try google finance finance
[01:04:37]  yeah i've never i think here i think this one should okay so now like in the html look for a c dash whiz tag i hope i find it oh
[01:04:52]  good okay cool right and so um yeah just expand that a little bit more uh i i i think it's cutting out uh i can't see i'm looking for some
[01:05:05]  attributes and they're missing see if i can okay cool uh so this one is a little trivial but um if you if you actually click on this if you so there are two
[01:05:18]  things that i want to point out here the first one is the js data attribute which says deferred c14 yeah and the other one is the data dash p attribute um in
[01:05:29]  which case in in this case the data p is empty because there happened to be no prams but what we kind of realized was that there are two types of data that
[01:05:39]  a component that an event handler and a component might want access to the first is the data that was available like just synchronously yeah so that means is your request came in
[01:05:52]  it was like you know uh slash about question mark something yeah so query parameters parameters yeah based information yeah and then like some maybe uh eagerly fetched data like we you don
[01:06:06] 't want to depend on backends uh you don't like block on a on a on a on a call to an api back end before you start rendering right because
[01:06:14]  because your goal should be to like start rendering as soon as possible and so you can start streaming the page back yeah i had to blow it up some people were complaining about the
[01:06:27]  size i i usually i'm blown blown up but not not in in this screen apparently um yeah i i mean i'm staring at like a tiny chromebook here but um
[01:06:39]  but yeah um so so data data p represents all of that data that the data that is just synchronously like and or immediately available because you either just derived it trivially
[01:06:50]  from the incoming request or you just paid you know for a blocking call to some back end and now now that response is available to you right yes data the reason is defer
[01:06:59] red is is because it's actually um you you don't want to block on that but you know that that that is a that is a result of a back-end call
[01:07:09]  okay um and so you distinguish between these two types of data and they get serialized in two different ways and depending on and then in the body of your component right anytime you
[01:07:22]  just depend on like so we call them params and data so in the body of the component if you depend on params you're not going to block streaming it's
[01:07:28]  just going to keep working right but as soon as you depend on data of course you cannot render till the till the that till that api call finishes okay and and so at
[01:07:38]  that point rendering will like stop and like you know wait for that to finish and then resume right right so you guys get like it's the ace async fragment kind of things
[01:07:49]  like suspense or whatever this is the data read side of it right and and so this see this boundary is a a kind of um like a hydration boundary so what that means
[01:08:00]  is like all of the data is available here and so from this point down like you can just infer the data um right this is like where like all your params are serial
[01:08:10] ized so it's a different kind of component that has this like serialization overhead and so that's how you know and then from here like you know some logic infers like
[01:08:19]  what's actually required by the event listener okay okay yeah no i hopefully it's making sense to people uh in in the the audience here but um very roughly speaking this is
[01:08:33]  kind of like a suspense boundary kind of um where it's basically things will pause and pick up from this point um if there's some async data that it needs inside
[01:08:45]  of it it it's actually a little bit more like a serialization boundary like maybe oh more like an island yeah possibly yeah yeah you could call it an island you can think
[01:08:54]  of it as an island yeah yeah yeah but like you need this you need to serialize your data periodically because otherwise your event listeners don't know and so this is like different
[01:09:04]  like quick has a different strategy and i think the whole strategy is completely different in quick one and quick two about how this gets serialized uh and i think if you like
[01:09:13]  yeah i'm sure any server-side rendering solution has some serialization system like this right yeah no exactly we yeah in our case um we we have a kind of blob that
[01:09:27]  keeps on streaming the data at the bottom as it as it comes in and then as it hydrates it because we have basically promises it almost runs the same way like it
[01:09:39]  does when it like when it does the initial client renders if it reads from an sync promise that hasn't resolved it's like okay i'm hydrating and i haven't
[01:09:47]  resolved i'm going to assume that i'm suspending and i'm going to wait until the boundary is good to go right right so yeah so so we're talking about res
[01:09:57] umability and like who coined the term i i said mishko did and and we didn't we were we weren't thinking of it in terms of like resum
[01:10:04] ability but i think it's i i like it because it includes this data aspect which is you know kind of uh interesting and and it doesn't get discussed as often yeah and
[01:10:14]  the data aspect is actually really interesting to me because i mean maybe you know have an answer to a question that i've been trying to figure out here because i've been looking
[01:10:22]  at a lot of different models i've been looking at server components i've been looking obviously at quicks resumability and all and you know obviously i've been optimizing
[01:10:30]  just the typical like single page app cases uh you know type stuff that i do i've been doing with solid and i i guess it's interesting to me is like data some
[01:10:41]  data could just stay on the server conceptually because you know you never need to update on the client but once you get to a point where there's stuff that does get
[01:10:51]  updated on the client um like where there has to be some level of diffing or hydration you end up having to serialize some amount of data um like we know that if
[01:11:03]  you eagerly load the code but don't execute it it doesn't cost you that much right i mean i guess the browser parsing it could be expensive but if you can
[01:11:14]  do it in such a way that you know you can render the page and you don't the person doesn't interact with it in that first you know few hundred milliseconds the
[01:11:23]  fact that that code is you know kind of coming in you know is fine it doesn't really impact your page score your core web vitals or anything because it's kind of
[01:11:31]  just happening in the background and the page is there it's not going to run any javascript until you actually do anything so you're not blocking you know very much there
[01:11:40]  um but i'm i'm kind of wondering if the same is true about data right because like this seems to be like at a certain point a trade-off because you
[01:11:47] 're actually sending uh you know a bunch of data to the page this is i was very interested in islands and server components for a long time because i was thinking oh theoretically although
[01:11:59]  not all implementations handle this is you could kind of solve that double data problem with like islands do server components could reacts do not but they could theoretically say like i only need
[01:12:10]  to ship it in one form either as they rendered html or as the data that i that i need um you know in to to show that after the fact for
[01:12:22]  server only stuff for things that aren't interactive you can basically say you don't need to send it twice i'm sorry where i'm going with this is um if you don
[01:12:30] 't need to hydrate like does that change the math considerably like does like let's pretend like you like if the page size gets larger and it's just because you're tag
[01:12:41] ging on a bunch of data that you don't need immediately do you know like does that affect uh page scores or like it's one of those things i've been trying
[01:12:50]  to figure out if you try to make this decision at like the framework level um and you just say that you're just going to serialize all the data right like everything that
[01:12:59] 's going into the templates i'm going to serialize it you may end up serializing things that you're not required so like if you take this like brute force extreme
[01:13:08]  right like just rob is you're not using this like cv stuff or anything um technically all that you're doing is you're you're capturing the event you're dispatching
[01:13:18]  the event you're waking up the event listener and at that point right maybe the author of the event listener could decide uh what data they actually care about and then place them as
[01:13:28]  like data dash attributes right and so then you say that the framework's like really not not involved in this like you as the author of your component know exactly what data you
[01:13:38]  depend on and you can like serialize it on the page right and so then that's like super optimal because like you're now letting that decision be made by those who actually
[01:13:46]  need the data so if they're careful they just won't serialize the data that they don't need right right which i i guess yeah what i was going to get
[01:13:56]  to is what about the data they don't need yet i guess is is the more because we talk about codes bundle splitting so what about data splitting yeah i get i get it
[01:14:07]  i get it so like for example if you have a control flow component and you like update a signal and that's going to send you down a different path right and and
[01:14:14]  now just in that different path you closed over a different set of props and so like those props are available during initial render and then later at some point you you toggle the control
[01:14:26]  flow and and now you need the props that you didn't need initially and and so you end up speculatively needing to serialize all the props uh because you don't
[01:14:35]  know if you will need it later right sure um that's that's like an example and like that is and that is why you just kind of conclude i'm just going
[01:14:44]  to serialize all the props like whatever i don't know what you might need later um but yeah there is no like data splitting thing here that i'm aware of uh because
[01:14:55]  you would have to essentially analyze like all the control flow components because i think that the the use case is control flow right like that's where yeah i mean the other place
[01:15:05]  you hit this weirdness isn't just props but i mean i guess one of the things that i was always thinking would be really difficult or tricky with uh angular getting into presumably
[01:15:16]  is like dependency injection or context apis these are places where you have i'm sorry i'm sending you right the deep end here but these are places where you have shared
[01:15:25]  data um you know zones that you know aren't so local you had to say zone didn't you no i don't mean like zone js honestly but yeah um yeah uh yeah
[01:15:38]  context is tough uh when you're trying to make a resumable framework and you do like hierarchical di or context yeah uh it immediately like you end up uh having
[01:15:51]  to wonder like how do you how do you handle this yeah um because like you want to actually only resume the event listener but then as soon as your event listener is injecting
[01:16:01]  context you now have to go up and like somehow like find a way to like hydrate a sliver that gives you the context um i don't actually i just yeah don
[01:16:11] 't don't have a yeah props drilling is not fun i guess so um yeah i don't have a great answer here no it's fine i i the reason i i
[01:16:20]  this was just piquing my curiosity because i've been staring at these problems for like the last little while and i've i keep on looking at them and circling around
[01:16:28]  it and i'm like you know i'm just gonna put jan on the spot a little bit when he's here in terms of that basically a lot of the thing time with
[01:16:36]  wiz because the goal has been very much like let's make efficient websites or whatever it's like you these are probably problems you're like now starting to hit more than historically
[01:16:46]  because historically you're just like don't do that just just make the thing fast what are you doing yeah kind of um that that does capture the sentiment now now we're starting
[01:16:57]  to because when you're doing client only rendering like you know context is a super reasonable api to ask for of course it should exist it totally makes sense uh but then how
[01:17:05]  do you decide when to serialize it on the server do you just keep serializing it every point it is used isn't that going to result in like you know over
[01:17:13]  serialization uh probably um and so yeah yeah it's not a there isn't a very obvious answer here that kind of comes to mind yeah as i said this was just guilty
[01:17:24]  on my part because i've been this is exactly where my thinking is i've been i've been going very deep on the island server component thing and i'm i'm in
[01:17:34]  a new phase where i'm very interested in uh you know looking at taking a second look at resumability i looked at a lot when this go initially um but i
[01:17:43]  i have an interest here because there's one thing that we've been kind of hinting around or talking about here is you were using events uh systems or kind of imperative ap
[01:17:54] is uh in terms of you know waking these things up figuring out what triggers this figuring out what depends on what and um i guess something that has you know changed for a
[01:18:05]  lot of frameworks a little bit more recently is the realization that we could create a dx where the developer is telling you how all the data is linked in all the data dependencies and
[01:18:19]  they actually seem to like it and i'm i'm talking about signals um so and reactivity um so yeah i mean i is it a good time like should we talk
[01:18:29]  a bit about this because i think people are kind of interested in how like we've talked down data and templating and it seems you can kind of see why this attractive and
[01:18:40]  start seeing this picture of you know maybe how angular and wiz work together but i i feel like we're not getting to the full story until we actually talk about signals yeah
[01:18:47]  yeah we we have to i i was avoiding it a little bit because you said at the start that you know it's not about signals and um but yeah we can that is
[01:18:56]  certainly get us right right now right like it's a big big missing piece um i don't know if this is a uh can we do like a quick two minute break yeah
[01:19:06]  sure sure sure sure catch up you need a moment yeah it's all good yeah i i go i go hard yeah i need to like steal myself for the next hour discussion
[01:19:15]  about signals yeah yeah no i i don't know if it'll be that long but maybe we will yeah it's all good yeah take it take a moment all right i'll
[01:19:22]  be right back okay cool hey jenna will be back don't don't worry i'm gonna we can let me see if i can catch up with chat here how are
[01:19:31]  you all doing i i hear no not the right one i hear ryan hit the like button the problem is the chat scrolls and i was trying to highlight the anyways
[01:19:51]  um yeah i'm trying to catch up here on chat uh let's see greg you had a good question is a suspense boundary based with the component more or less fine-
[01:20:07] grained i think at least what i picked up from wiz so far and what i'm trying to do is that almost everything is kind of their unit you know like they
[01:20:17] 're almost like they define these things almost i don't know even to call them components i don't think i'm not sure if they had the same level of components as us
[01:20:24]  they clearly have classes but like i don't know if it's like the way we think about components because they he already introduced like multiple concepts right um controller um action model
[01:20:37]  um whatever this boundary is my my it kind of reminds me i don't know if anyone developed an ember in the like 2000 like pre probably not i'm probably the only
[01:20:53]  person here who developed an ember in that old phase but like even angular one was a bit like this like before everyone started streamlining and it was like mbc
[01:21:01]  plus plus where you just kept on adding these new classes for different types of things and wired them together i swear like old ember had like eight different types of classes that you
[01:21:10]  would use like you had a controller you had a container you had a route you had a whatever and yeah it's kind of i feel like it's a little bit different than
[01:21:20]  the concept of component that we have today you know like the thanks to react concept of component but you know i'm i'm glad to hear that amazing to hear what they
[01:21:37] 're doing at the scale and the temps emerge like i i don't know if i don't know if lit's on the merging block that's a that's an interesting question
[01:21:46]  like is lit i i mean i don't i i don't i feel like we probably can't talk about unless it's official so it's but i i know we
[01:21:54]  know angular and wizard and part of the same organization i don't know if lit is still in a different zone so to speak yeah you're asking me yeah kind of um i
[01:22:06]  mean lit lit i think the lit framework is about uh being really close to web components and like using the platform as much as possible right and like i mentioned earlier like um
[01:22:21]  when when you don't control the platform because you need to reach users on every possible device you cannot make as many assumptions um and so i think to really stay true to what
[01:22:34]  lit needs to be which is like really thin layer like here's the only thing that's missing in the platform otherwise you should just use a platform as much as possible um
[01:22:43]  it makes it a different kind of framework i feel um and also like to stay really true to like no build step right um it it's uh those are different set of kind
[01:22:54]  of you know uh you're going after a different kind of market space there um and and it makes sense for lit to do that yeah yeah but yeah with our java servers
[01:23:04]  and everything like we're like too complicated for that and probably just end up complicating lit itself which is which is not great for anybody yeah no that that makes sense but
[01:23:14]  thanks for thanks for clarifying that a bit yeah um all right finally arriving at the point people want to hear more about signal it's fine i just i it's funny uh
[01:23:25]  i can remember when we first met you we we just talked about wiz and resumability and that was oh i don't know a while ago was it two years ago
[01:23:34]  almost a year and a half no it was like a year was it only a year yeah last summer we we was not the first time but we met up and we started talking
[01:23:44]  the signals thing so i guess it was about a year ago yeah yeah yeah that was a yeah yeah it feels like it's been longer so much has happened in the in the
[01:23:52]  signal process so i'd already been talking to the angular guys about signals before we before we talked i see okay yeah and that puts it back in the timeline but some point
[01:24:03]  during the summer i forget it was in july or august or some point um um myself jadin alex pavel from angular um we all sat in room and we
[01:24:14]  just talked about what we were working on and talking about uh signals basically and it was kind of clear because yeah it was a little bit later on in the summer because mil
[01:24:25] o had already published his uh um reactively and papers i think it's the previous year but well that was the previous year yeah that was 2021 oh sorry 2022 and yeah right
[01:24:36]  so he he had to stop and we were all looking at the signals implementations and we were we were all like you know i it was it was actually milo coming
[01:24:46]  back from bubble actually he worked his summer job for a company that used solid but also had their own reactivity system and he wanted to kind of merge it and kind of get
[01:24:55]  an idea of like what this unified base was and at the exact same time angular and wiz team had been talking about how they could share it so we all like sat in a
[01:25:03]  room we're like yeah so we basically agree on everything okay we're good um which was like actually one of the first moments that i um i really i was like thought
[01:25:11]  that it was like wow it was like could we all share the same sort of um you know implementation piece i wasn't sure i was kind of like going off a deep end
[01:25:22]  but we were actually talking a lot of similar problems we're talking about resumability it was a great um great day i got to go down to the google um campus and
[01:25:31]  you know hangout so lots of fun and very kind of productive idea thinking kind of situation and it was it made a lot of sense that you know uh dominic uh
[01:25:44]  spelt had separately been talking with uh daniel um for a while in bloomberg and like this because they they had their thing going and they they were kind of pushing
[01:25:54]  harder on the standard side so um i feel like a large part of like when this happened was when those two groups met and then it was like okay signals proposal time and then
[01:26:04]  obviously pulled in uh you know uh people from ember community who were actually very vocal on on on the proposal um and uh you know uh several other uh frameworks we uh
[01:26:20]  we did we did have showings from uh view a bit at the beginning and then we got the guys from preact a little bit later on um to to bring out the
[01:26:30]  proposal but i'm not so much talking about the proposal today i just wanted to kind of get an idea that it became kind of very clear even in those initial conversations before the
[01:26:38]  signals proposal came out that there was some kind of common shared ground here um yeah so this means saying a bunch yeah uh your experience then uh obviously going to this with with
[01:26:52]  angular and wiz like how how how did the signals thing kind of come in your scope of radar and like that this was a possibility yeah so we had started working on a ts
[01:27:03] x based templating system so that like wiz could finally actually have a templating a library of its own and um we were initially using incremental dom so the system that we
[01:27:13]  were building kind of looked like react with incremental dom a little bit and when we started trying it out we noticed that there were performance problems with that and the performance problems kind of
[01:27:28]  come from you know having to manually keep track of your dependencies you know the the famous depth arrays um and so what we we kind of took a step back and and this
[01:27:40]  is maybe the time to answer like some of those questions on twitter um we took a step back and we really looked at the important certain really important components that were demonstrating these performance
[01:27:55]  problems and those were the ones we chose to migrate right and so when we say youtube's using signals we mean there are a few key components like for for example the video
[01:28:07]  scrubber or you know like when you're like uh scrolling through shorts like where performance really matters yeah yeah great uh well i hope that the first question is kind of answered what
[01:28:20]  actually wiz does yeah everything everywhere all at once Why all the claims to be amazing performance are shattered? Yeah, well, because all of YouTube isn't using Wiz. And
[01:28:32]  even if it did, Wiz is not going to guarantee performance, right? Like performance requires a lot, especially for a large app. And so I really hope we get to
[01:28:44]  the point where like, you know, YouTube's also like, you know, just perfect on like all the public performance. And it's ways to measure performance. But
[01:28:55] , you know, what matters is, you know, what is impacting the business. And obviously the video matters the most. And so we're looking at components related to video
[01:29:06]  first, not like some, you know, random menu somewhere. And so when you start switching those two signals, you can see, or we noticed that, you know,
[01:29:14]  we were getting more like smooth 60 FPS. And, you know, again, the NG Cont keynote talks about this in more detail. And so that's where we
[01:29:24]  started seeing that, oh, maybe signals would actually deliver on like, you know, performance by default versus performance as opt-in. Like when you're manually tracking dependencies,
[01:29:35]  it's you're opting into performance. And all it takes is one careless mistake somewhere. And like, oops, it's low. I love that part, the
[01:29:44]  talk. I'm not going to lie. I was sitting there when I was rewatching the keynote. And I was like, man, I've been trying to say
[01:29:51]  this stuff for years and years and years and years. And it's like, to watch it on the big stage like that was like incredible. Like, it's almost
[01:29:59]  like taking this, it's like taking this fact now. And I'm like, because I mean, even you're right. Like when we started at least my journey with
[01:30:07]  signals and solid, it was like kind of speculative. And now it's like, actually, yes. So like, it's, it's, it's very cool
[01:30:16]  to, to kind of see this make impact, um, on actual, you know, sites. And the other thing, which is maybe a lesser discussed aspect of signals
[01:30:28]  that I, I'm kind of very excited about right now. And I think it's promising is that signals is a more backwards compatible strategy compared to a VDOM approach
[01:30:39] . Like if you have an existing application that's using jQuery style stuff everywhere, right? You can incrementally introduce signals, uh, without having to like, you know
[01:30:49] , worry too much. But if you introduce VDOM, you now, at the point where you introduced VDOM, everything below it, everywhere you're doing
[01:30:56]  imperative DOM updates, you have to somehow protect that, right? So that the VDOM diff doesn't blow it all away. Yeah, yeah. But with signals,
[01:31:05]  you're doing fine-grained updates. And thus, the stuff you need to protect is like limited. And it's actually a super tractable problem. And, and
[01:31:12]  we've been trying to migrate our depot to IDOM for like five years at this point, right? And, and so when a more backwards compatible approach kind of
[01:31:23]  shows up, we want to try it out. And so that is something I'm personally like super excited about. Yeah, no, it makes a lot of sense. And
[01:31:30]  we always got that comment, uh, about, and it didn't click on me as much, but we did get that comment for a while because people are like, oh
[01:31:37] , it's easy to integrate with jQuery or whatnot. And it's just because like when you're, you're just dealing with a DOM and you can just like
[01:31:42] , yeah, the, the way that I, you know, you can what scale up or scale down or what, like the, the, whatever the term is, it
[01:31:50] 's not scale. But the way signals can are at core basis are basically just like a, kind of like a synchronization system for the, you know, I don
[01:32:00] 't know for any kind of side effect. It makes it really interesting because you, you don't actually, there's no, there's no like the buy-in
[01:32:09]  is there is buy-in because you have to now, you're now using these primitives. But on the other hand, they can do as little or as much as
[01:32:16]  you want them to do. There's no single way to make signals work. Um, people have been using the type of reactivity since knockout day, it was
[01:32:22]  even before, maybe, you know, in other languages. Um, but you know, there, there's a whole range of stuff. I remember at one point having a
[01:32:31]  conversation where people like, oh, it's all so fast cause it's fine-grained. And I'm like, yeah, but it's also fast because I have
[01:32:37]  complete control on how fine-grained I wanted to make it. Like you, you, you, you basically added a dimension where now you have this knob that you
[01:32:47]  can adjust it rather than just being like, I'm all in on this system. I have, I am V-DOMing like, you know, like you,
[01:32:52]  you can, you can be like, you could, you could put a V-DOM inside a reactive effect or whatever. Like you, essentially, I want to see
[01:33:00]  this. If you want to like bring up some code and like look at it together. Uh, I, I saw a little implementation of a use signal hook, uh,
[01:33:10]  that. that works in react, uh, yeah, like less than a hundred lines of code and it uses like the, the, the signals proposal. And I was
[01:33:17]  like, wow, yeah, that, that makes sense. That, that one's always interesting cause it's like the make this stuff work in react. And I've,
[01:33:24]  I've done this before. It's, it's kind of like the, almost the opposite exercise where, but yes, it is kind of, it's kind of interesting
[01:33:31]  cause you have to, you have to have a much. The knob actually exists, right? Cause when you use an API, like using external store, you control the
[01:33:42]  subscription. So it's kind of still have the knob if you really wanted it and you could create this entire system that just lives outside of react that decides like, oh,
[01:33:51]  when are my stores going to invalidate? And then you can try to do optimizations. Like if I'm already invalidating something below and above, I'm just going
[01:33:57]  to skip this one. Right. Yeah. It's a little tricky in the, the, once you, at a certain point you hand over the keys to react,
[01:34:06]  like a certain point you're like, okay, go re-render that component. And then everything is kind of true under the hood. So like in the past when
[01:34:12]  I've created signals implementations into VDOM like react, there is the signals implementation. And then there's the place where you hook in the subscriptions, basically use the
[01:34:22]  hook to basically do it or use tracking depends on the approach. Um, but then you also have to memo out of all this, uh, the children as well to
[01:34:31]  make sure that react doesn't overwork. Cause otherwise you're just, you know, you've triggered a parent and then you recreate all the children anyways. And you,
[01:34:39]  it's kind of like, there's, there's, there's some conflicting stuff there. Um, like mob X has done that has done a certain approach to reactivity
[01:34:48]  that I feel like is like the stock way of doing it. And then Jotai has like a slightly different approach where the use of the atom is what does the
[01:34:56]  subscription. Like one has auto tracking, one has explicit tracking, but generally they both kind of have to rely on using kind of opting out of reacts hierarchical VD
[01:35:07] OM consideration. Um, so it's, yeah, it's, I know, yeah, it's, it's been shared in the chat yet, uh, Daishi
[01:35:14] 's use signal. Yeah, that's the one I'm talking about. Yeah. Yeah. I, yeah, I guess to be fair, you. I, although
[01:35:22]  a little bit of a tangent, you were part of the group that presented the signals proposal, uh, to, to TC 39 yesterday to when it came and it's stage
[01:35:31]  one. Now people weren't aware, which is pretty cool, but bringing this back, uh, for a bit is, yeah, I was trying to get to where we
[01:35:45] , we talked about how saw signals, the way improving stuff like YouTube. Um, uh, I, I, I just curious, like the anglers got signals wiz
[01:35:55]  has got signals. How is this the key to the merger? Um, so to speak? Um, so there was a slide that I, that, that I presented to
[01:36:04]  TC 39 and, and that's actually super relevant, right? Like when you look at a signals API, there's actually three main APIs. There's this state or
[01:36:12]  signal that's computed and there's effect, right? Yeah. But, um, if you notice the proposal, it actually doesn't have an effect API. Instead, it
[01:36:21]  has a lower level API called Watcher. Yeah. And this was kind of what the ways in angular teams kind of realized together was if we said that's where we
[01:36:32]  kind of define our signals library. So like the graph building, the auto tracking and like update propagation, all of that is shared, but then both frameworks can hook in
[01:36:43]  like their execution strategy and scheduling strategy at a, in a different effect API. Yeah, that gives us a starting point to actually start using the same code, and so
[01:36:53]  that way we got to this point where like if you go to the angular repo, uh, there's this primitives directory there and, um, the code there is actually
[01:37:03]  also running on YouTube. Like it's the exact same thing. Right. Well, I mean, when I say on YouTube, like the parts of YouTube that have started trying
[01:37:12]  this out again, not the entire, like this thing is still up on screen and like keeps screaming at me. Yeah. Yeah. I can, I can, I
[01:37:20]  can tuck it away. Yeah. It's funny. That, that split actually, uh, that you were talking about. Yeah. It, it, it, it's
[01:37:26]  something that I didn't realize either. Cause I'd spent a lot of time teaching the three basic language pieces. Right. And it wasn't until Milo released reactively
[01:37:34]  that I realized otherwise. Cause if you remember Milo just didn't have effect. He just like literally was like, I made the reactive system, no effects. Like he
[01:37:42]  just straight up just skipped that part. And he's like, yeah, if you want an effect, you can just. Uh, you know, like override the class
[01:37:49]  for the, the, the tracking scope and make your own effect and schedule it. Yeah. He basically cared zero about effects. And I was like, that's, I
[01:37:58] , and that was for me when, and he went to bubble and they proved it out. Very similar, actually, I guess you guys did with the angle and wh
[01:38:04] iz where it's like suddenly like, wait a second. There is a core part that we mostly all agree on. Right. Right. Um, and so that's just
[01:38:16]  kind of this inception, right? That's the, that's the, that's the, um, the kickoff. But then, uh, we believe there are
[01:38:24]  a few more such core pieces, like more primitives that we can actually align on and actually get to where it's the same code being used. And practically achieve a
[01:38:35]  lot of convergence for like the code that runs the hottest, right? The most important code and using those primitives, you could make like a whole gallery of different web frameworks
[01:38:46]  with different philosophies. Uh, but then aligning on like, and, and the perfect example of the philosophy of a web framework is like the authoring format.
[01:38:54]  Like how do you write your templates? Right? Like you mentioned earlier, you were like super lazy about it. You didn't actually care. So you just picked TSX
[01:39:00] . It's actually. That's a very, very fair point of view. And I shared that, like, it actually does not matter how you author your templates. The
[01:39:07]  most interesting parts of the framework are like, what is the reactivity? What is the component model? And you know, uh, what is your take on like dependency injection
[01:39:16]  context and stuff like that? And then you just, the authoring format is just, you know, it's, it's your docs page. It's important,
[01:39:23]  but it is your docs page. Like, you know, it's just how you finally then bring this whole thing and like, you know, bundle it and put it in
[01:39:29]  front of our developer. It's funny to think that we were getting to a point where frameworks are just a matter of like putting together these well-known permanents. See
[01:39:37] , I, I like, I like challenging this all the time because I'm always like, like my, my, it was actually kind of funny right before the signals proposal
[01:39:46]  went out. I will, I, I did that signals 2.0 stream, uh, which is a few weeks back. And I was like, yeah, I
[01:39:52] 'm, I'm pretty happy with this, you know, 1.0 thing, but I, I'm already trying to find ways to, to push it or break it
[01:39:59]  or maybe challenge some of our assumptions on it. Um, but I, I, I, I think that's the perfect thing when you go through standardization is that
[01:40:06]  you recognize like what the shared parts is the process that the framework authors independently to like the TC39 went through to understand that Dominic was also on the same page as well
[01:40:17] . Um, it was kind of crazy to see that amount of alignment. I, I, we haven't seen that. I, I don't remember ever having that
[01:40:24]  amount of alignment between frameworks. Um, yeah. Like a wild screenshot of like the kickoff meeting. Hang on. I'm going to show you. Yeah. Um
[01:40:32] , it was just, um, just seeing so many, um, of the people in like the same room was just, uh, yeah, I, I couldn't like
[01:40:41]  believe it. Hang on. Um, like rich was there and we should go was there and like, um, yeah, I'm going to just really quickly share just one
[01:40:55]  thing from my screen. Is that okay? Yeah, go for it. Put it up and I'll get you in there. Yeah. Um. Yeah. Just,
[01:41:04]  just the picture. This is like a screen grab. All right. Like this was like the first call we had. And like, yeah, this was, and everybody was
[01:41:10]  there and I was just like, wow, this is perfect, right? Like you have like. Yeah. Angu, angu, angu, angu, ang
[01:41:16] u, angu, angu. Yeah. Yeah. Yeah. Yeah. And like, yeah, this was, and everybody was there and I was just like, wow
[01:41:24] , this is perfect. Right? Like you have like. Yeah. Yeah. Angular, quick, solid and so out. Yeah. Ma, we got Michelle from,
[01:41:32]  uh, yeah, I know on the top. What you don't see is there's like way more people in this call. Uh, yeah. Yeah. Um, I
[01:41:39] 'm pretty sure Michelle joined. I, I can't remember if Andrew Clark actually ever joined one of the calls. He was part of the group for a bit, but
[01:41:45]  that's actually react core team right here. Um, uh, yeah. Miss go quick in angular angular. Svelte. Evan, you. Evan couldn't make it
[01:41:56] . Cause like it was. Yeah, I remember. Yeah. Ryan leaked his real background. You're right. Uh, yeah. But this was, I think,
[01:42:01]  October of last year. Yeah. That's when we started up. It was like around September, October. Uh, so, um, yeah, no, it was,
[01:42:06]  uh, yeah. So, um, yeah, no, it was, uh, yeah, so I mean, it's pretty, I, that's, that's
[01:42:24]  why I actually don't have tons to say on the specifics of the proposal. I've told you guys already on stream that I'm pretty confident that I can implement what I
[01:42:32]  need to on top. If I so choose to, um, uh, because I remember we went through a few phases. And I think eventually the, uh, angular
[01:42:40] , the, the watch idea that you guys originally had, it became the thing that, that eventually like became the final agreement point of variation on that. And, um,
[01:42:50]  yeah, I mean, from the first day you guys told me that part, I was like, yeah, it's different than I was picturing, but yeah, I
[01:42:56]  can work with that. I don't care. So went on to work on whatever the next thing that I wanted to work on. That's, that's been the problem
[01:43:03] . I'm terrible for standards type stuff. I, I, I be like, I look and see what I can use. And then I'm like, something doesn
[01:43:08] 't fit. I'm just like, it's okay. I'll, I'll do something else. It's like, no, no, we want everyone to agree.
[01:43:11]  And I'm like, no, it's, it's okay. You know, I don't, don't worry about me. I'm probably going to change my mind
[01:43:16]  tomorrow. And the, don't, don't hold me to it. Um, but no, I'm, I'm glad that there's enough of that commonality
[01:43:23] , um, that we can kind of actually build upon. Um, and I'm very curious to see like how we can get like some async and some notion of transactions
[01:43:32]  in there. I think those are like two very big missing pieces right now. Um, yeah. And like what we have so far. Yeah. Yeah. It's
[01:43:42] , it's tricky because I, I, while I, I don't know if we can ignore, like technically this stuff can happen without the effect portion, but it's
[01:43:53]  like, yeah, it's, it's doable. I mean, I just, I know this is a complete aside. Just two seconds. HackMD. Oh
[01:44:02] , am I in the wrong? It's been so long. Oh, is there GitHub? Yeah. It's probably GitHub. It's fine. Um, where was I
[01:44:12] ? Uh, uh, yeah. You know, I don't need to get into this right now. Sorry. I actually like after, after my stream last week, I
[01:44:23]  went even further into what I was proposing. Cause I was trying to figure out, I've, I've been struggling. The funny thing is, you know how everyone
[01:44:30] 's got this, the push pull, you know, approach and we, we all use push pull, but the lazy push pull has been become synonymous. Everyone uses,
[01:44:38]  you went to that direction, right? Obviously, um, Milo did it with reactively, um, preacted and then obviously angular did. And then everybody went
[01:44:48]  to this kind of lazy evaluation part. Solid was never that. Solid is actually the, maybe the only eager push pull library, which is weird. Is it because you
[01:44:58]  have like synchronous render effects? Uh, but, but I mean, even with the synchronicity, like we could just pull at that point. I just, we
[01:45:06]  always just scheduled them. Like where we had like a pure phase and then effect phase and actually made stuff like concurrency a lot easier. Cause you knew everything would run
[01:45:13]  before everything else would run. You wouldn't be in the middle of effect and reading something for the first time. So it actually solves scheduling and concurrent rendering and all these things
[01:45:20]  automatically. And now I'm getting to a point where I'm like reviewing the stuff and going through and I'm like, man, this, I can work around it
[01:45:28] , but this is actually different. We actually had a whole bunch of stuff for async concurrency working on, in our favor. Like we don't have the diamond problem
[01:45:34]  with async because we don't, we trigger it not on pull. We trigger it eagerly. So like, this is like, like there's a whole bunch
[01:45:41]  of stuff that like everyone was like, yeah, this is the most optimal way to approach. And I, I was like, I was like, even my head, I
[01:45:46]  was like, yes, this is the most optimal way to approach this. And then I was like, when I went to go, like actually work it all out. I
[01:45:54] 'm like, geez, we've been depending on this other behavior this whole time to do a whole bunch of really cool stuff. What does it look like in this system?
[01:46:01]  So I actually started, that's where the signals 2.0 stream started. But then afterwards I actually started like working through this stuff, which is a little bit of
[01:46:09]  a tangent from this, from this stream. It was just, I, maybe I'll show it later, but it is interesting to me that for an area that's been
[01:46:17]  around for 10 years longer, there's a certain amount of stuff that we can agree on pretty much a good thing. It's good basis is, but there's still like
[01:46:27] , we haven't had the maturity here yet to actually explore this in the same like degree that other solutions were. Signals kind of went out of fashion for like 12
[01:46:36]  years and, and like, or maybe 10 years. And now it feels like it's all new again. Like we're, we're, we're making leaps and
[01:46:44]  bounds here at such a faster rate. And it comes from like all these other people. Like I was sitting there and signals are moving pretty slow through 2016 to 2021.
[01:46:53]  But then the last like two or three years, things have like just accelerated as everyone's kind of going to gone on with this. Yeah. Okay. I will answer this
[01:47:04]  question just cause I can, from my perspective, you can give your answer too. to the impacts in those part, I can script beyond building frameworks. I don't
[01:47:12] , do you have an opinion on that? So one of the things we say is like, you know, build systems kind of care about dependency tracking and like, you know
[01:47:24] , um, the stuff that signals is trying to do and like the, just the basic algorithm underneath like kind of build a graph is actually fairly common. Is that,
[01:47:32]  is that what this is about like application on UI frameworks? Yeah. I don't know. I maybe people are think trying to picture, like, I think the reason is
[01:47:39]  when we, when they released it, they basically suggested this API was for us and that people probably wouldn't be using it directly. Um, that, that was my take
[01:47:47]  of it. Or like minimally, like, I don't know. Angular puts, you know, brings the stuff into classes and I'm gathering you do as well.
[01:47:55]  We almost all are going to have our own API wrapping over it. Um, so yeah, I, I, I don't know. It's, I, I
[01:48:05]  think the common, I guess people are still trying to figure out what the, what the value is here. Um, a bit, right. Like, cause like the,
[01:48:13]  the, the, the common basis is the value. I actually, this is typical Ryan, but like, I don't actually care about what it looks like. Um
[01:48:21] , like the basis is the fact that if we're all using the same signals, then it's kind of like using async await, right? Like it's like,
[01:48:27]  can Chrome dev tools track dependencies? Like, can, can, could we actually like see tooling and stuff built into the platform to, to do more? I saw someone complaining
[01:48:39]  that we shouldn't bring it in because it has no value for the backend. And it's an interesting question because I don't know. Signals are, are a
[01:48:48]  synchronization system. So like, I guess something like RxJS might be more valuable for people on the backend because it's a transformation system, but like.
[01:48:57]  I mean, you could have stateful servers. Yeah. Stateful servers. Yeah. And it certainly helps during SSR. Like you want to know, like you want
[01:49:07]  to, we're not talking about like signals and resumability yet. Right. Like, but when you do like you, you actually need to know like the signals graph
[01:49:14]  or a subset of it during server rendering so that you can like serialize it and then, you know, resume it. Yeah. Yeah. Yeah. Yeah. The
[01:49:24]  idea for the proposal would be that this would, there would be some ability to optimize at least the, the, the propagation and stuff in, in native code. I'm
[01:49:33]  gathering at the engine level. Um, the ideas that, that we like at least the, the notification, like propagation, um, would be able to be able to be
[01:49:44]  optimized somewhat. It's hard to say, like, I know there's some people out there. I think I saw Fabio who is like, you know, Bobby
[01:49:51]  guy, very critical. If, if he has an opinion, I probably agree with him. Just like trust what he says. Um, you know, he, he's
[01:49:59]  like on the performance side. Cause he was like, you know, I don't know if this will actually lend to this performance and blah, blah, blah. And
[01:50:05]  like, I'm not gonna pretend I know the impact of like what an implementation in Chrome can do. Let's say if they like get into the V8 level, but
[01:50:14]  it might be minimal on the performance side. If it's considerably slower, I might actually be like, no, not ready for this yet, but let's assume that it
[01:50:23] 's, you know, even if it's not a performance improvement, just having that common base to be able to tap into is a bit big benefit from my perspective.
[01:50:32]  Dev tooling is something I'm really excited about. Cause like everyone seems to be very concerned that like automatic dependency tracking can get you into trouble because you can't like understand like
[01:50:46]  why something's happening anymore. Um, right. Right. Yeah. Yeah, definitely. I, I, I think this is always a challenge, right? I mean
[01:50:56] , it was the argument against signals back in the day, right? It was too chaotic. The funniest thing is take one complicated system and replace it with another one. You
[01:51:03]  know, we just get there again. Um, you know, some people are hoping for agnosticism. Maybe a lot of the work happens in the effects and
[01:51:12]  I'm very glad the effects are not part of the spec. So like, we're going to have to see on this. This is not where I'm actually that
[01:51:21]  worried, uh, concerned about. I know there's a, there's a part, like every group has different representatives. Like we had Ben Lesh, who is
[01:51:27]  like RX reactivity guy, pretty stoked on this stuff. He cared a lot about interoperability at the beginning, kind of, you know, adjusted his view over time
[01:51:36]  a little bit. Um, there, there's other people, you know, on the like more web, you know, even web component people were involved in this group.
[01:51:44]  Um, and, and they're kind of like, yeah, they would love if this meant that the, the platform could be lower level and that people could just, you
[01:51:52]  know, do these things without having 10 different frameworks. You know, but then there's also the framework authors who are like, like myself were like, there will always
[01:51:59]  be different frameworks because people have different opinions. So, you know, you know, I don't know. Sorry. I'm talking a lot. Do you, do you
[01:52:10]  have anything to add on that, John? Sorry. No, no, I was just agreeing with you. Uh, yeah, they will always have different frameworks cause people have
[01:52:16]  different opinions. But yeah. Okay. So, uh, yeah, I'm trying to decide where, where, where we should go from here. Cause we've explained
[01:52:24]  with, we've talked about signals. We've, we've talked about a bit about resumability. We kind of got, I think we've got a good idea
[01:52:30]  on, on that kind of stuff. Um, I don't know. Is there anything you, you want to show or should we go go into some Q and A or
[01:52:38]  what, what, what, what, what, what are you feeling at? Um, yeah, I think we can go into some Q and A. Um, I
[01:52:44]  don't have anything specific to show. We already looked at like, you know, some of the HTML, which was, uh, nice. Hopefully that was helpful. Um
[01:52:52] , I, I can't really share like code and stuff. So I think that might be the best. And I actually have a question for you because. Okay.
[01:53:02]  I got a good one. Some spicy, not, not, not, not spicy in like a get you in trouble way, but spicy in a kind of way is when
[01:53:10] , okay. Angular and wiz are merging, uh, to a certain degree or using shared pieces. I, the degree to that, you know, and wiz is a
[01:53:21]  resumable framework. Angular today is not, but they both have signals. There's a strong base. When miss go came out and put quick out there, he was
[01:53:32]  like, what? Presumability is a game changer. We agree. It's pretty big, but he also suggested that basically no framework could follow in the footsteps.
[01:53:39]  They'd have to do a rewrite or be a new framework or something, right? Unless they already have resumability, like, like wiz. What's your opinion about
[01:53:47]  how resumability fits into the future of these frameworks or like the path to resumability? Is this, is this something that like, we all just need new frameworks
[01:53:55]  to get to, or is this kind of like part of the, you know, progression? Like, what do you feel about that? Yeah, uh, that's a
[01:54:02]  really good question. Um, I actually disagree with Mishko on this and he knows. Um, I think there is a path to resumability that any framework
[01:54:12]  could take. Um, it's about, um, starting to care about SSR and then like just really, really caring about it. And, and the more you care
[01:54:24]  about it, the more and more resumable you can be. So like, here's a, here's a, here's an exercise or thought exercise, right
[01:54:32] ? Like, and, and I, I will start by saying like, I'm not a react developer. I don't really know much about it. Um, and so
[01:54:37] , um, only to the extent that, you know, I work with incremental dom, but imagine if, you know, you had like react server components and some client components
[01:54:48]  and your server side rendering everything. Right. And then you're like now on the client side. Okay. So you have like this at the base, you have a
[01:54:56]  server tree and that's going down into like many different client components. Right. Yeah. Um, and then everywhere you're trying to, your component fetches data, you
[01:55:04]  kind of, you know, you're passing it in as a prop. And so like, you know, it's, it's kind of like content projecting all over
[01:55:10]  the place. Right. That's what server components basically do. Yeah. That's exactly. I think that's exactly what they are. Yeah. And you don't hyd
[01:55:19] rate anything though. Right. You just let it be at that point. You install like an event dispatch library at the other route. And depending on where the user interacts,
[01:55:28]  you call hydrate route on just that client component tree. Right? Yeah. I, I, I guess the, let's, let's just run through this eventually.
[01:55:37]  Cause the funny thing is, first of all, react does have that global event dispatcher to, to, in a certain form. They, they have something called selective
[01:55:45]  hydration where they'll prioritize hydrating suspense boundaries based on if the person interacts with the page before it's, it's done. They will still actually prioritize on that. And
[01:55:55] , um, so they, they, they, they, they do have the ability to somewhat delegate events and it's a solid access similar system as well. Um,
[01:56:04]  but I guess the question is, if you're going to hydrate from a certain entry point of the page, does that mean like, like, like you were getting the
[01:56:13]  props from, from those components? Is like, can they have no props? Are they like, do you have to serialize them? I'm just trying to picture.
[01:56:19]  That's the thing, right? So like we said, like resumability is like not just event handlers, also data. So you, you solve the event
[01:56:25]  handler piece by actually having, so you're saying react will do the delegation, but then how does. Like without some kind of attribute like JS action, all you sent
[01:56:34]  is HTML. What do you know? Like, how do you decide whether a component cares about, like, do you just hydrate all the components as soon as there's
[01:56:43]  a single click? Uh, I feel you do need some information at, at the actual element level saying, Hey, these are the events I care about. Right.
[01:56:51]  And so then you can like actually do like proper selective hydration, uh, where you just don't hydrate things where the user's not interacted with it. Right? Like
[01:56:59]  menu bar to the left, you just never clicking on it. Just let it be. Um, and, and then you have the serialization problem. And then as soon
[01:57:08]  as you have the serialization problem, you, you try to optimize it, uh, somehow, right? You, you try to say, okay, there's props and
[01:57:14]  there's, there's, there's prams in this data and the data will be at the bottom and the prams will be on the top. Or, I
[01:57:19]  mean, you can go down that path and like, you know, actually start trying to, it depends on how much you care about SSR. And if you really just
[01:57:28]  don't care about SSR, um, this journey down being resumable will kind of, at some point you'll realize that you'll feel, you'll probably feel
[01:57:36]  like it's not worth it. The thing is, I think a lot of frameworks have shown that they do care about SSR. Um, you know, that's been
[01:57:43]  the kind of trend the last couple of years, actually Jack had a question. What I'm sure is if an existing framework could be useful, how would use effect work
[01:57:50] , for example, and also be backward compatible. That's immediately correct. Yeah. I mean, there are, I think in all cases, there's going to be some
[01:57:56]  code that might, you might want to, uh, run eagerly anyways. Yeah. But I guess it's the same rules. You can pretend that's like an event
[01:58:05]  that someone clicked immediately. Yeah. But the fact is, is kind of like, if you're somehow relying on use effect to like, correct the rendered page. And
[01:58:13]  like, if it doesn't run immediately, the page is incorrect. Now you're like either trying to run use effect on the server or like you're stuck. All right
[01:58:22] . Well, yeah, I mean, an example of this page correction, pretty common problem with hydration. And we usually use effect so it doesn't run on the server
[01:58:29]  is applying light mode, dark mode, um, that's stored in local storage. Yeah. That is a kind of like a classic example of it. Um, yeah
[01:58:38] , what kind of code do we run use effect or on Mount, um, sometimes measuring things that have been rendered in the DOM after they've been rendered so that we can
[01:58:49]  pick things up for the next interaction. Like, uh, I mean, that's already not going to work on the server. Right. You're doing something very sophisticated.
[01:58:57]  Right. Well, the thing is we don't use use effect. It doesn't run on the server. It only runs on the client. So like essentially these are,
[01:59:03]  there's a bunch of these things that run only in the client on Mount. Um, they're okay. I think, I guess the thing is what would happen is
[01:59:13]  in these cases and is that it, you would, it'd be like unfortunate, but you would treat it like, um, like an event that always fires when the page
[01:59:22]  opens. So you're like, okay, yes, we closed over this state. Um, because we need to, you know, grab this value when the thing runs,
[01:59:31]  what quick ended up doing is that they changed their default for use effect to be. Uh, uh, uh, on visible, um, instead of on Mount, which
[01:59:40]  is a little bit. Breaking. Um, perhaps, but it's an interesting, it's an, like, there's nothing wrong. As long as you can,
[01:59:49]  again, serialize the closure or have some way of hoisting out this code, the same problem as the event handler problem. There's nothing wrong with this other than
[01:59:57]  just the fact that like, I think you start thinking differently. Like my, my animation example is instead of using use effects to grab it on the Mount, you'll
[02:00:06]  just grab it. When you first need to do the thing later, you just defer doing. You start getting lazier and lazier, which finally, like, you know
[02:00:14] , then, then you can actually start thinking about code splitting. Cause we're not doing close code splitting yet, right? Like in my little thought exercise so far,
[02:00:21]  you're still loading all the client components. You're just choosing when to like hydrate them. And then you start thinking, Oh, what if I actually start?
[02:00:29]  Like, because now things are lazier and lazier. What if I actually don't load this event handler? Or what if I have an API that will just, you
[02:00:36]  know, let me, cause I'm listening to the events, right? Like you put it in HTML. So you're still listening to the events. You don't need
[02:00:42]  the event handler to start listening to it. Right. So what if you didn't load it, right? Like what if it's a super expensive event handler and you
[02:00:47]  just want to, you know, late load it and then you have multiple entry points on the page. And like, I don't really understand fully if 3P is well
[02:00:55]  set up to do multiple entry points on the page or if it's common practice. So that might be a challenge. I guess this is a related question. Does Wiz have
[02:01:07]  some kind of lifecycle events in addition to DOM events? You know, you were talking about like an event, a global event that's fired that would start all the use
[02:01:15]  effects. Like we have that. We just call it the render event. Okay. Okay. Okay. So there's a few like life cycles. Yeah. Okay. There
[02:01:25] 's like a render event and you can like wake up your component on render and then like do some stuff that you really want to get done as soon as possible. Um,
[02:01:33]  sorry, side note, this is increment. There is an incremental module from OCaml. Like incremental. Is that like the thing from Jamestown? Um,
[02:01:42]  uh, similar to signals and colleges and business. Okay. Yeah. If this is what I think it is, Milo gushes about this library all day long.
[02:01:51]  He's a huge, huge fan. Um, uh, I think with the language level, something of camel, you can do some stuff that we can't do in JavaScript
[02:02:00] , um, as easily. Um, but yeah, I don't, uh, that's all I know about incremental. Do you know much about incremental? Yeah.
[02:02:08]  I know Milo gushes about it. Yeah. Um, uh, I, I think, I think there's some confusion about, well, it depends on how
[02:02:16]  you define resumability. Still there's some benefit to resumability when doing pure CSR. First render bundle can be split from interactivity bundle. Um,
[02:02:24]  is, is like, I guess it depends on what you bucket under resumability. Would you say this is true? Like how? Yeah, it is true.
[02:02:32]  Uh, and it's not just this. It's also that, you know, you can get your initial render faster and it's all because you don't need to install
[02:02:42]  event handlers. And so not only are you not doing add event listener during rendering, you're actually able to just render to a string and inner HTML and that is interactive
[02:02:52] . Yeah. So because of that, because of that whole, like the resumability is just action, right? Like, so because you don't need to attach
[02:02:59]  your listeners to respond to events, you just inner HTML it. And it also means you don't use what said here, right? Like you can coach that. Yeah,
[02:03:07]  I wonder, like part of you makes me wonder how close all it is to what you consider resumability. The reason I asked that is because, I mean, let
[02:03:16]  me share my screen for two seconds here, because I don't know. Let me open the playground here. Okay. The funny thing is we don't. Okay.
[02:03:25]  See this on click. Remember this? Uh, yeah. Yeah. Yeah. If you look here, we, we don't do it as an attribute. We do it
[02:03:35]  as a property, right? I guess the problem is we're not doing the closure stuff, but what I'm getting at is. Yeah. See, if we made this
[02:03:42]  an attribute, because this is bred by the event delegate and then we do event replaying. Why do you have an event delegate? Like what is the, what is
[02:03:52]  it you're trying to? Yeah. Yeah. It does. We, we do event replaying. So we capture all the events before it's hydrated and then replay them
[02:04:00]  as a hydrate. Okay. Um, that, that was, we also had event delegation because of the JS framework benchmark. And people told me that when we manually
[02:04:08]  did delegation, that was cheating. And I was like, and then I was like, okay, fine, let me try it. And then it became useful for things
[02:04:15]  like portals, um, and like things inserted, like, uh, the, outside the DOM. It just kept on finding more uses for event delegation. What's interesting
[02:04:23]  to me, I suppose, is if, if we, if we, yeah, like it's, it's really the difference between like on this, like, let's
[02:04:32]  see what, how's the server side rendering? The server skips it, but if on the server side, we set an attribute, then it, yeah. It
[02:04:39] 's like, I guess you still need to know where this code, you need to know where this code is, is the, is the thing. Well, yeah. I
[02:04:46]  mean, the value of the attribute has to be a key into something that tells you where that is. Yeah. Where the code is. Yeah. Solid. Let's,
[02:04:53]  let's do this. We're going to make solid resumable. Solid start is resumable. Yeah. I don't, I don't, I don't
[02:04:59]  know how we would actually. You said it, make it an attribute. Right. So let's, let's, let's just mental exercises for a minute first.
[02:05:08]  Just this thing. Let's say on, because we have this code on the server, we made this into an attribute. So that's fine. The attribute would have a
[02:05:18]  key and that we'd use that key to like, the part I don't understand is I'm trying to think about is how do we wire this? So do you also
[02:05:28]  want to do code splitting or for now you could. I don't care about codes. I don't care about codes. But then just. So, so, so
[02:05:34]  then like just make it up. So you can do like hydratable resumability, which is kind of weird. What I mean by that is your because if you
[02:05:43] 're not doing code splitting, you're going to load the rendering path anyway, right? And so you're going to load a whole bunch of JavaScript and you're going to
[02:05:53]  run through it as well. So like if you're willing to do like a. Like a patch, like. Yeah. I mean, like this is, this is
[02:06:00]  the. Yeah. No. Yeah. I think, I think because you already have event delegation, you, you're, you're, you're, all you're doing
[02:06:08]  is you're, you're also rendering an attribute during SSR. Yeah. I mean, you need serialization as a baseline, right? You'd be need a
[02:06:14]  way of like, cause let's pretend we did something really not granular. Yeah. You, you, we wouldn't, let's say we knew what component we, we
[02:06:23]  need to not only tell, like, let's say we could from the click handler know what component we needed to run. Let's say like this just pointed at an
[02:06:30]  identifier for components. We, that component interest instance would have to have a serialized version of the props or something for us to actually make that an entry point. And,
[02:06:37]  and if it's using context, it would also need like all the context serialized at that boundary. Yeah. Yeah. Um, and then, yeah. And so,
[02:06:46]  yeah. So it says miss go right. No. Um, no, I think it's, it's, it's like you make a fire order function that actually does
[02:06:53]  that. Right? Like you introduce a new type of component, you call it a container. Like that's what we need. We need more types of components, not
[02:06:59]  more web frameworks. Yeah. Container. It's funny. Yeah. I was talking to someone the other day and I was, I was suggesting, well, cause we
[02:07:07] , the thing is you could be careful introducing too many different concepts, but the thing is we have a concept or we have a couple concepts that are verging on the container
[02:07:15]  idea. We have suspense. And another one that's verging on the container idea is the sections in nested routing. Like the, like every nested route section
[02:07:24]  is an example of like a container. Usually it's data is contained only within its scope, except for global context. And it doesn't get any props other than the router
[02:07:35]  props from that perspective on. So you just only have the, the router props or the data that you're fetching from the route data loader. I don't
[02:07:42]  know if, so in a sense, if you just took that pattern that we use the route sections and made into a primitive that could be used on its own, depending on
[02:07:51]  the router. Yeah. Then you could have coarser grained resumability, not even resumability, but like, well, no, resumability
[02:08:01] , right? Yeah. It's resumability. Cause you, you can, you, it's, it's letting you run lesser code. Like it's, it
[02:08:07] 's letting you skip like full app hydration. Like, like the key is to like, not need to do full app hydration anymore. Right. And the, I guess
[02:08:15]  the reason it's still resumability is cause we're also, because we have a serialization boundary, we are also not, um, running the code immediately. We
[02:08:27] 're not running an initial hydration past. I think the place we get into trouble, uh, this, the, the reason I landed here, sorry. I, I,
[02:08:34]  I write too many of these little blobs and this is again, probably. Oh yeah. So where is it? Serialization. No, no. What is
[02:08:43]  it? Three. Resumability without serialization. I wrote an article a while ago where I, I basically forgot about the containers and was like, I think this is
[02:08:55]  basically what we were talking about. Um, oh no. I was trying to do something more granular. Yeah. Nevermind. This is probably take us too long. I
[02:09:05]  was thinking of like, if you could unwind the code, but then ensure that it was in the same scope without code splitting. So you wouldn't need quick st
[02:09:11] aller signs, but you would still keep, do the closure extraction kind of, but, but don't serialize it essentially. So that you could have the, that you
[02:09:20]  could have the code execute at, from these entry points, but you wouldn't have to worry about serialize it. Cause they, they wouldn't be the, they
[02:09:27]  wouldn't be the, the, the. Yeah. You have to get the props somehow though. And to get the props, you're going to have to run the components
[02:09:35]  above like between the serialization boundary and like the component you want to. Right. Right. So that was the problem with this generally. Yeah. Cause even though it
[02:09:44]  was kind of granular, you would, I'd pull up along the reactive graph. The, the way I got the props was instead of running the components was pull the reactive
[02:09:52]  graph. Oh, cause you. Oh, right. Cause these are just functions. You could pull on the, but every prop is a reactive. Is it reactive then?
[02:10:01]  Yeah. Or, or it was not reactive, which means it can never change. Yeah. But then you need to serialize it. Right. Well, you,
[02:10:11]  you just keep on pulling up until you get a, get a value and the value will either be in the, it'll be in the JavaScript code or it will be from
[02:10:21]  an async source. Yeah. I mean, it's fine. I think the serialization could help contain it. So you didn't have to make it, but
[02:10:32]  okay. This is interesting though. So we're in agreement. There, there, there could be something here. We just like, I feel like. You got to care
[02:10:39]  about SSR. Like you just really keep caring about it till you get to this point. Um, and, and I, I don't, I don't think you
[02:10:46]  just immediately jump to like, oh, it's impossible. Like you could incrementally get there. Interesting. Uh, Greg asked me a question. Does, does lazy work
[02:10:55]  on an event listener? Yeah. The idea is like, what if you like. Made by almost like a, like it's a lazy hydratable container. Like
[02:11:03]  there's the, in react and solid, we have this thing. It's a lazy renderable container. What if you actually let it wake up on event listener? Yeah
[02:11:11] . Then like, is it resumable? You just need to serialize the props that you closed over inside the lazy. Right. Cause that's the boundary. Right
[02:11:19] ? Like, so that. Exactly. Then it is resumable. Actually, you know, you're right. It is. So if you just said, for
[02:11:26]  example, that, Hey, this. Event listener will just make sure that whatever props it needs are present in the data dash. Attribute, right? Then, then
[02:11:36]  that's it. That's all you need. You need a lazy boundary around an event listener. And then the event listener wakes up, grabs whatever it needs from data
[02:11:42]  dash and never assumes that it closes over anything. And that's resumable. Yeah. I, it's interesting space to explore. I, I think, I think
[02:11:49]  definitely got me thinking more about like this, um, thing, you know, in terms of this thing, one, one of the cool things about where solid is, and
[02:11:59]  I know that I'm kind of turned in a bit here is we're so primitive focused already that we don't have a lot of that baggage. Um, in terms
[02:12:04]  of like, we don't have a beat on or, uh, or, you know, some create like these other pieces that we have to do. So we're fairly
[02:12:11]  portable to try ideas like this because of how low level the pieces are. So yeah, maybe it's something I'll play with here. Not to get too far off.
[02:12:20]  Um, I'm trying to get, see if I got some more questions in the chat here. Um, let's see, building it. I mean, control flow
[02:12:29] , I think it's still challenging with these kinds of things. If you don't have keys or something. Um, that's one of the challenges because we, we,
[02:12:37]  we don't, we don't need keys in the clients. We can use references. So solid's never had keys. What's also interesting about control flow is like,
[02:12:46]  imagine on the server, like you had an if component and the server side, you rendered like, you know, the true branch on the client. You actually need to
[02:12:53]  load the false branch. Exactly. Yeah. Yeah. It's a server component. It's funny. So you don't actually get away from these boundaries. The biggest difference
[02:13:02]  here is. Yeah. I mean, so I guess even with wiz or something like, are we, it's like, so do we still need something like server components,
[02:13:09]  like a use client or whatever? It doesn't have to use, but like a boundary that's set. That's saying this is this use client might not need to be
[02:13:15]  the, the actual like hydration entry point. It just needs to be like the, the serialization boundary. Yeah. That's interesting. I think isomorphic components
[02:13:27]  can actually work. Like, I think what happens is if you already have a deep client tree and then you decide to like fetch some data. Now you have to like
[02:13:37]  actually reverse prop drill to make it to project that content from the closest server component boundary. And then God forbid you made like a shared client component tree and like there are two
[02:13:47]  different server components. Like now that's part of your like public API. So your API went from just call this component to call this component and remember to pass this child
[02:13:57] . Um, do you know, do you see what I'm talking about? Maybe not. I'm trying to think here. Cause there, there, there are some rules
[02:14:04]  we have where, uh, you can't import a server component into a client. Yeah. So like what I'm trying to say is like, you know, uh,
[02:14:11]  if you manage to get this working and your components can fetch their own data, regardless of whether they are client or server components, which is isomorphic. Right,
[02:14:19]  like you asked me like you still need use client with isomorphic components. Any component can fetch its own data. You don't need to have this restriction that if it
[02:14:28] 's fetching its data, its parent has to be another component that is capable of fetching its data. Like in server components, when you start writing your server component tree
[02:14:39] , at some point you decide to get into a client component tree cause like, you know, you need hooks or something. Yeah. And then after like say five levels
[02:14:46]  of that client component, you end up needing a component that wants to fetch its own data. What you do is you actually project it. You go five levels up and you
[02:14:53]  have to content project the server component. Right. That catches its own data. So like from that server components point of view, the API to render that client component tree just
[02:15:02]  went from call a single function and give it props. Yeah. To call a function, give it props and remember to also give it this child. Yeah. Because the
[02:15:11]  child gets its own data. Right. And that's like, it's breaking encapsulation of that client component tree. Yeah. Well, it depends. I mean, the
[02:15:19]  react perspective is that all children are also props. So like, right. Well, so yeah. Okay. It's a fancier prop, I guess. Yeah.
[02:15:29]  Um, but so like, yeah, but this is part of the challenge and the difficulty here because a prop across a boundary gets serialized eagerly where otherwise, like in
[02:15:40]  our case, it could be, uh, oh, oh, is it. There was like a weird thumbs up that showed up on my screen. Uh, uh,
[02:15:47]  it, it could be done eagerly where this, you know, uh, so like for us, our props are lazy, for example, generally speaking. So like,
[02:15:57]  it's kind of odd to, to, you know what I mean? Like when you, as you said, you, you render both branches, right? Like if
[02:16:02]  there's a, like, it doesn't matter if the client chose or hides it, you, you, you render both branches if they're server props, you know,
[02:16:10]  like it's part of the serialization, which is probably why it's, well, it's not probably, it's why it's really complicated for react to solve the
[02:16:16]  double data problem. Um, whereas Astro's awareness of slots probably helps them a little bit. And anyway, it's, it's. Yeah, I think we're
[02:16:26]  like very deep now. We're very deep now. Yeah. I'm, I levels. And then, you know, it's like two and a half hours almost
[02:16:33] . Yeah. Yeah. It's, it's all good. We, this is usually where I start wrapping up with the guests and make sure I didn't miss any other
[02:16:41] , um, good questions in here while we were getting off topic. Yeah. Yeah. So we talked about existing frameworks. Um, we talked, I don't know if
[02:16:54]  there's much more to, uh, yeah. Uh, yeah, not much about incremental Dom. You guys, you guys are moving away from incremental Dom then anyway.
[02:17:03]  We're not like yet. We haven't decided to like move away from it. We're just exploring signals to see whether it can solve some of the challenges that we're
[02:17:10]  seeing with incremental Dom and then we'll decide. Right. Who knows? You guys might even have a fine grained renderer. Who knows? Um, we do
[02:17:18] . Yeah. I'm just scrolling. Make sure. This is your chance. If you have any more questions for Jadon. Um, is there any website built with
[02:17:29]  whiz performance in the green area? Uh, man, I guess this, the YouTube, we know what's going on. I don't know. Google.com
[02:17:41] . Is it green? I, I think it might be in the yellow. Like it might be nice. Uh, I, I, I, the only reason, uh
[02:17:50] , I mean, we could try it. I, my gut here is there's something that people always underestimate ebay.com lighthouses at like, I want to
[02:18:04]  say like 39 or 40, like in that range. It is, it's, it's like not good. Right. And people like, well, you worked on Marco
[02:18:11] , blah, blah, blah. It's super fast website. Why, why does it do that? And the funny thing is when you talk internally at eBay and everyone's
[02:18:18]  like working on the framework and the testing stuff, our pages are tested. You know, without all the other junk, without the ads, all that stuff, you know
[02:18:25] , and it's lightning fast. Spend so much time making sure that JavaScript payloads. And obviously like there's mistakes that are made and, you know, developers are
[02:18:32]  developers. And we, we, we have a team checking. We had a team checking for regressions, checking like, oh, this page is like slowed X number
[02:18:40]  milliseconds. And they like go to the product team and see like, Hey, what's going on and all this stuff. And then you go and the final result is,
[02:18:48]  you know, you know, uh, like below. Like below 50 on, on, on page speed. And people are like, well, you did all this work
[02:18:56]  on a performance framework. Like it's almost like they don't believe you. And they're like, I'm just gonna use react. Cause it gives me, you know
[02:19:03] , 94% are on my hello world app. Or maybe not, but like, I think react can get a hundred on a hello world, maybe 98 or 99.
[02:19:12]  But like, you, you get my, you get my point. Yeah. So sometimes when this question comes out, it's like, I, I feel like maybe there
[02:19:19] 's like a difference between expectation of what a site ends up looking like. Like even Google.com compared to, um, you know, your, your personal blog site
[02:19:30] . Um, I don't know. I feel like that was part of what, uh, Dimitri was asking on the other thread when the previous thread after the
[02:19:40]  announcement, cause he was like, he wasn't just talking about YouTube. He was, he was actually posting page speed stuff from a whole bunch of Google sites. And
[02:19:48]  he was like, it's, you know, you know, like there's, there's some seventies in there, you know, like kind of yellow zones stuff.
[02:19:56]  And it's like, if this is so fast, why, why aren't these green? Well, it's just part of the whole thing, right? Like finally these
[02:20:04]  are businesses and they see a different kind of green, like as long as the business is working and like the app is meeting the need that it's designed to meet.
[02:20:12]  Performance is one aspect of why people come to the website. Right. Yeah. Yeah. I mean, I don't know, uh, offhand, I don't know
[02:20:22] . You probably, you probably don't lighthouse many of the, of the sites yourself. You're not sitting there testing that you guys are doing a different kind of testing performance
[02:20:32]  stuff. Yeah. We, we look more at like product metrics. So like, um, how much time did it take to like server search results or something? Like
[02:20:42]  that. Um, and, and those product metrics are like tied more closely to like the specific parts of the product that, that the business cares about the most. Uh
[02:20:54] , I thought that's an interesting question from Eisenberg effect actually. Yeah. Yeah. This is, this is interesting. I do feel like there is something missing in like
[02:21:06]  the web platform around deferred event handlers. Like I know technically in HTML, you can just actually have a little bit of JavaScript serialized into the initial page response
[02:21:17] , but then like it's not recommended instead you should use add event listener. Uh, as soon as the web started recommending add event listener, we created a problem and
[02:21:27]  the problem was that there is now this like gap and you need like some kind of event dispatch library. Uh, and you need to start like having attributes like just action so
[02:21:35]  that you don't drop events. And I think this is like very, very fundamental and like, if that gets addressed somehow in the platform itself, then yeah, then
[02:21:43]  I don't think that need resume ability, but till that's not addressed. You do need something to avoid dropping those events. Yeah. Yeah. Yeah. It's
[02:21:52]  kind of the, yeah. I mean, one of the challenges I'm still working on with all these kinds of boundary systems is just handling, um, asynchronic
[02:22:04] ity as, as well. Um, there's a, there's a lot of details in terms of the serialization of when stuff is available. Every, like almost
[02:22:12]  everything needs to, once you make one thing async, everything kind of becomes async. Well, it depends. Like, but you think about bubbling, right? Like
[02:22:19]  as soon as you have a deferred event handler, you're like wrecking havoc on like the bubble and the capture phase. Like what is even going to, what is
[02:22:25]  even supposed to happen? You have a replay phase now and like, yeah. Yeah. I mean, this has been one of the, actually the kind of part of the
[02:22:33]  challenge here too, right? Like, uh, uh, if, if, if we do event replays, um, and the person, you know, canceled the
[02:22:43]  event, like, do we assume they canceled the event? Like the native event, because we can't find that out until we actually run it. I know, I think
[02:22:50]  quick has a special syntax for it. Yeah. Like that's why even though solid has replay, if you click an anchor tag, I, you know, things that
[02:22:57]  have our submit a form or something fast enough, we'll, we'll fall back to progressive enhancement. Um, it would be cool in some cases where you'd be like
[02:23:04] , no, no, actually I don't want to fall back to progressive enhancement actually, because I know that's going to freaking reload the whole page on my user and,
[02:23:11]  you know, make them wait another X number of seconds. Cause it already took them that long. That's why they're clicking on it. Um, I, I
[02:23:16]  would like to just finish the process, you know, um, but I don't know this at the time that they click it. Cause I, you know, these things
[02:23:24]  have to happen synchronously. Yeah. It's interesting. So event handling is really the key part here then around, around presumably. Yeah. And then the data serialization
[02:23:33]  is like, you know, there's many, many options for it. Like, so that's probably, it's kind of like the event handler is like the watcher
[02:23:39]  and then the effect is the data serialization, right? I think there's a difference, like some frameworks, different frameworks will handle serialization in a different way,
[02:23:46]  but we need something in a platform to help us with events. Otherwise we are all going to make the same, you know, JS action like library. That's cool.
[02:23:55]  That's good. Yeah. Maybe that's our next opportunity here. Uh, so. All right. Um, I'm good on stuff then. I think, uh,
[02:24:03]  Jaden, um, I, we've given people enough chance to ask their, their, their questions. And I, I thank you Eisenberg effect for the,
[02:24:11]  for the good technical one there right at the end. Um, yeah. Yeah. Yeah. Another proposal to work on. Let's do it. Um, so yeah,
[02:24:19]  no, I think we're good to go. Um, I think we'll let Jaden go and, uh, we'll, we'll continue this, the stream on
[02:24:25]  after that. So thank you very much for joining me today. Um, I've learned a lot. Give me, definitely give me some things to think about. Um
[02:24:33] , I'm, I'm looking forward to seeing what this future with, you know, angular and wiz is going to look like. Um, and just how this, uh
[02:24:43] , kind of continues to evolve. Um, is there anyone you want to give shout outs to or any shout outs? Yeah. Um, well, first of all,
[02:24:50]  thank you a lot for having me on the stream. Like it's super exciting. And like, I feel like this is one of the high points of my career. Like
[02:24:57] , you know, being on me on your stream, I should just retire tomorrow. Happy man. Yeah. Thanks a lot for doing this. This is really awesome.
[02:25:04]  And like, you know, huge, huge shout out to, you know, angular and especially folks inside YouTube. Right? Like we couldn't have, we couldn't have
[02:25:14]  gotten as far as we did. And like, you know, uh, especially on like the signals library stuff. Like I had, we had like a lot of, you
[02:25:20]  know, YouTube engineers actually developing. So yeah. Yeah. I want to give a shout out to them. I know one guy at least is listening. Simone, uh,
[02:25:28]  you know, shout out to you and Chris, and it's really nice working with you guys. I forgot one thing. Sorry. Uh, I, I just,
[02:25:37]  before you go, um, can you tell us why Wiz is called Wiz? Ah, so there was a time when we were, um, yeah, we were naming a
[02:25:50]  lot of stuff after the Wizard of Oz. Uh, so we had names for things like Emerald Sea, uh, from Emerald City, um, Wiz after the Wizard
[02:26:02]  of Oz. Um, and there's something called Tin and there's something called, uh, Tik Tok. And there's something called Bok. All of these things
[02:26:11] , entities, characters, or stuff from the Wizard of Oz. Um, these are all real things that Googlers work with every day. And, you know, they're
[02:26:18]  all kind of 10 years old at this point. And, uh, they all had this inception from like, you know, the glorious moment we had around coming together to
[02:26:27]  make G plus. Right, right. So interesting. So this, these are all the secret code names for Google projects. Yeah. That's awesome. Yeah. I
[02:26:36] , I didn't even click on me until you mentioned it. I made this stream cover. Cause I was like, I was like, Wiz and like thinking of references on
[02:26:42]  Wizard of Oz. And I'm like, Oh, like behind the curtain, like, you know, see what's going on at Google. But then like, it turns
[02:26:48]  out it's actually named after that. So very, very cool here. Almost using F words for everything. Uh, but clearly, uh, stab at meta, but
[02:26:59] , um, yeah. All right. All right. Um, thank you very much for joining us today. And, uh, till next time, I look forward to chatting
[02:27:06]  more. Um, see you later. Yeah. Bye. Bye. Uh, that was awesome. Um, I hope we didn't lose you too much in some of that
[02:27:14]  technical, uh, stuff. Um, I. I definitely had a few questions for Jen and I hadn't talked to him, you know, in a few weeks.
[02:27:24]  So I definitely wanted to take that opportunity. I hope we all learned something along the process. Um, cause yeah, definitely very, very cool. I, I always love
[02:27:34]  talking with him and a few of the other experts, especially around the reactivity, resumability area. Great guests to have on. I'm glad we've had them
[02:27:41]  on now. Um, I'm sure we'll have an opportunity to have them on again in the future. Um, gonna have to rewatch the whole thing at least
[02:27:50]  twice. Yeah. No, it's, it's interesting to see how much things are moving still. Like you can have these technologies that have been around for a while,
[02:28:00]  but the stuff still shifting in this space. We're like constantly on this path to optimize both user experience and developer experience. So yeah, uh, yeah, no,
[02:28:10]  very exciting stuff. Um, yeah. I mean, the, we, we don't know the answer to these questions completely. Right. Like I was trying to drill a
[02:28:21]  bit about the data splitting stuff. Like there's so many aspects. That's what you said from a framework level, what's kind of cool with wiz is they like,
[02:28:27]  they didn't take responsibility for that. They had a very clear responsibility around the handling of like executing the right code for the right events. That was the whole focus around
[02:28:36]  it. Not what that code actually did. So like the, if there's trade-offs, the developers who built whatever with wiz would figure out what those trade-offs
[02:28:46]  are. Trying to approach this from like a declarative or more framework, you know, higher level, uh, becomes challenging. Cause we, you know, we can
[02:28:53]  make assumptions that are wrong. You know how much serialization is required. All these kinds of things require more experimentation and more thinking. So, um, yeah, definitely,
[02:29:03]  um, definitely something very cool. Yeah. I want to take a second here. Sorry. I missed this earlier on, uh, Twitch, but insanity later gifted a whole
[02:29:14]  bunch of subs. Um, uh, earlier in the stream, at least six or seven. Thank you very much. Um, and for, for the subs and also
[02:29:23]  it looks like, yeah, uh, they sub again themselves currently for 18 months. Wow. Almost two years of those, you know, on the stream. Thank you very
[02:29:38]  much for, for giving those subs out and for staying here as a constant part of the stream. Um, very, very cool. Um, very, very cool.
[02:29:47]  Thank you. So is resumability basically just deferred event handling laws? No, I mean, the key part, it's tricky. We showed it before.
[02:30:05]  It's tricky to defer event. Like, it's not like you just like, like, I wouldn't consider it resumability. If you just like, I mean
[02:30:13] , this is where Jadon and Misko probably differ a little bit. And then why I think like, we have to actually see it. It's not just like
[02:30:19] , okay, now you click event. Now we hydrate. Like that doesn't gain us anything. You need to be able to reduce the amount of code to run
[02:30:30] . Ideally, like as Jadon was talking with whiz, like they, they, they were kind of destructive initially. So it wouldn't ever hydrate because
[02:30:38]  it would just on change render the new thing. Right. Inner HTML. So it's not just deferring hydration. It's, it's, it's, it
[02:30:49] 's, it's, it's also never running that code to hydrate or at least the majority of it. Um, to do that though, it does start with event
[02:31:01]  handling. Right. So, yeah. Yeah. Um, what, what else do I want to talk about? I, I actually want to take a moment to talk
[02:31:15]  about, um, uh, I don't think I'm going to talk about my signal stuff. I, I did, I did write a new thing about how we could
[02:31:24]  handle rendering and signals and stuff, but I think I'm going to save that for another stream. I actually also wrote a thing a few weeks back about how, how,
[02:31:39]  how I did that. How I think we should benchmark. Can we talk about benchmarking for a minute? Yeah. Let's talk about, let's talk about benchmark
[02:31:46] ing for a minute because I feel like it's a topic. Um, I, it's funny enough. My stream on benchmarking is probably my least popular stream to
[02:31:58]  date, but, um, you know, let's do it. Cause I'm going to go on it. I'm going to go on it. Now, where
[02:32:07] 's my profile? Sorry. I'm going to go here because I wrote, I wrote this on Twitter. Yeah. Benchmarking. Yeah. Benchmark
[02:32:18] ing. Hello world. SSR. God. Uh, I, this is clearly a sub tweet. Benchmarking is easy. Unintentionally cheating benchmarks is
[02:32:29]  easier. Creating useful benchmarks is hard. Having those benchmarks to be fair is harder. Um, reason I wanted to bring this up or say this is because I get people
[02:32:38]  benchmark stuff a lot. And I always hear it with solid too, like on the positive side where people are like, Oh, I took this react app and I, or
[02:32:44]  I took the solid example and solves way faster. And it's like, yeah, I mean, the thing's not doing anything. You're seeing how fast you can update
[02:32:50]  text. Obviously the thing that doesn't have to differ and literally just sets the text node is going to be faster than pretty much any other framework out there, right? No
[02:32:57]  component re-render, like even less than Svelte. You know, like, you know, this, yes. If, if, if I wrote a vanilla
[02:33:04]  routine that just said set this text, you know, as fast as possible over and over again, that'd be even faster than using the reactive system. But what I sometimes
[02:33:13]  isn't always obvious, um, is that you can make assumptions that actually cheat the benchmarks, so to speak. Right. Where you do things where like unintentionally you ske
[02:33:25] w, skew the results of your benchmark. Perfect example of this, um, was some of those early tests. Uh, sorry, sorry, Aiden. Um
[02:33:32] , with million JS comparing the performance to react, um, and preact. And basically there was, there was some overhead in the benchmark that kind of skewed it.
[02:33:43]  This can also happen when I first entered the JS framework benchmark, um, with solid. I wasn't doing some things that were required and I didn't realize why,
[02:33:53]  and I didn't think they would make a difference. And guess what? They actually did make a difference. Um, when I implemented it initially, um, solid was like
[02:33:59]  much faster. And I was like thought, you know, haha, I knew this would be really fast, but the reality of it, it was, you know,
[02:34:07]  it wasn't nearly as fast as I thought it was because I would miss some details. Right. it was very easy to, to make a mistake. Um, and
[02:34:16]  kind of cheat a benchmark. Yeah. I'm not even talking about observation biased yet. that's, that's, that's, that's, but on the other
[02:34:28]  hand, creating benchmarks, measuring things that are useful is actually really hard because there's this tension between measuring something that's small, like that is measurable and measuring something that's
[02:34:41]  realistic, but hard to implement. Like not everyone's going to implement a full app to the same spec. You have to keep it small enough that you can actually make different
[02:34:49]  points of comparison, but also, um, large enough that you, you know, you can basically like be simulating something that at least has some realistic, relevant aspect
[02:35:01]  to it. I just let us talk that shit about next. Yes. I suppose so. But I, I, you know, everyone knows I take benchmarking seriously.
[02:35:14]  And the problem is even after you make something that's, um, useful, you might still like, it might not be fair. Like you might've designed the whole
[02:35:24]  benchmark just to like, like showcase this one aspect, you know, and maybe this is a question of how useful it is, but showcase of one aspect that might not actually
[02:35:36]  matter or in a lot of cases or something like it's like stuff can be useful for a framework author and completely not useful for the users of said framework. framework.
[02:35:47]  So, yeah, I mean, we all know where this started. I probably didn't even bookmark the actual tweet at this point, but it's not too hard to
[02:35:57]  find the, the, uh, the, the poster behind it. Right. Um, probably posts too much a day that I'm not even going to find it right now
[02:36:07] . I'm going to find it right now here. Benchmarks aren't useless. I'm kind of tired of people saying benchmarks are useless, but okay.
[02:36:19]  But on the other hand, lots of benchmarks are useless. Right. Benchmarks aren't useless. Lots of benchmarks are useless. marks are useless. This one,
[02:36:36]  where it started, actually, hugely flawed. Because at least if it's for multiple reasons, right? First of all, rendering a hello world, well, it depends on
[02:36:54]  what you're testing. Let's see here. If you're just testing the overhead of the framework, then I guess this is fair. Because rendering hello world doesn't
[02:37:04]  actually test how fast the framework renders, right? It doesn't actually test, like, spitting a string out. So I'll grant it this. This original test
[02:37:16]  is actually not the worst in that if you're just like, how much to start to, like, if I had AWS, and I was running AWS, and I
[02:37:22]  was like, you know, if I take my cold start plus framework startup on a request or whatever, like, what am I dealing with? Right. What matters more than
[02:37:38]  benchmark is ease of locality reason, useful extraction? Yeah, yeah, yeah. I mean, sure. It's longer in the same ballpark. And in some cases
[02:37:46] , we aren't actually completely in the same ballpark. But this, I actually think that the next.js complaint here has some, it has potential that it should
[02:37:58]  be investigated is what I should put out here. But where this started is that, like, it's 170 times lower, the same thing in pure react. So people went
[02:38:09]  and they built up the next version of this benchmark, where instead of doing a hello world, um, they, they, you know, added some more frameworks, they
[02:38:23]  added some data. And we ended up with this benchmark showing almost the exact same results again, as when they added solid, which solid, you know, slightly behind react
[02:38:34] , and then next remix and all the other frameworks, I think SvelteKit comes in around the same place as solid. But the problem with this benchmark is, yes
[02:38:43] , it's, it's, it's sending data now, like rows. So it's doing some rendering, but the react, you don't see it in this version
[02:38:50] , but someone had a version where they, they put, uh, where is it? Yeah, it's the version that, uh, that Evan Yu is using here.
[02:38:59]  See this duplication thing, where you notice all the ones that are times one, let me pull this up a bit so you can see it, are faster than all the
[02:39:06]  ones that are times two. It's because these are the ones that are actually sending data required for hydration. These apps actually don't send the data for hydration. So
[02:39:27]  you're basically doubling the payload because you know, like basically either you choose to, to use an example that's hydratable, or you choose to use an example with
[02:39:39]  knots. Some of these are streaming and some of these are not, which also makes a difference too. Basically, if you notice here that all base one Xers, because
[02:39:49]  they're not doing the same thing, in which case SvelteKit is the fastest and solid right behind it, which is actually consistent with what I've seen.
[02:39:56]  I think SvelteKit actually is slightly faster than us on async, then remix, and then, um, next page is the next. Or you do this test
[02:40:08] , which is the same as that benchmark test that I showed you guys a while ago, the SSR one, um, where you basically don't include hydration data, you
[02:40:17]  do synchronous rendering, no streaming. And yeah, I mean, that's the classic Marco test, right? And in fact, Marco couldn't help but get in on
[02:40:29]  this as well, right? This isn't Marco six, so I can talk about it. But the funniest thing is a bunch of people posted the numbers, people even using
[02:40:38]  like other languages and stuff. I think Marco is actually the highest score, um, on this test, just on a side note. What I'm trying to say is
[02:40:51]  like, it's also one X. basically I'll accept one X from a islands framework in theory, because you know, they could have saved on the serialization because
[02:41:05]  the, the way they did the double data, but any actual framework here, who are you kidding yourself? Like either, like you, you're either built, like the
[02:41:14]  problem is the react in the original example is cheating it. So like, if you were actually doing the same thing, of course, solid is way faster than react.
[02:41:22]  Of course, felt is way faster than react. In fact, most things are way faster than react, but, but that's not what you should be looking at here.
[02:41:31]  The only part of the, you basically look at all the twos or look at all the ones, but looking at this is basically meaningless. Well, that's the
[02:41:43]  funny thing. When I did those benchmarks previously for the SSR benchmark, I made a vanilla version of the, like the, basically the one times thing. Cause I want
[02:41:50]  to know how much faster I can make solid. Solid was already the fastest, multiple times faster than any other framework. And I was like, how can I make it faster
[02:41:56] ? Um, so I made the vanilla version. That's actually the right advice. You need to find the right baseline. If two is what you want to do, then
[02:42:08]  make a vanilla version that does what two does. So I'm giving next.js. I mean, next.js does look really pitiful here where it like the
[02:42:21]  other side, this is solid base, but solid base and solid start are almost identical. Like it's the same streaming. Our base rendering has all the serialization built in
[02:42:31]  kind of, uh, you know, like it basically does all the things that you get in the meta framework. If someone just picks up solid, you get all the,
[02:42:37]  you know, it's why our resources just work. Everything we are primitives basically work on SSR the way they work in a meta framework. But so when you
[02:42:46] 're comparing say SvelteKit, solid start remix, they're in the same ballpark, right? Then next page is a bit slower. This one seems slower than
[02:43:00]  I expect. Actually, my experience is next is very very close to remix. So I don't know if they've screwed up on next here as well. So my
[02:43:10] , my general feeling here is that our, if it is that RSEs might be significant, like in the app directory might be significantly slower than the pages, but from
[02:43:21]  this benchmark, just because of my my previous experience of looking at other benchmarks, I suspect that, yes, I suspect that while next is clearly the slowest probably
[02:43:32] , um, this is probably exaggerated. Yeah. I mean, there, there, there is, there is some amount of router overhead, I guess, but this, but
[02:43:44]  the, do you know what the problem is? I feel like people who, who know better have gotten into this conversation and, and, and kind of skewed the
[02:43:53]  narrative. Like, like, look, look, look, look, like, let's be fair. The Marco guys know what's up. Benchmarks are misleading,
[02:44:00]  but like, they're, they're joking around. Right. But my, my, my concern with this stuff is like, look, no, no, no, no
[02:44:08] , sorry. This, this one here. Uh, no, not this bookmarks. Let's, let's look at a few of these. Added vanilla S
[02:44:17] velte for shits and giggles. Now I'm wondering what we can do to reduce software as Svelte kits router. It's not Svelte kits router that
[02:44:23]  why Svelte is so much faster. This version is the one X version, kind of like the, the react one, which shows unsurprisingly, that Svel
[02:44:33] te is about seven times faster than react. That's consistent with what I know. However, it's not doing the data serialization. So it's like, this has
[02:44:42]  nothing to do with Svelte kits router. It's because this is basically cheating the benchmark, right? Like it's not streaming. It's not hydrating.
[02:44:53]  It's not a completely fair test since Svelte does. Yeah. No, like it, this is just not even comparable. Right. Right. Again, this is
[02:45:03]  consistent. Svelte at about 4,000. Marco is about 6,000, right? Like this is where I would expect for a 1.0 X test.
[02:45:11]  You're just comparing the things. You know, again, all these view ones are now 1 X. Again, this doesn't matter. You guys ship JavaScript, right
[02:45:24] ? You, you, you hydrate anything like I, some people saw this like, oh, it made view two times faster in this benchmark. Well, do you think
[02:45:33]  Evan would have missed a 2 X gain on something that was actually useful? This, this is, this is just, you know, like, I mean, if it
[02:45:46]  does, if it did improve the performance of, of the synchronous rendering, I do want to check it out. This is actually what he found here is interesting, but
[02:45:53]  basically the whole comparison here is completely like, it's just, I, as I said, not benchmarking is not useless. Some benchmarks are useless. Like this, this
[02:46:07]  is just, you know, it's interesting to see, like, I think there's a pre-act, all the framework authors jumped on it, this one.
[02:46:16]  And it's just like, guys, you know, that this doesn't actually show anything. I don't know. That's, that's why I wrote my, my
[02:46:25] , my tweet, because it's just like everybody who jumped in made a one X example to get to the top of that list. And it's just like, if
[02:46:35]  we're comparing to next, let's be realistic here, at least, and try and make, you know, a streaming version that, you know, handles async data
[02:46:44] , hydration, you know, something at least in the ballpark of being comparable. But, you know, this is what sensationalism is on Twitter. And to be
[02:47:06]  fair, yeah, or Astro, and to be fair, even then, it depends on what the app is, because if it's interactive, then it, it should
[02:47:17]  be two X. Like, it depends on what, what the rows are. But yes, I could see that argument. But yes, granted, right? Any framework
[02:47:30]  that hydrates, this is like just sidestepping. It's like, yeah, guess what, we can ship a version with no JavaScript. How many of you guys
[02:47:37]  are doing that? Yeah, well, I mean, this is this, this is this is the difference, right? I take benchmarking seriously. I think benchmarking
[02:47:49]  is important. Anyway. I mean, you could just see the difference, right? Because, like, all benchmarks are meaningless, right? That's, that's Richard's
[02:48:07]  perspective. I disagree. That's fine. We have the different perspective. You know, I think this is actually some of my initial friction, me and Rich get along
[02:48:18]  good now. But some of my initial friction with the whole thing before I knew Rich was, I remember one of his talks, and he referenced a bunch of benchmarks, which
[02:48:25]  were known in the community to basically be useless. And he used that in one of his talks, he just felt it was 20 times faster than React. And again, he
[02:48:32]  did it in a joking manner. But I was like, I remember the first time seeing that being like, man, this just propagates so much misinformation for people who
[02:48:39]  are actually trying to be accurate, and trying to like, explore and understand the characteristics or behaviors of these things. But yeah, anyway. Why'd you guys do it
[02:48:57]  in chat? Yeah. I do think this is interesting about the getters on plain objects. I think we've seen this problem. Actually, I think when the Angular
[02:49:21] , dealing with signals with dot value, we saw this actually being a considerable issue. Yeah, after optimizing that odd case. Yeah. Anyways, I just, I don
[02:49:37] 't like this discourse at all, because it's like, I'm not going to go bother build the 1.0 version. It's all because why am I going to
[02:49:47] ? Why am I going to do that? Oh, guess it's still going. Interesting. This suggests that start might have more overhead than I'm picturing.
[02:50:13]  But if we're going to test that, we should test that in a better test. Except to be fair, on his computer, he's close to Remix, and
[02:50:22]  he's both using React. So yeah, I mean, this is interesting. He's still ahead of next, though. Oh yeah, that's true. If someone
[02:50:39]  was mentioning that the solid version was the dev version, I don't know if that matters that much. Probably a little bit. I don't, honestly, you can
[02:50:46]  start seeing when there's so many aspects and facets to this, why, like, it's not even, it's hard to even take any of it with any, even
[02:50:56]  remote value. Next might not even be the slowest. Like, honestly, like, I remember when Steve from Builder put out his benchmarks and he went through like
[02:51:08]  multiple iterations to get to a point where we were kind of finally maybe getting something semi in a good place. This test has, has weeks before and lots of effort before it
[02:51:22]  could get to anything that I could even make a bit of a conclusion from. Anyway. That's all I really have to say about benchmarking. Anyways, let me
[02:51:45]  drink some water here. Was it Epic web comp today? Or no, I guess it was yesterday and now everyone's catching up with what happened on Twitter. Yeah,
[02:52:13]  no, it's interesting. I know you guys want to hear about my opinion of the signals stuff, but as I said, I think I covered it all with J
[02:52:20] adon. I, I'm not going to bother, um, I'm not going to bother, uh, how should I put it, uh, getting into the specific
[02:52:31]  details of it at this point. I'm familiar with it. I've read it multiple times, but I've also like not spent the same level of thinking with it because
[02:52:41]  these things take time and like stage one is a good step. It means now we're at a point where people like acknowledge that this can be a thing moving forward and
[02:52:50]  conversations will continue and you know, this will take a bit of time. So I'm, I'm okay with like, I vetted it as far as understanding that we
[02:53:00]  can build what we want on top of it, but I don't have many opinions beyond that. Yeah, no, I'm, I'm glad. I mean, there
[02:53:10] 's enough people, you know, wanting this. So I think, I think it's a big step forward. We've had a hard time getting reactivity proposals into
[02:53:18]  JS. You know, I always bring up that Brendan Eich thing where he's like, JavaScript's not a data flow language, you know, but you know, people
[02:53:25]  are going to keep on pushing for it. So yeah, I don't I don't, I don't think I'm going to really have much more to go on
[02:53:41]  on that. Let me just check my profile here for a second. Profile. Yeah. Yeah. Yeah. All right. Yeah. I mean, yeah, that
[02:54:04] 's, that's the takeaway. This is a win. So yeah. What time is it? It's about three o'clock. Yeah. That's not,
[02:54:15]  that's not bad. That's not bad. We did, we did, we did good today. Um, yeah. Give me one more second here. I want to
[02:54:25]  actually check on the Twitch stream, how we're doing. Oh, Primogen is streaming right now. Um, yeah, no, we're, we're all good.
[02:54:42]  Okay. Does anyone have any quick questions for me right now? I'm just getting set up for will signals come first in observable spec. It's hard to
[02:54:55]  say. I don't, I don't know. It's funny. Me and Ben Lesh had this conversation and he said, observables are more general and I can
[02:55:04]  see that on one side, but they're also like, like, it's very hard. Like you can say, Oh, signals are behavior subjects, but they're
[02:55:15]  not like, it's just a different look of what reactive programming is. Like, it depends on what your truth is. Cause for me, when I look at signals
[02:55:26]  and like the graph, I think about a synchronization system. And to me, transformations live inside a sync, like inside uh, uh, a synchronization system, not
[02:55:39]  the other way around. You can also say that the, uh, transformations are the inputs to a synchronizing system. So like, I, I don't know if one
[02:55:47]  is more fundamental than the other, so to speak. I've tried to build signal language libraries on top of Rx primitives and it did not go very well.
[02:55:56]  Um, that's solid was kind of like that for a bit back in 2018, no 17 ish. So I, I it's, it's interesting. The challenge
[02:56:06]  is that they've been trying to get observables in, in a certain way. And people are like, why do we want them? There is some benefits to signals
[02:56:16] , but I, I've, I, I don't know if we haven't seen it yet, but I suspect we might start getting bigger pushback now that it's
[02:56:22]  a higher stage. Like some people might come out of the woodwork and be like, I really dislike this proposal. So we're gonna have to see how this goes.
[02:56:28]  So, yeah. Um, I talked a lot about some of the 2.0 stuff, you know, with my signals 2.0 stream that last, last week
[02:56:44] . So I think, I think, um, I think, I think we're good.